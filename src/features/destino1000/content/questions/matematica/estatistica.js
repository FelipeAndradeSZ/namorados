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
  }
];
