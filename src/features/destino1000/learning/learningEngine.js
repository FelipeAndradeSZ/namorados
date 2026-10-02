/**
 * DESTINO 1000 — Motor de Aprendizagem Adaptativa (Learning Engine)
 * Baseado em Ciência Cognitiva: Repetição Espaçada (SM-2 Modificado),
 * Taxonomia de Erros e Calibração de Confiança.
 */

export const ERROR_CATEGORIES = {
  interpretacao: {
    id: "interpretacao",
    label: "Interpretação do Enunciado",
    icon: "FileSearch",
    description: "Dificuldade em identificar o que a questão realmente pediu ou em extrair dados dos textos de apoio.",
    tip: "Destaque a pergunta final e os dados numéricos antes de olhar as alternativas."
  },
  conceito: {
    id: "conceito",
    label: "Conceito Teórico",
    icon: "BookOpen",
    description: "Falta de domínio da teoria, fórmula, contexto histórico ou definição essencial.",
    tip: "Revise a aula teórica básica e monte um flashcard do conceito chave."
  },
  calculo: {
    id: "calculo",
    label: "Erro de Conta ou Álgebra",
    icon: "Divide",
    description: "O raciocínio estava certo, mas houve deslize na conta, vírgula, fração ou simplificação.",
    tip: "Faça contas no papel com calma e use estimativas para checar a ordem de grandeza."
  },
  atencao: {
    id: "atencao",
    label: "Distração / Pegadinha",
    icon: "AlertTriangle",
    description: "Caiu em distrator clássico, confundiu unidades ou não notou palavras como 'exceto' e 'incorreto'.",
    tip: "Sublinhe comandos restritivos no enunciado com atenção redobrada."
  },
  tempo: {
    id: "tempo",
    label: "Pressão de Tempo",
    icon: "Clock",
    description: "Falta de tempo para ler com calma, gerando corrida e precipitação na escolha.",
    tip: "No ENEM você tem ~3 minutos por questão. Se travar mais de 2 minutos, pule e volte depois."
  },
  vocabulario: {
    id: "vocabulario",
    label: "Vocabulário / Termo Desconhecido",
    icon: "SpellCheck",
    description: "Palavra erudita ou termo técnico que travou a compreensão global.",
    tip: "Tente deduzir o significado pelo contexto dos parágrafos vizinhos."
  },
  chute: {
    id: "chute",
    label: "Chute sem Certeza",
    icon: "HelpCircle",
    description: "Não sabia como resolver e escolheu ao acaso ou por intuição frágil.",
    tip: "Tente sempre eliminar pelo menos 2 alternativas visivelmente absurdas antes de chutar."
  }
};

export const CONFIDENCE_LEVELS = {
  chute: { id: "chute", label: "Chute 😰", multiplier: 0.5, desc: "Adivinhação quase cega" },
  baixa: { id: "baixa", label: "Baixa 😕", multiplier: 0.8, desc: "Insegura entre 2 opções" },
  media: { id: "media", label: "Média 🙂", multiplier: 1.0, desc: "Boa chance de acerto" },
  alta:  { id: "alta",  label: "Alta 😎",  multiplier: 1.25, desc: "Certeza absoluta" },
};

/**
 * Calcula o próximo agendamento de revisão com algoritmo SM-2 Adaptado
 * @param {Object} currentSchedule { repetitionCount, intervalDays, easeFactor }
 * @param {boolean} isCorrect Se a estudante acertou
 * @param {string} confidence 'chute' | 'baixa' | 'media' | 'alta'
 * @returns {Object} { repetitionCount, intervalDays, easeFactor, nextReviewDate }
 */
export function calculateNextReview(currentSchedule = {}, isCorrect, confidence = "media") {
  let reps = currentSchedule.repetitionCount || 0;
  let interval = currentSchedule.intervalDays || 1;
  let ef = currentSchedule.easeFactor || 2.5;

  if (isCorrect) {
    // Acerto: avalia solidez do conhecimento
    if (confidence === "chute" || confidence === "baixa") {
      // Acertou na sorte: não expande o intervalo com força
      interval = Math.max(1, Math.round(interval * 1.2));
    } else {
      reps += 1;
      if (reps === 1) {
        interval = 1; // 1 dia
      } else if (reps === 2) {
        interval = 3; // 3 dias
      } else {
        interval = Math.round(interval * ef);
      }
      // Se acertou com alta confiança, eleva a facilidade
      if (confidence === "alta") {
        ef = Math.min(3.0, ef + 0.15);
      }
    }
  } else {
    // Erro: reinicia ciclo de repetição
    reps = 0;
    interval = 1; // Revisar amanhã

    // ERRO COM ALTA CONFIANÇA é o mais perigoso (falsa certeza) -> penaliza mais o ease factor
    if (confidence === "alta") {
      ef = Math.max(1.3, ef - 0.35);
    } else {
      ef = Math.max(1.3, ef - 0.2);
    }
  }

  // Calcular data alvo
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + interval);
  const nextReviewDate = nextDate.toISOString().split("T")[0];

  return {
    repetitionCount: reps,
    intervalDays: interval,
    easeFactor: parseFloat(ef.toFixed(2)),
    nextReviewDate
  };
}

/**
 * Atualiza a estimativa de domínio de uma habilidade (0% a 100%)
 * @param {number} currentMastery Domínio atual (0 a 100)
 * @param {boolean} isCorrect Acertou ou errou
 * @param {number} questionDifficulty Dificuldade da questão (1 a 5)
 * @param {string} confidence Nível de confiança
 * @returns {number} Novo domínio calibrado (0 a 100)
 */
export function updateSkillMastery(currentMastery = 50, isCorrect, questionDifficulty = 3, confidence = "media") {
  const confMult = CONFIDENCE_LEVELS[confidence]?.multiplier || 1.0;
  const diffFactor = questionDifficulty / 3; // 0.33 a 1.66

  let delta;
  if (isCorrect) {
    // Ganhos proporcionais à dificuldade da questão
    delta = 6 * diffFactor * confMult;
  } else {
    // Perdas suavizadas para evitar frustração
    delta = -5 * (1 / diffFactor);
  }

  const newMastery = Math.max(5, Math.min(100, Math.round(currentMastery + delta)));
  return newMastery;
}

/**
 * Motor de Recomendação: "O Que Eu Devo Estudar Hoje?"
 * Seleciona os temas prioritários com base em lacunas, tempo sem revisão e histórico
 */
export function getDailyRecommendation(playerState) {
  const mastery = playerState.masteryMatrix || {};
  const today = new Date().toISOString().split("T")[0];

  // 1. Identificar revisões vencidas hoje
  const dueReviews = [];
  const attempts = playerState.history || [];
  
  attempts.forEach(att => {
    if (att.reviewSchedule && att.reviewSchedule.nextReviewDate <= today) {
      dueReviews.push(att.questionId);
    }
  });

  // 2. Encontrar a área com menor domínio médio
  const areas = ["matematica", "natureza", "humanas", "linguagens"];
  const areaScores = areas.map(area => {
    const scores = Object.keys(mastery)
      .filter(k => k.startsWith(area))
      .map(k => mastery[k]);
    const avg = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 40;
    return { area, avg };
  }).sort((a, b) => a.avg - b.avg);

  const weakestArea = areaScores[0]?.area || "matematica";

  return {
    recommendedArea: weakestArea,
    hasDueReviews: dueReviews.length > 0,
    dueReviewsCount: dueReviews.length,
    reason: `Detectamos que ${weakestArea.toUpperCase()} é a área que mais pode alavancar sua pontuação no ENEM neste momento.`,
    recommendedDuration: "20 minutos",
    targetMission: `Sessão de Fortalecimento em ${weakestArea}`
  };
}

/**
 * Estimador de Pontuação TRI do ENEM (Teoria de Resposta ao Item Simplificada)
 * Avalia consistência pedagógica: acertos em questões fáceis, médias e difíceis.
 * Se errar fáceis e acertar difíceis, a TRI penaliza por incoerência (chute).
 * 
 * @param {Array} attempts Histórico de questões resolvidas
 * @param {string} area Área avaliada ('matematica', 'natureza', 'humanas', 'linguagens')
 * @returns {Object} { estimatedScore, coherenceLevel, easyAcc, medAcc, hardAcc }
 */
export function estimateTRIScore(attempts = [], area = "matematica") {
  const areaAttempts = attempts.filter(a => a.area === area || !a.area);
  if (areaAttempts.length === 0) {
    return {
      estimatedScore: 500, // Média nacional padrão
      coherenceLevel: "Neutro",
      accuracyPercent: 0,
      totalAnswered: 0
    };
  }

  const easy = areaAttempts.filter(a => (a.difficulty || 3) <= 2);
  const med = areaAttempts.filter(a => (a.difficulty || 3) === 3);
  const hard = areaAttempts.filter(a => (a.difficulty || 3) >= 4);

  const easyAcc = easy.length ? easy.filter(a => a.isCorrect).length / easy.length : 0.5;
  const medAcc = med.length ? med.filter(a => a.isCorrect).length / med.length : 0.5;
  const hardAcc = hard.length ? hard.filter(a => a.isCorrect).length / hard.length : 0.5;

  const totalCorrect = areaAttempts.filter(a => a.isCorrect).length;
  const rawAcc = totalCorrect / areaAttempts.length;

  // Coerência pedagógica: o candidato ideal acerta fácil > médio > difícil
  let coherence = 1.0;
  if (hardAcc > easyAcc && hard.length >= 2 && easy.length >= 2) {
    coherence = 0.82; // Incoerência: acertou difícil mas errou fácil (penalização por chute)
  } else if (easyAcc >= medAcc && medAcc >= hardAcc) {
    coherence = 1.15; // Coerência pedagógica perfeita: bônus TRI
  }

  // Faixas máximas do ENEM por área
  const areaMax = {
    matematica: 980,
    natureza: 860,
    humanas: 840,
    linguagens: 820
  };
  const areaBase = 320;
  const max = areaMax[area] || 850;

  let estimated = areaBase + (max - areaBase) * rawAcc * coherence;
  estimated = Math.max(300, Math.min(max, Math.round(estimated)));

  return {
    estimatedScore: estimated,
    coherenceLevel: coherence > 1.0 ? "Alta Coerência (TRI Favorável)" : coherence < 1.0 ? "Incoerente (Possível Chute)" : "Equilibrado",
    accuracyPercent: Math.round(rawAcc * 100),
    totalAnswered: areaAttempts.length,
    easyAccuracy: Math.round(easyAcc * 100),
    medAccuracy: Math.round(medAcc * 100),
    hardAccuracy: Math.round(hardAcc * 100)
  };
}

/**
 * Análise Diagnóstica do Caderno de Erros
 * Identifica o padrão de falhas da estudante para intervenção direcionada
 */
export function analyzeErrorPatterns(errorNotebook = []) {
  if (!errorNotebook || errorNotebook.length === 0) {
    return {
      totalErrors: 0,
      topCategory: null,
      topCategoryLabel: "Nenhum erro registrado",
      categoryBreakdown: {},
      remedyTip: "Resolva questões para mapear seus pontos de melhoria!"
    };
  }

  const breakdown = {};
  errorNotebook.forEach(err => {
    const cat = err.errorCategory || "chute";
    breakdown[cat] = (breakdown[cat] || 0) + 1;
  });

  const sortedCats = Object.entries(breakdown).sort((a, b) => b[1] - a[1]);
  const topCat = sortedCats[0][0];
  const catInfo = ERROR_CATEGORIES[topCat] || ERROR_CATEGORIES.interpretacao;

  return {
    totalErrors: errorNotebook.length,
    topCategory: topCat,
    topCategoryLabel: catInfo.label,
    topCategoryPercent: Math.round((sortedCats[0][1] / errorNotebook.length) * 100),
    categoryBreakdown: breakdown,
    remedyTip: catInfo.tip
  };
}

