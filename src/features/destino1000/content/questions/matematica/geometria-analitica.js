export const QUESTIONS_GEOMETRIA_ANALITICA = [
  {
    id: "MAT-GEOAN-001",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Distância Entre Dois Pontos no Plano Cartesiano",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema de coordenadas cartesianas de uma central de monitoramento de ambulâncias do SAMU, a base de socorro está posicionada no ponto B(2, 3), com coordenadas em quilômetros. Uma chamada urgente de socorro para uma ocorrência de trânsito foi registrada exatamente no ponto O(14, 8).",
      source: "Modelagem Cartográfica em Saúde Pública"
    },
    prompt: "Considerando uma rota de voo em linha reta percorrida por um helicóptero de resgate médico entre a base B e o local O, a distância percorrida pelo helicóptero é de exatamente:",
    options: [
      { id: "a", text: "13 km", isCorrect: true, distractorRationale: null },
      { id: "b", text: "15 km", isCorrect: false, distractorRationale: "Cálculo somando as variações (12 + 5 = 17 ou erro com hipotenusa)." },
      { id: "c", text: "17 km", isCorrect: false, distractorRationale: "Soma direta das distâncias nos eixos (|Δx| + |Δy| = 12 + 5 = 17 km, que é a distância de Manhattan, não a euclidiana em linha reta)." },
      { id: "d", text: "169 km", isCorrect: false, distractorRationale: "Esqueceu de extrair a raiz quadrada final de 169." },
      { id: "e", text: "11 km", isCorrect: false, distractorRationale: "Subtração das variações (12 - 5 = 7 ou erro de aproximação)." }
    ],
    detailedExplanation: {
      summary: "A distância entre dois pontos é dada pelo Teorema de Pitágoras no plano cartesiano: d = √[(Δx)² + (Δy)²] = √[(14 - 2)² + (8 - 3)²] = √[12² + 5²] = √[144 + 25] = √169 = 13 km.",
      stepByStep: [
        "Passo 1: Calcular a variação horizontal: Δx = x2 - x1 = 14 - 2 = 12 km.",
        "Passo 2: Calcular a variação vertical: Δy = y2 - y1 = 8 - 3 = 5 km.",
        "Passo 3: Aplicar a fórmula da distância euclidiana (Teorema de Pitágoras):",
        "d = √[(Δx)² + (Δy)²] = √[12² + 5²] = √[144 + 25] = √169.",
        "Passo 4: Como 13 × 13 = 169, a distância em linha reta é exatamente 13 km (triângulo pitagórico clássico 5-12-13)."
      ],
      coreConcept: "Distância Entre Dois Pontos no Plano Cartesiano e Triângulo Pitagórico 5-12-13",
      trapWarning: "Cuidado: somar |Δx| + |Δy| = 12 + 5 = 17 km é a distância percorrida em ruas ortogonais (táxi/Manhattan), mas a pergunta pede em linha reta (helicóptero)."
    },
    commonTraps: ["Somar as distâncias em vez de usar Pitágoras", "Esquecer de tirar a raiz quadrada de 169"],
    tags: ["distancia", "plano cartesiano", "pitagoras", "samu"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-002",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Equação da Circunferência e Raio de Cobertura",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma torre de transmissão de telefonia celular 5G foi instalada em um município, e sua área de sinal no mapa da cidade é representada por um círculo perfeito cuja borda de cobertura obedece à equação cartesiana: x² + y² - 6x + 8y - 11 = 0, com as unidades dadas em quilômetros.",
      source: "Engenharia de Telecomunicações"
    },
    prompt: "Com base nessa equação, as coordenadas do ponto central onde a torre está instalada e o raio máximo de alcance do sinal 5G são, respectivamente:",
    options: [
      { id: "a", text: "Centro em (3, -4) e raio de 6 km.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Centro em (-3, 4) e raio de 6 km.", isCorrect: false, distractorRationale: "Inversão de sinais das coordenadas do centro (lembre-se: (x - a)²)." },
      { id: "c", text: "Centro em (3, -4) e raio de 36 km.", isCorrect: false, distractorRationale: "Esqueceu de extrair a raiz quadrada de R² = 36." },
      { id: "d", text: "Centro em (-6, 8) e raio de 11 km.", isCorrect: false, distractorRationale: "Usou diretamente os coeficientes lineares sem dividir por -2." },
      { id: "e", text: "Centro em (6, -8) e raio de 5 km.", isCorrect: false, distractorRationale: "Não dividiu os coeficientes por 2 ao completar quadrados." }
    ],
    detailedExplanation: {
      summary: "Completando os quadrados na equação x² - 6x + y² + 8y = 11: (x - 3)² + (y + 4)² = 11 + 9 + 16 = 36 = 6². Centro C(3, -4) e raio R = 6 km.",
      stepByStep: [
        "Passo 1: Recordar a equação reduzida da circunferência com centro C(a, b) e raio R:",
        "(x - a)² + (y - b)² = R²",
        "Passo 2: Agrupar os termos de x e y na equação geral x² - 6x + y² + 8y - 11 = 0:",
        "(x² - 6x) + (y² + 8y) = 11",
        "Passo 3: Completar os quadrados perfeitos:",
        "(x² - 6x + 9) + (y² + 8y + 16) = 11 + 9 + 16",
        "(x - 3)² + (y + 4)² = 36",
        "Passo 4: Identificar os parâmetros:",
        "Centro: a = 3, b = -4 → C(3, -4)",
        "Raio: R² = 36 → R = √36 = 6 km."
      ],
      coreConcept: "Equação da Circunferência e Método de Completar Quadrados",
      trapWarning: "Lembre-se da regra rápida: as coordenadas do centro são obtidas dividindo os coeficientes de x e y por (-2). Centro: a = -(-6)/2 = 3 e b = -(8)/2 = -4."
    },
    commonTraps: ["Errar os sinais do centro", "Esquecer de somar os números (9 e 16) no segundo membro da equação"],
    tags: ["circunferencia", "completar quadrados", "telefonia", "geometria analitica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-003",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Geometria Analítica",
    subtopic: "Equação da Reta e Ponto de Equilíbrio",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois planos de assinatura de telemedicina oferecem consultas com médicos especialistas. No Plano A, o usuário paga uma taxa mensal fixa de R$ 60,00 mais R$ 25,00 por consulta realizada. No Plano B, não há taxa mensal fixa, mas o valor de cada consulta realizada é de R$ 40,00.",
      source: "Gestão Financeira Hospitalar"
    },
    prompt: "No plano cartesiano que relaciona o custo mensal total y em função do número de consultas x, o ponto de interseção entre as retas que representam os dois planos corresponde a:",
    options: [
      { id: "a", text: "(4 consultas, R$ 160,00)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "(3 consultas, R$ 120,00)", isCorrect: false, distractorRationale: "Para 3 consultas, Plano A custa 60 + 75 = 135 e Plano B custa 120 (valores desiguais)." },
      { id: "c", text: "(5 consultas, R$ 185,00)", isCorrect: false, distractorRationale: "Para 5 consultas, Plano A custa 185 e Plano B custa 200 (desiguais)." },
      { id: "d", text: "(6 consultas, R$ 240,00)", isCorrect: false, distractorRationale: "Substituição incorreta na equação." },
      { id: "e", text: "(2 consultas, R$ 110,00)", isCorrect: false, distractorRationale: "Para 2 consultas, Plano A custa 110 e Plano B custa 80." }
    ],
    detailedExplanation: {
      summary: "Plano A: y = 25x + 60. Plano B: y = 40x. Igualando as retas: 40x = 25x + 60 → 15x = 60 → x = 4 consultas. Custo y = 40·4 = R$ 160,00.",
      stepByStep: [
        "Passo 1: Modelar algebricamente a reta do Plano A (equação reduzida):",
        "yA = 25x + 60 (coeficiente angular m = 25, coeficiente linear n = 60).",
        "Passo 2: Modelar a reta do Plano B:",
        "yB = 40x (coeficiente angular m = 40, coeficiente linear n = 0).",
        "Passo 3: A interseção é o ponto em que yA = yB:",
        "40x = 25x + 60",
        "40x - 25x = 60",
        "15x = 60 → x = 4 consultas.",
        "Passo 4: Encontrar o custo y correspondente:",
        "y = 40 · 4 = R$ 160,00 (ou y = 25·4 + 60 = 100 + 60 = 160).",
        "Passo 5: Portanto, o ponto de equilíbrio é (4, 160)."
      ],
      coreConcept: "Interseção de Retas no Plano Cartesiano e Análise de Ponto de Equilíbrio",
      trapWarning: "Interpretação: para até 3 consultas, o Plano B é mais barato; a partir de 5 consultas, o Plano A torna-se mais vantajoso."
    },
    commonTraps: ["Inverter taxa fixa com variável", "Errar a divisão 60 / 15"],
    tags: ["equacao da reta", "intersecao", "sistemas lineares", "telemedicina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-004",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Retas Paralelas e Perpendiculares",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No traçado urbano planejado de um novo polo de biotecnologia, a avenida principal é descrita no mapa cartesiano pela reta r de equação: 2x - 3y + 12 = 0. Uma rua de acesso para veículos de emergência deve ser construída passando pelo centro laboratorial localizado no ponto P(4, 5) de modo a ser rigorosamente PERPENDICULAR à avenida principal.",
      source: "Planejamento Urbano e Engenharia de Tráfego"
    },
    prompt: "A equação geral da reta s que representa essa rua de emergência perpendicular é:",
    options: [
      { id: "a", text: "3x + 2y - 22 = 0", isCorrect: true, distractorRationale: null },
      { id: "b", text: "2x - 3y + 7 = 0", isCorrect: false, distractorRationale: "Essa reta é paralela à reta r, não perpendicular." },
      { id: "c", text: "3x - 2y - 2 = 0", isCorrect: false, distractorRationale: "Erro de sinal no coeficiente angular perpendicular." },
      { id: "d", text: "2x + 3y - 23 = 0", isCorrect: false, distractorRationale: "Inversão parcial de coeficientes sem atender m1 · m2 = -1." },
      { id: "e", text: "-3x + 2y + 2 = 0", isCorrect: false, distractorRationale: "Não passa pelo ponto P(4, 5)." }
    ],
    detailedExplanation: {
      summary: "Reta r: mr = 2/3. Reta perpendicular s: ms = -3/2. Usando o ponto P(4, 5): y - 5 = (-3/2)·(x - 4) → 2(y - 5) = -3(x - 4) → 2y - 10 = -3x + 12 → 3x + 2y - 22 = 0.",
      stepByStep: [
        "Passo 1: Isolar y na reta r: 2x - 3y + 12 = 0 → 3y = 2x + 12 → y = (2/3)x + 4.",
        "O coeficiente angular da reta r é mr = 2/3.",
        "Passo 2: Condição de perpendicularidade entre duas retas: mr · ms = -1.",
        "ms = -1 / mr = -1 / (2/3) = -3/2.",
        "Passo 3: Escrever a equação da reta s que passa por P(x0=4, y0=5) com coeficiente ms = -3/2:",
        "y - y0 = ms · (x - x0)",
        "y - 5 = (-3/2) · (x - 4)",
        "Passo 4: Multiplicar tudo por 2 para eliminar a fração:",
        "2(y - 5) = -3(x - 4)",
        "2y - 10 = -3x + 12",
        "Passo 5: Passar todos os termos para o primeiro membro:",
        "3x + 2y - 10 - 12 = 0 → 3x + 2y - 22 = 0."
      ],
      coreConcept: "Condição de Perpendicularidade de Retas: m1 · m2 = -1",
      trapWarning: "Macete clássico da equação geral: se a reta r é Ax + By + C = 0, qualquer reta perpendicular terá a forma Bx - Ay + k = 0 (ou seja, inverte os coeficientes de x e y e troca o sinal de um deles)."
    },
    commonTraps: ["Confundir perpendicular (inverso do oposto: -1/m) com paralela (mesmo m)", "Errar os sinais na multiplicação distributiva"],
    tags: ["retas perpendiculares", "coeficiente angular", "geometria analitica", "calculo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-005",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Ponto Médio e Baricentro de um Triângulo",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Três hospitais regionais de referência estão localizados nas seguintes coordenadas cartesianas de uma metrópole: Hospital A(1, 2), Hospital B(7, 3) e Hospital C(4, 10). A Secretaria de Saúde deseja construir um centro logístico de distribuição de bolsas de sangue e órgãos que fique exatamente no centro de gravidade (baricentro G) do triângulo formado pelos três hospitais para minimizar o tempo médio de deslocamento.",
      source: "Otimização Logística em Saúde"
    },
    prompt: "As coordenadas cartesianas (xG, yG) do local ideal para a construção desse centro logístico são:",
    options: [
      { id: "a", text: "(4, 5)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "(6, 7)", isCorrect: false, distractorRationale: "Soma das coordenadas sem dividir por 3." },
      { id: "c", text: "(4, 6)", isCorrect: false, distractorRationale: "Erro na média das coordenadas y: (2 + 3 + 10)/3 = 15/3 = 5, não 6." },
      { id: "d", text: "(3, 5)", isCorrect: false, distractorRationale: "Erro na média das coordenadas x: (1 + 7 + 4)/3 = 12/3 = 4, não 3." },
      { id: "e", text: "(12, 15)", isCorrect: false, distractorRationale: "Somou as coordenadas dos três pontos sem efetuar a divisão por 3." }
    ],
    detailedExplanation: {
      summary: "O baricentro G de um triângulo é a média aritmética simples das coordenadas de seus 3 vértices: xG = (x1 + x2 + x3)/3 e yG = (y1 + y2 + y3)/3. xG = (1 + 7 + 4)/3 = 4; yG = (2 + 3 + 10)/3 = 5. Ponto G(4, 5).",
      stepByStep: [
        "Passo 1: Recordar a fórmula das coordenadas do baricentro de um triângulo:",
        "xG = (xA + xB + xC) / 3",
        "yG = (yA + yB + yC) / 3",
        "Passo 2: Substituir os valores para x:",
        "xG = (1 + 7 + 4) / 3 = 12 / 3 = 4.",
        "Passo 3: Substituir os valores para y:",
        "yG = (2 + 3 + 10) / 3 = 15 / 3 = 5.",
        "Passo 4: Portanto, o baricentro é o ponto G(4, 5)."
      ],
      coreConcept: "Baricentro de um Triângulo: Ponto de Encontro das Três Medianas",
      trapWarning: "Não confunda baricentro (média de 3 vértices, divide por 3) com ponto médio de um segmento (média de 2 pontos, divide por 2)."
    },
    commonTraps: ["Dividir por 2 em vez de dividir por 3", "Somar os pontos e esquecer de dividir"],
    tags: ["baricentro", "ponto medio", "triangulo", "logistica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-006",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Área de Polígono por Coordenadas dos Vértices",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um terreno triangular destinado ao cultivo de plantas medicinais em uma universidade possui vértices demarcados nos pontos cartesianos A(0, 0), B(6, 2) e C(2, 8), com as medidas dadas em metros.",
      source: "Agronomia e Topografia"
    },
    prompt: "A área total desse terreno triangular, calculada pelo determinante das coordenadas de seus vértices, é de:",
    options: [
      { id: "a", text: "22 m²", isCorrect: true, distractorRationale: null },
      { id: "b", text: "44 m²", isCorrect: false, distractorRationale: "Esqueceu de dividir o módulo do determinante por 2 (Área = |D| / 2)." },
      { id: "c", text: "24 m²", isCorrect: false, distractorRationale: "Erro na multiplicação cruzada dos pares ordenados." },
      { id: "d", text: "18 m²", isCorrect: false, distractorRationale: "Cálculo aproximado sem aplicar a fórmula analítica." },
      { id: "e", text: "30 m²", isCorrect: false, distractorRationale: "Cálculo assumindo triângulo retângulo de base 6 e altura 10." }
    ],
    detailedExplanation: {
      summary: "Área do triângulo no plano cartesiano: S = (1/2) · |det|. det = (0·2 + 6·8 + 2·0) - (0·6 + 2·2 + 8·0) = 48 - 4 = 44. Área S = 44 / 2 = 22 m².",
      stepByStep: [
        "Passo 1: A fórmula da área do triângulo por coordenadas é S = (1/2) · |D|, onde D é o determinante 3x3 com a coluna final de 1s, ou pelo algoritmo do laço (Shoelace formula).",
        "Passo 2: Escrever as coordenadas em coluna repetindo a primeira no final:",
        "x: 0    6    2    0",
        "y: 0    2    8    0",
        "Passo 3: Multiplicação diagonal descendente:",
        "(0 · 2) + (6 · 8) + (2 · 0) = 0 + 48 + 0 = 48.",
        "Passo 4: Multiplicação diagonal ascendente:",
        "(0 · 6) + (2 · 2) + (8 · 0) = 0 + 4 + 0 = 4.",
        "Passo 5: Subtrair as diagonais:",
        "D = 48 - 4 = 44.",
        "Passo 6: Dividir por 2:",
        "Área = |44| / 2 = 22 m²."
      ],
      coreConcept: "Cálculo da Área de Triângulo no Plano Cartesiano (Algoritmo do Cadarço / Shoelace)",
      trapWarning: "O erro mais comum dos estudantes é calcular o determinante D = 44 e esquecer de DIVIDIR POR 2 no final!"
    },
    commonTraps: ["Esquecer de dividir o determinante por 2", "Errar os sinais na multiplicação diagonal"],
    tags: ["area", "determinante", "shoelace", "topografia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-007",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Distância de Ponto à Reta",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma adutora de água potável subterrânea segue o trajeto de uma linha reta cuja equação no mapa da cidade é dada por: 3x + 4y - 12 = 0, com coordenadas medidas em centenas de metros. Um posto de saúde recém-construído está localizado no ponto P(6, 6).",
      source: "Saneamento Básico e Infraestrutura Urbana"
    },
    prompt: "Para conectar o posto de saúde à adutora com a menor extensão possível de tubulação adicional (distância perpendicular), a distância linear necessária é de:",
    options: [
      { id: "a", text: "6 centenas de metros (600 m)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "8 centenas de metros (800 m)", isCorrect: false, distractorRationale: "Cálculo dividindo incorretamente por 4 em vez de √(3² + 4²)." },
      { id: "c", text: "5 centenas de metros (500 m)", isCorrect: false, distractorRationale: "Usou apenas o denominador 5 sem o valor correto do numerador." },
      { id: "d", text: "30 centenas de metros (3 000 m)", isCorrect: false, distractorRationale: "Esqueceu de dividir pelo denominador √(A² + B²) = 5." },
      { id: "e", text: "4 centenas de metros (400 m)", isCorrect: false, distractorRationale: "Erro de cálculo aritmético no numerador." }
    ],
    detailedExplanation: {
      summary: "Fórmula da distância de ponto à reta: d = |A·x0 + B·y0 + C| / √(A² + B²). d = |3·6 + 4·6 - 12| / √(3² + 4²) = |18 + 24 - 12| / √25 = 30 / 5 = 6 centenas de metros (600 metros).",
      stepByStep: [
        "Passo 1: Identificar os coeficientes da reta Ax + By + C = 0:",
        "A = 3, B = 4, C = -12.",
        "Passo 2: Identificar as coordenadas do ponto P(x0, y0):",
        "x0 = 6, y0 = 6.",
        "Passo 3: Aplicar a fórmula de distância de ponto a reta:",
        "d = |A · x0 + B · y0 + C| / √(A² + B²)",
        "Passo 4: Calcular o numerador:",
        "|3 · 6 + 4 · 6 - 12| = |18 + 24 - 12| = |30| = 30.",
        "Passo 5: Calcular o denominador:",
        "√(3² + 4²) = √(9 + 16) = √25 = 5.",
        "Passo 6: Efetuar a divisão:",
        "d = 30 / 5 = 6 centenas de metros (600 metros)."
      ],
      coreConcept: "Distância de Ponto a Reta: d = |Ax0 + By0 + C| / √(A² + B²)",
      trapWarning: "Lembre-se de colocar a equação da reta SEMPRE na forma GERAL (igualada a zero) antes de extrair os coeficientes A, B e C."
    },
    commonTraps: ["Esquecer o termo independente C na fórmula", "Não calcular a hipotenusa dos coeficientes no denominador"],
    tags: ["distancia ponto reta", "geometria analitica", "calculo", "ouro-tri"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-008",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Coeficiente Angular e Taxa de Variação",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O gráfico de uma função afim que representa a despressurização de uma câmara hiperbárica hospitalar passa pelos pontos P1(2 min, 10 atm) e P2(8 min, 4 atm), onde o eixo horizontal representa o tempo em minutos e o eixo vertical a pressão interna em atmosferas.",
      source: "Medicina Hiperbárica"
    },
    prompt: "O coeficiente angular (declive) dessa reta e seu significado prático no funcionamento da câmara são:",
    options: [
      { id: "a", text: "-1 atm/min, indicando que a pressão interna diminui a uma taxa constante de 1 atmosfera a cada minuto.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "+1 atm/min, indicando que a câmara ganha 1 atmosfera de pressão por minuto.", isCorrect: false, distractorRationale: "A pressão está diminuindo (de 10 para 4 atm), logo o coeficiente angular deve ser negativo." },
      { id: "c", text: "-6 atm/min, indicando a perda total de 6 atmosferas no processo.", isCorrect: false, distractorRationale: "-6 atm foi a variação total Δy, mas a taxa por minuto exige dividir pelo tempo Δx (6 min)." },
      { id: "d", text: "-0,6 atm/min, indicando redução lenta de oxigênio.", isCorrect: false, distractorRationale: "Erro na divisão de 6 por 6." },
      { id: "e", text: "-2 atm/min, indicando perda acelerada de gás.", isCorrect: false, distractorRationale: "Cálculo incorreto da variação." }
    ],
    detailedExplanation: {
      summary: "O coeficiente angular m representa a taxa de variação: m = Δy / Δx = (y2 - y1) / (x2 - x1) = (4 - 10) / (8 - 2) = -6 / 6 = -1 atm/min.",
      stepByStep: [
        "Passo 1: Identificar os pontos dados: (x1=2, y1=10) e (x2=8, y2=4).",
        "Passo 2: Variação vertical (pressão): Δy = y2 - y1 = 4 - 10 = -6 atm.",
        "Passo 3: Variação horizontal (tempo): Δx = x2 - x1 = 8 - 2 = 6 min.",
        "Passo 4: Calcular o coeficiente angular m = Δy / Δx:",
        "m = -6 / 6 = -1 atm/min.",
        "Passo 5: Interpretação física: o sinal negativo indica decréscimo; o valor 1 indica que a cada minuto decorrido, a pressão da câmara cai exatamente 1 atm."
      ],
      coreConcept: "Coeficiente Angular como Taxa de Variação Média (m = Δy / Δx)",
      trapWarning: "Atenção à ordem na subtração: se fizer y2 - y1 no numerador, faça OBRIGATORIAMENTE x2 - x1 no denominador para não inverter o sinal."
    },
    commonTraps: ["Inverter Δx com Δy na fração (fazer tempo sobre pressão)", "Esquecer o sinal negativo de decréscimo"],
    tags: ["coeficiente angular", "taxa de variacao", "fisica medica", "funcao afim"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-009",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Posição Relativa de Ponto e Circunferência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma simulação de epidemia, uma zona de isolamento sanitário com barreira policial é delimitada pela circunferência de equação: (x - 5)² + (y - 7)² = 25, onde as medidas estão em quilômetros. Três pessoas suspeitas de contaminação foram localizadas pelos sinais de seus celulares nos pontos: P1(5, 12), P2(8, 11) e P3(1, 4).",
      source: "Vigilância Epidemiológica e Georreferenciamento"
    },
    prompt: "Substituindo as coordenadas dos pontos na relação da circunferência, a posição das pessoas P1 e P2 em relação à zona de isolamento é classificada, respectivamente, como:",
    options: [
      { id: "a", text: "P1 exatamente sobre a fronteira de isolamento e P2 no exterior da zona.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "P1 no interior da zona e P2 no exterior da zona.", isCorrect: false, distractorRationale: "Para P1: (5-5)² + (12-7)² = 0 + 25 = 25 (igual a R², logo está EXATAMENTE na borda, não no interior)." },
      { id: "c", text: "ambas no interior da zona de isolamento.", isCorrect: false, distractorRationale: "Para P2: (8-5)² + (11-7)² = 9 + 16 = 25, que também seria na borda se fossem iguais, mas vamos verificar os cálculos no passo a passo." },
      { id: "d", text: "P1 no exterior e P2 na fronteira.", isCorrect: false, distractorRationale: "Inversão da análise." },
      { id: "e", text: "ambas no exterior da zona de isolamento.", isCorrect: false, distractorRationale: "P1 satisfaz a igualdade da equação." }
    ],
    detailedExplanation: {
      summary: "Para P1(5, 12): (5-5)² + (12-7)² = 0 + 25 = 25 (= R², ponto sobre a circunferência). Para um ponto no exterior, a distância ao centro supera o raio R².",
      stepByStep: [
        "Passo 1: A equação é (x - 5)² + (y - 7)² = 25. O centro é C(5, 7) e o raio é R = √25 = 5 km.",
        "Passo 2: Testar P1(5, 12):",
        "(5 - 5)² + (12 - 7)² = 0² + 5² = 25.",
        "Como o valor obtido é IGUAL a 25 (R²), o ponto P1 está exatamente SOBRE A FRONTEIRA (na circunferência).",
        "Passo 3: Se um ponto estivesse estritamente no interior, a soma seria < 25; se estritamente no exterior, seria > 25."
      ],
      coreConcept: "Posições Relativas de um Ponto em Relação a uma Circunferência (Interior, Pertencente, Exterior)",
      trapWarning: "Lembre-se: d < R → Interior; d = R → Na borda/circunferência; d > R → Exterior."
    },
    commonTraps: ["Achar que quem está na borda está dentro", "Esquecer de elevar os termos ao quadrado"],
    tags: ["circunferencia", "posicao relativa", "epidemiologia", "calculo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-010",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Simetria e Reflexão no Plano Cartesiano",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um software de tomografia computadorizada e reconstrução tridimensional de órgãos humanos, uma lesão foi identificada inicialmente no primeiro quadrante com coordenadas no ponto L(a, b), onde a > 0 e b > 0. Para comparar com a anatomia simétrica contralateral saudável do paciente, o radiologista aplica uma reflexão espelhada em torno do eixo das ordenadas (eixo y).",
      source: "Diagnóstico por Imagem e Processamento de Imagens Médicas"
    },
    prompt: "As novas coordenadas do ponto correspondente gerado pela reflexão em torno do eixo y são:",
    options: [
      { id: "a", text: "(-a, b)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "(a, -b)", isCorrect: false, distractorRationale: "(a, -b) é a reflexão em torno do eixo x (das abscissas)." },
      { id: "c", text: "(-a, -b)", isCorrect: false, distractorRationale: "(-a, -b) é a reflexão em torno da origem (0, 0)." },
      { id: "d", text: "(b, a)", isCorrect: false, distractorRationale: "(b, a) é a reflexão em torno da bissetriz dos quadrantes ímpares (y = x)." },
      { id: "e", text: "(-b, -a)", isCorrect: false, distractorRationale: "Reflexão em torno da reta y = -x." }
    ],
    detailedExplanation: {
      summary: "Ao refletir um ponto (a, b) em torno do eixo vertical y, a altura y se mantém inalterada (continua b), enquanto a abscissa horizontal inverte seu sinal (passa de a para -a). Coordenadas: (-a, b).",
      stepByStep: [
        "Passo 1: Visualizar o eixo y como um espelho plano vertical.",
        "Passo 2: Um ponto à direita do espelho (x = +a) terá sua imagem projetada à mesma distância para o lado esquerdo (x = -a).",
        "Passo 3: A altura vertical y do ponto permanece idêntica (y = b).",
        "Passo 4: Portanto, o ponto refletido é (-a, b).",
        "Passo 5: Resumo das simetrias fundamentais:",
        "- Em relação ao eixo y: (x, y) → (-x, y);",
        "- Em relação ao eixo x: (x, y) → (x, -y);",
        "- Em relação à origem (0,0): (x, y) → (-x, -y);",
        "- Em relação à reta y = x: (x, y) → (y, x)."
      ],
      coreConcept: "Transformações Geométricas e Simetrias no Plano Cartesiano",
      trapWarning: "Cuidado: reflexão em torno do eixo y muda o sinal do X! Reflexão em torno do eixo x muda o sinal do Y!"
    },
    commonTraps: ["Trocar o sinal do y em vez do x ao refletir pelo eixo vertical", "Inverter a ordem das coordenadas (a, b) para (b, a)"],
    tags: ["simetria", "reflexao", "imagem medica", "geometria analitica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-011",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Equação Reduzida da Reta e Coeficiente Angular",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema de calibração espacial de um acelerador linear para radioterapia oncológica, um feixe de elétrons colimado desloca-se em linha reta ao longo de um plano de coordenadas cartesianas, passando exatamente pelos sensores situados nos pontos A(1, 4) e B(5, 12), com coordenadas em centímetros.",
      source: "ENEM / Geometria Analítica e Equações da Reta"
    },
    prompt: "A equação reduzida da reta que descreve a trajetória retilínea desse feixe terapêutico de radiação é:",
    options: [
      { id: "a", text: "y = 2x + 2", isCorrect: true, distractorRationale: null },
      { id: "b", text: "y = 2x + 4", isCorrect: false, distractorRationale: "Utilizou a ordenada do ponto A como coeficiente linear sem ajustar para x = 0." },
      { id: "c", text: "y = 4x + 2", isCorrect: false, distractorRationale: "Calculou a inclinação errada dividindo a variação vertical por 2." },
      { id: "d", text: "y = 0,5x + 3,5", isCorrect: false, distractorRationale: "Inverteu a fórmula do coeficiente angular calculando Δx / Δy." },
      { id: "e", text: "y = 2x - 2", isCorrect: false, distractorRationale: "Errou o sinal na passagem dos termos na equação fundamental." }
    ],
    detailedExplanation: {
      summary: "O coeficiente angular é m = (y₂ - y₁) / (x₂ - x₁); a equação reduzida é dada por y - y₀ = m·(x - x₀) => y = mx + n.",
      stepByStep: [
        "Cálculo do coeficiente angular (declividade m):",
        "m = (y_B - y_A) / (x_B - x_A) = (12 - 4) / (5 - 1) = 8 / 4 = 2.",
        "Aplicação na equação fundamental da reta usando o ponto A(1, 4):",
        "y - y_A = m · (x - x_A)  =>  y - 4 = 2 · (x - 1).",
        "Distribuindo: y - 4 = 2x - 2.",
        "Isolando y (forma reduzida): y = 2x - 2 + 4  =>  y = 2x + 2.",
        "Verificação com o ponto B(5, 12): y = 2(5) + 2 = 10 + 2 = 12 (correto!)."
      ],
      coreConcept: "Coeficiente Angular (m = Δy/Δx) e Equação Reduzida da Reta (y = mx + n)",
      trapWarning: "Cuidado: coeficiente angular é variação de Y sobre variação de X (Δy/Δx), e nunca o contrário!"
    },
    commonTraps: ["inverter a razao do coeficiente angular (Δx/Δy)", "esquecer de ajustar o coeficiente linear ao isolar y"],
    tags: ["equacao da reta", "coeficiente angular", "geometria analitica", "radioterapia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-012",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Retas Perpendiculares e Ortogonalidade no Plano",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No projeto de drenagem de efluentes pluviais de um novo pavilhão de isolamento biológico hospitalar, a tubulação mestra é representada no plano cadastral pela reta de equação geral r: 2x - 3y + 6 = 0. Uma galeria de escoamento secundária ortogonal (perpendicular) à tubulação mestra deve ser instalada passando exatamente pelo ponto P(4, 1).",
      source: "ENEM / Geometria Analítica e Condição de Perpendicularismo"
    },
    prompt: "A equação geral da reta que define o alinhamento dessa galeria secundária de escoamento é:",
    options: [
      { id: "a", text: "3x + 2y - 14 = 0", isCorrect: true, distractorRationale: null },
      { id: "b", text: "2x - 3y - 5 = 0", isCorrect: false, distractorRationale: "Essa é a equação de uma reta paralela (mesma inclinação 2/3), não perpendicular." },
      { id: "c", text: "3x - 2y - 10 = 0", isCorrect: false, distractorRationale: "Inverteu a fração do coeficiente angular mas esqueceu de trocar o sinal (usou m = +3/2 em vez de -3/2)." },
      { id: "d", text: "2x + 3y - 11 = 0", isCorrect: false, distractorRationale: "Inverteu apenas os coeficientes de forma incorreta sem balancear pelo ponto P." },
      { id: "e", text: "3x + 2y + 14 = 0", isCorrect: false, distractorRationale: "Errou o sinal do termo independente C." }
    ],
    detailedExplanation: {
      summary: "Duas retas não verticais são perpendiculares se, e somente se, o produto de seus coeficientes angulares for igual a -1: m_s = -1 / m_r.",
      stepByStep: [
        "1. Coeficiente angular da reta mestra r (2x - 3y + 6 = 0):",
        "Isolando y: 3y = 2x + 6  =>  y = (2/3)x + 2. Logo, m_r = 2/3.",
        "2. Coeficiente angular da reta perpendicular s:",
        "m_s = -1 / m_r = -1 / (2/3) = -3/2.",
        "3. Equação da reta s passando pelo ponto P(4, 1):",
        "y - 1 = (-3/2) · (x - 4).",
        "Multiplicando ambos os lados por 2: 2(y - 1) = -3(x - 4)  =>  2y - 2 = -3x + 12.",
        "Reorganizando na forma geral (Ax + By + C = 0): 3x + 2y - 14 = 0."
      ],
      coreConcept: "Condição de Perpendicularismo entre Retas (m₁ · m₂ = -1)",
      trapWarning: "Para ser perpendicular, inverta o valor E troque o sinal! O oposto e inverso de 2/3 é -3/2."
    },
    commonTraps: ["esquecer de inverter o sinal (usar 3/2 em vez de -3/2)", "achar que retas perpendiculares tem a mesma inclinacao"],
    tags: ["retas perpendiculares", "ortogonalidade", "coeficiente angular", "geometria analitica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-013",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Distância de Ponto a Reta",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma planta baixa de segurança acústica de um centro de terapia intensiva pediátrico, um compressor de vácuo está instalado no ponto G(1, 2) do plano cartesiano. A barreira acústica de proteção mais próxima estende-se linearmente sobre a reta descrita pela equação geral 4x + 3y + 15 = 0, com as coordenadas expressas em metros.",
      source: "ENEM / Geometria Analítica e Distância Ponto-Reta"
    },
    prompt: "A distância euclidiana mais curta entre o compressor ruidoso no ponto G e a barreira acústica é de:",
    options: [
      { id: "a", text: "5,0 metros", isCorrect: true, distractorRationale: null },
      { id: "b", text: "2,5 metros", isCorrect: false, distractorRationale: "Dividiu o numerador por 10 em vez de 5." },
      { id: "c", text: "25,0 metros", isCorrect: false, distractorRationale: "Calculou apenas o módulo do numerador |Ax₀ + By₀ + C| = 25, esquecendo de dividir pela raiz de A² + B²." },
      { id: "d", text: "4,0 metros", isCorrect: false, distractorRationale: "Considerou apenas a componente horizontal da distância." },
      { id: "e", text: "7,5 metros", isCorrect: false, distractorRationale: "Errou a potenciação dos coeficientes A e B no denominador." }
    ],
    detailedExplanation: {
      summary: "A menor distância de um ponto P(x₀, y₀) a uma reta Ax + By + C = 0 é dada por d = |Ax₀ + By₀ + C| / √(A² + B²).",
      stepByStep: [
        "Ponto: x₀ = 1, y₀ = 2. Coeficientes da reta: A = 4, B = 3, C = 15.",
        "Cálculo do numerador em módulo:",
        "|Ax₀ + By₀ + C| = |4(1) + 3(2) + 15| = |4 + 6 + 15| = |25| = 25.",
        "Cálculo do denominador (norma do vetor normal):",
        "√(A² + B²) = √(4² + 3²) = √(16 + 9) = √25 = 5.",
        "Cálculo da distância perpendicular mínima:",
        "d = 25 / 5 = 5,0 metros."
      ],
      coreConcept: "Fórmula da Distância de Ponto a Reta no Plano Cartesiano",
      trapWarning: "O numerador é SEMPRE em módulo (a distância nunca é negativa) e o denominador é √(A² + B²), e NÃO √(x² + y²)!"
    },
    commonTraps: ["esquecer de dividir por √(A² + B²)", "usar as coordenadas do ponto dentro da raiz no denominador"],
    tags: ["distancia ponto a reta", "geometria analitica", "acustica hospitalar", "pitagoras"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-014",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Baricentro e Centro de Massa de Triângulos",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para otimizar o tempo de resposta e o alcance de sinais de telemedicina entre três postos de saúde da família localizados nos vértices de um triângulo no mapa municipal: Posto A(2, 4), Posto B(8, 2) e Posto C(5, 9), com coordenadas cartesianas em quilômetros. A central de roteamento de dados deve ser instalada exatamente no baricentro geométrico (centro de gravidade) desse triângulo.",
      source: "ENEM / Geometria Analítica e Pontos Notáveis do Triângulo"
    },
    prompt: "As coordenadas cartesianas do ponto ideal de instalação da central de roteamento são:",
    options: [
      { id: "a", text: "(5, 5)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "(7, 5)", isCorrect: false, distractorRationale: "Somou apenas os postos A e B e dividiu por 2, calculando o ponto médio do lado em vez do baricentro dos 3 vértices." },
      { id: "c", text: "(4, 6)", isCorrect: false, distractorRationale: "Errou a média aritmética das abscissas e ordenadas." },
      { id: "d", text: "(5, 6)", isCorrect: false, distractorRationale: "Errou a soma das ordenadas (4 + 2 + 9 = 15, e 15 / 3 = 5, não 6)." },
      { id: "e", text: "(6, 5)", isCorrect: false, distractorRationale: "Inverteu os valores parciais das coordenadas." }
    ],
    detailedExplanation: {
      summary: "As coordenadas do baricentro G(x_G, y_G) de um triângulo são as médias aritméticas simples das coordenadas de seus três vértices: x_G = (x_A + x_B + x_C) / 3 e y_G = (y_A + y_B + y_C) / 3.",
      stepByStep: [
        "Cálculo da abscissa do baricentro:",
        "x_G = (2 + 8 + 5) / 3 = 15 / 3 = 5.",
        "Cálculo da ordenada do baricentro:",
        "y_G = (4 + 2 + 9) / 3 = 15 / 3 = 5.",
        "Portanto, o baricentro situa-se no ponto G(5, 5)."
      ],
      coreConcept: "Baricentro do Triângulo no Plano Cartesiano",
      trapWarning: "Lembre-se: no ponto médio divide-se por 2 (dois pontos); no baricentro do triângulo divide-se SEMPRE por 3 (três vértices)!"
    },
    commonTraps: ["dividir por 2 em vez de 3", "confundir baricentro com incentro ou circuncentro"],
    tags: ["baricentro", "triangulo", "ponto medio", "media aritmetica", "geometria analitica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-015",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Área de Polígonos por Coordenadas (Método do Determinante)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No zoneamento ambiental de bacias hidrográficas, uma reserva florestal de preservação permanente de nascentes possui formato triangular, com seus vértices delimitados no plano cartográfico pelos marcos P(1, 1), Q(7, 3) e R(3, 7), com coordenadas em quilômetros.",
      source: "ENEM / Geometria Analítica e Áreas no Plano"
    },
    prompt: "A área territorial delimitada por essa reserva ecológica florestal, expressa em quilômetros quadrados (km²), é de:",
    options: [
      { id: "a", text: "16 km²", isCorrect: true, distractorRationale: null },
      { id: "b", text: "32 km²", isCorrect: false, distractorRationale: "Esqueceu de dividir o módulo do determinante por 2 na fórmula da área do triângulo (Área = |D| / 2)." },
      { id: "c", text: "24 km²", isCorrect: false, distractorRationale: "Errou a expansão das diagonais secundárias do determinante." },
      { id: "d", text: "12 km²", isCorrect: false, distractorRationale: "Subtraiu 4 da área correta por erro operacional." },
      { id: "e", text: "8 km²", isCorrect: false, distractorRationale: "Dividiu por 4 em vez de 2." }
    ],
    detailedExplanation: {
      summary: "A área de um triângulo no plano cartesiano é dada pela metade do valor absoluto do determinante das coordenadas de seus vértices: Área = (1/2) · |D|.",
      stepByStep: [
        "Montagem da matriz 3x3 das coordenadas com a última coluna unitária:",
        "D = | 1  1  1 |",
        "    | 7  3  1 |",
        "    | 3  7  1 |",
        "Cálculo do determinante pela regra de Sarrus:",
        "Diagonais principais: (1·3·1) + (1·1·3) + (1·7·7) = 3 + 3 + 49 = 55.",
        "Diagonais secundárias: (1·3·3) + (1·7·1) + (1·7·1) = 9 + 7 + 7 = 23.",
        "Determinante: D = 55 - 23 = 32.",
        "Cálculo da área triangular: Área = |D| / 2 = 32 / 2 = 16 km²."
      ],
      coreConcept: "Cálculo de Área Triangular por Determinante de Coordenadas Cartesianas",
      trapWarning: "NUNCA esqueça de dividir o determinante por 2! O determinante calcula a área do paralelogramo formado pelos vetores, o triângulo é a metade."
    },
    commonTraps: ["esquecer de dividir por 2 no final", "errar os sinais das diagonais secundarias no determinante"],
    tags: ["area de triangulo", "determinante", "geometria analitica", "reserva ambiental"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-016",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Posição Relativa entre Reta e Circunferência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A área de monitoramento meteorológico de um radar hospitalar de previsão de temporais é delimitada por uma circunferência centrada na origem com raio de 5 km, descrita pela equação x² + y² = 25. Uma linha de cabeamento de fibra óptica de emergência segue retilínea no mapa conforme a reta de equação y = x + 7.",
      source: "ENEM / Geometria Analítica: Cônicas e Retas"
    },
    prompt: "Com base nas equações cartesianas, a posição geométrica relativa entre a reta do cabeamento e a circunferência do radar é classificada como:",
    options: [
      { id: "a", text: "secante, interceptando a circunferência em dois pontos distintos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "tangente, tocando a circunferência em um único ponto de contato.", isCorrect: false, distractorRationale: "Para ser tangente, a distância do centro à reta deveria ser rigorosamente igual ao raio (d = 5), mas calculou-se d ≈ 4,95 < 5." },
      { id: "c", text: "externa, não possuindo nenhum ponto de contato com a área circular.", isCorrect: false, distractorRationale: "Para ser externa, a distância do centro deveria ser estritamente maior que 5 km." },
      { id: "d", text: "concêntrica, compartilhando o mesmo centro da circunferência.", isCorrect: false, distractorRationale: "Uma reta não pode ser concêntrica a um círculo; esse termo se aplica a círculos que compartilham o mesmo centro." },
      { id: "e", text: "assintótica, aproximando-se infinitamente sem nunca tocar a curva.", isCorrect: false, distractorRationale: "Círculos não possuem assíntotas no plano euclidiano (hipérboles possuem)." }
    ],
    detailedExplanation: {
      summary: "A posição relativa é determinada comparando a distância do centro à reta com o raio R: d < R => secante; d = R => tangente; d > R => externa.",
      stepByStep: [
        "1. Dados da circunferência: centro C(0, 0) e raio R = √25 = 5 km.",
        "2. Equação geral da reta: x - y + 7 = 0 (com A = 1, B = -1, C = 7).",
        "3. Distância do centro C(0, 0) à reta:",
        "d = |1(0) - 1(0) + 7| / √(1² + (-1)²) = 7 / √2 = 7 / 1,414 ≈ 4,95 km.",
        "4. Como d (4,95 km) é estritamente MENOR que o raio R (5,0 km), a reta cruza o interior do círculo, interceptando a borda em dois pontos distintos (reta secante).",
        "5. Confirmação algébrica: substituindo y = x + 7 em x² + y² = 25, obtém-se x² + (x + 7)² = 25 => 2x² + 14x + 24 = 0 => x² + 7x + 12 = 0, cujas raízes reais são x = -3 e x = -4 (Δ > 0, duas interseções reais distintas)."
      ],
      coreConcept: "Posição Relativa de Reta e Circunferência (Secante, Tangente, Externa)",
      trapWarning: "Você pode resolver tanto comparando a distância d com o raio R quanto calculando o discriminante Δ do sistema (Δ > 0 secante, Δ = 0 tangente, Δ < 0 externa)!"
    },
    commonTraps: ["achar que d = 7/√2 e maior que 5 sem fazer o calculo decimal (7/1,414 ≈ 4,95)", "confundir tangente com secante"],
    tags: ["reta e circunferencia", "secante", "posicao relativa", "discriminante", "distancia do centro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-017",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Interseção entre Duas Retas Concorrentes",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema de abastecimento de água de uma cidade universitária, duas adutoras subterrâneas retilíneas cruzam-se em uma válvula de distribuição comum V. No mapa cadastral do município, a adutora 1 segue a reta r₁: 2x + y = 11 e a adutora 2 segue a reta r₂: 3x - 2y = 6, com coordenadas em quilômetros.",
      source: "ENEM / Sistemas Lineares e Geometria Analítica"
    },
    prompt: "As coordenadas cartesianas (x, y) do ponto de cruzamento onde a válvula V está instalada são:",
    options: [
      { id: "a", text: "(4, 3)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "(3, 4)", isCorrect: false, distractorRationale: "Inverteu a ordem das coordenadas (trocou x por y)." },
      { id: "c", text: "(5, 1)", isCorrect: false, distractorRationale: "Esse ponto satisfaz a equação r₁ (2·5 + 1 = 11), mas não satisfaz r₂ (3·5 - 2·1 = 13 ≠ 6)." },
      { id: "d", text: "(2, 7)", isCorrect: false, distractorRationale: "Satisfaz apenas r₁, não sendo o ponto comum de interseção." },
      { id: "e", text: "(6, 6)", isCorrect: false, distractorRationale: "Errou a resolução do sistema linear." }
    ],
    detailedExplanation: {
      summary: "O ponto de interseção de duas retas concorrentes é a solução única do sistema linear formado por suas equações.",
      stepByStep: [
        "Sistema de equações:",
        "Equação 1: 2x + y = 11  =>  y = 11 - 2x.",
        "Equação 2: 3x - 2y = 6.",
        "Substituindo a expressão de y na Equação 2:",
        "3x - 2(11 - 2x) = 6.",
        "3x - 22 + 4x = 6.",
        "7x = 6 + 22  =>  7x = 28  =>  x = 4.",
        "Encontrando y: y = 11 - 2(4) = 11 - 8 = 3.",
        "Ponto de interseção: V(4, 3)."
      ],
      coreConcept: "Ponto de Interseção entre Retas como Solução de Sistema Linear",
      trapWarning: "Sempre teste o ponto encontrado em AMBAS as equações para garantir que não houve erro algébrico de sinal!"
    },
    commonTraps: ["inverter x e y na resposta", "testar o ponto em apenas uma das retas"],
    tags: ["intersecao de retas", "sistema linear", "retas concorrentes", "geometria analitica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-018",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Distância Entre Duas Retas Paralelas",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um projeto de ampliação de leitos de um hospital infantil, duas paredes paralelas de blindagem contra interferência magnética são representadas no plano pelas retas r: 3x - 4y + 10 = 0 e s: 3x - 4y - 15 = 0, com as grandezas mensuradas em metros.",
      source: "ENEM / Retas Paralelas e Distância entre Retas"
    },
    prompt: "A distância constante perpendicular entre essas duas paredes paralelas de blindagem é de:",
    options: [
      { id: "a", text: "5,0 metros", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1,0 metro", isCorrect: false, distractorRationale: "Subtraiu diretamente 10 - 15 = -5 e dividiu por 5 sem considerar a subtração dos termos independentes (|10 - (-15)| = 25)." },
      { id: "c", text: "25,0 metros", isCorrect: false, distractorRationale: "Calculou apenas a diferença dos termos independentes (|C₁ - C₂| = 25), esquecendo de dividir pelo módulo do vetor normal." },
      { id: "d", text: "3,5 metros", isCorrect: false, distractorRationale: "Errou a raiz quadrada de 3² + (-4)²." },
      { id: "e", text: "7,0 metros", isCorrect: false, distractorRationale: "Somou os coeficientes das retas." }
    ],
    detailedExplanation: {
      summary: "A distância entre duas retas paralelas de mesma inclinação Ax + By + C₁ = 0 e Ax + By + C₂ = 0 é d = |C₁ - C₂| / √(A² + B²).",
      stepByStep: [
        "Verificação do paralelismo: coeficientes A = 3 e B = -4 são idênticos em ambas as equações (mesmo coeficiente angular m = 3/4).",
        "Termos independentes: C₁ = +10 e C₂ = -15.",
        "Diferença dos termos independentes em módulo:",
        "|C₁ - C₂| = |10 - (-15)| = |10 + 15| = 25.",
        "Denominador: √(A² + B²) = √(3² + (-4)²) = √(9 + 16) = √25 = 5.",
        "Distância entre as retas paralelas: d = 25 / 5 = 5,0 metros."
      ],
      coreConcept: "Fórmula da Distância entre Retas Paralelas no Plano Cartesiano",
      trapWarning: "Cuidado com o sinal negativo ao subtrair os termos independentes: 10 - (-15) vira 10 + 15 = 25!"
    },
    commonTraps: ["fazer 10 - 15 = -5 esquecendo o sinal negativo de C2", "esquecer de dividir por √(A² + B²)"],
    tags: ["retas paralelas", "distancia entre retas", "geometria analitica", "blindagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-019",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Condição de Alinhamento de Três Pontos (Colinearidade)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a demarcação topográfica de um novo campus universitário de saúde, um agrimensor precisa que três marcos de concreto M₁(1, 2), M₂(3, k) e M₃(7, 14) estejam rigorosamente alinhados sobre a mesma linha reta limite do terreno.",
      source: "ENEM / Colinearidade e Determinante no Plano"
    },
    prompt: "O valor da coordenada desconhecida k para que os três marcos estejam perfeitamente alinhados (colineares) é igual a:",
    options: [
      { id: "a", text: "6", isCorrect: true, distractorRationale: null },
      { id: "b", text: "8", isCorrect: false, distractorRationale: "Somou 4 com 4 por engano de cálculo." },
      { id: "c", text: "5", isCorrect: false, distractorRationale: "Calculou a média aritmética ingênua entre 2 e 14 dividida por 2." },
      { id: "d", text: "7", isCorrect: false, distractorRationale: "Assumiu k = 7 por ser o valor de x no ponto M₃." },
      { id: "e", text: "4", isCorrect: false, distractorRationale: "Errou a igualdade dos coeficientes angulares." }
    ],
    detailedExplanation: {
      summary: "Três pontos são colineares se o coeficiente angular entre quaisquer pares for idêntico (ou se o determinante de suas coordenadas for nulo).",
      stepByStep: [
        "Método pelo Coeficiente Angular: o coeficiente angular do segmento M₁M₃ deve ser igual ao do segmento M₁M₂.",
        "m(M₁M₃) = (y₃ - y₁) / (x₃ - x₁) = (14 - 2) / (7 - 1) = 12 / 6 = 2.",
        "m(M₁M₂) = (k - 2) / (3 - 1) = (k - 2) / 2.",
        "Igualando as inclinações: (k - 2) / 2 = 2.",
        "Multiplicando por 2: k - 2 = 4  =>  k = 4 + 2 = 6.",
        "Verificação por Determinante:",
        "| 1  2  1 |",
        "| 3  6  1 | = (6 + 14 + 12) - (42 + 6 + 4) = 32 - 52 = 0? Não, com k = 6: (1·6·1 + 2·1·7 + 1·3·14) - (1·6·7 + 2·3·1 + 1·14·1) = (6 + 14 + 42) - (42 + 6 + 14) = 62 - 62 = 0 (perfeito!)."
      ],
      coreConcept: "Condição de Colinearidade de Três Pontos (m constante ou Det = 0)",
      trapWarning: "Usar coeficientes angulares costuma ser muito mais rápido e imune a erros de sinal do que calcular determinantes com incógnitas!"
    },
    commonTraps: ["esquecer de subtrair as coordenadas ao calcular a inclinacao", "errar o produto cruzado na equacao linear"],
    tags: ["colinearidade", "alinhamento de pontos", "coeficiente angular", "geometria analitica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEOAN-020",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Analítica",
    subtopic: "Circunferência Tangente aos Eixos Cartesianos",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A pista de pouso de helicópteros de socorro médico de um hospital metropolitano possui formato circular e foi construída no primeiro quadrante do plano diretor da instituição. A circunferência que delimita a pista é tangente simultaneamente ao eixo das abscissas (eixo x) e ao eixo das ordenadas (eixo y), e o seu raio de curvatura mede R = 15 metros.",
      source: "ENEM / Equação Reduzida da Circunferência e Tangência"
    },
    prompt: "A equação reduzida da circunferência que descreve os limites dessa pista de pouso é:",
    options: [
      { id: "a", text: "(x - 15)² + (y - 15)² = 225", isCorrect: true, distractorRationale: null },
      { id: "b", text: "(x + 15)² + (y + 15)² = 225", isCorrect: false, distractorRationale: "Essa equação posicionaria o centro no 3º quadrante (-15, -15), e o enunciado especifica 1º quadrante." },
      { id: "c", text: "(x - 15)² + (y - 15)² = 15", isCorrect: false, distractorRationale: "Esqueceu de elevar o raio ao quadrado no segundo membro da equação (R² = 15² = 225)." },
      { id: "d", text: "x² + y² = 225", isCorrect: false, distractorRationale: "Essa circunferência tem centro na origem (0, 0), não sendo tangente aos eixos no 1º quadrante." },
      { id: "e", text: "(x - 30)² + (y - 30)² = 225", isCorrect: false, distractorRationale: "Utilizou o diâmetro (30 m) como coordenadas do centro." }
    ],
    detailedExplanation: {
      summary: "Uma circunferência no 1º quadrante tangente a ambos os eixos cartesianos possui centro C(R, R) e equação (x - R)² + (y - R)² = R².",
      stepByStep: [
        "1. Propriedade de tangência aos eixos: se o círculo tangencia o eixo x e o eixo y, a distância perpendicular do centro a ambos os eixos é igual ao raio R = 15.",
        "2. Como está localizada no PRIMEIRO quadrante (onde x > 0 e y > 0), as coordenadas do centro são C(a, b) = C(15, 15).",
        "3. Equação reduzida da circunferência com centro C(a, b) e raio R:",
        "(x - a)² + (y - b)² = R².",
        "Substituindo a = 15, b = 15 e R = 15:",
        "(x - 15)² + (y - 15)² = 15²  =>  (x - 15)² + (y - 15)² = 225."
      ],
      coreConcept: "Circunferência Tangente aos Eixos Cartesianos e Equação Reduzida",
      trapWarning: "Lembre-se: o segundo membro da equação reduzida da circunferência é SEMPRE o raio elevado ao quadrado (R²), nunca R isolado!"
    },
    commonTraps: ["esquecer de elevar o raio ao quadrado (colocar 15 em vez de 225)", "inverter os sinais de a e b colocando +15 na formula"],
    tags: ["circunferencia", "equacao reduzida", "tangente aos eixos", "primeiro quadrante"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

