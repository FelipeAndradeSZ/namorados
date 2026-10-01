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
  }
];
