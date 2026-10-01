/**
 * Missões Narrativas — Curitiba
 */

export const MISSIONS_CURITIBA = [
  {
    id: "missao-curitiba-1",
    cityId: "curitiba",
    title: "O Clima da Estufa do Botânico",
    description: "O sistema de controle térmico da icônica estufa de ferro e vidro do Jardim Botânico desregulou com uma frente fria. Calcule o equilíbrio ecofisiológico para salvar as espécies raras da Mata Atlântica e Floresta de Araucárias.",
    icon: "🌿",
    difficulty: "Médio",
    estimatedTime: 15, // minutos
    rewards: {
      xp: 450,
      milhas: 200,
      reais: 120,
      item: "Muda de Araucária Ancestral"
    },
    questionQuery: {
      area: "natureza",
      topic: "Ecologia",
      count: 4
    },
    narrative: {
      start: "Uma súbita geada curitibana atinge a estufa inspirada no Palácio de Cristal de Londres. Os sensores acusam queda abrupta de temperatura nas cúpulas, ameaçando mudas raras de orquídeas e bromélias. Você precisa analisar a dinâmica dos biomas subtropicais para restabelecer o equilíbrio microclimático.",
      success: "Termostatos calibrados com louvor! O fluxo de umidade e a ventilação foram restaurados, preservando o patrimônio genético botânico. Os agrônomos da cidade aplaudem sua intervenção ecológica.",
      failure: "O choque térmico afetou as estufas e o microclima desbalanceou. As plantas sofreram estresse hídrico severo. Revise conceitos de ecologia e relações biogeoquímicas!"
    }
  },
  {
    id: "missao-curitiba-2",
    cityId: "curitiba",
    title: "Otimização na Rede Integrada de Transporte",
    description: "Horário de pico nas famosas Estações Tubo do BRT. Utilize modelagem geométrica e fluxos de capacidade para redesenhar o traçado dos biarticulados no Eixo Boqueirão sem gerar gargalos.",
    icon: "🚌",
    difficulty: "Difícil",
    estimatedTime: 20,
    rewards: {
      xp: 600,
      milhas: 300,
      reais: 250,
      item: "Passe Metropolitano de Ouro"
    },
    questionQuery: {
      area: "matematica",
      topic: "Geometria",
      count: 5
    },
    narrative: {
      start: "Na central do Instituto de Pesquisa e Planejamento Urbano de Curitiba (IPPUC), os painéis de trânsito piscam em alerta. A demanda nas canaletas exclusivas disparou. É sua missão calcular volumes de circulação e otimizar as áreas de embarque em nível para evitar congestionamentos em cadeia.",
      success: "Engenharia de precisão! O sincronismo semafórico e o dimensionamento espacial dos tubos garantiram embarques em tempo recorde. Jaime Lerner ficaria orgulhoso do seu plano diretor.",
      failure: "As canaletas travaram e filas quilométricas se formaram na Praça Rui Barbosa. O cálculo das áreas e volumes de passageiros errou a margem. Reestude geometria espacial e plana!"
    }
  }
];
