export const QUESTIONS_GEOMETRIA = [
  {
    id: "MAT-GEO-001",
    area: "matematica",
    competence: 2,
    skill: 6,
    topic: "Geometria Plana",
    subtopic: "Área de Retângulos",
    difficulty: 1,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No Eixo Monumental de Brasília, será implantado um novo canteiro central de flores no formato retangular, com 200 metros de comprimento por 15 metros de largura.",
      source: "Original"
    },
    prompt: "Para comprar a terra adubada, o engenheiro precisa saber a área total desse canteiro. Qual é a medida dessa área, em metros quadrados?",
    options: [
      { id: "a", text: "215", isCorrect: false, distractorRationale: "O aluno somou as dimensões em vez de multiplicá-las." },
      { id: "b", text: "430", isCorrect: false, distractorRationale: "O aluno calculou o perímetro do retângulo (200+200+15+15)." },
      { id: "c", text: "3000", isCorrect: true, distractorRationale: null },
      { id: "d", text: "30000", isCorrect: false, distractorRationale: "O aluno multiplicou com erro de zeros adicionais." },
      { id: "e", text: "15000", isCorrect: false, distractorRationale: "Dividiu a área correta por 2, como se fosse um triângulo." }
    ],
    detailedExplanation: {
      summary: "A área de um retângulo é o produto de sua base pela sua altura (comprimento por largura).",
      stepByStep: [
        "Passo 1: Identificar a fórmula da área do retângulo: A = base × altura.",
        "Passo 2: Substituir os valores: A = 200 × 15.",
        "Passo 3: Calcular o produto: A = 3000 m²."
      ],
      coreConcept: "Área de figuras planas retangulares.",
      trapWarning: "Confundir área com perímetro (soma dos lados)."
    },
    commonTraps: ["confundir_area_perimetro"],
    tags: ["area", "retangulo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-002",
    area: "matematica",
    competence: 2,
    skill: 6,
    topic: "Geometria Plana",
    subtopic: "Perímetro",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O contorno da Lagoa da Pampulha, em Belo Horizonte, possui formato irregular, mas um urbanista a aproximou de um polígono composto por 4 trechos retos de 3 km cada e um trecho curvo que mede aproximadamente 6 km.",
      source: "Original"
    },
    prompt: "Uma pessoa que deseja dar uma volta completa ao redor da lagoa seguindo essa aproximação caminharia uma distância total de:",
    options: [
      { id: "a", text: "9 km", isCorrect: false, distractorRationale: "O aluno somou apenas um trecho reto e a curva." },
      { id: "b", text: "12 km", isCorrect: false, distractorRationale: "Somou apenas os trechos retos e esqueceu a curva." },
      { id: "c", text: "15 km", isCorrect: false, distractorRationale: "Somou três trechos retos com a curva." },
      { id: "d", text: "18 km", isCorrect: true, distractorRationale: null },
      { id: "e", text: "72 km", isCorrect: false, distractorRationale: "Multiplicou os valores em vez de somá-los." }
    ],
    detailedExplanation: {
      summary: "O perímetro é a medida de contorno total, obtida pela soma das medidas de todos os trechos.",
      stepByStep: [
        "Passo 1: Identificar os trechos retos: 4 trechos de 3 km = 12 km.",
        "Passo 2: Identificar o trecho curvo: 6 km.",
        "Passo 3: Somar tudo para obter o perímetro: 12 + 6 = 18 km."
      ],
      coreConcept: "Cálculo de perímetro por soma de segmentos.",
      trapWarning: "Esquecer de contar a quantidade certa de trechos repetidos (são 4 trechos de 3 km)."
    },
    commonTraps: ["esquecer_trechos"],
    tags: ["perimetro", "soma"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-003",
    area: "matematica",
    competence: 3,
    skill: 10,
    topic: "Geometria Espacial",
    subtopic: "Volume do Cilindro",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um hospital público universitário, um reservatório de água potável possui formato cilíndrico, com área da base igual a 10 m² e altura de 5 m.",
      source: "Original"
    },
    prompt: "Qual é a capacidade máxima volumétrica desse reservatório, em metros cúbicos?",
    options: [
      { id: "a", text: "15", isCorrect: false, distractorRationale: "O aluno somou a base com a altura." },
      { id: "b", text: "50", isCorrect: true, distractorRationale: null },
      { id: "c", text: "150", isCorrect: false, distractorRationale: "O aluno multiplicou o volume por 3 achando que não era cilindro." },
      { id: "d", text: "157", isCorrect: false, distractorRationale: "Multiplicou por Pi desnecessariamente, pois a área já estava dada pronta." },
      { id: "e", text: "500", isCorrect: false, distractorRationale: "O aluno adicionou um zero por confusão de unidades (achou que devia multiplicar por 10 novamente)." }
    ],
    detailedExplanation: {
      summary: "O volume de prismas e cilindros é obtido multiplicando a área da base pela altura.",
      stepByStep: [
        "Passo 1: A fórmula do volume do cilindro é V = Área da Base × Altura.",
        "Passo 2: Substituir os valores dados: V = 10 × 5.",
        "Passo 3: Resultado: 50 m³."
      ],
      coreConcept: "Volume de cilindro com base pré-calculada.",
      trapWarning: "Tentar incluir π no cálculo quando a área total da base já foi fornecida como um número inteiro."
    },
    commonTraps: ["multiplicar_pi_indevidamente"],
    tags: ["volume", "cilindro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-004",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Plana",
    subtopic: "Semelhança de Triângulos",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na região da Pampulha, num dado momento da tarde, um poste de 5 metros de altura projeta uma sombra de 8 metros no chão plano. No mesmo instante, um prédio vizinho projeta uma sombra de 40 metros.",
      source: "Original"
    },
    prompt: "A partir do princípio da semelhança de triângulos, qual é a altura desse prédio?",
    options: [
      { id: "a", text: "15 m", isCorrect: false, distractorRationale: "O aluno multiplicou 5 por 3 aleatoriamente." },
      { id: "b", text: "20 m", isCorrect: false, distractorRationale: "O aluno dividiu 40 por 2." },
      { id: "c", text: "25 m", isCorrect: true, distractorRationale: null },
      { id: "d", text: "64 m", isCorrect: false, distractorRationale: "Fez a proporção invertida (40*8)/5." },
      { id: "e", text: "200 m", isCorrect: false, distractorRationale: "O aluno multiplicou 40 por 5 sem dividir pela sombra do poste." }
    ],
    detailedExplanation: {
      summary: "A sombra de objetos vizinhos no mesmo momento obedece a uma razão de proporção de triângulos semelhantes.",
      stepByStep: [
        "Passo 1: Montar a proporção: Altura_Prédio / Sombra_Prédio = Altura_Poste / Sombra_Poste.",
        "Passo 2: H / 40 = 5 / 8.",
        "Passo 3: Multiplicar cruzado: 8H = 200.",
        "Passo 4: H = 200 / 8 = 25 metros."
      ],
      coreConcept: "Semelhança de triângulos aplicada à óptica/sombras.",
      trapWarning: "Inverter a ordem de altura e sombra na regra de três."
    },
    commonTraps: ["inversao_regra_de_tres"],
    tags: ["semelhanca", "triangulos", "proporcao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-005",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Área de Círculo/Setor",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para um festival na Esplanada dos Ministérios, foi montado um palco em formato de setor circular (uma 'fatia de pizza' de um círculo) com raio de 10 metros e ângulo central de 90 graus. Considere π = 3.",
      source: "Original"
    },
    prompt: "Qual é a área utilizável desse palco para os artistas se apresentarem, em metros quadrados?",
    options: [
      { id: "a", text: "75", isCorrect: true, distractorRationale: null },
      { id: "b", text: "150", isCorrect: false, distractorRationale: "Calculou a área do semicírculo (180º) em vez de 90º." },
      { id: "c", text: "300", isCorrect: false, distractorRationale: "Calculou a área total do círculo sem dividir." },
      { id: "d", text: "60", isCorrect: false, distractorRationale: "Calculou o perímetro do círculo (2*pi*r) e usou o valor como se fosse área." },
      { id: "e", text: "90", isCorrect: false, distractorRationale: "Confundiu a medida do ângulo em graus com a área." }
    ],
    detailedExplanation: {
      summary: "A área do setor circular é uma fração proporcional da área total do círculo. Um ângulo de 90º equivale a 1/4 da circunferência completa (360º).",
      stepByStep: [
        "Passo 1: Calcular a área total de um círculo de raio 10. A = π × r².",
        "Passo 2: Substituir valores: A_total = 3 × 10² = 3 × 100 = 300 m².",
        "Passo 3: Achar a fração correspondente a 90º: 90 / 360 = 1/4.",
        "Passo 4: A_palco = 300 / 4 = 75 m²."
      ],
      coreConcept: "Área do setor circular e regra de três de ângulos.",
      trapWarning: "Esquecer de aplicar a fração correspondente ao ângulo de 90 graus."
    },
    commonTraps: ["esquecer_fracao_angulo"],
    tags: ["area", "circulo", "setor_circular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-006",
    area: "matematica",
    competence: 3,
    skill: 12,
    topic: "Geometria Espacial",
    subtopic: "Tronco de Cone",
    difficulty: 3,
    estimatedTimeSeconds: 240,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A Catedral de Brasília tem o formato de hiperboloide de rotação, mas para simplificar um estudo em maquete, foi aproximada para um tronco de cone circular reto, cujas bases (teto vazado e chão) têm raios aproximados r = 10 m e R = 30 m, respectivamente. A altura vertical do tronco é 40 m. Considere π = 3.",
      source: "Enem adaptado"
    },
    prompt: "Qual é o volume dessa simplificação da Catedral (o volume do tronco de cone) em metros cúbicos? Fórmula do volume: V = (π * h / 3) * (R² + R*r + r²).",
    options: [
      { id: "a", text: "16000", isCorrect: false, distractorRationale: "Esqueceu do termo R*r na fórmula." },
      { id: "b", text: "36000", isCorrect: false, distractorRationale: "Calculou como um cilindro de raio R." },
      { id: "c", text: "52000", isCorrect: true, distractorRationale: null },
      { id: "d", text: "156000", isCorrect: false, distractorRationale: "Esqueceu de dividir o h por 3." },
      { id: "e", text: "12000", isCorrect: false, distractorRationale: "Calculou como cone de base R sem subtrair." }
    ],
    detailedExplanation: {
      summary: "A substituição direta na fórmula de volume de tronco de cone resolve o problema.",
      stepByStep: [
        "Passo 1: Identificar a fórmula e variáveis: R=30, r=10, h=40, π=3.",
        "Passo 2: Resolver os quadrados e produto dos raios: R² = 900, r² = 100, R*r = 300.",
        "Passo 3: Somar as áreas das bases parciais: 900 + 300 + 100 = 1300.",
        "Passo 4: Resolver fator (π * h / 3) = (3 * 40 / 3) = 40.",
        "Passo 5: Multiplicar 40 * 1300 = 52.000 m³."
      ],
      coreConcept: "Substituição e cálculo de volume em fórmulas espaciais complexas.",
      trapWarning: "Errar as operações básicas de R² ou esquecer de multiplicar todos os termos do parênteses."
    },
    commonTraps: ["erro_algebrico_tronco"],
    tags: ["volume", "tronco_de_cone", "espacial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-007",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Área de Polígonos Regulares",
    difficulty: 3,
    estimatedTimeSeconds: 200,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na reforma de uma calçada em São Paulo, optou-se por usar ladrilhos no formato de hexágonos regulares, cujo lado mede 20 cm. Sabe-se que a área de um hexágono regular de lado L é 6 vezes a área de um triângulo equilátero. Adote √3 = 1,7.",
      source: "Original"
    },
    prompt: "Qual a área aproximada de um único ladrilho hexagonal em centímetros quadrados?",
    options: [
      { id: "a", text: "680", isCorrect: false, distractorRationale: "Errou a fórmula do triângulo dividindo por algo errado." },
      { id: "b", text: "1020", isCorrect: true, distractorRationale: null },
      { id: "c", text: "1700", isCorrect: false, distractorRationale: "Usou a altura em vez de lado na fórmula." },
      { id: "d", text: "2040", isCorrect: false, distractorRationale: "Esqueceu de dividir por 4 na fórmula original do triângulo." },
      { id: "e", text: "4080", isCorrect: false, distractorRationale: "Elevou algo incorreto ao quadrado." }
    ],
    detailedExplanation: {
      summary: "A área de um hexágono regular é composta por 6 triângulos equiláteros. A_triângulo = L²√3 / 4.",
      stepByStep: [
        "Passo 1: Identificar L = 20.",
        "Passo 2: Área de 1 triângulo = (20² * 1,7) / 4 = (400 * 1,7) / 4.",
        "Passo 3: 400 / 4 = 100. 100 * 1,7 = 170 cm².",
        "Passo 4: O hexágono tem 6 triângulos: 6 * 170 = 1020 cm²."
      ],
      coreConcept: "Decomposição de polígonos regulares em triângulos equiláteros.",
      trapWarning: "Esquecer a divisão por 4 na fórmula do triângulo equilátero."
    },
    commonTraps: ["erro_formula_triangulo_equilatero"],
    tags: ["area", "hexagono", "triangulo_equilatero"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-008",
    area: "matematica",
    competence: 3,
    skill: 11,
    topic: "Geometria Espacial",
    subtopic: "Volume de Prismas e Cilindros",
    difficulty: 3,
    estimatedTimeSeconds: 210,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma fábrica produz potes. A opção A é um cilindro reto de raio 4 cm e altura 10 cm. A opção B é um prisma de base quadrada, onde o lado do quadrado é 8 cm e a altura é 10 cm. Considere π = 3,1.",
      source: "Original"
    },
    prompt: "A fim de otimizar material de estocagem, o gerente constatou uma diferença no volume das opções. Qual a diferença, em cm³, entre os volumes do pote B e do pote A?",
    options: [
      { id: "a", text: "144,0", isCorrect: true, distractorRationale: null },
      { id: "b", text: "160,0", isCorrect: false, distractorRationale: "O aluno usou pi=3 exato." },
      { id: "c", text: "216,0", isCorrect: false, distractorRationale: "O aluno fez cálculos errados para a área da base B." },
      { id: "d", text: "496,0", isCorrect: false, distractorRationale: "Apenas calculou o volume do pote A." },
      { id: "e", text: "640,0", isCorrect: false, distractorRationale: "Apenas calculou o volume do pote B." }
    ],
    detailedExplanation: {
      summary: "Calcular o volume de ambas as opções separadamente e depois subtrair o menor do maior.",
      stepByStep: [
        "Passo 1: Volume de A (cilindro): V_A = π * r² * h = 3,1 * 4² * 10 = 3,1 * 16 * 10 = 496 cm³.",
        "Passo 2: Volume de B (prisma): V_B = área_base * h = 8² * 10 = 64 * 10 = 640 cm³.",
        "Passo 3: Diferença = 640 - 496 = 144 cm³."
      ],
      coreConcept: "Comparação de volumes.",
      trapWarning: "Errar o raio da base cilindrica (usar diâmetro de 8 cm sem dividir por 2, se não interpretar direito)."
    },
    commonTraps: ["confundir_raio_diametro"],
    tags: ["volume", "cilindro", "prisma"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-009",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Plana",
    subtopic: "Teorema de Pitágoras",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para garantir acessibilidade em um prédio governamental, uma rampa reta será construída ligando o térreo, no nível da calçada, a uma porta a 1,5 m de altura. A base da rampa no solo ficará distante 2,0 m (distância horizontal) da base da parede da porta.",
      source: "Original"
    },
    prompt: "Qual será o comprimento total da superfície dessa rampa, ou seja, o comprimento do piso inclinado?",
    options: [
      { id: "a", text: "2,0 m", isCorrect: false, distractorRationale: "O aluno apenas marcou a distância horizontal." },
      { id: "b", text: "2,5 m", isCorrect: true, distractorRationale: null },
      { id: "c", text: "3,5 m", isCorrect: false, distractorRationale: "O aluno somou os dois catetos (1,5 + 2,0)." },
      { id: "d", text: "4,0 m", isCorrect: false, distractorRationale: "O aluno elevou a soma ao quadrado e não extraiu raiz direito." },
      { id: "e", text: "6,25 m", isCorrect: false, distractorRationale: "O aluno encontrou o quadrado da hipotenusa, mas esqueceu a raiz quadrada." }
    ],
    detailedExplanation: {
      summary: "A rampa, a altura e a distância horizontal formam um triângulo retângulo onde a rampa é a hipotenusa.",
      stepByStep: [
        "Passo 1: Aplicar Teorema de Pitágoras: a² = b² + c².",
        "Passo 2: Rampa² = (1,5)² + (2,0)².",
        "Passo 3: Rampa² = 2,25 + 4,00 = 6,25.",
        "Passo 4: Rampa = √6,25 = 2,5 m."
      ],
      coreConcept: "Teorema de Pitágoras.",
      trapWarning: "Somar os catetos ao invés de usar os quadrados para achar a hipotenusa."
    },
    commonTraps: ["soma_catetos_direta", "esquecer_raiz_quadrada"],
    tags: ["pitagoras", "triangulo_retangulo", "acessibilidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-010",
    area: "matematica",
    competence: 2,
    skill: 9,
    topic: "Geometria Plana",
    subtopic: "Escalas e Área",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na planta baixa de um apartamento no Rio de Janeiro, desenhada na escala 1:100, um quarto retangular mede 4 cm por 5 cm de desenho.",
      source: "Original"
    },
    prompt: "Qual é a área real desse quarto em metros quadrados?",
    options: [
      { id: "a", text: "20", isCorrect: true, distractorRationale: null },
      { id: "b", text: "200", isCorrect: false, distractorRationale: "Esqueceu de transformar de cm para m direito e achou que a escala de área é a mesma de linha." },
      { id: "c", text: "2000", isCorrect: false, distractorRationale: "Multiplicou a área em cm por 100." },
      { id: "d", text: "0,2", isCorrect: false, distractorRationale: "Dividiu a área em cm² por 100 em vez de multiplicar com a proporção de área." },
      { id: "e", text: "400", isCorrect: false, distractorRationale: "Transformações malucas de escala na soma." }
    ],
    detailedExplanation: {
      summary: "Escalas lineares multiplicam a dimensão desenhada pela escala para obter a dimensão real. Áreas envolvem o quadrado da escala.",
      stepByStep: [
        "Passo 1: Dimensões reais (escala 1:100 significa 1 cm = 1 m).",
        "Passo 2: Comprimento real = 4 cm * 100 = 400 cm = 4 metros.",
        "Passo 3: Largura real = 5 cm * 100 = 500 cm = 5 metros.",
        "Passo 4: Área real = 4 m * 5 m = 20 m²."
      ],
      coreConcept: "Escala aplicável a segmentos para encontrar a área real.",
      trapWarning: "Calcular a área no desenho (20 cm²) e multiplicar pela escala linear (20 * 100 = 2000), esquecendo que a razão de áreas é o quadrado da escala linear."
    },
    commonTraps: ["esquecer_escala_de_area"],
    tags: ["escala", "area", "planta_baixa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-011",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Área de Trapézio",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um terreno em declive em um bairro de BH possui a forma de um trapézio retângulo. A frente do terreno (base menor) mede 10 m, os fundos (base maior) medem 20 m e a lateral reta que forma ângulo de 90° com as bases mede 30 m.",
      source: "Original"
    },
    prompt: "Qual a área total desse terreno?",
    options: [
      { id: "a", text: "300 m²", isCorrect: false, distractorRationale: "Multiplicou base menor por altura (como retângulo)." },
      { id: "b", text: "450 m²", isCorrect: true, distractorRationale: null },
      { id: "c", text: "600 m²", isCorrect: false, distractorRationale: "Multiplicou base maior por altura (como retângulo)." },
      { id: "d", text: "900 m²", isCorrect: false, distractorRationale: "Esqueceu de dividir por 2 na fórmula do trapézio." },
      { id: "e", text: "150 m²", isCorrect: false, distractorRationale: "Dividiu também a altura por 2." }
    ],
    detailedExplanation: {
      summary: "A área de um trapézio é dada por: A = (Base Maior + Base Menor) × Altura / 2.",
      stepByStep: [
        "Passo 1: Identificar B = 20, b = 10 e h = 30.",
        "Passo 2: Aplicar na fórmula: A = (20 + 10) * 30 / 2.",
        "Passo 3: A = 30 * 30 / 2.",
        "Passo 4: A = 900 / 2 = 450 m²."
      ],
      coreConcept: "Área de figuras quadriláteras não retangulares (trapézios).",
      trapWarning: "Esquecer a divisão por 2."
    },
    commonTraps: ["esquecer_dividir_por_2"],
    tags: ["area", "trapezio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-012",
    area: "matematica",
    competence: 3,
    skill: 14,
    topic: "Geometria Espacial",
    subtopic: "Escala Volumétrica",
    difficulty: 4,
    estimatedTimeSeconds: 240,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um arquiteto fez uma maquete do Estádio Mineirão na escala 1:100. O volume da estrutura principal da maquete é de 0,05 m³.",
      source: "Enem adaptado"
    },
    prompt: "Considerando que a proporção das escalas volumétricas é o cubo da escala linear, qual é o volume real da estrutura do estádio em metros cúbicos?",
    options: [
      { id: "a", text: "50", isCorrect: false, distractorRationale: "Multiplicou por 1.000." },
      { id: "b", text: "500", isCorrect: false, distractorRationale: "Multiplicou por 10.000 (quadrado da escala)." },
      { id: "c", text: "5.000", isCorrect: false, distractorRationale: "Erro no preenchimento de zeros." },
      { id: "d", text: "50.000", isCorrect: true, distractorRationale: null },
      { id: "e", text: "500.000", isCorrect: false, distractorRationale: "Excesso de zeros na multiplicação." }
    ],
    detailedExplanation: {
      summary: "A relação de volume entre a realidade e uma maquete é dada pelo cubo da escala linear.",
      stepByStep: [
        "Passo 1: Escala linear k = 100.",
        "Passo 2: Escala volumétrica k³ = 100³ = 1.000.000.",
        "Passo 3: Volume real = Volume maquete × k³.",
        "Passo 4: Volume real = 0,05 × 1.000.000 = 50.000 m³."
      ],
      coreConcept: "Escala volumétrica (k³).",
      trapWarning: "Multiplicar apenas por k (escala linear) ou k² (escala de área) em vez do cubo."
    },
    commonTraps: ["usar_escala_linear_em_volume", "usar_escala_area_em_volume"],
    tags: ["escala", "volume", "maquete"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-013",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Área Hachurada",
    difficulty: 4,
    estimatedTimeSeconds: 260,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma praça retangular de 20m x 40m em Brasília, serão construídos dois canteiros circulares tangentes entre si e às bordas do retângulo mais estreito. O restante da praça será gramado. Considere π = 3.",
      source: "Original"
    },
    prompt: "Sabendo que os dois círculos possuem raios iguais, qual será a área total destinada ao gramado?",
    options: [
      { id: "a", text: "200 m²", isCorrect: true, distractorRationale: null },
      { id: "b", text: "400 m²", isCorrect: false, distractorRationale: "O aluno esqueceu de deduzir a área de um círculo ou fez cálculos incorretos de área de praça." },
      { id: "c", text: "500 m²", isCorrect: false, distractorRationale: "Errou a medida do raio do círculo achando que ele seria 5." },
      { id: "d", text: "600 m²", isCorrect: false, distractorRationale: "Subtraiu apenas meio círculo." },
      { id: "e", text: "800 m²", isCorrect: false, distractorRationale: "Calculou a área total do retângulo e não subtraiu nada." }
    ],
    detailedExplanation: {
      summary: "A área hachurada (gramado) é a diferença entre a área total do retângulo e a área dos dois círculos.",
      stepByStep: [
        "Passo 1: Se a praça tem 20x40 e acomoda dois círculos de mesmo raio um ao lado do outro, o diâmetro de cada um é 20m (raio = 10m).",
        "Passo 2: Área total do retângulo = 20 * 40 = 800 m².",
        "Passo 3: Área de um círculo = π * r² = 3 * 100 = 300 m².",
        "Passo 4: Área dos dois círculos = 2 * 300 = 600 m².",
        "Passo 5: Área do gramado = 800 - 600 = 200 m²."
      ],
      coreConcept: "Subtração de áreas (área não preenchida).",
      trapWarning: "Errar a identificação do raio pela leitura da disposição dos círculos no retângulo."
    },
    commonTraps: ["identificacao_errada_do_raio"],
    tags: ["area", "circulos", "retangulo", "subtracao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-014",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Otimização de Área",
    difficulty: 5,
    estimatedTimeSeconds: 240,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um condomínio dispõe de 100 metros de tela de arame para cercar uma área retangular de lazer para os cachorros. Um dos lados dessa área utilizará o próprio muro do condomínio, não necessitando de tela.",
      source: "Enem adaptado"
    },
    prompt: "Para que os cachorros tenham a maior área possível, quais devem ser as dimensões (comprimento paralelo ao muro e a profundidade ortogonal ao muro) do cercado?",
    options: [
      { id: "a", text: "25m de comprimento e 25m de profundidade", isCorrect: false, distractorRationale: "O aluno apenas dividiu 100 por 4 achando que era o perímetro completo, maximizando num quadrado." },
      { id: "b", text: "33,3m de comprimento e 33,3m de profundidade", isCorrect: false, distractorRationale: "O aluno dividiu os 100 por 3 lados iguais." },
      { id: "c", text: "40m de comprimento e 30m de profundidade", isCorrect: false, distractorRationale: "Tentou usar 40 e 30 aleatoriamente fechando 100 com o muro." },
      { id: "d", text: "50m de comprimento e 25m de profundidade", isCorrect: true, distractorRationale: null },
      { id: "e", text: "80m de comprimento e 10m de profundidade", isCorrect: false, distractorRationale: "Tentou fazer longo e estreito, mas área é menor." }
    ],
    detailedExplanation: {
      summary: "Problema clássico de otimização quadratica. Com 3 lados cercados, A(x) = x(100 - 2x).",
      stepByStep: [
        "Passo 1: Seja y o comprimento do muro usado, e x as laterais ortogonais.",
        "Passo 2: 2x + y = 100 => y = 100 - 2x.",
        "Passo 3: Área A(x) = x * y = x * (100 - 2x) = -2x² + 100x.",
        "Passo 4: O valor máximo de x (X_vértice) = -b / (2a) = -100 / (2 * -2) = 25.",
        "Passo 5: Se x (profundidade) é 25, y (comprimento) = 100 - 50 = 50."
      ],
      coreConcept: "Otimização via parábola para máximos e mínimos aplicados à geometria.",
      trapWarning: "Dividir por 4 assumindo que a figura com maior área perimetral é sempre o quadrado completo (desconsiderando que um muro sem cerca muda a equação)."
    },
    commonTraps: ["maximizacao_quadrado_cego"],
    tags: ["otimizacao", "area", "funcao_quadratica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-015",
    area: "matematica",
    competence: 3,
    skill: 13,
    topic: "Geometria Espacial",
    subtopic: "Inscrição de Sólidos",
    difficulty: 5,
    estimatedTimeSeconds: 300,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No complexo logístico de uma cooperativa agrícola, uma bola medidora em formato perfeitamente esférico, com raio de 3 metros, foi colocada dentro de um silo cilíndrico recém-construído de mesmo raio de base e cuja altura é igual ao diâmetro da bola (cilindro equilátero tangenciando a esfera em todos os lados).",
      source: "Enem adaptado"
    },
    prompt: "O volume do espaço livre dento do silo (não ocupado pela esfera) equivale a que porcentagem do volume total do cilindro?",
    options: [
      { id: "a", text: "25%", isCorrect: false, distractorRationale: "Estimou que fosse um quarto vazio." },
      { id: "b", text: "33,3%", isCorrect: true, distractorRationale: null },
      { id: "c", text: "50%", isCorrect: false, distractorRationale: "Achou que ocupava exatamente a metade." },
      { id: "d", text: "66,6%", isCorrect: false, distractorRationale: "O aluno encontrou o volume que a esfera ocupa (2/3) em vez do volume que SOBRA livre (1/3)." },
      { id: "e", text: "75%", isCorrect: false, distractorRationale: "Estimou errado os volumes." }
    ],
    detailedExplanation: {
      summary: "A famosa descoberta de Arquimedes: a esfera inscrita em um cilindro ocupa exatos 2/3 do volume do cilindro, deixando 1/3 livre.",
      stepByStep: [
        "Passo 1: Volume do cilindro Vc = π * r² * h. Como a altura é o diâmetro (2r), Vc = π * r² * (2r) = 2πr³.",
        "Passo 2: Volume da esfera Ve = (4/3) * π * r³.",
        "Passo 3: Volume livre Vl = Vc - Ve = 2πr³ - (4/3)πr³ = (2/3)πr³.",
        "Passo 4: Fração livre: Vl / Vc = [(2/3)πr³] / [2πr³] = 1/3.",
        "Passo 5: 1/3 corresponde aproximadamente a 33,3%."
      ],
      coreConcept: "Relação de volumes entre sólidos notáveis (Esfera e Cilindro Equilátero).",
      trapWarning: "A resposta solicita a porcentagem do espaço *livre*, e não a porcentagem *ocupada* pela esfera."
    },
    commonTraps: ["responder_volume_ocupado"],
    tags: ["solidos_inscritos", "volume", "esfera_cilindro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-016",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Tronco de Cone e Capacidade Volumétrica",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um copo descartável em formato de tronco de cone reto possui diâmetro da base superior de 8 cm (raio R = 4 cm), diâmetro da base inferior de 6 cm (raio r = 3 cm) e altura vertical h = 10 cm. Adote π ≈ 3,14.",
      source: "ENEM Geometria dos Sólidos de Revolução"
    },
    prompt: "A capacidade volumétrica máxima desse copo é de aproximadamente:",
    options: [
      { id: "a", text: "387 mL", isCorrect: true, distractorRationale: null },
      { id: "b", text: "502 mL", isCorrect: false, distractorRationale: "Calculou o volume como se fosse um cilindro com o raio maior: π · 4² · 10 ≈ 502 mL." },
      { id: "c", text: "282 mL", isCorrect: false, distractorRationale: "Calculou o volume como se fosse um cilindro com o raio menor: π · 3² · 10 ≈ 282 mL." },
      { id: "d", text: "129 mL", isCorrect: false, distractorRationale: "Esqueceu de multiplicar pela altura de 10 cm ou errou a divisão por 3." },
      { id: "e", text: "350 mL", isCorrect: false, distractorRationale: "Calculou a média aritmética simples dos cilindros sem aplicar a fórmula exata do tronco." }
    ],
    detailedExplanation: {
      summary: "A fórmula do volume do tronco de cone é V = (π · h / 3) · (R² + R·r + r²). Substituindo R = 4, r = 3 e h = 10: V = (3,14 · 10 / 3) · (16 + 12 + 9) = (31,4 / 3) · 37 ≈ 387,26 cm³ ≈ 387 mL.",
      stepByStep: [
        "1. Identificar os raios a partir dos diâmetros: R = 8 / 2 = 4 cm e r = 6 / 2 = 3 cm.",
        "2. Altura: h = 10 cm.",
        "3. Fórmula do tronco de cone: V = (π · h / 3) · (R² + R·r + r²).",
        "4. Termo entre parênteses: 4² + (4 · 3) + 3² = 16 + 12 + 9 = 37.",
        "5. Volume: V = (3,14 · 10 / 3) · 37 = (31,4 · 37) / 3 = 1.161,8 / 3 ≈ 387,27 cm³.",
        "6. Como 1 cm³ = 1 mL, a capacidade é de aproximadamente 387 mL."
      ],
      coreConcept: "Volume do Tronco de Cone Reto",
      trapWarning: "Cuidado: Nunca use a média dos raios R_med = (4+3)/2 = 3,5 cm para calcular cilindro! O tronco de cone SEMPRE tem volume ligeiramente diferente do cilindro médio."
    },
    commonTraps: [
      "Usar os diâmetros (8 e 6) na fórmula em vez dos raios (4 e 3)",
      "Confundir cm³ com litros em vez de mililitros (1 cm³ = 1 mL = 0,001 L)"
    ],
    tags: ["tronco-de-cone", "geometria-espacial", "volume", "capacidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-017",
    area: "matematica",
    competence: 2,
    skill: 9,
    topic: "Geometria Espacial",
    subtopic: "Projeção Ortogonal e Visão Espacial",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Uma escultura metálica em formato de hélice cilíndrica perfeita sobe verticalmente do chão, completando três voltas inteiras ao redor de um pilar invisível. Ao meio-dia solar, os raios solares incidem rigorosamente perpendiculares ao solo plano horizontal da praça onde a escultura está instalada.",
      source: "ENEM Desenho Técnico e Projeções Cônicas/Ortogonais"
    },
    prompt: "A sombra projetada por essa hélice tridimensional sobre o chão horizontal plano, desconsiderando a espessura da barra metálica, tem a forma geométrica de:",
    options: [
      { id: "a", text: "uma circunferência plana contínua simples.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "uma linha senoidal ondulada aberta.", isCorrect: false, distractorRationale: "A senóide seria a projeção lateral sobre uma parede vertical, não no chão horizontal ao meio-dia." },
      { id: "c", text: "três segmentos de reta paralelos desconectados.", isCorrect: false, distractorRationale: "A hélice é contínua e curva; sua projeção superior fecha em formato circular." },
      { id: "d", text: "uma elipse de grande excentricidade.", isCorrect: false, distractorRationale: "Como a luz incide a 90° sobre a hélice cilíndrica circular reta, a projeção no plano basal é uma circunferência perfeita." },
      { id: "e", text: "uma espiral que se fecha em um ponto central único.", isCorrect: false, distractorRationale: "A hélice cilíndrica possui raio constante; espiral ocorre apenas em hélice cônica." }
    ],
    detailedExplanation: {
      summary: "A projeção ortogonal de uma hélice cilíndrica (curva dada parametricamente por x = R·cos(t), y = R·sen(t), z = c·t) sobre o plano horizontal xy elimina a coordenada vertical z, restando apenas a equação da circunferência x² + y² = R².",
      stepByStep: [
        "1. Luz ao meio-dia = raios paralelos verticais (projeção ortogonal no plano do solo).",
        "2. A hélice cilíndrica possui raio R constante em relação ao eixo vertical z.",
        "3. Ao olhar de cima para baixo (vista superior ou projeção no plano z = 0), a coordenada z é suprimida.",
        "4. Os pontos (x, y) de cada uma das três voltas sobrepõem-se exatamente sobre a mesma linha circular de raio R.",
        "5. Conclusão: a sombra é uma circunferência completa."
      ],
      coreConcept: "Projeção Ortogonal de Curvas Espaciais no Plano",
      trapWarning: "No ENEM: Projeção no CHÃO (vista superior) de uma hélice é circunferência. Projeção na PAREDE (vista frontal/lateral) é uma curva ondulada (senóide)."
    },
    commonTraps: [
      "Confundir a vista superior com a vista lateral (marcar senóide)",
      "Achar que vira uma espiral que encolhe (hélice cilíndrica tem raio constante)"
    ],
    tags: ["projecao-ortogonal", "visao-espacial", "geometria-descritiva", "helice"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-018",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Rampa de Acessibilidade e Teorema de Pitágoras (NBR 9050)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A norma técnica de acessibilidade (ABNT NBR 9050) estabelece que a inclinação de uma rampa para cadeirantes é dada pela razão percentual entre a altura do desnível a vencer (h) e o comprimento da projeção horizontal da rampa (d): i = (h / d) · 100%. Um hospital precisa construir uma rampa com inclinação máxima de 8% para vencer um desnível vertical de h = 1,20 metro.",
      source: "Acessibilidade Arquitetônica e Geometria Aplicada"
    },
    prompt: "Qual deve ser o comprimento da projeção horizontal (d) e o comprimento real da superfície inclinada da rampa (L) percorrida pelo cadeirante, respectivamente? (Considere √226,44 ≈ 15,05).",
    options: [
      { id: "a", text: "d = 15,00 metros e L ≈ 15,05 metros.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "d = 9,60 metros e L ≈ 9,67 metros.", isCorrect: false, distractorRationale: "Multiplicou 1,20 por 8 em vez de dividir 1,20 por 0,08." },
      { id: "c", text: "d = 12,00 metros e L ≈ 12,06 metros.", isCorrect: false, distractorRationale: "Usou inclinação de 10% em vez de 8%." },
      { id: "d", text: "d = 15,00 metros e L = 16,20 metros.", isCorrect: false, distractorRationale: "Somou h + d diretamente (1,20 + 15,00), violando a geometria do triângulo retângulo." },
      { id: "e", text: "d = 8,00 metros e L ≈ 8,09 metros.", isCorrect: false, distractorRationale: "Usou a porcentagem como se fosse o comprimento em metros." }
    ],
    detailedExplanation: {
      summary: "Inclinação: i = (h / d) · 100% -> 8% = (1,20 / d) · 100 -> d = 1,20 / 0,08 = 15,00 metros. Pelo Teorema de Pitágoras: L² = d² + h² = 15² + 1,20² = 225 + 1,44 = 226,44 -> L = √226,44 ≈ 15,05 metros.",
      stepByStep: [
        "1. Relação de inclinação: 8% = 0,08 = h / d.",
        "2. Como h = 1,20 m: 0,08 = 1,20 / d -> d = 1,20 / 0,08 = 120 / 8 = 15 metros de projeção horizontal.",
        "3. Triângulo retângulo formado: cateto horizontal d = 15 m; cateto vertical h = 1,2 m; hipotenusa L (rampa inclinada).",
        "4. Teorema de Pitágoras: L² = 15² + 1,2² = 225 + 1,44 = 226,44.",
        "5. L = √226,44 ≈ 15,05 metros."
      ],
      coreConcept: "Inclinação de Rampas, Razão Trigonométrica e Teorema de Pitágoras",
      trapWarning: "Cuidado: Inclinação de 8% NÃO é ângulo de 8 graus! Inclinação de rampa é a tangente do ângulo multiplicada por 100: i = (h/d) · 100%."
    },
    commonTraps: [
      "Confundir a projeção horizontal no chão (d) com o piso inclinado percorrido (L)",
      "Errar a divisão decimal de 1,2 por 0,08"
    ],
    tags: ["rampa-acessibilidade", "teorema-de-pitagoras", "geometria-plana", "inclinacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-019",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Prisma Hexagonal Regular e Otimização Geométrica",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "As abelhas constroem os alvéolos de suas colmeias no formato de prismas hexagonais regulares. O hexágono regular é um dos três únicos polígonos regulares capazes de cobrir o plano sem deixar frestas (tesselação), proporcionando o menor perímetro para uma dada área e economizando cera. Um apicultor construiu uma caixa de armazenamento com formato de prisma reto de base hexagonal regular com aresta da base a = 10 cm e altura h = 30 cm. Adote √3 ≈ 1,73.",
      source: "Biomatemática e Geometria da Natureza"
    },
    prompt: "O volume interno total dessa caixa de armazenamento apícola é de aproximadamente:",
    options: [
      { id: "a", text: "7.785 cm³", isCorrect: true, distractorRationale: null },
      { id: "b", text: "2.595 cm³", isCorrect: false, distractorRationale: "Calculou a área de apenas dois triângulos equiláteros em vez dos seis que formam o hexágono." },
      { id: "c", text: "9.000 cm³", isCorrect: false, distractorRationale: "Calculou como se a base fosse um retângulo de 10x30." },
      { id: "d", text: "4.500 cm³", isCorrect: false, distractorRationale: "Errou a fórmula da área do triângulo equilátero dividindo por 2 em vez de aplicar (a²√3)/4." },
      { id: "e", text: "15.570 cm³", isCorrect: false, distractorRationale: "Multiplicou por 12 triângulos em vez de 6." }
    ],
    detailedExplanation: {
      summary: "A base é um hexágono regular formado por 6 triângulos equiláteros de lado a = 10 cm. Área da base: A_b = 6 · (a²√3 / 4) = 6 · (100 · 1,73 / 4) = 6 · 43,25 = 259,5 cm². Volume: V = A_b · h = 259,5 · 30 = 7.785 cm³.",
      stepByStep: [
        "1. Hexágono regular = união de 6 triângulos equiláteros idênticos.",
        "2. Área de 1 triângulo equilátero de lado a: A_tri = a²√3 / 4.",
        "3. Com a = 10 cm: A_tri = (10² · 1,73) / 4 = (100 · 1,73) / 4 = 173 / 4 = 43,25 cm².",
        "4. Área da base hexagonal: A_b = 6 · 43,25 = 259,5 cm².",
        "5. Volume do prisma reto: V = A_b · h = 259,5 cm² · 30 cm = 7.785 cm³."
      ],
      coreConcept: "Volume de Prisma Hexagonal Regular e Decomposição em Triângulos Equiláteros",
      trapWarning: "Lembre-se sempre: Hexágono regular na geometria plana SEMPRE se resolve dividindo em 6 triângulos equiláteros!"
    },
    commonTraps: [
      "Esquecer de multiplicar por 6 a área do triângulo equilátero",
      "Errar a fórmula da área do triângulo equilátero (a²√3 / 4)"
    ],
    tags: ["prisma-hexagonal", "geometria-espacial", "hexagono-regular", "volume"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-020",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Cilindro Hidráulico e Escoamento de Água",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma caixa d'água cilíndrica vertical de uma escola possui diâmetro interno de 2 metros (raio r = 1 m) e altura útil h = 3 metros. Estando completamente vazia, ela passa a ser abastecida por uma mangueira de vazão constante de 25 litros por minuto. Considere π ≈ 3,14.",
      source: "ENEM Hidráulica e Geometria Espacial"
    },
    prompt: "Quantas horas serão necessárias para encher completamente essa caixa d'água até a sua capacidade máxima?",
    options: [
      { id: "a", text: "Aproximadamente 6,28 horas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Aproximadamente 25,12 horas.", isCorrect: false, distractorRationale: "Usou o diâmetro 2 m na fórmula em vez do raio 1 m (quadruplicando o volume)." },
      { id: "c", text: "Aproximadamente 3,14 horas.", isCorrect: false, distractorRationale: "Errou a conversão de m³ para litros ou na divisão por 60 minutos." },
      { id: "d", text: "Aproximadamente 10,00 horas.", isCorrect: false, distractorRationale: "Estimativa sem calcular o volume exato do cilindro." },
      { id: "e", text: "Aproximadamente 376,8 horas.", isCorrect: false, distractorRationale: "Esqueceu de converter minutos para horas (376,8 minutos / 60 = 6,28 horas)." }
    ],
    detailedExplanation: {
      summary: "Volume do cilindro: V = π · r² · h = 3,14 · 1² · 3 = 9,42 m³ = 9.420 litros. Tempo em minutos: t = 9.420 / 25 = 376,8 minutos. Tempo em horas: t = 376,8 / 60 = 6,28 horas.",
      stepByStep: [
        "1. Raio da base: r = diâmetro / 2 = 2 / 2 = 1 metro.",
        "2. Altura útil: h = 3 metros.",
        "3. Volume em m³: V = π · r² · h = 3,14 · 1² · 3 = 9,42 m³.",
        "4. Conversão fundamental: 1 m³ = 1.000 litros. Logo, V = 9,42 · 1.000 = 9.420 litros.",
        "5. Tempo em minutos com vazão de 25 L/min: t_min = 9.420 / 25 = 376,8 minutos.",
        "6. Converter para horas (dividir por 60): t_h = 376,8 / 60 = 6,28 horas (ou seja, 6 horas, 16 minutos e 48 segundos)."
      ],
      coreConcept: "Volume do Cilindro Reto e Razão de Vazão Temporal",
      trapWarning: "Cuidado: 1 metro cúbico equivale a 1.000 litros! Não confunda com 100 litros."
    },
    commonTraps: [
      "Usar o diâmetro de 2 m em vez do raio de 1 m",
      "Esquecer de converter a resposta final de minutos para horas"
    ],
    tags: ["cilindro", "volume", "vazao", "tempo-de-enchimento", "conversao-unidades"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-021",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Semelhança de Triângulos e Medição por Sombra",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um dia ensolarado, para estimar a altura de um edifício residencial sem aparelhos a laser, um estudante fincou verticalmente no solo plano uma haste retilínea de 1,50 metro de altura. No mesmo instante, a sombra projetada pela haste no chão media exatamente 0,60 metro, enquanto a sombra projetada pelo edifício no mesmo solo media 16,00 metros.",
      source: "Geometria Euclidiana Prática e Tales de Mileto"
    },
    prompt: "Com base no princípio da semelhança de triângulos, a altura real desse edifício residencial é de:",
    options: [
      { id: "a", text: "40,00 metros.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "32,00 metros.", isCorrect: false, distractorRationale: "Multiplicou 16 por 2 sem usar a proporção correta de 1,5 / 0,6 = 2,5." },
      { id: "c", text: "24,00 metros.", isCorrect: false, distractorRationale: "Multiplicou 16 por 1,5 sem dividir pelo tamanho da sombra da haste (0,60)." },
      { id: "d", text: "48,00 metros.", isCorrect: false, distractorRationale: "Errou a simplificação fracionária." },
      { id: "e", text: "18,50 metros.", isCorrect: false, distractorRationale: "Somou os valores das grandezas." }
    ],
    detailedExplanation: {
      summary: "Como os raios solares chegam paralelos, os triângulos formados pelas alturas e sombras são semelhantes: H / S_edificio = h / S_haste -> H / 16 = 1,50 / 0,60 -> H = 16 · 2,5 = 40,00 metros.",
      stepByStep: [
        "1. Semelhança de triângulos retângulos: Altura do prédio (H) está para a sombra do prédio (S) assim como altura da haste (h) está para a sombra da haste (s).",
        "2. Proporção: H / 16 = 1,50 / 0,60.",
        "3. Razão h / s: 1,50 / 0,60 = 15 / 6 = 5 / 2 = 2,5 (cada metro de sombra equivale a 2,5 metros de altura real).",
        "4. Cálculo de H: H = 16 · 2,5 = 40 metros."
      ],
      coreConcept: "Semelhança de Triângulos e Teorema de Tales",
      trapWarning: "No ENEM, essa é a questão clássica de acerto obrigatório da TRI: proporção direta simples de sombra e altura."
    },
    commonTraps: [
      "Inverter a proporção ao montar a igualdade",
      "Errar a simplificação de 1,5 / 0,6"
    ],
    tags: ["semelhanca-de-triangulos", "teorema-de-tales", "sombras", "geometria-plana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-022",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Esfera Oca e Casca Esférica de Aço",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um tanque industrial de armazenamento de gás liquefeito possui formato de casca esférica de aço. O raio externo do tanque mede R = 3 metros e a espessura da chapa de aço que compõe as paredes é constante e igual a 0,3 metro, de modo que o raio interno da cavidade que armazena o gás mede r = 2,7 metros. Considere π ≈ 3,0.",
      source: "Engenharia Mecânica e Geometria Espacial"
    },
    prompt: "O volume de aço utilizado exclusivamente na fabricação das paredes da casca esférica desse tanque (desconsiderando soldas e apoios) é de:",
    options: [
      { id: "a", text: "29,268 m³", isCorrect: true, distractorRationale: null },
      { id: "b", text: "108,000 m³", isCorrect: false, distractorRationale: "Esse seria o volume total da esfera externa inteira, sem subtrair o espaço oco interno." },
      { id: "c", text: "78,732 m³", isCorrect: false, distractorRationale: "Esse é o volume da cavidade oca interna (onde fica o gás), e não o volume de aço da parede." },
      { id: "d", text: "12,150 m³", isCorrect: false, distractorRationale: "Calculou a área da superfície esférica e multiplicou pela espessura sem deduzir a diferença exata dos cubos." },
      { id: "e", text: "3,600 m³", isCorrect: false, distractorRationale: "Fez 4 · π · r · espessura." }
    ],
    detailedExplanation: {
      summary: "Volume da casca: V_casca = V_externo - V_interno = (4/3)·π·R³ - (4/3)·π·r³ = (4/3)·π·(R³ - r³). Com π ≈ 3: V_casca = 4 · (3³ - 2,7³) = 4 · (27 - 19,683) = 4 · 7,317 = 29,268 m³.",
      stepByStep: [
        "1. Raio externo: R = 3 m -> R³ = 27 m³.",
        "2. Raio interno: r = 3 - 0,3 = 2,7 m -> r³ = 2,7 · 2,7 · 2,7 = 19,683 m³.",
        "3. Fórmula do volume da casca esférica: V = (4/3) · π · (R³ - r³).",
        "4. Como π ≈ 3, o fator (4/3) · 3 simplifica perfeitamente para 4.",
        "5. V = 4 · (27 - 19,683) = 4 · 7,317 = 29,268 m³ de aço."
      ],
      coreConcept: "Volume da Casca Esférica por Diferença de Volumes de Sólidos",
      trapWarning: "Não caia na tentação de subtrair os raios antes de elevar ao cubo! (R - r)³ = 0,3³ = 0,027 NÃO É IGUAL a R³ - r³ = 7,317!"
    },
    commonTraps: [
      "Calcular (R - r)³ em vez de R³ - r³",
      "Marcar o volume interno da cavidade em vez do volume de aço da parede"
    ],
    tags: ["esfera", "casca-esferica", "diferenca-de-volumes", "geometria-espacial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-023",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Pirâmide Quadrangular Regular e Área de Lona",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma tenda para feira de artesanato tem o formato de uma pirâmide regular de base quadrada, sem piso de lona (apenas as quatro faces laterais triangulares são revestidas de lona impermeável). A base quadrada no chão tem aresta de 6 metros e a altura vertical do mastro central é de 4 metros.",
      source: "ENEM Estruturas e Geometria das Pirâmides"
    },
    prompt: "A quantidade mínima de lona necessária para cobrir as quatro faces laterais dessa tenda piramidal é de:",
    options: [
      { id: "a", text: "60 m²", isCorrect: true, distractorRationale: null },
      { id: "b", text: "48 m²", isCorrect: false, distractorRationale: "Usou a altura vertical de 4 m como se fosse a altura dos triângulos laterais (apótema da pirâmide): 4 · (6 · 4 / 2) = 48 m²." },
      { id: "c", text: "96 m²", isCorrect: false, distractorRationale: "Somou a área da base quadrada (36 m²) que o enunciado expressamente informou não ter lona." },
      { id: "d", text: "72 m²", isCorrect: false, distractorRationale: "Multiplicou por 6 triângulos em vez de 4." },
      { id: "e", text: "120 m²", isCorrect: false, distractorRationale: "Esqueceu de dividir por 2 na área dos triângulos laterais." }
    ],
    detailedExplanation: {
      summary: "Para achar a área das faces laterais, precisamos do apótema da pirâmide (g), que é a hipotenusa do triângulo retângulo formado pela altura da pirâmide (h = 4) e pelo apótema da base (metade do lado: m = 3). g² = 4² + 3² = 25 -> g = 5 m. Área lateral: 4 triângulos de base 6 e altura 5 -> A_lat = 4 · (6 · 5 / 2) = 60 m².",
      stepByStep: [
        "1. Lado da base quadrada: L = 6 m -> Apótema da base (distância do centro ao lado): m = L / 2 = 3 m.",
        "2. Altura vertical da pirâmide: h = 4 m.",
        "3. Relação fundamental no triângulo retângulo interno: g² = h² + m².",
        "4. g² = 4² + 3² = 16 + 9 = 25 -> g = 5 metros (apótema da pirâmide, que é a altura de cada triângulo lateral).",
        "5. Área de uma face lateral triangular: A_face = (base · g) / 2 = (6 · 5) / 2 = 15 m².",
        "6. Como são 4 faces laterais e não há lona na base: A_total = 4 · 15 = 60 m²."
      ],
      coreConcept: "Pirâmide Regular, Apótema e Área da Superfície Lateral",
      trapWarning: "ERRO MAIS COMUM NO ENEM: Usar a altura vertical (h = 4) no cálculo da área das faces laterais em vez do apótema inclinado da pirâmide (g = 5)!"
    },
    commonTraps: [
      "Usar a altura vertical da pirâmide no cálculo da área do triângulo lateral",
      "Incluir a área da base quando o problema diz expressamente 'sem piso de lona'"
    ],
    tags: ["piramide-regular", "apotema", "area-lateral", "geometria-espacial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-024",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Setor Circular e Pivô Central de Irrigação",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma fazenda no cerrado goiano, a irrigação de uma lavoura de soja é realizada por um pivô central. O braço mecânico de irrigação tem raio de alcance R = 300 metros. Em virtude de uma cerca de divisa de propriedade, o pivô só pode girar descrevendo um setor circular de ângulo central de 120°. Considere π ≈ 3,14.",
      source: "ENEM Agronomia e Geometria Circular"
    },
    prompt: "A área cultivada que recebe irrigação por esse pivô central é de aproximadamente:",
    options: [
      { id: "a", text: "94.200 m² (ou 9,42 hectares).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "282.600 m² (ou 28,26 hectares).", isCorrect: false, distractorRationale: "Esse seria o círculo completo de 360°, sem considerar a limitação do ângulo de 120°." },
      { id: "c", text: "47.100 m² (ou 4,71 hectares).", isCorrect: false, distractorRationale: "Calculou como se o ângulo central fosse de apenas 60° (um sexto de volta)." },
      { id: "d", text: "31.400 m² (ou 3,14 hectares).", isCorrect: false, distractorRationale: "Errou a potência de 300 ao quadrado." },
      { id: "e", text: "141.300 m² (ou 14,13 hectares).", isCorrect: false, distractorRationale: "Calculou a metade do círculo (180°)." }
    ],
    detailedExplanation: {
      summary: "Um ângulo central de 120° corresponde a 120° / 360° = 1/3 do círculo completo. Área do círculo total: A_circ = π · R² = 3,14 · 300² = 3,14 · 90.000 = 282.600 m². Área do setor: A_setor = 282.600 / 3 = 94.200 m² (9,42 ha).",
      stepByStep: [
        "1. Fração do círculo: 120° / 360° = 1/3.",
        "2. Raio do braço do pivô: R = 300 metros.",
        "3. Área de um círculo completo: A = π · R² = 3,14 · (300)² = 3,14 · 90.000 = 282.600 m².",
        "4. Área do setor de 120°: A_setor = 282.600 / 3 = 94.200 m².",
        "5. Em hectares (1 ha = 10.000 m²): 94.200 / 10.000 = 9,42 hectares."
      ],
      coreConcept: "Área do Setor Circular e Fração de Volta",
      trapWarning: "Lembre-se: 1 hectare = 10.000 m² (um quadrado de 100 m de lado). Essa conversão cai todo ano no ENEM!"
    },
    commonTraps: [
      "Esquecer de dividir por 3 para obter o setor de 120°",
      "Errar a conversão de m² para hectares"
    ],
    tags: ["setor-circular", "pivo-central", "area-do-circulo", "hectares"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-GEO-025",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Empacotamento e Cubos em Caixa Paralelepipédica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma fábrica de sabonetes produz barras perfeitamente cúbicas com aresta medindo 5 cm. Para envio aos centros de distribuição, os sabonetes devem ser empacotados em caixas de papelão em formato de paralelepípedo retângulo com dimensões internas de 28 cm de comprimento, 18 cm de largura e 12 cm de altura, sem amassar ou cortar os sabonetes.",
      source: "ENEM Logística e Empacotamento Discreto"
    },
    prompt: "Qual é o número MÁXIMO de sabonetes cúbicos que cabem perfeitamente organizados dentro de uma dessas caixas de papelão?",
    options: [
      { id: "a", text: "30 sabonetes.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "48 sabonetes.", isCorrect: false, distractorRationale: "Dividiu o volume total da caixa pelo volume do sabonete: 6.048 / 125 = 48,38, esquecendo que os sabonetes são rígidos e não se deformam como líquido." },
      { id: "c", text: "40 sabonetes.", isCorrect: false, distractorRationale: "Errou a contagem inteira de peças por dimensão." },
      { id: "d", text: "24 sabonetes.", isCorrect: false, distractorRationale: "Fez 4 x 3 x 2 em vez de 5 x 3 x 2." },
      { id: "e", text: "36 sabonetes.", isCorrect: false, distractorRationale: "Estimou erroneamente as fileiras." }
    ],
    detailedExplanation: {
      summary: "Problemas de empacotamento de sólidos rígidos exigem divisão INTEIRA de cada dimensão, e NUNCA divisão de volumes contínuos! Comprimento: 28 / 5 = 5 (sobram 3 cm vazios). Largura: 18 / 5 = 3 (sobram 3 cm vazios). Altura: 12 / 5 = 2 (sobram 2 cm vazios). Total = 5 · 3 · 2 = 30 sabonetes.",
      stepByStep: [
        "1. Aresta do cubo = 5 cm.",
        "2. Ao longo do comprimento (28 cm): cabem floor(28 / 5) = 5 cubos em linha (25 cm ocupados, 3 cm vazios).",
        "3. Ao longo da largura (18 cm): cabem floor(18 / 5) = 3 cubos em fila (15 cm ocupados, 3 cm vazios).",
        "4. Ao longo da altura (12 cm): cabem floor(12 / 5) = 2 camadas (10 cm ocupados, 2 cm vazios).",
        "5. Total máximo de sabonetes = 5 · 3 · 2 = 30 sabonetes.",
        "6. Armadilha clássica: Volume da caixa = 28 · 18 · 12 = 6.048 cm³. Volume de 1 sabonete = 5³ = 125 cm³. 6.048 / 125 = 48,38. Marcar 48 é o erro clássico que a banca do ENEM adora punir na TRI!"
      ],
      coreConcept: "Empacotamento Discreto vs. Divisão de Volume Contínuo",
      trapWarning: "REGRA DE OURO DO ENEM: Se os objetos são sólidos rígidos (caixas, tijolos, sabonetes), NUNCA divida o volume total pelo volume unitário! Calcule quantos cabem no comprimento, na largura e na altura de forma inteira e multiplique os três."
    },
    commonTraps: [
      "Dividir o volume da caixa pelo volume do cubo e arredondar para baixo (daria 48)",
      "Achar que é possível derreter ou deformar os sabonetes para preencher os espaços vazios"
    ],
    tags: ["empacotamento", "paralelepipedo", "cubo", "geometria-espacial", "logistica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

