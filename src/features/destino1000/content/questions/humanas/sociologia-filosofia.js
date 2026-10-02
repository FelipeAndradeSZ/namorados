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
  },
  {
    id: "HUM-SOC-006",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Sociologia",
    subtopic: "Pierre Bourdieu e a Reprodução Social",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em suas investigações sobre o sistema educacional francês, Pierre Bourdieu e Jean-Claude Passeron demonstraram que a instituição escolar, sob a aparência de neutralidade e de avaliação puramente meritocrática dos talentos individuais, tende a valorizar e a exigir de todos os alunos as posturas corporais, o domínio linguístico erudito e as referências simbólicas que são transmitidas espontaneamente pelas famílias das classes de maior prestígio social.",
      source: "Pierre Bourdieu e Jean-Claude Passeron, A Reprodução: Elementos para uma Teoria do Sistema de Ensino (adaptado)."
    },
    prompt: "Segundo a sociologia crítica de Pierre Bourdieu, a dinâmica escolar analisada no texto atua na sociedade capitalista como:",
    options: [
      { id: "a", text: "um mecanismo de violência simbólica que converte o capital cultural herdado em suposto mérito individual, legitimando a reprodução das desigualdades.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "um instrumento neutro e infalível de ascensão social imediata e igualitária para todos os estudantes pertencentes aos grupos vulneráveis.", isCorrect: false, distractorRationale: "Bourdieu critica exatamente o mito da escola como elevador social automático e neutro." },
      { id: "c", text: "um espaço autônomo e isolado que elimina integralmente a influência do ambiente familiar no rendimento acadêmico dos jovens.", isCorrect: false, distractorRationale: "O autor demonstra que a bagagem familiar (capital cultural e habitus) é decisiva para o sucesso escolar." },
      { id: "d", text: "uma corporação medieval voltada prioritariamente ao treinamento prático de ofícios braçais manuais.", isCorrect: false, distractorRationale: "O foco da crítica de Bourdieu recai sobre a escola republicana e o sistema universitário contemporâneo." },
      { id: "e", text: "um ambiente imune a qualquer tipo de hierarquização simbólica ou classificação de competências.", isCorrect: false, distractorRationale: "A escola opera permanentemente mediante mecanismos de veredito e classificação simbólica." }
    ],
    detailedExplanation: {
      summary: "Bourdieu demonstrou que a escola trata como iguais estudantes que são socialmente desiguais, recompensando o capital cultural transmitido pela família burguesa.",
      stepByStep: [
        "O conceito de 'capital cultural' abrange o domínio da linguagem formal, o repertório artístico e os hábitos intelectuais herdados.",
        "A escola exige de todos um padrão cultural que apenas as classes dominantes transmitem no ambiente doméstico.",
        "Ao premiar os alunos que já possuem esse capital prévio como 'mais inteligentes' ou 'esforçados', a escola pratica 'violência simbólica', consagrando o privilégio de classe como mérito acadêmico legítimo."
      ],
      coreConcept: "Capital Cultural, Violência Simbólica e Reprodução Social em Bourdieu",
      trapWarning: "Atenção: Bourdieu não defende que os alunos pobres sejam incapazes, mas denuncia que o critério de avaliação da escola não é neutro."
    },
    commonTraps: ["confundir capital cultural com capital economico direto", "achar que a teoria defende a meritocracia escolar"],
    tags: ["pierre bourdieu", "capital cultural", "violencia simbolica", "sociologia da educacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-FIL-006",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Filosofia Política",
    subtopic: "Michel Foucault: Sociedade Disciplinar e Panóptico",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao analisar a arquitetura do 'Panóptico' idealizado pelo jurista Jeremy Bentham no século XVIII — uma torre central de observação cercada por celas periféricas retroiluminadas —, o filósofo Michel Foucault observa que o efeito principal dessa disposição é induzir no detento um estado consciente e permanente de visibilidade, que assegura o funcionamento automático do poder. Faz-se com que a vigilância seja permanente em seus efeitos, mesmo que descontínua em sua ação.",
      source: "Michel Foucault, Vigiar e Punir: Nascimento da Prisão (adaptado)."
    },
    prompt: "Na perspectiva foucaultiana, o dispositivo disciplinar do panóptico exemplifica uma mutação histórica crucial na mecânica do poder moderno, caracterizada por:",
    options: [
      { id: "a", text: "substituir os suplícios físicos espetaculares pela internalização da disciplina e pelo controle constante dos corpos e condutas dos indivíduos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "extinguir qualquer intervenção do Estado ou de instituições hierárquicas na organização da vida social.", isCorrect: false, distractorRationale: "O poder disciplinar capilarizou as instituições (hospitais, escolas, quartéis, fábricas), expandindo a vigilância." },
      { id: "c", text: "restringir o poder punitivo unicamente a cerimônias religiosas e condenações post-mortem.", isCorrect: false, distractorRationale: "A disciplina foucaultiana é imanente, técnica, científica e laica sobre o corpo vivo dos indivíduos." },
      { id: "d", text: "promover a emancipação anárquica da sociedade contra todas as regras institucionais de convivência.", isCorrect: false, distractorRationale: "Foucault explica o adestramento e a docilização dos corpos, não uma emancipação anárquica." },
      { id: "e", text: "dispensar qualquer tipo de arquitetura funcional ou divisão espacial nos estabelecimentos públicos.", isCorrect: false, distractorRationale: "A arquitetura e a ordenação espacial são elementos essenciais da tecnologia disciplinar." }
    ],
    detailedExplanation: {
      summary: "Foucault mostra que a modernidade substituiu a violência física do monarca pela microfísica disciplinar dos corpos e da vigilância internalizada.",
      stepByStep: [
        "No Antigo Regime, o poder soberano afirmava-se pelo suplício sangrento e teatral no cadafalso.",
        "A modernidade industrial desenvolve a 'sociedade disciplinar', na qual escolas, quartéis, prisões e fábricas adestram os corpos úteis e dóceis.",
        "O modelo panóptico torna o indivíduo o princípio de sua própria sujeição, pois, ao saber que pode estar sendo visto a qualquer momento, ele mesmo fiscaliza seu comportamento."
      ],
      coreConcept: "Biopolítica, Microfísica do Poder e Sociedade Disciplinar em Foucault",
      trapWarning: "O poder em Foucault não reside em um único ponto ou soberano; ele é capilar, relacional e opera em micropoderes institucionais."
    },
    commonTraps: ["achar que o panoptico serve apenas para prisoes", "confundir poder disciplinar com tirania fisica direta"],
    tags: ["michel foucault", "panoptico", "sociedade disciplinar", "poder e vigilancia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-SOC-007",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Sociologia",
    subtopic: "Zygmunt Bauman e a Modernidade Líquida",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os fluidos se movem facilmente. Eles 'fluem', 'escorrem', 'esvaem-se', 'respingam', transbordam, vazam, inundam. Ao contrário dos sólidos, não são facilmente contidos: contornam obstáculos, perfuram barreiras e infiltram-se nas menores frestas. O derretimento dos sólidos da modernidade clássica — como os compromissos comunitários duradouros, a estabilidade profissional de longo prazo e as instituições de bem-estar social estáveis — inaugurou uma era em que tudo é temporário, volátil e customizado para consumo imediato.",
      source: "Zygmunt Bauman, Modernidade Líquida (adaptado)."
    },
    prompt: "A metáfora sociológica da 'liquidez' proposta por Zygmunt Bauman diagnostica que, no contexto social contemporâneo:",
    options: [
      { id: "a", text: "os vínculos afetivos, profissionais e identitários tornam-se frágeis, marcados pela transitoriedade e pela lógica mercantil do descarte veloz.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "as instituições políticas alcançaram estabilidade perene, blindando a cidadania contra as oscilações do mercado financeiro.", isCorrect: false, distractorRationale: "Bauman argumenta o oposto: a política perdeu o controle sobre a fluidez econômica global." },
      { id: "c", text: "a solidariedade de classe atingiu seu ápice histórico, unificando a classe trabalhadora em greves gerais permanentes.", isCorrect: false, distractorRationale: "A modernidade líquida gera individualismo extremado e enfraquecimento das ações coletivas de classe." },
      { id: "d", text: "os indivíduos recusam integralmente a utilização de ferramentas digitais e o consumo de bens materiais de tecnologia.", isCorrect: false, distractorRationale: "O consumo desenfreado e as conexões virtuais efêmeras são a própria marca da sociedade líquida." },
      { id: "e", text: "as tradições comunitárias ancestrais voltaram a ser a norma inquestionável do comportamento urbano moderno.", isCorrect: false, distractorRationale: "As tradições sólidas foram justamente dissolvidas pela lógica da volatilidade contemporânea." }
    ],
    detailedExplanation: {
      summary: "Bauman cunhou o termo 'Modernidade Líquida' para retratar a era da incerteza, da fragilidade das relações humanas e do hiperindividualismo consumista.",
      stepByStep: [
        "A fase 'sólida' da modernidade fundava-se na durabilidade: casamentos para toda a vida, carreiras lineares, engajamentos sindicais duradouros.",
        "A fase 'líquida' transforma tudo em produtos descartáveis: as relações viram conexões substituíveis com um clique, e os cidadãos transformam-se em meros consumidores.",
        "Essa ausência de certezas institucionais gera insegurança existencial, angústia e sensação de desamparo individual."
      ],
      coreConcept: "A Condição da Modernidade Líquida e Fragilização dos Laços Sociais",
      trapWarning: "Lembre-se de que para Bauman a palavra 'líquido' simboliza ausência de forma fixa, volatilidade e rápida adaptabilidade ao mercado."
    },
    commonTraps: ["pensar que liquidez se refere a agua ou saneamento", "confundir liberdade de escolha com seguranca social"],
    tags: ["zygmunt bauman", "modernidade liquida", "amor liquido", "consumo e individualismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-FIL-007",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Filosofia Política",
    subtopic: "Jürgen Habermas: Razão Comunicativa e Esfera Pública",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O agir comunicativo distingue-se fundamentalmente do agir estratégico ou instrumental. Enquanto este último visa à eficiência técnica e à dominação do outro mediante o cálculo egoísta de meios e fins, o agir comunicativo orienta-se para a obtenção do entendimento intersubjetivo mútuo. Nele, os participantes coordenam seus planos de ação não por meio de coerção armada, chantagem econômica ou autoridade dogmática, mas pelo intercâmbio racional de argumentos válidos em uma esfera pública aberta e democrática.",
      source: "Jürgen Habermas, Teoria do Agir Comunicativo (adaptado)."
    },
    prompt: "De acordo com a teoria habermasiana, a validade e a legitimidade das normas éticas e das decisões políticas em um Estado democrático de direito repousam:",
    options: [
      { id: "a", text: "no consenso racionalmente motivado, alcançado mediante o debate público plural e livre de coerções coercitivas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "na imposição impositiva das convicções morais da autoridade clerical sobre toda a coletividade civil.", isCorrect: false, distractorRationale: "Habermas defende uma ética discursiva laica e pós-metafísica, nunca dogmas teológicos." },
      { id: "c", text: "na predominância absoluta da razão instrumental subordinada unicamente à lucratividade das corporações.", isCorrect: false, distractorRationale: "A razão instrumental é justamente o que Habermas critica quando invade e coloniza o 'mundo da vida'." },
      { id: "d", text: "na censura governamental aos grupos minoritários a fim de produzir uma falsa homogeneidade ideológica.", isCorrect: false, distractorRationale: "A situação ideal de fala exige a participação paritária de todas as vozes sem censura." },
      { id: "e", text: "no confronto físico violento e na eliminação sumária dos oponentes partidários.", isCorrect: false, distractorRationale: "A violência é o exato oposto da ação comunicativa orientada ao entendimento mútuo." }
    ],
    detailedExplanation: {
      summary: "Habermas sustenta que a legitimidade democrática advém da deliberação argumentativa na esfera pública (Ética do Discurso).",
      stepByStep: [
        "A racionalidade ocidental moderna não deve ficar restrita à razão técnica instrumental (calcular meios eficientes para dominar a natureza ou as pessoas).",
        "A razão comunicativa busca o entendimento linguístico intersubjetivo entre sujeitos capazes de falar e agir.",
        "Uma norma só é legítima se puder ser aprovada por todos os concernidos em um discurso prático conduzido pela força do melhor argumento."
      ],
      coreConcept: "Ação Comunicativa, Ética do Discurso e Deliberação Democrática em Habermas",
      trapWarning: "Diferencie 'agir comunicativo' (busca entendimento mútuo) de 'agir estratégico' (usa o outro como instrumento para atingir uma meta particular)."
    },
    commonTraps: ["confundir consenso discursivo com imposicao majoritaria cega", "ignorar a diferenca entre razao instrumental e comunicativa"],
    tags: ["jurgen habermas", "agir comunicativo", "esfera publica", "democracia deliberativa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-SOC-008",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Sociologia",
    subtopic: "Escola de Frankfurt: Adorno, Horkheimer e a Indústria Cultural",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Indústria Cultural não cria nos homens a necessidade de arte e reflexão genuínas; ela fabrica desejos artificiais para satisfazê-los com produtos em série pré-digeridos. A arte, outrora portadora de uma promessa de felicidade e de negação crítica do mundo administrado, torna-se mercadoria estandardizada, cuja função primordial é o entretenimento alienante e a conciliação do trabalhador exausto com a rotina da dominação social.",
      source: "Theodor W. Adorno e Max Horkheimer, Dialética do Esclarecimento (adaptado)."
    },
    prompt: "O conceito de 'Indústria Cultural' formulado pelos teóricos da Escola de Frankfurt tem como tese central que:",
    options: [
      { id: "a", text: "a mercantilização da cultura e a produção midiática em escala industrial padronizam os gostos e adormecem a capacidade crítica das massas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a difusão de produtos culturais massificados é o principal veículo de conscientização revolucionária e emancipação política operária.", isCorrect: false, distractorRationale: "Os frankfurtianos sustentam exatamente o contrário: a cultura de massa gera passividade e conformismo social." },
      { id: "c", text: "a livre concorrência entre gravadoras e estúdios cinematográficos estimula a originalidade e a autonomia radical dos artistas.", isCorrect: false, distractorRationale: "A lógica mercantil impõe fórmulas clichês repetitivas para assegurar vendas previsíveis." },
      { id: "d", text: "a cultura popular tradicional é idêntica à cultura de massa produzida pelas grandes corporações comunicacionais.", isCorrect: false, distractorRationale: "Eles distinguem cultura popular (criada pelo próprio povo) de indústria cultural (criada pelo topo do capital para o povo)." },
      { id: "e", text: "os consumidores exercem pleno controle soberano sobre os conteúdos estéticos que são veiculados nos meios de comunicação.", isCorrect: false, distractorRationale: "Para Adorno e Horkheimer, o consumidor é tratado como mero objeto passivo da indústria." }
    ],
    detailedExplanation: {
      summary: "A Escola de Frankfurt denunciou que os meios de comunicação de massa transformaram a cultura em negócio corporativo com fins de controle ideológico.",
      stepByStep: [
        "A expressão 'Indústria Cultural' foi criada intencionalmente para não ser confundida com 'cultura de massa' espontânea.",
        "Filmes, músicas e programas tornam-se mercadorias que obedecem à mesma lógica da linha de montagem: fórmulas fáceis, finais previsíveis e consumo passivo.",
        "Em vez de libertar a imaginação e despertar o espírito crítico, a indústria cultural funciona como cimento ideológico que mantém o status quo."
      ],
      coreConcept: "A Indústria Cultural, Mercantilização da Arte e Conformismo Ideológico",
      trapWarning: "Cuidado: a crítica dos frankfurtianos é dirigida à lógica econômica de padronização, e não ao valor técnico dos instrumentos de mídia em si."
    },
    commonTraps: ["achar que industria cultural significa democratizacao da arte", "confundir cultura de massa com folclore popular"],
    tags: ["escola de frankfurt", "adorno e horkheimer", "industria cultural", "cultura de massa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-FIL-008",
    area: "humanas",
    competence: 5,
    skill: 22,
    topic: "Filosofia Política",
    subtopic: "O Contratualismo Liberal de John Locke",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O homem nasce, como se provou, com título a uma perfeita liberdade e ao gozo ilimitado de todos os direitos e privilégios da lei da natureza, do mesmo modo que qualquer outro homem no mundo. Por conseguinte, tem por natureza o poder de preservar a sua propriedade — isto é, a sua vida, a sua liberdade e os seus bens — contra as ofensas e atentados de outrem. E é unicamente com vistas à proteção dessa propriedade que os homens consentem em instituir governos civis.",
      source: "John Locke, Segundo Tratado sobre o Governo Civil (adaptado)."
    },
    prompt: "Em contraste com o absolutismo defendido por Thomas Hobbes, a teoria política do contrato social em John Locke sustenta que:",
    options: [
      { id: "a", text: "o poder do Estado é limitado pelo dever de resguardar os direitos naturais dos cidadãos, cabendo à sociedade o direito de insurreição caso o governante viole o pacto.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o soberano detém poder irrestrito e incontestável sobre a vida dos súditos em qualquer circunstância civil.", isCorrect: false, distractorRationale: "Essa é a tese de Thomas Hobbes (O Leviatã), e não a de John Locke." },
      { id: "c", text: "a propriedade privada é a raiz de todas as discórdias e deve ser abolida coercitivamente pelo poder estatal.", isCorrect: false, distractorRationale: "Essa visão de crítica à propriedade privada aproxima-se de Rousseau, enquanto Locke a considera direito natural intocável." },
      { id: "d", text: "o Estado de Natureza era um combate sanguinário de todos contra todos que inviabilizava qualquer moralidade.", isCorrect: false, distractorRationale: "Essa definição de 'guerra de todos contra todos' pertence a Hobbes; em Locke, o estado de natureza já possuía leis morais naturais." },
      { id: "e", text: "a monarquia de direito divino de herança dinástica é a única instituição política moralmente legítima.", isCorrect: false, distractorRationale: "Locke é um ferrenho crítico da doutrina do direito divino dos reis (refutada em seu Primeiro Tratado)." }
    ],
    detailedExplanation: {
      summary: "Locke é o pai do liberalismo político moderno: o Estado existe para proteger a tríade de direitos naturais (vida, liberdade e propriedade).",
      stepByStep: [
        "Para Locke, no Estado de Natureza os homens já possuíam razão e direitos inalienáveis, mas faltava um juiz imparcial para resolver litígios.",
        "O Contrato Social é celebrado mediante o consentimento voluntário dos indivíduos para criar leis positivas e magistrados.",
        "O poder estatal é fiduciário (baseado na confiança). Se o governante atuar como tirano e desrespeitar os direitos naturais, o povo tem o legítimo 'direito de resistência e rebelião'."
      ],
      coreConcept: "Liberalismo Clássico, Direitos Naturais e Direito de Resistência em John Locke",
      trapWarning: "Não confunda a propriedade em Locke (que inclui a própria vida e liberdade) com mera posse imobiliária mercantil!"
    },
    commonTraps: ["confundir Locke com o absolutismo de Hobbes", "confundir Locke com o igualitarismo comunitário de Rousseau"],
    tags: ["john locke", "contratualismo", "liberalismo politico", "direitos naturais", "propriedade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-SOC-009",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Sociologia",
    subtopic: "Émile Durkheim: Coesão Social e Anomia",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Quando as transformações da vida econômica e das relações laborais ocorrem de maneira excessivamente acelerada, as instituições morais que mantinham os indivíduos coesos deixam de exercer sua autoridade pacificadora. O apetite por bens materiais cresce desenfreadamente sem encontrar um teto ético que o limite. A ausência ou a frouxidão de regras regulatórias claras debilita o tecido societário e empurra a coletividade para um estado patológico de desregulamentação.",
      source: "Émile Durkheim, Da Divisão do Trabalho Social (adaptado)."
    },
    prompt: "O conceito sociológico cunhado por Émile Durkheim para definir o estado de desregramento moral e enfraquecimento das normas coletivas abordado no texto é a:",
    options: [
      { id: "a", text: "anomia social.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "alienação do trabalho.", isCorrect: false, distractorRationale: "Alienação é um conceito central da teoria marxista, e não da sociologia funcionalista de Durkheim." },
      { id: "c", text: "solidariedade mecânica.", isCorrect: false, distractorRationale: "A solidariedade mecânica é típica de sociedades simples com fortíssima consciência coletiva e sem anomia generalizada." },
      { id: "d", text: "ação social carismática.", isCorrect: false, distractorRationale: "Ação social é categoria weberiana, estranha ao vocabulário teórico de Durkheim." },
      { id: "e", text: "violência simbólica.", isCorrect: false, distractorRationale: "Violência simbólica é conceito criado por Pierre Bourdieu na segunda metade do século XX." }
    ],
    detailedExplanation: {
      summary: "Durkheim definiu a anomia como a condição na qual a sociedade deixa de fornecer regras e limites morais suficientes para guiar os indivíduos.",
      stepByStep: [
        "Para Durkheim, a sociedade precisa de coesão e regulação moral para que as paixões e ambições individuais não se tornem infinitas e autodestrutivas.",
        "Em períodos de rápida transição industrial ou crises econômicas súbitas, as normas antigas perdem validade antes que novas normas se consolidem.",
        "Esse vácuo regulatório é a 'anomia', que aumenta as taxas de suicídio, a frustração coletiva e o sentimento de desamparo normativo."
      ],
      coreConcept: "Anomia, Fato Social e Coesão Moral em Émile Durkheim",
      trapWarning: "'Anomia' (a = negação, nomos = lei/regra) significa ausência ou ineficácia temporária de regras regulatórias, e não revolução política."
    },
    commonTraps: ["confundir anomia (Durkheim) com alienacao (Marx)", "achar que anomia e sinônimo de anarquismo político intencional"],
    tags: ["emile durkheim", "anomia", "coesao social", "fato social", "suicidio anomico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-FIL-009",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Filosofia Moral",
    subtopic: "Immanuel Kant e o Imperativo Categórico",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Todos os imperativos ordenam ou hipoteticamente ou categoricamente. Se a ação é boa apenas como meio para qualquer outra coisa, o imperativo é hipotético; se ela é representada como boa em si mesma, por conseguinte como necessária numa vontade em si conforme à razão, então o imperativo é categórico. O imperativo categórico é, portanto, só um único, e este: Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que ela se torne lei universal.",
      source: "Immanuel Kant, Fundamentação da Metafísica dos Costumes (adaptado)."
    },
    prompt: "De acordo com a filosofia moral deontológica de Immanuel Kant expressa no texto, a autenticidade ética de uma conduta decorre:",
    options: [
      { id: "a", text: "do cumprimento estrito do dever pelo puro respeito à lei moral universal e autônoma, independentemente de desejos, utilidades ou conveniências pessoais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "do cálculo utilitarista das consequências que garantem o maior prazer físico para o maior número de indivíduos.", isCorrect: false, distractorRationale: "O cálculo utilitarista de consequências (Bentham e Stuart Mill) é rejeitado categoricamente por Kant como imperativo condicional heterônomo." },
      { id: "c", text: "da obediência irrefletida aos mandamentos religiosos fundamentada no temor a castigos em vidas futuras.", isCorrect: false, distractorRationale: "Agir por medo de punição é agir por heteronomia, e não por respeito à razão moral autônoma." },
      { id: "d", text: "da aquisição de vantagens econômicas e elogios sociais que enalteçam o prestígio público do indivíduo.", isCorrect: false, distractorRationale: "Buscar recompensas materiais ou aplausos é típico de imperativos hipotéticos egoístas." },
      { id: "e", text: "do uso instrumental de outros seres humanos como meras ferramentas para a realização de planos privados.", isCorrect: false, distractorRationale: "A segunda fórmula de Kant proíbe taxativamente tratar a pessoa humana como mero meio: o ser humano é um fim em si mesmo." }
    ],
    detailedExplanation: {
      summary: "Kant fundamenta a moral na autonomia racional do sujeito: o dever moral é categórico, universalizável e incondicionado.",
      stepByStep: [
        "Imperativo Hipotético: condicionado a um fim ('se quiser ter boa reputação, não minta'). Se o objetivo mudar, a regra cai.",
        "Imperativo Categórico: incondicional e universal ('não minta nunca, pois a mentira não pode se tornar lei universal da razão').",
        "A conduta moral kantiana é deontológica (baseada no dever pelo dever) e autônoma (a razão humana legisla para si mesma a lei moral)."
      ],
      coreConcept: "Imperativo Categórico, Autonomia Racional e Ética do Dever em Kant",
      trapWarning: "Cuidado: para Kant, nem mesmo salvar uma vida justifica mentir em um tribunal, pois a lei moral universal não admite exceções de conveniência."
    },
    commonTraps: ["confundir deontologia kantiana com utilitarismo", "confundir agir por dever com agir conforme o dever por interesse"],
    tags: ["immanuel kant", "imperativo categorico", "etica do dever", "deontologia", "autonomia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-SOC-010",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Sociologia",
    subtopic: "Max Weber: Tipos Puros de Dominação Legítima",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A dominação — isto é, a probabilidade de encontrar obediência a um determinado mandato — pode apoiar-se nos mais diversos motivos de submissão. Para que a dominação perdure de modo estável, ela necessita despertar e cultivar a crença em sua legitimidade. Na história humana, essa legitimidade apoiou-se fundamentalmente em três justificações internas básicas: a autoridade do costume eterno ('ontem'), a autoridade da graça extraordinária ('herói') e a autoridade da legalidade da regra estatuída.",
      source: "Max Weber, Economia e Sociedade (adaptado)."
    },
    prompt: "Com base na tipologia de Max Weber, a forma de dominação legítima que serve de alicerce organizacional para o Estado moderno e sua administração burocrática é a:",
    options: [
      { id: "a", text: "dominação racional-legal, sustentada na crença na validade dos estatutos jurídicos impessoais e na competência funcional regulamentada.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "dominação carismática, dependente exclusivamente da dedicação emotiva à figura magnética e milagrosa de um profeta ou caudilho.", isCorrect: false, distractorRationale: "A dominação carismática é pessoal, instável e extraordinária, oposta à previsibilidade burocrática estatal." },
      { id: "c", text: "dominação tradicional, justificada pela fidelidade filial sagrada aos costumes patriarcais transmitidos desde tempos imemoriais.", isCorrect: false, distractorRationale: "A dominação tradicional caracteriza sociedades feudais ou clânicas patriarcais pré-modernas." },
      { id: "d", text: "dominação despótica absolutista, que ignora deliberadamente a existência de qualquer código de leis escritas.", isCorrect: false, distractorRationale: "O Estado moderno fundamenta-se exatamente no constitucionalismo e nas leis escritas regulamentadas." },
      { id: "e", text: "dominação clientelista feudal, baseada em laços de suserania e vassalagem sem qualquer caráter burocrático.", isCorrect: false, distractorRationale: "O feudalismo era descentralizado e baseado em juramentos pessoais, e não na burocracia racional-legal." }
    ],
    detailedExplanation: {
      summary: "Weber identificou três tipos ideais de dominação legítima: Tradicional (passado), Carismática (emoção/líder) e Racional-Legal (leis impessoais).",
      stepByStep: [
        "Na dominação racional-legal, a obediência não é devida à pessoa física do governante, mas à lei abstrata e ao cargo público que ele ocupa temporariamente.",
        "A burocracia moderna é o instrumento técnico mais puro dessa dominação: baseia-se em hierarquia funcional, competência técnica atestada e impessoalidade nos processos.",
        "Essa previsibilidade jurídica e administrativa foi elemento essencial para o desenvolvimento do capitalismo racional e do Estado democrático de direito."
      ],
      coreConcept: "Tipos Puros de Dominação Legítima e Burocracia em Max Weber",
      trapWarning: "Lembre-se: obedece-se à lei e ao cargo formal, e não à pessoa do funcionário público!"
    },
    commonTraps: ["confundir dominacao legal com dominacao carismatica", "achar que 'burocracia' para Weber e um termo pejorativo de lentidao"],
    tags: ["max weber", "dominacao legitima", "racional-legal", "burocracia", "tipos ideais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-FIL-010",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Filosofia Contemporânea",
    subtopic: "Friedrich Nietzsche e a Crítica à Moral Tradicional",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A rebelião escrava na moral começa quando o próprio ressentimento se torna criador e gera valores: o ressentimento dos seres aos quais é negada a verdadeira reação, a dos atos, e que só encontram compensação numa vingança imaginária. Enquanto toda moral nobre nasce de um triunfal dizer-sim a si mesma, a moral dos escravos diz não, de saída, a um 'fora', a um 'outro', a um 'não-eu' — e este não é o seu ato criador.",
      source: "Friedrich Nietzsche, Genealogia da Moral (adaptado)."
    },
    prompt: "A crítica genealógica de Nietzsche expressa no excerto denuncia que a moralidade ocidental hegemônica decorre da:",
    options: [
      { id: "a", text: "vitória da moral do ressentimento, que reprime as potências vitais e glorifica a fraqueza e a submissão como se fossem supremas virtudes espirituais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "afirmação heroica e destemida dos valores afirmativos da força física e da alegria dionisíaca no cotidiano.", isCorrect: false, distractorRationale: "Nietzsche elogia a afirmação afirmativa da força (moral nobre), e lamenta que ela tenha sido sufocada pela moral dos escravos." },
      { id: "c", text: "instituição da dúvida metódica cartesiana como instrumento de validação da existência do pensamento consciente.", isCorrect: false, distractorRationale: "A dúvida metódica é de Descartes (Racionalismo), e não o objeto da Genealogia da Moral nietzschiana." },
      { id: "d", text: "defesa intransigente do hedonismo corporal e da busca desenfreada pelos prazeres materiais passageiros.", isCorrect: false, distractorRationale: "A moral criticada por Nietzsche prega o ascetismo, a negação do corpo e o desprezo por este mundo terreno." },
      { id: "e", text: "completa erradicação das noções de culpa, pecado e punição no pensamento filosófico clássico.", isCorrect: false, distractorRationale: "Para Nietzsche, a moral dos escravos inventou e hipertrofiou a má consciência e a culpa existencial." }
    ],
    detailedExplanation: {
      summary: "Nietzsche realizou uma genealogia dos valores morais para demonstrar que a moral tradicional nasceu do ressentimento dos fracos contra os nobres.",
      stepByStep: [
        "Moral Nobre (dos Senhores): valoriza a vitalidade, a nobreza de espírito, a coragem e a afirmação afirmativa da vida terrena ('bom e ruim').",
        "Moral dos Escravos (do Ressentimento): os fracos, incapazes de vencer pela força, invertem os valores — transformam a fraqueza em 'bondade', a subserviência em 'humildade' e a força vital em 'maldade' ('bem e mal').",
        "Para superar o niilismo e a decadência gerada por essa negação da vida, Nietzsche propõe a 'transvaloração de todos os valores' e a afirmação da Vontade de Potência."
      ],
      coreConcept: "Genealogia da Moral, Moral dos Senhores e Moral dos Escravos em Nietzsche",
      trapWarning: "Nietzsche não defendia o ódio cego aos fracos nem o nazismo; sua crítica é psicológica e filosófica contra o ressentimento existencial e a negação da vida."
    },
    commonTraps: ["confundir moral nobre com crueldade vulgar", "achar que Nietzsche defendia a moral tradicional crista"],
    tags: ["friedrich nietzsche", "genealogia da moral", "ressentimento", "moral dos escravos", "transvaloracao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-FIL-011",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Filosofia Política Contemporânea",
    subtopic: "Hannah Arendt e o Conceito da Banalidade do Mal",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao cobrir o julgamento do oficial nazista Adolf Eichmann em Jerusalém na década de 1960, a filósofa judia-alemã Hannah Arendt esperava encontrar um monstro sádico dominado por ódio visceral. No entanto, deparou-se com um burocrata medíocre que alegava apenas 'cumprir ordens e prazos logísticos' com zelo administrativo, incapaz de refletir criticamente sobre o impacto desumanizador de suas ações no extermínio em massa.",
      source: "Hannah Arendt, Eichmann em Jerusalém: Um Relato sobre a Banalidade do Mal"
    },
    prompt: "O conceito arendtiano de 'banalidade do mal' exposto na análise da conduta de Eichmann caracteriza o mal como:",
    options: [
      { id: "a", text: "um fenômeno que se dissemina quando indivíduos abdicam do pensamento reflexivo e da consciência moral autônoma, atuando como meras engrenagens obedientes em sistemas burocráticos violentos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "uma força demoníaca transcendente irresistível que domina biologicamente os genes de certas populações.", isCorrect: false, distractorRationale: "Arendt rejeita determinismos biológicos e místicos; o mal para ela decorre da recusa ético-política em pensar." },
      { id: "c", text: "um impulso sádico patológico exclusivo de criminosos portadores de desvios psiquiátricos congênitos.", isCorrect: false, distractorRationale: "Eichmann foi considerado mentalmente são pelos médicos; o choque de Arendt foi justamente a normalidade assustadora do réu." },
      { id: "d", text: "o resultado direto da leitura e do debate aprofundado dos textos de direitos humanos da Antiguidade grega.", isCorrect: false, distractorRationale: "O nazismo censurou e perseguiu a reflexão humanística e a tradição cosmopolita." },
      { id: "e", text: "um evento que só pode se manifestar em sociedades que aboliram os tribunais de justiça e a administração pública.", isCorrect: false, distractorRationale: "O totalitarismo operou precisamente através de tribunais de exceção e aparelhamento da burocracia estatal legalizada." }
    ],
    detailedExplanation: {
      summary: "Para Hannah Arendt, a 'banalidade do mal' não diminui a gravidade do Holocausto, mas revela seu traço mais aterrorizante: os piores crimes contra a humanidade não foram cometidos apenas por psicopatas sádicos, mas por pessoas comuns que abriram mão da faculdade de julgar e pensar criticamente, normalizando a crueldade como simples 'trabalho rotineiro a ser cumprido'.",
      stepByStep: [
        "1. Contexto: Julgamento de Adolf Eichmann (responsável pela logística ferroviária dos campos de concentração nazistas).",
        "2. Tese de Eichmann: Ele alegava ser um 'mero funcionário zeloso' que não odiava judeus, apenas cumpria as leis do Estado nazista.",
        "3. Formulação de Arendt: A ausência de pensamento (thoughtlessness). Eichmann era incapaz de se colocar no lugar do outro e de julgar o certo e o errado fora das regras burocráticas.",
        "4. A banalidade do mal: O mal torna-se banal quando se institucionaliza na normalidade burocrática cotidiana e as pessoas obedecem sem qualquer questionamento ético.",
        "5. Lição contemporânea: A defesa da democracia exige o cultivo permanente do pensamento crítico e da recusa à obediência cega a ordens injustas."
      ],
      coreConcept: "A Banalidade do Mal em Hannah Arendt: Incapacidade de Pensar e Cumprimento Cego de Ordens",
      trapWarning: "Cuidado: 'banalidade do mal' NÃO significa que o mal seja 'pouco importante' ou 'tolerável'! Significa que ele se tornou corriqueiro, banalizado e executado por pessoas comuns sem reflexão ética."
    },
    commonTraps: [
      "Achar que Arendt estava atenuando ou perdoando os crimes de Eichmann",
      "Confundir banalidade do mal com mal radical ou patologia psiquiátrica clínica"
    ],
    tags: ["hannah-arendt", "banalidade-do-mal", "etica", "filosofia-politica", "totalitarismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-FIL-012",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Filosofia Contemporânea",
    subtopic: "Byung-Chul Han e a Sociedade do Cansaço",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O filósofo sul-coreano Byung-Chul Han argumenta que a sociedade contemporânea deixou de ser uma sociedade disciplinar foucaultiana (regida pelo 'dever' e por proibições externas expressas por muros e prisões) e converteu-se em uma sociedade do desempenho (regida pelo verbo 'poder' e pelo lema da positividade ilimitada do 'Yes, we can'). Nessa nova configuração, o indivíduo é coagido a ser 'empresário de si mesmo'.",
      source: "Byung-Chul Han, Sociedade do Cansaço (adaptado)."
    },
    prompt: "Segundo a crítica de Han, a principal consequência psíquica e social dessa transição para a sociedade do desempenho é a:",
    options: [
      { id: "a", text: "autoexploração voluntária, na qual o sujeito explora a si mesmo sob a ilusão de estar exercendo sua liberdade individual, culminando em esgotamento profissional (burnout) e depressão.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "libertação completa dos trabalhadores de qualquer forma de cansaço ou sofrimento existencial.", isCorrect: false, distractorRationale: "O autor demonstra precisamente o contrário: o sofrimento e o estresse foram internalizados e agravados." },
      { id: "c", text: "substituição de todas as obrigações profissionais pelo lazer comunitário contemplativo contínuo.", isCorrect: false, distractorRationale: "A sociedade do desempenho destrói o tempo contemplativo (vita contemplativa) em prol da hiperatividade produtivista ininterrupta." },
      { id: "d", text: "eliminação total de dispositivos digitais e redes de comunicação na vida cotidiana.", isCorrect: false, distractorRationale: "Han destaca que as redes sociais e celulares são instrumentos centrais de vigilância voluntária e vigilância de desempenho." },
      { id: "e", text: "volta compulsória ao sistema de servidão feudal mediado por senhores de terras agrícolas.", isCorrect: false, distractorRationale: "Trata-se de fenômeno do neoliberalismo hipermoderno digital, e não de retorno à Idade Média feudal." }
    ],
    detailedExplanation: {
      summary: "Em 'A Sociedade do Cansaço', Byung-Chul Han teoriza que a violência atual não é mais imunológica ou externa (o patrão com chicote ou proibição), mas neuronal e autoimposta: o indivíduo vigia e explora a si mesmo para ser mais produtivo, gerando a epidemia de depressão, ansiedade e síndrome de burnout.",
      stepByStep: [
        "1. Sociedade Disciplinar (Foucault): hospitais, prisões e fábricas operam com proibições ('não pode', 'deve fazer'). O opressor é externo.",
        "2. Sociedade do Desempenho (Byung-Chul Han): academias, escritórios abertos, redes sociais e startups operam com positividade ('você pode tudo', 'supere seus limites').",
        "3. Mecanismo da autoexploração: o trabalhador explora a si mesmo achando que está se realizando ou alcançando o sucesso autônomo.",
        "4. Culpa internalizada: o fracasso não é mais atribuído ao sistema desigual, mas à suposta falta de esforço individual ('se não deu certo, a culpa é sua').",
        "5. Desfecho patológico: infarto psíquico gerado pelo excesso de positividade e hipercomunicação (cansaço solitário e depressão)."
      ],
      coreConcept: "Sociedade do Desempenho em Byung-Chul Han: Autoexploração, Positividade Tóxica e Burnout",
      trapWarning: "No ENEM, atente para a diferença entre exploração externa clássica (Marx/Foucault) e autoexploração voluntária (Han): a autoexploração é mais eficaz porque o indivíduo acredita que é LIVRE enquanto se esgota!"
    },
    commonTraps: [
      "Achar que o autor elogia o 'Yes, we can' como sinal de empoderamento (ele o critica duramente)",
      "Confundir a sociedade disciplinar (negativa/proibitiva) com a de desempenho (positiva/autoexploradora)"
    ],
    tags: ["byung-chul-han", "sociedade-do-cansaco", "burnout", "autoexploracao", "filosofia-contemporanea"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-SOC-011",
    area: "humanas",
    competence: 1,
    skill: 1,
    topic: "Sociologia",
    subtopic: "Pierre Bourdieu e as Formas de Capital e Reprodução Cultural",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na sociologia da educação de Pierre Bourdieu, a escola republicana, embora se apresente formalmente como uma instituição neutra e meritocrática que oferece as mesmas oportunidades a todos os estudantes, atua historicamente como um mecanismo de legitimação e reprodução das desigualdades de classe social existentes.",
      source: "Pierre Bourdieu e Jean-Claude Passeron, A Reprodução: Elementos para uma Teoria do Sistema de Ensino"
    },
    prompt: "Para Bourdieu, a escola privilegia os estudantes das classes dominantes porque ela valoriza e cobra silenciosamente o:",
    options: [
      { id: "a", text: "capital cultural herdado do ambiente familiar (familiaridade com a norma culta, hábitos de leitura e códigos eruditos), tratando desigualdades sociais prévias como se fossem talentos individuais inatos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "desempenho atlético e força muscular bruta medidos em competições desportivas escolares.", isCorrect: false, distractorRationale: "O cerne da análise de Bourdieu é o capital cultural e a violência simbólica da cultura letrada burguesa, não o vigor físico." },
      { id: "c", text: "pagamento de propinas financeiras diretas a professores em salas de aula públicas regulares.", isCorrect: false, distractorRationale: "O mecanismo opera pela via simbólica invisível e curricular, e não por corrupção vulgar direta." },
      { id: "d", text: "conhecimento tradicional e saberes orais periféricos em detrimento da literatura clássica.", isCorrect: false, distractorRationale: "A escola tradicional historicamente desvaloriza os saberes periféricos e impõe a cultura letrada dominante." },
      { id: "e", text: "sorteio aleatório e cego de diplomas sem a aplicação de qualquer prova ou critério avaliativo.", isCorrect: false, distractorRationale: "As provas e exames existem e conferem capital institucionalizado legítimo à hierarquia de classes." }
    ],
    detailedExplanation: {
      summary: "Pierre Bourdieu desmistifica a ideologia do dom e da meritocracia escolar. Ele demonstra que o sistema educacional exige de todos os estudantes o 'capital cultural' (domínio da linguagem culta, gosto estético erudito) que apenas as famílias de elite transmitem por socialização doméstica. A escola não ensina esses códigos; ela apenas os exige, convertendo vantagens sociais de berço em mérito acadêmico aparente.",
      stepByStep: [
        "1. Formas de Capital em Bourdieu: Econômico (renda, patrimônio), Cultural (saberes, títulos, livros), Social (rede de contatos e influências) e Simbólico (prestígio e reconhecimento social).",
        "2. Formas do Capital Cultural: Incorporado (disposições mentais e corporais duradouras - o habitus), Objetivado (quadros, livros, instrumentos musicais) e Institucionalizado (diplomas escolares formais).",
        "3. Violência Simbólica: A escola impõe a cultura arbitrária da classe dominante como se fosse a única cultura universal e legítima.",
        "4. Ilusão meritocrática: O filho da classe média alta é elogiado como 'inteligente e brilhante', enquanto o filho da classe trabalhadora é estigmatizado como 'desinteressado ou sem vocação', naturalizando a desigualdade social."
      ],
      coreConcept: "Capital Cultural, Habitus e Reprodução Social em Pierre Bourdieu",
      trapWarning: "Cuidado: para Bourdieu, o capital cultural NÃO É apenas ter diploma! Ele é incorporado no falar, no vocabulário e na facilidade com textos complexos assimilada desde a primeira infância em famílias letradas."
    },
    commonTraps: [
      "Achar que Bourdieu defende a meritocracia escolar ingênua (ele a desconstrói)",
      "Reduzir o capital cultural apenas a dinheiro ou capital econômico"
    ],
    tags: ["pierre-bourdieu", "capital-cultural", "meritocracia", "violencia-simbolica", "sociologia-da-educacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-SOC-012",
    area: "humanas",
    competence: 1,
    skill: 1,
    topic: "Sociologia",
    subtopic: "Zygmunt Bauman e a Modernidade Líquida",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O sociólogo polonês Zygmunt Bauman utilizou a metáfora dos fluidos para diagnosticar a transição da modernidade 'sólida' (industrial, com empregos para a vida toda, instituições estáveis e sindicatos fortes) para a modernidade 'líquida'. Os líquidos caracterizam-se pela incapacidade de reter sua forma por muito tempo, escorrendo por entre os dedos e adaptando-se instantaneamente a qualquer recipiente.",
      source: "Zygmunt Bauman, Modernidade Líquida (adaptado)."
    },
    prompt: "No pensamento de Bauman, a 'liquidez' das relações sociais e institucionais contemporâneas manifesta-se no(a):",
    options: [
      { id: "a", text: "fragilização dos laços comunitários e afetivos, na mercantilização das relações humanas moldadas pela lógica do descarte rápido do consumo e na incerteza crônica frente ao futuro.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "garantia constitucional de estabilidade no emprego do nascimento até a velhice para todos os jovens.", isCorrect: false, distractorRationale: "A modernidade líquida gera exatamente precarização do trabalho, flexibilização e medo constante do desemprego." },
      { id: "c", text: "fortalecimento inabalável das instituições democráticas tradicionais e dos partidos de massa.", isCorrect: false, distractorRationale: "Bauman enfatiza o descrédito e a fragilização das instituições sólidas e da esfera pública." },
      { id: "d", text: "desinteresse total da sociedade em adquirir bens de consumo ou utilizar redes sociais digitais.", isCorrect: false, distractorRationale: "O consumo frenético é justamente o substituto ilusório da cidadania e da identidade na modernidade líquida." },
      { id: "e", text: "solidariedade comunitária perpétua que une vizinhos e bairros em projetos de longo prazo.", isCorrect: false, distractorRationale: "Os laços comunitários foram desfeitos em favor do individualismo atomizado e da busca de satisfação imediata." }
    ],
    detailedExplanation: {
      summary: "Em 'Modernidade Líquida' e 'Amor Líquido', Bauman argumenta que a desregulamentação econômica e a cultura do consumo transformaram os relacionamentos e as instituições em vínculos frágeis, temporários e facilmente descartáveis. Os indivíduos buscam 'conexões' rápidas que podem ser desconectadas com um clique, substituindo o compromisso solidário de longo prazo pela obsolescência programada das relações.",
      stepByStep: [
        "1. Modernidade Sólida: Projetos de longo prazo, casamento duradouro, fidelidade a uma profissão/empresa, Estado de bem-estar social garantidor.",
        "2. Modernidade Líquida: Fluidez, desregulamentação, trabalho flexível e temporário, imediatismo nas redes.",
        "3. Amor Líquido: Relações afetivas operam como mercadorias em vitrines; qualquer conflito ou tédio motiva a troca do parceiro por um 'modelo novo'.",
        "4. Cidadãos versus Consumidores: A identidade pessoal é definida pelo que você compra e ostenta, não pelo engajamento político coletivo.",
        "5. Consequência: Medo líquido, solidão e sensação perene de insegurança e desamparo existencial."
      ],
      coreConcept: "Modernidade Líquida em Zygmunt Bauman: Fluidez, Individualismo e Relações Descartáveis",
      trapWarning: "Para o ENEM: a metáfora do 'líquido' não significa que o mundo ficou 'mais fácil ou suave'! Significa que nada é duradouro, nada é seguro e as pessoas vivem em ansiedade contínua frente a um futuro incerto."
    },
    commonTraps: [
      "Achar que 'líquido' significa pacífico ou harmonioso",
      "Confundir a crítica de Bauman com uma defesa saudosista irrestrita do passado autoritário"
    ],
    tags: ["zygmunt-bauman", "modernidade-liquida", "amor-liquido", "consumismo", "individualismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-SOC-013",
    area: "humanas",
    competence: 1,
    skill: 1,
    topic: "Sociologia Contemporânea",
    subtopic: "Achille Mbembe e o Conceito de Necropolítica",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Dialogando com o conceito de biopoder formulado por Michel Foucault (o poder de 'fazer viver e deixar morrer'), o filósofo e historiador camaronês Achille Mbembe cunhou o conceito de 'necropolítica'. Mbembe argumenta que, nas periferias urbanas do Sul Global, nas zonas de conflito e nos territórios pós-coloniais, a expressão máxima da soberania estatal reside no poder supremo de ditar quem tem o direito de viver e quem deve ser deixado para morrer.",
      source: "Achille Mbembe, Necropolítica: Biopoder, soberania, estado de exceção, política da morte"
    },
    prompt: "De acordo com o referencial teórico de Mbembe, a necropolítica opera fundamentalmente através da:",
    options: [
      { id: "a", text: "gestão seletiva e deliberada da morte e da precariedade de vidas de populações vulnerabilizadas e racializadas, criando 'mundos da morte' onde o estado de exceção converte-se em regra cotidiana.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "garantia universal e irrestrita dos direitos de cidadania e segurança alimentar a todas as minorias sociais.", isCorrect: false, distractorRationale: "Necropolítica é a política da morte e do abandono planejado, o inverso da universalização de direitos sociais." },
      { id: "c", text: "extinção completa de todas as forças de segurança pública e forças armadas nacionais no mundo contemporâneo.", isCorrect: false, distractorRationale: "A necropolítica utiliza pesadamente a militarização e a violência letal armada institucionalizada." },
      { id: "d", text: "distribuição equânime de recursos médicos de terapia intensiva sem distinção de raça ou classe social.", isCorrect: false, distractorRationale: "A necropolítica manifesta-se justamente na distribuição desigual de sobrevivência e saneamento sobre corpos periféricos." },
      { id: "e", text: "abolição definitiva das fronteiras geopolíticas territoriais no continente africano e na América Latina.", isCorrect: false, distractorRationale: "O autor analisa o enclausuramento e a segregação espacial (muros, checkpoints e favelas sitiadas) como ferramentas da morte." }
    ],
    detailedExplanation: {
      summary: "Achille Mbembe atualiza a filosofia política demonstrando que, para parcelas marginalizadas da população (sobretudo negros, indígenas e moradores de periferias e favelas), a soberania não se expressa como proteção legal do Estado, mas como a autorização tácita para a sua eliminação física ou descarte de suas vidas. O Estado cria 'zonas de morte' onde as regras constitucionais são suspensas rotineiramente.",
      stepByStep: [
        "1. Do Biopoder à Necropolítica: Foucault analisou o biopoder no Ocidente (controlar a vida, a saúde e a demografia). Mbembe vai além: em sociedades racistas e coloniais, o poder se expressa como gestão da MORTE (necropolítica).",
        "2. Criação de 'Mundos da Morte': Espaços territoriais onde certas vidas são categorizadas como descartáveis ou 'inimigos a serem abatidos' (ex: ocupações militares, favelas criminalizadas, campos de contenção de refugiados).",
        "3. O papel do racismo: O racismo opera como o critério biopolítico que justifica matar certas pessoas sem causar comoção pública moral ('são corpos matáveis').",
        "4. Necropolítica indireta: Não se manifesta apenas pelo tiro letal de agentes armados, mas também pela negligência planejada (ausência proposital de hospitais, saneamento e saneamento em bairros pobres durante pandemias).",
        "5. Conexão com o ENEM: Ferramenta analítica indispensável para debater letalidade policial, segurança pública e racismo estrutural nas redações e questões de Humanas."
      ],
      coreConcept: "Necropolítica em Achille Mbembe: Soberania, Racismo de Estado e Produção Social da Morte",
      trapWarning: "Necropolítica não é apenas 'matar no tiro': é também DEIXAR MORRER por falta de água potável, esgoto, remédios e assistência pública. O Estado decide ativamente quem vive com dignidade e quem é exposto à morte prematura."
    },
    commonTraps: [
      "Achar que necropolítica é apenas crime organizado (é uma prática gerida e tolerada pelo próprio Estado soberano)",
      "Confundir necropolítica com biopoder sem compreender a crítica pós-colonial de Mbembe"
    ],
    tags: ["achille-mbembe", "necropolitica", "biopoder", "racismo-estrutural", "direitos-humanos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];


