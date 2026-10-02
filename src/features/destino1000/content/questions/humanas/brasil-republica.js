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
  }
];

