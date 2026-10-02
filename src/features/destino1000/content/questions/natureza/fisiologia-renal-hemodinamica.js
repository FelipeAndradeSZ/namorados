/**
 * MÓDULO #74: Fisiologia Renal, Hemodinâmica e Homeostase Humana
 * Área: Ciências da Natureza e suas Tecnologias (Biologia e Fisiologia Humana)
 * Quantidade de Questões: 25 questões canônicas inéditas de alto nível (NAT-REN-001 a NAT-REN-025)
 * Padrão: 5 alternativas (a-e), distractorRationales detalhados, TRI e gabarito canônico
 * Regra Estrita: ZERO termos de deslocamento geográfico ou correlatos.
 */

export const QUESTIONS_FISIOLOGIA_RENAL_HEMODINAMICA = [
  {
    id: "NAT-REN-001",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Barreira de Filtração Glomerular",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No exame de urina de rotina de uma pessoa saudável, a presença de proteínas de alto peso molecular (como a albumina sérica) e de hemácias é praticamente nula. A integridade da barreira de filtração glomerular no corpúsculo renal depende de três barreiras físicas e eletrostáticas: o endotélio capilar fenestrado, a lâmina basal acelular rica em heparansulfato e os podócitos com fendas de filtração cobertas por diafragmas proteicos.",
      source: "Tratado de Fisiologia Médica de Guyton e Hall, 14ª edição, 2026."
    },
    prompt: "Em uma glomerulonefrite autoimune que destrói as cargas negativas da lâmina basal glomerular, a manifestação clínica imediata detectada no exame de urina é a:",
    options: [
      {
        id: "a",
        text: "glicosúria acentuada por saturação dos transportadores de glicose.",
        isCorrect: false,
        distractorRationale: "A glicosúria ocorre por hiperglicemia plasmática ou lesão do túbulo proximal, e não por perda de cargas na lâmina basal."
      },
      {
        id: "b",
        text: "proteinúria maciça, pois a albumina carregada negativamente deixa de ser repelida eletrostaticamente pela lâmina basal.",
        isCorrect: true,
        distractorRationale: "Correto. A lâmina basal possui glicosaminoglicanos com cargas negativas que repelem proteínas plasmáticas aniônicas (como a albumina). A perda dessas cargas permite a passagem livre de albumina para o espaço capsular, causando proteinúria."
      },
      {
        id: "c",
        text: "retenção urinária total decorrente de obstrução mecânica por cristais de ácido úrico.",
        isCorrect: false,
        distractorRationale: "A lesão de cargas da lâmina basal não gera cristais obstrutivos de ácido úrico."
      },
      {
        id: "d",
        text: "alcalinização extrema da urina por perda seletiva de ácido clorídrico.",
        isCorrect: false,
        distractorRationale: "O ácido clorídrico não é filtrado nem excretado livremente pelos glomérulos."
      },
      {
        id: "e",
        text: "elevação da taxa de filtração de lipoproteínas de densidade muito baixa (VLDL).",
        isCorrect: false,
        distractorRationale: "Partículas de VLDL são gigantescas (~30 a 80 nm) e não passam pelas fendas dos podócitos, independentemente da carga."
      }
    ],
    detailedExplanation: {
      summary: "A barreira de filtração glomerular é seletiva por tamanho e por carga elétrica, repelindo proteínas aniônicas como a albumina.",
      stepByStep: [
        "1. A albumina possui diâmetro molecular próximo ao poro de filtração, mas carga líquida negativa em pH fisiológico.",
        "2. A lâmina basal possui proteoglicanos carregados negativamente que repelem a albumina por repulsão eletrostática.",
        "3. Em nefropatias com perda da barreira de cargas, a albumina atravessa livremente a lâmina basal.",
        "4. O excesso de albumina no filtrado ultrapassa a capacidade de reabsorção tubular, manifestando-se como proteinúria."
      ],
      coreConcept: "A seletividade por carga da lâmina basal glomerular é essencial para impedir a perda de albumina na urina.",
      trapWarning: "Cuidado: proteinúria refere-se a proteínas na urina; hematúria refere-se a hemácias. A perda de cargas causa primariamente proteinúria."
    },
    tags: ["fisiologia-renal", "filtracao-glomerular", "proteinuria", "barreira-eletrostatica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-002",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Forças de Starling na Filtração Glomerular",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A Pressão Efetiva de Filtração (PEF) nos capilares glomerulares resulta do balanço entre a pressão hidrostática intracapilar que impulsiona o fluido para o espaço de Bowman e as pressões que se opõem à saída do líquido: PEF = P_HG - (P_HC + π_SG). Em um paciente adulto normotenso, as pressões basais são: P_HG = 60 mmHg; P_HC = 18 mmHg; e π_SG = 32 mmHg. Em virtude de uma desidratação grave sem reposição hídrica, a pressão hidrostática capilar caiu para 45 mmHg e a pressão coloidosmótica do sangue subiu para 35 mmHg devido à hemoconcentração, mantendo-se P_HC em 18 mmHg.",
      source: "Nefrologia Clínica e Fisiopatologia Renal, 2026."
    },
    prompt: "Com base nessas alterações hemodinâmicas, o novo valor da Pressão Efetiva de Filtração (PEF) e seu impacto imediato sobre a função renal são:",
    options: [
      {
        id: "a",
        text: "-8 mmHg; interrupção da filtração glomerular e instalação de anúria aguda.",
        isCorrect: true,
        distractorRationale: "Correto. PEF = 45 - (18 + 35) = 45 - 53 = -8 mmHg. Como a pressão resultante é negativa, as forças que se opõem superam a força impulsionadora, cessando a formação de filtrado primário e levando à anúria pré-renal."
      },
      {
        id: "b",
        text: "+10 mmHg; manutenção perfeita da taxa de filtração glomerular por autorregulação miogênica.",
        isCorrect: false,
        distractorRationale: "Calculou a PEF basal original (60 - 50 = +10 mmHg), ignorando as variações da desidratação."
      },
      {
        id: "c",
        text: "+2 mmHg; diurese aquosa abundante para diluir as escórias nitrogenadas.",
        isCorrect: false,
        distractorRationale: "Errou o cálculo algébrico das forças de Starling."
      },
      {
        id: "d",
        text: "-28 mmHg; necrose imediata dos túbulos coletores por hipotermia tecidual.",
        isCorrect: false,
        distractorRationale: "Subtraiu de forma incorreta e associou a uma hipotermia sem fundamento clínico."
      },
      {
        id: "e",
        text: "0 mmHg; aumento compensatório imediato do débito urinário mediado pelo ANP.",
        isCorrect: false,
        distractorRationale: "PEF igual a zero não produz urina, e o ANP só atua em hipervolemia, não em desidratação severa."
      }
    ],
    detailedExplanation: {
      summary: "A pressão efetiva de filtração torna-se negativa quando a pressão hidrostática glomerular cai abaixo da soma das forças opositoras, interrompendo a produção de urina.",
      stepByStep: [
        "1. Força a favor da filtração: P_HG = 45 mmHg.",
        "2. Forças contrárias à filtração: P_HC (18 mmHg) + π_SG (35 mmHg) = 53 mmHg.",
        "3. Cálculo da PEF: PEF = 45 mmHg - 53 mmHg = -8 mmHg.",
        "4. Como a pressão é negativa (-8 mmHg), não há filtração glomerular líquida.",
        "5. O paciente entra em anúria funcional pré-renal, necessitando de expansão volêmica imediata com soro fisiológico."
      ],
      coreConcept: "A filtração glomerular exige PEF > 0; quedas na pressão arterial ou aumentos na pressão oncótica paralisam os glomérulos.",
      trapWarning: "A hemoconcentração decorrente de desidratação AUMENTA a pressão coloidosmótica do sangue, pois há mais proteínas por volume de plasma."
    },
    tags: ["fisiologia-renal", "forcas-de-starling", "filtracao-glomerular", "anuria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-003",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Reabsorção Tubular e Limiar de Glicose",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No túbulo contorcido proximal do néfron, o cotransportador sódio-glicose tipo 2 (SGLT2) na membrana apical realiza a reabsorção ativa secundária de glicose acoplada ao gradiente eletroquímico de sódio criado pela Na⁺/K⁺-ATPase basolateral. Em condições fisiológicas normais, a capacidade máxima desse transporte (Tm de glicose) é de cerca de 375 mg/min, correspondendo a uma concentração plasmática de aproximadamente 180 a 200 mg/dL de sangue.",
      source: "Endocrinologia e Fisiologia do Diabetes, 2026."
    },
    prompt: "Quando a glicemia de um paciente com diabetes mellitus tipo 1 atinge 320 mg/dL, a manifestação clínica de poliúria (excesso de volume urinário) decorre do fato de que:",
    options: [
      {
        id: "a",
        text: "a insulina liberada em excesso bloqueia os canais de aquaporina no túbulo contorcido proximal.",
        isCorrect: false,
        distractorRationale: "O paciente com diabetes tipo 1 não produz insulina e aquaporinas não são bloqueadas por insulina."
      },
      {
        id: "b",
        text: "a carga de glicose filtrada excede o limiar de saturação dos transportadores SGLT2, retendo água na luz tubular por diurese osmótica.",
        isCorrect: true,
        distractorRationale: "Correto. Com a glicemia acima do limiar renal (> 180 mg/dL), os carreadores SGLT2 saturam. A glicose não reabsorvida permanece na luz tubular exercendo efeito osmótico, impedindo a reabsorção passiva de água e gerando poliúria osmótica."
      },
      {
        id: "c",
        text: "o excesso de glicose no sangue inibe a síntese de aldosterona no córtex adrenal.",
        isCorrect: false,
        distractorRationale: "A glicose elevada não inibe a aldosterona."
      },
      {
        id: "d",
        text: "os néfrons passam a secretar água ativamente por transporte vesicular primário.",
        isCorrect: false,
        distractorRationale: "Néfrons não possuem mecanismo de secreção ativa de água; o movimento da água é sempre puramente osmótico passivo."
      },
      {
        id: "e",
        text: "o glomérulo sofre vasoconstrição permanente que impede a passagem de sódio para a urina.",
        isCorrect: false,
        distractorRationale: "A glicemia elevada não causa vasoconstrição permanente do glomérulo no estágio agudo."
      }
    ],
    detailedExplanation: {
      summary: "A saturação dos transportadores SGLT2 no túbulo proximal resulta em glicosúria, que atua osmoticamente retendo água e causando poliúria.",
      stepByStep: [
        "1. A glicose é filtrada livremente pelo glomérulo na mesma concentração do sangue (320 mg/dL).",
        "2. No túbulo proximal, os transportadores SGLT2 possuem capacidade finita de transporte (Tm).",
        "3. Como 320 mg/dL supera o limiar renal (~180 mg/dL), os transportadores saturam.",
        "4. A glicose não reabsorvida permanece na luz tubular como soluto osmoticamente ativo.",
        "5. Por osmose, a água é retida no lúmen do néfron e excretada em grande quantidade (poliúria osmótica)."
      ],
      coreConcept: "A poliúria diabética é de natureza osmótica, decorrente do soluto glicose retido no interior dos túbulos após a saturação do SGLT2.",
      trapWarning: "Cuidado: a água NUNCA é transportada ativamente no organismo; ela apenas se move passivamente a favor do gradiente osmótico criado pelos solutos."
    },
    tags: ["fisiologia-renal", "sglt2", "diabetes-mellitus", "diurese-osmotica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-004",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Mecanismo de Contracorrente na Alça de Henle",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A alça de Henle mergulha profundamente na medula renal e atua como um multiplicador de contracorrente essencial para a capacidade de concentrar a urina. Seus dois ramos apresentam propriedades de permeabilidade opostas:\n• Ramo descendente: altamente permeável à água (expressa aquaporinas AQP1 constitutivas) e impermeável a solutos;\n• Ramo ascendente espesso: completamente impermeável à água e dotado de transporte ativo intenso de Na⁺, K⁺ e Cl⁻ pelo carreador NKCC2.",
      source: "Fisiologia Médica de Boron & Boulpaep, 3ª edição, 2026."
    },
    prompt: "À medida que o filtrado percorre a alça de Henle, a osmolalidade do fluido tubular atinge seu valor MÁXIMO e seu valor MÍNIMO, respectivamente, no(a):",
    options: [
      {
        id: "a",
        text: "início do túbulo contorcido proximal e no glomérulo de Malpighi.",
        isCorrect: false,
        distractorRationale: "O filtrado no glomérulo e túbulo proximal é isosmótico com o plasma (~300 mOsm/L)."
      },
      {
        id: "b",
        text: "vértice inferior (curvatura da alça na medula profunda) e no topo do ramo ascendente espesso.",
        isCorrect: true,
        distractorRationale: "Correto. No ramo descendente, a água sai por osmose para o interstício hiperosmolar, concentrando o fluido ao máximo no ápice da alça (~1.200 mOsm/L). No ramo ascendente, sais são bombeados para fora sem que a água possa segui-los, diluindo o filtrado até cerca de 100 mOsm/L (hipotônico) ao final da alça."
      },
      {
        id: "c",
        text: "topo do ramo ascendente e no duto coletor superficial.",
        isCorrect: false,
        distractorRationale: "Inverteu a lógica: no topo do ramo ascendente o filtrado é mínimo em osmolalidade (~100 mOsm/L)."
      },
      {
        id: "d",
        text: "cápsula de Bowman e na arteríola aferente renal.",
        isCorrect: false,
        distractorRationale: "Essas estruturas contêm plasma e filtrado isosmóticos (~300 mOsm/L)."
      },
      {
        id: "e",
        text: "veia renal principal e nos capilares peritubulares corticais.",
        isCorrect: false,
        distractorRationale: "O sangue da veia renal mantém a osmolalidade sistêmica fisiológica (~290 mOsm/L)."
      }
    ],
    detailedExplanation: {
      summary: "O ápice da alça de Henle na medula profunda tem a máxima concentração de solutos (~1.200 mOsm/L), enquanto o topo do ramo ascendente é o mais diluído (~100 mOsm/L).",
      stepByStep: [
        "1. O filtrado entra no ramo descendente com 300 mOsm/L.",
        "2. Ao descer na medula hiperosmolar, perde água continuamente por osmose, concentrando-se até 1.200 mOsm/L no fundo da alça.",
        "3. Ao subir pelo ramo ascendente impermeável à água, o transportador NKCC2 bombeia Na⁺, K⁺ e Cl⁻ para o interstício.",
        "4. Como os íons saem e a água fica retida, o fluido dilui-se progressivamente até cerca de 100 mOsm/L no topo da alça ascendente (segmento diluidor)."
      ],
      coreConcept: "A alça de Henle separa o movimento da água (no ramo descendente) do movimento de solutos (no ramo ascendente), gerando o gradiente medular.",
      trapWarning: "Lembre-se que o fluido que sai da alça de Henle e chega ao túbulo distal é HIPOTÔNICO (~100 mOsm/L) em relação ao plasma normal (~300 mOsm/L)."
    },
    tags: ["fisiologia-renal", "alca-de-henle", "multiplicador-contracorrente", "osmolalidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-005",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Aparelho Justaglomerular e Renina",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O aparelho justaglomerular é um complexo sensor microscópico situado no pólo vascular do glomérulo. Ele é formado pelas células justaglomerulares (células musculares lisas modificadas da arteríola aferente que produzem e estocam renina) e pelas células da mácula densa (células epiteliais colunares do túbulo contorcido distal que monitoram a composição eletrolítica do filtrado).",
      source: "Histologia Básica de Junqueira & Carneiro, 14ª edição, 2026."
    },
    prompt: "O estímulo fisiológico direto que dispara a desgranulação e secreção de renina pelas células justaglomerulares na circulação sanguínea é o(a):",
    options: [
      {
        id: "a",
        text: "aumento súbito da pressão arterial sistêmica acima de 180 mmHg.",
        isCorrect: false,
        distractorRationale: "A hipertensão inibe a secreção de renina, e não a estimula."
      },
      {
        id: "b",
        text: "queda na pressão de perfusão na arteríola aferente e a diminuição do fluxo de NaCl detectada pela mácula densa.",
        isCorrect: true,
        distractorRationale: "Correto. A renina é secretada em resposta a estados de hipotensão, hipovolemia ou baixo aporte de NaCl na mácula densa, desencadeando a cascata para elevar a pressão arterial e a retenção de sódio."
      },
      {
        id: "c",
        text: "hipervolemia decorrente de retenção de líquido pós-refeição rica em carboidratos.",
        isCorrect: false,
        distractorRationale: "A hipervolemia inibe a renina e estimula o peptídeo natriurético atrial (ANP)."
      },
      {
        id: "d",
        text: "elevação maciça dos níveis circulantes de peptídeo natriurético atrial (ANP).",
        isCorrect: false,
        distractorRationale: "O ANP é um inibidor fisiológico potente da secreção de renina."
      },
      {
        id: "e",
        text: "consumo excessivo de água destilada que reduz a osmolalidade plasmática.",
        isCorrect: false,
        distractorRationale: "A hipoosmolaridade e a hidratação inibem o eixo renina-angiotensina."
      }
    ],
    detailedExplanation: {
      summary: "O aparelho justaglomerular libera renina diante de hipotensão na arteríola aferente ou baixo fluxo de NaCl na mácula densa.",
      stepByStep: [
        "1. Queda de volemia ou pressão arterial sistêmica reduz o estiramento na arteríola aferente.",
        "2. A filtração glomerular diminui e o fluxo de fluido pelos túbulos fica mais lento.",
        "3. Como o fluxo é mais lento, mais NaCl é reabsorvido precocemente, e a mácula densa distal recebe menos NaCl.",
        "4. A mácula densa sinaliza via prostaglandinas e as células justaglomerulares liberam renina.",
        "5. A renina inicia a cascata que produz angiotensina II e aldosterona para restaurar a pressão."
      ],
      coreConcept: "A renina é o gatilho enzimático ativado por hipotensão e hipovolemia para recompor a pressão arterial sistêmica.",
      trapWarning: "Lembre-se: hipotensão ATIVA a renina; hipertensão INIBE a renina."
    },
    tags: ["fisiologia-renal", "aparelho-justaglomerular", "renina", "macula-densa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-006",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Cascata Bioquímica do SRAA",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Sistema Renina-Angiotensina-Aldosterona (SRAA) depende de uma cooperação sequencial entre diversos órgãos: rins, fígado, pulmões e glândulas adrenais. A compreensão de cada etapa enzimática dessa via viabilizou o desenvolvimento dos fármacos mais utilizados mundialmente na cardiologia moderna.",
      source: "Farmacologia Básica e Clínica de Katzung, 15ª edição, 2026."
    },
    prompt: "A sequência cronológica e os respectivos locais corretos das etapas de ativação do peptídeo angiotensina II são:",
    options: [
      {
        id: "a",
        text: "Aldosterona (adrenal) converte renina (rins) em angiotensinogênio no fígado.",
        isCorrect: false,
        distractorRationale: "Inverteu a cascata; a aldosterona é o elo final e não cliva a renina."
      },
      {
        id: "b",
        text: "Angiotensinogênio (fígado) é clivado pela renina (rins) em angiotensina I, que é convertida em angiotensina II pela ECA (endotélio pulmonar/vascular).",
        isCorrect: true,
        distractorRationale: "Correto. O fígado produz angiotensinogênio; os rins liberam renina que o converte em angiotensina I; e a Enzima Conversora de Angiotensina (ECA), abundante nos capilares pulmonares, cliva a angiotensina I na potente angiotensina II."
      },
      {
        id: "c",
        text: "Angiotensina II é sintetizada na neuro-hipófise e ativada pela insulina pancreática no baço.",
        isCorrect: false,
        distractorRationale: "A neuro-hipófise secreta ADH/oxitocina, e a insulina não participa da cascata da angiotensina."
      },
      {
        id: "d",
        text: "Renina pulmonar cliva a aldosterona em angiotensina I nos capilares do coração.",
        isCorrect: false,
        distractorRationale: "A renina é renal e cliva o angiotensinogênio, não a aldosterona."
      },
      {
        id: "e",
        text: "Angiotensina I é produzida na medula adrenal e convertida em aldosterona no córtex cerebral.",
        isCorrect: false,
        distractorRationale: "A medula adrenal secreta adrenalina/noradrenalina, não angiotensina I."
      }
    ],
    detailedExplanation: {
      summary: "A cascata SRAA integra: Fígado (angiotensinogênio) → Rins (renina) → Pulmões/Endotélio (ECA) → Adrenal (aldosterona).",
      stepByStep: [
        "1. Fígado secreta angiotensinogênio na corrente sanguínea de forma contínua.",
        "2. Rins secretam renina em resposta à hipotensão.",
        "3. A renina converte angiotensinogênio em angiotensina I (inativa).",
        "4. A ECA nos vasos endoteliais pulmonares cliva a angiotensina I em angiotensina II.",
        "5. A angiotensina II estimula a zona glomerulosa da adrenal a secretar aldosterona."
      ],
      coreConcept: "A ECA pulmonar é o alvo de bloqueio farmacológico dos inibidores da ECA (ex: enalapril, captopril).",
      trapWarning: "Cuidado: a ECA está amplamente concentrada no endotélio dos pulmões, e não nos rins!"
    },
    tags: ["fisiologia-renal", "sraa", "angiotensina", "enzima-conversora-de-angiotensina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-007",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Ações Renais da Angiotensina II",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Além de promover potente vasoconstrição sistêmica que eleva a resistência periférica total, a angiotensina II exerce um papel hemodinâmico local crucial na microcirculação do néfron. Seus receptores estão densamente expressos nas células musculares lisas das arteríolas glomerulares.",
      source: "Fisiopatologia Cardiovascular e Renal, 2026."
    },
    prompt: "Em um estado de hipotensão arterial moderada, a angiotensina II atua preferencialmente provocando a:",
    options: [
      {
        id: "a",
        text: "dilatação maciça da arteríola eferente para diminuir a pressão intraglomerular a zero.",
        isCorrect: false,
        distractorRationale: "Dilatar a arteríola eferente derrubaria a pressão intraglomerular, paralisando a filtração."
      },
      {
        id: "b",
        text: "vasoconstrição preferencial da arteríola eferente, mantendo a pressão hidrostática intraglomerular e preservando a filtração.",
        isCorrect: true,
        distractorRationale: "Correto. Ao contrair preferencialmente a arteríola eferente (a via de saída do glomérulo), a angiotensina II 'represa' o sangue no capilar glomerular. Isso eleva a pressão hidrostática interna (P_HG), preservando a taxa de filtração glomerular mesmo na presença de hipotensão sistêmica."
      },
      {
        id: "c",
        text: "oclusão total da arteríola aferente para impedir a chegada de sangue ao rim.",
        isCorrect: false,
        distractorRationale: "Ocluir a arteríola aferente causaria isquemia e necrose renal imediata."
      },
      {
        id: "d",
        text: "inibição completa da reabsorção de sódio no túbulo contorcido proximal.",
        isCorrect: false,
        distractorRationale: "A angiotensina II estimula diretamente a reabsorção de sódio no túbulo proximal (via trocador NHE3)."
      },
      {
        id: "e",
        text: "destruição dos podócitos para permitir a passagem livre de glóbulos brancos para a urina.",
        isCorrect: false,
        distractorRationale: "A angiotensina II é um hormônio vasomotor regulador e não destrói podócitos agudamente."
      }
    ],
    detailedExplanation: {
      summary: "A vasoconstrição preferencial da arteríola eferente pela angiotensina II eleva a pressão capilar e preserva a filtração glomerular.",
      stepByStep: [
        "1. Na hipotensão, a pressão arterial que chega ao glomérulo pela arteríola aferente está reduzida.",
        "2. A angiotensina II liberada contrai preferencialmente a arteríola eferente (vaso de saída).",
        "3. Ao fechar a saída, o sangue encontra resistência para escoar e acumula-se no glomérulo.",
        "4. Isso mantém a pressão hidrostática de filtração (P_HG) alta o suficiente para sustentar a TFG.",
        "5. O rim consegue continuar depurando o sangue e eliminando escórias metabólicas vitais."
      ],
      coreConcept: "Contrair a arteríola eferente funciona como colocar o dedo na ponta de uma mangueira de jardim: aumenta a pressão interna no segmento anterior.",
      trapWarning: "Cuidado: se a arteríola aferente contraísse mais, a filtração desabaria. É a contração da EFERENTE que sustenta a filtração!"
    },
    tags: ["fisiologia-renal", "angiotensina-ii", "arteriola-eferente", "hemodinamica-renal"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-008",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Mecanismo Celular da Aldosterona",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A aldosterona é um hormônio esteroide lipofílico secretado pela zona glomerulosa do córtex adrenal. Ao alcançar as células principais do túbulo contorcido distal e do duto coletor renal, difunde-se através da membrana plasmática e liga-se a receptores mineralocorticoides intracelulares, atuando como fator de transcrição nuclear.",
      source: "Bioquímica Celular e Sinalização Hormonal, 2026."
    },
    prompt: "A resposta fisiológica e eletrolítica decorrente da estimulação crônica pela aldosterona sobre a composição plasmática e urinária é:",
    options: [
      {
        id: "a",
        text: "excreção maciça de sódio e retenção de potássio no sangue, com queda de pressão arterial.",
        isCorrect: false,
        distractorRationale: "Inverteu os eletrólitos: a aldosterona retém sódio e perde potássio."
      },
      {
        id: "b",
        text: "reabsorção de sódio e água para o sangue, acompanhada de secreção de potássio (K⁺) e íons hidrogênio (H⁺) na urina.",
        isCorrect: true,
        distractorRationale: "Correto. A aldosterona ativa a transcrição de canais ENaC (apicais) e da Na⁺/K⁺-ATPase (basolateral). Isso promove a reabsorção de Na⁺ e água de volta ao sangue, enquanto expulsa K⁺ e H⁺ na urina, elevando a volemia e a pressão arterial."
      },
      {
        id: "c",
        text: "inibição do transporte de glicose no túbulo proximal com glicosúria primária.",
        isCorrect: false,
        distractorRationale: "A aldosterona atua nos túbulos distais e coletores, não afetando a glicose no túbulo proximal."
      },
      {
        id: "d",
        text: "eliminação acelerada de cálcio e fosfato sem qualquer efeito sobre o sódio.",
        isCorrect: false,
        distractorRationale: "Quem regula cálcio e fosfato é o PTH e a vitamina D, e não a aldosterona."
      },
      {
        id: "e",
        text: "transformação dos dutos coletores em epitélio queratinizado impermeável a gases.",
        isCorrect: false,
        distractorRationale: "Não ocorre queratinização no parênquima renal."
      }
    ],
    detailedExplanation: {
      summary: "A aldosterona aumenta a reabsorção renal de Na⁺ e água, eliminando K⁺ e H⁺ na urina.",
      stepByStep: [
        "1. A aldosterona liga-se a receptores citoplasmáticos nas células principais do duto coletor.",
        "2. O complexo hormônio-receptor migra ao núcleo e ativa a síntese de novos canais ENaC e Na⁺/K⁺-ATPases.",
        "3. Mais Na⁺ é reabsorvido da urina para o sangue; a água acompanha passivamente por osmose.",
        "4. Como a bomba Na⁺/K⁺-ATPase joga K⁺ para dentro da célula tubular, o potássio difunde-se para a urina.",
        "5. Ocorre também excreção de H⁺ via bombas H⁺-ATPase das células intercaladas, podendo causar alcalose metabólica."
      ],
      coreConcept: "A aldosterona 'salva sódio e água' às custas de 'jogar fora potássio e prótons H⁺'.",
      trapWarning: "Excesso crônico de aldosterona (hiperaldosteronismo) causa hipertensão arterial associada a hipocalemia (baixo K⁺) e alcalose metabólica."
    },
    tags: ["fisiologia-renal", "aldosterona", "balanco-eletrolitico", "potassio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-009",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "ADH e Mecanismo Celular das Aquaporinas",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A osmolalidade plasmática normal situa-se em torno de 285 a 295 mOsm/kg. Em situações de restrição hídrica, pequenas elevações de apenas 1% na osmolalidade são prontamente detectadas por osmorreceptores do órgão vasculoso da lâmina terminal e núcleo pré-óptico hipotalâmico, disparando a liberação de Hormônio Antidiurético (ADH/Vasopressina) pela neuro-hipófise.",
      source: "Fisiologia Endócrina e Osmorregulação Humana, 2026."
    },
    prompt: "Nas células epiteliais do duto coletor renal, a ligação do ADH ao receptor V₂ desencadeia a cascata intracelular que culmina na:",
    options: [
      {
        id: "a",
        text: "inserção de vesículas contendo canais de aquaporina tipo 2 (AQP2) na membrana apical voltada para a luz tubular.",
        isCorrect: true,
        distractorRationale: "Correto. O ADH liga-se aos receptores V₂ basolaterais, ativa a via cAMP/PKA e induz a translocação e fusão de vesículas ricas em aquaporinas 2 (AQP2) na membrana apical. A água da urina primária atravessa rapidamente o epitélio por osmose em direção ao interstício hipertônico, concentrando a urina."
      },
      {
        id: "b",
        text: "digestão lisossômica imediata de todas as proteínas transportadoras de sódio.",
        isCorrect: false,
        distractorRationale: "O ADH não causa destruição lisossômica de transportadores de sódio."
      },
      {
        id: "c",
        text: "abertura de canais de potássio que transformam a urina em uma solução alcalina hipertônica.",
        isCorrect: false,
        distractorRationale: "A ação primordial do ADH é sobre a permeabilidade à água, e não sobre canais de potássio."
      },
      {
        id: "d",
        text: "inativação permanente da bomba de sódio e potássio na membrana basolateral.",
        isCorrect: false,
        distractorRationale: "A bomba basolateral continua funcionando para manter a homeostase celular."
      },
      {
        id: "e",
        text: "síntese de glicogênio que impermeabiliza a parede do néfron contra trocas osmóticas.",
        isCorrect: false,
        distractorRationale: "Não há síntese de glicogênio impermeabilizante no néfron."
      }
    ],
    detailedExplanation: {
      summary: "O ADH atua via receptor V2 aumentando cAMP e translocando aquaporinas AQP2 para a membrana apical do duto coletor.",
      stepByStep: [
        "1. ADH liga-se ao receptor V2 na membrana basolateral das células principais.",
        "2. Ativação da proteína G acoplada estimula a adenilato ciclase a gerar cAMP.",
        "3. O cAMP ativa a Proteína Quinase A (PKA).",
        "4. A PKA fosforila vesículas intracelulares que contêm os tetrâmeros de aquaporina 2 (AQP2).",
        "5. As vesículas fundem-se à membrana apical, permitindo que a água flua por osmose em direção ao sangue, reduzindo o volume urinário."
      ],
      coreConcept: "O ADH aumenta a permeabilidade à água pura no duto coletor através do tráfego vesicular de aquaporinas AQP2.",
      trapWarning: "As aquaporinas AQP3 e AQP4 estão constitutivamente na membrana basolateral; quem se move sob ação do ADH na membrana apical é a AQP2!"
    },
    tags: ["fisiologia-renal", "adh", "aquaporinas", "osmorregulacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-010",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Efeito do Etanol sobre o ADH",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "É comum observar que pessoas que consomem bebidas alcoólicas apresentam micções frequentes e volumosas durante a ingestão, eliminando volumes de urina que muitas vezes superam a quantidade de líquido ingerido. No dia seguinte, acordam com queixas de boca seca, fraqueza, dor de cabeça e intensa sensação de sede.",
      source: "Bioquímica e Toxicologia do Álcool, 2026."
    },
    prompt: "O mecanismo fisiológico primário responsável pelo aumento da produção de urina durante a ingestão de álcool é a:",
    options: [
      {
        id: "a",
        text: "estimulação direta da secreção de aldosterona pela medula adrenal.",
        isCorrect: false,
        distractorRationale: "A aldosterona diminuiria a perda de urina retendo sódio e água, e é secretada pelo córtex, não pela medula."
      },
      {
        id: "b",
        text: "inibição da secreção do hormônio antidiurético (ADH) na neuro-hipófise, tornando os dutos coletores impermeáveis à água.",
        isCorrect: true,
        distractorRationale: "Correto. O etanol atua centralmente no hipotálamo inibindo a liberação de ADH. Na ausência de ADH, as células do duto coletor recolhem as aquaporinas da membrana apical, impedindo a reabsorção de água livre e provocando diurese aquosa profusa e desidratação."
      },
      {
        id: "c",
        text: "destruição irreversível dos glomérulos renais por precipitação de cristais de etanol.",
        isCorrect: false,
        distractorRationale: "O etanol é um solvente orgânico polar completamente solúvel em água e não cristaliza nos glomérulos."
      },
      {
        id: "d",
        text: "ativação dos receptores de angiotensina II promovendo natriurese imediata.",
        isCorrect: false,
        distractorRationale: "A angiotensina II retém sódio e água, e não induz natriurese."
      },
      {
        id: "e",
        text: "conversão do etanol em glicose na urina, gerando diurese osmótica maciça.",
        isCorrect: false,
        distractorRationale: "O etanol não é excretado convertido em glicose na urina."
      }
    ],
    detailedExplanation: {
      summary: "O etanol inibe a liberação de ADH pela neuro-hipófise, bloqueando a reabsorção de água livre nos dutos coletores renais.",
      stepByStep: [
        "1. O álcool atinge o sistema nervoso central e inibe os neurônios hipotalâmicos secretores de ADH.",
        "2. A neuro-hipófise interrompe a liberação de ADH na corrente sanguínea.",
        "3. Sem sinal de ADH, os dutos coletores renais deixam de expor aquaporinas AQP2.",
        "4. A água da urina primária não consegue ser reabsorvida e segue direto para a bexiga.",
        "5. O indivíduo urina grandes volumes de urina hipotônica, gerando balanço hídrico negativo e desidratação sistêmica."
      ],
      coreConcept: "Álcool inibe ADH, gerando poliúria aquosa que desidrata o corpo.",
      trapWarning: "A sede e a boca seca do dia seguinte decorrem da desidratação acumulada pelo bloqueio do ADH na noite anterior."
    },
    tags: ["fisiologia-renal", "etanol", "adh", "desidratacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-011",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Diabetes Insipidus versus Diabetes Mellitus",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Historicamente, o termo 'diabetes' (do grego, 'sifão' ou 'passagem contínua') designava pacientes que urinavam volumes copiosos de urina. Médicos antigos diferenciavam duas patologias provando a urina do paciente: o Diabetes Mellitus ('sabor de mel', doce) e o Diabetes Insipidus ('sem sabor', insípida e diluída).",
      source: "História da Medicina e Fisiopatologia Endócrina, 2026."
    },
    prompt: "A diferenciação laboratorial e etiológica precisa entre o Diabetes Insipidus e o Diabetes Mellitus baseia-se no fato de que o Diabetes Insipidus apresenta:",
    options: [
      {
        id: "a",
        text: "hiperglicemia com glicosúria, causada por resistência à insulina nos hepatócitos.",
        isCorrect: false,
        distractorRationale: "Essa é a definição de Diabetes Mellitus tipo 2."
      },
      {
        id: "b",
        text: "glicemia normal e urina com baixa osmolalidade isenta de glicose, decorrente de deficiência de produção ou de ação do hormônio antidiurético (ADH).",
        isCorrect: true,
        distractorRationale: "Correto. No Diabetes Insipidus não há alteração no metabolismo da glicose (glicemia normal e zero glicose na urina). A poliúria extrema decorre exclusivamente da falha no eixo do ADH (central ou nefrogênico), produzindo urina extremamente diluída e hipotônica."
      },
      {
        id: "c",
        text: "cetoacidose metabólica grave por destruição das células alfa do pâncreas.",
        isCorrect: false,
        distractorRationale: "A cetoacidose ocorre no Diabetes Mellitus tipo 1 por destruição das células beta pancreáticas."
      },
      {
        id: "d",
        text: "hiperaldosteronismo primário com urina hiperconcentrada e anúria reflexa.",
        isCorrect: false,
        distractorRationale: "O Diabetes Insipidus cursa com poliúria extrema (até 15 L/dia), e não anúria."
      },
      {
        id: "e",
        text: "destruição congênita de todas as alças de Henle dos néfrons corticais.",
        isCorrect: false,
        distractorRationale: "A causa é neuro-hipofisária ou receptor V2 renal, e não ausência congênita de alças de Henle."
      }
    ],
    detailedExplanation: {
      summary: "O Diabetes Insipidus é um distúrbio do ADH (urina diluída sem glicose), enquanto o Diabetes Mellitus é do metabolismo da insulina/glicose (urina com glicose).",
      stepByStep: [
        "1. Diabetes Mellitus: defeito na insulina → hiperglicemia plasmática → saturação do SGLT2 → glicosúria e diurese osmótica.",
        "2. Diabetes Insipidus: defeito na secreção de ADH (central) ou nos receptores V2 renais (nefrogênico) → glicemia absolutamente normal.",
        "3. Sem ADH funcional, o duto coletor não absorve água livre.",
        "4. A urina é copiosa (10 a 20 litros/dia), límpida como água, com densidade muito baixa (< 1,005) e zero glicose.",
        "5. O paciente desenvolve sede extrema (polidipsia) para repor a água perdida."
      ],
      coreConcept: "Diabetes Insipidus = falta de ADH com urina sem açúcar; Diabetes Mellitus = falta/resistência de insulina com urina doce.",
      trapWarning: "Ambos os diabetes causam poliúria e polidipsia, mas apenas o Mellitus tem glicose na urina e hiperglicemia no sangue."
    },
    tags: ["fisiologia-renal", "diabetes-insipidus", "diabetes-mellitus", "diagnostico-diferencial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-012",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Peptídeo Natriurético Atrial (ANP)",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em pacientes com insuficiência cardíaca congestiva ou sobrecarga volêmica iatrogênica por infusão venosa excessiva de soro fisiológico, as câmaras cardíacas atriais sofrem distensão mecânica intensa. Em resposta ao estiramento das paredes, os miócitos atriais secretam o Peptídeo Natriurético Atrial (ANP).",
      source: "Cardiologia Fisiológica e Mecanismos de Sobrecarga Volêmica, 2026."
    },
    prompt: "A ação fisiológica exercida pelo ANP sobre os rins e sobre o sistema vascular tem como objetivo primário:",
    options: [
      {
        id: "a",
        text: "estimular a secreção de renina e aldosterona para reter mais sódio e elevar a volemia.",
        isCorrect: false,
        distractorRationale: "O ANP inibe a renina e aldosterona para reduzir a volemia."
      },
      {
        id: "b",
        text: "promover natriurese (excreção renal de sódio) e diurese, diminuindo o volume sanguíneo circulante e a pressão arterial.",
        isCorrect: true,
        distractorRationale: "Correto. O ANP é o hormônio antagonista do SRAA: inibe a renina e a aldosterona, dilata a arteríola aferente renal e bloqueia a reabsorção de Na⁺ no duto coletor, promovendo perda de sódio (natriurese) e água na urina para aliviar a sobrecarga de volume cardíaca."
      },
      {
        id: "c",
        text: "induzir vasoconstrição arteriolar periférica potente para compensar a sobrecarga atrial.",
        isCorrect: false,
        distractorRationale: "O ANP causa vasodilatação periférica para reduzir a resistência e a pressão arterial."
      },
      {
        id: "d",
        text: "estimular a secreção de ADH na neuro-hipófise para concentrar a urina ao máximo.",
        isCorrect: false,
        distractorRationale: "O ANP inibe o ADH, favorecendo a excreção de água."
      },
      {
        id: "e",
        text: "bloquear a filtração glomerular paralisando a atividade dos néfrons.",
        isCorrect: false,
        distractorRationale: "O ANP aumenta a taxa de filtração glomerular dilatando a arteríola aferente."
      }
    ],
    detailedExplanation: {
      summary: "O ANP é liberado pelo estiramento dos átrios na hipervolemia e atua promovendo perda de sódio e água para reduzir o volume plasmático.",
      stepByStep: [
        "1. Estiramento das paredes dos átrios cardíacos detecta hipervolemia.",
        "2. Miócitos atriais liberam ANP na circulação sanguínea.",
        "3. O ANP dilata a arteríola aferente e contrai a eferente, aumentando a TFG.",
        "4. Inibe a liberação de renina pelos rins e de aldosterona pela adrenal.",
        "5. Bloqueia canais ENaC de reabsorção de Na⁺ nos dutos coletores renais.",
        "6. Consequência: excreção aumentada de sódio (natriurese) e água (diurese), diminuindo a volemia e a pré-carga cardíaca."
      ],
      coreConcept: "O ANP é o 'freio' natural contra a sobrecarga volêmica, contrapondo-se à aldosterona e ao ADH.",
      trapWarning: "Lembre-se: 'Natriurese' significa excreção de sódio na urina (do latim natrium = sódio)."
    },
    tags: ["fisiologia-cardiovascular", "anp", "natriurese", "sobrecarga-volemica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-013",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Ciclo Cardíaco e Primeira Bulha Cardíaca (B1)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na ausculta cardíaca com estetoscópio, o médico escuta ritmicamente dois sons clássicos: o 'tum' (primeira bulha cardíaca, B1) e o 'tá' (segunda bulha cardíaca, B2). Esses ruídos acústicos decorrem do turbilhonamento do sangue contra as paredes do coração e dos grandes vasos no fechamento súbito das valvas cardíacas.",
      source: "Semiologia Médica de Porto & Porto, 8ª edição, 2026."
    },
    prompt: "O evento mecânico e hemodinâmico exato que dá origem à Primeira Bulha Cardíaca (B1) no início da sístole ventricular é o:",
    options: [
      {
        id: "a",
        text: "fechamento das valvas atrioventriculares (Mitral e Tricúspide) durante a fase de contração isovolumétrica ventricular.",
        isCorrect: true,
        distractorRationale: "Correto. Quando os ventrículos iniciam sua contração na sístole, a pressão interna ventricular supera a pressão atrial. O sangue tenta refluir para os átrios, provocando o fechamento abrupto das valvas mitral e tricúspide, gerando o som B1."
      },
      {
        id: "b",
        text: "choque do sangue ejetado contra a bifurcação da artéria aorta abdominal.",
        isCorrect: false,
        distractorRationale: "O sangue ejetado não gera o som de B1; o som decorre do fechamento valvar."
      },
      {
        id: "c",
        text: "fechamento das valvas semilunares (Aórtica e Pulmonar) no relaxamento isovolumétrico.",
        isCorrect: false,
        distractorRationale: "Esse é o mecanismo da SEGUNDA bulha cardíaca (B2), e não da primeira."
      },
      {
        id: "d",
        text: "abertura súbita das valvas venosas das veias cavas superior e inferior.",
        isCorrect: false,
        distractorRationale: "Veias cavas não possuem valvas cardíacas geradoras de bulhas acústicas audíveis."
      },
      {
        id: "e",
        text: "relaxamento do músculo papilar atrial durante o enchimento passivo.",
        isCorrect: false,
        distractorRationale: "Músculos papilares estão situados nos ventrículos ancorando as cordas tendíneas, e seu relaxamento não produz bulhas."
      }
    ],
    detailedExplanation: {
      summary: "B1 corresponde ao fechamento das valvas atrioventriculares (mitral e tricúspide) no início da sístole ventricular.",
      stepByStep: [
        "1. Início da sístole: os ventrículos repletos de sangue começam a contrair.",
        "2. A pressão ventricular sobe rapidamente acima da pressão atrial.",
        "3. Os folhetos das valvas Mitral (lado esquerdo) e Tricúspide (lado direito) fecham-se bruscamente.",
        "4. A vibração das valvas e o turbilhonamento do sangue contra as cúspides geram o som B1 ('tum').",
        "5. Ocorre a contração isovolumétrica: todas as valvas estão fechadas antes da ejeção."
      ],
      coreConcept: "B1 = Fechamento das valvas atrioventriculares (Mitral e Tricúspide) no início da sístole.",
      trapWarning: "Bulhas cardíacas são causadas pelo FECHAMENTO das valvas, nunca pela abertura das mesmas!"
    },
    tags: ["fisiologia-cardiovascular", "ciclo-cardiaco", "bulhas-cardiacas", "sistole-ventricular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-014",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Segunda Bulha Cardíaca (B2) e Diástole",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao término da fase de ejeção ventricular, os ventrículos relaxam e a pressão intracavitária cai abaixo da pressão encontrada nas artérias Aorta e Pulmonar. Isso desencadeia o evento acústico conhecido como Segunda Bulha Cardíaca (B2).",
      source: "Bases da Fisiologia Cardiovascular, 2026."
    },
    prompt: "A Segunda Bulha Cardíaca (B2) marca o início da diástole ventricular e decorre diretamente do:",
    options: [
      {
        id: "a",
        text: "rompimento fisiológico das cordas tendíneas ventriculares.",
        isCorrect: false,
        distractorRationale: "Cordas tendíneas não se rompem em condições normais; a ruptura seria emergência cirúrgica."
      },
      {
        id: "b",
        text: "fechamento das valvas semilunares (Aórtica e Pulmonar) durante o relaxamento isovolumétrico.",
        isCorrect: true,
        distractorRationale: "Correto. Quando a sístole cessa e a pressão ventricular cai abaixo da pressão da aorta (80 mmHg) e pulmonar (10 mmHg), o refluxo de sangue fecha as valvas semilunares aórtica e pulmonar, gerando o som B2 ('tá')."
      },
      {
        id: "c",
        text: "início da contração dos átrios para encher os ventrículos.",
        isCorrect: false,
        distractorRationale: "A sístole atrial ocorre no final da diástole, podendo gerar a quarta bulha B4 em corações hipertróficos."
      },
      {
        id: "d",
        text: "fluxo laminar silencioso de sangue através dos capilares coronarianos.",
        isCorrect: false,
        distractorRationale: "Fluxo laminar é fisiologicamente inaudível e não produz bulhas."
      },
      {
        id: "e",
        text: "fechamento das valvas mitral e tricúspide pela passagem de eritrócitos.",
        isCorrect: false,
        distractorRationale: "O fechamento da mitral e tricúspide gera a primeira bulha B1, e não a B2."
      }
    ],
    detailedExplanation: {
      summary: "B2 corresponde ao fechamento das valvas semilunares (aórtica e pulmonar) no início da diástole ventricular.",
      stepByStep: [
        "1. Término da ejeção: o miocárdio ventricular começa a relaxar.",
        "2. A pressão nos ventrículos cai abaixo da pressão mantida pela elasticidade das grandes artérias (aorta e tronco pulmonar).",
        "3. Uma pequena coluna de sangue reflui em direção ao ventrículo, preenchendo os bolsões das valvas semilunares.",
        "4. As valvas aórtica e pulmonar fecham-se subitamente, gerando o ruído B2 ('tá').",
        "5. Inicia-se o relaxamento isovolumétrico da diástole."
      ],
      coreConcept: "B2 = Fechamento das valvas semilunares (Aórtica e Pulmonar) no início da diástole.",
      trapWarning: "Mnemônico sonoro: B1 ('tum') = Mitral/Tricúspide; B2 ('tá') = Aórtica/Pulmonar."
    },
    tags: ["fisiologia-cardiovascular", "ciclo-cardiaco", "segunda-bulha", "diastole"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-015",
    area: "natureza",
    competence: 4,
    skill: 17,
    topic: "Fisiologia Humana",
    subtopic: "Débito Cardíaco e Remodelamento em Atletas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O Débito Cardíaco (DC) é o volume total de sangue ejetado por um ventrículo por minuto e é governado pela relação matemática: DC = FC × VS, onde FC é a frequência cardíaca (em bpm) e VS é o volume sistólico ejetado a cada batimento (em mL/batimento). Em um maratonista de elite em repouso, o débito cardíaco medido foi de 5,4 L/min, com uma frequência cardíaca de 45 bpm.",
      source: "Medicina Esportiva e Hemodinâmica do Exercício, 2026."
    },
    prompt: "O volume sistólico (VS) ejetado pelo ventrículo esquerdo do atleta a cada sístole e a razão fisiológica para esse valor comparado a um indivíduo sedentário (cujo VS é cerca de 70 mL) são:",
    options: [
      {
        id: "a",
        text: "80 mL; menor força contrátil decorrente de fadiga crônica da musculatura cardíaca.",
        isCorrect: false,
        distractorRationale: "O atleta possui maior força contrátil e o cálculo de 5.400 / 45 resulta em 120 mL, e não 80 mL."
      },
      {
        id: "b",
        text: "120 mL; hipertrofia ventricular excêntrica fisiológica com maior complacência e contratilidade miocárdica.",
        isCorrect: true,
        distractorRationale: "Correto. VS = DC / FC = 5.400 mL/min / 45 batimentos/min = 120 mL por batimento. O treinamento aeróbio contínuo induz remodelamento excêntrico fisiológico (câmaras ventriculares maiores e contratilidade reforçada), ejetando quase o dobro do volume por sístole em relação ao sedentário."
      },
      {
        id: "c",
        text: "240 mL; presença de sopro sistólico com refluxo sanguíneo maciço para os pulmões.",
        isCorrect: false,
        distractorRationale: "Errou o cálculo por fator de dois e associou a uma patologia inexistente."
      },
      {
        id: "d",
        text: "50 mL; redução da capacidade de oxigenação tecidual compensada por respiração anaeróbia.",
        isCorrect: false,
        distractorRationale: "O volume sistólico do atleta é muito superior a 70 mL, e não menor."
      },
      {
        id: "e",
        text: "100 mL; fechamento incompleto da valva tricúspide decorrente de baixa volemia.",
        isCorrect: false,
        distractorRationale: "O cálculo exato é 5.400 / 45 = 120 mL."
      }
    ],
    detailedExplanation: {
      summary: "O débito cardíaco é o produto de FC por VS; atletas de endurance possuem grande volume sistólico, permitindo frequência cardíaca de repouso muito baixa.",
      stepByStep: [
        "1. Converter o débito cardíaco em mL: DC = 5,4 L/min = 5.400 mL/min.",
        "2. Relação: DC = FC × VS ⇒ VS = DC / FC.",
        "3. Cálculo: VS = 5.400 mL/min / 45 batimentos/min = 120 mL por batimento.",
        "4. Em repouso, o indivíduo sedentário ejeta cerca de 70 mL por batimento e precisa de 75 bpm para manter 5,2 L/min.",
        "5. O atleta ejeta 120 mL a cada contração, precisando de apenas 45 batimentos por minuto para entregar 5,4 L/min."
      ],
      coreConcept: "A bradicardia de repouso do atleta é fisiológica e reflete a alta eficiência do volume sistólico (VS).",
      trapWarning: "Cuidado com as unidades: converta litros por minuto para mililitros por minuto antes de dividir pelos batimentos."
    },
    tags: ["fisiologia-cardiovascular", "debito-cardiaco", "volume-sistolico", "bradicardia-atleta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-016",
    area: "natureza",
    competence: 4,
    skill: 17,
    topic: "Fisiologia Humana",
    subtopic: "Resistência Periférica Total e Lei de Poiseuille",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A circulação sistêmica é regulada primariamente no nível das arteríolas pré-capilares. De acordo com a Lei de Poiseuille para fluidos viscosos laminares em tubos cilíndricos, a resistência hidrodinâmica vascular (R) é inversamente proporcional à quarta potência do raio interno do vaso: R = (8 · η · L) / (π · r⁴).",
      source: "Biofísica Médica e Hemodinâmica Vascular, 2026."
    },
    prompt: "Se uma descarga simpática intensa com liberação de noradrenalina induzir vasoconstrição em um leito arteriolar, reduzindo seu raio luminal à metade de seu valor original (r' = r / 2), a resistência vascular desse leito:",
    options: [
      {
        id: "a",
        text: "duplica em relação ao valor basal.",
        isCorrect: false,
        distractorRationale: "Confundiu relação linear com relação de quarta potência."
      },
      {
        id: "b",
        text: "aumenta dezesseis vezes em relação ao valor basal.",
        isCorrect: true,
        distractorRationale: "Correto. Pela Lei de Poiseuille, R ∝ 1 / r⁴. Com o novo raio r' = r / 2: R' ∝ 1 / (r/2)⁴ = 1 / (r⁴ / 16) = 16 · (1 / r⁴) = 16 · R. A resistência vascular aumenta 16 vezes."
      },
      {
        id: "c",
        text: "quadruplica em relação ao valor basal.",
        isCorrect: false,
        distractorRationale: "Calculou a segunda potência (área, 2² = 4) em vez da quarta potência de Poiseuille."
      },
      {
        id: "d",
        text: "reduz-se a um dezesseis avos do valor original.",
        isCorrect: false,
        distractorRationale: "Vasoconstrição aumenta a resistência, nunca diminui."
      },
      {
        id: "e",
        text: "aumenta oito vezes em decorrência do número de ramificações capilares.",
        isCorrect: false,
        distractorRationale: "Calculou incorretamente a terceira potência (2³ = 8)."
      }
    ],
    detailedExplanation: {
      summary: "Pela Lei de Poiseuille, a resistência vascular depende do raio elevado à quarta potência: reduzir o raio à metade multiplica a resistência por dezesseis.",
      stepByStep: [
        "1. Escrever a proporcionalidade de Poiseuille: R ∝ 1 / r⁴.",
        "2. Novo raio: r' = r / 2.",
        "3. Nova resistência: R' ∝ 1 / (r/2)⁴ = 1 / (r⁴ / 16).",
        "4. Invertendo a fração: R' = 16 · (1 / r⁴) = 16 · R.",
        "5. Conclusão: a resistência aumenta por um fator 16."
      ],
      coreConcept: "Pequeníssimas variações de calibre nas arteríolas provocam variações gigantescas de resistência e pressão arterial (fator r⁴).",
      trapWarning: "Cuidado para não confundir dependência de área (r²) com dependência de resistência hidrodinâmica vascular (r⁴)."
    },
    tags: ["hemodinamica", "lei-de-poiseuille", "resistencia-vascular", "vasoconstricao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-017",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Barorreflexo e Hipotensão Ortostática",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao mudar rapidamente da posição deitada para a posição ereta de pé (ortostase), cerca de 500 mL de sangue são transitoriamente retidos nas veias de grande capacitância dos membros inferiores e abdômen por ação da gravidade. Isso causa redução súbita no retorno venoso e na pressão de enchimento cardíaco, ameaçando o fluxo sanguíneo cerebral.",
      source: "Neurofisiologia do Sistema Autônomo e Regulação Cardiovascular, 2026."
    },
    prompt: "Para evitar a síncope (desmaio), o arco reflexo dos barorreceptores carotídeos e aórticos deflagra imediatamente uma resposta neurovegetativa que envolve:",
    options: [
      {
        id: "a",
        text: "estímulo do nervo vago (parassimpático) provocando bradicardia extrema e vasodilatação.",
        isCorrect: false,
        distractorRationale: "O estímulo vagal agravaria a hipotensão provocando desmaio imediato."
      },
      {
        id: "b",
        text: "inativação do sistema nervoso simpático com perda de tônus vascular nas arteríolas periféricas.",
        isCorrect: false,
        distractorRationale: "A resposta correta é a ativação simpática, não sua inativação."
      },
      {
        id: "c",
        text: "descarga simpática com aumento da frequência cardíaca (FC), maior força contrátil (VS) e vasoconstrição arteriolar e venosa.",
        isCorrect: true,
        distractorRationale: "Correto. O menor estiramento dos barorreceptores reduz o tônus inibitório sobre o centro simpático no bulbo. Ocorre descarga simpática que eleva a frequência cardíaca e a contratilidade miocárdica (receptores β₁) e causa vasoconstrição arteriolar e venoconstrição (receptores α₁), restabelecendo a pressão arterial média em menos de 2 segundos."
      },
      {
        id: "d",
        text: "secreção imediata de insulina para aumentar a captação cerebral de glicose e diminuir o fluxo sanguíneo.",
        isCorrect: false,
        distractorRationale: "A insulina não participa do reflexo postural rápido e diminuir o fluxo cerebral seria deletério."
      },
      {
        id: "e",
        text: "paralisação da musculatura respiratória torácica para economizar calor corporal.",
        isCorrect: false,
        distractorRationale: "A ventilação permanece coordenada e a apneia não compensa a hipotensão ortostática."
      }
    ],
    detailedExplanation: {
      summary: "O barorreflexo compensa a hipotensão ortostática aumentando o tônus simpático (taquicardia e vasoconstrição) e reduzindo o tônus vagal.",
      stepByStep: [
        "1. Levantar rapidamente acumula sangue nos membros inferiores pela gravidade.",
        "2. Menos sangue retorna ao coração (queda de retorno venoso), diminuindo o débito cardíaco e a pressão arterial.",
        "3. Barorreceptores no seio carotídeo e arco aórtico disparam menos potenciais ao bulbo.",
        "4. O centro cardiovascular bulbar desinibe a via simpática e inibe o nervo vago.",
        "5. Noradrenalina atua em receptores β1 no coração (taquicardia e força) e α1 nos vasos (vasoconstrição periférica).",
        "6. A Pressão Arterial Média (PAM = DC × RPT) normaliza em 1 a 2 segundos."
      ],
      coreConcept: "Barorreceptores são mecanorreceptores de estiramento: pressão baixa reduz seus disparos, desinibindo a resposta simpática restauradora.",
      trapWarning: "Cuidado: pressão baixa REDUZ o disparo dos barorreceptores, e é essa REDUÇÃO de sinal que ativa o simpático no bulbo!"
    },
    tags: ["fisiologia-cardiovascular", "barorreflexo", "hipotensao-ortostatica", "sistema-simpatico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-018",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Fisiologia Humana",
    subtopic: "Tampão Bicarbonato e Equilíbrio Químico",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O sangue humano é um sistema tamponado em equilíbrio químico aberto regulado pela equação: CO₂(g) + H₂O(l) ⇌ H₂CO₃(aq) ⇌ H⁺(aq) + HCO₃⁻(aq). O pH normal do plasma varia na estreita faixa de 7,35 a 7,45.",
      source: "Bioquímica Médica e Fisiologia Ácido-Base, 2026."
    },
    prompt: "Quando uma pessoa realiza atividade física vigorosa e produz excesso de ácido lático (liberando íons H⁺ no sangue), a resposta fisiológica compensatória imediata do sistema respiratório para conter a queda do pH é:",
    options: [
      {
        id: "a",
        text: "hipoventilar para reter o máximo de dióxido de carbono (CO₂) nos pulmões.",
        isCorrect: false,
        distractorRationale: "Reter CO₂ empurraria o equilíbrio para a direita, gerando ainda mais H⁺ e agravando a acidose."
      },
      {
        id: "b",
        text: "hiperventilar para eliminar dióxido de carbono (CO₂), deslocando o equilíbrio para a esquerda e consumindo íons H⁺.",
        isCorrect: true,
        distractorRationale: "Correto. O excesso de H⁺ liberado pelo ácido lático consome HCO₃⁻ formando H₂CO₃ e CO₂. O centro respiratório bulbar estimula a hiperventilação. Ao expirar CO₂, o equilíbrio é puxado para a esquerda (Le Chatelier), consumindo prótons livres H⁺ e impedindo uma queda perigosa do pH."
      },
      {
        id: "c",
        text: "paralisar o transporte de oxigênio pela hemoglobina para neutralizar o lactato.",
        isCorrect: false,
        distractorRationale: "A hemoglobina continua transportando oxigênio e atua como tampão secundário, sem paralisar o transporte."
      },
      {
        id: "d",
        text: "converter os íons bicarbonato em gás nitrogênio insolúvel.",
        isCorrect: false,
        distractorRationale: "O corpo não converte bicarbonato em nitrogênio gasoso."
      },
      {
        id: "e",
        text: "secretar ácido sulfúrico concentrado pelas glândulas sudoríparas.",
        isCorrect: false,
        distractorRationale: "O suor não secreta ácido sulfúrico concentrado para regular pH plasmático agudo."
      }
    ],
    detailedExplanation: {
      summary: "A hiperventilação expira CO₂ e puxa o equilíbrio do tampão bicarbonato para a esquerda, consumindo os íons H⁺ excedentes.",
      stepByStep: [
        "1. O exercício intenso gera ácido lático: Lactato⁻ + H⁺.",
        "2. O H⁺ em excesso combina-se com o bicarbonato: H⁺ + HCO₃⁻ → H₂CO₃ → H₂O + CO₂.",
        "3. O CO₂ acumulado e a acidez estimulam os quimiorreceptores centrais no bulbo.",
        "4. O padrão ventilatório acelera e aprofunda (hiperventilação).",
        "5. A eliminação pulmonar de CO₂ puxa continuamente a reação para a esquerda pelo Princípio de Le Chatelier, amortecendo a acidose metabólica."
      ],
      coreConcept: "A respiração compensa acidoses metabólicas eliminando o componente ácido volátil CO₂.",
      trapWarning: "Lembre-se: eliminar CO₂ consome íons H⁺ (sobe o pH); reter CO₂ produz íons H⁺ (abaixa o pH)."
    },
    tags: ["fisiologia-respiratoria", "tampao-bicarbonato", "equilibrio-acido-base", "le-chatelier"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-019",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Acidose Respiratória e Compensação Renal",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Um paciente idoso com histórico de tabagismo pesado crônico e Doença Pulmonar Obstrutiva Crônica (DPOC) avançada apresenta perda de elasticidade alveolar e obstrução bronquial, resultando em hipoventilação alveolar crônica. A gasometria arterial revela: pH = 7,36 (normal); PaCO₂ = 62 mmHg (muito elevado; referência: 35-45 mmHg); e HCO₃⁻ = 36 mEq/L (muito elevado; referência: 22-26 mEq/L).",
      source: "Pneumologia e Terapia Intensiva Respiratória, 2026."
    },
    prompt: "O estado ácido-base desse paciente e o mecanismo fisiológico que manteve seu pH dentro dos limites normais são classificados como:",
    options: [
      {
        id: "a",
        text: "Alcalose metabólica aguda sem qualquer resposta dos pulmões.",
        isCorrect: false,
        distractorRationale: "O distúrbio primário é pulmonar com retenção de CO₂ (acidose respiratória), e não alcalose metabólica primária."
      },
      {
        id: "b",
        text: "Acidose respiratória crônica compensada pela retenção e síntese renal de bicarbonato (HCO₃⁻).",
        isCorrect: true,
        distractorRationale: "Correto. A causa primária é a retenção crônica de CO₂ pela DPOC (PaCO₂ = 62 mmHg), que empurra a reação gerando H⁺ (acidose respiratória). Para compensar, ao longo de dias e semanas, os rins reabsorvem e sintetizam bicarbonato (HCO₃⁻ subiu para 36 mEq/L) e secretam H⁺ na urina, normalizando a relação da equação de Henderson-Hasselbalch e trazendo o pH de volta à faixa normal (7,36)."
      },
      {
        id: "c",
        text: "Acidose metabólica aguda compensada por hipoventilação voluntária.",
        isCorrect: false,
        distractorRationale: "A acidose metabólica teria bicarbonato baixo, e a compensação seria hiperventilação, o oposto do quadro."
      },
      {
        id: "d",
        text: "Alcalose respiratória descompensada por hiperventilação psicogênica.",
        isCorrect: false,
        distractorRationale: "Na alcalose respiratória o PaCO₂ estaria muito baixo (< 35 mmHg), mas aqui está alto (62 mmHg)."
      },
      {
        id: "e",
        text: "Homeostase pura perfeita sem qualquer alteração patológica prévia.",
        isCorrect: false,
        distractorRationale: "Valores de PaCO₂ de 62 mmHg e HCO₃⁻ de 36 mEq/L refletem uma patologia crônica grave compensada."
      }
    ],
    detailedExplanation: {
      summary: "Na acidose respiratória crônica por DPOC, a retenção de CO₂ é compensada a longo prazo pela retenção renal de bicarbonato.",
      stepByStep: [
        "1. A DPOC impede a exalação adequada de ar, retendo CO₂ (PaCO₂ = 62 mmHg, elevado).",
        "2. Isso desloca o equilíbrio: CO₂ + H₂O → H⁺ + HCO₃⁻, gerando acidose respiratória primária.",
        "3. Em resposta crônica (dias a semanas), os rins ativam carreadores de prótons e anidrase carbônica tubular.",
        "4. Os rins excretam íons H⁺ na urina e reabsorvem quase 100% do bicarbonato, elevando o HCO₃⁻ plasmático para 36 mEq/L.",
        "5. Pela equação de Henderson-Hasselbalch, a razão [HCO₃⁻] / (0,03 × PaCO₂) é mantida em 20:1, restabelecendo o pH em 7,36."
      ],
      coreConcept: "Rins compensam distúrbios respiratórios retendo ou excretando bicarbonato; essa resposta leva dias para atingir equilíbrio pleno.",
      trapWarning: "Cuidado: um pH dentro da faixa normal (7,35-7,45) NÃO significa ausência de doença se o PaCO₂ e o bicarbonato estiverem profundamente alterados!"
    },
    tags: ["gasometria", "acidose-respiratoria", "compensacao-renal", "dpoc"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-020",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Acidose Metabólica e Respiração de Kussmaul",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na cetoacidose diabética descompensada, a ausência de insulina impede a captação de glicose e dispara a lipólise descontrolada no tecido adiposo. O fígado oxida ácidos graxos em excesso, gerando corpos cetônicos (ácido acetoacético e ácido β-hidroxibutírico), que se dissociam no sangue liberando grande quantidade de prótons H⁺.",
      source: "Manual de Terapia Intensiva Pediátrica e Adulto, 2026."
    },
    prompt: "O padrão respiratório característico exibido por esse paciente (Respiração de Kussmaul: hiperpneia profunda e rápida) é desencadeado pelo centro respiratório com a finalidade de:",
    options: [
      {
        id: "a",
        text: "oxigenar o fígado para que ele passe a produzir insulina imediatamente.",
        isCorrect: false,
        distractorRationale: "O fígado não sintetiza insulina; quem a produz são as células beta do pâncreas."
      },
      {
        id: "b",
        text: "reduzir a concentração de CO₂ no sangue para puxar o equilíbrio do tampão bicarbonato e consumir prótons H⁺.",
        isCorrect: true,
        distractorRationale: "Correto. A respiração de Kussmaul é uma compensação respiratória vigorosa: a hiperventilação 'lava' o CO₂ do sangue (PaCO₂ cai abaixo de 20-25 mmHg), deslocando CO₂ + H₂O ⇌ H⁺ + HCO₃⁻ para a esquerda, consumindo os prótons H⁺ derivados dos cetoácidos e amenizando a queda letal do pH."
      },
      {
        id: "c",
        text: "inibir a circulação renal para impedir a perda de água na urina.",
        isCorrect: false,
        distractorRationale: "A respiração de Kussmaul não tem como objetivo paralisar os rins."
      },
      {
        id: "d",
        text: "elevar o teor de monóxido de carbono alveolar para induzir anestesia.",
        isCorrect: false,
        distractorRationale: "O pulmão não sintetiza monóxido de carbono como anestésico."
      },
      {
        id: "e",
        text: "gerar calor corporal suficiente para fundir os corpos cetônicos em lipídios neutros.",
        isCorrect: false,
        distractorRationale: "A finalidade é estritamente regulatória da concentração hidrogeniônica e gasometria."
      }
    ],
    detailedExplanation: {
      summary: "A respiração de Kussmaul é a resposta respiratória reflexa máxima para 'lavar' CO₂ e combater a acidose metabólica grave.",
      stepByStep: [
        "1. Os cetoácidos liberam H⁺ no plasma, consumindo as reservas de bicarbonato (HCO₃⁻ despenca).",
        "2. A acidez do sangue estimula fortemente os quimiorreceptores nos corpos carotídeos e no bulbo.",
        "3. O centro respiratório emite comandos para hiperventilação de alta amplitude (respiração de Kussmaul).",
        "4. A PaCO₂ arterial cai acentuadamente (ex: de 40 para 18 mmHg).",
        "5. Pelo Princípio de Le Chatelier, retirar CO₂ do sistema consome prótons H⁺, amortecendo a acidose."
      ],
      coreConcept: "Respiração de Kussmaul = hiperventilação profunda e rápida compensatória para eliminar CO₂ na acidose metabólica grave.",
      trapWarning: "A respiração de Kussmaul é sinal de acidose METABÓLICA (ex: cetoacidose ou uremia), e NÃO de acidose respiratória!"
    },
    tags: ["gasometria", "acidose-metabolica", "respiracao-kussmaul", "cetoacidose"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-021",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Alcalose Respiratória por Hiperventilação",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em episódios de crises agudas de ansiedade e pânico, é frequente que o paciente hiperventile de forma desordenada e rápida. Minutos depois, começa a relatar formigamento nas mãos e ao redor da boca (parestesias), espasmos musculares dolorosos nos dedos (carpopedais) e tonteira. Uma conduta empírica de primeiros socorros tradicional é orientar a pessoa a respirar calmamente em um saco de papel fechado sobre a boca e nariz.",
      source: "Pronto-Socorro e Condutas Médicas de Urgência, 2026."
    },
    prompt: "Os sintomas neuromusculares observados decorrem da alcalose respiratória aguda, e a eficácia de respirar no saco de papel baseia-se no fato de que essa manobra:",
    options: [
      {
        id: "a",
        text: "esgota o suprimento de oxigênio do cérebro, induzindo sono profundo restaurador.",
        isCorrect: false,
        distractorRationale: "O objetivo não é causar hipóxia cerebral patológica para induzir sono."
      },
      {
        id: "b",
        text: "obriga a reinalação do próprio CO₂ expirado, elevando o PaCO₂ sanguíneo e restaurando a concentração de íons H⁺ e cálcio iônico livre.",
        isCorrect: true,
        distractorRationale: "Correto. A hiperventilação elimina CO₂ excessivamente, causando alcalose respiratória (pH sobe > 7,50). Em meio alcalino, as proteínas plasmáticas liberam prótons e passam a quelar cálcio livre (hipocalcemia iônica), provocando tetania e formigamento. Respirar no saco faz a pessoa reinalar ar rico em CO₂, puxando o equilíbrio para a direita e normalizando o pH e o cálcio."
      },
      {
        id: "c",
        text: "absorve umidade do papel celulósico, desidratando o sangue em circulação.",
        isCorrect: false,
        distractorRationale: "A umidade do saco não desidrata o sangue sistêmico."
      },
      {
        id: "d",
        text: "estimula a aldosterona a reter ureia na corrente sanguínea.",
        isCorrect: false,
        distractorRationale: "A aldosterona não é ativada por essa manobra e não retém ureia primariamente."
      },
      {
        id: "e",
        text: "neutraliza o ácido lático por precipitação de cristais de bicarbonato no coração.",
        isCorrect: false,
        distractorRationale: "O distúrbio não é por ácido lático, mas sim por falta de CO₂."
      }
    ],
    detailedExplanation: {
      summary: "A hiperventilação causa alcalose respiratória e hipocalcemia iônica com tetania; respirar no saco de papel reinala CO₂ e normaliza o pH.",
      stepByStep: [
        "1. Hiperventilação na crise de pânico elimina CO₂ excessivamente (PaCO₂ desaba).",
        "2. A reação CO₂ + H₂O ⇌ H⁺ + HCO₃⁻ desloca-se para a esquerda, consumindo H⁺ (pH sobe > 7,50: alcalose respiratória).",
        "3. Com menos prótons competindo, a albumina sérica liga-se a mais cálcio, reduzindo a fração de cálcio livre ionizado (Ca²⁺).",
        "4. A hipocalcemia despolariza nervos periféricos, causando formigamento e contrações musculares espasmódicas (tetania).",
        "5. Respirar no saco de papel faz o paciente inalar o ar enriquecido com seu próprio CO₂, elevando o PaCO₂ arterial de volta à faixa normal."
      ],
      coreConcept: "Alcalose respiratória aguda reduz o cálcio iônico e causa tetania; reinalar CO₂ reverte o quadro restabelecendo os prótons H⁺.",
      trapWarning: "Cuidado: a quantidade total de cálcio no sangue é idêntica; apenas a fração LIVRE (ionizada) diminui porque a albumina se liga a ele na alcalose."
    },
    tags: ["gasometria", "alcalose-respiratoria", "hiperventilacao", "hipocalcemia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-022",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Aclimatação à Altitude e Eritropoietina (EPO)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao chegarem a cidades localizadas a mais de 3.500 metros acima do nível do mar (como La Paz), indivíduos nascidos ao nível do mar enfrentam baixa pressão parcial de oxigênio atmosférico (pO₂). Nos primeiros dias, ocorrem fadiga e hiperventilação compensatória. Contudo, após duas a três semanas de permanência contínua, o hematócrito desses indivíduos sobe de 42% para cerca de 55% a 60%.",
      source: "Fisiologia Ambiental e Aclimatação a Ambientes Extremos, 2026."
    },
    prompt: "O mecanismo hormonal renal responsável pela elevação adaptativa do número de eritrócitos e do hematócrito na aclimatação é a:",
    options: [
      {
        id: "a",
        text: "detecção da hipóxia tecidual por células renais peritubulares e secreção de Eritropoietina (EPO), que estimula a medula óssea vermelha.",
        isCorrect: true,
        distractorRationale: "Correto. Quando o suprimento tecidual de O₂ cai, fatores induzidos por hipóxia (HIF-1α) estimulam fibroblastos intersticiais renais peritubulares a secretar o hormônio glicoproteico Eritropoietina (EPO). A EPO viaja até a medula óssea vermelha, estimulando a linhagem eritroide a proliferar e diferenciar-se em mais hemácias, aumentando a capacidade de transporte de oxigênio."
      },
      {
        id: "b",
        text: "síntese acelerada de aldosterona que converte leucócitos em hemácias maduras.",
        isCorrect: false,
        distractorRationale: "A aldosterona não induz transdiferenciação de leucócitos em hemácias."
      },
      {
        id: "c",
        text: "liberação de renina para digerir as plaquetas e liberar hemoglobina no plasma.",
        isCorrect: false,
        distractorRationale: "A renina atua na pressão arterial, não destruindo plaquetas para formar hemoglobina livre."
      },
      {
        id: "d",
        text: "produção de hormônio antidiurético que aumenta a fragilidade osmótica dos glóbulos vermelhos.",
        isCorrect: false,
        distractorRationale: "O ADH retém água e não atua na proliferação de hemácias."
      },
      {
        id: "e",
        text: "inativação total do baço que impede qualquer destruição de hemácias senescentes.",
        isCorrect: false,
        distractorRationale: "O baço continua funcionando na hemocaterese normal."
      }
    ],
    detailedExplanation: {
      summary: "A hipóxia renal estimula a secreção de eritropoietina (EPO), que viaja até a medula óssea e intensifica a produção de hemácias.",
      stepByStep: [
        "1. Em grandes altitudes, a baixa pO₂ atmosférica reduz a saturação de oxigênio no sangue arterial.",
        "2. As células intersticiais peritubulares do córtex renal sofrem hipóxia.",
        "3. Estabilização do fator de transcrição HIF-1α induz a expressão gênica e secreção de Eritropoietina (EPO).",
        "4. A EPO liga-se a receptores nas células progenitoras eritroides na medula óssea vermelha.",
        "5. Aumenta a sobrevivência e diferenciação de reticulócitos em hemácias.",
        "6. Em semanas, o hematócrito sobe significativamente, compensando a menor oferta de oxigênio molecular por volume de sangue."
      ],
      coreConcept: "O rim é o sensor primário de oxigenação do organismo e o produtor de eritropoietina (EPO).",
      trapWarning: "Pacientes com insuficiência renal crônica desenvolvem anemia profunda exatamente pela perda dessas células produtoras de EPO!"
    },
    tags: ["fisiologia-renal", "eritropoietina", "aclimatacao-altitude", "eritropoiese"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-023",
    area: "natureza",
    competence: 4,
    skill: 17,
    topic: "Fisiologia Humana",
    subtopic: "Farmacologia de Diuréticos de Alça",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A furosemida é um diurético de alta eficácia ('diurético de alça') prescrito no tratamento de edemas associados à insuficiência cardíaca congestiva, cirrose hepática e insuficiência renal. O fármaco é secretado ativamente pelo túbulo proximal e atua na luz do ramo ascendente espesso da alça de Henle.",
      source: "Manual de Farmacologia Renal e Terapia Diurética, 2026."
    },
    prompt: "O mecanismo molecular de ação da furosemida e o desequilíbrio eletrolítico mais comum associado ao seu uso prolongado sem suplementação são:",
    options: [
      {
        id: "a",
        text: "inativação da aldosterona nos dutos coletores; hipercalemia severa.",
        isCorrect: false,
        distractorRationale: "Esse é o mecanismo da espironolactona (poupador de potássio), não da furosemida."
      },
      {
        id: "b",
        text: "inibição do cotransportador Na⁺-K⁺-2Cl⁻ (NKCC2); hipocalemia (queda do potássio plasmático).",
        isCorrect: true,
        distractorRationale: "Correto. A furosemida bloqueia o transportador NKCC2 no ramo ascendente espesso da alça de Henle, impedindo a reabsorção de Na⁺, K⁺ e Cl⁻. O excesso de sódio que chega ao duto coletor estimula a troca por K⁺ mediada pela aldosterona, levando à perda intensa de potássio na urina (hipocalemia)."
      },
      {
        id: "c",
        text: "bloqueio da anidrase carbônica no glomérulo; aumento acentuado da pressão oncótica.",
        isCorrect: false,
        distractorRationale: "Inibidores de anidrase carbônica são a acetazolamida, que atuam no túbulo proximal."
      },
      {
        id: "d",
        text: "destruição das aquaporinas AQP1 por ligação covalente; hipernatremia extrema.",
        isCorrect: false,
        distractorRationale: "A furosemida atua no transportador de íons NKCC2, não destruindo aquaporinas."
      },
      {
        id: "e",
        text: "estimulação da bomba Na⁺/K⁺-ATPase basolateral; hiperglicemia e cetoacidose.",
        isCorrect: false,
        distractorRationale: "Ela inibe o cotransportador apical e não estimula a bomba para gerar cetoacidose."
      }
    ],
    detailedExplanation: {
      summary: "A furosemida inibe o cotransportador NKCC2 na alça de Henle, gerando diurese intensa com perda importante de potássio (hipocalemia).",
      stepByStep: [
        "1. A furosemida bloqueia o carreador NKCC2 na membrana apical do ramo ascendente espesso da alça de Henle.",
        "2. Impede a reabsorção de até 25% da carga filtrada de sódio e cloreto.",
        "3. Como solutos não são retirados, o gradiente medular é desfeito, impedindo a reabsorção de água ao longo de todo o néfron.",
        "4. A carga maciça de sódio alcança o túbulo distal e duto coletor.",
        "5. As células principais trocam avidamente esse sódio por potássio, excretando K⁺ na urina.",
        "6. Consequência: hipocalemia (K⁺ < 3,5 mEq/L), exigindo monitoramento cardíaco e reposição de cloreto de potássio."
      ],
      coreConcept: "Diuréticos de alça inibem o NKCC2 e são potentes espoliadores de potássio (indutores de hipocalemia).",
      trapWarning: "Hipocalemia predispõe a arritmias ventriculares fatais e potencializa a toxicidade de digitálicos como a digoxina!"
    },
    tags: ["farmacologia-renal", "furosemida", "diureticos-de-alca", "hipocalemia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-024",
    area: "natureza",
    competence: 4,
    skill: 17,
    topic: "Fisiologia Humana",
    subtopic: "Diuréticos Poupadores de Potássio e Espironolactona",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A espironolactona é classificada como um diurético poupador de potássio com propriedades antagonistas competitivas. É frequentemente empregada em esquemas terapêuticos combinados para tratar hipertensão resistente e insuficiência cardíaca crônica com fração de ejeção reduzida.",
      source: "Terapêutica Cardiovascular Contemporânea, 2026."
    },
    prompt: "Ao bloquear os receptores intracelulares de aldosterona nas células do duto coletor renal, a espironolactona provoca:",
    options: [
      {
        id: "a",
        text: "aumento da excreção de sódio associado à retenção de potássio no organismo, com risco de hipercalemia.",
        isCorrect: true,
        distractorRationale: "Correto. A aldosterona normalmente estimula a reabsorção de Na⁺ e a secreção de K⁺. Ao bloquear o receptor de aldosterona, a espironolactona impede a reabsorção de sódio (gerando natriurese moderada) e impede a secreção de potássio, poupando o K⁺ e retendo-o no sangue. O risco clínico principal é a hipercalemia (K⁺ > 5,5 mEq/L)."
      },
      {
        id: "b",
        text: "perda maciça de potássio e sódio na urina, com hipocalemia aguda instantânea.",
        isCorrect: false,
        distractorRationale: "A espironolactona POUPA potássio, e não o perde na urina."
      },
      {
        id: "c",
        text: "ativação da secreção de renina associada à destruição dos capilares glomerulares.",
        isCorrect: false,
        distractorRationale: "Ela não destrói os capilares glomerulares."
      },
      {
        id: "d",
        text: "fechamento irreversível dos canais de aquaporina tipo 1 na alça de Henle.",
        isCorrect: false,
        distractorRationale: "A espironolactona atua no duto coletor via receptor de aldosterona, não em aquaporinas 1 da alça."
      },
      {
        id: "e",
        text: "hipoglicemia severa por inibição do cotransporte de glicose nos néfrons distais.",
        isCorrect: false,
        distractorRationale: "Glicose é reabsorvida no túbulo proximal por SGLT2 e não no duto coletor."
      }
    ],
    detailedExplanation: {
      summary: "A espironolactona antagoniza a aldosterona, promovendo natriurese enquanto retém potássio no sangue (risco de hipercalemia).",
      stepByStep: [
        "1. A espironolactona compete com a aldosterona pelos receptores citoplasmáticos mineralocorticoides.",
        "2. Diminui a síntese e a atividade dos canais de sódio ENaC na membrana apical.",
        "3. O sódio não é reabsorvido e é excretado na urina, acompanhado de água.",
        "4. Como a reabsorção de Na⁺ é inibida, o gradiente elétrico negativo na luz tubular é atenuado, cessando a atração de K⁺ para a urina.",
        "5. O potássio permanece retido na circulação sanguínea (poupador de K⁺).",
        "6. Pacientes em uso de espironolactona não devem usar suplementos de potássio sob risco de hipercalemia fatal."
      ],
      coreConcept: "A espironolactona é um diurético poupador de potássio que atua antagonizando competitivamente a aldosterona.",
      trapWarning: "Hipercalemia altera a repolarização cardíaca gerando ondas T pontiagudas no ECG e risco de assistolia em diástole!"
    },
    tags: ["farmacologia-renal", "espironolactona", "poupador-de-potassio", "hipercalemia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-REN-025",
    area: "natureza",
    competence: 4,
    skill: 17,
    topic: "Fisiologia Humana",
    subtopic: "IECA versus BRA e Tosse Seca por Bradicinina",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No manejo farmacológico da hipertensão arterial sistêmica, duas classes atuam no eixo da angiotensina: os Inibidores da Enzima Conversora de Angiotensina (IECA, como enalapril e captopril) e os Bloqueadores dos Receptores AT₁ de Angiotensina II (BRA, como losartana e valsartana). Cerca de 10% a 15% dos pacientes tratados com IECA desenvolvem tosse seca persistente e irritativa, sendo orientada a substituição do medicamento por um BRA.",
      source: "Diretrizes Brasileiras de Hipertensão Arterial, Sociedade Brasileira de Cardiologia, 2026."
    },
    prompt: "A explicação farmacológica e bioquímica para a ocorrência da tosse seca com os IECA e sua ausência com os BRA é que:",
    options: [
      {
        id: "a",
        text: "os IECA inibem a mesma enzima que degrada a bradicinina, acumulando esse peptídeo pró-inflamatório nas vias aéreas; já os BRA bloqueiam apenas o receptor AT₁, sem afetar a bradicinina.",
        isCorrect: true,
        distractorRationale: "Correto. A Enzima Conversora de Angiotensina (ECA) é idêntica à quininase II, enzima encarregada de degradar a bradicinina (peptídeo broncoconstritor e irritativo). O bloqueio da ECA faz a bradicinina acumular-se nos pulmões, ativando fibras C bronquiais e disparando tosse seca. Os BRA bloqueiam apenas o receptor AT₁ da angiotensina II, deixando a ECA livre para degradar a bradicinina normalmente."
      },
      {
        id: "b",
        text: "os IECA causam edema de laringe por liberação maciça de renina no trato respiratório superior.",
        isCorrect: false,
        distractorRationale: "A renina não é liberada no trato respiratório superior para causar tosse."
      },
      {
        id: "c",
        text: "os BRA provocam paralisia do diafragma, impedindo mecanicamente qualquer tosse reflexa.",
        isCorrect: false,
        distractorRationale: "Os BRA não causam paralisia diafragmática."
      },
      {
        id: "d",
        text: "os IECA estimulam a proliferação de bactérias gram-positivas nos alvéolos pulmonares.",
        isCorrect: false,
        distractorRationale: "A tosse por IECA é estritamente farmacológica e química mediada por bradicinina, e não infecciosa."
      },
      {
        id: "e",
        text: "os BRA aceleram a degradação de monóxido de carbono alveolar por catálise enzimática.",
        isCorrect: false,
        distractorRationale: "BRA não catalisa degradação de monóxido de carbono."
      }
    ],
    detailedExplanation: {
      summary: "A ECA degrada a bradicinina; seu bloqueio acumula bradicinina nos pulmões gerando tosse seca. Os BRA poupam a ECA e não causam tosse.",
      stepByStep: [
        "1. A Enzima Conversora de Angiotensina (ECA) possui dupla função: converte Angiotensina I em Angiotensina II E degrada bradicinina.",
        "2. Os IECA (enalapril, captopril) inibem a ECA competitivamente.",
        "3. A bradicinina deixa de ser inativada e acumula-se nas vias respiratórias inferiores.",
        "4. A bradicinina e a substância P irritam terminações nervosas sensoriais, disparando tosse seca refratária.",
        "5. Os BRA (losartana) bloqueiam seletivamente o receptor AT1 onde a angiotensina II se ligaria.",
        "6. A enzima ECA continua livre e ativa, degradando a bradicinina normalmente, razão pela qual os BRA não causam tosse."
      ],
      coreConcept: "IECA causam tosse seca por acúmulo de bradicinina (ECA inibida); BRA não afetam a ECA e são a alternativa de escolha.",
      trapWarning: "A tosse induzida por IECA não responde a xaropes antitussígenos comuns; a única conduta eficaz é suspender o IECA e prescrever um BRA (ex: losartana)!"
    },
    tags: ["farmacologia-cardiovascular", "ieca-bra", "bradicinina", "tosse-seca"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
