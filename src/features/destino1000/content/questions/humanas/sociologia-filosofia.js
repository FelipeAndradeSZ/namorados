export const QUESTIONS_SOCIOLOGIA_FILOSOFIA = [
  {
    id: "HUM-SOC-001",
    area: "humanas",
    competence: 1,
    skill: 1,
    topic: "Sociologia",
    subtopic: "Trabalho e Sociedade",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Para Karl Marx, o sistema capitalista caracteriza-se pela separação entre os trabalhadores e os meios de produção. Nesse processo, o trabalhador vende sua força de trabalho em troca de um salário, enquanto o capitalista se apropria de uma parcela do valor gerado por esse trabalho, não repassada como remuneração.",
      source: "Original - Baseado na obra O Capital"
    },
    prompt: "O conceito sociológico formulado por Marx para designar essa apropriação não remunerada do trabalho excedente pelo capitalista é a:",
    options: [
      { id: "a", text: "luta de classes, que descreve o conflito aberto entre burgueses e operários.", isCorrect: false, distractorRationale: "Luta de classes é a dinâmica social geral de conflito, não o conceito de roubo do trabalho excedente." },
      { id: "b", text: "alienação, que significa a perda do controle do trabalhador sobre a máquina.", isCorrect: false, distractorRationale: "Alienação refere-se ao estranhamento do trabalhador com o produto, mas o conceito exato de apropriação do excedente é outro." },
      { id: "c", text: "mais-valia, que representa a diferença entre o valor produzido e o salário pago.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "fetichismo da mercadoria, que oculta as relações sociais de produção por trás das coisas.", isCorrect: false, distractorRationale: "Fetichismo explica como as mercadorias ganham 'vida própria' apagando as relações humanas de sua criação." },
      { id: "e", text: "ideologia, que legitima a desigualdade como algo natural e inevitável.", isCorrect: false, distractorRationale: "Ideologia é o sistema de falsas representações, não o mecanismo econômico em si." }
    ],
    detailedExplanation: {
      summary: "A mais-valia é o conceito-chave para explicar o lucro e a exploração capitalista em Marx.",
      stepByStep: [
        "O trabalhador produz um valor X durante sua jornada.",
        "O salário pago a ele equivale a Y, onde Y é menor que X.",
        "A diferença (X - Y) é o trabalho não pago, apropriado pelo patrão, chamado de mais-valia."
      ],
      coreConcept: "Mais-valia na teoria marxista.",
      trapWarning: "Cuidado para não confundir os vários conceitos marxistas (alienação, fetiche, ideologia); cada um tem aplicação específica."
    },
    commonTraps: ["Confundir com alienação"],
    tags: ["Karl Marx", "Mais-valia", "Trabalho"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-FIL-001",
    area: "humanas",
    competence: 1,
    skill: 2,
    topic: "Filosofia",
    subtopic: "Filosofia Antiga",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No famoso Mito da Caverna, o filósofo Platão descreve prisioneiros acorrentados desde a infância no fundo de uma caverna, vendo apenas as sombras de objetos projetadas por uma fogueira na parede. Para eles, as sombras constituem a única e verdadeira realidade.",
      source: "Original - Baseado na obra A República, Platão"
    },
    prompt: "Alegoricamente, o Mito da Caverna de Platão ilustra a tese central de sua teoria do conhecimento, que estabelece:",
    options: [
      { id: "a", text: "a validade exclusiva da experiência sensorial (os sentidos) para o alcance da verdade científica.", isCorrect: false, distractorRationale: "Para Platão, os sentidos levam ao engano (sombras), não à verdade." },
      { id: "b", text: "a dualidade entre o mundo sensível (ilusório) e o mundo inteligível (das ideias verdadeiras).", isCorrect: true, distractorRationale: null },
      { id: "c", text: "a impossibilidade de o ser humano atingir o conhecimento absoluto devido à falibilidade da razão.", isCorrect: false, distractorRationale: "Platão acreditava ser possível atingir o conhecimento absoluto através da razão (mundo das ideias)." },
      { id: "d", text: "a necessidade de intervenção divina e revelação religiosa para iluminar a ignorância humana.", isCorrect: false, distractorRationale: "O conhecimento para Platão exige esforço racional e dialético, não apenas iluminação divina dogmática." },
      { id: "e", text: "a equivalência moral entre diferentes perspectivas, demonstrando que toda verdade é subjetiva.", isCorrect: false, distractorRationale: "Platão se opunha ao relativismo dos sofistas; ele defendia uma verdade objetiva (Idéia do Bem)." }
    ],
    detailedExplanation: {
      summary: "A alegoria da caverna diferencia a ignorância das percepções sensoriais da verdade racional.",
      stepByStep: [
        "As sombras na caverna representam o mundo sensível (opinião/doxa).",
        "A saída da caverna rumo à luz do sol representa a ascensão ao mundo inteligível (ciência/episteme).",
        "O sol representa a Ideia do Bem, a mais alta forma de realidade."
      ],
      coreConcept: "Dualismo platônico (mundo inteligível vs. mundo sensível).",
      trapWarning: "Lembre-se que Platão desconfiava dos sentidos e exaltava a razão. O empirismo é inverso a Platão."
    },
    commonTraps: ["Atribuir empirismo a Platão", "Interpretações puramente místicas"],
    tags: ["Platão", "Mito da Caverna", "Teoria do Conhecimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-SOC-002",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Sociologia",
    subtopic: "Teoria Sociológica Clássica",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Para Émile Durkheim, o objeto de estudo da Sociologia deveria ser os 'fatos sociais'. Ele os definiu como maneiras de agir, pensar e sentir exteriores ao indivíduo, que exercem um poder de coerção sobre ele. Modas, idiomas e regras morais são exemplos dessas forças.",
      source: "Original - Baseado na obra As Regras do Método Sociológico"
    },
    prompt: "De acordo com a concepção de Durkheim, uma característica fundamental dos fatos sociais é a sua:",
    options: [
      { id: "a", text: "origem biológica intrínseca à evolução natural das sociedades.", isCorrect: false, distractorRationale: "Durkheim separava rigorosamente o biológico do social; o fato social é cultural/coletivo." },
      { id: "b", text: "dependência das escolhas individuais e psicológicas de cada pessoa.", isCorrect: false, distractorRationale: "O fato social é exterior ao indivíduo, logo, não depende puramente das escolhas individuais." },
      { id: "c", text: "capacidade de se impor aos indivíduos independentemente de suas vontades.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "ausência de regularidade, tornando-os fenômenos imprevisíveis na análise.", isCorrect: false, distractorRationale: "Os fatos sociais apresentam regularidade e generalidade, repetindo-se na maioria dos membros do grupo." },
      { id: "e", text: "natureza puramente econômica, determinando todas as demais instâncias sociais.", isCorrect: false, distractorRationale: "O determinismo econômico é uma característica de Marx, não de Durkheim." }
    ],
    detailedExplanation: {
      summary: "Para Durkheim, o fato social possui três características: exterioridade, generalidade e coercitividade.",
      stepByStep: [
        "Durkheim busca dar um objeto de estudo científico à Sociologia.",
        "Ele define os Fatos Sociais, que existem fora das consciências individuais (exterioridade).",
        "Esses fatos exercem pressão para conformar o comportamento humano às normas sociais (coercitividade)."
      ],
      coreConcept: "Fatos sociais e coercitividade em Durkheim.",
      trapWarning: "Cuidado para não confundir a teoria da ação social (Max Weber), mais focada no indivíduo, com o fato social de Durkheim (focado na coerção coletiva)."
    },
    commonTraps: ["Confundir Weber com Durkheim", "Reduzir sociologia a psicologia"],
    tags: ["Émile Durkheim", "Fato Social", "Sociologia Clássica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-FIL-002",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Filosofia",
    subtopic: "Filosofia Política Moderna",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "text",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na obra 'O Leviatã', Thomas Hobbes defende que, no estado de natureza, os seres humanos vivem em uma guerra de 'todos contra todos' devido ao seu instinto de autopreservação e à competição por recursos limitados. A vida, segundo ele, seria 'solitária, pobre, sórdida, embrutecida e curta'.",
      source: "Original - Thomas Hobbes"
    },
    prompt: "Para superar essa condição de guerra generalizada no estado de natureza, Hobbes argumenta que é necessário:",
    options: [
      { id: "a", text: "abdicar das paixões humanas em favor da razão iluminista e do amor cristão ao próximo.", isCorrect: false, distractorRationale: "Hobbes é pragmático e materialista, não confia no amor ao próximo para garantir a paz." },
      { id: "b", text: "estabelecer um pacto social em que os indivíduos transferem seus direitos a um soberano absoluto.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "instituir um sistema democrático direto em que todas as decisões sejam tomadas em praça pública.", isCorrect: false, distractorRationale: "Hobbes defende o absolutismo, não a democracia." },
      { id: "d", text: "limitar o poder do Estado através de uma constituição que proteja o direito natural à propriedade privada.", isCorrect: false, distractorRationale: "Essa é a visão de John Locke (liberalismo), não de Hobbes." },
      { id: "e", text: "distribuir igualitariamente a riqueza produzida, eliminando a escassez que gera conflitos.", isCorrect: false, distractorRationale: "Ideia anacrônica, de caráter socialista/marxista, não aplicável ao pensamento hobbesiano." }
    ],
    detailedExplanation: {
      summary: "Hobbes justifica o poder absoluto do Estado como o único meio de evitar a morte no estado de natureza.",
      stepByStep: [
        "Hobbes é um contratualista: acredita que o Estado surge de um acordo (pacto social).",
        "O estado de natureza é de guerra e medo constante.",
        "A solução é que todos entreguem seu direito de autodefesa a uma autoridade central forte (o Leviatã), que garantirá a paz e a segurança pela força."
      ],
      coreConcept: "Contratualismo absolutista de Thomas Hobbes.",
      trapWarning: "Lembre-se da diferença entre os contratualistas: Hobbes (absolutismo), Locke (liberalismo) e Rousseau (democracia direta)."
    },
    commonTraps: ["Confundir Hobbes com Locke", "Confundir Hobbes com Rousseau"],
    tags: ["Thomas Hobbes", "Estado de Natureza", "Contratualismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-SOC-003",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Sociologia Contemporânea",
    subtopic: "Indústria Cultural",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Theodor Adorno e Max Horkheimer, pensadores da Escola de Frankfurt, cunharam o termo 'Indústria Cultural' no século XX. Eles analisaram como os meios de comunicação de massa transformaram a arte e a cultura em mercadorias produzidas em larga escala para consumo rápido e irrefletido.",
      source: "Original"
    },
    prompt: "De acordo com o conceito de Indústria Cultural formulado por Adorno e Horkheimer, a cultura de massa tem a função social de:",
    options: [
      { id: "a", text: "promover o esclarecimento autônomo das massas trabalhadoras contra o status quo.", isCorrect: false, distractorRationale: "A Indústria Cultural faz exatamente o oposto: aliena e pacifica as massas." },
      { id: "b", text: "valorizar a estética da arte folclórica regional perante o avanço da tecnologia urbana.", isCorrect: false, distractorRationale: "A Indústria Cultural padroniza a cultura, destruindo as particularidades locais e autênticas." },
      { id: "c", text: "padronizar o gosto e o pensamento dos indivíduos, garantindo a reprodução do sistema capitalista.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "democratizar o acesso a grandes obras primas da humanidade sem descaracterizar sua complexidade.", isCorrect: false, distractorRationale: "As obras são simplificadas e mastigadas, perdendo sua complexidade (massificação)." },
      { id: "e", text: "fomentar movimentos de vanguarda artística que rompem com a lógica comercial vigente.", isCorrect: false, distractorRationale: "A vanguarda artística é marginalizada pela Indústria Cultural, que busca o lucro fácil." }
    ],
    detailedExplanation: {
      summary: "A Indústria Cultural transforma a cultura em produto para apaziguar o senso crítico das massas.",
      stepByStep: [
        "A Escola de Frankfurt faz uma crítica marxista e psicanalítica ao capitalismo avançado.",
        "A Indústria Cultural cria produtos (música, filmes, rádio) previsíveis e padronizados.",
        "O objetivo principal, além do lucro, é a conformação ideológica: manter o indivíduo distraído e alienado da exploração."
      ],
      coreConcept: "Indústria Cultural e alienação (Escola de Frankfurt).",
      trapWarning: "Cuidado com o uso da palavra 'democratização'; para Adorno e Horkheimer, a massificação não era algo positivo e democrático, mas manipulação."
    },
    commonTraps: ["Confundir massificação com democratização"],
    tags: ["Escola de Frankfurt", "Indústria Cultural", "Alienação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-SOC-004",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Sociologia",
    subtopic: "Ação Social em Max Weber",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Para Max Weber, a Sociologia é uma ciência compreensiva que visa entender o sentido subjetivo que os indivíduos atribuem às suas próprias ações. A 'ação social' ocorre sempre que o indivíduo orienta seu comportamento considerando a presença ou expectativa de conduta de outros sujeitos.",
      source: "Max Weber, Economia e Sociedade. Brasília: Ed. UnB (adaptado)."
    },
    prompt: "Quando um estudante de Medicina passa longas noites revisando questões e resolvendo simulados com o objetivo exclusivo de ser aprovado no vestibular de alta concorrência, sua conduta exemplifica o tipo weberiano de ação:",
    options: [
      { id: "a", text: "social racional com relação a fins, orientada pelo cálculo metódico dos meios para atingir um objetivo prático deliberado.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "tradicional, ditada unicamente por hábitos e costumes herdados de ancestrais pré-modernos.", isCorrect: false, distractorRationale: "O vestibular e a rotina planejada são escolhas modernas orientadas por metas, não costumes arcaicos imutáveis." },
      { id: "c", text: "afetiva, movida por impulsos emocionais imediatos e descontrolados de raiva ou euforia passageira.", isCorrect: false, distractorRationale: "A preparação metódica baseia-se em autocontrole e planejamento, oposto de passionalidade irrefletida." },
      { id: "d", text: "social racional com relação a valores, quando o indivíduo age sem se importar com qualquer resultado ou utilidade futura.", isCorrect: false, distractorRationale: "Na ação com relação a valores não há cálculo pragmático de fins; aqui, o fim declarado é a aprovação no exame." },
      { id: "e", text: "não social patológica, caracterizada pela ausência de qualquer relação de sentido com a realidade envolvente.", isCorrect: false, distractorRationale: "A conduta tem sentido social evidente e está plenamente sintonizada com as regras de seleção universitária." }
    ],
    detailedExplanation: {
      summary: "A ação racional referente a fins orienta-se pela escolha consciente dos meios mais adequados para atingir um objetivo específico.",
      stepByStep: [
        "A tipologia weberiana distingue quatro tipos de ação: tradicional, afetiva, racional referente a valores e racional referente a fins.",
        "A ação racional com relação a fins (Zweckrationalität) avalia custos, meios e consequências para alcançar um objetivo pragmático previamente fixado.",
        "O estudo sistemático e o treinamento focado na aprovação universitária são exemplos clássicos dessa racionalidade instrumental e calculista."
      ],
      coreConcept: "Tipologia da Ação Social em Max Weber",
      trapWarning: "Cuidado: na ação racional com relação a valores, o agente age pelo dever moral intrínseco sem importar as consequências; na ação por fins, o resultado é a meta norteadora."
    },
    commonTraps: ["confundir ação por fins com ação por valores", "ignorar a intencionalidade do cálculo"],
    tags: ["weber", "acao social", "racionalidade", "sociologia compreensiva"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-FIL-003",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Filosofia",
    subtopic: "Ética Deontológica de Immanuel Kant",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que ela se torne uma lei universal [...]. Age de tal maneira que uses a humanidade, tanto na tua pessoa como na pessoa de qualquer outro, sempre e simultaneamente como um fim e nunca simplesmente como um meio.",
      source: "Immanuel Kant, Fundamentação da Metafísica dos Costumes (1785)."
    },
    prompt: "A formulação kantiana do imperativo categórico estabelece que a moralidade de uma ação fundamenta-se na:",
    options: [
      { id: "a", text: "obediência ao dever racional autônomo, recusando a instrumentalização de seres humanos e o cálculo utilitarista das consequências.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "busca pragmática do prazer sensorial imediato e na maximização do bem-estar egoísta individual.", isCorrect: false, distractorRationale: "Isso define o hedonismo egoísta, doutrina totalmente oposta ao rigor ético deontológico de Kant." },
      { id: "c", text: "submissão incondicional aos dogmas religiosos impostos por autoridades eclesiásticas medievais.", isCorrect: false, distractorRationale: "Para Kant, a moral é autônoma e fruto da razão prática universal do próprio sujeito, não de imposição externa (heteronomia)." },
      { id: "d", text: "aceitação da mentira estratégica como instrumento legítimo sempre que produzir benefícios econômicos.", isCorrect: false, distractorRationale: "Kant rechaça frontalmente a mentira, pois se universalizada, destruiria a própria possibilidade de promessas e confiança mútua." },
      { id: "e", text: "relativização dos preceitos morais conforme a classe social ou a conveniência política momentânea.", isCorrect: false, distractorRationale: "O imperativo de Kant é categórico (universal e incondicional), nunca relativo." }
    ],
    detailedExplanation: {
      summary: "A ética do dever (deontologia) de Kant afirma que a dignidade humana não tem preço nem utilidade instrumental; cada pessoa é um fim em si mesma.",
      stepByStep: [
        "Kant rejeita éticas consequencialistas (onde os fins justificam os meios).",
        "O imperativo categórico exige que toda regra de conduta passe pelo teste da universalização: 'e se todos fizessem o mesmo?'.",
        "A segunda formulação proíbe usar pessoas como meros instrumentos para interesses particulares; o ser humano tem dignidade ontológica."
      ],
      coreConcept: "O Imperativo Categórico e a Ética do Dever em Kant",
      trapWarning: "Kant distingue imperativo hipotético ('se quer X, faça Y') de categórico ('faça o dever incondicionalmente porque é racional')."
    },
    commonTraps: ["confundir kantismo com utilitarismo", "achar que Kant defende a moral baseada em sentimentos"],
    tags: ["kant", "imperativo categorico", "etica", "dever"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-SOC-005",
    area: "humanas",
    competence: 5,
    skill: 25,
    topic: "Sociologia Contemporânea",
    subtopic: "Zygmunt Bauman e a Modernidade Líquida",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na contemporaneidade, as instituições outrora duradouras da modernidade sólida — como os empregos vitalícios, os sindicatos fortes, as famílias tradicionais e os projetos coletivos de longo prazo — deram lugar a vínculos transitórios, fluidos e precários. As relações interpessoais tornaram-se mercadorias descartáveis regidas pela lógica do consumo.",
      source: "Zygmunt Bauman, Modernidade Líquida. Rio de Janeiro: Zahar (adaptado)."
    },
    prompt: "Segundo a reflexão sociológica de Zygmunt Bauman, a metáfora da 'liquidez' traduz uma sociedade em que:",
    options: [
      { id: "a", text: "a instabilidade dos vínculos humanos e o individualismo geram incerteza e fragilidade nas relações afetivas e profissionais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o Estado de bem-estar social garante segurança perpétua contra as oscilações do mercado de capitais.", isCorrect: false, distractorRationale: "Bauman mostra justamente o desmonte do Estado de bem-estar social e a terceirização dos riscos para o indivíduo." },
      { id: "c", text: "as identidades sociais tornaram-se rígidas e padronizadas pelas corporações feudais de ofício.", isCorrect: false, distractorRationale: "Na modernidade líquida, as identidades são flexíveis, mutáveis e voláteis, oposto da rigidez corporativa." },
      { id: "d", text: "a tecnologia de satélites garantiu a erradicação de qualquer forma de solidão ou angústia existencial.", isCorrect: false, distractorRationale: "Para Bauman, as redes virtuais geram conexões fáceis de desconectar, ampliando a solidão e a angústia de fundo." },
      { id: "e", text: "a fidelidade irrestrita às tradições comunitárias sobrepõe-se integralmente à liberdade de consumo individual.", isCorrect: false, distractorRationale: "O consumo desenfreado e o culto ao presente suplantam qualquer lealdade comunitária perene." }
    ],
    detailedExplanation: {
      summary: "Para Bauman, os líquidos não mantêm forma por muito tempo; assim são os laços afetivos e profissionais na sociedade contemporânea.",
      stepByStep: [
        "A modernidade sólida era marcada por estabilidade, planos de carreira de 40 anos e casamentos indissolúveis.",
        "A modernidade líquida é marcada por desregulamentação, obsolescência programada e mercantilização dos afetos ('amor líquido').",
        "O indivíduo é responsabilizado solitariamente pelos seus fracassos em um mundo onde nada foi feito para durar."
      ],
      coreConcept: "Modernidade Líquida e Fragilização dos Vínculos Sociais",
      trapWarning: "Conexões em redes sociais para Bauman não equivalem a relacionamentos profundos; elas podem ser desfeitas com um clique."
    },
    commonTraps: ["considerar liquidez como sinônimo de liberdade plena sem angústia", "ignorar a crítica ao consumismo"],
    tags: ["bauman", "modernidade liquida", "amor liquido", "individualismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-FIL-004",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Filosofia Contemporânea",
    subtopic: "Michel Foucault e o Biopoder",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O panóptico de Jeremy Bentham é a figura arquitetônica dessa composição. O princípio é conhecido: na periferia, uma construção em anel; no centro, uma torre [...]. O panóptico deve ser compreendido como um modelo generalizável de funcionamento; uma maneira de definir as relações de poder com a vida cotidiana dos homens.",
      source: "Michel Foucault, Vigiar e Punir: Nascimento da Prisão. Petrópolis: Vozes (adaptado)."
    },
    prompt: "Na análise foucaultiana sobre as tecnologias de poder na modernidade, o dispositivo panóptico exemplifica uma forma de poder disciplinar que opera por meio da:",
    options: [
      { id: "a", text: "vigilância invisível contínua, que induz no indivíduo um estado consciente e permanente de docilização e autocontrole.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "violência física pública e desmedida exercida diretamente pelo monarca em praça aberta.", isCorrect: false, distractorRationale: "Foucault explica que o poder disciplinar substituiu exatamente o antigo suplício público medieval pela disciplina invisível." },
      { id: "c", text: "concessão irrestrita de autonomia libertária a presidiários, estudantes e operários fabris.", isCorrect: false, distractorRationale: "O panóptico adestra e normaliza corpos, sem outorgar soberania libertária aos internados." },
      { id: "d", text: "ausência absoluta de regras higiênicas e corporais no interior das instituições de confinamento.", isCorrect: false, distractorRationale: "A disciplina foucaultiana é a minuciosa normatização de gestos, horários, posturas e higiene." },
      { id: "e", text: "extinção de qualquer forma de autoridade institucional nos hospitais, quartéis e escolas.", isCorrect: false, distractorRationale: "As instituições disciplinares são os nós difusos onde essa autoridade se prolifera e se capilariza." }
    ],
    detailedExplanation: {
      summary: "O panóptico faz o vigiado acreditar que está sob vigilância o tempo todo, introjetando a disciplina em seu próprio comportamento.",
      stepByStep: [
        "Na torre central do panóptico, o vigia vê todas as celas sem poder ser visto.",
        "Como os prisioneiros (ou estudantes, ou operários) não sabem em que momento exato estão sendo observados, comportam-se como se estivessem permanentemente vigiados.",
        "Foucault demonstra como o poder moderno não precisa de violência física direta; ele molda 'corpos dóceis' por meio do olhar normalizador e das instituições disciplinares."
      ],
      coreConcept: "Poder Disciplinar, Microfísica do Poder e o Panóptico",
      trapWarning: "Para Foucault, o poder não está concentrado apenas no Estado ou no governante; ele é capilar e circula em todas as relações sociais."
    },
    commonTraps: ["achar que poder exige violência física bruta", "desconhecer a interiorização da vigilância"],
    tags: ["foucault", "panoptico", "biopoder", "vigiar e punir"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-FIL-005",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Filosofia Política",
    subtopic: "Hannah Arendt e a Banalidade do Mal",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao acompanhar o julgamento do oficial nazista Adolf Eichmann em Jerusalém (1961), a filósofa Hannah Arendt deparou-se não com um monstro sádico possuído por ódio desmedido, mas com um burocrata medíocre, incapaz de pensar criticamente pelas próprias faculdades mentais, cuja defesa consistia unicamente em afirmar que estava 'apenas cumprindo ordens e respeitando a lei'.",
      source: "Hannah Arendt, Eichmann em Jerusalém: Um Relato sobre a Banalidade do Mal (adaptado)."
    },
    prompt: "O conceito de 'banalidade do mal' formulado por Hannah Arendt adverte a humanidade contemporânea sobre o perigo de regimes e sistemas em que:",
    options: [
      { id: "a", text: "a renúncia à reflexão crítica individual e o cumprimento cego de ordens burocráticas transformam pessoas comuns em agentes de atrocidades sistemáticas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o mal é praticado exclusivamente por indivíduos acometidos por patologias mentais congênitas incuráveis.", isCorrect: false, distractorRationale: "Arendt constatou exatamente o oposto: Eichmann era clinicamente normal, e esse era o fato mais aterrador." },
      { id: "c", text: "a anarquia política total impede a criação de qualquer estrutura estatal organizada de administração.", isCorrect: false, distractorRationale: "O mal totalitário foi gerido por um Estado burocrático e hiperorganizado, não por anarquia." },
      { id: "d", text: "a ampla liberdade de imprensa e o debate filosófico público incitam diretamente o assassinato em massa.", isCorrect: false, distractorRationale: "O debate e o pensamento crítico são exatamente os antídotos contra a banalização do mal." },
      { id: "e", text: "o amor cristão incondicional é institucionalizado compulsoriamente como código de trânsito.", isCorrect: false, distractorRationale: "Sem nexo com a teoria política arendtiana sobre o totalitarismo." }
    ],
    detailedExplanation: {
      summary: "Arendt demonstrou que o mal mais devastador pode ser praticado por pessoas comuns que abdicaram da capacidade reflexiva de pensar.",
      stepByStep: [
        "A tradição filosófica ocidental supunha que o mal radical derivava de motivações demoníacas ou impulsos malignos conscientes.",
        "Arendt identificou que o genocídio burocrático moderno foi executado por funcionários que trocaram o julgamento moral pelo cumprimento de metas e obediência a ordens hierárquicas.",
        "A 'banalidade do mal' decorre da alienação do pensamento: quando o indivíduo deixa de refletir sobre as implicações humanas dos seus atos."
      ],
      coreConcept: "A Banalidade do Mal e a Ausência de Pensamento em Hannah Arendt",
      trapWarning: "'Banal' aqui não significa 'comum' ou 'pouco importante'; significa que sua raiz foi a superficialidade do pensamento de burocratas acríticos."
    },
    commonTraps: ["achar que Arendt justificou ou minimizou o nazismo", "confundir banalidade com insignificância"],
    tags: ["hannah arendt", "banalidade do mal", "totalitarismo", "etica politica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

