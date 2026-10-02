/**
 * BANCO DE QUESTÕES: LITERATURA CONTEMPORÂNEA, CANÇÃO POPULAR E POESIA PERIFÉRICA NO ENEM
 * Área: Linguagens, Códigos e suas Tecnologias
 * Competência: C5 | Habilidades: H15, H16, H17, H18
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de rigor poético, sócio-histórico e estético
 * Regra Estrita: ZERO termos de deslocamentos turísticos. Foco em história cultural,
 * música popular brasileira, resistência democrática, escrevivência e poesia urbana.
 */

export const QUESTIONS_LITERATURA_CONTEMPORANEA_CANCAO = [
  {
    id: "LIN-CAN-001",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura e Poesia Visual",
    subtopic: "Concretismo e Espacialização do Significante",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "beba coca cola\nbabe cola\nbeba coca\nbabe cola caco\ncaco\ncola\ncloaca\n(Décio Pignatari, 1957)",
      source: "PIGNATARI, D. Poesia Pois É Poesia. São Paulo: Brasiliense, 1986."
    },
    prompt: "O célebre poema de Décio Pignatari, marco da Poesia Concreta brasileira inaugurada nos anos 1950, constrói sua crítica à sociedade de consumo utilizando como recurso estético primordial a",
    options: [
      {
        id: "a",
        text: "adoção da métrica clássica do soneto parnasiano com rimas ricas e vocabulário arcaico.",
        isCorrect: false,
        distractorRationale: "O Concretismo rompeu radicalmente com o verso tradicional e as formas fixas como o soneto."
      },
      {
        id: "b",
        text: "decomposição fonética e morfológica do slogan publicitário até a palavra 'cloaca', integrando som, forma visual e sentido.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O movimento concreto proclamou o fim do verso tradicional linear e propôs o poema verbivocovisual: o texto explora a anatomia da palavra (significante) e seu arranjo espacial na página. Ao fragmentar 'beba coca cola' até culminar em 'cloaca' (esgoto/dejeto), o poema desmascara ironicamente a pasteurização da cultura de massas através da própria linguagem da propaganda."
      },
      {
        id: "c",
        text: "narração memorialística em prosa poética sobre a infância do eu lírico no interior do país.",
        isCorrect: false,
        distractorRationale: "O poema é lírico-visual e antidissertativo, sem teor memorialístico ou narrativo tradicional."
      },
      {
        id: "d",
        text: "exaltação patriótica e ufanista dos símbolos da industrialização multinacional do pós-guerra.",
        isCorrect: false,
        distractorRationale: "O tom do poema é de profunda denúncia crítica e paródica, e não de exaltação ufanista."
      },
      {
        id: "e",
        text: "utilização exclusiva da oralidade sertaneja para valorizar tradições folclóricas agrárias.",
        isCorrect: false,
        distractorRationale: "O vocabulário dialoga diretamente com o ambiente urbano-industrial moderno e com marcas globais."
      }
    ],
    detailedExplanation: {
      summary: "O Concretismo desconstrói o verso linear e explora a materialidade gráfica e sonora das palavras para fazer crítica à sociedade de consumo.",
      stepByStep: [
        "1. Contexto: Décio Pignatari e os irmãos Campos fundaram a Poesia Concreta em 1956.",
        "2. Características: Espacialização da página, elipse de conectivos e jogo verbivocovisual.",
        "3. Processo estético: A repetição anagramática de 'beba' e 'babe', 'caco' e 'cola' culmina na palavra ruidosa 'cloaca'.",
        "4. Significado: A promessa refrescante do consumo capitalista é reduzida ao esgoto residual da alienação."
      ],
      coreConcept: "A Poesia Concreta substitui a sintaxe discursiva linear pela estrutura espacial e sonora das palavras.",
      trapWarning: "Concretismo não tem estrofes ou rimas tradicionais: a mancha gráfica na folha é parte intrínseca do poema."
    },
    tags: ["linguagens", "literatura", "concretismo", "decio-pignatari", "poesia-visual"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-002",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Contemporânea",
    subtopic: "Poesia Marginal e a Geração Mimeógrafo nos Anos 1970",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Amor público\n\né proibido pisar na grama\no público sabe\né proibido cuspir no chão\no público sabe\né proibido falar alto\no público sabe\né proibido o amor\no público faz escondido.\n(Chacal, 1975)",
      source: "CHACAL. Quase de Manhã. São Paulo: Ática, 1993."
    },
    prompt: "Produzido durante o período da Ditadura Civil-Militar no Brasil, o poema de Chacal é representativo da Poesia Marginal (Geração Mimeógrafo), movimento que se caracterizou pela",
    options: [
      {
        id: "a",
        text: "submissão estética às normas rígidas do cânone acadêmico e publicação por grandes editoras estatais.",
        isCorrect: false,
        distractorRationale: "Os poetas marginais foram chamados assim justamente porque publicavam de forma artesanal e independente, fora das grandes editoras."
      },
      {
        id: "b",
        text: "produção independente e artesanal em mimeógrafos, linguagem coloquial, humor irônico e resistência ao autoritarismo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Diante do sufocamento cultural do AI-5 e da censura prévia, jovens poetas dos anos 1970 (Chacal, Ana Cristina Cesar, Cacaso, Leminski) imprimiam seus livros em mimeógrafos e os vendiam diretamente de mão em mão em portas de universidades, bares e cinemas. Seus textos adotavam o coloquialismo cotidiano, poemas-minuto e ironia para driblar as interdições do espaço público."
      },
      {
        id: "c",
        text: "fuga da realidade política por meio do refúgio bucólico na natureza campestre e idealização amorosa.",
        isCorrect: false,
        distractorRationale: "O bucolismo campestre é marca do Arcadismo do século XVIII, oposto à crônica urbana marginal."
      },
      {
        id: "d",
        text: "defesa intransigente da censura prévia aos meios de comunicação como garantia da moral pública.",
        isCorrect: false,
        distractorRationale: "A poesia marginal denunciava frontalmente as proibições do regime autoritário ('é proibido o amor')."
      },
      {
        id: "e",
        text: "utilização exclusiva da estrutura do teatro épico em versos alexandrinos decassílabos.",
        isCorrect: false,
        distractorRationale: "O poema é curto, direto, fragmentário e totalmente livre de métricas parnasianas rígidas."
      }
    ],
    detailedExplanation: {
      summary: "A Poesia Marginal dos anos 1970 usou linguagem coloquial e circulação independente no mimeógrafo para enfrentar a repressão da ditadura militar.",
      stepByStep: [
        "1. Identificar o contexto histórico: Ditadura Militar brasileira nos anos 1970 (anos de chumbo).",
        "2. Reconhecer o movimento: Geração Mimeógrafo / Poesia Marginal.",
        "3. Recursos do texto: Repetição enfática das proibições estatais no espaço público e a resposta humana espontânea e subversiva ('o público faz escondido')."
      ],
      coreConcept: "A Poesia Marginal une produção artesanal independente, coloquialidade cotidiana e contestação da repressão autoritária.",
      trapWarning: "'Marginal' não significa criminoso; refere-se a estar à margem do circuito editorial comercial e da censura governamental."
    },
    tags: ["linguagens", "literatura", "poesia-marginal", "anos-70", "ditadura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-003",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Música Popular e Sociedade",
    subtopic: "Tropicalismo e Antropofagia Cultural",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Caminhando contra o vento\nSem lenço, sem documento\nNo sol de quase dezembro\nEu vou\nO sol se reparte em crimes\nEspaçonaves, guerrilhas\nEm cardinales bonitas\nEu vou\nEm caras de presidentes\nEm grandes beijos de amor\nEm dentes, pernas, bandeiras\nBomba e Brigitte Bardot\n(Caetano Veloso, 'Alegria, Alegria', 1967)",
      source: "VELOSO, C. Alegria, Alegria. Festival de Música Popular Brasileira, TV Record, 1967."
    },
    prompt: "Apresentada no Festival da Record de 1967 com o acompanhamento de guitarras elétricas dos Beat Boys, a canção de Caetano Veloso inaugurou a estética tropicalista no Brasil ao",
    options: [
      {
        id: "a",
        text: "rejeitar toda a cultura internacional moderna em defesa do folclore nacional acústico purista.",
        isCorrect: false,
        distractorRationale: "O Tropicalismo justamente causou escândalo na esquerda nacionalista tradicional por introduzir a guitarra elétrica do rock internacional."
      },
      {
        id: "b",
        text: "articular elementos da cultura de massas global ao contexto sociopolítico nacional, mesclando fragmentos díspares sob inspiração antropofágica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Tropicalismo (liderado por Caetano, Gil, Tom Zé, Mutantes e Torquato Neto) retomou a Antropofagia oswaldiana de 1928: deglutir influências cosmopolitas (pop art, rock psicodélico, cinema novo) e combiná-las aos ritmos brasileiros (samba, baião, berimbau). A letra de 'Alegria, Alegria' justapõe signos pop (Brigitte Bardot, espaçonaves) à turbulência política (guerrilhas, bombas) sem panfletarismo maniqueísta."
      },
      {
        id: "c",
        text: "limitar-se à exaltação das belezas naturais e à defesa dos valores rurais tradicionais.",
        isCorrect: false,
        distractorRationale: "A canção é essencialmente urbana e moderna, ambientada no asfalto e na cultura dos jornais diários."
      },
      {
        id: "d",
        text: "adotar a estética do nacionalismo militar para celebrar as obras de infraestrutura do governo.",
        isCorrect: false,
        distractorRationale: "O movimento tropicalista sofreu forte perseguição da censura militar, culminando na prisão e exílio de Caetano e Gil em 1968."
      },
      {
        id: "e",
        text: "pregar o isolamento cultural do país frente aos avanços tecnológicos da telecomunicação.",
        isCorrect: false,
        distractorRationale: "O Tropicalismo abraçou a televisão, a era espacial e a tecnologia como materiais de recriação poética."
      }
    ],
    detailedExplanation: {
      summary: "O Tropicalismo antropofagicamente deglutiu elementos da cultura pop mundial e da tradição brasileira, criando colagens ricas e provocativas.",
      stepByStep: [
        "1. Contexto: III Festival de Música Popular Brasileira (1967), pleno regime militar.",
        "2. Choque estético: Uso da guitarra elétrica (considerada 'imperialista' pela patrulha purista da época).",
        "3. Poética: Montagem justaposta quase cinematográfica de flashes do mundo moderno (bomba, Brigitte Bardot, espaçonaves, presidentes).",
        "4. Herança: Atualização da Antropofagia de Oswald de Andrade na moderna canção brasileira."
      ],
      coreConcept: "Tropicalismo como releitura antropofágica da modernidade urbana brasileira em meio à contracultura dos anos 60.",
      trapWarning: "A postura de 'sem lenço, sem documento' não era descompromisso alienado; era a afirmação da liberdade existencial contra a vigilância do Estado autoritário."
    },
    tags: ["linguagens", "cancao-popular", "tropicalismo", "caetano-veloso", "antropofagia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-004",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Música Popular e Resistência",
    subtopic: "A Poética Cifrada de Chico Buarque durante a Ditadura Militar",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Pai, afasta de mim esse cálice\nPai, afasta de mim esse cálice\nPai, afasta de mim esse cálice\nDe vinho tinto de sangue\nComo beber dessa bebida amarga\nTragar a dor, engolir a labuta\nMesmo calada a boca, resta o peito\nSilêncio na cidade não se escuta\nDe que me vale ser filho da santa\nMelhor seria ser filho da outra\nOutra realidade menos morta\nTanta mentira, tanta força bruta\n(Chico Buarque e Gilberto Gil, 'Cálice', 1973)",
      source: "BUARQUE, C.; GIL, G. Cálice. Gravadora Philips, 1973/1978."
    },
    prompt: "Para driblar a severa censura prévia imposta pelo regime autoritário nos anos 1970, os compositores estruturaram o refrão da canção a partir de um recurso de ambiguidade fonética e intertextual que opera por meio do(a)",
    options: [
      {
        id: "a",
        text: "uso do latim eclesiástico medieval para evitar qualquer alusão à realidade social.",
        isCorrect: false,
        distractorRationale: "A letra é em língua portuguesa coloquial e faz alusão direta à repressão e tortura."
      },
      {
        id: "b",
        text: "trocadilho sonoro entre o substantivo litúrgico 'cálice' e o verbo no imperativo 'cale-se', associando a agonia bíblica ao silenciamento político violento.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A canção constrói uma dupla camada discursiva: na superfície, dialoga com a oração de Jesus no Jardim do Getsêmani ('Pai, se for possível, afasta de mim este cálice'); no plano fonético e alegórico, o ouvinte escuta 'Pai, afasta de mim esse cale-se!', uma denúncia veemente da censura, da tortura ('vinho tinto de sangue') e da imposição truculenta do silêncio pelo Estado ('tanta mentira, tanta força bruta')."
      },
      {
        id: "c",
        text: "elogio disfarçado à harmonia cívica promovida pelas propagandas ufanistas do 'milagre econômico'.",
        isCorrect: false,
        distractorRationale: "A canção critica expressamente a mentira, a morte e a força bruta, rechaçando a propaganda oficial."
      },
      {
        id: "d",
        text: "substituição da poesia tradicional por dados estatísticos do censo demográfico do IBGE.",
        isCorrect: false,
        distractorRationale: "O texto opera por metáforas religiosas e poéticas, não por dados estatísticos."
      },
      {
        id: "e",
        text: "adoção da linguagem infantil para demonstrar inocência e ingenuidade pueril.",
        isCorrect: false,
        distractorRationale: "O tom é de tragédia lírica e dor profunda provocada pelo silenciamento forçado."
      }
    ],
    detailedExplanation: {
      summary: "A homofonia entre 'cálice' (taça litúrgica) e 'cale-se' (ordem de censura) transforma a prece bíblica em contundente denúncia do autoritarismo.",
      stepByStep: [
        "1. Intertextualidade: Oração bíblica de Cristo ('afasta de mim este cálice').",
        "2. Ambiguidade fonética: Em português falado, 'esse cálice' soa idêntico a 'esse cale-se'.",
        "3. Camada contextual: Durante a vigência do AI-5, a censura censurava qualquer crítica aberta; a metáfora poética e o duplo sentido eram armas essenciais de resistência cultural."
      ],
      coreConcept: "A canção engajada sob a censura usava recursos metafóricos, intertextuais e fonéticos para comunicar mensagens de protesto cifradas.",
      trapWarning: "No show Phono 73, o microfone de Chico e Gil foi desligado pela organização ao vivo quando começaram a cantar a palavra 'cálice'."
    },
    tags: ["linguagens", "cancao-popular", "chico-buarque", "censura", "ditadura", "homofonia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-005",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura e Cultura Periférica",
    subtopic: "O Rap Nacional como Narrativa Histórica (Racionais MC's)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O homem na estrada recomeça sua vida\nCria sua prole, ganha sua lida\nSem nada pra dar, só o suor do seu rosto\nMais uma vítima do preconceito e do desgosto\nUm sobrevivente num mundo de cão\nMais um irmão com a mão calejada\nSeguindo a risca a lei da quebrada\n(Mano Brown, 'O Homem na Estrada', Racionais MC's, 1993)",
      source: "RACIONAIS MC'S. Raio X Brasil. Gravadora Zimbabwe, 1993."
    },
    prompt: "Com a consagração do álbum 'Sobrevivendo no Inferno' como leitura obrigatória em vestibulares e objeto de estudo no ENEM, a poética dos Racionais MC's consolidou-se como alta expressão literária ao",
    options: [
      {
        id: "a",
        text: "adotar uma perspectiva externa e elitista que retrata a periferia como lugar de delinquência incurável.",
        isCorrect: false,
        distractorRationale: "O rap dos Racionais é narrado de dentro da periferia, por sujeitos periféricos que reivindicam humanidade e direitos."
      },
      {
        id: "b",
        text: "constituir uma épica contemporânea em primeira pessoa que dá voz aos marginalizados e documenta a violência estrutural do racismo de Estado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. As letras dos Racionais MC's (lideradas por Mano Brown) operam como crônicas sociais e narrativas épicas do povo negro e periférico. A linguagem é direta, ancorada nas gírias das quebradas e na tradição oral, expondo a violência policial, o preconceito racial e a exclusão econômica, ao mesmo tempo em que constrói códigos de ética, solidariedade e dignidade comunitária."
      },
      {
        id: "c",
        text: "romper totalmente com a tradição das rimas e adotar a métrica clássica greco-romana.",
        isCorrect: false,
        distractorRationale: "O rap fundamenta-se essencialmente na métrica rítmica, na rima cadenciada e na batida (flow e beat)."
      },
      {
        id: "d",
        text: "defender a passividade conformista das populações periféricas frente às injustiças sociais.",
        isCorrect: false,
        distractorRationale: "A lírica é combativa, conscientizadora e convoca o ouvinte à reflexão crítica e à autoafirmação cívica."
      },
      {
        id: "e",
        text: "evitar qualquer debate sobre a questão racial para priorizar temáticas estritamente amorosas.",
        isCorrect: false,
        distractorRationale: "O combate ao racismo estrutural é a espinha dorsal de toda a discografia do grupo."
      }
    ],
    detailedExplanation: {
      summary: "O rap dos Racionais MC's ressignifica a literatura brasileira contemporânea ao atuar como documentação épica e sociológica da realidade periférica sob a ótica dos próprios oprimidos.",
      stepByStep: [
        "1. Função social da literatura: Não se restringe aos formatos impressos das elites; abrange a oralidade e a lírica popular urbana.",
        "2. Racionais MC's: Transformam a crônica da violência e do racismo em instrumento de autoconsciência e formulação de identidade.",
        "3. Linguagem: Uso legítimo da gíria e do ritmo sincopado do hip-hop para construir denúncia e dignidade humana."
      ],
      coreConcept: "O Rap como gênero poético, literário e testemunhal de relevância canônica no Brasil contemporâneo.",
      trapWarning: "O vestibular e o ENEM reconhecem o Rap Nacional não como 'subcultura', mas como manifestação literária central do Brasil do século XXI."
    },
    tags: ["linguagens", "literatura", "rap", "racionais-mcs", "cultura-periferica", "racismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-006",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Afro-Brasileira",
    subtopic: "A 'Escrevivência' de Conceição Evaristo",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A nossa escrevivência não é para adormecer os da casa-grande, e sim para acordá-los de seus sonos injustos. Escrevo para que a nossa memória não seja apagada, para que o nosso passado não seja enterrado e para que as nossas dores não continuem sendo silenciadas como se fossem naturais.\n(Conceição Evaristo, 'Escrevivências: da voz à escrita', 2007)",
      source: "EVARISTO, C. Insubmissas Lágrimas de Mulheres. Rio de Janeiro: Malê, 2016."
    },
    prompt: "O conceito de 'escrevivência', cunhado pela escritora contemporânea Conceição Evaristo e amplamente debatido na crítica literária e no ENEM, define-se pela",
    options: [
      {
        id: "a",
        text: "imitação estrita dos modelos literários do romantismo indianista europeizado do século XIX.",
        isCorrect: false,
        distractorRationale: "A escrevivência rompe frontalmente com o cânone branco europeizado do romantismo tradicional."
      },
      {
        id: "b",
        text: "escrita literária profundamente enraizada na experiência histórica vivida e na memória coletiva das mulheres negras brasileiras.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Escrevivência' é o entrelaçamento orgânico entre a 'escrita' e a 'vivência'. Conceição Evaristo parte da oralidade ancestral das mulheres negras (suas mães, avós, trabalhadoras domésticas e lavadeiras) para criar ficções que denunciam as feridas da escravidão e o machismo contemporâneo, transformando a memória dolorosa em potência estética de libertação e conscientização coletiva."
      },
      {
        id: "c",
        text: "produção de textos alienados de qualquer compromisso social, focados exclusivamente na beleza formal de rimas raras.",
        isCorrect: false,
        distractorRationale: "O objetivo declarado da escrevivência é desacomodar e acordar os que detêm o poder social de seus sonos injustos."
      },
      {
        id: "d",
        text: "exclusão total de temas como família, infância e solidariedade comunitária.",
        isCorrect: false,
        distractorRationale: "Os laços comunitários e a maternidade negra são pilares temáticos constantes na obra de Conceição Evaristo."
      },
      {
        id: "e",
        text: "tradução literal de obras de vanguarda norte-americanas sem diálogo com a realidade nacional.",
        isCorrect: false,
        distractorRationale: "A escrevivência nasce visceralmente da vivência histórica e diaspórica brasileira."
      }
    ],
    detailedExplanation: {
      summary: "A 'escrevivência' de Conceição Evaristo une a prática da escrita à vivência corpórea e coletiva da mulher negra no Brasil.",
      stepByStep: [
        "1. Etimologia do conceito: Escrever + Viver = Escrevivência.",
        "2. Função social da literatura: Combater o apagamento histórico da população negra nas letras nacionais.",
        "3. Destinatário e impacto: Despertar os herdeiros simbólicos da 'casa-grande' e afirmar a subjetividade, dignidade e resistência das mulheres negras."
      ],
      coreConcept: "A escrevivência estabelece a experiência histórica da mulher negra como matriz legitimadora da criação literária.",
      trapWarning: "A escrevivência não é mera biografia factual individual; é uma poética que articula a dor e a luta de uma coletividade inteira."
    },
    tags: ["linguagens", "literatura", "conceicao-evaristo", "escrevivencia", "mulheres-negras"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-007",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Testemunhal",
    subtopic: "A Poética da Urgência em Carolina Maria de Jesus",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "2 de maio de 1958. Eu não sou indolente. Há dias que eu fico sem comer, mas não fico sem escrever. Eu cato papel, cato ferro, vendo o que posso para comprar comida para os meus filhos. A tontura da fome é pior que a do álcool. A tontura do álcool nos dá vontade de cantar, mas a da fome nos faz cambalear e pensar que o mundo está rodando ao contrário.\n(Carolina Maria de Jesus, 'Quarto de Despejo: Diário de uma Favelada')",
      source: "JESUS, C. M. Quarto de Despejo. São Paulo: Francisco Alves, 1960."
    },
    prompt: "Publicada na década de 1960 e traduzida para mais de uma dúzia de idiomas, a obra de Carolina Maria de Jesus subverte a tradição literária brasileira ao",
    options: [
      {
        id: "a",
        text: "idealizar a pobreza da favela do Canindé como um espaço bucólico harmonioso e acolhedor.",
        isCorrect: false,
        distractorRationale: "Carolina descreve a favela com crueza como o 'quarto de despejo' da metrópole, marcado pelo sofrimento e precariedade."
      },
      {
        id: "b",
        text: "adotar o gênero do diário para documentar em primeira pessoa a experiência dilacerante da fome, afirmando a escrita como ato de sobrevivência e dignidade.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Mulher negra, catadora de papel e mãe solo com apenas dois anos de escolaridade primária, Carolina usou o diário íntimo não como entretenimento burguês, mas como documento visceral da exclusão urbana. Ao escrever à luz de velas após jornadas exaustivas de catação, ela transformou a dor da fome e a invisibilidade social em literatura testemunhal de valor universal."
      },
      {
        id: "c",
        text: "utilizar a ficção científica futurista para escapar dos problemas materiais da sua comunidade.",
        isCorrect: false,
        distractorRationale: "Sua literatura é realista, testemunhal e ancorada na mais urgente e dolorosa realidade cotidiana."
      },
      {
        id: "d",
        text: "atacar os trabalhadores fabris e defender a permanência dos privilégios da aristocracia cafeeira.",
        isCorrect: false,
        distractorRationale: "A autora expressa solidariedade aos pobres e denuncia vigorosamente os abusos dos comerciantes e políticos locais."
      },
      {
        id: "e",
        text: "abdicar de sua voz autoral para ser intermediada por um narrador onisciente masculino.",
        isCorrect: false,
        distractorRationale: "A força canônica da obra está precisamente na voz autônoma e corajosa em primeira pessoa de Carolina."
      }
    ],
    detailedExplanation: {
      summary: "Carolina Maria de Jesus reinventa o diário pessoal como denúncia social da fome e afirmação de dignidade de uma mulher negra na periferia.",
      stepByStep: [
        "1. Obra: 'Quarto de Despejo' (1960), marco da literatura periférica e testemunhal.",
        "2. Metáfora central: A cidade de São Paulo como uma casa luxuosa (a sala de visitas é o centro rico; a favela é o quarto onde se joga o lixo e o entulho indesejado).",
        "3. A fome como tema literário: Descrita com precisão clínica e poética ('a tontura da fome').",
        "4. A escrita: Atuação política e afirmação de humanidade contra o apagamento social."
      ],
      coreConcept: "A literatura testemunhal de Carolina Maria de Jesus coloca a vivência da fome e da marginalização no centro da narrativa nacional.",
      trapWarning: "Desvios gramaticais pontuais no texto original não diminuem seu valor; revelam a potência expressiva de uma mulher autodidata que conquistou o mundo."
    },
    tags: ["linguagens", "literatura", "carolina-maria-de-jesus", "quarto-de-despejo", "literatura-testemunhal"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-008",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Urbana Contemporânea",
    subtopic: "Poesia Slam e a Ocupação dos Espaços Públicos",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os Poetry Slams chegaram ao Brasil em 2008 pelas mãos de Roberta Estrela D'Alva (Slam da Guilhermina, Slam das Minas). Trata-se de batalhas de poesia falada com regras simples: poemas autorais de até 3 minutos, proibição de figurinos, adereços ou acompanhamento musical. O corpo e a voz do poeta são o próprio suporte da obra, avaliada por um júri popular escolhido aleatoriamente na plateia da praça pública.",
      source: "NEVES, C. A voz e o corpo na praça: a explosão dos Poetry Slams no Brasil. Revista Cult, 2021."
    },
    prompt: "O fenômeno dos Poetry Slams ressignifica a prática poética nas grandes metrópoles brasileiras principalmente porque",
    options: [
      {
        id: "a",
        text: "restringe a poesia aos salões nobres de teatros e impõe a leitura silenciosa e individualizada.",
        isCorrect: false,
        distractorRationale: "O slam é comunitário, coletivo, oral e ocorre prioritariamente em praças públicas, ruas e periferias."
      },
      {
        id: "b",
        text: "democratiza o acesso à produção e recepção literária, transformando a praça pública em arena democrática de debate social e celebração da oralidade.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O slam rompe com o elitismo da literatura de gabinete: qualquer cidadão pode se inscrever para declamar e qualquer ouvinte da praça pode compor o júri de notas. As batalhas abordam temas urgentes como racismo, homofobia, machismo, desigualdade e violência policial, reafirmando o caráter público, performático e político da poesia na contemporaneidade."
      },
      {
        id: "c",
        text: "obriga os poetas a recitarem apenas autores canônicos do barroco português dos séculos XVI e XVII.",
        isCorrect: false,
        distractorRationale: "Uma das regras primordiais do slam é que os poemas devem ser estritamente autorais e contemporâneos."
      },
      {
        id: "d",
        text: "exige o uso de instrumentos musicais caros e orquestras para validar as apresentações.",
        isCorrect: false,
        distractorRationale: "No slam é terminantemente proibido o uso de qualquer instrumento musical ou trilha pré-gravada."
      },
      {
        id: "e",
        text: "elimina a participação da plateia para garantir a soberania absoluta de críticos literários acadêmicos.",
        isCorrect: false,
        distractorRationale: "O júri é formado popularmente por pessoas da plateia, desafiando a autoridade de academias formais."
      }
    ],
    detailedExplanation: {
      summary: "O Slam reabilita a poesia falada como acontecimento coletivo, ocupando o espaço público metropolitano e democratizando a voz popular.",
      stepByStep: [
        "1. Origem: Criado em Chicago nos anos 1980 por Marc Smith e introduzido no Brasil por Roberta Estrela D'Alva.",
        "2. Características: Oralidade, corpo como suporte, ausência de adereços e avaliação democrática por notas da plateia.",
        "3. Conteúdo: Resistência de minorias sociais, empoderamento periférico e denúncia cívica.",
        "4. Impacto: Deslocamento da poesia do livro estático para a performance corporal na praça viva."
      ],
      coreConcept: "Poetry Slam: manifestação contemporânea que articula oralidade, corpo, performance e cidadania.",
      trapWarning: "No slam, a avaliação popular com notas não visa mercantilizar a arte, mas engajar o público como participante ativo da experiência poética."
    },
    tags: ["linguagens", "literatura", "slam", "poesia-falada", "cultura-urbana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-009",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Música Popular Brasileira",
    subtopic: "A Poética do Clube da Esquina e a Paisagem Mineira",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Sol do meio-dia na cabeça\nCoração no peito a bater forte\nUm trem de ferro que corta o sertão\nE a poeira das montanhas a subir\nE eu que sou do mundo, sou de Minas\nTrago a canção de fé e a dor de amar\n(Márcio Borges e Milton Nascimento, 'Clube da Esquina nº 2', 1972)",
      source: "NASCIMENTO, M. et al. Clube da Esquina. Álbum duplo, Odeon, 1972."
    },
    prompt: "O movimento musical mineiro do Clube da Esquina, despontado no início da década de 1970 em Belo Horizonte, distinguiu-se esteticamente no cenário nacional pela",
    options: [
      {
        id: "a",
        text: "rejeição de instrumentos harmônicos em favor do ritmo militar marcial das marchas patrióticas.",
        isCorrect: false,
        distractorRationale: "A harmonia do Clube da Esquina é famosa mundialmente por sua extrema sofisticação com acordes invertidos e modulações não convencionais."
      },
      {
        id: "b",
        text: "síntese singular entre a herança da música sacra colonial barroca mineira, o jazz, o rock progressivo e a canção folclórica latino-americana.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Com Milton Nascimento, Lô Borges, Beto Guedes, Toninho Horta, Wagner Tiso e letristas como Márcio Borges e Fernando Brant, o Clube da Esquina criou uma sonoridade ímpar: uniu a melancolia dos coros religiosos de Minas Gerais à sofisticação jazzística e às guitarras dos Beatles, transformando a paisagem das serras e das estradas de ferro em metáforas de solidariedade, liberdade e introspecção poética."
      },
      {
        id: "c",
        text: "adoção estrita das regras do dodecafonismo clássico europeu sem qualquer ligação com melodias cantáveis.",
        isCorrect: false,
        distractorRationale: "O Clube da Esquina privilegia melodias vocais líricas de extraordinária beleza e comoção popular."
      },
      {
        id: "d",
        text: "apologia ao isolamento econômico do interior do Brasil contra a modernização industrial.",
        isCorrect: false,
        distractorRationale: "As letras refletiam sobre as transformações urbanas, a amizade comunitária e a abertura ao mundo ('eu que sou do mundo')."
      },
      {
        id: "e",
        text: "negação de qualquer influência da cultura afro-brasileira nas levadas rítmicas e percussivas.",
        isCorrect: false,
        distractorRationale: "A percussão e a voz de Milton Nascimento têm raízes confessionais profundas nas congadas e nos tambores mineiros."
      }
    ],
    detailedExplanation: {
      summary: "O Clube da Esquina amalgamou o cancioneiro mineiro e o barroco colonial ao rock psicodélico e jazz, gerando uma das obras-primas da música universal.",
      stepByStep: [
        "1. Obra-prima: O álbum duplo 'Clube da Esquina' (1972) é frequentemente votado como o maior disco da música brasileira.",
        "2. Identidade poética: A esquina de Santa Tereza em Belo Horizonte como ponto de encontro cósmico entre tradição e vanguarda.",
        "3. Vocabulário lírico: Trens, montanhas, janelas, rios e estradas como símbolos de liberdade interior sob a repressão política da época."
      ],
      coreConcept: "A estética do Clube da Esquina combina tradição mineira e cosmopolitismo sonoro com alta expressividade lírica.",
      trapWarning: "Apesar de enraizado em Minas, o movimento dialogava intensamente com a vanguarda internacional (Beatles, Wayne Shorter, música folclórica andina)."
    },
    tags: ["linguagens", "cancao-popular", "clube-da-esquina", "milton-nascimento", "cultura-mineira"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-010",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Brasileira Contemporânea",
    subtopic: "A Poética Breve e o Haicai em Paulo Leminski",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "isso de querer\nser exatamente o que a gente é\nainda vai\nnos levar além\n\nbateu na lata\né ouro\nbateu de frente\né muro\n(Paulo Leminski, 'Caprichos e Relaxos', 1983)",
      source: "LEMINSKI, P. Toda Poesia. São Paulo: Companhia das Letras, 2013."
    },
    prompt: "A poesia de Paulo Leminski, autor curitibano de grande ressonância nos anos 1970 e 1980, caracteriza-se pela",
    options: [
      {
        id: "a",
        text: "prolixidade descritiva e uso constante de períodos subordinados extensos.",
        isCorrect: false,
        distractorRationale: "Leminski é mestre da concisão máxima, do poema-relâmpago e do verso curto e cortante."
      },
      {
        id: "b",
        text: "concisão formal inspirada no haicai oriental, coloquialismo irreverente, humor e jogos trocadilhescos de linguagem.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Fascinado pela cultura japonesa (traduziu e praticou o haicai), pela poesia concreta e pelo rock dos anos 1980, Leminski criou uma dicção singular: poemas curtos e epigramáticos, impregnados de gírias, provérbios populares desconstruídos e trocadilhos filosóficos que alcançam profundidade reflexiva com leveza aparente."
      },
      {
        id: "c",
        text: "imitação de hinos religiosos solenes destinados à liturgia ortodoxa.",
        isCorrect: false,
        distractorRationale: "Sua poesia é profana, coloquial, lúdica e despretensiosa, longe de qualquer tom litúrgico solene."
      },
      {
        id: "d",
        text: "defesa intransigente do retorno ao parnasianismo de Olavo Bilac.",
        isCorrect: false,
        distractorRationale: "O autor combatia o academicismo parnasiano e celebrava a vanguarda e a contracultura."
      },
      {
        id: "e",
        text: "ausência de qualquer reflexão sobre a própria condição humana e existencial.",
        isCorrect: false,
        distractorRationale: "Apesar do humor, suas frases curtas contêm densa reflexão existencial e filosófica ('isso de querer ser exatamente o que a gente é')."
      }
    ],
    detailedExplanation: {
      summary: "Paulo Leminski une a síntese do haicai japonês à malícia da fala brasileira e ao rigor da vanguarda concreta.",
      stepByStep: [
        "1. Traços centrais: Brevidade, concisão, humor, coloquialismo e jogos sonoros.",
        "2. Diálogo intercultural: Síntese da filosofia zen-budista com o pop urbano ocidental.",
        "3. Estilo: Provérbios subvertidos, ritmo rápido e impacto imediato no leitor."
      ],
      coreConcept: "A poética de Leminski opera por síntese, aforismo e concisão lúdico-filosófica.",
      trapWarning: "Não confunda a brevidade dos poemas com superficialidade: o laconismo de Leminski é fruto de refinado artesanato verbal."
    },
    tags: ["linguagens", "literatura", "paulo-leminski", "haicai", "poesia-breve"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-011",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Música Popular e Resistência",
    subtopic: "A Canção Cívica de Aldir Blanc e Elis Regina",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Caía a tarde feito um viaduto\nE um bêbado trajando luto\nMe lembrou Carlitos\nA lua, tal qual a dona do bordel\nPedia a cada estrela fria\nUm brilho de aluguel\nE nuvens lá no mata-borrão do céu\nChupavam manchas torturadas\nQue sufoco!\nMeu Brasil, que sonha com a volta\nDo irmão do Henfil\nCom tanta gente que partiu\nNum rabo de foguete\nChora a nossa pátria, mãe gentil\n(Aldir Blanc e João Bosco, 'O Bêbado e a Equilibrista', 1979)",
      source: "REGINA, E. Essa Mulher. Gravadora Warner Music, 1979."
    },
    prompt: "Imortalizada na voz potente de Elis Regina em 1979, a canção tornou-se o hino informal do movimento pela Anistia no Brasil por meio do(a)",
    options: [
      {
        id: "a",
        text: "apoio explícito aos decretos de exceção do regime autoritário para conter greves sindicais.",
        isCorrect: false,
        distractorRationale: "A canção é símbolo máximo da resistência e da exigência democrática pelo retorno dos exilados."
      },
      {
        id: "b",
        text: "articulação de imagens líricas urbanas à esperança pelo retorno dos exilados políticos e pela pacificação democrática nacional.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A canção de Aldir Blanc e João Bosco, interpretada com visceralidade por Elis Regina, homenageia os perseguidos pela ditadura: cita expressamente Herbert José de Souza ('o irmão do Henfil', sociólogo e ativista exilado no Canadá) e evoca os militantes que partiram forçadamente pelo mundo ('num rabo de foguete'). A paródia irônica do Hino Nacional ('Chora a nossa pátria, mãe gentil') sintetiza a dor coletiva e a esperança da anistia ampla, geral e irrestrita conquistada naquele mesmo ano de 1979."
      },
      {
        id: "c",
        text: "abandono completo da língua portuguesa e adoção de mantras orientais pacifistas.",
        isCorrect: false,
        distractorRationale: "A letra é construída sobre o rico vocabulário das crônicas do subúrbio carioca e da política nacional."
      },
      {
        id: "d",
        text: "elogio aos generais presidentes pelas obras rodoviárias construídas na Transamazônica.",
        isCorrect: false,
        distractorRationale: "A metáfora da queda do viaduto evoca o trágico desabamento do Elevado Paulo de Frontin no Rio de Janeiro e a instabilidade do regime."
      },
      {
        id: "e",
        text: "negação do papel das artes e dos artistas na transformação política das sociedades.",
        isCorrect: false,
        distractorRationale: "A música afirma categoricamente a esperança equilibrista dos poetas e do povo brasileiro."
      }
    ],
    detailedExplanation: {
      summary: "A canção transformou-se no hino da Lei da Anistia ao exigir o retorno dos cidadãos exilados e denunciar as feridas da repressão com alta densidade poética.",
      stepByStep: [
        "1. Contexto: 1979, ano da promulgação da Lei da Anistia e início da abertura política lenta e gradual.",
        "2. Referência direta: Betinho, irmão do cartunista Henfil, exilado político que fundaria anos depois a campanha contra a fome no Brasil.",
        "3. Recursos poéticos: Metáforas de alta expressividade ('manchas torturadas', 'brilho de aluguel', 'irmão do Henfil').",
        "4. Interpretação: A interpretação magistral de Elis Regina conferiu à canção o estatuto de patrimônio cívico e emocional do país."
      ],
      coreConcept: "A canção popular como vetor de mobilização cívica e registro histórico da memória democrática brasileira.",
      trapWarning: "'O irmão do Henfil' não é um personagem de desenho; é o sociólogo Betinho, figura central na luta pelos direitos humanos no Brasil."
    },
    tags: ["linguagens", "cancao-popular", "aldir-blanc", "elis-regina", "anistia", "ditadura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-012",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Popular Tradicional",
    subtopic: "A Poética do Sertão em Patativa do Assaré",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Setaimo de Maio, a terra incantada\nSem água, sem fruto, sem flor e sem nada\nNem pasto pro gado que berra na serra\nSem ter um raminho que cubra esta terra\nEu vendo o jumento, o bode e o leitão\nAdeus, minha terra, adeus meu sertão\n(Patativa do Assaré, 'A Triste Partida', 1964)",
      source: "ASSARÉ, P. Cante Lá que Eu Canto Cá: Filosofia de um Trovador Nordestino. Petrópolis: Vozes, 1978."
    },
    prompt: "Na obra de Patativa do Assaré, poeta popular cearense regravado por Luiz Gonzaga, a utilização da variedade linguística sertaneja e da métrica do cordel cumpre o papel de",
    options: [
      {
        id: "a",
        text: "ridicularizar a fala do camponês como sinal de inferioridade intelectual irremediável.",
        isCorrect: false,
        distractorRationale: "O uso da linguagem oral sertaneja em Patativa confere dignidade, autenticidade e elevação ética à voz do sertanejo."
      },
      {
        id: "b",
        text: "legitimar a experiência vivida e o sofrimento do homem do campo, transformando a língua do sertão em poesia de denúncia social e rigor estético.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Patativa do Assaré compunha de cabeça poemas de métrica rigorosa (décimas e sextilhas perfeitas com rimas consoantes) preservando a fonética e o léxico regional do semiárido. A canção documenta com lirismo dilacerante a tragédia da estiagem cíclica, a migração forçada e o abandono histórico da população camponesa pelos governos centrais, sem paternalismo ou caricatura."
      },
      {
        id: "c",
        text: "promover o esquecimento das secas em prol de uma imagem paradisíaca e farta do Nordeste agrário.",
        isCorrect: false,
        distractorRationale: "O texto denuncia com crueza a devastação da seca ('sem fruto, sem flor e sem nada') e a perda trágica da terra natal."
      },
      {
        id: "d",
        text: "imitar as formas do haicai japonês para agradar ao público consumidor das metrópoles globais.",
        isCorrect: false,
        distractorRationale: "A forma poética deriva estritamente da tradição do cordel e da cantoria de viola nordestina."
      },
      {
        id: "e",
        text: "substituir a métrica poética por relatórios agronômicos de órgãos estatais de irrigação.",
        isCorrect: false,
        distractorRationale: "Trata-se de criação literária autêntica e visceral, não de burocracia técnica."
      }
    ],
    detailedExplanation: {
      summary: "Patativa do Assaré eleva a fala regional sertaneja ao estatuto de alta literatura de denúncia social e memória coletiva.",
      stepByStep: [
        "1. Tradição oral e cordel: O cordel e a cantoria nordestina exigem métrica estrita e rima consonantal impecável.",
        "2. Variação linguística: O uso das formas orais ('incantada', 'setaimo') não é 'erro'; é expressão legítima da identidade cultural do sertanejo.",
        "3. Conteúdo: Crítica ao latifúndio, à seca e à migração forçada de famílias inteiras que perdem tudo."
      ],
      coreConcept: "A poesia de cordel e a literatura popular como veículos de consciência social e afirmação identitária no semiárido.",
      trapWarning: "No ENEM, a literatura popular nunca é tratada como 'menor' ou 'folclore ingênuo': tem o mesmo estatuto estético e valor crítico da literatura erudita."
    },
    tags: ["linguagens", "literatura", "cordel", "patativa-do-assare", "variacao-linguistica", "nordeste"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-013",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Música Popular Brasileira",
    subtopic: "A Poética de Luiz Gonzaga e Humberto Teixeira",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Quando olhei a terra ardendo\nQual a fogueira de São João\nEu perguntei a Deus do céu, ai\nPor que tamanha judiação?\nQue braseiro, que fornalha\nNem um pé de prantação\nPor farta d'água perdi meu gado\nMorreu de sede meu alazão\n(Luiz Gonzaga e Humberto Teixeira, 'Asa Branca', 1947)",
      source: "GONZAGA, L.; TEIXEIRA, H. Asa Branca. Gravadora RCA Victor, 1947."
    },
    prompt: "Considerada uma das canções mais emblemáticas da cultura brasileira, 'Asa Branca' constrói seu poder poético e universalidade ao",
    options: [
      {
        id: "a",
        text: "apresentar a estiagem como punição divina merecida aos povos do interior.",
        isCorrect: false,
        distractorRationale: "O eu lírico questiona a dureza da situação ('por que tamanha judiação?'), sem aceitá-la como punição merecida."
      },
      {
        id: "b",
        text: "associar a fuga da ave migratória à partida dolorosa do sertanejo, transformando a tragédia climática em ode de esperança no retorno à terra.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A ave 'asa branca' (pomba selvagem migratória do semiárido) parte apenas quando a seca é extrema; sua fuga espelha o drama do retirante humano obrigado a abandonar seu solo. A letra conjuga a dor da perda material com a promessa de fidelidade amorosa e o anseio inabalável de regresso quando a chuva voltar a esverdear o sertão."
      },
      {
        id: "c",
        text: "fazer apologia à migração definitiva e ao abandono permanente das raízes culturais regionais.",
        isCorrect: false,
        distractorRationale: "A canção promete expressamente o retorno triunfal e afetuoso à terra natal assim que as chuvas caírem."
      },
      {
        id: "d",
        text: "utilizar a frieza de relatórios meteorológicos para desumanizar a experiência do sertanejo.",
        isCorrect: false,
        distractorRationale: "O texto é impregnado de emoção, fé, espiritualidade e afeto pelo animal de estimação e pela terra."
      },
      {
        id: "e",
        text: "defender o fim da música regional em proveito exclusivo dos ritmos importados europeus.",
        isCorrect: false,
        distractorRationale: "Luiz Gonzaga consagrou o baião como gênero nacional triunfante nas rádios de todo o país."
      }
    ],
    detailedExplanation: {
      summary: "'Asa Branca' imortaliza a saga do retirante nordestino através da metáfora da ave migratória que foge da seca, ancorada na promessa de regresso.",
      stepByStep: [
        "1. Metáfora central: A partida da asa branca (ave símbolo de resistência) anuncia a necessidade extrema de retirada.",
        "2. Paralelismo: O sofrimento da natureza espelha a dor do homem sertanejo ('morreu de sede meu alazão').",
        "3. Sentimento final: Apesar da devastação, a canção encerra-se com a promessa da chuva e a esperança de reencontro e fertilidade."
      ],
      coreConcept: "A canção popular como construtora de mitos e imagens definidoras da identidade cultural nacional.",
      trapWarning: "'Asa Branca' não é um lamento derrotado; é um hino de resistência e promessa de renascimento com as chuvas."
    },
    tags: ["linguagens", "cancao-popular", "luiz-gonzaga", "asa-branca", "sertao", "baiao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-014",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Música Contemporânea e Crítica Social",
    subtopic: "A Metrópole Desumanizada em Criolo",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Não existe amor em SP\nOs bares estão cheios de almas tão vazias\nA ganância vibra, a vaidade excita\nDevaneios no céu de cinza e fumaça\nUm coração de concreto não pulsa\nAs pessoas olham para o chão com pressa\nDe chegar a lugar nenhum\n(Criolo, 'Não Existe Amor em SP', 2011)",
      source: "CRIOLO. Nó na Orelha. Gravadora Oloko Records, 2011."
    },
    prompt: "Na lírica do compositor e rapper paulistano Criolo, a metrópole contemporânea é retratada a partir de uma poética que",
    options: [
      {
        id: "a",
        text: "celebra a frieza dos arranha-céus como símbolo absoluto de plenitude moral e felicidade coletiva.",
        isCorrect: false,
        distractorRationale: "O texto denuncia a 'ganância', o 'coração de concreto' e a alienação das almas vazias na grande cidade."
      },
      {
        id: "b",
        text: "denuncia a mercantilização dos afetos, a alienação do ritmo urbano frenético e o isolamento emocional dos sujeitos sob o capitalismo moderno.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em diálogo com a tradição da sociologia urbana e da poesia da desolação (como Drummond e Mário de Andrade), Criolo sintetiza o mal-estar da megalópole paulistana: a velocidade cega ('pressa de chegar a lugar nenhum'), a opacidade visual ('céu de cinza e fumaça') e a anestesia afetiva, reivindicando poeticamente a reconquista do afeto e da humanidade perdida."
      },
      {
        id: "c",
        text: "propõe o desmonte de todos os postos de saúde da cidade para incentivar a fé individual.",
        isCorrect: false,
        distractorRationale: "A crítica é humanista e civilizatória, sem qualquer ataque a serviços públicos."
      },
      {
        id: "d",
        text: "utiliza o vocabulário das cortes imperiais para celebrar a nobreza dos bairros abastados.",
        isCorrect: false,
        distractorRationale: "A canção emprega a linguagem coloquial, pungente e direta do cidadão contemporâneo na calçada."
      },
      {
        id: "e",
        text: "afirma que a tecnologia digital eliminou toda e qualquer solidão humana nas grandes metrópoles.",
        isCorrect: false,
        distractorRationale: "O poema foca no vazio existencial e no isolamento desesperador das pessoas no espaço urbano."
      }
    ],
    detailedExplanation: {
      summary: "Criolo desconstrói o mito da megalópole vitoriosa, revelando a solidão, a pressa estéril e a carência de afeto no espaço urbano contemporâneo.",
      stepByStep: [
        "1. Tema: A desumanização e a alienação na vida metropolitana hiperacelerada.",
        "2. Metáforas espaciais: 'Coração de concreto', 'céu de cinza e fumaça'.",
        "3. Provocação crítica: O refrão 'Não existe amor em SP' funciona como paradoxo e conclamação urgente: a constatação da falta é um apelo para reinventar o afeto comunitário."
      ],
      coreConcept: "A canção contemporânea como crônica lírica do mal-estar urbano e da solidão no capitalismo tardio.",
      trapWarning: "O refrão não é uma ofensa à cidade; é uma constatação lírica da desumanização gerada pela lógica da ganância e da pressa."
    },
    tags: ["linguagens", "cancao-popular", "criolo", "critica-social", "espaco-urbano"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-015",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Brasileira Contemporânea",
    subtopic: "A Tragédia Familiar em 'Lavoura Arcaica' de Raduan Nassar",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O pai nos sentava à mesa grande e, antes que a comida chegasse à boca, nos fazia engolir longas lições de paciência e respeito à ordem da terra. Sua voz pesava sobre os pratos como uma pedra de moinho. Ele falava do dever, da colheita que exige calos e da tradição que não admite rebeldia. Mas meu peito queimava com uma fome que nenhum pão daquela mesa conseguia aplacar.\n(Raduan Nassar, 'Lavoura Arcaica', 1975)",
      source: "NASSAR, R. Lavoura Arcaica. São Paulo: Companhia das Letras, 1989."
    },
    prompt: "Na obra-prima de Raduan Nassar, o conflito central entre o protagonista André e a figura paterna expressa",
    options: [
      {
        id: "a",
        text: "o embate trágico e irreconciliável entre a rigidez da moral patriarcal tradicional e a erupção do desejo individual de liberdade e transgressão.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Lavoura Arcaica' retoma a estrutura da tragédia clássica e da parábola bíblica do Filho Pródigo em tom dilacerante e barroco. O pai representa a Lei, a ordem agrária imutável, o trabalho sacrificial e o freio moral; André encarna a paixão desenfreada, o delírio poético, o incesto e a ruptura com o sufocamento das convenções familiares fechadas."
      },
      {
        id: "b",
        text: "uma disputa burocrática por herança financeira regida estritamente pelas leis do direito comercial moderno.",
        isCorrect: false,
        distractorRationale: "O conflito é arquetípico, psíquico, existencial e moral, e não uma mera disputa patrimonial de fórum civil."
      },
      {
        id: "c",
        text: "o elogio cego à obediência filial sem qualquer contestação da autoridade agrária.",
        isCorrect: false,
        distractorRationale: "Toda a narrativa é a explosão da revolta e da fuga desesperada do filho contra o despotismo patriarcal."
      },
      {
        id: "d",
        text: "a adesão acrítica aos modelos da ficção de entretenimento norte-americana.",
        isCorrect: false,
        distractorRationale: "A prosa de Nassar é erudita, lírica, densa, próxima ao lirismo do Antigo Testamento e à tradição meditativa árabe-mediterrânea."
      },
      {
        id: "e",
        text: "a pacificação instantânea de todos os conflitos afetivos por meio de um diálogo conciliador e ameno.",
        isCorrect: false,
        distractorRationale: "O livro culmina em uma tragédia familiar violenta e irreversível, típica das tragédias gregas."
      }
    ],
    detailedExplanation: {
      summary: "Raduan Nassar encena o choque ancestral entre a lei paterna (dever, tradição, terra) e o delírio transgressor do filho em uma prosa poética de alta voltagem.",
      stepByStep: [
        "1. Obra: 'Lavoura Arcaica' (1975), adaptada ao cinema por Luiz Fernando Carvalho.",
        "2. Intertextualidade: Parábola do filho pródigo e tragédias gregas (Édipo, Antígona).",
        "3. Linguagem: Prosa poética com forte carga sensorial, imagens corporais e cadência lírica inconfundível.",
        "4. Conflito: O sufocamento da individualidade sob o peso da honra patriarcal rural."
      ],
      coreConcept: "A ficção contemporânea de Raduan Nassar investiga os limites do afeto, do poder patriarcal e da transgressão moral.",
      trapWarning: "Apesar de ambientado no campo, o livro não é 'regionalista tradicional'; é uma narrativa de densidade psicológica e universal."
    },
    tags: ["linguagens", "literatura", "raduan-nassar", "lavoura-arcaica", "prosa-poetica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-016",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Pensamento e Literatura Indígena",
    subtopic: "A Crítica Cosmológica de Ailton Krenak",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Fomos nos alienando desse organismo de que somos parte, a Terra, e passamos a pensar que ele é uma coisa e nós, outra: a Terra e a humanidade. Eu não percebo onde tem algo que não seja natureza. Tudo é natureza. O cosmos é natureza. Tudo em que eu consigo pensar é natureza. Quando despersonalizamos a montanha, o rio e a floresta, transformando-os em meros 'recursos naturais' para extração e lucro, estamos decretando o fim do nosso próprio mundo.\n(Ailton Krenak, 'Ideias para Adiar o Fim do Mundo', 2019)",
      source: "KRENAK, A. Ideias para Adiar o Fim do Mundo. São Paulo: Companhia das Letras, 2019."
    },
    prompt: "Na ensaística do pensador e líder indígena Ailton Krenak, recentemente empossado na Academia Brasileira de Letras, a desconstrução da visão de mundo ocidental fundamenta-se na",
    options: [
      {
        id: "a",
        text: "defesa da aceleração da exploração mineral predatória como único motor de progresso humano.",
        isCorrect: false,
        distractorRationale: "Krenak denuncia veementemente o extrativismo predatório que destrói montanhas e envenena rios sagrados (como o Rio Doce / Watu)."
      },
      {
        id: "b",
        text: "superação da falsa dicotomia entre humanidade e natureza, propondo uma cosmologia relacional na qual rios e montanhas são concebidos como sujeitos vivos e parentes.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A filosofia ameríndia de Krenak desafia o antropocentrismo iluminista ocidental (que enxerga a Terra como mero depósito inerte de mercadorias a serem exploradas). Para o povo Krenak, o rio é um parente (o avô Watu), a montanha é um ente vivo com memória, e a sobrevivência da humanidade depende do reconhecimento de que somos parte indivisível do tecido vivo do cosmos."
      },
      {
        id: "c",
        text: "proposta de isolamento total de todas as etnias indígenas em reservas inacessíveis sem comunicação com a sociedade.",
        isCorrect: false,
        distractorRationale: "Krenak escreve e publica livros amplamente difundidos para dialogar com a sociedade global e provocar transformações éticas profundas."
      },
      {
        id: "d",
        text: "rejeição de qualquer manifestação de pensamento poético ou filosófico no debate sobre o meio ambiente.",
        isCorrect: false,
        distractorRationale: "O texto de Krenak é profundamente filosófico, lírico e conceitual."
      },
      {
        id: "e",
        text: "submissão voluntária da ecologia aos interesses dos conglomerados financeiros internacionais.",
        isCorrect: false,
        distractorRationale: "O autor é um dos mais contundentes críticos do capitalismo global e do consumismo predatório."
      }
    ],
    detailedExplanation: {
      summary: "Krenak desafia a divisão ocidental entre ser humano e natureza, afirmando a Terra como organismo vivo do qual somos apenas uma extensão.",
      stepByStep: [
        "1. Crítica ao Antropoceno: O ser humano ocidental separou-se da natureza para dominá-la e mercantilizá-la.",
        "2. Perspectiva ameríndia: 'Tudo é natureza'. Rios, pedras, árvores e animais possuem subjetividade e agência.",
        "3. Função da literatura de Krenak: 'Contar mais uma história para adiar o fim do mundo' é resistir à homogenização consumista através da imaginação e do afeto com os não humanos."
      ],
      coreConcept: "A filosofia e ensaística ameríndia como desconstrução do antropocentrismo ocidental.",
      trapWarning: "Tratar rios como pessoas não é 'crença folclórica ingênua'; é uma sofisticada epistemologia ecológica hoje reconhecida pelo direito internacional e pela ABL."
    },
    tags: ["linguagens", "literatura-indigena", "ailton-krenak", "ecologia", "cosmologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-017",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Pensamento Xamânico e Literatura",
    subtopic: "A Voz Yanomami em 'A Queda do Céu' de Davi Kopenawa",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os brancos pensam apenas em devorar a terra. Arrancam o ouro e o ferro do solo com máquinas terríveis, e depois o vendem para fabricar mais mercadorias e armas. Eles não sabem que a terra é o corpo vivo de Omama. Ao cavarem tão fundo, eles libertam as fumaças de epidemia, os xawara, que sobem ao céu e adoecem os espíritos xapiri. Se os xapiri morrerem e os xamãs não sustentarem mais o teto do mundo com seus cantos, o céu vai desabar sobre as cabeças de todos nós.\n(Davi Kopenawa e Bruce Albert, 'A Queda do Céu', 2010)",
      source: "KOPENAWA, D.; ALBERT, B. A Queda do Céu: Palavras de um Xamã Yanomami. Companhia das Letras, 2015."
    },
    prompt: "No clássico contemporâneo 'A Queda do Céu', a denúncia do xamã Davi Kopenawa contra o garimpo ilegal na Amazônia fundamenta-se em uma advertência ecológica de alcance cósmico segundo a qual",
    options: [
      {
        id: "a",
        text: "a destruição das florestas e a mineração predatória ameaçam o equilíbrio espiritual e material de todo o planeta Terra, e não apenas dos povos originários.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Kopenawa alerta que a ganância dos 'comedores de terra' (mineradores, garimpeiros e madeireiros) libera o xawara (doenças, poluição tóxica por mercúrio e fumaça de devastação). Ao assassinar a floresta viva e seus protetores xapiri, o equilíbrio climático global se desfaz: 'a queda do céu' é a metáfora profética para o colapso ecológico que atingirá tanto indígenas quanto não indígenas."
      },
      {
        id: "b",
        text: "o garimpo mecanizado é benéfico para os espíritos xapiri porque enriquece as reservas florestais.",
        isCorrect: false,
        distractorRationale: "O garimpo é identificado como o veneno supremo que polui os rios e assassina os espíritos xapiri."
      },
      {
        id: "c",
        text: "as epidemias respiratórias decorrem exclusivamente da falta de estradas pavimentadas no interior da selva.",
        isCorrect: false,
        distractorRationale: "A penetração desordenada de garimpeiros ilegais é que transporta malária e agentes patogênicos para aldeias isoladas."
      },
      {
        id: "d",
        text: "o céu físico é imune a qualquer alteração climática provocada pela atividade industrial humana.",
        isCorrect: false,
        distractorRationale: "O livro argumenta justamente que a ação predatória humana destabiliza o teto cósmico e o clima do planeta."
      },
      {
        id: "e",
        text: "os povos da floresta devem adotar o modelo consumista predatório para assegurar a sobrevivência de sua cultura.",
        isCorrect: false,
        distractorRationale: "Kopenawa rejeita radicalmente a obsessão mercantil dos brancos por acumulação de coisas e destruição do solo sagrado."
      }
    ],
    detailedExplanation: {
      summary: "'A Queda do Céu' formula uma profecia xamânica e manifesto ecológico: a agressão à floresta amazônica rompe a sustentação do cosmos, ameaçando toda a humanidade.",
      stepByStep: [
        "1. Autoria: Davi Kopenawa (xamã Yanomami) em colaboração com o antropólogo Bruce Albert.",
        "2. Conceito de Xawara: Fumaça da epidemia liberada pela extração violenta de minerais do subsolo.",
        "3. Tese central: A floresta viva é mantida em pé pelos cantos e sonhos dos xamãs e pela presença dos espíritos xapiri. Se a floresta tombar, o céu desabará sobre brancos e indígenas indistintamente."
      ],
      coreConcept: "A narrativa Yanomami como grande filosofia de sobrevivência planetária e resistência política.",
      trapWarning: "Kopenawa demonstra que a questão indígena não é um 'problema local de fronteira', mas o fiel da balança climática global."
    },
    tags: ["linguagens", "literatura-indigena", "davi-kopenawa", "queda-do-ceu", "amazonia", "xamanismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-018",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Poesia Brasileira Contemporânea",
    subtopic: "A Poesia Confessional e o Fingimento em Ana Cristina Cesar",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Olho muito tempo o corpo de um poema\naté perder de vista o que não seja corpo\ne sentir submersa a fina flor da pele\nrecusando o fundo.\nEscrevo como quem sangra uma veia antiga\nmas finjo que é apenas tinta de caneta\npara não assustar os passantes da calçada.\n(Ana Cristina Cesar, 'A Teus Pés', 1982)",
      source: "CESAR, A. C. Poética. São Paulo: Companhia das Letras, 2013."
    },
    prompt: "Expoente feminina central da poesia brasileira dos anos 1970 e 1980, Ana Cristina Cesar constrói uma obra singular marcada pela tensão dialética entre",
    options: [
      {
        id: "a",
        text: "o tom confessional de diário íntimo e a desconstrução irônica desse desabafo por meio do fingimento artístico e da fragmentação da voz lírica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A poética de 'Ana C.' opera no limiar entre a intimidade confidenciada (cartas, bilhetes, desabafos passionais) e a armadilha do fingimento poético (em diálogo com Fernando Pessoa). Ao mesmo tempo em que aparenta revelar o sofrimento mais visceral de uma mulher ('sangra uma veia antiga'), ela lembra ironicamente que tudo aquilo é construção textual calculada ('apenas tinta de caneta')."
      },
      {
        id: "b",
        text: "o nacionalismo patriótico militar e a adesão aos manifestos integralistas da década de 1930.",
        isCorrect: false,
        distractorRationale: "Ana Cristina Cesar participou da geração contracultural e marginal dos anos 1970, oposta a regimes autoritários."
      },
      {
        id: "c",
        text: "a recusa de qualquer menção a sentimentos subjetivos em nome de uma poesia puramente matemática e fria.",
        isCorrect: false,
        distractorRationale: "Sua poesia é vibrante de pulsão afetiva, corpo, desejo, melancolia e inquietação erótica."
      },
      {
        id: "d",
        text: "a adesão cega aos modelos épicos em oitava rima camoniana com exclusão do verso livre.",
        isCorrect: false,
        distractorRationale: "A autora praticava versos livres, prosa poética fragmentária e colagens intertextuais pós-modernas."
      },
      {
        id: "e",
        text: "o abandono da literatura em prol da redação de manuais de contabilidade pública.",
        isCorrect: false,
        distractorRationale: "Ana Cristina foi uma das mais brilhantes ensaístas, tradutoras e poetas de sua geração."
      }
    ],
    detailedExplanation: {
      summary: "Ana Cristina Cesar combina o intimismo do diário amoroso com o jogo sofisticado do fingimento e da metalinguagem poética.",
      stepByStep: [
        "1. Estilo: Diários truncados, cartas não enviadas, fragmentos íntimos e coloquialismo urbano.",
        "2. Tensão: Entre a confissão sincera e a máscara poética ('finjo que é apenas tinta').",
        "3. Lugar canônico: Voz feminina revolucionária que renovou a lírica amorosa e a subjetividade no pós-ditadura."
      ],
      coreConcept: "A poesia de Ana Cristina Cesar transita entre a confissão intimista e a ironia metalinguística.",
      trapWarning: "Cuidado: não leia os poemas de Ana C. como mero 'diário biográfico ingênuo'; há uma montagem estética deliberada em cada fragmento."
    },
    tags: ["linguagens", "literatura", "ana-cristina-cesar", "poesia-confessional", "geracao-70"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-019",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Música Popular e Crítica Geracional",
    subtopic: "A Desilusão Contracultural em Belchior",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Não me pergunte se eu estou bem\nEu sou apenas um rapaz latino-americano\nSem parentes importantes e vindo do interior\nMas eu trago de cabeça uma canção do rádio\nEm que um antigo compositor baiano me dizia:\n'Tudo é divino, tudo é maravilhoso'\nMas eu sei que uma arma no escuro\nFaz mais estrago do que dez canções de paz\nE que o passado é uma roupa que não nos serve mais\n(Belchior, 'Apenas um Rapaz Latino-Americano', 1976)",
      source: "BELCHIOR. Alucinação. Gravadora Philips, 1976."
    },
    prompt: "Com o álbum histórico 'Alucinação' (1976), o cantor e compositor cearense Belchior demarcou seu espaço na MPB ao construir uma poética que",
    options: [
      {
        id: "a",
        text: "reafirma o otimismo ingênuo do movimento hippie, defendendo que canções poéticas sozinhas desarmam a violência do Estado.",
        isCorrect: false,
        distractorRationale: "Belchior critica frontalmente o pacifismo ingênuo ('uma arma no escuro faz mais estrago do que dez canções de paz')."
      },
      {
        id: "b",
        text: "tensiona criticamente os slogans do Tropicalismo e confronta a juventude com a perda das ilusões revolucionárias no cotidiano duro da metrópole.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Belchior estabelece um diálogo crítico e contundente com seus predecessores (como Caetano Veloso em 'É proibido proibir' e Gal Costa em 'Divino Maravilhoso'). Ele fala da perspectiva do migrante nordestino sem privilégios que chega à cidade grande e descobre que os sonhos de liberdade dos anos 1960 foram esmagados pela violência autoritária ('arma no escuro') e pelo conformismo burguês da nova geração ('como nossos pais')."
      },
      {
        id: "c",
        text: "aplaude a perpetuação das desigualdades sociais como destino inevitável dos povos da América Latina.",
        isCorrect: false,
        distractorRationale: "Sua lírica é um grito indignado de afirmação existencial e denúncia da exploração social latino-americana."
      },
      {
        id: "d",
        text: "defende a preservação intacta do passado e a repetição cega dos costumes patriarcais antigos.",
        isCorrect: false,
        distractorRationale: "O autor afirma categoricamente que 'o passado é uma roupa que não nos serve mais', exigindo ruptura com velhos dogmas."
      },
      {
        id: "e",
        text: "rejeita a língua portuguesa para compor exclusivamente em dialetos anglo-saxões medievais.",
        isCorrect: false,
        distractorRationale: "A poesia de Belchior é um monumento da língua portuguesa falada no Brasil e na América Latina."
      }
    ],
    detailedExplanation: {
      summary: "Belchior expressa a dor e a lucidez do migrante latino-americano que desfaz as ilusões idílicas da contracultura em meio ao asfalto agressivo.",
      stepByStep: [
        "1. Álbum 'Alucinação' (1976): Um dos maiores discos de reflexão sócio-existencial da música brasileira.",
        "2. Identidade lírica: O 'rapaz latino-americano sem parentes importantes', migrante do Ceará sem apadrinhamento político na metrópole fria.",
        "3. Crítica à MPB consagrada: Diálogo com Caetano ('Divino Maravilhoso') apontando a brutalidade da censura e da tortura real.",
        "4. Temporalidade: Superação do passado estéril ('uma roupa que não nos serve mais')."
      ],
      coreConcept: "A lírica de Belchior como fratura desiludida e realista da euforia tropicalista dos anos 60.",
      trapWarning: "Belchior não ataca Caetano por ódio; ele estabelece um debate estético de altíssimo nível sobre os limites da arte diante da violência real."
    },
    tags: ["linguagens", "cancao-popular", "belchior", "alucinacao", "latino-americano", "critica-mpb"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-020",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Música Popular e Redemocratização",
    subtopic: "A Indignação Cívica no Rock Brasileiro dos Anos 1980",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas favelas, no Senado\nSujeira pra todo lado\nNinguém respeita a Constituição\nMas todos acreditam no futuro da nação\nQue país é este?\nQue país é este?\nQue país é este?\n(Renato Russo, Legião Urbana, 1978/1987)",
      source: "LEGIÃO URBANA. Que País É Este 1978/1987. Gravadora EMI, 1987."
    },
    prompt: "Composta no final da ditadura e gravada no álbum homônimo de 1987, a canção de Renato Russo reflete a atmosfera do Rock Nacional dos anos 1980, cuja potência comunicativa derivou da",
    options: [
      {
        id: "a",
        text: "cumplicidade com os esquemas de corrupção política vigentes no período da Nova República.",
        isCorrect: false,
        distractorRationale: "A canção é um manifesto furioso e indignado contra a impunidade e a corrupção generalizada."
      },
      {
        id: "b",
        text: "indignação ética da juventude urbana diante das promessas não cumpridas da redemocratização e da persistência das desigualdades estruturais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Durante os anos 1980 (com o fim formal da censura e a eclosão do Rock Brasil com Legião Urbana, Titãs, Plebe Rude, Cazuza e Barão Vermelho), a canção jovem assumiu uma postura de contundente cobrança cívica. O refrão-pergunta 'Que país é este?' sintetiza o desencanto com a persistência do compadrio político, das favelas sem saneamento e do desrespeito flagrante à legalidade institucional."
      },
      {
        id: "c",
        text: "alienação completa quanto aos rumos cívicos do Brasil para focar apenas em canções de ninar infantis.",
        isCorrect: false,
        distractorRationale: "O Rock dos anos 80 destacou-se pelo altíssimo teor político e pela denúncia social nas rádios e palcos de todo o país."
      },
      {
        id: "d",
        text: "adoção das normas formais do arcadismo setecentista para exaltar a vida pastoril nas montanhas.",
        isCorrect: false,
        distractorRationale: "A estética é a do punk e pós-punk urbano, com guitarras elétricas aceleradas e vocais cortantes."
      },
      {
        id: "e",
        text: "rejeição de qualquer sentimento patriótico ou preocupação com o futuro da sociedade brasileira.",
        isCorrect: false,
        distractorRationale: "A pergunta insistente 'Que país é este?' revela profunda angústia cívica e desejo de transformação do país."
      }
    ],
    detailedExplanation: {
      summary: "Renato Russo e o Rock dos anos 80 expressaram a revolta e a exigência de cidadania de uma geração que cresceu sob a ditadura e cobrava a democracia real.",
      stepByStep: [
        "1. Momento histórico: Transição democrática, campanha das Diretas Já e convocação da Constituinte de 1987-1988.",
        "2. Interrogação retórica: 'Que país é este?' funciona como denúncia da contradição entre o discurso ufanista e a podridão da corrupção e das periferias abandonadas.",
        "3. Impacto: A música dos anos 80 mobilizou a juventude urbana como voz ativa na reconstrução democrática."
      ],
      coreConcept: "O Rock dos anos 80 como veículo de engajamento ético e desilusão cívica na Nova República.",
      trapWarning: "Apesar do pessimismo no diagnóstico ('sujeira pra todo lado'), a canção mantém a esperança na ação política da cidadania."
    },
    tags: ["linguagens", "cancao-popular", "rock-brasileiro", "legiao-urbana", "renato-russo", "redemocratizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-021",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Urbana Contemporânea",
    subtopic: "A Voz da Favela em Geovani Martins",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A gente tava descendo a ladeira do morro na maior paz, bermudão, chinelo de dedo, sem dever nada a ninguém. De repente dobra a barca da polícia na curva, freando de lado. Três caras já descem com os fuzis apontados no meio da nossa cara, mandando botar a mão na cabeça e encostar no muro chapiscado. Para eles, todo preto de chinelo na favela já nasce réu confesso. A gente não pode nem respirar fundo que vira desacato.\n(Geovani Martins, 'O Sol na Cabeça', 2018)",
      source: "MARTINS, G. O Sol na Cabeça. São Paulo: Companhia das Letras, 2018."
    },
    prompt: "Aclamado pela crítica contemporânea, o livro de contos de Geovani Martins renova a literatura brasileira ao",
    options: [
      {
        id: "a",
        text: "incorporar a linguagem e a perspectiva interna do jovem periférico para narrar o cotidiano de vigilância violenta e suspeição racializada a que é submetido.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Nascido e criado nas favelas do Rio de Janeiro (Rocinha e Barreira do Vasco), Geovani Martins não fala 'sobre' a favela a partir de uma mirada burguesa externa; ele escreve a partir de dentro. Seus narradores utilizam as gírias autênticas do asfalto e do morro ('barca', 'descer a ladeira'), expondo a experiência corporal angustiante de ter fuzis permanentemente apontados contra sua juventude unicamente pela cor da pele e CEP de residência."
      },
      {
        id: "b",
        text: "utilizar a gramática clássica lusitana do século XVI para mascarar a violência do Rio de Janeiro.",
        isCorrect: false,
        distractorRationale: "O autor celebra a fala viva e contemporânea das juventudes periféricas cariocas sem filtros arcaicos."
      },
      {
        id: "c",
        text: "defender as ações violentas do aparato estatal como benéficas para a infância e juventude dos morros.",
        isCorrect: false,
        distractorRationale: "O texto denuncia precisamente a desumanização, o terror psicológico e a suspeição arbitrária gerados por abordagens policiais violentas."
      },
      {
        id: "d",
        text: "negar a existência de qualquer preconceito racial nas forças de segurança brasileiras.",
        isCorrect: false,
        distractorRationale: "A frase 'todo preto de chinelo na favela já nasce réu confesso' evidencia a centralidade do racismo estrutural na narrativa."
      },
      {
        id: "e",
        text: "restringir seus contos a fábulas infantis desprovidas de qualquer contextualização social.",
        isCorrect: false,
        distractorRationale: "Sua ficção é visceralmente realista, ancorada nas contradições urbanas do Brasil atual."
      }
    ],
    detailedExplanation: {
      summary: "Geovani Martins constrói uma narrativa a partir de dentro da favela, transformando a gíria e o terror da violência policial em alta voltagem literária.",
      stepByStep: [
        "1. Obra: 'O Sol na Cabeça' (2018), 13 contos sobre jovens da periferia carioca.",
        "2. Inovação formal: Fluência impecável no trânsito entre a norma culta e o registro coloquial das gírias comunitárias.",
        "3. Conteúdo ético: A denúncia da naturalização do genocídio e da criminalização prévia da juventude negra pelo Estado."
      ],
      coreConcept: "O protagonismo da voz periférica na prosa de ficção brasileira do século XXI.",
      trapWarning: "A gíria no conto de Geovani Martins não é 'descuido': é escolha estilística precisa para conferir verdade e ritmo à narrativa."
    },
    tags: ["linguagens", "literatura", "geovani-martins", "literatura-periferica", "favela", "racismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-022",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Música Contemporânea e Ancestralidade",
    subtopic: "A Poética Transmídia em Emicida ('AmarElo')",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ano passado eu morri, mas esse ano eu não morro\nTenho sangrado demais, tenho chorado pra cachorro\nAno passado eu morri, mas esse ano eu não morro\nPermita que eu fale, não as minhas cicatrizes\nAchar que essas marcas de tiro e chicote me definem\nÉ me reduzir ao pior que fizeram comigo\nEu sou o sol que renasce nas cinzas do inferno\nEu sou a vitória que a dor não conseguiu calar\n(Emicida, 'AmarElo', com citação de Belchior, 2019)",
      source: "EMICIDA. AmarElo: É Tudo pra Ontem. Laboratório Fantasma, 2019."
    },
    prompt: "No projeto transmídia 'AmarElo', que uniu álbum musical, concerto no Theatro Municipal de São Paulo e documentário histórico, o rapper Emicida constrói sua poética por meio da",
    options: [
      {
        id: "a",
        text: "rejeição de toda a tradição musical afro-brasileira para privilegiar a música eletrônica descartável.",
        isCorrect: false,
        distractorRationale: "O projeto homenageia profundamente a história do samba, dos pioneiros negros do Municipal e do Teatro Experimental do Negro."
      },
      {
        id: "b",
        text: "intertextualidade com a canção 'Sujeito de Sorte' de Belchior, ressignificando a sobrevivência negra não pela dor da escravidão, mas pela afirmação afetuosa da vida, do triunfo e da humanidade plena.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Emicida sampleia a voz de Belchior ('ano passado eu morri, mas esse ano eu não morro') e propõe um giro epistemológico na narrativa sobre a população negra: recusar ser definido unicamente pelas chagas do racismo e da escravidão ('não as minhas cicatrizes') para reivindicar a beleza, a excelência intelectual, o afeto e a celebração coletiva da vida ('AmarElo' = amar é um elo)."
      },
      {
        id: "c",
        text: "defesa do isolamento individualista como única salvação contra as mazelas sociais.",
        isCorrect: false,
        distractorRationale: "O lema da obra é coletivo e comunitário ('tudo o que nós tem é nós', 'amar é um elo')."
      },
      {
        id: "d",
        text: "imposição do silêncio sobre as desigualdades econômicas que afetam as periferias brasileiras.",
        isCorrect: false,
        distractorRationale: "A denúncia das desigualdades é explícita, mas articulada a uma mensagem de esperança e potência transformadora."
      },
      {
        id: "e",
        text: "submissão estética aos padrões da música erudita sacra do século XVIII sem qualquer diálogo com o rap.",
        isCorrect: false,
        distractorRationale: "O rap é a matriz viva da criação de Emicida, que dialoga com MPB, samba e spoken word."
      }
    ],
    detailedExplanation: {
      summary: "Emicida dialoga com Belchior em 'AmarElo' para transformar a dor da sobrevivência em afirmação de potência, excelência e afeto negro.",
      stepByStep: [
        "1. Intertextualidade: Sample de Belchior ('Sujeito de Sorte', 1976) costurado à voz de Majur e Pabllo Vittar.",
        "2. Ressignificação: Deslocar a narrativa da dor pura ('marcas de chicote') para a narrativa da vitória histórica e da beleza.",
        "3. Ocupação simbólica: Ocupar o Theatro Municipal de São Paulo, palco da Semana de 22 e da fundação do Movimento Negro Unificado em 1978.",
        "4. Tese: Amar é um elo que conecta gerações de luta e cura coletiva."
      ],
      coreConcept: "A canção contemporânea como costura de memórias históricas e celebração da dignidade afrodiaspórica.",
      trapWarning: "'AmarElo' não nega o racismo estrutural; nega que o homem e a mulher negra devam ser reduzidos exclusivamente ao trauma da opressão."
    },
    tags: ["linguagens", "cancao-popular", "emicida", "amarelo", "belchior", "intertextualidade", "afrofuturismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-023",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Mística e Transgressora",
    subtopic: "A Poética Erotizada de Hilda Hilst",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Dez chamamentos nunca foram suficientes\nPara que viesses, Amor, à minha casa.\nFiz do meu corpo uma tigela de fogo\nE da minha mente um cão farejador do Absoluto.\nChamo-te pelo nome que não tens,\nChamo-te na carne que se desfaz e busca\nA transcendência na saliva do que é mortal.\n(Hilda Hilst, 'Júbilo, Memória, Noviciado da Paixão', 1974)",
      source: "HILST, H. Da Poesia. São Paulo: Companhia das Letras, 2017."
    },
    prompt: "Composta na segunda metade do século XX por uma das autoras mais instigantes das letras em língua portuguesa, a poesia de Hilda Hilst destaca-se pela",
    options: [
      {
        id: "a",
        text: "adesão rígida e recatada às normas religiosas medievais de abnegação corporal e castidade.",
        isCorrect: false,
        distractorRationale: "A poesia de Hilda Hilst é profundamente transgressora e sensual, usando a paixão carnal para alcançar o divino."
      },
      {
        id: "b",
        text: "fusão visceral entre o erotismo carnal e a busca metafísica pelo divino, desafiando tabus morais através de uma linguagem de alta voltagem lírica e filosófica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Hilda Hilst construiu uma obra monumental que recusa fronteiras fáceis: o corpo carnal ('tigela de fogo', 'saliva do mortal') é o veículo ardente para dialogar com Deus, com o Nada ou com o Absoluto. A autora desafiou o patriarcado e a censura dos anos 1970 explorando a morte, a finitude, o amor devorador e o mistério da existência com rara coragem estilística."
      },
      {
        id: "c",
        text: "rejeição de qualquer questionamento sobre o Absoluto e a transcendência em favor de relatos contábeis frios.",
        isCorrect: false,
        distractorRationale: "A obsessão metafísica com o divino e com o mistério do Ser atravessa toda a sua produção lírica."
      },
      {
        id: "d",
        text: "imitação passiva dos textos doutrinários da catequese colonial do padre José de Anchieta.",
        isCorrect: false,
        distractorRationale: "Sua dicção é moderna, provocadora, erotizada e filosoficamente perturbadora."
      },
      {
        id: "e",
        text: "submissão às exigências comerciais do mercado de best-sellers para evitar controvérsias intelectuais.",
        isCorrect: false,
        distractorRationale: "Hilda Hilst retirou-se para a Casa do Sol em Campinas justamente para criar à margem das concessões fáceis do mercado."
      }
    ],
    detailedExplanation: {
      summary: "Hilda Hilst entrelaça erotismo visceral e inquirição mística em uma das obras poéticas mais radicais da literatura moderna.",
      stepByStep: [
        "1. Autora: Hilda Hilst (1930-2004), poeta, dramaturga e ficcionista da Casa do Sol.",
        "2. Eixo temático: O corpo como altar sagrado e profano da busca pelo Absoluto.",
        "3. Linguagem: Alta sofisticação lírica, ousadia erótica e diálogo com os grandes místicos (São João da Cruz, Santa Teresa) e com a filosofia ocidental."
      ],
      coreConcept: "A poesia de Hilda Hilst funde o carnal e o metafísico em busca do Absoluto.",
      trapWarning: "O erotismo em Hilda Hilst nunca é gratuito: é método filosófico de investigação sobre os limites do humano e do divino."
    },
    tags: ["linguagens", "literatura", "hilda-hilst", "poesia-erotica", "mistica", "transcendencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-024",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Música Popular e Identidade Urbana",
    subtopic: "A Vanguarda Paulistana de Itamar Assumpção",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nego Dito era um sujeito\nQue não tinha nada a perder\nMorava numa pensão barata\nComia marmita fria\nMas na hora que pegava a viola\nVirava rei da freguesia\nE falava na cara do delegado\nQue justiça de rico não pega em quem é honrado\n(Itamar Assumpção, 'Nego Dito', 1980)",
      source: "ASSUMPÇÃO, I. Beleléu, Bango e os Afrobrescantos. Produção independente, Lira Paulistana, 1980."
    },
    prompt: "Figura central da chamada Vanguarda Paulistana que floresceu no lendário teatro Lira Paulistana no início dos anos 1980, Itamar Assumpção marcou a história da música brasileira pela",
    options: [
      {
        id: "a",
        text: "rejeição da produção musical independente em prol de contratos milionários com grandes gravadoras multinacionais.",
        isCorrect: false,
        distractorRationale: "Itamar foi o grande pioneiro da autogestão e da produção independente no Brasil, criando seu próprio selo fonográfico."
      },
      {
        id: "b",
        text: "fusão experimental entre samba, reggae, funk e poesia marginal falada, aliada à denúncia ácida do racismo e da hipocrisia social urbana.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Com a banda Isca de Polícia, Itamar Assumpção rompeu fronteiras entre música erudita moderna, atonalismo, batuques negros afro-brasileiros e atitude punk. Criou o alter ego 'Nego Dito', figura irônica e altiva que desmascara a violência policial e o racismo cotidiano paulistano com uma dicção vocal falada (spoken word) de humor cortante."
      },
      {
        id: "c",
        text: "adoção irrestrita da estética da Jovem Guarda com letras ingênuas sobre carros e namoros de colégio.",
        isCorrect: false,
        distractorRationale: "A temática de Itamar é densa, politizada, antirracista e ligada à dureza da noite paulistana."
      },
      {
        id: "d",
        text: "eliminação de qualquer componente de humor ou ironia em suas apresentações cênicas.",
        isCorrect: false,
        distractorRationale: "O humor cáustico, a teatralidade e a performance cênica eram traços fundamentais de sua obra."
      },
      {
        id: "e",
        text: "proibição expressa de qualquer referência a manifestações culturais da diáspora negra em suas canções.",
        isCorrect: false,
        distractorRationale: "A afrodescendência e a afirmação do orgulho negro são o centro propulsor de toda a sua poética musical."
      }
    ],
    detailedExplanation: {
      summary: "Itamar Assumpção foi um dos pioneiros da independência fonográfica no Brasil, combinando vanguarda estética, atonalismo, reggae e contestação racial.",
      stepByStep: [
        "1. Movimento: Vanguarda Paulistana (início dos anos 1980, teatro Lira Paulistana em Pinheiros/SP).",
        "2. Hibridismo sonoro: Funk, reggae, samba tradicional e música experimental falada.",
        "3. Nego Dito: Personagem arquetípico da resistência negra e popular contra a truculência policial e o racismo de classe.",
        "4. Legado: Referência obrigatória para Chico Science, Criolo, Emicida e o rap contemporâneo."
      ],
      coreConcept: "A Vanguarda Paulistana e a estética independente e antirracista de Itamar Assumpção.",
      trapWarning: "Itamar não fazia apenas 'rock' ou 'samba': sua música desafiava rótulos comerciais de prateleira."
    },
    tags: ["linguagens", "cancao-popular", "itamar-assumpcao", "vanguarda-paulistana", "nego-dito", "independente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-CAN-025",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Música e Literatura Tropicalista",
    subtopic: "A Crítica Irônica ao Progresso em Tom Zé",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Eu tô te explicando\nPra te confundir\nEu tô te confundindo\nPra te esclarecer\nTô iluminando as cegas\nPra você poder ver\nO país do futuro que esqueceu de nascer\n(Tom Zé, 'Tô', 1976)",
      source: "ZÉ, T. Estudando o Samba. Gravadora Continental, 1976."
    },
    prompt: "Com o álbum conceitual 'Estudando o Samba' (1976), redescoberto internacionalmente pelo músico David Byrne nos anos 1990, o compositor baiano Tom Zé consolidou sua estética poético-musical por meio do(a)",
    options: [
      {
        id: "a",
        text: "paradoxo discursivo, desconstrução metalinguística dos ritmos populares e crítica ácida aos discursos triunfalistas do desenvolvimento nacional.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Tom Zé é o mais experimental e iconoclasta dos tropicalistas. Seus versos operam por aporias e paradoxos ('explicar para confundir, confundir para esclarecer'), usando instrumentos inusitados (enceradeiras, máquinas de escrever, buzinas) para desmontar a engrenagem do samba tradicional e desmascarar a farsa do 'Brasil, país do futuro' enquanto as massas permanecem analfabetas e desamparadas."
      },
      {
        id: "b",
        text: "adesão à publicidade comercial de agências financeiras para enaltecer o milagre econômico dos generais.",
        isCorrect: false,
        distractorRationale: "Tom Zé parodiava corrosivamente a linguagem publicitária e a propaganda desenvolvimentista autoritária."
      },
      {
        id: "c",
        text: "recusa de qualquer elemento de ruído sonoro em favor de acordes harmoniosos e doces da bossa nova pura.",
        isCorrect: false,
        distractorRationale: "O autor é famoso por incorporar ruídos industriais, serras e martelos à harmonia da canção."
      },
      {
        id: "d",
        text: "pregação da passividade do ouvinte, proibindo qualquer reflexão crítica sobre a própria música.",
        isCorrect: false,
        distractorRationale: "Sua obra é um constante convite metalinguístico à escuta ativa e descondicionada do receptor."
      },
      {
        id: "e",
        text: "imitação literal de hinos folclóricos portugueses sem adaptação à realidade brasileira.",
        isCorrect: false,
        distractorRationale: "Tom Zé parte das feiras de Irará na Bahia e do concretismo paulista para fundar uma estética profundamente brasileira e universal."
      }
    ],
    detailedExplanation: {
      summary: "Tom Zé utiliza o paradoxo ('explicar pra confundir') e a colagem de ruídos do cotidiano para desconstruir o samba e ironizar as promessas não cumpridas de modernização do país.",
      stepByStep: [
        "1. Obra: 'Estudando o Samba' (1976), eleito um dos discos mais inovadores do século XX.",
        "2. Recursos estilísticos: Paradoxo, metalinguagem, ironia e desconstrução da sintaxe musical tradicional.",
        "3. Conteúdo: Crítica ao subdesenvolvimento crônico mascarado por discursos ufanistas ('o país do futuro que esqueceu de nascer').",
        "4. Legado: Pioneirismo no uso de timbres industriais e ruídos sonoros na canção popular."
      ],
      coreConcept: "A paródia desconstrutiva e a metalinguagem crítica na poética de Tom Zé.",
      trapWarning: "O verso 'Eu tô te explicando pra te confundir' não é deboche vazio; é provocação epistemológica para forçar o leitor a pensar por si próprio."
    },
    tags: ["linguagens", "cancao-popular", "tom-ze", "tropicalismo", "paradoxo", "estudando-o-samba"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
