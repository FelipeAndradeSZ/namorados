/**
 * BANCO DE QUESTÕES DESTINO 1000
 * Módulo: Fisiologia Humana e Imunologia
 * Área: Ciências da Natureza e suas Tecnologias (Biologia)
 * Total: 25 Questões originais e contextualizadas padrão ENEM
 * Competências: C4, C5 | Habilidades: H14, H15, H16
 */

export const QUESTIONS_FISIOLOGIA_HUMANA = [
  {
    id: "NAT-FIS-001",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Imunológico - Vacinas vs. Soros",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em campanhas de saúde pública, a distinção entre a administração de imunobiológicos ativos e passivos é determinante para a prevenção e o tratamento emergencial de enfermidades. Enquanto as vacinas induzem o organismo a montar uma resposta protetora de longo prazo, os soros heterólogos oferecem suporte imediato em situações agudas com risco iminente de morte.",
      source: "Ministério da Saúde. Programa Nacional de Imunizações (PNI). Cadernos de Atenção Básica, 2024."
    },
    prompt: "Um trabalhador rural foi picado por uma serpente peçonhenta da espécie Bothrops jararaca (jararaca). No pronto-socorro, a equipe médica optou pela administração de soro antiofídico em vez de vacina. A conduta médica adotada justifica-se porque o soro",
    options: [
      {
        id: "a",
        text: "induz a diferenciação de plasmócitos do paciente para sintetizar anticorpos específicos contra as toxinas do veneno.",
        isCorrect: false,
        distractorRationale: "Essa é a função de uma vacina (imunização ativa), processo lento que levaria dias ou semanas, incompatível com a urgência do envenenamento."
      },
      {
        id: "b",
        text: "contém anticorpos pré-formados capazes de neutralizar imediatamente as toxinas circulantes sem gerar memória imunológica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O soro fornece imunização passiva artificial imediata (anticorpos prontos), salvando o paciente em quadro agudo."
      },
      {
        id: "c",
        text: "estimula a proliferação clonal de linfócitos T de memória para conferir proteção perene contra futuros acidentes ofídicos.",
        isCorrect: false,
        distractorRationale: "O soro não gera células de memória; ele fornece anticorpos temporários que serão degradados pelo próprio organismo."
      },
      {
        id: "d",
        text: "fornece antígenos atenuados que ativam o sistema complemento e aceleram a resposta celular primária do paciente.",
        isCorrect: false,
        distractorRationale: "Soros contêm anticorpos (imunoglobulinas), não antígenos. Antígenos atenuados são componentes de vacinas."
      },
      {
        id: "e",
        text: "promove a imunização ativa artificial por meio da injeção de toxoides neutralizantes de meia-vida prolongada.",
        isCorrect: false,
        distractorRationale: "Toxoides são antígenos inativados usados em vacinas (como a antitetânica), constituindo imunização ativa, não passiva."
      }
    ],
    detailedExplanation: {
      summary: "O soro antiofídico consiste em imunização passiva artificial, contendo anticorpos policlonais pré-formados para neutralização imediata.",
      stepByStep: [
        "1. Identificação da necessidade: o envenenamento botrópico é agudo e potencialmente letal em poucas horas, exigindo neutralização imediata.",
        "2. Análise da imunização ativa (vacina): requer sensibilização, seleção clonal e diferenciação de linfócitos B, levando de 10 a 14 dias para gerar títulos protetores.",
        "3. Análise da imunização passiva (soro): fornece imunoglobulinas já prontas (geralmente produzidas em equinos), que se ligam imediatamente aos sítios ativos das toxinas peçonhentas.",
        "4. Conclusão: o soro neutraliza as toxinas de imediato, mas não induz memória imunológica duradoura."
      ],
      coreConcept: "Imunização passiva (soro) = anticorpos prontos, efeito rápido, sem memória. Imunização ativa (vacina) = antígeno, efeito tardio, gera memória.",
      trapWarning: "Cuidado para não confundir soro com vacina nem atribuir formação de memória imunológica à administração de soros."
    },
    tags: ["fisiologia", "imunologia", "vacina", "soro", "memoria-imunologica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-002",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Excretor - Ação do Hormônio Antidiurético (ADH)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a prática de exercícios intensos sob clima quente e seco sem hidratação adequada, o organismo perde expressiva quantidade de água pelo suor, elevando a osmolaridade plasmática. Os osmorreceptores hipotalâmicos detectam esse aumento e estimulam a neuro-hipófise a liberar vasopressina (ADH) na corrente sanguínea.",
      source: "HALL, J. E.; HALL, M. E. Guyton and Hall Textbook of Medical Physiology. 14th ed. Elsevier, 2021."
    },
    prompt: "A atuação direta do hormônio antidiurético (ADH) nos néfrons renais tem como consequência fisiológica a",
    options: [
      {
        id: "a",
        text: "redução da permeabilidade à água nos túbulos coletores, resultando em urina volumosa e hipotônica.",
        isCorrect: false,
        distractorRationale: "O ADH aumenta a permeabilidade à água, e não reduz. A urina resultante é concentrada e em menor volume."
      },
      {
        id: "b",
        text: "inibição do transporte ativo de íons sódio na alça de Henle, reduzindo o gradiente osmótico medular.",
        isCorrect: false,
        distractorRationale: "O ADH atua na inserção de aquaporinas nos túbulos distais e coletores, sem inibir as bombas de sódio da alça medular."
      },
      {
        id: "c",
        text: "inserção de aquaporinas nas membranas dos ductos coletores, aumentando a reabsorção de água e concentrando a urina.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O ADH estimula a translocação de vesículas com aquaporinas-2 para a membrana apical das células dos ductos coletores, retendo água no corpo."
      },
      {
        id: "d",
        text: "constrição exclusiva da arteríola aferente, elevando a taxa de filtração glomerular no córtex renal.",
        isCorrect: false,
        distractorRationale: "O efeito primário osmorregulador do ADH é a reabsorção tubular de água mediada por aquaporinas, não a filtração aferente."
      },
      {
        id: "e",
        text: "estimulação da secreção ativa de ureia para o líquido intersticial da pelve renal.",
        isCorrect: false,
        distractorRationale: "A reabsorção facilitada de água é o mecanismo central que equilibra a volemia e normaliza a osmolaridade do plasma."
      }
    ],
    detailedExplanation: {
      summary: "O ADH liga-se a receptores V2 nos ductos coletores, promovendo a exocitose de aquaporinas e a consequente reabsorção facultativa de água.",
      stepByStep: [
        "1. Desidratação causa aumento da osmolaridade plasmática.",
        "2. Osmorreceptores hipotalâmicos sinalizam a liberação de ADH pela neuro-hipófise.",
        "3. O ADH atinge os ductos coletores e estimula a via do AMP cíclico.",
        "4. Vesículas citoplasmáticas fundem-se à membrana luminal inserindo canais de água (aquaporinas-2).",
        "5. A água flui por osmose para o interstício hiperosmótico medular, concentrando a urina e reduzindo o volume excretado."
      ],
      coreConcept: "ADH = Hormônio Antidiurético -> mais aquaporinas nos ductos coletores -> mais reabsorção de água -> urina concentrada e de baixo volume.",
      trapWarning: "Lembre-se de que o álcool inibe a secreção de ADH, levando a urina diluída e abundante (diurese aumentada)."
    },
    tags: ["fisiologia", "excrecao", "nefron", "adh", "osmorregulacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-003",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Respiratório - Controle Bulbar e pH Sanguíneo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A equação de equilíbrio do dióxido de carbono no plasma é expressa por: CO2 + H2O <-> H2CO3 <-> H+ + HCO3-. Durante esforço muscular extenuante, o aumento da taxa metabólica celular gera acentuada produção de CO2. Os quimiorreceptores centrais localizados no bulbo raquidiano são altamente sensíveis a variações na concentração de prótons (H+) no líquido cefalorraquidiano.",
      source: "SILVERTHORN, D. U. Fisiologia Humana: Uma Abordagem Integrada. 7ª ed. Artmed, 2017."
    },
    prompt: "O aumento agudo na concentração de CO2 no sangue estimula o centro respiratório bulbar a promover",
    options: [
      {
        id: "a",
        text: "bradipneia reflexa, reduzindo a ventilação alveolar para reter bicarbonato nos tecidos.",
        isCorrect: false,
        distractorRationale: "Bradipneia é diminuição da frequência respiratória; a resposta correta é a taquipneia/hiperventilação para eliminar o excesso de CO2."
      },
      {
        id: "b",
        text: "hiperventilação pulmonar, elevando a eliminação de CO2 e restaurando o pH plasmático para valores fisiológicos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O acúmulo de CO2 acidifica o sangue; o bulbo responde disparando mais estímulos motores aos músculos ventilatórios para expirar CO2 e subir o pH."
      },
      {
        id: "c",
        text: "inibição da contração diafragmática, diminuindo a pressão negativa intratorácica.",
        isCorrect: false,
        distractorRationale: "A contração diafragmática é intensificada, aumentando a frequência e a profundidade das incursões ventilatórias."
      },
      {
        id: "d",
        text: "elevação direta da afinidade da hemoglobina pelo oxigênio tecidual por meio do efeito Bohr inverso.",
        isCorrect: false,
        distractorRationale: "A acidose reduz a afinidade da hemoglobina pelo O2 (efeito Bohr clássico), facilitando a liberação de oxigênio nos tecidos, mas o controle bulbar visa a ventilação."
      },
      {
        id: "e",
        text: "alcalose respiratória compensatória imediata pela supressão da atividade dos músculos intercostais.",
        isCorrect: false,
        distractorRationale: "A acidose é o estado inicial, e os intercostais externos são ativados vigorosamente para ampliar a capacidade da caixa torácica."
      }
    ],
    detailedExplanation: {
      summary: "O excesso de CO2 acidifica o meio interno, acionando quimiorreceptores bulbares que disparam a hiperventilação compensatória.",
      stepByStep: [
        "1. Esforço celular eleva produção de CO2.",
        "2. Pela ação da anidrase carbônica: CO2 + H2O <-> H2CO3 <-> H+ + HCO3-.",
        "3. O aumento de H+ diminui o pH sanguíneo e do líquor (acidose).",
        "4. Quimiorreceptores do bulbo detectam o aumento de [H+] e enviam potenciais de ação aos nervos frênicos e intercostais.",
        "5. Ocorre hiperventilação: a expiração acelerada de CO2 desloca o equilíbrio para a esquerda, consumindo H+ e normalizando o pH."
      ],
      coreConcept: "Controle da respiração no homem: guiado principalmente pela pCO2 e pelo pH sanguíneo/liquórico no bulbo, e secundariamente pela pO2 nas carótidas/aorta.",
      trapWarning: "Muitos alunos acham erradamente que respiramos mais rápido por 'falta de oxigênio'. O principal gatilho fisiológico normal é o excesso de CO2 (hipercapnia)."
    },
    tags: ["fisiologia", "respiracao", "bulbo", "ph-sanguineo", "efeito-bohr"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-004",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Endócrino - Glicemia e Regulação Pancreática",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A homeostase glicêmica humana é mantida pela ação coordenada de dois hormônios peptídicos de ações antagônicas secretados pelas ilhotas de Langerhans no pâncreas. Em indivíduos saudáveis, a glicemia em jejum oscila em uma estreita faixa entre 70 e 99 mg/dL.",
      source: "Sociedade Brasileira de Diabetes (SBD). Diretrizes Oficiais da SBD, 2024."
    },
    prompt: "Após uma refeição rica em carboidratos complexos, o evento metabólico que atua prioritariamente para restabelecer os níveis normais de glicose no sangue é a",
    options: [
      {
        id: "a",
        text: "liberação de glucagon pelas células alfa, induzindo a glicogenólise hepática e a gliconeogênese.",
        isCorrect: false,
        distractorRationale: "O glucagon é secretado em situações de jejum ou hipoglicemia para liberar glicose, não após refeições."
      },
      {
        id: "b",
        text: "secreção de insulina pelas células beta, facilitando a captação de glicose via transportadores GLUT4 e a síntese de glicogênio.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A insulina promove a translocação de vesículas com GLUT4 em células musculares e adiposas, e ativa a glicogênio sintase no fígado."
      },
      {
        id: "c",
        text: "conversão hepática imediata de ácidos graxos em corpos cetônicos para suprir a demanda do sistema nervoso central.",
        isCorrect: false,
        distractorRationale: "Cetogênese ocorre no jejum prolongado ou no diabetes descompensado, nunca em período pós-prandial abundante."
      },
      {
        id: "d",
        text: "inibição completa da glicólise celular com degradação acelerada de proteínas musculares em aminoácidos livres.",
        isCorrect: false,
        distractorRationale: "A insulina estimula a glicólise e a síntese proteica (anabolismo), inibindo a proteólise."
      },
      {
        id: "e",
        text: "excreção renal imediata de monossacarídeos através de transporte passivo não saturável na cápsula de Bowman.",
        isCorrect: false,
        distractorRationale: "A glicosúria só ocorre se a glicemia ultrapassar o limiar renal (~180 mg/dL); em pessoas saudáveis, 100% da glicose filtrada é reabsorvida."
      }
    ],
    detailedExplanation: {
      summary: "A hiperglicemia pós-prandial ativa células beta pancreáticas a secretar insulina, que estimula captação tecidual e glicogênese.",
      stepByStep: [
        "1. Ingestão e digestão de carboidratos aumentam os níveis plasmáticos de glicose.",
        "2. Células beta das ilhotas pancreáticas detectam a hiperglicemia e secretam insulina.",
        "3. A insulina liga-se aos receptores tirosina-quinase nas membranas de miócitos e adipócitos.",
        "4. Ocorre translocação dos transportadores GLUT4 para a membrana plasmática, permitindo influxo de glicose por difusão facilitada.",
        "5. No fígado e músculos, a glicose é polimerizada em glicogênio (glicogênese), normalizando a taxa glicêmica."
      ],
      coreConcept: "Insulina = hormônio anabólico hipoglicemiante (células beta). Glucagon = hormônio catabólico hiperglicemiante (células alfa).",
      trapWarning: "No diabetes tipo 1 há destruição autoimune das células beta (falta insulina). No tipo 2 há resistência periférica à insulina associada a obesidade e estilo de vida."
    },
    tags: ["fisiologia", "endocrino", "pancreas", "insulina", "glucagon"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-005",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Cardiovascular - Ciclo Cardíaco e Pressão Arterial",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O coração dos mamíferos atua como uma bomba muscular quádrupla dotada de sincronia eletromecânica. A sístole ventricular esquerda gera picos pressóricos de aproximadamente 120 mmHg na raiz da aorta, enquanto a diástole subsequente mantém a pressão basal em torno de 80 mmHg graças à complacência e ao recuo elástico das paredes arteriais.",
      source: "BERNE, R. M.; LEVY, M. N. Fisiologia Cardiovascular. 6ª ed. Mosby/Elsevier, 2018."
    },
    prompt: "No ciclo cardíaco humano, o fechamento das valvas atrioventriculares (mitral e tricúspide) ocorre no início da sístole ventricular com o objetivo funcional de",
    options: [
      {
        id: "a",
        text: "impedir o refluxo retrógrado de sangue dos ventrículos em direção aos átrios durante a ejeção ventricular.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Ao contraírem com alta pressão, os ventrículos fechariam as valvas AV para direcionar o fluxo exclusivamente para as artérias aorta e pulmonar."
      },
      {
        id: "b",
        text: "evitar que o sangue arterial rico em oxigênio da aorta retorne para a câmara ventricular esquerda.",
        isCorrect: false,
        distractorRationale: "Essa função pertence às valvas semilunares (aórtica e pulmonar), que fecham no início da diástole ventricular (segunda bulha cardíaca)."
      },
      {
        id: "c",
        text: "permitir a mistura controlada entre o sangue desoxigenado da veia cava e o sangue oxigenado pulmonar.",
        isCorrect: false,
        distractorRationale: "O coração humano possui circulação completa; septos e valvas impedem rigorosamente a mistura de sangue oxigenado e venoso."
      },
      {
        id: "d",
        text: "reduzir bruscamente a resistência periférica total nos capilares teciduais dos membros inferiores.",
        isCorrect: false,
        distractorRationale: "A resistência vascular periférica é regulada pelo tônus das arteríolas sistêmicas, e não pelo fechamento valvar mecânico."
      },
      {
        id: "e",
        text: "despolarizar eletricamente as fibras do feixe de His a partir do nó sinoatrial.",
        isCorrect: false,
        distractorRationale: "O nó sinoatrial gera o impulso elétrico que antecede a contração mecânica; o fechamento valvar é um evento mecânico e acústico (primeira bulha)."
      }
    ],
    detailedExplanation: {
      summary: "As valvas atrioventriculares fecham na sístole ventricular impedindo refluxo para os átrios, originando a 1ª bulha ('tum').",
      stepByStep: [
        "1. Os ventrículos se enchem durante a diástole ventricular.",
        "2. Ocorre a sístole ventricular: o miocárdio ventricular contrai violentamente.",
        "3. A pressão intraventricular sobe rapidamente e supera a pressão atrial.",
        "4. Esse gradiente força o fechamento passivo das valvas atrioventriculares (mitral/bicúspide e tricúspide), gerando o primeiro ruído cardíaco (B1).",
        "5. O fechamento garante fluxo unidirecional para as artérias ejetoras (aorta e tronco pulmonar)."
      ],
      coreConcept: "Valvas atrioventriculares (tricúspide e mitral) impedem refluxo ventrículo -> átrio na sístole. Valvas semilunares (aórtica e pulmonar) impedem refluxo artéria -> ventrículo na diástole.",
      trapWarning: "Não confunda a primeira bulha cardíaca (fechamento das valvas AV na sístole) com a segunda bulha (fechamento das semilunares na diástole)."
    },
    tags: ["fisiologia", "cardiovascular", "ciclo-cardiaco", "pressao-arterial", "valvas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-006",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Digestório - Compartimentos, pH e Ação Enzimática",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O trato gastrointestinal humano opera como uma linha sequencial de processamento químico compartimentada. Cada segmento apresenta microambiente específico de pH e secreções enzimáticas especializadas na quebra de macronutrientes complexos em moléculas absorvíveis.",
      source: "JUNQUEIRA, L. C.; CARNEIRO, J. Histologia Básica: Texto e Atlas. 13ª ed. Guanabara Koogan, 2018."
    },
    prompt: "Um fármaco antiácido de uso contínuo que eleve excessivamente o pH gástrico (de pH ~2 para pH ~6) prejudicará de forma mais imediata a digestão química de",
    options: [
      {
        id: "a",
        text: "lipídios emulsionados, devido à inativação das fosfatases biliares do duodeno.",
        isCorrect: false,
        distractorRationale: "A bile não possui enzimas e atua no duodeno em pH alcalino, não no estômago."
      },
      {
        id: "b",
        text: "proteínas alimentares, pela incapacidade de ativação do pepsinogênio em pepsina e perda de sua conformação catalítica ótima.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O pepsinogênio gástrico requer pH ácido (~1,5-2) para ser clivado em pepsina ativa, enzima responsável pelo início da quebra de proteínas."
      },
      {
        id: "c",
        text: "polissacarídeos como o amido, em virtude da desnaturação da amilase pancreática nas criptas estomacais.",
        isCorrect: false,
        distractorRationale: "O amido é digerido na boca (amilase salivar) e no duodeno (amilase pancreática, pH ~8). O estômago não produz amilases."
      },
      {
        id: "d",
        text: "ácidos nucleicos exógenos, por impedir a síntese de nucleases solúveis pelo epitélio do esôfago.",
        isCorrect: false,
        distractorRationale: "O esôfago apenas transporta alimento e secreta muco protetor, não produzindo enzimas digestivas."
      },
      {
        id: "e",
        text: "vitaminas lipossolúveis (A, D, E e K), porque sua absorção ativa nos canalículos gástricos é estritamente dependente de ácido clorídrico.",
        isCorrect: false,
        distractorRationale: "Vitaminas lipossolúveis são absorvidas no intestino delgado associadas a micelas lipídicas, não no estômago."
      }
    ],
    detailedExplanation: {
      summary: "A pepsina gástrica é ativada pelo HCl em pH ácido (1,5 a 2,0); a elevação desse pH inibe a proteólise gástrica primária.",
      stepByStep: [
        "1. As células parietais do estômago produzem HCl, estabelecendo pH fortemente ácido (1,5 a 2,0).",
        "2. As células principais produzem o zimogênio inativo pepsinogênio.",
        "3. Na presença de HCl livre, o pepsinogênio sofre clivagem autocatalítica em pepsina funcional.",
        "4. A pepsina tem pico ótimo de atividade enzimática em pH 1,5-2,0, quebrando ligações peptídicas.",
        "5. Um aumento para pH ~6 desnatura funcionalmente a pepsina e impede a conversão do zimogênio, prejudicando a digestão inicial das proteínas."
      ],
      coreConcept: "Compartimentos digestivos e pH: Boca (pH ~7, ptialina/amido) -> Estômago (pH ~2, pepsina/proteínas) -> Duodeno (pH ~8, tripsina, quimiotripsina, amilase, lipase).",
      trapWarning: "Lembre-se: a bile NÃO contém enzimas digestivas. Ela atua apenas como detergente biológico, emulsificando gorduras em gotículas menores para facilitar a ação da lipase."
    },
    tags: ["fisiologia", "digestao", "pepsina", "ph-gastrico", "proteolise"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-007",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Nervoso - Potencial de Ação e Sinapses",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A transmissão do impulso elétrico ao longo dos axônios neuronais depende de variações estereotipadas no potencial de membrana. Em repouso, o interior do neurônio é eletro-negativo em relação ao exterior (-70 mV). A chegada de um estímulo despolarizante supralimiar deflagra o potencial de ação.",
      source: "KANDEL, E. R. et al. Princípios da Neurociência. 5ª ed. Artmed, 2014."
    },
    prompt: "Durante a fase de despolarização rápida do potencial de ação neuronal, o fenômeno biofísico responsável pela inversão da polaridade transmembrana é o(a)",
    options: [
      {
        id: "a",
        text: "efluxo acelerado de íons potássio (K+) mediado por canais iônicos operados por ligantes.",
        isCorrect: false,
        distractorRationale: "O efluxo de K+ ocorre na repolarização, restaurando o potencial negativo interno."
      },
      {
        id: "b",
        text: "influxo massivo de íons sódio (Na+) decorrente da abertura de canais de sódio dependentes de voltagem.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O estímulo abre canais de Na+ controlados por voltagem; o sódio entra a favor do gradiente eletroquímico, positivando o citoplasma (+30 mV)."
      },
      {
        id: "c",
        text: "bombeamento ativo de três íons potássio para dentro da célula pela bomba de Na+/K+-ATPase.",
        isCorrect: false,
        distractorRationale: "A bomba transporta 3 Na+ para fora e 2 K+ para dentro com gasto de ATP, operando no repouso e na recuperação crônica dos gradientes."
      },
      {
        id: "d",
        text: "inativação total dos receptores pós-sinápticos colinérgicos no corpo celular.",
        isCorrect: false,
        distractorRationale: "A despolarização axônica é um processo de canais voltagem-dependentes ao longo da membrana do axônio, não de inativação de receptores."
      },
      {
        id: "e",
        text: "entrada de ânions cloreto (Cl-) através de junções comunicantes mielinizadas.",
        isCorrect: false,
        distractorRationale: "Entrada de Cl- causaria hiperpolarização inibitória (tornando a célula ainda mais negativa), e não despolarização excitatória."
      }
    ],
    detailedExplanation: {
      summary: "A despolarização do axônio resulta da abertura de canais de Na+ voltagem-dependentes com rápido influxo de cátions sódio.",
      stepByStep: [
        "1. Estado de repouso: potencial de membrana em aproximadamente -70 mV mantido pela Na+/K+-ATPase e permeabilidade ao K+.",
        "2. Estímulo atinge o limiar de disparo (cerca de -55 mV).",
        "3. Canais de Na+ dependentes de voltagem abrem-se em cascata (feedback positivo).",
        "4. Influxo rápido e massivo de Na+ a favor dos gradientes elétrico e de concentração.",
        "5. O interior da célula atinge valores positivos de até +30 mV (despolarização).",
        "6. Em seguida, os canais de Na+ se inativam e canais de K+ dependentes de voltagem se abrem, gerando a repolarização."
      ],
      coreConcept: "Potencial de Ação: Despolarização = influxo de Na+ (canais voltagem-dependentes). Repolarização = efluxo de K+. Repouso mantido pela bomba Na+/K+ (gasta ATP).",
      trapWarning: "A bainha de mielina não aumenta a amplitude do potencial, mas sim a sua velocidade de propagação através da condução saltatória nos nódulos de Ranvier."
    },
    tags: ["fisiologia", "neurofisiologia", "potencial-de-acao", "despolarizacao", "sodio-potassio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-008",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Endócrino - Eixo Hipotálamo-Hipófise-Tireoide",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A regulação da taxa metabólica basal do organismo depende dos hormônios tireoidianos tri-iodotironina (T3) e tiroxina (T4). A síntese desses hormônios é estimulada pelo hormônio tireoestimulante (TSH), produzido pela adeno-hipófise sob comando do TRH hipotalâmico. Na tireoidite de Hashimoto, a destruição autoimune do parênquima folicular da tireoide impede a síntese eficaz de T3 e T4.",
      source: "VILAR, L. Endocrinologia Clínica. 7ª ed. Guanabara Koogan, 2021."
    },
    prompt: "Em um paciente com hipotireoidismo primário severo decorrente da tireoidite crônica descrita, o perfil hormonal plasmático característico esperado é",
    options: [
      {
        id: "a",
        text: "níveis diminuídos de T3/T4 acompanhados de níveis elevados de TSH por perda do feedback negativo na hipófise.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Com a falência tireoidiana, a concentração de T3 e T4 cai; a adeno-hipófise deixa de sofrer retroalimentação negativa e eleva drasticamente a secreção de TSH."
      },
      {
        id: "b",
        text: "níveis elevados de T3/T4 com concentrações indetectáveis de TSH devido a bócio difuso tóxico.",
        isCorrect: false,
        distractorRationale: "Esse perfil é típico de hipertireoidismo (como na Doença de Graves), e não de hipotireoidismo primário."
      },
      {
        id: "c",
        text: "níveis simultaneamente reduzidos de T3, T4 e TSH decorrentes de necrose isquêmica hipofisária.",
        isCorrect: false,
        distractorRationale: "Isso caracterizaria hipotireoidismo secundário/central (falência hipofisária), e não o primário decorrente de tireoidite autoimune."
      },
      {
        id: "d",
        text: "altas concentrações plasmáticas de calcitonina com normalização compensatória de T4 livre.",
        isCorrect: false,
        distractorRationale: "A calcitonina é produzida pelas células C para baixar o cálcio sérico e não tem relação com o quadro de hipotireoidismo metabólico."
      },
      {
        id: "e",
        text: "supressão total de TRH hipotalâmico associada à elevação isolada de T3 periférico.",
        isCorrect: false,
        distractorRationale: "Sem T3/T4 no plasma, o hipotálamo aumenta a síntese de TRH para tentar estimular a hipófise, ao invés de suprimi-la."
      }
    ],
    detailedExplanation: {
      summary: "No hipotireoidismo primário, o defeito está na glândula tireoide: T3/T4 baixos desinibem a hipófise, resultando em TSH elevado.",
      stepByStep: [
        "1. O eixo funciona por feedback negativo: Hipotálamo (TRH) -> Hipófise (TSH) -> Tireoide (T3 e T4).",
        "2. Níveis normais de T3 e T4 exercem retroalimentação inibitória sobre a hipófise e hipotálamo.",
        "3. Na destruição tireoidiana (tireoidite de Hashimoto), a produção de T3 e T4 despenca.",
        "4. A ausência de T3 e T4 cessa o freio inibitório sobre a adeno-hipófise.",
        "5. Em resposta, a adeno-hipófise secreta quantidades maciças de TSH na tentativa de reativar a glândula, caracterizando o padrão de TSH alto e T3/T4 baixos."
      ],
      coreConcept: "Feedback negativo tireoidiano: Hipotireoidismo primário = TSH elevado + T3/T4 baixos. Hipertireoidismo primário = TSH suprimido + T3/T4 elevados.",
      trapWarning: "Atenção: o iodo é componente estrutural indispensável de T3 (3 átomos de iodo) e T4 (4 átomos de iodo). A carência severa de iodo causa bócio endêmico."
    },
    tags: ["fisiologia", "endocrino", "tireoide", "tsh", "feedback-negativo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-009",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Circulatório e Hematologia - Transporte de Gases",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A hemoglobina presente no interior dos eritrócitos é uma proteína globular quaternária capaz de ligar cooperativamente até quatro moléculas de oxigênio gasoso. Além de carregar oxigênio, os eritrócitos desempenham papel central no transporte de gás carbônico tecidual para os alvéolos pulmonares.",
      source: "NELSON, D. L.; COX, M. M. Princípios de Bioquímica de Lehninger. 7ª ed. Artmed, 2019."
    },
    prompt: "No sangue venoso sistêmico humano, a maior fração de dióxido de carbono (CO2) gerado pelo metabolismo celular é transportada sob a forma de",
    options: [
      {
        id: "a",
        text: "CO2 gasoso fisicamente dissolvido livre no plasma aquoso sob alta pressão estática.",
        isCorrect: false,
        distractorRationale: "O CO2 dissolvido representa apenas cerca de 7% do total transportado no sangue."
      },
      {
        id: "b",
        text: "compostos carbamino unidos covalentemente aos grupos heme da mioglobina cardíaca.",
        isCorrect: false,
        distractorRationale: "A mioglobina é intramuscular e não circula no sangue venoso de indivíduos saudáveis."
      },
      {
        id: "c",
        text: "íons bicarbonato (HCO3-) dissolvidos no plasma após hidratação catalisada pela anidrase carbônica eritrocitária.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Cerca de 70% do CO2 é transportado como íon bicarbonato dissolvido no plasma, produzido dentro das hemácias pela enzima anidrase carbônica."
      },
      {
        id: "d",
        text: "monóxido de carbono (CO) ligado irreversivelmente às cadeias beta da hemoglobina.",
        isCorrect: false,
        distractorRationale: "O CO é um gás tóxico asfixiante exógeno decorrente de combustão incompleta, não uma forma fisiológica de transporte de CO2."
      },
      {
        id: "e",
        text: "ácido pirúvico complexado a lipoproteínas de densidade muito baixa (VLDL).",
        isCorrect: false,
        distractorRationale: "Ácido pirúvico é um intermediário da glicólise celular, sem ligação com o transporte respiratório de CO2."
      }
    ],
    detailedExplanation: {
      summary: "Aproximadamente 70% do CO2 circula como íon bicarbonato (HCO3-), 23% como carbaminoemoglobina e 7% dissolvido no plasma.",
      stepByStep: [
        "1. O CO2 difunde-se dos tecidos periféricos para o plasma e entra nas hemácias.",
        "2. Na hemácia, a enzima anidrase carbônica catalisa: CO2 + H2O <-> H2CO3.",
        "3. O ácido carbônico dissocia-se espontaneamente em H+ e HCO3-.",
        "4. O H+ é tamponado pela desoxiemoglobina (evitando acidificação brusca da hemácia).",
        "5. O HCO3- sai da hemácia para o plasma através do trocador aniônico Cl-/HCO3- (desvio de cloreto de Hamburger).",
        "6. Assim, o bicarbonato plasmático constitui a principal reserva alcalina e veículo transportador do CO2 até os pulmões."
      ],
      coreConcept: "Transporte de CO2: ~70% como bicarbonato (HCO3-) no plasma; ~23% ligado à globina (carbaminoemoglobina); ~7% dissolvido livre.",
      trapWarning: "Lembre-se: o CO2 liga-se aos grupos amino da globina (carbaminoemoglobina), enquanto o O2 e o CO ligam-se ao átomo de ferro do grupo heme."
    },
    tags: ["fisiologia", "sangue", "hemoglobina", "bicarbonato", "anidrase-carbonica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-010",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Imunológico - Resposta Humoral vs. Celular",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O vírus da imunodeficiência humana (HIV) ataca primariamente as células que expressam o receptor de superfície CD4, com tropismo notório pelos linfócitos T auxiliares (T CD4+ ou T-helper). A diminuição progressiva dessas células compromete tanto a resposta imune mediada por anticorpos quanto a resposta citotóxica contra patógenos oportunistas.",
      source: "ABBAS, A. K.; LICHTMAN, A. H.; PILLAI, S. Imunologia Celular e Molecular. 9ª ed. Elsevier, 2019."
    },
    prompt: "O comprometimento amplo e simultâneo das duas vias da imunidade adaptativa em pacientes com contagem crítica reduzida de linfócitos T CD4+ ocorre porque essas células são responsáveis por",
    options: [
      {
        id: "a",
        text: "fagocitar antígenos estranhos e secretar histamina diretamente nos sítios de inflamação aguda.",
        isCorrect: false,
        distractorRationale: "Fagocitose é atribuição de macrófagos e neutrófilos, e histamina é secretada por mastócitos e basófilos."
      },
      {
        id: "b",
        text: "secretar citocinas (como interleucinas) que ativam tanto linfócitos B quanto linfócitos T citotóxicos (CD8+).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Os linfócitos T auxiliares são o maestro da resposta adaptativa: secretam interleucinas que ativam células B (humoral) e células CD8+ (citotóxica)."
      },
      {
        id: "c",
        text: "produzir diretamente os anticorpos pentaméricos da classe IgM circulantes no plasma.",
        isCorrect: false,
        distractorRationale: "Anticorpos são sintetizados exclusivamente por plasmócitos (linfócitos B diferenciados), e não por linfócitos T."
      },
      {
        id: "d",
        text: "diferenciar-se em plaquetas para estancar hemorragias microvasculares decorrentes de infecções.",
        isCorrect: false,
        distractorRationale: "Plaquetas são fragmentos anucleados derivados de megacariócitos na medula óssea vermelha."
      },
      {
        id: "e",
        text: "destruir células tumorais por meio de lise mecânica sem necessidade de reconhecimento de antígenos.",
        isCorrect: false,
        distractorRationale: "Células que destroem alvos sem especificidade de antígeno são as células Natural Killer (NK), parte da imunidade inata."
      }
    ],
    detailedExplanation: {
      summary: "Os linfócitos T CD4+ orquestram a imunidade adaptativa secretando citocinas que coordenam células B, macrófagos e linfócitos T CD8+.",
      stepByStep: [
        "1. Células apresentadoras de antígeno (macrófagos e células dendríticas) processam antígenos e os expõem via MHC de classe II.",
        "2. Linfócitos T auxiliares (CD4+) reconhecem esse complexo específico pelo receptor TCR.",
        "3. Uma vez ativados, os T CD4+ produzem citocinas (interleucina-2, interferon-gama, etc.).",
        "4. Essas citocinas induzem a proliferação e diferenciação de linfócitos B em plasmócitos produtores de anticorpos (resposta humoral).",
        "5. As citocinas também estimulam a maturação de linfócitos T citotóxicos CD8+ para eliminar células infectadas ou neoplásicas (resposta celular).",
        "6. A destruição dos T CD4+ desarticula ambos os ramos, gerando imunodeficiência profunda."
      ],
      coreConcept: "Linfócitos T CD4+ (T auxiliares) = coordenadores da imunidade específica (ativam B e T CD8+ via citocinas). Linfócitos B/Plasmócitos = anticorpos (resposta humoral). Linfócitos T CD8+ = lise celular (resposta celular).",
      trapWarning: "Lembre-se: linfócitos T não produzem anticorpos. Anticorpos são exclusividade dos linfócitos B/plasmócitos."
    },
    tags: ["fisiologia", "imunologia", "hiv", "linfocitos-cd4", "citocinas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-011",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Endócrino - Osmorregulação e Sistema Renina-Angiotensina-Aldosterona",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em quadros de hemorragia aguda ou desidratação severa, a queda da pressão de perfusão nas arteríolas aferentes renais estimula as células justaglomerulares a secretar a enzima renina no sangue. A renina cliva o angiotensinogênio hepático em angiotensina I, convertida em angiotensina II nos capilares pulmonares pela Enzima Conversora de Angiotensina (ECA).",
      source: "AIRES, M. M. Fisiologia. 5ª ed. Guanabara Koogan, 2018."
    },
    prompt: "Entre as ações sistêmicas da angiotensina II para restabelecer a pressão arterial média, destaca-se a",
    options: [
      {
        id: "a",
        text: "inibição da secreção de aldosterona no córtex adrenal, provocando natriurese reflexa.",
        isCorrect: false,
        distractorRationale: "A angiotensina II estimula intensamente o córtex adrenal a secretar aldosterona, retendo sódio, e não inibindo."
      },
      {
        id: "b",
        text: "potente vasoconstrição arteriolar sistêmica e o estímulo à secreção de aldosterona para retenção de sódio e água.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A angiotensina II contrai arteríolas elevando a resistência periférica e estimula a aldosterona (aumentando reabsorção de Na+ e água nos túbulos distais)."
      },
      {
        id: "c",
        text: "vasodilatação generalizada dos leitos capilares esplâncnicos com redução da frequência cardíaca.",
        isCorrect: false,
        distractorRationale: "Vasodilatação agravaria o choque hemodinâmico; o sistema RAAS atua justamente elevando a pressão por vasoconstrição."
      },
      {
        id: "d",
        text: "estimulação da liberação de peptídeo natriurético atrial pelas aurículas cardíacas dilatadas.",
        isCorrect: false,
        distractorRationale: "O ANP é secretado quando a pressão está alta para excretar sódio e água, atuando de maneira oposta à angiotensina II."
      },
      {
        id: "e",
        text: "supressão imediata da sede e bloqueio da síntese do hormônio antidiurético no hipotálamo.",
        isCorrect: false,
        distractorRationale: "A angiotensina II atua no centro da sede hipotalâmico estimulando a ingestão de água e estimula a secreção de ADH."
      }
    ],
    detailedExplanation: {
      summary: "O eixo RAAS restabelece a pressão através da vasoconstrição promovida pela angiotensina II e da retenção hidrossalina mediada pela aldosterona.",
      stepByStep: [
        "1. Queda da volemia/pressão estimula células justaglomerulares renais a secretar renina.",
        "2. Renina cliva angiotensinogênio (hepático) -> Angiotensina I.",
        "3. ECA (principalmente pulmonar) cliva Angiotensina I -> Angiotensina II.",
        "4. A Angiotensina II exerce vasoconstrição arteriolar direta e potente, elevando a resistência vascular periférica.",
        "5. A Angiotensina II estimula a zona glomerulosa da adrenal a produzir aldosterona, que promove reabsorção de Na+ e secreção de K+/H+ nos túbulos renais distais.",
        "6. O volume sanguíneo e a pressão arterial são restaurados."
      ],
      coreConcept: "Sistema Renina-Angiotensina-Aldosterona (SRAA): ativado em hipotensão/hipovolemia. Angiotensina II contrai vasos; Aldosterona retém Na+ e água.",
      trapWarning: "Fármacos anti-hipertensivos amplamente prescritos no SUS atuam inibindo a ECA (como enalapril e captopril) ou bloqueando os receptores de angiotensina II (como losartana)."
    },
    tags: ["fisiologia", "renal", "pressao-arterial", "renina", "aldosterona"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-012",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Nervoso Autônomo - Simpático vs. Parassimpático",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O sistema nervoso motor visceral (autônomo) coordena as funções involuntárias e vegetativas por meio de duas divisões fisiologicamente antagônicas: a divisão simpática (toracolombar), associada a reações de luta ou fuga, e a divisão parassimpática (craniossacral), voltada ao repouso, digestão e conservação energética.",
      source: "LENT, R. Cem Bilhões de Neurônios: Conceitos Fundamentais de Neurociência. 2ª ed. Atheneu, 2010."
    },
    prompt: "Em uma situação iminente de perigo físico, a descarga adrenérgica do sistema nervoso simpático desencadeia no organismo",
    options: [
      {
        id: "a",
        text: "miose pupilar, contração dos esfíncteres vesicais e aumento do peristaltismo gastrointestinal.",
        isCorrect: false,
        distractorRationale: "Miose e aumento do peristaltismo são respostas parassimpáticas (repouso/digestão)."
      },
      {
        id: "b",
        text: "broncodilatação pulmonar, taquicardia com elevação do débito cardíaco e midríase pupilar.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na reação de alerta, o simpático dilata brônquios (melhor ventilação), aumenta frequência cardíaca (perfusão muscular) e dilata pupilas (midríase)."
      },
      {
        id: "c",
        text: "bradicardia acentuada associada a intensa secreção ácida gástrica e salivação fluida copiosa.",
        isCorrect: false,
        distractorRationale: "Bradicardia e estímulo secretor digestivo são efeitos do nervo vago (parassimpático)."
      },
      {
        id: "d",
        text: "vasodilatação em órgãos esplâncnicos e diminuição do fluxo sanguíneo para a musculatura esquelética.",
        isCorrect: false,
        distractorRationale: "Ocorre o oposto: vasoconstrição esplâncnica e desvio preferencial do fluxo sanguíneo para a musculatura esquelética."
      },
      {
        id: "e",
        text: "bloqueio da glicogenólise hepática com deposição acelerada de triglicerídeos no tecido adiposo.",
        isCorrect: false,
        distractorRationale: "A adrenalina ativa a glicogenólise para disponibilizar glicose imediata para o trabalho muscular."
      }
    ],
    detailedExplanation: {
      summary: "A ativação simpática prepara o corpo para emergências: taquicardia, broncodilatação, midríase e inibição da motilidade digestiva.",
      stepByStep: [
        "1. Percepção da ameaça ativa o eixo hipotálamo-simpático-adrenal.",
        "2. Fibras pós-ganglionares liberam noradrenalina e a medula adrenal secreta adrenalina no sangue.",
        "3. Em receptores beta-1 cardíacos: aumento do inotropismo e cronotropismo (taquicardia).",
        "4. Em receptores beta-2 brônquicos: relaxamento da musculatura lisa e broncodilatação para maximizar captação de O2.",
        "5. Em receptores alfa-1 pupilares: contração do músculo radial da íris gerando midríase (dilatação da pupila) para ampliar o campo visual.",
        "6. Inibição das funções não essenciais à fuga: redução da secreção digestiva e da motilidade intestinal."
      ],
      coreConcept: "Simpático (luta ou fuga): taquicardia, broncodilatação, midríase, glicogenólise, inibe digestão. Parassimpático (descanso e digestão): bradicardia, broncoconstrição, miose, ativa digestão.",
      trapWarning: "Midríase = dilatação pupilar (simpático). Miose = constrição pupilar (parassimpático). Lembre-se: 'Midríase' é a palavra maior (pupila maior)."
    },
    tags: ["fisiologia", "sistema-nervoso", "simpatico", "parassimpatico", "adrenalina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-013",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Locomotor - Contração Muscular Esquelética",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A contração do sarcômero na fibra muscular estriada esquelética baseia-se na teoria dos filamentos deslizantes proposta por Huxley. O encurtamento do sarcômero decorre da tração exercida pelas cabeças da miosina sobre os filamentos de actina, processo rigorosamente dependente de íons cálcio (Ca2+) e ATP.",
      source: "ALBERTS, B. et al. Biologia Molecular da Célula. 6ª ed. Artmed, 2017."
    },
    prompt: "No mecanismo molecular da contração muscular, os íons cálcio liberados do retículo sarcoplasmático atuam ligando-se à",
    options: [
      {
        id: "a",
        text: "miosina pesada, permitindo a síntese direta de fosfocreatina nas pontes cruzadas.",
        isCorrect: false,
        distractorRationale: "O cálcio liga-se ao complexo troponina, e a creatina fosfato é ressintetizada enzimaticamente."
      },
      {
        id: "b",
        text: "troponina, provocando deslocamento conformacional da tropomiosina e expondo os sítios de ligação da actina.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Ca2+ liga-se à troponina C, movendo a tropomiosina que bloqueava o sítio ativo da actina, permitindo o engate da cabeça de miosina."
      },
      {
        id: "c",
        text: "actina globular, clivando-a enzimaticamente em filamentos intermediários insolúveis.",
        isCorrect: false,
        distractorRationale: "A actina não é clivada enzimaticamente durante a contração fisiológica; ela desliza intacta."
      },
      {
        id: "d",
        text: "bainha de mielina epimisial, acelerando o influxo de acetilcolina nos túbulos T.",
        isCorrect: false,
        distractorRationale: "Músculos esqueléticos não têm bainha de mielina em seus sarcômeros; acetilcolina atua na placa motora externa."
      },
      {
        id: "e",
        text: "titina elástica, bloqueando permanentemente a entrada de ATP na zona H do sarcômero.",
        isCorrect: false,
        distractorRationale: "A titina atua na elasticidade passiva e o ATP é fundamental para o desprendimento da miosina e novo ciclo."
      }
    ],
    detailedExplanation: {
      summary: "O cálcio liga-se à troponina, que move a tropomiosina e expõe os sítios ativos da actina para ligação com a miosina.",
      stepByStep: [
        "1. Potencial de ação propaga-se pelos túbulos T e atinge o retículo sarcoplasmático.",
        "2. Canais de cálcio voltagem-dependentes abrem-se, liberando Ca2+ no sarcoplasma.",
        "3. O Ca2+ liga-se à subunidade C da troponina.",
        "4. A troponina sofre alteração conformacional que traciona o filamento de tropomiosina para fora do sulco de ligação.",
        "5. Os sítios de ligação da actina ficam expostos; as cabeças de miosina (com ADP + Pi) ligam-se e realizam o golpe de força (power stroke).",
        "6. A ligação de uma nova molécula de ATP à miosina desfaz a ponte cruzada, permitindo o relaxamento."
      ],
      coreConcept: "Contração Muscular: Despolarização -> Túbulos T -> Liberação de Ca2+ do retículo -> Ca2+ liga-se à troponina -> Tropomiosina desloca-se -> Actina e Miosina deslizam -> ATP desconecta miosina.",
      trapWarning: "No rigor mortis (rigidez cadavérica), o esgotamento do ATP impede que a miosina se desprenda da actina, travando os músculos contraídos."
    },
    tags: ["fisiologia", "muscular", "calcio", "actina-miosina", "sarcomero"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-014",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Digestório - Absorção de Lipídios e Formação de Quilomícrons",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A digestão dos triacilgliceróis alimentares tem início moderado no estômago e é completada no lúmen do intestino delgado pela lipase pancreática e pelos sais biliares. Após serem absorvidos pelos enterócitos das vilosidades intestinais, esses lipídios seguem uma rota de transporte vascular distinta daquela percorrida pelos aminoácidos e monossacarídeos.",
      source: "DEVLIN, T. M. Manual de Bioquímica com Correlações Clínicas. 7ª ed. Blucher, 2011."
    },
    prompt: "Ao contrário dos carboidratos e aminoácidos, que ingressam na circulação sanguínea em direção ao fígado pela veia porta hepática, os lipídios processados pelos enterócitos são",
    options: [
      {
        id: "a",
        text: "incorporados em cristais de colesterol e transportados diretamente pelas artérias mesentéricas até a medula renal.",
        isCorrect: false,
        distractorRationale: "Artérias levam sangue aos órgãos periféricos, não drenam substâncias absorvidas do intestino."
      },
      {
        id: "b",
        text: "empacotados em quilomícrons e absorvidos nos vasos linfáticos lácteos, alcançando a circulação venosa sistêmica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Os enterócitos ressintetizam triglicerídeos e montam quilomícrons, que entram nos capilares linfáticos (quilíferos/lácteos) e desembocam no ducto torácico."
      },
      {
        id: "c",
        text: "degradados em corpos cetônicos no lúmen cecal e absorvidos por osmose simples pelas células caliciformes.",
        isCorrect: false,
        distractorRationale: "Corpos cetônicos são sintetizados pelo fígado no jejum; células caliciformes produzem muco protetor."
      },
      {
        id: "d",
        text: "filtrados pelos glomérulos renais antes de ingressarem no espaço intersticial subcutâneo.",
        isCorrect: false,
        distractorRationale: "Lipídios não passam por filtração renal no processo de absorção nutricional primária."
      },
      {
        id: "e",
        text: "unidos a moléculas de albumina plasmática para absorção passiva no epitélio da vesícula biliar.",
        isCorrect: false,
        distractorRationale: "A vesícula apenas armazena e concentra a bile, não absorve os nutrientes da digestão intestinal."
      }
    ],
    detailedExplanation: {
      summary: "Ácidos graxos de cadeia longa e monoglicerídeos são reesterificados no enterócito em quilomícrons e caem nos capilares linfáticos.",
      stepByStep: [
        "1. No duodeno, a bile emulsifica os lipídios e a lipase pancreática hidrolisa-os em ácidos graxos livres e 2-monoglicerídeos.",
        "2. Formam-se micelas mistas que facilitam a difusão dos lipídios através da membrana apical dos enterócitos.",
        "3. No retículo endoplasmático liso do enterócito, os triacilgliceróis são ressintetizados.",
        "4. No complexo de Golgi, são associados a apolipoproteínas e colesterol, formando lipoproteínas chamadas quilomícrons.",
        "5. Devido ao seu grande tamanho, os quilomícrons sofrem exocitose e penetram nos vasos quilíferos (linfáticos) centrais das vilosidades.",
        "6. A linfa drena pelo ducto torácico para as veias subclávia e jugular esquerdas, ingressando no sangue sem passar primeiro pelo fígado."
      ],
      coreConcept: "Glicose e Aminoácidos -> Capilares sanguíneos -> Sistema Porta Hepático -> Fígado. Lipídios (Quilomícrons) -> Vasos Linfáticos (Quilíferos) -> Ducto Torácico -> Circulação sistêmica venosa.",
      trapWarning: "Esta é uma clássica pegadinha do ENEM: os lipídios não vão diretamente para o fígado pela veia porta hepática!"
    },
    tags: ["fisiologia", "digestao", "lipidios", "quilomicrons", "sistema-linfatico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-015",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Endócrino - Metabolismo do Cálcio: Paratormônio e Calcitonina",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O cálcio iônico sérico (Ca2+) é rigorosamente controlado para garantir excitabilidade neuromuscular e coagulação sanguínea adequadas. Duas glândulas endócrinas antagônicas monitoram continuamente a calcemia: as paratireoides e as células parafoliculares (células C) da tireoide.",
      source: "GARDNER, D. G.; SHOBACK, D. Greenspan: Endocrinologia Básica e Clínica. 9ª ed. AMGH, 2013."
    },
    prompt: "Quando os níveis plasmáticos de Ca2+ caem abaixo da faixa fisiológica (hipocalcemia), o organismo reage secretando paratormônio (PTH), cuja ação primária consiste em",
    options: [
      {
        id: "a",
        text: "estimular a atividade dos osteoclastos e a reabsorção renal de cálcio, elevando a calcemia.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O PTH ativa osteoclastos para reabsorver matriz óssea, reduz excreção renal de Ca2+ e ativa a vitamina D renal para absorção intestinal."
      },
      {
        id: "b",
        text: "ativar os osteoblastos na deposição de hidroxiapatita nos ossos longos e excretar cálcio na urina.",
        isCorrect: false,
        distractorRationale: "Estimular osteoblastos diminuiria ainda mais a calcemia, agravando a hipocalcemia. Essa é a função da calcitonina."
      },
      {
        id: "c",
        text: "inibir a síntese renal de calcitriol (vitamina D ativa), bloqueando a absorção alimentar no duodeno.",
        isCorrect: false,
        distractorRationale: "O PTH estimula a 1-alfa-hidroxilase renal, ativando a vitamina D (calcitriol) para aumentar a captação intestinal de cálcio."
      },
      {
        id: "d",
        text: "promover a excreção maciça de cálcio pelos túbulos contorcidos proximais para evitar cálculos renais.",
        isCorrect: false,
        distractorRationale: "O PTH promove reabsorção (retenção) de cálcio e excreção de fosfato (fosfatúria)."
      },
      {
        id: "e",
        text: "inibir a secreção hipofisária de prolactina e hormônio do crescimento (GH).",
        isCorrect: false,
        distractorRationale: "O controle de cálcio pelo PTH é independente de prolactina e GH."
      }
    ],
    detailedExplanation: {
      summary: "O PTH é um hormônio hipercalcemiante: estimula osteoclastos, poupa cálcio nos rins e ativa a vitamina D.",
      stepByStep: [
        "1. Hipocalcemia detectada por receptores sensíveis ao cálcio nas glândulas paratireoides.",
        "2. Secreção de PTH na corrente sanguínea.",
        "3. Ação óssea: estímulo indireto aos osteoclastos (via RANKL nos osteoblastos), degradando matriz óssea e liberando cálcio e fosfato.",
        "4. Ação renal: aumento da reabsorção tubular de Ca2+ e aumento da excreção de fosfato na urina.",
        "5. Ação na vitamina D: conversão renal de 25-hidroxivitamina D em 1,25-di-hidroxivitamina D (calcitriol).",
        "6. O calcitriol estimula a síntese de calbindina nos enterócitos, absorvendo mais cálcio dos alimentos.",
        "7. A calcemia retorna ao normal."
      ],
      coreConcept: "Paratormônio (PTH - paratireoide) = Hipercalcemiante (tira cálcio do osso para o sangue). Calcitonina (tireoide) = Hipocalcemiante (guarda cálcio do sangue no osso).",
      trapWarning: "Lembre-se do macete: 'Calcitonina põe cálcio no osso (calcifica)'. 'Paratormônio Para o cálcio de cair no sangue'."
    },
    tags: ["fisiologia", "endocrino", "calcio", "paratormonio", "calcitonina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-016",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Renal - Filtração Glomerular e Permeabilidade de Membrana",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A barreira de filtração glomerular é composta por três camadas: o endotélio fenestrado capilar, a membrana basal glomerular rica em proteoglicanos com carga negativa (heparansulfato) e os podócitos com fendas de filtração entre os pedicelos. Em indivíduos hígidos, a urina é praticamente isenta de proteínas de médio e alto peso molecular.",
      source: "KASISKE, B. et al. Fisiopatologia Renal. 4ª ed. Artmed, 2016."
    },
    prompt: "Em um exame de urina de rotina, a presença anormal e massiva de albumina (proteinúria) indica diretamente lesão estrutural na barreira de filtração glomerular decorrente da",
    options: [
      {
        id: "a",
        text: "perda da integridade das cargas elétricas negativas da membrana basal e das fendas podocitárias.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A albumina (~69 kDa) tem carga negativa e é repelida pelas cargas negativas da membrana basal e fendas de filtração; sua lesão permite a passagem de albumina para o filtrado."
      },
      {
        id: "b",
        text: "hiperativação das bombas de prótons no túbulo contorcido distal com secreção ativa de proteínas.",
        isCorrect: false,
        distractorRationale: "Proteínas não são secretadas ativamente nos túbulos coletores ou distais; a proteinúria é uma falha de filtração glomerular."
      },
      {
        id: "c",
        text: "redução drástica da pressão hidrostática intracapilar da arteríola eferente.",
        isCorrect: false,
        distractorRationale: "Redução de pressão diminuiria a taxa de filtração em vez de permitir o escape anormal de macromoléculas."
      },
      {
        id: "d",
        text: "degradação da pelve renal por refluxo vesicoureteral com reabsorção de proteínas intersticiais.",
        isCorrect: false,
        distractorRationale: "Refluxo pode predispor a infecção urinária alta, mas não explica a alteração primária da barreira de filtração."
      },
      {
        id: "e",
        text: "precipitação de microcristais de oxalato de cálcio nas vilosidades da uretra prostática.",
        isCorrect: false,
        distractorRationale: "Cristais de oxalato estão associados a nefrolitíase, sem relação com a seletividade podocitária da filtração."
      }
    ],
    detailedExplanation: {
      summary: "A albumina é retida no sangue por tamanho e repulsão de carga negativa; danos à barreira glomerular geram proteinúria.",
      stepByStep: [
        "1. A albumina plasmática possui diâmetro próximo ao raio dos poros glomerulares, mas não é filtrada devido à forte carga elétrica negativa das glicoproteínas da membrana basal.",
        "2. Condições como glomerulonefrites ou nefropatia diabética causam destruição das cargas negativas e alargamento dos poros podocitários.",
        "3. A albumina atravessa a barreira lesada e cai no espaço de Bowman.",
        "4. A capacidade de reabsorção de proteínas nos túbulos proximais por pinocitose é saturada.",
        "5. O excedente é eliminado na urina, configurando o quadro de proteinúria/albuminúria."
      ],
      coreConcept: "Barreira de Filtração Glomerular: seletiva por tamanho (raio molecular) e por carga elétrica negativa (repulsa proteínas como albumina).",
      trapWarning: "Glicose na urina (glicosúria) não é lesão podocitária, mas sim saturação dos transportadores SGLT2 do túbulo proximal por hiperglicemia (>180 mg/dL)."
    },
    tags: ["fisiologia", "renal", "glomerulo", "podocitos", "proteinuria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-017",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Respiratório - Efeito Bohr e Afinidade da Hemoglobina",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A curva de dissociação da oxi-hemoglobina possui formato sigmoide devido à cooperatividade da ligação do oxigênio. Em tecidos metabolicamente muito ativos (como músculos em exercício), ocorrem três alterações simultâneas: aumento da pCO2 local, redução do pH (acidose) e elevação da temperatura tecidual. Esse fenômeno é conhecido como Efeito Bohr.",
      source: "WEST, J. B. Fisiologia Respiratória: Princípios Básicos. 10ª ed. Artmed, 2017."
    },
    prompt: "O Efeito Bohr favorece a oxigenação dos tecidos metabolicamente ativos porque provoca",
    options: [
      {
        id: "a",
        text: "o deslocamento da curva de dissociação para a direita, reduzindo a afinidade da hemoglobina pelo O2 e facilitando sua liberação.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Acidose, calor e CO2 deslocam a curva para a direita: a hemoglobina 'solta' oxigênio mais facilmente nos tecidos que mais precisam."
      },
      {
        id: "b",
        text: "o deslocamento da curva para a esquerda, aumentando a afinidade da hemoglobina e retendo o oxigênio nas hemácias.",
        isCorrect: false,
        distractorRationale: "Desvio para a esquerda ocorre no frio, pH básico e baixo CO2 (como nos pulmões), onde a hemoglobina retém oxigênio avidamente."
      },
      {
        id: "c",
        text: "a inibição da dissociação de O2 para convertê-lo diretamente em peroxissomos hepáticos.",
        isCorrect: false,
        distractorRationale: "O objetivo biológico é suprir as mitocôndrias musculares com O2 livre para a cadeia respiratória."
      },
      {
        id: "d",
        text: "a oxidação do ferro ferroso (Fe2+) a férrico (Fe3+), gerando metemoglobina estável nos capilares.",
        isCorrect: false,
        distractorRationale: "Metemoglobina é uma forma anormal disfuncional que não transporta oxigênio, não um mecanismo adaptativo fisiológico."
      },
      {
        id: "e",
        text: "a polimerização insolúvel das globinas, transformando hemácias bicôncavas em esferócitos hiperosmolares.",
        isCorrect: false,
        distractorRationale: "Polimerização de globinas ocorre na anemia falciforme devido a mutação genética na hemoglobina S, sem relação com o efeito Bohr."
      }
    ],
    detailedExplanation: {
      summary: "O Efeito Bohr reduz a afinidade da hemoglobina pelo oxigênio em ambientes ácidos, quentes e ricos em CO2, otimizando a entrega tecidual.",
      stepByStep: [
        "1. Tecido em esforço produz calor, CO2 e prótons H+ (ácido lático e ácido carbônico).",
        "2. Os prótons H+ ligam-se a aminoácidos específicos da desoxiemoglobina, estabilizando a conformação T (tensa) de baixa afinidade por O2.",
        "3. A curva de saturação de O2 desvia-se para a direita.",
        "4. Isso significa que, para uma mesma pO2 tecidual, a saturação percentual da hemoglobina é menor, ou seja, mais O2 se desliga e entra nas células musculares.",
        "5. O tecido em débito energético recebe exatamente o oxigênio necessário para manter a fosforilação oxidativa mitocondrial."
      ],
      coreConcept: "Curva para a Direita (solta O2 nos tecidos ativos): Menos pH (mais H+), mais CO2, mais Temperatura, mais 2,3-BPG. Curva para a Esquerda (segura O2 nos pulmões): Mais pH, menos CO2, menor Temperatura.",
      trapWarning: "Desvio para a direita = menor afinidade = MAIOR liberação de O2 para as células necessitadas."
    },
    tags: ["fisiologia", "respiracao", "hemoglobina", "efeito-bohr", "oxigenacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-018",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Imunológico - Transfusões e Incompatibilidade Rh (Eritroblastose Fetal)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A eritroblastose fetal (doença hemolítica do recém-nascido) resulta da incompatibilidade imunológica materno-fetal para o fator Rh (antígeno D). Ocorre hemólise de hemácias fetais por anticorpos de classe IgG que atravessam ativamente a barreira placentária humana.",
      source: "HOFFBRAND, A. V.; MOSS, P. A. H. Fundamentos em Hematologia. 7ª ed. Artmed, 2018."
    },
    prompt: "Para que haja risco clássico de ocorrência da eritroblastose fetal em uma segunda gestação, a configuração fenotípica obrigatória entre a mãe, o primeiro filho e o segundo feto deve ser, respectivamente,",
    options: [
      {
        id: "a",
        text: "Mãe Rh+; Primeiro filho Rh-; Segundo filho Rh+.",
        isCorrect: false,
        distractorRationale: "Mães Rh+ já possuem o antígeno D e não produzem anti-Rh (não há risco de sensibilização)."
      },
      {
        id: "b",
        text: "Mãe Rh-; Primeiro filho Rh+; Segundo filho Rh+.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Mãe Rh- é sensibilizada no parto do 1º filho Rh+ (produzindo anti-Rh IgG). Na gestação de outro filho Rh+, os anticorpos maternos atravessam a placenta e atacam as hemácias do feto."
      },
      {
        id: "c",
        text: "Mãe Rh-; Primeiro filho Rh-; Segundo filho Rh-.",
        isCorrect: false,
        distractorRationale: "Se o primeiro filho for Rh-, a mãe não entra em contato com o antígeno D e não ocorre sensibilização."
      },
      {
        id: "d",
        text: "Mãe Rh+; Primeiro filho Rh+; Segundo filho Rh-.",
        isCorrect: false,
        distractorRationale: "Mãe Rh+ não produz anti-Rh e o feto Rh- não possui antígeno D para ser atacado."
      },
      {
        id: "e",
        text: "Mãe Rh-; Primeiro filho Rh+; Segundo filho Rh-.",
        isCorrect: false,
        distractorRationale: "Se o segundo filho for Rh-, ele não expressa o antígeno D nas hemácias e os anticorpos anti-Rh maternos não causam hemólise."
      }
    ],
    detailedExplanation: {
      summary: "A eritroblastose fetal requer mãe Rh- previamente sensibilizada por filho Rh+, afetando a gestação subsequente de feto Rh+.",
      stepByStep: [
        "1. A mãe deve ser Rh negativo (genótipo rr) e nunca ter tido contato prévio com o antígeno D.",
        "2. O primeiro feto é Rh positivo (pai Rh+ transmite alelo R).",
        "3. Durante o parto do primeiro filho, ocorre micro-hemorragia feto-materna: hemácias fetais Rh+ entram no sangue materno.",
        "4. O sistema imune da mãe reconhece o antígeno D e produz anticorpos anti-Rh da classe IgG e células de memória (sensibilização materna).",
        "5. Em uma segunda gestação com feto Rh+, os anticorpos anti-Rh maternos (IgG) atravessam a placenta e causam hemólise maciça das hemácias do feto.",
        "6. Profilaxia: administração de imunoglobulina anti-Rh (soro) na mãe até 72h após o primeiro parto para destruir as hemácias fetais antes da sensibilização materna."
      ],
      coreConcept: "Eritroblastose fetal: Mãe Rh- / Pai Rh+ / Feto Rh+. Sensibilização no 1º parto Rh+; doença manifesta-se nos filhos Rh+ posteriores.",
      trapWarning: "No sistema ABO a eritroblastose é rara porque os anticorpos anti-A e anti-B naturais são predominantemente IgM (pentâmeros grandes que NÃO atravessam a placenta)."
    },
    tags: ["fisiologia", "imunologia", "fator-rh", "eritroblastose-fetal", "genetica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-019",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Digestório - Fígado, Metabolismo e Funções da Bile",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O fígado é a maior glândula do organismo humano e desempenha centenas de funções metabólicas vitais, incluindo desintoxicação de xenobióticos, síntese de proteínas plasmáticas (como albumina e fatores de coagulação), armazenamento de glicogênio e produção contínua de bile.",
      source: "GUYTON, A. C.; HALL, J. E. Tratado de Fisiologia Médica. 13ª ed. Elsevier, 2016."
    },
    prompt: "Em relação à digestão de nutrientes no tubo gastrointestinal, a função específica exercida pelos sais biliares secretados pelo fígado é",
    options: [
      {
        id: "a",
        text: "hidrolisar quimicamente as ligações éster dos triacilgliceróis, liberando glicerol e ácidos graxos no estômago.",
        isCorrect: false,
        distractorRationale: "A hidrólise química de ligações éster é catalisada por enzimas (lipases), e não por sais biliares."
      },
      {
        id: "b",
        text: "emulsionar gotículas lipídicas, aumentando a área superficial exposta à ação catalítica da lipase pancreática.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Os sais biliares agem como tensoativos anfipáticos: fracionam grandes gotas de gordura em microgotículas, ampliando a superfície de contato enzimática."
      },
      {
        id: "c",
        text: "converter polipeptídeos em dipeptídeos e aminoácidos através de clivagem proteolítica.",
        isCorrect: false,
        distractorRationale: "Proteólise é realizada por enzimas como pepsina, tripsina, quimiotripsina e carboxipeptidases."
      },
      {
        id: "d",
        text: "neutralizar o bolo alimentar salivar antes que ele atinja o esfíncter cárdia esofágico.",
        isCorrect: false,
        distractorRationale: "A bile é lançada no duodeno através do ducto colédoco, muito abaixo do esôfago e do estômago."
      },
      {
        id: "e",
        text: "sintetizar vitamina B12 e fator intrínseco gástrico para absorção ativa no íleo terminal.",
        isCorrect: false,
        distractorRationale: "O fator intrínseco é produzido pelas células parietais do estômago, e a vitamina B12 é de origem dietética microbiana."
      }
    ],
    detailedExplanation: {
      summary: "A bile não possui enzimas digestivas; atua fisicamente emulsificando lipídios para facilitar a clivagem pela lipase.",
      stepByStep: [
        "1. Gorduras são insolúveis em água e tendem a aglutinar-se em grandes glóbulos lipídicos.",
        "2. A lipase pancreática é uma enzima hidrossolúvel que só atua na interface água-lipídio.",
        "3. Os sais biliares (ácidos cólico e quenodesoxicólico conjugados com glicina ou taurina) possuem natureza anfipática (porção polar e apoiar).",
        "4. Eles se inserem na superfície das gorduras, reduzindo a tensão superficial e quebrando a massa lipídica em miríades de gotículas microscópicas (emulsão).",
        "5. A área superficial total disponível para a lipase aumenta centenas de vezes, acelerando a taxa de digestão lipídica."
      ],
      coreConcept: "Bile = Emulsificação mecânica/física de gorduras (ação detergente). NÃO possui enzimas hidrolíticas.",
      trapWarning: "Se a questão perguntar se a bile digere quimicamente a gordura, a resposta é NÃO. Ela atua como tensoativo facilitador físico."
    },
    tags: ["fisiologia", "digestao", "figado", "bile", "emulsificacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-020",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Sensorial - Mecanismo da Visão e Fotorreceptores",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A retina neural humana contém dois tipos especializados de fotorreceptores: cones e bastonetes. Enquanto os bastonetes apresentam altíssima sensibilidade à luminosidade tênue, os cones necessitam de maior intensidade de luz, sendo responsáveis pela percepção cromática e pela acuidade visual nítida na região da fóvea central.",
      source: "BEAR, M. F.; CONNORS, B. W.; PARADISO, M. A. Neurociências: Desvendando o Sistema Nervoso. 4ª ed. Artmed, 2017."
    },
    prompt: "A cegueira noturna (nictalopia), caracterizada por grande dificuldade de enxergar em ambientes com pouca luminosidade, está associada à carência dietética de vitamina A (retinol), pois essa substância é precursora do(a)",
    options: [
      {
        id: "a",
        text: "rodopsina, pigmento fotossensível essencial presente nas membranas dos bastonetes.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O retinol oxida-se a retinal, que se liga à opsina para formar a rodopsina, o fotopigmento dos bastonetes responsável pela visão escotópica (com pouca luz)."
      },
      {
        id: "b",
        text: "mielina que reveste os axônios do nervo óptico no quiasma craniano.",
        isCorrect: false,
        distractorRationale: "Mielinização depende de lipídios e proteínas estruturais, não de derivados diretos da vitamina A."
      },
      {
        id: "c",
        text: "humor aquoso produzido pelos processos ciliares na câmara anterior do bulbo ocular.",
        isCorrect: false,
        distractorRationale: "Humor aquoso é um filtrado do plasma responsável pela pressão intraocular, sem pigmentos fotossensíveis."
      },
      {
        id: "d",
        text: "melanina secretada pelo epitélio pigmentar para absorver fótons no cristalino.",
        isCorrect: false,
        distractorRationale: "Melanina é sintetizada a partir do aminoácido tirosina, e o cristalino é avascular e transparente."
      },
      {
        id: "e",
        text: "acetilcolina liberada nas sinapses das células bipolares do corpo vítreo.",
        isCorrect: false,
        distractorRationale: "Acetilcolina é sintetizada a partir de colina e acetil-CoA, sem relação com carência de retinol."
      }
    ],
    detailedExplanation: {
      summary: "A vitamina A forma o retinal, componente prostético da rodopsina nos bastonetes, crucial para a visão na penumbra.",
      stepByStep: [
        "1. Os bastonetes são fotorreceptores adaptados para visão em baixa luminosidade (visão escotópica).",
        "2. Seu pigmento fotossensível é a rodopsina, formada pela proteína opsina unida ao 11-cis-retinal.",
        "3. O 11-cis-retinal é um derivado oxidado da vitamina A (retinol).",
        "4. A absorção de um fóton fotoisomeriza o 11-cis-retinal em todo-trans-retinal, ativando a cascata da transducina e hiperpolarizando o fotorreceptor.",
        "5. Na deficiência de vitamina A, a síntese de rodopsina cai drasticamente, levando à inabilidade dos bastonetes de detectar baixos níveis de luz (cegueira noturna/nictalopia)."
      ],
      coreConcept: "Bastonetes = visão no escuro/P&B (pigmento: rodopsina, precisa de Vitamina A). Cones = cores e nitidez/fóvea (pigmentos: fotopsinas azul, verde e vermelha).",
      trapWarning: "Além da cegueira noturna, a avitaminose A grave causa xeroftalmia (ressecamento da córnea e cegueira permanente)."
    },
    tags: ["fisiologia", "sensorial", "visao", "vitamina-a", "bastonetes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-021",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Renal - Reabsorção de Glicose e Diabetes Mellitus",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No néfron saudável, toda a glicose filtrada nos capilares glomerulares é reabsorvida ao longo do túbulo contorcido proximal por cotransporte ativo secundário acoplado ao sódio (transportadores SGLT2). Contudo, a capacidade de transporte desses carreadores apresenta um limite físico de saturação (TmG - transporte tubular máximo de glicose, cerca de 375 mg/min).",
      source: "EATON, D. C.; POOLER, J. P. Vander: Fisiologia Renal. 8ª ed. McGraw-Hill, 2016."
    },
    prompt: "Em um paciente portador de diabetes mellitus descompensado com glicemia de 320 mg/dL, a manifestação clínica de poliúria (micção excessiva) ocorre porque",
    options: [
      {
        id: "a",
        text: "o excesso de glicose não reabsorvida no lúmen tubular gera gradiente osmótico que retém água na urina.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A glicose excedente satura os transportadores SGLT2 e permanece no lúmen do néfron, atuando como soluto osmoticamente ativo que impede a reabsorção de água (diurese osmótica)."
      },
      {
        id: "b",
        text: "a insulina elevada no plasma estimula a filtração glomerular de albuminas livres no córtex renal.",
        isCorrect: false,
        distractorRationale: "No diabetes descompensado há falta ou resistência à insulina, e insulina não estimula filtração de albumina."
      },
      {
        id: "c",
        text: "a aldosterona adrenal deixa de secretar potássio, bloqueando o influxo de água na bexiga urinária.",
        isCorrect: false,
        distractorRationale: "A retenção de água na urina do diabético é primariamente um evento osmótico luminal, não disfunção da aldosterona."
      },
      {
        id: "d",
        text: "o glucagon hepático induz a necrose imediata dos podócitos da cápsula de Bowman.",
        isCorrect: false,
        distractorRationale: "O glucagon não causa necrose de podócitos; a poliúria decorre do efeito osmótico físico da glicosúria."
      },
      {
        id: "e",
        text: "a reabsorção de íons sódio nos ductos coletores quadruplica em resposta à hipóxia tubular.",
        isCorrect: false,
        distractorRationale: "O sódio luminal também é carreado na diurese osmótica gerada pela carga de glicose filtrada."
      }
    ],
    detailedExplanation: {
      summary: "A glicemia acima do limiar renal satura os SGLT2; a glicosúria exerce efeito osmótico atraindo água e causando poliúria e polidipsia.",
      stepByStep: [
        "1. Glicemia de 320 mg/dL supera em muito o limiar renal (~180 mg/dL).",
        "2. A quantidade de glicose que entra no túbulo proximal satura os transportadores SGLT2 e SGLT1.",
        "3. A glicose não reabsorvida permanece no interior do túbulo renal (glicosúria).",
        "4. No túbulo proximal, alça de Henle e ductos coletores, a glicose luminal atua como soluto osmótico não reabsorvido, diminuindo o gradiente osmótico transepitelial.",
        "5. A água deixa de ser reabsorvida e é eliminada na urina em grandes volumes (diurese osmótica -> poliúria).",
        "6. A perda excessiva de água desidrata o paciente, acionando o centro da sede hipotalâmico (polidipsia compensatória)."
      ],
      coreConcept: "Os '4 Ps' clássicos do Diabetes descompensado: Poliúria (muita urina por diurese osmótica), Polidipsia (muita sede), Polifagia (muita fome celular) e Perda de peso.",
      trapWarning: "Lembre-se: glicosúria ocorre porque os transportadores saturam (cinética de Michaelis-Menten), e não por canais 'abertos' na bexiga."
    },
    tags: ["fisiologia", "renal", "diabetes", "glicosuria", "diurese-osmotica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-022",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Endócrino - Ciclo Menstrual e Eixo Hipotálamo-Hipófise-Ovário",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O ciclo ovariano humano é dividido em fase folicular e fase lútea, separadas pelo evento ovulatório que ocorre por volta do 14º dia em um ciclo típico de 28 dias. Durante a fase folicular tardia, o folículo ovariano maduro de Graaf passa a secretar níveis extraordinariamente elevados de estradiol.",
      source: "STRAUSS, J. F.; BARBIERI, R. L. Yen & Jaffe's Reproductive Endocrinology. 8th ed. Elsevier, 2019."
    },
    prompt: "O gatilho hormonal responsável por induzir diretamente a ruptura do folículo maduro e a consequente ovulação é o(a)",
    options: [
      {
        id: "a",
        text: "queda súbita dos níveis de progesterona no final da fase lútea endometrial.",
        isCorrect: false,
        distractorRationale: "A queda de progesterona ocorre se não houver fecundação, desencadeando a menstruação, e não a ovulação."
      },
      {
        id: "b",
        text: "pico agudo de secreção do hormônio luteinizante (LH) decorrente do feedback positivo do estradiol.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Altas concentrações sustentadas de estrogênio no final da fase folicular exercem feedback positivo temporário sobre a hipófise, deflagrando o pico de LH que causa a ovulação."
      },
      {
        id: "c",
        text: "secreção contínua de gonadotrofina coriônica humana (hCG) pela parede uterina miometrial.",
        isCorrect: false,
        distractorRationale: "O hCG é produzido pelo sinciciotrofoblasto embrionário somente após a implantação na gravidez."
      },
      {
        id: "d",
        text: "elevação maciça da prolactina com supressão total dos folículos primordiais adjacentes.",
        isCorrect: false,
        distractorRationale: "A prolactina estimula a lactogênese mamária e inibe a ovulação durante a amamentação exclusiva."
      },
      {
        id: "e",
        text: "inativação irreversível do corpo lúteo no início da fase proliferativa uterina.",
        isCorrect: false,
        distractorRationale: "O corpo lúteo só se forma APÓS a ovulação, a partir dos restos do folículo rompido estimulado pelo LH."
      }
    ],
    detailedExplanation: {
      summary: "O pico de estrogênio provoca feedback positivo gerando a onda pré-ovulatória de LH, que induz a ovulação.",
      stepByStep: [
        "1. Fase folicular: FSH estimula o crescimento folicular; o folículo em crescimento produz estrogênio (estradiol).",
        "2. Normalmente o estrogênio exerce feedback negativo sobre FSH e LH.",
        "3. Próximo ao 12º-13º dia, o folículo maduro atinge secreção máxima de estradiol.",
        "4. Esse nível elevado e sustentado inverte o padrão regulatório para feedback positivo hipofisário.",
        "5. A adeno-hipófise libera uma descarga maciça de LH (pico de LH).",
        "6. Em 24 a 36 horas após o pico, enzimas proteolíticas enfraquecem a parede folicular e o ovócito II é liberado na tuba uterina (ovulação).",
        "7. O folículo remanescente transforma-se em corpo lúteo, que secreta progesterona para sustentar o endométrio secretor."
      ],
      coreConcept: "Ciclo Menstrual: Estrogênio elevado pré-ovulatório -> Feedback positivo -> Pico de LH -> Ovulação (14º dia). Corpo lúteo -> Progesterona (sustenta o endométrio para gravidez).",
      trapWarning: "As pílulas anticoncepcionais combinadas fornecem doses constantes de estrogênio e progestagênio, mantendo feedback negativo contínuo e impedindo o pico de LH e a ovulação."
    },
    tags: ["fisiologia", "reproducao", "ciclo-menstrual", "lh", "estrogenio-progesterona"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-023",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Sistema Digestório - Controle Neuroendócrino da Digestão",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A progressão do quimo ao longo do tubo digestivo é estritamente orquestrada por hormônios gastrointestinais secretados por células enteroendócrinas na mucosa do estômago e do duodeno em resposta à composição química do alimento ingerido.",
      source: "BARRETT, K. E. Fisiologia Gastrointestinal. 2ª ed. AMGH, 2014."
    },
    prompt: "Quando o quimo rico em lipídios e peptídeos ácidos atinge a luz do duodeno, as células enteroendócrinas locais secretam colecistocinina (CCK) e secretina. As respostas fisiológicas integradas deflagradas por esses hormônios são, respectivamente,",
    options: [
      {
        id: "a",
        text: "contração da vesícula biliar com liberação de enzimas pancreáticas (CCK) e secreção pancreática de bicarbonato (secretina).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A CCK contrai a vesícula biliar e estimula enzimas digestivas pancreáticas. A secretina estimula o ducto pancreático a secretar bicarbonato aquoso para neutralizar a acidez do quimo."
      },
      {
        id: "b",
        text: "estimulação intensa da secreção de HCl pelas células parietais gástricas e aceleração do esvaziamento do estômago.",
        isCorrect: false,
        distractorRationale: "Tanto a CCK quanto a secretina inibem o esvaziamento gástrico e reduzem a secreção ácida gástrica (feedback do freio enterogástrico)."
      },
      {
        id: "c",
        text: "bloqueio da liberação de bile e estimulação da síntese de saliva parotídea aquosa.",
        isCorrect: false,
        distractorRationale: "A CCK estimula vigorosamente o esvaziamento da bile na vesícula biliar para digestão das gorduras duodenais."
      },
      {
        id: "d",
        text: "dilatação do esfíncter de Oddi para impedir o trânsito duodenal de íons hidrogenocarbonato.",
        isCorrect: false,
        distractorRationale: "O esfíncter de Oddi relaxa (abre-se) pela ação da CCK justamente para permitir a entrada de bile e suco pancreático no duodeno."
      },
      {
        id: "e",
        text: "absorção direta de sacarose nos vasos quilíferos com supressão de amilases luminais.",
        isCorrect: false,
        distractorRationale: "Sacarose é hidrolisada em glicose e frutose na borda em escova e absorvida em vasos sanguíneos, não em quilíferos."
      }
    ],
    detailedExplanation: {
      summary: "CCK contrai a vesícula biliar e ativa enzimas pancreáticas; Secretina estimula secreção de bicarbonato pancreático neutralizante.",
      stepByStep: [
        "1. Quimo ácido com gorduras entra no duodeno vindo do estômago.",
        "2. Células I do duodeno detectam ácidos graxos e aminoácidos -> liberam Colecistocinina (CCK).",
        "3. A CCK causa contração do músculo liso da vesícula biliar (despejando bile), relaxamento do esfíncter de Oddi e liberação de zimogênios pancreáticos pelos ácinos.",
        "4. Células S do duodeno detectam o pH ácido (< 4,5) -> liberam Secretina.",
        "5. A secretina estimula as células epiteliais dos ductos pancreáticos a secretar uma solução aquosa rica em íons bicarbonato (HCO3-).",
        "6. O bicarbonato neutraliza o ácido clorídrico gástrico, elevando o pH duodenal para ~8, faixa ótima de funcionamento das enzimas pancreáticas e intestinais."
      ],
      coreConcept: "Hormônios Digestivos: Gastrina (estômago -> secreta HCl). CCK (duodeno -> contrai vesícula biliar e enzimas pancreáticas). Secretina (duodeno -> secreta bicarbonato pancreático).",
      trapWarning: "Lembre-se: Gastrina aumenta a acidez gástrica; Secretina atua contra a acidez excessiva no duodeno promovendo banho de bicarbonato."
    },
    tags: ["fisiologia", "digestao", "cck", "secretina", "pancreas-exocrino"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-024",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Fisiologia Humana",
    subtopic: "Hematologia e Imunologia - Grupos Sanguíneos ABO e Aglutinação",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O sistema de grupos sanguíneos ABO é definido pela presença ou ausência de aglutinogênios (glicoproteínas A e B) na superfície dos eritrócitos e por aglutininas (anticorpos anti-A e anti-B) naturalmente presentes no plasma sanguíneo.",
      source: "Ministério da Saúde. Guia para o Uso de Hemocomponentes. 2ª ed., 2015."
    },
    prompt: "Em um teste de tipagem sanguínea em lâmina, uma gota do sangue de um indivíduo aglutinou em contato com o soro anti-A, mas permaneceu homogênea (sem aglutinação) com o soro anti-B. Esse indivíduo pertence ao grupo sanguíneo e pode doar hemácias com segurança para receptores dos grupos, respectivamente:",
    options: [
      {
        id: "a",
        text: "Grupo B; doador para B e AB.",
        isCorrect: false,
        distractorRationale: "Se o sangue aglutinou com anti-A, ele expressa o aglutinogênio A, portanto é do grupo A, e não B."
      },
      {
        id: "b",
        text: "Grupo A; doador para A e AB.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A aglutinação exclusiva com anti-A confirma antígeno A (grupo A). Indivíduos do grupo A doam hemácias para quem não possui anticorpos anti-A no plasma, ou seja, grupos A e AB."
      },
      {
        id: "c",
        text: "Grupo AB; doador exclusivo para receptores universais do grupo O.",
        isCorrect: false,
        distractorRationale: "Sangue AB teria aglutinado em ambas as lâminas (anti-A e anti-B); além disso, receptores O possuem anti-A e anti-B e rejeitariam hemácias A ou AB."
      },
      {
        id: "d",
        text: "Grupo O; doador universal para todos os grupos sanguíneos.",
        isCorrect: false,
        distractorRationale: "Sangue do grupo O não possui aglutinogênios A nem B e não aglutina com nenhum dos soros."
      },
      {
        id: "e",
        text: "Grupo A; doador exclusivo para o grupo O.",
        isCorrect: false,
        distractorRationale: "Indivíduos O têm anticorpos anti-A no plasma; infundir hemácias A em receptor O causaria hemólise intravascular aguda grave."
      }
    ],
    detailedExplanation: {
      summary: "Aglutinação com soro anti-A revela fenótipo A; pessoas do grupo A doam hemácias para A e AB.",
      stepByStep: [
        "1. Lâmina com soro anti-A: aglutinou -> possui aglutinogênio A nas hemácias.",
        "2. Lâmina com soro anti-B: não aglutinou -> não possui aglutinogênio B.",
        "3. Conclusão da tipagem: Indivíduo do grupo A (plasma contém aglutinina anti-B).",
        "4. Regra de doação de concentrado de hemácias: o receptor não pode possuir anticorpos plasmáticos contra os antígenos do doador.",
        "5. O grupo A não possui antígeno B, mas expressa antígeno A: pode doar para quem tolera o antígeno A (receptores do grupo A e receptores do grupo AB, que não possuem anti-A).",
        "6. Portanto: Grupo A, doador para A e AB."
      ],
      coreConcept: "Aglutinogênios (na hemácia): A, B. Aglutininas (no plasma): Anti-A, Anti-B. O = sem aglutinogênios (doador universal de hemácias). AB = sem aglutininas (receptor universal de hemácias).",
      trapWarning: "Lembre-se sempre de olhar a perspectiva da transfusão de hemácias: os anticorpos do receptor atacam as hemácias do doador."
    },
    tags: ["fisiologia", "sangue", "sistema-abo", "aglutinacao", "transfusao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-FIS-025",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Fisiologia Humana",
    subtopic: "Bioenergética e Fisiologia do Exercício - Vias Metabólicas no Músculo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a realização de atividades físicas, a demanda por trifosfato de adenosina (ATP) pelos miócitos pode aumentar mais de 100 vezes. O músculo esquelético recorre sequencialmente a três sistemas energéticos: sistema dos fosfagênios (ATP-CP), glicólise anaeróbica (com produção de lactato) e respiração aeróbica mitocondrial (fosforilação oxidativa).",
      source: "McARDLE, W. D.; KATCH, F. I.; KATCH, V. L. Fisiologia do Exercício: Nutrição, Energia e Desempenho Humano. 8ª ed. Guanabara Koogan, 2016."
    },
    prompt: "Em um tiro de corrida de velocidade de 100 metros rasos com duração inferior a 10 segundos executado em intensidade máxima, a principal fonte bioquímica responsável pela rápida e imediata regeneração de ATP consumido pelas pontes de miosina é a",
    options: [
      {
        id: "a",
        text: "beta-oxidação peroxissômica de ácidos graxos de cadeia longa.",
        isCorrect: false,
        distractorRationale: "Oxidação de lipídios é uma rota estritamente aeróbica e lenta, predominante em exercícios leves e prolongados (como maratonas)."
      },
      {
        id: "b",
        text: "fosfocreatina (creatina-fosfato), por meio da transferência direta de fosfato para o ADP catalisada pela creatina-quinase.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O sistema creatina-fosfato (fosfagênio) repõe ATP em milissegundos sem necessidade de oxigênio, sendo a via prioritária em esforços anaeróbicos aláticos explosivos (< 10 s)."
      },
      {
        id: "c",
        text: "fermentação lática exclusiva com consumo maciço de glicogênio hepático e depleção do ciclo de Krebs.",
        isCorrect: false,
        distractorRationale: "A via glicolítica lática atinge pico entre 30 segundos e 2 minutos de esforço intenso, sendo mais lenta que o sistema fosfagênio."
      },
      {
        id: "d",
        text: "cadeia respiratória mitocondrial alimentada pelo gradiente quimiosmótico gerado por citocromos.",
        isCorrect: false,
        distractorRationale: "A via oxidativa mitocondrial requer transporte de oxigênio pelo sistema cardiovascular e é predominante após vários minutos de exercício contínuo."
      },
      {
        id: "e",
        text: "gliconeogênese a partir de corpos cetônicos mobilizados pelo tecido cerebral.",
        isCorrect: false,
        distractorRationale: "O cérebro consome glicose e corpos cetônicos, nunca fornece substrato gliconeogênico para esforço muscular agudo."
      }
    ],
    detailedExplanation: {
      summary: "Em esforços explosivos de curtíssima duração (< 10 s), a creatina-fosfato repõe ATP instantaneamente pela reação catalisada pela creatina-quinase.",
      stepByStep: [
        "1. Os estoques de ATP livre intracelular sustentam apenas 1 a 2 segundos de contração máxima.",
        "2. A creatina-fosfato (CP) presente em abundância no citoplasma possui uma ligação fosfato de alta energia.",
        "3. A enzima creatina-quinase catalisa: Creatina-P + ADP <-> Creatina + ATP.",
        "4. Essa transferência é a mais rápida de todas as vias metabólicas conhecidas, sem necessidade de oxigênio ou acúmulo de ácido lático (sistema anaeróbico alático).",
        "5. O reservatório de fosfocreatina sustenta contrações explosivas por aproximadamente 8 a 10 segundos.",
        "6. Conforme o esforço continua além desse tempo, a via glicolítica anaeróbica (lática) assume o protagonismo na regeneração do ATP."
      ],
      coreConcept: "Sistemas Bioenergéticos Musculares: 1. Fosfagênio (ATP-CP) -> até 10 s (explosão, alático). 2. Glicólise anaeróbica -> 10 s a 2 min (intensidade alta, lático). 3. Aeróbico (mitocôndria) -> > 2 min (resistência, carboidratos e lipídios).",
      trapWarning: "A suplementação de creatina no esporte visa justamente aumentar os estoques intracelulares de fosfocreatina para melhorar o rendimento em sprints e levantamento de peso."
    },
    tags: ["fisiologia", "bioenergetica", "fosfocreatina", "atp", "exercicio-fisico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
