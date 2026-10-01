export const QUESTIONS_PORCENTAGEM = [
  {
    id: "MAT-PORC-001",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Porcentagem",
    subtopic: "Aumento Percentual",
    difficulty: 1,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    cityId: "sao-paulo",
    hubId: "metro-sp",
    context: {
      supportText: "A tarifa do transporte público na cidade de São Paulo sofre reajustes periódicos para acompanhar a inflação e os custos de operação do sistema. Em um determinado ano, a tarifa do Metrô SP passou de R$ 4,00 para R$ 4,40.",
      source: "Original"
    },
    prompt: "Qual foi o percentual de aumento aplicado à tarifa do Metrô SP nesse período?",
    options: [
      { id: "a", text: "4%", isCorrect: false, distractorRationale: "O aluno pode confundir os 40 centavos com 4% em relação ao total." },
      { id: "b", text: "8%", isCorrect: false, distractorRationale: "O aluno pode calcular 0,40 em relação a 5 reais em vez do valor original." },
      { id: "c", text: "10%", isCorrect: true, distractorRationale: null },
      { id: "d", text: "14%", isCorrect: false, distractorRationale: "Erro de cálculo aleatório na divisão." },
      { id: "e", text: "40%", isCorrect: false, distractorRationale: "O aluno pode achar que 0,40 reais equivalem a 40%." }
    ],
    detailedExplanation: {
      summary: "O aumento foi de 10%, pois o valor aumentou em R$ 0,40 sobre o valor inicial de R$ 4,00.",
      stepByStep: [
        "Passo 1: Calcule a diferença entre o valor final e o inicial: 4,40 - 4,00 = 0,40.",
        "Passo 2: Divida a diferença pelo valor inicial para encontrar a taxa de aumento: 0,40 / 4,00 = 0,10.",
        "Passo 3: Multiplique por 100 para converter para porcentagem: 0,10 * 100 = 10%."
      ],
      coreConcept: "Aumento percentual sobre um valor base.",
      trapWarning: "Sempre calcule a porcentagem de aumento sobre o valor original (inicial), não sobre o valor final."
    },
    commonTraps: ["base-errada", "confusao-decimal"],
    tags: ["aumento", "metro", "cotidiano"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-002",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Porcentagem",
    subtopic: "Desconto",
    difficulty: 2,
    estimatedTimeSeconds: 90,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: false,
    cityId: "sao-paulo",
    context: {
      supportText: "Durante a Black Friday, uma loja de eletrônicos em um shopping de São Paulo anuncia um smartphone que custava R$ 2.000,00 com um desconto de 15%.",
      source: "Original"
    },
    prompt: "Qual será o valor pago pelo cliente que comprar este smartphone com o desconto anunciado?",
    options: [
      { id: "a", text: "R$ 1.500,00", isCorrect: false, distractorRationale: "O aluno pode calcular 25% de desconto por engano." },
      { id: "b", text: "R$ 1.700,00", isCorrect: true, distractorRationale: null },
      { id: "c", text: "R$ 1.850,00", isCorrect: false, distractorRationale: "O aluno pode subtrair 150 em vez de 300 (calculou 15% de 1000)." },
      { id: "d", text: "R$ 1.970,00", isCorrect: false, distractorRationale: "O aluno pode subtrair 30 em vez de 300." },
      { id: "e", text: "R$ 2.300,00", isCorrect: false, distractorRationale: "O aluno pode ter adicionado o valor do desconto ao invés de subtrair." }
    ],
    detailedExplanation: {
      summary: "O valor com desconto é R$ 1.700,00 após abater R$ 300,00 do preço original.",
      stepByStep: [
        "Passo 1: Calcule o valor do desconto: 15% de 2000 = (15/100) * 2000 = 300.",
        "Passo 2: Subtraia o desconto do valor original: 2000 - 300 = 1700."
      ],
      coreConcept: "Cálculo de desconto simples.",
      trapWarning: "Cuidado para não somar o desconto ao invés de subtrair."
    },
    commonTraps: ["erro-de-operacao"],
    tags: ["desconto", "black-friday"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-003",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Porcentagem",
    subtopic: "Aumento Percentual",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    cityId: "brasilia",
    hubId: "congresso-nacional",
    context: {
      supportText: "Em Brasília, foi aprovada uma lei que reajusta o salário de uma categoria de servidores públicos em duas etapas: um aumento de 5% no primeiro semestre, seguido de um aumento de 4% no segundo semestre, ambos aplicados sobre o salário imediatamente anterior.",
      source: "Inspirada em ENEM"
    },
    prompt: "Um servidor que recebia R$ 5.000,00 antes desses reajustes passará a receber, após as duas etapas, um salário de:",
    options: [
      { id: "a", text: "R$ 5.450,00", isCorrect: false, distractorRationale: "O aluno pode simplesmente somar as porcentagens (9%) e calcular sobre 5000." },
      { id: "b", text: "R$ 5.460,00", isCorrect: true, distractorRationale: null },
      { id: "c", text: "R$ 5.475,00", isCorrect: false, distractorRationale: "Erro de cálculo aritmético comum ao multiplicar." },
      { id: "d", text: "R$ 5.500,00", isCorrect: false, distractorRationale: "O aluno pode arredondar para 10% de aumento total." },
      { id: "e", text: "R$ 5.510,00", isCorrect: false, distractorRationale: "Calculou 5% + 5% acidentalmente." }
    ],
    detailedExplanation: {
      summary: "O salário final é calculado aplicando os aumentos sucessivamente, totalizando R$ 5.460,00.",
      stepByStep: [
        "Passo 1: Aumento no 1º semestre: 5000 * 1,05 = 5250.",
        "Passo 2: Aumento no 2º semestre sobre o novo valor: 5250 * 1,04 = 5460."
      ],
      coreConcept: "Aumentos sucessivos (juros compostos).",
      trapWarning: "Nunca some as taxas de aumentos sucessivos. Calcule um de cada vez ou multiplique os fatores de aumento (1,05 * 1,04 = 1,092)."
    },
    commonTraps: ["soma-de-taxas"],
    tags: ["aumento-sucessivo", "salario"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-004",
    area: "matematica",
    competence: 1,
    skill: 1,
    topic: "Porcentagem",
    subtopic: "Razões e Proporções",
    difficulty: 1,
    estimatedTimeSeconds: 90,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: false,
    context: {
      supportText: "Em uma pesquisa com 250 estudantes sobre a preferência por esportes, constatou-out que 110 preferem futebol.",
      source: "Original"
    },
    prompt: "Qual é a porcentagem de estudantes que preferem futebol?",
    options: [
      { id: "a", text: "22%", isCorrect: false, distractorRationale: "O aluno pode ter dividido por 5 em vez de calcular sobre o total correto." },
      { id: "b", text: "35%", isCorrect: false, distractorRationale: "Chute baseado em números redondos." },
      { id: "c", text: "44%", isCorrect: true, distractorRationale: null },
      { id: "d", text: "55%", isCorrect: false, distractorRationale: "Pode ter dividido 250 por 110 de forma errada." },
      { id: "e", text: "110%", isCorrect: false, distractorRationale: "O aluno pegou o número 110 e assumiu que era a porcentagem." }
    ],
    detailedExplanation: {
      summary: "Para achar a porcentagem, divide-se a parte pelo todo e multiplica-se por 100: (110/250)*100 = 44%.",
      stepByStep: [
        "Passo 1: Estabeleça a fração: 110 / 250.",
        "Passo 2: Simplifique ou divida: 11 / 25 = 0,44.",
        "Passo 3: Multiplique por 100: 44%."
      ],
      coreConcept: "Conversão de razão para porcentagem.",
      trapWarning: "Lembre-se que porcentagem é uma fração com denominador 100."
    },
    commonTraps: ["erro-de-divisao"],
    tags: ["pesquisa", "razao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-005",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Aumentos e Descontos Sucessivos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    cityId: "sao-paulo",
    hubId: "b3-bolsa",
    context: {
      supportText: "Um investidor na B3 (Bolsa de Valores do Brasil) comprou ações de uma empresa de tecnologia. No primeiro mês, as ações valorizaram 20%. No mês seguinte, devido a uma crise no setor, as ações sofreram uma queda de 20%.",
      source: "Inspirada em ENEM"
    },
    prompt: "Em relação ao valor inicial investido, ao final do segundo mês o investidor teve um:",
    options: [
      { id: "a", text: "Lucro de 4%.", isCorrect: false, distractorRationale: "O aluno pode aplicar um cálculo invertido ou errar a multiplicação." },
      { id: "b", text: "Lucro de 2%.", isCorrect: false, distractorRationale: "Chute aleatório." },
      { id: "c", text: "Empate (nem lucro, nem prejuízo).", isCorrect: false, distractorRationale: "O aluno soma +20% e -20%, concluindo erroneamente que volta ao valor original." },
      { id: "d", text: "Prejuízo de 2%.", isCorrect: false, distractorRationale: "Erro de cálculo aritmético na variação." },
      { id: "e", text: "Prejuízo de 4%.", isCorrect: true, distractorRationale: null }
    ],
    detailedExplanation: {
      summary: "Aumentar 20% e depois diminuir 20% resulta em uma perda de 4% em relação ao valor inicial.",
      stepByStep: [
        "Passo 1: Aumento de 20% significa multiplicar o valor por 1,20.",
        "Passo 2: Queda de 20% significa multiplicar o novo valor por 0,80.",
        "Passo 3: Fator acumulado = 1,20 * 0,80 = 0,96.",
        "Passo 4: 0,96 representa 96% do valor original, ou seja, uma queda (prejuízo) de 4%."
      ],
      coreConcept: "Aumentos e descontos sucessivos.",
      trapWarning: "Um aumento seguido de um desconto de mesma porcentagem SEMPRE resulta em prejuízo em relação ao valor inicial, pois o desconto incide sobre um valor maior."
    },
    commonTraps: ["soma-zero"],
    tags: ["acoes", "bolsa", "prejuizo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-006",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Juros Simples",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um microempresário precisa de capital de giro e pega um empréstimo de R$ 12.000,00 em um banco que cobra juros simples de 3% ao mês. Ele planeja quitar a dívida em parcela única após 8 meses.",
      source: "Original"
    },
    prompt: "Qual será o valor total (montante) pago pelo microempresário ao final desses 8 meses?",
    options: [
      { id: "a", text: "R$ 14.880,00", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 15.200,00", isCorrect: false, distractorRationale: "Calculou errado a taxa mensal (talvez usou 4%)." },
      { id: "c", text: "R$ 15.680,00", isCorrect: false, distractorRationale: "O aluno calculou juros compostos em vez de simples." },
      { id: "d", text: "R$ 16.000,00", isCorrect: false, distractorRationale: "O aluno pode ter se confundido com o tempo ou a taxa." },
      { id: "e", text: "R$ 2.880,00", isCorrect: false, distractorRationale: "O aluno encontrou apenas o valor dos juros, e não o montante total." }
    ],
    detailedExplanation: {
      summary: "O montante no regime de juros simples é a soma do capital inicial com os juros acumulados de R$ 2.880,00, totalizando R$ 14.880,00.",
      stepByStep: [
        "Passo 1: Fórmula dos Juros Simples: J = C * i * t.",
        "Passo 2: J = 12000 * 0,03 * 8.",
        "Passo 3: J = 360 * 8 = 2880.",
        "Passo 4: Montante = C + J = 12000 + 2880 = 14880."
      ],
      coreConcept: "Cálculo de montante em regime de juros simples.",
      trapWarning: "Leia com atenção se a questão pede os juros ou o montante (valor total a pagar)."
    },
    commonTraps: ["confundir-juros-com-montante"],
    tags: ["emprestimo", "juros-simples"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-007",
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
      supportText: "Marta investiu R$ 10.000,00 em um fundo de renda fixa que oferece uma rentabilidade de 10% ao ano, no regime de juros compostos.",
      source: "Original"
    },
    prompt: "Ao final de 3 anos, o montante acumulado por Marta será de:",
    options: [
      { id: "a", text: "R$ 13.000,00", isCorrect: false, distractorRationale: "O aluno aplicou a fórmula de juros simples (1000 * 3)." },
      { id: "b", text: "R$ 13.300,00", isCorrect: false, distractorRationale: "Erro no cálculo da terceira potência de 1,1." },
      { id: "c", text: "R$ 13.310,00", isCorrect: true, distractorRationale: null },
      { id: "d", text: "R$ 13.500,00", isCorrect: false, distractorRationale: "Erro de arredondamento." },
      { id: "e", text: "R$ 14.000,00", isCorrect: false, distractorRationale: "Chute aleatório." }
    ],
    detailedExplanation: {
      summary: "Aplicando a fórmula de juros compostos M = C*(1+i)^t, temos M = 10000*(1,1)^3 = 13.310,00.",
      stepByStep: [
        "Passo 1: Identifique a fórmula: M = C * (1 + i)^t.",
        "Passo 2: Substitua os valores: M = 10000 * (1 + 0,10)^3.",
        "Passo 3: Calcule a potência: 1,1^3 = 1,331.",
        "Passo 4: Multiplique pelo capital: 10000 * 1,331 = 13310."
      ],
      coreConcept: "Cálculo de montante em regime de juros compostos.",
      trapWarning: "Lembre-se que juros compostos é 'juros sobre juros', então o valor final será maior que nos juros simples."
    },
    commonTraps: ["usar-juros-simples"],
    tags: ["investimento", "juros-compostos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-008",
    area: "matematica",
    competence: 4,
    skill: 17,
    topic: "Porcentagem",
    subtopic: "Análise de Preços",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um comerciante aumenta o preço de um produto em 25% para ter margem de negociação. Ao vender para o cliente, ele quer dar um desconto que faça o preço voltar ao valor original (antes do aumento).",
      source: "Inspirada em ENEM"
    },
    prompt: "O percentual de desconto que ele deve dar sobre o preço remarcado é de:",
    options: [
      { id: "a", text: "20%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "22,5%", isCorrect: false, distractorRationale: "O aluno pode tentar fazer uma média entre 20 e 25." },
      { id: "c", text: "25%", isCorrect: false, distractorRationale: "O aluno assume erroneamente que o desconto deve ser igual ao aumento para voltar ao original." },
      { id: "d", text: "27,5%", isCorrect: false, distractorRationale: "Erro de intuição sobre como reverter o aumento." },
      { id: "e", text: "30%", isCorrect: false, distractorRationale: "Chute aleatório." }
    ],
    detailedExplanation: {
      summary: "O aumento de 25% torna o preço 1,25x do original. O desconto necessário para voltar ao preço original é de 20%.",
      stepByStep: [
        "Passo 1: Suponha o preço original = 100.",
        "Passo 2: Com aumento de 25%, novo preço = 125.",
        "Passo 3: Para voltar a 100, precisamos descontar 25 reais de um total de 125 reais.",
        "Passo 4: Calculamos a porcentagem: 25 / 125 = 0,20 = 20%."
      ],
      coreConcept: "A porcentagem é sempre relativa à sua base. A base do aumento é o valor inicial, mas a base do desconto é o valor aumentado.",
      trapWarning: "O maior erro aqui é achar que um aumento e um desconto de mesma porcentagem se anulam."
    },
    commonTraps: ["mesma-porcentagem"],
    tags: ["comercio", "desconto", "pegadinha"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-009",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Porcentagem",
    subtopic: "Aumento Percentual",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    cityId: "vitoria",
    hubId: "porto-tubarao",
    context: {
      supportText: "O Porto de Tubarão, em Vitória (ES), é um dos maiores exportadores de minério de ferro. Em um ano, a exportação foi de 80 milhões de toneladas. No ano seguinte, a exportação atingiu 100 milhões de toneladas.",
      source: "Original"
    },
    prompt: "Qual foi o crescimento percentual do volume de minério exportado de um ano para o outro?",
    options: [
      { id: "a", text: "15%", isCorrect: false, distractorRationale: "Chute aleatório ou erro de divisão." },
      { id: "b", text: "20%", isCorrect: false, distractorRationale: "O aluno calculou a diferença de 20 e dividiu por 100 (ano seguinte) em vez do ano base (80)." },
      { id: "c", text: "25%", isCorrect: true, distractorRationale: null },
      { id: "d", text: "30%", isCorrect: false, distractorRationale: "Erro de cálculo." },
      { id: "e", text: "80%", isCorrect: false, distractorRationale: "O aluno confundiu o valor inicial com a taxa de crescimento." }
    ],
    detailedExplanation: {
      summary: "O crescimento foi de 20 milhões sobre uma base de 80 milhões, resultando em 25%.",
      stepByStep: [
        "Passo 1: Calcule a variação absoluta: 100 - 80 = 20 milhões.",
        "Passo 2: Divida a variação pela base original: 20 / 80 = 0,25.",
        "Passo 3: Multiplique por 100 para achar a porcentagem: 25%."
      ],
      coreConcept: "Variação percentual com base no valor inicial.",
      trapWarning: "Sempre divida a diferença pelo valor do ANO INICIAL, e não pelo ano final."
    },
    commonTraps: ["dividir-pelo-final"],
    tags: ["exportacao", "crescimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-010",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Inflação e Poder de Compra",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A inflação acumulada de um ano foi de 10%. Para que um trabalhador não sofra perda do seu poder de compra (ou seja, consiga comprar exatamente as mesmas coisas), seu salário precisou ser reajustado em determinado percentual.",
      source: "Original"
    },
    prompt: "De quanto deve ser o reajuste salarial mínimo para manter o poder de compra inalterado em relação a essa inflação?",
    options: [
      { id: "a", text: "9%", isCorrect: false, distractorRationale: "Tentativa de calcular desconto de 10% sobre 110." },
      { id: "b", text: "10%", isCorrect: true, distractorRationale: null },
      { id: "c", text: "11%", isCorrect: false, distractorRationale: "O aluno pode pensar que o salário precisa crescer mais que a inflação para igualar." },
      { id: "d", text: "15%", isCorrect: false, distractorRationale: "Chute comum para margens de segurança." },
      { id: "e", text: "20%", isCorrect: false, distractorRationale: "O aluno pode dobrar a inflação." }
    ],
    detailedExplanation: {
      summary: "Para manter o poder de compra, o salário deve ser reajustado pela exata porcentagem da inflação.",
      stepByStep: [
        "Passo 1: Se os produtos custavam 100, passam a custar 110 (10% de aumento).",
        "Passo 2: Para comprar os mesmos produtos, o salário do trabalhador que era de 100 deve subir para 110.",
        "Passo 3: Aumento de 100 para 110 é exatamente 10%."
      ],
      coreConcept: "Acompanhamento da inflação.",
      trapWarning: "Cuidado para não confundir o aumento do preço com a perda real do salário, que seria calculada diferentemente. O reajuste do salário nominal é igual à inflação."
    },
    commonTraps: ["confusao-conceitual"],
    tags: ["inflacao", "salario"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-011",
    area: "matematica",
    competence: 4,
    skill: 17,
    topic: "Matemática Financeira",
    subtopic: "Juros Compostos vs Simples",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "João tem duas opções para investir R$ 1.000,00 por 2 meses: a Opção A oferece juros simples de 5% ao mês, e a Opção B oferece juros compostos de 4,5% ao mês.",
      source: "Original"
    },
    prompt: "Comparando os montantes das duas opções ao final do período, qual é a diferença absoluta entre o rendimento (lucro) obtido nelas?",
    options: [
      { id: "a", text: "R$ 7,97", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 8,00", isCorrect: false, distractorRationale: "O aluno pode ter arredondado erroneamente." },
      { id: "c", text: "R$ 10,00", isCorrect: false, distractorRationale: "Pode ter subtraído as porcentagens diretamente (10% - 9%) antes de aplicar a composição de B." },
      { id: "d", text: "R$ 12,05", isCorrect: false, distractorRationale: "Erro de cálculo nos juros compostos." },
      { id: "e", text: "R$ 90,00", isCorrect: false, distractorRationale: "Encontrou o lucro da B e não a diferença." }
    ],
    detailedExplanation: {
      summary: "A Opção A rende R$ 100,00. A Opção B rende R$ 92,025. A diferença é aproximadamente R$ 7,97 a favor da Opção A neste curto prazo.",
      stepByStep: [
        "Passo 1: Opção A (Juros Simples): J = 1000 * 0,05 * 2 = 100 reais.",
        "Passo 2: Opção B (Juros Compostos): M = 1000 * (1,045)^2 = 1000 * 1,092025 = 1092,025.",
        "Passo 3: Rendimento B = 92,025 reais.",
        "Passo 4: Diferença absoluta: 100 - 92,025 = 7,975 (aprox 7,97)."
      ],
      coreConcept: "Comparação entre regimes de juros no curto prazo.",
      trapWarning: "No primeiro mês e no segundo mês, uma taxa simples muito maior pode render mais que uma taxa composta um pouco menor."
    },
    commonTraps: ["subtracao-de-taxas"],
    tags: ["comparacao", "rendimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-012",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Porcentagem",
    subtopic: "Impostos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    cityId: "brasilia",
    hubId: "congresso-nacional",
    context: {
      supportText: "No Congresso Nacional em Brasília, discutia-se a reforma tributária e a cobrança do Imposto de Renda (IR). Um contribuinte tem uma renda tributável de R$ 4.000,00. A alíquota do IR para essa faixa é de 15%, mas há uma parcela a deduzir (desconto fixo) de R$ 350,00 estabelecida por lei.",
      source: "Inspirada em mecânica de impostos do Brasil"
    },
    prompt: "Qual será o valor efetivo do imposto devido por este contribuinte após a dedução?",
    options: [
      { id: "a", text: "R$ 150,00", isCorrect: false, distractorRationale: "O aluno fez 15% de 4000 e subtraiu 450 por engano." },
      { id: "b", text: "R$ 200,00", isCorrect: false, distractorRationale: "Chute arredondado." },
      { id: "c", text: "R$ 250,00", isCorrect: true, distractorRationale: null },
      { id: "d", text: "R$ 600,00", isCorrect: false, distractorRationale: "O aluno esqueceu de subtrair a parcela a deduzir." },
      { id: "e", text: "R$ 950,00", isCorrect: false, distractorRationale: "O aluno somou a dedução em vez de subtrair." }
    ],
    detailedExplanation: {
      summary: "Calcula-se 15% sobre R$ 4.000,00 e subtrai-se R$ 350,00, resultando em R$ 250,00.",
      stepByStep: [
        "Passo 1: Calcular 15% de 4000: 4000 * 0,15 = 600.",
        "Passo 2: Subtrair a parcela a deduzir: 600 - 350 = 250."
      ],
      coreConcept: "Aplicação de porcentagem seguida de operação de subtração (fórmula linear).",
      trapWarning: "Lembre-se da ordem das operações: aplique a taxa percentual primeiro na base inteira, depois subtraia a dedução (conforme regra do IRPF)."
    },
    commonTraps: ["esquecer-deducao"],
    tags: ["imposto", "politica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-013",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Porcentagem",
    subtopic: "Variação de Área",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um agricultor decidiu aumentar o comprimento do seu terreno retangular em 10% e a largura em 20% para ampliar a plantação.",
      source: "Original"
    },
    prompt: "Com essas modificações, a área total do terreno sofreu um aumento de:",
    options: [
      { id: "a", text: "15%", isCorrect: false, distractorRationale: "O aluno calculou a média das porcentagens." },
      { id: "b", text: "30%", isCorrect: false, distractorRationale: "O aluno simplesmente somou as porcentagens (10% + 20%)." },
      { id: "c", text: "32%", isCorrect: true, distractorRationale: null },
      { id: "d", text: "200%", isCorrect: false, distractorRationale: "O aluno multiplicou 10 por 20." },
      { id: "e", text: "1,32%", isCorrect: false, distractorRationale: "Erro na conversão decimal para porcentagem." }
    ],
    detailedExplanation: {
      summary: "Aumentar as dimensões em 10% e 20% significa multiplicar a área inicial por 1,10 e 1,20, resultando num aumento de 32%.",
      stepByStep: [
        "Passo 1: A área inicial A = base * altura (b * h).",
        "Passo 2: Nova base = 1,1 * b; Nova altura = 1,2 * h.",
        "Passo 3: Nova Área = (1,1 * b) * (1,2 * h) = 1,32 * (b * h) = 1,32 * A.",
        "Passo 4: O fator 1,32 representa 132% da área original, logo houve um aumento de 32%."
      ],
      coreConcept: "Efeito multiplicativo de porcentagens na área (2 dimensões).",
      trapWarning: "Aumentos dimensionais nunca devem ser somados para encontrar a área total, pois a área é um produto de dimensões."
    },
    commonTraps: ["soma-direta"],
    tags: ["geometria", "terreno", "multiplicacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-014",
    area: "matematica",
    competence: 4,
    skill: 18,
    topic: "Porcentagem",
    subtopic: "Misturas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A legislação brasileira obriga a mistura de etanol anidro à gasolina comum. Suponha que um tanque contém 50 litros de gasolina comum, na qual 20% do volume já é composto por etanol. Deseja-se adicionar mais etanol puro para que a mistura resultante passe a ter 36% de etanol.",
      source: "Inspirada em ENEM"
    },
    prompt: "Quantos litros de etanol puro devem ser adicionados ao tanque?",
    options: [
      { id: "a", text: "8 litros", isCorrect: false, distractorRationale: "O aluno calculou 16% de 50 litros e adicionou esse valor, sem perceber que o volume total muda." },
      { id: "b", text: "10 litros", isCorrect: false, distractorRationale: "O aluno calculou a diferença de porcentagem (16%) de forma confusa e chegou em 10." },
      { id: "c", text: "12,5 litros", isCorrect: true, distractorRationale: null },
      { id: "d", text: "18 litros", isCorrect: false, distractorRationale: "O aluno achou que os 36% deveriam ser sobre os 50L apenas." },
      { id: "e", text: "20 litros", isCorrect: false, distractorRationale: "Chute baseado nos números iniciais." }
    ],
    detailedExplanation: {
      summary: "Devem ser adicionados 12,5 litros de etanol. A quantidade inicial de etanol é 10L. Com 'x' adicionado, a nova proporção é (10+x)/(50+x) = 0,36.",
      stepByStep: [
        "Passo 1: Etanol inicial = 20% de 50 = 10 litros.",
        "Passo 2: Seja 'x' o etanol adicionado. Etanol final = 10 + x. Volume total final = 50 + x.",
        "Passo 3: A nova mistura deve ter 36% de etanol: (10 + x) / (50 + x) = 0,36.",
        "Passo 4: Resolvendo: 10 + x = 18 + 0,36x  =>  0,64x = 8  =>  x = 8 / 0,64 = 12,5 litros."
      ],
      coreConcept: "Problema de mistura e concentração, envolvendo porcentagem em relação a um total variável.",
      trapWarning: "Lembre-se que ao adicionar uma substância, o volume total da mistura também aumenta."
    },
    commonTraps: ["ignorar-volume-total"],
    tags: ["mistura", "etanol", "equacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-015",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Aumentos Sucessivos",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    cityId: "sao-paulo",
    hubId: "b3-bolsa",
    context: {
      supportText: "Uma ação na B3 sofreu uma queda de 40% durante um período de crise. Algum tempo depois, a economia começou a se recuperar e o valor da ação começou a subir.",
      source: "Original"
    },
    prompt: "De quanto deve ser a porcentagem mínima de aumento sobre o valor reduzido para que a ação retorne exatamente ao seu valor original (antes da crise)?",
    options: [
      { id: "a", text: "40,0%", isCorrect: false, distractorRationale: "O aluno assume que a queda e a recuperação são simétricas percentualmente." },
      { id: "b", text: "50,0%", isCorrect: false, distractorRationale: "O aluno usa bases erradas de 50/100." },
      { id: "c", text: "60,0%", isCorrect: false, distractorRationale: "O aluno subtrai 40 de 100, mas inverte a lógica do aumento." },
      { id: "d", text: "66,6%", isCorrect: true, distractorRationale: null },
      { id: "e", text: "140,0%", isCorrect: false, distractorRationale: "O aluno pensa em fatores de 1,4." }
    ],
    detailedExplanation: {
      summary: "Para recuperar uma queda de 40% (chegando a 60% do valor), é necessário um aumento de cerca de 66,6% (pois 40/60 = 2/3).",
      stepByStep: [
        "Passo 1: Considere o valor inicial como 100.",
        "Passo 2: Após a queda de 40%, o valor cai para 60.",
        "Passo 3: Para voltar a 100, é preciso aumentar 40 reais sobre a nova base, que é 60.",
        "Passo 4: Calculamos a razão: 40 / 60 = 2/3 ≈ 0,666... = 66,6%."
      ],
      coreConcept: "Recuperação percentual: o aumento deve compensar a perda usando o valor residual como nova base.",
      trapWarning: "Uma perda de x% sempre exige um ganho percentual MAIOR do que x% para ser recuperada, já que a base de cálculo ficou menor."
    },
    commonTraps: ["simetria-percentual"],
    tags: ["bolsa", "recuperacao", "fracao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-016",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Juros Compostos com Aportes",
    difficulty: 4,
    estimatedTimeSeconds: 240,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Lucas decidiu investir uma parte de seu salário. No dia 1º de Janeiro, ele depositou R$ 500,00 em uma conta que rende 2% ao mês em juros compostos. No dia 1º de Fevereiro, ele depositou mais R$ 500,00. No dia 1º de Março, ele conferiu seu saldo (sem fazer um novo depósito).",
      source: "Original"
    },
    prompt: "Qual era o saldo exato de Lucas no dia 1º de Março?",
    options: [
      { id: "a", text: "R$ 1.020,00", isCorrect: false, distractorRationale: "O aluno pode ter calculado apenas 2% sobre o total de 1000 sem considerar os prazos corretos." },
      { id: "b", text: "R$ 1.030,00", isCorrect: false, distractorRationale: "Calculou 2% sobre 500 duas vezes (juros simples)." },
      { id: "c", text: "R$ 1.030,20", isCorrect: true, distractorRationale: null },
      { id: "d", text: "R$ 1.040,40", isCorrect: false, distractorRationale: "O aluno pode ter aplicado mais um mês de juros do que deveria." },
      { id: "e", text: "R$ 1.060,00", isCorrect: false, distractorRationale: "Erro de aplicação da taxa, confundiu 2% com outra porcentagem." }
    ],
    detailedExplanation: {
      summary: "O primeiro depósito rende por 2 meses e o segundo rende por 1 mês. O total acumulado é R$ 1.030,20.",
      stepByStep: [
        "Passo 1: O 1º depósito de 500 ficou 2 meses rendendo. M1 = 500 * (1,02)^2 = 500 * 1,0404 = 520,20.",
        "Passo 2: O 2º depósito de 500 ficou 1 mês rendendo. M2 = 500 * (1,02)^1 = 510,00.",
        "Passo 3: Somamos os montantes: 520,20 + 510,00 = 1030,20."
      ],
      coreConcept: "Juros compostos aplicados a aportes múltiplos com tempos diferentes.",
      trapWarning: "Trate cada aporte de forma separada, calculando quanto tempo ele passou rendendo até a data final."
    },
    commonTraps: ["somar-antes-de-render"],
    tags: ["aporte", "juros-compostos", "poupanca"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-017",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Inflação",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A inflação em um determinado país foi de 5% no primeiro ano, 10% no segundo ano e 20% no terceiro ano.",
      source: "Original"
    },
    prompt: "A inflação acumulada neste período de 3 anos foi de:",
    options: [
      { id: "a", text: "35,0%", isCorrect: false, distractorRationale: "O aluno somou 5 + 10 + 20 diretamente." },
      { id: "b", text: "36,5%", isCorrect: false, distractorRationale: "Erro no cálculo sucessivo." },
      { id: "c", text: "38,6%", isCorrect: true, distractorRationale: null },
      { id: "d", text: "40,0%", isCorrect: false, distractorRationale: "Chute ou erro de conta nos fatores." },
      { id: "e", text: "42,0%", isCorrect: false, distractorRationale: "Tentativa de calcular juros compostos com uma taxa média." }
    ],
    detailedExplanation: {
      summary: "A inflação acumulada é o produto dos fatores de aumento sucessivo: 1,05 * 1,10 * 1,20 = 1,386 (38,6%).",
      stepByStep: [
        "Passo 1: Transforme as porcentagens em fatores de aumento: 1,05 (5%), 1,10 (10%) e 1,20 (20%).",
        "Passo 2: Multiplique os fatores: 1,05 * 1,10 = 1,155.",
        "Passo 3: Multiplique pelo último fator: 1,155 * 1,20 = 1,386.",
        "Passo 4: O fator 1,386 indica um aumento de 38,6% em relação à base 1."
      ],
      coreConcept: "Cálculo de inflação acumulada através da multiplicação dos fatores de aumento.",
      trapWarning: "Inflação acumulada não é a soma das inflações mensais/anuais. Você deve multiplicar os índices (fatores de correção)."
    },
    commonTraps: ["soma-direta"],
    tags: ["inflacao-acumulada", "multiplicacao-de-fatores"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-018",
    area: "matematica",
    competence: 4,
    skill: 18,
    topic: "Matemática Financeira",
    subtopic: "Lucro e Ponto de Equilíbrio",
    difficulty: 5,
    estimatedTimeSeconds: 240,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma empresa de vestuário vende 100 camisas por mês a R$ 50,00 cada. O dono pretende aumentar o preço de venda para aumentar o faturamento, mas pesquisas indicam que a cada 1% de aumento no preço, a quantidade de camisas vendidas cairá 0,5%.",
      source: "Inspirada em ENEM"
    },
    prompt: "Se ele decidir aumentar o preço em 20%, o que ocorrerá com o faturamento total da empresa?",
    options: [
      { id: "a", text: "Ficará inalterado.", isCorrect: false, distractorRationale: "O aluno pode achar que a queda anula exatamente o aumento." },
      { id: "b", text: "Aumentará 8%.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Aumentará 10%.", isCorrect: false, distractorRationale: "O aluno faz 20% de aumento menos 10% de queda na demanda diretamente." },
      { id: "d", text: "Diminuirá 5%.", isCorrect: false, distractorRationale: "Erro de cálculo na multiplicação do novo preço pela quantidade." },
      { id: "e", text: "Aumentará 15%.", isCorrect: false, distractorRationale: "Erro de cálculo na aplicação das porcentagens." }
    ],
    detailedExplanation: {
      summary: "O faturamento original era R$ 5000. Com aumento de 20% no preço e queda de 10% nas vendas, o novo faturamento será R$ 5400, o que significa aumento de 8%.",
      stepByStep: [
        "Passo 1: Faturamento inicial = 100 camisas * R$ 50 = R$ 5000.",
        "Passo 2: Novo preço = 50 * 1,20 = R$ 60.",
        "Passo 3: Aumento de 20% provoca queda de 20 * 0,5% = 10% nas vendas.",
        "Passo 4: Nova quantidade = 100 * 0,90 = 90 camisas.",
        "Passo 5: Novo faturamento = 90 * 60 = R$ 5400.",
        "Passo 6: Aumento percentual = (5400 - 5000) / 5000 = 400 / 5000 = 0,08 = 8%."
      ],
      coreConcept: "Relação entre preço, demanda e faturamento usando variação percentual simultânea.",
      trapWarning: "O faturamento é o produto do Preço pela Quantidade. As variações percentuais devem ser aplicadas em cada variável antes de multiplicá-las."
    },
    commonTraps: ["subtracao-direta"],
    tags: ["faturamento", "demanda", "funcao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-019",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Matemática Financeira",
    subtopic: "Amortização de Dívidas",
    difficulty: 5,
    estimatedTimeSeconds: 240,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Renato comprou um carro financiado. O valor à vista seria R$ 40.000,00. O financiamento foi feito dando uma entrada de R$ 10.000,00 e o saldo devedor deverá ser pago em duas prestações mensais iguais (postecipadas, isto é, pagas no final do mês 1 e do mês 2). A taxa de juros compostos cobrada pela financeira é de 5% ao mês.",
      source: "Inspirada em ENEM"
    },
    prompt: "Qual será o valor aproximado de cada uma das duas prestações?",
    options: [
      { id: "a", text: "R$ 15.750,00", isCorrect: false, distractorRationale: "O aluno simplesmente divide o saldo (30k) por 2 e adiciona 5% de juros." },
      { id: "b", text: "R$ 16.134,00", isCorrect: true, distractorRationale: null },
      { id: "c", text: "R$ 16.500,00", isCorrect: false, distractorRationale: "Calculou 30000 + 10% de juros e dividiu por 2." },
      { id: "d", text: "R$ 17.000,00", isCorrect: false, distractorRationale: "Chute aleatório." },
      { id: "e", text: "R$ 21.000,00", isCorrect: false, distractorRationale: "Errou a base da dívida, usando o valor de 40k no lugar de 30k." }
    ],
    detailedExplanation: {
      summary: "Usando equivalência de capitais, trazemos as duas parcelas P a valor presente para igualar à dívida de R$ 30.000. P/(1,05) + P/(1,05)² = 30000. O valor de P é aprox R$ 16.134.",
      stepByStep: [
        "Passo 1: Dívida inicial (Saldo Devedor) = 40.000 - 10.000 = 30.000.",
        "Passo 2: A dívida de 30.000 deve ser igual à soma dos valores presentes das duas parcelas P: 30000 = P/1,05 + P/(1,05)².",
        "Passo 3: 30000 = P/1,05 + P/1,1025.",
        "Passo 4: Multiplicando toda a equação por 1,1025: 33075 = 1,05*P + P = 2,05*P.",
        "Passo 5: P = 33075 / 2,05 ≈ 16134,14."
      ],
      coreConcept: "Valor Presente Líquido / Financiamento com parcelas iguais (Sistema Francês/Tabela Price).",
      trapWarning: "Não calcule o juro do total e depois divida pelas parcelas. Cada parcela quita parte dos juros e parte do principal em tempos diferentes."
    },
    commonTraps: ["juros-sobre-total-depois-divisao"],
    tags: ["financiamento", "carro", "parcelas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PORC-020",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Matemática Financeira",
    subtopic: "Juros Reais e Aparentes",
    difficulty: 5,
    estimatedTimeSeconds: 240,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Ao longo do ano passado, a aplicação financeira de uma empresa rendeu nominalmente (juro aparente) 15,5%. No mesmo período, a inflação medida pelo IPCA foi de 5%.",
      source: "Original"
    },
    prompt: "A taxa de juros real (aumento efetivo do poder de compra) auferida por esta empresa no período foi de:",
    options: [
      { id: "a", text: "10,0%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "10,5%", isCorrect: false, distractorRationale: "O aluno subtraiu as porcentagens diretamente (15,5% - 5%). Este é o erro mais comum." },
      { id: "c", text: "15,0%", isCorrect: false, distractorRationale: "Ignorou a inflação." },
      { id: "d", text: "20,5%", isCorrect: false, distractorRationale: "Somou as duas taxas em vez de compensar a inflação." },
      { id: "e", text: "3,1%", isCorrect: false, distractorRationale: "Dividiu 15,5 por 5." }
    ],
    detailedExplanation: {
      summary: "A taxa de juros real (r) é obtida através da relação (1+i) = (1+r)*(1+inf). (1,155) / (1,05) = 1,10. Portanto, 10%.",
      stepByStep: [
        "Passo 1: Juro aparente (nominal) i = 15,5%, então o fator é 1,155.",
        "Passo 2: Inflação inf = 5%, então o fator é 1,05.",
        "Passo 3: A equação de Fisher nos diz que (1 + i) = (1 + r) * (1 + inf), onde r é a taxa real.",
        "Passo 4: (1 + r) = 1,155 / 1,05 = 1,10.",
        "Passo 5: Subtraindo 1, temos r = 0,10, ou seja, a taxa real é 10%."
      ],
      coreConcept: "Cálculo da Taxa de Juros Real desconsiderando o efeito inflacionário (Equação de Fisher).",
      trapWarning: "Em provas mais simples pode-se aproximar subtraindo, mas o correto matematicamente (e cobrado em questões avançadas) é usar a divisão de fatores. 15,5% - 5% = 10,5%, o que é diferente do real (10%)."
    },
    commonTraps: ["subtracao-direta-de-taxas"],
    tags: ["inflacao", "juros-reais", "fisher"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
