/**
 * Missões Narrativas — Cuiabá (MT)
 * Capital do Agronegócio: Bioma Pantanal, Geopolítica do Agro e Sustentabilidade
 */

export const MISSIONS_CUIABA = [
  {
    id: "missao-cuiaba-1",
    cityId: "cuiaba",
    title: "Alerta Vermelho no Pantanal Norte",
    description: "Focos de incêndio ameaçam a planície inundável durante o período de estiagem severa. Analise os impactos biológicos, o pulso de inundação e a regeneração das teias tróficas pantaneiras.",
    icon: "🐆",
    difficulty: "Difícil",
    estimatedTime: 20, // minutos
    rewards: {
      xp: 650,
      milhas: 320,
      reais: 150,
      item: "Pena da Arara-Azul Resgatada"
    },
    questionQuery: {
      area: "natureza",
      topic: "Ecologia",
      count: 5
    },
    narrative: {
      start: "A cortina de fumaça cinzenta alcança o início da Rodovia Transpantaneira. O Centro de Resgate de Fauna Silvestre precisa de diagnósticos ecológicos rápidos: como o fogo afeta as espécies de topo de cadeia e como o pulso de inundação vai reagir na estação das chuvas?",
      success: "Missão salvadora! Você delimitou com precisão os refúgios ecológicos vitais, as rotas de fuga das onças-pintadas e a dinâmica de sucessão ecológica secundária. As brigadas contiveram o desastre a tempo!",
      failure: "Os conceitos de biomassa, fluxo energético e bioacumulação foram mal interpretados. As barreiras contra o fogo foram posicionadas em locais equivocados. Revise com urgência a ecologia dos biomas brasileiros."
    }
  },
  {
    id: "missao-cuiaba-2",
    cityId: "cuiaba",
    title: "Logística da Supersafra no Cinturão da Soja",
    description: "Comboios de bitrens e trens de carga disputam capacidade na malha Centro-Oeste. Use estatística e modelagem matemática para otimizar os custos de transporte até os portos fluviais.",
    icon: "🚛",
    difficulty: "Médio",
    estimatedTime: 15, // minutos
    rewards: {
      xp: 500,
      milhas: 240,
      reais: 220,
      item: "Miniatura de Colheitadeira Dourada"
    },
    questionQuery: {
      area: "matematica",
      topic: "Estatística",
      count: 4
    },
    narrative: {
      start: "Silos repletos e filas quilométricas de caminhões ao longo da BR-163 na saída de Cuiabá. A associação de produtores precisa de uma análise estatística rigorosa sobre tempos de espera, desvio-padrão de perdas e rentabilidade logística dos terminais intermodais.",
      success: "Logística de mestre! Suas estimativas de médias ponderadas, dispersão e capacidade de carga desbloquearam o fluxo rodoviário e garantiram escoamento recorde sem desperdícios!",
      failure: "Um equívoco na análise da variância dos custos de combustível e frete sobrecarregou os pátios de triagem. A safra sofreu atrasos no porto. Revise conceitos de média, mediana e dispersão estatística."
    }
  }
];
