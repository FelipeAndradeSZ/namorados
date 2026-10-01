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
  }
];
