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
        "Fórmula de juros simples: J = C · i · t.",
        "C = 2000, i = 0,03 (3%), t = 6.",
        "J = 2000 · 0,03 · 6 = 2000 · 0,18 = 360.",
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
      { id: "b", text: "R$ 5.300,00", isCorrect: false, distractorRationale: "Calculou usando juros simples (5000 · 0,06)." },
      { id: "c", text: "R$ 305,00", isCorrect: false, distractorRationale: "Informou apenas o valor dos rendimentos." },
      { id: "d", text: "R$ 5.100,00", isCorrect: false, distractorRationale: "Calculou o montante para apenas 1 mês." },
      { id: "e", text: "R$ 5.610,00", isCorrect: false, distractorRationale: "Deslocou a vírgula do rendimento." }
    ],
    detailedExplanation: {
      summary: "Em juros compostos, os juros de cada período são calculados sobre o montante anterior.",
      stepByStep: [
        "Fórmula de juros compostos: M = C · (1 + i)^t.",
        "C = 5000, i = 0,02, t = 3.",
        "M = 5000 · (1,02)³.",
        "Usando o dado da questão: 1,02³ ≈ 1,061.",
        "M = 5000 · 1,061 = 5305."
      ],
      coreConcept: "Fórmula dos Juros Compostos",
      trapWarning: "Sempre utilize o valor de aproximação fornecido pelo enunciado."
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
        "Fator final = 1,20 · 0,80 = 0,96.",
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
  },
  {
    id: "MAT-FIN-006",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "À Vista com Desconto vs Aplicação Financeira",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um notebook é anunciado por R$ 3.000,00. A loja oferece duas opções de pagamento: Opção 1: pagamento à vista com 10% de desconto; Opção 2: pagamento integral de R$ 3.000,00 em parcela única após 30 dias. Um cliente possui todo o dinheiro disponível e tem a opção de aplicar o valor à vista em uma aplicação de renda fixa pós-fixada que rende 2% líquidos ao mês.",
      source: "ENEM Decisão Financeira"
    },
    prompt: "Do ponto de vista puramente financeiro, qual opção é mais vantajosa para o cliente e qual é a economia obtida em relação à outra opção na data do 30º dia?",
    options: [
      { id: "a", text: "A Opção 1 (à vista), com uma vantagem de R$ 246,00 em relação à Opção 2.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "A Opção 2 (a prazo), pois o dinheiro rende R$ 60,00 a mais na aplicação.", isCorrect: false, distractorRationale: "Calculou o rendimento sobre 3.000 em vez do saldo e ignorou o desconto de 10% à vista (R$ 300 de desconto)." },
      { id: "c", text: "As duas opções são equivalentes.", isCorrect: false, distractorRationale: "O desconto de 10% equivale a uma taxa de juros implícita de mais de 11% ao mês, muito superior aos 2% da aplicação." },
      { id: "d", text: "A Opção 1 (à vista), com uma vantagem de exatamente R$ 300,00.", isCorrect: false, distractorRationale: "Esqueceu de calcular o custo de oportunidade (o rendimento que o dinheiro teria gerado se aplicado por 30 dias)." },
      { id: "e", text: "A Opção 2 (a prazo), com vantagem de R$ 54,00.", isCorrect: false, distractorRationale: "Erro de interpretação sobre quem ganha o rendimento." }
    ],
    detailedExplanation: {
      summary: "Compara-se o valor futuro do dinheiro aplicado à taxa do mercado com o valor da dívida a prazo.",
      stepByStep: [
        "Preço à vista com 10% de desconto: 3.000 - 300 = R$ 2.700,00.",
        "Se o cliente optar pela Opção 2 e aplicar os R$ 2.700,00 a 2% ao mês:",
        "Montante após 30 dias = 2.700 · 1,02 = R$ 2.754,00.",
        "No 30º dia, ele precisaria pagar R$ 3.000,00, mas teria apenas R$ 2.754,00 (faltariam R$ 246,00).",
        "Logo, pagar à vista economiza R$ 3.000 - R$ 2.754 = R$ 246,00 em valores futuros."
      ],
      coreConcept: "Custo de Oportunidade, Taxa Implícita e Comparação de Pagamento à Vista vs a Prazo",
      trapWarning: "No ENEM, desconte sempre o percentual do preço à vista (2.700) e aplique sobre ele o rendimento antes de subtrair da parcela a prazo."
    },
    commonTraps: [
      "Comparar 10% de desconto com 2% de aplicação achando que o rendimento de 2% supera o desconto",
      "Esquecer de aplicar o rendimento de 2% sobre os 2.700 poupados"
    ],
    tags: ["desconto-a-vista", "renda-fixa", "custo-de-oportunidade", "decisao-financeira"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-007",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Sistemas de Amortização: Tabela SAC vs Tabela Price",
    difficulty: 4,
    estimatedTimeSeconds: 190,
    questionType: "conceptual",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No Sistema de Amortização Constante (SAC), o valor da cota de amortização do saldo devedor principal é constante ao longo de todas as parcelas, enquanto os juros incidem sobre o saldo devedor residual a cada mês. Considere um financiamento de R$ 120.000,00 contratado pelo SAC para ser pago em 120 meses à taxa de juros de 1% ao mês sobre o saldo devedor.",
      source: "ENEM Financiamento Habitacional"
    },
    prompt: "Os valores da primeira prestação e da segunda prestação desse financiamento pelo SAC serão, respectivamente:",
    options: [
      { id: "a", text: "R$ 2.200,00 e R$ 2.190,00.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 1.000,00 e R$ 1.000,00.", isCorrect: false, distractorRationale: "Esse é apenas o valor fixo da amortização (120.000 / 120), sem somar a parcela de juros." },
      { id: "c", text: "R$ 2.200,00 e R$ 2.200,00.", isCorrect: false, distractorRationale: "Parcelas fixas ocorrem na Tabela Price, não no SAC onde as prestações são decrescentes." },
      { id: "d", text: "R$ 2.400,00 e R$ 2.300,00.", isCorrect: false, distractorRationale: "Calculou a amortização como 2.000 em vez de 1.000." },
      { id: "e", text: "R$ 1.200,00 e R$ 1.190,00.", isCorrect: false, distractorRationale: "Esqueceu de somar os R$ 1.000 da amortização na prestação." }
    ],
    detailedExplanation: {
      summary: "No SAC, Prestação = Amortização Fixa + Juros do Saldo Devedor. Como o saldo devedor cai a cada mês pela amortização paga, os juros diminuem e a prestação é decrescente.",
      stepByStep: [
        "Amortização fixa mensal: A = Saldo Total / Número de meses = 120.000 / 120 = R$ 1.000,00.",
        "Mês 1: Saldo devedor inicial = R$ 120.000,00. Juros 1 = 1% de 120.000 = R$ 1.200,00.",
        "Prestação 1: P₁ = A + Juros 1 = 1.000 + 1.200 = R$ 2.200,00.",
        "Mês 2: Novo saldo devedor = 120.000 - 1.000 = R$ 119.000,00. Juros 2 = 1% de 119.000 = R$ 1.190,00.",
        "Prestação 2: P₂ = A + Juros 2 = 1.000 + 1.190 = R$ 2.190,00.",
        "Decréscimo constante a cada mês: 1% da amortização = 0,01 · 1.000 = R$ 10,00 a menos a cada mês."
      ],
      coreConcept: "Sistema de Amortização Constante (SAC): Prestações Decrescentes e Amortização Fixa",
      trapWarning: "No ENEM, memorize: SAC tem amortização constante e prestações decrescentes; PRICE tem prestações constantes e amortização crescente."
    },
    commonTraps: [
      "Achar que no SAC as prestações são constantes (confundir SAC com Price)",
      "Calcular juros sempre sobre os 120.000 iniciais sem abater a amortização já paga"
    ],
    tags: ["tabela-sac", "amortizacao", "financiamento", "price"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-008",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Equivalência de Taxas de Juros Compostos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um anúncio publicitário de cartão de crédito informa que sua taxa de juros rotativo é de 'apenas 10% ao mês'. Uma consumidora desavisada calcula que isso equivaleria a uma taxa anual de 120% ao ano (10% × 12 meses). Todavia, as instituições financeiras operam sob o regime de capitalização composta.",
      source: "ENEM Educação Financeira e Direitos do Consumidor"
    },
    prompt: "Dado que (1,10)¹² ≈ 3,138, a taxa de juros anual real e efetiva cobrada por esse cartão de crédito no regime de juros compostos é de aproximadamente:",
    options: [
      { id: "a", text: "213,8% ao ano.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "120,0% ao ano.", isCorrect: false, distractorRationale: "Essa seria a taxa sob regime de juros simples proporcionais (10% · 12), desconsiderando juros sobre juros." },
      { id: "c", text: "313,8% ao ano.", isCorrect: false, distractorRationale: "Esse é o fator acumulado (1 + i_a = 3,138), do qual deve ser subtraído 1 para achar a taxa i_a = 2,138 = 213,8%." },
      { id: "d", text: "100,0% ao ano.", isCorrect: false, distractorRationale: "Chute sem fundamentação de cálculo exponencial." },
      { id: "e", text: "12,0% ao ano.", isCorrect: false, distractorRationale: "Dividiu por 10 em vez de capitalizar." }
    ],
    detailedExplanation: {
      summary: "No regime de juros compostos, taxas equivalentes seguem a relação (1 + i_ano) = (1 + i_mês)¹². Juros sobre juros provocam crescimento exponencial.",
      stepByStep: [
        "Fator mensal: 1 + i_m = 1 + 0,10 = 1,10.",
        "Fator anual acumulado: 1 + i_a = (1,10)¹².",
        "Dado do enunciado: (1,10)¹² ≈ 3,138.",
        "Isolando a taxa anual: i_a = 3,138 - 1 = 2,138.",
        "Em porcentagem: 2,138 · 100% = 213,8% ao ano.",
        "Observe a enorme diferença: o cálculo ingênuo daria 120%, mas a taxa real é quase o dobro (213,8%)!"
      ],
      coreConcept: "Taxas Equivalentes em Juros Compostos e Efeito Exponencial dos Juros sobre Juros",
      trapWarning: "Cuidado: do fator acumulado 3,138 deve-se SEMPRE subtrair 1 antes de multiplicar por 100% para obter a taxa de juros!"
    },
    commonTraps: [
      "Esquecer de subtrair 1 do fator de acumulação de capital",
      "Multiplicar 10% por 12 meses como se fosse juros simples"
    ],
    tags: ["juros-compostos", "taxas-equivalentes", "cartao-de-credito", "exponencial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-009",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Lucro sobre Preço de Custo vs Lucro sobre Preço de Venda",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um feirante adquire caixas de frutas pelo preço de custo de R$ 80,00 a unidade e deseja revendê-las com uma margem de lucro de 20% calculada sobre o preço final de venda.",
      source: "ENEM Comércio e Formação de Preço"
    },
    prompt: "Por qual preço final de venda o feirante deve comercializar cada caixa de frutas para garantir essa margem de 20% sobre a receita de venda?",
    options: [
      { id: "a", text: "R$ 100,00", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 96,00", isCorrect: false, distractorRationale: "Calculou 20% sobre o preço de CUSTO (80 + 16 = 96), mas a margem pedida foi sobre o PREÇO DE VENDA." },
      { id: "c", text: "R$ 120,00", isCorrect: false, distractorRationale: "Multiplicou por 1,5 sem relação com os dados." },
      { id: "d", text: "R$ 88,00", isCorrect: false, distractorRationale: "Calculou apenas 10% sobre o custo." },
      { id: "e", text: "R$ 104,00", isCorrect: false, distractorRationale: "Somou 20% e depois adicionou 10%." }
    ],
    detailedExplanation: {
      summary: "Lucro sobre o preço de venda significa que Venda = Custo + 0,20 · Venda. Logo, Custo = 0,80 · Venda.",
      stepByStep: [
        "Preço de Custo (C) = R$ 80,00.",
        "Lucro (L) = 20% do Preço de Venda (V) = 0,20 · V.",
        "Equação básica: V = C + L → V = 80 + 0,20 · V.",
        "V - 0,20 · V = 80 → 0,80 · V = 80.",
        "V = 80 / 0,80 = R$ 100,00.",
        "Conferência: Vendeu por 100 e lucrou 20 (20/100 = 20% sobre a venda). Se vendesse por 96, o lucro seria 16 reais, o que daria apenas 16/96 = 16,6% da venda."
      ],
      coreConcept: "Margem de Lucro sobre a Venda vs Margem sobre o Custo (Markup)",
      trapWarning: "Cuidado redobrado: 'lucro sobre o custo' é C · (1 + i); 'lucro sobre a venda' é C / (1 - i)."
    },
    commonTraps: [
      "Calcular 20% sobre 80 e somar (achando R$ 96,00)",
      "Não ler com atenção se a porcentagem incide sobre o custo ou sobre a venda"
    ],
    tags: ["margem-de-lucro", "preco-de-venda", "preco-de-custo", "comercio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-010",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Antecipação de Parcelas e Desconto Composto",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma pessoa realizou uma compra a prazo em que a última parcela, com valor nominal de R$ 1.210,00, tem vencimento previsto para exatamente 2 meses a contar de hoje. O contrato estipula juros compostos de 10% ao mês. A pessoa recebeu um valor inesperado e decidiu quitar essa parcela hoje mesmo (antecipação de 2 meses).",
      source: "ENEM Direitos do Consumidor e Desconto Racional"
    },
    prompt: "Com base no Código de Defesa do Consumidor (que garante redução proporcional dos juros na liquidação antecipada), o valor presente que essa pessoa deve pagar hoje para quitar essa parcela é de:",
    options: [
      { id: "a", text: "R$ 1.000,00", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 968,00", isCorrect: false, distractorRationale: "Calculou desconto comercial ('por fora') fazendo 1210 · (1 - 0,20)." },
      { id: "c", text: "R$ 1.100,00", isCorrect: false, distractorRationale: "Descontou apenas 1 mês em vez dos 2 meses de antecipação." },
      { id: "d", text: "R$ 1.050,00", isCorrect: false, distractorRationale: "Erro na aplicação da divisão exponencial." },
      { id: "e", text: "R$ 1.210,00", isCorrect: false, distractorRationale: "Cobrou o valor nominal integral sem abater os juros futuros." }
    ],
    detailedExplanation: {
      summary: "Na liquidação antecipada de dívidas com juros compostos, traz-se o valor futuro a valor presente descapitalizando pela fórmula Valor Presente = Valor Futuro / (1 + i)ᵗ.",
      stepByStep: [
        "Valor Futuro (Nominal): M = R$ 1.210,00.",
        "Taxa mensal: i = 10% = 0,10.",
        "Tempo antecipado: t = 2 meses.",
        "Fator de capitalização de 2 meses: (1 + i)² = (1,10)² = 1,21.",
        "Valor Presente (P) a pagar hoje: P = M / (1,10)² = 1.210 / 1,21 = R$ 1.000,00."
      ],
      coreConcept: "Valor Presente Líquido e Desconto Racional Composto na Quitação Antecipada",
      trapWarning: "No regime de juros compostos, antecipar parcela NÃO é subtrair juros simples do valor final; é dividir pelo fator (1+i)ᵗ."
    },
    commonTraps: [
      "Subtrair 20% do valor de 1210 (desconto por fora indevido)",
      "Esquecer que o prazo de antecipação foi de dois meses"
    ],
    tags: ["quitacao-antecipada", "valor-presente", "desconto-racional", "direitos-consumidor"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-011",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Inflação e Taxa Real vs. Taxa Aparente (Equação de Fisher)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A administração financeira de um hospital universitário aplicou recursos de doações em um fundo de investimentos que rendeu uma taxa nominal aparente de 15,5% ao longo de 12 meses. No mesmo período, o índice oficial de inflação (IPCA) acumulou uma variação de 5,0%. A relação entre taxa aparente (i_ap), taxa de inflação (i_inf) e taxa real de ganho (i_real) é dada pela Equação de Fisher: (1 + i_ap) = (1 + i_real) · (1 + i_inf).",
      source: "ENEM / Matemática Financeira e Poder de Compra"
    },
    prompt: "A taxa real de rendimento (ganho efetivo de poder de compra) obtida pelo hospital nessa aplicação financeira foi de:",
    options: [
      { id: "a", text: "10,0%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "10,5%", isCorrect: false, distractorRationale: "Realizou a subtração direta ingênua 15,5% - 5,0% = 10,5%, ignorando a perda inflacionária sobre o rendimento." },
      { id: "c", text: "11,0%", isCorrect: false, distractorRationale: "Arredondou o valor ou utilizou taxa inflacionária de 4,5%." },
      { id: "d", text: "9,5%", isCorrect: false, distractorRationale: "Subtraiu mais 1% arbitrário do cálculo." },
      { id: "e", text: "8,0%", isCorrect: false, distractorRationale: "Dividiu a taxa nominal pela metade e somou 0,25." }
    ],
    detailedExplanation: {
      summary: "Pela Equação de Fisher, a taxa real desconta o impacto da inflação: (1 + i_real) = (1 + i_aparente) / (1 + i_inflação).",
      stepByStep: [
        "Taxa aparente: i_ap = 15,5% = 0,155, logo (1 + i_ap) = 1,155.",
        "Taxa de inflação: i_inf = 5,0% = 0,05, logo (1 + i_inf) = 1,05.",
        "Equação de Fisher: 1 + i_real = 1,155 / 1,05.",
        "Efetuando a divisão: 1,155 / 1,05 = 1,10.",
        "Portanto: i_real = 1,10 - 1 = 0,10 = 10,0% ao ano."
      ],
      coreConcept: "Taxa Real vs. Taxa Aparente e Efeito Corrosivo da Inflação",
      trapWarning: "A taxa real NÃO é a simples subtração das taxas percentuais! Em matemática financeira rigorosa, divide-se os fatores de correção."
    },
    commonTraps: ["subtrair as taxas diretamente (15,5 - 5 = 10,5%)", "esquecer de subtrair 1 no final"],
    tags: ["taxa real", "taxa aparente", "inflacao", "equacao de fisher", "poder de compra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-012",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Sistema de Amortização Constante (SAC)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma cooperativa de profissionais de saúde financiou a compra de um tomógrafo computadorizado no valor total de R$ 360.000,00 pelo Sistema de Amortização Constante (SAC). O contrato foi firmado para quitação em 36 parcelas mensais sucessivas, com juros fixados em 1,0% ao mês incidentes sempre sobre o saldo devedor remanescente antes de cada pagamento.",
      source: "ENEM / Sistemas de Amortização e Crédito"
    },
    prompt: "Os valores da primeira parcela (P₁) e da segunda parcela (P₂) a serem pagas pela cooperativa médica correspondem, respectivamente, a:",
    options: [
      { id: "a", text: "R$ 13.600,00 e R$ 13.500,00", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 13.600,00 e R$ 13.600,00", isCorrect: false, distractorRationale: "Assumiu parcelas fixas típicas da Tabela Price em vez de parcelas decrescentes do SAC." },
      { id: "c", text: "R$ 10.000,00 e R$ 10.000,00", isCorrect: false, distractorRationale: "Calculou apenas a amortização constante sem incluir os juros contratuais." },
      { id: "d", text: "R$ 13.500,00 e R$ 13.400,00", isCorrect: false, distractorRationale: "Calculou os juros da primeira parcela sobre o saldo já amortizado." },
      { id: "e", text: "R$ 14.000,00 e R$ 13.800,00", isCorrect: false, distractorRationale: "Errou o cálculo dos juros aplicando taxa de 1,11%." }
    ],
    detailedExplanation: {
      summary: "No Sistema SAC, a amortização mensal é fixa (A = Saldo / N) e as parcelas são decrescentes porque o saldo devedor diminui mês a mês (P = A + Juros).",
      stepByStep: [
        "Cálculo da amortização constante: A = R$ 360.000,00 / 36 parcelas = R$ 10.000,00 por mês.",
        "Mês 1: Saldo devedor inicial = R$ 360.000,00. Juros do 1º mês = 1% de 360.000 = R$ 3.600,00. Parcela 1: P₁ = A + J₁ = 10.000 + 3.600 = R$ 13.600,00.",
        "Mês 2: Saldo devedor após a 1ª amortização = 360.000 - 10.000 = R$ 350.000,00. Juros do 2º mês = 1% de 350.000 = R$ 3.500,00. Parcela 2: P₂ = A + J₂ = 10.000 + 3.500 = R$ 13.500,00.",
        "Conclusão: a cada mês que passa, a parcela reduz exatamente R$ 100,00 (1% de R$ 10.000)."
      ],
      coreConcept: "Sistema de Amortização Constante (SAC): Amortização Fixa e Parcelas Decrescentes",
      trapWarning: "No SAC as parcelas diminuem a cada mês; se as parcelas fossem iguais, seria a Tabela Price (Sistema Francês)!"
    },
    commonTraps: ["confundir SAC com Tabela Price", "esquecer de abater a amortizacao do saldo devedor para o calculo dos proximos juros"],
    tags: ["SAC", "amortizacao", "financiamento", "juros sobre saldo devedor"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-013",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Juros Embutidos em Compras Parceladas com Entrada",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na aquisição de computadores e servidores para o setor de telemedicina de um posto de saúde, a distribuidora apresenta duas propostas de pagamento para um lote cujo preço nominal de tabela é R$ 10.000,00:\nProposta 1: Pagamento à vista com 10% de desconto sobre o valor de tabela (R$ 9.000,00 no ato).\nProposta 2: Pagamento em duas parcelas de R$ 5.000,00 cada, sendo a primeira no ato da compra e a segunda após 30 dias.",
      source: "ENEM / Educação Financeira e Juros Reais Embutidos"
    },
    prompt: "A taxa mensal efetiva de juros cobrada na Proposta 2 em relação ao preço real à vista praticado na Proposta 1 é de:",
    options: [
      { id: "a", text: "25% ao mês", isCorrect: true, distractorRationale: null },
      { id: "b", text: "10% ao mês", isCorrect: false, distractorRationale: "Confundiu a taxa de juros com a porcentagem de desconto do anúncio à vista." },
      { id: "c", text: "20% ao mês", isCorrect: false, distractorRationale: "Calculou a taxa dividindo os R$ 1.000 de juros pela parcela de R$ 5.000 (1.000 / 5.000 = 20%)." },
      { id: "d", text: "5% ao mês", isCorrect: false, distractorRationale: "Dividiu o percentual de desconto de 10% por 2 parcelas." },
      { id: "e", text: "15% ao mês", isCorrect: false, distractorRationale: "Somou o desconto de 10% com metade da taxa nominal." }
    ],
    detailedExplanation: {
      summary: "O valor à vista real é o montante com desconto (R$ 9.000,00). Ao pagar R$ 5.000,00 de entrada, financia-se apenas R$ 4.000,00 para pagar R$ 5.000,00 no mês seguinte.",
      stepByStep: [
        "Preço real à vista (com desconto): R$ 9.000,00.",
        "Entrada paga na Proposta 2: R$ 5.000,00 no ato da compra.",
        "Saldo que ficou efetivamente financiado: R$ 9.000,00 - R$ 5.000,00 = R$ 4.000,00.",
        "Valor pago após 30 dias pela segunda parcela: R$ 5.000,00.",
        "Juros pagos em 30 dias sobre o saldo financiado: R$ 5.000,00 - R$ 4.000,00 = R$ 1.000,00.",
        "Taxa efetiva mensal: i = Juros / Saldo Financiado = 1.000 / 4.000 = 0,25 = 25% ao mês."
      ],
      coreConcept: "Cálculo da Taxa Efetiva de Juros em Vendas com Entrada",
      trapWarning: "CUIDADO: A entrada não sofre juros! O capital financiado é (Preço à vista - Entrada), e NÃO o valor total ou a parcela."
    },
    commonTraps: ["calcular os juros sobre R$ 5.000 ao inves de R$ 4.000", "achar que 'sem juros' significa juro zero quando ha desconto a vista"],
    tags: ["juros embutidos", "compras a prazo", "taxa efetiva", "desconto a vista"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-014",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Equivalência de Taxas de Juros Compostos e Período Fracionário",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para modernizar a biblioteca digital acadêmica de uma faculdade pública de medicina, uma verba suplementar de R$ 40.000,00 foi aplicada em um Certificado de Depósito Bancário (CDB) que remunera a uma taxa composta de 20% ao ano. A gestão financeira necessitou resgatar a totalidade do montante acumulado exatamente após 6 meses (meio ano) de aplicação. (Dado: utilize a aproximação √1,20 ≈ 1,095).",
      source: "ENEM / Taxas Equivalentes e Juros Compostos Fracionários"
    },
    prompt: "O valor bruto do montante resgatado pela faculdade ao término desse semestre foi de aproximadamente:",
    options: [
      { id: "a", text: "R$ 43.800,00", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 44.000,00", isCorrect: false, distractorRationale: "Utilizou taxa proporcional simples de 10% no semestre (40 000 × 1,10 = 44 000), ignorando a equivalência geométrica dos juros compostos." },
      { id: "c", text: "R$ 48.000,00", isCorrect: false, distractorRationale: "Aplicou a taxa anual integral de 20% sobre o período de apenas 6 meses." },
      { id: "d", text: "R$ 42.000,00", isCorrect: false, distractorRationale: "Dividiu a taxa anual por 4 em vez de calcular a taxa semestral equivalente." },
      { id: "e", text: "R$ 41.900,00", isCorrect: false, distractorRationale: "Errou a multiplicação decimal de 40 000 por 1,095." }
    ],
    detailedExplanation: {
      summary: "Em juros compostos, a taxa semestral equivalente à taxa anual é obtida pela raiz quadrada: (1 + i_semestral)² = (1 + i_anual).",
      stepByStep: [
        "Capital inicial: C = R$ 40.000,00.",
        "Prazo da aplicação: 6 meses = 0,5 ano (t = 1/2 ano).",
        "Taxa anual: i = 20% = 0,20. Fator anual: (1 + i) = 1,20.",
        "Fórmula do montante com tempo fracionário: M = C · (1 + i)^t = 40.000 · (1,20)^0,5 = 40.000 · √1,20.",
        "Substituindo o dado √1,20 ≈ 1,095: M = 40.000 × 1,095 = R$ 43.800,00."
      ],
      coreConcept: "Taxas Equivalentes no Regime Composto e Exponentes Fracionários",
      trapWarning: "No regime composto, metade do ano NÃO rende metade da taxa! A taxa semestral equivalente a 20% ao ano é 9,5% (√1,20 - 1), e não 10%."
    },
    commonTraps: ["usar taxa proporcional simples (10%) no regime composto", "aplicar o periodo inteiro de 1 ano"],
    tags: ["taxas equivalentes", "juros compostos", "expoente fracionario", "investimentos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-015",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Desconto Racional Simples (Por Dentro) vs. Desconto Comercial (Por Fora)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma empresa fornecedora de medicamentos detém uma duplicata mercantil com valor nominal de face de R$ 13.200,00 com vencimento em 4 meses. Precisando de liquidez para pagamento de salários, ela desconta o título em uma instituição de fomento que pratica a taxa de desconto racional simples ('por dentro') de 2,5% ao mês. Na modalidade racional simples, o valor nominal (N) relaciona-se com o valor atual resgatado (A) pela relação N = A · (1 + i · t).",
      source: "ENEM / Operações de Crédito e Desconto Comercial vs. Racional"
    },
    prompt: "O valor líquido atual recebido pela fornecedora e o respectivo desconto financeiro racional obtido nessa operação foram de:",
    options: [
      { id: "a", text: "R$ 12.000,00 e R$ 1.200,00", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 11.880,00 e R$ 1.320,00", isCorrect: false, distractorRationale: "Calculou pela modalidade de desconto comercial simples ('por fora'), onde o juro incide sobre o valor nominal futuro: 13 200 × (1 - 0,10) = 11 880." },
      { id: "c", text: "R$ 12.200,00 e R$ 1.000,00", isCorrect: false, distractorRationale: "Errou a divisão fracionária dividindo por 1,08." },
      { id: "d", text: "R$ 10.000,00 e R$ 3.200,00", isCorrect: false, distractorRationale: "Aplicou taxa de juros de 8% ao mês." },
      { id: "e", text: "R$ 13.000,00 e R$ 200,00", isCorrect: false, distractorRationale: "Considerou apenas 1 mês de desconto em vez de 4 meses." }
    ],
    detailedExplanation: {
      summary: "No desconto racional simples (por dentro), a taxa incide sobre o valor atual A (capital real): N = A · (1 + i·t), logo A = N / (1 + i·t).",
      stepByStep: [
        "Dados: Valor nominal N = R$ 13.200,00; taxa i = 2,5% = 0,025 ao mês; prazo t = 4 meses.",
        "Produto taxa × tempo: i · t = 0,025 × 4 = 0,10 (10%).",
        "Valor atual A: 13.200 = A · (1 + 0,10)  =>  A = 13.200 / 1,10 = R$ 12.000,00.",
        "Desconto racional (D_r): D_r = N - A = R$ 13.200,00 - R$ 12.000,00 = R$ 1.200,00.",
        "Nota: Se a operação utilizasse desconto comercial ('por fora'), o desconto seria D_c = N · i · t = 13.200 · 0,10 = R$ 1.320,00, gerando menor valor líquido para o cliente."
      ],
      coreConcept: "Diferença entre Desconto Racional (Por Dentro) e Comercial (Por Fora)",
      trapWarning: "Desconto racional é calculado sobre o valor PRESENTE (divide por 1+it); desconto comercial é calculado sobre o valor NOMINAL futuro (multiplica por it)!"
    },
    commonTraps: ["aplicar formula de desconto comercial quando a questao pede racional", "esquecer que o desconto e a diferenca N - A"],
    tags: ["desconto racional", "desconto por dentro", "valor nominal", "valor atual"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-016",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Séries Uniformes de Depósitos e Poupança Programada",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para constituir um fundo de reserva emergencial para aquisição de testes diagnósticos rápidos, o diretor financeiro de um hemocentro planejou três depósitos mensais consecutivos de exatamente R$ 10.000,00 cada um, realizados sempre no último dia dos meses de janeiro, fevereiro e março. O dinheiro é depositado em uma conta remunerada que rende juros compostos de 2% ao mês sobre o saldo credor a cada virada de mês.",
      source: "ENEM / Matemática Financeira e Poupança Programada"
    },
    prompt: "Logo após a realização do terceiro depósito (no último dia de março), o montante total acumulado nessa conta de reserva será de:",
    options: [
      { id: "a", text: "R$ 30.604,00", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 30.600,00", isCorrect: false, distractorRationale: "Calculou pelo regime de juros simples somando 2% e 4% sobre R$ 10.000." },
      { id: "c", text: "R$ 31.200,00", isCorrect: false, distractorRationale: "Aplicou juros de 3 meses cheios para todos os três depósitos indiscriminadamente." },
      { id: "d", text: "R$ 30.000,00", isCorrect: false, distractorRationale: "Somou apenas os depósitos nominais sem considerar o rendimento dos juros compostos." },
      { id: "e", text: "R$ 30.800,00", isCorrect: false, distractorRationale: "Errou a potência de (1,02)² assumindo 1,06." }
    ],
    detailedExplanation: {
      summary: "Cada parcela depositada rende por um intervalo de tempo diferente até a data final de apuração do saldo.",
      stepByStep: [
        "Depósito 1 (fim de janeiro): rende durante fevereiro e março (2 meses). Montante 1 = 10.000 × (1,02)² = 10.000 × 1,0404 = R$ 10.404,00.",
        "Depósito 2 (fim de fevereiro): rende durante março (1 mês). Montante 2 = 10.000 × (1,02)¹ = R$ 10.200,00.",
        "Depósito 3 (fim de março): acabou de ser depositado no dia da apuração (0 meses). Montante 3 = R$ 10.000,00.",
        "Montante total acumulado: 10.404 + 10.200 + 10.000 = R$ 30.604,00."
      ],
      coreConcept: "Valor Futuro de Séries Uniformes de Pagamentos (Anuidades)",
      trapWarning: "Atenção ao momento de cada depósito: o último depósito não rende juros se o saldo for medido no mesmo instante em que ele é feito!"
    },
    commonTraps: ["aplicar o mesmo tempo de rendimento para todos os depositos", "ignorar o juro sobre juro no primeiro deposito"],
    tags: ["series de pagamentos", "poupanca programada", "juros compostos", "montante acumulado"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-017",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Erosão Inflacionária e Perda Real de Poder de Compra",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Durante um período de 12 meses marcado por fortes oscilações econômicas, a cesta de medicamentos e insumos básicos de um ambulatório municipal sofreu uma inflação de preços acumulada de 25%. No mesmo intervalo, a dotação orçamentária do ambulatório recebeu um reajuste nominal de apenas 10%.",
      source: "ENEM / Poder de Compra e Economia Aplicada"
    },
    prompt: "Com base nesses dados econômicos, a perda real do poder de compra sofrida pelo orçamento desse ambulatório ao final do período foi de:",
    options: [
      { id: "a", text: "12,0%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "15,0%", isCorrect: false, distractorRationale: "Realizou a subtração direta ingênua dos índices percentuais (25% - 10% = 15%)." },
      { id: "c", text: "13,6%", isCorrect: false, distractorRationale: "Calculou a razão 15 / 110 em vez de ponderar pelo novo índice inflacionado." },
      { id: "d", text: "10,0%", isCorrect: false, distractorRationale: "Confundiu a perda com a taxa do reajuste concedido." },
      { id: "e", text: "8,0%", isCorrect: false, distractorRationale: "Dividiu a diferença percentual por 2." }
    ],
    detailedExplanation: {
      summary: "O poder de compra relativo é a razão entre o índice de reajuste e o índice de preços: Poder de Compra = (1 + reajuste) / (1 + inflação).",
      stepByStep: [
        "Fator de aumento da renda orçamentária: 1 + 0,10 = 1,10.",
        "Fator de aumento dos preços de mercado: 1 + 0,25 = 1,25.",
        "Novo poder de compra relativo: P = 1,10 / 1,25.",
        "Multiplicando numerador e denominador por 4: P = 4,40 / 5 = 0,88 (ou seja, 88% do poder de compra original).",
        "Perda percentual de poder de compra: 1,00 - 0,88 = 0,12 = 12,0%."
      ],
      coreConcept: "Cálculo da Variação do Poder de Compra da Moeda",
      trapWarning: "Subtrair porcentagens de reajuste e inflação é um erro clássico do ENEM! O poder de compra é SEMPRE a divisão entre os fatores de correção."
    },
    commonTraps: ["subtrair 25% - 10% = 15%", "esquecer de subtrair de 1 para achar a perda"],
    tags: ["poder de compra", "inflacao", "orcamento", "variacao percentual"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-018",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Custo Efetivo Total (CET) e Taxas Administrativas Embutidas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A diretoria de uma clínica de hemodiálise negociou um empréstimo bancário de R$ 50.000,00 para liquidação integral em parcela única após 1 ano. A taxa nominal de juros pactuada no contrato foi de 12% ao ano. Entretanto, a instituição financeira descontou no ato da liberação uma taxa de abertura de crédito (TAC) de R$ 2.000,00, liberando em conta corrente exatamente R$ 48.000,00. Ao final do ano, a clínica quitou o montante contratual de R$ 56.000,00 (correspondente ao principal de 50.000 corrigido em 12%).",
      source: "ENEM / Custo Efetivo Total (CET) e Transparência Bancária"
    },
    prompt: "O Custo Efetivo Total (CET) anual dessa operação de empréstimo, medido sobre os recursos efetivamente recebidos pela clínica, foi de:",
    options: [
      { id: "a", text: "16,67% ao ano", isCorrect: true, distractorRationale: null },
      { id: "b", text: "12,00% ao ano", isCorrect: false, distractorRationale: "Considerou apenas a taxa nominal de juros contratual, ignorando a taxa TAC descontada na largada." },
      { id: "c", text: "16,00% ao ano", isCorrect: false, distractorRationale: "Calculou os R$ 8.000 de acréscimo sobre os R$ 50.000 nominais (8.000 / 50.000 = 16%)." },
      { id: "d", text: "14,00% ao ano", isCorrect: false, distractorRationale: "Fez a média aritmética simples entre 12% e 16%." },
      { id: "e", text: "18,50% ao ano", isCorrect: false, distractorRationale: "Superestimou a incidência das taxas contratuais." }
    ],
    detailedExplanation: {
      summary: "O Custo Efetivo Total (CET) reflete o custo real do dinheiro em relação ao montante que realmente entrou no caixa do tomador.",
      stepByStep: [
        "Capital que a clínica realmente recebeu: C_efetivo = R$ 50.000,00 - R$ 2.000,00 = R$ 48.000,00.",
        "Montante total pago pela clínica ao final de 1 ano: M = R$ 50.000,00 × 1,12 = R$ 56.000,00.",
        "Custo financeiro total da operação: R$ 56.000,00 - R$ 48.000,00 = R$ 8.000,00.",
        "Taxa efetiva anual (CET): i_efetivo = 8.000 / 48.000 = 1 / 6 ≈ 0,16667 = 16,67% ao ano.",
        "Observe como o desconto da taxa de cadastro elevou o juro real de 12% para mais de 16,6%!"
      ],
      coreConcept: "Custo Efetivo Total (CET) e Impacto de Tarifas na Taxa Efetiva",
      trapWarning: "O CET deve ser SEMPRE calculado sobre o capital líquido efetivamente liberado, e não sobre o valor bruto do contrato!"
    },
    commonTraps: ["calcular o encargo sobre o valor nominal de 50.000", "ignorar a tarifa inicial na taxa efetiva"],
    tags: ["CET", "custo efetivo total", "tarifas bancarias", "taxa real de emprestimo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-019",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Duplicação de Capital sob Juros Compostos (Equação Exponencial)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um fundo patrimonial de um hospital filantrópico realizou uma aplicação de longo prazo em títulos públicos remunerados à taxa fixa de juros compostos de 6% ao ano. Para o planejamento de expansão das instalações físicas, os gestores necessitam saber o tempo mínimo necessário para que o montante acumulado dobre em relação ao capital investido inicialmente. (Dados: 1,06¹⁰ ≈ 1,791; 1,06¹¹ ≈ 1,898; 1,06¹² ≈ 2,012).",
      source: "ENEM / Funções Exponenciais e Matemática Financeira"
    },
    prompt: "O número mínimo de anos inteiros necessários para que o valor aplicado atinja pelo menos o dobro do capital inicial é de:",
    options: [
      { id: "a", text: "12 anos", isCorrect: true, distractorRationale: null },
      { id: "b", text: "17 anos", isCorrect: false, distractorRationale: "Calculou pelo regime de juros simples fazendo 100% / 6% ≈ 16,7 anos." },
      { id: "c", text: "10 anos", isCorrect: false, distractorRationale: "Estimou que 10 anos seriam suficientes, mas em 10 anos o capital cresce apenas 79% (fator 1,791)." },
      { id: "d", text: "11 anos", isCorrect: false, distractorRationale: "Em 11 anos o fator é 1,898, ainda inferior ao dobro (2,000)." },
      { id: "e", text: "8 anos", isCorrect: false, distractorRationale: "Subestimou grosseiramente o tempo de duplicação." }
    ],
    detailedExplanation: {
      summary: "Para dobrar o capital sob juros compostos, busca-se t tal que (1 + i)ᵗ ≥ 2.",
      stepByStep: [
        "Fórmula do montante: M = C · (1 + i)ᵗ.",
        "Condição de duplicação: M ≥ 2 C  =>  (1,06)ᵗ ≥ 2.",
        "Analisando os dados fornecidos:",
        "Para t = 10 anos: 1,06¹⁰ ≈ 1,791 < 2.",
        "Para t = 11 anos: 1,06¹¹ ≈ 1,898 < 2 (ainda não dobrou).",
        "Para t = 12 anos: 1,06¹² ≈ 2,012 ≥ 2 (dobrou e ultrapassou ligeiramente o dobro).",
        "Logo, são necessários no mínimo 12 anos inteiros de aplicação.",
        "(Regra empírica dos 72: 72 / 6 = 12 anos)."
      ],
      coreConcept: "Duplicação de Capital em Juros Compostos e Comparação com Dados de Potência",
      trapWarning: "Certifique-se de escolher o primeiro número inteiro de anos em que o fator ultrapassa 2,000!"
    },
    commonTraps: ["calcular por juros simples obtendo 17 anos", "escolher 11 anos onde o capital quase dobrou mas nao atingiu o dobro"],
    tags: ["duplicacao de capital", "regra dos 72", "juros compostos", "funcao exponencial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-FIN-020",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Ponto de Equilíbrio (Break-Even) e Payback de Investimento",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um laboratório de análises clínicas investiu R$ 120.000,00 na aquisição de um analisador bioquímico automatizado. Para cada exame realizado, o custo variável de reagentes e descartáveis é de R$ 15,00, e o preço médio repassado pelos convênios é de R$ 55,00 por exame. O custo fixo mensal de manutenção preventiva e calibração do aparelho é de R$ 2.000,00. O laboratório opera com uma demanda estável de 500 exames por mês.",
      source: "ENEM / Matemática Aplicada à Gestão e Análise de Investimentos"
    },
    prompt: "Considerando que o faturamento e os pagamentos ocorrem ao término de cada mês civil, o prazo mínimo de meses completos necessários para amortizar integralmente o investimento inicial de R$ 120.000,00 (payback simples) é de:",
    options: [
      { id: "a", text: "7 meses", isCorrect: true, distractorRationale: null },
      { id: "b", text: "6 meses", isCorrect: false, distractorRationale: "Ao término de 6 meses o retorno acumulado é de R$ 108.000,00, ainda insuficiente para quitar os R$ 120.000,00." },
      { id: "c", text: "8 meses", isCorrect: false, distractorRationale: "Adicionou um mês a mais desnecessariamente." },
      { id: "d", text: "10 meses", isCorrect: false, distractorRationale: "Errou a margem de contribuição dividindo o investimento apenas pelo faturamento bruto." },
      { id: "e", text: "5 meses", isCorrect: false, distractorRationale: "Desconsiderou o custo fixo mensal de manutenção de R$ 2.000,00." }
    ],
    detailedExplanation: {
      summary: "O payback simples calcula em quanto tempo o lucro líquido acumulado cobre o custo inicial do investimento.",
      stepByStep: [
        "Margem de contribuição por exame: Preço - Custo Variável = R$ 55,00 - R$ 15,00 = R$ 40,00 por exame.",
        "Margem de contribuição total para 500 exames mensais: 500 × R$ 40,00 = R$ 20.000,00.",
        "Lucro operacional líquido mensal: Margem Total - Custos Fixos = R$ 20.000,00 - R$ 2.000,00 = R$ 18.000,00 por mês.",
        "Tempo de retorno: R$ 120.000,00 / R$ 18.000,00/mês = 120 / 18 = 6,67 meses.",
        "Como a apuração contábil se dá em meses fechados: ao fim de 6 meses têm-se R$ 108.000,00 (falta pagar R$ 12.000); ao fim do 7º mês atingem-se R$ 126.000,00, liquidando integralmente o investimento.",
        "Portanto, são necessários 7 meses completos."
      ],
      coreConcept: "Ponto de Retorno de Investimento (Payback) e Margem de Contribuição",
      trapWarning: "Cuidado ao arredondar frações de tempo: se são necessários 6,67 meses, a liquidação total só é atingida no 7º mês!"
    },
    commonTraps: ["arredondar 6,67 para baixo (6 meses)", "esquecer de subtrair os custos fixos mensais"],
    tags: ["payback", "ponto de equilibrio", "margem de contribuicao", "gestao financeira"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

