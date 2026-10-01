/**
 * Missões Narrativas — Manaus
 */

export const MISSIONS_MANAUS = [
  {
    id: "missao-manaus-1",
    cityId: "manaus",
    title: "O Segredo do Encontro das Águas",
    description: "O Negro e o Solimões correm juntos sem se misturar ao longo de quilômetros. Investigue a densidade, a velocidade de escoamento e a teia biológica das bacias amazônicas.",
    icon: "🌊",
    difficulty: "Médio",
    estimatedTime: 15, // minutos
    rewards: {
      xp: 500,
      milhas: 250,
      reais: 130,
      item: "Frasco com Águas Bicromáticas"
    },
    questionQuery: {
      area: "natureza",
      topic: "Ecologia",
      count: 4
    },
    narrative: {
      start: "A bordo de uma embarcação regional na orla de Manaus, cientistas do INPA monitoram os sedimentos andinos do Solimões e os ácidos húmicos do Rio Negro. Eles precisam que você interprete os dados biológicos e físico-químicos desse divisor hidrológico.",
      success: "Excelente! Você demonstrou com maestria como o pH, a temperatura, a velocidade e a carga orgânica definem a produtividade primária de cada bacia hidrográfica!",
      failure: "Os parâmetros limnológicos se misturaram de forma equivocada na sua análise. Revise ecossistemas fluviais e ciclos de nutrientes em águas amazônicas."
    }
  },
  {
    id: "missao-manaus-2",
    cityId: "manaus",
    title: "A Rota dos Rios Voadores",
    description: "Na imponente Torre ATTO no coração da floresta, mensure a transpiração da copa e compreenda como a umidade amazônica regula o regime de chuvas em todo o continente.",
    icon: "🌧️",
    difficulty: "Difícil",
    estimatedTime: 20, // minutos
    rewards: {
      xp: 650,
      milhas: 320,
      reais: 200,
      item: "Barômetro de Cristal da Torre ATTO"
    },
    questionQuery: {
      area: "natureza",
      topic: "Ecologia",
      count: 5
    },
    narrative: {
      start: "No alto da torre de 325 metros na Reserva de Uatumã, sensores captam massas titânicas de vapor d'água subindo das árvores. Meteorologistas precisam de diagnósticos precisos sobre a bomba biótica amazônica para antecipar impactos climáticos.",
      success: "Espetacular! Você provou a interdependência continental entre a evapotranspiração da floresta equatorial e a agricultura do Centro-Sul, ressaltando o papel da conservação ambiental!",
      failure: "Os fluxos de umidade e os impactos do desmatamento regional foram mal avaliados no modelo. Retorne aos livros e revise ciclos biogeoquímicos e clima!"
    }
  },
  {
    id: "boss-manaus",
    cityId: "manaus",
    title: "BOSS: O Laboratório da Floresta",
    description: "Desafio Final de Ciências da Natureza! Bioquímica, física, estequiometria e biomas.",
    icon: "🧪",
    difficulty: "Boss",
    estimatedTime: 45,
    rewards: {
      xp: 2000,
      milhas: 1000,
      reais: 800,
      item: "Troféu de Ouro: Darwin"
    },
    questionQuery: {
      area: "natureza",
      count: 10
    },
    narrative: {
      start: "O ar fica úmido e pesado. Um holograma de um cientista emerge das águas do Rio Negro: 'Prove seu valor nas leis que regem o universo e a vida!'",
      success: "Você dominou a física, química e biologia. A floresta responde em harmonia com seus cálculos!",
      failure: "As reações saíram do controle e as leis de Newton falharam. Volte ao laboratório e estude mais!"
    }
  }
];
