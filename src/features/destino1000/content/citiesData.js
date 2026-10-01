/**
 * DESTINO 1000 — Módulos das Cidades do Brasil
 * Cada cidade é um polo temático com conexões de viagem e pontos de interesse educacional.
 */

export const BRAZIL_CITIES = [
  {
    id: "vitoria",
    name: "Vitória & Vila Velha",
    state: "ES",
    region: "Sudeste",
    lat: -20.3155,
    lng: -40.3128,
    isStartingCity: true,
    tagline: "Nossa Cidade Especial ❤️",
    description: "Capital litorânea cercada por ilhas, portos dinâmicos e o histórico Convento da Penha.",
    thematicFocus: ["Ecossistemas Marinhos", "História Colonial", "Termodinâmica dos Ventos"],
    primaryArea: "natureza",
    hubs: [
      { id: "convento-penha", name: "Convento da Penha", type: "history", area: "humanas", desc: "Patrimônio de 1558: colonização das Capitanias Hereditárias e barroco." },
      { id: "praia-camburi", name: "Praia de Camburi", type: "nature", area: "natureza", desc: "Correntes oceânicas, restinga e dinâmica de marés." },
      { id: "porto-tubarao", name: "Porto de Tubarão", type: "science", area: "matematica", desc: "Logística mineral, balança comercial e matemática de transporte marítimo." },
    ],
    connections: [
      { to: "rio-de-janeiro", flightMiles: 300, busCost: 110, busHours: 8, flightHours: 1 },
      { to: "belo-horizonte", flightMiles: 320, busCost: 120, busHours: 9, flightHours: 1.1 },
      { to: "salvador", flightMiles: 650, busCost: 240, busHours: 18, flightHours: 1.5 }
    ]
  },
  {
    id: "sao-paulo",
    name: "São Paulo",
    state: "SP",
    region: "Sudeste",
    lat: -23.5505,
    lng: -46.6333,
    isStartingCity: false,
    tagline: "A Grande Metrópole",
    description: "O maior centro econômico e cultural do país, palco da Semana de Arte Moderna de 1922.",
    thematicFocus: ["Matemática Financeira", "Modernismo", "Urbanização & Demografia"],
    primaryArea: "matematica",
    hubs: [
      { id: "b3-bolsa", name: "Centro Financeiro (B3)", type: "finance", area: "matematica", desc: "Juros compostos, inflação, porcentagens sucessivas e investimentos." },
      { id: "teatro-municipal", name: "Theatro Municipal", type: "arts", area: "linguagens", desc: "Semana de Arte Moderna de 1922, Oswald e Mário de Andrade e Vanguardas." },
      { id: "metro-sp", name: "Rede Metroviária", type: "urban", area: "matematica", desc: "Gráficos de fluxo de passageiros, velocidade média e modelagem linear." },
    ],
    connections: [
      { to: "rio-de-janeiro", flightMiles: 260, busCost: 95, busHours: 6, flightHours: 0.9 },
      { to: "belo-horizonte", flightMiles: 350, busCost: 130, busHours: 8.5, flightHours: 1.1 },
      { to: "curitiba", flightMiles: 280, busCost: 100, busHours: 6.5, flightHours: 1.0 },
      { to: "brasilia", flightMiles: 580, busCost: 210, busHours: 15, flightHours: 1.4 }
    ]
  },
  {
    id: "rio-de-janeiro",
    name: "Rio de Janeiro",
    state: "RJ",
    region: "Sudeste",
    lat: -22.9068,
    lng: -43.1729,
    isStartingCity: false,
    tagline: "Cidade Maravilhosa & Berço Imperial",
    description: "Cenário da chegada da Família Real em 1808 e marco da biodiversidade da Mata Atlântica.",
    thematicFocus: ["Brasil Império", "Mata Atlântica", "Ondulatória & Óptica"],
    primaryArea: "humanas",
    hubs: [
      { id: "jardim-botanico", name: "Jardim Botânico & Floresta da Tijuca", type: "nature", area: "natureza", desc: "Espécies endêmicas da Mata Atlântica e preservação ambiental." },
      { id: "paco-imperial", name: "Paço Imperial", type: "history", area: "humanas", desc: "Transmigração da corte portuguesa, abertura dos portos e independência." },
      { id: "mar-copacabana", name: "Orla de Copacabana", type: "physics", area: "natureza", desc: "Propagação de ondas mecânicas, refração e termodinâmica marítima." },
    ],
    connections: [
      { to: "sao-paulo", flightMiles: 260, busCost: 95, busHours: 6, flightHours: 0.9 },
      { to: "vitoria", flightMiles: 300, busCost: 110, busHours: 8, flightHours: 1 },
      { to: "belo-horizonte", flightMiles: 290, busCost: 105, busHours: 7, flightHours: 1.0 },
      { to: "salvador", flightMiles: 750, busCost: 280, busHours: 24, flightHours: 1.8 }
    ]
  },
  {
    id: "belo-horizonte",
    name: "Belo Horizonte & Ouro Preto",
    state: "MG",
    region: "Sudeste",
    lat: -19.9167,
    lng: -43.9345,
    isStartingCity: false,
    tagline: "Das Montanhas ao Barroco",
    description: "Riqueza mineral, Inconfidência Mineira e arquitetura modernista da Pampulha.",
    thematicFocus: ["Estequiometria & Mineração", "Barroco Mineiro", "Inconfidência"],
    primaryArea: "natureza",
    hubs: [
      { id: "minas-ouro-preto", name: "Minas de Ouro Preto", type: "chemistry", area: "natureza", desc: "Reações de oxirredução, extração de ferro e balanceamento químico." },
      { id: "igreja-sao-francisco", name: "Igreja de São Francisco (Aleijadinho)", type: "arts", area: "linguagens", desc: "Escultura sacra barroca, pedra-sabão e poesia árcade." },
      { id: "pampulha", name: "Conjunto Moderno da Pampulha", type: "design", area: "matematica", desc: "Parábolas na arquitetura de Niemeyer e curvas matemáticas." },
    ],
    connections: [
      { to: "sao-paulo", flightMiles: 350, busCost: 130, busHours: 8.5, flightHours: 1.1 },
      { to: "rio-de-janeiro", flightMiles: 290, busCost: 105, busHours: 7, flightHours: 1.0 },
      { to: "vitoria", flightMiles: 320, busCost: 120, busHours: 9, flightHours: 1.1 },
      { to: "brasilia", flightMiles: 440, busCost: 160, busHours: 11, flightHours: 1.2 }
    ]
  },
  {
    id: "salvador",
    name: "Salvador",
    state: "BA",
    region: "Nordeste",
    lat: -12.9777,
    lng: -38.5016,
    isStartingCity: false,
    tagline: "Capital da Ancestralidade",
    description: "Primeira capital do Brasil colonial, polo de cultura afro-brasileira e sincretismo.",
    thematicFocus: ["Sociologia & Identidade", "Ciclo do Açúcar", "Cidadania e Luta Antirracista"],
    primaryArea: "humanas",
    hubs: [
      { id: "pelourinho", name: "Centro Histórico & Pelourinho", type: "history", area: "humanas", desc: "Resistência escrava, patrimônio imaterial da UNESCO e revoltas coloniais." },
      { id: "farol-barra", name: "Farol da Barra & Baía de Todos-os-Santos", type: "physics", area: "natureza", desc: "Óptica geométrica dos faróis e dinâmica dos manguezais." },
      { id: "museu-afro", name: "Museu Afro-Brasileiro", type: "sociology", area: "linguagens", desc: "Textos de Gilberto Freyre, Lélia Gonzalez e diversidade linguística." },
    ],
    connections: [
      { to: "vitoria", flightMiles: 650, busCost: 240, busHours: 18, flightHours: 1.5 },
      { to: "rio-de-janeiro", flightMiles: 750, busCost: 280, busHours: 24, flightHours: 1.8 },
      { to: "brasilia", flightMiles: 680, busCost: 250, busHours: 20, flightHours: 1.6 }
    ]
  },
  {
    id: "brasilia",
    name: "Brasília",
    state: "DF",
    region: "Centro-Oeste",
    lat: -15.7975,
    lng: -47.8919,
    isStartingCity: false,
    tagline: "O Coração do Planalto",
    description: "Plano Piloto de Lúcio Costa, marco do urbanismo monumental e bioma Cerrado.",
    thematicFocus: ["Geometria Espacial", "Bioma Cerrado", "Constituição de 1988 & Cidadania"],
    primaryArea: "matematica",
    hubs: [
      { id: "congresso-nacional", name: "Congresso Nacional & Três Poderes", type: "politics", area: "humanas", desc: "Divisão de poderes, Direitos Fundamentais e cidadania pós-1988." },
      { id: "catedral-brasilia", name: "Catedral Metropolitana", type: "geometry", area: "matematica", desc: "Hiperboloides de revolução, cálculo de superfícies e vetores estruturais." },
      { id: "parque-nacional-bsb", name: "Parque Nacional da Água Mineral", type: "biome", area: "natureza", desc: "Bioma Cerrado, savanas brasileiras, estacionalidade e fogo ecológico." },
    ],
    connections: [
      { to: "sao-paulo", flightMiles: 580, busCost: 210, busHours: 15, flightHours: 1.4 },
      { to: "belo-horizonte", flightMiles: 440, busCost: 160, busHours: 11, flightHours: 1.2 },
      { to: "salvador", flightMiles: 680, busCost: 250, busHours: 20, flightHours: 1.6 },
      { to: "manaus", flightMiles: 1200, busCost: 480, busHours: 48, flightHours: 2.8 }
    ]
  },
  {
    id: "manaus",
    name: "Manaus",
    state: "AM",
    region: "Norte",
    lat: -3.1190,
    lng: -60.0217,
    isStartingCity: false,
    tagline: "Coração da Amazônia",
    description: "Encontro das Águas, ciclo da borracha no Teatro Amazonas e biodiversidade equatorial.",
    thematicFocus: ["Ecologia Amazônica", "Ciclos Biogeoquímicos", "Rios Voadores & Clima"],
    primaryArea: "natureza",
    hubs: [
      { id: "encontro-aguas", name: "Encontro das Águas (Negro e Solimões)", type: "chemistry", area: "natureza", desc: "Densidade, velocidade de escoamento, pH e sedimentos em suspensão." },
      { id: "teatro-amazonas", name: "Teatro Amazonas (Ciclo da Borracha)", type: "history", area: "humanas", desc: "Belle Époque amazônica, seringais e economia extrativista." },
      { id: "torre-atto", name: "Observatório da Floresta (Rios Voadores)", type: "climate", area: "natureza", desc: "Evapotranspiração florestal e regulação do regime de chuvas no Sudeste." },
    ],
    connections: [
      { to: "brasilia", flightMiles: 1200, busCost: 480, busHours: 48, flightHours: 2.8 },
      { to: "salvador", flightMiles: 1500, busCost: 550, busHours: 60, flightHours: 3.5 }
    ]
  }
];
