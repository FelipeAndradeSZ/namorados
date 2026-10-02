/**
 * BANCO DE QUESTÕES: FILOSOFIA POLÍTICA, ESTADO, PODER E DEMOCRACIA NO ENEM
 * Área: Ciências Humanas e suas Tecnologias (Filosofia e Sociologia Política)
 * Competência: C3 / C5 | Habilidades: H11, H12, H13, H14, H15, H23
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de rigor conceitual, historiográfico e epistemológico
 * Regra Estrita: ZERO termos de deslocamentos turísticos. Foco em teoria do Estado,
 * contratualismo, republicanismo, biopolítica, esfera pública e direitos fundamentais.
 */

export const QUESTIONS_FILOSOFIA_POLITICA_PODER = [
  {
    id: "HUM-POL-001",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Filosofia Política",
    subtopic: "Nicolau Maquiavel e o Realismo Político",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Muitos conceberam repúblicas e principados que jamais foram vistos ou conhecidos como verdadeiros. Mas há uma distância tão grande entre o modo como se vive e o modo como se deveria viver, que aquele que despreza o que se faz em favor do que se deveria fazer aprende mais a trabalhar para a sua ruína do que para a sua preservação. Pois um homem que queira fazer profissão de bondade em todas as coisas perecerá fatalmente em meio a tantos que não são bons. Daí decorre que é necessário a um príncipe que deseja manter-se aprender a poder não ser bom, e a usar ou não usar dessa faculdade conforme a necessidade da 'verità effettuale delle cose' (verdade efetiva das coisas).\n(MAQUIAVEL, Nicolau. O Príncipe, Capítulo XV, 1513)",
      source: "MAQUIAVEL, Nicolau. O Príncipe. São Paulo: Penguin Classics / Companhia das Letras, 2010."
    },
    prompt: "A ruptura fundamental operada por Nicolau Maquiavel na história da filosofia política ocidental expressa-se na",
    options: [
      {
        id: "a",
        text: "subordinação das decisões dos governantes aos dogmas teológicos e à salvação transcendental da alma.",
        isCorrect: false,
        distractorRationale: "Maquiavel faz o oposto: seculariza a política, desvinculando-a da teologia cristã medieval e dos cânones eclesiásticos."
      },
      {
        id: "b",
        text: "autonomia da esfera política em relação à moral idealista tradicional, orientando a ação governamental pela eficácia empírica na manutenção do Estado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Maquiavel funda a ciência política moderna ao romper com a tradição platônica, aristotélica e cristã, que subordinava a política à moral e à utopia da 'cidade ideal'. Em seu realismo político, a política é regida por uma lógica própria e autônoma: a virtù (habilidade prática e audácia de cálculo) do governante para moldar a fortuna (circunstâncias imprevistas do tempo) a fim de assegurar a estabilidade, a ordem civil e a sobrevivência do Estado."
      },
      {
        id: "c",
        text: "defesa do pacifismo universal incondicional e da extinção dos exércitos permanentes nacionais.",
        isCorrect: false,
        distractorRationale: "Maquiavel defendia exércitos nacionais fortes formados por cidadãos patriotas, rejeitando tropas mercenárias infiéis."
      },
      {
        id: "d",
        text: "proposta de abolição imediata de todas as formas de governo em favor de uma anarquia comunitária.",
        isCorrect: false,
        distractorRationale: "Maquiavel busca fortalecer a ordem republicana e as instituições estatais contra a desagregação da Itália."
      },
      {
        id: "e",
        text: "afirmação de que as leis divinas naturais governam mecanicamente todas as vontades humanas sem livre-arbítrio.",
        isCorrect: false,
        distractorRationale: "Ele afirma expressamente que a fortuna governa metade das ações humanas, mas a outra metade é regida pelo livre-arbítrio e pela virtù do governante."
      }
    ],
    detailedExplanation: {
      summary: "Maquiavel secularizou a política ao separá-la da ética moral idealista, fundando o realismo político com base na verdade factual das coisas.",
      stepByStep: [
        "Passo 1: Ler o excerto de O Príncipe: Maquiavel contrasta o 'modo como se vive' (realidade) com o 'modo como se deveria viver' (utopia moral).",
        "Passo 2: Identificar a tese maquiaveliana clássica cobrada no ENEM:",
        "A política é uma atividade autônoma, guiada pela eficácia pragmática na conservação da ordem pública e da soberania estatal, e não pela piedade religiosa abstrata.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Autonomia da política = separação entre a ética privada individual (fazer o bem) e a ética pública governamental (manter a estabilidade do Estado).",
      trapWarning: "Evite reduzir Maquiavel ao adjetivo vulgar 'maquiavélico' (sinônimo de maldade gratuita); para o pensador, a dureza é aceita apenas quando estritamente necessária para evitar o caos e a tirania maior."
    },
    commonTraps: ["Reduzir o pensamento de Maquiavel a uma apologia simplista à crueldade gratuita"],
    tags: ["maquiavel", "realismo-politico", "autonomia-da-politica", "virtu-e-fortuna"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-002",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Thomas Hobbes e o Contrato de Submissão",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante o tempo em que os homens vivem sem um poder comum capaz de manter a todos em respeito reverente, eles se encontram naquela condição que se chama guerra; e uma tal guerra que é de todos os homens contra todos os homens. Pois a guerra não consiste apenas na batalha ou no ato de lutar, mas naquele lapso de tempo durante o qual a vontade de travar batalha é suficientemente conhecida. Por isso, a condição humana em estado de natureza é de medo contínuo e perigo de morte violenta; e a vida do homem é solitária, pobre, sórdida, embrutecida e curta.\n(HOBBES, Thomas. Leviatã, Capítulo XIII, 1651)",
      source: "HOBBES, Thomas. Leviatã: Ou Matéria, Forma e Poder de um Estado Eclesiástico e Civil. São Paulo: Martins Fontes, 2003."
    },
    prompt: "Na teoria política de Thomas Hobbes, a justificativa racional para a instituição do Estado soberano (o Leviatã) apoia-se no(a)",
    options: [
      {
        id: "a",
        text: "direito divino dos reis transmitido por sucessão dinástica hereditária inquestionável.",
        isCorrect: false,
        distractorRationale: "Hobbes fundamenta o poder no contrato racional entre homens iguais no estado de natureza, e não na teologia de direito divino de Bossuet."
      },
      {
        id: "b",
        text: "pacto social em que os indivíduos renunciam à liberdade irrestrita e transferem o uso da força ao soberano para garantir a preservação da vida e a paz civil.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para Hobbes, no estado de natureza vigora a igualdade de capacidades e a escassez de recursos, gerando desconfiança mútua e guerra generalizada ('o homem é o lobo do homem' — homo homini lupus). Pelo medo da morte violenta e pelo cálculo racional, os indivíduos alienam reciprocamente seu direito de autodefesa a um terceiro soberano (o Leviatã), que passa a deter o monopólio absoluto da espada para coagir o cumprimento das leis civis e manter a paz coletiva."
      },
      {
        id: "c",
        text: "confiança incondicional na bondade inata e na solidariedade espontânea da natureza humana.",
        isCorrect: false,
        distractorRationale: "Essa visão rousseauniana do 'bom selvagem' é o oposto da antropologia pessimista e egoísta hobbesiana."
      },
      {
        id: "d",
        text: "direito inalienável dos cidadãos de dissolver o governo sempre que discordarem de qualquer decreto econômico.",
        isCorrect: false,
        distractorRationale: "Para Hobbes, o soberano é irrevogável e os súditos não possuem direito legítimo à rebelião (salvo se o Estado tentar assassiná-los diretamente)."
      },
      {
        id: "e",
        text: "manutenção da propriedade privada latifundiária como direito originário anterior a qualquer lei civil.",
        isCorrect: false,
        distractorRationale: "Em Hobbes, a propriedade privada só existe APÓS a criação do Estado; antes dele, no estado de natureza, cada um tem direito a tudo o que puder tomar pela força."
      }
    ],
    detailedExplanation: {
      summary: "Hobbes justifica o poder soberano absoluto como a única saída racional contra a anarquia caótica da guerra de todos contra todos.",
      stepByStep: [
        "Passo 1: Ler a caracterização do estado de natureza em Hobbes: 'medo contínuo e perigo de morte violenta'.",
        "Passo 2: Reconhecer a função do pacto contratual:",
        "Ceder a liberdade natural ilimitada ao soberano em troca do valor supremo: a segurança e a garantia da vida biológica.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Contratualismo hobbesiano = contrato de submissão originado pelo medo da morte violenta para criar um poder central coercitivo inquestionável.",
      trapWarning: "Cuidado: Hobbes defendia o absolutismo, mas por uma justificativa moderna e laica (contrato social racional), e NÃO pela doutrina do direito divino dos reis."
    },
    commonTraps: ["Confundir a fundamentação laico-contratualista de Hobbes com o direito divino dos reis"],
    tags: ["hobbes", "contratualismo", "leviata", "estado-de-natureza"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-003",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "John Locke, Direitos Naturais e Limites do Estado",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O estado de natureza é um estado de perfeita liberdade para os homens regularem suas ações e disporem de suas posses e pessoas como acharem conveniente, dentro dos limites da lei da natureza, sem pedir permissão nem depender da vontade de qualquer outro homem. É também um estado de igualdade, onde todo poder e jurisdição são recíprocos. Sendo todos iguais e independentes, ninguém deve prejudicar a outrem em sua vida, saúde, liberdade ou posses. O grande e principal objetivo, portanto, da união dos homens em comunidades e da submissão a um governo é a preservação de sua propriedade.\n(LOCKE, John. Segundo Tratado sobre o Governo Civil, Capítulos II e IX, 1689)",
      source: "LOCKE, John. Segundo Tratado sobre o Governo Civil. Petrópolis: Vozes, 1994."
    },
    prompt: "No pensamento político de John Locke, considerado o patriarca do liberalismo político clássico, a legitimidade do governo civil vincula-se à",
    options: [
      {
        id: "a",
        text: "concentração de poderes tirânicos ilimitados para controlar a economia de mercado.",
        isCorrect: false,
        distractorRationale: "Locke é um firme opositor do absolutismo tirânico e defende freios estritos ao poder do governante."
      },
      {
        id: "b",
        text: "tutela e proteção estrita dos direitos naturais inalienáveis dos indivíduos (vida, liberdade e bens materiais), admitindo o direito de resistência contra governos tirânicos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para Locke, os direitos à vida, à liberdade e à propriedade (fruto do trabalho aplicado sobre a natureza) já existem no estado de natureza como direitos naturais (jusnaturalismo). O Estado não cria esses direitos; ele é instituído por consentimento como juiz imparcial apenas para protegê-los de violações. Se o governante quebra o pacto e atenta contra esses direitos, a sociedade civil tem o legítimo direito de rebelião e destituição do poder tirânico."
      },
      {
        id: "c",
        text: "coletivização estatal de todas as terras e abolição definitiva das heranças familiares.",
        isCorrect: false,
        distractorRationale: "Locke considera a propriedade privada um direito natural fundamental originado pelo trabalho humano."
      },
      {
        id: "d",
        text: "submissão incondicional do cidadão mesmo quando o monarca confisca arbitrariamente seus bens.",
        isCorrect: false,
        distractorRationale: "Essa era a tese de Hobbes ou do absolutismo; Locke defende explicitamente o direito de resistir e depor o governante violador."
      },
      {
        id: "e",
        text: "eliminação das leis escritas em prol da vingança privada executada por cada indivíduo com as próprias mãos.",
        isCorrect: false,
        distractorRationale: "Os homens saem do estado de natureza exatamente para superar a instabilidade da justiça privada individual e ter leis públicas estáveis."
      }
    ],
    detailedExplanation: {
      summary: "Locke concebe o Estado como guardião limitado dos direitos naturais pré-existentes: vida, liberdade e propriedade.",
      stepByStep: [
        "Passo 1: Identificar a definição de propriedade em Locke:",
        "Propriedade em sentido amplo abrange a vida, a liberdade civil e os bens materiais legítimos.",
        "Passo 2: Reconhecer a função do governo civil:",
        "O Estado é um mandatário consentido cuja única finalidade legítima é preservar esses direitos naturais.",
        "Passo 3: Lembrar o direito de resistência:",
        "Caso o Estado viole os direitos inalienáveis, perde a legitimidade e o povo pode rebelar-se (legitimando a Revolução Gloriosa de 1688).",
        "Passo 4: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Jusnaturalismo lockeano = direitos naturais anteriores ao Estado; o governo é limitado pelo consentimento dos governados e subordinado à lei.",
      trapWarning: "Para Locke, 'propriedade' não é só dinheiro e imóveis; abrange a posse de si mesmo (o próprio corpo, a vida e a liberdade de pensamento)."
    },
    commonTraps: ["Achar que Locke apoiava poder soberano absoluto sem possibilidade de contestação"],
    tags: ["john-locke", "liberalismo-politico", "direitos-naturais", "direito-de-resistencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-004",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Jean-Jacques Rousseau e a Vontade Geral",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O primeiro que, tendo cercado um terreno, lembrou-se de dizer 'isto é meu' e encontrou pessoas bastante simples para acreditar nele, foi o verdadeiro fundador da sociedade civil. Quantos crimes, guerras, assassinatos, misérias e horrores não teria poupado ao gênero humano aquele que, arrancando as estacas, tivesse gritado aos seus semelhantes: 'Evitai ouvir este impostor; estais perdidos se esquecerdes que os frutos são de todos e que a terra não pertence a ninguém!'. (...) A soberania não pode ser representada pela mesma razão que não pode ser alienada; ela consiste essencialmente na Vontade Geral, e a vontade não se representa.\n(ROUSSEAU, Jean-Jacques. Discurso sobre a Origem da Desigualdade, 1755 / Do Contrato Social, 1762)",
      source: "ROUSSEAU, Jean-Jacques. Do Contrato Social. São Paulo: Abril Cultural, 1978."
    },
    prompt: "Ao formular sua teoria do pacto social e da soberania popular, Jean-Jacques Rousseau distingue-se de Hobbes e Locke ao defender que a verdadeira liberdade política consiste na",
    options: [
      {
        id: "a",
        text: "alienação definitiva do poder a deputados e senadores que governam vitaliciamente sem prestar contas.",
        isCorrect: false,
        distractorRationale: "Rousseau rejeitava a democracia meramente representativa parlamentar inglesa, afirmando que o povo inglês só era livre no momento de votar para depois voltar à servidão."
      },
      {
        id: "b",
        text: "obediência à lei que a própria coletividade prescreveu a si mesma orientada pelo bem comum (Vontade Geral), sendo a soberania popular inalienável e indivisível.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para Rousseau, a sociedade corrompeu o homem natural bondoso com a introdução da propriedade privada e das desigualdades artificiais. A emancipação republicana só é possível mediante um novo pacto social em que cada cidadão coloca sua pessoa sob a direção suprema da Vontade Geral (volonté générale). Como a lei é a expressão direta da vontade do povo soberano para o bem comum, obedecer à lei que nós mesmos criamos é a definição máxima de liberdade civil e autonomia política."
      },
      {
        id: "c",
        text: "restauração forçada e literal do estado selvagem primitivo das florestas com o fim de qualquer organização urbana.",
        isCorrect: false,
        distractorRationale: "Rousseau nunca propôs 'voltar a andar de quatro nas matas'; ele propõe reformar a sociedade civil por meio da virtude cívica e de um contrato social justo."
      },
      {
        id: "d",
        text: "legitimação de um monarca absoluto esclarecido que governa com mão de ferro para impedir revoltas camponesas.",
        isCorrect: false,
        distractorRationale: "Rousseau combate radicalmente a monarquia absolutista e funda a tradição democrática radical moderna."
      },
      {
        id: "e",
        text: "soma matemática dos interesses egoístas privados de cada corporação comercial.",
        isCorrect: false,
        distractorRationale: "Rousseau diferencia enfaticamente a 'Vontade Geral' (focada no bem comum e no interesse coletivo) da mera 'vontade de todos' (que é a soma de egoísmos particulares)."
      }
    ],
    detailedExplanation: {
      summary: "Para Rousseau, a liberdade reside na autonomia: obedecer à lei que a própria coletividade instituiu por meio da Vontade Geral.",
      stepByStep: [
        "Passo 1: Notar a crítica rousseauniana à propriedade privada como gênese da desigualdade social.",
        "Passo 2: Compreender a solução do 'Contrato Social':",
        "A soberania pertence ao povo e não pode ser alienada nem representada; a Vontade Geral busca o bem coletivo.",
        "Passo 3: Lembrar a definição de autonomia:",
        "Liberdade não é fazer o que dá na telha (licenciosidade egoísta), mas obedecer às leis legítimas que nós mesmos elaboramos democraticamente.",
        "Passo 4: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Vontade Geral (Rousseau) = princípio orientador do corpo político que visa ao interesse comum da coletividade soberana, distinta da soma de interesses particulares.",
      trapWarning: "Não confunda 'Vontade Geral' com a vontade da maioria numérica simples; a Vontade Geral mira a justiça e o bem público coletivo."
    },
    commonTraps: ["Achar que Rousseau propunha o retorno fático e regressivo ao estado primitivo de natureza"],
    tags: ["rousseau", "contrato-social", "vontade-geral", "soberania-popular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-005",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Filosofia Política",
    subtopic: "Montesquieu e a Separação dos Três Poderes",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "É uma experiência eterna que todo homem que tem poder é levado a abusar dele; ele vai até onde encontra limites. Quem diria! Até a virtude tem necessidade de limites. Para que não se possa abusar do poder, é preciso que, pela disposição das coisas, o poder freie o poder. Tudo estaria perdido se o mesmo homem, ou o mesmo corpo dos principais, dos nobres, ou do povo, exercesse esses três poderes: o de fazer as leis, o de executar as resoluções públicas e o de julgar os crimes ou as divergências dos particulares.\n(MONTESQUIEU, Barão de. Do Espírito das Leis, Livro XI, Capítulo IV, 1748)",
      source: "MONTESQUIEU. Do Espírito das Leis. São Paulo: Nova Cultural, 1997."
    },
    prompt: "O célebre princípio da tripartição funcional dos poderes formulado por Montesquieu tem como finalidade primordial",
    options: [
      {
        id: "a",
        text: "assegurar a submissão total do Parlamento às ordens exclusivas do Poder Executivo em tempos de crise.",
        isCorrect: false,
        distractorRationale: "O objetivo de Montesquieu é exatamente impedir a supremacia tirânica do Executivo sobre o Legislativo."
      },
      {
        id: "b",
        text: "prevenir a tirania e salvaguardar a liberdade civil dos cidadãos por meio de um sistema de freios e contrapesos recíprocos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Montesquieu constatou a tendência psicológica e institucional ao abuso de poder. Para proteger a liberdade civil, concebeu a divisão do poder estatal em três funções autônomas e harmônicas (Legislativo, Executivo e Judiciário), organizadas em um mecanismo institucional de freios e contrapesos (checks and balances), onde nenhum poder governa de forma absoluta e cada um controla os excessos dos outros."
      },
      {
        id: "c",
        text: "eliminar o sistema judiciário em favor de plebiscitos semanais executados por aplicativo.",
        isCorrect: false,
        distractorRationale: "O Poder Judiciário independente é pedra basilar indispensável na teoria de Montesquieu."
      },
      {
        id: "d",
        text: "concentrar a elaboração de leis e o julgamento de réus na mesma autoridade policial.",
        isCorrect: false,
        distractorRationale: "Isso configuraria o despotismo e a tirania que Montesquieu combatia veementemente."
      },
      {
        id: "e",
        text: "estabelecer a teocracia como único regime republicano aceitável no Ocidente.",
        isCorrect: false,
        distractorRationale: "Montesquieu formula uma teoria laica e secular de engenharia institucional constitucional."
      }
    ],
    detailedExplanation: {
      summary: "Montesquieu desenhou a divisão tripartida dos poderes para que 'o poder freie o poder', impedindo a degeneração tirânica do Estado.",
      stepByStep: [
        "Passo 1: Ler o axioma de Montesquieu: 'todo homem que tem poder é levado a abusar dele; é preciso que o poder freie o poder'.",
        "Passo 2: Reconhecer a arquitetura dos Três Poderes (Executivo, Legislativo e Judiciário):",
        "Eles devem ser simultaneamente autônomos e harmoniosos, fiscalizando-se mutuamente.",
        "Passo 3: Identificar o objetivo: proteger as liberdades individuais contra o absolutismo despótico.",
        "Passo 4: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Freios e Contrapesos (Checks and Balances) = mecanismo institucional em que os poderes do Estado se equilibram e limitam mutuamente.",
      trapWarning: "A tripartição dos poderes na Constituição Federal Brasileira de 1988 (Artigo 2º) deriva diretamente da teoria de Montesquieu."
    },
    commonTraps: ["Achar que a tripartição dos poderes foi criada para tornar o Estado mais lento e inoperante"],
    tags: ["montesquieu", "tres-poderes", "freios-e-contrapesos", "estado-de-direito"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-006",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Sociologia Política",
    subtopic: "Max Weber: Monopólio da Força e Tipos de Dominação",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Estado moderno não pode ser definido sociologicamente pelo conteúdo de suas ações, pois quase nenhuma tarefa foi historicamente exclusiva do Estado. Do ponto de vista conceitual rigoroso, o Estado moderno é aquela comunidade humana que, nos limites de um determinado território, reivindica com êxito para si o monopólio do uso legítimo da força física. Pois a força não é, evidentemente, o único meio do Estado — ninguém diria isso —, mas é seu meio específico. Se existissem apenas estruturas sociais em que a violência fosse desconhecida, o conceito de 'Estado' teria desaparecido.\n(WEBER, Max. Ciência e Política: Duas Vocações, 1919)",
      source: "WEBER, Max. Ciência e Política: Duas Vocações. São Paulo: Cultrix, 2006."
    },
    prompt: "A célebre definição weberiana de Estado moderno funda-se em dois elementos constitutivos indissociáveis, que são o(a)",
    options: [
      {
        id: "a",
        text: "vínculo de sangue biológico de todos os habitantes e a homogeneidade étnico-religiosa compulsória.",
        isCorrect: false,
        distractorRationale: "O Estado moderno abriga pluralidade étnica e cultural e rege-se pelo direito territorial laico."
      },
      {
        id: "b",
        text: "delimitação de uma base territorial e o monopólio da coerção física socialmente reconhecida como legítima.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para Max Weber, o que singulariza sociologicamente o Estado frente a outras instituições é a combinação entre: 1) uma jurisdição territorial demarcada e 2) a exclusividade de aplicação ou autorização da violência física aceita como legítima pela população (por meio da polícia e das forças armadas). Qualquer ato de justiça privada ou milícia armada sem chancela estatal é ilegal."
      },
      {
        id: "c",
        text: "distribuição equânime de todas as rendas e o controle popular dos meios industriais de produção.",
        isCorrect: false,
        distractorRationale: "Essa seria uma aspiração comunista/socialista, não a definição sociológica descritiva de Estado em Weber."
      },
      {
        id: "d",
        text: "inexistência de qualquer corpo de funcionários públicos ou regras jurídicas codificadas.",
        isCorrect: false,
        distractorRationale: "O Estado moderno weberiano caracteriza-se precisamente pela dominação racional-legal apoiada na burocracia profissional especializada."
      },
      {
        id: "e",
        text: "autoridade profética messiânica exercida por líderes espirituais desprovidos de leis.",
        isCorrect: false,
        distractorRationale: "Líderes messiânicos representam a dominação carismática tradicional, enquanto o Estado moderno ocidental ancora-se na dominação legal-racional burocrática."
      }
    ],
    detailedExplanation: {
      summary: "Para Max Weber, o Estado moderno é a entidade territorial que detém o monopólio da violência física legítima.",
      stepByStep: [
        "Passo 1: Ler o clássico texto de Max Weber em 'Ciência e Política':",
        "O Estado se define pelo meio específico que utiliza: o monopólio do uso legítimo da força física.",
        "Passo 2: Identificar a abrangência espacial:",
        "Essa prerrogativa opera estritamente nos limites de um território nacional soberano delimitado.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Monopólio da violência legítima (Weber) = prerrogativa estatal soberana de ser a única fonte que pode aplicar ou autorizar a coerção armada legal.",
      trapWarning: "Atenção à palavra 'legítima': a força do Estado não é mero banditismo bruto armado; ela se sustenta na crença coletiva de legitimidade jurídica e legal."
    },
    commonTraps: ["Achar que qualquer grupo armado com armas exerce autoridade estatal legítima"],
    tags: ["max-weber", "monopolio-da-violencia", "teoria-do-estado", "sociologia-politica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-007",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Sociologia Política",
    subtopic: "Os Três Tipos Puros de Dominação Legítima em Weber",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A dominação — ou seja, a probabilidade de encontrar obediência a um determinado mandato — pode apoiar-se em diferentes motivos de submissão e crença na legitimidade. Weber distingue três tipos puros de dominação legítima:\n1. Dominação Tradicional: fundada na crença cotidiana na santidade das tradições vigentes desde tempos imemoriais e na legitimidade daqueles que foram chamados pela tradição a exercer a autoridade (ex: monarquias absolutistas hereditárias, patriarcalismo).\n2. Dominação Carismática: fundada na devoção extraordinária, afetiva e pessoal à santidade, heroísmo militar ou caráter exemplar de um líder excepcional (ex: profetas, chefes guerreiros, líderes revolucionários populistas).\n3. Dominação Racional-Legal: fundada na crença na legalidade dos estatutos positivos instituídos racionalmente e no direito de mandar daqueles que foram nomeados para exercer a autoridade segundo a lei (ex: burocracia estatal moderna, concursos públicos, magistratura).\n(WEBER, Max. Economia e Sociedade, 1922)",
      source: "WEBER, Max. Economia e Sociedade. Brasília: Ed. UnB, 1999."
    },
    prompt: "Em um Estado de direito contemporâneo regido por uma Constituição democrática, a obediência dos cidadãos às ordens de um fiscal de tributos ou de um policial militar apoia-se predominantemente no tipo de dominação",
    options: [
      {
        id: "a",
        text: "carismática, por decorrer do encantamento emocional e dos poderes mágicos sobrenaturais do servidor público.",
        isCorrect: false,
        distractorRationale: "Servidores públicos não governam por dons carismáticos messiânicos."
      },
      {
        id: "b",
        text: "tradicional, por obedecer cegamente aos costumes consuetudinários da Idade Média feudal.",
        isCorrect: false,
        distractorRationale: "O Estado moderno superou o feudalismo com ordenamentos jurídicos formais."
      },
      {
        id: "c",
        text: "racional-legal, por fundamentar-se na submissão impessoal às leis escritas formalmente instituídas e à competência funcional do cargo burocrático.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na dominação racional-legal, obedece-se à LEI impessoal e abstrata, e não à pessoa física do governante. O servidor ou autoridade só é obedecido porque foi investido legalmente na função burocrática por regras formais prévias (concurso, mandato eleitoral, constituição). Cessada a investidura legal, cessa imediatamente seu poder de emitir ordens legítimas."
      },
      {
        id: "d",
        text: "tirânica ilegal, pois qualquer forma de autoridade estatal é desprovida de regras de direito.",
        isCorrect: false,
        distractorRationale: "A dominação burocrática é exatamente o império da lei formal (rule of law)."
      },
      {
        id: "e",
        text: "clientelista familiar, onde mandatos são herdados biologicamente de pais para filhos.",
        isCorrect: false,
        distractorRationale: "Cargos públicos na burocracia moderna são providos por mérito impessoal (concursos), vedando o nepotismo hereditário."
      }
    ],
    detailedExplanation: {
      summary: "A dominação burocrática moderna é racional-legal: o cidadão obedece à regra abstrata e impessoal da lei.",
      stepByStep: [
        "Passo 1: Recordar os três tipos puros de dominação de Max Weber:",
        "Tradicional (costumes sagrados), Carismática (líder excepcional) e Racional-Legal (leis escritas e cargos burocráticos).",
        "Passo 2: Analisar a situação concreta: obediência a um agente público (fiscal, policial, magistrado).",
        "A submissão decorre da lei impessoal que conferiu competência técnica àquele cargo.",
        "Passo 3: Assinalar a alternativa 'c'."
      ],
      coreConcept: "Dominação Racional-Legal = obediência à regra do direito impessoal e às competências regimentais burocráticas.",
      trapWarning: "Lembre-se de que esses tipos são 'tipos ideais' metodológicos abstratos; na vida real, governos frequentemente combinam elementos carismáticos e burocráticos."
    },
    commonTraps: ["Confundir obediência à lei formal com admiração afetiva carismática pela pessoa do governante"],
    tags: ["tipos-de-dominacao", "max-weber", "burocracia", "racional-legal"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-008",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Hannah Arendt: Ação Política, Pluralidade e a Banalidade do Mal",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No julgamento de Adolf Eichmann em Jerusalém (1961), o arquiteto da logística dos trens que deportaram milhões de judeus para os campos de extermínio nazistas não aparentava ser um monstro sanguinário sádico ou um demônio psicopata. O que mais estarrecia em Eichmann era sua aterradora normalidade burocrática: ele falava por clichês, afirmava que apenas 'cumpria ordens superiores' e que buscava promover sua carreira dentro da engrenagem estatal. Foi essa incapacidade manifesta de pensar pelo ponto de vista do outro, esse vazio cognitivo de reflexão moral autônoma no cumprimento diligente de tarefas rotineiras, que Hannah Arendt denominou 'a banalidade do mal'.\n(ARENDT, Hannah. Eichmann em Jerusalém: Um Relato sobre a Banalidade do Mal, 1963)",
      source: "ARENDT, Hannah. Eichmann em Jerusalém. São Paulo: Companhia das Letras, 1999."
    },
    prompt: "O conceito filosófico de 'banalidade do mal' cunhado por Hannah Arendt alerta para o perigo de regimes totalitários e sociedades burocratizadas produzirem atrocidades massivas quando indivíduos",
    options: [
      {
        id: "a",
        text: "agem movidos exclusivamente por fúria passional insana e delírios psiquiátricos incontroláveis.",
        isCorrect: false,
        distractorRationale: "Arendt demonstra exatamente o contrário: Eichmann não era louco ou insano, mas um burocrata normal e metódico."
      },
      {
        id: "b",
        text: "renunciam ao pensamento crítico autônomo, executando ordens hediondas como meras engrenagens funcionais sem refletir sobre as consequências éticas de seus atos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Arendt mostra que o mal mais devastador do século XX não exigiu necessariamente perversão monstruosa individual, mas a 'ausência de pensamento' (thoughtlessness): pessoas comuns que se desresponsabilizam moralmente sob o pretexto burocrático de cumprir procedimentos administrativos e obedecer cegamente à lei do regime, normalizando o extermínio sistemático de seres humanos."
      },
      {
        id: "c",
        text: "desobedecem ostensivamente aos chefes de Estado para liderar insurreições armadas clandestinas.",
        isCorrect: false,
        distractorRationale: "Eichmann era o oposto do rebelde; era servil e obcecado pelo cumprimento milimétrico de ordens superiores."
      },
      {
        id: "d",
        text: "dedicam suas vidas ao estudo aprofundado dos direitos humanos e da filosofia iluminista.",
        isCorrect: false,
        distractorRationale: "O nazismo perseguiu e baniu a filosofia humanista e os direitos civis universais."
      },
      {
        id: "e",
        text: "rejeitam trabalhar no serviço público para viver como eremitas isolados no campo.",
        isCorrect: false,
        distractorRationale: "O fenômeno analisado por Arendt ocorreu no coração da máquina administrativa e logística estatal moderna."
      }
    ],
    detailedExplanation: {
      summary: "A 'banalidade do mal' ocorre quando burocratas comuns abdicam da reflexão moral e executam barbáries como mera rotina de trabalho.",
      stepByStep: [
        "Passo 1: Entender a análise de Arendt sobre Eichmann:",
        "Eichmann não era um 'monstro teatral', mas um homem comum incapaz de pensar criticamente por si mesmo e avaliar a dor da vítima.",
        "Passo 2: Reconhecer a definição de banalidade do mal:",
        "A atrocidade gerada pela atrofia moral da desresponsabilização burocrática ('estava apenas cumprindo ordens').",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Banalidade do Mal (Hannah Arendt) = a normalização do horror quando sujeitos abdicam do pensamento reflexivo e executam a barbárie como dever administrativo ordinário.",
      trapWarning: "Arendt NÃO disse que os crimes nazistas eram banais no sentido de insignificantes; os crimes eram monstruosos, mas a MOTIVAÇÃO de quem os operou podia ser terrivelmente rasa, burocrática e medíocre."
    },
    commonTraps: ["Achar que 'banalidade do mal' significa que o crime não foi grave"],
    tags: ["hannah-arendt", "banalidade-do-mal", "totalitarismo", "etica-politica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-009",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Jürgen Habermas: Agir Comunicativo e Democracia Deliberativa",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Enquanto no agir instrumental e estratégico o ator busca influenciar o comportamento do outro através de sanções, recompensas, propaganda ou coação para atingir seus próprios fins egoístas, no Agir Comunicativo os sujeitos interagem mediados pela linguagem para alcançar um entendimento mútuo genuíno (consenso). Na esfera pública democrática ideal, a legitimidade das normas políticas não deriva da imposição da força ou da tradição, mas da força do melhor argumento colocado em um processo discursivo aberto, inclusivo e livre de coação interna ou externa, no qual todos os cidadãos afetados pelas decisões tenham voz e igualdade de participação argumentativa.\n(HABERMAS, Jürgen. Teoria do Agir Comunicativo / Direito e Democracia, 1981)",
      source: "HABERMAS, Jürgen. Direito e Democracia: Entre Facticidade e Validade. Rio de Janeiro: Tempo Brasileiro, 1997."
    },
    prompt: "No modelo de democracia deliberativa formulado por Jürgen Habermas, o critério basilar de legitimidade das leis e políticas públicas reside no(a)",
    options: [
      {
        id: "a",
        text: "uso persuasivo de armas militares para calar minorias descontentes.",
        isCorrect: false,
        distractorRationale: "O agir comunicativo exige ausência total de coação armada ou violenta."
      },
      {
        id: "b",
        text: "debate público plural fundamentado no melhor argumento e na busca do entendimento intersubjetivo entre os cidadãos afetados.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para Habermas (herdeiro da Escola de Frankfurt), a democracia deliberativa transcende a mera votação numérica eleitoral: as leis são legítimas quando resultam de um processo dialógico na esfera pública livre de coerções (situação discursiva ideal), onde as pretensões de validade são testadas pela força racional do melhor argumento e pelo respeito intersubjetivo à alteridade."
      },
      {
        id: "c",
        text: "compra de apoio político de parlamentares mediada por corporações bancárias multinacionais.",
        isCorrect: false,
        distractorRationale: "Habermas critica asperamente a colonização do 'mundo da vida' pelo sistema do dinheiro e do poder burocrático."
      },
      {
        id: "d",
        text: "decreto unilateral expedido pelo chefe de governo sem consulta popular.",
        isCorrect: false,
        distractorRationale: "Decretos autocráticos constituem o agir estratégico autoritário rejeitado pelo modelo comunicativo."
      },
      {
        id: "e",
        text: "dogma ancestral revelado em livros sacros de uma religião oficial estatal.",
        isCorrect: false,
        distractorRationale: "O agir comunicativo apoia-se na razão pública pós-metafísica laica e inclusiva."
      }
    ],
    detailedExplanation: {
      summary: "A democracia deliberativa habermasiana funda a legitimidade das normas no consenso alcançado pelo debate argumentativo desprovido de coação.",
      stepByStep: [
        "Passo 1: Contrastar o 'agir instrumental/estratégico' (imposição para fins particulares) com o 'agir comunicativo' (busca de entendimento mútuo).",
        "Passo 2: Reconhecer os pilares da democracia deliberativa:",
        "Esfera pública plural, igualdade discursiva de todos os afetados e prevalência do melhor argumento racional.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Democracia Deliberativa (Habermas) = modelo político em que as decisões estatais adquirem validade através da deliberação pública argumentativa e inclusiva.",
      trapWarning: "Habermas é uma das principais referências filosóficas exigidas nas questões de Filosofia e nas redações nota 1000 do ENEM para defender a importância do debate público e da cidadania ativa."
    },
    commonTraps: ["Reduzir democracia deliberativa a mero levantamento de mãos em votações sem debate argumentativo prévio"],
    tags: ["habermas", "agir-comunicativo", "democracia-deliberativa", "esfera-publica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-010",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Filosofia Política",
    subtopic: "Michel Foucault: Microfísica do Poder e Biopolítica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O poder não é algo que se adquire, se arranca ou se compartilha, algo que se guarde ou se deixe escapar; o poder se exerce a partir de inúmeros pontos e no jogo de relações desiguais e móveis. Mais do que uma soberania estatal centralizada e descendente ('de cima para baixo'), o poder moderno opera de forma capilar e disciplinar sobre os corpos nas escolas, nos quartéis, nas fábricas, nos hospitais psiquiátricos e nas prisões. A partir do século XVIII, a essa disciplina anátomo-política dos corpos individuais articulou-se a 'biopolítica': uma tecnologia de poder voltada não mais para o corpo isolado, mas para a população como espécie viva — controlando natalidade, mortalidade, longevidade, epidemias e saúde pública através de saberes estatísticos e demográficos normativos.\n(FOUCAULT, Michel. Vigiar e Punir, 1975 / História da Sexualidade I: A Vontade de Saber, 1976)",
      source: "FOUCAULT, Michel. Vigiar e Punir: Nascimento da Prisão. Petrópolis: Vozes, 1987."
    },
    prompt: "Na perspectiva genealógica de Michel Foucault, o conceito de 'biopolítica' caracteriza o poder moderno como um dispositivo que",
    options: [
      {
        id: "a",
        text: "restringe a ação política ao duelo corpo a corpo armado entre reis e cavaleiros medievais.",
        isCorrect: false,
        distractorRationale: "Foucault analisa as sociedades modernas ocidentais dos séculos XVIII a XX, superando o modelo de suplício soberano medieval."
      },
      {
        id: "b",
        text: "gerencia e normatiza os processos vitais da população coletiva (saúde, taxas demográficas, higiene e epidemias) mediante estratégias científicas e administrativas do Estado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Foucault define a passagem do 'poder soberano' pré-moderno (que operava pela fórmula 'fazer morrer ou deixar viver') para o 'biopoder' moderno (pela fórmula 'fazer viver e deixar morrer'). A biopolítica incide sobre a população como massa biológica: mede taxas de natalidade, estabelece quarentenas, gerencia planos sanitaristas e dita a normalidade dos corpos por meio de políticas públicas de vigilância epidemiológica e controle populacional."
      },
      {
        id: "c",
        text: "renuncia a qualquer coleta de estatísticas e censos demográficos oficiais.",
        isCorrect: false,
        distractorRationale: "A estatística (a 'ciência do Estado') é precisamente o instrumento matemático indispensável da governamentalidade biopolítica."
      },
      {
        id: "d",
        text: "extingue prisões e hospitais em favor de julgamentos informais em aldeias isoladas.",
        isCorrect: false,
        distractorRationale: "O poder disciplinar e biopolítico institucionalizou as prisões, asilos e hospitais como centros de docilização dos corpos."
      },
      {
        id: "e",
        text: "elimina a vigilância constante dos indivíduos para assegurar a anarquia total nas escolas e fábricas.",
        isCorrect: false,
        distractorRationale: "A essência do dispositivo panóptico foucaultiano é a vigilância invisível, contínua e disciplinar dos indivíduos."
      }
    ],
    detailedExplanation: {
      summary: "A biopolítica é a gestão estatal dos processos vitais e biológicos da população como espécie coletiva (fazer viver e regular a vida).",
      stepByStep: [
        "Passo 1: Distinguir a anátomo-política disciplinar (corpo individual: escola, fábrica, quartel) da biopolítica (corpo coletivo: população).",
        "Passo 2: Identificar os objetos da biopolítica segundo Foucault:",
        "Natalidade, mortalidade, endemias, higiene pública e estatísticas demográficas de saúde.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Biopolítica (Foucault) = tecnologias e saberes de poder voltados para a administração e controle normativo da vida e dos processos vitais da população.",
      trapWarning: "Para Foucault, o poder não está guardado em um 'palácio do governo'; ele é reticular e capilar (microfísica do poder), atravessando toda a malha social."
    },
    commonTraps: ["Confundir biopolítica com mero suplício físico punitivo medieval"],
    tags: ["michel-foucault", "biopolitica", "microfisica-do-poder", "disciplina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-011",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "John Rawls: A Posição Original e o Véu da Ignorância",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Para formular princípios justos de convivência e distribuição social, John Rawls propõe um experimento mental chamado 'Posição Original'. Imaginemos que os representantes de uma sociedade estejam reunidos para pactuar os princípios fundamentais da justiça social sob um 'Véu da Ignorância'. Ninguém sabe de antemão qual será seu lugar na sociedade futura, sua classe social, seu status, sua raça, seu gênero, seu nível de inteligência, sua saúde biológica ou suas preferências religiosas. Privados do conhecimento de suas vantagens ou desvantagens pessoais, os indivíduos escolherão princípios que garantam que, mesmo que acordem na pior posição socioeconômica possível, terão uma existência digna e protegida.\n(RAWLS, John. Uma Teoria da Justiça, 1971)",
      source: "RAWLS, John. Uma Teoria da Justiça. São Paulo: Martins Fontes, 2000."
    },
    prompt: "O artifício metodológico do 'Véu da Ignorância' concebido por John Rawls destina-se a garantir a",
    options: [
      {
        id: "a",
        text: "preservação dos privilégios hereditários históricos da aristocracia econômica tradicional.",
        isCorrect: false,
        distractorRationale: "O véu da ignorância visa justamente impedir a reprodução de privilégios e desigualdades arbitrárias."
      },
      {
        id: "b",
        text: "imparcialidade e equidade na escolha das regras coletivas, impedindo que interesses egoístas particulares distorçam a concepção da justiça distributiva.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A metáfora do Véu da Ignorância estabelece uma condição de justiça como equidade (justice as fairness): sem saber se nascerá rico ou pobre, negro ou branco, saudável ou com deficiência, qualquer indivíduo racional escolhe princípios de máxima igualdade de liberdades civis básicas (Princípio 1) e uma distribuição que só tolera desigualdades materiais se estas beneficiarem ao máximo os grupos mais vulneráveis e desfavorecidos da sociedade (Princípio da Diferença)."
      },
      {
        id: "c",
        text: "obrigação de ignorar todas as leis vigentes para praticar atos de violência anárquica nas cidades.",
        isCorrect: false,
        distractorRationale: "Trata-se de um experimento teórico de filosofia política moral, não de incentivo à anarquia."
      },
      {
        id: "d",
        text: "supressão absoluta da liberdade de crença religiosa e de manifestação de pensamento.",
        isCorrect: false,
        distractorRationale: "O primeiro princípio rawlsiano exige a mais ampla e igualitária garantia de liberdades civis fundamentais para todos."
      },
      {
        id: "e",
        text: "imposição do utilitarismo clássico, que sacrifica os direitos de minorias em nome da alegria efêmera da maioria.",
        isCorrect: false,
        distractorRationale: "Rawls escreveu sua obra exatamente para refutar o utilitarismo, provando que a dignidade da pessoa humana não pode ser sacrificada por maiorias."
      }
    ],
    detailedExplanation: {
      summary: "O Véu da Ignorância garante a equidade procedimental: sem saber a própria sorte, a racionalidade humana escolhe amparar os mais vulneráveis.",
      stepByStep: [
        "Passo 1: Entender a hipótese do Véu da Ignorância (John Rawls):",
        "Nenhum participante conhece sua classe, gênero, raça, talentos ou fortuna futura.",
        "Passo 2: Reconhecer a consequência ética:",
        "Eliminam-se os vieses egoístas e formula-se uma justiça equitativa que protege o pior cenário possível (regra maximin).",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Justiça como Equidade (Rawls) = princípios distributivos justos formulados sob a imparcialidade do Véu da Ignorância.",
      trapWarning: "Rawls é a grande referência liberal-igualitária do pensamento contemporâneo; cai com frequência nas provas do ENEM e vestibulares de ponta."
    },
    commonTraps: ["Confundir Rawls com utilitarismo hedonista de Bentham ou igualitarismo soviético estrito"],
    tags: ["john-rawls", "teoria-da-justica", "veu-da-ignorancia", "equidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-012",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Karl Marx: O Estado como Instrumento de Dominação de Classe",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A história de todas as sociedades que existiram até nossos dias tem sido a história das lutas de classes. Homem livre e escravo, patrício e plebeu, senhor e servo, mestre e oficial, em suma, opressores e oprimidos estiveram em constante oposição uns aos outros, mantendo uma luta ininterrupta, ora disfarçada, ora aberta (...). O executivo do Estado moderno não passa de um comitê para gerenciar os negócios comuns de toda a classe burguesa. A emancipação da classe trabalhadora só poderá ser obra da própria classe trabalhadora.\n(MARX, Karl; ENGELS, Friedrich. Manifesto Comunista, 1848)",
      source: "MARX, Karl; ENGELS, Friedrich. Manifesto do Partido Comunista. São Paulo: Boitempo, 2005."
    },
    prompt: "No materialismo histórico dialético de Karl Marx e Friedrich Engels, a natureza do Estado na sociedade capitalista é compreendida como",
    options: [
      {
        id: "a",
        text: "uma instituição neutra e imparcial vocacionada naturalmente a conciliar os interesses opostos de patrões e empregados.",
        isCorrect: false,
        distractorRationale: "Marx refuta energicamente a tese liberal da neutralidade do Estado, denunciando seu caráter classista."
      },
      {
        id: "b",
        text: "um instrumento político e jurídico da superestrutura erguido para legitimar e assegurar a dominação da classe detentora dos meios de produção.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para Marx, o Estado burguês não é um árbitro neutro do bem comum, mas um aparato institucional coercitivo (leis, polícia, tribunais) pertencente à superestrutura ideológica e política, condicionado pela infraestrutura material econômica para garantir a propriedade privada dos meios de produção e a reprodução da acumulação de mais-valia pela burguesia."
      },
      {
        id: "c",
        text: "uma dádiva divina eterna enviada pelos céus para punir os pecados da humanidade.",
        isCorrect: false,
        distractorRationale: "O materialismo histórico analisa a história a partir das relações materiais de produção, recusando explicações teológicas transcendentais."
      },
      {
        id: "d",
        text: "um órgão dedicado prioritariamente a expropriar as fábricas dos capitalistas para distribuí-las aos servos medievais.",
        isCorrect: false,
        distractorRationale: "O Estado capitalista protege as fábricas da burguesia e não as expropria em favor de servos."
      },
      {
        id: "e",
        text: "uma estrutura temporária que surgiu antes do trabalho humano e independe da existência de classes sociais.",
        isCorrect: false,
        distractorRationale: "Na teoria marxista, o Estado só surge com a divisão da sociedade em classes antagônicas e desaparecerá na sociedade comunista sem classes."
      }
    ],
    detailedExplanation: {
      summary: "Para o marxismo, o Estado não é neutro: é o aparato de coerção e legitimação da dominação da classe burguesa proprietária.",
      stepByStep: [
        "Passo 1: Ler o enunciado do Manifesto Comunista: 'O executivo do Estado moderno não passa de um comitê para gerenciar os negócios da burguesia'.",
        "Passo 2: Relacionar com as categorias do materialismo histórico:",
        "Infraestrutura econômica (modos de produção) e superestrutura política/ideológica (Estado, leis, religião).",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Estado classista (Marx) = instituição superestrutural que preserva a exploração econômica e a ordem burguesa da propriedade privada.",
      trapWarning: "Cuidado com discursos que tratam o Estado capitalista como 'árbitro imparcial'; Marx foi o grande crítico dessa ilusão jurídica liberal."
    },
    commonTraps: ["Achar que Marx considerava o Estado uma instituição eterna ou neutra"],
    tags: ["karl-marx", "materialismo-historico", "luta-de-classes", "estado-burgues"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-013",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "John Stuart Mill: Liberdade Individual e Tirania da Maioria",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A única finalidade para a qual o poder pode ser legitimamente exercido sobre qualquer membro de uma comunidade civilizada, contra a sua vontade, é evitar o dano a terceiros. O seu próprio bem, seja físico ou moral, não constitui justificação suficiente (...). Se toda a humanidade, menos uma pessoa, tivesse uma mesma opinião, e apenas essa pessoa tivesse uma opinião contrária, a humanidade não teria mais direito de silenciar essa única pessoa do que ela teria de silenciar a humanidade, se tivesse o poder para tanto. Pois a tirania da maioria não se exerce apenas pelo aparelho estatal, mas pela coerção da opinião pública sufocando a dissidência criativa.\n(MILL, John Stuart. Sobre a Liberdade, Capítulos I e II, 1859)",
      source: "MILL, John Stuart. Sobre a Liberdade. Petrópolis: Vozes, 1991."
    },
    prompt: "Em sua defesa da liberdade civil e da tolerância democrática, John Stuart Mill adverte contra o risco da 'tirania da maioria', sustentando o princípio de que",
    options: [
      {
        id: "a",
        text: "o governo tem o dever de impor a censura religiosa para preservar o sentimento de unanimidade da nação.",
        isCorrect: false,
        distractorRationale: "Mill é um defensor radical da liberdade de pensamento e rejeita categoricamente a censura estatal ou religiosa."
      },
      {
        id: "b",
        text: "a soberania da maioria não autoriza o silenciamento de vozes dissidentes, sendo a livre expressão indispensável para o progresso moral e a busca da verdade.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Mill formula o célebre 'Princípio do Dano' (harm principle): o Estado só pode coibir a ação individual para impedir danos a outros cidadãos. O filósofo adverte que a democracia não pode se converter no despotismo das maiorias esmagando minorias e pensamentos excêntricos: o confronto livre e vigoroso de opiniões divergentes é o oxigênio da verdade e o motor da evolução social."
      },
      {
        id: "c",
        text: "a opinião de maiorias numéricas é sempre infalível e isenta de preconceitos históricos.",
        isCorrect: false,
        distractorRationale: "Mill aponta que maiorias frequentemente cometeram erros atrozes (como a condenação de Sócrates e a perseguição a Galileu)."
      },
      {
        id: "d",
        text: "o Estado deve obrigar os cidadãos a praticarem exercícios físicos diários para o próprio bem-estar individual.",
        isCorrect: false,
        distractorRationale: "Mill rejeita expressamente o paternalismo estatal: 'o próprio bem, físico ou moral, não autoriza a coerção'."
      },
      {
        id: "e",
        text: "leis devem ser abolidas em favor do poder absoluto de corporações de jornais privados.",
        isCorrect: false,
        distractorRationale: "Mill defende leis republicanas justas que protejam direitos individuais fundamentais."
      }
    ],
    detailedExplanation: {
      summary: "Mill defendeu a inviolabilidade da liberdade de expressão e alertou contra o perigo da tirania da maioria sufocar minorias divergentes.",
      stepByStep: [
        "Passo 1: Ler o postulado clássico de Stuart Mill sobre a liberdade de expressão:",
        "Mesmo que toda a humanidade divirja de um único indivíduo, silenciá-lo seria uma violência ilegítima contra a verdade e a sociedade.",
        "Passo 2: Reconhecer o 'Princípio do Dano':",
        "A intervenção coercitiva sobre o indivíduo só é legítima para evitar dano a terceiros.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Tirania da maioria (Stuart Mill) = risco democrático em que maiorias usam a lei ou a pressão social para suprimir a pluralidade e silenciar minorias.",
      trapWarning: "Democracia liberal moderna não é 'ditadura da maioria'; ela combina governo da maioria com proteção intransigente dos direitos das minorias."
    },
    commonTraps: ["Achar que democracia significa o direito absoluto da maioria fazer qualquer coisa contra minorias"],
    tags: ["stuart-mill", "liberdade-de-expressao", "tirania-da-maioria", "liberalismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-014",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Sociologia Política",
    subtopic: "Norberto Bobbio: As Promessas Não Cumpridas da Democracia",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A democracia moderna nasceu com o ideal iluminista da soberania do cidadão individual e do 'governo do poder público em público' (transparência absoluta contra o segredo de Estado). Todavia, ao analisar a realidade contemporânea, Norberto Bobbio aponta as 'promessas não cumpridas' da democracia representativa:\n1. A persistência das oligarquias econômicas e das elites políticas controlando partidos;\n2. A sobrevivência do poder invisível (o 'criptogoverno', a espionagem, os serviços secretos e os acordos de bastidores operando à sombra da sociedade);\n3. O fosso entre a cidadania passiva de massas consumidoras e a exigência de cidadãos ativos e politicamente instruídos.\n(BOBBIO, Norberto. O Futuro da Democracia: Uma Defesa das Regras do Jogo, 1984)",
      source: "BOBBIO, Norberto. O Futuro da Democracia. Rio de Janeiro: Paz e Terra, 2000."
    },
    prompt: "Ao refletir sobre os limites práticos das democracias contemporâneas, Norberto Bobbio enfatiza que o ideal democrático da transparência pública é frontalmente violado pela existência do",
    options: [
      {
        id: "a",
        text: "voto universal secreto depositado em urnas auditáveis pelos cidadãos.",
        isCorrect: false,
        distractorRationale: "O voto secreto protege o eleitor do voto de cabresto; Bobbio defende o voto livre e universal."
      },
      {
        id: "b",
        text: "poder invisível, marcado pela opacidade de decisões conspiratórias, espionagem e conchavos inacessíveis ao controle da sociedade civil.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Bobbio definia a democracia como 'o governo do poder visível', onde os governantes agem à luz do dia sob vigilância pública. A contradição central que ameaça a democracia contemporânea é o 'poder invisível' (arcana imperii): acordos secretos de bastidores, serviços de inteligência à margem da fiscalização parlamentar e conluios entre corporações e agentes públicos que usurpam a soberania popular."
      },
      {
        id: "c",
        text: "debate transparente veiculado em canais públicos de televisão e internet.",
        isCorrect: false,
        distractorRationale: "O debate transparente cumpre exatamente a promessa democrática da visibilidade pública."
      },
      {
        id: "d",
        text: "ensino obrigatório e gratuito de filosofia política em todas as escolas públicas.",
        isCorrect: false,
        distractorRationale: "A educação cívica é uma demanda primordial defendida por Bobbio para combater a passividade."
      },
      {
        id: "e",
        text: "orçamento participativo deliberado diretamente por moradores de bairros periféricos.",
        isCorrect: false,
        distractorRationale: "Orçamentos participativos fortalecem a democracia deliberativa direta."
      }
    ],
    detailedExplanation: {
      summary: "Norberto Bobbio aponta o 'poder invisível' (ações opacas de bastidores e segredos de Estado) como violação da essência transparente da democracia.",
      stepByStep: [
        "Passo 1: Entender a definição bobbiana de democracia: 'o poder público que age em público'.",
        "Passo 2: Reconhecer a promessa não cumprida do poder visível:",
        "A persistência de serviços secretos, conluios corporativos e decisões opacas que subtraem o controle do cidadão.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Poder invisível (Bobbio) = áreas opacas de tomada de decisão do Estado e das elites econômicas que escapam ao escrutínio público cidadão.",
      trapWarning: "Para Bobbio, a democracia é o 'governo das regras do jogo': sem regras formais transparentes de participação, a democracia degrada-se em fachada autoritária."
    },
    commonTraps: ["Confundir o segredo do voto do cidadão com a opacidade ilegítima dos governantes"],
    tags: ["norberto-bobbio", "futuro-da-democracia", "poder-invisivel", "transparencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-015",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Achille Mbembe e o Conceito de Necropolítica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A expressão máxima da soberania reside, em grande medida, no poder de ditar quem pode viver e quem deve morrer. Por isso, matar ou deixar viver constituem os limites da soberania. (...) Nas condições contemporâneas, a soberania é o poder de fabricar mundos de morte: formas únicas de existência social em que vastas populações são submetidas a condições de vida que lhes conferem o status de 'mortos-vivos'. O poder continuamente faz referência e recorre à exceção, à emergência e a uma noção ficcional do inimigo. Proponho o conceito de 'necropolítica' para dar conta das várias maneiras pelas quais, em nosso mundo, as armas de fogo e os dispositivos do Estado são mobilizados com o objetivo da destruição em massa de corpos e populações racialmente marcadas.\n(MBEMBE, Achille. Necropolítica, 2003)",
      source: "MBEMBE, Achille. Necropolítica. São Paulo: N-1 Edições, 2018."
    },
    prompt: "Ao dialogar criticamente com a 'biopolítica' de Michel Foucault, o filósofo camaronês Achille Mbembe formula a 'necropolítica' para demonstrar que, nos territórios colonizados e periféricos contemporâneos, a soberania do poder opera primordialmente através do(a)",
    options: [
      {
        id: "a",
        text: "investimento universal em hospitais públicos e saneamento básico nas favelas.",
        isCorrect: false,
        distractorRationale: "A necropolítica constata a precarização deliberada e o abandono letal dessas populações, e não investimentos universais."
      },
      {
        id: "b",
        text: "gestão deliberada da morte e da descartabilidade de corpos racializados, transformando certas populações em alvos permanentes da violência letal do Estado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Mbembe mostra que, em contextos pós-coloniais e periferias urbanas (como as favelas brasileiras ou a Faixa de Gaza), o poder soberano não atua primordialmente pelo 'fazer viver' foucaultiano, mas pelo poder de ditar quem deve morrer (necropolítica). O racismo de Estado atua como tecnologia de demarcação que desumaniza populações periféricas e negras, naturalizando operações policiais letais, chacinas e o extermínio sistemático sob pretexto de 'segurança pública'."
      },
      {
        id: "c",
        text: "desarmamento imediato de todas as polícias e extinção dos presídios estatais.",
        isCorrect: false,
        distractorRationale: "A necropolítica utiliza militarização agressiva e encarceramento em massa para gerenciar a morte."
      },
      {
        id: "d",
        text: "estabelecimento de uma monarquia parlamentar pacífica sem conflitos sociais.",
        isCorrect: false,
        distractorRationale: "O ensaio de Mbembe analisa o colonialismo, o capitalismo predatório e a guerra permanente."
      },
      {
        id: "e",
        text: "garantia constitucional incondicional de terra e moradia a todas as famílias vulneráveis.",
        isCorrect: false,
        distractorRationale: "A necropolítica opera pela expulsão territorial violenta, destruição de moradias e precarização das condições de vida."
      }
    ],
    detailedExplanation: {
      summary: "A necropolítica analisa a gestão da morte pelo Estado como mecanismo de controle de populações racializadas e periféricas.",
      stepByStep: [
        "Passo 1: Entender a distinção entre biopolítica (Foucault: gerenciar a vida) e necropolítica (Mbembe: gerenciar quem pode morrer).",
        "Passo 2: Reconhecer os alvos da necropolítica:",
        "Corpos racializados, territórios periféricos e zonas de exceção onde a lei é suspensa em favor da letalidade armada.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Necropolítica (Achille Mbembe) = o uso da soberania estatal para determinar quem tem direito à vida e quem está condenado à morte, à descartabilidade e ao terror cotidiano.",
      trapWarning: "O conceito de necropolítica é de altíssima recorrência no ENEM e em redações nota 1000 que discutem violência urbana, letalidade policial e racismo estrutural."
    },
    commonTraps: ["Achar que necropolítica é apenas a morte natural ou ausência de remédios em hospitais"],
    tags: ["achille-mbembe", "necropolitica", "racismo-estrutural", "filosofia-africana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-016",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Giorgio Agamben: O Estado de Exceção e a Vida Nua",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O totalitarismo moderno pode ser definido como a instauração, por meio do estado de exceção, de uma guerra civil legal que permite a eliminação física não apenas dos adversários políticos, mas de categorias inteiras de cidadãos que, por alguma razão, não podem ser integradas no sistema político (...). A criação de um espaço anômico permanente, em que a lei é suspensa sem ser revogada, tornou-se o paradigma dominante de governo na política contemporânea. Nela, o cidadão perde sua condição política e jurídica qualificada (bios) e é reduzido à mera existência biológica desprotegida (zoé — a 'vida nua'), sobre a qual o poder soberano pode exercer violência sem cometer crime.\n(AGAMBEN, Giorgio. Estado de Exceção / Homo Sacer: O Poder Soberano e a Vida Nua, 1995-2003)",
      source: "AGAMBEN, Giorgio. Estado de Exceção. São Paulo: Boitempo, 2004."
    },
    prompt: "A tese de Giorgio Agamben sobre o 'Estado de Exceção tornado regra' denuncia o mecanismo autoritário contemporâneo em que o poder",
    options: [
      {
        id: "a",
        text: "assegura que todos os cidadãos gozem de imunidade parlamentar perpétua.",
        isCorrect: false,
        distractorRationale: "O autor aponta a retirada de direitos fundamentais, e não sua ampliação aristocrática."
      },
      {
        id: "b",
        text: "suspende garantias constitucionais sob pretexto de crises ou emergências de segurança, desumanizando o indivíduo até a condição de 'vida nua' sem proteção jurídica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Agamben demonstra como dispositivos de exceção (como decretações reiteradas de estado de sítio, prisões preventivas abusivas ou 'guerra ao terror') normalizam a suspensão dos direitos fundamentais dentro da própria legalidade formal, transformando o cidadão em 'homo sacer' — uma vida destituída de valor jurídico que pode ser violentada ou aniquilada pelo soberano com total impunidade institucional."
      },
      {
        id: "c",
        text: "restringe sua intervenção à regulação de preços em supermercados populares.",
        isCorrect: false,
        distractorRationale: "O foco de Agamben é ontológico, jurídico e político sobre o poder soberano e os direitos civis."
      },
      {
        id: "d",
        text: "elimina a força militar para instaurar uma república anarquista sem fronteiras.",
        isCorrect: false,
        distractorRationale: "O estado de exceção intensifica o militarismo repressivo do Estado."
      },
      {
        id: "e",
        text: "revoga os códigos civis para retornar às assembleias diretas da Grécia Antiga.",
        isCorrect: false,
        distractorRationale: "Agamben critica o totalitarismo moderno e as democracias securitárias contemporâneas, e não a antiguidade clássica."
      }
    ],
    detailedExplanation: {
      summary: "O Estado de Exceção normalizado reduz o cidadão de portador de direitos (bios) à mera vida biológica descartável (vida nua).",
      stepByStep: [
        "Passo 1: Entender a distinção grega retomada por Agamben:",
        "Bios (vida qualificada, cidadã, com direitos políticos) vs Zoé (vida biológica simples animal, vida nua).",
        "Passo 2: Reconhecer o perigo do 'estado de exceção como regra':",
        "A suspensão dos direitos constitucionais em nome da segurança transforma sujeitos em corpos vulneráveis a qualquer violência sem punição legal.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Estado de Exceção (Agamben) = paradoxo jurídico em que a lei é suspensa em nome da preservação da ordem, criando zonas de não-direito e vida nua.",
      trapWarning: "Cuidado com o conceito de 'vida nua': não se trata de nudez física, mas da desproteção jurídica absoluta do cidadão frente ao arbítrio estatal."
    },
    commonTraps: ["Achar que estado de exceção é um evento que ocorreu apenas durante guerras antigas"],
    tags: ["giorgio-agamben", "estado-de-excecao", "vida-nua", "homo-sacer"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-017",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Boaventura de Sousa Santos: Epistemologias do Sul",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A compreensão do mundo é muito mais ampla do que a compreensão ocidental do mundo. O pensamento moderno ocidental é um pensamento abissal: traça uma linha invisível radical que divide a realidade entre 'deste lado da linha' (as sociedades metropolitanas do Norte global, onde vigora o império da lei e da ciência) e 'do outro lado da linha' (as zonas coloniais do Sul global, onde impera a pilhagem, a violência e a desumanização). Para além dessa linha, os saberes ancestrais de povos indígenas, quilombolas e camponeses foram historicamente destruídos pelo 'epistemicídio' — a aniquilação sistemática de formas de conhecimento não eurocêntricas. Proponho as 'Epistemologias do Sul' e a 'ecologia de saberes' para resgatar a pluralidade cognitiva emancipatória.\n(SANTOS, Boaventura de Sousa. Para Além do Pensamento Abissal, 2007)",
      source: "SANTOS, Boaventura de Sousa. Epistemologias do Sul. São Paulo: Cortez, 2010."
    },
    prompt: "A proposta de uma 'ecologia de saberes' formulada pelo sociólogo Boaventura de Sousa Santos visa combater o epistemicídio ao defender que",
    options: [
      {
        id: "a",
        text: "o conhecimento científico ocidental eurocêntrico é a única forma legítima e verdadeira de inteligência no universo.",
        isCorrect: false,
        distractorRationale: "O autor denuncia exatamente esse monopólio eurocêntrico como a raiz do pensamento abissal."
      },
      {
        id: "b",
        text: "a ciência moderna deve dialogar em condições de igualdade com os saberes populares, tradicionais, indígenas e afrodescendentes para a emancipação social.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A ecologia de saberes rejeita a supremacia hierárquica e hegemônica do positivismo eurocêntrico: ela promove um diálogo intercultural horizontal entre o rigor científico e a rica sabedoria acumulada por povos originários, comunidades tradicionais e movimentos sociais do Sul global, reconhecendo que não há justiça social global sem justiça cognitiva global."
      },
      {
        id: "c",
        text: "toda a ciência médica deve ser abandonada em favor de feitiçarias comprovadamente ineficazes.",
        isCorrect: false,
        distractorRationale: "O autor não rejeita a ciência; propõe integrá-la ecologicamente a outros conhecimentos sem arrogância colonizadora."
      },
      {
        id: "d",
        text: "os países do Norte global devem colonizar novamente o hemisfério sul para impor suas academias.",
        isCorrect: false,
        distractorRationale: "O autor é um dos maiores expoentes mundiais do pensamento descolonial e antimperialista."
      },
      {
        id: "e",
        text: "as universidades públicas devem fechar seus cursos de ciências humanas e sociais.",
        isCorrect: false,
        distractorRationale: "Boaventura defende a universidade pública emancipadora e descolonizada."
      }
    ],
    detailedExplanation: {
      summary: "A ecologia de saberes propõe a justiça cognitiva: diálogo horizontal entre a ciência e os saberes ancestrais e populares do Sul global.",
      stepByStep: [
        "Passo 1: Entender os conceitos centrais de Boaventura de Sousa Santos:",
        "Pensamento abissal (divisão colonial do mundo) e Epistemicídio (destruição de saberes não europeus).",
        "Passo 2: Reconhecer a alternativa de superação:",
        "Ecologia de saberes: convivência dialógica e valorização das epistemologias do Sul para promover justiça social e cognitiva.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Ecologia de Saberes (Boaventura) = articulação plural e não-hierárquica entre ciência e conhecimentos tradicionais para superar o epistemicídio colonial.",
      trapWarning: "Epistemicídio e pensamento decolonial são temas de altíssima relevância interdisciplinar no ENEM (História, Filosofia e Redação)."
    },
    commonTraps: ["Achar que a ecologia de saberes propõe a destruição ou negação da ciência"],
    tags: ["boaventura-de-sousa-santos", "epistemicidio", "ecologia-de-saberes", "pensamento-decolonial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-018",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Axel Honneth: A Luta por Reconhecimento",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os conflitos sociais não são movidos unicamente pelo cálculo frio de interesses econômicos de distribuição de renda ou recursos materiais. Na perspectiva da teoria crítica contemporânea, as lutas sociais mais profundas nascem de sentimentos morais de humilhação, desrespeito e injustiça quando a identidade de um grupo é negada. Axel Honneth estabelece que a formação da integridade humana exige três esferas interdependentes de reconhecimento mútuo:\n1. O Amor e o afeto nas relações primárias familiares e de amizade (gerando a autoconfiança);\n2. O Direito e o reconhecimento jurídico como sujeito igual perante a lei (gerando o autorrespeito civil);\n3. A Solidariedade e a estima social pelo valor cultural e laboral de suas contribuições específicas à comunidade (gerando a autoestima).\n(HONNETH, Axel. Luta por Reconhecimento: A Gramática Moral dos Conflitos Sociais, 1992)",
      source: "HONNETH, Axel. Luta por Reconhecimento. São Paulo: Editora 34, 2003."
    },
    prompt: "Ao analisar a 'gramática moral dos conflitos sociais', Axel Honneth sustenta que a luta por reconhecimento de grupos historicamente marginalizados (como mulheres, negros e indígenas) visa primordialmente a",
    options: [
      {
        id: "a",
        text: "impor a supremacia bélica de uma etnia sobre as demais em uma guerra civil permanente.",
        isCorrect: false,
        distractorRationale: "O objetivo de Honneth é a emancipação e o reconhecimento recíproco pacífico de direitos, não a supremacia bélica."
      },
      {
        id: "b",
        text: "superar a humilhação social e a invisibilidade institucional, conquistando direitos iguais e a valorização pública de suas identidades e contribuições.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para Honneth, a negação de direitos ou a estigmatização cultural são formas de 'desrespeito moral' que violam a dignidade e bloqueiam a plena autorrealização dos indivíduos. Os movimentos sociais contemporâneos não lutam apenas por bens materiais, mas pela conquista do autorrespeito (igualdade de direitos civis) e da autoestima comunitária (reconhecimento do valor de sua cultura e história)."
      },
      {
        id: "c",
        text: "eliminar todos os laços afetivos familiares em favor da tutela fria do Estado.",
        isCorrect: false,
        distractorRationale: "A primeira esfera basilar do reconhecimento em Honneth é precisamente o amor e o afeto familiar íntimo."
      },
      {
        id: "d",
        text: "instituir o isolamento dos cidadãos em redes sociais sem qualquer contato presencial.",
        isCorrect: false,
        distractorRationale: "Honneth valoriza as relações intersubjetivas comunitárias de solidariedade real."
      },
      {
        id: "e",
        text: "restringir o acesso aos tribunais de justiça exclusivamente a famílias abastadas.",
        isCorrect: false,
        distractorRationale: "O direito igual para todos os cidadãos é a exigência central da segunda esfera de reconhecimento."
      }
    ],
    detailedExplanation: {
      summary: "Para Honneth, a luta social é uma demanda moral por reconhecimento em três esferas: amor (autoconfiança), direito (autorrespeito) e solidariedade (autoestima).",
      stepByStep: [
        "Passo 1: Identificar a tese de Axel Honneth:",
        "Conflitos sociais são motivados por sentimentos de desrespeito moral, humilhação e invisibilidade social.",
        "Passo 2: Reconhecer as três esferas de reconhecimento recíproco:",
        "Afeto íntimo, igualdade de direitos jurídicos e estima social solidária.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Luta por Reconhecimento (Honneth) = teoria sociológica que enxerga nos sentimentos morais de desrespeito o motor principal das lutas por direitos e dignidade.",
      trapWarning: "Honneth dialoga com Hegel e a Escola de Frankfurt, complementando a tradicional luta de classes marxista com a dimensão moral do reconhecimento da alteridade."
    },
    commonTraps: ["Achar que conflitos sociais só têm causas econômicas materiais monetárias"],
    tags: ["axel-honneth", "luta-por-reconhecimento", "teoria-critica", "direitos-morais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-019",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Chantal Mouffe e o Agonismo Democrático",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A ilusão do consenso racional absoluto promovida pelo liberalismo pós-político ignora que o conflito de interesses e visões de mundo é uma dimensão indelével da convivência humana. Em vez de tentar erradicar o conflito ou tratá-lo como uma anomalia moral a ser sufocada, a verdadeira tarefa da política democrática é domesticar a agressividade destrutiva: transformar o 'antagonismo' violento (onde o outro é visto como um inimigo a ser fisicamente aniquilado) em 'agonismo' democrático legítimo (onde o outro é reconhecido como um 'adversário' cujas ideias combatemos energicamente, mas cujo direito de existir e defender suas propostas é rigorosamente respeitado).\n(MOUFFE, Chantal. O Paradoxo Democrático / Sobre o Político, 2000-2005)",
      source: "MOUFFE, Chantal. Sobre o Político. São Paulo: WMF Martins Fontes, 2015."
    },
    prompt: "A concepção de 'agonismo' defendida pela filósofa política Chantal Mouffe contribui para o revigoramento da democracia ao",
    options: [
      {
        id: "a",
        text: "defender o linchamento físico e a cassação violenta de todos os opositores partidários.",
        isCorrect: false,
        distractorRationale: "Isso caracteriza o antagonismo belicoso que a autora busca justamente superar."
      },
      {
        id: "b",
        text: "reconhecer o conflito como inerente à vida política, canalizando as divergências ideológicas para a disputa legítima entre adversários com respeito às regras do jogo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Chantal Mouffe critica as teorias liberais que sonham com um 'consenso técnico neutro' despolitizado. Para a autora, a paixão política e as divisões são constitutivas da sociedade. A essência da democracia pluralista consiste em transformar a inimizade mortal (antagonismo) em rivalidade legítima (agonismo), garantindo que as disputas por projetos de sociedade ocorram no terreno institucional sem destruir os opositores."
      },
      {
        id: "c",
        text: "impor o pensamento único estatal e proibir a existência de partidos políticos plurais.",
        isCorrect: false,
        distractorRationale: "A imposição do pensamento único é a marca do autoritarismo que Mouffe combate."
      },
      {
        id: "d",
        text: "sustentar que a política deve ser decidida unicamente por algoritmos de inteligência artificial.",
        isCorrect: false,
        distractorRationale: "A política para a autora é espaço de paixão cívica, confronto de valores humanos e decisão coletiva."
      },
      {
        id: "e",
        text: "rejeitar qualquer tipo de debate eleitoral por considerá-lo inútil à sociedade.",
        isCorrect: false,
        distractorRationale: "A arena eleitoral e o parlamento são exatamente os espaços agonísticos de canalização do conflito."
      }
    ],
    detailedExplanation: {
      summary: "O agonismo democrático de Mouffe transforma o inimigo mortal em adversário legítimo, acolhendo o conflito como motor da democracia.",
      stepByStep: [
        "Passo 1: Analisar a crítica de Chantal Mouffe ao mito do consenso universal pacificado.",
        "Passo 2: Distinguir antagonismo (destruição do inimigo) de agonismo (disputa pacífica entre adversários legítimos).",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Agonismo (Chantal Mouffe) = canalização institucional do dissenso e da paixão política, onde adversários disputam a hegemonia sem se aniquilarem.",
      trapWarning: "Democracia não é ausência de discordância; é a convivência institucionalizada civilizada das diferenças intransigentes."
    },
    commonTraps: ["Achar que conflito político é necessariamente sinônimo de violência física ou destruição da democracia"],
    tags: ["chantal-mouffe", "agonismo", "democracia-pluralista", "conflito-politico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-020",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Frantz Fanon e a Descolonização Política",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A descolonização nunca passa despercebida, pois atinge a própria substância dos seres, transforma os espectadores sobrecarregados de inessencialidade em atores privilegiados, colhidos de modo quase grandioso pelo facho da história. O colonialismo não é uma máquina de pensar, é a violência em estado bruto e só pode se curvar diante de uma violência maior. Mas a descolonização não é apenas expulsar o exército metropolitano ocupante; é também um processo psíquico e cultural profundo de libertação da mente colonizada, que foi ensinada pelo colonizador a odiar a si mesma, a sua cor, a sua cultura e a sua história.\n(FANON, Frantz. Os Condenados da Terra / Pele Negra, Máscaras Brancas, 1952-1961)",
      source: "FANON, Frantz. Os Condenados da Terra. Juiz de Fora: Editora UFJF, 2005."
    },
    prompt: "Na teoria crítica anticolonial de Frantz Fanon, a verdadeira descolonização dos povos submetidos ao jugo imperialista pressupõe",
    options: [
      {
        id: "a",
        text: "a submissão passiva e voluntária aos valores culturais e estéticos da potência europeia colonizadora.",
        isCorrect: false,
        distractorRationale: "A submissão passiva é a própria perpetuação da condição de colonizado que Fanon visa destruir."
      },
      {
        id: "b",
        text: "a desconstrução das estruturas políticas de dominação imperialista combinada à emancipação psicológica e resgate da dignidade e autoestima do oprimido.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Psiquiatra martinicano que atuou na Frente de Libertação Nacional da Argélia, Fanon articula psicanálise, marxismo e filosofia política para demonstrar que o colonialismo opera uma dupla violência: militar-econômica (ocupação e espoliação da terra) e psicológica-existencial (o complexo de inferioridade inculcado no colonizado). A libertação autêntica exige romper as amarras materiais do imperialismo e reconstruir a subjetividade e a identidade cultural dos povos oprimidos."
      },
      {
        id: "c",
        text: "a proibição de que povos africanos assumam cargos de liderança política em suas próprias terras.",
        isCorrect: false,
        distractorRationale: "A autodeterminação e soberania plena dos africanos é a meta incontornável de Fanon."
      },
      {
        id: "d",
        text: "o esquecimento de todos os crimes cometidos pelas metrópoles imperialistas para agradar aos mercados de ações.",
        isCorrect: false,
        distractorRationale: "Fanon exige a memória histórica e a denúncia implacável da brutalidade colonial."
      },
      {
        id: "e",
        text: "a conversão compulsória de todas as populações das colônias ao cristianismo europeu medieval.",
        isCorrect: false,
        distractorRationale: "A imposição religiosa colonial foi parte do epistemicídio e da aculturação forçada que Fanon desmascara."
      }
    ],
    detailedExplanation: {
      summary: "Para Fanon, a descolonização é um duplo movimento indissociável: libertação política da terra e libertação psíquica da mente colonizada.",
      stepByStep: [
        "Passo 1: Entender a especificidade do pensamento de Frantz Fanon:",
        "União entre diagnóstico político-militar (Os Condenados da Terra) e psicanalítico-social (Pele Negra, Máscaras Brancas).",
        "Passo 2: Reconhecer a meta da descolonização:",
        "Destruição do sistema colonial e reconquista da dignidade, humanidade e soberania dos povos subalternizados.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Descolonização psicopolítica (Fanon) = superação da espoliação colonial externa articulada à cura do complexo de inferioridade internalizado pelo racismo estrutural.",
      trapWarning: "Fanon é o pilar teórico do pensamento pós-colonial e decolonial; sua presença no ENEM cresceu acentuadamente nos últimos anos."
    },
    commonTraps: ["Reduzir a descolonização a mera troca de bandeiras e governantes sem transformação cultural e psicológica"],
    tags: ["frantz-fanon", "anticolonialismo", "descolonizacao", "psicologia-politica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-021",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Judith Butler: Vulnerabilidade Compartilhada e Direito de Assembleia",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Quando corpos se reúnem nas ruas, praças e avenidas públicas para protestar contra a precarização das condições materiais de existência, algo crucial ocorre antes mesmo de qualquer palavra ser pronunciada em cartazes ou megafones. A própria presença física daqueles corpos reunidos no espaço público é uma declaração performativa: 'nós estamos aqui, nós importamos, e nos recusamos a ser descartáveis'. A vulnerabilidade humana não é apenas uma fraqueza individual; é a nossa condição ontológica compartilhada. Ao reconhecer que todos os corpos necessitam de abrigo, saúde, alimentação e redes coletivas de amparo para persistir, a política contemporânea ganha um novo imperativo ético: garantir que todas as vidas sejam dignas de ser vividas e merecedoras de luto público.\n(BUTLER, Judith. Corpos em Aliança e a Política das Ruas / Quadros de Guerra, 2009-2015)",
      source: "BUTLER, Judith. Corpos em Aliança e a Política das Ruas. Rio de Janeiro: Civilização Brasileira, 2018."
    },
    prompt: "A reflexão de Judith Butler sobre os atos contemporâneos de manifestação popular no espaço público atribui relevância política à",
    options: [
      {
        id: "a",
        text: "substituição definitiva dos protestos de rua por petições eletrônicas em redes corporativas privadas.",
        isCorrect: false,
        distractorRationale: "Butler enfatiza precisamente a corporalidade física presencial ocupando as ruas."
      },
      {
        id: "b",
        text: "corporalidade performativa e à reivindicação coletiva contra a precariedade induzida e em defesa do valor universal de todas as vidas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Judith Butler desenvolve uma potente filosofia política dos 'corpos em aliança': a ocupação corpórea das praças públicas é em si um ato discursivo performativo que denuncia a 'precariedade diferencial' (quando o neoliberalismo torna certas vidas descartáveis e desprotegidas), forjando solidariedades horizontais para exigir direitos sociais e afirmar a igualdade radical de luto e dignidade para todos os sujeitos."
      },
      {
        id: "c",
        text: "repressão violenta incondicional de qualquer aglomeração popular que perturbe o trânsito de veículos.",
        isCorrect: false,
        distractorRationale: "A autora defende o direito democrático inalienável de manifestação e reunião popular pacífica."
      },
      {
        id: "d",
        text: "eliminação das redes públicas de seguridade e saúde para estimular a autossuficiência estóica individual.",
        isCorrect: false,
        distractorRationale: "A autora denuncia exatamente a destruição das redes de amparo social como causa da precarização."
      },
      {
        id: "e",
        text: "proibição da presença de mulheres e minorias de gênero em manifestações sindicais.",
        isCorrect: false,
        distractorRationale: "Butler é uma teórica feminista e queer que luta pela centralidade e voz desses grupos nas lutas coletivas."
      }
    ],
    detailedExplanation: {
      summary: "Para Butler, a reunião de corpos nas ruas é um ato político performativo que afirma a interdependência humana contra a precariedade induzida.",
      stepByStep: [
        "Passo 1: Notar o conceito de 'corpos em aliança' e 'performatividade das ruas':",
        "A presença física dos corpos reunidos desafia a desumanização e a invisibilidade.",
        "Passo 2: Reconhecer a tese da precariedade compartilhada:",
        "Todas as vidas são interdependentes e necessitam de amparo material; manifestar-se exige o reconhecimento de que nenhuma vida é descartável.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Precarização induzida e aliança de corpos (Judith Butler) = mobilização física pública em defesa de vidas enlutáveis e do suporte material da existência.",
      trapWarning: "Judith Butler não escreve apenas sobre gênero; sua obra recente é um dos marcos fundamentais da teoria política e dos direitos humanos contemporâneos."
    },
    commonTraps: ["Achar que a ocupação das ruas não possui valor discursivo antes de se proferirem discursos formais"],
    tags: ["judith-butler", "corpos-em-alianca", "precariedade", "filosofia-politica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-022",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Sociologia Política",
    subtopic: "Alexis de Tocqueville: A Democracia e a Sociedade Civil",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nos países democráticos, a ciência da associação é a ciência-mãe; o progresso de todas as outras depende do progresso dela. Entre as leis que regem as sociedades humanas, há uma que parece mais precisa e mais clara do que todas as outras: para que os homens permaneçam civilizados ou assim se tornem, é preciso que a arte de se associar se desenvolva e se aperfeiçoe na mesma proporção em que a igualdade das condições cresce. Pois, quando os cidadãos se isolam em um individualismo privatista estrito, preocupados unicamente com suas pequenas fortunas familiares, surge o maior de todos os perigos democráticos: a emergência de um poder tutelar imenso e benévolo, que retira dos homens todo o fardo de pensar e todo o trabalho de viver.\n(TOCQUEVILLE, Alexis de. A Democracia na América, Livro II, 1840)",
      source: "TOCQUEVILLE, Alexis de. A Democracia na América. São Paulo: Martins Fontes, 2005."
    },
    prompt: "Ao analisar a dinâmica da sociedade norte-americana do século XIX, Alexis de Tocqueville identificou que o antídoto primordial contra o despotismo tutelar nas democracias é o(a)",
    options: [
      {
        id: "a",
        text: "fortalecimento do individualismo hedonista e o desinteresse cívico pela vida comunitária.",
        isCorrect: false,
        distractorRationale: "O autor aponta o individualismo estrito como o maior risco de degeneração autoritária da democracia."
      },
      {
        id: "b",
        text: "engajamento ativo dos cidadãos em associações civis voluntárias e na participação cívica comunitária local.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Tocqueville alertou que a 'igualdade de condições' na democracia podia degenerar em isolamento individualista, abrindo caminho para um despotismo suave onde um Estado paternalista tutelar controla tudo. A barreira de proteção contra essa tirania é a vitalidade da sociedade civil: a capacidade dos cidadãos de se associarem livremente (clubes, jornais locais, cooperativas, sindicatos, associações de bairro) para resolver problemas públicos coletivos sem esperar passivamente pelo Estado."
      },
      {
        id: "c",
        text: "restauração dos títulos nobiliárquicos hereditários feudais e da monarquia absolutista.",
        isCorrect: false,
        distractorRationale: "Tocqueville reconhece a democracia e a igualdade de condições como tendências históricas inevitáveis."
      },
      {
        id: "d",
        text: "proibição legal de reuniões públicas pacíficas e de agremiações comunitárias.",
        isCorrect: false,
        distractorRationale: "Ele considera a liberdade irrestrita de associação a 'ciência-mãe' da civilização democrática."
      },
      {
        id: "e",
        text: "centralização despótica de todas as decisões administrativas na capital federal.",
        isCorrect: false,
        distractorRationale: "Tocqueville elogia a descentralização administrativa local (as comunas americanas) como escola de cidadania."
      }
    ],
    detailedExplanation: {
      summary: "Tocqueville viu na arte da livre associação e na sociedade civil participativa o grande escudo protetor contra o despotismo tutelar democrático.",
      stepByStep: [
        "Passo 1: Ler o diagnóstico de Tocqueville em A Democracia na América:",
        "O perigo da democracia é o 'individualismo privatista' que entrega o poder a um Estado paternalista despótico.",
        "Passo 2: Reconhecer a solução tocquevilliana:",
        "A prática contínua de associações civis voluntárias (escola de cidadania local).",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Associações civis (Tocqueville) = corpos intermediários da sociedade civil que cultivam a virtude cívica e impedem a tirania do Estado sobre o indivíduo isolado.",
      trapWarning: "Tocqueville é o clássico do pensamento sociopolítico liberal sobre sociedade civil e capital social, muito mobilizado em questões interdisciplinares do ENEM."
    },
    commonTraps: ["Achar que Tocqueville defendia o isolamento individualista como virtude da democracia"],
    tags: ["alexis-de-tocqueville", "democracia-na-america", "sociedade-civil", "associativismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-023",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Filosofia Política",
    subtopic: "Immanuel Kant: A Paz Perpétua e o Direito Cosmopolita",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A razão moralmente prática exprime em nós o seu veto irremovível: não deve haver guerra. Nem a guerra entre indivíduos no estado de natureza, nem a guerra entre Estados, que, embora vivam em sua liberdade externa, se encontram, como selvagens sem leis, numa condição de hostilidade recíproca contínua. Para superar essa barbárie internacional, o Direito das Gentes deve fundar-se numa federação de Estados livres e republicanos, e o Direito Cosmopolita deve limitar-se às condições da hospitalidade universal: o direito de um estrangeiro não ser tratado como inimigo ao chegar ao território de outrem, desde que se comporte pacificamente.\n(KANT, Immanuel. À Paz Perpétua: Um Projeto Filosófico, 1795)",
      source: "KANT, Immanuel. À Paz Perpétua. Porto Alegre: L&PM, 2008."
    },
    prompt: "No projeto filosófico de Immanuel Kant sobre as relações internacionais, a superação dos conflitos bélicos globais apoia-se no(a)",
    options: [
      {
        id: "a",
        text: "criação de um império universal autocrático que anexe militarmente todos os países soberanos.",
        isCorrect: false,
        distractorRationale: "Kant rejeita a monarquia universal ou o império global, alertando que isso geraria a tirania mais sufocante."
      },
      {
        id: "b",
        text: "constituição republicana interna dos Estados aliada a uma federação pacífica de repúblicas soberanas regidas pela hospitalidade universal do direito cosmopolita.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Kant antecipou as bases da Liga das Nações e da ONU: a paz duradoura não é uma trégua passageira, mas um imperativo da razão jurídica que exige três artigos definitivos: 1) Constituição republicana em cada Estado (onde os cidadãos decidem sobre a guerra e arcam com seus custos); 2) Federação de repúblicas livres e iguais (foedus pacificum); e 3) Direito cosmopolita baseado na hospitalidade universal para com os cidadãos do mundo."
      },
      {
        id: "c",
        text: "corrida armamentista ilimitada e investimento massivo em armas nucleares.",
        isCorrect: false,
        distractorRationale: "Kant propõe explicitamente a extinção progressiva dos exércitos permanentes (Artigo Preliminar 3)."
      },
      {
        id: "d",
        text: "expulsão e extermínio imediato de qualquer imigrante que atravesse fronteiras nacionais.",
        isCorrect: false,
        distractorRationale: "O direito cosmopolita kantiano é fundado na hospitalidade universal incondicional ao estrangeiro pacífico."
      },
      {
        id: "e",
        text: "dissolução da moral em nome do relativismo cultural pragmático de Maquiavel.",
        isCorrect: false,
        distractorRationale: "Kant fundamenta a política estritamente na moral do imperativo categórico da razão."
      }
    ],
    detailedExplanation: {
      summary: "Kant desenhou a arquitetura da paz perpétua através do republicanismo interno, de uma federação pacífica de Estados livres e do direito cosmopolita de hospitalidade.",
      stepByStep: [
        "Passo 1: Entender o imperativo kantiano: a guerra deve ser erradicada como resquício selvagem do estado de natureza entre nações.",
        "Passo 2: Reconhecer os pilares da Paz Perpétua:",
        "Repúblicas constitucionais internas, aliança/federação pacífica internacional de nações soberanas e direito cosmopolita de hospitalidade universal.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Paz Perpétua e Direito Cosmopolita (Kant) = projeto racional-jurídico que inspirou o direito internacional moderno e a Carta das Nações Unidas de 1948.",
      trapWarning: "Kant é o pai do cosmopolitismo ético; para ele, a Terra é esférica e finita, o que obriga a humanidade a conviver fraternalmente no solo comum."
    },
    commonTraps: ["Confundir a federação de repúblicas livres de Kant com um super-Estado despótico mundial"],
    tags: ["immanuel-kant", "paz-perpetua", "direito-cosmopolita", "relacoes-internacionais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-024",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Sociologia Política",
    subtopic: "Angela Davis e a Democracia da Abolição",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O encarceramento em massa não resolveu a criminalidade; ele se converteu em uma indústria punitiva altamente lucrativa: o complexo industrial-prisional. As prisões funcionam como um 'buraco negro' onde a sociedade oculta os problemas sociais decorrentes do desemprego estrutural, do desmonte do bem-estar social, da falta de escolas de qualidade e do racismo sistêmico. Não basta reformar as penitenciárias; é imperativo construir a 'democracia da abolição' — uma sociedade onde os recursos públicos bilionários hoje drenados para a construção de celas e armas policiais sejam redirecionados para a educação pública gratuita, saúde mental, habitação popular e justiça restaurativa.\n(DAVIS, Angela. Estarão as Prisões Obsoletas? / A Democracia da Abolição, 2003-2005)",
      source: "DAVIS, Angela. Estarão as Prisões Obsoletas? Rio de Janeiro: Difel, 2018."
    },
    prompt: "A perspectiva do abolicionismo penal desenvolvida pela filósofa e ativista Angela Davis propõe refundar o conceito de segurança pública ao sustentar que a redução da violência exige",
    options: [
      {
        id: "a",
        text: "o aumento contínuo de presídios de segurança máxima operados por corporações privadas com fins lucrativos.",
        isCorrect: false,
        distractorRationale: "Davis denuncia o complexo industrial-prisional privatizado como uma engrenagem que lucra com o encarceramento de corpos negros e pobres."
      },
      {
        id: "b",
        text: "o enfrentamento das raízes socioeconômicas e raciais da vulnerabilidade social por meio de investimentos públicos em educação, saúde e redes de garantia de direitos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Angela Davis desmonta a ilusão punitivista de que prender mais pessoas resolve os problemas sociais. Inspirando-se no abolicionismo histórico de W.E.B. Du Bois, ela defende que a 'democracia da abolição' requer extinguir as raízes estruturais da violência (pobreza, desamparo, racismo) através do investimento maciço em infraestrutura social, saneamento, escolas públicas e justiça comunitária restaurativa, tornando as prisões gradualmente obsoletas."
      },
      {
        id: "c",
        text: "a pena de morte automática para qualquer cidadão detido em manifestações populares.",
        isCorrect: false,
        distractorRationale: "Davis é uma defensora histórica intransigente dos direitos humanos e combate veementemente a pena de morte."
      },
      {
        id: "d",
        text: "o cancelamento de todas as verbas orçamentárias destinadas à rede pública de ensino fundamental.",
        isCorrect: false,
        distractorRationale: "A educação pública de excelência é exatamente o pilar fundamental da proposta de Angela Davis."
      },
      {
        id: "e",
        text: "a subordinação da justiça penal aos desígnios corporativos de indústrias bélicas de armamento pesado.",
        isCorrect: false,
        distractorRationale: "O complexo industrial-bélico e prisional é o principal alvo de desmantelamento na teoria crítica de Davis."
      }
    ],
    detailedExplanation: {
      summary: "Angela Davis defende a democracia da abolição: substituir o ciclo punitivista carcerário por investimentos em bem-estar social, educação e justiça restaurativa.",
      stepByStep: [
        "Passo 1: Entender a crítica de Angela Davis ao 'complexo industrial-prisional':",
        "Prisões lucram com o encarceramento e escondem problemas sociais (racismo estrutural, desemprego).",
        "Passo 2: Reconhecer a proposta da 'Democracia da Abolição':",
        "Realocar recursos do punitivismo penal para a base social: escolas, saúde mental, moradia e dignidade humana.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Abolicionismo penal (Angela Davis) = projeto ético e político de superar o cárcere através da garantia plena de direitos sociais e justiça restaurativa.",
      trapWarning: "Angela Davis articula raça, gênero e classe (interseccionalidade) como categorias indissociáveis para compreender o sistema penal moderno."
    },
    commonTraps: ["Achar que o abolicionismo penal propõe soltar criminosos sem construir estruturas sociais prévias de reparação e amparo"],
    tags: ["angela-davis", "abolicionismo-penal", "complexo-industrial-prisional", "interseccionalidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-POL-025",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Sociologia e Filosofia Brasileira",
    subtopic: "Marilena Chaui: Mito da Não-Violência e Autoritarismo Social",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A sociedade brasileira construiu um mito fundador apaziguador: o mito da 'não-violência', que retrata o brasileiro como um povo naturalmente cordial, pacífico, tolerante, miscigenado e avesso a conflitos. Esse mito ideológico cumpre uma função política perversa: ao ocultar a violência real sob uma camada de suposta brandura, ele invisibiliza o genocídio indígena, os séculos de escravidão negra, o machismo estrutural que vitima mulheres diariamente e o massacre das periferias urbanas. A sociedade brasileira é profundamente autoritária, hierárquica e violenta em suas relações cotidianas (na família, na escola, no trabalho e na polícia). Diante dessa realidade, a democracia não pode ser vista como um regime meramente eleitoral formal de alternância de governantes; a democracia é a criação contínua de novos direitos e a luta permanente contra a desigualdade e o autoritarismo socialmente enraizado.\n(CHAUI, Marilena. Brasil: Mito Fundador e Sociedade Autoritária / O que É Ideologia, 2000)",
      source: "CHAUI, Marilena. Brasil: Mito Fundador e Sociedade Autoritária. São Paulo: Fundação Perseu Abramo, 2000."
    },
    prompt: "Na análise filosófica de Marilena Chaui, a desconstrução do mito da não-violência é um pré-requisito indispensável para a consolidação democrática no Brasil porque esse mito",
    options: [
      {
        id: "a",
        text: "estimula a criação de novos direitos trabalhistas em benefício exclusivo de minorias sociais.",
        isCorrect: false,
        distractorRationale: "O mito impede a percepção das injustiças e trava o avanço de novos direitos."
      },
      {
        id: "b",
        text: "mascara e naturaliza as violentas hierarquias sociais, raciais e de classe do país, enfraquecendo a percepção crítica e a luta popular por igualdade substantiva.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Chaui demonstra como a ideologia da 'cordialidade pacífica' atua como barreira cognitiva: ao fingir que o Brasil é um paraíso de harmonia racial e ausência de atritos, deslegitima os conflitos sociais reais, trata protestos populares como 'arruaça ou crime' e normaliza a brutalidade contra negros, indígenas, mulheres e trabalhadores pobres, impedindo a democratização das relações sociais cotidianas."
      },
      {
        id: "c",
        text: "comprova cientificamente que o Brasil é o país com os menores índices de criminalidade do planeta.",
        isCorrect: false,
        distractorRationale: "O Brasil ostenta historicamente taxas altíssimas de homicídios e violência letal."
      },
      {
        id: "d",
        text: "obriga todos os cidadãos a participarem de treinamentos militares no exterior.",
        isCorrect: false,
        distractorRationale: "A análise de Chaui não envolve recrutamento militar externo."
      },
      {
        id: "e",
        text: "elimina a necessidade de leis escritas ao instaurar o império da fraternidade espontânea.",
        isCorrect: false,
        distractorRationale: "A fraternidade espontânea é exatamente a ilusão mítica que Chaui desconstrói."
      }
    ],
    detailedExplanation: {
      summary: "Marilena Chaui desconstrói o mito do brasileiro pacífico, revelando o autoritarismo social enraizado e definindo a democracia como invenção permanente de novos direitos.",
      stepByStep: [
        "Passo 1: Entender a tese de Marilena Chaui sobre o 'Mito Fundador':",
        "O mito do brasileiro cordial e pacífico mascara a violência real (escravidão, genocídio indígena, desigualdade, machismo).",
        "Passo 2: Reconhecer a função ideológica desse mito:",
        "Naturalizar a hierarquia social e frear a mobilização popular por direitos reais.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Mito fundador e autoritarismo social (Marilena Chaui) = ideologia de cordialidade que oculta as violências estruturais do Brasil, demandando uma democracia que crie novos direitos sem cessar.",
      trapWarning: "Esta é a questão de ouro do pensamento filosófico brasileiro no ENEM: relaciona ideologia, autoritarismo social e o conceito substantivo de democracia."
    },
    commonTraps: ["Acreditar ingenuamente no mito do brasileiro cordial como verdade sociológica empírica"],
    tags: ["marilena-chaui", "mito-fundador", "autoritarismo-social", "democracia-brasileira"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
