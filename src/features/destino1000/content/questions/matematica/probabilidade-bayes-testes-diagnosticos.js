/**
 * BANCO DE QUESTÕES ENEM: Probabilidade Condicional, Teorema de Bayes e Testes Diagnósticos
 * Área: Matemática e suas Tecnologias
 * Disciplina: Matemática (Estatística e Probabilidade)
 * Quantidade: 25 Questões Inéditas de Alta Fidelidade ENEM (MAT-BAY-001 a MAT-BAY-025)
 * Regra Estrita: ZERO termos de deslocamento turístico. Foco em árvores de probabilidade,
 * Teorema de Bayes, sensibilidade, especificidade, VPP, VPN, genética e inferência clínica.
 */

export const QUESTIONS_PROBABILIDADE_BAYES = [
  {
    id: "MAT-BAY-001",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Definição de Probabilidade Condicional em Tabela 2x2",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um hospital de referência, 200 pacientes foram submetidos a um teste rápido sorológico para detecção de anticorpos IgG contra determinado patógeno. Os resultados foram confrontados com o exame padrão-ouro (PCR de alta sensibilidade) e tabulados a seguir:\n• PCR Positivo (Doente): 45 apresentaram Teste Rápido Positivo e 5 apresentaram Teste Rápido Negativo (total = 50 doentes).\n• PCR Negativo (Sadio): 15 apresentaram Teste Rápido Positivo e 135 apresentaram Teste Rápido Negativo (total = 150 sadios).\nTotal de pacientes testados: 200.",
      source: "Manual de Epidemiologia Clínica e Avaliação Diagnóstica, 2026."
    },
    prompt: "Selecionando-se aleatoriamente um paciente dentre aqueles que obtiveram resultado POSITIVO no Teste Rápido, a probabilidade condicional de que esse paciente esteja verdadeiramente doente (PCR Positivo) é igual a:",
    options: [
      {
        id: "a",
        text: "22,5%.",
        isCorrect: false,
        distractorRationale: "Calculou 45 / 200 = 0,225 (probabilidade conjunta em relação ao total da amostra), ignorando a condição de ter testado positivo."
      },
      {
        id: "b",
        text: "75,0%.",
        isCorrect: true,
        distractorRationale: "Correto: O espaço amostral reduz-se exclusivamente aos pacientes com Teste Rápido Positivo. Total de testes positivos = 45 (doentes) + 15 (sadios) = 60 pacientes. Dentre esses 60, o número de verdadeiros doentes é 45. Logo, P(Doente | Teste +) = 45 / 60 = 3 / 4 = 0,75 = 75,0%. Trata-se do Valor Preditivo Positivo (VPP)."
      },
      {
        id: "c",
        text: "90,0%.",
        isCorrect: false,
        distractorRationale: "Calculou a sensibilidade (45 / 50 = 0,90), que é a probabilidade do teste dar positivo dado que o paciente é doente, e não o inverso."
      },
      {
        id: "d",
        text: "25,0%.",
        isCorrect: false,
        distractorRationale: "Calculou a proporção de falsos positivos no universo de sadios (15 / 60 ou 50 / 200)."
      },
      {
        id: "e",
        text: "30,0%.",
        isCorrect: false,
        distractorRationale: "Calculou 60 / 200 = 30%, que é a probabilidade de um teste qualquer ser positivo."
      }
    ],
    detailedExplanation: {
      summary: "A probabilidade condicional P(A|B) reduz o espaço amostral ao evento B. Dentre os 60 pacientes com teste positivo, 45 eram doentes, gerando P = 45/60 = 75%.",
      stepByStep: [
        "1. Identificar o novo espaço amostral reduzido (condição B): Pacientes com teste rápido positivo.",
        "2. Calcular o total de testes positivos: n(Teste+) = 45 + 15 = 60 pacientes.",
        "3. Identificar os casos favoráveis (evento A): Pacientes que têm teste positivo E são doentes (PCR+): n(A ∩ B) = 45.",
        "4. Aplicar a fórmula da probabilidade condicional: P(Doente | Teste+) = 45 / 60 = 3/4 = 0,75 = 75,0%."
      ],
      coreConcept: "A probabilidade condicional P(A|B) restringe o denominador exclusivamente às ocorrências da condição B.",
      trapWarning: "Cuidado: Nunca divida pelo total geral (200) quando a questão pede 'dentre aqueles que...', pois isso é a probabilidade da intersecção, não a condicional!"
    },
    tags: ["probabilidade-condicional", "tabela-contingencia", "testes-diagnosticos", "vpp", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-002",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Sensibilidade e Especificidade de Testes Laboratoriais",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em metrologia diagnóstica biomédica, dois parâmetros intrínsecos definem o desempenho de um exame:\n• Sensibilidade (S): Probabilidade de o teste resultar positivo quando o indivíduo é portador da enfermidade: S = P(Teste+ | Doente).\n• Especificidade (E): Probabilidade de o teste resultar negativo quando o indivíduo NÃO possui a enfermidade: E = P(Teste- | Sadio).\nUm ensaio clínico avaliou 500 indivíduos com confirmação genética prévia:\n• 100 indivíduos portavam a mutação (doentes), dos quais 92 testaram positivo e 8 testaram negativo.\n• 400 indivíduos eram sadios (sem mutação), dos quais 380 testaram negativo e 20 testaram positivo.",
      source: "Bioestatística e Ensaios Clínicos, 2026."
    },
    prompt: "Com base nesses dados amostrais, a Sensibilidade e a Especificidade do teste laboratorial são, respectivamente:",
    options: [
      {
        id: "a",
        text: "92% e 95%.",
        isCorrect: true,
        distractorRationale: "Correto: Sensibilidade = Verdadeiros Positivos / Total de Doentes = 92 / 100 = 0,92 = 92%. Especificidade = Verdadeiros Negativos / Total de Sadios = 380 / 400 = 38 / 40 = 0,95 = 95%."
      },
      {
        id: "b",
        text: "92% e 80%.",
        isCorrect: false,
        distractorRationale: "Calculou a proporção de sadios na amostra total (400 / 500 = 80%) em vez da especificidade."
      },
      {
        id: "c",
        text: "82,1% e 97,9%.",
        isCorrect: false,
        distractorRationale: "Calculou o Valor Preditivo Positivo (92 / 112 = 82,1%) e o Valor Preditivo Negativo (380 / 388 = 97,9%)."
      },
      {
        id: "d",
        text: "18,4% e 76,0%.",
        isCorrect: false,
        distractorRationale: "Dividiu os verdadeiros positivos e verdadeiros negativos pelo total de 500 indivíduos."
      },
      {
        id: "e",
        text: "95% e 92%.",
        isCorrect: false,
        distractorRationale: "Inverteu os valores de sensibilidade e especificidade."
      }
    ],
    detailedExplanation: {
      summary: "Sensibilidade mede o acerto nos doentes (92/100 = 92%); Especificidade mede o acerto nos sadios (380/400 = 95%).",
      stepByStep: [
        "1. Identificar o grupo dos doentes: 100 pessoas. Destas, 92 testaram positivo.",
        "2. Calcular a Sensibilidade: S = 92 / 100 = 0,92 = 92%.",
        "3. Identificar o grupo dos sadios: 400 pessoas. Destas, 380 testaram negativo.",
        "4. Calcular a Especificidade: E = 380 / 400 = 0,95 = 95%."
      ],
      coreConcept: "Sensibilidade e Especificidade são características biológicas fixas do teste, independentes da prevalência da doença na população.",
      trapWarning: "Não confunda Sensibilidade (foco nos doentes) com Valor Preditivo Positivo (foco em quem recebeu teste positivo)!"
    },
    tags: ["sensibilidade", "especificidade", "testes-laboratoriais", "bioestatistica", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-003",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Teorema de Bayes e o Paradoxo dos Falsos Positivos",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma doença metabólica rara atinge exatamente 1% da população de uma cidade (prevalência = 0,01). Um laboratório desenvolveu um teste de triagem com excelente desempenho técnico:\n• Sensibilidade de 95% (detecta corretamente 95% dos doentes);\n• Especificidade de 90% (detecta corretamente 90% dos sadios; portanto, gera 10% de falsos positivos nos indivíduos sadios).\nUma pessoa é escolhida ao acaso na população da cidade, realiza o teste de triagem e o resultado é POSITIVO.",
      source: "Epidemiologia e Tomada de Decisão em Saúde, 2026."
    },
    prompt: "Utilizando o Teorema de Bayes, a probabilidade real de essa pessoa estar verdadeiramente doente, após ter recebido o resultado positivo, é mais próxima de:",
    options: [
      {
        id: "a",
        text: "8,75%.",
        isCorrect: true,
        distractorRationale: "Correto: Vamos simular uma população de 10.000 pessoas:\n• Doentes (1%): 100 pessoas. Testes positivos verdadeiros = 95% de 100 = 95 pessoas.\n• Sadios (99%): 9.900 pessoas. Falsos positivos = 10% de 9.900 = 990 pessoas.\n• Total de testes positivos: 95 + 990 = 1.085 pessoas.\n• Probabilidade de estar doente dado o teste positivo: P = 95 / 1.085 ≈ 0,08755 = 8,75%.\nEmbora o teste tenha 95% de sensibilidade, como a doença é rara, a imensa maioria dos testes positivos decorre de sadios falsamente rotulados!"
      },
      {
        id: "b",
        text: "95,0%.",
        isCorrect: false,
        distractorRationale: "Confundiu o resultado com a sensibilidade do teste, ignorando a prevalência e os falsos positivos."
      },
      {
        id: "c",
        text: "90,0%.",
        isCorrect: false,
        distractorRationale: "Confundiu com a especificidade do exame."
      },
      {
        id: "d",
        text: "50,0%.",
        isCorrect: false,
        distractorRationale: "Supôs erroneamente que metade dos positivos são doentes."
      },
      {
        id: "e",
        text: "1,0%.",
        isCorrect: false,
        distractorRationale: "Considerou apenas a prevalência inicial, esquecendo que o teste positivo aumenta a chance de 1% para 8,75%."
      }
    ],
    detailedExplanation: {
      summary: "Em doenças raras, mesmo testes com 95% de sensibilidade geram mais falsos positivos que verdadeiros positivos. P(Doente|+) = 95 / 1.085 ≈ 8,75%.",
      stepByStep: [
        "1. Fixar uma base de 10.000 pessoas para simplificar o cálculo:",
        "   - Doentes: 1% de 10.000 = 100 pessoas.",
        "   - Sadios: 99% de 10.000 = 9.900 pessoas.",
        "2. Calcular os testes positivos em cada grupo:",
        "   - Doentes com teste positivo (VP): 95% de 100 = 95.",
        "   - Sadios com teste positivo (FP): (100% - 90%) = 10% de 9.900 = 990.",
        "3. Calcular o total de pessoas com teste positivo: 95 + 990 = 1.085.",
        "4. Aplicar Bayes: P(Doente | Teste+) = 95 / 1.085 ≈ 0,08755 ≈ 8,75%."
      ],
      coreConcept: "O Teorema de Bayes demonstra que o Valor Preditivo Positivo depende criticamente da prevalência da doença na população avaliada.",
      trapWarning: "Este é o 'Paradoxo dos Falsos Positivos': a mente humana tende a achar que teste com 95% de sensibilidade significa 95% de chance de estar doente. No ENEM, calcule sempre a árvore de probabilidades!"
    },
    tags: ["teorema-de-bayes", "paradoxo-falsos-positivos", "probabilidade", "bioestatistica", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-004",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Teorema da Probabilidade Total com Linhas de Produção",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma indústria farmacêutica produz ampolas de soro fisiológico estéril em três máquinas automatizadas: M1, M2 e M3.\n• A máquina M1 é responsável por 50% de toda a produção diária, com taxa de defeito (ampola não estéril) de 2%.\n• A máquina M2 produz 30% da produção, com taxa de defeito de 3%.\n• A máquina M3 produz os 20% restantes, com taxa de defeito de 5%.\nAo final do expediente, todas as ampolas são reunidas em um depósito comum para controle de qualidade.",
      source: "Controle Estatístico de Qualidade Farmacêutica, 2026."
    },
    prompt: "Retirando-se aleatoriamente uma ampola do depósito comum, a probabilidade de que ela seja defeituosa (não estéril) é igual a:",
    options: [
      {
        id: "a",
        text: "10,0%.",
        isCorrect: false,
        distractorRationale: "Somou as taxas de defeito (2% + 3% + 5% = 10%), esquecendo de ponderar pela produção de cada máquina."
      },
      {
        id: "b",
        text: "3,33%.",
        isCorrect: false,
        distractorRationale: "Calculou a média aritmética simples das taxas (10% / 3 = 3,33%), ignorando os volumes desiguais."
      },
      {
        id: "c",
        text: "2,90%.",
        isCorrect: true,
        distractorRationale: "Correto: Pelo Teorema da Probabilidade Total: P(Defeito) = P(M1)·P(D|M1) + P(M2)·P(D|M2) + P(M3)·P(D|M3). P(Defeito) = (0,50 × 0,02) + (0,30 × 0,03) + (0,20 × 0,05) = 0,010 + 0,009 + 0,010 = 0,029 = 2,90%."
      },
      {
        id: "d",
        text: "1,50%.",
        isCorrect: false,
        distractorRationale: "Calculou apenas a contribuição da máquina M3 ou errou casas decimais."
      },
      {
        id: "e",
        text: "5,00%.",
        isCorrect: false,
        distractorRationale: "Considerou apenas a pior taxa de defeito da máquina M3."
      }
    ],
    detailedExplanation: {
      summary: "Pela Probabilidade Total, soma-se a probabilidade de cada máquina ponderada pela sua respectiva taxa: P = (0,50×0,02) + (0,30×0,03) + (0,20×0,05) = 2,90%.",
      stepByStep: [
        "1. Identificar as frações da partição: P(M1) = 0,50; P(M2) = 0,30; P(M3) = 0,20.",
        "2. Identificar as probabilidades condicionais de defeito: P(D|M1) = 0,02; P(D|M2) = 0,03; P(D|M3) = 0,05.",
        "3. Aplicar o Teorema da Probabilidade Total:",
        "   P(D) = (0,50 × 0,02) + (0,30 × 0,03) + (0,20 × 0,05)",
        "   P(D) = 0,010 + 0,009 + 0,010 = 0,029 = 2,90%."
      ],
      coreConcept: "O Teorema da Probabilidade Total decompõe um evento complexo na soma das probabilidades conjuntas de ramos mutuamente exclusivos.",
      trapWarning: "Nunca faça média aritmética simples de percentuais quando os pesos/volumes de cada máquina forem diferentes!"
    },
    tags: ["probabilidade-total", "arvore-de-probabilidade", "controle-de-qualidade", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-005",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Bayes Inverso: Identificando a Origem de uma Falha",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a mesma fábrica farmacêutica da questão anterior:\n• Máquina M1 produz 50% das ampolas, com 2% de defeito (contribuição de defeito = 0,010);\n• Máquina M2 produz 30% das ampolas, com 3% de defeito (contribuição de defeito = 0,009);\n• Máquina M3 produz 20% das ampolas, com 5% de defeito (contribuição de defeito = 0,010);\n• A probabilidade total de uma ampola ser defeituosa é de 2,9% (0,029).\nUm auditor do controle de qualidade inspeciona uma ampola ao acaso e constata que ela É DEFEITUOSA (não estéril).",
      source: "Auditoria Industrial e Confiabilidade de Processos, 2026."
    },
    prompt: "Dado que a ampola inspecionada é comprovadamente defeituosa, a probabilidade de que ela tenha sido fabricada pela Máquina M3 é igual a:",
    options: [
      {
        id: "a",
        text: "20,00%.",
        isCorrect: false,
        distractorRationale: "Confundiu com a probabilidade a priori da Máquina M3 (ela produz 20% do total)."
      },
      {
        id: "b",
        text: "34,48%.",
        isCorrect: true,
        distractorRationale: "Correto: Pelo Teorema de Bayes: P(M3 | Defeito) = P(M3 ∩ Defeito) / P(Defeito). P(M3 ∩ Defeito) = 0,20 × 0,05 = 0,010. P(Defeito) = 0,029. Logo, P(M3 | D) = 0,010 / 0,029 = 10 / 29 ≈ 0,3448 = 34,48%."
      },
      {
        id: "c",
        text: "50,00%.",
        isCorrect: false,
        distractorRationale: "Achou que as máquinas tinham taxas iguais."
      },
      {
        id: "d",
        text: "5,00%.",
        isCorrect: false,
        distractorRationale: "Confundiu com a taxa intrínseca de defeito da máquina M3 (5%)."
      },
      {
        id: "e",
        text: "10,00%.",
        isCorrect: false,
        distractorRationale: "Esqueceu de dividir pela probabilidade total de defeito (0,029)."
      }
    ],
    detailedExplanation: {
      summary: "Dado que o evento 'Defeito' ocorreu, a probabilidade a posteriori de M3 é calculada pela razão da contribuição de M3 sobre o defeito total: 10/29 ≈ 34,48%.",
      stepByStep: [
        "1. Probabilidade conjunta de ser de M3 e ter defeito: P(M3 ∩ D) = 0,20 × 0,05 = 0,010.",
        "2. Probabilidade total de defeito: P(D) = 0,029.",
        "3. Aplicar Bayes: P(M3 | D) = P(M3 ∩ D) / P(D) = 0,010 / 0,029 = 10 / 29 ≈ 0,3448.",
        "4. Converter para porcentagem: 34,48%."
      ],
      coreConcept: "A probabilidade a posteriori atualiza nossa crença após observarmos a evidência fática (neste caso, a presença do defeito).",
      trapWarning: "Embora M3 produza apenas 20% das ampolas, como sua taxa de falha é a mais alta (5%), ela responde por mais de 34% de todos os defeitos encontrados!"
    },
    tags: ["teorema-de-bayes", "probabilidade-a-posteriori", "auditoria", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-006",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Amostragem sem Reposição e Probabilidade Condicional",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma caixa térmica hospitalar há exatamente 10 frascos de vacinas idênticos em formato e rótulo, sendo 6 frascos contendo a vacina contra Influenza e 4 frascos contendo a vacina contra Febre Amarela. Uma enfermeira retira sucessivamente e sem reposição 2 frascos da caixa para aplicação imediata.",
      source: "Central de Imunização e Logística Hospitalar, 2026."
    },
    prompt: "A probabilidade de que ambos os frascos retirados sejam da vacina contra Influenza é igual a:",
    options: [
      {
        id: "a",
        text: "36%.",
        isCorrect: false,
        distractorRationale: "Calculou com reposição: (6/10) × (6/10) = 36/100 = 36%."
      },
      {
        id: "b",
        text: "33,3%.",
        isCorrect: true,
        distractorRationale: "Correto: Na primeira retirada, P(1º Influenza) = 6/10. Como não há reposição, restam 9 frascos na caixa, dos quais 5 são de Influenza. P(2º Influenza | 1º Influenza) = 5/9. P(Ambos) = (6/10) × (5/9) = 30 / 90 = 1/3 ≈ 33,3%."
      },
      {
        id: "c",
        text: "60%.",
        isCorrect: false,
        distractorRationale: "Considerou apenas a probabilidade de uma única retirada (6/10 = 60%)."
      },
      {
        id: "d",
        text: "13,3%.",
        isCorrect: false,
        distractorRationale: "Calculou a probabilidade de retirar dois frascos de Febre Amarela: (4/10) × (3/9) = 12/90 ≈ 13,3%."
      },
      {
        id: "e",
        text: "48%.",
        isCorrect: false,
        distractorRationale: "Calculou a probabilidade de tirar um de cada tipo em ordem específica: (6/10) × (4/9) = 24/90 ≈ 26,7% ou multiplicou por 2 sem reposição."
      }
    ],
    detailedExplanation: {
      summary: "Sem reposição, o espaço amostral e os casos favoráveis diminuem na segunda retirada: (6/10) × (5/9) = 30/90 = 1/3 (33,3%).",
      stepByStep: [
        "1. Primeira retirada: 6 frascos de Influenza em 10 totais: P(I1) = 6/10.",
        "2. Segunda retirada condicionada: Restam 5 frascos de Influenza em 9 totais: P(I2 | I1) = 5/9.",
        "3. Multiplicar pela regra do produto: P = (6/10) × (5/9) = 30 / 90 = 1/3.",
        "4. Converter para porcentagem: 1/3 ≈ 33,3%."
      ],
      coreConcept: "A amostragem sem reposição altera as probabilidades a cada etapa devido à redução do espaço amostral.",
      trapWarning: "Sempre verifique no enunciado se a extração é COM ou SEM reposição antes de calcular a fração!"
    },
    tags: ["amostragem-sem-reposicao", "probabilidade-condicional", "regra-do-produto", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-007",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Probabilidade Binomial em Genética Médica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A fibrose cística é uma doença genética autossômica recessiva grave. Um casal é formado por dois indivíduos heterozigotos portadores sadios (genótipo Aa). De acordo com as leis mendelianas clássicas, cada gestação desse casal tem probabilidade independente p = 1/4 (25%) de gerar uma criança afetada pela doença (genótipo aa), e probabilidade q = 3/4 (75%) de gerar uma criança sadia (genótipos AA ou Aa). O casal planeja ter exatamente 3 filhos.",
      source: "Genética Médica e Aconselhamento Reprodutivo, 2026."
    },
    prompt: "A probabilidade de que exatamente 1 dos 3 filhos nasça com fibrose cística é igual a:",
    options: [
      {
        id: "a",
        text: "9/64 (aproximadamente 14,1%).",
        isCorrect: false,
        distractorRationale: "Calculou apenas a probabilidade de uma ordem específica (1º afetado, 2º e 3º sadios): (1/4) × (3/4) × (3/4) = 9/64, esquecendo de multiplicar pelo coeficiente binomial C(3,1) = 3."
      },
      {
        id: "b",
        text: "27/64 (aproximadamente 42,2%).",
        isCorrect: true,
        distractorRationale: "Correto: Pela distribuição binomial: P(X = 1) = C(3, 1) × (p)¹ × (q)² = 3 × (1/4)¹ × (3/4)² = 3 × (1/4) × (9/16) = 27 / 64 ≈ 0,4219 = 42,2%."
      },
      {
        id: "c",
        text: "1/64 (aproximadamente 1,56%).",
        isCorrect: false,
        distractorRationale: "Calculou a probabilidade de todos os 3 filhos serem afetados: (1/4)³ = 1/64."
      },
      {
        id: "d",
        text: "37/64 (aproximadamente 57,8%).",
        isCorrect: false,
        distractorRationale: "Calculou a probabilidade de pelo menos um filho ser afetado: 1 - (3/4)³ = 1 - 27/64 = 37/64."
      },
      {
        id: "e",
        text: "25,0%.",
        isCorrect: false,
        distractorRationale: "Confundiu com a probabilidade de uma gestação isolada (1/4 = 25%)."
      }
    ],
    detailedExplanation: {
      summary: "Pela distribuição binomial, a chance de exatamente 1 afetado em 3 gestações é C(3,1) × (1/4)¹ × (3/4)² = 3 × 9/64 = 27/64 ≈ 42,2%.",
      stepByStep: [
        "1. Parâmetros binomiais: n = 3 filhos; k = 1 afetado; p = 1/4 (sucesso de ter a doença); q = 3/4 (sadio).",
        "2. Coeficiente binomial: C(3, 1) = 3! / (1! × 2!) = 3 (o filho afetado pode ser o 1º, o 2º ou o 3º).",
        "3. Aplicar a fórmula: P(X = 1) = 3 × (1/4)¹ × (3/4)²",
        "4. Calcular: P = 3 × (1/4) × (9/16) = 27 / 64 ≈ 42,2%."
      ],
      coreConcept: "A fórmula binomial P(X=k) = C(n,k)·p^k·(1-p)^(n-k) contabiliza todas as ordens possíveis em que o evento pode ocorrer.",
      trapWarning: "Erro clássico no ENEM: calcular a probabilidade de uma sequência (ex: Afetado-Sadio-Sadio) e esquecer de multiplicar pelo número de combinações da ordem C(n, k)!"
    },
    tags: ["distribuicao-binomial", "genetica-medica", "probabilidade", "fibrose-cistica", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-008",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Probabilidade do Evento Complementar ('Pelo Menos Um')",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma unidade de terapia intensiva (UTI), cada monitor cardíaco eletrônico possui uma chance independente de falha de bateria de 10% (p = 0,10) durante uma oscilação da rede elétrica, operando com 90% de confiabilidade (q = 0,90). Para garantir a segurança de um paciente crítico, a equipe técnica instalou um sistema redundante composto por 3 monitores cardíacos operando simultaneamente em paralelo.",
      source: "Engenharia Clínica e Segurança do Paciente em UTI, 2026."
    },
    prompt: "Durante uma oscilação na rede elétrica, a probabilidade de que PELO MENOS UM dos 3 monitores continue funcionando perfeitamente é igual a:",
    options: [
      {
        id: "a",
        text: "90,0%.",
        isCorrect: false,
        distractorRationale: "Considerou apenas a probabilidade de um único monitor."
      },
      {
        id: "b",
        text: "99,9%.",
        isCorrect: true,
        distractorRationale: "Correto: O evento complementar de 'pelo menos um funcionar' é 'todos os 3 falharem simultaneamente'. Como os monitores são independentes: P(Todos falharem) = 0,10 × 0,10 × 0,10 = 0,001 = 0,1%. Portanto, P(Pelo menos um funcionar) = 1 - P(Todos falharem) = 1 - 0,001 = 0,999 = 99,9%."
      },
      {
        id: "c",
        text: "72,9%.",
        isCorrect: false,
        distractorRationale: "Calculou a probabilidade de todos os 3 funcionarem: (0,90)³ = 0,729 = 72,9%."
      },
      {
        id: "d",
        text: "97,0%.",
        isCorrect: false,
        distractorRationale: "Erro de cálculo aritmético na subtração de decimais."
      },
      {
        id: "e",
        text: "30,0%.",
        isCorrect: false,
        distractorRationale: "Somou as falhas (0,10 + 0,10 + 0,10 = 0,30)."
      }
    ],
    detailedExplanation: {
      summary: "Para problemas de 'pelo menos um', usa-se o complementar: 1 - P(nenhum). P(todos falharem) = 0,1³ = 0,001. Logo, P = 1 - 0,001 = 99,9%.",
      stepByStep: [
        "1. Identificar o evento desejado: A = 'pelo menos um monitor funciona'.",
        "2. Identificar o evento complementar: A' = 'todos os 3 monitores falham'.",
        "3. Calcular P(A'): Como são independentes, P(A') = 0,10 × 0,10 × 0,10 = 0,001 (0,1%).",
        "4. Calcular P(A): P(A) = 1 - P(A') = 1 - 0,001 = 0,999 = 99,9%."
      ],
      coreConcept: "A técnica do evento complementar P(Pelo menos um) = 1 - P(Nenhum) economiza tempo e evita somas complexas no ENEM.",
      trapWarning: "Não calcule 'funciona 1' + 'funcionam 2' + 'funcionam 3' separadamente; subtrair o caso 'nenhum funciona' de 1 é muito mais rápido!"
    },
    tags: ["evento-complementar", "pelo-menos-um", "independencia-estocastica", "seguranca-hospitalar", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-009",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Valor Preditivo Negativo (VPN) e Decisão de Alta Hospitalar",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O Valor Preditivo Negativo (VPN) representa a probabilidade de um indivíduo ser verdadeiramente sadio dado que seu exame resultou NEGATIVO: VPN = P(Sadio | Teste-).\nEm uma triagem médica de infecção bacteriana aguda envolvendo 1.000 pacientes febris:\n• 200 pacientes estavam verdadeiramente infectados (doentes), dos quais 190 testaram positivo e 10 testaram negativo (falsos negativos);\n• 800 pacientes estavam sadios, dos quais 760 testaram negativo e 40 testaram positivo (falsos positivos).",
      source: "Protocolos Clínicos de Urgência e Emergência, 2026."
    },
    prompt: "Um paciente dessa triagem obtém resultado NEGATIVO no teste. A probabilidade de ele estar verdadeiramente livre da infecção (VPN) é mais próxima de:",
    options: [
      {
        id: "a",
        text: "98,7%.",
        isCorrect: true,
        distractorRationale: "Correto: Total de pacientes que obtiveram Teste Negativo = 10 (falsos negativos) + 760 (verdadeiros negativos) = 770 pacientes. Dentre esses 770 com resultado negativo, o número de verdadeiramente sadios é 760. VPN = 760 / 770 = 76 / 77 ≈ 0,9870 = 98,7%."
      },
      {
        id: "b",
        text: "95,0%.",
        isCorrect: false,
        distractorRationale: "Calculou a especificidade (760 / 800 = 95,0%)."
      },
      {
        id: "c",
        text: "76,0%.",
        isCorrect: false,
        distractorRationale: "Dividiu 760 pelo total geral de 1.000 pacientes."
      },
      {
        id: "d",
        text: "82,6%.",
        isCorrect: false,
        distractorRationale: "Calculou o Valor Preditivo Positivo: 190 / (190 + 40) = 190 / 230 ≈ 82,6%."
      },
      {
        id: "e",
        text: "99,0%.",
        isCorrect: false,
        distractorRationale: "Arredondou incorretamente sem efetuar a divisão 76 / 77."
      }
    ],
    detailedExplanation: {
      summary: "O VPN restringe o espaço aos testes negativos: dentre os 770 negativos, 760 são sadios, gerando VPN = 760/770 ≈ 98,7%.",
      stepByStep: [
        "1. Identificar o grupo com Teste Negativo: n(Teste-) = 10 (doentes) + 760 (sadios) = 770 pacientes.",
        "2. Identificar os casos favoráveis (sadios): n(Sadio ∩ Teste-) = 760.",
        "3. Calcular o VPN: VPN = 760 / 770 = 76 / 77 ≈ 0,98701.",
        "4. Expressar em porcentagem: aproximadamente 98,7%."
      ],
      coreConcept: "Um alto Valor Preditivo Negativo (VPN > 98%) é crucial para dar alta segura ao paciente com a certeza de que ele não está doente.",
      trapWarning: "Especificidade divide por quem é sadio (coluna); VPN divide por quem testou negativo (linha da tabela)!"
    },
    tags: ["vpn", "valor-preditivo-negativo", "testes-diagnosticos", "bioestatistica", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-010",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Independência de Eventos vs. Eventos Mutuamente Exclusivos",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois eventos A e B em um mesmo espaço amostral possuem probabilidades não nulas: P(A) = 0,40 e P(B) = 0,50. Sabe-se que a probabilidade da união entre eles é P(A ∪ B) = 0,70.",
      source: "Fundamentos Matemáticos da Teoria da Probabilidade, 2026."
    },
    prompt: "Com base nesses dados, a respeito da relação entre os eventos A e B, conclui-se corretamente que:",
    options: [
      {
        id: "a",
        text: "os eventos A e B são independentes, pois P(A ∩ B) = P(A) · P(B) = 0,20.",
        isCorrect: true,
        distractorRationale: "Correto: Pela regra da adição: P(A ∪ B) = P(A) + P(B) - P(A ∩ B) ⇒ 0,70 = 0,40 + 0,50 - P(A ∩ B) ⇒ P(A ∩ B) = 0,90 - 0,70 = 0,20. Testando a independência: P(A) · P(B) = 0,40 × 0,50 = 0,20. Como P(A ∩ B) = P(A) · P(B), os eventos A e B são estocasticamente independentes."
      },
      {
        id: "b",
        text: "os eventos A e B são mutuamente exclusivos, pois a intersecção entre eles é vazia.",
        isCorrect: false,
        distractorRationale: "Se fossem mutuamente exclusivos, P(A ∩ B) seria 0 e P(A ∪ B) seria 0,40 + 0,50 = 0,90, o que contradiz o dado P(A ∪ B) = 0,70."
      },
      {
        id: "c",
        text: "a probabilidade condicional P(A | B) é igual a 0,50.",
        isCorrect: false,
        distractorRationale: "P(A | B) = P(A ∩ B) / P(B) = 0,20 / 0,50 = 0,40 (que é igual a P(A), reforçando a independência)."
      },
      {
        id: "d",
        text: "os eventos são dependentes, pois a ocorrência de B altera a probabilidade de A.",
        isCorrect: false,
        distractorRationale: "P(A|B) = 0,40 = P(A); portanto, a ocorrência de B não altera a probabilidade de A."
      },
      {
        id: "e",
        text: "a intersecção entre A e B é igual a 0,10.",
        isCorrect: false,
        distractorRationale: "A intersecção é 0,40 + 0,50 - 0,70 = 0,20, e não 0,10."
      }
    ],
    detailedExplanation: {
      summary: "P(A ∩ B) = 0,40 + 0,50 - 0,70 = 0,20. Como P(A)·P(B) = 0,40 × 0,50 = 0,20, cumpre-se a definição matemática de independência estocástica.",
      stepByStep: [
        "1. Calcular a intersecção: P(A ∩ B) = P(A) + P(B) - P(A ∪ B) = 0,40 + 0,50 - 0,70 = 0,20.",
        "2. Testar se são mutuamente exclusivos: Como P(A ∩ B) = 0,20 ≠ 0, eles NÃO são exclusivos.",
        "3. Testar o critério de independência: P(A) × P(B) = 0,40 × 0,50 = 0,20.",
        "4. Comparar: P(A ∩ B) = P(A) × P(B) = 0,20. Portanto, são INDEPENDENTES."
      ],
      coreConcept: "Dois eventos são independentes se e somente se P(A ∩ B) = P(A)·P(B). Mutuamente exclusivos significa intersecção nula.",
      trapWarning: "Nunca confunda 'independentes' com 'mutuamente exclusivos'! Se dois eventos com probabilidades positivas são mutuamente exclusivos, eles são obrigatoriamente DEPENDENTES (se um ocorre, a chance do outro cai para zero)!"
    },
    tags: ["independencia", "mutuamente-exclusivos", "regra-da-adicao", "probabilidade", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-011",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Testes Sucessivos Independentes para Reduzir Falsos Positivos",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para confirmar o diagnóstico de uma condição neurológica sem recorrer a biópsias invasivas, um protocolo médico estabelece a aplicação de DOIS testes laboratoriais independentes em série (Teste 1 e Teste 2):\n• Cada teste isolado possui especificidade de 90% (taxa de falso positivo = 10% = 0,10);\n• Cada teste isolado possui sensibilidade de 90% (taxa de verdadeiro positivo = 90% = 0,90);\n• Um paciente é considerado diagnosticado apenas se obtiver resultado POSITIVO em AMBOS os testes (Teste 1 Positivo E Teste 2 Positivo).",
      source: "Diretrizes de Neurologia Diagnóstica e Medicina Baseada em Evidências, 2026."
    },
    prompt: "Supondo que os dois testes sejam biologicamente independentes, a taxa de falso positivo desse protocolo combinado em um indivíduo comprovadamente sadio é igual a:",
    options: [
      {
        id: "a",
        text: "1,0%.",
        isCorrect: true,
        distractorRationale: "Correto: Para que um indivíduo sadio seja classificado como falso positivo no protocolo combinado, ele precisa dar falso positivo no Teste 1 E no Teste 2. Como os testes são independentes: P(FP combinado) = P(FP1) × P(FP2) = 0,10 × 0,10 = 0,01 = 1,0%. A especificidade combinada salta para 99%."
      },
      {
        id: "b",
        text: "10,0%.",
        isCorrect: false,
        distractorRationale: "Considerou a taxa de falso positivo de apenas um único teste isolado."
      },
      {
        id: "c",
        text: "20,0%.",
        isCorrect: false,
        distractorRationale: "Somou as taxas de falso positivo (10% + 10% = 20%)."
      },
      {
        id: "d",
        text: "81,0%.",
        isCorrect: false,
        distractorRationale: "Calculou a sensibilidade combinada nos doentes: 0,90 × 0,90 = 0,81 = 81%."
      },
      {
        id: "e",
        text: "0,1%.",
        isCorrect: false,
        distractorRationale: "Errou a multiplicação decimal: 0,10 × 0,10 = 0,01 (1%), e não 0,001."
      }
    ],
    detailedExplanation: {
      summary: "Testes em série exigem confirmação em ambos. Para um sadio falhar em ambos: 0,10 × 0,10 = 0,01 = 1,0%. A taxa de falso positivo cai de 10% para 1%.",
      stepByStep: [
        "1. Taxa de falso positivo individual: 1 - Especificidade = 1 - 0,90 = 0,10 (10%).",
        "2. Critério do protocolo: Positivo no Teste 1 E Positivo no Teste 2.",
        "3. Como são independentes em indivíduos sadios: P(FP_total) = P(FP1) × P(FP2).",
        "4. Calcular: P = 0,10 × 0,10 = 0,010 = 1,0%."
      ],
      coreConcept: "A aplicação de testes diagnósticos em série (confirmação dupla) reduz drasticamente a taxa de falsos positivos pelo produto de probabilidades.",
      trapWarning: "Atenção: Testes em série reduzem falsos positivos (aumentam especificidade), mas também reduzem a sensibilidade combinada (0,90 × 0,90 = 81%)!"
    },
    tags: ["testes-em-serie", "teorema-de-bayes", "falsos-positivos", "bioestatistica", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-012",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Probabilidade Geométrica e Duração de Procedimentos",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois cirurgiões especialistas, Dr. Arthur e Dra. Beatriz, agendaram a utilização do único microscópio cirúrgico de um centro de transplantes durante a mesma manhã, entre as 8h e as 10h (um intervalo contínuo de 120 minutos). Cada cirurgia dura exatamente 30 minutos a partir do momento em que o cirurgião chega. Suponha que o instante de chegada de cada médico ocorra de maneira aleatória e uniforme e independente dentro dessa janela de 120 minutos.",
      source: "Otimização de Centros Cirúrgicos e Logística Hospitalar, 2026."
    },
    prompt: "Para que não haja conflito no uso do microscópio, um médico só pode utilizar o aparelho se o outro já tiver concluído sua cirurgia de 30 minutos. A probabilidade de que OCORRA UM CONFLITO (isto é, que o segundo médico chegue enquanto o primeiro ainda estiver operando) é igual a:",
    options: [
      {
        id: "a",
        text: "7/16 (43,75%).",
        isCorrect: true,
        distractorRationale: "Correto: Trata-se do clássico problema do encontro (probabilidade geométrica no plano). Sejam x e y os instantes de chegada (em minutos de 0 a 120). O espaço amostral é um quadrado de área S = 120 × 120 = 14.400. Há conflito se |x - y| < 30. O evento sem conflito (|x - y| ≥ 30) corresponde a dois triângulos retângulos nos cantos do quadrado, com catetos medindo 120 - 30 = 90 minutos. Área sem conflito = 2 × (90 × 90 / 2) = 8.100. Área com conflito = 14.400 - 8.100 = 6.300. Probabilidade de conflito = 6.300 / 14.400 = 63 / 144 = 7 / 16 = 0,4375 = 43,75%."
      },
      {
        id: "b",
        text: "25,00%.",
        isCorrect: false,
        distractorRationale: "Calculou simplesmente a razão entre a duração da cirurgia e o tempo total: 30 / 120 = 1/4 = 25%."
      },
      {
        id: "c",
        text: "56,25%.",
        isCorrect: false,
        distractorRationale: "Calculou a probabilidade de NÃO haver conflito: 9/16 = 56,25%."
      },
      {
        id: "d",
        text: "50,00%.",
        isCorrect: false,
        distractorRationale: "Supôs intuitivamente que a chance de conflito é metade."
      },
      {
        id: "e",
        text: "37,50%.",
        isCorrect: false,
        distractorRationale: "Calculou a área de apenas um dos triângulos."
      }
    ],
    detailedExplanation: {
      summary: "Por probabilidade geométrica: espaço total = 120² = 14.400. Área sem conflito (|x-y|≥30) = 90² = 8.100. Área de conflito = 6.300. P = 6.300/14.400 = 7/16 = 43,75%.",
      stepByStep: [
        "1. Representar no plano cartesiano: Eixo x (chegada de Arthur de 0 a 120) e Eixo y (chegada de Beatriz de 0 a 120).",
        "2. Área total do quadrado amostral: A_total = 120 × 120 = 14.400.",
        "3. Condição de NÃO haver conflito: |x - y| ≥ 30 (um chega pelo menos 30 min depois do outro).",
        "4. Essa região sem conflito forma 2 triângulos nos cantos de cateto 90 (120 - 30 = 90):",
        "   A_sem_conflito = 90 × 90 = 8.100.",
        "5. Área da faixa de conflito: A_conflito = 14.400 - 8.100 = 6.300.",
        "6. Probabilidade de conflito: P = 6.300 / 14.400 = 7 / 16 = 43,75%."
      ],
      coreConcept: "Problemas de variáveis contínuas uniformes de tempo são resolvidos por Probabilidade Geométrica calculando áreas no plano cartesiano.",
      trapWarning: "Cuidado: Nunca subtraia apenas 30/120: em duas dimensões (dois tempos independentes), a área é quadrática!"
    },
    tags: ["probabilidade-geometrica", "gestao-hospitalar", "distribuicao-uniforme", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-013",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Paradoxo de Monty Hall Adaptado à Seleção de Protocolos",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma simulação pedagógica para residentes de emergência médica, um instrutor apresenta 3 caixas opacas lacradas idênticas: A, B e C. Exatamente uma das caixas contém a chave que desativa um alarme de choque simulado (sucesso), e as outras duas contêm cartas em branco (insucesso).\n1. A residente Beatriz escolhe inicialmente a Caixa A (sem abri-la);\n2. O instrutor, que sabe exatamente onde a chave está, abre a Caixa C e mostra que ela está vazia;\n3. O instrutor então oferece a Beatriz a oportunidade de trocar sua escolha inicial (Caixa A) pela Caixa B restante.",
      source: "Raciocínio Clínico sob Incerteza e Teoria dos Jogos, 2026."
    },
    prompt: "Sob a perspectiva estrita da Teoria da Probabilidade e do Teorema de Bayes, se a residente Beatriz decidir TROCAR para a Caixa B, sua probabilidade de sucesso (encontrar a chave):",
    options: [
      {
        id: "a",
        text: "permanece inalterada em 1/2 (50%), pois restaram apenas duas caixas fechadas.",
        isCorrect: false,
        distractorRationale: "Essa é a clássica intuição errônea do problema de Monty Hall. Como o instrutor NÃO abriu uma caixa ao acaso (ele foi obrigado a abrir uma caixa vazia), a probabilidade não se divide igualmente em 50/50."
      },
      {
        id: "b",
        text: "dobra, passando de 1/3 (aproximadamente 33,3%) na Caixa A para 2/3 (aproximadamente 66,7%) na Caixa B.",
        isCorrect: true,
        distractorRationale: "Correto: A probabilidade de a chave estar na Caixa A escolhida inicialmente é de 1/3. A probabilidade de a chave estar no conjunto {B, C} é de 2/3. Quando o instrutor, munido de conhecimento prévio, elimina deliberadamente a Caixa C vazia, toda a probabilidade de 2/3 desse conjunto concentra-se exclusivamente na Caixa B. Trocar de caixa garante 2/3 (66,7%) de chance de vitória."
      },
      {
        id: "c",
        text: "diminui para 1/6 (aproximadamente 16,7%), pois o instrutor manipulou a dinâmica.",
        isCorrect: false,
        distractorRationale: "A troca aumenta as chances, nunca diminui."
      },
      {
        id: "d",
        text: "permanece fixada em 1/3 para qualquer uma das caixas restantes.",
        isCorrect: false,
        distractorRationale: "A soma das probabilidades das duas caixas restantes deve ser 1; se ambas fossem 1/3, a soma seria 2/3, o que viola o axioma de Kolmogorov."
      },
      {
        id: "e",
        text: "passa a ser de 100%, pois o instrutor confirmou a Caixa B como premiada.",
        isCorrect: false,
        distractorRationale: "Ainda existe 1/3 de chance de a Caixa A original estar premiada."
      }
    ],
    detailedExplanation: {
      summary: "No paradoxo de Monty Hall, manter a caixa tem 1/3 de chance; trocar para a outra caixa tem 2/3 de chance. Trocar dobra a probabilidade de sucesso.",
      stepByStep: [
        "1. No momento da escolha inicial: P(Caixa A tem a chave) = 1/3.",
        "2. Probabilidade de a chave estar nas outras caixas: P(B ou C) = 2/3.",
        "3. Ação do instrutor: Ele NÃO escolheu ao acaso; ele filtrou e descartou uma caixa vazia com conhecimento prévio.",
        "4. Atualização de Bayes: Os 2/3 de probabilidade concentram-se integralmente na Caixa B.",
        "5. Concluir: Trocar garante P(B) = 2/3 = 66,7%."
      ],
      coreConcept: "A ação de um observador informado que filtra opções altera a distribuição de probabilidades no Teorema de Bayes.",
      trapWarning: "A maioria das pessoas erra o Monty Hall achando que restaram 2 caixas e logo é 50/50. Entenda que a Caixa B 'herdou' a chance de C!"
    },
    tags: ["monty-hall", "teorema-de-bayes", "probabilidade-condicional", "tomada-de-decisao", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-014",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "União de Eventos Não Mutuamente Exclusivos em População Vacinada",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha de imunização em um município, levantou-se a cobertura vacinal dos idosos em relação a duas vacinas essenciais: Antigripal e Antipneumocócica. Os dados revelaram que:\n• 70% dos idosos tomaram a vacina Antigripal;\n• 50% dos idosos tomaram a vacina Antipneumocócica;\n• 40% dos idosos tomaram AMBAS as vacinas.",
      source: "Vigilância Epidemiológica Municipal, 2026."
    },
    prompt: "Selecionando-se aleatoriamente um idoso desse município, a probabilidade de que ele NÃO TENHA TOMADO NENHUMA das duas vacinas é igual a:",
    options: [
      {
        id: "a",
        text: "20%.",
        isCorrect: true,
        distractorRationale: "Correto: Pelo Princípio da Inclusão-Exclusão: P(Gripal ∪ Pneumo) = P(Gripal) + P(Pneumo) - P(Ambas) = 70% + 50% - 40% = 80%. Portanto, a porcentagem de idosos que tomaram ao menos uma vacina é de 80%. A probabilidade de não ter tomado nenhuma é o complementar: 100% - 80% = 20%."
      },
      {
        id: "b",
        text: "10%.",
        isCorrect: false,
        distractorRationale: "Calculou 50% - 40% = 10% (idosos que tomaram apenas antipneumocócica)."
      },
      {
        id: "c",
        text: "30%.",
        isCorrect: false,
        distractorRationale: "Calculou 70% - 40% = 30% (idosos que tomaram apenas antigripal)."
      },
      {
        id: "d",
        text: "40%.",
        isCorrect: false,
        distractorRationale: "Confundiu com a probabilidade dos que tomaram ambas."
      },
      {
        id: "e",
        text: "0%.",
        isCorrect: false,
        distractorRationale: "Somou 70% + 50% = 120% e achou que todos estavam vacinados."
      }
    ],
    detailedExplanation: {
      summary: "P(A ∪ B) = 70% + 50% - 40% = 80%. O complementar (nenhuma vacina) é 100% - 80% = 20%.",
      stepByStep: [
        "1. Calcular a união dos vacinados: P(G ∪ P) = P(G) + P(P) - P(G ∩ P).",
        "2. Substituir: P(G ∪ P) = 0,70 + 0,50 - 0,40 = 0,80 (80%).",
        "3. Calcular o complementar (nenhuma vacina): P(Nenhuma) = 1 - 0,80 = 0,20.",
        "4. Converter para porcentagem: 20%."
      ],
      coreConcept: "A regra da adição P(A ∪ B) = P(A) + P(B) - P(A ∩ B) evita contar duas vezes os elementos da intersecção.",
      trapWarning: "Nunca some diretamente 70% + 50% sem subtrair os 40% de quem tomou as duas vacinas!"
    },
    tags: ["regra-da-adicao", "diagrama-de-venn", "imunizacao", "probabilidade", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-015",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Árvore de Probabilidades com Risco Cumulativo em Cirurgia",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um procedimento cirúrgico cardíaco complexo dividido em duas etapas sucessivas:\n• A Etapa 1 apresenta probabilidade de complicação hemorrágica de 10% (0,10);\n• Se a Etapa 1 transcorrer SEM complicações, a Etapa 2 apresenta probabilidade de complicação de apenas 5% (0,05);\n• Contudo, se a Etapa 1 apresentar complicação hemorrágica, o paciente fica instável e a probabilidade de complicação na Etapa 2 sobe para 40% (0,40).",
      source: "Modelagem de Risco Cirúrgico e Anestesiologia, 2026."
    },
    prompt: "A probabilidade de que esse paciente conclua ambas as etapas do procedimento cirúrgico com COMPLICAÇÃO EM PELO MENOS UMA das duas etapas é igual a:",
    options: [
      {
        id: "a",
        text: "14,5%.",
        isCorrect: true,
        distractorRationale: "Correto: Vamos calcular pelo evento complementar: 'concluir AMBAS as etapas SEM NENHUMA complicação'. Para não ter complicação em nenhuma: P(Sem complicação na 1) = 1 - 0,10 = 0,90. P(Sem complicação na 2 | Sem complicação na 1) = 1 - 0,05 = 0,95. Probabilidade de sucesso total sem complicações = 0,90 × 0,95 = 0,855 = 85,5%. Portanto, a probabilidade de complicação em pelo menos uma das etapas é: 1 - 0,855 = 0,145 = 14,5%."
      },
      {
        id: "b",
        text: "15,0%.",
        isCorrect: false,
        distractorRationale: "Somou simplesmente 10% + 5% = 15% ignorando a dependência condicional."
      },
      {
        id: "c",
        text: "4,0%.",
        isCorrect: false,
        distractorRationale: "Calculou apenas a complicação em ambas: 0,10 × 0,40 = 0,04 = 4%."
      },
      {
        id: "d",
        text: "50,0%.",
        isCorrect: false,
        distractorRationale: "Somou 10% + 40% = 50%."
      },
      {
        id: "e",
        text: "85,5%.",
        isCorrect: false,
        distractorRationale: "Calculou a probabilidade de NÃO haver complicação em nenhuma etapa."
      }
    ],
    detailedExplanation: {
      summary: "P(Nenhuma complicação) = 0,90 × 0,95 = 0,855. Logo, P(Pelo menos uma complicação) = 1 - 0,855 = 14,5%.",
      stepByStep: [
        "1. Identificar o caminho limpo (sem nenhuma complicação):",
        "   - Etapa 1 sem complicação: P = 0,90.",
        "   - Etapa 2 sem complicação dado que a 1 foi limpa: P = 0,95.",
        "2. Probabilidade de sucesso total sem complicações: P(Limpo) = 0,90 × 0,95 = 0,855 (85,5%).",
        "3. Calcular o complementar (ao menos uma complicação):",
        "   P(Pelo menos uma) = 1 - P(Limpo) = 1 - 0,855 = 0,145.",
        "4. Converter para porcentagem: 14,5%."
      ],
      coreConcept: "Árvores de probabilidade com probabilidades condicionais dependentes refletem a realidade dinâmica de riscos médicos.",
      trapWarning: "Calcular diretamente pelo caminho do complementar economiza tempo precioso de prova!"
    },
    tags: ["arvore-de-probabilidade", "risco-cirurgico", "evento-complementar", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-016",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Lançamento de Dados e Espaço Amostral Restrito",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois dados cúbicos perfeitos e não viciados, com faces numeradas de 1 a 6, são lançados simultaneamente sobre uma mesa. O observador não vê os números obtidos, mas é informado com certeza de que a SOMA das duas faces voltadas para cima é um número MAIOR DO QUE 8.",
      source: "Teoria Clássica dos Jogos e Probabilidade, 2026."
    },
    prompt: "Com base nessa informação prévia, a probabilidade condicional de que pelo menos uma das faces seja o número 5 é igual a:",
    options: [
      {
        id: "a",
        text: "5/10 (50,0%).",
        isCorrect: true,
        distractorRationale: "Correto: O espaço amostral reduz-se aos pares com soma > 8 (somas 9, 10, 11 e 12):\n• Soma 9: (3,6), (4,5), (5,4), (6,3) [4 pares]\n• Soma 10: (4,6), (5,5), (6,4) [3 pares]\n• Soma 11: (5,6), (6,5) [2 pares]\n• Soma 12: (6,6) [1 par]\nTotal de pares no espaço reduzido = 4 + 3 + 2 + 1 = 10 pares.\nDentre esses 10 pares, os que contêm pelo menos um número 5 são:\n(4,5), (5,4), (5,5), (5,6), (6,5) [exatamente 5 pares].\nLogo, P = 5 / 10 = 1/2 = 50,0%."
      },
      {
        id: "b",
        text: "11/36 (aproximadamente 30,5%).",
        isCorrect: false,
        distractorRationale: "Calculou a probabilidade de sair pelo menos um 5 no espaço total de 36 pares, sem usar a condição de soma > 8."
      },
      {
        id: "c",
        text: "4/10 (40,0%).",
        isCorrect: false,
        distractorRationale: "Esqueceu de contar o par (5,5)."
      },
      {
        id: "d",
        text: "6/10 (60,0%).",
        isCorrect: false,
        distractorRationale: "Contou o par (5,5) duas vezes."
      },
      {
        id: "e",
        text: "5/36 (aproximadamente 13,9%).",
        isCorrect: false,
        distractorRationale: "Dividiu os 5 pares favoráveis pelo total geral de 36."
      }
    ],
    detailedExplanation: {
      summary: "Há 10 pares com soma > 8. Desses 10 pares, exatamente 5 contêm a face 5: (4,5), (5,4), (5,5), (5,6), (6,5). Logo, P = 5/10 = 50%.",
      stepByStep: [
        "1. Listar os pares com soma maior que 8:",
        "   - Soma 9: (3,6), (4,5), (5,4), (6,3) [4]",
        "   - Soma 10: (4,6), (5,5), (6,4) [3]",
        "   - Soma 11: (5,6), (6,5) [2]",
        "   - Soma 12: (6,6) [1]",
        "   Total do novo espaço amostral = 10.",
        "2. Identificar quais desses contêm a face 5: (4,5), (5,4), (5,5), (5,6), (6,5) = 5 pares.",
        "3. Calcular a probabilidade condicional: P = 5 / 10 = 50%."
      ],
      coreConcept: "A probabilidade condicional elimina todas as partes do espaço amostral original que não satisfazem a premissa fornecida.",
      trapWarning: "Cuidado ao contar pares como (5,5): ele contém a face 5, mas é um único evento no espaço amostral!"
    },
    tags: ["dados", "espaco-amostral-reduzido", "probabilidade-condicional", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-017",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Razão de Verossimilhança (Likelihood Ratio) e Odds",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na moderna medicina baseada em evidências, a Razão de Verossimilhança Positiva (RV+) mede quanto um resultado positivo aumenta as chances de o paciente estar doente, sendo dada pela fórmula:\nRV+ = Sensibilidade / (1 - Especificidade).\nUm teste de ressonância magnética cerebral para detecção precoce de esclerose múltipla apresenta:\n• Sensibilidade de 80% (0,80);\n• Especificidade de 95% (0,95; portanto, taxa de falso positivo = 1 - 0,95 = 0,05).",
      source: "Medicina Diagnóstica e Bioestatística Aplicada, 2026."
    },
    prompt: "O valor da Razão de Verossimilhança Positiva (RV+) desse exame de ressonância é igual a:",
    options: [
      {
        id: "a",
        text: "16.",
        isCorrect: true,
        distractorRationale: "Correto: RV+ = Sensibilidade / (1 - Especificidade) = 0,80 / (1 - 0,95) = 0,80 / 0,05 = 80 / 5 = 16. Isso significa que um resultado positivo é 16 vezes mais frequente em indivíduos doentes do que em indivíduos sadios."
      },
      {
        id: "b",
        text: "0,84.",
        isCorrect: false,
        distractorRationale: "Dividiu a sensibilidade pela especificidade: 0,80 / 0,95 ≈ 0,84."
      },
      {
        id: "c",
        text: "4.",
        isCorrect: false,
        distractorRationale: "Calculou 0,80 / 0,20 = 4."
      },
      {
        id: "d",
        text: "20.",
        isCorrect: false,
        distractorRationale: "Calculou 1 / 0,05 = 20."
      },
      {
        id: "e",
        text: "1,18.",
        isCorrect: false,
        distractorRationale: "Dividiu 0,95 por 0,80."
      }
    ],
    detailedExplanation: {
      summary: "RV+ = Sensibilidade / (1 - Especificidade) = 0,80 / 0,05 = 16. Um resultado positivo é 16 vezes mais provável num doente que num sadio.",
      stepByStep: [
        "1. Identificar a Sensibilidade: S = 0,80.",
        "2. Identificar a taxa de falso positivo: 1 - E = 1 - 0,95 = 0,05.",
        "3. Aplicar a fórmula da RV+: RV+ = 0,80 / 0,05.",
        "4. Efetuar a divisão: 80 / 5 = 16."
      ],
      coreConcept: "A Razão de Verossimilhança (Likelihood Ratio) combina sensibilidade e especificidade em um único número que quantifica o poder de confirmação de um teste.",
      trapWarning: "RV+ maior que 10 é considerada excelente evidência para confirmar diagnósticos na prática médica!"
    },
    tags: ["razao-de-verossimilhanca", "likelihood-ratio", "bioestatistica", "testes-diagnosticos", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-018",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Probabilidade Condicional com Baralho Padrão",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "De um baralho padrão de 52 cartas (composto por 4 naipes: ouros, copas, espadas e paus, com 13 cartas de cada naipe, sendo 3 figuras por naipe: valete, dama e rei), uma carta é retirada aleatoriamente. Sem revelar a carta, informa-se ao jogador que a carta sorteada É UMA FIGURA (valete, dama ou rei).",
      source: "Probabilidade Clássica e Espaços Amostrais Finitos, 2026."
    },
    prompt: "Sabendo-se que a carta retirada é uma figura, a probabilidade condicional de que ela seja do naipe de COPAS é igual a:",
    options: [
      {
        id: "a",
        text: "1/4 (25,0%).",
        isCorrect: true,
        distractorRationale: "Correto: Há 4 naipes com 3 figuras cada, totalizando 12 figuras no baralho (espaço amostral reduzido = 12). Dentre essas 12 figuras, exatamente 3 são do naipe de copas (valete de copas, dama de copas e rei de copas). P(Copas | Figura) = 3 / 12 = 1/4 = 25,0%."
      },
      {
        id: "b",
        text: "3/52 (aproximadamente 5,77%).",
        isCorrect: false,
        distractorRationale: "Dividiu as 3 figuras de copas pelo total de 52 cartas do baralho, ignorando a informação condicional dada."
      },
      {
        id: "c",
        text: "13/52 (25,0%), mas com espaço de 52 cartas.",
        isCorrect: false,
        distractorRationale: "A fração correta é 3/12, embora resulte no mesmo valor de 25% por simetria dos naipes."
      },
      {
        id: "d",
        text: "1/12 (aproximadamente 8,33%).",
        isCorrect: false,
        distractorRationale: "Considerou apenas uma única figura (ex: apenas a dama de copas)."
      },
      {
        id: "e",
        text: "1/13 (aproximadamente 7,69%).",
        isCorrect: false,
        distractorRationale: "Confundiu com a chance de retirar um valor numérico específico."
      }
    ],
    detailedExplanation: {
      summary: "Há 12 figuras no total. Dentre elas, 3 são de copas. Logo, P = 3/12 = 1/4 = 25%.",
      stepByStep: [
        "1. Identificar a condição: A carta é uma figura.",
        "2. Calcular o total de figuras no baralho: 4 naipes × 3 figuras = 12 cartas.",
        "3. Identificar quantas dessas figuras são de copas: 3 cartas (valete, dama, rei de copas).",
        "4. Calcular P(Copas | Figura) = 3 / 12 = 1/4 = 25%."
      ],
      coreConcept: "A simetria dos 4 naipes faz com que a probabilidade de qualquer naipe dado que saiu uma figura continue sendo 1/4.",
      trapWarning: "Sempre reduza o espaço amostral para as 12 figuras antes de montar a fração!"
    },
    tags: ["baralho", "probabilidade-condicional", "simetria", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-019",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Acurácia Global vs. Valor Preditivo em Doenças de Baixa Prevalência",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A Acurácia Global de um teste diagnóstico é a proporção de TODOS os resultados corretos (verdadeiros positivos + verdadeiros negativos) sobre o total de indivíduos testados:\nAcurácia = (VP + VN) / Total.\nConsidere um teste aplicado a 10.000 pessoas onde a prevalência da doença é de 2% (200 doentes e 9.800 sadios):\n• O teste diagnostica corretamente 180 dos 200 doentes (VP = 180, FN = 20);\n• O teste diagnostica corretamente 9.310 dos 9.800 sadios (VN = 9.310, FP = 490).",
      source: "Avaliação de Tecnologias em Saúde (ATS), 2026."
    },
    prompt: "Com base nesses dados, a Acurácia Global e o Valor Preditivo Positivo (VPP) desse teste são, respectivamente:",
    options: [
      {
        id: "a",
        text: "94,9% e 26,87%.",
        isCorrect: true,
        distractorRationale: "Correto: Acurácia Global = (VP + VN) / Total = (180 + 9.310) / 10.000 = 9.490 / 10.000 = 0,949 = 94,9%. VPP = VP / (VP + FP) = 180 / (180 + 490) = 180 / 670 ≈ 0,26865 = 26,87%. Note que, embora a acurácia global seja alta (quase 95%), menos de 27% das pessoas com teste positivo estão de fato doentes!"
      },
      {
        id: "b",
        text: "90,0% e 95,0%.",
        isCorrect: false,
        distractorRationale: "Calculou a sensibilidade (180/200 = 90%) e especificidade (9310/9800 = 95%)."
      },
      {
        id: "c",
        text: "94,9% e 90,0%.",
        isCorrect: false,
        distractorRationale: "Confundiu o VPP com a sensibilidade de 90%."
      },
      {
        id: "d",
        text: "99,0% e 50,0%.",
        isCorrect: false,
        distractorRationale: "Estimativas arbitrárias incorretas."
      },
      {
        id: "e",
        text: "85,0% e 26,87%.",
        isCorrect: false,
        distractorRationale: "Errou a soma da acurácia global."
      }
    ],
    detailedExplanation: {
      summary: "Acurácia = (180 + 9.310) / 10.000 = 94,9%. VPP = 180 / 670 ≈ 26,87%. Alta acurácia não garante alto valor preditivo positivo!",
      stepByStep: [
        "1. Calcular os acertos totais: VP + VN = 180 + 9.310 = 9.490.",
        "2. Calcular a Acurácia Global: 9.490 / 10.000 = 94,9%.",
        "3. Calcular o total de testes positivos: VP + FP = 180 + 490 = 670.",
        "4. Calcular o VPP: 180 / 670 ≈ 0,2687 = 26,87%."
      ],
      coreConcept: "A acurácia global pode ser enganosa em populações desbalanceadas (baixa prevalência), pois o alto número de sadios mascara os falsos positivos.",
      trapWarning: "Cuidado: Nunca confie apenas na 'acurácia' anunciada pelo fabricante de um teste; verifique sempre o VPP na sua população real!"
    },
    tags: ["acuracia-global", "vpp", "testes-diagnosticos", "bioestatistica", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-020",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Urnas com Bolas e Probabilidade Condicional com Etapas",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No laboratório de farmacotécnica, há dois recipientes de controle contendo cápsulas experimentais:\n• Recipiente A contém 3 cápsulas azuis e 2 vermelhas (total = 5 cápsulas);\n• Recipiente B contém 2 cápsulas azuis e 4 vermelhas (total = 6 cápsulas).\nUm técnico joga uma moeda honesta: se der Cara, ele retira uma cápsula do Recipiente A; se der Coroa, retira do Recipiente B. A cápsula retirada é AZUL.",
      source: "Controle de Qualidade em Farmacotécnica, 2026."
    },
    prompt: "Dado que a cápsula retirada foi AZUL, a probabilidade de que ela tenha vindo do Recipiente A é igual a:",
    options: [
      {
        id: "a",
        text: "9/14 (aproximadamente 64,3%).",
        isCorrect: true,
        distractorRationale: "Correto: Pelo Teorema de Bayes:\n• P(A) = 1/2 e P(Azul | A) = 3/5. P(A ∩ Azul) = (1/2) × (3/5) = 3/10 = 0,30.\n• P(B) = 1/2 e P(Azul | B) = 2/6 = 1/3. P(B ∩ Azul) = (1/2) × (1/3) = 1/6 ≈ 0,1667.\n• P(Azul total) = 3/10 + 1/6 = (9 + 5) / 30 = 14 / 30 = 7/15.\n• P(A | Azul) = (3/10) / (14/30) = (3/10) × (30/14) = 9 / 14 ≈ 0,6428 = 64,3%."
      },
      {
        id: "b",
        text: "1/2 (50,0%).",
        isCorrect: false,
        distractorRationale: "Considerou apenas a moeda honesta de 50%, ignorando que o Recipiente A tem maior proporção de azuis (60% vs 33%)."
      },
      {
        id: "c",
        text: "3/5 (60,0%).",
        isCorrect: false,
        distractorRationale: "Confundiu com a fração de azuis no Recipiente A (3/5)."
      },
      {
        id: "d",
        text: "5/14 (aproximadamente 35,7%).",
        isCorrect: false,
        distractorRationale: "Calculou a probabilidade de ter vindo do Recipiente B: 5/14."
      },
      {
        id: "e",
        text: "7/15 (aproximadamente 46,7%).",
        isCorrect: false,
        distractorRationale: "Calculou a probabilidade total de sair uma cápsula azul: 14/30 = 7/15."
      }
    ],
    detailedExplanation: {
      summary: "P(A ∩ Azul) = 3/10. P(Azul) = 14/30. Bayes: P(A|Azul) = (3/10) / (14/30) = 9/14 ≈ 64,3%.",
      stepByStep: [
        "1. Ramo A: P(A) = 1/2; P(Azul|A) = 3/5 ⇒ P(A ∩ Azul) = 3/10 = 9/30.",
        "2. Ramo B: P(B) = 1/2; P(Azul|B) = 2/6 = 1/3 ⇒ P(B ∩ Azul) = 1/6 = 5/30.",
        "3. Total de Azul: 9/30 + 5/30 = 14/30.",
        "4. Aplicar Bayes: P(A | Azul) = (9/30) / (14/30) = 9 / 14 ≈ 64,3%."
      ],
      coreConcept: "A evidência 'cápsula azul' favorece o recipiente que tem maior concentração de azuis (A tem 60%, B tem 33%), elevando a probabilidade de A de 50% para 64,3%.",
      trapWarning: "Trabalhe sempre com denominadores comuns (aqui, 30) para simplificar divisões de frações no ENEM!"
    },
    tags: ["teorema-de-bayes", "urnas", "probabilidade-total", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-021",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Transmissão Genética Ligada ao Sexo (Cromossomo X)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A hemofilia A é uma coagulopatia recessiva ligada ao cromossomo sexual X. Uma mulher sadia é portadora obrigatória do alelo mutado (genótipo X^H X^h), e seu parceiro é um homem sem hemofilia (genótipo X^H Y).\n• Filhas mulheres (XX): 50% X^H X^H (sadia não portadora) e 50% X^H X^h (sadia portadora). Nenhuma mulher terá hemofilia.\n• Filhos homens (XY): 50% X^H Y (sadio) e 50% X^h Y (hemofílico).\nO casal faz um ultrassom obstétrico e descobre com certeza que o bebê que esperam É DO SEXO MASCULINO.",
      source: "Genética Humana e Doenças Monogênicas, 2026."
    },
    prompt: "Com base na informação de que o feto é do sexo masculino, a probabilidade condicional de que essa criança nasça com hemofilia A é igual a:",
    options: [
      {
        id: "a",
        text: "50,0%.",
        isCorrect: true,
        distractorRationale: "Correto: Sabendo-se previamente que o feto é do sexo masculino (XY), o espaço amostral restringe-se exclusivamente aos filhos homens. Um filho homem herda obrigatoriamente o cromossomo Y do pai e tem 50% de chance de herdar X^H (sadio) e 50% de chance de herdar X^h (hemofílico) da mãe. Logo, P(Hemofílico | Menino) = 1/2 = 50,0%."
      },
      {
        id: "b",
        text: "25,0%.",
        isCorrect: false,
        distractorRationale: "Calculou a probabilidade antes de saber o sexo da criança: P(Menino E Hemofílico) = (1/2) × (1/2) = 1/4 = 25,0%."
      },
      {
        id: "c",
        text: "100%.",
        isCorrect: false,
        distractorRationale: "Supôs erroneamente que todo filho homem herda o alelo recessivo da mãe portadora."
      },
      {
        id: "d",
        text: "12,5%.",
        isCorrect: false,
        distractorRationale: "Dividiu desnecessariamente por 2 mais uma vez."
      },
      {
        id: "e",
        text: "0%.",
        isCorrect: false,
        distractorRationale: "Essa seria a resposta se o ultrassom tivesse revelado que o feto era do sexo feminino."
      }
    ],
    detailedExplanation: {
      summary: "Saber que o feto é do sexo masculino elimina o grupo das filhas do espaço amostral. Dentre os homens, a chance de herdar o X recessivo é de 50%.",
      stepByStep: [
        "1. Cruzamento: Mãe X^H X^h × Pai X^H Y.",
        "2. Descendentes possíveis: X^H X^H (25%), X^H X^h (25%), X^H Y (25%), X^h Y (25%).",
        "3. Condição dada: O feto é do sexo masculino (redução para X^H Y e X^h Y, que somam 50% do total).",
        "4. Probabilidade condicional: Dentre os dois genótipos masculinos, 1 é hemofílico (X^h Y).",
        "5. P(Hemofílico | Menino) = (1/4) / (2/4) = 1/2 = 50,0%."
      ],
      coreConcept: "A determinação prévia do sexo em doenças ligadas ao X funciona como uma atualização de espaço amostral clássica da probabilidade condicional.",
      trapWarning: "Atenção: A probabilidade de 'ter um filho homem hemofílico' (25%) é diferente da probabilidade de 'o filho ser hemofílico DADO QUE é homem' (50%)!"
    },
    tags: ["genetica-medica", "heranca-ligada-ao-sexo", "probabilidade-condicional", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-022",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Amostragem Estratificada e Proporção Populacional",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um estudo de prevalência sorológica para sarampo dividiu a população de um bairro em duas faixas etárias:\n• Crianças e Jovens (0 a 19 anos): representam 40% dos moradores, com taxa de cobertura vacinal de 90%;\n• Adultos e Idosos (20 anos ou mais): representam 60% dos moradores, com taxa de cobertura vacinal de 70%.",
      source: "Inquéritos Sorológicos e Amostragem Populacional, 2026."
    },
    prompt: "A taxa global de cobertura vacinal da população desse bairro é igual a:",
    options: [
      {
        id: "a",
        text: "78,0%.",
        isCorrect: true,
        distractorRationale: "Correto: Pela média ponderada (Probabilidade Total): Cobertura Global = (0,40 × 0,90) + (0,60 × 0,70) = 0,36 + 0,42 = 0,78 = 78,0%."
      },
      {
        id: "b",
        text: "80,0%.",
        isCorrect: false,
        distractorRationale: "Calculou a média aritmética simples: (90% + 70%) / 2 = 80%, ignorando que os adultos representam 60% da população."
      },
      {
        id: "c",
        text: "82,0%.",
        isCorrect: false,
        distractorRationale: "Inverteu os pesos: (0,60 × 0,90) + (0,40 × 0,70) = 0,54 + 0,28 = 82%."
      },
      {
        id: "d",
        text: "75,0%.",
        isCorrect: false,
        distractorRationale: "Estimativa arbitrária sem cálculo ponderado."
      },
      {
        id: "e",
        text: "85,0%.",
        isCorrect: false,
        distractorRationale: "Erro de cálculo na multiplicação decimal."
      }
    ],
    detailedExplanation: {
      summary: "P(Vacinado) = (0,40 × 0,90) + (0,60 × 0,70) = 0,36 + 0,42 = 0,78 = 78,0%.",
      stepByStep: [
        "1. Jovens: 40% da população com 90% vacinados ⇒ 0,40 × 0,90 = 0,36 (36% da população).",
        "2. Adultos: 60% da população com 70% vacinados ⇒ 0,60 × 0,70 = 0,42 (42% da população).",
        "3. Somar as duas parcelas: 0,36 + 0,42 = 0,78.",
        "4. Converter para porcentagem: 78,0%."
      ],
      coreConcept: "A probabilidade total é equivalente à média ponderada dos estratos populacionais.",
      trapWarning: "Nunca use média simples quando os estratos têm tamanhos diferentes!"
    },
    tags: ["probabilidade-total", "amostragem-estratificada", "cobertura-vacinal", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-023",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Aposta e Valor Esperado (Esperança Matemática) em Ensaios Clínicos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um fundo de investimento biomédico avalia o financiamento da Fase 3 de um medicamento promissor para insuficiência cardíaca. A análise probabilística dos ensaios anteriores indica que:\n• Há 60% de probabilidade (0,60) de o medicamento ser aprovado pela Anvisa, gerando um retorno financeiro líquido de R$ 50 milhões;\n• Há 40% de probabilidade (0,40) de o medicamento falhar na eficácia e ser rejeitado, gerando um prejuízo líquido de R$ 30 milhões.",
      source: "Economia da Saúde e Farmacoeconomia, 2026."
    },
    prompt: "O Valor Esperado (Esperança Matemática) do retorno financeiro desse projeto de investimento é de:",
    options: [
      {
        id: "a",
        text: "R$ 18 milhões.",
        isCorrect: true,
        distractorRationale: "Correto: E(X) = Σ x_i · P(x_i) = (50 milhões × 0,60) + (-30 milhões × 0,40) = 30 milhões - 12 milhões = R$ 18 milhões."
      },
      {
        id: "b",
        text: "R$ 30 milhões.",
        isCorrect: false,
        distractorRationale: "Calculou apenas a parcela positiva (50 × 0,60 = 30), esquecendo de subtrair o risco de prejuízo."
      },
      {
        id: "c",
        text: "R$ 10 milhões.",
        isCorrect: false,
        distractorRationale: "Calculou 50 - 30 = 20 e dividiu por 2."
      },
      {
        id: "d",
        text: "R$ 42 milhões.",
        isCorrect: false,
        distractorRationale: "Somou o prejuízo como ganho positivo: 30 + 12 = 42."
      },
      {
        id: "e",
        text: "R$ 20 milhões.",
        isCorrect: false,
        distractorRationale: "Calculou a média aritmética dos valores nominais sem ponderar pelas probabilidades."
      }
    ],
    detailedExplanation: {
      summary: "E(X) = (50 × 0,60) - (30 × 0,40) = 30 - 12 = R$ 18 milhões. O projeto tem expectativa matemática positiva e atrativa.",
      stepByStep: [
        "1. Identificar o ganho e sua probabilidade: x1 = +50 milhões; P(x1) = 0,60.",
        "2. Identificar a perda e sua probabilidade: x2 = -30 milhões; P(x2) = 0,40.",
        "3. Aplicar a fórmula da esperança matemática: E(X) = x1·P(x1) + x2·P(x2).",
        "4. Calcular: E(X) = (50 × 0,60) + (-30 × 0,40) = 30 - 12 = +18 milhões de reais."
      ],
      coreConcept: "O valor esperado pondera os ganhos e perdas pelas suas respectivas probabilidades de ocorrência.",
      trapWarning: "Lembre-se de colocar sinal negativo para prejuízos ao calcular a esperança matemática!"
    },
    tags: ["esperanca-matematica", "valor-esperado", "farmacoeconomia", "tomada-de-decisao", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-024",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Paradoxo do Aniversário em Amostras Hospitalares",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma enfermaria hospitalar com 4 leitos, 4 pacientes internados são alocados aleatoriamente. Considere que o ano possui 365 dias e que a data de aniversário de qualquer indivíduo tem distribuição uniforme e independente ao longo do ano.",
      source: "Probabilidade Combinatória e Análise Amostral, 2026."
    },
    prompt: "A expressão matemática que representa a probabilidade de que PELO MENOS DOIS desses 4 pacientes façam aniversário no mesmo dia do ano é:",
    options: [
      {
        id: "a",
        text: "1 - [(365 × 364 × 363 × 362) / 365⁴].",
        isCorrect: true,
        distractorRationale: "Correto: Pelo evento complementar: P(Pelo menos dois iguais) = 1 - P(Todos fazerem aniversário em dias distintos). Número total de distribuições de datas para os 4 pacientes = 365⁴. Número de maneiras de todos terem aniversários distintos = 365 × 364 × 363 × 362. Logo, P(Distintos) = (365 × 364 × 363 × 362) / 365⁴. P(Pelo menos dois iguais) = 1 - [(365 × 364 × 363 × 362) / 365⁴]."
      },
      {
        id: "b",
        text: "4 / 365.",
        isCorrect: false,
        distractorRationale: "Somou as probabilidades individuais como se fossem eventos mutuamente exclusivos."
      },
      {
        id: "c",
        text: "[(365 × 364 × 363 × 362) / 365⁴].",
        isCorrect: false,
        distractorRationale: "Essa é a probabilidade de TODOS terem aniversários em dias diferentes (o complementar)."
      },
      {
        id: "d",
        text: "1 - (1 / 365⁴).",
        isCorrect: false,
        distractorRationale: "Calculou como se o complementar fosse apenas um único dia específico."
      },
      {
        id: "e",
        text: "C(4, 2) / 365.",
        isCorrect: false,
        distractorRationale: "Expressão incorreta que desconsidera as datas dos outros 2 pacientes."
      }
    ],
    detailedExplanation: {
      summary: "Pelo complementar de 'todos em dias diferentes': 1 - (365 × 364 × 363 × 362) / 365⁴.",
      stepByStep: [
        "1. Espaço total de datas para 4 pessoas: 365 × 365 × 365 × 365 = 365⁴.",
        "2. Casos em que todos fazem em dias distintos:",
        "   - 1ª pessoa: 365 opções.",
        "   - 2ª pessoa: 364 opções.",
        "   - 3ª pessoa: 363 opções.",
        "   - 4ª pessoa: 362 opções.",
        "   Total distintos = 365 × 364 × 363 × 362.",
        "3. Probabilidade de todos distintos: (365 × 364 × 363 × 362) / 365⁴.",
        "4. Complementar (ao menos dois iguais): 1 - [(365 × 364 × 363 × 362) / 365⁴]."
      ],
      coreConcept: "O problema do aniversário é o exemplo mais célebre de uso do evento complementar na análise combinatória probabilística.",
      trapWarning: "No ENEM, muitas questões de probabilidade não exigem o valor numérico decimal final, mas sim a montagem da expressão correta!"
    },
    tags: ["paradoxo-do-aniversario", "evento-complementar", "analise-combinatoria", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-BAY-025",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Síntese Bayesiana: Decisão de Tratamento e Limiar Terapêutico",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma emergência hospitalar, um paciente com dor torácica atípica é submetido a um teste de troponina ultrassensível para avaliar risco de infarto agudo do miocárdio:\n• A probabilidade pré-teste (prevalência clínica estimada pelo escore de risco) é de 20% (0,20 de estar infartando e 0,80 de não estar);\n• O teste de troponina possui Sensibilidade de 90% (0,90);\n• O teste de troponina possui Especificidade de 85% (0,85; logo, taxa de falso positivo = 0,15);\nO teste é realizado e o resultado é POSITIVO. O protocolo clínico estabelece que o paciente só deve ser encaminhado para cateterismo imediato se sua probabilidade pós-teste (VPP) for SUPERIOR A 50%.",
      source: "Diretrizes de Síndrome Coronariana Aguda da Sociedade Brasileira de Cardiologia, 2026."
    },
    prompt: "Com base no Teorema de Bayes, a probabilidade pós-teste desse paciente estar verdadeiramente infartando e a conduta clínica indicada são:",
    options: [
      {
        id: "a",
        text: "60,0%; o paciente deve ser encaminhado imediatamente para o cateterismo cardíaco.",
        isCorrect: true,
        distractorRationale: "Correto: Vamos calcular a probabilidade pós-teste P(Infarto | Teste+):\n• P(Infarto ∩ Teste+) = P(Infarto) × Sensibilidade = 0,20 × 0,90 = 0,180.\n• P(Não Infarto ∩ Teste+) = P(Não Infarto) × (1 - E) = 0,80 × 0,15 = 0,120.\n• P(Teste+) = 0,180 + 0,120 = 0,300.\n• P(Infarto | Teste+) = 0,180 / 0,300 = 18 / 30 = 3 / 5 = 0,60 = 60,0%.\nComo 60% > 50% (limiar do protocolo), a conduta correta é o encaminhamento imediato para o cateterismo cardíaco."
      },
      {
        id: "b",
        text: "90,0%; o paciente deve ser encaminhado para cateterismo.",
        isCorrect: false,
        distractorRationale: "Confundiu a probabilidade pós-teste com a sensibilidade do exame (90%)."
      },
      {
        id: "c",
        text: "45,0%; o paciente deve receber alta hospitalar imediata.",
        isCorrect: false,
        distractorRationale: "Erro de cálculo na soma da probabilidade total."
      },
      {
        id: "d",
        text: "20,0%; o teste deve ser ignorado pois manteve a probabilidade inicial.",
        isCorrect: false,
        distractorRationale: "O teste positivo aumentou a probabilidade de 20% para 60%."
      },
      {
        id: "e",
        text: "85,0%; o paciente deve aguardar reavaliação ambulatorial.",
        isCorrect: false,
        distractorRationale: "Confundiu com a especificidade do exame."
      }
    ],
    detailedExplanation: {
      summary: "P(Infarto ∩ +) = 0,20 × 0,90 = 0,18. P(Não Infarto ∩ +) = 0,80 × 0,15 = 0,12. Total + = 0,30. Bayes = 0,18/0,30 = 60%. Como 60% > 50%, indica-se cateterismo.",
      stepByStep: [
        "1. Numerador de Bayes (doentes com teste positivo): 0,20 × 0,90 = 0,180.",
        "2. Falsos positivos (sadios com teste positivo): 0,80 × (1 - 0,85) = 0,80 × 0,15 = 0,120.",
        "3. Denominador (todos os testes positivos): 0,180 + 0,120 = 0,300.",
        "4. Probabilidade pós-teste: P = 0,180 / 0,300 = 18/30 = 3/5 = 60,0%.",
        "5. Decisão médica: Como 60% é estritamente maior que o limiar de 50%, o protocolo indica cateterismo imediato."
      ],
      coreConcept: "O Teorema de Bayes é a ferramenta formal do raciocínio clínico médico que converte probabilidades pré-teste em probabilidades pós-teste para guiar condutas terapêuticas.",
      trapWarning: "No ENEM, questões com tomada de decisão exigem o cálculo exato da porcentagem e a comparação lógica rigorosa com o critério de corte dado no texto!"
    },
    tags: ["teorema-de-bayes", "raciocinio-clinico", "tomada-de-decisao", "troponina", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
