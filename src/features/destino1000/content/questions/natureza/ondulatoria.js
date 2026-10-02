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
  }
];
