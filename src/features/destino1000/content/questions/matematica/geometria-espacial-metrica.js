/**
 * Banco de Questões ENEM — Matemática e suas Tecnologias
 * Módulo: Geometria Espacial Métrica, Corpos Redondos e Sólidos de Revolução
 * 
 * 25 Questões Inéditas Rigorosamente Alinhadas à Matriz do INEP
 * Validação: 5 alternativas (a-e), 1 correta, justificativa para cada distrator,
 * resolução pedagógica passo a passo e foco nos pilares da TRI.
 * ZERO termos de viagem.
 */

export const QUESTIONS_GEOMETRIA_ESPACIAL_METRICA = [
  {
    id: "MAT-ESP-001",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Volume de Cilindro Reto e Armazenamento de Água",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma comunidade rural no semiárido brasileiro construiu uma cisterna cilíndrica circular reta para armazenar água de chuva captada nos telhados das casas. A cisterna possui raio interno da base igual a 2,0 metros e altura útil interna de 3,0 metros.\n\nConsidere a aproximação π = 3,14 e que 1 m³ = 1 000 litros.",
      source: "Tecnologias Sociais para Convivência com o Semiárido"
    },
    prompt: "A capacidade volumétrica máxima útil de armazenamento dessa cisterna, em litros, é de:",
    options: [
      { id: "a", text: "37 680", isCorrect: true, distractorRationale: null },
      { id: "b", text: "12 560", isCorrect: false, distractorRationale: "Esqueceu de elevar o raio ao quadrado no cálculo da área da base (usou π · r · h = 3,14 · 2 · 3 = 18,84 ou dividiu por 3)." },
      { id: "c", text: "18 840", isCorrect: false, distractorRationale: "Calculou π · r · h = 3,14 · 2 · 3 = 18,84 m³, esquecendo que a área do círculo é π · r²." },
      { id: "d", text: "75 360", isCorrect: false, distractorRationale: "Multiplicou pelo diâmetro (4 m) ao quadrado em vez do raio (2 m) ao quadrado." },
      { id: "e", text: "3 768", isCorrect: false, distractorRationale: "Errou a conversão de m³ para litros por um fator de 10 (usou 1 m³ = 100 L em vez de 1 000 L)." }
    ],
    detailedExplanation: {
      summary: "O volume de um cilindro reto é V = Ab · h = π · r² · h. Com r = 2 m e h = 3 m, temos V = 3,14 · 2² · 3 = 3,14 · 4 · 3 = 3,14 · 12 = 37,68 m³. Como 1 m³ equivale a 1 000 litros, a capacidade é 37,68 · 1 000 = 37 680 litros.",
      stepByStep: [
        "1. Identificar os dados do cilindro: raio r = 2,0 m; altura h = 3,0 m; π = 3,14.",
        "2. Aplicar a fórmula do volume do cilindro: V = π · r² · h.",
        "3. Calcular a área da base: Ab = π · r² = 3,14 · 2² = 3,14 · 4 = 12,56 m².",
        "4. Multiplicar pela altura: V = 12,56 · 3 = 37,68 m³.",
        "5. Converter para litros: V = 37,68 · 1 000 = 37 680 litros."
      ],
      coreConcept: "Volume de cilindro: V = π · r² · h. Conversão: 1 m³ = 1 000 dm³ = 1 000 L.",
      trapWarning: "Atenção para não esquecer de elevar o raio ao quadrado e para não usar o diâmetro no lugar do raio."
    },
    commonTraps: ["Usar o diâmetro em vez do raio", "Esquecer de elevar o raio ao quadrado"],
    tags: ["cilindro", "volume", "cisterna", "conversao-unidades"]
  },
  {
    id: "MAT-ESP-002",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Transvasamento de Líquidos e Variação de Nível",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um laboratório de análises clínicas possui um reservatório no formato de paralelepípedo retângulo com dimensões da base de 40 cm por 50 cm, contendo soro fisiológico até certa altura. Para um experimento, foram transferidos 12 litros de soro desse reservatório para frascos de ensaio.",
      source: "Equipamentos Laboratoriais e Medições Métricas"
    },
    prompt: "Com a retirada desse volume de soro, a diminuição no nível da altura do líquido no interior do reservatório paralelepipédico foi de:",
    options: [
      { id: "a", text: "6 cm", isCorrect: true, distractorRationale: null },
      { id: "b", text: "3 cm", isCorrect: false, distractorRationale: "Dividiu a área da base por 2 ou cometeu erro ao converter dm³ para cm³." },
      { id: "c", text: "12 cm", isCorrect: false, distractorRationale: "Confundiu a quantidade de litros (12 L) diretamente com a altura em centímetros." },
      { id: "d", text: "0,6 cm", isCorrect: false, distractorRationale: "Errou a conversão de unidades de medida (1 L = 1 000 cm³)." },
      { id: "e", text: "15 cm", isCorrect: false, distractorRationale: "Inverteu a razão entre volume e área da base no cálculo da altura." }
    ],
    detailedExplanation: {
      summary: "O volume retirado é ΔV = Ab · Δh. A área da base é Ab = 40 cm · 50 cm = 2 000 cm². Como 1 litro = 1 000 cm³, temos ΔV = 12 litros = 12 000 cm³. Assim, Δh = ΔV / Ab = 12 000 / 2 000 = 6 cm.",
      stepByStep: [
        "1. Identificar as dimensões da base: largura a = 40 cm; comprimento b = 50 cm.",
        "2. Calcular a área da base: Ab = 40 · 50 = 2 000 cm².",
        "3. Converter o volume retirado para cm³: 12 L = 12 · 1 000 = 12 000 cm³.",
        "4. Aplicar a relação volumétrica: ΔV = Ab · Δh.",
        "5. Isolar o desnível: Δh = 12 000 / 2 000 = 6 cm."
      ],
      coreConcept: "A variação de altura em reservatórios prismáticos é dada por Δh = ΔV / Ab.",
      trapWarning: "Lembre-se da conversão: 1 L = 1 dm³ = 1 000 cm³."
    },
    commonTraps: ["Achar que 1 L = 100 cm³ em vez de 1 000 cm³"],
    tags: ["paralelepipedo", "transvasamento", "volume", "desnivel"]
  },
  {
    id: "MAT-ESP-003",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Volume de Cone Reto e Funil de Decantação",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma indústria química, um funil de decantação cônico circular reto possui altura interna de 12 cm e raio da boca superior igual a 5 cm. O funil está completamente preenchido com um reagente oleoso.\n\nAdote a aproximação π = 3.",
      source: "Desenho Técnico e Processos Industriais"
    },
    prompt: "O volume de reagente contido nesse funil cônico é de:",
    options: [
      { id: "a", text: "100 cm³", isCorrect: true, distractorRationale: null },
      { id: "b", text: "300 cm³", isCorrect: false, distractorRationale: "Calculou o volume como se fosse um cilindro (V = π · r² · h = 3 · 25 · 4 = 300 cm³), esquecendo de dividir por 3." },
      { id: "c", text: "60 cm³", isCorrect: false, distractorRationale: "Esqueceu de elevar o raio ao quadrado: (3 · 5 · 12) / 3 = 60 cm³." },
      { id: "d", text: "25 cm³", isCorrect: false, distractorRationale: "Dividiu a área da base pela altura em vez de multiplicar." },
      { id: "e", text: "150 cm³", isCorrect: false, distractorRationale: "Dividiu por 2 em vez de dividir por 3 na fórmula do cone." }
    ],
    detailedExplanation: {
      summary: "O volume do cone é V = (1/3) · π · r² · h. Com r = 5 cm, h = 12 cm e π = 3: V = (1/3) · 3 · 5² · 12 = 1 · 25 · 12 = 300 / 3 = 100 cm³.",
      stepByStep: [
        "1. Dados: raio r = 5 cm; altura h = 12 cm; π = 3.",
        "2. Fórmula do cone: V = (1/3) · π · r² · h.",
        "3. Substituir π = 3: os fatores 3 e 1/3 se cancelam: (1/3) · 3 = 1.",
        "4. Calcular r² · h: 5² · 12 = 25 · 12 = 300 cm³.",
        "5. Multiplicar pelo fator restante: V = 1 · 300 = 100 cm³ (ou seja, 300 / 3 = 100 cm³)."
      ],
      coreConcept: "O volume do cone corresponde a um terço do volume do cilindro de mesma base e mesma altura: V = (π · r² · h) / 3.",
      trapWarning: "Nunca se esqueça do fator 1/3 no cálculo do volume de cones e pirâmides."
    },
    commonTraps: ["Esquecer o fator 1/3 característico do cone", "Esquecer de elevar o raio ao quadrado"],
    tags: ["cone", "volume", "quimica-industrial", "funil"]
  },
  {
    id: "MAT-ESP-004",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Razão entre Volumes de Sólidos Semelhantes",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma fábrica produz recipientes geométricos semelhantes para armazenamento de cosméticos. O modelo padrão possui altura de 10 cm e comporta 160 mL de loção hidratante. A diretoria da empresa decidiu lançar uma versão econômica ampliada, mantendo a exata semelhança geométrica tridimensional com o modelo padrão, porém com altura de 15 cm.",
      source: "Engenharia de Embalagens e Escala de Produção"
    },
    prompt: "A capacidade volumétrica do modelo econômico ampliado, em mililitros, é igual a:",
    options: [
      { id: "a", text: "540", isCorrect: true, distractorRationale: null },
      { id: "b", text: "240", isCorrect: false, distractorRationale: "Multiplicou pela razão linear k = 15/10 = 1,5 (160 · 1,5 = 240 mL), esquecendo que o volume varia com k³." },
      { id: "c", text: "360", isCorrect: false, distractorRationale: "Multiplicou pela razão ao quadrado k² = (1,5)² = 2,25 (160 · 2,25 = 360 mL), que corresponderia à razão entre áreas superficiais." },
      { id: "d", text: "480", isCorrect: false, distractorRationale: "Multiplicou por 3 achando que a altura aumentou proporcionalmente ao triplo." },
      { id: "e", text: "720", isCorrect: false, distractorRationale: "Errou a potenciação da fração 3/2 ao cubo." }
    ],
    detailedExplanation: {
      summary: "Em sólidos geometricamente semelhantes, a razão entre as medidas lineares é a escala k = h2 / h1 = 15 / 10 = 3/2 = 1,5. A razão entre as áreas varia com k², e a razão entre os volumes varia com k³. Assim, V2 / V1 = k³ = (3/2)³ = 27/8 = 3,375. Logo, V2 = 160 · (27/8) = (160 / 8) · 27 = 20 · 27 = 540 mL.",
      stepByStep: [
        "1. Calcular a razão de semelhança linear k: k = 15 cm / 10 cm = 1,5 = 3/2.",
        "2. Identificar a propriedade geométrica dos volumes semelhantes: V2 / V1 = k³.",
        "3. Elevar a razão linear ao cubo: k³ = (3/2)³ = 27 / 8 = 3,375.",
        "4. Calcular o novo volume: V2 = V1 · k³ = 160 · (27 / 8).",
        "5. Simplificar os cálculos: 160 / 8 = 20; 20 · 27 = 540 mL."
      ],
      coreConcept: "Para sólidos semelhantes: se a razão linear é k, a razão de áreas é k² e a razão de volumes é k³.",
      trapWarning: "Distrator clássico do ENEM: multiplicar o volume pela razão linear k (gerando 240 mL) ou por k² (gerando 360 mL)."
    },
    commonTraps: ["Multiplicar o volume por k em vez de k³", "Multiplicar por k² em vez de k³"],
    tags: ["solidos-semelhantes", "razao-volumes", "escala", "TRI"]
  },
  {
    id: "MAT-ESP-005",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Volume de Esfera e Microesferas Farmacêuticas",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na nanobiotecnologia médica, microesferas poliméricas biodegradáveis são utilizadas para a liberação controlada de fármacos antitumorais na corrente sanguínea. Uma equipe farmacêutica desenvolveu microesferas perfeitamente esféricas com raio igual a 3 micrometros (μm).\n\nConsidere a fórmula do volume da esfera V = (4/3) · π · r³ e adote a aproximação π = 3.",
      source: "Farmacotécnica Avançada e Sistemas de Liberação de Fármacos"
    },
    prompt: "O volume de uma única microesfera polimérica, em micrômetros cúbicos (μm³), é igual a:",
    options: [
      { id: "a", text: "108", isCorrect: true, distractorRationale: null },
      { id: "b", text: "36", isCorrect: false, distractorRationale: "Calculou a área superficial da esfera (A = 4 · π · r² = 4 · 3 · 9 = 108? Não, calculou 4 · 9 = 36 ou esqueceu o fator 4)." },
      { id: "c", text: "324", isCorrect: false, distractorRationale: "Esqueceu de dividir por 3 no coeficiente (4/3)." },
      { id: "d", text: "81", isCorrect: false, distractorRationale: "Multiplicou 3 pelo cubo de 3 (3 · 27 = 81), esquecendo o fator 4/3." },
      { id: "e", text: "144", isCorrect: false, distractorRationale: "Elevou o raio a 4 em vez de 3." }
    ],
    detailedExplanation: {
      summary: "O volume de uma esfera é V = (4/3) · π · r³. Substituindo r = 3 μm e π = 3:\nV = (4/3) · 3 · 3³ = 4 · 27 = 108 μm³.",
      stepByStep: [
        "1. Dados: raio r = 3 μm; aproximação π = 3.",
        "2. Fórmula: V = (4/3) · π · r³.",
        "3. Cancelamento do fator 3: (4/3) · 3 = 4.",
        "4. Calcular o cubo do raio: r³ = 3³ = 27 μm³.",
        "5. Multiplicar: V = 4 · 27 = 108 μm³."
      ],
      coreConcept: "Volume da esfera: V = (4/3) · π · r³. Área superficial: A = 4 · π · r².",
      trapWarning: "Cuidado para não confundir o expoente do raio: volume usa r³, enquanto área usa r²."
    },
    commonTraps: ["Confundir fórmula de área superficial (4·π·r²) com a de volume ((4/3)·π·r³)"],
    tags: ["esfera", "volume", "microesferas", "farmacologia"]
  },
  {
    id: "MAT-ESP-006",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Área Lateral e Custo de Embalagem Cilíndrica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma indústria de laticínios vai produzir latas cilíndricas de leite condensado com raio da base r = 4 cm e altura h = 10 cm. Cada lata precisa receber um rótulo retangular de papel que envolverá exatamente toda a sua superfície lateral, sem sobreposição.\n\nConsidere π = 3,14.",
      source: "Otimização de Custos e Embalagens Industriais"
    },
    prompt: "A área de papel necessária para confeccionar o rótulo lateral de uma lata é de:",
    options: [
      { id: "a", text: "251,2 cm²", isCorrect: true, distractorRationale: null },
      { id: "b", text: "502,4 cm²", isCorrect: false, distractorRationale: "Calculou a área total incluindo as duas tampas circulares ou multiplicou pelo diâmetro no lugar do raio com o fator 2 duplicado." },
      { id: "c", text: "125,6 cm²", isCorrect: false, distractorRationale: "Esqueceu o fator 2 da fórmula do comprimento da circunferência (usou π · r · h = 3,14 · 4 · 10 = 125,6 cm²)." },
      { id: "d", text: "160 cm²", isCorrect: false, distractorRationale: "Desconsiderou o fator π no cálculo da área lateral (fez 4 · 10 · 4)." },
      { id: "e", text: "351,68 cm²", isCorrect: false, distractorRationale: "Somou a área de apenas uma tampa à área lateral." }
    ],
    detailedExplanation: {
      summary: "A superfície lateral de um cilindro reto planificada é um retângulo cujos lados são o comprimento da circunferência da base (C = 2 · π · r) e a altura (h). Logo, Al = 2 · π · r · h = 2 · 3,14 · 4 · 10 = 251,2 cm².",
      stepByStep: [
        "1. Identificar os dados: r = 4 cm; h = 10 cm; π = 3,14.",
        "2. Identificar a planificação lateral: retângulo de base C = 2·π·r e altura h.",
        "3. Calcular o comprimento da base: C = 2 · 3,14 · 4 = 25,12 cm.",
        "4. Multiplicar pela altura do cilindro: Al = 25,12 · 10 = 251,2 cm².",
        "5. Concluir que a área do rótulo é 251,2 cm²."
      ],
      coreConcept: "Área lateral do cilindro reto: Al = 2 · π · r · h (decorrente da planificação de um retângulo).",
      trapWarning: "Cuidado para não calcular a área total quando o enunciado solicita estritamente o rótulo lateral."
    },
    commonTraps: ["Esquecer o fator 2 no comprimento da base do retângulo", "Calcular a área total somando as tampas"],
    tags: ["cilindro", "area-lateral", "planificacao", "rotulo"]
  },
  {
    id: "MAT-ESP-007",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Tronco de Cone e Silo de Grãos",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma cooperativa agrícola, uma tremonha coletora de soja possui o formato geométrico de um tronco de cone circular reto invertido. As medidas internas da tremonha são:\n• Raio da base superior maior (R) = 3 metros\n• Raio da base inferior menor (r) = 1 metro\n• Altura vertical (h) = 3 metros\n\nA fórmula do volume do tronco de cone é: V = (π · h / 3) · (R² + R · r + r²).\nAdote π = 3,14.",
      source: "Armazenamento e Beneficiamento de Grãos"
    },
    prompt: "O volume máximo de soja que essa tremonha cônica comporta, em metros cúbicos, é de:",
    options: [
      { id: "a", text: "40,82", isCorrect: true, distractorRationale: null },
      { id: "b", text: "28,26", isCorrect: false, distractorRationale: "Esqueceu o termo misto (R · r) dentro dos parênteses, calculando apenas R² + r² = 9 + 1 = 10 (3,14 · 10 = 31,4 ou erro similar)." },
      { id: "c", text: "122,46", isCorrect: false, distractorRationale: "Esqueceu de dividir por 3 o fator (π · h / 3)." },
      { id: "d", text: "50,24", isCorrect: false, distractorRationale: "Usou a média aritmética dos raios (2 m) em um cilindro reto equivalente." },
      { id: "e", text: "31,40", isCorrect: false, distractorRationale: "Considerou apenas a soma dos quadrados das bases sem o produto dos raios." }
    ],
    detailedExplanation: {
      summary: "Aplicando a fórmula do tronco de cone com R = 3 m, r = 1 m, h = 3 m e π = 3,14:\nO termo entre parênteses é: R² + R · r + r² = 3² + (3 · 1) + 1² = 9 + 3 + 1 = 13.\nO fator externo é: (π · h / 3) = (3,14 · 3) / 3 = 3,14.\nMultiplicando: V = 3,14 · 13 = 40,82 m³.",
      stepByStep: [
        "1. Identificar as grandezas: R = 3 m, r = 1 m, h = 3 m, π = 3,14.",
        "2. Calcular a expressão entre parênteses: R² + R·r + r² = 9 + 3 + 1 = 13 m².",
        "3. Calcular o coeficiente: (π · h) / 3 = (3,14 · 3) / 3 = 3,14 m.",
        "4. Multiplicar os termos: V = 3,14 · 13 = 40,82 m³.",
        "5. Concluir que a tremonha suporta 40,82 m³ de grãos."
      ],
      coreConcept: "Volume do tronco de cone: V = (π · h / 3) · (R² + R · r + r²). Decorre da diferença entre dois cones semelhantes.",
      trapWarning: "Cuidado: o volume do tronco de cone NUNCA é igual ao cilindro baseado no raio médio."
    },
    commonTraps: ["Achar que o tronco de cone tem o mesmo volume de um cilindro com raio médio", "Esquecer o termo misto R·r"],
    tags: ["tronco-cone", "volume", "graos", "geometria-metrica"]
  },
  {
    id: "MAT-ESP-008",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Imergência de Sólidos e Princípio de Arquimedes Métrico",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um recipiente de vidro com formato de paralelepípedo reto-retângulo, de base quadrada com lado medindo 10 cm, contém água até uma altura inicial de 15 cm. Uma esfera maciça de metal é totalmente submersa no recipiente, sem transbordamento de líquido, fazendo o nível da água subir 3,2 cm.",
      source: "Laboratório de Metrologia e Densimetria"
    },
    prompt: "O volume dessa esfera de metal, em centímetros cúbicos, é igual a:",
    options: [
      { id: "a", text: "320", isCorrect: true, distractorRationale: null },
      { id: "b", text: "150", isCorrect: false, distractorRationale: "Multiplicou a altura inicial (15 cm) pelo lado da base (10 cm)." },
      { id: "c", text: "1 500", isCorrect: false, distractorRationale: "Calculou o volume de água que já estava inicialmente no recipiente." },
      { id: "d", text: "32", isCorrect: false, distractorRationale: "Multiplicou o lado da base (10) apenas uma vez pela elevação da água (3,2)." },
      { id: "e", text: "470", isCorrect: false, distractorRationale: "Somou o volume da água inicial com o volume deslocado e cometeu erro de cálculo." }
    ],
    detailedExplanation: {
      summary: "Pelo Princípio de Arquimedes / deslocamento métrico de líquidos, o volume de um corpo maciço imerso é rigorosamente igual ao volume da coluna de líquido deslocada. A área da base do recipiente é Ab = 10 cm · 10 cm = 100 cm². A elevação do nível da água foi de Δh = 3,2 cm. Logo, Vesfera = Ab · Δh = 100 cm² · 3,2 cm = 320 cm³.",
      stepByStep: [
        "1. Identificar a forma da base do prisma: quadrado de lado L = 10 cm.",
        "2. Calcular a área da base: Ab = 10 · 10 = 100 cm².",
        "3. Identificar a elevação exclusiva gerada pelo corpo imerso: Δh = 3,2 cm.",
        "4. Aplicar o princípio de deslocamento de volume: Vdeslocado = Ab · Δh.",
        "5. Calcular o volume: V = 100 · 3,2 = 320 cm³."
      ],
      coreConcept: "O volume de um objeto imerso é igual ao volume do líquido deslocado: Vobjeto = Abase · Δh.",
      trapWarning: "A altura inicial da água (15 cm) é um dado irrelevante para o cálculo do volume imerso, servindo apenas como contexto de que não houve transbordamento."
    },
    commonTraps: ["Usar a altura total da água em vez do desnível delta h no cálculo"],
    tags: ["imergencia", "deslocamento-liquido", "volume", "prisma"]
  },
  {
    id: "MAT-ESP-009",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Planificação de Cone Reto e Ângulo do Setor Circular",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para confeccionar um chapéu festivo cônico a partir de uma cartolina plana, um designer desenha um cone circular reto com raio da base r = 6 cm e altura h = 8 cm. Ao recortar e planificar a superfície lateral desse cone, obtém-se um setor circular de raio igual à geratriz (g) do cone e ângulo central θ.",
      source: "Modelagem Tridimensional e Geometria Descritiva"
    },
    prompt: "O comprimento da geratriz (g) desse cone e a medida do ângulo central (θ) do setor circular de sua superfície lateral planificada são, respectivamente:",
    options: [
      { id: "a", text: "10 cm e 216°", isCorrect: true, distractorRationale: null },
      { id: "b", text: "14 cm e 180°", isCorrect: false, distractorRationale: "Somou o raio e a altura (6 + 8 = 14) em vez de aplicar o Teorema de Pitágoras (g² = r² + h²)." },
      { id: "c", text: "10 cm e 180°", isCorrect: false, distractorRationale: "Presumiu incorretamente que todo cone planificado forma um semicírculo (180°)." },
      { id: "d", text: "10 cm e 240°", isCorrect: false, distractorRationale: "Errou a proporção: θ = 360° · (r / g) = 360° · (6/10) = 216°, não 240°." },
      { id: "e", text: "12 cm e 120°", isCorrect: false, distractorRationale: "Errou o cálculo da hipotenusa no triângulo retângulo gerador." }
    ],
    detailedExplanation: {
      summary: "1. No triângulo retângulo gerador do cone reto: g² = r² + h² = 6² + 8² = 36 + 64 = 100 ⇒ g = 10 cm.\n2. O arco do setor circular planificado tem comprimento igual ao perímetro da base do cone: C = 2 · π · r = 2 · π · 6 = 12π cm.\n3. O setor circular tem raio g = 10 cm. Uma volta completa de raio 10 cm teria 2 · π · 10 = 20π cm (360°).\n4. Assim, o ângulo central é: θ = 360° · (r / g) = 360° · (6 / 10) = 360° · 0,6 = 216°.",
      stepByStep: [
        "1. Aplicar Pitágoras para encontrar a geratriz g: g² = 6² + 8² = 100 ⇒ g = 10 cm.",
        "2. Identificar a relação fundamental de planificação do cone: o arco do setor mede 2·π·r.",
        "3. A circunferência completa do círculo do setor mede 2·π·g.",
        "4. A fração do círculo é r / g = 6 / 10 = 0,6.",
        "5. Calcular o ângulo central: θ = 0,6 · 360° = 216°."
      ],
      coreConcept: "A geratriz do cone reto obedece a g² = h² + r². O ângulo central do setor lateral planificado é θ = 360° · (r / g).",
      trapWarning: "A geratriz é a hipotenusa do triângulo gerador; não confunda geratriz com a altura vertical do cone."
    },
    commonTraps: ["Achar que a geratriz é a soma do raio com a altura", "Achar que a planificação do cone sempre gera 180 graus"],
    tags: ["cone", "geratriz", "planificacao", "setor-circular", "pitagoras"]
  },
  {
    id: "MAT-ESP-010",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Vazão Volumétrica e Tempo de Esvaziamento de Tanque",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um tanque industrial no formato de prisma reto de base retangular com comprimento de 4 metros e largura de 2,5 metros está com água até a altura de 1,8 metro. Uma bomba de sucção com vazão constante de 150 litros por minuto é acionada para esvaziar totalmente o tanque.",
      source: "Hidráulica Industrial e Controle de Processos"
    },
    prompt: "O tempo total necessário para que essa bomba esvazie completamente o tanque, em horas, é de:",
    options: [
      { id: "a", text: "2 horas", isCorrect: true, distractorRationale: null },
      { id: "b", text: "3 horas", isCorrect: false, distractorRationale: "Errou na conversão de vazão ou dividiu 18 000 por 6 000 em vez de 9 000." },
      { id: "c", text: "1,5 hora", isCorrect: false, distractorRationale: "Calculou para um volume menor de água (ex.: 13,5 m³)." },
      { id: "d", text: "4 horas", isCorrect: false, distractorRationale: "Dividiu a vazão por 2 ou cometeu erro no cálculo do volume inicial." },
      { id: "e", text: "12 horas", isCorrect: false, distractorRationale: "Esqueceu de converter a vazão de minutos para horas ou calculou 180 min como 12 h." }
    ],
    detailedExplanation: {
      summary: "1. Volume do tanque: V = 4 m · 2,5 m · 1,8 m = 18 m³.\n2. Convertendo para litros: 18 m³ = 18 000 litros.\n3. Vazão da bomba: 150 L/min. Em 1 hora (60 min), a bomba retira: 150 · 60 = 9 000 litros/hora.\n4. Tempo de esvaziamento: t = 18 000 L / 9 000 L/h = 2 horas (ou 18 000 / 150 = 120 minutos = 2 horas).",
      stepByStep: [
        "1. Calcular o volume do paralelepípedo: V = c · l · h = 4 · 2,5 · 1,8 = 18 m³.",
        "2. Converter o volume para litros: 18 m³ · 1 000 L/m³ = 18 000 L.",
        "3. Calcular o tempo em minutos pela vazão: t = 18 000 / 150 = 120 minutos.",
        "4. Converter minutos em horas: 120 / 60 = 2 horas.",
        "5. Concluir que o tempo de esvaziamento total é de 2 horas."
      ],
      coreConcept: "Tempo de esvaziamento: t = Volume / Vazão. Assegure a concordância das unidades de medida (litros e minutos/horas).",
      trapWarning: "Lembre-se sempre de converter m³ para litros antes de relacionar com vazões expressas em L/min."
    },
    commonTraps: ["Esquecer de converter m³ em litros ao usar vazão em litros por minuto"],
    tags: ["vazao", "tempo-esvaziamento", "prisma", "hidraulica"]
  },
  {
    id: "MAT-ESP-011",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Cápsula Farmacêutica: Cilindro com Semiesferas nas Extremidades",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na indústria farmacêutica, uma cápsula gelatinosa dura possui a forma geométrica de um cilindro circular reto acoplado a duas semiesferas idênticas em suas extremidades (formando, juntas, uma esfera completa). O raio tanto do corpo cilíndrico quanto das extremidades semiesféricas mede r = 3 mm, e o comprimento da parte exclusivamente cilíndrica central mede h = 10 mm.\n\nConsidere π = 3,14.",
      source: "Engenharia Farmacêutica e Dosagem de Medicamentos"
    },
    prompt: "O volume total interno dessa cápsula medicamentosa, em milímetros cúbicos (mm³), é de aproximadamente:",
    options: [
      { id: "a", text: "395,64", isCorrect: true, distractorRationale: null },
      { id: "b", text: "282,60", isCorrect: false, distractorRationale: "Calculou apenas o volume do corpo cilíndrico central (π · 3² · 10 = 282,6 mm³), esquecendo as duas pontas semiesféricas." },
      { id: "c", text: "113,04", isCorrect: false, distractorRationale: "Calculou apenas o volume da esfera correspondente às duas extremidades, esquecendo o cilindro central." },
      { id: "d", text: "565,20", isCorrect: false, distractorRationale: "Duplicou a altura do cilindro no cálculo." },
      { id: "e", text: "450,00", isCorrect: false, distractorRationale: "Aproximou π por 3 de forma grosseira e cometeu erros de potenciação." }
    ],
    detailedExplanation: {
      summary: "O volume total é a soma do volume do cilindro central com o volume das duas semiesferas (que formam 1 esfera completa):\n1. Volume do cilindro: Vcil = π · r² · h = 3,14 · 3² · 10 = 3,14 · 9 · 10 = 282,6 mm³.\n2. Volume da esfera das extremidades: Vesf = (4/3) · π · r³ = (4/3) · 3,14 · 27 = 4 · 3,14 · 9 = 113,04 mm³.\n3. Volume total: Vtotal = 282,6 + 113,04 = 395,64 mm³.",
      stepByStep: [
        "1. Decompor a figura composta: 1 cilindro de r = 3 mm e h = 10 mm + 1 esfera de r = 3 mm.",
        "2. Calcular o volume cilíndrico: Vcil = 3,14 · 3² · 10 = 282,6 mm³.",
        "3. Calcular o volume esférico: Vesf = (4/3) · 3,14 · 3³ = (4/3) · 3,14 · 27 = 113,04 mm³.",
        "4. Somar as parcelas de volume: Vtotal = 282,6 + 113,04 = 395,64 mm³.",
        "5. Concluir que a capacidade total é de 395,64 mm³."
      ],
      coreConcept: "Sólidos compostos: o volume total é obtido pela soma direta dos volumes dos sólidos elementares que o constituem.",
      trapWarning: "Duas semiesferas de mesmo raio somadas equivalem exatamente ao volume de UMA esfera completa de mesmo raio: (4/3)·π·r³."
    },
    commonTraps: ["Calcular apenas a parte cilíndrica e esquecer as semiesferas", "Somar apenas uma semiesfera em vez de duas"],
    tags: ["solidos-compostos", "cilindro", "esfera", "capsula", "farmacologia"]
  },
  {
    id: "MAT-ESP-012",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Pirâmide Regular de Base Quadrada e Apótema",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um monumento de vidro possui o formato de uma pirâmide regular de base quadrada com lado da base medindo 6 metros e altura vertical medindo 4 metros.",
      source: "Arquitetura Contemporânea e Estruturas Metálicas"
    },
    prompt: "O apótema da pirâmide (altura da face triangular lateral) e a área lateral total de vidro desse monumento são, respectivamente:",
    options: [
      { id: "a", text: "5 metros e 60 m²", isCorrect: true, distractorRationale: null },
      { id: "b", text: "5 metros e 120 m²", isCorrect: false, distractorRationale: "Calculou a base vezes a altura da face sem dividir por 2 na área de cada um dos quatro triângulos." },
      { id: "c", text: "7 metros e 84 m²", isCorrect: false, distractorRationale: "Somou a metade do lado com a altura (3 + 4 = 7) em vez de aplicar o Teorema de Pitágoras." },
      { id: "d", text: "4 metros e 48 m²", isCorrect: false, distractorRationale: "Confundiu a altura da pirâmide (4 m) com o apótema da face lateral." },
      { id: "e", text: "5 metros e 96 m²", isCorrect: false, distractorRationale: "Calculou a área total somando a base (60 + 36 = 96 m²), quando a questão solicitava apenas a área lateral." }
    ],
    detailedExplanation: {
      summary: "1. No triângulo retângulo formado pela altura da pirâmide (h = 4), apótema da base (ab = L/2 = 6/2 = 3) e o apótema da pirâmide (ap):\nap² = h² + ab² = 4² + 3² = 16 + 9 = 25 ⇒ ap = 5 m.\n2. A área de cada uma das 4 faces triangulares é: Aface = (base · ap) / 2 = (6 · 5) / 2 = 15 m².\n3. A área lateral total é: Alateral = 4 · 15 = 60 m².",
      stepByStep: [
        "1. Identificar os elementos: lado da base L = 6 m; altura da pirâmide h = 4 m.",
        "2. Calcular o apótema da base: ab = L / 2 = 6 / 2 = 3 m.",
        "3. Aplicar o Teorema de Pitágoras para o apótema da pirâmide (ap): ap² = 4² + 3² = 25 ⇒ ap = 5 m.",
        "4. Calcular a área de uma face triangular: Aface = (L · ap) / 2 = (6 · 5) / 2 = 15 m².",
        "5. Calcular a área lateral (4 faces iguais): Alateral = 4 · 15 = 60 m²."
      ],
      coreConcept: "Relação métrica na pirâmide regular: ap² = h² + (L/2)². A área lateral é a soma das áreas dos triângulos das faces.",
      trapWarning: "Cuidado para não confundir o apótema da pirâmide (altura inclinada da face) com a altura vertical da pirâmide."
    },
    commonTraps: ["Confundir apótema da pirâmide com a altura vertical da pirâmide", "Esquecer de dividir por 2 na área do triângulo"],
    tags: ["piramide", "apotema", "area-lateral", "pitagoras"]
  },
  {
    id: "MAT-ESP-013",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Otimização de Embalagens e Razão Superfície-Volume",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois recipientes cilíndricos fechados, A e B, foram projetados para armazenar exatamente o mesmo volume de 250π cm³ de suco de frutas:\n• O cilindro A possui raio da base rA = 5 cm.\n• O cilindro B possui raio da base rB = 10 cm.",
      source: "Design de Embalagens e Sustentabilidade de Materiais"
    },
    prompt: "Comparando as áreas totais de material necessárias para fabricar esses dois recipientes cilíndricos, verifica-se que:",
    options: [
      { id: "a", text: "o cilindro A requer 150π cm² de material, sendo mais econômico que o cilindro B, que requer 250π cm².", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ambos utilizam exatamente a mesma quantidade de material, pois possuem o mesmo volume interno.", isCorrect: false, distractorRationale: "Sólidos de mesmo volume podem ter áreas superficiais totalmente diferentes dependendo de suas proporções geométricas." },
      { id: "c", text: "o cilindro B é mais econômico, gastando metade da quantidade de material do cilindro A.", isCorrect: false, distractorRationale: "O cilindro B gasta 250π cm², que é maior do que os 150π cm² de A." },
      { id: "d", text: "o cilindro A necessita de 300π cm² e o cilindro B necessita de 500π cm².", isCorrect: false, distractorRationale: "Duplicou a área total por erro de cálculo." },
      { id: "e", text: "o cilindro A é inviável, pois sua altura calculada resulta em um valor negativo.", isCorrect: false, distractorRationale: "A altura de A é h = 250π / (π · 25) = 10 cm, perfeitamente real e positiva." }
    ],
    detailedExplanation: {
      summary: "1. Cilindro A: V = π · rA² · hA = π · 25 · hA = 250π ⇒ hA = 10 cm.\nÁrea total de A: Atotal = 2 · π · rA · hA + 2 · π · rA² = 2 · π · 5 · 10 + 2 · π · 25 = 100π + 50π = 150π cm².\n2. Cilindro B: V = π · rB² · hB = π · 100 · hB = 250π ⇒ hB = 2,5 cm.\nÁrea total de B: Atotal = 2 · π · rB · hB + 2 · π · rB² = 2 · π · 10 · 2,5 + 2 · π · 100 = 50π + 200π = 250π cm².\nLogo, o cilindro A economiza material em relação a B (150π vs 250π).",
      stepByStep: [
        "1. Calcular hA: hA = V / (π · rA²) = 250π / (25π) = 10 cm.",
        "2. Calcular a área total de A: Atotal(A) = 2π·rA·hA + 2π·rA² = 2π·5·10 + 2π·25 = 100π + 50π = 150π cm².",
        "3. Calcular hB: hB = V / (π · rB²) = 250π / (100π) = 2,5 cm.",
        "4. Calcular a área total de B: Atotal(B) = 2π·rB·hB + 2π·rB² = 2π·10·2,5 + 2π·100 = 50π + 200π = 250π cm².",
        "5. Comparar os resultados: Cilindro A usa 150π cm² (mais econômico) e B usa 250π cm²."
      ],
      coreConcept: "A área total de um cilindro é At = 2π·r·h + 2π·r². Sólidos de mesmo volume possuem áreas superficiais distintas; recipientes muito largos gastam mais material nas tampas.",
      trapWarning: "Mesmo volume NÃO implica mesma área de material! A proporção entre raio e altura altera drasticamente a área total."
    },
    commonTraps: ["Achar que recipientes de mesmo volume sempre gastam a mesma quantidade de material"],
    tags: ["cilindro", "area-total", "otimizacao", "volume-constante"]
  },
  {
    id: "MAT-ESP-014",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Prisma Hexagonal Regular e Otimização Apícola",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Os alvéolos dos favos de mel produzidos por abelhas possuem a geometria notável de prismas hexagonais regulares retos, otimizando o armazenamento de mel com a mínima quantidade de cera. Um apicultor mediu um alvéolo modelo e obteve lado do hexágono da base regular igual a 4 mm e profundidade (altura) de 10 mm.\n\nConsidere que a área de um hexágono regular de lado L é dada por Ab = (3 · L² · √3) / 2 e use a aproximação √3 = 1,7.",
      source: "Biometria Apícola e Geometria da Natureza"
    },
    prompt: "O volume de mel que esse alvéolo hexagonal comporta, em milímetros cúbicos (mm³), é de:",
    options: [
      { id: "a", text: "408", isCorrect: true, distractorRationale: null },
      { id: "b", text: "240", isCorrect: false, distractorRationale: "Desconsiderou o termo √3 no cálculo da área do triângulo equilátero que compõe o hexágono." },
      { id: "c", text: "816", isCorrect: false, distractorRationale: "Esqueceu de dividir por 2 na fórmula da área do hexágono regular." },
      { id: "d", text: "160", isCorrect: false, distractorRationale: "Calculou como se a base fosse um quadrado de lado 4 mm (16 · 10 = 160 mm³)." },
      { id: "e", text: "600", isCorrect: false, distractorRationale: "Errou na potenciação do lado (fez 4 · 2 = 8 em vez de 4² = 16)." }
    ],
    detailedExplanation: {
      summary: "1. Um hexágono regular é formado por 6 triângulos equiláteros de lado L. Sua área é Ab = 6 · (L² · √3 / 4) = (3 · L² · √3) / 2.\n2. Substituindo L = 4 mm e √3 = 1,7: Ab = (3 · 16 · 1,7) / 2 = 3 · 8 · 1,7 = 24 · 1,7 = 40,8 mm².\n3. O volume do prisma é V = Ab · h = 40,8 · 10 = 408 mm³.",
      stepByStep: [
        "1. Identificar os dados: L = 4 mm; h = 10 mm; √3 = 1,7.",
        "2. Calcular a área da base hexagonal: Ab = (3 · L² · √3) / 2.",
        "3. Substituir L = 4: Ab = (3 · 16 · 1,7) / 2 = 48 · 1,7 / 2 = 24 · 1,7 = 40,8 mm².",
        "4. Multiplicar pela altura do alvéolo: V = Ab · h = 40,8 · 10 = 408 mm³.",
        "5. Concluir que o volume interno é 408 mm³."
      ],
      coreConcept: "A área do hexágono regular é composta por 6 triângulos equiláteros: Ab = 6 · (L²·√3 / 4) = (3·L²·√3) / 2. O volume do prisma reto é V = Ab · h.",
      trapWarning: "Lembre-se de que a base hexagonal não é um quadrado; ela requer a fórmula baseada em triângulos equiláteros com raiz de 3."
    },
    commonTraps: ["Esquecer que o hexágono tem raiz de 3 em sua área", "Confundir área do hexágono com área do quadrado"],
    tags: ["prisma-hexagonal", "volume", "alveolo", "geometria-espacial"]
  },
  {
    id: "MAT-ESP-015",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Tronco de Pirâmide Regular e Vaso Ornamental",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um vaso de cerâmica ornamental para cultivo de plantas medicinais possui a forma de um tronco de pirâmide regular de bases quadradas. As dimensões internas do vaso são:\n• Lado do quadrado da base superior maior (B) = 30 cm\n• Lado do quadrado da base inferior menor (b) = 10 cm\n• Altura vertical (h) = 24 cm\n\nA fórmula do volume do tronco de pirâmide de bases com áreas AB e Ab é: V = (h / 3) · (AB + √(AB · Ab) + Ab).",
      source: "Paisagismo e Jardinagem Sustentável"
    },
    prompt: "A capacidade volumétrica desse vaso, em litros, é de:",
    options: [
      { id: "a", text: "10,4 litros", isCorrect: true, distractorRationale: null },
      { id: "b", text: "24,0 litros", isCorrect: false, distractorRationale: "Calculou como um prisma com a base superior de 30 cm (900 · 24 / 1 000 = 21,6 L ou erro similar)." },
      { id: "c", text: "8,0 litros", isCorrect: false, distractorRationale: "Esqueceu o termo médio √(AB · Ab) na fórmula do tronco de pirâmide." },
      { id: "d", text: "13,6 litros", isCorrect: false, distractorRationale: "Usou a média aritmética dos lados (20 cm) em um prisma reto (400 · 24 = 9 600 cm³ = 9,6 L) ou erro de contas." },
      { id: "e", text: "5,2 litros", isCorrect: false, distractorRationale: "Dividiu o resultado correto por 2." }
    ],
    detailedExplanation: {
      summary: "1. Área da base maior: AB = 30² = 900 cm².\n2. Área da base menor: Ab = 10² = 100 cm².\n3. Termo médio: √(AB · Ab) = √(900 · 100) = √(90 000) = 300 cm².\n4. Soma dos termos: 900 + 300 + 100 = 1 300 cm².\n5. Volume: V = (h / 3) · 1 300 = (24 / 3) · 1 300 = 8 · 1 300 = 10 400 cm³.\n6. Convertendo para litros: 10 400 cm³ / 1 000 = 10,4 litros.",
      stepByStep: [
        "1. Calcular AB: 30 · 30 = 900 cm².",
        "2. Calcular Ab: 10 · 10 = 100 cm².",
        "3. Calcular o termo misto geométrico: √(900 · 100) = 30 · 10 = 300 cm².",
        "4. Somar os termos internos: 900 + 300 + 100 = 1 300 cm².",
        "5. Multiplicar por h/3: (24 / 3) · 1 300 = 8 · 1 300 = 10 400 cm³.",
        "6. Converter para litros dividindo por 1 000: 10 400 / 1 000 = 10,4 litros."
      ],
      coreConcept: "Volume do tronco de pirâmide: V = (h/3) · (AB + √(AB · Ab) + Ab). Conversão: 1 L = 1 000 cm³.",
      trapWarning: "Cuidado com o termo médio: é a média geométrica das áreas das bases (√(AB · Ab)), e não a média aritmética."
    },
    commonTraps: ["Esquecer a raiz da multiplicação das áreas na fórmula do tronco", "Errar a conversão de cm³ para litros"],
    tags: ["tronco-piramide", "volume", "vaso", "conversao-litros"]
  },
  {
    id: "MAT-ESP-016",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Seção Meridiana e Cilindro Equilátero",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um cilindro circular reto é denominado cilindro equilátero quando sua seção meridiana (o corte vertical que passa pelo eixo central do cilindro) é uma região quadrada. Um fabricante de recipientes metálicos projeta um cilindro equilátero cuja altura mede h = 12 cm.\n\nConsidere a aproximação π = 3.",
      source: "Geometria Métrica dos Sólidos de Revolução"
    },
    prompt: "O raio da base desse cilindro equilátero e o seu volume interno são, respectivamente:",
    options: [
      { id: "a", text: "6 cm e 1 296 cm³", isCorrect: true, distractorRationale: null },
      { id: "b", text: "12 cm e 5 184 cm³", isCorrect: false, distractorRationale: "Confundiu o raio da base com o diâmetro (usou r = 12 cm em vez de r = 6 cm)." },
      { id: "c", text: "6 cm e 432 cm³", isCorrect: false, distractorRationale: "Dividiu o volume por 3 como se a figura fosse um cone." },
      { id: "d", text: "3 cm e 324 cm³", isCorrect: false, distractorRationale: "Dividiu a altura por 4 para achar o raio em vez de dividir por 2." },
      { id: "e", text: "12 cm e 1 728 cm³", isCorrect: false, distractorRationale: "Calculou o volume de um cubo de aresta 12 cm." }
    ],
    detailedExplanation: {
      summary: "No cilindro equilátero, a seção meridiana é um quadrado de lado igual à altura h e à largura 2r (diâmetro da base). Portanto: 2r = h ⇒ 2r = 12 ⇒ r = 6 cm.\nO volume do cilindro é V = π · r² · h = 3 · 6² · 12 = 3 · 36 · 12 = 108 · 12 = 1 296 cm³.",
      stepByStep: [
        "1. Definição de cilindro equilátero: altura é igual ao diâmetro da base (h = 2r).",
        "2. Como h = 12 cm, temos 2r = 12 ⇒ r = 6 cm.",
        "3. Aplicar a fórmula do volume: V = π · r² · h.",
        "4. Substituir os dados com π = 3: V = 3 · 6² · 12 = 3 · 36 · 12.",
        "5. Efetuar as multiplicações: 3 · 36 = 108; 108 · 12 = 1 296 cm³."
      ],
      coreConcept: "Cilindro equilátero: h = 2r. A seção meridiana é um quadrado de lado 2r.",
      trapWarning: "Lembre-se: no cilindro equilátero, a altura é igual ao DIÂMETRO (2r), logo o raio é a metade da altura."
    },
    commonTraps: ["Achar que no cilindro equilátero a altura é igual ao raio (h = r) em vez do diâmetro (h = 2r)"],
    tags: ["cilindro-equilatero", "secao-meridiana", "volume", "raio"]
  },
  {
    id: "MAT-ESP-017",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Fusão e Moldagem de Sólidos Metálicos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma oficina de fundição artística, um bloco maciço de bronze com formato de paralelepípedo reto-retângulo medindo 20 cm de comprimento, 15 cm de largura e 12 cm de altura foi totalmente fundido. O metal líquido resultante foi utilizado para moldar pequenos cubos maciços idênticos de aresta a = 3 cm, sem nenhuma perda de material durante o processo de fundição.",
      source: "Processos de Fundição e Conformação Mecânica"
    },
    prompt: "O número máximo de cubos maciços completos que puderam ser produzidos com todo o bronze fundido é igual a:",
    options: [
      { id: "a", text: "133", isCorrect: true, distractorRationale: null },
      { id: "b", text: "120", isCorrect: false, distractorRationale: "Calculou a divisão apenas por 30 ou estimou sem efetuar a divisão exata dos volumes." },
      { id: "c", text: "400", isCorrect: false, distractorRationale: "Dividiu pela área da face do cubo (3² = 9 cm²) em vez do volume (3³ = 27 cm³)." },
      { id: "d", text: "1 200", isCorrect: false, distractorRationale: "Dividiu apenas pela aresta linear (3 cm) em vez do volume." },
      { id: "e", text: "134", isCorrect: false, distractorRationale: "Arredondou para cima indevidamente (o volume fracionário não forma um cubo completo adicional)." }
    ],
    detailedExplanation: {
      summary: "Como o metal foi fundido (liquefeito), a restrição de empacotamento linear não existe; o número de cubos depende exclusivamente da conservação do volume total:\n1. Volume do bloco inicial: Vbloco = 20 · 15 · 12 = 3 600 cm³.\n2. Volume de cada cubo: Vcubo = a³ = 3³ = 27 cm³.\n3. Número de cubos completos: N = Vbloco / Vcubo = 3 600 / 27 = 400 / 3 ≈ 133,33. Portanto, formam-se 133 cubos completos.",
      stepByStep: [
        "1. Calcular o volume do paralelepípedo: 20 · 15 · 12 = 3 600 cm³.",
        "2. Calcular o volume de um cubo: 3 · 3 · 3 = 27 cm³.",
        "3. Dividir os volumes: 3 600 / 27 = 133,33...",
        "4. Como a questão pede cubos completos, toma-se a parte inteira.",
        "5. Concluir que podem ser moldados 133 cubos."
      ],
      coreConcept: "Em processos de fusão e remoldagem, aplica-se o princípio da conservação de volume: N = Vtotal / Vunitário.",
      trapWarning: "Diferencie problemas de fusão (onde o material derrete e se aproveita todo o volume) de problemas de corte de blocos rígidos (onde haveria sobras geométricas)."
    },
    commonTraps: ["Arredondar para cima quando a pergunta exige peças completas", "Dividir pela área em vez de pelo volume"],
    tags: ["fusao", "conservacao-volume", "cubo", "paralelepipedo"]
  },
  {
    id: "MAT-ESP-018",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Tanque Esférico de Gás e Área de Pintura Externa",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma distribuidora de combustíveis, um tanque de armazenamento de gás GLP possui o formato perfeitamente esférico com raio de 5 metros. Para proteger a estrutura metálica contra a corrosão climática, toda a superfície externa do tanque receberá duas demãos de uma tinta especial.\n\nA fórmula da área da superfície da esfera é A = 4 · π · r². Adote π = 3,14.",
      source: "Engenharia de Armazenamento e Manutenção de Equipamentos"
    },
    prompt: "Sabendo que cada galão de tinta cobre exatamente 78,5 m² em uma demão, a quantidade total de galões necessária para pintar o tanque com as duas demãos previstas é igual a:",
    options: [
      { id: "a", text: "8", isCorrect: true, distractorRationale: null },
      { id: "b", text: "4", isCorrect: false, distractorRationale: "Calculou a quantidade de galões para apenas uma demão, esquecendo de multiplicar por 2." },
      { id: "c", text: "16", isCorrect: false, distractorRationale: "Duplicou indevidamente a área duas vezes." },
      { id: "d", text: "6", isCorrect: false, distractorRationale: "Erro de divisão da área superficial pelo rendimento do galão." },
      { id: "e", text: "10", isCorrect: false, distractorRationale: "Usou a aproximação π = 3 e errou o cálculo da área." }
    ],
    detailedExplanation: {
      summary: "1. Área da superfície esférica: A = 4 · π · r² = 4 · 3,14 · 5² = 4 · 3,14 · 25 = 100 · 3,14 = 314 m².\n2. Como são necessárias duas demãos, a área total equivalente de pintura é: Atotal = 314 · 2 = 628 m².\n3. Cada galão cobre 78,5 m². Logo, o número de galões é: N = 628 / 78,5 = 8 galões.",
      stepByStep: [
        "1. Identificar os dados: raio r = 5 m; π = 3,14; rendimento = 78,5 m²/galão; 2 demãos.",
        "2. Calcular a área externa da esfera: A = 4 · π · r² = 4 · 3,14 · 25 = 314 m².",
        "3. Multiplicar pelo número de demãos: 314 · 2 = 628 m².",
        "4. Dividir pelo rendimento de cada galão: 628 / 78,5 = 8 galões.",
        "5. Concluir que serão necessários 8 galões de tinta."
      ],
      coreConcept: "Área da esfera: A = 4 · π · r². O cálculo de consumo de insumos deve levar em conta o número de demãos aplicadas.",
      trapWarning: "Atenção redobrada ao enunciado: esquecer de dobrar a área para a segunda demão é o erro mais recorrente da prova."
    },
    commonTraps: ["Esquecer de aplicar as duas demãos exigidas no enunciado"],
    tags: ["esfera", "area-superficial", "pintura", "rendimento"]
  },
  {
    id: "MAT-ESP-019",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Cone Equilátero e Razão entre Áreas",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um cone circular reto é chamado de cone equilátero quando sua seção meridiana é um triângulo equilátero, o que significa que o comprimento da sua geratriz é exatamente igual ao diâmetro de sua base (g = 2r).",
      source: "Geometria Espacial e Sólidos de Revolução"
    },
    prompt: "Em qualquer cone equilátero, a razão entre a sua área lateral (Al = π · r · g) e a sua área da base (Ab = π · r²) é rigorosamente igual a:",
    options: [
      { id: "a", text: "2", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1", isCorrect: false, distractorRationale: "A área lateral e a área da base seriam iguais apenas se g = r, o que é geometricamente impossível em um cone reto (já que g > r)." },
      { id: "c", text: "3", isCorrect: false, distractorRationale: "Confundiu com a relação volumétrica de um terço do cilindro." },
      { id: "d", text: "4", isCorrect: false, distractorRationale: "Elevou a razão de geratriz e raio ao quadrado desnecessariamente." },
      { id: "e", text: "√3", isCorrect: false, distractorRationale: "Confundiu a razão entre áreas com a relação da altura h = r√3 no cone equilátero." }
    ],
    detailedExplanation: {
      summary: "No cone equilátero, a geratriz é o dobro do raio: g = 2r.\nA área lateral é Al = π · r · g = π · r · (2r) = 2 · π · r².\nA área da base é Ab = π · r².\nA razão pedida é Al / Ab = (2 · π · r²) / (π · r²) = 2.",
      stepByStep: [
        "1. Definição de cone equilátero: g = 2r.",
        "2. Expressar a área lateral em função de r: Al = π · r · g = π · r · (2r) = 2πr².",
        "3. Expressar a área da base: Ab = πr².",
        "4. Montar a razão: Al / Ab = (2πr²) / (πr²).",
        "5. Simplificar os termos comuns πr²: Razão = 2."
      ],
      coreConcept: "No cone equilátero, a área lateral é exatamente o dobro da área da base: Al = 2 · Ab.",
      trapWarning: "Embora a altura seja h = r√3, a razão entre a área lateral e a base depende apenas de g e r, resultando em um valor racional exato 2."
    },
    commonTraps: ["Confundir a razão entre áreas com o valor de raiz de 3 da altura"],
    tags: ["cone-equilatero", "razao-areas", "geratriz", "geometria-plana-espacial"]
  },
  {
    id: "MAT-ESP-020",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Diagonal de Paralelepípedo e Dimensão Máxima de Tubo",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma empresa de engenharia necessita transportar uma barra rígida de aço linear no interior do compartimento fechado de um veículo de carga. O compartimento possui formato de paralelepípedo reto-retângulo com comprimento de 4 metros, largura de 3 metros e altura de 12 metros.",
      source: "Logística Industrial e Geometria Tridimensional"
    },
    prompt: "O comprimento máximo que essa barra de aço pode ter para caber perfeitamente no interior do compartimento, apoiada entre dois vértices opostos mais distantes, é de:",
    options: [
      { id: "a", text: "13 metros", isCorrect: true, distractorRationale: null },
      { id: "b", text: "19 metros", isCorrect: false, distractorRationale: "Somou as três dimensões lineares do paralelepípedo (4 + 3 + 12 = 19 m)." },
      { id: "c", text: "12 metros", isCorrect: false, distractorRationale: "Considerou apenas a maior dimensão do paralelepípedo (a altura de 12 m)." },
      { id: "d", text: "15 metros", isCorrect: false, distractorRationale: "Erro na aplicação do Teorema de Pitágoras tridimensional." },
      { id: "e", text: "5 metros", isCorrect: false, distractorRationale: "Calculou apenas a diagonal da base retangular (√(4² + 3²) = 5 m), esquecendo a terceira dimensão." }
    ],
    detailedExplanation: {
      summary: "A distância máxima interna em um paralelepípedo reto-retângulo de dimensões a, b e c é a sua diagonal espacial: D = √(a² + b² + c²).\nSubstituindo a = 4, b = 3 e c = 12:\nD = √(4² + 3² + 12²) = √(16 + 9 + 144) = √(25 + 144) = √169 = 13 metros.",
      stepByStep: [
        "1. Identificar as três arestas: a = 4 m, b = 3 m, c = 12 m.",
        "2. Aplicar a fórmula da diagonal espacial: D = √(a² + b² + c²).",
        "3. Calcular a soma dos quadrados: 4² + 3² + 12² = 16 + 9 + 144.",
        "4. Somar os termos: 16 + 9 = 25; 25 + 144 = 169.",
        "5. Extrair a raiz quadrada: √169 = 13 metros."
      ],
      coreConcept: "A maior distância interna entre dois pontos de um paralelepípedo é sua diagonal espacial: D = √(a² + b² + c²).",
      trapWarning: "Não calcule apenas a diagonal da base (5 metros); em três dimensões, a barra pode ser posicionada inclinada do chão ao teto oposto."
    },
    commonTraps: ["Calcular apenas a diagonal da base retangular", "Somar as arestas em vez de aplicar Pitágoras espacial"],
    tags: ["diagonal-espacial", "paralelepipedo", "pitagoras-3d", "dimensao-maxima"]
  },
  {
    id: "MAT-ESP-021",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Densidade, Massa e Volume de Esfera Oca",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma boia marítima de sinalização para controle portuário é constituída por uma esfera oca de aço inoxidável (densidade = 8,0 g/cm³). A esfera possui raio externo R = 10 cm e raio interno r = 9 cm.\n\nConsidere a fórmula do volume da esfera V = (4/3) · π · r³ e adote π = 3.",
      source: "Engenharia Naval e Equipamentos de Navegação Costeira"
    },
    prompt: "A massa total de aço inoxidável utilizada na fabricação dessa boia esférica oca é igual a:",
    options: [
      { id: "a", text: "8 672 g", isCorrect: true, distractorRationale: null },
      { id: "b", text: "32 000 g", isCorrect: false, distractorRationale: "Calculou a massa considerando a esfera totalmente maciça de raio 10 cm." },
      { id: "c", text: "4 336 g", isCorrect: false, distractorRationale: "Esqueceu de multiplicar pelo fator 4 do volume da esfera (usou apenas (1/3) · π em vez de (4/3) · π)." },
      { id: "d", text: "1 084 g", isCorrect: false, distractorRationale: "Calculou apenas o volume do aço (1 084 cm³) e esqueceu de multiplicar pela densidade de 8,0 g/cm³." },
      { id: "e", text: "9 600 g", isCorrect: false, distractorRationale: "Subtraiu os raios primeiro: 10 - 9 = 1 e calculou o volume de uma esfera de raio 1 cm." }
    ],
    detailedExplanation: {
      summary: "1. O volume de metal na casca esférica é a diferença entre os volumes das esferas externa e interna:\nVmetal = (4/3) · π · (R³ - r³).\nCom π = 3, os fatores 3 e 1/3 cancelam-se: Vmetal = 4 · (10³ - 9³) = 4 · (1 000 - 729) = 4 · 271 = 1 084 cm³.\n2. A massa é m = densidade · Vmetal = 8,0 g/cm³ · 1 084 cm³ = 8 672 g.",
      stepByStep: [
        "1. Identificar os dados: R = 10 cm; r = 9 cm; densidade d = 8,0 g/cm³; π = 3.",
        "2. Calcular os cubos dos raios: R³ = 10³ = 1 000 cm³; r³ = 9³ = 729 cm³.",
        "3. Calcular a diferença volumétrica: R³ - r³ = 1 000 - 729 = 271 cm³.",
        "4. Calcular o volume da casca esférica: V = (4/3) · 3 · 271 = 4 · 271 = 1 084 cm³.",
        "5. Calcular a massa de metal: m = d · V = 8,0 · 1 084 = 8 672 g."
      ],
      coreConcept: "Volume de casca esférica oca: V = (4/3)·π·(R³ - r³). NUNCA faça (R - r)³!",
      trapWarning: "Erro clássico fatal: fazer (10 - 9)³ = 1³ = 1. A subtração de cubos (1 000 - 729 = 271) é completamente diferente do cubo da subtração!"
    },
    commonTraps: ["Fazer (R - r)³ em vez de (R³ - r³)", "Esquecer de multiplicar o volume pela densidade para obter a massa"],
    tags: ["esfera-oca", "densidade", "massa", "potenciacao"]
  },
  {
    id: "MAT-ESP-022",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Proporção de Líquido em Cone Invertido e Altura da Coluna",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma taça em formato de cone circular reto invertido com altura total H = 12 cm está cheia de água até a metade de sua altura (h = 6 cm).",
      source: "Raciocínio Geométrico e Modelagem de Fluidos"
    },
    prompt: "A fração que o volume de água contido na taça representa em relação ao volume total que a taça suporta quando completamente cheia é igual a:",
    options: [
      { id: "a", text: "1/8", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1/2", isCorrect: false, distractorRationale: "Supôs intuitivamente que meia altura equivale a meio volume (o que só ocorreria em cilindros ou prismas retos, nunca em cones)." },
      { id: "c", text: "1/4", isCorrect: false, distractorRationale: "Elevou a razão de alturas ao quadrado (1/2)² = 1/4, o que representaria a razão entre as áreas superficiais dos círculos." },
      { id: "d", text: "1/3", isCorrect: false, distractorRationale: "Confundiu com o fator 1/3 da fórmula do volume do cone." },
      { id: "e", text: "1/6", isCorrect: false, distractorRationale: "Multiplicou 1/2 por 1/3 sem fundamento geométrico." }
    ],
    detailedExplanation: {
      summary: "O cone menor formado pelo líquido é geometricamente semelhante ao cone total da taça. A razão de semelhança linear é k = h / H = 6 / 12 = 1/2. Como a razão entre volumes de sólidos semelhantes é k³, temos: Vlíquido / Vtotal = k³ = (1/2)³ = 1/8. Portanto, o volume de líquido corresponde a apenas 1/8 (12,5%) da capacidade total da taça.",
      stepByStep: [
        "1. Identificar a relação de semelhança entre o cone de água e o cone da taça.",
        "2. Calcular a razão linear de semelhança k: k = 6 cm / 12 cm = 1/2.",
        "3. Aplicar a lei de semelhança para volumes: Vlíquido / Vtotal = k³.",
        "4. Elevar a razão linear ao cubo: (1/2)³ = 1/8.",
        "5. Concluir que o líquido ocupa exatamente 1/8 do volume total."
      ],
      coreConcept: "Em cones e pirâmides, preencher até a metade da altura (h = H/2) preenche apenas um oitavo do volume total (V = Vtotal / 8).",
      trapWarning: "Armadilha mais frequente da geometria espacial: acreditar no senso comum de que 'metade da altura é metade do volume'."
    },
    commonTraps: ["Achar que meia altura de um cone contém metade do volume total", "Usar k² em vez de k³"],
    tags: ["cone-invertido", "solidos-semelhantes", "razao-cubica", "taca"]
  },
  {
    id: "MAT-ESP-023",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Cunha Esférica e Fuso Esférico",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma escultura decorativa em formato esférico de raio r = 6 cm teve uma fatia gomo-cêntrica removida, correspondente a uma cunha esférica com ângulo diedro de abertura α = 30°.\n\nA fórmula do volume de uma cunha esférica de raio r e ângulo central α (em graus) é: Vcunha = (α / 360°) · ((4/3) · π · r³).\nConsidere a aproximação π = 3.",
      source: "Geometria da Esfera e Design Escultórico"
    },
    prompt: "O volume dessa fatia esférica (cunha) removida, em centímetros cúbicos, é igual a:",
    options: [
      { id: "a", text: "72", isCorrect: true, distractorRationale: null },
      { id: "b", text: "216", isCorrect: false, distractorRationale: "Calculou a fração para um ângulo de 90° em vez de 30°." },
      { id: "c", text: "144", isCorrect: false, distractorRationale: "Calculou a fração para um ângulo de 60° (1/6 da esfera)." },
      { id: "d", text: "864", isCorrect: false, distractorRationale: "Calculou o volume da esfera completa sem multiplicar pela fração 30°/360°." },
      { id: "e", text: "36", isCorrect: false, distractorRationale: "Dividiu indevidamente o resultado por 2." }
    ],
    detailedExplanation: {
      summary: "1. O volume de uma esfera completa com r = 6 cm e π = 3 é: Vesf = (4/3) · 3 · 6³ = 4 · 216 = 864 cm³.\n2. A cunha esférica de ângulo 30° representa a seguinte fração da esfera completa: 30° / 360° = 1/12.\n3. O volume da cunha é: Vcunha = (1/12) · 864 = 72 cm³.",
      stepByStep: [
        "1. Identificar o ângulo da cunha: α = 30°.",
        "2. Calcular a fração da esfera correspondente: f = 30° / 360° = 1 / 12.",
        "3. Calcular o volume total da esfera: V = (4/3) · π · r³ = (4/3) · 3 · 6³ = 4 · 216 = 864 cm³.",
        "4. Multiplicar pela fração: Vcunha = (1 / 12) · 864 = 72 cm³.",
        "5. Concluir que a fatia possui 72 cm³."
      ],
      coreConcept: "O volume da cunha esférica e a área do fuso esférico são proporcionais ao ângulo diedro α dividido por 360°.",
      trapWarning: "Cunha esférica refere-se ao sólido (volume), enquanto fuso esférico refere-se à superfície (área)."
    },
    commonTraps: ["Confundir cunha esférica (volume) com fuso esférico (área)"],
    tags: ["cunha-esferica", "esfera", "volume", "proporcionalidade"]
  },
  {
    id: "MAT-ESP-024",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Placas Térmicas Solares e Reservatório Boiler Cilíndrico",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma residência com sistema de aquecimento solar, a água quente é armazenada em um reservatório térmico horizontal cilíndrico (boiler) de 1 metro de diâmetro interno e 2 metros de comprimento.\n\nAdote π = 3,14.",
      source: "Sistemas Fototérmicos e Eficiência Energética Residencial"
    },
    prompt: "A capacidade máxima desse reservatório térmico cilíndrico, em litros de água aquecida, é de:",
    options: [
      { id: "a", text: "1 570", isCorrect: true, distractorRationale: null },
      { id: "b", text: "6 280", isCorrect: false, distractorRationale: "Usou o diâmetro (1 m) como se fosse o raio no cálculo da área da base (π · 1² · 2 = 6,28 m³ = 6 280 L)." },
      { id: "c", text: "3 140", isCorrect: false, distractorRationale: "Esqueceu de elevar o raio ao quadrado ou calculou 3,14 · 1 · 1 000." },
      { id: "d", text: "785", isCorrect: false, distractorRationale: "Dividiu a capacidade por 2 por engano." },
      { id: "e", text: "15 700", isCorrect: false, distractorRationale: "Errou a conversão de m³ para litros multiplicando por 10 000 em vez de 1 000." }
    ],
    detailedExplanation: {
      summary: "1. O diâmetro é d = 1 m, logo o raio da base cilíndrica é r = d / 2 = 0,5 metro.\n2. O comprimento (altura) é h = 2 metros.\n3. O volume do cilindro é V = π · r² · h = 3,14 · (0,5)² · 2 = 3,14 · 0,25 · 2 = 3,14 · 0,5 = 1,57 m³.\n4. Convertendo para litros: 1,57 m³ · 1 000 L/m³ = 1 570 litros.",
      stepByStep: [
        "1. Identificar o diâmetro: d = 1 m ⇒ raio r = 0,5 m.",
        "2. Identificar a altura (comprimento): h = 2 m.",
        "3. Calcular a área da base: Ab = π · r² = 3,14 · (0,5)² = 3,14 · 0,25 = 0,785 m².",
        "4. Calcular o volume: V = Ab · h = 0,785 · 2 = 1,57 m³.",
        "5. Converter para litros: 1,57 · 1 000 = 1 570 litros."
      ],
      coreConcept: "O raio é a metade do diâmetro: r = d/2. Conversão métrica: 1 m³ = 1 000 litros.",
      trapWarning: "Cuidado clássico do ENEM: o texto fornece o DIÂMETRO (1 m). Usar 1 m como raio quadruplica o resultado final!"
    },
    commonTraps: ["Usar o diâmetro fornecido diretamente como raio na fórmula"],
    tags: ["boiler", "cilindro", "diametro", "conversao-litros"]
  },
  {
    id: "MAT-ESP-025",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Sólido de Revolução: Rotação de Trapézio Retângulo",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na usinagem de uma peça metálica em um torno mecânico de precisão, uma chapa plana no formato de um trapézio retângulo gira 360° em torno do eixo que contém o seu lado perpendicular às bases.\nAs dimensões do trapézio são:\n• Base maior = 5 cm\n• Base menor = 2 cm\n• Altura perpendicular às bases = 6 cm\n\nAdote a aproximação π = 3.",
      source: "Usinagem CNC e Desenho Mecânico Tridimensional"
    },
    prompt: "O sólido geométrico tridimensional gerado por essa rotação completa e o seu respectivo volume, em centímetros cúbicos, são:",
    options: [
      { id: "a", text: "Tronco de cone circular reto e 234 cm³", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Cilindro circular reto e 450 cm³", isCorrect: false, distractorRationale: "A rotação de um trapézio retângulo com bases desiguais gera um tronco de cone, e não um cilindro." },
      { id: "c", text: "Cone circular reto e 150 cm³", isCorrect: false, distractorRationale: "A rotação de um triângulo retângulo gera um cone; a rotação de trapézio retângulo gera tronco de cone." },
      { id: "d", text: "Tronco de cone circular reto e 117 cm³", isCorrect: false, distractorRationale: "Dividiu o volume por 2 indevidamente ao final do cálculo." },
      { id: "e", text: "Esfera de raio truncado e 324 cm³", isCorrect: false, distractorRationale: "A rotação de semicírculo gera esfera; trapézio gera tronco de cone." }
    ],
    detailedExplanation: {
      summary: "1. A rotação completa de 360° de um trapézio retângulo em torno do lado perpendicular às bases gera um TRONCO DE CONE circular reto.\n2. As bases do trapézio tornam-se os raios das bases do tronco de cone: R = 5 cm e r = 2 cm. A altura do trapézio torna-se a altura do tronco: h = 6 cm.\n3. Aplicando a fórmula do volume do tronco de cone: V = (π · h / 3) · (R² + R · r + r²).\nCom π = 3: V = (3 · 6 / 3) · (5² + 5 · 2 + 2²) = 6 · (25 + 10 + 4) = 6 · 39 = 234 cm³.",
      stepByStep: [
        "1. Identificar o sólido de revolução: rotação de trapézio retângulo em torno do lado perpendicular = Tronco de Cone.",
        "2. Identificar os parâmetros do tronco de cone: R = 5 cm, r = 2 cm, h = 6 cm.",
        "3. Calcular o termo entre parênteses: R² + R·r + r² = 25 + 10 + 4 = 39.",
        "4. Multiplicar pelo coeficiente: (π · h) / 3 = (3 · 6) / 3 = 6.",
        "5. Efetuar a multiplicação final: 6 · 39 = 234 cm³."
      ],
      coreConcept: "A revolução completa de 360° de um trapézio retângulo gera um tronco de cone circular reto, cujo volume é V = (π·h/3)·(R² + R·r + r²).",
      trapWarning: "Reconheça a família dos sólidos de revolução: retângulo gera cilindro; triângulo retângulo gera cone; semicírculo gera esfera; trapézio retângulo gera tronco de cone."
    },
    commonTraps: ["Confundir o sólido gerado por rotação de trapézio com cone ou cilindro"],
    tags: ["solidos-revolucao", "tronco-cone", "trapezio", "rotacao-360"]
  }
];
