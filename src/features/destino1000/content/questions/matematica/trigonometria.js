export const QUESTIONS_TRIGONOMETRIA = [
  {
    id: "MAT-TRIG-001",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Trigonometria",
    subtopic: "Razões Trigonométricas e Teodolito",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um topógrafo utiliza um teodolito a 1,60 m do solo para medir a altura de uma torre de transmissão. A partir de um ponto no chão a 40 metros de distância horizontal da base da torre, o ângulo de elevação visual até o topo é medido em 30°. (Considere: sen 30° = 0,50; cos 30° = 0,87; tg 30° = 0,58).",
      source: "ENEM Contexto Topográfico"
    },
    prompt: "Qual é a altura total da torre de transmissão, em metros?",
    options: [
      { id: "a", text: "24,8 m", isCorrect: true, distractorRationale: null },
      { id: "b", text: "23,2 m", isCorrect: false, distractorRationale: "Calculou a altura do triângulo (40 · 0,58 = 23,2 m), mas esqueceu de somar a altura do teodolito (1,60 m)." },
      { id: "c", text: "34,8 m", isCorrect: false, distractorRationale: "Usou cosseno em vez de tangente na razão trigonométrica." },
      { id: "d", text: "21,6 m", isCorrect: false, distractorRationale: "Usou seno em vez de tangente." },
      { id: "e", text: "26,4 m", isCorrect: false, distractorRationale: "Somou duas vezes a altura do aparelho." }
    ],
    detailedExplanation: {
      summary: "Usa-se a tangente para relacionar o cateto oposto (H - h) com o cateto adjacente (distância horizontal D), lembrando de somar a altura do instrumento.",
      stepByStep: [
        "A relação no triângulo é: tg(30°) = Cateto Oposto / Cateto Adjacente = y / 40.",
        "Calcule o cateto oposto y: y = 40 · tg(30°) = 40 · 0,58 = 23,2 metros.",
        "A altura total da torre H é a soma de y com a altura do teodolito h: H = 23,2 + 1,60 = 24,8 metros."
      ],
      coreConcept: "Aplicação da Tangente no Triângulo Retângulo e Compensação da Linha de Visada",
      trapWarning: "A pegadinha clássica do ENEM é esquecer de somar a altura do observador ou do teodolito à altura calculada!"
    },
    commonTraps: ["esquecer de somar altura do observador", "usar seno no lugar de tangente"],
    tags: ["trigonometria", "tangente", "geometria plana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-002",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Trigonometria",
    subtopic: "Funções Periódicas: Modelagem de Marés",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A altura da maré H(t), em metros, em uma baía portuária ao longo do dia é modelada pela função periódica H(t) = 3 + 2 · sen( (π/6) · t ), onde t é o tempo medido em horas a partir da meia-noite (0 ≤ t ≤ 24).",
      source: "ENEM Modelagem Periódica"
    },
    prompt: "Qual é a altura máxima atingida pela maré (preamar) e em qual primeiro horário da madrugada ela ocorre?",
    options: [
      { id: "a", text: "5 metros, às 03:00 da madrugada.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "3 metros, às 06:00 da manhã.", isCorrect: false, distractorRationale: "Confundiu a altura média (termo constante 3) com a altura máxima." },
      { id: "c", text: "5 metros, às 06:00 da manhã.", isCorrect: false, distractorRationale: "Errou o argumento do seno para que sen(x) = 1." },
      { id: "d", text: "2 metros, às 00:00 (meia-noite).", isCorrect: false, distractorRationale: "Considerou apenas a amplitude e tempo zero." },
      { id: "e", text: "4 metros, às 04:00 da madrugada.", isCorrect: false, distractorRationale: "Cálculo incorreto da amplitude." }
    ],
    detailedExplanation: {
      summary: "A altura máxima ocorre quando o seno atinge seu valor máximo (+1).",
      stepByStep: [
        "O valor máximo da função seno é sen(θ) = 1.",
        "Substituindo na função: H_max = 3 + 2 · (1) = 5 metros.",
        "Para o primeiro máximo: o argumento do seno deve ser π/2: (π/6) · t = π/2.",
        "Simplificando π de ambos os lados: t / 6 = 1 / 2 → t = 6 / 2 = 3 horas (03:00 da madrugada)."
      ],
      coreConcept: "Modelagem com Funções Trigonométricas Senoidais: Amplitude, Média e Período",
      trapWarning: "Lembre-se de que o seno varia de -1 a +1. O valor máximo é sempre Termo Central + Amplitude."
    },
    commonTraps: ["confundir amplitude com altura máxima", "errar o valor do ângulo que maximiza o seno"],
    tags: ["funcao trigonometrica", "periodo", "mares"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
