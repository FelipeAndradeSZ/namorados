export const QUESTIONS_ERA_VARGAS = [
  {
    id: 'HUM-VARGAS-001',
    area: 'humanas',
    competence: 3,
    skill: 13,
    topic: 'Era Vargas',
    subtopic: 'Revolução de 1930 e Governo Provisório',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'A chamada "Revolução de 1930" pôs fim à hegemonia política das oligarquias cafeeiras paulistas. O novo governo, chefiado por Getúlio Vargas, buscou centralizar o poder, nomeando interventores para os estados em substituição aos governadores eleitos.',
      source: 'FAUSTO, Boris. História do Brasil. São Paulo: Edusp, 2012. (Adaptado).'
    },
    prompt: 'A nomeação de interventores estaduais durante o Governo Provisório de Vargas teve como principal objetivo político:',
    options: [
      { id: 'a', text: 'garantir a autonomia das oligarquias regionais e a descentralização administrativa.', isCorrect: false, distractorRationale: 'Incorreta, pois a ação visava justamente o oposto: a centralização e a quebra da autonomia estadual.' },
      { id: 'b', text: 'fortalecer o poder do Executivo federal e enfraquecer as elites locais tradicionais.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'c', text: 'estabelecer um sistema democrático com eleições diretas e multipartidarismo.', isCorrect: false, distractorRationale: 'Incorreta. O Governo Provisório suspendeu a Constituição e não estabeleceu eleições imediatas.' },
      { id: 'd', text: 'favorecer a industrialização por meio da redução de impostos estaduais.', isCorrect: false, distractorRationale: 'Incorreta. Embora houvesse um projeto industrializante, o foco da nomeação de interventores era político e não estritamente tributário.' },
      { id: 'e', text: 'atender às demandas do movimento tenentista por uma revolução socialista.', isCorrect: false, distractorRationale: 'Incorreta. O tenentismo apoiou a centralização, mas não defendia o socialismo.' }
    ],
    detailedExplanation: {
      summary: 'A nomeação de interventores foi uma manobra de Vargas para concentrar o poder no governo federal e desmantelar as bases oligárquicas da República Velha.',
      stepByStep: [
        'Analisar o contexto da Revolução de 1930: fim do domínio paulista/mineiro.',
        'Compreender as primeiras medidas do Governo Provisório: suspensão da Constituição de 1891.',
        'Identificar a função dos interventores (geralmente tenentes) como agentes do poder central para neutralizar as antigas oligarquias.'
      ],
      coreConcept: 'Centralização do poder e fim do arranjo oligárquico da Primeira República.',
      trapWarning: 'Cuidado para não confundir os objetivos de modernização com a adoção de medidas democráticas. O Governo Provisório foi autoritário.'
    },
    tags: ['Era Vargas', 'Revolução de 1930', 'Política']
  },
  {
    id: 'HUM-VARGAS-002',
    area: 'humanas',
    competence: 3,
    skill: 15,
    topic: 'Era Vargas',
    subtopic: 'Revolução Constitucionalista de 1932',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Paulistas às armas! O governo ditatorial de Getúlio Vargas não cumpre suas promessas. Exigimos uma nova Constituição e a volta do Estado de Direito.',
      source: 'Panfleto da Revolução de 1932. (Adaptado).'
    },
    prompt: 'O movimento deflagrado em São Paulo em 1932, conhecido como Revolução Constitucionalista, caracterizou-se, em sua essência, por:',
    options: [
      { id: 'a', text: 'ser um levante operário que exigia melhores condições de trabalho nas fábricas de São Paulo.', isCorrect: false, distractorRationale: 'Incorreta. O movimento foi liderado pela elite paulista, não pelos operários.' },
      { id: 'b', text: 'uma aliança entre comunistas e integralistas para derrubar o governo provisório.', isCorrect: false, distractorRationale: 'Incorreta. A ANL (comunistas) e AIB (integralistas) surgiram com força anos depois, no Governo Constitucional.' },
      { id: 'c', text: 'reivindicar a elaboração de uma Constituição e a restituição da autonomia do estado de São Paulo.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'd', text: 'buscar a independência de São Paulo e a fundação de uma nova república no sul do país.', isCorrect: false, distractorRationale: 'Incorreta. Embora houvesse um sentimento regionalista forte, a principal exigência era constitucional, não separatista.' },
      { id: 'e', text: 'apoiar a permanência de Vargas no poder, desde que ele se aliasse aos cafeicultores.', isCorrect: false, distractorRationale: 'Incorreta. Os paulistas exigiam a constitucionalização do país, em oposição à ditadura do Governo Provisório.' }
    ],
    detailedExplanation: {
      summary: 'A Revolução de 1932 foi um levante da elite paulista insatisfeita com a perda de poder e a nomeação de interventores de fora do estado, exigindo uma nova Constituição.',
      stepByStep: [
        'Reconhecer a perda de hegemonia de São Paulo após 1930.',
        'Entender o descontentamento com a nomeação de João Alberto (não-paulista) como interventor.',
        'Concluir que a exigência de uma Constituição era o argumento legalista usado pela elite para tentar recuperar seu poder político.'
      ],
      coreConcept: 'Revolução Constitucionalista de 1932 como reação oligárquica de São Paulo sob o pretexto da legalidade.',
      trapWarning: 'Embora derrotada militarmente, a revolução atingiu seu objetivo político: a convocação de uma Assembleia Constituinte em 1933.'
    },
    tags: ['Era Vargas', 'Revolução de 1932', 'São Paulo']
  },
  {
    id: 'HUM-VARGAS-003',
    area: 'humanas',
    competence: 5,
    skill: 24,
    topic: 'Era Vargas',
    subtopic: 'Governo Constitucional: ANL x AIB',
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Na década de 1930, a polarização ideológica mundial refletiu-se no Brasil. De um lado, a Ação Integralista Brasileira (AIB), liderada por Plínio Salgado, inspirava-se no fascismo europeu. De outro, a Aliança Nacional Libertadora (ANL), liderada por Luís Carlos Prestes, aglutinava forças antifascistas e comunistas.',
      source: 'História do Brasil. Texto elaborado para fins didáticos.'
    },
    prompt: 'A dinâmica política brasileira durante o Governo Constitucional de Vargas (1934-1937) foi marcada pela radicalização ideológica. A tentativa de tomada de poder pela ANL e a posterior reação do governo de Vargas resultaram:',
    options: [
      { id: 'a', text: 'na consolidação da democracia representativa, com eleições diretas em 1938.', isCorrect: false, distractorRationale: 'Incorreta. As eleições de 1938 foram canceladas pelo Golpe do Estado Novo.' },
      { id: 'b', text: 'no enfraquecimento do integralismo, que foi imediatamente banido e reprimido pelo governo constitucional.', isCorrect: false, distractorRationale: 'Incorreta. O integralismo foi reprimido apenas após a instauração do Estado Novo em 1937/1938.' },
      { id: 'c', text: 'na Intentona Comunista de 1935, que serviu de pretexto para o endurecimento autoritário e posterior golpe do Estado Novo.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'd', text: 'em uma aliança pragmática entre Vargas e a ANL para combater o fascismo da AIB.', isCorrect: false, distractorRationale: 'Incorreta. Vargas considerava a ANL uma ameaça e a colocou na ilegalidade antes mesmo da Intentona.' },
      { id: 'e', text: 'na decretação do Plano Cohen, um documento verdadeiro que comprovava o plano integralista de assassinar Vargas.', isCorrect: false, distractorRationale: 'Incorreta. O Plano Cohen foi forjado (falso) e atribuía um plano de golpe aos comunistas, não aos integralistas.' }
    ],
    detailedExplanation: {
      summary: 'A polarização dos anos 1930 culminou no levante comunista de 1935 (Intentona), duramente reprimido por Vargas e utilizado como argumento para justificar a ditadura do Estado Novo em 1937.',
      stepByStep: [
        'Identificar os grupos polarizados: ANL (esquerda) e AIB (extrema-direita).',
        'Recordar o fechamento da ANL e a consequente Intentona Comunista de 1935.',
        'Entender como o "perigo comunista" foi explorado (Plano Cohen) para justificar a suspensão das eleições e o golpe de 1937.'
      ],
      coreConcept: 'Radicalização política dos anos 1930 e a utilização da Ameaça Comunista como legitimação do autoritarismo.',
      trapWarning: 'O Plano Cohen acusava os comunistas, não os integralistas. Foi uma farsa redigida por um capitão integralista (Olímpio Mourão Filho).'
    },
    tags: ['Era Vargas', 'Intentona Comunista', 'Fascismo']
  },
  {
    id: 'HUM-VARGAS-004',
    area: 'humanas',
    competence: 1,
    skill: 5,
    topic: 'Era Vargas',
    subtopic: 'Estado Novo e DIP',
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: 'application',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Criado em 1939, o Departamento de Imprensa e Propaganda (DIP) tornou-se o principal órgão da máquina ideológica do Estado Novo. Além de censurar os meios de comunicação, cabia ao DIP produzir material exaltando a figura do presidente Getúlio Vargas.',
      source: 'Acervo do CPDOC/FGV.'
    },
    prompt: 'Durante a ditadura do Estado Novo (1937-1945), a atuação do DIP foi fundamental para o projeto político varguista, caracterizando-se pela:',
    options: [
      { id: 'a', text: 'valorização da imprensa livre e da pluralidade de ideias políticas.', isCorrect: false, distractorRationale: 'Incorreta. O DIP operava sob estrita censura, impedindo a pluralidade.' },
      { id: 'b', text: 'difusão da imagem de Vargas como "Pai dos Pobres" e protetor da nação, unida à censura rigorosa.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'c', text: 'promoção de ideias comunistas para atrair o apoio da classe operária.', isCorrect: false, distractorRationale: 'Incorreta. O Estado Novo era anticomunista.' },
      { id: 'd', text: 'descentralização da cultura, permitindo que cada estado mantivesse suas propagandas locais autônomas.', isCorrect: false, distractorRationale: 'Incorreta. O Estado Novo era altamente centralizador (queima das bandeiras estaduais).' },
      { id: 'e', text: 'exclusiva difusão pelo rádio, negligenciando cartilhas escolares e manifestações cívicas.', isCorrect: false, distractorRationale: 'Incorreta. O DIP usava o rádio (A Voz do Brasil), cartilhas escolares, jornais, cinema e cartilhas cívicas.' }
    ],
    detailedExplanation: {
      summary: 'O DIP exercia um duplo papel no Estado Novo: a censura prévia para calar a oposição e a propaganda oficial para construir a imagem de Vargas como líder carismático e salvador da pátria.',
      stepByStep: [
        'Analisar o conceito do Estado Novo: ditadura de feição fascista e populista.',
        'Identificar a função do DIP: controle da informação e propaganda do governo.',
        'Relacionar a propaganda oficial com a construção do mito do "Pai dos Pobres".'
      ],
      coreConcept: 'Mecanismos de controle e propaganda política em regimes autoritários.',
      trapWarning: 'Lembre-se que o DIP não apenas censurava, mas também produzia conteúdo ativamente (ex: A Hora do Brasil).'
    },
    tags: ['Era Vargas', 'Estado Novo', 'Propaganda', 'DIP']
  },
  {
    id: 'HUM-VARGAS-005',
    area: 'humanas',
    competence: 4,
    skill: 18,
    topic: 'Era Vargas',
    subtopic: 'Legislação Trabalhista (CLT)',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'A Consolidação das Leis do Trabalho (CLT), outorgada em 1943, reuniu e sistematizou a legislação trabalhista brasileira. O texto garantia direitos como salário mínimo, férias e jornada de oito horas. No entanto, o sindicalismo era mantido sob estrito controle do Estado.',
      source: 'Textos de História Econômica e Social do Brasil.'
    },
    prompt: 'A política trabalhista implementada por Getúlio Vargas, coroada com a criação da CLT, pode ser compreendida historicamente como uma estratégia de:',
    options: [
      { id: 'a', text: 'liberação da organização sindical, permitindo a livre associação de trabalhadores contra os patrões.', isCorrect: false, distractorRationale: 'Incorreta. A lei atrelava os sindicatos ao Ministério do Trabalho (peleguismo).' },
      { id: 'b', text: 'concessão de direitos sociais atrelada ao controle e subordinação das massas operárias ao Estado.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'c', text: 'estímulo às greves como instrumento legítimo de negociação entre capital e trabalho.', isCorrect: false, distractorRationale: 'Incorreta. Greves eram duramente reprimidas durante o Estado Novo.' },
      { id: 'd', text: 'exclusão social, uma vez que as leis se aplicavam unicamente aos trabalhadores rurais.', isCorrect: false, distractorRationale: 'Incorreta. A CLT, em sua origem, focava nos trabalhadores urbanos, excluindo amplamente os rurais.' },
      { id: 'e', text: 'implantação do socialismo no Brasil por meio da estatização dos meios de produção.', isCorrect: false, distractorRationale: 'Incorreta. O projeto varguista manteve o capitalismo, buscando a harmonia entre capital e trabalho.' }
    ],
    detailedExplanation: {
      summary: 'Vargas concedeu direitos trabalhistas para garantir a paz social e o avanço da industrialização, mas em troca atrelou os sindicatos ao Estado, impedindo a autonomia operária.',
      stepByStep: [
        'Reconhecer que a CLT foi uma avanço material para os trabalhadores urbanos.',
        'Entender o conceito de corporativismo varguista inspirado na Carta del Lavoro italiana.',
        'Identificar que o preço dos direitos foi a perda de liberdade sindical (sindicato único por categoria, atrelado ao Ministério do Trabalho).'
      ],
      coreConcept: 'Trabalhismo e Corporativismo na Era Vargas: direitos em troca de subordinação.',
      trapWarning: 'Uma armadilha comum é ver a CLT apenas como uma vitória operária ou apenas como controle estatal. Foi um misto de concessão e dominação (paternalismo/populismo).'
    },
    tags: ['Era Vargas', 'CLT', 'Trabalhismo']
  },
  {
    id: 'HUM-VARGAS-006',
    area: 'humanas',
    competence: 4,
    skill: 17,
    topic: 'Era Vargas',
    subtopic: 'Economia e Industrialização de Base',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'application',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'A Companhia Siderúrgica Nacional (CSN), inaugurada em 1946 em Volta Redonda (RJ), e a Companhia Vale do Rio Doce foram marcos da atuação estatal na economia durante a Era Vargas. A construção da CSN contou com apoio financeiro e técnico dos Estados Unidos em um contexto global de conflito.',
      source: 'História Econômica do Brasil Contemporâneo. (Adaptado).'
    },
    prompt: 'O modelo de desenvolvimento econômico adotado por Vargas na década de 1940 baseou-se na:',
    options: [
      { id: 'a', text: 'abertura total do mercado brasileiro aos produtos industriais estrangeiros, reduzindo a produção nacional.', isCorrect: false, distractorRationale: 'Incorreta. O modelo era de industrialização por substituição de importações (nacionalismo).' },
      { id: 'b', text: 'intervenção do Estado na economia, promovendo a criação de indústrias de base fundamentais para o desenvolvimento nacional.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'c', text: 'privatização das indústrias de base já existentes, para atrair capital europeu no pós-guerra.', isCorrect: false, distractorRationale: 'Incorreta. Não houve privatização, o Estado assumiu a criação da infraestrutura de base.' },
      { id: 'd', text: 'manutenção do modelo agroexportador cafeeiro como motor exclusivo da economia brasileira.', isCorrect: false, distractorRationale: 'Incorreta. Vargas buscou a diversificação e a industrialização para reduzir a dependência do café.' },
      { id: 'e', text: 'adoção de um planejamento econômico de inspiração soviética, coletivizando as terras no campo.', isCorrect: false, distractorRationale: 'Incorreta. O planejamento não era soviético e não houve reforma agrária ou coletivização.' }
    ],
    detailedExplanation: {
      summary: 'Vargas adotou o nacional-desenvolvimentismo, no qual o Estado atua como empresário nos setores estratégicos (indústria de base) que não atraíam capital privado.',
      stepByStep: [
        'Compreender o conceito de indústria de base (siderurgia, mineração, energia).',
        'Lembrar que o capital privado nacional era escasso para investimentos tão grandes.',
        'Reconhecer o papel do Estado, por meio de estatais como CSN, Vale do Rio Doce e Fábrica Nacional de Motores, como pilar da industrialização.'
      ],
      coreConcept: 'Nacionalismo Econômico e Intervencionismo Estatal (Substituição de Importações).',
      trapWarning: 'Lembre-se que Vargas negociou com os EUA (empréstimo Eximbank) em troca de bases militares no Nordeste durante a 2ª Guerra Mundial.'
    },
    tags: ['Economia', 'Era Vargas', 'Indústria', 'CSN']
  },
  {
    id: 'HUM-VARGAS-007',
    area: 'humanas',
    competence: 3,
    skill: 13,
    topic: 'Governos Democráticos',
    subtopic: 'Retorno de Vargas e Nacionalismo',
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'A campanha "O Petróleo é Nosso" mobilizou estudantes, militares e intelectuais no início dos anos 1950. Em 1953, Getúlio Vargas, de volta à presidência pelo voto direto, sancionou a lei que criava a Petrobras, estabelecendo o monopólio estatal sobre o setor.',
      source: 'História do Brasil Republicano. Texto adaptado.'
    },
    prompt: 'A criação da Petrobras no segundo governo de Getúlio Vargas (1951-1954) evidenciou um choque político entre duas correntes econômicas no Brasil, representadas pelo:',
    options: [
      { id: 'a', text: 'monarquismo, que defendia o retorno de D. Pedro II, e o republicanismo positivista.', isCorrect: false, distractorRationale: 'Incorreta. Debates irreais para o contexto da década de 1950.' },
      { id: 'b', text: 'nacionalismo econômico, favorável ao controle estatal de áreas estratégicas, e o liberalismo entreguista, favorável à exploração por capital estrangeiro.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'c', text: 'comunismo revolucionário, que pedia a extinção do dinheiro, e o fascismo varguista.', isCorrect: false, distractorRationale: 'Incorreta. A disputa era sobre o desenvolvimento capitalista do país (estatal x privado/estrangeiro).' },
      { id: 'd', text: 'ruralismo paulista, que queria transformar o petróleo em fertilizante, e o urbanismo carioca.', isCorrect: false, distractorRationale: 'Incorreta. Absurdo histórico.' },
      { id: 'e', text: 'estatismo absoluto, que proibiu qualquer empresa privada no Brasil, e o anarcocapitalismo.', isCorrect: false, distractorRationale: 'Incorreta. Vargas não adotou um estatismo absoluto (comunista), a iniciativa privada continuava forte.' }
    ],
    detailedExplanation: {
      summary: 'O segundo governo Vargas foi marcado pela polarização entre os nacionalistas (que defendiam estatais para setores-chave) e os liberais/entreguistas (como a UDN, que defendia a abertura ao capital internacional).',
      stepByStep: [
        'Analisar o contexto do segundo governo Vargas: pressões inflacionárias e oposição da UDN.',
        'Identificar o teor da campanha "O Petróleo é Nosso".',
        'Diferenciar as duas propostas em disputa: Nacionalistas (monopólio estatal) versus Entreguistas/Liberais (empresas estrangeiras).'
      ],
      coreConcept: 'Nacionalismo-Desenvolvimentista x Liberalismo Econômico na década de 1950.',
      trapWarning: 'A UDN, principal oposição, costumava acusar as políticas nacionalistas de serem simpáticas ao comunismo e atrasarem o país.'
    },
    tags: ['Populismo', 'Vargas', 'Petrobras', 'Nacionalismo']
  },
  {
    id: 'HUM-VARGAS-008',
    area: 'humanas',
    competence: 3,
    skill: 15,
    topic: 'Governos Democráticos',
    subtopic: 'Crise política e suicídio de Vargas',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: '"E aos que pensam que me derrotaram respondo com a minha vitória. Era escravo do povo e hoje me liberto para a vida eterna. Mas esse povo de quem fui escravo não mais será escravo de ninguém. Meu sacrifício ficará para sempre em sua alma e meu sangue será o preço do seu resgate." \n(Trecho da Carta-Testamento de Getúlio Vargas, 1954).',
      source: 'Acervo do Arquivo Nacional.'
    },
    prompt: 'O suicídio de Getúlio Vargas em agosto de 1954 foi o ápice de uma grave crise política. Qual foi o principal impacto imediato do suicídio na política brasileira da época?',
    options: [
      { id: 'a', text: 'A instauração imediata de um regime militar liderado pela Força Expedicionária Brasileira.', isCorrect: false, distractorRationale: 'Incorreta. A ditadura militar só ocorreu em 1964.' },
      { id: 'b', text: 'O enfraquecimento total do trabalhismo e o sucesso absoluto da UDN nas eleições seguintes.', isCorrect: false, distractorRationale: 'Incorreta. A UDN perdeu as eleições presidenciais seguintes (eleição de JK/Jango).' },
      { id: 'c', text: 'A comoção popular que inviabilizou o golpe de Estado articulado pela oposição civil e militar.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'd', text: 'A eclosão de uma guerra civil entre os estados do Sul, pró-Vargas, e São Paulo.', isCorrect: false, distractorRationale: 'Incorreta. Não houve guerra civil.' },
      { id: 'e', text: 'A renúncia de João Goulart e a revogação de todas as leis trabalhistas aprovadas na época.', isCorrect: false, distractorRationale: 'Incorreta. João Goulart já não era mais Ministro do Trabalho (ele havia caído após conceder aumento de 100% no salário mínimo), e a CLT não foi revogada.' }
    ],
    detailedExplanation: {
      summary: 'Com seu suicídio e a divulgação da Carta-Testamento, Vargas reverteu o cenário político, gerando uma onda de indignação popular contra seus opositores (UDN, imprensa, parte das Forças Armadas), o que atrasou em dez anos o golpe militar.',
      stepByStep: [
        'Analisar a pressão que Vargas sofria em 1954 (Atentado da Rua Tonelero, Manifesto dos Coronéis).',
        'Ler a Carta-Testamento, que apela às emoções do povo e acusa o capital estrangeiro e as elites.',
        'Concluir que o suicídio mobilizou as massas (destruição de jornais da oposição e sedes da UDN), tornando inviável uma ruptura democrática pela direita naquele momento.'
      ],
      coreConcept: 'O Suicídio de Vargas como ato político estratégico que salvou a herança do getulismo (trabalhismo).',
      trapWarning: 'A oposição (Carlos Lacerda) exigia a renúncia. O suicídio pegou a todos de surpresa e vitimizou Vargas.'
    },
    tags: ['Crise de 1954', 'Vargas', 'Populismo']
  },
  {
    id: 'HUM-VARGAS-009',
    area: 'humanas',
    competence: 4,
    skill: 16,
    topic: 'Governos Democráticos',
    subtopic: 'Governo JK e Nacional-Desenvolvimentismo',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'A posse de Juscelino Kubitschek (JK) em 1956 inaugurou os "Anos Dourados". Sob o lema "50 anos em 5", o governo implementou o Plano de Metas, um ambicioso programa de investimentos em energia, transporte e indústria.',
      source: 'SKIDMORE, Thomas. Brasil: de Getúlio a Castelo. São Paulo: Paz e Terra. (Adaptado).'
    },
    prompt: 'A política econômica do governo JK, consubstanciada no Plano de Metas, caracterizou-se pela atração de investimentos para o país. Diferentemente da política de Vargas, o modelo de JK estruturou-se:',
    options: [
      { id: 'a', text: 'na recusa de qualquer participação de capital estrangeiro, desenvolvendo a economia exclusivamente com recursos da União.', isCorrect: false, distractorRationale: 'Incorreta. Esse seria o modelo nacionalista extremo. JK promoveu intensa abertura ao capital internacional.' },
      { id: 'b', text: 'na aliança entre Estado, capital privado nacional e capital estrangeiro (multinacionais), o chamado tripé macroeconômico da época.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'c', text: 'na priorização absoluta da agricultura voltada para a exportação, abandonando a indústria de base.', isCorrect: false, distractorRationale: 'Incorreta. A prioridade de JK era a indústria (automobilística, bens de consumo) e a infraestrutura.' },
      { id: 'd', text: 'na estatização de todas as fábricas automobilísticas e empresas de eletrodomésticos instaladas no Brasil.', isCorrect: false, distractorRationale: 'Incorreta. Essas indústrias eram predominantemente controladas por multinacionais (ex: Ford, GM, Volkswagen).' },
      { id: 'e', text: 'na distribuição de renda por meio de reforma agrária ampla para gerar mercado consumidor interno.', isCorrect: false, distractorRationale: 'Incorreta. O modelo de JK não realizou reformas de base como a agrária, concentrando renda e agravando desigualdades sociais.' }
    ],
    detailedExplanation: {
      summary: 'O Nacional-Desenvolvimentismo de JK diferencia-se do modelo varguista clássico ao promover a intensa associação entre o Estado (infraestrutura), o capital nacional privado (autopeças, serviços) e o capital estrangeiro multinacional (bens duráveis, como automóveis).',
      stepByStep: [
        'Lembrar o lema "50 anos em 5": fomento ao rápido crescimento industrial e urbano.',
        'Compreender o Plano de Metas: Energia, Transporte, Indústria de Base, Alimentação e Educação (estas duas últimas receberam menos recursos).',
        'Identificar a entrada maciça de multinacionais (Ford, VW) para produzir bens de consumo duráveis.'
      ],
      coreConcept: 'Tripé da economia no governo JK e o aprofundamento do endividamento externo e inflação.',
      trapWarning: 'Apesar do clima de otimismo ("Anos Dourados"), a política de JK deixou uma herança de alta inflação, concentração de renda e grande dívida externa.'
    },
    tags: ['Populismo', 'JK', 'Desenvolvimentismo']
  },
  {
    id: 'HUM-VARGAS-010',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Governos Democráticos',
    subtopic: 'Construção de Brasília',
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: 'application',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'A construção de Brasília, inaugurada em 1960, foi a "meta-síntese" do governo de Juscelino Kubitschek. O projeto arquitetônico de Oscar Niemeyer e o planejamento urbano de Lúcio Costa representavam a modernidade desejada pelo Estado.',
      source: 'História do Brasil. Construção e modernidade.'
    },
    prompt: 'Além de seu simbolismo modernizador, a transferência da capital federal do Rio de Janeiro para o Planalto Central teve como principal motivação geopolítica e econômica:',
    options: [
      { id: 'a', text: 'afastar os políticos da pressão dos trabalhadores urbanos cariocas e enfraquecer o movimento sindical fluminense.', isCorrect: false, distractorRationale: 'Incorreta. Embora isso tenha sido um efeito colateral, a justificativa principal era o povoamento do interior.' },
      { id: 'b', text: 'promover a interiorização do desenvolvimento e a integração nacional, conectando as regiões por rodovias radiais.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'c', text: 'garantir a segurança nacional contra uma provável invasão estadunidense pelo litoral.', isCorrect: false, distractorRationale: 'Incorreta. O Brasil e os EUA eram aliados (Guerra Fria) durante o governo JK.' },
      { id: 'd', text: 'centralizar a produção cafeeira no Cerrado, aproveitando o clima frio do Planalto Central para a agricultura de exportação.', isCorrect: false, distractorRationale: 'Incorreta. A soja só ganhou força no cerrado décadas depois; o café continuava forte em SP/PR.' },
      { id: 'e', text: 'cumprir uma promessa feita a Getúlio Vargas de que a capital voltaria a ser Ouro Preto, em Minas Gerais.', isCorrect: false, distractorRationale: 'Incorreta. Absurdo histórico.' }
    ],
    detailedExplanation: {
      summary: 'A construção de Brasília foi concebida para integrar o território nacional, ocupando os "vazios demográficos" do interior do Brasil e estimulando o escoamento de produção por meio de novas rodovias (como a Belém-Brasília).',
      stepByStep: [
        'Entender a concentração histórica da população brasileira no litoral.',
        'Analisar a "Meta-Síntese" de JK: Brasília era o ponto focal de onde partiriam rodovias para integrar Norte, Nordeste e Sul.',
        'Concluir que a interiorização visava espalhar o desenvolvimento para além do eixo Rio-São Paulo.'
      ],
      coreConcept: 'Interiorização do desenvolvimento e integração nacional pela construção de Brasília e malha rodoviária.',
      trapWarning: 'A ideia de mudar a capital para o interior já constava nas Constituições Brasileiras anteriores (ex: 1891), mas só foi concretizada por JK.'
    },
    tags: ['Geografia Política', 'JK', 'Brasília', 'Interiorização']
  },
  {
    id: 'HUM-VARGAS-011',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Era Vargas',
    subtopic: 'Revolução Constitucionalista de 1932',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Em 1932, a elite cafeeira paulista e setores médios deflagraram a Revolução Constitucionalista contra o Governo Provisório de Getúlio Vargas. O movimento mobilizou a população de São Paulo sob o lema "Tudo por São Paulo", cunhou a sigla MMDC (em memória aos quatro estudantes mortos: Martins, Miragaia, Dráusio e Camargo) e realizou a campanha do "Ouro para o Bem de São Paulo".',
      source: 'História Contemporânea do Brasil - Boris Fausto'
    },
    prompt: 'A principal reivindicação política formal dos revolucionários paulistas de 1932 contra o governo federal consistia:',
    options: [
      { id: 'a', text: 'na promulgação de uma nova Constituição republicana e no fim do regime discricionário dos tenentes interventores nomeados por Vargas.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'na restauração imediata da monarquia constitucional com a coroação de descendentes de Dom Pedro II.', isCorrect: false, distractorRationale: 'O movimento de 1932 não era monarquista, mas republicano e constitucionalista.' },
      { id: 'c', text: 'na separação territorial e proclamação de São Paulo como república independente desmembrada da federação.', isCorrect: false, distractorRationale: 'Embora houvesse grupos separatistas radicais marginais, a bandeira oficial e unificadora da revolta era a reconstitucionalização de TODO o Brasil.' },
      { id: 'd', text: 'na implantação de uma ditadura do proletariado inspirada na Revolução Soviética de 1917.', isCorrect: false, distractorRationale: 'A liderança paulista era composta pela oligarquia agrária conservadora e membros do Partido Democrático.' },
      { id: 'e', text: 'no fechamento definitivo das fábricas paulistas em benefício exclusivo das lavouras de cana-de-açúcar.', isCorrect: false, distractorRationale: 'São Paulo era o motor industrial do país e a burguesia industrial apoiava a causa constitucional.' }
    ],
    detailedExplanation: {
      summary: 'Após o golpe de 1930, Vargas dissolveu o Congresso e nomeou interventores tenentistas nos estados. São Paulo exigia autonomia estadual com a nomeação de interventor civil e paulista, e a convocação urgente de uma Assembleia Constituinte.',
      stepByStep: [
        '1. Contexto pós-1930: Governo Provisório governava por Decretos-Leis, sem Constituição formal.',
        '2. Insatisfação paulista: perda da hegemonia política nacional (fim da política do café com leite) e intervenção de João Alberto (militar pernambucano) em SP.',
        '3. Exigências de 1932: Nomeação de interventor "civil e paulista" e eleições para Assembleia Nacional Constituinte.',
        '4. Desfecho: Derrota militar paulista no campo de batalha, mas vitória política moral: Vargas convocou a Constituinte em 1933, gerando a Constituição de 1934.'
      ],
      coreConcept: 'Revolução Constitucionalista de 1932 e a Reconstitucionalização do Brasil',
      trapWarning: 'No ENEM: São Paulo perdeu militarmente para as tropas federais, mas venceu politicamente, pois forçou Vargas a convocar eleições e criar a Constituição de 1934.'
    },
    commonTraps: [
      'Achar que o movimento tinha como meta oficial separar São Paulo do Brasil',
      'Esquecer que a consequência direta foi a Constituição de 1934'
    ],
    tags: ['revolucao-1932', 'era-vargas', 'constitucionalismo', 'sao-paulo'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-012',
    area: 'humanas',
    competence: 3,
    skill: 13,
    topic: 'Era Vargas',
    subtopic: 'Código Eleitoral de 1932 e Cidadania Feminina',
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'O Código Eleitoral de 1932 (Decreto nº 21.076) revolucionou as práticas democráticas no Brasil ao instituir o voto secreto, criar a Justiça Eleitoral especializada e garantir, pela primeira vez na história nacional, o direito de voto às mulheres brasileiras, coroando a luta de lideranças feministas como a bióloga Bertha Lutz.',
      source: 'Legislação e História Política - Tribunal Superior Eleitoral (TSE)'
    },
    prompt: 'A instituição do voto secreto e a criação da Justiça Eleitoral pelo Código de 1932 tiveram como impacto direto no sistema político brasileiro:',
    options: [
      { id: 'a', text: 'o desmantelamento das práticas do "voto de cabresto" e das fraudes sistemáticas que sustentavam o coronelismo oligárquico da República Velha.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'a proibição de candidaturas civis, permitindo que apenas membros das Forças Armadas disputassem cargos eletivos.', isCorrect: false, distractorRationale: 'Civis continuaram disputando normalmente; a intenção era democratizar o escrutínio.' },
      { id: 'c', text: 'a revogação imediata da cidadania política de todas as pessoas com renda inferior a 10 salários mínimos.', isCorrect: false, distractorRationale: 'Não havia critério de renda (voto censitário já havia sido abolido na República).' },
      { id: 'd', text: 'a obrigatoriedade de filiação partidária única ao Partido Comunista Brasileiro para todos os eleitores.', isCorrect: false, distractorRationale: 'O PCB atuava na oposição e esteve na ilegalidade durante boa parte do período.' },
      { id: 'e', text: 'a exclusão permanente das mulheres da vida pública e dos parlamentos estaduais.', isCorrect: false, distractorRationale: 'O Código garantiu exatamente a inclusão do voto e elegibilidade feminina.' }
    ],
    detailedExplanation: {
      summary: 'Na República Velha (1889-1930), o voto era aberto, permitindo a coação física dos coronéis ("voto de cabresto") e a fraude pelas mesas eleitorais da "Comissão Verificadora". O Código de 1932 blindou o eleitor com cédula secreta e árbitro neutro (Justiça Eleitoral).',
      stepByStep: [
        '1. Diagnóstico da República Oligárquica: voto aberto + coronelismo = fraude e controle social.',
        '2. Inovações de 1932: Voto Secreto (acaba com a intimidação do coronel); Justiça Eleitoral (fiscaliza a apuração de modo técnico); Voto Feminino (ampliação histórica da cidadania).',
        '3. Limitação persistente: analfabetos continuaram proibidos de votar até a Constituição Cidadã de 1988.'
      ],
      coreConcept: 'Código Eleitoral de 1932, Voto Secreto e Conquista do Voto Feminino',
      trapWarning: 'Atenção para pegadinha da TRI: O Código de 1932 incluiu as mulheres, MAS NÃO incluiu os analfabetos (que só conquistaram direito de votar em 1988).'
    },
    commonTraps: [
      'Achar que o Código de 1932 concedeu direito de voto aos analfabetos',
      'Ignorar que o voto antes de 1932 era aberto e permitia coerção física'
    ],
    tags: ['codigo-eleitoral-1932', 'voto-feminino', 'voto-secreto', 'justica-eleitoral'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-013',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Era Vargas',
    subtopic: 'Radicalização Política nos Anos 30: AIB vs ANL',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Entre 1934 e 1935, o cenário político brasileiro reproduziu a forte polarização ideológica que cindia a Europa no entreguerras. De um lado, a Ação Integralista Brasileira (AIB), liderada por Plínio Salgado, adotava camisas verdes, saudação indígena ("Anauê!") e defendia o lema "Deus, Pátria e Família". Do outro, a Aliança Nacional Libertadora (ANL), presidida de honra por Luís Carlos Prestes, aglutinava antifascistas, socialistas e comunistas sob as bandeiras do não pagamento da dívida externa e da reforma agrária.',
      source: 'História do Brasil - Boris Fausto'
    },
    prompt: 'A conjuntura de extrema polarização entre integralistas e aliancistas foi utilizada politicamente por Getúlio Vargas para:',
    options: [
      { id: 'a', text: 'justificar medidas de exceção sob a alegação de ameaça à ordem pública, culminando no fechamento da ANL e no pretexto para a implantação do Estado Novo autoritário.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'entregar o controle do Ministério da Fazenda à liderança comunista de Luís Carlos Prestes.', isCorrect: false, distractorRationale: 'Prestes foi perseguido e preso pelo governo Vargas após a Intentona de 1935.' },
      { id: 'c', text: 'transformar o Brasil em uma colônia submissa ao Reino Unido da Grã-Bretanha.', isCorrect: false, distractorRationale: 'A política vargas era nacionalista e buscava autonomia geopolítica.' },
      { id: 'd', text: 'renunciar à presidência e exilar-se na União Soviética como embaixador honorário.', isCorrect: false, distractorRationale: 'Vargas usou o conflito para CONCENTRAR poder no Brasil, não para renunciar.' },
      { id: 'e', text: 'adotar o anarquismo como doutrina oficial de Estado nas escolas públicas primárias.', isCorrect: false, distractorRationale: 'O Estado getulista reprimiu duramente anarquistas e grevistas operários.' }
    ],
    detailedExplanation: {
      summary: 'A polarização ideológica da década de 1930 serviu de pretexto para o endurecimento autoritário. A Intentona Comunista de 1935 permitiu a Vargas decretar Estado de Sítio, criar o Tribunal de Segurança Nacional e preparar o golpe do Estado Novo em 1937.',
      stepByStep: [
        '1. AIB (Integralistas): fascismo caboclo, extrema-direita, anticomunismo, estatismo corporativista.',
        '2. ANL (Aliança Nacional Libertadora): frente ampla de esquerda antifascista liderada por Prestes.',
        '3. 1935: Intentona Comunista (levantes militares no RN, PE e RJ) fracassa rapidamente.',
        '4. Consequência: Vargas capitaliza o "perigo vermelho" para suspender direitos constitucionais e perseguir oposicionistas.'
      ],
      coreConcept: 'Polarização Ideológica dos Anos 30 (AIB vs ANL) e Marcha para o Autoritarismo',
      trapWarning: 'A Intentona Comunista de 1935 não chegou perto de tomar o poder nacional, mas foi a justificativa perfeita para Vargas governar por Estado de Sítio.'
    },
    commonTraps: [
      'Achar que Vargas era comunista ou integralista (ele usou e reprimiu ambos os grupos oportunisticamente)',
      'Confundir as propostas da AIB (extrema-direita) com as da ANL (frente de esquerda)'
    ],
    tags: ['integralismo', 'alianca-nacional-libertadora', 'intentona-comunista', 'anos-30'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-014',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Era Vargas',
    subtopic: 'O Plano Cohen e o Golpe do Estado Novo (1937)',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Em setembro de 1937, o governo Vargas divulgou com alarme na imprensa a descoberta de um suposto plano soviético para massacrar líderes católicos, promover greves sangrentas e queimar igrejas no Brasil, batizado de "Plano Cohen". O documento, forjado pelo capitão integralista Olímpio Mourão Filho e manipulado pela cúpula militar getulista, gerou histeria coletiva.',
      source: 'História do Brasil República - Edgar Carone'
    },
    prompt: 'A divulgação farsesca do "Plano Cohen" serviu como justificativa ideológica imediata para:',
    options: [
      { id: 'a', text: 'cancelar as eleições presidenciais previstas para 1938, fechar o Congresso Nacional e outorgar a ditadura do Estado Novo respaldada pela Constituição de 1937.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'declarar guerra imediata à Alemanha Nazista em solidariedade à União Soviética.', isCorrect: false, distractorRationale: 'O plano era ficticiamente comunista; além disso, o Estado Novo aproximou-se inicialmente das potências do Eixo.' },
      { id: 'c', text: 'convocar plebiscito popular para entregar a presidência aos integralistas de Plínio Salgado.', isCorrect: false, distractorRationale: 'Após o golpe, Vargas baniu todos os partidos, inclusive a AIB, gerando o Levante Integralista de 1938.' },
      { id: 'd', text: 'autorizar a invasão militar brasileira nos países vizinhos do Cone Sul.', isCorrect: false, distractorRationale: 'O golpe teve finalidade exclusivamente de política interna brasileira.' },
      { id: 'e', text: 'dissolver as Forças Armadas nacionais e substituí-las por milícias sindicais urbanas.', isCorrect: false, distractorRationale: 'O Exército foi o principal fiador e sustentáculo do Estado Novo getulista.' }
    ],
    detailedExplanation: {
      summary: 'O Plano Cohen foi uma farsa montada para criar pânico anticomunista na população e na classe média. Em 10 de novembro de 1937, tropas cercaram o Congresso, Vargas outorgou a Constituição de 1937 ("Polaca", de inspiração fascista polonesa) e cancelou as eleições de 1938.',
      stepByStep: [
        '1. Motivação do golpe: a Constituição de 1934 proibia a reeleição de Vargas em 1938.',
        '2. A farsa: o "Plano Cohen" forjou uma ameaça comunista fictícia para aterrorizar a sociedade.',
        '3. O golpe de 10 de novembro de 1937: tanques na rua fecham o Congresso, suspendem a Constituição de 1934 e impõem a "Polaca".',
        '4. Características do Estado Novo: ditadura personalista, censura rígida, extinção dos partidos políticos e centralização administrativa total.'
      ],
      coreConcept: 'O Plano Cohen e a Outorga Ditatorial do Estado Novo (1937-1945)',
      trapWarning: 'A Constituição de 1937 foi OUTORGADA (imposta de cima para baixo por decreto), e não promulgada por voto popular ou assembleia constituinte.'
    },
    commonTraps: [
      'Achar que o Plano Cohen era um documento comunista autêntico',
      'Confundir constituição promulgada (democrática) com outorgada (ditatorial)'
    ],
    tags: ['plano-cohen', 'estado-novo', 'golpe-1937', 'constituicao-polaca'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-015',
    area: 'humanas',
    competence: 1,
    skill: 4,
    topic: 'Era Vargas',
    subtopic: 'O DIP e a Construção da Memória e da Imagem Pública',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Criado por Vargas em 1939, o Departamento de Imprensa e Propaganda (DIP) operava como órgão estratégico do Estado Novo. Além de censurar peças teatrais, jornais, letras de músicas populares e o rádio, o DIP produzia o programa oficial diário "A Hora do Brasil", cartilhas cívicas infantis e grandiosos desfiles em estádios esportivos com corais de estudantes regidos pelo maestro Heitor Villa-Lobos.',
      source: 'O DIP na Construção do Estado Novo - Alcir Lenharo'
    },
    prompt: 'A atuação multifacetada do DIP durante o Estado Novo evidenciava uma concepção de poder que combinava:',
    options: [
      { id: 'a', text: 'a repressão policialesca à dissidência política com a produção massiva de uma pedagogia cívico-nacionalista que endeusava a figura do presidente como protetor do povo.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'a defesa intransigente do liberalismo econômico do tipo laissez-faire com a liberdade irrestrita de expressão artística.', isCorrect: false, distractorRationale: 'O DIP era o oposto da liberdade de expressão (exercia censura prévia feroz) e o regime era estatista.' },
      { id: 'c', text: 'a promoção exclusiva de culturas estrangeiras europeias em detrimento das manifestações folclóricas brasileiras.', isCorrect: false, distractorRationale: 'O DIP valorizava símbolos nacionais autênticos (como o samba de exaltação e a capoeira) para construir a "identidade brasileira".' },
      { id: 'd', text: 'o incentivo ao pluripartidarismo competitivo e à liberdade de greve para operários fabris.', isCorrect: false, distractorRationale: 'Partidos políticos e greves eram estritamente proibidos no Estado Novo.' },
      { id: 'e', text: 'a abolição das escolas públicas em favor do ensino domiciliar desregulamentado.', isCorrect: false, distractorRationale: 'O Estado Novo usava a escola pública como máquina de doutrinação cívica patriótica.' }
    ],
    detailedExplanation: {
      summary: 'O DIP não era apenas censura repressiva; era uma eficiente fábrica de consenso e propaganda política. Consolidou a imagem de Vargas como "Pai dos Pobres" e usou a cultura popular (samba oficializado, rádio) para legitimar a ditadura.',
      stepByStep: [
        '1. Duas faces do DIP: Face negativa (censura prévia a jornais, livros e rádios) e Face positiva (produção de propaganda, cartilhas e eventos de massa).',
        '2. O rádio como mídia de massa hegemônica da época: criação de "A Hora do Brasil" transmitida compulsoriamente.',
        '3. Coaptação cultural: incentivo ao "samba de exaltação" (Aquarela do Brasil) em oposição ao samba de malandragem da Lapa.',
        '4. Resultado: construção da liderança carismática varguista que sobreviveu à própria ditadura.'
      ],
      coreConcept: 'O DIP, Aparelho Ideológico do Estado Novo e Liderança Carismática',
      trapWarning: 'No ENEM: O DIP não apenas proibia coisas; ele produzia conteúdos ativamente (livros didáticos, filmes, desfiles de 1º de Maio no Estádio de São Januário).'
    },
    commonTraps: [
      'Achar que o DIP realizava apenas censura e não propaganda positiva',
      'Esquecer o papel estratégico do rádio como tecnologia central de comunicação de massa'
    ],
    tags: ['dip', 'propaganda-politica', 'censura', 'estado-novo', 'cultura-popular'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-016',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Era Vargas',
    subtopic: 'O Brasil na Segunda Guerra Mundial e a Contradição da FEB',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Em 1944, a Força Expedicionária Brasileira (FEB), composta por mais de 25 mil "pracinhas", desembarcou na Itália para combater os exércitos nazifascistas na Europa, destacando-se na Batalha de Monte Castelo. O lema dos soldados, "A cobra vai fumar", ironizava a descrença inicial de que o Brasil fosse entrar na guerra.',
      source: 'História Militar do Brasil - Exército Brasileiro'
    },
    prompt: 'A participação militar brasileira na Segunda Guerra Mundial ao lado dos Aliados provocou uma profunda contradição política interna no país, consubstanciada no fato de que:',
    options: [
      { id: 'a', text: 'o Brasil enviava seus soldados para lutar e morrer pela democracia contra regimes totalitários na Europa, enquanto mantinha em seu próprio território a ditadura autoritária do Estado Novo.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'o Exército brasileiro apoiava militarmente a Alemanha de Hitler contra os interesses econômicos dos Estados Unidos.', isCorrect: false, distractorRationale: 'O Brasil rompeu relações com o Eixo e aliou-se formalmente aos Aliados/EUA após o torpedeamento de navios mercantes brasileiros por submarinos alemães.' },
      { id: 'c', text: 'a economia brasileira dependia exclusivamente da importação de tanques de guerra da Argentina peronista.', isCorrect: false, distractorRationale: 'O armamento e suprimento da FEB vieram dos Estados Unidos através dos acordos de cooperação.' },
      { id: 'd', text: 'os soldados brasileiros recusaram-se a combater na Itália por defenderem a anexação da Península Ibérica.', isCorrect: false, distractorRationale: 'A FEB combateu heroicamente na Campanha da Itália.' },
      { id: 'e', text: 'a Constituição de 1937 exigia que todo combatente de guerra renunciasse compulsoriamente à cidadania brasileira.', isCorrect: false, distractorRationale: 'Invenção sem fundamento jurídico ou histórico.' }
    ],
    detailedExplanation: {
      summary: 'A contradição do Estado Novo: soldadas brasileiros sacrificavam suas vidas nos campos da Itália para extirpar as ditaduras fascistas de Hitler e Mussolini, tornando insustentável a manutenção de um regime ditatorial e censor em casa. Isso precipitou a redemocratização de 1945.',
      stepByStep: [
        '1. Barganha estratégica de Vargas: conseguiu o financiamento norte-americano da Usina de Volta Redonda (CSN) em troca de ceder a Base Aérea de Natal (Trampolim da Vitória).',
        '2. Envio da FEB em 1944: bravura militar em Monte Castelo e Montese.',
        '3. Retorno dos pracinhas em 1945: a sociedade brasileira passou a cobrar coerência moral: "Se fomos lá fora derrotar a ditadura, por que toleramos uma ditadura em nossa casa?".',
        '4. Consequência direta: Manifesto dos Mineiros, mobilização estudantil (UNE) e queda de Vargas em outubro de 1945.'
      ],
      coreConcept: 'Contradição Democrática da FEB e Fim do Estado Novo',
      trapWarning: 'A entrada do Brasil na guerra foi o início do fim do Estado Novo. A vitória militar dos Aliados tornou regimes ditatoriais na América do Sul ideologicamente insustentáveis.'
    },
    commonTraps: [
      'Achar que o Brasil lutou ao lado do Eixo na Segunda Guerra',
      'Ignorar o impacto do regresso da FEB no processo de abertura política interna'
    ],
    tags: ['segunda-guerra', 'feb', 'pracinhas', 'redemocratizacao-1945', 'monte-castelo'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-017',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Era Vargas',
    subtopic: 'O Movimento Queremista e a Queda de 1945',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Em meados de 1945, com o processo de abertura política em andamento, operários e setores sindicais foram às ruas empunhando cartazes com a frase: "Queremos Getúlio!". O chamado "Movimento Queremista" apoiava a convocação de uma Assembleia Constituinte, mas com Getúlio Vargas mantido provisoriamente na chefia da nação.',
      source: 'Getúlio Vargas e o Queremismo - Thomas Skidmore'
    },
    prompt: 'Temendo que o Queremismo servisse de manobra para a perpetuação de Vargas no poder, as Forças Armadas e a oposição liberal reunida na União Democrática Nacional (UDN):',
    options: [
      { id: 'a', text: 'depuseram militarmente Getúlio Vargas em outubro de 1945, transferindo interinamente o poder ao presidente do STF para garantir as eleições presidenciais.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'aceitaram a proposta operária e aclamaram Vargas imperador vitalício do Brasil.', isCorrect: false, distractorRationale: 'A UDN e os generais (como Dutra e Góis Monteiro) conspiravam ativamente para destituir Vargas.' },
      { id: 'c', text: 'cancelaram em definitivo a Assembleia Constituinte e reinstalaram a monarquia oligárquica cafeeira.', isCorrect: false, distractorRationale: 'As eleições foram mantidas e a Constituinte aprovou a Constituição de 1946.' },
      { id: 'd', text: 'solicitaram intervenção armada das tropas soviéticas para arbitrar a sucessão presidencial.', isCorrect: false, distractorRationale: 'A cúpula militar brasileira era abertamente alinhada aos EUA no início da Guerra Fria.' },
      { id: 'e', text: 'bateram em retirada para a Europa, deixando o Palácio do Catete vazio sob controle dos sindicatos.', isCorrect: false, distractorRationale: 'Vargas foi deposto sem resistência violenta e retirou-se pacificamente para sua fazenda em São Borja (RS).' }
    ],
    detailedExplanation: {
      summary: 'O Queremismo assustou a oposição conservadora (UDN) e os militares liderados pelo general Góis Monteiro e Eurico Gaspar Dutra. Temendo um novo golpe de estado de Vargas para permanecer na presidência, depuseram-no em 29 de outubro de 1945.',
      stepByStep: [
        '1. Lema do Queremismo: "Constituinte com Getúlio!". Propunha eleger a constituinte antes de eleger novo presidente.',
        '2. Reação dos opositores: suspeitaram de tentativa getulista de manobrar a constituinte para continuar governando.',
        '3. Golpe militar preventivo: generais depõem Vargas em 29 de outubro de 1945.',
        '4. José Linhares (presidente do STF) assume temporariamente e garante as eleições de dezembro de 1945, vencidas pelo general Eurico Gaspar Dutra.'
      ],
      coreConcept: 'Movimento Queremista e a Deposição de Vargas em 1945',
      trapWarning: 'Vargas foi deposto em 1945 sem derramamento de sangue. Ele voltou à sua fazenda gaúcha, candidatou-se e foi eleito senador por múltiplos estados, retornando "nos braços do povo" em 1950!'
    },
    commonTraps: [
      'Achar que o Queremismo era contra Vargas',
      'Esquecer que a saída de Vargas abriu caminho para o governo Dutra (1946-1951)'
    ],
    tags: ['queremismo', 'queda-de-vargas', 'redemocratizacao', 'udn', 'dutra'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-018',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Governos Democráticos',
    subtopic: 'Segundo Governo Vargas e a Criação da Petrobras',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Em 1950, Getúlio Vargas venceu as eleições presidenciais diretas e assumiu o governo com forte apelo nacional-popular. Seu segundo mandato (1951-1954) foi marcado pela intensa campanha cívica "O Petróleo é Nosso", que culminou na aprovação da Lei nº 2.004 em outubro de 1953, instituindo o monopólio estatal da pesquisa e refino e fundando a empresa pública Petrobras.',
      source: 'Petróleo e Nacionalismo no Brasil - Gabriel Cohn'
    },
    prompt: 'A instituição do monopólio estatal sobre o petróleo e a criação da Petrobras refletiam a estratégia varguista de:',
    options: [
      { id: 'a', text: 'assegurar a soberania energética e o controle nacional de um recurso estratégico para acelerar a industrialização, resistindo à pressão de monopólios petrolíferos estrangeiros (as chamadas "Sete Irmãs").', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'privatizar integralmente o subsolo brasileiro entregando concessões irrestritas a corporações multinacionais.', isCorrect: false, distractorRationale: 'Isso era o oposto do modelo varguista; a UDN defendia maior abertura ao capital privado, enquanto Vargas garantiu o monopólio estatal.' },
      { id: 'c', text: 'proibir o refino de combustíveis no Brasil para preservar a atmosfera contra a emissão de fuligem.', isCorrect: false, distractorRationale: 'A criação da Petrobras visava exatamente refinar petróleo em território brasileiro para economizar divisas.' },
      { id: 'd', text: 'substituir todos os motores a combustão por tração animal nas estradas do interior.', isCorrect: false, distractorRationale: 'O governo estimulava a mecanização industrial e de transporte.' },
      { id: 'e', text: 'financiar exclusivamente o plantio de cana-de-açúcar para produzir biocombustíveis no Nordeste.', isCorrect: false, distractorRationale: 'O Proálcool só foi criado na década de 1970 durante a ditadura militar após o Choque do Petróleo.' }
    ],
    detailedExplanation: {
      summary: 'No segundo governo Vargas, defrontaram-se duas visões de desenvolvimento: o NACIONALISMO (Estado liderando setores estratégicos como petróleo e energia com a Petrobras e Eletrobras) e o ENTREGUISMO/LIBERALISMO (UDN, abertura irrestrita ao capital privado estrangeiro).',
      stepByStep: [
        '1. Campanha "O Petróleo é Nosso": ampla mobilização social que uniu estudantes (UNE), militares nacionalistas e sindicatos.',
        '2. Lei de 1953: Criação da Petrobras com monopólio estatal na extração, exploração e refino.',
        '3. Reação liberal: a UDN (União Democrática Nacional), liderada por Carlos Lacerda, acusava o monopólio estatal de inviável e "comunizante".',
        '4. Legado: a Petrobras permitiu ao Brasil desenvolver tecnologia pioneira em águas profundas e autonomia de refino.'
      ],
      coreConcept: 'Nacionalismo Desenvolvimentista e a Fundação da Petrobras (1953)',
      trapWarning: 'No ENEM: O debate econômico dos anos 50 é o confronto "Nacionalistas" (Vargas, controle estatal do petróleo) versus "Cosmopolitas/Liberais" (UDN, abertura ao capital estrangeiro).'
    },
    commonTraps: [
      'Achar que a Petrobras foi criada na ditadura militar (ela foi criada por Vargas em 1953)',
      'Confundir monopólio estatal com abertura para multinacionais privadas'
    ],
    tags: ['petrobras', 'o-petroleo-e-nosso', 'nacionalismo', 'segundo-governo-vargas'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-019',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Governos Democráticos',
    subtopic: 'A Crise de Agosto de 1954 e o Suicídio de Vargas',
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Em agosto de 1954, a oposição udenista e a imprensa conservadora capitaneada por Carlos Lacerda intensificaram os ataques contra Vargas após o atentado na Rua Tonelero, que vitimou o major da Aeronáutica Rubens Vaz. As investigações apontaram o chefe da guarda pessoal do Catete, Gregório Fortunato, como mandante. Pressionado por generais da Aeronáutica ("República do Galeão") e diante de um ultimato militar para renunciar, Vargas suicidou-se com um tiro no peito em 24 de agosto, deixando sua célebre Carta-Testamento.',
      source: 'Agosto de 1954: A Crise Final - Hélio Silva'
    },
    prompt: 'O impacto político imediato do suicídio de Getúlio Vargas e da divulgação de sua Carta-Testamento foi:',
    options: [
      { id: 'a', text: 'a eclosão de gigantescas manifestações populares de comoção e revolta contra a oposição liberal e a embaixada dos EUA, adiando em dez anos os planos de golpe militar das forças conservadoras.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'a posse imediata de Carlos Lacerda como ditador militar vitalício com apoio unânime dos sindicatos.', isCorrect: false, distractorRationale: 'Lacerda teve que fugir do país temendo o linchamento popular pela multidão enfurecida.' },
      { id: 'c', text: 'a anulação das eleições de 1955 e a proclamação da Terceira República Soviética do Brasil.', isCorrect: false, distractorRationale: 'As eleições de 1955 ocorreram normalmente e elegeram Juscelino Kubitschek e João Goulart.' },
      { id: 'd', text: 'a extinção sumária de todas as leis trabalhistas e da CLT pelo Congresso Nacional.', isCorrect: false, distractorRationale: 'A CLT permaneceu intocada e tornou-se patrimônio intocável da classe trabalhadora.' },
      { id: 'e', text: 'a fragmentação do território brasileiro em três nações autônomas independentes.', isCorrect: false, distractorRationale: 'A unidade territorial nacional não foi afetada.' }
    ],
    detailedExplanation: {
      summary: 'Com a famosa frase final "Saio da vida para entrar na história", o suicídio de Vargas transformou o acuado político em mártir popular. A fúria das massas nas ruas destruiu jornais oposicionistas, incendiou redações e paralisou os conspiradores que pretendiam dar um golpe de estado em 1954.',
      stepByStep: [
        '1. Crise de agosto: inflação, alta do custo de vida, aumento de 100% do salário mínimo por Jango, oposição feroz da UDN.',
        '2. O ultimato: generais e o "Manifesto dos Coronéis" exigiam a renúncia irrevogável do presidente.',
        '3. O ato trágico: 24 de agosto de 1954, Vargas comete suicídio no Palácio do Catete.',
        '4. Efeito político: a Carta-Testamento denunciou as "forças ocultas" e interesses internacionais. O golpe militar foi neutralizado, permitindo que JK fosse eleito em 1955.'
      ],
      coreConcept: 'Crise de 1954, Carta-Testamento e o Suicídio de Getúlio Vargas',
      trapWarning: 'No ENEM: O suicídio de Vargas foi um ato político deliberado que desarticulou o golpe militar iminente da UDN em 1954, empurrando a tomada do poder pelas Forças Armadas para 1964.'
    },
    commonTraps: [
      'Achar que o suicídio facilitou a tomada do poder imediata pela oposição (pelo contrário, desarticulou a UDN)',
      'Ignorar o impacto emocional avassalador da Carta-Testamento nas classes populares'
    ],
    tags: ['suicidio-de-vargas', 'carta-testamento', '1954', 'rua-tonelero', 'lacerda'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-020',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Governos Democráticos',
    subtopic: 'Governo João Goulart e as Reformas de Base (1961-1964)',
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Após a renúncia intempestiva de Jânio Quadros em agosto de 1961 e a superação da breve experiência parlamentarista pelo plebiscito de 1963, o presidente João Goulart (Jango) lançou a proposta das "Reformas de Base". O pacote previa reformas agrária, tributária, bancária e educacional, além do controle de remessas de lucros ao exterior, simbolizadas no histórico comício da Central do Brasil em 13 de março de 1964.',
      source: 'O Colapso da Democracia no Brasil: 1961-1964 - Wanderley Guilherme dos Santos'
    },
    prompt: 'A proposta das Reformas de Base encampada por João Goulart provocou forte resistência das elites conservadoras, latifundiários e setores militares porque:',
    options: [
      { id: 'a', text: 'era interpretada por esses grupos como uma ameaça comunista ao direito de propriedade privada e à ordem social tradicional, culminando na Marcha da Família com Deus pela Liberdade e no golpe civil-militar de 1964.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'pretendia extinguir a CLT e revogar o direito a férias remuneradas dos operários urbanos.', isCorrect: false, distractorRationale: 'Jango era o herdeiro político do trabalhismo getulista e pretendia expandir a CLT aos trabalhadores rurais (Estatuto do Trabalhador Rural).' },
      { id: 'c', text: 'defendia a submissão total da soberania nacional aos comandos do Fundo Monetário Internacional.', isCorrect: false, distractorRationale: 'Jango enfrentava atritos com o FMI e restringiu a remessa de lucros de multinacionais.' },
      { id: 'd', text: 'planejava doar metade do território brasileiro aos Estados Unidos em troca de ajuda militar.', isCorrect: false, distractorRationale: 'O governo Jango adotava Política Externa Independente, sofrendo oposição do governo norte-americano (Operação Brother Sam).' },
      { id: 'e', text: 'proibia o ensino público universitário no Brasil para economizar verbas federais.', isCorrect: false, distractorRationale: 'A reforma educacional de Jango, inspirada no método Paulo Freire, visava erradicar o analfabetismo.' }
    ],
    detailedExplanation: {
      summary: 'As Reformas de Base propunham democratizar a terra (reforma agrária), o sistema tributário (progressividade para os ricos) e estender direitos aos camponeses. As classes dominantes, o empresariado (IPES/IBAD) e militares consideraram o projeto "subversivo", articulando o golpe de 31 de março de 1964.',
      stepByStep: [
        '1. Contexto de Guerra Fria: após a Revolução Cubana de 1959, qualquer projeto de reforma social era rotulado de "ameaça comunista".',
        '2. Propostas de Jango: Reforma Agrária (desapropriação de terras improdutivas à margem de rodovias federais), Reforma Universitária e Tributária.',
        '3. Reação conservadora: Marcha da Família com Deus pela Liberdade mobiliza a classe média.',
        '4. Golpe de 1964: Em 31 de março de 1964, tropas de Minas Gerais avançam em direção ao Rio, destituindo Jango e inaugurando 21 anos de ditadura militar.'
      ],
      coreConcept: 'Reformas de Base, Polarização Social e o Golpe de 1964',
      trapWarning: 'No ENEM: As Reformas de Base não eram socialistas; eram reformas de modernização capitalista distributiva dentro da ordem democrática, mas foram tachadas de comunistas para justificar o golpe militar.'
    },
    commonTraps: [
      'Achar que Jango era um guerrilheiro comunista que pretendia abolir a propriedade privada',
      'Desconhecer o apoio civil e midiático amplo dado ao golpe militar de 1964'
    ],
    tags: ['reformas-de-base', 'jango', 'joao-goulart', 'golpe-1964', 'marcha-da-familia'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-021',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Era Vargas',
    subtopic: 'O Plano Cohen e o Golpe do Estado Novo (1937)',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'application',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Em setembro de 1937, jornais e emissoras de rádio de todo o Brasil divulgaram com alarme a descoberta pelas Forças Armadas do suposto "Plano Cohen" — um documento secreto que descrevia em detalhes uma iminente insurreição comunista com assassinatos de líderes políticos, incêndio de igrejas e saques ao comércio. O clima de histeria pública permitiu a Getúlio Vargas decretar estado de sítio, cancelar as eleições presidenciais previstas para 1938, fechar o Congresso Nacional e outorgar a Constituição autoritária de 1937 (a "Polaca"). Anos mais tarde, comprovou-se que o documento fora uma grosseira farsa forjada pelo capitão integralista Olímpio Mourão Filho.',
      source: 'História do Brasil Contemporâneo e a Era Vargas'
    },
    prompt: 'A divulgação do forjado Plano Cohen operou historicamente como:',
    options: [
      { id: 'a', text: 'uma justificativa fraudulenta orquestrada para instaurar a ditadura do Estado Novo (1937-1945), neutralizando a oposição democrática através do medo do comunismo.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'uma comprovação empírica legítima de que a União Soviética havia invadido o litoral brasileiro.', isCorrect: false, distractorRationale: 'O plano era comprovadamente falso, sem qualquer relação com invasão soviética real.' },
      { id: 'c', text: 'o marco inicial da restauração democrática que fortaleceu o poder do Congresso Nacional e dos sindicatos livres.', isCorrect: false, distractorRationale: 'O golpe fechou o Congresso, aboliu os partidos políticos e colocou os sindicatos sob tutela do Estado.' },
      { id: 'd', text: 'um acordo diplomático de paz assinado entre o Partido Comunista Brasileiro e a Ação Integralista Brasileira.', isCorrect: false, distractorRationale: 'Comunistas e integralistas eram inimigos ideológicos mortais e o plano forjado serviu para prender opositores de esquerda.' },
      { id: 'e', text: 'um projeto econômico voltado a privatizar todas as ferrovias e refinarias de petróleo nacionais.', isCorrect: false, distractorRationale: 'O Estado Novo adotou o nacional-estatismo industrial com a fundação da CSN e Vale do Rio Doce.' }
    ],
    detailedExplanation: {
      summary: 'O Plano Cohen foi a fraude política que deu o pretexto perfeito para o golpe de 10 de novembro de 1937. Valendo-se do anticomunismo das Forças Armadas e das classes médias após a Intentona Comunista de 1935, Getúlio Vargas cancelou as eleições, fechou o Congresso e inaugurou a ditadura do Estado Novo, inspirada nos regimes fascistas europeus.',
      stepByStep: [
        '1. Antecedente: A Constituição de 1934 previa eleições democráticas em janeiro de 1938, das quais Vargas não poderia participar legalmente.',
        '2. A farsa: O capitão integralista Mourão Filho redigiu uma simulação de plano comunista para exercícios internos, que vazou para o general Góes Monteiro e para Vargas.',
        '3. Instrumentalização: O governo alterou o nome para "Plano Cohen" (conotando sobrenome judaico para atrair a simpatia antissemita da época) e divulgou na Hora do Brasil como conspiração real.',
        '4. Golpe de 10 de novembro de 1937: Tropas cercam o Congresso, outorga-se a Constituição "Polaca" (redigida por Francisco Campos) e instaura-se o Estado Novo.',
        '5. Conclusão: Trata-se do mais célebre episódio de "fake news" e conspiração manufactured da história política brasileira para legitimar um regime de força.'
      ],
      coreConcept: 'Plano Cohen: Farsa Anticomunista e o Golpe do Estado Novo em 1937',
      trapWarning: 'No ENEM: Nunca confunda a Intentona Comunista de 1935 (que foi uma revolta armada REAL liderada por Prestes) com o Plano Cohen de 1937 (que foi uma farsa COMPROVADAMENTE FALSA forjada pelos integralistas e pelo governo).'
    },
    commonTraps: [
      'Achar que o Plano Cohen era um documento comunista autêntico',
      'Confundir a Intentona Comunista de 1935 com o Plano Cohen de 1937'
    ],
    tags: ['plano-cohen', 'estado-novo', 'getulio-vargas', 'ditadura-1937', 'anticomunismo'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-022',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Era Vargas',
    subtopic: 'A Ruptura de 1930 e a Crise da República Oligárquica',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'application',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Ao assumir o poder provisório em 1930 após a deposição do presidente Washington Luís pela Aliança Liberal, Getúlio Vargas dissolveu as assembleias legislativas estaduais e substituiu os antigos governadores eleitos por "interventores federais" de sua estrita confiança — muitos deles jovens tenentes ligados ao movimento tenentista.',
      source: 'Boris Fausto, A Revolução de 1930: Historiografia e História'
    },
    prompt: 'Essa medida centralizadora adotada pelo governo provisório de Getúlio Vargas representou uma ruptura com a República Velha porque:',
    options: [
      { id: 'a', text: 'desarticulou a tradicional "política dos governadores" e o poder quase autônomo das oligarquias estaduais do café, consolidando a supremacia do Estado centralizador federal.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'restituiu o poder absoluto dos coronéis do interior que passaram a emitir moedas estaduais próprias.', isCorrect: false, distractorRationale: 'A nomeação dos interventores desestruturou as oligarquias estaduais tradicionais e enfraqueceu os coronéis do café.' },
      { id: 'c', text: 'extinguiu o Exército brasileiro e entregou a segurança nacional à marinha mercante de Portugal.', isCorrect: false, distractorRationale: 'O Exército foi o grande esteio unificador e modernizador da revolução centralizadora de 1930.' },
      { id: 'd', text: 'aboliu o trabalho assalariado no Brasil restaurando o cativeiro de africanos nas cidades.', isCorrect: false, distractorRationale: 'A escravidão fora abolida em 1888 e Vargas iniciou a regulamentação dos direitos trabalhistas urbanos.' },
      { id: 'e', text: 'transformou o estado de São Paulo no único detentor do direito de indicar presidentes da República.', isCorrect: false, distractorRationale: 'A Revolução de 1930 quebrou justamente a hegemonia paulista, deflagrando a Revolução Constitucionalista de 1932 em reação.' }
    ],
    detailedExplanation: {
      summary: 'A República Velha (1889-1930) baseava-se no federalismo descentralizado da "política dos governadores" de Campos Sales, onde as oligarquias estaduais (com destaque para São Paulo e Minas Gerais) governavam seus estados como feudos privados. Com a Revolução de 1930, Vargas centralizou as rédeas no governo federal, nomeando interventores e submetendo os estados à autoridade nacional do Palácio do Catete.',
      stepByStep: [
        '1. Estrutura da República Oligárquica: Coronelismo local -> Política dos Governadores estaduais -> Política do Café com Leite federal.',
        '2. Rompimento em 1930: Washington Luís indica o paulista Júlio Prestes, quebrando o acordo com Minas Gerais. Minas alia-se ao Rio Grande do Sul e Paraíba (Aliança Liberal).',
        '3. Vitória da Revolução de 1930: Vargas assume e adota intervenção federal direta nos estados federados.',
        '4. Consequência: Destruição do federalismo oligárquico e nascimento do Estado Nacional Moderno centralizado no Brasil.',
        '5. Reação: O descontentamento da oligarquia paulista com o interventor João Alberto desembocou na Revolução Constitucionalista de 1932.'
      ],
      coreConcept: 'Revolução de 1930: Quebra da Política dos Governadores e Centralização do Poder Estatal',
      trapWarning: 'No ENEM: 1930 não foi uma revolução socialista nem operária; foi uma reconfiguração do Estado burguês brasileiro, transferindo o comando dos cafeicultores tradicionais para o Estado centralizador urbano-industrial.'
    },
    commonTraps: [
      'Achar que a Revolução de 1930 fortaleceu as oligarquias cafeeiras paulistas',
      'Confundir o governo provisório de 1930 com o Estado Novo autoritário de 1937'
    ],
    tags: ['revolucao-1930', 'politica-dos-governadores', 'interventores', 'getulio-vargas', 'centralizacao'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-023',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Governos Democráticos',
    subtopic: 'A Criação da Petrobras e o Nacionalismo do Segundo Governo Vargas (1951-1954)',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'application',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Em 1953, durante seu mandato democrático eleito pelo voto popular, o presidente Getúlio Vargas sancionou a Lei nº 2.004, que criou a empresa estatal Petróleo Brasileiro S.A. (Petrobras) e instituiu o monopólio estatal sobre a pesquisa, lavra, refino e transporte do petróleo em território brasileiro. A aprovação da lei foi resultado de uma intensa mobilização cívica popular que uniu estudantes da UNE, militares nacionalistas e sindicatos sob o lema "O Petróleo é Nosso!".',
      source: 'Nacionalismo e Desenvolvimento no Brasil: 1945-1964'
    },
    prompt: 'A fundação da Petrobras expressou o confronto político entre dois projetos econômicos antagônicos no Brasil dos anos 1950:',
    options: [
      { id: 'a', text: 'o nacional-desenvolvimentismo getulista, que defendia o controle estatal dos setores estratégicos de energia para viabilizar a industrialização, versus o liberalismo internacionalista da UDN, que defendia a concessão irrestrita das jazidas ao capital estrangeiro.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'o comunismo soviético agrário versus a restauração do absolutismo monárquico dos Bragança.', isCorrect: false, distractorRationale: 'A disputa era no marco republicano moderno entre desenvolvimentismo estatal capitalista e liberalismo cosmopolita pró-EUA.' },
      { id: 'c', text: 'o desarmamento pacífico internacional contra a queima de todo o petróleo nacional em fogueiras.', isCorrect: false, distractorRationale: 'O objetivo era extrair e refinar petróleo para abastecer caminhões, automóveis e indústrias nacionais.' },
      { id: 'd', text: 'a proibição da utilização de automóveis e veículos pesados nas rodovias brasileiras.', isCorrect: false, distractorRationale: 'A demanda por petróleo crescia justamente pelo rápido processo de rodoviarismo e transporte rodoviário.' },
      { id: 'e', text: 'a transferência da sede governamental da Petrobras para o controle direto da Standard Oil norte-americana.', isCorrect: false, distractorRationale: 'A Petrobras foi fundada com monopólio ESTATAL exatamente para barrar o cartel estrangeiro das "Sete Irmãs" do petróleo.' }
    ],
    detailedExplanation: {
      summary: 'A criação da Petrobras em 1953 cristalizou a polarização da década de 1950 entre "nacionalistas" (trabalhistas do PTB e militares patriotas, favoráveis ao monopólio estatal da energia) e "entreguistas" (liberais da UDN, favoráveis à entrada livre de petrolíferas transnacionais norte-americanas). Vargas garantiu a soberania energética, essencial para o salto industrial subsequente.',
      stepByStep: [
        '1. Campanha "O Petróleo é Nosso!": Movimento de massas iniciado no Clube Militar e abraçado pela União Nacional dos Estudantes (UNE).',
        '2. Polêmica legislativa: A UDN de Carlos Lacerda e Juarez Távora argumentava que o Brasil não tinha tecnologia nem petróleo e que o monopólio estatal afastaria capitais.',
        '3. Lei 2.004 de 1953: Criação da Petrobras com monopólio estatal da pesquisa e refino (a distribuição em postos foi deixada ao setor privado).',
        '4. Repercussão geopolítica: O nacionalismo petrolífero acirrou a fúria das elites e dos conglomerados estrangeiros contra Vargas, culminando na crise política que levou ao seu suicídio em 1954.'
      ],
      coreConcept: 'Nacional-Desenvolvimentismo vs Liberalismo: Campanha "O Petróleo é Nosso" e a Fundação da Petrobras',
      trapWarning: 'No ENEM: lembre-se de que a Petrobras nasceu com monopólio estatal de EXPLORAÇÃO e REFINO, mas a distribuição nos postos de combustíveis continuou aberta a companhias privadas nacionais e estrangeiras.'
    },
    commonTraps: [
      'Achar que a Petrobras foi criada no primeiro governo Vargas (ela foi criada no segundo mandato democrático, em 1953)',
      'Confundir a posição da UDN (liberal pró-capital estrangeiro) com a do PTB/Vargas (nacionalista estatal)'
    ],
    tags: ['petrobras', 'o-petroleo-e-nosso', 'nacional-desenvolvimentismo', 'getulio-vargas', 'energia'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-024',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Governos Democráticos',
    subtopic: 'O Plano de Metas de Juscelino Kubitschek e o Modelo do Tripé Econômico',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'application',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Eleito presidente da República, Juscelino Kubitschek (1956-1961) lançou o Plano de Metas sob o famoso slogan "50 anos de progresso em 5 anos de governo". O plano priorizou energia, transportes e indústria de base, culminando na construção da nova capital federal, Brasília, e na atração em larga escala de multinacionais automobilísticas como Volkswagen, Ford e General Motors.',
      source: 'História do Desenvolvimento Brasileiro e os Anos JK'
    },
    prompt: 'A engenharia financeira e estrutural do modelo de desenvolvimento implementado por JK ficou conhecida como o "Tripé Econômico", fundamentado na articulação entre:',
    options: [
      { id: 'a', text: 'o Estado (financiando infraestrutura, estradas e siderurgia), o capital privado nacional (produzindo bens de consumo não duráveis) e o capital estrangeiro transnacional (investindo na indústria automobilística e de bens duráveis).', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'o latifúndio monocultor de cana, os mosteiros beneditinos e o comércio escravista luso-africano.', isCorrect: false, distractorRationale: 'Essa estrutura pertence ao Brasil Colonial açucareiro, e não à modernização urbana-industrial dos anos 1950.' },
      { id: 'c', text: 'o fechamento autárquico da economia brasileira a qualquer capital estrangeiro e o confisco de automóveis privados.', isCorrect: false, distractorRationale: 'O governo JK abriu as portas e concedeu volumosos incentivos cambiais à entrada de montadoras transnacionais (Instrução 113 da Sumoc).' },
      { id: 'd', text: 'a privatização integral de todas as hidrelétricas e a extinção de ministérios e bancos estatais.', isCorrect: false, distractorRationale: 'O Estado expandiu pesadamente sua atuação direta fundando Furnas e construindo a infraestrutura pesada.' },
      { id: 'e', text: 'a adoção do padrão monetário ouro associada à proibição de estradas rodoviárias em todo o país.', isCorrect: false, distractorRationale: 'JK priorizou o rodoviarismo ("governar é abrir estradas") em detrimento do transporte ferroviário.' }
    ],
    detailedExplanation: {
      summary: 'O governo JK operou a consolidação industrial brasileira através do modelo do tripé: 1) Capital Estatal nos setores de grande investimento e baixo retorno imediato (energia, rodovias, siderurgia); 2) Capital Privado Nacional no consumo tradicional (têxtil, alimentos); 3) Capital Estrangeiro nos setores de alta tecnologia (automobilístico, eletrodomésticos, químico). O preço desse salto foi o rodoviarismo dependente, o endividamento externo e a escalada da inflação.',
      stepByStep: [
        '1. Metas JK: 31 metas distribuídas em 5 setores: Energia, Transporte, Indústria de Base, Alimentação e Educação (a "meta-síntese" foi a construção de Brasília).',
        '2. O Tripé Econômico: Cada agente econômico assumiu um papel complementar no desenvolvimento capitalista.',
        '3. Opção pelo Rodoviarismo: Descentralizou o transporte sobre trilhos em favor da malha rodoviária para absorver os caminhões e carros das montadoras estrangeiras atraídas ao ABC Paulista.',
        '4. Construção de Brasília (1960): Interiorização da capital, integração do Centro-Oeste e afirmação simbólica da modernidade nacional.',
        '5. Contradições do legado: Emissão monetária descontrolada para custear as obras gerou forte inflação e quadruplicou a dívida externa herdada pelos governos seguintes.'
      ],
      coreConcept: 'Plano de Metas de JK: O Tripé Econômico, Rodoviarismo e a Construção de Brasília',
      trapWarning: 'Cuidado: apesar do otimismo do "desenvolvimentismo" dos anos dourados de JK, o modelo aprofundou a dependência do transporte rodoviário (petróleo) e deixou uma herança severa de inflação e desigualdade regional.'
    },
    commonTraps: [
      'Achar que o Plano de Metas atingiu com o mesmo êxito as metas de Educação e Alimentação (essas duas foram as mais negligenciadas)',
      'Desconhecer que o capital estrangeiro entrou com força na indústria automobilística durante a gestão JK'
    ],
    tags: ['anos-jk', 'plano-de-metas', 'tripe-economico', 'rodoviarismo', 'brasilia'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  },
  {
    id: 'HUM-VARGAS-025',
    area: 'humanas',
    competence: 2,
    skill: 8,
    topic: 'Governos Democráticos',
    subtopic: 'A Política Externa Independente (PEI) no Início dos Anos 1960',
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: 'application',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Em 1961, durante o curto mandato do presidente Jânio Quadros e mantida sob a presidência de João Goulart, o Itamaraty formulou a chamada Política Externa Independente (PEI), sob a condução de diplomatas como Afonso Arinos e San Tiago Dantas. Em pleno auge da Guerra Fria, a diretriz rompeu com o alinhamento automático incondicional aos Estados Unidos, restabeleceu laços diplomáticos e comerciais com a União Soviética e a China, defendeu o princípio da não intervenção na Revolução Cubana e apoiou os movimentos de descolonização na África e na Ásia.',
      source: 'História das Relações Internacionais do Brasil e a Guerra Fria'
    },
    prompt: 'O principal objetivo geoestratégico da Política Externa Independente (PEI) para a inserção internacional do Brasil era:',
    options: [
      { id: 'a', text: 'ampliar os mercados exportadores para os produtos brasileiros e afirmar a autonomia diplomática soberana do país sem subordinação mecânica à bipolaridade da Guerra Fria.', isCorrect: true, distractorRationale: null },
      { id: 'b', text: 'declarar guerra aberta aos países da Europa Ocidental para confiscar seus territórios coloniais.', isCorrect: false, distractorRationale: 'A PEI defendia o pacifismo, a autodeterminação dos povos e a solução negociada de controvérsias na ONU.' },
      { id: 'c', text: 'romper qualquer relação de comércio com os Estados Unidos da América.', isCorrect: false, distractorRationale: 'O Brasil buscou diversificar parcerias sem romper relações com os EUA, recusando apenas o alinhamento cego e submisso.' },
      { id: 'd', text: 'integrar formalmente o Brasil como república soviética integrante do Pacto de Varsóvia.', isCorrect: false, distractorRationale: 'O Brasil participou do Movimento dos Não Alinhados como observador, preservando sua soberania e regime capitalista.' },
      { id: 'e', text: 'submeter a política externa brasileira às deliberações exclusivas da Coroa britânica.', isCorrect: false, distractorRationale: 'A proposta da PEI era justamente a afirmação de autonomia e soberania nacional anticolonial.' }
    ],
    detailedExplanation: {
      summary: 'A Política Externa Independente (PEI) de 1961 a 1964 representou uma virada pragmática no Itamaraty: em vez de aceitar passivamente o papel de satélite subordinado a Washington na Guerra Fria, o Brasil buscou novos mercados para sua indústria e agricultura no bloco socialista e no Terceiro Mundo (Ásia/África), defendendo o princípio da autodeterminação dos povos.',
      stepByStep: [
        '1. Doutrina anterior (Dutra): Alinhamento incondicional aos EUA (rompimento com a URSS e caça aos comunistas).',
        '2. Princípios da PEI (Jânio/Jango): Universalismo diplomático, não alinhamento automático a blocos militares, defesa do desarmamento e anticolonialismo.',
        '3. Atos simbólicos marcantes: Restabelecimento de laços com URSS e China comunista; condecoração de Ernesto Che Guevara por Jânio Quadros com a Ordem do Cruzeiro do Sul (o que enfureceu a direita militar e a UDN).',
        '4. Consequência geopolítica: A autonomia da PEI e a recusa brasileira em sancionar Cuba na OEA irritaram profundamente o governo dos EUA (John F. Kennedy / Lyndon Johnson), que passou a conspirar e financiar o golpe civil-militar de 1964.',
        '5. Repercussão histórica: As bases da PEI inspiraram a diplomacia universalista brasileira em governos posteriores (como no governo Geisel e na política externa contemporânea).'
      ],
      coreConcept: 'Política Externa Independente (PEI): Universalismo, Não Alinhamento e Autonomia Nacional',
      trapWarning: 'No ENEM: A PEI não era uma adesão ao comunismo! Era uma diplomacia PRAGMÁTICA comercial voltada a vender café, açúcar e produtos brasileiros para qualquer país do mundo, independentemente de ideologia.'
    },
    commonTraps: [
      'Achar que a PEI transformou o Brasil em um país comunista alinhado à URSS',
      'Esquecer que a PEI foi iniciada por Jânio Quadros e continuada por João Goulart'
    ],
    tags: ['politica-externa-independente', 'pei', 'janio-quadros', 'guerra-fria', 'itamaraty'],
    status: 'published',
    version: 1,
    createdAt: '2026-10-01'
  }
];

