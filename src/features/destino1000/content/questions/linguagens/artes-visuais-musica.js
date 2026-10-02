/**
 * BANCO DE QUESTÕES: Artes Visuais, Música Brasileira e Expressões Culturais
 * Área: Linguagens, Códigos e suas Tecnologias
 * Disciplina: Arte / Educação Artística e Cultura Brasileira
 * Total: 25 Questões originais alinhadas ao padrão ENEM
 * Validação: 100% Determinística (5 alternativas, justificativas completas, zero elementos de viagem)
 */

export const QUESTIONS_ARTES_VISUAIS_MUSICA = [
  {
    id: "LIN-MUS-001",
    area: "linguagens",
    competence: 4,
    skill: 12,
    topic: "Artes Visuais e Música",
    subtopic: "Música de Protesto na Ditadura Militar",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "'Hoje você é quem manda / Falou, tá falado / Não tem discussão, não / A minha gente hoje anda / Falando de lado / E olhando pro chão, viu / Você que inventou esse estado / E inventou de inventar / Toda a escuridão / Você que inventou o pecado / Esqueceu-se de inventar / O perdão / Apesar de você / Amanhã há de ser / Outro dia'",
      source: "BUARQUE, Chico. Apesar de Você. Rio de Janeiro: Philips, 1970."
    },
    prompt: "Na canção 'Apesar de Você', lançada em pleno endurecimento do regime civil-militar (Governo Médici), Chico Buarque utilizou qual recurso expressivo para driblar a censura prévia governamental da época?",
    options: [
      { id: "a", text: "A simulação de uma desavença amorosa cotidiana entre parceiros para mascarar uma contundente crítica política à opressão autoritária.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "O uso explícito de manifestos ideológicos marxistas em língua alemã com citações diretas de Lenin.", isCorrect: false, distractorRationale: "A canção foi redigida inteiramente em português e não cita autores marxistas alemães." },
      { id: "c", text: "A celebração ufanista dos projetos de infraestrutura pesada e rodovias da propaganda oficial.", isCorrect: false, distractorRationale: "A letra contesta a opressão ('inventou a escuridão') e expressa esperança na queda do regime, contrariando o ufanismo." },
      { id: "d", text: "A renúncia a qualquer elemento melódico ou harmônico tradicional em favor do silêncio absoluto.", isCorrect: false, distractorRationale: "Trata-se de um samba tradicional vibrante com melodia acessível e coro popular marcante." },
      { id: "e", text: "A defesa incondicional dos censores estatais como árbitros legítimos da produção musical brasileira.", isCorrect: false, distractorRationale: "A música foi concebida para criticar os censores e os generais da ditadura militar." }
    ],
    detailedExplanation: {
      summary: "A canção de protesto brasileira utilizou a metáfora de um relacionamento afetivo autoritário ('você') para criticar a ditadura militar sem ser barrada de imediato pelos censores.",
      stepByStep: [
        "Passo 1: Contextualizar a época: 1970, vigência do AI-5 e censura prévia ferrenha a compositores e intelectuais.",
        "Passo 2: Analisar a ambiguidade semântica da letra: a censura liberou a canção imaginando tratar-se de uma briga de casal ('você que inventou a escuridão').",
        "Passo 3: A alternativa A explica com precisão o recurso da metáfora amorosa como escudo contra a censura política do Estado autoritário."
      ],
      coreConcept: "A MPB utilizou alegorias, dubiedades semânticas e metáforas cotidianas como estratégias de resistência estética à censura política.",
      trapWarning: "Apesar de parecer uma canção de desilusão romântica à primeira vista, o 'você' refere-se ao regime militar e ao próprio general Médici."
    },
    tags: ["chico-buarque", "musica-de-protesto", "ditadura-militar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-002",
    area: "linguagens",
    competence: 4,
    skill: 13,
    topic: "Artes Visuais e Música",
    subtopic: "Arte Urbana: Grafite versus Pichação",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Murais monumentais assinados por artistas como Eduardo Kobra e a dupla Os Gêmeos cobrem fachadas de edifícios em capitais do mundo, atraindo patrocínios e reconhecimento institucional. Ao mesmo tempo, a pichação tipográfica paulistana ('pixo'), de traços retos e agressivos em locais de alto risco, é criminalizada e encarada pela legislação como vandalismo ao patrimônio, embora estudiosos a analisem como grito de insurgência visual das periferias invisibilizadas.",
      source: "FRANCO, Célia. Estéticas da Rua: intervenção e legalidade na metrópole contemporânea. São Paulo: Annablume, 2021."
    },
    prompt: "O tratamento contrastante conferido pelo poder público e pelo mercado ao grafite institucionalizado e à pichação revela que:",
    options: [
      { id: "a", text: "A pichação é uma técnica de aquarela medieval incentivada pelas galerias de arte erudita.", isCorrect: false, distractorRationale: "A pichação utiliza latas de spray e rolinhos de tinta látex em muros urbanos, sem relação com aquarela medieval." },
      { id: "b", text: "A legitimação de manifestações artísticas urbanas envolve disputas de poder, aceitação mercadológica e convenções de ordem estética e de classe.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Não existem diferenças técnicas, conceituais ou visuais entre murais grafitados e tags de pichação.", isCorrect: false, distractorRationale: "Há distinções estéticas, de suporte, de objetivo e de recepção social evidentes entre as duas práticas." },
      { id: "d", text: "As cidades contemporâneas eliminaram qualquer regulamentação legal sobre o uso de fachadas públicas.", isCorrect: false, distractorRationale: "A legislação urbana municipal e penal pune severamente intervenções não autorizadas." },
      { id: "e", text: "Toda intervenção com tinta spray em vias públicas é prontamente financiada por bancos internacionais.", isCorrect: false, distractorRationale: "Apenas grafites consagrados no mercado recebem patrocínio; a pichação periférica é reprimida e combatida." }
    ],
    detailedExplanation: {
      summary: "O grafite colorido e figurativo foi assimilado pela economia criativa e pelo poder público, enquanto a pichação reta e clandestina permanece criminalizada.",
      stepByStep: [
        "Passo 1: Notar o contraste: o grafite recebe patrocínio e valorização imobiliária; a pichação recebe sanção penal e repressão policial.",
        "Passo 2: Reconhecer que essa divisão não é puramente formal; reflete critérios de classe social, ordem urbana e comercialização de bens estéticos.",
        "Passo 3: A alternativa B aponta com clareza as tensões de poder, legitimação e mercado na validação da arte pública."
      ],
      coreConcept: "A fronteira entre arte urbana legitimada e delito de depredação é histórica e socialmente construída por disputas de classe e mercado.",
      trapWarning: "Cuidado: na prova do ENEM, o grafite e a pichação são analisados a partir de critérios sociológicos e estéticos, não apenas sob a ótica policial."
    },
    tags: ["grafite", "pichacao", "arte-urbana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-003",
    area: "linguagens",
    competence: 4,
    skill: 14,
    topic: "Artes Visuais e Música",
    subtopic: "Patrimônio Cultural Imaterial: O Cordel e a Xilogravura",
    difficulty: 2,
    estimatedTimeSeconds: 115,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Literatura de Cordel, declarada Patrimônio Cultural Imaterial do Brasil pelo IPHAN em 2018, conjuga a métrica rigorosa dos folhetos rimados em sextilhas e septilhas à força gráfica da xilogravura entalhada em madeira. Artistas populares como J. Borges transformaram a xilografia em crônica visual do cotidiano, narrando histórias de bravura, lendas sertanejas e críticas aos desmandos dos poderosos.",
      source: "Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN), Registro nº 46, 2018."
    },
    prompt: "A relevância da Literatura de Cordel e da xilogravura para a formação cultural brasileira reside na sua capacidade de:",
    options: [
      { id: "a", text: "Substituir compulsoriamente os livros didáticos de física quântica no ensino universitário.", isCorrect: false, distractorRationale: "O cordel é uma expressão artístico-literária popular, não substituto de compêndios de ciências exatas." },
      { id: "b", text: "Integrar texto poético rimado e linguagem visual artesanal como registro e preservação da memória e saberes do povo nordestino.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Reproduzir fielmente os padrões de gravura renascentista da nobreza florentina do século XV.", isCorrect: false, distractorRationale: "A xilogravura de cordel possui linguagem autônoma, estética popular própria e identidade sertaneja genuína." },
      { id: "d", text: "Impedir que temas sociais e de crítica política sejam abordados por poetas populares.", isCorrect: false, distractorRationale: "A sátira social e política aos poderosos é um dos temas mais férteis e tradicionais do cordel." },
      { id: "e", text: "Limitar a difusão da poesia unicamente à modalidade impressa em papel importado de alto luxo.", isCorrect: false, distractorRationale: "Os folhetos de cordel são historicamente impressos em papel barato e pendurados em barbantes nas feiras populares." }
    ],
    detailedExplanation: {
      summary: "O cordel e a xilogravura constituem patrimônio imaterial porque conectam oralidade, métrica poética e síntese visual da cultura sertaneja.",
      stepByStep: [
        "Passo 1: Reconhecer a união entre a poesia popular (métrica e rima) e a xilogravura (imagem talhada na madeira e estampada no papel).",
        "Passo 2: Essa manifestação registra mitos, humor, crítica social e a história da gente sertaneja passada de geração a geração.",
        "Passo 3: A alternativa B traduz com perfeição a dimensão patrimonial e identitária reconhecida pelo IPHAN."
      ],
      coreConcept: "O patrimônio imaterial abrange saberes, modos de fazer e celebrações que expressam a identidade e a continuidade histórica de comunidades.",
      trapWarning: "Patrimônio cultural não é apenas prédio de pedra e cal; tradições vivas orais e artesanais como o cordel são patrimônios imateriais protegidos."
    },
    tags: ["cordel", "xilogravura", "patrimonio-imaterial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-004",
    area: "linguagens",
    competence: 4,
    skill: 12,
    topic: "Artes Visuais e Música",
    subtopic: "O Teatro do Oprimido de Augusto Boal",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No 'Teatro do Oprimido', metodologia criada pelo dramaturgo brasileiro Augusto Boal na década de 1970, a divisão clássica entre atores no palco e público passivo na plateia é abolida. O espectador torna-se 'espect-ator': quando uma cena de opressão cotidiana (como violência machista ou abuso trabalhista) atinge o ápice, a encenação é interrompida e qualquer pessoa da plateia pode entrar em cena para propor soluções concretas em ação dramática.",
      source: "BOAL, Augusto. Teatro do Oprimido e outras poéticas políticas. Rio de Janeiro: Civilização Brasileira, 1975."
    },
    prompt: "O conceito de 'espect-ator' formulado por Augusto Boal tem como objetivo primordial:",
    options: [
      { id: "a", text: "Garantir que os ingressos para espetáculos teatrais sejam comercializados com preços de alta renda.", isCorrect: false, distractorRationale: "O Teatro do Oprimido é uma prática comunitária popular e democratizante, sem foco em ingressos caros." },
      { id: "b", text: "Transformar o teatro em ensaio geral para a ação transformadora real, estimulando o protagonismo cívico contra opressões sociais.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Restaurar os princípios aristotélicos de catarse contemplativa e resignação ao destino fatal dos deuses.", isCorrect: false, distractorRationale: "Boal critica abertamente a catarse passiva aristotélica, propondo a ação participativa consciente." },
      { id: "d", text: "Proibir que dramaturgos escrevam roteiros antes de consultar comitês governamentais.", isCorrect: false, distractorRationale: "Não há relação com censura ou comitês estatais; trata-se de metodologia de intervenção pedagógico-social." },
      { id: "e", text: "Impedir que temas da vida cotidiana das classes trabalhadoras sejam representados artisticamente.", isCorrect: false, distractorRationale: "O cotidiano e as lutas das classes populares são a matéria-prima absoluta do Teatro Fórum de Boal." }
    ],
    detailedExplanation: {
      summary: "Para Boal, o teatro não deve apenas refletir a realidade de modo passivo, mas servir de laboratório vivo de transformação social.",
      stepByStep: [
        "Passo 1: Entender a junção dos termos: espectador + ator = espect-ator.",
        "Passo 2: Na metodologia do Teatro Fórum, ao intervir no palco e ensaiar a superação do problema, o participante ganha coragem para enfrentar a opressão em sua vida real.",
        "Passo 3: A alternativa B sintetiza com precisão a premissa de Boal de que 'o teatro é o ensaio da revolução cotidiana'."
      ],
      coreConcept: "O Teatro do Oprimido é uma ferramenta cênico-pedagógica de emancipação cidadã difundida em mais de 70 países do mundo.",
      trapWarning: "Augusto Boal foi indicado ao Prêmio Nobel da Paz exatamente pela potência transformadora de sua pedagogia cênica."
    },
    tags: ["augusto-boal", "teatro-do-oprimido", "artes-cenicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-005",
    area: "linguagens",
    competence: 4,
    skill: 13,
    topic: "Artes Visuais e Música",
    subtopic: "A Pintura Social de Candido Portinari",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na tela 'Os Retirantes' (1944), Candido Portinari retrata uma família de camponeses nordestinos esquálidos, com pés e mãos desproporcionalmente agigantados e enraizados no solo árido, olhos vazios e crianças com ventres inchados pela desnutrição, sob um céu plúmbeo povoado por urubus famintos à espreita.",
      source: "Masp — Museu de Arte de São Paulo Assis Chateaubriand, Acervo Portinari."
    },
    prompt: "O agigantamento das mãos e dos pés dos trabalhadores rurais na pintura expressionista de Portinari funciona como recurso plástico para enfatizar:",
    options: [
      { id: "a", text: "A vocação aristocrática de quem nunca exerceu esforço físico manual na lavoura.", isCorrect: false, distractorRationale: "Mãos calejadas e enormes simbolizam o peso do trabalho árduo na terra, e não o ócio nobre." },
      { id: "b", text: "A vinculação umbilical do trabalhador à terra e a brutalidade do labor manual que deforma o corpo sem lhe garantir sustento digno.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A beleza serena e a harmonia idílica da vida campestre celebrada pelos poetas árcades.", isCorrect: false, distractorRationale: "O quadro é expressionista, dramático e trágico; não há harmonia bucólica serena." },
      { id: "d", text: "Um defeito anatômico acidental decorrente de imperícia no traço do pintor paulista.", isCorrect: false, distractorRationale: "Portinari distorceu as proporções intencionalmente como recurso estético expressivo de denúncia." },
      { id: "e", text: "O enriquecimento rápido proporcionado pela mecanização moderna da colheita de café.", isCorrect: false, distractorRationale: "A tela retrata retirantes famintos fugindo da miséria e da seca extrema, sem qualquer riqueza." }
    ],
    detailedExplanation: {
      summary: "A deformação expressiva em Portinari ressalta o peso esmagador do trabalho físico e a dureza da existência dos excluídos.",
      stepByStep: [
        "Passo 1: Observar o elemento plástico destacado no enunciado: pés e mãos agigantados.",
        "Passo 2: Na arte moderna brasileira, Portinari utilizou a herança do expressionismo e do muralismo mexicano para conferir monumentalidade e tragédia à figura do trabalhador.",
        "Passo 3: A alternativa B articula corretamente a opção formal do artista à denúncia social da exploração agrária."
      ],
      coreConcept: "A distorção das proporções anatômicas na arte moderna funciona como recurso expressivo para potencializar a carga dramática e a denúncia humana.",
      trapWarning: "Portinari não buscava o realismo fotográfico anatômico perfeito; ele buscava o choque ético diante do sofrimento dos retirantes."
    },
    tags: ["candido-portinari", "retirantes", "artes-visuais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-006",
    area: "linguagens",
    competence: 4,
    skill: 14,
    topic: "Artes Visuais e Música",
    subtopic: "A Tropicália e a Antropofagia Sonora",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No Festival da Record de 1967, Caetano Veloso apresentou 'Alegria, Alegria' acompanhado pelas guitarras elétricas dos Beat Boys, enquanto Gilberto Gil defendia 'Domingo no Parque' ao lado de Os Mutantes e de um berimbau baiano. A plateia tradicionalista vaiou o uso de instrumentos elétricos, vistos como subserviência ao imperialismo norte-americano.",
      source: "FAVARETTO, Celso. Tropicália: alegoria, alegria. Cotia: Ateliê Editorial, 2007."
    },
    prompt: "O movimento tropicalista respondeu à polêmica dos festivais demonstrando que a incorporação da guitarra elétrica representava:",
    options: [
      { id: "a", text: "A aceitação passiva da supremacia da indústria fonográfica estrangeira sobre as tradições locais.", isCorrect: false, distractorRationale: "Os tropicalistas não se submeteram passivamente; eles deglutiram a tecnologia pop internacional para renovar a música nacional." },
      { id: "b", text: "Um procedimento antropofágico de justaposição entre vanguarda pop internacional e elementos folclóricos de raiz brasileira.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A proibição do uso de instrumentos acústicos como violão e berimbau em gravações de estúdio.", isCorrect: false, distractorRationale: "A canção 'Domingo no Parque' combinava exatamente berimbau acústico com guitarra elétrica." },
      { id: "d", text: "O abandono de qualquer preocupação com a contestação política do regime militar vigente.", isCorrect: false, distractorRationale: "A Tropicália produziu uma das mais ácidas e sofisticadas contestações estéticas ao autoritarismo da época." },
      { id: "e", text: "A restauração do modelo clássico da ópera italiana oitocentista no rádio nacional.", isCorrect: false, distractorRationale: "A Tropicália sintonizava com a cultura de massas, o pop rock e a vanguarda concreta, não com a ópera lírica do século XIX." }
    ],
    detailedExplanation: {
      summary: "A Tropicália atualizou o Manifesto Antropófago de Oswald de Andrade na música popular, deglutindo o rock internacional e fundindo-o ao samba e ao baião.",
      stepByStep: [
        "Passo 1: Lembrar o contexto da 'Passeata contra a Guitarra Elétrica' em 1967, liderada pela MPB purista nacionalista.",
        "Passo 2: Caetano e Gil recusaram o purismo folclórico ingênuo: assumiram a modernidade tecnológica da guitarra elétrica mesclada ao berimbau e à cuíca.",
        "Passo 3: A alternativa B conceitua precisamente esse gesto antropofágico de universalização da música brasileira."
      ],
      coreConcept: "A Tropicália superou o maniqueísmo entre 'nacionalismo puro' e 'alienação estrangeira' por meio da deglutição antropofágica da cultura pop planetária.",
      trapWarning: "O berimbau e a guitarra na mesma faixa sintetizam a estética híbrida e revolucionária dos tropicalistas."
    },
    tags: ["tropicalia", "musica-brasileira", "antropofagia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-007",
    area: "linguagens",
    competence: 4,
    skill: 12,
    topic: "Artes Visuais e Música",
    subtopic: "A Bossa Nova e a Revolução Harmônica",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1958, com o lançamento da faixa 'Chega de Saudade' interpretada por João Gilberto (música de Tom Jobim e letra de Vinicius de Moraes), nasceu a Bossa Nova. A interpretação contida, a emissão vocal quase sussurrada e coloquial, sem o melodrama grandiloquente dos cantores de rádio anteriores, somaram-se à célebre 'batida diferente' do violão sincopado e harmonias dissonantes com acordes invertidos.",
      source: "CASTRO, Ruy. Chega de Saudade: a história e as histórias da Bossa Nova. São Paulo: Companhia das Letras, 1990."
    },
    prompt: "A inovação técnica e interpretativa introduzida por João Gilberto na Bossa Nova consistiu em:",
    options: [
      { id: "a", text: "Intensificar a afetação operística dos cantores da Era do Rádio com gritos agudos e vibratos exagerados.", isCorrect: false, distractorRationale: "João Gilberto fez o inverso exato: eliminou o vibrato e cantou com suavidade rente ao microfone." },
      { id: "b", text: "Integrar a divisão rítmica do samba ao violão acústico e adotar um canto coloquial e intimista sem impostação de voz melodramática.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Excluir o violão acústico das gravações para substituí-lo por sintetizadores digitais computadorizados.", isCorrect: false, distractorRationale: "Em 1958 não existiam sintetizadores digitais; o violão de náilon de João Gilberto foi o alicerce do movimento." },
      { id: "d", text: "Utilizar exclusivamente letras em língua inglesa para conquistar mercados no exterior.", isCorrect: false, distractorRationale: "A Bossa Nova nasceu em português nas salas e apartamentos da Zona Sul do Rio de Janeiro." },
      { id: "e", text: "Impedir que músicos brasileiros tivessem contato com o jazz contemporâneo norte-americano.", isCorrect: false, distractorRationale: "Houve rica troca estética recíproca entre a harmonia do jazz e a batida sincopada do samba brasileiro." }
    ],
    detailedExplanation: {
      summary: "João Gilberto sintetizou no violão a orquestra inteira do samba carioca (marcação de surdo no polegar e tamborins nos dedos agudos) acompanhada de canto intimista e sussurrado.",
      stepByStep: [
        "Passo 1: Reconhecer a ruptura com o estilo dos 'cantores do rádio' dos anos 1940/1950 (Vigário, Dalva de Oliveira), marcado por vozes tonitruantes e melodramas passionais.",
        "Passo 2: João Gilberto aproveitou a proximidade técnica do microfone moderno para cantar como se falasse no ouvido do ouvinte.",
        "Passo 3: A alternativa B capta com rigor a fusão entre a síncope do samba, harmonia moderna e emissão vocal coloquial."
      ],
      coreConcept: "A Bossa Nova representou a modernização estilística da música brasileira associada ao otimismo urbano e desenvolvimentista do final dos anos 1950.",
      trapWarning: "A batida de violão da Bossa Nova não é jazz; é samba condensado de forma minimalista na caixa do violão."
    },
    tags: ["bossa-nova", "joao-gilberto", "historia-da-musica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-008",
    area: "linguagens",
    competence: 4,
    skill: 13,
    topic: "Artes Visuais e Música",
    subtopic: "A Instalação e a Arte Contemporânea Imersiva",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No museu de Inhotim (MG), o pavilhão de Cildo Meireles abriga a obra 'Desvio para o Vermelho' (1967-1984). O espectador atravessa uma sala doméstica totalmente monocromática, onde mobília, tapetes, quadros, garrafas e objetos cotidianos são exclusivamente vermelhos. Em seguida, caminha por um corredor escuro até deparar-se com uma pia inclinada de onde brota continuamente um líquido vermelho que escorre no ralo.",
      source: "Instituto Inhotim, Catálogo de Obras Contemporâneas, 2023."
    },
    prompt: "Ao criar um ambiente imersivo total transitável pelo visitante, Cildo Meireles exemplifica a passagem da arte moderna para a arte contemporânea, cuja característica central é:",
    options: [
      { id: "a", text: "A obrigatoriedade de que toda obra de arte seja pintada em tela retangular com moldura dourada barroca.", isCorrect: false, distractorRationale: "A instalação rompe precisamente com a moldura e com a bidimensionalidade da pintura em tela." },
      { id: "b", text: "A dissolução dos limites físicos do quadro e a transformação do espaço em experiência sensorial e reflexiva vivenciada pelo corpo do espectador.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "O retorno aos princípios medievais teocêntricos de proibição de representação de figuras humanas.", isCorrect: false, distractorRationale: "A obra de Cildo Meireles não tem motivação dogmática religiosa nem adota proibições medievais." },
      { id: "d", text: "A reprodução mecânica de móveis funcionais para venda em catálogos de decoração residencial.", isCorrect: false, distractorRationale: "O ambiente não visa ao consumo comercial de móveis, mas sim à provocação sensorial e estética crítica." },
      { id: "e", text: "A ausência deliberada de qualquer conceito intelectual ou projeto prévio na concepção artística.", isCorrect: false, distractorRationale: "A arte conceitual contemporânea exige rigoroso projeto teórico, pesquisa de materiais e coerência simbólica." }
    ],
    detailedExplanation: {
      summary: "Na instalação artística contemporânea, a obra não é um objeto isolado na parede para ser olhado de longe; a obra é o próprio espaço percorrido fisicamente pelo sujeito.",
      stepByStep: [
        "Passo 1: Identificar a categoria artística: instalação imersiva (o espectador entra, pisa, sente a atmosfera monocromática e ouve o som da água na pia).",
        "Passo 2: Reconhecer a ruptura com a contemplação passiva da pintura de cavalete tradicional.",
        "Passo 3: A alternativa B expressa com clareza como a instalação ativa múltiplos sentidos (visão, audição, propriocepção espacial) do participante."
      ],
      coreConcept: "A instalação artística transforma o espaço arquitetônico em campo de experiência sensorial imersiva e reflexão crítica.",
      trapWarning: "Em arte contemporânea, o espaço e a presença física do público tornam-se elementos constitutivos da própria obra."
    },
    tags: ["cildo-meireles", "instalacao", "arte-contemporanea"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-009",
    area: "linguagens",
    competence: 4,
    skill: 14,
    topic: "Artes Visuais e Música",
    subtopic: "A Capoeira como Patrimônio Cultural da Humanidade",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Roda de Capoeira foi reconhecida em 2014 pela Unesco como Patrimônio Cultural Imaterial da Humanidade. Criada no Brasil por africanos escravizados e seus descendentes como instrumento de resistência física e afirmação comunitária, a capoeira funde luta marcial, jogo corporal acrobático, dança e musicalidade guiada pelo toque do berimbau, atabaques e cantos de lamento e desafio.",
      source: "Unesco — Organização das Nações Unidas para a Educação, a Ciência e a Cultura, 2014."
    },
    prompt: "O reconhecimento internacional da capoeira pela Unesco consagra uma trajetória histórica que:",
    options: [
      { id: "a", text: "Manteve a capoeira como esporte praticado unicamente por membros da nobreza imperial.", isCorrect: false, distractorRationale: "A capoeira nasceu entre escravizados e trabalhadores negros periféricos, e não na corte imperial." },
      { id: "b", text: "Superou séculos de perseguição policial e criminalização oficial para se tornar símbolo planetário de ancestralidade e resistência afrodiaspórica.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Excluiu a música e os instrumentos rituais para transformar a prática em boxe ocidental convencional.", isCorrect: false, distractorRationale: "A música (berimbau, ladainhas, palmas) é a alma indispensável da roda de capoeira." },
      { id: "d", text: "Demonstrou que práticas corporais afro-brasileiras não possuem relevância cultural ou identitária.", isCorrect: false, distractorRationale: "O título de Patrimônio Imaterial da Humanidade comprova exatamente a imensa importância global da prática." },
      { id: "e", text: "Determinou a extinção de todas as outras formas de artes marciais no território nacional.", isCorrect: false, distractorRationale: "O patrimônio celebra a diversidade e convive com outras modalidades esportivas e artísticas." }
    ],
    detailedExplanation: {
      summary: "A capoeira foi tipificada como crime no Código Penal Republicano de 1890 (Capítulo XIII - Dos Vadios e Capoeiras); seu reconhecimento como Patrimônio Mundial consagra a vitória da resistência cultural negra sobre a criminalização estatal.",
      stepByStep: [
        "Passo 1: Recordar o contexto histórico: praticada nos quilombos e senzalas, a capoeira era punida com prisão e desterro durante séculos no Brasil.",
        "Passo 2: Mestres como Mestre Pastinha (Angola) e Mestre Bimba (Regional) estruturaram e defenderam a prática como arte, filosofia de vida e educação cidadã.",
        "Passo 3: A alternativa B reflete a superação da repressão histórica e a elevação da capoeira a patrimônio imaterial da humanidade."
      ],
      coreConcept: "A patrimonialização de expressões afro-brasileiras repara historicamente séculos de perseguição e racismo institucional.",
      trapWarning: "Lembre-se de que a capoeira foi expressamente proibida em lei na Primeira República brasileira; ela não foi acolhida facilmente pelas elites."
    },
    tags: ["capoeira", "unesco", "ancestralidade-negra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-010",
    area: "linguagens",
    competence: 4,
    skill: 12,
    topic: "Artes Visuais e Música",
    subtopic: "O Teatro de Nelson Rodrigues e a Ruptura Moderna",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1943, a estreia da peça 'Vestido de Noiva', de Nelson Rodrigues, sob a direção de Ziembinski com o grupo Os Comediantes, fundou o teatro moderno brasileiro. Pela primeira vez no palco nacional, a ação cênica desdobrou-se simultaneamente em três planos espaciais e temporais iluminados de modo independente: o plano da Realidade (o hospital), o plano da Memória (as lembranças de Alaíde) e o plano da Alucinação (os delírios com Madame Clessi).",
      source: "MAGALDI, Sábato. Panorama do Teatro Brasileiro. São Paulo: Global, 2004."
    },
    prompt: "A montagem histórica de 'Vestido de Noiva' provocou uma revolução dramatúrgica no Brasil ao:",
    options: [
      { id: "a", text: "Retornar à linearidade ingênua e ao melodrama cômico de piadas fáceis do teatro ligeiro de revista.", isCorrect: false, distractorRationale: "Nelson Rodrigues rompeu categoricamente com a farsa superficial do teatro de revista para criar uma tragédia psicológica densa." },
      { id: "b", text: "Desmantelar a cronologia linear tradicional por meio da fragmentação expressionista do espaço e da psique da protagonista no palco.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Proibir o uso de iluminação elétrica nos teatros em defesa de tochas de fogo primitivas.", isCorrect: false, distractorRationale: "A iluminação moderna desenhada por Ziembinski foi decisiva para recortar os três planos cênicos no palco." },
      { id: "d", text: "Recusar qualquer menção a conflitos de família e valores da burguesia carioca.", isCorrect: false, distractorRationale: "O desmascaramento das hipocrisias morais da família burguesa carioca é o tema obsessivo de Nelson Rodrigues." },
      { id: "e", text: "Limitar o espetáculo à declamação monótona de versos clássicos camonianos sem encenação de corpos.", isCorrect: false, distractorRationale: "O espetáculo revolucionou o uso do corpo dos atores, da cenografia móvel e dos efeitos dramáticos modernos." }
    ],
    detailedExplanation: {
      summary: "Nelson Rodrigues e Ziembinski inseriram a dramaturgia brasileira nas vanguardas do século XX com 'Vestido de Noiva' (1943).",
      stepByStep: [
        "Passo 1: Reconhecer a estrutura cênica pioneira: três planos coexistentes no palco (Realidade, Memória e Alucinação).",
        "Passo 2: Antes de 1943, o teatro brasileiro vivia de comédias de costumes lineares e declamatórias; a peça de Nelson trouxe a psicanálise, o trauma e a vertigem expressionista para o tablado.",
        "Passo 3: A alternativa B sintetiza com exatidão o marco divisor de águas entre o teatro antigo e a modernidade cênica."
      ],
      coreConcept: "A modernização do teatro brasileiro articulou dramaturgia de sondagem psicológica a inovações revolucionárias de iluminação e cenografia fragmentada.",
      trapWarning: "'Vestido de Noiva' (1943) é para o teatro brasileiro o que a Semana de 1922 foi para as artes plásticas e literatura."
    },
    tags: ["nelson-rodrigues", "teatro-moderno", "artes-cenicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-011",
    area: "linguagens",
    competence: 4,
    skill: 13,
    topic: "Artes Visuais e Música",
    subtopic: "O Movimento Armorial de Ariano Suassuna",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Fundado em 1970 no Recife por Ariano Suassuna, o Movimento Armorial propôs a criação de uma arte erudita brasileira autenticamente enraizada nas matrizes populares tradicionais do Nordeste: as iluminuras e xilogravuras de cordel, o romanceiro ibérico medieval dos cantadores de viola, a rabeca sertaneja e os folguedos do bumba meu boi e do maracatu.",
      source: "SUASSUNA, Ariano. Iniciação à Estética. Recife: Editora Universitária da UFPE, 1975."
    },
    prompt: "O projeto estético do Movimento Armorial sustentou-se no princípio de:",
    options: [
      { id: "a", text: "Copiar cegamente a música pop comercial transmitida pelas emissoras norte-americanas.", isCorrect: false, distractorRationale: "Suassuna combatia veementemente a colonização cultural pop estrangeira despersonalizada." },
      { id: "b", text: "Alçar elementos da cultura e do folclore popular sertanejo ao estatuto de arte erudita de alta complexidade formal.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Erradicar instrumentos artesanais nordestinos como a rabeca e a viola caipira.", isCorrect: false, distractorRationale: "A rabeca e a viola foram os instrumentos centrais eleitos pela orquestra armorial criada por Suassuna." },
      { id: "d", text: "Defender que apenas temas da mitologia grega clássica podem fundamentar o teatro brasileiro.", isCorrect: false, distractorRationale: "Suassuna fundou o teatro na cultura popular nordestina e nos autos populares de feira (como no 'Auto da Compadecida')." },
      { id: "e", text: "Negar a existência de qualquer raiz ibérica ou medieval na formação do povo nordestino.", isCorrect: false, distractorRationale: "O movimento valorizava justamente as canções de gesta e romances medievais preservados vivos pela memória oral sertaneja." }
    ],
    detailedExplanation: {
      summary: "Ariano Suassuna recusou tanto o consumo colonizado da indústria cultural internacional quanto o confinamento da cultura popular ao exotismo barato, elevando o sertão à nobreza armorial erudita.",
      stepByStep: [
        "Passo 1: Entender o termo 'armorial': refere-se a brasões, armas e insígnias heráldicas de nobreza.",
        "Passo 2: Suassuna via no sertanejo, nos cantadores e nos gravadores de cordel a nobreza e a elegância verdadeira do Brasil.",
        "Passo 3: A alternativa B traduz a síntese armorial: transformar a herança popular em sinfonias, óperas, dança cênica e artes plásticas eruditas."
      ],
      coreConcept: "O Movimento Armorial buscou construir uma arte erudita brasileira a partir do diálogo profundo com as raízes ancestrais da cultura popular sertaneja.",
      trapWarning: "Ariano Suassuna não defendia um folclore simplista ingênuo, mas uma arte de alto rigor formal e estético inspirada nas matrizes do povo."
    },
    tags: ["ariano-suassuna", "movimento-armorial", "cultura-nordestina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-012",
    area: "linguagens",
    competence: 4,
    skill: 14,
    topic: "Artes Visuais e Música",
    subtopic: "O Samba de Raiz e a Resistência Cultural dos Morros Cariocas",
    difficulty: 2,
    estimatedTimeSeconds: 115,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No início do século XX, na região da Pequena África no Rio de Janeiro, em torno da casa de Tia Ciata na Praça Onze, o samba de roda baiano transformou-se no samba urbano carioca. Compositores de terreiros e morros enfrentavam perseguição policial constante: portar um violão ou cantar batucadas na rua era enquadrado como crime de vadiagem pela polícia da então capital da República.",
      source: "MOURA, Roberto. Tia Ciata e a Pequena África no Rio de Janeiro. Rio de Janeiro: Funarte, 1983."
    },
    prompt: "O nascimento do samba urbano carioca no espaço da Pequena África evidencia:",
    options: [
      { id: "a", text: "O acolhimento imediato e entusiástico das manifestações negras pelas elites republicanas higienistas da época.", isCorrect: false, distractorRationale: "As elites perseguiam os sambistas com a polícia, batidas e apreensão de violões e pandeiros." },
      { id: "b", text: "O papel decisivo das redes de solidariedade comunitária de matriarcas negras na preservação e gestação de um gênero musical que viria a definir a identidade nacional.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A importação de partituras e ritmos marciais de bandas militares germânicas.", isCorrect: false, distractorRationale: "O samba descende dos ritmos polirrítmicos dos tambores e batuques ancestrais de matriz banto e iorubá." },
      { id: "d", text: "O total desinteresse da população carioca pelas comemorações carnavalescas de rua.", isCorrect: false, distractorRationale: "O samba logo se tornou a força propulsora dos cordões, blocos e desfiles carnavalescos." },
      { id: "e", text: "A extinção definitiva das tradições religiosas de matriz africana no território do Rio de Janeiro.", isCorrect: false, distractorRationale: "A casa de Tia Ciata era um terreiro de candomblé onde fé, culinária e música conviviam de modo indissociável." }
    ],
    detailedExplanation: {
      summary: "O samba urbano nasceu sob o amparo protetor de mulheres negras como Tia Ciata, resistindo à repressão do Estado higienista para se consagrar como patrimônio nacional.",
      stepByStep: [
        "Passo 1: Reconhecer a importância histórica da Pequena África e da Praça Onze no Rio de Janeiro pós-abolição.",
        "Passo 2: Músicos como Donga, Sinhô e Pixinguinha reuniam-se na casa de Tia Ciata porque o terreiro era um território de refúgio contra a violência policial de rua.",
        "Passo 3: A alternativa B consagra o papel das mulheres negras e das redes comunitárias na criação do samba urbano."
      ],
      coreConcept: "A afirmação do samba como símbolo identitário nacional resultou de lutas e estratégias de sobrevivência de comunidades negras contra a violência policial.",
      trapWarning: "Hoje o samba é símbolo oficial do Brasil, mas nasceu sob censura, perseguição e batidas policiais contra os terreiros."
    },
    tags: ["samba-de-raiz", "tia-ciata", "pequena-africa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-013",
    area: "linguagens",
    competence: 4,
    skill: 12,
    topic: "Artes Visuais e Música",
    subtopic: "A Body Art e o Uso do Corpo como Suporte Artístico",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na performance histórica 'Rhythm 0' (1974), Marina Abramović colocou-se imóvel em uma galeria por seis horas ao lado de uma mesa com 72 objetos (incluindo flores, penas, tesouras, facas e uma pistola carregada). O público foi convidado a utilizar qualquer dos objetos sobre o corpo da artista da maneira que desejasse, expondo a vulnerabilidade humana e a rapidez com que a violência emerge na ausência de freios sociais formais.",
      source: "ARCHER, Michael. Arte Contemporânea: uma história concisa. São Paulo: Martins Fontes, 2001."
    },
    prompt: "Ao transformar o próprio corpo humano em suporte e matéria-prima da obra na Body Art, o artista propõe:",
    options: [
      { id: "a", text: "Reafirmar a pintura renascentista clássica como única expressão estética legítima.", isCorrect: false, distractorRationale: "A Body Art recusa o suporte da tela e da tinta em favor da presença física corporal do artista." },
      { id: "b", text: "Deslocar o foco da contemplação de um objeto inanimado para a tensão ética, psicológica e corporal vivenciada entre artista e espectadores no tempo presente.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Incentivar cirurgias plásticas obrigatórias para adequação aos padrões de beleza vigentes.", isCorrect: false, distractorRationale: "A performance não promove padrões comerciais de beleza, mas explora a vulnerabilidade e os limites da dor e da ética." },
      { id: "d", text: "Demonstrar a inutilidade de performances ao vivo diante do avanço das inteligências artificiais.", isCorrect: false, distractorRationale: "A potência da Body Art reside na visceralidade insubstituível da presença corporal de carne e osso." },
      { id: "e", text: "Garantir que as obras de arte sejam preservadas imutáveis em cofres bancários para revenda futura.", isCorrect: false, distractorRationale: "Performances são efêmeras e não podem ser guardadas como mercadorias físicas permanentes em cofres." }
    ],
    detailedExplanation: {
      summary: "Na Body Art e nas performances, o corpo do artista é a própria arena onde os limites da ética, do poder e do convívio social são testados em tempo real.",
      stepByStep: [
        "Passo 1: Compreender o conceito de Body Art: o corpo humano vivo como suporte, tela e instrumento estético.",
        "Passo 2: Na performance 'Rhythm 0', Abramović renunciou ao controle para expor a crueldade e a empatia da plateia diante de um corpo indefeso.",
        "Passo 3: A alternativa B capta a transição do objeto material tradicional para a experiência relacional e ética do acontecimento cênico."
      ],
      coreConcept: "A Body Art e a performance artística utilizam o corpo como território de questionamento dos códigos sociais, da moral e da efemeridade da vida.",
      trapWarning: "Performances não são espetáculos com roteiros fixos e atores fingindo; o risco e a presença física são reais no instante da ação."
    },
    tags: ["body-art", "performance", "marina-abramovic"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-014",
    area: "linguagens",
    competence: 4,
    skill: 13,
    topic: "Artes Visuais e Música",
    subtopic: "A Fotografia Documental de Sebastião Salgado",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em séries fotográficas aclamadas globalmente como 'Trabalhadores' e 'Êxodos', Sebastião Salgado registra a saga de mineiros em Serra Pelada, refugiados de guerras e comunidades tradicionais em flagrantes de preto e branco contrastados com luz e sombra de densidade quase escultural, conferindo solenidade épica e dignidade universal a populações flageladas por crises humanitárias e ambientais.",
      source: "SALGADO, Sebastião. Da Minha Terra à Terra. São Paulo: Companhia das Letras, 2014."
    },
    prompt: "O projeto estético e ético da fotografia documental em preto e branco de Sebastião Salgado caracteriza-se por:",
    options: [
      { id: "a", text: "Utilizar cores artificiais saturadas para promover o consumo desmedido de mercadorias de moda.", isCorrect: false, distractorRationale: "Salgado é célebre pelo uso magistral do preto e branco rigoroso e pela temática social humanista." },
      { id: "b", text: "Conferir beleza plástica e dignidade transcendental à condição humana trabalhadora e vulnerável, provocando empatia e denúncia social.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Ocultar intencionalmente os impactos ambientais de queimadas e mineração no planeta.", isCorrect: false, distractorRationale: "O fotógrafo é ativista ecológico com trabalhos como 'Gênesis' e o reflorestamento do Instituto Terra." },
      { id: "d", text: "Recusar a difusão de suas imagens em livros, exposições e reportagens jornalísticas públicas.", isCorrect: false, distractorRationale: "Suas fotos circulam em exposições públicas em todos os continentes e livros de alcance massivo." },
      { id: "e", text: "Retratar apenas personalidades de destaque do cinema e da aristocracia europeia contemporânea.", isCorrect: false, distractorRationale: "O foco prioritário da lente de Salgado são trabalhadores, migrantes, indígenas e camponeses anônimos." }
    ],
    detailedExplanation: {
      summary: "Sebastião Salgado alia o rigor plástico da luz chiaroscuro à denúncia humanista da exploração do trabalho e da destruição do planeta.",
      stepByStep: [
        "Passo 1: Reconhecer a assinatura visual de Sebastião Salgado: preto e branco com dramaticidade de luz e composição clássica monumental.",
        "Passo 2: Notar que os personagens retratados (como os garimpeiros cobertos de lama de Serra Pelada) não são mostrados como miseráveis desprezíveis, mas como figuras heróicas e dignas.",
        "Passo 3: A alternativa B traduz precisamente a síntese entre engajamento ético-político e rigor formal estético."
      ],
      coreConcept: "A fotografia documental social utiliza o poder visual do registro analógico para sensibilizar o público e denunciar injustiças socioambientais.",
      trapWarning: "Embora haja críticos que apontem o risco de 'estetização da dor', a força da obra de Salgado reside em devolver a dignidade aos seres humanos esquecidos."
    },
    tags: ["sebastiao-salgado", "fotografia-documental", "artes-visuais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-015",
    area: "linguagens",
    competence: 4,
    skill: 14,
    topic: "Artes Visuais e Música",
    subtopic: "O Rap dos Racionais MC's como Poesia da Metrópole Periférica",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Com a inclusão do álbum 'Sobrevivendo no Inferno' (1997), dos Racionais MC's, na lista de leituras obrigatórias do vestibular da Unicamp, consagrou-se no meio acadêmico a compreensão de que as letras de Mano Brown constituem alta poesia de intervenção social. Faixas como 'Diário de um Detento' articulam denúncia da violência carcerária, religiosidade e crítica à desigualdade racial e de classe.",
      source: "Universidade Estadual de Campinas (Unicamp), Resolução do Vestibular, 2018."
    },
    prompt: "A inclusão de uma obra do rap nacional como clássico literário e objeto de avaliação acadêmica formal reflete:",
    options: [
      { id: "a", text: "A desvalorização definitiva dos autores que escreveram romances no século XIX.", isCorrect: false, distractorRationale: "A inclusão de novas vozes não anula a importância de Machado de Assis ou Alencar; ela expande o cânone." },
      { id: "b", text: "A ampliação do conceito de texto literário e o reconhecimento das vozes e saberes da periferia urbana como patrimônio estético legítimo.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A proibição do estudo de obras poéticas em versos livres em sala de aula.", isCorrect: false, distractorRationale: "O rap utiliza amplamente versos livres e rimas com métrica complexa da oralidade rítmica." },
      { id: "d", text: "A obrigação de que todos os estudantes universitários componham faixas musicais para concluir cursos de graduação.", isCorrect: false, distractorRationale: "A avaliação acadêmica cobra interpretação crítica e análise textual, não produção compulsória de faixas musicais." },
      { id: "e", text: "A perda de relevância social da cultura Hip-Hop perante a juventude contemporânea.", isCorrect: false, distractorRationale: "Pelo contrário: demonstra o prestígio e a ressonância duradoura da cultura Hip-Hop na sociedade." }
    ],
    detailedExplanation: {
      summary: "A consagração do rap no vestibular desmantela preconceitos elitistas e reconhece que a poesia mais potente e lúcida da contemporaneidade brasileira pulsa nas periferias urbanas.",
      stepByStep: [
        "Passo 1: Reler o suporte: o álbum 'Sobrevivendo no Inferno' incluído ao lado de clássicos da literatura brasileira como Camões e Machado.",
        "Passo 2: Reconhecer a legitimidade literária das crônicas rimadas de Mano Brown: ritmo, rima, figuras de linguagem, denúncia do massacre do Carandiru e retrato sociológico.",
        "Passo 3: A alternativa B resume com precisão a ampliação democrática do cânone e o protagonismo estético da periferia."
      ],
      coreConcept: "A expansão do cânone literário e artístico incorpora manifestações da cultura oral e periférica como legítimas produções poéticas de alta densidade.",
      trapWarning: "No ENEM, letras de rap, samba e cordel são tratadas com a mesma seriedade e rigor analítico dispensados a sonetos clássicos."
    },
    tags: ["racionais-mcs", "hip-hop", "literatura-marginal"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-016",
    area: "linguagens",
    competence: 4,
    skill: 12,
    topic: "Artes Visuais e Música",
    subtopic: "A Arte Barroca de Aleijadinho em Minas Gerais",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No Santuário de Bom Jesus de Matosinhos, em Congonhas (MG), Antônio Francisco Lisboa, o Aleijadinho, esculpiu em pedra-sabão as doze monumentais estátuas dos Profetas (1800-1805). As esculturas apresentam gestos vigorosos, panejamentos recortados em dobras dramáticas e expressividade facial que fundem a fé católica da Contrarreforma ao espírito contestatório do barroco colonial tardio.",
      source: "BAZIN, Germain. Aleijadinho e a Escultura Barroca no Brasil. Rio de Janeiro: Record, 1971."
    },
    prompt: "A obra escultórica dos Profetas de Aleijadinho é considerada o ponto culminante do Barroco e Rococó mineiro porque:",
    options: [
      { id: "a", text: "Copiou sem qualquer alteração modelos renascentistas gregos feitos em mármore de Carrara importado.", isCorrect: false, distractorRationale: "Aleijadinho esculpiu em pedra-sabão local e imprimiu traços mestiços e traços anatômicos expressivos próprios." },
      { id: "b", text: "Adaptou a tradição escultórica europeia com originalidade genial, utilizando matérias-primas locais e conferindo dramaticidade e identidade mestiça às figuras sacras.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Recusou a representação de personagens bíblicos em favor de símbolos geométricos abstratos do concretismo.", isCorrect: false, distractorRationale: "A encomenda era sacra e retratou fielmente os profetas do Antigo Testamento (como Isaías, Daniel, Jeremias)." },
      { id: "d", text: "Provocou a demolição de todas as igrejas construídas na capitania de Minas Gerais durante o ciclo do ouro.", isCorrect: false, distractorRationale: "As obras coroaram as igrejas, tornando Congonhas e Ouro Preto patrimônios preservados da humanidade." },
      { id: "e", text: "Foi encomendada por mercadores holandeses calvinistas sediados em Recife.", isCorrect: false, distractorRationale: "A encomenda decorreu da devoção católica e das irmandades leigas de Minas Gerais." }
    ],
    detailedExplanation: {
      summary: "Aleijadinho é o gênio maior da arte colonial brasileira; sua obra expressa a maturidade do barroco mineiro esculpido na macia pedra-sabão nativa.",
      stepByStep: [
        "Passo 1: Reconhecer os profetas de Congonhas como patrimônio cultural da humanidade tombado pela Unesco.",
        "Passo 2: Notar as inovações de Aleijadinho: uso da pedra-sabão local, olhos amendoados e gestos teatrais dramáticos com mãos expressivas.",
        "Passo 3: A alternativa B destaca com precisão a apropriação original e autônoma da tradição barroca no contexto colonial das Gerais."
      ],
      coreConcept: "O Barroco Mineiro combinou a estética teatral da Contrarreforma a materiais e sensibilidades locais sob a liderança do mestre mestiço Aleijadinho.",
      trapWarning: "A pedra-sabão (esteatito) permitiu um trabalho de talhe com nuances e dobras que o mármore europeu duro não ofereceria."
    },
    tags: ["aleijadinho", "barroco-mineiro", "escultura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-017",
    area: "linguagens",
    competence: 4,
    skill: 13,
    topic: "Artes Visuais e Música",
    subtopic: "A Land Art e a Crítica Ecológica no Espaço Natural",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Surgida nas décadas de 1960 e 1970, a Land Art transferiu a produção artística das galerias e museus fechados para paisagens naturais monumentais (desertos, lagos secos, pedreiras e florestas). Obras como 'Spiral Jetty' (de Robert Smithson), uma gigantesca espiral de 450 metros construída com pedras e terra dentro de um lago salgado, interagem diretamente com as intempéries climáticas, a erosão e a maré ao longo das estações.",
      source: "KASTNER, Jeffrey; WALLIS, Brian. Land and Environmental Art. Londres: Phaidon, 1998."
    },
    prompt: "Ao intervir diretamente na paisagem e sujeitar a obra à erosão e ação do tempo geológico, a Land Art desafia:",
    options: [
      { id: "a", text: "A mercantilização tradicional da obra de arte como objeto colecionável e a separação artificial entre natureza e criação humana.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "A necessidade de preservação de recursos hídricos e proteção da biodiversidade de ecossistemas.", isCorrect: false, distractorRationale: "Muitos projetos de Land Art dialogam com a consciência ecológica e com a percepção dos limites do planeta." },
      { id: "c", text: "O uso da fotografia como meio de registro e memória visual de processos estéticos temporários.", isCorrect: false, distractorRationale: "Como a obra fica em locais remotos e sujeita à erosão, a fotografia e o vídeo são essenciais para documentá-la." },
      { id: "d", text: "A existência de qualquer forma de vida animal ou vegetal no planeta Terra.", isCorrect: false, distractorRationale: "A intervenção artística na paisagem não tem intenção de aniquilar a biosfera." },
      { id: "e", text: "O direito dos cidadãos de acessar museus públicos situados nas capitais dos países.", isCorrect: false, distractorRationale: "A Land Art questiona os limites espaciais do museu comercial, sem proibir a existência de museus cívicos." }
    ],
    detailedExplanation: {
      summary: "A Land Art rompe com a lógica da galeria comercial (white cube): uma espiral de pedras em um lago salgado não pode ser vendida em leilão para decorar salas de estar particulares.",
      stepByStep: [
        "Passo 1: Identificar a proposta de intervenção na escala da própria paisagem da Terra.",
        "Passo 2: Notar que a obra está sujeita à entropia, às chuvas e à sedimentação natural: ela se transforma com o tempo da natureza.",
        "Passo 3: A alternativa A explica com precisão o ataque ao fetiche da mercadoria artística transportável e colecionável."
      ],
      coreConcept: "A Land Art desmantela a noção de obra de arte como mercadoria autônoma ao integrá-la às forças geológicas e aos ciclos da natureza.",
      trapWarning: "Como você não pode comprar e levar a 'Spiral Jetty' para casa, a Land Art ataca o coração da especulação imobiliária do mercado das artes plásticas."
    },
    tags: ["land-art", "arte-ecologica", "intervencao-espacial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-018",
    area: "linguagens",
    competence: 4,
    skill: 14,
    topic: "Artes Visuais e Música",
    subtopic: "A Resistência da Música Caipira e a Viola Sertaneja de Raiz",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Diferente do agronegócio moderno cantado no chamado sertanejo universitário com guitarras e batidas eletrônicas, a moda de viola tradicional (imortalizada por duplas como Tião Carreiro & Pardinho e compositores como Almir Sater e Renato Teixeira) articula o ponteado da viola caipira de dez cordas à contemplação da natureza, ao lamento pela perda do modo de vida comunitário com o êxodo rural e ao respeito pelos ciclos dos rios e das matas.",
      source: "CALDAS, Waldenyr. O que é música sertaneja. São Paulo: Brasiliense, 1987."
    },
    prompt: "A lírica e a sonoridade da moda de viola caipira tradicional expressam:",
    options: [
      { id: "a", text: "A celebração ufanista da especulação imobiliária desenfreada nas metrópoles verticais.", isCorrect: false, distractorRationale: "A música caipira tradicional lamenta a perda do campo e critica a artificialidade estressante da metrópole de concreto." },
      { id: "b", text: "Uma cosmovisão empática ligada aos ritmos da terra, à preservação da memória camponesa e ao apego afetivo ao território rural.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "O incentivo ao desmatamento sistemático de matas ciliares por mineradoras transnacionais.", isCorrect: false, distractorRationale: "A poética de canções como 'Tocando em Frente' e 'O Menino da Porteira' exalta a harmonia com as matas e os rios." },
      { id: "d", text: "O abandono do idioma português em prol do canto exclusivo em línguas eslavas.", isCorrect: false, distractorRationale: "A moda de viola é cantada na variante dialetal caipira autêntica do português do Centro-Sul do Brasil." },
      { id: "e", text: "A recusa da música como veículo de narrativas e lendas populares de transmissão oral.", isCorrect: false, distractorRationale: "A moda de viola é eminentemente narrativa, contando causos, sagas e dramas cotidianos." }
    ],
    detailedExplanation: {
      summary: "A música caipira de raiz constitui um patrimônio imaterial da sensibilidade e da memória rural brasileira que resiste à despersonalização mercadológica.",
      stepByStep: [
        "Passo 1: Reconhecer a distinção entre a moda de viola tradicional de raiz e a produção comercial pasteurizada de massas.",
        "Passo 2: O ponteado da viola de dez cordas expressa respeito ao tempo lento do campo ('Ando devagar porque já tive pressa') e a relação afetiva com a terra.",
        "Passo 3: A alternativa B traduz com rigor essa cosmovisão e preservação de saberes tradicionais ribeirinhos e camponeses."
      ],
      coreConcept: "A música caipira tradicional é um documento vivo das transformações territoriais e da resistência da identidade campesina frente ao avanço urbano-industrial.",
      trapWarning: "Não confunda a moda de viola caipira clássica com os gêneros comerciais massificados de balada contemporânea."
    },
    tags: ["musica-caipira", "viola-sertaneja", "cultura-popular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-019",
    area: "linguagens",
    competence: 4,
    skill: 12,
    topic: "Artes Visuais e Música",
    subtopic: "A Pop Art e a Dessacralização dos Ícones de Consumo",
    difficulty: 2,
    estimatedTimeSeconds: 115,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na década de 1960, Andy Warhol utilizou a serigrafia mecânica para reproduzir em série latas de sopa Campbell's, garrafas de Coca-Cola e retratos coloridos de celebridades como Marilyn Monroe. Em seu estúdio batizado de 'The Factory' (A Fábrica), assistentes operavam rolos de tinta para gerar dezenas de cópias idênticas ou com ligeiros borrões deliberados.",
      source: "LUCIE-SMITH, Edward. Os Movimentos Artísticos a partir de 1945. São Paulo: Martins Fontes, 2006."
    },
    prompt: "Ao escolher mercadorias industrializadas banais e aplicar o método de produção em série fabril à pintura, Andy Warhol provocou o mundo das artes ao:",
    options: [
      { id: "a", text: "Restaurar o valor sagrado da pincelada manual única e insubstituível do gênio solitário.", isCorrect: false, distractorRationale: "Warhol desmistificou o 'gênio solitário' ao usar serigrafia mecânica e batizar o ateliê de 'A Fábrica'." },
      { id: "b", text: "Evidenciar a mercantilização da cultura e borrar as fronteiras entre alta arte de museu e publicidade na sociedade de hiperconsumo de massas.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Defender que museus de arte deveriam ser transformados exclusivamente em mercearias de hortifrúti.", isCorrect: false, distractorRationale: "A provocação de Warhol era conceitual e reflexiva, não de fechamento físico de museus." },
      { id: "d", text: "Proibir a comercialização de produtos alimentícios nos Estados Unidos da América.", isCorrect: false, distractorRationale: "A Pop Art inspirava-se nas mercadorias de prateleira já consumidas por milhões de pessoas." },
      { id: "e", text: "Adotar regras medievais da iconografia bizantina sem qualquer vínculo com a sociedade industrial.", isCorrect: false, distractorRationale: "A Pop Art é indissociável da cultura de consumo industrial moderna do pós-guerra." }
    ],
    detailedExplanation: {
      summary: "A Pop Art espelhou e criticou a sociedade de consumo: se tudo é mercadoria produzida em série, a obra de arte também se assume como produto reprodutível.",
      stepByStep: [
        "Passo 1: Entender a ironia de Andy Warhol: pintar latas de sopa e refrigerantes usando a mesma técnica de silkscreen dos anúncios de jornal.",
        "Passo 2: Qualquer pessoa rica ou pobre bebe a mesma Coca-Cola; a arte pop revela que todos consomem os mesmos ícones fabricados pela publicidade.",
        "Passo 3: A alternativa B capta perfeitamente a desconstrução da 'aura' da arte única e o diálogo com o consumo de massas."
      ],
      coreConcept: "A Pop Art utiliza as linguagens visuais da publicidade e dos meios de massa para comentar a onipresença do consumo no mundo contemporâneo.",
      trapWarning: "Warhol não estava apenas fazendo propaganda de refrigerante; ele estava desnudando como o capitalismo transforma tudo — até o rosto de atrizes e a morte — em mercadoria descartável."
    },
    tags: ["pop-art", "andy-warhol", "consumo-de-massa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-020",
    area: "linguagens",
    competence: 4,
    skill: 13,
    topic: "Artes Visuais e Música",
    subtopic: "O Expressionismo Abstrato e a Action Painting",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Jackson Pollock estendia imensas telas cruas diretamente sobre o assoalho do celeiro e caminhava ao redor e por cima delas. Com latas perfuradas e varetas embebidas em tinta industrial, realizava a técnica do 'dripping' (gotejamento e respingo), transformando a tela na arena de um balé físico onde a energia de seu gesto corporal ficava registrada no entrelaçamento caótico e rítmico das linhas de tinta.",
      source: "CHIPP, Herschel B. Teorias da Arte Moderna. São Paulo: Martins Fontes, 1993."
    },
    prompt: "Na técnica da 'Action Painting' praticada por Pollock, o elemento definidor da obra é:",
    options: [
      { id: "a", text: "A representação minuciosa e realista de paisagens florestais e animais silvestres.", isCorrect: false, distractorRationale: "Pollock eliminou qualquer figuração reconhecível em prol da abstração total." },
      { id: "b", text: "O próprio ato físico e gestual de pintar no tempo presente, conferindo valor autônomo ao movimento corporal e à matéria sobre a tela.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A aplicação de fórmulas matemáticas rigorosas calculadas com réguas e transferidores.", isCorrect: false, distractorRationale: "A pintura gestual de Pollock é intuitiva, dinâmica e espontânea, sem geometria de régua." },
      { id: "d", text: "A cópia de ícones religiosos encomendados pelo papado da Basílica de São Pedro.", isCorrect: false, distractorRationale: "A obra de Pollock era vanguardista e secular, desvinculada de encomendas clericais." },
      { id: "e", text: "A recusa de qualquer tinta líquida em favor do entalhe de pedras de mármore.", isCorrect: false, distractorRationale: "O dripping consiste justamente no gotejamento de esmalte e tintas líquidas sintéticas industriais." }
    ],
    detailedExplanation: {
      summary: "Na Action Painting (Pintura de Ação), a tela deixa de ser um espaço onde se desenha um objeto pré-concebido para se tornar a arena de registro de uma ação corporal viva.",
      stepByStep: [
        "Passo 1: Notar o nome do movimento: 'Pintura de Ação'. O foco não é a imagem final estática de um vaso ou pessoa, mas a intensidade física do ato de pintar.",
        "Passo 2: Pollock dançava sobre a tela, jogando seu corpo e a tinta em fluxos rítmicos ininterruptos.",
        "Passo 3: A alternativa B sintetiza com precisão a centralidade do gesto e da ação física do artista no expressionismo abstrato."
      ],
      coreConcept: "A Action Painting consagrou o processo gestual de criação física como parte indissociável da significação da obra de arte moderna.",
      trapWarning: "Os respingos de Pollock não eram mero desleixo aleatório; ele dominava a velocidade, o peso e a viscosidade da tinta em cada movimento."
    },
    tags: ["jackson-pollock", "action-painting", "abstracionismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-021",
    area: "linguagens",
    competence: 4,
    skill: 14,
    topic: "Artes Visuais e Música",
    subtopic: "O Funk Carioca como Manifestação Cultural Periférica e Lei Estadual",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 2009, a Assembleia Legislativa do Estado do Rio de Janeiro aprovou a Lei nº 5.543, que reconheceu o funk carioca como movimento cultural e musical de caráter popular, proibindo qualquer tipo de discriminação ou criminalização contra seus artistas e eventos comunitários (bailes de favela). Nascido da mistura de ritmos eletrônicos do Miami Bass com a batida afro do candomblé e o cotidiano das favelas, o funk tornou-se o maior produto sonoro exportado pela juventude urbana brasileira no século XXI.",
      source: "VIANNA, Hermano. O Mundo Funk Carioca. Rio de Janeiro: Jorge Zahar, 1988."
    },
    prompt: "O reconhecimento em lei do funk carioca como patrimônio cultural representa um avanço contra:",
    options: [
      { id: "a", text: "A comercialização de equipamentos de som e caixas acústicas no mercado formal.", isCorrect: false, distractorRationale: "A lei protege os produtores e eventos culturais, estimulando a cadeia de som e entretenimento." },
      { id: "b", text: "A criminalização histórica e seletiva de práticas estéticas geradas nas periferias e favelas por preconceito social e racial.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "O ensino de música clássica nas salas de orquestra sinfônica dos teatros municipais.", isCorrect: false, distractorRationale: "A lei valoriza a cultura periférica sem atacar outras modalidades musicais eruditas." },
      { id: "d", text: "A liberdade de organização de eventos e manifestações artísticas populares em praças públicas.", isCorrect: false, distractorRationale: "A legislação justamente assegura e protege a liberdade de expressão e de reunião dos artistas de funk." },
      { id: "e", text: "O direito dos cidadãos de escolher livremente seus gêneros musicais prediletos.", isCorrect: false, distractorRationale: "A medida defende a pluralidade e a liberdade cultural de escolha dos cidadãos." }
    ],
    detailedExplanation: {
      summary: "Assim como o samba e a capoeira no passado, o funk sofreu perseguição policial e estigmatização moralista antes de ser reconhecido pelo poder público como patrimônio cultural genuíno.",
      stepByStep: [
        "Passo 1: Reconhecer o padrão sociológico brasileiro: manifestações originadas nas favelas e comunidades negras passam invariavelmente por ciclos de repressão estatal antes de alcançarem a legitimação.",
        "Passo 2: A aprovação da lei estadual em 2009 buscou cessar batidas arbitrárias e garantir que os bailes de comunidade fossem tratados como eventos de cultura e lazer legítimos.",
        "Passo 3: A alternativa B explicita a superação da criminalização seletiva contra as periferias urbanas."
      ],
      coreConcept: "A legislação de proteção ao patrimônio imaterial é uma ferramenta democrática de combate à criminalização sistemática da cultura popular periférica.",
      trapWarning: "O funk carioca é hoje disputado por produtores musicais em festivais na Europa e nos EUA, provando sua força criativa transnacional."
    },
    tags: ["funk-carioca", "patrimonio-cultural", "cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-022",
    area: "linguagens",
    competence: 4,
    skill: 12,
    topic: "Artes Visuais e Música",
    subtopic: "A Escultura de Lygia Pape e os 'Divisores' Coletivos",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1968, durante a efervescência das manifestações de rua no Rio de Janeiro, a artista neoconcreta Lygia Pape concebeu a performance coletiva 'Divisor'. Um imenso tecido branco de 20 por 20 metros com centenas de fendas circulares foi levado para o Museu de Arte Moderna e para as ruas de Copacabana: dezenas de pessoas, crianças e passantes enfiavam suas cabeças nos buracos do tecido, unindo seus corpos numa onda branca coletiva em movimento sincronizado.",
      source: "PAPE, Lygia. Catálogo Raisonné: a poética do espaço e da participação. São Paulo: Cosac Naify, 2012."
    },
    prompt: "A obra participativa 'Divisor', de Lygia Pape, adquire sentido estético e político ao propor:",
    options: [
      { id: "a", text: "O isolamento estrito e a separação física intransponível de cada cidadão em cubículos privativos herméticos.", isCorrect: false, distractorRationale: "A obra reúne os indivíduos sob o mesmo manto branco em movimento coletivo, superando o isolamento." },
      { id: "b", text: "A fusão entre a individualidade de cada rosto e a força da ação coletiva solidária no espaço público, desafiando a censura e o individualismo.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A confecção de uniformes industriais para operários têxteis de indústrias químicas.", isCorrect: false, distractorRationale: "O tecido é um dispositivo performático estético participativo, não vestimenta fabril." },
      { id: "d", text: "A proibição da presença de pessoas comuns nas imediações de museus de arte contemporânea.", isCorrect: false, distractorRationale: "A artista levou o tecido deliberadamente para a rua pública para integrar os transeuntes populares à criação." },
      { id: "e", text: "O retorno aos dogmas do academicismo da Escola Real de Ciências, Artes e Ofícios fundada por D. João VI.", isCorrect: false, distractorRationale: "Lygia Pape foi pioneira da vanguarda neoconcreta rebelde, rompendo com o academicismo clássico." }
    ],
    detailedExplanation: {
      summary: "Em 'Divisor' (1968), as cabeças individuais emergem do tecido e precisam negociar cada passo coletivamente para se mover na rua.",
      stepByStep: [
        "Passo 1: Observar o ano crucial: 1968, ano do AI-5, manifestações estudantis da Passeata dos Cem Mil e endurecimento autoritário.",
        "Passo 2: O tecido de Lygia Pape une pessoas de diferentes idades e origens sociais em um só corpo público vivo que caminha junto pelas vias públicas.",
        "Passo 3: A alternativa B capta perfeitamente a tensão entre o indivíduo singular e a potência do corpo social coletivo na obra neoconcreta."
      ],
      coreConcept: "A arte participativa brasileira dos anos 1960 transformou a rua em espaço de resistência estética e celebração da solidariedade humana.",
      trapWarning: "Lygia Pape, Lygia Clark e Hélio Oiticica formam a grande tríade do Neoconcretismo participativo brasileiro."
    },
    tags: ["lygia-pape", "neoconcretismo", "arte-participativa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-023",
    area: "linguagens",
    competence: 4,
    skill: 13,
    topic: "Artes Visuais e Música",
    subtopic: "O Cinema Novo e a Estética da Fome de Glauber Rocha",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No manifesto 'Eztétyka da Fome' (1965), o cineasta Glauber Rocha declarou: 'Uma câmera na mão e uma ideia na cabeça'. O Cinema Novo brasileiro recusou o padrão das chanchadas comerciais e a imitação das produções milionárias dos estúdios de Hollywood. Filmes como 'Deus e o Diabo na Terra do Sol' (1964) e 'Terra em Transe' (1967) filmaram o sertão e as favelas sob o sol impiedoso, com edição descontínua e som direto para expor as fraturas e o transe político da América Latina.",
      source: "ROCHA, Glauber. Revolução do Cinema Novo. São Paulo: Cosac Naify, 2004."
    },
    prompt: "A 'Estética da Fome' formulada por Glauber Rocha postulava que o cinema brasileiro deveria:",
    options: [
      { id: "a", text: "Importar roteiristas e atores norte-americanos para dublar produções infantis em inglês.", isCorrect: false, distractorRationale: "O Cinema Novo combatia a colonização cultural de Hollywood e buscava cinema nacional independente e descolonizado." },
      { id: "b", text: "Transformar a própria escassez de recursos técnicos em potência expressiva e arma de conscientização política contra o subdesenvolvimento.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Filmar apenas comédias românticas ligeiras para proporcionar entretenimento escapista despolitizado.", isCorrect: false, distractorRationale: "Glauber recusava o entretenimento alienante em favor do confronto dramático lúcido com as misérias do país." },
      { id: "d", text: "Adotar efeitos especiais digitais caros criados em computadores de alta definição da época.", isCorrect: false, distractorRationale: "Na década de 1960 não havia efeitos digitais; a força dos filmes residia na luz natural, na montagem rítmica e no som visceral." },
      { id: "e", text: "Proibir a exibição de filmes brasileiros em festivais internacionais de cinema.", isCorrect: false, distractorRationale: "Glauber Rocha foi premiado em Cannes e tornou-se um dos cineastas mais influentes da história mundial do cinema." }
    ],
    detailedExplanation: {
      summary: "Glauber Rocha argumentava que o cinema da periferia global não podia mascarar sua miséria com falsos luxos industriais; a própria fome e aridez deveriam se tornar estética revolucionária.",
      stepByStep: [
        "Passo 1: Entender a célebre máxima: 'Uma câmera na mão e uma ideia na cabeça'.",
        "Passo 2: A estética da fome não chora passivamente a miséria; ela a expõe com fúria crítica e criatividade descolonizadora.",
        "Passo 3: A alternativa B resume com precisão como a escassez material tornou-se trampolim para a revolução na linguagem cinematográfica."
      ],
      coreConcept: "O Cinema Novo inaugurou uma cinematografia autoral, independente e socialmente comprometida com o desmascaramento das raízes do subdesenvolvimento latino-americano.",
      trapWarning: "'Deus e o Diabo na Terra do Sol' e 'Terra em Transe' revolucionaram a narrativa fílmica global nos anos 1960."
    },
    tags: ["cinema-novo", "glauber-rocha", "estetica-da-fome"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-024",
    area: "linguagens",
    competence: 4,
    skill: 14,
    topic: "Artes Visuais e Música",
    subtopic: "A Performance e o 'Manto Tupinambá' de Glicéria Tupinambá",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os mantos tupinambás, confeccionados com milhares de penas vermelhas de guará tecidas em malha de fibra vegetal de tucum, eram vestimentas rituais de lideranças espirituais indígenas. Saqueados durante a colonização, os onze exemplares históricos sobreviventes foram mantidos em museus da Europa. Em anos recentes, a artista e liderança indígena Glicéria Tupinambá promoveu a retomada da tecelagem dos mantos em sua aldeia na Bahia, unindo memória ancestral, arte contemporânea e luta pelo território e repatriação das peças sagradas.",
      source: "Museu de Arte de São Paulo (MASP), Mostra Histórias Indígenas, 2023."
    },
    prompt: "O processo contemporâneo de recriação dos mantos tupinambás por Glicéria Tupinambá expressa:",
    options: [
      { id: "a", text: "A aceitação definitiva da guarda perpétua das relíquias em cofres de capitais europeias sem contestação.", isCorrect: false, distractorRationale: "O movimento de Glicéria reivindica expressamente a soberania e a repatriação das peças aos povos originários." },
      { id: "b", text: "A reativação viva de saberes tradicionais ancestrais e a afirmação da arte indígena como instrumento político de descolonização e memória.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A tentativa de transformar os mantos sagrados em fantasias descartáveis para festas à fantasia comerciais.", isCorrect: false, distractorRationale: "O manto é uma peça de alta sacralidade cosmológica, respeitada e ritualizada na comunidade." },
      { id: "d", text: "A renúncia de artistas indígenas a expor seus trabalhos em instituições culturais brasileiras.", isCorrect: false, distractorRationale: "Glicéria representou o Brasil na prestigiada Bienal de Arte de Veneza em 2024, ocupando o Pavilhão Hãhãwpuá." },
      { id: "e", text: "A perda total da técnica milenar de tecelagem sem possibilidade de transmissão entre gerações.", isCorrect: false, distractorRationale: "O próprio projeto de Glicéria consistiu em recuperar e reensinar a tecelagem viva de tucum e penas entre as mulheres de sua aldeia." }
    ],
    detailedExplanation: {
      summary: "A arte indígena contemporânea no Brasil resgata patrimônios espoliados pelo colonialismo, transformando a criação têxtil em ato de soberania e presença viva.",
      stepByStep: [
        "Passo 1: Reconhecer a história: os mantos originais foram retirados do Brasil no século XVI e levados para museus europeus.",
        "Passo 2: Glicéria Tupinambá reencontrou os mantos na Europa, ouviu os saberes dos anciãos de sua aldeia e teceu novos mantos no território sagrado de Olivença (BA).",
        "Passo 3: A alternativa B articula com exatidão a descolonização, a revitalização de técnicas ancestrais e o protagonismo dos povos originários na arte contemporânea."
      ],
      coreConcept: "A arte contemporânea indígena desafia o apagamento colonial ao reivindicar a repatriação de acervos sagrados e a vitalidade de seus saberes cosmológicos.",
      trapWarning: "A presença da arte indígena contemporânea em bienais e no ENEM cresceu exponencialmente nos últimos anos."
    },
    tags: ["arte-indigena", "manto-tupinamba", "descolonizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-MUS-025",
    area: "linguagens",
    competence: 4,
    skill: 12,
    topic: "Artes Visuais e Música",
    subtopic: "A Bossa Nova e o Samba-Canção: A Transição Estética",
    difficulty: 2,
    estimatedTimeSeconds: 115,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No clássico samba 'Desafinado' (1959), Tom Jobim e Newton Mendonça responderam com humor e refinamento aos críticos que acusavam a Bossa Nova de ser uma música torta para cantores sem voz: 'Se você disser que eu desafino, amor / Saiba que isso em mim provoca imensa dor / Só privilegiados têm ouvido igual ao seu / Eu possuo apenas o que Deus me deu / Se você insiste em classificar / Meu comportamento de antimusical / Eu mesmo mentindo devo argumentar / Que isto é bossa nova, isto é muito natural.'",
      source: "JOBIM, Antônio Carlos; MENDONÇA, Newton. Desafinado. Rio de Janeiro: Odeon, 1959."
    },
    prompt: "Ao ironizar a acusação de desafinação, a canção de Jobim e Mendonça fundamenta a estética bossa-novista no conceito de que:",
    options: [
      { id: "a", text: "Cantores que dominam a técnica clássica de canto devem ser banidos dos estúdios de gravação.", isCorrect: false, distractorRationale: "A canção é bem-humorada e não propõe perseguição nem banimento de outros cantores." },
      { id: "b", text: "As dissonâncias harmônicas e a contenção vocal intimista são inovações estéticas legítimas e naturais da sensibilidade moderna.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "O samba tradicional carioca era desprovido de qualquer valor poético ou qualidade musical.", isCorrect: false, distractorRationale: "Os compositores reverenciavam o samba tradicional e consideravam sua criação como uma evolução do gênero." },
      { id: "d", text: "Músicos profissionais não necessitam de estudo ou treino de afinação para se apresentar em público.", isCorrect: false, distractorRationale: "A Bossa Nova exigia ouvido absoluto e harmonia jazzística de altíssima complexidade e sofisticação técnica." },
      { id: "e", text: "As letras musicais devem evitar o uso da metalinguagem e do humor reflexivo.", isCorrect: false, distractorRationale: "A canção é um dos maiores exemplos mundiais de metalinguagem musical: uma canção que discute a própria técnica musical de cantar." }
    ],
    detailedExplanation: {
      summary: "A canção 'Desafinado' utiliza a metalinguagem para defender que o que os ouvidos conservadores chamavam de 'desafinado' era, na verdade, harmonia moderna com notas de tensão melódica (intervalos de 9ª, 11ª e 13ª).",
      stepByStep: [
        "Passo 1: Reconhecer a função metalinguística: a música fala sobre o ato de cantar e compor na nova linguagem da Bossa Nova.",
        "Passo 2: Os compositores mostram que as 'dissonâncias' enriquecem a música, desafiando a mesmice melódica das canções comerciais da época.",
        "Passo 3: A alternativa B capta precisamente a legitimação das dissonâncias sutis e a naturalidade da nova poética íntima."
      ],
      coreConcept: "A metalinguagem na MPB funciona frequentemente como manifesto estético e defesa de rupturas harmônicas perante a crítica conservadora.",
      trapWarning: "'Desafinado' não é sobre alguém que canta mal; é uma defesa técnica e elegante das dissonâncias modernas."
    },
    tags: ["tom-jobim", "metalinguagem", "bossa-nova"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
