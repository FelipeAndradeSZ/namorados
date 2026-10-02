/**
 * Banco de Questões ENEM — Ciências da Natureza
 * Módulo: Equilíbrio Ácido-Base, Hidrólise Salina e Soluções Tampão
 * 
 * 25 Questões Inéditas Rigorosamente Alinhadas à Matriz do INEP
 * Validação: 5 alternativas (a-e), 1 correta, justificativa para cada distrator,
 * resolução pedagógica passo a passo e foco nos pilares da TRI.
 * ZERO termos de viagem.
 */

export const QUESTIONS_EQUILIBRIO_ACIDO_BASE_TAMPAO = [
  {
    id: "NAT-EAC-001",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Autoionização da Água e Escala Logarítmica de pH",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A água pura sofre um processo de autoionização endotérmico representado pela equação:\n2 H2O (l) ⇌ H3O+ (aq) + OH- (aq)\n\nA 25 °C, o produto iônico da água é Kw = 1,0 x 10^-14. Uma análise de efluente industrial aquoso revelou uma concentração de íons hidróxido [OH-] igual a 1,0 x 10^-4 mol/L a 25 °C.",
      source: "Fundamentos de Físico-Química e Controle Ambiental"
    },
    prompt: "Com base nesses dados e na temperatura de 25 °C, o potencial hidrogeniônico (pH) desse efluente e o seu caráter ácido-base são, respectivamente:",
    options: [
      { id: "a", text: "10 e básico.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "4 e ácido.", isCorrect: false, distractorRationale: "O valor 4 corresponde ao pOH (-log[OH-]), não ao pH. Para encontrar o pH a 25 °C, subtrai-se 14 - 4 = 10." },
      { id: "c", text: "10 e ácido.", isCorrect: false, distractorRationale: "pH igual a 10 a 25 °C indica predominância de íons OH- sobre H+, caracterizando um meio alcalino (básico), e não ácido." },
      { id: "d", text: "4 e básico.", isCorrect: false, distractorRationale: "Confunde o valor numérico do pOH com o pH; pH 4 seria ácido." },
      { id: "e", text: "7 e neutro.", isCorrect: false, distractorRationale: "Para ser neutro a 25 °C, a concentração de OH- deveria ser 1,0 x 10^-7 mol/L." }
    ],
    detailedExplanation: {
      summary: "A 25 °C, temos Kw = [H3O+] · [OH-] = 1,0 x 10^-14, o que implica que pH + pOH = 14. Dado [OH-] = 1,0 x 10^-4 mol/L, o pOH = -log(10^-4) = 4. Portanto, pH = 14 - 4 = 10. Como pH > 7, o meio é básico.",
      stepByStep: [
        "1. Identificar o valor fornecido: [OH-] = 1,0 x 10^-4 mol/L.",
        "2. Calcular o pOH: pOH = -log[OH-] = -log(1,0 x 10^-4) = 4.",
        "3. Aplicar a relação Kw a 25 °C: pH + pOH = 14.",
        "4. Isolar o pH: pH = 14 - pOH = 14 - 4 = 10.",
        "5. Determinar o caráter: Como pH = 10 > 7 a 25 °C, o efluente é alcalino (básico)."
      ],
      coreConcept: "A 25 °C, a soma pH + pOH é sempre 14. Soluções com pH > 7 são básicas ([OH-] > [H+]).",
      trapWarning: "Cuidado para não calcular o pOH e marcá-lo diretamente como se fosse o pH solicitado no enunciado."
    },
    commonTraps: ["Confundir pOH com pH ao usar a concentração de hidróxido"],
    tags: ["autoionizacao", "pH", "pOH", "fisico-quimica"]
  },
  {
    id: "NAT-EAC-002",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Influência da Temperatura no Produto Iônico da Água",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A autoionização da água é um processo endotérmico (ΔH > 0):\n2 H2O (l) ⇌ H3O+ (aq) + OH- (aq)\n\nÀ temperatura fisiológica de 37 °C, o valor do produto iônico da água aumenta para Kw = 2,4 x 10^-14, o que acarreta um valor de pKw ≈ 13,62.",
      source: "Bioquímica Médica e Fisiologia Celular"
    },
    prompt: "Em uma amostra de água pura mantida a 37 °C, conclui-se corretamente que:",
    options: [
      { id: "a", text: "o pH da água pura é menor que 7,0, mas a água permanece rigorosamente neutra porque [H3O+] = [OH-].", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a água torna-se ácida, pois o aumento de temperatura desloca o equilíbrio no sentido dos reagentes.", isCorrect: false, distractorRationale: "Sendo endotérmica, a elevação térmica desloca para os produtos (direita), e a água pura nunca é ácida pois as concentrações de H+ e OH- continuam rigorosamente iguais." },
      { id: "c", text: "o pH da água pura mantém-se rigorosamente fixado em 7,0, pois Kw não depende da temperatura.", isCorrect: false, distractorRationale: "Toda constante de equilíbrio depende da temperatura; Kw varia com a temperatura." },
      { id: "d", text: "o meio torna-se alcalino, pois a elevação de temperatura favorece exclusivamente a formação de OH-.", isCorrect: false, distractorRationale: "A estequiometria 1:1 da autoionização produz quantidades idênticas de H3O+ e OH-." },
      { id: "e", text: "o pOH torna-se maior que o pH, configurando uma solução condutora ácida.", isCorrect: false, distractorRationale: "Na água pura, [H3O+] = [OH-], logo pH = pOH = pKw / 2 ≈ 6,81." }
    ],
    detailedExplanation: {
      summary: "Neutralidade química significa [H3O+] = [OH-]. Em água pura a 37 °C, Kw = 2,4 x 10^-14. Logo, [H3O+] = [OH-] = √(2,4 x 10^-14) ≈ 1,55 x 10^-7 mol/L. Isso fornece pH = pOH = 6,81. Como pH = pOH, o meio é absolutamente neutro, demonstrando que a neutralidade a 37 °C ocorre em pH 6,81 e não 7,0.",
      stepByStep: [
        "1. Analisar a reação endotérmica: Aquecer desloca para a direita, aumentando Kw.",
        "2. Como parte de água pura, cada molécula ionizada gera 1 H3O+ para cada 1 OH-.",
        "3. Portanto, [H3O+] = [OH-] em qualquer temperatura na água pura.",
        "4. A 37 °C, [H3O+] = [OH-] = √Kw > 10^-7 mol/L, o que resulta em pH < 7,0.",
        "5. O critério de neutralidade não é 'pH = 7', mas sim '[H3O+] = [OH-]'. Portanto, a água permanece neutra."
      ],
      coreConcept: "A neutralidade química é definida por [H3O+] = [OH-]. O valor de pH = 7 para neutralidade é válido apenas a 25 °C.",
      trapWarning: "Cuidado com o dogma de que 'pH menor que 7 é sempre ácido'; isso só é verdade a 25 °C."
    },
    commonTraps: ["Achar que pH < 7 sempre significa que a solução é ácida, ignorando a dependência de Kw com a temperatura"],
    tags: ["Kw", "temperatura", "neutralidade", "Le Chatelier"]
  },
  {
    id: "NAT-EAC-003",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Força de Ácidos e Constante de Ionização (Ka)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A tabela a seguir apresenta os valores das constantes de ionização ácida (Ka) em solução aquosa a 25 °C para três ácidos monopróticos comuns em laboratório:\n\n1. Ácido fluorídrico (HF): Ka = 6,6 x 10^-4\n2. Ácido acético (CH3COOH): Ka = 1,8 x 10^-5\n3. Ácido cianídrico (HCN): Ka = 4,9 x 10^-10",
      source: "Química Inorgânica e Equilíbrio Iônico"
    },
    prompt: "Comparando soluções aquosas desses três ácidos sob mesma concentração molar (ex.: 0,10 mol/L) e mesma temperatura, assinale a conclusão correta:",
    options: [
      { id: "a", text: "A solução de HF apresenta a maior condutividade elétrica e o menor pH entre as três amostras.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "A solução de HCN possui maior concentração de íons H3O+ livres que a solução de CH3COOH.", isCorrect: false, distractorRationale: "O HCN tem o menor Ka (10^-10), sendo o ácido mais fraco e gerando a menor concentração de íons livres." },
      { id: "c", text: "O ácido acético é um ácido mais forte que o ácido fluorídrico por conter átomos de carbono em sua cadeia.", isCorrect: false, distractorRationale: "A força ácida é dada pela magnitude de Ka; o Ka do HF (10^-4) é superior ao do CH3COOH (10^-5)." },
      { id: "d", text: "Todas as três soluções apresentam rigorosamente o mesmo pH, pois todos são ácidos monopróticos de mesma molaridade.", isCorrect: false, distractorRationale: "Ácidos fracos possuem diferentes graus de ionização determinados por seus respectivos valores de Ka." },
      { id: "e", text: "A base conjugada do HF (íon fluoreto, F-) é uma base mais forte do que a base conjugada do HCN (íon cianeto, CN-).", isCorrect: false, distractorRationale: "Quanto mais fraco o ácido, mais forte é sua base conjugada (Kb = Kw/Ka). Como HCN é mais fraco, CN- é uma base mais forte que F-." }
    ],
    detailedExplanation: {
      summary: "Quanto maior o Ka, maior a extensão da ionização ácida no equilíbrio, maior a concentração de íons H3O+ e ânions formados, menor o pH e maior a condutividade elétrica da solução eletrolítica. O HF possui o maior Ka (6,6 x 10^-4), ionizando-se mais que os demais.",
      stepByStep: [
        "1. Ordem de Ka: Ka(HF) > Ka(CH3COOH) > Ka(HCN).",
        "2. Como as concentrações são idênticas, a ionização relativa segue a ordem de Ka.",
        "3. Maior ionização gera maior concentração de íons livres [H3O+] e [A-].",
        "4. Maior concentração iônica confere maior condutividade elétrica.",
        "5. Maior [H3O+] resulta em menor valor de pH (-log[H3O+]).",
        "6. Portanto, a solução de HF tem maior condutividade e menor pH."
      ],
      coreConcept: "A força de um ácido é quantificada por seu Ka. Maior Ka = mais íons = menor pH = maior condutibilidade elétrica.",
      trapWarning: "Lembre-se da escala invertida do pH: quanto mais ácido (maior [H+]), menor é o valor numérico do pH."
    },
    commonTraps: ["Achar que ácidos de mesma concentração molar sempre geram o mesmo pH"],
    tags: ["Ka", "forca-acida", "condutividade", "pH"]
  },
  {
    id: "NAT-EAC-004",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Lei da Diluição de Ostwald e Grau de Ionização",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A Lei da Diluição de Ostwald estabelece a relação entre a constante de ionização (Ka), o grau de ionização (α) e a concentração molar inicial (M) de um monoácido fraco: Ka ≈ M · α^2 (para α << 1).\n\nUm químico preparou uma solução aquosa de ácido acético (Ka = 1,8 x 10^-5 a 25 °C) com concentração 0,05 mol/L.",
      source: "Físico-Química dos Equilíbrios Iônicos"
    },
    prompt: "Ao diluir essa solução com água destilada, reduzindo a concentração molar do ácido para 0,005 mol/L sob mesma temperatura, observa-se que:",
    options: [
      { id: "a", text: "o grau de ionização (α) do ácido aumenta, embora a concentração total de íons H+ na solução diminua.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o grau de ionização (α) diminui, provocando uma redução acentuada do pH da solução.", isCorrect: false, distractorRationale: "Pela Lei de Ostwald (α ≈ √(Ka/M)), ao diminuir M, o grau de ionização α aumenta." },
      { id: "c", text: "a constante Ka sofre um decréscimo de 10 vezes em razão do acréscimo de solvente.", isCorrect: false, distractorRationale: "Constantes de equilíbrio só se alteram com mudanças de temperatura, não com diluição." },
      { id: "d", text: "a concentração de H+ aumenta exponencialmente devido à dissociação induzida pela água.", isCorrect: false, distractorRationale: "A diluição reduz a concentração volumétrica de soluto e de H+, elevando o pH." },
      { id: "e", text: "o pH da solução diminui, tornando-a mais ácida do que a solução concentrada original.", isCorrect: false, distractorRationale: "Adicionar água a qualquer solução ácida dilui os íons H+, aproximando o pH de 7 (o pH aumenta)." }
    ],
    detailedExplanation: {
      summary: "Pela Lei da Diluição de Ostwald, para eletrólitos fracos com α muito pequeno, temos Ka ≈ M · α^2, o que nos dá α ≈ √(Ka / M). Quando diluímos a solução (diminuindo M de 0,05 para 0,005 mol/L), o denominador diminui, fazendo com que o grau de ionização α aumente. No entanto, como o volume aumentou proporcionalmente mais do que o número absoluto de moléculas ionizadas, a concentração de H+ por litro diminui ([H+] = M · α), fazendo o pH subir.",
      stepByStep: [
        "1. Analisar a expressão de Ostwald: α ≈ √(Ka / M).",
        "2. Como M diminuiu 10 vezes, α aumenta por um fator de √10 ≈ 3,16 vezes.",
        "3. Calcular o efeito em [H+]: [H+] = M · α. Se M cai por 10 e α cresce por √10, [H+] cai por um fator de 10 / √10 = √10.",
        "4. Como [H+] diminui, o pH = -log[H+] aumenta (a solução fica menos ácida).",
        "5. Conclusão: O grau de ionização (porcentagem de moléculas dissociadas) aumentou, mas a concentração final de íons H+ diminuiu."
      ],
      coreConcept: "A diluição de um ácido fraco aumenta seu grau de ionização (α), mas reduz a concentração efetiva de íons [H+], elevando o pH em direção a 7.",
      trapWarning: "Não confunda 'grau de ionização' (fração/porcentagem de moléculas ionizadas) com 'concentração de H+' em mol/L."
    },
    commonTraps: ["Achar que a diluição altera o valor da constante Ka", "Achar que aumento de alfa significa aumento de concentração de H+"],
    tags: ["Ostwald", "diluicao", "grau-ionizacao", "equilibrio-ionico"]
  },
  {
    id: "NAT-EAC-005",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Hidrólise Salina e pH de Soluções Aquosas",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em estações de tratamento de água e no cultivo agrícola, o controle do pH é essencial. Quatro sais inorgânicos foram dissolvidos separadamente em água destilada (pH 7,0 a 25 °C):\n\nI. Cloreto de sódio (NaCl)\nII. Bicarbonato de sódio (NaHCO3)\nIII. Cloreto de amônio (NH4Cl)\nIV. Acetato de sódio (CH3COONa)",
      source: "Tratamento de Água e Química Agrícola"
    },
    prompt: "Qual desses sais, ao ser dissolvido em água, produz hidrólise do cátion, resultando em uma solução de caráter ácido (pH < 7 a 25 °C)?",
    options: [
      { id: "a", text: "Cloreto de amônio (NH4Cl).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Cloreto de sódio (NaCl).", isCorrect: false, distractorRationale: "O NaCl deriva de base forte (NaOH) e ácido forte (HCl); nenhum íon sofre hidrólise apreciável, resultando em pH neutro (7,0)." },
      { id: "c", text: "Acetato de sódio (CH3COONa).", isCorrect: false, distractorRationale: "O íon acetato (base conjugada de ácido fraco) sofre hidrólise aniônica gerando OH-, tornando o meio básico (pH > 7)." },
      { id: "d", text: "Bicarbonato de sódio (NaHCO3).", isCorrect: false, distractorRationale: "A hidrólise do ânion bicarbonato (HCO3- + H2O ⇌ H2CO3 + OH-) predomina sobre sua ionização ácida, conferindo caráter básico." },
      { id: "e", text: "Nenhum deles, pois todo sal neutro origina soluções de pH estritamente igual a 7,0.", isCorrect: false, distractorRationale: "Sais formados por ácidos ou bases fracos sofrem hidrólise salina, alterando significativamente o pH da água." }
    ],
    detailedExplanation: {
      summary: "O cloreto de amônio (NH4Cl) é gerado pela neutralização de uma base fraca (NH3 / NH4OH) com um ácido forte (HCl). Em água, dissocia-se em NH4+ e Cl-. O íon NH4+, sendo o ácido conjugado de uma base fraca, hidrolisa a água:\nNH4+ (aq) + H2O (l) ⇌ NH3 (aq) + H3O+ (aq)\nA liberação de íons H3O+ torna a solução ácida (pH < 7).",
      stepByStep: [
        "1. Identificar a origem dos íons do NH4Cl: cátion da base fraca NH4OH e ânion do ácido forte HCl.",
        "2. Ânions de ácidos fortes (Cl-) são bases conjugadas extremamente fracas e não reagem com a água.",
        "3. Cátions de bases fracas (NH4+) reagem com a água (hidrólise catiônica): NH4+ + H2O ⇌ NH3 + H3O+.",
        "4. A produção de H3O+ em excesso acarreta pH < 7 (caráter ácido).",
        "5. Conclui-se que o NH4Cl é o sal que produz solução aquosa ácida."
      ],
      coreConcept: "Sal de ácido forte + base fraca sofre hidrólise do cátion, gerando excesso de H3O+ e solução ácida (pH < 7).",
      trapWarning: "Cuidado com o senso comum de que 'sal é sempre neutro'. Somente sais de ácido forte e base forte geram soluções neutras."
    },
    commonTraps: ["Acreditar que todo sal origina solução neutra de pH 7"],
    tags: ["hidrolise-salina", "sais", "pH", "acido-base"]
  },
  {
    id: "NAT-EAC-006",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Calagem de Solos e Correção de Acidez",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No Cerrado brasileiro, muitos solos são naturalmente ácidos e apresentam teores tóxicos de íons alumínio (Al3+), o que prejudica o desenvolvimento das raízes de culturas agrícolas como a soja e o milho. Para mitigar esse problema, os agricultores realizam a prática da calagem, que consiste na incorporação de calcário agrícola (composto majoritariamente por carbonato de cálcio, CaCO3, e carbonato de magnésio, MgCO3) à camada arável do solo.",
      source: "Química e Manejo de Solos Tropicais"
    },
    prompt: "O mecanismo químico pelo qual a aplicação de calcário neutraliza a acidez do solo e reduz a toxicidade do alumínio baseia-se na:",
    options: [
      { id: "a", text: "hidrólise básica do ânion carbonato (CO3^2- + H2O ⇌ HCO3- + OH-), que neutraliza íons H+ livres e precipita o alumínio na forma de hidróxido de alumínio insolúvel [Al(OH)3].", isCorrect: true, distractorRationale: null },
      { id: "b", text: "oxidação direta do íon Al3+ a alumínio metálico pelo oxigênio atmosférico liberado pelo carbonato.", isCorrect: false, distractorRationale: "O íon Al3+ não é reduzido a alumínio metálico em solo por calagem; trata-se de um processo ácido-base e de precipitação." },
      { id: "c", text: "redução do pH do solo para valores abaixo de 3,0, condição em que o alumínio é naturalmente decomposto.", isCorrect: false, distractorRationale: "A calagem visa aumentar o pH (elevar para ~5,5 a 6,5) para diminuir a acidez, e não reduzir o pH." },
      { id: "d", text: "complexação do alumínio por íons cloreto insolúveis trazidos pelo calcário dolomítico.", isCorrect: false, distractorRationale: "O calcário é formado por carbonatos de Ca e Mg, não por cloretos." },
      { id: "e", text: "formação de ácido carbônico concentrado que consome íons cálcio do retículo cristalino das raízes.", isCorrect: false, distractorRationale: "O calcário fornece cálcio e magnésio essenciais como nutrientes e consome íons H+, não prejudica as raízes." }
    ],
    detailedExplanation: {
      summary: "O ânion carbonato (CO3^2-) reage com a água consumindo H+ e liberando OH- (CO3^2- + H+ ⇌ HCO3- e HCO3- + H+ ⇌ H2O + CO2). Essa elevação do pH neutraliza a acidez ativa e precipita os íons fitotóxicos Al3+ na forma de Al(OH)3 sólido (precipitado insolúvel inerte), além de fornecer Ca2+ e Mg2+.",
      stepByStep: [
        "1. Identificar o problema agronômico: Solo com excesso de H+ e Al3+ fitotóxico.",
        "2. Identificar a função do calcário (CaCO3 / MgCO3): O ânion carbonato reage com H+:\nCO3^2- + 2 H+ ⇌ H2O + CO2 (g).",
        "3. A remoção de H+ eleva o pH do solo.",
        "4. Com a elevação do pH e presença de OH-, o alumínio reage: Al3+ + 3 OH- ⇌ Al(OH)3 (s).",
        "5. O Al(OH)3 precipita, deixando de ser absorvido na forma iônica tóxica pelas raízes."
      ],
      coreConcept: "A calagem eleva o pH através da reação do carbonato com íons H+, precipitando o alumínio tóxico como Al(OH)3.",
      trapWarning: "Atente-se para o fato de que a calagem aumenta o pH (reduz a acidez), e não diminui."
    },
    commonTraps: ["Confundir calagem com acidificação do solo"],
    tags: ["calagem", "carbonato", "precipitacao", "aluminio", "agricultura"]
  },
  {
    id: "NAT-EAC-007",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Conceito e Mecanismo de Ação de Soluções Tampão",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Soluções tampão são misturas aquosas que resistem a variações bruscas de pH quando pequenas quantidades de ácidos fortes ou bases fortes lhes são adicionadas, ou quando sofrem diluição moderada.\n\nUm pesquisador preparou em laboratório um tampão misturando ácido acético (CH3COOH, Ka = 1,8 x 10^-5) e acetato de sódio (CH3COONa) em concentrações equimolares.",
      source: "Princípios de Físico-Química e Análise Instrumental"
    },
    prompt: "Ao adicionar algumas gotas de uma solução concentrada de ácido clorídrico (HCl) a esse sistema tampão, a resistência à queda de pH ocorre porque:",
    options: [
      { id: "a", text: "os íons H+ adicionados são consumidos pelos íons acetato (CH3COO-), formando moléculas de ácido acético pouco dissociado.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o ácido clorídrico reage diretamente com o ácido acético, precipitando cloreto de sódio anidro.", isCorrect: false, distractorRationale: "Ácido não reage com ácido; o H+ do HCl reage com a base conjugada presente (o ânion acetato)." },
      { id: "c", text: "os íons cloreto (Cl-) sequestram os prótons H+ do meio, formando gás cloro volátil.", isCorrect: false, distractorRationale: "O íon cloreto não atua como base apreciável em água e não gera gás cloro sem reação de oxirredução." },
      { id: "d", text: "a água dissocia-se espontaneamente para consumir todo o excesso de íons cloreto.", isCorrect: false, distractorRationale: "A água não consome íons cloreto; quem tampona os íons H+ é a base fraca conjugada do tampão." },
      { id: "e", text: "o ácido acético ioniza-se imediatamente em proporção cem vezes maior para compensar os prótons.", isCorrect: false, distractorRationale: "Pelo Princípio de Le Chatelier, adicionar H+ desloca o equilíbrio do ácido acético para a esquerda, diminuindo sua ionização." }
    ],
    detailedExplanation: {
      summary: "Uma solução tampão ácida contém um ácido fraco (CH3COOH) e sua base conjugada (CH3COO-). Ao adicionar um ácido forte como HCl, os íons H+ adicionados encontram um grande reservatório de base conjugada e reagem: H+ (aq) + CH3COO- (aq) ⇌ CH3COOH (aq). Como o ácido acético formado é fraco e pouco dissociado, a concentração de H+ livres no meio quase não se altera, mantendo o pH praticamente estável.",
      stepByStep: [
        "1. Identificar os componentes do tampão: CH3COOH (ácido fraco) e CH3COO- (base conjugada).",
        "2. Identificar o agente perturbador: HCl adiciona íons H+ livres ao sistema.",
        "3. Mecanismo de tamponamento: O íon H+ é capturado pela base conjugada presente: H+ + CH3COO- -> CH3COOH.",
        "4. Como o ácido acético é fraco, ele permanece majoritariamente na forma molecular não ionizada.",
        "5. Conclusão: A variação de íons H+ livres é insignificante, amortecendo a variação de pH."
      ],
      coreConcept: "Em um tampão, a adição de ácido é neutralizada pela base conjugada (CH3COO-), e a adição de base é neutralizada pelo ácido fraco (CH3COOH).",
      trapWarning: "Não diga que o pH 'não muda absolutamente nada'; soluções tampão amortecem a mudança, minimizando-a fortemente, mas não a anulam por completo."
    },
    commonTraps: ["Achar que o ácido adicionado reage com o ácido fraco do tampão"],
    tags: ["solucao-tampao", "acido-base", "acetato", "Le Chatelier"]
  },
  {
    id: "NAT-EAC-008",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Tampão Bicarbonato e Acidose Metabólica",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em pacientes com diabetes mellitus descompensado, a quebra acelerada de ácidos graxos no fígado gera acúmulo excessivo de corpos cetônicos no sangue (como o ácido acetoacético e o ácido beta-hidroxibutírico), liberando grande quantidade de íons H+ na corrente sanguínea. Esse distúrbio metabólico é denominado cetoacidose diabética.\n\nO principal sistema de amortecimento no plasma sanguíneo é o tampão ácido carbônico/bicarbonato:\nCO2 (aq) + H2O (l) ⇌ H2CO3 (aq) ⇌ H+ (aq) + HCO3- (aq)",
      source: "Bioquímica Clínica e Fisiopatologia Médica"
    },
    prompt: "Para compensar fisiologicamente a sobrecarga de íons H+ e tentar normalizar o pH sanguíneo, o organismo do paciente desencadeia como resposta respiratória imediata a:",
    options: [
      { id: "a", text: "hiperventilação pulmonar (respiração rápida e profunda de Kussmaul), eliminando CO2 e deslocando o equilíbrio para a esquerda para consumir H+.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "hipoventilação pulmonar (respiração lenta e superficial), retendo CO2 para acidificar os tecidos periféricos.", isCorrect: false, distractorRationale: "Reter CO2 aumentaria ainda mais a concentração de H+, agravando letalmente a acidose." },
      { id: "c", text: "parada imediata das trocas gasosas pulmonares para preservar o oxigênio celular.", isCorrect: false, distractorRationale: "A apneia levaria à asfixia e acidose respiratória aguda sobreposta." },
      { id: "d", text: "conversão hepática direta de CO2 gasoso em cristais de glicose para amortecer o sangue.", isCorrect: false, distractorRationale: "O metabolismo humano de mamíferos não realiza fotossíntese para fixar CO2 em glicose." },
      { id: "e", text: "secreção maciça de ácido clorídrico pelos rins na urina acompanhada de retenção pulmonar de metano.", isCorrect: false, distractorRationale: "Os pulmões eliminam CO2, não metano; os rins excretam H+ na forma de íons amônio ou fosfato monobásico." }
    ],
    detailedExplanation: {
      summary: "Na cetoacidose diabética, o excesso de H+ reage com o tampão bicarbonato: H+ + HCO3- ⇌ H2CO3 ⇌ H2O + CO2. O centro respiratório bulbar detecta a queda do pH e estimula a hiperventilação (respiração de Kussmaul). Ao expirar intensamente, o organismo expele CO2, forçando o deslocamento contínuo do equilíbrio para a esquerda, o que consome mais prótons H+ e ajuda a restabelecer o pH plasmático.",
      stepByStep: [
        "1. Identificar o distúrbio: Acidose metabólica (aumento patológico de [H+]).",
        "2. Interação com o tampão: Excesso de H+ reage com HCO3- gerando H2CO3 e liberando CO2 dissolvido.",
        "3. Resposta compensatória fisiológica: Aumento da frequência e profundidade respiratória (hiperventilação).",
        "4. Efeito de Le Chatelier: A eliminação pulmonar de CO2 'puxa' o equilíbrio para a esquerda (CO2 + H2O <- H2CO3 <- H+ + HCO3-).",
        "5. Resultado: Redução de [H+] livre e elevação compensatória do pH sanguíneo."
      ],
      coreConcept: "A compensação respiratória da acidose metabólica envolve hiperventilação para eliminar CO2, deslocando o equilíbrio carbônico no sentido do consumo de H+.",
      trapWarning: "Não confunda acidose (necessita hiperventilação para expulsar ácido volátil CO2) com alcalose (que induz hipoventilação para reter CO2)."
    },
    commonTraps: ["Achar que em acidose a pessoa respira mais devagar para economizar oxigênio"],
    tags: ["acidose-metabolica", "tampao-bicarbonato", "Kussmaul", "respiracao", "fisiologia"]
  },
  {
    id: "NAT-EAC-009",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Equação de Henderson-Hasselbalch e Relação Molar no Tampão",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A equação de Henderson-Hasselbalch descreve matematicamente a relação entre o pH de uma solução tampão, o pKa do ácido fraco e as concentrações molares da base conjugada e do ácido:\n\npH = pKa + log([Base Conjugada] / [Ácido Fraco])\n\nConsidere o tampão biológico formado pelo ácido di-hidrogenofosfato e hidrogenofosfato:\nH2PO4^- (aq) ⇌ H+ (aq) + HPO4^2- (aq), cujo pKa é 7,20 a 25 °C.",
      source: "Bioquímica Físico-Química e Sistemas Tampão"
    },
    prompt: "Para que esse tampão apresente um pH exatamente igual a 8,20, a razão molar entre a concentração de hidrogenofosfato [HPO4^2-] e di-hidrogenofosfato [H2PO4^-] deve ser igual a:",
    options: [
      { id: "a", text: "10 : 1", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1 : 10", isCorrect: false, distractorRationale: "Uma razão de 1:10 (0,1) resultaria em log(0,1) = -1, o que daria pH = 7,20 - 1 = 6,20." },
      { id: "c", text: "1 : 1", isCorrect: false, distractorRationale: "Quando as concentrações são iguais (razão 1:1), log(1) = 0, e o pH é igual ao pKa (7,20)." },
      { id: "d", text: "2 : 1", isCorrect: false, distractorRationale: "log(2) ≈ 0,30, o que forneceria pH ≈ 7,50." },
      { id: "e", text: "100 : 1", isCorrect: false, distractorRationale: "Uma razão de 100:1 forneceria log(100) = 2, levando o pH a 9,20." }
    ],
    detailedExplanation: {
      summary: "Aplicando a equação de Henderson-Hasselbalch: pH = pKa + log([HPO4^2-] / [H2PO4^-]). Substituindo os valores: 8,20 = 7,20 + log(razão) => log(razão) = 8,20 - 7,20 = 1,0. Como log(x) = 1 na base decimal, x = 10^1 = 10. Portanto, a razão deve ser de 10 para 1.",
      stepByStep: [
        "1. Escrever a equação: pH = pKa + log([Base] / [Ácido]).",
        "2. Identificar a base conjugada: HPO4^2- e o ácido: H2PO4^-.",
        "3. Substituir os dados numéricos: 8,20 = 7,20 + log([HPO4^2-] / [H2PO4^-]).",
        "4. Isolar o termo logarítmico: log([HPO4^2-] / [H2PO4^-]) = 8,20 - 7,20 = 1,00.",
        "5. Aplicar a definição de logaritmo decimal: [HPO4^2-] / [H2PO4^-] = 10^1 = 10 (ou seja, 10 : 1)."
      ],
      coreConcept: "Cada unidade de variação de pH em relação ao pKa corresponde a uma variação de fator 10 na razão molar entre base conjugada e ácido.",
      trapWarning: "Quando pH > pKa, a forma básica conjugada predomina sobre a forma ácida."
    },
    commonTraps: ["Inverter a fração na razão entre base e ácido, obtendo 1:10"],
    tags: ["Henderson-Hasselbalch", "tampao", "logaritmo", "fosfato"]
  },
  {
    id: "NAT-EAC-010",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Efeito do Íon Comum em Soluções Ácidas",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere uma solução aquosa 0,1 mol/L de ácido benzoico (C6H5COOH), um conservante de alimentos largamente empregado na indústria de sucos, cujo equilíbrio de ionização é dado por:\nC6H5COOH (aq) + H2O (l) ⇌ C6H5COO- (aq) + H3O+ (aq)\n\nUm técnico de laboratório adiciona uma quantidade sólida de benzoato de sódio (C6H5COONa) a essa solução, sem alteração significativa no volume líquido total.",
      source: "Química dos Alimentos e Conservação Industrial"
    },
    prompt: "Com a adição desse sal, a consequência observada sobre o equilíbrio de ionização do ácido benzoico e o pH da solução é:",
    options: [
      { id: "a", text: "deslocamento do equilíbrio para a esquerda e consequente aumento do pH da solução.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "deslocamento do equilíbrio para a direita e consequente redução do pH da solução.", isCorrect: false, distractorRationale: "Adicionar íons benzoato (produto) desloca o equilíbrio para a esquerda pelo Princípio de Le Chatelier." },
      { id: "c", text: "aumento da concentração de íons H3O+ livres em razão da catálise salina promovida pelo sódio.", isCorrect: false, distractorRationale: "O sódio é um íon espectador; o benzoato adicionado consome H3O+ ao deslocar para a esquerda." },
      { id: "d", text: "precipitação de ácido nítrico concentrado no fundo do béquer.", isCorrect: false, distractorRationale: "Não há nitrogênio no sistema; trata-se de compostos benzoicos." },
      { id: "e", text: "manutenção inalterada de todas as concentrações, pois a constante Ka impede qualquer variação de espécies.", isCorrect: false, distractorRationale: "Ka permanece constante, mas as concentrações de equilíbrio mudam em resposta à perturbação." }
    ],
    detailedExplanation: {
      summary: "O benzoato de sódio dissocia-se totalmente fornecendo íons benzoato (C6H5COO-). Esse íon é comum ao equilíbrio de ionização do ácido benzoico. Pelo Princípio de Le Chatelier, o aumento da concentração de produto ([C6H5COO-]) desloca o equilíbrio para a ESQUERDA (formando mais ácido não ionizado). Isso consome íons H3O+, reduzindo sua concentração e, consequentemente, elevando o valor do pH.",
      stepByStep: [
        "1. Identificar o íon comum: C6H5COONa -> Na+ + C6H5COO-.",
        "2. Analisar o equilíbrio: C6H5COOH + H2O ⇌ C6H5COO- + H3O+.",
        "3. Perturbação: Aumento de [C6H5COO-].",
        "4. Resposta do sistema: Deslocamento no sentido inverso (esquerda) para consumir o excesso de benzoato.",
        "5. Consequência: Consumo de H3O+, logo [H3O+] diminui e o pH aumenta."
      ],
      coreConcept: "O efeito do íon comum reprime a ionização de um eletrólito fraco, diminuindo o grau de ionização e a concentração de íons livres.",
      trapWarning: "Lembre-se: quando [H+] diminui, o pH AUMENTA."
    },
    commonTraps: ["Achar que adicionar sal a um ácido sempre aumenta a acidez", "Confundir sentido de deslocamento com adição de reagentes"],
    tags: ["ion-comum", "Le Chatelier", "acido-benzoico", "pH"]
  },
  {
    id: "NAT-EAC-011",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Ação de Antiácidos Estomacais e Neutralização",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O suco gástrico humano é composto principalmente por ácido clorídrico (HCl), gerando um meio estomacal fortemente ácido com pH variando tipicamente entre 1,5 e 2,5, ideal para a ativação da enzima pepsina. Em episódios de azia e refluxo gastroesofágico, indivíduos utilizam formulações antiácidas comerciais à base de hidróxido de magnésio [Mg(OH)2] ou bicarbonato de sódio (NaHCO3).",
      source: "Farmacologia Básica e Fisiologia Digestória"
    },
    prompt: "A neutralização proporcionada pelo bicarbonato de sódio no alívio da azia gástrica difere do hidróxido de magnésio porque o bicarbonato:",
    options: [
      { id: "a", text: "produz efervescência devido à liberação de dióxido de carbono gasoso (CO2), que pode provocar eructação (arroto).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "não reage com o ácido clorídrico, agindo apenas por adsorção mecânica nas paredes do estômago.", isCorrect: false, distractorRationale: "O bicarbonato reage quimicamente em reação ácido-base de neutralização: NaHCO3 + HCl -> NaCl + H2O + CO2." },
      { id: "c", text: "provoca a imediata acidificação do bolo alimentar, diminuindo o pH estomacal para zero.", isCorrect: false, distractorRationale: "Antiácidos elevam o pH, combatendo a hiperextensão de acidez." },
      { id: "d", text: "libera gás hidrogênio altamente explosivo no interior do trato gastrointestinal.", isCorrect: false, distractorRationale: "A decomposição de bicarbonato com ácido produz CO2, e não H2 gasoso." },
      { id: "e", text: "precipita ácido sulfúrico concentrado na mucosa duodenal.", isCorrect: false, distractorRationale: "O ácido estomacal é HCl, e bicarbonato de sódio não forma ácido sulfúrico." }
    ],
    detailedExplanation: {
      summary: "A reação do bicarbonato de sódio com o ácido clorídrico é:\nNaHCO3 (s) + HCl (aq) -> NaCl (aq) + H2O (l) + CO2 (g)\nA formação de ácido carbônico intermediário instável (H2CO3) decompõe-se rapidamente em água e dióxido de carbono gasoso, causando a efervescência e estufamento gástrico com eructação. Já o hidróxido de magnésio reage sem produção de gás:\nMg(OH)2 + 2 HCl -> MgCl2 + 2 H2O.",
      stepByStep: [
        "1. Analisar os reagentes: NaHCO3 (sal de caráter básico) + HCl (ácido gástrico).",
        "2. Equacionar a reação: NaHCO3 + HCl -> NaCl + H2CO3.",
        "3. O H2CO3 é instável e decompõe-se em H2O e CO2 (g).",
        "4. A liberação de bolhas de gás carbônico gera pressão intra-estomacal e eructação.",
        "5. Concluir que a produção de gás CO2 é a característica diferencial em relação a bases hidróxidas como Mg(OH)2."
      ],
      coreConcept: "A neutralização de ácidos por carbonatos e bicarbonatos gera efervescência pela liberação de dióxido de carbono gasoso (CO2).",
      trapWarning: "Cuidado para não confundir liberação de CO2 (gás carbônico) com liberação de H2 (gás hidrogênio)."
    },
    commonTraps: ["Achar que reações de neutralização nunca formam gases"],
    tags: ["antiacidos", "bicarbonato", "neutralizacao", "gases", "farmacologia"]
  },
  {
    id: "NAT-EAC-012",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Indicadores Ácido-Base e Ponto de Viragem",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Indicadores ácido-base são substâncias orgânicas que se comportam como ácidos ou bases fracas, apresentando colorações distintas para a sua forma protonada (HIn) e desprotonada (In-):\nHIn (aq) + H2O (l) ⇌ In- (aq) + H3O+ (aq)\n\nO indicador azul de bromotimol apresenta cor amarela na forma HIn e azul na forma In-, com intervalo de viragem de pH entre 6,0 e 7,6 (em torno de pH 7,0 adquire tonalidade verde).",
      source: "Análise Química Quantitativa e Volumetria"
    },
    prompt: "Ao adicionar algumas gotas de azul de bromotimol a uma amostra de saliva humana que apresenta pH = 6,8, a coloração observada na amostra será:",
    options: [
      { id: "a", text: "verde, pois o pH encontra-se na faixa intermediária de viragem onde coexistem concentrações apreciáveis de HIn e In-.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "amarela intensa, pois qualquer pH abaixo de 7,0 converte 100% do indicador na forma ácida.", isCorrect: false, distractorRationale: "A transição de cor é gradual e ocorre na faixa de 6,0 a 7,6; em 6,8 há mistura significativa das formas amarela e azul, gerando verde." },
      { id: "c", text: "azul escura brilhante, pois a saliva humana é obrigatoriamente hipertônica e alcalina.", isCorrect: false, distractorRationale: "Para ficar puramente azul, o pH precisaria estar acima de 7,6." },
      { id: "d", text: "incolor, pois substâncias orgânicas perdem a absorbância de luz no espectro visível em meio aquoso.", isCorrect: false, distractorRationale: "O azul de bromotimol não se torna incolor; quem fica incolor em meio ácido é a fenolftaleína." },
      { id: "e", text: "vermelha rubi por precipitação de carboxi-hemoglobina salivar.", isCorrect: false, distractorRationale: "Azul de bromotimol não apresenta cor vermelha nem interage com hemoglobina na saliva normal." }
    ],
    detailedExplanation: {
      summary: "A zona de transição (faixa de viragem) de um indicador corresponde à região de pH próxima ao seu pKIn (geralmente pKIn ± 1). Para o azul de bromotimol, a faixa vai de 6,0 (amarelo) a 7,6 (azul). Em pH 6,8, ambas as espécies (HIn amarela e In- azul) estão presentes em proporções semelhantes no equilíbrio. A superposição óptica das cores amarela e azul resulta na coloração verde.",
      stepByStep: [
        "1. Identificar as cores do indicador: forma HIn = amarelo; forma In- = azul.",
        "2. Faixa de viragem fornecida: pH 6,0 a 7,6.",
        "3. Localizar o pH da saliva (6,8): está dentro da faixa de transição [6,0 ; 7,6].",
        "4. Em meio a essa transição, ocorre a mescla simultânea de espécies protonadas e desprotonadas.",
        "5. A mistura visual de luz refletida/transmitida amarela e azul produz o tom verde."
      ],
      coreConcept: "A cor de um indicador na faixa de viragem reflete o equilíbrio simultâneo entre as formas HIn e In-.",
      trapWarning: "A viragem não é um degrau abrupto e instantâneo em um valor único de pH, mas uma faixa gradual de aproximadamente 2 unidades de pH."
    },
    commonTraps: ["Achar que abaixo de 7 é sempre amarelo e acima de 7 é sempre azul"],
    tags: ["indicadores", "faixa-viragem", "bromotimol", "equilibrio-ionico"]
  },
  {
    id: "NAT-EAC-013",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Curva de Titulação Ácido Fraco com Base Forte",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma titulação volumétrica de neutralização, 25,0 mL de uma solução aquosa de ácido acético (CH3COOH, Ka = 1,8 x 10^-5) foram titulados com uma solução padrão de hidróxido de sódio (NaOH) 0,10 mol/L.\n\nDurante o processo, monitorou-se o pH da mistura em função do volume de base adicionado, atingindo o ponto de equivalência estequiométrico quando todo o ácido acético foi consumido pela base.",
      source: "Química Analítica Clássica e Titulometria"
    },
    prompt: "No exato ponto de equivalência dessa titulação, o pH da solução resultante e o motivo químico correspondente são:",
    options: [
      { id: "a", text: "superior a 7,0 (básico), devido à hidrólise do ânion acetato formado na reação de neutralização.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "estritamente igual a 7,0 (neutro), pois todo ponto de equivalência de titulação ácido-base gera neutralidade absoluta.", isCorrect: false, distractorRationale: "pH = 7,0 só ocorre no ponto de equivalência quando ambos os reagentes são fortes (ácido forte + base forte)." },
      { id: "c", text: "inferior a 7,0 (ácido), pois o ácido acético é um ácido carboxílico de cadeia carbônica resistente.", isCorrect: false, distractorRationale: "O sal formado é acetato de sódio, que gera solução básica por hidrólise do ânion fraco." },
      { id: "d", text: "igual a zero, em virtude da precipitação completa de sal insolúvel.", isCorrect: false, distractorRationale: "Acetato de sódio é solúvel e não precipita; pH zero seria uma solução de ácido fortíssimo concentrado." },
      { id: "e", text: "indeterminado, pois o ponto de equivalência nunca pode ser alcançado com ácidos fracos.", isCorrect: false, distractorRationale: "O ponto de equivalência estequiométrico é plenamente atingível quando n(H+) = n(OH-)." }
    ],
    detailedExplanation: {
      summary: "No ponto de equivalência de ácido fraco (CH3COOH) com base forte (NaOH), todo o ácido foi convertido em seu sal conjugado, o acetato de sódio (CH3COONa). O íon acetato (CH3COO-) sofre hidrólise básica em água: CH3COO- + H2O ⇌ CH3COOH + OH-. A geração de íons OH- livres eleva o pH da solução acima de 7,0 (tipicamente em torno de 8,5 a 9,0 a 25 °C).",
      stepByStep: [
        "1. Escrever a reação de neutralização: CH3COOH + NaOH -> CH3COONa + H2O.",
        "2. No ponto de equivalência, mols de ácido inicial = mols de base adicionada.",
        "3. A única espécie relevante em solução é o sal CH3COONa dissociado (Na+ e CH3COO-).",
        "4. O Na+ não hidrolisa, mas o CH3COO- hidrolisa: CH3COO- + H2O ⇌ CH3COOH + OH-.",
        "5. A geração de OH- torna o meio alcalino (pH > 7,0).",
        "6. Portanto, na titulação de ácido fraco com base forte, o ponto de equivalência tem sempre pH > 7."
      ],
      coreConcept: "A titulação de ácido fraco com base forte gera um sal básico no ponto de equivalência, fazendo com que o pH final seja superior a 7,0.",
      trapWarning: "Ponto de equivalência NÃO significa pH neutro (7,0). Significa apenas que quantidades estequiométricas de ácido e base reagiram."
    },
    commonTraps: ["Achar que ponto de equivalência sempre ocorre em pH 7,0"],
    tags: ["titulacao", "ponto-equivalencia", "hidrolise", "curva-pH"]
  },
  {
    id: "NAT-EAC-014",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Chuva Ácida e Reações em Meio Aquoso",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A água da chuva em regiões não poluídas é naturalmente levemente ácida (pH em torno de 5,6) devido à dissolução do CO2 atmosférico e formação de ácido carbônico (H2CO3). Entretanto, em centros urbanos e industriais que queimam combustíveis fósseis contendo enxofre e nitrogênio, são emitidos dióxido de enxofre (SO2) e dióxido de nitrogênio (NO2), gerando chuva ácida com pH frequentemente inferior a 4,5.",
      source: "Química Ambiental e Poluição Atmosférica"
    },
    prompt: "O impacto destrutivo da chuva ácida sobre monumentos históricos feitos de mármore e calcário decorre principalmente da:",
    options: [
      { id: "a", text: "reação dos ácidos fortes presentes na chuva com o carbonato de cálcio (CaCO3), gerando gás carbônico, água e sais solúveis ou degradáveis.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "redução do cálcio a cálcio metálico explosivo em contato com as gotas de chuva.", isCorrect: false, distractorRationale: "Trata-se de uma reação de dissolução ácida de carbonato, sem redução do cálcio a estado metálico." },
      { id: "c", text: "polimerização do mármore em polietileno tereftalato catalisada pelo SO2.", isCorrect: false, distractorRationale: "Mármore é inorgânico (CaCO3), não polimeriza em plásticos." },
      { id: "d", text: "absorção de ozônio pela rocha que provoca dilatação térmica catastrófica à noite.", isCorrect: false, distractorRationale: "O ataque ao mármore é uma clássica corrosão química ácido-base sobre o carbonato." },
      { id: "e", text: "precipitação de gás cloro tóxico diretamente no interior dos poros do calcário.", isCorrect: false, distractorRationale: "Chuva ácida de SO2 e NOx forma ácido sulfúrico e nítrico, não gás cloro elementar." }
    ],
    detailedExplanation: {
      summary: "O mármore e a pedra sabão/calcário são compostos essencialmente por carbonato de cálcio (CaCO3). Os ácidos nítrico e sulfúrico da chuva ácida reagem com o carbonato:\nCaCO3 (s) + H2SO4 (aq) -> CaSO4 (s, gesso friável) + CO2 (g) + H2O (l)\nCaCO3 (s) + 2 HNO3 (aq) -> Ca(NO3)2 (aq) + CO2 (g) + H2O (l)\nA reação dissolve a matriz mineral sólida da rocha, esfarelando detalhes esculturais e descaracterizando monumentos.",
      stepByStep: [
        "1. Identificar o composto do monumento: CaCO3 (sal insolúvel de base forte e ácido fraco instável).",
        "2. Identificar a natureza da chuva ácida: Solução de H2SO4 e HNO3 (ácidos fortes ionizados).",
        "3. Reação ácido-carbonato: 2 H+ + CO3^2- -> H2O + CO2 (g).",
        "4. O carbonato é consumido, destruindo a estrutura cristalina da rocha calcária.",
        "5. Concluir que a degradação é uma reação química ácido-base com consumo do carbonato."
      ],
      coreConcept: "Ácidos reagem com carbonatos insolúveis liberando CO2 e gerando sais solúveis ou friáveis, causando a corrosão química do patrimônio arquitetônico.",
      trapWarning: "Lembre-se de que a chuva normal já tem pH ~5,6 (ácido); só é considerada 'chuva ácida' ambiental quando o pH cai abaixo de ~5,0 ou 4,5 por poluentes industriais."
    },
    commonTraps: ["Achar que a chuva natural pura tem pH exatamente igual a 7,0"],
    tags: ["chuva-acida", "carbonato", "corrosao", "meio-ambiente"]
  },
  {
    id: "NAT-EAC-015",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Tratamento de Água com Sulfato de Alumínio e Cal Hidratada",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas Estações de Tratamento de Água (ETA), a etapa de coagulação/floculação utiliza sulfato de alumínio [Al2(SO4)3] para aglomerar partículas coloidais em suspensão. No entanto, o cátion Al3+ sofre intensa hidrólise ácida:\nAl3+ (aq) + 3 H2O (l) ⇌ Al(OH)3 (s) + 3 H+ (aq)\n\nSe a acidez aumentar demasiadamente, os flocos gelatinosos de Al(OH)3 solubilizam-se, arruinando o processo. Para manter o pH ótimo de floculação, os operadores adicionam cal hidratada [Ca(OH)2].",
      source: "Operações Unitárias no Saneamento e Tratamento de Água"
    },
    prompt: "A adição de cal hidratada nessa etapa do tratamento tem como função química principal:",
    options: [
      { id: "a", text: "neutralizar os íons H+ produzidos na hidrólise, deslocando o equilíbrio para a direita e favorecendo a precipitação dos flocos de Al(OH)3.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "acidificar ainda mais a água para matar bactérias patogênicas por choque osmótico.", isCorrect: false, distractorRationale: "A cal hidratada é uma base forte; sua adição eleva o pH, neutralizando a acidez e nunca acidificando." },
      { id: "c", text: "reduzir o alumínio trivalente a alumínio metálico para que ele atue como ímã coloidal.", isCorrect: false, distractorRationale: "Não há formação de alumínio metálico; o Al(OH)3 formado é um precipitado coloidal gelatinoso." },
      { id: "d", text: "deslocar o equilíbrio para a esquerda, impedindo a formação do hidróxido de alumínio.", isCorrect: false, distractorRationale: "O objetivo é justamente formar o Al(OH)3 sólido para que ele atue como floculante." },
      { id: "e", text: "transformar a água em uma solução tampão ácida de ácido sulfúrico concentrado.", isCorrect: false, distractorRationale: "A água tratada para consumo humano deve ser neutra ou levemente básica para evitar corrosão das tubulações." }
    ],
    detailedExplanation: {
      summary: "A hidrólise do íon Al3+ consome íons OH- e gera H+ livres, acidificando o meio. Se o pH cair muito, o Al(OH)3 se dissolve. A cal hidratada Ca(OH)2 fornece íons OH-, que neutralizam o H+ formado (H+ + OH- -> H2O). Pelo Princípio de Le Chatelier, ao retirar H+ do lado direito, o equilíbrio da reação Al3+ + 3 H2O ⇌ Al(OH)3 (s) + 3 H+ é deslocado para a DIREITA, garantindo a formação máxima dos flocos gelatinosos de Al(OH)3.",
      stepByStep: [
        "1. Analisar a reação: Al3+ + 3 H2O ⇌ Al(OH)3 (s) + 3 H+.",
        "2. Identificar o agente adicionado: Cal hidratada Ca(OH)2 fornece OH-.",
        "3. Os íons OH- reagem com H+ gerando água, reduzindo a concentração de [H+].",
        "4. Resposta do sistema: Deslocamento no sentido direto (para a direita) para repor H+.",
        "5. Consequência: Maior rendimento na precipitação de Al(OH)3 sólido gelatinoso, arrastando as impurezas."
      ],
      coreConcept: "A adição de base consome H+, deslocando equilíbrios hidrolíticos no sentido da precipitação de hidróxidos metálicos.",
      trapWarning: "Cal hidratada Ca(OH)2 é base (aumenta o pH). Não confunda com acidificantes."
    },
    commonTraps: ["Achar que a cal hidratada serve para dissolver a sujeira e não para corrigir pH e deslocar o equilíbrio"],
    tags: ["saneamento", "tratamento-agua", "floculacao", "hidrolise", "Le Chatelier"]
  },
  {
    id: "NAT-EAC-016",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Relação entre Ka e Kb de Pares Conjugados Ácido-Base",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para qualquer par conjugado ácido-base em solução aquosa a 25 °C, o produto entre a constante de ionização ácida (Ka) e a constante de basicidade da sua base conjugada (Kb) é igual ao produto iônico da água:\nKa · Kb = Kw = 1,0 x 10^-14\n\nO ácido cianídrico (HCN) é um ácido fraco monoprótico com Ka = 4,0 x 10^-10 a 25 °C.",
      source: "Físico-Química dos Eletrólitos Fracos"
    },
    prompt: "O valor da constante de basicidade (Kb) do ânion cianeto (CN-), sua base conjugada, a essa mesma temperatura, é igual a:",
    options: [
      { id: "a", text: "2,5 x 10^-5", isCorrect: true, distractorRationale: null },
      { id: "b", text: "4,0 x 10^-24", isCorrect: false, distractorRationale: "Multiplicou os expoentes em vez de dividir: Kw / Ka = 10^-14 / 10^-10 = 10^-5." },
      { id: "c", text: "2,5 x 10^-4", isCorrect: false, distractorRationale: "Erro na manipulação das potências de base 10 (1,0 / 4,0 = 0,25 -> 0,25 x 10^-4 = 2,5 x 10^-5)." },
      { id: "d", text: "4,0 x 10^-4", isCorrect: false, distractorRationale: "Não inverteu o coeficiente 4,0 ao passar para o denominador." },
      { id: "e", text: "1,0 x 10^-14", isCorrect: false, distractorRationale: "Esse é o valor de Kw, e não de Kb." }
    ],
    detailedExplanation: {
      summary: "Utilizando a relação fundamental de pares conjugados: Ka · Kb = Kw. Isolando Kb, temos Kb = Kw / Ka. Substituindo os dados: Kb = (1,0 x 10^-14) / (4,0 x 10^-10) = (1,0 / 4,0) x 10^(-14 - (-10)) = 0,25 x 10^-4 = 2,5 x 10^-5.",
      stepByStep: [
        "1. Escrever a relação de pares conjugados: Ka · Kb = Kw.",
        "2. Isolar a variável procurada: Kb = Kw / Ka.",
        "3. Inserir os dados numéricos: Kb = (1,0 x 10^-14) / (4,0 x 10^-10).",
        "4. Efetuar a divisão dos coeficientes: 1,0 / 4,0 = 0,25.",
        "5. Efetuar a subtração dos expoentes: -14 - (-10) = -4.",
        "6. Ajustar a notação científica: 0,25 x 10^-4 = 2,5 x 10^-5."
      ],
      coreConcept: "Quanto mais fraco for um ácido (menor Ka), mais forte será sua base conjugada (maior Kb), pois Ka · Kb = Kw.",
      trapWarning: "Cuidado com o ajuste de notação científica ao transformar 0,25 x 10^-4 em 2,5 x 10^-5."
    },
    commonTraps: ["Erros de notação científica na divisão de potências de 10"],
    tags: ["Ka", "Kb", "Kw", "par-conjugado", "calculo"]
  },
  {
    id: "NAT-EAC-017",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Equilíbrio de Solubilidade e Precipitação Fracionada",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O produto de solubilidade (Kps) de sais pouco solúveis governa sua precipitação em meio aquoso. Em uma solução contendo simultaneamente íons Ba2+ e íons Ca2+, ambos na concentração de 0,01 mol/L a 25 °C, deseja-se realizar a separação fracionada por adição lenta de sulfato de sódio (Na2SO4).\n\nDados a 25 °C:\n• Kps(BaSO4) = 1,1 x 10^-10\n• Kps(CaSO4) = 2,4 x 10^-5",
      source: "Físico-Química dos Equilíbrios Heterogêneos"
    },
    prompt: "À medida que a concentração de íons sulfato (SO4^2-) aumenta gradativamente no sistema, qual sal precipita primeiro e qual é a concentração mínima de sulfato necessária para iniciar a sua precipitação?",
    options: [
      { id: "a", text: "BaSO4 precipita primeiro, quando [SO4^2-] atingir aproximadamente 1,1 x 10^-8 mol/L.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "CaSO4 precipita primeiro, quando [SO4^2-] atingir aproximadamente 2,4 x 10^-3 mol/L.", isCorrect: false, distractorRationale: "O CaSO4 necessita de uma concentração muito maior de sulfato (2,4 x 10^-3 mol/L) para precipitar, precipitando depois do BaSO4." },
      { id: "c", text: "Ambos precipitam rigorosamente no mesmo instante, pois possuem cátions da mesma família química.", isCorrect: false, distractorRationale: "Embora pertençam ao Grupo 2, seus valores de Kps diferem por mais de 5 ordens de grandeza." },
      { id: "d", text: "Nenhum precipita, pois sulfatos de alcalinoterrosos são totalmente solúveis em qualquer proporção.", isCorrect: false, distractorRationale: "BaSO4 é um sal notavelmente insolúvel em água." },
      { id: "e", text: "BaSO4 precipita primeiro, mas somente quando [SO4^2-] superar 1,0 mol/L.", isCorrect: false, distractorRationale: "Como [Ba2+] = 0,01 mol/L, o Kps é atingido em uma concentração ínfima de sulfato (1,1 x 10^-8 mol/L)." }
    ],
    detailedExplanation: {
      summary: "Para precipitar BaSO4: Qps = [Ba2+] · [SO4^2-] >= Kps => (0,01) · [SO4^2-] = 1,1 x 10^-10 => [SO4^2-] = 1,1 x 10^-8 mol/L. Para precipitar CaSO4: (0,01) · [SO4^2-] = 2,4 x 10^-5 => [SO4^2-] = 2,4 x 10^-3 mol/L. Como 1,1 x 10^-8 mol/L é muito menor que 2,4 x 10^-3 mol/L, o BaSO4 atinge a condição de saturação e precipita muito antes do CaSO4.",
      stepByStep: [
        "1. Escrever o critério de precipitação: [M2+] · [SO4^2-] >= Kps.",
        "2. Calcular [SO4^2-] para BaSO4: [SO4^2-] = Kps / [Ba2+] = (1,1 x 10^-10) / (1,0 x 10^-2) = 1,1 x 10^-8 mol/L.",
        "3. Calcular [SO4^2-] para CaSO4: [SO4^2-] = Kps / [Ca2+] = (2,4 x 10^-5) / (1,0 x 10^-2) = 2,4 x 10^-3 mol/L.",
        "4. Comparar os valores: 1,1 x 10^-8 << 2,4 x 10^-3.",
        "5. Conclusão: BaSO4 precipita primeiro quando [SO4^2-] atinge 1,1 x 10^-8 mol/L."
      ],
      coreConcept: "Na precipitação fracionada sob concentrações iguais de cátions, o sal de menor produto de solubilidade (Kps) precipita em menor concentração do ânion precipitante.",
      trapWarning: "Sempre calcule a concentração do íon precipitante e compare as ordens de grandeza para determinar a ordem de precipitação."
    },
    commonTraps: ["Achar que sais do mesmo grupo da tabela periódica precipitam juntos"],
    tags: ["Kps", "solubilidade", "precipitacao-fracionada", "sulfato"]
  },
  {
    id: "NAT-EAC-018",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Capacidade Tamponante e Limites de um Tampão",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A capacidade tamponante representa a quantidade de ácido ou base forte que uma solução tampão consegue neutralizar antes de sofrer uma variação significativa de pH. Ela é máxima quando a razão molar entre o par conjugado é unitária ([Base Conjugada] / [Ácido Fraco] = 1, isto é, pH = pKa) e depende diretamente das concentrações absolutas dos componentes.",
      source: "Físico-Química e Bioquímica Experimental"
    },
    prompt: "Dois frascos, X e Y, contêm soluções tampão constituídas por ácido acético e acetato de sódio a pH = 4,75 (igual ao pKa a 25 °C):\n• Tampão X: [CH3COOH] = 1,00 mol/L e [CH3COO-] = 1,00 mol/L\n• Tampão Y: [CH3COOH] = 0,01 mol/L e [CH3COO-] = 0,01 mol/L\n\nComparando esses dois frascos, conclui-se corretamente que:",
    options: [
      { id: "a", text: "ambos apresentam o mesmo pH inicial, mas o tampão X possui capacidade tamponante cem vezes maior que o tampão Y.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o tampão X possui pH mais ácido que o tampão Y devido à maior concentração absoluta de ácido.", isCorrect: false, distractorRationale: "Como a razão [Base]/[Ácido] em ambos é igual a 1, log(1) = 0 e ambos têm exatamente o mesmo pH = 4,75." },
      { id: "c", text: "o tampão Y suporta maior adição de base forte porque soluções diluídas dissociam mais hidróxidos.", isCorrect: false, distractorRationale: "O tampão Y tem cem vezes menos moléculas de ácido fraco para reagir com base forte." },
      { id: "d", text: "ambos perdem a capacidade de tamponar instantaneamente após a adição de uma única gota de água destilada.", isCorrect: false, distractorRationale: "A diluição moderada não altera a razão [Base]/[Ácido], mantendo o pH praticamente fixo." },
      { id: "e", text: "o tampão X não consegue resistir à adição de ácidos fortes porque o excesso de acetato satura a água.", isCorrect: false, distractorRationale: "O tampão X tem grande reserva alcalina (1 mol/L de acetato), neutralizando muito mais ácido forte que Y." }
    ],
    detailedExplanation: {
      summary: "O pH de um tampão é governado pela RAZÃO entre as concentrações da base conjugada e do ácido fraco (pela equação de Henderson-Hasselbalch). Como em ambos a razão é 1,0 / 1,0 = 1 e 0,01 / 0,01 = 1, ambos têm rigorosamente o mesmo pH inicial (4,75). Entretanto, a CAPACIDADE TAMPONANTE depende do 'tamanho do reservatório' químico (quantidade de mols de ácido e base disponíveis por litro). O frasco X tem 100 vezes mais reagentes para consumir H+ ou OH- adicionados.",
      stepByStep: [
        "1. Analisar o pH pela razão molar: em X, 1,00/1,00 = 1; em Y, 0,01/0,01 = 1. Logo, pH(X) = pH(Y) = 4,75.",
        "2. Analisar a capacidade tamponante: definida pelo número de mols de ácido/base que o sistema suporta.",
        "3. Em X há 1,00 mol de cada espécie por litro; em Y há apenas 0,01 mol por litro.",
        "4. A reserva de neutralização em X é 1,00 / 0,01 = 100 vezes maior.",
        "5. Conclusão: Mesma acidez inicial (pH), porém capacidade tamponante 100 vezes superior em X."
      ],
      coreConcept: "O pH do tampão depende da razão molar ([Base]/[Ácido]), enquanto a capacidade tamponante depende das concentrações molares absolutas dos componentes.",
      trapWarning: "Não confunda pH do tampão (dependente da razão) com sua resistência/capacidade (dependente da concentração absoluta)."
    },
    commonTraps: ["Achar que maior concentração de componentes altera necessariamente o pH do tampão"],
    tags: ["capacidade-tamponante", "tampao", "Henderson-Hasselbalch", "concentracao"]
  },
  {
    id: "NAT-EAC-019",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Acidificação dos Oceanos e Esqueletos Calcários",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A elevação da queima de combustíveis fósseis elevou as concentrações atmosféricas de CO2 para mais de 420 ppm. Parte desse gás se dissolve nos oceanos, desencadeando a seguinte sequência de equilíbrios:\nCO2 (g) ⇌ CO2 (aq)\nCO2 (aq) + H2O (l) ⇌ H2CO3 (aq)\nH2CO3 (aq) ⇌ H+ (aq) + HCO3- (aq)\nH+ (aq) + CO3^2- (aq) ⇌ HCO3- (aq)\n\nEsse fenômeno, conhecido como acidificação oceânica, afeta criticamente organismos marinhos calcificadores (como corais, moluscos e plâncton calcário).",
      source: "Oceanografia Química e Mudanças Climáticas Globais"
    },
    prompt: "O principal mecanismo químico pelo qual a acidificação oceânica dificulta a formação e preservação dos esqueletos de carbonato de cálcio (CaCO3) nesses organismos marinhos é:",
    options: [
      { id: "a", text: "o consumo de íons carbonato livres (CO3^2-) pelo excesso de íons H+, reduzindo a disponibilidade de carbonato para precipitar com o Ca2+.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o aumento maciço de íons carbonato no mar, que sufoca os pólipos de coral por calcificação descontrolada.", isCorrect: false, distractorRationale: "O íon carbonato é consumido pelo H+ formando bicarbonato, diminuindo sua concentração." },
      { id: "c", text: "a transformação de toda a água marinha em ácido fluorídrico gasoso volátil.", isCorrect: false, distractorRationale: "O CO2 não gera ácido fluorídrico." },
      { id: "d", text: "o desaparecimento total dos íons cálcio do oceano por fusão nuclear induzida por CO2.", isCorrect: false, distractorRationale: "O cálcio não sofre fusão nuclear; os íons Ca2+ permanecem no oceano, mas falta CO3^2- para precipitar." },
      { id: "e", text: "a elevação contínua do pH marinho para valores alcalinos superiores a 12,0.", isCorrect: false, distractorRationale: "A acidificação oceânica reduz o pH (de ~8,2 histórico para ~8,05 atual)." }
    ],
    detailedExplanation: {
      summary: "A dissolução do CO2 gera ácido carbônico que se ioniza liberando íons H+. Esses prótons adicionais reagem com os íons carbonato livres dissolvidos no oceano: H+ + CO3^2- ⇌ HCO3-. Essa reação consome o CO3^2-, diminuindo o produto iônico [Ca2+] · [CO3^2-]. Quando esse produto fica abaixo do Kps do CaCO3 (aragonita/calcita), os esqueletos dos corais e conchas deixam de se formar ou passam a se dissolver.",
      stepByStep: [
        "1. Excesso de CO2 atmosférico entra no oceano e reage com H2O formando H2CO3.",
        "2. H2CO3 ioniza-se liberando H+ no meio marinho.",
        "3. Os íons H+ reagem com íons carbonato: H+ + CO3^2- -> HCO3-.",
        "4. Como consequência direta, a concentração de carbonato livre [CO3^2-] cai expressivamente.",
        "5. Sem CO3^2- suficiente, os corais não conseguem precipitar CaCO3 para formar seus exoesqueletos."
      ],
      coreConcept: "A acidificação oceânica reduz a concentração de íons carbonato livres (CO3^2-), que são convertidos em bicarbonato (HCO3-), inibindo a biocalcificação.",
      trapWarning: "Muitos acham que o oceano vira 'ácido' (pH < 7). Na verdade, o pH oceânico é básico (~8,1), mas está diminuindo (ficando menos básico), o que se conceitua como acidificação."
    },
    commonTraps: ["Achar que o oceano já se encontra em pH ácido (menor que 7)"],
    tags: ["acidificacao-oceanos", "equilibrio-quimico", "carbonato", "corais", "meio-ambiente"]
  },
  {
    id: "NAT-EAC-020",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Solução Tampão com Ácido Diprótico e Espécies Predominantes",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O ácido carbônico (H2CO3) é um ácido diprótico que apresenta duas etapas sucessivas de ionização a 25 °C:\n1ª etapa: H2CO3 ⇌ H+ + HCO3- (pK1 = 6,35)\n2ª etapa: HCO3- ⇌ H+ + CO3^2- (pK2 = 10,33)\n\nEm uma solução aquosa, a espécie química predominante varia de acordo com a faixa de pH em que o meio se encontra.",
      source: "Química Iônica e Análise Especiatória"
    },
    prompt: "No plasma sanguíneo humano normal, cujo pH é mantido rigorosamente em 7,40, a espécie carbonatada que se encontra em maior concentração molar é:",
    options: [
      { id: "a", text: "o ânion hidrogenocarbonato (bicarbonato, HCO3-).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o ácido carbônico molecular não ionizado (H2CO3).", isCorrect: false, distractorRationale: "Como pH (7,40) > pK1 (6,35), a forma desprotonada da 1ª etapa (HCO3-) predomina sobre H2CO3." },
      { id: "c", text: "o ânion carbonato livre (CO3^2-).", isCorrect: false, distractorRationale: "O CO3^2- só predomina em meios muito alcalinos onde pH > pK2 (acima de 10,33)." },
      { id: "d", text: "o monóxido de carbono aquoso (CO).", isCorrect: false, distractorRationale: "O equilíbrio carbônico em meio biológico não produz monóxido de carbono." },
      { id: "e", text: "todas as três espécies coexistem em concentrações absolutamente rigorosamente iguais.", isCorrect: false, distractorRationale: "Concentrações iguais só ocorreriam nos valores de pK específicos entre pares conjugados adjacentes." }
    ],
    detailedExplanation: {
      summary: "Em ácidos dipróticos:\n- Se pH < pK1 (6,35): predomina a forma totalmente protonada (H2CO3).\n- Se pK1 < pH < pK2 (6,35 < pH < 10,33): predomina a forma intermediária desprotonada (HCO3-).\n- Se pH > pK2 (10,33): predomina a forma totalmente desprotonada (CO3^2-).\nComo o pH sanguíneo é 7,40, ele situa-se entre 6,35 e 10,33. Portanto, o íon bicarbonato (HCO3-) é amplamente a espécie predominante (cerca de 20 vezes mais concentrado que H2CO3).",
      stepByStep: [
        "1. Identificar os valores de corte de pH: pK1 = 6,35 e pK2 = 10,33.",
        "2. Comparar o pH do meio (7,40) com pK1: como 7,40 > 6,35, [HCO3-] > [H2CO3].",
        "3. Comparar o pH do meio (7,40) com pK2: como 7,40 < 10,33, [HCO3-] > [CO3^2-].",
        "4. Como [HCO3-] é maior que ambas as outras formas, ela é a espécie majoritária.",
        "5. Conclui-se que o ânion bicarbonato (HCO3-) é a espécie química dominante no plasma."
      ],
      coreConcept: "Entre pK1 e pK2 de um ácido diprótico, a forma intermediária anfótera (monohidrogenada) é a espécie química que predomina no equilíbrio.",
      trapWarning: "Não confunda a espécie predominante em pH 7,40 (HCO3-) com a espécie predominante em águas hiperalcalinas (CO3^2-)."
    },
    commonTraps: ["Achar que em pH neutro/levemente básico a espécie predominante já é o carbonato divalente"],
    tags: ["acido-diprotico", "pK1", "pK2", "bicarbonato", "especiacao"]
  },
  {
    id: "NAT-EAC-021",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Mistura de Soluções com Reação Química e Cálculo de pH",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma aula prática de química geral, um estudante misturou em um béquer:\n• 100 mL de uma solução aquosa de ácido clorídrico (HCl) 0,20 mol/L\n• 100 mL de uma solução aquosa de hidróxido de sódio (NaOH) 0,10 mol/L\n\nConsidere a temperatura de 25 °C e que os volumes são perfeitamente aditivos.",
      source: "Laboratório de Química Analítica"
    },
    prompt: "Após a ocorrência da reação de neutralização e a homogeneização do sistema, o pH da mistura resultante é igual a:",
    options: [
      { id: "a", text: "1,3", isCorrect: true, distractorRationale: null },
      { id: "b", text: "7,0", isCorrect: false, distractorRationale: "O pH seria 7,0 somente se houvesse quantidades estequiométricas idênticas de HCl e NaOH; aqui o ácido está em excesso." },
      { id: "c", text: "2,0", isCorrect: false, distractorRationale: "O estudante esqueceu de dividir a quantidade de matéria em excesso (0,01 mol) pelo volume total da mistura (200 mL = 0,2 L)." },
      { id: "d", text: "12,7", isCorrect: false, distractorRationale: "Isso corresponderia a uma solução básica com excesso de OH-, mas o ácido é que está em excesso." },
      { id: "e", text: "0,3", isCorrect: false, distractorRationale: "Erro de cálculo na concentração molar restante de H+." }
    ],
    detailedExplanation: {
      summary: "1. Mols de HCl: n(H+) = M · V = 0,20 mol/L · 0,100 L = 0,020 mol.\n2. Mols de NaOH: n(OH-) = M · V = 0,10 mol/L · 0,100 L = 0,010 mol.\n3. Neutralização: H+ + OH- -> H2O. O OH- é o reagente limitante (0,010 mol reage com 0,010 mol de H+).\n4. Excesso de H+: 0,020 - 0,010 = 0,010 mol de H+ livres.\n5. Volume final total: 100 mL + 100 mL = 200 mL = 0,20 L.\n6. Concentração final de H+: [H+] = 0,010 mol / 0,20 L = 0,050 mol/L = 5,0 x 10^-2 mol/L.\n7. pH = -log(5,0 x 10^-2) = 2 - log(5) = 2 - 0,70 = 1,30.",
      stepByStep: [
        "1. Calcular mols de H+: 0,20 mol/L x 0,1 L = 0,02 mol.",
        "2. Calcular mols de OH-: 0,10 mol/L x 0,1 L = 0,01 mol.",
        "3. Determinar o reagente em excesso: H+ sobra com 0,02 - 0,01 = 0,01 mol.",
        "4. Calcular o volume total da solução: 0,1 L + 0,1 L = 0,2 L.",
        "5. Determinar a concentração molar de H+ excedente: [H+] = 0,01 mol / 0,2 L = 0,05 mol/L.",
        "6. Calcular o pH: pH = -log(0,05) = -log(5 x 10^-2) = 2 - 0,70 = 1,3."
      ],
      coreConcept: "Ao misturar ácido forte e base forte em quantidades não equimolares, encontra-se o reagente em excesso, calcula-se a nova concentração molar pelo volume total e determina-se o pH.",
      trapWarning: "Lembre-se sempre de somar os volumes das soluções misturadas para encontrar o volume final!"
    },
    commonTraps: ["Esquecer de somar os volumes ao calcular a concentração molar final", "Achar que mistura de ácido e base sempre resulta em pH 7"],
    tags: ["neutralizacao", "calculo-pH", "estequiometria", "reagente-excesso"]
  },
  {
    id: "NAT-EAC-022",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Teorias Ácido-Base de Brønsted-Lowry e Pares Conjugados",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na teoria de Brønsted-Lowry (1923), um ácido é qualquer espécie química capaz de doar um próton (íon H+), enquanto uma base é qualquer espécie capaz de aceitar um próton. Considere a seguinte reação em meio aquoso:\n\nCH3COOH (aq) + H2O (l) ⇌ CH3COO- (aq) + H3O+ (aq)",
      source: "História e Teoria das Funções Químicas"
    },
    prompt: "Com base nessa teoria, as duas espécies que atuam como bases na reação direta e na reação inversa são, respectivamente:",
    options: [
      { id: "a", text: "H2O e CH3COO-", isCorrect: true, distractorRationale: null },
      { id: "b", text: "CH3COOH e H3O+", isCorrect: false, distractorRationale: "Ambos atuam como ácidos porque doam prótons nas respectivas reações." },
      { id: "c", text: "H2O e H3O+", isCorrect: false, distractorRationale: "H3O+ doa um próton na reação inversa, funcionando como ácido conjugado." },
      { id: "d", text: "CH3COOH e CH3COO-", isCorrect: false, distractorRationale: "CH3COOH doa um próton na reação direta, sendo o ácido." },
      { id: "e", text: "H3O+ e CH3COO-", isCorrect: false, distractorRationale: "Inverteu a função do H3O+, que é um doador de prótons (ácido de Brønsted)." }
    ],
    detailedExplanation: {
      summary: "Na reação direta, o CH3COOH doa um próton H+ para a H2O, logo o CH3COOH é o ácido e a H2O é a base. Na reação inversa, o H3O+ doa um próton para o CH3COO-, logo o H3O+ é o ácido conjugado e o CH3COO- é a base conjugada. Portanto, as duas espécies que aceitam prótons (atuando como bases) são a água (H2O) e o íon acetato (CH3COO-).",
      stepByStep: [
        "1. Analisar a reação direta: CH3COOH perde H+ -> atua como ácido.",
        "2. A H2O recebe o H+ -> atua como base.",
        "3. Analisar a reação inversa: H3O+ perde H+ para voltar a ser H2O -> atua como ácido.",
        "4. O CH3COO- recebe H+ para voltar a ser CH3COOH -> atua como base.",
        "5. Identificar as bases solicitadas: H2O (na direta) e CH3COO- (na inversa)."
      ],
      coreConcept: "Ácido doa H+; base aceita H+. Cada reação ácido-base de Brønsted envolve dois pares conjugados ácido-base.",
      trapWarning: "A água pode atuar como base (recebendo H+) ou como ácido (doando H+); sua função depende do reagente com o qual interage."
    },
    commonTraps: ["Achar que a água nunca pode ser classificada como base"],
    tags: ["Bronsted-Lowry", "par-conjugado", "acido-base", "teoria-quimica"]
  },
  {
    id: "NAT-EAC-023",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Efeito Tampão e Enzimas Digestórias",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema digestório humano, o quimo estomacal fortemente ácido (pH ~2) penetra no duodeno (primeira porção do intestino delgado). Para que as enzimas pancreáticas e intestinais (como tripsina, amilase pancreática e lipase) possam atuar com atividade catalítica máxima, o pH no duodeno precisa ser rapidamente elevado para a faixa entre 7,5 e 8,5.\n\nEssa mudança drástica e o tamponamento do meio duodenal são realizados pela secreção do suco pancreático rico em bicarbonato de sódio (NaHCO3).",
      source: "Fisiologia Humana e Enzimologia Clínica"
    },
    prompt: "Se houvesse uma falha patológica na secreção pancreática de bicarbonato de sódio, a consequência direta sobre a digestão duodenal seria a:",
    options: [
      { id: "a", text: "desnaturação e inativação das enzimas pancreáticas pela manutenção de pH ácido, prejudicando a digestão de proteínas, lipídios e amido.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "aceleração extrema da absorção de gorduras pela bile, pois as lipases funcionam otimamente em pH menor que 1.", isCorrect: false, distractorRationale: "As lipases são inativadas em meio ácido e dependem de pH neutro a ligeiramente alcalino." },
      { id: "c", text: "ativação descontrolada da pepsina em todo o trato intestinal, digerindo a microbiota saudável.", isCorrect: false, distractorRationale: "A pepsina é gástrica e perde gradativamente atividade à medida que se afasta do estômago, mas a consequência principal no duodeno é a inativação das enzimas pancreáticas." },
      { id: "d", text: "formação instantânea de cálculos de glicose sólida nas paredes do cólon.", isCorrect: false, distractorRationale: "Glicose é solúvel e não forma cálculos sob alteração de pH duodenal." },
      { id: "e", text: "alcalinização perigosa das vilosidades intestinais decorrente do excesso de HCl livre.", isCorrect: false, distractorRationale: "Excesso de HCl causa acidificação, e não alcalinização." }
    ],
    detailedExplanation: {
      summary: "As enzimas do duodeno evoluíram para operar em pH neutro a levemente alcalino (7,5 a 8,5). A sua conformação terciária ativa depende de pontes de hidrogênio e atrações eletrostáticas entre grupos ionizáveis de aminoácidos sensíveis ao pH. Se o quimo ácido não for neutralizado pelo bicarbonato pancreático (HCl + NaHCO3 -> NaCl + H2O + CO2), o pH duodenal permanece muito ácido, desnaturando as enzimas digestórias pancreáticas e causando má absorção de nutrientes e ulceração duodenal.",
      stepByStep: [
        "1. Identificar o pH ótimo das enzimas pancreáticas: básico (entre 7,5 e 8,5).",
        "2. Identificar a função do bicarbonato pancreático: neutralizar a acidez do quimo vindo do estômago.",
        "3. Perturbação: Ausência de secreção de bicarbonato.",
        "4. Consequência no meio: O duodeno permanece com pH muito ácido (~2 a 3).",
        "5. Efeito molecular nas enzimas: Alteração das cargas dos aminoácidos, perda da estrutura tridimensional nativa (desnaturação) e inativação enzimática."
      ],
      coreConcept: "Enzimas possuem pH ótimo estreito. O tamponamento biológico garante a estabilidade de sua conformação terciária ativa.",
      trapWarning: "Cada enzima possui seu pH ótimo: pepsina atua em pH ácido (~2), enquanto enzimas pancreáticas requerem pH alcalino (~8)."
    },
    commonTraps: ["Achar que todas as enzimas do corpo humano funcionam no mesmo pH"],
    tags: ["enzimas", "pH-otimo", "bicarbonato", "digestao", "bioquimica"]
  },
  {
    id: "NAT-EAC-024",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Constante de Hidrólise (Kh) e Grau de Hidrólise",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A constante de hidrólise (Kh) quantifica a extensão da reação de um íon com a água. Para um sal derivado de ácido fraco e base forte, como o hipoclorito de sódio (NaClO, princípio ativo da água sanitária), a hidrólise do ânion hipoclorito é dada por:\nClO- (aq) + H2O (l) ⇌ HClO (aq) + OH- (aq)\n\nSabendo que Kh = Kw / Ka, e dados a 25 °C:\n• Kw = 1,0 x 10^-14\n• Ka(HClO) = 2,5 x 10^-8",
      source: "Química de Desinfetantes e Higienização"
    },
    prompt: "O valor da constante de hidrólise (Kh) do íon hipoclorito a 25 °C é igual a:",
    options: [
      { id: "a", text: "4,0 x 10^-7", isCorrect: true, distractorRationale: null },
      { id: "b", text: "2,5 x 10^-6", isCorrect: false, distractorRationale: "Erro na divisão de 1,0 por 2,5: 1 / 2,5 = 0,4, não 2,5." },
      { id: "c", text: "4,0 x 10^-22", isCorrect: false, distractorRationale: "Somou os expoentes negativos em vez de subtrair: -14 - (-8) = -6." },
      { id: "d", text: "2,5 x 10^-22", isCorrect: false, distractorRationale: "Multiplicou Ka por Kw em vez de dividir Kw por Ka." },
      { id: "e", text: "1,0 x 10^-7", isCorrect: false, distractorRationale: "Desconsiderou o fator 2,5 no denominador." }
    ],
    detailedExplanation: {
      summary: "A constante de hidrólise para o ânion de um ácido fraco é Kh = Kw / Ka. Substituindo os valores fornecidos:\nKh = (1,0 x 10^-14) / (2,5 x 10^-8) = (1,0 / 2,5) x 10^(-14 - (-8)) = 0,4 x 10^-6 = 4,0 x 10^-7.",
      stepByStep: [
        "1. Escrever a expressão da constante de hidrólise: Kh = Kw / Ka.",
        "2. Inserir os dados numéricos: Kh = (1,0 x 10^-14) / (2,5 x 10^-8).",
        "3. Dividir a mantissa: 1,0 / 2,5 = 0,40.",
        "4. Subtrair os expoentes das potências de 10: -14 - (-8) = -6.",
        "5. Escrever o resultado provisório: 0,40 x 10^-6.",
        "6. Converter para a notação científica padrão: 4,0 x 10^-7."
      ],
      coreConcept: "A constante de hidrólise Kh de um ânion é inversamente proporcional à força do ácido de origem (Kh = Kw / Ka).",
      trapWarning: "Atenção redobrada na manipulação de potências negativas ao dividir expoentes."
    },
    commonTraps: ["Multiplicar Kw por Ka em vez de dividir Kw por Ka"],
    tags: ["Kh", "hipoclorito", "hidrolise", "calculo"]
  },
  {
    id: "NAT-EAC-025",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Alcalose Respiratória em Grandes Altitudes e Adaptação",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao atingir locais de elevada altitude, a menor pressão parcial de oxigênio (hipóxia hipobárica) estimula os quimiorreceptores carotídeos, provocando aumento imediato da frequência e da profundidade da ventilação pulmonar.\n\nO sistema tampão plasmático é regido pelo equilíbrio:\nCO2 (dissolvido) + H2O (l) ⇌ H2CO3 (aq) ⇌ H+ (aq) + HCO3- (aq)\n\nCom a aclimatação ao longo de vários dias na altitude, os rins aumentam significativamente a excreção de íons bicarbonato (HCO3-) na urina.",
      source: "Fisiologia Respiratória e Medicina de Altitude"
    },
    prompt: "A excreção renal aumentada de bicarbonato ao longo dos dias de aclimatação tem como finalidade fisiológica:",
    options: [
      { id: "a", text: "compensar metabolicamente a alcalose respiratória aguda gerada pela hiperventilação, trazendo o pH sanguíneo de volta à faixa fisiológica normal.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "induzir acidose metabólica fulminante para impedir que a hemoglobina se ligue ao oxigênio disponível.", isCorrect: false, distractorRationale: "O objetivo homeostático é normalizar o pH plasmático para perto de 7,40, garantindo o transporte ótimo de oxigênio." },
      { id: "c", text: "substituir todo o bicarbonato sanguíneo por cloreto de cálcio insolúvel para aumentar a densidade óssea.", isCorrect: false, distractorRationale: "A resposta renal regula o balanço ácido-base hídrico, não a calcificação óssea aguda." },
      { id: "d", text: "bloquear a produção de eritrócitos na medula óssea para desobstruir os capilares.", isCorrect: false, distractorRationale: "Na altitude, a produção de eritrócitos aumenta (estimulada por eritropoietina), e não diminui." },
      { id: "e", text: "fazer o pH do sangue atingir valores superiores a 9,0 para facilitar a digestão de proteínas.", isCorrect: false, distractorRationale: "Um pH sanguíneo acima de 7,8 é letal para os seres humanos." }
    ],
    detailedExplanation: {
      summary: "Em altitudes elevadas, a hiperventilação induzida pela hipóxia expele CO2 em excesso. Pelo Princípio de Le Chatelier, o equilíbrio carbônico desloca-se para a esquerda (CO2 + H2O <- H+ + HCO3-), consumindo H+ e elevando o pH plasmático (alcalose respiratória aguda). Para compensar esse distúrbio a longo prazo, os rins diminuem a reabsorção tubular de bicarbonato e excretam mais HCO3- na urina. Ao reduzir a concentração de HCO3- plasmático, a razão [HCO3-] / [CO2] normaliza-se, trazendo o pH de volta à faixa estreita de 7,35 a 7,45.",
      stepByStep: [
        "1. Perturbação inicial: A hiperventilação na altitude elimina CO2 do sangue.",
        "2. Resposta imediata: Deslocamento para a esquerda consome H+, gerando alcalose respiratória (pH > 7,45).",
        "3. Necessidade homeostática: Reduzir o pH de volta ao nível fisiológico.",
        "4. Resposta renal compensatória: Os rins eliminam HCO3- na urina.",
        "5. Resultado: Reduzindo a base bicarbonato, a razão base/ácido diminui, normalizando o pH plasmático."
      ],
      coreConcept: "A compensação renal da alcalose respiratória consiste na excreção aumentada de bicarbonato (HCO3-) pela urina para reequilibrar o pH sanguíneo.",
      trapWarning: "Lembre-se da divisão de tarefas homeostática: os pulmões ajustam o CO2 (resposta rápida em minutos), enquanto os rins ajustam o HCO3- (resposta lenta em dias)."
    },
    commonTraps: ["Achar que a resposta renal na altitude é de reter bicarbonato"],
    tags: ["alcalose-respiratoria", "compensacao-renal", "altitude", "homeostase", "fisiologia"]
  }
];
