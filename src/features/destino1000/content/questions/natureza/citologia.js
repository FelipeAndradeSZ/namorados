export const QUESTIONS_CITOLOGIA = [
  {
    id: "NAT-CITO-001",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Metabolismo Energético: Respiração Celular",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O cianeto é um veneno de ação fulminante que se liga fortemente ao ferro presente no complexo da citocromo c oxidase (complexo IV da cadeia respiratória mitocondrial), inativando-o irreversivelmente. Como consequência, a transferência de elétrons para o aceptor final é bloqueada nas cristas mitocondriais.",
      source: "Fundamentos de Bioquímica e Biologia Celular"
    },
    prompt: "Em uma célula submetida à intoxicação por cianeto, a interrupção da síntese de ATP pela ATP sintase mitocondrial ocorre diretamente porque:",
    options: [
      { id: "a", text: "o oxigênio passa a ser consumido em taxas elevadas no citoplasma.", isCorrect: false, distractorRationale: "O cianeto cessa o consumo de oxigênio pela mitocôndria, e não há consumo elevado no citoplasma." },
      { id: "b", text: "cessa o bombeamento de prótons H+ para o espaço intermembranas, dissipando o gradiente eletroquímico.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "a glicólise anaeróbica no citosol é totalmente paralisada por falta de piruvato.", isCorrect: false, distractorRationale: "A glicólise continua ocorrendo inicialmente (e se intensifica com fermentação lática) na tentativa de gerar ATP." },
      { id: "d", text: "o ciclo de Krebs passa a produzir excesso de ácido lático dentro da matriz.", isCorrect: false, distractorRationale: "O ciclo de Krebs ocorre na matriz mitocondrial e não produz ácido lático (que é gerado no citosol a partir do piruvato)." },
      { id: "e", text: "as moléculas de glicose deixam de atravessar a membrana mitocondrial externa.", isCorrect: false, distractorRationale: "Glicose nunca entra na mitocôndria; o que entra é o piruvato gerado pela glicólise." }
    ],
    detailedExplanation: {
      summary: "O transporte de elétrons gera o gradiente de prótons (H+) essencial para a ATP sintase. Bloquear a cadeia respiratória anula esse gradiente.",
      stepByStep: [
        "Passo 1: A cadeia respiratória mitocondrial transfere elétrons de alta energia (doados por NADH e FADH2) até o oxigênio (aceptor final).",
        "Passo 2: Essa passagem de elétrons alimenta as bombas de prótons que acumulam H+ no espaço intermembranas.",
        "Passo 3: A ATP sintase utiliza o refluxo a favor do gradiente desses prótons para sintetizar ATP (teoria quimiosmótica de Mitchell).",
        "Passo 4: Se o cianeto inibe o complexo IV, os elétrons param de fluir, o bombeamento de H+ cessa e o gradiente é dissipado, impedindo a produção de ATP."
      ],
      coreConcept: "Cadeia Transportadora de Elétrons, Gradiente de Prótons e Teoria Quimiosmótica",
      trapWarning: "Cuidado: glicose NÃO entra na mitocôndria. Apenas o piruvato atravessa a membrana para ser convertido em Acetil-CoA."
    },
    commonTraps: ["Achar que a glicose entra na mitocôndria", "Confundir localização citoplasmática da fermentação com matriz mitocondrial"],
    tags: ["bioquímica", "mitocôndria", "respiração celular", "tri-ouro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-002",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Citologia",
    subtopic: "Fotossíntese: Etapas e Reações",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1941, pesquisadores utilizaram o isótopo estável oxigênio-18 (¹⁸O) para elucidar a origem do gás oxigênio (O2) liberado na fotossíntese. Forneceram a um grupo de plantas água enriquecida com ¹⁸O (H2¹⁸O) e CO2 com oxigênio comum (C¹⁶O2). A outro grupo, forneceram H2¹⁶O e C¹⁸O2.",
      source: "Experimento Histórico de Ruben e Kamen"
    },
    prompt: "Com base no funcionamento da etapa fotoquímica (fase clara) da fotossíntese nos tilacoides, o gás oxigênio marcado com ¹⁸O foi detectado:",
    options: [
      { id: "a", text: "apenas no segundo grupo, pois o O2 é formado pela redução do dióxido de carbono no estroma.", isCorrect: false, distractorRationale: "O CO2 é reduzido no ciclo de Calvin gerando carboidratos (glicose), não liberando O2." },
      { id: "b", text: "apenas no primeiro grupo, comprovando que o oxigênio liberado provém da fotólise da água.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "em ambos os grupos em igual proporção, indicando dupla procedência do gás.", isCorrect: false, distractorRationale: "100% do oxigênio gasoso vem exclusivamente da água, nunca do CO2." },
      { id: "d", text: "no segundo grupo sob forma de glicose e no primeiro sob forma de ATP.", isCorrect: false, distractorRationale: "A pergunta questiona onde o gás oxigênio foi detectado na atmosfera." },
      { id: "e", text: "em nenhum dos grupos, porque o O2 liberado é consumido integralmente pelos peroxissomos.", isCorrect: false, distractorRationale: "O O2 é liberado em abundância para a atmosfera pela reação de Hill." }
    ],
    detailedExplanation: {
      summary: "A fotólise da água (reação de Hill) nos tilacoides quebra a água em H+, elétrons e gás oxigênio (O2). Portanto, todo o O2 liberado provém da água.",
      stepByStep: [
        "Passo 1: Lembrar da Reação de Hill: 2 H2O + luz → 4 H+ + 4 e- + O2.",
        "Passo 2: O oxigênio presente na molécula de H2O é oxidado e liberado como gás O2.",
        "Passo 3: O oxigênio presente no CO2 é incorporado na matéria orgânica (glicose e água residual) durante o ciclo de Calvin.",
        "Passo 4: Logo, no primeiro grupo que recebeu H2¹⁸O, o gás recolhido foi ¹⁸O2."
      ],
      coreConcept: "Fotólise da Água (Reação de Hill) e Origem do O2 Fotossintético",
      trapWarning: "Pegadinha clássica do ENEM: muitos alunos acreditam que o O2 liberado vem do CO2 absorvido. Vem EXCLUSIVAMENTE da água!"
    },
    commonTraps: ["Achar que o O2 vem do CO2", "Confundir fase clara nos tilacoides com ciclo de Calvin no estroma"],
    tags: ["botanica", "bioquimica", "fotossintese", "experimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-003",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Metabolismo Anaeróbico: Fermentação",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante exercícios físicos anaeróbicos intensos (como um tiro de 100 metros rasos ou levantamento de peso pesado), a demanda muscular por ATP supera rapidamente a capacidade do sistema cardiovascular de fornecer oxigênio suficiente às mitocôndrias dos miócitos esqueléticos.",
      source: "Fisiologia do Exercício"
    },
    prompt: "Nessas condições de hipóxia celular transitória, o principal papel fisiológico da conversão de piruvato em lactato (fermentação lática) pelas fibras musculares é:",
    options: [
      { id: "a", text: "produzir grandes quantidades adicionais de ATP diretamente a partir do lactato.", isCorrect: false, distractorRationale: "A conversão de piruvato em lactato não gera nenhum ATP adicional; o ATP veio da glicólise prévia." },
      { id: "b", text: "regenerar o coenzima NAD+ no citoplasma para que a glicólise continue produzindo ATP.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "neutralizar a acidez gerada pelo excesso de gás carbônico na matriz mitocondrial.", isCorrect: false, distractorRationale: "O lactato (ácido lático) reduz o pH e aumenta a acidez tecidual, não a neutraliza." },
      { id: "d", text: "permitir que o piruvato seja transportado para o núcleo e induza transcrição de actina.", isCorrect: false, distractorRationale: "O piruvato não tem essa função de indução nuclear no estresse agudo." },
      { id: "e", text: "eliminar o excesso de íons cálcio do retículo sarcoplasmático.", isCorrect: false, distractorRationale: "O cálcio é recaptado por bombas ativas de Ca2+, sem relação direta com a síntese de lactato." }
    ],
    detailedExplanation: {
      summary: "A fermentação lática oxida o NADH de volta a NAD+, garantindo que a glicólise não pare por falta de reagente aceptor de elétrons.",
      stepByStep: [
        "Passo 1: A glicólise converte glicose em 2 piruvatos, produzindo 2 ATPs líquidos e reduzindo 2 NAD+ a 2 NADH.",
        "Passo 2: Sem oxigênio, a cadeia respiratória para e não há como a mitocôndria reoxidar o NADH em NAD+.",
        "Passo 3: Se todo o NAD+ citoplasmático virasse NADH, a glicólise travaria por falta de NAD+ oxidado.",
        "Passo 4: A enzima lactato desidrogenase transfere elétrons do NADH para o piruvato, gerando lactato e regenerando NAD+ livre para sustentar a glicólise."
      ],
      coreConcept: "Regeneração de NAD+ na Fermentação",
      trapWarning: "A fermentação em si NÃO produz ATP; o ATP é gerado na etapa glicolítica. A fermentação serve para REGENERAR o NAD+."
    },
    commonTraps: ["Achar que a fermentação gera dezenas de ATPs", "Desconhecer o papel de aceptor de elétrons do NAD+"],
    tags: ["fisiologia", "fermentação", "metabolismo", "músculos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-004",
    area: "natureza",
    competence: 4,
    skill: 13,
    topic: "Citologia",
    subtopic: "Fisiologia da Membrana Plasmática",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Hemácias humanas maduras colocadas em três tubos de ensaio com diferentes concentrações de cloreto de sódio (NaCl) apresentaram comportamentos distintos: no Tubo 1 (solução a 0,2% NaCl), as células incharam e romperam (hemólise); no Tubo 2 (0,9% NaCl), mantiveram seu formato bicôncavo normal; no Tubo 3 (solução a 2,5% NaCl), sofreram retração e murcharam (crenação).",
      source: "Prática Laboratorial de Biofísica Celular"
    },
    prompt: "A lise das hemácias observada no Tubo 1 decorre de um processo de transporte através da membrana caracterizado por:",
    options: [
      { id: "a", text: "entrada ativa de íons sódio contra o gradiente de concentração com consumo de ATP.", isCorrect: false, distractorRationale: "O inchaço é causado pela entrada de água (solvente), não pelo bombeamento ativo de sódio." },
      { id: "b", text: "difusão simples de NaCl da solução mais concentrada para o interior da célula.", isCorrect: false, distractorRationale: "A solução no Tubo 1 é hipotônica (0,2% < 0,9%), ou seja, menos concentrada que a hemácia." },
      { id: "c", text: "osmose, decorrente do influxo passivo de água para o meio intracelular hipertônico.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "fagocitose acelerada de cristais salinos mediada por receptores de membrana.", isCorrect: false, distractorRationale: "Hemácias maduras não realizam fagocitose de cristais." },
      { id: "e", text: "bloqueio total das aquaporinas provocado pelo choque térmico do meio aquoso.", isCorrect: false, distractorRationale: "As aquaporinas facilitam a passagem da água; o rompimento ocorre exatamente porque a água entra em excesso." }
    ],
    detailedExplanation: {
      summary: "Em meio hipotônico (0,2%), o interior da hemácia é hipertônico. Por osmose, a água se desloca do meio menos concentrado para o mais concentrado até romper a célula (plasmoptise/hemólise).",
      stepByStep: [
        "Passo 1: A osmolaridade fisiológica da hemácia equivale a aproximadamente 0,9% de NaCl (soro fisiológico = isotônico).",
        "Passo 2: No Tubo 1 (0,2% NaCl), o meio extracelular é HIPOTÔNICO em relação ao citoplasma da hemácia (meio interno hipertônico).",
        "Passo 3: A água move-se por osmose a favor do gradiente de potencial hídrico (do meio menos concentrado para o mais concentrado em soluto).",
        "Passo 4: Como a célula animal não possui parede celular para conter a pressão de turgor, o excesso de água causa a ruptura da membrana (hemólise)."
      ],
      coreConcept: "Osmose em Células Animais: Plasmoptise e Crenação",
      trapWarning: "Células vegetais NÃO sofrem lise em meio hipotônico devido à resistência mecânica da parede celular celulósica (ficam túrgidas)."
    },
    commonTraps: ["Confundir o sentido da osmose (água vai para onde tem MAIS soluto)", "Generalizar lise para células vegetais"],
    tags: ["membrana", "osmose", "fisiologia", "transporte celular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-005",
    area: "natureza",
    competence: 4,
    skill: 13,
    topic: "Citologia",
    subtopic: "Sistema Endomembranar e Organelas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Células dos ácinos pancreáticos são especializadas na secreção maciça de enzimas digestivas (como tripsinogênio, amilase e lípase pancreática), as quais são empacotadas em grânulos de zimogênio e lançadas no duodeno por exocitose após estímulo hormonal.",
      source: "Histologia Básica de Junqueira & Carneiro"
    },
    prompt: "Para viabilizar essa alta taxa de síntese, modificação pós-traducional e secreção proteica, essas células glandulares apresentam desenvolvimento proeminente de:",
    options: [
      { id: "a", text: "peroxissomos e retículo endoplasmático liso.", isCorrect: false, distractorRationale: "REL atua na síntese de lipídios e desintoxicação, não na síntese de enzimas proteicas." },
      { id: "b", text: "retículo endoplasmático rugoso e complexo golgiense.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "lisossomos primários e centríolos duplicados.", isCorrect: false, distractorRationale: "Lisossomos fazem digestão intracelular (autofagia/heterofagia), não secreção para o duodeno." },
      { id: "d", text: "cloroplastos e vacúolo contrátil de pulsão.", isCorrect: false, distractorRationale: "Estruturas presentes em vegetais e protozoários de água doce, inexistentes no pâncreas." },
      { id: "e", text: "microfilamentos de queratina e desmossomos apenas.", isCorrect: false, distractorRationale: "Queratina dá sustentação mecânica aos epitélios de revestimento (pele), não secreção enzimática." }
    ],
    detailedExplanation: {
      summary: "Proteínas de exportação (secreção) são sintetizadas no Retículo Rugoso (RER), transferidas em vesículas para o Complexo de Golgi (onde são glicosiladas e empacotadas) e exportadas por exocitose.",
      stepByStep: [
        "Passo 1: Identificar a natureza química do produto das células pancreáticas acinares: enzimas digestivas = proteínas.",
        "Passo 2: Recordar o caminho clássico das proteínas de exportação celular (rota secretora): Ribossomos aderidos ao RER → lúmen do RER → vesículas de transição → Complexo de Golgi (faces cis e trans) → vesículas secretoras → fusão com a membrana (exocitose).",
        "Passo 3: Portanto, as duas organelas mais abundantes e hipertrofiadas nessas células secretoras são o RER e o Golgi."
      ],
      coreConcept: "Rota Secretora: RER, Complexo Golgiense e Exocitose",
      trapWarning: "Cuidado: ribossomos livres no citosol sintetizam proteínas de uso interno da própria célula. Proteínas de exportação passam obrigatoriamente pelo RER e Golgi."
    },
    commonTraps: ["Confundir função do RER (proteínas) com a do REL (lipídios e desintoxicação)", "Confundir secreção com excreção lisossômica"],
    tags: ["organelas", "secreção", "pâncreas", "biologia celular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-006",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Peroxissomos e Estresse Oxidativo",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao aplicar água oxigenada (solução de peróxido de hidrogênio a 3%, H2O2) sobre um ferimento na pele, nota-se imediatamente uma efervescência vigorosa com liberação de microbolhas. Esse fenômeno também ocorre se uma gota da solução for colocada sobre uma fatia fresca de fígado cru.",
      source: "Bioquímica Aplicada à Saúde"
    },
    prompt: "Essa efervescência indica a degradação catalítica rápida do peróxido de hidrogênio (espécie reativa de oxigênio citotóxica), mediada pela enzima:",
    options: [
      { id: "a", text: "pepsina, secretada pelas células gástricas, liberando gás nitrogênio (N2).", isCorrect: false, distractorRationale: "Pepsina digere proteínas no estômago em pH ácido e não degrada H2O2." },
      { id: "b", text: "catalase, presente em abundância nos peroxissomos, liberando oxigênio (O2) e água.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "DNA polimerase, liberando gás carbônico (CO2) após quebra dos nucleotídeos.", isCorrect: false, distractorRationale: "DNA polimerase atua na replicação do DNA no núcleo celular." },
      { id: "d", text: "amilase salivar, gerando hidrogênio gasoso (H2) explosivo.", isCorrect: false, distractorRationale: "Amilase hidrolisa amido na boca em pH neutro." },
      { id: "e", text: "lipase ácida, que converte água oxigenada em ácidos graxos voláteis.", isCorrect: false, distractorRationale: "Lipase hidrolisa triglicerídeos, sem ação sobre H2O2." }
    ],
    detailedExplanation: {
      summary: "A enzima catalase, abundante nos peroxissomos, catalisa a reação 2 H2O2 → 2 H2O + O2, neutralizando os radicais livres e formando bolhas de oxigênio.",
      stepByStep: [
        "Passo 1: As reações de oxidação celular (como a beta-oxidação de ácidos graxos longos) produzem peróxido de hidrogênio (H2O2) como subproduto tóxico.",
        "Passo 2: Para evitar a peroxidação lipídica das membranas e danos ao DNA, os peroxissomos possuem a enzima catalase.",
        "Passo 3: A catalase quebra o H2O2 em água inócua (H2O) e oxigênio gasoso (O2).",
        "Passo 4: As bolhas de efervescência são constituídas de gás oxigênio puro (O2)."
      ],
      coreConcept: "Peroxissomos, Enzima Catalase e Neutralização de Radicais Livres",
      trapWarning: "As bolhas são de O2, nunca de CO2 ou H2 gasoso!"
    },
    commonTraps: ["Achar que as bolhas são de gás carbônico", "Atribuir a catalase aos lisossomos em vez dos peroxissomos"],
    tags: ["peroxissomo", "enzimas", "radicais livres", "fisiologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-007",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Citologia",
    subtopic: "Divisão Celular e Citoesqueleto",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Medicamentos quimioterápicos antineoplásicos, como o paclitaxel (Taxol) e a vimblastina, têm como alvo específico as subunidades de alfa e beta tubulina que constituem os microtúbulos do citoesqueleto. Eles impedem a dinâmica de polimerização e despolimerização do fuso mitótico.",
      source: "Farmacologia Oncológica Contemporânea"
    },
    prompt: "Ao paralisar a contração dos microtúbulos do fuso durante a mitose, esses agentes quimioterápicos impedem a progressão do ciclo celular precisamente ao bloquear a:",
    options: [
      { id: "a", text: "duplicação semiconservativa do DNA durante a fase S da intérfase.", isCorrect: false, distractorRationale: "A duplicação do DNA ocorre na intérfase mediada por DNA polimerases, bem antes do fuso mitótico atuar." },
      { id: "b", text: "separação e migração das cromátides-irmãs para os polos opostos na anáfase.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "desintegração da carioteca ocorrida na transição da prófase para a metáfase.", isCorrect: false, distractorRationale: "A fosforilação das lâminas nucleares degrada a carioteca, sem depender da tração dos microtúbulos." },
      { id: "d", text: "citocinese centrípeta provocada pelo anel contrátil de filamentos de actina.", isCorrect: false, distractorRationale: "A citocinese animal depende de filamentos de actina e miosina, e ocorre após a anáfase e telófase." },
      { id: "e", text: "descondensação cromossômica e reorganização do nucléolo na telófase.", isCorrect: false, distractorRationale: "A célula nem chega à telófase, pois é detida no ponto de checagem do fuso entre metáfase e anáfase." }
    ],
    detailedExplanation: {
      summary: "Os microtúbulos do fuso mitótico tracionam as cromátides-irmãs em direção aos polos celulares na anáfase. Se impedidos de encurtar, a anáfase é travada e a célula entra em apoptose.",
      stepByStep: [
        "Passo 1: Identificar a função do fuso acromático/mitótico: ancorar-se aos cinetócoros dos cromossomos durante a metáfase.",
        "Passo 2: Na anáfase, os microtúbulos despolimerizam (encurtam), exercendo força mecânica que rompe os centrômeros e puxa as cromátides-irmãs para lados opostos.",
        "Passo 3: Drogas antimicrotúbulos (Taxol, colchicina) impedem esse encurtamento, ativando o ponto de checagem (checkpoint mitótico) e forçando a célula cancerígena à morte celular programada.",
        "Passo 4: Portanto, a fase bloqueada diretamente é a anáfase."
      ],
      coreConcept: "Fuso Mitótico, Microtúbulos e Bloqueio da Anáfase em Quimioterapia",
      trapWarning: "Lembre-se da ordem das fases da mitose: 'PRO METO A ANA NO TELO' (Prófase, Metáfase, Anáfase, Telófase). A separação das cromátides ocorre na Anáfase."
    },
    commonTraps: ["Confundir microtúbulos (tubulina) com microfilamentos (actina)", "Confundir alinhamento na placa equatorial (metáfase) com tração e separação (anáfase)"],
    tags: ["oncologia", "mitose", "citoesqueleto", "medicina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-008",
    area: "natureza",
    competence: 4,
    skill: 13,
    topic: "Citologia",
    subtopic: "Origem Celular: Teoria Endossimbiótica",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Teoria da Endossimbiose Seriada, proposta pela bióloga Lynn Margulis na década de 1960, postula que mitocôndrias e cloroplastos evoluíram a partir de procariontes primitivos aeróbicos e fotossintetizantes que foram englobados por células hospedeiras ancestrais maiores, estabelecendo uma relação mutualística permanente.",
      source: "Biologia Evolutiva e Celular"
    },
    prompt: "Qual das seguintes características moleculares e estruturais observadas nas mitocôndrias atuais constitui evidência científica direta dessa ancestralidade procariótica independente?",
    options: [
      { id: "a", text: "Presença de DNA circular desprovido de histonas e ribossomos 70S semelhantes aos de bactérias.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Capacidade de sintetizar todas as suas próprias enzimas sem nenhuma cooperação do genoma nuclear.", isCorrect: false, distractorRationale: "Muitos genes mitocondriais foram transferidos para o núcleo celular ao longo de bilhões de anos; a mitocôndria é semiautônoma." },
      { id: "c", text: "Membrana externa rica em fosfolipídios com colesterol e ausência total de membrana interna.", isCorrect: false, distractorRationale: "Mitocôndrias possuem DUPLA membrana (a interna rica em cardiolipina, de origem procariótica)." },
      { id: "d", text: "Reprodução celular sincronizada rigorosamente com a mitose por meio de centríolos.", isCorrect: false, distractorRationale: "Mitocôndrias dividem-se de forma independente por fissão binária simples, como as bactérias." },
      { id: "e", text: "Presença de introns complexos e processamento de RNA com spliceossomos nucleares.", isCorrect: false, distractorRationale: "Bactérias e mitocôndrias tipicamente não possuem introns complexos nem usam spliceossomos nucleares." }
    ],
    detailedExplanation: {
      summary: "Mitocôndrias e cloroplastos possuem genoma próprio circular (como bactérias), ribossomos 70S (menores que os 80S eucarióticos), dupla membrana e autoduplicação por fissão binária.",
      stepByStep: [
        "Passo 1: Reconhecer as 4 provas clássicas da Teoria Endossimbiótica de Margulis:",
        "1) DNA próprio: fita dupla circular, sem associação íntima com proteínas histonas;",
        "2) Ribossomos próprios do tipo 70S (sensíveis aos mesmos antibióticos que atacam bactérias);",
        "3) Dupla membrana lipídica: a interna com composição semelhante à de bactérias (cardiolipina) e a externa remanescente da vesícula de endocitose da célula hospedeira;",
        "4) Autoduplicação por fissão binária independente da divisão do núcleo celular."
      ],
      coreConcept: "Evidências da Teoria Endossimbiótica de Lynn Margulis",
      trapWarning: "Cuidado: a mitocôndria NÃO é totalmente autônoma (é semiautônoma), pois depende de várias proteínas codificadas pelo núcleo celular."
    },
    commonTraps: ["Achar que a mitocôndria não tem DNA próprio", "Achar que a mitocôndria é 100% autônoma"],
    tags: ["evolução", "endossimbiose", "mitocôndria", "teoria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-009",
    area: "natureza",
    competence: 4,
    skill: 13,
    topic: "Citologia",
    subtopic: "Morte Celular: Apoptose vs. Necrose",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a embriogênese humana, as mãos e os pés do feto inicialmente se desenvolvem como pás maciças. A individualização dos dedos ocorre pela eliminação programada das células que compõem as membranas interdigitais, um processo rigorosamente orquestrado por caspases sem extravasamento do conteúdo citoplasmático nem recrutamento de resposta inflamatória.",
      source: "Embriologia Humana e Biologia do Desenvolvimento"
    },
    prompt: "Esse mecanismo fisiológico silencioso de morte celular controlada, essencial para a morfogênese e a prevenção do câncer, é denominado:",
    options: [
      { id: "a", text: "necrose isquêmica, que induz febre e fagocitose por neutrófilos.", isCorrect: false, distractorRationale: "Necrose é morte patológica com rompimento de membrana e forte reação inflamatória." },
      { id: "b", text: "autofagia starvation, que consome o núcleo celular para gerar glicogênio livre.", isCorrect: false, distractorRationale: "Autofagia é reciclagem de organelas velhas em períodos de privação, não morfogênese digital." },
      { id: "c", text: "apoptose, caracterizada por condensação cromatínica e formação de corpos apoptóticos.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "citólise osmótica, decorrente de desequilíbrio na bomba de prótons da membrana.", isCorrect: false, distractorRationale: "Citólise osmótica é rompimento acidental por meio hipotônico." },
      { id: "e", text: "diferenciação telomérica, na qual as células estancam a transcrição de RNA ribossômico.", isCorrect: false, distractorRationale: "Diferenciação é especialização celular, não morte celular programada por caspases." }
    ],
    detailedExplanation: {
      summary: "A apoptose é o processo de morte celular programada: a célula fragmenta seu DNA, encolhe e forma corpos apoptóticos que são fagocitados por macrófagos sem inflamação.",
      stepByStep: [
        "Passo 1: Distinguir apoptose (fisiológica, programada, silenciosa, sem inflamação) de necrose (patológica, por injúria/trauma/isquemia, com lise de membrana e resposta inflamatória aguda).",
        "Passo 2: Na embriogênese, a regressão da membrana entre os dedos das mãos e dos pés é o exemplo clássico de apoptose guiada geneticamente.",
        "Passo 3: As caspases (proteases de cisteína) clivam proteínas-chave da célula, levando à fragmentação ordeira do genoma e formação de corpos apoptóticos limpos."
      ],
      coreConcept: "Apoptose (Morte Celular Programada) vs. Necrose",
      trapWarning: "Apoptose NÃO gera inflamação, pois a membrana celular não se rompe livremente no tecido, preservando a integridade tecidual ao redor."
    },
    commonTraps: ["Confundir apoptose com necrose", "Achar que toda morte celular gera pus e inflamação"],
    tags: ["embriologia", "apoptose", "desenvolvimento", "medicina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-010",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Síntese Proteica e Código Genético",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Uma mutação pontual por substituição de um único par de bases no gene da hemoglobina beta trocou a trinca de códons GAG por GAA no RNA mensageiro. Surpreendentemente, a proteína hemoglobina final produzida no citoplasma dos reticulócitos manteve exatamente a mesma sequência de aminoácidos e plena funcionalidade biológica.",
      source: "Genética Médica e Biologia Molecular"
    },
    prompt: "O fato de a substituição do nucleotídeo não ter alterado o aminoácido incorporado na cadeia polipeptídica é explicado por qual propriedade biológica fundamental do código genético?",
    options: [
      { id: "a", text: "Universalidade, significando que todos os seres vivos traduzem os mesmos 20 aminoácidos.", isCorrect: false, distractorRationale: "Universalidade significa que quase todas as espécies usam o mesmo dicionário de códons, mas não explica dois códons diferentes codificarem o mesmo aminoácido." },
      { id: "b", text: "Degeneração ou redundância, na qual diferentes trincas de códons podem codificar o mesmo aminoácido.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Ambiguidade, indicando que um mesmo códon pode codificar vários aminoácidos distintos conforme o tecido.", isCorrect: false, distractorRationale: "O código genético NÃO é ambíguo: cada códon codifica única e especificamente um aminoácido." },
      { id: "d", text: "Sobreposição, pois os nucleotídeos são lidos simultaneamente por múltiplos ribossomos em fases defasadas.", isCorrect: false, distractorRationale: "O código não é sobreposto; a leitura é linear e contínua de três em três bases." },
      { id: "e", text: "Semiconservação, garantindo a conservação integral das fitas molde de RNA durante a tradução.", isCorrect: false, distractorRationale: "Semiconservativa é a replicação do DNA, não o código genético." }
    ],
    detailedExplanation: {
      summary: "O código genético é DEGENERADO (ou redundante): existem 64 códons para apenas 20 aminoácidos (e 3 sinais de parada). Assim, múltiplos códons (como GAG e GAA) codificam o mesmo aminoácido (ácido glutâmico).",
      stepByStep: [
        "Passo 1: Reconhecer a diferença entre 'degenerado' e 'ambíguo'.",
        "Passo 2: Degenerado = múltiplos códons codificam o mesmo aminoácido (ex: GAG e GAA = Ácido Glutâmico). Isso confere resistência a mutações pontuais (mutação silenciosa).",
        "Passo 3: NÃO é ambíguo: o códon GAG SEMPRE codifica ácido glutâmico, nunca outro aminoácido.",
        "Passo 4: Universal: o mesmo código vale de bactérias a humanos (com raras exceções)."
      ],
      coreConcept: "Propriedades do Código Genético: Degenerado (Redundante) e Não-Ambíguo",
      trapWarning: "Cuidado para não confundir 'degenerado' com 'ambíguo'. O código NUNCA é ambíguo (um códon nunca tem dúvida sobre qual aminoácido levar)."
    },
    commonTraps: ["Confundir degenerado com ambíguo", "Confundir universal com degenerado"],
    tags: ["genetica molecular", "mutacao", "sintese proteica", "codigo genetico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-011",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Cadeia Respiratória e Fosforilação Oxidativa",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O cianeto de potássio (KCN) é um veneno letal de ação fulminante. No interior das células humanas, o íon cianeto liga-se com altíssima afinidade ao ferro do complexo citocromo c oxidase (Complexo IV), bloqueando a transferência final de elétrons para o oxigênio molecular na membrana interna das mitocôndrias.",
      source: "Toxicologia Celular e Bioquímica Médica"
    },
    prompt: "A intoxicação por cianeto provoca a morte rápida do indivíduo porque interrompe diretamente a:",
    options: [
      { id: "a", text: "formação do gradiente eletroquímico de prótons e a síntese de ATP pela ATP sintase, colapsando o suprimento de energia metabólica celular.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "duplicação semiconservativa do DNA nuclear durante a fase S da interfase.", isCorrect: false, distractorRationale: "O cianeto bloqueia a respiração mitocondrial, não a replicação enzimática do DNA no núcleo." },
      { id: "c", text: "conversão inicial de glicose em frutose-1,6-bisfosfato na glicólise citoplasmática.", isCorrect: false, distractorRationale: "A glicólise ocorre no citosol e independe de oxigênio ou de citocromos mitocondriais." },
      { id: "d", text: "digestão intracelular de proteínas nos lisossomos secundários.", isCorrect: false, distractorRationale: "Enzimas hidrolíticas lisossômicas não dependem da cadeia respiratória para funcionar a curto prazo." },
      { id: "e", text: "excreção renal de uréia pelos túbulos contorcidos distais.", isCorrect: false, distractorRationale: "Esse é um processo fisiológico tecidual posterior; a causa primária fatal é o colapso energético celular geral." }
    ],
    detailedExplanation: {
      summary: "Na fosforilação oxidativa mitocondrial, a passagem de elétrons pelos complexos da cadeia respiratória bombeia prótons H+ para o espaço intermembranas. O cianeto trava o Complexo IV, o gradiente de H+ zera, e a ATP sintase para de girar, cessando a produção de ATP.",
      stepByStep: [
        "1. Cadeia de transporte de elétrons: elétrons trazidos por NADH e FADH2 fluem pelos complexos I, II, III e IV.",
        "2. Aceptor final de elétrons: Oxigênio (O2), que se combina com prótons formando água (H2O).",
        "3. Bloqueio por cianeto: inibe o Complexo IV -> trava toda a cadeia a montante.",
        "4. Sem fluxo de elétrons, não há bombeamento de prótons H+ -> fim do gradiente quimiosmótico.",
        "5. Sem gradiente de prótons, a ATP sintase cessa a fosforilação de ADP em ATP, causando falência celular sistêmica imediata."
      ],
      coreConcept: "Cadeia Respiratória, Gradiente Eletroquímico de H+ e Fosforilação Oxidativa",
      trapWarning: "No ENEM: O oxigênio é o ACEPTOR FINAL de elétrons na respiração celular. Se ele for bloqueado (ou se o complexo IV for inibido), o ciclo de Krebs e a cadeia param."
    },
    commonTraps: [
      "Achar que o cianeto destrói as moléculas de glicose",
      "Confundir cadeia respiratória (mitocôndria) com glicólise (citosol)"
    ],
    tags: ["bioenergetica", "mitocondria", "cadeia-respiratoria", "atp-sintase", "fosforilacao-oxidativa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-012",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Fermentação Lática e Dívida de Oxigênio no Músculo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante uma corrida de velocidade máxima de 100 metros rasos, o esforço muscular vigoroso exige regeneração imediata de ATP em ritmo muito superior à capacidade do sistema cardiovascular de fornecer oxigênio aos miócitos esqueléticos. Nessas condições de anaerobiose temporária, as células musculares recorrem à fermentação lática.",
      source: "Fisiologia do Exercício e Bioquímica Metabólica"
    },
    prompt: "A principal função biológica da conversão de piruvato em lactato durante a fermentação lática anaeróbica é:",
    options: [
      { id: "a", text: "regenerar as moléculas de NAD⁺ oxidadas a partir do NADH, permitindo que a glicólise continue ocorrendo e produzindo 2 ATPs por glicose.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "produzir 36 moléculas adicionais de ATP diretamente no citoplasma sem consumo de glicose.", isCorrect: false, distractorRationale: "A fermentação gera um rendimento líquido de apenas 2 ATPs por glicose (da própria glicólise)." },
      { id: "c", text: "alcalinizar o pH sarcoplasmático para acelerar a contração da miosina.", isCorrect: false, distractorRationale: "O ácido lático dissocia-se em lactato e H+, ACIDIFICANDO o meio celular e contribuindo para a fadiga." },
      { id: "d", text: "sintetizar glicogênio novo a partir de dióxido de carbono dissolvido no sangue.", isCorrect: false, distractorRationale: "Células animais heterótrofas não fixam CO2 para sintetizar carboidratos." },
      { id: "e", text: "converter o excesso de glicose em álcool etílico para proteger as fibras nervosas.", isCorrect: false, distractorRationale: "Células musculares humanas não realizam fermentação alcoólica (esta é típica de leveduras e vegetais)." }
    ],
    detailedExplanation: {
      summary: "Para a glicólise continuar funcionando, é obrigatório haver NAD+ livre para aceitar elétrons. Na falta de oxigênio, a redução do piruvato em lactato oxida o NADH de volta a NAD+, garantindo a continuidade da glicólise anaeróbica.",
      stepByStep: [
        "1. Glicólise: 1 Glicose -> 2 Piruvatos + 2 ATP (líquidos) + 2 NADH.",
        "2. O gargalo: se não houver oxigênio nas mitocôndrias, o NADH acumula-se e o estoque de NAD+ citoplasmático se esgota.",
        "3. Solução anaeróbica: a enzima lactato desidrogenase transfere elétrons do NADH para o piruvato: Piruvato + NADH -> Lactato + NAD+.",
        "4. Resultado: o NAD+ livre volta para o início da glicólise, permitindo que o músculo continue produzindo 2 ATP por ciclo emergencialmente."
      ],
      coreConcept: "Regeneração de NAD+ na Fermentação Lática",
      trapWarning: "Cuidado: A etapa da fermentação em si (piruvato -> lactato) NÃO produz nenhum ATP novo! Ela serve estritamente para REGENERAR o NAD+ para que a glicólise não pare."
    },
    commonTraps: [
      "Achar que a etapa de fermentação produz dezenas de ATPs",
      "Esquecer que o objetivo chave é a regeneração do cofator NAD+"
    ],
    tags: ["fermentacao-latica", "glicolise", "nad", "metabolismo-muscular", "anaerobiose"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-013",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Fotossíntese: Origem do Oxigênio e Ciclo de Calvin",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um experimento clássico de biologia vegetal conduzido por Samuel Ruben e Martin Kamen, duas culturas de algas unicelulares foram iluminadas sob diferentes condições isotópicas:\n• Cultura 1: água com oxigênio pesado marcada isotopicamente (H₂¹⁸O) e gás carbônico comum (C¹⁶O₂);\n• Cultura 2: água comum (H₂¹⁶O) e gás carbônico com oxigênio pesado (C¹⁸O₂).\nApós a iluminação, os cientistas analisaram a composição do oxigênio gasoso (O₂) liberado pelas duas culturas.",
      source: "Experimento Histórico de Ruben e Kamen (1941) e Fotossíntese"
    },
    prompt: "Os resultados desse experimento comprovaram inequivocamente que:",
    options: [
      { id: "a", text: "o gás oxigênio (O2) liberado na fotossíntese provém exclusivamente da quebra da água (fotólise da água na fase fotoquímica) e não do gás carbônico (CO2).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "todo o oxigênio liberado na atmosfera tem origem na quebra enzimática do dióxido de carbono no Ciclo de Calvin.", isCorrect: false, distractorRationale: "O experimento provou exatamente o oposto: na Cultura 2 o O2 liberado era normal (¹⁶O), provando que o O2 não veio do CO2." },
      { id: "c", text: "a fase escura da fotossíntese produz oxigênio líquido armazenado nos vacúolos celulares.", isCorrect: false, distractorRationale: "O Ciclo de Calvin não produz O2; consome ATP e NADPH para sintetizar glicose." },
      { id: "d", text: "as moléculas de água participam da fotossíntese apenas como catalisadores inorgânicos inalterados.", isCorrect: false, distractorRationale: "A água é consumida como doadora primária de elétrons e prótons H+." },
      { id: "e", text: "as algas realizam fotossíntese exclusivamente na ausência total de pigmentos clorofilianos.", isCorrect: false, distractorRationale: "Algas verdes contêm clorofila como pigmento fotorreceptor indispensável." }
    ],
    detailedExplanation: {
      summary: "Na Cultura 1 (com H₂¹⁸O), o oxigênio liberado era pesado (¹⁸O₂). Na Cultura 2 (com C¹⁸O₂), o oxigênio liberado era comum (¹⁶O₂). Isso demonstrou definitivamente que todo o O2 da fotossíntese origina-se da fotólise da água (Reação de Hill) nos tilacoides.",
      stepByStep: [
        "1. Fase Fotoquímica (Clara): Ocorre nos tilacoides dos cloroplastos.",
        "2. Fotólise da água: 2 H2O + luz -> 4 H+ + 4 e- + O2.",
        "3. O oxigênio é subproduto liberado para a atmosfera.",
        "4. Fase Química (Enzimática / Ciclo de Calvin): Ocorre no estroma; fixa o CO2 para produzir carboidratos (C6H12O6), utilizando os H+ e elétrons carreados pelo NADPH e a energia do ATP gerados na fase clara."
      ],
      coreConcept: "Fotólise da Água e Origem do O2 Atmosférico",
      trapWarning: "No ENEM, essa pegadinha cai com frequência: 'O oxigênio que respiramos vem do CO2?' Resposta: NÃO! Vem da ÁGUA (H2O) quebrada pela luz."
    },
    commonTraps: [
      "Achar que o O2 liberado na fotossíntese provém do CO2",
      "Confundir o local da fase clara (tilacoides) com o da fase escura (estroma)"
    ],
    tags: ["fotossintese", "fotolise-da-agua", "experimento-isotopico", "cloroplasto"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-014",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Citologia",
    subtopic: "Teoria da Endossimbiose Seriada (Margulis)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Teoria Endossimbiótica, formulada e consolidada pela bióloga Lynn Margulis na década de 1960, postula que organelas bioenergéticas das células eucarióticas atuais (mitocôndrias e cloroplastos) evoluíram a partir de ancestrais procariontes autônomos que foram fagocitados por uma célula hospedeira ancestral primitiva, estabelecendo uma simbiose mutualística permanente.",
      source: "Evolução Celular e Endossimbiose - Lynn Margulis"
    },
    prompt: "Dentre as evidências citológicas e moleculares que sustentam a origem endossimbiótica de mitocôndrias e cloroplastos, destaca-se:",
    options: [
      { id: "a", text: "a presença de DNA próprio circular não associado a histonas, ribossomos do tipo 70S similares aos bacterianos, capacidade de autoduplicação e dupla membrana lipídica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a presença de membrana nuclear carioteca que envolve o DNA mitocondrial isolando-o do estroma.", isCorrect: false, distractorRationale: "Mitocôndrias e cloroplastos não possuem núcleo ou carioteca interna." },
      { id: "c", text: "a capacidade de sobreviverem e se reproduzirem indefinitivamente fora de qualquer célula hospedeira em água destilada pura.", isCorrect: false, distractorRationale: "Ao longo de bilhões de anos, muitos genes foram transferidos para o genoma nuclear do hospedeiro, tornando-as dependentes." },
      { id: "d", text: "a ausência completa de proteínas em suas membranas e de enzimas na matriz mitocondrial.", isCorrect: false, distractorRationale: "Mitocôndrias possuem altíssima densidade de proteínas transportadoras e enzimas respiratórias." },
      { id: "e", text: "a origem filogenética comprovada a partir de fungos pluricelulares basidiomicetos.", isCorrect: false, distractorRationale: "Suas origens são bacterianas (alfa-proteobactérias para mitocôndrias e cianobactérias para cloroplastos)." }
    ],
    detailedExplanation: {
      summary: "Mitocôndrias e cloroplastos comportam-se como 'bactérias domesticadas': têm DNA circular próprio, ribossomos 70S menores (sensíveis a antibióticos), dividem-se por fissão binária e a membrana interna tem lipídios bacterianos (cardiolipina), enquanto a externa veio do vacúolo fagocítico da célula hospedeira.",
      stepByStep: [
        "1. DNA próprio: molécula circular, nua (sem histonas típicas de eucariontes).",
        "2. Ribossomos 70S: semelhantes aos de bactérias (eucariontes têm ribossomos 80S no citosol).",
        "3. Dupla membrana: a membrana interna corresponde à membrana bacteriana original; a membrana externa corresponde à membrana da vesícula da célula hospedeira que a englobou.",
        "4. Autoduplicação: dividem-se por divisão binária independentemente da mitose nuclear."
      ],
      coreConcept: "Teoria da Endossimbiose Seriada e Provas Moleculares",
      trapWarning: "No ENEM: Mitocôndrias descendem de bactérias aeróbicas heterótrofas; cloroplastos descendem de cianobactérias fotossintetizantes."
    },
    commonTraps: [
      "Achar que o complexo de Golgi ou o retículo endoplasmático surgiram por endossimbiose (eles surgiram por invaginações da membrana plasmática)",
      "Esquecer que os ribossomos mitocondriais são do tipo procarionte 70S"
    ],
    tags: ["endossimbiose", "mitocondria", "cloroplasto", "evolucao-celular", "lynn-margulis"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-015",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Complexo Golgiense e Secreção Celular",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No pâncreas exócrino, as células acinares produzem e secretam grandes quantidades de enzimas digestivas (como tripsinogênio, amilase e lípase) destinadas ao duodeno. Um rastreamento radioativo com aminoácidos marcados revelou o percurso temporal dessas proteínas: primeiro no retículo endoplasmático rugoso (RER), minutos depois nas cisternas do complexo golgiense e, finalmente, em vesículas de secreção que realizam exocitose na membrana plasmática.",
      source: "Experimento de George Palade e Tráfego Vesicular"
    },
    prompt: "Durante a passagem das enzimas digestivas pelo complexo de Golgi, essa organela desempenha a função de:",
    options: [
      { id: "a", text: "modificar quimicamente (glicosilação e fosforilação), empacotar, selecionar e direcionar as proteínas para suas vesículas de secreção exocítica específicas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "traduzir os códons do RNA mensageiro diretamente em cadeias de polipeptídeos lineares.", isCorrect: false, distractorRationale: "A tradução do RNAm ocorre nos ribossomos do retículo endoplasmático rugoso ou citosol." },
      { id: "c", text: "produzir gás carbônico e consumir água para sintetizar ATP na fermentação alcoólica.", isCorrect: false, distractorRationale: "O complexo de Golgi não gera ATP bioenergético." },
      { id: "d", text: "duplicar o DNA cromossômico antes do início da metáfase mitótica.", isCorrect: false, distractorRationale: "A duplicação do genoma ocorre no núcleo celular durante a fase S da interfase." },
      { id: "e", text: "degradar todos os lipídios celulares por meio de reações fotoquímicas de oxirredução.", isCorrect: false, distractorRationale: "O Golgi sintetiza polissacarídeos e processa proteínas, não degradando indiscriminadamente lipídios celulares." }
    ],
    detailedExplanation: {
      summary: "O Complexo de Golgi funciona como a 'central de triagem e correios' da célula: recebe proteínas do RER pela face cis, processa modificações pós-traducionais (glicosilação), empacota em vesículas na face trans e despacha para secreção (exocitose) ou formação de lisossomos.",
      stepByStep: [
        "1. Rota de secreção celular: Núcleo (transcrição RNAm) -> RER (tradução nos ribossomos e dobramento) -> Vesículas de transporte -> Complexo de Golgi (face cis).",
        "2. Processamento no Golgi: glicosilação final, adição de sulfatos, clivagem proteolítica.",
        "3. Roteamento: separação das proteínas que vão para os lisossomos daquelas destinadas à secreção externa (acinar pancreática).",
        "4. Outras funções vitais do Golgi: formação do acrossomo dos espermatozoides e formação da lamela média em células vegetais (fragmoplasto)."
      ],
      coreConcept: "Funções do Complexo Golgiense no Tráfego Celular",
      trapWarning: "No ENEM: Duas estruturas célebres são formadas pelo Complexo de Golgi: o ACROSSOMO (vesícula cheia de enzimas na ponta do espermatozoide) e os LISOSSOMOS primários."
    },
    commonTraps: [
      "Achar que o Golgi sintetiza as proteínas (ele apenas modifica e empacota; quem sintetiza é o ribossomo no RER)",
      "Esquecer da formação do acrossomo do espermatozoide"
    ],
    tags: ["complexo-de-golgi", "secrecao-celular", "trafego-vesicular", "acrossomo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-016",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Lisossomos: Autofagia, Heterofagia e Apoptose",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a metamorfose dos anfíbios anuros, o girino perde gradualmente sua cauda natatória para transformar-se em sapo adulto adaptado à vida terrestre. De maneira análoga, durante o desenvolvimento embrionário humano, as mãos e pés dos fetos apresentam inicialmente membranas interdigitais completas (como patas de pato), as quais desaparecem antes do nascimento, delineando dedos perfeitamente individualizados.",
      source: "Embriologia Humana e Biologia do Desenvolvimento"
    },
    prompt: "O desaparecimento das membranas interdigitais no feto humano e a reabsorção da cauda do girino são mediados celularmente pelo processo de:",
    options: [
      { id: "a", text: "apoptose (morte celular programada), coordenado pela ativação de caspases e digestão autofágica/lisossômica controlada, sem desencadear reação inflamatória no tecido circundante.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "necrose traumática por queimadura química provocada pelo acúmulo de ácido úrico no líquido amniótico.", isCorrect: false, distractorRationale: "Necrose é morte patológica descontrolada associada a trauma, rompimento celular e inflamação severa." },
      { id: "c", text: "mitose descontrolada que converte as células da membrana em células ósseas calcificadas.", isCorrect: false, distractorRationale: "As células não se convertem em ossos; elas morrem e são fagocitadas por macrófagos." },
      { id: "d", text: "duplicação cromossômica sem citocinese em todas as células periféricas dos membros.", isCorrect: false, distractorRationale: "Isso geraria poliploidia, o que não ocorre na morfogênese digital normal." },
      { id: "e", text: "desnaturação térmica irreversível de todo o citoesqueleto por febre embrionária materna.", isCorrect: false, distractorRationale: "O processo é fisiológico, genético e programado em temperatura corporal normal." }
    ],
    detailedExplanation: {
      summary: "A apoptose é o 'suicídio celular altruísta programado': a célula se desmantela de forma limpa, seus fragmentos (corpos apoptóticos) são fagocitados sem extravasar enzimas, evitando inflamação. É fundamental na modelagem de tecidos embrionários e na eliminação de células velhas ou danificadas.",
      stepByStep: [
        "1. Diferença entre Apoptose e Necrose: Necrose = morte por lesão/acidente (célula incha, estoura, gera pus e inflamação). Apoptose = morte limpa e programada geneticamente.",
        "2. Morfogênese: A eliminação das membranas entre os dedos e a cauda do girino são exemplos clássicos de apoptose escultural biológica.",
        "3. Papel dos Lisossomos: Na autofagia e autólose fisiológica, hidrolases ácidas lisossômicas digerem componentes internos para reciclagem de nutrientes.",
        "4. Importância no câncer: Células cancerosas perdem a capacidade de entrar em apoptose, multiplicando-se infinitamente."
      ],
      coreConcept: "Apoptose (Morte Celular Programada) vs. Necrose",
      trapWarning: "No ENEM: Se o processo é natural, ordenado, biológico e não gera inflamação (regressão da cauda do girino, dedos das mãos, renovação do endométrio na menstruação) -> É SEMPRE APOPTOSE."
    },
    commonTraps: [
      "Confundir apoptose (morte programada limpa) com necrose (morte patológica com lise e inflamação)",
      "Achar que morte celular no embrião é sempre defeito ou anomalia congênita"
    ],
    tags: ["apoptose", "lisossomos", "desenvolvimento-embrionario", "morte-celular-programada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-017",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Bomba de Sódio e Potássio e Transporte Ativo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A membrana plasmática dos neurônios mantém uma distribuição assimétrica de íons entre os meios intracelular e extracelular. A concentração de íons sódio (Na⁺) é significativamente maior no fluido extracelular, enquanto a concentração de íons potássio (K⁺) é muito mais elevada no citosol. Essa disparidade eletroquímica é sustentada continuamente pela proteína transmembrana Bomba de Na⁺/K⁺ ATPase.",
      source: "Neurofisiologia Básica e Biofísica Celular"
    },
    prompt: "O mecanismo molecular de bombeamento de íons realizado pela Bomba de Na⁺/K⁺ ATPase classifica-se como:",
    options: [
      { id: "a", text: "transporte ativo primário, com quebra direta de ATP para transportar 3 íons Na⁺ para o meio extracelular e 2 íons K⁺ para o meio intracelular, ambos contra seus respectivos gradientes de concentração.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "difusão facilitada passiva, a favor do gradiente de concentração e sem gasto de energia metabólica celular.", isCorrect: false, distractorRationale: "A bomba atua CONTRA os gradientes de concentração, o que exige gasto obrigatório de ATP." },
      { id: "c", text: "osmose iônica seletiva, na qual cátions movem-se arrastados exclusivamente pelo fluxo de moléculas de água.", isCorrect: false, distractorRationale: "Osmose refere-se exclusivamente ao transporte de solvente (água) através de membrana semipermeável." },
      { id: "d", text: "endocitose por vesículas de clatrina que englobam cristais de cloreto de sódio dissolvidos.", isCorrect: false, distractorRationale: "A bomba é uma proteína carreadora de membrana, não uma vesícula endocítica." },
      { id: "e", text: "transporte ativo secundário que bombeia 2 íons Na⁺ para fora e 3 íons K⁺ para dentro sem alterar o potencial de membrana.", isCorrect: false, distractorRationale: "Inverteu a estequiometria (são 3 Na+ para fora e 2 K+ para dentro) e a bomba é primária eletrogênica." }
    ],
    detailedExplanation: {
      summary: "A bomba consome cerca de 30% do ATP de todo o corpo humano em repouso. A cada ciclo catalítico: hidrolisa 1 ATP, bombeia 3 Na+ para FORA da célula e 2 K+ para DENTRO da célula. Como sai mais carga positiva do que entra (3 contra 2), gera uma carga líquida negativa no interior celular (potencial de repouso ~ -70 mV).",
      stepByStep: [
        "1. Estequiometria de ouro: 3 Na+ saem, 2 K+ entram, 1 ATP é quebrado.",
        "2. Contra o gradiente: Na+ já é abundante fora e é expulso mais ainda; K+ já é abundante dentro e é puxado mais ainda.",
        "3. Função vital: Manter o potencial de repouso da membrana para permitir a transmissão do impulso nervoso e controlar a osmolaridade celular para a célula não inchar e estourar.",
        "4. Mnemônico: 'Sai três sódios, entra dois potássios' (Na+ SAI, K+ ENTRA)."
      ],
      coreConcept: "Bomba de Na⁺/K⁺ ATPase, Potencial de Membrana e Transporte Ativo",
      trapWarning: "Macete do ENEM: O potássio (K+) é o íon do interior da célula (K-K-K, você ri para DENTRO); o sódio (Na+) fica fora."
    },
    commonTraps: [
      "Inverter os números (achar que são 2 Na+ e 3 K+)",
      "Achar que é transporte passivo a favor do gradiente"
    ],
    tags: ["bomba-sodio-potassio", "transporte-ativo", "membrana-plasmatica", "potencial-de-repouso", "atp"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-018",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Osmose em Células Vegetais vs Animais",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma aula prática de laboratório, estudantes mergulharam hemácias humanas (glóbulos vermelhos) e células da epiderme de cebola (Allio cepa) em recipientes contendo água destilada pura (meio fortemente hipotônico em relação ao citoplasma celular). Horas depois, observaram o estado microscópico de ambas as amostras.",
      source: "Práticas de Fisiologia e Osmose Celular"
    },
    prompt: "Ao microscópio, os estudantes constataram que as hemácias humanas sofreram lise celular (hemólise/estouraram), enquanto as células vegetais de cebola mantiveram-se íntegras e túrgidas. A integridade física das células vegetais foi garantida pela presença da:",
    options: [
      { id: "a", text: "parede celular celulósica rígida externa, que exerce pressão mecânica contrária de turgor, impedindo a entrada excessiva de água e o rompimento da membrana plasmática.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "membrana plasmática impermeável que impede a passagem de qualquer molécula de água para o vacúolo.", isCorrect: false, distractorRationale: "A membrana é perfeitamente permeável à água através de aquaporinas; a água entra até atingir o equilíbrio de pressão de turgor." },
      { id: "c", text: "capacidade exclusiva dos cloroplastos vegetais de evaporar água sob a luz do microscópio.", isCorrect: false, distractorRationale: "Células da epiderme de cebola nem sequer possuem cloroplastos (não fazem fotossíntese subterrânea)." },
      { id: "d", text: "ausência completa de solutos no interior dos vacúolos de suco celular.", isCorrect: false, distractorRationale: "Vacúolos possuem soluções ricas em sais e açúcares, conferindo pressão osmótica interna." },
      { id: "e", text: "presença de queratina animal espessa na face externa da membrana celular vegetal.", isCorrect: false, distractorRationale: "Queratina é proteína animal; vegetais possuem celulose, hemicelulose e pectina." }
    ],
    detailedExplanation: {
      summary: "Em meio hipotônico, a água entra por osmose na célula. A hemácia (sem parede celular) incha até a membrana estourar (lise osmótica / hemólise). A célula vegetal possui parede celular celulósica rígida e elástica: ela incha e fica túrgida, mas a pressão da parede (Pt) empata com a sucção osmótica (Sc), impedindo que a célula exploda.",
      stepByStep: [
        "1. Osmose: movimento de solvente do meio hipotônico (menos concentrado) para o hipertônico (mais concentrado).",
        "2. Hemácia animal: não tem parede celular -> inchaço contínuo -> plasmoptise (hemólise).",
        "3. Célula vegetal: possui parede celulósica -> a água entra no vacúolo -> célula fica túrgida.",
        "4. Equilíbrio osmótico vegetal: Sucção de entrada (S) = Pressão Osmótica Interna (PO) - Pressão de Turgor da Parede (PT). Quando PO = PT, a entrada de água cessa sem que a célula rompa."
      ],
      coreConcept: "Comportamento Osmótico Celular e Papel da Parede Celular Celulósica",
      trapWarning: "No ENEM: Meio hipotônico -> Célula animal estoura (lise); Célula vegetal fica TÚRGIDA (não estoura!). Meio hipertônico -> Célula animal murcha (crenação); Célula vegetal fica PLASMOLISADA."
    },
    commonTraps: [
      "Achar que célula vegetal nunca ganha água em meio hipotônico",
      "Esquecer que a epiderme de cebola não é verde e não contém cloroplastos"
    ],
    tags: ["osmose", "parede-celular", "turgor", "hemolise", "plasmolise"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-019",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Citologia",
    subtopic: "Pontos de Checagem do Ciclo Celular e o Gene p53",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O gene TP53 codifica a proteína p53, frequentemente apelidada de 'o guardião do genoma'. No ponto de checagem da transição G1/S do ciclo celular, a p53 detecta eventuais danos ou quebras na fita dupla do DNA provocadas por radiação ultravioleta ou agentes químicos mutagênicos. Ao identificar o dano, a p53 interrompe a progressão do ciclo celular para permitir o reparo do DNA; se o dano for irreparável, induz a célula à apoptose.",
      source: "Biologia Molecular do Câncer - Weinberg"
    },
    prompt: "Em mais de 50% de todos os tipos de tumores malignos humanos, constatam-se mutações com perda de função no gene TP53. A perda da proteína p53 funcional propicia o desenvolvimento do câncer porque:",
    options: [
      { id: "a", text: "permite que células portadoras de mutações genéticas deletérias continuem se dividindo descontroladamente sem reparar o DNA nem entrar em apoptose.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "impede a formação do fuso acromático durante a anáfase mitótica, paralisando todas as células do corpo.", isCorrect: false, distractorRationale: "O câncer caracteriza-se por proliferação desordenada e ativa, e não por paralisação celular." },
      { id: "c", text: "obriga a mitocôndria a realizar fotossíntese no lugar da respiração celular.", isCorrect: false, distractorRationale: "Células tumorais humanas não realizam fotossíntese." },
      { id: "d", text: "neutraliza todos os vírus da imunodeficiência adquirida presentes na circulação linfática.", isCorrect: false, distractorRationale: "A proteína p53 é um supressor tumoral de controle do ciclo celular, não um anticorpo antiviral." },
      { id: "e", text: "elimina a capacidade de síntese de lipídios pelo retículo endoplasmático liso.", isCorrect: false, distractorRationale: "A biossíntese lipídica não é o alvo regulatório da p53 no ponto de checagem G1/S." }
    ],
    detailedExplanation: {
      summary: "O TP53 é um gene supressor de tumor. Sem a p53 funcional para 'frear' o ciclo celular em G1 quando o DNA está quebrado, a célula entra na fase S, replica o DNA defeituoso e passa a mutação para as células-filhas, acumulando mutações que levam ao câncer.",
      stepByStep: [
        "1. Ciclo celular: Interfase (G1 -> S [replicação do DNA] -> G2) e Fase M (Mitose e Citocinese).",
        "2. Pontos de checagem (checkpoints): Portões de controle de qualidade geridos por ciclinas, CDKs e proteínas como a p53.",
        "3. Função da p53 normal: 1) Pausa o ciclo em G1; 2) Ativa enzimas de reparo do DNA; 3) Se o estrago for muito grande, ativa a morte programada (apoptose).",
        "4. Célula cancerosa: Mutou o gene p53 -> perde o freio -> acumula aberrações cromossômicas -> proliferação clonal descontrolada."
      ],
      coreConcept: "Controle do Ciclo Celular, Genes Supressores de Tumor e Carcinogênese",
      trapWarning: "No ENEM: Câncer é uma doença de DESREGULAÇÃO DO CICLO CELULAR associada a falhas nos mecanismos de controle e apoptose."
    },
    commonTraps: [
      "Achar que oncogenes e genes supressores de tumor têm a mesma função (oncogenes estimulam divisão; supressores de tumor freiam divisão)",
      "Confundir a fase de replicação do DNA (fase S) com a fase de mitose"
    ],
    tags: ["ciclo-celular", "p53", "cancer", "supressores-tumor", "pontos-de-checagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-020",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Citologia",
    subtopic: "Meiose e Mecanismos Geradores de Variabilidade Genética",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A reprodução sexuada é um dos principais motores evolutivos da vida eucariótica, assegurando que irmãos gerados pelos mesmos pais biológicos (com exceção de gêmeos univitelinos) apresentem patrimônios genéticos únicos e distintos. Essa extraordinária diversidade de combinações alélicas é gerada fundamentalmente durante a divisão meiótica de formação dos gametas.",
      source: "Genética e Biologia Celular da Reprodução"
    },
    prompt: "Os dois eventos citogenéticos específicos ocorridos durante a Meiose I responsáveis pela geração dessa ampla variabilidade genética nos gametas são:",
    options: [
      { id: "a", text: "o crossing-over (permutação gênica entre cromátides não-irmãs de cromossomos homólogos na Prófase I) e a segregação independente dos pares de cromossomos homólogos na Anáfase I.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a duplicação semiconservativa dos centrômeros na Metáfase II e a cariocinese na Telófase II.", isCorrect: false, distractorRationale: "Esses eventos distribuem o material previamente recombinado, mas não geram novas combinações alélicas." },
      { id: "c", text: "a fusão permanente de dois núcleos zigóticos na fase G0 e o encurtamento forçado dos telômeros.", isCorrect: false, distractorRationale: "Fusão de núcleos é fecundação e encurtamento telomérico relaciona-se ao envelhecimento celular, não à meiose." },
      { id: "d", text: "a conversão compulsória de todas as células somáticas diploides em células reprodutivas haploides por mitose simples.", isCorrect: false, distractorRationale: "Mitose não reduz a ploidia da célula; apenas a meiose é divisão reducional (2n -> n)." },
      { id: "e", text: "a substituição de todas as trincas de bases nitrogenadas de uracila por timina durante o crossing-over.", isCorrect: false, distractorRationale: "O DNA cromossômico contém timina normalmente e o crossing-over recombina trechos inteiros de DNA sem alterar quimicamente as bases." }
    ],
    detailedExplanation: {
      summary: "A variabilidade genética da meiose provém de dois momentos-chave da Meiose I: 1) Crossing-over (Prófase I - Paquíteno): troca física de segmentos de DNA entre cromátides não-irmãs do par de homólogos; 2) Segregação Independente (Anáfase I - 2ª Lei de Mendel): os cromossomos maternos e paternos se separam aleatoriamente para os polos da célula.",
      stepByStep: [
        "1. Meiose I (Reducional): Separação dos cromossomos homólogos.",
        "2. Evento 1: Crossing-over na Prófase I (recombina alelos no mesmo cromossomo, quebrando o linkage completo).",
        "3. Evento 2: Segregação independente na Anáfase I (em humanos, com 23 pares de cromossomos, a segregação aleatória gera 2²³ = mais de 8,3 milhões de tipos de gametas diferentes SEM contar o crossing-over!).",
        "4. Fecundação ao acaso: 8,3 milhões de óvulos possíveis x 8,3 milhões de espermatozoides possíveis = mais de 70 trilhões de combinações genéticas únicas por casal!"
      ],
      coreConcept: "Mecanismos Meióticos de Variabilidade Genética: Crossing-Over e Segregação Independente",
      trapWarning: "No ENEM: Crossing-over ocorre na PRÓFASE I (Meiose I). A separação de homólogos ocorre na ANÁFASE I. A separação de cromátides irmãs ocorre na ANÁFASE II."
    },
    commonTraps: [
      "Confundir separação de homólogos (Anáfase I) com separação de cromátides-irmãs (Anáfase II)",
      "Achar que a mitose gera variabilidade genética (mitose gera clones genéticos idênticos)"
    ],
    tags: ["meiose", "crossing-over", "permutacao", "segregacao-independente", "variabilidade-genetica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-021",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Bomba de Sódio-Potássio e Transporte Ativo Primário",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A manutenção das diferenças de concentração iônica entre o citoplasma e o meio extracelular é essencial para a transmissão de impulsos nervosos e a osmorregulação. A bomba de sódio e potássio (Na+/K+ ATPase) consome cerca de um terço de toda a energia metabólica de uma célula animal em repouso para mover íons contra seus respectivos gradientes de concentração química.",
      source: "Tratado de Fisiologia Médica e Biologia Celular"
    },
    prompt: "O funcionamento estequiométrico e eletrogênico dessa proteína transmembrana caracteriza-se pelo bombeamento ativo de:",
    options: [
      { id: "a", text: "3 íons Na+ para o meio extracelular e 2 íons K+ para o interior celular, com consumo de 1 molécula de ATP.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "2 íons Na+ para o interior celular e 3 íons K+ para o meio extracelular, por difusão facilitada passiva.", isCorrect: false, distractorRationale: "A bomba transporta 3 sódios para fora e 2 potássios para dentro, contra o gradiente e com gasto de ATP, e não a favor de gradiente." },
      { id: "c", text: "quantidades equimolares (1:1) de Na+ e K+ para manter a neutralidade elétrica imediata da membrana.", isCorrect: false, distractorRationale: "A proporção é assimétrica (3 Na+ para fora e 2 K+ para dentro), tornando a bomba eletrogênica." },
      { id: "d", text: "íons Ca2+ e Mg2+ em substituição aos monovalentes durante períodos de estresse osmótico agudo.", isCorrect: false, distractorRationale: "A bomba Na+/K+ ATPase é estritamente específica para íons sódio e potássio; cálcio possui bombas próprias (SERCA)." },
      { id: "e", text: "3 moléculas de glicose acopladas à entrada passiva de 2 íons potássio sem fosforilação proteica.", isCorrect: false, distractorRationale: "Confunde a bomba primária Na+/K+ ATPase com o cotransportador secundário SGLT de glicose-sódio." }
    ],
    detailedExplanation: {
      summary: "A bomba Na+/K+ ATPase realiza transporte ativo primário: hidrolisa 1 ATP para expulsar 3 íons Na+ da célula e internalizar 2 íons K+, gerando um interior celular eletronegativo e mantendo o gradiente químico.",
      stepByStep: [
        "1. No citoplasma, a enzima liga 3 íons Na+ com alta afinidade.",
        "2. Ocorre a fosforilação da enzima pelo ATP (quebra de ATP em ADP + Pi).",
        "3. A mudança conformacional expõe os íons Na+ ao exterior celular, onde são liberados.",
        "4. No meio extracelular, a enzima liga 2 íons K+, promovendo a desfosforilação.",
        "5. A proteína retorna à conformação original e libera os 2 íons K+ no citosol celular."
      ],
      coreConcept: "Transporte Ativo Primário: Bomba de Na+/K+ ATPase",
      trapWarning: "Lembre-se sempre da regra mnemônica 'Sal (Na+) fora, Potássio (K+) dentro' e da proporção: 3 Na+ saem para cada 2 K+ que entram."
    },
    commonTraps: [
      "Inverter o sentido dos íons (achar que o sódio entra ativamente)",
      "Achar que o transporte de sódio e potássio é passivo na bomba"
    ],
    tags: ["citologia", "membrana-plasmatica", "transporte-ativo", "bomba-sodio-potassio", "fisiologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-022",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Fosforilação Oxidativa e Teoria Quimiosmótica",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A teoria quimiosmótica proposta por Peter Mitchell estabeleceu que a síntese de adenosina trifosfato (ATP) nas mitocôndrias ocorre acoplada a um gradiente eletroquímico de prótons através da membrana mitocondrial interna. Certas substâncias químicas, conhecidas como desacopladores mitocondriais (como o 2,4-dinitrofenol, DNP), tornam essa membrana permeável aos prótons, permitindo o retorno dos íons H+ para a matriz sem passar pelo canal da ATP sintase.",
      source: "Bioquímica e Bioenergética Celular"
    },
    prompt: "Em uma célula exposta a um desacoplador mitocondrial desse tipo, observa-se como consequência fisiológica imediata:",
    options: [
      { id: "a", text: "manutenção do consumo de oxigênio com forte queda na produção de ATP e dissipação da energia livre na forma de calor térmico.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "bloqueio total do ciclo de Krebs e interrupção completa da glicólise por ausência de elétrons.", isCorrect: false, distractorRationale: "O desacoplamento não bloqueia o fluxo de elétrons; pelo contrário, o consumo de oxigênio e a oxidação de substratos aumentam." },
      { id: "c", text: "aumento drástico na síntese de ATP devido à aceleração da rota quimiosmótica pela ATP sintase.", isCorrect: false, distractorRationale: "A síntese de ATP diminui ou cessa porque o gradiente de prótons é dissipado pelos desacopladores." },
      { id: "d", text: "acúmulo de NADH e FADH2 na matriz mitocondrial por incapacidade de transferir elétrons para os complexos proteicos.", isCorrect: false, distractorRationale: "Os cofatores continuam sendo oxidados rapidamente; os desacopladores afetam o gradiente de H+, não o transporte de elétrons." },
      { id: "e", text: "conversão imediata de toda a respiração celular em fotossíntese reversa no citoplasma.", isCorrect: false, distractorRationale: "Células animais não realizam fotossíntese sob nenhuma circunstância bioquímica." }
    ],
    detailedExplanation: {
      summary: "Os desacopladores mitocondriais dissipam o gradiente de prótons sem inibir a cadeia respiratória. A oxidação continua consumindo oxigênio aceleradamente, mas a energia que geraria ATP é dissipada integralmente como calor.",
      stepByStep: [
        "1. A cadeia respiratória bombeia prótons da matriz para o espaço intermembrana.",
        "2. Em condições normais, os prótons só retornam à matriz girando o rotor da ATP sintase (fosforilação oxidativa).",
        "3. O desacoplador age como um carreador lipofílico de H+, permitindo que os prótons atravessem a bicamada livremente.",
        "4. Sem gradiente protônico acumulado, a ATP sintase para de produzir ATP.",
        "5. O fluxo de elétrons continua ou se acelera tentando restabelecer o potencial, e toda a energia dos elétrons vira calor (hipertermia)."
      ],
      coreConcept: "Bioenergética: Hipótese Quimiosmótica e Desacoplamento Mitocondrial",
      trapWarning: "Substâncias inibidoras (ex: cianeto) travam o transporte de elétrons e o consumo de O2. Desacopladores (ex: termogenina e DNP) mantêm o consumo de O2 elevado, mas anulam a síntese de ATP."
    },
    commonTraps: [
      "Confundir inibidor de transporte de elétrons (bloqueia O2) com desacoplador (consome O2 e gera calor)",
      "Achar que o desacoplador aumenta a produção de ATP"
    ],
    tags: ["mitocondria", "fosforilacao-oxidativa", "teoria-quimiosmotica", "desacopladores", "bioenergetica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-023",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Fermentação Celular e Regeneração de Coenzimas",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a prática de exercícios físicos de intensidade extrema e curta duração (como uma prova de sprint de 100 metros rasos), a demanda muscular por energia supera a capacidade de fornecimento de oxigênio pelo sistema cardiovascular. Nessas condições de anaerobiose tecidual temporária, as células musculares realizam fermentação láctica para sustentar a síntese emergencial de ATP.",
      source: "Bioquímica Fisiológica do Esporte"
    },
    prompt: "Do ponto de vista bioquímico celular, a etapa essencial da fermentação que viabiliza a continuidade da produção anaeróbia de ATP pela glicólise é a:",
    options: [
      { id: "a", text: "regeneração de NAD+ oxidado a partir da redução do piruvato em lactato pela lactato desidrogenase.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "produção líquida adicional de 36 moléculas de ATP durante a conversão enzimática de lactato.", isCorrect: false, distractorRationale: "A etapa fermentativa não produz nenhum ATP adicional; o saldo líquido continua sendo apenas 2 ATP por glicose na glicólise." },
      { id: "c", text: "absorção direta de CO2 liberado pelas mitocôndrias para formar fosfocreatina na matriz citoplasmática.", isCorrect: false, distractorRationale: "A fermentação láctica não consome CO2 e a fosfocreatina utiliza ATP muscular prévio." },
      { id: "d", text: "oxidação completa do ácido pirúvico em água e gás carbônico no lúmen do retículo sarcoplasmático.", isCorrect: false, distractorRationale: "A oxidação completa requer oxigênio e ciclo de Krebs nas mitocôndrias, inviáveis na anaerobiose estrita." },
      { id: "e", text: "quebra de fosfolipídios de membrana para geração direta de piruvato sem uso de glicose.", isCorrect: false, distractorRationale: "A fonte de piruvato na fermentação muscular é a quebra de glicose oriunda do glicogênio tecidual." }
    ],
    detailedExplanation: {
      summary: "A principal função biológica da fermentação é oxidar o NADH gerado na glicólise de volta a NAD+, garantindo que a enzima gliceraldeído-3-fosfato desidrogenase continue ativa para manter a glicólise funcionando.",
      stepByStep: [
        "1. A glicólise converte glicose em 2 piruvatos, produzindo saldo de 2 ATP e reduzindo 2 NAD+ em 2 NADH.",
        "2. Sem oxigênio, a cadeia respiratória mitocondrial não pode oxidar esse NADH de volta a NAD+.",
        "3. Se o pool celular de NAD+ se esgotasse, a própria glicólise pararia, interrompendo qualquer fornecimento de ATP.",
        "4. A enzima lactato desidrogenase reduz o piruvato a lactato e, concomitantemente, oxida NADH de volta a NAD+.",
        "5. Com o NAD+ regenerado, a glicólise continua gerando 2 ATP por molécula de glicose degradada."
      ],
      coreConcept: "Bioquímica da Fermentação: Regeneração de NAD+ para Continuidade da Glicólise",
      trapWarning: "A reação piruvato → lactato não gera ATP algum! Ela existe unicamente para reciclar o NADH em NAD+."
    },
    commonTraps: [
      "Achar que a etapa de fermentação produz dezenas de ATP adicionais",
      "Confundir fermentação láctica (não libera CO2) com alcoólica (libera CO2 e etanol)"
    ],
    tags: ["fermentacao-lactica", "glicolise", "nad", "metabolismo-energetico", "anaerobiose"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-024",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Citologia",
    subtopic: "Autofagia Lisossômica e Homeostase Celular",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Prêmio Nobel de Fisiologia ou Medicina de 2016 foi concedido ao biólogo japonês Yoshinori Ohsumi por suas descobertas sobre os mecanismos da autofagia celular. Trata-se de um processo altamente conservado e regulado em que a célula degrada e recicla seus próprios componentes citoplasmáticos desgastados, como mitocôndrias danificadas e agregados proteicos anômalos.",
      source: "Fundação Nobel e Artigos de Biologia Celular Contemporânea"
    },
    prompt: "No mecanismo da macroautofagia, os componentes celulares senescentes a serem eliminados são inicialmente:",
    options: [
      { id: "a", text: "envolvidos por uma dupla membrana lipídica formando um autofagossomo, que posteriormente se funde ao lisossomo para digestão enzimática.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "expelidos intactos para a circulação sanguínea através de canais iônicos de descarte vesicular.", isCorrect: false, distractorRationale: "A autofagia é um processo de digestão interna intracelular, não de expulsão passiva por canais iônicos." },
      { id: "c", text: "convertidos diretamente em RNA mensageiro no interior do nucléolo celular para reuso ribossômico.", isCorrect: false, distractorRationale: "Nucléolo sintetiza rRNA e organiza ribossomos; não atua na degradação de organelas velhas." },
      { id: "d", text: "fagocitados por bactérias da microbiota intestinal que penetram na membrana citoplasmática.", isCorrect: false, distractorRationale: "A autofagia é um processo puramente eucariótico autônomo, sem intervenção de bactérias intestinais." },
      { id: "e", text: "cristalizados no estroma cloroplastidial para servir de reserva mineral permanente na célula animal.", isCorrect: false, distractorRationale: "Células animais não contêm cloroplastos e a autofagia recicla biomoléculas, não as cristaliza." }
    ],
    detailedExplanation: {
      summary: "Na macroautofagia, o material celular a ser degradado é envolvido por uma dupla membrana isoladora (fagóforo) que se fecha gerando o autofagossomo. Este se funde ao lisossomo formando o autolisossomo, onde hidrolases ácidas quebram os polímeros em monômeros reutilizáveis.",
      stepByStep: [
        "1. Estímulos como privação de nutrientes (baixo nível de aminoácidos) ativam vias sinalizadoras da autofagia.",
        "2. Uma vesícula de dupla membrana se expande e sequestra organelas velhas (ex: mitocôndrias senescentes).",
        "3. O fechamento da vesícula forma a estrutura delimitada denominada autofagossomo.",
        "4. O autofagossomo transloca-se e funde sua membrana externa com a membrana do lisossomo primário.",
        "5. As hidrolases lisossômicas ácidas degradam o conteúdo em aminoácidos, nucleotídeos e ácidos graxos que voltam ao citosol."
      ],
      coreConcept: "Autofagia Lisossômica: Autofagossomo, Fusão Lisossômica e Reciclagem Molecular",
      trapWarning: "Heterofagia é a digestão de material capturado do meio externo (fagocitose/pinocitose). Autofagia é a digestão programada de componentes da própria célula."
    },
    commonTraps: [
      "Confundir heterofagia (alimento do meio externo) com autofagia (estruturas da própria célula)",
      "Achar que a autofagia é apenas danosa (ela é fundamental para a sobrevivência e renovação celular)"
    ],
    tags: ["citologia", "lisossomos", "autofagia", "reciclagem-celular", "premio-nobel"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-CITO-025",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Citologia",
    subtopic: "Diferenciação Celular e Regulação da Expressão Gênica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um organismo multicelular adulto como o ser humano, um neurônio do córtex cerebral e uma célula beta das ilhotas pancreáticas desempenham papéis biológicos radicalmente distintos: enquanto o neurônio conduz impulsos elétricos rápidos, a célula beta sintetiza e secreta o hormônio proteico insulina. No entanto, com raras exceções fisiológicas, ambas as células contêm rigorosamente a mesma sequência nucleotídica em seu genoma nuclear.",
      source: "Biologia Molecular da Célula e Epigenética"
    },
    prompt: "Essa diversidade morfológica e funcional entre células de uma mesma constituição genética decorre da:",
    options: [
      { id: "a", text: "expressão gênica diferencial regulada por fatores de transcrição específicos e modificações epigenéticas na cromatina.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "eliminação física de genes desnecessários do núcleo celular à medida que os tecidos se especializam.", isCorrect: false, distractorRationale: "O genoma permanece intacto em quase todas as células somáticas (equivalência genômica); genes não são deletados." },
      { id: "c", text: "substituição espontânea do código genético de trincas por duplas de nucleotídeos em células secretoras.", isCorrect: false, distractorRationale: "O código genético é universal e constituído de códons de 3 nucleotídeos em todos os tecidos." },
      { id: "d", text: "duplicação aleatória de cromossomos inteiros nos neurônios para conferir resistência à condução de cargas elétricas.", isCorrect: false, distractorRationale: "Neurônios e células beta normais possuem a mesma ploidia diploide regular (2n = 46 cromossomos)." },
      { id: "e", text: "capacidade exclusiva de células pancreáticas sintetizarem ribossomos capazes de ler aminoácidos.", isCorrect: false, distractorRationale: "Todas as células utilizam a mesma maquinaria ribossômica básica para a síntese de proteínas." }
    ],
    detailedExplanation: {
      summary: "A diferenciação celular em organismos pluricelulares é regida pela expressão diferencial de genes. Embora todas as células somáticas possuam o mesmo genoma (equivalência genômica), diferentes conjuntos de genes são ativados ou silenciados por fatores de transcrição e marcas epigenéticas (metilação de DNA e modificações de histonas).",
      stepByStep: [
        "1. Conceito de Equivalência Genômica: todas as células somáticas possuem o mesmo DNA do zigoto original.",
        "2. Na célula beta pancreática, o gene da insulina está localizado em regiões de eucromatina descondensada e fatores de transcrição específicos ativam sua transcrição em mRNA.",
        "3. No neurônio, o gene da insulina está empacotado em heterocromatina silenciada e hipermetilada, impedindo sua leitura.",
        "4. Em contrapartida, genes que codificam canais iônicos voltagem-dependentes e sinapsinas estão ativados nos neurônios.",
        "5. Portanto, o fenótipo celular depende dos genes que estão ativamente transcritos, e não de diferenças na sequência do genoma."
      ],
      coreConcept: "Diferenciação Celular: Expressão Gênica Diferencial e Regulação Epigenética",
      trapWarning: "Cuidado: especialização celular não é perda de DNA! Células maduras mantêm quase todos os genes (como provou a clonagem da ovelha Dolly a partir de um núcleo somático)."
    },
    commonTraps: [
      "Acreditar que células diferenciadas perdem os genes que não utilizam",
      "Confundir diferenciação celular com mutação gênica permanente"
    ],
    tags: ["diferenciacao-celular", "expressao-genica", "epigenetica", "biologia-molecular", "genetica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

