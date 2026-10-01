export const QUESTIONS_LITERATURA = [
  {
    id: "LIN-LIT-001",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Brasileira",
    subtopic: "Modernismo (1ª Fase)",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "sao-paulo",
    context: {
      supportText: "Erro de Português\nQuando o português chegou\nDebaixo duma bruta chuva\nVestiu o índio\nQue pena!\nFosse uma manhã de sol\nO índio tinha despido\nO português.\n(Oswald de Andrade)",
      source: "Oswald de Andrade"
    },
    prompt: "O poema de Oswald de Andrade, um dos principais nomes da primeira fase do Modernismo no Brasil (cuja efervescência teve como palco o Teatro Municipal de São Paulo em 1922), apresenta uma releitura do descobrimento. A principal característica modernista evidenciada nesse poema é:",
    options: [
      { id: "a", text: "a exaltação ufanista e idealizada do indígena brasileiro, semelhante ao Romantismo.", isCorrect: false, distractorRationale: "Diferente do Romantismo, não há idealização heroica, mas sim uma visão crítica e humorada." },
      { id: "b", text: "a utilização de rigor formal e vocabulário erudito para tratar da história nacional.", isCorrect: false, distractorRationale: "O poema usa linguagem coloquial e versos livres, rompendo com o rigor formal." },
      { id: "c", text: "o revisionismo histórico aliado ao humor, à linguagem coloquial e ao verso livre.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "o lamento trágico sobre a perda da cultura europeia com a chegada ao Brasil.", isCorrect: false, distractorRationale: "O poema critica a imposição europeia ('vestiu o índio') e não a sua perda." },
      { id: "e", text: "a manutenção do mito da democracia racial construído nos primeiros anos da colonização.", isCorrect: false, distractorRationale: "O poema foca na imposição cultural (vestir o índio), não no mito da democracia racial." }
    ],
    detailedExplanation: {
      summary: "Oswald usa humor e linguagem coloquial para revisar a história.",
      stepByStep: ["1. Ler o poema e notar a linguagem coloquial ('duma', 'bruta').", "2. Perceber o tom de humor e ironia na hipótese do sol ('o índio tinha despido o português').", "3. Relacionar isso ao projeto da 1ª geração modernista de ruptura, irreverência e revisão crítica do passado nacional."],
      coreConcept: "Características da 1ª Geração do Modernismo Brasileiro (revisão crítica, humor, verso livre).",
      trapWarning: "Não confundir a menção ao índio com o indianismo romântico, que era idealizado e heroico."
    },
    commonTraps: ["Confundir a presença do índio com a estética romântica."],
    tags: ["modernismo", "oswald-de-andrade", "poesia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-002",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Brasileira",
    subtopic: "Realismo",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "text",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "rio-de-janeiro",
    context: {
      supportText: "Marcela amou-me durante quinze meses e onze contos de réis; nada menos.\nMeu pai, logo que teve vago da decepção, encarregou-se de me dar um destino. Estava claro que eu não servia para as letras; a carreira política acenava-me como a única compatível com os meus defeitos.\n(Memórias Póstumas de Brás Cubas, Machado de Assis)",
      source: "Machado de Assis"
    },
    prompt: "No fragmento da obra magna do Realismo brasileiro, ambientada no Rio de Janeiro do século XIX, Machado de Assis constrói a narrativa de Brás Cubas. O recurso estilístico e temático que mais se destaca no trecho, marcando a ruptura com o Romantismo, é:",
    options: [
      { id: "a", text: "a visão idealizada do amor, que transcende questões materiais.", isCorrect: false, distractorRationale: "A visão de amor não é idealizada; é calculada em tempo e dinheiro ('quinze meses e onze contos de réis')." },
      { id: "b", text: "o determinismo biológico, indicando que os defeitos de Brás Cubas eram genéticos.", isCorrect: false, distractorRationale: "O determinismo é marca do Naturalismo, não do Realismo machadiano, que foca na ironia psicológica e social." },
      { id: "c", text: "a ironia fina e o cinismo ao associar o afeto amoroso ao dinheiro e a política à falta de virtudes.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "o tom confessional melancólico, típico do mal do século.", isCorrect: false, distractorRationale: "Brás Cubas é cínico e não sofre de melancolia romântica neste contexto; é um narrador distante e irônico." },
      { id: "e", text: "a crítica direta e panfletária contra a escravidão vigente na época.", isCorrect: false, distractorRationale: "Embora Machado critique a sociedade, sua crítica não é panfletária, e este trecho específico não fala de escravidão." }
    ],
    detailedExplanation: {
      summary: "A ironia é a principal arma de Machado de Assis no Realismo.",
      stepByStep: ["1. Analisar a frase sobre Marcela: o amor é medido em tempo e dinheiro, mostrando interesse.", "2. Analisar a frase sobre a política: ser a única carreira compatível com os seus 'defeitos', uma inversão irônica das virtudes políticas.", "3. Concluir que a ironia, o pessimismo e a desconstrução das idealizações românticas marcam a obra."],
      coreConcept: "A ironia e a desilusão no Realismo machadiano.",
      trapWarning: "Cuidado para não confundir Realismo com Naturalismo (determinismo)."
    },
    commonTraps: ["Marcar determinismo (Naturalismo) em vez de ironia social (Realismo)."],
    tags: ["realismo", "machado-de-assis", "ironia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-003",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Brasileira",
    subtopic: "Barroco",
    difficulty: 5,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "salvador",
    context: {
      supportText: "Nasce o Sol, e não dura mais que um dia,\nDepois da Luz se segue a noite escura,\nEm tristes sombras morre a formosura,\nEm contínuas tristezas a alegria.\nPorém se acaba o Sol, por que nascia?\nSe formosa a Luz é, por que não dura?\nComo a beleza assim se transfigura?\nComo o gosto da pena assim se fia?\n(Gregório de Matos)",
      source: "Gregório de Matos"
    },
    prompt: "O soneto de Gregório de Matos reflete o espírito da estética Barroca, muito presente na Salvador do século XVII (no contexto do Pelourinho colonial). A principal tensão ideológica do Barroco expressa nesses versos é:",
    options: [
      { id: "a", text: "a exaltação do prazer terreno (carpe diem) de forma despreocupada e pagã.", isCorrect: false, distractorRationale: "O poema não tem tom despreocupado; ele questiona a efemeridade das coisas e reflete angústia." },
      { id: "b", text: "a angústia diante da efemeridade da vida e da transitoriedade das coisas terrenas.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "a crença iluminista na razão como guia para entender os fenômenos da natureza.", isCorrect: false, distractorRationale: "O iluminismo (Arcadismo) é posterior. O Barroco é marcado pela dúvida e conflito, não pela razão clara." },
      { id: "d", text: "o conflito social entre senhores de engenho e escravizados na Bahia colonial.", isCorrect: false, distractorRationale: "Este poema específico é de cunho lírico/filosófico, não social ou satírico, focado no tempo e na existência." },
      { id: "e", text: "a certeza absoluta da salvação divina, anulando qualquer sofrimento humano.", isCorrect: false, distractorRationale: "Há muita incerteza e sofrimento ('tristes sombras', 'contínuas tristezas'), não a anulação deles." }
    ],
    detailedExplanation: {
      summary: "O poema aborda a fugacidade do tempo e a efemeridade, temas barrocos.",
      stepByStep: ["1. Identificar as antíteses: nascer x morrer, luz x escuridão, alegria x tristeza.", "2. Observar as perguntas retóricas sobre o motivo das coisas belas acabarem.", "3. Relacionar isso à consciência barroca da passagem do tempo e da efemeridade da vida e beleza."],
      coreConcept: "A visão de mundo Barroca: efemeridade, transitoriedade e conflito.",
      trapWarning: "Lembre-se que Gregório de Matos escrevia poesias líricas, religiosas e satíricas. Este poema é lírico-filosófico."
    },
    commonTraps: ["Achar que todo poema de Gregório de Matos é sátira social."],
    tags: ["barroco", "gregorio-de-matos", "poesia-lirica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-004",
    area: "linguagens",
    competence: 5,
    skill: 17,
    topic: "Literatura Brasileira",
    subtopic: "Romantismo (3ª Fase)",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "salvador",
    context: {
      supportText: "Senhor Deus dos desgraçados!\nDizei-me vós, Senhor Deus!\nSe é loucura... se é verdade\nTanto horror perante os céus...\nÓ mar, por que não apagas\nCo'a esponja de tuas vagas\nDe teu manto este borrão?\n(O Navio Negreiro, Castro Alves)",
      source: "Castro Alves"
    },
    prompt: "Castro Alves, também conhecido como o 'Poeta dos Escravos', é o grande nome da Terceira Geração Romântica no Brasil, também chamada de Geração Condoreira. O trecho acima revela que o projeto poético dessa geração visava:",
    options: [
      { id: "a", text: "buscar refúgio na natureza virgem para escapar dos problemas da vida na cidade.", isCorrect: false, distractorRationale: "O escapismo é marca da 2ª Geração (Mal do Século). A 3ª geração engaja-se socialmente." },
      { id: "b", text: "idealizar a figura do indígena como símbolo de pureza da nação brasileira.", isCorrect: false, distractorRationale: "O Indianismo é marca da 1ª Geração romântica (Gonçalves Dias, José de Alencar)." },
      { id: "c", text: "utilizar a poesia como instrumento de denúncia social e clamor por justiça e liberdade.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "refletir sobre as contradições psicológicas do ser humano em um ambiente urbano corrompido.", isCorrect: false, distractorRationale: "O aprofundamento psicológico é mais característico do Realismo e não o foco principal do Condoreirismo." },
      { id: "e", text: "defender a abolição da escravatura através de uma linguagem contida e impessoal.", isCorrect: false, distractorRationale: "A linguagem não é contida; é declamatória, grandiloquente e cheia de exclamações e apelos emocionais." }
    ],
    detailedExplanation: {
      summary: "A Geração Condoreira usa a poesia para denúncia social.",
      stepByStep: ["1. Analisar as invocações grandiosas ('Senhor Deus', 'Ó mar').", "2. Compreender a denúncia contida ('tanto horror', 'borrão' no manto do mar = navio negreiro).", "3. Relacionar o poema de Castro Alves ao engajamento abolicionista da 3ª fase romântica."],
      coreConcept: "Terceira Fase do Romantismo (Condoreirismo) e o engajamento social e político.",
      trapWarning: "Cuidado para não confundir as três gerações românticas. Castro Alves = engajamento."
    },
    commonTraps: ["Confundir as gerações do Romantismo e atribuir escapismo ou indianismo ao poema."],
    tags: ["romantismo", "castro-alves", "abolicao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-005",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Brasileira",
    subtopic: "Naturalismo",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "text",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "rio-de-janeiro",
    context: {
      supportText: "Eram cinco horas da manhã e o cortiço acordava, abrindo, não os olhos, mas a sua infinidade de portas e janelas alinhadas. Um acordar alegre e farto de quem dormiu de uma assentada sete horas de chumbo... O rumor crescia, condensando-se; o zumbido de todos os dias acentuava-se; já se não destacavam vozes dispersas, mas um só ruído compacto que enchia todo o cortiço.\n(O Cortiço, Aluísio Azevedo)",
      source: "Aluísio Azevedo"
    },
    prompt: "O romance 'O Cortiço' é um marco da estética Naturalista no Brasil, ambientado no Rio de Janeiro. No fragmento apresentado, a forma como o autor descreve o ambiente e os indivíduos revela uma característica fundamental do Naturalismo, que é a:",
    options: [
      { id: "a", text: "personificação do espaço, transformando o próprio cortiço em um organismo vivo que age sobre os moradores.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "valorização da subjetividade dos personagens mais humildes, com foco em seus dramas existenciais íntimos.", isCorrect: false, distractorRationale: "O Naturalismo foca no instinto e no coletivo/biológico, não no subjetivismo e na intimidade psicológica." },
      { id: "c", text: "denúncia da pobreza através da ironia sutil e de comentários críticos do narrador de forma contida.", isCorrect: false, distractorRationale: "O Naturalismo descreve a realidade de forma descritiva e crua, sem a 'ironia fina e contida' típica de Machado." },
      { id: "d", text: "crença de que o ambiente pode ser facilmente transformado pela força de vontade dos indivíduos.", isCorrect: false, distractorRationale: "Pelo contrário, o Naturalismo defende o determinismo: o meio transforma os indivíduos e não o contrário." },
      { id: "e", text: "representação romantizada da classe trabalhadora, que vive em harmonia e solidariedade constantes.", isCorrect: false, distractorRationale: "O cortiço é descrito de forma animalizada e instintiva, cheio de conflitos, sem romantização." }
    ],
    detailedExplanation: {
      summary: "O cortiço é descrito como um organismo coletivo vivo.",
      stepByStep: ["1. Ler o trecho e notar a descrição do cortiço acordando ('abrindo... portas e janelas').", "2. Perceber que as vozes individuais se perdem em um 'só ruído compacto', formando uma massa.", "3. Concluir que o Naturalismo zoomorfiza/personifica o ambiente, que atua como personagem influenciando todos (determinismo de meio)."],
      coreConcept: "Determinismo e zoomorfização/personificação do ambiente no Naturalismo.",
      trapWarning: "Atenção: no Naturalismo os personagens perdem a individualidade para agir como bando/organismo (determinismo)."
    },
    commonTraps: ["Achar que a descrição foca nos indivíduos, quando foca no ambiente como um ser coletivo."],
    tags: ["naturalismo", "aluisio-azevedo", "determinismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
