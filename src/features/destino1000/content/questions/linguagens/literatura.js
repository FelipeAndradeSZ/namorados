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
  },
  {
    id: "LIN-LIT-006",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Brasileira",
    subtopic: "Machado de Assis e o Realismo",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Não tive filhos, não transmiti a nenhuma criatura o legado de nossa miséria.\nSomadas umas coisas e outras, qualquer pessoa imaginará que não houve míngua nem sobra, e conseguintemente que saí quite com a vida. E imaginará mal; porque ao chegar a este outro lado do mistério, achei-me com um pequeno saldo, que é a derradeira negativa deste capítulo de negativas: — Não tive filhos, não transmiti a nenhuma criatura o legado de nossa miséria.",
      source: "Machado de Assis, Memórias Póstumas de Brás Cubas (1881)."
    },
    prompt: "No desfecho de Memórias Póstumas de Brás Cubas, a condição de 'defunto autor' permite a Machado de Assis consolidar uma das marcas mais originais do Realismo brasileiro, expressa pela:",
    options: [
      { id: "a", text: "ironia cáustica e pelo pessimismo lúcido que desnudam a hipocrisia e a vaidade fútil da elite patriarcal oitocentista.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "exaltação comovida da generosidade cristã e do altruísmo dos grandes proprietários de terras do Império.", isCorrect: false, distractorRationale: "Machado ridiculariza o falso altruísmo e o egoísmo estrutural da classe senhorial." },
      { id: "c", text: "adesão fervorosa ao cientificismo positivista que pregava a redenção inevitável da humanidade pelo progresso técnico.", isCorrect: false, distractorRationale: "Machado é cético em relação às certezas cegas do positivismo (visível na sátira ao Humanitismo de Quincas Borba)." },
      { id: "d", text: "idealização romântica da paternidade como a mais sublime realização moral e afetiva do ser humano.", isCorrect: false, distractorRationale: "Brás Cubas comemora exatamente o fato de não ter tido filhos como seu único saldo positivo diante da miséria humana." },
      { id: "e", text: "defesa intransigente da censura prévia aos livros para evitar a corrupção dos costumes familiares burgueses.", isCorrect: false, distractorRationale: "Machado usa a literatura com liberdade crítica para expor as contradições desses mesmos costumes familiares." }
    ],
    detailedExplanation: {
      summary: "O narrador póstumo machadiano não deve satisfações aos vivos, permitindo uma autópsia impiedosa da elite brasileira.",
      stepByStep: [
        "Memórias Póstumas de Brás Cubas (1881) inaugura o Realismo brasileiro rompendo com as convenções da narrativa linear romântica.",
        "Como já está morto ('defunto autor'), Brás Cubas não precisa fingir virtudes morais ou dissimular sua mediocridade.",
        "A famosa frase de encerramento ('não transmiti a nenhuma criatura o legado de nossa miséria') sintetiza o niilismo e a ironia devastadora que desmascaram o vazio existencial da aristocracia escravista."
      ],
      coreConcept: "Narrador Machadiano, Ironia e Crítica da Sociedade Escravocrata",
      trapWarning: "Cuidado com o narrador não confiável de Machado: ele manipula o leitor, é caprichoso e faz digressões contínuas."
    },
    commonTraps: ["confundir autor defunto com defunto autor", "ignorar a ironia negativa no fechamento da obra"],
    tags: ["machado de assis", "realismo", "bras cubas", "ironia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-007",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Brasileira",
    subtopic: "Parnasianismo vs Simbolismo",
    difficulty: 4,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Texto I (Parnasianismo - Olavo Bilac):\n'Invejo o ourives quando escrevo:\nImito o amor com que ele, em ouro,\nAlto relevo faz de uma flor.'\n\nTexto II (Simbolismo - Cruz e Sousa):\n'Vozes veladas, veludosas vozes,\nVolúpia dos violões, vozes veladas,\nVagam nos velhos vórtices velozes\nDos ventos, vivas, vãs, vulcanizadas.'",
      source: "Olavo Bilac, Profissão de Fé (1888) / Cruz e Sousa, Violões que Choram (1893)."
    },
    prompt: "A comparação entre os dois poemas oitocentistas revela que, enquanto o Parnasianismo persegue o ideal do 'ouricives da palavra' focado no rigor plástico da forma, o Simbolismo busca prioritariamente a:",
    options: [
      { id: "a", text: "musicalidade expressiva e a sugestão mística por meio de aliterações, sinestesias e sensorialidade sonora.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "reprodução fotográfica neutra e documental dos fatos históricos ocorridos nas fábricas urbanas.", isCorrect: false, distractorRationale: "Isso se aproxima do Realismo/Naturalismo documental, oposto do hermetismo metafísico simbolista." },
      { id: "c", text: "destruição anárquica de qualquer harmonia rítmica para aproximar o poema do linguajar dos bares boêmios.", isCorrect: false, distractorRationale: "Cruz e Sousa mantém métrica e rima rigorosas, enriquecidas por jogos fônicos sofisticados." },
      { id: "d", text: "exaltação da ciência empírica e das teorias evolucionistas darwinistas como verdades absolutas.", isCorrect: false, distractorRationale: "O Simbolismo é anti-materialista e antimedicionista, voltado para a transcendência e a alma." },
      { id: "e", text: "defesa do projeto ufanista romântico de glorificação dos heróis indígenas nas florestas virgens.", isCorrect: false, distractorRationale: "Ambos os movimentos já haviam superado o indianismo da 1ª Geração Romântica." }
    ],
    detailedExplanation: {
      summary: "O Parnasianismo é plástico e visual (escultura/ourivesaria); o Simbolismo é sonoro e sugestivo (música e espiritualismo).",
      stepByStep: [
        "Olavo Bilac compara o poeta parnasiano a um ourives que cinzela a forma do verso com métrica decassilábica e rimas ricas.",
        "Cruz e Sousa utiliza a repetição sistemática do fonema /v/ (aliteração abundante) em 'Violões que Choram' para sugerir o som plangente dos instrumentos musicais.",
        "O Simbolismo substitui a precisão descritiva parnasiana pela sugestão, pela musicalidade e pela sinestesia de estados d'alma."
      ],
      coreConcept: "Estética Parnasiana (Arte pela Arte) versus Estética Simbolista (Musicalidade)",
      trapWarning: "Verlaine sintetizou o Simbolismo: 'A música antes de qualquer coisa'. Busque os efeitos sonoros nos versos de Cruz e Sousa."
    },
    commonTraps: ["confundir o visual parnasiano com o sonoro simbolista", "desconhecer a aliteração"],
    tags: ["parnasianismo", "simbolismo", "olavo bilac", "cruz e sousa", "aliteracao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-008",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Brasileira",
    subtopic: "Modernismo de 30 e o Regionalismo",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entristecera. Considerar-se pessoa parecia-lhe absurdo. Ele era apenas um bicho, um bicho condenado a trabalhar sem descanso, apanhar do soldado amarelo, viver no chão da terra seca. Mas olhou a mulher, os filhos adormecidos, a cachorra Baleia que ressonava perto da cinza fria. E achou que afinal talvez fosse homem.",
      source: "Graciliano Ramos, Vidas Secas (1938)."
    },
    prompt: "No romance Vidas Secas, de Graciliano Ramos, o processo de desumanização imposto pela seca e pela estrutura agrária excludente do sertão é retratado por meio da:",
    options: [
      { id: "a", text: "zoomorfização dos sertanejos, confrontada com a humanização afetiva da cachorra Baleia e a contenção verbal da narrativa.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "idealização paradisíaca do sertão como um refúgio acolhedor e farto para as famílias migrantes.", isCorrect: false, distractorRationale: "O sertão é apresentado em sua crueza e miséria imposta pelas secas e pela exploração senhorial." },
      { id: "c", text: "linguagem barroca rebuscada repleta de metáforas ornamentais que celebram a aristocracia latifundiária.", isCorrect: false, distractorRationale: "A prosa de Graciliano é notoriamente seca, econômica, concisa e antiornamental." },
      { id: "d", text: "vitória heróica e triunfante de Fabiano em rebelião armada vitoriosa contra as tropas governamentais.", isCorrect: false, distractorRationale: "Fabiano é derrotado e oprimido pelas instituições (o patrão, o soldado amarelo, os impostos)." },
      { id: "e", text: "concessão de terras férteis pelo Estado brasileiro para fixar a família de retirantes no semiárido.", isCorrect: false, distractorRationale: "Não há reforma agrária ou assistência estatal; a família é forçada a continuar em fuga itinerante." }
    ],
    detailedExplanation: {
      summary: "Em Vidas Secas, os homens são rebaixados à condição de bicho enquanto a cachorra sonha com preás, num estilo enxuto e despojado.",
      stepByStep: [
        "A estética do Romance de 30 no Nordeste caracteriza-se pelo realismo social e denúncia das desigualdades estruturais.",
        "Graciliano Ramos explora a zoomorfização: Fabiano pensa em si como bicho, grunhe monossílabos e tem vocabulário reduzido pela opressão.",
        "Em contrapartida, a cachorra Baleia é humanizada, possuindo sonhos, reflexões e sentimentos de solidariedade.",
        "A linguagem enxuta e áspera mimetiza a própria aridez da paisagem e a escassez de recursos dos retirantes."
      ],
      coreConcept: "Zoomorfização e Estilo Seco no Regionalismo de 30",
      trapWarning: "A cachorra Baleia tem um dos capítulos mais famosos da literatura ('Baleia'); repare como ela pensa mais coerentemente que o patrão da fazenda."
    },
    commonTraps: ["esperar finais felizes e heroísmo romântico", "não reconhecer a correspondência entre estilo conciso e tema árido"],
    tags: ["graciliano ramos", "vidas secas", "geracao de 30", "zoomorfizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-009",
    area: "linguagens",
    competence: 5,
    skill: 17,
    topic: "Literatura Brasileira",
    subtopic: "Guimarães Rosa e o Sertão Metafísico",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O sertão está em toda a parte. O sertão é dentro da gente [...]. Viver é muito perigoso; e não é não. Nem sei explicar estas coisas. Um sentir é do sentente, mas outro é do do sentidor.\nO diabo existe e não existe? Dou o dito. Olhe e veja: o mais importante e bonito, do mundo, é isto: que as pessoas não estão terminadas, que elas vão sempre mudando.",
      source: "João Guimarães Rosa, Grande Sertão: Veredas (1956)."
    },
    prompt: "Em Grande Sertão: Veredas, a prosa revolucionária de Guimarães Rosa transcende o regionalismo pitoresco documental ao transformar o sertão mineiro em um:",
    options: [
      { id: "a", text: "espaço metafísico universal onde se encenam os dilemas éticos, existenciais e a indeterminação constante do destino humano.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "guia geográfico e botânico estritamente técnico voltado para o mapeamento agropecuário de pastagens.", isCorrect: false, distractorRationale: "A obra é literatura filosófica e poética de alta densidade, não manual agronômico." },
      { id: "c", text: "cenário histórico fidedigno construído com o único propósito de justificar o coronelismo autoritário local.", isCorrect: false, distractorRationale: "O romance questiona a violência e investiga o bem, o mal e o pacto fáustico de Riobaldo." },
      { id: "d", text: "relato jornalístico linear e objetivo formulado na norma gramatical padrão sem inovações de vocabulário.", isCorrect: false, distractorRationale: "Guimarães Rosa subverteu a sintaxe do português criando neologismos, arcaísmos e falares poéticos únicos." },
      { id: "e", text: "documentário etnográfico que nega a existência de reflexões morais nos habitantes do interior do Brasil.", isCorrect: false, distractorRationale: "O sertanejo de Rosa é filósofo por excelência ('o sertanejo é um filósofo natural')." }
    ],
    detailedExplanation: {
      summary: "Guimarães Rosa universalizou o sertão: as lutas de jagunços espelham os mistérios universais da alma, do bem e do mal.",
      stepByStep: [
        "A 3ª Geração Modernista (Geração de 45) traz apuro formal e universalização temática.",
        "Guimarães Rosa rompe com o regionalismo pitoresco dos costumes externos ('folclore').",
        "Para Riobaldo Tatarana, narrador da obra, o sertão não tem limites geográficos fixos: 'o sertão é o mundo' e 'é dentro da gente'.",
        "A linguagem rosiana inventa palavras (neologismos) e funde linguagem popular sertaneja com erudição clássica para capturar o inapreensível da vida."
      ],
      coreConcept: "O Sertão como Metáfora Universal em Guimarães Rosa",
      trapWarning: "'Viver é negócio muito perigoso' sintetiza a condição humana diante da dúvida sobre a existência do demônio e a moralidade dos atos."
    },
    commonTraps: ["reduzir Guimarães Rosa a regionalismo pitoresco", "ignorar a dimensão filosófica e linguística da obra"],
    tags: ["guimaraes rosa", "grande sertao veredas", "geracao de 45", "neologismos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-010",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Brasileira",
    subtopic: "Clarice Lispector e o Fluxo de Consciência",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "E então, olhando a galinha no quintal que cacarejava indiferente ao mundo, Ana sentiu uma vertigem súbita. O bonde sacudia seus passageiros, as compras na sacola pesavam nos braços cansados. Foi um instante apenas: o ponto cego da existência desmoronou sobre ela. A vida de dona de casa perfeita, os almoços pontuais, as toalhas engomadas — tudo aquilo agora lhe parecia um disfarce frágil sobre o abismo insondável do ser.",
      source: "Inspirado no conto Amor, em Laços de Família, de Clarice Lispector."
    },
    prompt: "A narrativa clariceana destaca-se na prosa brasileira contemporânea pelo rompimento com a linearidade dos fatos exteriores, privilegiando a:",
    options: [
      { id: "a", text: "epifania existencial, momento de súbita revelação em que um detalhe trivial do cotidiano desmascara as certezas íntimas da personagem.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "sucessão vertiginosa de batalhas épicas heróicas travadas pela emancipação militar de territórios coloniais.", isCorrect: false, distractorRationale: "Clarice foca na interioridade psicológica doméstica e filosófica, não em guerras bélicas." },
      { id: "c", text: "descrição minuciosa de manuais de boas maneiras burguesas para aconselhar jovens esposas a obedecerem às convenções.", isCorrect: false, distractorRationale: "O texto desmascara e coloca em crise exatamente essas rotinas burguesas domesticadas." },
      { id: "d", text: "investigação policial de crimes passionais cometidos na periferia urbana das grandes metrópoles.", isCorrect: false, distractorRationale: "Não é narrativa de enigma policial (whodunit)." },
      { id: "e", text: "análise puramente estatística e fria das taxas de natalidade das famílias de classe média carioca.", isCorrect: false, distractorRationale: "O texto trata do drama ontológico da existência e da linguagem, não de demografia quantitativa." }
    ],
    detailedExplanation: {
      summary: "A marca registrada de Clarice Lispector é a epifania: um choque cotidiano que desarticula as convenções da vida social.",
      stepByStep: [
        "Clarice Lispector pertence à prosa introspectiva da Geração de 45.",
        "Em suas narrativas, o enredo exterior é secundário; o verdadeiro enredo é o fluxo de consciência e os abalos na psique das personagens.",
        "A epifania clariceana (como a visão de um cego mascando chiclete no bonde no conto 'Amor') é o instante de iluminação e vertigem que despedaça as ilusões cotidianas.",
        "A linguagem tateia os limites do indizível, buscando a essência ('a coisa em si')."
      ],
      coreConcept: "A Epifania e a Prosa Introspectiva em Clarice Lispector",
      trapWarning: "Epifania não é mágica ou religião dogmática; é a iluminação psicológica e filosófica provocada por um detalhe banal."
    },
    commonTraps: ["procurar enredo de ação externa na ficção de Clarice", "desconhecer o conceito de epifania existencial"],
    tags: ["clarice lispector", "epifania", "fluxo de consciencia", "introspeccao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-011",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Brasileira",
    subtopic: "Romantismo Condoreiro e Castro Alves",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Senhor Deus dos desgraçados!\nDizei-me vós, Senhor Deus!\nSe é loucura... se é verdade\nTanto horror perante os céus?!\nÓ mar, por que não apagas\nCo'a esponja de tuas vagas\nDe teu manto este borrão?...\nAstros! noites! tempestades!\nRolai das imensidades!\nVarrei os mares, tufão!...\n(Castro Alves, O Navio Negreiro, 1869)",
      source: "Castro Alves, Os Escravos."
    },
    prompt: "O fragmento de 'O Navio Negreiro', expoente da terceira geração da poesia romântica brasileira (geração condoreira), caracteriza-se no plano estético e ideológico por:",
    options: [
      { id: "a", text: "tom de oratória inflamada, recursos hiperbólicos e indignação moral a serviço da causa abolicionista e da denúncia da escravidão.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "intimismo melancólico e desejo de evasão na morte decorrente da frustração amorosa individual (mal do século).", isCorrect: false, distractorRationale: "Esse intimismo escapista e doentio é marca da 2ª geração romântica (ultrarromantismo de Álvares de Azevedo), não do condoreirismo social." },
      { id: "c", text: "impassibilidade descritiva objetiva e rigor métrico sonetista desprovido de engajamento social.", isCorrect: false, distractorRationale: "Essa é a estética parnasiana (como Olavo Bilac), avessa à oratória engajada dos condoreiros." },
      { id: "d", text: "idealização cavalheiresca do colonizador português como civilizador harmonioso do Novo Mundo.", isCorrect: false, distractorRationale: "O poema denuncia com horror a crueldade do tráfico transatlântico de escravizados promovido pelas elites coloniais." },
      { id: "e", text: "linguagem experimental concreta com neologismos fragmentados e abolição da métrica clássica.", isCorrect: false, distractorRationale: "Trata-se de poema romântico rimado e estrófico do século XIX, não de vanguarda concretista do século XX." }
    ],
    detailedExplanation: {
      summary: "A poesia condoreira de Castro Alves utiliza o condor (ave que voa alto) como metáfora da visão ampla dos problemas republicanos e da urgência da abolição da escravidão.",
      stepByStep: [
        "Passo 1: Identificar a geração romântica: 3ª Geração (Condoreirismo / Hugoana, inspirada em Victor Hugo).",
        "Passo 2: Analisar os recursos estilísticos: exclamações enfáticas, apóstrofes ao divino e aos elementos da natureza ('Ó mar', 'Astros! noites! tempestades!'), vocabulário grandiloquente e tom declamatório de palanque.",
        "Passo 3: Reconhecer a função social: a poesia não é feita para o isolamento do quarto do poeta, mas para ser recitada em praça pública para mobilizar a sociedade contra a desumanidade do cativeiro negro.",
        "Passo 4: A opção 'a' sintetiza com perfeição a poética condoreira de Castro Alves."
      ],
      coreConcept: "Terceira Geração Romântica (Condoreirismo), poesia social abolicionista de Castro Alves e retórica oratória.",
      trapWarning: "Confundir a denúncia grandiloquente de Castro Alves com a introspecção melancólica e a tuberculose de Álvares de Azevedo (2ª Geração)."
    },
    commonTraps: ["confundir_3a_geracao_com_2a_geracao_ultrarromantica", "ignorar_o_engajamento_abolicionista"],
    tags: ["castro_alves", "condoreirismo", "abolicionismo", "romantismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-012",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Brasileira",
    subtopic: "Naturalismo e O Cortiço de Aluísio Azevedo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Eram cinco horas da manhã e o cortiço acordava, abrindo, não os olhos, mas a sua infinidade de portas e janelas alinhadas. Um acordar alegre e farto de quem dormiu de um puxão (...) O rumor crescia, condensando-se; o zunzum de todos os dias acentuava-se; já se não destacavam vozes dispersas, mas um só ruído grosso e amplo, que enchia o grande pátio (...) As mulheres lavavam a roupa, com as saias arregaçadas, mostrando as coxas grossas e lustrosas de sabão; homens sem camisa esfregavam-se com violência sob a bica d'água.",
      source: "Aluísio Azevedo, O Cortiço (1890)"
    },
    prompt: "No romance naturalista 'O Cortiço', o procedimento estético-ideológico empregado por Aluísio Azevedo para representar o espaço e as personagens fundamenta-se no(a):",
    options: [
      { id: "a", text: "personificação do espaço urbano, tratado como organismo biológico vivo, aliado à zoomorfização e ao determinismo ambiental sobre os indivíduos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "lirismo espiritualista e busca por redenção mística dos trabalhadores por meio da contemplação da natureza virgem.", isCorrect: false, distractorRationale: "O Naturalismo é estritamente materialista e cientificista, avesso ao misticismo espiritual." },
      { id: "c", text: "psicologismo refinado e ceticismo sutil que preserva as personagens de influências exteriores biológicas.", isCorrect: false, distractorRationale: "Essa é a marca do Realismo machadiano; o Naturalismo enxerga o homem governado pelo instinto animal e pelo meio." },
      { id: "d", text: "elogio aristocrático às virtudes higiênicas e à ordem exemplar das habitações coletivas proletárias.", isCorrect: false, distractorRationale: "O romance retrata o cortiço sob a ótica patológica de proliferação promíscua e degenerescência moral." },
      { id: "e", text: "idealização romântica das relações de trabalho como reflexo da pureza da infância rural.", isCorrect: false, distractorRationale: "A estética naturalista não idealiza; pelo contrário, expõe a crueza dos apetites sexuais e da exploração econômica." }
    ],
    detailedExplanation: {
      summary: "Em 'O Cortiço', o espaço coletivo é animalizado e atua como força determinista implacável que molda e corrompe o comportamento das personagens.",
      stepByStep: [
        "Passo 1: Observar a personificação do cortiço: o prédio 'acorda', 'abre portas como olhos' e 'respira como animal coletivo'.",
        "Passo 2: Identificar a zoomorfização: os moradores são descritos como enxame de insetos ('zunzum', 'larvas'), movidos por instintos corporais primários (fome, sexo, calor).",
        "Passo 3: Aplicar as teorias científicas do Naturalismo do século XIX: determinismo do meio (Taine), da raça e do momento; quem entra no cortiço (como o português Jerônimo) é gradualmente 'abrasileirado' e vencido pelo calor e pela cachaça.",
        "Passo 4: A opção 'a' sintetiza com exatidão a poética naturalista de Aluísio Azevedo."
      ],
      coreConcept: "Naturalismo brasileiro, zoomorfização, personificação do espaço e determinismo biológico em Aluísio Azevedo.",
      trapWarning: "Confundir Naturalismo com Realismo. O Realismo foca na análise psicológica e hipocrisia burguesa; o Naturalismo foca na patologia social, instintos e determinismo biológico."
    },
    commonTraps: ["confundir_naturalismo_com_realismo", "esquecer_da_zoomorfizacao"],
    tags: ["o_cortico", "aluisio_azevedo", "naturalismo", "determinismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-013",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Brasileira",
    subtopic: "Simbolismo e a Poesia de Cruz e Sousa",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Vozes veladas, veludosas vozes,\nVolúpias dos violões, vozes veladas,\nVagam nos velhos vórtices velozes\nDos ventos, vivas, vãs, vulcanizadas.\n\nTudo nas vastidões ermas viaja...\nMais ermas, mais sonâmbulas que o vago,\nNo velário da noite que ultraja\nA alma que treme como límpido lago.\n(Cruz e Sousa, Violões que Choram, 1898)",
      source: "Cruz e Sousa, Últimos Sonetos."
    },
    prompt: "No soneto de Cruz e Sousa, expoente do Simbolismo no Brasil, a construção do projeto estético evidencia-se prioritariamente através de:",
    options: [
      { id: "a", text: "uso expressivo de figuras de som (aliterações em /v/), sinestesia e sugestão sensorial musical, buscando traduzir estados anímicos e espirituais intangíveis.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "descrição cientificista e impessoal de um experimento de acústica física em ambiente laboratorial.", isCorrect: false, distractorRationale: "O poema é metafísico e espiritualista, diametralmente oposto ao cientificismo empírico." },
      { id: "c", text: "linguagem coloquial despojada e temática nacionalista folclórica inspirada no cotidiano indígena.", isCorrect: false, distractorRationale: "O Simbolismo utiliza vocabulário hermético, litúrgico e cósmico, avesso ao coloquialismo folclórico." },
      { id: "d", text: "denúncia panfletária e engajada contra as políticas de urbanização das capitais republicanas.", isCorrect: false, distractorRationale: "O Simbolismo afasta-se da crônica política imediata para investigar a angústia da transcendência do espírito." },
      { id: "e", text: "rejeição de qualquer esquema rímico ou métrico tradicional em favor do verso livre modernista.", isCorrect: false, distractorRationale: "O poema mantém a forma clássica do soneto decassílabo rigorosamente rimado." }
    ],
    detailedExplanation: {
      summary: "O Simbolismo valoriza a musicalidade pura ('A música antes de tudo', dizia Verlaine), a aliteração, o mistério e a sinestesia para aproximar a poesia do indizível.",
      stepByStep: [
        "Passo 1: Ouvir a acústica dos versos: 'Vozes veladas, veludosas vozes' — repetição obsessiva da consoante fricativa /v/ (aliteração) e vogais fechadas /o/ e /e/ (assonância).",
        "Passo 2: Reconhecer a sinestesia: 'veludosas vozes' funde o sentido do tato (veludo) com o da audição (vozes).",
        "Passo 3: Identificar a trajetória de Cruz e Sousa: o poeta negro ('o Cisne Negro'), marcado pelo preconceito racial e pela dor existencial, canalizou seu sofrimento para uma poesia de purificação cósmica e comunhão espiritual.",
        "Passo 4: A opção 'a' sintetiza o programa estético simbolista com rigor técnico."
      ],
      coreConcept: "Simbolismo brasileiro, Cruz e Sousa, aliteração, musicalidade e sugestão sinestésica.",
      trapWarning: "Confundir Simbolismo com Parnasianismo. O Parnasianismo busca a perfeição plástica da forma (como uma escultura de mármore fria); o Simbolismo busca a música do espírito, o mistério e a transcendência."
    },
    commonTraps: ["confundir_simbolismo_com_parnasianismo", "ignorar_o_efeito_da_aliteracao_expressiva"],
    tags: ["cruz_e_sousa", "simbolismo", "aliteracao", "musicalidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-014",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Brasileira",
    subtopic: "Pré-Modernismo e Os Sertões de Euclides da Cunha",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O sertanejo é, antes de tudo, um forte. Não tem o raquitismo enfesado dos mestiços neurastênicos do litoral (...) A sua aparência, entretanto, no primeiro lance de vista, revela o contrário. Falta-lhe a plástica impecável, o desempeno, a estrutura corretíssima das organizações atléticas. É desgracioso, desengonçado, torto (...) Entretanto, toda essa aparência de cansaço ilude (...) Basta o aparecimento de qualquer incidente exigindo-lhe o desencadear das energias adormecidas, e o homem se transfigura.\n(Euclides da Cunha, Os Sertões, 1902)",
      source: "Euclides da Cunha, Os Sertões."
    },
    prompt: "Na obra inaugural do Pré-Modernismo, a representação do habitante do sertão nordestino formulada por Euclides da Cunha reflete a tensão entre:",
    options: [
      { id: "a", text: "as teorias deterministas e raciais importadas da Europa e a constatação empírica da extraordinária bravura e capacidade de adaptação física do sertanejo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a rejeição radical da ciência moderna e a defesa do misticismo messiânico de Antônio Conselheiro como verdade teológica absoluta.", isCorrect: false, distractorRationale: "Euclides era positivista e engenheiro militar; ele não aceitava o misticismo do Conselheiro, mas admirava a fibra do sertanejo." },
      { id: "c", text: "o apoio incondicional à violência militar republicana e o desprezo racista pela população cabocla e sertaneja.", isCorrect: false, distractorRationale: "A obra de Euclides é, no fundo, uma denúncia demolidora do massacre estúpido promovido pelo Exército contra Canudos." },
      { id: "d", text: "o conformismo com a dominação latifundiária tradicional e o desinteresse por questões territoriais do semiárido.", isCorrect: false, distractorRationale: "O livro dedica sua primeira parte ('A Terra') à minuciosa análise geomorfológica e hídrica da Caatinga." },
      { id: "e", text: "a exaltação romântica do homem litorâneo como o único exemplo de força moral do país.", isCorrect: false, distractorRationale: "O autor critica expressamente os homens do litoral ('mestiços neurastênicos') em comparação com a firmeza do sertanejo." }
    ],
    detailedExplanation: {
      summary: "Euclides da Cunha foi a Canudos acreditando nas teorias racistas europeias de que o sertanejo era 'degenerado', mas a realidade do conflito desmentiu suas teorias, forçando-o a reconhecer o sertanejo como 'um forte'.",
      stepByStep: [
        "Passo 1: Reconhecer a bagagem teórica do autor: Euclides compartilhava o determinismo e o darwinismo social do final do século XIX, que viam na mestiçagem um fator de enfraquecimento biológico.",
        "Passo 2: Observar o choque com a realidade de Canudos: diante da resistência monumental dos conselheiristas contra quatro expedições do Exército brasileiro, Euclides é obrigado a rever suas certezas de gabinete.",
        "Passo 3: Identificar a contradição no texto: o sertanejo parece desengonçado e frágil no repouso, mas 'se transfigura' e revela vigor heróico diante da hostilidade da caatinga.",
        "Passo 4: A opção 'a' expressa a ruptura epistemológica central que marca 'Os Sertões'."
      ],
      coreConcept: "Pré-Modernismo, Os Sertões de Euclides da Cunha, determinismo racial versus resistência empírica sertaneja.",
      trapWarning: "Achar que Euclides idealizou Canudos; ele via o messianismo como retrocesso, mas denunciou a campanha militar como um crime de Estado bárbaro."
    },
    commonTraps: ["ignorar_a_ambivalencia_teorica_do_autor", "confundir_euclides_com_romantico_idealizador"],
    tags: ["os_sertoes", "euclides_da_cunha", "pre_modernismo", "canudos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-015",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Brasileira",
    subtopic: "Pré-Modernismo e Lima Barreto",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Policarpo Quaresma, funcionário exemplar da Secretaria de Guerra, dedicou a vida a estudar as riquezas e tradições nacionais. Em seu fervor patriótico, enviou um ofício ao Congresso Nacional requerendo a decretação do tupi-guarani como língua oficial do Brasil, sob a alegação de que a língua portuguesa era um idioma estrangeiro e colonial. O requerimento transformou-o em motivo de chacota no Rio de Janeiro e culminou em sua internação temporária em um hospício.",
      source: "Lima Barreto, Triste Fim de Policarpo Quaresma (1915)"
    },
    prompt: "Por meio do trágico destino de Policarpo Quaresma, Lima Barreto constrói uma contundente crítica literária que alveja:",
    options: [
      { id: "a", text: "o nacionalismo ingênuo e quixotesco do protagonista confrontado com o autoritarismo militar e a hipocrisia das elites oligárquicas da República Velha.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a superioridade moral dos diplomatas estrangeiros na condução da política externa do país.", isCorrect: false, distractorRationale: "O romance não elogia estrangeiros, mas zomba das convenções da política nacional." },
      { id: "c", text: "o desinteresse total da população pobre suburbana pelo ensino da língua portuguesa padrão.", isCorrect: false, distractorRationale: "O alvo da crítica não é a população pobre do subúrbio, mas o oficialismo burocrático e a tirania governamental." },
      { id: "d", text: "a obrigatoriedade do serviço militar para a concessão de diplomas de ensino superior.", isCorrect: false, distractorRationale: "Tema inexistente no conflito da obra de Lima Barreto." },
      { id: "e", text: "a necessidade urgente de restaurar a monarquia constitucional absolutista de D. Pedro I.", isCorrect: false, distractorRationale: "Lima Barreto era republicano convicto e progressista; criticava os desvios autoritários da República, não o ideal republicano." }
    ],
    detailedExplanation: {
      summary: "Lima Barreto desconstrói o ufanismo patriótico cego e denuncia como o Estado brasileiro descarta seus cidadãos idealistas em benefício do arbítrio do Marechal Floriano Peixoto.",
      stepByStep: [
        "Passo 1: Entender a figura de Policarpo Quaresma: um 'Dom Quixote' brasileiro, cuja obsessão em salvar a pátria pelas vias teóricas (o tupi, a agricultura folclórica, a defesa de Floriano) fracassa diante da realidade.",
        "Passo 2: Mapear as desilusões de Policarpo: primeiro é visto como louco pela proposta do tupi; depois sua fazenda no interior é destruída por pragas e políticos locais; finalmente, ao defender prisioneiros da Revolta da Armada contra fuzilamentos sumários de Floriano, é condenado à morte.",
        "Passo 3: Identificar a postura de Lima Barreto: escritor negro, periférico e marginalizado pelos círculos acadêmicos nobres, usou sua literatura para desmascarar a violência simbólica e institucional da Primeira República.",
        "Passo 4: A alternativa 'a' resume perfeitamente a tese central do romance."
      ],
      coreConcept: "Pré-Modernismo, Lima Barreto, crítica ao ufanismo nacionalista e denúncia do autoritarismo florianista.",
      trapWarning: "Achar que Lima Barreto concordava com a ingenuidade de Policarpo; o autor mostra que o patriotismo abstrato sem crítica social profunda conduz ao desengano e ao sacrifício inútil."
    },
    commonTraps: ["achar_que_o_autor_apoiava_o_tupi_literalmente", "desconsiderar_a_critica_ao_marechal_de_ferro"],
    tags: ["lima_barreto", "policarpo_quaresma", "pre_modernismo", "ufanismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-016",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Brasileira",
    subtopic: "Modernismo de 1922 e Macunaíma",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No fundo do mato-virgem nasceu Macunaíma, herói de nossa gente. Era preto retinto e filho do medo da noite. Houve um momento em que o silêncio foi tão grande escutando o murmurejo do Uraricoera, que a índia tapanhumas pariu uma criança feia. Essa criança é que chamaram de Macunaíma. Já na meninice fez coisas de sarapantar. De primeiro passou mais de seis anos não falando. Si o incitavam a falar exclamava:\n— Ai! que preguiça!...\n(Mário de Andrade, Macunaíma: o herói sem nenhum caráter, 1928)",
      source: "Mário de Andrade, Macunaíma."
    },
    prompt: "Ao definir Macunaíma como 'o herói sem nenhum caráter' e articular uma narrativa que transita fluidamente entre o mito indígena, o folclore e a metrópole industrial de São Paulo, Mário de Andrade propõe:",
    options: [
      { id: "a", text: "uma caracterização da identidade nacional como algo inacabado, plural, mutável e sincrético, rompendo com as representações monolíticas e idealizadas do homem brasileiro.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "um manual de conduta moral para demonstrar que a preguiça congênita impede o desenvolvimento econômico do país.", isCorrect: false, distractorRationale: "Interpretação moralista equivocada; a frase de Macunaíma é deboche modernista contra a ética utilitarista e puritana do trabalho burguês." },
      { id: "c", text: "uma defesa irrestrita da pureza biológica das populações indígenas em oposição à mestiçagem cosmopolita.", isCorrect: false, distractorRationale: "O livro celebra precisamente a metamorfose e a mistura: Macunaíma nasce negro de mãe indígena e depois embranquece na água mágica." },
      { id: "d", text: "a reprodução estrita da gramática parnasiana clássica sem interferências de termos da oralidade popular brasileira.", isCorrect: false, distractorRationale: "Mário de Andrade elaborou a 'gramatiquinha brasileira', fundamentada na linguagem oral e no sincretismo linguístico de várias regiões." },
      { id: "e", text: "uma cópia servil dos romances épicos gregos da Antiguidade Clássica sem referências à paisagem nativa.", isCorrect: false, distractorRationale: "Macunaíma é uma rapsódia modernista revolucionária profundamente enraizada na mitologia amazônica recolhida por Koch-Grünberg." }
    ],
    detailedExplanation: {
      summary: "O termo 'sem nenhum caráter' não significa 'mau caráter' (falta de ética), mas sim 'sem uma forma fixa ou acabada' (ausência de definição imutável), refletindo o caráter em formação do povo brasileiro.",
      stepByStep: [
        "Passo 1: Desconstruir o conceito de caráter: para Mário de Andrade, os povos europeus tinham caracteres cristalizados há séculos; o brasileiro é uma cultura jovem, sincrética e em perpétua transformação.",
        "Passo 2: Analisar a forma da rapsódia: o autor costura lendas amazônicas, causos do sertão e o ritmo frenético de São Paulo (o gigante Piaimã/Venceslau Pietro Pietra), criando um mosaico cultural híbrido.",
        "Passo 3: Identificar a revolução linguística: emprego da linguagem falada no Brasil ('Si o incitavam', 'De primeiro'), rejeitando a vassalagem aos padrões lusitanos.",
        "Passo 4: A opção 'a' sintetiza com excelência o significado cultural e estético de Macunaíma."
      ],
      coreConcept: "Modernismo de 22, Macunaíma de Mário de Andrade, identidade nacional sincrética e antropofagia cultural.",
      trapWarning: "Entender 'sem nenhum caráter' como um insulto moral aos brasileiros; na estética modernista, trata-se de liberdade e indeterminação criativa."
    },
    commonTraps: ["entender_sem_carater_como_ofensa_moral", "ignorar_a_rapsodia_e_a_antropofagia_cultural"],
    tags: ["macunaima", "mario_de_andrade", "modernismo_1922", "antropofagia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-017",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Brasileira",
    subtopic: "Drummond e a Poesia Social da Fase de 30",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Uma flor nasceu na rua!\nPassem de longe, bondes, ônibus, rio de aço do tráfego.\nUma flor ainda desbotada\nilude a polícia, rompe o asfalto.\nFaçam completo silêncio, paralisem os negócios,\ngarantam que uma flor nasceu.\n\nSua cor não se percebe.\nNão tem nome.\nÉ feia. Mas é realmente uma flor.\n(Carlos Drummond de Andrade, A Flor e a Náusea, 1945)",
      source: "Carlos Drummond de Andrade, A Rosa do Povo."
    },
    prompt: "No livro 'A Rosa do Povo', escrito sob o impacto da Segunda Guerra Mundial e do Estado Novo varguista, Drummond constrói no poema 'A Flor e a Náusea' a imagem da flor que rompe o asfalto como símbolo da:",
    options: [
      { id: "a", text: "resistência poética e da esperança vital que brota em meio à opressão, à desumanização e à rigidez cinzenta da ordem estabelecida.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "vitória definitiva da tecnologia automobilística sobre a fragilidade dos ecossistemas naturais.", isCorrect: false, distractorRationale: "O poema ordena que o tráfego de aço paralise diante do milagre da flor, valorizando a flor contra a máquina opressora." },
      { id: "c", text: "fuga alienada do poeta para a infância campestre como forma de ignorar os horrores da guerra mundial.", isCorrect: false, distractorRationale: "O poema é profundamente engajado na realidade histórica urbana; não é alienação nostálgica." },
      { id: "d", text: "superioridade biológica das pragas vegetais capazes de destruir rodovias públicas pavimentadas.", isCorrect: false, distractorRationale: "Leitura excessivamente literal e sem sensibilidade lírica da metáfora drummondiana." },
      { id: "e", text: "adesão incondicional do autor aos discursos propagandísticos do autoritarismo fascista.", isCorrect: false, distractorRationale: "Drummond era anti-fascista convicto e 'A Rosa do Povo' é o ápice da sua lírica humanitária e democrática de esquerda." }
    ],
    detailedExplanation: {
      summary: "A flor que 'rompe o asfalto' e 'ilude a polícia' simboliza a força indomável da beleza, da arte e da liberdade humana brotando no solo mais árido e opressor da modernidade.",
      stepByStep: [
        "Passo 1: Reconhecer a fase poética: Segunda Fase do Modernismo (Fase de 1930 / Poesia Social e Política de Drummond).",
        "Passo 2: Analisar o contraste imagético: de um lado, o asfalto duro, o tráfego cinzento, a polícia, os negócios, a náusea existencial perante o mundo conflagrado; de outro lado, a flor feia, desbotada, mas viva e teimosa.",
        "Passo 3: Interpretar o gesto subversivo: a flor desafia a ordem e exige a paralisação do maquinário burocrático, afirmando a primazia da vida sobre o cimento.",
        "Passo 4: A opção 'a' sintetiza com refinamento a chave de leitura existencial e política do poema."
      ],
      coreConcept: "A Rosa do Povo de Drummond, poesia social de 30, metáfora da flor no asfalto e resistência humanitária.",
      trapWarning: "Fazer uma interpretação meramente botânica da flor, desconsiderando o contexto histórico do fascismo e da censura contra os quais o livro se insurge."
    },
    commonTraps: ["leitura_literal_botanica", "descontextualizar_da_segunda_guerra_mundial"],
    tags: ["drummond", "a_rosa_do_povo", "poesia_social", "modernismo_1930"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-018",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Brasileira",
    subtopic: "Jorge Amado e Capitães da Areia",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Sob a lua, num velho trapiche abandonado perto do porto de Salvador, dormiam os Capitães da Areia. Crianças vestidas de farrapos, sujas e semi-esfomeadas, donas da cidade que as temia e as repelia. Pedro Bala, o líder corajoso; Professor, o leitor que contava histórias; Sem-Pernas, o espião amargo; Volta-Seca, o afilhado de Lampião; Pirulito, o devoto. Ninguém cuidava deles a não ser eles próprios. E o reformatório da cidade era apenas uma masmorra de espancamentos que os transformava em feras.",
      source: "Jorge Amado, Capitães da Areia (1937)"
    },
    prompt: "No romance 'Capitães da Areia', inserido no regionalismo de 30 do Modernismo, a abordagem de Jorge Amado sobre os menores em situação de rua em Salvador combina:",
    options: [
      { id: "a", text: "denúncia da violência e da omissão das instituições estatais com um lirismo poético que resgata a dignidade, a solidariedade e os sonhos da infância marginalizada.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "criminalização higienista dos jovens infratores, defendendo penas de trabalhos forçados como solução civilizatória.", isCorrect: false, distractorRationale: "O romance denuncia a violência do reformatório e toma partido incondicionalmente ao lado dos meninos." },
      { id: "c", text: "romantização aristocrática que atribui aos meninos a posse de tesouros coloniais esquecidos nas praias baianas.", isCorrect: false, distractorRationale: "Não é uma narrativa fantástica de caça ao tesouro, mas um romance social realista de denúncia política." },
      { id: "d", text: "desprezo pelas manifestações religiosas de matriz africana praticadas nos terreiros de candomblé da Bahia.", isCorrect: false, distractorRationale: "Jorge Amado valoriza intensamente o candomblé (Ogum, Iemanjá, Mãe Aninha) como esteio cultural e afetivo dos marginalizados." },
      { id: "e", text: "defesa do isolamento rural estrito, condenando qualquer interação com a vida da cidade portuária.", isCorrect: false, distractorRationale: "O livro é urbano por excelência; os meninos conhecem e dominam as ladeiras e a vida urbana de Salvador." }
    ],
    detailedExplanation: {
      summary: "Jorge Amado humaniza os meninos do trapiche ao revelar que a delinquência não é desvio inato, mas resultado da exclusão social e da brutalidade institucional do Estado.",
      stepByStep: [
        "Passo 1: Identificar a temática do romance de 30: engajamento social, foco nos despossuídos e denúncia das desigualdades estruturais.",
        "Passo 2: Reconhecer a ambivalência dos personagens: cometem pequenos furtos para sobreviver, mas possuem lealdade inabalável entre si, sensibilidade artística e sede de justiça.",
        "Passo 3: Mapear a crítica institucional: o Reformatório e a Polícia são mostrados como máquinas de repressão covarde que apenas geram mais violência.",
        "Passo 4: A opção 'a' expressa com sensibilidade a síntese entre engajamento ideológico e lirismo humanista característica de Jorge Amado."
      ],
      coreConcept: "Romance de 30, Capitães da Areia de Jorge Amado, infância marginalizada e crítica ao sistema penal juvenil.",
      trapWarning: "Ver os Capitães da Areia sob a ótica policial simplista de meros criminosos; Jorge Amado constrói a narrativa para despertar a compaixão e a indignação cidadã do leitor."
    },
    commonTraps: ["criminalizar_os_meninos_desconsiderando_o_lirismo_do_autor", "desconhecer_o_papel_do_trapiche"],
    tags: ["jorge_amado", "capitaes_da_areia", "romance_de_30", "marginalidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-019",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Brasileira",
    subtopic: "Guimarães Rosa e a Travessia Metafísica",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nonada. Tiros que o senhor ouviu foram de briga de homem não, Deus esteja (...) O diabo não há! É o que eu digo, se todo o mundo repete, amor em Deus me dê força. O diabo não existe de por si, mas em nós, nas forças nossas (...) O sertão está em toda parte. Sertão é o sozinho, é o perigoso (...) O sertão é do tamanho do mundo. Viver é muito perigoso...\n(João Guimarães Rosa, Grande Sertão: Veredas, 1956)",
      source: "João Guimarães Rosa, Grande Sertão: Veredas."
    },
    prompt: "No monólogo de Riobaldo que abre 'Grande Sertão: Veredas', marco da Geração de 45, Guimarães Rosa reinventa a tradição do regionalismo brasileiro ao transformar o sertão em:",
    options: [
      { id: "a", text: "um espaço metafísico e universal da existência humana, onde as batalhas de jagunços e a linguagem recriada espelham o enigma do bem, do mal e da alma.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "um documento estritamente geográfico voltado a subsidiar o traçado de ferrovias federais no norte de Minas Gerais.", isCorrect: false, distractorRationale: "A obra é literatura existencial e filosófica de altíssimo nível, não relatório técnico de engenharia de transportes." },
      { id: "c", text: "uma narrativa ingênua e documental que reproduz passivamente o linguajar arcaico sem qualquer inovação neológica.", isCorrect: false, distractorRationale: "A linguagem rosiana é uma reinvenção culta e neológica revolucionária, fundindo latim, grego e oralidade arcaica." },
      { id: "d", text: "um panfleto político defendendo a entrega do poder judicial aos bandos armados de jagunços.", isCorrect: false, distractorRationale: "O livro questiona a violência e a tragédia da jagunçagem, refletindo sobre a culpa e o perdão." },
      { id: "e", text: "uma sátira cômica destinada a ridicularizar as crendices dos vaqueiros perante os acadêmicos da capital.", isCorrect: false, distractorRationale: "O tom da narrativa é grandioso, trágico e sagrado, distante de qualquer caricatura zombeteira." }
    ],
    detailedExplanation: {
      summary: "Guimarães Rosa universalizou o sertão: 'O sertão é o mundo'. A travessia de Riobaldo entre o amor por Diadorim e o medo do pacto diabólico é a alegoria da travessia existencial de todo ser humano.",
      stepByStep: [
        "Passo 1: Entender a superação do regionalismo tradicional: até Guimarães Rosa, o regionalismo era visto como retrato folclórico ou denúncia sociológica externa do sertão exótico.",
        "Passo 2: Reconhecer a dimensão metafísica: Rosa coloca no sertão as questões cósmicas de Fausto (Goethe), a dúvida shakespeariana e a pergunta agostiniana sobre a origem do mal ('O diabo existe?').",
        "Passo 3: Analisar a revolução estilística: neologismos geniais ('nonada', 'desafastou', 'enxadrezar'), inversões sintáticas e sonoridades que reinventam a língua portuguesa.",
        "Passo 4: A opção 'a' sintetiza magistralmente a transcendência ontológica de Grande Sertão: Veredas."
      ],
      coreConcept: "Geração de 45, Grande Sertão: Veredas de Guimarães Rosa, sertão como metáfora metafísica e universalidade ontológica.",
      trapWarning: "Rotular Grande Sertão como mero romance pitoresco de fazenda ou bandidismo sertanejo; no ENEM, Rosa é cobrado pela elevação do regional ao plano universal da condição humana."
    },
    commonTraps: ["reduzir_rosa_a_regionalismo_folclorico", "desconhecer_o_carater_filosofico_da_obra"],
    tags: ["guimaraes_rosa", "grande_sertao_veredas", "geracao_de_45", "neologismos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-020",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura Brasileira",
    subtopic: "Concretismo e Vanguarda Poética no Brasil",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No Manifesto da Poesia Concreta (1956), poetas paulistas como Décio Pignatari, Augusto de Campos e Haroldo de Campos proclamaram o fim do verso tradicional como unidade rítmico-formal da poesia, defendendo a criação do 'poema-objeto' sustentado no trinômio 'verbi-voco-visual' (a palavra compreendida simultaneamente pelo seu sentido semântico, pelo seu som vocal e pela sua geometria visual no espaço em branco da página).",
      source: "Teoria da Poesia Concreta / Grupo Noigandres"
    },
    prompt: "A ruptura formal proposta pelo Concretismo na literatura brasileira da década de 1950 relacionava-se estreitamente com:",
    options: [
      { id: "a", text: "o contexto de otimismo desenvolvimentista e industrialização do país (plano de metas de JK, construção de Brasília), integrando o design gráfico, a publicidade e a velocidade dos meios de comunicação à linguagem poética.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o retorno saudosista aos sonetos parnasianos decassílabos com rimas ricas e temáticas da mitologia greco-romana.", isCorrect: false, distractorRationale: "O Concretismo explodiu o soneto e o verso; era a vanguarda mais radicalmente antinostálgica da poesia brasileira." },
      { id: "c", text: "a condenação da matemática e da arquitetura moderna em prol do misticismo religioso medieval.", isCorrect: false, distractorRationale: "Pelo contrário, o Concretismo dialogava intimamente com a arquitetura racionalista de Niemeyer e o design construtivista." },
      { id: "d", text: "a rejeição de qualquer tecnologia de impressão visual, exigindo que os poemas fossem transmitidos apenas por via oral nas feiras livres.", isCorrect: false, distractorRationale: "Os concretistas exploravam tipografia gráfica industrial sofisticada e cartazes urbanos." },
      { id: "e", text: "a defesa do ufanismo romântico do século XIX com a exaltação da fauna e da flora tropicais intocadas.", isCorrect: false, distractorRationale: "O concretismo era cosmopolita, urbano e internacionalista, rompendo com o nacionalismo ingênuo." }
    ],
    detailedExplanation: {
      summary: "O Concretismo nasceu no mesmo caldo cultural do desenvolvimentismo dos anos 50 que ergueu Brasília e inventou a Bossa Nova, alinhando a poesia ao design e à modernidade técnica.",
      stepByStep: [
        "Passo 1: Situar a década de 1950 no Brasil: anos JK, desenvolvimentismo, modernismo arquitetônico de Brasília, surgimento do design industrial e aceleração da cultura de massas.",
        "Passo 2: Analisar a proposta estética: abolir a sintaxe discursiva linear (sujeito-verbo-objeto); a palavra deve ocupar o espaço como arquitetura geométrica na página em branco.",
        "Passo 3: Compreender o conceito de 'verbivocovisual': ver a forma da letra (visual), ouvir a ressonância do fonema (vocal) e captar o significado dinâmico (verbal), como nos poemas 'Beba Coca-Cola' e 'Velocidade'.",
        "Passo 4: A alternativa 'a' contextualiza historicamente o Concretismo dentro do projeto modernizador brasileiro com exatidão."
      ],
      coreConcept: "Concretismo brasileiro (1956), Grupo Noigandres, estrutura verbivocovisual e desenvolvimentismo dos anos 50.",
      trapWarning: "Pensar que o Concretismo foi apenas 'brincadeira gráfica' sem relação com a história; ele refletiu a modernização industrial e o salto técnico do Brasil dos anos 1950."
    },
    commonTraps: ["achar_que_concretismo_e_apenas_desenho_sem_conteudo", "desconectar_a_poesia_da_industrializacao_dos_anos_50"],
    tags: ["concretismo", "decio_pignatari", "augusto_de_campos", "vanguarda_poetica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-LIT-021",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "Realismo Machadiano: Narrador Desabusado e Volubilidade",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o seguinte trecho de 'Memórias Póstumas de Brás Cubas' (1881), de Machado de Assis:\n\n'Este último capítulo é todo de negativas. Não alcancei a celebridade do emplasto, não fui ministro, não fui califa, não conheci o casamento. É verdade que, ao lado dessas faltas, coube-me a boa fortuna de não comprar o pão com o suor do meu rosto. Mais; não padeci a morte de Dona Plácida, nem a semidemência do Quincas Borba. Somadas umas coisas e outras, qualquer pessoa imaginará que não houve míngua nem sobra, e conseguinte que saí quite com a vida. E imaginará mal; porque ao chegar a este outro lado do mistério, achei-me com um pequeno saldo, que é a derradeira negativa deste capítulo de negativas: — Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria.'",
      source: "ASSIS, Machado de. Memórias Póstumas de Brás Cubas. 1881."
    },
    prompt: "Ao encerrar suas memórias declarando como 'pequeno saldo' vitorioso o fato de não ter deixado descendentes para transmitir 'o legado da nossa miséria', o narrador defunto de Machado de Assis consolida:",
    options: [
      { id: "a", text: "um pessimismo radical perante a condição humana e a hipocrisia das elites imperiais escravocratas, desnudando a vaidade ociosa da classe dominante sob uma perspectiva distanciada da vida terrena.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "uma adesão ingênua ao romantismo sentimental que celebra a esperança no amor conjugal eterno e na redenção divina.", isCorrect: false, distractorRationale: "O romance rompe com o sentimentalismo romântico, inaugurando o Realismo no Brasil com sarcasmo e ceticismo." },
      { id: "c", text: "um elogio fervoroso à moral burguesa do trabalho árduo e ao enriquecimento fruto do esforço pessoal dos operários.", isCorrect: false, distractorRationale: "Brás Cubas vangloria-se explicitamente de 'não comprar o pão com o suor do meu rosto', revelando o parasitismo senhorial." },
      { id: "d", text: "uma proposta política de reforma agrária socialista imediata para combater a concentração de terras no Império.", isCorrect: false, distractorRationale: "Brás Cubas é um aristocrata fútil e desocupado sem qualquer engajamento com lutas sociais populares." },
      { id: "e", text: "a conversão mística do narrador ao catecismo jesuítico tradicional do século XVI.", isCorrect: false, distractorRationale: "O tom de Brás Cubas é agnóstico, irônico e desprovido de dogmas religiosos piedosos." }
    ],
    detailedExplanation: {
      summary: "Memórias Póstumas de Brás Cubas (1881) inaugura o Realismo no Brasil. A condição de 'defunto autor' confere a Brás Cubas a liberdade suprema de confessar suas veleidades, covardias e a perversidade da elite sem temor ao julgamento social dos vivos.",
      stepByStep: [
        "1. Inovação estrutural: Não é um autor defunto (alguém vivo escrevendo sobre mortos), mas um 'defunto autor' escrevendo do além-túmulo.",
        "2. O 'legado de nossa miséria': O pessimismo antropológico de Machado atinge o ápice ao ver a reprodução biológica como perpetuação da dor e do desengano universal.",
        "3. Crítica social velada: O orgulho de não suar para ganhar o pão expõe a matriz escravocrata brasileira, onde o trabalho manual era relegado aos escravizados enquanto a elite senhorial vivia do ócio parasitário.",
        "4. Conclusão: A volubilidade machadiana desconstrói as ilusões morais da sociedade burguesa do Segundo Reinado."
      ],
      coreConcept: "Realismo Machadiano, Narrador Defunto e Volubilidade de Classe",
      trapWarning: "No ENEM: Machado de Assis NÃO fazia panfleto social aberto; sua crítica é sutil, mediada pela ironia mordaz, pelo narrador não confiável e pela psicologia profunda."
    },
    commonTraps: [
      "Confundir o pessimismo filosófico de Brás Cubas com depressão romântica (o tom machadiano é lúcido, cínico e aristocrático)",
      "Achar que Brás Cubas é o porta-voz virtuoso do autor Machado de Assis"
    ],
    tags: ["machado-de-assis", "realismo", "bras-cubas", "ironia", "pessimismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-LIT-022",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "Naturalismo e Determinismo em O Cortiço de Aluísio Azevedo",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Leia o seguinte trecho de 'O Cortiço' (1890), de Aluísio Azevedo:\n\n'Eram cinco horas da manhã e o cortiço acordava, abrindo, não os olhos, mas a sua infinidade de portas e janelas alinhadas. Um acordar alegre e farto de quem dormiu de um gole só, a sono solto. Um ranger de gonzos e fechaduras; um bater de portas; um chiar de frigideiras (...). O rumor crescia, condensando-se; o zunzum de todos os dias acentuava-se; já se não destacavam vozes dispersas, mas um só ruído grosso e contínuo que parecia vir da terra; (...) e naquela terra encharcada e fumegante, naquela umidade quente e lodosa, começou a minhocar, a esfervilhar, a crescer, um mundo, uma coisa viva, uma geração que parecia brotar espontânea, ali mesmo, daquele esterco.'",
      source: "AZEVEDO, Aluísio. O Cortiço. 1890."
    },
    prompt: "No fragmento transcrito, a estética naturalista manifesta-se através de recursos estilísticos que evidenciam a:",
    options: [
      { id: "a", text: "personificação e zoomorfização da habitação coletiva, retratando o cortiço como um organismo biológico vivo e instintivo que molda deterministamente os comportamentos e destinos das personagens que ali habitam.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "idealização platônica da moradia popular como um refúgio bucólico e harmonioso distante da corrupção das cidades.", isCorrect: false, distractorRationale: "A visão é crua, ligada ao lodo, esterco e instintos, em oposição frontal à idealização árcade ou romântica." },
      { id: "c", text: "celebração da nobreza de sangue e dos valores de cavalaria herdados das novelas medievais.", isCorrect: false, distractorRationale: "O Naturalismo foca nas classes populares urbanas marginalizadas sob ótica científica darwinista e zolaísta." },
      { id: "d", text: "rejeição categórica de teorias científicas e biológicas em favor da fé cristã milagrosa.", isCorrect: false, distractorRationale: "O Naturalismo é fundamentado no cientificismo, no determinismo de Taine e no evolucionismo da época." },
      { id: "e", text: "ênfase no fluxo de consciência interior e na introspecção existencial dos pensamentos abstratos dos moradores.", isCorrect: false, distractorRationale: "A abordagem é exterior, objetiva, coletiva e fisiológica, e não introspectiva intimista." }
    ],
    detailedExplanation: {
      summary: "Em 'O Cortiço', Aluísio Azevedo aplica o determinismo hipolitiano (o meio, a raça e o momento histórico). O próprio cortiço é o protagonista coletivo, descrito com verbos de natureza biológica/animal ('minhocar, esfervilhar, brotar do esterco').",
      stepByStep: [
        "1. Estética Naturalista: Influenciada por Émile Zola, enxerga o ser humano como animal biológico movido por instintos primários (sexo, sobrevivência, ganância).",
        "2. Zoomorfização: As personagens e a coletividade são descritas com traços e metáforas animais ('minhocar', 'formigueiro', 'ninho').",
        "3. Determinismo ambiental: O espaço físico infecto e sensual do cortiço corrompe os indivíduos (como ocorre com o operário português Jerônimo, que abandona a família e o trabalho ao ser atraído pelo calor tropical e por Rita Baiana).",
        "4. Conclusão: A alternativa 'a' sintetiza as bases teóricas do Naturalismo brasileiro no ENEM."
      ],
      coreConcept: "Naturalismo no Brasil: Zoomorfização, Determinismo e Protagonismo Coletivo",
      trapWarning: "No ENEM: Diferencie Realismo de Naturalismo: o Realismo analisa a hipocrisia psicológica e moral da burguesia; o Naturalismo foca nos instintos biológicos, na patologia social e nas massas populares."
    },
    commonTraps: [
      "Confundir zoomorfização (homens descritos como animais) com fábula moralizante",
      "Achar que o protagonista de O Cortiço é João Romão individualmente (o cortiço em si é o personagem central)"
    ],
    tags: ["naturalismo", "aluisio-azevedo", "o-cortico", "zoomorfizacao", "determinismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-LIT-023",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura",
    subtopic: "Poesia Marginal e a Geração Mimeógrafo dos Anos 1970",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o poema 'Rápido e Rasteiro', de Chacal, e o contexto da poesia marginal brasileira na década de 1970:\n\n'vai ter uma festa\nque eu vou dançar\naté o sapato pedir água\naí eu tiro o sapato\ne danço o resto da vida'\n\nDurante o regime militar e sob vigência do AI-5, jovens poetas cariocas e paulistas passaram a produzir seus próprios livretos impressos artesanalmente em mimeógrafos e copiadoras, vendendo-os pessoalmente de mão em mão nas portas de cinemas, teatros, bares e praças públicas.",
      source: "CHACAL. Poesia Marginal dos Anos 70. Coleção Cantadas Literárias."
    },
    prompt: "A produção poética da Geração Mimeógrafo consolidou uma estética inovadora que se caracterizou pela:",
    options: [
      { id: "a", text: "linguagem coloquial e despojada, pelo lirismo bem-humorado do instante cotidiano e pela circulação alternativa autônoma, subvertendo tanto o mercado editorial convencional quanto a asfixia repressiva da censura política.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "retomada rigorosa das formas parnasianas fixas, com métrica alexandrina perfeita e vocabulário arcaico lusitano.", isCorrect: false, distractorRationale: "Os poetas marginais repudiaram frontalmente qualquer formalismo acadêmico parnasiano." },
      { id: "c", text: "obediência cega aos editais e manuais oficiais de cultura chancelados pelos censores da ditadura.", isCorrect: false, distractorRationale: "Eles eram chamados de 'marginais' justamente por atuarem fora da censura prévia institucional." },
      { id: "d", text: "produção de longos tratados épicos em prosa narrando triunfos militares governamentais.", isCorrect: false, distractorRationale: "A poesia marginal privilegiava o poema-pílula, o fragmento relâmpago e o cotidiano urbano intimista." },
      { id: "e", text: "distribuição exclusiva de livros de luxo importados para colecionadores da alta nobreza europeia.", isCorrect: false, distractorRationale: "A confecção era precária, artesanal e popular em folhas de mimeógrafo baratas." }
    ],
    detailedExplanation: {
      summary: "A 'Poesia Marginal' dos anos 70 (Chacal, Cacaso, Ana Cristina Cesar, Torquato Neto) driblou o mercado formal e a censura militar com impressões caseiras em mimeógrafo. Esteticamente, recuperou o humor modernista de 1922, a linguagem das ruas e a celebração do corpo livre.",
      stepByStep: [
        "1. Contexto político-social: Década de 1970, fechamento pós-AI-5, censura prévia ferrenha às artes e editoras.",
        "2. Por que 'marginal'?: À margem do mercado editorial hegemônico e à margem do sistema político oficial.",
        "3. Estilo: Poema-relâmpago, coloquialismo deliberado, gírias da juventude, velocidade pop e ironia despretensiosa.",
        "4. Conexão com o Modernismo: Diálogo direto com Oswald de Andrade e a Poesia Pau-Brasil de 1924.",
        "5. Conclusão: A alternativa 'a' captura com perfeição a dimensão estética e sociopolítica da Geração Mimeógrafo no ENEM."
      ],
      coreConcept: "Poesia Marginal dos Anos 1970, Geração Mimeógrafo e Resistência Contracultural",
      trapWarning: "No ENEM: Marginalidade aqui NÃO tem sentido de marginalidade criminal; significa estar à margem das engrenagens comerciais e oficiais da indústria cultural da época."
    },
    commonTraps: [
      "Associar 'marginal' a condutas criminosas em vez de posição editorial independente",
      "Achar que por ser leve e bem-humorada a poesia marginal não continha resistência política à ditadura"
    ],
    tags: ["poesia-marginal", "geracao-mimeografo", "chacal", "ditadura-militar", "anos-1970"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-LIT-024",
    area: "linguagens",
    competence: 5,
    skill: 17,
    topic: "Literatura",
    subtopic: "Guimarães Rosa e a Dimensão Universal do Sertão",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Leia o seguinte excerto de 'Grande Sertão: Veredas' (1956), obra-prima de João Guimarães Rosa:\n\n'O sertão está em toda a parte. O sertão é dentro da gente. (...) Viver é negócio muito perigoso. O senhor sabe: sertão é onde o pensamento da gente se forma mais forte do que o poder do lugar. (...) O diabo não há! É o que eu digo, se for... Existe é homem humano. Travessia.'",
      source: "ROSA, João Guimarães. Grande Sertão: Veredas. 1956."
    },
    prompt: "Na prosa rosiana da Terceira Geração Modernista (Geração de 45), a recriação do espaço sertanejo supera o mero regionalismo documental porque:",
    options: [
      { id: "a", text: "transfigura o sertão geográfico em um território mítico e metafísico de questionamento ontológico universal, onde os conflitos do jagunço espelham os dilemas universais da alma humana sobre o bem, o mal e o destino.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "limita-se a catalogar a flora e a fauna do cerrado mineiro com linguagem estritamente botânica de manual.", isCorrect: false, distractorRationale: "Guimarães Rosa recria a linguagem poeticamente para filosofar sobre a existência, indo muito além de inventário botânico." },
      { id: "c", text: "adota a norma-padrão gramatical lusitana clássica sem introduzir qualquer inovação lexical ou neologismo.", isCorrect: false, distractorRationale: "A marca suprema de Guimarães Rosa é a revolução da linguagem por neologismos, sintaxe arcaica e arroubos poéticos." },
      { id: "d", text: "retrata o sertanejo como uma criatura desprovida de sentimentos morais ou dúvidas existenciais.", isCorrect: false, distractorRationale: "O narrador Riobaldo é profundamente atormentado por dúvidas éticas, teológicas e afetivas (o amor por Diadorim)." },
      { id: "e", text: "defende que os dilemas da existência humana ocorrem apenas nos centros cosmopolitas europeus.", isCorrect: false, distractorRationale: "A célebre máxima de Rosa é justamente 'o sertão é o mundo', universalizando a experiência sertaneja." }
    ],
    detailedExplanation: {
      summary: "Em Grande Sertão: Veredas, Guimarães Rosa universaliza o regionalismo. O sertão não é folclore exótico para leitor urbano; é o palco existencial do homem perante o infinito ('Nonada. Tiros que o senhor ouviu...').",
      stepByStep: [
        "1. Superação do regionalismo tradicional: O romance de 30 (Graciliano, Jorge Amado) focava no determinismo socioeconômico da seca e do latifúndio; Rosa leva o sertão para o plano metafísico e ontológico.",
        "2. 'O sertão é o mundo': As dúvidas de Riobaldo sobre a existência do demônio, a lealdade na guerra jagunça e o amor interdito por Diadorim são dilemas da condição humana em qualquer tempo ou lugar.",
        "3. Revolução linguística: Sintaxe inovadora, fusão de termos arcaicos portugueses, latim, fala sertaneja viva e neologismos originais.",
        "4. 'Travessia': A vida como passagem constante de autoconstrução moral e ética.",
        "5. Conclusão: A alternativa 'a' traduz com rigor conceitual a genialidade universal de Rosa cobrada no ENEM."
      ],
      coreConcept: "Guimarães Rosa: O Sertão Metafísico Universal e a Geração de 45",
      trapWarning: "No ENEM: Nunca classifique Guimarães Rosa como 'regionalismo tradicional'. Seu projeto estético é o Regionalismo Universalizante."
    },
    commonTraps: [
      "Reduzir Grande Sertão: Veredas a uma história de tiroteio de jagunços e coronéis",
      "Não perceber a revolução neológica na sintaxe e no léxico rosiano"
    ],
    tags: ["guimaraes-rosa", "grande-sertao-veredas", "geracao-de-45", "neologismos", "metafisica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-LIT-025",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "Clarice Lispector e a Incompletude em A Hora da Estrela",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o seguinte trecho de 'A Hora da Estrela' (1977), último livro publicado por Clarice Lispector:\n\n'Ela não sabia que ela era o que era, assim como um cachorro não sabe que é cachorro. Daí não se sentir infeliz. A única coisa que queria era viver. Não sabia para quê, não se indagava. (...) Eu tenho que falar desta nordestina, senão sufoco. Ela me acusa e o meio de me defender é escrever sobre ela. (...) Proponho-me a que não seja complexo o que escreverei, embora seja obrigado a usar as palavras que vos sustentam. A história — determino com falso livre-arbítrio — terá uns sete personagens e eu sou um dos mais importantes deles, é claro. Eu, Rodrigo S.M. Velho escritor? Não, não se trata de idade, mas de peso.'",
      source: "LISPECTOR, Clarice. A Hora da Estrela. 1977."
    },
    prompt: "Ao intercalar o relato sobre a vida precária da jovem Macabéa com as reflexões metalinguísticas e existenciais do narrador fictício Rodrigo S.M., Clarice Lispector constrói uma narrativa que:",
    options: [
      { id: "a", text: "problematiza os limites éticos e estéticos do ato de narrar a miséria do outro, expondo o desconforto e a cumplicidade da elite letrada perante a invisibilidade histórica dos marginalizados sociais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ridiculariza a ingenuidade dos nordestinos para demonstrar a superioridade moral dos intelectuais do sudeste.", isCorrect: false, distractorRationale: "O narrador sente culpa, vergonha e desconforto angustiante ao falar de Macabéa, sem qualquer postura de deboche moral." },
      { id: "c", text: "apresenta um relato jornalístico estritamente objetivo sem qualquer interferência dos sentimentos do narrador.", isCorrect: false, distractorRationale: "A narrativa clariceana é profundamente subjetiva, lírica e metalinguística." },
      { id: "d", text: "conclui que a opressão social é um destino benéfico para a preservação da inocência espiritual da personagem.", isCorrect: false, distractorRationale: "O livro denuncia o aniquilamento da vida e a carência material extrema de Macabéa como tragédia brasileira." },
      { id: "e", text: "propõe que escritores devem se abster de escrever ficção para se dedicar apenas à administração pública.", isCorrect: false, distractorRationale: "A reflexão debate a responsabilidade moral e vital da escrita artística ('senão sufoco')." }
    ],
    detailedExplanation: {
      summary: "Em A Hora da Estrela (1977), Clarice entrelaça a denúncia social (a saga da alagoana Macabéa na periferia carioca) com a vertigem metalinguística (o narrador Rodrigo S.M. que expõe a dificuldade ética do escritor burguês em dar voz aos despossuídos sem cair no sentimentalismo fácil ou na apropriação indébita).",
      stepByStep: [
        "1. Personagem Macabéa: Datilógrafa nordestina semianalfabeta, órfã, desnutrida (alimenta-se de cachorro-quente e café frio), que vive em quarto com quatro moças de balcão e não tem consciência de sua própria tragédia.",
        "2. A invenção de Rodrigo S.M.: Clarice cria um narrador masculino interposto para interrogar o ato de escrita: 'Como narrar quem não tem palavras para si mesma?'.",
        "3. Metalinguagem e Ética: A narrativa reflete sobre a culpa de classe do intelectual, a insuficiência das palavras e a violência da desigualdade brasileira.",
        "4. A 'Hora da Estrela': Macabéa só se torna o centro das atenções e 'estrela' no instante de sua morte atropelada por um Mercedes-Benz amarelo de luxo.",
        "5. Conclusão: A alternativa 'a' resume magistralmente a confluência entre consciência social e vanguarda reflexiva de Clarice Lispector."
      ],
      coreConcept: "Clarice Lispector: Metalinguagem, Ética da Escrita e Invisibilidade Social",
      trapWarning: "No ENEM: A Hora da Estrela é a obra mais política e social de Clarice Lispector, combinando sua costumeira introspecção psicológica existencial com uma denúncia contundente da miséria urbana brasileira."
    },
    commonTraps: [
      "Achar que Clarice só escrevia romances intimistas de dona de casa burguesa e não abordava questões sociais",
      "Ignorar a voz do narrador Rodrigo S.M., tratando o livro como se tivesse narração em terceira pessoa tradicional neutra"
    ],
    tags: ["clarice-lispector", "a-hora-da-estrela", "macabea", "metalinguagem", "desigualdade-social"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];



