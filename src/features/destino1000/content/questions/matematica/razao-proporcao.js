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
  },
  {
    id: "MAT-RAZ-011",
    area: "matematica",
    competence: 3,
    skill: 11,
    topic: "Razão e Proporção",
    subtopic: "Escala Cartográfica de Áreas e Superfícies",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No planejamento territorial de uma usina solar fotovoltaica, um mapa de zoneamento ecológico foi desenhado na escala linear de 1:20 000. Na representação cartográfica, o polígono retangular reservado para a instalação dos módulos fotovoltaicos mede 12 cm de comprimento por 5 cm de largura.",
      source: "ENEM / Cartografia e Escala de Áreas"
    },
    prompt: "A área real reservada para a usina solar, calculada em hectares (sabendo que 1 hectare equivale a 10 000 m²), corresponde a:",
    options: [
      { id: "a", text: "240 hectares", isCorrect: true, distractorRationale: null },
      { id: "b", text: "120 hectares", isCorrect: false, distractorRationale: "Calculou a área linear incorretamente ou usou a metade da dimensão." },
      { id: "c", text: "12 hectares", isCorrect: false, distractorRationale: "Multiplicou a área em cm² pela escala linear (k) em vez de aplicar o quadrado da escala (k²)." },
      { id: "d", text: "24 hectares", isCorrect: false, distractorRationale: "Cometeu erro na conversão de centímetros quadrados para metros quadrados dividindo por 100 000." },
      { id: "e", text: "2 400 hectares", isCorrect: false, distractorRationale: "Errou uma potência de 10 na conversão final de metros quadrados para hectares." }
    ],
    detailedExplanation: {
      summary: "A razão entre áreas em um mapa e na realidade é dada pelo quadrado da escala linear: Razão de Áreas = k².",
      stepByStep: [
        "Área no mapa: A_mapa = 12 cm × 5 cm = 60 cm².",
        "Escala linear: k = 1 / 20 000, o que significa que 1 cm no mapa = 20 000 cm reais = 200 m.",
        "Portanto, 1 cm² no mapa corresponde a (200 m)² = 40 000 m² no terreno real.",
        "Área real: A_real = 60 cm² × 40 000 m²/cm² = 2 400 000 m².",
        "Conversão para hectares (1 ha = 10 000 m²): 2 400 000 / 10 000 = 240 hectares."
      ],
      coreConcept: "Relação Quadrática nas Escalas de Área (A_real = A_mapa / k²)",
      trapWarning: "Nunca multiplique a área pela escala linear direta! Em duas dimensões, a proporção é sempre k²."
    },
    commonTraps: ["usar escala linear em area", "erro na conversao de m² para hectare"],
    tags: ["escala", "escala de areas", "geometria plana", "conversao de unidades"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-012",
    area: "matematica",
    competence: 3,
    skill: 11,
    topic: "Razão e Proporção",
    subtopic: "Escala Volumétrica e Semelhança Espacial",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para calibrar um sistema automatizado de fermentação biológica destinado à produção de vacinas, um centro de biotecnologia construiu um protótipo geométrico na escala linear de 1:50. Em testes de estanqueidade, constatou-se que o modelo em miniatura possui capacidade volumétrica interna de exatamente 16 mL.",
      source: "ENEM / Escala Volumétrica e Proporções"
    },
    prompt: "A capacidade volumétrica real do biorreator industrial, expressa em metros cúbicos (m³), é igual a:",
    options: [
      { id: "a", text: "2 m³", isCorrect: true, distractorRationale: null },
      { id: "b", text: "0,8 m³", isCorrect: false, distractorRationale: "Multiplicou 16 mL apenas pela escala linear 50, obtendo 800 mL." },
      { id: "c", text: "4 m³", isCorrect: false, distractorRationale: "Multiplicou pela escala quadrática (50² = 2 500) em vez de volumétrica cúbica (50³)." },
      { id: "d", text: "20 m³", isCorrect: false, distractorRationale: "Errou o fator de conversão de litros para metros cúbicos por um fator 10." },
      { id: "e", text: "0,2 m³", isCorrect: false, distractorRationale: "Dividiu o volume real por 10 por confusão entre decímetros e centímetros." }
    ],
    detailedExplanation: {
      summary: "Em figuras geometricamente semelhantes, a razão entre seus volumes é igual ao cubo da razão linear de semelhança: V_real = V_modelo × (escala_linear)³.",
      stepByStep: [
        "Razão de escala linear: 1 : 50.",
        "Fator de escala volumétrica: 50³ = 125 000.",
        "Volume real em mL: 16 mL × 125 000 = 2 000 000 mL.",
        "Conversão para litros (1 L = 1 000 mL): 2 000 000 / 1 000 = 2 000 L.",
        "Conversão para metros cúbicos (1 m³ = 1 000 L): 2 000 L = 2 m³."
      ],
      coreConcept: "Escala Volumétrica (V_real / V_modelo = k³)",
      trapWarning: "Lembre-se: comprimento usa k, área usa k², e volume usa k³!"
    },
    commonTraps: ["usar k ou k² em vez de k³", "confundir conversao de mL para m³"],
    tags: ["escala volumetrica", "geometria espacial", "conversao de medidas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-013",
    area: "matematica",
    competence: 3,
    skill: 12,
    topic: "Razão e Proporção",
    subtopic: "Regra de Três Composta",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma equipe de manutenção hospitalar precisa reformar uma ala de internação emergencial. Sabe-se que 12 operários, todos com a mesma capacidade operacional diária e trabalhando 8 horas por dia, executaram 60% da reforma em 15 dias. Por determinação sanitária, os 40% restantes da obra devem ser finalizados em apenas 6 dias, mantendo-se a jornada de 8 horas diárias de trabalho.",
      source: "ENEM / Proporcionalidade e Produtividade"
    },
    prompt: "Para que a reforma seja rigorosamente concluída nesse novo prazo, o número total de operários com a mesma produtividade que deve compor a equipe é:",
    options: [
      { id: "a", text: "20 operários", isCorrect: true, distractorRationale: null },
      { id: "b", text: "16 operários", isCorrect: false, distractorRationale: "Tratou a relação entre dias e operários como diretamente proporcional." },
      { id: "c", text: "24 operários", isCorrect: false, distractorRationale: "Superestimou a necessidade de operários aplicando proporção direta em todas as grandezas." },
      { id: "d", text: "18 operários", isCorrect: false, distractorRationale: "Calculou apenas o acréscimo de operários sem somar à equipe inicial." },
      { id: "e", text: "25 operários", isCorrect: false, distractorRationale: "Errou a simplificação fracionária dos percentuais de obra." }
    ],
    detailedExplanation: {
      summary: "Na regra de três composta, analisamos o comportamento direto ou inverso de cada grandeza em relação ao número de operários.",
      stepByStep: [
        "Grandezas: Operários (N), Produção (% da obra), Dias (d). As horas diárias são constantes (8 h/dia).",
        "Relações: Operários e Produção são grandezas diretamente proporcionais (mais obra exige mais operários).",
        "Operários e Dias são grandezas inversamente proporcionais (menos dias exigem mais operários).",
        "Montagem da equação: N / 12 = (40 / 60) × (15 / 6).",
        "Simplificando: (40 / 60) = 2/3 e (15 / 6) = 5/2.",
        "Multiplicação dos fatores: (2/3) × (5/2) = 10 / 6 = 5/3.",
        "Logo: N = 12 × (5/3) = 60 / 3 = 20 operários."
      ],
      coreConcept: "Regra de Três Composta e Análise Dimensional de Grandezas",
      trapWarning: "Cuidado ao classificar grandezas como diretas ou inversas: tempo e trabalhadores são grandezas inversas!"
    },
    commonTraps: ["tratar dias e operarios como grandezas diretas", "esquecer que o enunciado pede a equipe total"],
    tags: ["regra de tres composta", "proporcionalidade", "produtividade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-014",
    area: "matematica",
    competence: 3,
    skill: 12,
    topic: "Razão e Proporção",
    subtopic: "Divisão Diretamente e Inversamente Proporcional",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Três pesquisadores de um centro biomédico (André, Beatriz e Carlos) foram contemplados com um fundo conjunto de incentivo à pesquisa no valor total de R$ 62.000,00. O regulamento estabeleceu que o valor seria distribuído de forma diretamente proporcional ao número de artigos científicos publicados por cada um (4, 3 e 5 artigos, respectivamente) e inversamente proporcional ao tempo de atraso no envio do relatório técnico de atividades (2, 1 e 4 meses de atraso, respectivamente).",
      source: "ENEM / Divisão Proporcional Mista"
    },
    prompt: "O valor pecuniário individual recebido pela pesquisadora Beatriz nessa partilha foi de:",
    options: [
      { id: "a", text: "R$ 29.760,00", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 19.840,00", isCorrect: false, distractorRationale: "Esse foi o valor recebido pelo pesquisador André." },
      { id: "c", text: "R$ 12.400,00", isCorrect: false, distractorRationale: "Esse foi o valor recebido pelo pesquisador Carlos." },
      { id: "d", text: "R$ 24.800,00", isCorrect: false, distractorRationale: "Realizou a divisão considerando apenas o número de artigos de forma direta (3/12 de 62.000)." },
      { id: "e", text: "R$ 20.666,67", isCorrect: false, distractorRationale: "Dividiu o prêmio em partes rigorosamente iguais entre os três pesquisadores." }
    ],
    detailedExplanation: {
      summary: "Na divisão diretamente proporcional a A e inversamente a B, a cota de cada participante é proporcional à razão A / B.",
      stepByStep: [
        "Razão de André: 4 artigos / 2 meses = 2.",
        "Razão de Beatriz: 3 artigos / 1 mês = 3.",
        "Razão de Carlos: 5 artigos / 4 meses = 1,25 (ou 5/4).",
        "Para trabalhar com coeficientes inteiros, multiplicamos todas as razões por 4: André = 8 partes, Beatriz = 12 partes, Carlos = 5 partes.",
        "Soma total das partes: 8 + 12 + 5 = 25 partes.",
        "Valor de cada parte: R$ 62.000,00 / 25 = R$ 2.480,00.",
        "Valor de Beatriz (12 partes): 12 × R$ 2.480,00 = R$ 29.760,00."
      ],
      coreConcept: "Divisão Proporcional Composta (Direta e Inversa Simultânea)",
      trapWarning: "Quando uma grandeza é inversamente proporcional, divida pelo seu valor (ou multiplique pelo seu inverso)."
    },
    commonTraps: ["ignorar a proporcionalidade inversa", "erro na soma das partes fracionarias"],
    tags: ["divisao proporcional", "razao composta", "aritmetica aplicada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-015",
    area: "matematica",
    competence: 3,
    skill: 11,
    topic: "Razão e Proporção",
    subtopic: "Densidade Demográfica e Distribuição Populacional",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A Secretaria de Planejamento de Saúde monitora dois distritos sanitários, Alfa e Beta, para alocação de equipes de Saúde da Família. O distrito Alfa possui uma área de 120 km² e abriga 180 000 habitantes. Já o distrito Beta possui área territorial de 80 km² e sua densidade demográfica é 50% superior à densidade demográfica do distrito Alfa.",
      source: "ENEM / Razão Demográfica e Saúde Pública"
    },
    prompt: "Com base nessas informações, a população total residente no distrito sanitário Beta é igual a:",
    options: [
      { id: "a", text: "180 000 habitantes", isCorrect: true, distractorRationale: null },
      { id: "b", text: "120 000 habitantes", isCorrect: false, distractorRationale: "Multiplicou a densidade de Alfa pela área de Beta sem aplicar o acréscimo de 50%." },
      { id: "c", text: "270 000 habitantes", isCorrect: false, distractorRationale: "Multiplicou a população de Alfa diretamente por 1,5 sem considerar a diferença de áreas." },
      { id: "d", text: "150 000 habitantes", isCorrect: false, distractorRationale: "Calculou a média aritmética das áreas e multiplicou pela densidade básica." },
      { id: "e", text: "225 000 habitantes", isCorrect: false, distractorRationale: "Confundiu a densidade de Beta (2 250 hab/km²) com a sua população total." }
    ],
    detailedExplanation: {
      summary: "Densidade demográfica é a razão entre população e área (D = P / A). A população é dada por P = D × A.",
      stepByStep: [
        "Densidade demográfica do distrito Alfa: D_Alfa = 180 000 hab / 120 km² = 1 500 hab/km².",
        "Densidade do distrito Beta (50% superior): D_Beta = 1 500 × 1,50 = 2 250 hab/km².",
        "População total do distrito Beta: P_Beta = D_Beta × Área_Beta = 2 250 hab/km² × 80 km².",
        "Calculando o produto: 2 250 × 80 = 180 000 habitantes.",
        "Conclusão: embora a área seja menor, a densidade proporcionalmente maior faz com que o distrito Beta tenha exatamente o mesmo contingente populacional de Alfa."
      ],
      coreConcept: "Conceito e Operações com Densidade Demográfica",
      trapWarning: "A densidade maior compensa a área menor; não confunda densidade por km² com população total!"
    },
    commonTraps: ["aplicar porcentagem na populacao ao inves da densidade", "confundir densidade com populacao absoluta"],
    tags: ["densidade demografica", "razao", "proporcao", "geografia quantitativa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-016",
    area: "matematica",
    competence: 3,
    skill: 12,
    topic: "Razão e Proporção",
    subtopic: "Semelhança e Proporção Linear (Teorema de Tales)",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um engenheiro de segurança hospitalar precisa verificar a altura de uma chaminé vertical de incineração de resíduos químicos. Em um instante do dia com incidência de raios solares paralelos, uma haste vertical padrão de 1,80 m de altura projeta no solo plano uma sombra de 1,20 m. No mesmo instante, a sombra projetada pela chaminé mede exatamente 28,0 m.",
      source: "ENEM / Semelhança Geométrica e Sombras"
    },
    prompt: "A altura real calculada dessa chaminé hospitalar, em metros, é igual a:",
    options: [
      { id: "a", text: "42,0 m", isCorrect: true, distractorRationale: null },
      { id: "b", text: "36,0 m", isCorrect: false, distractorRationale: "Inverteu a razão entre altura e sombra da haste (multiplicou por 1,2 / 1,8 = 2/3)." },
      { id: "c", text: "48,0 m", isCorrect: false, distractorRationale: "Errou a simplificação da razão 1,80 / 1,20 assumindo 1,7." },
      { id: "d", text: "21,0 m", isCorrect: false, distractorRationale: "Dividiu a sombra pela metade em vez de multiplicar pela razão de proporção 1,5." },
      { id: "e", text: "50,4 m", isCorrect: false, distractorRationale: "Multiplicou 28 por 1,8 sem dividir por 1,20." }
    ],
    detailedExplanation: {
      summary: "Pela semelhança de triângulos retângulos formados pelos raios solares paralelos, a razão entre altura e sombra é constante.",
      stepByStep: [
        "Razão de semelhança: Altura / Sombra = constante.",
        "Para a haste: 1,80 m / 1,20 m = 1,5.",
        "Para a chaminé de altura H: H / 28,0 m = 1,5.",
        "Isolando H: H = 28,0 × 1,5 = 42,0 metros."
      ],
      coreConcept: "Proporcionalidade Direta e Semelhança Geométrica (Teorema de Tales)",
      trapWarning: "Verifique se a haste e a chaminé estão sob o mesmo ângulo de incidência solar e no mesmo instante."
    },
    commonTraps: ["inverter a razao da sombra com a altura", "esquecer de dividir pelo comprimento da sombra da haste"],
    tags: ["semelhanca", "proporcionalidade", "sombras", "teorema de tales"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-017",
    area: "matematica",
    competence: 3,
    skill: 12,
    topic: "Razão e Proporção",
    subtopic: "Eficiência Energética e Rendimento Operacional",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A coordenação de logística de uma central de pronto atendimento analisa os custos operacionais de abastecimento de duas ambulâncias urbanas. A ambulância convencional 1 apresenta rendimento médio de 8 km por litro de diesel. A ambulância 2 foi substituída por um modelo com motor híbrido que é 25% mais eficiente em rendimento (percorre 25% mais quilômetros por litro de diesel). Cada litro de combustível custa R$ 6,00.",
      source: "ENEM / Eficiência e Custos Operacionais"
    },
    prompt: "Em um mês em que cada uma das ambulâncias percorre 2 400 km em deslocamentos de socorro municipal, a economia financeira proporcionada pela ambulância 2 em comparação à ambulância 1 é de:",
    options: [
      { id: "a", text: "R$ 360,00", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 450,00", isCorrect: false, distractorRationale: "Calculou 25% diretamente sobre a despesa da primeira ambulância, desconsiderando que o rendimento está no denominador do consumo." },
      { id: "c", text: "R$ 300,00", isCorrect: false, distractorRationale: "Calculou economia de 50 litros em vez de 60 litros." },
      { id: "d", text: "R$ 240,00", isCorrect: false, distractorRationale: "Confundiu a quantidade de litros consumidos pela ambulância 2 (240 L) com a economia em reais." },
      { id: "e", text: "R$ 180,00", isCorrect: false, distractorRationale: "Calculou metade do valor correto de economia." }
    ],
    detailedExplanation: {
      summary: "O consumo de combustível é inversamente proporcional ao rendimento em km/L: Consumo (L) = Distância / Rendimento.",
      stepByStep: [
        "Ambulância 1: Rendimento = 8 km/L. Consumo para 2 400 km = 2 400 / 8 = 300 litros.",
        "Custo da ambulância 1: 300 litros × R$ 6,00/L = R$ 1 800,00.",
        "Ambulância 2: Rendimento = 8 × 1,25 = 10 km/L. Consumo para 2 400 km = 2 400 / 10 = 240 litros.",
        "Custo da ambulância 2: 240 litros × R$ 6,00/L = R$ 1 440,00.",
        "Economia gerada: R$ 1 800,00 - R$ 1 440,00 = R$ 360,00 (ou economia de 60 L × R$ 6,00 = R$ 360,00)."
      ],
      coreConcept: "Razão Inversa em Rendimento e Consumo de Combustível",
      trapWarning: "Aumentar a eficiência em 25% (km/L) não significa reduzir o consumo total em 25%! A relação é inversamente proporcional."
    },
    commonTraps: ["subtrair 25% do custo direto", "esquecer de multiplicar pelo preco do combustivel"],
    tags: ["razao", "proporcionalidade inversa", "eficiencia energetica", "economia aplicada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-018",
    area: "matematica",
    competence: 3,
    skill: 12,
    topic: "Razão e Proporção",
    subtopic: "Concentração e Misturas Químico-Farmacêuticas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na farmácia hospitalar de um hospital público, um farmacêutico necessita preparar 2,0 litros de uma solução salina glicosada com concentração exata de 25 g/L de glicose para uso pediátrico. No estoque, encontram-se disponíveis apenas dois frascos padronizados: o Frasco A (com concentração de 10 g/L) e o Frasco B (com concentração de 50 g/L).",
      source: "ENEM / Concentração e Misturas Proporcionais"
    },
    prompt: "Para obter rigorosamente a concentração e o volume pretendidos na mistura final, o volume do Frasco A que deve ser adicionado é de:",
    options: [
      { id: "a", text: "1,25 L (1 250 mL)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "0,75 L (750 mL)", isCorrect: false, distractorRationale: "Esse é o volume correspondente ao Frasco B, não ao Frasco A." },
      { id: "c", text: "1,00 L (1 000 mL)", isCorrect: false, distractorRationale: "Calculou a média aritmética ingênua dos dois volumes sem ponderar pelas concentrações." },
      { id: "d", text: "1,50 L (1 500 mL)", isCorrect: false, distractorRationale: "Errou a resolução da equação de balanço de massa de soluto." },
      { id: "e", text: "0,50 L (500 mL)", isCorrect: false, distractorRationale: "Subtraiu 25 de 50 e dividiu por 50." }
    ],
    detailedExplanation: {
      summary: "A massa total de soluto na mistura é igual à soma das massas de soluto das partes: C_total × V_total = C_A × V_A + C_B × V_B.",
      stepByStep: [
        "Volume total: V_A + V_B = 2,0 L, portanto V_B = 2,0 - V_A.",
        "Massa total de glicose necessária: M = C_final × V_final = 25 g/L × 2,0 L = 50 g.",
        "Equação de conservação de massa: 10 × V_A + 50 × V_B = 50.",
        "Substituindo V_B: 10 V_A + 50 (2,0 - V_A) = 50.",
        "10 V_A + 100 - 50 V_A = 50  =>  -40 V_A = -50  =>  V_A = 50 / 40 = 1,25 L (1 250 mL).",
        "Consequentemente, V_B = 2,0 - 1,25 = 0,75 L."
      ],
      coreConcept: "Balanço de Massa e Média Ponderada em Soluções",
      trapWarning: "Verifique sempre se a pergunta pede o volume do frasco A ou do frasco B para não marcar o distrator invertido!"
    },
    commonTraps: ["inverter Frasco A e Frasco B", "usar media simples ao inves de ponderada"],
    tags: ["misturas", "concentracao", "balanco de massa", "media ponderada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-019",
    area: "matematica",
    competence: 3,
    skill: 12,
    topic: "Razão e Proporção",
    subtopic: "Vazão Simultânea e Balanço Hídrico",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O sistema de lavagem e sanitização de um hospital possui um reservatório de abastecimento com capacidade volumétrica de 1 200 litros. A tubulação de entrada T1 enche o reservatório vazio em 4 horas. A tubulação auxiliar T2 é capaz de enchê-lo completamente em 6 horas. No fundo do reservatório, uma válvula de dreno de segurança D1, quando acionada, esvazia o reservatório totalmente cheio em 12 horas.",
      source: "ENEM / Vazão Hidráulica e Razão Temporal"
    },
    prompt: "Com o reservatório inicialmente vazio, se as duas tubulações de abastecimento (T1 e T2) e a válvula de dreno (D1) forem abertas simultaneamente com fluxo contínuo, em quantas horas o reservatório ficará completamente cheio?",
    options: [
      { id: "a", text: "3 horas", isCorrect: true, distractorRationale: null },
      { id: "b", text: "2 horas e 30 minutos", isCorrect: false, distractorRationale: "Somou os tempos individuais e dividiu pelo número de tubulações." },
      { id: "c", text: "4 horas", isCorrect: false, distractorRationale: "Ignorou o efeito da tubulação auxiliar T2." },
      { id: "d", text: "3 horas e 45 minutos", isCorrect: false, distractorRationale: "Errou o cálculo do mínimo múltiplo comum das frações de vazão." },
      { id: "e", text: "2 horas", isCorrect: false, distractorRationale: "Esqueceu de subtrair o escoamento provocado pelo dreno." }
    ],
    detailedExplanation: {
      summary: "A taxa horária líquida de enchimento é a soma das taxas de entrada menos a taxa de saída por unidade de tempo.",
      stepByStep: [
        "Vazão de entrada de T1: 1/4 do tanque por hora.",
        "Vazão de entrada de T2: 1/6 do tanque por hora.",
        "Vazão de escoamento do dreno D1: -1/12 do tanque por hora.",
        "Vazão líquida total = 1/4 + 1/6 - 1/12.",
        "MMC entre 4, 6 e 12 é 12: (3/12) + (2/12) - (1/12) = 4/12 = 1/3 do tanque por hora.",
        "Tempo para encher 1 tanque completo: T = 1 / (1/3) = 3 horas."
      ],
      coreConcept: "Soma e Subtração de Taxas de Vazão (1/T = 1/T1 + 1/T2 - 1/TD)",
      trapWarning: "O dreno subtrai vazão! Sempre coloque sinal negativo para saídas e positivo para entradas."
    },
    commonTraps: ["somar o dreno ao inves de subtrair", "fazer media simples de tempos"],
    tags: ["vazao", "torneiras e drenos", "taxas temporais", "fracoes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-RAZ-020",
    area: "matematica",
    competence: 3,
    skill: 12,
    topic: "Razão e Proporção",
    subtopic: "Proporcionalidade em Engrenagens e Transmissão Mecânica",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um aparelho de diagnóstico médico por imagem computadorizada, a calibração do braço giratório é operada por um trem de três engrenagens acopladas em série: a engrenagem motora A possui 18 dentes; a engrenagem intermediária B possui 36 dentes; e a engrenagem receptora final C, acoplada ao leitor óptico, possui 54 dentes. O princípio mecânico fundamental determina que o número de rotações efetuadas por engrenagens acopladas é inversamente proporcional ao seu respectivo número de dentes.",
      source: "ENEM / Física Aplicada e Engrenagens"
    },
    prompt: "Quando a engrenagem motora A executa 60 rotações completas, o número correspondente de rotações efetuadas pela engrenagem receptora C é igual a:",
    options: [
      { id: "a", text: "20 rotações", isCorrect: true, distractorRationale: null },
      { id: "b", text: "30 rotações", isCorrect: false, distractorRationale: "Calculou as rotações da engrenagem intermediária B (60 × 18 / 36 = 30)." },
      { id: "c", text: "180 rotações", isCorrect: false, distractorRationale: "Tratou a rotação como diretamente proporcional ao número de dentes (multiplicou por 54/18 = 3)." },
      { id: "d", text: "15 rotações", isCorrect: false, distractorRationale: "Dividiu o número de dentes de C por 3,6." },
      { id: "e", text: "10 rotações", isCorrect: false, distractorRationale: "Multiplicou pelo inverso do quadrado da razão de transmissão." }
    ],
    detailedExplanation: {
      summary: "Em engrenagens acopladas sem deslizamento, a transmissão de dentes é idêntica: N1 × Z1 = N2 × Z2. A engrenagem intermediária atua apenas como condutora.",
      stepByStep: [
        "A relação de transmissão direta entre a engrenagem motora A e a final C independe da intermediária B.",
        "Equação: N_A × Z_A = N_C × Z_C.",
        "Substituindo os valores conhecidos: 60 rotações × 18 dentes = N_C × 54 dentes.",
        "1 080 = 54 × N_C.",
        "N_C = 1 080 / 54 = 20 rotações completas."
      ],
      coreConcept: "Proporcionalidade Inversa em Transmissão Mecânica de Engrenagens",
      trapWarning: "A engrenagem intermediária não altera a relação final de rotações entre a primeira e a última engrenagem!"
    },
    commonTraps: ["considerar proporcao direta", "marcar o valor da engrenagem intermediaria B"],
    tags: ["engrenagens", "proporcionalidade inversa", "mecanica aplicada", "transmissao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];


