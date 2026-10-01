export const QUESTIONS_ECOLOGIA = [
  {
    id: "NAT-ECO-001",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Ecologia",
    subtopic: "Biomas Brasileiros",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "manaus",
    hubId: "encontro-das-aguas",
    context: {
      supportText: "O Encontro das Águas, em Manaus, é um fenômeno natural onde as águas escuras do Rio Negro e as águas barrentas do Rio Solimões correm lado a lado sem se misturar por quilômetros. Essa separação é mantida por diferenças de temperatura, densidade e velocidade da correnteza. O Rio Negro é rico em ácidos húmicos provenientes da decomposição de matéria orgânica, enquanto o Solimões carrega grande quantidade de sedimentos dos Andes.",
      source: "Inspirada em ENEM"
    },
    prompt: "As características descritas das águas dos rios Negro e Solimões afetam diretamente a produtividade primária e a biodiversidade local. A menor produtividade primária das águas do Rio Negro, comparada à do Rio Solimões, é explicada principalmente pela:",
    options: [
      { id: "a", text: "alta concentração de sedimentos andinos que bloqueia a luz.", isCorrect: false, distractorRationale: "O Rio Solimões, e não o Negro, tem alta concentração de sedimentos andinos." },
      { id: "b", text: "baixa penetração de luz devido à coloração escura, limitando a fotossíntese.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "maior temperatura das águas do Rio Negro, que desnatura enzimas fotossintéticas.", isCorrect: false, distractorRationale: "A diferença de temperatura não é suficiente para desnaturar enzimas, e a temperatura não é o fator limitante primário da fotossíntese aqui." },
      { id: "d", text: "presença de ácidos húmicos que atuam como fertilizantes inibitórios.", isCorrect: false, distractorRationale: "Ácidos húmicos não são fertilizantes inibitórios, apenas alteram o pH e a cor." },
      { id: "e", text: "maior velocidade da correnteza, que impede a fixação do fitoplâncton.", isCorrect: false, distractorRationale: "O Rio Negro tem menor velocidade que o Solimões." }
    ],
    detailedExplanation: {
      summary: "A coloração escura do Rio Negro impede a penetração de luz, limitando a fotossíntese do fitoplâncton.",
      stepByStep: [
        "Passo 1: Identificar a base da cadeia alimentar aquática (fitoplâncton), que depende de luz para a fotossíntese (produtividade primária).",
        "Passo 2: Relacionar a cor escura do Rio Negro, devido aos ácidos húmicos, com a atenuação da luz na coluna d'água.",
        "Passo 3: Concluir que menos luz significa menos fotossíntese, resultando em menor produtividade primária em comparação com as águas do Solimões (que apesar dos sedimentos, possui mais nutrientes disponíveis)."
      ],
      coreConcept: "Produtividade Primária e Fatores Limitantes na Fotossíntese",
      trapWarning: "Confundir as características dos rios (ex: sedimentos do Solimões vs cor do Negro)."
    },
    commonTraps: ["Confusão de rios", "Ignorar fator limitante da luz"],
    tags: ["biomas", "amazonia", "hidrografia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-002",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Ecologia",
    subtopic: "Poluição Ambiental",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "vitoria",
    hubId: "praia-de-camburi",
    context: {
      supportText: "A Praia de Camburi, em Vitória, frequentemente monitora a qualidade de suas águas devido a despejos irregulares de esgoto doméstico e efluentes industriais, incluindo o problema do pó preto (material particulado). O esgoto não tratado despejado no mar altera significativamente a dinâmica ecológica local.",
      source: "Original"
    },
    prompt: "O despejo contínuo e excessivo de esgoto doméstico nas águas costeiras de Camburi pode desencadear um processo ecológico conhecido como eutrofização. A consequência direta e mais crítica desse processo para a fauna aquática local é a:",
    options: [
      { id: "a", text: "mortalidade de peixes devido à redução drástica do oxigênio dissolvido na água.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "bioacumulação de metais pesados nos tecidos dos predadores de topo.", isCorrect: false, distractorRationale: "Bioacumulação/Magnificação trófica ocorre com poluentes persistentes (metais pesados, agrotóxicos), não necessariamente pelo esgoto doméstico, rico em matéria orgânica." },
      { id: "c", text: "proliferação excessiva de corais devido ao excesso de nutrientes.", isCorrect: false, distractorRationale: "O excesso de nutrientes (eutrofização) prejudica os corais ao promover crescimento de algas que os sufocam, além da turbidez diminuir a luz para as zooxantelas." },
      { id: "d", text: "diminuição da temperatura da água, alterando os ciclos reprodutivos.", isCorrect: false, distractorRationale: "O despejo de esgoto não diminui significativamente a temperatura do mar aberto." },
      { id: "e", text: "redução do material particulado (pó preto) na coluna d'água.", isCorrect: false, distractorRationale: "O esgoto aumenta o material particulado (matéria orgânica), não o reduz." }
    ],
    detailedExplanation: {
      summary: "A eutrofização causa a proliferação de bactérias aeróbias que consomem o oxigênio da água para decompor a matéria orgânica, matando a fauna aquática por asfixia.",
      stepByStep: [
        "Passo 1: Entender que o esgoto doméstico é rico em matéria orgânica e nutrientes (nitrogênio e fósforo).",
        "Passo 2: O excesso de nutrientes causa a proliferação de algas (floração) na superfície, bloqueando a luz.",
        "Passo 3: A morte dessas algas e a presença de matéria orgânica do esgoto promovem a explosão populacional de bactérias decompositoras aeróbias.",
        "Passo 4: As bactérias consomem quase todo o oxigênio dissolvido, levando a fauna aquática (peixes, crustáceos) à morte por asfixia."
      ],
      coreConcept: "Eutrofização e Demanda Bioquímica de Oxigênio (DBO)",
      trapWarning: "Confundir eutrofização (excesso de nutrientes/matéria orgânica) com magnificação trófica (acúmulo de toxinas)."
    },
    commonTraps: ["Confundir com magnificação trófica", "Achar que mais nutrientes sempre = vida saudável"],
    tags: ["poluicao", "eutrofizacao", "impacto ambiental"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-003",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Ecologia",
    subtopic: "Cadeias Alimentares",
    difficulty: 4,
    estimatedTimeSeconds: 210,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    cityId: "salvador",
    hubId: "farol-da-barra",
    context: {
      supportText: "Próximo ao Farol da Barra, em Salvador, um estudo analisou a concentração de um poluente persistente (um tipo de microplástico contaminado) na seguinte cadeia alimentar marinha: Fitoplâncton → Zooplâncton → Sardinha → Atum → Tubarão. A transferência de energia entre os níveis tróficos segue a regra dos 10%, mas os poluentes persistentes comportam-se de forma diferente.",
      source: "Inspirada em ENEM"
    },
    prompt: "Considerando a dinâmica de energia e de poluentes persistentes nas cadeias alimentares, se a população de fitoplâncton armazenar 10.000 kcal de energia, e sabendo que ocorre o fenômeno de magnificação trófica com o microplástico, a quantidade de energia disponível para os tubarões e a concentração do poluente em seus tecidos serão, respectivamente:",
    options: [
      { id: "a", text: "1 kcal; menor que no fitoplâncton.", isCorrect: false, distractorRationale: "A energia está correta (10.000 -> 1.000 -> 100 -> 10 -> 1), mas a concentração do poluente será a maior, e não a menor." },
      { id: "b", text: "10 kcal; igual à do fitoplâncton.", isCorrect: false, distractorRationale: "Erro no cálculo dos níveis tróficos (seria 1 kcal) e na dinâmica do poluente, que se acumula." },
      { id: "c", text: "1 kcal; a maior de toda a cadeia alimentar.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "0,1 kcal; a maior de toda a cadeia alimentar.", isCorrect: false, distractorRationale: "Erro na contagem dos níveis: Fitoplâncton(10k) -> Zooplâncton(1k) -> Sardinha(100) -> Atum(10) -> Tubarão(1). 0,1 seria o próximo nível." },
      { id: "e", text: "1.000 kcal; menor que na sardinha.", isCorrect: false, distractorRationale: "O tubarão recebe a menor energia de todos e tem a maior concentração de poluente." }
    ],
    detailedExplanation: {
      summary: "A energia diminui a cada nível trófico (cerca de 10% é repassado), enquanto poluentes persistentes se acumulam (magnificação trófica), sendo maiores nos predadores de topo.",
      stepByStep: [
        "Passo 1: Calcular a energia. Fitoplâncton (10.000 kcal).",
        "Passo 2: Zooplâncton (10% de 10.000 = 1.000 kcal).",
        "Passo 3: Sardinha (10% de 1.000 = 100 kcal).",
        "Passo 4: Atum (10% de 100 = 10 kcal).",
        "Passo 5: Tubarão (10% de 10 = 1 kcal).",
        "Passo 6: Identificar a magnificação trófica. Poluentes não biodegradáveis acumulam nos tecidos ao longo da vida do animal e passam para o próximo nível. O topo da cadeia (Tubarão) tem a maior concentração."
      ],
      coreConcept: "Fluxo de Energia e Magnificação Trófica",
      trapWarning: "Cuidado ao contar os níveis tróficos e aplicar a regra dos 10%. A energia flui de forma decrescente, e os poluentes de forma crescente."
    },
    commonTraps: ["Errar o cálculo dos 10%", "Confundir o fluxo de energia com acúmulo de matéria poluente"],
    tags: ["cadeia alimentar", "magnificacao trofica", "energia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-004",
    area: "natureza",
    competence: 6,
    skill: 23,
    topic: "Ecologia",
    subtopic: "Desmatamento e Mudanças Climáticas",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "manaus",
    hubId: "torre-atto",
    context: {
      supportText: "A Torre ATTO (Amazon Tall Tower Observatory), construída no meio da floresta amazônica a 150 km de Manaus, monitora as interações entre a floresta e a atmosfera. Seus sensores medem a concentração de gases de efeito estufa e a emissão de compostos orgânicos voláteis (VOCs). Observa-se que o avanço do desmatamento na região altera as chuvas locais e até mesmo de outras regiões do país, através dos chamados 'rios voadores'.",
      source: "Original"
    },
    prompt: "A redução das chuvas nas regiões Centro-Oeste e Sudeste do Brasil, causada pelo desmatamento na Amazônia, está diretamente relacionada ao comprometimento de qual processo ecofisiológico e físico, respectivamente?",
    options: [
      { id: "a", text: "Evapotranspiração das árvores e circulação de massas de ar.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Gutação foliar e condensação de rios subterrâneos.", isCorrect: false, distractorRationale: "Gutação é a perda de água líquida; não é a responsável pelos grandes volumes de vapor dos rios voadores." },
      { id: "c", text: "Respiração celular e precipitação convectiva.", isCorrect: false, distractorRationale: "A respiração produz água, mas a evapotranspiração é o principal motor que lança umidade para a atmosfera em larga escala." },
      { id: "d", text: "Fotossíntese e efeito estufa.", isCorrect: false, distractorRationale: "A fotossíntese retira CO2 e a redução dela agrava o efeito estufa, mas a pergunta foca na origem da umidade (chuvas)." },
      { id: "e", text: "Decomposição da serrapilheira e inversão térmica.", isCorrect: false, distractorRationale: "Decomposição não é a principal fonte de umidade; inversão térmica é um fenômeno de aprisionamento de ar frio." }
    ],
    detailedExplanation: {
      summary: "As árvores da Amazônia lançam imensas quantidades de água na atmosfera via evapotranspiração. Os ventos (massas de ar) transportam essa umidade ('rios voadores') para o centro-sul do Brasil.",
      stepByStep: [
        "Passo 1: Entender que a floresta atua como uma 'bomba d'água'. As raízes absorvem água do solo e as folhas a liberam em forma de vapor pelo processo de evapotranspiração.",
        "Passo 2: Reconhecer que esse vapor forma enormes massas úmidas conhecidas como 'rios voadores'.",
        "Passo 3: A circulação atmosférica (ventos alísios e choques com os Andes) direciona essa umidade para o Centro-Oeste, Sudeste e Sul do Brasil, causando as chuvas nessas regiões.",
        "Passo 4: O desmatamento reduz a evapotranspiração, enfraquecendo os rios voadores e diminuindo as chuvas nestas outras regiões."
      ],
      coreConcept: "Ciclo da Água, Evapotranspiração e Rios Voadores",
      trapWarning: "Achar que a umidade da Amazônia fica restrita à região Norte ou que a gutação é o processo responsável por evaporar grandes volumes de água."
    },
    commonTraps: ["Confundir transpiração com gutação ou respiração", "Desconhecer o conceito de rios voadores"],
    tags: ["amazonia", "clima", "desmatamento", "ciclo da agua"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-005",
    area: "natureza",
    competence: 2,
    skill: 7,
    topic: "Ecologia",
    subtopic: "Ciclos Biogeoquímicos",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "salvador",
    hubId: "pelourinho",
    context: {
      supportText: "Em áreas urbanas densas e com vegetação esparsa, como em algumas ladeiras históricas de Salvador durante fortes chuvas, a lixiviação do solo é intensa. Em um projeto de recuperação ambiental de encostas, utilizou-se o plantio de leguminosas (como o feijão-bravo) associadas a certas bactérias para melhorar rapidamente a fertilidade química do solo empobrecido, sem o uso de fertilizantes industriais.",
      source: "Inspirada em ENEM"
    },
    prompt: "O sucesso das leguminosas na recuperação da fertilidade de solos empobrecidos ocorre graças a uma simbiose com bactérias do gênero *Rhizobium*. O principal papel ecológico dessas bactérias no ciclo biogeoquímico em questão é:",
    options: [
      { id: "a", text: "fixar o gás carbônico atmosférico, transformando-o em matéria orgânica no solo.", isCorrect: false, distractorRationale: "As plantas fazem a fixação de carbono (fotossíntese), não as bactérias Rhizobium no contexto do solo." },
      { id: "b", text: "realizar a desnitrificação, devolvendo nitrogênio livre para a atmosfera e arejando o solo.", isCorrect: false, distractorRationale: "As bactérias desnitrificantes (ex: Pseudomonas) fazem isso, o que empobrece o solo em nitrogênio disponível." },
      { id: "c", text: "converter o gás nitrogênio atmosférico (N2) em amônia (NH3), que as plantas conseguem assimilar.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "decompor a matéria orgânica morta em nitratos, acelerando a reciclagem de fósforo.", isCorrect: false, distractorRationale: "A decomposição é feita por fungos e várias bactérias (amonificação), e nitrato não recicla fósforo." },
      { id: "e", text: "absorver os íons tóxicos lixiviados das chuvas, realizando fitorremediação associada.", isCorrect: false, distractorRationale: "O Rhizobium não atua principalmente na remoção de íons tóxicos, e sim na fixação de nitrogênio." }
    ],
    detailedExplanation: {
      summary: "Bactérias Rhizobium vivem em nódulos nas raízes de leguminosas e realizam a fixação biológica do nitrogênio, convertendo N2 do ar em amônia, fertilizando o solo.",
      stepByStep: [
        "Passo 1: Identificar o processo: plantio de leguminosas para recuperar solo empobrecido aponta para o Ciclo do Nitrogênio.",
        "Passo 2: Reconhecer a relação simbiótica entre leguminosas e bactérias do gênero Rhizobium.",
        "Passo 3: Lembrar a função do Rhizobium: elas captam o nitrogênio gasoso (N2) do ar presente nos poros do solo e o convertem em amônia (NH3).",
        "Passo 4: A amônia pode ser usada pela planta para fazer aminoácidos e proteínas. Quando as plantas/folhas morrem, esse nitrogênio fica disponível no solo (adubação verde)."
      ],
      coreConcept: "Ciclo do Nitrogênio e Fixação Biológica",
      trapWarning: "Confundir as etapas do ciclo do nitrogênio (fixação, nitrificação, desnitrificação) e suas respectivas bactérias."
    },
    commonTraps: ["Confundir Rhizobium com Nitrosomonas ou Nitrobacter (nitrificantes)", "Achar que a planta fixa N2 sozinha"],
    tags: ["ciclos", "nitrogenio", "solo", "simbiose"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
