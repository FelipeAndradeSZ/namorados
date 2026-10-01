/**
 * Missões Narrativas — Rio de Janeiro
 */

export const MISSIONS_RIODEJANEIRO = [
  {
    id: "missao-rio-1",
    cityId: "rio-de-janeiro",
    title: "Os Enigmas do Paço Imperial",
    description: "Documentos diplomáticos de 1808 foram encontrados no Paço Imperial. Analise o impacto da Abertura dos Portos e da transmigração da corte no destino da colônia.",
    icon: "📜",
    difficulty: "Médio",
    estimatedTime: 15, // minutos
    rewards: {
      xp: 480,
      milhas: 240,
      reais: 120,
      item: "Selo Real de D. João VI"
    },
    questionQuery: {
      area: "humanas",
      topic: "Brasil Colônia",
      count: 4
    },
    narrative: {
      start: "O burburinho na Praça XV recorda o momento solene em que as naus portuguesas aportaram na baía de Guanabara. Historiadores do Paço Imperial precisam da sua capacidade de interpretação para decifrar como o tratado de 1810 e a abertura comercial minaram o Antigo Sistema Colonial.",
      success: "Fantástico! Você correlacionou as medidas joaninas ao rompimento do pacto colonial e à emancipação política brasileira com maestria!",
      failure: "Os decretos coloniais confundiram sua linha temporal. A relação entre a corte no Rio e o monopólio mercantil precisa ser revisada. Tente novamente!"
    }
  },
  {
    id: "missao-rio-2",
    cityId: "rio-de-janeiro",
    title: "O Guardião da Floresta da Tijuca",
    description: "A maior floresta urbana replantada do planeta enfrenta desequilíbrios na Mata Atlântica. Avalie a dinâmica dos nichos ecológicos e a conservação hídrica.",
    icon: "🌿",
    difficulty: "Fácil",
    estimatedTime: 12, // minutos
    rewards: {
      xp: 350,
      milhas: 180,
      reais: 80,
      item: "Muda de Pau-Brasil Centenária"
    },
    questionQuery: {
      area: "natureza",
      topic: "Ecologia",
      count: 3
    },
    narrative: {
      start: "Entre o Jardim Botânico e as encostas da Tijuca, biólogos medem o fluxo de matéria e energia nas clareiras. Uma expedição convoca você para demonstrar a relevância da biodiversidade florestal na estabilização climática carioca.",
      success: "Excelente trabalho! Você identificou os impactos antrópicos, os níveis tróficos e os serviços ecossistêmicos fundamentais prestados pela Mata Atlântica.",
      failure: "A teia alimentar entrou em colapso nas suas respostas. As cadeias ecológicas da floresta atlântica exigem mais estudo. Revise conceitos de ecologia!"
    }
  },
  {
    id: "boss-rio",
    cityId: "rio-de-janeiro",
    title: "BOSS: Guardião das Linguagens",
    description: "Desafio Final de Linguagens! Interpretação, gêneros textuais, vanguardas e literatura.",
    icon: "📚",
    difficulty: "Boss",
    estimatedTime: 45,
    rewards: {
      xp: 2000,
      milhas: 1000,
      reais: 800,
      item: "Troféu de Ouro: Machado de Assis"
    },
    questionQuery: {
      area: "linguagens",
      count: 10
    },
    narrative: {
      start: "No alto do Corcovado, um vento forte traz páginas de livros de todas as épocas. O Guardião das Letras exige que você prove seu domínio sobre a palavra escrita e falada.",
      success: "Sua interpretação foi afiada como a pena de Machado de Assis! As portas do conhecimento se abrem.",
      failure: "Os textos e poemas se embaralharam em sua mente. O Guardião pede que você leia com mais atenção e tente de novo."
    }
  }
];
