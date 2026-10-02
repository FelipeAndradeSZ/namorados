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
  }
];
