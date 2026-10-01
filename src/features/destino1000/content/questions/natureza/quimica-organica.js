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
    subtopic: "Identificação de Funções: Álcool vs. Fenol",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O eugenol (óleo de cravo) e o vanilina (aroma de baunilha) contêm o grupo hidroxila (-OH) ligado diretamente a um anel benzênico. Já o mentol (aroma de hortelã) possui a hidroxila ligada a um carbono saturado de anel ciclo-hexano.",
      source: "ENEM Química dos Alimentos"
    },
    prompt: "Com base nessas estruturas, a hidroxila presente no eugenol e no mentol caracterizam, respectivamente, as funções orgânicas:",
    options: [
      { id: "a", text: "Fenol e Álcool.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Álcool e Fenol.", isCorrect: false, distractorRationale: "Inverteu a ordem das funções." },
      { id: "c", text: "Ácido Carboxílico e Álcool.", isCorrect: false, distractorRationale: "Ácido carboxílico requer a carbonila conjugada (-COOH)." },
      { id: "d", text: "Éter e Éster.", isCorrect: false, distractorRationale: "Éter é oxigênio entre carbonos (C-O-C), sem hidroxila livre." },
      { id: "e", text: "Enol e Álcool.", isCorrect: false, distractorRationale: "Enol requer hidroxila ligada a carbono com dupla ligação alifática (C=C-OH), não aromático." }
    ],
    detailedExplanation: {
      summary: "-OH ligado diretamente ao anel benzênico = FENOL. -OH ligado a carbono saturado (sp³) = ÁLCOOL.",
      stepByStep: [
        "Eugenol: a hidroxila está conectada diretamente ao anel aromático → FENOL (possui caráter ácido mais acentuado devido à ressonância do anel).",
        "Mentol: o anel é um cicloalcano (sem ligações duplas conjugadas), portanto o carbono é saturado sp³ → ÁLCOOL.",
        "Se a hidroxila estivesse ligada a um carbono com dupla alifática (C=C), seria ENOL."
      ],
      coreConcept: "Diferenciação entre Álcool, Fenol e Enol pela vizinhança do grupo -OH",
      trapWarning: "Muito comum no ENEM: o aluno vê um anel benzênico com um grupo -CH2-OH e acha que é fenol. Se tem -CH2- antes do anel, é ÁLCOOL BENZÍLICO, não fenol!"
    },
    commonTraps: ["confundir fenol com álcool aromático", "chamar ciclo-hexano de anel aromático"],
    tags: ["funcoes organicas", "fenol", "alcool"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
