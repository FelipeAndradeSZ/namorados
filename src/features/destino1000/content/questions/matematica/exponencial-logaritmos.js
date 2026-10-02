/**
 * BANCO DE QUESTÕES DESTINO 1000
 * Módulo: Funções Exponenciais e Logaritmos
 * Área: Matemática e suas Tecnologias
 * Total: 25 Questões originais e contextualizadas padrão ENEM
 * Competências: C5 | Habilidades: H19, H20, H21, H22, H23
 */

export const QUESTIONS_EXPONENCIAL_LOGARITMOS = [
  {
    id: "MAT-LOG-001",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Decaimento Radioativo e Meia-Vida",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O iodo-131 (I-131) é um radioisótopo amplamente utilizado no diagnóstico e tratamento de carcinomas da tireoide. Ele decai de acordo com a função exponencial M(t) = M_0 * (1/2)^(t / T), onde M_0 é a massa inicial administrada, t é o tempo transcorrido em dias e T é a meia-vida do radioisótopo, que é de 8 dias.",
      source: "Comissão Nacional de Energia Nuclear (CNEN), 2023."
    },
    prompt: "Após 32 dias da administração de uma dose inicial de 80 miligramas de iodo-131 em um paciente, a massa residual desse radioisótopo presente no organismo será de",
    options: [
      {
        id: "a",
        text: "5,0 mg",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Número de meias-vidas: k = t / T = 32 / 8 = 4 meias-vidas. Massa residual: M = 80 / (2^4) = 80 / 16 = 5 mg."
      },
      {
        id: "b",
        text: "10,0 mg",
        isCorrect: false,
        distractorRationale: "Erro calculando 3 meias-vidas: 80 / 8 = 10 mg."
      },
      {
        id: "c",
        text: "2,5 mg",
        isCorrect: false,
        distractorRationale: "Erro calculando 5 meias-vidas: 80 / 32 = 2,5 mg."
      },
      {
        id: "d",
        text: "20,0 mg",
        isCorrect: false,
        distractorRationale: "Erro calculando apenas 2 meias-vidas: 80 / 4 = 20 mg."
      },
      {
        id: "e",
        text: "1,25 mg",
        isCorrect: false,
        distractorRationale: "Erro calculando 6 meias-vidas: 80 / 64 = 1,25 mg."
      }
    ],
    detailedExplanation: {
      summary: "A cada meia-vida (8 dias), a massa cai pela metade. Em 32 dias ocorrem 4 meias-vidas consecutivas.",
      stepByStep: [
        "1. Meia-vida T = 8 dias; tempo total decorrido t = 32 dias.",
        "2. Número de meias-vidas: k = 32 / 8 = 4 ciclos de decaimento.",
        "3. Decaimento passo a passo: início = 80 mg ⟹ 8 dias: 40 mg ⟹ 16 dias: 20 mg ⟹ 24 dias: 10 mg ⟹ 32 dias: 5 mg.",
        "4. Pela fórmula exponencial: M(32) = 80 * (1/2)^(32/8) = 80 * (1/2)^4 = 80 / 16 = 5 mg."
      ],
      coreConcept: "Decaimento Radioativo Exponencial: M(t) = M_0 / (2^k), onde k = t / T_meia_vida.",
      trapWarning: "Cuidado: a meia-vida não reduz a massa de forma linear (80 - 4*x); ela divide a massa por 2 a cada ciclo sucessivo."
    },
    tags: ["matematica", "exponencial", "radioatividade", "meia-vida", "medicina-nuclear"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-002",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Escala Richter e Energia Sísmica",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A magnitude M de um terremoto na escala Richter relaciona-se com a energia mecânica liberada E (em Joules) através da equação empírica: M = (2/3) * log10(E / E_0), onde E_0 é uma constante de referência positiva.",
      source: "Serviço Geológico dos Estados Unidos (USGS), 2023."
    },
    prompt: "Se dois terremotos registraram magnitudes M1 = 7 e M2 = 5 nessa escala, a razão entre a energia liberada pelo primeiro sismo e a energia liberada pelo segundo sismo (E1 / E2) é igual a",
    options: [
      {
        id: "a",
        text: "1.000",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. M1 - M2 = 7 - 5 = 2. Da fórmula: M1 - M2 = (2/3) * log(E1 / E2) => 2 = (2/3) * log(E1 / E2) => log(E1 / E2) = 3 => E1 / E2 = 10^3 = 1.000."
      },
      {
        id: "b",
        text: "100",
        isCorrect: false,
        distractorRationale: "Erro esquecendo do fator 2/3 da fórmula e fazendo diretamente 10^(7 - 5) = 10² = 100."
      },
      {
        id: "c",
        text: "10",
        isCorrect: false,
        distractorRationale: "Erro dividindo as magnitudes ou supondo razão linear."
      },
      {
        id: "d",
        text: "10.000",
        isCorrect: false,
        distractorRationale: "Erro calculando 10^4."
      },
      {
        id: "e",
        text: "1,4",
        isCorrect: false,
        distractorRationale: "Erro calculando a razão aritmética simples entre as magnitudes: 7 / 5 = 1,4."
      }
    ],
    detailedExplanation: {
      summary: "A variação de 2 unidades na magnitude sísmica corresponde a uma liberação de energia 1.000 vezes maior.",
      stepByStep: [
        "1. Escrevemos a relação para cada sismo:",
        "   M1 = (2/3) * log(E1 / E0) = 7",
        "   M2 = (2/3) * log(E2 / E0) = 5",
        "2. Subtraindo as duas equações:",
        "   M1 - M2 = (2/3) * [log(E1 / E0) - log(E2 / E0)]",
        "3. Pela propriedade dos logaritmos, a diferença de logaritmos é o logaritmo do quociente:",
        "   7 - 5 = (2/3) * log(E1 / E2)",
        "   2 = (2/3) * log(E1 / E2)",
        "4. Isolando o logaritmo: log10(E1 / E2) = 2 * (3/2) = 3.",
        "5. Pela definição de logaritmo: E1 / E2 = 10³ = 1.000.",
        "6. O terremoto de magnitude 7 liberou exatamente mil vezes mais energia que o de magnitude 5."
      ],
      coreConcept: "Escala Logarítmica: Pequenas variações lineares na escala correspondem a gigantescas variações exponenciais na grandeza física subjacente.",
      trapWarning: "A escala Richter NÃO é linear: um terremoto de magnitude 7 NÃO é '40% mais forte' que um de 5; ele é 1.000 vezes mais energético!"
    },
    tags: ["matematica", "logaritmos", "escala-richter", "geofisica", "propriedades-logaritmicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-003",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Crescimento Bacteriano Exponencial",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em condições ideais de cultivo em laboratório hospitalar, uma colônia de bactérias da espécie Escherichia coli dobra de população a cada 20 minutos por fissão binária. O ensaio iniciou-se às 08:00 com uma população inicial de 500 bactérias.",
      source: "Laboratório de Microbiologia Clínica, 2023."
    },
    prompt: "Mantidas as condições ideais de nutrientes e espaço, a população dessa colônia às 10:00 da mesma manhã atingirá",
    options: [
      {
        id: "a",
        text: "32.000 bactérias",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Intervalo de tempo: de 8h às 10h são 2 horas = 120 minutos. Número de duplicações: n = 120 / 20 = 6 ciclos. População: P = 500 * (2^6) = 500 * 64 = 32.000 bactérias."
      },
      {
        id: "b",
        text: "16.000 bactérias",
        isCorrect: false,
        distractorRationale: "Erro calculando 5 ciclos de duplicação: 500 * 32 = 16.000."
      },
      {
        id: "c",
        text: "64.000 bactérias",
        isCorrect: false,
        distractorRationale: "Erro calculando 7 ciclos de duplicação: 500 * 128 = 64.000."
      },
      {
        id: "d",
        text: "3.000 bactérias",
        isCorrect: false,
        distractorRationale: "Erro multiplicando 500 por 6 linearmente: 500 * 6 = 3.000."
      },
      {
        id: "e",
        text: "6.000 bactérias",
        isCorrect: false,
        distractorRationale: "Erro multiplicando 500 por 12 linearmente."
      }
    ],
    detailedExplanation: {
      summary: "Em 2 horas ocorrem seis intervalos de 20 minutos; a população inicial é multiplicada por 2 elevado a 6.",
      stepByStep: [
        "1. População inicial P_0 = 500.",
        "2. Tempo total: 2 horas = 120 minutos.",
        "3. Tempo de duplicação = 20 minutos.",
        "4. Número de duplicações n = 120 / 20 = 6 duplicações.",
        "5. Fórmula do crescimento: P(n) = P_0 * 2^n.",
        "6. P(6) = 500 * 2^6 = 500 * 64 = 32.000 bactérias."
      ],
      coreConcept: "Crescimento Exponencial em Base 2: P(t) = P_0 * 2^(t / t_duplicacao). Modelo fundamental da microbiologia.",
      trapWarning: "Lembre-se de converter horas em minutos para manter a homogeneidade com o período de duplicação."
    },
    tags: ["matematica", "exponencial", "microbiologia", "crescimento-bacteriano", "potenciacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-004",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Nível de Intensidade Sonora e Decibéis",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A sensibilidade do ouvido humano a ondas de pressão sonora é logarítmica. O nível de intensidade sonora beta, medido em decibéis (dB), é dado por beta = 10 * log10(I / I_0), onde I é a intensidade da onda sonora em W/m² e I_0 = 10^(-12) W/m² é o limiar de audibilidade humana.",
      source: "HALLIDAY, D.; RESNICK, R.; WALKER, J. Fundamentos de Física: Gravitação, Ondas e Termodinâmica. 10ª ed. LTC, 2016."
    },
    prompt: "Em uma marcenaria, o ruído gerado por uma serra circular em operação apresenta intensidade sonora I = 10^(-4) W/m². O nível de intensidade sonora desse ruído, em decibéis (dB), é igual a",
    options: [
      {
        id: "a",
        text: "80 dB",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. I / I_0 = 10^(-4) / 10^(-12) = 10^(-4 - (-12)) = 10^8. beta = 10 * log10(10^8) = 10 * 8 = 80 dB."
      },
      {
        id: "b",
        text: "40 dB",
        isCorrect: false,
        distractorRationale: "Erro calculando 10 * 4 = 40 dB ao subtrair incorretamente os expoentes."
      },
      {
        id: "c",
        text: "120 dB",
        isCorrect: false,
        distractorRationale: "120 dB é o limiar da dor, correspondente a I = 1 W/m²."
      },
      {
        id: "d",
        text: "60 dB",
        isCorrect: false,
        distractorRationale: "Erro aritmético ao calcular a potência de 10."
      },
      {
        id: "e",
        text: "8 dB",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de multiplicar o logaritmo pelo fator 10 da fórmula."
      }
    ],
    detailedExplanation: {
      summary: "Aplica-se a definição de decibéis utilizando propriedades das potências de 10 e logaritmos decimais.",
      stepByStep: [
        "1. Dados: I = 10^(-4) W/m²; I_0 = 10^(-12) W/m².",
        "2. Razão de intensidade: I / I_0 = 10^(-4) / 10^(-12) = 10^(-4 + 12) = 10^8.",
        "3. Fórmula do nível sonoro: beta = 10 * log10(I / I_0).",
        "4. Substituição: beta = 10 * log10(10^8).",
        "5. Como log10(10^8) = 8: beta = 10 * 8 = 80 dB."
      ],
      coreConcept: "Nível Sonoro em Decibéis: beta = 10 * log10(I / I_0). Cada aumento de 10 dB multiplica a intensidade física por 10.",
      trapWarning: "Atenção na divisão de potências de mesma base com expoentes negativos: (-4) - (-12) = -4 + 12 = +8."
    },
    tags: ["matematica", "logaritmos", "acustica", "decibeis", "propriedades-logaritmicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-005",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Química Analítica - Escala de pH e Logaritmos",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O potencial hidrogeniônico (pH) é uma grandeza físico-química que expressa a acidez de uma solução aquosa, definido pela equação: pH = -log10[H+], onde [H+] representa a concentração em mol/L de íons hidrogênio livres.",
      source: "SKOOG, D. A. et al. Fundamentos de Química Analítica. 9ª ed. Cengage Learning, 2014."
    },
    prompt: "Uma amostra de refrigerante gaseificado apresentou concentração de íons H+ igual a 2,0 * 10^(-3) mol/L. Considerando log10(2) = 0,30, o pH dessa amostra é de",
    options: [
      {
        id: "a",
        text: "2,7",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. pH = -log(2 * 10^(-3)) = -[log 2 + log 10^(-3)] = -[0,30 - 3] = -[-2,70] = 2,7."
      },
      {
        id: "b",
        text: "3,3",
        isCorrect: false,
        distractorRationale: "Erro somando o logaritmo em vez de subtrair: 3 + 0,3 = 3,3."
      },
      {
        id: "c",
        text: "3,0",
        isCorrect: false,
        distractorRationale: "Erro ignorando o coeficiente 2 e considerando apenas o expoente 10^(-3)."
      },
      {
        id: "d",
        text: "2,3",
        isCorrect: false,
        distractorRationale: "Erro de cálculo de sinal aritmético."
      },
      {
        id: "e",
        text: "1,7",
        isCorrect: false,
        distractorRationale: "Erro de subtração 2 - 0,3."
      }
    ],
    detailedExplanation: {
      summary: "Aplica-se a propriedade do logaritmo do produto: log(a * b) = log a + log b.",
      stepByStep: [
        "1. Concentração: [H+] = 2,0 * 10^(-3) mol/L.",
        "2. Definição: pH = -log10(2,0 * 10^(-3)).",
        "3. Propriedade do produto: log10(2 * 10^(-3)) = log10(2) + log10(10^(-3)).",
        "4. Como log10(2) = 0,30 e log10(10^(-3)) = -3:",
        "   log10([H+]) = 0,30 - 3 = -2,70.",
        "5. Aplicando o sinal negativo da fórmula: pH = -(-2,70) = 2,7."
      ],
      coreConcept: "Cálculo de pH: Se [H+] = a * 10^(-b), então pH = b - log(a).",
      trapWarning: "Macete prático do ENEM: pH de 'a * 10^(-b)' é sempre b - log(a). Exemplo: 2 * 10^(-3) ⟹ 3 - 0,30 = 2,7."
    },
    tags: ["matematica", "logaritmos", "ph", "quimica-analitica", "propriedades-logaritmicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-006",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Equações Exponenciais e Mudança de Base",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma aplicação financeira de renda fixa, um capital C cresce a uma taxa de juros compostos contínua de acordo com o modelo M(t) = C * (1,05)^t, onde t é o tempo em anos. O investidor deseja saber quantos anos serão necessários para que o montante acumulado dobre de valor (M = 2C). Adote as aproximações: log10(2) = 0,301 e log10(1,05) = 0,021.",
      source: "Matemática Financeira e Modelagem Exponencial, 2023."
    },
    prompt: "O tempo mínimo estimado para que esse capital dobre de valor é de aproximadamente",
    options: [
      {
        id: "a",
        text: "14,3 anos",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 2C = C * (1,05)^t => (1,05)^t = 2. Aplicando logaritmo decimal em ambos os lados: t * log(1,05) = log(2) => t = 0,301 / 0,021 ≈ 14,33 anos."
      },
      {
        id: "b",
        text: "20,0 anos",
        isCorrect: false,
        distractorRationale: "Erro calculando como se fosse juros simples de 5% ao ano (100% / 5% = 20 anos)."
      },
      {
        id: "c",
        text: "10,5 anos",
        isCorrect: false,
        distractorRationale: "Erro dividindo arbitrariamente o montante."
      },
      {
        id: "d",
        text: "12,1 anos",
        isCorrect: false,
        distractorRationale: "Erro de aproximação aritmética na divisão."
      },
      {
        id: "e",
        text: "7,0 anos",
        isCorrect: false,
        distractorRationale: "Erro dividindo 14 por 2."
      }
    ],
    detailedExplanation: {
      summary: "Aplica-se logaritmo para 'derrubar' o expoente t na equação exponencial (1,05)^t = 2.",
      stepByStep: [
        "1. Condição: M = 2 * C ⟹ C * (1,05)^t = 2 * C ⟹ (1,05)^t = 2.",
        "2. Aplicando logaritmo decimal em ambos os membros:",
        "   log10[(1,05)^t] = log10(2).",
        "3. Propriedade da potência do logaritmo: log(a^b) = b * log(a):",
        "   t * log10(1,05) = log10(2).",
        "4. Isolando o tempo t: t = log10(2) / log10(1,05).",
        "5. Substituindo os valores dados: t = 0,301 / 0,021 ≈ 14,33 anos."
      ],
      coreConcept: "Resolução de Equações Exponenciais via Logaritmos: a^t = b ⟹ t = log(b) / log(a).",
      trapWarning: "Lembre-se da 'Regra dos 72' de finanças para estimativa rápida: 72 / taxa = 72 / 5 ≈ 14,4 anos para dobrar o capital."
    },
    tags: ["matematica", "exponencial", "logaritmos", "juros-compostos", "equacao-exponencial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-007",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Propriedades Operatórias - Logaritmo de Quociente e Raiz",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um engenheiro de telecomunicações precisa calcular a atenuação de um sinal de rádio expressa por log10(√(75 / 8)). Ele dispõe apenas dos valores de referência: log10(2) = 0,30 e log10(3) = 0,48.",
      source: "Manual de Propagação Eletromagnética e Antenas, 2022."
    },
    prompt: "Com base exclusivamente nos dados fornecidos, o valor numérico de log10(√(75 / 8)) é igual a",
    options: [
      {
        id: "a",
        text: "0,485",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. log(√(75/8)) = (1/2) * [log 75 - log 8]. Como 75 = 3 * 25 = 3 * 100 / 4: log 75 = log 3 + log 100 - log 4 = 0,48 + 2 - 2(0,30) = 2,48 - 0,60 = 1,88. log 8 = log(2³) = 3 * 0,30 = 0,90. Logo: (1/2) * (1,88 - 0,90) = (1/2) * 0,97 = 0,485."
      },
      {
        id: "b",
        text: "0,970",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de aplicar o expoente 1/2 da raiz quadrada."
      },
      {
        id: "c",
        text: "0,350",
        isCorrect: false,
        distractorRationale: "Erro ao decompor o número 75."
      },
      {
        id: "d",
        text: "0,620",
        isCorrect: false,
        distractorRationale: "Erro de cálculo aritmético na subtração."
      },
      {
        id: "e",
        text: "0,242",
        isCorrect: false,
        distractorRationale: "Erro dividindo por 4 em vez de 2."
      }
    ],
    detailedExplanation: {
      summary: "Decompõe-se o radicando e aplicam-se as propriedades: log(√x) = (1/2)log x e log(a/b) = log a - log b.",
      stepByStep: [
        "1. Propriedade do radical: log(√(75 / 8)) = (1/2) * log(75 / 8) = (1/2) * [log(75) - log(8)].",
        "2. Como log(5) = log(10 / 2) = log(10) - log(2) = 1 - 0,30 = 0,70.",
        "3. Decomposição de 75: 75 = 3 * 5² ⟹ log(75) = log(3) + 2 * log(5) = 0,48 + 2 * (0,70) = 0,48 + 1,40 = 1,88.",
        "4. Decomposição de 8: 8 = 2³ ⟹ log(8) = 3 * log(2) = 3 * 0,30 = 0,90.",
        "5. Subtração: log(75) - log(8) = 1,88 - 0,90 = 0,97.",
        "6. Multiplicação por 1/2 da raiz quadrada: 0,97 / 2 = 0,485."
      ],
      coreConcept: "Técnica do log(5): Sempre que o ENEM der apenas log(2), lembre-se de que log(5) = log(10 / 2) = 1 - log(2)!",
      trapWarning: "Esta é uma das propriedades operatórias mais cobradas no ENEM: log(5) = 1 - log(2) = 1 - 0,30 = 0,70."
    },
    tags: ["matematica", "logaritmos", "propriedades-logaritmicas", "radical", "fatoracao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-008",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Depreciação Exponencial de Bens Patrimoniais",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma máquina industrial adquirida nova por R$ 200.000,00 desvaloriza-se no mercado secundário a uma taxa constante de 10% ao ano de acordo com a função exponencial V(t) = V_0 * (0,9)^t, onde t é o tempo de uso em anos.",
      source: "Manual de Contabilidade e Avaliação Patrimonial, 2023."
    },
    prompt: "O valor contábil estimado dessa máquina após 3 anos completos de operação será de",
    options: [
      {
        id: "a",
        text: "R$ 145.800,00",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. V(3) = 200.000 * (0,9)³ = 200.000 * 0,729 = R$ 145.800,00."
      },
      {
        id: "b",
        text: "R$ 140.000,00",
        isCorrect: false,
        distractorRationale: "Erro calculando depreciação linear de 30% simples: 200.000 * 0,70 = 140.000."
      },
      {
        id: "c",
        text: "R$ 160.000,00",
        isCorrect: false,
        distractorRationale: "Erro calculando apenas 2 anos de depreciação simples: 200.000 * 0,80 = 160.000."
      },
      {
        id: "d",
        text: "R$ 152.000,00",
        isCorrect: false,
        distractorRationale: "Erro de cálculo aritmético na potência 0,9³."
      },
      {
        id: "e",
        text: "R$ 130.000,00",
        isCorrect: false,
        distractorRationale: "Erro subtraindo R$ 70.000,00 arbitrariamente."
      }
    ],
    detailedExplanation: {
      summary: "A depreciação composta de 10% a.a. mantém 90% do valor do ano anterior: V(3) = V_0 * (0,9)³.",
      stepByStep: [
        "1. Fator de desvalorização anual: (1 - 0,10) = 0,90.",
        "2. Ano 1: 200.000 * 0,9 = R$ 180.000,00.",
        "3. Ano 2: 180.000 * 0,9 = R$ 162.000,00.",
        "4. Ano 3: 162.000 * 0,9 = R$ 145.800,00.",
        "5. Diretamente pela potência: (0,9)³ = 0,729 ⟹ 200.000 * 0,729 = R$ 145.800,00."
      ],
      coreConcept: "Depreciação Exponencial: V(t) = V_0 * (1 - i)^t. Jamais confunda com depreciação linear (juros simples).",
      trapWarning: "Cuidado: 10% ao ano por 3 anos NÃO é 30% de desconto! É (0,9)³ = 0,729 (ou seja, desconto real acumulado de 27,1%)."
    },
    tags: ["matematica", "exponencial", "depreciacao", "matematica-financeira", "porcentagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-009",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Gráficos de Funções Exponenciais e Logarítmicas",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "As funções f(x) = a^x e g(x) = log_a(x), com a > 1, são funções inversas uma da outra. Essa relação de bijeção reflete-se geometricamente no plano cartesiano ortogonal.",
      source: "IEZZI, Gelson. Fundamentos de Matemática Elementar: Volume 2 - Logaritmos. Atual, 2013."
    },
    prompt: "No plano cartesiano, os gráficos das curvas representativas de f(x) = 2^x e g(x) = log2(x) são simétricos em relação à",
    options: [
      {
        id: "a",
        text: "reta bissetriz dos quadrantes ímpares (reta y = x).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Toda função bijetora e sua função inversa possuem gráficos simétricos em relação à reta bissetriz do 1º e 3º quadrantes (y = x)."
      },
      {
        id: "b",
        text: "reta vertical do eixo das ordenadas (eixo y).",
        isCorrect: false,
        distractorRationale: "Simetria em relação ao eixo y caracteriza funções pares f(x) = f(-x)."
      },
      {
        id: "c",
        text: "reta horizontal do eixo das abscissas (eixo x).",
        isCorrect: false,
        distractorRationale: "Simetria em relação ao eixo x reflete f(x) e -f(x)."
      },
      {
        id: "d",
        text: "reta bissetriz dos quadrantes pares (reta y = -x).",
        isCorrect: false,
        distractorRationale: "A bissetriz dos quadrantes pares reflete transformações ortogonais reflexivas opostas."
      },
      {
        id: "e",
        text: "origem (0, 0) exclusivamente, como ocorre em funções estritamente ímpares.",
        isCorrect: false,
        distractorRationale: "Simetria em relação à origem define funções ímpares f(-x) = -f(x); a relação entre inversa e original é simetria axial na reta y = x."
      }
    ],
    detailedExplanation: {
      summary: "Gráficos de funções inversas são sempre simétricos em relação à reta identidade y = x.",
      stepByStep: [
        "1. Por definição, se (u, v) pertence a f(x) = 2^x (ex: ponto (1, 2)), então (v, u) pertence à função inversa g(x) = log2(x) (ponto (2, 1)).",
        "2. A transformação que troca as coordenadas (x, y) por (y, x) é uma reflexão geométrica plana.",
        "3. O eixo de simetria dessa reflexão é a reta na qual x = y (bissetriz dos quadrantes ímpares).",
        "4. Portanto, qualquer função exponencial e sua respectiva função logarítmica de mesma base são espelhadas pela reta y = x."
      ],
      coreConcept: "Simetria de Funções Inversas: O gráfico de f^(-1)(x) é obtido refletindo o gráfico de f(x) em torno da reta y = x.",
      trapWarning: "Lembre-se: o domínio da função exponencial é R e sua imagem é R*+; na logarítmica, o domínio é R*+ e a imagem é R (inversão perfeita)."
    },
    tags: ["matematica", "exponencial", "logaritmos", "graficos", "funcao-inversa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-010",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Datação por Carbono-14 e Logaritmo Natural",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A datação arqueológica por carbono-14 (C-14) baseia-se na diminuição da proporção desse isótopo radioativo em tecidos orgânicos mortos, segundo o modelo: N(t) = N_0 * e^(-0,00012 * t), onde t é a idade da amostra em anos e N(t)/N_0 é a fração de C-14 remanescente em relação a um organismo vivo. Arqueólogos encontraram um fragmento de madeira antiga contendo exatamente 50% do carbono-14 original (N/N_0 = 0,5). Considere ln(2) = 0,693.",
      source: "Revista Brasileira de Arqueologia e Paleontologia, 2023."
    },
    prompt: "A idade estimada desse fragmento arqueológico de madeira é de aproximadamente",
    options: [
      {
        id: "a",
        text: "5.775 anos",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. e^(-0,00012 * t) = 0,5 = 1/2 => e^(0,00012 * t) = 2. Aplicando ln em ambos os membros: 0,00012 * t = ln(2) => t = 0,693 / 0,00012 = 5.775 anos (a meia-vida clássica do C-14)."
      },
      {
        id: "b",
        text: "3.500 anos",
        isCorrect: false,
        distractorRationale: "Erro de cálculo aritmético na divisão."
      },
      {
        id: "c",
        text: "8.250 anos",
        isCorrect: false,
        distractorRationale: "Erro multiplicando por 1,5."
      },
      {
        id: "d",
        text: "2.880 anos",
        isCorrect: false,
        distractorRationale: "Erro dividindo por 2 a meia-vida."
      },
      {
        id: "e",
        text: "11.550 anos",
        isCorrect: false,
        distractorRationale: "Erro calculando o tempo para 2 meias-vidas (25% residual)."
      }
    ],
    detailedExplanation: {
      summary: "Isola-se a exponencial e aplica-se o logaritmo natural ln para encontrar o tempo t.",
      stepByStep: [
        "1. Equação dada: N(t) / N_0 = e^(-0,00012 * t) = 0,5 = 1/2.",
        "2. Invertendo ambos os lados: e^(0,00012 * t) = 2.",
        "3. Aplicando logaritmo natural (ln) nos dois lados:",
        "   ln[e^(0,00012 * t)] = ln(2).",
        "4. Como ln(e^x) = x: 0,00012 * t = 0,693.",
        "5. Isolando t: t = 0,693 / 0,00012 = 693 / 0,12 = 5.775 anos."
      ],
      coreConcept: "Datação por Carbono-14: Aplicação clássica interdisciplinar de função exponencial contínua com base de Euler (e) e logaritmo neperiano (ln).",
      trapWarning: "Lembre-se de que a meia-vida do Carbono-14 é de cerca de 5.730 a 5.780 anos; manter esse valor de referência ajuda a validar o cálculo na hora da prova!"
    },
    tags: ["matematica", "exponencial", "carbono-14", "logaritmo-natural", "arqueologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-011",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Equações Logarítmicas e Condição de Existência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na resolução de equações logarítmicas, a verificação da condição de existência é etapa indispensável: o logaritmando deve ser estritamente positivo (x > 0) e a base deve ser positiva e diferente de 1.",
      source: "DANTE, Luiz Roberto. Matemática: Contexto & Aplicações. 3ª ed. Ática, 2016."
    },
    prompt: "O conjunto solução da equação logarítmica log2(x + 3) + log2(x - 1) = 5 no conjunto dos números reais é dado por",
    options: [
      {
        id: "a",
        text: "S = {5}",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pela propriedade da soma: log2[(x + 3)(x - 1)] = 5 => (x + 3)(x - 1) = 2^5 = 32 => x² + 2x - 3 = 32 => x² + 2x - 35 = 0. Raízes: x = 5 ou x = -7. Pela condição de existência: x + 3 > 0 e x - 1 > 0 => x > 1. Logo, x = -7 é descartado, restando apenas x = 5."
      },
      {
        id: "b",
        text: "S = {-7, 5}",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de testar a condição de existência (x = -7 torna o logaritmando negativo, o que não existe nos reais)."
      },
      {
        id: "c",
        text: "S = {7}",
        isCorrect: false,
        distractorRationale: "Erro de sinal na fórmula de Bhaskara."
      },
      {
        id: "d",
        text: "S = {4}",
        isCorrect: false,
        distractorRationale: "Erro aritmético ao igualar 2^5 a 16 em vez de 32."
      },
      {
        id: "e",
        text: "S = vazio",
        isCorrect: false,
        distractorRationale: "A equação possui solução real válida (x = 5)."
      }
    ],
    detailedExplanation: {
      summary: "Aplica-se a propriedade do logaritmo do produto, resolve-se a equação quadrática e valida-se a condição de existência.",
      stepByStep: [
        "1. Condições de existência: x + 3 > 0 (x > -3) e x - 1 > 0 (x > 1). Interseção: x > 1.",
        "2. Propriedade da soma de logaritmos: log2[(x + 3) * (x - 1)] = 5.",
        "3. Pela definição: (x + 3) * (x - 1) = 2^5 = 32.",
        "4. Expandindo: x² + 2x - 3 = 32 ⟹ x² + 2x - 35 = 0.",
        "5. Fatorando: (x + 7)(x - 5) = 0 ⟹ x = -7 ou x = 5.",
        "6. Verificação com a condição de existência (x > 1):",
        "   - x = -7 NÃO serve (geraria log de número negativo).",
        "   - x = 5 SERVE (5 > 1).",
        "7. Conjunto solução: S = {5}."
      ],
      coreConcept: "Condição de Existência do Logaritmo: log_b(a) só existe se a > 0, b > 0 e b ≠ 1. Raízes que violem a condição devem ser sumariamente descartadas.",
      trapWarning: "Esta é a pegadinha número 1 do ENEM em logaritmos: esquecer a condição de existência e marcar a opção com a raiz negativa espúria."
    },
    tags: ["matematica", "logaritmos", "equacao-logaritmica", "condicao-de-existencia", "bhaskara"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-012",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Lei do Resfriamento de Newton",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A temperatura T (em °C) de um líquido que resfria em uma sala mantida à temperatura constante de 20 °C varia com o tempo t (em minutos) segundo a Lei de Resfriamento de Newton: T(t) = 20 + 60 * (0,8)^t.",
      source: "Termodinâmica Aplicada e Fenômenos de Transporte, 2022."
    },
    prompt: "A temperatura inicial do líquido no instante t = 0 e a temperatura atingida após 2 minutos de resfriamento são, respectivamente,",
    options: [
      {
        id: "a",
        text: "80 °C e 58,4 °C",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em t = 0: T(0) = 20 + 60 * (0,8)⁰ = 20 + 60 * 1 = 80 °C. Em t = 2: T(2) = 20 + 60 * (0,8)² = 20 + 60 * 0,64 = 20 + 38,4 = 58,4 °C."
      },
      {
        id: "b",
        text: "60 °C e 48,0 °C",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de somar a temperatura ambiente de 20 °C."
      },
      {
        id: "c",
        text: "80 °C e 68,0 °C",
        isCorrect: false,
        distractorRationale: "Erro calculando 60 * 0,8 em vez de (0,8)²."
      },
      {
        id: "d",
        text: "100 °C e 70,0 °C",
        isCorrect: false,
        distractorRationale: "Valores arbitrários sem aplicação da função."
      },
      {
        id: "e",
        text: "80 °C e 40,0 °C",
        isCorrect: false,
        distractorRationale: "Erro aritmético na multiplicação 60 * 0,64."
      }
    ],
    detailedExplanation: {
      summary: "Substitui-se t = 0 e t = 2 na função exponencial de temperatura.",
      stepByStep: [
        "1. Função: T(t) = 20 + 60 * (0,8)^t.",
        "2. Para t = 0 min: T(0) = 20 + 60 * (0,8)⁰ = 20 + 60 * 1 = 80 °C (temperatura inicial).",
        "3. Para t = 2 min: T(2) = 20 + 60 * (0,8)² = 20 + 60 * 0,64.",
        "4. 60 * 0,64 = 38,4.",
        "5. T(2) = 20 + 38,4 = 58,4 °C."
      ],
      coreConcept: "Lei do Resfriamento de Newton: T(t) = T_ambiente + (T_inicial - T_ambiente) * e^(-kt). A assíntota horizontal é a temperatura ambiente (conforme t tende ao infinito, T tende a 20 °C).",
      trapWarning: "Lembre-se sempre de que qualquer número elevado a zero é igual a 1 (0,8⁰ = 1)."
    },
    tags: ["matematica", "exponencial", "resfriamento-newton", "termodinamica", "funcao-afim-exponencial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-013",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Propriedades dos Logaritmos - Mudança de Base",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em cálculos de processamento de sinais digitais, é frequente a necessidade de converter logaritmos da base 2 para a base decimal (base 10) ou natural através da fórmula de mudança de base: log_b(a) = log_c(a) / log_c(b). Considere as aproximações: log10(2) = 0,30 e log10(3) = 0,48.",
      source: "Processamento Digital de Sinais e Teoria da Informação, 2023."
    },
    prompt: "Com base exclusivamente nos dados, o valor numérico aproximado de log2(3) é igual a",
    options: [
      {
        id: "a",
        text: "1,60",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Mudança para a base 10: log2(3) = log10(3) / log10(2) = 0,48 / 0,30 = 48 / 30 = 8 / 5 = 1,60."
      },
      {
        id: "b",
        text: "0,62",
        isCorrect: false,
        distractorRationale: "Erro invertendo a fração: 0,30 / 0,48 = 0,625 (calculando log3(2))."
      },
      {
        id: "c",
        text: "1,44",
        isCorrect: false,
        distractorRationale: "Erro multiplicando 0,48 por 3."
      },
      {
        id: "d",
        text: "0,18",
        isCorrect: false,
        distractorRationale: "Erro subtraindo os logaritmos: 0,48 - 0,30 = 0,18."
      },
      {
        id: "e",
        text: "2,00",
        isCorrect: false,
        distractorRationale: "Aproximação grosseira infundada."
      }
    ],
    detailedExplanation: {
      summary: "Aplica-se a fórmula da mudança de base: log_b(a) = log10(a) / log10(b).",
      stepByStep: [
        "1. Queremos calcular log2(3).",
        "2. Temos os valores na base 10: log10(3) = 0,48 e log10(2) = 0,30.",
        "3. Pela fórmula de mudança de base: log2(3) = log10(3) / log10(2).",
        "4. Cálculo: 0,48 / 0,30 = 48 / 30.",
        "5. Simplificando por 6: 48/6 = 8; 30/6 = 5 ⟹ 8 / 5 = 1,60."
      ],
      coreConcept: "Mudança de Base: log_b(a) = log_c(a) / log_c(b). Permite calcular logaritmos em qualquer base a partir de tabelas decimais.",
      trapWarning: "Cuidado para não inverter: o logaritmando (3) vai para o numerador; a base (2) vai para o denominador!"
    },
    tags: ["matematica", "logaritmos", "mudanca-de-base", "propriedades-logaritmicas", "algebra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-014",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Domínio e Imagem da Função Logarítmica",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para que uma função logarítmica f(x) = log(g(x)) esteja bem definida no conjunto dos números reais, a expressão contida no logaritmando g(x) deve ser estritamente maior que zero.",
      source: "Matemática para o Ensino Médio, Volume Único, 2021."
    },
    prompt: "O domínio real da função f(x) = log3(4x - 12) é o conjunto",
    options: [
      {
        id: "a",
        text: "D = {x pertencente a R | x > 3}",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Condição de existência: 4x - 12 > 0 => 4x > 12 => x > 3."
      },
      {
        id: "b",
        text: "D = {x pertencente a R | x >= 3}",
        isCorrect: false,
        distractorRationale: "O logaritmando NÃO pode ser zero; log(0) não existe nos reais, logo a desigualdade é estrita (>)."
      },
      {
        id: "c",
        text: "D = {x pertencente a R | x < 3}",
        isCorrect: false,
        distractorRationale: "Para x < 3, o logaritmando seria negativo, o que é impossível nos reais."
      },
      {
        id: "d",
        text: "D = {x pertencente a R | x > 0}",
        isCorrect: false,
        distractorRationale: "Erro ignorando os termos lineares internos do parêntese."
      },
      {
        id: "e",
        text: "D = R (todos os números reais)",
        isCorrect: false,
        distractorRationale: "A função logarítmica possui restrição severa de domínio."
      }
    ],
    detailedExplanation: {
      summary: "O logaritmando deve ser estritamente positivo: 4x - 12 > 0.",
      stepByStep: [
        "1. Função dada: f(x) = log3(4x - 12).",
        "2. Condição de existência do logaritmo: logaritmando > 0.",
        "3. 4x - 12 > 0.",
        "4. 4x > 12.",
        "5. x > 12 / 4 ⟹ x > 3.",
        "6. Portanto, Domínio = {x pertencente a R | x > 3} ou ]3, +infinito[."
      ],
      coreConcept: "Domínio de Funções Logarítmicas: O argumento interno do logaritmo deve ser estritamente maior que zero (desigualdade estrita).",
      trapWarning: "Cuidado: raiz quadrada admite zero (>= 0), mas logaritmo NÃO admite zero (> 0)!"
    },
    tags: ["matematica", "logaritmos", "dominio-de-funcao", "inequacao", "condicao-de-existencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-015",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Juros Compostos e Tempo com Logaritmos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um empreendedor aplicou R$ 10.000,00 em um fundo de investimento que rende 10% de juros compostos ao ano. Ele planeja resgatar os recursos assim que o saldo atingir R$ 16.105,10. Considere a aproximação: (1,10)⁴ = 1,4641 e (1,10)⁵ = 1,61051.",
      source: "Manual de Gestão Financeira para Pequenas Empresas, SEBRAE, 2023."
    },
    prompt: "O tempo que essa aplicação deve permanecer investida para atingir a meta estipulada é de",
    options: [
      {
        id: "a",
        text: "5 anos",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. M = C * (1 + i)^t => 16.105,10 = 10.000 * (1,10)^t => (1,10)^t = 1,61051. Como dado que (1,10)⁵ = 1,61051, temos t = 5 anos."
      },
      {
        id: "b",
        text: "4 anos",
        isCorrect: false,
        distractorRationale: "Em 4 anos o montante seria de R$ 14.641,00."
      },
      {
        id: "c",
        text: "6 anos",
        isCorrect: false,
        distractorRationale: "Em 6 anos o montante ultrapassaria R$ 17.700,00."
      },
      {
        id: "d",
        text: "3 anos",
        isCorrect: false,
        distractorRationale: "Em 3 anos o montante seria de R$ 13.310,00."
      },
      {
        id: "e",
        text: "8 anos",
        isCorrect: false,
        distractorRationale: "Estimativa sem cálculo da potência."
      }
    ],
    detailedExplanation: {
      summary: "Aplica-se a fórmula fundamental dos juros compostos M = C*(1 + i)^t e compara-se com a potência dada.",
      stepByStep: [
        "1. Dados: C = 10.000; M = 16.105,10; i = 0,10 ao ano.",
        "2. Fórmula: M = C * (1 + i)^t.",
        "3. 16.105,10 = 10.000 * (1,10)^t.",
        "4. (1,10)^t = 16.105,10 / 10.000 = 1,61051.",
        "5. Como o enunciado forneceu (1,10)⁵ = 1,61051, concluímos que t = 5 anos."
      ],
      coreConcept: "Juros Compostos como Função Exponencial: M(t) = C * (1 + i)^t. Crescimento sobre o montante acumulado anterior.",
      trapWarning: "Em juros simples de 10% a.a., 5 anos gerariam apenas 50% (R$ 15.000,00). Os juros compostos rendem mais (R$ 16.105,10)."
    },
    tags: ["matematica", "exponencial", "juros-compostos", "matematica-financeira", "potenciacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-016",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Propriedades Operatórias - Logaritmo de Potência",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a propriedade operatória dos logaritmos que estabelece que o logaritmo de uma potência é o produto do expoente pelo logaritmo da base: log_b(a^k) = k * log_b(a). Sabe-se que log10(2) = 0,301.",
      source: "Fundamentos de Matemática Elementar, 2020."
    },
    prompt: "O número de algarismos que compõem o valor da potência 2^50 quando desenvolvida no sistema de numeração decimal é igual a",
    options: [
      {
        id: "a",
        text: "16 algarismos",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. log10(2^50) = 50 * log10(2) = 50 * 0,301 = 15,05. Como a característica do logaritmo decimal é 15, o número de dígitos é 15 + 1 = 16 algarismos (pois 10^15 <= 2^50 < 10^16)."
      },
      {
        id: "b",
        text: "15 algarismos",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de somar 1 à parte inteira do logaritmo (10^1 tem 2 dígitos, 10² tem 3 dígitos; logo 10^(15,05) tem 16 dígitos)."
      },
      {
        id: "c",
        text: "25 algarismos",
        isCorrect: false,
        distractorRationale: "Erro dividindo 50 por 2."
      },
      {
        id: "d",
        text: "50 algarismos",
        isCorrect: false,
        distractorRationale: "Confusão entre o expoente da potência e a quantidade de dígitos."
      },
      {
        id: "e",
        text: "17 algarismos",
        isCorrect: false,
        distractorRationale: "Erro arredondando 15,05 para cima e somando mais 1."
      }
    ],
    detailedExplanation: {
      summary: "A quantidade de dígitos de um número N na base 10 é dada por piso(log10 N) + 1.",
      stepByStep: [
        "1. Seja N = 2^50.",
        "2. Aplicando logaritmo decimal: log10(N) = log10(2^50) = 50 * log10(2).",
        "3. Como log10(2) = 0,301: log10(N) = 50 * 0,301 = 15,05.",
        "4. Isso significa que N = 10^(15,05) = 10^15 * 10^(0,05).",
        "5. Como 10^15 é o menor número com 16 algarismos (o dígito 1 seguido de 15 zeros) e 10^16 tem 17 algarismos, qualquer número entre 10^15 e 10^16 possui exatamente 16 algarismos.",
        "6. Regra geral: Número de algarismos = parte inteira de log10(N) + 1 = 15 + 1 = 16 algarismos."
      ],
      coreConcept: "Número de Dígitos via Logaritmo: Número de algarismos de N = [log10 N] + 1. Propriedade clássica de olimpíadas e provas do ENEM.",
      trapWarning: "Lembre-se: 10¹ = 10 (2 dígitos); 10² = 100 (3 dígitos); 10^k tem (k + 1) dígitos!"
    },
    tags: ["matematica", "logaritmos", "numero-de-algarismos", "potenciacao", "propriedades-logaritmicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-017",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Função Exponencial com Base entre 0 e 1 (Decrescente)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma função exponencial da forma f(x) = a^x, o comportamento de crescimento ou decrescimento da curva depende estritamente do valor da base 'a'.",
      source: "Matemática Essencial, Ensino Médio, 2022."
    },
    prompt: "A função exponencial f(x) = (0,75)^x é estritamente decrescente em todo o seu domínio real porque",
    options: [
      {
        id: "a",
        text: "sua base é um número real positivo compreendido estritamente entre 0 e 1 (0 < a < 1).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para qualquer função exponencial f(x) = a^x: se a > 1 ela é crescente; se 0 < a < 1 ela é estritamente decrescente."
      },
      {
        id: "b",
        text: "o expoente x só pode assumir valores negativos em conjuntos numéricos reais.",
        isCorrect: false,
        distractorRationale: "O expoente x pertence a todos os números reais (R), positivos, negativos ou nulos."
      },
      {
        id: "c",
        text: "sua curva intercepta o eixo vertical no ponto de coordenadas (0, 0).",
        isCorrect: false,
        distractorRationale: "Toda função f(x) = a^x intercepta o eixo y no ponto (0, 1), pois a⁰ = 1."
      },
      {
        id: "d",
        text: "o logaritmo de sua base é um número inteiro positivo par.",
        isCorrect: false,
        distractorRationale: "Como a base é menor que 1, seu logaritmo decimal é negativo (log 0,75 < 0)."
      },
      {
        id: "e",
        text: "sua imagem é composta exclusivamente por números reais negativos.",
        isCorrect: false,
        distractorRationale: "A imagem de uma função exponencial elementar é sempre o conjunto dos reais estritamente positivos (y > 0)."
      }
    ],
    detailedExplanation: {
      summary: "Quando 0 < a < 1, à medida que o expoente x aumenta, o valor da potência a^x diminui, tornando a função decrescente.",
      stepByStep: [
        "1. Base a = 0,75 = 3/4.",
        "2. Testando valores: x = 0 ⟹ f(0) = 1; x = 1 ⟹ f(1) = 0,75; x = 2 ⟹ f(2) = 0,5625; x = 3 ⟹ f(3) = 0,4218.",
        "3. Conforme x cresce, f(x) diminui progressivamente em direção a zero.",
        "4. Regra geral: se 0 < a < 1, a função f(x) = a^x é estritamente decrescente.",
        "5. Se a > 1, a função f(x) = a^x é estritamente crescente."
      ],
      coreConcept: "Monotonia da Função Exponencial: Base a > 1 ⟹ Crescente. Base 0 < a < 1 ⟹ Decrescente. Imagem sempre positiva (y > 0).",
      trapWarning: "Cuidado: a base da função exponencial NUNCA pode ser negativa nem igual a 1."
    },
    tags: ["matematica", "exponencial", "funcao-decrescente", "monotonia", "teoria-das-funcoes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-018",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Logaritmo de Produto e Inversa",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um experimento de física de partículas, a perda de fluxo de radiação beta através de blindagens de chumbo de espessura x (em centímetros) satisfaz a relação: log10(F(x)) = 4 - 0,25 * x.",
      source: "Física das Radiações e Proteção Radiológica, 2022."
    },
    prompt: "A espessura de chumbo necessária para que o fluxo de radiação caia para F(x) = 100 partículas/cm² é de",
    options: [
      {
        id: "a",
        text: "8 cm",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. F(x) = 100 => log10(100) = log10(10²) = 2. Da equação: 2 = 4 - 0,25 * x => 0,25 * x = 4 - 2 = 2 => x = 2 / 0,25 = 8 cm."
      },
      {
        id: "b",
        text: "4 cm",
        isCorrect: false,
        distractorRationale: "Erro calculando x = 1 / 0,25 = 4 cm."
      },
      {
        id: "c",
        text: "16 cm",
        isCorrect: false,
        distractorRationale: "Erro multiplicando 4 por 4 sem subtrair."
      },
      {
        id: "d",
        text: "12 cm",
        isCorrect: false,
        distractorRationale: "Erro aritmético na resolução da equação do 1º grau."
      },
      {
        id: "e",
        text: "2 cm",
        isCorrect: false,
        distractorRationale: "Erro tomando diretamente o valor de log(100) = 2 como a espessura x."
      }
    ],
    detailedExplanation: {
      summary: "Calcula-se o logaritmo do fluxo desejado e resolve-se a equação linear resultante.",
      stepByStep: [
        "1. Queremos fluxo F(x) = 100.",
        "2. Como log10(100) = log10(10²) = 2.",
        "3. Substitui-se na equação: 2 = 4 - 0,25 * x.",
        "4. Isolando o termo com x: 0,25 * x = 4 - 2 = 2.",
        "5. x = 2 / 0,25 = 2 / (1/4) = 2 * 4 = 8 cm."
      ],
      coreConcept: "Atenuação de Radiação: Equações logarítmico-lineares transformam decaimentos exponenciais em retas fáceis de resolver.",
      trapWarning: "Lembre-se de que dividir por 0,25 equivale exatamente a multiplicar por 4."
    },
    tags: ["matematica", "logaritmos", "blindagem", "equacao-linear", "fisica-das-radiacoes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-019",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Propriedades Operatórias - Logaritmo de Raiz Enésima",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Considere que log10(k) = 1,2. Um pesquisador necessita calcular o valor do logaritmo da raiz cúbica de k ao quadrado, isto é, log10(∛(k²)).",
      source: "Manual de Bioestatística e Modelos Alométricos, 2023."
    },
    prompt: "O valor exato de log10(∛(k²)) é igual a",
    options: [
      {
        id: "a",
        text: "0,8",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. ∛(k²) = k^(2/3). Pela propriedade do expoente: log(k^(2/3)) = (2/3) * log(k) = (2/3) * 1,2 = 2 * 0,4 = 0,8."
      },
      {
        id: "b",
        text: "1,8",
        isCorrect: false,
        distractorRationale: "Erro somando 1,2 + 2/3."
      },
      {
        id: "c",
        text: "0,4",
        isCorrect: false,
        distractorRationale: "Erro calculando apenas (1/3) * 1,2 = 0,4 sem elevar ao quadrado."
      },
      {
        id: "d",
        text: "2,4",
        isCorrect: false,
        distractorRationale: "Erro multiplicando por 2 em vez de 2/3."
      },
      {
        id: "e",
        text: "0,6",
        isCorrect: false,
        distractorRationale: "Erro dividindo por 2."
      }
    ],
    detailedExplanation: {
      summary: "Transforma-se o radical em expoente fracionário e aplica-se a regra do tombo do logaritmo.",
      stepByStep: [
        "1. Conversão de radical em potência: ∛(k²) = k^(2/3).",
        "2. Aplicando a propriedade do expoente: log10[k^(2/3)] = (2/3) * log10(k).",
        "3. Substituição do dado log10(k) = 1,2: (2/3) * 1,2.",
        "4. 1,2 / 3 = 0,4 ⟹ 2 * 0,4 = 0,8."
      ],
      coreConcept: "Regra do Tombo com Expoente Fracionário: log(n_raiz(k^m)) = (m / n) * log(k).",
      trapWarning: "Lembre-se da regra: 'quem está na sombra vai pro sol, quem está no sol vai pra sombra' (m vira numerador, n vira denominador)."
    },
    tags: ["matematica", "logaritmos", "radiciacao", "expoente-fracionario", "propriedades-logaritmicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-020",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Curva Logística de Crescimento Populacional Limitado",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um lago isolado com capacidade de suporte ambiental limitada, a população de uma espécie de peixe introduzida é modelada pela função logística: P(t) = 10.000 / (1 + 9 * e^(-0,5 * t)), onde t é o tempo em meses e e é a base dos logaritmos naturais.",
      source: "Ecologia Teórica e Modelagem Matemática de Populações, 2023."
    },
    prompt: "A população inicial de peixes introduzida no lago (t = 0) e a capacidade máxima de suporte do lago (quando o tempo tende ao infinito) são, respectivamente,",
    options: [
      {
        id: "a",
        text: "1.000 peixes e 10.000 peixes",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em t = 0: P(0) = 10.000 / (1 + 9 * e⁰) = 10.000 / (1 + 9 * 1) = 10.000 / 10 = 1.000 peixes. Quando t tende a infinito, e^(-0,5*t) tende a zero, logo P tende a 10.000 / (1 + 0) = 10.000 peixes."
      },
      {
        id: "b",
        text: "500 peixes e 10.000 peixes",
        isCorrect: false,
        distractorRationale: "Erro dividindo por 20 em vez de 10."
      },
      {
        id: "c",
        text: "1.000 peixes e 9.000 peixes",
        isCorrect: false,
        distractorRationale: "Erro confundindo o coeficiente 9 do denominador com a capacidade de suporte."
      },
      {
        id: "d",
        text: "10.000 peixes e infinito",
        isCorrect: false,
        distractorRationale: "A curva logística atinge um teto assintótico finito (capacidade K), não cresce infinitamente."
      },
      {
        id: "e",
        text: "0 peixes e 10.000 peixes",
        isCorrect: false,
        distractorRationale: "No instante t = 0 foram introduzidos 1.000 indivíduos fundadores."
      }
    ],
    detailedExplanation: {
      summary: "Substitui-se t = 0 para o valor inicial e analisa-se o limite assintótico quando t cresce indefinidamente.",
      stepByStep: [
        "1. Para a população inicial (t = 0):",
        "   P(0) = 10.000 / [1 + 9 * e⁰].",
        "   Como e⁰ = 1, o denominador é 1 + 9 = 10.",
        "   P(0) = 10.000 / 10 = 1.000 peixes.",
        "2. Para a capacidade máxima de suporte (t tendendo a infinito):",
        "   Conforme t cresce muito, e^(-0,5 * t) = 1 / e^(0,5 * t) tende a zero.",
        "   O denominador tende a: 1 + 9 * 0 = 1.",
        "   P_max = 10.000 / 1 = 10.000 peixes.",
        "3. Portanto: 1.000 e 10.000 peixes."
      ],
      coreConcept: "Curva Logística (Curva em S / Sigmoide): Modela o crescimento exponencial inicial seguido de desaceleração até a estabilização na capacidade de suporte K do ecossistema.",
      trapWarning: "Diferencie a curva puramente exponencial (curva em J, irrestrita) da logística (curva em S, com resistência ambiental)."
    },
    tags: ["matematica", "exponencial", "curva-logistica", "ecologia", "limites-assintoticos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-021",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Logaritmo Decimal e Potências de Dez",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O valor de log10(0,0001) aparece com frequência em cálculos de ordens de grandeza física e química.",
      source: "Manual de Notação Científica e Algarismos Significativos, 2021."
    },
    prompt: "O valor numérico de log10(0,0001) é exatamente igual a",
    options: [
      {
        id: "a",
        text: "-4",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 0,0001 = 10^(-4). Pela definição de logaritmo decimal: log10(10^(-4)) = -4."
      },
      {
        id: "b",
        text: "4",
        isCorrect: false,
        distractorRationale: "Erro esquecendo que números entre 0 e 1 possuem logaritmo negativo."
      },
      {
        id: "c",
        text: "-3",
        isCorrect: false,
        distractorRationale: "Erro contando os zeros em vez das casas decimais: 0,001 tem log = -3, enquanto 0,0001 tem 4 casas decimais."
      },
      {
        id: "d",
        text: "0,0001",
        isCorrect: false,
        distractorRationale: "Confusão entre o valor do número e seu logaritmo."
      },
      {
        id: "e",
        text: "-5",
        isCorrect: false,
        distractorRationale: "Erro na contagem de casas decimais."
      }
    ],
    detailedExplanation: {
      summary: "Escreve-se o decimal em notação de potência de base 10 e aplica-se a definição direta de logaritmo.",
      stepByStep: [
        "1. Escrever o número em notação científica: 0,0001 = 1 / 10.000 = 1 / 10⁴ = 10^(-4).",
        "2. Pela definição: log10(10^(-4)) é o expoente que devemos dar à base 10 para obter 10^(-4).",
        "3. Esse expoente é exatamente -4.",
        "4. Portanto, log10(0,0001) = -4."
      ],
      coreConcept: "Logaritmo de Decimais Menores que 1: Sempre negativo! log10(0,1) = -1; log10(0,01) = -2; log10(0,001) = -3; log10(0,0001) = -4.",
      trapWarning: "Lembre-se: o logaritmo de qualquer número compreendido entre 0 e 1 é ESTRITAMENTE NEGATIVO."
    },
    tags: ["matematica", "logaritmos", "potencias-de-dez", "notacao-cientifica", "aritmetica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-022",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Inequações Exponenciais e Inversão de Sinal",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Ao resolver inequações exponenciais, uma regra fundamental de álgebra estabelece: se a base for maior que 1 (a > 1), o sentido da desigualdade se mantém; se a base estiver entre 0 e 1 (0 < a < 1), o sentido da desigualdade deve ser OBRIGATORIAMENTE INVERTIDO.",
      source: "IEZZI, Gelson. Fundamentos de Matemática Elementar: Volume 2. Atual, 2013."
    },
    prompt: "O conjunto solução da inequação exponencial (1/3)^(2x - 4) >= 9 no conjunto dos números reais é",
    options: [
      {
        id: "a",
        text: "S = {x pertencente a R | x <= 1}",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 1/3 = 3^(-1) e 9 = 3². Reescrevendo na base 3: 3^[-(2x - 4)] >= 3² => 3^(-2x + 4) >= 3². Como a base 3 é maior que 1: -2x + 4 >= 2 => -2x >= -2 => x <= 1 (ao dividir por -2 inverte a desigualdade)."
      },
      {
        id: "b",
        text: "S = {x pertencente a R | x >= 1}",
        isCorrect: false,
        distractorRationale: "Erro esquecendo de inverter o sinal da desigualdade ao multiplicar/dividir por número negativo."
      },
      {
        id: "c",
        text: "S = {x pertencente a R | x <= -1}",
        isCorrect: false,
        distractorRationale: "Erro de sinal na resolução algébrica."
      },
      {
        id: "d",
        text: "S = {x pertencente a R | x >= 3}",
        isCorrect: false,
        distractorRationale: "Erro de cálculo aritmético."
      },
      {
        id: "e",
        text: "S = {x pertencente a R | x <= 2}",
        isCorrect: false,
        distractorRationale: "Erro simplificando a equação."
      }
    ],
    detailedExplanation: {
      summary: "Igualam-se as bases e atenta-se para a inversão do sinal da desigualdade.",
      stepByStep: [
        "1. Inequação: (1/3)^(2x - 4) >= 9.",
        "2. Como 1/3 = 3^(-1) e 9 = 3²:",
        "   [3^(-1)]^(2x - 4) >= 3².",
        "   3^(-2x + 4) >= 3².",
        "3. Como a base 3 é maior que 1, mantemos a desigualdade nos expoentes:",
        "   -2x + 4 >= 2.",
        "4. -2x >= 2 - 4 ⟹ -2x >= -2.",
        "5. Dividindo ambos os membros por -2 (inverte o sentido da desigualdade!):",
        "   x <= (-2) / (-2) ⟹ x <= 1.",
        "6. Conjunto solução: S = {x pertencente a R | x <= 1}."
      ],
      coreConcept: "Inequações Exponenciais: Cuidado duplo com a inversão da desigualdade: 1º quando a base está entre 0 e 1; 2º quando multiplicamos ou dividimos por número negativo.",
      trapWarning: "Nunca esqueça: multiplicar ou dividir uma inequação por um número negativo SEMPRE inverte o sinal da desigualdade (>= vira <=)!"
    },
    tags: ["matematica", "exponencial", "inequacao-exponencial", "inversao-de-sinal", "algebra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-023",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Soma e Diferença de Logaritmos - Simplificação Algébrica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A compressão de arquivos em um algoritmo computacional calcula a entropia da informação mediante a expressão: E = log2(12) + log2(8) - log2(3).",
      source: "Teoria da Informação e Codificação, 2023."
    },
    prompt: "O valor exato da entropia E calculada por esse algoritmo é igual a",
    options: [
      {
        id: "a",
        text: "5",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. E = log2[(12 * 8) / 3] = log2[96 / 3] = log2(32). Como 32 = 2^5, temos log2(32) = 5."
      },
      {
        id: "b",
        text: "6",
        isCorrect: false,
        distractorRationale: "Erro calculando log2(64) = 6."
      },
      {
        id: "c",
        text: "4",
        isCorrect: false,
        distractorRationale: "Erro calculando log2(16) = 4."
      },
      {
        id: "d",
        text: "8",
        isCorrect: false,
        distractorRationale: "Erro somando diretamente os números internos sem propriedades de logaritmo."
      },
      {
        id: "e",
        text: "32",
        isCorrect: false,
        distractorRationale: "32 é o logaritmando final resultante, e não o valor do logaritmo na base 2."
      }
    ],
    detailedExplanation: {
      summary: "Combina-se a soma e subtração em um único logaritmo: log(a) + log(b) - log(c) = log(a*b / c).",
      stepByStep: [
        "1. Expressão: E = log2(12) + log2(8) - log2(3).",
        "2. Aplicando a propriedade da soma e da subtração simultaneamente:",
        "   E = log2[(12 * 8) / 3].",
        "3. Simplificando a fração antes de multiplicar: 12 / 3 = 4.",
        "4. E = log2(4 * 8) = log2(32).",
        "5. Como 32 = 2⁵: log2(2⁵) = 5."
      ],
      coreConcept: "Propriedades Operatórias Combinadas: log(a) + log(b) - log(c) = log((a * b) / c).",
      trapWarning: "Sempre simplifique a fração antes de fazer multiplicações grandes: 12/3 = 4, e 4 * 8 = 32 instantaneamente."
    },
    tags: ["matematica", "logaritmos", "propriedades-operatórias", "simplificacao", "teoria-da-informacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-024",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Função Exponencial Transladada",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O número N de clientes que acessam um aplicativo de delivery após x dias de veiculação de uma campanha publicitária é modelado pela função exponencial: N(x) = 500 + 1.500 * (1 - 2^(-0,2 * x)).",
      source: "Métricas de Marketing Digital e Conversão, 2024."
    },
    prompt: "Após 10 dias de veiculação da campanha (x = 10), o número total de acessos N registrados será de",
    options: [
      {
        id: "a",
        text: "1.625 acessos",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em x = 10: 2^(-0,2 * 10) = 2^(-2) = 1/4 = 0,25. N(10) = 500 + 1.500 * (1 - 0,25) = 500 + 1.500 * 0,75 = 500 + 1.125 = 1.625 acessos."
      },
      {
        id: "b",
        text: "2.000 acessos",
        isCorrect: false,
        distractorRationale: "2.000 é o teto máximo teórico atingido quando x tende ao infinito (500 + 1.500 * 1 = 2.000)."
      },
      {
        id: "c",
        text: "1.250 acessos",
        isCorrect: false,
        distractorRationale: "Erro calculando 500 + 1.500 * 0,5 = 1.250."
      },
      {
        id: "d",
        text: "1.875 acessos",
        isCorrect: false,
        distractorRationale: "Erro calculando com expoente -3."
      },
      {
        id: "e",
        text: "500 acessos",
        isCorrect: false,
        distractorRationale: "500 é o número de acessos no instante inicial x = 0."
      }
    ],
    detailedExplanation: {
      summary: "Calcula-se a potência negativa 2^(-2) = 0,25 e substitui-se na expressão modeladora.",
      stepByStep: [
        "1. Para x = 10 dias:",
        "   Expoente: -0,2 * 10 = -2.",
        "2. Cálculo da potência: 2^(-2) = 1 / (2²) = 1 / 4 = 0,25.",
        "3. Parêntese: 1 - 2^(-2) = 1 - 0,25 = 0,75.",
        "4. Multiplicação: 1.500 * 0,75 = 1.125.",
        "5. Soma com o termo constante: N(10) = 500 + 1.125 = 1.625 acessos."
      ],
      coreConcept: "Função Exponencial com Saturação Assintótica: Modela processos reais de adoção e alcance de campanhas de marketing.",
      trapWarning: "Lembre-se: 2^(-2) não é -4 nem -2; é 1/4 = 0,25."
    },
    tags: ["matematica", "exponencial", "marketing", "potencia-negativa", "modelagem-matematica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-LOG-025",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções Exponenciais e Logaritmos",
    subtopic: "Equação com Mudança de Variável (Incógnita Auxiliar)",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em equações exponenciais que apresentam somas de potências de mesma base em diferentes múltiplos, utiliza-se a técnica da mudança de variável: faz-se a substituição y = a^x para recair em uma equação polinomial resolúvel por fatoração ou Bhaskara.",
      source: "Manual de Álgebra Avançada para o Ensino Médio, 2022."
    },
    prompt: "O produto de todas as raízes reais da equação exponencial 4^x - 10 * 2^x + 16 = 0 é igual a",
    options: [
      {
        id: "a",
        text: "3",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Fazendo y = 2^x: 4^x = (2^x)² = y². A equação vira: y² - 10y + 16 = 0. Raízes para y: y = 2 ou y = 8. Voltando à incógnita x: 2^x = 2 => x1 = 1; 2^x = 8 => 2^x = 2³ => x2 = 3. O produto das raízes x1 * x2 = 1 * 3 = 3."
      },
      {
        id: "b",
        text: "16",
        isCorrect: false,
        distractorRationale: "16 é o produto das raízes da variável auxiliar y (y1 * y2 = 16), e não das raízes originais x."
      },
      {
        id: "c",
        text: "4",
        isCorrect: false,
        distractorRationale: "4 é a soma das raízes x1 + x2 = 1 + 3 = 4, mas o comando solicitou o produto!"
      },
      {
        id: "d",
        text: "8",
        isCorrect: false,
        distractorRationale: "8 é uma das raízes da variável auxiliar y."
      },
      {
        id: "e",
        text: "2",
        isCorrect: false,
        distractorRationale: "2 é uma das raízes da variável auxiliar y."
      }
    ],
    detailedExplanation: {
      summary: "Substitui-se 2^x por y, encontram-se as raízes em y, revertem-se para x e calcula-se o produto das raízes.",
      stepByStep: [
        "1. Notamos que 4^x = (2²)x = (2^x)².",
        "2. Seja y = 2^x (com y > 0 obrigatoriamente).",
        "3. A equação transforma-se em: y² - 10y + 16 = 0.",
        "4. Fatorando ou por soma e produto (S = 10, P = 16): y1 = 2 e y2 = 8.",
        "5. Revertendo para a incógnita x:",
        "   - Caso 1: 2^x = 2 ⟹ x1 = 1.",
        "   - Caso 2: 2^x = 8 = 2³ ⟹ x2 = 3.",
        "6. As raízes reais da equação exponencial são x1 = 1 e x2 = 3.",
        "7. O produto solicitado é: x1 * x2 = 1 * 3 = 3."
      ],
      coreConcept: "Mudança de Variável Exponencial: y = a^x. Cuidado fundamental: o produto das raízes em y (y1 * y2) NÃO é o produto das raízes em x (x1 * x2)!",
      trapWarning: "Atenção máxima: o produto de y (16) corresponderia a 2^x1 * 2^x2 = 2^(x1+x2) = 2^4 = 16 (soma das raízes em x é 4). O comando pediu o produto em x (1 * 3 = 3)!"
    },
    tags: ["matematica", "exponencial", "equacao-exponencial", "mudanca-de-variavel", "bhaskara"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
