export const QUESTIONS_QUIMICA_ORGANICA = [
  {
    id: "NAT-ORG-001",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Química Orgânica",
    subtopic: "Ação Tensoativa de Sabões e Micelas",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O sabão tradicional é produzido industrialmente pela reação de saponificação entre um triglicerídeo (óleo vegetal ou gordura animal) e uma base forte (como hidróxido de sódio, NaOH), resultando em sais de ácidos graxos de cadeia longa e glicerol.",
      source: "ENEM Clássico de Química"
    },
    prompt: "A capacidade do sabão de remover manchas de óleo e gordura em água decorre do fato de suas moléculas serem anfifílicas (ou anfipáticas), o que significa que:",
    options: [
      { id: "a", text: "Possuem uma longa cauda carbônica apolar hidrofóbica que interage com a gordura e uma cabeça iônica polar hidrofílica que interage com a água, formando micelas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Possuem duas extremidades estritamente polares que dissolvem quimicamente as pontes de hidrogênio da gordura.", isCorrect: false, distractorRationale: "A cauda é apolar (hidrocarboneto) e a gordura é apolar, não faz pontes de hidrogênio." },
      { id: "c", text: "Agem neutralizando o pH ácido da gordura, transformando-a espontaneamente em substância volátil.", isCorrect: false, distractorRationale: "O sabão não neutraliza a gordura para evaporá-la; a limpeza é mecânica-estrutural (micelar)." },
      { id: "d", text: "Aumentam a tensão superficial da água, forçando as gotas de óleo a precipitarem no fundo do recipiente.", isCorrect: false, distractorRationale: "O sabão DIMINUI a tensão superficial da água (é um surfactante)." },
      { id: "e", text: "Quebram as ligações covalentes da gordura através de uma reação endotérmica com o oxigênio.", isCorrect: false, distractorRationale: "Não há quebra de ligações covalentes das cadeias lipídicas na lavagem com sabão." }
    ],
    detailedExplanation: {
      summary: "Moléculas de sabão são sais de ácidos graxos (anfifílicas), com cauda apolar e cabeça polar.",
      stepByStep: [
        "A cauda longa de hidrocarboneto é APOLAR e HIDROFÓBICA: interage com o óleo/gordura por dipolo induzido (interações de London).",
        "A cabeça carboxilato (-COO⁻ Na⁺) é POLAR, IÔNICA e HIDROFÍLICA: interage com a água por atração íon-dipolo.",
        "Em meio aquoso, essas moléculas organizam-se em esferas chamadas MICELAS: a gordura fica aprisionada no centro e o exterior interage com a água, permitindo o arraste."
      ],
      coreConcept: "Estrutura Anfifílica dos Tensoativos e Formação de Micelas",
      trapWarning: "Lembre-se: Sabões DIMINUEM a tensão superficial da água, facilitando que ela 'molhe' o tecido."
    },
    commonTraps: ["dizer que tensoativo aumenta tensão superficial", "confundir qual parte interage com o óleo"],
    tags: ["quimica organica", "sabao", "micelas", "polaridade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-002",
    area: "natureza",
    competence: 7,
    skill: 25,
    topic: "Química Orgânica",
    subtopic: "Isomeria Óptica e Carbono Quiral",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A talidomida é um exemplo trágico da importância da estereoquímica na farmacologia. Enquanto o enantiômero (R) possui efeito sedativo seguro, o enantiômero (S) é fortemente teratogênico, causando malformações congênitas em fetos.",
      source: "ENEM Farmacologia"
    },
    prompt: "Para que uma molécula orgânica apresente atividade óptica e possua enantiômeros (isômeros espaciais que são imagens especulares não sobreponíveis), ela deve obrigatoriamente apresentar:",
    options: [
      { id: "a", text: "Ao menos um carbono assimétrico (quiral), que é sp³ e ligado a quatro ligantes químicos completamente distintos entre si.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Uma ligação dupla entre carbonos com ligantes diferentes em cada carbono (isomeria cis-trans).", isCorrect: false, distractorRationale: "Ligação dupla com ligantes diferentes gera isomeria GEOMÉTRICA (diastereoisomeria), não óptica." },
      { id: "c", text: "Um anel aromático com pelo menos dois substituintes na posição orto.", isCorrect: false, distractorRationale: "Anéis aromáticos são planos (sp²) e não conferem quiralidade por si só." },
      { id: "d", text: "Um grupo carboxila ligado a uma amina terminal em extremidades opostas da cadeia.", isCorrect: false, distractorRationale: "Isso define um aminoácido, mas a quiralidade decorre do carbono central, não dos grupos em si." },
      { id: "e", text: "Ligação tripla central que impeça a livre rotação dos eixos moleculares.", isCorrect: false, distractorRationale: "Ligações triplas são lineares (sp) e não possuem assimetria óptica." }
    ],
    detailedExplanation: {
      summary: "A isomeria óptica decorre da assimetria molecular gerada pela presença de carbono quiral (C*).",
      stepByStep: [
        "Carbono quiral (C*) deve ter hibridização sp³ (4 ligações simples).",
        "Deve possuir 4 ligantes (grupos) TOTALMENTE DIFERENTES entre si: -R1 ≠ -R2 ≠ -R3 ≠ -R4.",
        "Uma molécula com n carbonos quirais distintos possui 2ⁿ isômeros opticamente ativos (dextrógiros e levógiros) e 2ⁿ⁻¹ misturas racêmicas opticamente inativas."
      ],
      coreConcept: "Carbono Quiral / Assimétrico e Enantiomeria",
      trapWarning: "Cuidado: carbonos de dupla ligação (sp²) ou que possuam dois hidrogênios (-CH₂-) NUNCA são quirais."
    },
    commonTraps: ["confundir isomeria cis-trans com isomeria óptica", "contar carbonos sp² como quirais"],
    tags: ["isomeria optica", "carbono quiral", "farmacos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-003",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Química Orgânica",
    subtopic: "Identificação de Funções: Álcool vs. Fenol vs. Enol",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Três substâncias orgânicas oxigenadas apresentam o grupo hidroxila (-OH) em suas fórmulas estruturais: a substância A possui a hidroxila ligada a um carbono saturado (sp³); a substância B possui a hidroxila ligada diretamente a um anel aromático benzênico; e a substância C possui a hidroxila ligada a um carbono insaturado com dupla ligação não aromática.",
      source: "ENEM Classificação de Funções Orgânicas"
    },
    prompt: "As funções orgânicas das substâncias A, B e C são, respectivamente:",
    options: [
      { id: "a", text: "Álcool, Fenol e Enol.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Fenol, Álcool e Éter.", isCorrect: false, distractorRationale: "Inverteu álcool e fenol, e éter possui oxigênio entre dois carbonos (C-O-C), sem hidroxila." },
      { id: "c", text: "Álcool, Éster e Aldeído.", isCorrect: false, distractorRationale: "Éster possui -COO- e aldeído possui -CHO; nenhum dos dois é definido por simples hidroxila ligada ao anel aromático." },
      { id: "d", text: "Enol, Fenol e Álcool.", isCorrect: false, distractorRationale: "Trocou o álcool (carbono saturado) pelo enol." },
      { id: "e", text: "Ácido Carboxílico, Fenol e Cetona.", isCorrect: false, distractorRationale: "Ácido carboxílico necessita de carbonila conjugada com hidroxila (-COOH)." }
    ],
    detailedExplanation: {
      summary: "A ligação da hidroxila (-OH) determina funções distintas: em carbono sp³ forma álcool; em anel aromático forma fenol (com caráter ácido acentuado por ressonância); em carbono com dupla ligação não aromática forma enol (instável, em tautomeria).",
      stepByStep: [
        "-OH em C saturado (sp³) = ÁLCOOL (ex.: etanol, colesterol).",
        "-OH ligado DIRETAMENTE ao anel benzênico = FENOL (ex.: fenol comum, ácido pícrico).",
        "-OH em C insaturado com dupla (C=C-OH) = ENOL (sofre tautomeria com aldeído ou cetona)."
      ],
      coreConcept: "Diferenciação Estrutural entre Álcool, Fenol e Enol",
      trapWarning: "Cuidado com pegadinhas: se o anel aromático estiver ligado a um -CH₂-OH (álcool benzílico), é um ÁLCOOL e NÃO um fenol, pois a hidroxila não está diretamente no anel!"
    },
    commonTraps: [
      "Achar que toda molécula com anel aromático e hidroxila é fenol (veja se há CH2 intermediário)",
      "Confundir enol com álcool insaturado distante da dupla"
    ],
    tags: ["funcoes-organicas", "alcool", "fenol", "enol"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-004",
    area: "natureza",
    competence: 7,
    skill: 26,
    topic: "Química Orgânica",
    subtopic: "Transesterificação e Produção de Biodiesel",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No Brasil, o Programa Nacional de Produção e Uso do Biodiesel (PNPB) regulamenta a adição obrigatória de biodiesel ao diesel fóssil. Quimicamente, o biodiesel é obtido por meio da reação de transesterificação, na qual óleos vegetais (triglicerídeos) reagem com um álcool de cadeia curta (metanol ou etanol) na presença de um catalisador básico (como KOH ou NaOH).",
      source: "ENEM Biocombustíveis e Sustentabilidade"
    },
    prompt: "Os produtos obtidos diretamente ao final dessa reação de transesterificação industrial são:",
    options: [
      { id: "a", text: "Ésteres de ácidos graxos (o biodiesel propriamente dito) e glicerol (glicerina).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Hidrocarbonetos alcanos puros e gás carbônico gasoso.", isCorrect: false, distractorRationale: "O biodiesel é um éster, não um hidrocarboneto puro (o diesel verde/HVO que é hidrocarboneto por desoxigenação)." },
      { id: "c", text: "Sabão sólido e etanol residual sem formação de ésteres.", isCorrect: false, distractorRationale: "Sabão é subproduto indesejado gerado apenas se houver água ou acidez no óleo." },
      { id: "d", text: "Ácidos carboxílicos livres e gás hidrogênio altamente inflamável.", isCorrect: false, distractorRationale: "Não há formação de hidrogênio gasoso na transesterificação." },
      { id: "e", text: "Polímeros plásticos de condensação e amônia aquosa.", isCorrect: false, distractorRationale: "Mistura componentes sem nenhuma relação com a química de triglicerídeos." }
    ],
    detailedExplanation: {
      summary: "Na transesterificação, 1 mol de triglicerídeo (triéster) reage com 3 mols de álcool (etanol ou metanol), quebrando o esqueleto do glicerol e formando 3 mols de ésteres etílicos/metílicos (biodiesel) e 1 mol de glicerol (glicerina).",
      stepByStep: [
        "Reagentes: Triglicerídeo (óleo de soja, palma, gordura animal) + 3 Álcool (etanol/metanol).",
        "Catalisador: Base forte (NaOH/KOH).",
        "Produtos: 3 Ésteres de ácidos graxos (Biodiesel) + 1 Glicerol (Glicerina, usada em cosméticos e sabonetes).",
        "Vantagem ambiental: ciclo do carbono fechado (fotossíntese prévia da planta) e ausência de enxofre (reduz chuva ácida)."
      ],
      coreConcept: "Reação de Transesterificação, Biodiesel e Biocombustíveis",
      trapWarning: "No ENEM, guarde: Biodiesel = ÉSTER de ácido graxo; Diesel fóssil = mistura de HIDROCARBONETOS."
    },
    commonTraps: [
      "Confundir biodiesel (éster) com diesel fóssil (hidrocarboneto)",
      "Achar que transesterificação é o mesmo que saponificação (saponificação usa água e gera sais de ácido graxo)"
    ],
    tags: ["biodiesel", "transesterificacao", "esteres", "biocombustiveis"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-005",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Química Orgânica",
    subtopic: "Polímeros de Adição vs. Polímeros de Condensação",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Polímeros sintéticos revolucionaram a indústria de materiais. O polietileno (PE) e o poli(cloreto de vinila) (PVC) são exemplos clássicos obtidos a partir de monômeros que contêm ligação dupla (como o etileno e o cloreto de vinila). Por outro lado, o PET (poli(tereftalato de etileno)), amplamente usado em garrafas plásticas, é produzido pela reação entre o ácido tereftálico (ácido dicarboxílico) e o etilenoglicol (diol).",
      source: "ENEM Ciência dos Materiais e Polímeros"
    },
    prompt: "O PET classifica-se como um polímero de condensação (especificamente um poliéster) porque sua síntese difere dos polímeros de adição pelo fato de:",
    options: [
      { id: "a", text: "ocorrer a eliminação de pequenas moléculas (como a água) a cada ligação formada entre os monômeros bifuncionais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "não utilizar calor nem catalisadores em nenhuma etapa do processo produtivo.", isCorrect: false, distractorRationale: "A produção industrial de PET utiliza temperatura e catalisadores metálicos." },
      { id: "c", text: "ser sintetizado exclusivamente a partir de monômeros de hidrocarbonetos puros com ligação tripla.", isCorrect: false, distractorRationale: "PET é formado por ácido dicarboxílico e diol, não por hidrocarbonetos de ligação tripla." },
      { id: "d", text: "formar uma estrutura molecular que não pode ser reciclada mecanicamente sob nenhuma hipótese.", isCorrect: false, distractorRationale: "O PET é o plástico termoplástico mais reciclado do mundo." },
      { id: "e", text: "ocorrer pela simples quebra de ligações pi (π) sem liberação de nenhum subproduto.", isCorrect: false, distractorRationale: "Essa é a definição exata de polímero de ADIÇÃO (como PE e PVC), e não de condensação." }
    ],
    detailedExplanation: {
      summary: "Polímeros de adição formam-se pela quebra da ligação pi (π) de alcenos sem perda de átomos. Polímeros de condensação formam-se pela união de monômeros bifuncionais com liberação simultânea de uma molécula pequena (geralmente H₂O).",
      stepByStep: [
        "Polímero de Adição: n Monômeros (C=C) -> Polímero (sem subproduto). Exemplos: Polietileno, Polipropileno, PVC, Teflon, Poliestireno.",
        "Polímero de Condensação: Monômero A bifuncional + Monômero B bifuncional -> Polímero + n H₂O. Exemplos: PET (poliéster), Nylon (poliamida), Kevlar, Baquelite.",
        "Reação do PET: Ácido tereftálico (-COOH) + Etilenoglicol (-OH) -> Ligação éster (-COO-) + liberação de água."
      ],
      coreConcept: "Polimerização: Adição vs. Condensação e Reciclagem de Termoplásticos",
      trapWarning: "No ENEM, PET e Nylon são os polímeros de condensação mais cobrados. Lembre-se: PET = Poliéster; Nylon = Poliamida."
    },
    commonTraps: [
      "Confundir polímero de condensação com condensação física (mudança de estado gasoso para líquido)",
      "Achar que polímeros de adição liberam água"
    ],
    tags: ["polimeros", "pet", "poliester", "condensacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-006",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Química Orgânica",
    subtopic: "Oxidação de Álcoois e o Teste do Bafômetro",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os antigos etilotestes químicos descartáveis (bafômetros de tubo) baseavam-se na oxidação do etanol presente no ar alveolar expirado por motoristas embriagados. O etanol em meio ácido reage com íons dicromato de potássio (Cr₂O₇²⁻), que possuem coloração alaranjada, oxidando-se e reduzindo o cromo a íons cromo(III) (Cr³⁺), que exibem coloração verde característica.",
      source: "ENEM Química e Trânsito"
    },
    prompt: "Na oxidação completa do etanol (um álcool primário) em meio ácido por agentes oxidantes fortes, o produto orgânico final obtido é o:",
    options: [
      { id: "a", text: "Ácido etanoico (ácido acético).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Propanona (acetona).", isCorrect: false, distractorRationale: "Propanona tem 3 carbonos e é cetona, obtida pela oxidação de álcool secundário (isopropanol)." },
      { id: "c", text: "Metano gasoso.", isCorrect: false, distractorRationale: "A cadeia carbônica de 2 carbonos não é fragmentada a metano na oxidação branda/enérgica." },
      { id: "d", text: "Éter dietílico.", isCorrect: false, distractorRationale: "Éter dietílico é obtido por desidratação intermolecular de álcoois, não por oxidação." },
      { id: "e", text: "Benzeno aromático.", isCorrect: false, distractorRationale: "Não há aromatização de cadeia alifática de etanol nessas condições." }
    ],
    detailedExplanation: {
      summary: "Álcoois primários oxidam-se primeiro a aldeídos (etanal) e, sob oxidação enérgica, continuam a oxidação até ácidos carboxílicos (ácido acético/etanoico).",
      stepByStep: [
        "Álcool Primário (etanol: CH₃-CH₂-OH) -> oxidação branda -> Aldeído (etanal: CH₃-CHO).",
        "Aldeído -> oxidação continuada -> Ácido Carboxílico (ácido etanoico: CH₃-COOH).",
        "Álcool Secundário (ex.: propan-2-ol) -> oxida-se exclusivamente a Cetona (propanona).",
        "Álcool Terciário (ex.: 2-metilpropan-2-ol) -> NÃO OXIDA em condições brandas/enérgicas normais porque o carbono terciário não possui hidrogênio ligado a ele."
      ],
      coreConcept: "Oxidação de Álcoois Primários, Secundários e Terciários",
      trapWarning: "Cuidado: álcool terciário NÃO oxida! Essa é uma das pegadinhas conceituais mais recorrentes da prova de Natureza."
    },
    commonTraps: [
      "Achar que álcool primário para na cetona (cetona vem de álcool secundário)",
      "Esquecer que álcool terciário resiste à oxidação"
    ],
    tags: ["oxidacao-organica", "etanol", "bafometro", "acidos-carboxilicos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-007",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Química Orgânica",
    subtopic: "Propriedades Físicas: Ponto de Ebulição e Forças Intermoleculares",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere três compostos orgânicos com massas molares muito próximas (~58 a 60 g/mol): o butano (C₄H₁₀, hidrocarboneto apolar), a propanona (C₃H₆O, cetona polar) e o propan-1-ol (C₃H₈O, álcool). Seus pontos de ebulição sob pressão de 1 atm são respectivamente: -0,5 °C, 56 °C e 97 °C.",
      source: "ENEM Propriedades Físicas dos Compostos Orgânicos"
    },
    prompt: "A ordem crescente de ponto de ebulição observada (Butano < Propanona < Propan-1-ol) é explicada primordialmente pela intensidade das interações intermoleculares presentes em cada substância, que são, respectivamente:",
    options: [
      { id: "a", text: "Dispersão de London (dipolo induzido), dipolo permanente (dipolo-dipolo) e ligação de hidrogênio.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Ligação de hidrogênio, dipolo induzido e ligação iônica.", isCorrect: false, distractorRationale: "Inverteu a ordem de forças: o butano tem interações mais fracas (London) e o álcool faz pontes de hidrogênio." },
      { id: "c", text: "Dipolo-dipolo em todos os três, variando apenas a cor dos líquidos.", isCorrect: false, distractorRationale: "O butano é apolar e o álcool faz ligação de hidrogênio com seu grupo -OH." },
      { id: "d", text: "Força nuclear forte, atração eletrostática e ligações metálicas.", isCorrect: false, distractorRationale: "Compostos orgânicos moleculares interagem por forças intermoleculares de van der Waals, não por forças nucleares ou metálicas." },
      { id: "e", text: "Ligações covalentes que são rompidas durante a evaporação do líquido.", isCorrect: false, distractorRationale: "Mudança de estado físico NÃO rompe ligações covalentes intramoleculares, apenas afasta moléculas vencendo interações intermoleculares." }
    ],
    detailedExplanation: {
      summary: "Quanto mais intensas as forças intermoleculares, mais energia térmica é necessária para afastar as moléculas no estado líquido, elevando o ponto de ebulição.",
      stepByStep: [
        "Butano: apolar -> interações de London (dipolo induzido-dipolo induzido), muito fracas -> PE = -0,5 °C (gás a temperatura ambiente).",
        "Propanona: polar com grupo carbonila (C=O) -> dipolo permanente-dipolo permanente, força média -> PE = 56 °C.",
        "Propan-1-ol: polar com hidrogênio ligado a oxigênio (-O-H) -> ligações de hidrogênio, interação muito forte -> PE = 97 °C."
      ],
      coreConcept: "Forças Intermoleculares e Ponto de Ebulição em Compostos Orgânicos",
      trapWarning: "Lembrete fundamental de química: na ebulição ou fusão NUNCA se quebram ligações covalentes, apenas se vencem forças intermoleculares!"
    },
    commonTraps: [
      "Afirmar que na ebulição a molécula se desfaz e quebra ligações C-C ou C-H",
      "Não reconhecer que a ligação de hidrogênio confere o maior ponto de ebulição entre compostos de massa similar"
    ],
    tags: ["forcas-intermoleculares", "ponto-ebulicao", "ligacao-hidrogenio", "polaridade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-008",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Química Orgânica",
    subtopic: "Caráter Ácido-Base de Substâncias Orgânicas",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No estudo das propriedades ácido-base orgânicas, verifica-se que o ácido etanoico (CH₃COOH) possui caráter ácido consideravelmente mais forte do que o etanol (CH₃CH₂OH), e os fenóis (C₆H₅OH) apresentam acidez intermediária entre os dois. Por outro lado, as aminas alifáticas como a metilamina (CH₃NH₂) comportam-se como bases orgânicas fracas em solução aquosa.",
      source: "ENEM Acidez e Basicidade Orgânica"
    },
    prompt: "A acidez superior dos ácidos carboxílicos e fenóis em relação aos álcoois, e a basicidade das aminas, são justificadas, respectivamente, por:",
    options: [
      { id: "a", text: "estabilização da base conjugada por efeito de ressonância (deslocalização da carga negativa) e pela presença do par de elétrons livres no átomo de nitrogênio capaz de receber prótons H⁺.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "presença de átomos de cloro radioativos em todas as cadeias carboxílicas.", isCorrect: false, distractorRationale: "O ácido etanoico não possui cloro nem radioatividade." },
      { id: "c", text: "incapacidade das aminas de interagir com a água em qualquer temperatura.", isCorrect: false, distractorRationale: "Aminas de cadeia curta são altamente solúveis em água e fazem ligações de hidrogênio." },
      { id: "d", text: "completa ausência de cargas elétricas ou elétrons nas soluções de ácidos orgânicos.", isCorrect: false, distractorRationale: "Ácidos ionizam em água gerando ânions carboxilato e cátions H₃O⁺." },
      { id: "e", text: "oxidação espontânea das aminas em gás ozônio puríssimo.", isCorrect: false, distractorRationale: "Não há formação de ozônio a partir de soluções de aminas." }
    ],
    detailedExplanation: {
      summary: "Quanto mais estável for a base conjugada (ânion formado após liberar H⁺), mais forte é o ácido. O ânion carboxilato estabiliza a carga negativa por ressonância entre dois oxigênios equivalentes.",
      stepByStep: [
        "Ácido carboxílico: R-COO⁻ tem a carga negativa deslocalizada por ressonância simétrica entre os dois oxigênios -> alta estabilidade -> maior acidez.",
        "Fenol: o ânion fenolato deslocaliza a carga negativa pelos elétrons pi (π) do anel aromático -> acidez moderada (consegue reagir com NaOH, mas não com NaHCO₃).",
        "Álcool: o ânion alcóxido (R-O⁻) concentra a carga no único oxigênio sem ressonância -> instável -> acidez desprezível.",
        "Aminas: segundo a teoria de Lewis e Bronsted-Lowry, o nitrogênio possui um par de elétrons não ligante disponível para doar ou receber H⁺, conferindo caráter básico."
      ],
      coreConcept: "Acidez por Estabilização de Carga por Ressonância e Basicidade de Lewis das Aminas",
      trapWarning: "No ENEM, guarde a escala decrescente de acidez: Ácido Carboxílico > Fenol > Água > Álcool > Alquino terminal."
    },
    commonTraps: [
      "Achar que fenol é neutro como os álcoois comuns (fenol tem caráter ácido perceptível)",
      "Não associar a basicidade da amina ao par de elétrons livres do nitrogênio"
    ],
    tags: ["acidez-organica", "ressonancia", "aminas", "base-lewis"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-009",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Química Orgânica",
    subtopic: "Isomeria Geométrica (Cis-Trans) e Gorduras Trans",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A hidrogenação catalítica industrial parcial de óleos vegetais converte ligações duplas em simples, mas pode provocar a conversão indesejada de ligações duplas naturais de conformação cis em conformação trans. As chamadas gorduras trans possuem geometria espacial retilínea (semelhante aos ácidos graxos saturados), permitindo empacotamento molecular mais compacto que eleva seu ponto de fusão e aumenta o risco de aterosclerose e doenças coronarianas.",
      source: "ENEM Nutrição e Química de Alimentos"
    },
    prompt: "Para que ocorra isomeria geométrica (diastereoisomeria cis-trans) em um alceno de cadeia aberta, são condições necessárias e suficientes:",
    options: [
      { id: "a", text: "a presença de uma ligação dupla rígida que impeça a livre rotação e que cada um dos carbonos da dupla possua dois ligantes diferentes entre si.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a presença de quatro hidrogênios idênticos ligados ao mesmo carbono da dupla ligação.", isCorrect: false, distractorRationale: "Se houver ligantes iguais no mesmo carbono (como dois H no mesmo C), a molécula possui plano de simetria e NÃO tem isomeria cis-trans." },
      { id: "c", text: "que a molécula contenha obrigatoriamente um átomo de nitrogênio ou fósforo em sua estrutura.", isCorrect: false, distractorRationale: "Isomeria cis-trans ocorre em hidrocarbonetos puros como o but-2-eno." },
      { id: "d", text: "que a ligação entre os carbonos seja tripla com rotação livre ilimitada.", isCorrect: false, distractorRationale: "Ligações triplas são lineares e não admitem isomeria geométrica cis-trans." },
      { id: "e", text: "que todos os ligantes da molécula sejam halogênios radioativos de alta massa.", isCorrect: false, distractorRationale: "Qualquer grupo químico satisfaz a condição desde que R1 ≠ R2 e R3 ≠ R4 nos carbonos da dupla." }
    ],
    detailedExplanation: {
      summary: "A isomeria geométrica (cis-trans ou Z-E) exige impedimento de rotação (ligação dupla C=C ou cadeia cíclica) e ligantes distintos em cada carbono do centro estereogênico (R₁ ≠ R₂ no carbono 1 e R₃ ≠ R₄ no carbono 2).",
      stepByStep: [
        "Condição 1: Rigidez espacial (a ligação dupla pi impede a rotação livre que ocorre em ligações simples sigma).",
        "Condição 2: Ligantes diferentes no mesmo carbono: R₁ ≠ R₂ e R₃ ≠ R₄.",
        "Isômero Cis: ligantes de maior massa do mesmo lado do plano da dupla ligação (gera curvatura na cadeia).",
        "Isômero Trans: ligantes de maior massa em lados opostos (cadeia linearizada, facilitando empacotamento cristalino e entupimento de artérias)."
      ],
      coreConcept: "Condições de Ocorrência da Isomeria Geométrica (Cis-Trans / Z-E)",
      trapWarning: "Se você vir um carbono terminal com dois hidrogênios (=CH₂), como no propeno ou no but-1-eno, descarte na hora: NUNCA haverá isomeria cis-trans!"
    },
    commonTraps: [
      "Achar que todo alceno tem isomeria cis-trans (but-1-eno não tem porque tem =CH2)",
      "Confundir isomeria cis-trans (geométrica) com isomeria óptica (quiral)"
    ],
    tags: ["isomeria-geometrica", "cis-trans", "gorduras-trans", "alcenos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-010",
    area: "natureza",
    competence: 7,
    skill: 26,
    topic: "Química Orgânica",
    subtopic: "Síntese da Aspirina (Ácido Acetilsalicílico)",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O ácido acetilsalicílico (AAS), princípio ativo da aspirina, é um dos analgésicos e anti-inflamatórios mais consumidos do planeta. Em laboratório, ele é sintetizado pela reação de acetilação entre o ácido salicílico (que contém um anel aromático com uma hidroxila fenólica e uma carboxila) e o anidrido acético, sob catálise com ácido sulfúrico concentrado.",
      source: "ENEM Síntese de Fármacos"
    },
    prompt: "Nessa síntese, a reação ocorre especificamente no grupo fenol do ácido salicílico, transformando-o no grupo funcional:",
    options: [
      { id: "a", text: "Éster.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Éter.", isCorrect: false, distractorRationale: "O anidrido acético introduz um grupo acetila (CH₃-CO-), formando um éster (-O-CO-CH₃) e não um éter (-O-R)." },
      { id: "c", text: "Amina secundária.", isCorrect: false, distractorRationale: "Não há nitrogênio no ácido salicílico nem no anidrido acético." },
      { id: "d", text: "Alcano cíclico.", isCorrect: false, distractorRationale: "A estrutura preserva o anel aromático benzênico." },
      { id: "e", text: "Tiol sulfurado.", isCorrect: false, distractorRationale: "Tióis contêm enxofre (-SH), ausente na estrutura do AAS." }
    ],
    detailedExplanation: {
      summary: "A reação entre a hidroxila fenólica (-OH) do ácido salicílico e o anidrido acético [(CH₃CO)₂O] é uma esterificação, gerando um éster aromático acetilado e liberando ácido acético como subproduto.",
      stepByStep: [
        "Reagente 1: Ácido salicílico (possui função fenol e função ácido carboxílico).",
        "Reagente 2: Anidrido acético (agente de acetilação).",
        "Ataque nucleofílico: o oxigênio do grupo fenol ataca a carbonila do anidrido.",
        "Produto obtido: Ácido Acetilsalicílico (AAS), que possui agora duas funções oxigenadas: ÁCIDO CARBOXÍLICO intacto e ÉSTER recém-formado no anel."
      ],
      coreConcept: "Síntese de Fármacos, Esterificação de Fenóis e Reconhecimento de Funções no AAS",
      trapWarning: "No ENEM, frequentemente se pede para identificar as funções presentes na molécula do AAS: são ÁCIDO CARBOXÍLICO (-COOH) e ÉSTER (-OCOCH₃)."
    },
    commonTraps: [
      "Achar que o AAS é apenas ácido carboxílico e não enxergar a função éster",
      "Confundir a função éster (-COO-) com a função éter (-O-)"
    ],
    tags: ["aspirina", "aas", "sintese-organica", "esterificacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-011",
    area: "natureza",
    competence: 7,
    skill: 26,
    topic: "Química Orgânica",
    subtopic: "Produção de Biodiesel e Transesterificação",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O biodiesel é um combustível renovável biodegradável obtido a partir de óleos vegetais (como soja, dendê e mamona) ou gorduras animais. O processo químico industrial mais comum para a sua síntese é a transesterificação, na qual um triglicerídeo reage com um álcool de cadeia curta (geralmente metanol ou etanol) na presença de um catalisador básico (como hidróxido de potássio, KOH).",
      source: "Química Verde e Biocombustíveis no Brasil"
    },
    prompt: "Nesse processo químico de transesterificação, os produtos orgânicos gerados ao final da reação são constituídos por uma mistura de:",
    options: [
      { id: "a", text: "ésteres alquílicos de ácidos graxos (biodiesel) e glicerol (propano-1,2,3-triol).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "hidrocarbonetos alcanos puros de cadeia linear e água oxigenada.", isCorrect: false, distractorRationale: "Transesterificação não produz hidrocarbonetos puros; o biodiesel é quimicamente uma mistura de ésteres." },
      { id: "c", text: "álcoois aromáticos de alta volatilidade e sabões de sódio insolúveis.", isCorrect: false, distractorRationale: "Álcoois aromáticos não são formados a partir de ácidos graxos alifáticos e a saponificação é uma reação concorrente indesejada." },
      { id: "d", text: "ácidos carboxílicos livres e gás metano comprimido.", isCorrect: false, distractorRationale: "Na transesterificação os ácidos graxos são convertidos em ésteres, não permanecendo na forma de ácidos livres nem gerando metano." },
      { id: "e", text: "polímeros termofixos insolúveis e monóxido de carbono tóxico.", isCorrect: false, distractorRationale: "Não há polimerização na reação de transesterificação." }
    ],
    detailedExplanation: {
      summary: "A transesterificação converte 1 mol de triglicerídeo (triéster) em 3 mols de ésteres metílicos ou etílicos (biodiesel) e 1 mol de glicerol (glicerina), que é separado por decantação.",
      stepByStep: [
        "Passo 1: Identificar a estrutura dos reagentes: Triglicerídeos são triésteres formados pela união do glicerol com três ácidos graxos de cadeia longa.",
        "Passo 2: Mecanismo de transesterificação: O álcool simples (etanol ou metanol) substitui a cadeia tripla do glicerol nos sítios éster.",
        "Passo 3: Mapear os produtos da reação:\nTriglicerídeo + 3 Álcool -> 3 Ésteres de ácidos graxos (Biodiesel) + 1 Glicerol (subproduto comercial valorizado na indústria de cosméticos).",
        "Passo 4: A alternativa 'a' descreve com exatidão os compostos formados."
      ],
      coreConcept: "Transesterificação de triglicerídeos, obtenção de biodiesel e síntese de glicerol no ENEM.",
      trapWarning: "Confundir transesterificação (produção de biodiesel: éster + álcool -> novo éster + glicerol) com saponificação (produção de sabão: éster + base forte -> sal de ácido graxo + glicerol)."
    },
    commonTraps: ["confundir_transesterificacao_com_saponificacao", "achar_que_biodiesel_e_hidrocarboneto"],
    tags: ["biodiesel", "transesterificacao", "triglicerideos", "quimica_verde"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-012",
    area: "natureza",
    competence: 7,
    skill: 26,
    topic: "Química Orgânica",
    subtopic: "Polímeros de Adição vs Condensação",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os materiais plásticos são polímeros sintéticos essenciais na vida contemporânea. O polietileno de alta densidade (PEAD), usado em tampas e frascos, é obtido a partir da polimerização de moléculas de etileno (eteno). Por outro lado, o poli(tereftalato de etileno), conhecido como PET e amplamente empregado na confecção de garrafas de bebidas e fibras têxteis, é sintetizado pela reação entre o ácido tereftálico (um diácido carboxílico) e o etilenoglicol (um diálcool).",
      source: "Química de Polímeros e Reciclagem"
    },
    prompt: "Quanto ao mecanismo de síntese polimérica, o polietileno e o PET são classificados, respectivamente, como polímeros de:",
    options: [
      { id: "a", text: "adição e condensação.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "condensação e adição.", isCorrect: false, distractorRationale: "Inversão entre os tipos de polimerização." },
      { id: "c", text: "adição e adição.", isCorrect: false, distractorRationale: "O PET não é de adição; sua síntese elimina água na formação das ligações éster." },
      { id: "d", text: "condensação e condensação.", isCorrect: false, distractorRationale: "O polietileno é polímero de adição clássico formado pela quebra da ligação pi do eteno sem eliminação de subprodutos." },
      { id: "e", text: "rearranjo e hidrólise.", isCorrect: false, distractorRationale: "Nenhum dos dois polímeros é formado por reações de hidrólise ou rearranjo atômico intramolecular." }
    ],
    detailedExplanation: {
      summary: "Polímeros de adição decorrem da quebra de ligações duplas (pi) de monômeros iguais sem eliminação de substâncias; polímeros de condensação formam-se pela união de monômeros bifuncionais com liberação de pequenas moléculas (como H2O).",
      stepByStep: [
        "Passo 1: Analisar o Polietileno: n CH2=CH2 -> -[CH2-CH2]-_n. Ocorre a abertura da ligação pi do alceno, somando monômeros sucessivamente sem perda de massa -> Polímero de ADIÇÃO.",
        "Passo 2: Analisar o PET: Reação entre diácido carboxílico e diálcool. Cada ligação éster formada (-COO-) elimina uma molécula de água (H2O) -> Polímero de CONDENSAÇÃO (poliéster).",
        "Passo 3: A alternativa 'a' define corretamente a classificação dos dois materiais plásticos."
      ],
      coreConcept: "Polímeros de adição e polímeros de condensação (poliésteres e poliamidas).",
      trapWarning: "Achar que todo plástico é polímero de adição. PET, Náilon, Kevlar e baquelite são polímeros de CONDENSAÇÃO."
    },
    commonTraps: ["achar_que_pet_e_polimero_de_adicao", "inverter_adicao_e_condensacao"],
    tags: ["polimeros", "adicao", "condensacao", "pet", "polietileno"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-013",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Química Orgânica",
    subtopic: "Forças Intermoleculares e Ponto de Ebulição",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere três substâncias orgânicas de massas molares muito próximas:\n1. Butano (C4H10, massa molar = 58 g/mol) — ponto de ebulição aproximado: -0,5 °C\n2. Propanal (C3H6O, massa molar = 58 g/mol) — ponto de ebulição aproximado: 48 °C\n3. Propan-1-ol (C3H8O, massa molar = 60 g/mol) — ponto de ebulição aproximado: 97 °C",
      source: "Propriedades Físicas dos Compostos Orgânicos"
    },
    prompt: "A expressiva diferença entre as temperaturas de ebulição dessas três substâncias decorre fundamentalmente da intensidade das forças intermoleculares predominantes em cada uma delas, as quais são, respectivamente:",
    options: [
      { id: "a", text: "dipolo induzido (forças de London) no butano; dipolo permanente (dipolo-dipolo) no propanal; e ligação de hidrogênio no propan-1-ol.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ligação de hidrogênio no butano; dipolo induzido no propanal; e forças iônicas no propan-1-ol.", isCorrect: false, distractorRationale: "Hidrocarbonetos como o butano são estritamente apolares e não formam pontes de hidrogênio." },
      { id: "c", text: "dipolo permanente no butano; ligação de hidrogênio no propanal; e dipolo induzido no propan-1-ol.", isCorrect: false, distractorRationale: "O propanal possui carbonila (C=O) mas não tem hidrogênio ligado a O, N ou F, não fazendo pontes de hidrogênio entre si." },
      { id: "d", text: "ligações covalentes intermoleculares em todas elas, diferindo apenas pelo número de nêutrons.", isCorrect: false, distractorRationale: "A ebulição rompe forças intermoleculares eletrostáticas, e não ligações covalentes intramoleculares." },
      { id: "e", text: "forças de dispersão no propan-1-ol e pontes de hidrogênio no butano.", isCorrect: false, distractorRationale: "Inversão absurda das propriedades químicas." }
    ],
    detailedExplanation: {
      summary: "Com massas molares semelhantes, a temperatura de ebulição cresce com a força da interação: Dipolo Induzido (Butano) < Dipolo Permanente (Propanal) < Ligações de Hidrogênio (Propan-1-ol).",
      stepByStep: [
        "Passo 1: Analisar o Butano: hidrocarboneto apolar; suas moléculas interagem fracamente por forças de dispersão de London (dipolo induzido) -> ferve a -0,5 °C (gás em temperatura ambiente).",
        "Passo 2: Analisar o Propanal: aldeído com grupo carbonila polar (C=O); interage por atração dipolo permanente-dipolo permanente -> ferve a 48 °C.",
        "Passo 3: Analisar o Propan-1-ol: álcool com grupo hidroxila (-OH); o átomo de hidrogênio ligado ao oxigênio altamente eletronegativo estabelece fortes ligações de hidrogênio entre moléculas vizinhas -> ferve a 97 °C.",
        "Passo 4: A opção 'a' sintetiza a hierarquia intermolecular correta."
      ],
      coreConcept: "Forças intermoleculares, polaridade molecular e influência no ponto de ebulição de compostos orgânicos.",
      trapWarning: "Achar que aldeídos e cetonas fazem ligações de hidrogênio entre si. Eles só têm O=C, não têm H-O; portanto, fazem apenas dipolo permanente!"
    },
    commonTraps: ["achar_que_aldeidos_fazem_ligacao_de_hidrogenio_entre_si", "atribuir_polaridade_a_hidrocarbonetos"],
    tags: ["forcas_intermoleculares", "ponto_de_ebulicao", "ligacao_de_hidrogenio", "polaridade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-014",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Química Orgânica",
    subtopic: "Caráter Ácido-Base em Compostos Orgânicos",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No estudo comparativo da acidez e basicidade em química orgânica, constata-se que o ácido etanoico (CH3COOH) apresenta constante de acidez Ka = 1,8 × 10^-5, sendo ordens de grandeza mais ácido que o etanol (CH3CH2OH, Ka ≈ 10^-16), embora ambos possuam hidroxilas ligadas a cadeias de dois átomos de carbono. Por sua vez, a etilamina (CH3CH2NH2) atua como uma base fraca em meio aquoso.",
      source: "Teoria Ácido-Base de Brønsted-Lowry e Lewis"
    },
    prompt: "A acidez significativamente superior do ácido etanoico em comparação com o etanol e o caráter básico da etilamina justificam-se, respectivamente, pela:",
    options: [
      { id: "a", text: "estabilização do ânion carboxilato resultante por ressonância entre os dois átomos de oxigênio; e presença de um par de elétrons livres no átomo de nitrogênio capaz de receber prótons.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "quebra espontânea de ligações carbono-carbono no ácido; e liberação direta de íons OH- pela quebra da ligação C-N na amina.", isCorrect: false, distractorRationale: "Ácidos orgânicos ionizam liberando H+ da hidroxila carboxílica sem romper o esqueleto C-C." },
      { id: "c", text: "insolubilidade completa do etanol em água pura; e caráter apolar hidrofóbico intransponível da etilamina.", isCorrect: false, distractorRationale: "Tanto o etanol quanto a etilamina são miscíveis em água devido a pontes de hidrogênio." },
      { id: "d", text: "presença de ligações triplas sp lineares no ânion carboxilato; e oxidação permanente do nitrogênio por íons metálicos.", isCorrect: false, distractorRationale: "O grupo carboxilato possui hibridização sp2 plana com ressonância, sem ligações triplas." },
      { id: "e", text: "ausência de elétrons na eletrosfera do oxigênio do etanol; e neutralidade eletrônica absoluta do nitrogênio.", isCorrect: false, distractorRationale: "O oxigênio do etanol possui dois pares de elétrons livres normais." }
    ],
    detailedExplanation: {
      summary: "A acidez depende da estabilidade da base conjugada: o ânion carboxilato deslocaliza a carga negativa por ressonância sobre dois oxigênios. A amina é básica pela disponibilidade do par não ligante no nitrogênio.",
      stepByStep: [
        "Passo 1: Analisar a desprotonação do ácido etanoico: CH3COOH -> CH3COO- + H+. A carga negativa do oxigênio é deslocalizada por ressonância entre os dois oxigênios da carbonila, gerando duas estruturas equivalentes altamente estáveis.",
        "Passo 2: Analisar a desprotonação do etanol: CH3CH2OH -> CH3CH2O- + H+. O ânion etóxido concentra a carga negativa sobre um único átomo de oxigênio sem estabilização por ressonância, tornando o ânion instável e o álcool pouquíssimo ácido.",
        "Passo 3: Analisar a basicidade da amina: o nitrogênio possui configuração eletrônica com 1 par de elétrons livres (não compartilhados). Pela teoria de Lewis e Brønsted, esse par aceita um próton H+ da água, formando íon amônio e liberando OH-.",
        "Passo 4: A opção 'a' sintetiza os dois princípios fundamentais com clareza conceitual."
      ],
      coreConcept: "Estabilização por ressonância de ânions carboxilato e basicidade de aminas via par de elétrons livres.",
      trapWarning: "Achar que álcoois são ácidos como os ácidos carboxílicos. Álcoois têm acidez comparável à da própria água (Ka ~ 10^-16 a 10^-18)."
    },
    commonTraps: ["esquecer_da_ressonancia_no_carboxilato", "desconhecer_o_par_de_eletrons_livres_da_amina"],
    tags: ["acidez_organica", "basicidade_aminas", "ressonancia", "carboxilato"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-015",
    area: "natureza",
    competence: 7,
    skill: 25,
    topic: "Química Orgânica",
    subtopic: "Isomeria Plana de Função e Metameria",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere dois pares de compostos orgânicos de grande importância industrial e analítica:\nPar 1: O ácido propanoico (CH3-CH2-COOH) e o etanoato de metila (CH3-COO-CH3), ambos com fórmula molecular idêntica C3H6O2.\nPar 2: O metoxipropano (CH3-O-CH2-CH2-CH3) e o etoxietano (CH3-CH2-O-CH2-CH3), ambos com fórmula molecular C4H10O.",
      source: "Estudo Sistemático da Isomeria Plana"
    },
    prompt: "As relações de isomeria plana verificadas, respectivamente, entre os compostos do Par 1 e entre os compostos do Par 2 são classificadas como isomeria de:",
    options: [
      { id: "a", text: "função e compensação (metameria).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "cadeia e posição.", isCorrect: false, distractorRationale: "O Par 1 envolve funções químicas distintas (ácido e éster), sendo isomeria de função." },
      { id: "c", text: "posição e tautomeria.", isCorrect: false, distractorRationale: "O Par 2 não apresenta equilíbrio dinâmico (tautomeria), mas diferença de posição de heteroátomo." },
      { id: "d", text: "compensação (metameria) e função.", isCorrect: false, distractorRationale: "Classificações invertidas entre os pares 1 e 2." },
      { id: "e", text: "óptica e geométrica (cis-trans).", isCorrect: false, distractorRationale: "São isômeros planos constitucionais, não estereoisômeros espaciais." }
    ],
    detailedExplanation: {
      summary: "Par 1: Mesma fórmula molecular com grupos funcionais diferentes (Ácido Carboxílico vs Éster) = Isomeria de Função. Par 2: Mesma função (Éter) diferindo pela posição do heteroátomo de oxigênio = Metameria (Compensação).",
      stepByStep: [
        "Passo 1: Analisar o Par 1:\n- CH3CH2COOH: Ácido Carboxílico (função com carbonila + hidroxila);\n- CH3COOCH3: Éster (função derivada de ácido e álcool);\nAmbos têm fórmula C3H6O2. Funções diferentes com mesma fórmula = ISOMERIA DE FUNÇÃO.",
        "Passo 2: Analisar o Par 2:\n- CH3-O-CH2CH2CH3 (metoxipropano): Éter com heteroátomo O entre C1 e C3;\n- CH3CH2-O-CH2CH3 (etoxietano): Éter com heteroátomo O entre C2 e C2;\nMesma função éter com variação na posição do heteroátomo na cadeia = METAMERIA ou ISOMERIA DE COMPENSAÇÃO.",
        "Passo 3: A alternativa 'a' responde rigorosamente à sequência."
      ],
      coreConcept: "Isomeria constitucional plana: função e compensação (metameria).",
      trapWarning: "Confundir isomeria de posição comum com metameria. Metameria envolve especificamente o deslocamento de um HETEROÁTOMO (O, N, S) dentro da cadeia carbônica."
    },
    commonTraps: ["confundir_metameria_com_isomeria_de_posicao_simples", "inverter_os_tipos_de_isomeria"],
    tags: ["isomeria_plana", "isomeria_de_funcao", "metameria", "heteroatomo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-016",
    area: "natureza",
    competence: 7,
    skill: 26,
    topic: "Química Orgânica",
    subtopic: "Oxidação de Álcoois e o Teste do Bafômetro",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os antigos etilotestes químicos descartáveis ('bafômetros de tubo') baseavam-se na oxidação do vapor de etanol (CH3CH2OH) presente no ar expirado por motoristas embriagados. O tubo continha uma mistura de dicromato de potássio (K2Cr2O7, alaranjado) e ácido sulfúrico em sílica. Ao soprar, o etanol é oxidado sucessivamente a etanal e a ácido etanoico, enquanto os íons cromo VI (alaranjados) são reduzidos a íons cromo III (verdes), confirmando a ingestão de álcool pela mudança de cor.",
      source: "Química Forense e Toxicologia no Trânsito"
    },
    prompt: "Em relação ao comportamento dos diferentes tipos de álcoois frente a agentes oxidantes enérgicos em meio ácido, é quimicamente correto afirmar que:",
    options: [
      { id: "a", text: "álcoois primários oxidam a aldeídos e subsequentemente a ácidos carboxílicos; álcoois secundários oxidam a cetonas; e álcoois terciários não sofrem oxidação em condições brandas sem quebra destrutiva da cadeia carbônica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "álcoois terciários oxidam facilmente a ácidos carboxílicos aromáticos de cadeia fechada.", isCorrect: false, distractorRationale: "Álcoois terciários não possuem hidrogênio ligado ao carbono que sustenta a hidroxila, sendo resistentes à oxidação." },
      { id: "c", text: "álcoois secundários oxidam diretamente a ésteres cíclicos voláteis.", isCorrect: false, distractorRationale: "A oxidação de álcool secundário gera cetonas estáveis, não ésteres." },
      { id: "d", text: "todos os álcoois oxidam sempre e exclusivamente a gás carbônico e água instantaneamente.", isCorrect: false, distractorRationale: "Isso caracterizaria combustão completa com fogo, e não oxidação química em solução aquosa ácida com dicromato." },
      { id: "e", text: "a mudança de cor do bafômetro decorre da redução do etanol a alcano gasoso.", isCorrect: false, distractorRationale: "O etanol é OXIDADO a ácido carboxílico, e quem se reduz é o cromo (Cr6+ para Cr3+)." }
    ],
    detailedExplanation: {
      summary: "Álcoois primários (R-CH2-OH) oxidam a aldeídos e depois a ácidos carboxílicos. Álcoois secundários (R2-CH-OH) oxidam a cetonas. Álcoois terciários (R3-C-OH) resistem à oxidação por não possuírem H ligado ao carbono alfa.",
      stepByStep: [
        "Passo 1: Entender a oxidação de álcool primário (como o etanol): perde dois hidrogênios formando a carbonila terminal do aldeído (etanal), que em seguida recebe oxigênio formando ácido carboxílico (ácido etanoico).",
        "Passo 2: Entender a oxidação de álcool secundário (como propan-2-ol): perde os hidrogênios formando carbonila interna (cetona: propanona). Não oxida além disso sem romper ligações C-C.",
        "Passo 3: Entender a estabilidade do álcool terciário (como 2-metilpropan-2-ol): o carbono com a hidroxila está ligado a três outros carbonos e a nenhum hidrogênio, impedindo a saída de H para formar dupla C=O sem quebrar a cadeia.",
        "Passo 4: A opção 'a' sintetiza com perfeição a regra de ouro das oxidações orgânicas do ENEM."
      ],
      coreConcept: "Reações de oxidação de álcoois primários, secundários e terciários e funcionamento do bafômetro químico.",
      trapWarning: "Dizer que álcool terciário oxida a cetona ou ácido carboxílico. No ENEM: ÁLCOOL TERCIÁRIO NÃO OXIDA!"
    },
    commonTraps: ["achar_que_alcool_terciario_oxida_normalmente", "confundir_oxidacao_de_primario_com_secundario"],
    tags: ["oxidacao_de_alcoois", "bafometro", "quimica_forense", "dicromato"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-017",
    area: "natureza",
    competence: 7,
    skill: 26,
    topic: "Química Orgânica",
    subtopic: "Reações de Adição em Alcenos e Regra de Markovnikov",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A síntese industrial de álcoois pode ser realizada pela hidratação catalítica de alcenos em meio de ácido sulfúrico diluído. Ao reagir o propeno (CH2=CH-CH3) com água (H-OH) sob aquecimento, obtém-se quase que exclusivamente um dos dois possíveis produtos de adição como produto majoritário da reação.",
      source: "Mecanismos de Reações Orgânicas"
    },
    prompt: "De acordo com a Regra de Markovnikov para reações de adição eletrofílica, o produto orgânico majoritário obtido nessa reação e a justificativa mecanicista correspondente são:",
    options: [
      { id: "a", text: "propan-2-ol, pois o hidrogênio da água adiciona-se preferencialmente ao carbono da dupla ligação que possui maior número de hidrogênios ligados a ele, formando o carbocátion secundário mais estável.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "propan-1-ol, pois a hidroxila (-OH) adiciona-se sempre ao carbono menos volumoso da extremidade.", isCorrect: false, distractorRationale: "O propan-1-ol é o produto minoritário (anti-Markovnikov), obtido apenas em hidroboração-oxidação especial." },
      { id: "c", text: "propanona, pois a reação de hidratação oxida instantaneamente o alceno a cetona.", isCorrect: false, distractorRationale: "Hidratação de alceno adiciona água formando álcool, não cetona." },
      { id: "d", text: "propano, pois ocorre eliminação de oxigênio com hidrogenação simultânea da dupla.", isCorrect: false, distractorRationale: "Propano é alcano saturado sem oxigênio; a água introduz a hidroxila na molécula." },
      { id: "e", text: "ácido propanoico, pois o meio ácido converte qualquer alceno diretamente em ácido carboxílico.", isCorrect: false, distractorRationale: "A hidratação catalítica simples não é uma reação de oxidação de alcenos." }
    ],
    detailedExplanation: {
      summary: "Pela Regra de Markovnikov, o H+ adiciona-se ao carbono mais hidrogenado (C1), gerando o carbocátion secundário mais estável no C2, onde a hidroxila (-OH) entra, formando o propan-2-ol.",
      stepByStep: [
        "Passo 1: Analisar os carbonos da dupla no propeno: CH2(C1)=CH(C2)-CH3(C3). O C1 possui 2 hidrogênios; o C2 possui 1 hidrogênio.",
        "Passo 2: Aplicar a Regra de Markovnikov: o hidrogênio eletrófilo liga-se ao carbono que já tem mais hidrogênios (C1) para gerar o intermediário mais estável.",
        "Passo 3: Estabilidade de carbocátions: o carbocátion secundário [CH3-CH(+)-CH3] é muito mais estável que o primário [CH2(+)-CH2-CH3] devido ao efeito indutivo eletrodoador dos grupos metila.",
        "Passo 4: O ataque da água ocorre no carbocátion C2, resultando no propan-2-ol como produto majoritário (> 95%).",
        "Passo 5: A opção 'a' sintetiza o enunciado e o fundamento mecanicista da regra."
      ],
      coreConcept: "Regra de Markovnikov, adição eletrofílica em alcenos e estabilidade relativa de carbocátions.",
      trapWarning: "Lembrar o ditado mnemônico de Markovnikov: 'O hidrogênio vai para o carbono mais rico em hidrogênios'."
    },
    commonTraps: ["confundir_o_produto_majoritario_com_propan_1_ol", "desconhecer_o_papel_do_carbocation"],
    tags: ["markovnikov", "adicao_em_alcenos", "propeno", "propan_2_ol"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-018",
    area: "natureza",
    competence: 7,
    skill: 25,
    topic: "Química Orgânica",
    subtopic: "Isomeria Óptica e Fórmula de Le Bel-van 't Hoff",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A D-glicose é a principal fonte de energia metabólica celular. Em sua estrutura em cadeia aberta (aldoexose: CH2OH-(CHOH)4-CHO), a molécula apresenta quatro átomos de carbono assimétricos (quirais) com ligantes diferentes. Pela fórmula de Le Bel-van 't Hoff, o número máximo de isômeros opticamente ativos (IOA) de uma molécula com n carbonos quirais não equivalentes é dado por 2^n, e o número de misturas racêmicas (isômeros opticamente inativos por compensação externa, IOI) é dado por 2^(n-1).",
      source: "Estereoquímica de Carboidratos"
    },
    prompt: "A quantidade máxima teórica de isômeros opticamente ativos (IOA) e de misturas racêmicas (IOI) possíveis para uma aldoexose de cadeia aberta com 4 carbonos quirais é, respectivamente, de:",
    options: [
      { id: "a", text: "16 isômeros opticamente ativos e 8 misturas racêmicas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "8 isômeros opticamente ativos e 4 misturas racêmicas.", isCorrect: false, distractorRationale: "O estudante calculou 2^3 em vez de 2^4 para os 4 carbonos quirais." },
      { id: "c", text: "4 isômeros opticamente ativos e 2 misturas racêmicas.", isCorrect: false, distractorRationale: "O estudante igualou o número de isômeros diretamente à quantidade de carbonos quirais n." },
      { id: "d", text: "32 isômeros opticamente ativos e 16 misturas racêmicas.", isCorrect: false, distractorRationale: "O estudante calculou 2^(n+1)." },
      { id: "e", text: "16 isômeros opticamente ativos e 16 misturas racêmicas.", isCorrect: false, distractorRationale: "O estudante esqueceu que cada racemato é formado pelo par equimolar de 2 enantiômeros (dividindo o total por 2)." }
    ],
    detailedExplanation: {
      summary: "Com n = 4 carbonos assimétricos distintos, IOA = 2^4 = 16 isômeros opticamente ativos (8 dextrógiros e 8 levógiros) e Racematos = 2^(4-1) = 8 misturas racêmicas.",
      stepByStep: [
        "Passo 1: Identificar o número de carbonos quirais (n): n = 4.",
        "Passo 2: Calcular os Isômeros Opticamente Ativos (IOA):\nIOA = 2^n = 2^4 = 16 isômeros (dentre os quais estão D-glicose, L-glicose, D-galactose, etc.).",
        "Passo 3: Calcular as Misturas Racêmicas (IOI):\nUma mistura racêmica é formada pela junção de 50% de um isômero dextrógiro com 50% de seu enantiômero levógiro (compensação externa).\nLogo, Racematos = IOA / 2 = 16 / 2 = 8 misturas racêmicas (ou 2^(n-1) = 2^3 = 8).",
        "Passo 4: A opção 'a' apresenta os dois valores com exatidão matemática."
      ],
      coreConcept: "Fórmula de Le Bel-van 't Hoff (2^n) para cálculo de estereoisômeros ópticos e misturas racêmicas.",
      trapWarning: "Esquecer que o número de misturas racêmicas é a METADE do número de isômeros opticamente ativos (cada par de enantiômeros forma 1 racemato)."
    },
    commonTraps: ["esquecer_de_dividir_por_dois_para_os_racematos", "errar_a_potencia_de_dois"],
    tags: ["isomeria_optica", "van_t_hoff", "carboidratos", "carbono_quiral"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-019",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Química Orgânica",
    subtopic: "Refino do Petróleo: Destilação Fracionada e Craqueamento",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O petróleo bruto extraído de poços offshore da camada pré-sal é uma mistura complexa de centenas de hidrocarbonetos. Nas refinarias, ele passa inicialmente por uma torre de destilação fracionada, onde suas frações são separadas com base nas diferenças de ponto de ebulição. Posteriormente, frações pesadas de menor valor comercial (como gasóleo com cadeias de C20 ou mais) são submetidas ao craqueamento catalítico (cracking).",
      source: "Petroquímica e Matrizes Energéticas no Brasil"
    },
    prompt: "O craqueamento catalítico das frações pesadas do petróleo tem como principal finalidade tecnológica e econômica:",
    options: [
      { id: "a", text: "quebrar moléculas de hidrocarbonetos de cadeias longas em moléculas menores de menor massa molar, aumentando substancialmente o rendimento na produção de gasolina e gás liquefeito de petróleo (GLP).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "transformar hidrocarbonetos apolares em proteínas sintéticas biodegradáveis para ração animal.", isCorrect: false, distractorRationale: "O craqueamento não sintetiza proteínas nem aminoácidos; opera puramente na clivagem de hidrocarbonetos." },
      { id: "c", text: "purificar o petróleo bruto através da precipitação de sais de cloreto de sódio em água do mar.", isCorrect: false, distractorRationale: "A dessalinização é um processo físico preliminar de lavagem, não o craqueamento térmico-catalítico." },
      { id: "d", text: "converter toda a gasolina líquida em asfalto sólido para pavimentação de avenidas urbanas.", isCorrect: false, distractorRationale: "O asfalto é a fração residual de menor valor; o objetivo do craqueamento é gerar frações leves mais nobres (gasolina e GLP), e não asfalto." },
      { id: "e", text: "aumentar o tamanho das cadeias carbônicas para transformá-las em querosene de aviação fóssil pesado.", isCorrect: false, distractorRationale: "Craqueamento quebra cadeias (cracking = quebra), reduzindo o tamanho das moléculas." }
    ],
    detailedExplanation: {
      summary: "O craqueamento (cracking) térmico ou catalítico rompe ligações covalentes C-C de moléculas grandes de óleos pesados para transformá-las em cadeias curtas de alto valor comercial (gasolina, nafta e GLP).",
      stepByStep: [
        "Passo 1: Entender a limitação da destilação fracionada: a destilação apenas separa as frações já presentes fisicamente no petróleo, mas a demanda por gasolina é muito superior à quantidade naturalmente presente no óleo cru.",
        "Passo 2: Compreender o papel do craqueamento catalítico: é uma transformação química (quebra de ligações C-C sob alta temperatura e catalisadores zeolíticos).",
        "Passo 3: Exemplo de reação de cracking: C20H42 -> C8H18 (octano/gasolina) + C12H24 (alcenos úteis na indústria de polímeros).",
        "Passo 4: A opção 'a' sintetiza o propósito fundamental do processo de craqueamento."
      ],
      coreConcept: "Refino do petróleo, destilação fracionada (processo físico) e craqueamento catalítico (processo químico de clivagem).",
      trapWarning: "Confundir destilação fracionada (processo FÍSICO que não altera moléculas) com craqueamento (processo QUÍMICO que quebra moléculas longas)."
    },
    commonTraps: ["confundir_processo_fisico_com_quimico_no_refino", "achar_que_craqueamento_aumenta_cadeias_carbônicas"],
    tags: ["petroleo", "destilacao_fracionada", "craqueamento", "gasolina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ORG-020",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Química Orgânica",
    subtopic: "Compostos Organoclorados e Biomagnificação Trófica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O diclorodifeniltricloroetano (DDT) é um inseticida organoclorado sintético amplamente utilizado na agricultura e no combate à malária em meados do século XX até seu banimento por convenções internacionais. Trata-se de uma substância altamente apolar, de degradação química extremamente lenta no meio ambiente e insolúvel em água, porém com altíssima solubilidade em lipídios e solventes orgânicos.",
      source: "Rachel Carson, Primavera Silenciosa / Poluentes Orgânicos Persistentes (POPs)"
    },
    prompt: "As características físico-químicas de elevada apolaridade e lipossolubilidade do DDT conferem a esse composto orgânico a perigosa propriedade biológica de:",
    options: [
      { id: "a", text: "acumular-se progressivamente no tecido adiposo dos organismos vivos e concentrar-se em níveis crescentes ao longo dos níveis tróficos da cadeia alimentar (biomagnificação).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ser rapidamente excretado na urina humana através de filtração glomerular renal em menos de 24 horas.", isCorrect: false, distractorRationale: "Sendo apolar e insolúvel em água, o DDT não é eliminado na urina aquosa e fica retido no tecido gorduroso por décadas." },
      { id: "c", text: "servir como fonte primária de glicose para bactérias aeróbias do solo fértil.", isCorrect: false, distractorRationale: "O DDT é tóxico e recalcitrante (não é nutriente nem substrato para síntese de glicose)." },
      { id: "d", text: "evaporar instantaneamente na atmosfera e reagir com a camada de ozônio sem afetar a fauna terrestre.", isCorrect: false, distractorRationale: "O DDT acumula-se no solo, na água e na gordura de animais, causando graves danos reprodutivos em aves de topo de cadeia." },
      { id: "e", text: "neutralizar totalmente os efeitos da chuva ácida em ecossistemas aquáticos lacustres.", isCorrect: false, distractorRationale: "Compostos organoclorados não são bases de neutralização de ácidos." }
    ],
    detailedExplanation: {
      summary: "Compostos organoclorados como o DDT são lipossolúveis (armazenam-se em gorduras) e não biodegradáveis, acumulando-se no corpo de cada indivíduo (bioacumulação) e aumentando de concentração a cada nível trófico (biomagnificação).",
      stepByStep: [
        "Passo 1: Propriedade química do DDT: molécula aromática fortemente clorada, apolar e lipofílica (afinidade por lipídios).",
        "Passo 2: Comportamento no organismo: o corpo humano e animal não consegue excretá-lo facilmente por vias aquosas (urina), retendo a molécula nos adipócitos (tecido gorduroso) -> bioacumulação individual.",
        "Passo 3: Comportamento ecológico na teia trófica: fitoplâncton absorve traços; zooplâncton come muito fitoplâncton; peixes comem muito zooplâncton; aves de rapina e carnívoros de topo concentram doses letais de DDT -> biomagnificação (ou magnificação trófica).",
        "Passo 4: A opção 'a' descreve com exatidão científica a conexão entre estrutura orgânica e ecotoxicologia no ENEM."
      ],
      coreConcept: "Compostos organoclorados (POPs), lipossolubilidade, bioacumulação e biomagnificação trófica.",
      trapWarning: "Achar que substâncias apolares são eliminadas rapidamente na urina. A urina é meio aquoso; substâncias apolares ficam retidas nas gorduras corporais!"
    },
    commonTraps: ["achar_que_substancia_apolar_e_eliminada_na_urina", "confundir_bioacumulacao_com_eutrofizacao"],
    tags: ["ddt", "organoclorados", "lipossolubilidade", "biomagnificacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

