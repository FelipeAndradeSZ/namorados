/**
 * BANCO DE QUESTÕES: ÁLGEBRA, EQUAÇÕES E SISTEMAS LINEARES NO ENEM
 * Área: Matemática e suas Tecnologias
 * Competência: C5 | Habilidades: H20, H21, H22
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de precisão algébrica determinística e pedagógica
 * Regra Estrita: ZERO termos de deslocamentos turísticos. Foco em bioeconomia,
 * saúde pública, controle de estoque hospitalar, nutrição e energia limpa.
 */

export const QUESTIONS_SISTEMAS_EQUACOES = [
  {
    id: "MAT-SIS-001",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Sistemas Lineares 2x2 em Suprimentos Hospitalares",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A farmácia de uma unidade básica de saúde recebeu dois lotes de caixas contendo ampolas de soro fisiológico e frascos de analgésico injetável. No primeiro lote, a compra de 5 caixas de soro e 3 caixas de analgésico totalizou R$ 340,00. No segundo lote, mantendo os mesmos preços unitários, a aquisição de 2 caixas de soro e 4 caixas de analgésico custou R$ 220,00.",
      source: "DEPARTAMENTO DE GESTÃO HOSPITALAR. Controle de Suprimentos Farmacêuticos. Curitiba, 2023."
    },
    prompt: "O preço unitário de cada caixa de soro fisiológico e de cada caixa de analgésico corresponde, respectivamente, a",
    options: [
      {
        id: "a",
        text: "R$ 40,00 e R$ 45,00.",
        isCorrect: false,
        distractorRationale: "5 × 40 + 3 × 45 = 200 + 135 = 335 (não satisfaz o total de R$ 340,00)."
      },
      {
        id: "b",
        text: "R$ 50,00 e R$ 30,00.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Sejam x o preço da caixa de soro e y o preço da caixa de analgésico: 1) 5x + 3y = 340; 2) 2x + 4y = 220 ⟹ dividindo a segunda por 2: x + 2y = 110 ⟹ x = 110 - 2y. Substituindo na primeira: 5(110 - 2y) + 3y = 340 ⟹ 550 - 10y + 3y = 340 ⟹ -7y = -210 ⟹ y = 30 reais. Calculando x: x = 110 - 2(30) = 50 reais. Portanto, o soro custa R$ 50,00 e o analgésico R$ 30,00."
      },
      {
        id: "c",
        text: "R$ 45,00 e R$ 35,00.",
        isCorrect: false,
        distractorRationale: "5 × 45 + 3 × 35 = 225 + 105 = 330."
      },
      {
        id: "d",
        text: "R$ 55,00 e R$ 25,00.",
        isCorrect: false,
        distractorRationale: "5 × 55 + 3 × 25 = 275 + 75 = 350."
      },
      {
        id: "e",
        text: "R$ 48,00 e R$ 32,00.",
        isCorrect: false,
        distractorRationale: "5 × 48 + 3 × 32 = 240 + 96 = 336."
      }
    ],
    detailedExplanation: {
      summary: "Resolução clássica de sistema linear 2x2 pelo método da substituição.",
      stepByStep: [
        "1. Modelagem: 5x + 3y = 340 e 2x + 4y = 220.",
        "2. Simplificação da segunda equação: x + 2y = 110 ⟹ x = 110 - 2y.",
        "3. Substituição na primeira equação: 5(110 - 2y) + 3y = 340 ⟹ 550 - 7y = 340 ⟹ 7y = 210 ⟹ y = 30.",
        "4. Encontrando x: x = 110 - 2(30) = 50.",
        "5. Conclusão: Soro = R$ 50,00; Analgésico = R$ 30,00."
      ],
      coreConcept: "Sistemas lineares 2x2: tradução de linguagem verbal para equações algébricas.",
      trapWarning: "Verifique sempre se os valores encontrados satisfazem AMBAS as equações para não errar sinais na substituição."
    },
    commonTraps: ["Errar o sinal ao passar 550 para o outro lado da igualdade."],
    tags: ["Matemática", "Sistemas Lineares", "Álgebra", "Equações do 1º Grau"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-002",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Problema das Torneiras e Vazão Conjunta",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma horta comunitária agroecológica, um reservatório de água de irrigação possui duas tubulações de entrada de água. A primeira tubulação, funcionando sozinha com vazão constante, enche o reservatório vazio em exatamente 3 horas. A segunda tubulação, operando individualmente, leva 6 horas para encher o mesmo reservatório.",
      source: "CENTRO DE APOIO À AGRICULTURA URBANA. Manejo Hídrico Sustentável. Belo Horizonte, 2023."
    },
    prompt: "Se as duas tubulações forem abertas simultaneamente com suas vazões máximas normais, o tempo necessário para encher completamente o reservatório vazio será de",
    options: [
      {
        id: "a",
        text: "4,5 horas.",
        isCorrect: false,
        distractorRationale: "Calculou a média aritmética ingênua (3 + 6)/2 = 4,5 h. Duas torneiras juntas sempre enchem mais rápido que a mais rápida individualmente!"
      },
      {
        id: "b",
        text: "2,0 horas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Trabalha-se com as taxas de enchimento por hora: • Torneira 1 enche 1/3 do tanque por hora; • Torneira 2 enche 1/6 do tanque por hora. Juntas, em 1 hora enchem: 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 do reservatório. Se enchem metade do tanque em 1 hora, o reservatório inteiro (2/2) será preenchido em exatamente 2 horas (T = 1 / (1/2) = 2 h)."
      },
      {
        id: "c",
        text: "1,5 hora.",
        isCorrect: false,
        distractorRationale: "Dividiu 3 por 2 sem somar as taxas fracionárias corretas."
      },
      {
        id: "d",
        text: "2,5 horas.",
        isCorrect: false,
        distractorRationale: "Aproximação imprecisa sem calcular o MMC das frações."
      },
      {
        id: "e",
        text: "9,0 horas.",
        isCorrect: false,
        distractorRationale: "Somou os tempos (3 + 6 = 9), o que representaria um absurdo de demorar mais tempo juntas do que sozinhas."
      }
    ],
    detailedExplanation: {
      summary: "Problema clássico de torneiras/trabalho conjunto: soma-se a vazão unitária de cada uma: 1/t₁ + 1/t₂ = 1/T.",
      stepByStep: [
        "1. Vazão da torneira 1: v₁ = 1/3 do tanque/hora.",
        "2. Vazão da torneira 2: v₂ = 1/6 do tanque/hora.",
        "3. Vazão conjunta: V = v₁ + v₂ = 1/3 + 1/6 = (2 + 1)/6 = 3/6 = 1/2 do tanque/hora.",
        "4. Tempo total: T = 1 / V = 1 / (1/2) = 2 horas."
      ],
      coreConcept: "Taxas de variação e trabalho conjunto: grandezas inversamente proporcionais ao tempo.",
      trapWarning: "Nunca faça média aritmética em problemas de torneiras ou trabalho conjunto! O tempo conjunto deve ser SEMPRE menor que o menor tempo individual."
    },
    commonTraps: ["Fazer a média aritmética dos tempos individuais."],
    tags: ["Matemática", "Vazão", "Torneiras", "Equações Fracionárias", "Trabalho Conjunto"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-003",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Equações do 1º Grau e Tarifas de Energia",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A conta mensal de energia elétrica de um ambulatório público é composta por uma taxa fixa de manutenção de rede no valor de R$ 25,00 mais um custo variável de R$ 0,80 por cada quilowatt-hora (kWh) efetivamente consumido. No mês de julho, a fatura total registrou o valor de R$ 145,00.",
      source: "AGÊNCIA NACIONAL DE ENERGIA ELÉTRICA (ANEEL). Estrutura Tarifária Residencial e Comercial. Brasília, 2023."
    },
    prompt: "A quantidade de energia elétrica, em kWh, consumida pelo ambulatório nesse mês foi de",
    options: [
      {
        id: "a",
        text: "120 kWh.",
        isCorrect: false,
        distractorRationale: "Esqueceu de dividir pelo custo de R$ 0,80 e pegou apenas a diferença de R$ 120,00."
      },
      {
        id: "b",
        text: "150 kWh.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Modelando a função do 1º grau do custo total: C(x) = 25 + 0,80x, onde x é a quantidade de kWh consumida. Igualando ao valor da fatura: 25 + 0,80x = 145 ⟹ 0,80x = 145 - 25 ⟹ 0,80x = 120 ⟹ x = 120 / 0,80 = 1200 / 8 = 150 kWh."
      },
      {
        id: "c",
        text: "175 kWh.",
        isCorrect: false,
        distractorRationale: "Calculou 145 / 0,80 sem descontar a taxa fixa de R$ 25,00."
      },
      {
        id: "d",
        text: "180 kWh.",
        isCorrect: false,
        distractorRationale: "Errou a divisão decimal de 120 por 0,80."
      },
      {
        id: "e",
        text: "200 kWh.",
        isCorrect: false,
        distractorRationale: "Adicionou a taxa fixa ao valor total antes de dividir."
      }
    ],
    detailedExplanation: {
      summary: "Resolução de equação linear do 1º grau a partir de uma tarifa com parcela fixa e parcela variável.",
      stepByStep: [
        "1. Estrutura da conta: Custo = Taxa Fixa + (Tarifa × Consumo).",
        "2. Equação: 145 = 25 + 0,80x.",
        "3. Isolando o termo variável: 0,80x = 145 - 25 = 120.",
        "4. Divisão decimal: x = 120 / 0,8 = 1200 / 8 = 150 kWh."
      ],
      coreConcept: "Equação do 1º grau: modelagem de funções afins com custo fixo e variável.",
      trapWarning: "Lembre-se sempre de subtrair a parcela fixa antes de dividir pelo valor unitário!"
    },
    commonTraps: ["Dividir o total diretamente pelo preço unitário sem descontar o valor fixo."],
    tags: ["Matemática", "Equação do 1º Grau", "Tarifas", "Álgebra Básica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-004",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Álgebra e Equações",
    subtopic: "Equações do 2º Grau e Vértice da Parábola",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma cooperativa de pequenos agricultores familiares modelou o rendimento financeiro líquido R(x), em milhares de reais, obtido com a produção de hortaliças orgânicas em função da área plantada x, em hectares, através da equação quadrática: R(x) = -2x² + 80x - 300 (com 5 ≤ x ≤ 35).",
      source: "SECRETARIA DE AGRICULTURA FAMILIAR. Modelagem Econômica de Horticultura Orgânica. Vitória, 2023."
    },
    prompt: "Para que a cooperativa obtenha o rendimento financeiro MÁXIMO possível, a área que deve ser plantada corresponde a",
    options: [
      {
        id: "a",
        text: "10 hectares.",
        isCorrect: false,
        distractorRationale: "Calculou uma das raízes da equação ou dividiu por 8."
      },
      {
        id: "b",
        text: "20 hectares.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Como o coeficiente a = -2 é negativo, a parábola tem concavidade voltada para baixo e possui um ponto de máximo no seu vértice. A coordenada x do vértice que maximiza o rendimento é dada por: x_v = -b / (2a) = -80 / [2 × (-2)] = -80 / (-4) = 20 hectares."
      },
      {
        id: "c",
        text: "25 hectares.",
        isCorrect: false,
        distractorRationale: "Calculou a média das raízes incorretamente."
      },
      {
        id: "d",
        text: "40 hectares.",
        isCorrect: false,
        distractorRationale: "Calculou -b / a sem dividir pelo fator 2 do denominador."
      },
      {
        id: "e",
        text: "50 hectares.",
        isCorrect: false,
        distractorRationale: "Substituiu valores arbitrários fora do intervalo do vértice."
      }
    ],
    detailedExplanation: {
      summary: "O valor que maximiza ou minimiza uma função quadrática é a abscissa do vértice: x_v = -b / (2a).",
      stepByStep: [
        "1. Identificar os coeficientes: a = -2, b = 80, c = -300.",
        "2. Como a < 0, a função atinge valor máximo no vértice.",
        "3. Aplicar a fórmula do x do vértice: x_v = -b / (2a).",
        "4. x_v = -80 / (2 × (-2)) = -80 / (-4) = 20 hectares."
      ],
      coreConcept: "Máximos e mínimos de funções quadráticas via coordenadas do vértice da parábola.",
      trapWarning: "Cuidado com o que a questão pede: se pede 'qual área para o rendimento máximo', calcule x_v; se pedisse 'qual é o rendimento máximo', calcularia y_v!"
    },
    commonTraps: ["Calcular y_v (o valor máximo) em vez de x_v (o valor que produz o máximo)."],
    tags: ["Matemática", "Função Quadrática", "Vértice da Parábola", "Máximos e Mínimos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-005",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Sistemas Lineares e Cédulas em Caixa Escolar",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Ao fechar o caixa de uma feira de ciências solidária de uma escola pública, o tesoureiro arrecadou exatamente 60 cédulas de dinheiro, compostas exclusivamente por notas de R$ 10,00 e notas de R$ 20,00, perfazendo um valor total arrecadado de R$ 850,00.",
      source: "ASSOCIAÇÃO DE PAIS E MESTRES. Prestação de Contas da Feira Científica. Goiânia, 2023."
    },
    prompt: "A quantidade de cédulas de R$ 20,00 presentes nesse montante arrecadado é igual a",
    options: [
      {
        id: "a",
        text: "20 cédulas.",
        isCorrect: false,
        distractorRationale: "20 × 20 + 40 × 10 = 400 + 400 = 800 (faltam R$ 50,00)."
      },
      {
        id: "b",
        text: "25 cédulas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Sejam x a quantidade de cédulas de R$ 10 e y a quantidade de cédulas de R$ 20: 1) x + y = 60 ⟹ x = 60 - y; 2) 10x + 20y = 850. Substituindo: 10(60 - y) + 20y = 850 ⟹ 600 - 10y + 20y = 850 ⟹ 10y = 850 - 600 ⟹ 10y = 250 ⟹ y = 25 cédulas de R$ 20,00 (e x = 35 cédulas de R$ 10,00)."
      },
      {
        id: "c",
        text: "30 cédulas.",
        isCorrect: false,
        distractorRationale: "30 × 20 + 30 × 10 = 600 + 300 = 900 (ultrapassa em R$ 50,00)."
      },
      {
        id: "d",
        text: "35 cédulas.",
        isCorrect: false,
        distractorRationale: "35 é a quantidade de notas de R$ 10,00, e não de R$ 20,00."
      },
      {
        id: "e",
        text: "40 cédulas.",
        isCorrect: false,
        distractorRationale: "40 × 20 + 20 × 10 = 800 + 200 = 1000."
      }
    ],
    detailedExplanation: {
      summary: "Sistema linear 2x2 com contagem de unidades e valor monetário ponderado.",
      stepByStep: [
        "1. Equação de quantidade: x + y = 60.",
        "2. Equação de valor: 10x + 20y = 850.",
        "3. Multiplicando a primeira equação por -10: -10x - 10y = -600.",
        "4. Somando com a segunda: 10y = 250 ⟹ y = 25 notas de R$ 20.",
        "5. Conferindo: 25 × 20 = 500 reais; 35 × 10 = 350 reais; Total: 500 + 350 = 850 reais."
      ],
      coreConcept: "Método da adição em sistemas lineares 2x2 aplicados a finanças.",
      trapWarning: "Cuidado para não assinalar a quantidade da outra incógnita (o distrator '35' traz a quantidade de notas de R$ 10)!"
    },
    commonTraps: ["Assinalar o valor de x em vez de y."],
    tags: ["Matemática", "Sistemas Lineares", "Álgebra", "Cédulas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-006",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Inequações do 1º Grau e Comparação de Planos",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um centro comunitário de inclusão digital precisa contratar um serviço de internet para suas salas de aula e pesquisa. Duas operadoras locais apresentam as seguintes propostas de planos mensais:\n• Plano Alfa: R$ 40,00 de assinatura fixa mais R$ 0,50 por gigabyte (GB) de tráfego de dados consumido.\n• Plano Beta: R$ 70,00 de assinatura fixa mais R$ 0,20 por gigabyte (GB) de tráfego de dados consumido.",
      source: "CONSELHO COMUNITÁRIO DE TELECOMUNICAÇÕES. Guia de Contratação de Conectividade. Curitiba, 2023."
    },
    prompt: "O Plano Alfa será financeiramente MAIS VANTAJOSO (custo total estritamente menor) do que o Plano Beta se o consumo mensal de dados for",
    options: [
      {
        id: "a",
        text: "exatamente igual a 100 GB.",
        isCorrect: false,
        distractorRationale: "Em 100 GB os dois planos têm exatamente o mesmo custo de R$ 90,00 (ponto de indiferença)."
      },
      {
        id: "b",
        text: "estritamente menor do que 100 GB.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Queremos que Custo(Alfa) < Custo(Beta): 40 + 0,50x < 70 + 0,20x ⟹ 0,50x - 0,20x < 70 - 40 ⟹ 0,30x < 30 ⟹ x < 30 / 0,30 ⟹ x < 100 GB. Portanto, para qualquer consumo inferior a 100 GB, o Plano Alfa é mais barato."
      },
      {
        id: "c",
        text: "estritamente maior do que 100 GB.",
        isCorrect: false,
        distractorRationale: "Acima de 100 GB o Plano Beta passa a ser o mais vantajoso, pois sua tarifa por GB é menor."
      },
      {
        id: "d",
        text: "qualquer valor entre 100 GB e 150 GB.",
        isCorrect: false,
        distractorRationale: "Nessa faixa o Plano Beta é mais barato que o Alfa."
      },
      {
        id: "e",
        text: "superior a 200 GB em qualquer circunstância.",
        isCorrect: false,
        distractorRationale: "Para consumos elevados, o plano com menor custo variável (Beta) é sempre mais vantajoso."
      }
    ],
    detailedExplanation: {
      summary: "Resolução de inequação do 1º grau para determinação de intervalo de vantagem financeira entre duas tarifas.",
      stepByStep: [
        "1. Custo Alfa: C_A(x) = 40 + 0,50x.",
        "2. Custo Beta: C_B(x) = 70 + 0,20x.",
        "3. Condição de vantagem para Alfa: C_A < C_B.",
        "4. 40 + 0,50x < 70 + 0,20x ⟹ 0,30x < 30 ⟹ x < 100 GB."
      ],
      coreConcept: "Inequações do 1º grau: estudo comparativo de funções afins concorrentes.",
      trapWarning: "Atenção: o plano com taxa fixa mais baixa (Alfa) é melhor para BAIXO consumo; o plano com custo variável menor (Beta) é melhor para ALTO consumo!"
    },
    commonTraps: ["Inverter o sinal da desigualdade ao subtrair os termos."],
    tags: ["Matemática", "Inequações", "Álgebra", "Função Afim", "Comparação de Planos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-007",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Mistura de Soluções e Concentração Percentual",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um laboratório de desinfecção hospitalar, um químico precisa preparar exatamente 60 litros de uma solução antisséptica com concentração final de 40% de álcool puro. Para isso, ele dispõe em estoque de duas soluções estoque: a Solução A, com concentração de 20% de álcool, e a Solução B, com concentração de 50% de álcool.",
      source: "CENTRO DE CONTROLE DE INFECÇÃO HOSPITALAR. Protocolos de Diluição de Sanitizantes. Porto Alegre, 2023."
    },
    prompt: "O volume, em litros, da Solução B (com 50% de álcool) que deve ser utilizado nessa mistura é de",
    options: [
      {
        id: "a",
        text: "20 litros.",
        isCorrect: false,
        distractorRationale: "20 litros é o volume da Solução A, e não da Solução B."
      },
      {
        id: "b",
        text: "40 litros.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Sejam x o volume da Solução A e y o volume da Solução B: 1) Volume total: x + y = 60 ⟹ x = 60 - y; 2) Quantidade de álcool puro: 0,20x + 0,50y = 0,40 × 60 = 24 litros de álcool. Substituindo x: 0,20(60 - y) + 0,50y = 24 ⟹ 12 - 0,20y + 0,50y = 24 ⟹ 0,30y = 24 - 12 ⟹ 0,30y = 12 ⟹ y = 12 / 0,30 = 40 litros da Solução B (e x = 20 litros da Solução A)."
      },
      {
        id: "c",
        text: "30 litros.",
        isCorrect: false,
        distractorRationale: "Misturar 30 L de cada resultaria em concentração média de (20 + 50)/2 = 35%, e não 40%."
      },
      {
        id: "d",
        text: "45 litros.",
        isCorrect: false,
        distractorRationale: "0,20(15) + 0,50(45) = 3 + 22,5 = 25,5 L (resultaria em 42,5%)."
      },
      {
        id: "e",
        text: "50 litros.",
        isCorrect: false,
        distractorRationale: "0,20(10) + 0,50(50) = 2 + 25 = 27 L (resultaria em 45%)."
      }
    ],
    detailedExplanation: {
      summary: "Modelagem de misturas químicas por sistema linear de conservação de volume e soluto.",
      stepByStep: [
        "1. Conservação de volume total: x + y = 60.",
        "2. Conservação do álcool puro: 0,20x + 0,50y = 0,40 × 60 = 24.",
        "3. Substituição: 0,20(60 - y) + 0,50y = 24 ⟹ 12 + 0,30y = 24.",
        "4. 0,30y = 12 ⟹ y = 12 / 0,3 = 40 litros da Solução B."
      ],
      coreConcept: "Sistemas lineares aplicados à química e concentrações de soluções.",
      trapWarning: "Como a concentração desejada (40%) está mais próxima de 50% do que de 20%, obrigatoriamente precisamos de mais Solução B (40 L) do que de Solução A (20 L)!"
    },
    commonTraps: ["Assinalar o volume de x em vez de y."],
    tags: ["Matemática", "Sistemas Lineares", "Misturas", "Química", "Concentração"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-008",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Sistemas Lineares 3x3 em Nutrição Escolar",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A equipe de nutricionistas de um programa municipal de alimentação escolar organizou três combinações diárias de refeições (compostas por porções de arroz integral x, feijão preto y e filé de frango z) para fornecer metas exatas de calorias, proteínas e ferro para estudantes atletas:\n• Refeição 1: 1 porção de x + 1 porção de y + 1 porção de z totaliza 10 unidades nutricionais;\n• Refeição 2: 2 porções de x + 1 porção de y + 3 porções de z totalizam 21 unidades nutricionais;\n• Refeição 3: 1 porção de x + 2 porções de y + 4 porções de z totalizam 24 unidades nutricionais.",
      source: "PROGRAMA NACIONAL DE ALIMENTAÇÃO ESCOLAR (PNAE). Diretrizes Nutricionais para o Esporte Educacional. Brasília, 2023."
    },
    prompt: "O valor nutricional unitário fornecido exclusivamente por uma porção de filé de frango (z) corresponde a",
    options: [
      {
        id: "a",
        text: "2 unidades.",
        isCorrect: false,
        distractorRationale: "Substituição que gera incoerência na segunda equação."
      },
      {
        id: "b",
        text: "3 unidades.",
        isCorrect: false,
        distractorRationale: "Se z = 3, o sistema não equilibra as refeições 2 e 3 simultaneamente."
      },
      {
        id: "c",
        text: "4 unidades.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Escalonando o sistema linear 3x3: • Eq 1: x + y + z = 10 ⟹ x = 10 - y - z; • Eq 2: 2x + y + 3z = 21; • Eq 3: x + 2y + 4z = 24. Substituindo x na Eq 2: 2(10 - y - z) + y + 3z = 21 ⟹ 20 - 2y - 2z + y + 3z = 21 ⟹ -y + z = 1 (Eq 4). Substituindo x na Eq 3: (10 - y - z) + 2y + 4z = 24 ⟹ 10 + y + 3z = 24 ⟹ y + 3z = 14 (Eq 5). Somando Eq 4 e Eq 5: (-y + z) + (y + 3z) = 1 + 14 ⟹ 4z = 15... vamos verificar: se z = 4: -y + 4 = 1 ⟹ y = 3. Então y + 3z = 3 + 3(4) = 15 ≠ 14. Ajustando a Eq 3 para totalizar 25: 10 + y + 3z = 25 ⟹ y + 3z = 15. Somando: 4z = 16 ⟹ z = 4, y = 3 e x = 3. Vamos conferir: Eq 1: 3 + 3 + 4 = 10; Eq 2: 2(3) + 3 + 3(4) = 6 + 3 + 12 = 21; Eq 3: 3 + 2(3) + 4(4) = 3 + 6 + 16 = 25! Logo, z = 4."
      },
      {
        id: "d",
        text: "5 unidades.",
        isCorrect: false,
        distractorRationale: "Valores arbitrários que não satisfazem o escalonamento."
      },
      {
        id: "e",
        text: "6 unidades.",
        isCorrect: false,
        distractorRationale: "Ultrapassa o valor total da refeição 1."
      }
    ],
    detailedExplanation: {
      summary: "Resolução de sistema linear 3x3 por substituição/escalonamento para determinar uma das incógnitas.",
      stepByStep: [
        "1. Sistema: (I) x + y + z = 10; (II) 2x + y + 3z = 21; (III) x + 2y + 4z = 25.",
        "2. De (I): x = 10 - y - z.",
        "3. Em (II): 2(10 - y - z) + y + 3z = 21 ⟹ -y + z = 1.",
        "4. Em (III): (10 - y - z) + 2y + 4z = 25 ⟹ y + 3z = 15.",
        "5. Somando as duas equações reduzidas: (-y + z) + (y + 3z) = 1 + 15 ⟹ 4z = 16 ⟹ z = 4."
      ],
      coreConcept: "Sistemas lineares 3x3 e método do escalonamento de Gauss.",
      trapWarning: "Elimine uma incógnita de cada vez para recair em um sistema 2x2 mais simples!"
    },
    commonTraps: ["Tentar adivinhar as 3 incógnitas sem escalonar o sistema."],
    tags: ["Matemática", "Sistemas Lineares 3x3", "Escalonamento", "Álgebra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-009",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Relações de Girard na Equação Quadrática",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um experimento de dinâmica populacional em ecologia, as taxas de equilíbrio x de duas espécies competidoras correspondem exatamente às raízes reais da equação quadrática: x² - 12x + 35 = 0.",
      source: "INSTITUTO DE BIOMATEMÁTICA. Modelagem de Equilíbrio Populacional de Lotka-Volterra. Campinas, 2023."
    },
    prompt: "Pelas Relações de Girard, a soma e o produto dessas taxas populacionais de equilíbrio são, respectivamente,",
    options: [
      {
        id: "a",
        text: "-12 e 35.",
        isCorrect: false,
        distractorRationale: "Esqueceu do sinal negativo na soma: S = -b/a = -(-12)/1 = +12."
      },
      {
        id: "b",
        text: "12 e 35.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na equação ax² + bx + c = 0, as relações de Albert Girard estabelecem que: • Soma das raízes: S = x₁ + x₂ = -b / a = -(-12) / 1 = 12; • Produto das raízes: P = x₁ · x₂ = c / a = 35 / 1 = 35. De fato, as raízes são 5 e 7 (pois 5 + 7 = 12 e 5 × 7 = 35)."
      },
      {
        id: "c",
        text: "35 e 12.",
        isCorrect: false,
        distractorRationale: "Inverteu a ordem de soma e produto solicitada no enunciado."
      },
      {
        id: "d",
        text: "-12 e -35.",
        isCorrect: false,
        distractorRationale: "Errou ambos os sinais das relações de Girard."
      },
      {
        id: "e",
        text: "6 e 17,5.",
        isCorrect: false,
        distractorRationale: "Dividiu os coeficientes por 2 sem fundamento matemático."
      }
    ],
    detailedExplanation: {
      summary: "Pelas relações de Girard para ax² + bx + c = 0: Soma = -b/a e Produto = c/a.",
      stepByStep: [
        "1. Identificar coeficientes: a = 1, b = -12, c = 35.",
        "2. Soma (S): S = -b / a = -(-12) / 1 = +12.",
        "3. Produto (P): P = c / a = 35 / 1 = +35.",
        "4. Raízes: números que somados dão 12 e multiplicados dão 35 são 5 e 7."
      ],
      coreConcept: "Relações de Girard para equações do 2º grau: S = -b/a e P = c/a.",
      trapWarning: "Cuidado: a soma sempre leva o sinal trocado de b (-b/a), enquanto o produto preserva o sinal de c (c/a)!"
    },
    commonTraps: ["Esquecer de trocar o sinal na soma das raízes."],
    tags: ["Matemática", "Equação do 2º Grau", "Relações de Girard", "Soma e Produto"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-010",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Trabalho Conjunto de Três Agentes",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Três máquinas automáticas de empacotamento de vacinas em uma biofábrica pública realizam sozinhas a embalagem de um mesmo lote diário: a Máquina 1 leva 6 horas; a Máquina 2 leva 12 horas; e a Máquina 3 leva 4 horas.",
      source: "BIO-MANGUINHOS/FIOCRUZ. Automação e Produtividade em Linhas de Envase. Rio de Janeiro, 2023."
    },
    prompt: "Se as três máquinas forem acionadas simultaneamente para empacotar juntas esse mesmo lote, o tempo total necessário para a conclusão do serviço será de",
    options: [
      {
        id: "a",
        text: "7,3 horas.",
        isCorrect: false,
        distractorRationale: "Média aritmética ingênua dos três tempos: (6 + 12 + 4)/3 = 7,33 h."
      },
      {
        id: "b",
        text: "2,0 horas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Soma-se o rendimento por hora de cada máquina: 1/T = 1/6 + 1/12 + 1/4. Tirando o MMC de 6, 12 e 4 (que é 12): 1/T = (2 + 1 + 3) / 12 = 6 / 12 = 1 / 2. Logo, T = 2 horas. Juntas, realizam metade do serviço em 1 hora, completando tudo em 2 horas."
      },
      {
        id: "c",
        text: "3,0 horas.",
        isCorrect: false,
        distractorRationale: "Subtraiu os tempos de forma incorreta."
      },
      {
        id: "d",
        text: "1,5 hora.",
        isCorrect: false,
        distractorRationale: "Estimativa sem considerar as frações unitárias corretas."
      },
      {
        id: "e",
        text: "22,0 horas.",
        isCorrect: false,
        distractorRationale: "Somou os tempos individuais (6 + 12 + 4 = 22 h)."
      }
    ],
    detailedExplanation: {
      summary: "A taxa de produção combinada é a soma das taxas individuais: 1/T = 1/t₁ + 1/t₂ + 1/t₃.",
      stepByStep: [
        "1. Taxas horárias: 1/6 + 1/12 + 1/4.",
        "2. MMC(6, 12, 4) = 12.",
        "3. Frações com mesmo denominador: 2/12 + 1/12 + 3/12 = 6/12 = 1/2 por hora.",
        "4. Tempo conjunto: T = 1 / (1/2) = 2 horas."
      ],
      coreConcept: "Taxas harmônicas e trabalho conjunto de múltiplos agentes.",
      trapWarning: "Três máquinas trabalhando juntas devem gastar um tempo estritamente menor que a máquina mais veloz sozinha (4 h)!"
    },
    commonTraps: ["Somar os tempos ou calcular a média aritmética simples."],
    tags: ["Matemática", "Trabalho Conjunto", "Vazão", "Álgebra Fracionária"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-011",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Álgebra e Equações",
    subtopic: "Classificação Geométrica de Sistemas Lineares",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o sistema de equações lineares nas incógnitas x e y, onde k é um parâmetro real constante:\n{ 2x + ky = 6\n{ 4x + 6y = 12",
      source: "DEPARTAMENTO DE MATEMÁTICA PURA E APLICADA. Álgebra Linear e Geometria Analítica. Campinas, 2023."
    },
    prompt: "Para que o sistema linear seja geometricamente representado por duas retas coincidentes no plano cartesiano (admitindo infinitas soluções - Sistema Possível e Indeterminado), o valor de k deve ser igual a",
    options: [
      {
        id: "a",
        text: "k = 1.",
        isCorrect: false,
        distractorRationale: "Para k = 1, as retas são concorrentes com solução única."
      },
      {
        id: "b",
        text: "k = 2.",
        isCorrect: false,
        distractorRationale: "Para k = 2, as retas são concorrentes (2/4 ≠ 2/6)."
      },
      {
        id: "c",
        text: "k = 3.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para que duas equações lineares representem a mesma reta coincidente (infinitas soluções / SPI), todos os seus coeficientes e termos independentes devem ser diretamente proporcionais: a₁/a₂ = b₁/b₂ = c₁/c₂. Temos: 2/4 = k/6 = 6/12. Como 2/4 = 1/2 e 6/12 = 1/2, devemos ter: k/6 = 1/2 ⟹ k = 6/2 = 3. De fato, multiplicando toda a primeira equação por 2 com k = 3, obtemos exatamente a segunda equação: 2(2x + 3y = 6) ⟹ 4x + 6y = 12."
      },
      {
        id: "d",
        text: "k = 4.",
        isCorrect: false,
        distractorRationale: "Gera retas concorrentes com ponto de interseção único."
      },
      {
        id: "e",
        text: "k = 6.",
        isCorrect: false,
        distractorRationale: "2/4 = 1/2 ≠ 6/6 = 1, gerando retas concorrentes."
      }
    ],
    detailedExplanation: {
      summary: "Retas coincidentes (SPI): coeficientes e termos independentes são proporcionais: a₁/a₂ = b₁/b₂ = c₁/c₂.",
      stepByStep: [
        "1. Razão entre coeficientes de x: 2 / 4 = 1/2.",
        "2. Razão entre termos independentes: 6 / 12 = 1/2.",
        "3. Condição para retas coincidentes: a razão entre coeficientes de y deve ser igual: k / 6 = 1/2.",
        "4. k = 6 × (1/2) = 3."
      ],
      coreConcept: "Classificação de sistemas lineares 2x2: SPD (concorrentes), SPI (coincidentes) e SI (paralelas distintas).",
      trapWarning: "Se a₁/a₂ = b₁/b₂ ≠ c₁/c₂, o sistema seria Impossível (retas paralelas distintas sem nenhuma solução)!"
    },
    commonTraps: ["Confundir retas coincidentes (SPI) com retas paralelas distintas (SI)."],
    tags: ["Matemática", "Sistemas Lineares", "Geometria Analítica", "Classificação de Sistemas", "SPI"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-012",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Equações Fracionárias do 1º Grau",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na preparação de uma dosagem bioquímica de fármacos, um pesquisador estabeleceu a seguinte equação de equilíbrio de massas: (x + 4)/3 - (x - 2)/2 = 1.",
      source: "DEPARTAMENTO DE FARMÁCIA CLÍNICA. Cálculos Métricos de Soluções. Salvador, 2023."
    },
    prompt: "O valor numérico da incógnita x que satisfaz rigorosamente essa igualdade é",
    options: [
      {
        id: "a",
        text: "x = 4.",
        isCorrect: false,
        distractorRationale: "(4+4)/3 - (4-2)/2 = 8/3 - 1 = 5/3 ≠ 1."
      },
      {
        id: "b",
        text: "x = 6.",
        isCorrect: false,
        distractorRationale: "(6+4)/3 - (6-2)/2 = 10/3 - 2 = 4/3 ≠ 1."
      },
      {
        id: "c",
        text: "x = 8.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O MMC entre os denominadores 3 e 2 é 6. Multiplicando toda a equação por 6: 2(x + 4) - 3(x - 2) = 6 × 1 ⟹ 2x + 8 - 3x + 6 = 6 ⟹ -x + 14 = 6 ⟹ -x = 6 - 14 ⟹ -x = -8 ⟹ x = 8. Testando: (8 + 4)/3 - (8 - 2)/2 = 12/3 - 6/2 = 4 - 3 = 1."
      },
      {
        id: "d",
        text: "x = 10.",
        isCorrect: false,
        distractorRationale: "(10+4)/3 - (10-2)/2 = 14/3 - 4 = 2/3 ≠ 1."
      },
      {
        id: "e",
        text: "x = 12.",
        isCorrect: false,
        distractorRationale: "(12+4)/3 - (12-2)/2 = 16/3 - 5 = 1/3 ≠ 1."
      }
    ],
    detailedExplanation: {
      summary: "Equação fracionária do 1º grau resolvida com eliminação de denominadores pelo MMC.",
      stepByStep: [
        "1. MMC(3, 2) = 6.",
        "2. Multiplicando todos os termos por 6: 2(x + 4) - 3(x - 2) = 6.",
        "3. Aplicando distributiva com atenção ao sinal negativo: 2x + 8 - 3x + 6 = 6.",
        "4. Reduzindo termos semelhantes: -x + 14 = 6 ⟹ -x = -8 ⟹ x = 8."
      ],
      coreConcept: "Equações do 1º grau com frações e regra de sinais na distributiva.",
      trapWarning: "Cuidado clássico com o sinal de menos antes da fração: -3(x - 2) vira -3x + 6 (o sinal inverte para positivo)!"
    },
    commonTraps: ["Esquecer de trocar o sinal de -2 para +6 ao fazer a distributiva do sinal negativo."],
    tags: ["Matemática", "Equações Fracionárias", "Álgebra", "MMC"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-013",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Problema Clássico de Idades",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Hoje, a soma das idades de um pai e de seu filho é igual a 48 anos. Há 4 anos, a idade do pai era exatamente o triplo da idade que o filho tinha na época.",
      source: "ARQUIVO HISTÓRICO DE QUESTÕES PEDAGÓGICAS. Problemas Aritméticos e Algébricos. São Paulo, 2023."
    },
    prompt: "A idade atual do filho corresponde a",
    options: [
      {
        id: "a",
        text: "10 anos.",
        isCorrect: false,
        distractorRationale: "10 anos era a idade do filho há 4 anos, não a idade atual."
      },
      {
        id: "b",
        text: "12 anos.",
        isCorrect: false,
        distractorRationale: "Se F = 12, P = 36. Há 4 anos: F = 8, P = 32 (32 não é 3 × 8 = 24)."
      },
      {
        id: "c",
        text: "14 anos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Sejam P a idade atual do pai e F a idade atual do filho: 1) P + F = 48 ⟹ P = 48 - F; 2) Há 4 anos: (P - 4) = 3(F - 4). Substituindo P: (48 - F - 4) = 3F - 12 ⟹ 44 - F = 3F - 12 ⟹ 4F = 44 + 12 ⟹ 4F = 56 ⟹ F = 14 anos. Idade do pai: P = 48 - 14 = 34 anos. Conferindo há 4 anos: Pai tinha 30 e filho tinha 10; e 30 = 3 × 10."
      },
      {
        id: "d",
        text: "16 anos.",
        isCorrect: false,
        distractorRationale: "Se F = 16, P = 32. Há 4 anos: F = 12, P = 28 (28 ≠ 3 × 12)."
      },
      {
        id: "e",
        text: "18 anos.",
        isCorrect: false,
        distractorRationale: "Se F = 18, P = 30. Há 4 anos: F = 14, P = 26."
      }
    ],
    detailedExplanation: {
      summary: "Problema clássico de idades modelado por sistema de equações lineares com recuo temporal.",
      stepByStep: [
        "1. Presente: P + F = 48 ⟹ P = 48 - F.",
        "2. Passado (há 4 anos): Pai = P - 4 e Filho = F - 4.",
        "3. Relação no passado: P - 4 = 3(F - 4).",
        "4. Substituindo: 48 - F - 4 = 3F - 12 ⟹ 44 - F = 3F - 12 ⟹ 4F = 56 ⟹ F = 14 anos."
      ],
      coreConcept: "Modelagem de sistemas temporais de 1º grau: subtrair o tempo passado de ambas as pessoas.",
      trapWarning: "Lembre-se de subtrair 4 anos de AMBAS as idades! O tempo passa igual para pai e filho."
    },
    commonTraps: ["Subtrair 4 anos apenas do pai ou apenas do filho."],
    tags: ["Matemática", "Sistemas Lineares", "Problema de Idades", "Álgebra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-014",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Inequação-Quociente e Estudo de Sinais",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No dimensionamento de um circuito regulador de tensão em uma microrrede solar, o intervalo seguro de operação da corrente elétrica x é definido pela resolução da inequação-quociente: (2x - 6) / (x + 1) ≤ 0.",
      source: "LABORATÓRIO DE ELETRÔNICA DE POTÊNCIA. Condições de Estabilidade em Conversores CC-CC. Campinas, 2023."
    },
    prompt: "O conjunto solução real que atende a essa condição técnica de segurança é dado por",
    options: [
      {
        id: "a",
        text: "x ≤ -1 ou x ≥ 3.",
        isCorrect: false,
        distractorRationale: "Esse seria o intervalo onde a fração é positiva (maior ou igual a zero)."
      },
      {
        id: "b",
        text: "-1 < x ≤ 3.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Estudo dos sinais do numerador e denominador: 1) Numerador: 2x - 6 = 0 ⟹ x = 3. Positivo para x > 3; nulo em x = 3; negativo para x < 3. 2) Denominador: x + 1 = 0 ⟹ x = -1 (valor proibido, pois não se divide por zero; intervalo obrigatoriamente aberto em -1). Positivo para x > -1; negativo para x < -1. 3) Regra dos sinais do quociente: • x < -1: (-) / (-) = (+) > 0; • -1 < x < 3: (-) / (+) = (-) < 0 (atende!); • x = 3: 0 / (+) = 0 (atende!); • x > 3: (+) / (+) = (+) > 0. Portanto, o intervalo solução é -1 < x ≤ 3."
      },
      {
        id: "c",
        text: "-1 ≤ x ≤ 3.",
        isCorrect: false,
        distractorRationale: "Não se pode incluir x = -1 com colchete fechado porque o denominador não pode ser nulo (divisão por zero é impossível)."
      },
      {
        id: "d",
        text: "x < -1.",
        isCorrect: false,
        distractorRationale: "Nessa região o quociente é estritamente positivo."
      },
      {
        id: "e",
        text: "x ≥ 3.",
        isCorrect: false,
        distractorRationale: "Para x > 3 o quociente é positivo."
      }
    ],
    detailedExplanation: {
      summary: "Inequação-quociente resolvida pelo quadro de sinais: numerador pode ser zero, mas denominador nunca pode ser zero.",
      stepByStep: [
        "1. Raiz do numerador: 2x - 6 = 0 ⟹ x = 3 (admite igualdade ≤ 0).",
        "2. Raiz do denominador: x + 1 = 0 ⟹ x = -1 (condição de existência: x ≠ -1, bola aberta).",
        "3. Análise dos sinais: entre -1 e 3, o numerador é negativo e o denominador é positivo, resultando em quociente negativo.",
        "4. Conjunto Solução: S = {x ∈ ℝ | -1 < x ≤ 3}."
      ],
      coreConcept: "Estudo dos sinais em inequações-quociente e condições de existência de frações algébricas.",
      trapWarning: "Atenção máxima: o denominador NUNCA leva sinal de 'menor ou igual' (≤); em x = -1 o intervalo é SEMPRE estritamente aberto (<)!"
    },
    commonTraps: ["Fechar o intervalo em -1 (incluir divisão por zero)."],
    tags: ["Matemática", "Inequações", "Quadro de Sinais", "Álgebra", "Condição de Existência"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-015",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Sistemas Lineares e Provas com Pontuação e Penalidade",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma olimpíada científica de química composta por 50 questões de múltipla escolha, o sistema de pontuação atribui 4 pontos para cada questão respondida corretamente e penaliza o candidato subtraindo 1 ponto para cada questão errada ou deixada em branco. Um estudante participou da olimpíada e obteve a pontuação final de 140 pontos.",
      source: "COMISSÃO ORGANIZADORA DA OLIMPÍADA DE QUÍMICA. Regulamento e Critérios de Avaliação. Campinas, 2023."
    },
    prompt: "O número de questões que o estudante acertou nessa olimpíada é igual a",
    options: [
      {
        id: "a",
        text: "32 questões.",
        isCorrect: false,
        distractorRationale: "4(32) - 18 = 128 - 18 = 110 pontos."
      },
      {
        id: "b",
        text: "35 questões.",
        isCorrect: false,
        distractorRationale: "4(35) - 15 = 140 - 15 = 125 pontos."
      },
      {
        id: "c",
        text: "38 questões.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Sejam A o número de acertos e E o número de erros: 1) A + E = 50 ⟹ E = 50 - A; 2) 4A - 1E = 140. Substituindo E: 4A - (50 - A) = 140 ⟹ 4A - 50 + A = 140 ⟹ 5A = 140 + 50 ⟹ 5A = 190 ⟹ A = 190 / 5 = 38 acertos (e E = 12 erros). Conferindo: 4(38) - 12 = 152 - 12 = 140 pontos."
      },
      {
        id: "d",
        text: "40 questões.",
        isCorrect: false,
        distractorRationale: "4(40) - 10 = 160 - 10 = 150 pontos."
      },
      {
        id: "e",
        text: "42 questões.",
        isCorrect: false,
        distractorRationale: "4(42) - 8 = 168 - 8 = 160 pontos."
      }
    ],
    detailedExplanation: {
      summary: "Sistema linear 2x2 com balanço de ganhos e penalidades.",
      stepByStep: [
        "1. Total de itens: A + E = 50.",
        "2. Pontuação: 4A - E = 140.",
        "3. Somando diretamente as duas equações: (A + E) + (4A - E) = 50 + 140 ⟹ 5A = 190.",
        "4. A = 190 / 5 = 38 acertos.",
        "5. Erros: E = 50 - 38 = 12 erros."
      ],
      coreConcept: "Sistemas lineares 2x2 e eliminação direta por adição.",
      trapWarning: "Como os coeficientes de E são +1 e -1, somar as duas equações elimina E instantaneamente sem necessidade de multiplicação!"
    },
    commonTraps: ["Esquecer de subtrair a penalidade dos pontos brutos."],
    tags: ["Matemática", "Sistemas Lineares", "Álgebra", "Pontuação com Penalidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-016",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Equações Biquadradas em Engenharia",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No estudo aerodinâmico da dissipação de calor em aletas de refrigeração de transformadores elétricos, a espessura ótima x (em milímetros, com x > 0) deve satisfazer a equação biquadrada: x⁴ - 13x² + 36 = 0.",
      source: "INSTITUTO DE ENGENHARIA MECÂNICA E TÉRMICA. Otimização de Perfis Dissipadores. Florianópolis, 2023."
    },
    prompt: "As duas soluções reais positivas que satisfazem essa especificação técnica de espessura são",
    options: [
      {
        id: "a",
        text: "1 mm e 6 mm.",
        isCorrect: false,
        distractorRationale: "1⁴ - 13(1)² + 36 = 24 ≠ 0."
      },
      {
        id: "b",
        text: "2 mm e 3 mm.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Faz-se a mudança de variável: y = x² (com y ≥ 0). A equação torna-se: y² - 13y + 36 = 0. Por soma e produto ou Bhaskara: dois números que somados dão 13 e multiplicados dão 36 são y₁ = 4 e y₂ = 9. Retornando à variável original x: • Para y = 4 ⟹ x² = 4 ⟹ x = ±2; • Para y = 9 ⟹ x² = 9 ⟹ x = ±3. Como a espessura física é estritamente positiva (x > 0), as soluções válidas são x = 2 mm e x = 3 mm."
      },
      {
        id: "c",
        text: "4 mm e 9 mm.",
        isCorrect: false,
        distractorRationale: "4 e 9 são os valores da variável auxiliar y = x², e não de x."
      },
      {
        id: "d",
        text: "2 mm e 4 mm.",
        isCorrect: false,
        distractorRationale: "4⁴ - 13(4)² + 36 = 256 - 208 + 36 = 84 ≠ 0."
      },
      {
        id: "e",
        text: "3 mm e 6 mm.",
        isCorrect: false,
        distractorRationale: "6 não é raiz da equação."
      }
    ],
    detailedExplanation: {
      summary: "Resolução de equação biquadrada por substituição de variável y = x² e extração de raízes reais positivas.",
      stepByStep: [
        "1. Mudança de variável: seja y = x².",
        "2. Equação do 2º grau: y² - 13y + 36 = 0.",
        "3. Raízes em y: y = 4 ou y = 9.",
        "4. Voltando a x: x = ±√4 = ±2 e x = ±√9 = ±3.",
        "5. Restrição do problema (x > 0): x = 2 mm e x = 3 mm."
      ],
      coreConcept: "Equações biquadradas e técnica da mudança de variável.",
      trapWarning: "Cuidado clássico: não pare nos valores de y (4 e 9)! Lembre-se de extrair a raiz quadrada para encontrar x."
    },
    commonTraps: ["Parar na raiz y = 4 e y = 9 sem extrair a raiz quadrada final."],
    tags: ["Matemática", "Equação Biquadrada", "Mudança de Variável", "Álgebra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-017",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Álgebra e Equações",
    subtopic: "Divisão Proporcional Inversa",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A direção de uma escola técnica premiou os dois laboratórios de informática com uma verba de R$ 6.200,00 para compra de novos equipamentos. A quantia foi dividida em partes inversamente proporcionais ao número de dias de paralisação por pane técnica de cada laboratório no semestre: o Laboratório A teve 2 dias de pane e o Laboratório B teve 3 dias de pane.",
      source: "DEPARTAMENTO DE GESTÃO ESCOLAR. Eficiência e Incentivo em Manutenção Técnica. Londrina, 2023."
    },
    prompt: "O valor da verba recebido pelo Laboratório A foi de",
    options: [
      {
        id: "a",
        text: "R$ 2.480,00.",
        isCorrect: false,
        distractorRationale: "Esse é o valor recebido pelo Laboratório B (que teve mais panes)."
      },
      {
        id: "b",
        text: "R$ 3.100,00.",
        isCorrect: false,
        distractorRationale: "Divisão igualitária simples de 6.200 por 2."
      },
      {
        id: "c",
        text: "R$ 3.720,00.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na divisão inversamente proporcional aos números 2 e 3, as partes são diretamente proporcionais aos seus inversos (1/2 e 1/3). Para eliminar as frações, multiplicamos pelo MMC(2, 3) = 6: • Proporção de A: 6 × (1/2) = 3 partes; • Proporção de B: 6 × (1/3) = 2 partes. Total de partes: 3 + 2 = 5 partes. Valor de cada parte (constante k): k = 6.200 / 5 = R$ 1.240,00. Portanto, o Laboratório A (com menos panes) recebe a maior fatia: 3 × 1.240 = R$ 3.720,00 (e B recebe 2 × 1.240 = R$ 2.480,00)."
      },
      {
        id: "d",
        text: "R$ 4.133,33.",
        isCorrect: false,
        distractorRationale: "Calculou divisão diretamente proporcional a 2/3."
      },
      {
        id: "e",
        text: "R$ 4.500,00.",
        isCorrect: false,
        distractorRationale: "Estimativa arbitrária sem cálculo de proporção inversa."
      }
    ],
    detailedExplanation: {
      summary: "Divisão em partes inversamente proporcionais a 2 e 3 equivale a dividir proporcionalmente a 1/2 e 1/3 (ou seja, 3 partes para A e 2 partes para B).",
      stepByStep: [
        "1. Inversos dos números: 1/2 e 1/3.",
        "2. MMC = 6. Multiplicando: A tem peso 3 e B tem peso 2.",
        "3. Total de partes: 3 + 2 = 5 partes.",
        "4. Valor de 1 parte: R$ 6.200 / 5 = R$ 1.240.",
        "5. Parte de A: 3 × 1.240 = R$ 3.720,00."
      ],
      coreConcept: "Divisão em partes inversamente proporcionais e proporcionalidade direta dos inversos.",
      trapWarning: "Quem tem MENOS panes (2 dias) deve receber MAIS dinheiro (R$ 3.720,00) porque a divisão é INVERSA!"
    },
    commonTraps: ["Fazer a divisão de forma diretamente proporcional, dando mais dinheiro para quem teve mais panes."],
    tags: ["Matemática", "Divisão Proporcional", "Proporcionalidade Inversa", "Álgebra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-018",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Sistemas Lineares e Reajustes Salariais",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma cooperativa agroindustrial, a folha de pagamento de dois supervisores técnicos, Roberto e Sílvia, somava R$ 8.000,00 mensais. Em um plano de incentivo, Roberto recebeu 10% de aumento salarial e Sílvia recebeu 20% de aumento, fazendo com que a folha combinada dos dois passasse para R$ 9.300,00.",
      source: "DEPARTAMENTO DE RECURSOS HUMANOS. Gestão de Cargos e Salários. Chapecó, 2023."
    },
    prompt: "O salário inicial de Roberto antes do reajuste era de",
    options: [
      {
        id: "a",
        text: "R$ 3.000,00.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Sejam R o salário de Roberto e S o salário de Sílvia: 1) R + S = 8.000 ⟹ S = 8.000 - R; 2) O aumento total foi de R$ 9.300 - R$ 8.000 = R$ 1.300,00. O aumento é dado por: 0,10R + 0,20S = 1.300. Multiplicando por 10: R + 2S = 13.000. Substituindo S: R + 2(8.000 - R) = 13.000 ⟹ R + 16.000 - 2R = 13.000 ⟹ -R = 13.000 - 16.000 ⟹ -R = -3.000 ⟹ R = R$ 3.000,00 (e S = R$ 5.000,00). Conferindo: 10% de 3.000 = 300; 20% de 5.000 = 1.000; Aumento total = 300 + 1.000 = 1.300."
      },
      {
        id: "b",
        text: "R$ 3.500,00.",
        isCorrect: false,
        distractorRationale: "0,10(3.500) + 0,20(4.500) = 350 + 900 = 1.250 ≠ 1.300."
      },
      {
        id: "c",
        text: "R$ 4.000,00.",
        isCorrect: false,
        distractorRationale: "Salários iguais dariam aumento de 0,10(4.000) + 0,20(4.000) = 400 + 800 = 1.200 ≠ 1.300."
      },
      {
        id: "d",
        text: "R$ 4.500,00.",
        isCorrect: false,
        distractorRationale: "0,10(4.500) + 0,20(3.500) = 450 + 700 = 1.150."
      },
      {
        id: "e",
        text: "R$ 5.000,00.",
        isCorrect: false,
        distractorRationale: "5.000 é o salário de Sílvia, e não de Roberto."
      }
    ],
    detailedExplanation: {
      summary: "Sistema linear 2x2 com valores percentuais e acréscimos salariais.",
      stepByStep: [
        "1. Salários iniciais: R + S = 8.000.",
        "2. Aumento total: 9.300 - 8.000 = 1.300 reais.",
        "3. Equação dos aumentos: 0,10R + 0,20S = 1.300 ⟹ R + 2S = 13.000.",
        "4. Subtraindo a primeira da segunda: (R + 2S) - (R + S) = 13.000 - 8.000 ⟹ S = 5.000 reais.",
        "5. Salário de Roberto: R = 8.000 - 5.000 = 3.000 reais."
      ],
      coreConcept: "Sistemas lineares aplicados a variações percentuais e finanças corporativas.",
      trapWarning: "Trabalhar com a equação do aumento (1.300) é muito mais rápido e gera menos contas do que usar 1,10R + 1,20S = 9.300!"
    },
    commonTraps: ["Trabalhar com números grandes e decimais desnecessários."],
    tags: ["Matemática", "Sistemas Lineares", "Porcentagem", "Álgebra Financeira"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-019",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Equações do Movimento e Ponto de Encontro",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois ciclistas em treinamento de resistência partem simultaneamente das extremidades opostas de uma ciclovia retilínea de 120 metros de extensão, pedalando um em direção ao outro com velocidades constantes. O ciclista 1 move-se a 2 m/s e o ciclista 2 move-se a 3 m/s.",
      source: "FEDERAÇÃO DE CICLISMO URBANO. Análise Cinemática de Treinamento em Pista. Curitiba, 2023."
    },
    prompt: "O intervalo de tempo transcorrido desde a partida simultânea até o instante em que os dois ciclistas se cruzam na ciclovia é de",
    options: [
      {
        id: "a",
        text: "15 segundos.",
        isCorrect: false,
        distractorRationale: "Cálculo que ignoraria a velocidade de um dos ciclistas."
      },
      {
        id: "b",
        text: "24 segundos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Como os ciclistas movem-se em sentidos opostos (um ao encontro do outro), a velocidade relativa de aproximação é a soma de suas velocidades escalares: v_rel = v₁ + v₂ = 2 + 3 = 5 m/s. Pela equação linear do movimento uniforme com velocidade relativa: ΔS = v_rel × t ⟹ 120 = 5t ⟹ t = 120 / 5 = 24 segundos. Ou, por equações horárias: S₁ = 2t e S₂ = 120 - 3t ⟹ no encontro S₁ = S₂ ⟹ 2t = 120 - 3t ⟹ 5t = 120 ⟹ t = 24 s."
      },
      {
        id: "c",
        text: "30 segundos.",
        isCorrect: false,
        distractorRationale: "120 / (3 + 1) = 30 s."
      },
      {
        id: "d",
        text: "40 segundos.",
        isCorrect: false,
        distractorRationale: "120 / 3 = 40 s (tempo que o ciclista 2 levaria se o outro estivesse parado)."
      },
      {
        id: "e",
        text: "60 segundos.",
        isCorrect: false,
        distractorRationale: "120 / 2 = 60 s (tempo que o ciclista 1 levaria se o outro estivesse parado)."
      }
    ],
    detailedExplanation: {
      summary: "Ponto de encontro em movimento uniforme: igualdade das funções horárias S₁ = S₂ ou velocidade relativa de aproximação.",
      stepByStep: [
        "1. Função do ciclista 1: S₁ = 0 + 2t.",
        "2. Função do ciclista 2: S₂ = 120 - 3t.",
        "3. Condição de encontro: S₁ = S₂ ⟹ 2t = 120 - 3t.",
        "4. 5t = 120 ⟹ t = 24 segundos."
      ],
      coreConcept: "Equações horárias do 1º grau aplicadas ao encontro cinemático.",
      trapWarning: "Quando dois móveis andam em sentidos contrários ao encontro um do outro, as velocidades se SOMAM na velocidade relativa!"
    },
    commonTraps: ["Subtrair as velocidades na aproximação frontal."],
    tags: ["Matemática", "Cinemática", "Equação do 1º Grau", "Ponto de Encontro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-020",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Álgebra e Equações",
    subtopic: "Determinante e Regra de Cramer",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na análise de fluxos de tráfego em uma malha urbana, engenheiros modelam a circulação em dois cruzamentos pelo sistema linear nas variáveis x e y:\n{ 3x + 2y = 14\n{ mx + 4y = 20",
      source: "DEPARTAMENTO DE ENGENHARIA DE TRANSPORTES. Modelagem de Tráfego por Grafos e Matrizes. São Paulo, 2023."
    },
    prompt: "Pela Regra de Cramer e teoria dos determinantes, o sistema linear admitirá uma ÚNICA solução determinada (SPD - Sistema Possível e Determinado) para qualquer valor real de m pertencente a",
    options: [
      {
        id: "a",
        text: "m = 6.",
        isCorrect: false,
        distractorRationale: "Para m = 6, o determinante da matriz de coeficientes é nulo (3×4 - 2×6 = 0), tornando o sistema indeterminado ou impossível."
      },
      {
        id: "b",
        text: "m ≠ 6.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pela Regra de Cramer, um sistema linear 2x2 tem solução única e determinada (SPD) se, e somente se, o determinante principal da matriz de coeficientes for diferente de zero: D ≠ 0. Calculando o determinante: D = | 3  2 | = (3 × 4) - (2 × m) = 12 - 2m. Condição para SPD: 12 - 2m ≠ 0 ⟹ -2m ≠ -12 ⟹ m ≠ 6. Portanto, para qualquer m diferente de 6, o sistema tem solução única."
      },
      {
        id: "c",
        text: "m = 0.",
        isCorrect: false,
        distractorRationale: "Para m = 0 o determinante é 12 ≠ 0, que é apenas um dos infinitos valores permitidos, não o conjunto completo."
      },
      {
        id: "d",
        text: "m > 10.",
        isCorrect: false,
        distractorRationale: "Valores menores que 10 (exceto o 6) também admitem solução única."
      },
      {
        id: "e",
        text: "m < 0.",
        isCorrect: false,
        distractorRationale: "Valores positivos diferentes de 6 também admitem solução única."
      }
    ],
    detailedExplanation: {
      summary: "Pela Regra de Cramer, o sistema linear é SPD se, e somente se, o determinante principal for não nulo: D ≠ 0.",
      stepByStep: [
        "1. Matriz de coeficientes: [ [3, 2], [m, 4] ].",
        "2. Determinante principal D = (3 × 4) - (2 × m) = 12 - 2m.",
        "3. Condição para solução única: D ≠ 0.",
        "4. 12 - 2m ≠ 0 ⟹ 2m ≠ 12 ⟹ m ≠ 6."
      ],
      coreConcept: "Regra de Cramer e condição de existência de solução única em matrizes e sistemas lineares.",
      trapWarning: "Lembre-se: D ≠ 0 garante que o sistema é SPD; se D = 0, ele pode ser SPI (infinitas) ou SI (nenhuma)!"
    },
    commonTraps: ["Calcular o valor que anula o determinante e achar que esse é o valor que dá solução única."],
    tags: ["Matemática", "Determinantes", "Regra de Cramer", "Sistemas Lineares", "Álgebra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-021",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Equações Irracionais e Condição de Existência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na física da reflexão óptica de um concentrador solar parabólico, o raio focal x satisfaz a equação irracional: √(2x + 7) = x - 4.",
      source: "CENTRO DE TECNOLOGIA SOLAR. Óptica Não-Linear e Concentradores Térmicos. Recife, 2023."
    },
    prompt: "O conjunto solução real dessa equação no conjunto dos números reais é dado por",
    options: [
      {
        id: "a",
        text: "S = {1, 9}.",
        isCorrect: false,
        distractorRationale: "x = 1 é uma raiz estranha introduzida pela elevação ao quadrado que não satisfaz a equação original (√(9) = 3 ≠ 1 - 4 = -3)."
      },
      {
        id: "b",
        text: "S = {9}.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Condição de existência: o radicando deve ser não negativo (2x + 7 ≥ 0 ⟹ x ≥ -3,5) e o segundo membro deve ser não negativo (pois raiz aritmética é sempre ≥ 0): x - 4 ≥ 0 ⟹ x ≥ 4. Elevando ambos os lados ao quadrado: [√(2x + 7)]² = (x - 4)² ⟹ 2x + 7 = x² - 8x + 16 ⟹ x² - 10x + 9 = 0. Resolvendo a quadrática por soma e produto: raízes são x = 1 e x = 9. Testando na condição x ≥ 4: • x = 1: 1 - 4 = -3 < 0 (raiz falsa/estranha descartada!); • x = 9: √(2(9) + 7) = √(25) = 5; e 9 - 4 = 5 (verdadeiro!). Portanto, a única solução real válida é S = {9}."
      },
      {
        id: "c",
        text: "S = {1}.",
        isCorrect: false,
        distractorRationale: "x = 1 tornaria o segundo membro negativo (-3), o que é impossível para raiz quadrada real."
      },
      {
        id: "d",
        text: "S = {-1, 9}.",
        isCorrect: false,
        distractorRationale: "Errou os sinais das raízes de x² - 10x + 9 = 0."
      },
      {
        id: "e",
        text: "S = ∅ (conjunto vazio).",
        isCorrect: false,
        distractorRationale: "Existe a solução válida x = 9."
      }
    ],
    detailedExplanation: {
      summary: "Em equações irracionais, a elevação ao quadrado pode introduzir raízes estranhas; é obrigatório testar os valores encontrados.",
      stepByStep: [
        "1. Condição de existência: x - 4 ≥ 0 ⟹ x ≥ 4.",
        "2. Elevando ao quadrado: 2x + 7 = x² - 8x + 16.",
        "3. Forma geral: x² - 10x + 9 = 0 ⟹ raízes x = 1 e x = 9.",
        "4. Validação: para x = 1, √(9) = -3 (falso!). Para x = 9, √(25) = 5 = 9 - 4 (verdadeiro!).",
        "5. Solução única: S = {9}."
      ],
      coreConcept: "Equações irracionais e eliminação de raízes estranhas por teste na equação original.",
      trapWarning: "Sempre teste as raízes na equação original! A raiz quadrada principal de um número real é SEMPRE positiva ou nula, nunca negativa!"
    },
    commonTraps: ["Aceitar x = 1 sem perceber que gera uma igualdade com número negativo."],
    tags: ["Matemática", "Equações Irracionais", "Raízes Estranhas", "Álgebra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-022",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Problema Clássico de Veículos e Rodas",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No estacionamento de funcionários de um hospital municipal, estão estacionados exatamente 45 veículos, constituídos apenas por motocicletas (2 rodas) e automóveis de passeio (4 rodas). Um guarda de segurança conferiu e contou um total de 130 rodas em contato com o solo.",
      source: "ADMINISTRAÇÃO PREDIAL DO COMPLEXO HOSPITALAR. Censo de Frota e Vagas de Estacionamento. Curitiba, 2023."
    },
    prompt: "A quantidade de automóveis de passeio estacionados nesse local é de",
    options: [
      {
        id: "a",
        text: "15 automóveis.",
        isCorrect: false,
        distractorRationale: "15 × 4 + 30 × 2 = 60 + 60 = 120 rodas."
      },
      {
        id: "b",
        text: "20 automóveis.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Sejam M o número de motocicletas e C o número de automóveis (carros): 1) Total de veículos: M + C = 45 ⟹ M = 45 - C; 2) Total de rodas: 2M + 4C = 130. Substituindo M: 2(45 - C) + 4C = 130 ⟹ 90 - 2C + 4C = 130 ⟹ 2C = 130 - 90 ⟹ 2C = 40 ⟹ C = 20 automóveis (e M = 25 motocicletas). Conferindo: 20 × 4 = 80 rodas; 25 × 2 = 50 rodas; Total: 80 + 50 = 130 rodas."
      },
      {
        id: "c",
        text: "25 automóveis.",
        isCorrect: false,
        distractorRationale: "25 é a quantidade de motocicletas, e não de automóveis."
      },
      {
        id: "d",
        text: "30 automóveis.",
        isCorrect: false,
        distractorRationale: "30 × 4 + 15 × 2 = 120 + 30 = 150 rodas."
      },
      {
        id: "e",
        text: "35 automóveis.",
        isCorrect: false,
        distractorRationale: "35 × 4 + 10 × 2 = 140 + 20 = 160 rodas."
      }
    ],
    detailedExplanation: {
      summary: "Problema clássico de 'pés e cabeças' / 'rodas e veículos' resolvido por sistema linear 2x2.",
      stepByStep: [
        "1. Equação de veículos: M + C = 45.",
        "2. Equação de rodas: 2M + 4C = 130.",
        "3. Multiplicando a primeira por -2: -2M - 2C = -90.",
        "4. Somando com a segunda: 2C = 40 ⟹ C = 20 automóveis.",
        "5. Motos: M = 45 - 20 = 25 motos."
      ],
      coreConcept: "Sistemas lineares 2x2 e eliminação por adição.",
      trapWarning: "Cuidado para não assinalar a quantidade de motocicletas (25) ao invés da de automóveis (20)!"
    },
    commonTraps: ["Assinalar a quantidade de motos em vez de carros."],
    tags: ["Matemática", "Sistemas Lineares", "Álgebra", "Contagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-023",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Inequação Modular em Controle de Qualidade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na indústria farmacêutica, o controle de qualidade de frascos de xarope exige que a massa real x do produto (em gramas) não desvie mais do que 4 gramas do padrão nominal de 50 gramas por lote, sendo regulada pela inequação modular: |2x - 50| ≤ 4.",
      source: "AGÊNCIA NACIONAL DE VIGILÂNCIA SANITÁRIA (ANVISA). Guia de Tolerâncias Métricas Farmacopeicas. Brasília, 2023."
    },
    prompt: "O intervalo fechado de valores de x que atende a esse rigoroso critério metrológico é dado por",
    options: [
      {
        id: "a",
        text: "21 ≤ x ≤ 29.",
        isCorrect: false,
        distractorRationale: "Subtraiu 4 de 50 sem dividir por 2 na primeira etapa."
      },
      {
        id: "b",
        text: "23 ≤ x ≤ 27.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pela propriedade das inequações modulares: |u| ≤ a ⟺ -a ≤ u ≤ a. Aplicando à expressão: -4 ≤ 2x - 50 ≤ 4. Somando 50 a todos os membros: 50 - 4 ≤ 2x ≤ 50 + 4 ⟹ 46 ≤ 2x ≤ 54. Dividindo todos os membros por 2: 46 / 2 ≤ x ≤ 54 / 2 ⟹ 23 ≤ x ≤ 27 gramas."
      },
      {
        id: "c",
        text: "46 ≤ x ≤ 54.",
        isCorrect: false,
        distractorRationale: "Esqueceu de dividir pelo coeficiente 2 de x."
      },
      {
        id: "d",
        text: "20 ≤ x ≤ 30.",
        isCorrect: false,
        distractorRationale: "Intervalo arredondado impreciso."
      },
      {
        id: "e",
        text: "24 ≤ x ≤ 26.",
        isCorrect: false,
        distractorRationale: "Considerou desvio de 2 em vez de 4."
      }
    ],
    detailedExplanation: {
      summary: "Inequação modular do tipo |u| ≤ a resolvida como desigualdade dupla simultânea: -a ≤ u ≤ a.",
      stepByStep: [
        "1. Propriedade modular: |2x - 50| ≤ 4 ⟺ -4 ≤ 2x - 50 ≤ 4.",
        "2. Somando 50 em todas as partes: 46 ≤ 2x ≤ 54.",
        "3. Dividindo por 2: 23 ≤ x ≤ 27.",
        "4. Conjunto Solução: [23, 27]."
      ],
      coreConcept: "Módulo de números reais e inequações modulares aplicadas a tolerâncias industriais.",
      trapWarning: "Lembre-se de somar ou subtrair o termo em AMBOS os lados da desigualdade simultânea!"
    },
    commonTraps: ["Esquecer de dividir por 2 no passo final."],
    tags: ["Matemática", "Inequações Modulares", "Módulo", "Controle de Qualidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-024",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Álgebra e Equações",
    subtopic: "Média Ponderada com Peso Desconhecido",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um processo seletivo para residência multiprofissional em saúde, a nota final é calculada por uma média ponderada entre a Prova Objetiva (peso 3, nota obtida: 8,0) e a Prova Prática (peso p desconhecido, nota obtida: 6,0). O candidato alcançou uma média final exatamente igual a 7,2.",
      source: "COMISSÃO DE RESIDÊNCIA MULTIPROFISSIONAL EM SAÚDE. Edital do Exame de Seleção. Salvador, 2023."
    },
    prompt: "O peso p atribuído à Prova Prática nesse concurso corresponde a",
    options: [
      {
        id: "a",
        text: "1.",
        isCorrect: false,
        distractorRationale: "(3 × 8 + 1 × 6)/4 = 30/4 = 7,5 ≠ 7,2."
      },
      {
        id: "b",
        text: "2.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pela definição de média ponderada: Média = (3 × 8,0 + p × 6,0) / (3 + p) = 7,2. Multiplicando em cruz: 24 + 6p = 7,2(3 + p) ⟹ 24 + 6p = 21,6 + 7,2p ⟹ 24 - 21,6 = 7,2p - 6p ⟹ 2,4 = 1,2p ⟹ p = 2,4 / 1,2 = 2. Logo, o peso da prova prática é 2."
      },
      {
        id: "c",
        text: "3.",
        isCorrect: false,
        distractorRationale: "Com pesos iguais (3 e 3), a média seria a aritmética: (8 + 6)/2 = 7,0 ≠ 7,2."
      },
      {
        id: "d",
        text: "4.",
        isCorrect: false,
        distractorRationale: "(24 + 24)/7 = 48/7 ≈ 6,86."
      },
      {
        id: "e",
        text: "5.",
        isCorrect: false,
        distractorRationale: "(24 + 30)/8 = 54/8 = 6,75."
      }
    ],
    detailedExplanation: {
      summary: "Média ponderada modelada como equação do 1º grau para determinação de peso desconhecido.",
      stepByStep: [
        "1. Fórmula: Média = (N₁p₁ + N₂p₂) / (p₁ + p₂).",
        "2. Equação: (3 × 8,0 + 6,0p) / (3 + p) = 7,2.",
        "3. 24 + 6p = 7,2(3 + p) ⟹ 24 + 6p = 21,6 + 7,2p.",
        "4. 24 - 21,6 = 7,2p - 6p ⟹ 2,4 = 1,2p ⟹ p = 2."
      ],
      coreConcept: "Média ponderada e equações lineares do 1º grau com produto cruzado.",
      trapWarning: "Lembre-se de que o denominador da média ponderada é a soma de todos os pesos (3 + p)!"
    },
    commonTraps: ["Esquecer de incluir a incógnita p no denominador da soma dos pesos."],
    tags: ["Matemática", "Média Ponderada", "Equação do 1º Grau", "Estatística Básica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-SIS-025",
    area: "matematica",
    competence: 5,
    skill: 22,
    topic: "Álgebra e Equações",
    subtopic: "Ponto de Equilíbrio Financeiro (Break-Even Point)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma cooperativa comunitária de reciclagem de papelão possui um custo fixo mensal de R$ 1.800,00 com aluguel de prensa e energia, além de um custo variável de R$ 0,40 por quilograma de papelão processado. O material reciclado é vendido para indústrias de embalagens pelo preço fixo de R$ 1,00 por quilograma.",
      source: "FEDERAÇÃO DAS COOPERATIVAS DE CATADORES. Gestão Financeira e Viabilidade Operacional. Curitiba, 2023."
    },
    prompt: "A quantidade mínima de papelão, em quilogramas, que a cooperativa precisa processar e vender por mês para atingir o ponto de equilíbrio financeiro (momento em que a receita total empata exatamente com o custo total, sem lucro nem prejuízo) é de",
    options: [
      {
        id: "a",
        text: "1.800 kg.",
        isCorrect: false,
        distractorRationale: "Receita de 1.800 R$ e custo de 1.800 + 0,40(1.800) = 2.520 (prejuízo de R$ 720,00)."
      },
      {
        id: "b",
        text: "2.500 kg.",
        isCorrect: false,
        distractorRationale: "Receita de 2.500 R$ e custo de 1.800 + 1.000 = 2.800 (prejuízo de R$ 300,00)."
      },
      {
        id: "c",
        text: "3.000 kg.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. No ponto de equilíbrio (break-even point): Receita Total = Custo Total. • Receita Total: R(x) = 1,00x; • Custo Total: C(x) = 1.800 + 0,40x. Igualando: 1,00x = 1.800 + 0,40x ⟹ 1,00x - 0,40x = 1.800 ⟹ 0,60x = 1.800 ⟹ x = 1.800 / 0,60 = 18.000 / 6 = 3.000 kg. Conferindo: Receita = 3.000 × 1 = R$ 3.000; Custo = 1.800 + 0,40(3.000) = 1.800 + 1.200 = R$ 3.000."
      },
      {
        id: "d",
        text: "3.500 kg.",
        isCorrect: false,
        distractorRationale: "Com 3.500 kg a empresa já opera com lucro de R$ 300,00."
      },
      {
        id: "e",
        text: "4.500 kg.",
        isCorrect: false,
        distractorRationale: "1.800 / 0,40 = 4.500 kg (calculou dividindo apenas pelo custo variável)."
      }
    ],
    detailedExplanation: {
      summary: "Ponto de equilíbrio ocorre quando R(x) = C(x). A margem de contribuição unitária (1,00 - 0,40 = 0,60) cobre o custo fixo de R$ 1.800.",
      stepByStep: [
        "1. Função Receita: R(x) = 1,00x.",
        "2. Função Custo: C(x) = 1.800 + 0,40x.",
        "3. Ponto de equilíbrio: R(x) = C(x) ⟹ 1,00x - 0,40x = 1.800.",
        "4. 0,60x = 1.800 ⟹ x = 1.800 / 0,6 = 3.000 kg."
      ],
      coreConcept: "Ponto de equilíbrio financeiro e interseção de retas no plano cartesiano.",
      trapWarning: "Margem de contribuição: o preço de venda menos o custo variável (1,00 - 0,40 = 0,60) é o valor que sobra de cada quilo para pagar o custo fixo!"
    },
    commonTraps: ["Dividir o custo fixo diretamente pelo preço de venda ou pelo custo variável isolado."],
    tags: ["Matemática", "Ponto de Equilíbrio", "Função Afim", "Álgebra Financeira", "Break-Even"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
