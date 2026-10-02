export const QUESTIONS_TERMOLOGIA = [
  {
    id: "NAT-TERM-001",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Calor Específico e Regulação Térmica",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em regiões litorâneas, a amplitude térmica diária (diferença entre a temperatura máxima durante o dia e a mínima durante a noite) é significativamente menor do que em regiões desérticas ou no interior dos continentes. Na praia, durante o dia, sopra uma brisa fresca vinda do mar para a terra (brisa marítima), enquanto à noite o vento inverte a direção, soprando da terra para o mar (brisa terrestre).",
      source: "Meteorologia e Física Térmica"
    },
    prompt: "Essa menor oscilação de temperatura e a formação das brisas costeiras são explicadas fisicamente pelo fato de a água líquida possuir:",
    options: [
      { id: "a", text: "elevado calor específico sensível, demorando mais tanto para aquecer quanto para esfriar em comparação com a areia e o solo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "baixo calor latente de fusão, liberando calor diretamente para o solo durante a noite.", isCorrect: false, distractorRationale: "O calor específico da água é ALTO (~1 cal/g·°C vs ~0,2 cal/g·°C da areia), e não há fusão da água na praia tropical." },
      { id: "c", text: "alta condutividade térmica molecular, transferindo calor instantaneamente para as camadas profundas do oceano.", isCorrect: false, distractorRationale: "A água líquida é uma péssima condutora térmica; a transferência térmica no oceano se dá por convecção." },
      { id: "d", text: "densidade constante independente de qualquer variação de temperatura ou salinidade.", isCorrect: false, distractorRationale: "A densidade da água varia com a temperatura e salinidade, permitindo as correntes oceânicas." },
      { id: "e", text: "capacidade de refletir 100% da radiação solar por refração interna total na superfície.", isCorrect: false, distractorRationale: "A água absorve grande quantidade de radiação solar." }
    ],
    detailedExplanation: {
      summary: "A água possui um dos maiores calores específicos da natureza (1 cal/g·°C). Por isso, precisa absorver ou perder muito calor para variar sua temperatura (Q = m·c·ΔT). Isso torna os oceanos imensos reguladores térmicos.",
      stepByStep: [
        "Passo 1: Calor específico da areia (~0,2 cal/g·°C) é 5 vezes menor que o da água (1,0 cal/g·°C).",
        "Passo 2: Durante o dia, sob mesma radiação solar, a areia esquenta muito mais rápido que o mar. O ar sobre a areia fica quente, menos denso e sobe, gerando baixa pressão local que puxa o ar mais frio do mar (brisa marítima).",
        "Passo 3: Durante a noite, a areia esfria muito rápido. A água do mar permanece morna por muito mais tempo. O ar sobre o mar sobe e a brisa sopra da terra para o mar (brisa terrestre).",
        "Passo 4: Portanto, o elevado calor específico da água atua como estabilizador térmico do clima costeiro."
      ],
      coreConcept: "Calor Específico Alto da Água e Formação das Brisas Costeiras",
      trapWarning: "Lembre-se da fórmula Q = m · c · ΔT. Quanto maior o calor específico 'c', MENOR a variação de temperatura 'ΔT' para uma mesma quantidade de calor."
    },
    commonTraps: ["Achar que a água esquenta mais rápido que a areia", "Confundir calor específico com condutividade térmica"],
    tags: ["calor especifico", "clima", "brisas", "fisica termica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-002",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Processos de Propagação de Calor: Garrafa Térmica",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A garrafa térmica (frasco de Dewar) foi projetada para manter líquidos quentes ou frios por muitas horas, minimizando ao máximo as trocas térmicas com o ambiente externo. Sua estrutura é composta por uma ampola de vidro com paredes duplas espelhadas, separadas por uma região de vácuo, além de uma tampa vedante de material plástico isolante.",
      source: "Termodinâmica Clássica Aplicada"
    },
    prompt: "Na garrafa térmica, a existência do vácuo entre as paredes de vidro e o espelhamento das faces interna e externa têm como funções físicas impedir, respectivamente, as transferências de calor por:",
    options: [
      { id: "a", text: "condução e convecção (pelo vácuo) e radiação eletromagnética infravermelha (pelo espelhamento).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "radiação apenas (pelo vácuo) e convecção interna de vapor (pelo espelhamento).", isCorrect: false, distractorRationale: "A radiação eletromagnética propaga-se livremente no vácuo; quem é bloqueado pelo vácuo são a condução e a convecção." },
      { id: "c", text: "condução mecânica (pelo vácuo) e sublimação do ar (pelo espelhamento).", isCorrect: false, distractorRationale: "O espelhamento reflete ondas eletromagnéticas infravermelhas, sem relação com sublimação." },
      { id: "d", text: "evaporação térmica (pelo vácuo) e difusão osmótica (pelo espelhamento).", isCorrect: false, distractorRationale: "A evaporação é impedida pela tampa vedante hermética." },
      { id: "e", text: "convecção forçada (pelo vácuo) e dispersão luminosa de raios ultravioleta (pelo espelhamento).", isCorrect: false, distractorRationale: "O calor emitido por corpos em temperaturas usuais é radiação infravermelha, não UV." }
    ],
    detailedExplanation: {
      summary: "Condução e convecção exigem meio material e são impedidas pelo vácuo. A radiação (que viaja no vácuo) é impedida pelas superfícies espelhadas que refletem as ondas de calor infravermelho de volta.",
      stepByStep: [
        "Passo 1: Condução térmica: ocorre de molécula a molécula por choques atômicos (precisa de matéria sólida/fluida).",
        "Passo 2: Convecção térmica: ocorre pela circulação de massas fluidas com densidades diferentes (precisa de líquido ou gás).",
        "Passo 3: Ambas precisam de meio material: logo, a câmara de VÁCUO anula a condução e a convecção.",
        "Passo 4: Radiação térmica: propaga-se por ondas eletromagnéticas (infravermelho) inclusive no vácuo. Para bloqueá-la, usam-se paredes ESPELHADAS que refletem a radiação térmica de volta ao interior (ou a refletem para fora se a bebida for fria)."
      ],
      coreConcept: "Mecanismos de Transferência Térmica: Condução, Convecção e Radiação",
      trapWarning: "Cuidado: a radiação se propaga perfeitamente no vácuo (é assim que o calor do Sol chega à Terra!). Por isso o vácuo sozinho não basta; é indispensável o espelhamento."
    },
    commonTraps: ["Achar que o vácuo impede a radiação", "Esquecer que convecção só acontece em fluidos"],
    tags: ["garrafa termica", "conducao", "conveccao", "radiacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-003",
    area: "natureza",
    competence: 5,
    skill: 19,
    topic: "Termologia",
    subtopic: "Calorimetria: Trocas de Calor e Temperatura de Equilíbrio",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um calorímetro ideal de capacidade térmica desprezível, um estudante mistura 200 g de água líquida a 80 °C com 300 g de água líquida a 20 °C. O sistema é mantido termicamente isolado do ambiente externo à pressão de 1 atm. Considere o calor específico da água igual a 1,0 cal/(g·°C).",
      source: "Laboratório de Termofísica"
    },
    prompt: "Após atingido o equilíbrio térmico no interior do calorímetro, a temperatura final da mistura de água é de:",
    options: [
      { id: "a", text: "40 °C", isCorrect: false, distractorRationale: "Seria 40 °C apenas se as massas fossem diferentes e proporcionais a 1:2, mas aqui a conta exata dá 44 °C." },
      { id: "b", text: "44 °C", isCorrect: true, distractorRationale: null },
      { id: "c", text: "50 °C", isCorrect: false, distractorRationale: "50 °C seria a média aritmética simples (80 + 20)/2, válida apenas se as massas de água quente e fria fossem idênticas (ex: 200g e 200g)." },
      { id: "d", text: "54 °C", isCorrect: false, distractorRationale: "Inversão das massas no numerador." },
      { id: "e", text: "60 °C", isCorrect: false, distractorRationale: "Superestimação da temperatura de equilíbrio." }
    ],
    detailedExplanation: {
      summary: "Em sistema termicamente isolado, ΣQ = 0. Q_cedido + Q_recebido = 0. m1·c·(T - T1) + m2·c·(T - T2) = 0. A média ponderada pelas massas resulta em 44 °C.",
      stepByStep: [
        "Passo 1: Princípio das Trocas de Calor: ΣQ = 0.",
        "Q_água_quente + Q_água_fria = 0",
        "Passo 2: Aplicar Q = m · c · (Tf - Ti):",
        "200 · 1 · (Tf - 80) + 300 · 1 · (Tf - 20) = 0",
        "Passo 3: Desenvolver a equação:",
        "200·Tf - 16 000 + 300·Tf - 6 000 = 0",
        "500·Tf - 22 000 = 0",
        "500·Tf = 22 000",
        "Tf = 22 000 / 500 = 44 °C."
      ],
      coreConcept: "Equilíbrio Térmico e Média Ponderada: Tf = (m1·T1 + m2·T2) / (m1 + m2)",
      trapWarning: "Cuidado clássico do ENEM: NÃO faça média aritmética simples (80 + 20)/2 = 50 °C quando as massas forem diferentes! Há mais água fria (300 g) do que quente (200 g), logo a temperatura final deve ficar abaixo de 50 °C."
    },
    commonTraps: ["Fazer média simples (50 °C) ignorando a diferença de massas", "Errar o sinal de menos na variação de temperatura"],
    tags: ["calorimetria", "equilibrio termico", "calculo", "ouro-tri"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-004",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Panela de Pressão e Diagrama de Fases",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Cozinhar grãos duros como feijão em uma panela aberta tradicional ao nível do mar pode levar mais de duas horas. Já em uma panela de pressão com válvula de segurança calibrada para manter a pressão interna em cerca de 2,0 atm, o feijão cozinha completamente em menos de 25 minutos.",
      source: "Física do Cotidiano"
    },
    prompt: "O cozimento muito mais rápido dos alimentos na panela de pressão deve-se ao fato de que o aumento da pressão interna confinada de vapor:",
    options: [
      { id: "a", text: "eleva a temperatura de ebulição da água para cerca de 120 °C, transferindo calor ao alimento em temperatura mais alta.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "reduz a temperatura de ebulição da água para 80 °C, fazendo-a ferver mais cedo com menos consumo de gás.", isCorrect: false, distractorRationale: "Maior pressão AUMENTA a temperatura de ebulição. Se a água fervesse a 80 °C, o alimento demoraria muito mais para cozinhar." },
      { id: "c", text: "aumenta o calor latente de fusão do feijão por esmagamento pneumático.", isCorrect: false, distractorRationale: "Feijão não sofre fusão e a pressão não esmaga os grãos para cozinhá-los." },
      { id: "d", text: "anula a tensão superficial da água líquida, permitindo que as moléculas penetrem nos grãos por osmose reversa.", isCorrect: false, distractorRationale: "A tensão superficial varia com temperatura e tensoativos, mas o fator determinante do cozimento é a alta temperatura da água líquida." },
      { id: "e", text: "transforma o calor sensível da chama do fogão em radiação micro-ondas ionizante.", isCorrect: false, distractorRationale: "A panela de pressão funciona por termodinâmica clássica de gases e vapores, sem radiação ionizante." }
    ],
    detailedExplanation: {
      summary: "A ebulição ocorre quando a pressão máxima de vapor do líquido iguala a pressão externa. Sob 2 atm de pressão, a água ferve a cerca de 120 °C (em vez de 100 °C). A reações de cozimento ocorrem muito mais rápido em temperaturas maiores.",
      stepByStep: [
        "Passo 1: Entender a condição de ebulição: Pressão de Vapor do líquido = Pressão externa do meio.",
        "Passo 2: Em panela aberta ao nível do mar (1 atm), a água líquida não passa de 100 °C, pois qualquer calor adicional é gasto como calor latente para evaporar a água.",
        "Passo 3: Na panela de pressão fechada, o vapor fica retido e a pressão interna sobe para ~2 atm.",
        "Passo 4: Sob 2 atm, as moléculas de água precisam de mais energia cinética para vencer a pressão externa: a água permanece líquida até cerca de 120 °C.",
        "Passo 5: Como a velocidade das reações químicas de desnaturação proteica e amaciamento do amido dobra a cada ~10 °C de aumento de temperatura (regra de van 't Hoff), a 120 °C o cozimento é cerca de 4 a 5 vezes mais rápido."
      ],
      coreConcept: "Influência da Pressão Externa na Temperatura de Ebulição",
      trapWarning: "Cuidado: cozinhar em cidades de grande altitude (como La Paz, 3600m), onde a pressão é MENOR (0,65 atm), faz a água ferver a cerca de 88 °C. Logo, cozinhar feijão em panela aberta em La Paz é quase impossível!"
    },
    commonTraps: ["Achar que a água ferve a menos de 100 °C na panela de pressão", "Confundir velocidade de atingir a fervura com temperatura de cozimento"],
    tags: ["pressao", "ebulicao", "cotidiano", "curva de aquecimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-005",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Termorregulação e Evaporação do Suor",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em dias quentes de verão em cidades com ar muito úmido (como Belém ou Rio de Janeiro a 35 °C e 85% de umidade relativa), a sensação de abafamento e cansaço térmico é muito mais intensa do que em um dia de calor seco com os mesmos 35 °C em Brasília ou no sertão nordestino. Nesses ambientes úmidos, o suor escorre pela pele sem secar.",
      source: "Fisiologia Térmica Humana"
    },
    prompt: "O desconforto térmico acentuado em ambientes quentes e úmidos ocorre porque a alta concentração de vapor de água na atmosfera circundante:",
    options: [
      { id: "a", text: "dificulta a evaporação do suor, impedindo que a água retire calor latente de vaporização do corpo para resfriá-lo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "acelera a condensação do suor, liberando calor diretamente sobre a derme.", isCorrect: false, distractorRationale: "O suor não se condensa sobre a pele (ele já é líquido); o problema é que ele NÃO evapora." },
      { id: "c", text: "aumenta a condutividade térmica do oxigênio molecular, queimando as glândulas sudoríparas.", isCorrect: false, distractorRationale: "A umidade não altera a condutividade do oxigênio de forma nociva às glândulas." },
      { id: "d", text: "reduz a pressão atmosférica a zero, bloqueando a vasodilatação periférica.", isCorrect: false, distractorRationale: "A pressão atmosférica não vai a zero em dias úmidos." },
      { id: "e", text: "faz o calor específico do sangue humano cair pela metade.", isCorrect: false, distractorRationale: "O calor específico do sangue permanece essencialmente constante." }
    ],
    detailedExplanation: {
      summary: "O suor só resfria o organismo quando EVAPORA (retirando ~540 cal por grama de água da pele na forma de calor latente de vaporização). Se o ar já estiver saturado de umidade, o suor não evapora e o corpo superaquece.",
      stepByStep: [
        "Passo 1: As glândulas sudoríparas secretam água com sais na pele.",
        "Passo 2: Para a água líquida passar ao estado de vapor, ela necessita absorver uma grande quantidade de energia: o Calor Latente de Vaporização (Lv ≈ 540 cal/g).",
        "Passo 3: Essa energia térmica é retirada diretamente dos capilares sanguíneos da pele, resfriando o corpo humano.",
        "Passo 4: Em ar muito úmido (próximo de 100% de umidade relativa), a taxa de evaporação cai drasticamente porque a atmosfera já está quase saturada de vapor.",
        "Passo 5: O suor apenas escorre líquido, sem evaporar e sem resfriar o corpo, elevando a sensação térmica."
      ],
      coreConcept: "Termorregulação Humana e Calor Latente de Evaporação do Suor",
      trapWarning: "Suar não resfria se o suor apenas pingar no chão! O resfriamento ocorre exclusivamente durante a TRANSIÇÃO DE FASE de líquido para vapor (calor latente retirado da pele)."
    },
    commonTraps: ["Achar que o simples ato de produzir suor resfria", "Ignorar a relação entre umidade do ar e taxa de evaporação"],
    tags: ["fisiologia", "calor latente", "sensacao termica", "saude"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-006",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Comportamento Anômalo da Água",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em regiões polares e de invernos rigorosos, lagos profundos congelam durante o inverno apenas na superfície externa, formando uma camada espessa de gelo flutuante. Sob essa crosta sólida, a água permanece líquida no fundo a aproximadamente 4 °C, permitindo a sobrevivência de peixes e de toda a fauna e flora aquática subaquática durante meses.",
      source: "Ecologia Aquática e Termodinâmica"
    },
    prompt: "A manutenção da água líquida no fundo do lago e o congelamento estrito de cima para baixo são explicados pela anomalia térmica da água, segundo a qual:",
    options: [
      { id: "a", text: "entre 0 °C e 4 °C, a água líquida se contrai ao ser aquecida (sua densidade é máxima a 4 °C), fazendo a água a 4 °C afundar enquanto o gelo (menos denso) flutua.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a água no fundo dos lagos atinge densidade nula devido à pressão hidrostática dos sedimentos.", isCorrect: false, distractorRationale: "Densidade nula é impossível para qualquer líquido." },
      { id: "c", text: "o gelo é um excelente condutor térmico que transfere o frio para a estratosfera.", isCorrect: false, distractorRationale: "O gelo é um ISOLANTE térmico (péssimo condutor), o que ajuda a proteger a água líquida abaixo dele." },
      { id: "d", text: "o calor latente de fusão da água é negativo em profundidades superiores a 2 metros.", isCorrect: false, distractorRationale: "Calor latente de fusão é uma constante termodinâmica positiva (80 cal/g)." },
      { id: "e", text: "a água salobra do fundo se decompõe espontaneamente em hidrogênio gasoso a 4 °C.", isCorrect: false, distractorRationale: "A água não se decompõe a 4 °C." }
    ],
    detailedExplanation: {
      summary: "A água tem densidade máxima a 4 °C devido ao arranjo das pontes de hidrogênio. Água a 4 °C é mais densa e desce para o fundo; a 0 °C e no gelo, a densidade é menor, permanecendo no topo.",
      stepByStep: [
        "Passo 1: A imensa maioria dos líquidos se contrai continuamente ao esfriar até solidificar. A água se comporta assim de 100 °C até 4 °C.",
        "Passo 2: No entanto, entre 4 °C e 0 °C, as pontes de hidrogênio começam a formar uma rede cristalina hexagonal aberta mais espaçosa: a água se EXPANDA ao resfriar de 4 °C a 0 °C!",
        "Passo 3: Portanto, a água atinge sua DENSIDADE MÁXIMA exatamente a 4 °C (d = 1,000 g/cm³).",
        "Passo 4: Em um lago esfriando no inverno, a água da superfície a 4 °C afunda por convecção. Quando toda a água atinge 4 °C, a superfície continua resfriando para 3 °C, 2 °C, 1 °C e 0 °C (ficando MENOS densa e permanecendo na superfície).",
        "Passo 5: A superfície congela em gelo (d ≈ 0,92 g/cm³), que flutua e forma um isolante térmico que impede o fundo de congelar."
      ],
      coreConcept: "Comportamento Anômalo da Água e Densidade Máxima a 4 °C",
      trapWarning: "Lembre-se: o gelo flutua porque é MENOS DENSO que a água líquida (d_gelo ≈ 0,92 g/cm³ < d_água ≈ 1,0 g/cm³). Na fusão do gelo para água líquida, o volume diminui!"
    },
    commonTraps: ["Achar que os corpos sempre diminuem de volume ao congelar", "Achar que a água a 0 °C é mais densa que a água a 4 °C"],
    tags: ["anomalia da agua", "densidade", "ecologia", "dilatacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-007",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Dilatação Térmica dos Sólidos",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em pontes rodoviárias de concreto armado e em linhas férreas de aço, os engenheiros sempre deixam vãos espaçados chamados 'juntas de dilatação'. Em ferros elétricos de passar roupa e termostatos antigos, utiliza-se uma lâmina bimetálica constituída por duas fitas metálicas de latão e ferro firmemente rebitadas lado a lado. Dados: coeficiente de dilatação linear do latão α_latão = 20 × 10⁻⁶ °C⁻¹; coeficiente do ferro α_ferro = 12 × 10⁻⁶ °C⁻¹.",
      source: "Física dos Materiais e Engenharia Civil"
    },
    prompt: "Quando essa lâmina bimetálica inicialmente reta em temperatura ambiente é aquecida durante o funcionamento do aparelho, seu comportamento geométrico consiste em:",
    options: [
      { id: "a", text: "curvar-se em direção ao lado do ferro (com o latão na face externa convexa), pois o latão dilata mais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "curvar-se em direção ao lado do latão, porque o metal de maior condutividade térmica sempre encolhe no calor.", isCorrect: false, distractorRationale: "O latão dilata mais (α maior), logo deve ficar no arco maior (convexo), curvando a lâmina para o lado do ferro." },
      { id: "c", text: "permanecer perfeitamente reta, pois os dois metais se anulam mecanicamente.", isCorrect: false, distractorRationale: "Como os coeficientes são diferentes (20 > 12), a lâmina obrigatoriamente se curva." },
      { id: "d", text: "romper-se por fusão fria da solda intermediária a 50 °C.", isCorrect: false, distractorRationale: "Lâminas bimetálicas são projetadas para flexão contínua sem quebra." },
      { id: "e", text: "encurtar longitudinalmente por contração magnética dos elétrons livres.", isCorrect: false, distractorRationale: "Sólidos aumentam de comprimento com o aquecimento: ΔL = L0 · α · ΔT." }
    ],
    detailedExplanation: {
      summary: "O latão possui maior coeficiente de dilatação que o ferro (α_latão > α_ferro). Ao aquecer, o latão estica mais que o ferro e empurra a lâmina, curvando-a para o lado do metal que menos dilatou (o ferro).",
      stepByStep: [
        "Passo 1: Fórmula da dilatação linear: ΔL = L0 · α · ΔT.",
        "Passo 2: Para o mesmo aumento de temperatura ΔT, o material com maior α sofrerá maior aumento de comprimento ΔL.",
        "Passo 3: Comparação: α_latão (20 × 10⁻⁶) > α_ferro (12 × 10⁻⁶). O latão cresce mais que o ferro.",
        "Passo 4: Como estão rebitados lado a lado, o metal mais comprido (latão) é forçado a ocupar o raio externo de curvatura (lado convexo), enquanto o ferro fica no raio interno (lado côncavo).",
        "Passo 5: Essa curvatura afasta um contato elétrico, desligando a resistência do ferro de passar quando atinge a temperatura desejada."
      ],
      coreConcept: "Lâmina Bimetálica e Dilatação Linear dos Metais (ΔL = L0 · α · ΔT)",
      trapWarning: "No aquecimento: curva para o lado de MENOR α (o que menos cresceu). No resfriamento: curva para o lado de MAIOR α (o que mais encolheu)!"
    },
    commonTraps: ["Inverter o lado da curvatura", "Achar que a lâmina quebra em vez de se encurvar"],
    tags: ["dilatacao linear", "lamina bimetalica", "termostato", "cotidiano"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-008",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Mudanças de Fase e Calor Latente",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O gráfico abaixo descreve a curva de aquecimento de 100 g de uma substância pura cristalina mantida sob pressão atmosférica constante de 1 atm, recebendo calor de uma fonte térmica com fluxo de calor constante e uniforme. Durante o intervalo de tempo entre 4 min e 10 min, observa-se que a temperatura do sistema permanece rigorosamente constante a 80 °C, mesmo com a substância continuando a receber calor ininterruptamente.",
      source: "Termodinâmica de Mudanças de Estado"
    },
    prompt: "Durante esse intervalo de temperatura constante a 80 °C (platô térmico), a energia térmica fornecida pela fonte está sendo utilizada pela substância puramente para:",
    options: [
      { id: "a", text: "romper e rearranjar as forças de atração intermoleculares da rede cristalina na mudança de fase sólida para líquida.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "aumentar a energia cinética média de agitação dos átomos sem alterar seu estado físico.", isCorrect: false, distractorRationale: "Temperatura é a medida da energia cinética média. Se a temperatura não subiu, a energia cinética média não mudou!" },
      { id: "c", text: "aniquilar a massa total dos prótons de acordo com a equivalência relativística E = mc².", isCorrect: false, distractorRationale: "Não há conversão nuclear de massa em fusão química ordinária." },
      { id: "d", text: "resfriar as paredes do recipiente por convecção térmica negativa.", isCorrect: false, distractorRationale: "A fonte está aquecendo o sistema continuamente." },
      { id: "e", text: "reduzir a entropia do sistema até o valor nulo do zero absoluto.", isCorrect: false, distractorRationale: "Na fusão, a desordem (entropia) AUMENTA (sólido → líquido)." }
    ],
    detailedExplanation: {
      summary: "Em substâncias puras, a temperatura permanece constante durante a mudança de fase (fusão ou ebulição). O calor recebido é CALOR LATENTE (Q = m·L), que atua na energia potencial intermolecular, e não na energia cinética (temperatura).",
      stepByStep: [
        "Passo 1: Compreender o significado físico da Temperatura: é a medida microscópica direta da energia cinética média de agitação das partículas.",
        "Passo 2: Se a temperatura é constante (platô em 80 °C), a energia cinética média NÃO está aumentando.",
        "Passo 3: A energia térmica fornecida chama-se Calor Latente (Q = m · L).",
        "Passo 4: Esse calor é absorvido para vencer a atração e quebrar o retículo cristalino sólido, aumentando a energia potencial intermolecular dos átomos na transição para o estado líquido."
      ],
      coreConcept: "Platô de Temperatura e Calor Latente em Substâncias Puras",
      trapWarning: "Substância pura: temperatura de fusão e ebulição CONSTANTES. Mistura comum: ambas variam. Mistura Eutética: fusão constante. Mistura Azeotrópica: ebulição constante."
    },
    commonTraps: ["Confundir energia cinética com energia potencial intermolecular", "Achar que a temperatura sempre sobe quando recebe calor"],
    tags: ["mudanca de fase", "calor latente", "plato termico", "substancia pura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-009",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "1ª e 2ª Leis da Termodinâmica: Máquinas Térmicas",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Um inventor registrou um pedido de patente para um motor térmico que, segundo ele, opera retirando 1 000 J de calor de uma caldeira a vapor em ciclo fechado e converte integralmente esses 1 000 J em trabalho mecânico útil, sem liberar nenhuma quantidade de calor residual para o meio ambiente circundante.",
      source: "Física Térmica e Leis da Termodinâmica"
    },
    prompt: "Com base nas leis consolidadas da Termodinâmica, o pedido de patente desse motor deve ser sumariamente recusado pelos peritos técnicos porque a máquina proposta viola:",
    options: [
      { id: "a", text: "a Segunda Lei da Termodinâmica (enunciado de Kelvin-Planck), segundo a qual é impossível construir uma máquina térmica cíclica cujo único efeito seja transformar calor em trabalho com rendimento de 100%.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a Primeira Lei da Termodinâmica, pois o calor e o trabalho mecânico não possuem a mesma unidade física de energia no Sistema Internacional.", isCorrect: false, distractorRationale: "Calor e trabalho têm a mesma unidade (Joule) e a máquina cumpriria a 1ª Lei (ΔU = Q - W = 0); ela viola a 2ª Lei." },
      { id: "c", text: "o Princípio de Pascal da hidrostática em tubulações circulares.", isCorrect: false, distractorRationale: "O Princípio de Pascal trata de transmissão de pressão em líquidos incompressíveis." },
      { id: "d", text: "a Lei Zero da Termodinâmica, que proíbe o contato térmico entre gases e pistões de ferro.", isCorrect: false, distractorRationale: "A Lei Zero trata do equilíbrio térmico entre corpos distintos (transitividade)." },
      { id: "e", text: "a Lei da Gravitação Universal de Newton, que exige atrito em ciclos fechados.", isCorrect: false, distractorRationale: "Não há relação com gravitação." }
    ],
    detailedExplanation: {
      summary: "A 2ª Lei da Termodinâmica (Kelvin-Planck) proíbe máquinas térmicas de operarem com 100% de rendimento. É obrigatório rejeitar calor para uma fonte fria (Q_frio > 0).",
      stepByStep: [
        "Passo 1: Primeira Lei da Termodinâmica: Conservação da energia (ΔU = Q - W). Se Q = 1000 J e W = 1000 J, a 1ª Lei seria respeitada.",
        "Passo 2: Segunda Lei da Termodinâmica (Enunciado de Kelvin-Planck): 'É impossível a qualquer máquina térmica operando em ciclos transformar integralmente o calor recebido de uma única fonte térmica em trabalho útil'.",
        "Passo 3: Toda máquina térmica necessita de duas fontes: uma quente (de onde tira calor) e uma fria (para onde descarrega calor residual não aproveitado).",
        "Passo 4: O ciclo ideal com maior rendimento teórico possível é o Ciclo de Carnot: η_Carnot = 1 - (T_fria / T_quente). Para ser 100%, T_fria precisaria ser o Zero Absoluto (0 Kelvin), o que é inatingível na prática (3ª Lei)."
      ],
      coreConcept: "Segunda Lei da Termodinâmica, Ciclo de Carnot e Impossibilidade de Rendimento de 100%",
      trapWarning: "Moto-perpétuo de 1ª espécie viola a 1ª Lei (cria energia do nada). Moto-perpétuo de 2ª espécie viola a 2ª Lei (tem 100% de rendimento térmico)."
    },
    commonTraps: ["Achar que a 1ª Lei proíbe rendimento de 100%", "Confundir enunciado de Clausius (calor flui espontaneamente do quente para o frio) com Kelvin-Planck"],
    tags: ["termodinamica", "segunda lei", "carnot", "rendimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-010",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Efeito Estufa Físico e Espectro Eletromagnético",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O efeito estufa natural é um fenômeno físico planetário fundamental que mantém a temperatura média da Terra em torno de +15 °C (sem ele, a temperatura média global seria de congelantes -18 °C). A superfície terrestre recebe radiação solar de alta energia (predominantemente luz visível e ultravioleta), aquece-se e reemite essa energia de volta ao espaço.",
      source: "Física Ambiental e Mudanças Climáticas Globais"
    },
    prompt: "A retenção de calor na baixa atmosfera pelos gases de efeito estufa (como CO2, CH4 e vapor de H2O) ocorre porque esses gases são transparentes à luz visível recebida do Sol, mas absorvem fortemente a radiação:",
    options: [
      { id: "a", text: "infravermelha de ondas longas reemitida pela superfície aquecida da Terra.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "gama de frequência extremamente alta vinda dos raios cósmicos galácticos.", isCorrect: false, distractorRationale: "Raios gama não compõem a emissão térmica da superfície terrestre." },
      { id: "c", text: "de micro-ondas gerada pelos radares náuticos dos navios de carga.", isCorrect: false, distractorRationale: "A emissão térmica da Terra na faixa de ~300 K é pico no infravermelho térmico, não micro-ondas de navios." },
      { id: "d", text: "ultravioleta de alta frequência refratada pelo espelho de gelo da Antártida.", isCorrect: false, distractorRationale: "Quem absorve UV na alta atmosfera é a camada de ozônio (O3), não os gases de efeito estufa da baixa atmosfera." },
      { id: "e", text: "de raios X gerada pela pressão magmática do núcleo terrestre.", isCorrect: false, distractorRationale: "A Terra não emite raios X térmicos." }
    ],
    detailedExplanation: {
      summary: "A Terra reemite energia no espectro INFRAVERMELHO (ondas longas). Os gases estufa (CO2, CH4, H2O) absorvem essa radiação infravermelha nas suas ligações vibracionais e a reemitem em todas as direções, aquecendo a troposfera.",
      stepByStep: [
        "Passo 1: Lei do Deslocamento de Wien: corpos muito quentes (como a superfície solar a ~5800 K) emitem ondas curtas de alta frequência (luz visível).",
        "Passo 2: A atmosfera é majoritariamente transparente à luz solar visível, que chega até a superfície da Terra e a aquece.",
        "Passo 3: A Terra, estando em temperatura muito mais baixa (~300 K), reemite essa radiação sob a forma de radiação de ondas longas: INFRAVERMELHO TÉRMICO.",
        "Passo 4: As moléculas de CO2, H2O e CH4 possuem modos vibracionais que absorvem especificamente fótons na faixa do infravermelho.",
        "Passo 5: Ao absorver, elas se agitam e reemitem calor em todas as direções (incluindo de volta para a Terra), retendo energia na troposfera."
      ],
      coreConcept: "Efeito Estufa: Balanço de Radiação (Visível entra, Infravermelho é retido)",
      trapWarning: "NÃO CONFUNDA efeito estufa com destruição da camada de ozônio! A camada de ozônio (estratosfera) absorve raios ULTRAVIOLETA (UV). O efeito estufa (troposfera) absorve radiação INFRAVERMELHA."
    },
    commonTraps: ["Confundir infravermelho (efeito estufa) com ultravioleta (camada de ozônio)", "Achar que o efeito estufa é 100% prejudicial (o natural é indispensável à vida)"],
    tags: ["efeito estufa", "radiacao termica", "infravermelho", "meio ambiente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-011",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Equilíbrio Térmico e Mudança de Fase em Calorímetro",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um laboratório hospitalar, para resfriar rapidamente uma solução biológica aquosa até 0 °C, colocam-se 200 g de água líquida inicialmente a 25 °C dentro de um calorímetro ideal de capacidade térmica desprezível. Em seguida, adicionam-se cubos de gelo fundente que estão a 0 °C. Considere o calor específico da água como 1,0 cal/(g·°C) e o calor latente de fusão do gelo como 80 cal/g. Desconsidere quaisquer perdas para o ambiente externo.",
      source: "ENEM / Calorimetria e Mudanças de Fase"
    },
    prompt: "A massa mínima de gelo a 0 °C que deve se fundir completamente para reduzir toda a massa de água líquida até a temperatura de 0 °C é de:",
    options: [
      { id: "a", text: "62,5 g", isCorrect: true, distractorRationale: null },
      { id: "b", text: "50,0 g", isCorrect: false, distractorRationale: "Dividiu o calor cedido por 100 em vez de 80 cal/g." },
      { id: "c", text: "80,0 g", isCorrect: false, distractorRationale: "Confundiu a massa necessária com o valor numérico do calor latente de fusão." },
      { id: "d", text: "125,0 g", isCorrect: false, distractorRationale: "Errou a simplificação matemática multiplicando por 2 em vez de dividir." },
      { id: "e", text: "25,0 g", isCorrect: false, distractorRationale: "Calculou a massa assumindo variação de temperatura de apenas 10 °C." }
    ],
    detailedExplanation: {
      summary: "Pelo princípio da conservação da energia térmica, a soma das trocas de calor em um sistema isolado é nula: Q_cedido + Q_absorvido = 0.",
      stepByStep: [
        "Calor cedido pela água líquida para resfriar de 25 °C a 0 °C: Q_água = m · c · Δθ = 200 g × 1,0 cal/(g·°C) × (0 - 25) °C = -5 000 cal.",
        "Calor absorvido pelo gelo para fundir a 0 °C: Q_fusão = m_gelo × L_f = m_gelo × 80 cal/g.",
        "Balanço térmico: |Q_água| = Q_fusão  =>  5 000 = m_gelo × 80.",
        "Isolando a massa de gelo: m_gelo = 5 000 / 80 = 62,5 g de gelo fundido."
      ],
      coreConcept: "Equilíbrio Térmico e Calor Latente de Mudança de Fase (Q = m·L)",
      trapWarning: "Como o gelo já está a 0 °C e a temperatura final é 0 °C, o gelo sofre apenas calor latente de fusão, sem aquecimento sensível posterior!"
    },
    commonTraps: ["somar calor sensivel ao gelo que ja esta a zero grau", "esquecer de igualar o calor cedido ao absorvido"],
    tags: ["calorimetria", "mudanca de fase", "calor latente", "equilibrio termico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-012",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Primeira Lei da Termodinâmica e Expansão Isobárica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema pneumático de gases medicinais de uma unidade cirúrgica, um cilindro dotado de êmbolo móvel sem atrito contém uma massa de gás ideal que recebe 1 500 J de energia na forma de calor de um aquecedor elétrico. Sob pressão manométrica constante de 2,0 × 10⁵ N/m², o gás expande-se isobaricamente, aumentando seu volume de 0,003 m³ para 0,007 m³.",
      source: "ENEM / Termodinâmica Clássica e Conservação de Energia"
    },
    prompt: "Com base na Primeira Lei da Termodinâmica, a variação da energia interna (ΔU) experimentada por esse gás ideal durante o processo é igual a:",
    options: [
      { id: "a", text: "700 J", isCorrect: true, distractorRationale: null },
      { id: "b", text: "2 300 J", isCorrect: false, distractorRationale: "Somou o calor ao trabalho (Q + W) violando a equação ΔU = Q - W." },
      { id: "c", text: "800 J", isCorrect: false, distractorRationale: "Calculou apenas o trabalho mecânico realizado na expansão e o confundiu com a energia interna." },
      { id: "d", text: "1 500 J", isCorrect: false, distractorRationale: "Desconsiderou o trabalho realizado pelo gás, assumindo erroneamente transformação isocórica." },
      { id: "e", text: "-700 J", isCorrect: false, distractorRationale: "Inverteu a convenção de sinais do trabalho na expansão térmica." }
    ],
    detailedExplanation: {
      summary: "A Primeira Lei da Termodinâmica estabelece que a variação de energia interna é o calor líquido absorvido menos o trabalho realizado pelo sistema: ΔU = Q - W.",
      stepByStep: [
        "Variação de volume: ΔV = V_final - V_inicial = 0,007 m³ - 0,003 m³ = 0,004 m³.",
        "Trabalho realizado pelo gás sob pressão constante (isobárica): W = P · ΔV = (2,0 × 10⁵ N/m²) × 0,004 m³ = 800 J.",
        "Como é uma expansão, o gás realiza trabalho sobre o meio (W = +800 J).",
        "Calor fornecido ao gás: Q = +1 500 J.",
        "Primeira Lei da Termodinâmica: ΔU = Q - W = 1 500 J - 800 J = +700 J."
      ],
      coreConcept: "Primeira Lei da Termodinâmica (ΔU = Q - W) e Trabalho Isobárico",
      trapWarning: "Atenção aos sinais: na expansão, W > 0 (gás realiza trabalho). Se fosse compressão, W < 0."
    },
    commonTraps: ["somar calor com trabalho ao invés de subtrair", "confundir variacao de volume com volume final"],
    tags: ["primeira lei", "termodinamica", "trabalho isobarico", "energia interna"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-013",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Segunda Lei da Termodinâmica e Ciclo de Carnot",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para suprir energia em situações emergenciais, uma usina termoelétrica auxiliar hospitalar foi modelada como operando sob o ciclo teórico ideal de Carnot. O vapor opera retirando calor de uma caldeira a 227 °C (fonte quente) e rejeitando o excesso térmico para um condensador resfriado por água a 27 °C (fonte fria). A cada ciclo motor completo, a máquina absorve 60 000 J de calor da fonte quente.",
      source: "ENEM / Máquinas Térmicas e Ciclo de Carnot"
    },
    prompt: "O rendimento térmico máximo teórico dessa máquina de Carnot e o trabalho mecânico útil produzido por ciclo são, respectivamente:",
    options: [
      { id: "a", text: "40% e 24 000 J", isCorrect: true, distractorRationale: null },
      { id: "b", text: "88% e 52 800 J", isCorrect: false, distractorRationale: "Calculou o rendimento utilizando temperaturas em graus Celsius em vez da escala absoluta Kelvin (1 - 27/227 ≈ 0,88)." },
      { id: "c", text: "60% e 36 000 J", isCorrect: false, distractorRationale: "Confundiu o calor rejeitado para a fonte fria (36 000 J) com o trabalho útil do ciclo." },
      { id: "d", text: "50% e 30 000 J", isCorrect: false, distractorRationale: "Estimou uma média grosseira sem converter rigorosamente as temperaturas." },
      { id: "e", text: "20% e 12 000 J", isCorrect: false, distractorRationale: "Errou a razão das temperaturas absolutas calculando 1 - 400/500." }
    ],
    detailedExplanation: {
      summary: "O rendimento de Carnot representa o limite termodinâmico máximo de conversão de calor em trabalho: η = 1 - (T_fria / T_quente), obrigatoriamente com T em Kelvin.",
      stepByStep: [
        "Conversão das temperaturas para a escala Kelvin: T_quente = 227 + 273 = 500 K; T_fria = 27 + 273 = 300 K.",
        "Cálculo do rendimento de Carnot: η = 1 - (300 / 500) = 1 - 0,60 = 0,40 (ou 40%).",
        "Trabalho útil realizado por ciclo: W = η · Q_quente = 0,40 × 60 000 J = 24 000 J.",
        "Calor residual rejeitado para a fonte fria: Q_frio = Q_quente - W = 36 000 J."
      ],
      coreConcept: "Ciclo de Carnot e Rendimento Termodinâmico Máximo Teórico",
      trapWarning: "ERRO GRAVE: Nunca aplique a fórmula de Carnot com temperaturas em Celsius! A conversão para Kelvin (+273) é compulsória."
    },
    commonTraps: ["usar temperatura em Celsius na formula de Carnot", "confundir calor rejeitado com trabalho util"],
    tags: ["ciclo de carnot", "segunda lei", "maquinas termicas", "rendimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-014",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Dilatação Térmica Linear de Sólidos",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na estrutura de tubulação de vapor de esterilização de uma lavanderia central, uma tubulação metálica de aço carbono com 15,0 m de comprimento é montada em repouso térmico a 10 °C. Durante o funcionamento contínuo com vapor superaquecido, a tubulação atinge a temperatura estável de 60 °C. O coeficiente de dilatação linear do aço carbono utilizado é α = 1,2 × 10⁻⁵ °C⁻¹.",
      source: "ENEM / Dilatação Térmica dos Sólidos"
    },
    prompt: "Para evitar deformações plásticas e ruptura das conexões, o espaçamento mínimo das juntas de dilatação deve absorver uma variação de comprimento linear (ΔL) de:",
    options: [
      { id: "a", text: "9,0 mm", isCorrect: true, distractorRationale: null },
      { id: "b", text: "10,8 mm", isCorrect: false, distractorRationale: "Utilizou a temperatura final de 60 °C em vez da variação de temperatura (Δθ = 50 °C)." },
      { id: "c", text: "0,9 mm", isCorrect: false, distractorRationale: "Errou a conversão de metros para milímetros por uma ordem de grandeza." },
      { id: "d", text: "15,0 mm", isCorrect: false, distractorRationale: "Confundiu o comprimento inicial da barra (15 m) com a variação em milímetros." },
      { id: "e", text: "4,5 mm", isCorrect: false, distractorRationale: "Dividiu a variação pela metade supondo dilatação apenas em uma das extremidades." }
    ],
    detailedExplanation: {
      summary: "A dilatação térmica linear é calculada pela relação ΔL = L₀ · α · Δθ.",
      stepByStep: [
        "Comprimento inicial: L₀ = 15,0 m = 15 000 mm.",
        "Variação térmica: Δθ = θ_final - θ_inicial = 60 °C - 10 °C = 50 °C.",
        "Aplicação da fórmula: ΔL = 15 000 mm × (1,2 × 10⁻⁵ °C⁻¹) × 50 °C.",
        "Multiplicação: 15 000 × 50 = 750 000.",
        "Cálculo final: 750 000 × 1,2 × 10⁻⁵ = 9,0 mm."
      ],
      coreConcept: "Dilatação Linear de Sólidos e Juntas de Dilatação Estruturais",
      trapWarning: "Cuidado ao converter metros para milímetros (1 m = 1 000 mm) e certifique-se de usar Δθ e não θ final!"
    },
    commonTraps: ["usar temperatura final no lugar do delta T", "erro de conversao de metros para milimetros"],
    tags: ["dilatacao linear", "coeficiente de dilatacao", "fisica termica", "materiais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-015",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Comportamento Térmico Anômalo da Água",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em lagos e rios de zonas temperadas sujeitos a invernos rigorosos, a água superficial congela, formando uma camada espessa de gelo na superfície que permite a patinação humana. No entanto, no leito profundo desses mesmos lagos, a água permanece líquida a aproximadamente 4 °C, garantindo a sobrevivência ininterrupta da flora e fauna aquática durante toda a estação fria.",
      source: "ENEM / Propriedades Anômalas da Água e Ecologia"
    },
    prompt: "A manutenção da água líquida no fundo dos lagos e o congelamento restrito à superfície decorrem da dilatação anômala da água, que é caracterizada por:",
    options: [
      { id: "a", text: "apresentar densidade máxima no estado líquido exatamente a 4 °C, fazendo com que a água a essa temperatura desça para o fundo e o gelo menos denso flutue como isolante térmico.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "possuir calor de condensação negativo, o que impede a transmissão de energia mecânica por ondas submarinas.", isCorrect: false, distractorRationale: "Calor de condensação não tem relação com a estratificação térmica do lago no inverno." },
      { id: "c", text: "ter condutividade térmica superior à dos metais, transferindo calor geotérmico imediato para a atmosfera.", isCorrect: false, distractorRationale: "A água e o gelo são maus condutores térmicos (bons isolantes térmicos)." },
      { id: "d", text: "expandir-se continuamente ao ser aquecida desde -10 °C até 100 °C sem qualquer anomalia volumétrica.", isCorrect: false, distractorRationale: "A água contrai-se entre 0 °C e 4 °C; essa contração é a própria anomalia." },
      { id: "e", text: "impedir a oxigenação biológica de profundidade abaixo de 10 °C.", isCorrect: false, distractorRationale: "A água fria dissolve mais oxigênio molecular do que a água quente." }
    ],
    detailedExplanation: {
      summary: "A água atinge seu volume mínimo e sua densidade máxima a 4 °C devido ao arranjo espacial das pontes de hidrogênio.",
      stepByStep: [
        "A maioria das substâncias contrai de volume e fica mais densa à medida que esfria até a solidificação.",
        "A água comporta-se de forma anômala entre 0 °C e 4 °C: ao ser resfriada de 4 °C a 0 °C, ela se EXPENDE e sua densidade DIMINUI.",
        "Por isso, a água mais densa (a 4 °C) afunda e permanece no fundo do lago.",
        "A água a 0 °C e o gelo (densidade ~0,92 g/cm³) flutuam na superfície, formando uma barreira isolante que protege as camadas inferiores do congelamento."
      ],
      coreConcept: "Dilatação Anômala da Água e Densidade Máxima a 4 °C",
      trapWarning: "Lembre-se: o gelo flutua porque é MENOS DENSO que a água líquida devido à estrutura hexagonal aberta das pontes de hidrogênio."
    },
    commonTraps: ["achar que a agua no fundo esta a zero grau", "confundir anomalia da agua com mudanca quimica de composicao"],
    tags: ["dilatacao anomala", "densidade da agua", "pontes de hidrogenio", "ecologia aquatica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-016",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Potência Térmica e Aquecimento Específico",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma autoclave de bancada utilizada na central de esterilização de materiais médicos possui uma resistência elétrica com potência térmica útil constante de 2 000 W. O operador abastece a câmara interna com 1 500 g de água destilada a 20 °C para ser levada até o início da fervura a 100 °C. Considere o calor específico da água como 1,0 cal/(g·°C) e a equivalência termodinâmica de 1,0 cal = 4,2 J. Desconsidere perdas térmicas para o invólucro.",
      source: "ENEM / Potência Térmica e Calorimetria"
    },
    prompt: "O intervalo de tempo mínimo necessário para que a água atinja os 100 °C e inicie a fervura é de:",
    options: [
      { id: "a", text: "4 minutos e 12 segundos (252 s)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1 minuto (60 s)", isCorrect: false, distractorRationale: "Esqueceu a conversão de calorias para joules (dividiu 120 000 cal diretamente por 2 000 W)." },
      { id: "c", text: "5 minutos (300 s)", isCorrect: false, distractorRationale: "Arredondou o cálculo grosseiramente ou errou a variação de temperatura." },
      { id: "d", text: "3 minutos e 30 segundos (210 s)", isCorrect: false, distractorRationale: "Utilizou 1 cal = 3,5 J em vez de 4,2 J." },
      { id: "e", text: "2 minutos e 6 segundos (126 s)", isCorrect: false, distractorRationale: "Dividiu o tempo correto pela metade." }
    ],
    detailedExplanation: {
      summary: "A potência é a taxa de energia fornecida por unidade de tempo (P = E / Δt), com energia convertida em Joules.",
      stepByStep: [
        "Calor necessário em calorias: Q = m · c · Δθ = 1 500 g × 1,0 cal/(g·°C) × (100 - 20) °C = 1 500 × 80 = 120 000 cal.",
        "Conversão para Joules (1 cal = 4,2 J): E = 120 000 cal × 4,2 J/cal = 504 000 J.",
        "Potência da resistência: P = 2 000 W = 2 000 J/s.",
        "Tempo em segundos: Δt = E / P = 504 000 J / 2 000 J/s = 252 segundos.",
        "Conversão para minutos: 252 s = (4 × 60) + 12 s = 4 minutos e 12 segundos."
      ],
      coreConcept: "Relação entre Potência (W = J/s), Calorimetria (Q = mcΔθ) e Equivalente Mecânico do Calor",
      trapWarning: "Sempre converta calorias em joules ao trabalhar com potência em Watts (W = J/s)!"
    },
    commonTraps: ["esquecer de converter caloria para Joule", "confundir variacao de temperatura com temperatura final"],
    tags: ["potencia termica", "calorimetria", "equivalente mecanico", "joule e caloria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-017",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Transformações Gasosas: Lei de Charles (Isovolumétrica)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um cilindro metálico selado indeformável contendo oxigênio gasoso hospitalar tem capacidade interna de 50 L e suporta pressões elevadas. Em uma sala climatizada a 27 °C, o manômetro acusa uma pressão interna de 150 atm. Em virtude de uma avaria no ar-condicionado e exposição ao calor ambiente, a temperatura do cilindro eleva-se até 87 °C, mantendo-se o volume rigorosamente inalterado.",
      source: "ENEM / Gases Ideais e Transformação Isovolumétrica"
    },
    prompt: "Tratando o oxigênio como um gás ideal em regime isocórico (volume constante), a nova pressão interna indicada pelo manômetro será de:",
    options: [
      { id: "a", text: "180 atm", isCorrect: true, distractorRationale: null },
      { id: "b", text: "483 atm", isCorrect: false, distractorRationale: "Calculou a proporção usando temperaturas em graus Celsius (150 × 87 / 27 ≈ 483 atm)." },
      { id: "c", text: "165 atm", isCorrect: false, distractorRationale: "Somou 15 atm por estimativa linear incorreta." },
      { id: "d", text: "200 atm", isCorrect: false, distractorRationale: "Superestimou a pressão aplicando a razão das temperaturas em Celsius somada a 50." },
      { id: "e", text: "125 atm", isCorrect: false, distractorRationale: "Inverteu a razão calculando que a pressão diminuiria com o aquecimento." }
    ],
    detailedExplanation: {
      summary: "Na transformação isovolumétrica (isocórica), a pressão de uma massa fixa de gás ideal é diretamente proporcional à sua temperatura absoluta: P₁ / T₁ = P₂ / T₂.",
      stepByStep: [
        "Temperaturas absolutas em Kelvin: T₁ = 27 + 273 = 300 K; T₂ = 87 + 273 = 360 K.",
        "Equação da transformação isocórica: P₁ / T₁ = P₂ / T₂.",
        "Substituição dos dados: 150 atm / 300 K = P₂ / 360 K.",
        "Simplificação: 150 / 300 = 0,5 atm/K.",
        "Cálculo de P₂: P₂ = 0,5 × 360 = 180 atm."
      ],
      coreConcept: "Transformação Isovolumétrica (Lei de Charles e Gay-Lussac) e Temperatura Absoluta",
      trapWarning: "A Lei Geral dos Gases exige SEMPRE a temperatura na escala absoluta Kelvin (K = °C + 273)."
    },
    commonTraps: ["usar temperatura em Celsius na equacao dos gases", "achar que o volume varia em cilindro rigido selado"],
    tags: ["gases ideais", "transformacao isovolumetrica", "lei de charles", "pressao e temperatura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-018",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Condução Térmica e Lei de Fourier",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para estocagem de vacinas termossensíveis em uma central de imunização, projetou-se uma câmara fria estática. Uma das paredes de isolamento possui área superficial de 20 m² e espessura de 5,0 cm (0,05 m), sendo constituída de poliuretano expandido com coeficiente de condutividade térmica k = 0,025 W/(m·K). A face externa da parede encontra-se exposta ao ambiente a 24 °C e a face interna é mantida a 4 °C.",
      source: "ENEM / Propagação de Calor e Lei de Fourier"
    },
    prompt: "Pela Lei de Fourier da condução térmica [Φ = k · A · (ΔT / e)], a taxa de transferência de calor (fluxo térmico Φ) que atravessa essa parede para o interior da câmara fria é de:",
    options: [
      { id: "a", text: "200 W", isCorrect: true, distractorRationale: null },
      { id: "b", text: "100 W", isCorrect: false, distractorRationale: "Utilizou espessura de 0,10 m em vez de 0,05 m." },
      { id: "c", text: "400 W", isCorrect: false, distractorRationale: "Duplicou a área ou esqueceu de dividir pela espessura correta." },
      { id: "d", text: "20 W", isCorrect: false, distractorRationale: "Errou a conversão da espessura usando 5 m no denominador." },
      { id: "e", text: "500 W", isCorrect: false, distractorRationale: "Calculou a condução assumindo condutividade térmica de concreto." }
    ],
    detailedExplanation: {
      summary: "A Lei de Fourier calcula o fluxo de calor conduzido através de uma parede plana: Φ = k · A · ΔT / e.",
      stepByStep: [
        "Diferença de temperatura entre as faces: ΔT = 24 °C - 4 °C = 20 K (a variação em Kelvin é idêntica à em Celsius).",
        "Área da parede: A = 20 m².",
        "Espessura convertida para metros: e = 5,0 cm = 0,05 m.",
        "Condutividade térmica: k = 0,025 W/(m·K).",
        "Aplicação da fórmula: Φ = [0,025 W/(m·K) × 20 m² × 20 K] / 0,05 m.",
        "Numerador: 0,025 × 400 = 10.",
        "Resultado: Φ = 10 / 0,05 = 200 W (Joules por segundo)."
      ],
      coreConcept: "Condução Térmica Estacionária e Lei de Fourier",
      trapWarning: "A espessura da parede DEVE estar em metros para compatibilidade com as unidades de k (W/m·K)!"
    },
    commonTraps: ["usar espessura em centimetros no lugar de metros", "confundir variacao de temperatura com temperatura absoluta"],
    tags: ["conducao termica", "lei de fourier", "isolamento termico", "fluxo de calor"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-019",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Sensação Térmica e Termorregulação por Sudorese",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em dias de temperatura elevada (em torno de 35 °C), o organismo humano depende crucialmente da secreção de suor pelas glândulas sudoríparas para manter a temperatura interna estável a cerca de 36,5 °C. No entanto, quando a umidade relativa do ar atinge valores próximos a 90%, os indivíduos experimentam uma intensa sensação de sufocamento e calor extremo, muito superior à sentida sob a mesma temperatura em um ambiente com ar seco.",
      source: "ENEM / Termofisiologia Humana e Calor Latente"
    },
    prompt: "O agravamento do desconforto térmico provocado pela alta umidade do ar decorre do fato de que:",
    options: [
      { id: "a", text: "a alta saturação de vapor d'água na atmosfera reduz o gradiente de pressão de vapor, dificultando a evaporação do suor e a retirada do calor latente da pele.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o vapor d'água ambiente bloqueia o fluxo de sangue nas artérias coronárias do indivíduo.", isCorrect: false, distractorRationale: "A umidade afeta a taxa de evaporação cutânea superficial, não o calibre vascular coronário primário." },
      { id: "c", text: "a água atmosférica acelera desordenadamente a taxa de evaporação do suor, provocando hipotermia rápida.", isCorrect: false, distractorRationale: "O ar úmido DIMINUI a taxa de evaporação, impedindo o resfriamento natural." },
      { id: "d", text: "a radiação infravermelha do corpo é refletida pelas moléculas de nitrogênio do ar de volta aos pulmões.", isCorrect: false, distractorRationale: "O nitrogênio não atua como refletor seletivo de calor corporal interno." },
      { id: "e", text: "o suor acumula calor sensível e entra em combustão espontânea em contato com o ar saturado.", isCorrect: false, distractorRationale: "O suor é composto predominantemente por água e cloreto de sódio, sendo incombustível." }
    ],
    detailedExplanation: {
      summary: "A evaporação do suor resfria o corpo porque a água retira calor latente de vaporização da pele ao passar para o estado gasoso (~540 cal/g).",
      stepByStep: [
        "O suor sozinho não resfria o corpo: é o ato da água EVAPORAR que retira calor da derme (calor latente de vaporização).",
        "Em ambiente de ar seco, o gradiente de concentração de vapor entre a pele e o ar é grande, propiciando evaporação rápida e resfriamento eficaz.",
        "Em ar saturado (alta umidade relativa), a capacidade do ar de receber novas moléculas de vapor é mínima; o suor apenas escorre sem evaporar, e o calor corporal fica retido.",
        "Isso causa elevação drástica da temperatura corporal e da sensação de calor sufocante."
      ],
      coreConcept: "Mecanismo de Termorregulação por Evaporação e Efeito da Umidade Relativa",
      trapWarning: "Lembre-se: suar em si não resfria; é a EVAPORAÇÃO do suor que extrai calor do corpo!"
    },
    commonTraps: ["achar que suar em excesso resfria mesmo sem evaporar", "confundir sensacao termica com radiacao ultravioleta"],
    tags: ["sudorese", "calor latente de vaporizacao", "umidade relativa", "termoregulacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-TERM-020",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Termologia",
    subtopic: "Segunda Lei da Termodinâmica e Entropia",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Primeira Lei da Termodinâmica assegura a conservação quantitativa da energia em qualquer transformação. Entretanto, se ela fosse a única lei regente, uma xícara de café quente poderia absorver calor espontaneamente do ar ao seu redor e ferver ainda mais, desde que a energia total fosse conservada. A constatação empírica de que processos naturais possuem um sentido temporal único e espontâneo levou à formulação da Segunda Lei da Termodinâmica.",
      source: "ENEM / Entropia e a Flecha do Tempo Termodinâmica"
    },
    prompt: "A Segunda Lei da Termodinâmica e o conceito de entropia estabelecem que em qualquer sistema isolado:",
    options: [
      { id: "a", text: "os processos espontâneos ocorrem sempre no sentido de aumentar a entropia total do universo, degradando a disponibilidade de energia para realizar trabalho útil.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o calor pode fluir de forma espontânea e contínua de um corpo frio para um corpo quente sem fornecimento externo de trabalho.", isCorrect: false, distractorRationale: "O enunciado de Clausius da Segunda Lei afirma exatamente o oposto: calor jamais flui espontaneamente do frio para o quente." },
      { id: "c", text: "é fisicamente viável construir uma máquina térmica que converta 100% do calor retirado de uma única fonte em trabalho útil sem perdas.", isCorrect: false, distractorRationale: "O enunciado de Kelvin-Planck proíbe qualquer máquina térmica com rendimento de 100%." },
      { id: "d", text: "a quantidade total de massa do universo é convertida integralmente em calor a cada ciclo motor.", isCorrect: false, distractorRationale: "A conservação de massa-energia não prevê aniquilação espontânea da massa em ciclos térmicos comuns." },
      { id: "e", text: "a entropia de um sistema aberto diminui necessariamente até atingir o zero absoluto em regime contínuo.", isCorrect: false, distractorRationale: "O zero absoluto é inatingível por processos finitos e a entropia do universo tende a crescer, não diminuir a zero." }
    ],
    detailedExplanation: {
      summary: "A Segunda Lei da Termodinâmica impõe restrições qualitativas: o calor flui espontaneamente do corpo mais quente para o mais frio e a entropia total do universo sempre aumenta (ΔS ≥ 0).",
      stepByStep: [
        "Enunciado de Clausius: É impossível transferir calor de um corpo mais frio para um mais quente sem a realização de trabalho externo (como faz uma geladeira).",
        "Enunciado de Kelvin-Planck: Nenhuma máquina térmica operando em ciclos pode ter 100% de rendimento (sempre há rejeição de calor para a fonte fria).",
        "Visão estatística da entropia (Boltzmann): A entropia mede a probabilidade de distribuição dos microestados; estados mais desordenados e distribuídos são estatisticamente muito mais prováveis.",
        "Por isso, a energia útil vai se dispersando e a entropia do universo cresce continuamente (a flecha do tempo)."
      ],
      coreConcept: "Segunda Lei da Termodinâmica, Irreversibilidade e Aumento da Entropia",
      trapWarning: "Energia se conserva (1ª Lei), mas sua QUALIDADE para produzir trabalho se degrada irreversivelmente (2ª Lei)!"
    },
    commonTraps: ["confundir Primeira Lei (conservacao) com Segunda Lei (sentido dos processos)", "achar que rendimento de 100% e possivel se nao houver atrito"],
    tags: ["segunda lei", "entropia", "irreversibilidade", "flecha do tempo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

