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
  },
  {
    id: "curitiba",
    name: "Curitiba",
    state: "PR",
    region: "Sul",
    lat: -25.4284,
    lng: -49.2733,
    isStartingCity: false,
    tagline: "A Capital Ecológica",
    description: "Modelo de planejamento urbano, transporte BRT e sustentabilidade ambiental.",
    thematicFocus: ["Geometria Urbana", "Ecologia", "Estatística"],
    primaryArea: "natureza",
    hubs: [
      { id: "jardim-botanico-cwb", name: "Jardim Botânico (Estufa)", type: "nature", area: "natureza", desc: "Estruturas metálicas, fotossíntese e espécies subtropicais." },
      { id: "museu-oscar-niemeyer", name: "Museu Oscar Niemeyer (Olho)", type: "arts", area: "linguagens", desc: "Arte contemporânea, geometria espacial e museologia." },
      { id: "tubo-brt", name: "Estação Tubo (Mobilidade)", type: "urban", area: "matematica", desc: "Otimização de fluxos, grafos e cálculo de capacidade de transporte." },
    ],
    connections: [
      { to: "sao-paulo", flightMiles: 280, busCost: 100, busHours: 6.5, flightHours: 1.0 },
      { to: "florianopolis", flightMiles: 180, busCost: 70, busHours: 4.5, flightHours: 0.8 }
    ]
  },
  {
    id: "florianopolis",
    name: "Florianópolis",
    state: "SC",
    region: "Sul",
    lat: -27.5954,
    lng: -48.5480,
    isStartingCity: false,
    tagline: "Ilha da Magia",
    description: "Polo tecnológico em ascensão e refúgio ecológico com cultura açoriana.",
    thematicFocus: ["Geologia Costeira", "Tecnologia", "História Luso-Brasileira"],
    primaryArea: "natureza",
    hubs: [
      { id: "ponte-hercilio-luz", name: "Ponte Hercílio Luz", type: "physics", area: "natureza", desc: "Estática de pontes pênseis, tração em cabos e dilatação térmica." },
      { id: "sapiens-parque", name: "Polo Tecnológico (Sapiens Parque)", type: "science", area: "matematica", desc: "Algoritmos, startups, lógica de programação e crescimento exponencial." },
      { id: "centrinho-lagoa", name: "Lagoa da Conceição", type: "biology", area: "natureza", desc: "Dinâmica estuarina, salinidade e impacto do turismo no ecossistema." },
    ],
    connections: [
      { to: "curitiba", flightMiles: 180, busCost: 70, busHours: 4.5, flightHours: 0.8 },
      { to: "porto-alegre", flightMiles: 290, busCost: 110, busHours: 7, flightHours: 1.0 }
    ]
  },
  {
    id: "porto-alegre",
    name: "Porto Alegre",
    state: "RS",
    region: "Sul",
    lat: -30.0346,
    lng: -51.2177,
    isStartingCity: false,
    tagline: "Tradição dos Pampas",
    description: "Berço da Revolução Farroupilha e encontro das águas no Guaíba.",
    thematicFocus: ["Revoltas Coloniais", "Hidrografia", "Literatura Regionalista"],
    primaryArea: "humanas",
    hubs: [
      { id: "usina-gasometro", name: "Usina do Gasômetro", type: "physics", area: "natureza", desc: "Conversão de energia termoelétrica e poluição do ar." },
      { id: "parque-redencao", name: "Parque da Redenção", type: "history", area: "humanas", desc: "Movimentos sociais, abolicionismo no sul e o gaúcho na República Velha." },
      { id: "lago-guaiba", name: "Orla do Guaíba", type: "geography", area: "humanas", desc: "Bacias hidrográficas, assoreamento e planejamento contra enchentes." },
    ],
    connections: [
      { to: "florianopolis", flightMiles: 290, busCost: 110, busHours: 7, flightHours: 1.0 },
      { to: "sao-paulo", flightMiles: 650, busCost: 220, busHours: 16, flightHours: 1.5 }
    ]
  },
  {
    id: "recife",
    name: "Recife & Olinda",
    state: "PE",
    region: "Nordeste",
    lat: -8.0476,
    lng: -34.8770,
    isStartingCity: false,
    tagline: "Veneza Brasileira",
    description: "Invasões holandesas, o frevo e o inovador Porto Digital no coração do Manguebeat.",
    thematicFocus: ["Invasões Holandesas", "Cultura Popular", "Inovação Tecnológica"],
    primaryArea: "humanas",
    hubs: [
      { id: "marco-zero", name: "Praça do Marco Zero", type: "arts", area: "linguagens", desc: "Movimento Manguebeat, Chico Science e manifestações folclóricas." },
      { id: "porto-digital", name: "Porto Digital (Ilha do Recife)", type: "tech", area: "matematica", desc: "Estatística do mercado de TI, funções exponenciais e matrizes." },
      { id: "alto-se", name: "Alto da Sé (Olinda)", type: "history", area: "humanas", desc: "Arquitetura seiscentista, colonização holandesa e Insurreição Pernambucana." },
    ],
    connections: [
      { to: "salvador", flightMiles: 480, busCost: 170, busHours: 12, flightHours: 1.2 },
      { to: "fortaleza", flightMiles: 450, busCost: 160, busHours: 11, flightHours: 1.2 }
    ]
  },
  {
    id: "fortaleza",
    name: "Fortaleza",
    state: "CE",
    region: "Nordeste",
    lat: -3.7172,
    lng: -38.5431,
    isStartingCity: false,
    tagline: "Terra da Luz",
    description: "Polo pioneiro no abolicionismo e de grande concentração de polos de fibra óptica.",
    thematicFocus: ["Abolicionismo", "Geografia do Semiárido", "Física Óptica"],
    primaryArea: "humanas",
    hubs: [
      { id: "dragao-do-mar", name: "Centro Dragão do Mar", type: "history", area: "humanas", desc: "Chico da Matilde, pioneirismo na abolição e a seca no sertão nordestino." },
      { id: "praia-futuro", name: "Praia do Futuro (Hub de Cabos Submarinos)", type: "physics", area: "natureza", desc: "Reflexão total interna, fibra óptica e velocidade de propagação." },
      { id: "mercado-central-ce", name: "Mercado Central", type: "economy", area: "matematica", desc: "Comércio popular, descontos, lucro e probabilidade." },
    ],
    connections: [
      { to: "recife", flightMiles: 450, busCost: 160, busHours: 11, flightHours: 1.2 },
      { to: "belem", flightMiles: 750, busCost: 280, busHours: 24, flightHours: 1.8 }
    ]
  },
  {
    id: "belem",
    name: "Belém",
    state: "PA",
    region: "Norte",
    lat: -1.4550,
    lng: -48.4902,
    isStartingCity: false,
    tagline: "Portal da Amazônia",
    description: "O maior mercado a céu aberto da América Latina, o Círio de Nazaré e a riqueza gastronômica.",
    thematicFocus: ["Botânica Econômica", "Religiosidade", "Clima Equatorial"],
    primaryArea: "natureza",
    hubs: [
      { id: "ver-o-peso", name: "Mercado Ver-o-Peso", type: "biology", area: "natureza", desc: "Botânica aplicada, princípios ativos das plantas e cadeias alimentares." },
      { id: "basilica-nazare", name: "Basílica de Nazaré", type: "sociology", area: "humanas", desc: "Turismo religioso, sincretismo cultural e dinâmica populacional no Círio." },
      { id: "estacao-docas", name: "Estação das Docas", type: "chemistry", area: "natureza", desc: "Processamento do açaí, bioquímica dos alimentos e oxidação." },
    ],
    connections: [
      { to: "fortaleza", flightMiles: 750, busCost: 280, busHours: 24, flightHours: 1.8 },
      { to: "manaus", flightMiles: 800, busCost: 300, busHours: 90, flightHours: 2.0 } // barco/ônibus
    ]
  },
  {
    id: "cuiaba",
    name: "Cuiabá",
    state: "MT",
    region: "Centro-Oeste",
    lat: -15.6014,
    lng: -56.0979,
    isStartingCity: false,
    tagline: "Capital do Agronegócio",
    description: "Portal do Pantanal e centro da expansão da fronteira agrícola brasileira.",
    thematicFocus: ["Agronegócio", "Bioma Pantanal", "Sustentabilidade"],
    primaryArea: "humanas",
    hubs: [
      { id: "chapadada-guimaraes", name: "Chapada dos Guimarães", type: "geography", area: "humanas", desc: "Relevo de planalto, erosão e bacias sedimentares." },
      { id: "pantanal-norte", name: "Portal do Pantanal", type: "biology", area: "natureza", desc: "Planície de inundação, nichos ecológicos e impacto das queimadas." },
      { id: "fazendas-soja", name: "Cinturão da Soja", type: "economy", area: "matematica", desc: "Exportação de commodities, balança comercial e estatística de safra." },
    ],
    connections: [
      { to: "brasilia", flightMiles: 540, busCost: 200, busHours: 14, flightHours: 1.3 },
      { to: "goiania", flightMiles: 460, busCost: 170, busHours: 12, flightHours: 1.2 }
    ]
  },
  {
    id: "goiania",
    name: "Goiânia",
    state: "GO",
    region: "Centro-Oeste",
    lat: -16.6869,
    lng: -49.2648,
    isStartingCity: false,
    tagline: "Berço do Sertanejo",
    description: "Metrópole planejada, polo de cultura agro e próxima à estância termal de Caldas Novas.",
    thematicFocus: ["Cultura Regional", "Energia Nuclear (Césio-137)", "Demografia"],
    primaryArea: "humanas",
    hubs: [
      { id: "praca-civica", name: "Praça Cívica", type: "history", area: "humanas", desc: "Marcha para o Oeste na Era Vargas e integração nacional." },
      { id: "memorial-cesio", name: "Memorial Césio-137", type: "physics", area: "natureza", desc: "Radioatividade, meia-vida, isótopos e desastres ambientais." },
      { id: "polo-agro", name: "Polo Agroindustrial", type: "chemistry", area: "natureza", desc: "Fertilizantes (NPK), correção de solo (calagem) e agrotóxicos." },
    ],
    connections: [
      { to: "brasilia", flightMiles: 110, busCost: 40, busHours: 3, flightHours: 0.5 },
      { to: "cuiaba", flightMiles: 460, busCost: 170, busHours: 12, flightHours: 1.2 }
    ]
  }
];
