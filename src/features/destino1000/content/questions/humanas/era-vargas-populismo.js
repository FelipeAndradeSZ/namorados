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
  }
];
