export const QUESTIONS_ELETROQUIMICA = [
  {
    id: "NAT-ELETROQ-001",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Pilhas Galvânicas: Funcionamento e Polo",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na clássica pilha de Daniell, um eletrodo de zinco metálico é imerso em solução de sulfato de zinco (ZnSO4) e um eletrodo de cobre metálico em sulfato de cobre (CuSO4), conectados por um fio condutor externo com voltímetro e uma ponte salina contendo solução aquosa de cloreto de potássio (KCl). Dados dos potenciais-padrão de redução: Eº(Zn²⁺/Zn) = -0,76 V; Eº(Cu²⁺/Cu) = +0,34 V.",
      source: "Química Geral e Eletroquímica"
    },
    prompt: "Durante a descarga espontânea dessa pilha galvânica, observa-se corretamente que:",
    options: [
      { id: "a", text: "o eletrodo de cobre sofre oxidação, atuando como ânodo da pilha com perda de massa.", isCorrect: false, distractorRationale: "O cobre tem maior potencial de redução (+0,34 V > -0,76 V), portanto se reduz e ganha massa no cátodo." },
      { id: "b", text: "os elétrons migram espontaneamente pelo fio condutor do eletrodo de zinco para o eletrodo de cobre.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "a ponte salina tem como função transportar os elétrons entre os dois recipientes para fechar o circuito.", isCorrect: false, distractorRationale: "A ponte salina transporta ÍONS (K+ e Cl-) para manter a neutralidade elétrica das soluções, nunca elétrons." },
      { id: "d", text: "a massa da barra de zinco aumenta gradativamente devido à deposição de zinco metálico.", isCorrect: false, distractorRationale: "O zinco oxida (Zn → Zn²⁺ + 2e⁻) e sofre corrosão (sua massa diminui)." },
      { id: "e", text: "a diferença de potencial padrão da célula é de -0,42 V, caracterizando reação não espontânea.", isCorrect: false, distractorRationale: "ΔEº = +0,34 - (-0,76) = +1,10 V (positivo, reação espontânea)." }
    ],
    detailedExplanation: {
      summary: "Na pilha, o metal de menor potencial de redução (zinco) oxida no ânodo (polo negativo) e perde elétrons. Os elétrons fluem pelo fio externo até o cátodo (cobre, polo positivo), onde os íons Cu²⁺ se reduzem.",
      stepByStep: [
        "Passo 1: Comparar os potenciais de redução: Eº(Cu²⁺/Cu) = +0,34 V > Eº(Zn²⁺/Zn) = -0,76 V.",
        "Passo 2: Quem tem maior potencial de redução REDUZ (Cobre = Cátodo = Polo Positivo). Reação: Cu²⁺ + 2e⁻ → Cu⁰ (aumento de massa da lâmina).",
        "Passo 3: Quem tem menor potencial de redução OXIDA (Zinco = Ânodo = Polo Negativo). Reação: Zn⁰ → Zn²⁺ + 2e⁻ (desgaste da lâmina).",
        "Passo 4: O fluxo de elétrons no fio metálico externo ocorre SEMPRE do Ânodo (onde são gerados) para o Cátodo (onde são consumidos): Zinco → Cobre.",
        "Passo 5: A ponte salina conduz íons em solução aquosa para neutralizar cargas, nunca elétrons."
      ],
      coreConcept: "Pilhas: Mnemônico 'CRAO' (Cátodo Reduz, Ânodo Oxida) e Sentido dos Elétrons (Ânodo → Cátodo)",
      trapWarning: "Cuidado: elétrons NUNCA atravessam a ponte salina nem circulam pela solução. Eles viajam exclusivamente pelo fio metálico condutor externo!"
    },
    commonTraps: ["Achar que elétrons passam pela ponte salina", "Inverter o fluxo de elétrons da pilha"],
    tags: ["pilha", "eletroquimica", "danielle", "potencial de redução"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-002",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Corrosão e Metal de Sacrifício",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Cascos de navios feitos de aço (liga de ferro com carbono) e tubulações enterradas de ferro sofrem rápida oxidação e ferrugem ao entrar em contato com a água do mar e oxigênio dissolvido. Para prevenir esse colapso estrutural, blocos de magnésio ou zinco metálico são rebitados diretamente ao casco de aço. Dados: Eº(Mg²⁺/Mg) = -2,37 V; Eº(Zn²⁺/Zn) = -0,76 V; Eº(Fe²⁺/Fe) = -0,44 V; Eº(O2 + 2H2O + 4e⁻/4OH⁻) = +0,40 V.",
      source: "Engenharia de Materiais e Corrosão"
    },
    prompt: "Essa técnica de proteção contra a corrosão, denominada proteção catódica por anodo de sacrifício, fundamenta-se no fato de que o metal anexado:",
    options: [
      { id: "a", text: "possui maior potencial de redução que o ferro, atraindo os íons oxigênio para sua superfície cristalina.", isCorrect: false, distractorRationale: "O metal de sacrifício precisa ter MENOR potencial de redução (maior tendência a oxidar) que o ferro." },
      { id: "b", text: "apresenta menor potencial de redução que o ferro, oxidando-se preferencialmente e fornecendo elétrons para manter o ferro reduzido.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "forma uma camada cerâmica impermeável que impede a passagem de corrente elétrica na água do mar.", isCorrect: false, distractorRationale: "O magnésio não forma cerâmica isolante; ele atua eletroquimicamente por contato direto condutor." },
      { id: "d", text: "aumenta o pH da água salina ao redor do casco, transformando o oxigênio em gás ozônio inerte.", isCorrect: false, distractorRationale: "A proteção catódica não tem como objetivo gerar ozônio." },
      { id: "e", text: "reage com o ferro formando uma liga inoxidável de alta dureza por difusão atômica a frio.", isCorrect: false, distractorRationale: "Não há formação de nova liga atômica; é uma célula eletroquímica galvânica protetora." }
    ],
    detailedExplanation: {
      summary: "O metal de sacrifício (Mg ou Zn) possui menor potencial de redução (maior potencial de oxidação) que o ferro. Ele se corrói 'em sacrifício', transformando o ferro no cátodo protegido.",
      stepByStep: [
        "Passo 1: Corrosão do ferro é sua oxidação: Fe⁰ → Fe²⁺ + 2e⁻ (Eºred = -0,44 V).",
        "Passo 2: Para proteger o ferro, deve-se conectá-lo a um metal com potencial de redução ainda mais baixo (ex: Mg com -2,37 V ou Zn com -0,76 V).",
        "Passo 3: Na competição para oxidar, o Mg/Zn perde elétrons com muito mais facilidade que o Fe.",
        "Passo 4: Esses elétrons fluem para a placa de ferro, impedindo que os átomos de Fe percam seus elétrons (o casco de ferro atua como cátodo e fica preservado).",
        "Passo 5: Os blocos de sacrifício se desgastam com o tempo e devem ser substituídos periodicamente."
      ],
      coreConcept: "Proteção Catódica e Metal de Sacrifício",
      trapWarning: "Metal de sacrifício SEMPRE tem que ter Eº de redução MENOR que o metal protegido (ou seja, maior tendência a oxidar)."
    },
    commonTraps: ["Confundir menor potencial de redução com maior potencial de redução", "Achar que se pode usar cobre para proteger o ferro (o cobre aceleraria a ferrugem!)"],
    tags: ["corrosao", "ferrugem", "metal de sacrificio", "aplicacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-003",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Eletrólise Aquosa e Descarga de Íons",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A indústria cloro-álcali produz anualmente milhões de toneladas de soda cáustica (NaOH), gás cloro (Cl2) e gás hidrogênio (H2) por meio da eletrólise aquosa de uma salmoura concentrada de cloreto de sódio (NaCl). O processo é alimentado por um gerador contínuo de energia elétrica que força reações de oxirredução não espontâneas.",
      source: "Processos Químicos Industriais"
    },
    prompt: "Na eletrólise aquosa do cloreto de sódio, os produtos gasosos formados no cátodo (polo negativo) e no ânodo (polo positivo) são, respectivamente:",
    options: [
      { id: "a", text: "H2 no cátodo (por redução preferencial da água frente ao Na+) e Cl2 no ânodo (por oxidação dos íons cloreto frente ao OH-).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Na metálico líquido no cátodo e gás oxigênio (O2) no ânodo.", isCorrect: false, distractorRationale: "O sódio metálico só se forma na eletrólise ÍGNEA fundida (sem água); na presença de água, o H+ reduz preferencialmente." },
      { id: "c", text: "Cl2 no cátodo e H2 no ânodo, devido à inversão de polos na presença de salmoura saturada.", isCorrect: false, distractorRationale: "Cátodo atrai cátions (H+ reduz a H2); ânodo atrai ânions (Cl- oxida a Cl2)." },
      { id: "d", text: "O2 no cátodo e HCl gasoso no ânodo.", isCorrect: false, distractorRationale: "O oxigênio vem da oxidação de OH- no ânodo, e não do cátodo." },
      { id: "e", text: "gás metano (CH4) no cátodo e soda cáustica gasosa no ânodo.", isCorrect: false, distractorRationale: "Não há carbono na salmoura para formar metano." }
    ],
    detailedExplanation: {
      summary: "Na eletrólise aquosa de NaCl: no cátodo, H+ descarrega antes do Na+ (formando H2 e OH-); no ânodo, Cl- descarrega antes do OH- (formando Cl2). Sobram Na+ e OH- em solução, gerando soda cáustica NaOH.",
      stepByStep: [
        "Passo 1: Listar todos os íons na solução aquosa de NaCl: Cátions: Na⁺ e H⁺ (da autoionização da H2O). Ânions: Cl⁻ e OH⁻.",
        "Passo 2: Fila de prioridade de descarga no Cátodo (redução): Cátions das famílias 1A, 2A e Al³⁺ têm menor facilidade de descarga que o H⁺ (água). Como Na⁺ é da família 1A, o H⁺ reduz: 2 H2O + 2e⁻ → H2(g) + 2 OH⁻.",
        "Passo 3: Fila de prioridade de descarga no Ânodo (oxidação): Ânions não-oxigenados (como Cl⁻, Br⁻, I⁻) têm MAIOR facilidade de descarga que o OH⁻ e ânions oxigenados (SO4²⁻, NO3⁻). Logo, o Cl⁻ oxida: 2 Cl⁻ → Cl2(g) + 2e⁻.",
        "Passo 4: Portanto: H2 no cátodo e Cl2 no ânodo."
      ],
      coreConcept: "Prioridade de Descarga na Eletrólise Aquosa",
      trapWarning: "Sódio metálico NUNCA é obtido em eletrólise aquosa, apenas em eletrólise ígnea (seca/fundida a mais de 800 °C)."
    },
    commonTraps: ["Achar que Na+ descarrega na presença de água", "Confundir eletrólise ígnea com eletrólise aquosa"],
    tags: ["eletrolise", "industria", "cloro-alcali", "tri-alta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-004",
    area: "natureza",
    competence: 5,
    skill: 19,
    topic: "Eletroquímica",
    subtopic: "Leis de Faraday e Galvanoplastia",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A douração ou prateação de joias utiliza o processo de galvanoplastia para revestir metais menos nobres por deposição eletrolítica. Um anel de latão foi colocado em uma cuba eletrolítica contendo solução de nitrato de prata (AgNO3). O anel foi submetido a uma corrente elétrica constante de 1,93 A durante um período de 1 000 segundos. Considere: constante de Faraday = 96 500 C/mol de elétrons; Massa molar da Prata (Ag) = 108 g/mol; Reação de redução: Ag⁺ + 1 e⁻ → Ag⁰.",
      source: "Tratamento de Superfícies Metálicas"
    },
    prompt: "A massa adicional de prata metálica depositada sobre a superfície do anel ao final desse tempo de operação foi de:",
    options: [
      { id: "a", text: "0,54 g", isCorrect: false, distractorRationale: "Resultado obtido ao dividir incorretamente por 4 ou esquecer a estequiometria de 1 elétron." },
      { id: "b", text: "1,08 g", isCorrect: false, distractorRationale: "Representaria 0,01 mol de elétrons, mas a carga gerada foi de 0,02 mol." },
      { id: "c", text: "2,16 g", isCorrect: true, distractorRationale: null },
      { id: "d", text: "4,32 g", isCorrect: false, distractorRationale: "Cálculo assumindo o dobro da carga ou tempo de 2000s." },
      { id: "e", text: "10,80 g", isCorrect: false, distractorRationale: "Erro de ordem de grandeza de 10x." }
    ],
    detailedExplanation: {
      summary: "Q = i · t = 1,93 A · 1000 s = 1930 C. Como 96500 C depositam 108 g de Ag (1 mol de e-), 1930 C depositam exatamente 2,16 g de prata.",
      stepByStep: [
        "Passo 1: Calcular a carga elétrica total transportada (Q = i · t):",
        "Q = 1,93 A · 1 000 s = 1 930 Coulombs.",
        "Passo 2: Relacionar a carga com os mols de elétrons pela Constante de Faraday:",
        "n(e⁻) = 1 930 C / 96 500 C/mol = 0,02 mol de elétrons.",
        "Passo 3: Utilizar a estequiometria da semirreação de redução da prata:",
        "Ag⁺ + 1 e⁻ → 1 Ag⁰",
        "1 mol de e⁻ (96 500 C) deposita 1 mol de Ag (108 g).",
        "0,02 mol de e⁻ depositam m(Ag).",
        "m(Ag) = 0,02 · 108 = 2,16 gramas."
      ],
      coreConcept: "1ª Lei de Faraday: Q = i · t e Deposição Eletrolítica",
      trapWarning: "Atenção à valência do cátion metálico! Se fosse cobre (Cu²⁺ + 2e⁻ → Cu) ou ouro (Au³⁺ + 3e⁻ → Au), cada mol de metal exigiria 2 ou 3 mols de elétrons, respectivamente."
    },
    commonTraps: ["Esquecer de converter minutos em segundos (neste caso já estava em segundos)", "Não observar o número de elétrons transferidos na reação"],
    tags: ["faraday", "galvanoplastia", "calculo", "quimica quantitativa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-005",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Baterias de Íon-Lítio e Transição Energética",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Prêmio Nobel de Química de 2019 laureou os cientistas responsáveis pelo desenvolvimento das baterias de íons de lítio. O lítio (Li) é o metal mais leve da tabela periódica (densidade de apenas 0,53 g/cm³) e apresenta o menor potencial-padrão de redução entre todos os elementos químicos conhecidos: Eº(Li⁺/Li) = -3,04 V.",
      source: "Comitê do Prêmio Nobel de Química"
    },
    prompt: "Essas duas propriedades intrínsecas do elemento lítio conferem às baterias de íon-lítio a vantagem tecnológica decisiva de:",
    options: [
      { id: "a", text: "armazenar grande quantidade de energia por unidade de massa (altíssima densidade energética) gerando elevadas voltagens por célula.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "operar sem necessidade de recarga elétrica durante todo o seu ciclo de vida útil.", isCorrect: false, distractorRationale: "Baterias secundárias de lítio precisam de recarga externa contínua." },
      { id: "c", text: "permitir o uso seguro de eletrólitos à base de água pura sem nenhum risco de ignição térmica.", isCorrect: false, distractorRationale: "Lítio reage violentamente com água (produzindo H2 e fogo); usam-se solventes orgânicos anidros." },
      { id: "d", text: "impedir completamente a formação de dendritos que possam causar curto-circuito.", isCorrect: false, distractorRationale: "A formação de dendritos de lítio é justamente um dos maiores desafios de segurança dessas baterias." },
      { id: "e", text: "eliminar qualquer perda de rendimento em temperaturas abaixo de zero absoluto.", isCorrect: false, distractorRationale: "Baterias de lítio perdem rendimento no frio extremo e nada opera abaixo do zero absoluto." }
    ],
    detailedExplanation: {
      summary: "Baixa massa atômica combinada com o menor potencial de redução (-3,04 V) confere alta voltagem e altíssima densidade energética (muita energia em pouco peso).",
      stepByStep: [
        "Passo 1: Entender densidade energética: capacidade de armazenar energia por quilograma de bateria.",
        "Passo 2: Como o lítio tem massa molar diminuta (apenas ~7 g/mol), poucos gramas contêm muitos átomos para doar elétrons.",
        "Passo 3: Por ter o menor Eºred (-3,04 V), o lítio tem a maior tendência a oxidar (Eºox = +3,04 V), gerando grandes diferenças de potencial (ddp) nas células (> 3,7 V por célula, contra apenas 1,5 V de pilhas alcalinas comuns).",
        "Passo 4: Essa combinação é a razão de seu domínio absoluto em smartphones, notebooks e carros elétricos."
      ],
      coreConcept: "Densidade Energética e Potencial Eletroquímico do Lítio",
      trapWarning: "Lítio metálico reage com água produzindo H2 explosivo; as baterias modernas usam íons intercalados (LiCoO2 e grafite), nunca água como eletrólito."
    },
    commonTraps: ["Achar que bateria de lítio usa água como solvente", "Confundir densidade de massa com densidade volumétrica"],
    tags: ["baterias", "nobel", "transição energetica", "tecnologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-006",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Pilha a Combustível de Hidrogênio",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Veículos movidos a célula a combustível utilizam gás hidrogênio (H2) armazenado em cilindros de alta pressão e gás oxigênio (O2) captado do ar ambiente. No interior da célula eletroquímica com membrana trocadora de prótons, ocorrem as seguintes semirreações:\nÂnodo: 2 H2 → 4 H⁺ + 4 e⁻\nCátodo: O2 + 4 H⁺ + 4 e⁻ → 2 H2O",
      source: "Mobilidade Sustentável e Hidrogênio Verde"
    },
    prompt: "Além do elevado rendimento termodinâmico em relação aos motores de combustão interna convencionais, a principal vantagem ambiental do escapamento de um veículo a célula de hidrogênio é emitir unicamente:",
    options: [
      { id: "a", text: "vapor de água potável (H2O), com emissão zero de gases do efeito estufa e material particulado local.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "monóxido de carbono (CO) em baixas concentrações inodoras.", isCorrect: false, distractorRationale: "Não há carbono na reação de H2 com O2; portanto, zero emissão de CO ou CO2." },
      { id: "c", text: "gás ozônio (O3) que ajuda a restaurar a camada de ozônio urbana.", isCorrect: false, distractorRationale: "O produto é exclusivamente água; ozônio ao nível do solo seria um poluente oxidante tóxico." },
      { id: "d", text: "óxido nitroso (N2O) que atua como fertilizante atmosférico.", isCorrect: false, distractorRationale: "A célula não utiliza ar em alta temperatura que queime N2 atmosférico." },
      { id: "e", text: "cinzas alcalinas compostas de hidróxido de potássio.", isCorrect: false, distractorRationale: "Não há formação de cinzas sólidas." }
    ],
    detailedExplanation: {
      summary: "A reação global da pilha a combustível é 2 H2 + O2 → 2 H2O. O único subproduto de exaustão é água limpa em estado de vapor.",
      stepByStep: [
        "Passo 1: Somar as duas semirreações da célula a combustível:",
        "Ânodo: 2 H2 → 4 H⁺ + 4 e⁻",
        "Cátodo: O2 + 4 H⁺ + 4 e⁻ → 2 H2O",
        "Reação Global: 2 H2(g) + O2(g) → 2 H2O(v).",
        "Passo 2: Não há nenhum elemento químico adicional (como carbono, nitrogênio ou enxofre) nos reagentes.",
        "Passo 3: Portanto, os veículos movidos a célula a combustível possuem escapamento puramente aquoso (zero emissão direta de CO2, fuligem, NOx ou SOx)."
      ],
      coreConcept: "Célula a Combustível de Hidrogênio Verde e Sustentabilidade",
      trapWarning: "A célula de combustível NÃO 'queima' hidrogênio em combustão térmica; ela converte energia química diretamente em elétrica por eletroquímica fria, com rendimento muito superior ao ciclo de Carnot."
    },
    commonTraps: ["Achar que há combustão clássica com fogo na célula", "Achar que libera CO2"],
    tags: ["hidrogenio verde", "energia limpa", "meio ambiente", "sustentabilidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-007",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Espontaneidade e Cálculo de ddp (ΔEº)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Considere os potenciais-padrão de redução das seguintes espécies a 25 °C:\n1. Al³⁺ + 3 e⁻ → Al⁰  (Eº = -1,66 V)\n2. Pb²⁺ + 2 e⁻ → Pb⁰  (Eº = -0,13 V)",
      source: "Manual de Química Inorgânica"
    },
    prompt: "Ao conectar esses dois eletrodos metálicos em suas respectivas soluções para montar uma pilha galvânica espontânea, a diferença de potencial padrão (ΔEº) da célula e o metal que atua como ânodo são:",
    options: [
      { id: "a", text: "ΔEº = +1,53 V; o metal que atua como ânodo é o Alumínio (Al).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ΔEº = -1,53 V; o metal que atua como ânodo é o Chumbo (Pb).", isCorrect: false, distractorRationale: "Em pilhas espontâneas, o ΔEº é sempre estritamente positivo." },
      { id: "c", text: "ΔEº = +1,79 V; o metal que atua como ânodo é o Chumbo (Pb).", isCorrect: false, distractorRationale: "Cálculo incorreto somando os módulos dos potenciais." },
      { id: "d", text: "ΔEº = +1,53 V; o metal que atua como ânodo é o Chumbo (Pb).", isCorrect: false, distractorRationale: "O chumbo tem maior potencial de redução (-0,13 > -1,66), logo é o CÁTODO, não o ânodo." },
      { id: "e", text: "ΔEº = +3,19 V; o metal que atua como ânodo é o Alumínio (Al).", isCorrect: false, distractorRationale: "Multiplicar os potenciais pelos coeficientes estequiométricos (3 e 2) é um erro gravíssimo (Eº é propriedade intensiva)." }
    ],
    detailedExplanation: {
      summary: "ΔEº = Eºmaior - Eºmenor = -0,13 V - (-1,66 V) = +1,53 V. O alumínio possui menor potencial de redução, logo sofre oxidação (ânodo).",
      stepByStep: [
        "Passo 1: Identificar qual potencial é maior: -0,13 V (Pb) é maior que -1,66 V (Al).",
        "Passo 2: Quem tem maior potencial de redução sofre REDUÇÃO (Cátodo = Chumbo).",
        "Passo 3: Quem tem menor potencial de redução sofre OXIDAÇÃO (Ânodo = Alumínio).",
        "Passo 4: Calcular a força eletromotriz: ΔEº = Eºred(cátodo) - Eºred(ânodo) = (-0,13) - (-1,66) = +1,53 V.",
        "Passo 5: LEMBRETE CRUCIAL: Potencial de redução é uma propriedade INTENSIVA; nunca se multiplica o valor de Eº ao balancear a equação global!"
      ],
      coreConcept: "Cálculo da ddp: ΔEº = Eº(maior) - Eº(menor) e Propriedade Intensiva",
      trapWarning: "JAMAIS multiplique o potencial elétrico (Eº) pelo número de elétrons ao multiplicar a semirreação! O potencial continua o mesmo."
    },
    commonTraps: ["Multiplicar o Eº pelos coeficientes estequiométricos", "Errar a regra de sinais com números negativos (-0,13 - (-1,66))"],
    tags: ["pilha", "calculo", "potencial padrao", "quimica geral"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-008",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Lata de Conserva e Proteção por Revestimento",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Latas de conserva de alimentos feitas de folha de flandres (aço revestido internamente por uma fina película de estanho metálico - Sn) são amplamente utilizadas para preservar ervilhas, milho e sardinhas. No entanto, os rótulos sempre alertam para NUNCA comprar ou consumir produtos contidos em latas amassadas ou perfuradas. Dados: Eº(Fe²⁺/Fe) = -0,44 V; Eº(Sn²⁺/Sn) = -0,14 V.",
      source: "Tecnologia de Alimentos e Corrosão"
    },
    prompt: "Quando a folha de flandres sofre um risco profundo ou amassado que rompe a camada de estanho e expõe o ferro subjacente ao alimento úmido, a corrosão do ferro torna-se muito mais rápida do que se a lata fosse feita de ferro puro, porque:",
    options: [
      { id: "a", text: "o estanho possui menor potencial de redução que o ferro, dissolvendo-se na forma de toxinas metálicas.", isCorrect: false, distractorRationale: "O estanho tem maior potencial (-0,14 V > -0,44 V), não menor." },
      { id: "b", text: "cria-se um par galvânico no qual o ferro atua como ânodo por ter menor potencial de redução, oxidando-se aceleradamente enquanto o estanho atua como cátodo.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "o estanho reage com o oxigênio liberando ácido clorídrico gasoso no interior da conserva.", isCorrect: false, distractorRationale: "Não há cloro no estanho metálico para gerar ácido clorídrico." },
      { id: "d", text: "o ferro reabsorve os elétrons do estanho, provocando a fermentação bacteriana espontânea do conteúdo.", isCorrect: false, distractorRationale: "A corrosão acelera a oxidação do ferro; a proliferação bacteriana pode ocorrer por contaminação externa se furar." },
      { id: "e", text: "o estanho dissipa a corrente elétrica, desativando a proteção catódica natural do ferro.", isCorrect: false, distractorRationale: "O estanho nunca foi um anodo de sacrifício para o ferro, pois seu Eºred é maior que o do ferro." }
    ],
    detailedExplanation: {
      summary: "Ao riscar a folha de flandres, o estanho expõe o ferro. Como Eºred(Sn) = -0,14 V > Eºred(Fe) = -0,44 V, o ferro vira o anodo do par galvânico e se corrói muito mais rápido.",
      stepByStep: [
        "Passo 1: O estanho protege o ferro apenas como barreira física passiva (enquanto estiver intacto).",
        "Passo 2: Uma vez que o estanho é riscado, temos contato elétrico entre ferro e estanho na presença de eletrólito (meio aquoso do alimento).",
        "Passo 3: Comparação de potenciais: Eº(Sn²⁺/Sn) = -0,14 V é maior que Eº(Fe²⁺/Fe) = -0,44 V.",
        "Passo 4: O metal de menor potencial de redução (o FERRO) oxida com muito mais rapidez para doar elétrons ao estanho (corrosão galvânica acelerada).",
        "Passo 5: A lata enferruja e pode vazar ou liberar compostos indesejados no alimento."
      ],
      coreConcept: "Corrosão Galvânica por Revestimento Passivo Rompido (Folha de Flandres)",
      trapWarning: "Ao contrário do zinco (galvanização, que é metal de sacrifício), o estanho NÃO é metal de sacrifício para o ferro. Se furar, o ferro é sacrificado pelo estanho!"
    },
    commonTraps: ["Achar que o estanho é metal de sacrifício do ferro", "Confundir galvanização (zinco) com folha de flandres (estanho)"],
    tags: ["alimentos", "corrosao galvanica", "seguranca", "quimica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-009",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Tratamento de Água por Eletrocoagulação",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A eletrocoagulação é uma técnica eletroquímica moderna utilizada no tratamento de efluentes industriais oleosos e têxteis. Consiste na passagem de corrente elétrica contínua através de eletrodos de ferro ou alumínio imersos no efluente. No ânodo, o metal é oxidado a cátions Fe³⁺ ou Al³⁺, os quais reagem imediatamente com íons OH⁻ da água formando hidróxidos gelatinosos insolúveis [Fe(OH)3 ou Al(OH)3].",
      source: "Saneamento Ambiental e Tecnologias de Tratamento"
    },
    prompt: "Os hidróxidos metálicos formados in situ por esse processo atuam no esclarecimento da água poluída principalmente ao:",
    options: [
      { id: "a", text: "desestabilizar as cargas negativas dos coloides suspensos e adsorver as impurezas em flocos decantáveis.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "aumentar a temperatura da água até o ponto de ebulição, evaporando os poluentes voláteis.", isCorrect: false, distractorRationale: "O processo opera em temperatura ambiente por coagulação química, não por destilação térmica." },
      { id: "c", text: "dissolver os óleos insolúveis por meio de saponificação ácida irreversível.", isCorrect: false, distractorRationale: "Saponificação ocorre em meio fortemente básico a quente, e não pela formação de flocos de hidróxido." },
      { id: "d", text: "transformar metais pesados tóxicos em gases nobres facilmente liberados para o ar.", isCorrect: false, distractorRationale: "Transmutação de metais pesados em gases nobres é reação nuclear impossível por eletroquímica." },
      { id: "e", text: "acidificar o meio até pH 1 para dissolver mecanicamente toda a matéria particulada.", isCorrect: false, distractorRationale: "A floculação opera em pH neutro ou ligeiramente alcalino para manter o hidróxido precipitado." }
    ],
    detailedExplanation: {
      summary: "Os cátions Al³⁺/Fe³⁺ neutralizam as cargas superficiais negativas de partículas coloidais (coagulação). Os hidróxidos gelatinosos agregam essas partículas em flocos pesados que decantam (floculação).",
      stepByStep: [
        "Passo 1: Coloides (como argila, corantes e gotículas de gordura) possuem cargas elétricas superficiais negativas que se repelem, mantendo a água turva.",
        "Passo 2: A oxidação do anodo libera íons altamente carregados (Al³⁺ ou Fe³⁺) que neutralizam essas cargas repelentes (desestabilização coloidal).",
        "Passo 3: A hidrólise forma géis insolúveis de Al(OH)3 ou Fe(OH)3 que 'varrem' e aprisionam as impurezas à medida que afundam.",
        "Passo 4: Esses flocos formados são facilmente removidos por decantação ou flotação.",
        "Passo 5: Ao mesmo tempo, microbolhas de H2 formadas no cátodo podem ajudar na flotação dos flocos até a superfície."
      ],
      coreConcept: "Coagulação/Floculação Eletroquímica no Tratamento de Efluentes",
      trapWarning: "Cuidado: Al³⁺ e Fe³⁺ não 'destroem' quimicamente os poluentes; eles os aglomeram e precipitam para remoção física."
    },
    commonTraps: ["Achar que a eletroquímica apenas queima ou evapora poluentes", "Desconhecer o papel de neutralização de cargas dos cátions trivalentes"],
    tags: ["tratamento de água", "saneamento", "floculacao", "meio ambiente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-010",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Previsão de Reações Redox e Reatividade dos Metais",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma aula prática de laboratório, um professor mergulhou um prego de ferro polido em uma solução azul de sulfato de cobre (CuSO4). Após alguns minutos, os alunos notaram duas alterações evidentes: a solução azul tornou-se esverdeada e uma camada avermelhada espessa depositou-se sobre a superfície do prego. Dados: Eº(Fe²⁺/Fe) = -0,44 V; Eº(Cu²⁺/Cu) = +0,34 V.",
      source: "Prática Experimental de Reatividade Metálica"
    },
    prompt: "Com base nesses dados e nas observações do experimento, o fenômeno observado é explicado pela:",
    options: [
      { id: "a", text: "oxidação espontânea do ferro metálico pelos íons cobre (Cu²⁺), reduzindo o cobre na forma de metal avermelhado sobre o prego.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "redução do ferro provocada pelo sulfato, formando precipitado de sulfeto de ferro avermelhado.", isCorrect: false, distractorRationale: "O ferro oxida a Fe²⁺ (íon de cor esverdeada); quem reduz é o Cu²⁺." },
      { id: "c", text: "decomposição térmica da água catalisada pelo atrito do prego na vidraria.", isCorrect: false, distractorRationale: "É uma reação química de deslocamento (oxirredução), não decomposição térmica da água." },
      { id: "d", text: "sublimação instantânea do cobre dissolvido provocada pelo magnetismo do ferro.", isCorrect: false, distractorRationale: "Não há magnetismo envolvido na reação redox aquosa." },
      { id: "e", text: "neutralização ácido-base que gera cloreto de cobre sólido na superfície do metal.", isCorrect: false, distractorRationale: "Não há cloro no sistema (é sulfato de cobre, não cloreto) e a reação é de oxirredução, não ácido-base." }
    ],
    detailedExplanation: {
      summary: "O ferro é mais reativo que o cobre (tem menor Eºred = maior tendência a oxidar). O Fe⁰ doa elétrons aos íons Cu²⁺ azuis, gerando Fe²⁺ verde e depositando Cu⁰ avermelhado.",
      stepByStep: [
        "Passo 1: Comparar potenciais: Eº(Cu²⁺/Cu) = +0,34 V > Eº(Fe²⁺/Fe) = -0,44 V.",
        "Passo 2: O íon Cu²⁺ tem maior tendência a receber elétrons (reduzir) do que o Fe²⁺.",
        "Passo 3: Logo, o ferro metálico (Fe⁰) transfere espontaneamente elétrons para o Cu²⁺ da solução:",
        "Fe⁰(s) + Cu²⁺(aq) → Fe²⁺(aq) + Cu⁰(s).",
        "Passo 4: O Cu²⁺ (responsável pela cor azul) é consumido e o Fe²⁺ (esverdeado) é produzido.",
        "Passo 5: O cobre metálico formado (Cu⁰) tem cor avermelhada/acobreada típica e se deposita sobre o prego."
      ],
      coreConcept: "Reação de Simples Troca / Deslocamento e Fila de Reatividade dos Metais",
      trapWarning: "Lembre-se: um metal menos nobre (mais reativo/menor Eºred) SEMPRE desloca o metal mais nobre (maior Eºred) de suas soluções aquosas."
    },
    commonTraps: ["Confundir qual espécie oxida e qual espécie reduz", "Achar que a cor avermelhada é ferrugem (é cobre metálico puro)"],
    tags: ["reatividade", "deslocamento", "oxirreducao", "laboratorio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-011",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Leis de Faraday e Eletrodeposição Quantitativa (Galvanoplastia)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No processo de acabamento superficial de instrumentais cirúrgicos em uma fábrica de equipamentos hospitalares, realiza-se a eletrodeposição protetora de cromo metálico a partir de um banho eletrolítico contendo íons cromo(III) (Cr³⁺). A célula eletrolítica opera sob corrente elétrica contínua e constante de 9,65 A durante exatamente 1 000 segundos. Considere a constante de Faraday como F = 96 500 C/mol de elétrons e a massa molar do cromo como 52 g/mol.",
      source: "ENEM / Eletroquímica Quantitativa e Leis de Faraday"
    },
    prompt: "A massa aproximada de cromo metálico sólido que se deposita sobre as pinças cirúrgicas ao término dessa etapa é de:",
    options: [
      { id: "a", text: "1,73 g", isCorrect: true, distractorRationale: null },
      { id: "b", text: "5,20 g", isCorrect: false, distractorRationale: "Esqueceu de dividir pelo número de elétrons transferidos (n = 3 e⁻ por átomo de Cr³⁺): 0,1 mol × 52 g/mol = 5,2 g." },
      { id: "c", text: "0,58 g", isCorrect: false, distractorRationale: "Dividiu a carga por 3 repetidamente." },
      { id: "d", text: "3,46 g", isCorrect: false, distractorRationale: "Assumiu que o cromo possuía carga +2 em vez de +3 na semirreação catódica." },
      { id: "e", text: "52,0 g", isCorrect: false, distractorRationale: "Calculou a massa correspondente a 1 mol inteiro de cromo sem ponderar a carga circulada." }
    ],
    detailedExplanation: {
      summary: "Pela 1ª e 2ª Leis de Faraday, a massa eletrodepositada é proporcional à carga elétrica total que atravessa o sistema: m = (M · Q) / (n · F).",
      stepByStep: [
        "Semirreação catódica de redução do cromo: Cr³⁺(aq) + 3e⁻ → Cr⁰(s). Portanto, são necessários 3 mols de elétrons para cada mol de cromo metálico formado.",
        "Carga elétrica circulada: Q = i · t = 9,65 A × 1 000 s = 9 650 Coulombs.",
        "Quantidade de matéria de elétrons: n_e = Q / F = 9 650 C / 96 500 C/mol = 0,10 mol de e⁻.",
        "Quantidade de matéria de cromo depositado: n_Cr = 0,10 mol / 3 = 0,0333 mol de Cr.",
        "Massa depositada: m = n_Cr × M_Cr = (0,10 / 3) × 52 g/mol = 5,20 / 3 ≈ 1,73 g."
      ],
      coreConcept: "Leis de Faraday e Eletrodeposição Quantitativa de Metais",
      trapWarning: "Atenção ao número de elétrons (n): o cromo(III) requer 3 elétrons por átomo; dividir por n é indispensável!"
    },
    commonTraps: ["esquecer de dividir pela valencia do cation", "errar a conversao de tempo para segundos"],
    tags: ["leis de faraday", "eletrodeposicao", "galvanoplastia", "calculo eletroquimico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-012",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Eletrólise Aquosa de NaCl e Indústria de Cloro-Álcalis",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A indústria química de saneamento básico e higiene hospitalar depende massivamente da eletrólise de soluções aquosas concentradas de cloreto de sódio (salmoura). Nesse sistema aquoso com eletrodos inertes de grafite, coexistem cátions Na⁺ e H⁺ (da autoionização da água), além de ânions Cl⁻ e OH⁻, disputando a descarga nos polos elétricos sob diferença de potencial aplicada.",
      source: "ENEM / Eletroquímica Aplicada e Indústria de Cloro-Soda"
    },
    prompt: "Com base na fila de prioridade de descarga de íons em meio aquoso, as espécies gasosas liberadas no cátodo e no ânodo e a substância remanescente dissolvida na solução são, respectivamente:",
    options: [
      { id: "a", text: "gás hidrogênio (H₂), gás cloro (Cl₂) e hidróxido de sódio (NaOH).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "sódio metálico (Na), gás cloro (Cl₂) e água pura.", isCorrect: false, distractorRationale: "O sódio metálico só é produzido na eletrólise ÍGNEA (sem água), pois em meio aquoso o H⁺ descarrega antes do Na⁺." },
      { id: "c", text: "gás oxigênio (O₂), gás hidrogênio (H₂) e cloreto de sódio inalterado.", isCorrect: false, distractorRationale: "O ânion Cl⁻ (haleto não fluoretado) tem prioridade de descarga sobre o OH⁻ da água no ânodo, liberando Cl₂ e não O₂." },
      { id: "d", text: "gás cloro (Cl₂), gás hidrogênio (H₂) e ácido hipocloroso líquido.", isCorrect: false, distractorRationale: "A solução restante acumula íons Na⁺ e OH⁻, formando solução fortemente básica de NaOH, não ácida." },
      { id: "e", text: "gás metano (CH₄), vapor de água e carbonato de sódio.", isCorrect: false, distractorRationale: "Não há carbono na salmoura; metano é impossível como subproduto." }
    ],
    detailedExplanation: {
      summary: "Na eletrólise aquosa do NaCl, os íons que descarregam são o H⁺ (no cátodo, formando H₂) e o Cl⁻ (no ânodo, formando Cl₂), restando Na⁺ e OH⁻ na solução (NaOH).",
      stepByStep: [
        "Fila de descarga catódica (cátions): H⁺ tem prioridade sobre metais alcalinos (Na⁺), alcalinoterrosos e alumínio. Logo, 2 H⁺ + 2e⁻ → H₂(g) no polo negativo (cátodo).",
        "Fila de descarga anódica (ânions): Ânions não oxigenados (como Cl⁻) e HSO₄⁻ têm prioridade sobre o OH⁻ da água e ânions oxigenados. Logo, 2 Cl⁻ → Cl₂(g) + 2e⁻ no polo positivo (ânodo).",
        "Substâncias remanescentes na solução aquosa: sobram os íons Na⁺ e OH⁻ livres.",
        "Associação em solução: Na⁺(aq) + OH⁻(aq) formam o hidróxido de sódio (soda cáustica), elevando acentuadamente o pH do meio aquoso."
      ],
      coreConcept: "Prioridade de Descarga em Eletrólise Aquosa de Sais",
      trapWarning: "CUIDADO: Sódio metálico (Na⁰) NUNCA se forma na eletrólise aquosa! Ele reage instantaneamente e violentamente com a água."
    },
    commonTraps: ["confundir eletrolise aquosa com eletrolise ignea do NaCl", "achar que o oxigenio descarrega antes do cloro"],
    tags: ["eletrolise aquosa", "cloro-soda", "prioridade de descarga", "industria quimica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-013",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Baterias Recarregáveis de Íon-Lítio (Células Secundárias)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Prêmio Nobel de Química de 2019 condecorou o desenvolvimento das baterias recarregáveis de íon-lítio (Li-ion), as quais permitiram a miniaturização de aparelhos médicos essenciais, tais como marcapassos cardíacos modernos, monitores de sinais vitais portáteis e aparelhos de telemetria ambulatorial. Durante o ciclo de descarga da bateria, os átomos de lítio intercalados nos planos de grafite (ânodo) liberam elétrons para a corrente externa, enquanto os cátions Li⁺ migram através do eletrólito orgânico para o óxido metálico lamelar (cátodo).",
      source: "ENEM / Eletroquímica Moderna e Tecnologias de Energia"
    },
    prompt: "A superioridade tecnológica das baterias de íon-lítio em densidade energética e leveza mecânica frente às antigas baterias de chumbo-ácido e níquel-cádmio decorre do fato de o lítio:",
    options: [
      { id: "a", text: "possuir a menor massa molar entre todos os elementos metálicos e um potencial padrão de oxidação extremamente elevado.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "atuar como metal nobre inerte com facilidade espontânea de sofrer redução catódica direta.", isCorrect: false, distractorRationale: "O lítio é o metal alcalino mais reativo e tem o mais negativo potencial padrão de redução (~ -3,04 V), sendo péssimo metal nobre." },
      { id: "c", text: "ser um elemento radioativo natural que fornece energia por decaimento alfa em circuito selado.", isCorrect: false, distractorRationale: "O lítio estável utilizado em baterias comerciais não é radioativo." },
      { id: "d", text: "formar ligações covalentes perfeitas que anulam totalmente a resistência ôhmica interna.", isCorrect: false, distractorRationale: "Baterias Li-ion operam com transporte de íons Li⁺ por difusão iônica e elétrons em condução metálica comum." },
      { id: "e", text: "possuir ponto de ebulição inferior a zero grau Celsius, atuando como condutor supercrítico gasoso.", isCorrect: false, distractorRationale: "O lítio é um metal sólido com ponto de fusão superior a 180 °C." }
    ],
    detailedExplanation: {
      summary: "O lítio (Z = 3, M ≈ 6,94 g/mol) combina leveza atômica recorde com o maior potencial de oxidação da tabela periódica (Eºox ≈ +3,04 V).",
      stepByStep: [
        "Densidade de energia gravimétrica: a quantidade de energia gerada por quilograma de material é máxima quando o átomo é leve (baixo M) e fornece alta voltagem.",
        "O lítio é o terceiro elemento da tabela periódica e o metal mais leve existente.",
        "Seu potencial padrão de redução é o mais negativo de todos (-3,04 V), o que confere às células de lítio uma força eletromotriz de célula muito alta (3,7 V a 4,2 V por célula individual, contra apenas 2,0 V do chumbo-ácido e 1,2 V do níquel-cádmio).",
        "Além disso, a tecnologia de intercalação (shuttle de íons Li⁺) não destrói a microestrutura dos eletrodos, garantindo centenas de ciclos de recarga sem memória."
      ],
      coreConcept: "Eletroquímica do Lítio e Densidade Energética de Baterias Secundárias",
      trapWarning: "Lembre-se: quanto mais negativo o Eºred de um metal, MAIS FORTE é seu poder redutor e maior sua tendência a oxidar (doar elétrons)!"
    },
    commonTraps: ["confundir facilidade de oxidar com nobreza metalica", "achar que baterias de litio utilizam fusao nuclear"],
    tags: ["bateria de litio", "ion-litio", "potencial de reducao", "densidade energetica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-014",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Células a Combustível de Hidrogênio (H₂/O₂)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em infraestruturas hospitalares sustentáveis, pesquisam-se geradores movidos a células a combustível de membrana trocadora de prótons (PEMFC). Esses dispositivos são abastecidos continuamente com gás hidrogênio (H₂) no compartimento anódico e oxigênio atmosférico (O₂) no compartimento catódico. Sob catálise de nanopartículas de platina, as semirreações que ocorrem são:\nÂnodo: 2 H₂(g) → 4 H⁺(aq) + 4 e⁻   (Eº = 0,00 V)\nCátodo: O₂(g) + 4 H⁺(aq) + 4 e⁻ → 2 H₂O(l)   (Eº = +1,23 V)",
      source: "ENEM / Células a Combustível e Transição Energética"
    },
    prompt: "Em relação ao funcionamento e ao impacto ambiental da célula a combustível descrita, é correto afirmar que:",
    options: [
      { id: "a", text: "converte diretamente energia química em energia elétrica com alta eficiência, emitindo exclusivamente vapor de água líquida como subproduto direto.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "opera com rendimento térmico limitado pelo ciclo de Carnot por depender de uma combustão com chamas a altas pressões.", isCorrect: false, distractorRationale: "Células a combustível NÃO são máquinas térmicas; convertem energia livre eletroquímica diretamente em eletricidade sem combustão com chama." },
      { id: "c", text: "consome monóxido de carbono e libera óxidos de enxofre altamente corrosivos para a rede elétrica hospitalar.", isCorrect: false, distractorRationale: "O CO é na verdade um veneno catalítico para a platina da célula; o combustível limpo é H₂ puro e o produto é H₂O." },
      { id: "d", text: "apresenta diferença de potencial padrão negativa (-1,23 V), exigindo um gerador de corrente alternada permanente para operar.", isCorrect: false, distractorRationale: "ΔEº = +1,23 V - 0,00 V = +1,23 V (reação galvânica perfeitamente espontânea)." },
      { id: "e", text: "utiliza o oxigênio atmosférico como agente redutor anódico na geração de radicais livres.", isCorrect: false, distractorRationale: "O O₂ é o oxidante (agente oxidante que se reduz no cátodo), enquanto o H₂ é o agente redutor no ânodo." }
    ],
    detailedExplanation: {
      summary: "A célula a combustível H₂/O₂ é um dispositivo galvânico contínuo que produz água e eletricidade com emissão zero de gases do efeito estufa no ponto de uso.",
      stepByStep: [
        "A reação global é: 2 H₂(g) + O₂(g) → 2 H₂O(l), com ΔEº = +1,23 V.",
        "Como a conversão é eletroquímica direta (eletrodo-eletrólito), ela não passa pela conversão intermediária em calor mecânico, contornando o limite de Carnot das máquinas a vapor.",
        "Isso confere às células a combustível rendimentos elétricos de 50% a 70% (superiores aos 25-35% de motores a combustão interna).",
        "O único resíduo direto da reação eletroquímica é água quimicamente pura."
      ],
      coreConcept: "Célula a Combustível, Reações Redox Limpas e Eficiência Energética",
      trapWarning: "Lembre-se: célula a combustível é um gerador químico direto, NÃO é um motor a combustão que queima gás!"
    },
    commonTraps: ["achar que celula a combustivel e maquina termica de Carnot", "inverter quem oxida e quem reduz entre H2 e O2"],
    tags: ["celula a combustivel", "hidrogenio verde", "eletroquimica limpa", "potencial padrao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-015",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Obtenção do Alumínio por Eletrólise Ígnea (Processo Hall-Héroult)",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A obtenção industrial de alumínio metálico a partir do mineral bauxita (rico em Al₂O₃) não pode ser realizada por eletrólise aquosa, pois o potencial padrão de redução da água (-0,83 V) é muito superior ao do cátion alumínio (Al³⁺ + 3e⁻ → Al⁰, com Eº = -1,66 V), de modo que apenas o gás hidrogênio seria gerado no cátodo. Por isso, a metalurgia emprega o processo Hall-Héroult, no qual a alumina anidra é dissolvida em criolita fundida (Na₃AlF₆) a cerca de 950 °C em cubas eletrolíticas.",
      source: "ENEM / Metalurgia Eletrolítica e Sustentabilidade"
    },
    prompt: "A necessidade de conduzir o processo por via ígnea anidra e a adição da criolita fundida justificam-se, respectivamente, para:",
    options: [
      { id: "a", text: "impedir a descarga prioritária da água no cátodo e diminuir o ponto de fusão da alumina de mais de 2 000 °C para cerca de 950 °C, reduzindo custos de energia.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "aumentar a temperatura do forno para 4 000 °C e favorecer a formação de ligas ferrosas no fundo da cuba.", isCorrect: false, distractorRationale: "A criolita atua como fundente, BAIXANDO o ponto de fusão de 2 050 °C para ~950 °C, e não aumentando." },
      { id: "c", text: "prover um cátodo gasoso que reaja espontaneamente com o carbono para liberar ácido fluorídrico.", isCorrect: false, distractorRationale: "O objetivo é precipitar alumínio líquido denso no fundo, e a liberação de HF é um passivo indesejado a ser evitado." },
      { id: "d", text: "eliminar o consumo de energia elétrica, tornando o processo uma síntese endotérmica espontânea a frio.", isCorrect: false, distractorRationale: "A eletrólise ígnea do alumínio é um dos processos industriais que mais consomem eletricidade na economia mundial." },
      { id: "e", text: "substituir o oxigênio por sódio metálico no revestimento refratário externo das cubas.", isCorrect: false, distractorRationale: "O sódio metálico destruiria a estrutura de sustentação da cuba." }
    ],
    detailedExplanation: {
      summary: "A alumina pura funde a 2 050 °C; a criolita atua como solvente fundente baixando o ponto de fusão para 950 °C, viabilizando a eletrólise ígnea que evita a descarga da água.",
      stepByStep: [
        "Em meio aquoso, cátions com Eºred muito negativo (como Al³⁺, Na⁺, K⁺, Ca²⁺) não reduzem porque a água sofre redução antes (2 H₂O + 2e⁻ → H₂ + 2 OH⁻). Logo, a eletrólise TEM que ser ígnea (sem água).",
        "A alumina pura (Al₂O₃) possui ponto de fusão altíssimo (> 2 050 °C), inviável técnica e economicamente para manter em cubas de aço.",
        "A adição de criolita (Na₃AlF₆) forma uma mistura eutética que funde a ~950 °C, economizando bilhões de quilowatts-hora de energia térmica.",
        "No cátodo de carbono, ocorre a redução: Al³⁺ + 3e⁻ → Al(l), que se deposita no fundo da cuba e é drenado periodicamente."
      ],
      coreConcept: "Eletrólise Ígnea de Metais Muito Eletropositivos e Papel de Fundentes",
      trapWarning: "A reciclagem de latinhas de alumínio economiza cerca de 95% da energia elétrica gasta na produção primária por eletrólise Hall-Héroult!"
    },
    commonTraps: ["achar que criolita aumenta a temperatura de fusao", "ignorar porque a eletrolise nao pode ser aquosa"],
    tags: ["eletrolise ignea", "aluminio", "hall-heroult", "criolita", "fundente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-016",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Acumulador de Chumbo-Ácido: Descarga e Recarga",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema de no-breaks dos centros cirúrgicos hospitalares, utilizam-se baterias estacionárias de chumbo-ácido. O funcionamento desse acumulador secundário baseia-se na equação global reversível:\nPb(s) + PbO₂(s) + 2 H₂SO₄(aq)  ⇌  2 PbSO₄(s) + 2 H₂O(l)   (sentido direto = descarga; sentido inverso = recarga).",
      source: "ENEM / Baterias Automotivas e Acumuladores de Chumbo"
    },
    prompt: "Durante o período de interrupção da rede elétrica, enquanto a bateria de chumbo opera fornecendo energia aos monitores cardíacos (processo de descarga espontânea), verifica-se que:",
    options: [
      { id: "a", text: "o ácido sulfúrico é consumido e a água é produzida, provocando diminuição progressiva da densidade e elevação do pH da solução eletrolítica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a concentração de ácido sulfúrico no eletrólito se eleva bruscamente, tornando o meio cem vezes mais ácido.", isCorrect: false, distractorRationale: "O H₂SO₄ é REAGENTE na descarga, logo sua concentração DIMINUI com o tempo de uso." },
      { id: "c", text: "ambos os eletrodos metálicos são corroídos completamente na forma de sulfeto de chumbo gasoso.", isCorrect: false, distractorRationale: "O produto precipitado em ambos os eletrodos é sulfato de chumbo sólido insolúvel (PbSO₄), sem emissão gasosa." },
      { id: "d", text: "a massa sólida das placas dos eletrodos diminui até a dissolução aquosa integral dos metais.", isCorrect: false, distractorRationale: "A massa das placas AUMENTA na descarga devido à incorporação do ânion sulfato formando PbSO₄ sólido." },
      { id: "e", text: "o oxigênio molecular é liberado sob borbulhamento violento na placa de chumbo puro.", isCorrect: false, distractorRationale: "A reação de descarga não libera O₂ gasoso." }
    ],
    detailedExplanation: {
      summary: "Na descarga do acumulador de chumbo, consome-se H₂SO₄ e forma-se H₂O líquida e PbSO₄ sólido aderido às placas, fazendo a densidade da solução cair.",
      stepByStep: [
        "Ânodo na descarga (oxidação): Pb(s) + SO₄²⁻(aq) → PbSO₄(s) + 2e⁻.",
        "Cátodo na descarga (redução): PbO₂(s) + 4 H⁺(aq) + SO₄²⁻(aq) + 2e⁻ → PbSO₄(s) + 2 H₂O(l).",
        "Reação global: Pb(s) + PbO₂(s) + 2 H₂SO₄(aq) → 2 PbSO₄(s) + 2 H₂O(l).",
        "Efeito na solução aquosa: consome-se ácido concentrado e gera-se água; logo, a concentração de H⁺ diminui (pH sobe) e a densidade da solução líquida cai.",
        "Por isso, mecânicos mediam a carga da bateria antiga com um densímetro de líquidos!"
      ],
      coreConcept: "Química do Acumulador de Chumbo-Ácido e Monitoramento de Densidade",
      trapWarning: "Lembre-se: no processo de descarga, sulfato de chumbo (PbSO₄) sólido se forma e se deposita em AMBOS os eletrodos!"
    },
    commonTraps: ["achar que a densidade do liquido aumenta na descarga", "confundir o sentido da descarga com o da recarga"],
    tags: ["bateria de chumbo", "acumulador", "densidade eletrolitica", "reversibilidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-017",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Potencial Não-Padrão e Equilíbrio Químico em Pilhas (Equação de Nernst)",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere uma pilha eletroquímica reversível montada no laboratório de análises clínicas operando segundo a seguinte equação iônica global:\nCu(s) + 2 Ag⁺(aq)  ⇌  Cu²⁺(aq) + 2 Ag(s)    (ΔEº = +0,46 V a 25 °C e concentrações molares de 1,0 mol/L).\nO pesquisador pretende maximizar a força eletromotriz instantânea (ddp) gerada pela célula para realizar leituras biossensoriais de alta sensibilidade.",
      source: "ENEM / Equilíbrio Químico e Eletroquímica"
    },
    prompt: "Com base no Princípio de Le Chatelier e na dependência dos potenciais elétricos em relação às concentrações iônicas, a ddp dessa pilha aumentará se o operador:",
    options: [
      { id: "a", text: "elevar a concentração molar de íons Ag⁺ na semicela catódica ou diluir a concentração de íons Cu²⁺ na semicela anódica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "adicionar sulfato de cobre solúvel na semicela anódica para aumentar a concentração de íons Cu²⁺.", isCorrect: false, distractorRationale: "Aumentar produtos (Cu²⁺) desloca o equilíbrio para a esquerda e DIMINUI a ddp da pilha." },
      { id: "c", text: "adicionar gotas de cloreto de sódio na semicela catódica para precipitar a prata na forma de AgCl sólido.", isCorrect: false, distractorRationale: "Precipitar Ag⁺ reduz a concentração de reagentes, diminuindo a ddp da pilha." },
      { id: "d", text: "duplicar a espessura e a massa da lâmina de prata metálica inserida no cátodo.", isCorrect: false, distractorRationale: "Espécies sólidas puras têm atividade unitária e não alteram o potencial eletroquímico da célula." },
      { id: "e", text: "remover metade da solução aquosa de ambos os recipientes mantendo as concentrações inalteradas.", isCorrect: false, distractorRationale: "Alterar apenas o volume sem modificar a concentração molar não muda a ddp da pilha." }
    ],
    detailedExplanation: {
      summary: "Pela Equação de Nernst [ΔE = ΔEº - (RT/nF) · ln(Q)], a ddp aumenta quando aumentamos a concentração de reagentes aquosos (Ag⁺) ou reduzimos produtos aquosos (Cu²⁺).",
      stepByStep: [
        "Quociente reacional da pilha: Q = [Cu²⁺] / [Ag⁺]² (metais sólidos não entram na expressão).",
        "Pelo Princípio de Le Chatelier: perturbações que deslocam o equilíbrio no sentido direto (formação de produtos) aumentam a espontaneidade e elevam a ddp.",
        "Ao aumentar [Ag⁺] (reagente), o sistema é forçado a caminhar para a direita (sentido direto), aumentando a ddp.",
        "Ao diminuir [Cu²⁺] (produto), o quociente Q diminui, o que também desloca o equilíbrio para a direita e aumenta a ddp.",
        "Quando uma pilha 'descarrega' até o fim, ela atinge o equilíbrio químico dinâmico e sua ddp torna-se nula (ΔE = 0 V)."
      ],
      coreConcept: "Influência das Concentrações Iônicas na Força Eletromotriz (Le Chatelier e Nernst)",
      trapWarning: "Lembre-se: adicionar mais metal sólido (como prata ou cobre) NÃO altera a ddp da pilha!"
    },
    commonTraps: ["achar que aumentar a lamina de metal aumenta a voltagem", "confundir ddp com capacidade de carga total"],
    tags: ["nernst", "le chatelier", "ddp nao-padrao", "equilibrio quimico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-018",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Mecanismo Eletroquímico de Corrosão do Ferro e Ferrugem",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A corrosão galvânica atmosférica das estruturas metálicas de ferro expostas ao ar úmido provoca perdas orçamentárias anuais bilionárias. O processo químico espontâneo ocorre na superfície do aço quando gotas de água atuam como microcélulas galvânicas: regiões anódicas do ferro oxidam a Fe²⁺, enquanto nas bordas da gota o oxigênio atmosférico se reduz a hidroxila (OH⁻) na presença de água. A reação contínua produz hidróxido de ferro(II), que é ulteriormente superoxidado pelo ar a óxido de ferro(III) hidratado (ferrugem porosa: Fe₂O₃ · xH₂O).",
      source: "ENEM / Eletroquímica Ambiental e Mecanismo de Corrosão"
    },
    prompt: "A taxa de corrosão do ferro acelera-se dramaticamente em ambientes urbanos litorâneos ou de intensa poluição atmosférica ácida porque:",
    options: [
      { id: "a", text: "a presença de íons cloreto e sódio trazidos pela maresia e de ácidos na precipitação aumenta exponencialmente a condutividade elétrica do filme de água superficial.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o sal marinho atua como redutor biológico que catalisa a fissão nuclear dos átomos de carbono da liga.", isCorrect: false, distractorRationale: "O sal não realiza fissão nuclear; atua como eletrólito iônico que fecha o circuito elétrico." },
      { id: "c", text: "a alta concentração de vapor d'água atmosférico impede o ferro de receber calor sensível da radiação solar.", isCorrect: false, distractorRationale: "A corrosão é um fenômeno redox eletroquímico, não de bloqueio de calor sensível." },
      { id: "d", text: "o ar costeiro possui teor de oxigênio gasoso três vezes superior ao ar do interior dos continentes.", isCorrect: false, distractorRationale: "A proporção de O₂ no ar é constante em ~21% na baixa troposfera." },
      { id: "e", text: "os íons cloreto reduzem o ferro oxidado de volta a ferro puro amorfo que sublima no ar.", isCorrect: false, distractorRationale: "O íon cloreto na verdade ataca a camada de passivação do metal e acelera a destruição do aço." }
    ],
    detailedExplanation: {
      summary: "A água pura é péssima condutora de eletricidade; a adição de eletrólitos solúveis (sais da maresia ou ácidos da poluição) fecha o circuito eletroquímico e dispara a corrosão.",
      stepByStep: [
        "A ferrugem exige simultaneamente FERRO, OXIGÊNIO e ÁGUA LÍQUIDA.",
        "A gota de água funciona como eletrólito de uma micropilha de corrosão galvânica.",
        "Quando a água contém íons dissolvidos (Na⁺, Cl⁻ da maresia; H⁺, SO₄²⁻ da chuva ácida), sua resistividade elétrica despenca e sua condutividade iônica salta ordens de grandeza.",
        "Além disso, o íon Cl⁻ rompe a camada protetora passivante natural dos metais (corrosão por pites), provocando perfurações rápidas e severas na estrutura metálica."
      ],
      coreConcept: "Mecanismo Eletroquímico de Corrosão e Fatores de Aceleração por Eletrólitos",
      trapWarning: "Ferro NÃO enferruja apenas em água desaerada (sem oxigênio) nem em ar seco (sem umidade); ambos são obrigatórios!"
    },
    commonTraps: ["achar que a maresia reage quimicamente sozinha sem agua", "esquecer que o oxigenio gasoso e o agente oxidante"],
    tags: ["corrosao do ferro", "ferrugem", "maresia", "eletrolito", "micropilhas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-019",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Refino Eletrolítico do Cobre (Eletrorrefino)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O cobre bruto obtido a partir da ustulação da calcopirita possui pureza de cerca de 98% a 99% (cobre blister), inadequada para a fiação de equipamentos hospitalares de alta precisão, que exigem condutividade elétrica máxima com pureza superior a 99,99%. Essa purificação é realizada industrialmente por refino eletrolítico em uma cuba contendo solução aquosa ácida de sulfato de cobre (CuSO₄).",
      source: "ENEM / Eletrometalurgia e Refino de Metais"
    },
    prompt: "Para que o eletrorrefino do cobre ocorra com máxima pureza, as placas de cobre bruto impuro e a lâmina de cobre puro de partida devem ser conectadas, respectivamente, aos polos:",
    options: [
      { id: "a", text: "positivo (ânodo), onde o cobre bruto sofre oxidação e se dissolve na solução, e negativo (cátodo), onde íons Cu²⁺ purificados se reduzem e se depositam.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "negativo (cátodo), onde as impurezas metálicas são atraídas, e positivo (ânodo), onde o cobre puro evapora na forma de plasma.", isCorrect: false, distractorRationale: "No cátodo ocorre redução seletiva do Cu²⁺ puro; no ânodo ocorre oxidação do bloco impuro." },
      { id: "c", text: "positivo (cátodo) e negativo (ânodo), em conformidade com as pilhas espontâneas de Daniell.", isCorrect: false, distractorRationale: "Na eletrólise (processo não espontâneo forçado por gerador), o cátodo é o polo NEGATIVO e o ânodo é o polo POSITIVO." },
      { id: "d", text: "ambos ao polo neutro aterrado para permitir difusão capilar mecânica espontânea.", isCorrect: false, distractorRationale: "O refino eletrolítico necessita obrigatoriamente de fonte externa de corrente contínua." },
      { id: "e", text: "positivo em corrente alternada para alternar o sentido dos elétrons a cada segundo.", isCorrect: false, distractorRationale: "A eletrólise requer rigorosamente corrente contínua (CC), pois a corrente alternada desmancharia a deposição." }
    ],
    detailedExplanation: {
      summary: "No refino eletrolítico, o cobre impuro é oxidado no ânodo (+) e deposita-se seletivamente purificado no cátodo (-).",
      stepByStep: [
        "Polo Positivo (Ânodo da eletrólise): placa grossa de cobre impuro (blister). O cobre e metais mais reativos (como ferro e zinco) sofrem oxidação e passam para a solução na forma de cátions.",
        "Impurezas menos nobres que o cobre (como ouro e prata) não oxidam nessa voltagem e caem no fundo da cuba como preciosa 'lama anódica'.",
        "Polo Negativo (Cátodo da eletrólise): lâmina fina de cobre de altíssima pureza. Na voltagem controlada da cuba, apenas os íons Cu²⁺ sofrem redução seletiva: Cu²⁺(aq) + 2e⁻ → Cu⁰(s).",
        "Resultado: cobre eletrolítico com mais de 99,99% de pureza depositado no cátodo."
      ],
      coreConcept: "Eletrorrefino de Metais e Formação da Lama Anódica",
      trapWarning: "Lembre-se: na ELETRÓLISE, o Cátodo é NEGATIVO e o Ânodo é POSITIVO (o inverso da pilha, onde Cátodo é + e Ânodo é -)!"
    },
    commonTraps: ["inverter a polaridade dos eletrodos na eletrolise", "achar que o ouro vai para a solucao aquosa"],
    tags: ["eletrorrefino", "cobre", "eletrolise", "lama anodica", "pureza metalica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELETROQ-020",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletroquímica",
    subtopic: "Eletrodo Padrão de Hidrogênio (EPH) e Potenciais de Redução",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A determinação absoluta do potencial de uma semirreação isolada é experimentalmente impossível, pois uma oxidação necessita acoplar-se obrigatoriamente a uma redução para que haja circulação de cargas. Por convenção internacional da IUPAC, definiu-se como referência universal o Eletrodo Padrão de Hidrogênio (EPH), ao qual se atribuiu o potencial padrão de exatamente 0,00 V a 25 °C, sob pressão de 1 atm de gás H₂ e concentração de 1,0 mol/L de íons H⁺.",
      source: "ENEM / Eletrodo Padrão e Termodinâmica Eletroquímica"
    },
    prompt: "Se uma espécie metálica hipotética M conectada ao EPH apresentar potencial padrão de redução de Eº(M²⁺/M) = -0,76 V, infere-se cientificamente que, nas condições-padrão:",
    options: [
      { id: "a", text: "o metal M na forma neutra possui maior tendência a oxidar (perder elétrons) do que o gás hidrogênio molecular (H₂).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "os cátions M²⁺ em solução reduzem-se espontaneamente na presença de íons H⁺.", isCorrect: false, distractorRationale: "Como Eºred é negativo (-0,76 V < 0,00 V), o cátion M²⁺ é mais difícil de reduzir do que o H⁺." },
      { id: "c", text: "o eletrodo de platina do EPH sofrerá dissolução corrosiva imediata.", isCorrect: false, distractorRationale: "A platina é um metal inerte que atua apenas como condutor de elétrons e suporte catalítico." },
      { id: "d", text: "a diferença de potencial da pilha formada entre esse metal e o EPH será rigorosamente igual a zero.", isCorrect: false, distractorRationale: "A ddp da pilha será ΔEº = 0,00 - (-0,76) = +0,76 V, perfeitamente mensurável e positiva." },
      { id: "e", text: "a espécie metálica M comportar-se-á como um oxidante mais enérgico do que o gás flúor.", isCorrect: false, distractorRationale: "Metais com potencial de redução muito negativo são agentes REDUTORES fortes, não oxidantes." }
    ],
    detailedExplanation: {
      summary: "O Eletrodo Padrão de Hidrogênio (Eº = 0,00 V) é a referência: potenciais negativos indicam maior tendência a oxidar do que o H₂.",
      stepByStep: [
        "Semirreação padrão de referência: 2 H⁺(aq) + 2e⁻ ⇌ H₂(g), Eº = 0,00 V.",
        "Se Eº(M²⁺/M) = -0,76 V, o metal M²⁺ tem menor tendência a receber elétrons do que o H⁺.",
        "Por consequência direta, o metal neutro M⁰ tem MAIOR tendência a doar elétrons (oxidar) do que o H₂ gasoso:",
        "M⁰(s) + 2 H⁺(aq) → M²⁺(aq) + H₂(g)  (ΔEº = +0,76 V, reação espontânea com desprendimento de gás hidrogênio).",
        "Metais com Eºred < 0 reagem com ácidos minerais diluídos desprendendo gás H₂."
      ],
      coreConcept: "Escala Padrão de Potenciais Eletroquímicos e Eletrodo de Hidrogênio",
      trapWarning: "Lembre-se: metal com potencial de redução NEGATIVO é reativo e reage espontaneamente com ácidos liberando bolhas de H₂!"
    },
    commonTraps: ["achar que potencial negativo significa que nao funciona como pilha", "inverter tendencia de oxidacao com reducao"],
    tags: ["eletrodo de hidrogenio", "potencial padrao", "escala de potenciais", "reatividade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

