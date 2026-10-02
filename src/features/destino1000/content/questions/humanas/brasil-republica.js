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
  },
  {
    id: "HUM-HIST-006",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "História do Brasil",
    subtopic: "República da Espada e Encilhamento",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nos primeiros anos da República, o ministro da Fazenda Rui Barbosa adotou uma política econômica expansionista visando estimular o surgimento de indústrias e substituir a dependência agroexportadora. A medida autorizou bancos privados a emitirem papel-moeda com lastro em títulos da dívida pública, desencadeando intensa especulação financeira na Bolsa de Valores do Rio de Janeiro.",
      source: "Nicolau Sevcenko, A Revolta da Vacina. São Paulo: Brasiliense (adaptado)."
    },
    prompt: "Essa crise socioeconômica do início da República, conhecida historicamente como o 'Encilhamento', teve como principais desdobramentos:",
    options: [
      { id: "a", text: "forte surto inflacionário, desvalorização cambial e proliferação de empresas-fantasma sem base produtiva real.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "consolidação de um parque industrial metalúrgico de ponta financiado por investimentos estatais diretos.", isCorrect: false, distractorRationale: "A indústria de base só se consolidou nos anos 1940 com o Estado Novo de Getúlio Vargas." },
      { id: "c", text: "extinção da dívida externa brasileira por meio do superávit gerado nas exportações cafeeiras.", isCorrect: false, distractorRationale: "O endividamento externo aumentou drasticamente, exigindo o Funding Loan em 1898." },
      { id: "d", text: "estabilidade monetária duradoura baseada na paridade fixa entre o mil-réis e o padrão-ouro britânico.", isCorrect: false, distractorRationale: "Ocorreu o oposto: violenta inflação e desvalorização da moeda nacional." },
      { id: "e", text: "redistribuição ampla de terras aos ex-escravizados financiada pelos bancos emissores.", isCorrect: false, distractorRationale: "A política econômica foi estritamente financeira e urbana, sem reforma agrária." }
    ],
    detailedExplanation: {
      summary: "O Encilhamento foi uma bolha especulativa provocada pela emissão descontrolada de crédito, resultando em inflação e falências.",
      stepByStep: [
        "A intenção declarada de Rui Barbosa era facilitar o crédito para modernizar o país após a abolição da escravidão.",
        "Sem fiscalização adequada, surgiram empresas fictícias com ações negociadas em bolsa por valores irreais.",
        "A bolha estourou com falência de bancos, desvalorização da moeda (mil-réis) e corrosão do poder de compra dos trabalhadores."
      ],
      coreConcept: "A Crise do Encilhamento na República da Espada",
      trapWarning: "Embora pretendesse fomentar a indústria, o Encilhamento resultou primariamente em especulação financeira."
    },
    commonTraps: ["confundir intenção industrialista com resultado econômico", "ignorar a especulação financeira"],
    tags: ["encilhamento", "rui barbosa", "republica da espada", "inflacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-007",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "Revolta da Vacina e Reforma Passos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1904, o Rio de Janeiro foi palco de violentos confrontos de rua entre populares e forças policiais. Enquanto a prefeitura de Pereira Passos executava o 'bota-abaixo' para alargar avenidas e embelezar a cidade aos moldes parisienses, o médico sanitarista Oswaldo Cruz liderava campanhas enérgicas contra a varíola, a febre amarela e a peste bubônica, culminando na Lei de Vacinação Obrigatória.",
      source: "Sidney Chalhoub, Cidade Febril: Cortiços e Epidemias na Corte Imperial (adaptado)."
    },
    prompt: "A eclosão da Revolta da Vacina em 1904 expressou não apenas o receio popular em relação à inoculação médica, mas sobretudo:",
    options: [
      { id: "a", text: "a insatisfação acumulada das classes populares com a demolição de suas moradias e a política higienista autoritária.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a exigência dos operários cariocas pela imediata implantação de um regime comunista soviético no país.", isCorrect: false, distractorRationale: "Anacronismo; a Revolução Russa ocorreu em 1917 e o movimento operário carioca não era de matriz soviética." },
      { id: "c", text: "o apoio irrestrito da população aos barões do café contra a industrialização acelerada da capital.", isCorrect: false, distractorRationale: "A revolta foi das camadas populares pobres e de setores militares descontentes contra o governo oligárquico." },
      { id: "d", text: "a defesa popular da medicina tradicional indígena contra a farmacologia ocidental moderna.", isCorrect: false, distractorRationale: "A motivação central foi política, sanitária e social, sem relação com tradições indígenas." },
      { id: "e", text: "a rebelião dos grandes proprietários de cortiços contra a cobrança de IPTU progressivo pelo prefeito.", isCorrect: false, distractorRationale: "A revolta foi protagonizada pela população despossuída, expulsa para os morros e subúrbios." }
    ],
    detailedExplanation: {
      summary: "A Revolta da Vacina articulou o choque cultural contra a vacinação coercitiva com o protesto social contra a expulsão dos cortiços.",
      stepByStep: [
        "A reforma urbana do prefeito Pereira Passos demoliu cortiços no centro do Rio ('bota-abaixo') sem oferecer moradia alternativa às famílias pobres.",
        "Essa população foi empurrada para os morros (favelização nascente) e para as periferias distantes.",
        "A lei que tornou a vacinação contra a varíola obrigatória, com invasão policial aos lares, foi o estopim de uma revolta social represada."
      ],
      coreConcept: "Higienismo Autoritário e Exclusão Urbana na Belle Époque",
      trapWarning: "A vacina foi o estopim imediato, mas as causas profundas residiam na exclusão socioespacial do projeto modernizador."
    },
    commonTraps: ["reduzir o conflito à simples ignorância científica", "desconsiderar o impacto do bota-abaixo"],
    tags: ["revolta da vacina", "pereira passos", "higienismo", "rio de janeiro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-008",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "Tenentismo e Coluna Prestes",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a década de 1920, setores médios urbanos e jovens oficiais do Exército expressaram crescente descontentamento com as práticas políticas da Primeira República. Episódios como os 18 do Forte de Copacabana (1922), a Revolta Paulista de 1924 e a marcha da Coluna Prestes (1925-1927) abalaram a estabilidade do poder oligárquico.",
      source: "Boris Fausto, A Revolução de 1930: Historiografia e História. São Paulo: Brasiliense."
    },
    prompt: "Entre as principais reivindicações do movimento tenentista que visavam reformar as instituições da Primeira República, destaca-se a:",
    options: [
      { id: "a", text: "adoção do voto secreto, moralização do processo eleitoral e expansão do ensino público primário gratuito.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "restauração imediata da monarquia parlamentarista com a coroação de descendentes da família real.", isCorrect: false, distractorRationale: "Os tenentes eram republicanos convictos e modernizadores, nunca monarquistas." },
      { id: "c", text: "extinção do Exército brasileiro e substituição por milícias estaduais comandadas por coronéis locais.", isCorrect: false, distractorRationale: "Os tenentes defendiam a centralização nacional em oposição às milícias coronelistas estaduais." },
      { id: "d", text: "coletivização compulsória de todas as fazendas cafeeiras e abolição total da propriedade privada.", isCorrect: false, distractorRationale: "O tenentismo inicial tinha corte nacionalista e burguês/reformista, não comunista." },
      { id: "e", text: "permanência indefinida do voto aberto (a cabresto) para proteger as decisões das comunidades locais.", isCorrect: false, distractorRationale: "O combate ao voto de cabresto e à fraude oligárquica era o principal cavalo de batalha dos tenentes." }
    ],
    detailedExplanation: {
      summary: "O tenentismo combatia a fraude eleitoral da política dos governadores, reivindicando voto secreto e instrução pública.",
      stepByStep: [
        "A Primeira República era marcada por fraudes sistemáticas (voto de cabresto, eleições a bico de pena, Comissão Verificadora de Poderes).",
        "Os jovens oficiais de baixa e média patente viam o Exército como a instituição que representava a nação acima dos interesses regionais.",
        "Suas pautas centrais incluíam moralização política, voto secreto, Justiça Eleitoral e ensino público como caminho civilizatório."
      ],
      coreConcept: "Tenentismo e Crise da Ordem Oligárquica",
      trapWarning: "Embora Luiz Carlos Prestes tenha aderido ao comunismo mais tarde, o tenentismo da década de 1920 não era um movimento comunista."
    },
    commonTraps: ["confundir tenentismo inicial com socialismo", "desconhecer a pauta do voto secreto"],
    tags: ["tenentismo", "coluna prestes", "voto secreto", "crise oligarquica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-009",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História do Brasil",
    subtopic: "Ditadura Militar e AI-5",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Art. 2º - O Presidente da República poderá decretar o recesso do Congresso Nacional, das Assembleias Legislativas e das Câmaras de Vereadores [...].\nArt. 10 - Fica suspensa a garantia de habeas corpus, nos casos de crimes políticos, contra a segurança nacional, a ordem econômica e social.",
      source: "Ato Institucional nº 5 (AI-5), de 13 de dezembro de 1968."
    },
    prompt: "A edição do AI-5 no governo Costa e Silva representou o momento de maior endurecimento autoritário da Ditadura Militar brasileira, caracterizando-se pela:",
    options: [
      { id: "a", text: "supressão de garantias constitucionais, institucionalização da censura prévia e centralização de poderes discricionários no Executivo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "convocação de eleições presidenciais diretas antecipadas para conter as manifestações populares de estudantes.", isCorrect: false, distractorRationale: "O AI-5 suspendeu garantias e fechou o Congresso, afastando qualquer hipótese de eleições diretas." },
      { id: "c", text: "extinção de todos os órgãos de repressão e segurança interna, como DOI-CODI e DOPS.", isCorrect: false, distractorRationale: "O DOI-CODI e a máquina repressiva foram exatamente potencializados e institucionalizados a partir desse marco." },
      { id: "d", text: "imediata renúncia dos chefes das Forças Armadas e devolução do poder político a líderes sindicais.", isCorrect: false, distractorRationale: "O regime militar intensificou sua intervenção e perseguição sobre os sindicatos operários." },
      { id: "e", text: "revogação de toda a legislação de segurança nacional e adesão aos tratados da Anistia Internacional.", isCorrect: false, distractorRationale: "A Doutrina de Segurança Nacional foi levada ao ápice durante os chamados 'anos de chumbo'." }
    ],
    detailedExplanation: {
      summary: "O AI-5 abriu o período mais violento da ditadura, com fechamento do Legislativo, censura aos meios de comunicação e cassação de direitos.",
      stepByStep: [
        "O AI-5 concedeu ao Presidente poder para fechar o Congresso, cassar mandatos políticos e suspender direitos políticos de qualquer cidadão.",
        "A suspensão do habeas corpus para 'crimes políticos' facilitou prisões arbitrárias, torturas e desaparecimentos forçados nos porões do regime.",
        "Esse período estendeu-se durante o governo Médici, combinando repressão máxima ('anos de chumbo') com propaganda ufanista e crescimento econômico concentrador."
      ],
      coreConcept: "Institucionalização do Autoritarismo e o AI-5",
      trapWarning: "O AI-5 não foi uma lei ordinária; foi um ato de exceção acima da Constituição que eliminou o controle judicial dos atos do Executivo."
    },
    commonTraps: ["confundir AI-5 com abertura política", "ignorar a supressão do habeas corpus"],
    tags: ["ditadura militar", "ai-5", "anos de chumbo", "autoritarismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-010",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "Diretas Já e Transição Democrática",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre o final de 1983 e o primeiro semestre de 1984, milhões de brasileiros ocuparam praças e avenidas de várias cidades do país trajando amarelo e exigindo o restabelecimento das eleições presidenciais diretas, na maior mobilização popular da história republicana brasileira.",
      source: "Lilia Schwarcz e Heloisa Starling, Brasil: Uma Biografia. São Paulo: Companhia das Letras."
    },
    prompt: "Apesar da comoção cívica da campanha das 'Diretas Já', a transição final do regime militar para o governo civil em 1985 ocorreu por via de uma eleição indireta porque:",
    options: [
      { id: "a", text: "a Emenda Constitucional Dante de Oliveira não alcançou a maioria qualificada de dois terços no plenário da Câmara dos Deputados.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "os líderes da oposição desistiram das eleições e negociaram a manutenção do general Figueiredo no cargo.", isCorrect: false, distractorRationale: "A oposição não desistiu; disputou o Colégio Eleitoral e venceu com a chapa Tancredo Neves / José Sarney." },
      { id: "c", text: "o Supremo Tribunal Federal decretou a ilegalidade de qualquer votação para presidente antes do ano 2000.", isCorrect: false, distractorRationale: "O STF nunca emitiu tal decisão; o processo seguiu os ritos constitucionais vigentes." },
      { id: "d", text: "a população rejeitou a candidatura de Tancredo Neves em plebiscito nacional de voto popular.", isCorrect: false, distractorRationale: "Não houve plebiscito para a eleição presidencial de 1985." },
      { id: "e", text: "uma intervenção militar externa impediu a apuração das cédulas nas capitais brasileiras.", isCorrect: false, distractorRationale: "Não houve intervenção externa; o Congresso votou a emenda seguindo o quórum de dois terços exigido." }
    ],
    detailedExplanation: {
      summary: "A rejeição da Emenda Dante de Oliveira forçou a oposição a disputar a presidência no Colégio Eleitoral indireto, elegendo Tancredo Neves.",
      stepByStep: [
        "A campanha das Diretas Já mobilizou comícios multitudinários em apoio à Proposta de Emenda Constitucional Dante de Oliveira.",
        "Em abril de 1984, a emenda obteve maioria simples dos deputados presentes, mas não atingiu os dois terços dos votos necessários para alterar a Constituição.",
        "Diante disso, a Aliança Democrática (PMDB + dissidentes do PDS na Frente Liberal) concorreu no Colégio Eleitoral indireto, derrotando o candidato oficial Paulo Maluf e encerrando 21 anos de governos militares."
      ],
      coreConcept: "A Campanha das Diretas Já e a Transição Pactual",
      trapWarning: "As Diretas Já foram vitoriosas em mobilização social, mas foram derrotadas no plenário do Congresso em 1984."
    },
    commonTraps: ["achar que as Diretas Já aprovaram a eleição direta imediata", "confundir Colégio Eleitoral com plebiscito"],
    tags: ["diretas ja", "dante de oliveira", "tancredo neves", "redemocratizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-011",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "Revolta da Vacina e Reforma Pereira Passos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No Rio de Janeiro do início do século XX, a reforma urbana do prefeito Pereira Passos (1902-1906) demoliu centenas de habitações coletivas e cortiços no centro da capital sob o lema do 'bota-abaixo' para abrir avenidas inspiradas em Paris. Paralelamente, o sanitarista Oswaldo Cruz liderou campanhas obrigatórias e invasivas de vacinação contra a varíola e combate à febre amarela. Em novembro de 1904, a população insurgiu-se em barricadas e enfrentamentos armados com a polícia.",
      source: "Nicolau Sevcenko, A Revolta da Vacina. São Paulo: Brasiliense."
    },
    prompt: "A eclosão da Revolta da Vacina em 1904 não pode ser compreendida apenas como uma recusa à imunização médica, mas sim como a culminância de:",
    options: [
      { id: "a", text: "um complô monarquista financiado por potências estrangeiras que pretendia restaurar a dinastia dos Bragança no trono imperial.", isCorrect: false, distractorRationale: "Embora houvesse descontentamento político, a revolta popular foi impulsionada pela opressão cotidiana e pela exclusão urbana das classes trabalhadoras." },
      { id: "b", text: "um processo de descontentamento popular acumulado diante do despejo forçado, da alta do custo de vida e da invasão policial autoritária dos lares pobres.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "uma greve geral liderada pelo Partido Comunista Brasileiro para estatizar os hospitais e laboratórios da capital.", isCorrect: false, distractorRationale: "Anacronismo histórico: o Partido Comunista Brasileiro (PCB) só foi fundado em 1922." },
      { id: "d", text: "um conflito entre médicos sanitaristas que defendiam a homeopatia contra a introdução de medicamentos industriais.", isCorrect: false, distractorRationale: "O debate não girava em torno de disputas acadêmicas de homeopatia, mas sobre autoritarismo estatal e higienismo excludente." },
      { id: "e", text: "uma reação dos grandes cafeicultores paulistas contra o aumento de impostos alfandegários federais no porto do Rio de Janeiro.", isCorrect: false, distractorRationale: "Os cafeicultores dominavam a presidência na República Oligárquica e não formaram as barricadas populares da revolta." }
    ],
    detailedExplanation: {
      summary: "A Revolta da Vacina foi o estopim de um acúmulo de insatisfações das camadas populares submetidas a despejos sumários da reforma Pereira Passos e à perda de moradia no centro.",
      stepByStep: [
        "Passo 1: Compreender o cenário da reforma Pereira Passos: demolição em massa de cortiços no centro ('bota-abaixo') empurrou as camadas populares para os morros periféricos, gerando as primeiras favelas.",
        "Passo 2: Analisar a campanha sanitária de Oswaldo Cruz: brigadas de mata-mosquitos e agentes de saúde tinham prerrogativa de invadir residências para vistoria e aplicação compulsória da vacina.",
        "Passo 3: Integrar a mentalidade da época: a vacinação compulsória, sem diálogo pedagógico e em um contexto de repressão policial violenta, foi percebida como uma afronta à intimidade e à dignidade familiar.",
        "Passo 4: Concluir que a revolta popular expressou o repúdio generalizado à modernização autoritária e excludente da Primeira República."
      ],
      coreConcept: "Reforma urbana de Pereira Passos, higienismo social, segregação socioespacial e a Revolta da Vacina de 1904.",
      trapWarning: "Reduzir o movimento a um suposto 'obscurantismo anticientífico' dos pobres, desconsiderando a violência social da reforma urbana e a violação de domicílios."
    },
    commonTraps: ["reduzir_a_revolta_a_ignorancia_cientifica", "anacronismo_com_partidos_posteriores"],
    tags: ["revolta_da_vacina", "primeira_republica", "higienismo", "rio_de_janeiro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-012",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "Revolta da Chibata e Cidadania Negra",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 22 de novembro de 1910, marinheiros a bordo dos encouraçados Minas Geraes e São Paulo rebelaram-se contra os castigos corporais na Marinha de Guerra brasileira. Sob a liderança de João Cândido Felisberto, conhecido como o 'Almirante Negro', os marinheiros apontaram os canhões dos navios para a cidade do Rio de Janeiro exigindo o fim imediato das chibatadas, o aumento de soldos e uma escala justa de serviço.",
      source: "Edmar Morel, A Revolta da Chibata. Rio de Janeiro: Graal."
    },
    prompt: "A eclosão da Revolta da Chibata evidenciou as contradições da recém-proclamada República brasileira ao demonstrar:",
    options: [
      { id: "a", text: "a sobrevivência de práticas disciplinares herdeiras do escravagismo colonial aplicadas sobre um contingente de praças majoritariamente negro e mestiço.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o controle absoluto de oficiais operários anarquistas sobre as altas patentes da Marinha brasileira.", isCorrect: false, distractorRationale: "O oficialato da Marinha era composto pela elite aristocrática branca; os revoltosos eram marujos subalternos." },
      { id: "c", text: "a recusa dos marinheiros em aceitar a modernização bélica trazida pelos encouraçados de modelo Dreadnought.", isCorrect: false, distractorRationale: "Os marinheiros operavam os navios mais modernos com maestria exemplar; revoltavam-se contra os abusos corporais e a fome." },
      { id: "d", text: "o alinhamento ideológico dos revoltosos com os regimes socialistas da Europa Oriental.", isCorrect: false, distractorRationale: "A revolta ocorreu em 1910, antes da Revolução Russa de 1917, com pautas focadas em direitos humanos e dignidade profissional." },
      { id: "e", text: "a eficácia imediata do governo de Hermes da Fonseca em cumprir a anistia prometida sem prender os revoltosos.", isCorrect: false, distractorRationale: "O governo traiu a anistia: prendeu João Cândido, expulsou marujos e enviou centenas para trabalhos forçados no Acre." }
    ],
    detailedExplanation: {
      summary: "Mais de vinte anos após a Lei Áurea (1888), a Marinha ainda açoitava corpos de marinheiros negros e pobres, revelando o racismo estrutural da Primeira República.",
      stepByStep: [
        "Passo 1: Contextualizar a composição da Marinha: os altos oficiais pertenciam às famílias nobres e brancas, enquanto as praças eram homens negros, caboclos e pobres, muitos alistados à força.",
        "Passo 2: Analisar a contradição da modernidade: a República comprou os encouraçados mais modernos do mundo (Dreadnoughts), mas mantinha regulamentos disciplinares com chicoteamento herdados da escravidão.",
        "Passo 3: Identificar a liderança de João Cândido: os revoltosos exigiam ser tratados como cidadãos de uma República, e não como cativos de galés.",
        "Passo 4: Concluir que a revolta desmascarou o abismo entre a retórica republicana liberal e a brutalidade racial cotidiana."
      ],
      coreConcept: "A Revolta da Chibata (1910), racismo estrutural, direitos humanos e cidadania dos afrodescendentes no pós-abolição.",
      trapWarning: "Acreditar que com a Proclamação da República (1889) a cidadania foi imediatamente universalizada e as práticas de violência física contra trabalhadores foram abolidas."
    },
    commonTraps: ["achar_que_o_governo_cumpriu_a_anistia", "desconsiderar_o_recorte_racial_do_conflito"],
    tags: ["revolta_da_chibata", "joao_candido", "cidadania_negra", "pos_abolicao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-013",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História do Brasil",
    subtopic: "Tenentismo e Crise da Primeira República",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na década de 1920, uma série de insurreições promovidas por jovens oficiais de baixa e média patente do Exército — como os 18 do Forte de Copacabana (1922), a Revolta Paulista de 1924 e a marcha épica da Coluna Prestes (1925-1927) — abalou os alicerces do regime oligárquico. Os chamados 'tenentes' reivindicavam reformas morais na política, a introdução do voto secreto e o fortalecimento do poder centralizador do Estado nacional.",
      source: "Boris Fausto, História do Brasil. São Paulo: Edusp."
    },
    prompt: "O movimento tenentista dos anos 1920 expressou os anseios das camadas médias urbanas brasileiras ao combater prioritariamente:",
    options: [
      { id: "a", text: "a política do café com leite e a hegemonia das oligarquias agrárias tradicionais baseadas no controle eleitoral fraudulento.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o modelo capitalista industrial, propondo a coletivização imediata dos latifúndios rurais sob controle soviético.", isCorrect: false, distractorRationale: "O tenentismo inicial tinha programa reformista liberal-burguês, moralista e patriótico, sem intenção de abolir a propriedade privada." },
      { id: "c", text: "a presença das Forças Armadas no cenário político, defendendo o desarmamento total do Exército nacional.", isCorrect: false, distractorRationale: "Os tenentes viam o próprio Exército como a instituição moralmente capacitada para 'salvar a pátria'." },
      { id: "d", text: "a criação do salário mínimo e das primeiras leis de proteção aos trabalhadores fabris urbanos.", isCorrect: false, distractorRationale: "A legislação trabalhista não era combatida pelos tenentes; muitos aderiram à Revolução de 1930 que criou o Ministério do Trabalho." },
      { id: "e", text: "a laicização do Estado consagrada na Constituição de 1891, exigindo o retorno do catolicismo como religião oficial.", isCorrect: false, distractorRationale: "O movimento não tinha aspirações clericais, mantendo a defesa do Estado laico republicano." }
    ],
    detailedExplanation: {
      summary: "O tenentismo canalizou o descontentamento das classes médias das cidades contra o controle exclusivo das oligarquias paulistas e mineiras sobre a República.",
      stepByStep: [
        "Passo 1: Identificar a base social do tenentismo: setores médios urbanos em crescimento que não tinham representação política efetiva no sistema coronelista da Primeira República.",
        "Passo 2: Analisar as bandeiras do movimento: voto secreto (para acabar com o voto de cabresto), independência do Poder Judiciário, educação pública obrigatória e moralização da administração pública.",
        "Passo 3: Reconhecer os desdobramentos: a insatisfação militar e civil culminou na Revolução de 1930, que derrubou Washington Luís e colocou Getúlio Vargas no poder.",
        "Passo 4: A alternativa 'a' sintetiza com exatidão o alvo central de contestação do movimento."
      ],
      coreConcept: "Tenentismo, crise da República Velha e transição para a modernidade do Estado brasileiro.",
      trapWarning: "Confundir o tenentismo da década de 1920 com comunismo (Luís Carlos Prestes só aderiu formalmente ao marxismo e ao PCB anos depois de liderar a marcha da Coluna)."
    },
    commonTraps: ["confundir_tenentismo_com_comunismo", "achar_que_eram_contra_a_centralizacao_estatal"],
    tags: ["tenentismo", "coluna_prestes", "crise_oligárquica", "anos_1920"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-014",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História do Brasil",
    subtopic: "Movimento Operário e a Greve Geral de 1917",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em julho de 1917, a cidade de São Paulo parou diante da primeira grande greve geral do operariado brasileiro. Fábricas têxteis, bondes, comércio e oficinas foram paralisados por mais de 40 mil trabalhadores. O estopim da revolta foi o assassinato do jovem sapateiro anarquista José Martinez pela polícia durante uma manifestação pacífica no bairro do Brás.",
      source: "Paulo Sérgio Pinheiro, O Proletariado Industrial na Primeira República."
    },
    prompt: "A eclosão e a articulação da Greve Geral de 1917 na Primeira República foram impulsionadas preponderantemente pela corrente ideológica do:",
    options: [
      { id: "a", text: "trabalhismo varguista, organizado sob sindicatos atrelados financeiramente ao Ministério do Trabalho.", isCorrect: false, distractorRationale: "O Ministério do Trabalho e a CLT foram criações varguistas das décadas de 1930 e 1940; em 1917, não existia legislação sindical oficial." },
      { id: "b", text: "anarcossindicalismo, que defendia a ação direta dos trabalhadores sem intermediação de partidos políticos ou do Estado burguês.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "integralismo fascista, que combatia as greves operárias em prol da conciliação corporativista nacional.", isCorrect: false, distractorRationale: "A Ação Integralista Brasileira (AIB) só surgiu em 1932 com Plínio Salgado e combatia as lideranças operárias de esquerda." },
      { id: "d", text: "socialismo parlamentar, focado exclusivamente na eleição de deputados federais pelo voto facultativo.", isCorrect: false, distractorRationale: "O operariado não tinha acesso efetivo ao parlamento na Primeira República e os anarquistas rejeitavam a via parlamentar." },
      { id: "e", text: "liberalismo econômico, articulado pelos grandes donos das fábricas paulistas para diminuir tarifas alfandegárias.", isCorrect: false, distractorRationale: "A greve era uma revolta dos operários explorados contra as jornadas abusivas de até 14 horas impostas pelos industriais liberais." }
    ],
    detailedExplanation: {
      summary: "O anarcossindicalismo, trazido por levas de imigrantes europeus (sobretudo italianos e espanhóis), foi a força motriz do movimento operário brasileiro até a década de 1920.",
      stepByStep: [
        "Passo 1: Reconhecer o contexto fabril em 1917: jornadas extenuantes de 12 a 16 horas diárias, trabalho infantil, ausência de descanso remunerado, falta de indenização por acidentes e inflação gerada pela Primeira Guerra Mundial.",
        "Passo 2: Identificar a ideologia predominante da época: anarcossindicalismo (ação direta, greve geral como arma de emancipação e independência absoluta em relação ao Estado e aos partidos).",
        "Passo 3: Lembrar da célebre frase atribuída a Washington Luís: 'A questão social é um caso de polícia', resumindo a resposta repressiva do Estado oligárquico aos protestos.",
        "Passo 4: A opção 'b' descreve corretamente a liderança anarcossindicalista de 1917."
      ],
      coreConcept: "Anarcossindicalismo, movimento operário na Primeira República e a Greve Geral de 1917.",
      trapWarning: "Atribuir a greve de 1917 ao comunismo varguista ou a sindicatos atrelados ao Estado, os quais só surgiram a partir dos anos 1930."
    },
    commonTraps: ["associar_a_greve_a_vargas_ou_clt", "confundir_anarquismo_com_integralismo"],
    tags: ["greve_geral_1917", "anarcossindicalismo", "movimento_operario", "sao_paulo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-015",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "Golpe de 1964 e as Reformas de Base",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No dia 13 de março de 1964, no Comício da Central do Brasil, o presidente João Goulart assinou decretos que encampavam refinarias privadas de petróleo e desapropriavam terras às margens de rodovias federais para a reforma agrária, conclamando o Congresso a votar as 'Reformas de Base' (agrária, tributária, eleitoral e universitária). Em reação, em 19 de março, milhares de manifestantes de classe média e membros da Igreja Católica marcharam na 'Marcha da Família com Deus pela Liberdade' em São Paulo.",
      source: "Thomas Skidmore, Brasil: de Castelo a Tancredo. Rio de Janeiro: Paz e Terra."
    },
    prompt: "A deposição de João Goulart em 31 de março de 1964 resultou de uma coalizão civil-militar que utilizou politicamente o contexto da Guerra Fria para:",
    options: [
      { id: "a", text: "justificar a intervenção militar contra uma suposta 'ameaça comunista' e deter reformas estruturais que contrariavam elites latifundiárias e empresariais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "implantar imediatamente um modelo econômico autossuficiente e fechar as fronteiras a multinacionais norte-americanas.", isCorrect: false, distractorRationale: "O regime militar aliou-se estreitamente aos capitais norte-americanos e estimulou a entrada de empresas multinacionais." },
      { id: "c", text: "garantir a aprovação integral da reforma agrária radical sob a coordenação das Ligas Camponesas.", isCorrect: false, distractorRationale: "O golpe reprimiu violentamente as Ligas Camponesas e suspendeu as propostas de reforma agrária de Jango." },
      { id: "d", text: "atender às ordens diretas da União Soviética para desestabilizar os governos democráticos do Cone Sul.", isCorrect: false, distractorRationale: "O golpe foi abertamente anticomunista e teve apoio diplomático e logístico dos Estados Unidos (Operação Brother Sam)." },
      { id: "e", text: "restaurar a Constituição de 1891 e restituir o voto de cabresto nos estados nordestinos.", isCorrect: false, distractorRationale: "Os militares outorgaram novos Atos Institucionais e a Constituição de 1967, não restaurando a de 1891." }
    ],
    detailedExplanation: {
      summary: "O Golpe de 1964 articulou setores das Forças Armadas, empresários (IPES/IBAD), proprietários rurais e a classe média conservadora sob o pretexto do perigo vermelho para abortar as Reformas de Base.",
      stepByStep: [
        "Passo 1: Entender o projeto de João Goulart: as Reformas de Base pretendiam democratizar o acesso à terra, modernizar a estrutura tributária e estender o direito de voto aos analfabetos.",
        "Passo 2: Analisar a oposição das elites: fazendeiros e industriais viam na reforma agrária e nos limites à remessa de lucros uma ameaça direta à propriedade privada e a seus privilégios.",
        "Passo 3: Considerar a Guerra Fria: após a Revolução Cubana de 1959, os Estados Unidos e a mídia hegemônica brasileira alimentaram o pânico moral de que o Brasil se tornaria uma 'segunda Cuba'.",
        "Passo 4: Concluir que a justificativa do 'anticomunismo' serviu de biombo ideológico para barrar a modernização distributiva do país."
      ],
      coreConcept: "Golpe Civil-Militar de 1964, Reformas de Base de Jango e Guerra Fria na América Latina.",
      trapWarning: "Achar que o golpe foi um movimento exclusivo de quartéis sem suporte de setores civis da sociedade (empresários, Igreja, classe média)."
    },
    commonTraps: ["ignorar_o_carater_civil_militar_do_golpe", "desconsiderar_as_reformas_de_base_como_pivô"],
    tags: ["golpe_1964", "reformas_de_base", "jango", "ditadura_militar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-016",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "O Ato Institucional nº 5 (AI-5) e os Anos de Chumbo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 13 de dezembro de 1968, o presidente militar Arthur da Costa e Silva promulgou o Ato Institucional nº 5 (AI-5). O ato autorizou o fechamento discricionário do Congresso Nacional, a cassação de mandatos eletivos, a suspensão da garantia constitucional do habeas corpus para acusados de crimes contra a segurança nacional e a imposição da censura prévia irrestrita à imprensa, música e teatro.",
      source: "Carlos Fico, Como Eles Agiam: Os subterrâneos da Ditadura Militar."
    },
    prompt: "A decretação do AI-5 marcou o início da fase mais autoritária da ditadura militar brasileira (os chamados 'anos de chumbo') ao provocar:",
    options: [
      { id: "a", text: "o aniquilamento dos instrumentos jurídicos de defesa do cidadão perante o Estado, oficializando a perseguição e a tortura contra opositores.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a abertura democrática ampla e irrestrita exigida pelas passeatas estudantis daquele ano.", isCorrect: false, distractorRationale: "O AI-5 foi o endurecimento máximo da repressão, exatamente o oposto de qualquer abertura." },
      { id: "c", text: "a convocação de uma Assembleia Constituinte livre eleita pelo sufrágio universal secreto.", isCorrect: false, distractorRationale: "O Congresso foi fechado e centenas de parlamentares foram cassados e presos." },
      { id: "d", text: "a extinção de todas as empresas estatais para privatizar os setores de energia e siderurgia.", isCorrect: false, distractorRationale: "O regime militar ampliou o número de estatais (como Telebras e Nuclebras) sob a doutrina de segurança e desenvolvimento." },
      { id: "e", text: "o rompimento unilateral das relações diplomáticas e comerciais com o governo dos Estados Unidos.", isCorrect: false, distractorRationale: "O Brasil manteve forte alinhamento geopolítico com o bloco ocidental liderado por Washington." }
    ],
    detailedExplanation: {
      summary: "O AI-5 representou o 'golpe dentro do golpe', eliminando as últimas aparências de legalidade institucional e permitindo a tortura sistemática de dissidentes políticos.",
      stepByStep: [
        "Passo 1: Entender a perda de direitos fundamentais: a suspensão do habeas corpus significava que qualquer cidadão podia ser sequestrado, detido incomunicável e torturado sem que a Justiça pudesse intervir.",
        "Passo 2: Reconhecer a censura de Estado: redações de jornais passaram a abrigar censores policiais, obrigando jornais a publicarem receitas de bolo e poemas no lugar de notícias censuradas.",
        "Passo 3: Identificar o período que se seguiu (Governo Médici, 1969-1974): ápice da repressão policial-militar e dos aparatos clandestinos de interrogatório (DOI-CODI e OBAN).",
        "Passo 4: A opção 'a' sintetiza com precisão o impacto civil e humanitário devastador do ato."
      ],
      coreConcept: "Ato Institucional nº 5 (AI-5), terrorismo de Estado e suspensão das liberdades civis na ditadura militar.",
      trapWarning: "Pensar que o AI-5 atingiu apenas grupos da guerrilha armada; ele atingiu deputados moderados, intelectuais, artistas, juízes e estudantes desarmados."
    },
    commonTraps: ["achar_que_o_habeas_corpus_foi_mantido", "confundir_ai5_com_abertura_politica"],
    tags: ["ai_5", "ditadura_militar", "direitos_humanos", "anos_de_chumbo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-017",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "Milagre Econômico e Concentração de Renda",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre 1969 e 1973, durante o governo do general Emílio Garrastazu Médici, a economia brasileira cresceu a taxas médias superiores a 10% ao ano, impulsionada pela construção de megaobras públicas (como a Ponte Rio-Niterói e a Rodovia Transamazônica). Ao mesmo tempo, o ministro da Fazenda Antônio Delfim Netto defendia a célebre metáfora de que era preciso 'primeiro fazer o bolo crescer para depois reparti-lo'. Os censos do IBGE de 1970 e 1980 revelaram que os 10% mais ricos aumentaram sua participação na renda nacional de 38% para quase 51%, enquanto os 50% mais pobres perderam renda relativa.",
      source: "Edmar Bacha e Herbert Klein, A Transição Incompleta: Brasil desde 1945."
    },
    prompt: "A análise crítica do chamado 'Milagre Econômico' demonstra que o expressivo crescimento dos índices macroeconômicos foi viabilizado socialmente por meio de:",
    options: [
      { id: "a", text: "uma ampla reforma tributária progressiva com taxação de grandes fortunas e heranças.", isCorrect: false, distractorRationale: "Não houve taxação de fortunas; a tributação permaneceu regressiva sobre o consumo." },
      { id: "b", text: "uma política deliberada de arrocho salarial e repressão aos sindicatos, que concentrou renda no topo da pirâmide social.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "um aumento massivo do poder de compra real do salário mínimo concedido aos trabalhadores rurais.", isCorrect: false, distractorRationale: "O salário mínimo real despencou durante a ditadura militar em função da fórmula de reajuste abaixo da inflação real (arrocho salarial)." },
      { id: "d", text: "um superávit primário obtido pelo desmantelamento total da dívida externa brasileira.", isCorrect: false, distractorRationale: "A dívida externa explodiu com empréstimos de petrodólares, tornando o país vulnerável à crise dos juros internacionais em 1979." },
      { id: "e", text: "uma erradicação inédita da mortalidade infantil e do analfabetismo nas periferias urbanas.", isCorrect: false, distractorRationale: "Indicadores de saneamento básico e saúde infantil pioraram em diversas capitais durante a fase do Milagre." }
    ],
    detailedExplanation: {
      summary: "O modelo econômico da ditadura militar acelerou o PIB através de empréstimos internacionais e compressão salarial da base operária, aprofundando o abismo social brasileiro.",
      stepByStep: [
        "Passo 1: Compreender o arrocho salarial: o governo militar impôs um controle rígido sobre os reajustes de salários, manipulando índices oficiais de inflação para baratear o custo da mão de obra.",
        "Passo 2: Entender o destino dos lucros: os subsídios fiscais e os ganhos de produtividade foram direcionados para empresas multinacionais e a classe média alta compradora de bens de consumo duráveis (automóveis e eletrodomésticos).",
        "Passo 3: A metáfora do bolo de Delfim Netto prometia repartição futura, mas o resultado concreto foi a explosão da desigualdade medida pelo coeficiente de Gini.",
        "Passo 4: A alternativa 'b' expõe a essência contraditória do Milagre: crescimento do PIB com empobrecimento relativo dos trabalhadores."
      ],
      coreConcept: "Milagre Econômico, arrocho salarial, endividamento externo e desigualdade socioeconômica no ENEM.",
      trapWarning: "Avaliar o Milagre apenas pelo crescimento numérico do PIB sem considerar a brutal disparidade distributiva e o salto da dívida externa."
    },
    commonTraps: ["confundir_aumento_do_pib_com_melhoria_da_distribuicao_de_renda"],
    tags: ["milagre_economico", "desigualdade", "arrocho_salarial", "ditadura_militar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-018",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "Abertura Política e a Lei da Anistia de 1979",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No final dos anos 1970, o governo do general Ernesto Geisel iniciou um processo de distensão política formulado como 'lenta, gradual e segura'. Em agosto de 1979, já sob o governo de João Figueiredo, foi promulgada a Lei nº 6.683 (Lei da Anistia), em meio a grandes campanhas lideradas pelo Comitê Brasileiro pela Anistia e pelo Movimento Feminino pela Anistia.",
      source: "Lúcio Flávio de Almeida, Ideologia do Desenvolvimento e Abertura Política."
    },
    prompt: "O desenho jurídico e político da Lei da Anistia de 1979 refletiu os limites da transição pactuada coordenada pelos militares ao estabelecer:",
    options: [
      { id: "a", text: "o julgamento público em tribunais civis de todos os oficiais envolvidos na tortura e no desaparecimento forçado de presos políticos.", isCorrect: false, distractorRationale: "Ao contrário de países como a Argentina, o Brasil não levou oficiais da repressão militar a julgamentos penais em 1979." },
      { id: "b", text: "uma anistia recíproca (ampla e irrestrita), estendendo o perdão legal também aos agentes do Estado acusados de crimes conexos e violações de direitos humanos.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "a perda imediata de aposentadorias de militares que serviram durante o regime autoritário.", isCorrect: false, distractorRationale: "Os militares preservaram integralmente seus postos, pensões e prerrogativas na transição." },
      { id: "d", text: "o fechamento compulsório de todos os partidos políticos de oposição recém-criados.", isCorrect: false, distractorRationale: "Em 1979 ocorreu o fim do bipartidarismo (Arena e MDB), permitindo a formação de legendas pluripartidárias (PMDB, PT, PDT, PTB, PDS)." },
      { id: "e", text: "a entrega da presidência da República no mesmo dia a um conselho civil independente.", isCorrect: false, distractorRationale: "Figueiredo permaneceu no poder militar até 1985, governando por mais seis anos após a anistia." }
    ],
    detailedExplanation: {
      summary: "A Lei da Anistia permitiu o retorno dos exilados políticos à vida pública, mas foi desenhada como um autoindulto que blindou os torturadores do regime militar contra punições penais.",
      stepByStep: [
        "Passo 1: Reconhecer a conquista popular: a lei atendeu a uma demanda cívica histórica ao libertar presos políticos e viabilizar o retorno de intelectuais, artistas e líderes sindicais exilados.",
        "Passo 2: Analisar a 'pegadinha' jurídica: o artigo 1º concedeu anistia a todos que cometeram crimes políticos ou 'conexos com estes'.",
        "Passo 3: Interpretação militar: os 'crimes conexos' foram interpretados pelo regime como escudo protetor para torturadores, delegados do DOPS e oficiais, impedindo a apuração das mortes e ocultações de cadáver.",
        "Passo 4: Concluir que a anistia de 1979 selou o pacto conservador de tutela e impunidade que marcou a redemocratização brasileira."
      ],
      coreConcept: "A Lei da Anistia (1979), justiça de transição e os limites do modelo de distensão controlada.",
      trapWarning: "Achar que a anistia beneficiou apenas a oposição; ela foi deliberadamente construída como anistia de 'mão dupla' para blindar agentes estatais da repressão."
    },
    commonTraps: ["achar_que_os_torturadores_foram_presos_em_1979", "desconhecer_o_conceito_de_crimes_conexos"],
    tags: ["lei_da_anistia", "geisel", "figueiredo", "justica_de_transicao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-019",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "A Constituição Cidadã de 1988 e os Direitos Sociais",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 5 de outubro de 1988, Ulisses Guimarães proclamou a nova Constituição brasileira na Assembleia Nacional Constituinte declarando:\n'A sociedade foi Rubens Paiva, não os facínoras que o mataram (...) A Nação quer mudar. A Nação deve mudar. A Nação vai mudar (...) Temos ódio à ditadura. Ódio e nojo!' Conhecida como a 'Constituição Cidadã', a Carta de 1988 instituiu o mais abrangente rol de direitos sociais da história do país.",
      source: "Discurso de Promulgação da CF/88, Ulysses Guimarães."
    },
    prompt: "Entre as conquistas históricas consagradas pelo texto constitucional de 1988 que transformaram a cidadania no Brasil, destaca-se:",
    options: [
      { id: "a", text: "a restrição do acesso à saúde pública apenas aos trabalhadores com carteira assinada vinculados à previdência.", isCorrect: false, distractorRationale: "Esse era o modelo excludente do INAMPS antes de 1988; a CF/88 criou o SUS com acesso universal e gratuito a toda a população." },
      { id: "b", text: "a instituição do Sistema Único de Saúde (SUS) como direito de todos e dever do Estado, além da demarcação de terras indígenas e o reconhecimento das comunidades quilombolas.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "o estabelecimento da censura prévia como prerrogativa legal do Ministério da Justiça sobre jornais e emissoras de TV.", isCorrect: false, distractorRationale: "O artigo 220 da CF/88 vedou taxativamente qualquer tipo de censura de natureza política, ideológica e artística." },
      { id: "d", text: "a extinção do voto feminino e do voto dos analfabetos para restringir a participação política aos graduados.", isCorrect: false, distractorRationale: "A CF/88 garantiu o voto facultativo aos jovens de 16 e 17 anos e aos analfabetos, além de consagrar o voto universal feminino." },
      { id: "e", text: "a proibição absoluta de greves e a subordinação obrigatória dos sindicatos ao Executivo federal.", isCorrect: false, distractorRationale: "A CF/88 assegurou a plena liberdade e autonomia sindical e o direito de greve a trabalhadores civis." }
    ],
    detailedExplanation: {
      summary: "A Constituição de 1988 representou a refundação democrática da República com o estado de bem-estar social, universalização da saúde (SUS) e direitos territoriais e identitários de minorias.",
      stepByStep: [
        "Passo 1: Reconhecer a ruptura com o autoritarismo militar: criminalização da tortura como crime inafiançável e imprescritibilidade do racismo.",
        "Passo 2: Analisar a universalização social: criação do tripé da Seguridade Social (Saúde, Previdência e Assistência Social), dando origem ao SUS universal.",
        "Passo 3: Identificar a cidadania originária: reconhecimento dos direitos territoriais originários dos povos indígenas (Art. 231) e o direito de posse aos remanescentes de quilombos (ADCT 68).",
        "Passo 4: A alternativa 'b' contempla fielmente o núcleo cidadão da Constituição de 1988."
      ],
      coreConcept: "Constituição de 1988, cidadania ampliada, Seguridade Social e direitos das populações tradicionais no ENEM.",
      trapWarning: "Achar que o SUS existia antes da CF/88; antes de 1988, quem não tinha carteira assinada dependia de Santas Casas de caridade para internação."
    },
    commonTraps: ["confundir_sus_com_inamps", "desconhecer_o_reconhecimento_indigena_e_quilombola_na_cf88"],
    tags: ["constituicao_1988", "sus", "cidadania", "direitos_indigenas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-HIST-020",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "O Plano Real e o Fim da Hiperinflação Inercial",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na primeira metade da década de 1990, o Brasil enfrentava taxas astronômicas de hiperinflação que chegavam a ultrapassar 2.000% ao ano, corroendo diariamente os salários da população de baixa renda. Planos anteriores (Plano Cruzado, Plano Bresser, Plano Collor) haviam fracassado por recorrer a congelamentos forçados de preços. Em 1993-1994, a equipe econômica do Ministério da Fazenda no governo Itamar Franco concebeu e implementou o Plano Real em três fases sequenciais.",
      source: "Gustavo Franco, A Moeda e a Lei: Uma história do Real."
    },
    prompt: "O elemento técnico e estratégico inovador que permitiu ao Plano Real eliminar a hiperinflação inercial sem recorrer ao confisco de poupanças ou ao congelamento de preços foi:",
    options: [
      { id: "a", text: "a dolarização integral de todas as transações comerciais do país com abandono permanente do Banco Central.", isCorrect: false, distractorRationale: "O Brasil nunca dolarizou sua economia (ao contrário de países como o Equador); criou uma nova moeda nacional (o Real)." },
      { id: "b", text: "a adoção prévia da Unidade Real de Valor (URV) como indexador virtual diário para sincronizar preços relativos antes da emissão da nova moeda.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "a estatização de todos os supermercados e redes de distribuição atacadista de alimentos.", isCorrect: false, distractorRationale: "O governo não estatizou o comércio; adotou abertura comercial com redução de tarifas alfandegárias." },
      { id: "d", text: "o perdão generalizado de todas as dívidas tributárias das grandes empresas exportadoras.", isCorrect: false, distractorRationale: "Pelo contrário, o plano exigiu disciplina fiscal inicial com o Fundo Social de Emergência (FSE)." },
      { id: "e", text: "a proibição legal de emissão de cartões de crédito e cheques em território nacional.", isCorrect: false, distractorRationale: "Os meios de pagamento bancários continuaram operando plenamente durante a transição monetária." }
    ],
    detailedExplanation: {
      summary: "A URV (Unidade Real de Valor) atuou como uma moeda virtual estável de conta que alinhou e sincronizou a memória inflacionária de preços e contratos antes da conversão para a cédula do Real em 1º de julho de 1994.",
      stepByStep: [
        "Passo 1: Compreender o diagnóstico da inflação inercial: todos reajustavam preços preventivamente olhando para a inflação passada, gerando uma espiral descontrolada de aumentos diários.",
        "Passo 2: A estratégia das três fases do Plano Real:\n- 1ª Fase: Ajuste fiscal (Fundo Social de Emergência);\n- 2ª Fase: Criação da URV como unidade de conta estável que corrigia valores diariamente em relação ao Cruzeiro Real;\n- 3ª Fase: Transformação da URV na nova moeda soberana (o Real - R$) na proporção de 1 Real = 1 URV = 2.750 Cruzeiros Reais.",
        "Passo 3: A ausência de choques heterodoxos: não houve surpresa, quebra de contratos nem confisco de contas (como no Plano Collor em 1990), o que garantiu credibilidade e estabilidade sustentada.",
        "Passo 4: A opção 'b' descreve o mecanismo da URV com exatidão pedagógica."
      ],
      coreConcept: "Plano Real (1994), Unidade Real de Valor (URV), combate à inflação inercial e estabilidade monetária.",
      trapWarning: "Confundir o Plano Real com os planos heterodoxos anteriores (Cruzado e Collor) que congelavam preços na canetada ou confiscavam poupança."
    },
    commonTraps: ["confundir_o_real_com_congelamento_ou_confisco_do_plano_collor", "achar_que_o_brasil_dolarizou_sua_moeda"],
    tags: ["plano_real", "urv", "inflacao_inercial", "itamar_franco"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-REP-021",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil República",
    subtopic: "Revolta da Chibata (1910) e Cidadania Negra",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em novembro de 1910, marinheiros sublevaram-se na Baía de Guanabara a bordo dos principais encouraçados da Armada brasileira (Minas Geraes e São Paulo), apontando seus canhões contra a sede do governo republicano no Rio de Janeiro. Liderados por João Cândido, o 'Almirante Negro', redigiram um memorial ao presidente Hermes da Fonseca exigindo o fim imediato dos castigos corporais com chibatadas, o aumento dos soldos e a demissão de oficiais truculentos.",
      source: "CARVALHO, José Murilo de. Cidadania no Brasil: O Longo Caminho. Civilização Brasileira."
    },
    prompt: "A Revolta da Chibata expressou uma contradição central da Primeira República brasileira ao evidenciar que:",
    options: [
      { id: "a", text: "a proclamação republicana manteve nos quartéis e na hierarquia naval a lógica disciplinar violenta herdada do período colonial e escravocrata, negando plenos direitos de cidadania à marujada predominantemente negra e mestiça.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "os marinheiros pretendiam restaurar a monarquia bragantina e coroar a Princesa Isabel como imperatriz absoluta do Brasil.", isCorrect: false, distractorRationale: "A revolta reivindicava direitos humanos e trabalhistas contra a violência disciplinar, sem qualquer projeto de restauração imperial." },
      { id: "c", text: "o Exército brasileiro apoiava integralmente os marujos rebeldes para fechar o Congresso e instaurar o socialismo soviético.", isCorrect: false, distractorRationale: "O episódio ocorreu em 1910, antes da Revolução Russa (1917), e o Exército participou da repressão aos revoltosos." },
      { id: "d", text: "a sublevação foi financiada pela Coroa britânica para confiscar as jazidas de ferro e café do litoral sudeste.", isCorrect: false, distractorRationale: "A motivação foi endógena, nascida da revolta contra o suplício físico imposto aos marinheiros de baixa patente." },
      { id: "e", text: "a Marinha imperial já havia abolido totalmente os castigos físicos desde a Guerra do Paraguai em 1870.", isCorrect: false, distractorRationale: "Os castigos com chibata continuaram vigentes na Marinha mesmo após a República até a eclosão da revolta de 1910." }
    ],
    detailedExplanation: {
      summary: "A Revolta da Chibata denunciou o abismo entre o discurso modernizador da República oligárquica e a persistência de práticas arcaicas escravocratas nos corpos de marinheiros negros e pobres.",
      stepByStep: [
        "1. Contexto: A República brasileira se proclamava moderna e civilizada, adquirindo encouraçados de última geração tipo dreadnought.",
        "2. Realidade interna: As tripulações de marinheiros (majoritariamente homens negros e pobres) continuavam sujeitas a castigos com chibata aplicados por oficiais brancos da elite.",
        "3. Estopim: A punição com 250 chibatadas imposta ao marinheiro Marcelino Rodrigues desencadeou o levante sob liderança serena de João Cândido.",
        "4. Significado histórico: Luta antirracista por dignidade e cidadania real no início do século XX."
      ],
      coreConcept: "Revolta da Chibata (1910), Cidadania Negra e Permanências Escravocratas",
      trapWarning: "No ENEM: A Revolta da Chibata NÃO foi uma revolta contra a modernização naval técnica, mas sim contra a desumanização e os castigos corporais impostos aos marinheiros."
    },
    commonTraps: [
      "Confundir Revolta da Chibata (1910) com a Revolta da Armada (1893-1894, disputa entre Exército e Marinha monarquista)",
      "Achar que a revolta tinha caráter de restauração monárquica"
    ],
    tags: ["revolta-da-chibata", "joao-candido", "primeira-republica", "cidadania", "racismo-estrutural"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-REP-022",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Brasil República",
    subtopic: "Guerra de Canudos (1896-1897) e Conflitos Rurais",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A comunidade de Belo Monte, fundada por Antônio Conselheiro às margens do rio Vaza-Barris no sertão da Bahia, reuniu cerca de 25 mil sertanejos despossuídos, ex-escravizados e caboclos. Vivendo em regime comunitário de subsistência e religiosidade messiânica, a comunidade foi tratada pelas elites latifundiárias locais e pelos jornais republicanos da capital federal como um perigoso 'reduto fanático de restauração monárquica' que ameaçava as instituições republicanas.",
      source: "CUNHA, Euclides da. Os Sertões: Campanha de Canudos. 1902."
    },
    prompt: "A intensa repressão militar que culminou no massacre de Canudos pelo exército republicano após quatro expedições decorreu fundamentalmente do:",
    options: [
      { id: "a", text: "incômodo gerado pela autonomia social e econômica do arraial perante o poder dos coronéis latifundiários e da Igreja tradicional, aliado ao medo conspiratório republicano de ameaça à nova ordem institucional.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "desejo de Antônio Conselheiro de proclamar um califado islâmico no semiárido nordestino.", isCorrect: false, distractorRationale: "Antônio Conselheiro pregava uma religiosidade católica messiânica popular, sem vínculos com o islamismo." },
      { id: "c", text: "alinhamento direto dos conselheiristas com a guerrilha anarquista operária do ABC paulista.", isCorrect: false, distractorRationale: "Não havia ligação entre o messianismo sertanejo do sertão baiano e o operariado anarcossindicalista urbano de São Paulo." },
      { id: "d", text: "acordo formal firmado por Canudos com os Estados Unidos para ceder a bacia do São Francisco.", isCorrect: false, distractorRationale: "Canudos era um vilarejo autônomo e isolado, sem qualquer negociação com potências internacionais." },
      { id: "e", text: "ataque preventivo das forças federais para conter uma epidemia de febre amarela que os sertanejos transmitiam.", isCorrect: false, distractorRationale: "O conflito foi estritamente político-social e fundiário, e não uma intervenção sanitária." }
    ],
    detailedExplanation: {
      summary: "Canudos atraía milhares de sertanejos explorados que deixavam as fazendas dos coronéis em busca de terra, proteção e vida digna. Essa perda de mão de obra barata ameaçou o poder oligárquico dos latifúndios baianos, justificando o massacre militar sob a retórica de defesa da República.",
      stepByStep: [
        "1. Aspecto socioeconômico: Belo Monte oferecia alternativa concreta de vida comunitária fora do jugo semifeudal dos coronéis e do pagamento de dízimos exploratórios.",
        "2. Aspecto político: Os coronéis locais pressionaram o governo estadual e federal alegando que Conselheiro conspirava para o retorno da Monarquia.",
        "3. Três expedições militares foram fragorosamente derrotadas pelos conselheiristas no terreno acidentado da Caatinga.",
        "4. Quarta expedição: Artilharia pesada do Exército destruiu totalmente o povoado em 1897, degolando milhares de sobreviventes.",
        "5. Conclusão: Euclides da Cunha imortalizou a denúncia em 'Os Sertões', qualificando o desfecho como crime da nacionalidade."
      ],
      coreConcept: "Guerra de Canudos (1896-1897), Messianismo Sertanejo e Coronelismo",
      trapWarning: "No ENEM: Não interprete Canudos apenas como 'fanatismo religioso cego'. O messianismo era a linguagem cultural sertaneja para canalizar profundas demandas de terra, pão e justiça social."
    },
    commonTraps: [
      "Acreditar na versão da imprensa da época de que Canudos era uma conspiração armada monárquica internacional",
      "Confundir Canudos (Bahia, 1896-1897) com a Guerra do Contestado (Santa Catarina/Paraná, 1912-1916)"
    ],
    tags: ["canudos", "antonio-conselheiro", "euclides-da-cunha", "messianismo", "coronelismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-REP-023",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Brasil República",
    subtopic: "Movimento Tenentista e a Coluna Prestes (1925-1927)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao longo da década de 1920, jovens oficiais de baixa e média patente do Exército brasileiro protagonizaram levantes armados de contestação à ordem oligárquica da República Velha. Após a Revolta dos 18 do Forte (1922) e a Revolução Paulista de 1924, organizou-se a Coluna Prestes-Miguel Costa, que percorreu cerca de 25.000 quilômetros pelo sertão do interior do Brasil durante quase três anos sem nunca ter sido derrotada pelas tropas legalistas.",
      source: "FAUSTO, Boris. História do Brasil. Edusp."
    },
    prompt: "Entre as principais reivindicações políticas e institucionais defendidas pelos tenentes em marcha destacava-se a:",
    options: [
      { id: "a", text: "adoção do voto secreto obrigatório para combater as fraudes do voto de cabresto, combinada com a moralização pública, o ensino primário gratuito e a centralização do poder estatal.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "implantação imediata da ditadura do proletariado e coletivização compulsória de todas as pequenas propriedades rurais.", isCorrect: false, distractorRationale: "O tenentismo inicial tinha caráter liberal-burguês e moralizador, sem orientação comunista ou de coletivização agrária." },
      { id: "c", text: "devolução da soberania política e administrativa da federação às monarquias absolutistas europeias.", isCorrect: false, distractorRationale: "Os tenentes eram profundamente nacionalistas e republicanos." },
      { id: "d", text: "extinção completa das Forças Armadas regulares e criação de milícias estaduais comandadas pelos governadores.", isCorrect: false, distractorRationale: "Eles defendiam o fortalecimento do Exército nacional contra os exércitos estaduais das oligarquias paulista e mineira." },
      { id: "e", text: "permanência indefinida da política do café com leite e do controle político exercido pela Comissão Verificadora de Poderes.", isCorrect: false, distractorRationale: "O tenentismo combatia vigorosamente o arranjo oligárquico do café com leite e as fraudes da degola política." }
    ],
    detailedExplanation: {
      summary: "O tenentismo representou a insatisfação da classe média urbana e de setores militares contra a República Oligárquica. Defendiam moralização da política, voto secreto (para acabar com as fraudes eleitorais) e fortalecimento do Estado nacional.",
      stepByStep: [
        "1. Crítica à Primeira República: A 'política dos governadores' e o 'coronelismo' sustentavam a fraude eleitoral institucionalizada pelo voto aberto (voto de cabresto).",
        "2. Perfil social: Oficiais de classe média que se enxergavam como a 'reserva moral da nação' encarregada de regenerar a pátria.",
        "3. Pautas centrais: Voto secreto, Justiça Eleitoral independente, expansão da educação pública e fortalecimento do poder central federal contra os coronéis estaduais.",
        "4. Desdobramento: O tenentismo abriu caminho direto para a Revolução de 1930, que levou Getúlio Vargas ao poder e sepultou a República Oligárquica."
      ],
      coreConcept: "Tenentismo, Coluna Prestes e Crise da República Oligárquica",
      trapWarning: "No ENEM: Luís Carlos Prestes só aderiu formalmente ao Marxismo e ao Partido Comunista ANOS DEPOIS da marcha da Coluna (na década de 1930); o movimento tenentista dos anos 1920 era nacionalista e reformista liberal."
    },
    commonTraps: [
      "Rotular a Coluna Prestes nos anos 1920 como um movimento comunista soviético",
      "Achar que os tenentes queriam a descentralização do poder para os estados"
    ],
    tags: ["tenentismo", "coluna-prestes", "voto-secreto", "republica-velha", "anos-1920"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-REP-024",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Brasil República",
    subtopic: "Ato Institucional nº 5 (AI-5 de 1968) e Ditadura Militar",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 13 de dezembro de 1968, o presidente marechal Arthur da Costa e Silva promulgou em cadeia nacional de rádio e televisão o Ato Institucional nº 5 (AI-5). O ato concedeu poderes quase ilimitados ao Chefe do Poder Executivo, permitindo o fechamento por prazo indeterminado do Congresso Nacional, a intervenção direta nos estados e municípios, a cassação de mandatos de parlamentares e a suspensão da garantia de habeas corpus para crimes contra a segurança nacional.",
      source: "GASPARI, Elio. A Ditadura Envergonhada. Companhia das Letras."
    },
    prompt: "A decretação do AI-5 marcou o início da fase mais autoritária da Ditadura Militar brasileira (os chamados 'anos de chumbo'), cujo impacto jurídico e político mais grave sobre a sociedade foi:",
    options: [
      { id: "a", text: "a institucionalização do terrorismo de Estado e da censura prévia irrestrita, retirando qualquer proteção judiciária contra prisões arbitrárias, torturas e perseguições políticas promovidas pelos órgãos de repressão (como DOI-CODI e OBAN).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o estabelecimento imediato de eleições diretas para presidente da República com sufrágio universal irrestrito.", isCorrect: false, distractorRationale: "O AI-5 endureceu o regime e suprimiu liberdades civis, afastando qualquer hipótese de eleições diretas." },
      { id: "c", text: "a legalização de todos os partidos de oposição de esquerda clandestinos na legalidade eleitoral.", isCorrect: false, distractorRationale: "Partidos de esquerda foram sumariamente criminalizados e perseguidos com extrema violência após o AI-5." },
      { id: "d", text: "a entrega do controle das Forças Armadas a juízes civis da Suprema Corte de Haia.", isCorrect: false, distractorRationale: "O tribunal internacional não teve jurisdição nem participação na estrutura da ditadura militar brasileira." },
      { id: "e", text: "a abolição das Forças Armadas e sua substituição por tribunais corporativos operários.", isCorrect: false, distractorRationale: "As Forças Armadas eram exatamente quem detinha o monopólio e o comando do aparelho estatal ditatorial." }
    ],
    detailedExplanation: {
      summary: "O AI-5 rasgou qualquer resquício de constitucionalismo liberal da Constituição de 1967. Ao suspender o habeas corpus para 'crimes políticos', qualquer cidadão podia ser sequestrado, detido incomunicável e torturado sem que a Justiça pudesse intervir.",
      stepByStep: [
        "1. Contexto: 1968 foi marcado por intensa contestação social (Passeata dos Cem Mil, greves operárias de Contagem e Osasco, discurso do deputado Márcio Moreira Alves).",
        "2. A 'linha dura' militar reagiu com o AI-5 em dezembro de 1968.",
        "3. Medidas autoritárias: Fechamento do Congresso, demissão sumária de servidores e professores universitários, censura à imprensa e às artes.",
        "4. O ponto mais cruel: Suspensão do habeas corpus, dando carta-branca ao aparato repressivo clandestino para torturar e assassinar opositores nos porões do regime.",
        "5. O AI-5 vigorou por uma década, sendo revogado apenas em dezembro de 1978 no governo Geisel."
      ],
      coreConcept: "AI-5 (1968), Anos de Chumbo e Suspensão de Garantias Fundamentais",
      trapWarning: "No ENEM: A suspensão do HABEAS CORPUS é a chave jurídica do AI-5. Sem habeas corpus, não há freio legal contra o abuso de autoridade e a tortura estatal."
    },
    commonTraps: [
      "Achar que o AI-5 vigorou apenas por algumas semanas (ele durou de 1968 a 1978, 10 anos)",
      "Confundir o AI-5 (1968, endurecimento máximo) com a Lei de Anistia (1979, distensão política)"
    ],
    tags: ["ditadura-militar", "ai-5", "anos-de-chumbo", "habeas-corpus", "direitos-humanos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-REP-025",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Brasil República",
    subtopic: "A Campanha das Diretas Já (1984) e a Redemocratização",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre o final de 1983 e abril de 1984, milhões de brasileiros ocuparam avenidas e praças públicas em comícios multitudinários em cidades como São Paulo, Rio de Janeiro e Belo Horizonte, erguendo cartazes e vestindo amarelo em apoio à Proposta de Emenda Constitucional nº 05/1983 (a Emenda Dante de Oliveira). A emenda propunha o restabelecimento imediato de eleições diretas para a Presidência da República no mesmo ano de 1984.",
      source: "SKIDMORE, Thomas E. Brasil: De Castelo a Tancredo (1964-1985). Paz e Terra."
    },
    prompt: "Embora a Emenda Dante de Oliveira não tenha alcançado o quórum de dois terços na Câmara dos Deputados em 25 de abril de 1984, o movimento das 'Diretas Já' foi decisivo para a história brasileira porque:",
    options: [
      { id: "a", text: "evidenciou o esgotamento irrevogável da legitimidade civil e social da Ditadura Militar, unificando a oposição e pavimentando a vitória da Aliança Democrática (Tancredo Neves e José Sarney) no Colégio Eleitoral em 1985.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "provocou a decretação imediata de um golpe militar com fechamento do país por mais três décadas.", isCorrect: false, distractorRationale: "O regime militar já estava desgastado economicamente pela hiperinflação e não tinha coesão para prolongar a ditadura." },
      { id: "c", text: "conseguiu aprovar na marra a eleição direta imediata que empossou Ulysses Guimarães presidente em 1984.", isCorrect: false, distractorRationale: "A emenda NÃO foi aprovada por falta de 22 votos; a primeira eleição direta para presidente só ocorreu em 1989." },
      { id: "d", text: "resultou na renúncia coletiva de todos os generais e na entrega do governo ao Partido Comunista Brasileiro.", isCorrect: false, distractorRationale: "A transição brasileira foi lenta, gradual e pactuada pela via parlamentar do Colégio Eleitoral." },
      { id: "e", text: "extinguiu a Constituição de 1988 antes mesmo de sua elaboração pelos constituintes.", isCorrect: false, distractorRationale: "A Assembleia Nacional Constituinte foi instalada em 1987 justamente como fruto do processo de redemocratização." }
    ],
    detailedExplanation: {
      summary: "A campanha das 'Diretas Já' foi a maior mobilização popular da história republicana brasileira até então. Mesmo derrotada no plenário por manobra do governo Figueiredo, quebrou a base de sustentação do partido governista (PDS), levando dissidentes (Frente Liberal) a apoiarem Tancredo Neves contra Paulo Maluf.",
      stepByStep: [
        "1. Cenário: Crise econômica galopante (dívida externa, inflação de mais de 200% ao ano) e abertura política 'lenta, gradual e segura'.",
        "2. Mobilização de massas: Artistas, líderes sindicais, governadores eleitos em 1982 e partidos de oposição (PMDB, PT, PDT, PCdoB) uniram milhões nas ruas.",
        "3. Votação da Emenda Dante de Oliveira (25 de abril de 1984): obteve 298 votos a favor, mas faltaram 22 votos para os 2/3 exigidos.",
        "4. Consequência política: O impacto das ruas fraturou o PDS governista, viabilizando a eleição indireta de Tancredo Neves no Colégio Eleitoral em janeiro de 1985, encerrando 21 anos de ditadura militar."
      ],
      coreConcept: "Campanha das Diretas Já (1984) e a Transição Democrática Brasileira",
      trapWarning: "No ENEM: A emenda das Diretas Já NÃO foi aprovada! A primeira eleição direta com voto popular para presidente só aconteceu em 1989 (quando Fernando Collor venceu Lula no 2º turno)."
    },
    commonTraps: [
      "Achar que as Diretas Já venceram a votação no Congresso e elegeram Tancredo Neves pelo voto direto do povo",
      "Confundir a eleição indireta de 1985 (Colégio Eleitoral) com eleição direta"
    ],
    tags: ["diretas-ja", "redemocratizacao", "dante-de-oliveira", "tancredo-neves", "cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];



