export const QUESTIONS_FUNCOES = [
  {
    id: "MAT-FUNC-001",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções",
    subtopic: "Função Afim",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    cityId: "sao-paulo",
    context: {
      supportText: "Uma empresa de transporte por aplicativo cobra um valor fixo por corrida, chamado de taxa de embarque, mais um valor variável por quilômetro rodado. A taxa de embarque é de R$ 5,00 e o valor por quilômetro rodado é de R$ 2,00.",
      source: "Original"
    },
    prompt: "Qual a expressão algébrica que representa o valor total V, em reais, pago por uma corrida de x quilômetros, e qual será o valor de uma viagem de 15 km?",
    options: [
      { id: "a", text: "V(x) = 5x + 2; R$ 77,00", isCorrect: false, distractorRationale: "Inverteu a taxa fixa com o valor por km." },
      { id: "b", text: "V(x) = 2x + 5; R$ 35,00", isCorrect: true, distractorRationale: null },
      { id: "c", text: "V(x) = 7x; R$ 105,00", isCorrect: false, distractorRationale: "Somou os valores como se ambos dependessem da distância." },
      { id: "d", text: "V(x) = 2x; R$ 30,00", isCorrect: false, distractorRationale: "Ignorou a taxa de embarque." },
      { id: "e", text: "V(x) = 5x; R$ 75,00", isCorrect: false, distractorRationale: "Ignorou a taxa variável e multiplicou a distância pela fixa." }
    ],
    detailedExplanation: {
      summary: "A função afim é composta por uma parte fixa e uma variável.",
      stepByStep: [
        "Identifique a parte fixa: R$ 5,00 (taxa de embarque).",
        "Identifique a parte variável: R$ 2,00 por quilômetro (2x).",
        "Monte a equação: V(x) = 2x + 5.",
        "Calcule para x = 15: V(15) = 2(15) + 5 = 30 + 5 = 35."
      ],
      coreConcept: "Modelagem de Função Afim",
      trapWarning: "Cuidado para não inverter os coeficientes linear (fixo) e angular (variável)."
    },
    commonTraps: ["inverter coeficientes"],
    tags: ["funcao afim", "equacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-002",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções",
    subtopic: "Função Quadrática",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A trajetória de um projétil lançado do solo é descrita pela função h(t) = -5t² + 20t, onde h é a altura em metros e t é o tempo em segundos após o lançamento.",
      source: "Original"
    },
    prompt: "Qual a altura máxima atingida pelo projétil e em quanto tempo ele atinge essa altura?",
    options: [
      { id: "a", text: "Altura: 20 m; Tempo: 2 s", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Altura: 40 m; Tempo: 4 s", isCorrect: false, distractorRationale: "Calculou o tempo total de voo e substituiu incorretamente." },
      { id: "c", text: "Altura: 15 m; Tempo: 3 s", isCorrect: false, distractorRationale: "Erro de cálculo aritmético do vértice." },
      { id: "d", text: "Altura: 20 m; Tempo: 4 s", isCorrect: false, distractorRationale: "Usou o tempo de retorno ao solo em vez do vértice." },
      { id: "e", text: "Altura: 10 m; Tempo: 2 s", isCorrect: false, distractorRationale: "Esqueceu do coeficiente do t² no cálculo." }
    ],
    detailedExplanation: {
      summary: "Para encontrar o máximo de uma parábola voltada para baixo, calculamos o vértice.",
      stepByStep: [
        "A função é h(t) = -5t² + 20t. Temos a = -5, b = 20, c = 0.",
        "O tempo para atingir a altura máxima é o t do vértice: t_v = -b/(2a) = -20/(2*(-5)) = 2 segundos.",
        "A altura máxima é o h do vértice. Substituindo t = 2: h(2) = -5(2)² + 20(2) = -20 + 40 = 20 metros."
      ],
      coreConcept: "Vértice da Parábola",
      trapWarning: "Lembre-se que o eixo x do vértice (-b/2a) dá o tempo, e o y do vértice dá a altura."
    },
    commonTraps: ["confundir raízes com vértice"],
    tags: ["funcao quadratica", "vertice"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-003",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções",
    subtopic: "Função Exponencial",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma cultura de bactérias dobra seu número a cada 3 horas. Inicialmente (t = 0), havia 1.000 bactérias.",
      source: "Original"
    },
    prompt: "A expressão que representa a quantidade N de bactérias após t horas e o número após 12 horas são, respectivamente:",
    options: [
      { id: "a", text: "N(t) = 1000 * 2^(t/3); 16.000", isCorrect: true, distractorRationale: null },
      { id: "b", text: "N(t) = 1000 * 2^t; 4.096.000", isCorrect: false, distractorRationale: "Considerou que dobrava a cada hora." },
      { id: "c", text: "N(t) = 1000 * (t/3)²; 16.000", isCorrect: false, distractorRationale: "Usou função polinomial em vez de exponencial." },
      { id: "d", text: "N(t) = 1000 + 2^(t/3); 1.016", isCorrect: false, distractorRationale: "Somou o fator de crescimento invés de multiplicar." },
      { id: "e", text: "N(t) = 1000 * 3^(t/2); 729.000", isCorrect: false, distractorRationale: "Confundiu base (dobrar) com período (3 horas)." }
    ],
    detailedExplanation: {
      summary: "Crescimento populacional que dobra em um intervalo de tempo fixo é modelado por função exponencial.",
      stepByStep: [
        "A base é 2 (dobra).",
        "O expoente deve ser t dividido pelo tempo necessário para dobrar: t/3.",
        "Equação: N(t) = 1000 * 2^(t/3).",
        "Para t = 12: N(12) = 1000 * 2^(12/3) = 1000 * 2^4 = 1000 * 16 = 16.000."
      ],
      coreConcept: "Função Exponencial",
      trapWarning: "Dividir t pelo período é essencial, não apenas usar t como expoente."
    },
    commonTraps: ["expoente sem divisao de periodo"],
    tags: ["exponencial", "bacterias"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-004",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções",
    subtopic: "Gráficos",
    difficulty: 1,
    estimatedTimeSeconds: 90,
    questionType: "graph",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O gráfico de uma função afim f(x) = ax + b passa pelos pontos (0, 3) e (2, 7).",
      source: "Original"
    },
    prompt: "Quais são os valores dos coeficientes a e b, respectivamente?",
    options: [
      { id: "a", text: "2 e 3", isCorrect: true, distractorRationale: null },
      { id: "b", text: "3 e 2", isCorrect: false, distractorRationale: "Inverteu a e b." },
      { id: "c", text: "4 e 3", isCorrect: false, distractorRationale: "Não dividiu o delta y pelo delta x adequadamente." },
      { id: "d", text: "2 e 0", isCorrect: false, distractorRationale: "Assumiu função linear passando pela origem." },
      { id: "e", text: "-2 e 3", isCorrect: false, distractorRationale: "Errou o sinal da taxa de variação." }
    ],
    detailedExplanation: {
      summary: "Podemos achar a e b a partir de dois pontos.",
      stepByStep: [
        "O ponto (0, 3) nos diz que o intercepto y (b) é 3. Então b = 3.",
        "Para encontrar a (taxa de variação), usamos a fórmula (y2 - y1) / (x2 - x1).",
        "a = (7 - 3) / (2 - 0) = 4 / 2 = 2.",
        "Portanto, a = 2 e b = 3."
      ],
      coreConcept: "Coeficientes da Função Afim",
      trapWarning: "Lembre-se que o ponto (0, y) te dá o 'b' imediatamente."
    },
    commonTraps: ["inversao de coeficientes"],
    tags: ["graficos", "funcao afim"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-005",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções",
    subtopic: "Função Quadrática",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um fazendeiro tem 100 metros de cerca para construir um galinheiro retangular aproveitando o muro de sua propriedade (ou seja, ele usará a cerca em apenas 3 dos 4 lados do retângulo).",
      source: "Original"
    },
    prompt: "Quais devem ser as dimensões do galinheiro para que a área seja máxima?",
    options: [
      { id: "a", text: "25m e 50m", isCorrect: true, distractorRationale: null },
      { id: "b", text: "25m e 25m", isCorrect: false, distractorRationale: "Assumiu que o melhor formato seria um quadrado para os 3 lados, gastando 75m ou usando o muro." },
      { id: "c", text: "33,3m e 33,3m", isCorrect: false, distractorRationale: "Dividiu a cerca igualmente nos 3 lados." },
      { id: "d", text: "20m e 60m", isCorrect: false, distractorRationale: "Errou a modelagem da área." },
      { id: "e", text: "50m e 50m", isCorrect: false, distractorRationale: "Ignorou que precisava de dois lados paralelos, somando 150m." }
    ],
    detailedExplanation: {
      summary: "Problema de otimização de área com perímetro fixado em 3 lados usando função quadrática.",
      stepByStep: [
        "Seja x a medida dos dois lados perpendiculares ao muro e y o lado paralelo. Então 2x + y = 100, logo y = 100 - 2x.",
        "A área é A(x) = x*y = x(100 - 2x) = -2x² + 100x.",
        "O valor de x para área máxima é o vértice da parábola: x_v = -b/(2a) = -100/(2*-2) = -100/-4 = 25.",
        "Substituindo para encontrar y: y = 100 - 2(25) = 50.",
        "Dimensões são 25m e 50m."
      ],
      coreConcept: "Maximização de Área",
      trapWarning: "Lembre-se de modelar as variáveis corretamente; não é um retângulo fechado simples."
    },
    commonTraps: ["assumir quadrado"],
    tags: ["funcao quadratica", "otimizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
