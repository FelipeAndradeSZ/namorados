export const QUESTIONS_ESTATISTICA = [
  {
    id: "MAT-EST-001",
    area: "matematica",
    competence: 6,
    skill: 24,
    topic: "Estatística",
    subtopic: "Moda",
    difficulty: 1,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Departamento de Trânsito de São Paulo realizou um levantamento sobre o número de acidentes diários em uma das principais avenidas da cidade durante 10 dias consecutivos. Os dados registrados foram: 2, 3, 2, 5, 2, 4, 3, 2, 5, 1.",
      source: "Original"
    },
    prompt: "A medida de tendência central que representa o número diário de acidentes que mais frequentemente ocorreu nesse período é a moda. Qual é o valor da moda dessa distribuição?",
    options: [
      { id: "a", text: "1", isCorrect: false, distractorRationale: "O aluno escolheu o menor valor registrado." },
      { id: "b", text: "2", isCorrect: true, distractorRationale: null },
      { id: "c", text: "3", isCorrect: false, distractorRationale: "O aluno escolheu o valor central do intervalo de amplitude." },
      { id: "d", text: "4", isCorrect: false, distractorRationale: "O aluno escolheu a diferença entre o maior e o menor valor." },
      { id: "e", text: "5", isCorrect: false, distractorRationale: "O aluno escolheu o maior valor registrado." }
    ],
    detailedExplanation: {
      summary: "A moda é o valor que aparece com maior frequência em um conjunto de dados.",
      stepByStep: [
        "Passo 1: Contar a frequência de cada número na lista.",
        "Passo 2: O número 2 aparece quatro vezes.",
        "Passo 3: Como o 2 tem a maior frequência, ele é a moda."
      ],
      coreConcept: "Moda estatística.",
      trapWarning: "Confundir moda com a média aritmética ou mediana."
    },
    commonTraps: ["confundir_media_moda"],
    tags: ["moda", "estatistica_basica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-002",
    area: "matematica",
    competence: 6,
    skill: 24,
    topic: "Estatística",
    subtopic: "Média Simples",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A Companhia do Metropolitano de São Paulo monitora o fluxo de passageiros. Em uma estação de médio porte, os registros (em milhares) de segunda a sexta-feira foram: 40, 45, 50, 45, 60.",
      source: "Original"
    },
    prompt: "Com base nesses dados, a média diária de passageiros (em milhares) nessa estação durante esses cinco dias foi de:",
    options: [
      { id: "a", text: "45", isCorrect: false, distractorRationale: "O aluno confundiu média com moda ou mediana." },
      { id: "b", text: "46", isCorrect: false, distractorRationale: "Erro de cálculo ao somar os valores." },
      { id: "c", text: "48", isCorrect: true, distractorRationale: null },
      { id: "d", text: "50", isCorrect: false, distractorRationale: "O aluno pegou um valor intermediário maior." },
      { id: "e", text: "240", isCorrect: false, distractorRationale: "O aluno apenas somou os valores e esqueceu de dividir por 5." }
    ],
    detailedExplanation: {
      summary: "A média aritmética simples é a soma dos valores dividida pela quantidade deles.",
      stepByStep: [
        "Passo 1: Somar os valores: 40 + 45 + 50 + 45 + 60 = 240.",
        "Passo 2: Dividir a soma pela quantidade de dias (5): 240 / 5 = 48."
      ],
      coreConcept: "Média aritmética simples.",
      trapWarning: "Esquecer de dividir o total pelo número de observações."
    },
    commonTraps: ["soma_sem_divisao"],
    tags: ["media", "estatistica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-003",
    area: "matematica",
    competence: 6,
    skill: 25,
    topic: "Estatística",
    subtopic: "Interpretação de Gráficos",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "graph",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No Rio de Janeiro, um food truck vende hambúrgueres artesanais. O gráfico de faturamento indica R$ 1000 na quarta, R$ 1500 na quinta, R$ 2500 na sexta, R$ 3000 no sábado e R$ 2000 no domingo.",
      source: "Original"
    },
    prompt: "Qual é a amplitude térmica, em reais, do faturamento desse food truck no período analisado (quarta a domingo)?",
    options: [
      { id: "a", text: "1000", isCorrect: false, distractorRationale: "O aluno subtraiu sexta de sábado ou pegou o menor valor." },
      { id: "b", text: "1500", isCorrect: false, distractorRationale: "O aluno subtraiu quinta de sábado." },
      { id: "c", text: "2000", isCorrect: true, distractorRationale: null },
      { id: "d", text: "3000", isCorrect: false, distractorRationale: "O aluno pegou apenas o maior valor." },
      { id: "e", text: "10000", isCorrect: false, distractorRationale: "O aluno somou todos os valores." }
    ],
    detailedExplanation: {
      summary: "A amplitude é a diferença entre o maior e o menor valor do conjunto de dados.",
      stepByStep: [
        "Passo 1: Identificar o faturamento máximo (R$ 3000 no sábado).",
        "Passo 2: Identificar o faturamento mínimo (R$ 1000 na quarta).",
        "Passo 3: Subtrair o mínimo do máximo: 3000 - 1000 = 2000."
      ],
      coreConcept: "Amplitude estatística.",
      trapWarning: "Confundir amplitude com a soma ou média."
    },
    commonTraps: ["confundir_amplitude_soma"],
    tags: ["graficos", "amplitude"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-004",
    area: "matematica",
    competence: 6,
    skill: 24,
    topic: "Estatística",
    subtopic: "Mediana",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma startup de tecnologia em Brasília, os salários dos 6 desenvolvedores de uma equipe são: R$ 3000, R$ 4500, R$ 3500, R$ 12000, R$ 4000, R$ 5000.",
      source: "Original"
    },
    prompt: "Para não haver distorções por valores extremos, decidiu-se usar a mediana como salário de referência. Qual é esse valor?",
    options: [
      { id: "a", text: "4000", isCorrect: false, distractorRationale: "O aluno pegou um valor intermediário sem organizar os dados ou fazer a média central corretamente." },
      { id: "b", text: "4250", isCorrect: true, distractorRationale: null },
      { id: "c", text: "4500", isCorrect: false, distractorRationale: "O aluno pegou o terceiro valor central sem organizar em ordem crescente." },
      { id: "d", text: "5333", isCorrect: false, distractorRationale: "O aluno calculou a média em vez da mediana." },
      { id: "e", text: "7750", isCorrect: false, distractorRationale: "O aluno tirou a média dos dois valores centrais na ordem dada originalmente (3500 e 12000)." }
    ],
    detailedExplanation: {
      summary: "A mediana em um conjunto com número par de elementos é a média dos dois termos centrais com os dados em ordem.",
      stepByStep: [
        "Passo 1: Organizar em ordem crescente: 3000, 3500, 4000, 4500, 5000, 12000.",
        "Passo 2: Identificar os dois valores centrais: 4000 e 4500.",
        "Passo 3: Calcular a média entre eles: (4000 + 4500) / 2 = 4250."
      ],
      coreConcept: "Mediana para n par.",
      trapWarning: "Esquecer de colocar os dados em ordem crescente antes de achar os termos centrais."
    },
    commonTraps: ["mediana_sem_ordenar"],
    tags: ["mediana", "estatistica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-005",
    area: "matematica",
    competence: 6,
    skill: 24,
    topic: "Estatística",
    subtopic: "Média Ponderada",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um concurso público em São Paulo, as notas são calculadas por média ponderada. Português tem peso 2, Matemática tem peso 3 e Conhecimentos Específicos tem peso 5. Um candidato tirou 7,0 em Português, 6,0 em Matemática e 8,0 em Conhecimentos Específicos.",
      source: "Original"
    },
    prompt: "A nota final desse candidato, de acordo com o sistema de pesos, foi:",
    options: [
      { id: "a", text: "7,00", isCorrect: false, distractorRationale: "O aluno fez média simples das notas: (7+6+8)/3 = 7." },
      { id: "b", text: "7,20", isCorrect: true, distractorRationale: null },
      { id: "c", text: "7,50", isCorrect: false, distractorRationale: "O aluno somou os pesos e dividiu de forma incorreta." },
      { id: "d", text: "7,80", isCorrect: false, distractorRationale: "O aluno inverteu os pesos das provas." },
      { id: "e", text: "72,0", isCorrect: false, distractorRationale: "O aluno não dividiu pela soma dos pesos (10)." }
    ],
    detailedExplanation: {
      summary: "A média ponderada requer multiplicar cada nota pelo seu peso, somar os resultados e dividir pela soma dos pesos.",
      stepByStep: [
        "Passo 1: Multiplicar notas pelos pesos: 7x2 = 14; 6x3 = 18; 8x5 = 40.",
        "Passo 2: Somar os produtos: 14 + 18 + 40 = 72.",
        "Passo 3: Somar os pesos: 2 + 3 + 5 = 10.",
        "Passo 4: Dividir: 72 / 10 = 7,20."
      ],
      coreConcept: "Média ponderada.",
      trapWarning: "A armadilha mais comum é esquecer de aplicar os pesos e calcular a média simples."
    },
    commonTraps: ["media_simples_invés_ponderada"],
    tags: ["media_ponderada", "concurso"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-006",
    area: "matematica",
    competence: 6,
    skill: 25,
    topic: "Estatística",
    subtopic: "Gráficos",
    difficulty: 3,
    estimatedTimeSeconds: 200,
    questionType: "graph",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma pesquisa no Rio de Janeiro revelou o tempo de deslocamento ao trabalho. 10 pessoas demoram 30 min, 25 pessoas demoram 60 min, 15 pessoas demoram 90 min, e 10 pessoas demoram 120 min.",
      source: "Original"
    },
    prompt: "Com base na distribuição de frequências descrita, qual é a mediana do tempo de deslocamento dessa amostra populacional?",
    options: [
      { id: "a", text: "60", isCorrect: true, distractorRationale: null },
      { id: "b", text: "70", isCorrect: false, distractorRationale: "O aluno tirou a média entre 60 e 90." },
      { id: "c", text: "75", isCorrect: false, distractorRationale: "O aluno calculou a média exata em vez da mediana." },
      { id: "d", text: "80", isCorrect: false, distractorRationale: "Erro de soma de frequências." },
      { id: "e", text: "90", isCorrect: false, distractorRationale: "O aluno olhou para os maiores valores do gráfico." }
    ],
    detailedExplanation: {
      summary: "A mediana em dados agrupados encontra-se na posição central da frequência acumulada.",
      stepByStep: [
        "Passo 1: Somar total de pessoas = 10 + 25 + 15 + 10 = 60.",
        "Passo 2: As posições centrais são 30ª e 31ª.",
        "Passo 3: Frequência acumulada: 30 min (10), 60 min (10+25=35).",
        "Passo 4: Como as posições 30 e 31 caem no grupo de 60 min, a mediana é 60."
      ],
      coreConcept: "Mediana em dados agrupados.",
      trapWarning: "Não considerar as frequências de cada valor ao achar a posição central."
    },
    commonTraps: ["ignorar_frequencias_para_mediana"],
    tags: ["mediana", "frequencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-007",
    area: "matematica",
    competence: 6,
    skill: 25,
    topic: "Estatística",
    subtopic: "Gráficos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "graph",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um investidor na B3 (Bolsa do Brasil) possui uma carteira diversificada mostrada em um gráfico de setores: 40% em Ações, 30% em Tesouro Direto, 20% em Fundos Imobiliários e o restante em Criptomoedas. O valor total da carteira é de R$ 50.000,00.",
      source: "Original"
    },
    prompt: "Qual o valor, em reais, correspondente ao setor de Criptomoedas na carteira do investidor?",
    options: [
      { id: "a", text: "2000", isCorrect: false, distractorRationale: "O aluno calculou 4% em vez de 10%." },
      { id: "b", text: "5000", isCorrect: true, distractorRationale: null },
      { id: "c", text: "10000", isCorrect: false, distractorRationale: "O aluno confundiu Cripto com Fundos (20%)." },
      { id: "d", text: "15000", isCorrect: false, distractorRationale: "Calculou 30%." },
      { id: "e", text: "45000", isCorrect: false, distractorRationale: "O aluno calculou os outros 90%." }
    ],
    detailedExplanation: {
      summary: "Em gráficos de setores, a soma das porcentagens é 100%.",
      stepByStep: [
        "Passo 1: Somar as porcentagens dadas: 40% + 30% + 20% = 90%.",
        "Passo 2: Criptomoedas correspondem a 100% - 90% = 10%.",
        "Passo 3: Calcular 10% de R$ 50.000,00 = R$ 5.000,00."
      ],
      coreConcept: "Leitura de gráficos de setores e porcentagem.",
      trapWarning: "Errar a soma das porcentagens do gráfico."
    },
    commonTraps: ["erro_percentual_restante"],
    tags: ["grafico_setores", "porcentagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-008",
    area: "matematica",
    competence: 6,
    skill: 24,
    topic: "Estatística",
    subtopic: "Análise de Tendência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dados do IBGE mostram o crescimento populacional anual de um bairro de Brasília. Em 2020 a população era de 12.000 habitantes; em 2021 foi para 12.500; em 2022 para 13.000. Assumindo-se um modelo de crescimento aritmético linear (tendência constante de aumento absoluto).",
      source: "Original"
    },
    prompt: "Qual é a previsão populacional para o ano de 2025, de acordo com essa tendência linear?",
    options: [
      { id: "a", text: "13500", isCorrect: false, distractorRationale: "O aluno calculou apenas até 2023." },
      { id: "b", text: "14000", isCorrect: false, distractorRationale: "O aluno calculou apenas até 2024." },
      { id: "c", text: "14500", isCorrect: true, distractorRationale: null },
      { id: "d", text: "15000", isCorrect: false, distractorRationale: "O aluno calculou até 2026." },
      { id: "e", text: "18000", isCorrect: false, distractorRationale: "O aluno projetou um crescimento de 500 por ano e multiplicou o número de anos errado." }
    ],
    detailedExplanation: {
      summary: "Crescimento linear implica acréscimo constante ano a ano.",
      stepByStep: [
        "Passo 1: Identificar o aumento anual: 12500 - 12000 = 500.",
        "Passo 2: Ano base 2022 = 13000.",
        "Passo 3: Faltam 3 anos para 2025 (2023, 2024, 2025).",
        "Passo 4: Aumento total = 3 x 500 = 1500.",
        "Passo 5: 13000 + 1500 = 14500."
      ],
      coreConcept: "Tendência e progressão aritmética básica.",
      trapWarning: "Errar a contagem de anos entre 2022 e 2025."
    },
    commonTraps: ["erro_contagem_anos"],
    tags: ["tendencia", "pa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-009",
    area: "matematica",
    competence: 6,
    skill: 24,
    topic: "Estatística",
    subtopic: "Moda e Média",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma torrefação de café em São Paulo ensaca lotes diariamente. Durante uma semana, o número de sacas processadas foi: 40, 45, 45, 50, 45, 55, 70.",
      source: "Original"
    },
    prompt: "A diferença absoluta entre a média aritmética diária de sacas processadas e a moda dessa distribuição é:",
    options: [
      { id: "a", text: "0", isCorrect: false, distractorRationale: "O aluno achou que a média e a moda eram iguais." },
      { id: "b", text: "5", isCorrect: true, distractorRationale: null },
      { id: "c", text: "10", isCorrect: false, distractorRationale: "Erro no cálculo da média (achou 55)." },
      { id: "d", text: "15", isCorrect: false, distractorRationale: "O aluno subtraiu a moda do maior valor." },
      { id: "e", text: "25", isCorrect: false, distractorRationale: "Subtraiu o menor valor do maior." }
    ],
    detailedExplanation: {
      summary: "Calcular ambas as medidas (média e moda) e encontrar a diferença entre elas.",
      stepByStep: [
        "Passo 1: A moda é o valor que mais repete, logo Moda = 45.",
        "Passo 2: Soma para a média = 40 + 45 + 45 + 50 + 45 + 55 + 70 = 350.",
        "Passo 3: Média = 350 / 7 = 50.",
        "Passo 4: Diferença absoluta = |50 - 45| = 5."
      ],
      coreConcept: "Comparação entre média e moda.",
      trapWarning: "Errar a soma dos valores e, consequentemente, a média."
    },
    commonTraps: ["soma_incorreta"],
    tags: ["media", "moda"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-010",
    area: "matematica",
    competence: 6,
    skill: 24,
    topic: "Estatística",
    subtopic: "Média Ponderada",
    difficulty: 3,
    estimatedTimeSeconds: 210,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para avaliar um plano de asfaltamento no Rio de Janeiro, a prefeitura pontuou ruas em 3 critérios (qualidade prévia, fluxo de veículos, importância turística) com notas de 0 a 10 e pesos 2, 4 e 4, respectivamente. Uma rua obteve nota 5 em qualidade, 8 em fluxo e X em importância turística. Sabe-se que a média final dessa rua foi 7,4.",
      source: "Original"
    },
    prompt: "Para que a rua atinja essa média final exata, qual foi a nota X recebida no critério de importância turística?",
    options: [
      { id: "a", text: "6,0", isCorrect: false, distractorRationale: "Erro de equação do primeiro grau." },
      { id: "b", text: "7,0", isCorrect: false, distractorRationale: "O aluno tirou a média de 5, 8 e achou a diferença para 7,4 (sem pesos)." },
      { id: "c", text: "7,4", isCorrect: false, distractorRationale: "O aluno deduziu que X devia ser igual à média." },
      { id: "d", text: "8,0", isCorrect: true, distractorRationale: null },
      { id: "e", text: "9,0", isCorrect: false, distractorRationale: "O aluno subtraiu (2+4+4) de algum valor." }
    ],
    detailedExplanation: {
      summary: "Para achar uma nota faltante em média ponderada, monta-se uma equação do 1º grau.",
      stepByStep: [
        "Passo 1: Fórmula: (5*2 + 8*4 + X*4) / (2+4+4) = 7,4.",
        "Passo 2: Simplifica-se: (10 + 32 + 4X) / 10 = 7,4.",
        "Passo 3: (42 + 4X) = 74.",
        "Passo 4: 4X = 74 - 42 = 32.",
        "Passo 5: X = 32 / 4 = 8,0."
      ],
      coreConcept: "Equação algébrica em média ponderada.",
      trapWarning: "Esquecer de multiplicar o denominador cruzado com a média dada."
    },
    commonTraps: ["erro_algebrico"],
    tags: ["media_ponderada", "equacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-011",
    area: "matematica",
    competence: 6,
    skill: 25,
    topic: "Estatística",
    subtopic: "Média Móvel",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A Secretaria de Saúde do DF utiliza a média móvel de 3 dias para analisar casos de gripe. Os registros de domingo a quinta-feira foram: 100, 110, 150, 130, 170.",
      source: "Original"
    },
    prompt: "Qual é a média móvel de 3 dias calculada na quinta-feira? (Referente aos dias terça, quarta e quinta)",
    options: [
      { id: "a", text: "130", isCorrect: false, distractorRationale: "O aluno tirou a média dos três primeiros dias." },
      { id: "b", text: "140", isCorrect: false, distractorRationale: "O aluno tirou a média de seg, ter, qua." },
      { id: "c", text: "150", isCorrect: true, distractorRationale: null },
      { id: "d", text: "160", isCorrect: false, distractorRationale: "O aluno somou os dois maiores com outro número." },
      { id: "e", text: "450", isCorrect: false, distractorRationale: "O aluno apenas somou e não dividiu." }
    ],
    detailedExplanation: {
      summary: "A média móvel foca num intervalo mais recente de dias, no caso, os últimos 3 dias dados.",
      stepByStep: [
        "Passo 1: Identificar os três dias para cálculo na quinta: terça (150), quarta (130) e quinta (170).",
        "Passo 2: Somar os casos desses dias: 150 + 130 + 170 = 450.",
        "Passo 3: Dividir pelo número de dias (3): 450 / 3 = 150."
      ],
      coreConcept: "Conceito de média móvel.",
      trapWarning: "Incluir dados antigos na média ou errar os dias selecionados."
    },
    commonTraps: ["janela_errada_para_media"],
    tags: ["media_movel", "saude"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-012",
    area: "matematica",
    competence: 6,
    skill: 26,
    topic: "Estatística",
    subtopic: "Desvio Padrão",
    difficulty: 4,
    estimatedTimeSeconds: 240,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um clube de São Paulo, o treinador quer escalar o atleta mais regular nos saltos. O Atleta A teve saltos de: 6,0m; 6,5m; 7,0m (Média=6,5m). O Atleta B teve saltos de: 6,3m; 6,5m; 6,7m (Média=6,5m). O treinador escolherá quem apresentar o menor desvio padrão.",
      source: "Original"
    },
    prompt: "Sendo as variâncias dos atletas dadas por Var(A) e Var(B), é correto afirmar que:",
    options: [
      { id: "a", text: "O Atleta A será escolhido porque sua amplitude é maior.", isCorrect: false, distractorRationale: "O aluno confundiu amplitude com regularidade." },
      { id: "b", text: "O Atleta A será escolhido pois Var(A) < Var(B).", isCorrect: false, distractorRationale: "O aluno calculou a variância de forma invertida." },
      { id: "c", text: "O Atleta B será escolhido pois possui desvios em relação à média menores, implicando Var(B) < Var(A).", isCorrect: true, distractorRationale: null },
      { id: "d", text: "Ambos têm a mesma chance, pois a média é idêntica, logo o desvio padrão é o mesmo.", isCorrect: false, distractorRationale: "O aluno achou que médias iguais geram dispersões iguais." },
      { id: "e", text: "Nenhum pode ser escolhido por falta de dados para cálculo de variância.", isCorrect: false, distractorRationale: "Achou que falta uma variável." }
    ],
    detailedExplanation: {
      summary: "O desvio padrão e a variância medem a dispersão dos dados em relação à média. Menor dispersão = maior regularidade.",
      stepByStep: [
        "Passo 1: Observar que ambos têm média 6,5.",
        "Passo 2: Atleta B varia apenas 0,2 para mais e para menos da média.",
        "Passo 3: Atleta A varia 0,5 para mais e para menos.",
        "Passo 4: Logo, Atleta B é mais concentrado em torno da média, tendo menor variância e menor desvio padrão, sendo o mais regular."
      ],
      coreConcept: "Variância e Desvio Padrão como medidas de regularidade.",
      trapWarning: "Achar que médias iguais significam desempenhos identicamente regulares."
    },
    commonTraps: ["associar_media_igual_desvio_igual"],
    tags: ["desvio_padrao", "variancia", "regularidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-013",
    area: "matematica",
    competence: 6,
    skill: 26,
    topic: "Estatística",
    subtopic: "Variância",
    difficulty: 4,
    estimatedTimeSeconds: 240,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A prefeitura do RJ testou a espessura do asfalto (em cm) em 3 pontos de uma nova via: 8, 10 e 12. A especificação técnica aprova a obra se a variância dessa amostra de 3 pontos for menor que 5 cm².",
      source: "Original"
    },
    prompt: "Qual o valor da variância amostral obtida (dividindo-se por n, como se fosse variância populacional simplificada) e qual a decisão da prefeitura?",
    options: [
      { id: "a", text: "Variância 2; obra aprovada.", isCorrect: false, distractorRationale: "O aluno dividiu a soma dos desvios (4) por 2 em vez de tirar os quadrados, ou erro de cálculo." },
      { id: "b", text: "Variância 2,66; obra aprovada.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Variância 4; obra aprovada.", isCorrect: false, distractorRationale: "Calculou a soma dos quadrados (8) mas dividiu por 2." },
      { id: "d", text: "Variância 5,33; obra reprovada.", isCorrect: false, distractorRationale: "Multiplicou algo errado." },
      { id: "e", text: "Variância 8; obra reprovada.", isCorrect: false, distractorRationale: "Esqueceu de dividir pela quantidade de pontos (n=3)." }
    ],
    detailedExplanation: {
      summary: "A variância populacional é a média dos quadrados dos desvios de cada valor em relação à média do conjunto.",
      stepByStep: [
        "Passo 1: Média = (8 + 10 + 12)/3 = 30/3 = 10.",
        "Passo 2: Calcular desvios: (8-10)=-2, (10-10)=0, (12-10)=2.",
        "Passo 3: Elevar desvios ao quadrado: (-2)²=4, 0²=0, 2²=4.",
        "Passo 4: Somar quadrados e dividir por n (3): (4 + 0 + 4)/3 = 8/3 ≈ 2,66.",
        "Passo 5: Como 2,66 < 5, a obra é aprovada."
      ],
      coreConcept: "Cálculo de Variância.",
      trapWarning: "Esquecer de elevar os desvios ao quadrado gera soma zero."
    },
    commonTraps: ["esquecer_quadrado_dos_desvios"],
    tags: ["variancia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-014",
    area: "matematica",
    competence: 6,
    skill: 26,
    topic: "Estatística",
    subtopic: "Impacto de Outliers",
    difficulty: 5,
    estimatedTimeSeconds: 200,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma corretora, 4 funcionários recebem salários iguais a R$ 3.000,00. O diretor que se junta a eles ganha R$ 23.000,00. Com a chegada do diretor, um analista quer recalcular a média e a mediana da equipe de 5 pessoas.",
      source: "Original"
    },
    prompt: "Com a adição do salário do diretor (outlier), qual será o aumento no valor da média e da mediana dos salários, respectivamente?",
    options: [
      { id: "a", text: "R$ 4.000,00 e R$ 0,00", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 4.000,00 e R$ 3.000,00", isCorrect: false, distractorRationale: "Achou que a mediana também cresceria para o próximo valor." },
      { id: "c", text: "R$ 7.000,00 e R$ 0,00", isCorrect: false, distractorRationale: "O aluno calculou a nova média, mas não o 'aumento' em relação à média antiga." },
      { id: "d", text: "R$ 5.000,00 e R$ 1.500,00", isCorrect: false, distractorRationale: "Divisão errada por causa do outlier." },
      { id: "e", text: "A média não muda, mas a mediana aumenta em R$ 4.000,00", isCorrect: false, distractorRationale: "Inverteu os conceitos de média e mediana no contexto de robustez." }
    ],
    detailedExplanation: {
      summary: "A média é fortemente influenciada por valores extremos (outliers), enquanto a mediana é resistente.",
      stepByStep: [
        "Passo 1: Antes: 4 salários de 3000. Média = 3000, Mediana = 3000.",
        "Passo 2: Depois: 3000, 3000, 3000, 3000, 23000.",
        "Passo 3: Nova mediana: O 3º termo é 3000. Logo, a mediana continua 3000 (Aumento = 0).",
        "Passo 4: Nova média: (4*3000 + 23000) / 5 = 35000 / 5 = 7000.",
        "Passo 5: Aumento da média: 7000 - 3000 = 4000."
      ],
      coreConcept: "Robustez da mediana versus sensibilidade da média a outliers.",
      trapWarning: "O enunciado pede o *aumento* do valor, e não o *novo* valor."
    },
    commonTraps: ["ler_novo_valor_em_vez_de_aumento", "nao_saber_robustez_mediana"],
    tags: ["outliers", "media_mediana_comparacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-015",
    area: "matematica",
    competence: 6,
    skill: 26,
    topic: "Estatística",
    subtopic: "Coeficiente de Variação",
    difficulty: 5,
    estimatedTimeSeconds: 240,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na B3, a ação XPTO tem um preço médio anual de R$ 50,00 com desvio padrão de R$ 5,00. A ação YZWK tem preço médio de R$ 10,00 com desvio padrão de R$ 2,00. O risco relativo (coeficiente de variação) indica o quão arriscado é o ativo em relação ao seu próprio preço.",
      source: "Original"
    },
    prompt: "Com base no coeficiente de variação (Desvio Padrão / Média), qual ação é percentualmente mais volátil (arriscada) e qual o seu respectivo coeficiente?",
    options: [
      { id: "a", text: "XPTO, com coeficiente de 10%", isCorrect: false, distractorRationale: "O aluno calculou o da XPTO e ignorou que YZWK é maior." },
      { id: "b", text: "XPTO, com coeficiente de 0,5", isCorrect: false, distractorRationale: "Erro no cálculo." },
      { id: "c", text: "YZWK, com coeficiente de 20%", isCorrect: true, distractorRationale: null },
      { id: "d", text: "YZWK, com coeficiente de 5%", isCorrect: false, distractorRationale: "Errou a divisão de 2/10." },
      { id: "e", text: "Ambas possuem o mesmo risco, pois a diferença absoluta entre média e desvio é proporcional.", isCorrect: false, distractorRationale: "Conclusão estatística falsa." }
    ],
    detailedExplanation: {
      summary: "O coeficiente de variação (CV) é dado por (Desvio Padrão / Média) * 100, permitindo comparar dispersões de dados em escalas diferentes.",
      stepByStep: [
        "Passo 1: CV da XPTO = (5 / 50) * 100 = 0,10 * 100 = 10%.",
        "Passo 2: CV da YZWK = (2 / 10) * 100 = 0,20 * 100 = 20%.",
        "Passo 3: Comparar: 20% > 10%. Logo, YZWK tem maior risco percentual."
      ],
      coreConcept: "Coeficiente de variação.",
      trapWarning: "Julgar apenas pelo desvio padrão bruto (onde XPTO de 5 seria 'maior' que 2), ignorando a proporção."
    },
    commonTraps: ["usar_desvio_absoluto_sem_cv"],
    tags: ["coeficiente_de_variacao", "risco"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-016",
    area: "matematica",
    competence: 6,
    skill: 24,
    topic: "Estatística",
    subtopic: "Mediana em Tabela de Frequência",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A coordenação pedagógica de uma escola analisou o número de livros lidos por mês pelos 40 estudantes de uma turma do 3º ano do Ensino Médio. Os resultados foram dispostos na seguinte tabela de distribuição de frequências:\n\n• 0 livros: 4 estudantes\n• 1 livro: 10 estudantes\n• 2 livros: 12 estudantes\n• 3 livros: 8 estudantes\n• 4 livros: 6 estudantes",
      source: "Simulado ENEM Inep"
    },
    prompt: "Com base nos dados apresentados na tabela de distribuição de frequências, a mediana do número de livros lidos por essa turma de estudantes é igual a:",
    options: [
      { id: "a", text: "1,5", isCorrect: false, distractorRationale: "O estudante calculou a média simples entre a quantidade mínima (0) e a moda mais comum (3), ou fez a média entre 1 e 2 incorretamente." },
      { id: "b", text: "2,0", isCorrect: true, distractorRationale: null },
      { id: "c", text: "2,5", isCorrect: false, distractorRationale: "O estudante fez a média simples entre os valores extremos da variável (0 e 4) ou (1 e 4), ignorando as frequências acumuladas." },
      { id: "d", text: "2,1", isCorrect: false, distractorRationale: "O estudante calculou a média aritmética ponderada dos livros lidos (84/40 = 2,1) em vez da mediana solicitada." },
      { id: "e", text: "3,0", isCorrect: false, distractorRationale: "O estudante escolheu a posição central da lista de categorias (0, 1, 2, 3, 4) ignorando as frequências absolutas da amostra." }
    ],
    detailedExplanation: {
      summary: "Para uma amostra par de N = 40 observações, a mediana é a média aritmética entre o 20º e o 21º termos da distribuição ordenada.",
      stepByStep: [
        "Passo 1: Determinar o tamanho total da amostra: N = 4 + 10 + 12 + 8 + 6 = 40 estudantes.",
        "Passo 2: Por ser N par, as posições centrais são N/2 = 20ª e (N/2 + 1) = 21ª posições do rol ordenado.",
        "Passo 3: Construir a frequência acumulada (Fac):\n- Até 0 livros: 4 alunos (posições 1 a 4);\n- Até 1 livro: 4 + 10 = 14 alunos (posições 5 a 14);\n- Até 2 livros: 14 + 12 = 26 alunos (posições 15 a 26).",
        "Passo 4: Como as posições 20ª e 21ª estão ambas compreendidas no intervalo da frequência acumulada de 2 livros (entre a 15ª e a 26ª posição), ambos os valores centrais são iguais a 2.",
        "Passo 5: Mediana = (2 + 2) / 2 = 2 livros."
      ],
      coreConcept: "Mediana em dados discretos com tabela de frequências acumuladas.",
      trapWarning: "Confundir mediana com a média aritmética dos dados (que resulta em 2,1) ou com o ponto médio das categorias da tabela."
    },
    commonTraps: ["confundir_mediana_com_media", "ignorar_frequencia_acumulada"],
    tags: ["mediana", "tabela_frequencia", "estatistica_enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-017",
    area: "matematica",
    competence: 6,
    skill: 25,
    topic: "Estatística",
    subtopic: "Média Ponderada",
    difficulty: 3,
    estimatedTimeSeconds: 200,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No processo seletivo do SiSU para o curso de Medicina em determinada universidade federal, as notas dos candidatos no ENEM são ponderadas de acordo com os seguintes pesos regimentais:\n\n• Redação: peso 3\n• Ciências da Natureza: peso 3\n• Matemática: peso 2\n• Ciências Humanas: peso 1\n• Linguagens e Códigos: peso 1\n\nBeatriz obteve as seguintes pontuações em quatro das áreas avaliadas: Redação = 960; Ciências Humanas = 780; Linguagens = 740; Matemática = 850.",
      source: "Simulado SiSU Medicina"
    },
    prompt: "Para que a média final ponderada de Beatriz no SiSU atinja exatamente 850 pontos, qual pontuação mínima ela deve obter na prova de Ciências da Natureza?",
    options: [
      { id: "a", text: "800", isCorrect: false, distractorRationale: "O estudante assumiu pesos iguais a 1 para todas as áreas (média aritmética simples)." },
      { id: "b", text: "820", isCorrect: false, distractorRationale: "Erro na soma dos produtos das outras áreas ou na divisão pelo peso de Natureza." },
      { id: "c", text: "840", isCorrect: true, distractorRationale: null },
      { id: "d", text: "860", isCorrect: false, distractorRationale: "O estudante esqueceu de multiplicar a média pretendida (850) pela soma total dos pesos (10)." },
      { id: "e", text: "880", isCorrect: false, distractorRationale: "O estudante somou pesos incorretos (considerou peso total como 9)." }
    ],
    detailedExplanation: {
      summary: "A média ponderada requer que a soma dos produtos (nota × peso) dividida pela soma dos pesos seja igual a 850.",
      stepByStep: [
        "Passo 1: Calcular a soma dos pesos: Peso Total = 3 (Redação) + 3 (Natureza) + 2 (Matemática) + 1 (Humanas) + 1 (Linguagens) = 10.",
        "Passo 2: Escrever a equação da média ponderada:\n[(960 × 3) + (N × 3) + (850 × 2) + (780 × 1) + (740 × 1)] / 10 = 850.",
        "Passo 3: Multiplicar a média pela soma dos pesos: Total de pontos ponderados necessários = 850 × 10 = 8500.",
        "Passo 4: Calcular a soma dos pontos já obtidos:\n960 × 3 = 2880\n850 × 2 = 1700\n780 × 1 = 780\n740 × 1 = 740\nSoma parcial = 2880 + 1700 + 780 + 740 = 6100 pontos.",
        "Passo 5: Determinar os pontos faltantes da prova de Natureza:\n3 × N = 8500 - 6100 = 2400.\nN = 2400 / 3 = 840 pontos."
      ],
      coreConcept: "Média aritmética ponderada e equações lineares com pesos de vestibular.",
      trapWarning: "Tratar todas as disciplinas como se tivessem peso 1, o que distorce completamente a nota necessária."
    },
    commonTraps: ["media_simples_em_vez_de_ponderada", "errar_soma_dos_pesos"],
    tags: ["media_ponderada", "sisu", "medicina_pesos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-018",
    area: "matematica",
    competence: 6,
    skill: 26,
    topic: "Estatística",
    subtopic: "Assimetria e Medidas de Tendência Central",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma pesquisa socioeconômica sobre a distribuição de renda em um município de pequeno porte, constatou-se que a grande maioria dos trabalhadores recebe valores próximos ao salário mínimo (cerca de R$ 1.500,00), enquanto um grupo muito reduzido de grandes empresários e proprietários de terras aufere rendimentos superiores a R$ 80.000,00 mensais. O gráfico dessa distribuição de renda apresenta uma assimetria positiva marcante (cauda longa à direita).",
      source: "IBGE / Ipea"
    },
    prompt: "Em uma distribuição unimodal com forte assimetria positiva como a descrita, qual é a relação de grandeza esperada entre a moda (Mo), a mediana (Me) e a média aritmética (X̄) dos salários?",
    options: [
      { id: "a", text: "X̄ < Me < Mo", isCorrect: false, distractorRationale: "Essa relação é característica de distribuições com assimetria negativa (cauda à esquerda)." },
      { id: "b", text: "Mo = Me = X̄", isCorrect: false, distractorRationale: "Essa igualdade ocorre exclusivamente em distribuições perfeitamente simétricas (como a normal)." },
      { id: "c", text: "Mo < Me < X̄", isCorrect: true, distractorRationale: null },
      { id: "d", text: "Me < Mo < X̄", isCorrect: false, distractorRationale: "A mediana sempre fica situada entre a moda e a média em distribuições unimodais assimétricas." },
      { id: "e", text: "Mo < X̄ < Me", isCorrect: false, distractorRationale: "A média é a medida mais suscetível a valores extremos puxados pela cauda longa da direita, sendo sempre a maior." }
    ],
    detailedExplanation: {
      summary: "Em distribuições com assimetria à direita (positiva), a média é fortemente deslocada para cima pelos outliers elevados, ficando acima da mediana, enquanto a moda permanece no pico de concentração mais baixo.",
      stepByStep: [
        "Passo 1: Identificar a posição da Moda (Mo): é o ponto de maior densidade (o salário mais frequente, próximo de R$ 1.500,00).",
        "Passo 2: Identificar o comportamento da Mediana (Me): divide a população ao meio (50% abaixo, 50% acima). Ela é robusta e sofre pouca influência dos valores discrepantes.",
        "Passo 3: Identificar o comportamento da Média (X̄): é a soma de todos os salários dividida pelo total de trabalhadores. Os poucos salários altíssimos (R$ 80.000+) elevam substancialmente a média aritmética.",
        "Passo 4: Concluir a ordenação: Moda < Mediana < Média (Mo < Me < X̄)."
      ],
      coreConcept: "Assimetria de distribuições e a sensibilidade comparativa entre média, mediana e moda diante de outliers.",
      trapWarning: "Achar que a mediana é a maior porque representa o meio, ou supor simetria numa distribuição salarial real."
    },
    commonTraps: ["confundir_assimetria_positiva_com_negativa", "supor_igualdade_em_dados_reais"],
    tags: ["assimetria", "media_mediana_moda", "distribuicao_renda"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-019",
    area: "matematica",
    competence: 6,
    skill: 26,
    topic: "Estatística",
    subtopic: "Desvio Padrão e Regularidade",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O treinador de uma equipe escolar de atletismo precisa selecionar um dos cinco atletas finalistas para representar a escola nos Jogos da Juventude na prova de 100 metros rasos. Durante os treinos preparatórios, foram cronometrados os tempos de 10 corridas de cada competidor. Ao tabular os resultados, o treinador verificou que todos os cinco atletas obtiveram exatamente o mesmo tempo médio de 11,80 segundos. Os desvios padrão dos tempos de cada atleta foram:\n\n• Atleta I: 0,45 s\n• Atleta II: 0,12 s\n• Atleta III: 0,80 s\n• Atleta IV: 0,28 s\n• Atleta V: 0,64 s",
      source: "Simulado Inep"
    },
    prompt: "O critério de desempate adotado pelo treinador foi escolher o atleta mais regular, isto é, aquele que apresenta o desempenho mais homogêneo e previsível ao longo de suas corridas. Segundo esse critério, o atleta selecionado foi o:",
    options: [
      { id: "a", text: "Atleta I", isCorrect: false, distractorRationale: "O estudante escolheu um atleta intermediário com dispersão moderada." },
      { id: "b", text: "Atleta II", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Atleta III", isCorrect: false, distractorRationale: "O estudante confundiu maior regularidade com maior desvio padrão (o Atleta III é, na verdade, o mais irregular de todos)." },
      { id: "d", text: "Atleta IV", isCorrect: false, distractorRationale: "O estudante selecionou o segundo menor desvio padrão por erro de leitura de casas decimais." },
      { id: "e", text: "Atleta V", isCorrect: false, distractorRationale: "O estudante interpretou regularidade como ter valores próximos da média dos desvios." }
    ],
    detailedExplanation: {
      summary: "Em estatística, regularidade e homogeneidade de uma série de dados são medidas pela menor dispersão, ou seja, pelo menor desvio padrão (ou menor variância).",
      stepByStep: [
        "Passo 1: Compreender o conceito de regularidade estatística: quanto menor for o desvio padrão, menor é o espalhamento dos dados em torno da média, o que indica maior consistência e homogeneidade.",
        "Passo 2: Analisar os desvios padrão fornecidos: 0,45; 0,12; 0,80; 0,28; 0,64.",
        "Passo 3: Identificar o menor desvio padrão: 0,12 s, correspondente ao Atleta II.",
        "Passo 4: Concluir que o Atleta II é o competidor mais regular da equipe."
      ],
      coreConcept: "Interpretação do desvio padrão como índice de regularidade e homogeneidade em provas do ENEM.",
      trapWarning: "Achar que regularidade significa maior desvio padrão ou que desvio padrão mede velocidade máxima em vez de estabilidade de desempenho."
    },
    commonTraps: ["associar_maior_desvio_a_maior_regularidade"],
    tags: ["desvio_padrao", "regularidade", "interpretacao_dispersao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-020",
    area: "matematica",
    competence: 6,
    skill: 25,
    topic: "Estatística",
    subtopic: "Transformação Linear de Variáveis Estatísticas",
    difficulty: 4,
    estimatedTimeSeconds: 210,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma turma de cursinho comunitário com 30 estudantes, a prova simulada de Matemática teve média aritmética de 600 pontos e desvio padrão de 80 pontos. O professor constatou que duas questões possuíam enunciado ambíguo e decidiu conceder uma bonificação linear de 50 pontos na nota final de todos os 30 estudantes da turma, independentemente de seus acertos anteriores.",
      source: "Original TRI Educacional"
    },
    prompt: "Após a aplicação desse acréscimo constante de 50 pontos à nota de cada estudante, os novos valores da média aritmética e do desvio padrão dessa turma passaram a ser, respectivamente:",
    options: [
      { id: "a", text: "650 pontos e 130 pontos", isCorrect: false, distractorRationale: "O estudante somou 50 pontos tanto à média quanto ao desvio padrão, esquecendo que o desvio padrão não se altera com adição de constante." },
      { id: "b", text: "650 pontos e 80 pontos", isCorrect: true, distractorRationale: null },
      { id: "c", text: "600 pontos e 80 pontos", isCorrect: false, distractorRationale: "O estudante julgou que nenhuma medida estatística seria modificada pelo acréscimo linear." },
      { id: "d", text: "650 pontos e 40 pontos", isCorrect: false, distractorRationale: "O estudante supôs que a dispersão diminui quando as notas sobem." },
      { id: "e", text: "600 pontos e 130 pontos", isCorrect: false, distractorRationale: "O estudante manteve a média e alterou erroneamente o desvio." }
    ],
    detailedExplanation: {
      summary: "Ao somar uma constante c a todos os valores de uma amostra, as medidas de tendência central aumentam em c, enquanto as medidas de dispersão (variância e desvio padrão) permanecem rigorosamente idênticas.",
      stepByStep: [
        "Passo 1: Propriedade da média sob adição: Se Yi = Xi + c, então Média(Y) = Média(X) + c. Logo, Nova Média = 600 + 50 = 650 pontos.",
        "Passo 2: Propriedade do desvio padrão sob adição: O desvio padrão mede a distância de cada valor em relação à média: (Yi - Média(Y)) = (Xi + c) - (Média(X) + c) = Xi - Média(X).",
        "Passo 3: As distâncias relativas entre os elementos da distribuição permanecem inalteradas, pois toda a curva é apenas transladada rigidamente ao longo do eixo.",
        "Passo 4: Portanto, o desvio padrão não se altera: permanece 80 pontos."
      ],
      coreConcept: "Invariância das medidas de dispersão frente à translação por soma de constante.",
      trapWarning: "Somar o acréscimo linear também ao desvio padrão. Constantes somadas deslocam o centro, mas não aumentam a dispersão entre os dados."
    },
    commonTraps: ["somar_constante_ao_desvio_padrao"],
    tags: ["propriedades_estatisticas", "desvio_padrao", "translacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-021",
    area: "matematica",
    competence: 6,
    skill: 24,
    topic: "Estatística",
    subtopic: "Média Combinada de Dois Grupos",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma rede de ensino possui duas turmas de preparação intensiva para o ENEM: a Turma Alfa, composta por 30 estudantes, cuja média na prova de Redação foi de 840 pontos; e a Turma Beta, composta por 20 estudantes, cuja média na mesma prova foi de 900 pontos.",
      source: "Simulado Redação Nota 1000"
    },
    prompt: "Ao reunir todos os 50 estudantes das duas turmas em um único grupo consolidado, a média aritmética geral das notas de Redação passa a ser de:",
    options: [
      { id: "a", text: "870 pontos", isCorrect: false, distractorRationale: "O estudante calculou a média simples das médias (840 + 900)/2 = 870, desconsiderando que a Turma Alfa tem 50% mais alunos que a Turma Beta." },
      { id: "b", text: "864 pontos", isCorrect: true, distractorRationale: null },
      { id: "c", text: "860 pontos", isCorrect: false, distractorRationale: "Erro de arredondamento ou cálculo na divisão pelo total de 50 estudantes." },
      { id: "d", text: "852 pontos", isCorrect: false, distractorRationale: "O estudante atribuiu maior peso à Turma Beta equivocadamente." },
      { id: "e", text: "875 pontos", isCorrect: false, distractorRationale: "O estudante fez ponderação com pesos invertidos." }
    ],
    detailedExplanation: {
      summary: "A média consolidada de dois grupos é a soma de todos os pontos obtidos dividida pelo total absoluto de participantes, equivalendo a uma média ponderada pelos tamanhos das turmas.",
      stepByStep: [
        "Passo 1: Calcular o somatório das notas da Turma Alfa: Soma(Alfa) = 30 alunos × 840 pontos = 25.200 pontos.",
        "Passo 2: Calcular o somatório das notas da Turma Beta: Soma(Beta) = 20 alunos × 900 pontos = 18.000 pontos.",
        "Passo 3: Somar a pontuação total dos dois grupos: Pontos Totais = 25.200 + 18.000 = 43.200 pontos.",
        "Passo 4: Calcular o número total de alunos: N = 30 + 20 = 50 estudantes.",
        "Passo 5: Calcular a média geral: Média = 43.200 / 50 = 864 pontos."
      ],
      coreConcept: "Média combinada de amostras de tamanhos distintos.",
      trapWarning: "Fazer a média simples das médias ((840 + 900) / 2 = 870). Isso só seria correto se as duas turmas tivessem exatamente o mesmo número de alunos."
    },
    commonTraps: ["media_simples_de_medias_com_tamanhos_diferentes"],
    tags: ["media_ponderada", "agrupamento", "estatistica_basica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-022",
    area: "matematica",
    competence: 6,
    skill: 24,
    topic: "Estatística",
    subtopic: "Mediana com Quantidade Ímpar vs Par de Elementos",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um posto de saúde registrou a quantidade diária de atendimentos pediátricos durante os 7 dias de funcionamento de uma semana: 32, 18, 45, 27, 39, 21, 35.",
      source: "Secretaria Municipal de Saúde"
    },
    prompt: "Qual é a mediana do número de atendimentos pediátricos diários registrados nesse posto durante essa semana?",
    options: [
      { id: "a", text: "27", isCorrect: false, distractorRationale: "O estudante escolheu o 4º termo da lista original sem antes ordenar os dados em rol." },
      { id: "b", text: "31", isCorrect: false, distractorRationale: "O estudante calculou a média aritmética de todos os atendimentos (217 / 7 = 31) em vez da mediana." },
      { id: "c", text: "32", isCorrect: true, distractorRationale: null },
      { id: "d", text: "35", isCorrect: false, distractorRationale: "O estudante ordenou os dados mas selecionou o 5º termo em vez do elemento central." },
      { id: "e", text: "21", isCorrect: false, distractorRationale: "O estudante escolheu o segundo menor valor da amostra." }
    ],
    detailedExplanation: {
      summary: "Para determinar a mediana de uma amostra, o primeiro e indispensável passo é ordenar os valores em ordem crescente (rol). Com N = 7 (ímpar), a mediana é exatamente o 4º termo.",
      stepByStep: [
        "Passo 1: Organizar os dados em ordem crescente (Rol):\n18, 21, 27, 32, 35, 39, 45.",
        "Passo 2: Identificar a quantidade de elementos: N = 7 (número ímpar).",
        "Passo 3: Localizar a posição do termo central: Posição = (N + 1) / 2 = (7 + 1) / 2 = 4º termo.",
        "Passo 4: Observar o 4º elemento do rol ordenado: é o número 32.",
        "Passo 5: Portanto, a mediana é 32 atendimentos."
      ],
      coreConcept: "Construção do rol ordenado e identificação da mediana em amostras ímpares.",
      trapWarning: "Pegar o termo que está no meio visual da sequência desordenada fornecida no enunciado (que é 27)."
    },
    commonTraps: ["esquecer_de_ordenar_os_dados", "confundir_com_media_aritmetica"],
    tags: ["rol", "mediana", "amostra_impar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-023",
    area: "matematica",
    competence: 6,
    skill: 24,
    topic: "Estatística",
    subtopic: "Impacto da Exclusão de Outliers na Média",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma competição de ginástica artística, a nota final de uma atleta em determinado aparelho é calculada descartando-se a maior e a menor nota entre as seis atribuídas pelo corpo de jurados e calculando-se a média aritmética simples das quatro notas restantes. As seis notas emitidas pelos juízes foram: 8,2; 8,8; 9,0; 9,2; 9,4; 9,8.",
      source: "Federação Internacional de Ginástica"
    },
    prompt: "De acordo com o regulamento oficial da competição, a nota final homologada para essa atleta foi de:",
    options: [
      { id: "a", text: "8,80", isCorrect: false, distractorRationale: "O estudante selecionou a menor nota válida sem calcular a média das quatro." },
      { id: "b", text: "9,07", isCorrect: false, distractorRationale: "O estudante calculou a média simples de todas as 6 notas sem descartar os extremos (54,4 / 6 ≈ 9,07)." },
      { id: "c", text: "9,10", isCorrect: true, distractorRationale: null },
      { id: "d", text: "9,20", isCorrect: false, distractorRationale: "O estudante fez a média simples apenas entre a menor e a maior nota válida (8,8 + 9,4) / 2 = 9,10... ou escolheu o valor intermediário superior." },
      { id: "e", text: "9,40", isCorrect: false, distractorRationale: "O estudante selecionou a maior nota válida sem calcular a média." }
    ],
    detailedExplanation: {
      summary: "O descarte de valores extremos (outliers superior e inferior) reduz a vulnerabilidade da média, gerando a chamada média aparada (trimmed mean).",
      stepByStep: [
        "Passo 1: Escrever as 6 notas em ordem crescente (Rol):\n8,2 ; 8,8 ; 9,0 ; 9,2 ; 9,4 ; 9,8.",
        "Passo 2: Identificar os extremos a serem eliminados pelo regulamento:\n- Menor nota descartada: 8,2;\n- Maior nota descartada: 9,8.",
        "Passo 3: Selecionar as 4 notas restantes:\n8,8 ; 9,0 ; 9,2 ; 9,4.",
        "Passo 4: Somar as notas válidas:\n8,8 + 9,0 + 9,2 + 9,4 = 36,4.",
        "Passo 5: Calcular a média aritmética final:\nNota Final = 36,4 / 4 = 9,10."
      ],
      coreConcept: "Média aparada (trimmed mean) e eliminação de valores discrepantes.",
      trapWarning: "Dividir a soma por 6 em vez de 4 ou esquecer de descartar o maior e o menor valor."
    },
    commonTraps: ["esquecer_de_descartar_extremos", "dividir_por_6"],
    tags: ["media_aparada", "outliers", "ginastica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-024",
    area: "matematica",
    competence: 6,
    skill: 24,
    topic: "Estatística",
    subtopic: "Cálculo de Média Faltante com Meta Estabelecida",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma fábrica de lâmpadas LED realiza um controle de qualidade diário inspecionando lotes de produção. Para que o lote semanal seja aprovado para comercialização, a média de durabilidade contínua testada em 5 lâmpadas amostradas deve ser de, no mínimo, 1.200 horas. As primeiras quatro lâmpadas testadas resistiram por: 1.150 h, 1.220 h, 1.180 h e 1.210 h.",
      source: "Inmetro / Controle de Qualidade"
    },
    prompt: "Para que o lote seja aprovado exatamente no limite mínimo exigido pela norma técnica, a quinta lâmpada amostrada deve apresentar uma durabilidade de, pelo menos:",
    options: [
      { id: "a", text: "1.200 horas", isCorrect: false, distractorRationale: "O estudante achou que a última lâmpada precisa ter exatamente a média pretendida." },
      { id: "b", text: "1.240 horas", isCorrect: true, distractorRationale: null },
      { id: "c", text: "1.220 horas", isCorrect: false, distractorRationale: "O estudante calculou a média das 4 primeiras lâmpadas e supôs que ela seria suficiente." },
      { id: "d", text: "1.260 horas", isCorrect: false, distractorRationale: "Erro na soma das 4 primeiras lâmpadas." },
      { id: "e", text: "1.190 horas", isCorrect: false, distractorRationale: "O estudante compensou erroneamente os desvios abaixo da meta." }
    ],
    detailedExplanation: {
      summary: "Para atingir uma média M em N elementos, a soma total dos elementos deve ser no mínimo N × M.",
      stepByStep: [
        "Passo 1: Calcular a soma total necessária para as 5 lâmpadas: Soma Mínima = 5 × 1.200 = 6.000 horas.",
        "Passo 2: Somar as horas das 4 primeiras lâmpadas já testadas:\n1.150 + 1.220 + 1.180 + 1.210 = 4.760 horas.",
        "Passo 3: Subtrair a soma parcial da meta total: Quinta Lâmpada = 6.000 - 4.760 = 1.240 horas.",
        "Passo 4: Verificação por desvios em relação à média 1.200:\n(-50) + (+20) + (-20) + (+10) = -40 horas.\nPara zerar a soma dos desvios, a última lâmpada precisa de 1.200 + 40 = 1.240 horas."
      ],
      coreConcept: "Propriedade da média aritmética onde a soma dos desvios em relação à média é nula.",
      trapWarning: "Achar que tirar a média almejada (1.200) na última avaliação compensa os déficits acumulados anteriormente."
    },
    commonTraps: ["supor_que_basta_tirar_a_media_na_ultima_etapa"],
    tags: ["media_aritmetica", "meta", "controle_qualidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-EST-025",
    area: "matematica",
    competence: 6,
    skill: 26,
    topic: "Estatística",
    subtopic: "Interpretação de Boxplot e Amplitude Interquartil",
    difficulty: 4,
    estimatedTimeSeconds: 200,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um relatório estatístico de desempenho dos candidatos de um concurso público, as notas de uma prova foram sintetizadas por meio de um gráfico de diagrama de caixas (Boxplot). Os cinco números que compõem o sumário da distribuição foram:\n\n• Valor mínimo: 30 pontos\n• Primeiro quartil (Q1): 55 pontos\n• Mediana ou Segundo quartil (Q2): 68 pontos\n• Terceiro quartil (Q3): 82 pontos\n• Valor máximo: 98 pontos\n(Não houve registro de outliers segundo o critério de Tukey).",
      source: "Fundação Getulio Vargas (FGV)"
    },
    prompt: "A partir dessas informações do Boxplot, a amplitude interquartil (IQR) dessa distribuição de notas e o percentual aproximado de candidatos situados entre o primeiro e o terceiro quartil são, respectivamente:",
    options: [
      { id: "a", text: "27 pontos e 50%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "68 pontos e 50%", isCorrect: false, distractorRationale: "O estudante confundiu a amplitude interquartil com o valor da mediana (Q2 = 68)." },
      { id: "c", text: "27 pontos e 25%", isCorrect: false, distractorRationale: "O estudante pensou que a distância entre dois quartis representa apenas 25% da amostra, esquecendo que de Q1 a Q3 há dois quartis (50%)." },
      { id: "d", text: "68 pontos e 75%", isCorrect: false, distractorRationale: "O estudante associou amplitude ao valor da mediana e percentual acumulado até Q3." },
      { id: "e", text: "13 pontos e 50%", isCorrect: false, distractorRationale: "O estudante calculou apenas a diferença entre a mediana e Q1 (68 - 55 = 13)." }
    ],
    detailedExplanation: {
      summary: "A amplitude interquartil (IQR) é a diferença entre o terceiro e o primeiro quartil (Q3 - Q1), e delimita os 50% centrais de toda a distribuição de dados.",
      stepByStep: [
        "Passo 1: Compreender o conceito de amplitude interquartil: IQR = Q3 - Q1.",
        "Passo 2: Calcular a diferença: IQR = 82 - 55 = 27 pontos.",
        "Passo 3: Interpretar o significado percentual dos quartis: Q1 delimita os 25% inferiores; Q3 delimita os 75% inferiores.",
        "Passo 4: O intervalo compreendido dentro da 'caixa' (entre Q1 e Q3) abriga exatamente 75% - 25% = 50% de todas as observações centrais da amostra."
      ],
      coreConcept: "Diagrama de caixas (Boxplot), quartis e amplitude interquartil (IQR).",
      trapWarning: "Confundir amplitude total (Máximo - Mínimo = 98 - 30 = 68) com amplitude interquartil (Q3 - Q1 = 27)."
    },
    commonTraps: ["confundir_amplitude_total_com_interquartil", "errar_percentual_entre_quartis"],
    tags: ["boxplot", "amplitude_interquartil", "quartis"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

