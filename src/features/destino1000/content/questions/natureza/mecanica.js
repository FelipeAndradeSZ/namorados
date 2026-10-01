export const QUESTIONS_MECANICA = [
  {
    id: "NAT-MEC-001",
    area: "natureza",
    competence: 1,
    skill: 1,
    topic: "Mecânica",
    subtopic: "Cinemática",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    cityId: "sao-paulo",
    hubId: "metro-sp",
    context: {
      supportText: "No sistema de Metrô de São Paulo, os trens frequentemente operam com acelerações e desacelerações constantes para garantir eficiência e conforto. Um trem da Linha 3-Vermelha parte do repouso na Estação Sé em direção à Estação Pedro II. A distância entre as duas estações é de aproximadamente 800 metros. O trem acelera uniformemente a 1,0 m/s² até atingir a velocidade máxima de 20 m/s, mantém essa velocidade por um tempo e depois desacelera uniformemente a -1,0 m/s² até parar na estação seguinte.",
      source: "Original"
    },
    prompt: "Considerando o perfil de movimento do trem descrito, o tempo total de viagem entre a Estação Sé e a Estação Pedro II é de:",
    options: [
      { id: "a", text: "40 segundos.", isCorrect: false, distractorRationale: "Esse é apenas o tempo somado de aceleração (20s) e desaceleração (20s). Ignora a fase de velocidade constante." },
      { id: "b", text: "50 segundos.", isCorrect: false, distractorRationale: "Erro de cálculo na distância percorrida nos trechos MRUV." },
      { id: "c", text: "60 segundos.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "80 segundos.", isCorrect: false, distractorRationale: "Esse seria o tempo se a velocidade média de toda a viagem fosse 10 m/s (800/10), mas o trem tem um trecho a 20 m/s." },
      { id: "e", text: "100 segundos.", isCorrect: false, distractorRationale: "Erro comum dividindo a distância por algo errado ou considerando MRU o tempo todo a 8 m/s." }
    ],
    detailedExplanation: {
      summary: "O movimento é dividido em três etapas: aceleração, velocidade constante e desaceleração. A soma dos tempos dessas etapas dá o tempo total.",
      stepByStep: [
        "Passo 1: Aceleração (MRUV). v = v0 + at => 20 = 0 + 1.t1 => t1 = 20 s. Distância d1 = (v+v0)/2 * t1 = (20/2)*20 = 200 m.",
        "Passo 2: Desaceleração (MRUV). É simétrica: de 20 m/s a 0 a -1 m/s². t3 = 20 s. d3 = 200 m.",
        "Passo 3: Trecho de velocidade constante (MRU). A distância restante é d2 = 800 - 200 - 200 = 400 m.",
        "Passo 4: Tempo no MRU. d2 = v * t2 => 400 = 20 * t2 => t2 = 20 s.",
        "Passo 5: Tempo total = t1 + t2 + t3 = 20 + 20 + 20 = 60 s."
      ],
      coreConcept: "Cinemática com MRU e MRUV compostos",
      trapWarning: "Esquecer de subtrair a distância das fases de aceleração/desaceleração da distância total."
    },
    commonTraps: ["Achar que a viagem inteira foi acelerada", "Esquecer a distância da aceleração"],
    tags: ["cinematica", "mruv", "graficos v-t"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-002",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Mecânica",
    subtopic: "Dinâmica",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "rio-de-janeiro",
    hubId: "bondinho-pao-de-acucar",
    context: {
      supportText: "O Bondinho do Pão de Açúcar, no Rio de Janeiro, é um teleférico que liga a Praia Vermelha ao Morro da Urca e ao Morro do Pão de Açúcar. Imagine o bondinho lotado de passageiros, subindo com velocidade constante após ter vencido a inércia inicial da partida.",
      source: "Inspirada em ENEM"
    },
    prompt: "Durante a subida, enquanto o bondinho se move em linha reta com velocidade escalar constante, a relação entre as forças que atuam nele (peso total P e força de tração T dos cabos, desprezando a resistência do ar) é explicada por qual princípio da Física?",
    options: [
      { id: "a", text: "A tração T deve ser estritamente maior que o peso total P na direção do movimento para manter a subida.", isCorrect: false, distractorRationale: "Como a velocidade é constante, a força resultante deve ser nula (T = componente de P paralela ao cabo)." },
      { id: "b", text: "A resultante das forças sobre o bondinho é nula, em concordância com a Primeira Lei de Newton (Inércia).", isCorrect: true, distractorRationale: null },
      { id: "c", text: "O trabalho realizado pela força peso é positivo, uma vez que o bondinho está ganhando altura.", isCorrect: false, distractorRationale: "O trabalho da força peso na subida é negativo (motor da força tracionadora, mas peso atua contra o deslocamento)." },
      { id: "d", text: "A força de tração forma um par de ação e reação com o peso do bondinho, anulando-se.", isCorrect: false, distractorRationale: "Ação e reação nunca atuam no mesmo corpo." },
      { id: "e", text: "A energia cinética do bondinho aumenta continuamente, justificando o uso contínuo de energia elétrica.", isCorrect: false, distractorRationale: "A velocidade é constante, logo a energia cinética é constante. O que aumenta é a energia potencial gravitacional." }
    ],
    detailedExplanation: {
      summary: "Movimento retilíneo uniforme (velocidade constante e linha reta) significa que a aceleração é zero, logo, a força resultante é nula (1ª Lei de Newton).",
      stepByStep: [
        "Passo 1: Identificar a característica do movimento: subida em linha reta com velocidade constante (MRU).",
        "Passo 2: Relacionar com as Leis de Newton. A Primeira Lei (Inércia) diz que um corpo em MRU tem resultante de forças igual a zero.",
        "Passo 3: Se a resultante é zero, a tração exercida pelos cabos (e componentes) se equilibra exatamente com a componente do peso e atritos ao longo da direção do movimento."
      ],
      coreConcept: "Primeira Lei de Newton (Inércia) e Equilíbrio Dinâmico",
      trapWarning: "É intuitivo achar que para 'continuar subindo', a força de tração tem que ser sempre 'maior' que a força contrária, mas isso só vale se houver aceleração."
    },
    commonTraps: ["Achar que movimento requer força resultante", "Confundir pares de ação e reação"],
    tags: ["leis de newton", "dinamica", "equilibrio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-003",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Mecânica",
    subtopic: "Conservação de Energia",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    cityId: "rio-de-janeiro",
    hubId: "pista-skate",
    context: {
      supportText: "Um skatista carioca desce uma pista de skate em formato de U (halfpipe). Ele parte do repouso na borda da pista, a 3,2 metros de altura em relação ao ponto mais baixo. Considere a massa do conjunto skatista+skate igual a 70 kg e a aceleração da gravidade g = 10 m/s².",
      source: "Original"
    },
    prompt: "Desprezando as forças dissipativas (atrito e resistência do ar), a velocidade do skatista ao passar pelo ponto mais baixo da pista e o trabalho realizado pela força peso desde o início da descida até esse ponto são, respectivamente:",
    options: [
      { id: "a", text: "8 m/s e 2240 Joules.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "8 m/s e -2240 Joules.", isCorrect: false, distractorRationale: "O trabalho do peso na descida é motor (positivo), não resistente." },
      { id: "c", text: "4 m/s e 2240 Joules.", isCorrect: false, distractorRationale: "Erro na extração da raiz quadrada da energia cinética (v = raiz(2gh) = raiz(64) = 8, não 4)." },
      { id: "d", text: "16 m/s e 1120 Joules.", isCorrect: false, distractorRationale: "Esquecimento da raiz quadrada e erro no cálculo do trabalho (mgh)." },
      { id: "e", text: "8 m/s e 0 Joules.", isCorrect: false, distractorRationale: "Trabalho da força resultante num sistema conservativo (W = delta Ec), mas o trabalho do peso especificamente é mgh. Não é nulo." }
    ],
    detailedExplanation: {
      summary: "Toda a energia potencial gravitacional inicial transforma-se em energia cinética no ponto mais baixo.",
      stepByStep: [
        "Passo 1: Calcular o trabalho do Peso (Wp). Na descida, Wp = +m.g.h = 70 * 10 * 3,2 = 2240 J.",
        "Passo 2: Aplicar conservação de energia ou o Teorema do Trabalho-Energia. Ep_inicial = Ec_final.",
        "Passo 3: m.g.h = (m.v²)/2 => g.h = v²/2 => 10 * 3,2 = v²/2 => 32 = v²/2 => v² = 64.",
        "Passo 4: v = raiz(64) = 8 m/s."
      ],
      coreConcept: "Conservação da Energia Mecânica e Trabalho da Força Peso",
      trapWarning: "Errar o sinal do trabalho da força peso (positivo na descida) ou errar a matemática da energia cinética."
    },
    commonTraps: ["Esquecer a raiz na velocidade", "Sinal do trabalho do peso"],
    tags: ["energia", "conservacao", "trabalho", "skate"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-004",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Mecânica",
    subtopic: "Potência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    cityId: "brasilia",
    hubId: "usina-hidreletrica",
    context: {
      supportText: "A Usina Hidrelétrica de Itaipu, embora não localizada no DF, fornece boa parte da energia consumida em Brasília. Imagine uma pequena hidrelétrica modelo onde a água cai de uma altura de 20 metros. A vazão de água que passa pelas turbinas é de 50.000 litros por segundo. Considere a densidade da água 1 kg/L, g = 10 m/s² e que as turbinas têm uma eficiência de 80% na conversão de energia mecânica em energia elétrica.",
      source: "Inspirada em ENEM"
    },
    prompt: "Qual é a potência elétrica gerada por essa hidrelétrica modelo em Megawatts (MW)?",
    options: [
      { id: "a", text: "8 MW", isCorrect: true, distractorRationale: null },
      { id: "b", text: "10 MW", isCorrect: false, distractorRationale: "Essa seria a potência total disponível na queda (potência mecânica), ignorando a eficiência de 80%." },
      { id: "c", text: "80 MW", isCorrect: false, distractorRationale: "Erro de ordem de grandeza (fator 10) ao converter W para MW." },
      { id: "d", text: "12,5 MW", isCorrect: false, distractorRationale: "Dividiu a potência mecânica por 0,8 (como se quisesse achar um valor maior) em vez de multiplicar." },
      { id: "e", text: "100 MW", isCorrect: false, distractorRationale: "Erro de cálculo múltiplo (talvez usando vazão errada ou esquecendo a gravidade)." }
    ],
    detailedExplanation: {
      summary: "A potência elétrica gerada depende da energia potencial gravitacional da água por segundo (potência mecânica total) multiplicada pela eficiência da usina.",
      stepByStep: [
        "Passo 1: Determinar a massa de água que cai por segundo. Vazão = 50.000 L/s = 50.000 kg/s (pois d = 1 kg/L).",
        "Passo 2: Calcular a Potência Potencial (Mecânica). P_mec = (m * g * h) / t = (m/t) * g * h = 50.000 * 10 * 20 = 10.000.000 W = 10 MW.",
        "Passo 3: Calcular a Potência Elétrica (Útil) usando a eficiência de 80%. P_ele = 0,80 * 10 MW = 8 MW."
      ],
      coreConcept: "Potência, Energia Potencial e Rendimento (Eficiência)",
      trapWarning: "Esquecer de aplicar a eficiência (rendimento) e marcar a potência total disponível."
    },
    commonTraps: ["Ignorar o rendimento de 80%", "Errar a conversão para Megawatts (10^6 W)"],
    tags: ["potencia", "hidreletrica", "rendimento", "energia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-005",
    area: "natureza",
    competence: 4,
    skill: 13,
    topic: "Mecânica",
    subtopic: "Dinâmica e Atrito",
    difficulty: 4,
    estimatedTimeSeconds: 200,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    cityId: "sao-paulo",
    hubId: "rodovia-imigrantes",
    context: {
      supportText: "Na descida da Rodovia dos Imigrantes, de São Paulo em direção ao litoral, os motoristas utilizam o 'freio motor' para evitar o superaquecimento das pastilhas de freio. Considere um carro de 1000 kg descendo um trecho reto da serra com inclinação de 30° em relação à horizontal, mantendo velocidade constante. (Dados: sen 30° = 0,5; cos 30° = 0,86; g = 10 m/s²).",
      source: "Original"
    },
    prompt: "Para que o carro de 1000 kg desça a serra com velocidade constante, a soma das forças de atrito (pneus com o asfalto) e resistência do ar, além do freio motor, deve exercer uma força contrária ao movimento com magnitude igual a:",
    options: [
      { id: "a", text: "5.000 N", isCorrect: true, distractorRationale: null },
      { id: "b", text: "8.600 N", isCorrect: false, distractorRationale: "Calculou a componente Normal do peso (P.cos 30) em vez da componente paralela ao plano (P.sen 30)." },
      { id: "c", text: "10.000 N", isCorrect: false, distractorRationale: "Usou a força peso total (m.g), ignorando a inclinação do plano." },
      { id: "d", text: "4.300 N", isCorrect: false, distractorRationale: "Calculou (m.g/2) * cos 30 erroneamente ou confundiu as relações." },
      { id: "e", text: "0 N", isCorrect: false, distractorRationale: "Confundiu velocidade constante com ausência total de forças (mas o peso empurra para baixo, precisa de força contra)." }
    ],
    detailedExplanation: {
      summary: "Para manter velocidade constante num plano inclinado, a força resistente total deve anular exatamente a componente do peso paralela ao plano (Px).",
      stepByStep: [
        "Passo 1: Entender que velocidade constante significa aceleração nula. Logo, a resultante das forças na direção do movimento é zero.",
        "Passo 2: Identificar a força que empurra o carro para baixo: a componente paralela do peso, Px = P * sen(theta).",
        "Passo 3: P = m * g = 1000 * 10 = 10.000 N.",
        "Passo 4: Px = 10.000 * sen(30°) = 10.000 * 0,5 = 5.000 N.",
        "Passo 5: A força contrária (atrito + ar + freio motor) deve ser exatamente igual e oposta a Px, ou seja, 5.000 N."
      ],
      coreConcept: "Plano Inclinado e Primeira Lei de Newton (Equilíbrio dinâmico)",
      trapWarning: "Usar cosseno no lugar de seno para calcular a componente que causa o escorregamento."
    },
    commonTraps: ["Confundir Px com Py (seno x cosseno)", "Não perceber que v constante = resultante nula"],
    tags: ["dinamica", "plano inclinado", "atrito"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
