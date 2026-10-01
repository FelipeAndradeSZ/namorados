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
  }
];
