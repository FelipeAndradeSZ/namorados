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
  },
  {
    id: "NAT-ESTEQ-011",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Volume Molar de Gases nas CNTP",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O biogás produzido em biodigestores rurais é composto principalmente por metano (CH4). A queima completa do metano gera dióxido de carbono e vapor de água segundo a equação termoquímica:\nCH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(g)\nConsidere o volume molar de qualquer gás nas Condições Normais de Temperatura e Pressão (CNTP: 0 °C e 1 atm) igual a 22,4 L/mol. (Massas molares: C = 12 g/mol, H = 1 g/mol).",
      source: "Química Ambiental e Bioenergia"
    },
    prompt: "A queima completa de 320 g de metano purificado gera um volume de dióxido de carbono (CO2), medido nas CNTP, igual a:",
    options: [
      { id: "a", text: "22,4 L", isCorrect: false, distractorRationale: "O estudante calculou o volume referente a apenas 1 mol de gás em vez dos 20 mols produzidos." },
      { id: "b", text: "224 L", isCorrect: false, distractorRationale: "O estudante calculou o número de mols como 10 em vez de 20 (errou a divisão 320/16)." },
      { id: "c", text: "448 L", isCorrect: true, distractorRationale: null },
      { id: "d", text: "896 L", isCorrect: false, distractorRationale: "O estudante multiplicou pela estequiometria do oxigênio reagente (2:1)." },
      { id: "e", text: "7.168 L", isCorrect: false, distractorRationale: "Erro de ordens de grandeza no cálculo do volume." }
    ],
    detailedExplanation: {
      summary: "A estequiometria 1:1 entre CH4 e CO2 indica que 20 mols de metano geram 20 mols de CO2 gasoso, ocupando 448 L nas CNTP.",
      stepByStep: [
        "Passo 1: Calcular a massa molar do metano (CH4): M = 12 + 4(1) = 16 g/mol.",
        "Passo 2: Determinar o número de mols de CH4 queimado: n = 320 g / 16 g/mol = 20 mols.",
        "Passo 3: Pela equação balanceada, 1 mol de CH4 produz 1 mol de CO2. Portanto, formam-se 20 mols de CO2.",
        "Passo 4: Calcular o volume nas CNTP: V = 20 mols × 22,4 L/mol = 448 L."
      ],
      coreConcept: "Volume molar nas CNTP (22,4 L/mol) e relação molar entre reagentes e produtos gasosos.",
      trapWarning: "Esquecer de converter a massa de metano em mols antes de multiplicar pelo volume molar."
    },
    commonTraps: ["esquecer_de_dividir_pela_massa_molar", "confundir_volume_de_co2_com_oxigenio"],
    tags: ["volume_molar", "cntp", "biogas", "combustao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-012",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Reações Consecutivas na Produção de Ácido Sulfúrico",
    difficulty: 4,
    estimatedTimeSeconds: 200,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O ácido sulfúrico (H2SO4) é o insumo químico industrial mais produzido no mundo, essencial na fabricação de fertilizantes fosfatados. Sua síntese industrial pelo método de contato ocorre em três etapas consecutivas:\nEtapa 1: S(s) + O2(g) -> SO2(g)\nEtapa 2: 2 SO2(g) + O2(g) -> 2 SO3(g)\nEtapa 3: SO3(g) + H2O(l) -> H2SO4(aq)\n(Massas molares: S = 32 g/mol, H = 1 g/mol, O = 16 g/mol; H2SO4 = 98 g/mol).",
      source: "Processos Químicos Industriais"
    },
    prompt: "Partindo-se de 64 toneladas de enxofre elementar (S) com 100% de pureza e admitindo um rendimento global do processo de 90%, a massa de ácido sulfúrico (H2SO4) obtida na planta fabril é de:",
    options: [
      { id: "a", text: "98 toneladas", isCorrect: false, distractorRationale: "O estudante calculou a massa teórica para 100% de rendimento partindo de apenas 32 toneladas (1 mol)." },
      { id: "b", text: "176,4 toneladas", isCorrect: true, distractorRationale: null },
      { id: "c", text: "196,0 toneladas", isCorrect: false, distractorRationale: "O estudante calculou a massa teórica máxima (196 t) esquecendo de aplicar o rendimento global de 90%." },
      { id: "d", text: "88,2 toneladas", isCorrect: false, distractorRationale: "O estudante dividiu a massa final por 2 por confusão com os coeficientes da Etapa 2." },
      { id: "e", text: "217,8 toneladas", isCorrect: false, distractorRationale: "O estudante somou as porcentagens de rendimento de forma incorreta." }
    ],
    detailedExplanation: {
      summary: "Na equação global de reações consecutivas, 1 mol de S gera 1 mol de H2SO4. Aplicando-se a estequiometria e o rendimento de 90%, obtêm-se 176,4 toneladas.",
      stepByStep: [
        "Passo 1: Escrever a equação global do processo de contato somando as três etapas e cancelando intermediários (SO2 e SO3):\nS + 3/2 O2 + H2O -> H2SO4.\nProporção estequiométrica: 1 mol de S (32 g) produz 1 mol de H2SO4 (98 g).",
        "Passo 2: Calcular a quantidade de matéria inicial de S:\n64 toneladas de S = 2 × 10^6 mols de S (pois 64 t / 32 g/mol = 2 milhões de mols).",
        "Passo 3: Determinar a massa teórica (100% de rendimento) de H2SO4:\nMassa teórica = 2 × 10^6 mols × 98 g/mol = 196 × 10^6 g = 196 toneladas.",
        "Passo 4: Aplicar o rendimento global de 90%:\nMassa real = 196 t × 0,90 = 176,4 toneladas."
      ],
      coreConcept: "Equação global de reações consecutivas e cálculo de rendimento industrial.",
      trapWarning: "Esquecer de balancear os intermediários nas etapas sucessivas ou esquecer de aplicar o rendimento no final."
    },
    commonTraps: ["esquecer_de_aplicar_o_rendimento_global", "errar_o_balanceamento_da_equacao_global"],
    tags: ["reacoes_consecutivas", "acido_sulfurico", "rendimento", "quimica_industrial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-013",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Estequiometria",
    subtopic: "Emissão de CO2 por Combustão de Etanol vs Gasolina",
    difficulty: 4,
    estimatedTimeSeconds: 210,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A queima completa de biocombustíveis e combustíveis fósseis libera dióxido de carbono na atmosfera. Considere as seguintes equações termoquímicas de combustão completa:\n• Etanol: C2H5OH(l) + 3 O2(g) -> 2 CO2(g) + 3 H2O(l) (Massa molar C2H5OH = 46 g/mol)\n• Octano (gasolina): C8H18(l) + 25/2 O2(g) -> 8 CO2(g) + 9 H2O(l) (Massa molar C8H18 = 114 g/mol)\n(Massas molares: C = 12 g/mol, O = 16 g/mol, H = 1 g/mol; CO2 = 44 g/mol).",
      source: "Química Verde e Transição Energética"
    },
    prompt: "Para cada 100 g de etanol e cada 100 g de gasolina (octano) consumidos, as massas de CO2 emitidas diretamente na combustão são de, aproximadamente:",
    options: [
      { id: "a", text: "88 g de CO2 pelo etanol e 352 g de CO2 pela gasolina.", isCorrect: false, distractorRationale: "O estudante calculou a massa de CO2 referente a 1 mol de cada combustível, e não para 100 g." },
      { id: "b", text: "191 g de CO2 pelo etanol e 309 g de CO2 pela gasolina.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "44 g de CO2 pelo etanol e 88 g de CO2 pela gasolina.", isCorrect: false, distractorRationale: "O estudante considerou a produção de apenas 1 e 2 mols de CO2 respectivamente." },
      { id: "d", text: "200 g de CO2 pelo etanol e 800 g de CO2 pela gasolina.", isCorrect: false, distractorRationale: "O estudante multiplicou 100 g pelo número de carbonos de cada molécula." },
      { id: "e", text: "309 g de CO2 pelo etanol e 191 g de CO2 pela gasolina.", isCorrect: false, distractorRationale: "Valores invertidos entre etanol e gasolina." }
    ],
    detailedExplanation: {
      summary: "O cálculo estequiométrico por grama de combustível comprova que o etanol emite menos CO2 por massa queimada (191 g contra 309 g da gasolina), além da vantagem do ciclo fechado de carbono da cana.",
      stepByStep: [
        "Passo 1: Cálculo para o Etanol (C2H5OH):\n46 g de etanol geram 2 × 44 g = 88 g de CO2.\nPara 100 g de etanol: m(CO2) = (100 × 88) / 46 ≈ 191,3 g de CO2.",
        "Passo 2: Cálculo para o Octano (C8H18):\n114 g de octano geram 8 × 44 g = 352 g de CO2.\nPara 100 g de octano: m(CO2) = (100 × 352) / 114 ≈ 308,8 g de CO2.",
        "Passo 3: Comparação: 100 g de etanol produzem cerca de 191 g de CO2, enquanto 100 g de octano produzem cerca de 309 g de CO2."
      ],
      coreConcept: "Estequiometria de combustão, intensidade de carbono de combustíveis e química verde.",
      trapWarning: "Comparar mol a mol em vez de massa a massa (100 g de cada combustível, conforme exigido no enunciado)."
    },
    commonTraps: ["comparar_por_mol_em_vez_de_por_massa", "inverter_os_valores_dos_combustiveis"],
    tags: ["combustao", "etanol_vs_gasolina", "co2", "quimica_ambiental"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-014",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Titulação Ácido-Base e Teor de Ácido no Vinagre",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A legislação brasileira (MAPA) estabelece que o vinagre comercial para consumo deve conter um teor mínimo de 4,0% (m/v) de ácido acético (CH3COOH, massa molar = 60 g/mol). Em um ensaio de controle de qualidade, uma alíquota de 10,0 mL de determinada marca de vinagre foi titulada com solução de hidróxido de sódio (NaOH) 0,50 mol/L, consumindo exatamente 16,0 mL da base para atingir o ponto de viragem do indicador fenolftaleína. A reação é dada por:\nCH3COOH + NaOH -> CH3COONa + H2O",
      source: "Controle de Qualidade de Alimentos e Bebidas"
    },
    prompt: "Com base nos dados volumétricos da titulação, a concentração de ácido acético nessa amostra de vinagre (em % m/v) e sua conformidade com a legislação são, respectivamente:",
    options: [
      { id: "a", text: "2,4% (m/v) — desconforme (abaixo do padrão mínimo exigido).", isCorrect: false, distractorRationale: "O estudante esqueceu de multiplicar pela massa molar do ácido acético ou errou a conversão de volume." },
      { id: "b", text: "4,8% (m/v) — conforme (atende ao padrão mínimo legal).", isCorrect: true, distractorRationale: null },
      { id: "c", text: "8,0% (m/v) — conforme (excesso sem relevância).", isCorrect: false, distractorRationale: "O estudante considerou a massa de NaOH em vez de ácido acético." },
      { id: "d", text: "3,2% (m/v) — desconforme (adulterado).", isCorrect: false, distractorRationale: "O estudante dividiu por 15 mL em vez de 10 mL na alíquota." },
      { id: "e", text: "0,48% (m/v) — desconforme (diluição excessiva).", isCorrect: false, distractorRationale: "Erro na conversão de mililitros para litros gerando fator 10 de erro." }
    ],
    detailedExplanation: {
      summary: "A titulação revela 0,008 mol de ácido acético em 10 mL, totalizando 48 g/L (4,8% m/v), acima dos 4,0% exigidos pelo MAPA.",
      stepByStep: [
        "Passo 1: Calcular os mols de NaOH consumidos no ponto de equivalência:\nn(NaOH) = C × V = 0,50 mol/L × 0,016 L = 0,008 mol de NaOH.",
        "Passo 2: Pela proporção estequiométrica 1:1, n(CH3COOH) = 0,008 mol presentes na alíquota de 10,0 mL.",
        "Passo 3: Calcular a massa de ácido acético na alíquota:\nmassa = n × M = 0,008 mol × 60 g/mol = 0,48 g de CH3COOH em 10,0 mL de vinagre.",
        "Passo 4: Determinar a concentração em porcentagem massa/volume (% m/v = g em 100 mL):\nSe há 0,48 g em 10 mL, em 100 mL há 0,48 × 10 = 4,8 g -> 4,8% (m/v).",
        "Passo 5: Como 4,8% ≥ 4,0%, a amostra está CONFORME a legislação."
      ],
      coreConcept: "Titulação volumétrica ácido-base, estequiometria em soluções e porcentagem massa/volume (% m/v).",
      trapWarning: "Errar a conversão entre o volume da alíquota (10 mL) e a base de cálculo percentual (100 mL)."
    },
    commonTraps: ["esquecer_de_converter_para_100_ml", "errar_massa_molar_do_acido_acetico"],
    tags: ["titulacao", "acido_base", "vinagre", "controle_de_qualidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-015",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Reações em Airbags Automotivos",
    difficulty: 4,
    estimatedTimeSeconds: 190,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Os airbags automotivos inflam em milissegundos devido à rápida decomposição térmica do propelente sólido azida de sódio (NaN3), acionada por uma centelha elétrica:\n2 NaN3(s) -> 2 Na(s) + 3 N2(g)\nO sódio metálico (Na) altamente reativo é imediatamente neutralizado por oxidantes adicionados à bolsa inflável. Considere que o volume do airbag inflado de um veículo de passeio é de 67,2 L de gás nitrogênio (N2) medidos nas CNTP (onde o volume molar é 22,4 L/mol). (Massas molares: Na = 23 g/mol, N = 14 g/mol; NaN3 = 65 g/mol).",
      source: "Segurança Veicular e Química Forense"
    },
    prompt: "A massa mínima de azida de sódio (NaN3) necessária para inflar completamente esse airbag de 67,2 L é igual a:",
    options: [
      { id: "a", text: "65 g", isCorrect: false, distractorRationale: "O estudante calculou a massa de 1 mol de NaN3 sem considerar a proporção de mols de N2 necessária." },
      { id: "b", text: "130 g", isCorrect: true, distractorRationale: null },
      { id: "c", text: "195 g", isCorrect: false, distractorRationale: "O estudante considerou que 1 mol de NaN3 produz 1 mol de N2 (3 mols de NaN3 para 3 mols de gás)." },
      { id: "d", text: "260 g", isCorrect: false, distractorRationale: "O estudante dobrou a proporção estequiométrica incorretamente." },
      { id: "e", text: "390 g", isCorrect: false, distractorRationale: "O estudante multiplicou por 6." }
    ],
    detailedExplanation: {
      summary: "Para gerar 67,2 L de N2 (3 mols de gás) nas CNTP, são necessários exatamente 2 mols de NaN3, totalizando 130 g.",
      stepByStep: [
        "Passo 1: Calcular os mols de N2 necessários para preencher o volume de 67,2 L nas CNTP:\nn(N2) = V / V_molar = 67,2 L / 22,4 L/mol = 3 mols de N2.",
        "Passo 2: Analisar a proporção estequiométrica da equação de decomposição:\n2 mols de NaN3 produzem 3 mols de N2.",
        "Passo 3: Como são necessários exatamente 3 mols de N2, a quantidade necessária de azida é exatamente 2 mols de NaN3.",
        "Passo 4: Calcular a massa de NaN3:\nmassa = n × M = 2 mols × 65 g/mol = 130 g de azida de sódio."
      ],
      coreConcept: "Estequiometria com gases nas CNTP e proporções molares em reações de decomposição rápida.",
      trapWarning: "Supor proporção 1:1 entre NaN3 e N2, esquecendo o coeficiente 2 para 3 da equação balanceada."
    },
    commonTraps: ["ignorar_a_proporcao_2_para_3", "errar_o_calculo_de_mols_de_gas"],
    tags: ["airbag", "azida_de_sodio", "volume_molar", "seguranca_veicular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-016",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Siderurgia e Pureza de Minério de Ferro",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No alto-forno de uma usina siderúrgica, o ferro metálico (Fe) é obtido pela redução do óxido de ferro III (hematita, Fe2O3) com monóxido de carbono (CO) gerado pelo carvão coque:\nFe2O3(s) + 3 CO(g) -> 2 Fe(s) + 3 CO2(g)\nUma indústria processa 2,0 toneladas de minério de hematita que apresenta 80% de pureza em Fe2O3. (Massas molares: Fe = 56 g/mol, O = 16 g/mol; Fe2O3 = 160 g/mol).",
      source: "Metalurgia e Siderurgia Básica"
    },
    prompt: "Admitindo um rendimento de 100% na redução química, a massa de ferro metálico (Fe) produzida a partir dessa carga de minério é de:",
    options: [
      { id: "a", text: "0,56 tonelada", isCorrect: false, distractorRationale: "O estudante calculou a produção de apenas 1 mol de Fe em vez de 2." },
      { id: "b", text: "1,12 tonelada", isCorrect: true, distractorRationale: null },
      { id: "c", text: "1,40 tonelada", isCorrect: false, distractorRationale: "O estudante calculou a massa de ferro considerando 100% de pureza do minério (sem descontar a ganga)." },
      { id: "d", text: "1,60 tonelada", isCorrect: false, distractorRationale: "Essa é a massa pura de Fe2O3 presente no minério (80% de 2,0 t), e não a massa de ferro metálico." },
      { id: "e", text: "2,24 toneladas", isCorrect: false, distractorRationale: "O estudante multiplicou por dois de forma duplicada." }
    ],
    detailedExplanation: {
      summary: "A pureza de 80% resulta em 1,60 t de Fe2O3 puro. A proporção estequiométrica (160 g de Fe2O3 para 112 g de Fe) produz 1,12 tonelada de ferro metálico.",
      stepByStep: [
        "Passo 1: Aplicar a pureza ao minério de partida:\nMassa pura de Fe2O3 = 80% de 2,0 toneladas = 1,60 tonelada = 1.600 kg.",
        "Passo 2: Calcular a relação molar e de massas molares da reação:\n1 mol de Fe2O3 (160 g) produz 2 mols de Fe (2 × 56 g = 112 g).",
        "Passo 3: Montar a regra de três estequiométrica:\n160 kg de Fe2O3 ------ 112 kg de Fe\n1.600 kg de Fe2O3 ---- x\nx = (1.600 × 112) / 160 = 10 × 112 = 1.120 kg = 1,12 tonelada de Fe."
      ],
      coreConcept: "Estequiometria com pureza de reagentes minerais e siderurgia.",
      trapWarning: "Calcular a estequiometria diretamente sobre as 2,0 toneladas brutas sem descontar os 20% de impurezas (ganga mineral)."
    },
    commonTraps: ["esquecer_de_descontar_a_pureza", "esquecer_do_coeficiente_2_do_ferro_metalico"],
    tags: ["siderurgia", "hematita", "pureza", "alto_forno"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-017",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Constante de Avogadro e Toxicologia do Mercúrio",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O garimpo ilegal em bacias hidrográficas amazônicas contamina os rios com mercúrio líquido (Hg), que é biometilado por bactérias formando metilmercúrio bioacumulativo. Em uma comunidade ribeirinha, um exame revelou que um peixe continha 2,0 mg de mercúrio por quilograma de pescado. Uma pessoa ingeriu uma porção de 500 g desse peixe contaminado.\n(Dados: Massa molar do Hg = 200 g/mol; Constante de Avogadro = 6,0 × 10^23 átomos/mol).",
      source: "Fiocruz / Toxicologia Ambiental"
    },
    prompt: "O número de átomos de mercúrio ingeridos por essa pessoa ao consumir essa refeição é de:",
    options: [
      { id: "a", text: "3,0 × 10^18 átomos", isCorrect: true, distractorRationale: null },
      { id: "b", text: "6,0 × 10^18 átomos", isCorrect: false, distractorRationale: "O estudante calculou para 1 kg de peixe consumido em vez de 500 g." },
      { id: "c", text: "3,0 × 10^21 átomos", isCorrect: false, distractorRationale: "O estudante errou a conversão de miligramas para gramas (usou 10^-3 em vez de considerar a base completa)." },
      { id: "d", text: "1,5 × 10^20 átomos", isCorrect: false, distractorRationale: "Erro na divisão por 200 g/mol." },
      { id: "e", text: "6,0 × 10^23 átomos", isCorrect: false, distractorRationale: "Supôs que foi ingerido exatamente 1 mol inteiro de mercúrio (200 gramas puras)." }
    ],
    detailedExplanation: {
      summary: "500 g de peixe contêm 1,0 mg de Hg, o que equivale a 5 × 10^-6 mol, resultando em 3,0 × 10^18 átomos ingeridos.",
      stepByStep: [
        "Passo 1: Calcular a massa de mercúrio ingerida na porção:\nSe há 2,0 mg em 1.000 g (1 kg) de peixe, em 500 g há:\nmassa = 2,0 mg × (500 / 1000) = 1,0 mg = 1,0 × 10^-3 g de Hg.",
        "Passo 2: Determinar o número de mols de átomos de Hg:\nn = massa / M = (1,0 × 10^-3 g) / (200 g/mol) = 5,0 × 10^-6 mol de Hg.",
        "Passo 3: Multiplicar pelo número de Avogadro (6,0 × 10^23 átomos/mol):\nN = (5,0 × 10^-6 mol) × (6,0 × 10^23 átomos/mol) = 30 × 10^17 = 3,0 × 10^18 átomos de mercúrio."
      ],
      coreConcept: "Constante de Avogadro, conversão de unidades de massa (mg para g) e toxicologia ambiental.",
      trapWarning: "Esquecer de converter miligramas (mg) para gramas (g) antes de dividir pela massa molar."
    },
    commonTraps: ["esquecer_conversao_de_mg_para_g", "usar_1_kg_em_vez_da_porcao_de_500g"],
    tags: ["avogadro", "mercurio", "toxicologia", "unidades_de_massa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-018",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Dessulfurização de Gases e Neutralização de SO2",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para mitigar a chuva ácida, termelétricas a carvão mineral utilizam filtros úmidos nos quais os gases de chaminé contendo dióxido de enxofre (SO2) reagem com calcário moído (carbonato de cálcio, CaCO3) em presença de oxigênio, produzindo sulfato de cálcio sólido (gesso, CaSO4), segundo a reação global balanceada:\nCaCO3(s) + SO2(g) + 1/2 O2(g) -> CaSO4(s) + CO2(g)\n(Massas molares: Ca = 40 g/mol, C = 12 g/mol, O = 16 g/mol, S = 32 g/mol; CaCO3 = 100 g/mol, SO2 = 64 g/mol).",
      source: "Engenharia Sanitária e Ambiental"
    },
    prompt: "Para capturar e neutralizar 3,2 toneladas de SO2 emitidas diariamente por uma usina, a massa mínima de carbonato de cálcio (CaCO3) de pureza 100% que deve ser consumida diariamente no sistema é de:",
    options: [
      { id: "a", text: "2,0 toneladas", isCorrect: false, distractorRationale: "O estudante inverteu a razão das massas molares: 3,2 × (64/100) = 2,04 t." },
      { id: "b", text: "3,2 toneladas", isCorrect: false, distractorRationale: "Supôs relação de massa 1:1 igualando as massas dos compostos." },
      { id: "c", text: "5,0 toneladas", isCorrect: true, distractorRationale: null },
      { id: "d", text: "6,4 toneladas", isCorrect: false, distractorRationale: "O estudante dobrou a quantidade por confusão com o coeficiente do oxigênio." },
      { id: "e", text: "10,0 toneladas", isCorrect: false, distractorRationale: "O estudante multiplicou por dois desnecessariamente." }
    ],
    detailedExplanation: {
      summary: "A estequiometria 1:1 em mols (100 g de CaCO3 para 64 g de SO2) indica que 3,2 toneladas de SO2 requerem exatamente 5,0 toneladas de CaCO3.",
      stepByStep: [
        "Passo 1: Calcular os mols de SO2 a neutralizar:\n3,2 toneladas = 3,2 × 10^6 g de SO2.\nn(SO2) = (3,2 × 10^6 g) / (64 g/mol) = 5,0 × 10^4 mols de SO2.",
        "Passo 2: Pela reação, 1 mol de CaCO3 reage com 1 mol de SO2. Logo, são necessários 5,0 × 10^4 mols de CaCO3.",
        "Passo 3: Calcular a massa de CaCO3 necessária:\nMassa = (5,0 × 10^4 mols) × (100 g/mol) = 5,0 × 10^6 g = 5,0 toneladas de CaCO3."
      ],
      coreConcept: "Controle ambiental de emissões gasosas e estequiometria de neutralização de poluentes ácidos.",
      trapWarning: "Achar que proporção molar 1:1 significa proporção mássica 1:1 (64 g de SO2 reagem com 100 g de CaCO3)."
    },
    commonTraps: ["confundir_proporcao_em_mols_com_proporcao_em_gramas", "inverter_a_divisao_estequiometrica"],
    tags: ["chuva_acida", "so2", "calcario", "dessulfurizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-019",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Eletrólise Ígnea e Leis de Faraday na Produção de Alumínio",
    difficulty: 4,
    estimatedTimeSeconds: 200,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na indústria metalúrgica, o alumínio metálico (Al) é obtido pela eletrólise ígnea da alumina dissolvida em criolita fundida (Processo Hall-Héroult). A semirreação de redução catódica é expressa por:\nAl3+ + 3 e- -> Al(s)\nConsidere a Constante de Faraday igual a 96.500 C/mol de elétrons e a massa molar do Al = 27 g/mol. Uma cuba eletrolítica opera sob uma corrente elétrica contínua e constante de 9.650 A durante um intervalo de 10.000 segundos.",
      source: "Eletroquímica e Metalurgia Extrativa"
    },
    prompt: "A massa teórica de alumínio metálico produzida nessa cuba durante esse intervalo de tempo é igual a:",
    options: [
      { id: "a", text: "9,0 kg", isCorrect: true, distractorRationale: null },
      { id: "b", text: "27,0 kg", isCorrect: false, distractorRationale: "O estudante esqueceu de dividir por 3 (número de elétrons transferidos para reduzir Al3+ a Al)." },
      { id: "c", text: "81,0 kg", isCorrect: false, distractorRationale: "O estudante multiplicou por 3 em vez de dividir." },
      { id: "d", text: "2,7 kg", isCorrect: false, distractorRationale: "Erro na conversão de gramas para quilogramas por fator 10." },
      { id: "e", text: "90,0 kg", isCorrect: false, distractorRationale: "Erro de casas decimais na multiplicação da carga elétrica." }
    ],
    detailedExplanation: {
      summary: "A carga de 9,65 × 10^7 C corresponde a 1.000 mols de elétrons. Como cada mol de Al requer 3 mols de e-, formam-se 333,3 mols de Al, totalizando 9,0 kg.",
      stepByStep: [
        "Passo 1: Calcular a carga elétrica total transportada (Q = i × t):\nQ = 9.650 A × 10.000 s = 96.500.000 C = 9,65 × 10^7 C.",
        "Passo 2: Determinar o número de mols de elétrons envolvidos:\nn(e-) = Q / F = 96.500.000 C / (96.500 C/mol de e-) = 1.000 mols de elétrons.",
        "Passo 3: Pela semirreação catódica, 3 mols de elétrons reduzem 1 mol de Al3+ a 1 mol de Al metálico:\nn(Al) = 1.000 / 3 ≈ 333,33 mols de Al.",
        "Passo 4: Calcular a massa de alumínio:\nMassa = n(Al) × M = (1.000 / 3) mols × 27 g/mol = 1.000 × 9 g = 9.000 g = 9,0 kg."
      ],
      coreConcept: "Leis de Faraday na eletrólise, estequiometria eletroquímica e carga elétrica.",
      trapWarning: "Esquecer que o cátion alumínio é trivalente (Al3+), exigindo 3 mols de elétrons para cada mol de alumínio reduzido."
    },
    commonTraps: ["esquecer_da_trivalencia_do_aluminio", "errar_unidade_de_tempo_em_segundos"],
    tags: ["eletrolise", "faraday", "aluminio", "estequiometria_eletroquimica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ESTEQ-020",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Estequiometria",
    subtopic: "Determinação de Fórmula Mínima por Análise de Combustão",
    difficulty: 4,
    estimatedTimeSeconds: 210,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A análise elementar por combustão completa de uma amostra de 0,90 g de um carboidrato simples composto exclusivamente por carbono, hidrogênio e oxigênio (CxHyOz) gerou exatamente 1,32 g de dióxido de carbono (CO2) e 0,54 g de água (H2O).\n(Massas molares: C = 12 g/mol, H = 1 g/mol, O = 16 g/mol; CO2 = 44 g/mol, H2O = 18 g/mol).",
      source: "Química Orgânica e Bioquímica Estrutural"
    },
    prompt: "Com base nas massas dos produtos recolhidos na combustão, a fórmula mínima (empírica) desse carboidrato é expressa por:",
    options: [
      { id: "a", text: "CHO", isCorrect: false, distractorRationale: "O estudante assumiu proporção equimolar 1:1:1 sem calcular os mols de hidrogênio da água." },
      { id: "b", text: "CH2O", isCorrect: true, distractorRationale: null },
      { id: "c", text: "C2H4O", isCorrect: false, distractorRationale: "Erro na determinação da massa residual de oxigênio." },
      { id: "d", text: "C3H6O2", isCorrect: false, distractorRationale: "O estudante não simplificou a proporção mínima de números inteiros." },
      { id: "e", text: "C6H12O6", isCorrect: false, distractorRationale: "Essa é uma possível fórmula molecular (como glicose ou frutose), mas o enunciado solicitou expressamente a fórmula MÍNIMA (empírica simplificada)." }
    ],
    detailedExplanation: {
      summary: "A massa dos produtos determina 0,03 mol de C, 0,06 mol de H e 0,03 mol de O, resultando na proporção molar mínima 1:2:1 (CH2O).",
      stepByStep: [
        "Passo 1: Calcular a massa de Carbono a partir do CO2:\nEm 44 g de CO2 há 12 g de C.\nEm 1,32 g de CO2 há: m(C) = (1,32 × 12) / 44 = 0,36 g de Carbono.\nn(C) = 0,36 / 12 = 0,03 mol de C.",
        "Passo 2: Calcular a massa de Hidrogênio a partir do H2O:\nEm 18 g de H2O há 2 g de H.\nEm 0,54 g de H2O há: m(H) = (0,54 × 2) / 18 = 0,06 g de Hidrogênio.\nn(H) = 0,06 / 1 = 0,06 mol de H.",
        "Passo 3: Calcular a massa de Oxigênio por diferença na amostra de 0,90 g:\nm(O) = 0,90 g - [m(C) + m(H)] = 0,90 - (0,36 + 0,06) = 0,90 - 0,42 = 0,48 g de Oxigênio.\nn(O) = 0,48 / 16 = 0,03 mol de O.",
        "Passo 4: Dividir todos os números de mols pelo menor valor (0,03):\nC: 0,03 / 0,03 = 1\nH: 0,06 / 0,03 = 2\nO: 0,03 / 0,03 = 1.",
        "Passo 5: Conclusão: Fórmula Mínima = CH2O."
      ],
      coreConcept: "Determinação de fórmula mínima por análise de combustão orgânica.",
      trapWarning: "Marcar a fórmula molecular C6H12O6 (glicose). O enunciado solicita a fórmula MÍNIMA (empírica), que é a proporção inteira irredutível (CH2O)."
    },
    commonTraps: ["confundir_formula_minima_com_molecular", "esquecer_de_calcular_o_oxigenio_por_diferenca"],
    tags: ["formula_minima", "analise_elementar", "combustao", "carboidratos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

