export const QUESTIONS_ONDULATORIA = [
  {
    id: "NAT-OND-001",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Ondulatória",
    subtopic: "Equação Fundamental da Ondulatória",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A tecnologia 5G utiliza ondas eletromagnéticas de frequência mais alta do que as gerações anteriores (cerca de 3,5 GHz = 3,5 · 10⁹ Hz) para transmitir dados com maior velocidade. No vácuo ou no ar, a velocidade de propagação dessas ondas é igual à velocidade da luz: c = 3,0 · 10⁸ m/s.",
      source: "ENEM Contextualizado"
    },
    prompt: "Qual é a ordem de grandeza do comprimento de onda (λ) aproximado dessas ondas eletromagnéticas de 5G ao se propagarem no ar?",
    options: [
      { id: "a", text: "8,6 cm (ordem de 10⁻² m)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "86 metros (ordem de 10¹ m)", isCorrect: false, distractorRationale: "Errou na potência de dez ao dividir c por f." },
      { id: "c", text: "1,17 · 10¹⁷ m", isCorrect: false, distractorRationale: "Multiplicou velocidade pela frequência em vez de dividir." },
      { id: "d", text: "0,086 mm (ordem de 10⁻⁵ m)", isCorrect: false, distractorRationale: "Confundiu centímetros com milímetros." },
      { id: "e", text: "3,5 · 10⁸ m", isCorrect: false, distractorRationale: "Repetiu o valor da frequência sem efetuar o cálculo." }
    ],
    detailedExplanation: {
      summary: "A relação fundamental das ondas é v = λ · f, logo λ = v / f.",
      stepByStep: [
        "Identifique os dados: v = 3,0 · 10⁸ m/s e f = 3,5 · 10⁹ Hz.",
        "Aplique a equação fundamental: λ = v / f = (3,0 · 10⁸) / (3,5 · 10⁹).",
        "Calcule o valor numérico: 3,0 / 3,5 ≈ 0,857.",
        "Subtraia os expoentes: 10⁸ / 10⁹ = 10⁻¹ m.",
        "Obtém-se λ ≈ 0,857 · 10⁻¹ m = 0,0857 m = 8,6 cm (10⁻² m)."
      ],
      coreConcept: "Equação Fundamental da Ondulatória (v = λ · f)",
      trapWarning: "Cuidado com o prefixo 'Giga' (G = 10⁹) e a conversão de metros para centímetros."
    },
    commonTraps: ["esquecer de converter GHz para Hz", "multiplicar v por f"],
    tags: ["ondulatoria", "5g", "comprimento de onda"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-002",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Fenômenos Ondulatórios: Difração",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao caminhar por um corredor de um colégio, uma pessoa consegue ouvir com clareza a voz de outra pessoa que conversa dentro de uma sala contígua cuja porta está semiaberta, mesmo sem conseguir enxergá-la diretamente.",
      source: "ENEM Padrão"
    },
    prompt: "O fenômeno físico que explica o fato de a onda sonora conseguir contornar a abertura da porta, enquanto a luz visível não faz o mesmo com facilidade, denomina-se:",
    options: [
      { id: "a", text: "Refração, pois o som muda de velocidade ao passar pela porta.", isCorrect: false, distractorRationale: "O som continua se propagando no mesmo meio (ar), logo a velocidade não se altera." },
      { id: "b", text: "Difração, que é mais acentuada no som porque seu comprimento de onda tem dimensões comparáveis à abertura da porta.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Polarização, pois as ondas sonoras são transversais e atravessam fendas.", isCorrect: false, distractorRationale: "O som no ar é onda longitudinal e NÃO sofre polarização." },
      { id: "d", text: "Ressonância, decorrente da vibração idêntica da madeira da porta.", isCorrect: false, distractorRationale: "Ressonância exige frequências naturais idênticas, não explica contornar obstáculos." },
      { id: "e", text: "Reflexão total, que aprisiona o som dentro da sala.", isCorrect: false, distractorRationale: "Se o som estivesse aprisionado por reflexão total, a pessoa fora não ouviria." }
    ],
    detailedExplanation: {
      summary: "A difração é a capacidade de uma onda contornar obstáculos ou fendas quando seu comprimento de onda (λ) tem dimensão similar ao obstáculo.",
      stepByStep: [
        "A difração ocorre com intensidade perceptível quando λ ≈ d (largura da fenda).",
        "O som audível tem comprimento de onda entre alguns centímetros e alguns metros (da mesma ordem que uma porta: ~80 cm).",
        "A luz visível tem comprimentos de onda minúsculos (da ordem de 400 a 700 nanômetros = 10⁻⁷ m), imperceptíveis em portas macroscópicas."
      ],
      coreConcept: "Difração e a Condição de Ocorrência (λ ≈ tamanho da abertura)",
      trapWarning: "Lembre-se: Som no ar é onda LONGITUDINAL, portanto NUNCA se polariza (polarização é exclusiva de ondas transversais)."
    },
    commonTraps: ["confundir difração com refração", "dizer que som sofre polarização"],
    tags: ["difracao", "acustica", "som"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-003",
    area: "natureza",
    competence: 5,
    skill: 19,
    topic: "Ondulatória",
    subtopic: "Efeito Doppler",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Uma ambulância trafega em alta velocidade por uma avenida retilínea com sua sirene acionada emitindo um som de frequência constante f0. Um pedestre parado na calçada observa a aproximação e, logo em seguida, o afastamento da ambulância.",
      source: "ENEM Clássico"
    },
    prompt: "Em relação ao som percebido pelo pedestre durante esse trajeto, o que ocorre com a frequência e a altura sonora?",
    options: [
      { id: "a", text: "Na aproximação, percebe frequência maior (som mais agudo); no afastamento, frequência menor (som mais grave).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Na aproximação, percebe frequência menor (som mais grave); no afastamento, frequência maior (som mais agudo).", isCorrect: false, distractorRationale: "Inverteu a relação do Efeito Doppler." },
      { id: "c", text: "O pedestre percebe som de volume (intensidade) mais agudo e frequência constante.", isCorrect: false, distractorRationale: "Confundiu intensidade/volume (amplitude) com altura (frequência)." },
      { id: "d", text: "A velocidade do som no ar emitida pela sirene torna-se maior durante a aproximação.", isCorrect: false, distractorRationale: "A velocidade da onda depende exclusivamente do meio de propagação (ar), não da fonte." },
      { id: "e", text: "A frequência percebida não varia, apenas a intensidade sonora se torna mais baixa.", isCorrect: false, distractorRationale: "O Efeito Doppler altera a frequência aparente recebida pelo observador." }
    ],
    detailedExplanation: {
      summary: "O Efeito Doppler é a alteração aparente da frequência de uma onda causada pelo movimento relativo entre a fonte emissora e o observador.",
      stepByStep: [
        "Aproximação: as frentes de onda se comprimem à frente do veículo → menor comprimento aparente → MAIOR frequência percebida (som mais AGUDO).",
        "Afastamento: as frentes de onda se distanciam atrás do veículo → maior comprimento aparente → MENOR frequência percebida (som mais GRAVE).",
        "Em acústica, 'Altura' refere-se à frequência (alto = agudo, baixo = grave)."
      ],
      coreConcept: "Efeito Doppler Acústico e Vocabulário Musical/Físico (Altura = Frequência)",
      trapWarning: "No ENEM, som ALTO não significa som forte/barulhento; significa som AGUDO (alta frequência)."
    },
    commonTraps: ["confundir altura do som com volume", "achar que a velocidade do som muda com a velocidade do carro"],
    tags: ["efeito doppler", "acustica", "altura do som"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-004",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Qualidades Fisiológicas do Som: Timbre",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Dois instrumentos musicais distintos — um violino e um piano — executam a mesma nota musical Lá (frequência fundamental de 440 Hz) com a mesma intensidade sonora.",
      source: "ENEM Fisiologia do Som"
    },
    prompt: "Mesmo com mesma frequência e mesma intensidade, o ouvido humano consegue distinguir perfeitamente qual instrumento está tocando devido à qualidade fisiológica chamada:",
    options: [
      { id: "a", text: "Timbre, determinado pela composição de harmônicos e formato da forma de onda.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Altura, determinada pela amplitude das vibrações mecânicas.", isCorrect: false, distractorRationale: "Altura depende da frequência, e ambos estão na mesma nota (440 Hz)." },
      { id: "c", text: "Intensidade, determinada pelo número de decibéis da onda sonora.", isCorrect: false, distractorRationale: "O enunciado afirma expressamente que possuem a mesma intensidade." },
      { id: "d", text: "Velocidade, pois a onda do violino propaga-se mais rápido no ar.", isCorrect: false, distractorRationale: "Ambas as ondas propagam-se no ar com a mesma velocidade." },
      { id: "e", text: "Reverberação, característica da caixa acústica do piano.", isCorrect: false, distractorRationale: "Reverberação é um fenômeno ambiental da sala, não a propriedade do instrumento." }
    ],
    detailedExplanation: {
      summary: "O timbre é a qualidade fisiológica que nos permite distinguir sons de mesma frequência e mesma intensidade emitidos por fontes sonoras diferentes.",
      stepByStep: [
        "Frequência fundamental define a NOTA (ambos tocam 440 Hz).",
        "Amplitude define a INTENSIDADE / VOLUME (ambos tocam na mesma intensidade).",
        "O formato da onda resultante da sobreposição de harmônicos define o TIMBRE exclusivo de cada instrumento."
      ],
      coreConcept: "As 3 Qualidades Fisiológicas do Som: Altura (Frequência), Intensidade (Amplitude), Timbre (Harmônicos)",
      trapWarning: "Memorize a tríade: Altura = Agudo/Grave; Intensidade = Forte/Fraco; Timbre = Identidade da Fonte."
    },
    commonTraps: ["confundir timbre com altura"],
    tags: ["qualidades fisiologicas", "timbre", "harmonicos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-005",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Ressonância e Transferência de Energia",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Um cantor lírico consegue quebrar uma taça de cristal sustentando com a voz uma nota musical específica em volume constante por alguns segundos. Da mesma forma, soldados marchando sobre uma ponte militar recebem ordens para quebrar o passo ao atravessá-la, a fim de evitar acidentes estruturais.",
      source: "ENEM Ondulatória e Mecânica Clássica"
    },
    prompt: "A quebra da taça e o risco estrutural na ponte são explicados pelo fenômeno da:",
    options: [
      { id: "a", text: "Ressonância, que ocorre quando uma força externa periódica atua com frequência igual a uma das frequências naturais de oscilação do sistema, provocando aumento progressivo da amplitude de vibração.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Polarização, que alinha os elétrons do cristal em um único plano eletromagnético transversal.", isCorrect: false, distractorRationale: "O som é onda mecânica longitudinal e não sofre polarização." },
      { id: "c", text: "Refração, provocada pela mudança de densidade do ar em torno do cantor.", isCorrect: false, distractorRationale: "Refração é a mudança de meio com alteração de velocidade, não explica o acúmulo de amplitude." },
      { id: "d", text: "Interferência totalmente destrutiva, que anula a rigidez elástica dos materiais.", isCorrect: false, distractorRationale: "Interferência destrutiva anularia a vibração, e não aumentaria a amplitude." },
      { id: "e", text: "Difração térmica gerada pelo aquecimento da voz.", isCorrect: false, distractorRationale: "Não há 'difração térmica' na quebra de cristais por som." }
    ],
    detailedExplanation: {
      summary: "A ressonância é o fenômeno físico em que um sistema físico oscilante absorve a quantidade máxima de energia de uma fonte externa cuja frequência coincide com a frequência natural de vibração do próprio sistema, gerando picos extremos de amplitude.",
      stepByStep: [
        "Todo corpo elástico tem frequências naturais próprias de vibração (f₀).",
        "Quando a frequência excitadora coincide com f₀ (f_fonte = f₀), a transferência de energia é maximizada a cada ciclo.",
        "A amplitude de oscilação cresce sem parar até ultrapassar o limite elástico de ruptura mecânica do cristal."
      ],
      coreConcept: "Ressonância Mecânica e Transferência Máxima de Energia",
      trapWarning: "No ENEM, associou taça quebrando com voz, forno micro-ondas aquecendo água ou ponte oscilando com vento/passos -> RESSONÂNCIA."
    },
    commonTraps: [
      "Achar que qualquer nota em volume altíssimo quebra a taça (é preciso coincidir a frequência exata)",
      "Confundir ressonância com reverberação"
    ],
    tags: ["ressonancia", "acustica", "frequencia-natural", "energia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-006",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Polarização e Natureza Transversal das Ondas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Óculos de sol com lentes polarizadas reduzem drasticamente o brilho ofuscante proveniente da luz solar refletida em superfícies horizontais de lagos ou pistas de asfalto. Por outro lado, aparelhos de ultrassonografia e caixas de som não utilizam filtros de polarização em suas ondas sonoras.",
      source: "ENEM Óptica e Ondulatória"
    },
    prompt: "O fato de a luz conseguir ser polarizada enquanto as ondas sonoras no ar não admitem polarização decorre de:",
    options: [
      { id: "a", text: "a luz ser uma onda transversal (vibra perpendicularmente à propagação), enquanto o som no ar é uma onda longitudinal (vibra na mesma direção da propagação).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a velocidade do som ser cerca de um milhão de vezes maior do que a da luz.", isCorrect: false, distractorRationale: "A luz é quase um milhão de vezes mais rápida que o som (3·10⁸ m/s vs 340 m/s)." },
      { id: "c", text: "o som no ar transportar exclusivamente energia térmica e nenhuma energia mecânica.", isCorrect: false, distractorRationale: "O som é uma onda mecânica clássica de pressão." },
      { id: "d", text: "a luz visível não se propagar no vácuo cósmico.", isCorrect: false, distractorRationale: "A luz propaga-se perfeitamente no vácuo por ser onda eletromagnética." },
      { id: "e", text: "as lentes dos óculos de sol bloquearem apenas comprimentos de onda sonoros ultrassônicos.", isCorrect: false, distractorRationale: "Óculos de sol filtram luz visível e radiação ultravioleta, não som." }
    ],
    detailedExplanation: {
      summary: "A polarização é o fenômeno em que se seleciona uma única direção de vibração para o campo elétrico de uma onda transversal. Ondas longitudinais vibram na mesma direção em que se propagam, logo é geometricamente impossível polarizá-las.",
      stepByStep: [
        "Onda Transversal: direção de vibração perpendicular à direção de propagação (ex.: luz, ondas de rádio, micro-ondas, corda violão). Sofre polarização.",
        "Onda Longitudinal: direção de vibração paralela à propagação (ex.: som no ar e em líquidos). NÃO SOFRE POLARIZAÇÃO.",
        "Conclusão: A ocorrência de polarização é a prova irrefutável da natureza TRANSVERSAL de uma onda."
      ],
      coreConcept: "Polarização como Propriedade Exclusiva de Ondas Transversais",
      trapWarning: "Cai quase todo ano no ENEM: 'Qual fenômeno ondulatório comprova que a luz é uma onda transversal?' Resposta: POLARIZAÇÃO."
    },
    commonTraps: [
      "Achar que o som pode ser polarizado",
      "Confundir onda transversal (luz) com onda longitudinal (som)"
    ],
    tags: ["polarizacao", "ondas-transversais", "ondas-longitudinais", "luz-som"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-007",
    area: "natureza",
    competence: 5,
    skill: 19,
    topic: "Ondulatória",
    subtopic: "Ondas Estacionárias e Cordas Vibrantes",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma corda de violão de comprimento L = 0,60 m é fixada em ambas as extremidades. Ao ser dedilhada em sua frequência fundamental (primeiro harmônico, n = 1), a onda mecânica propaga-se ao longo da corda com velocidade de 300 m/s.",
      source: "ENEM Acústica Musical"
    },
    prompt: "Qual é o comprimento de onda (λ₁) dessa onda estacionária fundamental e qual é a frequência sonora (f₁) emitida pela corda?",
    options: [
      { id: "a", text: "λ₁ = 1,20 m e f₁ = 250 Hz", isCorrect: true, distractorRationale: null },
      { id: "b", text: "λ₁ = 0,60 m e f₁ = 500 Hz", isCorrect: false, distractorRationale: "Confundiu o comprimento de onda com o comprimento da corda (em n=1, L = λ/2, logo λ = 2L = 1,20 m)." },
      { id: "c", text: "λ₁ = 0,30 m e f₁ = 1000 Hz", isCorrect: false, distractorRationale: "Calculou para o quarto harmônico em vez do fundamental." },
      { id: "d", text: "λ₁ = 1,20 m e f₁ = 180 Hz", isCorrect: false, distractorRationale: "Multiplicou L por v em vez de usar v = λ · f." },
      { id: "e", text: "λ₁ = 2,40 m e f₁ = 125 Hz", isCorrect: false, distractorRationale: "Dobrou indevidamente o comprimento de onda fundamental." }
    ],
    detailedExplanation: {
      summary: "Em cordas com extremidades fixas, o modo fundamental de vibração forma um único fuso (dois nós nas pontas e um ventre no meio), de modo que L = λ₁ / 2.",
      stepByStep: [
        "Relação para corda presa dos dois lados: L = n · (λ / 2).",
        "Para o primeiro harmônico (n = 1): L = λ₁ / 2 → λ₁ = 2 · L = 2 · 0,60 = 1,20 metro.",
        "Cálculo da frequência pela equação fundamental: v = λ₁ · f₁.",
        "f₁ = v / λ₁ = 300 / 1,20 = 250 Hz."
      ],
      coreConcept: "Ondas Estacionárias em Cordas Sonoras e Harmônicos",
      trapWarning: "Lembre-se: em uma corda presa nas duas pontas, o comprimento da corda NÃO é o comprimento de onda; ele é MEIO comprimento de onda no harmônico fundamental!"
    },
    commonTraps: [
      "Fazer λ = L em vez de λ = 2L no primeiro harmônico",
      "Errar a divisão decimal 300 / 1,20"
    ],
    tags: ["ondas-estacionarias", "cordas-vibrantes", "harmonicos", "acustica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-008",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Refração Luminosa e Lei de Snell-Descartes",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um feixe de luz monocromática propaga-se no ar (índice de refração n_ar = 1,0) e atinge a superfície plana e lisa de um bloco de vidro com um ângulo de incidência de 30° em relação à reta normal. No vidro, o feixe sofre refração e refrata com um ângulo de 19,5° em relação à normal. (Considere: sen 30° = 0,50; sen 19,5° ≈ 0,33).",
      source: "ENEM Óptica Geométrica e Ondulatória"
    },
    prompt: "Com base na Lei de Snell-Descartes, o índice de refração absoluto do vidro (n_vidro) e o comportamento da velocidade da luz ao penetrar no vidro são:",
    options: [
      { id: "a", text: "n_vidro ≈ 1,5; a velocidade da luz diminui.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "n_vidro ≈ 0,66; a velocidade da luz aumenta.", isCorrect: false, distractorRationale: "O índice de refração de qualquer meio material é sempre maior ou igual a 1 (n = c/v)." },
      { id: "c", text: "n_vidro ≈ 1,5; a velocidade da luz permanece exatamente a mesma.", isCorrect: false, distractorRationale: "Ao mudar de meio para um mais refringente, a velocidade da luz obrigatoriamente reduz-se." },
      { id: "d", text: "n_vidro ≈ 2,0; a frequência da luz aumenta no vidro.", isCorrect: false, distractorRationale: "A frequência de uma onda NUNCA se altera na refração (depende apenas da fonte emissora)." },
      { id: "e", text: "n_vidro ≈ 1,0; a luz não sofre desvio angular.", isCorrect: false, distractorRationale: "Houve desvio de 30° para 19,5°." }
    ],
    detailedExplanation: {
      summary: "Pela Lei de Snell: n₁ · sen(θ₁) = n₂ · sen(θ₂). Ao entrar em um meio mais refringente (maior n), o feixe se aproxima da reta normal, sua velocidade diminui (v = c/n) e sua frequência permanece inalterada.",
      stepByStep: [
        "Aplicação de Snell: n_ar · sen(30°) = n_vidro · sen(19,5°).",
        "1,0 · 0,50 = n_vidro · 0,33.",
        "n_vidro = 0,50 / 0,33 ≈ 1,515 ≈ 1,5.",
        "Velocidade: n = c / v → v = c / 1,5 = (3,0·10⁸)/1,5 = 2,0·10⁸ m/s (diminui).",
        "Frequência: NUNCA MUDA na refração (o que muda é a velocidade e o comprimento de onda λ)."
      ],
      coreConcept: "Lei de Snell-Descartes, Índice de Refração e Invariância da Frequência",
      trapWarning: "Regra de ouro do ENEM: na refração, a FREQUÊNCIA É CONSTANTE! Velocidade e comprimento de onda variam na mesma proporção (v/λ = constante)."
    },
    commonTraps: [
      "Achar que a frequência da onda muda na refração",
      "Calcular índice de refração menor que 1"
    ],
    tags: ["refracao", "lei-de-snell", "indice-de-refracao", "optica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-009",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Reflexão Total e Fibras Ópticas",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Os cabos submarinos de fibra óptica transportam mais de 95% do tráfego mundial da internet por meio de pulsos de luz laser guiados em fios de vidro puríssimo. A luz é confinada no interior do núcleo de vidro graças a sucessivas reflexões totais na fronteira com a casca externa que o envolve.",
      source: "ENEM Telecomunicações e Óptica Física"
    },
    prompt: "Para que ocorra o fenômeno da reflexão total e a luz fique confinada no interior da fibra sem escapar para o meio externo, são condições físicas obrigatórias que:",
    options: [
      { id: "a", text: "a luz se propague do meio mais refringente para o menos refringente (n_núcleo > n_casca) e incida com ângulo superior ao ângulo limite de refração (θ > L).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o índice de refração da casca externa seja obrigatoriamente o dobro do núcleo.", isCorrect: false, distractorRationale: "O núcleo deve ter índice MAIOR que a casca, não menor." },
      { id: "c", text: "a luz incida paralelamente à reta normal com ângulo de incidência de zero grau.", isCorrect: false, distractorRationale: "Com incidência normal (0°), a luz atravessa direto sem sofrer reflexão total." },
      { id: "d", text: "o interior do núcleo seja preenchido com ar comprimido em vácuo absoluto.", isCorrect: false, distractorRationale: "O núcleo é feito de sílica vítrea (vidro ultrapuro dopado)." },
      { id: "e", text: "as ondas eletromagnéticas utilizadas sejam exclusivamente ondas de rádio AM de baixa frequência.", isCorrect: false, distractorRationale: "Fibras ópticas usam radiação infravermelha próxima e luz laser, não rádio AM." }
    ],
    detailedExplanation: {
      summary: "A reflexão total só ocorre sob duas condições obrigatórias: a luz deve tentar passar do meio mais refringente para o menos refringente (n₁ > n₂), e o ângulo de incidência deve superar o ângulo limite (sen L = n_menor / n_maior).",
      stepByStep: [
        "Condição 1: A luz deve propagar-se do meio com MAIOR índice para o de MENOR índice (n_núcleo > n_casca).",
        "Condição 2: Ângulo de incidência θ > Ângulo limite (L).",
        "Ângulo Limite: sen(L) = n_casca / n_núcleo.",
        "Se θ > L: não há raio refratado; 100% da energia luminosa é refletida de volta ao interior do núcleo, permitindo transmissão por milhares de quilômetros com perdas mínimas."
      ],
      coreConcept: "Reflexão Total da Luz e Princípio da Fibra Óptica",
      trapWarning: "No ENEM, memorize: Reflexão Total NUNCA ocorre de meio menos refringente para mais refringente (ex.: do ar para a água nunca dá reflexão total!)."
    },
    commonTraps: [
      "Inverter os índices de refração do núcleo e da casca",
      "Achar que a reflexão total ocorre em qualquer ângulo"
    ],
    tags: ["reflexao-total", "fibra-optica", "angulo-limite", "telecomunicacoes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-010",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Interferência Destrutiva e Fones com Cancelamento de Ruído",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Fones de ouvido modernos equipados com tecnologia de Cancelamento Ativo de Ruído (ANC - Active Noise Cancelling) possuem microfones externos que captam o ruído contínuo do ambiente (como o som de motores ou ar-condicionado). Um circuito eletrônico digital gera instantaneamente uma onda sonora artificial idêntica à do ruído externo, porém invertida em fase em 180° (em oposição de fase), reproduzindo-a nos alto-falantes internos juntamente com a música.",
      source: "ENEM Tecnologia e Acústica Moderna"
    },
    prompt: "O princípio da física ondulatória que permite anular o barulho incômodo do ambiente nos ouvidos do usuário é a:",
    options: [
      { id: "a", text: "Interferência destrutiva, pois a crista da onda artificial coincide com o vale da onda do ruído ambiente, anulando a amplitude sonora resultante.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Ressonância forçada, que amplia a energia do barulho até que o ouvido humano não consiga mais registrá-lo.", isCorrect: false, distractorRationale: "Ressonância amplificaria o ruído a volumes ensurdecedores." },
      { id: "c", text: "Polarização das moléculas de ar, que impede a passagem de sons graves.", isCorrect: false, distractorRationale: "O som no ar é longitudinal e não sofre polarização." },
      { id: "d", text: "Efeito Doppler reverso, que desacelera a velocidade do som no interior do fone para zero m/s.", isCorrect: false, distractorRationale: "A velocidade do som no ar é invariante em dada temperatura, não é reduzida a zero." },
      { id: "e", text: "Reflexão total mecânica no tímpano do usuário.", isCorrect: false, distractorRationale: "O fone cancela o som antes que a onda cause vibração de grande amplitude no tímpano." }
    ],
    detailedExplanation: {
      summary: "Pelo Princípio da Superposição de Ondas, duas ondas de mesma frequência e mesma amplitude propagando-se no mesmo meio em oposição de fase (diferença de fase de 180° ou π radianos) somam-se algebricamente resultando em amplitude líquida nula (Interferência Destrutiva).",
      stepByStep: [
        "Onda do ruído externo: y₁(t) = A · sen(ωt).",
        "Onda anti-ruído emitida pelo fone: y₂(t) = A · sen(ωt + π) = -A · sen(ωt).",
        "Superposição no ouvido: y_total = y₁ + y₂ = A · sen(ωt) - A · sen(ωt) = 0.",
        "Como a intensidade sonora é proporcional ao quadrado da amplitude (I ∝ A²), amplitude zero equivale a silêncio."
      ],
      coreConcept: "Interferência Destrutiva, Oposição de Fase e Cancelamento Ativo de Ruído",
      trapWarning: "No ENEM, aplicações contemporâneas como cancelamento de ruído e película antirreflexo em lentes são exemplos clássicos de INTERFERÊNCIA DESTRUTIVA."
    },
    commonTraps: [
      "Confundir cancelamento passivo (espuma isolante que absorve som) com cancelamento ativo (superposição de onda em oposição de fase)",
      "Achar que o som é destruído fisicamente em vez de sofrer interferência destrutiva"
    ],
    tags: ["interferencia-destrutiva", "cancelamento-de-ruido", "superposicao", "acustica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-011",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Efeito Doppler em Ondas Sonoras",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Uma pessoa parada na calçada de uma avenida observa a passagem de uma viatura de resgate do SAMU com a sirene ligada emitindo um sinal sonoro contínuo de frequência própria igual a 800 Hz. Durante a aproximação rápida da viatura, o observador percebe um som nítido de frequência f_aprox; logo após a passagem, durante o afastamento, percebe um som de frequência f_afast.",
      source: "Física Acústica / Simulado ENEM"
    },
    prompt: "A comparação entre as frequências percebidas pelo observador em repouso e a frequência real emitida pela fonte móvel (800 Hz) indica que:",
    options: [
      { id: "a", text: "f_aprox > 800 Hz e f_afast < 800 Hz, pois o movimento relativo da fonte comprime as frentes de onda à frente e as distende atrás da viatura.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "f_aprox < 800 Hz e f_afast > 800 Hz, pois a velocidade do som no ar aumenta com a aceleração da viatura.", isCorrect: false, distractorRationale: "A velocidade do som no ar independe da velocidade da fonte móvel; ela depende exclusivamente das propriedades do meio físico." },
      { id: "c", text: "f_aprox = f_afast = 800 Hz, pois o efeito Doppler altera exclusivamente o timbre e o volume do som, mantendo a altura inalterada.", isCorrect: false, distractorRationale: "O efeito Doppler altera precisamente a frequência (altura) percebida pelo observador devido à compressão/rarefação das frentes de onda." },
      { id: "d", text: "f_aprox > 800 Hz e f_afast > 800 Hz, pois qualquer movimento relativo sempre eleva a energia cinética total das ondas.", isCorrect: false, distractorRationale: "No afastamento, as frentes de onda chegam mais espaçadas ao receptor, reduzindo a frequência percebida para valores abaixo de 800 Hz." },
      { id: "e", text: "f_aprox = 800 Hz e f_afast = 0 Hz, pois o som deixa de se propagar para trás no instante em que a fonte ultrapassa o observador.", isCorrect: false, distractorRationale: "O som se propaga em todas as direções esfericamente no meio; o observador continua ouvindo o som no afastamento, apenas mais grave." }
    ],
    detailedExplanation: {
      summary: "Pelo efeito Doppler, a aproximação de uma fonte sonora causa aparente encurtamento do comprimento de onda espacial, resultando em maior frequência percebida (som mais agudo); no afastamento, as frentes se distanciam, gerando menor frequência (som mais grave).",
      stepByStep: [
        "Passo 1: Entender o mecanismo na aproximação: a cada nova oscilação emitida, a viatura deslocou-se para a frente, encurtando a distância entre as frentes de onda sucessivas (λ' < λ).",
        "Passo 2: Relação com a frequência: como a velocidade do som no meio (ar) é constante (v = λ · f), um comprimento de onda aparente menor resulta em maior frequência aparente recebida por segundo (f_aprox > 800 Hz, som mais agudo).",
        "Passo 3: Entender o mecanismo no afastamento: a fonte afasta-se do observador a cada emissão, 'esticando' o comprimento de onda aparente (λ'' > λ), fazendo com que menos frentes de onda atinjam o tímpano por segundo (f_afast < 800 Hz, som mais grave).",
        "Passo 4: A opção 'a' sintetiza perfeitamente a dinâmica física do fenômeno."
      ],
      coreConcept: "Efeito Doppler acústico, deformação de frentes de onda e variação de frequência aparente.",
      trapWarning: "Achar que o som fica mais rápido ou mais devagar no ar quando a fonte se move. A velocidade do som no ar permanece estritamente a mesma; o que muda é o comprimento de onda aparente e a frequência captada."
    },
    commonTraps: ["achar_que_a_velocidade_do_som_muda", "confundir_frequencia_com_intensidade_volume"],
    tags: ["efeito_doppler", "acustica", "frequencia_aparente", "som"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-012",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Ondulatória",
    subtopic: "Refração Luminosa e Lei de Snell-Descartes",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um feixe de luz monocromática de frequência f = 5,0 × 10^14 Hz e comprimento de onda λ_ar = 600 nm propaga-se inicialmente no ar (índice de refração n_ar = 1,0 e velocidade c = 3,0 × 10^8 m/s) e penetra obliquamente em uma lâmina de vidro óptico de índice de refração absoluto n_vidro = 1,5.",
      source: "Óptica Geométrica e Ondulatória"
    },
    prompt: "Ao penetrar no interior do vidro óptico, os novos valores da frequência (f_vidro), da velocidade (v_vidro) e do comprimento de onda (λ_vidro) desse feixe luminoso passam a ser, respectivamente:",
    options: [
      { id: "a", text: "5,0 × 10^14 Hz ; 2,0 × 10^8 m/s ; 400 nm", isCorrect: true, distractorRationale: null },
      { id: "b", text: "7,5 × 10^14 Hz ; 3,0 × 10^8 m/s ; 600 nm", isCorrect: false, distractorRationale: "O estudante alterou a frequência, violando o princípio de conservação de frequência na refração." },
      { id: "c", text: "3,3 × 10^14 Hz ; 2,0 × 10^8 m/s ; 600 nm", isCorrect: false, distractorRationale: "O estudante reduziu a frequência e manteve inalterado o comprimento de onda." },
      { id: "d", text: "5,0 × 10^14 Hz ; 4,5 × 10^8 m/s ; 900 nm", isCorrect: false, distractorRationale: "O estudante multiplicou a velocidade pelo índice de refração em vez de dividir (velocidade da luz no meio seria maior que c)." },
      { id: "e", text: "5,0 × 10^14 Hz ; 2,0 × 10^8 m/s ; 600 nm", isCorrect: false, distractorRationale: "O estudante esqueceu de reduzir o comprimento de onda proporcionalmente à redução da velocidade." }
    ],
    detailedExplanation: {
      summary: "Na refração, a frequência permanece invariante (depende apenas da fonte). A velocidade e o comprimento de onda reduzem na proporção inversa do índice de refração (divisão por n).",
      stepByStep: [
        "Passo 1: Princípio fundamental da refração: a frequência é uma característica intrínseca determinada pela fonte emissora e não se altera ao mudar de meio material. Logo, f_vidro = 5,0 × 10^14 Hz.",
        "Passo 2: Calcular a velocidade no vidro: v = c / n = (3,0 × 10^8 m/s) / 1,5 = 2,0 × 10^8 m/s.",
        "Passo 3: Calcular o novo comprimento de onda: pela relação fundamental v = λ · f, como f é constante e v reduziu por 1,5, λ reduz pelo mesmo fator:\nλ_vidro = λ_ar / n = 600 nm / 1,5 = 400 nm.",
        "Passo 4: A opção 'a' apresenta o conjunto de grandezas rigorosamente consistente."
      ],
      coreConcept: "Invariância da frequência na refração, cálculo de velocidade via índice de refração e redução proporcional do comprimento de onda.",
      trapWarning: "Achar que a frequência da luz muda na refração. No ENEM, frequência NUNCA muda na refração ou reflexão!"
    },
    commonTraps: ["mudar_a_frequencia_na_refracao", "esquecer_de_reduzir_o_comprimento_de_onda"],
    tags: ["refracao", "indice_de_refracao", "comprimento_de_onda", "optica_ondulatoria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-013",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Reflexão Total Interna e Fibras Ópticas",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "As fibras ópticas são a espinha dorsal da internet moderna de banda larga, transmitindo pulsos de luz modulados por distâncias continentais com perda mínima de sinal. A estrutura básica de uma fibra é formada por um núcleo cilíndrico central transparente de vidro (índice de refração n_nucleo = 1,50) envolvido por uma casca externa protetora com índice de refração ligeiramente menor (n_casca = 1,20).",
      source: "Telecomunicações e Óptica Aplicada"
    },
    prompt: "Para que os pulsos luminosos fiquem confinados no interior do núcleo por sucessivas reflexões totais sem escapar para a casca, as duas condições físicas que devem ser simultaneamente satisfeitas são:",
    options: [
      { id: "a", text: "a luz deve se propagar do meio mais refringente para o menos refringente (n_nucleo > n_casca) e o ângulo de incidência na interface deve ser estritamente superior ao ângulo limite (θ > θ_lim).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a luz deve vir da casca para o núcleo e incidir exatamente a 90° em relação à superfície.", isCorrect: false, distractorRationale: "A luz vem do núcleo para a casca; na incidência normal (90° em relação à superfície / 0° com a normal) a luz refrata em linha reta sem reflexão total." },
      { id: "c", text: "os índices de refração do núcleo e da casca devem ser rigorosamente idênticos para evitar qualquer refração.", isCorrect: false, distractorRationale: "Se os índices fossem iguais, não haveria interface óptica e a luz simplesmente atravessaria em linha reta vazando para fora." },
      { id: "d", text: "o núcleo deve ser feito de material opaco metálico refletor com espessura micrométrica.", isCorrect: false, distractorRationale: "Materiais metálicos absorveriam a luz por efeito Joule; a fibra usa reflexão total dielétrica com 100% de reflexão sem perda por absorção." },
      { id: "e", text: "a frequência da onda luminosa deve ser mantida abaixo da faixa audível de 20 Hz.", isCorrect: false, distractorRationale: "Fibras ópticas operam com luz infravermelha próxima (cerca de 2 × 10^14 Hz), e não com infrassom mecânico." }
    ],
    detailedExplanation: {
      summary: "A reflexão total requer que a luz viaje do meio mais refringente (maior índice) para o menos refringente com ângulo de incidência maior que o ângulo limite arcsen(n_menor / n_maior).",
      stepByStep: [
        "Passo 1: Lembrar as duas condições indispensáveis para a ocorrência da reflexão interna total:\n1ª Condição: O feixe deve tentar passar de um meio MAIS refringente para um meio MENOS refringente (n1 > n2). Aqui, n_nucleo (1,50) > n_casca (1,20).\n2ª Condição: O ângulo de incidência (θ) em relação à reta normal da interface deve ser maior do que o ângulo limite (θ > θ_lim).",
        "Passo 2: Calcular o ângulo limite por Snell: sen(θ_lim) = n_menor / n_maior = 1,20 / 1,50 = 0,80.",
        "Passo 3: Para qualquer ângulo de incidência com sen(θ) > 0,80, a luz não consegue refratar para a casca e sofre reflexão com rendimento de 100% no interior do núcleo.",
        "Passo 4: A alternativa 'a' expressa com perfeição as leis da reflexão total."
      ],
      coreConcept: "Reflexão total interna, ângulo limite e confinamento da luz em fibras ópticas no ENEM.",
      trapWarning: "Inverter a ordem dos índices (achar que a casca tem que ter índice maior). Se a casca tivesse índice maior, a luz sempre refrataria aproximando-se da normal, sem jamais sofrer reflexão total."
    },
    commonTraps: ["inverter_o_sentido_da_luz_de_menos_para_mais_refringente", "esquecer_da_condicao_de_angulo_maior_que_o_limite"],
    tags: ["fibra_optica", "reflexao_total", "angulo_limite", "snell"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-014",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Ondas Estacionárias e Cordas Vibrantes de Violão",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A primeira corda (mais fina, Mi agudo) de um violão clássico possui comprimento livre vibratório L = 0,65 m entre a pestana e o rastilho, densidade linear de massa μ = 4,0 × 10^-4 kg/m e está tensionada com uma força T = 64 N. Quando dedilhada solta, a corda vibra em seu primeiro harmônico (modo fundamental). Considere a velocidade de propagação da onda na corda dada pela relação de Taylor: v = √(T / μ).",
      source: "Acústica Musical e Física Clássica"
    },
    prompt: "A velocidade de propagação da onda transversal nessa corda e a frequência fundamental da nota emitida são de, aproximadamente:",
    options: [
      { id: "a", text: "400 m/s e 308 Hz", isCorrect: true, distractorRationale: null },
      { id: "b", text: "160 m/s e 123 Hz", isCorrect: false, distractorRationale: "O estudante errou o cálculo da raiz quadrada de 64 / (4 × 10^-4)." },
      { id: "c", text: "400 m/s e 615 Hz", isCorrect: false, distractorRationale: "O estudante usou λ = L em vez de λ = 2L no harmônico fundamental, dobrando a frequência." },
      { id: "d", text: "200 m/s e 154 Hz", isCorrect: false, distractorRationale: "O estudante dividiu a velocidade por 2 arbitrariamente." },
      { id: "e", text: "800 m/s e 616 Hz", isCorrect: false, distractorRationale: "O estudante multiplicou por 2 a velocidade de Taylor." }
    ],
    detailedExplanation: {
      summary: "Pela fórmula de Taylor v = √(T/μ) = 400 m/s. No modo fundamental, o comprimento de onda é λ = 2L = 1,30 m, resultando em f = v / 2L ≈ 308 Hz.",
      stepByStep: [
        "Passo 1: Calcular a velocidade de propagação na corda vibrante:\nv = √(T / μ) = √(64 / (4,0 × 10^-4)) = √(16 × 10^4) = 4 × 10^2 = 400 m/s.",
        "Passo 2: No modo fundamental de uma corda presa nas duas extremidades (dois nós e um ventre):\nO comprimento da corda abriga meio comprimento de onda: L = λ / 2, logo λ = 2L = 2 × 0,65 m = 1,30 m.",
        "Passo 3: Calcular a frequência fundamental:\nf_1 = v / λ = 400 / 1,30 ≈ 307,69 Hz ≈ 308 Hz.",
        "Passo 4: Portanto, v = 400 m/s e f ≈ 308 Hz."
      ],
      coreConcept: "Fórmula de Taylor, ondas estacionárias em cordas e harmônico fundamental.",
      trapWarning: "Usar λ = L em vez de λ = 2L. Lembre-se de que a distância entre dois nós sucessivos é meio comprimento de onda (λ/2)."
    },
    commonTraps: ["usar_lambda_igual_a_L", "errar_potencia_de_dez_sob_o_radical"],
    tags: ["ondas_estacionarias", "cordas_vibrantes", "formula_de_taylor", "violao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-015",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Tubos Sonoros Abertos vs Fechados",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Dois instrumentos de sopro de mesmo comprimento L = 0,85 m operam no ar em uma sala onde a velocidade do som é v = 340 m/s. O instrumento Alfa é um tubo sonoro aberto nas duas extremidades (como uma flauta doce), enquanto o instrumento Beta é um tubo sonoro fechado em uma das extremidades (como uma clarineta).",
      source: "Acústica Física de Tubos Sonoros"
    },
    prompt: "As frequências fundamentais (primeiro harmônico) emitidas pelos instrumentos Alfa e Beta são, respectivamente:",
    options: [
      { id: "a", text: "200 Hz e 100 Hz", isCorrect: true, distractorRationale: null },
      { id: "b", text: "100 Hz e 200 Hz", isCorrect: false, distractorRationale: "Frequências invertidas entre o tubo aberto e o fechado." },
      { id: "c", text: "200 Hz e 200 Hz", isCorrect: false, distractorRationale: "Supôs que tubos de mesmo comprimento têm sempre a mesma frequência fundamental independentemente de serem abertos ou fechados." },
      { id: "d", text: "400 Hz e 200 Hz", isCorrect: false, distractorRationale: "O estudante dobrou os valores dos harmônicos por erro no denominador." },
      { id: "e", text: "100 Hz e 50 Hz", isCorrect: false, distractorRationale: "Erro na divisão por 2L e 4L." }
    ],
    detailedExplanation: {
      summary: "Em tubos abertos, f1 = v / 2L (ventres nas duas pontas). Em tubos fechados, f1 = v / 4L (nó no fundo e ventre na boca).",
      stepByStep: [
        "Passo 1: Para o tubo aberto Alfa:\nPossui ventres de deslocamento nas duas pontas abertas e um nó no centro.\nL = λ / 2, logo λ = 2L = 2 × 0,85 = 1,70 m.\nf_Alfa = v / 2L = 340 / 1,70 = 200 Hz.",
        "Passo 2: Para o tubo fechado Beta:\nPossui nó de deslocamento na extremidade fechada e ventre na ponta aberta.\nL = λ / 4, logo λ = 4L = 4 × 0,85 = 3,40 m.\nf_Beta = v / 4L = 340 / 3,40 = 100 Hz.",
        "Passo 3: Concluir que f_Alfa = 200 Hz e f_Beta = 100 Hz (a frequência fundamental do tubo fechado é exatamente metade da do tubo aberto de mesmo tamanho)."
      ],
      coreConcept: "Tubos sonoros abertos (f = n·v/2L) e fechados (f = n·v/4L, apenas harmônicos ímpares).",
      trapWarning: "Esquecer que o tubo fechado tem denominador 4L, emitindo nota uma oitava mais grave que o aberto de mesmo comprimento."
    },
    commonTraps: ["esquecer_do_fator_4L_no_tubo_fechado", "inverter_as_frequencias"],
    tags: ["tubos_sonoros", "acustica", "harmonicos", "instrumentos_de_sopro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-016",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Polarização da Luz e Natureza Transversal",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A polarização é um fenômeno ondulatório amplamente explorado em óculos de sol polarizados, filtros fotográficos e telas de cristal líquido (LCD). Um feixe de luz não polarizada natural oscila em todas as direções perpendiculares à direção de propagação. Ao atravessar um filtro polarizador linear, apenas os campos elétricos alinhados ao eixo de transmissão conseguem passar. Curiosamente, esse mesmo fenômeno de polarização é fisicamente impossível de ser observado em ondas sonoras que se propagam no ar.",
      source: "Fundamentos de Física Óptica"
    },
    prompt: "A impossibilidade de polarizar ondas sonoras no ar fundamenta-se no fato de que:",
    options: [
      { id: "a", text: "o som no ar é uma onda mecânica longitudinal, cuja direção de vibração das partículas é paralela à direção de propagação da onda.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a velocidade do som é muito baixa para que filtros mecânicos interajam com o comprimento de onda sonoro.", isCorrect: false, distractorRationale: "A velocidade não impede a polarização; a geometria da vibração (longitudinal vs transversal) é o fator impeditivo." },
      { id: "c", text: "as ondas sonoras não transportam energia mecânica através do meio gasoso.", isCorrect: false, distractorRationale: "Ondas sonoras transportam energia e quantidade de movimento através de variações de pressão no gás." },
      { id: "d", text: "o som é composto por fótons que não possuem carga elétrica líquida.", isCorrect: false, distractorRationale: "Som é onda mecânica de pressão (fônons), não sendo composto por fótons luminosos." },
      { id: "e", text: "as moléculas de oxigênio e nitrogênio absorvem integralmente qualquer oscilação periódica.", isCorrect: false, distractorRationale: "O ar é o meio clássico de transmissão de sons audíveis diários." }
    ],
    detailedExplanation: {
      summary: "Apenas ondas transversais (como a luz e ondas em cordas) podem ser polarizadas; ondas longitudinais (como o som em fluidos) vibram exclusivamente na mesma direção em que se propagam.",
      stepByStep: [
        "Passo 1: Compreender o conceito de polarização: filtrar direções preferenciais de oscilação em um plano perpendicular à propagação.",
        "Passo 2: Analisar a luz: onda transversal tridimensional em que os campos elétrico e magnético vibram a 90° da direção do feixe -> pode ser polarizada.",
        "Passo 3: Analisar o som no ar: onda longitudinal de compressão e descompressão em que as moléculas colidem na MESMA direção do avanço do som -> não há como 'filtrar direções laterais', pois a oscilação já ocorre no sentido da propagação.",
        "Passo 4: A alternativa 'a' expressa a clássica questão conceitual de ondulatória do ENEM."
      ],
      coreConcept: "A polarização como prova definitiva da natureza transversal de uma onda.",
      trapWarning: "Achar que som pode ser polarizado. No ENEM, sempre lembre-se: O SOM NO AR NÃO SOFRE POLARIZAÇÃO!"
    },
    commonTraps: ["achar_que_ondas_longitudinais_sofrem_polarizacao"],
    tags: ["polarizacao", "onda_transversal", "onda_longitudinal", "som_vs_luz"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-017",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Lentes Esféricas e Óptica da Visão Humana",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um jovem míope consulta um médico oftalmologista relatando grande dificuldade para enxergar com nitidez a lousa da sala de aula. O exame óptico constata que, devido a um alongamento anteroposterior do globo ocular, as imagens de objetos distantes (no infinito) são formadas e focalizadas antes da retina. O médico prescreve uma lente corretiva de vergência V = -2,5 dioptrias (graus).",
      source: "Óptica da Visão e Oftalmologia"
    },
    prompt: "O tipo de lente prescrito para corrigir a miopia desse estudante e a sua respectiva distância focal (f) são:",
    options: [
      { id: "a", text: "lente divergente, com distância focal de -40 cm.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "lente convergente, com distância focal de +40 cm.", isCorrect: false, distractorRationale: "Lentes convergentes convergem ainda mais a luz, piorando a miopia (são usadas para hipermetropia e presbiopia)." },
      { id: "c", text: "lente divergente, com distância focal de -25 cm.", isCorrect: false, distractorRationale: "O estudante confundiu a vergência (2,5 dioptrias) diretamente com a distância focal sem calcular o inverso 1/V." },
      { id: "d", text: "lente cilíndrica convergente, com distância focal de +250 cm.", isCorrect: false, distractorRationale: "Lentes cilíndricas corrigem astigmatismo, não miopia axial." },
      { id: "e", text: "lente plana reflexiva, com distância focal infinita.", isCorrect: false, distractorRationale: "Lente plana não possui poder de refração (vergência nula)." }
    ],
    detailedExplanation: {
      summary: "A miopia requer lentes divergentes (vergência negativa) para afastar o ponto de convergência até a retina. A distância focal é f = 1/V = 1/(-2,5) = -0,40 m = -40 cm.",
      stepByStep: [
        "Passo 1: Identificar a anomalia visual: na miopia, o olho é excessivamente convergente ou longo; a imagem nítida forma-se antes da retina.",
        "Passo 2: Escolher o tipo de lente corretiva: para deslocar o foco mais para trás (em cima da retina), é indispensável abrir ligeiramente o feixe com uma lente DIVERGENTE (foco e vergência com sinal negativo).",
        "Passo 3: Calcular a distância focal a partir da vergência (V = 1 / f):\nf = 1 / V = 1 / (-2,5 dioptrias) = -0,40 metro = -40 cm.",
        "Passo 4: A opção 'a' descreve o tipo de lente e a distância focal de forma correta."
      ],
      coreConcept: "Óptica da visão, correção de miopia com lentes divergentes e cálculo de vergência em dioptrias (V = 1/f).",
      trapWarning: "Confundir miopia (lente divergente, V < 0) com hipermetropia (lente convergente, V > 0)."
    },
    commonTraps: ["confundir_miopia_com_hipermetropia", "esquecer_de_converter_metros_para_centimetros"],
    tags: ["miopia", "lentes_divergentes", "vergencia", "optica_da_visao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-018",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Dispersão da Luz e Formação do Arco-Íris",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao incidir sobre gotículas esféricas de água suspensas na atmosfera após uma chuva, a luz solar branca sofre refração ao entrar na gota, reflexão interna na parede posterior e nova refração ao sair, decompondo-se nas cores do arco-íris. Esse fenômeno de separação das cores componentes da luz branca é conhecido como dispersão cromática.",
      source: "Fenômenos Ópticos na Atmosfera"
    },
    prompt: "A dispersão cromática da luz ao refratar na água ocorre porque, no interior de meios materiais transparentes:",
    options: [
      { id: "a", text: "o índice de refração do meio varia com a frequência da luz, sendo maior para o violeta (que sofre maior desvio) e menor para o vermelho (que sofre menor desvio).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a luz vermelha é convertida integralmente em calor e deixa de se propagar no interior da gota.", isCorrect: false, distractorRationale: "A luz vermelha não é absorvida; ela refrata com menor desvio e atinge o olho do observador na faixa superior do arco-íris." },
      { id: "c", text: "todas as cores da luz continuam com rigorosamente a mesma velocidade que possuíam no vácuo.", isCorrect: false, distractorRationale: "A velocidade da luz diminui em meios materiais e depende da frequência de cada cor (daí a dispersão)." },
      { id: "d", text: "a frequência de cada cor é multiplicada pelo diâmetro da gota d'água.", isCorrect: false, distractorRationale: "A frequência da luz é invariante e independe da geometria das gotas de chuva." },
      { id: "e", text: "a gota de água atua como um espelho plano que impede qualquer entrada de feixes luminosos.", isCorrect: false, distractorRationale: "A luz penetra e refrata na água; se impedisse a entrada, não haveria arco-íris." }
    ],
    detailedExplanation: {
      summary: "A dispersão cromática decorre da dependência do índice de refração em relação à frequência: luz violeta (maior frequência) viaja mais devagar na água (maior n) e sofre maior desvio angular do que o vermelho.",
      stepByStep: [
        "Passo 1: Entender o feixe policromático: a luz branca do Sol é a soma de todas as cores do espectro visível (do vermelho ao violeta).",
        "Passo 2: No vácuo, todas as cores têm a mesma velocidade (c = 3 × 10^8 m/s). Porém, na água ou no vidro, cada cor experimenta uma velocidade ligeiramente distinta.",
        "Passo 3: Relação com as frequências: a luz violeta tem maior frequência que a vermelha (f_violeta > f_vermelho), o que resulta em n_violeta > n_vermelho e v_violeta < v_vermelho.",
        "Passo 4: Pela Lei de Snell, maior índice de refração produz maior desvio em relação à trajetória original.",
        "Passo 5: Concluir que a opção 'a' expressa a base física exata da dispersão da luz."
      ],
      coreConcept: "Dispersão cromática, dependência do índice de refração com a frequência e formação do arco-íris.",
      trapWarning: "Achar que a luz vermelha sofre maior desvio que a violeta. O vermelho é o MENOS desviado (menor frequência, menor índice); o violeta é o MAIS desviado."
    },
    commonTraps: ["achar_que_o_vermelho_desvia_mais_que_o_violeta", "achar_que_a_velocidade_na_agua_e_igual_para_todas_as_cores"],
    tags: ["dispersao_cromatica", "arco_iris", "optica", "espectro_visivel"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-019",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Qualidades Fisiológicas do Som: Altura, Intensidade e Timbre",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma apresentação em um auditório escolar, um pianista e uma violinista tocam exatamente a mesma nota musical Lá (frequência fundamental de 440 Hz) com a mesma energia de intensidade acústica. Uma pessoa na plateia é perfeitamente capaz de distinguir qual som provém do piano e qual provém do violino, além de notar que o som é emitido de maneira suave (fraco).",
      source: "Acústica Fisiológica e Percepção Sonora"
    },
    prompt: "A propriedade física da onda sonora que permite ao ouvinte diferenciar os instrumentos musicais que tocam a mesma nota com igual intensidade é o(a):",
    options: [
      { id: "a", text: "timbre, que se relaciona com o formato da onda resultante da combinação de múltiplos harmônicos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "altura, que se relaciona exclusivamente com a amplitude da oscilação das moléculas de ar.", isCorrect: false, distractorRationale: "Altura relaciona-se com frequência (grave/agudo), e não com amplitude." },
      { id: "c", text: "intensidade, que define se o som é grave ou agudo na escala das notas musicais.", isCorrect: false, distractorRationale: "Intensidade relaciona-se com energia/amplitude (forte/fraco), não com grave/agudo." },
      { id: "d", text: "velocidade de propagação, que é mais rápida quando o som vem do violino em relação ao piano no mesmo ar.", isCorrect: false, distractorRationale: "A velocidade do som no ar do auditório é idêntica para qualquer instrumento na mesma temperatura." },
      { id: "e", text: "polarização linear das ondas mecânicas nos ouvidos do espectador.", isCorrect: false, distractorRationale: "O som no ar é onda longitudinal e não sofre polarização." }
    ],
    detailedExplanation: {
      summary: "As três qualidades fisiológicas do som no ENEM são: Altura (frequência: grave vs agudo), Intensidade (amplitude: forte vs fraco) e Timbre (forma de onda / harmônicos: distinção da fonte sonora).",
      stepByStep: [
        "Passo 1: Reconhecer a Altura: determinada pela frequência (som de alta frequência é agudo; de baixa frequência é grave). Aqui a nota é a mesma (440 Hz), logo a altura é idêntica.",
        "Passo 2: Reconhecer a Intensidade: determinada pela amplitude da onda e densidade de energia (som forte tem grande amplitude; som fraco tem pequena amplitude). O texto afirma que ambos tocaram com a mesma intensidade suave.",
        "Passo 3: Reconhecer o Timbre: determinado pela sobreposição dos harmônicos superiores que modulam a forma geométrica da onda. Cada instrumento possui sua 'assinatura espectral' acústica única.",
        "Passo 4: A opção 'a' define com clareza o timbre."
      ],
      coreConcept: "Qualidades fisiológicas do som (Altura, Intensidade e Timbre) e sua distinção conceitual no ENEM.",
      trapWarning: "No cotidiano dizemos 'abaixe a altura da TV' quando na verdade queremos abaixar o VOLUME (intensidade). No ENEM, altura é frequência (grave/agudo), NUNCA volume!"
    },
    commonTraps: ["confundir_altura_com_volume_intensidade", "confundir_timbre_com_frequencia"],
    tags: ["qualidades_fisiologicas", "timbre", "altura", "intensidade_sonora"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-020",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Ressonância Mecânica e Transferência de Energia",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Uma cantora lírica consegue estilhaçar uma taça de cristal fina emitindo uma nota vocal contínua em volume controlado sem tocá-la fisicamente. Para que isso ocorra, a frequência emitida pela voz da cantora deve coincidir rigorosamente com uma das frequências naturais de vibração mecânica do cristal da taça.",
      source: "Física Acústica e Vibrações Mecânicas"
    },
    prompt: "O fenômeno físico que viabiliza a quebra da taça de cristal pela voz humana é a:",
    options: [
      { id: "a", text: "ressonância, caracterizada pela máxima absorção de energia mecânica pelo sistema oscilador quando estimulado em sua frequência própria, provocando um aumento dramático na amplitude de vibração até o rompimento da estrutura cristalina.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "difração completa, na qual a onda sonora envolve a taça e cancela as forças de coesão atômica sem vibrar o material.", isCorrect: false, distractorRationale: "A difração apenas contorna obstáculos; ela não quebra estruturas por transferência ressonante de amplitude." },
      { id: "c", text: "polarização acústica, que alinha os átomos de silício em um único eixo até a desintegração térmica.", isCorrect: false, distractorRationale: "Som não sofre polarização no ar e a quebra decorre de tensão mecânica, não aquecimento térmico." },
      { id: "d", text: "reflexão total interna, que retém todo o ar no interior da taça criando vácuo absoluto instantâneo.", isCorrect: false, distractorRationale: "O som não cria vácuo nem sofre reflexão total confinada desse modo." },
      { id: "e", text: "interferência destrutiva entre os átomos do cristal e as moléculas de nitrogênio do ambiente.", isCorrect: false, distractorRationale: "Interferência destrutiva anularia a vibração (amplitude zero), impedindo qualquer quebra." }
    ],
    detailedExplanation: {
      summary: "A ressonância ocorre quando um oscilador externo aplica impulsos periódicos na mesma frequência natural de vibração de um corpo, gerando amplitude oscilatória crescente até o limite de ruptura do material.",
      stepByStep: [
        "Passo 1: Todo corpo físico possui frequências naturais de oscilação que dependem de sua massa, geometria e elasticidade.",
        "Passo 2: Quando a frequência de uma onda externa coincide com essa frequência natural, cada ciclo da onda empurra o cristal na direção do seu próprio movimento em fase, maximizando a taxa de transferência de energia mecânica.",
        "Passo 3: A amplitude das deformações oscilatórias cresce sucessivamente a cada ciclo.",
        "Passo 4: Quando a amplitude de deformação ultrapassa o limite elástico de tração do cristal, ocorre a fratura por estilhaçamento.",
        "Passo 5: A alternativa 'a' define perfeitamente o fenômeno da ressonância."
      ],
      coreConcept: "Ressonância, frequência natural de oscilação e amplificação de energia mecânica.",
      trapWarning: "Achar que a taça quebra apenas por causa da 'força' (volume/decibéis) do som. Se a cantora emitir um som altíssimo em frequência diferente, a taça NÃO quebra. A coincidência de frequências (ressonância) é indispensável!"
    },
    commonTraps: ["achar_que_basta_volume_alto_sem_coincidencia_de_frequencia", "confundir_ressonancia_com_difracao"],
    tags: ["ressonancia", "frequencia_natural", "acustica", "amplitude"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-021",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Efeito Doppler no Ecocardiograma e Hemodinâmica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O ecocardiograma com Doppler é um exame diagnóstico não invasivo amplamente empregado na cardiologia clínica para avaliar o fluxo sanguíneo nas cavidades cardíacas e nas artérias coronárias. O transdutor emite pulsos de ultrassom de alta frequência que colidem com as hemácias (glóbulos vermelhos) em circulação e são refletidos de volta para o detector.",
      source: "Fundamentos de Física Médica e Diagnóstico por Imagem"
    },
    prompt: "Quando as hemácias estão se aproximando do transdutor de ultrassom durante a ejeção sistólica, o sinal refletido captado pelo aparelho apresenta, em relação ao pulso originalmente emitido:",
    options: [
      { id: "a", text: "frequência aparente maior e comprimento de onda aparente menor, permitindo calcular com precisão a velocidade e o sentido do fluxo sanguíneo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "frequência aparente menor e comprimento de onda aparente maior, provocando diminuição da velocidade de propagação do ultrassom no sangue.", isCorrect: false, distractorRationale: "Na aproximação relativa, a frequência observada é sempre maior; além disso, a velocidade de propagação depende exclusivamente do meio biológico." },
      { id: "c", text: "mesma frequência e mesmo comprimento de onda, pois ondas mecânicas não sofrem efeito Doppler no interior de tecidos biológicos líquidos.", isCorrect: false, distractorRationale: "O efeito Doppler manifesta-se em qualquer onda quando há velocidade relativa entre fonte refletora e detector." },
      { id: "d", text: "conversão espontânea de onda longitudinal mecânica em radiação eletromagnética ionizante de raios X.", isCorrect: false, distractorRationale: "O ultrassom é e permanece sendo uma onda mecânica inofensiva e não ionizante." },
      { id: "e", text: "amplitude nula devido à interferência totalmente destrutiva gerada pela viscosidade do plasma sanguíneo.", isCorrect: false, distractorRationale: "O eco refletido atinge o detector com amplitude mensurável, não ocorrendo cancelamento total." }
    ],
    detailedExplanation: {
      summary: "Pelo Efeito Doppler, quando a fonte refletora (hemácia) se aproxima do receptor, as frentes de onda refletidas chegam com intervalos de tempo mais curtos, resultando em maior frequência percebida.",
      stepByStep: [
        "1. O transdutor emite ultrassom com frequência f0.",
        "2. As hemácias atuam como receptores móveis e refletores em movimento relativo.",
        "3. Como as hemácias se deslocam em direção ao transdutor (aproximação), os picos das frentes de onda se comprimem espacialmente no sentido do detector.",
        "4. A taxa temporal de encontro com o detector aumenta, logo a frequência detectada f é estritamente maior que f0 (shift Doppler positivo).",
        "5. O processador do aparelho calcula a velocidade v do sangue pela variação percentual delta f / f0."
      ],
      coreConcept: "Efeito Doppler: Variação de Frequência Aparente por Movimento Relativo",
      trapWarning: "A velocidade da onda no meio biológico NÃO muda! A velocidade depende apenas da densidade e elasticidade do sangue (~1540 m/s). O que varia para o observador é a frequência percebida e o comprimento de onda aparente."
    },
    commonTraps: [
      "Achar que na aproximação a frequência aparente diminui",
      "Confundir variação de frequência aparente com alteração na velocidade intrínseca da onda no tecido"
    ],
    tags: ["ondulatoria", "efeito-doppler", "ultrassom", "medicina", "frequencia-aparente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-022",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Interferência em Películas Finas e Iridescência",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao observar uma fina película de água e sabão ou uma camada milimétrica de óleo automotivo derramada sobre o asfalto molhado iluminado pela luz solar branca, nota-se a formação de faixas com padrões coloridos e brilhantes (iridescência) que variam de tonalidade conforme a espessura da lâmina e a posição do observador.",
      source: "Óptica Física e Fenômenos Ondulatórios"
    },
    prompt: "Essas cores vívidas observadas na película fina são originadas primariamente pelo fenômeno óptico de:",
    options: [
      { id: "a", text: "interferência luminosa entre os feixes de luz refletidos na face anterior e na face posterior da lâmina fina.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "dispersão cromática por refração simples provocada por prismas triangulares esculpidos na água.", isCorrect: false, distractorRationale: "A lâmina de óleo/sabão tem faces planas quase paralelas, não agindo como prisma dispersivo triangular." },
      { id: "c", text: "polarização linear que absorve totalmente o comprimento de onda correspondente à cor vermelha.", isCorrect: false, distractorRationale: "Polarização orienta o plano elétrico da onda, mas não gera padrões iridescentes de cores por superposição de caminho óptico." },
      { id: "d", text: "efeito fotoelétrico que excita elétrons livres da superfície gerando fótons de luz laser colimada.", isCorrect: false, distractorRationale: "O efeito fotoelétrico emite elétrons fotoelétricos sob radiação ultravioleta em metais, não fótons em películas líquidas." },
      { id: "e", text: "difração de raios X decorrente da rede cristalina atômica dos hidrocarbonetos de cadeia longa.", isCorrect: false, distractorRationale: "A luz solar incidente é visível (380-750 nm) e a espessura da película é micrométrica, sem envolvimento de raios X." }
    ],
    detailedExplanation: {
      summary: "Na interferência em lâminas delgadas, a luz solar incide e parte é refletida na superfície externa superior, enquanto a outra parte penetra, reflete na superfície inferior interna e emerge. Os dois raios superpõem-se; para comprimentos de onda cuja diferença de caminho óptico gera interferência construtiva, a cor é reforçada aos olhos do observador.",
      stepByStep: [
        "1. O raio de luz solar incidente atinge a primeira superfície da película: raio 1 é refletido imediatamente.",
        "2. Uma fração da luz é refratada, atravessa a espessura d da lâmina, reflete na segunda interface e emerge paralela ao raio 1 (raio 2).",
        "3. O raio 2 percorre uma distância extra aproximada de 2d dentro do meio de índice n.",
        "4. Como a espessura d é da ordem de grandeza de centenas de nanômetros (comparável ao comprimento de onda da luz visível), os dois raios interferem construtiva ou destrutivamente.",
        "5. Onde a interferência for construtiva para o azul, enxerga-se azul; onde for para o amarelo, enxerga-se amarelo."
      ],
      coreConcept: "Interferência em Lâminas Finas: Diferença de Caminho Óptico e Iridescência",
      trapWarning: "Não confunda arco-íris comum (que envolve dispersão e reflexão interna em gotas esféricas) com iridescência em películas finas (que é interferência construtiva e destrutiva em espessura delgada)."
    },
    commonTraps: [
      "Confundir iridescência de películas com refração em prismas (arco-íris)",
      "Achar que o sabão ou óleo possui pigmentos corantes que dão a cor"
    ],
    tags: ["optica-fisica", "interferência", "laminas-delgadas", "iridescencia", "ondas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-023",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Difração de Ondas Eletromagnéticas em Ambientes Urbanos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em redes de comunicação sem fio residenciais, os roteadores Wi-Fi operam frequentemente em duas bandas: 2,4 GHz (comprimento de onda em torno de 12,5 cm) e 5,0 GHz (comprimento de onda em torno de 6,0 cm). Usuários costumam constatar que, embora a rede de 5 GHz forneça maior taxa de transmissão de dados a curta distância em linha de visada direta, o sinal de 2,4 GHz consegue contornar cantos de paredes e manter conexão estável em cômodos mais distantes.",
      source: "Propagação de Ondas Eletromagnéticas e Redes de Comunicação"
    },
    prompt: "A maior facilidade do sinal de 2,4 GHz em contornar obstáculos estruturais e quinas de paredes em uma residência decorre do fato de que:",
    options: [
      { id: "a", text: "seu maior comprimento de onda favorece o fenômeno da difração, aproximando as dimensões da onda da ordem de grandeza das aberturas e quinas dos ambientes.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "sua velocidade de propagação no ar atmosférico é duas vezes maior do que a velocidade das ondas de 5 GHz.", isCorrect: false, distractorRationale: "Todas as ondas eletromagnéticas propagam-se rigorosamente com a mesma velocidade no ar (c ≈ 3 x 10^8 m/s)." },
      { id: "c", text: "suas ondas possuem fótons de altíssima energia capazes de quebrar e atravessar as ligações covalentes do concreto armado.", isCorrect: false, distractorRationale: "A energia do fóton é proporcional à frequência (E = hf); 2,4 GHz tem fótons de menor energia e é estritamente não ionizante." },
      { id: "d", text: "a frequência mais baixa elimina qualquer reflexão especular nas superfícies metálicas e espelhos da casa.", isCorrect: false, distractorRationale: "Ondas de 2,4 GHz refletem perfeitamente em superfícies condutoras metálicas." },
      { id: "e", text: "o sinal de 2,4 GHz é uma onda acústica mecânica que ressoa com os tubos de PVC hidráulicos.", isCorrect: false, distractorRationale: "Wi-Fi é onda eletromagnética, não onda acústica mecânica." }
    ],
    detailedExplanation: {
      summary: "A difração é a capacidade de uma onda contornar obstáculos ou atravessar aberturas. Esse efeito torna-se tanto mais pronunciado quanto mais o comprimento de onda se aproxima das dimensões dos obstáculos. Como lambda = c / f, menor frequência implica maior comprimento de onda e maior difração.",
      stepByStep: [
        "1. Relação fundamental: v = lambda * f -> lambda = c / f.",
        "2. Frequência menor (2,4 GHz) resulta em comprimento de onda significativamente maior (lambda ≈ 12,5 cm) em comparação a 5 GHz (lambda ≈ 6 cm).",
        "3. Vãos de portas, frestas e quinas de corredores têm dimensões em escala centimétrica e métrica.",
        "4. Como a difração é máxima quando o tamanho do obstáculo se aproxima do comprimento de onda, a onda de 2,4 GHz sofre difração mais eficiente, 'dobrando esquinas' com menor atenuação geométrica."
      ],
      coreConcept: "Difração de Ondas: Dependência do Comprimento de Onda em Relação ao Tamanho do Obstáculo",
      trapWarning: "No vácuo e no ar, todas as ondas eletromagnéticas viajam na mesma velocidade c! A frequência maior não viaja mais rápido."
    },
    commonTraps: [
      "Achar que ondas com frequências mais altas têm velocidade maior",
      "Confundir difração (contornar obstáculos) com refração (mudança de meio e velocidade)"
    ],
    tags: ["difracao", "ondas-eletromagneticas", "comprimento-de-onda", "redes-sem-fio", "fisica-do-cotidiano"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-024",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Polarização da Luz e Aplicações em Telas e Óculos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em óculos de sol antirreflexo de alta performance e em telas de dispositivos eletrônicos (como monitores LCD), utilizam-se filtros polarizadores constituídos de polímeros orientados. Quando a luz natural emitida pelo Sol incide sobre a superfície de um lago calmo, o reflexo ofuscante que atinge os olhos de um observador à beira do lago é predominantemente polarizado no plano horizontal paralelo à água.",
      source: "Óptica e Dispositivos Tecnológicos"
    },
    prompt: "Para atenuar quase completamente esse reflexo incômodo sem bloquear totalmente a visão do ambiente ao redor, as lentes desses óculos devem possuir um filtro polarizador cujo eixo de transmissão esteja alinhado na direção:",
    options: [
      { id: "a", text: "vertical, bloqueando seletivamente o campo elétrico das ondas luminosas horizontalmente polarizadas refletidas pela água.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "horizontal, alinhando-se em fase para amplificar por ressonância o brilho refletido.", isCorrect: false, distractorRationale: "Um eixo horizontal deixaria passar 100% da luz refletida ofuscante, agravando o brilho nos olhos." },
      { id: "c", text: "circular contínua em rotação mecânica rápida, convertendo o feixe de luz em som inaudível.", isCorrect: false, distractorRationale: "Lentes de óculos são elementos estáticos e luz não se converte em ondas sonoras acústicas." },
      { id: "d", text: "longitudinal paralela ao raio luminoso, já que a luz natural é constituída por ondas mecânicas.", isCorrect: false, distractorRationale: "A luz é uma onda eletromagnética transversal; ondas longitudinais sequer sofrem polarização." },
      { id: "e", text: "aleatória tridimensional para refratar todos os comprimentos de onda em ângulos críticos opostos.", isCorrect: false, distractorRationale: "Um filtro aleatório não é polarizador direcional e não eliminaria o ofuscamento horizontal." }
    ],
    detailedExplanation: {
      summary: "A polarização é propriedade exclusiva das ondas transversais. A luz refletida pela superfície horizontal da água torna-se predominantemente polarizada horizontalmente. Portanto, uma lente polarizada verticalmente barra esse componente horizontal (Lei de Malus: cos(90°) = 0), eliminando o reflexo cegante.",
      stepByStep: [
        "1. A luz emitida pelo Sol é não polarizada (o vetor campo elétrico vibra em todas as direções transversais perpendiculares à propagação).",
        "2. Ao refletir numa superfície lisa horizontal (lago, capô de carro, asfalto), o feixe refletido fica fortemente polarizado na horizontal.",
        "3. Se as lentes dos óculos contêm um polarizador com eixo de transmissão estritamente vertical, a luz polarizada horizontalmente não consegue atravessar a rede de polímeros (ângulo de 90° entre os eixos -> intensidade transmitida é nula).",
        "4. A luz difusa do restante do ambiente (que contém componentes verticais) passa parcialmente, mantendo a visibilidade clara da paisagem."
      ],
      coreConcept: "Polarização da Luz: Ondas Transversais e Filtragem Seletiva de Vetores de Campo Elétrico",
      trapWarning: "Lembre-se: ONDAS LONGITUDINAIS (como o som no ar) NÃO SOFREM POLARIZAÇÃO! A polarização só existe para ondas transversais (como a luz e as ondas de rádio)."
    },
    commonTraps: [
      "Achar que ondas sonoras sofrem polarização",
      "Escolher o eixo alinhado ao reflexo (horizontal) em vez do perpendicular (vertical) que o bloqueia"
    ],
    tags: ["polarizacao", "ondas-transversais", "optica", "oculos-polarizados", "aplicacoes-tecnologicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-OND-025",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Ondulatória",
    subtopic: "Ondas Estacionárias e Acústica de Instrumentos Musicais",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma das cordas de nylon de um violão tem comprimento útil L = 0,60 m entre os dois pontos de fixação rígida (o rastilho e a pestana). Ao ser dedilhada em sua corda solta, a onda propaga-se no nylon com velocidade v = 240 m/s, formando o padrão fundamental de onda estacionária (primeiro harmônico, n = 1), no qual as extremidades fixas atuam obrigatoriamente como nós e o ponto central atua como ventre.",
      source: "Acústica Física dos Instrumentos de Cordas"
    },
    prompt: "A frequência fundamental do som gerado pela vibração dessa corda é igual a:",
    options: [
      { id: "a", text: "200 Hz.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "100 Hz.", isCorrect: false, distractorRationale: "Esqueceu que no harmônico fundamental L = lambda / 2, calculando incorretamente lambda = 2,40 m em vez de 1,20 m." },
      { id: "c", text: "400 Hz.", isCorrect: false, distractorRationale: "Calculou a frequência do segundo harmônico (n = 2) em vez do fundamental (n = 1)." },
      { id: "d", text: "144 Hz.", isCorrect: false, distractorRationale: "Multiplicou a velocidade pelo comprimento em vez de dividir." },
      { id: "e", text: "600 Hz.", isCorrect: false, distractorRationale: "Calculou o terceiro harmônico (n = 3)." }
    ],
    detailedExplanation: {
      summary: "Em uma corda de extremidades fixas, o comprimento de onda do harmônico fundamental vale lambda = 2L. Utilizando a equação fundamental da ondulatória v = lambda * f, obtemos f = v / (2L) = 240 / (2 * 0,60) = 200 Hz.",
      stepByStep: [
        "1. Para uma corda com ambas as extremidades presas, os extremos são nós e o primeiro harmônico possui apenas 1 ventre central.",
        "2. A distância entre dois nós consecutivos é meio comprimento de onda: L = lambda / 2 -> lambda = 2 * L.",
        "3. Substituindo o comprimento fornecido: lambda = 2 * 0,60 m = 1,20 m.",
        "4. Aplicando a equação de Taylor/fundamental: f = v / lambda.",
        "5. Cálculo: f = 240 / 1,20 = 200 Hz."
      ],
      coreConcept: "Ondas Estacionárias em Cordas: Harmônicos e Frequência Fundamental fn = n * v / (2L)",
      trapWarning: "Cuidado com as unidades: sempre mantenha o comprimento em metros (m) para coincidir com a velocidade em m/s e obter a frequência em Hertz (Hz = 1/s)."
    },
    commonTraps: [
      "Usar lambda = L em vez de lambda = 2L no primeiro harmônico",
      "Calcular a frequência do segundo harmônico"
    ],
    tags: ["ondas-estacionarias", "harmônicos", "cordas-sonoras", "frequencia-fundamental", "acustica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

