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
  }
];

