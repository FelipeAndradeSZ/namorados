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
    cityId: "brasilia",
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
    cityId: "belo-horizonte",
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
    cityId: "brasilia",
    context: {
      supportText: "No setor hoteleiro, um reservatório de água possui formato cilíndrico, com área da base igual a 10 m² e altura de 5 m.",
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
    cityId: "belo-horizonte",
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
    cityId: "brasilia",
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
    cityId: "brasilia",
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
    cityId: "sao-paulo",
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
    cityId: "sao-paulo",
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
    cityId: "brasilia",
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
    cityId: "rio-de-janeiro",
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
    cityId: "belo-horizonte",
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
    cityId: "belo-horizonte",
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
    cityId: "brasilia",
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
    cityId: "rio-de-janeiro",
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
    hubId: "b3-bolsa",
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
  }
];
