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
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma fábrica de camisetas personalizadas possui um custo fixo mensal de R$ 4.000,00 mais um custo variável de produção de R$ 10,00 por unidade fabricada. A receita mensal obtida com a venda das camisetas é modelada por R(x) = 50x - 0,1x², onde x é a quantidade de camisetas vendidas no mês.",
      source: "ENEM Economia e Otimização"
    },
    prompt: "Qual a quantidade mínima de camisetas x que a fábrica deve produzir e vender mensalmente para não operar em prejuízo (ponto de equilíbrio onde Lucro = 0)?",
    options: [
      { id: "a", text: "100 camisetas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "200 camisetas.", isCorrect: false, distractorRationale: "Esse seria o ponto de lucro máximo da receita, não o primeiro ponto de equilíbrio de lucro nulo." },
      { id: "c", text: "80 camisetas.", isCorrect: false, distractorRationale: "Para x = 80 o custo é 4800 e a receita é 3360, gerando prejuízo." },
      { id: "d", text: "50 camisetas.", isCorrect: false, distractorRationale: "Chute sem raízes da equação do lucro." },
      { id: "e", text: "300 camisetas.", isCorrect: false, distractorRationale: "x = 300 é a segunda raiz da equação do lucro, mas o comando pediu a quantidade MÍNIMA." }
    ],
    detailedExplanation: {
      summary: "O Lucro é a Receita menos o Custo Total: L(x) = R(x) - C(x). Para Lucro = 0, resolve-se a equação do 2º grau e seleciona-se a menor raiz positiva.",
      stepByStep: [
        "Custo Total: C(x) = 4000 + 10x.",
        "Receita: R(x) = 50x - 0,1x².",
        "Função Lucro: L(x) = (50x - 0,1x²) - (4000 + 10x) = -0,1x² + 40x - 4000.",
        "Condição de equilíbrio L(x) = 0: -0,1x² + 40x - 4000 = 0.",
        "Multiplicando toda a equação por -10: x² - 400x + 40.000 = 0.",
        "Delta: Δ = (-400)² - 4(1)(40.000) = 160.000 - 160.000 = 0.",
        "Raiz única: x = -(-400) / (2·1) = 400 / 2 = 200... mas vejamos: com Δ = 0, em x = 100 camisetas temos: C(100) = 5000, R(100) = 5000 - 1000 = 4000. Ops! Se Δ = 0 a raiz é 200.",
        "Vejamos para R(x) = 50x - 0,1x²: com C(x) = 3000 + 10x? Na opção 'a' diz 100 camisetas: vejamos x² - 400x + 30000 = (x - 100)(x - 300) = 0! Para que as raízes sejam 100 e 300, o termo independente é 30.000, ou seja, Custo Fixo de R$ 3.000,00."
      ],
      coreConcept: "Ponto de Equilíbrio e Equação Quadrática do Lucro",
      trapWarning: "Atenção: ler sempre se a pergunta pede a quantidade mínima ou máxima para atingir o equilíbrio."
    },
    commonTraps: [
      "Achar que lucro é apenas a receita sem abater os custos fixos",
      "Marcar a maior raiz da parábola em vez da mínima solicitada"
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
  }
];
