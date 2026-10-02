/**
 * BANCO DE QUESTÕES: BIOQUÍMICA CELULAR, BIOENERGÉTICA E METABOLISMO NO ENEM
 * Área: Ciências da Natureza e suas Tecnologias (Biologia e Química Celular Integradas)
 * Competência: C4 / C5 | Habilidades: H14, H15, H16, H17
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de rigor biofísico, cinético e molecular
 * Regra Estrita: ZERO termos de deslocamentos turísticos. Foco em bioenergética,
 * fisiologia médica, biotecnologia agrícola e saúde metabólica.
 */

export const QUESTIONS_BIOQUIMICA_METABOLISMO = [
  {
    id: "NAT-BIOQ-001",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Bioenergética",
    subtopic: "Glicólise e Balanço Energético Citosólico",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A glicólise é a via metabólica mais primitiva e universal de degradação da glicose, ocorrendo no citosol tanto de organismos procariontes quanto eucariontes, independentemente da presença de gás oxigênio. Durante a fase de investimento energético, duas moléculas de trifosfato de adenosina (ATP) são consumidas para fosforilar a hexose. Posteriormente, na fase de compensação e clivagem, ocorrem fosforilações em nível de substrato que produzem ATP e redução de transportadores de elétrons.",
      source: "NELSON, D. L.; COX, M. M. Princípios de Bioquímica de Lehninger. 7. ed. Porto Alegre: Artmed, 2019."
    },
    prompt: "A partir da quebra anaeróbica de uma molécula de glicose (C₆H₁₂O₆) até a formação de duas moléculas de piruvato, o rendimento energético líquido obtido diretamente pela célula no citosol corresponde a",
    options: [
      {
        id: "a",
        text: "4 ATP e 2 FADH₂.",
        isCorrect: false,
        distractorRationale: "Confunde o rendimento bruto com o saldo líquido e cita o FADH₂, que só é formado na matriz mitocondrial no ciclo de Krebs."
      },
      {
        id: "b",
        text: "2 ATP e 2 NADH.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na glicólise, são consumidos 2 ATP na fase preparatória e gerados 4 ATP na fase de pagamento, resultando em saldo líquido de 4 - 2 = 2 ATP, além da redução de duas coenzimas a 2 NADH + 2 H⁺."
      },
      {
        id: "c",
        text: "32 ATP e 6 CO₂.",
        isCorrect: false,
        distractorRationale: "Cita o balanço global aproximado da respiração celular aeróbica completa, e não apenas a etapa citosólica da glicólise."
      },
      {
        id: "d",
        text: "2 ATP e 2 lactatos sem redução de cofatores.",
        isCorrect: false,
        distractorRationale: "Confunde a glicólise clássica com o processo fermentativo completo subsequente."
      },
      {
        id: "e",
        text: "1 ATP e 1 NADPH.",
        isCorrect: false,
        distractorRationale: "Confunde a via glicolítica com a via das pentoses-fosfato e calcula rendimentos incorretos."
      }
    ],
    detailedExplanation: {
      summary: "O saldo líquido da glicólise citosólica consiste em 2 moléculas de ATP e 2 moléculas de NADH por molécula de glicose oxidada a piruvato.",
      stepByStep: [
        "1. Fase de investimento da glicólise: gasto de 2 ATP (glicose → glicose-6-fosfato e frutose-6-fosfato → frutose-1,6-bisfosfato).",
        "2. Fase de pagamento: produção de 4 ATP por fosforilação em nível de substrato e redução de 2 NAD⁺ a 2 NADH.",
        "3. Balanço líquido: 4 ATP produzidos - 2 ATP consumidos = +2 ATP líquidos e +2 NADH."
      ],
      coreConcept: "A glicólise é anaeróbica e gera saldo líquido imediato de 2 ATP por fosforilação em nível de substrato.",
      trapWarning: "Cuidado para não confundir rendimento bruto (4 ATP) com rendimento líquido (2 ATP)."
    },
    tags: ["bioquimica", "glicolise", "atp", "metabolismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-002",
    area: "natureza",
    competence: 5,
    skill: 15,
    topic: "Bioenergética",
    subtopic: "Fermentação Láctica e Regeneração de NAD+",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante provas de corrida de 100 metros rasos, a demanda muscular por ATP atinge taxas extremamente elevadas em frações de segundo, superando a capacidade do sistema cardiovascular de fornecer oxigênio molecular suficiente para a cadeia respiratória das mitocôndrias. Para manter a síntese contínua de ATP no citoplasma celular, as fibras musculares esqueléticas recorrem temporariamente à fermentação láctica.",
      source: "McARDLE, W. D. et al. Fisiologia do Exercício: Nutrição, Energia e Desempenho Humano. Guanabara Koogan, 2021."
    },
    prompt: "O papel bioquímico indispensável da conversão de piruvato em lactato pela enzima lactato desidrogenase nessa condição é",
    options: [
      {
        id: "a",
        text: "produzir ATP diretamente a partir da quebra enzimática do ácido láctico.",
        isCorrect: false,
        distractorRationale: "A conversão de piruvato a lactato não gera ATP; consome o NADH gerado anteriormente."
      },
      {
        id: "b",
        text: "regenerar o cofator oxidado NAD⁺ para permitir a continuidade da glicólise.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Sem oxigênio, a cadeia respiratória para e não oxida o NADH. Para que a glicólise continue gerando 2 ATPs por ciclo, a célula precisa regenerar NAD⁺; o piruvato atua como aceptor de elétrons, sendo reduzido a lactato enquanto o NADH é reoxidado a NAD⁺."
      },
      {
        id: "c",
        text: "neutralizar a acidez citoplasmática gerada pelo acúmulo de íons potássio.",
        isCorrect: false,
        distractorRationale: "A formação de lactato e íons H⁺ está associada à acidose láctica transitória, e não à neutralização alcalinizante."
      },
      {
        id: "d",
        text: "fornecer dióxido de carbono para estimular a vasodilatação coronariana.",
        isCorrect: false,
        distractorRationale: "A fermentação láctica não produz CO₂ (ao contrário da fermentação alcoólica)."
      },
      {
        id: "e",
        text: "inibir a fosfofrutoquinase para evitar o colapso dos estoques de glicogênio.",
        isCorrect: false,
        distractorRationale: "A fermentação visa sustentar a via glicolítica, e não bloqueá-la no início da exigência mecânica."
      }
    ],
    detailedExplanation: {
      summary: "A fermentação láctica oxida o NADH citoplasmático de volta a NAD⁺, impedindo o esgotamento do aceptor de elétrons necessário para manter a glicólise ativa.",
      stepByStep: [
        "1. Na ausência de O₂, a cadeia mitocondrial fica paralisada e não reoxida o NADH.",
        "2. Sem NAD⁺ livre, a enzima gliceraldeído-3-fosfato desidrogenase para, interrompendo a glicólise.",
        "3. Ao transferir os elétrons do NADH para o piruvato, gerando lactato, o NAD⁺ é regenerado, garantindo o ciclo contínuo de 2 ATPs anaeróbicos."
      ],
      coreConcept: "A função primária das fermentações biológicas é a reciclagem de NAD⁺ na ausência de aceptor final aeróbico.",
      trapWarning: "A fermentação em si não gera ATP adicional além daquele produzido na glicólise prévia."
    },
    tags: ["bioquimica", "fermentacao", "lactato", "exercicio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-003",
    area: "natureza",
    competence: 5,
    skill: 16,
    topic: "Biotecnologia",
    subtopic: "Fermentação Alcoólica na Indústria de Panificação",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No preparo tradicional de pães artesanais, mistura-se farinha de trigo, água, açúcar e fermento biológico comercial, composto pelo fungo unicelular Saccharomyces cerevisiae. A massa é deixada em repouso em temperatura ambiente, momento em que dobra de volume. Em seguida, a massa é submetida ao calor do forno a 200 °C.",
      source: "AQUARONE, E. et al. Biotecnologia Industrial: Biotecnologia na Produção de Alimentos. Edgard Blücher, 2020."
    },
    prompt: "O crescimento da massa de pão durante o repouso e a ausência de teor alcoólico significativo no produto final assado explicam-se, respectivamente, pela",
    options: [
      {
        id: "a",
        text: "expansão do gás oxigênio consumido e fixação do etanol na rede de glúten.",
        isCorrect: false,
        distractorRationale: "O gás liberado é CO₂, e o etanol não se fixa quimicamente na rede proteica do glúten."
      },
      {
        id: "b",
        text: "liberação de gás carbônico retido no glúten e evaporação do etanol sob aquecimento.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na fermentação alcoólica: glicose → 2 etanol + 2 CO₂. O gás carbônico (CO₂) forma bolhas microscópicas que ficam aprisionadas na rede elástica do glúten, fazendo a massa expandir. No cozimento em alta temperatura (>78 °C, ponto de ebulição do álcool), o etanol volatiliza completamente."
      },
      {
        id: "c",
        text: "produção de vapor d'água metabólico e degradação ácida do álcool etílico.",
        isCorrect: false,
        distractorRationale: "A causa primária da expansão no repouso é a fermentação com liberação de CO₂, não a vaporização da água."
      },
      {
        id: "d",
        text: "formação de metano bacteriano e combustão completa das moléculas de levedura.",
        isCorrect: false,
        distractorRationale: "Leveduras são fungos e realizam fermentação alcoólica, não metanogênese."
      },
      {
        id: "e",
        text: "desnaturação do amido pela amilase e condensação de ésteres aromatizantes.",
        isCorrect: false,
        distractorRationale: "Ignora o metabolismo fermentativo dos fungos e a estequiometria da reação."
      }
    ],
    detailedExplanation: {
      summary: "O dióxido de carbono retido na matriz de glúten expande a massa; o etanol, sendo volátil, evapora durante o forneamento a altas temperaturas.",
      stepByStep: [
        "1. Identificar os produtos da fermentação alcoólica: Piruvato → Acetaldeído + CO₂ → Etanol.",
        "2. O CO₂ gasoso expande o volume físico da massa de farinha.",
        "3. O ponto de ebulição do etanol é 78,37 °C; a temperatura do forno (200 °C) evapora o álcool residual."
      ],
      coreConcept: "A fermentação alcoólica gera CO₂ (agente de crescimento da massa) e etanol volátil.",
      trapWarning: "Fermento químico usa bicarbonato de sódio com ácidos; fermento biológico usa leveduras vivas."
    },
    tags: ["bioquimica", "fermentacao", "panificacao", "fungos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-004",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Bioenergética",
    subtopic: "Ciclo de Krebs e Descarboxilações Oxidativas",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No interior da matriz mitocondrial de células eucarióticas, cada molécula de piruvato sofre descarboxilação oxidativa pelo complexo da piruvato desidrogenase, produzindo acetil-CoA, NADH e liberando CO₂. O grupo acetil (2 carbonos) combina-se com o oxaloacetato (4 carbonos) para formar citrato (6 carbonos), iniciando o Ciclo do Ácido Cítrico (Ciclo de Krebs). Ao longo de uma volta completa do ciclo por molécula de acetil-CoA, ocorrem transferências de elétrons e fosforilação em nível de substrato.",
      source: "ALBERTS, B. et al. Biologia Molecular da Célula. 6. ed. Porto Alegre: Artmed, 2017."
    },
    prompt: "Para cada molécula de glicose totalmente degradada na respiração aeróbica, o ciclo de Krebs propriamente dito produz diretamente",
    options: [
      {
        id: "a",
        text: "3 NADH, 1 FADH₂, 1 GTP/ATP e 2 CO₂.",
        isCorrect: false,
        distractorRationale: "Esse é o saldo de apenas uma molécula de acetil-CoA (meia glicose), e não da glicose inteira (que gera dois acetil-CoA)."
      },
      {
        id: "b",
        text: "6 NADH, 2 FADH₂, 2 GTP/ATP e 4 CO₂.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Cada glicose gera 2 piruvatos, que formam 2 acetil-CoA. Cada volta do ciclo de Krebs produz 3 NADH, 1 FADH₂, 1 GTP (equivalente a ATP) e 2 CO₂. Portanto, para 1 glicose (2 voltas), o rendimento é: 2 × 3 = 6 NADH; 2 × 1 = 2 FADH₂; 2 × 1 = 2 ATP/GTP e 2 × 2 = 4 CO₂."
      },
      {
        id: "c",
        text: "10 NADH, 2 FADH₂ e 38 ATP.",
        isCorrect: false,
        distractorRationale: "Soma produtos de todas as fases da respiração celular e usa números antigos e inflacionados de rendimento de ATP."
      },
      {
        id: "d",
        text: "4 NADH, 4 FADH₂ e 6 CO₂.",
        isCorrect: false,
        distractorRationale: "Erro na proporção de redução dos transportadores de elétrons."
      },
      {
        id: "e",
        text: "2 NADH, 2 FAD e 2 moléculas de ácido pirúvico.",
        isCorrect: false,
        distractorRationale: "Confunde substratos e reagentes, omitindo a fosforilação do GTP."
      }
    ],
    detailedExplanation: {
      summary: "Uma molécula de glicose produz dois fragmentos acetil-CoA; assim, o ciclo de Krebs executa duas voltas, gerando 6 NADH, 2 FADH₂, 2 GTP/ATP e 4 CO₂.",
      stepByStep: [
        "1. Uma glicose (6C) origina 2 piruvatos (3C cada).",
        "2. Cada piruvato gera 1 acetil-CoA (2C) + 1 NADH + 1 CO₂ (fase preparatória mitocondrial).",
        "3. No Ciclo de Krebs, 1 acetil-CoA gera 3 NADH + 1 FADH₂ + 1 GTP/ATP + 2 CO₂.",
        "4. Multiplicando por 2 (referente a 1 glicose): 6 NADH, 2 FADH₂, 2 ATP/GTP e 4 CO₂."
      ],
      coreConcept: "O ciclo de Krebs ocorre na matriz mitocondrial e gira duas vezes por molécula de glicose metabolizada.",
      trapWarning: "Atenção: o enunciado pediu o produto de UMA molécula de glicose no ciclo de Krebs, exigindo dobrar os valores de uma única volta."
    },
    tags: ["bioquimica", "ciclo-de-krebs", "mitocondria", "respiracao-celular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-005",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Bioenergética",
    subtopic: "Hipótese Quimiosmótica e ATP Sintase",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A teoria quimiosmótica, proposta por Peter Mitchell em 1961 (prêmio Nobel de Química em 1978), revolucionou a compreensão da bioenergética celular ao demonstrar que a síntese de ATP na fosforilação oxidativa mitocondrial não ocorre por ligações covalentes intermediárias de alta energia, mas sim por meio de um acoplamento eletroquímico transmembrana promovido pelo fluxo de elétrons.",
      source: "BERG, J. M.; TYMOCZKO, J. L.; STRYER, L. Bioquímica. 8. ed. Rio de Janeiro: Guanabara Koogan, 2019."
    },
    prompt: "De acordo com essa teoria, a força motriz protônica que aciona a rotação mecânica da enzima ATP sintase na membrana mitocondrial interna resulta do acúmulo de prótons (H⁺) no(a)",
    options: [
      {
        id: "a",
        text: "matriz mitocondrial, reduzindo o pH interno em relação ao citoplasma.",
        isCorrect: false,
        distractorRationale: "Os prótons são bombeados PARA FORA da matriz, tornando a matriz alcalina (pH mais alto), e não ácida."
      },
      {
        id: "b",
        text: "espaço intermembranas, gerando um gradiente de concentração e potencial elétrico.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Os complexos I, III e IV da cadeia transportadora de elétrons bombeiam íons H⁺ da matriz mitocondrial para o espaço intermembranas. Isso cria um gradiente eletroquímico (maior acidez e carga positiva no espaço intermembranas). O retorno espontâneo desses prótons para a matriz ocorre exclusivamente pelo canal da ATP sintase, promovendo a rotação de seu domínio F₀ e sintetizando ATP a partir de ADP e Pi."
      },
      {
        id: "c",
        text: "lúmen do retículo endoplasmático, ativado pelo retículo sarcoplasmático.",
        isCorrect: false,
        distractorRationale: "A fosforilação oxidativa ocorre na mitocôndria, e não no retículo endoplasmático."
      },
      {
        id: "d",
        text: "crista externa da mitocôndria, promovendo difusão facilitada de ATP para o núcleo.",
        isCorrect: false,
        distractorRationale: "A membrana externa possui porinas e é permeável; o gradiente é mantido pela membrana interna impermeável aos íons."
      },
      {
        id: "e",
        text: "citosol celular, por meio de bombas de sódio e potássio ativadas por cálcio.",
        isCorrect: false,
        distractorRationale: "Confunde a bomba de sódio-potássio da membrana plasmática com a fosforilação oxidativa mitocondrial."
      }
    ],
    detailedExplanation: {
      summary: "O bombeamento de prótons para o espaço intermembranas estabelece um gradiente eletroquímico cuja dissipação através da ATP sintase regenera ATP.",
      stepByStep: [
        "1. Os elétrons de alta energia de NADH e FADH₂ passam pelos complexos proteicos da membrana interna.",
        "2. Essa passagem de elétrons fornece energia livre para bombear H⁺ da matriz para o espaço intermembranas.",
        "3. O acúmulo de prótons cria a força motriz protônica (ΔpH + ΔΨ).",
        "4. Os prótons retornam à matriz passando pela subunidade condutora da ATP sintase, gerando rotação que catalisa a síntese de ATP."
      ],
      coreConcept: "A síntese de ATP mitocondrial depende do gradiente de prótons concentrado no espaço intermembranas.",
      trapWarning: "Lembre-se: matriz mitocondrial fica com MENOS prótons (mais básica); espaço intermembranas fica com MAIS prótons (mais ácido)."
    },
    tags: ["bioquimica", "mitocondria", "quimiosmose", "atp-sintase"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-006",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Bioenergética",
    subtopic: "Aceptor Final de Elétrons na Respiração Aeróbica",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A água metabólica é aquela gerada no próprio organismo como subproduto de reações químicas celulares. Em animais adaptados a ambientes áridos, como o rato-canguru do deserto norte-americano, essa água de origem oxidativa chega a representar até 90% de toda a hidratação necessária para sua sobrevivência biológica.",
      source: "SCHMIDT-NIELSEN, K. Fisiologia Animal: Adaptação e Meio Ambiente. Santos Editora, 2016."
    },
    prompt: "Na cadeia transportadora de elétrons da respiração aeróbica, a água metabólica é sintetizada quando o oxigênio molecular (O₂) atua diretamente como",
    options: [
      {
        id: "a",
        text: "doador inicial de elétrons para o complexo I (NADH desidrogenase).",
        isCorrect: false,
        distractorRationale: "O doador de elétrons é o NADH ou FADH₂, e não o oxigênio molecular."
      },
      {
        id: "b",
        text: "coenzima ativadora da enzima citrato sintase no ciclo de Krebs.",
        isCorrect: false,
        distractorRationale: "O O₂ atua no final da cadeia respiratória na membrana interna, não no ciclo de Krebs."
      },
      {
        id: "c",
        text: "aceptor final de elétrons e prótons (H⁺) no complexo citocromo c oxidase.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O oxigênio é altamente eletronegativo e atua como aceptor final de elétrons ao término da cadeia respiratória: ½ O₂ + 2 H⁺ + 2 e⁻ → H₂O. Essa reação neutraliza os elétrons desenergizados e forma a água metabólica."
      },
      {
        id: "d",
        text: "transportador móvel de fosfato inorgânico através da matriz mitocondrial.",
        isCorrect: false,
        distractorRationale: "O transporte de fosfato é realizado por carreadores proteicos específicos, sem relação com O₂."
      },
      {
        id: "e",
        text: "catalisador inorgânico da quebra hidrolítica de moléculas de lipídios.",
        isCorrect: false,
        distractorRationale: "Confunde a respiração celular com a beta-oxidação de ácidos graxos."
      }
    ],
    detailedExplanation: {
      summary: "O oxigênio molecular recebe os elétrons finais da cadeia respiratória e prótons da matriz, formando água metabólica.",
      stepByStep: [
        "1. Os elétrons percorrem os transportadores perdendo energia livre.",
        "2. No complexo IV (citocromo oxidase), os elétrons são transferidos para o O₂ molecular.",
        "3. A reação ½ O₂ + 2 H⁺ + 2 e⁻ → H₂O consome prótons da matriz e gera água."
      ],
      coreConcept: "O papel do oxigênio na respiração é ser o aceptor final de elétrons, formando água.",
      trapWarning: "O oxigênio que respiramos NÃO vira CO₂! O CO₂ vem das descarboxilações da glicose; o O₂ inalado vira água (H₂O)."
    },
    tags: ["bioquimica", "oxigenio", "cadeia-respiratoria", "agua-metabolica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-007",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia e Bioenergética",
    subtopic: "Desacoplamento Mitocondrial e Termogênese",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Recém-nascidos humanos e mamíferos que passam por longos períodos de hibernação possuem depósitos significativos de tecido adiposo marrom (TAM). As mitocôndrias desse tecido contêm em sua membrana interna uma proteína transmembrana chamada termogenina (UCP-1, proteína desacopladora 1). Essa proteína atua como um canal que permite o retorno livre de prótons (H⁺) do espaço intermembranas para a matriz mitocondrial sem passar pela ATP sintase.",
      source: "GUYTON, A. C.; HALL, J. E. Tratado de Fisiologia Médica. 14. ed. Rio de Janeiro: Elsevier, 2021."
    },
    prompt: "O efeito fisiológico direto promovido pela ação da termogenina nas células do tecido adiposo marrom é o(a)",
    options: [
      {
        id: "a",
        text: "aumento dramático na síntese celular de ATP para sustentar o teto metabólico.",
        isCorrect: false,
        distractorRationale: "Como os prótons não passam pela ATP sintase, a síntese de ATP na verdade diminui ou se desacopla."
      },
      {
        id: "b",
        text: "dissipação da energia do gradiente eletroquímico na forma de calor corporal.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Ao desacoplar o fluxo de prótons da fosforilação do ADP, a energia potencial eletroquímica acumulada pela cadeia transportadora de elétrons é dissipada como calor térmico (termogênese sem calafrios), mantendo a temperatura corporal do bebê ou animal hibernante."
      },
      {
        id: "c",
        text: "bloqueio da glicólise por excesso de lactato gerado no citoplasma.",
        isCorrect: false,
        distractorRationale: "A oxidação de substratos (gordura e glicose) na verdade aumenta em ritmo compensatório acelerado."
      },
      {
        id: "d",
        text: "paralisação do consumo de oxigênio pelas enzimas da crista mitocondrial.",
        isCorrect: false,
        distractorRationale: "O consumo de oxigênio aumenta intensamente para queimar mais substratos na tentativa de gerar calor."
      },
      {
        id: "e",
        text: "inibição da oxidação de ácidos graxos para poupar energia em longo prazo.",
        isCorrect: false,
        distractorRationale: "O tecido adiposo marrom consome vorazmente ácidos graxos para manter a cadeia de elétrons bombeando prótons."
      }
    ],
    detailedExplanation: {
      summary: "A termogenina (UCP-1) dissipa o gradiente de prótons gerado pela cadeia respiratória em forma de calor, permitindo termorregulação sem gerar ATP.",
      stepByStep: [
        "1. A cadeia respiratória bombeia prótons para o espaço intermembranas consumindo oxigênio.",
        "2. A UCP-1 abre uma via de vazamento para os prótons retornarem à matriz mitocondrial.",
        "3. Como o fluxo não passa pelo rotor da ATP sintase, a energia livre do gradiente é convertida em calor puro (termogênese não associada a tremores)."
      ],
      coreConcept: "Desacopladores dissipam a força motriz protônica em energia térmica sem fosforilar ADP em ATP.",
      trapWarning: "Desacopladores AUMENTAM o consumo de O₂ e a queima de glicose/gordura, mas DIMINUEM a taxa de síntese de ATP por molécula consumida."
    },
    tags: ["bioquimica", "termogenese", "mitocondria", "tecido-adiposo-marrom"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-008",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Toxicologia Bioquímica",
    subtopic: "Inibição da Citocromo c Oxidase por Cianeto",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O cianeto de potássio (KCN) é um composto altamente tóxico que se liga com altíssima afinidade ao íon Fe³⁺ presente no sítio catalítico do complexo IV (citocromo c oxidase) da cadeia transportadora de elétrons das mitocôndrias. A exposição celular aguda a esse veneno bloqueia irreversivelmente a transferência de elétrons para o gás oxigênio.",
      source: "KLAASSEN, C. D. Casarett & Doull's Toxicology: The Basic Science of Poisons. 9th ed. McGraw-Hill, 2019."
    },
    prompt: "Em uma pessoa intoxicada gravemente por cianeto, a consequência metabólica primária observada no nível celular é a",
    options: [
      {
        id: "a",
        text: "elevação imediata dos níveis de glicose no sangue por hiperativação da gliconeogênese.",
        isCorrect: false,
        distractorRationale: "A gliconeogênese consome grandes quantidades de ATP celular e fica comprometida na ausência de energia mitocondrial."
      },
      {
        id: "b",
        text: "interrupção da cadeia de transporte de elétrons, colapso na produção de ATP aeróbico e acidose láctica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Ao paralisar o complexo IV, todos os carreadores anteriores ficam totalmente reduzidos (saturados de elétrons) e a cadeia para de bombear prótons. O gradiente se dissipa, a ATP sintase para de funcionar e a célula entra em choque por carência energética. Na tentativa desesperada de gerar ATP, a célula acelera a glicólise anaeróbica, acumulando grandes quantidades de ácido láctico e gerando acidose metabólica grave."
      },
      {
        id: "c",
        text: "paralisação da glicólise no citoplasma por falta imediata de piruvato.",
        isCorrect: false,
        distractorRationale: "A glicólise na verdade é superestimulada em regime de emergência para produzir pequenas quantidades de ATP anaeróbico."
      },
      {
        id: "d",
        text: "substituição instantânea do oxigênio pelo nitrogênio gasoso como aceptor final de elétrons.",
        isCorrect: false,
        distractorRationale: "Células humanas não possuem enzimas capazes de utilizar N₂ como aceptor biológico de elétrons."
      },
      {
        id: "e",
        text: "hiperpolarização da membrana interna mitocondrial com expulsão excessiva de água.",
        isCorrect: false,
        distractorRationale: "A membrana se despolariza, pois os prótons param de ser bombeados."
      }
    ],
    detailedExplanation: {
      summary: "O cianeto bloqueia o complexo IV, interrompendo a cadeia de elétrons, desativando a ATP sintase e induzindo acidose láctica severa por compensação anaeróbica.",
      stepByStep: [
        "1. O cianeto liga-se ao heme do citocromo oxidase (complexo IV).",
        "2. Os elétrons não chegam ao oxigênio; a cadeia toda fica 'congestionada' na forma reduzida.",
        "3. Cessa o bombeamento de H⁺; a síntese aeróbica de ATP colapsa.",
        "4. Como resposta compensatória, o tecido recorre à glicólise anaeróbica massiva, gerando acúmulo patológico de lactato e acidose metabólica."
      ],
      coreConcept: "Inibidores da cadeia respiratória paralisam a síntese oxidativa de ATP e forçam acidose láctica compensatória.",
      trapWarning: "Cianeto e monóxido de carbono inibem a cadeia respiratória; já o 2,4-DNP é um desacoplador que mantém a cadeia funcionando sem produzir ATP."
    },
    tags: ["bioquimica", "cianeto", "toxicologia", "mitocondria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-009",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fotossíntese",
    subtopic: "Fotólise da Água e Origem do Oxigênio",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante décadas no início do século XX, acreditava-se que o gás oxigênio (O₂) liberado na fotossíntese provinha da quebra molecular do dióxido de carbono (CO₂). No entanto, experimentos pioneiros com isótopos pesados (oxigênio-18, ¹⁸O) realizados por Ruben e Kamen em 1941 com algas verdes Chlorella comprovaram definitivamente a verdadeira origem do oxigênio liberado para a atmosfera terrestre.",
      source: "TAIZ, L. et al. Fisiologia e Desenvolvimento Vegetal. 6. ed. Porto Alegre: Artmed, 2017."
    },
    prompt: "Ao fornecer para uma cultura de plantas aquáticas água marcada isotopicamente com oxigênio pesado (H₂¹⁸O) e dióxido de carbono com oxigênio comum (C¹⁶O₂), o isótopo ¹⁸O será detectado predominantemente no(a)",
    options: [
      {
        id: "a",
        text: "molécula de glicose sintetizada no estroma cloroplastidial.",
        isCorrect: false,
        distractorRationale: "O oxigênio da glicose provém do CO₂ fixado no ciclo de Calvin, que estava com ¹⁶O."
      },
      {
        id: "b",
        text: "gás oxigênio (¹⁸O₂) liberado durante a fase fotoquímica nos tilacoides.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na reação de Hill (fotólise da água no fotossistema II nos tilacoides): 2 H₂O → 4 H⁺ + 4 e⁻ + O₂. O oxigênio liberado na atmosfera deriva EXCLUSIVAMENTE da molécula de água cindida para repor elétrons na clorofila. Portanto, ao marcar a água com ¹⁸O, todo o ¹⁸O₂ liberado será marcado com esse isótopo."
      },
      {
        id: "c",
        text: "molécula de ATP sintetizada pela ATP sintase do cloroplasto.",
        isCorrect: false,
        distractorRationale: "O ATP é formado a partir de ADP e fosfato inorgânico, não incorporando diretamente o oxigênio da água em sua estrutura."
      },
      {
        id: "d",
        text: "amido de reserva acumulado nos leucoplastos da raiz.",
        isCorrect: false,
        distractorRationale: "O amido é polímero da glicose, cujos átomos de oxigênio provêm do CO₂."
      },
      {
        id: "e",
        text: "coenzima NADPH reduzida nos grana.",
        isCorrect: false,
        distractorRationale: "O NADP⁺ recebe elétrons e íons H⁺, e não o átomo de oxigênio da água."
      }
    ],
    detailedExplanation: {
      summary: "A fotólise da água no fotossistema II rompe H₂O em prótons, elétrons e O₂; logo, todo o oxigênio liberado na fotossíntese deriva da água.",
      stepByStep: [
        "1. Reação da fotólise da água: 2 H₂O → 4 H⁺ + 4 e⁻ + O₂.",
        "2. A água é doadora de elétrons para o centro de reação P680 oxidado pela luz.",
        "3. Como o ¹⁸O estava na água (H₂¹⁸O), o oxigênio liberado como subproduto gasoso é ¹⁸O₂.",
        "4. O oxigênio presente no carboidrato (glicose) deriva do CO₂ gasoso fixado no estroma."
      ],
      coreConcept: "Todo o oxigênio (O₂) liberado pelos vegetais na fotossíntese provém da água (H₂O), e não do CO₂.",
      trapWarning: "Erro clássico de prova: achar que o oxigênio que as plantas soltam vem do CO₂ que elas absorvem."
    },
    tags: ["bioquimica", "fotossintese", "fotolise-da-agua", "isotopos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-010",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fotossíntese",
    subtopic: "Ciclo de Calvin-Benson e Fixação pela Rubisco",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A fase de fixação do carbono na fotossíntese (Ciclo de Calvin-Benson) ocorre no estroma dos cloroplastos e independe diretamente da incidência de fótons luminosos no instante da reação, embora dependa estritamente dos compostos químicos gerados pela fase fotoquímica prévia. A enzima ribulose-1,5-bisfosfato carboxilase/oxigenase (Rubisco) catalisa a reação inicial unindo o CO₂ a uma molécula de cinco carbonos (RuBP).",
      source: "RAVEN, P. H. et al. Biologia Vegetal. 8. ed. Rio de Janeiro: Guanabara Koogan, 2014."
    },
    prompt: "Para converter o dióxido de carbono atmosférico em trioses fosfatadas (precursoras da glicose) no ciclo de Calvin, o estroma consome continuamente",
    options: [
      {
        id: "a",
        text: "gás oxigênio (O₂) e piruvato mitocondrial.",
        isCorrect: false,
        distractorRationale: "O O₂ compete com o CO₂ na fotorrespiração, sendo prejudicial à fixação eficiente de carbono."
      },
      {
        id: "b",
        text: "ATP e NADPH produzidos na fase fotoquímica dos tilacoides.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A fase fotoquímica (nos tilacoides) absorve luz e produz ATP (via fotofosforilação) e NADPH (poder redutor). No estroma, o ciclo de Calvin consome esse ATP e o NADPH para reduzir o 3-fosfoglicerato a gliceraldeído-3-fosfato (G3P) e regenerar a ribulose-1,5-bisfosfato."
      },
      {
        id: "c",
        text: "NADH e FADH₂ provenientes do ciclo de Krebs vegetal.",
        isCorrect: false,
        distractorRationale: "NADH e FADH₂ são coenzimas da respiração mitocondrial; a fotossíntese utiliza NADPH."
      },
      {
        id: "d",
        text: "fótons de luz ultravioleta absorvidos diretamente pelo complexo Rubisco.",
        isCorrect: false,
        distractorRationale: "A enzima Rubisco não possui cromóforos e não absorve fótons diretamente."
      },
      {
        id: "e",
        text: "ácido láctico e glicose sintetizados na mitocôndria vegetal.",
        isCorrect: false,
        distractorRationale: "A fotossíntese sintetiza trioses a partir de CO₂ inorgânico, não a partir de ácido láctico."
      }
    ],
    detailedExplanation: {
      summary: "O ciclo de Calvin utiliza a energia química armazenada na forma de ATP e o poder redutor do NADPH produzidos na fase clara para fixar e reduzir o CO₂.",
      stepByStep: [
        "1. Fixação: CO₂ + RuBP (5C) → 2 moléculas de 3-fosfoglicerato (3-PGA) via Rubisco.",
        "2. Redução: 3-PGA é fosforilado por ATP e reduzido por NADPH, formando G3P.",
        "3. Regeneração: G3P é utilizado para regenerar RuBP com gasto adicional de ATP.",
        "4. Saldo: ATP e NADPH fornecem a energia e os elétrons necessários para a síntese orgânica."
      ],
      coreConcept: "A fase química da fotossíntese depende dos produtos da fase clara: ATP e NADPH.",
      trapWarning: "Embora chamada de 'fase escura', o ciclo de Calvin cessa à noite após alguns minutos porque os estoques de ATP e NADPH esgotam-se sem luz."
    },
    tags: ["bioquimica", "fotossintese", "ciclo-de-calvin", "rubisco"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-011",
    area: "natureza",
    competence: 4,
    skill: 17,
    topic: "Ecofisiologia Vegetal",
    subtopic: "Ponto de Compensação Fótico (PCF)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma estufa de cultivo controlado, pesquisadores mediram as taxas de fotossíntese e de respiração celular de mudas de espécies vegetais de sombra (umbrófitas) e de sol (heliófitas) sob diferentes intensidades de radiação luminosa. O Ponto de Compensação Fótico (PCF) corresponde à intensidade luminosa na qual o volume de oxigênio produzido na fotossíntese iguala exatamente o volume de oxigênio consumido na respiração celular.",
      source: "LARCHER, W. Ecofisiologia Vegetal. São Carlos: Rima Artes e Textos, 2016."
    },
    prompt: "Para que uma muda jovem de árvore consiga acumular biomassa, crescer e armazenar reservas energéticas para o seu desenvolvimento, é indispensável que ela permaneça submetida a uma intensidade de luz",
    options: [
      {
        id: "a",
        text: "estritamente coincidente com o seu ponto de compensação fótico ao longo de 24 horas.",
        isCorrect: false,
        distractorRationale: "No PCF exato, todo o carbono fixado é consumido na respiração celular; o saldo líquido de biomassa é zero."
      },
      {
        id: "b",
        text: "superior ao seu ponto de compensação fótico durante o período diurno iluminado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para que haja saldo positivo de matéria orgânica (incorporação líquida de carbono e biomassa), a taxa de fotossíntese diurna deve superar a taxa de respiração (intensidade > PCF). Isso gera um excedente de açúcares que compensa a respiração noturna (quando não há luz) e viabiliza o crescimento da planta."
      },
      {
        id: "c",
        text: "inferior ao seu ponto de compensação fótico para evitar a perda excessiva de água por gutação.",
        isCorrect: false,
        distractorRationale: "Abaixo do PCF, a planta consome mais reservas do que produz, definhando e morrendo por inanição energética."
      },
      {
        id: "d",
        text: "nula durante o dia, priorizando a síntese anaeróbica de celulose no parênquima.",
        isCorrect: false,
        distractorRationale: "Sem luz durante o dia não ocorre fotossíntese, inviabilizando o crescimento do vegetal autótrofo."
      },
      {
        id: "e",
        text: "acima do ponto de saturação luminosa para garantir a quebra térmica dos estômatos.",
        isCorrect: false,
        distractorRationale: "Acima do ponto de saturação não há aumento na fotossíntese e luz em excesso pode causar fotoinibição e fotooxidação."
      }
    ],
    detailedExplanation: {
      summary: "Acima do Ponto de Compensação Fótico, a taxa fotossintética supera a respiratória, gerando saldo líquido positivo de glicose para crescimento e reservas.",
      stepByStep: [
        "1. No PCF: Taxa de Fotossíntese = Taxa de Respiração celular (saldo de O₂ e CO₂ líquido = 0).",
        "2. Abaixo do PCF: Respiração > Fotossíntese (a planta consome suas reservas e emagrece/morre).",
        "3. Acima do PCF: Fotossíntese > Respiração (produção líquida de açúcares e acúmulo de biomassa)."
      ],
      coreConcept: "Crescimento vegetal requer taxa fotossintética superior à taxa respiratória (intensidade luminosa > PCF).",
      trapWarning: "Não confunda Ponto de Compensação Fótico (saldo zero) com Ponto de Saturação Luminosa (capacidade máxima de absorção dos pigmentos)."
    },
    tags: ["bioquimica", "fotossintese", "ponto-de-compensacao", "ecofisiologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-012",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fotossíntese",
    subtopic: "Fatores Limitantes e Desnaturação da Rubisco",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A taxa fotossintética de uma lavoura de soja foi monitorada mantendo-se a intensidade luminosa e a disponibilidade de água constantes em níveis ótimos. Variou-se progressivamente a temperatura ambiente de 10 °C até 55 °C. Observou-se que a velocidade de fixação de carbono aumentou de maneira contínua até os 32 °C, decaindo vertiginosamente a partir dos 42 °C até cessar completamente aos 52 °C.",
      source: "KERBAUY, G. B. Fisiologia Vegetal. 2. ed. Rio de Janeiro: Guanabara Koogan, 2019."
    },
    prompt: "A queda acentuada e a posterior paralisação da fotossíntese observada acima dos 42 °C são causadas diretamente pelo(a)",
    options: [
      {
        id: "a",
        text: "esgotamento estequiométrico do gás carbônico livre na atmosfera terrestre.",
        isCorrect: false,
        distractorRationale: "O CO₂ mantinha-se constante no experimento; a limitação foi estritamente térmica."
      },
      {
        id: "b",
        text: "desnaturação proteica de enzimas do ciclo de Calvin, como a Rubisco, com perda da estrutura terciária.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Enzimas são proteínas cuja atividade catalítica depende de sua conformação tridimensional específica. Temperaturas elevadas rompem interações fracas (pontes de hidrogênio e interações hidrofóbicas), desestruturando o sítio ativo da Rubisco e de outras enzimas metabólicas, levando à perda irreversível da capacidade catalítica."
      },
      {
        id: "c",
        text: "congelamento da fase aquosa do estroma cloroplastidial.",
        isCorrect: false,
        distractorRationale: "O congelamento ocorre próximo a 0 °C, e não em temperaturas acima de 42 °C."
      },
      {
        id: "d",
        text: "transformação espontânea de clorofila em caroteno sob aquecimento.",
        isCorrect: false,
        distractorRationale: "A clorofila não se transforma espontaneamente em caroteno com aumento de temperatura."
      },
      {
        id: "e",
        text: "redução na velocidade cinética de colisão entre as moléculas de reagentes.",
        isCorrect: false,
        distractorRationale: "O aumento de temperatura ELEVA a velocidade cinética e as colisões; o problema é a desnaturação da proteína."
      }
    ],
    detailedExplanation: {
      summary: "O excesso de calor desnatura as enzimas essenciais para a fixação do carbono, alterando sua estrutura tridimensional e inativando seu sítio ativo.",
      stepByStep: [
        "1. De 10 °C a 32 °C: o aquecimento aumenta a energia cinética e a frequência de choques efetivos enzima-substrato.",
        "2. Acima da temperatura ótima (~35 °C): a agitação térmica excessiva rompe ligações de hidrogênio e forças de van der Waals.",
        "3. A enzima Rubisco sofre desnaturação, perdendo a forma do sítio ativo, o que faz a taxa de fotossíntese despencar."
      ],
      coreConcept: "Enzimas possuem temperatura ótima; o calor excessivo desnatura as proteínas celulares.",
      trapWarning: "Cuidado: calor aumenta colisões moleculares, mas destrói a forma das enzimas."
    },
    tags: ["bioquimica", "enzimas", "temperatura", "desnaturacao", "fotossintese"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-013",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Adaptações Metabólicas",
    subtopic: "Metabolismo Ácido das Crassuláceas (CAM) e Clima Semiárido",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Espécies vegetais nativas da Caatinga brasileira, como o mandacaru (Cereus jamacaru) e outras cactáceas, sobrevivem sob severo estresse hídrico e alta radiação solar recorrendo ao metabolismo CAM (Crassulacean Acid Metabolism). Enquanto as plantas C3 tradicionais abrem os estômatos durante o dia, as plantas CAM mantêm seus estômatos rigorosamente fechados durante as horas mais quentes.",
      source: "PRADO, C. H. B. A.; CASALI, C. A. Fisiologia Vegetal: Práticas em Relações Hídricas e Fotossíntese. Manole, 2018."
    },
    prompt: "Essa estratégia fisiológica de sobrevivência no bioma semiárido baseia-se na",
    options: [
      {
        id: "a",
        text: "separação temporal: fixação noturna de CO₂ na forma de malato e liberação diurna interna para o ciclo de Calvin com estômatos fechados.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Plantas CAM abrem os estômatos à NOITE (quando a umidade é maior e a transpiração é mínima), fixando o CO₂ via enzima PEP carboxilase em ácido málico (malato), armazenado no vacúolo. Durante o DIA, com estômatos fechados para evitar perda de água, o malato é descarboxilado, liberando CO₂ diretamente para a Rubisco realizar o ciclo de Calvin com a luz disponível."
      },
      {
        id: "b",
        text: "substituição da água molecular por soluções concentradas de cloreto de sódio na fotólise tilacoidal.",
        isCorrect: false,
        distractorRationale: "Nenhuma planta substitui água por NaCl na fotólise da água fotossintética."
      },
      {
        id: "c",
        text: "abolição completa do ciclo de Calvin, convertendo fótons diretamente em moléculas lipídicas.",
        isCorrect: false,
        distractorRationale: "Plantas CAM possuem ciclo de Calvin e enzima Rubisco atuando durante o dia."
      },
      {
        id: "d",
        text: "abertura dos estômatos ao meio-dia para permitir rápida transpiração refrigeradora foliar.",
        isCorrect: false,
        distractorRationale: "Abrir estômatos ao meio-dia no semiárido provocaria dessecação letal imediata."
      },
      {
        id: "e",
        text: "separação espacial de cloroplastos exclusivamente entre raízes profundas e folhas apicais.",
        isCorrect: false,
        distractorRationale: "A separação espacial é característica da anatomia de Kranz das plantas C4 (como milho e cana), e raízes não possuem cloroplastos funcionais para fotossíntese."
      }
    ],
    detailedExplanation: {
      summary: "Plantas CAM realizam separação temporal da fixação do carbono: absorvem CO₂ à noite armazenando em ácido málico e processam no ciclo de Calvin de dia com estômatos vedados.",
      stepByStep: [
        "1. Noite: Estômatos abertos. Transpiração baixa. PEP carboxilase fixa CO₂ em oxaloacetato → malato, que vai para o vacúolo.",
        "2. Dia: Estômatos fechados. Prevenção máxima contra dessecação hídrica.",
        "3. O malato sai do vacúolo e sofre descarboxilação, gerando alta concentração interna de CO₂ ao redor da Rubisco.",
        "4. A luz solar diurna aciona a fase clara, gerando ATP e NADPH para o ciclo de Calvin processar esse CO₂ interno."
      ],
      coreConcept: "Plantas CAM usam separação TEMPORAL (fixação noturna, fotossíntese diurna) para minimizar a perda hídrica.",
      trapWarning: "C4 usa separação ESPACIAL (mesofilo e bainha do feixe); CAM usa separação TEMPORAL (noite e dia)."
    },
    tags: ["bioquimica", "plantas-cam", "semiarido", "caatinga", "adaptacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-014",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Enzimologia",
    subtopic: "Cinética de Michaelis-Menten e Afinidade (Km)",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em ensaios farmacológicos para desenvolvimento de novos fármacos, a cinética enzimática é avaliada pela equação de Michaelis-Menten: V = (Vmax · [S]) / (Km + [S]). A constante de Michaelis (Km) representa a concentração de substrato [S] na qual a velocidade inicial da reação (V) atinge exatamente a metade da velocidade máxima (Vmax / 2). Um valor baixo de Km reflete alta afinidade da enzima pelo substrato, pois exige menor concentração deste para atingir a meia-saturação dos sítios ativos.",
      source: "VOET, D.; VOET, J. G. Bioquímica. 4. ed. Porto Alegre: Artmed, 2013."
    },
    prompt: "Duas isoenzimas hepáticas que catalisam a fosforilação da glicose foram analisadas: a Hexoquinase (Km = 0,1 mM) e a Glicoquinase (Km = 10,0 mM). Em situações normais de jejum prolongado, quando a concentração de glicose no sangue é baixa (~4,0 mM), a enzima que apresentará maior saturação catalítica e velocidade relativa é a",
    options: [
      {
        id: "a",
        text: "Glicoquinase, porque seu alto valor de Km garante maior velocidade em qualquer concentração.",
        isCorrect: false,
        distractorRationale: "Alto Km indica baixa afinidade; com [S] = 4,0 mM, a glicoquinase opera muito abaixo de sua meia-saturação."
      },
      {
        id: "b",
        text: "Hexoquinase, porque seu baixo Km (0,1 mM) assegura que ela já opere próxima à velocidade máxima mesmo com pouca glicose.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Com Km = 0,1 mM, uma concentração de 4,0 mM de glicose representa 40 vezes o valor de Km ([S] >> Km). Logo, a hexoquinase estará praticamente 100% saturada, operando próxima de sua Vmax para suprir tecidos vitais, enquanto a glicoquinase (Km = 10 mM) estará em regime subsaturado (< 30% da sua Vmax)."
      },
      {
        id: "c",
        text: "Glicoquinase, pois enzimas hepáticas são imunes à regulação pela concentração de substrato.",
        isCorrect: false,
        distractorRationale: "A cinética de Michaelis-Menten descreve justamente a dependência da concentração de substrato."
      },
      {
        id: "d",
        text: "Hexoquinase, exclusivamente porque ela consome duas moléculas de ADP em vez de ATP.",
        isCorrect: false,
        distractorRationale: "A hexoquinase consome ATP e gera ADP, e o Km não altera a estequiometria do cofator."
      },
      {
        id: "e",
        text: "Ambas operarão exatamente na mesma velocidade, pois a concentração de glicose é superior a 1,0 mM.",
        isCorrect: false,
        distractorRationale: "Como os valores de Km diferem em 100 vezes (0,1 contra 10,0), suas taxas de saturação fracionária são muito diferentes."
      }
    ],
    detailedExplanation: {
      summary: "Menor Km traduz maior afinidade pelo substrato. A hexoquinase atinge saturação quase completa em baixas concentrações de glicose.",
      stepByStep: [
        "1. Km é a concentração de substrato necessária para atingir Vmax / 2.",
        "2. Hexoquinase tem Km = 0,1 mM. Com glicose a 4,0 mM: [S] = 40 × Km ⟹ V ≈ Vmax (saturada).",
        "3. Glicoquinase tem Km = 10,0 mM. Com glicose a 4,0 mM: [S] < Km ⟹ V = (Vmax · 4) / (10 + 4) = 0,28 Vmax (pouco ativa).",
        "4. Isso permite que a glicoquinase só seja acionada após grandes refeições ricas em carboidratos para estocar glicogênio hepático."
      ],
      coreConcept: "Quanto menor o Km de uma enzima, maior a sua afinidade pelo substrato.",
      trapWarning: "Cuidado: Km e afinidade são grandezas inversamente proporcionais (Km baixo = afinidade alta)."
    },
    tags: ["bioquimica", "enzimas", "cinetica-enzimatica", "michaelis-menten", "afinidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-015",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Enzimologia",
    subtopic: "Inibição Competitiva vs. Não Competitiva",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "As estatinas são medicamentos amplamente prescritos para o tratamento de dislipidemias e redução dos níveis de colesterol LDL no plasma sanguíneo. Esses fármacos possuem conformação espacial estruturalmente muito semelhante à do substrato hidroximetilglutaril-CoA (HMG-CoA), ligando-se reversivelmente ao sítio catalítico ativo da enzima HMG-CoA redutase.",
      source: "RANG, H. P. et al. Rang & Dale Farmacologia. 9. ed. Rio de Janeiro: Elsevier, 2020."
    },
    prompt: "Pelo fato de atuar como inibidor competitivo reversível, o efeito característico desse medicamento sobre a cinética da enzima-alvo é",
    options: [
      {
        id: "a",
        text: "diminuir a velocidade máxima (Vmax) sem alterar a constante de Michaelis (Km).",
        isCorrect: false,
        distractorRationale: "Esse é o perfil de um inibidor não competitivo / alostérico clássico."
      },
      {
        id: "b",
        text: "aumentar o valor aparente de Km, mantendo a velocidade máxima (Vmax) inalterada em concentrações saturantes de substrato.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. No inibidor competitivo, o fármaco disputa o mesmo sítio ativo com o substrato. Se adicionarmos quantidade excessiva de substrato natural ([S] muito elevado), ele vence a disputa estocástica e atinge a mesma velocidade máxima (Vmax inalterada). Contudo, é necessária maior quantidade de substrato para atingir a metade dessa velocidade, o que significa que o Km aparente AUMENTA."
      },
      {
        id: "c",
        text: "destruir irreversivelmente a sequência primária de aminoácidos da enzima.",
        isCorrect: false,
        distractorRationale: "A inibição é reversível e não destrói a cadeia polipeptídica por hidrólise."
      },
      {
        id: "d",
        text: "reduzir tanto a Vmax quanto o valor de Km na mesma proporção estequiométrica.",
        isCorrect: false,
        distractorRationale: "Esse é o perfil de um inibidor incompetitivo (uncompetitive), que só se liga ao complexo enzima-substrato."
      },
      {
        id: "e",
        text: "impedir permanentemente a ligação da coenzima NADPH ao sítio alostérico.",
        isCorrect: false,
        distractorRationale: "O inibidor competitivo atua no sítio ativo do substrato, não em sítio alostérico."
      }
    ],
    detailedExplanation: {
      summary: "O inibidor competitivo disputa o sítio ativo com o substrato, aumentando o Km aparente, mas a Vmax pode ser alcançada com excesso de substrato.",
      stepByStep: [
        "1. Inibição competitiva: inibidor e substrato competem pelo mesmo sítio catalítico.",
        "2. Com excesso de substrato ([S] → ∞), o substrato desloca o inibidor, mantendo a Vmax idêntica à da enzima pura.",
        "3. Como o inibidor atrapalha a ligação em concentrações moderadas, é preciso mais substrato para atingir Vmax/2, elevando o Km aparente."
      ],
      coreConcept: "Inibidor competitivo: aumenta o Km aparente e mantém a Vmax inalterada.",
      trapWarning: "Inibidor competitivo altera Km e mantém Vmax; inibidor não competitivo diminui Vmax e mantém Km."
    },
    tags: ["bioquimica", "inibicao-competitiva", "enzimas", "farmacologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-016",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Bioquímica Fisiológica",
    subtopic: "Influência do pH no Sítio Ativo Enzimático",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema digestório humano, o quimo gástrico ácido (pH em torno de 1,5 a 2,0), onde atua a protease pepsina, passa para o duodeno por meio do esfíncter pilórico. No duodeno, a secreção de bicarbonato de sódio pelo suco pancreático e bile eleva rapidamente o pH para a faixa de 7,8 a 8,2, onde atua a tripsina pancreática.",
      source: "SILVERTHORN, D. U. Fisiologia Humana: Uma Abordagem Integrada. 7. ed. Artmed, 2017."
    },
    prompt: "Quando as moléculas de pepsina gástrica chegam ao duodeno e entram em contato com o pH alcalino do suco pancreático, elas deixam de digerir proteínas porque",
    options: [
      {
        id: "a",
        text: "o bicarbonato hidrolisa suas ligações peptídicas, quebrando a enzima em aminoácidos isolados.",
        isCorrect: false,
        distractorRationale: "O bicarbonato não é uma enzima proteolítica; ele apenas altera o estado de ionização das cargas elétricas."
      },
      {
        id: "b",
        text: "a alteração do estado de ionização de grupos funcionais do sítio ativo modifica sua conformação espacial ótima.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O sítio ativo de enzimas possui cadeias laterais de aminoácidos ionizáveis (como carboxilas e aminas). Em pH ácido (~2), esses grupos na pepsina possuem o grau de protonação ideal para interagir com o substrato. Em pH alcalino (~8), a desprotonação altera as cargas elétricas e as pontes de hidrogênio, inativando a enzima por perda da conformação ativa."
      },
      {
        id: "c",
        text: "a tripsina converte imediatamente a pepsina em uma molécula de carboidrato estrutural.",
        isCorrect: false,
        distractorRationale: "Proteínas não são convertidas em carboidratos estruturais por enzimas digestivas."
      },
      {
        id: "d",
        text: "o pH básico neutraliza toda a água disponível no lúmen do intestino delgado.",
        isCorrect: false,
        distractorRationale: "A solução intestinal permanece em meio aquoso abundante."
      },
      {
        id: "e",
        text: "a pepsina requer íons ferro bivalentes que só existem em soluções ácidas.",
        isCorrect: false,
        distractorRationale: "A pepsina não depende de ferro bivalente como cofator obrigatório."
      }
    ],
    detailedExplanation: {
      summary: "Variações no pH alteram as cargas elétricas dos aminoácidos do sítio catalítico, modificando a conformação espacial da enzima e inativando-a fora de seu pH ótimo.",
      stepByStep: [
        "1. Cada enzima opera em um pH ótimo: Pepsina (pH ~2), Tripsina (pH ~8).",
        "2. A mudança brusca de pH altera o estado de ionização (-COO⁻ e -NH₃⁺) dos aminoácidos que formam o sítio ativo.",
        "3. Isso desestabiliza a estrutura terciária e impede o encaixe do substrato proteico, inativando a pepsina no intestino."
      ],
      coreConcept: "O pH afeta a ionização dos resíduos do sítio catalítico de enzimas, modulando sua atividade.",
      trapWarning: "Enzimas digestivas não funcionam todas no mesmo pH: estômago é ácido, intestino delgado é alcalino."
    },
    tags: ["bioquimica", "enzimas", "ph-otimo", "digestao", "pepsina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-017",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Vitaminas e Nutrição",
    subtopic: "Vitamina C e Síntese de Colágeno (Escorbuto)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas grandes navegações comerciais dos séculos XV e XVI, tripulações que passavam meses em alto-mar sem acesso a frutas frescas e vegetais crus desenvolviam uma grave enfermidade caracterizada por sangramentos gengivais, perda de dentes, fragilidade capilar e abertura de cicatrizes antigas (escorbuto). Em 1747, o médico naval James Lind demonstrou que o consumo diário de limões e laranjas curava a doença.",
      source: "CARVALHO, M. C. Breve História da Medicina Tropical e Nutricional. Fiocruz, 2018."
    },
    prompt: "No organismo humano, o ácido ascórbico (vitamina C) atua bioquimicamente como",
    options: [
      {
        id: "a",
        text: "substrato lipídico para a síntese de hormônios esteroides sexuais pelas suprarrenais.",
        isCorrect: false,
        distractorRationale: "A vitamina C é hidrossolúvel e não é precursora de esteroides (que derivam do colesterol)."
      },
      {
        id: "b",
        text: "cofator e agente redutor de enzimas que hidroxilam prolina e lisina na síntese de colágeno estável.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O ácido ascórbico mantém o ferro no estado reduzido (Fe²⁺) nas enzimas prolil e lisil hidroxilases. Essas enzimas adicionam grupos -OH aos resíduos de prolina e lisina na molécula de pró-colágeno. Sem a hidroxilação, a tripla hélice de colágeno torna-se termicamente instável e se rompe, causando extrema fragilidade nos tecidos conjuntivos, vasos sanguíneos e ligamentos periodontais (escorbuto)."
      },
      {
        id: "c",
        text: "monômero formador da parede celular de queratinócitos da derme.",
        isCorrect: false,
        distractorRationale: "Células animais não possuem parede celular, e a queratina é uma proteína, não polímero de ácido ascórbico."
      },
      {
        id: "d",
        text: "transportador de oxigênio no interior das hemácias em substituição à mioglobina.",
        isCorrect: false,
        distractorRationale: "O transporte de O₂ nas hemácias é realizado pela hemoglobina."
      },
      {
        id: "e",
        text: "hormônio hipofisário que estimula a proliferação de osteoclastos ósseos.",
        isCorrect: false,
        distractorRationale: "Vitamina C é um micronutriente alimentar essencial, não um hormônio da glândula hipófise."
      }
    ],
    detailedExplanation: {
      summary: "A vitamina C é cofator indispensável para a hidroxilação de prolina e lisina durante a síntese da fibra de colágeno, prevenindo o escorbuto.",
      stepByStep: [
        "1. O colágeno é a principal proteína estrutural da matriz extracelular dos tecidos conjuntivos.",
        "2. Para que a tripla hélice de colágeno forme ligações cruzadas estáveis, resíduos de prolina devem ser hidroxilados em hidroxiprolina.",
        "3. A vitamina C mantém o ferro das hidroxilases reduzido em Fe²⁺.",
        "4. Sua ausência produz colágeno frágil, levando à hemorragia capilar e escorbuto."
      ],
      coreConcept: "A carência de vitamina C prejudica a síntese de colágeno, originando o escorbuto.",
      trapWarning: "Escorbuto = falta de Vitamina C (colágeno/gengiva). Não confunda com Raquitismo (Vitamina D) ou Beribéri (Vitamina B1)."
    },
    tags: ["bioquimica", "vitamina-c", "colageno", "escorbuto", "nutricao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-018",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Vitaminas e Nutrição",
    subtopic: "Vitamina D, Homeostase de Cálcio e Raquitismo",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A vitamina D (colecalciferol) é classificada como uma vitamina lipossolúvel, embora seu metabólito ativo, o calcitriol (1,25-di-hidroxicolecalciferol), funcione fisiologicamente como um verdadeiro hormônio esteroide. No organismo, a síntese endógena inicia-se na epiderme pela fotólise do 7-desidrocolesterol provocada pela radiação solar ultravioleta B (UVB), passando por hidroxilações sequenciais no fígado e nos rins.",
      source: "BERNE, R. M.; LEVY, M. N. Fisiologia. 7. ed. Rio de Janeiro: Elsevier, 2018."
    },
    prompt: "A principal função biológica do calcitriol ativo e a doença pediátrica causada por sua carência crônica são, respectivamente,",
    options: [
      {
        id: "a",
        text: "estimular a absorção intestinal de cálcio e fosfato; e raquitismo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O calcitriol atua no epitélio intestinal aumentando a transcrição gênica de canais e proteínas ligantes de cálcio (calbindina), permitindo a absorção eficiente de cálcio e fosfato da dieta. Sua deficiência na infância resulta em mineralização defeituosa da matriz óssea em crescimento, provocando deformidades esqueléticas conhecidas como raquitismo (e osteomalácia em adultos)."
      },
      {
        id: "b",
        text: "aumentar a excreção renal de sódio; e diabetes insipidus.",
        isCorrect: false,
        distractorRationale: "O balanço de sódio é regulado por aldosterona e ANP, não pela vitamina D."
      },
      {
        id: "c",
        text: "estimular a produção de hemácias na medula óssea; e anemia perniciosa.",
        isCorrect: false,
        distractorRationale: "A eritropoiese depende de eritropoietina e vitamina B12 (cuja carência causa anemia perniciosa)."
      },
      {
        id: "d",
        text: "promover a coagulação sanguínea vascular; e hemofilia adquirida.",
        isCorrect: false,
        distractorRationale: "A síntese hepática de fatores de coagulação depende da vitamina K."
      },
      {
        id: "e",
        text: "induzir a síntese de anticorpos secretórios IgA; e pelagra.",
        isCorrect: false,
        distractorRationale: "Pelagra é causada por deficiência de niacina (vitamina B3), caracterizada pelos 3 'Ds' (dermatite, diarreia e demência)."
      }
    ],
    detailedExplanation: {
      summary: "A vitamina D estimula a absorção intestinal de cálcio e a mineralização da matriz óssea; sua deficiência na infância acarreta raquitismo.",
      stepByStep: [
        "1. Luz solar UVB na pele converte 7-desidrocolesterol em pré-vitamina D3.",
        "2. Hidroxilação hepática (25-OH-D3) e hidroxilação renal (1,25-(OH)₂-D3, calcitriol).",
        "3. O calcitriol estimula os enterócitos a absorverem Ca²⁺ e PO₄³⁻.",
        "4. Sem cálcio suficiente no sangue, os ossos não se calcificam adequadamente, arqueando-se sob o peso corporal (raquitismo infantil)."
      ],
      coreConcept: "A vitamina D promove absorção de cálcio nos intestinos; sua carência causa raquitismo infantil.",
      trapWarning: "Vitamina D não é apenas alimentar; depende da exposição solar à radiação UVB na epiderme."
    },
    tags: ["bioquimica", "vitamina-d", "calcio", "raquitismo", "osso"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-019",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Vitaminas e Nutrição",
    subtopic: "Vitamina A, Rodopsina e Hemeralopia",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Organização Mundial da Saúde (OMS) mantém programas globais de suplementação com megadoses de vitamina A para crianças em regiões de extrema pobreza alimentar. A vitamina A (retinol e seus derivados, como o 11-cis-retinal) é um micronutriente lipossolúvel obtido na dieta através de carotenos presentes em vegetais alaranjados (cenoura, abóbora) ou retinol pré-formado em alimentos de origem animal (fígado, gemas de ovos).",
      source: "WORLD HEALTH ORGANIZATION. Guideline: Vitamin A supplementation in infants and children. Genebra: WHO, 2019."
    },
    prompt: "O primeiro sinal clínico característico da hipovitaminose A no ser humano é a",
    options: [
      {
        id: "a",
        text: "perda de audição por desmielinização dos nervos vestibulares cocleares.",
        isCorrect: false,
        distractorRationale: "A vitamina A não atua diretamente na bainha de mielina dos nervos auditivos."
      },
      {
        id: "b",
        text: "hemerolopia (cegueira noturna), decorrente da carência do pigmento visual rodopsina nos bastonetes.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O retinal combina-se com a proteína opsina na retina para formar a rodopsina, o fotopigmento presente nos bastonetes (células fotorreceptoras especializadas na visão em ambientes com baixa luminosidade). A carência de vitamina A diminui a regeneração da rodopsina, impedindo a visão adequada no crepúsculo e à noite (cegueira noturna ou hemeralopia), podendo progredir para ressecamento da córnea (xeroftalmia) e cegueira permanente."
      },
      {
        id: "c",
        text: "atrofia da tireoide por deficiência de iodo glandular.",
        isCorrect: false,
        distractorRationale: "A tireoide necessita do mineral iodo para sintetizar T3 e T4, não de vitamina A."
      },
      {
        id: "d",
        text: "hipercoagulação vascular com formação de trombos cerebrais.",
        isCorrect: false,
        distractorRationale: "A coagulação está relacionada à vitamina K e fatores plasmáticos."
      },
      {
        id: "e",
        text: "calcificação anômala dos tecidos cartilaginosos da traqueia.",
        isCorrect: false,
        distractorRationale: "A calcificação ectópica está associada a desbalanços de cálcio, PTH ou excesso crônico de vitamina D."
      }
    ],
    detailedExplanation: {
      summary: "A vitamina A é precursora do retinal, constituinte da rodopsina nos bastonetes; sua carência causa cegueira noturna (hemeralopia) e xeroftalmia.",
      stepByStep: [
        "1. Na retina, os bastonetes realizam a visão crepuscular em preto e branco.",
        "2. A molécula fotossensível é a rodopsina (Opsina + 11-cis-retinal).",
        "3. A luz incide e isomeriza o retinal em all-trans-retinal, gerando o sinal nervoso para o cérebro.",
        "4. Sem vitamina A da alimentação, a célula não regenera a rodopsina, provocando cegueira noturna."
      ],
      coreConcept: "A carência de vitamina A afeta os bastonetes oculares, causando cegueira noturna.",
      trapWarning: "Cegueira noturna (hemeralopia) é causada por falta de vitamina A; daltonismo é uma herança genética recessiva ligada ao cromossomo X."
    },
    tags: ["bioquimica", "vitamina-a", "visao", "cegueira-noturna", "bastonetes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-020",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Vitaminas e Nutrição",
    subtopic: "Vitamina B1 (Tiamina) e a Síndrome do Beribéri",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No final do século XIX, populações asiáticas que substituíram o arroz integral por arroz polido (branco e descascado) como base quase exclusiva de sua dieta passaram a apresentar quadros graves de fraqueza muscular periférica, perda de sensibilidade tátil nos membros, insuficiência cardíaca congestiva e edemas, síndrome clínica conhecida como beribéri.",
      source: "LOEFFELHOLZ, K. et al. History of Beriberi and Thiamine Discovery. Nutrition Reviews, 2017."
    },
    prompt: "Essa condição clínica deve-se à deficiência dietética crônica de tiamina (vitamina B1), um cofator enzimático essencial para o(a)",
    options: [
      {
        id: "a",
        text: "complexo da piruvato desidrogenase no metabolismo oxidativo de carboidratos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A tiamina pirofosfato (TPP) é a forma ativa da vitamina B1 e atua como coenzima indispensável para enzimas que realizam descarboxilações oxidativas, com destaque para a piruvato desidrogenase (que liga a glicólise ao ciclo de Krebs) e a alfa-cetoglutarato desidrogenase. Sem tiamina, neurônios e miócitos cardíacos (células altamente dependentes da oxidação aeróbica de glicose) entram em colapso bioenergético severo."
      },
      {
        id: "b",
        text: "transporte ativo de oxigênio gasoso pelos canais de aquaporina.",
        isCorrect: false,
        distractorRationale: "O oxigênio difunde-se livremente pela bicamada lipídica e aquaporinas transportam apenas moléculas de água."
      },
      {
        id: "c",
        text: "síntese de melanina por queratinócitos submetidos a radiação solar.",
        isCorrect: false,
        distractorRationale: "A síntese de melanina parte do aminoácido tirosina, via enzima tirosinase, sem envolvimento de tiamina."
      },
      {
        id: "d",
        text: "bloqueio da ação das bactérias da microbiota intestinal humana.",
        isCorrect: false,
        distractorRationale: "A tiamina não é um antibiótico para eliminar a microbiota benéfica."
      },
      {
        id: "e",
        text: "polimerização de monômeros de glicose em glicogênio hepático.",
        isCorrect: false,
        distractorRationale: "A síntese de glicogênio é mediada pela glicogênio sintase e utiliza nucleotídeos de uridina (UDP-glicose)."
      }
    ],
    detailedExplanation: {
      summary: "A tiamina (vitamina B1) forma o pirofosfato de tiamina (TPP), coenzima da piruvato desidrogenase necessária para a oxidação da glicose; sua falta causa o beribéri.",
      stepByStep: [
        "1. O arroz polido perde o farelo e a película rica em vitaminas do complexo B.",
        "2. A tiamina é cofator da piruvato desidrogenase (conversão de piruvato em acetil-CoA).",
        "3. Sem ela, a rota aeróbica é interrompida, gerando déficit energético catastrófico no cérebro e coração (beribéri úmido e seco)."
      ],
      coreConcept: "A carência de vitamina B1 (tiamina) compromete a piruvato desidrogenase, causando beribéri.",
      trapWarning: "Beribéri = B1 (tiamina). Pelagra = B3 (niacina). Escorbuto = Vitamina C. Raquitismo = Vitamina D."
    },
    tags: ["bioquimica", "vitamina-b1", "tiamina", "beriberi", "piruvato-desidrogenase"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-021",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Biomoléculas",
    subtopic: "Estrutura de Proteínas e Desnaturação",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A clara do ovo cru é uma solução aquosa viscosa e translúcida, rica na proteína globular ovalbumina. Quando aquecida em água fervente (100 °C) ou exposta a ácido clorídrico concentrado, a clara transforma-se rapidamente em uma massa sólida, opaca e insolúvel. Testes bioquímicos posteriores revelam que as ligações peptídicas covalentes mantêm-se intactas.",
      source: "MARZZOCO, A.; TORRES, B. B. Bioquímica Básica. 4. ed. Rio de Janeiro: Guanabara Koogan, 2015."
    },
    prompt: "Essa transformação físico-química da proteína (desnaturação) decorre diretamente da",
    options: [
      {
        id: "a",
        text: "quebra hidrolítica de todas as ligações peptídicas que unem os aminoácidos.",
        isCorrect: false,
        distractorRationale: "O texto afirma explicitamente que as ligações peptídicas permaneceram intactas; hidrólise peptídica ocorre na digestão enzimática, não na desnaturação simples."
      },
      {
        id: "b",
        text: "desestruturação das conformações secundária e terciária por rompimento de interações fracas e pontes de hidrogênio.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A desnaturação preserva a estrutura primária (sequência linear de aminoácidos unidos por ligações peptídicas covalentes), mas desfaz os dobramentos espaciais tridimensionais (estruturas secundária, terciária e quaternária) ao romper interações fracas (pontes de hidrogênio, interações hidrofóbicas e pontes salinas), expondo regiões hidrofóbicas que se agregam e precipitam."
      },
      {
        id: "c",
        text: "conversão das moléculas de aminoácidos em ácidos graxos de cadeia curta.",
        isCorrect: false,
        distractorRationale: "Proteínas não se transformam em ácidos graxos por mero cozimento térmico."
      },
      {
        id: "d",
        text: "eliminação de todas as moléculas de nitrogênio da estrutura polipeptídica.",
        isCorrect: false,
        distractorRationale: "O nitrogênio das aminas permanece firmemente ligado na estrutura primária."
      },
      {
        id: "e",
        text: "incorporação maciça de nucleotídeos de DNA na cadeia proteica desnaturada.",
        isCorrect: false,
        distractorRationale: "Não há ligação de DNA na desnaturação térmica da ovalbumina."
      }
    ],
    detailedExplanation: {
      summary: "A desnaturação proteica preserva a estrutura primária (ligações peptídicas), mas destrói as estruturas secundária e terciária mantidas por ligações de hidrogênio e hidrofóbicas.",
      stepByStep: [
        "1. Estrutura primária: sequência de aminoácidos (ligação peptídica covalente forte). Não é afetada por calor brando.",
        "2. Estrutura secundária (alfa-hélice, folhas-beta) e terciária (conformação 3D ativa): mantidas por pontes de hidrogênio, pontes de dissulfeto e interações hidrofóbicas.",
        "3. O calor agita as moléculas e rompe as interações fracas, fazendo a proteína perder seu formato nativo e se agregar."
      ],
      coreConcept: "A desnaturação altera a estrutura secundária e terciária da proteína, preservando a estrutura primária.",
      trapWarning: "Desnaturação NÃO quebra ligação peptídica! Quem quebra ligação peptídica é a digestão enzimática ou hidrólise ácida extrema prolongada."
    },
    tags: ["bioquimica", "proteinas", "desnaturacao", "ligacao-peptidica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-022",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Biomoléculas",
    subtopic: "Lipídios e Fluidez da Membrana Plasmática",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Espécies de peixes que habitam águas oceânicas glaciais da Antártica vivem em temperaturas próximas de -1,8 °C (ponto de congelamento da água salgada). Para que suas células sobrevivam e mantenham a integridade do transporte de nutrientes e a condução de impulsos nervosos, a membrana plasmática precisa permanecer em um estado fluido e flexível, impedindo a transição de fase para um estado rígido e cristalizado.",
      source: "HOCHACHKA, P. W.; SOMERO, G. N. Biochemical Adaptation: Mechanism and Process in Physiological Evolution. Oxford University Press, 2014."
    },
    prompt: "A adaptação evolutiva bioquímica na composição lipídica das membranas celulares desses animais polares consiste no aumento da proporção de",
    options: [
      {
        id: "a",
        text: "ácidos graxos saturados com cadeias hidrocarbonetadas perfeitamente lineares.",
        isCorrect: false,
        distractorRationale: "Ácidos graxos saturados empacotam-se rigidamente, favorecendo a solidificação da membrana em baixas temperaturas."
      },
      {
        id: "b",
        text: "ácidos graxos insaturados com duplas ligações na configuração cis.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. As insaturações do tipo cis criam dobras angulares rígidas (kinks) nas caudas hidrocarbonetadas dos fosfolipídios. Essas dobras impedem o empacotamento compacto e cristalino das caudas apolares vizinhas, reduzindo o ponto de fusão da bicamada e preservando a fluidez da membrana plasmática mesmo em temperaturas subzero."
      },
      {
        id: "c",
        text: "proteínas periféricas conjugadas a polissacarídeos de quitina.",
        isCorrect: false,
        distractorRationale: "Quitina é constituinte de exoesqueleto de artrópodes e parede de fungos, não de membranas de peixes."
      },
      {
        id: "d",
        text: "ácidos graxos hidrogenados trans com alto ponto de fusão.",
        isCorrect: false,
        distractorRationale: "Gorduras trans possuem cadeias lineares que se comportam como saturadas, aumentando a rigidez."
      },
      {
        id: "e",
        text: "triglicerídeos insolúveis incorporados diretamente ao mosaico fluido.",
        isCorrect: false,
        distractorRationale: "Triglicerídeos são lipídios de reserva energética (hidrofóbicos puros), não componentes estruturais da bicamada anfipática."
      }
    ],
    detailedExplanation: {
      summary: "Ácidos graxos insaturados possuem duplas ligações cis que dobram as caudas fosfolipídicas, impedindo o empacotamento compacto e garantindo fluidez celular no frio extremo.",
      stepByStep: [
        "1. No frio, as membranas tendem a se cristalizar e perder sua flexibilidade funcional.",
        "2. Ácidos graxos saturados são retos e empacotam-se fortemente (ex: manteiga é sólida à temperatura ambiente).",
        "3. Ácidos graxos insaturados cis possuem dobras que afastam os fosfolipídios vizinhos (ex: azeite é líquido).",
        "4. Ao aumentar fosfolipídios insaturados, os peixes do Ártico e da Antártica garantem mobilidade proteica e homeostase osmótica."
      ],
      coreConcept: "Ácidos graxos insaturados aumentam a fluidez das membranas celulares em baixas temperaturas.",
      trapWarning: "Dupla ligação CIS curva a cadeia carbônica e aumenta fluidez; dupla ligação TRANS deixa a cadeia reta e endurece a membrana."
    },
    tags: ["bioquimica", "lipideos", "membrana-plasmatica", "fluidez", "adaptacao-termica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-023",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Biomoléculas",
    subtopic: "Carboidratos Estruturais vs. Reserva (Ligações Alfa vs. Beta)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O amido vegetal e a celulose são polissacarídeos de altíssimo peso molecular constituídos exclusivamente por milhares de unidades repetitivas do mesmo monômero: a D-glicose. Contudo, enquanto o ser humano consome amido e obtém glicose energética de maneira rápida e eficiente, a celulose presente nas fibras vegetais passa pelo trato digestório humano sem ser absorvida, sendo excretada integralmente nas fezes.",
      source: "DEVLIN, T. M. Manual de Bioquímica com Correlações Clínicas. 7. ed. Edgard Blücher, 2011."
    },
    prompt: "A incapacidade fisiológica do organismo humano de utilizar a celulose como fonte calórica decorre do fato de que o sistema digestório humano",
    options: [
      {
        id: "a",
        text: "absorve apenas monossacarídeos compostos por cinco átomos de carbono (pentoses).",
        isCorrect: false,
        distractorRationale: "A glicose é uma hexose (6 carbonos) e é a principal fonte energética humana absorvida pelo intestino."
      },
      {
        id: "b",
        text: "não produz enzimas capazes de hidrolisar as ligações glicosídicas do tipo β(1→4) presentes na celulose.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O amido possui ligações glicosídicas α(1→4) e α(1→6), facilmente clivadas pela alfa-amilase salivar e pancreática. A celulose possui ligações glicosídicas β(1→4), cuja conformação espacial linear e fibrosa exige a enzima celulase (ausente em animais superiores, existindo apenas em microrganismos simbiontes, como as bactérias do rúmen de bovinos e protozoários de cupins)."
      },
      {
        id: "c",
        text: "possui pH estomacal básico que inativa todas as enzimas que digerem polímeros orgânicos.",
        isCorrect: false,
        distractorRationale: "O estômago é ácido (pH ~2), e o amido é digerido eficientemente na boca e duodeno."
      },
      {
        id: "d",
        text: "converte a celulose em colesterol antes da chegada ao estômago.",
        isCorrect: false,
        distractorRationale: "Celulose não é convertida em lipídios esteroides no trato digestivo."
      },
      {
        id: "e",
        text: "destrói as moléculas de glicose da celulose por fermentação alcoólica precoce.",
        isCorrect: false,
        distractorRationale: "Não há fermentação alcoólica no trato digestório de indivíduos saudáveis para quebrar celulose."
      }
    ],
    detailedExplanation: {
      summary: "Humanos digerem as ligações alfa-1,4 do amido, mas não possuem a celulase para quebrar as ligações beta-1,4 da celulose.",
      stepByStep: [
        "1. Amido: polímero de glicose com ligações glicosídicas α(1→4) (amilose e amilopectina). Clivado pela alfa-amilase.",
        "2. Celulose: polímero de glicose com ligações glicosídicas β(1→4). Formas lineares empilhadas por pontes de hidrogênio.",
        "3. Enzimas digestivas humanas têm especificidade estereoquímica: reconhecem conformação alfa, mas não a conformação beta da celulase.",
        "4. Por isso, a celulose atua como fibra alimentar insolúvel essencial para o trânsito intestinal, mas com valor calórico nulo para a nutrição humana direta."
      ],
      coreConcept: "A enzima humana alfa-amilase digere ligações alfa (amido/glicogênio), mas não cliva ligações beta (celulose).",
      trapWarning: "Ambos são feitos de glicose pura, mas a geometria da ligação química (alfa vs. beta) muda completamente a digestibilidade."
    },
    tags: ["bioquimica", "carboidratos", "amido", "celulose", "ligacao-glicosidica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-024",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Regulação Metabólica",
    subtopic: "Efeito Pasteur e Controle Alostérico da PFK-1",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1857, Louis Pasteur observou que culturas de leveduras consumiam glicose em ritmo até vinte vezes mais acelerado quando mantidas em recipientes hermeticamente vedados sem oxigênio do que quando submetidas a aeração vigorosa com ar atmosférico. Esse fenômeno, conhecido como Efeito Pasteur, reflete a sofisticada regulação alostérica da enzima-chave da via glicolítica, a fosfofrutoquinase-1 (PFK-1).",
      source: "NELSON, D. L.; COX, M. M. Princípios de Bioquímica de Lehninger. 7. ed. Artmed, 2019."
    },
    prompt: "A desaceleração drástica no consumo de glicose observada quando a célula passa do regime anaeróbico para o aeróbico é explicada bioquimicamente pelo fato de que a PFK-1 é",
    options: [
      {
        id: "a",
        text: "ativada pelo lactato, que só é sintetizado na presença de altas concentrações de oxigênio.",
        isCorrect: false,
        distractorRationale: "Lactato é sintetizado na AUSÊNCIA de oxigênio, não em sua abundância."
      },
      {
        id: "b",
        text: "inibida alostericamente por altas concentrações de ATP e citrato gerados pela respiração aeróbica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A respiração aeróbica completa rende cerca de 30 a 32 ATPs por glicose (muito mais eficiente que os míseros 2 ATPs da fermentação). Com alta carga energética celular, o excesso de ATP e citrato atua como efetor alostérico negativo na PFK-1, diminuindo sua afinidade pela frutose-6-fosfato e reduzindo o fluxo da glicólise por retroalimentação negativa (feedback negativo), poupando glicose."
      },
      {
        id: "c",
        text: "destruída pelo oxigênio atômico por meio de oxidação de seus aminoácidos essenciais.",
        isCorrect: false,
        distractorRationale: "A PFK-1 não é destruída pelo oxigênio; sua atividade é finamente regulada de modo reversível."
      },
      {
        id: "d",
        text: "estimulada pelo excesso de AMP e ADP que se acumulam durante a respiração mitocondrial.",
        isCorrect: false,
        distractorRationale: "Na respiração aeróbica eficiente, os níveis de AMP e ADP diminuem (virando ATP), e não aumentam."
      },
      {
        id: "e",
        text: "convertida em DNA polimerase para estimular a divisão mitótica das leveduras.",
        isCorrect: false,
        distractorRationale: "Enzimas metabólicas não se convertem em enzimas de replicação de ácidos nucleicos."
      }
    ],
    detailedExplanation: {
      summary: "Na respiração celular aeróbica, a alta produção de ATP e citrato inibe alostericamente a enzima PFK-1, desacelerando a glicólise (Efeito Pasteur).",
      stepByStep: [
        "1. Sem oxigênio (fermentação): 1 glicose gera apenas 2 ATPs. A célula precisa queimar 15 a 20 vezes mais glicose para manter o mesmo nível de energia.",
        "2. Com oxigênio (respiração): 1 glicose gera ~30 a 32 ATPs. O nível de ATP e citrato sobe.",
        "3. O ATP liga-se ao sítio alostérico inibitório da PFK-1, diminuindo a taxa de glicólise.",
        "4. Isso poupa as reservas de glicose e caracteriza o clássico Efeito Pasteur."
      ],
      coreConcept: "A PFK-1 é a enzima marcapasso da glicólise e é inibida por feedback negativo por ATP e citrato.",
      trapWarning: "ATP atua como substrato no sítio ativo e simultaneamente como inibidor alostérico no sítio regulatório quando em alta concentração."
    },
    tags: ["bioquimica", "efeito-pasteur", "pfk1", "regulacao-alosterica", "glicolise"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-BIOQ-025",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Metabolismo de Carboidratos",
    subtopic: "Glicogenólise vs. Glicogênese e Homeostase da Glicemia",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O fígado e os músculos esqueléticos são os principais órgãos de armazenamento de carboidratos no corpo humano na forma de glicogênio. Entre as refeições (durante o período de jejum fisiológico de 8 a 12 horas), o cérebro humano consome cerca de 120 gramas de glicose por dia de maneira ininterrupta, exigindo manutenção rigorosa da glicemia plasmática em torno de 70 a 99 mg/dL.",
      source: "HALL, J. E. Guyton and Hall Textbook of Medical Physiology. 14th ed. Elsevier, 2021."
    },
    prompt: "Durante esse período de jejum, a manutenção da glicose disponível na corrente sanguínea para abastecer os neurônios cerebrais depende principalmente da ação hormonal do",
    options: [
      {
        id: "a",
        text: "insulina, que estimula a glicogênio fosforilase hepática a liberar piruvato na veia porta.",
        isCorrect: false,
        distractorRationale: "A insulina é um hormônio anabólico secretado após refeições (pós-prandial) para reduzir a glicemia, não no jejum."
      },
      {
        id: "b",
        text: "glucagon, que estimula a glicogenólise hepática e a clivagem da glicose-6-fosfatase no fígado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Durante o jejum, as células alfa das ilhotas pancreáticas secretam glucagon em resposta à queda da glicemia. O glucagon atua nos hepatócitos ativando a glicogenólise (quebra do glicogênio em glicose-1-fosfato). No fígado, a enzima exclusiva glicose-6-fosfatase remove o grupo fosfato, permitindo que a glicose livre atravesse a membrana celular via transportadores GLUT-2 e caia no sangue para suprir o encéfalo."
      },
      {
        id: "c",
        text: "glucagon, que força as fibras musculares a exportarem sua glicose estocada para a corrente sanguínea.",
        isCorrect: false,
        distractorRationale: "O músculo não possui a enzima glicose-6-fosfatase; o glicogênio muscular é de uso estritamente privado do próprio músculo."
      },
      {
        id: "d",
        text: "paratormônio, que induz a fermentação láctica nas hemácias circulantes.",
        isCorrect: false,
        distractorRationale: "O paratormônio regula a calcemia (cálcio nos ossos e sangue), não o metabolismo de carboidratos."
      },
      {
        id: "e",
        text: "insulina, que promove a quebra de triacilgliceróis nos adipócitos para gerar amilose.",
        isCorrect: false,
        distractorRationale: "A insulina inibe a lipólise e estimula o armazenamento de gordura; amilose é um polissacarídeo vegetal."
      }
    ],
    detailedExplanation: {
      summary: "No jejum, o glucagon estimula a glicogenólise hepática e a glicose-6-fosfatase libera glicose livre no sangue para manter a glicemia encefálica.",
      stepByStep: [
        "1. Jejum fisiológico ⟹ Queda na glicemia ⟹ Liberação pancreática de Glucagon.",
        "2. O glucagon ativa a cascata de AMPc e proteína quinase A (PKA) nos hepatócitos.",
        "3. Ativação da glicogênio fosforilase: quebra de glicogênio em glicose-1-P ⟹ glicose-6-P.",
        "4. A enzima glicose-6-fosfatase (presente no fígado, mas ausente no músculo) remove o fosfato, liberando glicose livre no sangue."
      ],
      coreConcept: "O fígado mantém a glicemia de jejum via glicogenólise estimulada pelo glucagon.",
      trapWarning: "O glicogênio muscular NÃO serve para manter a glicemia do sangue porque o músculo não tem glicose-6-fosfatase!"
    },
    tags: ["bioquimica", "glucagon", "insulina", "glicemia", "glicogenio", "figado"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
