/**
 * Missões Narrativas — Porto Alegre
 */

export const MISSIONS_PORTOALEGRE = [
  {
    id: "missao-poa-1",
    cityId: "porto-alegre",
    title: "Crise Hidrográfica no Guaíba",
    description: "O encontro dos rios formadores com o Lago Guaíba sofre com a impermeabilização urbana e cheias sazonais. Avalie a geografia urbana e o ordenamento territorial da metrópole.",
    icon: "🌊",
    difficulty: "Médio",
    estimatedTime: 15, // minutos
    rewards: {
      xp: 500,
      milhas: 240,
      reais: 140,
      item: "Carta Topográfica dos Rios do Sul"
    },
    questionQuery: {
      area: "humanas",
      topic: "Geografia Urbana",
      count: 4
    },
    narrative: {
      start: "Ao lado da imponente chaminé da Usina do Gasômetro, o Guaíba atinge cotas críticas de alerta hidrológico. Urbanistas e geógrafos debatem as causas estruturais: impermeabilização do solo, canalização inadequada e expansão das bacias urbanas periféricas. O comitê de crise precisa do seu laudo socioespacial.",
      success: "Diagnóstico urbanístico impecável! Seu zoneamento ecológico e propostas de drenagem sustentável protegem as várzeas e integram a cidade ao seu leito hídrico natural.",
      failure: "A leitura do processo de urbanização falhou em apontar os vetores de assoreamento. As comportas não foram devidamente dimensionadas. Revise geomorfologia e geografia urbana!"
    }
  },
  {
    id: "missao-poa-2",
    cityId: "porto-alegre",
    title: "O Manifesto da Redenção",
    description: "Sob as sombras das tipuanas do Parque Farroupilha (Redenção), descubra documentos literários e crônicas que debatem o regionalismo gaúcho, a abolição e a identidade nacional em Érico Veríssimo.",
    icon: "📖",
    difficulty: "Fácil",
    estimatedTime: 12,
    rewards: {
      xp: 350,
      milhas: 180,
      reais: 75,
      item: "Primeira Edição de O Tempo e o Vento"
    },
    questionQuery: {
      area: "linguagens",
      topic: "Literatura",
      count: 3
    },
    narrative: {
      start: "Na tradicional Feira do Livro e Brique da Redenção, um sebo antigo guarda edições raras e crônicas do século XX. O bibliotecário pede sua ajuda para contextualizar os conflitos de 'O Tempo e o Vento' e as vozes silenciadas nos poemas pampeanos.",
      success: "Brilhante interpretação! Você articulou a estética do Modernismo regionalista às contradições históricas da sociedade estancieira, emocionando os pesquisadores de literatura.",
      failure: "As alegorias literárias e os contextos históricos se misturaram na sua resposta. Não confunda romantismo regionalista com a geração de 30. Releia os clássicos gaúchos!"
    }
  }
];
