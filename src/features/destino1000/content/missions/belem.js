/**
 * Missões Narrativas — Belém (PA)
 * Portal da Amazônia: Botânica Econômica, Religiosidade e Clima Equatorial
 */

export const MISSIONS_BELEM = [
  {
    id: "missao-belem-1",
    cityId: "belem",
    title: "Segredos da Pajelança no Ver-o-Peso",
    description: "Erveiras tradicionais do Ver-o-Peso precisam de ajuda científica para identificar princípios ativos e compostos botânicos das ervas medicinais amazônicas antes da fiscalização sanitária.",
    icon: "🌿",
    difficulty: "Médio",
    estimatedTime: 15, // minutos
    rewards: {
      xp: 480,
      milhas: 220,
      reais: 90,
      item: "Garrafada Aromática da Tia Cheila"
    },
    questionQuery: {
      area: "natureza",
      topic: "Ecologia",
      count: 4
    },
    narrative: {
      start: "O aroma de patchouli, priprioca e andiroba paira no ar úmido às margens da Baía do Guajará. Dona Cheila, erveira há mais de quatro décadas na feira do Ver-o-Peso, chama você de lado: 'Jovem, os fiscais querem laudo das plantas do meu estande. Preciso que você explique a biologia e as interações ecológicas dessas ervas sagradas!'",
      success: "Incrível! Você demonstrou com exatidão a função dos metabólitos secundários vegetais, as teias ecológicas da floresta e a importância da farmacopeia indígena. O estande de Dona Cheila recebeu certificação de patrimônio biocultural!",
      failure: "Você se enrolou nas relações ecológicas e nos ciclos dos compostos bioativos. Dona Cheila abanou a cabeça: 'Tem que respeitar a floresta e entender suas cadeias vitais antes de dar parecer!' Revise ecologia e interações tróficas."
    }
  },
  {
    id: "missao-belem-2",
    cityId: "belem",
    title: "A Maré Humana do Círio de Nazaré",
    description: "Mais de dois milhões de devotos tomam as avenidas de Belém. Analise a dinâmica demográfica, a sociologia da fé e a logística espacial da maior manifestação religiosa do Brasil.",
    icon: "🕯️",
    difficulty: "Difícil",
    estimatedTime: 20, // minutos
    rewards: {
      xp: 620,
      milhas: 310,
      reais: 120,
      item: "Pedaço Sagrado da Corda do Círio"
    },
    questionQuery: {
      area: "humanas",
      topic: "Geografia Urbana",
      count: 5
    },
    narrative: {
      start: "Os sinos da Basílica Santuário de Nazaré repicam com força na manhã de outubro. Uma maré humana de promesseiros e turistas avança sob o calor equatorial. A comissão organizadora requisita seus conhecimentos de demografia e urbanização para planejar os corredores de fluxo e acolhimento.",
      success: "Sensacional! Sua análise sobre a segregação socioespacial temporária, densidade populacional dinâmica e identidade cultural assegurou a passagem segura dos romeiros até o arraial da basílica.",
      failure: "O cálculo de fluxos espaciais e a compreensão da malha viária falharam. Gargalos se formaram no trajeto da procissão. Volte a estudar geografia urbana, migrações sazonais e dinâmica populacional."
    }
  }
];
