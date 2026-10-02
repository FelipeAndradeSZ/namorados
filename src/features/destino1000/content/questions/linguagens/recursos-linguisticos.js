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
  },
  {
    id: "LIN-REC-006",
    area: "linguagens",
    competence: 8,
    skill: 27,
    topic: "Recursos Linguísticos",
    subtopic: "Coesão Referencial Anafórica",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um ensaio sobre a história da imunização, lê-se o seguinte trecho:\n'Edward Jenner observou que ordenhadoras expostas à varíola bovina desenvolviam imunidade contra a letal varíola humana. Esse médico britânico formulou então a hipótese seminal que daria origem às vacinas modernas. Tal descoberta revolucionou a medicina preventiva global.'",
      source: "Revista de História da Ciência e Tecnologia (adaptado)."
    },
    prompt: "Para assegurar a progressão temática do texto sem repetições vocabulares desnecessárias, os sintagmas 'Esse médico britânico' e 'Tal descoberta' funcionam como recursos coesivos de:",
    options: [
      { id: "a", text: "anáfora por hiperonímia e paráfrase referencial, retomando antecedentes já apresentados no fluxo discursivo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "catáfora estilística antecipatória, introduzindo personagens e conceitos que só serão revelados nos parágrafos finais.", isCorrect: false, distractorRationale: "Catáfora aponta para o que vem depois; os sintagmas retomam o que já foi dito antes (anáfora)." },
      { id: "c", text: "repetição tautológica viciosa, evidenciando escassez de vocabulário do redator acadêmico.", isCorrect: false, distractorRationale: "O recurso enriquece a coesão sem redundância viciosa, empregando sinônimos e qualificadores precisos." },
      { id: "d", text: "ambiguidade sintática culposa, impedindo a correlação unívoca entre o cientista e sua teoria formulada.", isCorrect: false, distractorRationale: "A referência é límpida e inequívoca: 'Esse médico' refere-se a Edward Jenner." },
      { id: "e", text: "elipse verbal radical, suprimindo o núcleo do predicado das orações subordinadas.", isCorrect: false, distractorRationale: "Não há elipse verbal; há substituição e retomada nominal explícita." }
    ],
    detailedExplanation: {
      summary: "A anáfora retoma termos antecedentes por meio de demonstrativos e termos genéricos/hiperônimos para manter a clareza do texto.",
      stepByStep: [
        "'Esse médico britânico' retoma o antecedente específico 'Edward Jenner', agregando sua profissão e nacionalidade sem repetir o nome próprio.",
        "'Tal descoberta' sumariza anadiforicamente todo o fato narrado na primeira frase sobre a imunidade das ordenhadoras.",
        "Mecanismos de coesão referencial por anáfora são essenciais tanto para a prova de Linguagens quanto para a Competência 4 da Redação Nota 1000."
      ],
      coreConcept: "Coesão Referencial Anafórica e Hiperonímia",
      trapWarning: "Anáfora olha para trás (retoma); catáfora olha para a frente (antecipa: 'Desejo apenas isto: sua aprovação')."
    },
    commonTraps: ["confundir anáfora com catáfora", "confundir substituição lexical com redundância"],
    tags: ["coesao", "anafora", "hiperonimia", "progressao tematica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-007",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Recursos Linguísticos",
    subtopic: "Operadores Argumentativos de Oposição e Concessão",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as duas reformulações argumentativas sobre o uso de inteligência artificial em diagnósticos médicos:\n\nEnunciado 1: 'Os algoritmos de inteligência artificial aumentam a precisão na detecção precoce de lesões malignas, mas a decisão terapêutica final deve permanecer sob a responsabilidade ética do médico humano.'\n\nEnunciado 2: 'Embora a decisão terapêutica final deva permanecer sob a responsabilidade ética do médico humano, os algoritmos de inteligência artificial aumentam a precisão na detecção precoce de lesões malignas.'",
      source: "Bioética & Inteligência Artificial (adaptado)."
    },
    prompt: "A comparação entre os dois enunciados revela que a alternância entre a conjunção adversativa ('mas') e a conjunção concessiva ('embora') altera a orientação argumentativa do discurso porque:",
    options: [
      { id: "a", text: "o conector adversativo confere força conclusiva principal à oração por ele introduzida, enquanto o concessivo subordina o argumento a uma tese que prevalece na oração principal.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ambos os conectores expressam rigorosamente a mesma hierarquia discursiva sem nenhuma modificação de foco persuasivo.", isCorrect: false, distractorRationale: "O foco argumentativo muda radicalmente entre os dois enunciados: no 1 foca-se no médico; no 2 foca-se na tecnologia." },
      { id: "c", text: "o uso de 'mas' estabelece uma relação de causa e consequência cronológica entre o exame e a consulta clínica.", isCorrect: false, distractorRationale: "'Mas' é conjunção adversativa de oposição/contraste, não consecutiva ou causal." },
      { id: "d", text: "o conector 'embora' anula a veracidade empírica da oração que encabeça, tratando a ética médica como ilusão.", isCorrect: false, distractorRationale: "A oração concessiva admite um fato como verdadeiro e real, apenas retira-lhe a força de impedir a conclusão da oração principal." },
      { id: "e", text: "a conjunção 'mas' é classificada como marca exclusiva da linguagem coloquial imprópria para a redação dissertativa.", isCorrect: false, distractorRationale: "'Mas' é plenamente legítimo e padrão na norma culta escrita." }
    ],
    detailedExplanation: {
      summary: "Na oposição adversativa (mas), o argumento introduzido é o mais forte; na concessão (embora), o argumento forte é o da oração principal.",
      stepByStep: [
        "No Enunciado 1: a oração introduzida por 'mas' tem maior peso argumentativo; o texto conclui em defesa do papel soberano do médico.",
        "No Enunciado 2: 'embora' introduz um argumento vencido (concessão); o argumento com força resolutiva final é o da oração principal ('a IA aumenta a precisão').",
        "Operadores argumentativos orientam os caminhos interpretativos do leitor (teoria de Oswald Ducrot e Koch)."
      ],
      coreConcept: "Hierarquia Argumentativa: Adversativas versus Concessivas",
      trapWarning: "Lembre-se: aquilo que vem depois do 'mas' é a conclusão que o autor quer que o leitor guarde na memória."
    },
    commonTraps: ["achar que adversativa e concessiva têm o mesmo efeito de sentido", "ignorar a força da oração principal"],
    tags: ["operadores argumentativos", "adversativa", "concessiva", "coesao sequencial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-008",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Recursos Linguísticos",
    subtopic: "Regência Verbal e Sentido Contextual",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as seguintes construções oracionais presentes em documentos jurídicos e hospitalares:\n\nI. A equipe médica de emergência assistiu o paciente politraumatizado durante toda a madrugada.\nII. É dever indeclinável de todo cidadão consciente assistir às sessões públicas de prestação de contas na câmara municipal.\nIII. O direito à ampla defesa e ao contraditório assiste a qualquer acusado no Estado Democrático de Direito.",
      source: "Manual de Redação Forense e Médica (adaptado)."
    },
    prompt: "No que concerne à regência do verbo 'assistir' nos três períodos de acordo com a norma-padrão da língua, seus significados contextuais são, respectivamente:",
    options: [
      { id: "a", text: "prestar auxílio/socorrer; presenciar/ver como espectador; caber/competir como prerrogativa.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "presenciar/ver; morar/residir; conceder aposentadoria remunerada.", isCorrect: false, distractorRationale: "O sentido no item I é cuidar/socorrer; no item III é pertencer/caber por direito." },
      { id: "c", text: "julgar penalmente; ignorar intencionalmente; vetar legalmente.", isCorrect: false, distractorRationale: "Nenhum desses sentidos corresponde ao verbo 'assistir'." },
      { id: "d", text: "operar cirurgicamente; filmar em vídeo de alta definição; transferir renda.", isCorrect: false, distractorRationale: "Interpretações desprovidas de suporte léxico-semântico." },
      { id: "e", text: "residir com endereço fixo; contratar funcionários; pagar tributos atrasados.", isCorrect: false, distractorRationale: "'Assistir' com sentido de residir é intransitivo com preposição 'em' (ex: assiste em Brasília)." }
    ],
    detailedExplanation: {
      summary: "O verbo 'assistir' muda de sentido dependendo de sua transitividade: direto (socorrer), indireto com 'a' (presenciar ou caber por direito).",
      stepByStep: [
        "Em I: 'assistir o paciente' (transitivo direto) = prestar socorro, cuidar, dar assistência médica.",
        "Em II: 'assistir às sessões' (transitivo indireto com crase/preposição 'a') = ver, testemunhar, presenciar.",
        "Em III: 'assiste a qualquer acusado' (transitivo indireto) = cabe, pertence, é de competência.",
        "A variação na regência preposicional altera diretamente o significado pretendido na comunicação formal."
      ],
      coreConcept: "Polissemia da Regência Verbal na Norma Padrão",
      trapWarning: "No dia a dia oral é comum falar 'assistir o filme', mas na norma culta cobrada no ENEM o sentido de presenciar exige preposição: 'assistir ao filme'."
    },
    commonTraps: ["tratar todas as regências de assistir como idênticas", "ignorar a regência de caber/competir"],
    tags: ["regencia verbal", "norma culta", "sentido contextual", "semantica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-009",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Recursos Linguísticos",
    subtopic: "Ocorrência do Sinal Indicativo de Crase",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere os dois pares de frases abaixo retirados de guias de comunicação corporativa:\n\nPar 1:\nFrase A: O perito técnico cheirou a substância química no laboratório.\nFrase B: A sala de reuniões cheirava à substância química vazada do duto.\n\nPar 2:\nFrase C: O estudante procedeu à análise dos dados estatísticos do simulado.\nFrase D: O coordenador pedagógico dirigiu-se a uma sala de estudos vazia.",
      source: "Manual de Práticas Redacionais do ENEM."
    },
    prompt: "A análise do emprego ou ausência do acento grave indicador de crase nas frases apresentadas evidencia que:",
    options: [
      { id: "a", text: "em C a crase é obrigatória pela fusão da preposição exigida pelo verbo transitivo indireto com o artigo definido feminino, enquanto em D a crase é vedada diante do artigo indefinido 'uma'.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o acento grave em C é facultativo por se tratar de substantivo abstrato iniciado por vogal temática.", isCorrect: false, distractorRationale: "A regência de 'proceder' (no sentido de iniciar/fazer) exige preposição 'a' obrigatória antes de substantivo feminino determinado por 'a': 'à análise'." },
      { id: "c", text: "em D o acento grave deveria ter sido obrigatoriamente empregado em decorrência da locução adverbial de modo.", isCorrect: false, distractorRationale: "Nunca ocorre crase antes de artigo indefinido ('a uma'); há apenas a preposição simples 'a'." },
      { id: "d", text: "as frases A e B possuem exatamente o mesmo significado sintático sem alteração no papel do sujeito.", isCorrect: false, distractorRationale: "Em A o perito inala o aroma (objeto direto); em B a sala exala o odor (locução prepositiva)." },
      { id: "e", text: "o sinal indicativo de crase foi abolido pelo Novo Acordo Ortográfico em todas as orações subordinadas.", isCorrect: false, distractorRationale: "O Novo Acordo Ortográfico não aboliu nem alterou as regras sintáticas de ocorrência da crase." }
    ],
    detailedExplanation: {
      summary: "A crase resulta da fusão de preposição 'a' com artigo definido 'a'; não ocorre crase antes do artigo indefinido 'uma'.",
      stepByStep: [
        "O verbo 'proceder' (no sentido de realizar) rege a preposição 'a' (proceder a algo). Como 'análise' é palavra feminina antecedida de artigo 'a', ocorre crase obrigatória: proceder à análise.",
        "O verbo 'dirigir-se' rege preposição 'a' (dirigir-se a algum lugar), porém diante do artigo indefinido 'uma' não há artigo definido 'a'; portanto, a crase é proibida: dirigiu-se a uma sala.",
        "Identificar os fatores condicionantes da crase é fundamental para evitar descontos na Competência 1 do ENEM."
      ],
      coreConcept: "Condições Sintáticas de Ocorrência e Proibição da Crase",
      trapWarning: "Crase nunca ocorre antes de palavras masculinas, verbos no infinitivo e artigos indefinidos (um/uma)."
    },
    commonTraps: ["colocar crase antes de artigo indefinido 'uma'", "confundir crase obrigatória com facultativa"],
    tags: ["crase", "regencia", "norma padrao", "gramatica aplicada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-010",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Variação Linguística",
    subtopic: "Preconceito Linguístico e Diversidade",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Não existe nenhuma justificativa de ordem linguística, científica ou pedagógica para desqualificar as falas regionais e populares como 'erradas' ou 'mutiladas'. A língua é um organismo vivo, heterogêneo e dinâmico, cujas variações geográficas, etárias e sociais refletem a imensa riqueza cultural de uma sociedade. O julgamento negativo sobre certos usos não decorre da gramática da língua, mas de um preconceito social mascarado de zelo gramatical.",
      source: "Marcos Bagno, Preconceito Linguístico: O que é, como se faz. São Paulo: Parábola Editorial (adaptado)."
    },
    prompt: "Com base na perspectiva sociolinguística adotada na Matriz de Referência do ENEM, a discriminação dirigida a falantes de variantes de menor prestígio social caracteriza-se como:",
    options: [
      { id: "a", text: "uma manifestação de preconceito linguístico que reproduz assimetrias e exclusões sociais sob o pretexto de correção normativa.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "um mecanismo científico legítimo indispensável para erradicar gírias populares e uniformizar a fala de todas as regiões.", isCorrect: false, distractorRationale: "A linguística moderna comprova que a variação é inerente a qualquer língua natural viva e não deve ser reprimida." },
      { id: "c", text: "uma prova cabal de que a norma-padrão foi inventada exclusivamente por povos de outros continentes sem contato com o Brasil.", isCorrect: false, distractorRationale: "A norma-padrão brasileira possui tradição histórica documentada no país e é um patrimônio compartilhado." },
      { id: "d", text: "uma exigência legal do Ministério da Educação para reprovar candidatos que utilizem termos de matriz africana ou indígena.", isCorrect: false, distractorRationale: "O MEC e o ENEM valorizam a pluralidade e a matriz afro-indígena formadora do português brasileiro." },
      { id: "e", text: "uma consequência biológica direta da capacidade de articulação fonética diferenciada de grupos populacionais.", isCorrect: false, distractorRationale: "Não há determinismo biológico ou genético na fala; as variações são socioculturais e históricas." }
    ],
    detailedExplanation: {
      summary: "O preconceito linguístico estigmatiza formas populares e regionais para legitimar a exclusão socioeconômica de seus falantes.",
      stepByStep: [
        "A sociolinguística demonstra que todas as variedades linguísticas possuem gramática interna consistente e plena eficácia comunicativa.",
        "Classificar certas falas (como a caipira, a nordestina ou das periferias urbanas) como 'português errado' é transferir o preconceito contra a classe social do falante para a forma como ele fala.",
        "O papel da escola e da prova de Linguagens do ENEM não é condenar as variantes, mas garantir o domínio da norma-padrão formal como ferramenta de cidadania, respeitando a diversidade.",
        "O conceito de 'adequação linguística' substitui o binarismo raso de 'certo versus errado'."
      ],
      coreConcept: "Preconceito Linguístico e Adequação Sociolinguística",
      trapWarning: "No ENEM, variação linguística NUNCA é classificada como erro gramatical da fala, mas sim como fenômeno legítimo de adequação e diversidade."
    },
    commonTraps: ["considerar variação regional como erro", "confundir norma de prestígio com verdade absoluta biológica"],
    tags: ["variacao linguistica", "preconceito linguistico", "marcos bagno", "sociolinguistica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-011",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Variação Linguística",
    subtopic: "Variação Diatópica (Regional) e a Diversidade Lexical Brasileira",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O português falado no Brasil apresenta uma fascinante pluralidade vocabular de acordo com a região geográfica dos falantes. O mesmo tubérculo comestível é denominado 'aipim' no Rio de Janeiro, 'mandioca' em São Paulo e 'macaxeira' em grande parte do Nordeste; a fruta cítrica com gomos fáceis de descascar é chamada de 'mexerica' no Centro-Oeste e Minas Gerais, 'bergamota' no Rio Grande do Sul e 'tangerina' no Sudeste litorâneo; e o refresco congelado em saquinhos plásticos recebe nomes como 'sacolé', 'dindin', 'chup-chup' e 'geladinho'.",
      source: "Atlas Linguístico do Brasil (ALiB), Estudos Dialetológicos, 2024."
    },
    prompt: "Essa multiplicidade de denominações para um mesmo referente concreto ilustra a variação diatópica (geográfica), cuja existência evidencia:",
    options: [
      { id: "a", text: "a vitalidade cultural e a riqueza dialetal do português brasileiro, moldadas pela extensão territorial continental, pelos fluxos de povoamento histórico e pelo contato com matrizes indígenas e africanas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a urgência de uma lei federal que unifique compulsoriamente os nomes de alimentos em um único vocabulário oficial imposto por decreto.", isCorrect: false, distractorRationale: "A linguística moderna refuta imposições puristas artificiais que tentam sufocar a diversidade regional legítima." },
      { id: "c", text: "o desconhecimento completo do significado dos termos pelos habitantes das capitais estaduais.", isCorrect: false, distractorRationale: "Os falantes dominam com precisão os termos de sua comunidade linguística e comunicam-se perfeitamente." },
      { id: "d", text: "a fragmentação da língua portuguesa em dez idiomas estrangeiros completamente incompreensíveis entre si.", isCorrect: false, distractorRationale: "O português mantém unidade estrutural morfossintática plena em todo o território nacional." },
      { id: "e", text: "que somente uma das formas regionais é correta e que todas as demais são erros gramaticais graves.", isCorrect: false, distractorRationale: "Todas as variantes regionais são igualmente válidas, legítimas e gramaticalmente consagradas." }
    ],
    detailedExplanation: {
      summary: "A variação diatópica ou regional (geolinguística) atesta a pluralidade da identidade nacional. Nenhum termo é 'mais correto' que outro; aipim, macaxeira e mandioca são variantes legítimas de um patrimônio comum.",
      stepByStep: [
        "Variação diatópica: Variação que decorre do espaço geográfico (dialetos regionais, sotaques e vocabulário local).",
        "Formação histórica: Diferentes ritmos de colonização, contato com diferentes povos originários (tupis, macro-jê) e povos africanos (iorubás, bantos).",
        "Posicionamento do ENEM: O exame valoriza o Atlas Linguístico do Brasil (ALiB) e condena qualquer hierarquização preconceituosa entre as falas do Norte, Sul, Nordeste ou Sudeste."
      ],
      coreConcept: "Variação Diatópica: Diversidade Lexical Regional e Patrimônio Imaterial",
      trapWarning: "No ENEM, jamais escolha opções que defendam 'unificar' ou 'padronizar à força' a fala dos brasileiros ou que classifiquem termos regionais como gírias passageiras inferiores."
    },
    commonTraps: [
      "Eleger uma região como 'dona da pronúncia ou vocabulário correto'",
      "Confundir variação regional (diatópica) com variação histórica (diacrônica)"
    ],
    tags: ["variacao-diatopica", "dialetos", "lexico", "diversidade-cultural"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-012",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Variação Linguística",
    subtopic: "Variação Diacrônica (Histórica) e a Dinâmica Temporal da Língua",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao longo de séculos de história da língua portuguesa, a forma de tratamento respeitosa 'Vossa Mercê', utilizada na corte renascentista, sofreu sucessivos processos de desgaste fonético e encurtamento impulsionados pela rapidez da fala oral: 'Vossa Mercê' ⟹ 'Vossemecê' ⟹ 'Vosmecê' ⟹ 'Você' ⟹ 'Cê'. Fenômeno análogo de mudança diacrônica ocorreu na ortografia com a simplificação de dígrafos arcaicos de étimo grego (como 'pharmácia' ⟹ 'farmácia' e 'orthographia' ⟹ 'ortografia').",
      source: "História Social da Língua Portuguesa no Brasil, 2024."
    },
    prompt: "A trajetória histórica de evolução de 'Vossa Mercê' para o pronome contemporâneo 'você' demonstra que:",
    options: [
      { id: "a", text: "a língua é um sistema histórico dinâmico e flexível que se transforma no tempo (variação diacrônica), impulsionado pelas necessidades de economia fônica e expressividade dos falantes reais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o português falado hoje é uma versão corrompida e decadente que perdeu toda a sua nobreza e dignidade gramatical.", isCorrect: false, distractorRationale: "A linguística não adota noções morais de 'decadência'; a mudança linguística é natural e inerente a todas as línguas vivas." },
      { id: "c", text: "os falantes contemporâneos são incapazes de aprender a norma-padrão da escrita formal.", isCorrect: false, distractorRationale: "A mudança do pronome ocorreu em todas as classes sociais ao longo dos séculos e consolidou-se na norma-padrão brasileira." },
      { id: "d", text: "a ortografia oficial de uma língua nunca sofreu qualquer modificação desde o surgimento do latim.", isCorrect: false, distractorRationale: "O texto demonstra justamente que reformas ortográficas sucessivas acompanharam as mudanças temporais." },
      { id: "e", text: "o termo 'você' deve ser banido de romances e conversas cotidianas por não constar nos textos medievais.", isCorrect: false, distractorRationale: "As línguas não são fósseis intocáveis; servem à vida prática e à comunicação dos sujeitos contemporâneos." }
    ],
    detailedExplanation: {
      summary: "A variação diacrônica comprova que as línguas não são estátuas de mármore imutáveis: com o passar dos séculos, palavras mudam de som, significado e função sintática (processo de gramaticalização).",
      stepByStep: [
        "Variação diacrônica (temporal): A passagem do tempo transforma fonemas, léxico e estruturas gramaticais.",
        "Princípio da economia linguística: Termos de alta frequência no discurso cotidiano tendem ao encurtamento articulatório.",
        "Trajetória de 'você': Expressão nominal nobre de tratamento que se transformou em pronome pessoal de segunda pessoa do discurso com concordância em terceira pessoa."
      ],
      coreConcept: "Variação Diacrônica: Transformação Histórica da Língua e Economia Fonética",
      trapWarning: "No ENEM, encare a mudança histórica da língua com naturalidade científica: nenhuma língua viva para no tempo; línguas que não mudam são línguas mortas (como o latim clássico)."
    },
    commonTraps: [
      "Tratar a evolução linguística como 'degeneração' ou 'corrupção' da língua",
      "Confundir variação diacrônica (ao longo do tempo) com variação sincrônica (no mesmo momento histórico)"
    ],
    tags: ["variacao-diacronica", "historia-da-lingua", "gramaticalizacao", "evolucao-linguistica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-013",
    area: "linguagens",
    competence: 8,
    skill: 27,
    topic: "Variação Linguística",
    subtopic: "Variação Diafásica (Estilística) e o Conceito de Adequação Linguística",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Um jovem candidato formado em Direito comparece a uma entrevista de emprego em um renomado escritório de advocacia e expressa-se com formalidade, vocabulário técnico e respeito às regras gramaticais da norma-padrão. À noite, reunido em uma pizzaria com seus amigos mais íntimos de infância, o mesmo jovem utiliza gírias coloquiais, termos abreviados e construções frasais típicas da oralidade descontraída.",
      source: "Manual de Sociolinguística Aplicada ao Ensino, 2024."
    },
    prompt: "O comportamento linguístico do jovem advogado é um exemplo de variação diafásica (estilística ou situacional), demonstrando que o domínio da competência comunicativa consiste em:",
    options: [
      { id: "a", text: "saber adequar o nível de linguagem (formal, informal, técnico ou coloquial) ao contexto sociocomunicativo, aos propósitos da interação e ao perfil dos interlocutores.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "falar obrigatoriamente de maneira rebuscada e arcaica em todos os momentos da vida cotidiana, inclusive com familiares e amigos.", isCorrect: false, distractorRationale: "Falar com rebuscamento artificial em um encontro informal configura inadequação linguística e pedantismo." },
      { id: "c", text: "usar gírias de internet em petições judiciais e audiências com magistrados para demonstrar modernidade.", isCorrect: false, distractorRationale: "O ambiente jurídico exige o registro formal padrão culto." },
      { id: "d", text: "comprovar que a norma-padrão da língua não possui nenhuma utilidade na vida profissional.", isCorrect: false, distractorRationale: "A norma-padrão é essencial na esfera profissional, acadêmica e jurídica." },
      { id: "e", text: "restringir a comunicação humana exclusivamente à linguagem corporal de mímica.", isCorrect: false, distractorRationale: "O exemplo trata do uso versátil da linguagem verbal falada." }
    ],
    detailedExplanation: {
      summary: "A variação diafásica rege a adequação estilística. A língua é como uma roupa: ninguém vai a um casamento de terno e gravata à praia, nem de sunga a uma audiência com o juiz. A competência linguística madura não é falar sempre formalmente, mas saber alternar o registro conforme a ocasião.",
      stepByStep: [
        "Registro formal: Adequado a situações solenes, vestibulares, entrevistas de emprego e documentos jurídicos.",
        "Registro informal/coloquial: Adequado a bate-papos familiares, redes sociais privadas e conversas espontâneas.",
        "Substituição de paradigma no ENEM: Sai o conceito moral e ingênuo de 'certo versus errado', entra o critério científico de 'adequado versus inadequado ao contexto'."
      ],
      coreConcept: "Variação Diafásica: Registro Formal vs. Coloquial e Adequação Contextual",
      trapWarning: "Esta é a regra fundamental da prova de Linguagens do ENEM: falar gíria com amigos NÃO é erro, é ADEQUADO; usar gíria na redação dissertativa-argumentativa é INADEQUADO."
    },
    commonTraps: [
      "Achar que existe um único jeito 'certo' de falar para todas as ocasiões da vida",
      "Confundir inadequação situacional com incapacidade cognitiva do falante"
    ],
    tags: ["variacao-diafasica", "adequacao-linguistica", "registro-formal", "coloquialismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-014",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Recursos da Língua",
    subtopic: "Ambiguidade: Efeito Persuasivo na Publicidade vs. Vício de Linguagem",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha publicitária governamental de incentivo à doação de sangue, lê-se o slogan em letras garrafais acompanhado da foto de um coração estilizado: 'DOE SANGUE. MOSTRE QUE VOCÊ TEM UM BOM CORAÇÃO'. Já em uma notícia de trânsito em um jornal local, constava o seguinte título redigido de forma desatenta: 'O policial perseguiu o suspeito em seu carro'.",
      source: "Comunicação Social e Práticas de Linguagem, 2024."
    },
    prompt: "Ao confrontar os dois usos da ambiguidade (duplo sentido), constata-se que, enquanto no slogan da campanha ela opera como um recurso expressivo persuasivo, no título da notícia ela configura um vício de linguagem porque:",
    options: [
      { id: "a", text: "no anúncio a duplicidade de sentido (coração físico saudável / pessoa generosa) atrai o leitor e reforça o apelo solidário, enquanto na notícia o pronome possessivo ambíguo prejudica a clareza informativa, impedindo saber de quem era o carro.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "nos dois casos a ambiguidade é um erro gramatical intolerável que anula completamente a comunicação.", isCorrect: false, distractorRationale: "Na publicidade, a ambiguidade voluntária é um recurso poético e persuasivo amplamente valorizado." },
      { id: "c", text: "no anúncio publicitário a palavra 'sangue' não possui nenhum significado biológico real.", isCorrect: false, distractorRationale: "A doação é de sangue biológico real indispensável a transfusões hospitalares." },
      { id: "d", text: "o título da notícia deixa perfeitamente explícito que o veículo pertencia à prefeitura municipal.", isCorrect: false, distractorRationale: "O título não informa isso; a ambiguidade de 'seu carro' (do policial ou do suspeito?) gera ruído na mensagem." },
      { id: "e", text: "a publicidade proíbe o uso de trocadilhos e metáforas sob pena de advertência legal.", isCorrect: false, distractorRationale: "Trocadilhos e polissemia são as ferramentas retóricas mais frequentes na publicidade." }
    ],
    detailedExplanation: {
      summary: "A ambiguidade pode ser intencional (recurso estilístico enriquecedor na arte e na publicidade) ou não intencional (vício de linguagem sintático que prejudica a clareza no texto jornalístico e referencial).",
      stepByStep: [
        "Ambiguidade polissêmica intencional no slogan: 'Ter bom coração' = 1) ter saúde cardiovascular apta para doar; 2) ser altruísta e bondoso. Essa duplicidade enriquece a mensagem.",
        "Ambiguidade estrutural defeituosa na notícia: 'O policial perseguiu o suspeito em seu carro' ⟹ o pronome 'seu' pode se referir tanto ao sujeito (policial) quanto ao objeto (suspeito), gerando dúvida prejudicial à informação factual jornalística."
      ],
      coreConcept: "Ambiguidade Intencional (Polissemia Persuasiva) vs. Ambiguidade Sintática Viciosa",
      trapWarning: "No ENEM, valorize a intenção comunicativa do gênero textual: o que é defeito em uma notícia ou laudo técnico (duplo sentido involuntário) pode ser a grande sacada genial de um anúncio publicitário ou poema!"
    },
    commonTraps: [
      "Condenar qualquer tipo de duplo sentido como se fosse sempre um 'erro'",
      "Não perceber a dubiedade gerada por pronomes possessivos de terceira pessoa ('seu/sua')"
    ],
    tags: ["ambiguidade", "duplo-sentido", "publicidade", "vicios-de-linguagem", "polissemia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-015",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Recursos da Língua",
    subtopic: "Operadores Argumentativos: Conectivos Concessivos vs. Adversativos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a análise semântica e argumentativa dos dois períodos a seguir extraídos de editoriais de debate político:\n\nTexto 1: 'O projeto de lei traz avanços importantes para a preservação ambiental, MAS impõe custos tributários excessivos que asfixiam a competitividade das pequenas empresas locais.'\n\nTexto 2: 'EMBORA imponha custos tributários adicionais às pequenas empresas locais, o projeto de lei traz avanços fundamentais e inadiáveis para a preservação ambiental.'",
      source: "Práticas de Coesão Textual e Argumentação no ENEM, 2024."
    },
    prompt: "Embora ambos os períodos mencionem os mesmos dois fatos (avanços ecológicos e custos tributários), a escolha dos operadores argumentativos 'mas' (adversativo) e 'embora' (concessivo) produz efeitos persuasivos opostos porque:",
    options: [
      { id: "a", text: "o conectivo adversativo 'mas' confere maior força discursiva ao argumento que o sucede (a crítica aos custos), orientando para a rejeição do projeto; já o concessivo 'embora' rebaixa os custos a uma ressalva secundária, sustentando a defesa da aprovação da lei.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ambos os conectivos possuem rigorosamente o mesmo valor gramatical e produzem exatamente a mesma orientação argumentativa conclusiva.", isCorrect: false, distractorRationale: "A adversidade direciona para o segundo argumento, enquanto a concessão subordina e enfraquece o argumento concessivo em favor da oração principal." },
      { id: "c", text: "o conectivo 'mas' expressa causa e efeito cronológico, enquanto 'embora' expressa conformidade com a Constituição.", isCorrect: false, distractorRationale: "'Mas' é conjunção coordenativa adversativa; 'embora' é subordinativa concessiva." },
      { id: "d", text: "no Texto 1 o autor é terminantemente favorável ao projeto e no Texto 2 é frontalmente contrário.", isCorrect: false, distractorRationale: "É o exato inverso: o Texto 1 ataca o projeto pelo custo; o Texto 2 defende o projeto apesar do custo." },
      { id: "e", text: "o uso de conjunções é considerado um erro gramatical que deve ser evitado em qualquer redação dissertativa.", isCorrect: false, distractorRationale: "Os operadores argumentativos são os elementos centrais avaliados na Competência 4 da Redação do ENEM." }
    ],
    detailedExplanation: {
      summary: "Oswald Ducrot e a Semântica Argumentativa demonstram que conectivos não servem apenas para ligar frases, mas direcionam o ponto de vista do leitor: a oração introduzida por 'mas' prevalece sobre a anterior; a oração introduzida por 'embora' é admitida, mas derrotada pelo argumento principal.",
      stepByStep: [
        "Estrutura com 'MAS' (A, mas B): O locutor concede A, mas dá o golpe final em B. Conclusão direcionada para B (crítica aos custos).",
        "Estrutura com 'EMBORA' (Embora B, A): O locutor reconhece B como obstáculo menor, mas reafirma a força imperativa de A. Conclusão direcionada para A (aprovação ambiental).",
        "Relevância na Redação Nota 1000: O domínio dos conectivos de oposição (adversativos vs. concessivos) é decisivo para construir contra-argumentações consistentes."
      ],
      coreConcept: "Operadores Argumentativos: Força Discursiva da Adversidade versus Concessão",
      trapWarning: "Lembre-se da regra de ouro: quem manda no 'mas' é quem vem DEPOIS dele; quem manda no 'embora' é a oração PRINCIPAL que vem fora dele!"
    },
    commonTraps: [
      "Achar que conectivos concessivos e adversativos têm o mesmo peso argumentativo",
      "Não perceber qual argumento sai vitorioso na hierarquia do parágrafo"
    ],
    tags: ["operadores-argumentativos", "conjuncoes", "adversativas", "concessivas", "coesao-textual"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-016",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Recursos da Língua",
    subtopic: "Intertextualidade: Paródia vs. Paráfrase na 'Canção do Exílio'",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o diálogo intertextual entre o célebre poema romântico de Gonçalves Dias e a recriação modernista de Oswald de Andrade:\n\nTexto 1 (Gonçalves Dias, 1843):\n'Minha terra tem palmeiras,\nOnde canta o Sabiá;\nAs aves, que aqui gorjeiam,\nNão gorjeiam como lá.'\n\nTexto 2 (Oswald de Andrade, 1925 - 'Canto de Regresso à Pátria'):\n'Minha terra tem palmares\nOnde gorjeia o mar\nOs passarinhos daqui\nNão cantam como os de lá.'",
      source: "Diálogos da Poesia Brasileira, Estudos Literários, 2024."
    },
    prompt: "A substituição de 'palmeiras' por 'palmares' e o tom coloquial adotado por Oswald de Andrade configuram um procedimento de intertextualidade classificado como:",
    options: [
      { id: "a", text: "paródia, pois subverte o lirismo ufanista e idealizado do texto-fonte original para introduzir uma reflexão crítica de valorização da história e da resistência afro-brasileira.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "paráfrase servil, que repete com exatidão religiosa as mesmas ideias românticas ufanistas do século XIX sem nenhuma inovação de sentido.", isCorrect: false, distractorRationale: "A paráfrase confirma o sentido original; o poema de Oswald altera profundamente o sentido ao trocar 'palmeiras' por 'palmares'." },
      { id: "c", text: "plágio criminoso motivado pela falta de criatividade poética do autor modernista.", isCorrect: false, distractorRationale: "Oswald faz uma citação intertextual culta e deliberada, recurso legítimo e consagrado da arte moderna." },
      { id: "d", text: "tradução literal de um soneto renascentista inglês.", isCorrect: false, distractorRationale: "Ambos os textos foram escritos originalmente em língua portuguesa por poetas brasileiros." },
      { id: "e", text: "rejeição de qualquer menção à natureza e ao território nacional.", isCorrect: false, distractorRationale: "A natureza brasileira segue mencionada (mar, passarinhos), porém ressignificada pela lente modernista." }
    ],
    detailedExplanation: {
      summary: "A paródia é a intertextualidade que subverte, satiriza ou desconstrói o texto original. Ao trocar 'palmeiras' (paisagem romântica idealizada de cartão-postal) por 'palmares' (o Quilombo dos Palmares, símbolo máximo da resistência negra contra a opressão escravista), Oswald reescreve a própria identidade do Brasil.",
      stepByStep: [
        "Paráfrase: Diz o mesmo com outras palavras, reafirmando e confirmando a tese do texto original.",
        "Paródia: Retoma a estrutura formal do texto original para inverter, questionar, criticar ou produzir efeito humorístico.",
        "Significado histórico de 'palmares': Inserção do protagonismo e da memória negra no coração da poesia nacional, desmistificando o ufanismo ingênuo do Primeiro Romantismo."
      ],
      coreConcept: "Intertextualidade Crítica: Paródia vs. Paráfrase e a Desconstrução do Nacionalismo Romântico",
      trapWarning: "No ENEM, memorize: PARÁFRASE = confirma e apoia o texto original; PARÓDIA = subverte, critica ou faz rir com base no texto original!"
    },
    commonTraps: [
      "Confundir paródia (ruptura/crítica) com paráfrase (reafirmação de sentido)",
      "Não perceber a alusão política e histórica à palavra 'Palmares' (quilombo)"
    ],
    tags: ["intertextualidade", "parodia", "parafrase", "cancao-do-exilio", "oswald-de-andrade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-017",
    area: "linguagens",
    competence: 6,
    skill: 19,
    topic: "Recursos da Língua",
    subtopic: "Polissemia: Denotação vs. Conotação na Linguagem Midiática",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a ocorrência da palavra 'nó' em duas situações distintas de uso da língua:\n\nEnunciado 1: 'O marinheiro experiente deu um nó cego reforçado na corda de ancoragem para prender o barco ao cais.'\n\nEnunciado 2: 'A escalada repentina das taxas de juros mundiais deu um nó no orçamento das famílias de baixa renda e nos planos da equipe econômica.'",
      source: "Semântica do Português Contemporâneo, 2024."
    },
    prompt: "A respeito dos planos de significação da palavra 'nó' nos enunciados apresentados, é correto afirmar que:",
    options: [
      { id: "a", text: "no Enunciado 1 o vocábulo é empregado em sentido denotativo (literal, objetivo), enquanto no Enunciado 2 assume sentido conotativo (figurado, metafórico), designando um embaraço financeiro de difícil resolução.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "nos dois enunciados a palavra possui valor estritamente físico-mecânico de entrelaçamento de fibras têxteis de cordas.", isCorrect: false, distractorRationale: "No orçamento familiar não existem cordas físicas têxteis; trata-se de metáfora para dificuldade financeira." },
      { id: "c", text: "no Enunciado 1 o uso é conotativo poético e no Enunciado 2 é uma definição científica da física dos sólidos.", isCorrect: false, distractorRationale: "No Enunciado 1 o uso é literal (dar nó na corda), que é a definição denotativa da palavra." },
      { id: "d", text: "a palavra 'nó' no Enunciado 2 caracteriza um erro de regência verbal condenado pelos dicionários.", isCorrect: false, distractorRationale: "A linguagem figurada em expressões idiomáticas é perfeitamente legítima e enriquecedora." },
      { id: "e", text: "em nenhuma das orações a palavra possui significado inteligível para a língua portuguesa.", isCorrect: false, distractorRationale: "A palavra é de uso comum e consagrado em ambos os registros." }
    ],
    detailedExplanation: {
      summary: "Denotação é o sentido básico, de dicionário, literal (D de Dicionário). Conotação é o sentido figurado, criativo, metafórico (C de Criatividade/Coração).",
      stepByStep: [
        "Enunciado 1: Nó na corda = denotação (objeto concreto, laço apertado em um cabo).",
        "Enunciado 2: Nó no orçamento = conotação (situação embaraçosa, complicação, aperto de contas que não fecham).",
        "Polissemia: Uma mesma palavra acumula múltiplos sentidos potenciais que são ativados conforme o contexto do enunciado."
      ],
      coreConcept: "Denotação (Sentido Literal) versus Conotação (Sentido Figurado) e Polissemia",
      trapWarning: "Dica mnemônica infalível para o ENEM: D-enotação = D-icionário (literal); C-onotação = C-ontexto / C-riatividade (figurado)."
    },
    commonTraps: [
      "Inverter denotação e conotação na identificação das alternativas",
      "Achar que o sentido conotativo só existe em poesias e não na imprensa econômica diária"
    ],
    tags: ["denotacao", "conotacao", "polissemia", "sentido-figurado", "semantica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-018",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Recursos da Língua",
    subtopic: "Marcadores Conversacionais e a Organização do Discurso Oral",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a transcrição fidedigna de um trecho de entrevista oral realizada com uma estudante universitária:\n\n'Olha só, quando eu entrei no laboratório de pesquisa, né, eu ficava meio perdida... aí o professor orientador sentou comigo e falou, tipo assim, que a gente precisava organizar o cronograma passo a passo, entende? Daí as coisas começaram a fluir...'",
      source: "Corpus de Português Oral Culto Urbano (Projeto NURC), 2024."
    },
    prompt: "Na perspectiva da linguística textual e dos estudos da oralidade, termos como 'olha só', 'né', 'aí', 'tipo assim' e 'entende?' não devem ser julgados meramente como 'erros ou defeitos da fala', porque exercem a função discursiva de:",
    options: [
      { id: "a", text: "marcadores conversacionais indispensáveis na interação face a face para encadear ideias, negociar a atenção do interlocutor, verificar a compreensão e dar tempo para o planejamento cognitivo do discurso em tempo real.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "provar a completa incapacidade intelectual da falante de articular frases conexas na língua materna.", isCorrect: false, distractorRationale: "Marcadores conversacionais são utilizados por falantes de todos os níveis de escolaridade e são inerentes à oralidade espontânea." },
      { id: "c", text: "substituir com vantagem todas as regras de pontuação gramatical na redação de teses acadêmicas escritas.", isCorrect: false, distractorRationale: "Na escrita formal de textos acadêmicos esses marcadores devem ser evitados em prol da coesão padrão." },
      { id: "d", text: "demonstrar que a língua falada é idêntica em todos os aspectos à linguagem programada de computadores binários.", isCorrect: false, distractorRationale: "A fala humana é orgânica, relacional e espontânea, totalmente diferente de códigos de máquina." },
      { id: "e", text: "indicar que a entrevistada estava fingindo não compreender as perguntas formuladas pelo pesquisador.", isCorrect: false, distractorRationale: "Os marcadores têm função de aproximação interativa e monitoramento do contato fático." }
    ],
    detailedExplanation: {
      summary: "Na fala em tempo real, o cérebro humano precisa formular ideias ao mesmo tempo em que articula sons. Marcadores conversacionais ('né', 'entende?', 'aí') cumprem papéis essenciais de sustentação do canal de comunicação (função fática) e conexão textual.",
      stepByStep: [
        "Planejamento em tempo real: Diferente da escrita, que pode ser apagada e reescrita, a fala é produzida no calor do momento.",
        "Monitoramento do interlocutor: 'Né?' e 'entende?' servem para checar se o ouvinte continua acompanhando e concordando.",
        "Encadeamento temporal: 'Aí' e 'daí' servem de conectores narrativos que impulsionam a sequência cronológica dos fatos.",
        "Conclusão sociolinguística: Trata-se de uma estratégia comunicativa sofisticada da oralidade, e não de 'pobreza vocabular'."
      ],
      coreConcept: "Marcadores Conversacionais da Oralidade: Função Fática, Conexão e Planejamento Discursivo",
      trapWarning: "No ENEM, a oralidade tem gramática e dinâmicas próprias; jamais a meça com a régua preconceituosa da gramática normativa prescritiva da língua escrita formal."
    },
    commonTraps: [
      "Classificar qualquer marca oral espontânea como 'vício estúpido'",
      "Ignorar o papel interativo dos marcadores em checar a cumplicidade do interlocutor"
    ],
    tags: ["oralidade", "marcadores-conversacionais", "sociolinguistica", "funcao-fatica", "interacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-019",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Recursos da Língua",
    subtopic: "Neologismos e Empréstimos Linguísticos na Era Digital",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Com o avanço vertiginoso das tecnologias de comunicação e das plataformas de redes sociais, o vocabulário cotidiano dos brasileiros incorporou com naturalidade termos como 'deletar' (do inglês to delete), 'mutar' (do inglês to mute), 'printar' (do inglês to print), 'stalkear' (do inglês to stalk), além de neologismos semânticos autóctones como 'cancelamento' e 'tuitar'.",
      source: "Linguagem e Novas Mídias, Cadernos de Letras, 2024."
    },
    prompt: "A assimilação desses termos e a sua adaptação morfológica pelo acréscimo de sufixos verbais portugueses (como a terminação '-ar' da primeira conjugação em 'mut-ar' e 'print-ar') revelam que:",
    options: [
      { id: "a", text: "a língua portuguesa possui alta plasticidade e dinamismo morfossintático, aportuguesando e gramaticalizando empréstimos lexicais para nomear com precisão novas práticas e realidades sociotécnicas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "os usuários brasileiros esqueceram completamente a gramática da língua materna e foram forçados a falar inglês.", isCorrect: false, distractorRationale: "A estrutura gramatical do verbo conjugado ('eu printo', 'ele deletou') é rigorosamente portuguesa." },
      { id: "c", text: "a incorporação de neologismos é crime contra o patrimônio público punível com banimento de redes sociais.", isCorrect: false, distractorRationale: "O neologismo é um processo natural e legítimo de renovação lexical previsto em todas as gramáticas descritivas." },
      { id: "d", text: "os computadores são incapazes de processar palavras criadas por seres humanos no século XXI.", isCorrect: false, distractorRationale: "Os computadores operam com essas interfaces e comandos diariamente." },
      { id: "e", text: "a língua portuguesa parou de criar novas palavras desde o século dezesseis.", isCorrect: false, distractorRationale: "O léxico de uma língua viva expande-se continuamente todos os dias." }
    ],
    detailedExplanation: {
      summary: "Empréstimos linguísticos e neologismos não ameaçam a língua; ao contrário, provam a sua força assimiladora. Ao pegar a raiz inglesa 'print' e adicionar a desinência portuguesa '-ar' (criando 'printar', que se conjuga 'eu printo, nós printamos'), a língua adapta o estrangeiro às regras de sua própria morfologia nativa.",
      stepByStep: [
        "Neologismo lexical: Criação de novas palavras para novos conceitos (ex.: 'hater', 'cancelamento').",
        "Aportuguesamento morfológico: Adaptação das raízes estrangeiras às terminações verbais produtivas do português (1ª conjugação em -ar: deletar, logar, resetar).",
        "Visão não purista no ENEM: O purismo que tenta barrar palavras estrangeiras é historicamente inócuo; o português sempre incorporou termos árabes ('arroz', 'alface'), tupis ('pipoca', 'tamanduá') e franceses ('abajur', 'sutiã')."
      ],
      coreConcept: "Neologismos, Empréstimos Linguísticos e a Vitalidade Morfológica do Português",
      trapWarning: "No ENEM, rejeite visões ufanistas ou puristas que queiram proibir termos estrangeiros; a língua é enriquecida pelas trocas culturais da era globalizada."
    },
    commonTraps: [
      "Achar que usar termos tecnológicos estrangeiros significa 'destruir o português'",
      "Não perceber que o verbo ganha conjugação e desinências genuinamente portuguesas"
    ],
    tags: ["neologismos", "estrangeirismos", "era-digital", "morfologia", "lexico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-020",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Recursos da Língua",
    subtopic: "A Construção dos Sentidos: Pressupostos e Subentendidos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as duas declarações a seguir proferidas em uma reunião de condomínio residencial:\n\nDeclaração 1: 'O novo síndico finalmente conseguiu equilibrar as contas do condomínio neste semestre.'\n\nDeclaração 2: 'Nossa, que calor insuportável está fazendo nesta sala fechada com todas as janelas trancadas...'",
      source: "Semântica e Pragmática do Discurso, 2024."
    },
    prompt: "Com base nas noções de pressuposição e subentendido da semântica pragmática, é correto afirmar que:",
    options: [
      { id: "a", text: "na Declaração 1 o advérbio 'finalmente' introduz a informação pressuposta de que as contas estiveram desequilibradas antes; na Declaração 2, o enunciado veicula o subentendido pragmático de um pedido para abrir as janelas ou ligar a ventilação.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "na Declaração 1 o síndico foi destituído do cargo por desvios comprovados de verba.", isCorrect: false, distractorRationale: "O texto afirma explicitamente que ele conseguiu equilibrar as contas com sucesso." },
      { id: "c", text: "na Declaração 2 o falante está exigindo que todos os moradores vistam casacos de lã grossos.", isCorrect: false, distractorRationale: "A reclamação é de calor extremo com janelas trancadas, insinuando o pedido de ventilação." },
      { id: "d", text: "pressuposto e subentendido são sinônimos idênticos de informações expressas de forma explícita e literal.", isCorrect: false, distractorRationale: "Pressuposto e subentendido pertencem à dimensão do 'não dito' implícito, distinguindo-se pela presença ou ausência de marcas gramaticais formais." },
      { id: "e", text: "nenhuma das declarações possui qualquer elemento de sentido implícito.", isCorrect: false, distractorRationale: "Ambas dependem crucialmente de implícitos para que o sentido pretendido seja compreendido plenamente." }
    ],
    detailedExplanation: {
      summary: "O texto diz muito mais do que aquilo que está escrito explicitamente: o pressuposto está ancorado em pistas gramaticais indiscutíveis (verbos aspectuais, advérbios); o subentendido é uma insinuação contextual que o ouvinte deduz pelas circunstâncias da situação comunicativa.",
      stepByStep: [
        "Pressuposto (marcado linguisticamente): 'Finalmente' indica que houve demora ou dificuldade anterior. Se digo 'Pedro parou de fumar', pressupõe-se obrigatoriamente que Pedro fumava antes.",
        "Subentendido (insinuação pragmática): Dizer 'está muito calor com janelas fechadas' funciona como um ato de fala indireto pedindo educadamente para alguém abrir as janelas, sem fazer a ordem explícita.",
        "Diferença essencial: O pressuposto é indiscutível (está na gramática); o subentendido pode ser negado pelo locutor ('Eu só comentei sobre o calor, não mandei ninguém abrir janela')."
      ],
      coreConcept: "O Implícito no Discurso: Pressuposição (Marcada Gramaticalmente) vs. Subentendido (Pragmático)",
      trapWarning: "No ENEM, essa distinção entre pressuposto e subentendido é uma das habilidades de interpretação e competência argumentativa mais refinadas da Matriz de Referência."
    },
    commonTraps: [
      "Confundir pressuposto (com marcador linguístico claro) com subentendido (insinuação deduzida pelo contexto)",
      "Procurar apenas o sentido explícito e ignorar o que está nas entrelinhas do texto"
    ],
    tags: ["pressupostos", "subentendidos", "pragmatica", "implicitos", "interpretacao-avancada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-021",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Recursos da Língua",
    subtopic: "Ambiguidade Estrutural vs Ambiguidade Lexical e Efeitos de Sentido",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as seguintes frases divulgadas em folhetos informativos:\n\nFrase 1: 'O médico examinou o paciente sentado na cadeira de rodas.'\nFrase 2: 'A loja anunciou a venda de sapatos para rapazes de couro.'\n\nEm ambas as sentenças, a ordem dos termos sintáticos gera duplo sentido (ambiguidade estrutural ou anfibologia), comprometendo a clareza do enunciado.",
      source: "Manual de Clareza e Precisão Textual na Norma-Padrão"
    },
    prompt: "A ambiguidade estrutural observada na Frase 1 decorre especificamente do fato de que:",
    options: [
      { id: "a", text: "o adjunto adnominal/adverbial 'sentado na cadeira de rodas' pode se referir tanto ao sujeito agente ('o médico') quanto ao objeto direto paciente ('o paciente'), deixando incerto quem de fato estava sentado.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o substantivo 'médico' possui duplo sentido dicionarizado por ser homônimo perfeito de um verbo da primeira conjugação.", isCorrect: false, distractorRationale: "A ambiguidade é sintático-estrutural de posição de adjuntos, e não polissemia ou homonímia do vocábulo 'médico'." },
      { id: "c", text: "a frase contém uma contradição biológica insolúvel que impede a existência física de cadeiras de rodas em hospitais.", isCorrect: false, distractorRationale: "Cadeiras de rodas são itens hospitalares corriqueiros; o problema é estritamente de sintaxe e ambiguidade." },
      { id: "d", text: "a palavra 'paciente' foi grafada em desacordo com as regras do Novo Acordo Ortográfico.", isCorrect: false, distractorRationale: "A grafia e ortografia de todos os termos estão rigorosamente corretas." },
      { id: "e", text: "o verbo 'examinou' exige preposição obrigatória regida no pretérito perfeito com crase.", isCorrect: false, distractorRationale: "O verbo 'examinar' é transitivo direto no contexto ('examinou o paciente'), sem crase." }
    ],
    detailedExplanation: {
      summary: "A ambiguidade sintática (anfibologia) ocorre quando o arranjo dos termos na frase permite mais de uma interpretação gramatical legítima. Para desfazê-la na Frase 1, deve-se reorganizar os termos: 'Sentado na cadeira de rodas, o médico examinou o paciente' ou 'O médico examinou o paciente que estava sentado na cadeira de rodas'.",
      stepByStep: [
        "1. Identificação do termo móvel: 'sentado na cadeira de rodas'.",
        "2. Análise do duplo vínculo: Pela proximidade sintática, qualifica 'o paciente'; pelo contexto de exame clínico, pode ser uma postura assumida pelo 'médico'.",
        "3. Conceito gramatical: Trata-se de ambiguidade estrutural provocada pelo mau posicionamento de oração reduzida de particípio / adjunto.",
        "4. Conclusão: A alternativa (a) explicita cirurgicamente a causa do duplo sentido."
      ],
      coreConcept: "Ambiguidade Estrutural (Anfibologia) e Clareza Textual",
      trapWarning: "No ENEM e na Redação nota 1000: Evite ambiguidades sintáticas causadas pelo mau posicionamento de adjuntos e orações adjetivas restritivas ou explicativas!"
    },
    commonTraps: [
      "Confundir ambiguidade de palavra isolada (lexical/polissemia) com ambiguidade de ordenamento frasal (estrutural/sintática)",
      "Não perceber a duplicidade de leitura em frases cotidianas"
    ],
    tags: ["ambiguidade", "anfibologia", "sintaxe", "clareza-textual", "redacao-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-022",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Recursos da Língua",
    subtopic: "Paralelismo Sintático e Harmonia Estrutural no Padrão Culto",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as seguintes frases redigidas por candidatos a exames vestibulares:\n\nFrase 1: 'O novo diretor prometeu redução de custos e que iria contratar novos professores.'\nFrase 2: 'O novo diretor prometeu a redução de custos e a contratação de novos professores.'\n\nNa teoria da coerência e coesão gramatical, a Frase 2 atende rigorosamente ao princípio do paralelismo sintático, enquanto a Frase 1 apresenta uma falha estrutural frequente.",
      source: "Sintaxe da Norma-Padrão e Engenharia Textual da Dissertação"
    },
    prompt: "A conformidade da Frase 2 ao princípio do paralelismo sintático manifesta-se no fato de que:",
    options: [
      { id: "a", text: "coordena elementos com idêntica natureza morfossintática (dois sintagmas nominais regidos pelo mesmo verbo transitivo direto), assegurando simetria, equilíbrio rítmico e clareza ao período.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "substitui orações afirmativas por interjeições conativas dirigidas à diretoria executiva da escola.", isCorrect: false, distractorRationale: "Não há interjeições no período; são dois complementos nominais formais perfeitamente articulados." },
      { id: "c", text: "elimina todos os substantivos abstratos para transformar o texto em uma narrativa de ficção científica.", isCorrect: false, distractorRationale: "Pelo contrário, emprega substantivos formais ('redução', 'contratação') em harmonia estrutural." },
      { id: "d", text: "converte a voz ativa do verbo principal em voz passiva pronominal reflexiva recíproca.", isCorrect: false, distractorRationale: "O verbo 'prometeu' permanece na voz ativa com sujeito agente determinado." },
      { id: "e", text: "obriga o uso de rimas ricas consoantes em todas as palavras terminadas em ditongo decrescente.", isCorrect: false, distractorRationale: "Paralelismo sintático é questão de estrutura gramatical, não de versificação poética." }
    ],
    detailedExplanation: {
      summary: "O paralelismo sintático exige que elementos coordenados ou correlacionados desempenhem o mesmo papel gramatical com formatos semelhantes. Se o primeiro termo é um sintagma nominal ('a redução de custos'), o segundo também deve ser nominal ('a contratação de professores'), e não uma oração inteira desenvolvida ('e que iria contratar').",
      stepByStep: [
        "1. Na Frase 1 (quebra de paralelismo): Substantivo ('redução') coordenado com oração subordinada substantiva ('e que iria...'). Causa estranheza e perda de coesão.",
        "2. Na Frase 2 (paralelismo mantido): Dois sintagmas nominais articulados: [a redução de X] e [a contratação de Y].",
        "3. Impacto na redação do ENEM: O respeito ao paralelismo sintático pontua diretamente na Competência 1 e Competência 4.",
        "4. Conclusão: A alternativa (a) expõe os fundamentos do paralelismo morfossintático."
      ],
      coreConcept: "Paralelismo Sintático e Morfológico na Construção do Período",
      trapWarning: "No ENEM: Corrija quebras de paralelismo! 'Gosto de ler, de estudar e praticar esportes' -> falha de paralelismo preposicional. O correto: 'de ler, de estudar e DE praticar'!"
    },
    commonTraps: [
      "Misturar substantivo com oração desenvolvida em enumerações coordenadas",
      "Esquecer a preposição no segundo termo em orações regidas pelo mesmo verbo"
    ],
    tags: ["paralelismo-sintatico", "coesao-textual", "competencia-1", "gramatica-normativa", "redacao-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-023",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Recursos da Língua",
    subtopic: "Coesão Referencial: Anáfora, Catáfora e Progressão por Hiperônimos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o seguinte trecho de uma crônica de costumes urbanos:\n'O velho casarão da esquina resistiu bravamente à especulação imobiliária durante décadas. A imponente edificação, que presenciou a transformação do bairro operário em polo financeiro, ostentava portas de jacarandá maciço e azulejos portugueses raros. Todos sabiam disto: cedo ou tarde, as máquinas de demolição acabariam por derrubá-la.'",
      source: "Crônicas da Memória e Urbanização Brasileira"
    },
    prompt: "No fragmento apresentado, os mecanismos de coesão referencial 'A imponente edificação', 'disto' e o pronome oblíquo '-la' desempenham, respectivamente, as funções de:",
    options: [
      { id: "a", text: "anáfora por substituição hiperonímica (retomando 'o velho casarão'), catáfora (antecipando a revelação da demolição que virá a seguir) e anáfora pronominal (retomando a edificação a ser derrubada).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "pleonasmo vicioso, catacrese involuntária e cacofonia fonética de terminação em vogal nasal.", isCorrect: false, distractorRationale: "Trata-se de recursos legítimos de coesão referencial textual, e não de figuras de erro estilístico." },
      { id: "c", text: "catáfora inicial, anáfora mediata e apelo fático com teste de sinal radiofônico.", isCorrect: false, distractorRationale: "'A imponente edificação' retoma termo prévio, configurando anáfora, e não catáfora de abertura." },
      { id: "d", text: "recurso metalinguístico para ensinar conjugação de verbos pronominais na segunda pessoa.", isCorrect: false, distractorRationale: "O texto não se propõe a dar aulas gramaticais teóricas de conjugação." },
      { id: "e", text: "criação de neologismos tecnológicos para divulgar maquinários pesados de construção civil.", isCorrect: false, distractorRationale: "Não há neologismos no texto; as palavras pertencem ao léxico tradicional culto da língua." }
    ],
    detailedExplanation: {
      summary: "A coesão referencial evita repetições desnecessárias e garante a fluidez do texto: Anáfora = retoma elemento anterior ('A imponente edificação' e '-la' retomam 'o velho casarão'); Catáfora = aponta para frente, antecipando uma informação ('disto: cedo ou tarde...'). O hiperônimo é um termo de sentido mais amplo ('edificação' abrange 'casarão').",
      stepByStep: [
        "1. 'A imponente edificação': Termo de sentido genérico que retoma 'casarão' -> Anáfora com hiperônimo.",
        "2. 'disto:': O pronome demonstrativo neutro com 't' ('isto/disto') antecipa o que vem depois dos dois-pontos -> Catáfora.",
        "3. 'derrubá-la': O pronome clítico '-la' retoma a edificação/casarão -> Anáfora pronominal.",
        "4. Conclusão: A alternativa (a) classifica com rigor os três movimentos de coesão do período."
      ],
      coreConcept: "Coesão Referencial: Mecanismos Anafóricos, Catafóricos e Hiperônimos",
      trapWarning: "No ENEM e na Redação: Use demonstrativos com precisão! 'Este/isto' aponta para a frente (catáfora) ou para o tempo presente; 'Esse/isso' retoma o que já foi dito (anáfora)!"
    },
    commonTraps: [
      "Confundir anáfora (olhar para trás no texto) com catáfora (olhar para a frente)",
      "Não reconhecer que hiperônimos (termos mais abrangentes) são ferramentas de ouro da coesão lexical"
    ],
    tags: ["coesao-referencial", "anafora", "catafora", "hiperonimo", "competencia-4"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-024",
    area: "linguagens",
    competence: 7,
    skill: 24,
    topic: "Recursos da Língua",
    subtopic: "Variação Linguística Diatópica, Regionalismos e Adequação Situacional",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as seguintes designações populares para a raiz comestível *Manihot esculenta* nas diversas regiões brasileiras:\n• 'Mandioca' (predominante nas regiões Sudeste e Centro-Oeste);\n• 'Macaxeira' (predominante nas regiões Nordeste e Norte);\n• 'Aipim' (predominante no Rio de Janeiro e partes do Sul).\n\nPara além do léxico culinário, cada região apresenta traços prosódicos (o 'sotaque'), giros sintáticos e construções orais particulares consagradas por séculos de história.",
      source: "BAGNO, Marcos. Preconceito Linguístico: O que é, como se faz. São Paulo: Parábola Editorial, 2023."
    },
    prompt: "À luz da sociolinguística contemporânea e das matrizes do ENEM, a coexistência dos termos 'mandioca', 'macaxeira' e 'aipim' exemplifica:",
    options: [
      { id: "a", text: "uma variação linguística diatópica (geográfica/regional), atestando a riqueza e a vitalidade histórica do português brasileiro, cuja diversidade não autoriza nenhuma hierarquização de superioridade ou inferioridade entre os falares regionais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a degradação da língua portuguesa culta causada pelo isolamento geográfico de populações analfabetas.", isCorrect: false, distractorRationale: "Trata-se de preconceito linguístico infundado; variações regionais são legítimas em todas as camadas sociais." },
      { id: "c", text: "uma fraude agronômica passível de punição judicial pelo Ministério da Agricultura.", isCorrect: false, distractorRationale: "São nomes populares consagrados culturalmente para a mesma espécie botânica." },
      { id: "d", text: "a necessidade urgente de unificar a fala brasileira por meio de decretos federais que imponham multas a quem não usar o vocábulo de São Paulo.", isCorrect: false, distractorRationale: "A linguística e a legislação repudiam imposições autoritárias sobre os falares do povo." },
      { id: "e", text: "um erro crasso de concordância nominal passível de nota zero na prova de redação do ENEM.", isCorrect: false, distractorRationale: "São termos do vocabulário legítimo aceitos pelos principais dicionários da língua." }
    ],
    detailedExplanation: {
      summary: "A variação geográfica (diatópica) reflete as particularidades históricas e culturais de cada região do Brasil. Não existe uma região que fale o português 'mais correto' do que outra. O conceito fundamental da linguística moderna é a ADEQUAÇÃO: saber adequar o registro linguístico à situação comunicativa.",
      stepByStep: [
        "1. Conceito: Variação diatópica = variação no espaço geográfico (mandioca, macaxeira, aipim / jerimum, abóbora / tangerina, bergamota, mexerica).",
        "2. Postura científica: A sociolinguística demonstra que todas as variedades linguísticas possuem gramática coerente e lógica funcional.",
        "3. Combate ao preconceito linguístico: Desqualificar o falar nordestino, nortista, caipira ou sulista como 'feio' ou 'errado' é preconceito social mascarado de zelo gramatical.",
        "4. Conclusão: A alternativa (a) exprime a visão humanista e científica da Matriz do ENEM."
      ],
      coreConcept: "Variação Linguística Diatópica (Regional) e Preconceito Linguístico",
      trapWarning: "No ENEM: NUNCA marque uma alternativa que afirme que uma variante regional é 'errada', 'pobre' ou 'corruptora da língua portuguesa'! A diversidade linguística é sempre valorizada."
    },
    commonTraps: [
      "Achar que existe um único termo 'correto' e que os outros são gírias inferiores",
      "Confundir variação regional legítima com desrespeito à norma-padrão em situações formais escritas"
    ],
    tags: ["variacao-linguistica", "diatopica", "regionalismos", "preconceito-linguistico", "marcos-bagno"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-REC-025",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Recursos da Língua",
    subtopic: "Operadores Argumentativos: Oposição Enfática vs Concessão Subordinada",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere os dois períodos abaixo a respeito do mesmo debate social:\n\nPeríodo A: 'O projeto habitacional exige investimentos orçamentários vultosos, MAS beneficiará milhares de famílias sem teto.'\nPeríodo B: 'O projeto habitacional beneficiará milhares de famílias sem teto, MAS exige investimentos orçamentários vultosos.'\n\nEm análise textual, as conjunções coordenativas adversativas orientam de forma decisiva a força argumentativa da frase.",
      source: "DUCROT, Oswald. O Dizer e o Dito: Polifonia e Argumentação na Língua"
    },
    prompt: "A comparação semântica e pragmática entre os dois períodos evidencia que:",
    options: [
      { id: "a", text: "a conjunção adversativa 'mas' atribui maior peso argumentativo à oração que ela introduz, fazendo com que o Período A conclua em favor da aprovação do projeto e o Período B conduza à sua rejeição ou adiamento.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ambos os períodos defendem exatamente a mesma conclusão com a mesma ênfase emotiva e neutralidade.", isCorrect: false, distractorRationale: "A inversão da ordem com o conectivo adversativo inverte o direcionamento argumentativo final do texto." },
      { id: "c", text: "a conjunção 'mas' no Período B funciona como conectivo aditivo com valor de soma matemática.", isCorrect: false, distractorRationale: "O 'mas' é adversativo em ambos, marcando oposição e prevalência do argumento subsequente." },
      { id: "d", text: "o Período A viola a norma culta ao utilizar uma conjunção entre duas orações independentes.", isCorrect: false, distractorRationale: "O emprego de conjunções adversativas entre orações coordenadas é a essência da norma culta." },
      { id: "e", text: "nenhum dos períodos possui valor argumentativo relevante para o debate público sobre moradia.", isCorrect: false, distractorRationale: "Ambos são enunciados argumentativos prototípicos sobre políticas públicas de moradia social." }
    ],
    detailedExplanation: {
      summary: "Na teoria da argumentação de Oswald Ducrot e Koch, o conectivo adversativo ('mas', 'porém', 'contudo') confere prevalência ao argumento que o sucede imediatamente: P mas Q -> o falante quer que o ouvinte apoie a conclusão apontada por Q! No Período A, o benefício prevalece; no Período B, o custo financeiro prevalece.",
      stepByStep: [
        "1. Estrutura do Período A: [Custo alto] MAS [Benefício social]. O argumento vitorioso é o benefício social -> Apoio ao projeto.",
        "2. Estrutura do Período B: [Benefício social] MAS [Custo alto]. O argumento vitorioso é o custo elevado -> Rejeição ou cautela ao projeto.",
        "3. Poder dos operadores argumentativos: A ordem dos fatores altera profundamente o direcionamento ideológico e persuasivo do texto.",
        "4. Conclusão: A alternativa (a) reflete perfeitamente a teoria semântico-argumentativa dos operadores de oposição."
      ],
      coreConcept: "Operadores Argumentativos de Oposição e a Orientação Discursiva",
      trapWarning: "No ENEM e na Redação: O que vem depois do 'mas' é a sua tese definitiva! Use o 'mas' sempre a favor do argumento que você quer sustentar perante a banca corretora!"
    },
    commonTraps: [
      "Achar que trocar a ordem de duas orações adversativas não altera o sentido do texto",
      "Não perceber a força persuasiva decisiva da última oração introduzida por conjunção adversativa"
    ],
    tags: ["operadores-argumentativos", "conjuncoes-adversativas", "ducrot", "semantica-argumentativa", "redacao-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

