/**
 * MÓDULO #75: Estatística Descritiva Avançada, Medidas de Dispersão e Boxplot
 * Área: Matemática e suas Tecnologias
 * Quantidade de Questões: 25 questões canônicas inéditas de alto nível (MAT-DIS-001 a MAT-DIS-025)
 * Padrão: 5 alternativas (a-e), distractorRationales detalhados, TRI e gabarito canônico
 * Regra Estrita: ZERO termos de deslocamento geográfico ou correlatos.
 */

export const QUESTIONS_ESTATISTICA_DISPERSAO = [
  {
    id: "MAT-DIS-001",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Desvio Padrão e Regularidade",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um processo seletivo para estágio em um laboratório de análises clínicas, cinco candidatos realizaram cinco provas práticas de pipetagem volumétrica com pontuações de 0 a 100. Todos os cinco candidatos obtiveram exatamente a mesma média aritmética de 80,0 pontos. A banca examinadora estabeleceu no edital que o critério de desempate seria a maior regularidade de desempenho nas provas.",
      source: "Coordenação de Concursos e Avaliação Psicofísica, 2026."
    },
    prompt: "Para determinar o candidato mais regular e selecionar o vencedor do certame, a banca examinadora deve calcular e escolher o candidato que apresentar o(a):",
    options: [
      {
        id: "a",
        text: "maior valor de desvio padrão amostral entre suas notas.",
        isCorrect: false,
        distractorRationale: "Maior desvio padrão indica maior dispersão e instabilidade de notas, sendo o oposto de regularidade."
      },
      {
        id: "b",
        text: "menor desvio padrão entre suas pontuações, pois quanto mais próximo de zero for o desvio padrão, mais homogêneo e regular é o desempenho.",
        isCorrect: true,
        distractorRationale: "Correto. O desvio padrão mede a dispersão dos dados em torno da média aritmética. O candidato mais regular é aquele cujas notas variaram menos em relação à média, o que corresponde matematicamente ao menor desvio padrão (menor variância)."
      },
      {
        id: "c",
        text: "maior amplitude total entre a sua nota mais alta e a sua nota mais baixa.",
        isCorrect: false,
        distractorRationale: "Maior amplitude indica maior oscilação entre extremos, revelando inconsistência."
      },
      {
        id: "d",
        text: "moda com a maior frequência absoluta observada nas provas.",
        isCorrect: false,
        distractorRationale: "A moda não mede a homogeneidade de toda a distribuição de notas."
      },
      {
        id: "e",
        text: "maior variância quadrática em relação à nota de corte do laboratório.",
        isCorrect: false,
        distractorRationale: "Maior variância expressa maior heterogeneidade de resultados, contradizendo a regularidade."
      }
    ],
    detailedExplanation: {
      summary: "Em distribuições com a mesma média aritmética, a regularidade é medida pelo desvio padrão: menor desvio padrão significa maior homogeneidade.",
      stepByStep: [
        "1. A regularidade de um conjunto de dados quantitativos expressa o quão próximos os valores estão de sua média.",
        "2. As medidas estatísticas de dispersão são a variância (s²) e o desvio padrão (s = √s²).",
        "3. Um desvio padrão pequeno indica que a maioria das notas está concentrada muito perto de 80,0 pontos.",
        "4. Um desvio padrão grande indica notas muito dispersas (ex: alguns 100 e alguns 60).",
        "5. Portanto, o candidato mais regular é aquele com o menor desvio padrão."
      ],
      coreConcept: "No ENEM, 'mais regular' ou 'mais homogêneo' é sinônimo direto de MENOR desvio padrão / menor variância.",
      trapWarning: "Cuidado: candidatos desatentos confundem 'maior regularidade' com 'maior desvio'. Regularidade máxima = dispersão mínima!"
    },
    tags: ["estatistica", "desvio-padrao", "regularidade", "homogeneidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-DIS-002",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Cálculo da Variância e Desvio Padrão",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um farmacêutico aferiu a massa (em miligramas) do princípio ativo contido em uma amostra de 5 comprimidos de um determinado lote de analgésico: 48 mg, 50 mg, 50 mg, 50 mg e 52 mg.",
      source: "Controle de Qualidade em Indústria Farmacêutica, 2026."
    },
    prompt: "Com base nas medidas coletadas, a média aritmética (x̄) e a variância populacional (σ²) da massa de princípio ativo dessa amostra são, respectivamente:",
    options: [
      {
        id: "a",
        text: "50 mg e 0,8 mg².",
        isCorrect: false,
        distractorRationale: "Errou a divisão dos desvios quadráticos por 5."
      },
      {
        id: "b",
        text: "50 mg e 1,6 mg².",
        isCorrect: true,
        distractorRationale: "Correto. Média = (48 + 50 + 50 + 50 + 52) / 5 = 250 / 5 = 50 mg. Desvios em relação à média: (48-50) = -2; (50-50) = 0; (50-50) = 0; (50-50) = 0; (52-50) = +2. Quadrados dos desvios: (-2)² = 4; 0² = 0; 0² = 0; 0² = 0; (+2)² = 4. Variância = (4 + 0 + 0 + 0 + 4) / 5 = 8 / 5 = 1,6 mg²."
      },
      {
        id: "c",
        text: "50 mg e 1,26 mg².",
        isCorrect: false,
        distractorRationale: "Calculou a raiz quadrada da variância (desvio padrão ≈ 1,26 mg) em vez da variância solicitada."
      },
      {
        id: "d",
        text: "49 mg e 4,0 mg².",
        isCorrect: false,
        distractorRationale: "Calculou a média incorretamente e somou os desvios sem dividir pelo número de elementos."
      },
      {
        id: "e",
        text: "50 mg e 8,0 mg².",
        isCorrect: false,
        distractorRationale: "Esqueceu de dividir a soma dos quadrados dos desvios (8) pelo número de comprimidos (5)."
      }
    ],
    detailedExplanation: {
      summary: "A variância populacional é a média aritmética dos quadrados dos desvios em relação à média aritmética.",
      stepByStep: [
        "1. Calcular a média aritmética: x̄ = (48 + 50 + 50 + 50 + 52) / 5 = 250 / 5 = 50 mg.",
        "2. Calcular os desvios de cada elemento: (x_i - x̄):",
        "   - 48 - 50 = -2",
        "   - 50 - 50 = 0 (três vezes)",
        "   - 52 - 50 = +2",
        "3. Elevar os desvios ao quadrado: (-2)² = 4; 0² = 0; 2² = 4.",
        "4. Somar os quadrados dos desvios: 4 + 0 + 0 + 0 + 4 = 8.",
        "5. Calcular a média dos desvios quadráticos (variância): σ² = 8 / 5 = 1,6 mg²."
      ],
      coreConcept: "Variância: σ² = Σ(x_i - x̄)² / N. Sua unidade é o quadrado da unidade original dos dados.",
      trapWarning: "Cuidado com a unidade da variância: se a massa é em mg, a variância é em mg². O desvio padrão seria em mg (√1,6 ≈ 1,26 mg)."
    },
    tags: ["estatistica", "variancia", "desvio-padrao", "controle-de-qualidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-003",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Coeficiente de Variação (CV)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O Coeficiente de Variação (CV) é uma medida de dispersão relativa dada pela razão entre o desvio padrão (s) e a média aritmética (x̄), expressa em porcentagem: CV = (s / x̄) × 100%. Ele permite comparar a dispersão entre conjuntos de dados com médias diferentes ou unidades distintas. Em um laboratório clínico, duas máquinas automatizadas foram avaliadas:\n• Máquina A: média de dosagem = 20 mg; desvio padrão = 2,0 mg.\n• Máquina B: média de dosagem = 100 mg; desvio padrão = 5,0 mg.",
      source: "Validação de Instrumentos e Metrologia Laboratorial, 2026."
    },
    prompt: "Comparando a precisão relativa dos dois equipamentos por meio do Coeficiente de Variação, conclui-se que:",
    options: [
      {
        id: "a",
        text: "a Máquina A é relativamente mais precisa e homogênea que a Máquina B, pois apresenta menor desvio padrão absoluto.",
        isCorrect: false,
        distractorRationale: "O desvio padrão absoluto (2 < 5) engana porque a média de B é cinco vezes maior; a dispersão relativa de B é menor."
      },
      {
        id: "b",
        text: "a Máquina B é relativamente mais homogênea e precisa que a Máquina A, pois seu Coeficiente de Variação (5%) é a metade do de A (10%).",
        isCorrect: true,
        distractorRationale: "Correto. CV_A = (2,0 / 20) × 100% = 10%. CV_B = (5,0 / 100) × 100% = 5%. Como o CV de B é menor que o de A, a Máquina B possui menor dispersão relativa em torno de sua média, sendo relativamente mais precisa e consistente."
      },
      {
        id: "c",
        text: "ambas as máquinas possuem idêntica homogeneidade relativa de dosagem.",
        isCorrect: false,
        distractorRationale: "Os coeficientes de variação são diferentes (10% vs 5%)."
      },
      {
        id: "d",
        text: "a Máquina B é menos confiável porque seu desvio padrão absoluto é 2,5 vezes maior que o de A.",
        isCorrect: false,
        distractorRationale: "A avaliação de confiabilidade relativa entre grandezas de escalas diferentes exige o CV percentual."
      },
      {
        id: "e",
        text: "o Coeficiente de Variação da Máquina B é de 20%, o que invalida seu uso no laboratório.",
        isCorrect: false,
        distractorRationale: "O CV de B é 5 / 100 = 5%, e não 20%."
      }
    ],
    detailedExplanation: {
      summary: "O coeficiente de variação CV = (s / média) × 100% mede a dispersão relativa e permite comparar amostras com médias distintas.",
      stepByStep: [
        "1. Calcular o CV da Máquina A: CV_A = (2,0 mg / 20 mg) × 100% = 10%.",
        "2. Calcular o CV da Máquina B: CV_B = (5,0 mg / 100 mg) × 100% = 5%.",
        "3. Embora a Máquina B tenha maior desvio absoluto (5 > 2), seus erros representam apenas 5% de sua média, contra 10% da Máquina A.",
        "4. Portanto, a Máquina B é relativamente duas vezes mais homogênea e precisa que a Máquina A."
      ],
      coreConcept: "Para comparar conjuntos com ordens de grandeza distintas, use sempre o Coeficiente de Variação (CV = s / x̄).",
      trapWarning: "Nunca compare apenas o desvio padrão absoluto quando as médias dos conjuntos forem muito diferentes!"
    },
    tags: ["estatistica", "coeficiente-de-variacao", "dispersao-relativa", "metrologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-004",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Interpretação de Gráfico Boxplot",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O diagrama de caixa (Boxplot) resume uma distribuição estatística por meio de cinco medidas chave: o valor mínimo, o primeiro quartil (Q1), a mediana (Q2), o terceiro quartil (Q3) e o valor máximo. A amplitude interquartil (IQR = Q3 - Q1) representa a dispersão dos 50% centrais dos dados. Em um estudo sobre tempo de espera (em minutos) para atendimento em um hospital, obteve-se o seguinte Boxplot:\n• Mínimo = 10 min\n• Q1 = 25 min\n• Mediana (Q2) = 40 min\n• Q3 = 65 min\n• Máximo = 110 min",
      source: "Gestão Hospitalar e Estatística de Serviços de Saúde, 2026."
    },
    prompt: "Com base nesse Boxplot, a Amplitude Interquartil (IQR) e a porcentagem de pacientes atendidos com tempo de espera entre 25 min e 65 min são, respectivamente:",
    options: [
      {
        id: "a",
        text: "100 min e 100%.",
        isCorrect: false,
        distractorRationale: "Calculou a amplitude total (110 - 10 = 100 min) em vez da amplitude interquartil."
      },
      {
        id: "b",
        text: "40 min e 50%.",
        isCorrect: true,
        distractorRationale: "Correto. A amplitude interquartil é IQR = Q3 - Q1 = 65 min - 25 min = 40 min. Por definição estatística de quartis, o primeiro quartil (Q1) delimita 25% inferiores e o terceiro quartil (Q3) delimita 75% dos dados; portanto, exatamente 50% dos dados centrais situam-se entre Q1 e Q3 (entre 25 min e 65 min)."
      },
      {
        id: "c",
        text: "15 min e 25%.",
        isCorrect: false,
        distractorRationale: "Calculou Q2 - Q1 = 40 - 25 = 15 min."
      },
      {
        id: "d",
        text: "40 min e 75%.",
        isCorrect: false,
        distractorRationale: "Entre Q1 e Q3 concentram-se 50% dos dados, e não 75%."
      },
      {
        id: "e",
        text: "25 min e 50%.",
        isCorrect: false,
        distractorRationale: "Errou a subtração de 65 - 25."
      }
    ],
    detailedExplanation: {
      summary: "A caixa do Boxplot compreende exatamente os 50% centrais da distribuição, delimitados entre o 1º quartil (Q1) e o 3º quartil (Q3).",
      stepByStep: [
        "1. Amplitude interquartil: IQR = Q3 - Q1.",
        "2. Substituindo os valores: IQR = 65 min - 25 min = 40 minutos.",
        "3. Significado dos quartis:",
        "   - Abaixo de Q1 (25 min): 25% dos pacientes.",
        "   - Entre Q1 e Q2 (25 a 40 min): 25% dos pacientes.",
        "   - Entre Q2 e Q3 (40 a 65 min): 25% dos pacientes.",
        "   - Acima de Q3 (65 min): 25% dos pacientes.",
        "4. Entre Q1 e Q3 temos: 25% + 25% = 50% de todos os pacientes atendidos."
      ],
      coreConcept: "A largura da caixa no Boxplot é o IQR (Q3 - Q1) e contém sempre exatamente metade (50%) dos dados amostrais.",
      trapWarning: "A mediana (linha interna da caixa) divide a amostra em duas metades de 50%, mas não precisa estar no meio geométrico da caixa se a distribuição for assimétrica."
    },
    tags: ["estatistica", "boxplot", "quartis", "amplitude-interquartil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-005",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Critério de Outliers no Boxplot",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na análise exploratória de dados pelo método de John Tukey, um valor é considerado discrepante atípico (outlier superior) se ultrapassar o limite superior definido por: Limite Superior = Q3 + 1,5 × IQR, onde IQR = Q3 - Q1. Em uma pesquisa com os salários de uma clínica médica, determinou-se que o primeiro quartil é Q1 = R$ 4.000,00 e o terceiro quartil é Q3 = R$ 10.000,00.",
      source: "Estatística Aplicada às Ciências Sociais e da Saúde, 2026."
    },
    prompt: "De acordo com o critério de Tukey, o menor salário inteiro que será classificado formalmente como um outlier superior nessa clínica é:",
    options: [
      {
        id: "a",
        text: "R$ 15.001,00.",
        isCorrect: false,
        distractorRationale: "Calculou 10.000 + 5.000, esquecendo de multiplicar IQR por 1,5."
      },
      {
        id: "b",
        text: "R$ 19.001,00.",
        isCorrect: true,
        distractorRationale: "Correto. IQR = Q3 - Q1 = 10.000 - 4.000 = R$ 6.000,00. Limite Superior = Q3 + 1,5 × IQR = 10.000 + 1,5 × 6.000 = 10.000 + 9.000 = R$ 19.000,00. Qualquer salário estritamente superior a R$ 19.000,00 é um outlier. O menor valor inteiro é R$ 19.001,00."
      },
      {
        id: "c",
        text: "R$ 16.001,00.",
        isCorrect: false,
        distractorRationale: "Somou 10.000 + 6.000 sem multiplicar pelo fator 1,5."
      },
      {
        id: "d",
        text: "R$ 21.001,00.",
        isCorrect: false,
        distractorRationale: "Utilizou a mediana hipotética no lugar de Q3."
      },
      {
        id: "e",
        text: "R$ 25.001,00.",
        isCorrect: false,
        distractorRationale: "Aplicou o critério de outlier extremo (3,0 × IQR) em vez do outlier moderado padrão (1,5 × IQR)."
      }
    ],
    detailedExplanation: {
      summary: "Pelo critério de Tukey, outliers superiores são valores estritamente maiores que Q3 + 1,5 × (Q3 - Q1).",
      stepByStep: [
        "1. Amplitude interquartil: IQR = Q3 - Q1 = 10.000 - 4.000 = 6.000.",
        "2. Produto com o fator de barreira: 1,5 × IQR = 1,5 × 6.000 = 9.000.",
        "3. Limite superior de corte: Q3 + 1,5 × IQR = 10.000 + 9.000 = 19.000 reais.",
        "4. Como a definição de outlier exige valor maior que o limite superior (x > 19.000), o menor salário inteiro atípico é R$ 19.001,00."
      ],
      coreConcept: "A cerca superior de Tukey é dada por Q3 + 1,5 × IQR. Valores além dessa cerca são representados por pontos isolados no Boxplot.",
      trapWarning: "Lembre-se de somar 1,5 × IQR a Q3, e não a Q1 ou à mediana!"
    },
    tags: ["estatistica", "boxplot", "outliers", "criterio-tukey"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-006",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Impacto de Transformações Lineares no Desvio Padrão",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um hospital, a equipe médica monitorou a temperatura corporal (em graus Celsius, °C) de um grupo de pacientes em tratamento. A média aritmética obtida foi x̄ = 37,0 °C, com um desvio padrão s = 1,2 °C. O comitê de pesquisa decidiu converter todos os dados para a escala Fahrenheit (°F) utilizando a relação linear: F = 1,8 · C + 32.",
      source: "Bioestatística Aplicada a Ensaios Clínicos, 2026."
    },
    prompt: "Após a transformação de todos os dados para a escala Fahrenheit, a nova média aritmética (F̄) e o novo desvio padrão (s_F) do conjunto de temperaturas são:",
    options: [
      {
        id: "a",
        text: "98,6 °F e 1,2 °F.",
        isCorrect: false,
        distractorRationale: "Manteve o desvio padrão inalterado, esquecendo de multiplicá-lo pelo coeficiente 1,8."
      },
      {
        id: "b",
        text: "98,6 °F e 2,16 °F.",
        isCorrect: true,
        distractorRationale: "Correto. A nova média sofre tanto a multiplicação quanto a adição: F̄ = 1,8 × 37,0 + 32 = 66,6 + 32 = 98,6 °F. O desvio padrão é afetado APENAS pelo fator multiplicativo em módulo, pois somar uma constante não altera a distância entre os dados: s_F = 1,8 × s = 1,8 × 1,2 = 2,16 °F."
      },
      {
        id: "c",
        text: "98,6 °F e 34,16 °F.",
        isCorrect: false,
        distractorRationale: "Somou 32 ao desvio padrão (1,8 × 1,2 + 32 = 34,16), esquecendo que constantes aditivas não alteram a dispersão."
      },
      {
        id: "d",
        text: "66,6 °F e 2,16 °F.",
        isCorrect: false,
        distractorRationale: "Esqueceu de somar 32 na média aritmética."
      },
      {
        id: "e",
        text: "98,6 °F e 3,888 °F.",
        isCorrect: false,
        distractorRationale: "Elevou o desvio padrão ao quadrado como se fosse variância."
      }
    ],
    detailedExplanation: {
      summary: "Em uma transformação linear Y = a·X + b, a nova média é Ȳ = a·X̄ + b, mas o novo desvio padrão é s_Y = |a|·s_X (a constante aditiva b não altera a dispersão).",
      stepByStep: [
        "1. Para a média: F̄ = 1,8 · C̄ + 32 = 1,8 × 37,0 + 32 = 66,6 + 32 = 98,6 °F.",
        "2. Propriedade do desvio padrão: Somar uma constante 'b' desloca todos os pontos na mesma quantidade, mantendo as distâncias mútuas idênticas.",
        "3. Multiplicar por 'a' multiplica a distância entre todos os pontos por |a|.",
        "4. Novo desvio padrão: s_F = 1,8 × s_C = 1,8 × 1,2 = 2,16 °F.",
        "5. Conclusão: F̄ = 98,6 °F e s_F = 2,16 °F."
      ],
      coreConcept: "Somar uma constante altera a média, mas NÃO altera a variância nem o desvio padrão. Multiplicar altera ambos.",
      trapWarning: "Nunca some uma constante aditiva ao desvio padrão! s(X + k) = s(X)."
    },
    tags: ["estatistica", "transformacao-linear", "desvio-padrao", "propriedades-estatisticas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-007",
    area: "matematica",
    competence: 7,
    skill: 27,
    topic: "Estatística",
    subtopic: "Média Ponderada em Processo Seletivo",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No processo seletivo do SISU para o curso de Medicina em uma universidade federal, as notas dos candidatos no ENEM são submetidas aos seguintes pesos por área de conhecimento:\n• Ciências da Natureza: peso 4\n• Matemática: peso 3\n• Redação: peso 3\n• Linguagens: peso 1\n• Ciências Humanas: peso 1\nA candidata Beatriz obteve as seguintes pontuações: Natureza = 820; Matemática = 850; Redação = 960; Linguagens = 740; Humanas = 780.",
      source: "Termo de Adesão SISU e Edital de Acesso ao Ensino Superior, 2026."
    },
    prompt: "A nota final ponderada de Beatriz no processo seletivo é igual a:",
    options: [
      {
        id: "a",
        text: "830,0 pontos.",
        isCorrect: false,
        distractorRationale: "Calculou a média aritmética simples (820+850+960+740+780)/5 = 4.150 / 5 = 830,0, ignorando os pesos do edital."
      },
      {
        id: "b",
        text: "851,6 pontos.",
        isCorrect: false,
        distractorRationale: "Erro de cálculo na divisão da soma ponderada por 12 ou truncamento indevido."
      },
      {
        id: "c",
        text: "852,5 pontos.",
        isCorrect: true,
        distractorRationale: "Correto. Soma dos pesos = 4 + 3 + 3 + 1 + 1 = 12. Soma ponderada: (820 × 4) + (850 × 3) + (960 × 3) + (740 × 1) + (780 × 1) = 3.280 + 2.550 + 2.880 + 740 + 780 = 10.230 pontos. Média ponderada = 10.230 / 12 = 852,5 pontos."
      },
      {
        id: "d",
        text: "870,0 pontos.",
        isCorrect: false,
        distractorRationale: "Considerou apenas as três maiores notas dividindo pela soma de seus pesos."
      },
      {
        id: "e",
        text: "815,0 pontos.",
        isCorrect: false,
        distractorRationale: "Errou a divisão dividindo por 10 em vez de 12."
      }
    ],
    detailedExplanation: {
      summary: "A média ponderada é o somatório do produto de cada nota pelo respectivo peso dividido pela soma total dos pesos.",
      stepByStep: [
        "1. Identificar os produtos de cada nota pelo seu peso:",
        "   - Natureza: 820 × 4 = 3.280",
        "   - Matemática: 850 × 3 = 2.550",
        "   - Redação: 960 × 3 = 2.880",
        "   - Linguagens: 740 × 1 = 740",
        "   - Humanas: 780 × 1 = 780",
        "2. Somar os pontos ponderados: 3.280 + 2.550 + 2.880 + 740 + 780 = 10.230.",
        "3. Somar os pesos: 4 + 3 + 3 + 1 + 1 = 12.",
        "4. Dividir o total pela soma dos pesos: 10.230 / 12 = 852,5 pontos."
      ],
      coreConcept: "Média Ponderada = Σ(nota_i × peso_i) / Σ(peso_i).",
      trapWarning: "Nunca divida pelo número de disciplinas (5) quando houver pesos diferentes no edital!"
    },
    tags: ["estatistica", "media-ponderada", "sisu", "pesos-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-008",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Propriedade da Variância da Soma",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na montagem de próteses ortopédicas cirúrgicas de alta precisão, duas peças metálicas independentes A e B são acopladas em série. Sabe-se que o comprimento da peça A possui desvio padrão de 0,3 mm e o comprimento da peça B possui desvio padrão de 0,4 mm. Suponha que as variações dimensionais das duas peças são variáveis aleatórias estatisticamente independentes.",
      source: "Engenharia Biomédica e Controle Metrológico, 2026."
    },
    prompt: "O desvio padrão do comprimento total da prótese montada (peça A + peça B) é igual a:",
    options: [
      {
        id: "a",
        text: "0,7 mm.",
        isCorrect: false,
        distractorRationale: "Somou diretamente os desvios padrão (0,3 + 0,4 = 0,7), o que viola o teorema fundamental de propagação de incertezas."
      },
      {
        id: "b",
        text: "0,5 mm.",
        isCorrect: true,
        distractorRationale: "Correto. Para variáveis independentes, as VARIÂNCIAS somam-se: Var(A + B) = Var(A) + Var(B). Var(A) = 0,3² = 0,09; Var(B) = 0,4² = 0,16. Var(A + B) = 0,09 + 0,16 = 0,25 mm². O desvio padrão resultante é a raiz quadrada da variância combinada: s = √0,25 = 0,5 mm."
      },
      {
        id: "c",
        text: "0,35 mm.",
        isCorrect: false,
        distractorRationale: "Calculou a média aritmética dos desvios padrão (0,3 + 0,4)/2 = 0,35."
      },
      {
        id: "d",
        text: "0,1 mm.",
        isCorrect: false,
        distractorRationale: "Subtraiu os desvios padrão (0,4 - 0,3 = 0,1)."
      },
      {
        id: "e",
        text: "0,25 mm.",
        isCorrect: false,
        distractorRationale: "Calculou a variância resultante (0,25 mm²), esquecendo de extrair a raiz quadrada para obter o desvio padrão."
      }
    ],
    detailedExplanation: {
      summary: "Para variáveis independentes, as variâncias se somam linearmente: Var(X + Y) = Var(X) + Var(Y). O desvio padrão é s = √(s_X² + s_Y²).",
      stepByStep: [
        "1. Propriedade fundamental de variáveis independentes: as variâncias são aditivas, mas os desvios padrão NÃO são aditivos.",
        "2. Calcular a variância da peça A: Var(A) = (0,3)² = 0,09 mm².",
        "3. Calcular a variância da peça B: Var(B) = (0,4)² = 0,16 mm².",
        "4. Variância total da soma: Var(A + B) = Var(A) + Var(B) = 0,09 + 0,16 = 0,25 mm².",
        "5. Desvio padrão da soma: s_(A+B) = √(0,25) = 0,5 mm (triângulo pitagórico 3-4-5)."
      ],
      coreConcept: "A incerteza e o desvio padrão de somas de variáveis independentes combinam-se quadraticamente: s = √(s₁² + s₂²).",
      trapWarning: "Nunca some desvios padrão diretamente! s(A + B) ≠ s(A) + s(B)."
    },
    tags: ["estatistica", "propagacao-de-incerteza", "variancia-da-soma", "variaveis-independentes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-009",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Assimetria e Comparação Média vs Mediana",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma pesquisa de renda mensal familiar em uma comunidade urbana, observou-se que a grande maioria das famílias recebe salários modestos entre 1 e 2 salários mínimos, mas um número muito pequeno de famílias de empresários de alta renda puxa a cauda da distribuição para a direita (distribuição assimétrica positiva à direita).",
      source: "Indicadores Socioeconômicos e Estatística Demográfica, 2026."
    },
    prompt: "Em distribuições de renda com forte assimetria positiva (cauda longa à direita), a relação de ordem correta entre a Moda, a Mediana e a Média aritmética é:",
    options: [
      {
        id: "a",
        text: "Média < Mediana < Moda.",
        isCorrect: false,
        distractorRationale: "Essa relação é de assimetria negativa (cauda à esquerda)."
      },
      {
        id: "b",
        text: "Moda < Mediana < Média.",
        isCorrect: true,
        distractorRationale: "Correto. Valores extremos muito altos puxam fortemente a Média aritmética para cima (a média é sensível a outliers). A Mediana divide a população em 50% e sofre pouco efeito. A Moda situa-se no ponto de maior concentração de famílias de baixa renda. Logo: Moda < Mediana < Média."
      },
      {
        id: "c",
        text: "Média = Mediana = Moda.",
        isCorrect: false,
        distractorRationale: "Essa igualdade ocorre exclusivamente em distribuições perfeitamente simétricas (como a curva normal de Gauss)."
      },
      {
        id: "d",
        text: "Mediana < Moda < Média.",
        isCorrect: false,
        distractorRationale: "A moda fica abaixo da mediana em distribuições assimétricas à direita."
      },
      {
        id: "e",
        text: "Moda = Média < Mediana.",
        isCorrect: false,
        distractorRationale: "A média não se iguala à moda em assimetria pronunciada."
      }
    ],
    detailedExplanation: {
      summary: "Em distribuições com assimetria à direita, outliers elevados inflam a média: Moda < Mediana < Média.",
      stepByStep: [
        "1. A média aritmética é sensível a valores extremos e é deslocada na direção da cauda longa.",
        "2. Poucas rendas milionárias elevam a média, mesmo que 90% da população seja de baixa renda.",
        "3. A mediana é robusta e mantém-se no percentil 50%, representando melhor o cidadão típico.",
        "4. A moda marca o pico de densidade onde há mais pessoas concentradas.",
        "5. Portanto, em assimetria à direita: Moda < Mediana < Média."
      ],
      coreConcept: "A média é 'puxada' na direção da cauda da distribuição. Assimetria à direita ⇒ Média > Mediana.",
      trapWarning: "Para dados de renda ou patrimônio, a Mediana é sempre uma medida de tendência central mais representativa que a Média."
    },
    tags: ["estatistica", "assimetria", "media-mediana-moda", "renda"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-010",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Escore Padronizado Z",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O escore padronizado Z indica a quantos desvios padrão uma observação particular (x) situa-se acima ou abaixo da média (x̄) do seu grupo: Z = (x - x̄) / s. Um estudante de medicina prestou duas provas de matérias diferentes:\n• Prova de Farmacologia: média geral da turma = 70,0; desvio padrão = 5,0; nota do estudante = 80,0.\n• Prova de Anatomia: média geral da turma = 60,0; desvio padrão = 8,0; nota do estudante = 76,0.",
      source: "Avaliação Pedagógica e Escore Padronizado Z, 2026."
    },
    prompt: "Comparando o desempenho relativo do estudante em relação aos seus colegas de turma por meio do escore Z, conclui-se que o estudante teve:",
    options: [
      {
        id: "a",
        text: "desempenho relativo idêntico em ambas as provas (Z = 1,0).",
        isCorrect: false,
        distractorRationale: "Os escores Z são diferentes (2,0 vs 2,0? Vamos checar: 80-70=10, 10/5=2,0; 76-60=16, 16/8=2,0! Opa! 10/5 = 2,0 e 16/8 = 2,0! O escore Z é exatamente 2,0 em ambas!)."
      },
      {
        id: "b",
        text: "desempenho relativo idêntico em ambas as provas, pois em ambas obteve exatamente Z = +2,0 (ficando a dois desvios padrão acima da média da turma).",
        isCorrect: true,
        distractorRationale: "Correto. Farmacologia: Z = (80 - 70) / 5 = 10 / 5 = +2,0. Anatomia: Z = (76 - 60) / 8 = 16 / 8 = +2,0. Embora as notas brutas sejam diferentes (80 vs 76), em ambas as disciplinas o estudante situou-se exatamente 2 desvios padrão acima da média de sua turma, demonstrando rigorosamente a mesma posição relativa no ranking."
      },
      {
        id: "c",
        text: "melhor desempenho relativo em Farmacologia, pois sua nota bruta foi 4 pontos superior.",
        isCorrect: false,
        distractorRationale: "A nota bruta não mede o posicionamento relativo em distribuições com médias e desvios diferentes."
      },
      {
        id: "d",
        text: "melhor desempenho relativo em Anatomia, pois superou a média da turma por 16 pontos contra 10 em Farmacologia.",
        isCorrect: false,
        distractorRationale: "A superação absoluta de 16 pontos é ponderada pelo desvio maior (8), resultando no mesmo Z = 2,0."
      },
      {
        id: "e",
        text: "desempenho abaixo da média em Anatomia decorrente da dispersão excessiva dos colegas.",
        isCorrect: false,
        distractorRationale: "Sua nota 76 é muito superior à média 60 (Z = +2,0, muito acima da média)."
      }
    ],
    detailedExplanation: {
      summary: "O escore Z padroniza notas com escalas distintas: Z = (x - x̄) / s. Escores Z iguais indicam idêntica colocação relativa.",
      stepByStep: [
        "1. Calcular o escore Z em Farmacologia: Z_Farmaco = (80,0 - 70,0) / 5,0 = 10,0 / 5,0 = +2,0.",
        "2. Calcular o escore Z em Anatomia: Z_Anato = (76,0 - 60,0) / 8,0 = 16,0 / 8,0 = +2,0.",
        "3. Interpretação: em ambas as provas, o aluno ficou exatamente 2 desvios padrão acima da média geral.",
        "4. Em uma distribuição normal, Z = +2,0 coloca o candidato no percentil ~97,7% em ambas as disciplinas.",
        "5. Portanto, o desempenho relativo foi exatamente idêntico."
      ],
      coreConcept: "O escore Z permite comparar desempenhos em provas diferentes eliminando as discrepâncias de dificuldade e dispersão.",
      trapWarning: "Nunca compare notas brutas diretamente entre provas diferentes sem padronizar pelo desvio padrão."
    },
    tags: ["estatistica", "escore-z", "padronizacao", "posicao-relativa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-011",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Desvio Médio Absoluto (DMA)",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O Desvio Médio Absoluto (DMA) é uma medida linear de dispersão que calcula a média das distâncias absolutas de cada dado até a média aritmética: DMA = (1/n) · Σ |x_i - x̄|. Em um posto de saúde, a idade (em anos) de quatro crianças vacinadas contra o sarampo em uma manhã foi: 1 ano, 2 anos, 4 anos e 5 anos.",
      source: "Vigilância Epidemiológica e Estatística de Imunização, 2026."
    },
    prompt: "O Desvio Médio Absoluto (DMA) das idades dessas quatro crianças é igual a:",
    options: [
      {
        id: "a",
        text: "0,0 ano.",
        isCorrect: false,
        distractorRationale: "Somou os desvios com seus sinais algébricos (-2 + -1 + 1 + 2 = 0) sem aplicar o módulo."
      },
      {
        id: "b",
        text: "1,5 ano.",
        isCorrect: true,
        distractorRationale: "Correto. Média = (1 + 2 + 4 + 5) / 4 = 12 / 4 = 3,0 anos. Distâncias absolutas até a média: |1 - 3| = 2; |2 - 3| = 1; |4 - 3| = 1; |5 - 3| = 2. Soma das distâncias = 2 + 1 + 1 + 2 = 6. DMA = 6 / 4 = 1,5 ano."
      },
      {
        id: "c",
        text: "3,0 anos.",
        isCorrect: false,
        distractorRationale: "Esse é o valor da média aritmética das idades, e não do desvio médio."
      },
      {
        id: "d",
        text: "2,5 anos.",
        isCorrect: false,
        distractorRationale: "Calculou a variância quadrática em vez do desvio médio absoluto."
      },
      {
        id: "e",
        text: "6,0 anos.",
        isCorrect: false,
        distractorRationale: "Esqueceu de dividir a soma dos desvios absolutos (6) pelo total de elementos (4)."
      }
    ],
    detailedExplanation: {
      summary: "O DMA é a média das distâncias em módulo até a média: DMA = Σ|x_i - x̄| / n.",
      stepByStep: [
        "1. Calcular a média: x̄ = (1 + 2 + 4 + 5) / 4 = 12 / 4 = 3 anos.",
        "2. Calcular os desvios em módulo |x_i - 3|:",
        "   - |1 - 3| = 2",
        "   - |2 - 3| = 1",
        "   - |4 - 3| = 1",
        "   - |5 - 3| = 2",
        "3. Somar os desvios absolutos: 2 + 1 + 1 + 2 = 6.",
        "4. Dividir pelo total de observações: DMA = 6 / 4 = 1,5 ano."
      ],
      coreConcept: "A soma simples dos desvios sem módulo em torno da média é SEMPRE ZERO: Σ(x_i - x̄) = 0. O DMA usa módulos para contornar isso.",
      trapWarning: "Cuidado: se você não usar módulo, a soma de desvios dá zero!"
    },
    tags: ["estatistica", "desvio-medio-absoluto", "dispersao", "modulo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-012",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Regra Empírica 68-95-99,7 da Distribuição Normal",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em populações biológicas, variáveis biométricas contínuas como a estatura adulta frequentemente seguem uma Distribuição Normal de Gauss. Pela regra empírica 68-95-99,7: cerca de 68% dos dados situam-se no intervalo [x̄ - s, x̄ + s]; cerca de 95% situam-se em [x̄ - 2s, x̄ + 2s]; e cerca de 99,7% em [x̄ - 3s, x̄ + 3s]. Em um recrutamento militar de 10.000 jovens de 18 anos, a altura média foi de 175 cm, com desvio padrão de 5 cm.",
      source: "Antropometria e Distribuição Gaussiana de Populações, 2026."
    },
    prompt: "O número esperado de jovens desse grupo cuja estatura situa-se entre 165 cm e 185 cm é de aproximadamente:",
    options: [
      {
        id: "a",
        text: "5.000 jovens.",
        isCorrect: false,
        distractorRationale: "Representaria apenas a metade dos jovens sem considerar o intervalo de 2 desvios padrão."
      },
      {
        id: "b",
        text: "6.800 jovens.",
        isCorrect: false,
        distractorRationale: "Corresponde ao intervalo de apenas 1 desvio padrão (170 cm a 180 cm)."
      },
      {
        id: "c",
        text: "9.500 jovens.",
        isCorrect: true,
        distractorRationale: "Correto. O intervalo de 165 cm a 185 cm corresponde a [175 - 2×5, 175 + 2×5] = [x̄ - 2s, x̄ + 2s]. Na curva normal, esse intervalo abrange aproximadamente 95% da população total: 95% de 10.000 = 0,95 × 10.000 = 9.500 jovens."
      },
      {
        id: "d",
        text: "9.970 jovens.",
        isCorrect: false,
        distractorRationale: "Corresponde ao intervalo de 3 desvios padrão (160 cm a 190 cm)."
      },
      {
        id: "e",
        text: "8.000 jovens.",
        isCorrect: false,
        distractorRationale: "Estimativa arbitrária sem fundamentação na regra empírica de Gauss."
      }
    ],
    detailedExplanation: {
      summary: "Na distribuição normal, 95% dos dados concentram-se a até dois desvios padrão da média (x̄ ± 2s).",
      stepByStep: [
        "1. Identificar a média e o desvio padrão: x̄ = 175 cm e s = 5 cm.",
        "2. Analisar o intervalo fornecido: limite inferior = 165 cm (175 - 10 = x̄ - 2s); limite superior = 185 cm (175 + 10 = x̄ + 2s).",
        "3. Pela regra empírica de Gauss, a área sob a curva normal entre x̄ - 2s e x̄ + 2s é de aproximadamente 95,4% (adotado 95%).",
        "4. Número de indivíduos esperados: 10.000 × 0,95 = 9.500 jovens."
      ],
      coreConcept: "Regra 68-95-99,7: ±1s abrange 68%; ±2s abrange 95%; ±3s abrange 99,7% dos dados normais.",
      trapWarning: "Verifique sempre quantos desvios padrão cabem entre a média e os limites do intervalo."
    },
    tags: ["estatistica", "distribuicao-normal", "regra-68-95-997", "gauss"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-013",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Cálculo de Quartis e Mediana",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma amostra de 8 pacientes submetidos a uma cirurgia ortopédica, o tempo de internação pós-operatória (em dias) foi: 3, 4, 4, 5, 6, 8, 9 e 12 dias (dados já ordenados em rol crescente).",
      source: "Indicadores de Eficiência em Gestão Hospitalar, 2026."
    },
    prompt: "A mediana (Q2) e o primeiro quartil (Q1) do tempo de internação desses pacientes são, respectivamente:",
    options: [
      {
        id: "a",
        text: "5,5 dias e 4,0 dias.",
        isCorrect: true,
        distractorRationale: "Correto. Com n = 8 (par), a mediana Q2 é a média dos dois termos centrais (4º e 5º termos: 5 e 6): Q2 = (5 + 6)/2 = 5,5 dias. A metade inferior é formada pelos 4 primeiros termos: {3, 4, 4, 5}. O primeiro quartil Q1 é a mediana dessa metade inferior: Q1 = (4 + 4)/2 = 4,0 dias."
      },
      {
        id: "b",
        text: "5,0 dias e 3,5 dias.",
        isCorrect: false,
        distractorRationale: "Tomou o 4º termo diretamente como mediana sem fazer a média com o 5º termo."
      },
      {
        id: "c",
        text: "6,0 dias e 4,5 dias.",
        isCorrect: false,
        distractorRationale: "Tomou o 5º termo diretamente como mediana."
      },
      {
        id: "d",
        text: "5,5 dias e 8,5 dias.",
        isCorrect: false,
        distractorRationale: "Calculou o terceiro quartil Q3 = (8 + 9)/2 = 8,5 no lugar de Q1."
      },
      {
        id: "e",
        text: "6,4 dias e 4,0 dias.",
        isCorrect: false,
        distractorRationale: "Calculou a média aritmética total (51 / 8 = 6,375) no lugar da mediana."
      }
    ],
    detailedExplanation: {
      summary: "Em um rol com número par de termos, a mediana é a média dos termos centrais; o 1º quartil é a mediana da metade inferior.",
      stepByStep: [
        "1. Rol ordenado (n = 8): {3, 4, 4, 5, 6, 8, 9, 12}.",
        "2. Como n é par, os termos centrais são o 4º (valor 5) e o 5º (valor 6).",
        "3. Mediana (Q2) = (5 + 6) / 2 = 5,5 dias.",
        "4. Metade inferior dos dados: {3, 4, 4, 5}.",
        "5. Primeiro quartil (Q1): média dos termos centrais da metade inferior: (4 + 4) / 2 = 4,0 dias."
      ],
      coreConcept: "A mediana divide o conjunto em duas metades iguais; Q1 é a mediana da metade inferior e Q3 é a mediana da metade superior.",
      trapWarning: "Sempre certifique-se de que os dados estejam ordenados em rol antes de localizar mediana e quartis!"
    },
    tags: ["estatistica", "quartis", "mediana", "rol-ordenado"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-014",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Propriedade da Invariância da Variância por Translação",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Um professor aplicou uma prova de biologia e obteve como resultado de sua turma uma média de 6,0 pontos e um desvio padrão de 1,5 ponto. Para ajudar os alunos, o professor decidiu conceder um bônus de 1,0 ponto a todos os estudantes sem exceção (cada aluno teve sua nota aumentada em exatamente 1,0 ponto).",
      source: "Práticas Pedagógicas e Avaliação Educacional, 2026."
    },
    prompt: "Após a concessão do bônus linear de 1,0 ponto para todos, a nova média e o novo desvio padrão da turma passaram a ser, respectivamente:",
    options: [
      {
        id: "a",
        text: "7,0 pontos e 2,5 pontos.",
        isCorrect: false,
        distractorRationale: "Somou 1,0 ponto também ao desvio padrão, o que é um erro estatístico grave."
      },
      {
        id: "b",
        text: "7,0 pontos e 1,5 ponto.",
        isCorrect: true,
        distractorRationale: "Correto. Somar uma constante k a todos os dados translada a média na mesma quantidade (nova média = 6,0 + 1,0 = 7,0 pontos). Contudo, como a distância de cada nota em relação à nova média permanece exatamente a mesma ((x_i + 1) - (x̄ + 1) = x_i - x̄), o desvio padrão e a variância NÃO se alteram (permanece 1,5 ponto)."
      },
      {
        id: "c",
        text: "6,0 pontos e 1,5 ponto.",
        isCorrect: false,
        distractorRationale: "A média necessariamente sobe para 7,0 pontos."
      },
      {
        id: "d",
        text: "7,0 pontos e 0,5 ponto.",
        isCorrect: false,
        distractorRationale: "Subtraiu o bônus do desvio padrão arbitrariamente."
      },
      {
        id: "e",
        text: "6,0 pontos e 2,5 pontos.",
        isCorrect: false,
        distractorRationale: "Inverteu os efeitos nas medidas estatísticas."
      }
    ],
    detailedExplanation: {
      summary: "Somar uma constante a todos os elementos de uma amostra altera a média, mas mantém a variância e o desvio padrão inalterados.",
      stepByStep: [
        "1. Transformação nos dados: y_i = x_i + 1.",
        "2. Nova média: ȳ = x̄ + 1 = 6,0 + 1,0 = 7,0 pontos.",
        "3. Novo desvio de cada nota em relação à nova média: y_i - ȳ = (x_i + 1) - (x̄ + 1) = x_i - x̄.",
        "4. Como todos os desvios individuais são idênticos aos originais, a variância e o desvio padrão permanecem absolutamente os mesmos: s_y = s_x = 1,5 ponto."
      ],
      coreConcept: "A dispersão mede distâncias relativas entre elementos. Transladar todos os pontos em bloco preserva todas as distâncias mútuas.",
      trapWarning: "Pegadinha clássica do ENEM: somar uma constante NUNCA altera o desvio padrão!"
    },
    tags: ["estatistica", "translacao", "desvio-padrao", "propriedades"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-015",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Comparação de Médias Ponderadas e Regularidade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois atletas, Carlos e Daniel, disputaram a final de tiro esportivo com 4 séries de disparos cada. As pontuações obtidas foram:\n• Carlos: 8, 8, 9, 9\n• Daniel: 6, 8, 10, 10",
      source: "Confederação de Tiro Esportivo e Estatística de Rendimento, 2026."
    },
    prompt: "Analisando a pontuação média e o desvio padrão dos dois atiradores, conclui-se que:",
    options: [
      {
        id: "a",
        text: "Carlos possui média superior à de Daniel e maior desvio padrão.",
        isCorrect: false,
        distractorRationale: "Ambos possuem a mesma média aritmética (8,5 pontos)."
      },
      {
        id: "b",
        text: "ambos possuem a mesma média aritmética (8,5 pontos), mas Carlos foi mais regular porque apresentou menor desvio padrão.",
        isCorrect: true,
        distractorRationale: "Correto. Média de Carlos = (8+8+9+9)/4 = 34/4 = 8,5. Média de Daniel = (6+8+10+10)/4 = 34/4 = 8,5. Desvios de Carlos até 8,5: ±0,5 (quadrados = 0,25 cada; variância = 1/4 = 0,25; desvio = 0,5). Desvios de Daniel até 8,5: -2,5, -0,5, +1,5, +1,5 (quadrados = 6,25 + 0,25 + 2,25 + 2,25 = 11; variância = 2,75; desvio ≈ 1,66). Como o desvio de Carlos é muito menor (0,5 < 1,66), Carlos foi o atirador mais regular."
      },
      {
        id: "c",
        text: "Daniel foi mais regular porque obteve duas notas 10, o que confere maior estabilidade.",
        isCorrect: false,
        distractorRationale: "Daniel teve também uma nota 6, gerando maior oscilação e maior desvio padrão."
      },
      {
        id: "d",
        text: "Carlos obteve média 8,0 e Daniel média 9,0.",
        isCorrect: false,
        distractorRationale: "As médias são exatamente iguais a 8,5 pontos."
      },
      {
        id: "e",
        text: "ambos possuem exatamente a mesma variância e o mesmo desvio padrão.",
        isCorrect: false,
        distractorRationale: "A distribuição de Carlos é muito mais concentrada (variância 0,25 vs 2,75)."
      }
    ],
    detailedExplanation: {
      summary: "Com médias iguais (8,5), Carlos tem pontuações concentradas em 8 e 9 (s = 0,5), enquanto Daniel oscila de 6 a 10 (s ≈ 1,66).",
      stepByStep: [
        "1. Média de Carlos: (8 + 8 + 9 + 9) / 4 = 34 / 4 = 8,5 pontos.",
        "2. Média de Daniel: (6 + 8 + 10 + 10) / 4 = 34 / 4 = 8,5 pontos.",
        "3. Variância de Carlos: [(8 - 8,5)² + (8 - 8,5)² + (9 - 8,5)² + (9 - 8,5)²] / 4 = [0,25 + 0,25 + 0,25 + 0,25] / 4 = 0,25. Desvio = √0,25 = 0,5.",
        "4. Variância de Daniel: [(6 - 8,5)² + (8 - 8,5)² + (10 - 8,5)² + (10 - 8,5)²] / 4 = [6,25 + 0,25 + 2,25 + 2,25] / 4 = 11 / 4 = 2,75. Desvio = √2,75 ≈ 1,66.",
        "5. Conclusão: Carlos é o competidor mais homogêneo e regular."
      ],
      coreConcept: "A regularidade é inversamente proporcional ao desvio padrão.",
      trapWarning: "Notas máximas isoladas (como os 10 de Daniel) não garantem regularidade se houver notas baixas (como o 6) puxando a dispersão para cima."
    },
    tags: ["estatistica", "regularidade", "desvio-padrao", "comparacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-016",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Leitura de Histograma e Desvio Padrão Estimado",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Dois cursos preparatórios para vestibulares de medicina (Curso Alfa e Curso Beta) divulgaram os histogramas de notas obtidas por seus estudantes no simulado geral. O Curso Alfa apresentou uma distribuição em forma de sino estrita e muito pontiaguda, com quase todos os alunos agrupados entre 780 e 820 pontos em torno da média 800. Já o Curso Beta apresentou uma distribuição achatada e espalhada entre 600 e 1.000 pontos, mantendo a mesma média de 800 pontos.",
      source: "Avaliação Institucional e Métricas de Simulados, 2026."
    },
    prompt: "Com base nas formas dos histogramas, é correto afirmar que:",
    options: [
      {
        id: "a",
        text: "o Curso Alfa possui maior desvio padrão que o Curso Beta.",
        isCorrect: false,
        distractorRationale: "A curva pontiaguda indica baixa dispersão, portanto MENOR desvio padrão."
      },
      {
        id: "b",
        text: "o Curso Alfa apresenta menor desvio padrão que o Curso Beta, indicando maior homogeneidade no rendimento de seus alunos.",
        isCorrect: true,
        distractorRationale: "Correto. Quanto mais concentrado e pontiagudo for o histograma em torno da média (leptocúrtico), menor é o desvio padrão. O Curso Alfa concentra quase todos os alunos entre 780 e 820 pontos, enquanto o Curso Beta espalha-se de 600 a 1.000 (maior dispersão e maior desvio padrão)."
      },
      {
        id: "c",
        text: "ambos os cursos possuem exatamente a mesma variância estatística.",
        isCorrect: false,
        distractorRationale: "Distribuições com larguras tão discrepantes possuem variâncias marcadamente distintas."
      },
      {
        id: "d",
        text: "o Curso Beta não possui mediana definida por ter distribuição achatada.",
        isCorrect: false,
        distractorRationale: "Qualquer conjunto de dados ordenados possui mediana bem definida."
      },
      {
        id: "e",
        text: "o desvio padrão do Curso Alfa é negativo por estar muito concentrado.",
        isCorrect: false,
        distractorRationale: "O desvio padrão é uma raiz quadrada de variância positiva e NUNCA pode ser negativo (s >= 0)."
      }
    ],
    detailedExplanation: {
      summary: "Histogramas pontiagudos e estreitos indicam pequeno desvio padrão; histogramas largos e achatados indicam grande desvio padrão.",
      stepByStep: [
        "1. A dispersão reflete a largura visual da base da curva no histograma.",
        "2. Curso Alfa: notas variam de 780 a 820 (amplitude de apenas 40 pontos). Desvio padrão pequeno.",
        "3. Curso Beta: notas variam de 600 a 1.000 (amplitude de 400 pontos). Desvio padrão grande.",
        "4. Como a média de ambos é 800, o Curso Alfa é muito mais homogêneo e regular que o Curso Beta."
      ],
      coreConcept: "Visualmente, maior dispersão = curva mais larga e achatada. Menor dispersão = curva mais estreita e pontiaguda.",
      trapWarning: "Desvio padrão NUNCA é negativo. Ele é zero (se todos os dados forem idênticos) ou positivo."
    },
    tags: ["estatistica", "histograma", "curva-normal", "dispersao-visual"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-017",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Desvio Padrão Nulo",
    difficulty: 1,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Um pesquisador coletou os dados da dosagem de um reagente em 10 experimentos laboratoriais independentes e observou que a variância amostral do conjunto de medidas foi rigorosamente igual a zero (s² = 0).",
      source: "Cadernos de Estatística e Desenho Experimental, 2026."
    },
    prompt: "A única dedução matemática necessária e suficiente a partir do fato de a variância ser nula é que:",
    options: [
      {
        id: "a",
        text: "a média aritmética das dosagens é obrigatoriamente igual a zero.",
        isCorrect: false,
        distractorRationale: "A média pode ser qualquer valor real (ex: 50 mg)."
      },
      {
        id: "b",
        text: "todos os 10 experimentos registraram exatamente o mesmo valor numérico de dosagem.",
        isCorrect: true,
        distractorRationale: "Correto. Como a variância é a média da soma dos quadrados dos desvios Σ(x_i - x̄)², e como quadrados de números reais são sempre maiores ou iguais a zero, a soma só é nula se cada desvio individual for rigorosamente zero ((x_i - x̄) = 0 ⇒ x_i = x̄). Portanto, todos os dados são idênticos entre si."
      },
      {
        id: "c",
        text: "houve perda de 50% dos dados por erro de medição sistemática.",
        isCorrect: false,
        distractorRationale: "A variância zero decorre de dados perfeitamente constantes, e não de perda de amostras."
      },
      {
        id: "d",
        text: "a mediana é estritamente maior que a média aritmética.",
        isCorrect: false,
        distractorRationale: "Em dados constantes, média = mediana = moda = valor constante."
      },
      {
        id: "e",
        text: "o desvio padrão é indefinido no conjunto dos números reais.",
        isCorrect: false,
        distractorRationale: "O desvio padrão é perfeitamente definido: s = √0 = 0."
      }
    ],
    detailedExplanation: {
      summary: "Variância nula (s² = 0) ocorre se, e somente se, todos os elementos da amostra forem idênticos entre si.",
      stepByStep: [
        "1. Variância: s² = (1/n) · Σ(x_i - x̄)².",
        "2. Como (x_i - x̄)² >= 0 para todo x_i real, uma soma de termos não negativos só pode dar zero se todos os termos forem nulos.",
        "3. Logo, (x_i - x̄)² = 0 para todo i.",
        "4. Isso implica x_i = x̄ para todo elemento do conjunto.",
        "5. Conclusão: não há nenhuma dispersão; todas as medidas foram idênticas."
      ],
      coreConcept: "s = 0 ⇔ todos os dados são constantes e iguais à média.",
      trapWarning: "Desvio padrão zero não significa média zero; significa variação zero entre os dados."
    },
    tags: ["estatistica", "desvio-padrao-zero", "dados-constantes", "fundamentos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-018",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Sensibilidade a Outliers: Média vs Mediana",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o conjunto de cinco salários mensais (em reais) pagos em uma microempresa: R$ 2.000,00; R$ 2.000,00; R$ 2.500,00; R$ 3.000,00; e R$ 3.500,00. A média salarial original é de R$ 2.600,00 e a mediana é de R$ 2.500,00. No mês seguinte, o proprietário contrata um diretor executivo com salário de R$ 35.000,00, formando agora um conjunto de seis salários.",
      source: "Economia do Trabalho e Estatística de Salários, 2026."
    },
    prompt: "Com a inclusão desse novo salário discrepante (outlier), os novos valores da média salarial e da mediana são, respectivamente:",
    options: [
      {
        id: "a",
        text: "R$ 8.000,00 e R$ 2.750,00.",
        isCorrect: true,
        distractorRationale: "Correto. Nova soma dos salários = 2.000 + 2.000 + 2.500 + 3.000 + 3.500 + 35.000 = R$ 48.000,00. Nova média = 48.000 / 6 = R$ 8.000,00. O novo rol de 6 elementos é: {2.000, 2.000, 2.500, 3.000, 3.500, 35.000}. Os termos centrais são o 3º (2.500) e o 4º (3.000). Nova mediana = (2.500 + 3.000) / 2 = R$ 2.750,00. A média mais que triplicou, enquanto a mediana aumentou em apenas R$ 250,00."
      },
      {
        id: "b",
        text: "R$ 8.000,00 e R$ 8.000,00.",
        isCorrect: false,
        distractorRationale: "Supôs erroneamente que a mediana acompanha a média em caso de outlier."
      },
      {
        id: "c",
        text: "R$ 2.600,00 e R$ 2.500,00.",
        isCorrect: false,
        distractorRationale: "Manteve os valores originais ignorando o novo salário."
      },
      {
        id: "d",
        text: "R$ 9.600,00 e R$ 3.000,00.",
        isCorrect: false,
        distractorRationale: "Dividiu a soma por 5 em vez de 6."
      },
      {
        id: "e",
        text: "R$ 8.000,00 e R$ 3.500,00.",
        isCorrect: false,
        distractorRationale: "Errou a localização dos termos centrais da mediana no rol de 6 termos."
      }
    ],
    detailedExplanation: {
      summary: "A média é extremamente sensível a valores extremos (outliers), enquanto a mediana é resistente (robusta).",
      stepByStep: [
        "1. Novo conjunto com 6 salários: {2.000, 2.000, 2.500, 3.000, 3.500, 35.000}.",
        "2. Nova média: Σx / 6 = 48.000 / 6 = R$ 8.000,00.",
        "3. Como n = 6 (par), a mediana é a média entre o 3º termo (2.500) e o 4º termo (3.000):",
        "   Mediana = (2.500 + 3.000) / 2 = R$ 2.750,00.",
        "4. Conclusão: a média subiu de 2.600 para 8.000 (salto de +207%), enquanto a mediana subiu apenas 10% (de 2.500 para 2.750)."
      ],
      coreConcept: "A mediana é resistente a outliers; a média é vulnerável e sofre distorção severa na presença de extremos.",
      trapWarning: "Quando há outliers, a mediana representa a realidade do conjunto muito melhor que a média."
    },
    tags: ["estatistica", "outliers", "media-vs-mediana", "robustez"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-019",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Impacto da Multiplicação por Escalar no Desvio Padrão",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em virtude de um reajuste salarial anual geral por convenção coletiva, uma empresa concedeu um aumento salarial proporcional de 20% para todos os seus colaboradores (cada salário foi multiplicado pelo fator de reajuste 1,20). Antes do reajuste, o salário médio era de R$ 3.000,00 e o desvio padrão dos salários era de R$ 500,00.",
      source: "Recursos Humanos e Análise Salarial de Pessoal, 2026."
    },
    prompt: "Após a aplicação do aumento proporcional de 20%, o novo salário médio e o novo desvio padrão dos salários dessa empresa são, respectivamente:",
    options: [
      {
        id: "a",
        text: "R$ 3.600,00 e R$ 500,00.",
        isCorrect: false,
        distractorRationale: "Manteve o desvio padrão inalterado, esquecendo que o fator multiplicativo multiplica também o desvio padrão."
      },
      {
        id: "b",
        text: "R$ 3.600,00 e R$ 600,00.",
        isCorrect: true,
        distractorRationale: "Correto. Multiplicar todos os dados por uma constante c = 1,20 multiplica a média por c (nova média = 3.000 × 1,20 = R$ 3.600,00) e multiplica o desvio padrão por c (novo desvio = 500 × 1,20 = R$ 600,00)."
      },
      {
        id: "c",
        text: "R$ 3.600,00 e R$ 720,00.",
        isCorrect: false,
        distractorRationale: "Multiplicou o desvio por c² = 1,44 (o que ocorreria apenas com a variância: Var_nova = 1,44 × Var_antiga)."
      },
      {
        id: "d",
        text: "R$ 3.200,00 e R$ 520,00.",
        isCorrect: false,
        distractorRationale: "Somou 200 reais em vez de aplicar 20%."
      },
      {
        id: "e",
        text: "R$ 3.000,00 e R$ 600,00.",
        isCorrect: false,
        distractorRationale: "Manteve a média antiga sem o reajuste."
      }
    ],
    detailedExplanation: {
      summary: "Multiplicar todos os valores de uma amostra por uma constante c multiplica a média por c e o desvio padrão por |c| (a variância é multiplicada por c²).",
      stepByStep: [
        "1. Transformação proporcional: y_i = 1,20 · x_i.",
        "2. Nova média: ȳ = 1,20 · x̄ = 1,20 × 3.000 = R$ 3.600,00.",
        "3. Novo desvio padrão: s_y = |1,20| · s_x = 1,20 × 500 = R$ 600,00.",
        "4. Observação teórica: a variância nova seria multiplicada por (1,20)² = 1,44.",
        "5. Conclusão: Média = R$ 3.600,00 e Desvio Padrão = R$ 600,00."
      ],
      coreConcept: "Ao multiplicar por uma constante c: a média multiplica por c, o desvio multiplica por c, e a variância multiplica por c².",
      trapWarning: "Cuidado: somar constante NÃO muda o desvio; mas MULTIPLICAR por constante MULTIPLICA o desvio!"
    },
    tags: ["estatistica", "multiplicacao-por-escalar", "desvio-padrao", "variancia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-020",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Assimetria e Forma de Boxplot",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma análise de Boxplot para o tempo de sobrevida (em meses) de pacientes com determinada patologia, o gráfico apresentou as seguintes características visuais:\n• A linha da mediana (Q2) está muito próxima da borda esquerda da caixa (junto de Q1);\n• A distância entre a mediana e o terceiro quartil (Q3 - Q2) é muito maior que a distância entre o primeiro quartil e a mediana (Q2 - Q1);\n• O 'bigode' superior (haste direita) é muito longo e estende-se para valores elevados, com a presença de pontos isolados (outliers superiores).",
      source: "Epidemiologia Clínica e Análise de Sobrevida, 2026."
    },
    prompt: "A interpretação estatística correta sobre o formato da distribuição desse conjunto de dados é que ele apresenta:",
    options: [
      {
        id: "a",
        text: "simetria perfeita gaussiana com média estritamente igual à mediana.",
        isCorrect: false,
        distractorRationale: "Em simetria perfeita, a mediana divide a caixa ao meio e as hastes têm comprimentos iguais."
      },
      {
        id: "b",
        text: "forte assimetria positiva (à direita), com a média aritmética superior à mediana.",
        isCorrect: true,
        distractorRationale: "Correto. No Boxplot, quando a mediana está deslocada para a esquerda de Q1 e a haste direita é longa com outliers elevados, a distribuição possui cauda longa à direita (assimetria positiva). Nesses casos, os valores extremos altos puxam a média para cima, fazendo com que Média > Mediana."
      },
      {
        id: "c",
        text: "forte assimetria negativa (à esquerda), com a média aritmética inferior à mediana.",
        isCorrect: false,
        distractorRationale: "Na assimetria negativa a cauda longa estaria à esquerda do gráfico."
      },
      {
        id: "d",
        text: "desvio padrão nulo por concentração de dados ao redor de Q1.",
        isCorrect: false,
        distractorRationale: "A haste longa e a caixa indicam dispersão considerável; desvio zero teria caixa sem largura."
      },
      {
        id: "e",
        text: "ausência total de variabilidade entre os pacientes analisados.",
        isCorrect: false,
        distractorRationale: "Há variabilidade ampla documentada entre o mínimo e os outliers."
      }
    ],
    detailedExplanation: {
      summary: "Mediana próxima de Q1 com haste superior longa e outliers indica assimetria positiva à direita (Média > Mediana).",
      stepByStep: [
        "1. Analisar a caixa: (Q3 - Q2) >> (Q2 - Q1) indica que os dados da metade superior são muito mais dispersos.",
        "2. Analisar as hastes: haste direita muito mais longa que a esquerda confirma cauda estendida para valores altos.",
        "3. Outliers no topo consolidam o perfil de cauda longa à direita.",
        "4. Como a média é sensível a valores altos da cauda, temos: Média > Mediana.",
        "5. Classificação: Assimetria positiva (ou à direita)."
      ],
      coreConcept: "A haste longa no Boxplot aponta para o lado da cauda da distribuição (lado da assimetria).",
      trapWarning: "Haste direita longa = assimetria À DIREITA (positiva). Haste esquerda longa = assimetria À ESQUERDA (negativa)."
    },
    tags: ["estatistica", "boxplot", "assimetria-positiva", "forma-da-distribuicao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-021",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Desvio Padrão Amostral vs Populacional",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nos cálculos estatísticos, existe uma distinção sutil entre a variância populacional (σ²), que divide a soma dos quadrados dos desvios pelo número total de indivíduos da população (N), e a variância amostral (s²), que divide a soma por (n - 1) — conhecida como correção de Bessel.",
      source: "Inferência Estatística e Teoria da Amostragem, 2026."
    },
    prompt: "A justificativa matemática e teórica para a utilização do divisor (n - 1) no cálculo da variância de uma amostra é:",
    options: [
      {
        id: "a",
        text: "garantir que o valor numérico do desvio padrão seja sempre idêntico ao da média aritmética.",
        isCorrect: false,
        distractorRationale: "O desvio padrão não deve ser forçado a igualar a média."
      },
      {
        id: "b",
        text: "corrigir a subestimação sistemática da variância real da população, tornando a variância amostral um estimador não viesado (não tendencioso).",
        isCorrect: true,
        distractorRationale: "Correto. Como os desvios amostrais são calculados em relação à média da amostra (x̄) e não à verdadeira média populacional desconhecida (μ), a soma dos quadrados em relação a x̄ é sempre menor que em relação a μ. Dividir por (n - 1) compensa esse viés intrínseco, tornando s² um estimador não viesado da variância da população."
      },
      {
        id: "c",
        text: "impedir que a variância resulte em números irracionais.",
        isCorrect: false,
        distractorRationale: "Dividir por n - 1 não garante racionalidade em raízes quadradas subsequentes."
      },
      {
        id: "d",
        text: "eliminar a necessidade de elevar os desvios ao quadrado.",
        isCorrect: false,
        distractorRationale: "Os desvios continuam sendo elevados ao quadrado na fórmula."
      },
      {
        id: "e",
        text: "anular a influência de qualquer outlier que esteja presente na amostra.",
        isCorrect: false,
        distractorRationale: "A correção de Bessel não remove outliers da análise."
      }
    ],
    detailedExplanation: {
      summary: "A correção de Bessel divide por (n - 1) na variância amostral para eliminar o viés de subestimação da dispersão populacional.",
      stepByStep: [
        "1. Em amostras, a média populacional μ é desconhecida e substituída pela média amostral x̄.",
        "2. Os dados de uma amostra estão mais próximos de sua própria média x̄ do que da média da população inteira μ.",
        "3. Consequentemente, Σ(x_i - x̄)² tende a subestimar a dispersão real se dividida por n.",
        "4. Dividir por (n - 1) (graus de liberdade) eleva o quociente ligeiramente, corrigindo o viés.",
        "5. Isso faz com que a esperança matemática E[s²] seja exatamente igual a σ² (estimador não viesado)."
      ],
      coreConcept: "A divisão por (n - 1) na amostra fornece um estimador não tendencioso da dispersão populacional.",
      trapWarning: "Para populações inteiras completas, usa-se N; para amostras parciais, usa-se (n - 1)."
    },
    tags: ["estatistica", "correcao-de-bessel", "amostra-vs-populacao", "estimador-nao-viesado"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-022",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Desvio Padrão Ponderado de Mistura de Grupos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Duas turmas de enfermagem (Turma 1 com 20 alunos e Turma 2 com 30 alunos) realizaram a mesma prova de biossegurança. Ambas as turmas obtiveram a mesma nota média de 80,0 pontos. A Turma 1 apresentou desvio padrão de 4,0 pontos (variância = 16) e a Turma 2 apresentou desvio padrão de 6,0 pontos (variância = 36).",
      source: "Comissão Pedagógica de Graduação em Saúde, 2026."
    },
    prompt: "Ao unificar as duas turmas em um único grupo de 50 estudantes, o desvio padrão combinado da turma unificada é de aproximadamente:",
    options: [
      {
        id: "a",
        text: "5,0 pontos.",
        isCorrect: false,
        distractorRationale: "Calculou a média aritmética simples dos desvios (4 + 6)/2 = 5,0, ignorando o peso de cada turma e a combinação por variâncias."
      },
      {
        id: "b",
        text: "5,29 pontos.",
        isCorrect: true,
        distractorRationale: "Correto. Como as médias são idênticas (80,0), a variância combinada é a média ponderada das variâncias: Var = (20 × 16 + 30 × 36) / (20 + 30) = (320 + 1.080) / 50 = 1.400 / 50 = 28. O desvio padrão combinado é a raiz quadrada da variância: s = √28 ≈ 5,29 pontos."
      },
      {
        id: "c",
        text: "10,0 pontos.",
        isCorrect: false,
        distractorRationale: "Somou os desvios das duas turmas (4 + 6 = 10)."
      },
      {
        id: "d",
        text: "28,0 pontos.",
        isCorrect: false,
        distractorRationale: "Calculou a variância combinada (28), esquecendo de extrair a raiz quadrada para obter o desvio padrão."
      },
      {
        id: "e",
        text: "4,8 pontos.",
        isCorrect: false,
        distractorRationale: "Calculou média ponderada simples dos desvios em vez de calcular sobre as variâncias."
      }
    ],
    detailedExplanation: {
      summary: "Quando subgrupos têm a mesma média, a variância combinada é a média ponderada das variâncias de cada grupo.",
      stepByStep: [
        "1. Identificar tamanhos amostrais: n₁ = 20 e n₂ = 30; total = 50.",
        "2. Como as médias são iguais (x̄₁ = x̄₂ = 80,0), a variância total combinada não possui termo de dispersão entre grupos.",
        "3. Calcular as variâncias: Var₁ = 4² = 16; Var₂ = 6² = 36.",
        "4. Média ponderada das variâncias: Var_comb = (20 × 16 + 30 × 36) / 50 = (320 + 1.080) / 50 = 1.400 / 50 = 28.",
        "5. Desvio padrão combinado: s = √28 ≈ 5,29 pontos."
      ],
      coreConcept: "A dispersão de grupos combinados deve ser calculada através de suas variâncias ponderadas, nunca pela média direta dos desvios.",
      trapWarning: "A média direta de 4 e 6 dá 5,0, mas a ponderação correta pelas variâncias dá √28 ≈ 5,29!"
    },
    tags: ["estatistica", "desvio-combinado", "variancia-ponderada", "agrupamento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-023",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Desigualdade de Chebyshev",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A Desigualdade de Chebyshev estabelece que, para QUALQUER distribuição de dados com média x̄ e desvio padrão s (mesmo que não seja simétrica ou normal), a fração de dados contidos no intervalo [x̄ - k·s, x̄ + k·s] é de no mínimo (1 - 1/k²), para qualquer constante real k > 1. Em um lote de produção de bolsas de soro fisiológico, o volume médio é de 500 mL com desvio padrão de 10 mL.",
      source: "Controle Estatístico de Processos e Teoria de Probabilidades, 2026."
    },
    prompt: "Pelo Teorema de Chebyshev, a porcentagem MÍNIMA garantida de bolsas de soro cujo volume situa-se entre 470 mL e 530 mL é de:",
    options: [
      {
        id: "a",
        text: "68,0%.",
        isCorrect: false,
        distractorRationale: "Confundiu com a regra da distribuição normal empírica de 1 desvio padrão."
      },
      {
        id: "b",
        text: "88,9%.",
        isCorrect: true,
        distractorRationale: "Correto. O intervalo de 470 a 530 mL corresponde a [500 - 30, 500 + 30] = [500 - 3×10, 500 + 3×10], logo k = 3 desvios padrão. Pela desigualdade de Chebyshev, a proporção mínima de dados nesse intervalo é: 1 - 1/k² = 1 - 1/3² = 1 - 1/9 = 8/9 ≈ 0,8889 = 88,9%."
      },
      {
        id: "c",
        text: "75,0%.",
        isCorrect: false,
        distractorRationale: "Corresponde ao valor para k = 2 desvios padrão (1 - 1/4 = 75%)."
      },
      {
        id: "d",
        text: "95,0%.",
        isCorrect: false,
        distractorRationale: "Confundiu com o valor da distribuição normal para 2 desvios padrão."
      },
      {
        id: "e",
        text: "99,7%.",
        isCorrect: false,
        distractorRationale: "Confundiu com o valor da distribuição normal gaussiana para 3 desvios padrão."
      }
    ],
    detailedExplanation: {
      summary: "A Desigualdade de Chebyshev garante que pelo menos 1 - 1/k² dos dados estão a até k desvios padrão da média para qualquer distribuição.",
      stepByStep: [
        "1. Identificar média e desvio: x̄ = 500 mL e s = 10 mL.",
        "2. Determinar o número k de desvios padrão no intervalo [470, 530]:",
        "   - Distância da média até os extremos = 530 - 500 = 30 mL.",
        "   - k = 30 mL / 10 mL = 3 desvios padrão.",
        "3. Aplicar a fórmula de Chebyshev: Fração mínima = 1 - 1/k² = 1 - 1/3² = 1 - 1/9 = 8/9.",
        "4. Converter em porcentagem: 8/9 ≈ 0,8888... = 88,9% dos dados com garantia matemática absoluta."
      ],
      coreConcept: "Chebyshev independe da forma da distribuição: para k = 2, garante >= 75%; para k = 3, garante >= 88,9%.",
      trapWarning: "Chebyshev dá o limite MÍNIMO universal; a curva normal dá o valor exato aproximado quando a distribuição é gaussiana."
    },
    tags: ["estatistica", "desigualdade-de-chebyshev", "limites-probabilisticos", "dispersao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-024",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Análise Comparativa de Boxplots em Saúde Pública",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Secretaria Municipal de Saúde comparou os Boxplots da taxa diária de glicemia capilar (em mg/dL) de dois grupos de pacientes diabéticos sob regimes terapêuticos diferentes:\n• Grupo 1: Mediana = 110 mg/dL; Amplitude Interquartil (IQR) = 15 mg/dL; sem outliers.\n• Grupo 2: Mediana = 110 mg/dL; Amplitude Interquartil (IQR) = 65 mg/dL; presença de múltiplos outliers superiores acima de 250 mg/dL.",
      source: "Relatório de Eficácia Terapêutica em Diabetes Mellitus, 2026."
    },
    prompt: "Com base nas métricas dos Boxplots, a conclusão clínica e estatística correta sobre o controle metabólico dos dois grupos é que:",
    options: [
      {
        id: "a",
        text: "o Grupo 2 possui melhor controle glicêmico por apresentar maior dispersão e picos compensatórios.",
        isCorrect: false,
        distractorRationale: "Maior dispersão e picos elevados indicam descontrole metabólico severo."
      },
      {
        id: "b",
        text: "o Grupo 1 apresenta controle glicêmico significativamente superior, com menor variabilidade e maior estabilidade glicêmica ao longo dos dias.",
        isCorrect: true,
        distractorRationale: "Correto. Embora ambos tenham a mesma mediana (110 mg/dL), o Grupo 1 tem uma amplitude interquartil quatro vezes menor (15 vs 65) e nenhum outlier. Isso indica que os pacientes do Grupo 1 mantiveram seus níveis de glicose estáveis e homogêneos, o objetivo primordial do manejo do diabetes."
      },
      {
        id: "c",
        text: "os dois tratamentos possuem eficácia idêntica porque registraram exatamente a mesma mediana.",
        isCorrect: false,
        distractorRationale: "A mediana isolada não mede a estabilidade; a variabilidade (IQR) do Grupo 2 é muito maior e perigosa."
      },
      {
        id: "d",
        text: "a média glicêmica do Grupo 2 é garantidamente inferior a 110 mg/dL.",
        isCorrect: false,
        distractorRationale: "Com múltiplos outliers acima de 250 mg/dL, a média do Grupo 2 é certamente muito superior a 110 mg/dL."
      },
      {
        id: "e",
        text: "o Grupo 1 possui maior variância em decorrência da ausência de outliers.",
        isCorrect: false,
        distractorRationale: "A ausência de outliers e menor IQR refletem menor variância, não maior."
      }
    ],
    detailedExplanation: {
      summary: "Em ensaios clínicos, menor IQR no Boxplot reflete estabilidade e consistência, indicando controle metabólico superior.",
      stepByStep: [
        "1. Ambas as populações têm a mesma mediana central (110 mg/dL).",
        "2. Grupo 1: IQR = 15 mg/dL (50% centrais variam apenas de 102 a 117 mg/dL). Controle excelente.",
        "3. Grupo 2: IQR = 65 mg/dL (alta variabilidade) com picos patológicos > 250 mg/dL.",
        "4. No diabetes, a variabilidade glicêmica acentuada causa estresse oxidativo e lesão microvascular (retinopatia, nefropatia).",
        "5. Conclusão: o Grupo 1 apresenta regime terapêutico muito superior."
      ],
      coreConcept: "A amplitude da caixa (IQR) do Boxplot é a medida padrão de dispersão quando a mediana é usada como medida de centro.",
      trapWarning: "Medianas iguais NÃO significam tratamentos equivalentes: analise sempre a dispersão (IQR e presença de outliers)!"
    },
    tags: ["estatistica", "boxplot", "amplitude-interquartil", "controle-glicemico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-DIS-025",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Estatística",
    subtopic: "Simulação de Adição de Dados Extremos na Média e Desvio Padrão",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um grupo inicial de 4 amigos possui idades de 20, 20, 20 e 20 anos. O desvio padrão inicial é nulo (s = 0) e a média é de 20 anos. Um novo integrante de 30 anos junta-se ao grupo, formando um conjunto de 5 amigos.",
      source: "Fundamentos de Estatística Descritiva, 2026."
    },
    prompt: "A nova média aritmética e a nova variância populacional (σ²) do grupo após a entrada do quinto integrante são:",
    options: [
      {
        id: "a",
        text: "22 anos e 16 anos².",
        isCorrect: true,
        distractorRationale: "Correto. Nova soma das idades = 20 + 20 + 20 + 20 + 30 = 110 anos. Nova média = 110 / 5 = 22 anos. Desvios em relação à nova média 22: quatro elementos têm (20 - 22) = -2 (quadrados = (-2)² = 4); o novo elemento tem (30 - 22) = +8 (quadrado = 8² = 64). Soma dos quadrados dos desvios = 4×4 + 64 = 16 + 64 = 80. Nova variância = 80 / 5 = 16 anos²."
      },
      {
        id: "b",
        text: "25 anos e 20 anos².",
        isCorrect: false,
        distractorRationale: "Calculou a média como (20 + 30)/2 = 25 sem ponderar pelos quatro amigos originais."
      },
      {
        id: "c",
        text: "22 anos e 4 anos².",
        isCorrect: false,
        distractorRationale: "Calculou o desvio padrão (√16 = 4 anos) em vez da variância (16 anos²)."
      },
      {
        id: "d",
        text: "21 anos e 10 anos².",
        isCorrect: false,
        distractorRationale: "Errou a divisão da nova média e dos desvios quadráticos."
      },
      {
        id: "e",
        text: "22 anos e 80 anos².",
        isCorrect: false,
        distractorRationale: "Esqueceu de dividir a soma dos quadrados (80) pelo número de pessoas (5)."
      }
    ],
    detailedExplanation: {
      summary: "A inserção de um elemento distinto em um grupo homogêneo eleva a média e gera variância positiva.",
      stepByStep: [
        "1. Novo conjunto de dados: {20, 20, 20, 20, 30}.",
        "2. Nova média: x̄ = (20 + 20 + 20 + 20 + 30) / 5 = 110 / 5 = 22 anos.",
        "3. Desvios em relação a 22:",
        "   - Quatro vezes: (20 - 22) = -2 ⇒ (-2)² = 4.",
        "   - Uma vez: (30 - 22) = +8 ⇒ 8² = 64.",
        "4. Soma dos quadrados dos desvios: (4 × 4) + 64 = 16 + 64 = 80.",
        "5. Nova variância: σ² = 80 / 5 = 16 anos² (e novo desvio padrão s = √16 = 4 anos)."
      ],
      coreConcept: "A adição de um único valor distante da média desestabiliza a variância nula e altera a média ponderada.",
      trapWarning: "Cuidado: para calcular a variância, divida a soma dos desvios quadráticos pelo total de indivíduos (5)."
    },
    tags: ["estatistica", "variancia", "desvio-padrao", "calculo-populacional"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
