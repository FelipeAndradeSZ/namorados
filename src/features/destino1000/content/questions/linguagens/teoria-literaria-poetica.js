/**
 * BANCO DE QUESTÕES ENEM: Teoria Literária, Gêneros Canônicos, Foco Narrativo e Poética
 * Área: Linguagens, Códigos e suas Tecnologias
 * Disciplina: Literatura e Teoria Literária
 * Quantidade: 25 Questões Inéditas de Alta Fidelidade ENEM (LIN-TEO-001 a LIN-TEO-025)
 * Regra Estrita: ZERO termos de deslocamento turístico. Foco em poética, narratologia, polifonia, metalinguagem e estranhamento.
 */

export const QUESTIONS_TEORIA_LITERARIA = [
  {
    id: "LIN-TEO-001",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Tripartição Clássica dos Gêneros Literários",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Desde a Antiguidade Clássica, a reflexão estética ocidental — consolidada na 'Poética' de Aristóteles e posteriormente sistematizada no Iluminismo e no Romantismo — consagrou a tripartição dos gêneros literários em lírico, épico (ou narrativo) e dramático. Cada gênero articula uma atitude enunciativa singular entre o eu poético, o tempo e a representação da realidade externa.",
      source: "CÂNDIDO, A. O Estudo Analítico do Poema. São Paulo: Humanitas, 2014."
    },
    prompt: "O gênero dramático diferencia-se formalmente do gênero narrativo porque, no drama,",
    options: [
      {
        id: "a",
        text: "a ação transcorre exclusivamente pela mediação da voz de um narrador onisciente que descreve os estados psicológicos dos personagens.",
        isCorrect: false,
        distractorRationale: "A mediação de um narrador é a marca definidora do gênero épico/narrativo, e não do dramático."
      },
      {
        id: "b",
        text: "o conflito desenvolve-se diretamente na presença do público por meio do diálogo entre os personagens e de rubricas cênicas, prescindindo de um narrador mediador.",
        isCorrect: true,
        distractorRationale: "Correto: No gênero dramático (escrito para encenação teatral), não há uma voz narrativa intermediária contando os fatos no passado. A história presentifica-se em cena ('mímesis' pura) através da interação dialógica direta entre as personagens (falas) e das orientações de encenação (rubricas ou didascálias)."
      },
      {
        id: "c",
        text: "predomina a expressão subjetiva dos sentimentos íntimos de um eu lírico atemporal em verso rimado.",
        isCorrect: false,
        distractorRationale: "Essa é a definição clássica do gênero lírico, e não do gênero dramático."
      },
      {
        id: "d",
        text: "os acontecimentos heroicos do passado coletivo de um povo são celebrados em longos cantos decassílabos.",
        isCorrect: false,
        distractorRationale: "Essa é a caracterização do poema épico (epopeia)."
      },
      {
        id: "e",
        text: "a linguagem perde seu valor polissêmico e assume função estritamente informativa e referencial.",
        isCorrect: false,
        distractorRationale: "A linguagem teatral dramática é altamente poética, polissêmica e metafórica, e não meramente referencial."
      }
    ],
    detailedExplanation: {
      summary: "O gênero dramático é feito para encenação teatral: os personagens atuam e dialogam diretamente em cena, sem a presença de um narrador mediador.",
      stepByStep: [
        "1. Relembrar a tripartição aristotélica clássica: Lírico (subjetividade do eu), Épico/Narrativo (alguém narra ações no tempo) e Dramático (ações encenadas diretamente).",
        "2. Identificar a especificidade estrutural do texto dramático: texto em forma de diálogos intercalados com indicações de cena (rubricas/didascálias).",
        "3. Constatar que não existe a figura do narrador que interpõe sua voz entre os acontecimentos e o leitor/espectador.",
        "4. A ação acontece em tempo presente na frente do público."
      ],
      coreConcept: "No texto dramático, a ausência de um narrador mediador transfere a condução do conflito integralmente para os diálogos e rubricas cênicas.",
      trapWarning: "Cuidado para não confundir 'drama' (sinônimo vulgar de sofrimento) com o 'gênero dramático' (categoria formal de textos para teatro)."
    },
    commonTraps: [
      "Achar que todo texto dramático precisa ter um narrador contando o enredo.",
      "Confundir gênero lírico (subjetividade) com dramático (ação teatral)."
    ],
    tags: ["Linguagens", "Literatura", "Gênero Dramático", "Teoria Literária", "Aristóteles"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-002",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura",
    subtopic: "Foco Narrativo: O Narrador em Primeira Pessoa e a Não Confiabilidade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Examinando a perspectiva narrativa de 'Dom Casmurro', a crítica literária Helen Caldwell propôs uma leitura revolucionária ao demonstrar que Bento Santiago não é um relator imparcial dos fatos, mas um advogado de acusação que constrói uma narrativa retrospectiva enviesada pelo ciúme patológico para condenar Capitu perante o leitor. O leitor só tem acesso aos eventos, conversas e gestos através do filtro seletivo da memória do próprio narrador-personagem.",
      source: "CALDWELL, H. O Otelo Brasileiro de Machado de Assis. Cotia: Ateliê Editorial, 2002."
    },
    prompt: "O recurso narratológico destacado no texto teórico explicita que o narrador em primeira pessoa",
    options: [
      {
        id: "a",
        text: "alcança a onisciência neutra ao revelar os sentimentos inconfessáveis de todos os personagens com objetividade científica.",
        isCorrect: false,
        distractorRationale: "O narrador em 1ª pessoa tem visão limitada (foco interno) e jamais atinge a onisciência neutra."
      },
      {
        id: "b",
        text: "apresenta uma visão parcial e subjetiva da trama, transformando o relato em uma versão construída de acordo com seus próprios interesses e convicções.",
        isCorrect: true,
        distractorRationale: "Correto: O narrador em primeira pessoa (homodiegético ou autodiegético) está imerso no universo ficcional; sua visão de mundo é restrita à sua perspectiva sensorial, memorial e psicológica. Por não ter acesso direto à consciência alheia, seu relato é inerentemente subjetivo e potencialmente não confiável, exigindo do leitor postura crítica e desconfiada."
      },
      {
        id: "c",
        text: "estabelece uma verdade fática incontestável ao relatar acontecimentos testemunhados presencialmente.",
        isCorrect: false,
        distractorRationale: "O fato de testemunhar presencialmente não anula a subjetividade e as distorções psicológicas da memória."
      },
      {
        id: "d",
        text: "anula o distanciamento irônico ao coincidir perfeitamente com a biografia real do autor histórico.",
        isCorrect: false,
        distractorRationale: "Confunde autor histórico (Machado de Assis) com a entidade ficcional do narrador (Bento Santiago)."
      },
      {
        id: "e",
        text: "elimina a necessidade de interpretação pelo leitor, já que a confissão explícita soluciona o enigma do enredo.",
        isCorrect: false,
        distractorRationale: "A não confiabilidade do narrador amplifica a ambiguidade e exige esforço interpretativo ativo do leitor."
      }
    ],
    detailedExplanation: {
      summary: "O narrador-personagem possui foco narrativo interno e restrito: sua fala expressa apenas seu ponto de vista subjetivo, podendo ser parcial e não confiável.",
      stepByStep: [
        "1. Distinguir o foco em 3ª pessoa (heterodiegético, frequentemente onisciente) do foco em 1ª pessoa (homodiegético/personagem).",
        "2. Compreender que o narrador em 1ª pessoa tem horizonte perceptivo limitado ao que viu, ouviu ou inferiu.",
        "3. Em obras como 'Dom Casmurro', a narração retrospectiva do narrador ciumento atua como defesa de sua própria tese.",
        "4. O leitor atento percebe as lacunas e contradições do relato, reconhecendo a 'não confiabilidade' (unreliable narrator)."
      ],
      coreConcept: "Narradores em primeira pessoa são subjetivos e parciais; sua visão não coincide necessariamente com a verdade dos fatos na diegese.",
      trapWarning: "Nunca confunda autor histórico (quem escreveu o livro no mundo real) com narrador (a voz inventada que conta a história dentro da ficção)."
    },
    commonTraps: [
      "Tomar o depoimento do narrador-personagem como verdade absoluta e inquestionável.",
      "Confundir o narrador Bentinho com o autor Machado de Assis."
    ],
    tags: ["Linguagens", "Literatura", "Foco Narrativo", "Narrador Não Confiável", "Machado de Assis"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-003",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Função Poética e o Estranhamento Estético (Shklovsky)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O teórico formalista russo Viktor Shklovsky sustentava que a finalidade da arte é recuperar a sensação da vida, romper com o automatismo perceptivo do cotidiano e fazer o homem sentir as coisas como se as visse pela primeira vez. Para Shklovsky, o procedimento artístico fundamental é a 'desfamiliarização' ou 'estranhamento' (ostranenie): tornar difícil a forma, aumentar a dificuldade e a duração da percepção estética, pois o processo de percepção em arte é um fim em si mesmo.",
      source: "SHKLOVSKY, V. A Arte como Procedimento. In: TOLEDO, D. O. (Org.). Teoria da Literatura: Formalistas Russos. Porto Alegre: Globo, 1978."
    },
    prompt: "De acordo com o conceito de estranhamento estético, a linguagem literária atua sobre o leitor ao",
    options: [
      {
        id: "a",
        text: "facilitar a rápida absorção das mensagens por meio de frases feitas e clichês de circulação midiática.",
        isCorrect: false,
        distractorRationale: "O uso de clichês é exatamente o automatismo que a literatura busca combater e desarticular."
      },
      {
        id: "b",
        text: "desautomatizar o olhar sobre a realidade, obrigando-o a deter-se na materialidade das palavras e a redescobrir os sentidos do mundo.",
        isCorrect: true,
        distractorRationale: "Correto: A desfamiliarização (estranhamento) retira os objetos do campo da percepção automatizada e cotidiana (onde olhamos sem realmente enxergar). Por meio de metáforas inusitadas, quebras sintáticas e sonoridades singulares, o texto literário torna a linguagem opaca e densa, retardando a apreensão e provocando um impacto perceptivo renovado sobre o leitor."
      },
      {
        id: "c",
        text: "subordinar a forma do texto à eficácia da propaganda institucional e ideológica.",
        isCorrect: false,
        distractorRationale: "A instrumentalização propagandística anula a especificidade estética que Shklovsky defende."
      },
      {
        id: "d",
        text: "reproduzir fielmente as convenções do código gramatical normativo sem criar tensões vocabulares.",
        isCorrect: false,
        distractorRationale: "A literatura vive de desvios expressivos e tensões formais, não de mera reprodução mecânica da norma culta."
      },
      {
        id: "e",
        text: "limitar o ato poético à cópia documental e descritiva de dados empíricos observáveis.",
        isCorrect: false,
        distractorRationale: "A cópia literal é automatismo empírico; a arte opera pela reelaboração formal dos signos."
      }
    ],
    detailedExplanation: {
      summary: "O estranhamento (ostranenie) desautomatiza a percepção: a forma artística torna-se perceptível e densa, fazendo o leitor redescobrir o mundo e a linguagem.",
      stepByStep: [
        "1. Identificar a tese central de Shklovsky: a vida cotidiana automatiza nossa percepção (vemos objetos sem prestar atenção neles).",
        "2. Compreender a função da arte: quebrar a automatização por meio da deformação criativa da linguagem comum.",
        "3. Reconhecer que a literatura chama atenção para a sua própria forma (opacidade sígnica).",
        "4. Concluir que a leitura literária exige desaceleração e contemplação reflexiva."
      ],
      coreConcept: "A desfamiliarização poética desautomatiza a percepção do leitor, renovando o sentido das palavras e das coisas.",
      trapWarning: "Em literatura, a clareza utilitária não é o critério principal; a espessura estética da palavra importa tanto ou mais quanto a informação comunicada."
    },
    commonTraps: [
      "Achar que o bom texto literário é aquele que pode ser lido o mais rápido possível.",
      "Confundir literatura com jornalismo utilitário."
    ],
    tags: ["Linguagens", "Literatura", "Teoria Literária", "Estranhamento", "Formalismo Russo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-004",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Polifonia e o Dialogismo em Mikhail Bakhtin",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao analisar a obra de Fiódor Dostoiévski, o linguista e filósofo Mikhail Bakhtin formulou o conceito de 'romance polifônico'. Ao contrário do romance monológico tradicional — no qual a consciência do autor reina soberana sobre personagens subordinadas à sua visão de mundo —, o romance polifônico caracteriza-se pela pluralidade de vozes e consciências autônomas, plenivalentes e equipolentes, que dialogam e confrontam seus pontos de vista inconclusos sem que nenhuma delas tenha a última palavra.",
      source: "BAKHTIN, M. Problemas da Poética de Dostoiévski. Rio de Janeiro: Forense Universitária, 2013."
    },
    prompt: "Em uma perspectiva polifônica bakhtiniana, a construção do texto literário pressupõe",
    options: [
      {
        id: "a",
        text: "a imposição rígida da ideologia do narrador sobre todos os discursos dos personagens.",
        isCorrect: false,
        distractorRationale: "Essa é a característica do romance monológico, oposto ao modelo polifônico."
      },
      {
        id: "b",
        text: "o silenciamento de vozes dissonantes para garantir a harmonia unívoca do enredo.",
        isCorrect: false,
        distractorRationale: "A polifonia nutre-se do confronto e da multiplicidade de vozes conflitantes."
      },
      {
        id: "c",
        text: "a convivência dialógica de múltiplos discursos e visões de mundo independentes, que interagem sem a soberania de uma verdade única absoluta.",
        isCorrect: true,
        distractorRationale: "Correto: A polifonia (muitas vozes) estabelece que as personagens não são meros porta-vozes do autor, mas consciências plenas com ideologias próprias que se interpelam dialogicamente. O texto transforma-se em um espaço plural de debate ético e social, onde a verdade é inconclusa e construída nas inter-relações discursivas."
      },
      {
        id: "d",
        text: "o abandono dos diálogos teatrais em favor da prosa rimada descritiva.",
        isCorrect: false,
        distractorRationale: "A polifonia é um fenômeno discursivo e ideológico, não uma questão de rima na prosa."
      },
      {
        id: "e",
        text: "o uso exclusivo de monólogos interiores sem referência ao contexto social circundante.",
        isCorrect: false,
        distractorRationale: "Todo discurso para Bakhtin é inerentemente social e dialógico, voltado para a alteridade (o outro)."
      }
    ],
    detailedExplanation: {
      summary: "A polifonia bakhtiniana reside na coexistência de múltiplas vozes autônomas e plenivalentes que debatem no texto sem que a voz do autor submeta ou anule a alteridade.",
      stepByStep: [
        "1. Diferenciar monologismo (uma única voz dominante que dita as regras) de polifonia (pluralidade de vozes equipolentes).",
        "2. Notar que no romance polifônico as personagens falam a partir de diferentes matrizes ideológicas e culturais.",
        "3. Compreender que o dialogismo bakhtiniano afirma que todo enunciado responde a enunciados anteriores e antecipa respostas futuras.",
        "4. Reconhecer a relevância desse conceito para a literatura moderna e para a análise do discurso social."
      ],
      coreConcept: "Polifonia é a orquestração de vozes e consciências autônomas em interação dialógica no tecido literário.",
      trapWarning: "Polifonia não significa apenas 'ter muitos personagens falando', mas sim a existência de consciências ideológicas independentes da voz autoral."
    },
    commonTraps: [
      "Achar que polifonia é mero recurso sonoro (como instrumentos musicais tocando juntos) sem dimensão ideológica.",
      "Acreditar que o autor sempre precisa dar um veredito moral final condenando ou absolvendo as personagens."
    ],
    tags: ["Linguagens", "Literatura", "Polifonia", "Bakhtin", "Dialogismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-005",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "Metalinguagem e Metapoética na Tradição Brasileira",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Catar feijão se limita com escrever:\njoga-se os grãos na água do alguidar\ne as palavras na folha de papel;\ne depois, joga-se fora o que boiar.\nCerto, toda palavra vai boiar\nno papel, água congelada, por chumbo seu verbo:\npois para catar esse feijão, soprar nele,\ne jogar fora o leve e palha, palha e eco.\n\nMELÃO, João Cabral de Melo Neto. A Educação pela Pedra. Rio de Janeiro: Alfaguara, 2008.",
      source: "MELO NETO, J. C. A Educação pela Pedra. Alfaguara, 2008."
    },
    prompt: "No poema de João Cabral de Melo Neto, o procedimento metapoético opera pela",
    options: [
      {
        id: "a",
        text: "exaltação da inspiração romântica mística e irracional do poeta durante a criação.",
        isCorrect: false,
        distractorRationale: "João Cabral é o expoente da poesia racional e artesanal, antítese absoluta da inspiração irracional."
      },
      {
        id: "b",
        text: "analogia entre o ato cotidiano de selecionar grãos de feijão e o rigoroso trabalho artesanal de depuração e corte das palavras no poema.",
        isCorrect: true,
        distractorRationale: "Correto: A metapoesia cabralina reflete sobre o próprio fazer poético (função metalinguística). Ao comparar catar feijão e escrever, o eu poético dessacraliza o ato criativo e define a escrita como um trabalho manual rigoroso de seleção, corte e eliminação dos excessos e lugares-comuns ('jogar fora o leve e palha, palha e eco')."
      },
      {
        id: "c",
        text: "defesa do automatismo verbal e da escrita espontânea desprovida de revisão.",
        isCorrect: false,
        distractorRationale: "O poema defende exatamente o contrário: a vigilância crítica permanente e o descarte dos excessos."
      },
      {
        id: "d",
        text: "celebração da musicalidade sentimentalista por meio de rimas ricas e floreios barrocos.",
        isCorrect: false,
        distractorRationale: "Cabral rejeita expressamente os floreios sonoros desnecessários ('jogar fora palha e eco')."
      },
      {
        id: "e",
        text: "descrição neutra de uma receita culinária tradicional do Nordeste brasileiro.",
        isCorrect: false,
        distractorRationale: "Leitura superficial e literal que ignora a metáfora da criação poética."
      }
    ],
    detailedExplanation: {
      summary: "A metalinguagem no poema de João Cabral compara o ofício de escrever à catação de feijão: um trabalho braçal de seleção, depuração e corte do supérfluo.",
      stepByStep: [
        "1. Identificar o tema do poema: o processo de escrita e composição literária.",
        "2. Reconhecer a função metalinguística: o código poético falando do próprio código.",
        "3. Analisar a metáfora central: grãos pesados = palavras necessárias e substantivas; palha e eco = ornamentos supérfluos que devem ser eliminados.",
        "4. Associar à poética construtivista e arquitetônica característica de João Cabral de Melo Neto."
      ],
      coreConcept: "A metapoética é o poema voltado criticamente sobre sua própria oficina de criação e sobre os limites da linguagem.",
      trapWarning: "Cuidado para não ler poemas metalinguísticos em seu sentido denotativo elementar (como se fossem simples textos sobre comida ou afazeres domésticos)."
    },
    commonTraps: [
      "Interpretar o poema de forma literal como crônica sobre culinária.",
      "Atribuir romantismo e sentimentalismo à poética contida e depurada de João Cabral."
    ],
    tags: ["Linguagens", "Literatura", "Metapoética", "João Cabral de Melo Neto", "Função Metalinguística"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-006",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "Métrica Poética Tradicional: Redondilhas e Decassílabos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Amor é fogo que arde sem se ver;\nÉ ferida que dói e não se sente;\nÉ um contentamento descontente;\nÉ dor que desatina sem doer.\n\nCAMÕES, Luís de. Rimas. Lisboa, 1595.",
      source: "CAMÕES, L. Lírica Completa. Lisboa: Imprensa Nacional, 2018."
    },
    prompt: "Na escansão poética clássica dos versos acima, a estrutura métrica adotada por Camões classifica-se como",
    options: [
      {
        id: "a",
        text: "redondilha menor (versos de cinco sílabas poéticas).",
        isCorrect: false,
        distractorRationale: "A redondilha menor possui 5 sílabas métricas, própria do verso popular medieval."
      },
      {
        id: "b",
        text: "redondilha maior (versos de sete sílabas poéticas).",
        isCorrect: false,
        distractorRationale: "A redondilha maior possui 7 sílabas métricas (heptassílabo), comum no repente e na trova."
      },
      {
        id: "c",
        text: "decassílabo (versos de dez sílabas poéticas, introduzidos na medida nova renascentista).",
        isCorrect: true,
        distractorRationale: "Correto: Escandindo o primeiro verso: A-mor / é / fo- / go / que ar- / de / sem / se / ver (10 sílabas poéticas até a última tônica 'ver'). No Classicismo do Renascimento (século XVI), Sá de Miranda e Camões consagraram o decassílabo heroico/itálico (a 'medida nova'), que conferiu solenidade e equilíbrio arquitetônico ao soneto camoniano."
      },
      {
        id: "d",
        text: "verso livre e branco (desprovido de metro e de rimas regulares).",
        isCorrect: false,
        distractorRationale: "O soneto camoniano possui métrica rigorosa decassilábica e esquema de rimas cruzadas (ABBA)."
      },
      {
        id: "e",
        text: "alexandrino (versos de doze sílabas poéticas com cesura central).",
        isCorrect: false,
        distractorRationale: "O dodecassílabo (alexandrino) possui 12 sílabas métricas, típico do Parnasianismo francês."
      }
    ],
    detailedExplanation: {
      summary: "O poema é composto em versos decassílabos (10 sílabas poéticas contadas até a última sílaba tônica), expoente da medida nova renascentista.",
      stepByStep: [
        "1. Realizar a contagem das sílabas métricas (escansão) respeitando as elisões vocálicas:",
        "2. 'A-mor (2) / é (3) / fo- (4) / go que ar- (elisão em 'go-que-ar' -> 5) / de (6) / sem (7) / se (8) / ver (9 e 10)'.",
        "3. Como 'ver' é oxítona, conta-se até ela: 10 sílabas poéticas exatas.",
        "4. Reconhecer o verso decassílabo como a base formal do soneto clássico renascentista."
      ],
      coreConcept: "A contagem de sílabas poéticas encerra-se sempre na última sílaba tônica do verso (oxítonas recebem contagem até o final).",
      trapWarning: "Lembre-se da elisão: quando uma palavra termina em vogal e a seguinte começa por vogal, elas fundem-se em uma única sílaba poética."
    },
    commonTraps: [
      "Contar sílabas gramaticais em vez de sílabas poéticas (fonéticas).",
      "Não aplicar as elisões vocálicas entre palavras contíguas."
    ],
    tags: ["Linguagens", "Literatura", "Escansão", "Decassílabo", "Camões", "Classicismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-007",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Catarse e a Tragédia Aristotélica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A tragédia é, pois, a imitação de uma ação de caráter elevado, completa e de certa extensão, em linguagem ornamentada e que, por meio do terror e da piedade, realiza a purificação dessas mesmas emoções.\n\nARISTÓTELES. Poética. Tradução de Eudoro de Sousa. Lisboa: Imprensa Nacional, 2003.",
      source: "ARISTÓTELES. Poética. Imprensa Nacional, 2003."
    },
    prompt: "Na teoria dramática aristotélica, o efeito estético e psicológico denominado catarse ('kátharsis') consiste",
    options: [
      {
        id: "a",
        text: "no riso descontraído provocado pelos equívocos cotidianos dos vilões da comédia.",
        isCorrect: false,
        distractorRationale: "O riso é o efeito da comédia, enquanto a catarse trágica apoia-se no terror e na piedade."
      },
      {
        id: "b",
        text: "na purificação ou alívio emocional do espectador, gerado pela identificação e comoção diante da dor e do destino do herói trágico.",
        isCorrect: true,
        distractorRationale: "Correto: A catarse trágica é o processo pelo qual o público, ao vivenciar vicariamente o sofrimento do protagonista trágico e o peso implacável do destino (moira/hýbris), experimenta simultaneamente terror (medo de que o mesmo lhe ocorra) e compaixão (piedade pelo sofrimento do semelhante), atingindo uma purificação emocional libertadora."
      },
      {
        id: "c",
        text: "no distanciamento racional e pedagógico que impede qualquer envolvimento empático da plateia com a cena.",
        isCorrect: false,
        distractorRationale: "Essa é a proposta do teatro épico de Bertolt Brecht (efeito de estranhamento/Verfremdungseffekt), antítese da catarse aristotélica."
      },
      {
        id: "d",
        text: "na glorificação dos tiranos por meio de rituais sagrados de adivinhação oracular.",
        isCorrect: false,
        distractorRationale: "A tragédia questiona a fragilidade do poder e a queda de nobres, não glorifica a tirania."
      },
      {
        id: "e",
        text: "na resolução didática do conflito mediante a aplicação de punições criminais pelo Estado.",
        isCorrect: false,
        distractorRationale: "A catarse opera no plano das emoções humanas universais e da estética, não no código penal."
      }
    ],
    detailedExplanation: {
      summary: "A catarse é a purificação dos sentimentos de terror (fóvos) e piedade (éleos) gerada pela representação dramática do destino trágico.",
      stepByStep: [
        "1. Analisar a definição da 'Poética': a tragédia opera por meio do terror e da piedade.",
        "2. Terror: reconhecimento da vulnerabilidade humana perante forças maiores (destino, deuses, leis cósmicas).",
        "3. Piedade: sentimento de empatia com a punição desmedida sofrida pelo herói que cometeu uma falha (hamartia).",
        "4. A síntese é a purgação ou harmonização emocional dos espectadores (catarse)."
      ],
      coreConcept: "Catarse é a purificação das paixões provocada pela contemplação vicária do sofrimento trágico na arte dramática.",
      trapWarning: "Cuidado: para Bertolt Brecht, a catarse aristotélica devia ser evitada porque anestesiava a consciência política do operariado; já para Aristóteles, ela é o clímax da experiência estética."
    },
    commonTraps: [
      "Associar catarse a riso e humor (que pertencem à comédia).",
      "Confundir catarse com o distanciamento crítico brechtiano."
    ],
    tags: ["Linguagens", "Literatura", "Catarse", "Tragédia", "Aristóteles"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-008",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura",
    subtopic: "A Paródia versus a Paráfrase na Intertextualidade",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Texto 1 (Gonçalves Dias, 1843):\nMinha terra tem palmeiras,\nOnde canta o Sabiá;\nAs aves, que aqui gorjeiam,\nNão gorjeiam como lá.\n\nTexto 2 (Oswald de Andrade, 1925):\nMinha terra tem palmares\nonde gorjeia o mar\nos passarinhos daqui\nnão cantam como os de lá.",
      source: "ANDRADE, O. Poesias Reunidas. São Paulo: Companhia das Letras, 2017."
    },
    prompt: "Em relação ao poema romântico de Gonçalves Dias, o procedimento intertextual operado por Oswald de Andrade constitui uma",
    options: [
      {
        id: "a",
        text: "paráfrase reverente, que reafirma o ufanismo nacionalista do Romantismo oitocentista com vocabulário refinado.",
        isCorrect: false,
        distractorRationale: "Oswald desestabiliza a visão romântica; não se trata de paráfrase reverente nem ufanista."
      },
      {
        id: "b",
        text: "paródia transgressora, que subverte o idealismo ingênuo da paisagem nacional ao introduzir o quilombo de 'Palmares' e a ironia modernista.",
        isCorrect: true,
        distractorRationale: "Correto: A paródia é uma intertextualidade de viés crítico, lúdico e contestador. Oswald troca 'palmeiras' por 'palmares' (evocando a memória da resistência negra contra a escravidão), trocadilha com a sintaxe e ironiza a exaltação ufanista da natureza intocada do cânone romântico."
      },
      {
        id: "c",
        text: "tradução literal de versos simbolistas franceses sem referência à cultura brasileira.",
        isCorrect: false,
        distractorRationale: "Ambos os textos são fundamentais e nativos da história literária brasileira."
      },
      {
        id: "d",
        text: "epígrafe neutra destinada a situar cronologicamente o manifesto modernista.",
        isCorrect: false,
        distractorRationale: "Trata-se de um poema autônomo paródico, e não de uma epígrafe."
      },
      {
        id: "e",
        text: "paródia conservadora que lamenta o fim dos ideais monárquicos imperiais.",
        isCorrect: false,
        distractorRationale: "O Modernismo de Oswald é revolucionário e vanguardista, jamais monárquico conservador."
      }
    ],
    detailedExplanation: {
      summary: "Oswald de Andrade realiza uma paródia da 'Canção do Exílio': ao trocar 'palmeiras' por 'palmares', tensiona criticamente o ufanismo romântico com a memória histórica das lutas sociais.",
      stepByStep: [
        "1. Diferenciar paráfrase (intertextualidade que reafirma o sentido original com outras palavras) de paródia (intertextualidade que inverte, satiriza ou problematiza o sentido original).",
        "2. Identificar a substituição de 'palmeiras' (elemento idílico da flora romântica) por 'palmares' (símbolo máximo da resistência quilombola afro-brasileira).",
        "3. Reconhecer o projeto modernista de 1922 de desconstruir o nacionalismo bacharelesco e acadêmico.",
        "4. Concluir que se trata de uma paródia modernista."
      ],
      coreConcept: "A paródia recria o texto-fonte sob um viés crítico, irônico ou subversivo, deslocando os significados originais.",
      trapWarning: "A paráfrase confirma o discurso fonte ('diz o mesmo'); a paródia contesta e ressignifica o discurso fonte ('diz contra')."
    },
    commonTraps: [
      "Confundir paródia (contestatória) com paráfrase (reiterativa).",
      "Não notar a mudança crucial de 'palmeiras' para 'palmares'."
    ],
    tags: ["Linguagens", "Literatura", "Paródia", "Intertextualidade", "Modernismo", "Oswald de Andrade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-009",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "O Discurso Indireto Livre na Prosa Moderna",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Fabiano ia satisfeito. Sim senhor, arrumara-se. Chegara em terra alheia com a cachorra Baleia e os meninos na caatinga seca, mas agora era vaqueiro. Quem diria? Um cabra daqueles governando as reses do patrão. Podia até comprar um par de sapatos de couro para a festa de Natal. Fabiano era um homem, sim senhor.",
      source: "RAMOS, Graciliano. Vidas Secas. Rio de Janeiro: Record, 2019."
    },
    prompt: "O recurso expressivo predominante no excerto acima é o discurso indireto livre, reconhecível pela",
    options: [
      {
        id: "a",
        text: "separação nítida entre a voz do narrador e a dos personagens por meio de travessões e verbos de elocução explícitos.",
        isCorrect: false,
        distractorRationale: "Essa é a estrutura do discurso direto tradicional."
      },
      {
        id: "b",
        text: "fusão estilística entre a voz do narrador em terceira pessoa e o fluxo de pensamentos e sentimentos íntimos da personagem, sem marcas formais de transição.",
        isCorrect: true,
        distractorRationale: "Correto: O discurso indireto livre funde a voz do narrador e a consciência da personagem em uma mesma malha enunciativa. Expressões e interjeições típicas da oralidade e do pensamento de Fabiano ('Sim senhor', 'Quem diria?', 'Fabiano era um homem, sim senhor') irrompem diretamente na prosa em 3ª pessoa sem o auxílio de aspas, travessões ou verbos dicendi (disse, pensou)."
      },
      {
        id: "c",
        text: "reprodução estrita de dados documentais obtidos em entrevistas jornalísticas de campo.",
        isCorrect: false,
        distractorRationale: "Trata-se de ficção psicológica e estética, não de transcrição etnográfica ou jornalística."
      },
      {
        id: "d",
        text: "substituição da narrativa ficcional por um diálogo teatral pontuado por didascálias.",
        isCorrect: false,
        distractorRationale: "O texto é um romance em prosa contínua, não um roteiro teatral com indicações cênicas."
      },
      {
        id: "e",
        text: "completa impessoalidade da narrativa, que ignora a vida psicológica e anímica das personagens.",
        isCorrect: false,
        distractorRationale: "O discurso indireto livre mergulha justamente na intimidade psicológica do sertanejo."
      }
    ],
    detailedExplanation: {
      summary: "O discurso indireto livre amalgama a terceira pessoa do narrador com a interioridade e os cacoetes de linguagem da personagem sem balizas pontuais.",
      stepByStep: [
        "1. Identificar as modalidades de discurso: Direto (com travessão/aspas), Indireto (subordinada com 'que/se') e Indireto Livre (fusão das vozes).",
        "2. Notar que o texto está narrado em 3ª pessoa ('Fabiano ia satisfeito').",
        "3. Perceber que frases como 'Sim senhor, arrumara-se' e 'Quem diria?' expressam os pensamentos íntimos de Fabiano.",
        "4. Como não há marcas de pontuação divisórias, constata-se o discurso indireto livre, típico de Graciliano Ramos e Clarice Lispector."
      ],
      coreConcept: "No discurso indireto livre, os pensamentos da personagem infiltram-se imperceptivelmente no relato em terceira pessoa do narrador.",
      trapWarning: "Procure marcas de oralidade, interrogações e exclamações dentro de um parágrafo que não possui travessões nem aspas."
    },
    commonTraps: [
      "Confundir discurso indireto livre com discurso direto simples.",
      "Achar que narrador em 3ª pessoa nunca pode expressar emoções da personagem sem verbos declarativos."
    ],
    tags: ["Linguagens", "Literatura", "Discurso Indireto Livre", "Graciliano Ramos", "Vidas Secas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-010",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Epifania na Prosa Psicológica de Clarice Lispector",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ana olhou o cego mascando chicles. E alguma coisa intranquila estava acontecendo. Então o bonde deu uma arrancada súbita, jogando-a para trás. O cego continuava mascando chicles na penumbra da tarde. As compras de Ana caíram no chão e o saco de ovos quebrou-se. Mas foi o olhar do cego, um cego mascando chicles, que de repente rasgou a rede protetora do seu mundo doméstico arrumado, revelando a matéria viva e nauseante da existência.",
      source: "LISPECTOR, Clarice. Amor. In: Laços de Família. Rio de Janeiro: Rocco, 2019 (adaptado)."
    },
    prompt: "Na ficção psicológica clariceana, o instante vivenciado pela protagonista constitui uma epifania, caracterizada por",
    options: [
      {
        id: "a",
        text: "um milagre sobrenatural teológico que resolve magicamente todos os dilemas materiais da personagem.",
        isCorrect: false,
        distractorRationale: "A epifania literária não é um milagre religioso, mas uma revelação existencial laica diante do ordinário."
      },
      {
        id: "b",
        text: "uma revelação existencial súbita e desestabilizadora, desencadeada por um evento cotidiano fortuito que rompe a casca das convenções sociais.",
        isCorrect: true,
        distractorRationale: "Correto: Na obra de Clarice Lispector (herdeira de James Joyce), a epifania é um choque perceptivo: um detalhe corriqueiro e insignificante (o cego mascando chicles, a quebra de um ovo) detona uma súbita iluminação interna, desmoronando a segurança artificial da rotina burguesa e confrontando a personagem com a nudez angustiante do existir."
      },
      {
        id: "c",
        text: "um diagnóstico psiquiátrico de amnésia traumática que impede a personagem de reconhecer seus familiares.",
        isCorrect: false,
        distractorRationale: "Trata-se de uma experiência filosófico-existencial, não de uma patologia médica neurológica."
      },
      {
        id: "d",
        text: "uma denúncia panfletária sobre a precariedade dos meios de transporte coletivo urbano.",
        isCorrect: false,
        distractorRationale: "O bonde é apenas o cenário físico; o foco está no abalo interior e metafísico de Ana."
      },
      {
        id: "e",
        text: "a reconciliação definitiva e apaziguadora da protagonista com as regras do patriarcado doméstico.",
        isCorrect: false,
        distractorRationale: "A epifania gera vertigem, náusea e abalo, nunca apaziguamento conformista."
      }
    ],
    detailedExplanation: {
      summary: "A epifania clariceana é uma revelação súbita disparada pelo contato com um fato banal que quebra o verniz protetor do cotidiano, expondo o absurdo da existência.",
      stepByStep: [
        "1. Contextualizar o conto 'Amor' de Clarice Lispector: Ana vive uma vida doméstica exemplar e protegida.",
        "2. O encontro fortuito com o cego mascando chiclete atua como gatilho sensorial e psicológico.",
        "3. A quebra dos ovos simboliza a quebra da carcaça do cotidiano previsível.",
        "4. A epifania surge como essa iluminação violenta sobre o sentido e a matéria da vida."
      ],
      coreConcept: "A epifania modernista é uma iluminação existencial súbita provocada por um elemento comum do cotidiano.",
      trapWarning: "Não confunda a epifania literária (experiência existencial e estética secular) com visão mística ou aparição divina religiosa."
    },
    commonTraps: [
      "Interpretar a epifania em sentido religioso dogmático.",
      "Reduzir o conto a uma crônica sobre acidentes de trânsito."
    ],
    tags: ["Linguagens", "Literatura", "Epifania", "Clarice Lispector", "Conto Moderno"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-011",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Estética do Fragmento e o Poema-Pílula Modernista",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "pronominais\n\nDê-me um cigarro\nDiz a gramática\nDo professor e do aluno\nE do mulato sabido\nMas o bom negro e o bom branco\nDa Nação Brasileira\nDizem todos os dias\nDeixa disso camarada\nMe dá um cigarro.\n\nANDRADE, Oswald de. Pau-Brasil. São Paulo: Globo, 2003.",
      source: "ANDRADE, O. Pau-Brasil. Globo, 2003."
    },
    prompt: "No poema modernista, a reflexão linguística e ideológica de Oswald de Andrade constrói-se mediante",
    options: [
      {
        id: "a",
        text: "a adesão cega às regras de colocação pronominal lusitanas para preservar a pureza vernácula.",
        isCorrect: false,
        distractorRationale: "O poema rejeita a subserviência à norma lusitana artificial."
      },
      {
        id: "b",
        text: "o confronto entre a rigidez prescritiva da gramática acadêmica importada e a legitimidade expressiva do português falado pelo povo brasileiro.",
        isCorrect: true,
        distractorRationale: "Correto: O poema opera uma crítica direta ao bacharelismo pedagógico. Ao contrastar o 'Dê-me um cigarro' (norma padrão prescritiva que veta a próclise no início de frase) com o 'Me dá um cigarro' (uso corrente de todas as classes brasileiras), Oswald defende a naturalidade, a oralidade e a soberania do 'português do Brasil' em sua manifestação viva."
      },
      {
        id: "c",
        text: "a apologia ao consumo de tabaco como símbolo de sofisticação intelectual aristocrática.",
        isCorrect: false,
        distractorRationale: "O cigarro é apenas o pretexto comunicativo para abordar a colocação pronominal."
      },
      {
        id: "d",
        text: "a defesa da segregação linguística entre as diferentes etnias que compõem o país.",
        isCorrect: false,
        distractorRationale: "Oswald congrega 'o bom negro e o bom branco da Nação Brasileira' em uma unidade cultural compartilhada."
      },
      {
        id: "e",
        text: "o emprego exclusivo da métrica parnasiana e do vocabulário arcaico lusitano.",
        isCorrect: false,
        distractorRationale: "O texto é um poema modernista em verso livre e linguagem coloquial despojada."
      }
    ],
    detailedExplanation: {
      summary: "Em 'Pronominais', Oswald de Andrade valoriza o português coloquial do Brasil (próclise em início de frase) contra a camisa de força da gramática prescritiva colonizadora.",
      stepByStep: [
        "1. Identificar a regra gramatical citada: a proibição tradicional de iniciar frases com pronome oblíquo átono ('Me dá').",
        "2. Identificar a oposição sociolinguística: a 'gramática do professor' (douta, artificial) versus o falar cotidiano da nação.",
        "3. Reconhecer o manifesto antropofágico e nacionalista de Oswald: abrasileirar a língua literária.",
        "4. Concluir que o poema legitima a identidade linguística nacional contra o purismo de gabinete."
      ],
      coreConcept: "A vanguarda modernista brasileira propôs a emancipação da linguagem literária através da valorização da fala cotidiana do povo.",
      trapWarning: "Cuidado com questões que tratam variantes coloquiais como 'erros': no ENEM, a diversidade linguística e seu uso expressivo na literatura são sempre legítimos."
    },
    commonTraps: [
      "Achar que o poema comete um erro gramatical involuntário.",
      "Desconsiderar o teor político-cultural da crítica ao colonizador linguístico."
    ],
    tags: ["Linguagens", "Literatura", "Modernismo", "Oswald de Andrade", "Variação Linguística"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-012",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Ironia Romântica e o Narrador Póstumo Machadiano",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Algum tempo hesitei se devia abrir estas memórias pelo princípio ou pelo fim, isto é, se poria em primeiro lugar o meu nascimento ou a minha morte. Suposto o uso vulgar seja começar pelo nascimento, duas considerações me levaram a adotar diferente método: a primeira é que eu não sou propriamente um autor defunto, mas um defunto autor, para quem a campa foi outro berço; a segunda é que o escrito ficaria assim mais galante e mais novo.\n\nASSIS, Machado de. Memórias Póstumas de Brás Cubas. Rio de Janeiro: Nova Aguilar, 2008.",
      source: "ASSIS, M. Memórias Póstumas de Brás Cubas. Nova Aguilar, 2008."
    },
    prompt: "A célebre distinção formulada por Brás Cubas entre 'autor defunto' e 'defunto autor' fundamenta uma postura enunciativa que confere ao narrador",
    options: [
      {
        id: "a",
        text: "o dever moral de mentir para preservar a honra e o prestígio de sua família abastada.",
        isCorrect: false,
        distractorRationale: "Estando morto, Brás Cubas não precisa bajular ninguém nem preservar aparências sociais."
      },
      {
        id: "b",
        text: "a total liberdade crítica e desinibição moral diante dos vivos, pois, desvinculado dos julgamentos terrenos, pode desmascarar a hipocrisia de sua classe social.",
        isCorrect: true,
        distractorRationale: "Correto: O 'defunto autor' escreve da sepultura para a vida. Como já morreu, Brás Cubas está imune às represálias, à opinião pública e aos pactos de hipocrisia da sociedade burguesa e escravocrata do século XIX. Essa condição fantástica permite uma ironia corrosiva, na qual ele disseca sem pudores sua mediocridade pessoal, seu parasitismo de classe e a mesquinhez alheia."
      },
      {
        id: "c",
        text: "a submissão aos dogmas espiritualistas da teologia medieval sobre as penas do purgatório.",
        isCorrect: false,
        distractorRationale: "O romance machadiano é cético e agnóstico, sem qualquer compromisso dogmático religioso."
      },
      {
        id: "d",
        text: "a incapacidade congênita de recordar acontecimentos de sua trajetória na Terra.",
        isCorrect: false,
        distractorRationale: "Brás Cubas recorda com riqueza de detalhes irônicos toda a sua existência terrena."
      },
      {
        id: "e",
        text: "a obrigação jurídica de prestar contas de suas dívidas bancárias aos tribunais do Império.",
        isCorrect: false,
        distractorRationale: "A morte extingue as obrigações forenses terrenas, como o próprio narrador ironiza."
      }
    ],
    detailedExplanation: {
      summary: "O estatuto de 'defunto autor' liberta Brás Cubas do medo da opinião alheia, permitindo a Machado de Assis exercer uma ironia implacável sobre a elite senhorial brasileira.",
      stepByStep: [
        "1. Analisar o chiste verbal: 'autor defunto' (alguém que escreveu em vida e faleceu) vs. 'defunto autor' (alguém que já morreu e passa a escrever do túmulo).",
        "2. Identificar a função desse ponto de vista insólito: a perspectiva póstuma concede imunidade contra o julgamento dos vivos.",
        "3. Associar à crítica social machadiana: da sepultura, revelam-se a hipocrisia, a volubilidade e o egoísmo das classes dominantes do Segundo Reinado.",
        "4. Concluir que a condição póstuma é o sustentáculo formal da liberdade crítica do narrador."
      ],
      coreConcept: "A condição de defunto autor permite ao narrador machadiano desmontar com ironia soberana os véus ideológicos da sociedade de seu tempo.",
      trapWarning: "Brás Cubas não é um herói ou modelo virtuoso; sua genialidade reside em expor abertamente seu próprio cinismo e vileza."
    },
    commonTraps: [
      "Interpretar a obra como relato espírita ou sobrenatural sério.",
      "Inverter o sentido de 'autor defunto' e 'defunto autor'."
    ],
    tags: ["Linguagens", "Literatura", "Machado de Assis", "Memórias Póstumas", "Ironia", "Realismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-013",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Poética do Verso Livre e do Ritmo Interior no Modernismo",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No meio do caminho tinha uma pedra\ntinha uma pedra no meio do caminho\ntinha uma pedra\nno meio do caminho tinha uma pedra.\n\nNunca me esquecerei desse acontecimento\nna vida de minhas retinas tão fatigadas.\nNunca me esquecerei que no meio do caminho\ntinha uma pedra\ntinha uma pedra no meio do caminho\nno meio do caminho tinha uma pedra.\n\nANDRADE, Carlos Drummond de. Alguma Poesia. São Paulo: Companhia das Letras, 2013.",
      source: "ANDRADE, C. D. Alguma Poesia. Companhia das Letras, 2013."
    },
    prompt: "Publicado em 1928, o célebre poema de Carlos Drummond de Andrade escandalizou a crítica acadêmica conservadora porque",
    options: [
      {
        id: "a",
        text: "adotava a forma rígida do soneto decassílabo com rimas ricas e raras.",
        isCorrect: false,
        distractorRationale: "O poema rompe completamente com as formas fixas como o soneto."
      },
      {
        id: "b",
        text: "recorria à repetição obsessiva, ao verso livre e à oralidade coloquial ('tinha uma pedra' em vez de 'havia'), desafiando as convenções da alta poesia parnasiana.",
        isCorrect: true,
        distractorRationale: "Correto: Drummond rompe duplamente com o cânone tradicional: 1) Gramaticalmente, usa o verbo 'ter' impessoal com sentido existencial de 'haver', traço legítimo da oralidade brasileira repudiado pelos puristas; 2) Estruturalmente, abdica de métrica e rimas convencionais, criando um ritmo monótono, circular e obsessivo baseado em repetições que metaforizam os obstáculos existenciais inescapáveis da condição humana."
      },
      {
        id: "c",
        text: "defendia explicitamente doutrinas políticas autoritárias em linguagem rebuscada.",
        isCorrect: false,
        distractorRationale: "O poema possui teor metafísico e existencial intimista, sem panfletarismo autoritário."
      },
      {
        id: "d",
        text: "utilizava termos arcaicos do latim eclesiástico que tornavam o texto incompreensível.",
        isCorrect: false,
        distractorRationale: "O vocabulário drummondiano é despojado, direto e moderno."
      },
      {
        id: "e",
        text: "consistia em uma tradução literal anônima de cantigas trovadorescas de amigo.",
        isCorrect: false,
        distractorRationale: "Trata-se de uma das obras fundadoras e mais originais do Modernismo brasileiro de 1930."
      }
    ],
    detailedExplanation: {
      summary: "Drummond causou polêmica ao empregar a repetição cíclica, o verso livre e a marca coloquial 'tinha uma pedra' para condensar a angústia existencial humana.",
      stepByStep: [
        "1. Analisar o escândalo histórico gerado pelo poema em 1928: os jornais da época chamaram Drummond de 'louco' e 'destruidor da língua'.",
        "2. Identificar a transgressão gramatical: uso de 'ter' no lugar de 'haver'.",
        "3. Identificar a inovação formal: reiteração anafórica e circularidade do verso livre.",
        "4. Interpretar a simbologia da 'pedra': o obstáculo inevitável, o tédio, a finitude e os nós da vida."
      ],
      coreConcept: "A revolução modernista drummondiana reside na capacidade de transformar a linguagem mais simples e o ritmo reiterativo em alta densidade filosófica.",
      trapWarning: "A repetição no poema de Drummond não é falta de vocabulário, mas um procedimento estético deliberado para criar sensação de bloqueio mental e existencial."
    },
    commonTraps: [
      "Achar que o poema é ingênuo ou mal escrito devido às repetições.",
      "Ignorar o papel da variante popular ('ter' por 'haver') na contestação do academicismo."
    ],
    tags: ["Linguagens", "Literatura", "Carlos Drummond de Andrade", "Modernismo", "Verso Livre"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-014",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Alegoria na Construção Narrativa",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em sua essência semiótica, a alegoria (do grego allos, outro, e agoreuein, falar publicamente) é uma figura de pensamento e uma estrutura composicional que consiste em expressar um sentido abstrato complexo por meio de uma cadeia contínua de imagens e metáforas concretas articuladas. Ao ler um texto alegórico, o leitor é convidado a decodificar uma segunda camada de sentido — política, moral ou filosófica — que corre paralelamente à história literal visível na superfície.",
      source: "HANSEN, J. A. Alegoria: Construção e Interpretação da Metáfora Contínua. São Paulo: Hedra, 2006."
    },
    prompt: "Um exemplo canônico de construção narrativa estritamente alegórica na literatura ocidental é",
    options: [
      {
        id: "a",
        text: "o romance naturalista de Aluísio Azevedo, focado na descrição fisiológica do sangue e do clima tropical.",
        isCorrect: false,
        distractorRationale: "O Naturalismo opera pelo determinismo biológico e científico direto, e não por alegoria contínua."
      },
      {
        id: "b",
        text: "a fábula dos animais em 'A Revolução dos Bichos', em que a insurreição dos porcos em uma granja concretiza a crítica sistemática à degeneração autoritária da Revolução Russa.",
        isCorrect: true,
        distractorRationale: "Correto: Na obra de George Orwell, cada elemento da granja possui uma correspondência simbólica estrita em outro domínio histórico: os animais representam as classes trabalhadoras e líderes políticos (Major = Lênin/Marx; Napoleão = Stálin; Bola de Neve = Trotsky), constituindo uma alegoria política contínua e perfeita do totalitarismo."
      },
      {
        id: "c",
        text: "a poesia concreta dos irmãos Campos, que rejeita representações figuradas em favor da visualidade geométrica.",
        isCorrect: false,
        distractorRationale: "A poesia concreta nega a alegoria tradicional em prol da autoreferencialidade material do signo."
      },
      {
        id: "d",
        text: "um livro de crônicas de costumes que registra horários e roteiros de bondes da cidade com precisão cartográfica.",
        isCorrect: false,
        distractorRationale: "A crônica documental atém-se ao registro empírico denotativo e não desenvolve dupla camada alegórica."
      },
      {
        id: "e",
        text: "um manual de instruções de aparelhos mecânicos redigido em prosa utilitária.",
        isCorrect: false,
        distractorRationale: "Textos técnicos e instrucionais são puramente denotativos e não literários."
      }
    ],
    detailedExplanation: {
      summary: "A alegoria é uma metáfora continuada e sistêmica: em 'A Revolução dos Bichos', a história da fazenda corporifica a tragédia do totalitarismo soviético.",
      stepByStep: [
        "1. Definir alegoria: representação de ideias abstratas por meio de figuras e ações concretas contínuas.",
        "2. Identificar os dois níveis de leitura indispensáveis: o plano literal (a história na superfície) e o plano alegórico (a mensagem política/moral subjacente).",
        "3. Em 'A Revolução dos Bichos', os animais em revolta simbolizam o processo revolucionário e sua corrupção pelo poder autocrático.",
        "4. Concluir que a obra é o exemplo paradigmático de alegoria moderna."
      ],
      coreConcept: "A alegoria articula um sistema coerente de correspondências entre um plano empírico visível e um plano conceitual abstrato.",
      trapWarning: "Uma simples metáfora isolada não é alegoria; a alegoria exige uma narrativa ou conjunto de figuras que sustenta a analogia ao longo de todo o texto."
    },
    commonTraps: [
      "Confundir metáfora pontual com narrativa alegórica.",
      "Limitar a leitura de uma alegoria à sua camada infantil ou literal."
    ],
    tags: ["Linguagens", "Literatura", "Alegoria", "Teoria Literária", "George Orwell"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-015",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura",
    subtopic: "A 'Escrevivência' de Conceição Evaristo e a Autoria Negra",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A nossa escrevivência não é para adormecer os da casa-grande, e sim para acordá-los de seus sonos injustos. A escrita de nós, mulheres negras, nasce da nossa experiência corporificada, das nossas memórias ancestrais e da dor e força cotidianas da favela e da rua.\n\nEVARISTO, Conceição. Becos da Memória. Rio de Janeiro: Pallas, 2017.",
      source: "EVARISTO, C. Becos da Memória. Pallas, 2017."
    },
    prompt: "O conceito teórico e estético de 'escrevivência', cunhado por Conceição Evaristo, ressignifica a literatura contemporânea ao",
    options: [
      {
        id: "a",
        text: "separar rigorosamente a produção poética da trajetória biográfica e da identidade comunitária das autoras negras.",
        isCorrect: false,
        distractorRationale: "A escrevivência funda-se justamente na imbricação profunda entre biografia, corpo e comunidade."
      },
      {
        id: "b",
        text: "articular escrita e vivência em um gesto de testemunho coletivo, dando voz ativa à memória e à resistência das mulheres afrodescendentes.",
        isCorrect: true,
        distractorRationale: "Correto: A escrevivência (aglutinação de 'escrever' + 'viver' + 'ver') postula que a mulher negra, historicamente relegada à condição de objeto narrado pela perspectiva branca da 'casa-grande', assume a condição de sujeito de sua própria narrativa. A literatura torna-se um instrumento político e memorial de combate ao silenciamento histórico e de despertar crítico da sociedade."
      },
      {
        id: "c",
        text: "adotar a estética parnasiana eurocêntrica para obter legitimação nos salões aristocráticos.",
        isCorrect: false,
        distractorRationale: "A escrevivência desafia a matriz eurocêntrica e valoriza a ancestralidade afro-brasileira."
      },
      {
        id: "d",
        text: "defender o escapismo romântico e a alienação em relação às desigualdades de classe e raça.",
        isCorrect: false,
        distractorRationale: "O texto combate explicitamente os 'sonos injustos' provocados pelo esquecimento da desigualdade."
      },
      {
        id: "e",
        text: "impor uma narrativa individualista que apaga as solidariedades coletivas da comunidade periférica.",
        isCorrect: false,
        distractorRationale: "A escrevivência é essencialmente coral, comunitária e solidária."
      }
    ],
    detailedExplanation: {
      summary: "A escrevivência funde vivência e criação literária: a mulher negra escreve para registrar sua ancestralidade e acordar criticamente a sociedade dos preconceitos herdados da escravidão.",
      stepByStep: [
        "1. Analisar a etimologia e significado do termo: Escrever + Viver + Ver = Escrevivência.",
        "2. Identificar a função social da escrita no trecho: 'não é para adormecer os da casa-grande, e sim para acordá-los'.",
        "3. Reconhecer a inversão de papéis históricos: quem antes contava histórias para ninar os senhores agora escreve para contestar a opressão.",
        "4. Concluir que a autoria negra afirma sua soberania estética e memorial na cena contemporânea."
      ],
      coreConcept: "A escrevivência transforma a dor, a memória e a história da população negra em potência literária e descolonizadora.",
      trapWarning: "A escrevivência não é mero relato ingênuo ou diário pessoal; é uma teoria estética refinada que problematiza a legitimidade da voz que narra."
    },
    commonTraps: [
      "Reduzir a escrevivência a simples desabafo confessional sem projeto literário.",
      "Ignorar a força da metáfora histórica da 'casa-grande'."
    ],
    tags: ["Linguagens", "Literatura", "Conceição Evaristo", "Escrevivência", "Literatura Negra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-016",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Estética do Mal e a Poesia da Queda em Baudelaire",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Com a publicação de 'As Flores do Mal' em 1857, Charles Baudelaire inaugurou a sensibilidade poética moderna ao romper definitivamente com o ideal romântico de comunhão pura com a natureza e com o belo apolíneo. Na metrópole parisiense em transformação industrial, o poeta encontra a beleza no abjeto, na carniça em decomposição, no lodo das sarjetas e no spleen (o tédio corrosivo e o vazio espiritual da civilização moderna).",
      source: "FRIEDRICH, H. Estrutura da Lírica Moderna. São Paulo: Duas Cidades, 1978."
    },
    prompt: "A modernidade poética baudelairiana reside essencialmente na capacidade de",
    options: [
      {
        id: "a",
        text: "celebrar o progresso tecnológico e o conforto mecânico da civilização burguesa.",
        isCorrect: false,
        distractorRationale: "Baudelaire denuncia a alienação e a mercantilização da alma na sociedade moderna burguesa."
      },
      {
        id: "b",
        text: "resgatar a pureza pastoril do Arcadismo, louvando a vida rústica e campestre.",
        isCorrect: false,
        distractorRationale: "Baudelaire é o poeta por excelência da paisagem urbana, do asfalto e da multidão das grandes cidades."
      },
      {
        id: "c",
        text: "extrair a matéria poética e a beleza estética do degradado, do bizarro e das contradições dilacerantes da vida urbana.",
        isCorrect: true,
        distractorRationale: "Correto: A revolução de Baudelaire (que abriu caminho para o Simbolismo e para as Vanguardas) foi desvincular a beleza da perfeição moral e da harmonia natural clássica. Ao transformar 'flores' (beleza) geradas no 'mal' (decomposição, vício, pecado, spleen e anonimato da metrópole), ele inventou uma estética dissonante e moderna."
      },
      {
        id: "d",
        text: "subordinar o texto lírico aos dogmas catequéticos da Igreja Católica contrarreformista.",
        isCorrect: false,
        distractorRationale: "O livro foi inclusive processado e censurado na França por 'ofensa à moral pública e aos bons costumes'."
      },
      {
        id: "e",
        text: "rejeitar o rigor da forma e do ritmo poético em favor de manifestos em linguagem telegráfica.",
        isCorrect: false,
        distractorRationale: "Baudelaire combinou temas ultramodernos e escandalosos com uma métrica clássica (alexandrinos perfeitos)."
      }
    ],
    detailedExplanation: {
      summary: "Baudelaire funda a lírica moderna ao estetizar a feiura, a decadência moral, o spleen urbano e a carniça, rompendo com a identificação clássica entre belo e bondade.",
      stepByStep: [
        "1. Identificar o marco histórico: 'As Flores do Mal' (1857) como nascedouro da modernidade poética.",
        "2. Compreender a contradição entre 'Flor' (símbolo tradicional de beleza) e 'Mal' (corrupção, sarjeta, decadência).",
        "3. Notar que a cidade grande (Paris moderna) torna-se o palco de angústias metafísicas e sociais.",
        "4. Reconhecer a influência seminal dessa estética em poetas brasileiros como Cruz e Sousa e Augusto dos Anjos."
      ],
      coreConcept: "A lírica moderna em Baudelaire incorpora o grotesco, o dissonante e a melancolia metropolitana como substância poética autêntica.",
      trapWarning: "Cuidado para não achar que arte só fala de coisas 'bonitas' ou 'agradáveis'; a arte moderna encontra força estética justamente na tematização do conflito e da imperfeição."
    },
    commonTraps: [
      "Achar que Baudelaire elogiava o progresso das máquinas.",
      "Confundir a temática moderna com desleixo formal (ele era mestre do verso alexandrino)."
    ],
    tags: ["Linguagens", "Literatura", "Baudelaire", "Lírica Moderna", "Simbolismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-017",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A 'Cientificização' da Ficção no Naturalismo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O romance experimental é a consequência da evolução científica do século; ele continua e completa a fisiologia, que por sua vez se apoia na química e na física; ele substitui o estudo do homem abstrato, do homem metafísico, pelo estudo do homem natural, submetido às leis físico-químicas e determinado pelas influências do meio e da hereditariedade.\n\nZOLA, Émile. O Romance Experimental. Campinas: Pontes, 1989.",
      source: "ZOLA, É. O Romance Experimental. Pontes, 1989."
    },
    prompt: "Com base no manifesto teórico de Émile Zola, o projeto estético do Naturalismo fundamenta a criação literária",
    options: [
      {
        id: "a",
        text: "na idealização das virtudes cristãs e na exaltação do livre-arbítrio espiritual dos indivíduos.",
        isCorrect: false,
        distractorRationale: "O Naturalismo nega o livre-arbítrio e adota o determinismo biológico e social."
      },
      {
        id: "b",
        text: "na aplicação do método científico determinista à narrativa, tratando os personagens como espécimes biológicos condicionados por raça, meio e momento histórico.",
        isCorrect: true,
        distractorRationale: "Correto: Inspirado no Positivismo de Comte, no Determinismo de Taine e na Medicina experimental de Claude Bernard, o escritor naturalista atua como um 'médico-cientista': coloca os personagens em um ambiente propício (como um cortiço) para demonstrar como os instintos corporais, as tara patológicas e a influência do meio determinam inescapavelmente as condutas humanas."
      },
      {
        id: "c",
        text: "no devaneio místico e na fuga lírica para o passado medieval dos contos de fadas.",
        isCorrect: false,
        distractorRationale: "Esse é o escapismo típico do Ultrarromantismo, antítese do rigor documental naturalista."
      },
      {
        id: "d",
        text: "na recusa absoluta a descrever as mazelas sociais das classes operárias urbanas.",
        isCorrect: false,
        distractorRationale: "O Naturalismo priorizou exatamente os cortiços, minas de carvão, prostituição e vida operária."
      },
      {
        id: "e",
        text: "na criação de heróis perfeitos, nobres e moralmente inatingíveis pela corrupção social.",
        isCorrect: false,
        distractorRationale: "Os personagens naturalistas são profundamente falíveis, instintivos e animalizados (zoomorfização)."
      }
    ],
    detailedExplanation: {
      summary: "O Naturalismo concebe o romance como um laboratório experimental governado pelas leis do determinismo: o ser humano é governado por sua herança genética, pelo meio ambiente e pelos impulsos instintivos.",
      stepByStep: [
        "1. Identificar as bases filosóficas do movimento: Determinismo de Hippolyte Taine (Raça, Meio e Momento).",
        "2. Notar a analogia de Zola: o romancista deve observar e dissecar a sociedade como um biólogo estuda cobaias.",
        "3. Em obras como 'O Cortiço' de Aluísio Azevedo, os moradores são zoomorfizados e sofrem a influência corrosiva do ambiente promíscuo.",
        "4. Concluir que o Naturalismo é o ápice do cientificismo positivista do século XIX aplicado à literatura."
      ],
      coreConcept: "No Naturalismo, o indivíduo perde a autonomia do livre-arbítrio e passa a ser visto como produto biológico de seus instintos e de seu meio social.",
      trapWarning: "Enquanto o Realismo foca na hipocrisia psicológica e social da burguesia (adultério, vaidade), o Naturalismo foca na patologia biológica e nas massas (zoomorfização, instintos sexuais, cortiço)."
    },
    commonTraps: [
      "Confundir Realismo psicológico (Machado de Assis) com Naturalismo biológico (Aluísio Azevedo).",
      "Achar que o Naturalismo acredita que a força de vontade individual supera o meio social."
    ],
    tags: ["Linguagens", "Literatura", "Naturalismo", "Determinismo", "Émile Zola", "O Cortiço"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-018",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura",
    subtopic: "A 'Paz Armada' das Formas e o Parnasianismo",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Invejo o ourives quando escrevo:\nImito o amor\nCom que ele, em ouro, o alto relevo\nFaz de uma flor.\n\nTorce, aprimora, alteia, lima\nA frase; e, enfim,\nNo verso de ouro engasta a rima,\nComo um rubim.\n\nBILAC, Olavo. Poesias. Rio de Janeiro: Francisco Alves, 1925.",
      source: "BILAC, O. Poesias. Francisco Alves, 1925."
    },
    prompt: "O célebre poema 'Profissão de Fé', de Olavo Bilac, sintetiza os preceitos fundamentais da poética parnasiana ao postular",
    options: [
      {
        id: "a",
        text: "a supremacia da espontaneidade emocional bruta sobre as regras formais de metrificação.",
        isCorrect: false,
        distractorRationale: "O Parnasianismo repudiava expressamente o descontrole emocional em nome do cálculo formal."
      },
      {
        id: "b",
        text: "o ideal da 'arte pela arte', caracterizado pela obsessão pela perfeição métrica, rimas ricas e trabalho paciente de cinzelamento do verso como uma joia rara.",
        isCorrect: true,
        distractorRationale: "Correto: O Parnasianismo (fins do século XIX) defendeu o lema 'l'art pour l'art'. A poesia recusa qualquer engajamento político, social ou sentimentalismo exacerbado, focando na depuração técnica artesanal: sonetos decassílabos ou alexandrinos de métrica impecável, rimas raras/ricas (classes gramaticais diferentes) e preciosismo vocabular comparado ao trabalho do ourives e do escultor."
      },
      {
        id: "c",
        text: "a denúncia combativa da miséria operária nas fábricas têxteis do Rio de Janeiro.",
        isCorrect: false,
        distractorRationale: "O Parnasianismo mantinha-se propositalmente alheio aos conflitos sociais cotidianos."
      },
      {
        id: "d",
        text: "o emprego deliberado de solecismos e coloquialismos para democratizar o acesso à literatura.",
        isCorrect: false,
        distractorRationale: "Os parnasianos eram defensores intransigentes do purismo gramatical e da sintaxe hiperbática erudita."
      },
      {
        id: "e",
        text: "o rompimento iconoclasta com os padrões clássicos grecolatinos de beleza.",
        isCorrect: false,
        distractorRationale: "O Parnasianismo idolatrava a mitologia e a estética da Grécia e Roma antigas."
      }
    ],
    detailedExplanation: {
      summary: "Em 'Profissão de Fé', Olavo Bilac define o poeta parnasiano como um artífice do verso ('ourives'), que esculpe a linguagem em busca da perfeição formal ('arte pela arte').",
      stepByStep: [
        "1. Analisar as metáforas do poema: ouro, ourives, lima, rubim, vaso grego.",
        "2. Identificar a ideologia do movimento: o Parnasianismo valoriza o trabalho de ourivesaria verbal.",
        "3. Conceituar a 'Arte pela Arte': a arte não tem outra função senão produzir beleza formal imperecível.",
        "4. Conectar à reação antiparnasiana deflagrada pelo Modernismo de 1922 (Manuel Bandeira em 'Os Sapos')."
      ],
      coreConcept: "A poética parnasiana fundamenta-se na impassibilidade emotiva, no rigor da métrica clássica e no culto à forma perfeita.",
      trapWarning: "Lembre-se de que o Parnasianismo foi a estética oficial hegemônica no Brasil durante décadas, servindo de alvo principal para a revolução modernista de 1922."
    },
    commonTraps: [
      "Confundir o rigor técnico do Parnasianismo com a metapoesia construtivista moderna de João Cabral.",
      "Achar que o Parnasianismo tinha preocupações sociais ou didáticas."
    ],
    tags: ["Linguagens", "Literatura", "Parnasianismo", "Olavo Bilac", "Arte pela Arte"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-019",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Sinestesia e as Sugestões Musicais no Simbolismo",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Vozes veladas, veludosas vozes,\nVolúpia dos violões, vozes veladas,\nVagam nos velhos vórtices velozes\nDos ventos, vivas, vãs, vulcanizadas.\n\nCRUZ E SOUSA. Antifona. In: Broquéis. Rio de Janeiro: Fundação Biblioteca Nacional, 1993.",
      source: "CRUZ E SOUSA. Broquéis. FBN, 1993."
    },
    prompt: "Na estrofe inaugural de 'Broquéis', o poeta catarinense Cruz e Sousa mobiliza recursos estilísticos emblemáticos do Simbolismo por meio da",
    options: [
      {
        id: "a",
        text: "descrição fria e objetiva de uma orquestra militar em desfile cívico.",
        isCorrect: false,
        distractorRationale: "O poema é uma evocação mística e etérea, sem qualquer relação com desfile militar empírico."
      },
      {
        id: "b",
        text: "aliteração insistente do fonema fricativo /v/ e do cruzamento sinestésico entre audição e tato ('veludosas vozes'), buscando a musicalidade e a sugestão mística da alma.",
        isCorrect: true,
        distractorRationale: "Correto: Cruz e Sousa (o 'Cisne Negro') aplica à perfeição os preceitos simbolistas sistematizados por Paul Verlaine ('A música antes de tudo'). A repetição obsessiva da consoante /v/ (aliteração) e dos sons de /l/ e /o/ constrói uma atmosfera sonora hipnótica. O adjetivo 'veludosas' atribui uma textura tátil (veludo) a um estímulo sonoro (vozes), configurando sinestesia poética."
      },
      {
        id: "c",
        text: "exaltação dos ideais positivistas de clareza científica e demonstração empírica.",
        isCorrect: false,
        distractorRationale: "O Simbolismo rejeitava expressamente o positivismo e o cientificismo em prol do mistério e da transcendência."
      },
      {
        id: "d",
        text: "adoção do verso livre desprovido de qualquer esquema rímico ou métrico.",
        isCorrect: false,
        distractorRationale: "O poema é composto em versos decassílabos rigorosos com rimas alternadas perfeitas."
      },
      {
        id: "e",
        text: "reprodução documental da fala cotidiana dos marinheiros do litoral sulista.",
        isCorrect: false,
        distractorRationale: "O vocabulário é hermético, neológico e sublime, distante de registros orais coloquiais."
      }
    ],
    detailedExplanation: {
      summary: "Cruz e Sousa utiliza aliterações em /v/ e sinestesia tátil-auditiva ('veludosas vozes') para materializar o mandamento simbolista de que a poesia deve ser pura sugestão musical e espiritual.",
      stepByStep: [
        "1. Identificar o recurso sonoro evidente: a repetição da consoante fricativa /v/ em 'Vozes veladas, veludosas vozes, volúpia dos violões' chama-se aliteração.",
        "2. Identificar a figura de linguagem conceitual: 'veludo' (tato) associado a 'vozes' (audição) caracteriza a sinestesia.",
        "3. Conectar esses recursos ao ideário do Simbolismo: a linguagem não deve descrever, mas sugerir, evocar e musicalizar a dor e a espiritualidade.",
        "4. Reconhecer a grandeza de Cruz e Sousa como mestre do Simbolismo universal."
      ],
      coreConcept: "No Simbolismo, a sinestesia e a musicalidade aliterativa substituem a descrição objetiva pelo mistério e pela sugestão transcendental.",
      trapWarning: "Aliteração é a repetição de sons consonantais (no caso, /v/); assonância é a repetição de sons vocálicos."
    },
    commonTraps: [
      "Confundir aliteração (consoantes) com assonância (vogais).",
      "Classificar o poema como barroco pelo uso de antíteses, ignorando o projeto simbolista do século XIX."
    ],
    tags: ["Linguagens", "Literatura", "Simbolismo", "Cruz e Sousa", "Aliteração", "Sinestesia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-020",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Dessacralização das Musas no Poema Moderno",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Estou farto do lirismo comedido\nDo lirismo bem-comportado\nDo lirismo funcionário público com livro de ponto expediente protocolo e manifestações de apreço ao sr. diretor.\n\nEstou farto do lirismo que para e vai averiguar no dicionário o cunho vernáculo de um vocábulo.\n\nAbaixo os puristas\nTodas as palavras sobretudo os barbarismos universais\nTodas as construções sobretudo as sintaxes de exceção\nTodos os ritmos sobretudo os inumeráveis.\n\nBANDEIRA, Manuel. Poética. In: Libertinagem. São Paulo: Global, 2014.",
      source: "BANDEIRA, M. Libertinagem. Global, 2014."
    },
    prompt: "No célebre manifesto em verso 'Poética', Manuel Bandeira propõe a emancipação da lírica brasileira ao defender",
    options: [
      {
        id: "a",
        text: "o retorno incondicional às regras rígidas da métrica parnasiana e ao vocabulário dicionarizado dos clássicos.",
        isCorrect: false,
        distractorRationale: "O poema é uma declaração de guerra expressa ao lirismo burocrático e dicionarizado."
      },
      {
        id: "b",
        text: "a liberação integral da linguagem poética contra o academicismo formalista, acolhendo a liberdade rítmica, os barbarismos e a autenticidade humana do desabafo.",
        isCorrect: true,
        distractorRationale: "Correto: Manuel Bandeira proclama a morte do lirismo domesticado, acadêmico e obediente ('funcionário público com livro de ponto'). Em seu lugar, ele institui o lirismo de libertinagem: aquele que acolhe todas as palavras (inclusive gírias, barbarismos e erros populares), todos os ritmos livres e a total entrega à dor, ao amor e à espontaneidade da vida real."
      },
      {
        id: "c",
        text: "a obrigatoriedade de todo escritor prestar concurso público para garantir estabilidade funcional.",
        isCorrect: false,
        distractorRationale: "A menção ao funcionário público é uma metáfora irônica para ridicularizar a poesia engessada e burocrática."
      },
      {
        id: "d",
        text: "a censura aos termos estrangeiros para proteger a língua contra ameaças externas.",
        isCorrect: false,
        distractorRationale: "Bandeira clama explicitamente por 'todas as palavras sobretudo os barbarismos universais'."
      },
      {
        id: "e",
        text: "a substituição dos poemas por planilhas estatísticas e processos administrativos.",
        isCorrect: false,
        distractorRationale: "A crítica ataca exatamente a burocratização que transforma a arte em protocolo morto."
      }
    ],
    detailedExplanation: {
      summary: "Em 'Poética', Manuel Bandeira destrói a concepção parnasiana de poesia como exercício burocrático de dicionário e consagra o verso livre, o coloquialismo e a emoção autêntica.",
      stepByStep: [
        "1. Contextualizar a obra: 'Libertinagem' (1930) consolida a conquista modernista da liberdade expressiva.",
        "2. Identificar os alvos da sátira de Bandeira: o lirismo comedido, os gramáticos puristas, o apego ao dicionário.",
        "3. Reconhecer a nova poética afirmada: verso livre, sintaxes irregulares, palavras do cotidiano, 'lirismo dos loucos'.",
        "4. Concluir que o poema sintetiza a carta de alforria da poesia brasileira moderna."
      ],
      coreConcept: "A Poética de Manuel Bandeira reivindica a poesia como experiência vital libertária e não como protocolo normativo engravatado.",
      trapWarning: "Bandeira não prega o desleixo, mas uma arte que subordinará a técnica à verdade humana e não o contrário."
    },
    commonTraps: [
      "Interpretar a menção a funcionário público como elogio à profissão.",
      "Achar que o modernista rejeita a emoção (ele rejeita o sentimentalismo postiço, mas exalta a emoção genuína)."
    ],
    tags: ["Linguagens", "Literatura", "Manuel Bandeira", "Modernismo", "Poética", "Verso Livre"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-021",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A 'Zoomorfização' como Procedimento Naturalista",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Fechou-se um círculo de curiosos em torno dos dois homens que lutavam na lama. Eram dois touros bufando, soltando fogo pelas narinas, as veias do pescoço intumescidas como cordas. Atiravam-se de cabeça baixa, mordiam-se com sanha de feras raivosas. No chão pegajoso, as carnes suadas estalavam sob os golpes, e a multidão uivava excitada pelo cheiro de sangue morno que empesteava o pátio do cortiço.",
      source: "AZEVEDO, Aluísio. O Cortiço. São Paulo: Ática, 2018 (adaptado)."
    },
    prompt: "O procedimento expressivo adotado pelo narrador para caracterizar o confronto entre as personagens é a zoomorfização (ou animalização), que no projeto naturalista tem como objetivo",
    options: [
      {
        id: "a",
        text: "evidenciar a dignidade heroica e a nobreza cavalheiresca dos lutadores.",
        isCorrect: false,
        distractorRationale: "O texto rebaixa os seres humanos à condição de feras selvagens, sem qualquer nobreza idealizada."
      },
      {
        id: "b",
        text: "demonstrar a fragilidade das convenções civilizatórias perante a emergência dos instintos biológicos primitivos e da fúria animal do homem.",
        isCorrect: true,
        distractorRationale: "Correto: A zoomorfização é um recurso basilar do Naturalismo. Ao descrever os combatentes como 'touros', 'feras raivosas' que 'mordiam' e 'uivavam', o narrador destitui os seres humanos de razão moral e espiritualidade, reduzindo-os a organismos zoológicos movidos exclusivamente por impulsos fisiológicos e violentos quando sob pressão do ambiente."
      },
      {
        id: "c",
        text: "comprovar a necessidade de proteção aos direitos dos animais domésticos no Brasil colonial.",
        isCorrect: false,
        distractorRationale: "Os 'animais' descritos são metáforas para seres humanos em conflito no século XIX."
      },
      {
        id: "d",
        text: "reproduzir uma cena bíblica de sacrifício religioso com fundo alegórico.",
        isCorrect: false,
        distractorRationale: "O Naturalismo repudiava leituras míticas ou religiosas, focando no determinismo fisiológico profano."
      },
      {
        id: "e",
        text: "criticar a falta de médicos veterinários qualificados na área urbana.",
        isCorrect: false,
        distractorRationale: "Leitura descontextualizada e absurda."
      }
    ],
    detailedExplanation: {
      summary: "A zoomorfização animaliza os seres humanos na narrativa para provar a tese determinista de que a civilização é uma camada fina que cede aos instintos biológicos mais brutais.",
      stepByStep: [
        "1. Identificar o vocabulário metafórico empregado: touros, narinas, mordiam com sanha de feras, uivavam.",
        "2. Reconhecer a figura: animalização ou zoomorfização (atribuir traços, comportamentos e instintos de animais a seres humanos).",
        "3. Conectar à ideologia do Naturalismo: o ser humano é visto como um mamífero impulsionado por apetites e reflexos primitivos.",
        "4. Observar como o espaço do cortiço atua como catalisador da degradação biológica."
      ],
      coreConcept: "A zoomorfização naturalista ilustra a degradação da racionalidade humana em favor do instinto animal cego.",
      trapWarning: "Cuidado: personificação ou prosopopeia é o inverso (dar traços humanos a seres inanimados ou animais); zoomorfização é dar traços animais a seres humanos."
    },
    commonTraps: [
      "Confundir zoomorfização (homem vira bicho) com prosopopeia (bicho/coisa ganha atributos humanos).",
      "Não vincular o recurso linguístico ao projeto ideológico do Naturalismo."
    ],
    tags: ["Linguagens", "Literatura", "Zoomorfização", "Naturalismo", "Aluísio Azevedo", "O Cortiço"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-022",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Poética Concretista: Espacialização e Verbivocovisualidade",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1956, o grupo Noigandres (Augusto de Campos, Haroldo de Campos e Décio Pignatari) lançou oficialmente em São Paulo a Poesia Concreta. No histórico 'Plano-Piloto para a Poesia Concreta', os autores proclamaram o fim do ciclo histórico do verso sintático discursivo e a emergência da palavra-coisa: o poema concebido como uma estrutura óptica e acústica integral, articulando simultaneamente as dimensões verbal, vocal e visual (verbivocovisual).",
      source: "CAMPOS, A.; PIGNATARI, D.; CAMPOS, H. Teoria da Poesia Concreta. Cotia: Ateliê Editorial, 2006."
    },
    prompt: "A ruptura radical introduzida pela Poesia Concreta na tradição literária brasileira fundamenta-se",
    options: [
      {
        id: "a",
        text: "no aprofundamento das narrativas romanescas em prosa de ficção psicológica intimista.",
        isCorrect: false,
        distractorRationale: "O Concretismo atuou prioritariamente na poesia de vanguarda e na crítica, não no romance intimista."
      },
      {
        id: "b",
        text: "na desintegração da sintaxe linear convencional e na exploração do espaço gráfico da página em branco como elemento estrutural e plástico do poema.",
        isCorrect: true,
        distractorRationale: "Correto: A poesia concreta eliminou o verso corrido temporal e a métrica tradicional. A página branca torna-se uma tela espacial onde a tipografia, a geometria, a cor, o silêncio visual e a sonoridade operam conjuntamente. As palavras decompõem-se em morfemas e fonemas, atuando como matéria física e visual plástica (verbi-voco-visual)."
      },
      {
        id: "c",
        text: "na defesa do soneto clássico de rimas ricas e temática mitológica greco-romana.",
        isCorrect: false,
        distractorRationale: "O Concretismo foi uma das vanguardas mais antitradicionais do século XX, liquidando o soneto."
      },
      {
        id: "d",
        text: "na valorização exclusiva de poesias declamadas por repentistas do sertão nordestino.",
        isCorrect: false,
        distractorRationale: "A poesia concreta dialogava com a arquitetura moderna (Brasília), o design industrial e as vanguardas plásticas internacionais."
      },
      {
        id: "e",
        text: "no retorno às formas da oratória sagrada barroca de Padre Antônio Vieira.",
        isCorrect: false,
        distractorRationale: "O Concretismo rejeita o discurso retórico e a oratória persuasiva linear."
      }
    ],
    detailedExplanation: {
      summary: "A Poesia Concreta aboliu o verso tradicional discursivo: o poema passa a existir como objeto visual no espaço gráfico da página, unindo som, forma tipográfica e sentido.",
      stepByStep: [
        "1. Analisar a tríade 'verbivocovisual': Verbo (conteúdo semântico) + Voz (fonética/acústica) + Visão (disposição gráfica e tipografia).",
        "2. Identificar a função da página em branco: o espaço não é vazio passivo, mas elemento construtivo do poema.",
        "3. Exemplos célebres: 'Beba Coca-Cola / Beba / Cola / Caco / Caco / Cola / Caco / Caco / Cloaca' (Décio Pignatari).",
        "4. Concluir que a poesia concreta aproximou a literatura do design gráfico e das artes visuais."
      ],
      coreConcept: "A Poesia Concreta transforma a palavra em objeto plástico e espacial, superando a linearidade do verso discursivo.",
      trapWarning: "Cuidado: poema concreto não é apenas um poema 'com desenho bonito'; é uma estrutura sintética onde a diagramação visual é inseparável da mensagem crítica."
    },
    commonTraps: [
      "Achar que Concretismo é mero passatempo tipográfico sem rigor conceitual.",
      "Confundir Poesia Concreta com o Modernismo clássico de 1922 (o Concretismo surgiu na década de 1950)."
    ],
    tags: ["Linguagens", "Literatura", "Poesia Concreta", "Grupo Noigandres", "Vanguardas", "Verbivocovisual"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-023",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Literatura",
    subtopic: "A 'Ilustração Brasileira' e o Projeto Romântico Nacionalista",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Após a proclamação da Independência em 1822, o Império do Brasil necessitava com urgência forjar uma identidade simbólica nacional autônoma, diferenciada da metrópole colonizadora portuguesa. O movimento romântico brasileiro — capitaneado por Gonçalves de Magalhães, Gonçalves Dias e José de Alencar — assumiu conscientemente essa missão cívica, erigindo o indígena como o herói fundador mítico e a exuberância da natureza tropical como o patrimônio singular da pátria.",
      source: "CÂNDIDO, A. Formação da Literatura Brasileira: Momentos Decisivos. Rio de Janeiro: Ouro sobre Azul, 2012."
    },
    prompt: "A escolha do indígena como símbolo da identidade nacional pelo Romantismo brasileiro decorreu do fato de que",
    options: [
      {
        id: "a",
        text: "o indígena era o único elemento populacional que não possuía vínculos genealógicos com o colonizador português nem fora escravizado nas senzalas dos engenhos.",
        isCorrect: true,
        distractorRationale: "Correto: A elite letrada imperial branca não podia escolher o português (figura do colonizador recente) nem o negro escravizado (cuja condição servil e desumanizada desestabilizaria a ideologia escravocrata do Império). O indígena autóctone, retratado com nobreza cavalheiresca idealizada (mito do 'bom selvagem' de Rousseau), oferecia a raiz pura, livre e telúrica necessária para criar a certidão de nascimento mítico da nova nação soberana."
      },
      {
        id: "b",
        text: "os povos indígenas ocupavam os altos cargos administrativos e diplomáticos da corte de Dom Pedro II.",
        isCorrect: false,
        distractorRationale: "Os indígenas continuavam marginalizados e dizimados no mundo real; sua valorização foi meramente estética e simbólica na literatura."
      },
      {
        id: "c",
        text: "a literatura romântica brasileira era financiada e redigida diretamente por caciques das tribos amazônicas.",
        isCorrect: false,
        distractorRationale: "Os autores românticos indianistas pertenciam à elite letrada branca e urbana do Império."
      },
      {
        id: "d",
        text: "o Romantismo copiava fielmente a realidade linguística dos falares indígenas sem recorrer ao idioma português.",
        isCorrect: false,
        distractorRationale: "Os romances e poemas eram escritos em português (com algumas notas de rodapé de vocábulos tupis explicados)."
      },
      {
        id: "e",
        text: "os autores românticos desejavam a abolição imediata do regime de monarquia constitucional.",
        isCorrect: false,
        distractorRationale: "A maioria dos autores românticos era profundamente ligada à corte e ao imperador Dom Pedro II."
      }
    ],
    detailedExplanation: {
      summary: "O indianismo romântico elegeu o índio como herói nacional porque ele encarnava a pureza nativa sem a herança do colonizador português e sem perturbar a ordem escravocrata do Império.",
      stepByStep: [
        "1. Contexto pós-1822: necessidade imperiosa de construir uma identidade cultural genuinamente brasileira.",
        "2. Análise dos grupos sociais disponíveis: o português era o opressor colonizador; o negro era escravizado e silenciado pela elite latifundiária.",
        "3. O indígena foi convenientemente idealizado como o 'cavaleiro medieval das matas' (Peri, Iracema, Juca Pirama).",
        "4. Concluir que o indianismo foi um projeto ideológico de fundação nacional da elite imperial."
      ],
      coreConcept: "O indianismo romântico projetou valores nobres medievais europeus sobre o indígena brasileiro para forjar o mito da nacionalidade.",
      trapWarning: "O índio romântico de Alencar e Gonçalves Dias é um herói idealizado e cavaleiresco, bem diferente da realidade empírica e sofrida dos povos originários."
    },
    commonTraps: [
      "Acreditar que o Romantismo retratou o indígena real em sua complexidade antropológica autêntica.",
      "Achar que o movimento romântico era contrário ao Império de Pedro II."
    ],
    tags: ["Linguagens", "Literatura", "Romantismo", "Indianismo", "José de Alencar", "Identidade Nacional"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-024",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A Poesia Social e o Desencanto Histórico em Carlos Drummond de Andrade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O tempo é minha matéria, o tempo presente, os homens presentes,\na vida presente.\n(...)\nNão serei o poeta de um mundo caduco.\nTambém não cantarei o mundo futuro.\nEstou preso à vida e olho meus semelhantes.\nEstão murchos e silenciosos;\nsão carnes de engrenagem, operários sem esperança.\nO tempo é a minha matéria, o tempo presente, os homens presentes.\n\nANDRADE, Carlos Drummond de. Mãos Dadas. In: Sentimento do Mundo. São Paulo: Companhia das Letras, 2012.",
      source: "ANDRADE, C. D. Sentimento do Mundo. Companhia das Letras, 2012."
    },
    prompt: "Publicado em 1940 sob o impacto da Segunda Guerra Mundial e da ditadura do Estado Novo no Brasil, o poema expressa a fase social da obra drummondiana pela",
    options: [
      {
        id: "a",
        text: "fuga alienada para o paraíso campestre da infância mineira para não testemunhar os horrores da guerra.",
        isCorrect: false,
        distractorRationale: "O eu lírico recusa explicitamente a fuga: 'o tempo presente é a minha matéria'."
      },
      {
        id: "b",
        text: "solidariedade ética e engajamento estético com o destino doloroso da humanidade contemporânea, recusando o escapismo e assumindo o testemunho histórico de seu tempo.",
        isCorrect: true,
        distractorRationale: "Correto: Em 'Sentimento do Mundo' (1940) e 'A Rosa do Povo' (1945), Drummond supera o individualismo irônico de sua juventude e abraça a poesia social e política. Diante do nazifascismo, da exploração operária e do cerceamento das liberdades, o eu lírico dá as mãos aos seus semelhantes e compromete sua palavra poética com a dor e as lutas do presente histórico."
      },
      {
        id: "c",
        text: "profecia otimista que celebra o capitalismo industrial e a harmonia pacífica entre todas as nações.",
        isCorrect: false,
        distractorRationale: "O poema retrata os homens como 'carnes de engrenagem' e expressa desencanto com o mundo em guerra."
      },
      {
        id: "d",
        text: "defesa intransigente do isolamento aristocrático do poeta na sua torre de marfim.",
        isCorrect: false,
        distractorRationale: "O poeta rejeita a torre de marfim para 'dar as mãos' aos homens e mulheres comuns."
      },
      {
        id: "e",
        text: "dedicação exclusiva ao formalismo linguístico sem qualquer conteúdo humano.",
        isCorrect: false,
        distractorRationale: "A poesia drummondiana desta fase é eminentemente humanista e engajada."
      }
    ],
    detailedExplanation: {
      summary: "Na fase madura de 'Sentimento do Mundo', Drummond declara sua aliança ética com a humanidade oprimida, afirmando que a matéria de sua poesia é o presente doloroso dos homens.",
      stepByStep: [
        "1. Analisar as três grandes fases de Drummond: 1ª Fase (Individualista/Irônica), 2ª Fase (Social/Histórica - anos 40), 3ª Fase (Filosófica/Metafísica).",
        "2. Identificar a 2ª fase no excerto: engajamento cívico contra o fascismo e denúncia da exploração humana ('carnes de engrenagem').",
        "3. Interpretar o verso-lema: 'O tempo é a minha matéria, o tempo presente'.",
        "4. Concluir que a poesia assume a responsabilidade de ser testemunha e instrumento de comunhão solidária."
      ],
      coreConcept: "A poesia de Drummond na década de 1940 é marcada pelo sentimento de solidariedade social, compaixão e resistência política.",
      trapWarning: "Drummond recusa tanto o saudosismo reacionário ('não serei o poeta de um mundo caduco') quanto a utopia ingênua ('não cantarei o mundo futuro'); seu foco é o combate no presente."
    },
    commonTraps: [
      "Classificar o poema como mera nostalgia da infância.",
      "Achar que o autor propõe uma revolução mágica imediata descolada da realidade áspera dos operários."
    ],
    tags: ["Linguagens", "Literatura", "Carlos Drummond de Andrade", "Poesia Social", "Segunda Guerra Mundial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-TEO-025",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura",
    subtopic: "A 'Antropofagia Cultural' como Teoria Crítica Descolonizadora",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Só a Antropofagia nos une. Socialmente. Economicamente. Filosoficamente.\nÚnica lei do mundo. Expressão mascarada de todos os individualismos, de todos os coletivismos. De todas as religiões. De todos os tratados de paz.\nTupy, or not tupy that is the question.\nContra todas as catequeses. E contra a mãe dos Gracos.\nSó me interessa o que não é meu. Lei do homem. Lei do antropófago.\n\nANDRADE, Oswald de. Manifesto Antropófago. Revista de Antropofagia, São Paulo, ano 1, n. 1, maio 1928.",
      source: "ANDRADE, O. A Utopia Antropofágica. São Paulo: Globo, 1990."
    },
    prompt: "No Manifesto Antropófago de 1928, a metáfora da deglutição canibal proposta por Oswald de Andrade constitui uma teoria cultural descolonizadora porque propõe",
    options: [
      {
        id: "a",
        text: "o isolamento xenófobo do Brasil em relação a qualquer influência intelectual estrangeira.",
        isCorrect: false,
        distractorRationale: "A Antropofagia não rejeita o estrangeiro; ela o devora com voracidade para transformá-lo."
      },
      {
        id: "b",
        text: "a cópia passiva e reverente dos modelos culturais da Europa como único caminho para o desenvolvimento civilizatório.",
        isCorrect: false,
        distractorRationale: "Oswald ridiculariza expressamente a cópia submissa e a colonização mental acadêmica."
      },
      {
        id: "c",
        text: "a apropriação crítica e voraz da cultura e das técnicas estrangeiras, digerindo-as e deglutindo-as para refundi-las com a matriz cultural brasileira e gerar uma arte autônoma e original.",
        isCorrect: true,
        distractorRationale: "Correto: A Antropofagia recupera o ritual dos índios Tupinambá (que não comiam o inimigo por fome, mas para assimilar suas forças e virtudes heroicas). Aplicada à cultura, ela rejeita tanto o nacionalismo ufanista ingênuo (que se isola) quanto a cópia servil do colonizador (que apenas imita). O artista brasileiro deve 'devorar' Freud, Marx, as vanguardas europeias e Shakespeare ('Tupy or not tupy'), digerindo-os sob a perspectiva das raízes indígenas e populares nativas."
      },
      {
        id: "d",
        text: "a conversão compulsória de toda a população brasileira aos dogmas da fé católica tridentina.",
        isCorrect: false,
        distractorRationale: "O manifesto posiciona-se frontalmente 'contra todas as catequeses'."
      },
      {
        id: "e",
        text: "o abandono da língua portuguesa falada no Brasil em favor da restauração do latim clássico.",
        isCorrect: false,
        distractorRationale: "Oswald propunha exatamente o contrário: a consagração do falar coloquial e livre do povo brasileiro."
      }
    ],
    detailedExplanation: {
      summary: "A Antropofagia oswaldiana é uma das teorias culturais mais originais da América Latina: não rejeita o estrangeiro nem o copia passivamente, mas o devora criticamente para refundá-lo com a identidade brasileira.",
      stepByStep: [
        "1. Compreender o ritual antropofágico indígena: deglutir o inimigo valoroso para absorver sua força.",
        "2. Transpor a metáfora para o plano cultural: a cultura dominante (europeia, colonizadora) deve ser devorada e transformada.",
        "3. Analisar a síntese famosa: 'Tupy, or not tupy that is the question' (antropofagia com Shakespeare).",
        "4. Reconhecer a Antropofagia como precursora dos estudos pós-coloniais e do Tropicalismo dos anos 60."
      ],
      coreConcept: "A Antropofagia é um modelo de apropriação cultural crítica e descolonizadora, que assimila o outro para fortalecer a si próprio.",
      trapWarning: "Cuidado: a Antropofagia não é xenofobia nem submissão colonial; é a síntese dialética e subversiva que digere a cultura alheia para reinventá-la sob perspectiva própria."
    },
    commonTraps: [
      "Confundir Antropofagia com xenofobia nacionalista que rejeita tudo o que vem de fora.",
      "Achar que se tratava de um elogio literal ao canibalismo físico."
    ],
    tags: ["Linguagens", "Literatura", "Antropofagia", "Oswald de Andrade", "Modernismo", "Teoria Crítica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
