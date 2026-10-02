/**
 * BANCO DE QUESTÕES DESTINO 1000
 * Módulo: Geometria Plana e Polígonos
 * Área: Matemática e suas Tecnologias
 * Total: 25 Questões originais e contextualizadas padrão ENEM
 * Competências: C2 | Habilidades: H6, H7, H8, H9
 */

export const QUESTIONS_GEOMETRIA_PLANA = [
  {
    id: "MAT-PLA-001",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Áreas de Figuras Planas - Trapézio e Pavimentação",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A prefeitura de um município decidiu revitalizar a praça central criando um canteiro de flores em formato de trapézio isósceles. A base maior do trapézio mede 18 metros, a base menor mede 10 metros e a distância perpendicular entre as bases é de 6 metros. Cada metro quadrado de grama sintética para o canteiro custa R$ 45,00.",
      source: "Secretaria Municipal de Obras e Urbanismo, 2024."
    },
    prompt: "O custo financeiro total estimado para a compra da grama necessária para cobrir integralmente esse canteiro será de",
    options: [
      {
        id: "a",
        text: "R$ 3.780,00",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Área do trapézio: A = (B + b) * h / 2 = (18 + 10) * 6 / 2 = 28 * 3 = 84 m². Custo total = 84 * 45 = R$ 3.780,00."
      },
      {
        id: "b",
        text: "R$ 4.860,00",
        isCorrect: false,
        distractorRationale: "Erro decorrente de usar apenas a base maior (18 * 6 = 108 m²; 108 * 45 = 4.860)."
      },
      {
        id: "c",
        text: "R$ 2.700,00",
        isCorrect: false,
        distractorRationale: "Erro decorrente de usar apenas a base menor (10 * 6 = 60 m²; 60 * 45 = 2.700)."
      },
      {
        id: "d",
        text: "R$ 7.560,00",
        isCorrect: false,
        distractorRationale: "Erro decorrente de esquecer de dividir a soma das bases por 2 na fórmula do trapézio (168 * 45 = 7.560)."
      },
      {
        id: "e",
        text: "R$ 3.500,00",
        isCorrect: false,
        distractorRationale: "Erro de cálculo aritmético na multiplicação da área pelo custo unitário."
      }
    ],
    detailedExplanation: {
      summary: "Calcula-se a área do trapézio A = (B + b)h/2 e multiplica-se pelo valor unitário por metro quadrado.",
      stepByStep: [
        "1. Dados: Base maior B = 18 m; Base menor b = 10 m; Altura h = 6 m; Custo unitário = R$ 45,00/m².",
        "2. Fórmula da área do trapézio: A = [(B + b) * h] / 2.",
        "3. Substituição: A = [(18 + 10) * 6] / 2 = (28 * 6) / 2 = 28 * 3 = 84 m².",
        "4. Cálculo do custo financeiro total: Custo = 84 m² * R$ 45,00/m² = R$ 3.780,00."
      ],
      coreConcept: "Área do Trapézio: A = ((B + b) * h) / 2. Aplicação direta em orçamentos de engenharia e urbanismo.",
      trapWarning: "Atenção para não esquecer a divisão por 2 da fórmula do trapézio."
    },
    tags: ["matematica", "geometria-plana", "trapezio", "areas", "orcamento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-002",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Plana",
    subtopic: "Teorema de Pitágoras e Relações Métricas no Triângulo Retângulo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para construir uma rampa reta de acessibilidade entre uma calçada e a entrada de uma policlínica de saúde, o engenheiro sabe que a entrada está a uma altura vertical de 1,2 metro em relação ao solo horizontal. A distância horizontal do ponto de início da rampa até a base do edifício é de 3,5 metros.",
      source: "Manual de Acessibilidade Urbana e Edificações, NBR 9050, 2020."
    },
    prompt: "O comprimento linear da superfície inclinada dessa rampa reta, em metros, mede exatamente",
    options: [
      {
        id: "a",
        text: "3,7 m",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pelo Teorema de Pitágoras: L² = 1,2² + 3,5² = 1,44 + 12,25 = 13,69. Como √13,69 = 3,7, o comprimento é 3,7 metros."
      },
      {
        id: "b",
        text: "4,1 m",
        isCorrect: false,
        distractorRationale: "Erro decorrente de aproximação imprecisa ou confusão com o terno pitagórico 9-40-41."
      },
      {
        id: "c",
        text: "4,7 m",
        isCorrect: false,
        distractorRationale: "Erro somando diretamente as duas medidas (1,2 + 3,5 = 4,7) ignorando o triângulo retângulo."
      },
      {
        id: "d",
        text: "3,9 m",
        isCorrect: false,
        distractorRationale: "Erro aritmético ao extrair a raiz quadrada de 13,69 (supor que fosse 3,9² = 15,21)."
      },
      {
        id: "e",
        text: "2,3 m",
        isCorrect: false,
        distractorRationale: "Erro subtraindo os catetos (3,5 - 1,2 = 2,3)."
      }
    ],
    detailedExplanation: {
      summary: "Aplica-se o Teorema de Pitágoras para determinar a hipotenusa conhecendo a altura e a projeção horizontal.",
      stepByStep: [
        "1. A rampa, o solo e a parede formam um triângulo retângulo.",
        "2. Cateto vertical: c1 = 1,2 m. Cateto horizontal: c2 = 3,5 m. Hipotenusa (rampa): L.",
        "3. Pelo Teorema de Pitágoras: L² = c1² + c2².",
        "4. L² = (1,2)² + (3,5)² = 1,44 + 12,25 = 13,69.",
        "5. L = √13,69 = 3,7 metros (pois 37² = 1369)."
      ],
      coreConcept: "Teorema de Pitágoras: a² = b² + c². O terno pitagórico proporcional aqui é 12-35-37 (1,2 - 3,5 - 3,7).",
      trapWarning: "Nunca some os catetos para achar o comprimento de uma rampa inclinada; use sempre a relação pitagórica."
    },
    tags: ["matematica", "geometria-plana", "pitagoras", "triangulo-retangulo", "acessibilidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-003",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Círculo e Circunferência - Coroa Circular e Irrigação",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um sistema de pivô central com braço regulável irriga uma lavoura circular. Em uma determinada programação, o aspersor inicial cobre apenas o anel situado entre o raio interno de 20 metros e o raio externo de 30 metros a partir do centro de rotação (adote pi = 3,14).",
      source: "Revista Brasileira de Engenharia Agrícola e Ambiental, 2023."
    },
    prompt: "A área da lavoura efetivamente irrigada por essa faixa em formato de coroa circular é igual a",
    options: [
      {
        id: "a",
        text: "1.570 m²",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Área da coroa = pi * (R² - r²) = 3,14 * (30² - 20²) = 3,14 * (900 - 400) = 3,14 * 500 = 1.570 m²."
      },
      {
        id: "b",
        text: "314 m²",
        isCorrect: false,
        distractorRationale: "Erro calculando pi * (R - r)² = 3,14 * (10)² = 314 m² (erro clássico de elevar a diferença ao quadrado em vez da diferença dos quadrados)."
      },
      {
        id: "c",
        text: "2.826 m²",
        isCorrect: false,
        distractorRationale: "Erro calculando apenas o círculo externo completo pi * 30² = 2.826 m² sem subtrair o raio interno."
      },
      {
        id: "d",
        text: "1.256 m²",
        isCorrect: false,
        distractorRationale: "Erro calculando apenas o círculo interno pi * 20² = 1.256 m²."
      },
      {
        id: "e",
        text: "2.050 m²",
        isCorrect: false,
        distractorRationale: "Erro aritmético na multiplicação de 3,14 por 500."
      }
    ],
    detailedExplanation: {
      summary: "A área da coroa circular é a diferença entre as áreas dos dois círculos concêntricos: A = pi*(R² - r²).",
      stepByStep: [
        "1. Raio externo R = 30 m; Raio interno r = 20 m; pi = 3,14.",
        "2. Área do círculo maior: A_ext = pi * R² = 3,14 * 30² = 3,14 * 900 = 2.826 m².",
        "3. Área do círculo menor: A_int = pi * r² = 3,14 * 20² = 3,14 * 400 = 1.256 m².",
        "4. Área da coroa = A_ext - A_int = 2.826 - 1.256 = 1.570 m².",
        "5. De forma direta: A = pi * (R² - r²) = 3,14 * (900 - 400) = 3,14 * 500 = 1.570 m²."
      ],
      coreConcept: "Coroa Circular: Área = pi * (R² - r²). Jamais confunda (R² - r²) com (R - r)².",
      trapWarning: "Cuidado com o erro clássico: (30 - 20)² = 10² = 100, que levaria erradamente a 314 m²."
    },
    tags: ["matematica", "geometria-plana", "circulo", "coroa-circular", "areas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-004",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Plana",
    subtopic: "Semelhança de Triângulos e Razão entre Áreas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma planta topográfica desenhada na escala linear de 1 : 200, uma reserva ecológica triangular tem base de 6 cm e altura de 4 cm no papel.",
      source: "Manual de Cartografia e Topografia Básica, 2021."
    },
    prompt: "A área real ocupada por essa reserva ecológica no terreno, em metros quadrados (m²), é de",
    options: [
      {
        id: "a",
        text: "48 m²",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Área no papel = 6 * 4 / 2 = 12 cm². Na escala 1:200, 1 cm no papel = 200 cm = 2 m reais. A razão linear é 1 cm = 2 m, logo 1 cm² = 4 m². Assim, Área real = 12 * 4 = 48 m²."
      },
      {
        id: "b",
        text: "24 m²",
        isCorrect: false,
        distractorRationale: "Erro multiplicando a área linearmente por 2 em vez de elevar a razão ao quadrado (12 * 2 = 24)."
      },
      {
        id: "c",
        text: "96 m²",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de dividir a área do triângulo por 2 no cálculo inicial da planta (24 * 4 = 96)."
      },
      {
        id: "d",
        text: "480 m²",
        isCorrect: false,
        distractorRationale: "Erro de conversão de unidades decimais entre centímetro e metro."
      },
      {
        id: "e",
        text: "2.400 m²",
        isCorrect: false,
        distractorRationale: "Erro aplicando o fator 200 diretamente na área em centímetros quadrados sem converter unidades."
      }
    ],
    detailedExplanation: {
      summary: "Quando as dimensões lineares aumentam por um fator k, a área de uma figura plana aumenta pelo fator k².",
      stepByStep: [
        "1. Dimensões no papel: base b = 6 cm, altura h = 4 cm.",
        "2. Área no desenho: A_papel = (b * h) / 2 = (6 * 4) / 2 = 12 cm².",
        "3. Escala linear de 1 : 200 significa que 1 cm no mapa corresponde a 200 cm reais = 2 metros reais.",
        "4. Logo, as medidas reais são: base real = 6 * 2 m = 12 m; altura real = 4 * 2 m = 8 m.",
        "5. Área real = (12 m * 8 m) / 2 = 96 / 2 = 48 m².",
        "6. Pela propriedade de semelhança: se a razão linear é k = 2 m/cm, a razão de áreas é k² = 4 m²/cm². Logo, 12 cm² * 4 m²/cm² = 48 m²."
      ],
      coreConcept: "Razão de Semelhança: Se a razão linear entre figuras semelhantes é k, a razão entre suas áreas é k².",
      trapWarning: "Nunca multiplique uma área em cm² diretamente pela escala linear (200) sem elevar ao quadrado ou converter para metros primeiro."
    },
    tags: ["matematica", "geometria-plana", "semelhanca", "escala", "razao-de-areas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-005",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Polígonos Regulares - Hexágono Regular e Ladrilhamento",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um artista plástico cria um mosaico decorativo composto por placas cerâmicas no formato de hexágonos regulares com 20 cm de lado. Ele sabe que um hexágono regular pode ser decomposto em seis triângulos equiláteros congruentes (considere a aproximação raiz quadrada de 3 = 1,73).",
      source: "Revista de Design e Geometria Aplicada, 2022."
    },
    prompt: "A área ocupada por cada uma dessas placas hexagonais cerâmicas é de aproximadamente",
    options: [
      {
        id: "a",
        text: "1.038 cm²",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Área do triângulo equilátero: (L² * √3) / 4 = (400 * 1,73) / 4 = 100 * 1,73 = 173 cm². Como são 6 triângulos: 6 * 173 = 1.038 cm²."
      },
      {
        id: "b",
        text: "692 cm²",
        isCorrect: false,
        distractorRationale: "Erro multiplicando por 4 triângulos em vez de 6 (4 * 173 = 692)."
      },
      {
        id: "c",
        text: "1.730 cm²",
        isCorrect: false,
        distractorRationale: "Erro multiplicando por 10 ou aplicando fórmula de decágono."
      },
      {
        id: "d",
        text: "519 cm²",
        isCorrect: false,
        distractorRationale: "Erro calculando apenas 3 triângulos equiláteros (metade do hexágono)."
      },
      {
        id: "e",
        text: "2.076 cm²",
        isCorrect: false,
        distractorRationale: "Erro duplicando a área total ou esquecendo de dividir o triângulo por 4."
      }
    ],
    detailedExplanation: {
      summary: "O hexágono regular de lado L é formado por 6 triângulos equiláteros de lado L: A = 6 * (L²√3 / 4).",
      stepByStep: [
        "1. Lado do hexágono: L = 20 cm. Aproximação: √3 = 1,73.",
        "2. Fórmula da área do triângulo equilátero: A_tri = (L² * √3) / 4.",
        "3. A_tri = (20² * 1,73) / 4 = (400 * 1,73) / 4 = 100 * 1,73 = 173 cm².",
        "4. Um hexágono regular é composto por 6 triângulos equiláteros congruentes que convergem ao centro.",
        "5. A_hex = 6 * A_tri = 6 * 173 = 1.038 cm²."
      ],
      coreConcept: "Área do Hexágono Regular: A = (3 * L² * √3) / 2 = 6 * (L² * √3 / 4). É uma das figuras mais cobradas no ENEM.",
      trapWarning: "Lembre-se de que a altura do triângulo equilátero é L√3 / 2, e sua área é L²√3 / 4."
    },
    tags: ["matematica", "geometria-plana", "poligonos", "hexagono-regular", "areas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-006",
    area: "matematica",
    competence: 2,
    skill: 9,
    topic: "Geometria Plana",
    subtopic: "Trigonometria no Triângulo Retângulo - Aplicação em Sombras",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em certo horário da manhã, os raios solares incidem sobre um mastro vertical de bandeira formando um ângulo de 30° com o solo plano e horizontal. Nesse instante, o mastro projeta no solo uma sombra retilínea de 12 metros de comprimento (utilize raiz quadrada de 3 = 1,73).",
      source: "Exame Nacional do Ensino Médio - Matriz de Referência de Matemática."
    },
    prompt: "A altura do mastro vertical, em metros, é de aproximadamente",
    options: [
      {
        id: "a",
        text: "6,92 m",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. tg(30°) = altura / sombra => h = 12 * tg(30°) = 12 * (√3 / 3) = 4 * √3 = 4 * 1,73 = 6,92 metros."
      },
      {
        id: "b",
        text: "6,00 m",
        isCorrect: false,
        distractorRationale: "Erro confundindo tangente com seno: 12 * sen(30°) = 12 * 0,5 = 6,00 m."
      },
      {
        id: "c",
        text: "10,39 m",
        isCorrect: false,
        distractorRationale: "Erro usando cosseno no lugar da tangente: 12 * cos(30°) = 12 * (√3/2) = 6 * 1,73 = 10,39 m."
      },
      {
        id: "d",
        text: "20,76 m",
        isCorrect: false,
        distractorRationale: "Erro invertendo a razão trigonométrica: 12 / tg(30°) = 12 * √3 = 20,76 m."
      },
      {
        id: "e",
        text: "4,00 m",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de multiplicar por √3 após dividir 12 por 3."
      }
    ],
    detailedExplanation: {
      summary: "Relaciona-se o cateto oposto (altura) e o cateto adjacente (sombra) através da razão tangente.",
      stepByStep: [
        "1. Cateto adjacente ao ângulo de 30° = sombra = 12 m.",
        "2. Cateto oposto ao ângulo de 30° = altura do mastro = h.",
        "3. Pela definição: tg(30°) = Cateto Oposto / Cateto Adjacente = h / 12.",
        "4. Como tg(30°) = √3 / 3, temos: h / 12 = √3 / 3.",
        "5. h = (12 * √3) / 3 = 4 * √3.",
        "6. Com √3 = 1,73: h = 4 * 1,73 = 6,92 metros."
      ],
      coreConcept: "Trigonometria básica: tg(θ) = Cateto Oposto / Cateto Adjacente. Ângulos notáveis: tg(30°) = √3/3, tg(45°) = 1, tg(60°) = √3.",
      trapWarning: "Cuidado para não usar seno ou cosseno quando a hipotenusa não é conhecida nem solicitada."
    },
    tags: ["matematica", "geometria-plana", "trigonometria", "tangente", "angulos-notaveis"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-007",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Área de Losango e Geometria da Bandeira Nacional",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um painel comemorativo reproduz o losango amarelo central da Bandeira Nacional do Brasil com diagonal maior medindo 3,2 metros e diagonal menor medindo 2,0 metros.",
      source: "Lei Federal nº 5.700/1971 (Símbolos Nacionais do Brasil)."
    },
    prompt: "A área plana ocupada por esse losango amarelo é de",
    options: [
      {
        id: "a",
        text: "3,2 m²",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Área do losango: A = (D * d) / 2 = (3,2 * 2,0) / 2 = 6,4 / 2 = 3,2 m²."
      },
      {
        id: "b",
        text: "6,4 m²",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de dividir o produto das diagonais por 2 (calculando a área do retângulo circunscrito)."
      },
      {
        id: "c",
        text: "5,2 m²",
        isCorrect: false,
        distractorRationale: "Erro somando as diagonais (3,2 + 2,0 = 5,2) em vez de calcular a área."
      },
      {
        id: "d",
        text: "2,6 m²",
        isCorrect: false,
        distractorRationale: "Erro dividindo a soma das diagonais por 2."
      },
      {
        id: "e",
        text: "1,6 m²",
        isCorrect: false,
        distractorRationale: "Erro dividindo o resultado final por 4 em vez de 2."
      }
    ],
    detailedExplanation: {
      summary: "A área do losango é dada pela metade do produto das suas duas diagonais perpendiculares.",
      stepByStep: [
        "1. Diagonal maior D = 3,2 m.",
        "2. Diagonal menor d = 2,0 m.",
        "3. Fórmula da área do losango: A = (D * d) / 2.",
        "4. Cálculo: A = (3,2 * 2,0) / 2 = 6,4 / 2 = 3,2 m²."
      ],
      coreConcept: "Área do Losango: A = (D * d) / 2. As diagonais de um losango se cruzam em ponto médio e são perpendiculares.",
      trapWarning: "Lembre-se: o produto D * d fornece a área do retângulo envolvente; o losango ocupa exatamente a metade dessa área."
    },
    tags: ["matematica", "geometria-plana", "losango", "diagonais", "areas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-008",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Plana",
    subtopic: "Teorema de Tales e Divisão Proporcional de Terrenos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Três lotes urbanos contíguos (Lote A, Lote B e Lote C) têm frentes para a Rua das Flores e fundos para a Avenida Central, que não são paralelas entre si. As divisas laterais entre os lotes são segmentos de retas paralelas perpendiculares à Rua das Flores. Na Rua das Flores, as frentes dos lotes medem, respectivamente: Lote A = 15 m; Lote B = 20 m; Lote C = 25 m. O comprimento total da testada dos três lotes somados na Avenida Central é de 90 metros.",
      source: "Cadastro Técnico Imobiliário Municipal, 2024."
    },
    prompt: "Pelo Teorema de Tales, a extensão da frente do Lote B voltada para a Avenida Central mede",
    options: [
      {
        id: "a",
        text: "30 m",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Soma das frentes na Rua das Flores = 15 + 20 + 25 = 60 m. Razão de proporcionalidade = 90 / 60 = 1,5. Frente do Lote B na Avenida = 20 * 1,5 = 30 metros."
      },
      {
        id: "b",
        text: "25 m",
        isCorrect: false,
        distractorRationale: "Erro estimando a média aritmética simples (90 / 3 = 30) e subtraindo arbitrariamente."
      },
      {
        id: "c",
        text: "35 m",
        isCorrect: false,
        distractorRationale: "Erro de cálculo aritmético na razão de proporcionalidade."
      },
      {
        id: "d",
        text: "22,5 m",
        isCorrect: false,
        distractorRationale: "Erro calculando a medida do Lote A (15 * 1,5 = 22,5 m) em vez do Lote B."
      },
      {
        id: "e",
        text: "37,5 m",
        isCorrect: false,
        distractorRationale: "Erro calculando a medida do Lote C (25 * 1,5 = 37,5 m) em vez do Lote B."
      }
    ],
    detailedExplanation: {
      summary: "Pelo Teorema de Tales, feixes de retas paralelas determinam segmentos proporcionais em retas transversais.",
      stepByStep: [
        "1. As divisas laterais são retas paralelas cortadas por duas transversais (Rua das Flores e Avenida Central).",
        "2. Soma das frentes na transversal 1: 15 + 20 + 25 = 60 m.",
        "3. Soma das frentes na transversal 2 = 90 m.",
        "4. Constante de proporcionalidade k = 90 / 60 = 1,5 (ou seja, cada metro na Rua das Flores equivale a 1,5 m na Avenida Central).",
        "5. Frente do Lote B na Avenida Central: x_B = 20 * 1,5 = 30 metros.",
        "6. Verificação: Lote A = 15 * 1,5 = 22,5 m; Lote B = 30 m; Lote C = 25 * 1,5 = 37,5 m. Soma = 22,5 + 30 + 37,5 = 90 m."
      ],
      coreConcept: "Teorema de Tales: a / a' = b / b' = c / c' = (a + b + c) / (a' + b' + c').",
      trapWarning: "Verifique qual lote foi especificamente solicitado pelo enunciado para não marcar a medida de outro lote."
    },
    tags: ["matematica", "geometria-plana", "teorema-de-tales", "proporcionalidade", "lotes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-009",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Setor Circular e Segmento de Pizza Industrial",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma pizzaria artesanal, uma pizza gigante circular de raio igual a 30 cm é fatiada em 8 pedaços iguais no formato de setores circulares perfeitos (considere a aproximação pi = 3,14).",
      source: "Revista de Engenharia de Alimentos e Embalagens, 2023."
    },
    prompt: "A área superficial de uma única fatia dessa pizza é de",
    options: [
      {
        id: "a",
        text: "353,25 cm²",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Área total da pizza = pi * R² = 3,14 * 30² = 3,14 * 900 = 2.826 cm². Área de 1 fatia (1/8 da pizza) = 2.826 / 8 = 353,25 cm²."
      },
      {
        id: "b",
        text: "471,00 cm²",
        isCorrect: false,
        distractorRationale: "Erro dividindo por 6 fatias em vez de 8 fatias (2.826 / 6 = 471)."
      },
      {
        id: "c",
        text: "706,50 cm²",
        isCorrect: false,
        distractorRationale: "Erro dividindo por 4 fatias (2.826 / 4 = 706,5)."
      },
      {
        id: "d",
        text: "117,75 cm²",
        isCorrect: false,
        distractorRationale: "Erro usando raio 15 cm ou dividindo por 24."
      },
      {
        id: "e",
        text: "282,60 cm²",
        isCorrect: false,
        distractorRationale: "Erro dividindo por 10 fatias."
      }
    ],
    detailedExplanation: {
      summary: "A área de uma fatia é obtida calculando a área total do círculo e dividindo pelo número de partes iguais.",
      stepByStep: [
        "1. Raio do círculo R = 30 cm; pi = 3,14.",
        "2. Área total da circunferência: A_total = pi * R² = 3,14 * (30)² = 3,14 * 900 = 2.826 cm².",
        "3. Como a pizza foi dividida em 8 fatias iguais, cada setor circular possui ângulo central de 360° / 8 = 45°.",
        "4. A área do setor é: A_fatia = A_total / 8 = 2.826 / 8 = 353,25 cm²."
      ],
      coreConcept: "Área do Setor Circular: A_setor = (θ / 360°) * pi * R². Quando o círculo é dividido em n partes iguais, A_setor = A_total / n.",
      trapWarning: "Verifique se o dado fornecido é o raio (30 cm) ou o diâmetro da pizza."
    },
    tags: ["matematica", "geometria-plana", "circulo", "setor-circular", "areas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-010",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Triângulo Equilátero - Área e Perímetro de Canteiros",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um projeto paisagístico prevê a instalação de um canteiro triangular equilátero cujo perímetro total é de 18 metros. Para cobrir o solo com lascas de madeira tratada, o jardineiro necessita calcular a área exata do canteiro (utilize raiz quadrada de 3 = 1,7).",
      source: "Manual Prático de Jardinagem e Paisagismo, 2021."
    },
    prompt: "A área desse canteiro triangular equilátero, em metros quadrados, é de aproximadamente",
    options: [
      {
        id: "a",
        text: "15,3 m²",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Perímetro = 3L = 18 m => L = 6 m. Área do triângulo equilátero = (L² * √3) / 4 = (36 * 1,7) / 4 = 9 * 1,7 = 15,3 m²."
      },
      {
        id: "b",
        text: "30,6 m²",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de dividir por 4 na fórmula da área: 36 * 1,7 / 2 = 30,6 m²."
      },
      {
        id: "c",
        text: "18,0 m²",
        isCorrect: false,
        distractorRationale: "Confusão entre a medida do perímetro e a área superficial."
      },
      {
        id: "d",
        text: "10,2 m²",
        isCorrect: false,
        distractorRationale: "Erro calculando L = 6 e fazendo 6 * 1,7 = 10,2 m²."
      },
      {
        id: "e",
        text: "61,2 m²",
        isCorrect: false,
        distractorRationale: "Erro usando o perímetro de 18 m no lugar do lado L: (18² * 1,7) / 4."
      }
    ],
    detailedExplanation: {
      summary: "Determina-se o lado L = 18/3 = 6 m e aplica-se a fórmula A = L²√3 / 4.",
      stepByStep: [
        "1. Triângulo equilátero tem 3 lados congruentes: 3L = 18 m => L = 6 m.",
        "2. Fórmula da área do triângulo equilátero: A = (L² * √3) / 4.",
        "3. Substituição: A = (6² * 1,7) / 4 = (36 * 1,7) / 4.",
        "4. Simplificação: 36 / 4 = 9.",
        "5. Cálculo final: A = 9 * 1,7 = 15,3 m²."
      ],
      coreConcept: "Triângulo Equilátero de lado L: Altura h = (L√3) / 2; Área A = (L²√3) / 4.",
      trapWarning: "Cuidado: não use o perímetro no lugar do lado L da figura!"
    },
    tags: ["matematica", "geometria-plana", "triangulo-equilatero", "perimetro", "areas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-011",
    area: "matematica",
    competence: 2,
    skill: 6,
    topic: "Geometria Plana",
    subtopic: "Ângulos Internos e Diagonais de Polígonos Convexos",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma estrutura metálica de sustentação de teto, uma viga principal possui o perfil transversal de um octógono regular (polígono de 8 lados). Os operários necessitam regular a máquina de corte para o ângulo interno exato das uniões das barras metálicas.",
      source: "Manual de Estruturas Metálicas e Serralheria Industrial, 2023."
    },
    prompt: "A medida do ângulo interno de cada vértice desse octógono regular é de",
    options: [
      {
        id: "a",
        text: "135°",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Soma dos ângulos internos S_i = (n - 2) * 180° = (8 - 2) * 180° = 6 * 180° = 1.080°. Ângulo interno a_i = 1.080° / 8 = 135°."
      },
      {
        id: "b",
        text: "120°",
        isCorrect: false,
        distractorRationale: "120° é o ângulo interno do hexágono regular (n = 6)."
      },
      {
        id: "c",
        text: "140°",
        isCorrect: false,
        distractorRationale: "140° é o ângulo interno do eneágono regular (n = 9)."
      },
      {
        id: "d",
        text: "108°",
        isCorrect: false,
        distractorRationale: "108° é o ângulo interno do pentágono regular (n = 5)."
      },
      {
        id: "e",
        text: "45°",
        isCorrect: false,
        distractorRationale: "45° é o ângulo externo do octógono (360° / 8 = 45°), que é o suplemento do ângulo interno."
      }
    ],
    detailedExplanation: {
      summary: "Calcula-se o ângulo interno de um polígono regular pela fórmula a_i = (n - 2)*180° / n ou por a_i = 180° - a_e.",
      stepByStep: [
        "1. Número de lados: n = 8.",
        "2. Método 1 (Ângulo externo): a_e = 360° / n = 360° / 8 = 45°.",
        "3. Como o ângulo interno e o externo são suplementares: a_i + a_e = 180° => a_i = 180° - 45° = 135°.",
        "4. Método 2 (Soma dos internos): S_i = (n - 2) * 180° = 6 * 180° = 1.080°.",
        "5. a_i = S_i / n = 1.080° / 8 = 135°."
      ],
      coreConcept: "Polígonos Regulares: a_i = (n - 2) * 180° / n. O ângulo externo a_e = 360° / n é sempre o caminho mais rápido para calcular o ângulo interno.",
      trapWarning: "Cuidado para não confundir o ângulo interno (135°) com o ângulo externo (45°)."
    },
    tags: ["matematica", "geometria-plana", "poligonos", "angulos-internos", "octogono"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-012",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Área de Regiões Compostas e Desperdício de Material",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "De uma placa quadrada de alumínio de 40 cm de lado, uma indústria automobilística corta e retira quatro círculos idênticos de raio 10 cm, tangentes entre si e aos lados do quadrado, para a fabricação de filtros mecânicos (utilize pi = 3,14).",
      source: "Manual de Estampagem e Conformação Mecânica, 2022."
    },
    prompt: "A área de alumínio que sobra da chapa quadrada (retalho/desperdício) após o corte dos quatro círculos é de",
    options: [
      {
        id: "a",
        text: "344 cm²",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Área do quadrado = 40 * 40 = 1.600 cm². Área de 1 círculo = pi * r² = 3,14 * 10² = 314 cm². Área dos 4 círculos = 4 * 314 = 1.256 cm². Sobra = 1.600 - 1.256 = 344 cm²."
      },
      {
        id: "b",
        text: "400 cm²",
        isCorrect: false,
        distractorRationale: "Erro aproximando pi = 3 (1.600 - 1.200 = 400)."
      },
      {
        id: "c",
        text: "1.256 cm²",
        isCorrect: false,
        distractorRationale: "Erro marcando a área cortada dos círculos em vez da sobra solicitada."
      },
      {
        id: "d",
        text: "628 cm²",
        isCorrect: false,
        distractorRationale: "Erro calculando a área de apenas dois círculos e subtraindo do total."
      },
      {
        id: "e",
        text: "156 cm²",
        isCorrect: false,
        distractorRationale: "Erro aritmético na subtração 1.600 - 1.256."
      }
    ],
    detailedExplanation: {
      summary: "A sobra de material é dada pela diferença entre a área da placa original e a soma das áreas das peças circulares recortadas.",
      stepByStep: [
        "1. Lado do quadrado = 40 cm. Área do quadrado A_quad = 40² = 1.600 cm².",
        "2. Raio de cada círculo r = 10 cm. Área de um círculo A_circ = pi * r² = 3,14 * 10² = 314 cm².",
        "3. Como são quatro círculos idênticos: A_cortada = 4 * 314 = 1.256 cm².",
        "4. Área restante de retalho: A_sobra = A_quad - A_cortada = 1.600 - 1.256 = 344 cm²."
      ],
      coreConcept: "Geometria Composta: Área de desperdício = Área inicial - Área das figuras recortadas.",
      trapWarning: "Sempre releia o comando: a questão pede a sobra (retalho) ou a área útil utilizada?"
    },
    tags: ["matematica", "geometria-plana", "areas-compostas", "circulo", "desperdicio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-013",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Plana",
    subtopic: "Relações Métricas no Triângulo Retângulo - Teorema da Altura",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na estrutura triangular de um telhado com formato de triângulo retângulo no vértice superior, a viga vertical que funciona como pontalete (altura relativa à hipotenusa) divide a viga horizontal de apoio (hipotenusa) em dois segmentos que medem 4 metros e 9 metros.",
      source: "Manual de Engenharia Civil e Estruturas de Cobertura, 2020."
    },
    prompt: "O comprimento da viga vertical do pontalete, em metros, mede exatamente",
    options: [
      {
        id: "a",
        text: "6 m",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pela relação métrica do triângulo retângulo: h² = m * n => h² = 4 * 9 = 36 => h = 6 metros."
      },
      {
        id: "b",
        text: "6,5 m",
        isCorrect: false,
        distractorRationale: "Erro calculando a média aritmética entre 4 e 9: (4 + 9)/2 = 6,5 m em vez da média geométrica."
      },
      {
        id: "c",
        text: "5 m",
        isCorrect: false,
        distractorRationale: "Erro associando arbitrariamente ao terno pitagórico 3-4-5."
      },
      {
        id: "d",
        text: "7,5 m",
        isCorrect: false,
        distractorRationale: "Erro de cálculo aritmético."
      },
      {
        id: "e",
        text: "13 m",
        isCorrect: false,
        distractorRationale: "Erro somando diretamente as duas projeções horizontais (4 + 9 = 13)."
      }
    ],
    detailedExplanation: {
      summary: "Em qualquer triângulo retângulo, a altura relativa à hipotenusa é a média geométrica das projeções dos catetos: h² = m * n.",
      stepByStep: [
        "1. O triângulo é retângulo no topo e h é a altura baixada sobre a hipotenusa.",
        "2. As projeções dos catetos sobre a hipotenusa são m = 4 m e n = 9 m.",
        "3. Relação métrica fundamental: h² = m * n.",
        "4. h² = 4 * 9 = 36.",
        "5. h = √36 = 6 metros."
      ],
      coreConcept: "Relações Métricas no Triângulo Retângulo: h² = m*n, b² = a*m, c² = a*n, a*h = b*c, a² = b² + c².",
      trapWarning: "A altura relativa à hipotenusa NUNCA é a média aritmética das projeções; é sempre a sua média geométrica (raiz do produto)."
    },
    tags: ["matematica", "geometria-plana", "triangulo-retangulo", "relacoes-metricas", "altura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-014",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Área de Paralelogramo e Custo de Plantio",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um agricultor familiar comprou um terreno no formato de um paralelogramo com base de 120 metros e altura perpendicular correspondente de 50 metros para cultivo de milho.",
      source: "Empresa de Assistência Técnica e Extensão Rural (EMATER), 2023."
    },
    prompt: "Sabendo que 1 hectare equivale a 10.000 m², a área desse terreno corresponde a",
    options: [
      {
        id: "a",
        text: "0,6 hectare",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Área do paralelogramo = base * altura = 120 * 50 = 6.000 m². Como 1 ha = 10.000 m², 6.000 / 10.000 = 0,6 ha."
      },
      {
        id: "b",
        text: "0,3 hectare",
        isCorrect: false,
        distractorRationale: "Erro dividindo por 2 na fórmula da área do paralelogramo como se fosse um triângulo (3.000 / 10.000 = 0,3)."
      },
      {
        id: "c",
        text: "1,2 hectare",
        isCorrect: false,
        distractorRationale: "Erro duplicando o valor da área."
      },
      {
        id: "d",
        text: "6,0 hectares",
        isCorrect: false,
        distractorRationale: "Erro na conversão de metros quadrados para hectare, usando 1.000 m² por hectare."
      },
      {
        id: "e",
        text: "0,85 hectare",
        isCorrect: false,
        distractorRationale: "Erro de cálculo aritmético na multiplicação 120 * 50."
      }
    ],
    detailedExplanation: {
      summary: "A área do paralelogramo é simplesmente base * altura. Converte-se para hectares dividindo por 10.000.",
      stepByStep: [
        "1. Base b = 120 m; Altura h = 50 m.",
        "2. Área do paralelogramo: A = b * h = 120 * 50 = 6.000 m².",
        "3. Conversão para hectare (1 ha = 10.000 m²): 6.000 m² / 10.000 m²/ha = 0,6 ha."
      ],
      coreConcept: "Área do Paralelogramo: A = base * altura (sem dividir por 2). Conversão agrícola: 1 hectare (ha) = 10.000 m².",
      trapWarning: "Não divida por 2! Paralelogramo não é triângulo."
    },
    tags: ["matematica", "geometria-plana", "paralelogramo", "hectare", "conversao-unidades"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-015",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Plana",
    subtopic: "Lei dos Cossenos em Terrenos Triangulares",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois lados adjacentes de uma praça triangular medem 80 metros e 50 metros, formando entre si um ângulo obtuso de 120°. O terceiro lado precisa ser cercado por uma mureta de proteção linear.",
      source: "Secretaria Municipal de Obras Públicas, 2024."
    },
    prompt: "Considerando cos(120°) = -0,5, o comprimento linear do terceiro lado dessa praça, em metros, mede exatamente",
    options: [
      {
        id: "a",
        text: "70√3 m",
        isCorrect: false,
        distractorRationale: "Erro confundindo cálculos com raiz de 3."
      },
      {
        id: "b",
        text: "110 m",
        isCorrect: false,
        distractorRationale: "Erro esquecendo da raiz quadrada ou operando aritméticas simples."
      },
      {
        id: "c",
        text: "70 m",
        isCorrect: false,
        distractorRationale: "70 seria o resultado se o ângulo fosse de 60° (pois 80² + 50² - 2*80*50*0,5 = 4.900 => √4.900 = 70)."
      },
      {
        id: "d",
        text: "10√129 m",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pela Lei dos Cossenos: a² = b² + c² - 2bc*cos(120°) = 80² + 50² - 2(80)(50)(-0,5) = 6.400 + 2.500 + 4.000 = 12.900. Logo, a = √12.900 = 10√129 metros."
      },
      {
        id: "e",
        text: "130 m",
        isCorrect: false,
        distractorRationale: "Erro somando diretamente 80 + 50 = 130."
      }
    ],
    detailedExplanation: {
      summary: "Aplica-se a Lei dos Cossenos: a² = b² + c² - 2bc*cos(θ), atentando para o cosseno negativo no 2º quadrante.",
      stepByStep: [
        "1. Lados conhecidos: b = 80 m, c = 50 m. Ângulo entre eles: θ = 120°.",
        "2. Como θ = 120° está no 2º quadrante, cos(120°) = -cos(60°) = -0,5.",
        "3. Lei dos Cossenos: a² = b² + c² - 2*b*c*cos(θ).",
        "4. a² = 80² + 50² - 2*(80)*(50)*(-0,5).",
        "5. a² = 6.400 + 2.500 - (-4.000) = 8.900 + 4.000 = 12.900.",
        "6. a = √12.900 = √(100 * 129) = 10√129 metros."
      ],
      coreConcept: "Lei dos Cossenos: a² = b² + c² - 2bc*cos(A). Quando o ângulo é obtuso (> 90°), o cosseno é negativo, somando o termo 2bc|cos(A)|.",
      trapWarning: "Cuidado com a regra de sinais: subtrair um número negativo equivale a SOMAR."
    },
    tags: ["matematica", "geometria-plana", "lei-dos-cossenos", "triangulo-qualquer", "trigonometria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-016",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Comprimento da Circunferência e Número de Voltas",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A roda de uma bicicleta ergométrica de treinamento possui raio de 35 cm. Durante um teste de resistência física, o atleta pedala até que a roda complete exatamente 2.000 voltas completas sem deslizamento (adote pi = 22/7).",
      source: "Laboratório de Biomecânica do Esporte, 2023."
    },
    prompt: "A distância linear total simulada percorrida por esse ciclista durante o teste, em quilômetros, é de",
    options: [
      {
        id: "a",
        text: "4,4 km",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Comprimento de 1 volta = 2 * pi * r = 2 * (22/7) * 35 = 2 * 22 * 5 = 220 cm = 2,2 metros. Em 2.000 voltas: 2.000 * 2,2 m = 4.400 metros = 4,4 km."
      },
      {
        id: "b",
        text: "2,2 km",
        isCorrect: false,
        distractorRationale: "Erro calculando com 1.000 voltas ou usando o raio no lugar do diâmetro."
      },
      {
        id: "c",
        text: "8,8 km",
        isCorrect: false,
        distractorRationale: "Erro duplicando o valor do comprimento."
      },
      {
        id: "d",
        text: "44 km",
        isCorrect: false,
        distractorRationale: "Erro de ordem de grandeza na conversão de metros para quilômetros."
      },
      {
        id: "e",
        text: "1,54 km",
        isCorrect: false,
        distractorRationale: "Erro calculando a área (pi*r²) em vez do perímetro da circunferência."
      }
    ],
    detailedExplanation: {
      summary: "A cada volta a roda percorre o comprimento C = 2*pi*r. Multiplica-se pelo número de voltas e converte-se para km.",
      stepByStep: [
        "1. Raio da roda r = 35 cm. pi = 22/7.",
        "2. Comprimento da circunferência: C = 2 * pi * r = 2 * (22/7) * 35.",
        "3. Simplificando 35 / 7 = 5: C = 2 * 22 * 5 = 220 cm = 2,2 metros.",
        "4. Distância total percorrida em 2.000 voltas: D = 2.000 * 2,2 m = 4.400 metros.",
        "5. Conversão para km (1 km = 1.000 m): 4.400 / 1.000 = 4,4 km."
      ],
      coreConcept: "Comprimento da Circunferência: C = 2*pi*r = pi*d. Uma volta completa corresponde a 1 perímetro linear.",
      trapWarning: "Quando a questão fornece pi como 22/7 e o raio é múltiplo de 7 (como 35), use essa fração para simplificar os cálculos instantaneamente."
    },
    tags: ["matematica", "geometria-plana", "circunferencia", "perimetro", "movimento-circular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-017",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Plana",
    subtopic: "Semelhança e Teorema das Bissetrizes",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um triângulo escaleno ABC, os lados AB e AC medem 12 cm e 18 cm, respectivamente. O segmento AD é a bissetriz interna do ângulo A, encontrando o lado BC no ponto D. Sabe-se que o lado BC totaliza 25 cm de comprimento.",
      source: "Olimpíada Brasileira de Matemática das Escolas Públicas (OBMEP)."
    },
    prompt: "Pelo Teorema da Bissetriz Interna, a medida do segmento BD mede exatamente",
    options: [
      {
        id: "a",
        text: "10 cm",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pelo Teorema da Bissetriz Interna: BD / AB = DC / AC => BD / 12 = DC / 18 => BD / 2 = DC / 3. Como BD + DC = 25 cm: 2k + 3k = 25 => 5k = 25 => k = 5. Logo, BD = 2 * 5 = 10 cm."
      },
      {
        id: "b",
        text: "15 cm",
        isCorrect: false,
        distractorRationale: "15 cm é a medida do segmento DC (3 * 5 = 15 cm)."
      },
      {
        id: "c",
        text: "12,5 cm",
        isCorrect: false,
        distractorRationale: "Erro achando que a bissetriz é também mediana e divide o lado ao meio (25 / 2 = 12,5)."
      },
      {
        id: "d",
        text: "8 cm",
        isCorrect: false,
        distractorRationale: "Erro de cálculo aritmético na proporção."
      },
      {
        id: "e",
        text: "9,5 cm",
        isCorrect: false,
        distractorRationale: "Erro de aproximação arbitrária."
      }
    ],
    detailedExplanation: {
      summary: "A bissetriz interna divide o lado oposto em segmentos proporcionais aos lados adjacentes.",
      stepByStep: [
        "1. Teorema da Bissetriz Interna: Em qualquer triângulo, BD / AB = DC / AC.",
        "2. Substituindo os lados: BD / 12 = DC / 18.",
        "3. Simplificando a razão dividindo por 6: BD / 2 = DC / 3.",
        "4. Como D pertence a BC, temos BD + DC = BC = 25 cm.",
        "5. Expressando em função de uma constante k: BD = 2k e DC = 3k.",
        "6. 2k + 3k = 25 => 5k = 25 => k = 5 cm.",
        "7. O segmento BD solicitado mede: BD = 2 * 5 = 10 cm (e DC = 15 cm)."
      ],
      coreConcept: "Teorema da Bissetriz Interna: A bissetriz interna de um ângulo de um triângulo divide o lado oposto em segmentos proporcionais aos outros dois lados.",
      trapWarning: "A bissetriz só divide o lado oposto em duas metades iguais se o triângulo for isósceles ou equilátero. Em triângulos escalenos, a bissetriz não é mediana."
    },
    tags: ["matematica", "geometria-plana", "triangulos", "bissetriz", "proporcionalidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-018",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Área de Triângulo por Fórmula Trigonométrica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um arquiteto projeta uma claraboia triangular no teto de uma galeria de arte. Dois lados da armação de alumínio medem 4 metros e 5 metros, e o ângulo entre essas duas vigas é de 45° (considere a aproximação raiz quadrada de 2 = 1,41).",
      source: "Revista Brasileira de Arquitetura e Engenharia Contemporânea, 2023."
    },
    prompt: "A área translúcida da claraboia coberta por vidro especial é de aproximadamente",
    options: [
      {
        id: "a",
        text: "7,05 m²",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Fórmula trigonométrica: A = (a * b * sen θ) / 2 = (4 * 5 * sen 45°) / 2 = (20 * √2/2) / 2 = 5 * √2 = 5 * 1,41 = 7,05 m²."
      },
      {
        id: "b",
        text: "14,10 m²",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de dividir por 2 na fórmula da área do triângulo (10 * √2 = 14,10)."
      },
      {
        id: "c",
        text: "10,00 m²",
        isCorrect: false,
        distractorRationale: "Erro ignorando o seno do ângulo (4 * 5 / 2 = 10,0)."
      },
      {
        id: "d",
        text: "8,50 m²",
        isCorrect: false,
        distractorRationale: "Erro aproximando sen(45°) de forma incorreta."
      },
      {
        id: "e",
        text: "5,64 m²",
        isCorrect: false,
        distractorRationale: "Erro aritmético na multiplicação 5 * 1,41."
      }
    ],
    detailedExplanation: {
      summary: "A área de qualquer triângulo pode ser calculada por A = (a * b * sen θ) / 2 quando dois lados e o ângulo entre eles são conhecidos.",
      stepByStep: [
        "1. Lados: a = 4 m, b = 5 m. Ângulo entre eles: θ = 45°.",
        "2. Fórmula trigonométrica da área: A = (a * b * sen θ) / 2.",
        "3. Como sen(45°) = √2 / 2, substituímos: A = (4 * 5 * (√2 / 2)) / 2.",
        "4. A = (20 * (√2 / 2)) / 2 = 10 * √2 / 2 = 5 * √2.",
        "5. Com √2 = 1,41: A = 5 * 1,41 = 7,05 m²."
      ],
      coreConcept: "Área Trigonométrica do Triângulo: A = (a * b * sen θ) / 2. Extremamente útil quando a altura do triângulo não é dada diretamente.",
      trapWarning: "Lembre-se sempre de que a fórmula do triângulo divide por 2; caso não divida, obtém-se a área do paralelogramo correspondente."
    },
    tags: ["matematica", "geometria-plana", "triangulo", "area-trigonometrica", "seno"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-019",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Ladrilhamento e Pavimentação do Plano",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para que um piso plano possa ser totalmente recoberto (ladrilhado) usando apenas peças cerâmicas de um único tipo de polígono regular, sem haver sobreposição nem vãos livres entre as peças, é necessário que a soma dos ângulos internos que convergem em torno de cada vértice comum seja exatamente igual a 360°.",
      source: "Coleção Matemática e Cotidiano, Ensino Médio, 2022."
    },
    prompt: "Entre os seguintes polígonos regulares, o único com o qual é GEOMETRICAMENTE POSSÍVEL ladrilhar o plano utilizando exclusivamente peças idênticas é o",
    options: [
      {
        id: "a",
        text: "Pentágono regular.",
        isCorrect: false,
        distractorRationale: "O ângulo interno do pentágono regular é 108°. Como 360° não é divisível por 108° (360 / 108 = 3,33), sobram vãos."
      },
      {
        id: "b",
        text: "Hexágono regular.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O ângulo interno do hexágono regular é 120°. Três hexágonos em torno de um vértice somam exatamente 3 * 120° = 360° (ex: favos de mel)."
      },
      {
        id: "c",
        text: "Octógono regular.",
        isCorrect: false,
        distractorRationale: "O ângulo interno do octógono regular é 135°. 360 / 135 = 2,66; octógonos só pavimentam o plano se combinados com quadrados."
      },
      {
        id: "d",
        text: "Decágono regular.",
        isCorrect: false,
        distractorRationale: "O ângulo interno do decágono regular é 144°. 360 não é divisível por 144."
      },
      {
        id: "e",
        text: "Heptágono regular.",
        isCorrect: false,
        distractorRationale: "O ângulo interno do heptágono regular é fracionário (~128,57°), não sendo divisor de 360°."
      }
    ],
    detailedExplanation: {
      summary: "Apenas 3 polígonos regulares ladrilham o plano sozinhos: triângulo equilátero (60°), quadrado (90°) e hexágono regular (120°).",
      stepByStep: [
        "1. Condição de pavimentação regular pura: k * a_i = 360°, onde k é um número inteiro de polígonos convergentes por vértice.",
        "2. Triângulo equilátero: a_i = 60° => 360° / 60° = 6 peças (possível).",
        "3. Quadrado: a_i = 90° => 360° / 90° = 4 peças (possível).",
        "4. Pentágono regular: a_i = 108° => 360° / 108° = 3,33 (impossível sozinho).",
        "5. Hexágono regular: a_i = 120° => 360° / 120° = 3 peças (possível).",
        "6. Octógono regular: a_i = 135° => 360° / 135° = 2,66 (impossível sozinho).",
        "7. Portanto, entre as opções apresentadas, apenas o hexágono regular é geometricamente viável."
      ],
      coreConcept: "Pavimentação com polígonos regulares idênticos: apenas triângulos equiláteros, quadrados e hexágonos regulares conseguem preencher 360° exatamente.",
      trapWarning: "Octógonos são muito usados em pisos, mas NUNCA sozinhos: precisam de pequenos quadrados nos interstícios (135° + 135° + 90° = 360°)."
    },
    tags: ["matematica", "geometria-plana", "ladrilhamento", "angulos-internos", "pavimentacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-020",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Área de Triângulo por Fórmula de Heron",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um agrimensor precisa calcular a área exata de uma gleba de terra triangular cujos lados medem 7 metros, 8 metros e 9 metros, sem necessidade de medir ângulos ou baixar alturas artificiais no terreno.",
      source: "Manual Prático de Agrimensura e Topografia Rural, 2021."
    },
    prompt: "Utilizando a Fórmula de Heron, a área dessa gleba triangular, em metros quadrados, é igual a",
    options: [
      {
        id: "a",
        text: "12√5 m²",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Semiperímetro p = (7 + 8 + 9) / 2 = 24 / 2 = 12. Pela Fórmula de Heron: A = √[p(p - a)(p - b)(p - c)] = √[12(12 - 7)(12 - 8)(12 - 9)] = √[12 * 5 * 4 * 3] = √[720] = √(144 * 5) = 12√5 m²."
      },
      {
        id: "b",
        text: "24√5 m²",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de dividir o perímetro por 2 para achar o semiperímetro."
      },
      {
        id: "c",
        text: "28 m²",
        isCorrect: false,
        distractorRationale: "Erro multiplicando 7 * 8 / 2 como se fosse triângulo retângulo."
      },
      {
        id: "d",
        text: "36 m²",
        isCorrect: false,
        distractorRationale: "Erro multiplicando 8 * 9 / 2."
      },
      {
        id: "e",
        text: "6√10 m²",
        isCorrect: false,
        distractorRationale: "Erro de fatoração do radicando 720."
      }
    ],
    detailedExplanation: {
      summary: "A Fórmula de Heron calcula a área de qualquer triângulo a partir do semiperímetro e das medidas dos três lados: A = √[p(p-a)(p-b)(p-c)].",
      stepByStep: [
        "1. Lados: a = 7 m, b = 8 m, c = 9 m.",
        "2. Perímetro 2p = 7 + 8 + 9 = 24 m => Semiperímetro p = 12 m.",
        "3. Diferenças em relação aos lados: p - a = 12 - 7 = 5; p - b = 12 - 8 = 4; p - c = 12 - 9 = 3.",
        "4. Fórmula de Heron: A = √[p * (p - a) * (p - b) * (p - c)].",
        "5. A = √[12 * 5 * 4 * 3] = √[12 * 60] = √720.",
        "6. Fatorando 720: 720 = 144 * 5 = 12² * 5. Logo, A = 12√5 m²."
      ],
      coreConcept: "Fórmula de Heron: A = √[p(p-a)(p-b)(p-c)], onde p = (a + b + c) / 2. Método padrão para áreas de triângulos escalenos com 3 lados dados.",
      trapWarning: "Lembre-se sempre de que 'p' é o SEMIPERÍMETRO (perímetro dividido por 2)."
    },
    tags: ["matematica", "geometria-plana", "triangulo", "formula-de-heron", "areas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-021",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Comprimento de Arco e Pêndulo Simples",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um monumento público, uma haste pendular rígida de 6 metros de comprimento oscila descrevendo um arco circular de ângulo central igual a 60° entre suas posições extremas (adote pi = 3,14).",
      source: "Laboratório de Dinâmica e Estruturas Urbanas, 2023."
    },
    prompt: "O comprimento linear da trajetória descrita pela extremidade dessa haste em uma oscilação completa de uma ponta à outra é de aproximadamente",
    options: [
      {
        id: "a",
        text: "6,28 m",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Comprimento do arco s = (θ / 360°) * 2 * pi * r = (60° / 360°) * 2 * 3,14 * 6 = (1/6) * 12 * 3,14 = 2 * 3,14 = 6,28 metros."
      },
      {
        id: "b",
        text: "3,14 m",
        isCorrect: false,
        distractorRationale: "Erro esquecendo do fator 2 na fórmula do perímetro circular: (1/6) * 6 * 3,14 = 3,14."
      },
      {
        id: "c",
        text: "12,56 m",
        isCorrect: false,
        distractorRationale: "Erro calculando a ida e a volta somadas em vez de uma única trajetória entre as extremidades."
      },
      {
        id: "d",
        text: "18,84 m",
        isCorrect: false,
        distractorRationale: "Erro multiplicando 6 * 3,14 diretamente."
      },
      {
        id: "e",
        text: "1,04 m",
        isCorrect: false,
        distractorRationale: "Erro aritmético na simplificação fracionária."
      }
    ],
    detailedExplanation: {
      summary: "O comprimento do arco é a fração da circunferência correspondente ao ângulo central: s = (θ / 360°)*2*pi*r.",
      stepByStep: [
        "1. Raio do arco r = 6 m; Ângulo central θ = 60°; pi = 3,14.",
        "2. Fração da circunferência total: 60° / 360° = 1/6.",
        "3. Comprimento da circunferência total: C = 2 * pi * r = 2 * 3,14 * 6 = 37,68 m.",
        "4. Comprimento do arco: s = C / 6 = 37,68 / 6 = 6,28 metros.",
        "5. De forma simplificada: s = (1/6) * 2 * pi * 6 = 2 * pi = 2 * 3,14 = 6,28 m."
      ],
      coreConcept: "Comprimento do Arco de Circunferência: s = θ_rad * r = (θ_graus / 360°) * 2*pi*r.",
      trapWarning: "Atenção: uma oscilação 'de uma ponta à outra' corresponde a um único arco de 60°, não ao movimento de vai-e-vem completo."
    },
    tags: ["matematica", "geometria-plana", "arco-de-circunferencia", "pendulo", "comprimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-022",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Plana",
    subtopic: "Propriedades de Trapézios - Base Média",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma ponte estaiada, uma viga transversal de reforço foi instalada unindo exatamente os pontos médios dos dois pilares inclinados laterais de sustentação, que delimitam um perfil trapezoidal de bases horizontais que medem 24 metros e 40 metros.",
      source: "Manual de Engenharia de Pontes e Viadutos, 2022."
    },
    prompt: "O comprimento dessa viga horizontal de reforço (base média do trapézio), em metros, mede exatamente",
    options: [
      {
        id: "a",
        text: "32 m",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A base média do trapézio é dada pela média aritmética das bases: B_m = (B + b) / 2 = (40 + 24) / 2 = 64 / 2 = 32 metros."
      },
      {
        id: "b",
        text: "16 m",
        isCorrect: false,
        distractorRationale: "Erro calculando a semi-diferença das bases (40 - 24) / 2 = 8, ou dividindo 32 por 2."
      },
      {
        id: "c",
        text: "28 m",
        isCorrect: false,
        distractorRationale: "Erro aritmético na soma das bases."
      },
      {
        id: "d",
        text: "35 m",
        isCorrect: false,
        distractorRationale: "Estimativa visual incorreta."
      },
      {
        id: "e",
        text: "64 m",
        isCorrect: false,
        distractorRationale: "Erro somando diretamente as duas bases sem dividir por 2."
      }
    ],
    detailedExplanation: {
      summary: "O segmento que une os pontos médios dos lados não paralelos de um trapézio é a base média, paralela às bases e de comprimento (B + b)/2.",
      stepByStep: [
        "1. Base maior B = 40 m.",
        "2. Base menor b = 24 m.",
        "3. Teorema da Base Média do Trapézio: B_m = (B + b) / 2.",
        "4. Cálculo: B_m = (40 + 24) / 2 = 64 / 2 = 32 metros."
      ],
      coreConcept: "Base Média do Trapézio: B_m = (Base maior + Base menor) / 2. É paralela a ambas as bases.",
      trapWarning: "Não confunda base média (B + b)/2 com o segmento de Euler que une os pontos médios das diagonais, cuja fórmula é (B - b)/2."
    },
    tags: ["matematica", "geometria-plana", "trapezio", "base-media", "estruturas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-023",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Área e Perímetro de Retângulos e Otimização com Cercamento Fixo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um sitiante comprou exatamente 100 metros de tela de arame para cercar um galinheiro retangular adjacente a um muro de alvenaria já existente em linha reta. O sitiante utilizará o muro de alvenaria como um dos lados maiores, necessitando cercar com a tela apenas os outros três lados (dois lados menores de largura 'x' e um lado de comprimento 'y' paralelo ao muro).",
      source: "Manual de Construções Rurais e Manejo Agropecuário, 2021."
    },
    prompt: "Para que a área cercada do galinheiro seja a máxima possível, a largura 'x' perpendicular ao muro deve medir",
    options: [
      {
        id: "a",
        text: "25 m",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Tela total: 2x + y = 100 => y = 100 - 2x. Área A(x) = x * y = x(100 - 2x) = -2x² + 100x. O vértice da parábola ocorre em x_v = -b / (2a) = -100 / (2 * -2) = 100 / 4 = 25 metros."
      },
      {
        id: "b",
        text: "20 m",
        isCorrect: false,
        distractorRationale: "Erro assumindo perímetro de 5 lados ou divisão arbitrária."
      },
      {
        id: "c",
        text: "33,3 m",
        isCorrect: false,
        distractorRationale: "Erro dividindo 100 igualmente pelos 3 lados (100 / 3 = 33,3 m), o que geraria área subótima."
      },
      {
        id: "d",
        text: "50 m",
        isCorrect: false,
        distractorRationale: "50 m é o comprimento y paralelo ao muro (100 - 2*25 = 50 m), não a largura x."
      },
      {
        id: "e",
        text: "12,5 m",
        isCorrect: false,
        distractorRationale: "Erro dividindo 25 por 2."
      }
    ],
    detailedExplanation: {
      summary: "Modela-se a área como uma função quadrática da largura x e determina-se o ponto de máximo no vértice.",
      stepByStep: [
        "1. Sejam x a largura de cada um dos dois lados perpendiculares ao muro e y o lado paralelo ao muro.",
        "2. Como o muro já cobre o quarto lado: 2x + y = 100 m => y = 100 - 2x.",
        "3. Função da área: A(x) = x * y = x * (100 - 2x) = -2x² + 100x.",
        "4. Como a parábola tem concavidade voltada para baixo (a = -2 < 0), o valor máximo ocorre no vértice:",
        "5. x_v = -b / (2a) = -100 / (2 * (-2)) = -100 / -4 = 25 metros.",
        "6. Nesse caso, a largura ideal é x = 25 m e o comprimento é y = 100 - 2(25) = 50 m, produzindo área máxima de 25 * 50 = 1.250 m²."
      ],
      coreConcept: "Otimização Geométrica via Função Quadrática: Vértice da parábola x_v = -b / (2a) para maximizar áreas com restrição linear de perímetro.",
      trapWarning: "Quando há um muro pré-existente, o retângulo de área máxima NÃO é um quadrado; a dimensão paralela ao muro é sempre o dobro da perpendicular."
    },
    tags: ["matematica", "geometria-plana", "otimizacao", "funcao-quadratica", "areas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-024",
    area: "matematica",
    competence: 2,
    skill: 6,
    topic: "Geometria Plana",
    subtopic: "Número de Diagonais de um Polígono Convexo",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um software de segurança cibernética, uma rede local com topologia em malha completa conecta 10 servidores centrais (formando os vértices de um decágono convexo). Cada par de servidores não adjacentes é interligado por um canal óptico direto redundante correspondente a uma diagonal geométrica do decágono.",
      source: "Arquitetura de Redes e Telecomunicações, 2023."
    },
    prompt: "O número total de canais ópticos redundantes (diagonais) existentes nessa rede é de",
    options: [
      {
        id: "a",
        text: "35",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Fórmula das diagonais de um polígono: d = [n(n - 3)] / 2. Para n = 10: d = [10 * (10 - 3)] / 2 = (10 * 7) / 2 = 70 / 2 = 35."
      },
      {
        id: "b",
        text: "45",
        isCorrect: false,
        distractorRationale: "45 é o total de conexões incluindo os lados do polígono (Combinação de 10 tomados 2 a 2: C(10,2) = 45)."
      },
      {
        id: "c",
        text: "70",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de dividir por 2 na fórmula das diagonais."
      },
      {
        id: "d",
        text: "20",
        isCorrect: false,
        distractorRationale: "Erro multiplicando 10 por 2."
      },
      {
        id: "e",
        text: "27",
        isCorrect: false,
        distractorRationale: "27 é o número de diagonais do eneágono (n = 9: 9*6/2 = 27)."
      }
    ],
    detailedExplanation: {
      summary: "O número de diagonais de um polígono de n lados é dado por d = n(n - 3)/2.",
      stepByStep: [
        "1. Decágono tem n = 10 vértices.",
        "2. De cada vértice partem (n - 3) diagonais, pois o vértice não pode se ligar a si mesmo nem aos seus 2 vizinhos imediatos.",
        "3. Como cada diagonal conecta 2 vértices, para não contar duas vezes dividimos por 2.",
        "4. Fórmula: d = [n * (n - 3)] / 2.",
        "5. Para n = 10: d = [10 * 7] / 2 = 70 / 2 = 35 diagonais."
      ],
      coreConcept: "Diagonais de Polígonos Convexos: d = n(n - 3) / 2. Equivalente a C(n, 2) - n.",
      trapWarning: "Lembre-se de subtrair os lados se você calcular pelo número total de pares de vértices: C(10,2) - 10 = 45 - 10 = 35."
    },
    tags: ["matematica", "geometria-plana", "poligonos", "diagonais", "analise-combinatoria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-PLA-025",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria Plana",
    subtopic: "Propriedades do Triângulo Isósceles e Pitágoras",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A fachada de um galpão tem o formato de um triângulo isósceles com base de 16 metros e dois lados inclinados congruentes de 10 metros cada um. O construtor deseja pintar toda essa parede frontal triangular com tinta impermeabilizante.",
      source: "Manual de Edificações Rurais e Construção Civil, 2022."
    },
    prompt: "A área total da fachada frontal desse galpão, em metros quadrados, é igual a",
    options: [
      {
        id: "a",
        text: "48 m²",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. No triângulo isósceles, a altura relativa à base corta a base no ponto médio (8 m e 8 m). Pelo Teorema de Pitágoras no triângulo retângulo formado: h² + 8² = 10² => h² + 64 = 100 => h² = 36 => h = 6 m. Área = (base * h) / 2 = (16 * 6) / 2 = 48 m²."
      },
      {
        id: "b",
        text: "80 m²",
        isCorrect: false,
        distractorRationale: "Erro multiplicando diretamente 16 * 10 / 2 = 80 m², usando o lado inclinado como se fosse a altura."
      },
      {
        id: "c",
        text: "96 m²",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de dividir por 2 no cálculo da área: 16 * 6 = 96 m²."
      },
      {
        id: "d",
        text: "64 m²",
        isCorrect: false,
        distractorRationale: "Erro usando 8 * 8 = 64 m²."
      },
      {
        id: "e",
        text: "36 m²",
        isCorrect: false,
        distractorRationale: "Erro confundindo o quadrado da altura (h² = 36) com a área do triângulo."
      }
    ],
    detailedExplanation: {
      summary: "A altura divide a base ao meio; usa-se o Teorema de Pitágoras para encontrar a altura e calcula-se a área.",
      stepByStep: [
        "1. Triângulo isósceles com base b = 16 m e lados congruentes L = 10 m.",
        "2. A altura h relativa à base é também mediana e mediatriz, dividindo a base em dois segmentos de 16 / 2 = 8 m.",
        "3. Triângulo retângulo interno com hipotenusa 10 m e cateto 8 m (terno pitagórico 3-4-5 multiplicado por 2):",
        "4. h² + 8² = 10² => h² + 64 = 100 => h² = 36 => h = 6 m.",
        "5. Área do triângulo: A = (base * h) / 2 = (16 * 6) / 2 = 96 / 2 = 48 m²."
      ],
      coreConcept: "Triângulo Isósceles: A altura relativa à base é sempre mediana e mediatriz. Altura, semi-base e lado inclinado formam um triângulo retângulo.",
      trapWarning: "Nunca utilize o lado inclinado (10 m) no lugar da altura (6 m) na fórmula da área!"
    },
    tags: ["matematica", "geometria-plana", "triangulo-isosceles", "pitagoras", "areas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
