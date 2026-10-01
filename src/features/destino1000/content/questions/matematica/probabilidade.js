export const QUESTIONS_PROBABILIDADE = [
  {
    id: "MAT-PROB-001",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Probabilidade Simples",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um sorteio, há 100 bilhetes numerados de 1 a 100. Uma pessoa compra todos os bilhetes que são múltiplos de 7 e múltiplos de 5 simultaneamente.",
      source: "Original"
    },
    prompt: "Qual a probabilidade de essa pessoa ganhar o sorteio?",
    options: [
      { id: "a", text: "2%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "5%", isCorrect: false, distractorRationale: "Calculou apenas os múltiplos de 5 em 100 (20%)." },
      { id: "c", text: "7%", isCorrect: false, distractorRationale: "Considerou os múltiplos de 7 (14%)." },
      { id: "d", text: "12%", isCorrect: false, distractorRationale: "Somou as probabilidades individuais." },
      { id: "e", text: "35%", isCorrect: false, distractorRationale: "Confundiu com o mínimo múltiplo comum." }
    ],
    detailedExplanation: {
      summary: "Para ser múltiplo de 5 e de 7, precisa ser múltiplo do MMC de (5, 7).",
      stepByStep: [
        "O MMC de 5 e 7 é 35.",
        "Os múltiplos de 35 entre 1 e 100 são 35 e 70.",
        "A pessoa tem 2 bilhetes.",
        "Probabilidade = 2/100 = 2%."
      ],
      coreConcept: "Eventos e Espaço Amostral",
      trapWarning: "Eventos com a palavra 'e' requerem interseção."
    },
    commonTraps: ["soma de probabilidades"],
    tags: ["multiplos", "probabilidade simples"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-002",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Probabilidade Condicional",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma escola, 60% dos alunos falam inglês e 40% falam espanhol. Sabe-se que 20% dos alunos falam ambos os idiomas. Um aluno é selecionado ao acaso e descobre-se que ele fala inglês.",
      source: "Original"
    },
    prompt: "Qual a probabilidade de que este aluno também fale espanhol?",
    options: [
      { id: "a", text: "33,3%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "20%", isCorrect: false, distractorRationale: "Usou apenas a interseção em vez da condicional." },
      { id: "c", text: "40%", isCorrect: false, distractorRationale: "Usou a probabilidade total de falar espanhol." },
      { id: "d", text: "50%", isCorrect: false, distractorRationale: "Dividiu a interseção pela união." },
      { id: "e", text: "12%", isCorrect: false, distractorRationale: "Multiplicou as probabilidades de espanhol e inglês." }
    ],
    detailedExplanation: {
      summary: "O universo foi restrito apenas aos alunos que falam inglês.",
      stepByStep: [
        "A fórmula da probabilidade condicional é P(A|B) = P(A ∩ B) / P(B).",
        "A (falar espanhol), B (falar inglês).",
        "P(A ∩ B) = 20% e P(B) = 60%.",
        "P(A|B) = 20% / 60% = 1/3 ≈ 33,3%."
      ],
      coreConcept: "Probabilidade Condicional",
      trapWarning: "Quando se diz 'dado que', o espaço amostral diminui."
    },
    commonTraps: ["usar interseção diretamente"],
    tags: ["condicional", "idiomas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-003",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Eventos Independentes",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma fábrica, a máquina A produz peças com 5% de defeitos e a máquina B produz peças com 10% de defeitos. As duas máquinas funcionam independentemente.",
      source: "Original"
    },
    prompt: "Se selecionarmos uma peça de cada máquina, qual a probabilidade de ambas serem não defeituosas?",
    options: [
      { id: "a", text: "85,5%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "0,5%", isCorrect: false, distractorRationale: "Calculou a probabilidade de ambas SEREM defeituosas." },
      { id: "c", text: "15%", isCorrect: false, distractorRationale: "Somou as probabilidades de defeito." },
      { id: "d", text: "95%", isCorrect: false, distractorRationale: "Apenas olhou para a máquina A." },
      { id: "e", text: "90%", isCorrect: false, distractorRationale: "Apenas olhou para a máquina B." }
    ],
    detailedExplanation: {
      summary: "Multiplicam-se as probabilidades de não defeito de cada uma, pois são independentes.",
      stepByStep: [
        "Probabilidade da peça A NÃO ser defeituosa: 100% - 5% = 95% = 0,95.",
        "Probabilidade da peça B NÃO ser defeituosa: 100% - 10% = 90% = 0,90.",
        "Probabilidade de ambas não serem defeituosas = 0,95 * 0,90.",
        "0,95 * 0,90 = 0,855 = 85,5%."
      ],
      coreConcept: "Regra do Produto",
      trapWarning: "Preste atenção se o problema pede defeituosas ou não defeituosas."
    },
    commonTraps: ["calcular probabilidade inversa"],
    tags: ["independentes", "controle qualidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-004",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Urnas e Bolas",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma caixa contém 4 bolas vermelhas e 6 bolas azuis. Duas bolas são retiradas sucessivamente, sem reposição.",
      source: "Original"
    },
    prompt: "Qual é a probabilidade de retirarmos duas bolas de cores diferentes?",
    options: [
      { id: "a", text: "8/15 (53,3%)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "12/25 (48%)", isCorrect: false, distractorRationale: "Calculou COM reposição." },
      { id: "c", text: "4/15 (26,6%)", isCorrect: false, distractorRationale: "Calculou apenas a ordem vermelha-azul, esquecendo azul-vermelha." },
      { id: "d", text: "1/5 (20%)", isCorrect: false, distractorRationale: "Multiplicou as frações incorretamente." },
      { id: "e", text: "1/2 (50%)", isCorrect: false, distractorRationale: "Chute que é metade da chance." }
    ],
    detailedExplanation: {
      summary: "Devemos somar as probabilidades das duas ordens possíveis: (Vermelha e Azul) ou (Azul e Vermelha).",
      stepByStep: [
        "Prob. Vermelha depois Azul: (4/10) * (6/9) = 24/90.",
        "Prob. Azul depois Vermelha: (6/10) * (4/9) = 24/90.",
        "Soma das duas possibilidades = 24/90 + 24/90 = 48/90.",
        "Simplificando 48/90 dividindo por 6: 8/15."
      ],
      coreConcept: "Eventos Sem Reposição",
      trapWarning: "Lembre-se que 'cores diferentes' pode ocorrer em duas ordens."
    },
    commonTraps: ["esquecer permutação de ordem", "considerar reposição"],
    tags: ["urnas", "sem reposicao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-005",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Gráficos e Tabelas",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma pesquisa de satisfação, 200 clientes avaliaram um serviço. Destes, 80 deram nota 'Excelente', 70 deram 'Bom', 30 deram 'Regular' e 20 'Ruim'. Entre as mulheres, que são 100 no total, 50 avaliaram como 'Excelente'.",
      source: "Original"
    },
    prompt: "Sorteando-se ao acaso uma avaliação com nota 'Excelente', qual a probabilidade de ter sido dada por uma mulher?",
    options: [
      { id: "a", text: "62,5%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "50%", isCorrect: false, distractorRationale: "Dividiu mulheres (50) por total de mulheres (100)." },
      { id: "c", text: "40%", isCorrect: false, distractorRationale: "Dividiu o total de excelentes pelo total geral (80/200)." },
      { id: "d", text: "25%", isCorrect: false, distractorRationale: "Dividiu excelentes de mulheres pelo total geral (50/200)." },
      { id: "e", text: "35%", isCorrect: false, distractorRationale: "Fez confusão com as notas de 'Bom'." }
    ],
    detailedExplanation: {
      summary: "Probabilidade restrita: o universo considerado é apenas de avaliações 'Excelente'.",
      stepByStep: [
        "Identifique o novo espaço amostral: o sorteio foi entre as avaliações 'Excelente', ou seja, 80 avaliações.",
        "Identifique os casos favoráveis: dentre essas 80, 50 são de mulheres.",
        "Calcule: 50 / 80 = 5/8.",
        "5/8 em porcentagem é 62,5%."
      ],
      coreConcept: "Restrição do Espaço Amostral",
      trapWarning: "Identifique quem foi selecionado (o denominador da fração)."
    },
    commonTraps: ["erro no denominador"],
    tags: ["tabelas", "probabilidade condicional"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
