export const QUESTIONS_BRASIL_REPUBLICA = [
  {
    id: "HUM-HIST-001",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "Primeira República",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a Primeira República (1889-1930), o sistema eleitoral brasileiro era marcado pelo 'voto de cabresto'. Os coronéis, grandes proprietários de terras, exerciam controle sobre os eleitores de sua região, garantindo os votos necessários para seus candidatos em troca de favores ou mediante coerção física e econômica.",
      source: "Original - Inspirada em ENEM"
    },
    prompt: "O 'voto de cabresto', prática política característica da Primeira República no Brasil, sustentava-se fundamentalmente na:",
    options: [
      { id: "a", text: "isenção fiscal concedida aos grandes proprietários pelo governo federal.", isCorrect: false, distractorRationale: "Isenção fiscal não era a base da coerção política sobre os eleitores pobres." },
      { id: "b", text: "descentralização administrativa que enfraqueceu o poder dos governadores.", isCorrect: false, distractorRationale: "A Política dos Governadores fortaleceu, e não enfraqueceu, os poderes regionais." },
      { id: "c", text: "relação de dependência econômica e dominação social entre patrões e trabalhadores.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "obrigatoriedade legal de voto estabelecida para analfabetos na Constituição de 1891.", isCorrect: false, distractorRationale: "Analfabetos não tinham direito ao voto na Constituição de 1891." },
      { id: "e", text: "atuação da Justiça Eleitoral, criada para fiscalizar e punir fraudes nos municípios.", isCorrect: false, distractorRationale: "A Justiça Eleitoral só foi criada em 1932, após a Primeira República." }
    ],
    detailedExplanation: {
      summary: "O coronelismo dependia da desigualdade social e do controle econômico local.",
      stepByStep: [
        "Identificar o contexto da Primeira República e o papel dos coronéis.",
        "Reconhecer que o 'voto de cabresto' era uma forma de fraude e coerção eleitoral.",
        "Compreender que essa prática era possível devido à submissão econômica dos trabalhadores rurais aos grandes proprietários (coronéis)."
      ],
      coreConcept: "Coronelismo e relações clientelistas na Primeira República.",
      trapWarning: "Cuidado com alternativas que mencionam instituições modernas como a Justiça Eleitoral, inexistente na época."
    },
    commonTraps: ["Anacronismo institucional", "Confusão sobre direito a voto"],
    tags: ["Primeira República", "Coronelismo", "História do Brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-002",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "Era Vargas",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A partir de 1937, com a implantação do Estado Novo, Getúlio Vargas criou o Departamento de Imprensa e Propaganda (DIP). Esse órgão não apenas censurava os meios de comunicação, mas também produzia conteúdos que exaltavam a figura do líder, associando-o ao desenvolvimento da nação e à proteção dos trabalhadores.",
      source: "Original - Baseado no contexto histórico da Era Vargas"
    },
    prompt: "A criação do DIP durante o Estado Novo teve como principal objetivo político:",
    options: [
      { id: "a", text: "promover a pluralidade de ideias para fortalecer a democracia direta.", isCorrect: false, distractorRationale: "O Estado Novo foi uma ditadura e o DIP censurava opositores." },
      { id: "b", text: "controlar a informação e construir uma imagem messiânica do governante.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "estimular a produção cultural estrangeira no Brasil para modernizar o país.", isCorrect: false, distractorRationale: "O DIP tinha um caráter fortemente nacionalista." },
      { id: "d", text: "garantir a liberdade de imprensa, desde que os jornais não criticassem o exército.", isCorrect: false, distractorRationale: "Não havia liberdade de imprensa; a censura era ampla e irrestrita." },
      { id: "e", text: "organizar os sindicatos para que tivessem autonomia frente ao governo.", isCorrect: false, distractorRationale: "Os sindicatos eram atrelados ao Estado, não autônomos." }
    ],
    detailedExplanation: {
      summary: "O DIP foi o principal instrumento de censura e propaganda da ditadura do Estado Novo.",
      stepByStep: [
        "Lembrar que o Estado Novo (1937-1945) foi um período ditatorial no governo Vargas.",
        "Identificar a função dupla do DIP: censura (repressão) e propaganda (exaltação).",
        "Concluir que o objetivo era garantir o controle social e forjar a imagem de Vargas como 'Pai dos Pobres'."
      ],
      coreConcept: "Controle ideológico e propaganda política em regimes autoritários.",
      trapWarning: "Evite confundir as leis trabalhistas (CLT) com liberdade sindical; o sindicalismo varguista era de Estado (pelego)."
    },
    commonTraps: ["Mito do governante democrático", "Confusão sobre sindicatos"],
    tags: ["Era Vargas", "Estado Novo", "DIP", "Censura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-003",
    area: "humanas",
    competence: 5,
    skill: 22,
    topic: "História do Brasil",
    subtopic: "Ditadura Civil-Militar",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a década de 1970, o Brasil vivenciou o chamado 'Milagre Econômico', caracterizado por taxas de crescimento do PIB superiores a 10% ao ano. Ao mesmo tempo, o país passava pelo período de maior repressão política, com a vigência do AI-5, prisões arbitrárias e censura prévia.",
      source: "Original"
    },
    prompt: "A relação entre o modelo econômico e o sistema político no período descrito caracterizou-se por:",
    options: [
      { id: "a", text: "distribuição equitativa de renda, o que diminuiu a oposição popular ao governo militar.", isCorrect: false, distractorRationale: "O período foi marcado pelo aumento da concentração de renda, não distribuição." },
      { id: "b", text: "abertura política gradual impulsionada pelos altos lucros da classe média emergente.", isCorrect: false, distractorRationale: "A abertura política só iniciaria no fim da década, após o fim do Milagre." },
      { id: "c", text: "crescimento sustentado por endividamento externo e arrocho salarial, garantido pela repressão a sindicatos.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "nacionalização de empresas estrangeiras como forma de garantir o controle estatal sobre o crescimento.", isCorrect: false, distractorRationale: "O regime militar aliou-se ao capital estrangeiro para promover o crescimento." },
      { id: "e", text: "fim da censura na imprensa econômica para atrair investidores internacionais interessados no país.", isCorrect: false, distractorRationale: "A censura continuou rígida durante o governo Médici." }
    ],
    detailedExplanation: {
      summary: "O 'Milagre Econômico' dependia de arrocho salarial, algo possível pela repressão política.",
      stepByStep: [
        "Recordar que o Milagre Econômico (1968-1973) gerou crescimento excludente ('fazer o bolo crescer para depois dividir').",
        "Entender que o arrocho salarial (controle de salários) era necessário para as metas econômicas.",
        "Perceber que só foi possível impor arrocho salarial porque o AI-5 desarticulou e reprimiu os sindicatos e oposição."
      ],
      coreConcept: "Milagre Econômico, concentração de renda e autoritarismo.",
      trapWarning: "Não confunda crescimento do PIB com desenvolvimento social ou distribuição de renda."
    },
    commonTraps: ["Confundir crescimento com desenvolvimento", "Ignorar o endividamento externo"],
    tags: ["Ditadura Militar", "Milagre Econômico", "Economia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-004",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História do Brasil",
    subtopic: "Nova República",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "text",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Constituição de 1988, conhecida como 'Constituição Cidadã', ampliou direitos sociais, políticos e civis no Brasil. Entre suas inovações, destacam-se a criminalização do racismo, a demarcação de terras indígenas e a criação do Sistema Único de Saúde (SUS).",
      source: "Original - Fatos Históricos do Brasil"
    },
    prompt: "A promulgação da Constituição de 1988 representou um marco histórico no Brasil pois:",
    options: [
      { id: "a", text: "estabeleceu um regime parlamentarista, reduzindo os poderes do Presidente da República.", isCorrect: false, distractorRationale: "O Brasil manteve o presidencialismo; o parlamentarismo foi rejeitado em plebiscito posterior (1993)." },
      { id: "b", text: "consolidou o processo de redemocratização, rompendo institucionalmente com a ditadura militar.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "restringiu o direito de voto aos alfabetizados, buscando qualificar as eleições.", isCorrect: false, distractorRationale: "A CF/88 inovou ao permitir o voto facultativo para analfabetos." },
      { id: "d", text: "privatizou os serviços básicos, transferindo para o mercado as políticas de saúde e educação.", isCorrect: false, distractorRationale: "A Constituição criou sistemas estatais universais, como o SUS." },
      { id: "e", text: "extinguiu os direitos trabalhistas para flexibilizar a economia em crise no final dos anos 80.", isCorrect: false, distractorRationale: "A CF/88 ampliou os direitos trabalhistas, não os extinguiu." }
    ],
    detailedExplanation: {
      summary: "A Constituição de 1988 institucionalizou a democracia no Brasil após 21 anos de ditadura.",
      stepByStep: [
        "Identificar o contexto da Assembleia Nacional Constituinte de 1987-1988.",
        "Entender que a nova Constituição substituiu a ordem jurídica autoritária herdada da ditadura.",
        "Reconhecer seu papel na consolidação do Estado Democrático de Direito."
      ],
      coreConcept: "Redemocratização e a Constituição Cidadã de 1988.",
      trapWarning: "Cuidado com afirmações de privatização; a CF/88 foi fortemente voltada para garantias sociais públicas."
    },
    commonTraps: ["Erro sobre sistema de governo", "Erro sobre direitos eleitorais"],
    tags: ["Constituição de 1988", "Nova República", "Cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-005",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "República Oligárquica",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Convênio de Taubaté (1906) foi um acordo firmado entre os governadores de São Paulo, Minas Gerais e Rio de Janeiro. Em um momento de superprodução de café e queda de preços no mercado internacional, os estados cafeicultores pressionaram o governo federal a intervir na economia.",
      source: "Original"
    },
    prompt: "O principal mecanismo econômico estabelecido pelo Convênio de Taubaté para proteger os lucros da elite cafeeira consistia em:",
    options: [
      { id: "a", text: "diversificar a produção agrícola nacional, estimulando o plantio de algodão e cana-de-açúcar.", isCorrect: false, distractorRationale: "O convênio buscava salvar o café, não diversificar a produção." },
      { id: "b", text: "comprar o excedente de café com dinheiro de empréstimos externos, retirando o produto do mercado.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "proibir a importação de bens industrializados para forçar a industrialização das regiões cafeeiras.", isCorrect: false, distractorRationale: "Os cafeicultores não queriam proibir importações; eles eram os maiores importadores." },
      { id: "d", text: "diminuir os impostos sobre a exportação do café para torná-lo mais barato no mercado externo.", isCorrect: false, distractorRationale: "O governo na verdade criou impostos sobre o próprio café plantado (para desestimular novos plantios) e pediu empréstimos." },
      { id: "e", text: "estatizar as fazendas falidas e distribuir suas terras para colonos imigrantes, estimulando o mercado interno.", isCorrect: false, distractorRationale: "Isso configuraria reforma agrária, algo rejeitado pela elite oligárquica." }
    ],
    detailedExplanation: {
      summary: "O Estado passou a comprar e estocar o excesso de café para manter os preços altos artificialmente.",
      stepByStep: [
        "Compreender que o café era a base da economia brasileira e sofria com a superprodução.",
        "Lembrar que o governo pegava empréstimos internacionais para comprar a safra excedente.",
        "Entender que essa política socializava os prejuízos (endividamento do Estado) e privatizava os lucros (pagamento aos fazendeiros)."
      ],
      coreConcept: "Intervencionismo estatal na economia cafeeira na Primeira República.",
      trapWarning: "Lembre-se da lógica de 'socialização das perdas': a população pagava a dívida pública gerada para salvar os barões do café."
    },
    commonTraps: ["Confundir com industrialização", "Presumir políticas de livre mercado"],
    tags: ["Convênio de Taubaté", "Economia Cafeeira", "República Oligárquica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
