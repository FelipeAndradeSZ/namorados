/**
 * DESTINO 1000 — Gerenciador de Estado do Jogador (Game State)
 * Controla perfil, nível, XP pedagógico, economia de viagem,
 * inventário (mochila, postais, lembranças) e progresso no mapa.
 */

export const LEVEL_TIERS = [
  { level: 1, title: "Primeira Viagem ✈️", xpRequired: 0 },
  { level: 3, title: "Curiosa dos Saberes 🧭", xpRequired: 600 },
  { level: 5, title: "Exploradora Rumo a Vitória 🎒", xpRequired: 1500 },
  { level: 10, title: "Viajante do Conhecimento 🗺️", xpRequired: 4000 },
  { level: 20, title: "Pesquisadora Capixaba 🔬", xpRequired: 10000 },
  { level: 30, title: "Especialista ENEM 📚", xpRequired: 20000 },
  { level: 50, title: "Mestre dos 800+ 🏆", xpRequired: 50000 },
  { level: 100, title: "Destino 1000 (Futura Médica) 🩺❤️", xpRequired: 150000 },
];

export const INITIAL_PLAYER_STATE = {
  profile: {
    name: "Beatriz",
    partnerName: "Felipe",
    title: "Exploradora Rumo a Vitória 🎒",
    level: 1,
    currentXP: 0,
    streakDays: 1,
    lastActiveDate: new Date().toISOString().split("T")[0],
    restDaysAvailable: 2, // Previne perda injusta de sequência em dias de exaustão
  },
  economy: {
    milhas: 500, // Moeda de voo ganha estudando
    saldoReais: 350.00, // Orçamento para transporte terrestre e pousadas
    energiaFoco: 100, // 0 a 100 (nunca barra estudo, dá bônus de foco)
  },
  location: {
    currentCityId: "vitoria",
    visitedCities: ["vitoria"],
    completedMissions: [],
  },
  inventory: {
    passagens: [],
    postaisColecionados: ["postal-vitoria-convento"],
    fotosDesbloqueadas: [],
    repertoriosAnotados: [
      { id: "habermas", autor: "Jürgen Habermas", conceito: "Ação Comunicativa e Esfera Pública", area: "Filosofia / Cidadania" },
      { id: "bauman", autor: "Zygmunt Bauman", conceito: "Modernidade Líquida e Fragilidade das Relações", area: "Sociologia / Contemporaneidade" }
    ],
    lembrancas: ["Conchinha de Camburi 🐚"]
  },
  masteryMatrix: {
    "matematica": 52,
    "linguagens": 68,
    "humanas": 60,
    "natureza": 48,
    "redacao": 75,
  },
  history: [], // Registro de todas as tentativas
  loveNotes: [
    {
      id: "note-01",
      cityId: "vitoria",
      unlockedAtLevel: 1,
      sender: "Felipe",
      message: "Meu amor, cada questão resolvida aqui é um passo a mais para o seu jaleco branco e para o nosso futuro juntos. Eu acredito em você em cada detalhe! ❤️"
    },
    {
      id: "note-02",
      cityId: "sao-paulo",
      unlockedAtLevel: 5,
      sender: "Felipe",
      message: "Ver sua dedicação de perto me enche de orgulho. Respira fundo, toma uma aguinha e confia no seu processo. Te amo infinito! ☕💖"
    }
  ]
};

/**
 * Retorna o título e nível correspondente a uma quantidade de XP
 */
export function getLevelInfo(totalXP) {
  let currentTier = LEVEL_TIERS[0];
  let nextTier = LEVEL_TIERS[1];

  for (let i = LEVEL_TIERS.length - 1; i >= 0; i--) {
    if (totalXP >= LEVEL_TIERS[i].xpRequired) {
      currentTier = LEVEL_TIERS[i];
      nextTier = LEVEL_TIERS[i + 1] || null;
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
 * Adiciona XP e recompensas econômicas ao jogador
 */
export function rewardStudyAction(state, { xp, milhas = 0, reais = 0 }) {
  const newXP = (state.profile.currentXP || 0) + xp;
  const levelInfo = getLevelInfo(newXP);

  return {
    ...state,
    profile: {
      ...state.profile,
      currentXP: newXP,
      level: levelInfo.level,
      title: levelInfo.title,
    },
    economy: {
      ...state.economy,
      milhas: state.economy.milhas + milhas,
      saldoReais: parseFloat((state.economy.saldoReais + reais).toFixed(2)),
    }
  };
}
