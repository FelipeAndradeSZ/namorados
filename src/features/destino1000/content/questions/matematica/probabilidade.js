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
  }
];

