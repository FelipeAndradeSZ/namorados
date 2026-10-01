export const QUESTIONS_FINANCEIRA = [
  {
    id: "MAT-FIN-001",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Juros Simples",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "João pegou um empréstimo de R$ 2.000,00 de um amigo, que cobrou juros simples de 3% ao mês. João decidiu quitar a dívida em 6 meses.",
      source: "Original"
    },
    prompt: "Qual será o valor total pago por João ao final dos 6 meses?",
    options: [
      { id: "a", text: "R$ 2.360,00", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 360,00", isCorrect: false, distractorRationale: "Calculou apenas o valor dos juros, sem somar o capital." },
      { id: "c", text: "R$ 2.036,00", isCorrect: false, distractorRationale: "Errou as casas decimais na multiplicação da taxa." },
      { id: "d", text: "R$ 2.388,10", isCorrect: false, distractorRationale: "Aplicou a fórmula de juros compostos em vez de simples." },
      { id: "e", text: "R$ 2.180,00", isCorrect: false, distractorRationale: "Multiplicou a taxa por meses incorretos." }
    ],
    detailedExplanation: {
      summary: "Em juros simples, o juro incide apenas sobre o valor inicial.",
      stepByStep: [
        "Fórmula de juros simples: J = C * i * t.",
        "C = 2000, i = 0,03 (3%), t = 6.",
        "J = 2000 * 0,03 * 6 = 2000 * 0,18 = 360.",
        "Montante (M) = C + J = 2000 + 360 = 2360."
      ],
      coreConcept: "Montante de Juros Simples",
      trapWarning: "A pergunta pede o 'valor total pago' (montante), e não apenas os juros."
    },
    commonTraps: ["esquecer de somar capital"],
    tags: ["juros simples", "emprestimo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-002",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Juros Compostos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma investidora aplicou R$ 5.000,00 em um fundo de investimento que rende juros compostos de 2% ao mês. Dado que 1,02³ ≈ 1,061.",
      source: "Original"
    },
    prompt: "Qual será o montante aproximado dessa aplicação após 3 meses?",
    options: [
      { id: "a", text: "R$ 5.305,00", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 5.300,00", isCorrect: false, distractorRationale: "Calculou usando juros simples (5000 * 0,06)." },
      { id: "c", text: "R$ 305,00", isCorrect: false, distractorRationale: "Informou apenas o valor dos rendimentos." },
      { id: "d", text: "R$ 5.100,00", isCorrect: false, distractorRationale: "Calculou o montante para apenas 1 mês." },
      { id: "e", text: "R$ 5.610,00", isCorrect: false, distractorRationale: "Deslocou a vírgula do rendimento." }
    ],
    detailedExplanation: {
      summary: "Em juros compostos, os juros de cada período são calculados sobre o montante anterior.",
      stepByStep: [
        "Fórmula de juros compostos: M = C * (1 + i)^t.",
        "C = 5000, i = 0,02, t = 3.",
        "M = 5000 * (1,02)³.",
        "Usando o dado da questão: 1,02³ ≈ 1,061.",
        "M = 5000 * 1,061 = 5305."
      ],
      coreConcept: "Fórmula dos Juros Compostos",
      trapWarning: "Sempre utilize o valor de aproximação (potência) se a questão fornecer."
    },
    commonTraps: ["usar juros simples"],
    tags: ["juros compostos", "investimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-003",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Aumentos e Descontos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma loja decide aumentar o preço de um produto em 20%. Um mês depois, por causa das baixas vendas, a loja aplica um desconto de 20% sobre o novo preço.",
      source: "Original"
    },
    prompt: "Em relação ao preço original antes do aumento, o preço final do produto é:",
    options: [
      { id: "a", text: "4% menor.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Igual.", isCorrect: false, distractorRationale: "Pensou que o aumento de 20 e desconto de 20 se anulam." },
      { id: "c", text: "4% maior.", isCorrect: false, distractorRationale: "Errou a matemática das multiplicações." },
      { id: "d", text: "20% menor.", isCorrect: false, distractorRationale: "Esqueceu do aumento inicial." },
      { id: "e", text: "16% menor.", isCorrect: false, distractorRationale: "Somou as porcentagens de forma indevida." }
    ],
    detailedExplanation: {
      summary: "Aumentos e descontos percentuais sucessivos multiplicam seus fatores.",
      stepByStep: [
        "Aumento de 20% equivale a multiplicar por 1,20.",
        "Desconto de 20% equivale a multiplicar por 0,80.",
        "Fator final = 1,20 * 0,80 = 0,96.",
        "0,96 representa 96% do valor original, ou seja, 4% menor."
      ],
      coreConcept: "Fatores de Multiplicação",
      trapWarning: "Percentuais não podem ser simplesmente somados ou subtraídos; eles incidem sobre a base atualizada."
    },
    commonTraps: ["achar que volta ao preco original"],
    tags: ["porcentagem", "desconto", "fator"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-004",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Inflação e Poder de Compra",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No último ano, a inflação medida pelo IPCA foi de 10%. No mesmo período, um trabalhador obteve um reajuste salarial de 5%.",
      source: "Original"
    },
    prompt: "Qual foi a perda percentual real do poder de compra desse trabalhador?",
    options: [
      { id: "a", text: "Aproximadamente 4,5%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Exatamente 5%", isCorrect: false, distractorRationale: "Apenas subtraiu 10% - 5% = 5%." },
      { id: "c", text: "Aproximadamente 15%", isCorrect: false, distractorRationale: "Somou inflação e reajuste." },
      { id: "d", text: "Exatamente 10%", isCorrect: false, distractorRationale: "Ignorou o reajuste salarial." },
      { id: "e", text: "Aproximadamente 2%", isCorrect: false, distractorRationale: "Dividiu a diferença por 2." }
    ],
    detailedExplanation: {
      summary: "Para calcular a variação real, deve-se comparar a evolução da renda com a evolução dos preços.",
      stepByStep: [
        "Fator de aumento da inflação: 1,10.",
        "Fator de aumento do salário: 1,05.",
        "Poder de compra final = Salário final / Preços finais = 1,05 / 1,10 ≈ 0,9545.",
        "Isso significa que o poder de compra equivale a 95,45% do original.",
        "A perda foi de 100% - 95,45% = 4,55%, aproximadamente 4,5%."
      ],
      coreConcept: "Aumento Real e Nominal",
      trapWarning: "Subtrair porcentagens diretamente (10-5) leva a uma resposta errada. É preciso dividir os fatores."
    },
    commonTraps: ["subtração simples de porcentagens"],
    tags: ["inflacao", "poder de compra", "ipca"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-005",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Parcelamento",
    difficulty: 4,
    estimatedTimeSeconds: 200,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um celular é vendido à vista por R$ 1.000,00 ou em duas parcelas fixas de R$ 550,00, sendo a primeira paga no ato da compra e a segunda um mês depois.",
      source: "Original"
    },
    prompt: "Qual a taxa mensal de juros cobrada na venda a prazo?",
    options: [
      { id: "a", text: "22,2%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "10%", isCorrect: false, distractorRationale: "Considerou o juro total (100 reais) sobre 1000 reais." },
      { id: "c", text: "20%", isCorrect: false, distractorRationale: "Calculou 100 sobre o saldo, mas usando 500 em vez de 450." },
      { id: "d", text: "5%", isCorrect: false, distractorRationale: "Dividiu os 10% por 2 parcelas." },
      { id: "e", text: "15%", isCorrect: false, distractorRationale: "Chute baseado num valor intermediário." }
    ],
    detailedExplanation: {
      summary: "A taxa de juros deve incidir sobre o saldo devedor real.",
      stepByStep: [
        "Preço à vista: R$ 1000. Parcela de entrada: R$ 550.",
        "O saldo financiado é o que falta pagar do valor à vista: 1000 - 550 = 450 reais.",
        "Daqui a 1 mês, o cliente pagará R$ 550 para quitar essa dívida de R$ 450.",
        "Juros em valor: 550 - 450 = R$ 100.",
        "Taxa = 100 / 450 ≈ 0,222 = 22,2%."
      ],
      coreConcept: "Juros sobre Saldo Devedor",
      trapWarning: "Lembre-se de descontar o valor da entrada (paga à vista) do montante sobre o qual os juros são calculados."
    },
    commonTraps: ["não deduzir a entrada"],
    tags: ["parcelamento", "saldo devedor"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
