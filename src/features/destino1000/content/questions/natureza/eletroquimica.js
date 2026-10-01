export const QUESTIONS_ELETROQUIMICA = [
  {
    id: "NAT-ELET-001",
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
    id: "NAT-ELET-002",
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
    id: "NAT-ELET-003",
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
    id: "NAT-ELET-004",
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
    id: "NAT-ELET-005",
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
    id: "NAT-ELET-006",
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
    id: "NAT-ELET-007",
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
    id: "NAT-ELET-008",
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
    id: "NAT-ELET-009",
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
    id: "NAT-ELET-010",
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
  }
];
