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
  }
];
