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
      supportText: "Ao caminhar por um corredor, uma pessoa consegue ouvir com clareza a voz de outra pessoa que conversa dentro de uma sala contígua cuja porta está semiaberta, mesmo sem conseguir enxergá-la diretamente.",
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
  }
];
