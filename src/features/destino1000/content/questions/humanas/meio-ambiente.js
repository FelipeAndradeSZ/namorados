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
  }
];

