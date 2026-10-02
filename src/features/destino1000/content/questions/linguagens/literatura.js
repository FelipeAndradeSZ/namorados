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
  }
];

