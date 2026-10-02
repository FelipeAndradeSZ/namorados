/**
 * Banco de Questões ENEM — Matemática e suas Tecnologias
 * Módulo: Progressões Aritméticas (PA) e Progressões Geométricas (PG)
 * 
 * 25 Questões Inéditas Rigorosamente Alinhadas à Matriz do INEP
 * Validação: 5 alternativas, 1 correta, justificativa para cada distrator,
 * resolução pedagógica passo a passo e foco nos pilares da TRI.
 * ZERO termos de viagem.
 */

export const QUESTIONS_PROGRESSOES = [
  {
    id: "MAT-PROG-001",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Termo Geral da PA e Planejamento de Treinamento Esportivo",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma estudante de medicina estabeleceu uma rotina de condicionamento físico para aprimorar sua resistência cardiovascular. No 1º dia de treinamento, ela correu 1.500 metros em uma pista de atletismo. O programa prevê que, a cada dia subsequente de treino, a distância percorrida aumentará em exatamente 250 metros em relação ao dia anterior.",
      source: "Planejamento e Fisiologia do Exercício Físico"
    },
    prompt: "Mantendo essa progressão constante, a distância que a estudante percorrerá no 30º dia de treino será de:",
    options: [
      { id: "a", text: "8.750 metros (8,75 km).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "9.000 metros.", isCorrect: false, distractorRationale: "Cálculo obtido por multiplicar 250 por 30 (7.500) e somar a1 (1.500), esquecendo que o primeiro termo não soma a razão (fórmula é (n - 1)·r, com 29 razões)." },
      { id: "c", text: "7.500 metros.", isCorrect: false, distractorRationale: "Representa apenas o acréscimo de 30 dias sem somar a distância inicial de 1.500 m." },
      { id: "d", text: "10.250 metros.", isCorrect: false, distractorRationale: "Erro de contagem somando 35 razões em vez de 29." },
      { id: "e", text: "6.250 metros.", isCorrect: false, distractorRationale: "Cálculo truncado para apenas 20 dias de treino." }
    ],
    detailedExplanation: {
      summary: "A sequência das distâncias diárias forma uma Progressão Aritmética (PA) de termo inicial a1 = 1.500 m e razão r = 250 m. O termo geral é dado por an = a1 + (n - 1) · r. Para o 30º dia: a30 = 1.500 + (30 - 1) · 250 = 1.500 + 29 · 250 = 1.500 + 7.250 = 8.750 metros.",
      stepByStep: [
        "1. Identificação do modelo matemático: Progressão Aritmética (PA) com taxa de acréscimo constante.",
        "2. Identificação dos parâmetros: a1 = 1.500 m; r = 250 m; n = 30.",
        "3. Fórmula do termo geral da PA: an = a1 + (n - 1) · r.",
        "4. Aplicação numérica: a30 = 1.500 + (30 - 1) · 250 = 1.500 + 29 · 250.",
        "5. Cálculo intermediário: 29 · 250 = 7.250 m.",
        "6. Cálculo final: a30 = 1.500 + 7.250 = 8.750 metros (8,75 km).",
        "7. Conclusão: Alternativa (a) correta."
      ],
      coreConcept: "Termo Geral da Progressão Aritmética: an = a1 + (n - 1) · r",
      trapWarning: "No ENEM: Atenção com o expoente/fator (n - 1)! Para chegar ao 30º termo partindo do 1º, você dá 29 'pulos' (soma a razão 29 vezes), e não 30 vezes!"
    },
    commonTraps: [
      "Multiplicar a razão por n em vez de (n - 1)",
      "Esquecer de somar o valor inicial a1"
    ],
    tags: ["progressao-aritmetica", "termo-geral", "pa", "treino-esportivo", "matematica-basica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-002",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Soma dos Termos de uma PA: Arquibancada de Anfiteatro Universitário",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O anfiteatro de uma faculdade de medicina foi projetado em formato semicircular com 20 fileiras de poltronas dispostas em arquibancada. A 1ª fileira (mais próxima do palco) possui 18 assentos, e cada fileira subsequente possui exatamente 4 assentos a mais que a fileira imediatamente anterior.",
      source: "Engenharia Acústica e Projeto Arquitetônico de Auditórios"
    },
    prompt: "A capacidade total de assentos desse anfiteatro (número total de poltronas somando todas as 20 fileiras) é igual a:",
    options: [
      { id: "a", text: "1.120 assentos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "940 assentos.", isCorrect: false, distractorRationale: "Cálculo obtido por somar apenas 15 fileiras ou errar o termo a20." },
      { id: "c", text: "1.260 assentos.", isCorrect: false, distractorRationale: "Erro ao multiplicar pelo total de 20 fileiras sem dividir por 2 na fórmula da soma de Gauss." },
      { id: "d", text: "560 assentos.", isCorrect: false, distractorRationale: "Corresponde à metade do total correto (erro de divisão extra por 2)." },
      { id: "e", text: "1.880 assentos.", isCorrect: false, distractorRationale: "Cálculo com duplicação indevida da capacidade." }
    ],
    detailedExplanation: {
      summary: "O número de poltronas em cada fileira forma uma PA com a1 = 18, r = 4 e n = 20. O último termo é: a20 = a1 + 19 · r = 18 + 19 · 4 = 18 + 76 = 94 assentos. A soma total dos termos é calculada pela fórmula de Gauss: Sn = (a1 + an) · n / 2 = (18 + 94) · 20 / 2 = 112 · 10 = 1.120 assentos.",
      stepByStep: [
        "1. Parâmetros da PA: a1 = 18; r = 4; n = 20.",
        "2. Cálculo do 20º termo (a20): a20 = a1 + (20 - 1) · r = 18 + 19 · 4 = 18 + 76 = 94.",
        "3. Fórmula da soma dos n primeiros termos de uma PA: Sn = [(a1 + an) · n] / 2.",
        "4. Aplicação numérica: S20 = [(18 + 94) · 20] / 2.",
        "5. Simplificação: S20 = 112 · 10 = 1.120 assentos.",
        "6. Conclusão: O anfiteatro comporta 1.120 pessoas sentadas. Alternativa (a) correta."
      ],
      coreConcept: "Soma dos Termos de uma PA: Sn = [(a1 + an) · n] / 2",
      trapWarning: "No ENEM: Questões de arquibancadas, caixas empilhadas em triângulo ou pilhas de tubos são SEMPRE soma de PA! Calcule o último termo primeiro e aplique a fórmula de Gauss!"
    },
    commonTraps: [
      "Calcular apenas o número de assentos da última fileira (94) em vez de somar todas as fileiras",
      "Esquecer de dividir por 2 na fórmula da soma"
    ],
    tags: ["soma-de-pa", "arquibancada", "gauss", "geometria-e-algebra", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-003",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Termo Geral da PG: Proliferação Bacteriana Exponencial em Cultura",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um experimento de microbiologia médica, uma colônia de bactérias *Escherichia coli* foi inoculada em meio nutriente ótimo a 37 °C. Sob essas condições ideais, a população inicial continha exatamente 400 bactérias (no instante t = 0 h) e o número de indivíduos duplicou a cada intervalo de 30 minutos (meia hora) por fissão binária simples.",
      source: "Microbiologia Quantitativa e Cinética de Crescimento Celular"
    },
    prompt: "Supondo que não haja limitação de espaço nem de nutrientes durante as primeiras horas, a quantidade total de bactérias presentes na cultura ao término de exatamente 4 horas após a inoculação será de:",
    options: [
      { id: "a", text: "102.400 bactérias.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "51.200 bactérias.", isCorrect: false, distractorRationale: "Cálculo com 7 duplicações (3,5 horas) em vez de 8 duplicações (4 horas)." },
      { id: "c", text: "204.800 bactérias.", isCorrect: false, distractorRationale: "Cálculo com 9 duplicações (4,5 horas)." },
      { id: "d", text: "3.200 bactérias.", isCorrect: false, distractorRationale: "Cálculo linear de PA (multiplicação simples 400 · 8) ignorando a natureza exponencial da PG." },
      { id: "e", text: "12.800 bactérias.", isCorrect: false, distractorRationale: "Cálculo considerando duplicação a cada 1 hora em vez de a cada 30 minutos." }
    ],
    detailedExplanation: {
      summary: "Em 4 horas, o número de intervalos de 30 minutos é: n = 4 h / 0,5 h = 8 intervalos de duplicação. A sequência forma uma Progressão Geométrica (PG) de razão q = 2 e população inicial N0 = 400. População após 8 duplicações: N(8) = N0 · 2⁸ = 400 · 256 = 102.400 bactérias.",
      stepByStep: [
        "1. Identificação dos ciclos de duplicação: 4 horas = 240 minutos; cada ciclo dura 30 minutos ⟹ 240 / 30 = 8 ciclos.",
        "2. Modelo matemático de PG: N(t) = N0 · q^k, onde q = 2 (duplicação) e k = 8.",
        "3. Potência de 2: 2⁸ = 256.",
        "4. Cálculo final: N = 400 · 256 = 102.400 bactérias.",
        "5. Conclusão: Após 4 horas, há 102.400 bactérias na placa de Petri. Alternativa (a) correta."
      ],
      coreConcept: "Termo Geral da Progressão Geométrica (PG) e Crescimento Exponencial",
      trapWarning: "No ENEM: Duplicações a cada meia hora em 4 horas significam OITO duplicações, e não quatro! Converta o tempo total para a mesma unidade do tempo de geração!"
    },
    commonTraps: [
      "Usar 4 duplicações achando que são 4 horas sem dividir pelos 30 minutos",
      "Confundir crescimento exponencial (PG, potências de 2) com multiplicação linear simples (PA)"
    ],
    tags: ["progressao-geometrica", "pg", "crescimento-bacteriano", "exponencial", "microbiologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-004",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Soma dos Termos de uma PG Finita e Economia Financeira",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um jovem decidiu participar de um desafio de poupança progressiva durante 6 meses (do mês 1 ao mês 6). No primeiro mês, ele guardou R$ 100,00 no cofre. A cada mês seguinte, ele guardou exatamente o dobro do valor que havia guardado no mês anterior.",
      source: "Educação Financeira e Modelagem Matemática"
    },
    prompt: "O valor total acumulado no cofre ao final dos 6 meses de poupança (a soma de todos os depósitos efetuados) será igual a:",
    options: [
      { id: "a", text: "R$ 6.300,00.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 3.200,00.", isCorrect: false, distractorRationale: "R$ 3.200,00 é apenas o valor depositado isoladamente no 6º mês (a6 = 100 · 2⁵ = 3.200), e não o total acumulado somando todos os meses." },
      { id: "c", text: "R$ 6.400,00.", isCorrect: false, distractorRationale: "Erro esquecendo de subtrair o termo 1 na fórmula da soma (a1 · (q^n - 1) / (q - 1))." },
      { id: "d", text: "R$ 2.100,00.", isCorrect: false, distractorRationale: "Cálculo considerando apenas 5 meses de depósitos." },
      { id: "e", text: "R$ 1.200,00.", isCorrect: false, distractorRationale: "Cálculo linear de PA (100 + 200 + 300 + 400 + ...), desconsiderando a duplicação em PG." }
    ],
    detailedExplanation: {
      summary: "Os depósitos mensais formam uma PG com a1 = 100, razão q = 2 e n = 6 meses. Os valores são: Mês 1: 100; Mês 2: 200; Mês 3: 400; Mês 4: 800; Mês 5: 1.600; Mês 6: 3.200. Pela fórmula da soma da PG finita: Sn = a1 · (q^n - 1) / (q - 1) = 100 · (2⁶ - 1) / (2 - 1) = 100 · (64 - 1) / 1 = 100 · 63 = R$ 6.300,00.",
      stepByStep: [
        "1. Identificação da PG: a1 = 100; q = 2; n = 6 termos.",
        "2. Fórmula da soma da PG finita: Sn = [a1 · (q^n - 1)] / (q - 1).",
        "3. Cálculo da potência de 2: 2⁶ = 64.",
        "4. Aplicação numérica: S6 = [100 · (64 - 1)] / (2 - 1) = 100 · 63 / 1 = R$ 6.300,00.",
        "5. Verificação direta por soma simples: 100 + 200 + 400 + 800 + 1.600 + 3.200 = 6.300.",
        "6. Conclusão: Total acumulado = R$ 6.300,00. Alternativa (a) correta."
      ],
      coreConcept: "Soma dos Termos de uma PG Finita: Sn = a1 · (q^n - 1) / (q - 1)",
      trapWarning: "No ENEM: Cuidado com a distinção entre 'quanto ele depositou no último mês' (a6 = R$ 3.200,00) e 'quanto ele acumulou no total' (S6 = R$ 6.300,00)!"
    },
    commonTraps: [
      "Responder o valor do último termo (R$ 3.200) em vez da soma acumulada",
      "Errar a potência 2⁶ (64)"
    ],
    tags: ["pg-finita", "soma-de-pg", "poupanca", "educacao-financeira", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-005",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Soma de PG Infinita Convergente: O Salto da Bola de Borracha",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma bola de borracha é solta do repouso a partir de uma altura inicial de 10 metros acima de um piso rígido perfeitamente plano. A cada impacto com o solo, ela perde uma fração de sua energia mecânica e rebate atingindo exatamente metade (1/2) da altura máxima alcançada no salto imediatamente anterior.",
      source: "Física Mecânica, Coeficiente de Restituição e Séries Geométricas"
    },
    prompt: "Considerando que os rebotes se sucedem indefinidamente no plano vertical até a parada completa da bola, a distância vertical total percorrida pela bola (somando todas as descidas e todas as subidas) é de:",
    options: [
      { id: "a", text: "30 metros.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "20 metros.", isCorrect: false, distractorRationale: "20 metros seria a soma considerando apenas as descidas (ou somando a queda inicial como se houvesse subida prévia)." },
      { id: "c", text: "15 metros.", isCorrect: false, distractorRationale: "Cálculo truncado somando apenas os dois primeiros impactos." },
      { id: "d", text: "40 metros.", isCorrect: false, distractorRationale: "Erro multiplicando a altura inicial por 4 sem considerar a convergência da série geométrica." },
      { id: "e", text: "Infinito metros, pois a quantidade de quiques é infinita.", isCorrect: false, distractorRationale: "Embora haja infinitos termos, a série é geométrica com razão |q| = 1/2 < 1, convergindo rigorosamente para um valor finito." }
    ],
    detailedExplanation: {
      summary: "A bola desce inicialmente 10 m (sem subida prévia). Em seguida, para cada salto subsequente, ela SOBE e DESCE a mesma altura: Salto 1: sobe 5 m e desce 5 m (10 m); Salto 2: sobe 2,5 m e desce 2,5 m (5 m); Salto 3: sobe 1,25 m e desce 1,25 m (2,5 m)... A distância total é: D_total = Queda inicial (10 m) + 2 · [Soma das alturas de subida]. As subidas formam uma PG infinita com a1 = 5 m e q = 1/2: S_subidas = a1 / (1 - q) = 5 / (1 - 1/2) = 5 / 0,5 = 10 m. Logo: D_total = 10 + 2 · (10) = 10 + 20 = 30 metros.",
      stepByStep: [
        "1. Primeira queda: A bola cai de 10 metros ⟹ D0 = 10 m.",
        "2. Análise dos rebotes seguintes: Cada rebote envolve subir uma altura h e descer a mesma altura h (distância = 2 · h).",
        "3. Sequência de subidas: h1 = 5 m; h2 = 2,5 m; h3 = 1,25 m... PG infinita de termo inicial a1 = 5 e razão q = 0,5.",
        "4. Fórmula da soma da PG infinita (|q| < 1): S∞ = a1 / (1 - q).",
        "5. Cálculo da soma das subidas: S_subidas = 5 / (1 - 0,5) = 5 / 0,5 = 10 metros.",
        "6. Como a bola sobe e desce em cada rebote: Distância dos rebotes = 2 · S_subidas = 2 · 10 = 20 metros.",
        "7. Distância total percorrida: D_total = Queda inicial + Distância dos rebotes = 10 + 20 = 30 metros.",
        "8. Conclusão: Alternativa (a) correta."
      ],
      coreConcept: "Soma de PG Infinita: S∞ = a1 / (1 - q) para |q| < 1",
      trapWarning: "No ENEM: Muito cuidado com o primeiro movimento! A bola CAIU de 10 metros, ela NÃO subiu 10 metros antes! Portanto, o 10 entra apenas UMA VEZ na conta; os demais saltos entram DUAS VEZES (subida + descida)!"
    },
    commonTraps: [
      "Dobrar a primeira queda de 10 metros como se ela tivesse subido antes de cair",
      "Esquecer que a partir do primeiro quique a bola sobe E desce em cada salto",
      "Achar que uma soma de infinitos termos tem que dar valor infinito"
    ],
    tags: ["pg-infinita", "series-convergentes", "bola-de-borracha", "fisica-e-matematica", "geometria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-006",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Interpolação Aritmética e Instalação de Postes de Iluminação",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma avenida reta de um novo polo tecnológico universitário, a prefeitura instalou um poste de iluminação no início da via (quilômetro 4) e outro no final (quilômetro 28). Para garantir segurança noturna aos estudantes, a equipe de engenharia decidiu interpolar (inserir) exatamente 7 novos postes entre esses dois postes extremos, de modo que a distância entre dois postes consecutivos quaisquer seja rigorosamente constante.",
      source: "Planejamento Urbano e Engenharia de Tráfego"
    },
    prompt: "A distância constante que haverá entre dois postes consecutivos quaisquer ao longo dessa avenida será de:",
    options: [
      { id: "a", text: "3,0 km.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "3,43 km.", isCorrect: false, distractorRationale: "Erro clássico dividindo o comprimento total por 7 em vez de dividir por 8 intervalos (7 postes inseridos criam 8 vãos)." },
      { id: "c", text: "2,4 km.", isCorrect: false, distractorRationale: "Erro dividindo por 10 vãos." },
      { id: "d", text: "4,0 km.", isCorrect: false, distractorRationale: "Erro dividindo por 6 vãos." },
      { id: "e", text: "2,67 km.", isCorrect: false, distractorRationale: "Erro dividindo por 9 vãos." }
    ],
    detailedExplanation: {
      summary: "Interpolar 7 termos entre dois extremos significa que a PA completa terá n = 7 + 2 = 9 termos! O primeiro termo é a1 = 4 e o nono termo é a9 = 28. Termo geral: a9 = a1 + (9 - 1) · r ⟹ 28 = 4 + 8 · r ⟹ 8 · r = 24 ⟹ r = 24 / 8 = 3,0 km.",
      stepByStep: [
        "1. Identificação do número de termos: 2 postes extremos + 7 postes interpolados = 9 postes no total (n = 9).",
        "2. Identificação dos extremos: a1 = 4 km; a9 = 28 km.",
        "3. Número de intervalos (vãos): n - 1 = 9 - 1 = 8 intervalos de distância constante.",
        "4. Cálculo da razão r (distância entre postes): r = (a9 - a1) / 8 = (28 - 4) / 8 = 24 / 8 = 3,0 km.",
        "5. Conclusão: A distância entre postes consecutivos será de exatamente 3,0 km. Alternativa (a) correta."
      ],
      coreConcept: "Interpolação de Termos em uma PA: r = (an - a1) / (k + 1)",
      trapWarning: "No ENEM: Pegadinha clássica de 'postes' e 'árvores'! Inserir K postes entre dois extremos cria (K + 1) INTERVALOS! Se você inserir 7 postes, divide por 8 (e NÃO por 7)!"
    },
    commonTraps: [
      "Dividir a distância total pelo número de postes inseridos (7) em vez do número de intervalos (8)",
      "Esquecer de somar os 2 extremos ao total de termos da progressão"
    ],
    tags: ["interpolacao-aritmetica", "pa", "postes", "engenharia-de-transporte", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-007",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Decaimento Radioativo e Meia-Vida como Progressão Geométrica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O iodo-131 (I-131) é um radioisótopo amplamente utilizado na medicina nuclear para diagnóstico e tratamento ablativo do câncer de tireoide. Ele possui tempo de meia-vida de aproximadamente 8 dias, o que significa que a cada 8 dias a massa do isótopo radioativo se reduz à metade da massa existente.",
      source: "Medicina Nuclear e Física das Radiações Ionizantes"
    },
    prompt: "Um hospital recebeu um lote de medicamento contendo inicialmente 80 miligramas de I-131 puro. A massa de I-131 remanescente nessa amostra após exatamente 40 dias de armazenamento será de:",
    options: [
      { id: "a", text: "2,5 mg.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "5,0 mg.", isCorrect: false, distractorRationale: "5,0 mg seria a massa após 4 meias-vidas (32 dias), e não 5 meias-vidas (40 dias)." },
      { id: "c", text: "1,25 mg.", isCorrect: false, distractorRationale: "1,25 mg seria a massa após 6 meias-vidas (48 dias)." },
      { id: "d", text: "10,0 mg.", isCorrect: false, distractorRationale: "10,0 mg seria após 3 meias-vidas (24 dias)." },
      { id: "e", text: "0 mg (desintegração 100% total).", isCorrect: false, distractorRationale: "Decaimento radioativo é assintótico exponencial e nunca atinge zero de forma absoluta em tempos finitos." }
    ],
    detailedExplanation: {
      summary: "Número de meias-vidas transcorridas: k = tempo total / meia-vida = 40 dias / 8 dias = 5 meias-vidas. O decaimento forma uma PG com razão q = 1/2 e massa inicial m0 = 80 mg: m(k) = m0 · (1/2)^k = 80 · (1/2)⁵ = 80 / 32 = 2,5 mg.",
      stepByStep: [
        "1. Identificação da meia-vida (T1/2): 8 dias.",
        "2. Cálculo do número de períodos (k): k = 40 / 8 = 5 períodos de meia-vida.",
        "3. Progressão de decaimento por etapas: 0 dias -> 80 mg; 8 dias -> 40 mg; 16 dias -> 20 mg; 24 dias -> 10 mg; 32 dias -> 5 mg; 40 dias -> 2,5 mg.",
        "4. Cálculo pela fórmula da PG: m = m0 / 2^k = 80 / 2⁵ = 80 / 32 = 2,5 mg.",
        "5. Conclusão: Restam 2,5 mg do radioisótopo após 40 dias. Alternativa (a) correta."
      ],
      coreConcept: "Meia-Vida Radioativa como Progressão Geométrica de Razão 1/2",
      trapWarning: "No ENEM: Questões de meia-vida caem tanto em Química e Física quanto em Matemática! Lembre-se: massa final = massa inicial dividida por 2 elevado ao número de meias-vidas!"
    },
    commonTraps: [
      "Dividir 80 por 5 em vez de dividir por 2⁵ (32)",
      "Errar a quantidade de meias-vidas (40 / 8 = 5)"
    ],
    tags: ["meia-vida", "radioatividade", "pg", "iodo-131", "medicina-nuclear"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-008",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Propriedade dos Três Termos Consecutivos de uma PA",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Considere que as medidas dos três ângulos internos de um triângulo retângulo formam uma Progressão Aritmética (PA) crescente.",
      source: "Geometria Euclidiana Plana e Álgebra Elementar"
    },
    prompt: "Com base nas propriedades da PA e da geometria de triângulos, as medidas desses três ângulos internos são, respectivamente:",
    options: [
      { id: "a", text: "30°, 60° e 90°.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "45°, 45° e 90°.", isCorrect: false, distractorRationale: "Embora formem um triângulo retângulo isósceles, 45, 45, 90 não formam uma PA estritamente crescente (a razão entre o 1º e 2º seria 0 e entre o 2º e 3º seria 45)." },
      { id: "c", text: "15°, 75° e 90°.", isCorrect: false, distractorRationale: "15, 75 e 90 não formam uma PA: 75 - 15 = 60, mas 90 - 75 = 15." },
      { id: "d", text: "20°, 70° e 90°.", isCorrect: false, distractorRationale: "70 - 20 = 50 ≠ 90 - 70 = 20 (não é PA)." },
      { id: "e", text: "0°, 90° e 90°.", isCorrect: false, distractorRationale: "Não existe triângulo com ângulo nulo de zero grau." }
    ],
    detailedExplanation: {
      summary: "Em qualquer triângulo, a soma dos ângulos internos é 180°. Se os ângulos formam uma PA: (a - r), a, (a + r). A soma é: (a - r) + a + (a + r) = 180° ⟹ 3a = 180° ⟹ a = 60° (o ângulo do meio é SEMPRE 60°!). Como o triângulo é retângulo, o maior ângulo é 90°: a + r = 90° ⟹ 60° + r = 90° ⟹ r = 30°. Logo, os três ângulos são: 60 - 30 = 30°, 60° e 90°.",
      stepByStep: [
        "1. Notação simétrica de três termos em PA: (x - r), x, (x + r).",
        "2. Propriedade dos triângulos: Soma dos ângulos internos = 180°.",
        "3. Equação da soma: (x - r) + x + (x + r) = 180° ⟹ 3x = 180° ⟹ x = 60°.",
        "4. O triângulo é retângulo: o maior ângulo é 90° ⟹ x + r = 90°.",
        "5. Cálculo da razão r: 60° + r = 90° ⟹ r = 30°.",
        "6. Cálculo dos três ângulos: 60° - 30° = 30°; 60°; 60° + 30° = 90°.",
        "7. Conclusão: Os ângulos são 30°, 60° e 90°. Alternativa (a) correta."
      ],
      coreConcept: "Notação Simétrica de PA com 3 Termos: (x - r), x, (x + r)",
      trapWarning: "No ENEM: Sempre que o problema falar de 'três termos em PA cuja soma é conhecida', use a representação (x - r), x, (x + r)! A razão cancela na soma e você descobre o termo central instantaneamente!"
    },
    commonTraps: [
      "Tentar chutar ângulos sem checar a constância da razão r",
      "Esquecer que em todo triângulo onde os ângulos formam PA, o termo médio é OBRIGATORIAMENTE 60°"
    ],
    tags: ["pa-tres-termos", "triangulo-retangulo", "geometria-plana", "angulos-internos", "notacao-simetrica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-009",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Dízimas Periódicas e a Fração Geratriz via PG Infinita",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Toda dízima periódica simples pode ser expressa matematicamente como a soma dos infinitos termos de uma Progressão Geométrica convergente de razão q = 1/10 ou potências de dez, permitindo a dedução rigorosa de sua fração geratriz irredutível.",
      source: "Fundamentos de Aritmética e Teoria dos Números"
    },
    prompt: "Aplicando a teoria das séries geométricas infinitas à dízima periódica simples 0,7777... = 0,7 + 0,07 + 0,007 + ..., a fração geratriz irredutível correspondente é:",
    options: [
      { id: "a", text: "7/9.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "7/10.", isCorrect: false, distractorRationale: "7/10 representa o decimal exato 0,7, e não a dízima periódica infinita 0,777..." },
      { id: "c", text: "7/99.", isCorrect: false, distractorRationale: "7/99 representa a dízima com período de dois algarismos 0,070707..." },
      { id: "d", text: "77/100.", isCorrect: false, distractorRationale: "77/100 é o decimal exato 0,77." },
      { id: "e", text: "3/4.", isCorrect: false, distractorRationale: "3/4 equivale a 0,75 exato." }
    ],
    detailedExplanation: {
      summary: "0,777... = 7/10 + 7/100 + 7/1000 + ... É uma PG infinita de termo inicial a1 = 7/10 e razão q = 1/10 (pois 7/100 = 7/10 · 1/10). Pela fórmula da soma da PG infinita: S∞ = a1 / (1 - q) = (7/10) / (1 - 1/10) = (7/10) / (9/10) = 7/9.",
      stepByStep: [
        "1. Decomposição da dízima: 0,777... = 0,7 + 0,07 + 0,007 + ...",
        "2. Identificação da PG: a1 = 7/10; q = 0,07 / 0,7 = 0,1 = 1/10.",
        "3. Como |q| = 1/10 < 1, a série converge.",
        "4. Aplicação da fórmula: S∞ = a1 / (1 - q) = (7/10) / (1 - 1/10).",
        "5. Cálculo do denominador: 1 - 1/10 = 9/10.",
        "6. Divisão de frações: (7/10) / (9/10) = 7/9.",
        "7. Conclusão: A fração geratriz é 7/9. Alternativa (a) correta."
      ],
      coreConcept: "Dízimas Periódicas como Soma de Progressão Geométrica Infinita",
      trapWarning: "No ENEM: A regra prática 'para cada algarismo do período coloca-se um 9 no denominador' (ex: 0,777... = 7/9; 0,2323... = 23/99) vem exatamente da fórmula da PG infinita!"
    },
    commonTraps: [
      "Confundir dízima periódica com fração decimal de denominador 10 ou 100",
      "Errar a divisão de frações cancelando indevidamente o numerador"
    ],
    tags: ["dizima-periodica", "fracao-geratriz", "pg-infinita", "aritmetica", "matematica-basica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-010",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Modelagem de Depreciação de Equipamento Hospitalar por PG",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um tomógrafo computadorizado de última geração foi adquirido por um hospital universitário pelo valor de R$ 800.000,00. Em razão do desgaste tecnológico e do uso clínico contínuo, a contabilidade do hospital adota o modelo de depreciação anual no qual o valor contábil do aparelho sofre desvalorização de 10% a cada ano decorrido em relação ao valor do ano anterior.",
      source: "Gestão Hospitalar, Engenharia Clínica e Avaliação de Ativos"
    },
    prompt: "Ao final de exatamente 3 anos após a compra, o valor contábil residual desse tomógrafo será de:",
    options: [
      { id: "a", text: "R$ 583.200,00.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 560.000,00.", isCorrect: false, distractorRationale: "Cálculo linear de juros simples / PA (descontando 30% direto: 800.000 - 240.000 = 560.000), desconsiderando a depreciação composta da PG." },
      { id: "c", text: "R$ 640.000,00.", isCorrect: false, distractorRationale: "Valor residual após apenas 2 anos de depreciação." },
      { id: "d", text: "R$ 720.000,00.", isCorrect: false, distractorRationale: "Valor residual após apenas 1 ano de depreciação (800.000 · 0,9)." },
      { id: "e", text: "R$ 500.000,00.", isCorrect: false, distractorRationale: "Arredondamento arbitrário sem base nos fatores multiplicativos." }
    ],
    detailedExplanation: {
      summary: "Se o equipamento perde 10% do valor a cada ano, ele preserva 90% (fator multiplicador 0,90) de seu valor anual. Isso configura uma PG de valor inicial V0 = 800.000 e razão q = 0,90: V(3) = V0 · q³ = 800.000 · (0,9)³ = 800.000 · 0,729 = R$ 583.200,00.",
      stepByStep: [
        "1. Fator de desvalorização: Perder 10% significa multiplicar por (1 - 0,10) = 0,90.",
        "2. Ano 1: 800.000 · 0,9 = R$ 720.000,00.",
        "3. Ano 2: 720.000 · 0,9 = R$ 648.000,00.",
        "4. Ano 3: 648.000 · 0,9 = R$ 583.200,00.",
        "5. Pela fórmula da PG: V3 = 800.000 · (0,9)³ = 800.000 · 0,729 = R$ 583.200,00.",
        "6. Conclusão: O valor residual é R$ 583.200,00. Alternativa (a) correta."
      ],
      coreConcept: "Depreciação Composta e Progressão Geométrica de Fator (1 - i)",
      trapWarning: "No ENEM: Desvalorizar 10% ao ano por 3 anos NÃO É desvalorizar 30%! Em processos compostos, a base de cálculo diminui a cada ano (0,9³ = 0,729 -> perda real de 27,1%)!"
    },
    commonTraps: [
      "Calcular depreciação simples (subtrair 30%) em vez de exponencial (multiplicar por 0,9³)",
      "Errar o cálculo de (0,9)³ = 0,729"
    ],
    tags: ["depreciacao", "pg", "matematica-financeira", "tomografo", "gestao-hospitalar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-011",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "PA de Segunda Ordem: Números Triangulares no ENEM",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma feira de ciências escolares, estudantes organizaram latas cilíndricas idênticas de alumínio formando pilhas triangulares. A pilha triangular de ordem 1 possui 1 lata; a de ordem 2 possui 3 latas (1 + 2); a de ordem 3 possui 6 latas (1 + 2 + 3); a de ordem 4 possui 10 latas (1 + 2 + 3 + 4), e assim sucessivamente, correspondendo à clássica sequência dos números triangulares.",
      source: "Aritmética Recreativa e Sequências Figurais"
    },
    prompt: "O número total de latas necessárias para construir uma pilha triangular completa de ordem 20 (contendo 20 níveis) é igual a:",
    options: [
      { id: "a", text: "210 latas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "200 latas.", isCorrect: false, distractorRationale: "Cálculo errôneo multiplicando 20 por 10." },
      { id: "c", text: "420 latas.", isCorrect: false, distractorRationale: "Erro esquecendo de dividir por 2 na fórmula de Gauss (20 · 21 = 420)." },
      { id: "d", text: "190 latas.", isCorrect: false, distractorRationale: "Corresponde ao número triangular de ordem 19 (19 · 20 / 2 = 190)." },
      { id: "e", text: "400 latas.", isCorrect: false, distractorRationale: "400 é o número quadrado (20²), e não o número triangular." }
    ],
    detailedExplanation: {
      summary: "A sequência de latas empilhadas em triângulo é a soma dos 20 primeiros números naturais positivos: Tn = 1 + 2 + 3 + ... + n = n · (n + 1) / 2. Para n = 20: T20 = 20 · (20 + 1) / 2 = 20 · 21 / 2 = 10 · 21 = 210 latas.",
      stepByStep: [
        "1. Identificação do padrão: Nível 1 tem 1; Nível 2 tem 2; ... Nível 20 tem 20 latas.",
        "2. Total de latas: Soma de uma PA com a1 = 1, an = 20, r = 1 e n = 20.",
        "3. Fórmula da soma da PA: Sn = [(1 + 20) · 20] / 2.",
        "4. Cálculo aritmético: S20 = 21 · 10 = 210 latas.",
        "5. Conclusão: São necessárias 210 latas. Alternativa (a) correta."
      ],
      coreConcept: "Números Triangulares e a Soma dos Primeiros Inteiros Positivos: n(n + 1)/2",
      trapWarning: "No ENEM: Padrões visuais de pilhas de bolinhas, latinhas ou palitos quase sempre recaem na fórmula do número triangular: n · (n + 1) / 2!"
    },
    commonTraps: [
      "Elevar ao quadrado (20² = 400) confundindo número triangular com quadrado",
      "Esquecer de dividir por 2 ao aplicar a soma de Gauss"
    ],
    tags: ["numeros-triangulares", "pa", "sequencias-visuais", "gauss", "geometria-recreativa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-012",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Relação Fundamental da PG: O Termo Médio Geométrico",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Três números reais positivos estão dispostos em ordem formando uma Progressão Geométrica (PG). Sabe-se que o primeiro termo é igual a 4 e o terceiro termo é igual a 36.",
      source: "Álgebra Elementar e Teoria das Médias"
    },
    prompt: "O segundo termo dessa Progressão Geométrica é igual a:",
    options: [
      { id: "a", text: "12.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "20.", isCorrect: false, distractorRationale: "20 é a média aritmética ((4 + 36)/2 = 20), válida se fosse uma PA, e não uma PG." },
      { id: "c", text: "9.", isCorrect: false, distractorRationale: "36 dividido por 4 é 9, que é a razão ao quadrado (q² = 9), e não o termo médio x." },
      { id: "d", text: "18.", isCorrect: false, distractorRationale: "Metade do terceiro termo, sem relação com a média geométrica." },
      { id: "e", text: "16.", isCorrect: false, distractorRationale: "Valor incorreto obtido por soma indevida." }
    ],
    detailedExplanation: {
      summary: "Em qualquer PG de três termos positivos (a, b, c), o termo do meio é a MÉDIA GEOMÉTRICA dos vizinhos: b² = a · c. Como a = 4 e c = 36: b² = 4 · 36 = 144 ⟹ b = √144 = 12. (A razão é q = 12/4 = 3; a sequência é 4, 12, 36).",
      stepByStep: [
        "1. Propriedade da PG: b² = a · c.",
        "2. Aplicação: b² = 4 · 36 = 144.",
        "3. Raiz quadrada (termos positivos): b = √144 = 12.",
        "4. Verificação da razão: q = 12 / 4 = 3; 12 · 3 = 36. Perfeito!",
        "5. Conclusão: O segundo termo é 12. Alternativa (a) correta."
      ],
      coreConcept: "Propriedade da Média Geométrica em PG: b² = a · c",
      trapWarning: "No ENEM: Se fosse uma PA, o termo médio seria a média ARITMÉTICA (4 + 36)/2 = 20! Como é uma PG, é a média GEOMÉTRICA √(4 · 36) = 12! Não confunda PA com PG!"
    },
    commonTraps: [
      "Calcular a média aritmética (20) em vez da média geométrica (12)",
      "Achar que q² (9) já é o termo procurado"
    ],
    tags: ["media-geometrica", "pg", "propriedades-da-pg", "algebra-basica", "tri"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-013",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Aritmética de Relógios e Congruência Modular via PA",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma unidade de terapia intensiva (UTI), uma medicação endovenosa em infusão contínua deve ser trocada rigorosamente a cada 14 horas. A primeira dose foi iniciada exatamente às 08h00 de uma segunda-feira.",
      source: "Enfermagem Hospitalar e Cronofarmacologia"
    },
    prompt: "Mantendo a administração sem interrupções, o horário do relógio em que a 10ª dose dessa medicação será administrada será às:",
    options: [
      { id: "a", text: "14h00 (duas horas da tarde).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "08h00 (oito horas da manhã).", isCorrect: false, distractorRationale: "08h00 ocorreria se o intervalo fosse múltiplo exato de 24 horas." },
      { id: "c", text: "22h00.", isCorrect: false, distractorRationale: "Cálculo considerando apenas 9 intervalos sem somar as horas residuais corretamente." },
      { id: "d", text: "18h00.", isCorrect: false, distractorRationale: "Erro na divisão inteira por 24 horas." },
      { id: "e", text: "12h00 (meio-dia).", isCorrect: false, distractorRationale: "Estimativa arbitrária sem cálculo modular." }
    ],
    detailedExplanation: {
      summary: "A 1ª dose é no instante 0 (08h00). Da 1ª até a 10ª dose transcorrem exatamente 9 intervalos de 14 horas: Tempo total transcorrido = 9 · 14 = 126 horas. Como cada dia completo tem 24 horas: 126 / 24 = 5 dias completos com resto de 6 horas (126 = 5 · 24 + 6). Somando 6 horas ao horário inicial das 08h00: 08h00 + 6h = 14h00.",
      stepByStep: [
        "1. Número de intervalos: Da 1ª à 10ª dose = 10 - 1 = 9 intervalos.",
        "2. Horas decorridas: 9 · 14 h = 126 horas.",
        "3. Ciclos de 24 horas (aritmética modular): 126 ÷ 24 = 5 dias (120 h), sobrando resto de 6 horas.",
        "4. Cálculo do horário: Horário inicial + resto = 08h00 + 6h = 14h00.",
        "5. Conclusão: A 10ª dose será administrada às 14h00 (no sábado, 5 dias depois). Alternativa (a) correta."
      ],
      coreConcept: "Aritmética Modular de Horários e PA no Tempo",
      trapWarning: "No ENEM: Da 1ª dose à 10ª dose decorrem NOVE intervalos de tempo, e não dez! A primeira dose já começou no tempo zero!"
    },
    commonTraps: [
      "Multiplicar 14 por 10 em vez de 9",
      "Esquecer de pegar o resto da divisão por 24 horas para ajustar os ponteiros do relógio"
    ],
    tags: ["aritmetica-modular", "pa", "cronofarmacologia", "horarios", "uti"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-014",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Fractais e a Curva de Koch: Geometria de PG Infinita",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No famoso fractal 'Floco de Neve de Koch', parte-se de um segmento de reta de comprimento L = 1 (estágio 0). No estágio 1, o terço médio do segmento é substituído por dois segmentos de comprimento 1/3 formando um pico triangular, resultando em 4 segmentos de tamanho 1/3 (comprimento total = 4/3). No estágio 2, cada um dos 4 segmentos sofre o mesmo processo, gerando 16 segmentos de tamanho 1/9 (comprimento total = (4/3)²), e assim sucessivamente para cada estágio n.",
      source: "Geometria Fractal e Teoria do Caos"
    },
    prompt: "O comprimento total da curva de Koch no estágio 5 desse processo de iteração fractal é igual a:",
    options: [
      { id: "a", text: "(4/3)⁵ = 1.024 / 243 (aproximadamente 4,21).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "5/3.", isCorrect: false, distractorRationale: "Cálculo linear de PA somando 1/3 por estágio em vez de elevar à potência da PG." },
      { id: "c", text: "1.024 / 729.", isCorrect: false, distractorRationale: "Denominador corresponde a 3⁶ em vez de 3⁵." },
      { id: "d", text: "4/15.", isCorrect: false, distractorRationale: "Multiplicação indevida de frações sem potência." },
      { id: "e", text: "1,0 (o comprimento permanece constante pela conservação da matéria).", isCorrect: false, distractorRationale: "O comprimento da curva de Koch cresce a cada iteração, tendendo ao infinito quando n tende a infinito." }
    ],
    detailedExplanation: {
      summary: "O comprimento total C(n) da curva no estágio n forma uma PG de termo inicial C(0) = 1 e razão q = 4/3. Para o estágio n = 5: C(5) = (4/3)⁵ = 4⁵ / 3⁵ = 1.024 / 243 ≈ 4,213.",
      stepByStep: [
        "1. Estágio 0: Comprimento = 1.",
        "2. Estágio 1: 4 segmentos de 1/3 ⟹ Comprimento = 4/3.",
        "3. Estágio 2: 16 segmentos de 1/9 ⟹ Comprimento = (4/3)².",
        "4. Estágio n: Comprimento = (4/3)^n.",
        "5. Para n = 5: C(5) = (4/3)⁵ = 4⁵ / 3⁵ = 1.024 / 243 ≈ 4,21.",
        "6. Conclusão: Alternativa (a) correta."
      ],
      coreConcept: "Geometria Fractal e Progressão Geométrica de Razão q > 1",
      trapWarning: "No ENEM: Os fractais adoram cair em Linguagens e Matemática! No Floco de Koch, o comprimento da curva tende ao INFINITO, mas a área contida dentro dele é FINITA!"
    },
    commonTraps: [
      "Achar que o comprimento da curva é constante",
      "Errar as potências 4⁵ = 1.024 e 3⁵ = 243"
    ],
    tags: ["fractais", "floco-de-koch", "pg", "potenciacao", "geometria-avancada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-015",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Soma dos Ângulos de um Polígono Convexo e Progressão Aritmética",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Os ângulos internos de um pentágono convexo formam uma Progressão Aritmética (PA) de razão r = 14°. Sabe-se que a soma dos ângulos internos de qualquer polígono convexo de n lados é dada por S = (n - 2) · 180°.",
      source: "Geometria Euclidiana e Polígonos Convexos"
    },
    prompt: "A medida do menor ângulo interno desse pentágono é igual a:",
    options: [
      { id: "a", text: "80°.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "108°.", isCorrect: false, distractorRationale: "108° é o ângulo médio (e o ângulo de um pentágono regular), e não o menor ângulo da PA." },
      { id: "c", text: "94°.", isCorrect: false, distractorRationale: "94° é o segundo menor ângulo (80 + 14 = 94)." },
      { id: "d", text: "66°.", isCorrect: false, distractorRationale: "Subtração indevida de mais uma razão." },
      { id: "e", text: "122°.", isCorrect: false, distractorRationale: "122° é o quarto ângulo da PA." }
    ],
    detailedExplanation: {
      summary: "Para um pentágono (n = 5), a soma dos ângulos internos é S = (5 - 2) · 180° = 3 · 180° = 540°. Representando os 5 ângulos em PA de forma simétrica: (x - 2r), (x - r), x, (x + r), (x + 2r). A soma é: 5x = 540° ⟹ x = 108° (termo central). Como a razão é r = 14°, o menor ângulo é: a1 = x - 2r = 108° - 2 · 14° = 108° - 28° = 80°.",
      stepByStep: [
        "1. Soma dos ângulos internos do pentágono: S = (5 - 2) · 180° = 540°.",
        "2. Representação simétrica de 5 termos em PA: x - 2r, x - r, x, x + r, x + 2r.",
        "3. Soma dos 5 termos: 5x = 540° ⟹ x = 108°.",
        "4. Cálculo do menor termo (a1): a1 = x - 2r = 108° - 2 · (14°) = 108° - 28° = 80°.",
        "5. Verificação da sequência: 80°, 94°, 108°, 122°, 136°. Soma = 540°. Perfeito!",
        "6. Conclusão: O menor ângulo mede 80°. Alternativa (a) correta."
      ],
      coreConcept: "Soma de Ângulos de Polígonos e PA Simétrica de 5 Termos",
      trapWarning: "No ENEM: Em qualquer polígono cujos ângulos formam PA de número ímpar de lados, o termo central x é SEMPRE igual à média dos ângulos internos (S / n)!"
    },
    commonTraps: [
      "Assinalar o ângulo médio de 108° em vez do menor ângulo",
      "Errar a soma dos ângulos do pentágono (lembrar que é (n - 2)·180)"
    ],
    tags: ["pentagono", "angulos-internos", "pa-simetrica", "geometria-plana", "poligonos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-016",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Progressões Aritméticas e Geométricas Concorrentes",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Considere duas sequências de números reais:\n• Sequência A: uma Progressão Aritmética de termo inicial 5 e razão 3: (5, 8, 11, 14, ...);\n• Sequência B: uma Progressão Geométrica de termo inicial 2 e razão 2: (2, 4, 8, 16, ...).",
      source: "Álgebra Sequencial e Análise Comparativa"
    },
    prompt: "O menor número inteiro positivo que pertence SIMULTANEAMENTE a ambas as sequências A e B é igual a:",
    options: [
      { id: "a", text: "8.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "14.", isCorrect: false, distractorRationale: "14 pertence à Sequência A, mas não é potência de 2 (não pertence à Sequência B)." },
      { id: "c", text: "16.", isCorrect: false, distractorRationale: "16 pertence à PG B, mas não pertence à PA A (pois 16 - 5 = 11, que não é múltiplo de 3)." },
      { id: "d", text: "32.", isCorrect: false, distractorRationale: "32 pertence a ambas (32 - 5 = 27 = 3·9), mas 8 é anterior e menor que 32." },
      { id: "e", text: "4.", isCorrect: false, distractorRationale: "4 pertence à PG B, mas a PA A começa em 5." }
    ],
    detailedExplanation: {
      summary: "Termos da Sequência A (PA: an = 5 + 3k): 5, 8, 11, 14, 17, 20, 23, 26, 29, 32... Termos da Sequência B (PG: bn = 2^n): 2, 4, 8, 16, 32, 64... O primeiro termo que aparece em ambas é o número 8 (na PA é o 2º termo; na PG é o 3º termo).",
      stepByStep: [
        "1. Listagem dos primeiros termos da PA: 5, 8, 11, 14, 17, 20, 23, 26, 29, 32.",
        "2. Listagem dos primeiros termos da PG: 2, 4, 8, 16, 32, 64.",
        "3. Interseção dos conjuntos: {8, 32, ...}",
        "4. Menor elemento comum: 8.",
        "5. Conclusão: Alternativa (a) correta."
      ],
      coreConcept: "Interseção entre Progressão Aritmética e Geométrica",
      trapWarning: "No ENEM: Questões que pedem o 'menor elemento comum' de duas sequências podem ser resolvidas listando os primeiros termos nos primeiros rascunhos sem perder tempo!"
    },
    commonTraps: [
      "Indicar o 32 sem perceber que o 8 já era comum",
      "Confundir termos da PA com a PG"
    ],
    tags: ["pa-e-pg", "intersecao-de-sequencias", "potencias-de-dois", "algebra", "tri"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-017",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Aritmética do Calendário Gregoriano e Anos Bissextos como PA",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No calendário gregoriano, os anos bissextos ordinários ocorrem a cada 4 anos (como 2004, 2008, 2012, 2016, 2020, 2024...), formando uma Progressão Aritmética de razão r = 4.",
      source: "Sistemas de Medida do Tempo e Astronomia Posicional"
    },
    prompt: "A quantidade total de anos bissextos compreendidos no intervalo fechado entre os anos de 2001 e 2099 (sem incluir o ano 2100) é igual a:",
    options: [
      { id: "a", text: "24 anos bissextos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "25 anos bissextos.", isCorrect: false, distractorRationale: "25 seria o resultado se o ano 2000 ou 2100 estivessem inclusos no intervalo." },
      { id: "c", text: "23 anos bissextos.", isCorrect: false, distractorRationale: "Erro de contagem esquecendo o primeiro ou último ano bissexto." },
      { id: "d", text: "20 anos bissextos.", isCorrect: false, distractorRationale: "Estimativa sem considerar a divisão precisa de 96 anos por 4." },
      { id: "e", text: "30 anos bissextos.", isCorrect: false, distractorRationale: "Contagem superestimada sem rigor de PA." }
    ],
    detailedExplanation: {
      summary: "O primeiro ano bissexto após 2001 é a1 = 2004. O último ano bissexto antes de 2099 é an = 2096. A sequência é uma PA com razão r = 4: an = a1 + (n - 1) · r ⟹ 2096 = 2004 + (n - 1) · 4 ⟹ (n - 1) · 4 = 92 ⟹ n - 1 = 23 ⟹ n = 24 anos bissextos.",
      stepByStep: [
        "1. Identificação do primeiro termo no intervalo: a1 = 2004.",
        "2. Identificação do último termo no intervalo: an = 2096.",
        "3. Razão da PA: r = 4.",
        "4. Fórmula do número de termos: n = [(an - a1) / r] + 1.",
        "5. Aplicação: n = [(2096 - 2004) / 4] + 1 = [92 / 4] + 1 = 23 + 1 = 24.",
        "6. Conclusão: Há 24 anos bissextos no período. Alternativa (a) correta."
      ],
      coreConcept: "Número de Termos de uma PA: n = [(an - a1) / r] + 1",
      trapWarning: "No ENEM: Para achar a quantidade de múltiplos entre dois limites, NUNCA se esqueça de somar 1 ao final da divisão da diferença pela razão: n = (an - a1)/r + 1!"
    },
    commonTraps: [
      "Dividir 92 por 4 e esquecer de somar 1 ao resultado (marcando 23)",
      "Dividir 99 por 4 de forma descuidada"
    ],
    tags: ["anos-bissextos", "pa", "numero-de-termos", "calendario", "multiplos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-018",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Evolução Salarial com Dissídio Coletivo via PA vs PG",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois profissionais recém-formados foram contratados pela mesma empresa no mesmo dia com salário inicial idêntico de R$ 5.000,00 cada. O contrato do Profissional A prevê um aumento fixo de R$ 400,00 todo ano (progressão aritmética). O contrato do Profissional B prevê um reajuste percentual de 6% todo ano em relação ao salário do ano anterior (progressão geométrica).",
      source: "Economia do Trabalho e Gestão de Remuneração"
    },
    prompt: "Ao final do 2º ano de trabalho (após a aplicação dos dois primeiros aumentos anuais de cada plano), os salários dos profissionais A e B serão, respectivamente:",
    options: [
      { id: "a", text: "R$ 5.800,00 para o Profissional A e R$ 5.618,00 para o Profissional B.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 5.800,00 para o Profissional A e R$ 5.600,00 para o Profissional B.", isCorrect: false, distractorRationale: "R$ 5.600,00 seria o cálculo com juros simples de 12% sem considerar o rendimento sobre rendimento (1,06² = 1,1236)." },
      { id: "c", text: "R$ 5.400,00 para o Profissional A e R$ 5.300,00 para o Profissional B.", isCorrect: false, distractorRationale: "Cálculo com apenas 1 ano de aumento." },
      { id: "d", text: "R$ 6.000,00 para o Profissional A e R$ 6.000,00 para o Profissional B.", isCorrect: false, distractorRationale: "Valores arredondados sem correspondência matemática." },
      { id: "e", text: "R$ 5.618,00 para o Profissional A e R$ 5.800,00 para o Profissional B.", isCorrect: false, distractorRationale: "Inversão dos salários dos dois profissionais." }
    ],
    detailedExplanation: {
      summary: "Profissional A (PA): Salário_2 = Salário_0 + 2 · R$ 400 = 5.000 + 800 = R$ 5.800,00. Profissional B (PG): Salário_2 = Salário_0 · (1 + 0,06)² = 5.000 · (1,06)² = 5.000 · 1,1236 = R$ 5.618,00. No curto prazo, a PA venceu a PG; no longo prazo (após muitos anos), o crescimento exponencial da PG inevitavelmente superará a PA.",
      stepByStep: [
        "1. Profissional A (PA): Ano 0: 5.000; Ano 1: 5.400; Ano 2: 5.800 reais.",
        "2. Profissional B (PG): Ano 0: 5.000; Ano 1: 5.000 · 1,06 = 5.300; Ano 2: 5.300 · 1,06 = 5.618 reais.",
        "3. Comparação: A ganha R$ 5.800,00 e B ganha R$ 5.618,00.",
        "4. Conclusão: Alternativa (a) correta."
      ],
      coreConcept: "Comparação entre Crescimento Linear (PA) e Crescimento Geométrico (PG)",
      trapWarning: "No ENEM: A PG SEMPRE supera a PA no longo prazo, mas nos primeiros passos a PA com razão substancial pode ficar temporariamente na frente! Sempre calcule termo a termo para os primeiros anos!"
    },
    commonTraps: [
      "Calcular a PG com juros simples em vez de compostos (1,06² = 1,1236 e não 1,12)",
      "Inverter os resultados de A e B"
    ],
    tags: ["pa-vs-pg", "matematica-financeira", "juros-compostos", "salarios", "economia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-019",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Interpolação Geométrica e Escala Musical Temperada",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na escala musical ocidental com afinação de temperamento igual (padronizada por Johann Sebastian Bach), um intervalo de oitava musical corresponde à duplicação da frequência acústica fundamental de uma nota (f2 = 2 · f1). Entre uma nota e sua oitava superior são interpolados exatamente 11 semitons, dividindo a oitava em 12 intervalos de semitom com razão geométrica constante q.",
      source: "Acústica Física, Teoria Musical e Séries Geométricas"
    },
    prompt: "Para que a frequência dobre ao longo dos 12 semitons sucessivos da oitava, a razão geométrica q constante entre as frequências de duas notas musicais vizinhas separadas por um semitom deve ser igual a:",
    options: [
      { id: "a", text: "2^(1/12) (raiz décima segunda de 2, aproximadamente 1,0595).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "2/12 = 1/6 (aproximadamente 0,1667).", isCorrect: false, distractorRationale: "Divisão linear sem sentido em escala geométrica exponencial multiplicativa." },
      { id: "c", text: "12^(1/2) = √12.", isCorrect: false, distractorRationale: "Inversão da base e do expoente da radiciação." },
      { id: "d", text: "1 + 1/12 = 13/12.", isCorrect: false, distractorRationale: "Crescimento percentual linear de juros simples que não preserva a consonância dos harmônicos." },
      { id: "e", text: "2¹² = 4.096.", isCorrect: false, distractorRationale: "Multiplicaria a frequência por milhares de vezes a cada tecla do piano." }
    ],
    detailedExplanation: {
      summary: "A frequência da nota base é f0. A nota 12 semitons acima tem frequência f12 = 2 · f0. Como a escala musical é uma Progressão Geométrica: f12 = f0 · q¹² ⟹ 2 · f0 = f0 · q¹² ⟹ q¹² = 2 ⟹ q = 2^(1/12) = ¹²√2 ≈ 1,05946. Multiplicar a frequência por ~1,0595 eleva a nota em exatamente um semitom!",
      stepByStep: [
        "1. Modelo: Escala geométrica multiplicativa de frequências sonoras.",
        "2. Relação de oitava: f(12) = 2 · f(0).",
        "3. Fórmula da PG: f(12) = f(0) · q¹².",
        "4. Igualdade: q¹² = 2.",
        "5. Isolando q: q = 2^(1/12) (raiz décima segunda de 2).",
        "6. Conclusão: A razão do semitom musical é 2^(1/12). Alternativa (a) correta."
      ],
      coreConcept: "A Escala Musical Temperada como Progressão Geométrica de Razão 2^(1/12)",
      trapWarning: "No ENEM: Questões que envolvem decibéis (som), escalas de terremotos (Richter), pH e escalas musicais são SEMPRE logarítmicas ou geométricas exponenciais!"
    },
    commonTraps: [
      "Tentar dividir a oitava linearmente por 12 (som é percebido pelo ouvido de forma logarítmica/geométrica)",
      "Inverter o radical (colocar raiz quadrada de 12)"
    ],
    tags: ["escala-musical", "pg", "acustica", "raiz-decima-segunda", "matematica-e-musica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-020",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Amortização de Empréstimo pelo Sistema de Amortização Constante (SAC)",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No Sistema de Amortização Constante (SAC) adotado em financiamentos habitacionais no Brasil, o valor da amortização mensal é fixo (A = Saldo Devedor / n), enquanto as parcelas mensais totais (compostas por amortização + juros sobre o saldo devedor) decrescem linearmente a cada mês, formando uma Progressão Aritmética decrescente.",
      source: "Matemática Financeira e Sistemas de Amortização Imobiliária"
    },
    prompt: "Um médico financiou R$ 120.000,00 pelo sistema SAC para ser quitado em 60 parcelas mensais a uma taxa de juros de 1% ao mês sobre o saldo devedor remanescente. O valor da 1ª parcela e o valor da 60ª (última) parcela desse financiamento serão, respectivamente:",
    options: [
      { id: "a", text: "R$ 3.200,00 na 1ª parcela e R$ 2.020,00 na 60ª parcela.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 2.000,00 na 1ª parcela e R$ 2.000,00 na 60ª parcela.", isCorrect: false, distractorRationale: "R$ 2.000,00 é apenas a cota de amortização fixa sem os juros devidos (120.000 / 60 = 2.000)." },
      { id: "c", text: "R$ 3.200,00 na 1ª parcela e R$ 1.200,00 na 60ª parcela.", isCorrect: false, distractorRationale: "Esqueceu de somar a cota de amortização de R$ 2.000,00 na última parcela." },
      { id: "d", text: "R$ 2.600,00 em todas as 60 parcelas fixas.", isCorrect: false, distractorRationale: "Parcelas fixas caracterizam a Tabela Price, e não o Sistema de Amortização Constante (SAC)." },
      { id: "e", text: "R$ 4.000,00 na 1ª parcela e R$ 2.400,00 na 60ª parcela.", isCorrect: false, distractorRationale: "Cálculo com taxa de juros superestimada." }
    ],
    detailedExplanation: {
      summary: "Amortização constante mensal: A = 120.000 / 60 = R$ 2.000,00 por mês. Parcela 1: Amortização (2.000) + Juros de 1% sobre 120.000 (1.200) = R$ 3.200,00. Parcela 60: Na última parcela, restava apenas o saldo de 1 mês (R$ 2.000,00). Juros = 1% de 2.000 = R$ 20,00. Parcela 60 = Amortização (2.000) + Juros (20) = R$ 2.020,00. As parcelas decrescem em PA de razão r = -20 reais por mês!",
      stepByStep: [
        "1. Amortização mensal fixa: A = 120.000 / 60 = R$ 2.000,00.",
        "2. Cálculo da Parcela 1: Juros 1 = 1% de 120.000 = R$ 1.200,00 ⟹ P1 = 2.000 + 1.200 = R$ 3.200,00.",
        "3. Decréscimo mensal da parcela (razão da PA): A cada mês o saldo devedor cai em 2.000, reduzindo os juros em 1% de 2.000 = R$ 20,00 ⟹ r = -20 reais.",
        "4. Cálculo da Parcela 60: P60 = P1 + (60 - 1) · r = 3.200 + 59 · (-20) = 3.200 - 1.180 = R$ 2.020,00.",
        "5. Conclusão: Parcela 1 = R$ 3.200,00 e Parcela 60 = R$ 2.020,00. Alternativa (a) correta."
      ],
      coreConcept: "Sistema SAC como Progressão Aritmética Decrescente de Parcelas",
      trapWarning: "No ENEM: Diferencie Price de SAC! Tabela Price = parcelas FIXAS e amortizações crescentes; Sistema SAC = amortização FIXA e parcelas DECRESCENTES em PA!"
    },
    commonTraps: [
      "Confundir Sistema SAC (parcelas decrescentes) com Tabela Price (parcelas constantes)",
      "Esquecer de somar a amortização na última parcela calculando apenas os juros"
    ],
    tags: ["sistema-sac", "pa-decrescente", "financiamento", "amortizacao", "matematica-financeira"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-021",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Equações Exponenciais e Logaritmos na Resolução de PG",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma nova rede social voltada para profissionais de saúde cresce a uma taxa de 20% ao mês (razão da PG q = 1,20). No dia do lançamento (mês 0), a plataforma contava com 10.000 usuários cadastrados. A meta dos fundadores é alcançar 100.000 usuários ativos.\nConsidere as aproximações: log 2 = 0,30 e log 3 = 0,48.",
      source: "Métricas de Crescimento Tecnológico e Escala de Plataformas Digitais"
    },
    prompt: "Com base nas aproximações logarítmicas fornecidas, o número aproximado de meses necessários para que a plataforma atinja a marca de 100.000 usuários cadastrados é de:",
    options: [
      { id: "a", text: "12,5 meses (aproximadamente 13 meses).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "5,0 meses.", isCorrect: false, distractorRationale: "5 meses resultaria em apenas 10.000 · (1,2)⁵ ≈ 24.883 usuários." },
      { id: "c", text: "8,0 meses.", isCorrect: false, distractorRationale: "8 meses resultaria em aproximadamente 43.000 usuários." },
      { id: "d", text: "20,0 meses.", isCorrect: false, distractorRationale: "Superestimado; em 20 meses a plataforma ultrapassaria 380.000 usuários." },
      { id: "e", text: "25,0 meses.", isCorrect: false, distractorRationale: "Cálculo linear de PA (10.000 + n · 2.000) desconsiderando a escala exponencial." }
    ],
    detailedExplanation: {
      summary: "Equação da PG: N(t) = 10.000 · (1,2)^t = 100.000 ⟹ (1,2)^t = 10. Aplicando logaritmo decimal em ambos os lados: t · log(1,2) = log(10) = 1. Como 1,2 = 12 / 10 = (2² · 3) / 10, temos: log(1,2) = 2 · log 2 + log 3 - log 10 = 2 · (0,30) + 0,48 - 1 = 0,60 + 0,48 - 1 = 1,08 - 1 = 0,08. Logo: t = 1 / 0,08 = 100 / 8 = 12,5 meses.",
      stepByStep: [
        "1. Montagem da equação: 10.000 · (1,2)^t = 100.000 ⟹ (1,2)^t = 10.",
        "2. Aplicação de logaritmo: log((1,2)^t) = log(10) ⟹ t · log(1,2) = 1.",
        "3. Propriedades de logaritmo para log(1,2): log(12/10) = log(2² · 3) - log(10).",
        "4. Cálculo de log(1,2): 2 · log 2 + log 3 - 1 = 2 · (0,30) + 0,48 - 1 = 0,60 + 0,48 - 1 = 0,08.",
        "5. Cálculo de t: t = 1 / 0,08 = 100 / 8 = 12,5 meses.",
        "6. Conclusão: São necessários 12,5 meses (~13 meses) para atingir 100.000 usuários. Alternativa (a) correta."
      ],
      coreConcept: "Resolução de Problemas de PG com Aplicação de Logaritmos",
      trapWarning: "No ENEM: Quando a incógnita está no EXPOENTE da PG, você VAI precisar de logaritmo! Decomponha o decimal em números primos (1,2 = 12/10 = 2² · 3 / 10) e aplique as propriedades das somas de log!"
    },
    commonTraps: [
      "Tentar calcular 1,2 elevado a potências no braço sem usar os logs fornecidos",
      "Errar a decomposição de log(1,2) esquecendo que log 10 = 1"
    ],
    tags: ["pg-e-logaritmos", "crescimento-exponencial", "log-propriedades", "redes-sociais", "matematica-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-022",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Progressões Harmônicas e a Média Harmônica de Velocidades",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma sequência de números reais não nulos (x1, x2, x3, ...) forma uma Progressão Harmônica quando os inversos de seus termos (1/x1, 1/x2, 1/x3, ...) formam uma Progressão Aritmética. Em cinemática escalar, a velocidade média de um veículo que percorre dois trechos de comprimentos rigorosamente iguais com velocidades escalares constantes distintas v1 e v2 corresponde exatamente à média harmônica entre v1 e v2:\n\nv_m = (2 · v1 · v2) / (v1 + v2)",
      source: "Física Cinemática Escalar e Teoria das Médias"
    },
    prompt: "Um veículo de resgate de emergência percorreu a primeira metade de um trajeto reto à velocidade de 60 km/h e a segunda metade desse mesmo trajeto à velocidade de 90 km/h. A velocidade média do veículo ao longo de todo o percurso foi de:",
    options: [
      { id: "a", text: "72 km/h.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "75 km/h.", isCorrect: false, distractorRationale: "75 km/h é a média aritmética simples ((60 + 90)/2), clássica pegadinha do ENEM que ignora que o veículo passou mais tempo no trecho mais lento." },
      { id: "c", text: "73,5 km/h.", isCorrect: false, distractorRationale: "Média geométrica √(60 · 90) ≈ 73,48 km/h, incorreta para percursos de mesma distância." },
      { id: "d", text: "80 km/h.", isCorrect: false, distractorRationale: "Valor ponderado arbitrário sem base na física cinemática." },
      { id: "e", text: "65 km/h.", isCorrect: false, distractorRationale: "Estimativa enviesada excessivamente para o limite inferior." }
    ],
    detailedExplanation: {
      summary: "Pegadinha rainha do ENEM: se a distância percorrida nos dois trechos é IGUAL (d1 = d2 = d), a velocidade média NÃO É a média aritmética (75 km/h)! O veículo gasta mais tempo andando devagar (60 km/h) do que andando rápido (90 km/h). A média ponderada pelo tempo resulta na MÉDIA HARMÔNICA: v_m = (2 · v1 · v2) / (v1 + v2) = (2 · 60 · 90) / (60 + 90) = 10.800 / 150 = 72 km/h.",
      stepByStep: [
        "1. Tempo no trecho 1: t1 = d / 60.",
        "2. Tempo no trecho 2: t2 = d / 90.",
        "3. Tempo total: t_total = d/60 + d/90 = (3d + 2d) / 180 = 5d / 180 = d / 36.",
        "4. Distância total: D = d + d = 2d.",
        "5. Velocidade média: v_m = D / t_total = 2d / (d / 36) = 2 · 36 = 72 km/h.",
        "6. Pela fórmula da média harmônica: (2 · 60 · 90) / 150 = 72 km/h.",
        "7. Conclusão: A velocidade média é de 72 km/h. Alternativa (a) correta."
      ],
      coreConcept: "Média Harmônica em Distâncias Iguais: vm = 2·v1·v2 / (v1 + v2)",
      trapWarning: "No ENEM: Se as DISTÂNCIAS dos dois trechos forem iguais, a velocidade média é a MÉDIA HARMÔNICA (72 km/h)! Ela só seria média aritmética simples (75 km/h) se o veículo andasse pelo mesmo TEMPO em cada velocidade!"
    },
    commonTraps: [
      "Fazer a média aritmética simples (60 + 90)/2 = 75 km/h (distrator clássico mais marcado do exame)",
      "Esquecer que o carro passa mais tempo se deslocando a 60 km/h do que a 90 km/h"
    ],
    tags: ["media-harmonica", "velocidade-media", "cinematica", "pegadinha-enem", "fisica-e-matematica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-023",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "A Função Afim como Progressão Aritmética Contínua",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No estudo das funções reais, a função afim f(x) = a · x + b caracteriza-se por possuir taxa de variação constante (coeficiente angular a = Δy / Δx). Ao restringirmos o domínio dessa função aos números naturais não nulos (x ∈ {1, 2, 3, ...}), os valores das imagens f(1), f(2), f(3)... formam uma sequência numérica estruturada.",
      source: "Cálculo Diferencial Elementar e Álgebra de Funções"
    },
    prompt: "A restrição do domínio de uma função afim f(x) = a · x + b ao conjunto dos números naturais gera necessariamente uma:",
    options: [
      { id: "a", text: "Progressão Aritmética (PA) cujo primeiro termo é a + b e cuja razão é igual ao coeficiente angular a.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Progressão Geométrica (PG) de razão igual a e primeiro termo b.", isCorrect: false, distractorRationale: "Funções afins possuem variação aditiva linear constante (PA), e não variação multiplicativa exponencial (PG)." },
      { id: "c", text: "Sequência caótica aleatória sem nenhuma regularidade matemática.", isCorrect: false, distractorRationale: "A regularidade é absoluta com diferença constante igual a 'a' entre termos consecutivos." },
      { id: "d", text: "Parábola quadrática com vértice de máximo local.", isCorrect: false, distractorRationale: "Parábolas representam funções polinomiais do 2º grau, não funções afins do 1º grau." },
      { id: "e", text: "Progressão Harmônica convergente para zero.", isCorrect: false, distractorRationale: "Os termos crescem ou decrescem linearmente em PA, não em progressão harmônica." }
    ],
    detailedExplanation: {
      summary: "Toda Progressão Aritmética é a discretização de uma Função Afim (do 1º grau). f(x) = ax + b. Imagens: f(1) = a + b; f(2) = 2a + b; f(3) = 3a + b... A diferença entre termos consecutivos é: f(n+1) - f(n) = [a(n+1) + b] - [an + b] = a. Essa diferença constante é a RAZÃO da PA! Da mesma forma, toda PG é a discretização de uma Função Exponencial g(x) = b · a^x.",
      stepByStep: [
        "1. Função afim: f(x) = ax + b.",
        "2. Imagens para x = 1, 2, 3: f(1) = a + b; f(2) = 2a + b; f(3) = 3a + b.",
        "3. Diferença entre termos sucessivos: (2a + b) - (a + b) = a.",
        "4. Definição de PA: sequência com diferença constante entre vizinhos (razão r = a).",
        "5. Conclusão: A alternativa (a) estabelece com elegância a ponte teórica entre funções afins e PA."
      ],
      coreConcept: "Equivalência entre Função Afim e Progressão Aritmética",
      trapWarning: "No ENEM: Guarde esse par perfeito: FUNÇÃO DO 1º GRAU (AFIM) = PROGRESSÃO ARITMÉTICA (PA); FUNÇÃO EXPONENCIAL = PROGRESSÃO GEOMÉTRICA (PG)!"
    },
    commonTraps: [
      "Confundir o papel de PA com PG em funções lineares",
      "Achar que o coeficiente linear b é a razão da PA"
    ],
    tags: ["funcao-afim", "pa", "coeficiente-angular", "discretizacao", "ponte-teorica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-024",
    area: "matematica",
    competence: 4,
    skill: 15,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Crescimento Populacional Malthusiano: PG da População vs PA da Produção",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1798, o economista e demógrafo britânico Thomas Robert Malthus publicou o *Ensaio sobre o Princípio da População*, no qual sustentou a tese de que a fome e a escassez de recursos seriam inevitáveis para a humanidade. O argumento central de Malthus baseava-se em duas hipóteses matemáticas distintas:\n1. A produção de alimentos e meios de subsistência cresce em ritmo aritmético (PA: 1, 2, 3, 4, 5...);\n2. A população humana desprovida de freios cresce em ritmo geométrico exponencial (PG: 1, 2, 4, 8, 16...).",
      source: "MALTHUS, Thomas Robert. An Essay on the Principle of Population, 1798"
    },
    prompt: "Do ponto de vista puramente matemático e da análise comparativa de gráficos de funções, a predição malthusiana de colapso alimentar sustentava-se no fato irrefutável de que:",
    options: [
      { id: "a", text: "uma função exponencial de razão estritamente maior que 1 (PG) apresenta taxa de crescimento percentual composta contínua que, a médio e longo prazos, supera inevitavelmente qualquer função linear com taxa de variação constante (PA).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "uma progressão aritmética decresce assintoticamente até atingir o zero absoluto em climas tropicais.", isCorrect: false, distractorRationale: "A PA malthusiana cresce linearmente de forma positiva, sem tender a zero." },
      { id: "c", text: "populações humanas se reproduzem por clonagem vegetal celular a cada minuto geológico.", isCorrect: false, distractorRationale: "Humanos realizam reprodução sexuada com tempo de geração de ~25 anos." },
      { id: "d", text: "a produção agrícola é matematicamente impossível de ser incrementada por meio de fertilizantes nitrogenados.", isCorrect: false, distractorRationale: "A Revolução Verde e a química de Haber-Bosch aumentaram enormemente a produtividade agrícola exatamente refutando Malthus na prática histórica." },
      { id: "e", text: "funções lineares e funções exponenciais possuem exatamente a mesma derivada e inclinação tangencial.", isCorrect: false, distractorRationale: "Funções afins têm derivada constante, enquanto exponenciais têm derivadas que crescem proporcionalmente ao valor da própria função." }
    ],
    detailedExplanation: {
      summary: "Malthus cometeu erros históricos sobre a capacidade da ciência de revolucionar a agricultura (adubos, maquinário, sementes transgênicas), mas no plano da MATEMÁTICA PURA ele estava coberto de razão: uma PG com q > 1 (exponencial) SEMPRE ultrapassa uma PA (linear) mais cedo ou mais tarde, não importa quão grande seja o início ou a razão da PA!",
      stepByStep: [
        "1. Modelo de produção de alimentos: Função linear f(t) = at + b (PA).",
        "2. Modelo populacional: Função exponencial g(t) = c · q^t (PG com q > 1).",
        "3. Propriedade assintótica: Para t suficientemente grande, q^t cresce infinitamente mais rápido que qualquer polinômio at.",
        "4. Conclusão: A alternativa (a) reflete com precisão matemática a teoria malthusiana."
      ],
      coreConcept: "A Comparação Malthusiana: Crescimento Linear (PA) vs Exponencial (PG)",
      trapWarning: "No ENEM: Questão interdisciplinar clássica de História, Geografia e Matemática! A teoria malthusiana errou socialmente, mas o princípio matemático de que a PG supera a PA no longo prazo é perfeito!"
    },
    commonTraps: [
      "Achar que Malthus considerava que a população crescia em PA e os alimentos em PG (é o inverso!)",
      "Desconsiderar a superioridade assintótica da função exponencial sobre a linear"
    ],
    tags: ["malthusianismo", "pa-vs-pg", "demografia", "crescimento-populacional", "interdisciplinar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-PROG-025",
    area: "matematica",
    competence: 4,
    skill: 16,
    topic: "Progressões Aritméticas e Geométricas",
    subtopic: "Logaritmos de Termos de uma PG Transformam-se em uma PA",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "conceptual",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Considere uma Progressão Geométrica estritamente positiva de termos (g1, g2, g3, ...) com razão q > 0 (q ≠ 1). Se aplicarmos o logaritmo em uma base qualquer b > 0 (b ≠ 1) a cada um dos termos dessa sequência, obtemos uma nova sequência numérica (log_b g1, log_b g2, log_b g3, ...).",
      source: "Álgebra Avançada e Propriedades Operatórias de Logaritmos"
    },
    prompt: "Com base nas propriedades operatórias dos logaritmos, a nova sequência formada pelos logaritmos dos termos da PG constitui uma:",
    options: [
      { id: "a", text: "Progressão Aritmética (PA) cujo primeiro termo é log_b(g1) e cuja razão é igual a log_b(q).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Progressão Geométrica de razão igual a q elevado à base b.", isCorrect: false, distractorRationale: "O logaritmo converte multiplicações em somas, transformando a PG em PA, e não em outra PG." },
      { id: "c", text: "Sequência alternada oscilante sem limite finito.", isCorrect: false, distractorRationale: "A sequência é monótona estritamente crescente ou decrescente com diferença constante." },
      { id: "d", text: "Progressão de números imaginários puros com raiz de menos um.", isCorrect: false, distractorRationale: "Os termos e a razão são estritamente positivos reais, gerando logaritmos reais puros." },
      { id: "e", text: "Constante nula com todos os termos iguais a zero.", isCorrect: false, distractorRationale: "Como q ≠ 1, log_b(q) ≠ 0, garantindo termos distintos em PA com razão não nula." }
    ],
    detailedExplanation: {
      summary: "Esta é uma das propriedades mais elegantes da matemática: o LOGARITMO TRANSFORMA UMA PG EM UMA PA! Demonstração: Seja gn+1 = gn · q (definição de PG). Aplicando log: log(gn+1) = log(gn · q) = log(gn) + log(q). Logo: log(gn+1) - log(gn) = log(q) = CONSTANTE! Se a diferença entre termos consecutivos é constante, trata-se de uma PA com razão R = log(q).",
      stepByStep: [
        "1. Relação na PG: gn = g1 · q^(n - 1).",
        "2. Aplicando logaritmo: log(gn) = log[g1 · q^(n - 1)].",
        "3. Propriedade do produto e potência: log(gn) = log(g1) + (n - 1) · log(q).",
        "4. Comparando com o termo geral da PA (an = a1 + (n - 1) · r): a1 = log(g1) e r = log(q).",
        "5. Conclusão: A sequência dos logaritmos é rigorosamente uma Progressão Aritmética. Alternativa (a) correta."
      ],
      coreConcept: "A Transformação Logarítmica: log(PG) = PA de Razão log(q)",
      trapWarning: "No ENEM: Guarde a relação mágica: O logaritmo transforma MULTIPLICAÇÃO em SOMA! Por isso, ele transforma PROGRESSÃO GEOMÉTRICA em PROGRESSÃO ARITMÉTICA!"
    },
    commonTraps: [
      "Achar que aplicar logaritmo em uma PG gera outra PG",
      "Esquecer que log(a · b) = log a + log b"
    ],
    tags: ["logaritmos-e-pg", "transformacao-logaritmica", "pa-e-pg", "algebra-avancada", "propriedades-matematicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
