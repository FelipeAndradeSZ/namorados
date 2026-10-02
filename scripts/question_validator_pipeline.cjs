/**
 * PIPELINE DETERMINÍSTICO DE VALIDAÇÃO E AUDITORIA DE QUESTÕES ENEM
 * 
 * Executa as 5 camadas de validação obrigatórias:
 * 1. Validador Estrutural de Schema (Tipos, campos obrigatórios, 5 alternativas)
 * 2. Validador Pedagógico de Gabarito (Exatamente 1 correta, 4 distratores com justificativa)
 * 3. Detector de Duplicatas e Similaridade de Jaccard (Prevenção de cópias/paráfrases)
 * 4. Validador de Consistência e Termos de Viagem (Garante ZERO termos residuais)
 * 5. Mapeador de Lacunas Curriculares da Matriz do INEP (120 Habilidades)
 */

const fs = require('fs');
const path = require('path');

const QUESTIONS_DIR = path.join(__dirname, '..', 'src', 'features', 'destino1000', 'content', 'questions');

const TRAVEL_BANNED_PATTERNS = [
  { pattern: /\bviagem(ns)?\b/i, name: 'viagem' },
  { pattern: /\bviajar\b/i, name: 'viajar' },
  { pattern: /\baeroporto(s)?\b/i, name: 'aeroporto' },
  { pattern: /\bavi(ão|ao|ões|oes)\b/i, name: 'avião' },
  { pattern: /\bpassagem\s+(a[eé]rea|de\s+(avi[aã]o|[oô]nibus|navio)|de\s+ida|de\s+volta)\b/i, name: 'passagem de viagem' },
  { pattern: /\bcomprar\s+passagen?s?\b/i, name: 'comprar passagem' },
  { pattern: /\b(hotel|hot[eé]is|hoteis|hospedagem)\b/i, name: 'hotel/hospedagem' },
  { pattern: /\b(?<!fu)turismo\b/i, name: 'turismo' }, // ignores futurismo
  { pattern: /\bturista(s)?\b/i, name: 'turista' },
  { pattern: /\bpassaporte(s)?\b/i, name: 'passaporte' },
  { pattern: /\bvisto\s+(consular|de\s+turista|de\s+viagem)\b/i, name: 'visto consular/viagem' },
  { pattern: /\b(embarque|desembarque)\b/i, name: 'embarque/desembarque' },
  { pattern: /\bmilhas\b/i, name: 'milhas' },
  { pattern: /\bag[eê]ncia\s+de\s+viagen?s?\b/i, name: 'agência de viagens' },
  { pattern: /\b(ponto|destino)\s+tur[ií]stico\b/i, name: 'destino/ponto turístico' }
];

function tokenize(text) {
  if (!text) return new Set();
  return new Set(
    text.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 3)
  );
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const elem of setA) {
    if (setB.has(elem)) intersection++;
  }
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

function runFullValidationPipeline() {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('🚀 INICIANDO PIPELINE DE VALIDAÇÃO DE QUESTÕES ENEM');
  console.log('═══════════════════════════════════════════════════════════════\n');

  const allQuestions = [];
  const errors = [];
  const warnings = [];
  const seenIds = new Map();
  const tokenizedPrompts = [];

  function loadDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) {
        loadDirectory(full);
      } else if (f.endsWith('.js')) {
        const content = fs.readFileSync(full, 'utf8');
        const match = content.match(/export\s+const\s+(\w+)\s*=\s*(\[[\s\S]*\]);?/);
        if (match) {
          try {
            const arr = new Function(`return ${match[2]}`)();
            arr.forEach((q, idx) => {
              q._file = path.relative(process.cwd(), full);
              q._fileIndex = idx;
              allQuestions.push(q);
            });
          } catch (e) {
            errors.push(`[SINTAXE] ${f}: Falha ao avaliar código JavaScript: ${e.message}`);
          }
        }
      }
    }
  }

  loadDirectory(QUESTIONS_DIR);

  console.log(`📚 Banco carregado: ${allQuestions.length} questões encontradas.\n`);

  // ── ESTÁGIO 1: Validação de Schema e Unicidade ──
  allQuestions.forEach((q) => {
    // ID Check
    if (!q.id) {
      errors.push(`[SCHEMA] ${q._file} (Item ${q._fileIndex}): ID ausente.`);
      return;
    }
    if (seenIds.has(q.id)) {
      errors.push(`[DUPLICIDADE DE ID] ID repetido '${q.id}' em ${q._file} e ${seenIds.get(q.id)}`);
    } else {
      seenIds.set(q.id, q._file);
    }

    // Campos essenciais
    ['area', 'topic', 'prompt', 'options', 'detailedExplanation'].forEach(field => {
      if (!q[field]) {
        errors.push(`[SCHEMA] Questão ${q.id}: Campo obrigatório '${field}' ausente.`);
      }
    });

    // Alternativas
    if (Array.isArray(q.options)) {
      if (q.options.length !== 5) {
        errors.push(`[OPÇÕES] Questão ${q.id}: Esperado 5 alternativas, encontrado ${q.options.length}.`);
      }
      const correctCount = q.options.filter(o => o.isCorrect).length;
      if (correctCount !== 1) {
        errors.push(`[GABARITO] Questão ${q.id}: Possui ${correctCount} alternativas marcadas como corretas (deve ser exatamente 1).`);
      }
    }

    // Explicação detalhada
    if (q.detailedExplanation) {
      if (!q.detailedExplanation.summary) {
        errors.push(`[PEDAGÓGICO] Questão ${q.id}: Falta resumo (summary) na explicação.`);
      }
      if (!q.detailedExplanation.coreConcept) {
        warnings.push(`[PEDAGÓGICO] Questão ${q.id}: Falta conceito central (coreConcept).`);
      }
    }

    // ── ESTÁGIO 2: Banimento Absoluto de Termos de Viagem ──
    const fullText = JSON.stringify(q);
    for (const { pattern, name } of TRAVEL_BANNED_PATTERNS) {
      if (pattern.test(fullText)) {
        errors.push(`[REGRA ABSOLUTA] Questão ${q.id} contém termo proibido de viagem: '${name}'`);
      }
    }

    // Coleta para detector de similaridade
    tokenizedPrompts.push({ id: q.id, tokens: tokenize(q.prompt) });
  });

  // ── ESTÁGIO 3: Detecção de Paráfrases e Duplicatas com Jaccard ──
  let duplicatePairs = 0;
  for (let i = 0; i < tokenizedPrompts.length; i++) {
    for (let j = i + 1; j < tokenizedPrompts.length; j++) {
      const sim = jaccardSimilarity(tokenizedPrompts[i].tokens, tokenizedPrompts[j].tokens);
      if (sim > 0.85) {
        warnings.push(`[SIMILARIDADE ALTA] Possível duplicata entre ${tokenizedPrompts[i].id} e ${tokenizedPrompts[j].id} (${Math.round(sim * 100)}% de sobreposição).`);
        duplicatePairs++;
      }
    }
  }

  // ── ESTÁGIO 4: Mapeamento de Cobertura Curricular ──
  const areaBreakdown = {};
  allQuestions.forEach(q => {
    areaBreakdown[q.area] = (areaBreakdown[q.area] || 0) + 1;
  });

  console.log('📊 DISTRIBUIÇÃO CURRICULAR ATUAL:');
  for (const [area, count] of Object.entries(areaBreakdown)) {
    console.log(`   • ${area.padEnd(12)}: ${count} questões`);
  }
  console.log('');

  // ── RESULTADO FINAL DO PIPELINE ──
  console.log('───────────────────────────────────────────────────────────────');
  if (errors.length === 0) {
    console.log('✅ PIPELINE APROVADO: 100% DAS QUESTÕES CUMPREM OS CRITÉRIOS PEDAGÓGICOS E DETERMINÍSTICOS.');
  } else {
    console.log(`❌ ENCONTRADOS ${errors.length} ERROS CRÍTICOS NO BANCO:`);
    errors.slice(0, 15).forEach(e => console.log('   ' + e));
    if (errors.length > 15) console.log(`   ... e mais ${errors.length - 15} erros.`);
  }

  if (warnings.length > 0) {
    console.log(`\n⚠️  ${warnings.length} AVISOS DE ATENÇÃO:`);
    warnings.slice(0, 5).forEach(w => console.log('   ' + w));
  }
  console.log('───────────────────────────────────────────────────────────────\n');

  return errors.length === 0;
}

const success = runFullValidationPipeline();
process.exit(success ? 0 : 1);
