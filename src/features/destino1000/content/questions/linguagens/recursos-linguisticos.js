export const QUESTIONS_RECURSOS_LINGUISTICOS = [
  {
    id: "LIN-REC-001",
    area: "linguagens",
    competence: 8,
    skill: 27,
    topic: "Variação Linguística",
    subtopic: "Preconceito Linguístico",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No poema 'Pronominais', de Oswald de Andrade:\n'Dê-me um cigarro\nDiz a gramática\nDo professor e do aluno\nE do mulato sabido\nMas o bom negro e o bom branco\nDa Nação Brasileira\nDizem todos os dias\nDeixa disso camarada\nMe dá um cigarro'",
      source: "Oswald de Andrade, Poesias Reunidas"
    },
    prompt: "Ao contrapor a regra prescritiva da gramática ao uso cotidiano da língua brasileira, o poema de Oswald de Andrade tem a intenção principal de:",
    options: [
      { id: "a", text: "criticar o desconhecimento das regras de colocação pronominal pelos cidadãos mais pobres.", isCorrect: false, distractorRationale: "O poema celebra a brasilidade, não critica os cidadãos." },
      { id: "b", text: "exaltar a identidade nacional através da valorização da linguagem coloquial falada no Brasil.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "demonstrar a importância da escola para ensinar a norma-padrão aos 'bons negros e brancos'.", isCorrect: false, distractorRationale: "O autor modernista se opunha ao rigor acadêmico, não estava exaltando a gramática normativa escolar." },
      { id: "d", text: "denunciar a informalidade dos meios acadêmicos que corrompem a língua portuguesa original.", isCorrect: false, distractorRationale: "Ele denuncia o excesso de formalidade, não a informalidade." },
      { id: "e", text: "estabelecer um novo conjunto de regras obrigatórias para os escritores modernistas.", isCorrect: false, distractorRationale: "O Modernismo buscou romper com regras fixas, adotando a liberdade estética, e não criar uma nova ditadura de regras." }
    ],
    detailedExplanation: {
      summary: "O poema é uma defesa modernista do português brasileiro popular contra as normas eurocêntricas.",
      stepByStep: [
        "A primeira estrofe mostra a norma culta de Portugal ('Dê-me').",
        "A segunda estrofe descreve a fala real, cotidiana e natural dos brasileiros ('Me dá').",
        "A intenção do autor é combater o elitismo linguístico e valorizar a nossa própria cultura oral."
      ],
      coreConcept: "Variação linguística diastrática e projeto estético do Modernismo (1ª Fase).",
      trapWarning: "Cuidado ao julgar os usos linguísticos como 'erros'; o ENEM cobra a adequação ao contexto e a valorização da diversidade."
    },
    commonTraps: ["Interpretar a variação como erro ou ignorância"],
    tags: ["Oswald de Andrade", "Modernismo", "Variação Linguística", "Colocação Pronominal"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-002",
    area: "linguagens",
    competence: 6,
    skill: 18,
    topic: "Figuras de Linguagem",
    subtopic: "Ironia e Sarcasmo",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "text",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No célebre romance Memórias Póstumas de Brás Cubas, o narrador defunto dedica sua obra: 'Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas memórias póstumas'. Ao longo do livro, ele narra sua vida repleta de privilégios e conquistas medíocres com um ar de grande superioridade.",
      source: "Machado de Assis"
    },
    prompt: "O recurso estilístico predominante na dedicatória de Machado de Assis, que marca o tom geral do romance frente à sociedade elitista do século XIX, é a:",
    options: [
      { id: "a", text: "metáfora, pois o verme representa um amigo de infância que o traiu em vida.", isCorrect: false, distractorRationale: "Não há indícios no texto de que o verme é uma metáfora para uma pessoa específica." },
      { id: "b", text: "hipérbole, pois ele exagera a dor da morte para causar piedade no leitor.", isCorrect: false, distractorRationale: "A dedicatória é fria e cínica, não busca piedade; Brás Cubas sente-se liberto pela morte." },
      { id: "c", text: "ironia, que revela o desprezo pelas convenções sociais e a futilidade das glórias humanas.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "eufemismo, pois o narrador tenta suavizar o impacto nojento da decomposição corporal.", isCorrect: false, distractorRationale: "Ele não suaviza, pelo contrário, ele é explícito ('roeu as frias carnes')." },
      { id: "e", text: "sinestesia, devido à mistura das sensações visuais e gustativas na cena do cemitério.", isCorrect: false, distractorRationale: "Não há mistura de sentidos sensoriais como figura de linguagem central aqui." }
    ],
    detailedExplanation: {
      summary: "A dedicatória macabra ao verme coroa a visão desencantada e irônica que Machado tem sobre as vaidades humanas.",
      stepByStep: [
        "Normalmente, um livro é dedicado a pessoas amadas ou entidades superiores.",
        "Dedicar ao verme que devora o cadáver é uma quebra radical de expectativa.",
        "Esse gesto irônico mostra que todas as conquistas elitistas terminam no mesmo fim orgânico, nivelando a vaidade humana ao nada."
      ],
      coreConcept: "Ironia machadiana e crítica à elite.",
      trapWarning: "Lembre-se que Machado de Assis é mestre da ironia e do pessimismo sarcástico."
    },
    commonTraps: ["Confundir ironia com pessimismo literal sem efeito de estilo", "Atribuir romantismo a Machado da fase realista"],
    tags: ["Machado de Assis", "Realismo", "Ironia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-003",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Funções da Linguagem",
    subtopic: "Função Metalinguística",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "'Procura-se uma palavra / Que tenha gosto de amora / E textura de veludo / Uma palavra que sirva / Para dizer que te amo / Sem parecer que já foi / Dita antes por todo mundo.'",
      source: "Original"
    },
    prompt: "No poema acima, o eu lírico faz uma reflexão direta sobre o próprio ato de escolher palavras para compor seus versos. Essa característica revela a predominância da função da linguagem conhecida como:",
    options: [
      { id: "a", text: "fática, pois busca manter a atenção do leitor ao longo das estrofes.", isCorrect: false, distractorRationale: "A função fática foca em testar e manter o canal de comunicação (ex: 'alô?')." },
      { id: "b", text: "conativa, uma vez que o poema ordena ao leitor que procure a palavra descrita.", isCorrect: false, distractorRationale: "O poema não dá uma ordem ou conselho ao leitor, característica da conativa/apelativa." },
      { id: "c", text: "referencial, já que fornece dados concretos sobre o sabor de frutas vermelhas.", isCorrect: false, distractorRationale: "A linguagem é figurada; não está informando objetivamente sobre botânica." },
      { id: "d", text: "emotiva, porque o foco está exclusivamente nos sentimentos de abandono amoroso.", isCorrect: false, distractorRationale: "Há emoção (te amo), mas o poema não é sobre abandono, é sobre *escrever*." },
      { id: "e", text: "metalinguística, pois o código (a palavra/linguagem) é utilizado para explicar e discutir o próprio código.", isCorrect: true, distractorRationale: null }
    ],
    detailedExplanation: {
      summary: "Quando o poema fala sobre o ato de fazer o poema ou buscar palavras, temos a metalinguagem.",
      stepByStep: [
        "A função metalinguística ocorre quando a linguagem se dobra sobre si mesma.",
        "Exemplos: um poema sobre como escrever poesia, um filme sobre cinema, um dicionário.",
        "O texto fala explicitamente sobre 'Procurar uma palavra' para escrever, justificando a alternativa."
      ],
      coreConcept: "Funções da Linguagem de Jakobson (Metalinguística).",
      trapWarning: "Embora exista a emoção de amar ('te amo' - emotiva/poética), o núcleo de *reflexão* do trecho reside no trabalho árduo com a própria linguagem (metalinguagem)."
    },
    commonTraps: ["Confundir metalinguística com função poética apenas por ser poema"],
    tags: ["Funções da Linguagem", "Metalinguagem", "Poesia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-004",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Gêneros Textuais",
    subtopic: "Texto Argumentativo e Opinião",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "text",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Editorial: 'A recente aprovação da lei que proíbe o uso de celulares em salas de aula é um retrocesso disfarçado de solução. Ao banir a tecnologia, a escola abdica do seu dever de educar o jovem para a cidadania digital, preferindo o silêncio da alienação à confusão produtiva do aprendizado moderno.'",
      source: "Original"
    },
    prompt: "Considerando as características do gênero 'editorial', o trecho lido evidencia a intencionalidade de:",
    options: [
      { id: "a", text: "informar de maneira neutra e imparcial o leitor sobre a nova legislação aprovada.", isCorrect: false, distractorRationale: "Editoriais nunca são neutros, eles defendem um ponto de vista." },
      { id: "b", text: "expressar o posicionamento institucional e opinativo de um veículo de comunicação sobre um tema atual.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "divulgar as regras da nova lei para que os estudantes saibam das sanções punitivas.", isCorrect: false, distractorRationale: "Não há detalhamento de regras e sanções no texto." },
      { id: "d", text: "relatar uma crônica bem humorada sobre o cotidiano de professores cansados e alunos desatentos.", isCorrect: false, distractorRationale: "O tom do texto é sério, crítico e argumentativo, não literário/humorístico." },
      { id: "e", text: "entrevistar especialistas para mostrar os dois lados da discussão tecnológica na educação.", isCorrect: false, distractorRationale: "Não há citação de especialistas nem o formato de perguntas/respostas." }
    ],
    detailedExplanation: {
      summary: "O editorial é o espaço onde o jornal/revista expressa sua opinião coletiva/institucional.",
      stepByStep: [
        "Identificar palavras valorativas no texto: 'retrocesso', 'abdica do dever', 'alienação'.",
        "Concluir que o texto não é imparcial, pois emite uma opinião contundente.",
        "Lembra-se que a principal marca do gênero 'editorial' é ser um texto de opinião representativo da instituição publicadora."
      ],
      coreConcept: "Gênero textual editorial e sua função argumentativa.",
      trapWarning: "Cuidado para não confundir Reportagem/Notícia (que tendem à objetividade) com Editorial (focado em opinião)."
    },
    commonTraps: ["Acreditar na neutralidade de todos os textos jornalísticos"],
    tags: ["Editorial", "Gêneros Jornalísticos", "Argumentação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-005",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Variação Linguística",
    subtopic: "Registro Formal e Informal",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "E-mail enviado por um candidato a uma vaga de emprego: \n'E aí, meu velho, blz? Então, vi a vaga que rolou aí na firma e acho que dou conta do recado tranquilo. Manjo muito de programação e tô afim de colar com a equipe. Abraços, tamo junto.'",
      source: "Original"
    },
    prompt: "Analisando a adequação linguística do texto à situação comunicativa proposta (candidatura a uma vaga de emprego), constata-se que o texto:",
    options: [
      { id: "a", text: "é perfeitamente adequado, pois as empresas modernas valorizam candidatos que não se prendem à gramática arcaica.", isCorrect: false, distractorRationale: "Mesmo em empresas modernas, um e-mail inicial exige um mínimo de formalidade profissional." },
      { id: "b", text: "apresenta inadequação de registro, já que a situação exige maior formalidade e distanciamento entre remetente e destinatário.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "demonstra o uso de gírias regionais restritas a idosos, prejudicando o entendimento do recrutador.", isCorrect: false, distractorRationale: "As gírias ('tamo junto', 'blz', 'colar') são típicas de grupos mais jovens/informais urbanos, não idosos." },
      { id: "d", text: "emprega a norma-padrão de maneira excessiva, o que torna a leitura cansativa e burocrática.", isCorrect: false, distractorRationale: "Não há norma-padrão no texto, é um texto altamente coloquial." },
      { id: "e", text: "utiliza jargão técnico específico da área de computação para impressionar a equipe contratante.", isCorrect: false, distractorRationale: "Não há jargão técnico (como nomes de linguagens ou ferramentas), apenas linguagem informal geral." }
    ],
    detailedExplanation: {
      summary: "A competência comunicativa exige adaptar o nível de formalidade da língua à situação, ambiente e interlocutor.",
      stepByStep: [
        "A situação comunicativa (processo seletivo) não prevê intimidade inicial.",
        "O texto está saturado de marcadores de oralidade coloquial ('blz', 'rolou', 'manjo', 'colar').",
        "Essa quebra de expectativa constitui uma inadequação de registro, podendo desqualificar o candidato."
      ],
      coreConcept: "Adequação de Registro Linguístico (Formalidade x Informalidade).",
      trapWarning: "Dizer que um uso coloquial é inadequado a um ambiente formal não é preconceito linguístico, é análise de adequação."
    },
    commonTraps: ["Confundir preconceito linguístico com adequação situacional"],
    tags: ["Adequação Vocabular", "Registro Formal", "Comunicação Escrita"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
