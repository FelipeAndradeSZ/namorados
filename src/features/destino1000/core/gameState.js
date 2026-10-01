/**
 * DESTINO 1000 — Gerenciador de Estado Acadêmico do Jogador (Academic Game State)
 * 100% Focado em Aprendizagem para o ENEM, Progresso, Domínio e Retenção.
 * ZERO ELEMENTOS DE VIAGEM.
 */

export const ACADEMIC_LEVEL_TIERS = [
  { level: 1, title: "Vestibulanda Focada 📖", xpRequired: 0 },
  { level: 3, title: "Construindo a Base 🧠", xpRequired: 600 },
  { level: 5, title: "Estudante Estratégica 🎯", xpRequired: 1500 },
  { level: 10, title: "Dominando Habilidades 📐", xpRequired: 4000 },
  { level: 20, title: "Mente Científica 🔬", xpRequired: 10000 },
  { level: 30, title: "Gabaritando Questões 📚", xpRequired: 20000 },
  { level: 50, title: "Nível Medicina 800+ 🏆", xpRequired: 50000 },
  { level: 100, title: "Nota 1000 & Futura Médica 🩺🎓❤️", xpRequired: 150000 },
];

export const INITIAL_PLAYER_STATE = {
  profile: {
    name: "Beatriz",
    partnerName: "Felipe",
    title: "Vestibulanda Focada 📖",
    targetCourse: "Medicina",
    targetScore: 820,
    level: 1,
    currentXP: 0,
    streakDays: 1,
    lastActiveDate: new Date().toISOString().split("T")[0],
    restDaysAvailable: 2,
    totalMinutesStudied: 45,
    totalQuestionsSolved: 0,
    totalQuestionsCorrect: 0,
  },
  masteryMatrix: {
    matematica: 52,
    linguagens: 68,
    humanas: 60,
    natureza: 48,
    redacao: 75,
  },
  // Habilidades específicas com porcentagem de retenção e última revisão
  skillsMastery: {},
  // Caderno de Erros para prática deliberada
  errorNotebook: [],
  // Fila de Revisão Espaçada (SM-2)
  spacedRepetitionQueue: [],
  // Repertórios Socioculturais e Fichas para a Redação
  repertoriosAnotados: [
    { id: "habermas", autor: "Jürgen Habermas", conceito: "Ação Comunicativa e Esfera Pública", area: "Filosofia / Cidadania" },
    { id: "bauman", autor: "Zygmunt Bauman", conceito: "Modernidade Líquida e Fragilidade das Relações", area: "Sociologia / Contemporaneidade" },
    { id: "cf88", autor: "Constituição Cidadã de 1988", conceito: "Artigo 6º (Direitos Sociais Fundamentais: Saúde, Educação, Segurança)", area: "Legislação / Direitos Humanos" },
    { id: "foucault", autor: "Michel Foucault", conceito: "Biopolítica e Sociedade Disciplinar", area: "Filosofia / Poder" },
    { id: "gilberto-dimenstein", autor: "Gilberto Dimenstein", conceito: "Cidadãos de Papel (Direitos previstos em lei mas ineficazes na prática)", area: "Sociologia / Cidadania" },
    { id: "hannah-arendt", autor: "Hannah Arendt", conceito: "A Banalidade do Mal e a Falta de Reflexão Crítica", area: "Filosofia Política" }
  ],
  // Histórico de simulados e sessões
  history: [],
  simuladosHistory: [],
  // Mensagens motivacionais do Felipe
  loveNotes: [
    {
      id: "note-01",
      unlockedAtLevel: 1,
      sender: "Felipe",
      message: "Meu amor, cada questão resolvida aqui é um passo a mais para o seu jaleco branco e para o nosso futuro juntos. Eu acredito em você em cada detalhe! ❤️"
    },
    {
      id: "note-02",
      unlockedAtLevel: 5,
      sender: "Felipe",
      message: "Ver sua dedicação de perto me enche de orgulho. Respira fundo, toma uma aguinha e confia no seu processo. Te amo infinito! ☕💖"
    },
    {
      id: "note-03",
      unlockedAtLevel: 10,
      sender: "Felipe",
      message: "Você nasceu para a Medicina. Essa rotina pesada vai valer a pena quando você ouvir 'Dra. Beatriz'. Tô contigo até o fim! 🩺✨"
    }
  ]
};

/**
 * Retorna o título e nível correspondente a uma quantidade de XP
 */
export function getLevelInfo(totalXP = 0) {
  let currentTier = ACADEMIC_LEVEL_TIERS[0];
  let nextTier = ACADEMIC_LEVEL_TIERS[1];

  for (let i = ACADEMIC_LEVEL_TIERS.length - 1; i >= 0; i--) {
    if (totalXP >= ACADEMIC_LEVEL_TIERS[i].xpRequired) {
      currentTier = ACADEMIC_LEVEL_TIERS[i];
      nextTier = ACADEMIC_LEVEL_TIERS[i + 1] || null;
      break;
    }
  }

  const xpCurrentLevel = totalXP - currentTier.xpRequired;
  const xpNeeded = nextTier ? nextTier.xpRequired - currentTier.xpRequired : 10000;
  const progressPercent = nextTier ? Math.min(100, Math.round((xpCurrentLevel / xpNeeded) * 100)) : 100;

  return {
    level: currentTier.level,
    title: currentTier.title,
    currentXP: totalXP,
    progressPercent,
    xpForNextLevel: nextTier ? nextTier.xpRequired - totalXP : 0
  };
}

/**
 * Adiciona XP de estudo e atualiza o nível acadêmico do jogador
 */
export function rewardStudyAction(state, { xp = 0, isCorrect = false }) {
  const newXP = (state.profile?.currentXP || 0) + xp;
  const levelInfo = getLevelInfo(newXP);

  const totalSolved = (state.profile?.totalQuestionsSolved || 0) + 1;
  const totalCorrect = (state.profile?.totalQuestionsCorrect || 0) + (isCorrect ? 1 : 0);

  return {
    ...state,
    profile: {
      ...state.profile,
      currentXP: newXP,
      level: levelInfo.level,
      title: levelInfo.title,
      totalQuestionsSolved: totalSolved,
      totalQuestionsCorrect: totalCorrect,
    }
  };
}
