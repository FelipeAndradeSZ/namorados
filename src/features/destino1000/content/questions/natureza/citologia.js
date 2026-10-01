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
  }
];
