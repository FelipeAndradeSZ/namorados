/**
 * Missões Narrativas — Brasília
 */

export const MISSIONS_BRASILIA = [
  {
    id: "missao-brasilia-1",
    cityId: "brasilia",
    title: "A Geometria dos Três Poderes",
    description: "A monumentalidade de Oscar Niemeyer e o traçado de Lúcio Costa escondem proporções matemáticas precisas. Calcule áreas, volumes e projeções no Eixo Monumental.",
    icon: "🏛️",
    difficulty: "Médio",
    estimatedTime: 15, // minutos
    rewards: {
      xp: 520,
      milhas: 260,
      reais: 150,
      item: "Esquadro de Ouro de Lúcio Costa"
    },
    questionQuery: {
      area: "matematica",
      topic: "Geometria Espacial",
      count: 4
    },
    narrative: {
      start: "Diante da Praça dos Três Poderes e dos arcos parabólicos da Catedral, engenheiros do patrimônio histórico solicitam que você valide as medições espaciais e a escala urbana do Plano Piloto.",
      success: "Incrível precisão! Seus cálculos volumétricos e de superfícies comprovaram a genialidade da arquitetura modernista de Brasília.",
      failure: "Houve erros nas fórmulas de sólidos geométricos e áreas espaciais. A estrutura da maquete não sustentou o teste. Hora de praticar mais geometria espacial!"
    }
  },
  {
    id: "missao-brasilia-2",
    cityId: "brasilia",
    title: "O Mistério da Savana Brasileira",
    description: "O Parque Nacional de Brasília abriga a nascente de três bacias hidrográficas vitais. Desvende como o Cerrado sobrevive à seca estacional e ao regime de fogo ecológico.",
    icon: "🔥",
    difficulty: "Fácil",
    estimatedTime: 10, // minutos
    rewards: {
      xp: 320,
      milhas: 160,
      reais: 70,
      item: "Semente Pirofítica de Ipê"
    },
    questionQuery: {
      area: "natureza",
      topic: "Ecologia",
      count: 3
    },
    narrative: {
      start: "Caminhando pelos campos sujos e matas de galeria sob o céu anil do Planalto Central, guardas florestais precisam mapear os efeitos das queimadas naturais e a absorção de água pelas raízes profundas do Cerrado.",
      success: "Brilhante! Você demonstrou por que o Cerrado é considerado a 'caixa-d'água do Brasil' e compreendeu as adaptações xeromórficas e pirofíticas da sua flora.",
      failure: "Você confundiu os ciclos biogeoquímicos e as adaptações da vegetação ao solo ácido. Estude mais sobre o bioma Cerrado e tente de novo!"
    }
  }
];
