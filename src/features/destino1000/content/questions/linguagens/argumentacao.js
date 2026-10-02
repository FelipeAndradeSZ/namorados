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
  },
  {
    id: "LIN-ARG-011",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia do Espantalho no Debate Público",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No calor dos debates em redes sociais, é frequente que um debatedor reformule a fala do adversário de maneira grosseiramente distorcida, caricatural ou extremada, para então atacar e demolir com facilidade essa versão caricata que nunca foi dita pelo oponente. Na retórica e na teoria da argumentação, essa manobra desonesta é denominada 'Falácia do Espantalho'.",
      source: "Lógica Informal e Falácias Argumentativas - Douglas Walton"
    },
    prompt: "A manobra retórica do 'espantalho' compromete a qualidade do debate público porque:",
    options: [
      { id: "a", text: "evita o enfrentamento honesto das ideias reais do interlocutor, substituindo-as por uma versão deliberadamente enfraquecida e fácil de ridicularizar.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "utiliza vocabulário erudito que impede a compreensão por pessoas de baixa escolaridade.", isCorrect: false, distractorRationale: "A falácia independe de linguagem erudita; seu problema reside na desonestidade de distorção de premissas." },
      { id: "c", text: "obriga os debatedores a assinar acordos diplomáticos vinculantes na Justiça Federal.", isCorrect: false, distractorRationale: "Debates em redes sociais não constituem processos judiciais formais." },
      { id: "d", text: "impede o uso de metáforas literárias em qualquer tipo de texto dissertativo.", isCorrect: false, distractorRationale: "Metáforas continuam sendo recursos estilísticos válidos e legítimos." },
      { id: "e", text: "garante a vitória irrefutável e permanente daquele que praticou a distorção lógica.", isCorrect: false, distractorRationale: "Para quem domina o pensamento crítico, a falácia é facilmente desmascarada como sinal de fraqueza argumentativa." }
    ],
    detailedExplanation: {
      summary: "Construir um 'espantalho' consiste em inventar uma caricatura da tese oposta. Por ser uma caricatura frágil (como um boneco de palha), o debatedor consegue 'destruí-la' facilmente, enganando a plateia desatenta.",
      stepByStep: [
        "1. Identificar o artifício: Debatedor A diz que 'devemos fiscalizar melhor os contratos públicos de merenda'. Debatedor B acusa: 'Veja só, ele quer que as crianças passem fome!'.",
        "2. Análise lógica: Debatedor B nunca respondeu sobre a fiscalização; ele criou um espantalho ('quer que as crianças passem fome') para gerar repulsa moral na audiência.",
        "3. Efeito no debate: anula o diálogo substantivo e alimenta a histeria e polarização cega."
      ],
      coreConcept: "Falácia do Espantalho (Straw Man Fallacy) e Desonestidade Intelectual",
      trapWarning: "No ENEM: Se o texto descreve alguém distorcendo o que o outro disse para fazer parecer absurdo -> FALÁCIA DO ESPANTALHO."
    },
    commonTraps: [
      "Confundir Falácia do Espantalho com Ad Hominem (ataque à pessoa)",
      "Achar que toda simplificação é necessariamente uma falácia do espantalho"
    ],
    tags: ["argumentacao", "falacias", "espantalho", "retorica", "debate-publico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-012",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Argumento de Autoridade Legítimo vs Falácia Ad Verecundiam",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O recurso à autoridade é comum e necessário em textos argumentativos e científicos. No entanto, para que o argumento de autoridade seja epistemicamente legítimo, o perito citado deve possuir especialização reconhecida na área temática em discussão. Citar a opinião pessoal de um consagrado físico nuclear sobre a melhor metodologia pedagógica de alfabetização infantil constitui, em lógica, um apelo indevido à autoridade (Argumentum ad Verecundiam).",
      source: "Manual de Argumentação Científica e Filosofia da Ciência"
    },
    prompt: "De acordo com o texto, a legitimidade de um argumento de autoridade decorre primordialmente da:",
    options: [
      { id: "a", text: "pertinência temática direta entre a especialidade comprovada do especialista e o assunto sob deliberação.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "quantidade de seguidores e curtidas que a personalidade possui em redes sociais.", isCorrect: false, distractorRationale: "Popularidade virtual não confere autoridade epistemológica ou científica." },
      { id: "c", text: "idade avançada da personalidade citada na data de publicação do ensaio.", isCorrect: false, distractorRationale: "Idade biológica não é garantia de expertise metodológica." },
      { id: "d", text: "ausência total de contraditório ou de outras fontes no corpo do texto.", isCorrect: false, distractorRationale: "A boa prática acadêmica incentiva a pluralidade de perspectivas e o cotejo crítico de fontes." },
      { id: "e", text: "imposição da tese como verdade divina incontestável sem necessidade de justificativas.", isCorrect: false, distractorRationale: "Dogmatismo religioso é o oposto do raciocínio argumentativo crítico." }
    ],
    detailedExplanation: {
      summary: "Um argumento de autoridade só é válido se a autoridade for legítima NAQUELE campo do saber. Notoriedade em uma área (ex.: física quântica ou futebol) não se transfere automaticamente para outra (ex.: pedagogia infantil ou vacinologia).",
      stepByStep: [
        "1. Argumento de Autoridade Legítimo: Fiocruz e OMS falando sobre imunização; linguistas falando sobre variação dialetal.",
        "2. Falácia ad verecundiam: usar o prestígio de um Nobel de Química para opinar sobre economia agrária ou filosofia moral.",
        "3. Critério de validação do ENEM: Pertinência + Legitimidade + Produtividade da autoridade citada."
      ],
      coreConcept: "Argumento de Autoridade Legítimo vs. Falácia Ad Verecundiam",
      trapWarning: "No ENEM e na redação nota 1000: Use repertórios legitimados que dialoguem com a área do problema abordado!"
    },
    commonTraps: [
      "Achar que qualquer pessoa famosa serve como argumento de autoridade para qualquer assunto",
      "Confundir fama com competência técnica científica"
    ],
    tags: ["argumento-de-autoridade", "ad-verecundiam", "repertorio-sociocultural", "logica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-013",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "Relação de Causa e Efeito vs Correlação Ilusória",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Um estudo demonstrou que cidades com maior número de igrejas são exatamente as mesmas cidades que registram maior número de acidentes automobilísticos ao longo do ano. Um articulista desavisado concluiu precipitadamente que frequentar cerimônias religiosas prejudica os reflexos dos motoristas no trânsito, cometendo a clássica falácia da falsa causa (cum hoc ergo propter hoc).",
      source: "Estatística sem Mistérios e Pensamento Crítico"
    },
    prompt: "O erro lógico fundamental cometido na conclusão do articulista consiste em:",
    options: [
      { id: "a", text: "confundir uma mera correlação estatística entre duas variáveis com uma relação de causa e efeito, ignorando a variável oculta comum subjacente (o tamanho da população urbana da cidade).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "utilizar dados numéricos oriundos de recenseamentos demográficos oficiais de alta precisão.", isCorrect: false, distractorRationale: "O problema não está na precisão dos números coletados, mas na dedução causal equivocada tirada a partir deles." },
      { id: "c", text: "negar a existência de semáforos e faixas de pedestres nas avenidas metropolitanas.", isCorrect: false, distractorRationale: "Distrator tangencial sem relação com o raciocínio epistemológico do texto." },
      { id: "d", text: "afirmar que acidentes de trânsito dependem exclusivamente de condições climáticas adversas.", isCorrect: false, distractorRationale: "Não é essa a afirmação nem a falácia descrita no texto." },
      { id: "e", text: "presumir que a religiosidade é incompatível com qualquer tipo de transporte mecanizado.", isCorrect: false, distractorRationale: "Distrator caricato." }
    ],
    detailedExplanation: {
      summary: "Correlação não implica causalidade! Cidades mais populosas têm naturalmente mais igrejas, mais padarias, mais escolas E mais acidentes de trânsito. A causa comum de ambos os números altos é o TAMANHO DA POPULAÇÃO.",
      stepByStep: [
        "1. Premissa empírica: Há correlação positiva entre número de igrejas e número de batidas de carro.",
        "2. Erro causal: Supor que ir à igreja causa batidas (ou que batidas causam idas à igreja).",
        "3. Variável de confusão (terceira variável): O tamanho da cidade! Em cidades com 10 milhões de habitantes há muitas igrejas e muitos carros; em cidades de 5 mil habitantes há poucas igrejas e pouquíssimos acidentes.",
        "4. Princípio científico: 'Correlação não prova causalidade'."
      ],
      coreConcept: "Correlação vs. Causalidade e a Falácia da Falsa Causa",
      trapWarning: "No ENEM: Questões que confrontam dois gráficos e perguntam se o fenômeno A causou B cobram exatamente a distinção entre correlação estatística e nexo causal real."
    },
    commonTraps: [
      "Acreditar que se duas coisas aumentam juntas no gráfico, uma necessariamente causou a outra",
      "Ignorar variáveis intervenientes ocultas em dados sociais"
    ],
    tags: ["falsa-causa", "correlacao-causalidade", "pensamento-critico", "interpretacao-graficos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-014",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Argumentação e Retórica",
    subtopic: "A Estratégia de Concessão Argumentativa e Operadores Concessivos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o seguinte trecho de um ensaio acadêmico:\n'Conquanto os investimentos governamentais em inteligência artificial tenham crescido expressivamente no último biênio, a ausência de marcos regulatórios transparentes e de treinamento ético continuado mantém a administração pública vulnerável a vieses algorítmicos discriminatórios.'",
      source: "Ensaio sobre Ética e Inteligência Artificial no Setor Público"
    },
    prompt: "Ao empregar o operador argumentativo concessivo 'Conquanto' na oração inicial, o autor do texto adota a estratégia retórica de:",
    options: [
      { id: "a", text: "fazer uma concessão tática ao admitir temporariamente um ponto positivo, apenas para enfraquecê-lo diante da tese principal mais crítica apresentada na oração independente.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "declarar que os investimentos tecnológicos são irrelevantes e devem ser imediatamente congelados.", isCorrect: false, distractorRationale: "O texto admite expressamente que os investimentos cresceram, não pedindo seu congelamento." },
      { id: "c", text: "introduzir uma explicação biográfica irrelevante sobre a formação dos programadores de software.", isCorrect: false, distractorRationale: "Não há menção biográfica no trecho." },
      { id: "d", text: "estabelecer uma relação de estrita dependência cronológica onde uma ação só ocorre após o término da outra.", isCorrect: false, distractorRationale: "'Conquanto' é conjunção subordinativa concessiva, e não temporal (como 'depois que' ou 'quando')." },
      { id: "e", text: "restringir o público-alvo do ensaio exclusivamente a cientistas da computação com pós-doutorado.", isCorrect: false, distractorRationale: "O texto tem linguagem argumentativa formal acessível ao leitor culto geral." }
    ],
    detailedExplanation: {
      summary: "A concessão argumentativa é uma jogada de xadrez discursiva: o autor antecipa o contra-argumento do oponente ('os investimentos cresceram!'), concorda parcialmente com ele, mas mostra que o problema estrutural ('ausência de marcos éticos') é mais grave e preponderante.",
      stepByStep: [
        "1. Operador: 'Conquanto' = embora, ainda que, a despeito de (valor concessivo).",
        "2. Dinâmica discursiva: a oração concessiva cede um ponto secundário.",
        "3. Força argumentativa: a oração principal ('a ausência de marcos... mantém vulnerável') é a que prevalece no raciocínio e ancora a tese do autor.",
        "4. Vantagem retórica: quem faz concessões parece equilibrado, razoável e maduro, aumentando seu poder de convencimento."
      ],
      coreConcept: "Concessão Argumentativa e Operadores Concessivos no ENEM",
      trapWarning: "Atenção: A ideia que tem maior peso argumentativo é SEMPRE a que fica na oração principal, e não na oração introduzida pela conjunção concessiva!"
    },
    commonTraps: [
      "Achar que o autor concorda integralmente com a ideia contida na oração concessiva",
      "Confundir valor concessivo com valor conclusivo ou causal"
    ],
    tags: ["concessao-argumentativa", "conquanto", "coesao-textual", "operadores-argumentativos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-015",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Redução ao Absurdo (Reductio ad Absurdum)",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em debate sobre a instalação de radares eletrônicos e limites de velocidade nas cidades, um crítico afirmou que qualquer limite imposto pelo poder público é uma violação inaceitável da liberdade individual de locomoção. O articulista rebateu: 'Se aceitarmos a premissa de que qualquer regra de velocidade atenta contra a liberdade individual, deveríamos, pela mesma lógica, autorizar que motoristas transitem a 140 km/h sobre as calçadas em frente a creches escolares, já que qualquer proibição constituiria tirania estatal.'",
      source: "Artigo de Opinião e Filosofia do Direito Urbano"
    },
    prompt: "O método de refutação empregado pelo articulista para desconstruir o posicionamento do oponente é conhecido como:",
    options: [
      { id: "a", text: "redução ao absurdo, técnica que aceita provisoriamente a tese do adversário para demonstrar que seus desdobramentos lógicos extremos levam a uma contradição insustentável.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "apelo à comoção infantil com finalidade meramente demagógica e sem fundamento racional.", isCorrect: false, distractorRationale: "O exemplo da creche não é mera pieguice, mas a demonstração do absurdo de suprimir regras de trânsito." },
      { id: "c", text: "censura prévia compulsória ao direito de livre manifestação do pensamento.", isCorrect: false, distractorRationale: "O debate ocorre no campo das ideias e argumentos, sem nenhuma censura jurídica." },
      { id: "d", text: "falácia ad hominem mediante insultos verbais diretos à moral privada do debatedor.", isCorrect: false, distractorRationale: "O articulista não atacou a pessoa do oponente, atacou a consequência lógica de sua tese." },
      { id: "e", text: "generalização indutiva fundamentada em levantamentos métricos de velocidade média.", isCorrect: false, distractorRationale: "Não houve levantamento empírico estatístico no argumento." }
    ],
    detailedExplanation: {
      summary: "A Redução ao Absurdo (reductio ad absurdum) é uma das armas mais elegantes da lógica dedutiva. Você diz: 'Vamos fingir que você está certo. Onde essa lógica nos levaria? A carros a 140 km/h na calçada. Como essa conclusão é manifestamente absurda, a sua premissa original só pode estar errada.'",
      stepByStep: [
        "1. Premissa do oponente: 'Regras de velocidade violam a liberdade e não devem existir'.",
        "2. Aplicação extrema da premissa: sem regras de velocidade, dirigir na calçada em alta velocidade seria lícito.",
        "3. Conclusão da aplicação: isso é moralmente e civicamente inaceitável.",
        "4. Desfecho lógico: como a consequência é absurda, a tese que a originou deve ser rejeitada."
      ],
      coreConcept: "Argumento por Redução ao Absurdo (Reductio ad Absurdum)",
      trapWarning: "No ENEM: Quando um autor aceita a lógica do oponente apenas para mostrar que ela gera um monstro conceitual inaceitável -> REDUÇÃO AO ABSURDO."
    },
    commonTraps: [
      "Confundir redução ao absurdo com ataque pessoal (ad hominem)",
      "Achar que o autor realmente defende o exemplo absurdo que usou como ilustração"
    ],
    tags: ["reducao-ao-absurdo", "logica-dedutiva", "refutacao", "artigo-de-opiniao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-016",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "A Falácia do Falso Dilema na Retórica Política",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em discursos populistas ou de propaganda polarizadora, enunciados como 'Ou você apoia integralmente e sem ressalvas as nossas medidas econômicas, ou você torce pelo colapso do país e é um inimigo do povo' são recorrentes. Essa estratégia discursiva reduz artificialmente um espectro complexo e plural de soluções viáveis a apenas duas alternativas extremas e excludentes.",
      source: "Retórica e Desinformação Política - Ensaios de Comunicação"
    },
    prompt: "O artifício argumentativo descrito no texto caracteriza a falácia do Falso Dilema porque ele:",
    options: [
      { id: "a", text: "elimina arbitrariamente as nuances, caminhos intermediários e propostas alternativas legítimas, coagindo o interlocutor a uma escolha binária forçada.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "obriga os parlamentares a votar leis exclusivamente por voto aberto e nominal.", isCorrect: false, distractorRationale: "Distrator de procedimento parlamentar sem relação com a figura de pensamento." },
      { id: "c", text: "se fundamenta na leitura atenta de pareceres técnicos emitidos pelo Tribunal de Contas da União.", isCorrect: false, distractorRationale: "O falso dilema é uma manobra retórica emocional, não uma análise técnica." },
      { id: "d", text: "demonstra matematicamente a inviabilidade de todas as economias mistas de mercado.", isCorrect: false, distractorRationale: "Não há demonstração matemática no discurso polarizador." },
      { id: "e", text: "incentiva o pensamento plural e o respeito incondicional às discordâncias democráticas.", isCorrect: false, distractorRationale: "O falso dilema busca exatamente aniquilar o pensamento plural e o debate democrático." }
    ],
    detailedExplanation: {
      summary: "O Falso Dilema (ou Falsa Dicotomia) é o 'ou 8 ou 80' da retórica. A realidade quase sempre oferece dezenas de alternativas intermediárias (opções C, D, E), mas o manipulador finge que só existem a sua opção (supostamente virtuosa) e uma opção horrível (para assustar o ouvinte).",
      stepByStep: [
        "1. Estrutura do falso dilema: 'Ou A (minha proposta) ou B (o caos absoluto)'.",
        "2. Vício lógico: esconder propositalmente que existem dezenas de alternativas moderadas ou aprimoradas entre A e B.",
        "3. Finalidade política: anular o debate crítico e forçar a adesão passiva através do medo e da chantagem moral."
      ],
      coreConcept: "Falso Dilema (Falsa Dicotomia) e Polarização Discursiva",
      trapWarning: "No ENEM: Frases iniciadas por 'Ou você está conosco, ou está contra nós' são o modelo clássico do falso dilema."
    },
    commonTraps: [
      "Achar que todo dilema é falso (dilemas genuínos ocorrem quando realmente só há duas possibilidades lógicas, como vivo ou morto)",
      "Não perceber que na vida social e política quase sempre existem múltiplos caminhos intermediários"
    ],
    tags: ["falso-dilema", "falsa-dicotomia", "polarizacao", "retorica-politica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-017",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Argumentação e Retórica",
    subtopic: "A Ironia como Recurso Argumentativo Crítico",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na crônica machadiana, o narrador observa o desfile pomposo da nobreza escravocrata do século XIX e comenta com fingida ingenuidade: 'Que admirável ordem social a nossa! Onde os homens de bem desfrutam do descanso merecido à sombra dos cafezais, enquanto seus fiéis cativos, generosamente acolhidos do desamparo da África, exercitam com vigor a virtude do labor sem se queixarem do cansaço das correntes.'",
      source: "Crônicas Escolhidas - Machado de Assis (comentadas)"
    },
    prompt: "No excerto, a ironia funciona como poderoso recurso argumentativo porque ela:",
    options: [
      { id: "a", text: "afirma na superfície verbal o oposto do que realmente pretende comunicar, gerando cumplicidade com o leitor para desmascarar a crueldade e o cinismo da hipocrisia escravocrata.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "faz o elogio sincero e entusiasmado do regime escravista como modelo humanitário de caridade social.", isCorrect: false, distractorRationale: "Machado de Assis utiliza o humor cáustico e a ironia para condenar a escravidão, e não para elogiá-la." },
      { id: "c", text: "apresenta dados demográficos objetivos sem nenhuma tonalidade emocional ou julgamento de valor.", isCorrect: false, distractorRationale: "O texto é eminentemente subjetivo, literário e carregado de juízo de valor implícito." },
      { id: "d", text: "recomenda expressamente a ampliação do comércio transatlântico de africanos escravizados.", isCorrect: false, distractorRationale: "Leitura literal ingênua que ignora o sarcasmo do autor." },
      { id: "e", text: "confunde o leitor ao adotar termos científicos de química e botânica agrícola.", isCorrect: false, distractorRationale: "Não há termos de química ou botânica no excerto." }
    ],
    detailedExplanation: {
      summary: "A ironia consiste em enunciar algo esperando que o interlocutor perceba a inadequação manifesta entre o sentido literal e o sentido pretendido (antiphrasis). Ao chamar a violência do chicote de 'virtude do labor', Machado expõe a sordidez moral da classe dominante.",
      stepByStep: [
        "1. Sentido literal: O narrador parece elogiar a nobreza e a escravidão ('admirável ordem', 'generosamente acolhidos').",
        "2. Quebra de expectativa: O choque entre as palavras de caridade e a realidade brutal das correntes gera o estranhamento irônico.",
        "3. Função persuasiva: A ironia machadiana ridiculariza o autoengano dos escravocratas de forma muito mais demolidora do que um discurso inflamado comum."
      ],
      coreConcept: "A Ironia como Estratégia Argumentativa e Crítica Social",
      trapWarning: "Cuidado no ENEM: Ler Machado de Assis ao pé da letra é a armadilha número um! O sentido real do texto é quase sempre o avesso das palavras polidas do narrador."
    },
    commonTraps: [
      "Fazer leitura literal ingênua de textos irônicos ou satíricos",
      "Achar que ironia é sinônimo exclusivo de agressão ou piada boba"
    ],
    tags: ["ironia", "machado-de-assis", "critica-social", "recursos-expressivos", "literatura-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-018",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Argumento por Analogia e Comparação Histórica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em editorial sobre a necessidade urgente de investimentos federais na transição para a matriz de energia limpa, um grande jornal sustentou:\n'Assim como as nações que lideraram a introdução das máquinas a vapor no século XVIII colheram mais de um século de primazia geopolítica e pujança industrial, o Brasil do século XXI, abençoado com sol e vento abundantes, terá seu futuro econômico definido pela coragem de liderar a infraestrutura do hidrogênio verde hoje, ou estará condenado ao atraso perpétuo dos espectadores passivos da história.'",
      source: "Editorial Jornalístico sobre Transição Energética"
    },
    prompt: "A força persuasiva do trecho apoia-se principalmente no tipo de argumentação construído por:",
    options: [
      { id: "a", text: "analogia e paralelo histórico, que estabelece similitude funcional entre a pioneira Revolução Industrial passada e a atual corrida pela liderança nas energias limpas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "apelo à autoridade divina para justificar o destino místico da nação brasileira.", isCorrect: false, distractorRationale: "A menção poética a 'sol e vento abundantes' refere-se ao potencial geográfico natural, sem dogmatismo religioso." },
      { id: "c", text: "falácia ad hominem desferida contra pesquisadores do setor de carvão mineral.", isCorrect: false, distractorRationale: "O texto não insulta pesquisadores ou pessoas específicas." },
      { id: "d", text: "dedução silogística fechada comprovada por equações da termodinâmica clássica.", isCorrect: false, distractorRationale: "Não há equações físicas ou silogismo formal no editorial." },
      { id: "e", text: "redução ao absurdo demonstrando a impossibilidade de gerar energia a partir do vento.", isCorrect: false, distractorRationale: "O texto defende a viabilidade da energia eólica e limpa." }
    ],
    detailedExplanation: {
      summary: "O argumento por analogia (ou comparação histórica) projeta o aprendizado de um evento consagrado do passado (Revolução Industrial a vapor) sobre uma escolha crucial do presente (energia limpa), mostrando que a mesma lei de pioneirismo econômico se aplica a ambos.",
      stepByStep: [
        "1. Identificar o termo A (passado): Países pioneiros na energia a vapor -> colheram primazia e riqueza.",
        "2. Identificar o termo B (presente): Países que liderarem a energia limpa -> colherão riqueza e futuro.",
        "3. Conclusão da analogia: Portanto, o Brasil deve ser pioneiro na transição para o hidrogênio verde.",
        "4. Validade da analogia: A correlação entre controle de matriz energética inovadora e desenvolvimento socioeconômico é historicamente sólida."
      ],
      coreConcept: "Argumento por Analogia e Comparação Histórica no ENEM",
      trapWarning: "Para que o argumento por analogia seja válido, os elementos comparados devem compartilhar características estruturais essenciais e não apenas semelhanças superficiais."
    },
    commonTraps: [
      "Confundir argumento por analogia com argumento por autoridade",
      "Achar que comparar fatos históricos diferentes invalida o raciocínio"
    ],
    tags: ["analogia", "comparacao-historica", "editorial", "argumentacao", "energia-limpa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-019",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "Apelo à Tradição (Ad Antiquitatem) vs Ética Racional",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em debates jurídicos sobre práticas que envolvem maus-tratos a animais ou discriminação secular de grupos sociais, defensores de tais costumes costumam argumentar que 'essa prática não pode ser banida porque é realizada há mais de trezentos anos por nossos antepassados e faz parte das tradições imutáveis de nossa terra'. Essa linha de sustentação é conhecida como falácia do Apelo à Tradição (Argumentum ad Antiquitatem).",
      source: "Filosofia Moral e Teoria da Justiça - Ensaios Críticos"
    },
    prompt: "Do ponto de vista da ética argumentativa e dos direitos fundamentais, o apelo à tradição é insustentável porque:",
    options: [
      { id: "a", text: "a antiguidade temporal de um costume não confere a ele validade ética, jurídica ou moral intrínseca, uma vez que diversas práticas cruéis e discriminatórias foram perpetuadas historicamente por séculos antes de serem banidas pela razão.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "todas as práticas ancestrais do passado eram biologicamente inviáveis em virtude do clima quente.", isCorrect: false, distractorRationale: "Distrator estapafúrdio sem nexo com o debate ético e jurídico." },
      { id: "c", text: "as tradições populares são proibidas por acordos de patentes industriais da União Europeia.", isCorrect: false, distractorRationale: "Tradições culturais não são patentes comerciais privadas." },
      { id: "d", text: "os antepassados de qualquer nação não possuíam capacidade neurológica para articular linguagem verbal.", isCorrect: false, distractorRationale: "Afirmação historicamente e antropologicamente falsa." },
      { id: "e", text: "qualquer lei votada no presente revoga retroativamente o nascimento de gerações anteriores.", isCorrect: false, distractorRationale: "A lei se aplica aos fatos presentes e futuros, não cancela a existência de ancestrais." }
    ],
    detailedExplanation: {
      summary: "A longevidade de uma prática não a torna justa. A escravidão perdurou por milênios em dezenas de impérios; a queima de mulheres acusadas de bruxaria e a negação de direitos cívicos às mulheres foram 'tradições' por séculos. A legitimidade de uma conduta deve ser julgada pela razão, pela dignidade e pela justiça, e não pelo calendário.",
      stepByStep: [
        "1. Falácia ad antiquitatem: 'É bom / correto porque é antigo e tradicional'.",
        "2. Desmonte lógico: Dizer que algo sempre foi feito assim não responde se algo DEVE continuar sendo feito assim (diferença entre o 'ser' e o 'dever ser' de David Hume).",
        "3. Paradigma dos Direitos Humanos: Costumes culturais que violam a dignidade e os direitos humanos fundamentais não podem se sobrepor à ética e à legalidade republicana."
      ],
      coreConcept: "Falácia do Apelo à Tradição (Ad Antiquitatem) e Direitos Humanos",
      trapWarning: "No ENEM: Se o argumento defende uma prática violenta ou discriminatória dizendo que 'sempre foi assim na cultura popular', trata-se de falácia de apelo à tradição que viola os Direitos Humanos."
    },
    commonTraps: [
      "Confundir valorização do patrimônio cultural sadio com chancela a violações de direitos",
      "Achar que tempo de existência equivale a correção moral"
    ],
    tags: ["apelo-a-tradicao", "ad-antiquitatem", "direitos-humanos", "falacias", "etica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-020",
    area: "linguagens",
    competence: 7,
    skill: 24,
    topic: "Argumentação e Retórica",
    subtopic: "Projeto de Texto e Tese Bipartida no Modelo Dissertativo ENEM",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Analise a introdução a seguir, extraída de uma redação modelo nota 1000:\n'A Carta Magna de 1988 preconiza a saúde e a dignidade humana como direitos universais inalienáveis de todos os cidadãos. Todavia, a persistência do estigma associado às doenças mentais no Brasil contemporâneo subverte essa garantia constitucional, alimentada tanto pela desinformação secular disseminada no tecido social quanto pela insuficiência estrutural de centros de acolhimento psicossocial da rede pública.'",
      source: "Manual de Engenharia Textual da Redação ENEM"
    },
    prompt: "A introdução analisada cumpre com excelência as exigências do 'projeto de texto' (Competência 3 do ENEM) porque:",
    options: [
      { id: "a", text: "articula um repertório legitimado de partida (a CF/88), apresenta o tema completo e antecipa explicitamente uma tese bipartida com duas causas distintas que serão aprofundadas em D1 e D2.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "limita-se a narrar uma crônica fictícia sem emitir nenhum juízo de valor ou posicionamento crítico.", isCorrect: false, distractorRationale: "O texto é eminentemente dissertativo-argumentativo com forte juízo de valor ('subverte essa garantia')." },
      { id: "c", text: "apresenta a proposta de intervenção completa com os 5 elementos logo no primeiro parágrafo.", isCorrect: false, distractorRationale: "A proposta de intervenção completa com os 5 elementos pertence à conclusão, e não à introdução." },
      { id: "d", text: "utiliza linguagem coloquial de gírias juvenis para se aproximar afetivamente da banca examinadora.", isCorrect: false, distractorRationale: "O registro formal culto padrão é rigorosamente respeitado (Competência 1)." },
      { id: "e", text: "evita qualquer menção aos problemas sociais do Brasil para manter neutralidade jornalística.", isCorrect: false, distractorRationale: "A redação do ENEM exige expressamente a problematização da realidade brasileira." }
    ],
    detailedExplanation: {
      summary: "A introdução padrão ouro de 200 pontos na Competência 3 apresenta: 1) Contextualização (CF/88); 2) Apresentação do tema com conectivo de contraste ('Todavia...'); 3) Tese bipartida com Argumento 1 ('desinformação secular' -> será o D1) e Argumento 2 ('insuficiência estrutural de acolhimento' -> será o D2).",
      stepByStep: [
        "1. Elemento 1 (Repertório): Art. 6º da CF/88 legitima o debate com base jurídica sólida.",
        "2. Elemento 2 (Problematização): Conectivo 'Todavia' denuncia o descompasso entre a lei e a realidade brasileira.",
        "3. Elemento 3 (Tese Bipartida): 'alimentada tanto por X [causa sociocultural] quanto por Y [causa institucional]'.",
        "4. Impacto na C3: O corretor sabe exatamente o que esperar nos próximos parágrafos, atestando autoria e planejamento prévio impecável."
      ],
      coreConcept: "Engenharia da Introdução e Projeto de Texto Bipartido (Competência 3)",
      trapWarning: "Se você anunciar duas causas na introdução (A1 e A2), você DEVE obrigatoriamente desenvolvê-las exatamente nessa ordem em D1 e D2. Nunca abandone um argumento anunciado!"
    },
    commonTraps: [
      "Escrever introduções genéricas sem antecipar a tese bipartida",
      "Confundir o papel da introdução com o da conclusão com proposta"
    ],
    tags: ["redacao-enem", "projeto-de-texto", "tese-bipartida", "competencia-3", "introducao-padrao-ouro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-021",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia da Falsa Causa (Post Hoc Ergo Propter Hoc) e Correlação vs Causalidade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em campanhas de desinformação na internet, tornou-se frequente o uso de argumentos do tipo: 'O paciente ingeriu o chá da planta X na terça-feira e na quinta-feira seus sintomas de gripe desapareceram por completo; logo, o chá da planta X é a cura comprovada para a infecção viral'. Na lógica formal e na metodologia científica, essa dedução constitui a falácia da falsa causa, conhecida historicamente pela expressão latina *post hoc ergo propter hoc* ('depois disso, logo por causa disso').",
      source: "Lógica Informal, Metodologia Científica e Pensamento Crítico"
    },
    prompt: "A falha argumentativa apresentada no texto decorre fundamentalmente do fato de que o enunciador:",
    options: [
      { id: "a", text: "confunde uma mera sucessão temporal e coincidência cronológica de eventos com um nexo causal cientificamente comprovado, ignorando que o sistema imunológico debela naturalmente certas viroses.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "afirma categoricamente que nenhuma espécie botânica possui substâncias com propriedades fitoterápicas.", isCorrect: false, distractorRationale: "O enunciador não negou o valor dos fitoterápicos em geral; o erro está na inferência causal precipitada sem teste controlado." },
      { id: "c", text: "apresenta dados quantitativos de ensaios clínicos duplo-cego que desmentem as diretrizes da Organização Mundial da Saúde.", isCorrect: false, distractorRationale: "O texto não cita ensaios clínicos duplo-cego, mas sim um relato anedótico e informal isolado." },
      { id: "d", text: "utiliza uma oração subordinada adverbial concessiva para demonstrar que o paciente tomou medicamentos alopáticos.", isCorrect: false, distractorRationale: "Não há oração concessiva no relato nem menção a remédios alopáticos prévios." },
      { id: "e", text: "emprega termos arcaicos do latim clássico para convencer a bancada médica sobre a eficácia de antibióticos.", isCorrect: false, distractorRationale: "A expressão latina foi usada pelo autor analista para classificar a falácia, e não pelo sujeito que relatou o chá." }
    ],
    detailedExplanation: {
      summary: "A falácia 'post hoc ergo propter hoc' comete o erro de supor que, só porque o evento B ocorreu após o evento A, o evento A foi necessariamente a causa de B. Na ausência de grupo de controle e isolamento de variáveis, a correlação temporal é insuficiente para atestar eficácia biológica.",
      stepByStep: [
        "1. Identificação da estrutura: Evento A (tomar o chá) ocorreu antes de B (melhora clínica).",
        "2. Identificação da inferência falaciosa: Concluir que A causou B unicamente pela ordem cronológica.",
        "3. Realidade científica: Quadros de resfriado e viroses respiratórias autolimitadas costumam remitir espontaneamente em poucos dias pela ação dos anticorpos e linfócitos.",
        "4. Conclusão: Trata-se da falácia da falsa causa (post hoc), típica de relatos anedóticos não controlados."
      ],
      coreConcept: "Falácia da Falsa Causa (Post Hoc Ergo Propter Hoc)",
      trapWarning: "No ENEM e na prova de Linguagens, fique atento a relações causais fictícias. Correlação temporal não implica causalidade científica."
    },
    commonTraps: [
      "Acreditar que a ordem temporal de dois fatos garante relação de causa e efeito",
      "Confundir depoimento anedótico individual com comprovação clínica"
    ],
    tags: ["argumentacao", "falacias", "falsa-causa", "post-hoc", "pensamento-critico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-022",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "Argumento de Autoridade Legítimo vs Falácia do Apelo Indevido (Ad Verecundiam)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere dois trechos veiculados no debate público contemporâneo:\n\nTrecho 1: 'Segundo relatório conclusivo do Painel Intergovernamental sobre Mudanças Climáticas (IPCC), que congrega mais de 800 climatologistas e revisores de artigos em periódicos internacionais indexados, as emissões antrópicas de gases de efeito estufa aceleraram a temperatura média do planeta.'\nTrecho 2: 'O famoso ator e galã de cinema declarou em suas redes sociais que as vacinas de RNA mensageiro causam alterações perigosas na personalidade humana, razão pela qual a população deveria rejeitar a imunização coletiva.'",
      source: "Retórica Crítica e Análise de Discurso da Mídia"
    },
    prompt: "Comparando os dois procedimentos argumentativos, verifica-se que o Trecho 2 configura uma falácia de apelo indevido à autoridade (*argumentum ad verecundiam*) porque:",
    options: [
      { id: "a", text: "apoia sua premissa na notoriedade midiática de uma celebridade que carece de expertise científica e respaldo em evidências biomédicas revisadas por pares.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "emprega argumentos baseados em estatísticas epidemiológicas que contrariam os consensos da física quântica.", isCorrect: false, distractorRationale: "O Trecho 2 não cita estatísticas epidemiológicas nem faz referência à física quântica." },
      { id: "c", text: "utiliza uma autoridade governamental oficial para proibir o debate em instituições universitárias.", isCorrect: false, distractorRationale: "O ator não é uma autoridade governamental e não detém poder legal proibitivo." },
      { id: "d", text: "desenvolve um raciocínio dedutivo silogístico perfeito cujas conclusões independem de validação empírica.", isCorrect: false, distractorRationale: "O raciocínio é falacioso e cientificamente incorreto, sem qualquer rigor silogístico." },
      { id: "e", text: "restringe a circulação do conteúdo opinativo a veículos acadêmicos impressos de circulação fechada.", isCorrect: false, distractorRationale: "A opinião foi difundida abertamente em redes sociais, e não em periódicos acadêmicos." }
    ],
    detailedExplanation: {
      summary: "O argumento de autoridade legítimo (como o Trecho 1) sustenta-se na qualificação técnica, no consenso de pares e em pesquisas consolidadas. O apelo indevido à autoridade (ad verecundiam, Trecho 2) transfere o prestígio de alguém em uma área (atuação/cinema) para emitir vereditos falsos em outra área sem domínio de competência (imunologia/medicina).",
      stepByStep: [
        "1. No Trecho 1: IPCC, mais de 800 climatologistas, literatura científica revisada por pares -> autoridade epistêmica legítima.",
        "2. No Trecho 2: Celebridade/ator opinando sobre vacinas -> notoriedade pública usada indevidamente como aval científico.",
        "3. Conceito retórico: Falácia *ad verecundiam* é o recurso à reputação ou fama de alguém para legitimar teses fora de sua especialidade.",
        "4. Conclusão: A alternativa (a) explicita exatamente a ausência de competência biomédica revisada por pares."
      ],
      coreConcept: "Argumento de Autoridade vs Falácia Ad Verecundiam",
      trapWarning: "No ENEM: Nem todo argumento de autoridade é falácia! É legítimo quando a autoridade é especialista no assunto tratado e reflete consensos metodológicos."
    },
    commonTraps: [
      "Achar que todo argumento que cita pessoas conhecidas é necessariamente falso",
      "Confundir fama popular com autoridade técnico-científica legítima"
    ],
    tags: ["argumento-de-autoridade", "ad-verecundiam", "retorica", "comunicacao", "falacias"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-023",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Argumentação e Retórica",
    subtopic: "Estratégia de Concessão Argumentativa e Contraposição Dialética",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o seguinte trecho de um editorial opinativo sobre a transição para fontes limpas de energia:\n'Embora seja inegável que a substituição progressiva dos combustíveis fósseis por matrizes renováveis envolva custos financeiros iniciais vultosos e reestruturações complexas nos complexos industriais, postergar essa transição acarretará desastres ecológicos e prejuízos econômicos incomparavelmente mais devastadores a médio e longo prazos. Desse modo, o investimento precoce em energias solar e eólica constitui o único caminho prudente e sustentável.'",
      source: "Revista de Economia Ecológica e Sustentabilidade"
    },
    prompt: "No fragmento apresentado, o articulista emprega a estratégia da concessão argumentativa ('Embora seja inegável...') com a finalidade retórica de:",
    options: [
      { id: "a", text: "reconhecer previamente uma dificuldade real apontada pelos opositores para, em seguida, neutralizá-la e demonstrar a superioridade do seu ponto de vista principal.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "desistir da defesa da energia renovável em razão dos custos elevados que inviabilizam o progresso industrial.", isCorrect: false, distractorRationale: "O autor não desiste; pelo contrário, reforça que postergar a transição gerará prejuízos ainda maiores." },
      { id: "c", text: "comprovar que os combustíveis fósseis não produzem dióxido de carbono nem interferem no balanço térmico.", isCorrect: false, distractorRationale: "O texto reconhece a urgência climática e defende o abandono progressivo dos combustíveis fósseis." },
      { id: "d", text: "atacar pessoalmente os empresários do setor energético por meio de recursos de desqualificação moral.", isCorrect: false, distractorRationale: "Não há ataque pessoal (ad hominem), mas debate racional de custos versus benefícios futuros." },
      { id: "e", text: "negar a legitimidade dos cálculos econômicos no planejamento de políticas públicas estatais.", isCorrect: false, distractorRationale: "O autor utiliza justamente argumentos econômicos de longo prazo para validar sua tese." }
    ],
    detailedExplanation: {
      summary: "A concessão argumentativa é uma das técnicas mais eficazes na dissertação do ENEM e no debate acadêmico: o autor concede temporariamente um ponto ao opositor ('Embora envolva custos vultosos...') para mostrar honestidade intelectual, mas rebate imediatamente com um argumento de peso esmagador ('postergar acarretará desastres ainda maiores').",
      stepByStep: [
        "1. Identificação do operador concessivo: 'Embora...', 'Conquanto...', 'Não obstante...'.",
        "2. Identificação da concessão: Reconhecimento de que os custos iniciais das fontes renováveis são elevados.",
        "3. Identificação do contra-ataque retórico: O custo da inação climática é infinitamente maior e catastrófico.",
        "4. Efeito persuasivo: O enunciador ganha credibilidade perante o leitor por demonstrar maturidade e ponderação, desarmando antecipadamente as objeções contrárias."
      ],
      coreConcept: "Concessão Argumentativa e Contra-argumentação",
      trapWarning: "Na redação do ENEM, usar operadores concessivos demonstra domínio avançado de autoria e projeto de texto (Competência 3 e 4)."
    },
    commonTraps: [
      "Achar que fazer concessão enfraquece a tese (na verdade, ela fortalece ao antecipar e refutar críticas)",
      "Confundir concessão com contradição interna"
    ],
    tags: ["concessao-argumentativa", "dialetica", "operadores-argumentativos", "redacao-enem", "retorica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-024",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia do Espantalho (Straw Man) no Debate Público",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Observe o diálogo travado em uma audiência pública sobre transporte coletivo:\nDebatedor A: 'Precisamos ampliar ciclovias estruturadas e faixas exclusivas de ônibus nos corredores metropolitanos para reduzir o tráfego de automóveis individuais e os poluentes.'\nDebatedor B: 'O que o senhor está propondo é confiscar os carros de todas as famílias e forçar idosos e doentes a pedalar 30 quilômetros sob tempestades. Essa ideia é um absurdo tirânico e deve ser rejeitada!'",
      source: "Comunicação Política e Análise dos Vícios de Argumentação"
    },
    prompt: "A intervenção do Debatedor B exemplifica a falácia do 'espantalho' (ou homem de palha) porque consiste em:",
    options: [
      { id: "a", text: "distorcer e exagerar caricaturalmente a proposta original do oponente, criando uma versão absurda e fácil de atacar que jamais foi defendida por ele.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "concordar integralmente com a ampliação de linhas de metrô e ciclovias em horários de pico.", isCorrect: false, distractorRationale: "O Debatedor B rejeita agressivamente a fala de A, sem demonstrar concordância." },
      { id: "c", text: "citar estatísticas de engenharia de tráfego que demonstram a fluidez do tráfego rodoviário.", isCorrect: false, distractorRationale: "Não há estatísticas nem dados de engenharia de tráfego na resposta do Debatedor B." },
      { id: "d", text: "utilizar a lógica matemática dedutiva para demonstrar a inviabilidade financeira dos semáforos.", isCorrect: false, distractorRationale: "A resposta recorre a hipérboles emotivas infundadas, e não a cálculos matemáticos dedutivos." },
      { id: "e", text: "fazer um elogio sincero à habilidade física e esportiva da população idosa.", isCorrect: false, distractorRationale: "O enunciador vitimiza a população idosa como recurso retórico de comoção social." }
    ],
    detailedExplanation: {
      summary: "A falácia do espantalho (straw man) ocorre quando um debatedor substitui a posição real do adversário por uma versão deturpada, extremada ou simplista, atacando essa cópia frágil (o 'espantalho') em vez da proposta concreta apresentada.",
      stepByStep: [
        "1. Proposta original (A): Faixas de ônibus e ciclovias para atenuar o trânsito e emissões de poluentes.",
        "2. Versão deturpada por B: 'Confiscar carros de todas as famílias e forçar idosos a pedalar 30 km sob chuva'.",
        "3. Análise crítica: Debatedor A jamais propôs confisco de automóveis nem pedaladas compulsórias para vulneráveis.",
        "4. Conclusão: Ao inventar uma farsa indefensável, B tenta derrotar A de maneira desleal perante a plateia."
      ],
      coreConcept: "Falácia do Espantalho (Straw Man Argument)",
      trapWarning: "No ENEM: A falácia do espantalho é um dos recursos mais comuns na desinformação e em discursos polarizados. Identifique se o interlocutor está respondendo ao que foi dito ou a uma caricatura inventada."
    },
    commonTraps: [
      "Confundir contra-argumentação legítima com deformação deliberada das ideias do outro",
      "Ser seduzido pela veemência emocional do atacante sem avaliar a fidelidade ao texto original"
    ],
    tags: ["falacia-do-espantalho", "straw-man", "debate-publico", "etica-argumentativa", "retorica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ARG-025",
    area: "linguagens",
    competence: 7,
    skill: 24,
    topic: "Argumentação e Retórica",
    subtopic: "Modalizadores Discursivos e Marcas de Posicionamento Argumentativo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as duas formulações a respeito do mesmo acontecimento econômico:\n\nEnunciado 1: 'O novo pacote fiscal supostamente equilibrará as contas públicas no próximo semestre.'\nEnunciado 2: 'O novo pacote fiscal indubitavelmente equilibrará as contas públicas no próximo semestre.'\n\nEm linguística e análise textual, advérbios como 'supostamente' e 'indubitavelmente' funcionam como moduladores discursivos (ou modalizadores epistêmicos).",
      source: "Semântica Argumentativa e Análise do Discurso Contemporâneo"
    },
    prompt: "A comparação entre os dois enunciados revela que os modalizadores empregados exercem a função de:",
    options: [
      { id: "a", text: "evidenciar graus opostos de comprometimento e certeza do locutor em relação à verdade do fato anunciado, expressando desconfiança/distanciamento no Enunciado 1 e convicção inabalável no Enunciado 2.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "alterar o tempo verbal da oração de futuro do presente para pretérito imperfeito do subjuntivo.", isCorrect: false, distractorRationale: "O tempo verbal 'equilibrará' permaneceu idêntico nos dois enunciados (futuro do presente do indicativo)." },
      { id: "c", text: "eliminar a função conativa do discurso para transformá-lo exclusivamente em metalinguagem de dicionário.", isCorrect: false, distractorRationale: "Não se trata de metalinguagem nem de definição dicionarizada; trata-se de argumentação política/econômica." },
      { id: "d", text: "indicar que o autor é analfabeto funcional incapaz de empregar a norma culta da língua portuguesa.", isCorrect: false, distractorRationale: "Distrator preconceituoso e inverídico; os termos são recursos formais cultos e sofisticados." },
      { id: "e", text: "garantir que ambos os textos possuem absoluta neutralidade jornalística isenta de qualquer posicionamento.", isCorrect: false, distractorRationale: "Pelo contrário, modalizadores são as marcas mais claras de que a linguagem NÃO é neutra." }
    ],
    detailedExplanation: {
      summary: "Modalizadores epistêmicos são palavras ou expressões pelas quais o locutor manifesta sua atitude perante o conteúdo do enunciado. 'Supostamente' instaura dúvida, ironia ou afastamento ('alguém diz isso, mas eu não endosso'); já 'indubitavelmente' imprime máxima certeza e força assertiva ao argumento.",
      stepByStep: [
        "1. No Enunciado 1: 'supostamente' expressa incerteza, reserva epistêmica ou desconfiança sobre a eficácia do pacote fiscal.",
        "2. No Enunciado 2: 'indubitavelmente' expressa certeza categórica, adesão plena e ênfase assertiva.",
        "3. Efeito de sentido: A escolha lexical modula a credibilidade da informação e condiciona a interpretação do leitor.",
        "4. Conclusão: A alternativa (a) descreve com exatidão como os modalizadores definem o grau de comprometimento do locutor com a verdade."
      ],
      coreConcept: "Modalizadores Discursivos e Marcas de Subjetividade Textual",
      trapWarning: "No ENEM: Questões de Linguagens adoram cobrar modalizadores (advérbios, locuções adverbiais, verbos modais como 'pode/deve'). Eles revelam a ideologia e o posicionamento implícito do autor por trás de uma aparente neutralidade."
    },
    commonTraps: [
      "Acreditar que advérbios exercem apenas função sintática acessória sem carga persuasiva",
      "Ignorar que palavras como 'supostamente', 'talvez', 'certamente' alteram radicalmente o tom do texto"
    ],
    tags: ["modalizadores-discursivos", "marcas-de-autoria", "semantica-argumentativa", "linguagens-enem", "retorica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
