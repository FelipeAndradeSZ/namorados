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
  },
  {
    id: "HUM-AMB-006",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Biomas Brasileiros",
    subtopic: "Cerrado e a Fronteira Agrícola do Matopiba",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considerado a 'caixa-d'água' do Brasil por abrigar as nascentes de oito das doze grandes bacias hidrográficas nacionais, o Cerrado vem sofrendo taxas de desmatamento alarmantes, impulsionadas pela expansão do agronegócio de grãos na região do Matopiba (Maranhão, Tocantins, Piauí e Bahia). A conversão da vegetação nativa com raízes profundas em monoculturas de soja compromete a recarga dos aquíferos subterrâneos.",
      source: "Carlos Nobre et al., Relatório sobre o Cerrado e Recursos Hídricos (adaptado)."
    },
    prompt: "A destruição da vegetação nativa do Cerrado compromete o equilíbrio hidrológico do país principalmente porque:",
    options: [
      { id: "a", text: "reduz a infiltração de água no solo e a recarga dos grandes aquíferos durante a estação chuvosa.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "provoca o congelamento perene das cabeceiras dos afluentes do Rio São Francisco.", isCorrect: false, distractorRationale: "O clima do Cerrado é tropical e não atinge temperaturas de congelamento perene." },
      { id: "c", text: "elimina a evaporação marinha ao longo da costa setentrional brasileira.", isCorrect: false, distractorRationale: "O Cerrado é continental e não influencia diretamente a evaporação sobre as águas do oceano aberto." },
      { id: "d", text: "impede a ocorrência de chuvas orográficas nas encostas litorâneas da Serra do Mar.", isCorrect: false, distractorRationale: "As chuvas orográficas na Serra do Mar decorrem da umidade do Atlântico em contato com o relevo litorâneo." },
      { id: "e", text: "aumenta a salinização subterrânea por acidificação de solos vulcânicos intemperizados.", isCorrect: false, distractorRationale: "O Cerrado assenta-se sobre escudos e bacias sedimentares antigas, sem vulcanismo ativo." }
    ],
    detailedExplanation: {
      summary: "As raízes profundas da vegetação do Cerrado atuam como esponjas que facilitam a infiltração de água, alimentando os lençóis freáticos.",
      stepByStep: [
        "A vegetação do Cerrado possui troncos tortuosos e raízes pivotantes que penetram dezenas de metros no solo para captar água no período seco ('floresta invertida').",
        "Essas raízes criam canalículos que promovem a infiltração de água pluvial e abastecem aquíferos vitais, como o Guarani e o Urucuia.",
        "A substituição do Cerrado por monoculturas de raízes curtas e o uso de maquinário pesado compactam o solo, diminuem a infiltração e aumentam o escoamento superficial e o assoreamento de rios."
      ],
      coreConcept: "O Papel Hidrológico do Cerrado e o Agronegócio no Matopiba",
      trapWarning: "O Cerrado não é apenas savana; é o centro distribuidor de águas de rios que abastecem o Pantanal, o Prata e o Amazonas."
    },
    commonTraps: ["subestimar a importância hídrica do Cerrado", "ignorar as raízes profundas como infiltradoras"],
    tags: ["cerrado", "matopiba", "recursos hidricos", "aquiferos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-007",
    area: "humanas",
    competence: 6,
    skill: 27,
    topic: "Degradação Ambiental",
    subtopic: "Desertificação no Semiárido",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Dados do Ministério do Meio Ambiente e de monitoramento por satélite apontam núcleos críticos de desertificação em áreas do semiárido nordestino, como em Gilbués (PI), Irauçuba (CE) e Cabrobó (PE). Nesses locais, o solo perdeu sua camada fértil orgânica, tornando-se arenoso e improdutivo.",
      source: "Ministério do Meio Ambiente / PAN-Brasil (Programa de Ação Nacional de Combate à Desertificação)."
    },
    prompt: "Entre as causas antrópicas determinantes para o agravamento do processo de desertificação nessas áreas suscetíveis do semiárido brasileiro, incluem-se:",
    options: [
      { id: "a", text: "o sobrepastoreio, a extração vegetal da caatinga para lenha cerâmica e a irrigação mal manejada com salinização do solo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o reflorestamento intensivo com pinus e eucaliptos nas bacias sedimentares do agreste.", isCorrect: false, distractorRationale: "O semiárido sofre com desmatamento e não com reflorestamento comercial massivo de pinus." },
      { id: "c", text: "o derretimento prematuro de geleiras nas serras tabulares do planalto da Borborema.", isCorrect: false, distractorRationale: "Não existem geleiras no relevo do Brasil tropical." },
      { id: "d", text: "a contaminação dos lençóis freáticos por chuva ácida proveniente de refinarias patagônicas.", isCorrect: false, distractorRationale: "Distância geográfica e incoerência atmosférica completa." },
      { id: "e", text: "a deposição excessiva de cinzas vulcânicas expelidas por falhas tectônicas da bacia potiguar.", isCorrect: false, distractorRationale: "Não há vulcanismo no território brasileiro na era geológica atual." }
    ],
    detailedExplanation: {
      summary: "A desertificação no semiárido é fruto da combinação de aridez climática com práticas agrícolas predatórias e salinização.",
      stepByStep: [
        "A Caatinga é um bioma adaptado à escassez hídrica, mas sua retirada desprotege o solo contra a insolação intensa.",
        "O sobrepastoreio de caprinos e bovinos pisoteia e compacta o solo, destruindo a cobertura herbácea.",
        "Em áreas irrigadas sem drenagem adequada, a forte evaporação deixa os sais na superfície, provocando a salinização e a desertificação irreversível da terra."
      ],
      coreConcept: "Desertificação e Salinização em Regiões Semiáridas",
      trapWarning: "Desertificação é diferente de arenização (que ocorre no Rio Grande do Sul por processos eólicos em solos frágeis)."
    },
    commonTraps: ["confundir desertificação com arenização", "desconsiderar a salinização por irrigação inadequada"],
    tags: ["desertificacao", "caatinga", "semiarido", "salinizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-008",
    area: "humanas",
    competence: 6,
    skill: 29,
    topic: "Biomas Brasileiros",
    subtopic: "Pantanal e Queimadas Extremas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Pantanal mato-grossense, maior planície alagável contínua do planeta, registrou em anos recentes episódios de estiagem extrema acompanhados por incêndios florestais de proporções históricas. O ciclo natural do pulso de inundação, que regula a dinâmica hídrica e a renovação dos solos da planície, sofreu interferências conjuntas de secas plurianuais e drenagem de nascentes nas chapadas do planalto circundante.",
      source: "Instituto SOS Pantanal / MapBiomas Fogo (adaptado)."
    },
    prompt: "O impacto catastrófico do fogo na fauna e flora pantaneira durante períodos de seca severa é agravado pelo fato de que:",
    options: [
      { id: "a", text: "a grande quantidade de matéria orgânica vegetal acumulada nas turfeiras e áreas secas alimenta o fogo subterrâneo de difícil combate.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a vegetação do Pantanal é desprovida de qualquer umidade nativa ao longo de todos os meses do ano.", isCorrect: false, distractorRationale: "O Pantanal possui estação úmida bem definida com inundações periódicas." },
      { id: "c", text: "as correntes oceânicas de Humboldt impedem a penetração da umidade da floresta equatorial.", isCorrect: false, distractorRationale: "A corrente de Humboldt fica no Oceano Pacífico e não atinge o interior do continente sul-americano." },
      { id: "d", text: "os animais pantaneiros dependem exclusivamente da queima da biomassa para iniciar a época de reprodução.", isCorrect: false, distractorRationale: "O fogo destrói ninhos, refúgios e provoca mortandade em massa de milhões de vertebrados e invertebrados." },
      { id: "e", text: "a bacia hidrográfica do Paraguai foi completamente extinta após o desvio total de seus cursos de água.", isCorrect: false, distractorRationale: "A bacia do Paraguai continua ativa, embora enfrente vazões mínimas históricas." }
    ],
    detailedExplanation: {
      summary: "A biomassa vegetal seca acumulada nas planícies transforma-se em combustível denso que alimenta incêndios persistentes e de difícil controle.",
      stepByStep: [
        "O Pantanal depende do pulso de inundação; quando os rios que descem do planalto trazem menos água devido ao desmatamento nas cabeceiras, as lagoas e baías secam.",
        "Em épocas de calor extremo e ventos fortes, a matéria orgânica desidratada pega fogo e queima até sob a camada superficial (fogo de turfa).",
        "Esse cenário dizima répteis, anfíbios e mamíferos de pequeno porte incapazes de fugir das frentes de labaredas."
      ],
      coreConcept: "Pulso de Inundação e Vulnerabilidade do Pantanal ao Fogo",
      trapWarning: "Embora o fogo seja um elemento natural eventual no Cerrado, no Pantanal queimadas massivas fora de época têm efeitos destruidores sobre ecossistemas não adaptados."
    },
    commonTraps: ["achar que o fogo é sempre inofensivo e natural", "ignorar a conexão planalto-planície"],
    tags: ["pantanal", "queimadas", "pulso de inundacao", "biodiversidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-009",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Biodiversidade e Conservação",
    subtopic: "Hotspots Globais e a Mata Atlântica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O conceito ecológico de 'hotspot de biodiversidade', proposto pelo biólogo britânico Norman Myers em 1988, é utilizado mundialmente para priorizar investimentos de conservação internacional em ecossistemas de altíssima riqueza e risco crítico de desaparecimento.",
      source: "Conservation International / Norman Myers (1988)."
    },
    prompt: "Para que um bioma terrestre seja classificado cientificamente como um hotspot de biodiversidade, os dois critérios mandatórios exigidos são:",
    options: [
      { id: "a", text: "abrigar ao menos 1.500 espécies de plantas vasculares endêmicas e ter perdido mais de 70% de sua cobertura vegetal original.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "estar localizado exclusivamente na faixa climática equatorial e possuir densidade florestal homogênea.", isCorrect: false, distractorRationale: "Existem hotspots em climas mediterrâneos, subtropicais e temperados pelo mundo." },
      { id: "c", text: "ser totalmente desprovido de populações humanas autóctones e de atividades agrícolas ao seu redor.", isCorrect: false, distractorRationale: "A maioria dos hotspots abriga densas populações humanas que ameaçam a biodiversidade." },
      { id: "d", text: "possuir reservas minerais de petróleo e gás natural inexploradas em bacias sedimentares costeiras.", isCorrect: false, distractorRationale: "O critério é estritamente biológico e de conservação da vida selvagem." },
      { id: "e", text: "conter espécies exclusivamente domesticadas de animais de corte e grãos transgênicos.", isCorrect: false, distractorRationale: "Hotspots tratam de espécies silvestres endêmicas nativas, não transgênicos." }
    ],
    detailedExplanation: {
      summary: "Hotspots de biodiversidade combinam alto endemismo de espécies vasculares com perda severa da vegetação nativa (mínimo de 70%).",
      stepByStep: [
        "Critério 1: Riqueza e singularidade biológica – conter no mínimo 1.500 espécies endêmicas de plantas que não existem em nenhum outro lugar da Terra.",
        "Critério 2: Ameaça iminente de colapso – ter sofrido perda antrópica de ao menos 70% de sua área original.",
        "No Brasil, dois biomas são classificados como hotspots: a Mata Atlântica (com menos de 12% de cobertura original preservada em fragmentos) e o Cerrado."
      ],
      coreConcept: "Critérios Científicos de Hotspots de Biodiversidade",
      trapWarning: "A Amazônia NÃO é um hotspot de biodiversidade segundo a definição de Myers, pois ainda preserva mais de 30% de sua área original; Amazônia e Pantanal são 'Grandes Regiões Selvagens'."
    },
    commonTraps: ["achar que a Amazônia é um hotspot", "ignorar os critérios de endemismo e perda de área"],
    tags: ["hotspot", "mata atlantica", "cerrado", "conservacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-010",
    area: "humanas",
    competence: 6,
    skill: 30,
    topic: "Geopolítica Ambiental",
    subtopic: "Acordo de Paris e Transição Energética",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No âmbito da Convenção-Quadro das Nações Unidas sobre Mudança do Clima (COP-21), 195 nações firmaram o Acordo de Paris com a meta primordial de limitar o aumento da temperatura média global a bem abaixo de 2 °C em relação aos níveis pré-industriais, envidando esforços para limitar o aquecimento a 1,5 °C.",
      source: "UNFCCC / Acordo de Paris (2015)."
    },
    prompt: "No quadro dos compromissos internacionais brasileiros (Contribuição Nacionalmente Determinada - NDC), uma estratégia central para atingir a meta de emissões líquidas neutras de gases estufa até 2050 consiste em:",
    options: [
      { id: "a", text: "zerar o desmatamento ilegal, recuperar áreas florestais degradadas e expandir a participação de energias renováveis na matriz nacional.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "substituir todas as usinas hidrelétricas existentes por centrais termelétricas movidas a carvão betuminoso.", isCorrect: false, distractorRationale: "O carvão é o combustível fóssil que mais emite gases de efeito estufa por unidade de energia." },
      { id: "c", text: "abandonar imediatamente os tratados internacionais de clima para reduzir os custos regulatórios da indústria pesada.", isCorrect: false, distractorRationale: "O Brasil é signatário comprometido do Acordo de Paris e da Agenda Climática." },
      { id: "d", text: "suspender a fiscalização ambiental em terras indígenas e unidades de conservação da Amazônia Legal.", isCorrect: false, distractorRationale: "A fiscalização contra o desmatamento e a proteção de territórios indígenas são pilares da contenção de emissões." },
      { id: "e", text: "incentivar a queima a céu aberto de canaviais durante todo o período da safra do etanol.", isCorrect: false, distractorRationale: "A colheita mecanizada crua foi adotada exatamente para eliminar as queimadas de cana." }
    ],
    detailedExplanation: {
      summary: "A NDC brasileira foca no combate ao desmatamento (principal fonte de emissão no Brasil) e no fortalecimento das energias limpas.",
      stepByStep: [
        "Ao contrário dos países desenvolvidos onde a principal fonte de carbono é a queima de fósseis para energia, no Brasil mais de 45% das emissões decorrem da mudança no uso da terra (desmatamento).",
        "Por isso, a meta climática brasileira depende prioritariamente de zerar o desmatamento ilegal na Amazônia e no Cerrado.",
        "Adicionalmente, promove-se restauração de milhões de hectares de pastagens degradadas, ampliação de bioenergia, solar e eólica."
      ],
      coreConcept: "Metas Climáticas, NDC e Perfil de Emissões do Brasil",
      trapWarning: "Lembre-se do perfil singular das emissões brasileiras: a maior parte vem da derrubada de florestas e da agropecuária, não das indústrias."
    },
    commonTraps: ["achar que a matriz elétrica é o maior emissor no Brasil", "ignorar o peso do desmatamento nas emissões"],
    tags: ["acordo de paris", "ndc", "clima", "desmatamento zero"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-011",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia",
    subtopic: "Rios Voadores e Serviços Ecossistêmicos da Amazônia",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A floresta amazônica atua como uma gigantesca bomba biológica de vapor d'água. Pelo processo de evapotranspiração, uma árvore adulta de grande porte pode bombear diariamente para a atmosfera mais de 500 litros de água captados no subsolo. Os ventos alísios transportam essas massas de ar saturadas de umidade para o oeste, onde encontram a barreira orográfica natural da Cordilheira dos Andes e são desviadas em direção ao Centro-Oeste, Sudeste e Sul do Brasil, constituindo os denominados 'rios voadores'.",
      source: "Instituto Nacional de Pesquisas da Amazônia (INPA), Climatologia Aplicada, 2024."
    },
    prompt: "O desmatamento progressivo e a degradação da cobertura florestal contínua na bacia amazônica impactam diretamente as regiões agrícolas e urbanas do Centro-Sul brasileiro ao:",
    options: [
      { id: "a", text: "reduzir o aporte de umidade transportado pelos fluxos atmosféricos, desregulando o regime pluviométrico sazonal e comprometendo a recarga de aquíferos, reservatórios hidrelétricos e safras agrícolas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "gerar um aumento permanente e descontrolado nas precipitações diárias de granizo em todo o litoral tropical.", isCorrect: false, distractorRationale: "A diminuição da evapotranspiração florestal reduz as chuvas e prolonga as estiagens, não gera tempestades de granizo." },
      { id: "c", text: "impedir completamente a atuação de qualquer frente fria proveniente do Polo Sul.", isCorrect: false, distractorRationale: "As massas polares atlânticas (mPa) continuam se deslocando pelo relevo sul-americano, embora encontrem ar mais seco." },
      { id: "d", text: "transformar de forma imediata o Sudeste brasileiro em uma bacia marinha submersa por águas oceânicas.", isCorrect: false, distractorRationale: "O risco enfrentado pelo Sudeste é de escassez hídrica e seca severa nos mananciais, não inundação oceânica perene." },
      { id: "e", text: "eliminar todos os tipos de ventos da atmosfera terrestre.", isCorrect: false, distractorRationale: "A circulação atmosférica geral é impulsionada pela rotação da Terra e pelo aquecimento solar diferencial, persistindo ativa." }
    ],
    detailedExplanation: {
      summary: "A floresta amazônica presta um serviço ecossistêmico vital de regulação climática. O transporte de vapor d'água pelos 'rios voadores' é essencial para manter o regime de chuvas nas bacias do Prata e Paraná e garantir a segurança hídrica, energética e agropecuária do Brasil.",
      stepByStep: [
        "Mecanismo da evapotranspiração: A floresta bombeia água do lençol freático profundo e devolve em forma de vapor para a troposfera.",
        "Dinâmica dos rios voadores: Ventos alísios levam a umidade até a barreira dos Andes, que redireciona os fluxos em direção ao Centro-Sul.",
        "Impacto antrópico: A substituição da floresta densa por pastagens degradadas reduz drasticamente a evapotranspiração, alongando o período seco e esvaziando reservatórios como o Sistema Cantareira em São Paulo."
      ],
      coreConcept: "Rios Voadores: Evapotranspiração da Amazônia e Segurança Hídrica do Centro-Sul",
      trapWarning: "No ENEM, conecte sempre o desmatamento no Norte com crises de água e energia no Sudeste; a ecologia não respeita fronteiras político-estaduais."
    },
    commonTraps: [
      "Achar que o desmatamento afeta somente o clima local de onde as árvores foram derrubadas",
      "Ignorar o papel da Cordilheira dos Andes no redirecionamento das massas úmidas"
    ],
    tags: ["rios-voadores", "amazonia", "evapotranspiracao", "seguranca-hidrica", "climatologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-012",
    area: "humanas",
    competence: 6,
    skill: 29,
    topic: "Geografia",
    subtopic: "Arenização nos Campos Sulinos vs. Desertificação no Semiárido",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Embora frequentemente confundidos no debate público, os processos de arenização e desertificação decorrem de dinâmicas geomorfológicas, pedológicas e climáticas distintas. No sudoeste do Rio Grande do Sul (bioma Pampa), a formação de bancos de areia móveis que invadem áreas produtivas decorre da fragilidade de solos areníticos ancestrais sob clima subtropical úmido, agravada pelo pisoteio excessivo de gado e práticas agrícolas inadequadas. Já no sertão nordestino (bioma Caatinga), a degradação severa da terra com perda irreversível de capacidade biológica está associada a regimes climáticos semiáridos e subúmidos secos.",
      source: "Geomorfologia e Degradação dos Solos no Brasil, Cadernos de Geociências, 2024."
    },
    prompt: "A principal distinção conceitual e ambiental entre o fenômeno da arenização gaúcha e o da desertificação nordestina reside no fato de que a arenização:",
    options: [
      { id: "a", text: "ocorre em zonas de clima úmido em terrenos onde o solo se origina de arenitos de fácil desagregação mecânica pela água da chuva e pelo vento, e não em climas com aridez e balanço hídrico negativo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "acontece exclusivamente em leitos de rios subterrâneos sem qualquer relação com a superfície do relevo.", isCorrect: false, distractorRationale: "A arenização manifesta-se diretamente na superfície do solo em relevos de coxilhas pampeanas." },
      { id: "c", text: "transforma biomas úmidos em desertos de sal hipertermal com clima desértico do Saara.", isCorrect: false, distractorRationale: "O clima do Rio Grande do Sul continua chuvoso (subtropical úmido); o que surge são manchas de areia móvel (areais)." },
      { id: "d", text: "decorre exclusivamente da queda de chuvas ácidas industriais concentradas.", isCorrect: false, distractorRationale: "A arenização tem matriz geológica natural (arenitos fluviais e eólicos) associada a manejo inadequado do solo." },
      { id: "e", text: "é um processo restrito às zonas litorâneas marinhas sob influência direta das marés salgadas.", isCorrect: false, distractorRationale: "Ocorre no interior continental do estado (como em Alegrete, Manuel Viana e São Francisco de Assis)." }
    ],
    detailedExplanation: {
      summary: "Arenização e desertificação não são sinônimos. Pela Convenção da ONU (UNCCD), a desertificação só ocorre em zonas áridas, semiáridas e subúmidas secas. No Rio Grande do Sul, onde chove bastante o ano todo (clima subtropical úmido), a exposição de depósitos arenosos frágeis é classificada tecnicamente como 'arenização'.",
      stepByStep: [
        "Definição de desertificação: Degradação biológica e do solo restrita por definição da ONU a climas com déficit hídrico acentuado (como o Semiárido da Caatinga).",
        "Definição de arenização: Reativação de depósitos de areia em clima com precipitação regular (RS), desencadeada quando a vegetação de gramíneas é retirada e o gado compacta o solo, facilitando a lavagem da areia pelas águas pluviais.",
        "Conclusão: O elemento diferenciador crucial é o regime pluviométrico (clima úmido na arenização vs. semiárido na desertificação)."
      ],
      coreConcept: "Diferenciação Pedoclimática: Arenização (Pampa) vs. Desertificação (Caatinga)",
      trapWarning: "Pegadinha clássica do ENEM: chamar os areais do Rio Grande do Sul de 'deserto'. Não é deserto nem desertificação porque o clima da região é chuvoso e úmido!"
    },
    commonTraps: [
      "Tratar arenização e desertificação como termos perfeitamente equivalentes",
      "Ignorar o papel das chuvas abundantes no retrabalhamento das areias do Pampa"
    ],
    tags: ["arenizacao", "desertificacao", "solos", "pampa", "caatinga"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-013",
    area: "humanas",
    competence: 6,
    skill: 27,
    topic: "Geografia",
    subtopic: "Erosão Laminar, Assoreamento Fluvial e Matas Ciliares",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em muitas bacias hidrográficas brasileiras sob intensa pressão agropecuária ou ocupação imobiliária irregular, a retirada da vegetação florestal ripária (mata ciliar) deixa as margens fluviais e as encostas desprotegidas contra a força do impacto direto das gotas de chuva (efeito splash) e do escoamento superficial. Esse processo acentua o desprendimento de partículas de solo (erosão laminar e em sulcos), que são carreadas para a calha do rio.",
      source: "Conservação de Bacias Hidrográficas e Recursos Hídricos, 2024."
    },
    prompt: "A deposição excessiva e contínua desses sedimentos carregados pelas enxurradas provoca o assoreamento dos rios, cujas consequências hidrológicas e ambientais imediatas incluem:",
    options: [
      { id: "a", text: "a redução da profundidade útil da calha do rio, diminuindo sua capacidade de escoamento e multiplicando a frequência e a amplitude de transbordamentos e inundações.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o aumento drástico da velocidade e da profundidade das correntezas com formação de cânions abissais.", isCorrect: false, distractorRationale: "O assoreamento entope o rio com areia e terra, tornando-o mais raso e lento, não mais profundo." },
      { id: "c", text: "a eliminação definitiva de qualquer partícula suspensa na água com purificação química espontânea.", isCorrect: false, distractorRationale: "A água assoreada fica turva, com alta turbidez que impede a fotossíntese de plantas aquáticas." },
      { id: "d", text: "o surgimento de correntes submarinas de água termal em regiões montanhosas.", isCorrect: false, distractorRationale: "O fenômeno é puramente sedimentológico e de superfície fluvial, sem ligação com fontes termais vulcânicas." },
      { id: "e", text: "o fim das enchentes urbanas devido à retenção permanente da água no leito rochoso do fundo.", isCorrect: false, distractorRationale: "O assoreamento é uma das maiores causas do agravamento de enchentes, pois o leito raso não comporta a vazão das chuvas." }
    ],
    detailedExplanation: {
      summary: "A mata ciliar funciona como um filtro mecânico protetor. Sem ela, sedimentos erodidos enchem o fundo do rio (assoreamento), tornando a calha rasa e incapaz de reter a água das chuvas, o que provoca transbordamentos desastrosos.",
      stepByStep: [
        "Papel da mata ciliar: As copas amortecem a chuva; as raízes fixam a margem; a serapilheira retém água e filtra partículas de terra.",
        "Mecanismo do assoreamento: O acúmulo de terra no fundo diminui o volume disponível para a vazão de água.",
        "Consequências: Transbordamentos mais rápidos (inundações), perda de navegabilidade para barcos de transporte de carga e sufocamento de peixes pela turbidez."
      ],
      coreConcept: "Mata Ciliar como Área de Preservação Permanente (APP) e Prevenção do Assoreamento",
      trapWarning: "Lembre-se do Código Florestal Brasileiro (Lei 12.651/2012): as matas ciliares são consideradas APPs (Áreas de Preservação Permanente) de preservação obrigatória por lei."
    },
    commonTraps: [
      "Achar que assoreamento aumenta a profundidade das bacias",
      "Ignorar o papel das raízes da mata ciliar na sustentação das barrancas de terra"
    ],
    tags: ["mata-ciliar", "assoreamento", "erosao", "recursos-hidricos", "app"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-014",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia",
    subtopic: "Gestão de Resíduos Sólidos: Lixões vs. Aterros Sanitários",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Política Nacional de Resíduos Sólidos (PNRS - Lei Federal 12.305/2010) determinou o encerramento gradual de todos os lixões a céu aberto nos municípios brasileiros e a transição para aterros sanitários ambientalmente licenciados. Enquanto os lixões despejam dejetos sem controle sobre o solo, atraindo vetores de doenças e liberando efluentes tóxicos, os aterros sanitários são obras complexas de engenharia sanitária projetadas para mitigar contaminações atmosféricas e subterrâneas.",
      source: "Manual de Saneamento Básico e Meio Ambiente Urbano, 2024."
    },
    prompt: "Entre os elementos de engenharia ambiental que distinguem um aterro sanitário de um lixão a céu aberto, destaca-se:",
    options: [
      { id: "a", text: "a impermeabilização do solo com mantas sintéticas de PEAD, drenagem e tratamento do chorume e captação do gás metano gerado pela decomposição anaeróbica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a queima diária a céu aberto de todos os detritos para transformar cinzas em fertilizantes agrícolas.", isCorrect: false, distractorRationale: "Queimar lixo a céu aberto emite dioxinas tóxicas e é crime ambiental, proibido em aterros sanitários." },
      { id: "c", text: "o descarte imediato dos resíduos no interior de cavernas calcárias para aproveitamento hídrico.", isCorrect: false, distractorRationale: "O relevo cárstico é extremamente vulnerável e contaminaria os aquíferos cársticos instantaneamente." },
      { id: "d", text: "a mistura obrigatória de resíduos hospitalares contaminantes com o lixo comum doméstico.", isCorrect: false, distractorRationale: "Resíduos infectantes hospitalares exigem tratamento especial (como incineração ou autoclave) e descarte diferenciado." },
      { id: "e", text: "a ausência de qualquer cobertura de terra sobre os dejetos depositados na superfície.", isCorrect: false, distractorRationale: "No aterro sanitário, o lixo compactado é coberto diariamente com camadas de terra para evitar proliferação de vetores." }
    ],
    detailedExplanation: {
      summary: "O aterro sanitário protege o meio ambiente confinando os resíduos com tecnologia: manta impermeável no fundo para proteger o lençol freático contra o chorume (líquido escuro de alta carga biológica) e tubos para drenar e queimar o biogás metano (evitando efeito estufa e explosões).",
      stepByStep: [
        "Lixão: Descarte bruto no solo sem manta, sem cobertura, atraindo urubus e ratos, infiltrando chorume que contamina aquíferos subterrâneos.",
        "Aterro sanitário: Preparação do terreno com geomenbrana de polietileno (PEAD) e argila compactada.",
        "Drenagem de chorume: Coleta do líquido e envio para lagoas de tratamento biológico.",
        "Drenagem de gás: Captação de metano (CH4), que pode ser queimado (reduzindo impacto de aquecimento global) ou utilizado para gerar eletricidade em usinas de biogás."
      ],
      coreConcept: "Aterro Sanitário: Impermeabilização, Tratamento de Chorume e Captação de Biogás",
      trapWarning: "Cuidado para não confundir 'aterro sanitário' (com todas as mantas e tratamentos) com 'aterro controlado' (que é apenas um lixão com cobertura de terra, sem impermeabilização do solo nem tratamento de chorume)."
    },
    commonTraps: [
      "Achar que aterro controlado tem as mesmas proteções ambientais que um aterro sanitário",
      "Desconhecer que o metano de aterros pode ser aproveitado como fonte de energia limpa (biometano)"
    ],
    tags: ["residuos-solidos", "aterro-sanitario", "chorume", "biogas", "saneamento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-015",
    area: "humanas",
    competence: 6,
    skill: 29,
    topic: "Geografia",
    subtopic: "Desastres da Mineração e Alteamento a Montante de Barragens",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os rompimentos das barragens de rejeitos de mineração em Mariana (Fundão, 2015) e em Brumadinho (Córrego do Feijão, 2019), ambas situadas no Quadrilátero Ferrífero de Minas Gerais, configuram os maiores desastres socioambientais da história brasileira. As duas estruturas utilizavam o método construtivo de alteamento a montante, considerado tecnicamente o mais econômico para as mineradoras, porém o mais suscetível à liquefação do solo sob vibrações ou saturação hídrica excessiva.",
      source: "Relatório de Engenharia e Impactos Socioambientais da Mineração, 2023."
    },
    prompt: "A destruição biológica provocada pelo espalhamento de milhões de metros cúbicos de lama de rejeitos ao longo das bacias dos rios Doce e Paraopeba resultou de uma cadeia de impactos que incluiu:",
    options: [
      { id: "a", text: "o soterramento do leito e da vegetação ciliar por lama inorgânica compacta, provocando asfixia mecânica da fauna branquial, anóxia pela suspensão de argilas e esterilização biológica das planícies aluviais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o enriquecimento mineral benéfico das bacias, gerando um crescimento recorde na fertilidade natural da água e no comércio pesqueiro.", isCorrect: false, distractorRationale: "A lama asfixiou e exterminou milhões de peixes e inviabilizou a pesca ao longo de centenas de quilômetros de rio." },
      { id: "c", text: "a transformação de toda a água doce dos rios em petróleo bruto utilizável em refinarias de combustível fóssil.", isCorrect: false, distractorRationale: "Os rejeitos de minério de ferro são compostos de óxidos de ferro, sílica e lama, sem conexão com hidrocarbonetos de petróleo." },
      { id: "d", text: "a descontaminação espontânea de todas as nascentes pelo contato com os resíduos de minério.", isCorrect: false, distractorRationale: "Os rejeitos contaminaram mananciais de captação de água potável de dezenas de cidades." },
      { id: "e", text: "o surgimento de recifes de corais de águas profundas no leito fluvial das montanhas mineiras.", isCorrect: false, distractorRationale: "Recifes de corais se formam exclusivamente em águas marinhas quentes e límpidas, não em rios continentais enlameados." }
    ],
    detailedExplanation: {
      summary: "O rompimento das barragens de alteamento a montante despejou lamas compostas majoritariamente de sílica e ferro. Embora não sejam resíduos primariamente químicos venenosos como cianeto, a violência mecânica e a imensa carga sólida em suspensão obliteraram a vida aquática por falta de oxigênio e luz e cobriram solos férteis com crostas endurecidas inférteis.",
      stepByStep: [
        "O método de alteamento a montante: A barragem vai sendo erguida apoiada sobre os próprios rejeitos úmidos anteriores, com alto risco de liquefação súbita.",
        "Impacto na água: A suspensão das partículas impede a penetração da luz (fotossíntese cessa) e a argila coloida obstrui as brânquias dos peixes, levando à anóxia e mortalidade massiva.",
        "Impacto no solo: A lama seca forma uma crosta cimentada compacta que inviabiliza a germinação de sementes e a agricultura nas margens ribeirinhas."
      ],
      coreConcept: "Impactos da Mineração: Alteamento a Montante, Turbidez e Degradação de Bacias Hidrográficas",
      trapWarning: "Após os desastres de Mariana e Brumadinho, a Lei Federal 14.066/2020 proibiu expressamente a construção e operação de barragens com alteamento a montante em todo o Brasil."
    },
    commonTraps: [
      "Achar que o impacto ecológico decorre unicamente de metais pesados adicionados, ignorando a sufocação física mecânica por excesso de sedimentos",
      "Confundir o método de alteamento a montante com alteamento a jusante (muito mais seguro e custoso)"
    ],
    tags: ["mineracao", "brumadinho", "mariana", "barragens", "quadrilatero-ferrifero"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-016",
    area: "humanas",
    competence: 6,
    skill: 27,
    topic: "Geografia",
    subtopic: "Poluição dos Oceanos e Microplásticos nas Cadeias Tróficas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Estima-se que mais de 12 milhões de toneladas de materiais plásticos sejam despejadas anualmente nos oceanos. Sob a ação mecânica das ondas marinhas e da radiação ultravioleta do Sol, polímeros descartados fragmentam-se em minúsculas partículas com dimensões inferiores a 5 milímetros denominadas microplásticos. Devido à sua estabilidade química e superfície porosa, essas partículas funcionam como 'esponjas' que atraem e concentram poluentes orgânicos persistentes (POPs), como pesticidas e bifenilas policloradas presentes na água do mar.",
      source: "Programa das Nações Unidas para o Meio Ambiente (PNUMA), Poluição Marinha Global, 2024."
    },
    prompt: "Quando os microplásticos são ingeridos pelo zooplâncton marinho na base da teia alimentar, sua transferência para peixes menores e predadores de topo manifesta o processo ecológico de:",
    options: [
      { id: "a", text: "biomagnificação trófica, no qual a concentração dos compostos tóxicos não biodegradáveis aumenta progressivamente a cada nível alimentar subsequente da cadeia alimentar.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "biodegradação instantânea com conversão de todo o carbono polimérico em glicose nutritiva para a biota marinha.", isCorrect: false, distractorRationale: "Os plásticos não são biodegradados pelos organismos e permanecem tóxicos e persistentes no sistema." },
      { id: "c", text: "diluição homeostática, na qual substâncias poluentes perdem qualquer capacidade tóxica ao passar para animais maiores.", isCorrect: false, distractorRationale: "Ocorre o oposto: compostos persistentes se concentram mais nos tecidos dos predadores superiores." },
      { id: "d", text: "mineralização acelerada com formação espontânea de blocos de granito marinho.", isCorrect: false, distractorRationale: "Plásticos são materiais poliméricos orgânicos sintéticos, não minerais ígneos geológicos." },
      { id: "e", text: "despoluição automática das águas costeiras promovida pela respiração dos mamíferos aquáticos.", isCorrect: false, distractorRationale: "Os mamíferos aquáticos (baleias, golfinhos) acumulam toxinas e sofrem graves patologias pela ingestão de plásticos." }
    ],
    detailedExplanation: {
      summary: "Microplásticos não são biodegradáveis e absorvem substâncias tóxicas. Ao serem consumidos na base trófica, acumulam-se no organismo individual (bioacumulação) e amplificam sua concentração nos níveis superiores da cadeia (biomagnificação), atingindo níveis perigosos na alimentação humana.",
      stepByStep: [
        "Bioacumulação: Acúmulo de uma substância química nos tecidos de um organismo específico ao longo de sua vida.",
        "Biomagnificação (magnificação trófica): Aumento progressivo da concentração da substância de um nível trófico para o seguinte ao longo da teia alimentar.",
        "Impacto na cadeia de suprimentos: Peixes predadores (como atum e salmão) concentram teores mais elevados de contaminantes, que chegam à mesa dos consumidores humanos."
      ],
      coreConcept: "Microplásticos, Bioacumulação e Biomagnificação Trófica Marinha",
      trapWarning: "Lembre-se da diferença crucial: bioacumulação ocorre dentro de UM indivíduo; biomagnificação ocorre AO LONGO da cadeia trófica (nível a nível)."
    },
    commonTraps: [
      "Confundir bioacumulação (indivíduo) com biomagnificação (cadeia trófica)",
      "Achar que animais maiores são imunes aos microplásticos por possuírem maior massa corporal"
    ],
    tags: ["microplasticos", "biomagnificacao", "poluicao-marinha", "cadeia-trofica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-017",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia",
    subtopic: "Eutrofização Antrópica de Corpos Hídricos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em lagoas urbanas, represas de abastecimento e enseadas costeiras próximas a metrópoles (como a Baía de Guanabara e a Lagoa Rodrigo de Freitas), o lançamento contínuo de esgotos domésticos não tratados e o arraste de fertilizantes fosfatados e nitrogenados de lavouras deflagram o fenômeno da eutrofização antrópica ou cultural. A água adquire uma coloração esverdeada e odor fétido característico.",
      source: "Qualidade das Águas e Ecologia de Ecossistemas Aquáticos, 2024."
    },
    prompt: "A cadeia causal de transformações físico-químicas e biológicas que culmina na mortandade em massa de peixes em um corpo d'água eutrofizado obedece à seguinte sequência:",
    options: [
      { id: "a", text: "excesso de nutrientes ⟹ proliferação explosiva de algas superficiais ⟹ bloqueio da luz solar às camadas inferiores ⟹ morte de vegetais submersos ⟹ aumento de bactérias decompositoras aeróbicas ⟹ depleção extrema do oxigênio dissolvido (anóxia).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "aumento de oxigênio ⟹ diminuição de algas ⟹ escassez de bactérias ⟹ resfriamento térmico instantâneo da lâmina d'água.", isCorrect: false, distractorRationale: "A eutrofização consome o oxigênio e gera proliferação maciça de algas, não sua redução." },
      { id: "c", text: "acidificação por gás hélio ⟹ elevação do pH para valores alcalinos extremos ⟹ congelamento das águas rasas.", isCorrect: false, distractorRationale: "O gás liberado na fase anaeróbica é o sulfídrico (H2S) e metano (CH4), não hélio." },
      { id: "d", text: "desaparecimento de todos os nutrientes minerais ⟹ fome generalizada do fitoplâncton ⟹ seca completa do lago.", isCorrect: false, distractorRationale: "A eutrofização decorre justamente do excesso de nutrientes (fósforo e nitrogênio), não de sua ausência." },
      { id: "e", text: "salinização marinha da água doce ⟹ fuga espontânea de todos os microrganismos para o ar atmosférico.", isCorrect: false, distractorRationale: "O fenômeno ocorre em corpos de água doce ou salobra e é de base bioquímica de oxigenação." }
    ],
    detailedExplanation: {
      summary: "A eutrofização é um ciclo clássico do ENEM: nutrientes em excesso causam 'floração' de algas superficiais. A camada verde na superfície barra o sol para o fundo. Plantas do fundo morrem. Bactérias que decompõem matéria orgânica consomem todo o oxigênio da água, sufocando peixes e moluscos.",
      stepByStep: [
        "1. Aporte de nutrientes: Esgoto rico em fósforo e nitrogênio.",
        "2. Floração de algas: Multiplicação descontrolada na superfície.",
        "3. Bloqueio da luz solar: Algas na superfície formam uma 'cortina verde' que impede a fotossíntese de plantas do fundo.",
        "4. Acúmulo de matéria morta: Bactérias decompositoras aeróbicas proliferam e consomem vorazmente o oxigênio dissolvido.",
        "5. Anóxia (falta de O2): Peixes morrem por asfixia; bactérias anaeróbicas passam a atuar gerando gases fétidos (como sulfeto de hidrogênio)."
      ],
      coreConcept: "Eutrofização Cultural: Floração de Algas, Bloqueio Luminoso e Anóxia Aquática",
      trapWarning: "Cuidado: na primeira fase da eutrofização, a superfície pode ter alta produção de O2 pelas algas; a anóxia mortífera ocorre quando essas algas morrem e são decompostas por bactérias no fundo!"
    },
    commonTraps: [
      "Achar que as algas consomem diretamente todo o oxigênio enquanto vivas (são as bactérias decompositoras de matéria morta que esgotam o O2)",
      "Confundir eutrofização com derramamento de petróleo"
    ],
    tags: ["eutrofizacao", "esgoto", "poluicao-da-agua", "anoxia", "nutrientes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-018",
    area: "humanas",
    competence: 6,
    skill: 29,
    topic: "Geografia",
    subtopic: "Agrobiodiversidade e o Modelo das Monoculturas Transgênicas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A disseminação de cultivares agrícolas geneticamente modificados resistentes a herbicidas químicos (como a soja e o milho resistentes ao glifosato) acelerou a expansão das monoculturas em larga escala pelo Centro-Oeste e pela região do Matopiba (Maranhão, Tocantins, Piauí e Bahia). Se por um lado esse pacote biotecnológico impulsionou a produtividade média por hectare e a eficiência da colheita mecanizada de exportação, pesquisadores alertam para os riscos ecológicos associados à dependência de poucas sementes patenteadas e à simplificação dos ecossistemas agrícolas.",
      source: "Socioeconomia Rural e Biotecnologia Agrícola, 2024."
    },
    prompt: "Entre as principais externalidades socioambientais adversas provocadas pela hegemonia desse modelo agrícola monocultor com sementes transgênicas, destaca-se:",
    options: [
      { id: "a", text: "a erosão genética da agrobiodiversidade tradicional, somada à seleção biológica de plantas invasoras resistentes a doses crescentes de defensivos e à dependência econômica dos produtores em relação a conglomerados corporativos de biotecnologia.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a extinção completa de todas as máquinas agrícolas e a substituição das colheitadeiras por arados de tração animal.", isCorrect: false, distractorRationale: "O modelo de monocultura transgênica é hipertecnificado com maquinário pesado de ponta." },
      { id: "c", text: "a recuperação espontânea de toda a vegetação primária original do Cerrado dentro dos talhões de plantio.", isCorrect: false, distractorRationale: "A monocultura substitui e elimina a rica biodiversidade do bioma Cerrado por uma única cultura exótica." },
      { id: "d", text: "a imediata desvalorização das terras agricultáveis com colapso total da balança comercial do agronegócio.", isCorrect: false, distractorRationale: "As commodities agrícolas continuam com elevado valor de mercado e peso significativo nas exportações brasileiras." },
      { id: "e", text: "o fim da necessidade de qualquer aplicação de defensivos químicos ou herbicidas nas lavouras.", isCorrect: false, distractorRationale: "O uso continuado selecionou 'superervas daninhas' resistentes, exigindo aplicações de volumes ainda maiores e formulações químicas mais agressivas." }
    ],
    detailedExplanation: {
      summary: "O modelo das grandes monoculturas transgênicas gera alta produtividade econômica de curto prazo, mas provoca erosão da agrobiodiversidade (perda de sementes crioulas ancestrais), seleção de plantas daninhas resistentes aos herbicidas e aprisionamento dos agricultores a patentes internacionais de sementes e insumos.",
      stepByStep: [
        "Homogeneização da paisagem: Milhões de hectares com a mesma composição genética tornam as plantações vulneráveis a novas pragas sistêmicas.",
        "Resistência de plantas invasoras: O uso massivo do mesmo herbicida (glifosato) selecionou biótipos de plantas daninhas resistentes (como o capim-amargoso e buva).",
        "Concentração corporativa: O mercado de sementes e agroquímicos é concentrado em poucas multinacionais globais detentoras de patentes tecnológicas.",
        "Erosão cultural: Desaparecimento de cultivares locais selecionados historicamente pela agricultura familiar e povos tradicionais."
      ],
      coreConcept: "Monoculturas Biotecnológicas: Perda de Agrobiodiversidade e Seleção de Superervas",
      trapWarning: "No ENEM, aborde a biotecnologia agrícola de forma equilibrada: reconhecendo os ganhos expressivos de produtividade, sem ignorar as contradições ecológicas da simplificação biológica e do aumento do uso de químicos."
    },
    commonTraps: [
      "Achar que plantas transgênicas eliminaram o uso de agroquímicos",
      "Ignorar o conceito de perda de agrobiodiversidade e patentes de sementes"
    ],
    tags: ["transgenicos", "monocultura", "agrobiodiversidade", "matopiba", "agronegocio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-019",
    area: "humanas",
    competence: 6,
    skill: 27,
    topic: "Geografia",
    subtopic: "Racismo Ambiental e Justiça Socioespacial Urbana",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O conceito de 'racismo ambiental', cunhado originalmente pelo sociólogo Robert Bullard nos Estados Unidos e incorporado aos estudos de geografia urbana brasileira, designa a imposição desproporcional de custos e degradações ecológicas sobre comunidades racializadas e de baixa renda. No contexto das grandes metrópoles brasileiras, essa dinâmica reflete-se na localização de habitações periféricas em encostas instáveis sujeitas a desmoronamentos, várzeas inundáveis desprovidas de microdrenagem pluvial, proximidade de vazadouros de lixo e carência crônica de saneamento básico e áreas verdes públicas.",
      source: "Justiça Ambiental e Geografia Crítica das Cidades, 2024."
    },
    prompt: "A aplicação desse referencial teórico à análise dos desastres climáticos nas periferias urbanas brasileiras evidencia que os impactos das chuvas extremas:",
    options: [
      { id: "a", text: "não são meramente acidentes da 'natureza neutra', mas decorrem de escolhas políticas de planejamento urbano e segregação socioespacial que tornam populações historicamente vulnerabilizadas as mais expostas a riscos ambientais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "afetam igualmente todas as classes sociais com idêntica intensidade de destruição nas áreas nobres e periféricas.", isCorrect: false, distractorRationale: "Bairros nobres contam com drenagem estruturada, obras de contenção e redes pluviais, sofrendo perdas humanas incomparavelmente menores." },
      { id: "c", text: "resultam da opção espontânea e livre dos cidadãos em viver em áreas sem saneamento e sem segurança habitacional.", isCorrect: false, distractorRationale: "A moradia em áreas de risco é fruto da especulação imobiliária, pobreza e falta de políticas públicas de habitação social." },
      { id: "d", text: "acontecem exclusivamente devido a falhas geológicas profundas ligadas a abalos sísmicos tectônicos.", isCorrect: false, distractorRationale: "O Brasil é tectonicamente estável; os desastres decorrem de chuvas torrenciais atuando sobre encostas desmatadas e ocupadas sem contenção de engenharia." },
      { id: "e", text: "podem ser completamente eliminados se a população deixar de consultar previsões meteorológicas na televisão.", isCorrect: false, distractorRationale: "Previsões meteorológicas e sistemas de alerta de defesa civil salvam vidas e devem ser ampliados, não ignorados." }
    ],
    detailedExplanation: {
      summary: "O conceito de racismo ambiental demonstra que a degradação e o perigo ambiental têm cor e classe social. A segregação urbana relega os grupos mais pobres e negros aos piores terrenos da cidade (morros íngremes, fundos de vale alagadiços), convertendo eventos climáticos naturais em tragédias sociais previsíveis.",
      stepByStep: [
        "Superação do conceito de 'desastre puramente natural': O volume da chuva é físico/climático, mas quem morre soterrado é determinado pela desigualdade social e pela política habitacional.",
        "Segregação socioespacial: O solo valorizado com infraestrutura é reservado para as classes ricas, enquanto as periferias desprovidas de serviços básicos concentram os riscos de contaminação e deslizamentos.",
        "Conclusão crítica: Trata-se de uma questão de direitos humanos, direitos civis e justiça ambiental distributiva."
      ],
      coreConcept: "Racismo Ambiental: Segregação Urbana, Justiça Climática e Vulnerabilidade Social",
      trapWarning: "No ENEM, essa abordagem interdisciplinar entre Geografia e Sociologia é fortíssima: rejeite alternativas que atribuam as mortes em enchentes e deslizamentos unicamente 'à fúria cega da natureza'."
    },
    commonTraps: [
      "Tratar deslizamentos de terra como desastres 'naturais e inevitáveis'",
      "Desconsiderar a dimensão racial e de classe na distribuição dos investimentos em infraestrutura e saneamento"
    ],
    tags: ["racismo-ambiental", "justica-climatica", "segregacao-socioespacial", "enchentes", "deslizamentos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-020",
    area: "humanas",
    competence: 6,
    skill: 30,
    topic: "Geografia",
    subtopic: "Créditos de Carbono, Mecanismo REDD+ e a Economia Verde",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No âmbito das negociações multilaterais sobre o clima (como o Artigo 6 do Acordo de Paris), consolidou-se o mercado de créditos de carbono e a regulamentação de instrumentos de pagamento por serviços ambientais, com destaque para o mecanismo de REDD+ (Redução de Emissões por Desmatamento e Degradação Florestal). Pelo REDD+, países em desenvolvimento, comunidades tradicionais e proprietários de terras recebem incentivos financeiros e remuneração pelo estoque de carbono mantido na vegetação em pé que deixou de ser derrubada.",
      source: "Governança Climática Global e Finanças Verdes, 2024."
    },
    prompt: "Como instrumento de política pública e diplomacia climática, a precificação do carbono florestal por meio do REDD+ visa:",
    options: [
      { id: "a", text: "atribuir valor econômico à floresta conservada, tornando a preservação ambiental competitiva financeiramente frente às atividades econômicas predatórias que geram desmatamento.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "autorizar as empresas poluidoras globais a queimar combustíveis fósseis de forma ilimitada sem qualquer necessidade de investimento em energia limpa.", isCorrect: false, distractorRationale: "O objetivo é mitigar emissões globais complementando a transição energética, e não criar licença irrestrita para poluir sem limites." },
      { id: "c", text: "proibir o convívio e a permanência de povos indígenas e extrativistas nas áreas de floresta primária.", isCorrect: false, distractorRationale: "O REDD+ socioambiental prevê salvaguardas que fortalecem a governança e a remuneração de povos indígenas e comunidades ribeirinhas." },
      { id: "d", text: "transformar todo o território florestal brasileiro em pastagem aberta para o gado confinado.", isCorrect: false, distractorRationale: "O mecanismo tem o objetivo oposto: frear a expansão da pastagem sobre a floresta nativa." },
      { id: "e", text: "substituir a moeda corrente de todos os países por certificados de papel não conversíveis.", isCorrect: false, distractorRationale: "Os créditos de carbono são ativos financeiros negociáveis cotados nas moedas oficiais vigentes." }
    ],
    detailedExplanation: {
      summary: "O mecanismo de REDD+ busca corrigir uma falha histórica de mercado: historicamente a árvore derrubada (madeira, pasto) gerava dinheiro, enquanto a árvore viva não tinha valor monetário reconhecido. A precificação do carbono cria valor financeiro para a conservação florestal viva.",
      stepByStep: [
        "Conceito de 1 crédito de carbono: Equivale à redução ou remoção de 1 tonelada métrica de CO2 equivalente (tCO2e) da atmosfera.",
        "Mecanismo do REDD+: Países ricos e corporações financiam ações de fiscalização, demarcação e manejo florestal sustentável em florestas tropicais.",
        "Desafio e vigilância crítica: Evitar o 'greenwashing' (compensação sem redução de emissões reais) e garantir que as comunidades tradicionais que guardam a floresta recebam a partilha justa dos recursos."
      ],
      coreConcept: "Mecanismo REDD+, Pagamento por Serviços Ambientais e Créditos de Carbono",
      trapWarning: "Atenção: o REDD+ é uma ferramenta econômica auxiliar de incentivo, mas não substitui a necessidade imperiosa da descarbonização das matrizes energéticas e de transporte nos países industrializados."
    },
    commonTraps: [
      "Achar que crédito de carbono é uma autorização irrestrita e ética para poluir sem limites",
      "Ignorar o papel das salvaguardas socioambientais para povos originários nos projetos de conservação"
    ],
    tags: ["redd+", "creditos-de-carbono", "economia-verde", "acordo-de-paris", "servicos-ambientais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-021",
    area: "humanas",
    competence: 6,
    skill: 29,
    topic: "Geografia",
    subtopic: "Inversão Térmica e Poluição Atmosférica Urbana",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas madrugadas frias de inverno em grandes metrópoles cercadas por relevo ondulado ou serras (como São Paulo e Belo Horizonte), a perda radiativa rápida de calor pelo solo resfria a camada atmosférica de contato superficial. Esse bolsão de ar frio, mais denso, permanece aprisionado junto ao solo, recoberto por uma camada de ar mais aquecido que atua como uma 'tampa' térmica, impedindo a convecção vertical normal.",
      source: "Climatologia Urbana e Poluição Atmosférica"
    },
    prompt: "O fenômeno meteorológico descrito e seu impacto socioambiental imediato sobre as cidades consistem na:",
    options: [
      { id: "a", text: "inversão térmica, que bloqueia a dispersão vertical de poluentes e gases tóxicos, agravando significativamente as doenças e internações respiratórias da população urbana.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "chuva ácida generalizada que consome os alicerces de concreto dos edifícios em poucas horas.", isCorrect: false, distractorRationale: "Chuva ácida é precipitação química com óxidos de enxofre/nitrogênio, distinta do fenômeno térmico de inversão do gradiente vertical." },
      { id: "c", text: "formação instantânea de furacões subtropicais devido ao congelamento abrupto das calçadas.", isCorrect: false, distractorRationale: "Furacões alimentam-se de águas oceânicas quentes tropicais, sem qualquer relação com a estabilidade atmosférica de inverno continental." },
      { id: "d", text: "destruição da camada de ozônio estratosférica na troposfera inferior provocada por gás oxigênio puro.", isCorrect: false, distractorRationale: "A destruição do ozônio estratosférico ocorre por CFCs em escala global e altitude de 20-30 km, não na camada urbana de inversão." },
      { id: "e", text: "elevação imediata da evapotranspiração florestal que satura os aquíferos profundos com vapor d'água.", isCorrect: false, distractorRationale: "No inverno frio a taxa de evapotranspiração é reduzida e a inversão aprisiona poluentes na atmosfera baixa." }
    ],
    detailedExplanation: {
      summary: "Em condições atmosféricas normais, o ar mais quente (menos denso) junto ao solo sobe por convecção, dispersando poluentes para a alta atmosfera. Na inversão térmica de inverno, o ar frio denso fica retido na base sob o ar quente, estagnando o ar e concentrando fuligem, monóxido de carbono e óxidos nos primeiros metros do solo, disparando crises de asma, bronquite e rinite alérgica.",
      stepByStep: [
        "1. Gradiente térmico padrão: a temperatura do ar diminui com a altitude (ar quente em baixo -> sobe; ar frio em cima -> desce). Isso garante circulação convectiva contínua.",
        "2. Condição de inversão: na madrugada de inverno com céu límpido, o solo esfria rapidamente por irradiação e resfria a camada de ar em contato direto.",
        "3. Uma camada de ar quente fica sobreposta à camada fria de ar estagnado rente ao solo.",
        "4. Como o ar frio é mais denso, ele não consegue subir, interrompendo a convecção (estabilidade estática).",
        "5. Toda a fumaça de chaminés industriais e escapamentos veiculares fica aprisionada na altura da respiração humana até que a radiação solar do meio-dia aqueça novamente o solo."
      ],
      coreConcept: "Inversão Térmica: Estabilidade Convectiva de Inverno e Concentração de Poluentes Troposféricos",
      trapWarning: "A inversão térmica é um fenômeno METEOROLÓGICO NATURAL que ocorre mesmo em desertos inabitados. Ela se torna um 'problema ambiental' quando ocorre sobre grandes centros urbanos industrializados poluídos."
    },
    commonTraps: [
      "Achar que a inversão térmica foi 'criada' pela poluição humana (ela é natural, mas aprisiona a poluição gerada pelo homem)",
      "Confundir inversão térmica com efeito estufa ou ilha de calor"
    ],
    tags: ["inversao-termica", "climatologia-urbana", "poluicao-do-ar", "saude-publica", "geografia-fisica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-022",
    area: "humanas",
    competence: 6,
    skill: 29,
    topic: "Geografia",
    subtopic: "Ilhas de Calor Urbanas e Planejamento Socioespacial",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Imagens térmicas captadas por satélites de sensoriamento remoto revelam que o centro expandido de cidades como São Paulo, Rio de Janeiro e Porto Alegre pode registrar temperaturas de superfície de 5°C a 10°C superiores às de bairros periféricos arborizados e áreas de preservação no entorno.",
      source: "Mapeamento Termográfico Urbano e Mudanças Climáticas"
    },
    prompt: "Entre os fatores antrópicos determinantes para a gênese e intensidade desse gradiente térmico microclimático destaca-se:",
    options: [
      { id: "a", text: "a substituição da cobertura vegetal por asfalto e concreto de baixo albedo, combinada à retenção de calor pelas edificações e emissões térmicas de veículos e condicionadores de ar.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a proliferação de parques lineares que refletem integralmente a radiação solar ultravioleta para o espaço sideral.", isCorrect: false, distractorRationale: "Parques e áreas verdes amenizam a temperatura através de sombra e evapotranspiração, combatendo as ilhas de calor." },
      { id: "c", text: "o aumento do índice pluviométrico causado exclusivamente pela passagem de correntes marítimas polares no asfalto.", isCorrect: false, distractorRationale: "Correntes marítimas atuam nos oceanos costeiros e não explicam o aquecimento diferenciado das áreas centrais urbanas." },
      { id: "d", text: "a redução compulsória do consumo de energia elétrica em indústrias instaladas nas periferias da cidade.", isCorrect: false, distractorRationale: "A concentração térmica decorre da densidade construtiva e queima de combustíveis nas áreas centrais." },
      { id: "e", text: "o uso exclusivo de telhados brancos ecológicos de alto albedo em todas as construções civis metropolitanas.", isCorrect: false, distractorRationale: "Telhados brancos de alto albedo resfriam os edifícios e atenuam as ilhas de calor, não as intensificam." }
    ],
    detailedExplanation: {
      summary: "A ilha de calor urbana resulta de múltiplos fatores convergentes: 1) Materiais urbanos (asfalto, concreto) com baixo albedo que absorvem muita radiação solar e alta inércia térmica (liberam calor à noite); 2) Impermeabilização e ausência de árvores (menos evapotranspiração que resfria o ar); 3) Rugosidade geométrica dos edifícios (cânions urbanos que barram ventos); 4) Calor antropogênico (veículos e ar-condicionado).",
      stepByStep: [
        "1. Albedo: fração de radiação solar refletida. Vegetação e superfícies claras têm alto albedo; asfalto escuro tem baixíssimo albedo (absorve até 90% da luz solar incidente).",
        "2. Vegetação arbórea realiza evapotranspiração (processo endotérmico que retira calor do ambiente para evaporar água da folha). O centro urbano sem árvores perde esse resfriamento natural.",
        "3. Concentração vertical de prédios aprisiona a radiação refletida (efeito cânion) e bloqueia a circulação de brisas refrescantes.",
        "4. Atividades metabólicas humanas, trânsito pesado e compressores de refrigeração liberam continuamente megawatts de calor residual no ar central."
      ],
      coreConcept: "Ilhas de Calor Urbanas: Albedo, Inércia Térmica dos Materiais e Perda de Evapotranspiração",
      trapWarning: "Lembre-se: albedo alto significa QUE REFLETE MUITA LUZ (superfície fria, como neve ou tinta branca). Albedo baixo significa QUE ABSORVE MUITA LUZ E ESQUENTA (como o asfalto preto)."
    },
    commonTraps: [
      "Confundir albedo alto com capacidade de absorver calor (o correto é: albedo alto reflete, albedo baixo absorve)",
      "Achar que áreas verdes aquecem o ar"
    ],
    tags: ["ilha-de-calor", "albedo", "urbanizacao", "microclima", "geografia-urbana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-023",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia",
    subtopic: "Lixiviação e Laterização de Solos Tropicais Úmidos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em áreas tropicais e equatoriais com estações chuvosas intensas, a remoção da cobertura florestal original para implantação de monoculturas agrícolas expõe o horizonte superficial do solo ao impacto mecânico direto das gotas de chuva. Ao longo do tempo, a água pluvial que se infiltra lava os minerais alcalinos e nutrientes solúveis solapando a fertilidade natural e provocando o acúmulo superficial de compostos oxigenados de ferro e alumínio.",
      source: "Pedologia e Conservação dos Solos Tropicais"
    },
    prompt: "Os processos geomorfológicos e pedológicos descritos denominam-se, respectivamente:",
    options: [
      { id: "a", text: "lixiviação (lavagem e perda de nutrientes solúveis por percolação) e laterização (formação de uma carapaça ferruginosa endurecida e estéril).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "assoreamento dos mananciais e desertificação por geadas polares de altitude.", isCorrect: false, distractorRationale: "Laterização é processo geoquímico tropical sob altas temperaturas e chuvas, sem relação com geadas polares." },
      { id: "c", text: "salinização provocada por irrigação subterrânea em solos de estepe semiárida.", isCorrect: false, distractorRationale: "Salinização ocorre em regiões áridas com evaporação rápida de águas ricas em cloretos, o inverso do clima úmido lixiviante." },
      { id: "d", text: "arenização gerada por ventos catabáticos de geleiras pleistocênicas.", isCorrect: false, distractorRationale: "Arenização decorre de retrabalhamento de arenitos friáveis e não de geleiras do Pleistoceno no Brasil tropical." },
      { id: "e", text: "pedogênese acelerada que converte argila pura em terra roxa fertilíssima rica em húmus vulcânico.", isCorrect: false, distractorRationale: "A lixiviação e laterização empobrecem o solo e criam crostas estéreis (canga/laterita), destruindo a fertilidade húmica." }
    ],
    detailedExplanation: {
      summary: "A lixiviação é a lixívia (lavagem) de nutrientes solúveis (cálcio, magnésio, potássio) pela água da chuva que percola no perfil do solo. Já a laterização é a concentração residual e precipitação de óxidos de ferro e alumínio decorrente da intensa lixiviação da sílica em climas quentes e úmidos, consolidando uma crosta avermelhada endurecida (laterita).",
      stepByStep: [
        "1. Em florestas tropicais maduras, a ciclagem de nutrientes é mantida pela serapilheira (folhas e matéria orgânica que caem e são decompostas rapidamente).",
        "2. Com o desmatamento, o solo fica desprotegido do sol tórrido e da chuva pesada.",
        "3. A água infiltra em grande volume e dissolve bases químicas trocáveis (K+, Ca2+, Mg2+) e sílica solúvel, transportando-os para os lençóis freáticos profundos (lixiviação).",
        "4. No horizonte superficial restam minerais insolúveis de hidróxidos de ferro (Fe2O3) e alumínio (Al2O3).",
        "5. Na alternância com períodos secos, esses óxidos oxidam e cimentam-se, formando a laterita (crosta dura que impede a penetração de raízes e a agricultura)."
      ],
      coreConcept: "Degradação dos Solos Tropicais: Lixiviação de Nutrientes e Laterização",
      trapWarning: "Não confunda lixiviação (lavagem interna por infiltração/percolação) com erosão laminar (desgaste e arraste superficial da terra pelo escoamento superficial)."
    },
    commonTraps: [
      "Confundir lixiviação com erosão superficial laminar",
      "Achar que laterização torna o solo mais fértil (ela gera uma carapaça dura e improdutiva)"
    ],
    tags: ["pedologia", "lixiviacao", "laterizacao", "solos-tropicais", "impactos-ambientais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-024",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia",
    subtopic: "Supressão da Mata Ciliar e Assoreamento Fluvial",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A legislação florestal brasileira (Lei nº 12.651/2012) classifica as faixas de vegetação nativa ao longo das margens de rios, córregos e nascentes como Áreas de Preservação Permanente (APPs). A eliminação deliberada dessa vegetação ribeirinha para expansão agropecuária ou ocupação imobiliária desencadeia uma série de desequilíbrios na dinâmica hidrográfico-sedimentar das bacias.",
      source: "Gestão de Recursos Hídricos e Legislação Ambiental"
    },
    prompt: "A principal função ecológica da mata ciliar cuja perda desencadeia diretamente o assoreamento dos rios é a de:",
    options: [
      { id: "a", text: "ancorar as margens com suas redes de raízes e atuar como filtro biológico retendo sedimentos erodidos pelas chuvas antes que atinjam a calha do rio.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "impedir que a água da chuva atinja o solo através da evaporação instantânea de 100% das gotas na copa das árvores.", isCorrect: false, distractorRationale: "As copas interceptam parte das chuvas amenizando a energia do impacto, mas grande parte da água infiltra e alimenta o lençol freático." },
      { id: "c", text: "gerar correntes de vento contínuas capazes de empurrar a areia das margens para as montanhas mais altas.", isCorrect: false, distractorRationale: "Mata ciliar não gera correntes de vento e sedimentos não sobem montanhas por ação eólica." },
      { id: "d", text: "neutralizar quimicamente todos os metais pesados industriais por decomposição nuclear espontânea.", isCorrect: false, distractorRationale: "Vegetação não realiza transmutação nuclear nem neutraliza poluição radioativa ou química pesada industrial ilimitada." },
      { id: "e", text: "aquecer a água do rio até a temperatura de ebulição para eliminar microrganismos patogênicos.", isCorrect: false, distractorRationale: "A sombra da mata ciliar cumpre função exatamente inversa: mantém a água fresca e oxigenada." }
    ],
    detailedExplanation: {
      summary: "A mata ciliar atua como os 'cílios' dos olhos para o curso d'água: suas raízes entrelaçadas estabilizam os barrancos contra desmoronamentos e a cobertura de folhas e galhos amortece o escoamento superficial da enxurrada, filtrando a terra. Sem a mata, a chuva arrasta toneladas de solo para o leito do rio, diminuindo sua profundidade (assoreamento) e aumentando drasticamente os transbordamentos de cheias.",
      stepByStep: [
        "1. Função física das raízes: agem como uma malha de contenção estrutural contra a erosão mecânica das margens fluviais.",
        "2. Efeito esponja e filtro: o solo coberto por matéria orgânica retém partículas de terra e defensivos agrícolas carreados pela enxurrada.",
        "3. Quando a mata ciliar é desmatada, o escoamento superficial ganha velocidade turbulenta e arrasta grandes volumes de sedimentos para a calha do rio.",
        "4. Deposição de sedimentos no leito do rio: processo conhecido como assoreamento.",
        "5. Consequências do assoreamento: perda da profundidade navegável, morte de espécies bentônicas por turbidez e aumento da frequência e gravidade de inundações nas várzeas ribeirinhas."
      ],
      coreConcept: "Mata Ciliar e Recursos Hídricos: Proteção Mecânica contra Erosão e Assoreamento",
      trapWarning: "Lembre-se da metáfora do ENEM: mata CILIAR protege o rio assim como os CÍLIOS protegem os olhos contra poeira e detritos externos."
    },
    commonTraps: [
      "Achar que o assoreamento é o aumento da profundidade do rio (é o contrário: o leito fica mais raso)",
      "Confundir mata ciliar com vegetação xerófila de caatinga distante dos rios"
    ],
    tags: ["mata-ciliar", "assoreamento", "bacias-hidrograficas", "codigo-florestal", "conservacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-AMB-025",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia",
    subtopic: "Arenização nos Pampas versus Desertificação no Semiárido",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No Brasil, a degradação das terras assume dinâmicas morfológicas e biogeográficas distintas em diferentes regiões ecológicas. Enquanto em áreas do Semiárido nordestino (como nos núcleos de Gilbués, Cabrobó e Irauçuba) desenvolve-se o processo de desertificação, no Sudoeste do Rio Grande do Sul (em municípios como Alegrete, Manoel Viana e São Francisco de Assis) verifica-se o fenômeno da arenização dos campos sulinos.",
      source: "Geomorfologia e Dinâmica de Solos Brasileiros"
    },
    prompt: "A distinção conceitual e ambiental primordial entre o processo de arenização gaúcho e a desertificação semiárida reside no fato de que a arenização:",
    options: [
      { id: "a", text: "ocorre em clima subtropical úmido com precipitação pluviométrica abundante, decorrendo do retrabalhamento eólico e hídrico de depósitos de arenito friável sob pastoreio excessivo, e não de déficit de chuvas prolongado.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "constitui um processo estritamente idêntico à desertificação, diferenciando-se unicamente pelo nome vernacular atribuído pelos produtores de soja.", isCorrect: false, distractorRationale: "São processos pedológicos e climáticos radicalmente diferentes; desertificação exige clima árido, semiárido ou subúmido seco." },
      { id: "c", text: "é provocada pela chuva ácida gerada pelas usinas de carvão que dissolve as rochas basálticas da serra.", isCorrect: false, distractorRationale: "O substrato da arenização é arenito de origem eólica fóssil da Formação Botucatu, e não basalto dissolvido por acidez." },
      { id: "d", text: "ocorre exclusivamente em áreas urbanizadas por descarte de entulho de construção civil ao ar livre.", isCorrect: false, distractorRationale: "A arenização é um processo rural em áreas campestres extensivas de pecuária do bioma Pampa." },
      { id: "e", text: "resulta da elevação do lençol freático por represamento de usinas hidrelétricas costeiras.", isCorrect: false, distractorRationale: "O fenômeno relaciona-se à erosão hídrica e eólica superficial sobre substrato arenoso frágil, sem relação com represas litorâneas." }
    ],
    detailedExplanation: {
      summary: "A desertificação (definida pela ONU na Convenção de Combate à Desertificação) ocorre exclusivamente em zonas áridas, semiáridas e subúmidas secas com severo déficit hídrico acumulado. Já a arenização no Rio Grande do Sul ocorre em clima subtropical com alto índice de chuvas (1.400 a 1.700 mm/ano). Solos derivados de arenitos pouco consolidados perdem a cobertura de gramíneas pelo sobrepastoreio, expondo a areia móvel que forma 'areais'.",
      stepByStep: [
        "1. Desertificação: Clima com balanço hídrico negativo (escassez de chuvas + alta evaporação) no Semiárido brasileiro, degradando a Caatinga e os solos rasos.",
        "2. Arenização: Clima subtropical úmido (chove regularmente o ano todo) nos Pampas sul-rio-grandenses.",
        "3. Geologia da arenização: Substrato de rochas sedimentares areníticas friáveis (paleodunas fósseis da Bacia do Paraná).",
        "4. Ação antrópica: O pisoteio excessivo do gado (sobrepastoreio) e a aração agrícola removem a cobertura rasa de gramíneas dos campos nativos.",
        "5. A força das chuvas torrenciais (ravinas) e dos ventos espalha a areia solta, originando manchas de areia em expansão conhecidas como areais."
      ],
      coreConcept: "Arenização vs Desertificação: Diferenças Climáticas, Geológicas e Morfogenéticas",
      trapWarning: "Cuidado clássico no ENEM: a arenização no Rio Grande do Sul NÃO É desertificação! O clima local é CHUVOSO (subtropical úmido), desmentindo a ideia de que 'surgimento de areia decorre de falta de chuvas'."
    },
    commonTraps: [
      "Classificar a arenização como uma forma de desertificação em clima seco",
      "Esquecer que o clima do Sudoeste gaúcho é subtropical úmido com chuvas regulares"
    ],
    tags: ["arenizacao", "desertificação", "bioma-pampa", "semiarido", "geomorfologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

