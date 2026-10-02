export const QUESTIONS_MEIO_AMBIENTE = [
  {
    id: "HUM-AMB-001",
    area: "humanas",
    competence: 6,
    skill: 27,
    topic: "Geografia",
    subtopic: "Problemas Ambientais Urbanos",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante os meses de inverno em grandes metrópoles como São Paulo, é comum a ocorrência de um fenômeno climático que agrava a poluição do ar. Esse fenômeno ocorre quando uma camada de ar quente se sobrepõe a uma camada de ar frio próximo à superfície, impedindo a dispersão dos poluentes gerados pelas indústrias e veículos.",
      source: "Original"
    },
    prompt: "O fenômeno climático descrito no texto, que intensifica problemas respiratórios nas populações urbanas, é conhecido como:",
    options: [
      { id: "a", text: "efeito estufa, que retém o calor global na atmosfera.", isCorrect: false, distractorRationale: "Efeito estufa é um fenômeno global de retenção de calor pelos gases (CO2, metano), não a retenção local de poluentes por ar frio." },
      { id: "b", text: "ilha de calor, onde o centro urbano fica mais quente que a periferia.", isCorrect: false, distractorRationale: "Ilhas de calor ocorrem pela absorção de calor no asfalto/concreto, e não bloqueiam a dispersão vertical do ar frio." },
      { id: "c", text: "inversão térmica, que altera a circulação vertical do ar.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "chuva ácida, resultante da combinação de poluentes com a umidade atmosférica.", isCorrect: false, distractorRationale: "Chuva ácida é a precipitação poluída, não o aprisionamento dos gases no ar." },
      { id: "e", text: "el niño, que altera os padrões de temperatura dos oceanos.", isCorrect: false, distractorRationale: "El Niño é um fenômeno macroclimático oceânico e não um efeito localizado em cidades." }
    ],
    detailedExplanation: {
      summary: "A inversão térmica prende o ar frio e pesado (com poluentes) perto da superfície urbana.",
      stepByStep: [
        "Normalmente, o ar quente perto do solo sobe, levando os poluentes embora (convecção).",
        "No inverno, o solo esfria rapidamente. O ar frio fica pesado e preso embaixo, com uma tampa de ar quente por cima.",
        "Sem a subida do ar, a poluição de carros e fábricas não se dispersa, causando 'smog'."
      ],
      coreConcept: "Inversão Térmica e poluição atmosférica.",
      trapWarning: "Embora todos os distratores sejam problemas ambientais válidos, apenas a inversão térmica descreve o aprisionamento do ar frio."
    },
    commonTraps: ["Confundir com Ilha de Calor", "Confundir com Efeito Estufa"],
    tags: ["Inversão Térmica", "Poluição", "Clima Urbano"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-002",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia",
    subtopic: "Agronegócio e Impactos Ambientais",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O bioma Cerrado, conhecido como a 'caixa d'água do Brasil' por abrigar as nascentes das principais bacias hidrográficas do país, sofreu um intenso processo de devastação nas últimas décadas. A substituição da vegetação nativa tem causado o esgotamento dos solos e a redução dos recursos hídricos.",
      source: "Original"
    },
    prompt: "A principal atividade econômica responsável pela rápida alteração e desmatamento do bioma Cerrado desde a segunda metade do século XX é a:",
    options: [
      { id: "a", text: "extração de madeira para a indústria moveleira nacional.", isCorrect: false, distractorRationale: "A extração de madeira nobre atinge principalmente a Floresta Amazônica, não o Cerrado." },
      { id: "b", text: "mineração artesanal e industrial de ouro em leitos de rios.", isCorrect: false, distractorRationale: "Embora haja garimpo em áreas do cerrado, não é a principal causa do grande desmatamento sistêmico recente." },
      { id: "c", text: "expansão da fronteira agrícola impulsionada pela cultura da soja e pecuária bovina.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "crescimento desenfreado de grandes centros urbanos e industrializados.", isCorrect: false, distractorRationale: "O centro-oeste urbanizou-se, mas o desmatamento massivo deve-se ao uso rural do solo." },
      { id: "e", text: "cultivo tradicional de subsistência praticado por populações indígenas e quilombolas.", isCorrect: false, distractorRationale: "Cultivos de subsistência tradicionais têm baixo impacto ambiental comparado ao agronegócio de exportação." }
    ],
    detailedExplanation: {
      summary: "A expansão do agronegócio é a força motriz do desmatamento no Cerrado.",
      stepByStep: [
        "Na década de 1970, o Estado incentivou a ocupação do Centro-Oeste (Revolução Verde, calagem do solo).",
        "A região tornou-se o principal polo produtor de commodities (soja, milho, carne).",
        "A substituição de extensas áreas de vegetação por monoculturas causa compactação e perda de água no solo."
      ],
      coreConcept: "Expansão da Fronteira Agrícola e impactos no Cerrado.",
      trapWarning: "Cuidado com associações estereotipadas de desmatamento apenas com extração de madeira; no Cerrado, o foco é limpeza de área para plantio."
    },
    commonTraps: ["Confundir dinâmicas do Cerrado com as da Amazônia"],
    tags: ["Cerrado", "Fronteira Agrícola", "Agronegócio", "Desmatamento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-003",
    area: "humanas",
    competence: 6,
    skill: 29,
    topic: "Geografia",
    subtopic: "Mudanças Climáticas e Geopolítica Ambiental",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "text",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No âmbito das negociações internacionais sobre mudanças climáticas, cunhou-se o princípio das 'responsabilidades comuns, porém diferenciadas'. Segundo esse princípio, embora todos os países devam atuar para mitigar o aquecimento global, alguns devem assumir metas de redução de emissões mais rigorosas do que outros.",
      source: "Declaração do Rio, 1992 (Adaptado)"
    },
    prompt: "O princípio das 'responsabilidades comuns, porém diferenciadas' fundamenta-se no reconhecimento de que:",
    options: [
      { id: "a", text: "os países ricos possuem maior dívida histórica pelas emissões acumuladas desde a Revolução Industrial.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "os países em desenvolvimento são os maiores emissores atuais devido à falta de leis ambientais.", isCorrect: false, distractorRationale: "Isso anularia o princípio; a cobrança maior recai sobre países ricos (histórico)." },
      { id: "c", text: "o aquecimento global atinge exclusivamente o hemisfério sul, poupando os países do norte.", isCorrect: false, distractorRationale: "As mudanças climáticas são globais e afetam todos, embora de formas diferentes." },
      { id: "d", text: "a tecnologia verde deve ser vendida pelos países centrais para forçar o endividamento dos periféricos.", isCorrect: false, distractorRationale: "Isso é uma teoria conspiratória/crítica econômica, mas não é a justificativa do tratado internacional." },
      { id: "e", text: "as nações industrializadas têm menos recursos financeiros para arcar com os custos de transição energética.", isCorrect: false, distractorRationale: "As nações industrializadas têm MAIS recursos, por isso lhes cabe uma responsabilidade maior." }
    ],
    detailedExplanation: {
      summary: "Países desenvolvidos emitiram muito mais carbono no passado e por isso devem assumir a liderança no corte de emissões.",
      stepByStep: [
        "A Revolução Industrial ocorreu nos países do Norte global nos séculos XVIII e XIX.",
        "Esses países enriqueceram queimando combustíveis fósseis por séculos.",
        "Portanto, os países em desenvolvimento argumentam que não podem sofrer as mesmas restrições econômicas que aqueles que já se desenvolveram e poluíram historicamente."
      ],
      coreConcept: "Geopolítica ambiental e responsabilidade histórica.",
      trapWarning: "Observe que a responsabilidade é baseada na emissão de CO2 *histórica acumulada*, não apenas nos fluxos atuais."
    },
    commonTraps: ["Ignorar o aspecto histórico das emissões de CO2"],
    tags: ["Acordos Climáticos", "Geopolítica", "Aquecimento Global"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-004",
    area: "humanas",
    competence: 6,
    skill: 27,
    topic: "Geografia",
    subtopic: "Recursos Hídricos",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A transposição do Rio São Francisco é uma grande obra de infraestrutura no Nordeste brasileiro. O projeto envolve a captação de água do rio para canais artificiais que levam o recurso a bacias hidrográficas menores na região do semiárido, com o intuito de garantir segurança hídrica à população local.",
      source: "Original"
    },
    prompt: "Um dos principais argumentos críticos de movimentos ambientalistas e sociais em relação ao projeto de transposição do Rio São Francisco aponta que:",
    options: [
      { id: "a", text: "a obra priorizou o acesso à água para consumo humano de subsistência, prejudicando as plantações irrigadas de exportação.", isCorrect: false, distractorRationale: "Os críticos dizem exatamente o oposto: a água beneficia o agronegócio e não chega aos mais pobres." },
      { id: "b", text: "a transposição aumentaria irreversivelmente o volume de água nos oceanos, agravando as inundações costeiras.", isCorrect: false, distractorRationale: "A transposição desvia água do rio, não cria água nos oceanos." },
      { id: "c", text: "o projeto tenderia a beneficiar grandes empreendimentos do agronegócio em detrimento das populações difusas no sertão.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "o desvio da água do rio geraria o congelamento das secas sazonais que são benéficas para o solo do agreste.", isCorrect: false, distractorRationale: "Secas severas não são benéficas, são problemas socioambientais graves." },
      { id: "e", text: "a obra utilizou mão de obra estrangeira para a escavação, não promovendo o desenvolvimento tecnológico local.", isCorrect: false, distractorRationale: "Não é a principal crítica ambiental e social ao projeto; empreiteiras nacionais realizaram a obra." }
    ],
    detailedExplanation: {
      summary: "Críticos apontam que o eixo da obra atende majoritariamente interesses do capital agrário e industrial.",
      stepByStep: [
        "A obra custou bilhões e demorou muitos anos.",
        "Os canais passam por áreas onde predomina o agronegócio irrigado e especulação imobiliária.",
        "Sertanejos que vivem longe dos eixos principais dos canais e ramificações continuam dependentes de caminhão-pipa e cisternas."
      ],
      coreConcept: "Conflitos pelo uso da água e Transposição do São Francisco.",
      trapWarning: "Cuidado com discursos populistas que tratam a transposição como salvação imediata e equânime de toda a população nordestina."
    },
    commonTraps: ["Acreditar no discurso oficial sem olhar o lado crítico/socioespacial"],
    tags: ["Rio São Francisco", "Nordeste", "Gestão de Recursos Hídricos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-005",
    area: "humanas",
    competence: 6,
    skill: 26,
    topic: "Geografia",
    subtopic: "Matrizes Energéticas",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Brasil destaca-se mundialmente por possuir uma das matrizes elétricas mais renováveis do planeta. No entanto, em anos de escassez prolongada de chuvas, o país frequentemente precisa acionar usinas termelétricas movidas a combustíveis fósseis para garantir o abastecimento de energia.",
      source: "Original - Dados do ONS (Operador Nacional do Sistema)"
    },
    prompt: "O acionamento das termelétricas em períodos de seca no Brasil traz, como consequências imediatas, respectivamente, nos âmbitos ambiental e econômico:",
    options: [
      { id: "a", text: "o aumento das emissões de gases de efeito estufa e o encarecimento da tarifa de energia para o consumidor final.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a diminuição da poluição atmosférica e a geração de energia mais barata e subsidiada pelo governo.", isCorrect: false, distractorRationale: "Termelétricas queimam carvão/gás, aumentando poluição, e são muito mais caras." },
      { id: "c", text: "o incentivo à instalação de painéis solares em massa e a estabilização da inflação nacional.", isCorrect: false, distractorRationale: "Acionar termelétricas não incentiva painel solar diretamente, e a conta alta piora a inflação." },
      { id: "d", text: "a redução drástica do desmatamento na Amazônia e a quebra de monopólios no setor de energia.", isCorrect: false, distractorRationale: "O uso de termelétricas não tem impacto direto e imediato na redução do desmatamento amazônico." },
      { id: "e", text: "o esgotamento das reservas de água potável no sul do país e a valorização das ações da Eletrobras.", isCorrect: false, distractorRationale: "As termelétricas (gás, carvão) não esgotam a água potável como as secas nas hidrelétricas." }
    ],
    detailedExplanation: {
      summary: "Usinas termelétricas são mais poluentes (queimam combustíveis) e têm custo de operação muito mais elevado.",
      stepByStep: [
        "A base energética brasileira é hidrelétrica (depende da água das chuvas).",
        "Quando chove pouco, os reservatórios baixam e as hidrelétricas geram menos energia.",
        "Para não haver apagão, liga-se as termelétricas, que queimam gás/óleo (mais poluição).",
        "O custo do combustível é repassado ao consumidor através das bandeiras tarifárias vermelhas (conta mais cara)."
      ],
      coreConcept: "Vulnerabilidades da matriz hidrelétrica e bandeiras tarifárias.",
      trapWarning: "Lembre que 'matriz elétrica' (só energia elétrica) no Brasil é muito limpa, diferentemente da 'matriz energética' (inclui gasolina, diesel de carros), que é mais suja."
    },
    commonTraps: ["Confundir custo da usina com preço para consumidor"],
    tags: ["Matriz Energética", "Termelétricas", "Sustentabilidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
