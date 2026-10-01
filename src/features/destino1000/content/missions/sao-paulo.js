/**
 * Missões Narrativas — São Paulo
 */

export const MISSIONS_SAOPAULO = [
  {
    id: "missao-sp-1",
    cityId: "sao-paulo",
    title: "Crash na Bolsa de Valores (B3)",
    description: "Os mercados despencaram 15% na abertura. Acalme os investidores analisando o histórico e mostrando as estatísticas corretas de recuperação.",
    icon: "📈",
    difficulty: "Difícil",
    estimatedTime: 20, // minutos
    rewards: {
      xp: 600,
      milhas: 300,
      reais: 500,
      item: "Ação Dourada da B3"
    },
    questionQuery: {
      area: "matematica",
      topic: "Estatística",
      count: 5
    },
    narrative: {
      start: "O pregão da B3 amanheceu tenso. Alarmes soando, telas vermelhas. Você precisa usar seus conhecimentos de estatística para projetar a variância e prever a tendência.",
      success: "Excelente! Seus modelos estatísticos provaram que era apenas uma correção de mercado. Os investidores lucraram milhões com sua análise.",
      failure: "Você comprou na alta e vendeu na baixa. O erro nos desvios-padrão custou caro. Treine mais!"
    }
  },
  {
    id: "missao-sp-2",
    cityId: "sao-paulo",
    title: "Enigma no Theatro Municipal",
    description: "Um poeta misterioso da Semana de Arte Moderna de 1922 deixou mensagens cifradas em poemas. Interprete os textos para revelar o segredo.",
    icon: "🎭",
    difficulty: "Médio",
    estimatedTime: 15,
    rewards: {
      xp: 450,
      milhas: 200,
      reais: 80,
      item: "Cópia Rara do Macunaíma"
    },
    questionQuery: {
      area: "linguagens",
      topic: "Literatura",
      count: 4
    },
    narrative: {
      start: "As portas ornamentadas do Theatro Municipal se abrem. No palco vazio, há apenas uma carta antiga assinada por Mário de Andrade.",
      success: "Você desvendou as intenções modernistas e compreendeu as ironias da carta perfeitamente!",
      failure: "Os textos pareciam confusos. O modernismo fugiu do seu domínio. Hora de revisar figuras de linguagem."
    }
  },
  {
    id: "boss-sp",
    cityId: "sao-paulo",
    title: "BOSS: Mestre da Matemática",
    description: "Desafio Final de Matemática! Um mega-teste de lógica, estatística, proporção e funções.",
    icon: "🧮",
    difficulty: "Boss",
    estimatedTime: 45,
    rewards: {
      xp: 2000,
      milhas: 1000,
      reais: 800,
      item: "Troféu de Ouro: Pitágoras"
    },
    questionQuery: {
      area: "matematica",
      count: 10
    },
    narrative: {
      start: "O céu de São Paulo escurece. O trânsito para. Uma projeção holográfica gigante do Mestre da Matemática aparece no Masp. 'Apenas quem dominar os números passará!'",
      success: "Você dominou as equações e o Mestre se curvou diante da sua genialidade matemática!",
      failure: "Os cálculos falharam e a cidade parou num engarrafamento caótico. Volte e treine mais!"
    }
  }
];
