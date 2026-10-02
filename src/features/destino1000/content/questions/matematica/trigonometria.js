export const QUESTIONS_TRIGONOMETRIA = [
  {
    id: "MAT-TRIG-001",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Trigonometria",
    subtopic: "Razões Trigonométricas e Teodolito",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um topógrafo utiliza um teodolito a 1,60 m do solo para medir a altura de uma torre de transmissão. A partir de um ponto no chão a 40 metros de distância horizontal da base da torre, o ângulo de elevação visual até o topo é medido em 30°. (Considere: sen 30° = 0,50; cos 30° = 0,87; tg 30° = 0,58).",
      source: "ENEM Contexto Topográfico"
    },
    prompt: "Qual é a altura total da torre de transmissão, em metros?",
    options: [
      { id: "a", text: "24,8 m", isCorrect: true, distractorRationale: null },
      { id: "b", text: "23,2 m", isCorrect: false, distractorRationale: "Calculou a altura do triângulo (40 · 0,58 = 23,2 m), mas esqueceu de somar a altura do teodolito (1,60 m)." },
      { id: "c", text: "34,8 m", isCorrect: false, distractorRationale: "Usou cosseno em vez de tangente na razão trigonométrica." },
      { id: "d", text: "21,6 m", isCorrect: false, distractorRationale: "Usou seno em vez de tangente." },
      { id: "e", text: "26,4 m", isCorrect: false, distractorRationale: "Somou duas vezes a altura do aparelho." }
    ],
    detailedExplanation: {
      summary: "Usa-se a tangente para relacionar o cateto oposto (H - h) com o cateto adjacente (distância horizontal D), lembrando de somar a altura do instrumento.",
      stepByStep: [
        "A relação no triângulo é: tg(30°) = Cateto Oposto / Cateto Adjacente = y / 40.",
        "Calcule o cateto oposto y: y = 40 · tg(30°) = 40 · 0,58 = 23,2 metros.",
        "A altura total da torre H é a soma de y com a altura do teodolito h: H = 23,2 + 1,60 = 24,8 metros."
      ],
      coreConcept: "Aplicação da Tangente no Triângulo Retângulo e Compensação da Linha de Visada",
      trapWarning: "A pegadinha clássica do ENEM é esquecer de somar a altura do observador ou do teodolito à altura calculada!"
    },
    commonTraps: ["esquecer de somar altura do observador", "usar seno no lugar de tangente"],
    tags: ["trigonometria", "tangente", "geometria plana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-002",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Trigonometria",
    subtopic: "Funções Periódicas: Modelagem de Marés",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A altura da maré H(t), em metros, em uma baía portuária ao longo do dia é modelada pela função periódica H(t) = 3 + 2 · sen( (π/6) · t ), onde t é o tempo medido em horas a partir da meia-noite (0 ≤ t ≤ 24).",
      source: "ENEM Modelagem Periódica"
    },
    prompt: "Qual é a altura máxima atingida pela maré (preamar) e em qual primeiro horário da madrugada ela ocorre?",
    options: [
      { id: "a", text: "5 metros, às 03:00 da madrugada.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "3 metros, às 06:00 da manhã.", isCorrect: false, distractorRationale: "Confundiu a altura média (termo constante 3) com a altura máxima." },
      { id: "c", text: "5 metros, às 06:00 da manhã.", isCorrect: false, distractorRationale: "Errou o argumento do seno para que sen(x) = 1." },
      { id: "d", text: "2 metros, às 00:00 (meia-noite).", isCorrect: false, distractorRationale: "Considerou apenas a amplitude e tempo zero." },
      { id: "e", text: "4 metros, às 04:00 da madrugada.", isCorrect: false, distractorRationale: "Cálculo incorreto da amplitude." }
    ],
    detailedExplanation: {
      summary: "A altura máxima ocorre quando o seno atinge seu valor máximo (+1).",
      stepByStep: [
        "O valor máximo da função seno é sen(θ) = 1.",
        "Substituindo na função: H_max = 3 + 2 · (1) = 5 metros.",
        "Para o primeiro máximo: o argumento do seno deve ser π/2: (π/6) · t = π/2.",
        "Simplificando π de ambos os lados: t / 6 = 1 / 2 → t = 6 / 2 = 3 horas (03:00 da madrugada)."
      ],
      coreConcept: "Modelagem com Funções Trigonométricas Senoidais: Amplitude, Média e Período",
      trapWarning: "Lembre-se de que o seno varia de -1 a +1. O valor máximo é sempre Termo Central + Amplitude."
    },
    commonTraps: ["confundir amplitude com altura máxima", "errar o valor do ângulo que maximiza o seno"],
    tags: ["funcao trigonometrica", "periodo", "mares"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-003",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Trigonometria",
    subtopic: "Funções Periódicas: Roda-Gigante",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um parque urbano de recreação, uma roda-gigante tem raio de 15 metros e seu eixo de rotação está fixado a 18 metros de altura em relação ao solo. A roda gira em velocidade angular constante, completando uma volta completa a cada 2 minutos (120 segundos). Uma cabine parte da posição mais baixa no instante t = 0.",
      source: "ENEM Modelagem de Movimento Circular"
    },
    prompt: "A expressão da altura h(t), em metros, dessa cabine em relação ao solo em função do tempo t (em segundos) é dada por:",
    options: [
      { id: "a", text: "h(t) = 18 - 15 · cos( (π/60) · t )", isCorrect: true, distractorRationale: null },
      { id: "b", text: "h(t) = 18 + 15 · sen( (π/60) · t )", isCorrect: false, distractorRationale: "No instante t = 0, sen(0) = 0 geraria h(0) = 18 m (centro da roda), quando a cabine parte do chão (3 m)." },
      { id: "c", text: "h(t) = 15 - 18 · cos( (π/120) · t )", isCorrect: false, distractorRationale: "Inverteu a altura do centro com o raio da roda." },
      { id: "d", text: "h(t) = 33 - 15 · cos( 2π · t )", isCorrect: false, distractorRationale: "Errou o período de rotação e o valor médio da altura." },
      { id: "e", text: "h(t) = 18 + 15 · cos( (π/30) · t )", isCorrect: false, distractorRationale: "Em t = 0 a cabine estaria no topo da roda (33 m), e o período estaria incorreto (60s em vez de 120s)." }
    ],
    detailedExplanation: {
      summary: "A altura da cabine oscila em torno da altura do centro (18 m) com amplitude igual ao raio (15 m). Como parte do ponto mais baixo (18 - 15 = 3 m), usamos a função cosseno negativa.",
      stepByStep: [
        "Altura mínima: 18 - 15 = 3 metros no instante t = 0.",
        "Altura máxima: 18 + 15 = 33 metros após meia volta (60 s).",
        "Como cos(0) = 1, h(0) = 18 - 15(1) = 3 metros, confirmando o ponto inicial inferior.",
        "Frequência angular: ω = 2π / T = 2π / 120 = π / 60 rad/s.",
        "Função final: h(t) = 18 - 15 · cos( (π/60) · t )."
      ],
      coreConcept: "Função Cossenoidal Periódica e Movimento Harmônico Circular",
      trapWarning: "Verifique sempre os valores extremos (t = 0 e t = T/2) para testar se a equação bate com o enunciado antes de assinalar a alternativa."
    },
    commonTraps: [
      "Usar seno em vez de cosseno quando a condição inicial não está no ponto médio",
      "Errar o cálculo da frequência angular ω = 2π/T"
    ],
    tags: ["funcoes-periodicas", "roda-gigante", "trigonometria", "cosseno"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-004",
    area: "matematica",
    competence: 2,
    skill: 9,
    topic: "Trigonometria",
    subtopic: "Lei dos Cossenos",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois barcos de patrulha ambiental partem simultaneamente do mesmo posto de fiscalização em um grande lago represado. O barco A navega em linha reta por 6 km, enquanto o barco B navega em linha reta por 10 km. As trajetórias dos dois barcos formam entre si um ângulo de 60°. (Dado: cos 60° = 0,5).",
      source: "ENEM Geometria e Navegação"
    },
    prompt: "Qual é a distância em linha reta, em quilômetros, entre os dois barcos ao final de seus trajetos?",
    options: [
      { id: "a", text: "2√19 km (aproximadamente 8,7 km)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "4 km", isCorrect: false, distractorRationale: "Subtraiu diretamente as distâncias (10 - 6 = 4 km), ignorando o triângulo não retângulo." },
      { id: "c", text: "14 km", isCorrect: false, distractorRationale: "Calculou como se o ângulo fosse 180° e somou as distâncias." },
      { id: "d", text: "8 km", isCorrect: false, distractorRationale: "Aplicou incorretamente o Teorema de Pitágoras sem subtrair o termo do cosseno." },
      { id: "e", text: "√196 = 14 km", isCorrect: false, distractorRationale: "Errou o sinal do termo com cosseno na fórmula da Lei dos Cossenos." }
    ],
    detailedExplanation: {
      summary: "Em qualquer triângulo não retângulo, conhecendo dois lados e o ângulo formado entre eles, a distância entre as extremidades é calculada pela Lei dos Cossenos: a² = b² + c² - 2bc · cos(θ).",
      stepByStep: [
        "Identificação dos dados: b = 6 km, c = 10 km, θ = 60°, cos 60° = 0,5.",
        "Aplicação da fórmula: d² = 6² + 10² - 2 · 6 · 10 · cos(60°).",
        "d² = 36 + 100 - (120 · 0,5).",
        "d² = 136 - 60 = 76.",
        "d = √76 = √(4 · 19) = 2√19 km ≈ 8,72 km."
      ],
      coreConcept: "Lei dos Cossenos em Triângulos Quaisquer",
      trapWarning: "Cuidado com o sinal de menos na Lei dos Cossenos: é a² = b² + c² MENOS 2bc·cos(θ)."
    },
    commonTraps: [
      "Aplicar Pitágoras a² = b² + c² esquecendo que o ângulo é de 60° e não de 90°",
      "Errar a simplificação do radical √76"
    ],
    tags: ["lei-dos-cossenos", "geometria", "trigonometria-triangulos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-005",
    area: "matematica",
    competence: 2,
    skill: 9,
    topic: "Trigonometria",
    subtopic: "Lei dos Senos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para determinar a largura de um rio entre dois pontos inacessíveis A e B, engenheiros demarcaram uma base de observação C na margem onde se encontram. Mediram os ângulos: o ângulo no vértice A vale 45° e o ângulo no vértice B vale 30°. A distância entre o ponto C e o ponto B foi medida em 60 metros. (Dados: sen 30° = 1/2; sen 45° = √2/2; considere √2 ≈ 1,41).",
      source: "ENEM Triangulação Topográfica"
    },
    prompt: "Com base na Lei dos Senos, a distância entre os pontos A e C é de aproximadamente:",
    options: [
      { id: "a", text: "42,4 metros", isCorrect: true, distractorRationale: null },
      { id: "b", text: "60,0 metros", isCorrect: false, distractorRationale: "Supôs que o triângulo fosse isósceles, mas os ângulos medidos são distintos (45° e 30°)." },
      { id: "c", text: "30,0 metros", isCorrect: false, distractorRationale: "Multiplicou por sen 30° sem dividir por sen 45°." },
      { id: "d", text: "84,8 metros", isCorrect: false, distractorRationale: "Inverteu a posição dos senos na proporção da Lei dos Senos." },
      { id: "e", text: "51,2 metros", isCorrect: false, distractorRationale: "Erro de cálculo na divisão por √2." }
    ],
    detailedExplanation: {
      summary: "Pela Lei dos Senos, em qualquer triângulo os lados são proporcionais aos senos dos seus ângulos opostos: AC / sen(B) = BC / sen(A).",
      stepByStep: [
        "O lado AC opõe-se ao ângulo B (30°).",
        "O lado BC (60 m) opõe-se ao ângulo A (45°).",
        "Pela Lei dos Senos: AC / sen(30°) = 60 / sen(45°).",
        "AC / (1/2) = 60 / (√2/2) → 2 · AC = 120 / √2.",
        "AC = 60 / √2 = 60√2 / 2 = 30√2 metros.",
        "Substituindo √2 ≈ 1,414: AC = 30 · 1,414 ≈ 42,42 metros."
      ],
      coreConcept: "Lei dos Senos e Triangulação em Topografia",
      trapWarning: "Certifique-se de associar cada lado ao ângulo exatamente OPOSTO a ele, e nunca a um ângulo adjacente."
    },
    commonTraps: [
      "Inverter a ordem das razões da proporção",
      "Errar a racionalização do denominador com raiz de 2"
    ],
    tags: ["lei-dos-senos", "triangulacao", "geometria", "proporcionalidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-006",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Trigonometria",
    subtopic: "Relação Fundamental da Trigonometria",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um circuito elétrico de corrente alternada, a tensão instantânea e a corrente apresentam uma defasagem angular θ que pertence ao primeiro quadrante (0 < θ < π/2). Um instrumento digital de precisão registra que o fator de potência cos(θ) vale 0,80.",
      source: "ENEM Eletricidade e Circuitos"
    },
    prompt: "Com base na Relação Fundamental da Trigonometria (sen² θ + cos² θ = 1), o valor da tangente desse ângulo de defasagem (tg θ) é igual a:",
    options: [
      { id: "a", text: "0,75", isCorrect: true, distractorRationale: null },
      { id: "b", text: "0,60", isCorrect: false, distractorRationale: "Esse é o valor de sen(θ), mas a questão pediu tg(θ) = sen(θ)/cos(θ)." },
      { id: "c", text: "0,80", isCorrect: false, distractorRationale: "Esse é o próprio cos(θ) dado no texto." },
      { id: "d", text: "1,25", isCorrect: false, distractorRationale: "Calculou o inverso do cosseno (secante = 1/0,8 = 1,25), não a tangente." },
      { id: "e", text: "0,20", isCorrect: false, distractorRationale: "Fez 1 - 0,8 sem elevar ao quadrado." }
    ],
    detailedExplanation: {
      summary: "Pela relação fundamental, sen² θ = 1 - cos² θ. Em seguida, obtém-se a tangente pela razão tg θ = sen θ / cos θ.",
      stepByStep: [
        "cos(θ) = 0,80 = 4/5.",
        "sen²(θ) = 1 - (0,80)² = 1 - 0,64 = 0,36.",
        "Como θ está no primeiro quadrante: sen(θ) = √0,36 = 0,60 = 3/5.",
        "Cálculo da tangente: tg(θ) = sen(θ) / cos(θ) = 0,60 / 0,80 = 3/4 = 0,75."
      ],
      coreConcept: "Relação Fundamental da Trigonometria e Triângulo Pitagórico 3-4-5",
      trapWarning: "Atenção ao que o comando pede: ele pede tg(θ), e não sen(θ). Muitos candidatos marcam 0,60 por afobação."
    },
    commonTraps: [
      "Parar o cálculo ao encontrar o seno e esquecer de calcular a tangente",
      "Subtrair sem elevar ao quadrado (1 - 0,8 = 0,2)"
    ],
    tags: ["relacao-fundamental", "tangente", "cosseno", "seno"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-007",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Trigonometria",
    subtopic: "Rampas de Acessibilidade e a Norma NBR 9050",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A norma brasileira de acessibilidade (ABNT NBR 9050) estabelece que a inclinação percentual i de uma rampa reta para cadeirantes é dada pela razão entre o desnível vertical h e o comprimento da projeção horizontal d da rampa, expressa por i = (h / d) · 100%. Em termos trigonométricos, isso equivale a i = tg(θ) · 100%, onde θ é o ângulo de inclinação com o solo. Para desníveis de 80 cm (0,80 m), a norma estipula uma inclinação máxima recomendada de 8%.",
      source: "ABNT NBR 9050, Acessibilidade a Edificações, Mobiliário e Espaços Urbanos."
    },
    prompt: "Para vencer esse desnível de 0,80 metro respeitando rigorosamente a inclinação máxima de 8%, o comprimento mínimo da projeção horizontal d da rampa deve ser de:",
    options: [
      { id: "a", text: "10,0 metros", isCorrect: true, distractorRationale: null },
      { id: "b", text: "6,4 metros", isCorrect: false, distractorRationale: "Multiplicou 0,80 por 8 em vez de dividir." },
      { id: "c", text: "8,0 metros", isCorrect: false, distractorRationale: "Confundiu a inclinação de 8% com 10%." },
      { id: "d", text: "12,5 metros", isCorrect: false, distractorRationale: "Inverteu os valores na equação da tangente." },
      { id: "e", text: "1,0 metro", isCorrect: false, distractorRationale: "Erro de ordens de grandeza em unidades de centímetros e metros." }
    ],
    detailedExplanation: {
      summary: "A inclinação é a tangente do ângulo de elevação. Para i = 8% = 0,08 e h = 0,80 m, basta isolar o comprimento horizontal d.",
      stepByStep: [
        "Fórmula da inclinação: i = h / d.",
        "Substituindo os valores: 0,08 = 0,80 / d.",
        "Multiplicando em cruz: 0,08 · d = 0,80.",
        "d = 0,80 / 0,08 = 10 metros."
      ],
      coreConcept: "Inclinação de Rampas como Tangente Trigonométrica e Projeção Horizontal",
      trapWarning: "Cuidado: a projeção horizontal d é o cateto adjacente no chão; o comprimento da rampa propriamente dita seria a hipotenusa."
    },
    commonTraps: [
      "Confundir projeção horizontal (cateto) com o comprimento do piso da rampa (hipotenusa)",
      "Errar a conversão de porcentagem (8% = 0,08 e não 0,8)"
    ],
    tags: ["rampa", "acessibilidade", "tangente", "geometria-plana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-008",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Trigonometria",
    subtopic: "Painel Solar e Ângulo de Incidência Solar",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A potência elétrica gerada por uma placa solar fotovoltaica é máxima quando os raios solares incidem perpendicularmente à superfície (ângulo de incidência normal). Em um dia ensolarado ao meio-dia em uma cidade do interior paulista, os raios solares atingem o solo com um ângulo de elevação de 60°. Para que a placa fique perfeitamente perpendicular aos raios solares, ela deve ser montada em um suporte inclinado com um ângulo α em relação ao solo horizontal.",
      source: "ENEM Engenharia Solar e Energia Renovável"
    },
    prompt: "O ângulo de inclinação α do suporte com o solo para que a placa receba os raios solares de forma rigorosamente perpendicular (90°) deve ser igual a:",
    options: [
      { id: "a", text: "30°", isCorrect: true, distractorRationale: null },
      { id: "b", text: "60°", isCorrect: false, distractorRationale: "Esse é o ângulo dos raios com o solo; se a placa tivesse 60°, ficaria paralela aos raios solares e receberia energia zero." },
      { id: "c", text: "45°", isCorrect: false, distractorRationale: "Chute sem fundamentação geométrica." },
      { id: "d", text: "90°", isCorrect: false, distractorRationale: "A placa ficaria na vertical, não perpendicular a raios que incidem a 60°." },
      { id: "e", text: "120°", isCorrect: false, distractorRationale: "Ângulo obtuso que apontaria a placa para baixo." }
    ],
    detailedExplanation: {
      summary: "A soma dos ângulos agudos em um triângulo retângulo formado pela linha do solo, a superfície da placa e o feixe de luz solar é complementar (90°).",
      stepByStep: [
        "Os raios solares fazem 60° com a horizontal.",
        "A placa deve ser perpendicular aos raios (ângulo de 90° entre a placa e o raio).",
        "No triângulo formado pelo solo, a placa e o raio: a inclinação da placa com o solo (α) somada com o ângulo do raio solar (60°) deve resultar em 90° (ângulos complementares).",
        "Portanto: α + 60° = 90° → α = 30°."
      ],
      coreConcept: "Geometria dos Ângulos Complementares e Orientação de Módulos Fotovoltaicos",
      trapWarning: "Cuidado para não confundir o ângulo dos raios com o horizonte com o ângulo de inclinação do suporte da placa!"
    },
    commonTraps: [
      "Achar que o ângulo do suporte deve ser igual ao ângulo do raio solar (60°)",
      "Esquecer a propriedade dos ângulos complementares em triângulos retângulos"
    ],
    tags: ["energia-solar", "angulos-complementares", "trigonometria", "geometria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-009",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Trigonometria",
    subtopic: "Ciclo Trigonométrico e Redução ao Primeiro Quadrante",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No estudo dos movimentos harmônicos simples e de rotação de eixos em motores elétricos, é comum a ocorrência de ângulos situados no segundo, terceiro ou quarto quadrantes do ciclo trigonométrico trigonométrico de raio unitário R = 1. Considere um ponto material giratório que atingiu um ângulo de fase de 150° no ciclo.",
      source: "ENEM Fundamentos de Trigonometria"
    },
    prompt: "Os valores exatos de sen(150°) e cos(150°) são, respectivamente:",
    options: [
      { id: "a", text: "1/2 e -√3/2", isCorrect: true, distractorRationale: null },
      { id: "b", text: "-1/2 e √3/2", isCorrect: false, distractorRationale: "Inverteu os sinais: no 2º quadrante o seno é positivo e o cosseno é negativo." },
      { id: "c", text: "√3/2 e -1/2", isCorrect: false, distractorRationale: "Trocou o seno pelo cosseno (sen 150° = sen 30° = 1/2)." },
      { id: "d", text: "1/2 e √3/2", isCorrect: false, distractorRationale: "Esqueceu que no segundo quadrante a coordenada do eixo x (cosseno) é negativa." },
      { id: "e", text: "-√3/2 e -1/2", isCorrect: false, distractorRationale: "Sinais típicos do 3º quadrante, mas 150° está no 2º quadrante." }
    ],
    detailedExplanation: {
      summary: "Para arcos no segundo quadrante (90° < θ < 180°), a redução ao primeiro quadrante é dada por (180° - θ). No segundo quadrante, o seno é positivo (eixo y) e o cosseno é negativo (eixo x).",
      stepByStep: [
        "Arco de 150°: está no 2º quadrante.",
        "Redução: 180° - 150° = 30°.",
        "Seno no 2º quadrante é positivo: sen(150°) = +sen(30°) = +1/2.",
        "Cosseno no 2º quadrante é negativo: cos(150°) = -cos(30°) = -√3/2."
      ],
      coreConcept: "Ciclo Trigonométrico: Sinais dos Quadrantes e Redução Simétrica",
      trapWarning: "Lembrete mnemônico dos sinais dos quadrantes: Seno (Sem sono, fica em pé = vertical); Cosseno (Com sono, deitado = horizontal)."
    },
    commonTraps: [
      "Errar os sinais algébricos de seno e cosseno no 2º quadrante",
      "Confundir os valores de sen(30°) = 1/2 com sen(60°) = √3/2"
    ],
    tags: ["ciclo-trigonometrico", "segundo-quadrante", "seno-cosseno"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-010",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Trigonometria",
    subtopic: "Pêndulo e Altura de Oscilação",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um laboratório escolar de física, um pêndulo simples é montado com uma haste rígida inextensível de comprimento L = 2,0 metros presa a um teto horizontal. A massa suspensa é puxada lateralmente até que a haste forme um ângulo θ = 60° com a linha vertical de repouso, sendo então solta do repouso. (Dado: cos 60° = 0,50).",
      source: "ENEM Mecânica e Trigonometria"
    },
    prompt: "Qual é o desnível vertical h (em metros) atingido pela massa suspensa em relação à sua posição mais baixa de equilíbrio?",
    options: [
      { id: "a", text: "1,0 metro", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1,73 metro", isCorrect: false, distractorRationale: "Usou sen 60° = √3/2 em vez de cos 60° = 1/2." },
      { id: "c", text: "2,0 metros", isCorrect: false, distractorRationale: "Considerou o comprimento total do pêndulo como a altura elevada." },
      { id: "d", text: "0,5 metro", isCorrect: false, distractorRationale: "Dividiu a resposta correta por 2 sem motivo físico." },
      { id: "e", text: "0,27 metro", isCorrect: false, distractorRationale: "Erro de conta com o valor do cosseno." }
    ],
    detailedExplanation: {
      summary: "A altura elevada em relação ao ponto mais baixo é obtida subtraindo da haste total L a projeção vertical da haste inclinada: h = L - L · cos(θ) = L(1 - cos θ).",
      stepByStep: [
        "Comprimento da haste: L = 2,0 m.",
        "Projeção vertical da haste inclinada a 60°: y = L · cos(60°) = 2,0 · 0,50 = 1,0 metro.",
        "A altura de elevação h é a diferença entre a posição mais baixa (distância L do teto) e a posição inclinada (distância y do teto):",
        "h = L - y = 2,0 - 1,0 = 1,0 metro."
      ],
      coreConcept: "Projeção Geométrica do Pêndulo Simples: h = L(1 - cos θ)",
      trapWarning: "Essa relação trigonométrica h = L(1 - cos θ) cai tanto em Matemática quanto na prova de Ciências da Natureza para calcular a conservação da energia mecânica (E_pot = mgh)."
    },
    commonTraps: [
      "Calcular a projeção horizontal em vez da vertical",
      "Esquecer de subtrair a projeção vertical do comprimento total da haste"
    ],
    tags: ["pendulo", "conservacao-energia", "trigonometria-aplicada", "projecao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
