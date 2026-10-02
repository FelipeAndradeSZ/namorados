export const QUESTIONS_PROBABILIDADE = [
  {
    id: "MAT-PROB-001",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Probabilidade Simples",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um sorteio, há 100 bilhetes numerados de 1 a 100. Uma pessoa compra todos os bilhetes que são múltiplos de 7 e múltiplos de 5 simultaneamente.",
      source: "Original"
    },
    prompt: "Qual a probabilidade de essa pessoa ganhar o sorteio?",
    options: [
      { id: "a", text: "2%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "5%", isCorrect: false, distractorRationale: "Calculou apenas os múltiplos de 5 em 100 (20%)." },
      { id: "c", text: "7%", isCorrect: false, distractorRationale: "Considerou os múltiplos de 7 (14%)." },
      { id: "d", text: "12%", isCorrect: false, distractorRationale: "Somou as probabilidades individuais." },
      { id: "e", text: "35%", isCorrect: false, distractorRationale: "Confundiu com o mínimo múltiplo comum." }
    ],
    detailedExplanation: {
      summary: "Para ser múltiplo de 5 e de 7, precisa ser múltiplo do MMC de (5, 7).",
      stepByStep: [
        "O MMC de 5 e 7 é 35.",
        "Os múltiplos de 35 entre 1 e 100 são 35 e 70.",
        "A pessoa tem 2 bilhetes.",
        "Probabilidade = 2/100 = 2%."
      ],
      coreConcept: "Eventos e Espaço Amostral",
      trapWarning: "Eventos com a palavra 'e' requerem interseção."
    },
    commonTraps: ["soma de probabilidades"],
    tags: ["multiplos", "probabilidade simples"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-002",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Probabilidade Condicional",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma escola, 60% dos alunos falam inglês e 40% falam espanhol. Sabe-se que 20% dos alunos falam ambos os idiomas. Um aluno é selecionado ao acaso e descobre-se que ele fala inglês.",
      source: "Original"
    },
    prompt: "Qual a probabilidade de que este aluno também fale espanhol?",
    options: [
      { id: "a", text: "33,3%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "20%", isCorrect: false, distractorRationale: "Usou apenas a interseção em vez da condicional." },
      { id: "c", text: "40%", isCorrect: false, distractorRationale: "Usou a probabilidade total de falar espanhol." },
      { id: "d", text: "50%", isCorrect: false, distractorRationale: "Dividiu a interseção pela união." },
      { id: "e", text: "12%", isCorrect: false, distractorRationale: "Multiplicou as probabilidades de espanhol e inglês." }
    ],
    detailedExplanation: {
      summary: "O universo foi restrito apenas aos alunos que falam inglês.",
      stepByStep: [
        "A fórmula da probabilidade condicional é P(A|B) = P(A ∩ B) / P(B).",
        "A (falar espanhol), B (falar inglês).",
        "P(A ∩ B) = 20% e P(B) = 60%.",
        "P(A|B) = 20% / 60% = 1/3 ≈ 33,3%."
      ],
      coreConcept: "Probabilidade Condicional",
      trapWarning: "Quando se diz 'dado que', o espaço amostral diminui."
    },
    commonTraps: ["usar interseção diretamente"],
    tags: ["condicional", "idiomas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-003",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Eventos Independentes",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma fábrica, a máquina A produz peças com 5% de defeitos e a máquina B produz peças com 10% de defeitos. As duas máquinas funcionam independentemente.",
      source: "Original"
    },
    prompt: "Se selecionarmos uma peça de cada máquina, qual a probabilidade de ambas serem não defeituosas?",
    options: [
      { id: "a", text: "85,5%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "0,5%", isCorrect: false, distractorRationale: "Calculou a probabilidade de ambas SEREM defeituosas." },
      { id: "c", text: "15%", isCorrect: false, distractorRationale: "Somou as probabilidades de defeito." },
      { id: "d", text: "95%", isCorrect: false, distractorRationale: "Apenas olhou para a máquina A." },
      { id: "e", text: "90%", isCorrect: false, distractorRationale: "Apenas olhou para a máquina B." }
    ],
    detailedExplanation: {
      summary: "Multiplicam-se as probabilidades de não defeito de cada uma, pois são independentes.",
      stepByStep: [
        "Probabilidade da peça A NÃO ser defeituosa: 100% - 5% = 95% = 0,95.",
        "Probabilidade da peça B NÃO ser defeituosa: 100% - 10% = 90% = 0,90.",
        "Probabilidade de ambas não serem defeituosas = 0,95 * 0,90.",
        "0,95 * 0,90 = 0,855 = 85,5%."
      ],
      coreConcept: "Regra do Produto",
      trapWarning: "Preste atenção se o problema pede defeituosas ou não defeituosas."
    },
    commonTraps: ["calcular probabilidade inversa"],
    tags: ["independentes", "controle qualidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-004",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Urnas e Bolas",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma caixa contém 4 bolas vermelhas e 6 bolas azuis. Duas bolas são retiradas sucessivamente, sem reposição.",
      source: "Original"
    },
    prompt: "Qual é a probabilidade de retirarmos duas bolas de cores diferentes?",
    options: [
      { id: "a", text: "8/15 (53,3%)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "12/25 (48%)", isCorrect: false, distractorRationale: "Calculou COM reposição." },
      { id: "c", text: "4/15 (26,6%)", isCorrect: false, distractorRationale: "Calculou apenas a ordem vermelha-azul, esquecendo azul-vermelha." },
      { id: "d", text: "1/5 (20%)", isCorrect: false, distractorRationale: "Multiplicou as frações incorretamente." },
      { id: "e", text: "1/2 (50%)", isCorrect: false, distractorRationale: "Chute que é metade da chance." }
    ],
    detailedExplanation: {
      summary: "Devemos somar as probabilidades das duas ordens possíveis: (Vermelha e Azul) ou (Azul e Vermelha).",
      stepByStep: [
        "Prob. Vermelha depois Azul: (4/10) * (6/9) = 24/90.",
        "Prob. Azul depois Vermelha: (6/10) * (4/9) = 24/90.",
        "Soma das duas possibilidades = 24/90 + 24/90 = 48/90.",
        "Simplificando 48/90 dividindo por 6: 8/15."
      ],
      coreConcept: "Eventos Sem Reposição",
      trapWarning: "Lembre-se que 'cores diferentes' pode ocorrer em duas ordens."
    },
    commonTraps: ["esquecer permutação de ordem", "considerar reposição"],
    tags: ["urnas", "sem reposicao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-005",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Gráficos e Tabelas",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma pesquisa de satisfação, 200 clientes avaliaram um serviço. Destes, 80 deram nota 'Excelente', 70 deram 'Bom', 30 deram 'Regular' e 20 'Ruim'. Entre as mulheres, que são 100 no total, 50 avaliaram como 'Excelente'.",
      source: "Original"
    },
    prompt: "Sorteando-se ao acaso uma avaliação com nota 'Excelente', qual a probabilidade de ter sido dada por uma mulher?",
    options: [
      { id: "a", text: "62,5%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "50%", isCorrect: false, distractorRationale: "Dividiu mulheres (50) por total de mulheres (100)." },
      { id: "c", text: "40%", isCorrect: false, distractorRationale: "Dividiu o total de excelentes pelo total geral (80/200)." },
      { id: "d", text: "25%", isCorrect: false, distractorRationale: "Dividiu excelentes de mulheres pelo total geral (50/200)." },
      { id: "e", text: "35%", isCorrect: false, distractorRationale: "Fez confusão com as notas de 'Bom'." }
    ],
    detailedExplanation: {
      summary: "Probabilidade restrita: o universo considerado é apenas de avaliações 'Excelente'.",
      stepByStep: [
        "Identifique o novo espaço amostral: o sorteio foi entre as avaliações 'Excelente', ou seja, 80 avaliações.",
        "Identifique os casos favoráveis: dentre essas 80, 50 são de mulheres.",
        "Calcule: 50 / 80 = 5/8.",
        "5/8 em porcentagem é 62,5%."
      ],
      coreConcept: "Restrição do Espaço Amostral",
      trapWarning: "Identifique quem foi selecionado (o denominador da fração)."
    },
    commonTraps: ["erro no denominador"],
    tags: ["tabelas", "probabilidade condicional"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-006",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Evento Complementar",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um laboratório de análises clínicas utiliza três sistemas independentes de alarme térmico para monitorar um refrigerador de vacinas. A probabilidade de cada alarme falhar (não disparar) em caso de pane térmica é de 10% para o alarme 1, 15% para o alarme 2 e 20% para o alarme 3.",
      source: "Simulado ENEM / Fisiologia & Estatística"
    },
    prompt: "Se ocorrer uma pane no sistema de refrigeração, qual é a probabilidade de pelo menos um dos três alarmes disparar com sucesso?",
    options: [
      { id: "a", text: "99,7%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "45,0%", isCorrect: false, distractorRationale: "Somou as probabilidades de falha (10% + 15% + 20%)." },
      { id: "c", text: "55,0%", isCorrect: false, distractorRationale: "Subtraiu de 100% a soma simples das taxas de falha." },
      { id: "d", text: "0,3%", isCorrect: false, distractorRationale: "Calculou a probabilidade de todos falharem em vez do evento complementar." },
      { id: "e", text: "85,0%", isCorrect: false, distractorRationale: "Considerou apenas o alarme com menor probabilidade de falha." }
    ],
    detailedExplanation: {
      summary: "A probabilidade de 'pelo menos um funcionar' é calculada pelo evento complementar: 1 - P(todos falharem).",
      stepByStep: [
        "Identifique a probabilidade de cada alarme falhar: P(F1) = 0,10, P(F2) = 0,15, P(F3) = 0,20.",
        "Como os alarmes funcionam de maneira independente, a probabilidade de todos falharem simultaneamente é o produto: P(todos falharem) = 0,10 * 0,15 * 0,20 = 0,003 (0,3%).",
        "O evento 'pelo menos um alarme disparar' é o complementar de 'todos falharem': P(ao menos um) = 1 - P(todos falharem).",
        "P(ao menos um) = 1 - 0,003 = 0,997 = 99,7%."
      ],
      coreConcept: "Princípio do Evento Complementar",
      trapWarning: "Sempre que o enunciado perguntar 'pelo menos um', calcule primeiro a probabilidade de 'nenhum' e subtraia de 1."
    },
    commonTraps: ["somar probabilidades dependentes", "esquecer o complementar"],
    tags: ["evento complementar", "alarmes", "independencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-007",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Teorema de Bayes e Testes Diagnósticos",
    difficulty: 5,
    estimatedTimeSeconds: 180,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um teste rápido para detecção de uma infecção viral possui sensibilidade de 95% (detecta a doença em quem realmente está doente) e especificidade de 90% (dá resultado negativo em quem não está doente). Em uma população de 10.000 pessoas onde a prevalência da doença é de 2% (200 infectados), um indivíduo realiza a testagem e obtém resultado positivo.",
      source: "Original / Epidemiologia Clínica"
    },
    prompt: "Qual é a probabilidade aproximada de que esse indivíduo testado positivo realmente possua a infecção viral?",
    options: [
      { id: "a", text: "16,2%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "95,0%", isCorrect: false, distractorRationale: "Confundiu a sensibilidade intrínseca do teste com o valor preditivo positivo." },
      { id: "c", text: "90,0%", isCorrect: false, distractorRationale: "Confundiu a especificidade do exame com a probabilidade a posteriori." },
      { id: "d", text: "85,0%", isCorrect: false, distractorRationale: "Subtraiu a taxa de falso positivo da sensibilidade sem ponderar a prevalência." },
      { id: "e", text: "50,0%", isCorrect: false, distractorRationale: "Supôs que um resultado positivo divide a incerteza igualmente." }
    ],
    detailedExplanation: {
      summary: "A probabilidade de estar doente dado o teste positivo (Valor Preditivo Positivo) depende fundamentalmente da prevalência da doença na população.",
      stepByStep: [
        "Calcule o total de pessoas doentes na população de 10.000: 2% de 10.000 = 200 indivíduos doentes. Portanto, 9.800 indivíduos não têm a doença.",
        "Calcule os verdadeiros positivos (sensibilidade de 95%): 0,95 * 200 = 190 pessoas.",
        "Calcule os falsos positivos (especificidade 90% significa 10% de falso positivo): 0,10 * 9.800 = 980 pessoas.",
        "Total de pessoas com resultado positivo no teste = 190 + 980 = 1.170 pessoas.",
        "Probabilidade de estar realmente doente entre os que testaram positivo: P = 190 / 1.170 ≈ 0,1624 = 16,2%."
      ],
      coreConcept: "Valor Preditivo Positivo e Teorema de Bayes",
      trapWarning: "Em doenças de baixa prevalência, o número absoluto de falsos positivos supera com frequência o de verdadeiros positivos."
    },
    commonTraps: ["confundir sensibilidade com valor preditivo", "desconsiderar a prevalência"],
    tags: ["bayes", "medicina", "epidemiologia", "diagnostico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-008",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Distribuição Binomial",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um ensaio clínico com um novo anti-hipertensivo, a probabilidade de eficácia terapêutica em cada paciente avaliado individualmente é constante e igual a 80%. O fármaco é administrado de maneira independente a uma amostra de 4 pacientes.",
      source: "ENEM / Farmacologia Aplicada"
    },
    prompt: "Qual é a probabilidade de o medicamento demonstrar eficácia em exatamente 3 desses 4 pacientes?",
    options: [
      { id: "a", text: "40,96%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "10,24%", isCorrect: false, distractorRationale: "Esqueceu de multiplicar pelo coeficiente binomial C(4,3) = 4." },
      { id: "c", text: "51,20%", isCorrect: false, distractorRationale: "Calculou apenas (0,8)^3 sem incluir a falha do quarto paciente." },
      { id: "d", text: "60,00%", isCorrect: false, distractorRationale: "Assumiu proporção direta de 3 em 4 sem modelagem binomial." },
      { id: "e", text: "80,00%", isCorrect: false, distractorRationale: "Repetiu a taxa de eficácia de um único paciente." }
    ],
    detailedExplanation: {
      summary: "Em ensaios de Bernoulli repetidos, a probabilidade de exatamente k sucessos em n tentativas segue a distribuição binomial: P = C(n,k) * p^k * q^(n-k).",
      stepByStep: [
        "Identifique os parâmetros: n = 4 pacientes, k = 3 sucessos, probabilidade de sucesso p = 0,8 e falha q = 1 - 0,8 = 0,2.",
        "Calcule o número de combinações de ordem: C(4,3) = 4! / (3! * 1!) = 4 maneiras de escolher quais 3 pacientes responderão ao tratamento.",
        "Calcule a probabilidade de uma sequência específica: (0,8)^3 * (0,2)^1 = 0,512 * 0,2 = 0,1024.",
        "Multiplique pelo total de combinações: P = 4 * 0,1024 = 0,4096 = 40,96%."
      ],
      coreConcept: "Modelo Binomial de Probabilidade",
      trapWarning: "Lembre-se sempre de permutar a ordem dos sucessos e fracassos multiplicando pelo número de combinações."
    },
    commonTraps: ["esquecer o fator combinatório", "ignorar o termo de fracasso"],
    tags: ["binomial", "farmacologia", "ensaios clinicos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-009",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Probabilidade Geométrica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um equipamento de calibração ultrassônica projeta feixes sobre uma placa metálica circular de raio 20 cm. No centro dessa placa, existe um sensor concêntrico de altíssima sensibilidade com raio de 5 cm. Admite-se que qualquer feixe que incida sobre a placa atinge seus pontos com distribuição uniforme de probabilidade.",
      source: "Original / Física Médica & Metrologia"
    },
    prompt: "Dado que um feixe incidiu sobre a placa metálica, qual é a probabilidade de ele ter atingido a área do sensor concêntrico?",
    options: [
      { id: "a", text: "6,25%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "25,0%", isCorrect: false, distractorRationale: "Calculou a razão entre os raios lineares (5/20) em vez da razão entre áreas." },
      { id: "c", text: "12,5%", isCorrect: false, distractorRationale: "Dividiu a razão dos raios por 2 arbitrariamente." },
      { id: "d", text: "15,0%", isCorrect: false, distractorRationale: "Fez a diferença entre os raios (20 - 5 = 15) como estimador percentual." },
      { id: "e", text: "5,0%", isCorrect: false, distractorRationale: "Usou diretamente o valor numérico do raio do sensor." }
    ],
    detailedExplanation: {
      summary: "Na probabilidade geométrica contínua, a probabilidade é calculada pela razão entre a área da região favorável e a área total do espaço amostral.",
      stepByStep: [
        "Calcule a área do sensor interno: A_sensor = π * r^2 = π * (5)^2 = 25π cm².",
        "Calcule a área total da placa: A_total = π * R^2 = π * (20)^2 = 400π cm².",
        "Calcule a razão entre as áreas: P = (25π) / (400π) = 25 / 400.",
        "Simplifique a fração: 25 / 400 = 1 / 16 = 0,0625 = 6,25%."
      ],
      coreConcept: "Probabilidade Geométrica Bidimensional",
      trapWarning: "Áreas variam com o quadrado das medidas lineares; a razão de áreas é o quadrado da razão dos raios (5/20)² = (1/4)² = 1/16."
    },
    commonTraps: ["usar razão linear de raios", "esquecer elevar ao quadrado"],
    tags: ["probabilidade geometrica", "areas", "sensores"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-010",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Combinações e Espaço Amostral",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A direção de um hospital universitário precisa formar uma comissão multidisciplinar de triagem composta por exatamente 3 médicos sorteados ao acaso a partir de uma equipe disponível formada por 6 pediatras e 4 cirurgiões gerais.",
      source: "Original / Gestão em Saúde"
    },
    prompt: "Qual é a probabilidade de a comissão sorteada ser formada exclusivamente por pediatras?",
    options: [
      { id: "a", text: "1/6 (aproximadamente 16,7%)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "3/5 (60,0%)", isCorrect: false, distractorRationale: "Usou a proporção simples de pediatras na equipe geral (6/10)." },
      { id: "c", text: "1/4 (25,0%)", isCorrect: false, distractorRationale: "Calculou a razão entre as especialidades médicas." },
      { id: "d", text: "1/5 (20,0%)", isCorrect: false, distractorRationale: "Desconsiderou as mudanças de denominador nas extrações sucessivas." },
      { id: "e", text: "1/12 (aproximadamente 8,3%)", isCorrect: false, distractorRationale: "Multiplicou por fator arbitrário sem simplificação correta." }
    ],
    detailedExplanation: {
      summary: "Pode ser resolvido pelo produto das probabilidades sem reposição ou pela razão entre combinações favoráveis e combinações totais.",
      stepByStep: [
        "Método das retiradas sucessivas sem reposição:",
        "1º médico sorteado ser pediatra: 6 em 10 (6/10).",
        "2º médico sorteado ser pediatra: restam 5 pediatras em 9 médicos (5/9).",
        "3º médico sorteado ser pediatra: restam 4 pediatras em 8 médicos (4/8 = 1/2).",
        "Multiplicação dos eventos: P = (6/10) * (5/9) * (4/8) = (30/90) * (1/2) = (1/3) * (1/2) = 1/6 ≈ 16,67%."
      ],
      coreConcept: "Eventos Sucessivos Sem Reposição e Combinação",
      trapWarning: "Ao escolher membros para um mesmo comitê, as retiradas são dependentes (sem reposição)."
    },
    commonTraps: ["considerar com reposição", "usar probabilidade individual"],
    tags: ["combinatoria", "comissoes", "sem reposicao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-011",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Probabilidade da União de Eventos",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma Unidade Básica de Saúde (UBS), foi realizado um levantamento sobre a cobertura vacinal de 200 idosos cadastrados. Constatou-se que 140 receberam a vacina contra a gripe (Influenza), 100 receberam a vacina bivalente contra a Covid-19 e 60 idosos receberam ambas as vacinas no mesmo período.",
      source: "Ministério da Saúde / PNI"
    },
    prompt: "Sorteando-se ao acaso um prontuário entre os 200 idosos desse grupo, qual é a probabilidade de que o idoso selecionado tenha recebido pelo menos uma das duas vacinas?",
    options: [
      { id: "a", text: "120%", isCorrect: false, distractorRationale: "O estudante simplesmente somou as frações 140/200 + 100/200 = 240/200, obtendo probabilidade maior que 100% por não subtrair a interseção." },
      { id: "b", text: "90%", isCorrect: true, distractorRationale: null },
      { id: "c", text: "70%", isCorrect: false, distractorRationale: "O estudante considerou apenas a proporção de vacinados contra a gripe (140/200 = 70%)." },
      { id: "d", text: "60%", isCorrect: false, distractorRationale: "O estudante calculou a probabilidade de vacinados contra apenas uma das duas vacinas (180 - 60 = 120 idosos, 120/200 = 60%)." },
      { id: "e", text: "30%", isCorrect: false, distractorRationale: "O estudante calculou a probabilidade da interseção (60/200 = 30%)." }
    ],
    detailedExplanation: {
      summary: "A probabilidade da união de dois eventos A e B é dada por P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
      stepByStep: [
        "Passo 1: Identificar o número total de elementos: N = 200 idosos.",
        "Passo 2: Identificar os vacinados contra Gripe (G): n(G) = 140.",
        "Passo 3: Identificar os vacinados contra Covid (C): n(C) = 100.",
        "Passo 4: Identificar a interseção (ambas as vacinas): n(G ∩ C) = 60.",
        "Passo 5: Aplicar o Princípio da Inclusão-Exclusão: n(G ∪ C) = n(G) + n(C) - n(G ∩ C) = 140 + 100 - 60 = 180 idosos vacinados com pelo menos uma das doses.",
        "Passo 6: Calcular a probabilidade: P(G ∪ C) = 180 / 200 = 9 / 10 = 0,90 = 90%."
      ],
      coreConcept: "Regra da adição de probabilidades e princípio da inclusão-exclusão.",
      trapWarning: "Somar n(A) + n(B) sem subtrair a interseção, contando os idosos vacinados com ambas duas vezes."
    },
    commonTraps: ["esquecer_de_subtrair_a_intersecao", "somar_probabilidades_gerando_mais_de_100"],
    tags: ["uniao_de_eventos", "inclusao_exclusao", "vacinacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-012",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Teorema de Bayes e Valor Preditivo Positivo",
    difficulty: 4,
    estimatedTimeSeconds: 220,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um teste laboratorial para diagnóstico de uma doença rara cuja prevalência na população é de 1% (1 em cada 100 indivíduos é portador), sabe-se que:\n• A sensibilidade do exame é de 90% (probabilidade de dar positivo se o indivíduo é doente);\n• A taxa de falso-positivo é de 10% (probabilidade de dar positivo se o indivíduo é saudável, ou seja, especificidade de 90%).\n\nConsidere uma população hipotética de 1.000 pessoas submetidas ao rastreamento.",
      source: "Epidemiologia Clínica / SBM"
    },
    prompt: "Se uma pessoa escolhida ao acaso dessa população obtiver resultado positivo nesse exame, qual é a probabilidade aproximada de que ela realmente possua a doença (Valor Preditivo Positivo)?",
    options: [
      { id: "a", text: "90,0%", isCorrect: false, distractorRationale: "O estudante confundiu sensibilidade (P(+|Doente) = 90%) com valor preditivo positivo (P(Doente|+))." },
      { id: "b", text: "50,0%", isCorrect: false, distractorRationale: "O estudante supôs que, por haver dois grupos com 9 e 99 casos, a chance seria metade." },
      { id: "c", text: "8,3%", isCorrect: true, distractorRationale: null },
      { id: "d", text: "1,0%", isCorrect: false, distractorRationale: "O estudante considerou apenas a prevalência inicial da doença." },
      { id: "e", text: "0,9%", isCorrect: false, distractorRationale: "O estudante calculou a proporção de verdadeiros positivos no total da população (9 / 1000)." }
    ],
    detailedExplanation: {
      summary: "O Teorema de Bayes demonstra que em doenças com baixa prevalência, mesmo testes com 90% de sensibilidade geram mais falsos-positivos absolutos do que verdadeiros positivos.",
      stepByStep: [
        "Passo 1: Modelar uma população de 1.000 indivíduos com base na prevalência de 1%:\n- Doentes: 1% de 1.000 = 10 pessoas;\n- Saudáveis: 99% de 1.000 = 990 pessoas.",
        "Passo 2: Calcular os resultados dos testes no grupo de doentes (sensibilidade 90%):\n- Testes positivos verdadeiros: 90% de 10 = 9 pessoas;\n- Falsos negativos: 1 pessoa.",
        "Passo 3: Calcular os resultados dos testes no grupo de saudáveis (falso-positivo 10%):\n- Testes falsos-positivos: 10% de 990 = 99 pessoas;\n- Verdadeiros negativos: 891 pessoas.",
        "Passo 4: Somar o total de testes positivos emitidos no laboratório:\nTotal Positivos = 9 (doentes) + 99 (saudáveis) = 108 exames positivos.",
        "Passo 5: Calcular o Valor Preditivo Positivo (P(Doente | Teste Positivo)):\nP = 9 / 108 = 1 / 12 ≈ 0,0833 = 8,33%."
      ],
      coreConcept: "Teorema de Bayes e a falácia da taxa básica (base rate fallacy) na interpretação de exames médicos.",
      trapWarning: "Acreditar que um teste com 90% de acerto garante 90% de chance de o paciente estar doente após um resultado positivo."
    },
    commonTraps: ["confundir_sensibilidade_com_vpp", "ignorar_a_baixa_prevalencia"],
    tags: ["teorema_de_bayes", "medicina_triagem", "probabilidade_condicional"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-013",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Eventos Complementares e Probabilidade de Pelo Menos Um",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um atirador esportivo possui uma probabilidade constante de acertar o centro do alvo igual a 0,4 em cada disparo individual. Os disparos são rigorosamente independentes uns dos outros. Ele realiza uma série de 3 disparos consecutivos.",
      source: "Original Inep"
    },
    prompt: "A probabilidade de que o atleta acerte o centro do alvo pelo menos uma vez durante essa série de três disparos é igual a:",
    options: [
      { id: "a", text: "21,6%", isCorrect: false, distractorRationale: "O estudante calculou a probabilidade de errar todos os três disparos (0,6³ = 0,216 = 21,6%)." },
      { id: "b", text: "40,0%", isCorrect: false, distractorRationale: "O estudante manteve a probabilidade de um único disparo isolado." },
      { id: "c", text: "60,0%", isCorrect: false, distractorRationale: "O estudante somou 0,4 + 0,4 + 0,4 desconsiderando a interseção e a não cumulatividade aditiva de eventos independentes." },
      { id: "d", text: "78,4%", isCorrect: true, distractorRationale: null },
      { id: "e", text: "93,6%", isCorrect: false, distractorRationale: "Erro de potência ao calcular 1 - 0,4³ em vez de 1 - 0,6³." }
    ],
    detailedExplanation: {
      summary: "A probabilidade de 'pelo menos um sucesso' é o complementar da probabilidade de 'nenhum sucesso' (todas as tentativas falharem).",
      stepByStep: [
        "Passo 1: Identificar a probabilidade de errar um disparo: P(Erro) = 1 - 0,4 = 0,6.",
        "Passo 2: Calcular a probabilidade de errar todos os 3 disparos consecutivos (eventos independentes):\nP(Errar 3 vezes) = 0,6 × 0,6 × 0,6 = 0,216 = 21,6%.",
        "Passo 3: Aplicar a propriedade do evento complementar:\nP(Pelo menos 1 acerto) = 1 - P(Nenhum acerto) = 1 - 0,216 = 0,784 = 78,4%."
      ],
      coreConcept: "Uso do evento complementar para resolver problemas de 'pelo menos um'.",
      trapWarning: "Somar as probabilidades de cada disparo (0,4 + 0,4 + 0,4 = 1,2), o que viola o princípio de independência."
    },
    commonTraps: ["somar_probabilidades_independentes", "esquecer_do_evento_complementar"],
    tags: ["evento_complementar", "pelo_menos_um", "independencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-014",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Distribuição Binomial",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma linha de montagem automatizada produz componentes eletrônicos com uma taxa histórica de defeito de 10% (p = 0,10) por unidade, de maneira independente. Um inspetor de qualidade seleciona aleatoriamente uma amostra de exatamente 4 componentes da linha de produção.",
      source: "Controle Estatístico de Processos (CEP)"
    },
    prompt: "Qual é a probabilidade de que essa amostra contenha exatamente um componente com defeito?",
    options: [
      { id: "a", text: "2,916%", isCorrect: false, distractorRationale: "O estudante calculou apenas a probabilidade de uma ordem fixa: p * (1-p)³ = 0,10 * 0,729 = 0,0729, ou calculou 0,10³ * 0,90." },
      { id: "b", text: "7,29%", isCorrect: false, distractorRationale: "O estudante esqueceu de multiplicar pela combinação de posições (C(4,1) = 4)." },
      { id: "c", text: "29,16%", isCorrect: true, distractorRationale: null },
      { id: "d", text: "36,0%", isCorrect: false, distractorRationale: "O estudante multiplicou 4 * 0,10 e subtraiu arbitrariamente." },
      { id: "e", text: "40,0%", isCorrect: false, distractorRationale: "O estudante multiplicou a quantidade de peças pela taxa de defeito: 4 × 10% = 40%." }
    ],
    detailedExplanation: {
      summary: "A probabilidade binomial de obter k sucessos em n tentativas independentes é dada por P(X = k) = C(n, k) × p^k × (1-p)^(n-k).",
      stepByStep: [
        "Passo 1: Identificar os parâmetros:\nn = 4 tentativas;\nk = 1 peça defeituosa;\np = 0,10 (probabilidade de defeito);\nq = 1 - p = 0,90 (probabilidade de ser perfeita).",
        "Passo 2: Calcular o número de maneiras de escolher qual das 4 peças é a defeituosa:\nC(4, 1) = 4! / (1! × 3!) = 4 maneiras (D-P-P-P, P-D-P-P, P-P-D-P, P-P-P-D).",
        "Passo 3: Calcular a probabilidade de uma sequência individual:\nP(sequência) = (0,10)^1 × (0,90)^3 = 0,10 × 0,729 = 0,0729.",
        "Passo 4: Multiplicar pelo coeficiente binomial:\nP(Total) = 4 × 0,0729 = 0,2916 = 29,16%."
      ],
      coreConcept: "Distribuição binomial de probabilidade e fator combinatório de ordenação.",
      trapWarning: "Calcular apenas a probabilidade de a PRIMEIRA peça ser defeituosa (7,29%), esquecendo que o defeito pode ocorrer em qualquer uma das 4 posições."
    },
    commonTraps: ["esquecer_do_coeficiente_binomial", "tratar_como_ordem_unica"],
    tags: ["binomial", "controle_de_qualidade", "analise_combinatoria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-015",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Princípio Fundamental da Contagem com Restrições",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para cadastrar o acesso ao aplicativo de um banco digital, os clientes devem criar uma senha de segurança composta por exatamente 4 dígitos numéricos seguidos de 2 letras maiúsculas. O regulamento bancário estipula que todos os 4 algarismos devem ser distintos entre si e que a primeira letra da dupla não pode ser uma vogal (considerando o alfabeto oficial de 26 letras com 5 vogais).",
      source: "Segurança da Informação Bancária"
    },
    prompt: "A expressão matemática que representa corretamente a quantidade total de senhas distintas possíveis que satisfazem a todas essas condições de segurança é:",
    options: [
      { id: "a", text: "10⁴ × 21 × 26", isCorrect: false, distractorRationale: "O estudante permitiu a repetição de algarismos ao usar 10⁴ em vez do arranjo sem repetição 10 × 9 × 8 × 7." },
      { id: "b", text: "(10 × 9 × 8 × 7) × (21 × 26)", isCorrect: true, distractorRationale: null },
      { id: "c", text: "(10 × 9 × 8 × 7) × (21 × 20)", isCorrect: false, distractorRationale: "O estudante supôs indevidamente que as letras também não poderiam se repetir." },
      { id: "d", text: "(10! / 4!) × (26! / 2!)", isCorrect: false, distractorRationale: "Fórmula de arranjo aplicada incorretamente nos denominadores." },
      { id: "e", text: "C(10, 4) × C(26, 2)", isCorrect: false, distractorRationale: "Usou combinações em vez de arranjos, ignorando que a ordem dos dígitos e das letras define senhas distintas." }
    ],
    detailedExplanation: {
      summary: "Pelo Princípio Fundamental da Contagem (PFC), calculamos o produto das possibilidades para cada posição individual respeitando as restrições impostas.",
      stepByStep: [
        "Passo 1: Para os 4 algarismos distintos (escolhidos de 0 a 9):\n- 1º dígito: 10 opções\n- 2º dígito: 9 opções\n- 3º dígito: 8 opções\n- 4º dígito: 7 opções\nTotal de combinações de dígitos = 10 × 9 × 8 × 7 = 5.040.",
        "Passo 2: Para as 2 letras do alfabeto (26 letras, das quais 5 são vogais e 21 são consoantes):\n- 1ª letra (não pode ser vogal): 26 - 5 = 21 opções (consoantes);\n- 2ª letra (não há restrição de repetição nem de vogal): 26 opções.",
        "Passo 3: Multiplicar pelo PFC:\nTotal de senhas = (10 × 9 × 8 × 7) × (21 × 26)."
      ],
      coreConcept: "Princípio Multiplicativo e análise de restrições em códigos de segurança.",
      trapWarning: "Tratar senhas como combinações simples, esquecendo que senhas dependem fundamentalmente da ordenação dos caracteres."
    },
    commonTraps: ["usar_combinacao_em_vez_de_pfc", "permitir_repeticao_quando_proibido"],
    tags: ["pfc", "senhas", "restricoes_contagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-016",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Combinação Simples vs Arranjo",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O Centro Acadêmico de Medicina de uma universidade federal é formado por 12 estudantes. Para organizar a Semana Acadêmica de Saúde Coletiva, será formada uma comissão executiva de 4 membros, sem hierarquia interna de cargos (todos os membros terão funções idênticas).",
      source: "Vestibular Nacional"
    },
    prompt: "O número total de maneiras distintas pelas quais essa comissão executiva pode ser formada é igual a:",
    options: [
      { id: "a", text: "48", isCorrect: false, distractorRationale: "O estudante multiplicou 12 por 4." },
      { id: "b", text: "495", isCorrect: true, distractorRationale: null },
      { id: "c", text: "1.1880", isCorrect: false, distractorRationale: "O estudante calculou o arranjo A(12, 4) = 12 × 11 × 10 × 9 = 11.880, considerando que a ordem dos membros gerasse comissões diferentes." },
      { id: "d", text: "2.970", isCorrect: false, distractorRationale: "O estudante dividiu o arranjo apenas por 4 em vez de 4! = 24." },
      { id: "e", text: "12⁴", isCorrect: false, distractorRationale: "O estudante calculou produto com repetição." }
    ],
    detailedExplanation: {
      summary: "Como a comissão não possui cargos diferenciados, a ordem dos membros escolhidos não altera o grupo; portanto, trata-se de uma combinação simples C(n, p).",
      stepByStep: [
        "Passo 1: Verificar se a ordem importa: Escolher Beatriz, Carlos, Diana e Eduardo é a mesma comissão que escolher Eduardo, Diana, Carlos e Beatriz. A ordem NÃO importa -> Combinação Simples.",
        "Passo 2: Aplicar a fórmula de combinação: C(n, p) = n! / [p! × (n - p)!].",
        "Passo 3: Substituir os valores n = 12 e p = 4:\nC(12, 4) = (12 × 11 × 10 × 9) / (4 × 3 × 2 × 1).",
        "Passo 4: Simplificar os termos:\n(4 × 3) = 12 simplifica com 12 no numerador.\n10 / 2 = 5.\nC(12, 4) = 11 × 5 × 9 = 55 × 9 = 495 maneiras distintas."
      ],
      coreConcept: "Diferenciação entre arranjo e combinação simples em problemas de comissões.",
      trapWarning: "Usar arranjo e esquecer de dividir pelo fatorial do tamanho do grupo (4! = 24) quando os cargos não são hierarquizados."
    },
    commonTraps: ["confundir_combinacao_com_arranjo", "dividir_apenas_por_p_em_vez_de_p_fatorial"],
    tags: ["combinacao_simples", "comissoes", "analise_combinatoria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-017",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Permutação com Repetição em Malha de Ruas",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um ciclista entrega medicamentos partindo do ponto inicial A (coordenadas 0, 0) com destino ao hospital no ponto B (coordenadas 5, 3) sobre uma malha viária perfeitamente quadriculada. Ele só pode se deslocar para o leste (L - uma unidade para a direita) ou para o norte (N - uma unidade para cima), realizando sempre trajetos de comprimento mínimo.",
      source: "Original Estilo ENEM"
    },
    prompt: "Quantos trajetos distintos de comprimento mínimo esse ciclista pode escolher para se deslocar do ponto A até o hospital no ponto B?",
    options: [
      { id: "a", text: "15", isCorrect: false, distractorRationale: "O estudante multiplicou os deslocamentos 5 × 3 = 15." },
      { id: "b", text: "28", isCorrect: false, distractorRationale: "O estudante calculou C(8, 2) em vez de C(8, 3)." },
      { id: "c", text: "56", isCorrect: true, distractorRationale: null },
      { id: "d", text: "120", isCorrect: false, distractorRationale: "O estudante calculou uma permutação com denominadores incompletos." },
      { id: "e", text: "336", isCorrect: false, distractorRationale: "O estudante calculou arranjo A(8, 3) = 8 × 7 × 6 = 336." }
    ],
    detailedExplanation: {
      summary: "Qualquer trajeto mínimo corresponde a uma sequência de 5 passos para o Leste e 3 passos para o Norte, equivalendo a permutações com repetição de 8 elementos.",
      stepByStep: [
        "Passo 1: Contar a quantidade total de passos necessários:\n5 passos para o Leste (L) e 3 passos para o Norte (N) = 5 + 3 = 8 passos no total.",
        "Passo 2: Notar que qualquer rota é um anagrama da palavra formada por 5 letras 'L' e 3 letras 'N' (ex: L-L-L-L-L-N-N-N, L-N-L-N-L-N-L-L, etc.).",
        "Passo 3: Aplicar a fórmula de permutação com repetição:\nP_8^(5, 3) = 8! / (5! × 3!).",
        "Passo 4: Simplificar a fração:\n(8 × 7 × 6 × 5!) / (5! × 6) = (8 × 7 × 6) / 6 = 8 × 7 = 56 trajetos distintos."
      ],
      coreConcept: "Modelagem de caminhos em malhas cartesianas por permutação com repetição ou combinação simples C(8, 3).",
      trapWarning: "Multiplicar as coordenadas (5 × 3 = 15), confundindo área retangular com quantidade de caminhos possíveis."
    },
    commonTraps: ["multiplicar_coordenadas", "esquecer_repeticoes_de_letras"],
    tags: ["permutacao_repeticao", "caminhos_malha", "analise_combinatoria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-018",
    area: "matematica",
    competence: 7,
    skill: 29,
    topic: "Probabilidade",
    subtopic: "Probabilidade Condicional com Espaço Amostral Reduzido",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O hemocentro de um hospital regional registrou o estoque de 500 bolsas de sangue coletadas em uma campanha, categorizadas segundo o sistema ABO e o fator Rh:\n\n• Grupo O: 180 bolsas com Rh+ e 40 bolsas com Rh-\n• Grupo A: 160 bolsas com Rh+ e 30 bolsas com Rh-\n• Grupo B: 60 bolsas com Rh+ e 10 bolsas com Rh-\n• Grupo AB: 15 bolsas com Rh+ e 5 bolsas com Rh-",
      source: "Hemocentro Estadual"
    },
    prompt: "Uma bolsa é retirada aleatoriamente do estoque e constata-se imediatamente que seu fator Rh é negativo (Rh-). Sabendo dessa condição, qual é a probabilidade de que essa bolsa seja do grupo O?",
    options: [
      { id: "a", text: "8%", isCorrect: false, distractorRationale: "O estudante calculou a proporção sobre o total geral de bolsas: 40 / 500 = 8%." },
      { id: "b", text: "18,2%", isCorrect: false, distractorRationale: "O estudante calculou 40 / 220 (total de bolsas do grupo O)." },
      { id: "c", text: "47,1% (ou exatamente 4/8,5 ≈ 47%)", isCorrect: true, distractorRationale: null },
      { id: "d", text: "50,0%", isCorrect: false, distractorRationale: "O estudante estimou metade por aproximação incorreta." },
      { id: "e", text: "44,0%", isCorrect: false, distractorRationale: "O estudante somou apenas as bolsas dos grupos O e A." }
    ],
    detailedExplanation: {
      summary: "Na probabilidade condicional P(A | B), o espaço amostral é restrito apenas aos elementos que satisfazem à condição dada B (bolsas Rh-).",
      stepByStep: [
        "Passo 1: Somar todas as bolsas que possuem o fator Rh negativo (novo espaço amostral reduzido):\nTotal Rh- = 40 (O) + 30 (A) + 10 (B) + 5 (AB) = 85 bolsas.",
        "Passo 2: Identificar quantas bolsas desse subgrupo pertencem ao Grupo O:\nFavoráveis = 40 bolsas do tipo O com Rh-.",
        "Passo 3: Calcular a probabilidade condicional:\nP(Grupo O | Rh-) = 40 / 85.",
        "Passo 4: Simplificar dividindo por 5:\n40 / 85 = 8 / 17 ≈ 0,4705... = 47,06% (aproximadamente 47,1%)."
      ],
      coreConcept: "Redução de espaço amostral na probabilidade condicional a partir de tabelas de contingência.",
      trapWarning: "Dividir 40 pelo total de 500 bolsas (8%), ignorando que já se SABE que a bolsa é Rh negativo."
    },
    commonTraps: ["usar_espaco_amostral_global_em_vez_do_condicional"],
    tags: ["probabilidade_condicional", "tabela_contingencia", "grupos_sanguineos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-019",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Princípio das Gavetas de Dirichlet (Casa dos Pombos)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma dinâmica de acolhimento de calouros da faculdade de Medicina, o coordenador quer saber qual é o número mínimo de estudantes que devem estar presentes em uma sala para que se possa garantir, com certeza matemática absoluta (100%), que pelo menos 3 deles comemoram aniversário no mesmo mês do ano.",
      source: "Olimpíada de Matemática / Raciocínio Lógico"
    },
    prompt: "O número mínimo de estudantes necessário para assegurar essa certeza é de:",
    options: [
      { id: "a", text: "25", isCorrect: true, distractorRationale: null },
      { id: "b", text: "24", isCorrect: false, distractorRationale: "Com 24 estudantes, no pior caso é possível haver exatamente 2 aniversariantes em cada um dos 12 meses, não garantindo que haja 3 em nenhum mês." },
      { id: "c", text: "36", isCorrect: false, distractorRationale: "O estudante multiplicou 12 meses por 3 estudantes = 36." },
      { id: "d", text: "37", isCorrect: false, distractorRationale: "O estudante aplicou o princípio para 4 aniversariantes por mês." },
      { id: "e", text: "15", isCorrect: false, distractorRationale: "O estudante somou 12 meses com 3 estudantes." }
    ],
    detailedExplanation: {
      summary: "Pelo Princípio da Casa dos Pombos, para garantir k objetos em uma mesma gaveta, o pior cenário ocorre quando todas as n gavetas recebem exatamente (k - 1) objetos antes de adicionar mais 1.",
      stepByStep: [
        "Passo 1: Identificar o número de 'gavetas': os 12 meses do ano (n = 12).",
        "Passo 2: Modelar o pior cenário possível (distribuição mais uniforme e desfavorável):",
        "Podemos ter exatamente 2 pessoas fazendo aniversário em janeiro, 2 em fevereiro, 2 em março... até 2 em dezembro.",
        "Passo 3: Calcular o total de pessoas nesse pior cenário:\n12 meses × 2 pessoas = 24 estudantes.",
        "Passo 4: Adicionar o 25º estudante: obrigatoriamente ele terá que fazer aniversário em algum dos 12 meses que já possuem 2 aniversariantes.",
        "Passo 5: Portanto, com 25 pessoas, é garantido que pelo menos um mês terá no mínimo 3 aniversariantes (24 + 1 = 25)."
      ],
      coreConcept: "Princípio das Gavetas de Dirichlet e garantia lógica de condições sob incerteza.",
      trapWarning: "Pensar em 24 pessoas. Com 24 pessoas ainda é possível o caso de exatamente 2 em cada mês sem violar a condição."
    },
    commonTraps: ["esquecer_do_pior_cenario", "multiplicar_direto_n_por_k"],
    tags: ["casa_dos_pombos", "dirichlet", "raciocinio_logico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-PROB-020",
    area: "matematica",
    competence: 7,
    skill: 28,
    topic: "Probabilidade",
    subtopic: "Combinações Completas com Repetição",
    difficulty: 4,
    estimatedTimeSeconds: 200,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma sorveteria artesanal oferece picolés em 4 sabores tradicionais: chocolate, baunilha, morango e maracujá. Um cliente deseja comprar um pacote promocional contendo exatamente 6 picolés, podendo escolher qualquer quantidade de cada sabor (incluindo a possibilidade de comprar todos do mesmo sabor ou não escolher algum sabor).",
      source: "Vestibular Fuvest / Unicamp"
    },
    prompt: "De quantas maneiras distintas esse cliente pode compor a seleção dos 6 picolés de seu pacote promocional?",
    options: [
      { id: "a", text: "24", isCorrect: false, distractorRationale: "O estudante multiplicou 4 × 6 = 24." },
      { id: "b", text: "84", isCorrect: true, distractorRationale: null },
      { id: "c", text: "120", isCorrect: false, distractorRationale: "O estudante calculou C(10, 3) = 120 (erro na contagem dos separadores)." },
      { id: "d", text: "4096", isCorrect: false, distractorRationale: "O estudante calculou 4⁶ = 4.096, considerando a ordem dos picolés relevante como em uma sequência ordenada." },
      { id: "e", text: "15", isCorrect: false, distractorRationale: "O estudante calculou C(6, 4) = 15." }
    ],
    detailedExplanation: {
      summary: "O número de soluções inteiras não negativas da equação x1 + x2 + x3 + x4 = 6 é dado pelo método dos traços e bolas (estrelas e barras), que resulta na combinação com repetição C(n + p - 1, p).",
      stepByStep: [
        "Passo 1: Modelar como equação de soluções inteiras não negativas:\nC + B + M + MA = 6 (onde C, B, M, MA ≥ 0 representam as quantidades de cada um dos 4 sabores).",
        "Passo 2: Utilizar o método visual das 'bolas e traços':\nTemos 6 objetos (bolas) a serem distribuídos entre 4 categorias, o que exige 4 - 1 = 3 separadores (traços).\nExemplo: ● ● | ● | ● ● ● | (2 chocolates, 1 baunilha, 3 morangos, 0 maracujá).",
        "Passo 3: A quantidade total de símbolos é 6 bolas + 3 traços = 9 posições.",
        "Passo 4: O número de maneiras é a escolha de onde posicionar os 3 traços entre as 9 posições:\nC(9, 3) = (9 × 8 × 7) / (3 × 2 × 1) = 3 × 4 × 7 = 84 maneiras distintas."
      ],
      coreConcept: "Combinação completa com repetição e soluções inteiras não negativas de equações lineares.",
      trapWarning: "Calcular 4⁶ (4.096), que assume que os picolés são retirados em uma ordem numerada, quando na verdade o cliente só leva o pacote final indiferenciado."
    },
    commonTraps: ["usar_arranjo_com_repeticao", "errar_quantidade_de_separadores"],
    tags: ["combinacao_completa", "estrelas_e_barras", "analise_combinatoria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];


