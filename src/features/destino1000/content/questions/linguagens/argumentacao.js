export const QUESTIONS_ARGUMENTACAO = [
  {
    id: "LIN-ARG-001",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Estratégia do Argumento de Autoridade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A hiperconexão digital prometia democratizar o acesso à informação, mas produziu uma saturação cognitiva sem precedentes. Como bem apontou o sociólogo francês Pierre Bourdieu, 'a velocidade das informações na televisão e nas redes não favorece o pensamento, pois pensar exige tempo, recuo e silêncio'. Quando o debate público é pautado pela urgência do clique, a complexidade dos problemas sociais é sacrificada em prol de respostas maniqueístas e polarizadas.",
      source: "Ensaio contemporâneo sobre comunicação e esfera pública"
    },
    prompt: "No texto, o autor constrói sua tese recorrendo a uma estratégia argumentativa específica. O recurso utilizado e sua função persuasiva consistem em:",
    options: [
      {
        id: "a",
        text: "apresentar dados estatísticos quantitativos para demonstrar empiricamente a decadência das redes sociais.",
        isCorrect: false,
        distractorRationale: "O texto não traz métricas, porcentagens ou levantamentos quantitativos, baseando-se em reflexão teórica."
      },
      {
        id: "b",
        text: "citar o pensamento de um pensador consagrado para conferir legitimidade e solidez à crítica apresentada.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "c",
        text: "relatar uma anedota pessoal com a finalidade de despertar compaixão e comoção no leitor.",
        isCorrect: false,
        distractorRationale: "Não há relato autobiográfico ou apelo à piedade individual."
      },
      {
        id: "d",
        text: "utilizar a ironia agressiva para desqualificar previamente a inteligência do usuário das plataformas.",
        isCorrect: false,
        distractorRationale: "O tom do texto é analítico e acadêmico, não sarcástico ou desrespeitoso."
      },
      {
        id: "e",
        text: "estabelecer uma falsa correlação causal entre o silêncio mental e o analfabetismo funcional.",
        isCorrect: false,
        distractorRationale: "O texto valoriza o silêncio reflexivo como condição do pensamento crítico, sem abordar analfabetismo."
      }
    ],
    detailedExplanation: {
      summary: "O texto emprega um argumento de autoridade ao citar Pierre Bourdieu para fundamentar a crítica à velocidade do consumo de informação digital.",
      stepByStep: [
        "Passo 1: Identificar a tese do autor: a velocidade da comunicação digital prejudica o pensamento reflexivo profundo.",
        "Passo 2: Analisar a citação direta: 'Como bem apontou o sociólogo francês Pierre Bourdieu...'.",
        "Passo 3: Reconhecer a função retórica: trazer a voz de um especialista renomado para respaldar e conferir autoridade ao ponto de vista defendido."
      ],
      coreConcept: "Argumento de autoridade como ferramenta de legitimação no gênero dissertativo.",
      trapWarning: "Cuidado para não confundir citação teórica (autoridade) com comprovação empírica por dados estatísticos."
    },
    commonTraps: ["confundir autoridade com dados numéricos"],
    tags: ["argumentacao", "autoridade", "redes-sociais", "bourdieu"],
    status: "published",
    version: 2,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-002",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "Operadores Argumentativos de Concessão e Refutação",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Embora os defensores da inteligência artificial generativa destaquem os ganhos de produtividade e a automatização de tarefas burocráticas, não se pode ignorar o custo ambiental massivo dos servidores de processamento e a precarização do trabalho autoral. A suposta neutralidade dos algoritmos mascara o fato de que eles dependem do trabalho mal remunerado de moderadores de conteúdo em países do Sul Global e da apropriação não consentida de patrimônio criativo.",
      source: "Artigo de opinião sobre ética e tecnologia"
    },
    prompt: "A articulação sintática no início do texto ('Embora os defensores...') constrói um movimento argumentativo pautado na:",
    options: [
      {
        id: "a",
        text: "concessão, que admite um aspecto favorável ao adversário para em seguida reforçar a tese crítica preponderante.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "b",
        text: "causalidade linear, demonstrando que o aumento da produtividade é a causa direta da precarização laboral.",
        isCorrect: false,
        distractorRationale: "'Embora' expressa concessão/oposição ressalvada, e não nexo de causa e efeito."
      },
      {
        id: "c",
        text: "conclusão precipitada, fechando o raciocínio antes mesmo de expor as premissas essenciais do debate.",
        isCorrect: false,
        distractorRationale: "O operador introduz uma oração subordinada concessiva, abrindo a argumentação."
      },
      {
        id: "d",
        text: "comparação simétrica, colocando ganhos de produtividade e impactos ambientais em idêntico patamar de relevância.",
        isCorrect: false,
        distractorRationale: "O autor não equipara os fatores; ele subordina o aspecto positivo para dar peso esmagador aos aspectos negativos."
      },
      {
        id: "e",
        text: "retificação irônica, que desmente categoricamente a existência de qualquer ganho operacional na automação.",
        isCorrect: false,
        distractorRationale: "Ele admite que os ganhos de produtividade existem de fato, apenas ressalta que vêm acompanhados de custos graves."
      }
    ],
    detailedExplanation: {
      summary: "A conjunção subordinativa concessiva 'embora' introduz um argumento desfavorável já antecipado para neutralizá-lo e evidenciar a força da tese principal.",
      stepByStep: [
        "Passo 1: Reconhecer o conectivo 'embora' como marcador concessivo clássico.",
        "Passo 2: Entender a manobra retórica: conceder um ponto ao opositor para demonstrar maturidade argumentativa e desarmar contra-ataques.",
        "Passo 3: Observar que a oração principal ('não se pode ignorar...') assume o protagonismo discursivo."
      ],
      coreConcept: "A concessão como estratégia de contra-argumentação no texto de opinião.",
      trapWarning: "Concessão não é contradição involuntária; é concessão calculada para fortalecer o argumento principal."
    },
    commonTraps: ["confundir concessão com causa"],
    tags: ["argumentacao", "concessao", "conectivos", "etica"],
    status: "published",
    version: 2,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-003",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Argumentação e Retórica",
    subtopic: "Relação de Causa e Consequência",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A ausência de saneamento básico nas periferias urbanas não representa apenas um déficit de infraestrutura sanitária; ela funciona como um motor reprodutor de desigualdades socioeconômicas. Crianças que crescem em áreas com esgoto a céu aberto faltam com maior frequência à escola em decorrência de infecções gastrointestinais e parasitárias, o que compromete seu rendimento pedagógico e culmina na evasão precoce. No longo prazo, essa defasagem escolar perpetua a inserção em ocupações informais e de baixa renda, alimentando um ciclo vicioso intergeracional.",
      source: "Relatório de Instituto de Políticas Públicas"
    },
    prompt: "A eficácia persuasiva do parágrafo sustenta-se na demonstração encadeada de:",
    options: [
      {
        id: "a",
        text: "uma sucessão causal em cascata, que conecta a precariedade sanitária à perpetuação da pobreza a longo prazo.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "b",
        text: "um conjunto de depoimentos comoventes colhidos diretamente com mães de estudantes afetados.",
        isCorrect: false,
        distractorRationale: "O texto não traz depoimentos orais em primeira pessoa; a linguagem é dissertativa e impessoal."
      },
      {
        id: "c",
        text: "uma oposição irreconciliável entre o avanço da medicina pública e a negligência dos próprios moradores.",
        isCorrect: false,
        distractorRationale: "O texto atribui o problema à carência de infraestrutura do Estado, e não à culpa das famílias moradoras."
      },
      {
        id: "d",
        text: "uma tese biologizante que reduz o rendimento escolar a fatores genéticos imutáveis.",
        isCorrect: false,
        distractorRationale: "As causas apresentadas são socioambientais (esgoto aberto, doenças preveníveis), nunca genéticas."
      },
      {
        id: "e",
        text: "uma comparação histórica entre a Roma Antiga e o urbanismo modernista brasileiro.",
        isCorrect: false,
        distractorRationale: "Não há menção à Antiguidade Clássica no texto de suporte."
      }
    ],
    detailedExplanation: {
      summary: "O autor estrutura o raciocínio em uma cadeia causal lógica: falta de saneamento → doenças infantis → faltas escolares → evasão → baixa remuneração adulta.",
      stepByStep: [
        "Passo 1: Identificar a causa primária: ausência de saneamento básico.",
        "Passo 2: Mapear os elos intermediários: infecções → faltas escolares → evasão.",
        "Passo 3: Concluir o efeito final demonstrado: perpetuação do ciclo de baixa renda."
      ],
      coreConcept: "Cadeia causal progressiva como método demonstrativo no ENEM e na Redação.",
      trapWarning: "Cuidado para não confundir correlação circunstancial com nexo de causalidade estruturado."
    },
    commonTraps: ["desviar para teses biologizantes"],
    tags: ["argumentacao", "causa-consequencia", "saneamento", "cidadania"],
    status: "published",
    version: 2,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-004",
    area: "linguagens",
    competence: 7,
    skill: 24,
    topic: "Argumentação e Retórica",
    subtopic: "Identificação de Falácias Argumentativas",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um debate sobre mobilidade sustentável, um participante defendeu que a ampliação de ciclovias reduz os engarrafamentos e melhora a qualidade do ar nas grandes metrópoles. Em resposta, seu interlocutor afirmou: 'Essa proposta é absurda porque foi defendida por um vereador que sequer possui carro e mora próximo ao trabalho, sendo incapaz de compreender os problemas de quem realmente produz riqueza'.",
      source: "Fragmento de debate público sobre planejamento urbano"
    },
    prompt: "Na resposta do interlocutor, identifica-se um desvio da argumentação racional configurado pela falácia do tipo:",
    options: [
      {
        id: "a",
        text: "apelo à autoridade, por subordinar a decisão à ordem de um magistrado superior.",
        isCorrect: false,
        distractorRationale: "O interlocutor faz o oposto: ele desqualifica quem propôs, em vez de se apoiar em autoridade."
      },
      {
        id: "b",
        text: "argumento ad hominem, que ataca características pessoais do proponente em vez de refutar a tese técnica.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "c",
        text: "falsa causa, ao vincular mecanicamente o uso de bicicletas ao aumento de chuvas na cidade.",
        isCorrect: false,
        distractorRationale: "O foco da fala não é climático, e sim o ataque à vida privada do autor da proposta."
      },
      {
        id: "d",
        text: "petição de princípio, pois repete a mesma premissa como se fosse uma conclusão demonstrada.",
        isCorrect: false,
        distractorRationale: "O erro reside na desqualificação pessoal do emissor, não em circularidade lógica."
      },
      {
        id: "e",
        text: "generalização apressada, extraindo uma lei universal a partir de um caso empírico isolado.",
        isCorrect: false,
        distractorRationale: "Não houve indução estatística precipitada, mas ataque pessoal ofensivo."
      }
    ],
    detailedExplanation: {
      summary: "A falácia ad hominem ocorre quando alguém desqualifica o argumento atacando a pessoa que o formulou (suas condições de vida, escolhas pessoais), ignorando a validade lógica do argumento em si.",
      stepByStep: [
        "Passo 1: Analisar o argumento original: ciclovias melhoram o trânsito e o ar.",
        "Passo 2: Observar a réplica: não discute dados de tráfego nem emissões, mas sim o fato de o vereador não ter carro e morar perto do trabalho.",
        "Passo 3: Identificar a falácia: ataque ao indivíduo (ad hominem)."
      ],
      coreConcept: "Falácias informais e fragilidades na construção do debate democrático.",
      trapWarning: "No ENEM, falácias frequentemente aparecem em questões que cobram discernimento crítico em debates de opinião."
    },
    commonTraps: ["confundir ataque pessoal com argumento de autoridade"],
    tags: ["argumentacao", "falacias", "ad-hominem", "cidadania"],
    status: "published",
    version: 2,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-005",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "A Ironia como Estratégia de Crítica Social",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Maravilhoso é o progresso civilizatório do plástico descartável: inventamos um copo que leva cinco segundos para ser utilizado, cinco séculos para se decompor no oceano e apenas alguns meses para retornar ao nosso organismo na forma de microplásticos na corrente sanguínea. Trata-se, indubitavelmente, da mais refinada demonstração de inteligência e planejamento a longo prazo da espécie humana.",
      source: "Crônica satírica sobre consumo e meio ambiente"
    },
    prompt: "O efeito persuasivo construído pelo autor ancora-se no emprego da ironia, que se manifesta fundamentalmente pela:",
    options: [
      {
        id: "a",
        text: "afirmação enfática de qualidades positivas para expor, por contraste, a irracionalidade do modelo de consumo.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "b",
        text: "defesa sincera e literal da tecnologia dos polímeros sintéticos como salvação econômica do planeta.",
        isCorrect: false,
        distractorRationale: "A interpretação literal ignora a crítica mordaz evidente no texto."
      },
      {
        id: "c",
        text: "adoção de vocabulário técnico estritamente neutro sem emitir qualquer juízo de valor.",
        isCorrect: false,
        distractorRationale: "O texto é altamente opinativo e adjetivado ('maravilhoso', 'mais refinada demonstração')."
      },
      {
        id: "d",
        text: "reivindicação de que o plástico seja proibido por um decreto internacional de pena de morte.",
        isCorrect: false,
        distractorRationale: "Extrapolação delirante não sustentada pelo texto."
      },
      {
        id: "e",
        text: "crítica direta aos pescadores artesanais que consomem peixes contaminados.",
        isCorrect: false,
        distractorRationale: "A crítica visa a civilização do descarte industrial, não os pescadores."
      }
    ],
    detailedExplanation: {
      summary: "A ironia baseia-se na dissonância proposital: elogiar o plástico como 'maravilhoso progresso' e 'refinada demonstração de inteligência' para escancarar o absurdo autodestrutivo do modelo.",
      stepByStep: [
        "Passo 1: Notar o paradoxo temporal: 5 segundos de uso vs. 500 anos de poluição.",
        "Passo 2: Perceber a intenção comunicativa por trás de 'maravilhoso' e 'refinada inteligência'.",
        "Passo 3: Concluir que o elogio fingido serve para amplificar o ridículo da situação."
      ],
      coreConcept: "Ironia e quebra de expectativa como recursos estilísticos de persuasão.",
      trapWarning: "Cuidado para não ler textos satíricos pelo sentido literal de suas palavras."
    },
    commonTraps: ["ler ironia como sentido denotativo"],
    tags: ["argumentacao", "ironia", "meio-ambiente", "cronica"],
    status: "published",
    version: 2,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-006",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Argumentação e Retórica",
    subtopic: "Dados Estatísticos e Comprovação Empírica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "De acordo com o Anuário Brasileiro de Segurança Pública de 2023, cerca de 76,9% das vítimas de mortes violentas intencionais no país são pessoas negras, enquanto jovens entre 12 e 29 anos respondem por mais de 50% dos óbitos. Esses indicadores desconstroem a narrativa de que a violência urbana atinge a sociedade de forma homogênea ou fortuita. Pelo contrário, evidenciam uma seletividade socioespacial e racial crônica, demandando políticas de segurança pública direcionadas e focadas na preservação da vida juvenil periférica.",
      source: "Artigo de análise criminológica e direitos humanos"
    },
    prompt: "A inclusão dos dados estatísticos na abertura do parágrafo cumpre a função argumentativa de:",
    options: [
      {
        id: "a",
        text: "substituir a necessidade de uma tese, transformando o texto em uma tabela numérica sem opinião.",
        isCorrect: false,
        distractorRationale: "O texto não se limita a expor números; ele interpreta os dados para sustentar uma tese política e social clara."
      },
      {
        id: "b",
        text: "ancorar a argumentação em evidências factuais robustas para refutar a ideia de que a violência é aleatória.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "c",
        text: "confundir o leitor com porcentagens discordantes para ocultar a ineficiência policial.",
        isCorrect: false,
        distractorRationale: "Os dados são coerentes e visam esclarecer, não confundir."
      },
      {
        id: "d",
        text: "comprovar que a violência é um fenômeno exclusivo das regiões rurais do interior do Brasil.",
        isCorrect: false,
        distractorRationale: "O texto fala expressamente de violência urbana e periferias."
      },
      {
        id: "e",
        text: "sugerir que a redução da maioridade penal é a única solução comprovada estatisticamente.",
        isCorrect: false,
        distractorRationale: "O texto defende políticas direcionadas de preservação da vida, sem sugerir encarceramento juvenil."
      }
    ],
    detailedExplanation: {
      summary: "O argumento por comprovação empírica utiliza dados oficiais (76,9% negros, >50% jovens) para conferir densidade factual ao texto e derrubar a tese adversária de que a violência não tem viés social.",
      stepByStep: [
        "Passo 1: Notar o uso da fonte oficial (Anuário Brasileiro de Segurança Pública).",
        "Passo 2: Relacionar os números à tese: os números provam a seletividade e desmentem a 'homogeneidade'.",
        "Passo 3: Reconhecer a função persuasiva dos dados como prova material irrefutável."
      ],
      coreConcept: "Argumento por comprovação empírica e leitura crítica de dados no ENEM.",
      trapWarning: "No ENEM, dados em textos argumentativos quase sempre servem para fundamentar ou refutar uma tese prévia."
    },
    commonTraps: ["achar que texto com números vira mera notícia informativa"],
    tags: ["argumentacao", "dados-estatisticos", "cidadania", "direitos-humanos"],
    status: "published",
    version: 2,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-007",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Modalizadores Discursivos e Grau de Certeza",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "É indubitável que o modelo agroexportador brasileiro alcançou recordes mundiais de produtividade nas últimas safras. No entanto, é forçoso reconhecer que tal êxito econômico gera, paradoxalmente, custos ecossistêmicos que talvez se revelem irreversíveis se os limites biogeoquímicos continuarem sendo ignorados pelos formuladores de políticas agrícolas.",
      source: "Ensaio sobre economia agrária e sustentabilidade"
    },
    prompt: "Os termos 'indubitável', 'é forçoso reconhecer' e 'talvez' funcionam como modalizadores discursivos. O papel dessas marcas no texto consiste em:",
    options: [
      {
        id: "a",
        text: "revelar desleixo linguístico que torna a argumentação incoerente e inconsistente.",
        isCorrect: false,
        distractorRationale: "A gradação é intencional e sofisticada, demonstrando rigor retórico."
      },
      {
        id: "b",
        text: "graduar o grau de certeza e comprometimento do autor com cada afirmação, transitando da certeza à advertência prudente.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "c",
        text: "afirmar que a ciência econômica é incapaz de calcular safras e produtividade.",
        isCorrect: false,
        distractorRationale: "O autor classifica a produtividade como 'indubitável' (certa e incontestável)."
      },
      {
        id: "d",
        text: "isentar o agronegócio de qualquer responsabilidade ecológica futura.",
        isCorrect: false,
        distractorRationale: "O texto aponta explicitamente os riscos ecológicos iminentes."
      },
      {
        id: "e",
        text: "mascarar uma apologia incondicional ao uso irrestrito de agrotóxicos.",
        isCorrect: false,
        distractorRationale: "O texto adverte sobre limites biogeoquímicos e sustentabilidade."
      }
    ],
    detailedExplanation: {
      summary: "Modalizadores discursivos expressam a atitude do enunciador em relação ao conteúdo: 'indubitável' expressa certeza plena; 'talvez' introduz prudência reflexiva sobre prognósticos futuros.",
      stepByStep: [
        "Passo 1: Analisar 'indubitável': certeza absoluta sobre a produtividade do setor.",
        "Passo 2: Analisar 'forçoso reconhecer': obrigatoriedade ética/lógica de admitir o contraditório.",
        "Passo 3: Analisar 'talvez': probabilidade prudente ao alertar sobre a irreversibilidade do dano ecológico."
      ],
      coreConcept: "Modalização discursiva e controle do ponto de vista na escrita acadêmica.",
      trapWarning: "Modalizadores não são enfeites; eles definem se o autor está afirmando uma certeza ou uma probabilidade."
    },
    commonTraps: ["ignorar o papel dos advérbios e adjetivos modalizadores"],
    tags: ["argumentacao", "modalizacao", "operadores", "ecologia"],
    status: "published",
    version: 2,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-008",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "A Estrutura da Carta Aberta e o Apelo Coletivo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "CARTA ABERTA À POPULAÇÃO BRASILEIRA EM DEFESA DO LIVRO E DA LEITURA\n\nNós, escritores, livreiros, bibliotecários e professores, dirigimo-nos à sociedade e aos representantes eleitos para alertar que a taxação sobre livros é um atentado contra o futuro da nossa juventude. Um país que encarece o livro empobrece sua própria capacidade de inovar, de sonhar e de construir cidadania. Tributar a leitura não aumentará a arrecadação do Estado de forma significativa, mas condenará milhões de jovens à asfixia cultural. Exigimos a manutenção da imunidade tributária do livro!",
      source: "Manifesto do setor editorial e cultural brasileiro"
    },
    prompt: "Pelo gênero textual e pelos recursos argumentativos mobilizados, a carta aberta constrói sua força persuasiva através:",
    options: [
      {
        id: "a",
        text: "da impessoalidade rigorosa e do anonimato completo para proteger os signatários de represálias judiciais.",
        isCorrect: false,
        distractorRationale: "O texto é assinado por uma coletividade profissional identificada ('Nós, escritores, livreiros...')."
      },
      {
        id: "b",
        text: "do engajamento coletivo em primeira pessoa do plural e do apelo à defesa de um bem cultural compartilhado.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "c",
        text: "da apresentação de um modelo matemático de tributação regressiva para grandes fortunas.",
        isCorrect: false,
        distractorRationale: "A carta trata especificamente da imunidade do livro, sem discutir modelos matemáticos fiscais gerais."
      },
      {
        id: "d",
        text: "do foco exclusivo em interesses corporativos e lucros imediatos dos editores de livros raros.",
        isCorrect: false,
        distractorRationale: "O argumento central é a cidadania e o futuro da juventude, não o lucro de nicho."
      },
      {
        id: "e",
        text: "da utilização de vocabulário arcaico para restringir a leitura apenas a juristas e diplomatas.",
        isCorrect: false,
        distractorRationale: "O manifesto usa linguagem acessível voltada a toda a população."
      }
    ],
    detailedExplanation: {
      summary: "A carta aberta utiliza o sujeito coletivo ('Nós...'), verbos incisivos ('dirigimo-nos', 'alertar', 'exigimos') e o enquadramento do livro como direito fundamental à cidadania.",
      stepByStep: [
        "Passo 1: Reconhecer a função social da carta aberta: pressão pública e mobilização cidadã.",
        "Passo 2: Notar o emissor coletivo: escritores, livreiros, educadores.",
        "Passo 3: Identificar a tese: a leitura é pilar da cidadania e sua taxação é inaceitável socialmente."
      ],
      coreConcept: "A carta aberta e os gêneros da esfera reivindicatória e política.",
      trapWarning: "Cartas abertas equilibram denúncia política com apelo ético à sociedade."
    },
    commonTraps: ["confundir carta aberta com carta pessoal"],
    tags: ["argumentacao", "carta-aberta", "leitura", "cidadania"],
    status: "published",
    version: 2,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-009",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Argumentação e Retórica",
    subtopic: "A Comparação por Analogia no Discurso Filosófico",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Assim como um ecossistema florestal depende da rica variedade biológica entre fungos, insetos, árvores e predadores para resistir a pragas e choques climáticos, a vida democrática necessita imperativamente da pluralidade de vozes, opiniões e culturas para não degenerar em tirania. Quando um grupo busca eliminar a discordância em nome de uma pureza ideológica homogênea, ele age como o monocultivo agrícola que, ao desmatar a floresta para plantar uma única espécie, torna o solo frágil e vulnerável ao colapso biológico.",
      source: "Ensaio filosófico sobre pluralismo e democracia"
    },
    prompt: "Para fundamentar a importância da pluralidade na democracia, o autor estrutura sua argumentação a partir de:",
    options: [
      {
        id: "a",
        text: "uma analogia biológica entre a biodiversidade florestal e a diversidade de opiniões na sociedade.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "b",
        text: "um relato histórico minucioso sobre a queda do Império Austro-Húngaro no século XIX.",
        isCorrect: false,
        distractorRationale: "O texto não menciona a história do Império Austro-Húngaro."
      },
      {
        id: "c",
        text: "um ataque virulento aos agricultores familiares que cultivam alimentos orgânicos.",
        isCorrect: false,
        distractorRationale: "O texto critica a monocultura industrial padronizada como metáfora, sem atacar a agricultura familiar."
      },
      {
        id: "d",
        text: "uma pesquisa de opinião pública quantitativa sobre preferências partidárias dos jovens.",
        isCorrect: false,
        distractorRationale: "Não há dados demoscópicos ou percentuais eleitorais."
      },
      {
        id: "e",
        text: "uma rejeição absoluta de qualquer forma de sistema democrático representativo.",
        isCorrect: false,
        distractorRationale: "O autor defende fervorosamente a democracia e o pluralismo."
      }
    ],
    detailedExplanation: {
      summary: "O autor recorre ao argumento por analogia: aproxima o funcionamento biológico de um ecossistema (biodiversidade vs. monocultura) do funcionamento político de uma democracia (pluralidade vs. tirania).",
      stepByStep: [
        "Passo 1: Notar o conector analógico: 'Assim como... de modo idêntico...'.",
        "Passo 2: Mapear os termos comparados: Floresta diversa = Sociedade plural; Monocultura estéril = Sociedade totalitária homogênea.",
        "Passo 3: Reconhecer a força pedagógica da analogia: explicar um conceito abstrato (pluralismo) através de uma imagem concreta da natureza."
      ],
      coreConcept: "Argumento por analogia como recurso didático e persuasivo.",
      trapWarning: "Uma analogia eficaz precisa manter simetria lógica entre o domínio de origem e o domínio de destino."
    },
    commonTraps: ["confundir analogia conceitual com relato biológico factual"],
    tags: ["argumentacao", "analogia", "democracia", "ecologia"],
    status: "published",
    version: 2,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-010",
    area: "linguagens",
    competence: 7,
    skill: 24,
    topic: "Argumentação e Retórica",
    subtopic: "Desconstrução de Falácias de Generalização Apressada",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "É frequente encontrar discursos que, a partir da conduta reprovável de um único indivíduo ou de um caso isolado noticiado em redes sociais, proclamam a falência moral de toda uma classe profissional ou de uma geração inteira. Esse vício de raciocínio, conhecido como generalização apressada, ignora que um exemplo anedótico não possui validade estatística para representar a totalidade de um grupo diverso e complexo.",
      source: "Manual de pensamento crítico e metodologia científica"
    },
    prompt: "Com base no texto, a fragilidade da generalização apressada decorre principalmente do fato de que ela:",
    options: [
      {
        id: "a",
        text: "utiliza fórmulas matemáticas excessivamente complexas para o leitor comum entender.",
        isCorrect: false,
        distractorRationale: "A generalização apressada decorre exatamente da falta de rigor matemático e estatístico."
      },
      {
        id: "b",
        text: "extrapola indevidamente uma conclusão universal a partir de uma amostra isolada e não representativa.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "c",
        text: "se apoia sempre em leis da física quântica para explicar comportamentos humanos.",
        isCorrect: false,
        distractorRationale: "Distrator absurdo: física quântica não é mencionada."
      },
      {
        id: "d",
        text: "defende que nenhuma conduta moral pode ser julgada pelo sistema judiciário.",
        isCorrect: false,
        distractorRationale: "O texto não questiona o julgamento legal de indivíduos culpados, mas sim a generalização a todo o grupo."
      },
      {
        id: "e",
        text: "proíbe que os cidadãos utilizem redes sociais para expressar sentimentos afetivos.",
        isCorrect: false,
        distractorRationale: "O texto não trata de proibições tecnológicas, mas de postura crítica e lógica."
      }
    ],
    detailedExplanation: {
      summary: "A generalização apressada comete o erro indutivo de transformar uma exceção ou anedota em regra geral, sem amostragem probabilística ou representativa.",
      stepByStep: [
        "Passo 1: Identificar a definição fornecida no texto: 'a partir da conduta de um único indivíduo... proclamam a falência moral de toda uma classe'.",
        "Passo 2: Reconhecer o erro metodológico: ausência de representatividade estatística.",
        "Passo 3: Concluir que a generalização induz a conclusões universais precipitadas e preconceituosas."
      ],
      coreConcept: "Amostragem representativa vs. generalização falaciosa no debate contemporâneo.",
      trapWarning: "Fique atento ao ENEM: generalizações apressadas são a raiz da maioria dos preconceitos e estigmas sociais."
    },
    commonTraps: ["confundir exemplo ilustrativo com prova universal"],
    tags: ["argumentacao", "falacias", "metodologia", "pensamento-critico"],
    status: "published",
    version: 2,
    createdAt: "2026-10-01"
  }
];
