export const QUESTIONS_RAZAO_PROPORCAO = [
  {
    id: "MAT-RAZ-001",
    area: "matematica",
    competence: 3,
    skill: 11,
    topic: "Razão e Proporção",
    subtopic: "Escala",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um arquiteto projetou uma casa. Na planta, um corredor de 5 metros de comprimento foi desenhado com 10 centímetros.",
      source: "Original"
    },
    prompt: "A escala utilizada na planta foi de:",
    options: [
      { id: "a", text: "1:50", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1:5", isCorrect: false, distractorRationale: "Dividiu 10 por 5 sem converter as unidades." },
      { id: "c", text: "1:500", isCorrect: false, distractorRationale: "Converteu 5 metros para 5000 centímetros, e errou a simplificação (10:5000 = 1:500)." },
      { id: "d", text: "1:2", isCorrect: false, distractorRationale: "Dividiu 10 cm por 5 m e inverteu a lógica." },
      { id: "e", text: "1:100", isCorrect: false, distractorRationale: "Escala padrão de arquitetura, escolhida por intuição." }
    ],
    detailedExplanation: {
      summary: "A escala é a razão entre a medida no desenho e a medida real, nas mesmas unidades.",
      stepByStep: [
        "Tamanho real: 5 m = 500 cm.",
        "Tamanho no desenho: 10 cm.",
        "Escala = Desenho / Real = 10 / 500.",
        "Simplificando por 10, obtemos 1/50, que se escreve 1:50."
      ],
      coreConcept: "Escala Cartográfica e Arquitetônica",
      trapWarning: "Sempre verifique as unidades de medida! Metros devem virar centímetros antes de montar a razão."
    },
    commonTraps: ["ignorar conversao de unidades"],
    tags: ["escala", "conversao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-002",
    area: "matematica",
    competence: 3,
    skill: 12,
    topic: "Razão e Proporção",
    subtopic: "Grandezas Inversamente Proporcionais",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para esvaziar um tanque de água, 4 bombas de mesma capacidade trabalhando juntas levam 6 horas.",
      source: "Original"
    },
    prompt: "Se quisermos esvaziar o tanque em apenas 2 horas, quantas bombas iguais a essas precisaríamos ao todo?",
    options: [
      { id: "a", text: "12", isCorrect: true, distractorRationale: null },
      { id: "b", text: "3", isCorrect: false, distractorRationale: "Fez regra de três direta." },
      { id: "c", text: "8", isCorrect: false, distractorRationale: "Somou as proporções (4*2)." },
      { id: "d", text: "16", isCorrect: false, distractorRationale: "Errou a proporção inversa." },
      { id: "e", text: "24", isCorrect: false, distractorRationale: "Multiplicou tudo que via pela frente." }
    ],
    detailedExplanation: {
      summary: "Quando o tempo diminui, o número de bombas precisa aumentar: proporção inversa.",
      stepByStep: [
        "Bombas (B) e Horas (H) são inversamente proporcionais.",
        "Logo, B * H = constante.",
        "4 bombas * 6 horas = 24 bombas-hora.",
        "X bombas * 2 horas = 24.",
        "X = 24 / 2 = 12 bombas."
      ],
      coreConcept: "Regra de Três Simples Inversa",
      trapWarning: "Verifique sempre se a grandeza é diretamente ou inversamente proporcional."
    },
    commonTraps: ["usar regra de tres direta"],
    tags: ["regra de tres", "inversamente proporcionais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-003",
    area: "matematica",
    competence: 3,
    skill: 14,
    topic: "Razão e Proporção",
    subtopic: "Regra de Três Composta",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma empreiteira precisa pavimentar 10 km de estrada. Eles têm 20 operários que, trabalhando 8 horas por dia, levam 15 dias para fazer o serviço. Para um novo projeto, eles precisarão pavimentar 15 km de estrada em 20 dias, mas os operários só poderão trabalhar 6 horas por dia.",
      source: "Original"
    },
    prompt: "Quantos operários serão necessários para este novo projeto?",
    options: [
      { id: "a", text: "30", isCorrect: true, distractorRationale: null },
      { id: "b", text: "20", isCorrect: false, distractorRationale: "Manteve o número original por erros nos cancelamentos das frações." },
      { id: "c", text: "15", isCorrect: false, distractorRationale: "Inverteu a lógica de km/operário." },
      { id: "d", text: "25", isCorrect: false, distractorRationale: "Errou as simplificações na equação final." },
      { id: "e", text: "40", isCorrect: false, distractorRationale: "Colocou a quantidade de dias como diretamente proporcional." }
    ],
    detailedExplanation: {
      summary: "Devemos analisar a relação de cada grandeza com a incógnita (operários).",
      stepByStep: [
        "Incógnita: Operários. Grandezas: Km (diretamente), Dias (inversamente), Horas/dia (inversamente).",
        "Regra: (20 / x) = (10 / 15) * (20 / 15) * (6 / 8).",
        "(20 / x) = (2/3) * (4/3) * (3/4).",
        "(20 / x) = 24 / 36 = 2/3.",
        "2x = 60 => x = 30 operários."
      ],
      coreConcept: "Regra de Três Composta",
      trapWarning: "Avalie cada coluna individualmente comparando APENAS com a coluna da incógnita."
    },
    commonTraps: ["errar setas de proporcao"],
    tags: ["regra de tres composta", "trabalho"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-004",
    area: "matematica",
    competence: 3,
    skill: 13,
    topic: "Razão e Proporção",
    subtopic: "Divisão Proporcional",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Três sócios, Ana, Bruno e Carlos, abriram um negócio com capitais iniciais de R$ 30.000, R$ 50.000 e R$ 20.000, respectivamente. Após um ano, a empresa teve um lucro de R$ 150.000, que será dividido de forma proporcional ao investimento de cada um.",
      source: "Original"
    },
    prompt: "Qual o valor do lucro que Bruno deve receber?",
    options: [
      { id: "a", text: "R$ 75.000", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 50.000", isCorrect: false, distractorRationale: "Dividiu o lucro igualmente por 3." },
      { id: "c", text: "R$ 30.000", isCorrect: false, distractorRationale: "Confundiu a cota de Bruno com a de Ana." },
      { id: "d", text: "R$ 100.000", isCorrect: false, distractorRationale: "Usou a proporção do lucro total em relação a Carlos." },
      { id: "e", text: "R$ 60.000", isCorrect: false, distractorRationale: "Errou a proporção de investimento (50/150)." }
    ],
    detailedExplanation: {
      summary: "A parte do lucro que cada um recebe é proporcional à fração do capital total investido.",
      stepByStep: [
        "Capital Total = 30k + 50k + 20k = 100k.",
        "Fração de Bruno = 50.000 / 100.000 = 50% = 1/2.",
        "Lucro de Bruno = 50% de 150.000.",
        "0,5 * 150.000 = 75.000."
      ],
      coreConcept: "Divisão Diretamente Proporcional",
      trapWarning: "Verifique o capital total somando todos antes de calcular a fração de cada um."
    },
    commonTraps: ["dividir lucro igualmente"],
    tags: ["divisao proporcional", "sociedade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-005",
    area: "matematica",
    competence: 3,
    skill: 11,
    topic: "Razão e Proporção",
    subtopic: "Velocidade Média e Proporção",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma corrida, dois carros mantêm velocidades constantes. O carro A percorre 120 km em 1h30min, enquanto o carro B percorre 150 km em 2 horas.",
      source: "Original"
    },
    prompt: "Qual a razão entre a velocidade do carro A e a do carro B?",
    options: [
      { id: "a", text: "16/15", isCorrect: true, distractorRationale: null },
      { id: "b", text: "4/5", isCorrect: false, distractorRationale: "Fez a razão apenas das distâncias (120/150)." },
      { id: "c", text: "3/4", isCorrect: false, distractorRationale: "Fez a razão apenas dos tempos (1,5/2)." },
      { id: "d", text: "15/16", isCorrect: false, distractorRationale: "Inverteu e fez a razão Carro B / Carro A." },
      { id: "e", text: "1/1", isCorrect: false, distractorRationale: "Assumiu que as velocidades eram iguais devido aos tempos e distâncias maiores de B." }
    ],
    detailedExplanation: {
      summary: "Velocidade é a razão entre distância e tempo. Para achar a razão das velocidades, divide-se vA por vB.",
      stepByStep: [
        "Velocidade de A: vA = 120 km / 1,5 h = 80 km/h.",
        "Velocidade de B: vB = 150 km / 2 h = 75 km/h.",
        "Razão vA/vB = 80 / 75.",
        "Simplificando por 5: 16/15."
      ],
      coreConcept: "Razões Especiais e Velocidade",
      trapWarning: "Cuidado com o tempo expresso em horas e minutos; 1h30min = 1,5h e não 1,3h."
    },
    commonTraps: ["tempo decimal errado"],
    tags: ["razao", "velocidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-006",
    area: "matematica",
    competence: 3,
    skill: 11,
    topic: "Razão e Proporção",
    subtopic: "Escala Volumétrica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um engenheiro hospitalar constrói uma maquete na escala linear 1:50 para representar o novo setor de hemodiálise. Na maquete, o reservatório cúbico de água purificada possui volume de 80 cm³.",
      source: "ENEM / Engenharia Biomédica"
    },
    prompt: "Qual é a capacidade volumétrica real desse reservatório de água purificada, expressa em litros?",
    options: [
      { id: "a", text: "10.000 L", isCorrect: true, distractorRationale: null },
      { id: "b", text: "4.000 L", isCorrect: false, distractorRationale: "Multiplicou o volume linearmente pela escala (80 * 50 = 4.000)." },
      { id: "c", text: "200.000 L", isCorrect: false, distractorRationale: "Multiplicou pelo quadrado da escala (80 * 50²)." },
      { id: "d", text: "1.000 L", isCorrect: false, distractorRationale: "Errou a conversão de decímetros cúbicos para litros." },
      { id: "e", text: "50.000 L", isCorrect: false, distractorRationale: "Estimou a capacidade com base na razão da escala sem elevar ao cubo." }
    ],
    detailedExplanation: {
      summary: "A escala de volumes varia com o cubo da escala linear: V_real = V_modelo * (escala)^3.",
      stepByStep: [
        "A escala linear é 1:50, portanto a escala volumétrica é (50)^3 = 125.000.",
        "Calcule o volume real em cm³: V_real = 80 cm³ * 125.000 = 10.000.000 cm³.",
        "Converta cm³ para decímetros cúbicos (litros), sabendo que 1 litro = 1 dm³ = 1.000 cm³.",
        "V_real em litros = 10.000.000 / 1.000 = 10.000 litros."
      ],
      coreConcept: "Escala Volumétrica Tridimensional",
      trapWarning: "Volumes variam com o cubo da escala de comprimento. Nunca multiplique volumes pela escala linear."
    },
    commonTraps: ["usar escala linear para volume", "esquecer elevar ao cubo"],
    tags: ["escala", "volume", "conversoes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-007",
    area: "matematica",
    competence: 3,
    skill: 11,
    topic: "Razão e Proporção",
    subtopic: "Escala Superficial e Cartografia",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma carta topográfica de planejamento territorial confeccionada na escala 1:25.000, uma reserva ecológica florestal é demarcada por uma área poligonal de 16 cm².",
      source: "Original / Gestão Ambiental"
    },
    prompt: "Qual é a área territorial real dessa reserva ecológica florestal, expressa em quilômetros quadrados (km²)?",
    options: [
      { id: "a", text: "1,0 km²", isCorrect: true, distractorRationale: null },
      { id: "b", text: "4,0 km²", isCorrect: false, distractorRationale: "Multiplicou a área linearmente sem elevar a escala ao quadrado." },
      { id: "c", text: "10,0 km²", isCorrect: false, distractorRationale: "Cometeu erro de conversão de unidades de cm² para km²." },
      { id: "d", text: "0,4 km²", isCorrect: false, distractorRationale: "Inverteu a razão entre metros e quilômetros." },
      { id: "e", text: "25,0 km²", isCorrect: false, distractorRationale: "Utilizou diretamente o denominador da escala." }
    ],
    detailedExplanation: {
      summary: "A escala de áreas varia com o quadrado da escala linear: Área_real = Área_mapa * (escala)^2.",
      stepByStep: [
        "Converta a escala linear para quilômetros: 1 cm no mapa = 25.000 cm reais = 250 m = 0,25 km reais.",
        "Calcule a equivalência de 1 cm² de área: (1 cm)² = (0,25 km)² = 0,0625 km².",
        "Multiplique pela área demarcada: Área_real = 16 * 0,0625 km² = 1,0 km²."
      ],
      coreConcept: "Escala Cartográfica de Superfície",
      trapWarning: "Em áreas, a razão de semelhança é elevada ao quadrado: (k)^2."
    },
    commonTraps: ["escala linear para area", "erro conversao km2"],
    tags: ["escala", "cartografia", "area"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-008",
    area: "matematica",
    competence: 3,
    skill: 12,
    topic: "Razão e Proporção",
    subtopic: "Regra de Três Composta",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma indústria farmacêutica, 8 máquinas idênticas operando durante 6 horas por dia produzem 14.400 frascos de medicamento em 5 dias de trabalho. Para atender a um aumento emergencial na demanda, a fábrica colocou em operação mais 2 máquinas iguais às primeiras e aumentou a jornada diária para 8 horas.",
      source: "ENEM / Produção Farmacêutica"
    },
    prompt: "Mantendo o mesmo ritmo operacional, quantos frascos de medicamento serão produzidos com a nova configuração ao longo de 6 dias de produção?",
    options: [
      { id: "a", text: "28.800 frascos", isCorrect: true, distractorRationale: null },
      { id: "b", text: "24.000 frascos", isCorrect: false, distractorRationale: "Desconsiderou o aumento da jornada horária diária." },
      { id: "c", text: "18.000 frascos", isCorrect: false, distractorRationale: "Considerou apenas o acréscimo de máquinas." },
      { id: "d", text: "32.400 frascos", isCorrect: false, distractorRationale: "Inverteu uma das grandezas proporcionais." },
      { id: "e", text: "36.000 frascos", isCorrect: false, distractorRationale: "Superestimou a produção diária por fator linear incorreto." }
    ],
    detailedExplanation: {
      summary: "Na regra de três composta, todas as grandezas (máquinas, horas/dia, dias) são diretamente proporcionais à produção de frascos.",
      stepByStep: [
        "Estado inicial: 8 máquinas, 6 h/dia, 5 dias -> 14.400 frascos.",
        "Estado final: 10 máquinas (8+2), 8 h/dia, 6 dias -> X frascos.",
        "Relação de proporcionalidade: X / 14.400 = (10 / 8) * (8 / 6) * (6 / 5).",
        "Simplificando os fatores: (10 / 8) * (8 / 6) * (6 / 5) = 10 / 5 = 2.",
        "Portanto: X = 14.400 * 2 = 28.800 frascos."
      ],
      coreConcept: "Regra de Três Composta e Proporcionalidade Direta",
      trapWarning: "Verifique se o novo número de máquinas é 'mais 2' (total 10) e analise o sentido de cada grandeza em relação à produção."
    },
    commonTraps: ["considerar 2 maquinas em vez de 10", "inverter grandezas diretas"],
    tags: ["regra de tres composta", "producao", "proporcionalidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-009",
    area: "matematica",
    competence: 3,
    skill: 12,
    topic: "Razão e Proporção",
    subtopic: "Divisão Inversamente Proporcional",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois técnicos de laboratório, Lucas e Marina, foram encarregados de processar e validar um lote com 70 laudos bioquímicos. A coordenação estipulou que a quantidade de laudos que cada um receberia seria inversamente proporcional ao tempo de atraso acumulado no mês: Lucas registrou 2 horas de atraso, enquanto Marina registrou 3 horas.",
      source: "Original / Dinâmica Laboratorial"
    },
    prompt: "Quantos laudos couberam a Lucas nessa divisão inversamente proporcional?",
    options: [
      { id: "a", text: "42 laudos", isCorrect: true, distractorRationale: null },
      { id: "b", text: "28 laudos", isCorrect: false, distractorRationale: "Calculou a quantidade de laudos atribuída a Marina." },
      { id: "c", text: "35 laudos", isCorrect: false, distractorRationale: "Dividiu os laudos igualmente sem considerar a proporcionalidade inversa." },
      { id: "d", text: "46 laudos", isCorrect: false, distractorRationale: "Errou no cálculo do MMC entre as frações inversas." },
      { id: "e", text: "50 laudos", isCorrect: false, distractorRationale: "Aplicou proporção direta no lugar da inversa." }
    ],
    detailedExplanation: {
      summary: "Dividir inversamente proporcional a 2 e 3 equivale a dividir diretamente proporcional aos inversos: 1/2 e 1/3.",
      stepByStep: [
        "Seja k a constante de proporcionalidade inversa: Lucas recebe k/2 e Marina recebe k/3.",
        "A soma dos laudos é 70: k/2 + k/3 = 70.",
        "Reduzindo ao mesmo denominador (MMC = 6): (3k + 2k) / 6 = 70 => 5k / 6 = 70.",
        "Isolando k: 5k = 420 => k = 84.",
        "Laudos de Lucas: 84 / 2 = 42 laudos (e Marina recebe 84 / 3 = 28 laudos; 42 + 28 = 70)."
      ],
      coreConcept: "Divisão Inversamente Proporcional",
      trapWarning: "Quem tem menor atraso recebe maior quantidade de tarefas na divisão inversamente proporcional."
    },
    commonTraps: ["fazer divisao direta", "inverter atribuicao dos sujeitos"],
    tags: ["divisao inversa", "laboratorio", "fracoes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-010",
    area: "matematica",
    competence: 3,
    skill: 12,
    topic: "Razão e Proporção",
    subtopic: "Vazão Conjunta e Tempo de Esvaziamento",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Duas bombas de drenagem são utilizadas para descarte de efluentes de um reservatório de segurança biológica. Operando de forma isolada, a bomba A esvazia o reservatório em 3 horas. A bomba B, mais potente, esvazia o mesmo reservatório operando sozinha em 2 horas.",
      source: "ENEM / Física & Vazão"
    },
    prompt: "Se as duas bombas forem acionadas simultaneamente com suas potências nominais, em quanto tempo o reservatório estará completamente esvaziado?",
    options: [
      { id: "a", text: "1 hora e 12 minutos", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1 hora e 30 minutos", isCorrect: false, distractorRationale: "Calculou a média aritmética simples dos tempos individuais e subtraiu 1 hora." },
      { id: "c", text: "2 horas e 30 minutos", isCorrect: false, distractorRationale: "Somou as metades dos tempos de cada bomba." },
      { id: "d", text: "50 minutos", isCorrect: false, distractorRationale: "Errou a conversão de 6/5 de hora para o formato horas e minutos." },
      { id: "e", text: "1 hora e 20 minutos", isCorrect: false, distractorRationale: "Confundiu a fração 1/5 de hora com 20 minutos em vez de 12 minutos." }
    ],
    detailedExplanation: {
      summary: "A soma das taxas de vazão horárias determina a taxa conjunta de esvaziamento: 1/T_total = 1/T_A + 1/T_B.",
      stepByStep: [
        "Vazão da bomba A: esvazia 1/3 do reservatório por hora.",
        "Vazão da bomba B: esvazia 1/2 do reservatório por hora.",
        "Vazão combinada: 1/3 + 1/2 = 2/6 + 3/6 = 5/6 do reservatório por hora.",
        "Tempo necessário T: T = 1 / (5/6) = 6/5 de hora.",
        "Convertendo 6/5 de hora: 1 hora inteira + 1/5 de hora = 60 min + (60 / 5) min = 1 hora e 12 minutos."
      ],
      coreConcept: "Taxas de Variação e Vazão Composta",
      trapWarning: "1/5 de hora são 12 minutos (60 / 5 = 12), e nunca 20 minutos."
    },
    commonTraps: ["media aritmetica dos tempos", "conversao de fracao de hora errada"],
    tags: ["vazao", "torneiras e bombas", "taxa horaria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

