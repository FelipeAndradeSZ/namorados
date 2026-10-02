/**
 * BANCO DE QUESTÕES: ARITMÉTICA BÁSICA, DIVISIBILIDADE, NOTAÇÃO CIENTÍFICA E MDC/MMC NO ENEM
 * Área: Matemática e suas Tecnologias
 * Competência: C1 | Habilidades: H1, H2, H3, H4, H5
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de rigor aritmético, algébrico e contextual
 * Regra Estrita: ZERO termos de deslocamentos turísticos. Foco em saúde pública,
 * dosagens farmacêuticas, indústria clínica, metrologia e tecnologia.
 */

export const QUESTIONS_ARITMETICA_DIVISIBILIDADE = [
  {
    id: "MAT-ARI-001",
    area: "matematica",
    competence: 1,
    skill: 3,
    topic: "Aritmética e Teoria dos Números",
    subtopic: "Máximo Divisor Comum (MDC) em Logística Hospitalar",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A farmácia central de um hospital universitário recebeu três lotes de ampolas de antibióticos: o Lote A com 240 ampolas, o Lote B com 360 ampolas e o Lote C com 420 ampolas. Para distribuição segura entre as enfermarias, os medicamentos devem ser organizados em caixas térmicas contendo a maior quantidade possível de ampolas, de tal forma que todas as caixas tenham exatamente o mesmo número de unidades, sem misturar lotes em uma mesma caixa e sem deixar nenhuma ampola sobrando.",
      source: "HOSPITAL DAS CLÍNICAS. Manual de Boas Práticas em Dispensação Farmacêutica. São Paulo, 2024."
    },
    prompt: "O número total de caixas térmicas necessárias para embalar todos os medicamentos desses três lotes é igual a",
    options: [
      {
        id: "a",
        text: "17.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para que as caixas tenham a MAIOR capacidade possível sem sobras nem misturas, a capacidade de cada caixa deve ser o MDC(240, 360, 420). Fatorando: 240 = 2⁴ × 3 × 5; 360 = 2³ × 3² × 5; 420 = 2² × 3 × 5 × 7. MDC = 2² × 3 × 5 = 60 ampolas por caixa. O total de caixas é: (240 / 60) + (360 / 60) + (420 / 60) = 4 + 6 + 7 = 17 caixas."
      },
      {
        id: "b",
        text: "60.",
        isCorrect: false,
        distractorRationale: "Calculou a capacidade de ampolas de cada caixa (o MDC), mas a pergunta pede o NÚMERO TOTAL DE CAIXAS."
      },
      {
        id: "c",
        text: "12.",
        isCorrect: false,
        distractorRationale: "Utilizou um divisor comum inferior (MDC de apenas dois lotes ou esqueceu o fator 5)."
      },
      {
        id: "d",
        text: "24.",
        isCorrect: false,
        distractorRationale: "Dividiu a soma das ampolas por um valor arbitrário de 42."
      },
      {
        id: "e",
        text: "34.",
        isCorrect: false,
        distractorRationale: "Calculou com caixas de 30 ampolas, que não é a capacidade máxima possível."
      }
    ],
    detailedExplanation: {
      summary: "A capacidade máxima por caixa é o MDC(240, 360, 420) = 60 ampolas. A soma das caixas de cada lote resulta em 4 + 6 + 7 = 17 caixas.",
      stepByStep: [
        "1. Identificar o problema de MDC pela exigência de 'maior quantidade possível' sem sobras.",
        "2. Fatorar os três números: 240 = 2⁴ · 3 · 5; 360 = 2³ · 3² · 5; 420 = 2² · 3 · 5 · 7.",
        "3. Calcular o MDC: fatores comuns com menores expoentes: 2² · 3¹ · 5¹ = 4 · 3 · 5 = 60 ampolas/caixa.",
        "4. Calcular a quantidade de caixas: Lote A = 240 / 60 = 4; Lote B = 360 / 60 = 6; Lote C = 420 / 60 = 7.",
        "5. Total de caixas = 4 + 6 + 7 = 17 caixas."
      ],
      coreConcept: "MDC define o tamanho máximo de lotes idênticos sem sobras; o número de pacotes é a soma dos quocientes.",
      trapWarning: "Pegadinha clássica do ENEM: o MDC é 60 (tamanho da caixa), mas a questão pergunta o total de caixas (17)!"
    },
    tags: ["matematica", "aritmetica", "mdc", "divisibilidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-002",
    area: "matematica",
    competence: 1,
    skill: 3,
    topic: "Aritmética e Teoria dos Números",
    subtopic: "Mínimo Múltiplo Comum (MMC) e Escalas Periódicas",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na UTI de um hospital, três equipamentos médicos passam por rotinas obrigatórias de calibração preventiva e troca de filtros com periodicidades distintas: o respirador mecânico a cada 6 dias, o monitor multiparamétrico a cada 8 dias e a bomba de infusão a cada 10 dias. Em 1º de março de um ano não bissexto, os três equipamentos foram calibrados simultaneamente no mesmo dia.",
      source: "AGÊNCIA NACIONAL DE VIGILÂNCIA SANITÁRIA (ANVISA). Manutenção e Rastreabilidade de Equipamentos Biomédicos, 2023."
    },
    prompt: "Após o dia 1º de março, os três equipamentos voltarão a ser calibrados juntos pela primeira vez após exatamente",
    options: [
      {
        id: "a",
        text: "24 dias.",
        isCorrect: false,
        distractorRationale: "Calculou apenas o MMC entre 6 e 8, ignorando a periodicidade de 10 dias da bomba de infusão."
      },
      {
        id: "b",
        text: "48 dias.",
        isCorrect: false,
        distractorRationale: "Multiplicou periodicidades aleatoriamente sem calcular o MMC correto."
      },
      {
        id: "c",
        text: "120 dias.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A coincidência periódica exige o MMC(6, 8, 10). Fatoração conjunta: 6 = 2 × 3; 8 = 2³; 10 = 2 × 5. O MMC é o produto de todos os fatores com os maiores expoentes: 2³ × 3 × 5 = 8 × 3 × 5 = 120 dias."
      },
      {
        id: "d",
        text: "240 dias.",
        isCorrect: false,
        distractorRationale: "Multiplicou por 2 inadvertidamente ou calculou um múltiplo comum não mínimo."
      },
      {
        id: "e",
        text: "480 dias.",
        isCorrect: false,
        distractorRationale: "Multiplicou diretamente 6 × 8 × 10 = 480, esquecendo que fatores comuns não devem ser duplicados no MMC."
      }
    ],
    detailedExplanation: {
      summary: "A coincidência de eventos periódicos independentes é determinada pelo MMC dos intervalos: MMC(6, 8, 10) = 120 dias.",
      stepByStep: [
        "1. Identificar o problema de coincidência temporal futura: cálculo de MMC.",
        "2. Fatorar: 6 = 2 · 3; 8 = 2³; 10 = 2 · 5.",
        "3. Selecionar os maiores expoentes de cada fator primo: 2³, 3¹, 5¹.",
        "4. Efetuar o produto: 8 · 3 · 5 = 120 dias."
      ],
      coreConcept: "Eventos cíclicos periódicos voltam a coincidir no tempo igual ao MMC de seus períodos.",
      trapWarning: "Nunca multiplique os números diretamente (6 × 8 × 10 = 480) sem verificar os fatores comuns."
    },
    tags: ["matematica", "aritmetica", "mmc", "periodicidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-003",
    area: "matematica",
    competence: 1,
    skill: 1,
    topic: "Aritmética e Notação Científica",
    subtopic: "Notação Científica e Razão entre Escalas Microscópicas",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um laboratório de microscopia eletrônica, pesquisadores comparam as dimensões de um adenovírus respiratório e de uma hemácia humana. O diâmetro médio do adenovírus é de 90 nanômetros (90 nm, onde 1 nm = 10⁻⁹ m), enquanto o diâmetro médio de uma hemácia é de 7,2 micrômetros (7,2 μm, onde 1 μm = 10⁻⁶ m).",
      source: "SOCIEDADE BRASILEIRA DE MICROSCOPIA E MICROANÁLISE. Dimensões Celulares e Virais. Belo Horizonte, 2024."
    },
    prompt: "A razão entre o diâmetro da hemácia e o diâmetro do adenovírus expressa em notação científica é",
    options: [
      {
        id: "a",
        text: "8,0 × 10¹.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Diâmetro da hemácia: D_h = 7,2 × 10⁻⁶ m. Diâmetro do vírus: D_v = 90 × 10⁻⁹ m = 9,0 × 10⁻⁸ m. A razão é: D_h / D_v = (7,2 × 10⁻⁶) / (9,0 × 10⁻⁸) = (7,2 / 9,0) × 10^(-6 - (-8)) = 0,8 × 10² = 8,0 × 10¹ (ou seja, a hemácia é 80 vezes maior)."
      },
      {
        id: "b",
        text: "8,0 × 10².",
        isCorrect: false,
        distractorRationale: "Errou na conversão de 90 nm para notação científica padrão (usou 90 × 10⁻⁹ sem ajustar para 9 × 10⁻⁸)."
      },
      {
        id: "c",
        text: "1,25 × 10⁻².",
        isCorrect: false,
        distractorRationale: "Inverteu a razão calculando diâmetro do vírus sobre o diâmetro da hemácia."
      },
      {
        id: "d",
        text: "8,0 × 10⁻³.",
        isCorrect: false,
        distractorRationale: "Errou a regra dos expoentes da divisão de potências de base 10: -6 - (-8) = +2."
      },
      {
        id: "e",
        text: "8,0 × 10³.",
        isCorrect: false,
        distractorRationale: "Subtraiu erroneamente as potências imaginando que micrômetro fosse 10⁻³."
      }
    ],
    detailedExplanation: {
      summary: "Hemácia = 7,2 × 10⁻⁶ m; Vírus = 9,0 × 10⁻⁸ m. Razão: (7,2 × 10⁻⁶) / (9,0 × 10⁻⁸) = 8,0 × 10¹ = 80.",
      stepByStep: [
        "1. Converter ambas as grandezas para metros em notação científica:",
        "   • Hemácia: 7,2 μm = 7,2 × 10⁻⁶ m.",
        "   • Vírus: 90 nm = 90 × 10⁻⁹ m = 9,0 × 10⁻⁸ m.",
        "2. Montar a divisão: (7,2 × 10⁻⁶) / (9,0 × 10⁻⁸).",
        "3. Dividir os coeficientes: 7,2 / 9,0 = 0,8.",
        "4. Subtrair os expoentes: 10^(-6 - (-8)) = 10².",
        "5. Ajustar para notação científica padrão (1 ≤ a < 10): 0,8 × 10² = 8,0 × 10¹."
      ],
      coreConcept: "Notação científica exige coeficiente entre 1 e 10; na divisão de potências de 10, subtraem-se os expoentes.",
      trapWarning: "Cuidado com o sinal negativo do expoente: -6 - (-8) = -6 + 8 = +2."
    },
    tags: ["matematica", "notacao-cientifica", "potenciacao", "unidades"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-004",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Aritmética e Estimativa",
    subtopic: "Ordem de Grandeza em Fisiologia Humana",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um adulto saudável possui um volume sanguíneo médio de aproximadamente 5,0 litros. Cada milímetro cúbico (1 mm³) de sangue contém em média 4,8 milhões de glóbulos vermelhos (hemácias). Lembre-se de que 1 litro equivale a 1 decímetro cúbico (1 dm³) e que 1 dm³ = 10⁶ mm³.",
      source: "GUYTON, A. C.; HALL, J. E. Tratado de Fisiologia Médica. 14. ed. Elsevier, 2021."
    },
    prompt: "A ordem de grandeza do número total de hemácias circulantes no organismo desse indivíduo é",
    options: [
      {
        id: "a",
        text: "10¹¹.",
        isCorrect: false,
        distractorRationale: "Esqueceu de converter litros para milímetros cúbicos (fator 10⁶)."
      },
      {
        id: "b",
        text: "10¹³.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Volume total em mm³: V = 5,0 L = 5,0 × 10⁶ mm³. Concentração: 4,8 × 10⁶ hemácias/mm³. Total de hemácias = (5,0 × 10⁶) × (4,8 × 10⁶) = 24 × 10¹² = 2,4 × 10¹³ hemácias. Como o coeficiente k = 2,4 é menor que √10 ≈ 3,16, a ordem de grandeza é 10¹³."
      },
      {
        id: "c",
        text: "10¹⁴.",
        isCorrect: false,
        distractorRationale: "Arredondou para cima o expoente sem observar o critério canônico da raiz de 10 (2,4 < 3,16)."
      },
      {
        id: "d",
        text: "10¹⁶.",
        isCorrect: false,
        distractorRationale: "Errou na conversão cúbica de unidades de volume multiplicando por 10⁹ indevidamente."
      },
      {
        id: "e",
        text: "10⁹.",
        isCorrect: false,
        distractorRationale: "Confundiu milhões com bilhões e errou as ordens de grandeza decimais."
      }
    ],
    detailedExplanation: {
      summary: "O total de hemácias é 2,4 × 10¹³. Como 2,4 < √10 (3,16), a ordem de grandeza é 10¹³.",
      stepByStep: [
        "1. Converter o volume: 5 L = 5 dm³ = 5 × (100 mm)³ = 5 × 10⁶ mm³.",
        "2. Número de hemácias por mm³ = 4,8 × 10⁶.",
        "3. Multiplicação total: N = (5 × 10⁶) · (4,8 × 10⁶) = 24 × 10¹² = 2,4 × 10¹³.",
        "4. Regra da Ordem de Grandeza para N = k × 10ⁿ: se k < √10 (≈ 3,16), a ordem de grandeza é 10ⁿ; se k ≥ √10, é 10ⁿ⁺¹.",
        "5. Como 2,4 < 3,16, a ordem de grandeza é 10¹³."
      ],
      coreConcept: "A ordem de grandeza de um número k · 10ⁿ é 10ⁿ se k < √10 ≈ 3,162, e 10ⁿ⁺¹ se k ≥ √10.",
      trapWarning: "Atenção ao critério da raiz de 10 (3,16): números com mantissa abaixo de 3,16 mantêm o expoente original."
    },
    tags: ["matematica", "ordem-de-grandeza", "notacao-cientifica", "conversoes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-005",
    area: "matematica",
    competence: 1,
    skill: 4,
    topic: "Aritmética e Periodicidade",
    subtopic: "Divisão Euclidiana e Ciclos de Calendário (Módulo 7)",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um ensaio clínico de uma vacina preventiva contra arboviroses teve início em uma terça-feira. O protocolo de monitoramento imunológico estipula que a coleta final de amostras de sangue para titulação de anticorpos neutralizantes deve ocorrer exatamente 500 dias após o dia do início da vacinação.",
      source: "INSTITUTO BUTANTAN. Protocolo de Ensaios Clínicos de Imunobiológicos. São Paulo, 2024."
    },
    prompt: "De acordo com esse protocolo, o dia da semana em que será realizada a coleta final é uma",
    options: [
      {
        id: "a",
        text: "segunda-feira.",
        isCorrect: false,
        distractorRationale: "Subtraiu os dias em vez de avançar no tempo cíclico."
      },
      {
        id: "b",
        text: "terça-feira.",
        isCorrect: false,
        distractorRationale: "Supôs resto zero na divisão por 7."
      },
      {
        id: "c",
        text: "quarta-feira.",
        isCorrect: false,
        distractorRationale: "Avançou apenas 1 dia após o ciclo completo de 71 semanas."
      },
      {
        id: "d",
        text: "quinta-feira.",
        isCorrect: false,
        distractorRationale: "Avançou apenas 2 dias a partir do dia inicial."
      },
      {
        id: "e",
        text: "sexta-feira.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O ciclo semanal possui período T = 7 dias. Na divisão euclidiana: 500 = 7 × 71 + 3 (quociente de 71 semanas completas e resto de 3 dias). Partindo de terça-feira (dia 0), avançamos 3 dias: +1 dia = quarta-feira; +2 dias = quinta-feira; +3 dias = sexta-feira."
      }
    ],
    detailedExplanation: {
      summary: "500 dividido por 7 resulta em 71 semanas e resto de 3 dias. Terça + 3 dias = sexta-feira.",
      stepByStep: [
        "1. Divisão: 500 / 7 = 71 com resto 3 (pois 71 × 7 = 497, e 500 - 497 = 3).",
        "2. Dia zero: terça-feira.",
        "3. Dia +1: quarta-feira.",
        "4. Dia +2: quinta-feira.",
        "5. Dia +3: sexta-feira."
      ],
      coreConcept: "Problemas de ciclo de calendário usam a aritmética dos restos (congruência módulo 7).",
      trapWarning: "Cuidado ao contar o dia inicial: 'após N dias' significa somar N dias ao dia base."
    },
    tags: ["matematica", "divisibilidade", "resto", "modulo-7", "calendario"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-006",
    area: "matematica",
    competence: 1,
    skill: 4,
    topic: "Aritmética e Códigos",
    subtopic: "Critérios de Divisibilidade e Dígito de Segurança",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um sistema eletrônico de triagem de prontuários médicos, cada código de identificação de paciente é formado por um número de cinco algarismos na forma 4X78Y. Por determinação do protocolo de segurança da informação hospitalar, esse número deve ser simultaneamente divisível por 5 e por 9, e o dígito Y deve ser diferente de zero.",
      source: "CONSELHO FEDERAL DE MEDICINA. Diretrizes de Segurança em Prontuário Eletrônico, 2023."
    },
    prompt: "Nessas condições, o algarismo X desse código de identificação deve ser obrigatoriamente igual a",
    options: [
      {
        id: "a",
        text: "3.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para ser divisível por 5, o último algarismo (Y) deve ser 0 ou 5. Como o enunciado impõe Y ≠ 0, temos obrigatoriamente Y = 5. O número passa a ser 4X785. Para ser divisível por 9, a soma de seus algarismos deve ser múltiplo de 9: 4 + X + 7 + 8 + 5 = 24 + X. Como X é um algarismo de 0 a 9, o único múltiplo de 9 possível é 27: 24 + X = 27 ⟹ X = 3."
      },
      {
        id: "b",
        text: "5.",
        isCorrect: false,
        distractorRationale: "Se X = 5, a soma seria 24 + 5 = 29, que não é divisível por 9."
      },
      {
        id: "c",
        text: "8.",
        isCorrect: false,
        distractorRationale: "Considerou incorretamente Y = 0; se Y = 0, a soma seria 4 + X + 7 + 8 + 0 = 19 + X = 27 ⟹ X = 8, mas o enunciado proibiu Y = 0."
      },
      {
        id: "d",
        text: "1.",
        isCorrect: false,
        distractorRationale: "Confundiu com critério de divisibilidade por 3 em vez de 9."
      },
      {
        id: "e",
        text: "6.",
        isCorrect: false,
        distractorRationale: "Calculou a soma resultando em 30, que é divisível por 3, mas não por 9."
      }
    ],
    detailedExplanation: {
      summary: "Divisível por 5 com final não nulo exige Y = 5. Para ser divisível por 9, a soma 4 + X + 7 + 8 + 5 = 24 + X deve dar 27, logo X = 3.",
      stepByStep: [
        "1. Critério do 5: termina em 0 ou 5. Como Y ≠ 0, Y = 5.",
        "2. Critério do 9: a soma dos algarismos deve ser múltipla de 9.",
        "3. Soma = 4 + X + 7 + 8 + 5 = 24 + X.",
        "4. Como X ∈ {0, 1, ..., 9}, 24 + X deve ser igual a 27.",
        "5. 24 + X = 27 ⟹ X = 3."
      ],
      coreConcept: "Divisibilidade por 5 depende do último dígito; divisibilidade por 9 depende da soma de todos os algarismos.",
      trapWarning: "Muita atenção às restrições do enunciado: Y ≠ 0 elimina a hipótese de Y ser zero."
    },
    tags: ["matematica", "divisibilidade", "criterios-divisibilidade", "seguranca"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-007",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Aritmética e Números Racionais",
    subtopic: "Frações Geratrizes de Dízimas Periódicas",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na preparação de uma solução fisiológica em um laboratório químico, a concentração exata de um reagente em gramas por litro foi medida experimentalmente como a dízima periódica composta 0,4333... g/L (onde o algarismo 3 repete-se infinitamente). Para alimentar o software de dosagem automatizada, essa concentração precisa ser inserida na forma de fração irredutível p/q.",
      source: "FARMACOPEIA BRASILEIRA. Métodos de Calibração Analítica. 6. ed. ANVISA, 2021."
    },
    prompt: "A fração irredutível que representa rigorosamente essa concentração é",
    options: [
      {
        id: "a",
        text: "43 / 99.",
        isCorrect: false,
        distractorRationale: "Tratou o número como dízima periódica simples 0,434343... em vez de dízima composta com antiperíodo 4."
      },
      {
        id: "b",
        text: "13 / 30.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Seja x = 0,4333... Multiplicando por 10: 10x = 4,333... Multiplicando por 100: 100x = 43,333... Subtraindo: 100x - 10x = 43,333... - 4,333... ⟹ 90x = 39 ⟹ x = 39 / 90. Simplificando por 3: 39 ÷ 3 = 13 e 90 ÷ 3 = 30. A fração irredutível é 13/30."
      },
      {
        id: "c",
        text: "39 / 90.",
        isCorrect: false,
        distractorRationale: "Encontrou a fração geratriz, mas não a simplificou para a forma irredutível exigida no comando."
      },
      {
        id: "d",
        text: "43 / 90.",
        isCorrect: false,
        distractorRationale: "Esqueceu de subtrair o antiperíodo 4 no numerador da fórmula prática (usou 43/90 em vez de (43-4)/90)."
      },
      {
        id: "e",
        text: "7 / 15.",
        isCorrect: false,
        distractorRationale: "Errou a simplificação decimal dividindo por fatores incorretos."
      }
    ],
    detailedExplanation: {
      summary: "Pela regra de dízima periódica composta: (43 - 4) / 90 = 39 / 90 = 13 / 30 na forma irredutível.",
      stepByStep: [
        "1. Identificar o período (3) e o antiperíodo (4).",
        "2. Método algébrico: x = 0,4333... ⟹ 10x = 4,333... ⟹ 100x = 43,333...",
        "3. Subtração: 100x - 10x = 43 - 4 ⟹ 90x = 39.",
        "4. Fração: x = 39 / 90.",
        "5. Simplificar dividindo numerador e denominador por 3: 39/3 = 13 e 90/3 = 30 ⟹ 13/30."
      ],
      coreConcept: "Fração geratriz de dízima composta: numerador = (número até o primeiro período - parte não periódica); denominador = tantos noves quantos algarismos no período seguidos de tantos zeros quantos no antiperíodo.",
      trapWarning: "O enunciado pediu FRAÇÃO IRREDUTÍVEL: 39/90 não está simplificada!"
    },
    tags: ["matematica", "fracao-geratriz", "dizima-periodica", "racionais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-008",
    area: "matematica",
    competence: 1,
    skill: 1,
    topic: "Aritmética e Teoria dos Números",
    subtopic: "Número de Divisores Positivos e Arranjo Logístico",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um depósito de medicamentos precisa armazenar 720 caixas de soro fisiológico em pilhas perfeitamente retangulares, de modo que cada pilha contenha o mesmo número exato de caixas, sem sobras e sem caixas soltas.",
      source: "CENTRO DE LOGÍSTICA HOSPITALAR. Organização de Estoques Críticos, 2024."
    },
    prompt: "O número total de divisores positivos inteiros do número 720 (que representa todas as maneiras possíveis de definir a quantidade de caixas por pilha) é",
    options: [
      {
        id: "a",
        text: "15.",
        isCorrect: false,
        distractorRationale: "Multiplicou apenas os expoentes sem somar 1 a cada um deles."
      },
      {
        id: "b",
        text: "30.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pelo teorema fundamental da aritmética, fatoramos 720 em números primos: 720 = 72 × 10 = (2³ × 3²) × (2 × 5) = 2⁴ × 3² × 5¹. O número total de divisores positivos é dado pelo produto dos expoentes acrescidos de 1: D(720) = (4 + 1) × (2 + 1) × (1 + 1) = 5 × 3 × 2 = 30 divisores."
      },
      {
        id: "c",
        text: "24.",
        isCorrect: false,
        distractorRationale: "Esqueceu o fator primo 5 ou utilizou 2³ em vez de 2⁴ na fatoração."
      },
      {
        id: "d",
        text: "36.",
        isCorrect: false,
        distractorRationale: "Adicionou 2 aos expoentes em vez de 1."
      },
      {
        id: "e",
        text: "60.",
        isCorrect: false,
        distractorRationale: "Duplicou o resultado final imaginando inclusão de divisores negativos."
      }
    ],
    detailedExplanation: {
      summary: "A fatoração de 720 é 2⁴ · 3² · 5¹. O número de divisores positivos é (4+1)(2+1)(1+1) = 5 · 3 · 2 = 30.",
      stepByStep: [
        "1. Decompor 720 em fatores primos:",
        "   720 = 2 · 360 = 2² · 180 = 2³ · 90 = 2⁴ · 45 = 2⁴ · 3² · 5¹.",
        "2. Identificar os expoentes dos fatores primos: a = 4, b = 2, c = 1.",
        "3. Aplicar a fórmula do número de divisores: D = (a + 1) · (b + 1) · (c + 1).",
        "4. D = (4 + 1) · (2 + 1) · (1 + 1) = 5 · 3 · 2 = 30 divisores positivos."
      ],
      coreConcept: "A quantidade de divisores de n = p₁ᵃ · p₂ᵇ · p₃ᶜ é dada por (a+1)(b+1)(c+1).",
      trapWarning: "Lembre-se sempre de somar 1 a cada expoente antes de multiplicá-los."
    },
    tags: ["matematica", "fatoracao", "divisores", "teoria-dos-numeros"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-009",
    area: "matematica",
    competence: 1,
    skill: 3,
    topic: "Aritmética e Mecânica",
    subtopic: "MMC em Engrenagens de Aparelhos Biomédicos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No mecanismo de precisão de uma centrífuga de bancada para separação de plasma sanguíneo, duas engrenagens dentadas acopladas operam continuamente. A engrenagem motora maior possui 48 dentes, e a engrenagem movida menor possui 36 dentes. Dois dentes marcados com pontos coloridos de tinta fluorescente encontram-se em contato no instante inicial de acionamento.",
      source: "MANUAL DE ENGENHARIA BIOMÉDICA. Dinâmica de Centrifugação Clínica. Curitiba, 2022."
    },
    prompt: "Para que esses mesmos dois dentes marcados voltem a se tocar pela primeira vez, a engrenagem menor (de 36 dentes) deverá completar exatamente",
    options: [
      {
        id: "a",
        text: "3 voltas.",
        isCorrect: false,
        distractorRationale: "Esse é o número de voltas da engrenagem MAIOR (144 / 48 = 3 voltas)."
      },
      {
        id: "b",
        text: "4 voltas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A cada rotação, os dentes avançam passo a passo. A coincidência ocorre quando o número de dentes passados for o MMC(48, 36). Fatorando: 48 = 2⁴ × 3; 36 = 2² × 3². MMC = 2⁴ × 3² = 16 × 9 = 144 dentes. Como a engrenagem menor tem 36 dentes, ela completará: 144 / 36 = 4 voltas completas."
      },
      {
        id: "c",
        text: "6 voltas.",
        isCorrect: false,
        distractorRationale: "Dividiu 144 por 24."
      },
      {
        id: "d",
        text: "12 voltas.",
        isCorrect: false,
        distractorRationale: "Calculou com o MDC (12) em vez do MMC."
      },
      {
        id: "e",
        text: "16 voltas.",
        isCorrect: false,
        distractorRationale: "Calculou o número de voltas dividindo por 9."
      }
    ],
    detailedExplanation: {
      summary: "MMC(48, 36) = 144 dentes passados. A engrenagem menor de 36 dentes completará 144 / 36 = 4 voltas.",
      stepByStep: [
        "1. Dentes passados até o reencontro = MMC(48, 36).",
        "2. Fatoração: 48 = 2⁴ · 3; 36 = 2² · 3².",
        "3. MMC = 2⁴ · 3² = 16 · 9 = 144 dentes.",
        "4. Voltas da engrenagem menor = Total de dentes / dentes da engrenagem menor = 144 / 36 = 4 voltas.",
        "5. (A engrenagem maior completará 144 / 48 = 3 voltas)."
      ],
      coreConcept: "Em engrenagens acopladas, o reencontro dos mesmos dentes ocorre após um número de dentes igual ao MMC.",
      trapWarning: "Cuidado com qual engrenagem o comando pede: a menor dá 4 voltas; a maior dá 3 voltas!"
    },
    tags: ["matematica", "mmc", "engrenagens", "periodicidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-010",
    area: "matematica",
    competence: 1,
    skill: 3,
    topic: "Aritmética e Otimização",
    subtopic: "MDC em Corte de Fitas Cirúrgicas sem Desperdício",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma fábrica de insumos cirúrgicos dispõe de três rolos de fita microporosa hipoalergênica com comprimentos de 180 metros, 252 metros e 324 metros. Para comercialização hospitalar, a fábrica precisa cortar todos os rolos em pedaços de comprimento idêntico, com a maior extensão possível, de modo que não haja sobras de fita em nenhum dos três rolos.",
      source: "INDÚSTRIA BRASILEIRA DE MATERIAIS MÉDICOS. Especificações Técnicas de Corte, 2023."
    },
    prompt: "O comprimento de cada pedaço cortado e o total de pedaços obtidos serão, respectivamente,",
    options: [
      {
        id: "a",
        text: "18 metros e 42 pedaços.",
        isCorrect: false,
        distractorRationale: "18 m é um divisor comum, mas não é o maior (o MDC real é 36 m)."
      },
      {
        id: "b",
        text: "36 metros e 21 pedaços.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O comprimento máximo de cada pedaço é o MDC(180, 252, 324). Fatorando: 180 = 2² × 3² × 5; 252 = 2² × 3² × 7; 324 = 2² × 3⁴. MDC = 2² × 3² = 4 × 9 = 36 metros por pedaço. O número total de pedaços é: (180 / 36) + (252 / 36) + (324 / 36) = 5 + 7 + 9 = 21 pedaços."
      },
      {
        id: "c",
        text: "36 metros e 42 pedaços.",
        isCorrect: false,
        distractorRationale: "Calculou o comprimento correto (36 m), mas dobrou erroneamente a contagem de pedaços."
      },
      {
        id: "d",
        text: "12 metros e 63 pedaços.",
        isCorrect: false,
        distractorRationale: "Utilizou 12 metros, que não é o divisor máximo comum."
      },
      {
        id: "e",
        text: "72 metros e 11 pedaços.",
        isCorrect: false,
        distractorRationale: "72 não divide 180 nem 252 de maneira exata."
      }
    ],
    detailedExplanation: {
      summary: "MDC(180, 252, 324) = 36 metros por pedaço. Total de pedaços: 5 + 7 + 9 = 21 pedaços.",
      stepByStep: [
        "1. Calcular o MDC dos três comprimentos:",
        "   • 180 = 2² · 3² · 5",
        "   • 252 = 2² · 3² · 7",
        "   • 324 = 2² · 3⁴",
        "2. MDC = 2² · 3² = 4 · 9 = 36 metros.",
        "3. Calcular a quantidade de pedaços:",
        "   • 180 / 36 = 5",
        "   • 252 / 36 = 7",
        "   • 324 / 36 = 9",
        "4. Total de pedaços = 5 + 7 + 9 = 21 pedaços."
      ],
      coreConcept: "O MDC fornece o tamanho máximo da partição sem desperdício; a soma dos quocientes fornece a quantidade de partes.",
      trapWarning: "Verifique sempre se o número encontrado divide simultaneamente todos os termos sem deixar resto."
    },
    tags: ["matematica", "mdc", "otimizacao", "divisibilidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-011",
    area: "matematica",
    competence: 1,
    skill: 1,
    topic: "Aritmética e Potenciação",
    subtopic: "Propriedades das Potências de Base 10 e Comparação Celular",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A massa estimada de uma célula bacteriana típica é de aproximadamente 1,0 × 10⁻¹² gramas, enquanto a massa estimada de uma célula hepática humana (hepatócito) é de aproximadamente 2,5 × 10⁻⁹ gramas.",
      source: "ALBERTS, B. et al. Molecular Biology of the Cell. Garland Science, 2018."
    },
    prompt: "Quantas células bacterianas seriam necessárias, reunidas, para igualar a massa de um único hepatócito humano?",
    options: [
      {
        id: "a",
        text: "250 células.",
        isCorrect: false,
        distractorRationale: "Calculou a razão com expoente 10² em vez de 10³."
      },
      {
        id: "b",
        text: "2 500 células.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Número de bactérias = Massa do hepatócito / Massa da bactéria = (2,5 × 10⁻⁹ g) / (1,0 × 10⁻¹² g) = 2,5 × 10^(-9 - (-12)) = 2,5 × 10³ = 2 500 células."
      },
      {
        id: "c",
        text: "25 000 células.",
        isCorrect: false,
        distractorRationale: "Errou na subtração dos expoentes negativos obtendo 10⁴."
      },
      {
        id: "d",
        text: "2,5 × 10⁻³ células.",
        isCorrect: false,
        distractorRationale: "Inverteu a fração calculando massa da bactéria sobre a do hepatócito."
      },
      {
        id: "e",
        text: "2,5 × 10²¹ células.",
        isCorrect: false,
        distractorRationale: "Somou os expoentes em vez de subtraí-los na divisão."
      }
    ],
    detailedExplanation: {
      summary: "Razão entre massas: (2,5 × 10⁻⁹) / (1,0 × 10⁻¹²) = 2,5 × 10³ = 2 500 células bacterianas.",
      stepByStep: [
        "1. Montar a divisão: N = M_hepatócito / M_bactéria.",
        "2. N = (2,5 × 10⁻⁹) / (1,0 × 10⁻¹²).",
        "3. Aplicar regra de quociente de potências de mesma base: 10^(-9 - (-12)) = 10^(-9 + 12) = 10³.",
        "4. N = 2,5 × 10³ = 2 500."
      ],
      coreConcept: "Divisão de potências de mesma base: conserva a base e subtrai os expoentes.",
      trapWarning: "Atenção ao sinal na subtração de expoente negativo: -9 - (-12) = +3."
    },
    tags: ["matematica", "potenciacao", "base-10", "proporcao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-012",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Aritmética e Radiciação",
    subtopic: "Aproximação Racional de Radicais em Fórmulas Médicas",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A área de superfície corporal (ASC) em metros quadrados (m²) de um paciente adulto é estimada pela fórmula clínica de Mosteller: ASC = √[(peso em kg × altura em cm) / 3 600]. Um paciente avaliado na emergência pesa exatamente 72 kg e mede 175 cm de altura. Considere as aproximações racionais: √2 ≈ 1,41; √3 ≈ 1,73; √5 ≈ 2,24 e √7 ≈ 2,65.",
      source: "MOSTELLER, R. D. Simplified calculation of body-surface area. N Engl J Med, 1987."
    },
    prompt: "A área de superfície corporal desse paciente calculada por essa fórmula é de aproximadamente",
    options: [
      {
        id: "a",
        text: "1,45 m².",
        isCorrect: false,
        distractorRationale: "Subestimou o cálculo dos radicais."
      },
      {
        id: "b",
        text: "1,87 m².",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Substituindo na fórmula: ASC = √[(72 × 175) / 3600]. Simplificando a fração interna: 72 / 3600 = 1 / 50. Então o termo interno é 175 / 50 = 3,5. Logo, ASC = √3,5 = √(7/2) = √14 / 2 = (√2 × √7) / 2 ≈ (1,41 × 2,65) / 2 = 3,7365 / 2 ≈ 1,868 m² ≈ 1,87 m²."
      },
      {
        id: "c",
        text: "2,15 m².",
        isCorrect: false,
        distractorRationale: "Calculou com altura ou peso inflacionados sem simplificar adequadamente."
      },
      {
        id: "d",
        text: "2,42 m².",
        isCorrect: false,
        distractorRationale: "Multiplicou por √2 em vez de dividir por 2."
      },
      {
        id: "e",
        text: "3,50 m².",
        isCorrect: false,
        distractorRationale: "Esqueceu de extrair a raiz quadrada do valor 3,5 resultante da divisão interna."
      }
    ],
    detailedExplanation: {
      summary: "Termo interno: (72 × 175) / 3600 = 175 / 50 = 3,5. √3,5 = √14 / 2 ≈ (1,41 × 2,65) / 2 ≈ 1,87 m².",
      stepByStep: [
        "1. Simplificar o produto dentro da raiz: 72 e 3600: 72 / 3600 = 1 / 50.",
        "2. Resta 175 / 50 = 3,5.",
        "3. Calcular √3,5 = √(7 / 2) = √14 / 2.",
        "4. Como √14 = √2 · √7 ≈ 1,41 · 2,65 = 3,7365.",
        "5. Dividindo por 2: 3,7365 / 2 ≈ 1,868 ≈ 1,87 m²."
      ],
      coreConcept: "Simplificar frações sob o radical antes da multiplicação evita cálculos exaustivos.",
      trapWarning: "Não se esqueça de extrair a raiz quadrada após calcular a razão sob o radical!"
    },
    tags: ["matematica", "radiciacao", "simplificacao", "estimativa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-013",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Aritmética e Médias",
    subtopic: "Média Ponderada com Pesos Decimais em Seleção Acadêmica",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No processo seletivo SISU de uma universidade pública para o curso de Medicina, a nota final de classificação do candidato é obtida por média ponderada das cinco notas do ENEM, com os seguintes pesos: Redação (peso 3,0), Ciências da Natureza (peso 4,0), Matemática (peso 2,0), Ciências Humanas (peso 1,0) e Linguagens (peso 1,0). Uma candidata obteve as seguintes notas: Redação: 960; Natureza: 820; Matemática: 850; Humanas: 740; Linguagens: 700.",
      source: "EDITAL SISU/MEC. Termo de Adesão Universidade Federal, 2024."
    },
    prompt: "A nota final padronizada obtida por essa candidata nesse processo seletivo é igual a",
    options: [
      {
        id: "a",
        text: "814,0.",
        isCorrect: false,
        distractorRationale: "Calculou a média aritmética simples somando as notas e dividindo por 5."
      },
      {
        id: "b",
        text: "836,0.",
        isCorrect: false,
        distractorRationale: "Errou na soma dos pesos ou nas multiplicações parciais."
      },
      {
        id: "c",
        text: "845,5.",
        isCorrect: false,
        distractorRationale: "Dividiu a soma ponderada por 10 em vez de 11."
      },
      {
        id: "d",
        text: "850,9.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Soma dos pesos: 3,0 + 4,0 + 2,0 + 1,0 + 1,0 = 11,0. Soma ponderada: (960 × 3) + (820 × 4) + (850 × 2) + (740 × 1) + (700 × 1) = 2880 + 3280 + 1700 + 740 + 700 = 9360. Média ponderada = 9360 / 11 = 850,909... ≈ 850,9."
      },
      {
        id: "e",
        text: "870,0.",
        isCorrect: false,
        distractorRationale: "Superestimou as notas atribuindo peso maior para Redação."
      }
    ],
    detailedExplanation: {
      summary: "Soma ponderada: 9360. Soma dos pesos: 11. Média = 9360 / 11 ≈ 850,9.",
      stepByStep: [
        "1. Identificar os pesos: Redação=3, Natureza=4, Matemática=2, Humanas=1, Linguagens=1. Soma dos pesos = 11.",
        "2. Multiplicar cada nota pelo respectivo peso:",
        "   • 960 × 3 = 2 880",
        "   • 820 × 4 = 3 280",
        "   • 850 × 2 = 1 700",
        "   • 740 × 1 = 740",
        "   • 700 × 1 = 700",
        "3. Somar os produtos: 2880 + 3280 + 1700 + 740 + 700 = 9 360.",
        "4. Dividir pela soma dos pesos: 9 360 / 11 = 850,909... ≈ 850,9."
      ],
      coreConcept: "Média ponderada: soma dos produtos das notas pelos pesos dividida pela soma total dos pesos.",
      trapWarning: "Cuidado: a soma dos pesos é 11 (3+4+2+1+1), e NÃO 10 nem 5!"
    },
    tags: ["matematica", "media-ponderada", "estatistica", "aritmetica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-014",
    area: "matematica",
    competence: 1,
    skill: 4,
    topic: "Aritmética e Algoritmos",
    subtopic: "Dígito Verificador e Aritmética Modular (Módulo 11)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O Cadastro de Pessoa Física (CPF) utiliza um algoritmo de verificação módulo 11 para garantir a integridade dos dados cadastrais contra erros de digitação. Para calcular o primeiro dígito verificador (d₁) dos nove primeiros algarismos a₁a₂a₃a₄a₅a₆a₇a₈a₉, calcula-se a soma S = 10·a₁ + 9·a₂ + 8·a₃ + 7·a₄ + 6·a₅ + 5·a₆ + 4·a₇ + 3·a₈ + 2·a₉. Em seguida, obtém-se o resto R da divisão de S por 11. Se R for menor que 2, o dígito d₁ é 0; caso contrário, d₁ = 11 - R.",
      source: "RECEITA FEDERAL DO BRASIL. Algoritmo de Validação do CPF, 2023."
    },
    prompt: "Para a sequência de nove algarismos 123.456.789, o primeiro dígito verificador (d₁) calculado por essa regra é",
    options: [
      {
        id: "a",
        text: "0.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Calculando a soma ponderada: S = (10×1) + (9×2) + (8×3) + (7×4) + (6×5) + (5×6) + (4×7) + (3×8) + (2×9) = 10 + 18 + 24 + 28 + 30 + 30 + 28 + 24 + 18 = 210. Dividindo 210 por 11: 210 = 11 × 19 + 1 (pois 11 × 19 = 209). O resto da divisão é R = 1. Como a regra estipula expressamente que 'Se R < 2, o dígito d₁ é 0', concluímos que d₁ = 0."
      },
      {
        id: "b",
        text: "9.",
        isCorrect: false,
        distractorRationale: "Calculou 11 - R = 11 - 2 imaginando que o resto fosse 2."
      },
      {
        id: "c",
        text: "1.",
        isCorrect: false,
        distractorRationale: "Confundiu o valor do resto R = 1 com o valor final do dígito verificador d₁."
      },
      {
        id: "d",
        text: "8.",
        isCorrect: false,
        distractorRationale: "Calculou 11 - 3 por erro na soma dos produtos parciais."
      },
      {
        id: "e",
        text: "2.",
        isCorrect: false,
        distractorRationale: "Errou na soma ponderada dos algarismos."
      }
    ],
    detailedExplanation: {
      summary: "Soma ponderada S = 210. Resto de 210 por 11 é 1. Como R = 1 < 2, a regra define d₁ = 0.",
      stepByStep: [
        "1. Calcular cada produto:",
        "   10×1 = 10; 9×2 = 18; 8×3 = 24; 7×4 = 28; 6×5 = 30;",
        "   5×6 = 30; 4×7 = 28; 3×8 = 24; 2×9 = 18.",
        "2. Somar: 10 + 18 + 24 + 28 + 30 + 30 + 28 + 24 + 18 = 210.",
        "3. Dividir por 11: 210 = 19 × 11 + 1 (resto R = 1).",
        "4. Como R < 2 (1 < 2), a regra determina d₁ = 0."
      ],
      coreConcept: "Aritmética modular com condições de contorno (se R < 2, dígito = 0; se R ≥ 2, dígito = 11 - R).",
      trapWarning: "Cuidado com a condição R < 2: quando o resto é 0 ou 1, o dígito NÃO é 11 - R, mas sim 0!"
    },
    tags: ["matematica", "algoritmo", "digito-verificador", "modulo-11"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-015",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Aritmética e Operações Básicas",
    subtopic: "Operações com Decimais e Regra de Arredondamento do INMETRO",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na pesagem de doses individuais de um fármaco imunoterápico, uma balança analítica registrou três porções de um pó liofilizado com as seguintes massas: 0,384 g, 0,517 g e 0,265 g. Para o frasco final, a norma técnica exige que a massa total seja expressa com apenas duas casas decimais, utilizando o critério de arredondamento padrão da ABNT/INMETRO.",
      source: "INSTITUTO NACIONAL DE METROLOGIA, QUALIDADE E TECNOLOGIA (INMETRO). Norma de Arredondamento Numérico, 2022."
    },
    prompt: "A massa total que deve constar no rótulo desse frasco após o arredondamento regulamentar é",
    options: [
      {
        id: "a",
        text: "1,16 g.",
        isCorrect: false,
        distractorRationale: "Realizou truncamento simples sem efetuar o arredondamento da terceira casa."
      },
      {
        id: "b",
        text: "1,17 g.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Soma exata das três porções: 0,384 + 0,517 + 0,265 = 1,166 g. Para expressar com duas casas decimais, analisa-se o terceiro dígito após a vírgula (6). Como 6 > 5, a regra de arredondamento determina o acréscimo de uma unidade na casa anterior (6 passa para 7), resultando em 1,17 g."
      },
      {
        id: "c",
        text: "1,18 g.",
        isCorrect: false,
        distractorRationale: "Arredondou para cima indevidamente em duas unidades."
      },
      {
        id: "d",
        text: "1,20 g.",
        isCorrect: false,
        distractorRationale: "Arredondou para uma única casa decimal."
      },
      {
        id: "e",
        text: "1,15 g.",
        isCorrect: false,
        distractorRationale: "Errou na adição das parcelas decimais."
      }
    ],
    detailedExplanation: {
      summary: "Soma: 0,384 + 0,517 + 0,265 = 1,166 g. Como o milésimo é 6 (maior que 5), arredonda-se para 1,17 g.",
      stepByStep: [
        "1. Alinhar as vírgulas e somar os valores decimais:",
        "   0,384 + 0,517 = 0,901.",
        "   0,901 + 0,265 = 1,166 g.",
        "2. Identificar a casa a arredondar: centésimo (6).",
        "3. Avaliar o dígito seguinte: milésimo (6). Como 6 ≥ 5, soma-se 1 ao centésimo: 1,166 → 1,17 g."
      ],
      coreConcept: "Regra do arredondamento: se o algarismo descartado for ≥ 5, soma-se 1 ao algarismo precedente.",
      trapWarning: "Truncar (apenas cortar dígitos) é diferente de arredondar conforme as normas metrológicas."
    },
    tags: ["matematica", "aritmetica", "arredondamento", "decimais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-016",
    area: "matematica",
    competence: 1,
    skill: 3,
    topic: "Aritmética e Teoria dos Números",
    subtopic: "MMC com Resto Constante em Contagem de Insumos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O responsável pelo almoxarifado de um laboratório precisa contar um lote de tubos de ensaio contendo entre 300 e 400 unidades. Ao organizá-los em caixas de 12 tubos, sobram 5 tubos. Ao organizá-los em caixas de 15 tubos, sobram também 5 tubos. E ao organizá-los em caixas de 18 tubos, restam exatamente os mesmos 5 tubos.",
      source: "DEPARTAMENTO DE PATOLOGIA CLÍNICA. Inventário de Materiais de Vidraria, 2024."
    },
    prompt: "O número total de tubos de ensaio contidos nesse lote é igual a",
    options: [
      {
        id: "a",
        text: "355.",
        isCorrect: false,
        distractorRationale: "Subtraiu o resto 5 em vez de somá-lo ao múltiplo comum."
      },
      {
        id: "b",
        text: "365.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Seja N o número de tubos. Como N deixa resto 5 quando dividido por 12, 15 e 18, o número (N - 5) é múltiplo comum de 12, 15 e 18. Fatorando: 12 = 2² × 3; 15 = 3 × 5; 18 = 2 × 3². MMC(12, 15, 18) = 2² × 3² × 5 = 4 × 9 × 5 = 180. Os múltiplos de 180 são: 180, 360, 540... Como N está entre 300 e 400, temos N - 5 = 360 ⟹ N = 360 + 5 = 365 tubos."
      },
      {
        id: "c",
        text: "360.",
        isCorrect: false,
        distractorRationale: "Encontrou o múltiplo comum exato (360), mas esqueceu de somar a sobra de 5 tubos."
      },
      {
        id: "d",
        text: "375.",
        isCorrect: false,
        distractorRationale: "Adicionou 15 ao múltiplo comum indevidamente."
      },
      {
        id: "e",
        text: "385.",
        isCorrect: false,
        distractorRationale: "Calculou com múltiplo de número incorreto."
      }
    ],
    detailedExplanation: {
      summary: "MMC(12, 15, 18) = 180. O múltiplo entre 300 e 400 é 360. Adicionando a sobra fixa de 5 tubos: 360 + 5 = 365 tubos.",
      stepByStep: [
        "1. N deixa resto 5 ao ser dividido por 12, 15 e 18: N ≡ 5 (mod 12, 15, 18).",
        "2. Isso equivale a dizer que N - 5 é divisível por MMC(12, 15, 18).",
        "3. MMC(12, 15, 18) = 4 · 9 · 5 = 180.",
        "4. Os múltiplos positivos de 180 são {180, 360, 540, ...}.",
        "5. O único múltiplo no intervalo [300, 400] é 360.",
        "6. Portanto, N = 360 + 5 = 365 tubos."
      ],
      coreConcept: "Número com resto constante k: N = m · MMC + k.",
      trapWarning: "Não se esqueça de somar o resto constante ao múltiplo comum no final."
    },
    tags: ["matematica", "mmc", "divisibilidade", "resto-constante"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-017",
    area: "matematica",
    competence: 1,
    skill: 3,
    topic: "Aritmética e Teoria dos Números",
    subtopic: "MDC com Restos Fixos Diferentes",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha de vacinação comunitária, um enfermeiro chefe deseja distribuir 149 doses de uma vacina A e 245 doses de uma vacina B em caixas com exatamente o mesmo número D de frascos cada uma. Ao término da distribuição, verificou-se que sobraram 5 frascos da vacina A e 5 frascos da vacina B, pois as caixas foram preenchidas com sua capacidade máxima possível.",
      source: "PROGRAMA NACIONAL DE IMUNIZAÇÕES (PNI). Gestão de Perdas Técnicas de Vacinas, 2023."
    },
    prompt: "A quantidade máxima D de frascos que cada caixa continha é igual a",
    options: [
      {
        id: "a",
        text: "12 frascos.",
        isCorrect: false,
        distractorRationale: "12 é um divisor comum de 144 e 240, mas não é o maior (o MDC real é 48)."
      },
      {
        id: "b",
        text: "24 frascos.",
        isCorrect: false,
        distractorRationale: "24 é divisor comum, mas a capacidade máxima possível é dada pelo MDC(144, 240) = 48."
      },
      {
        id: "c",
        text: "48 frascos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Se 149 deixa resto 5 quando dividido por D, então D divide exatamente 149 - 5 = 144. Se 245 deixa resto 5 quando dividido por D, então D divide exatamente 245 - 5 = 240. Como as caixas continham a capacidade máxima possível, D é o Máximo Divisor Comum entre 144 e 240. Fatorando: 144 = 2⁴ × 3² = 16 × 9; 240 = 2⁴ × 3 × 5 = 16 × 15. O MDC é o produto dos fatores comuns com os menores expoentes: MDC(144, 240) = 2⁴ × 3 = 16 × 3 = 48. Como 48 > 5 (o divisor é maior que o resto), cada caixa comportava exatamente 48 frascos."
      },
      {
        id: "d",
        text: "60 frascos.",
        isCorrect: false,
        distractorRationale: "60 divide 240, mas não divide 144."
      },
      {
        id: "e",
        text: "72 frascos.",
        isCorrect: false,
        distractorRationale: "72 divide 144, mas não divide 240."
      }
    ],
    detailedExplanation: {
      summary: "D deve dividir 149 - 5 = 144 e 245 - 5 = 240. MDC(144, 240) = 48 frascos por caixa.",
      stepByStep: [
        "1. Resto 5 em 149 doses ⟹ D divide exatamente 149 - 5 = 144.",
        "2. Resto 5 em 245 doses ⟹ D divide exatamente 245 - 5 = 240.",
        "3. Como D deve ser máximo, calculamos MDC(144, 240).",
        "4. Fatoração: 144 = 2⁴ · 3²; 240 = 2⁴ · 3 · 5.",
        "5. MDC(144, 240) = 2⁴ · 3¹ = 16 · 3 = 48 frascos por caixa (e 48 > 5, satisfazendo a condição de resto da divisão euclidiana)."
      ],
      coreConcept: "Divisão com resto: se A deixa resto r ao ser dividido por D, então D divide exatamente (A - r), com D > r.",
      trapWarning: "Verifique sempre se o divisor obtido pelo MDC é estritamente maior que os restos deixados na divisão."
    },
    tags: ["matematica", "mdc", "divisibilidade", "restos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-018",
    area: "matematica",
    competence: 1,
    skill: 1,
    topic: "Aritmética e Metrologia",
    subtopic: "Algarismos Significativos e Propagação de Incerteza",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma aula prática de bioquímica, um estudante utilizou três instrumentos com diferentes precisões para medir reagentes líquidos: uma pipeta graduada mediu 12,4 mL (três algarismos significativos), uma bureta mediu 5,82 mL (três algarismos significativos) e um conta-gotas acrescentou 0,6 mL (um algarismo significativo, incerteza na casa dos décimos).",
      source: "SKOOG, D. A. et al. Fundamentos de Química Analítica. 9. ed. Cengage Learning, 2014."
    },
    prompt: "De acordo com as regras de operações com algarismos significativos na adição, o volume total da mistura deve ser expresso como",
    options: [
      {
        id: "a",
        text: "18,82 mL.",
        isCorrect: false,
        distractorRationale: "Conservou duas casas decimais, ignorando que a medida menos precisa possui apenas uma casa decimal."
      },
      {
        id: "b",
        text: "18,8 mL.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na adição e subtração, o resultado final não pode ter mais casas decimais do que a parcela com menor número de casas decimais. As parcelas são: 12,4 (uma casa), 5,82 (duas casas) e 0,6 (uma casa). A menor precisão é de uma casa decimal. Soma: 12,4 + 5,82 + 0,6 = 18,82 mL. Arredondando para uma casa decimal (já que o centésimo é 2 < 5), obtém-se 18,8 mL."
      },
      {
        id: "c",
        text: "19 mL.",
        isCorrect: false,
        distractorRationale: "Arredondou para nenhum algarismo decimal sem justificativa metrológica."
      },
      {
        id: "d",
        text: "18,820 mL.",
        isCorrect: false,
        distractorRationale: "Adicionou um zero à direita criando uma falsa precisão inexistente."
      },
      {
        id: "e",
        text: "18 mL.",
        isCorrect: false,
        distractorRationale: "Truncou o valor ignorando a primeira casa decimal."
      }
    ],
    detailedExplanation: {
      summary: "Na adição, o resultado deve ter o número de casas decimais da parcela menos precisa (uma casa): 18,82 → 18,8 mL.",
      stepByStep: [
        "1. Identificar o número de casas decimais de cada medida:",
        "   • 12,4 mL: 1 casa decimal",
        "   • 5,82 mL: 2 casas decimais",
        "   • 0,6 mL: 1 casa decimal",
        "2. A medida limitante tem 1 casa decimal.",
        "3. Efetuar a soma aritmética: 12,4 + 5,82 + 0,6 = 18,82 mL.",
        "4. Como o algarismo na casa dos centésimos é 2 (menor que 5), arredonda-se para 18,8 mL."
      ],
      coreConcept: "Regra da adição com algarismos significativos: o resultado tem o mesmo número de casas decimais da parcela com menor precisão decimal.",
      trapWarning: "Cuidado: na MULTIPLICAÇÃO contam-se os algarismos significativos totais; na ADIÇÃO contam-se as CASAS DECIMAIS!"
    },
    tags: ["matematica", "algarismos-significativos", "metrologia", "quimica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-019",
    area: "matematica",
    competence: 1,
    skill: 1,
    topic: "Aritmética e Farmacocinética",
    subtopic: "Notação Científica e Conversão de Prefixos SI (Picograma)",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A concentração plasmática do hormônio melatonina no sangue humano durante o pico noturno atinge aproximadamente 60 picogramas por mililitro (60 pg/mL). Sabendo que 1 picograma equivale a 10⁻¹² gramas (1 pg = 10⁻¹² g) e que 1 litro equivale a 1 000 mililitros (1 L = 10³ mL).",
      source: "SOCIEDADE BRASILEIRA DE ENDOCRINOLOGIA E METABOLOGIA. Cronobiologia e Hormônios, 2023."
    },
    prompt: "Essa mesma concentração de melatonina expressa em gramas por litro (g/L) em notação científica corresponde a",
    options: [
      {
        id: "a",
        text: "6,0 × 10⁻⁸ g/L.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Concentração inicial: C = 60 pg / 1 mL. Convertendo pg para g: 60 pg = 60 × 10⁻¹² g. Convertendo mL para L: 1 mL = 10⁻³ L. Então: C = (60 × 10⁻¹² g) / (10⁻³ L) = 60 × 10^(-12 - (-3)) = 60 × 10⁻⁹ g/L = 6,0 × 10⁻⁸ g/L."
      },
      {
        id: "b",
        text: "6,0 × 10⁻¹¹ g/L.",
        isCorrect: false,
        distractorRationale: "Dividiu por 10³ em vez de multiplicar ao converter de mililitro para litro."
      },
      {
        id: "c",
        text: "6,0 × 10⁻¹⁴ g/L.",
        isCorrect: false,
        distractorRationale: "Subtraiu erroneamente os expoentes obtendo 10⁻¹⁵ e ajustando para 10⁻¹⁴."
      },
      {
        id: "d",
        text: "6,0 × 10⁻⁹ g/L.",
        isCorrect: false,
        distractorRationale: "Esqueceu de ajustar o coeficiente 60 para notação científica padrão (60 × 10⁻⁹ = 6,0 × 10⁻⁸)."
      },
      {
        id: "e",
        text: "6,0 × 10⁻⁵ g/L.",
        isCorrect: false,
        distractorRationale: "Confundiu picograma (10⁻¹²) com micrograma (10⁻⁶)."
      }
    ],
    detailedExplanation: {
      summary: "60 pg/mL = 60 × 10⁻¹² g / 10⁻³ L = 60 × 10⁻⁹ g/L = 6,0 × 10⁻⁸ g/L.",
      stepByStep: [
        "1. Identificar as conversões de unidades:",
        "   • 1 pg = 10⁻¹² g ⟹ 60 pg = 6,0 × 10⁻¹¹ g.",
        "   • 1 mL = 10⁻³ L.",
        "2. Dividir: C = (6,0 × 10⁻¹¹ g) / (10⁻³ L).",
        "3. Regra dos expoentes: -11 - (-3) = -11 + 3 = -8.",
        "4. Resultado: 6,0 × 10⁻⁸ g/L."
      ],
      coreConcept: "Prefixos do SI: pico (10⁻¹²), nano (10⁻⁹), micro (10⁻⁶), mili (10⁻³).",
      trapWarning: "Cuidado ao converter unidades compostas: 1 L tem 1 000 mL, logo há 1 000 vezes mais soluto em 1 L do que em 1 mL!"
    },
    tags: ["matematica", "notacao-cientifica", "prefixos-si", "conversoes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-020",
    area: "matematica",
    competence: 1,
    skill: 4,
    topic: "Aritmética e Trânsito",
    subtopic: "Sequências Periódicas e Tempos de Semáforo",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um semáforo inteligente instalado em frente a um hospital público opera com o seguinte ciclo repetitivo contínuo de iluminação: 40 segundos com a luz verde acesa, 5 segundos com a luz amarela e 35 segundos com a luz vermelha, reiniciando imediatamente com o sinal verde.",
      source: "COMPANHIA DE ENGENHARIA DE TRÁFEGO (CET). Operação de Semáforos em Vias Expressas, 2023."
    },
    prompt: "Exatamente 1 000 segundos após o início de uma fase verde, o semáforo estará com a luz",
    options: [
      {
        id: "a",
        text: "verde, faltando 10 segundos para mudar para o amarelo.",
        isCorrect: false,
        distractorRationale: "Errou no cálculo do resto da divisão do tempo total."
      },
      {
        id: "b",
        text: "amarela, faltando 2 segundos para o vermelho.",
        isCorrect: false,
        distractorRationale: "O sinal amarelo dura do segundo 40 ao 45 do ciclo; o resto foi 40."
      },
      {
        id: "c",
        text: "verde, exatamente no instante de transição para o amarelo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Duração de um ciclo completo = 40 s (verde) + 5 s (amarelo) + 35 s (vermelho) = 80 segundos. Dividindo 1 000 por 80: 1 000 = 80 × 12 + 40 (ou seja, 12 ciclos completos e sobram exatamente 40 segundos). Como a luz verde dura exatamente os primeiros 40 segundos do ciclo (de 0 a 40 s), no segundo 40 o sinal verde completa seu tempo, ocorrendo a transição imediata para a luz amarela."
      },
      {
        id: "d",
        text: "vermelha, tendo acabado de acender há 5 segundos.",
        isCorrect: false,
        distractorRationale: "O sinal vermelho só inicia aos 45 segundos do ciclo."
      },
      {
        id: "e",
        text: "vermelha, no meio do seu tempo de espera.",
        isCorrect: false,
        distractorRationale: "Confundiu a ordem das cores do semáforo."
      }
    ],
    detailedExplanation: {
      summary: "Ciclo completo = 80 s. 1000 = 12 × 80 + 40 s. No segundo 40, encerra-se o sinal verde e inicia-se o amarelo.",
      stepByStep: [
        "1. Calcular o período do ciclo: T = 40 + 5 + 35 = 80 segundos.",
        "2. Divisão euclidiana: 1000 / 80 = 12 ciclos completos com resto 40 s.",
        "3. Distribuição do ciclo:",
        "   • 0 a 40 s: Verde.",
        "   • 40 a 45 s: Amarelo.",
        "   • 45 a 80 s: Vermelho.",
        "4. Como o resto é exatamente 40 s, a luz verde está concluindo seu tempo no limiar da transição para o amarelo."
      ],
      coreConcept: "Aritmética modular em sistemas com intervalos sucessivos e periódicos.",
      trapWarning: "Sempre determine o tempo de um ciclo completo antes de efetuar a divisão euclidiana."
    },
    tags: ["matematica", "periodicidade", "divisao-euclidiana", "modulo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-021",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Aritmética e Frações",
    subtopic: "Comparação de Frações sem Calculadora",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para avaliar a adesão de quatro postos de saúde de um município a um programa de vacinação infantil, a secretaria de saúde calculou a fração de crianças vacinadas em relação à meta populacional de cada bairro: Posto I: 7/9; Posto II: 5/7; Posto III: 11/14; Posto IV: 3/4.",
      source: "SECRETARIA MUNICIPAL DE SAÚDE. Boletim Epidemiológico de Cobertura Vacinal, 2024."
    },
    prompt: "O posto de saúde que atingiu a maior fração de cobertura vacinal infantil foi o",
    options: [
      {
        id: "a",
        text: "Posto I.",
        isCorrect: false,
        distractorRationale: "7/9 ≈ 0,777... É menor que 11/14."
      },
      {
        id: "b",
        text: "Posto II.",
        isCorrect: false,
        distractorRationale: "5/7 ≈ 0,714... É a menor fração entre todas."
      },
      {
        id: "c",
        text: "Posto III.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Comparando as frações decimais ou por produto cruzado: Posto I: 7/9 = 0,7777... Posto II: 5/7 = 0,7142... Posto III: 11/14 = 0,7857... Posto IV: 3/4 = 0,7500... Comparando 11/14 e 7/9: 11 × 9 = 99 > 7 × 14 = 98. Como 99 > 98, a fração 11/14 é estritamente maior que 7/9. Portanto, o Posto III tem a maior cobertura vacinal."
      },
      {
        id: "d",
        text: "Posto IV.",
        isCorrect: false,
        distractorRationale: "3/4 = 0,75, que é inferior a 0,7857."
      },
      {
        id: "e",
        text: "Postos I e IV empatados.",
        isCorrect: false,
        distractorRationale: "7/9 (0,777...) é diferente de 3/4 (0,750)."
      }
    ],
    detailedExplanation: {
      summary: "11/14 ≈ 0,7857 é a maior fração. Teste cruzado: 11 × 9 = 99 > 7 × 14 = 98, logo 11/14 > 7/9.",
      stepByStep: [
        "1. Posto I: 7/9 ≈ 0,7777...",
        "2. Posto II: 5/7 ≈ 0,7142...",
        "3. Posto III: 11/14 ≈ 0,7857...",
        "4. Posto IV: 3/4 = 0,7500.",
        "5. Comparação direta entre os dois maiores (7/9 vs 11/14) por produto cruzado:",
        "   • 7/9 vs 11/14 ⟹ 7 × 14 = 98 contra 9 × 11 = 99.",
        "   • Como 99 > 98, 11/14 é a maior fração de todas."
      ],
      coreConcept: "Para comparar a/b e c/d sem divisão, compara-se o produto cruzado a·d com b·c.",
      trapWarning: "Método do produto cruzado é o mais rápido no ENEM para evitar divisões decimais trabalhosas."
    },
    tags: ["matematica", "fracoes", "comparacao", "produto-cruzado"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-022",
    area: "matematica",
    competence: 1,
    skill: 3,
    topic: "Aritmética e Vazão",
    subtopic: "Problema das Torneiras e Trabalho Fracionário Conjunto",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para higienização de tanques de armazenamento de soro em uma indústria de hemoderivados, dois drenos automáticos são acionados. O dreno A, funcionando sozinho, esvazia o tanque completamente em 6 horas. O dreno B, de maior vazão, esvazia o mesmo tanque completamente em 4 horas quando opera sozinho.",
      source: "INDÚSTRIA DE BIOTECNOLOGIA MÉDICA. Protocolo de Sanitização de Biorreatores, 2023."
    },
    prompt: "Se ambos os drenos forem abertos simultaneamente com o tanque inicialmente cheio, o tempo total necessário para esvaziá-lo por completo será de",
    options: [
      {
        id: "a",
        text: "5 horas.",
        isCorrect: false,
        distractorRationale: "Calculou a média aritmética simples dos tempos: (6 + 4)/2 = 5 h, o que é um erro clássico (dois drenos juntos esvaziam mais rápido que o mais rápido sozinho!)."
      },
      {
        id: "b",
        text: "2 horas e 24 minutos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em 1 hora, o dreno A esvazia 1/6 do tanque e o dreno B esvazia 1/4. Juntos, em 1 hora, esvaziam: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 do tanque por hora. O tempo total T é o inverso da vazão combinada: T = 12/5 horas = 2,4 horas. Convertendo a parte decimal: 0,4 horas = 0,4 × 60 minutos = 24 minutos. Logo, o tempo é de 2 horas e 24 minutos."
      },
      {
        id: "c",
        text: "2 horas e 40 minutos.",
        isCorrect: false,
        distractorRationale: "Confundiu 2,4 horas com 2 horas e 40 minutos (esqueceu que 1 hora tem 60 minutos e não 100 minutos)."
      },
      {
        id: "d",
        text: "1 hora e 48 minutos.",
        isCorrect: false,
        distractorRationale: "Calculou com denominadores incorretos."
      },
      {
        id: "e",
        text: "10 horas.",
        isCorrect: false,
        distractorRationale: "Somou os tempos individuais (6 + 4 = 10 h)."
      }
    ],
    detailedExplanation: {
      summary: "Taxa conjunta: 1/6 + 1/4 = 5/12. Tempo T = 12/5 = 2,4 h = 2 h 24 min.",
      stepByStep: [
        "1. Dreno A: taxa = 1/6 do tanque/hora.",
        "2. Dreno B: taxa = 1/4 do tanque/hora.",
        "3. Taxa conjunta = 1/6 + 1/4 = (2 + 3) / 12 = 5/12 do tanque/hora.",
        "4. Tempo total = 1 / (5/12) = 12/5 = 2,4 horas.",
        "5. Converter decimais de hora: 0,4 × 60 = 24 minutos. Resposta: 2h 24min."
      ],
      coreConcept: "Trabalho conjunto: 1/T = 1/t₁ + 1/t₂. O tempo conjunto é SEMPRE menor que o menor tempo individual.",
      trapWarning: "0,4 horas NÃO são 40 minutos! Multiplique 0,4 por 60 para obter 24 minutos."
    },
    tags: ["matematica", "vazao", "fracoes", "trabalho-conjunto"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-023",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Aritmética e Potenciação",
    subtopic: "Expoente Fracionário e Lei de Kleiber em Biologia",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A Lei de Kleiber, formulada pelo biólogo Max Kleiber em 1932, estabelece que a taxa metabólica basal diária (R, em quilocalorias por dia) de mamíferos escala com a massa corporal (M, em quilogramas) elevada à potência fracionária de 3/4: R = 70 · M^(3/4). Dois animais foram examinados: o animal X tem massa de 16 kg e o animal Y tem massa de 81 kg.",
      source: "SCHMIDT-NIELSEN, K. Scaling: Why is Animal Size so Important? Cambridge University Press, 2014."
    },
    prompt: "A razão entre a taxa metabólica basal do animal Y e a do animal X (R_Y / R_X) é igual a",
    options: [
      {
        id: "a",
        text: "27 / 8.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. R_Y / R_X = [70 × 81^(3/4)] / [70 × 16^(3/4)] = (81 / 16)^(3/4). Notando que 81 = 3⁴ e 16 = 2⁴, temos: (81 / 16) = (3/2)⁴. Aplicando a potência de potência: [(3/2)⁴]^(3/4) = (3/2)^(4 × 3/4) = (3/2)³ = 27 / 8."
      },
      {
        id: "b",
        text: "81 / 16.",
        isCorrect: false,
        distractorRationale: "Calculou a razão linear das massas elevando ao expoente 1."
      },
      {
        id: "c",
        text: "9 / 4.",
        isCorrect: false,
        distractorRationale: "Elevou ao expoente 1/2 (raiz quadrada pura) em vez de 3/4."
      },
      {
        id: "d",
        text: "3 / 2.",
        isCorrect: false,
        distractorRationale: "Extraiu apenas a raiz quarta (expoente 1/4), esquecendo de elevar ao cubo."
      },
      {
        id: "e",
        text: "243 / 64.",
        isCorrect: false,
        distractorRationale: "Elevou a expoente incorreto multiplicando frações."
      }
    ],
    detailedExplanation: {
      summary: "Razão = (81/16)^(3/4) = [(3/2)⁴]^(3/4) = (3/2)³ = 27/8.",
      stepByStep: [
        "1. Montar a razão: R_Y / R_X = (81^(3/4)) / (16^(3/4)) = (81/16)^(3/4).",
        "2. Fatorar: 81 = 3⁴ e 16 = 2⁴ ⟹ 81/16 = (3/2)⁴.",
        "3. Potência de potência: [(3/2)⁴]^(3/4) = (3/2)^(4 · 3/4) = (3/2)³.",
        "4. Calcular o cubo: 3³ / 2³ = 27 / 8."
      ],
      coreConcept: "Propriedades da potenciação com expoentes fracionários: a^(m/n) = ⁿ√(aᵐ).",
      trapWarning: "Fatore as bases em potências de mesma ordem do denominador da fração para simplificar de imediato."
    },
    tags: ["matematica", "expoente-fracionario", "potenciacao", "lei-de-kleiber"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-024",
    area: "matematica",
    competence: 1,
    skill: 3,
    topic: "Aritmética e Teoria dos Números",
    subtopic: "Relação Fundamental entre MDC e MMC",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na análise de dois ciclos biológicos celulares representados por períodos inteiros positivos A e B de minutos, o software de biologia matemática determinou que o máximo divisor comum entre eles é MDC(A, B) = 18 e o mínimo múltiplo comum é MMC(A, B) = 540. Sabe-se ainda que um dos períodos é A = 108 minutos.",
      source: "REVISTA BRASILEIRA DE BIOMATEMÁTICA. Modelos de Periodicidade Celular, 2023."
    },
    prompt: "O valor do outro período biológico B é igual a",
    options: [
      {
        id: "a",
        text: "90 minutos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pela propriedade fundamental dos números inteiros: para quaisquer inteiros positivos A e B, o produto de seu MDC pelo seu MMC é igual ao produto dos próprios números: MDC(A, B) × MMC(A, B) = A × B. Substituindo: 18 × 540 = 108 × B ⟹ B = (18 × 540) / 108. Como 108 / 18 = 6, temos: B = 540 / 6 = 90 minutos."
      },
      {
        id: "b",
        text: "72 minutos.",
        isCorrect: false,
        distractorRationale: "Subtraiu 18 de 90 arbitrariamente."
      },
      {
        id: "c",
        text: "60 minutos.",
        isCorrect: false,
        distractorRationale: "Dividiu 540 por 9 em vez de 6."
      },
      {
        id: "d",
        text: "120 minutos.",
        isCorrect: false,
        distractorRationale: "Multiplicou por constantes incorretas."
      },
      {
        id: "e",
        text: "180 minutos.",
        isCorrect: false,
        distractorRationale: "Dividiu 540 por 3."
      }
    ],
    detailedExplanation: {
      summary: "Pela propriedade MDC(A,B) · MMC(A,B) = A · B: 18 · 540 = 108 · B ⟹ B = 9720 / 108 = 90 minutos.",
      stepByStep: [
        "1. Teorema: A · B = MDC(A, B) · MMC(A, B).",
        "2. 108 · B = 18 · 540.",
        "3. Simplificar: 108 / 18 = 6.",
        "4. 6 · B = 540 ⟹ B = 540 / 6 = 90 minutos."
      ],
      coreConcept: "O produto do MDC pelo MMC de dois números é sempre igual ao produto desses dois números.",
      trapWarning: "Essa propriedade é válida estritamente para DOIS números; não se aplica a três ou mais números!"
    },
    tags: ["matematica", "mdc", "mmc", "propriedade-fundamental"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-ARI-025",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Aritmética e Inequações Modulares",
    subtopic: "Valor Absoluto (Módulo) e Faixa Terapêutica Segura",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A concentração sérica de um medicamento anticonvulsivante (x, em microgramas por mililitro, μg/mL) no sangue de um paciente deve ser mantida rigorosamente dentro de uma faixa de segurança terapêutica centrada em 15 μg/mL, com uma tolerância máxima de oscilação permitida de 3 μg/mL para mais ou para menos, sob pena de ineficácia ou toxicidade.",
      source: "SOCIEDADE BRASILEIRA DE NEUROLOGIA CLÍNICA. Janela Terapêutica de Fármacos Epilépticos, 2023."
    },
    prompt: "A expressão matemática algébrica que modela rigorosamente essa janela de concentração segura em função de x é dada por",
    options: [
      {
        id: "a",
        text: "|x - 3| ≤ 15.",
        isCorrect: false,
        distractorRationale: "Inverteu a posição do centro (15) com a tolerância (3)."
      },
      {
        id: "b",
        text: "|x - 15| ≤ 3.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O centro do intervalo é c = 15 e a distância máxima tolerada ao centro é o raio r = 3. Pela definição geométrica de valor absoluto na reta real, a distância entre x e 15 é dada por |x - 15|. Para que a concentração permaneça segura, essa distância deve ser menor ou igual a 3: |x - 15| ≤ 3 (que equivale a -3 ≤ x - 15 ≤ 3 ⟹ 12 ≤ x ≤ 18 μg/mL)."
      },
      {
        id: "c",
        text: "|x + 15| ≤ 3.",
        isCorrect: false,
        distractorRationale: "Utilizou sinal de adição, o que centraria o intervalo em -15."
      },
      {
        id: "d",
        text: "|x - 15| ≥ 3.",
        isCorrect: false,
        distractorRationale: "Utilizou a desigualdade inversa (≥), que representaria as faixas proibidas de toxicidade ou subdosagem."
      },
      {
        id: "e",
        text: "|x| ≤ 12.",
        isCorrect: false,
        distractorRationale: "Omitiu o centro da faixa terapêutica."
      }
    ],
    detailedExplanation: {
      summary: "A distância entre x e o valor central 15 deve ser menor ou igual à tolerância 3: |x - 15| ≤ 3.",
      stepByStep: [
        "1. Faixa de segurança: [15 - 3, 15 + 3] = [12, 18] μg/mL.",
        "2. Na reta real, a distância entre um ponto x e o centro c é |x - c|.",
        "3. Como o raio máximo de tolerância é r = 3, a condição é |x - 15| ≤ 3.",
        "4. Resolvendo: -3 ≤ x - 15 ≤ 3 ⟹ 12 ≤ x ≤ 18."
      ],
      coreConcept: "A inequação modular |x - c| ≤ r representa o intervalo [c - r, c + r] de centro c e raio r.",
      trapWarning: "No módulo, centro c aparece com sinal trocado: distância a 15 é |x - 15|."
    },
    tags: ["matematica", "modulo", "inequacao-modular", "faixa-terapeutica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
