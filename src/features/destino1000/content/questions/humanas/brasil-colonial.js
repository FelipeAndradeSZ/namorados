export const QUESTIONS_BRASIL_COLONIAL = [
  {
    id: "HUM-BRC-001",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Brasil Colônia",
    subtopic: "Economia Açucareira",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "salvador",
    hubId: "pelourinho",
    context: {
      supportText: "O açúcar foi o produto escolhido por Portugal para dar início à colonização efetiva do Brasil, em meados do século XVI. A escolha não foi acidental: os portugueses já tinham experiência com a cultura da cana nas ilhas atlânticas, o produto tinha alto valor no mercado europeu e a empresa contou com o financiamento de capitais holandeses.",
      source: "Original, baseado em historiografia clássica (Celso Furtado)."
    },
    prompt: "A implementação da empresa açucareira no Nordeste brasileiro durante o período colonial dependeu de um conjunto de fatores estruturais. Qual característica sociopolítica ou econômica foi fundamental para a estruturação dessa atividade?",
    options: [
      { id: "a", text: "O trabalho assalariado de colonos portugueses pobres.", isCorrect: false, distractorRationale: "Confunde com modelos de colonização de povoamento, enquanto no Brasil predominou o trabalho escravo." },
      { id: "b", text: "A produção voltada prioritariamente para o abastecimento do mercado interno.", isCorrect: false, distractorRationale: "O foco era a exportação (plantation), não o mercado interno." },
      { id: "c", text: "A adoção do sistema de plantation, baseado em latifúndio, monocultura e trabalho escravo.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "A ausência de investimentos estrangeiros na infraestrutura dos engenhos.", isCorrect: false, distractorRationale: "O texto-base cita o financiamento holandês." },
      { id: "e", text: "A distribuição igualitária de pequenas propriedades familiares.", isCorrect: false, distractorRationale: "O modelo baseava-se em grandes latifúndios." }
    ],
    detailedExplanation: {
      summary: "A economia açucareira colonial baseou-se no modelo de plantation.",
      stepByStep: [
        "Identificar o contexto: colonização do Brasil no século XVI.",
        "Relembrar as características do cultivo da cana: plantation.",
        "Associar plantation aos seus três pilares: latifúndio (grandes extensões), monocultura (foco no açúcar) e escravidão (inicialmente indígena, depois africana)."
      ],
      coreConcept: "Sistema de Plantation e Economia Colonial",
      trapWarning: "Cuidado para não ignorar o papel do capital holandês na economia colonial portuguesa."
    },
    commonTraps: ["confundir mercado interno com externo", "ignorar a estrutura fundiária"],
    tags: ["brasil-colonia", "economia", "acucar", "escravidao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-002",
    area: "humanas",
    competence: 1,
    skill: 5,
    topic: "Escravidão",
    subtopic: "Resistência Negra",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "salvador",
    hubId: "museu-afro",
    context: {
      supportText: "Documento histórico: 'Revolta dos Malês (1835). Os rebeldes pretendiam tomar a cidade de Salvador e instituir um governo islâmico. Vestidos com abadás brancos, os africanos, muitos deles letrados e muçulmanos, organizaram um dos levantes mais sofisticados do período imperial.'",
      source: "João José Reis, Rebelião Escrava no Brasil (adaptado)."
    },
    prompt: "A Revolta dos Malês, ocorrida na Bahia em 1835, destaca-se entre as diversas formas de resistência à escravidão no Brasil. O aspecto singular que diferenciou esse movimento de outras rebeliões escravas foi:",
    options: [
      { id: "a", text: "O apoio irrestrito da elite agrária baiana, descontente com os impostos imperiais.", isCorrect: false, distractorRationale: "A elite agrária baiana reprimiu a revolta, não a apoiou." },
      { id: "b", text: "A liderança de negros muçulmanos alfabetizados em árabe, evidenciando uma articulação político-religiosa.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A aliança militar com povos indígenas do sertão nordestino.", isCorrect: false, distractorRationale: "A revolta teve caráter urbano e foco na população africana islâmica." },
      { id: "d", text: "O sucesso do levante, que conseguiu abolir a escravidão na província da Bahia por uma década.", isCorrect: false, distractorRationale: "A revolta foi rapidamente reprimida pelas autoridades." },
      { id: "e", text: "A reivindicação central de retorno em massa ao continente africano com financiamento do Império.", isCorrect: false, distractorRationale: "O objetivo principal era tomar o controle local, embora alguns rebeldes quisessem retornar." }
    ],
    detailedExplanation: {
      summary: "A Revolta dos Malês foi liderada por escravizados africanos muçulmanos e alfabetizados.",
      stepByStep: [
        "Ler o documento e identificar a natureza do levante.",
        "Destacar as palavras-chave: 'letrados', 'muçulmanos', 'abadas brancos'.",
        "Concluir que a religião islâmica e a alfabetização em árabe foram fundamentais para a comunicação e organização do movimento."
      ],
      coreConcept: "Resistência escrava e identidades africanas no Brasil",
      trapWarning: "Evitar a generalização de que todas as rebeliões escravas tinham os mesmos líderes ou características."
    },
    commonTraps: ["generalização das revoltas", "assumir sucesso militar"],
    tags: ["imperio", "escravidao", "males", "resistencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-003",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Era Vargas",
    subtopic: "Legislação Trabalhista e Sindicalismo",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "text",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "rio-de-janeiro",
    hubId: "paco-imperial",
    context: {
      supportText: "Em 1943, o governo de Getúlio Vargas consolidou as Leis do Trabalho (CLT). Em seus discursos de 1º de maio, Vargas frequentemente se referia aos trabalhadores como 'trabalhadores do Brasil', apresentando-se como um 'pai' que lhes concedia direitos, enquanto o Estado passava a controlar e atrelar os sindicatos ao Ministério do Trabalho.",
      source: "Discursos de Getúlio Vargas, 1930-1945 (adaptado)."
    },
    prompt: "A política trabalhista implementada durante o Estado Novo (1937-1945) caracterizou-se pela dupla face de concessão de direitos e controle estatal. Essa estratégia de Vargas tinha como objetivo político primordial:",
    options: [
      { id: "a", text: "Fomentar a independência dos sindicatos para preparar o Brasil para o socialismo.", isCorrect: false, distractorRationale: "O Estado Novo era autoritário e reprimia fortemente o comunismo/socialismo." },
      { id: "b", text: "Reduzir o poder da burguesia industrial, transferindo os meios de produção aos operários.", isCorrect: false, distractorRationale: "Vargas promoveu a industrialização e apoiou a burguesia nacional, sem ameaçar a propriedade privada." },
      { id: "c", text: "Neutralizar os conflitos de classe e enquadrar a classe operária no projeto nacionalista e autoritário do Estado.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "Atender às exigências de órgãos internacionais para a inserção do Brasil no mercado global liberal.", isCorrect: false, distractorRationale: "A política era voltada para dentro (nacionalismo econômico) e não para exigências externas liberais." },
      { id: "e", text: "Desarticular o setor urbano para fortalecer as oligarquias rurais exportadoras de café.", isCorrect: false, distractorRationale: "Vargas focava no desenvolvimento urbano-industrial e na redução do poder das antigas oligarquias." }
    ],
    detailedExplanation: {
      summary: "Vargas usou a CLT e o corporativismo para controlar as massas e evitar o conflito de classes.",
      stepByStep: [
        "Compreender a figura de Vargas: líder populista, nacionalista e autoritário (Estado Novo).",
        "Analisar o impacto da CLT: concessão de direitos trabalhistas inéditos.",
        "Relacionar os direitos ao atrelamento sindical: os sindicatos perdem autonomia e viram braços do Estado.",
        "Concluir que o objetivo era manter a paz social (neutralizar conflitos de classe) e apoiar a industrialização sob controle estatal."
      ],
      coreConcept: "Populismo, Corporativismo e Estado Novo",
      trapWarning: "Cuidado com o mito de 'pai dos pobres'; os direitos foram conquistas reguladas para manter o controle."
    },
    commonTraps: ["acreditar na benevolência absoluta do Estado", "confundir com movimentos socialistas"],
    tags: ["era-vargas", "trabalho", "estado-novo", "corporativismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-004",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Período Imperial",
    subtopic: "Abolição da Escravatura",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "rio-de-janeiro",
    hubId: "paco-imperial",
    context: {
      supportText: "A Lei Áurea (1888) decretou o fim oficial da escravidão no Brasil. Contudo, as décadas seguintes foram marcadas pela ausência de políticas públicas para a inserção socioeconômica dos ex-escravizados, que foram relegados a subempregos, moradias precárias e forte discriminação racial na nascente República.",
      source: "Historiografia contemporânea sobre o Pós-Abolição."
    },
    prompt: "Analisando as consequências sociais da abolição no Brasil, é correto afirmar que o processo de emancipação caracterizou-se pela:",
    options: [
      { id: "a", text: "Imediata distribuição de terras (reforma agrária) aos libertos para garantir sua subsistência.", isCorrect: false, distractorRationale: "Nunca houve distribuição de terras aos ex-escravizados; a Lei de Terras de 1850 já havia dificultado o acesso." },
      { id: "b", text: "Substituição total e imediata da mão de obra escrava por imigrantes europeus em todas as regiões do país.", isCorrect: false, distractorRationale: "Ocorreu em SP e no Sul, mas outras regiões, como o Nordeste, mantiveram ex-escravos em relações de dependência." },
      { id: "c", text: "Abolição formal sem garantia de direitos de cidadania plena, resultando na marginalização da população negra.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "Integração plena da população negra no incipiente setor industrial paulista e carioca.", isCorrect: false, distractorRationale: "Na indústria, privilegiou-se a contratação de imigrantes europeus." },
      { id: "e", text: "Criação de programas de indenização financeira aos ex-escravizados pelo trabalho não remunerado.", isCorrect: false, distractorRationale: "Não houve indenização para os ex-escravizados (alguns projetos debateram indenizar os senhores)." }
    ],
    detailedExplanation: {
      summary: "A abolição não foi acompanhada de integração social ou econômica para os libertos.",
      stepByStep: [
        "A Lei Áurea acabou com a situação jurídica da escravidão.",
        "Não houve projeto de integração (como educação, reforma agrária ou emprego).",
        "O resultado foi a continuidade da marginalização estrutural da população negra na sociedade brasileira republicana."
      ],
      coreConcept: "Abolição inconclusa e desigualdade estrutural",
      trapWarning: "Muitos estudantes acreditam que a abolição encerrou o racismo ou garantiu direitos imediatos."
    },
    commonTraps: ["mito da democracia racial", "superestimar o alcance da Lei Áurea"],
    tags: ["abolicao", "imperio", "racismo-estrutural", "sociedade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-005",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Economia Colonial",
    subtopic: "Mineração",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "belo-horizonte",
    hubId: "ouro-preto",
    context: {
      supportText: "Durante o século XVIII, a descoberta de ouro em Minas Gerais alterou profundamente a dinâmica colonial. O eixo econômico deslocou-se do Nordeste para o Centro-Sul, surgiram vilas e arraiais, e o mercado interno ganhou impulso para abastecer a crescente população mineradora.",
      source: "Laura de Mello e Souza, Desclassificados do Ouro (adaptado)."
    },
    prompt: "A economia mineradora no Brasil colonial representou uma ruptura com o modelo exclusivamente agroexportador açucareiro. Uma das principais transformações socioeconômicas promovidas pela mineração foi:",
    options: [
      { id: "a", text: "O fim do trabalho escravo, substituído pelo trabalho livre nas minas de ouro.", isCorrect: false, distractorRationale: "A mineração continuou baseada predominantemente no trabalho escravo africano." },
      { id: "b", text: "O estímulo à formação de um mercado interno articulado e o surgimento de uma sociedade urbana e mais móvel.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A descentralização administrativa, com enfraquecimento do controle fiscal português.", isCorrect: false, distractorRationale: "Houve enorme aumento do controle fiscal e administrativo por parte de Portugal (ex: Intendência das Minas, Derrama)." },
      { id: "d", text: "O isolamento da região das minas em relação ao restante da colônia, focando apenas no comércio direto com a Europa.", isCorrect: false, distractorRationale: "Ocorreu o oposto: integração das regiões para abastecimento (gado do sul, escravos de portos, etc)." },
      { id: "e", text: "A criação de uma sociedade estritamente igualitária, sem estratificação social nas áreas urbanas.", isCorrect: false, distractorRationale: "A sociedade mineradora era altamente hierarquizada, apesar de ter mais mobilidade que a do açúcar." }
    ],
    detailedExplanation: {
      summary: "A mineração criou vida urbana, um mercado interno integrado e certa mobilidade social.",
      stepByStep: [
        "Comparar a sociedade do açúcar (rural, bipolar, rígida) com a do ouro.",
        "A mineração exigia abastecimento de alimentos, roupas e mulas, criando um mercado interno.",
        "As pessoas viviam em vilas, o que gerou ofícios urbanos (artesãos, comerciantes, profissionais liberais).",
        "A estrutura social tornou-se mais complexa e permitiu ligeira mobilidade (alforrias)."
      ],
      coreConcept: "Sociedade Mineradora e Mercado Interno Colonial",
      trapWarning: "Cuidado: a mobilidade social existia, mas o sistema continuava sendo escravocrata e opressor."
    },
    commonTraps: ["achar que a mineração acabou com a escravidão", "confundir controle fiscal com autonomia"],
    tags: ["mineracao", "colonia", "ouro-preto", "mercado-interno"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
