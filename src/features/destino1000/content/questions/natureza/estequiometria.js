export const QUESTIONS_ESTEQUIOMETRIA = [
  {
    id: "NAT-ESTEQ-001",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Rendimento e Pureza",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A produção de amônia (NH3) ocorre pelo processo Haber-Bosch, segundo a equação: N2(g) + 3 H2(g) -> 2 NH3(g). Uma indústria utiliza 28 kg de nitrogênio gasoso (N2) com 80% de pureza e hidrogênio em excesso. Sabe-se que o rendimento da reação na planta industrial é de 50%. (Massas molares: N = 14 g/mol, H = 1 g/mol).",
      source: "Original"
    },
    prompt: "A massa de amônia produzida por essa indústria a partir dessa amostra de nitrogênio é mais próxima de:",
    options: [
      { id: "a", text: "13,6 kg", isCorrect: true, distractorRationale: null },
      { id: "b", text: "17,0 kg", isCorrect: false, distractorRationale: "Calculou com 100% de pureza e 50% de rendimento" },
      { id: "c", text: "27,2 kg", isCorrect: false, distractorRationale: "Aplicou a pureza, mas não o rendimento" },
      { id: "d", text: "34,0 kg", isCorrect: false, distractorRationale: "Calculou com 100% de pureza e 100% de rendimento" },
      { id: "e", text: "68,0 kg", isCorrect: false, distractorRationale: "Errou a proporção estequiométrica (1:4 em vez de 1:2)" }
    ],
    detailedExplanation: {
      summary: "Cálculo estequiométrico envolvendo pureza dos reagentes e rendimento da reação.",
      stepByStep: [
        "1. Massa real de N2 = 28 kg * 0,80 = 22,4 kg.",
        "2. Massa molar N2 = 28 g/mol. Mols de N2 = 22400 g / 28 g/mol = 800 mols.",
        "3. Pela equação (1 N2 : 2 NH3), formam-se 1600 mols teóricos de NH3.",
        "4. Com 50% de rendimento, formam-se 800 mols reais de NH3.",
        "5. Massa molar NH3 = 17 g/mol. Massa = 800 * 17 = 13600 g = 13,6 kg."
      ],
      coreConcept: "Estequiometria com pureza e rendimento",
      trapWarning: "Sempre aplicar a pureza antes de achar o número de mols de reagente, e o rendimento no produto final."
    },
    commonTraps: ["Esquecer rendimento", "Esquecer pureza", "Erro de massa molar"],
    tags: ["quimica", "estequiometria", "rendimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-002",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Reagente Limitante",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A reação entre o ácido sulfúrico (H2SO4) e o hidróxido de sódio (NaOH) é uma reação de neutralização. Misturam-se 49 g de ácido sulfúrico com 60 g de hidróxido de sódio. (Massas molares: H2SO4 = 98 g/mol, NaOH = 40 g/mol, Na2SO4 = 142 g/mol, H2O = 18 g/mol). A reação é H2SO4 + 2 NaOH -> Na2SO4 + 2 H2O.",
      source: "Original"
    },
    prompt: "Considerando que a reação ocorre com 100% de rendimento, qual é o reagente em excesso e a massa de sal formada, respectivamente?",
    options: [
      { id: "a", text: "NaOH e 71 g", isCorrect: true, distractorRationale: null },
      { id: "b", text: "H2SO4 e 71 g", isCorrect: false, distractorRationale: "Identificou o reagente limitante errado" },
      { id: "c", text: "NaOH e 106,5 g", isCorrect: false, distractorRationale: "Usou a massa do reagente em excesso para calcular o produto" },
      { id: "d", text: "H2SO4 e 142 g", isCorrect: false, distractorRationale: "Errou a proporção de mols" },
      { id: "e", text: "NaOH e 142 g", isCorrect: false, distractorRationale: "Considerou 1 mol de NaOH reagindo" }
    ],
    detailedExplanation: {
      summary: "Identificação do reagente limitante para o cálculo da massa de produto formada.",
      stepByStep: [
        "1. Mols H2SO4 = 49 / 98 = 0,5 mol.",
        "2. Mols NaOH = 60 / 40 = 1,5 mol.",
        "3. Proporção da reação: 1 mol de H2SO4 reage com 2 mols de NaOH.",
        "4. 0,5 mol de H2SO4 precisaria de 1,0 mol de NaOH. Como temos 1,5 mol de NaOH, o NaOH é o excesso (sobra 0,5 mol) e o H2SO4 é o limitante.",
        "5. Produto Na2SO4 formado a partir de 0,5 mol de limitante: 0,5 mol * 142 g/mol = 71 g."
      ],
      coreConcept: "Reagente Limitante e em Excesso",
      trapWarning: "Nunca use a quantidade do reagente em excesso para calcular a quantidade de produto formada."
    },
    commonTraps: ["Usar o reagente em excesso no cálculo", "Ignorar coeficientes estequiométricos"],
    tags: ["quimica", "reagente-limitante", "neutralizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-003",
    area: "natureza",
    competence: 3,
    skill: 10,
    topic: "Estequiometria",
    subtopic: "Leis Ponderais",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma experiência em laboratório, um aluno realiza a combustão do magnésio metálico, representada pela equação: 2 Mg(s) + O2(g) -> 2 MgO(s). Ele constata que 48 g de magnésio reagem completamente com 32 g de oxigênio, formando 80 g de óxido de magnésio.",
      source: "Original"
    },
    prompt: "Se o aluno decidir queimar 12 g de magnésio com oxigênio em excesso, qual será a massa de óxido de magnésio obtida e que lei ponderal fundamenta essa previsão?",
    options: [
      { id: "a", text: "20 g, Lei de Proust (Proporções Constantes)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "20 g, Lei de Lavoisier (Conservação das Massas)", isCorrect: false, distractorRationale: "Confundiu as leis ponderais aplicáveis à proporcionalidade" },
      { id: "c", text: "40 g, Lei de Proust", isCorrect: false, distractorRationale: "Errou o cálculo de proporção matemática (usou 1/2 em vez de 1/4)" },
      { id: "d", text: "80 g, Lei de Dalton", isCorrect: false, distractorRationale: "Assumiu que a massa de produto independe da massa de reagente inicial" },
      { id: "e", text: "16 g, Lei de Lavoisier", isCorrect: false, distractorRationale: "Somou apenas as massas incorretamente" }
    ],
    detailedExplanation: {
      summary: "Aplicação da lei das proporções definidas (Proust) em um experimento de combustão simples.",
      stepByStep: [
        "1. Pela primeira experiência, 48 g de Mg geram 80 g de MgO.",
        "2. Nova massa de Mg é 12 g, ou seja, 48/4.",
        "3. Pela Lei de Proust, a massa de produto será proporcional: 80/4 = 20 g.",
        "4. A lei que diz que as substâncias reagem em proporções fixas de massa é a Lei de Proust."
      ],
      coreConcept: "Lei das Proporções Constantes (Proust)",
      trapWarning: "Atenção aos nomes das leis ponderais: Lavoisier (conservação) e Proust (proporções)."
    },
    commonTraps: ["Confundir Lavoisier e Proust", "Erro básico de divisão/proporção"],
    tags: ["quimica", "leis-ponderais", "proust"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-004",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Reações Consecutivas",
    difficulty: 4,
    estimatedTimeSeconds: 200,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O ácido sulfúrico é produzido industrialmente em três etapas principais a partir do enxofre: S + O2 -> SO2; 2 SO2 + O2 -> 2 SO3; SO3 + H2O -> H2SO4. Uma fábrica utiliza 320 kg de enxofre puro no processo. (Massa molar: S = 32 g/mol, H2SO4 = 98 g/mol).",
      source: "Original"
    },
    prompt: "Considerando rendimento total de 100%, qual é a massa final de ácido sulfúrico produzida?",
    options: [
      { id: "a", text: "980 kg", isCorrect: true, distractorRationale: null },
      { id: "b", text: "490 kg", isCorrect: false, distractorRationale: "Esqueceu do balanceamento global (considerou que 1 S produz 0,5 H2SO4)" },
      { id: "c", text: "320 kg", isCorrect: false, distractorRationale: "Massa do produto não é igual à massa do reagente inicial" },
      { id: "d", text: "640 kg", isCorrect: false, distractorRationale: "Dobrou indevidamente o valor por causa do coeficiente 2 no SO2" },
      { id: "e", text: "1960 kg", isCorrect: false, distractorRationale: "Multiplicou por um fator 2 extra ao balancear incorretamente" }
    ],
    detailedExplanation: {
      summary: "Cálculo em reações sucessivas através da montagem de uma equação global.",
      stepByStep: [
        "1. As equações indicam que 1 mol de S gera 1 mol de SO2.",
        "2. 2 mols de SO2 geram 2 mols de SO3, logo 1 mol SO2 -> 1 mol SO3.",
        "3. 1 mol de SO3 gera 1 mol de H2SO4.",
        "4. Globalmente, 1 mol de S gera 1 mol de H2SO4.",
        "5. 320 kg de S equivalem a 10.000 mols de S (320000 / 32).",
        "6. Formam-se 10.000 mols de H2SO4. Massa = 10.000 * 98 g/mol = 980.000 g = 980 kg."
      ],
      coreConcept: "Estequiometria com reações sucessivas",
      trapWarning: "Determine a equação global ou relacione o reagente inicial diretamente ao produto final se a conservação do elemento permitir."
    },
    commonTraps: ["Erro ao montar equação global", "Confusão com o rendimento de múltiplas etapas"],
    tags: ["quimica", "equacao-global", "acido-sulfurico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-005",
    area: "natureza",
    competence: 3,
    skill: 11,
    topic: "Estequiometria",
    subtopic: "Misturas gasosas e estequiometria",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Os airbags automotivos funcionam através da decomposição rápida da azida de sódio (NaN3), gerando gás nitrogênio (N2) que infla a bolsa: 2 NaN3(s) -> 2 Na(s) + 3 N2(g). Considerando o volume molar dos gases nas CATP igual a 25 L/mol e que uma bolsa requer 75 Litros de N2 para ser totalmente inflada. (Massa molar do NaN3 = 65 g/mol).",
      source: "Original"
    },
    prompt: "Qual a massa mínima de azida de sódio necessária para inflar corretamente esse airbag?",
    options: [
      { id: "a", text: "130 g", isCorrect: true, distractorRationale: null },
      { id: "b", text: "65 g", isCorrect: false, distractorRationale: "Não considerou a proporção estequiométrica (1:1.5)" },
      { id: "c", text: "195 g", isCorrect: false, distractorRationale: "Inverteu a proporção dos mols" },
      { id: "d", text: "300 g", isCorrect: false, distractorRationale: "Usou a massa molar do N2 no cálculo da massa" },
      { id: "e", text: "97,5 g", isCorrect: false, distractorRationale: "Errou na determinação dos mols de N2 (considerou 22,4 L/mol ou outro erro)" }
    ],
    detailedExplanation: {
      summary: "Relacionando volume gasoso nas CATP com a massa do reagente sólido.",
      stepByStep: [
        "1. O volume desejado de N2 é 75 L.",
        "2. Sendo o volume molar 25 L/mol, precisamos de 75 / 25 = 3 mols de N2.",
        "3. Pela equação (2 NaN3 -> 3 N2), para gerar 3 mols de N2 precisamos de 2 mols de NaN3.",
        "4. A massa molar de NaN3 é 65 g/mol.",
        "5. Massa = 2 mols * 65 g/mol = 130 g."
      ],
      coreConcept: "Relação Massa-Volume na estequiometria",
      trapWarning: "Verificar com cuidado a proporção estequiométrica entre reagente sólido e o gás gerado."
    },
    commonTraps: ["Esquecer coeficientes estequiométricos", "Erro na relação do volume molar"],
    tags: ["quimica", "volume-molar", "airbag"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-006",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Teor de carbono e eficiência ambiental",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A preocupação com a emissão de CO2 estimulou o desenvolvimento de combustíveis mais limpos. Comparando-se a queima completa do etanol (C2H6O) e do octano (C8H18, representante da gasolina), avalia-se a massa de CO2 liberada para cada mol de combustível queimado.",
      source: "Original"
    },
    prompt: "Sabendo que a combustão de 1 mol de etanol libera 2 mols de CO2 e a de 1 mol de octano libera 8 mols de CO2, se uma frota queima 460 kg de etanol, qual seria a massa equivalente de octano que produziria a mesma quantidade em mols de CO2? (Massas molares: Etanol = 46 g/mol, Octano = 114 g/mol).",
    options: [
      { id: "a", text: "285 kg", isCorrect: true, distractorRationale: null },
      { id: "b", text: "570 kg", isCorrect: false, distractorRationale: "Não considerou a relação 1:4 entre o etanol e o octano no CO2" },
      { id: "c", text: "460 kg", isCorrect: false, distractorRationale: "Igualou a massa diretamente, ignorando a estequiometria" },
      { id: "d", text: "1140 kg", isCorrect: false, distractorRationale: "Multiplicou pelo coeficiente errado" },
      { id: "e", text: "142,5 kg", isCorrect: false, distractorRationale: "Dividiu erroneamente a quantidade de mols de octano" }
    ],
    detailedExplanation: {
      summary: "Comparação de emissões de CO2 por diferentes combustíveis por meio de cálculo estequiométrico comparativo.",
      stepByStep: [
        "1. Mols de etanol: 460.000 g / 46 g/mol = 10.000 mols.",
        "2. Mols de CO2 gerados: 10.000 * 2 = 20.000 mols de CO2.",
        "3. Mols de octano necessários para gerar 20.000 mols de CO2: como cada mol de octano gera 8 mols de CO2, precisamos de 20.000 / 8 = 2.500 mols de octano.",
        "4. Massa de octano: 2.500 mols * 114 g/mol = 285.000 g = 285 kg."
      ],
      coreConcept: "Comparação estequiométrica em reações de combustão",
      trapWarning: "É essencial determinar a quantidade total do elemento comum (Carbono) que será transformada em CO2 em ambos os casos."
    },
    commonTraps: ["Erro ao achar mols de combustível", "Erro na proporção de mols de CO2 gerados"],
    tags: ["quimica", "meio-ambiente", "combustao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-007",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Estequiometria",
    subtopic: "Decomposição térmica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O carbonato de cálcio (CaCO3) pode ser decomposto termicamente produzindo óxido de cálcio (CaO) e dióxido de carbono (CO2). Uma amostra de calcário pesando 200 g contendo CaCO3 sofreu calcinação completa, gerando 88 g de CO2. (Massas molares: CaCO3 = 100 g/mol, CO2 = 44 g/mol, CaO = 56 g/mol).",
      source: "Original"
    },
    prompt: "A partir dessas informações, conclui-se que o teor (pureza) de CaCO3 na amostra de calcário original é de:",
    options: [
      { id: "a", text: "100%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "88%", isCorrect: false, distractorRationale: "Confundiu a massa de gás produzida com a porcentagem" },
      { id: "c", text: "50%", isCorrect: false, distractorRationale: "Errou na massa teórica esperada" },
      { id: "d", text: "44%", isCorrect: false, distractorRationale: "Usou a massa molar do CO2 como porcentagem" },
      { id: "e", text: "20%", isCorrect: false, distractorRationale: "Dividiu a massa do carbonato por uma proporção incorreta" }
    ],
    detailedExplanation: {
      summary: "Cálculo do grau de pureza a partir da quantidade de produto formado em uma reação.",
      stepByStep: [
        "1. A reação é: CaCO3 -> CaO + CO2.",
        "2. Mols de CO2 formados = 88 g / 44 g/mol = 2 mols.",
        "3. Como a proporção é 1:1, foram consumidos 2 mols de CaCO3 puro.",
        "4. Massa de CaCO3 puro = 2 mols * 100 g/mol = 200 g.",
        "5. Pureza = (massa de CaCO3 puro / massa da amostra) * 100% = (200 / 200) * 100% = 100%."
      ],
      coreConcept: "Estequiometria com Cálculo de Pureza de Amostras",
      trapWarning: "A massa da amostra impura deve estar no denominador da fração de pureza."
    },
    commonTraps: ["Confundir massa de produto com reagente", "Inverter as massas na fração de pureza"],
    tags: ["quimica", "pureza", "calcario"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-008",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Misturas gasosas",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um recipiente fechado, mistura-se hidrogênio (H2) e monóxido de carbono (CO) para produzir metanol (CH3OH) de acordo com a reação: CO(g) + 2 H2(g) -> CH3OH(l). O reator é alimentado com 14 kg de CO e 3 kg de H2. (Massas molares: CO = 28 g/mol, H2 = 2 g/mol, CH3OH = 32 g/mol).",
      source: "Original"
    },
    prompt: "Qual será a massa de metanol obtida assumindo reação completa (100% de rendimento) até esgotar o limitante?",
    options: [
      { id: "a", text: "16 kg", isCorrect: true, distractorRationale: null },
      { id: "b", text: "24 kg", isCorrect: false, distractorRationale: "Usou H2 como limitante ao invés de CO" },
      { id: "c", text: "12 kg", isCorrect: false, distractorRationale: "Errou na massa molar" },
      { id: "d", text: "32 kg", isCorrect: false, distractorRationale: "Não percebeu que um dos reagentes estava limitando a meio caminho" },
      { id: "e", text: "14 kg", isCorrect: false, distractorRationale: "Assumiu que a massa do produto iguala à do CO inicial" }
    ],
    detailedExplanation: {
      summary: "Análise de reagente limitante para gás de síntese na produção de metanol.",
      stepByStep: [
        "1. Mols CO = 14000 / 28 = 500 mols.",
        "2. Mols H2 = 3000 / 2 = 1500 mols.",
        "3. Pela estequiometria (1 CO : 2 H2), 500 mols de CO requerem 1000 mols de H2. Como há 1500 mols de H2, CO é limitante e H2 está em excesso.",
        "4. Produto formado segue o CO: 500 mols de CO -> 500 mols de CH3OH.",
        "5. Massa CH3OH = 500 * 32 g/mol = 16000 g = 16 kg."
      ],
      coreConcept: "Reagente Limitante e Gás de Síntese",
      trapWarning: "Verifique sempre a proporção das quantidades em MOLS, não em gramas, para identificar o limitante."
    },
    commonTraps: ["Avaliar o limitante em massa ao invés de mols", "Errar na proporção estequiométrica de H2"],
    tags: ["quimica", "metanol", "limitante"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-009",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Rendimento",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A síntese da aspirina (ácido acetilsalicílico - AAS, massa molar = 180 g/mol) ocorre pela reação entre ácido salicílico (massa molar = 138 g/mol) e anidrido acético. Na reação de 13,8 g de ácido salicílico em excesso de anidrido acético, obtiveram-se 14,4 g de aspirina.",
      source: "Original"
    },
    prompt: "O rendimento percentual dessa reação é mais próximo de:",
    options: [
      { id: "a", text: "80%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "75%", isCorrect: false, distractorRationale: "Erro de arredondamento ou de cálculo proporcional" },
      { id: "c", text: "90%", isCorrect: false, distractorRationale: "Calculou incorretamente a massa teórica máxima" },
      { id: "d", text: "100%", isCorrect: false, distractorRationale: "Achou que a reação produzia 14,4 g de forma completa" },
      { id: "e", text: "50%", isCorrect: false, distractorRationale: "Considerou metade da massa como rendimento" }
    ],
    detailedExplanation: {
      summary: "Cálculo do rendimento de uma reação orgânica baseada na massa real de produto em relação à teórica.",
      stepByStep: [
        "1. 13,8 g de ácido salicílico = 13,8 / 138 = 0,1 mol.",
        "2. A proporção estequiométrica (Ácido salicílico : AAS) é de 1:1.",
        "3. Teoricamente, espera-se 0,1 mol de AAS.",
        "4. Massa teórica de AAS = 0,1 mol * 180 g/mol = 18,0 g.",
        "5. Rendimento = (Massa real / Massa teórica) * 100% = (14,4 / 18,0) * 100% = 80%."
      ],
      coreConcept: "Cálculo de Rendimento",
      trapWarning: "Cuidado para não usar a massa inicial dos reagentes para o cálculo da fração, mas sim as massas equivalentes de produto."
    },
    commonTraps: ["Dividir a massa real do produto pela massa do reagente"],
    tags: ["quimica", "aspirina", "rendimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-010",
    area: "natureza",
    competence: 3,
    skill: 10,
    topic: "Estequiometria",
    subtopic: "Equações químicas",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A neutralização do ácido estomacal (HCl) usando antiácidos contendo hidróxido de magnésio (Mg(OH)2) pode ser equacionada por: Mg(OH)2 + 2 HCl -> MgCl2 + 2 H2O. O leite de magnésia é uma suspensão usada para este fim. Massas molares: Mg(OH)2 = 58 g/mol, HCl = 36,5 g/mol.",
      source: "Original"
    },
    prompt: "Uma dose de antiácido contém 2,9 g de hidróxido de magnésio. Quantos gramas de HCl essa dose é capaz de neutralizar completamente?",
    options: [
      { id: "a", text: "3,65 g", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1,82 g", isCorrect: false, distractorRationale: "Não considerou a proporção 1:2 na neutralização" },
      { id: "c", text: "7,30 g", isCorrect: false, distractorRationale: "Errou na proporção dos mols, considerando a relação 1:4 por engano" },
      { id: "d", text: "2,90 g", isCorrect: false, distractorRationale: "Igualou a massa do ácido à do antiácido" },
      { id: "e", text: "5,80 g", isCorrect: false, distractorRationale: "Dobrou a massa do antiácido e assumiu igual à do HCl" }
    ],
    detailedExplanation: {
      summary: "Aplicação da estequiometria em reações ácido-base de neutralização de antiácidos.",
      stepByStep: [
        "1. Mols de Mg(OH)2 em 2,9 g: 2,9 / 58 = 0,05 mol.",
        "2. Pela equação (1 Mg(OH)2 neutraliza 2 HCl), serão necessários 0,05 * 2 = 0,10 mol de HCl.",
        "3. Massa de HCl = 0,10 mol * 36,5 g/mol = 3,65 g."
      ],
      coreConcept: "Estequiometria em Neutralização (antiácidos)",
      trapWarning: "Lembrar que o hidróxido de magnésio possui 2 íons hidroxila (OH-), por isso neutraliza dois mols de HCl (monoácido)."
    },
    commonTraps: ["Ignorar o coeficiente 2 do HCl"],
    tags: ["quimica", "antiacido", "neutralizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
