/**
 * Missões Narrativas — Salvador
 */

export const MISSIONS_SALVADOR = [
  {
    id: "missao-salvador-1",
    cityId: "salvador",
    title: "Ecos da Revolta dos Búzios",
    description: "Pelas ladeiras do Pelourinho, manuscritos da Conjuração Baiana de 1798 revelam as lutas por igualdade social, fim da escravidão e emancipação do Brasil colonial.",
    icon: "🥁",
    difficulty: "Médio",
    estimatedTime: 15, // minutos
    rewards: {
      xp: 490,
      milhas: 245,
      reais: 110,
      item: "Talismã dos Alfaiates de 1798"
    },
    questionQuery: {
      area: "humanas",
      topic: "Brasil Colônia",
      count: 4
    },
    narrative: {
      start: "O som dos tambores ecoa pelo Terreiro de Jesus. Um pesquisador do Centro Histórico encontrou fragmentos das conclamações populares lideradas por soldados e alfaiates em 1798, exigindo análise histórica imediata.",
      success: "Extraordinário! Você distinguiu as reivindicações populares da Conjuração Baiana em relação às conspirações aristocráticas, valorizando a luta antirracista e os direitos sociais.",
      failure: "Os movimentos separatistas foram confundidos e os agentes históricos perderam o foco. Revise as rebeliões coloniais e a estrutura social da época."
    }
  },
  {
    id: "missao-salvador-2",
    cityId: "salvador",
    title: "A Voz e a Memória no Museu Afro",
    description: "No Museu Afro-Brasileiro da Bahia, interprete discursos e obras que constroem a identidade cultural, analisando a oralidade, figuras de linguagem e variação linguística.",
    icon: "🎭",
    difficulty: "Fácil",
    estimatedTime: 12, // minutos
    rewards: {
      xp: 360,
      milhas: 180,
      reais: 85,
      item: "Berimbau Sagrado da Capoeira Angola"
    },
    questionQuery: {
      area: "linguagens",
      topic: "Interpretação de Texto",
      count: 3
    },
    narrative: {
      start: "Entre as esculturas dos orixás esculpidas por Carybé, você recebe um caderno de ensaios e depoimentos sobre as matrizes linguísticas e literárias que moldaram o português do Brasil.",
      success: "Sensacional! Sua interpretação captou os sentidos implícitos, a riqueza da tradição oral e a força expressiva das linguagens afro-brasileiras!",
      failure: "A intenção do autor e as metáforas não ficaram claras nas suas respostas. Dedique mais tempo ao estudo de funções da linguagem e efeitos de sentido."
    }
  },
  {
    id: "boss-salvador",
    cityId: "salvador",
    title: "BOSS: Crônicas do Brasil",
    description: "Desafio Final de Ciências Humanas! Interpretação de documentos, revoltas e sociedade.",
    icon: "🏛️",
    difficulty: "Boss",
    estimatedTime: 45,
    rewards: {
      xp: 2000,
      milhas: 1000,
      reais: 800,
      item: "Troféu de Ouro: Zumbi dos Palmares"
    },
    questionQuery: {
      area: "humanas",
      count: 10
    },
    narrative: {
      start: "Os tambores do Olodum param. Um Guardião Historiador surge nas escadarias do Pelourinho: 'Só os que conhecem nosso passado poderão construir nosso futuro!'",
      success: "Sua análise histórica foi impecável. O Guardião reconhece sua sabedoria!",
      failure: "Os detalhes históricos se confundiram. Volte aos livros e revise os ciclos e revoltas."
    }
  }
];
