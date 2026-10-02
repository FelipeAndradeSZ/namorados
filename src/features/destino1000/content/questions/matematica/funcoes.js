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
    context: {
      supportText: "Uma cooperativa de entregas expressas calcula o custo de um frete por meio de uma taxa fixa de saída de R$ 5,00, acrescida de R$ 2,00 por quilômetro rodado no trajeto de entrega.",
      source: "Original"
    },
    prompt: "Qual a expressão algébrica que representa o valor total V, em reais, pago por uma entrega com trajeto de x quilômetros, e qual será o valor cobrado para uma entrega com percurso de 15 km?",
    options: [
      { id: "a", text: "V(x) = 5x + 2; R$ 77,00", isCorrect: false, distractorRationale: "Inverteu a taxa fixa com o valor por km." },
      { id: "b", text: "V(x) = 2x + 5; R$ 35,00", isCorrect: true, distractorRationale: null },
      { id: "c", text: "V(x) = 7x; R$ 105,00", isCorrect: false, distractorRationale: "Somou os valores como se ambos dependessem da distância." },
      { id: "d", text: "V(x) = 2x; R$ 30,00", isCorrect: false, distractorRationale: "Ignorou a taxa fixa de saída." },
      { id: "e", text: "V(x) = 5x; R$ 75,00", isCorrect: false, distractorRationale: "Ignorou a taxa variável e multiplicou a distância pela fixa." }
    ],
    detailedExplanation: {
      summary: "A função afim é composta por uma parte fixa e uma variável.",
      stepByStep: [
        "Identifique a parte fixa: R$ 5,00 (taxa fixa de saída).",
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
      { id: "a", text: "N(t) = 1000 · 2^(t/3); 16.000 bactérias.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "N(t) = 1000 · 2^t; 4.096.000 bactérias.", isCorrect: false, distractorRationale: "Considerou que dobrava a cada hora." },
      { id: "c", text: "N(t) = 1000 · (t/3)²; 16.000 bactérias.", isCorrect: false, distractorRationale: "Usou função polinomial em vez de exponencial." },
      { id: "d", text: "N(t) = 1000 + 2^(t/3); 1.016 bactérias.", isCorrect: false, distractorRationale: "Somou o fator de crescimento invés de multiplicar." },
      { id: "e", text: "N(t) = 1000 · 3^(t/2); 729.000 bactérias.", isCorrect: false, distractorRationale: "Confundiu base (dobrar) com período (3 horas)." }
    ],
    detailedExplanation: {
      summary: "Crescimento populacional que dobra em um intervalo de tempo fixo é modelado por função exponencial.",
      stepByStep: [
        "A base é 2 (dobra).",
        "O expoente deve ser t dividido pelo tempo necessário para dobrar: t/3.",
        "Equação: N(t) = 1000 · 2^(t/3).",
        "Para t = 12: N(12) = 1000 · 2^(12/3) = 1000 · 2^4 = 1000 · 16 = 16.000."
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
    subtopic: "Gráficos da Função Afim",
    difficulty: 1,
    estimatedTimeSeconds: 90,
    questionType: "graph",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O gráfico de uma função afim f(x) = ax + b passa pelos pontos (0, 3) e (2, 7) no plano cartesiano.",
      source: "Original"
    },
    prompt: "Quais são os valores dos coeficientes angular (a) e linear (b), respectivamente?",
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
    subtopic: "Maximização com Função Quadrática",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um horticultor dispõe de 100 metros de tela de arame para cercar uma horta retangular aproveitando o muro de alvenaria já existente em sua propriedade (ou seja, ele usará a tela em apenas 3 dos 4 lados do retângulo).",
      source: "Original"
    },
    prompt: "Quais devem ser as dimensões da horta retangular para que a área cultivável seja máxima?",
    options: [
      { id: "a", text: "25 m de largura e 50 m de comprimento.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "25 m e 25 m.", isCorrect: false, distractorRationale: "Assumiu que o melhor formato seria um quadrado para os 3 lados, gastando 75m." },
      { id: "c", text: "33,3 m e 33,3 m.", isCorrect: false, distractorRationale: "Dividiu a cerca igualmente nos 3 lados." },
      { id: "d", text: "20 m e 60 m.", isCorrect: false, distractorRationale: "Errou a modelagem da área." },
      { id: "e", text: "50 m e 50 m.", isCorrect: false, distractorRationale: "Ignorou que precisava de dois lados paralelos, somando 150m." }
    ],
    detailedExplanation: {
      summary: "Problema de otimização de área com perímetro fixado em 3 lados usando função quadrática.",
      stepByStep: [
        "Seja x a medida dos dois lados perpendiculares ao muro e y o lado paralelo. Então 2x + y = 100, logo y = 100 - 2x.",
        "A área é A(x) = x · y = x(100 - 2x) = -2x² + 100x.",
        "O valor de x para área máxima é o vértice da parábola: x_v = -b/(2a) = -100/(2·(-2)) = -100/-4 = 25 metros.",
        "Substituindo para encontrar y: y = 100 - 2(25) = 50 metros.",
        "As dimensões ótimas são 25m e 50m."
      ],
      coreConcept: "Maximização de Área com Parábolas",
      trapWarning: "Lembre-se de modelar as variáveis corretamente; um dos lados não gasta cerca porque já tem o muro."
    },
    commonTraps: ["assumir quadrado sem analisar a restrição do muro"],
    tags: ["funcao quadratica", "otimizacao", "maximo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-006",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções",
    subtopic: "Função Logarítmica: Escala Richter",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A magnitude M de um terremoto na Escala Richter é calculada pela fórmula logarítmica M = (2/3) · log₁₀(E / E₀), onde E é a energia liberada pelo sismo (em Joules) e E₀ = 10⁴'⁴ Joules é uma constante de referência. Dois terremotos foram registrados: o terremoto A teve magnitude M_A = 7 e o terremoto B teve magnitude M_B = 5.",
      source: "ENEM Modelagem Logarítmica e Geofísica"
    },
    prompt: "A razão entre a energia liberada pelo terremoto A e a energia liberada pelo terremoto B (E_A / E_B) é igual a:",
    options: [
      { id: "a", text: "1.000 (ou seja, o terremoto A liberou mil vezes mais energia).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1,4 (apenas a razão 7/5).", isCorrect: false, distractorRationale: "Dividiu linearmente as magnitudes (7/5 = 1,4), ignorando a escala logarítmica exponencial." },
      { id: "c", text: "100 (ou seja, 10²).", isCorrect: false, distractorRationale: "Esqueceu do fator 2/3 no expoente (a diferença de 2 magnitudes multiplica o log por 3/2, dando expoente 3)." },
      { id: "d", text: "2 (diferença aritmética 7 - 5).", isCorrect: false, distractorRationale: "Subtraiu diretamente as magnitudes." },
      { id: "e", text: "10.000", isCorrect: false, distractorRationale: "Elevou 10 à quarta potência indevidamente." }
    ],
    detailedExplanation: {
      summary: "A escala Richter é logarítmica com base decimal multiplicada pelo coeficiente 2/3. Uma variação de 2 unidades na magnitude equivale a uma variação de 10³ = 1.000 vezes na energia liberada.",
      stepByStep: [
        "M_A - M_B = 7 - 5 = 2.",
        "Da fórmula: M_A - M_B = (2/3) · [log(E_A/E₀) - log(E_B/E₀)] = (2/3) · log(E_A / E_B).",
        "Substituindo a diferença: 2 = (2/3) · log₁₀(E_A / E_B).",
        "Multiplicando por 3/2 de ambos os lados: 2 · (3/2) = log₁₀(E_A / E_B) → 3 = log₁₀(E_A / E_B).",
        "Pela definição de logaritmo: E_A / E_B = 10³ = 1.000."
      ],
      coreConcept: "Função Logarítmica e Razão de Energias na Escala Richter",
      trapWarning: "No ENEM, cada aumento de 1 grau na magnitude Richter não significa 'um pouco mais forte'; significa multiplicar a energia por aproximadamente 31,6 vezes (10¹'⁵), e 2 graus multiplicam por exatamente 1.000 vezes!"
    },
    commonTraps: [
      "Dividir as magnitudes como se a relação fosse linear (7/5 = 1,4)",
      "Esquecer do fator 2/3 da equação do enunciado"
    ],
    tags: ["logaritmo", "escala-richter", "funcao-logaritmica", "terremotos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-007",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções",
    subtopic: "Função Logarítmica: Escala de pH",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O potencial hidrogeniônico (pH) de uma solução aquosa mede a concentração de íons hidrogênio [H⁺] em mol/L através da função logarítmica pH = -log₁₀[H⁺]. Uma amostra de vinagre possui pH = 3, enquanto o sangue humano saudável possui pH neutro/levemente básico de aproximadamente pH = 7.",
      source: "ENEM Química e Matemática Interdisciplinar"
    },
    prompt: "A concentração de íons [H⁺] na amostra de vinagre é quantas vezes maior do que a concentração no sangue humano?",
    options: [
      { id: "a", text: "10.000 vezes maior.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "4 vezes maior.", isCorrect: false, distractorRationale: "Apenas subtraiu os valores de pH (7 - 3 = 4), esquecendo que cada unidade de pH varia na base 10." },
      { id: "c", text: "40 vezes maior.", isCorrect: false, distractorRationale: "Multiplicou a diferença por 10." },
      { id: "d", text: "1.000 vezes maior.", isCorrect: false, distractorRationale: "Errou a contagem de potências de dez (10⁴ = 10.000, não 1.000)." },
      { id: "e", text: "100.000 vezes maior.", isCorrect: false, distractorRationale: "Adicionou um zero extra no expoente." }
    ],
    detailedExplanation: {
      summary: "Por ser uma escala logarítmica de base 10 invertida, a diferença de 4 unidades de pH corresponde a uma razão de 10⁴ = 10.000 vezes na concentração de íons H⁺.",
      stepByStep: [
        "Vinagre: pH = 3 → -log[H⁺]_vinagre = 3 → [H⁺]_vinagre = 10⁻³ mol/L.",
        "Sangue: pH = 7 → -log[H⁺]_sangue = 7 → [H⁺]_sangue = 10⁻⁷ mol/L.",
        "Razão entre as concentrações: [H⁺]_vinagre / [H⁺]_sangue = 10⁻³ / 10⁻⁷ = 10⁻³⁺⁷ = 10⁴.",
        "10⁴ = 10.000 vezes."
      ],
      coreConcept: "Função Logarítmica Negativa e a Escala de pH",
      trapWarning: "Quanto MENOR o pH, MAIOR é a concentração de íons H⁺ (solução mais ácida)."
    },
    commonTraps: [
      "Subtrair os valores de pH sem converter para potências de dez",
      "Achar que pH maior significa maior acidez"
    ],
    tags: ["ph", "logaritmo", "acidez", "quimica-matematica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-008",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções",
    subtopic: "Função Composta e Inversa",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma linha de montagem automatizada, a máquina 1 produz peças a uma taxa modelada por g(x) = 2x + 1, onde x é o número de horas de operação. A máquina 2 recebe essas peças semi-acabadas e as empacota a um custo operacional modelado por f(y) = 3y - 5, onde y é o número de peças processadas.",
      source: "ENEM Álgebra e Processos Industriais"
    },
    prompt: "A lei da função composta f(g(x)), que expressa o custo operacional total em função direta do número de horas x de operação, é dada por:",
    options: [
      { id: "a", text: "f(g(x)) = 6x - 2", isCorrect: true, distractorRationale: null },
      { id: "b", text: "f(g(x)) = 6x - 5", isCorrect: false, distractorRationale: "Esqueceu de multiplicar o termo +1 pelo 3 ao substituir g(x) em f(y)." },
      { id: "c", text: "f(g(x)) = 5x - 4", isCorrect: false, distractorRationale: "Somou as funções em vez de compô-las." },
      { id: "d", text: "f(g(x)) = 6x² + x - 5", isCorrect: false, distractorRationale: "Multiplicou f por g em vez de fazer a composição de funções." },
      { id: "e", text: "f(g(x)) = 6x - 10", isCorrect: false, distractorRationale: "Errou na distributiva dos coeficientes." }
    ],
    detailedExplanation: {
      summary: "Na composição de funções f(g(x)), substitui-se a expressão inteira de g(x) no lugar da variável independente da função f.",
      stepByStep: [
        "Função externa: f(y) = 3y - 5.",
        "Função interna: y = g(x) = 2x + 1.",
        "Substituição: f(g(x)) = 3 · (2x + 1) - 5.",
        "Distributiva: 3 · 2x + 3 · 1 - 5 = 6x + 3 - 5.",
        "Simplificação: f(g(x)) = 6x - 2."
      ],
      coreConcept: "Composição de Funções Afins e Aplicação de Modelos Consecutivos",
      trapWarning: "Cuidado: f(g(x)) NÃO é o produto f(x) · g(x), e sim a aplicação sucessiva onde a saída de g vira a entrada de f."
    },
    commonTraps: [
      "Multiplicar as duas funções em vez de compor",
      "Errar a distributiva ao esquecer de multiplicar a constante de g pelo coeficiente de f"
    ],
    tags: ["funcao-composta", "algebra", "funcao-afim"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-009",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções",
    subtopic: "Lucro e Ponto de Equilíbrio (Break-Even Point)",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma fábrica de camisetas personalizadas possui um custo fixo mensal de R$ 3.000,00 mais um custo variável de produção de R$ 10,00 por unidade fabricada. A receita mensal obtida com a venda das camisetas é modelada por R(x) = 50x - 0,1x², onde x é a quantidade de camisetas vendidas no mês.",
      source: "ENEM Economia e Otimização"
    },
    prompt: "Qual a quantidade mínima de camisetas x que a fábrica deve produzir e vender mensalmente para não operar em prejuízo (ponto de equilíbrio onde Lucro = 0)?",
    options: [
      { id: "a", text: "100 camisetas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "200 camisetas.", isCorrect: false, distractorRationale: "Esse é o ponto do vértice onde o lucro é máximo (x_v = -40 / (2 · -0,1) = 200), não a quantidade mínima de equilíbrio." },
      { id: "c", text: "80 camisetas.", isCorrect: false, distractorRationale: "Para x = 80: Custo = 3800 e Receita = 3360, resultando em prejuízo de R$ 440." },
      { id: "d", text: "50 camisetas.", isCorrect: false, distractorRationale: "Para x = 50 a empresa ainda opera no vermelho com prejuízo de R$ 1.250." },
      { id: "e", text: "300 camisetas.", isCorrect: false, distractorRationale: "x = 300 também zera o lucro (segunda raiz da parábola), mas o comando exigiu a quantidade MÍNIMA viável." }
    ],
    detailedExplanation: {
      summary: "O Lucro é a Receita menos o Custo Total: L(x) = R(x) - C(x). Para Lucro = 0, iguala-se a expressão a zero e determina-se a menor raiz real positiva.",
      stepByStep: [
        "1. Custo Total: C(x) = 3000 + 10x.",
        "2. Receita Total: R(x) = 50x - 0,1x².",
        "3. Função Lucro: L(x) = R(x) - C(x) = (50x - 0,1x²) - (3000 + 10x) = -0,1x² + 40x - 3000.",
        "4. Condição de equilíbrio L(x) = 0: -0,1x² + 40x - 3000 = 0.",
        "5. Multiplicando toda a equação por -10: x² - 400x + 30.000 = 0.",
        "6. Fatorando por soma e produto: dois números com soma 400 e produto 30.000 são 100 e 300: (x - 100)(x - 300) = 0.",
        "7. As raízes são x = 100 e x = 300. A quantidade mínima para não ter prejuízo é x = 100 camisetas."
      ],
      coreConcept: "Ponto de Equilíbrio Econômico e Raízes da Função Quadrática",
      trapWarning: "Cuidado: A pergunta pede a quantidade MÍNIMA para sair do prejuízo (x = 100), e não a quantidade para LUCRO MÁXIMO (x = 200)."
    },
    commonTraps: [
      "Calcular o vértice (lucro máximo) quando o enunciado pediu o ponto de equilíbrio (lucro nulo)",
      "Marcar a segunda raiz (x = 300) em vez da menor (x = 100)"
    ],
    tags: ["funcao-quadratica", "ponto-de-equilibrio", "lucro", "receita-custo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-010",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções",
    subtopic: "Decaimento Radioativo e Meia-Vida",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A datação de fósseis arqueológicos por Carbono-14 baseia-se na lei de decaimento radioativo exponencial M(t) = M₀ · (1/2)^(t / T), onde M₀ é a massa inicial do isótopo no organismo vivo, t é o tempo decorrido desde a morte (em anos) e T = 5.730 anos é a meia-vida do Carbono-14.",
      source: "ENEM Arqueologia e Decaimento Exponencial"
    },
    prompt: "Um fóssil vegetal recém-descoberto apresenta apenas 12,5% da quantidade original de Carbono-14 encontrada em plantas vivas da mesma espécie. A idade aproximada desse fóssil vegetal é de:",
    options: [
      { id: "a", text: "17.190 anos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "11.460 anos.", isCorrect: false, distractorRationale: "Esse seria o tempo para 25% (duas meias-vidas: 2 · 5.730 = 11.460 anos)." },
      { id: "c", text: "5.730 anos.", isCorrect: false, distractorRationale: "Esse é o tempo para 50% (uma única meia-vida)." },
      { id: "d", text: "22.920 anos.", isCorrect: false, distractorRationale: "Esse seria o tempo para 6,25% (quatro meias-vidas)." },
      { id: "e", text: "45.840 anos.", isCorrect: false, distractorRationale: "Multiplicou por 8 em vez de calcular 3 meias-vidas." }
    ],
    detailedExplanation: {
      summary: "A cada período de meia-vida (T), a quantidade de material radioativo cai pela metade (50%). Para atingir 12,5% da quantidade original, decorreram exatamente 3 meias-vidas consecutivas.",
      stepByStep: [
        "Início (t = 0): 100%.",
        "Após 1 meia-vida (5.730 anos): 50% = 1/2.",
        "Após 2 meias-vidas (11.460 anos): 25% = 1/4.",
        "Após 3 meias-vidas (17.190 anos): 12,5% = 1/8.",
        "Como 12,5% = 1/8 = (1/2)³, o número de meias-vidas decorridas é 3.",
        "Idade do fóssil = 3 · 5.730 = 17.190 anos."
      ],
      coreConcept: "Função Exponencial de Decaimento Radioativo e Tempo de Meia-Vida",
      trapWarning: "Lembre-se: 12,5% corresponde a três meias-vidas (100% -> 50% -> 25% -> 12,5%)."
    },
    commonTraps: [
      "Dividir 100% por 12,5% e achar que são 8 meias-vidas em vez de 3",
      "Esquecer que a redução é exponencial (divisão sucessiva por 2)"
    ],
    tags: ["meia-vida", "carbono-14", "funcao-exponencial", "decaimento-radioativo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-011",
    area: "matematica",
    competence: 5,
    skill: 19,
    topic: "Funções",
    subtopic: "Função Afim e Ponto de Indiferença Tarifário",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para deslocamentos a trabalho, uma profissional avalia duas operadoras de transporte por aplicativo. A operadora Alfa cobra uma taxa de saída de R$ 6,00 mais R$ 2,50 por quilômetro rodado. A operadora Beta não cobra taxa de saída, mas cobra R$ 3,25 por quilômetro rodado.",
      source: "ENEM Modelagem Linear Cotidiana"
    },
    prompt: "A partir de qual distância percorrida a operadora Alfa torna-se financeiramente mais vantajosa do que a operadora Beta?",
    options: [
      { id: "a", text: "Acima de 8,0 km.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Acima de 6,0 km.", isCorrect: false, distractorRationale: "Em 6,0 km: Alfa custa 6 + 15 = 21, enquanto Beta custa 19,50 (Beta ainda é mais barata)." },
      { id: "c", text: "Acima de 10,0 km.", isCorrect: false, distractorRationale: "Em 8,0 km já ocorre o empate; acima de 8,0 km Alfa já é mais vantajosa." },
      { id: "d", text: "Acima de 4,5 km.", isCorrect: false, distractorRationale: "Errou na divisão 6,00 / 0,75." },
      { id: "e", text: "Acima de 12,0 km.", isCorrect: false, distractorRationale: "Estimativa arbitrária sem resolver a inequação linear." }
    ],
    detailedExplanation: {
      summary: "Montam-se as leis das funções afins: C_Alfa(x) = 6 + 2,50x e C_Beta(x) = 3,25x. A operadora Alfa é mais barata quando C_Alfa(x) < C_Beta(x), o que ocorre para x > 8 km.",
      stepByStep: [
        "1. Função custo Alfa: C_A(x) = 6 + 2,5x.",
        "2. Função custo Beta: C_B(x) = 3,25x.",
        "3. Ponto de indiferença (onde os custos empatam): 6 + 2,5x = 3,25x.",
        "4. 3,25x - 2,5x = 6  =>  0,75x = 6.",
        "5. x = 6 / 0,75 = 6 / (3/4) = 6 · 4 / 3 = 8,0 km.",
        "6. Como a taxa por km de Alfa (2,50) é menor que a de Beta (3,25), para qualquer corrida superior a 8,0 km, Alfa é mais barata."
      ],
      coreConcept: "Ponto de Interseção de Retas e Inequação do 1º Grau",
      trapWarning: "Para distâncias curtas (abaixo de 8 km), Beta é mais vantajosa porque não tem bandeirada. Acima de 8 km, a menor taxa por km de Alfa compensa a bandeirada."
    },
    commonTraps: [
      "Errar a divisão decimal de 6 por 0,75",
      "Confundir qual operadora é mais barata antes e depois do ponto de interseção"
    ],
    tags: ["funcao-afim", "ponto-indiferenca", "graficos-de-retas", "economia-cotidiana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-012",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções",
    subtopic: "Vértice da Parábola e Otimização de Área",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um horticultor dispõe de exatamente 60 metros de tela de arame para cercar uma horta retangular. Ele pretende aproveitar o muro reto de alvenaria já existente em sua propriedade como um dos lados do cercado, de forma que a tela será utilizada apenas nos outros três lados (dois lados de largura x e um lado de comprimento y paralelo ao muro).",
      source: "ENEM Problemas de Otimização e Máximos"
    },
    prompt: "Para que a horta tenha a maior área possível, qual deve ser a medida da largura x perpendicular ao muro e a área máxima obtida, respectivamente?",
    options: [
      { id: "a", text: "x = 15 metros e Área = 450 m².", isCorrect: true, distractorRationale: null },
      { id: "b", text: "x = 20 metros e Área = 400 m².", isCorrect: false, distractorRationale: "Para x = 20: o comprimento seria y = 60 - 40 = 20, dando área de 400 m² (inferior a 450 m²)." },
      { id: "c", text: "x = 10 metros e Área = 400 m².", isCorrect: false, distractorRationale: "Para x = 10: y = 40, dando 400 m²." },
      { id: "d", text: "x = 30 metros e Área = 900 m².", isCorrect: false, distractorRationale: "Se x = 30, os dois lados de largura consumiriam 2 · 30 = 60 m, deixando y = 0 m (área zero)." },
      { id: "e", text: "x = 15 metros e Área = 225 m².", isCorrect: false, distractorRationale: "Calculou a área como 15 · 15, esquecendo que o lado paralelo ao muro mede y = 30 m." }
    ],
    detailedExplanation: {
      summary: "Comprimento da tela: 2x + y = 60 -> y = 60 - 2x. Área: A(x) = x · y = x(60 - 2x) = -2x² + 60x. A largura ótima é o x do vértice: x_v = -b / (2a) = -60 / (2 · -2) = 15 m. A área máxima é A(15) = 15 · 30 = 450 m².",
      stepByStep: [
        "1. Perímetro de tela utilizado: 2x + y = 60 metros. Isolando y: y = 60 - 2x.",
        "2. Função da Área: A(x) = x · y = x · (60 - 2x) = -2x² + 60x.",
        "3. Como o coeficiente a = -2 < 0, a parábola tem concavidade voltada para baixo e possui valor MÁXIMO no vértice.",
        "4. Abscissa do vértice (largura x ótima): x_v = -b / (2a) = -60 / (2 · (-2)) = -60 / -4 = 15 metros.",
        "5. Comprimento correspondente: y = 60 - 2(15) = 60 - 30 = 30 metros.",
        "6. Área máxima: A_max = 15 m · 30 m = 450 m²."
      ],
      coreConcept: "Máximo da Função Quadrática e Vértice da Parábola",
      trapWarning: "Cuidado: A tela é usada em apenas TRÊS lados (2x + y = 60), e não nos quatro lados normais do retângulo!"
    },
    commonTraps: [
      "Montar 2x + 2y = 60 esquecendo que o muro elimina um dos lados",
      "Calcular apenas o x_v e esquecer de calcular a área total pedida"
    ],
    tags: ["funcao-quadratica", "vertice-parabola", "otimizacao", "maximos-e-minimos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-013",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções",
    subtopic: "Crescimento Exponencial Bacteriano",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma placa de Petri sob condições ideais de nutrientes e temperatura, uma cultura bacteriana inicia-se com 500 bactérias. A população duplica de tamanho a cada 30 minutos, segundo a função N(t) = 500 · 2^(2t), onde t é o tempo medido em horas.",
      source: "Modelagem Biomatemática"
    },
    prompt: "Considerando log₁₀(2) ≈ 0,30, após quantas horas a cultura alcançará a marca de 1.000.000 (um milhão) de bactérias?",
    options: [
      { id: "a", text: "Aproximadamente 5,5 horas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Aproximadamente 11,0 horas.", isCorrect: false, distractorRationale: "Esqueceu que a cada hora ocorrem dois ciclos de duplicação (expoente 2t)." },
      { id: "c", text: "Aproximadamente 3,3 horas.", isCorrect: false, distractorRationale: "Errou a divisão logarítmica ou esqueceu do fator 500 inicial." },
      { id: "d", text: "Aproximadamente 8,0 horas.", isCorrect: false, distractorRationale: "Estimativa sem aplicar logaritmos decimais." },
      { id: "e", text: "Aproximadamente 2,0 horas.", isCorrect: false, distractorRationale: "Em 2 horas há 500 · 2⁴ = 8.000 bactérias, muito longe de 1 milhão." }
    ],
    detailedExplanation: {
      summary: "Iguala-se N(t) = 1.000.000: 500 · 2^(2t) = 1.000.000 -> 2^(2t) = 2.000. Aplica-se logaritmo decimal: 2t · log(2) = log(2.000) = log(2 · 10³) = log(2) + 3. Logo, 2t · 0,30 = 0,30 + 3 = 3,30 -> 2t = 11 -> t = 5,5 horas.",
      stepByStep: [
        "1. Equação: 500 · 2^(2t) = 1.000.000.",
        "2. Dividir por 500: 2^(2t) = 1.000.000 / 500 = 2.000.",
        "3. Aplicar logaritmo de base 10 em ambos os membros: log(2^(2t)) = log(2.000).",
        "4. Propriedade do expoente: 2t · log(2) = log(2 · 10³) = log(2) + log(10³).",
        "5. Como log(10³) = 3 e log(2) ≈ 0,30: 2t · 0,30 = 0,30 + 3 = 3,30.",
        "6. Isolar 2t: 2t = 3,30 / 0,30 = 11.",
        "7. Isolar t: t = 11 / 2 = 5,5 horas."
      ],
      coreConcept: "Equação Exponencial com Resolução por Logaritmos Decimais",
      trapWarning: "Lembre-se: log(2.000) = log(2 · 10³) = log(2) + 3 = 0,30 + 3 = 3,30. Nunca tente memorizar log(2000) sem decompor em potências de 10!"
    },
    commonTraps: [
      "Esquecer de dividir 1.000.000 por 500 antes de aplicar logaritmo",
      "Errar o passo 2t = 11 esquecendo de dividir por 2 para achar t em horas"
    ],
    tags: ["funcao-exponencial", "logaritmos", "crescimento-bacteriano", "equacao-exponencial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-014",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções",
    subtopic: "Escala Richter e Razão de Energias Sísmicas",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A magnitude M de um abalo sísmico na escala Richter relaciona-se com a energia E liberada pelas ondas sísmicas (em Joules) através da fórmula: M = (2/3) · log₁₀(E / E₀), onde E₀ = 10^4,8 Joules é uma constante de referência padrão.",
      source: "Sismologia e Escalas Logarítmicas"
    },
    prompt: "Comparando um grande terremoto de magnitude M₁ = 7,0 com um terremoto moderado de magnitude M₂ = 5,0, a razão entre as energias liberadas (E₁ / E₂) é igual a:",
    options: [
      { id: "a", text: "1.000", isCorrect: true, distractorRationale: null },
      { id: "b", text: "100", isCorrect: false, distractorRationale: "Supôs que cada ponto na escala equivale a 10 vezes em energia (confundindo com amplitude das ondas) sem considerar o fator 2/3." },
      { id: "c", text: "1,4", isCorrect: false, distractorRationale: "Fez a divisão simples das magnitudes: 7,0 / 5,0 = 1,4, ignorando completamente a natureza logarítmica da escala." },
      { id: "d", text: "20", isCorrect: false, distractorRationale: "Multiplicou a diferença de 2 unidades por 10." },
      { id: "e", text: "10.000", isCorrect: false, distractorRationale: "Calculou 10⁴ em vez de 10³." }
    ],
    detailedExplanation: {
      summary: "Diferença de magnitude: M₁ - M₂ = 7,0 - 5,0 = 2,0. Da fórmula: 2,0 = (2/3) · log₁₀(E₁ / E₂) -> log₁₀(E₁ / E₂) = 2,0 · (3/2) = 3 -> E₁ / E₂ = 10³ = 1.000.",
      stepByStep: [
        "1. Escrever para cada terremoto: M₁ = (2/3) · log(E₁/E₀) e M₂ = (2/3) · log(E₂/E₀).",
        "2. Subtrair as duas equações: M₁ - M₂ = (2/3) · [log(E₁/E₀) - log(E₂/E₀)].",
        "3. Propriedade do quociente de logaritmos: log(A) - log(B) = log(A/B) -> log(E₁/E₂).",
        "4. M₁ - M₂ = 7,0 - 5,0 = 2,0.",
        "5. 2,0 = (2/3) · log₁₀(E₁ / E₂).",
        "6. Multiplicando ambos os lados por 3/2: log₁₀(E₁ / E₂) = 2,0 · 3 / 2 = 3.",
        "7. Pela definição de logaritmo: E₁ / E₂ = 10³ = 1.000 vezes!"
      ],
      coreConcept: "Propriedades dos Logaritmos e Escala Richter",
      trapWarning: "No ENEM: A cada 2 unidades a mais na magnitude Richter, a energia liberada aumenta exatamente 1.000 vezes (10³). Cada 1 unidade na escala equivale a cerca de 31,6 vezes (10^(1,5))."
    },
    commonTraps: [
      "Dividir 7 por 5 achando que a escala é linear",
      "Achar que a razão de energias é 10² = 100 por causa da diferença de 2 pontos (isso vale para a amplitude do sismógrafo, não para a energia liberada)"
    ],
    tags: ["logaritmos", "escala-richter", "terremotos", "razao-logaritmica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-015",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções",
    subtopic: "Lançamento de Projétil e Altura Máxima",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um foguete de garrafa PET de um projeto escolar de ciências é lançado verticalmente para cima a partir do solo. Sua altura h (em metros) em função do tempo t decorrido após o lançamento (em segundos) é modelada pela função quadrática h(t) = -5t² + 30t.",
      source: "ENEM Cinemática e Parábolas"
    },
    prompt: "Qual é a altura máxima alcançada pelo foguete e em qual instante de tempo ele atinge essa altitude máxima, respectivamente?",
    options: [
      { id: "a", text: "h_max = 45 metros no instante t = 3 segundos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "h_max = 30 metros no instante t = 3 segundos.", isCorrect: false, distractorRationale: "Confundiu a altura máxima com o coeficiente b da equação (30)." },
      { id: "c", text: "h_max = 90 metros no instante t = 6 segundos.", isCorrect: false, distractorRationale: "t = 6 segundos é o tempo total de voo até o retorno ao solo (h = 0), onde a altura é zero." },
      { id: "d", text: "h_max = 45 metros no instante t = 6 segundos.", isCorrect: false, distractorRationale: "Associou a altura máxima ao tempo de retorno ao solo." },
      { id: "e", text: "h_max = 25 metros no instante t = 2,5 segundos.", isCorrect: false, distractorRationale: "Errou a fórmula do tempo do vértice." }
    ],
    detailedExplanation: {
      summary: "O tempo para atingir a altura máxima é a abscissa do vértice: t_v = -b / (2a) = -30 / (2 · (-5)) = 3 s. A altura máxima é a ordenada do vértice: h(3) = -5(3)² + 30(3) = -45 + 90 = 45 metros.",
      stepByStep: [
        "1. Função horária do espaço vertical: h(t) = -5t² + 30t.",
        "2. Coeficientes: a = -5, b = 30, c = 0.",
        "3. Tempo do vértice (instante de altura máxima): t_v = -b / (2a) = -30 / (2 · (-5)) = -30 / -10 = 3 segundos.",
        "4. Altura máxima: h_max = h(t_v) = h(3) = -5(3)² + 30(3) = -5(9) + 90 = -45 + 90 = 45 metros.",
        "5. Tempo de retorno ao solo: como partiu do solo em t = 0 e a parábola é simétrica, ele atinge o solo em t = 2 · 3 = 6 segundos."
      ],
      coreConcept: "Vértice da Parábola em Movimentos Verticais (t_v e y_v)",
      trapWarning: "Substitua sempre o tempo do vértice na função original para achar a altura máxima. Isso é muito mais rápido e imune a erros do que calcular -Δ / (4a)!"
    },
    commonTraps: [
      "Confundir o tempo de subida (3 s) com o tempo total de voo (6 s)",
      "Errar o sinal do coeficiente 'a' (-5)"
    ],
    tags: ["funcao-quadratica", "vertice-parabola", "cinematica", "altura-maxima"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-016",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções",
    subtopic: "Escala de Decibéis e Nível de Intensidade Sonora",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A sensibilidade do ouvido humano às ondas sonoras é logarítmica. O nível de intensidade sonora β (em decibéis, dB) é definido por: β = 10 · log₁₀(I / I₀), onde I é a intensidade física da onda sonora (em W/m²) e I₀ = 10⁻¹² W/m² é o limiar de audibilidade humano. Em uma avenida movimentada, mediu-se um nível de 80 dB. Após obras de recapeamento com asfalto acústico e redução de velocidade, o nível de ruído caiu para 60 dB.",
      source: "Acústica Ambiental e Logaritmos"
    },
    prompt: "Com a redução de 80 dB para 60 dB, a intensidade física da onda sonora (I) que atinge as residências vizinhas foi multiplicada por:",
    options: [
      { id: "a", text: "0,01 (redução de 100 vezes).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "0,75 (redução de 25%).", isCorrect: false, distractorRationale: "Fez a razão 60 / 80 = 0,75, esquecendo que decibel é escala logarítmica." },
      { id: "c", text: "0,1 (redução de 10 vezes).", isCorrect: false, distractorRationale: "Isso corresponderia a uma redução de apenas 10 dB, e não 20 dB." },
      { id: "d", text: "0,5 (redução pela metade).", isCorrect: false, distractorRationale: "Uma redução pela metade da intensidade corresponde a uma queda de cerca de 3 dB." },
      { id: "e", text: "0,001 (redução de 1.000 vezes).", isCorrect: false, distractorRationale: "Isso corresponderia a uma queda de 30 dB." }
    ],
    detailedExplanation: {
      summary: "Variação do nível sonoro: Δβ = β₂ - β₁ = 60 - 80 = -20 dB. Da definição: -20 = 10 · log₁₀(I₂ / I₁) -> log₁₀(I₂ / I₁) = -2 -> I₂ / I₁ = 10⁻² = 0,01. A intensidade sonora caiu 100 vezes!",
      stepByStep: [
        "1. Diferença nos níveis de decibéis: β₂ - β₁ = 60 - 80 = -20 dB.",
        "2. Aplicar a fórmula: Δβ = 10 · log(I₂ / I₁).",
        "3. -20 = 10 · log₁₀(I₂ / I₁).",
        "4. Dividir por 10: log₁₀(I₂ / I₁) = -2.",
        "5. Pela definição de logaritmo: I₂ / I₁ = 10⁻² = 1 / 100 = 0,01.",
        "6. Conclusão: uma redução aparentemente modesta de 20 dB no papel significa que a energia acústica real foi reduzida em 100 vezes!"
      ],
      coreConcept: "Escala Logarítmica de Decibéis e Variação de Potência Sonora",
      trapWarning: "Regra de ouro: A cada 10 dB a menos, a intensidade cai 10 vezes. A cada 20 dB a menos, a intensidade cai 10² = 100 vezes. A cada 30 dB a menos, cai 10³ = 1.000 vezes!"
    },
    commonTraps: [
      "Dividir 60 por 80 como se fosse grandeza proporcional linear",
      "Confundir queda de 20 dB com queda de 20 vezes"
    ],
    tags: ["decibeis", "logaritmos", "acustica", "intensidade-sonora"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-017",
    area: "matematica",
    competence: 5,
    skill: 19,
    topic: "Funções",
    subtopic: "Depreciação Linear e Função Afim",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma clínica médica adquiriu um aparelho de ultrassonografia novinho por R$ 180.000,00. Para fins contábeis e fiscais, adota-se o modelo de depreciação linear contínua, no qual o valor do equipamento perde uma quantia fixa a cada ano de uso, atingindo seu valor residual nulo (R$ 0,00) após exatamente 12 anos de vida útil contábil.",
      source: "Contabilidade e Matemática Financeira Aplicada"
    },
    prompt: "A lei da função que expressa o valor contábil V(t) desse ultrassom em reais em função do tempo t de uso (em anos, com 0 ≤ t ≤ 12) e o seu valor após 5 anos de aquisição são:",
    options: [
      { id: "a", text: "V(t) = 180.000 - 15.000t e V(5) = R$ 105.000,00.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "V(t) = 180.000 - 12.000t e V(5) = R$ 120.000,00.", isCorrect: false, distractorRationale: "Errou a taxa anual de depreciação (180.000 / 12 = 15.000, e não 12.000)." },
      { id: "c", text: "V(t) = 180.000 - 15.000t e V(5) = R$ 75.000,00.", isCorrect: false, distractorRationale: "R$ 75.000,00 é a perda acumulada (5 · 15.000), e não o valor restante do equipamento." },
      { id: "d", text: "V(t) = 15.000t e V(5) = R$ 75.000,00.", isCorrect: false, distractorRationale: "Essa seria a função da perda acumulada, não do valor contábil do bem." },
      { id: "e", text: "V(t) = 180.000 · (0,9)^t e V(5) = R$ 106.288,00.", isCorrect: false, distractorRationale: "Esse seria um modelo de depreciação exponencial percentual, enquanto o texto especificou expressamente depreciação linear." }
    ],
    detailedExplanation: {
      summary: "Taxa de variação: a = ΔV / Δt = (0 - 180.000) / (12 - 0) = -15.000 reais/ano. Logo, a função é V(t) = 180.000 - 15.000t. Para t = 5 anos: V(5) = 180.000 - 15.000(5) = 180.000 - 75.000 = R$ 105.000,00.",
      stepByStep: [
        "1. Depreciação linear = Função Afim decrescente: V(t) = a·t + b.",
        "2. Coeficiente linear (valor inicial em t = 0): b = 180.000.",
        "3. Em t = 12 anos, o valor é zero: V(12) = 12a + 180.000 = 0 -> 12a = -180.000.",
        "4. Taxa de depreciação: a = -180.000 / 12 = -15.000 reais por ano.",
        "5. Lei da função: V(t) = 180.000 - 15.000t.",
        "6. Para t = 5 anos: V(5) = 180.000 - 15.000(5) = 180.000 - 75.000 = R$ 105.000,00."
      ],
      coreConcept: "Modelagem por Função Afim Decrescente e Taxa de Depreciação",
      trapWarning: "Cuidado: Distinga sempre entre o 'valor residual restante' (105.000) e a 'depreciação total ocorrida' (75.000)."
    },
    commonTraps: [
      "Marcar a depreciação acumulada em vez do valor contábil restante",
      "Errar a taxa anual de divisão por 12"
    ],
    tags: ["funcao-afim", "depreciacao-linear", "taxa-de-variacao", "matematica-financeira"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-018",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções",
    subtopic: "Inequação do 2º Grau e Intervalo de Lucratividade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O lucro mensal L (em milhares de reais) obtido por uma startup de biotecnologia na venda de lotes de testes rápidos é modelado em função da quantidade x de lotes comercializados pela expressão: L(x) = -x² + 14x - 40.",
      source: "ENEM Análise de Sinais de Funções Quadráticas"
    },
    prompt: "Para quais quantidades de lotes x vendidos a startup opera estritamente no lucro (isto é, com L(x) > 0)?",
    options: [
      { id: "a", text: "Para qualquer quantidade estritamente entre 4 e 10 lotes (4 < x < 10).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Para qualquer quantidade x < 4 ou x > 10.", isCorrect: false, distractorRationale: "Inverteu o sinal da parábola; como a = -1 < 0, a função é negativa (prejuízo) fora das raízes." },
      { id: "c", text: "Para exatamente x = 7 lotes.", isCorrect: false, distractorRationale: "x = 7 é o ponto de lucro máximo (vértice), mas o lucro é positivo em todo o intervalo entre 4 e 10." },
      { id: "d", text: "Para qualquer quantidade x > 14 lotes.", isCorrect: false, distractorRationale: "Para x > 14 a empresa opera em forte prejuízo." },
      { id: "e", text: "Para qualquer quantidade x ≥ 0.", isCorrect: false, distractorRationale: "Para x = 0 o lucro é L(0) = -40 (prejuízo de R$ 40.000,00 decorrente de custos fixos)." }
    ],
    detailedExplanation: {
      summary: "As raízes de -x² + 14x - 40 = 0 são x = 4 e x = 10. Como a concavidade é voltada para baixo (a = -1 < 0), a parábola fica acima do eixo x (positiva) estritamente no intervalo entre as raízes: 4 < x < 10.",
      stepByStep: [
        "1. Inequação desejada: -x² + 14x - 40 > 0.",
        "2. Determinar as raízes da equação correspondente: -x² + 14x - 40 = 0.",
        "3. Multiplicando por -1: x² - 14x + 40 = 0.",
        "4. Soma das raízes = 14 e Produto das raízes = 40. As raízes são x₁ = 4 e x₂ = 10.",
        "5. Estudo do sinal de L(x): o gráfico é uma parábola de concavidade para baixo (a = -1).",
        "6. A função é negativa antes de 4, positiva entre 4 e 10, e negativa após 10.",
        "7. Logo, para ter lucro positivo (L > 0): 4 < x < 10."
      ],
      coreConcept: "Estudo de Sinais da Função Quadrática e Inequações do 2º Grau",
      trapWarning: "Atenção: Na inequação x² - 14x + 40 < 0 (ao multiplicar por -1 o sinal inverte!), o resultado é o mesmo: entre as raízes 4 e 10."
    },
    commonTraps: [
      "Inverter o estudo do sinal por não prestar atenção no sinal negativo de a = -1",
      "Confundir o intervalo de lucro com o valor do vértice"
    ],
    tags: ["inequacao-segundo-grau", "estudo-de-sinais", "parabola", "lucro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-019",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções",
    subtopic: "Escala de pH e Logaritmos na Bioquímica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O potencial hidrogeniônico (pH) é a medida da acidez de uma solução aquosa, definido logaritmicamente pela fórmula: pH = -log₁₀[H⁺], onde [H⁺] representa a concentração molar de íons hidrogênio em mol/L. Em um paciente com acidose metabólica, o pH do sangue caiu de 7,4 para 7,1.",
      source: "Bioquímica Médica e Logaritmos"
    },
    prompt: "Se uma solução A possui pH = 3,0 e uma solução B possui pH = 5,0, a concentração de íons [H⁺] na solução A é:",
    options: [
      { id: "a", text: "100 vezes maior do que a concentração de íons [H⁺] na solução B.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "2 vezes maior do que na solução B.", isCorrect: false, distractorRationale: "Fez a diferença direta 5,0 - 3,0 = 2, ignorando a escala exponencial de base 10." },
      { id: "c", text: "100 vezes menor do que na solução B.", isCorrect: false, distractorRationale: "Menor pH significa MAIOR acidez e MAIOR concentração de prótons H+." },
      { id: "d", text: "20 vezes maior do que na solução B.", isCorrect: false, distractorRationale: "Multiplicou a diferença de 2 unidades por 10." },
      { id: "e", text: "1.000 vezes maior do que na solução B.", isCorrect: false, distractorRationale: "Isso corresponderia a uma diferença de 3 unidades de pH." }
    ],
    detailedExplanation: {
      summary: "Pela definição de pH: [H⁺] = 10^(-pH). Para pH = 3: [H⁺]_A = 10⁻³ mol/L. Para pH = 5: [H⁺]_B = 10⁻⁵ mol/L. A razão é: [H⁺]_A / [H⁺]_B = 10⁻³ / 10⁻⁵ = 10² = 100 vezes maior.",
      stepByStep: [
        "1. Solução A: pH = 3,0 -> [H⁺]_A = 10⁻³ mol/L.",
        "2. Solução B: pH = 5,0 -> [H⁺]_B = 10⁻⁵ mol/L.",
        "3. Razão das concentrações: [H⁺]_A / [H⁺]_B = 10⁻³ / 10⁻⁵ = 10^(-3 - (-5)) = 10² = 100.",
        "4. Como a solução A tem menor pH, ela é mais ácida, contendo 100 vezes mais íons H⁺ livres."
      ],
      coreConcept: "Escala Logarítmica de pH e Concentração Molar [H⁺]",
      trapWarning: "Cuidado com o sinal negativo: MENOR pH = MAIS ÁCIDO = MAIOR concentração de H⁺!"
    },
    commonTraps: [
      "Achar que menor pH significa menor acidez",
      "Tratar a variação de pH como uma razão aritmética direta (5 - 3 = 2)"
    ],
    tags: ["ph", "logaritmos", "bioquimica", "quimica-matematica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-020",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Funções",
    subtopic: "Translação Gráfica e Transformações de Funções",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No estudo das transformações geométricas de gráficos, a função f(x) = x² possui sua parábola com vértice na origem (0, 0). Modificações algébricas na lei da função produzem translações horizontais e verticais sem alterar a abertura da parábola.",
      source: "ENEM Geometria Analítica e Álgebra Funcional"
    },
    prompt: "Para que o gráfico de f(x) = x² sofra uma translação de 3 unidades para a direita e 4 unidades para cima no plano cartesiano, a nova lei da função g(x) deve ser:",
    options: [
      { id: "a", text: "g(x) = (x - 3)² + 4", isCorrect: true, distractorRationale: null },
      { id: "b", text: "g(x) = (x + 3)² + 4", isCorrect: false, distractorRationale: "(x + 3)² desloca a parábola 3 unidades para a ESQUERDA, e não para a direita." },
      { id: "c", text: "g(x) = (x - 3)² - 4", isCorrect: false, distractorRationale: "- 4 desloca a parábola 4 unidades para BAIXO." },
      { id: "d", text: "g(x) = x² - 3x + 4", isCorrect: false, distractorRationale: "Isso alteraria a simetria sem produzir a translação pura especificada." },
      { id: "e", text: "g(x) = (x + 4)² + 3", isCorrect: false, distractorRationale: "Inverteu as coordenadas dos deslocamentos horizontal e vertical." }
    ],
    detailedExplanation: {
      summary: "Translação de gráficos: Subtrair 'c' dentro do argumento f(x - c) desloca o gráfico 'c' unidades para a DIREITA. Somar 'd' fora f(x) + d desloca o gráfico 'd' unidades para CIMA. Logo, g(x) = (x - 3)² + 4, cujo vértice é (3, 4).",
      stepByStep: [
        "1. Vértice original de f(x) = x²: V₀ = (0, 0).",
        "2. Novo vértice após transladar 3 para direita (x = +3) e 4 para cima (y = +4): V_novo = (3, 4).",
        "3. Forma canônica da parábola: g(x) = a(x - x_v)² + y_v.",
        "4. Como a abertura é idêntica (a = 1): g(x) = 1 · (x - 3)² + 4.",
        "5. Regra geral: deslocamento horizontal para a direita é (x - h); vertical para cima é + k."
      ],
      coreConcept: "Translação Gráfica e Forma Canônica da Parábola",
      trapWarning: "Cuidado: Para deslocar para a DIREITA (sentido positivo do eixo x), você SUBTRAI dentro do parêntese: (x - 3). Para a ESQUERDA, você soma: (x + 3)."
    },
    commonTraps: [
      "Achar que deslocar para a direita é somar dentro do parêntese",
      "Confundir translação horizontal com vertical"
    ],
    tags: ["translacao-grafica", "forma-canonica", "parabola", "transformacao-funcoes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FUNC-021",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções",
    subtopic: "Decaimento Radioativo e Função Exponencial",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na medicina nuclear, o radiofármaco Iodo-131 (¹³¹I) é utilizado no tratamento de distúrbios da glândula tireoide. Esse isótopo decai exponencialmente com meia-vida física aproximada de T = 8 dias. A massa residual M(t) da amostra após t dias decorridos da administração obedece à lei matemática: M(t) = M₀ · (1/2)^(t / 8), onde M₀ representa a massa inicial ativa.",
      source: "Fundamentos de Física Médica e Proteção Radiológica."
    },
    prompt: "Se uma dose terapêutica administrada a um paciente continha inicialmente M₀ = 40 mg de Iodo-131, a massa residual ativa remanescente no organismo após 32 dias de monitoramento é igual a:",
    options: [
      { id: "a", text: "2,5 mg.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "5,0 mg.", isCorrect: false, distractorRationale: "Calculou para 3 meias-vidas (24 dias: 40 / 8 = 5,0 mg)." },
      { id: "c", text: "10,0 mg.", isCorrect: false, distractorRationale: "Calculou para 2 meias-vidas (16 dias: 40 / 4 = 10,0 mg)." },
      { id: "d", text: "1,25 mg.", isCorrect: false, distractorRationale: "Calculou para 5 meias-vidas (40 dias)." },
      { id: "e", text: "0,0 mg.", isCorrect: false, distractorRationale: "Assumiu erroneamente decaimento linear completo 40 - (8x4)." }
    ],
    detailedExplanation: {
      summary: "Em decaimento exponencial com meia-vida, a quantidade divide-se por 2 a cada período T. O número de meias-vidas transcorridas é n = t / T = 32 / 8 = 4 períodos. Logo, M(32) = 40 · (1/2)⁴ = 40 / 16 = 2,5 mg.",
      stepByStep: [
        "1. Identificar o período de meia-vida: T = 8 dias.",
        "2. Determinar o número de ciclos transcorridos em 32 dias: n = 32 / 8 = 4 meias-vidas.",
        "3. Aplicar a lei exponencial: M(32) = 40 · (1/2)⁴.",
        "4. Calcular a potência: (1/2)⁴ = 1 / 16.",
        "5. Efetuar a divisão: M(32) = 40 / 16 = 2,5 mg.",
        "6. Conclusão: restam 2,5 mg de Iodo-131 (93,75% do material já decaiu)."
      ],
      coreConcept: "Função Exponencial de Decaimento e Conceito de Meia-Vida",
      trapWarning: "No ENEM: Meia-vida NUNCA é decaimento linear! Não subtraia frações fixas do valor inicial; divida sempre sucessivamente por 2."
    },
    commonTraps: [
      "Tratar decaimento exponencial como linear subtraindo quantias constantes",
      "Errar a contagem do expoente dividindo tempo pelo valor da massa"
    ],
    tags: ["exponencial", "meia-vida", "iodo-131", "decaimento-radioativo", "medicina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-FUNC-022",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Funções",
    subtopic: "Otimização de Receita e Vértice da Parábola",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma desenvolvedora de aplicativos educacionais comercializa licenças de uma plataforma de estudos. Estudos de mercado demonstraram que o preço unitário p (em reais) que os clientes estão dispostos a pagar relaciona-se com a quantidade mensal demandada q de licenças pela equação linear de demanda: p(q) = 160 - 2q, para 0 ≤ q ≤ 80. A Receita Total mensal R(q) é calculada multiplicando-se a quantidade vendida pelo preço unitário cobrado.",
      source: "Microeconomia Aplicada e Gestão Empresarial."
    },
    prompt: "Para maximizar a receita total obtida com as assinaturas da plataforma, o número ideal de licenças mensais a serem comercializadas e o valor da receita máxima atingida são, respectivamente:",
    options: [
      { id: "a", text: "40 licenças e R$ 3.200,00.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "80 licenças e R$ 6.400,00.", isCorrect: false, distractorRationale: "Usou a raiz da função de demanda (p=0), onde a receita é zero." },
      { id: "c", text: "40 licenças e R$ 1.600,00.", isCorrect: false, distractorRationale: "Multiplicou 40 por 40 em vez de substituir na função receita." },
      { id: "d", text: "20 licenças e R$ 2.400,00.", isCorrect: false, distractorRationale: "Dividiu a coordenada x do vértice por 2 arbitrariamente." },
      { id: "e", text: "50 licenças e R$ 3.000,00.", isCorrect: false, distractorRationale: "Testou um valor genérico que produz receita subótima (50 x 60 = 3.000)." }
    ],
    detailedExplanation: {
      summary: "A receita é R(q) = q · p(q) = q(160 - 2q) = -2q² + 160q. Como o coeficiente de q² é negativo (a = -2), a parábola tem concavidade voltada para baixo e possui ponto de máximo no vértice: q_v = -b / (2a) e R_max = R(q_v).",
      stepByStep: [
        "1. Montar a função Receita: R(q) = q · (160 - 2q) = -2q² + 160q.",
        "2. Identificar os coeficientes quadráticos: a = -2, b = 160 e c = 0.",
        "3. Calcular a abscissa do vértice (quantidade de máxima receita):",
        "   q_v = -b / (2a) = -160 / (2 · (-2)) = -160 / -4 = 40 licenças.",
        "4. Calcular o preço correspondente: p(40) = 160 - 2(40) = 160 - 80 = R$ 80,00.",
        "5. Calcular a receita máxima: R_max = 40 · 80 = R$ 3.200,00 (ou usando -Δ/(4a): -160²/(4·(-2)) = -25600/-8 = 3.200).",
        "6. Conclusão: a receita é maximizada com 40 licenças ao montante de R$ 3.200,00."
      ],
      coreConcept: "Otimização de Funções Quadráticas via Vértice da Parábola (x_v e y_v)",
      trapWarning: "No ENEM: Diferencie com atenção 'a quantidade que maximiza' (x_v) de 'o valor máximo obtido' (y_v)."
    },
    commonTraps: [
      "Confundir o x do vértice (40 licenças) com o y do vértice (R$ 3.200,00)",
      "Achar que vender o máximo possível de licenças (q = 80) gera a máxima receita (no preço zero, a receita é zero!)"
    ],
    tags: ["funcao-quadratica", "vertice-parabola", "otimizacao", "receita-maxima"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-FUNC-023",
    area: "matematica",
    competence: 5,
    skill: 23,
    topic: "Funções",
    subtopic: "Função Logarítmica e Escala de Richter",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A magnitude sísmica na escala Richter e a energia mecânica liberada E (em Joules) por um terremoto relacionam-se empiricamente pela equação logarítmica de Gutenberg-Richter: log₁₀(E) = 4,8 + 1,5 · M, onde M é a magnitude registrada pelo sismógrafo.",
      source: "Sismologia Básica e Geofísica Computacional."
    },
    prompt: "Considere dois abalos sísmicos: o terremoto A com magnitude M_A = 7,0 e o terremoto B com magnitude M_B = 5,0. A razão entre a energia liberada pelo terremoto A e a energia liberada pelo terremoto B (E_A / E_B) é igual a:",
    options: [
      { id: "a", text: "1.000.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1,4.", isCorrect: false, distractorRationale: "Fez a divisão direta das magnitudes: 7,0 / 5,0 = 1,4." },
      { id: "c", text: "100.", isCorrect: false, distractorRationale: "Assumiu escala logarítmica simples com expoente 1·(7-5) em vez de 1,5·(7-5)." },
      { id: "d", text: "20.", isCorrect: false, distractorRationale: "Multiplicou a diferença (7 - 5 = 2) por 10." },
      { id: "e", text: "10.000.", isCorrect: false, distractorRationale: "Assumiu que cada unidade de magnitude multiplica por 100." }
    ],
    detailedExplanation: {
      summary: "Pelas propriedades dos logaritmos: log(E_A) - log(E_B) = log(E_A / E_B). Substituindo: log(E_A / E_B) = 1,5 · (M_A - M_B) = 1,5 · (7,0 - 5,0) = 1,5 · 2 = 3. Logo, E_A / E_B = 10³ = 1.000.",
      stepByStep: [
        "1. Escrever as equações para cada terremoto:",
        "   log(E_A) = 4,8 + 1,5 · 7,0",
        "   log(E_B) = 4,8 + 1,5 · 5,0",
        "2. Subtrair as duas equações para usar a propriedade log(E_A / E_B):",
        "   log(E_A) - log(E_B) = 1,5 · (7,0 - 5,0)",
        "   log(E_A / E_B) = 1,5 · 2 = 3,0.",
        "3. Aplicar a definição fundamental de logaritmo na base 10:",
        "   E_A / E_B = 10^(3,0) = 1.000.",
        "4. Conclusão: uma variação de apenas 2 unidades na magnitude sísmica representa uma liberação de energia 1.000 vezes maior."
      ],
      coreConcept: "Propriedades Operatórias de Logaritmos e Escala de Richter",
      trapWarning: "No ENEM: Em escalas logarítmicas, subtrair logaritmos equivale a dividir os argumentos! Nunca divida diretamente as magnitudes na escala linear."
    },
    commonTraps: [
      "Dividir 7 por 5 achando que a resposta é 1,4",
      "Esquecer do coeficiente multiplicador 1,5 da fórmula de Richter"
    ],
    tags: ["logaritmos", "escala-richter", "terremoto", "potenciacao", "geofisica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-FUNC-024",
    area: "matematica",
    competence: 5,
    skill: 19,
    topic: "Funções",
    subtopic: "Composição de Funções e Cadeias Produtivas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma cooperativa de reciclagem de polímeros, o custo de beneficiamento C (em reais) depende da massa m (em toneladas) de plástico triado segundo a função afim: C(m) = 80m + 500. Por sua vez, a massa triada m relaciona-se com o número h de horas de operação contínua das esteiras mecânicas pela função: m(h) = 2,5h + 4.",
      source: "Engenharia de Produção e Gestão de Resíduos Sólidos."
    },
    prompt: "A lei que modela o custo total C em função direta das horas trabalhadas h, isto é, a função composta C(m(h)), e o custo gerado em uma jornada de 8 horas diárias valem, respectivamente:",
    options: [
      { id: "a", text: "C(h) = 200h + 820 e C(8) = R$ 2.420,00.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "C(h) = 200h + 500 e C(8) = R$ 2.100,00.", isCorrect: false, distractorRationale: "Esqueceu de multiplicar o termo constante 4 pelo coeficiente 80 na distributiva (80 x 4 = 320)." },
      { id: "c", text: "C(h) = 82,5h + 504 e C(8) = R$ 1.164,00.", isCorrect: false, distractorRationale: "Somou os coeficientes das duas funções em vez de compô-las algebricamente." },
      { id: "d", text: "C(h) = 200h + 820 e C(8) = R$ 1.600,00.", isCorrect: false, distractorRationale: "Calculou apenas 200 x 8 sem somar a parcela fixa de 820." },
      { id: "e", text: "C(h) = 160h + 900 e C(8) = R$ 2.180,00.", isCorrect: false, distractorRationale: "Errou a multiplicação 80 x 2,5." }
    ],
    detailedExplanation: {
      summary: "Na composição de funções f(g(x)), substitui-se toda a expressão de g(x) no lugar da variável da função externa f. Aqui: C(h) = 80(2,5h + 4) + 500 = 200h + 320 + 500 = 200h + 820.",
      stepByStep: [
        "1. Escrever a função externa: C(m) = 80m + 500.",
        "2. Substituir m pela função interna m(h) = 2,5h + 4:",
        "   C(h) = 80 · (2,5h + 4) + 500.",
        "3. Aplicar a distributiva:",
        "   80 · 2,5h = 200h",
        "   80 · 4 = 320.",
        "4. Agrupar os termos semelhantes:",
        "   C(h) = 200h + 320 + 500 = 200h + 820.",
        "5. Calcular para h = 8 horas:",
        "   C(8) = 200 · 8 + 820 = 1.600 + 820 = R$ 2.420,00.",
        "6. Conclusão: o custo em 8 horas é de R$ 2.420,00 com lei C(h) = 200h + 820."
      ],
      coreConcept: "Composição Algébrica de Funções Afins e Aplicação Produtiva",
      trapWarning: "No ENEM: Lembre-se da propriedade distributiva ao compor funções afins: k · (ax + b) = k·ax + k·b."
    },
    commonTraps: [
      "Somar as leis em vez de compor f(g(x))",
      "Esquecer de distribuir o fator multiplicativo no termo independente interno"
    ],
    tags: ["funcao-composta", "funcao-afim", "custos", "algebra", "modelagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-FUNC-025",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Funções",
    subtopic: "Modelo Logístico e Assíntotas Horizontais",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A adesão de estudantes a um simulado digital preparatório para o ENEM ao longo dos dias t (t ≥ 0) foi modelada com precisão pela função de crescimento logístico: N(t) = 12.000 / (1 + 5 · 2^(-0,2 · t)), onde N(t) representa o número acumulado de alunos inscritos no dia t.",
      source: "Modelagem Matemática de Sistemas Sociais e Tecnologias Educacionais."
    },
    prompt: "Com base nessa modelagem, o número de alunos inscritos no dia inicial do lançamento (t = 0) e o limite assintótico máximo de inscrições à medida que o tempo cresce indefinidamente (t → ∞) são, respectivamente:",
    options: [
      { id: "a", text: "2.000 alunos e 12.000 alunos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "0 alunos e 12.000 alunos.", isCorrect: false, distractorRationale: "Assumiu que t = 0 zera a função, ignorando que 2^0 = 1 e o denominador fica 1 + 5 = 6." },
      { id: "c", text: "2.400 alunos e 10.000 alunos.", isCorrect: false, distractorRationale: "Dividiu 12.000 por 5 em vez de (1 + 5) = 6." },
      { id: "d", text: "2.000 alunos e infinitos alunos.", isCorrect: false, distractorRationale: "Confundiu modelo logístico com modelo exponencial puro ilimitado." },
      { id: "e", text: "1.200 alunos e 60.000 alunos.", isCorrect: false, distractorRationale: "Multiplicou por 5 por engano no limite assintótico." }
    ],
    detailedExplanation: {
      summary: "Em t = 0: 2^0 = 1, logo N(0) = 12.000 / (1 + 5·1) = 12.000 / 6 = 2.000 inscritos. Quando t → ∞: o termo 2^(-0,2t) = 1 / 2^(0,2t) tende a 0, logo o denominador tende a 1 + 0 = 1. A assíntota horizontal superior é 12.000 alunos.",
      stepByStep: [
        "1. Calcular para o instante inicial t = 0:",
        "   2^(-0,2 · 0) = 2^0 = 1.",
        "   N(0) = 12.000 / (1 + 5 · 1) = 12.000 / 6 = 2.000 alunos.",
        "2. Analisar o comportamento para tempos muito grandes (t → ∞):",
        "   Como o expoente é negativo, 2^(-0,2 · t) = 1 / 2^(0,2t) tende a 0.",
        "   Portanto: 5 · 2^(-0,2t) tende a 0.",
        "   Denominador tende a: 1 + 0 = 1.",
        "3. Limite assintótico máximo (capacidade de saturação do sistema):",
        "   N_max = 12.000 / 1 = 12.000 alunos.",
        "4. Conclusão: a campanha começa com 2.000 inscritos e satura assintoticamente em 12.000 inscritos."
      ],
      coreConcept: "Comportamento Limítrofe da Função Logística e Assíntotas",
      trapWarning: "No ENEM: A função logística NUNCA cresce até o infinito; o numerador representa o teto máximo de saturação (capacidade de suporte da população)."
    },
    commonTraps: [
      "Achar que 2^0 = 0",
      "Achar que a curva logística continua subindo sem teto"
    ],
    tags: ["funcao-logistica", "assintota", "limites", "exponencial-negativa", "saturacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];


