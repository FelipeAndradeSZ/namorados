/**
 * BANCO DE QUESTÕES: MATRIZES, DETERMINANTES E MODELAGEM MATRICIAL NO ENEM
 * Área: Matemática e suas Tecnologias
 * Competências: C2 / C4 / C6 | Habilidades: H6, H7, H19, H27, H28
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de precisão algébrica, vetorial e geométrica
 * Regra Estrita: ZERO termos de deslocamentos turísticos. Foco em aplicações práticas
 * em logística fabril, redes de comunicação, computação gráfica, nutrição e criptografia.
 */

export const QUESTIONS_MATRIZES_TABELAS = [
  {
    id: "MAT-MAT-001",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Multiplicação Matricial e Custos de Produção",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma cooperativa de marcenaria produz dois modelos de mesas: Escolar (E) e Reunião (R). Para fabricar cada mesa, utilizam-se chapas de madeira (M) e parafusos metálicos (P). A matriz A = [[3, 20], [5, 32]] indica a quantidade de insumos necessários, onde as linhas representam os modelos (Linha 1: Escolar; Linha 2: Reunião) e as colunas representam os insumos (Coluna 1: chapas de madeira; Coluna 2: parafusos). Em determinado mês, os custos unitários desses insumos foram organizados na matriz coluna B = [[40], [2]], onde a primeira linha é o custo de cada chapa de madeira (R$ 40,00) e a segunda linha é o custo de cada parafuso (R$ 2,00).",
      source: "Modelagem Matemática de Custos Industriais - Cooperativas Regionais, 2026."
    },
    prompt: "O custo total em insumos para a fabricação de uma mesa do modelo Escolar e de uma mesa do modelo Reunião é dado pelo produto matricial C = A · B. Os custos de cada unidade desses dois modelos são, respectivamente,",
    options: [
      {
        id: "a",
        text: "R$ 120,00 e R$ 200,00.",
        isCorrect: false,
        distractorRationale: "Calculou apenas o custo das chapas de madeira (3 × 40 = 120 e 5 × 40 = 200), esquecendo de somar o valor dos parafusos."
      },
      {
        id: "b",
        text: "R$ 160,00 e R$ 264,00.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na multiplicação de matrizes: C11 = (3 × 40) + (20 × 2) = 120 + 40 = R$ 160,00 para a mesa Escolar. C21 = (5 × 40) + (32 × 2) = 200 + 64 = R$ 264,00 para a mesa Reunião."
      },
      {
        id: "c",
        text: "R$ 140,00 e R$ 232,00.",
        isCorrect: false,
        distractorRationale: "Multiplicou os parafusos por R$ 1,00 em vez de R$ 2,00."
      },
      {
        id: "d",
        text: "R$ 180,00 e R$ 300,00.",
        isCorrect: false,
        distractorRationale: "Inverteu os coeficientes da matriz multiplicando 20 por 40."
      },
      {
        id: "e",
        text: "R$ 212,00 e R$ 280,00.",
        isCorrect: false,
        distractorRationale: "Errou a operação somando os termos das colunas antes de multiplicar."
      }
    ],
    detailedExplanation: {
      summary: "O produto de uma matriz 2x2 por uma matriz coluna 2x1 resulta em uma matriz 2x1 correspondente aos custos totais de cada mesa.",
      stepByStep: [
        "Passo 1: Identificar a regra do produto de matrizes C = A · B:",
        "Linha 1 de C (Mesa Escolar): (3 chapas × R$ 40) + (20 parafusos × R$ 2) = 120 + 40 = R$ 160,00.",
        "Linha 2 de C (Mesa Reunião): (5 chapas × R$ 40) + (32 parafusos × R$ 2) = 200 + 64 = R$ 264,00.",
        "Passo 2: Concluir os valores respectivos: R$ 160,00 e R$ 264,00."
      ],
      coreConcept: "A multiplicação de matrizes A(m×k) por B(k×n) combina linearmente cada linha de A com cada coluna de B, somando os produtos dos elementos correspondentes.",
      trapWarning: "Cuidado para não multiplicar elementos correspondentes ponto a ponto; multiplicação de matrizes exige a soma dos produtos da linha pela coluna."
    },
    commonTraps: ["Multiplicar elemento a elemento em vez de fazer o produto escalar da linha pela coluna"],
    tags: ["matrizes", "multiplicacao-matricial", "custo-industrial", "algebra-linear"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-002",
    area: "matematica",
    competence: 4,
    skill: 19,
    topic: "Matrizes e Tabelas",
    subtopic: "Matriz de Adjacência e Redes de Comunicação",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma rede local de laboratórios de informática interligados por cabos de fibra óptica, quatro servidores (1, 2, 3 e 4) trocam pacotes de dados diretamente. A matriz de adjacência M = [a_ij] representa as conexões diretas entre os servidores, onde a_ij = 1 se existe cabo direto entre o servidor i e o servidor j, e a_ij = 0 caso contrário (com a_ii = 0):\n\nM = [\n  [0, 1, 1, 0],\n  [1, 0, 1, 1],\n  [1, 1, 0, 1],\n  [0, 1, 1, 0]\n]\n\nNa teoria dos grafos e matrizes, o elemento c_ij da matriz M² = M · M indica a quantidade de caminhos distintos de comprimento exatamente 2 (passando por um intermediário) para envio de dados do servidor i para o servidor j.",
      source: "Comunicação de Dados e Topologias de Rede em Matrizes, 2026."
    },
    prompt: "O número de rotas distintas com exatamente um intermediário (comprimento 2) para transmissão de dados partindo do servidor 1 até o servidor 4 é igual a",
    options: [
      {
        id: "a",
        text: "1.",
        isCorrect: false,
        distractorRationale: "Identificou apenas o caminho via servidor 2, ignorando o caminho via servidor 3."
      },
      {
        id: "b",
        text: "2.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O elemento c_14 de M² é o produto escalar da linha 1 de M pela coluna 4 de M: c_14 = (0 × 0) + (1 × 1) + (1 × 1) + (0 × 0) = 0 + 1 + 1 + 0 = 2. As duas rotas são: 1 → 2 → 4 e 1 → 3 → 4."
      },
      {
        id: "c",
        text: "3.",
        isCorrect: false,
        distractorRationale: "Somou os graus dos vértices sem calcular o produto de matrizes."
      },
      {
        id: "d",
        text: "4.",
        isCorrect: false,
        distractorRationale: "Multiplicou o número de conexões do vértice 1 pelo vértice 4."
      },
      {
        id: "e",
        text: "0.",
        isCorrect: false,
        distractorRationale: "Observou o elemento a_14 = 0 na matriz original e deduziu que não havia conexões em 2 passos."
      }
    ],
    detailedExplanation: {
      summary: "Em uma matriz de adjacência M, a entrada (i, j) da potência M² expressa o número de caminhos de comprimento 2 entre o vértice i e o vértice j.",
      stepByStep: [
        "Passo 1: Tomar a linha 1 de M: [0, 1, 1, 0].",
        "Passo 2: Tomar a coluna 4 de M: [0, 1, 1, 0]^T.",
        "Passo 3: Efetuar o produto escalar para encontrar c_14 em M²:",
        "c_14 = (0 × 0) + (1 × 1) + (1 × 1) + (0 × 0) = 0 + 1 + 1 + 0 = 2 caminhos.",
        "Esses dois caminhos correspondem aos intermediários conectados simultaneamente a 1 e 4 (servidores 2 e 3)."
      ],
      coreConcept: "Se M é a matriz de adjacência de um grafo, o elemento (i, j) de M^k informa o número exato de caminhos de comprimento k entre os vértices i e j.",
      trapWarning: "Não confunda a existência de cabo direto (dada em M) com a existência de rotas intermediárias (dada pelas potências da matriz)."
    },
    commonTraps: ["Olhar a entrada a_14 da matriz simples em vez de calcular o elemento de M²"],
    tags: ["matriz-adjacencia", "grafos", "redes", "potencia-matriz"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-003",
    area: "matematica",
    competence: 2,
    skill: 6,
    topic: "Matrizes e Tabelas",
    subtopic: "Classificação em Torneio Esportivo Escolar",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na fase final do torneio interclasses de handebol de uma escola, quatro equipes (Alfa, Beta, Gama e Delta) disputaram partidas em turno único. O desempenho das equipes foi registrado na matriz R de dimensão 4x3, onde as linhas representam as equipes (Linhas 1 a 4: Alfa, Beta, Gama e Delta) e as colunas indicam o número de Vitórias (V), Empates (E) e Derrotas (D), respectivamente:\n\nR = [\n  [3, 1, 0],\n  [2, 2, 0],\n  [1, 1, 2],\n  [0, 2, 2]\n]\n\nA pontuação no torneio obedece à matriz coluna de pontuação P = [[3], [1], [0]], atribuindo 3 pontos por vitória, 1 ponto por empate e 0 ponto por derrota.",
      source: "Boletim Esportivo dos Jogos Estudantis, 2026."
    },
    prompt: "A matriz final de pontuação total das quatro equipes é obtida pelo produto T = R · P. A equipe campeã e a sua respectiva pontuação total foram",
    options: [
      {
        id: "a",
        text: "Beta, com 8 pontos.",
        isCorrect: false,
        distractorRationale: "Beta somou 2×3 + 2×1 = 8 pontos, mas Alfa somou mais pontos."
      },
      {
        id: "b",
        text: "Alfa, com 10 pontos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Calculando o produto matricial: T_Alfa = (3 × 3) + (1 × 1) + (0 × 0) = 9 + 1 = 10 pontos. T_Beta = (2 × 3) + (2 × 1) + (0 × 0) = 8 pontos. T_Gama = (1 × 3) + (1 × 1) + (2 × 0) = 4 pontos. T_Delta = (0 × 3) + (2 × 1) + (2 × 0) = 2 pontos. A equipe Alfa sagrou-se campeã com 10 pontos."
      },
      {
        id: "c",
        text: "Alfa, com 9 pontos.",
        isCorrect: false,
        distractorRationale: "Esqueceu de somar o ponto obtido pelo empate de Alfa."
      },
      {
        id: "d",
        text: "Beta, com 10 pontos.",
        isCorrect: false,
        distractorRationale: "Atribuiu erroneamente 3 pontos aos empates da equipe Beta."
      },
      {
        id: "e",
        text: "Gama, com 6 pontos.",
        isCorrect: false,
        distractorRationale: "Calculou incorretamente a pontuação de Gama contando derrotas com pontos."
      }
    ],
    detailedExplanation: {
      summary: "Multiplicando a matriz de resultados 4x3 pela matriz de pesos 3x1 obtém-se o total de pontos de cada equipe.",
      stepByStep: [
        "Passo 1: Montar os produtos para cada equipe (linha de R pela coluna P):",
        "• Alfa: (3 × 3) + (1 × 1) + (0 × 0) = 9 + 1 + 0 = 10 pontos.",
        "• Beta: (2 × 3) + (2 × 1) + (0 × 0) = 6 + 2 + 0 = 8 pontos.",
        "• Gama: (1 × 3) + (1 × 1) + (2 × 0) = 3 + 1 + 0 = 4 pontos.",
        "• Delta: (0 × 3) + (2 × 1) + (2 × 0) = 0 + 2 + 0 = 2 pontos.",
        "Passo 2: Comparar as pontuações: a maior é 10 pontos, da equipe Alfa."
      ],
      coreConcept: "A multiplicação matricial condensa ponderações lineares em tabelas de pontuação esportiva e ranqueamento multidimensional.",
      trapWarning: "Certifique-se de alinhar a ordem das colunas (V, E, D) com as linhas da matriz de pontos (3, 1, 0)."
    },
    commonTraps: ["Esquecer a pontuação dos empates ou trocar a ordem das colunas"],
    tags: ["matrizes", "tabela-esportiva", "multiplicacao-matrizes", "ponderacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-004",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Criptografia Matricial e Mensagens Codificadas",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na segurança digital de um sistema bancário, pares de números [x, y]^T que representam caracteres alfanuméricos são codificados multiplicando-se pela matriz chave de encriptação K = [[2, 1], [3, 2]]. O par de códigos original [x, y]^T gera o par criptografado [u, v]^T através da equação matricial:\n\n[[u], [v]] = [[2, 1], [3, 2]] · [[x], [y]]\n\nPara decodificar e recuperar os números originais a partir da mensagem criptografada, o servidor multiplica o vetor recebido pela matriz inversa K⁻¹.",
      source: "Criptografia Clássica de Hill e Álgebra Linear Aplicada, 2026."
    },
    prompt: "Sabendo que a matriz inversa de K é dada por K⁻¹ = [[2, -1], [-3, 2]], se a mensagem recebida pelo servidor foi o par criptografado [u, v]^T = [[11], [17]], o par original de números [x, y] enviado era",
    options: [
      {
        id: "a",
        text: "[5, 1].",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Multiplicando K⁻¹ pelo vetor recebido: x = (2 × 11) + (-1 × 17) = 22 - 17 = 5; y = (-3 × 11) + (2 × 17) = -33 + 34 = 1. Logo, [x, y] = [5, 1]. Verificação na direta: K · [5, 1]^T = [2(5)+1(1), 3(5)+2(1)]^T = [11, 17]^T."
      },
      {
        id: "b",
        text: "[4, 3].",
        isCorrect: false,
        distractorRationale: "Testou [4, 3] que geraria [11, 18], diferente de [11, 17]."
      },
      {
        id: "c",
        text: "[3, 5].",
        isCorrect: false,
        distractorRationale: "Inverteu a ordem de x e y."
      },
      {
        id: "d",
        text: "[1, 9].",
        isCorrect: false,
        distractorRationale: "Cometeu erro aritmético nos produtos com sinais negativos."
      },
      {
        id: "e",
        text: "[6, -1].",
        isCorrect: false,
        distractorRationale: "Esqueceu de multiplicar o segundo termo por 2 no cálculo de y."
      }
    ],
    detailedExplanation: {
      summary: "A decodificação é obtida aplicando a matriz inversa K⁻¹ sobre o vetor criptografado.",
      stepByStep: [
        "Passo 1: Expressar a equação de decodificação:",
        "[[x], [y]] = K⁻¹ · [[u], [v]] = [[2, -1], [-3, 2]] · [[11], [17]].",
        "Passo 2: Calcular x (primeira linha pelo vetor coluna):",
        "x = 2(11) + (-1)(17) = 22 - 17 = 5.",
        "Passo 3: Calcular y (segunda linha pelo vetor coluna):",
        "y = -3(11) + 2(17) = -33 + 34 = 1.",
        "Passo 4: Portanto, o par original é [5, 1]."
      ],
      coreConcept: "Se C = K · P, então o vetor original P é recuperado por P = K⁻¹ · C, desde que det(K) ≠ 0.",
      trapWarning: "Atenção rigorosa aos sinais negativos presentes nos elementos da matriz inversa ao somar e subtrair."
    },
    commonTraps: ["Errar o sinal ao calcular -3 × 11 + 34"],
    tags: ["matriz-inversa", "criptografia", "sistemas-lineares", "algebra-linear"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-005",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Determinante de Ordem 2 e Condição de Solução Única",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um engenheiro de automação está calibrando dois braços robóticos industriais que operam conforme o sistema linear de variáveis x e y:\n\n{ 2x + k·y = 8\n{ 6x + 9y = 24\n\nPara que o sistema possua uma única solução bem determinada (Sistema Possível e Determinado — SPD), garantindo que as trajetórias dos braços robóticos convirjam para um ponto exclusivo de solda, o determinante da matriz dos coeficientes do sistema deve ser obrigatoriamente diferente de zero.",
      source: "Automação Industrial e Métodos de Controle Linear, 2026."
    },
    prompt: "O valor do parâmetro real k para o qual o sistema NÃO possui solução única (det = 0) é igual a",
    options: [
      {
        id: "a",
        text: "1.",
        isCorrect: false,
        distractorRationale: "Para k = 1, det = 2(9) - 6(1) = 18 - 6 = 12 ≠ 0."
      },
      {
        id: "b",
        text: "2.",
        isCorrect: false,
        distractorRationale: "Para k = 2, det = 18 - 12 = 6 ≠ 0."
      },
      {
        id: "c",
        text: "3.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A matriz dos coeficientes é M = [[2, k], [6, 9]]. O determinante de ordem 2 é calculado por det(M) = (2 × 9) - (6 × k) = 18 - 6k. Para que não haja solução única, impõe-se det(M) = 0: 18 - 6k = 0 ⇒ 6k = 18 ⇒ k = 3."
      },
      {
        id: "d",
        text: "4.",
        isCorrect: false,
        distractorRationale: "Para k = 4, det = 18 - 24 = -6 ≠ 0."
      },
      {
        id: "e",
        text: "6.",
        isCorrect: false,
        distractorRationale: "Confundiu com o coeficiente 6 da segunda linha."
      }
    ],
    detailedExplanation: {
      summary: "O determinante da matriz de coeficientes nulo caracteriza sistemas indeterminados ou impossíveis.",
      stepByStep: [
        "Passo 1: Escrever a matriz dos coeficientes M = [[2, k], [6, 9]].",
        "Passo 2: Calcular o determinante de M pela diferença dos produtos das diagonais:",
        "det(M) = (2 × 9) - (k × 6) = 18 - 6k.",
        "Passo 3: Igualar o determinante a zero para encontrar a condição de perda de solução única:",
        "18 - 6k = 0 ⇒ 6k = 18 ⇒ k = 3."
      ],
      coreConcept: "Pela Regra de Cramer, um sistema linear quadrado possui solução única se, e somente se, o determinante da matriz de coeficientes for não-nulo (det ≠ 0).",
      trapWarning: "Note que para k = 3 as duas equações tornam-se coincidentes (a segunda é exatamente o triplo da primeira: 3 × (2x + 3y = 8) ⇒ 6x + 9y = 24), gerando infinitas soluções."
    },
    commonTraps: ["Trocar a ordem dos produtos na diagonal secundária"],
    tags: ["determinantes", "sistemas-lineares", "cramer", "matrizes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-006",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Área de Polígono Cartesiano por Determinante de Gauss",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um projeto de zoneamento de preservação ambiental em um parque florestal, um biólogo mapeou uma clareira triangular com coordenadas cartesianas expressas em quilômetros: vértice A(1, 2), vértice B(5, 2) e vértice C(3, 6). Na geometria analítica, a área de um triângulo determinado por três vértices A(x_A, y_A), B(x_B, y_B) e C(x_C, y_C) é dada por:\n\nÁrea = (1/2) · |det(D)|\n\nonde D é a matriz 3x3 de coordenadas:\n\nD = [\n  [x_A, y_A, 1],\n  [x_B, y_B, 1],\n  [x_C, y_C, 1]\n]",
      source: "Geometria Computacional e Sensoriamento Remoto, 2026."
    },
    prompt: "Utilizando o determinante da matriz D, a área total da clareira florestal mapeada em quilômetros quadrados é igual a",
    options: [
      {
        id: "a",
        text: "4 km².",
        isCorrect: false,
        distractorRationale: "Dividiu a área correta por 2 novamente."
      },
      {
        id: "b",
        text: "8 km².",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Montando a matriz D: [[1, 2, 1], [5, 2, 1], [3, 6, 1]]. Pela Regra de Sarrus: diagonais principais = (1·2·1) + (2·1·3) + (1·5·6) = 2 + 6 + 30 = 38. Diagonais secundárias = (1·2·3) + (2·5·1) + (1·1·6) = 6 + 10 + 6 = 22. det(D) = 38 - 22 = 16. Área = (1/2) · |16| = 8 km²."
      },
      {
        id: "c",
        text: "12 km².",
        isCorrect: false,
        distractorRationale: "Cometeu erro de cálculo na soma das diagonais secundárias."
      },
      {
        id: "d",
        text: "16 km².",
        isCorrect: false,
        distractorRationale: "Calculou o determinante |det(D)| = 16 mas esqueceu de multiplicar pela fração 1/2."
      },
      {
        id: "e",
        text: "20 km².",
        isCorrect: false,
        distractorRationale: "Somou as diagonais principais com as secundárias em vez de subtrair."
      }
    ],
    detailedExplanation: {
      summary: "A área do triângulo no plano cartesiano é a metade do módulo do determinante 3x3 das coordenadas de seus vértices completadas com a coluna de 1s.",
      stepByStep: [
        "Passo 1: Montar a matriz D = [[1, 2, 1], [5, 2, 1], [3, 6, 1]].",
        "Passo 2: Calcular o determinante por Sarrus:",
        "Termos positivos: (1 × 2 × 1) + (2 × 1 × 3) + (1 × 5 × 6) = 2 + 6 + 30 = 38.",
        "Termos negativos: (1 × 2 × 3) + (2 × 5 × 1) + (1 × 6 × 1) = 6 + 10 + 6 = 22.",
        "det(D) = 38 - 22 = 16.",
        "Passo 3: Aplicar a fórmula da área: Área = (1/2) · |16| = 8 km².",
        "Passo 4: Verificação geométrica clássica: Base horizontal AB = 5 - 1 = 4 km; Altura relativa ao eixo y = 6 - 2 = 4 km; Área = (base × altura)/2 = (4 × 4)/2 = 8 km²."
      ],
      coreConcept: "O determinante de ordem 3 com a terceira coluna unitária calcula o dobro da área algébrica com sinal do triângulo no plano cartesiano.",
      trapWarning: "Nunca se esqueça de multiplicar por 1/2 ao final; o determinante fornece o dobro da área do triângulo (área do paralelogramo associado)."
    },
    commonTraps: ["Esquecer a divisão por 2 no cálculo da área"],
    tags: ["determinante-3x3", "geometria-analitica", "area-triangulo", "sarrus"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-007",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Transposição de Matrizes e Análise Contábil",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma auditoria de uma rede de farmácias com 3 filiais (F1, F2 e F3) que comercializam 2 categorias de produtos (Medicamentos - M e Cosméticos - C), o faturamento bruto diário em milhares de reais foi registrado na matriz F de ordem 3x2:\n\nF = [\n  [15, 8],\n  [20, 12],\n  [10, 5]\n]\n\nonde as linhas representam as filiais (F1, F2, F3) e as colunas representam os produtos (M, C). O diretor financeiro solicitou a matriz transposta F^T para organizar os dados por tipo de produto nas linhas e por filiais nas colunas.",
      source: "Controladoria e Gestão em Saúde, 2026."
    },
    prompt: "O elemento da segunda linha e primeira coluna da matriz transposta F^T, denotado por (F^T)_21, corresponde ao faturamento de",
    options: [
      {
        id: "a",
        text: "Cosméticos na Filial F1, no valor de R$ 8.000,00.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Por definição de transposição, (F^T)_ij = F_ji. Logo, (F^T)_21 = F_12. Na matriz F original, a linha 1 representa a filial F1 e a coluna 2 representa Cosméticos. O valor é 8 milhares de reais, ou seja, R$ 8.000,00."
      },
      {
        id: "b",
        text: "Medicamentos na Filial F2, no valor de R$ 20.000,00.",
        isCorrect: false,
        distractorRationale: "Esse é o elemento F_21 da matriz original, e não da matriz transposta."
      },
      {
        id: "c",
        text: "Medicamentos na Filial F1, no valor de R$ 15.000,00.",
        isCorrect: false,
        distractorRationale: "Esse é o elemento F_11 da matriz original."
      },
      {
        id: "d",
        text: "Cosméticos na Filial F2, no valor de R$ 12.000,00.",
        isCorrect: false,
        distractorRationale: "Esse é o elemento F_22 da matriz original."
      },
      {
        id: "e",
        text: "Cosméticos na Filial F3, no valor de R$ 5.000,00.",
        isCorrect: false,
        distractorRationale: "Esse é o elemento F_32 da matriz original."
      }
    ],
    detailedExplanation: {
      summary: "A transposição troca linhas por colunas: o elemento (i, j) da transposta é o elemento (j, i) da matriz original.",
      stepByStep: [
        "Passo 1: Entender a definição de matriz transposta: as linhas de F viram as colunas de F^T.",
        "F = [[15, 8], [20, 12], [10, 5]] (ordem 3x2).",
        "Passo 2: Montar a matriz F^T (ordem 2x3):",
        "F^T = [[15, 20, 10], [8, 12, 5]].",
        "Passo 3: Identificar o elemento da linha 2 e coluna 1 de F^T: é o número 8.",
        "Passo 4: Como a linha 2 de F^T corresponde à coluna 2 de F (Cosméticos) e a coluna 1 de F^T corresponde à linha 1 de F (Filial 1), trata-se do faturamento de Cosméticos na Filial 1, que vale R$ 8.000,00."
      ],
      coreConcept: "A transposição matricial inverte a perspectiva de análise de tabelas relacionais de dupla entrada mantendo o conjunto de dados intacto.",
      trapWarning: "Cuidado para não confundir o elemento da transposta (F^T)_21 com o elemento F_21 da matriz original."
    },
    commonTraps: ["Ler o elemento F_21 da matriz original sem transpor"],
    tags: ["matriz-transposta", "tabelas", "interpretacao-dados", "matrizes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-008",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Balanço Nutricional e Combinação Linear de Dietas",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma nutricionista clínica precisa montar uma dieta hospitalar combinando duas rações líquidas nutritivas: Alimento X e Alimento Y. Cada 100 mL desses alimentos fornece proteínas e carboidratos conforme a matriz N = [[4, 2], [5, 10]], onde a primeira linha representa gramas de proteínas (4 g em X e 2 g em Y) e a segunda linha representa gramas de carboidratos (5 g em X e 10 g em Y). A nutricionista determinou que a refeição deve fornecer exatamente 16 g de proteínas e 50 g de carboidratos, correspondendo ao vetor meta Q = [[16], [50]].",
      source: "Nutrição Clínica Hospitalar e Modelagem Linear de Dietas, 2026."
    },
    prompt: "Sendo q_x e q_y os fatores multiplicadores (número de porções de 100 mL de cada alimento) que satisfazem a equação matricial N · [[q_x], [q_y]] = Q, os volumes ideais dos alimentos X e Y a serem ministrados ao paciente são, respectivamente,",
    options: [
      {
        id: "a",
        text: "100 mL de X e 600 mL de Y.",
        isCorrect: false,
        distractorRationale: "Testou q_x = 1 e q_y = 6, fornecendo 4(1) + 2(6) = 16 g de proteína, mas 5(1) + 10(6) = 65 g de carboidratos (meta era 50 g)."
      },
      {
        id: "b",
        text: "200 mL de X e 400 mL de Y.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O sistema é: (1) 4·q_x + 2·q_y = 16 e (2) 5·q_x + 10·q_y = 50. Da equação (1), dividindo por 2: 2·q_x + q_y = 8 ⇒ q_y = 8 - 2·q_x. Substituindo na equação (2): 5·q_x + 10(8 - 2·q_x) = 50 ⇒ 5·q_x + 80 - 20·q_x = 50 ⇒ -15·q_x = -30 ⇒ q_x = 2. Logo, q_y = 8 - 2(2) = 4. Como cada porção equivale a 100 mL, tem-se 200 mL de X e 400 mL de Y."
      },
      {
        id: "c",
        text: "300 mL de X e 200 mL de Y.",
        isCorrect: false,
        distractorRationale: "Testou q_x = 3 e q_y = 2, fornecendo 4(3) + 2(2) = 16 g de proteína, mas 5(3) + 10(2) = 35 g de carboidratos."
      },
      {
        id: "d",
        text: "400 mL de X e 100 mL de Y.",
        isCorrect: false,
        distractorRationale: "Inverteu a proporção dos nutrientes."
      },
      {
        id: "e",
        text: "250 mL de X e 350 mL de Y.",
        isCorrect: false,
        distractorRationale: "Média simples dos volumes sem resolver o sistema linear matricial."
      }
    ],
    detailedExplanation: {
      summary: "A equação matricial traduz um sistema linear 2x2 cuja solução fornece o número de porções dos alimentos X e Y.",
      stepByStep: [
        "Passo 1: Escrever as equações correspondentes ao produto matricial:",
        "4·q_x + 2·q_y = 16 (equação de proteínas)",
        "5·q_x + 10·q_y = 50 (equação de carboidratos)",
        "Passo 2: Resolver por substituição ou escalonamento:",
        "Multiplicando a primeira equação por 5: 20·q_x + 10·q_y = 80.",
        "Subtraindo a segunda equação: (20·q_x + 10·q_y) - (5·q_x + 10·q_y) = 80 - 50.",
        "15·q_x = 30 ⇒ q_x = 2.",
        "Substituindo em 4(2) + 2·q_y = 16 ⇒ 8 + 2·q_y = 16 ⇒ 2·q_y = 8 ⇒ q_y = 4.",
        "Passo 3: Como as quantidades estão em unidades de 100 mL:",
        "Volume de X = 2 × 100 mL = 200 mL.",
        "Volume de Y = 4 × 100 mL = 400 mL."
      ],
      coreConcept: "Sistemas lineares em formulações de misturas e dietas são resolvidos de forma compacta e exata através de representações matriciais.",
      trapWarning: "Lembre-se de converter o número de porções (q_x = 2 e q_y = 4) para o volume final em mililitros multiplicando pela base de 100 mL."
    },
    commonTraps: ["Achar que q_x = 2 significa 2 mL em vez de 2 porções de 100 mL"],
    tags: ["sistemas-lineares", "matrizes", "modelagem-dieta", "balanco-nutricional"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-009",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Propriedades Operatórias e Potência de Matrizes",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em modelagem computacional de dinâmica de sistemas ecológicos com duas populações predador-presa, as taxas de transição populacional de uma geração para a seguinte são dadas pela matriz diagonal T = [[3, 0], [0, 2]]. Quando o sistema evolui ao longo de n gerações, o operador de evolução é dado pela matriz potência T^n.",
      source: "Modelagem de Matrizes Diagonais em Ecologia Matemática, 2026."
    },
    prompt: "Após 4 gerações sucessivas de evolução do ecossistema, a matriz T⁴ que representa as taxas acumuladas do sistema é igual a",
    options: [
      {
        id: "a",
        text: "[[12, 0], [0, 8]].",
        isCorrect: false,
        distractorRationale: "Multiplicou os elementos da diagonal por 4 em vez de elevá-los à quarta potência."
      },
      {
        id: "b",
        text: "[[81, 0], [0, 16]].",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em qualquer matriz diagonal D = diag(d1, d2, ..., dn), a potência D^k é obtida simplesmente elevando os elementos da diagonal principal à potência k: D^k = diag(d1^k, d2^k, ..., dn^k). Assim, T⁴ = [[3⁴, 0], [0, 2⁴]] = [[81, 0], [0, 16]]."
      },
      {
        id: "c",
        text: "[[27, 0], [0, 8]].",
        isCorrect: false,
        distractorRationale: "Elevou ao cubo (T³) em vez de elevar à quarta potência."
      },
      {
        id: "d",
        text: "[[81, 16], [16, 81]].",
        isCorrect: false,
        distractorRationale: "Preencheu os elementos nulos fora da diagonal principal com valores."
      },
      {
        id: "e",
        text: "[[7, 0], [0, 6]].",
        isCorrect: false,
        distractorRationale: "Somou 4 aos elementos em vez de calcular a potência."
      }
    ],
    detailedExplanation: {
      summary: "A potência de uma matriz diagonal é uma matriz diagonal cujos elementos são as respectivas potências dos elementos originais.",
      stepByStep: [
        "Passo 1: Notar que a matriz T = [[3, 0], [0, 2]] é estritamente diagonal.",
        "Passo 2: Calcular T² = [[3, 0], [0, 2]] · [[3, 0], [0, 2]] = [[9, 0], [0, 4]].",
        "Passo 3: Calcular T⁴ = (T²)² = [[9, 0], [0, 4]] · [[9, 0], [0, 4]] = [[81, 0], [0, 16]].",
        "Passo 4: Confirmar a regra geral: se D é diagonal, (D^n)_ii = (D_ii)^n."
      ],
      coreConcept: "Matrizes diagonais comutam e preservam a estrutura sob potenciação, multiplicando diretamente seus autovalores diagonais.",
      trapWarning: "Essa propriedade direta de potenciação termo a termo só vale para matrizes diagonais, e NÃO para matrizes gerais."
    },
    commonTraps: ["Multiplicar por 4 em vez de calcular a potência 4"],
    tags: ["matriz-diagonal", "potenciacao-matrizes", "algebra-linear", "propriedades"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-010",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Transformações Geométricas no Plano e Computação Gráfica",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um software de desenvolvimento de jogos digitais 2D, a rotação de um objeto no plano cartesiano em torno da origem (0, 0) por um ângulo anti-horário θ é efetuada multiplicando-se o vetor coluna de coordenadas [x, y]^T pela matriz de rotação R(θ):\n\nR(θ) = [\n  [cos θ, -sen θ],\n  [sen θ,  cos θ]\n]\n\nUm desenvolvedor precisa rotacionar o ponto P com coordenadas cartesianas P = [4, 0]^T por um ângulo anti-horário de θ = 90° (π/2 radianos).",
      source: "Computação Gráfica e Transformações Afins no Plano, 2026."
    },
    prompt: "Sabendo que cos 90° = 0 e sen 90° = 1, as novas coordenadas [x', y']^T do ponto após a rotação são",
    options: [
      {
        id: "a",
        text: "[4, 4]^T.",
        isCorrect: false,
        distractorRationale: "Somou as componentes originais com o raio."
      },
      {
        id: "b",
        text: "[-4, 0]^T.",
        isCorrect: false,
        distractorRationale: "Rotacionou 180° em vez de 90°."
      },
      {
        id: "c",
        text: "[0, 4]^T.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Substituindo cos 90° = 0 e sen 90° = 1 na matriz: R(90°) = [[0, -1], [1, 0]]. Multiplicando pelo vetor [4, 0]^T: x' = (0 × 4) + (-1 × 0) = 0; y' = (1 × 4) + (0 × 0) = 4. O novo ponto é [0, 4]^T, o que coincide exatamente com a rotação de 90° anti-horária de um ponto sobre o semi-eixo positivo x para o semi-eixo positivo y."
      },
      {
        id: "d",
        text: "[0, -4]^T.",
        isCorrect: false,
        distractorRationale: "Rotacionou 90° no sentido horário (ângulo de -90°)."
      },
      {
        id: "e",
        text: "[2, 2√3]^T.",
        isCorrect: false,
        distractorRationale: "Utilizou o ângulo de 60° em vez de 90°."
      }
    ],
    detailedExplanation: {
      summary: "A multiplicação pela matriz de rotação com θ = 90° mapeia o ponto (4, 0) sobre o eixo x no ponto (0, 4) sobre o eixo y.",
      stepByStep: [
        "Passo 1: Construir a matriz de rotação para θ = 90°:",
        "R(90°) = [[cos 90°, -sen 90°], [sen 90°, cos 90°]] = [[0, -1], [1, 0]].",
        "Passo 2: Efetuar o produto matricial pelo vetor original [4, 0]^T:",
        "[[x'], [y']] = [[0, -1], [1, 0]] · [[4], [0]].",
        "Passo 3: Calcular cada linha:",
        "x' = (0 × 4) + (-1 × 0) = 0 + 0 = 0.",
        "y' = (1 × 4) + (0 × 0) = 4 + 0 = 4.",
        "Passo 4: Portanto, o ponto resultante é [0, 4]^T."
      ],
      coreConcept: "Transformações lineares ortogonais como rotações puras preservam distâncias (comprimento do vetor = 4) e mudam apenas a direção do vetor.",
      trapWarning: "Atenção ao sinal negativo em -sen θ na primeira linha da matriz de rotação padrão anti-horária."
    },
    commonTraps: ["Confundir a rotação anti-horária com rotação horária"],
    tags: ["transformacao-linear", "rotacao", "computacao-grafica", "trigonometria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-011",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Propriedade dos Determinantes: Multiplicação por Escalar",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um experimento de física de partículas, uma matriz quadrada M de ordem 3x3 modela um tensor de tensões mecânicas, possuindo determinante não-nulo det(M) = 5. Em uma simulação de ampliação volumétrica isotrópica, todas as entradas da matriz foram duplicadas, gerando a nova matriz escalonada N = 2·M.",
      source: "Tensores e Propriedades de Determinantes em Mecânica dos Meios Contínuos, 2026."
    },
    prompt: "O valor do determinante da nova matriz N = 2·M é igual a",
    options: [
      {
        id: "a",
        text: "10.",
        isCorrect: false,
        distractorRationale: "Multiplicou det(M) por 2 (esquecendo que o fator 2 multiplica todas as 3 linhas da matriz de ordem 3)."
      },
      {
        id: "b",
        text: "20.",
        isCorrect: false,
        distractorRationale: "Multiplicou por 2² = 4 (como se a ordem da matriz fosse 2x2)."
      },
      {
        id: "c",
        text: "30.",
        isCorrect: false,
        distractorRationale: "Multiplicou 5 por 6."
      },
      {
        id: "d",
        text: "40.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pelo Teorema de Binet e propriedades fundamentais dos determinantes, se A é uma matriz quadrada de ordem n e k é um número real, então det(k·A) = k^n · det(A). Como a matriz possui ordem n = 3 e k = 2: det(2·M) = 2³ · det(M) = 8 · 5 = 40."
      },
      {
        id: "e",
        text: "80.",
        isCorrect: false,
        distractorRationale: "Elevou a 2⁴ = 16 em vez de 2³."
      }
    ],
    detailedExplanation: {
      summary: "Ao multiplicar uma matriz n×n por um escalar k, o determinante é multiplicado por k elevado à potência n.",
      stepByStep: [
        "Passo 1: Recordar a propriedade formal dos determinantes: det(k · A) = k^n · det(A), onde n é a ordem da matriz.",
        "Passo 2: Identificar os valores dados: ordem n = 3, escalar k = 2 e det(M) = 5.",
        "Passo 3: Calcular det(N) = 2³ · 5 = 8 · 5 = 40."
      ],
      coreConcept: "Como o determinante é uma forma multilinear alternada das n linhas da matriz, colocar um fator k em evidência de cada uma das n linhas gera o fator multiplicativo global k^n.",
      trapWarning: "O erro mais clássico do ENEM é achar que det(k·A) = k·det(A). Isso só é verdade se n = 1!"
    },
    commonTraps: ["Achar que det(2M) = 2 det(M)"],
    tags: ["propriedades-determinantes", "teorema-binet", "algebra-linear", "ordem-matriz"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-012",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Teorema de Binet para Matrizes Quadradas",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em sistemas de compressão de áudio digital, dois filtros matriciais sequenciais de mesma dimensão 3x3, representados pelas matrizes A e B, processam o sinal sonoro em cascata. O filtro combinado resultante é dado pelo produto matricial C = A · B. Testes laboratoriais comprovaram que det(A) = 4 e det(B) = -3.",
      source: "Processamento Digital de Sinais e Álgebra Matricial, 2026."
    },
    prompt: "Com base no Teorema de Binet, o determinante do filtro combinado C = A · B é igual a",
    options: [
      {
        id: "a",
        text: "1.",
        isCorrect: false,
        distractorRationale: "Somou os determinantes: 4 + (-3) = 1."
      },
      {
        id: "b",
        text: "-12.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Teorema de Binet afirma que para quaisquer matrizes quadradas A e B de mesma ordem, o determinante do produto é o produto dos determinantes: det(A · B) = det(A) · det(B). Assim: det(C) = 4 · (-3) = -12."
      },
      {
        id: "c",
        text: "-7.",
        isCorrect: false,
        distractorRationale: "Subtraiu os determinantes: -3 - 4 = -7."
      },
      {
        id: "d",
        text: "12.",
        isCorrect: false,
        distractorRationale: "Esqueceu o sinal negativo na multiplicação com -3."
      },
      {
        id: "e",
        text: "-1.",
        isCorrect: false,
        distractorRationale: "Errou a operação de multiplicação."
      }
    ],
    detailedExplanation: {
      summary: "Pelo Teorema de Binet, det(A · B) = det(A) · det(B).",
      stepByStep: [
        "Passo 1: Aplicar diretamente o Teorema de Binet para o produto de matrizes:",
        "det(C) = det(A · B) = det(A) × det(B).",
        "Passo 2: Substituir os valores numéricos fornecidos:",
        "det(C) = 4 × (-3) = -12."
      ],
      coreConcept: "O determinante preserva a estrutura multiplicativa: det(A · B) = det(A) · det(B).",
      trapWarning: "Não confunda o determinante do produto com o determinante da soma: det(A + B) em geral NÃO é igual a det(A) + det(B)."
    },
    commonTraps: ["Achar que det(AB) = det(A) + det(B)"],
    tags: ["teorema-binet", "determinantes", "produto-matrizes", "algebra-linear"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-013",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Determinante da Matriz Inversa",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em calibração de sensores inerciais de aeronaves não tripuladas (drones de monitoramento agrícola), uma matriz de calibração de rotação K de ordem 2x2 é invertível e apresenta det(K) = 8. Para corrigir as leituras brutas em tempo real, o computador de bordo emprega a matriz inversa K⁻¹.",
      source: "Engenharia Aeroespacial e Sensoriamento Agrícola, 2026."
    },
    prompt: "O determinante da matriz inversa de calibração, det(K⁻¹), equivale a",
    options: [
      {
        id: "a",
        text: "-8.",
        isCorrect: false,
        distractorRationale: "Trocou o sinal em vez de inverter a fração."
      },
      {
        id: "b",
        text: "1/8.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Como K · K⁻¹ = I (matriz identidade) e det(I) = 1, aplicando o Teorema de Binet temos: det(K) · det(K⁻¹) = det(I) = 1 ⇒ det(K⁻¹) = 1 / det(K). Como det(K) = 8, segue que det(K⁻¹) = 1/8 = 0,125."
      },
      {
        id: "c",
        text: "1/64.",
        isCorrect: false,
        distractorRationale: "Elevou 1/8 ao quadrado."
      },
      {
        id: "d",
        text: "0.",
        isCorrect: false,
        distractorRationale: "Confundiu com matriz singular não invertível."
      },
      {
        id: "e",
        text: "8.",
        isCorrect: false,
        distractorRationale: "Afirmou que o determinante da inversa é idêntico ao da original."
      }
    ],
    detailedExplanation: {
      summary: "O determinante da matriz inversa é o inverso multiplicativo do determinante da matriz original: det(A⁻¹) = 1 / det(A).",
      stepByStep: [
        "Passo 1: Pela definição de matriz inversa: K · K⁻¹ = I.",
        "Passo 2: Aplicar o determinante em ambos os lados: det(K · K⁻¹) = det(I).",
        "Passo 3: Pelo Teorema de Binet: det(K) · det(K⁻¹) = 1.",
        "Passo 4: Isolar det(K⁻¹): det(K⁻¹) = 1 / det(K) = 1 / 8."
      ],
      coreConcept: "det(A⁻¹) = 1 / det(A), o que demonstra matematicamente por que uma matriz só possui inversa se det(A) ≠ 0.",
      trapWarning: "Inverso em matrizes significa inverso multiplicativo fracionário (1/x), e não simétrico oposto (-x)."
    },
    commonTraps: ["Confundir inverso com oposto simétrico de sinal"],
    tags: ["matriz-inversa", "determinantes", "propriedades", "teorema-binet"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-014",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Matrizes Simétricas e Assimetria de Informações",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em estudos de sociometria escolar, uma matriz quadrada S de dimensão 3x3 registra as escolhas mútuas de amizade entre três estudantes (1, 2 e 3). Uma matriz é classificada como simétrica quando é idêntica à sua transposta (S = S^T), o que significa que o sentimento ou interação é sempre recíproco entre quaisquer dois membros (s_ij = s_ji):\n\nS = [\n  [1,   x,  3],\n  [4,   2,  y],\n  [3,  -1,  5]\n]",
      source: "Sociometria Escolar e Álgebra de Relações Interpessoais, 2026."
    },
    prompt: "Para que a matriz de interações sociométricas S seja rigorosamente simétrica, os valores das variáveis x e y devem ser, respectivamente,",
    options: [
      {
        id: "a",
        text: "x = 4 e y = -1.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para que S seja simétrica, devemos ter s_ij = s_ji para todos os índices. Assim: s_12 = s_21 ⇒ x = 4; s_23 = s_32 ⇒ y = -1; e s_13 = s_31 = 3 já é satisfeito. Portanto, x = 4 e y = -1."
      },
      {
        id: "b",
        text: "x = -1 e y = 4.",
        isCorrect: false,
        distractorRationale: "Inverteu os valores de x e y."
      },
      {
        id: "c",
        text: "x = 3 e y = 2.",
        isCorrect: false,
        distractorRationale: "Comparou com elementos da diagonal principal."
      },
      {
        id: "d",
        text: "x = 4 e y = 1.",
        isCorrect: false,
        distractorRationale: "Errou o sinal de y, esquecendo que s_32 = -1."
      },
      {
        id: "e",
        text: "x = -4 e y = 1.",
        isCorrect: false,
        distractorRationale: "Confundiu matriz simétrica com matriz antissimétrica."
      }
    ],
    detailedExplanation: {
      summary: "Em uma matriz simétrica, os elementos espelhados pela diagonal principal são estritamente iguais: s_12 = s_21 e s_23 = s_32.",
      stepByStep: [
        "Passo 1: Escrever a condição de matriz simétrica: S = S^T, ou seja, s_ij = s_ji para todo i e j.",
        "Passo 2: Comparar os elementos fora da diagonal principal:",
        "• Elemento (1, 2) e elemento (2, 1): x = 4.",
        "• Elemento (2, 3) e elemento (3, 2): y = -1.",
        "• Elemento (1, 3) e elemento (3, 1): 3 = 3 (já confirmado).",
        "Passo 3: Concluir que x = 4 e y = -1."
      ],
      coreConcept: "A simetria matricial reflete a reciprocidade de relações em grafos não-direcionados e tabelas de distâncias mútuas.",
      trapWarning: "Em matrizes antissimétricas, teríamos s_ij = -s_ji e a diagonal principal seria nula. Não confunda simétrica com antissimétrica!"
    },
    commonTraps: ["Confundir matriz simétrica com antissimétrica"],
    tags: ["matriz-simetrica", "propriedades-matrizes", "transposicao", "sociometria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-015",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Traço de uma Matriz Quadrada",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em termodinâmica estatística aplicada a processos endotérmicos laboratoriais, o traço de uma matriz de condutividade térmica 3x3, denotado por tr(M), representa a soma dos elementos de sua diagonal principal (tr(M) = m_11 + m_22 + m_33). Considere a matriz de condutividade térmica M obtida em um ensaio com três ligas metálicas:\n\nM = [\n  [14,  -2,   5],\n  [ 3,   8,  -1],\n  [ 0,   6,  11]\n]",
      source: "Termodinâmica e Análise Matricial de Condução Térmica, 2026."
    },
    prompt: "O valor numérico do traço tr(M) dessa matriz de condutividade é igual a",
    options: [
      {
        id: "a",
        text: "22.",
        isCorrect: false,
        distractorRationale: "Somou apenas m_11 e m_22: 14 + 8 = 22."
      },
      {
        id: "b",
        text: "33.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O traço é a soma dos elementos da diagonal principal: tr(M) = 14 + 8 + 11 = 33."
      },
      {
        id: "c",
        text: "44.",
        isCorrect: false,
        distractorRationale: "Somou os elementos de uma coluna inteira mais um termo."
      },
      {
        id: "d",
        text: "16.",
        isCorrect: false,
        distractorRationale: "Calculou a soma dos elementos da diagonal secundária: 5 + 8 + 0 = 13 (e somou errado para 16)."
      },
      {
        id: "e",
        text: "0.",
        isCorrect: false,
        distractorRationale: "Confundiu traço com determinante nulo."
      }
    ],
    detailedExplanation: {
      summary: "O traço de uma matriz quadrada é a soma de todos os elementos dispostos na sua diagonal principal.",
      stepByStep: [
        "Passo 1: Identificar os elementos da diagonal principal da matriz M:",
        "m_11 = 14, m_22 = 8, m_33 = 11.",
        "Passo 2: Somar os elementos da diagonal principal:",
        "tr(M) = 14 + 8 + 11 = 33."
      ],
      coreConcept: "O traço de uma matriz quadrada é invariante sob mudança de base ortogonal e corresponde à soma dos seus autovalores.",
      trapWarning: "Diagonal principal é aquela que vai do canto superior esquerdo ao inferior direito; a outra é a diagonal secundária."
    },
    commonTraps: ["Somar a diagonal secundária em vez da principal"],
    tags: ["traco-matriz", "diagonal-principal", "algebra-linear", "definicoes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-016",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Matriz Identidade e Invariância Operacional",
    difficulty: 1,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em processamento de dados contábeis, a matriz identidade de ordem n, denotada por I_n, é a matriz quadrada que possui o número 1 em todos os elementos da diagonal principal e o número 0 em todos os demais elementos. Ela atua como elemento neutro da multiplicação matricial: para qualquer matriz quadrada A de mesma ordem, tem-se A · I_n = I_n · A = A.",
      source: "Fundamentos de Álgebra Linear Computacional, 2026."
    },
    prompt: "Dada a matriz A = [[5, -2], [3, 7]], o resultado da expressão matricial 3·A - 2·I₂ é dado por",
    options: [
      {
        id: "a",
        text: "[[13, -6], [9, 19]].",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 3·A = [[15, -6], [9, 21]] e 2·I₂ = [[2, 0], [0, 2]]. Subtraindo: 3·A - 2·I₂ = [[15 - 2, -6 - 0], [9 - 0, 21 - 2]] = [[13, -6], [9, 19]]."
      },
      {
        id: "b",
        text: "[[13, -8], [7, 19]].",
        isCorrect: false,
        distractorRationale: "Subtraiu 2 de todos os elementos da matriz 3·A, inclusive dos elementos fora da diagonal principal."
      },
      {
        id: "c",
        text: "[[15, -6], [9, 21]].",
        isCorrect: false,
        distractorRationale: "Calculou apenas 3·A, esquecendo de subtrair 2·I₂."
      },
      {
        id: "d",
        text: "[[10, -4], [6, 14]].",
        isCorrect: false,
        distractorRationale: "Multiplicou por 2 em vez de 3."
      },
      {
        id: "e",
        text: "[[1, 0], [0, 1]].",
        isCorrect: false,
        distractorRationale: "Confundiu o resultado com a própria matriz identidade."
      }
    ],
    detailedExplanation: {
      summary: "A multiplicação escalar afeta todos os termos; ao subtrair 2·I₂, subtrai-se 2 apenas dos termos da diagonal principal.",
      stepByStep: [
        "Passo 1: Calcular 3·A:",
        "3 · [[5, -2], [3, 7]] = [[15, -6], [9, 21]].",
        "Passo 2: Construir 2·I₂:",
        "2 · [[1, 0], [0, 1]] = [[2, 0], [0, 2]].",
        "Passo 3: Efetuar a subtração termo a termo:",
        "[[15 - 2, -6 - 0], [9 - 0, 21 - 2]] = [[13, -6], [9, 19]]."
      ],
      coreConcept: "A matriz identidade possui zeros fora da diagonal principal, portanto k·I_n altera apenas a diagonal principal na soma ou subtração matricial.",
      trapWarning: "Subtrair k·I não é subtrair k de todas as entradas da matriz; subtrai-se k apenas na diagonal principal."
    },
    commonTraps: ["Subtrair 2 de todas as entradas da matriz em vez de subtrair apenas da diagonal principal"],
    tags: ["matriz-identidade", "operacoes-matriciais", "escalar", "algebra-linear"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-017",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Determinante Triangular e Teorema de Laplace",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em algoritmos de otimização de fluxo de energia elétrica em subestações de alta tensão, as matrizes de admitância são frequentemente escalonadas na forma triangular superior (onde todas as entradas abaixo da diagonal principal são estritamente nulas):\n\nT = [\n  [4,  7, -3],\n  [0, -2,  5],\n  [0,  0,  6]\n]\n\nNa álgebra linear, o determinante de qualquer matriz triangular (superior ou inferior) possui uma propriedade de simplificação direta.",
      source: "Sistemas de Potência e Álgebra Matricial Computacional, 2026."
    },
    prompt: "O determinante da matriz triangular de admitância T é dado por",
    options: [
      {
        id: "a",
        text: "-48.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O determinante de qualquer matriz triangular é simplesmente o produto de todos os elementos da sua diagonal principal: det(T) = t_11 · t_22 · t_33 = 4 · (-2) · 6 = -48."
      },
      {
        id: "b",
        text: "48.",
        isCorrect: false,
        distractorRationale: "Esqueceu o sinal negativo do elemento central (-2)."
      },
      {
        id: "c",
        text: "8.",
        isCorrect: false,
        distractorRationale: "Somou os elementos da diagonal: 4 + (-2) + 6 = 8 (calculou o traço em vez do determinante)."
      },
      {
        id: "d",
        text: "0.",
        isCorrect: false,
        distractorRationale: "Afirmou que o determinante é zero devido à presença de zeros abaixo da diagonal."
      },
      {
        id: "e",
        text: "-24.",
        isCorrect: false,
        distractorRationale: "Errou a multiplicação: 4 × (-2) = -8; -8 × 6 = -48 (calculou -24)."
      }
    ],
    detailedExplanation: {
      summary: "Em qualquer matriz triangular, o determinante é igual ao produto dos elementos de sua diagonal principal.",
      stepByStep: [
        "Passo 1: Observar que a matriz T possui todos os elementos abaixo da diagonal principal iguais a zero, sendo portanto uma matriz triangular superior.",
        "Passo 2: Pelo Teorema de Laplace expandido sucessivamente pela primeira coluna:",
        "det(T) = 4 · det([[ -2, 5 ], [ 0, 6 ]]) = 4 · [(-2)(6) - (0)(5)] = 4 · (-12) = -48.",
        "Passo 3: Generalizar a propriedade: det(T) = 4 × (-2) × 6 = -48."
      ],
      coreConcept: "O determinante de uma matriz triangular é o produto de seus pivôs da diagonal principal.",
      trapWarning: "Cuidado para não confundir o cálculo do traço (soma da diagonal: 8) com o determinante (produto da diagonal: -48)."
    },
    commonTraps: ["Somar os elementos da diagonal em vez de multiplicá-los"],
    tags: ["matriz-triangular", "determinantes", "laplace", "algebra-linear"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-018",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Condição de Alinhamento de Três Pontos",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em topografia agrícola com drones georreferenciados, três sensores de umidade do solo foram instalados nos pontos A(2, 5), B(4, 9) e C(m, 17) em um campo plano. Para que uma tubulação subterrânea de irrigação em linha reta possa atender os três sensores sem curvas, os pontos A, B e C devem ser rigorosamente colineares. A condição de colinearidade ocorre quando o determinante da matriz de coordenadas completada com coluna unitária é igual a zero:\n\ndet [\n  [2,  5, 1],\n  [4,  9, 1],\n  [m, 17, 1]\n] = 0",
      source: "Topografia Georreferenciada e Agricultura de Precisão, 2026."
    },
    prompt: "Para que os três sensores fiquem perfeitamente alinhados sobre a mesma tubulação reta, o valor da coordenada m deve ser igual a",
    options: [
      {
        id: "a",
        text: "6.",
        isCorrect: false,
        distractorRationale: "Para m = 6, o ponto estaria desalinhado da reta."
      },
      {
        id: "b",
        text: "7.",
        isCorrect: false,
        distractorRationale: "Testou m = 7 mas cometeu erro de cálculo."
      },
      {
        id: "c",
        text: "8.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Calculando o determinante por Sarrus: (2·9·1 + 5·1·m + 1·4·17) - (m·9·1 + 17·1·2 + 1·4·5) = 0 ⇒ (18 + 5m + 68) - (9m + 34 + 20) = 0 ⇒ (86 + 5m) - (9m + 54) = 0 ⇒ 32 - 4m = 0 ⇒ 4m = 32 ⇒ m = 8. Verificação analítica: o coeficiente angular da reta AB é (9 - 5)/(4 - 2) = 4/2 = 2. A reta é y - 5 = 2(x - 2) ⇒ y = 2x + 1. Para y = 17: 17 = 2m + 1 ⇒ 2m = 16 ⇒ m = 8."
      },
      {
        id: "d",
        text: "10.",
        isCorrect: false,
        distractorRationale: "Cometeu erro de sinal ao subtrair os termos da diagonal secundária."
      },
      {
        id: "e",
        text: "12.",
        isCorrect: false,
        distractorRationale: "Calculou incorretamente a razão das coordenadas."
      }
    ],
    detailedExplanation: {
      summary: "O determinante nulo expressa a área zero do triângulo imaginário, configurando colinearidade dos três pontos.",
      stepByStep: [
        "Passo 1: Montar a matriz M de coordenadas dos pontos A, B e C com coluna unitária:",
        "M = [[2, 5, 1], [4, 9, 1], [m, 17, 1]].",
        "Passo 2: Calcular o determinante:",
        "Termos principais: (2 × 9 × 1) + (5 × 1 × m) + (1 × 4 × 17) = 18 + 5m + 68 = 86 + 5m.",
        "Termos secundários: (1 × 9 × m) + (2 × 1 × 17) + (5 × 4 × 1) = 9m + 34 + 20 = 9m + 54.",
        "det(M) = (86 + 5m) - (9m + 54) = 32 - 4m.",
        "Passo 3: Igualar a zero para impor colinearidade: 32 - 4m = 0 ⇒ 4m = 32 ⇒ m = 8."
      ],
      coreConcept: "Três pontos no plano são colineares se, e somente se, o determinante de suas coordenadas homogêneas for nulo (área do triângulo formado = 0).",
      trapWarning: "Lembre-se de agrupar com cuidado os termos que contêm a incógnita m tanto na diagonal principal quanto na secundária."
    },
    commonTraps: ["Errar o agrupamento dos termos em m na diagonal secundária"],
    tags: ["colinearidade", "determinantes", "geometria-analitica", "sarrus"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-019",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Não-Comutatividade da Multiplicação de Matrizes",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois filtros de correção de cor em edição digital de vídeo são representados pelas matrizes 2x2:\n\nA = [[1, 2], [0, 1]]   e   B = [[2, 0], [1, 3]]\n\nUm editor novato supôs que a ordem em que os filtros são aplicados não alteraria a imagem final, acreditando na regra comutativa clássica da multiplicação de números reais (A · B = B · A).",
      source: "Computação Gráfica e Álgebra Matricial Aplicada, 2026."
    },
    prompt: "Ao calcular os dois produtos matriciais, o editor constatou que a multiplicação de matrizes em geral NÃO é comutativa. A diferença entre as matrizes resultantes, dada por D = A · B - B · A, é igual a",
    options: [
      {
        id: "a",
        text: "[[0, 0], [0, 0]].",
        isCorrect: false,
        distractorRationale: "Supôs erroneamente que as matrizes comutavam."
      },
      {
        id: "b",
        text: "[[2, 2], [-1, -2]].",
        isCorrect: false,
        distractorRationale: "Cometeu erro no elemento da linha 2 coluna 1, calculando 0 - 1 = -1 em vez de 1 - 1 = 0."
      },
      {
        id: "c",
        text: "[[2, 2], [0, -2]].",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Calculando A · B: Linha 1 = [1·2 + 2·1, 1·0 + 2·3] = [4, 6]; Linha 2 = [0·2 + 1·1, 0·0 + 1·3] = [1, 3], logo A·B = [[4, 6], [1, 3]]. Calculando B · A: Linha 1 = [2·1 + 0·0, 2·2 + 0·1] = [2, 4]; Linha 2 = [1·1 + 3·0, 1·2 + 3·1] = [1, 5], logo B·A = [[2, 4], [1, 5]]. Subtraindo: D = A·B - B·A = [[4 - 2, 6 - 4], [1 - 1, 3 - 5]] = [[2, 2], [0, -2]]."
      },
      {
        id: "d",
        text: "[[1, 3], [2, 4]].",
        isCorrect: false,
        distractorRationale: "Inverteu os termos das matrizes."
      },
      {
        id: "e",
        text: "[[3, 2], [1, 4]].",
        isCorrect: false,
        distractorRationale: "Somou as matrizes em vez de calcular o comutador."
      }
    ],
    detailedExplanation: {
      summary: "O comutador [A, B] = A·B - B·A mede o grau em que duas matrizes falham em comutar.",
      stepByStep: [
        "Passo 1: Calcular o produto A · B:",
        "A · B = [[1, 2], [0, 1]] · [[2, 0], [1, 3]]",
        "= [[ (1·2 + 2·1), (1·0 + 2·3) ], [ (0·2 + 1·1), (0·0 + 1·3) ]]",
        "= [[ 2 + 2, 0 + 6 ], [ 0 + 1, 0 + 3 ]]",
        "= [[ 4, 6 ], [ 1, 3 ]].",
        "Passo 2: Calcular o produto B · A:",
        "B · A = [[2, 0], [1, 3]] · [[1, 2], [0, 1]]",
        "= [[ (2·1 + 0·0), (2·2 + 0·1) ], [ (1·1 + 3·0), (1·2 + 3·1) ]]",
        "= [[ 2 + 0, 4 + 0 ], [ 1 + 0, 2 + 3 ]]",
        "= [[ 2, 4 ], [ 1, 5 ]].",
        "Passo 3: Efetuar a subtração matricial D = A · B - B · A:",
        "D = [[ 4 - 2, 6 - 4 ], [ 1 - 1, 3 - 5 ]] = [[ 2, 2 ], [ 0, -2 ]]."
      ],
      coreConcept: "A multiplicação de matrizes NÃO é comutativa em geral (A · B ≠ B · A). O resultado da ordem das operações lineares altera o estado final do sistema.",
      trapWarning: "Nunca assuma que A·B = B·A em matrizes a menos que uma delas seja a matriz identidade ou sejam simultaneamente diagonalizáveis."
    },
    commonTraps: ["Achar que matrizes sempre comutam como números reais"],
    tags: ["nao-comutatividade", "produto-matrizes", "comutador", "algebra-linear"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-020",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Matrizes de Probabilidade de Transição de Cadeia de Markov",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um estudo meteorológico regional, o clima diário de uma cidade é modelado por dois estados: Seco (S) ou Chuvoso (C). As probabilidades de transição climática de um dia para o dia seguinte são descritas pela matriz estocástica P = [[0,8, 0,2], [0,3, 0,7]], onde a Linha 1 indica as probabilidades se o dia atual for Seco (80% de chance de continuar Seco e 20% de virar Chuvoso) e a Linha 2 indica as probabilidades se o dia for Chuvoso (30% de virar Seco e 70% de continuar Chuvoso). No domingo, a previsão constatou 100% de probabilidade de tempo Seco, expressa pelo vetor estado inicial v_0 = [1, 0].",
      source: "Modelos Probabilísticos Estocásticos e Cadeias de Markov, 2026."
    },
    prompt: "Pela teoria das cadeias de Markov, a probabilidade do clima dois dias depois (na terça-feira), dada pela segunda componente do vetor estado v_2 = v_0 · P², é igual a",
    options: [
      {
        id: "a",
        text: "20%.",
        isCorrect: false,
        distractorRationale: "Essa é a probabilidade de chuva na segunda-feira (apenas 1 dia depois)."
      },
      {
        id: "b",
        text: "30%.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. No dia 1 (segunda-feira): v_1 = v_0 · P = [1, 0] · [[0,8, 0,2], [0,3, 0,7]] = [0,8, 0,2]. No dia 2 (terça-feira): v_2 = v_1 · P = [0,8, 0,2] · [[0,8, 0,2], [0,3, 0,7]]. A probabilidade de chuva é a segunda componente: (0,8 × 0,2) + (0,2 × 0,7) = 0,16 + 0,14 = 0,30 = 30%."
      },
      {
        id: "c",
        text: "40%.",
        isCorrect: false,
        distractorRationale: "Somou 0,2 + 0,2 = 0,4 sem ponderar pelas probabilidades de transição."
      },
      {
        id: "d",
        text: "50%.",
        isCorrect: false,
        distractorRationale: "Supôs igual probabilidade entre seco e chuvoso."
      },
      {
        id: "e",
        text: "70%.",
        isCorrect: false,
        distractorRationale: "Utilizou diretamente a probabilidade de permanência de chuva da matriz."
      }
    ],
    detailedExplanation: {
      summary: "A evolução da cadeia de Markov em dois passos corresponde à multiplicação sucessiva pelo vetor estado: v_2 = v_0 · P².",
      stepByStep: [
        "Passo 1: Encontrar a distribuição de probabilidade para a segunda-feira (1 passo):",
        "v_1 = [1, 0] · [[0,8, 0,2], [0,3, 0,7]] = [0,8; 0,2] (80% Seco, 20% Chuvoso).",
        "Passo 2: Encontrar a distribuição para a terça-feira (2 passos):",
        "v_2 = [0,8, 0,2] · [[0,8, 0,2], [0,3, 0,7]].",
        "Passo 3: Isolar a segunda componente (probabilidade de chuva na terça-feira):",
        "P(Chuva na terça) = (0,8 × 0,2) + (0,2 × 0,7) = 0,16 + 0,14 = 0,30.",
        "Passo 4: Converter para porcentagem: 0,30 = 30%."
      ],
      coreConcept: "Cadeias de Markov modelam processos estocásticos onde a probabilidade futura depende do estado presente multiplicado pela matriz de transição.",
      trapWarning: "Cuidado para calcular o segundo dia (terça-feira) e não parar no primeiro dia (segunda-feira = 20%)."
    },
    commonTraps: ["Parar na previsão do primeiro dia (20%)"],
    tags: ["cadeia-de-markov", "probabilidade", "matrizes-estocasticas", "modelagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-021",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Equação Matricial com Incógnita de Ordem 2",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um laboratório de metrologia dimensional, a relação de ajuste entre duas escalas de sensores de pressão é calibrada pela equação matricial:\n\n2·X + A = B\n\nonde A = [[3, -4], [6, 2]] e B = [[11, 2], [0, 10]], sendo X a matriz 2x2 que contém os fatores de correção dos sensores.",
      source: "Metrologia e Ajuste Matricial de Instrumentação, 2026."
    },
    prompt: "Isolando a matriz de calibração X na equação matricial, seus elementos são dados por",
    options: [
      {
        id: "a",
        text: "[[4, 3], [-3, 4]].",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Da equação: 2·X = B - A. Subtraindo B - A: [[11 - 3, 2 - (-4)], [0 - 6, 10 - 2]] = [[8, 6], [-6, 8]]. Dividindo cada termo por 2: X = [[8/2, 6/2], [-6/2, 8/2]] = [[4, 3], [-3, 4]]."
      },
      {
        id: "b",
        text: "[[8, 6], [-6, 8]].",
        isCorrect: false,
        distractorRationale: "Esqueceu de dividir os elementos por 2 (calculou 2·X em vez de X)."
      },
      {
        id: "c",
        text: "[[7, -1], [3, 6]].",
        isCorrect: false,
        distractorRationale: "Somou as matrizes A e B em vez de subtrair."
      },
      {
        id: "d",
        text: "[[4, -1], [-3, 4]].",
        isCorrect: false,
        distractorRationale: "Errou o jogo de sinais ao calcular 2 - (-4) = 6."
      },
      {
        id: "e",
        text: "[[14, -2], [6, 12]].",
        isCorrect: false,
        distractorRationale: "Somou e multiplicou por 2."
      }
    ],
    detailedExplanation: {
      summary: "A álgebra com equações matriciais obedece às regras lineares de transposição de termos e divisão por escalares não-nulos.",
      stepByStep: [
        "Passo 1: Isolar 2·X na equação: 2·X = B - A.",
        "Passo 2: Calcular a diferença matricial B - A elemento a elemento:",
        "B - A = [[ 11 - 3, 2 - (-4) ], [ 0 - 6, 10 - 2 ]]",
        "= [[ 8, 6 ], [ -6, 8 ]].",
        "Passo 3: Multiplicar por 1/2 para encontrar X:",
        "X = (1/2) · [[ 8, 6 ], [ -6, 8 ]] = [[ 4, 3 ], [ -3, 4 ]]."
      ],
      coreConcept: "Operações lineares de soma, subtração e multiplicação por escalar em matrizes operam diretamente sobre cada entrada correspondente.",
      trapWarning: "Atenção ao subtrair números negativos: 2 - (-4) = 2 + 4 = 6."
    },
    commonTraps: ["Errar o jogo de sinais em 2 - (-4)"],
    tags: ["equacao-matricial", "operacoes-com-matrizes", "algebra-linear", "metrologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-022",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Matrizes Nilpotentes e Absorção de Erros",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em circuitos lógicos de computadores quânticos teóricos, certas matrizes de atenuação N possuem a propriedade de serem nilpotentes de ordem 2, ou seja, satisfazem N² = O (onde O é a matriz nula de todos os elementos iguais a zero). Considere a matriz N de dimensão 2x2 com parâmetro p:\n\nN = [\n  [2,  p],\n  [1, -2]\n]",
      source: "Fundamentos de Álgebra Quântica e Circuitos Matriciais, 2026."
    },
    prompt: "Para que a matriz N seja estritamente nilpotente de ordem 2 (N² = O), o valor do parâmetro p deve ser igual a",
    options: [
      {
        id: "a",
        text: "-4.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Calculando N²: N · N = [[2, p], [1, -2]] · [[2, p], [1, -2]]. O elemento da linha 1 e coluna 1 é: (2 × 2) + (p × 1) = 4 + p. Para que a matriz seja nula, devemos ter 4 + p = 0 ⇒ p = -4. Verificando os outros termos com p = -4: elemento (1,2) = 2(-4) + (-4)(-2) = -8 + 8 = 0; elemento (2,1) = 1(2) + (-2)(1) = 2 - 2 = 0; elemento (2,2) = 1(-4) + (-2)(-2) = -4 + 4 = 0. Assim, N² = [[0, 0], [0, 0]] para p = -4."
      },
      {
        id: "b",
        text: "4.",
        isCorrect: false,
        distractorRationale: "Para p = 4, o elemento (1,1) seria 4 + 4 = 8 ≠ 0."
      },
      {
        id: "c",
        text: "-2.",
        isCorrect: false,
        distractorRationale: "Para p = -2, o elemento (1,1) seria 4 - 2 = 2 ≠ 0."
      },
      {
        id: "d",
        text: "2.",
        isCorrect: false,
        distractorRationale: "Testou o mesmo valor da diagonal principal."
      },
      {
        id: "e",
        text: "0.",
        isCorrect: false,
        distractorRationale: "Para p = 0, a matriz N² não seria nula."
      }
    ],
    detailedExplanation: {
      summary: "Uma matriz nilpotente de ordem 2 tem quadrado nulo. Igualando qualquer elemento do produto a zero descobre-se o parâmetro.",
      stepByStep: [
        "Passo 1: Escrever a expressão para o produto N² = N · N:",
        "[[2, p], [1, -2]] · [[2, p], [1, -2]]",
        "= [[ (2·2 + p·1), (2·p + p·(-2)) ], [ (1·2 + (-2)·1), (1·p + (-2)·(-2)) ]]",
        "= [[ 4 + p, 0 ], [ 0, p + 4 ]].",
        "Passo 2: Impor a condição N² = [[0, 0], [0, 0]]:",
        "4 + p = 0 ⇒ p = -4."
      ],
      coreConcept: "Matrizes nilpotentes de ordem k satisfazem N^k = O e possuem todos os seus autovalores e determinante nulos.",
      trapWarning: "Verifique se o mesmo valor de p anula simultaneamente todos os elementos da matriz resultante."
    },
    commonTraps: ["Esquecer de verificar se todos os elementos se anulam"],
    tags: ["matriz-nilpotente", "potencia-matriz", "algebra-linear", "equacoes-matriciais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-023",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Determinante de Matriz 3x3 pela Regra de Chió",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em análise estrutural de treliças metálicas em pontes rodoferroviárias, a estabilidade de nós de sustentação é testada calculando-se o determinante de flexibilidade estrutural da matriz E:\n\nE = [\n  [1,  3,  2],\n  [2,  7,  5],\n  [1,  4,  6]\n]",
      source: "Cálculo Estrutural e Engenharia Civil, 2026."
    },
    prompt: "O valor do determinante da matriz estrutural E é igual a",
    options: [
      {
        id: "a",
        text: "3.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Aplicando a Regra de Sarrus: Diagonais principais = (1 × 7 × 6) + (3 × 5 × 1) + (2 × 2 × 4) = 42 + 15 + 16 = 73. Diagonais secundárias = (2 × 7 × 1) + (3 × 2 × 6) + (1 × 5 × 4) = 14 + 36 + 20 = 70. det(E) = 73 - 70 = 3."
      },
      {
        id: "b",
        text: "-3.",
        isCorrect: false,
        distractorRationale: "Inverteu a ordem da subtração: 70 - 73 = -3."
      },
      {
        id: "c",
        text: "0.",
        isCorrect: false,
        distractorRationale: "Supôs erroneamente que a terceira linha era combinação linear das anteriores."
      },
      {
        id: "d",
        text: "5.",
        isCorrect: false,
        distractorRationale: "Errou a soma das diagonais principais."
      },
      {
        id: "e",
        text: "7.",
        isCorrect: false,
        distractorRationale: "Esqueceu de subtrair um dos produtos da diagonal secundária."
      }
    ],
    detailedExplanation: {
      summary: "Pela Regra de Sarrus, o determinante 3x3 é a diferença entre a soma dos produtos das diagonais principais e secundárias.",
      stepByStep: [
        "Passo 1: Repetir as duas primeiras colunas à direita da matriz:",
        "| 1  3  2 | 1  3",
        "| 2  7  5 | 2  7",
        "| 1  4  6 | 1  4",
        "Passo 2: Somar os produtos das diagonais principais (sentido descendente):",
        "(1 × 7 × 6) + (3 × 5 × 1) + (2 × 2 × 4) = 42 + 15 + 16 = 73.",
        "Passo 3: Somar os produtos das diagonais secundárias (sentido ascendente):",
        "(1 × 7 × 2) + (4 × 5 × 1) + (6 × 2 × 3) = 14 + 20 + 36 = 70.",
        "Passo 4: Subtrair secundárias de principais:",
        "det(E) = 73 - 70 = 3."
      ],
      coreConcept: "A Regra de Sarrus é o método padrão determinístico do ENEM para cálculo de determinantes de matrizes de ordem 3x3.",
      trapWarning: "Cuidado ao multiplicar: o sentido descendente tem sinal positivo; o sentido ascendente tem sinal negativo."
    },
    commonTraps: ["Inverter os sinais das diagonais principais e secundárias"],
    tags: ["sarrus", "determinantes", "ordem-3", "calculo-estrutural"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-024",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Matriz Ortogonal e Preservação de Normas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em robótica cirúrgica médica de alta precisão, os motores de microposicionamento utilizam matrizes ortogonais Q. Por definição, uma matriz quadrada é ortogonal quando sua transposta é igual à sua inversa (Q^T = Q⁻¹), o que equivale a Q · Q^T = I.",
      source: "Robótica Cirúrgica e Álgebra Linear de Precisão, 2026."
    },
    prompt: "Com base nas propriedades dos determinantes e no Teorema de Binet, os únicos valores possíveis para o determinante de qualquer matriz ortogonal Q são",
    options: [
      {
        id: "a",
        text: "apenas 0.",
        isCorrect: false,
        distractorRationale: "Matrizes com determinante 0 não possuem inversa, logo não podem ser ortogonais."
      },
      {
        id: "b",
        text: "+1 ou -1.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Da definição: Q · Q^T = I. Aplicando o determinante em ambos os lados: det(Q · Q^T) = det(I) = 1. Pelo Teorema de Binet: det(Q) · det(Q^T) = 1. Como o determinante de uma matriz é idêntico ao de sua transposta (det(Q^T) = det(Q)), temos: [det(Q)]² = 1 ⇒ det(Q) = ±1."
      },
      {
        id: "c",
        text: "apenas +1.",
        isCorrect: false,
        distractorRationale: "Esqueceu que matrizes de reflexão são ortogonais e possuem determinante -1."
      },
      {
        id: "d",
        text: "qualquer número real positivo.",
        isCorrect: false,
        distractorRationale: "Afirmação falsa, pois o quadrado do determinante deve ser estritamente igual a 1."
      },
      {
        id: "e",
        text: "0 ou 1.",
        isCorrect: false,
        distractorRationale: "Incluiu o zero indevidamente."
      }
    ],
    detailedExplanation: {
      summary: "Toda matriz ortogonal preserva distâncias e possui determinante igual a +1 (rotação) ou -1 (reflexão).",
      stepByStep: [
        "Passo 1: Tomar a equação definidora de matriz ortogonal: Q · Q^T = I.",
        "Passo 2: Aplicar a função determinante em ambos os lados:",
        "det(Q · Q^T) = det(I).",
        "Passo 3: Usar o Teorema de Binet: det(Q) · det(Q^T) = 1.",
        "Passo 4: Recordar que det(Q^T) = det(Q):",
        "det(Q) · det(Q) = 1 ⇒ [det(Q)]² = 1.",
        "Passo 5: Concluir que det(Q) = +1 ou det(Q) = -1."
      ],
      coreConcept: "Matrizes ortogonais representam isometrias (rotações quando det = +1 e reflexões quando det = -1), mantendo comprimentos e ângulos.",
      trapWarning: "Lembre-se de que reflexões no plano ou no espaço também são ortogonais e seu determinante é -1."
    },
    commonTraps: ["Achar que o determinante de matriz ortogonal só pode ser +1"],
    tags: ["matriz-ortogonal", "determinantes", "isometrias", "propriedades"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-MAT-025",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Matrizes e Tabelas",
    subtopic: "Sistemas Lineares e Matriz Aumentada Escalonada",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma central de triagem e reciclagem de resíduos sólidos urbanos, três tipos de materiais recicláveis (Plástico - x, Vidro - y e Metal - z, em toneladas) foram processados ao longo de três turnos de trabalho. O balanceamento das operações gerou a seguinte matriz aumentada escalonada no método de eliminação de Gauss-Jordan:\n\n[\n  [1, 0, 0 | 12],\n  [0, 1, 0 | 18],\n  [0, 0, 1 |  7]\n]\n\nonde cada linha representa, respectivamente, as toneladas de Plástico, Vidro e Metal recicladas.",
      source: "Gestão Ambiental de Resíduos Sólidos e Métodos Numéricos Lineares, 2026."
    },
    prompt: "Com base na matriz escalonada reduzida, a tonelagem total de materiais recicláveis processados pela central de triagem na soma dos três tipos foi de",
    options: [
      {
        id: "a",
        text: "30 toneladas.",
        isCorrect: false,
        distractorRationale: "Somou apenas plástico e vidro (12 + 18 = 30)."
      },
      {
        id: "b",
        text: "37 toneladas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A matriz escalonada reduzida fornece diretamente a solução única do sistema linear: x = 12 t (plástico), y = 18 t (vidro) e z = 7 t (metal). A tonelagem total é a soma das três quantidades: 12 + 18 + 7 = 37 toneladas."
      },
      {
        id: "c",
        text: "25 toneladas.",
        isCorrect: false,
        distractorRationale: "Somou 18 + 7 = 25."
      },
      {
        id: "d",
        text: "42 toneladas.",
        isCorrect: false,
        distractorRationale: "Errou a soma aritmética adicionando 5 toneladas."
      },
      {
        id: "e",
        text: "19 toneladas.",
        isCorrect: false,
        distractorRationale: "Somou 12 + 7 = 19."
      }
    ],
    detailedExplanation: {
      summary: "A matriz aumentada reduzida por Gauss-Jordan revela diretamente as soluções x, y e z na última coluna.",
      stepByStep: [
        "Passo 1: Interpretar a matriz aumentada de Gauss-Jordan:",
        "Linha 1: 1·x + 0·y + 0·z = 12 ⇒ x = 12 toneladas de plástico.",
        "Linha 2: 0·x + 1·y + 0·z = 18 ⇒ y = 18 toneladas de vidro.",
        "Linha 3: 0·x + 0·y + 1·z = 7 ⇒ z = 7 toneladas de metal.",
        "Passo 2: Somar as três quantidades para encontrar a tonelagem total:",
        "Total = 12 + 18 + 7 = 37 toneladas."
      ],
      coreConcept: "A eliminação de Gauss-Jordan transforma a matriz de coeficientes na matriz identidade, isolando diretamente as incógnitas na coluna dos termos independentes.",
      trapWarning: "Certifique-se de somar os três tipos de materiais conforme solicitado no enunciado."
    },
    commonTraps: ["Esquecer uma das variáveis na soma final"],
    tags: ["gauss-jordan", "matriz-aumentada", "sistemas-lineares", "reciclagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
