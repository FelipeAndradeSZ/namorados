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
  },
  {
    id: "MAT-TRIG-011",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Trigonometria",
    subtopic: "Lei dos Cossenos em Terrenos Triangulares",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um engenheiro agrimensor realiza o levantamento topográfico de um terreno delimitado por três marcos. As distâncias medidas entre o marco central e os dois outros pontos são de 50 metros e 80 metros. O teodolito posicionado no marco central aponta que o ângulo formado entre os alinhamentos desses dois lados é de 60°. (Dado: cos 60° = 0,50).",
      source: "ENEM Topografia e Agrimensura"
    },
    prompt: "Qual é o comprimento, em metros, do terceiro lado que fecha esse terreno triangular?",
    options: [
      { id: "a", text: "70 metros", isCorrect: true, distractorRationale: null },
      { id: "b", text: "94 metros", isCorrect: false, distractorRationale: "Somou o termo do cosseno em vez de subtrair: a² = b² + c² + 2bc·cos(60°)." },
      { id: "c", text: "89 metros", isCorrect: false, distractorRationale: "Aplicou o Teorema de Pitágoras ignorando que o triângulo não é retângulo." },
      { id: "d", text: "65 metros", isCorrect: false, distractorRationale: "Calculou a média aritmética dos dois lados conhecidos." },
      { id: "e", text: "30 metros", isCorrect: false, distractorRationale: "Subtraiu os dois lados conhecidos (80 - 50)." }
    ],
    detailedExplanation: {
      summary: "Aplica-se a Lei dos Cossenos: a² = b² + c² - 2·b·c·cos(θ) para encontrar o lado oposto ao ângulo conhecido em qualquer triângulo.",
      stepByStep: [
        "Identificação dos dados: b = 50 m, c = 80 m, θ = 60°, cos(60°) = 0,50.",
        "Fórmula da Lei dos Cossenos: a² = 50² + 80² - 2 · 50 · 80 · cos(60°).",
        "Cálculos: a² = 2.500 + 6.400 - (8.000 · 0,50) = 8.900 - 4.000 = 4.900.",
        "Extração da raiz quadrada: a = √4.900 = 70 metros."
      ],
      coreConcept: "Lei dos Cossenos: a² = b² + c² - 2bc·cos(A)",
      trapWarning: "Cuidado com o sinal: na Lei dos Cossenos, o termo com o produto dos lados é SUBTRAÍDO (- 2bc·cos θ)."
    },
    commonTraps: [
      "Aplicar Pitágoras a² = b² + c² esquecendo o termo -2bc·cos θ",
      "Errar o sinal do termo redutor somando em vez de subtrair"
    ],
    tags: ["lei-dos-cossenos", "triangulos", "geometria-plana", "agrimensura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-012",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Trigonometria",
    subtopic: "Lei dos Senos e Triangulação Geodésica",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois postos de observação meteorológica A e B estão situados ao longo de uma planície retilínea separados por uma distância de 60 km. Ambos registram a posição de um balão atmosférico C no mesmo instante. Os ângulos medidos na base são CÂB = 45° e C B̂ A = 75°. (Dados: sen 45° = √2/2; sen 60° = √3/2; sen 75° = (√6 + √2)/4).",
      source: "ENEM Geodésia e Triangulação"
    },
    prompt: "Pelo método da triangulação e aplicando a Lei dos Senos, a distância em linha reta do balão C até o posto B (medida do segmento BC) é igual a:",
    options: [
      { id: "a", text: "20√6 km", isCorrect: true, distractorRationale: null },
      { id: "b", text: "30√2 km", isCorrect: false, distractorRationale: "Esqueceu de calcular o terceiro ângulo do triângulo e dividiu por sen 45°." },
      { id: "c", text: "40√3 km", isCorrect: false, distractorRationale: "Inverteu os senos dos ângulos na proporção da Lei dos Senos." },
      { id: "d", text: "60√2 km", isCorrect: false, distractorRationale: "Multiplicou a base diretamente por sen 45° sem dividir pelo seno do ângulo oposto." },
      { id: "e", text: "15√6 km", isCorrect: false, distractorRationale: "Erro na simplificação algébrica do radical no denominador." }
    ],
    detailedExplanation: {
      summary: "Descobre-se o terceiro ângulo do triângulo (Ângulo C) pela soma dos ângulos internos e aplica-se a proporção da Lei dos Senos.",
      stepByStep: [
        "A soma dos ângulos internos de qualquer triângulo é 180°: Ângulo C = 180° - (45° + 75°) = 180° - 120° = 60°.",
        "O lado AB = 60 km é oposto ao ângulo C = 60°.",
        "O lado BC é oposto ao ângulo A = 45°.",
        "Pela Lei dos Senos: BC / sen(45°) = AB / sen(60°).",
        "BC = 60 · sen(45°) / sen(60°) = 60 · (√2/2) / (√3/2) = 60 · (√2 / √3).",
        "Racionalizando o denominador: BC = 60 · √6 / 3 = 20√6 km."
      ],
      coreConcept: "Lei dos Senos: a/sen(A) = b/sen(B) = c/sen(C)",
      trapWarning: "Antes de aplicar a Lei dos Senos, verifique sempre se você calculou o ângulo oposto ao lado que possui medida numérica conhecida!"
    },
    commonTraps: [
      "Usar 75° no denominador em vez do ângulo C de 60°",
      "Errar a racionalização de radicais de √2/√3"
    ],
    tags: ["lei-dos-senos", "triangulacao", "geometria", "radicais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-013",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Trigonometria",
    subtopic: "Modelagem Periódica de Roda-Gigante",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma roda-gigante em um parque urbano possui raio de 10 metros e tem seu centro de rotação fixado a 12 metros de altura do chão. Uma gôndola parte da posição mais baixa (ponto mais próximo do solo) no instante t = 0 segundos e efetua uma rotação completa uniforme no sentido anti-horário a cada 120 segundos. A altura h(t) da gôndola em relação ao solo é descrita pela função h(t) = 12 - 10 · cos( (π/60) · t ).",
      source: "ENEM Funções Trigonométricas"
    },
    prompt: "A que altura do solo, em metros, essa gôndola se encontrará exatamente aos 40 segundos após o início do movimento?",
    options: [
      { id: "a", text: "17 metros", isCorrect: true, distractorRationale: null },
      { id: "b", text: "7 metros", isCorrect: false, distractorRationale: "Esqueceu que cos(120°) é negativo (-0,5) e subtraiu 5 em vez de somar: 12 - 5 = 7." },
      { id: "c", text: "12 metros", isCorrect: false, distractorRationale: "Considerou que a gôndola estaria na altura média do centro de rotação." },
      { id: "d", text: "22 metros", isCorrect: false, distractorRationale: "Calculou a altura máxima possível da roda-gigante (12 + 10)." },
      { id: "e", text: "15 metros", isCorrect: false, distractorRationale: "Usou cos(60°) = +0,5 diretamente na subtração sem reduzir ao segundo quadrante." }
    ],
    detailedExplanation: {
      summary: "Substitui-se t = 40 na função periódica e aplica-se a redução ao segundo quadrante para o cosseno.",
      stepByStep: [
        "Substituição de t = 40 s: argumento = (π/60) · 40 = 40π/60 = 2π/3 radianos.",
        "Conversão para graus: 2π/3 rad = (2 · 180°)/3 = 120°.",
        "Cálculo do cosseno no 2º quadrante: cos(120°) = - cos(180° - 120°) = - cos(60°) = - 0,50.",
        "Cálculo da altura: h(40) = 12 - 10 · (- 0,50) = 12 + 5,0 = 17 metros."
      ],
      coreConcept: "Modelagem Harmônica Circular e Redução de Cosseno ao Segundo Quadrante",
      trapWarning: "Cuidado com a regra de sinais: o cosseno de um ângulo obtuso (entre 90° e 180°) é NEGATIVO! Menos com menos vira mais."
    },
    commonTraps: [
      "Achar que cosseno no segundo quadrante é positivo",
      "Errar a simplificação da fração 40/60"
    ],
    tags: ["funcoes-trigonometricas", "cosseno", "ciclo-trigonometrico", "segundo-quadrante"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-014",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Trigonometria",
    subtopic: "Rampa de Acessibilidade e Inclinação com Tangente",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A norma brasileira de acessibilidade NBR 9050 estabelece limites para a inclinação de rampas de pedestres e usuários de cadeiras de rodas. A inclinação percentual i de uma rampa reta de piso plano é dada pela tangente do ângulo de elevação θ multiplicada por 100%, ou seja, i = tg(θ) · 100%. Um projeto arquitetônico prevê a construção de uma rampa para vencer um desnível vertical de 1,60 metro com inclinação de 8% (tg θ = 0,08).",
      source: "ENEM Acessibilidade e Normas Técnicas"
    },
    prompt: "Qual deve ser o comprimento horizontal da projeção dessa rampa no solo, em metros?",
    options: [
      { id: "a", text: "20 metros", isCorrect: true, distractorRationale: null },
      { id: "b", text: "12,8 metros", isCorrect: false, distractorRationale: "Multiplicou a altura pela taxa: 1,60 · 8 = 12,8 m." },
      { id: "c", text: "16 metros", isCorrect: false, distractorRationale: "Dividiu por 0,10 em vez de 0,08." },
      { id: "d", text: "25 metros", isCorrect: false, distractorRationale: "Usou inclinação de 6,4% em vez de 8%." },
      { id: "e", text: "8 metros", isCorrect: false, distractorRationale: "Confundiu a taxa de 8% com a extensão métrica." }
    ],
    detailedExplanation: {
      summary: "A tangente do ângulo é a razão entre o desnível vertical (cateto oposto) e o comprimento horizontal (cateto adjacente).",
      stepByStep: [
        "Definição da tangente no triângulo retângulo da rampa: tg(θ) = Altura vertical (h) / Projeção horizontal (x).",
        "Substituindo os valores conhecidos: 0,08 = 1,60 / x.",
        "Isolando a variável x: x = 1,60 / 0,08 = 160 / 8 = 20 metros."
      ],
      coreConcept: "Definição de Tangente e Inclinação de Rampas: tg θ = h / x",
      trapWarning: "A inclinação é a razão entre a altura e a base horizontal, e não sobre a hipotenusa da rampa!"
    },
    commonTraps: [
      "Multiplicar a altura pela porcentagem em vez de dividir",
      "Errar a divisão com casas decimais (1,60 / 0,08)"
    ],
    tags: ["tangente", "acessibilidade", "inclinacao", "geometria-plana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-015",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Trigonometria",
    subtopic: "Painéis Solares e Lei de Lambert do Cosseno",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A potência elétrica P gerada por um painel fotovoltaico depende do ângulo de incidência dos raios solares sobre a superfície da placa. De acordo com a Lei de Lambert, a potência gerada varia proporcionalmente ao cosseno do ângulo θ formado entre os raios solares e a reta normal (perpendicular) ao painel: P(θ) = P_max · cos(θ). Em um teste sob irradiância controlada de laboratório, a potência máxima com incidência perpendicular (θ = 0°) é P_max = 400 W. (Dado: cos 60° = 0,50).",
      source: "ENEM Energia Solar Fotovoltaica"
    },
    prompt: "Se os raios solares incidirem sobre o painel formando um ângulo θ = 60° com a reta normal, a potência elétrica gerada será de:",
    options: [
      { id: "a", text: "200 W", isCorrect: true, distractorRationale: null },
      { id: "b", text: "346 W", isCorrect: false, distractorRationale: "Usou sen 60° = √3/2 ≈ 0,866 (400 · 0,866 = 346,4 W)." },
      { id: "c", text: "100 W", isCorrect: false, distractorRationale: "Dividiu a potência máxima por 4." },
      { id: "d", text: "400 W", isCorrect: false, distractorRationale: "Desconsiderou a inclinação dos raios luminosos." },
      { id: "e", text: "250 W", isCorrect: false, distractorRationale: "Erro na estimativa do cosseno de 60°." }
    ],
    detailedExplanation: {
      summary: "Aplica-se diretamente a fórmula da projeção do fluxo luminoso: P = P_max · cos(θ).",
      stepByStep: [
        "Identificação dos dados: P_max = 400 W, θ = 60°.",
        "Valor trigonométrico: cos(60°) = 0,50.",
        "Cálculo da potência gerada: P = 400 · 0,50 = 200 W."
      ],
      coreConcept: "Atenuação de Fluxo e Projeção Angular com Cosseno",
      trapWarning: "Atenção ao referencial do ângulo: se a questão desse o ângulo com o plano do painel (30°), o ângulo com a normal seria o complemento (60°)."
    },
    commonTraps: [
      "Usar seno no lugar de cosseno",
      "Confundir ângulo com a normal e ângulo com o plano da placa"
    ],
    tags: ["cosseno", "energia-solar", "fisica-matematica", "projecao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-016",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Trigonometria",
    subtopic: "Área Iluminada por Refletor Cônico",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma quadra esportiva, um holofote de iluminação está instalado no teto a uma altura vertical de 9 metros do piso plano. O facho de luz forma um cone circular reto cujo vértice é o próprio refletor e cujo ângulo central de abertura total é de 60° (o que significa que o semiângulo entre a linha vertical e a geratriz externa do facho é de 30°). (Dados: tg 30° = √3/3; utilize π = 3,14 e √3 = 1,73).",
      source: "ENEM Geometria e Iluminação"
    },
    prompt: "Qual é o raio R da mancha circular iluminada no piso da quadra pelo holofote?",
    options: [
      { id: "a", text: "3√3 metros (aproximadamente 5,19 m)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "9√3 metros (aproximadamente 15,57 m)", isCorrect: false, distractorRationale: "Multiplicou a altura por √3 em vez de multiplicar por √3/3." },
      { id: "c", text: "4,50 metros", isCorrect: false, distractorRationale: "Dividiu a altura por 2 sem usar a razão trigonométrica tangente." },
      { id: "d", text: "6,00 metros", isCorrect: false, distractorRationale: "Usou sen 30° = 1/2 na relação com a hipotenusa de forma incorreta." },
      { id: "e", text: "5,77 metros", isCorrect: false, distractorRationale: "Calculou 10 · tg 30° em vez de usar a altura de 9 metros." }
    ],
    detailedExplanation: {
      summary: "O semiângulo do cone com a vertical é de 30°. O raio no chão é o cateto oposto e a altura de 9 m é o cateto adjacente.",
      stepByStep: [
        "Abertura total = 60° ⟹ semiângulo com a vertical: θ = 60° / 2 = 30°.",
        "No triângulo retângulo formado pela vertical, o piso e o facho: tg(30°) = Raio (R) / Altura (h).",
        "Substituição dos valores: R = h · tg(30°) = 9 · (√3 / 3) = 3√3 metros.",
        "Em valor decimal: 3 · 1,73 = 5,19 metros."
      ],
      coreConcept: "Abertura Angular Cônica e Tangente no Triângulo Retângulo",
      trapWarning: "Sempre divida o ângulo de abertura total de um cone por 2 para obter o ângulo no triângulo retângulo com o eixo vertical de simetria!"
    },
    commonTraps: [
      "Usar o ângulo total de 60° no triângulo retângulo em vez da metade (30°)",
      "Errar a simplificação de 9√3 / 3"
    ],
    tags: ["tangente", "cone", "geometria-espacial", "iluminacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-017",
    area: "matematica",
    competence: 5,
    skill: 21,
    topic: "Trigonometria",
    subtopic: "Relação Fundamental e Biomecânica Muscular",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma análise biomecânica do movimento de flexão do antebraço de um atleta, os sensores registraram que o tendão exerce tração sob um ângulo agudo α no primeiro quadrante (0 < α < 90°). Sabendo que o seno desse ângulo de tração é sen(α) = 0,60, a equipe de preparação física precisa determinar o coeficiente de atrito estático equivalente, que é proporcional à tangente desse ângulo: tg(α).",
      source: "ENEM Biomecânica e Relações Trigonométricas"
    },
    prompt: "Com base nas relações trigonométricas fundamentais, o valor exato de tg(α) é igual a:",
    options: [
      { id: "a", text: "0,75", isCorrect: true, distractorRationale: null },
      { id: "b", text: "0,80", isCorrect: false, distractorRationale: "Esse é o valor do cosseno de α, não da tangente." },
      { id: "c", text: "0,60", isCorrect: false, distractorRationale: "Esse é o próprio seno de α." },
      { id: "d", text: "1,33", isCorrect: false, distractorRationale: "Inverteu a fração, calculando a cotangente (cos/sen = 0,80/0,60 = 4/3)." },
      { id: "e", text: "0,48", isCorrect: false, distractorRationale: "Multiplicou seno por cosseno (0,6 · 0,8) em vez de dividir." }
    ],
    detailedExplanation: {
      summary: "Calcula-se o cosseno pela Relação Fundamental da Trigonometria (sen² + cos² = 1) e em seguida a tangente (tg = sen / cos).",
      stepByStep: [
        "Relação Fundamental: sen²(α) + cos²(α) = 1.",
        "Substituindo sen(α) = 0,60: (0,60)² + cos²(α) = 1 ⟹ 0,36 + cos²(α) = 1 ⟹ cos²(α) = 0,64.",
        "Como α está no primeiro quadrante, o cosseno é positivo: cos(α) = √0,64 = 0,80.",
        "Definição da tangente: tg(α) = sen(α) / cos(α) = 0,60 / 0,80 = 6 / 8 = 3 / 4 = 0,75."
      ],
      coreConcept: "Relação Fundamental da Trigonometria: sen²(x) + cos²(x) = 1 e tg(x) = sen(x)/cos(x)",
      trapWarning: "Lembre-se do clássico triângulo pitagórico 3-4-5: quando o seno é 3/5 = 0,6, o cosseno é 4/5 = 0,8 e a tangente é 3/4 = 0,75!"
    },
    commonTraps: [
      "Confundir cosseno com tangente",
      "Calcular cotangente (cos/sen) em vez de tangente (sen/cos)"
    ],
    tags: ["relacao-fundamental", "seno-cosseno-tangente", "triangulo-pitagorico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-018",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Trigonometria",
    subtopic: "Comprimento de Arco de Circunferência e Radianos",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma pista circular de treinamento esportivo com raio constante R = 50 metros, um corredor parte da linha de largada e corre ao longo da borda externa até completar um deslocamento correspondente a um ângulo central de 2,4 radianos.",
      source: "ENEM Medidas de Arcos e Ângulos"
    },
    prompt: "A distância linear percorrida pelo atleta sobre o contorno da pista circular é de:",
    options: [
      { id: "a", text: "120 metros", isCorrect: true, distractorRationale: null },
      { id: "b", text: "20,8 metros", isCorrect: false, distractorRationale: "Dividiu o raio pelo ângulo: 50 / 2,4." },
      { id: "c", text: "157 metros", isCorrect: false, distractorRationale: "Calculou meia volta na pista considerando π = 3,14." },
      { id: "d", text: "314 metros", isCorrect: false, distractorRationale: "Calculou o perímetro completo da pista circular (2πR)." },
      { id: "e", text: "100 metros", isCorrect: false, distractorRationale: "Multiplicou o raio por 2 ignorando os decimais do radiano." }
    ],
    detailedExplanation: {
      summary: "A definição de radiano estabelece que o comprimento do arco s é diretamente o produto do raio R pelo ângulo central em radianos: s = R · θ.",
      stepByStep: [
        "Definição da medida em radianos: θ = s / R, onde s é o comprimento do arco e R é o raio.",
        "Isolando o comprimento linear s: s = R · θ.",
        "Cálculo: s = 50 metros · 2,4 rad = 120 metros."
      ],
      coreConcept: "Comprimento do Arco de Circunferência: s = R · θ (θ em radianos)",
      trapWarning: "Essa fórmula direta s = R · θ só é válida quando o ângulo está expresso em RADIANOS! Se estivesse em graus, precisaria converter com π/180°."
    },
    commonTraps: [
      "Tentar converter desnecessariamente o radiano para graus e perder tempo",
      "Dividir em vez de multiplicar raio por ângulo"
    ],
    tags: ["radiano", "arco-de-circunferencia", "geometria-plana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-019",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Trigonometria",
    subtopic: "Período e Frequência em Sinais Cardíacos",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O monitor cardíaco de uma Unidade de Terapia Intensiva registra as oscilações rítmicas de um paciente através de uma função senoidal de voltagem dada por V(t) = V_0 · sen(B · t), onde t é o tempo em segundos e B é a frequência angular em rad/s. Durante o exame em repouso, o paciente apresenta uma frequência cardíaca estável de 75 batimentos por minuto (bpm). Sabe-se que o período T (em segundos) de cada batimento é o tempo necessário para um ciclo completo, e que B = 2π / T.",
      source: "ENEM Sinais Fisiológicos e Funções Periódicas"
    },
    prompt: "Com base nesses parâmetros fisiológicos, o período T de cada ciclo cardíaco e o valor de B valem, respectivamente:",
    options: [
      { id: "a", text: "T = 0,80 s e B = 2,5π rad/s", isCorrect: true, distractorRationale: null },
      { id: "b", text: "T = 1,25 s e B = 1,6π rad/s", isCorrect: false, distractorRationale: "Inverteu a razão calculando 75 / 60 em vez de 60 / 75." },
      { id: "c", text: "T = 0,75 s e B = 2,67π rad/s", isCorrect: false, distractorRationale: "Confundiu 75 batimentos com 0,75 segundo." },
      { id: "d", text: "T = 0,80 s e B = 5π rad/s", isCorrect: false, distractorRationale: "Esqueceu de dividir por 2 na constante angular." },
      { id: "e", text: "T = 1,00 s e B = 2π rad/s", isCorrect: false, distractorRationale: "Considerou batimento padrão de 60 bpm." }
    ],
    detailedExplanation: {
      summary: "Calcula-se o período convertendo a taxa por minuto para o tempo de 1 ciclo em segundos, e em seguida aplica-se a relação fundamental de período para funções trigonométricas B = 2π / T.",
      stepByStep: [
        "1 minuto possui 60 segundos.",
        "Se ocorrem 75 batimentos em 60 segundos, o período T de cada batimento é: T = 60 / 75 = 4 / 5 = 0,80 segundo.",
        "A relação entre a frequência angular B e o período T de sen(Bt) é: T = 2π / B ⟹ B = 2π / T.",
        "Substituição de T = 0,80: B = 2π / (4/5) = (2 · 5)π / 4 = 10π / 4 = 2,5π rad/s."
      ],
      coreConcept: "Período de Funções Trigonométricas: T = 2π / |B|",
      trapWarning: "Lembre-se de que o coeficiente multiplicador B dentro da função seno 'acelera' a oscilação, reduzindo o período proporcionalmente: T = 2π / B."
    },
    commonTraps: [
      "Dividir 75 por 60 para achar período em vez de frequência em hertz",
      "Esquecer que período é inverso da frequência (T = 1/f)"
    ],
    tags: ["funcoes-periodicas", "periodo-trigonometrico", "seno", "frequencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-020",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Trigonometria",
    subtopic: "Estruturas de Engenharia e Treliças Triangulares",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma treliça metálica em formato de tesoura triangular simétrica é projetada para sustentar a cobertura de um galpão industrial. As duas vigas inclinadas superiores que convergem na cumeeira possuem o mesmo comprimento L = 6 metros e formam entre si um ângulo de 120°. Para manter a rigidez mecânica e evitar a abertura da estrutura, um tirante de aço horizontal deve unir diretamente as extremidades inferiores das duas vigas. (Dados: cos 120° = -0,50; use √3 ≈ 1,73).",
      source: "ENEM Estruturas e Construção Civil"
    },
    prompt: "Qual deve ser o comprimento total do tirante horizontal de aço na base da treliça?",
    options: [
      { id: "a", text: "6√3 metros (aproximadamente 10,38 m)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "6 metros", isCorrect: false, distractorRationale: "Supôs que o triângulo seria equilátero, mas o ângulo do vértice é 120°, não 60°." },
      { id: "c", text: "12 metros", isCorrect: false, distractorRationale: "Somou os comprimentos das duas vigas (6 + 6), como se estivessem alinhadas a 180°." },
      { id: "d", text: "6√2 metros (aproximadamente 8,48 m)", isCorrect: false, distractorRationale: "Aplicou o Teorema de Pitágoras considerando ângulo reto de 90°." },
      { id: "e", text: "9 metros", isCorrect: false, distractorRationale: "Calculou a média aritmética entre a soma e o lado." }
    ],
    detailedExplanation: {
      summary: "Pela Lei dos Cossenos, o lado oposto ao ângulo de 120° em um triângulo com dois lados iguais a 6 metros é x = 6√3.",
      stepByStep: [
        "Identificação dos lados: b = 6 m, c = 6 m, ângulo θ = 120°, cos(120°) = -0,50.",
        "Lei dos Cossenos: x² = 6² + 6² - 2 · 6 · 6 · cos(120°).",
        "Substituição: x² = 36 + 36 - 72 · (-0,50) = 72 + 36 = 108.",
        "Fatoração de 108: 108 = 36 · 3 ⟹ x = √108 = √(36 · 3) = 6√3 metros.",
        "Em valor aproximado: 6 · 1,73 = 10,38 metros."
      ],
      coreConcept: "Lei dos Cossenos em Triângulos Obtusângulos e Relação do Triângulo Isósceles com Ângulo de 120°",
      trapWarning: "No triângulo isósceles com ângulo de 120°, a base sempre mede exatamente L√3! Essa é uma propriedade notável que economiza tempo no ENEM."
    },
    commonTraps: [
      "Errar o sinal do cosseno de 120° (lembre-se: cos 120° = - 1/2)",
      "Supor que a base é igual aos lados laterais"
    ],
    tags: ["lei-dos-cossenos", "trelica", "triangulo-obtusangulo", "construcao-civil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-021",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Trigonometria",
    subtopic: "Lei dos Senos e Triangulação Topográfica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha de demarcação geodésica para construção de uma ponte sobre um rio de grande largura, dois marcos topográficos A e B foram cravados na margem sul, com uma linha de base reta medindo AB = 100 metros. Na margem oposta do rio, um terceiro marco C foi avistado a partir dos dois pontos, registrando-se os ângulos horizontais medidos por teodolito: o ângulo no vértice A é de 45° e o ângulo no vértice B é de 105°. (Dados: sen 30° = 0,50; sen 45° = √2/2 ≈ 0,71; sen 105° = sen 75° ≈ 0,97).",
      source: "Topografia e Métodos Geodésicos de Triangulação"
    },
    prompt: "Com base na Lei dos Senos, a distância em linha reta entre o marco A e o marco oposto C (lado AC) é igual a:",
    options: [
      { id: "a", text: "194 metros", isCorrect: true, distractorRationale: null },
      { id: "b", text: "100 metros", isCorrect: false, distractorRationale: "Supôs que o triângulo seria isósceles com AC igual à base AB." },
      { id: "c", text: "141 metros", isCorrect: false, distractorRationale: "Multiplicou 100 por √2 considerando triângulo retângulo isósceles." },
      { id: "d", text: "71 metros", isCorrect: false, distractorRationale: "Multiplicou 100 por sen 45° em vez de aplicar a Lei dos Senos com o ângulo C." },
      { id: "e", text: "200 metros", isCorrect: false, distractorRationale: "Arredondou sem rigor dividindo 100 por sen 30°." }
    ],
    detailedExplanation: {
      summary: "A soma dos ângulos internos do triângulo é 180°: Ângulo C = 180° - (45° + 105°) = 180° - 150° = 30°. Pela Lei dos Senos: AC / sen B = AB / sen C -> AC / sen 105° = 100 / sen 30°. Como sen 30° = 0,50 e sen 105° ≈ 0,97: AC = 100 × (0,97 / 0,50) = 100 × 1,94 = 194 metros.",
      stepByStep: [
        "1. Calcular o terceiro ângulo do triângulo (vértice C):",
        "   C = 180° - (A + B) = 180° - (45° + 105°) = 180° - 150° = 30°.",
        "2. Identificar os pares opostos da Lei dos Senos:",
        "   - O lado AB = 100 m opõe-se ao ângulo C = 30°.",
        "   - O lado procurado AC opõe-se ao ângulo B = 105°.",
        "3. Montar a proporção da Lei dos Senos: AC / sen 105° = AB / sen 30°.",
        "4. Isolar AC: AC = AB × (sen 105° / sen 30°).",
        "5. Substituir os valores: AC = 100 × (0,97 / 0,50) = 100 × 1,94 = 194 metros."
      ],
      coreConcept: "Lei dos Senos: a / sen A = b / sen B = c / sen C e Cálculo do Terceiro Ângulo Interno",
      trapWarning: "Primeiro passo indispensável: SEMPRE determine o ângulo que falta pela soma dos ângulos internos (180°)! O lado da base AB opõe-se ao ângulo C, não a A ou B."
    },
    commonTraps: [
      "Esquecer de calcular o terceiro ângulo C = 30°",
      "Confundir a Lei dos Senos com a Lei dos Cossenos"
    ],
    tags: ["lei-dos-senos", "triangulacao", "topografia", "geometria-plana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-022",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Trigonometria",
    subtopic: "Modelagem de Marés Oceânicas e Funções Senoidais",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um terminal portuário graneleiro, o calado seguro para atracação de navios de grande porte depende do nível da maré. Ao longo de 24 horas, a altura h (em metros) da lâmina d'água no canal de acesso é modelada pela função periódica h(t) = 4 + 2 · cos(pi · t / 6), onde t representa o tempo decorrido em horas a partir da meia-noite (0 <= t <= 24).",
      source: "Modelagem Matemática de Fenômenos Periódicos Costeiros"
    },
    prompt: "Com base nessa modelagem trigonométrica, a altura máxima atingida pela maré (maré alta) e os horários em que a maré atinge sua altura mínima de 2 metros são, respectivamente:",
    options: [
      { id: "a", text: "6 metros; às 6h da manhã e às 18h da tarde", isCorrect: true, distractorRationale: null },
      { id: "b", text: "4 metros; às 12h do meio-dia e às 24h da meia-noite", isCorrect: false, distractorRationale: "Considerou o eixo médio (4 m) como altura máxima e errou os instantes de mínimo." },
      { id: "c", text: "8 metros; às 3h e às 15h", isCorrect: false, distractorRationale: "Somou 4 com o dobro da amplitude em vez da amplitude simples." },
      { id: "d", text: "6 metros; apenas às 12h do meio-dia", isCorrect: false, distractorRationale: "Às 12h a maré atinge novo máximo (cos(2pi) = 1 -> h = 6 m), e não o mínimo." },
      { id: "e", text: "5 metros; às 6h e às 12h", isCorrect: false, distractorRationale: "Errou os limites superior e inferior da imagem da função cosseno." }
    ],
    detailedExplanation: {
      summary: "A imagem da função cosseno varia no intervalo [-1, +1]. A altura máxima ocorre quando cos = +1: h_max = 4 + 2(1) = 6 metros. A altura mínima ocorre quando cos = -1: h_min = 4 + 2(-1) = 2 metros. Para cos(pi·t/6) = -1, o arco deve valer pi, 3pi, etc. Assim: pi·t/6 = pi -> t = 6h; pi·t/6 = 3pi -> t = 18h.",
      stepByStep: [
        "1. Análise da imagem de h(t) = 4 + 2 · cos(pi·t / 6):",
        "   - O termo cos(x) oscila estritamente entre -1 e +1.",
        "   - Altura máxima: h_max = 4 + 2(+1) = 6 metros.",
        "   - Altura mínima: h_min = 4 + 2(-1) = 2 metros.",
        "2. Determinação dos horários de maré mínima (h = 2 m):",
        "   4 + 2 · cos(pi·t / 6) = 2 -> 2 · cos(pi·t / 6) = -2 -> cos(pi·t / 6) = -1.",
        "3. A função cosseno vale -1 nos ângulos ímpares de pi:",
        "   - Primeiro instante: pi · t / 6 = pi -> t = 6 horas (06h da manhã).",
        "   - Segundo instante: pi · t / 6 = 3pi -> t = 18 horas (18h da tarde).",
        "4. Conclusão: a maré oscila com período de T = 2pi / (pi/6) = 12 horas, atingindo picos de 6 m às 0h, 12h e 24h, e mínimos de 2 m às 6h e 18h."
      ],
      coreConcept: "Funções Trigonométricas Senoidais: Imagem [D - |A|, D + |A|] e Equação Trigonométrica Fundamental",
      trapWarning: "Lembre-se da forma geral f(t) = D + A · cos(B t - C): o valor médio é D = 4, a amplitude é A = 2, o máximo é D + A = 6 e o mínimo é D - A = 2."
    },
    commonTraps: [
      "Achar que às 12h a maré é mínima (às 12h cos(2pi) = 1, sendo maré máxima de 6 m)",
      "Esquecer que o cosseno vale -1 em pi radianos"
    ],
    tags: ["funcoes-trigonometricas", "cosseno", "fenomenos-periodicos", "ondas-de-mare", "modelagem-matematica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-023",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Trigonometria",
    subtopic: "Relação Fundamental e Sinais nos Quadrantes Trigonométricos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma aplicação de controle angular do braço de uma máquina de solda robótica, o ângulo de operação alfa está situado no segundo quadrante do ciclo trigonométrico (pi/2 < alfa < pi). Um sensor óptico de alta precisão registrou que o seno desse ângulo vale sen(alfa) = 3/5.",
      source: "Robótica Industrial e Geometria Analítica Circular"
    },
    prompt: "Com base na Relação Fundamental da Trigonometria e nos sinais das razões trigonométricas no segundo quadrante, o valor exato da tangente de alfa (tg alfa) é:",
    options: [
      { id: "a", text: "-3/4", isCorrect: true, distractorRationale: null },
      { id: "b", text: "+3/4", isCorrect: false, distractorRationale: "Esqueceu que no 2º quadrante o cosseno e a tangente são estritamente negativos (seno positivo dividido por cosseno negativo gera tangente negativa)." },
      { id: "c", text: "-4/3", isCorrect: false, distractorRationale: "Inverteu a razão calculando a cotangente (cos / sen) em vez da tangente (sen / cos)." },
      { id: "d", text: "+4/5", isCorrect: false, distractorRationale: "Confundiu a tangente com o cosseno e errou o sinal." },
      { id: "e", text: "-5/3", isCorrect: false, distractorRationale: "Calculou o inverso do seno com sinal trocado." }
    ],
    detailedExplanation: {
      summary: "Pela Relação Fundamental: sen²(alfa) + cos²(alfa) = 1. Com sen(alfa) = 3/5: (3/5)² + cos²(alfa) = 1 -> cos²(alfa) = 1 - 9/25 = 16/25. Como alfa pertence ao 2º quadrante, o cosseno é obrigatoriamente negativo: cos(alfa) = -4/5. Assim, tg(alfa) = sen(alfa) / cos(alfa) = (3/5) / (-4/5) = -3/4.",
      stepByStep: [
        "1. Relação Fundamental da Trigonometria: sen²(alfa) + cos²(alfa) = 1.",
        "2. Substituição do seno: (3/5)² + cos²(alfa) = 1 -> 9/25 + cos²(alfa) = 1.",
        "3. Isolando cos²(alfa): cos²(alfa) = 25/25 - 9/25 = 16/25.",
        "4. Extração da raiz quadrada com análise de quadrante:",
        "   - O enunciado informa: pi/2 < alfa < pi (SEGUNDO QUADRANTE).",
        "   - No 2º quadrante: abscissa (cosseno) é NEGATIVA e ordenada (seno) é positiva.",
        "   - Logo: cos(alfa) = -√(16/25) = -4/5.",
        "5. Cálculo da tangente: tg(alfa) = sen(alfa) / cos(alfa) = (3/5) / (-4/5) = -3/4 = -0,75."
      ],
      coreConcept: "Relação Fundamental da Trigonometria e Análise de Sinais dos Quadrantes (Ciclo Trigonométrico)",
      trapWarning: "Regra mnemônica de sinais dos quadrantes: no 2º quadrante, APENAS O SENO é positivo! O cosseno e a tangente são sempre negativos!"
    },
    commonTraps: [
      "Esquecer o sinal negativo do cosseno no segundo quadrante",
      "Inverter seno e cosseno no cálculo da tangente"
    ],
    tags: ["relacao-fundamental", "ciclo-trigonometrico", "segundo-quadrante", "tangente", "cosseno"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-024",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Trigonometria",
    subtopic: "Identidade do Arco Duplo e Alcance Balístico",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na física da balística no vácuo, o alcance horizontal A de um projétil disparado com velocidade inicial v0 sob um ângulo de elevação teta é modelado por A = (v0² / g) · sen(2·teta). Ao utilizar um canhão pneumático de testes calibrado sob inclinação teta1 = 15°, obteve-se um alcance experimental de A1 = 100 metros. (Dados: sen 30° = 0,50; sen 90° = 1,00).",
      source: "Mecânica dos Fluidos e Balística Teórica"
    },
    prompt: "Mantendo-se rigorosamente a mesma velocidade inicial v0 e ajustando a inclinação para teta2 = 45° (ângulo que proporciona o alcance máximo teórico), o novo alcance horizontal obtido será de:",
    options: [
      { id: "a", text: "200 metros", isCorrect: true, distractorRationale: null },
      { id: "b", text: "300 metros", isCorrect: false, distractorRationale: "Multiplicou por 3 achando que o alcance é proporcional ao ângulo de tiro (45° / 15° = 3)." },
      { id: "c", text: "150 metros", isCorrect: false, distractorRationale: "Estimou uma proporção linear arbitrária de 1,5x." },
      { id: "d", text: "141 metros", isCorrect: false, distractorRationale: "Multiplicou por √2 considerando razões de 45° isoladas." },
      { id: "e", text: "100 metros", isCorrect: false, distractorRationale: "Acreditou que o alcance seria idêntico para quaisquer ângulos agudos." }
    ],
    detailedExplanation: {
      summary: "Para teta1 = 15°: sen(2 × 15°) = sen(30°) = 0,50. Assim: A1 = (v0²/g) × 0,50 = 100 -> (v0²/g) = 100 / 0,50 = 200 metros. Para teta2 = 45°: sen(2 × 45°) = sen(90°) = 1,00. Logo: A2 = (v0²/g) × 1,00 = 200 × 1,00 = 200 metros.",
      stepByStep: [
        "1. Escrever a fórmula de alcance: A = K · sen(2·teta), onde K = v0² / g é constante.",
        "2. Cenário 1 (teta = 15°):",
        "   - Argumento da função seno: 2 · teta = 2 × 15° = 30°.",
        "   - sen(30°) = 0,50.",
        "   - Equação: 100 = K × 0,50 -> K = 100 / 0,50 = 200 metros.",
        "3. Cenário 2 (teta = 45°):",
        "   - Argumento da função seno: 2 · teta = 2 × 45° = 90°.",
        "   - sen(90°) = 1,00 (valor máximo da função seno).",
        "   - Novo alcance: A2 = K × sen(90°) = 200 × 1,00 = 200 metros.",
        "4. Conclusão: ao mudar a elevação de 15° para 45°, o fator trigonométrico dobra (de 0,50 para 1,00), duplicando o alcance do projétil de 100 m para 200 m."
      ],
      coreConcept: "Identidade do Arco Duplo sen(2·teta) e Alcance Máximo em teta = 45°",
      trapWarning: "Cuidado: o alcance NÃO é proporcional ao ângulo teta! O ângulo está dentro da função trigonométrica sen(2·teta). Triplicar o ângulo de 15° para 45° NÃO triplica o alcance!"
    },
    commonTraps: [
      "Tratar o alcance como diretamente proporcional ao ângulo (marcando 300 m)",
      "Esquecer de multiplicar o ângulo por 2 antes de calcular o seno"
    ],
    tags: ["arco-duplo", "balistica", "seno", "cinematica", "trigonometria-aplicada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "MAT-TRIG-025",
    area: "matematica",
    competence: 5,
    skill: 20,
    topic: "Trigonometria",
    subtopic: "Redução ao Primeiro Quadrante e Simetrias no Ciclo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema de rastreamento de painéis solares fotovoltaicos com rotação biaxial, o posicionamento em relação à radiação solar é calibrado através de coordenadas no ciclo trigonométrico. Em um dado instante de calibração, o sistema computacional precisa calcular o valor exato da expressão numérica trigonométrica E = cos(150°) + sen(210°) - tg(315°).",
      source: "ENEM / Simetrias no Ciclo Trigonométrico e Redução ao 1º Quadrante"
    },
    prompt: "Aplicando as regras de redução ao primeiro quadrante e a determinação dos sinais algébricos, o valor numérico da expressão E é igual a:",
    options: [
      { id: "a", text: "1/2 - √3/2", isCorrect: true, distractorRationale: null },
      { id: "b", text: "-1/2 - √3/2", isCorrect: false, distractorRationale: "Errou o sinal da tangente de 315° ao esquecer o sinal de menos na frente da expressão (- tg(315°) = - (-1) = +1)." },
      { id: "c", text: "1/2 + √3/2", isCorrect: false, distractorRationale: "Tratou cos(150°) como positivo (+√3/2) no segundo quadrante." },
      { id: "d", text: "3/2 - √3/2", isCorrect: false, distractorRationale: "Tratou sen(210°) como positivo (+1/2) no terceiro quadrante." },
      { id: "e", text: "0", isCorrect: false, distractorRationale: "Supôs cancelamento simétrico nulo entre os termos." }
    ],
    detailedExplanation: {
      summary: "Redução ao 1º quadrante: cos(150°) = cos(180° - 30°) = -cos(30°) = -√3/2. sen(210°) = sen(180° + 30°) = -sen(30°) = -1/2. tg(315°) = tg(360° - 45°) = -tg(45°) = -1. Substituindo: E = (-√3/2) + (-1/2) - (-1) = -√3/2 - 1/2 + 1 = 1/2 - √3/2.",
      stepByStep: [
        "1. Redução de cos(150°) (2º Quadrante):",
        "   - Arco correspondente no 1º Q: 180° - 150° = 30°.",
        "   - No 2º Q, cosseno é negativo: cos(150°) = -cos(30°) = -√3/2.",
        "2. Redução de sen(210°) (3º Quadrante):",
        "   - Arco correspondente no 1º Q: 210° - 180° = 30°.",
        "   - No 3º Q, seno é negativo: sen(210°) = -sen(30°) = -1/2.",
        "3. Redução de tg(315°) (4º Quadrante):",
        "   - Arco correspondente no 1º Q: 360° - 315° = 45°.",
        "   - No 4º Q, tangente é negativa: tg(315°) = -tg(45°) = -1.",
        "4. Montagem da expressão E = cos(150°) + sen(210°) - tg(315°):",
        "   E = (-√3/2) + (-1/2) - (-1).",
        "5. Simplificação algébrica: E = -√3/2 - 1/2 + 1 = (1 - 1/2) - √3/2 = 1/2 - √3/2."
      ],
      coreConcept: "Redução ao Primeiro Quadrante: Simetrias Circulares e Sinais Algébricos de cos, sen e tg",
      trapWarning: "Atenção máxima à regra de sinais: o sinal negativo ANTES de tg(315°) com o sinal negativo DA PRÓPRIA tangente no 4º quadrante (-1) vira positivo: - (-1) = +1!"
    },
    commonTraps: [
      "Errar o jogo de sinais em - tg(315°) = -(-1) = +1",
      "Esquecer que o seno é negativo no terceiro quadrante (sen 210° = -1/2)"
    ],
    tags: ["reducao-ao-primeiro-quadrante", "ciclo-trigonometrico", "simetria", "arcos-notaveis", "algebrismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
