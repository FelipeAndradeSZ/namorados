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
  }
];
