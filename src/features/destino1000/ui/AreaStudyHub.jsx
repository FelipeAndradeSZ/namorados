import { useState } from "react";
import { 
  Atom, 
  Calculator, 
  Globe, 
  BookOpen, 
  PenTool, 
  ArrowLeft, 
  GraduationCap, 
  Lightbulb, 
  AlertTriangle, 
  FileText,
  Play,
  Zap,
  RotateCcw,
  Brain
} from "lucide-react";

import { ENEM_AREAS } from "../content/curriculum";
import { getTheoryForModule } from "../content/theoryData";
import { FlashcardDeck } from "./FlashcardDeck";

// Mapeamento dos módulos de questões por área do ENEM
const AREA_TOPICS = {
  natureza: [
    { id: "natureza/ecologia", name: "Ecologia e Dinâmica Ambiental", tag: "Biologia", priority: "Crítica • Top 1", questionsCount: 25 },
    { id: "natureza/citologia", name: "Citologia e Metabolismo Energético", tag: "Biologia", priority: "Crítica • Top Medicina", questionsCount: 25 },
    { id: "natureza/eletricidade", name: "Eletrodinâmica e Circuitos", tag: "Física", priority: "Alta • Cai Todo Ano", questionsCount: 25 },
    { id: "natureza/ondulatoria", name: "Ondulatória, Acústica e Óptica", tag: "Física", priority: "Crítica • V = λ·f", questionsCount: 25 },
    { id: "natureza/termologia", name: "Termologia, Calorimetria e Dilatação", tag: "Física", priority: "Alta • Trocas Térmicas", questionsCount: 25 },
    { id: "natureza/estequiometria", name: "Estequiometria e Cálculos Químicos", tag: "Química", priority: "Alta • Ouro da TRI", questionsCount: 25 },
    { id: "natureza/quimica-organica", name: "Química Orgânica e Reações", tag: "Química", priority: "Alta • Isomeria e Funções", questionsCount: 25 },
    { id: "natureza/eletroquimica", name: "Eletroquímica e Pilhas", tag: "Química", priority: "Alta • Pilhas e Corrosão", questionsCount: 25 },
    { id: "natureza/genetica", name: "Genética, DNA e Biotecnologia", tag: "Biologia", priority: "Alta", questionsCount: 25 },
    { id: "natureza/mecanica", name: "Mecânica e Conservação de Energia", tag: "Física", priority: "Alta", questionsCount: 25 },
    { id: "natureza/termoquimica", name: "Termoquímica e Cinética Química", tag: "Química", priority: "Média-Alta", questionsCount: 25 },
    { id: "natureza/evolucao", name: "Evolução e Genética de Populações", tag: "Biologia", priority: "Crítica • Neodarwinismo", questionsCount: 25 },
    { id: "natureza/solucoes-equilibrio", name: "Equilíbrio Químico e Soluções", tag: "Química", priority: "Crítica • pH e Le Chatelier", questionsCount: 25 },
    { id: "natureza/fisiologia-humana", name: "Fisiologia Humana e Imunologia", tag: "Biologia", priority: "Crítica • Top Medicina", questionsCount: 25 },
  ],
  matematica: [
    { id: "matematica/razao-proporcao", name: "Razão, Proporção e Escala", tag: "Aritmética", priority: "Crítica • Mais Cobrado", questionsCount: 25 },
    { id: "matematica/porcentagem", name: "Porcentagem e Variações Percentuais", tag: "Financeira", priority: "Crítica • Base da TRI", questionsCount: 25 },
    { id: "matematica/financeira", name: "Matemática Financeira e Juros", tag: "Financeira", priority: "Alta • Aplicação Prática", questionsCount: 25 },
    { id: "matematica/estatistica", name: "Estatística (Médias, Mediana, Moda)", tag: "Estatística", priority: "Crítica • Acerto Obrigatório", questionsCount: 25 },
    { id: "matematica/geometria", name: "Geometria Espacial e Projeções", tag: "Geometria", priority: "Alta • Projeções e Volumes", questionsCount: 25 },
    { id: "matematica/geometria-plana", name: "Geometria Plana, Polígonos e Áreas", tag: "Geometria", priority: "Crítica • Áreas e Pitágoras", questionsCount: 25 },
    { id: "matematica/geometria-analitica", name: "Geometria Analítica e Retas", tag: "Geometria", priority: "Alta • Coordenadas e Cônicas", questionsCount: 25 },
    { id: "matematica/funcoes", name: "Funções Afins e Quadráticas", tag: "Álgebra", priority: "Alta • Máximos e Mínimos", questionsCount: 25 },
    { id: "matematica/trigonometria", name: "Trigonometria e Funções Periódicas", tag: "Trigonometria", priority: "Alta • Ciclo e Triângulos", questionsCount: 25 },
    { id: "matematica/probabilidade", name: "Probabilidade e Análise Combinatória", tag: "Combinatória", priority: "Média-Alta", questionsCount: 25 },
    { id: "matematica/progressoes", name: "Progressões Aritméticas e Geométricas (PA e PG)", tag: "Álgebra", priority: "Crítica • Modelagem Linear e Exponencial", questionsCount: 25 },
  ],
  humanas: [
    { id: "humanas/brasil-republica", name: "Brasil República e Ditadura Militar", tag: "História", priority: "Crítica • Mais Cobrado", questionsCount: 25 },
    { id: "humanas/cidadania-direitos", name: "Cidadania, Direitos e Movimentos Sociais", tag: "Sociologia", priority: "Crítica • Base da Redação", questionsCount: 25 },
    { id: "humanas/geografia-urbana", name: "Geografia Urbana, Demografia e Espaço", tag: "Geografia", priority: "Crítica", questionsCount: 25 },
    { id: "humanas/geopolitica", name: "Geopolítica, Nova DIT e Globalização", tag: "Geografia", priority: "Alta • Atualidades", questionsCount: 25 },
    { id: "humanas/sociologia-filosofia", name: "Sociologia e Filosofia Contemporânea", tag: "Sociologia", priority: "Alta • Útil para Redação", questionsCount: 25 },
    { id: "humanas/brasil-colonial", name: "Brasil Colonial: Economia e Escravidão", tag: "História", priority: "Alta", questionsCount: 25 },
    { id: "humanas/brasil-imperio", name: "Brasil Império: Primeiro e Segundo Reinado", tag: "História", priority: "Crítica • Café e Abolição", questionsCount: 25 },
    { id: "humanas/meio-ambiente", name: "Biomas Brasileiros e Impactos Antrópicos", tag: "Geografia", priority: "Alta", questionsCount: 25 },
    { id: "humanas/era-vargas-populismo", name: "Era Vargas, CLT e Populismo", tag: "História", priority: "Crítica • Muito Cobrado", questionsCount: 25 },
    { id: "humanas/geografia-fisica-clima", name: "Climatologia, Relevo e Domínios Naturais", tag: "Geografia", priority: "Alta • Aziz Ab'Sáber", questionsCount: 25 },
    { id: "humanas/historia-geral", name: "História Geral: Antiguidade a Revoluções", tag: "História", priority: "Crítica • Grécia, Roma, Revoluções", questionsCount: 25 },
  ],
  linguagens: [
    { id: "linguagens/interpretacao", name: "Interpretação e Compreensão Textual", tag: "Texto", priority: "Crítica • Mais de 60% da Prova", questionsCount: 25 },
    { id: "linguagens/literatura", name: "Literatura Brasileira e Modernismo", tag: "Literatura", priority: "Alta • Semana de 22 e Fase 30", questionsCount: 25 },
    { id: "linguagens/argumentacao", name: "Argumentação e Recursos Persuasivos", tag: "Argumentação", priority: "Alta", questionsCount: 25 },
    { id: "linguagens/vanguardas-artes", name: "Vanguardas Europeias e Artes Visuais", tag: "Artes", priority: "Alta • Modernismo e Ruptura", questionsCount: 25 },
    { id: "linguagens/generos", name: "Gêneros Textuais e Esferas de Circulação", tag: "Gêneros", priority: "Alta", questionsCount: 25 },
    { id: "linguagens/recursos-linguisticos", name: "Recursos da Língua e Variação Linguística", tag: "Gramática", priority: "Média-Alta", questionsCount: 25 },
    { id: "linguagens/funcoes-linguagem", name: "Funções da Linguagem (Roman Jakobson)", tag: "Comunicação", priority: "Crítica • Cai Todo Ano", questionsCount: 25 },
    { id: "linguagens/figuras-linguagem", name: "Figuras de Linguagem e Expressividade", tag: "Estilística", priority: "Crítica • Ouro do ENEM", questionsCount: 25 },
    { id: "linguagens/variacao-linguistica", name: "Variação Linguística e Preconceito", tag: "Sociolinguística", priority: "Crítica • Top 1 do ENEM", questionsCount: 25 },
    { id: "linguagens/artes-visuais-musica", name: "Artes Visuais, Música Brasileira e Expressões", tag: "Artes", priority: "Alta • MPB, Rap e Patrimônio", questionsCount: 25 },
  ],
  redacao: [
    { id: "redacao/estrutura-padrao", name: "Estrutura Padrão Ouro (Introdução, D1, D2, C5)", tag: "Estrutura", priority: "Crítica • Rumo aos 1000", questionsCount: 10 },
  ]
};

const AREA_ICONS = {
  natureza: Atom,
  matematica: Calculator,
  humanas: Globe,
  linguagens: BookOpen,
  redacao: PenTool,
};

const AREA_COLORS = {
  natureza: {
    bg: "from-emerald-950/40 to-emerald-900/10",
    border: "border-emerald-500/30 hover:border-emerald-400",
    accent: "text-emerald-400",
    badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    btn: "bg-emerald-500 hover:bg-emerald-400 text-emerald-950",
  },
  matematica: {
    bg: "from-sky-950/40 to-sky-900/10",
    border: "border-sky-500/30 hover:border-sky-400",
    accent: "text-sky-400",
    badge: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    btn: "bg-sky-500 hover:bg-sky-400 text-sky-950",
  },
  humanas: {
    bg: "from-amber-950/40 to-amber-900/10",
    border: "border-amber-500/30 hover:border-amber-400",
    accent: "text-amber-400",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    btn: "bg-amber-500 hover:bg-amber-400 text-amber-950",
  },
  linguagens: {
    bg: "from-pink-950/40 to-pink-900/10",
    border: "border-pink-500/30 hover:border-pink-400",
    accent: "text-pink-400",
    badge: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    btn: "bg-pink-500 hover:bg-pink-400 text-pink-950",
  },
  redacao: {
    bg: "from-rose-950/40 to-rose-900/10",
    border: "border-rose-500/30 hover:border-rose-400",
    accent: "text-rose-400",
    badge: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    btn: "bg-rose-500 hover:bg-rose-400 text-white",
  },
};

export function AreaStudyHub({ 
  playerState = {}, 
  initialAreaId = "natureza",
  onStartTopicSession, 
  onGoToRedacao, 
  onStartQuickSession,
  onStartReviewSession,
  onStartErrorSession,
  onXpEarned
}) {
  const [selectedAreaId, setSelectedAreaId] = useState(initialAreaId);
  const [activeTheoryModule, setActiveTheoryModule] = useState(null);
  const [activeFlashcards, setActiveFlashcards] = useState(null); // null | { area: string, moduleId: string }

  const selectedArea = ENEM_AREAS[selectedAreaId];
  const topics = AREA_TOPICS[selectedAreaId] || [];
  const colors = AREA_COLORS[selectedAreaId] || AREA_COLORS.natureza;

  const today = new Date().toISOString().split("T")[0];
  const dueReviewsCount = (playerState.history || []).filter(
    h => h.reviewSchedule && h.reviewSchedule.nextReviewDate <= today
  ).length;

  const errorCount = (playerState.errorNotebook || []).length;

  // Visualização de Flashcards / Active Recall
  if (activeFlashcards) {
    return (
      <FlashcardDeck
        filterArea={activeFlashcards.area}
        filterModuleId={activeFlashcards.moduleId}
        onClose={() => setActiveFlashcards(null)}
        onXpEarned={onXpEarned}
      />
    );
  }

  // Visualização de Teoria Completa
  if (activeTheoryModule) {
    const theory = getTheoryForModule(activeTheoryModule.id);
    return (
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
        {/* Botão Voltar */}
        <button
          type="button"
          onClick={() => setActiveTheoryModule(null)}
          className="mb-6 flex items-center gap-2 text-xs font-bold text-rose-300 hover:text-white transition cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Voltar para Lista de Temas de {selectedArea.name}</span>
        </button>

        {/* Header do Caderno de Teoria */}
        <div className="rounded-3xl border border-white/10 bg-[#140b17] p-6 sm:p-8 shadow-2xl relative overflow-hidden mb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className={`rounded-xl px-3 py-1 text-xs font-bold uppercase tracking-wider border ${colors.badge}`}>
              {theory.areaName} • {activeTheoryModule.tag}
            </span>
            <span className="text-xs text-amber-300 font-semibold flex items-center gap-1">
              🔥 {theory.enemRelevance}
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            {theory.topic}
          </h1>

          <p className="text-sm sm:text-base text-rose-100/80 leading-relaxed max-w-2xl mb-6">
            {theory.overview}
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                setActiveTheoryModule(null);
                onStartTopicSession(activeTheoryModule.id);
              }}
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rose-500/25 hover:scale-105 transition cursor-pointer"
            >
              <Play size={16} fill="white" />
              <span>Praticar Questões deste Tema Agora</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveFlashcards({ area: selectedAreaId, moduleId: activeTheoryModule.id });
              }}
              className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/20 transition cursor-pointer"
            >
              <Brain size={16} className="text-sky-300" />
              <span>Flashcards & Active Recall</span>
            </button>
          </div>
        </div>

        {/* Conceitos-Chave Estruturados */}
        <div className="space-y-4 mb-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <GraduationCap size={20} className={colors.accent} />
            <span>Fundamentos & O Que Cai no ENEM</span>
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {theory.keyConcepts.map((kc, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
                <h3 className="font-bold text-base text-white mb-2 flex items-center gap-2">
                  <span className={`grid size-6 place-items-center rounded-lg text-xs font-black ${colors.badge}`}>
                    {idx + 1}
                  </span>
                  <span>{kc.title}</span>
                </h3>
                <p className="text-sm leading-relaxed text-rose-100/90 whitespace-pre-line">
                  {kc.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fórmulas e Regras de Ouro */}
        {theory.formulasAndRules && theory.formulasAndRules.length > 0 && (
          <div className="rounded-2xl border border-sky-500/20 bg-sky-950/20 p-6 mb-6">
            <h3 className="font-bold text-base text-sky-300 mb-3 flex items-center gap-2">
              <Calculator size={18} />
              <span>Fórmulas e Relações Fundamentais</span>
            </h3>
            <ul className="space-y-2 text-sm text-sky-100 font-mono">
              {theory.formulasAndRules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-sky-400">⚡</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Pegadinhas Clássicas & Como a Banca Engana */}
        {theory.enemTraps && theory.enemTraps.length > 0 && (
          <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6 mb-6">
            <h3 className="font-bold text-base text-amber-300 mb-3 flex items-center gap-2">
              <AlertTriangle size={18} />
              <span>Armadilhas Clássicas do INEP (Cuidado com a TRI!)</span>
            </h3>
            <ul className="space-y-2 text-sm text-amber-100">
              {theory.enemTraps.map((trap, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400">⚠️</span>
                  <span>{trap}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mnemônicos e Resumo Rápido */}
        {theory.mnemonics && (
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 mb-8 flex items-center gap-3">
            <Lightbulb size={24} className="text-emerald-400 shrink-0" />
            <div>
              <strong className="text-xs uppercase tracking-wider text-emerald-300 block">
                Mnemônico / Regra Prática de Memorização:
              </strong>
              <p className="text-sm font-semibold text-emerald-100 mt-0.5">
                {theory.mnemonics}
              </p>
            </div>
          </div>
        )}

        {/* Botão de Final de Página */}
        <div className="flex justify-center pb-12">
          <button
            type="button"
            onClick={() => {
              setActiveTheoryModule(null);
              onStartTopicSession(activeTheoryModule.id);
            }}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-rose-500/30 hover:scale-105 transition cursor-pointer"
          >
            <Play size={18} fill="white" />
            <span>Estou Pronto(a)! Iniciar Questões do Tema</span>
          </button>
        </div>
      </div>
    );
  }

  // Visualização Principal: Navegador de Áreas e Módulos
  return (
    <div className="mx-auto max-w-7xl px-3 py-6 sm:px-6">
      
      {/* Cabeçalho da Plataforma */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <span className="text-xs font-bold tracking-widest text-rose-300 uppercase flex items-center gap-1.5">
            <GraduationCap size={16} />
            <span>Matriz Oficial do ENEM • Preparação Medicina</span>
          </span>
          <h1 className="font-display text-2xl sm:text-3xl text-white font-bold mt-1">
            Escolha a Área do Conhecimento
          </h1>
          <p className="text-xs sm:text-sm text-rose-200/60 mt-1">
            Selecione uma área abaixo para acessar a teoria aprofundada e as questões padrão ENEM de cada matéria.
          </p>
        </div>
      </div>

      {/* Cards de Ação Adaptativa Imediata: Revisão de Hoje + Caderno de Erros + Flashcards + Treino Rápido */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        
        {/* 1. Revisão do Dia (SM-2) */}
        <div className="rounded-2xl border border-sky-500/20 bg-sky-950/20 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[0.65rem] font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1">
                <RotateCcw size={12} />
                <span>Revisão Espaçada (SM-2)</span>
              </span>
              <span className="rounded-full bg-sky-500/20 px-2 py-0.2 text-[0.65rem] font-bold text-sky-200">
                {dueReviewsCount > 0 ? `${dueReviewsCount} pendentes` : "Em dia ✅"}
              </span>
            </div>
            <h2 className="font-display font-bold text-white text-base">
              Revisão de Hoje
            </h2>
            <p className="text-[0.65rem] text-rose-200/60 mt-0.5">
              Consolidação de conteúdos nos momentos ótimos da curva de esquecimento.
            </p>
          </div>
          <button
            type="button"
            onClick={onStartReviewSession}
            className="mt-3 w-full rounded-xl bg-sky-500/20 border border-sky-500/30 hover:bg-sky-500 hover:text-sky-950 py-2 text-xs font-bold text-sky-200 transition cursor-pointer"
          >
            Iniciar Revisão ➔
          </button>
        </div>

        {/* 2. Caderno de Erros */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[0.65rem] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                <AlertTriangle size={12} />
                <span>Superação de Falhas</span>
              </span>
              <span className="rounded-full bg-amber-500/20 px-2 py-0.2 text-[0.65rem] font-bold text-amber-200">
                {errorCount} {errorCount === 1 ? "erro" : "erros"}
              </span>
            </div>
            <h2 className="font-display font-bold text-white text-base">
              Meus Erros Recorrentes
            </h2>
            <p className="text-[0.65rem] text-rose-200/60 mt-0.5">
              Refaça exclusivamente as questões que você errou até atingir o domínio completo.
            </p>
          </div>
          <button
            type="button"
            onClick={onStartErrorSession}
            disabled={errorCount === 0}
            className="mt-3 w-full rounded-xl bg-amber-500/20 border border-amber-500/30 hover:bg-amber-500 hover:text-amber-950 py-2 text-xs font-bold text-amber-200 transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {errorCount > 0 ? "Treinar Meus Erros ➔" : "Nenhum Erro Pendente ✅"}
          </button>
        </div>

        {/* 3. Flashcards & Active Recall */}
        <div className="rounded-2xl border border-purple-500/20 bg-purple-950/20 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[0.65rem] font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1">
                <Brain size={12} />
                <span>Active Recall</span>
              </span>
              <span className="rounded-full bg-purple-500/20 px-2 py-0.2 text-[0.65rem] font-bold text-purple-200">
                Fórmulas & Regras
              </span>
            </div>
            <h2 className="font-display font-bold text-white text-base">
              Flashcards do ENEM
            </h2>
            <p className="text-[0.65rem] text-rose-200/60 mt-0.5">
              Pratique recuperação ativa com cards de fórmulas, conceitos e pegadinhas da banca.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setActiveFlashcards({ area: selectedAreaId, moduleId: null })}
            className="mt-3 w-full rounded-xl bg-purple-500/20 border border-purple-500/30 hover:bg-purple-500 hover:text-white py-2 text-xs font-bold text-purple-200 transition cursor-pointer"
          >
            Abrir Flashcards ➔
          </button>
        </div>

        {/* 4. Treino Rápido 10 Min */}
        <div className="rounded-2xl border border-rose-500/20 bg-rose-950/20 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[0.65rem] font-bold text-rose-300 uppercase tracking-wider flex items-center gap-1">
                <Zap size={12} />
                <span>Tiro Rápido</span>
              </span>
              <span className="rounded-full bg-rose-500/20 px-2 py-0.2 text-[0.65rem] font-bold text-rose-200">
                10 min
              </span>
            </div>
            <h2 className="font-display font-bold text-white text-base">
              Tenho 10 Minutos
            </h2>
            <p className="text-[0.65rem] text-rose-200/60 mt-0.5">
              Sessão calibrada de 4 a 5 questões para manter a sequência diária ativa.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onStartQuickSession && onStartQuickSession(10)}
            className="mt-3 w-full rounded-xl bg-rose-500/20 border border-rose-500/30 hover:bg-rose-500 hover:text-white py-2 text-xs font-bold text-rose-200 transition cursor-pointer"
          >
            Iniciar Sprint ➔
          </button>
        </div>

      </div>

      {/* Seletor de Áreas (5 Abas Principais) */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
        {Object.entries(ENEM_AREAS).map(([areaKey, areaData]) => {
          const Icon = AREA_ICONS[areaKey] || BookOpen;
          const isSelected = selectedAreaId === areaKey;
          const areaCol = AREA_COLORS[areaKey] || AREA_COLORS.natureza;

          return (
            <button
              key={areaKey}
              type="button"
              onClick={() => setSelectedAreaId(areaKey)}
              className={`flex flex-col items-center justify-center p-3.5 sm:p-4 rounded-2xl border text-center transition cursor-pointer ${
                isSelected
                  ? `border-white/40 bg-white/10 shadow-lg scale-102 font-bold`
                  : `border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 text-white/60 hover:text-white`
              }`}
            >
              <div className={`grid size-10 place-items-center rounded-xl mb-2 ${isSelected ? areaCol.badge : "bg-white/5 text-white/50"}`}>
                <Icon size={20} />
              </div>
              <span className="text-xs sm:text-sm font-display font-semibold text-white leading-tight">
                {areaData.shortName}
              </span>
              <span className="text-[0.6rem] text-rose-200/50 mt-1 hidden sm:block">
                {AREA_TOPICS[areaKey]?.length || 0} módulos
              </span>
            </button>
          );
        })}
      </div>

      {/* Painel da Área Selecionada */}
      <div className="rounded-3xl border border-white/10 bg-[#120a15]/90 p-5 sm:p-7 shadow-2xl relative overflow-hidden mb-8">
        
        {/* Banner da Área */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className={`grid size-12 place-items-center rounded-2xl border ${colors.badge}`}>
              {selectedAreaId === "natureza" && <Atom size={24} />}
              {selectedAreaId === "matematica" && <Calculator size={24} />}
              {selectedAreaId === "humanas" && <Globe size={24} />}
              {selectedAreaId === "linguagens" && <BookOpen size={24} />}
              {selectedAreaId === "redacao" && <PenTool size={24} />}
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                {selectedArea.name}
              </h2>
              <p className="text-xs text-rose-200/70 mt-0.5">
                {selectedArea.description}
              </p>
            </div>
          </div>

          {selectedAreaId === "redacao" && (
            <button
              type="button"
              onClick={onGoToRedacao}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-rose-500/25 hover:scale-105 transition cursor-pointer"
            >
              <PenTool size={14} />
              <span>Abrir Laboratório de Redação Completo</span>
            </button>
          )}
        </div>

        {/* Lista de Tópicos e Módulos Estruturados */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-rose-200/60 font-semibold px-1">
            <span>Módulos de Estudo com Teoria e Questões</span>
            <span>{topics.length} temas disponíveis</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 hover:bg-white/[0.04] transition flex flex-col justify-between gap-3 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`rounded-md px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider border ${colors.badge}`}>
                      {topic.tag}
                    </span>
                    <span className="text-[0.65rem] font-bold text-amber-300">
                      {topic.priority}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-white text-base leading-snug group-hover:text-rose-200 transition">
                    {topic.name}
                  </h3>
                  <p className="text-xs text-rose-200/50 mt-1">
                    {topic.questionsCount} questões comentadas • Resumo teórico completo
                  </p>
                </div>

                {/* Duas Ações Claras: Ler Teoria OU Resolver Questões */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setActiveTheoryModule(topic)}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-bold text-rose-200 hover:bg-white/10 hover:text-white transition cursor-pointer"
                  >
                    <FileText size={14} className="text-rose-400" />
                    <span>Ler Teoria</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onStartTopicSession(topic.id)}
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-rose-500/20 border border-rose-500/40 px-3 py-2.5 text-xs font-bold text-rose-200 hover:bg-rose-500 hover:text-white transition cursor-pointer"
                  >
                    <Play size={14} className="text-rose-400" />
                    <span>Praticar</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
