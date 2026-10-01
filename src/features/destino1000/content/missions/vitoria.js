/**
 * Missões Narrativas — Vitória & Vila Velha
 */

export const MISSIONS_VITORIA = [
  {
    id: "missao-vitoria-1",
    cityId: "vitoria",
    title: "Mistério no Convento da Penha",
    description: "Um enigma matemático foi encontrado em um manuscrito antigo do século XVI no Convento. Ajude os monges a decifrá-lo.",
    icon: "📜",
    difficulty: "Fácil",
    estimatedTime: 10, // minutos
    rewards: {
      xp: 300,
      milhas: 150,
      reais: 50,
      item: "Manuscrito do Frei Palácios"
    },
    // Array de filtros ou IDs para puxar do contentEngine
    questionQuery: {
      area: "matematica",
      topic: "Porcentagem",
      count: 3
    },
    narrative: {
      start: "O vento frio batia nas pedras do Convento da Penha enquanto Frei João lhe entregava o pergaminho. 'Nossas contas não batem desde a última colheita de 1558', ele disse.",
      success: "Incrível! Você ajustou as taxas de juros e os dízimos da capitania de Vasco Fernandes Coutinho. O balanço está salvo!",
      failure: "Os monges ficaram ainda mais confusos com seus cálculos. Estude mais porcentagem e tente novamente."
    }
  },
  {
    id: "missao-vitoria-2",
    cityId: "vitoria",
    title: "Logística no Porto de Tubarão",
    description: "Um navio cargueiro precisa carregar minério de ferro. Calcule a termodinâmica e mecânica exatas para a operação.",
    icon: "🚢",
    difficulty: "Médio",
    estimatedTime: 15,
    rewards: {
      xp: 500,
      milhas: 250,
      reais: 100,
      item: "Cristal de Minério Bruto"
    },
    questionQuery: {
      area: "natureza",
      topic: "Mecânica",
      count: 4
    },
    narrative: {
      start: "Os guindastes enormes do Porto de Tubarão aguardam seus cálculos. A carga é pesada e o navio precisa zarpar em duas horas.",
      success: "A carga foi perfeitamente acomodada. O centro de massa está estável e o navio partiu em segurança!",
      failure: "Os cálculos falharam. A carga ficou instável e a operação foi suspensa. Revise conceitos de mecânica."
    }
  }
];
