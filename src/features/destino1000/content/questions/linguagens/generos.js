export const QUESTIONS_GENEROS = [
  {
    id: "LIN-GEN-001",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Editorial Jornalístico",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A recente aprovação do novo marco regulatório para o saneamento básico reacende um debate inadiável no país: a inadmissível convivência de milhões de brasileiros com esgoto a céu aberto em pleno século XXI. Embora vozes corporativistas insistam em demonizar a cooperação público-privada sob o manto de um falso nacionalismo de serviços, os números são incontestes. O Estado brasileiro falhou rotundamente em universalizar a água tratada nas últimas quatro décadas. Atrair capital privado, sob regulação estatal rigorosa e metas universais de cobertura, não é abdicar da soberania pública, mas sim resgatar a dignidade biológica de populações historicamente invisibilizadas pelo desleixo fiscal.",
      source: "Editorial. Folha de S.Paulo, 2023 (adaptado)."
    },
    prompt: "O texto acima pertence ao gênero editorial. A marca discursiva fundamental que assegura seu pertencimento a esse gênero e o distingue de uma notícia puramente informativa é:",
    options: [
      {
        id: "a",
        text: "o emprego exclusivo da primeira pessoa do singular para expressar os sentimentos íntimos do jornalista redator.",
        isCorrect: false,
        distractorRationale: "O editorial não expressa sentimentos individuais em 1ª pessoa do singular; ele assume a voz coletiva e institucional do veículo de imprensa."
      },
      {
        id: "b",
        text: "a assunção explícita de um posicionamento axiológico e ideológico que reflete a opinião institucional do veículo sobre um fato público de relevância social.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "c",
        text: "a total neutralidade descritiva dos dados numéricos, abstendo-se de juízos de valor sobre os agentes sociais envolvidos.",
        isCorrect: false,
        distractorRationale: "O texto utiliza termos valorativos carregados ('inadmissível convivência', 'falhou rotundamente', 'falso nacionalismo'), demonstrando evidente julgamento de valor."
      },
      {
        id: "d",
        text: "o caráter prescritivo centrado em instruções procedimentais de como o leitor deve proceder em situações de emergência sanitária.",
        isCorrect: false,
        distractorRationale: "Isso caracterizaria um texto injuntivo ou manual de instruções, não um editorial dissertativo-argumentativo."
      },
      {
        id: "e",
        text: "o relato cronológico detalhado dos acontecimentos da sessão de votação parlamentar, sem emitir parecer crítico.",
        isCorrect: false,
        distractorRationale: "Isso caracterizaria uma notícia ou crônica parlamentar factual, sem a defesa de tese institucional típica do editorial."
      }
    ],
    detailedExplanation: {
      summary: "O editorial é o gênero jornalístico opinativo por excelência que expressa a opinião institucional da empresa jornalística, defendendo uma tese com argumentos sólidos sobre um fato contemporâneo relevante.",
      stepByStep: [
        "Identificação do gênero: trata-se de um editorial, publicado sem assinatura individual porque expressa a voz coletiva do jornal.",
        "Análise dos recursos estilísticos: presença de adjetivação axiológica ('inadmissível', 'rotundamente', 'falso') e argumentação estruturada a favor da cooperação público-privada sob regulação.",
        "Diferenciação com a notícia: notícias priorizam o relato factual impessoal ('o que, quem, quando, onde'); editoriais priorizam a tomada de posição política e social ('por que, o que pensamos a respeito')."
      ],
      coreConcept: "Gênero Editorial: Opinião Institucional, Tese e Juízo de Valor no Jornalismo",
      trapWarning: "Cuidado para não confundir editorial com artigo de opinião assinado. No editorial não há assinatura pessoal, pois quem responde pela tese é a empresa/instituição jornalística."
    },
    commonTraps: [
      "Achar que o editorial é neutro como a notícia informativa",
      "Confundir editorial institucional com artigo de opinião assinado"
    ],
    tags: ["generos-textuais", "editorial", "jornalismo", "argumentacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-002",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Crônica Literária",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O homem parou diante da vitrine da sapataria antiga. Não olhava para os calçados de couro lustroso nem para as etiquetas de liquidação que amarelavam sob a lâmpada fluorescente. Olhava para o reflexo do próprio rosto no vidro embaçado pela poeira da tarde. Atrás dele, a avenida rugia com sua pressa mecânica de ônibus soltando fumaça e pedestres desviando de poças de chuva recente. Mas ali, naquele palmo de reflexo, ele reencontrou o garoto que, quarenta anos antes, segurava a mão trêmula do pai para comprar o primeiro par de sapatos de formatura. O tempo, pensou, não passa em linha reta; ele faz curvas em esquinas de comércio popular.",
      source: "SABINO, Fernando. Adaptado para fins didáticos."
    },
    prompt: "O fragmento transcrito exemplifica o gênero crônica literária. O traço que melhor sintetiza a natureza desse gênero textual na tradição brasileira é:",
    options: [
      {
        id: "a",
        text: "o registro documental e estritamente verídico de crimes urbanos para subsidiar inquéritos policiais.",
        isCorrect: false,
        distractorRationale: "Isso define uma reportagem policial ou boletim de ocorrência, não uma crônica poético-reflexiva."
      },
      {
        id: "b",
        text: "a transmutação artística de um evento miúdo e efêmero do cotidiano urbano em uma reflexão lírico-filosófica sobre a existência e a memória.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "c",
        text: "a exposição técnica de teorias sociológicas complexas sobre o consumismo das classes trabalhadoras nas metrópoles.",
        isCorrect: false,
        distractorRationale: "O texto não tem formato acadêmico de ensaio sociológico; opera pela sensibilidade e pela imagem poética prosaica."
      },
      {
        id: "d",
        text: "a prescrição normativa de padrões de conduta moral a serem obrigatoriamente seguidos pelas novas gerações de estudantes.",
        isCorrect: false,
        distractorRationale: "A crônica moderna é despretensiosa, intimista e avessa a sermões moralizantes dogmáticos."
      },
      {
        id: "e",
        text: "a narração épica de grandes façanhas heroicas que alteraram os rumos políticos de uma nação soberana.",
        isCorrect: false,
        distractorRationale: "Grandes feitos heroicos pertencem à epopeia e ao romance histórico; a crônica foca justamente na insignificância poética do dia a dia."
      }
    ],
    detailedExplanation: {
      summary: "A crônica literária brasileira (imortalizada por Rubem Braga, Fernando Sabino e Machado de Assis) nasce no jornal para capturar o instante fugaz do cotidiano, transformando o banal em reflexão poética universal.",
      stepByStep: [
        "A cena descrita é trivial: um homem olhando uma vitrine de sapatos.",
        "A operação do cronista consiste em 'pescar' nessa banalidade uma brecha temporal para evocar a infância, o pai e a passagem inexorável da vida.",
        "A linguagem combina tom coloquial, brevidade narrativa e densidade lírica."
      ],
      coreConcept: "Crônica: O Cotidiano Urbano Elevado à Condição de Arte Literária",
      trapWarning: "No ENEM, a crônica transita na fronteira entre o jornalismo (espaço de publicação) e a literatura (liberdade ficcional e olhar subjetivo)."
    },
    commonTraps: [
      "Esperar que a crônica tenha um clímax bombástico de conto ou romance",
      "Reduzir a crônica a mero relato jornalístico desprovido de valor literário"
    ],
    tags: ["cronica", "cotidiano", "literatura", "generos-textuais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-003",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Reportagem vs. Notícia",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas margens do Rio Doce, oito anos após o rompimento da barragem de Fundão, a rotina dos pescadores de Regência (ES) ainda carrega o gosto amargo do lodo tóxico. 'A água parece limpa aos olhos de quem passa na ponte, mas quando a gente joga a rede, o que vem é peixe deformado ou rede vazia', desabafa o pescador José Silva, 58 anos. Para a bióloga e pesquisadora da UFES, Dra. Mariana Ramos, os metais pesados depositaram-se na cadeia trófica bentônica, criando um passivo ecológico invisível que pode demandar décadas para remediação. Enquanto relatórios da mineradora apontam cumprimento de metas de compensação financeira e monitoramento contínuo, líderes comunitários denunciam a fragmentação do tecido social e o aumento de doenças psicossomáticas entre os ribeirinhos.",
      source: "Agência Pública de Jornalismo Investigativo, 2023 (adaptado)."
    },
    prompt: "O texto acima estrutura-se como uma grande reportagem. Em relação ao gênero notícia, a reportagem diferencia-se principalmente por:",
    options: [
      {
        id: "a",
        text: "apresentar com exclusividade informações fictícias para comover a sensibilidade estética do leitor.",
        isCorrect: false,
        distractorRationale: "O jornalismo baseia-se em fatos reais apurados; reportagem não é ficção."
      },
      {
        id: "b",
        text: "restringir-se à resposta mecânica das perguntas básicas da pirâmide invertida (o que, quem, quando e onde), em um único parágrafo sucinto.",
        isCorrect: false,
        distractorRationale: "Essa estrutura sucinta e imediata define a notícia ('lead'), não a reportagem aprofundada."
      },
      {
        id: "c",
        text: "aprofundar as causas, impactos históricos e desdobramentos de um fato por meio da polifonia discursiva, confrontando vozes plurais como especialistas, vítimas e instituições.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "d",
        text: "abster-se de coletar dados empíricos de campo, baseando-se estritamente na intuição poética de quem redige.",
        isCorrect: false,
        distractorRationale: "A reportagem é marcada por apuração densa em campo, entrevistas in loco e documentação empírica."
      },
      {
        id: "e",
        text: "veicular propaganda comercial patrocinada para estimular o consumo imediato de bens e serviços de uma empresa.",
        isCorrect: false,
        distractorRationale: "Isso define o informe publicitário ('publieditorial'), oposto ao jornalismo investigativo independente."
      }
    ],
    detailedExplanation: {
      summary: "A reportagem é um gênero jornalístico aprofundado que contextualiza o fato no tempo e no espaço, investigando raízes e consequências por meio da polifonia (confronto de múltiplas vozes: pescador, cientista, mineradora, comunidade).",
      stepByStep: [
        "A notícia registra o acontecimento imediato com brevidade (rompimento da barragem no dia do fato).",
        "A reportagem investiga os desdobramentos de longo prazo (oito anos depois).",
        "Presença de polifonia discursiva: dá voz ao sujeito afetado (José), à autoridade acadêmica (Dra. Mariana) e aos relatórios institucionais da empresa."
      ],
      coreConcept: "Reportagem: Polifonia, Investigação Aprofundada e Contextualização Social",
      trapWarning: "No ENEM, reconheça que a reportagem não é neutra no sentido ingênuo: ela busca construir um panorama crítico complexo articulando diferentes pontos de vista."
    },
    commonTraps: [
      "Confundir notícia (imediata e breve) com reportagem (aprofundada e multifacetada)",
      "Achar que jornalismo investigativo pode ser equiparado a ficção"
    ],
    tags: ["reportagem", "polifonia", "jornalismo", "meio-ambiente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-004",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Artigo de Opinião",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "É urgente desmistificar a tese ingênua de que a mera introdução de inteligência artificial generativa nas salas de aula democratizará automaticamente o saber. Não nos iludamos: sem letramento digital crítico e sem a valorização salarial do professor de carne e osso, o algoritmo servirá apenas para aprofundar abismos cognitivos preexistentes. A máquina sintetiza dados com velocidade estarrecedora, mas é incapaz de sentir a dúvida silenciosa que brota no olhar de uma criança ou de mediar conflitos éticos complexos. Portanto, colocar telas de ponta em escolas sem saneamento e sem bibliotecas não é inovação pedagógica; é cinismo governamental travestido de modernidade.",
      source: "Artigo de opinião assinado por educador, Jornal Nexo, 2024 (adaptado)."
    },
    prompt: "No artigo de opinião, o autor utiliza recursos persuasivos para convencer o leitor de sua tese. No fragmento apresentado, o posicionamento do articulista é construído primordialmente por meio de:",
    options: [
      {
        id: "a",
        text: "um relato autobiográfico desprovido de qualquer julgamento crítico sobre o sistema educacional.",
        isCorrect: false,
        distractorRationale: "O texto não narra memórias pessoais biográficas; ele desenvolve uma reflexão sociopolítica contundente."
      },
      {
        id: "b",
        text: "contraposição argumentativa sustentada por operadores de oposição e termos modalizadores que desautorizam a visão otimista ingênua.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "c",
        text: "descrição neutra das linguagens de programação e da arquitetura de redes neurais artificiais.",
        isCorrect: false,
        distractorRationale: "O foco não é a descrição técnica da computação, mas o impacto humano e ético da tecnologia no ensino."
      },
      {
        id: "d",
        text: "recomendações médicas passo a passo de ergonomia e postura física ao utilizar computadores portáteis.",
        isCorrect: false,
        distractorRationale: "Não há teor médico-postural; o debate é pedagógico e político."
      },
      {
        id: "e",
        text: "ironia debochada voltada exclusivamente a ofender os estudantes que utilizam ferramentas de inteligência artificial.",
        isCorrect: false,
        distractorRationale: "O texto não ofende os alunos; ele critica a política pública e a ilusão das gestões estatais ('cinismo governamental')."
      }
    ],
    detailedExplanation: {
      summary: "O artigo de opinião assinado é construído para defender uma tese pessoal contra teses rivais. O autor desconstrói o discurso tecnocrático dominante demonstrando as limitações estruturais da escola brasileira.",
      stepByStep: [
        "Tese do autor: tecnologia sem professor valorizado e infraestrutura básica aprofunda desigualdades.",
        "Recursos de modalização e conexão: 'Não nos iludamos', 'mas é incapaz', 'Portanto', 'não é inovação; é cinismo'.",
        "A contraposição entre o poder computacional e a condição humana do professor confere força retórica ao argumento."
      ],
      coreConcept: "Artigo de Opinião: Tese, Modalizadores e Refutação de Contra-Argumentos",
      trapWarning: "Observe sempre os operadores argumentativos ('mas', 'portanto') para identificar onde está o núcleo da tese do autor."
    },
    commonTraps: [
      "Confundir a crítica à gestão educacional com rejeição cega à ciência",
      "Ignorar o papel dos conectivos adversativos na articulação da tese"
    ],
    tags: ["artigo-de-opiniao", "argumentacao", "tecnologia-educacao", "conectivos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-005",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Divulgação Científica",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Pense no seu cérebro como uma grande metrópole em horário de pico. Enquanto você está acordado e ativo, milhões de neurônios disparam sinais como carros buzinando em avenidas congestionadas, gerando um volume expressivo de 'lixo metabólico' – em especial a proteína beta-amiloide. Quando você finalmente apaga a luz e adormece em sono profundo, entra em ação a equipe noturna de limpeza urbana: o chamado sistema glinfático. Esse circuito microscópico bombeia o líquido cefalorraquidiano pelos tecidos cerebrais, lavando as toxinas acumuladas durante o dia. Dormir pouco, portanto, equivale a dispensar os garis da mente: a sujeira se acumula e os engarrafamentos da memória tornam-se inevitáveis.",
      source: "Revista Superinteressante / Ciência Hoje, 2023 (adaptado)."
    },
    prompt: "O texto pertence ao gênero artigo de divulgação científica. O principal recurso didático-linguístico mobilizado pelo autor para aproximar o leitor leigo de um conceito neurobiológico complexo é:",
    options: [
      {
        id: "a",
        text: "o emprego abundante de fórmulas bioquímicas e nomenclaturas em latim para conferir rigor inquestionável à exposição.",
        isCorrect: false,
        distractorRationale: "O texto evita jargões inacessíveis e fórmulas para manter a leitura fluida e compreensível ao leigo."
      },
      {
        id: "b",
        text: "a construção de uma analogia com a rotina de limpeza urbana e trânsito metropolitano para concretizar visualmente a função do sistema glinfático.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "c",
        text: "a transcrição literal de artigos acadêmicos herméticos sem qualquer adaptação de vocabulário.",
        isCorrect: false,
        distractorRationale: "A divulgação científica faz justamente a transposição didática, traduzindo o hermetismo acadêmico em linguagem pública."
      },
      {
        id: "d",
        text: "a criação de uma narrativa ficcional de ficção científica ambientada no ano 3000 em outro planeta.",
        isCorrect: false,
        distractorRationale: "O texto fala do cérebro humano real no presente, não de ficção científica futurista."
      },
      {
        id: "e",
        text: "o uso exclusivo de verbos no imperativo para forçar o leitor a comprar suplementos vitamínicos milagrosos.",
        isCorrect: false,
        distractorRationale: "Isso caracterizaria propaganda comercial enganosa, e não divulgação científica séria."
      }
    ],
    detailedExplanation: {
      summary: "O gênero divulgação científica realiza a chamada transposição didática: transforma conhecimentos científicos complexos em textos acessíveis ao público não especializado, utilizando com frequência metáforas e analogias do cotidiano.",
      stepByStep: [
        "Conceito científico abordado: funcionamento do sistema glinfático e depuração metabólica de beta-amiloide durante o sono.",
        "Estratégia do autor: compara neurônios a carros engarrafados, toxinas a lixo urbano, e o sistema glinfático a caminhões de lixo/garis noturnos.",
        "Resultado comunicativo: o leitor compreende imediatamente o mecanismo fisiológico sem precisar de formação em medicina ou bioquímica."
      ],
      coreConcept: "Divulgação Científica: Transposição Didática e Uso de Metáforas Explicativas",
      trapWarning: "No ENEM, questões sobre divulgação científica cobram com muita frequência a identificação de metáforas, comparações e o processo de mediação do saber acadêmico."
    },
    commonTraps: [
      "Confundir texto de divulgação científica com artigo acadêmico especializado de bancada",
      "Não perceber que analogias cotidianas são ferramentas centrais da transposição didática"
    ],
    tags: ["divulgacao-cientifica", "analogia", "didatica", "neurociencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-006",
    area: "linguagens",
    competence: 5,
    skill: 17,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Campanha Institucional e Injunção",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "NÃO DEIXE O MOSQUITO NASCER. A DENGUE MATA.\n\n1. Tampe caixas d'água e cisternas.\n2. Limpe as calhas regularmente.\n3. Coloque areia até a borda nos pratinhos dos vasos de planta.\n4. Descarte pneus velhos em locais apropriados.\n5. Receba bem os agentes de endemias da sua prefeitura.\n\nUm mosquito não pode ser mais forte do que um país inteiro. Faça a sua parte. Denuncie focos pelo Disque-Saúde 136.",
      source: "Ministério da Saúde, Campanha Nacional de Combate à Dengue, 2024."
    },
    prompt: "O cartaz de campanha comunitária do Ministério da Saúde apoia-se predominantemente na tipologia injuntiva. Essa predominância manifesta-se formalmente pelo uso de:",
    options: [
      {
        id: "a",
        text: "verbos conjugados no modo imperativo com vistas a orientar, prescrever e conclamar o interlocutor a adotar comportamentos preventivos específicos.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "b",
        text: "termos arcaicos e rebuscados com o intuito de elitizar o acesso à mensagem sanitária governamental.",
        isCorrect: false,
        distractorRationale: "Campanhas de utilidade pública buscam linguagem direta e universal para alcançar todas as classes sociais."
      },
      {
        id: "c",
        text: "orações subordinadas adjetivas explicativas longas para descrever os hábitos biológicos de reprodução do inseto.",
        isCorrect: false,
        distractorRationale: "O texto não se alonga em biologia descritiva; ele é conciso e focado na ação prática do cidadão."
      },
      {
        id: "d",
        text: "figuras de linguagem complexas como paradoxos e sinestesias para produzir prazer estético e poético.",
        isCorrect: false,
        distractorRationale: "O objetivo é utilitário e pragmático (salvar vidas e conter epidemia), não o deleite poético."
      },
      {
        id: "e",
        text: "discurso indireto livre para relatar as angústias psicológicas de pacientes infectados pelo vírus.",
        isCorrect: false,
        distractorRationale: "Isso é recurso literário narrativo, ausente na comunicação institucional de prevenção."
      }
    ],
    detailedExplanation: {
      summary: "A tipologia textual injuntiva (ou prescritiva) caracteriza-se pela intenção de guiar, orientar ou ordenar o comportamento do leitor, sendo formalmente marcada pelo uso sistemático do modo imperativo ou do infinitivo diretivo.",
      stepByStep: [
        "Verbos centrais do texto: 'Não deixe', 'Tampe', 'Limpe', 'Coloque', 'Descarte', 'Receba', 'Faça', 'Denuncie'.",
        "Todos esses verbos estão no modo imperativo (afirmativo e negativo).",
        "A função de linguagem predominante é a conativa/apelativa (foco no receptor da mensagem para mobilizá-lo para a ação cívica)."
      ],
      coreConcept: "Tipologia Injuntiva: Prescrição, Orientação Prática e Modo Imperativo",
      trapWarning: "No ENEM, associar a tipologia injuntiva ao modo imperativo e à função conativa/apelativa é uma das competências mais recorrentes na prova de Linguagens."
    },
    commonTraps: [
      "Confundir injunção (orientação de conduta) com dissertação puramente teórica",
      "Não associar verbos no imperativo à tentativa de influenciar a ação do leitor"
    ],
    tags: ["injuncao", "campanha-comunitaria", "modo-imperativo", "saude-publica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-007",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Verbete de Dicionário e Enciclopédia",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "GENTRIFICAÇÃO (gen.tri.fi.ca.ção) s.f. [Do inglês gentrification, de gentry, 'nobreza, pequena nobreza']. Sociol. Urb. Processo de transformação socioespacial de áreas urbanas centrais ou históricas degradadas que, ao receberem investimentos públicos e privados em infraestrutura e embelezamento, sofrem valorização imobiliária expressiva, resultando na expulsão direta ou indireta dos moradores tradicionais e trabalhadores de menor poder aquisitivo, substituídos por grupos de rendas mais elevadas e novos comércios de alto padrão. Sin.: enobrecimento urbano.",
      source: "Dicionário de Conceitos Sociológicos e Urbanos (adaptado)."
    },
    prompt: "O verbete de dicionário ou enciclopédia é um gênero textual que cumpre uma função social específica. As marcas estruturais que evidenciam o caráter explicativo e normativo desse gênero no texto são:",
    options: [
      {
        id: "a",
        text: "o emprego de rimas ricas e métrica decassilábica para facilitar a memorização lírica pelo consulente.",
        isCorrect: false,
        distractorRationale: "O verbete é prosa técnica denotativa, não composição poética metrificada."
      },
      {
        id: "b",
        text: "a indicação da classe gramatical, da etimologia da palavra, da delimitação da área do conhecimento e da definição conceitual concisa e denotativa.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "c",
        text: "o desenvolvimento de um diálogo informal em primeira pessoa entre dois amigos caminhando pela cidade.",
        isCorrect: false,
        distractorRationale: "Verbetes são textos monológicos, impessoais e formais, sem diálogos coloquiais."
      },
      {
        id: "d",
        text: "a apelação direta às emoções do leitor para que ele vote em determinados projetos de revitalização de bairros.",
        isCorrect: false,
        distractorRationale: "O verbete não faz campanha eleitoral nem busca comoção emotiva; ele busca esclarecer o significado com objetividade."
      },
      {
        id: "e",
        text: "a apresentação de hipóteses místicas sobre a origem cósmica dos termos linguísticos.",
        isCorrect: false,
        distractorRationale: "A etimologia é filológica e histórica, jamais mística."
      }
    ],
    detailedExplanation: {
      summary: "O verbete é um gênero de consulta rápida que visa definir termos, conceitos ou personalidades com precisão terminológica, rigor denotativo e marcas lexicográficas padronizadas (separação silábica, classe morfológica, etimologia e acepções semânticas).",
      stepByStep: [
        "Cabeça do verbete: entrada léxica com separação silábica '(gen.tri.fi.ca.ção)'.",
        "Abreviações técnicas: 's.f.' (substantivo feminino) e 'Sociol. Urb.' (área temática de aplicação).",
        "Etimologia: origem histórica do termo ('Do inglês gentrification...').",
        "Definição conceitual denotativa: explicação hiperonímica rigorosa ('Processo de transformação socioespacial...') finalizada com remissão sinônima."
      ],
      coreConcept: "Gênero Verbete: Objetividade Lexicográfica, Denotação e Estrutura Padronizada",
      trapWarning: "No ENEM, atente-se às convenções formais de abreviações técnicas e à neutralidade enunciativa como características definidoras de verbetes."
    },
    commonTraps: [
      "Ignorar a importância das marcações gramaticais e etimológicas que compõem o gênero",
      "Procurar intenções narrativas em textos cuja finalidade é estritamente definidora"
    ],
    tags: ["verbete", "lexicografia", "denotacao", "generos-textuais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-008",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Manifesto e Carta Aberta",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nós, professores, pesquisadores, estudantes e trabalhadores da ciência deste país, reunidos em assembleia nacional, tornamos pública nossa indignação diante dos sucessivos cortes orçamentários que asfixiam nossos laboratórios e bolsas de pesquisa. Uma nação que renuncia à soberania do conhecimento condena seu povo à condição perpétua de consumidora passiva de patentes estrangeiras. Não aceitaremos a destruição silenciosa da universidade pública. Exigimos das autoridades a recomposição orçamentária imediata e o respeito à autonomia da produção científica. Pela soberania científica e tecnológica do Brasil!",
      source: "Manifesto dos Trabalhadores da Ciência em Defesa da Pesquisa Pública, 2023."
    },
    prompt: "O gênero manifesto caracteriza-se por uma situação comunicativa coletiva e engajada. No trecho acima, a força retórica e o objetivo sociopolítico do gênero são evidenciados pela:",
    options: [
      {
        id: "a",
        text: "enunciação em primeira pessoa do plural, unificando os emissores em um sujeito coletivo que reivindica publicamente direitos e conclama a sociedade e as autoridades à ação.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "b",
        text: "adoção de um tom submisso e pacificador que aceita integralmente as medidas financeiras tomadas pelas autoridades.",
        isCorrect: false,
        distractorRationale: "O manifesto expressa veemente descontentamento e confronto político ('tornamos pública nossa indignação', 'Não aceitaremos')."
      },
      {
        id: "c",
        text: "ocultação da identidade dos signatários para impedir qualquer identificação profissional dos envolvidos.",
        isCorrect: false,
        distractorRationale: "O manifesto se inicia justamente pela identificação explícita do coletivo ('Nós, professores, pesquisadores...')."
      },
      {
        id: "d",
        text: "exclusão de termos valorativos para garantir um tom rigorosamente burocrático de requerimento individual.",
        isCorrect: false,
        distractorRationale: "O manifesto é carregado de termos axiológicos e enfáticos ('indignação', 'asfixiam', 'condena seu povo')."
      },
      {
        id: "e",
        text: "narrativa cronológica e ficcional das peripécias de um cientista solitário no século XIX.",
        isCorrect: false,
        distractorRationale: "Trata-se de um documento político cívico contemporâneo, não de um conto ficcional de época."
      }
    ],
    detailedExplanation: {
      summary: "O manifesto é um gênero discursivo de protesto e conclamação pública, geralmente assinado por um coletivo ou organização que expõe suas reivindicações de forma enfática perante a opinião pública e o poder constituído.",
      stepByStep: [
        "Uso da 1ª pessoa do plural ('Nós... tornamos pública', 'Não aceitaremos', 'Exigimos').",
        "Enunciação coletiva: confere representatividade e peso institucional ao protesto.",
        "Finalidade sociopolítica: denunciar uma crise e exigir ações concretas dos governantes ('recomposição orçamentária imediata')."
      ],
      coreConcept: "Gênero Manifesto: Sujeito Coletivo, Reivindicação Pública e Ação Política",
      trapWarning: "No ENEM, o manifesto difere de cartas privadas porque seu destinatário final é o conjunto dos cidadãos e a esfera pública política."
    },
    commonTraps: [
      "Confundir manifesto público com abaixo-assinado estritamente cartorial",
      "Não perceber que o uso do 'nós' constitui uma identidade discursiva coletiva estratégica"
    ],
    tags: ["manifesto", "discurso-coletivo", "cidadania", "argumentacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-009",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Resenha Crítica",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No romance 'Torto Arado', Itamar Vieira Junior constrói um painel vigoroso das entranhas do sertão baiano, acompanhando as irmãs Bibiana e Belonísia após um acidente trágico na infância. Todavia, reduzir a narrativa a uma saga familiar dramática seria ignorar sua virtude maior: o livro é uma contundente denúncia das permanências do trabalho análogo à escravidão e da violência agrária secular que ainda assola o campo brasileiro. Com uma prosa telúrica e de cadência hipnótica, o autor entrelaça o misticismo do Jarê com a luta concreta pela posse da terra, entregando uma das mais necessárias obras literárias brasileiras deste século.",
      source: "Caderno Ilustrada, Folha de S.Paulo, 2021 (adaptado)."
    },
    prompt: "O texto lido é um exemplo de resenha crítica. A característica essencial que estrutura esse gênero e o distingue de um simples resumo informativo é:",
    options: [
      {
        id: "a",
        text: "a reprodução integral de todos os capítulos do romance resenhado em suas páginas.",
        isCorrect: false,
        distractorRationale: "A resenha sintetiza a obra; não a transcreve integralmente."
      },
      {
        id: "b",
        text: "a articulação harmoniosa entre a síntese informativa do conteúdo da obra e a emissão de um juízo de valor crítico fundamentado pelo resenhista.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "c",
        text: "a ausência de qualquer menção aos temas sociais abordados no enredo original.",
        isCorrect: false,
        distractorRationale: "O texto ressalta expressamente os temas da escravidão contemporânea e da luta pela terra."
      },
      {
        id: "d",
        text: "o foco exclusivo em dados biográficos do autor, omitindo qualquer análise sobre o livro em si.",
        isCorrect: false,
        distractorRationale: "A obra em si é o objeto central de escrutínio e análise crítica do resenhista."
      },
      {
        id: "e",
        text: "o caráter injuntivo de proibição judicial contra a circulação e venda do livro nas livrarias.",
        isCorrect: false,
        distractorRationale: "A resenha recomenda calorosamente a leitura ('uma das mais necessárias obras'), sem qualquer teor censório ou proibitivo."
      }
    ],
    detailedExplanation: {
      summary: "A resenha crítica é um gênero que combina descrição analítica (resumo dos elementos essenciais da obra) com avaliação crítica qualitativa (juízo fundamentado de valor sobre o mérito estético ou conceitual).",
      stepByStep: [
        "Parte descritiva/resumo: apresenta os personagens (Bibiana e Belonísia), o cenário (sertão baiano) e a premissa.",
        "Parte analítica/interpretativa: conecta a trama aos conflitos agrários e ao misticismo do Jarê.",
        "Parte avaliativa/juízo crítico: elogia a 'prosa telúrica e de cadência hipnótica' e qualifica a obra como 'uma das mais necessárias obras literárias deste século'."
      ],
      coreConcept: "Resenha Crítica: Descrição Analítica Conjugada à Avaliação Crítica",
      trapWarning: "No ENEM, lembre-se: resumo apenas sintetiza; resenha sintetiza E avalia com juízo de valor crítico."
    },
    commonTraps: [
      "Confundir resumo (descritivo) com resenha (descritivo + avaliativo)",
      "Achar que resenha deve apenas contar o final da história ('dar spoiler')"
    ],
    tags: ["resenha-critica", "literatura", "juizo-de-valor", "generos-textuais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-010",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Charge e Linguagem Mista",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Descrição de imagem da charge: Em primeiro plano, uma família humilde aguarda na fila de atendimento com pratos vazios nas mãos. Ao lado, uma grande placa luminosa de publicidade digital exibe o anúncio: 'BAIXE JÁ O NOVO APLICATIVO E AUMENTE SUA EFICIÊNCIA PRODUTIVA EM 500%!'. O pai olha para o celular descarregado que não tem crédito e comenta com a filha: 'Pena que a tecnologia ainda não aprendeu a fazer upload de feijão com arroz'.",
      source: "Charge de crítica social contemporânea, 2023."
    },
    prompt: "A charge explora a linguagem mista (verbal e não-verbal) como recurso discursivo de crítica social. O efeito de humor e a denúncia sociopolítica presentes na charge resultam principalmente da:",
    options: [
      {
        id: "a",
        text: "quebra de expectativa provocada pela ironia que contrasta o discurso futurista de abundância tecnológica com a realidade crua da insegurança alimentar básica.",
        isCorrect: true,
        distractorRationale: null
      },
      {
        id: "b",
        text: "comprovação matemática de que aplicativos digitais solucionam a escassez de alimentos em países periféricos.",
        isCorrect: false,
        distractorRationale: "O texto mostra o oposto: a tecnologia não alimenta quem passa fome ('não aprendeu a fazer upload de feijão')."
      },
      {
        id: "c",
        text: "apologia entusiasmada aos avanços da inteligência artificial sem nenhuma preocupação com questões de renda.",
        isCorrect: false,
        distractorRationale: "A charge faz uma severa crítica à desumanização e à indiferença da corrida tecnológica diante da miséria."
      },
      {
        id: "d",
        text: "tentativa de convencer o leitor a comprar um smartphone de última geração em lojas de varejo.",
        isCorrect: false,
        distractorRationale: "Não é publicidade de celular; é uma charge de humor crítico e conscientização social."
      },
      {
        id: "e",
        text: "descrição burocrática de normas de trânsito em vias públicas de cidades cosmopolitas.",
        isCorrect: false,
        distractorRationale: "O tema não guarda relação com normas de trânsito."
      }
    ],
    detailedExplanation: {
      summary: "A charge utiliza a linguagem mista (confronto entre texto verbal e elementos visuais) e a ironia para provocar reflexão crítica instantânea sobre contradições sociais gritantes do mundo contemporâneo.",
      stepByStep: [
        "Elemento visual: família faminta em fila com pratos vazios defronte a um anúncio hipertecnológico brilhante.",
        "Elemento verbal: fala irônica do pai ('upload de feijão com arroz').",
        "Efeito de sentido: o choque entre a promessa de hiperprodutividade digital e a permanência da fome elementar desnuda a desigualdade estrutural da modernidade capitalista."
      ],
      coreConcept: "Gênero Charge: Linguagem Mista, Ironia e Quebra de Expectativa",
      trapWarning: "No ENEM, na interpretação de charges, tirinhas e memes, a chave da resposta quase sempre está na quebra de expectativa ou na ironia que desnaturaliza uma contradição social."
    },
    commonTraps: [
      "Interpretar a charge de forma puramente literal, sem captar a ironia",
      "Analisar apenas o texto verbal ignorando a contradição visual posta em cena"
    ],
    tags: ["charge", "linguagem-mista", "ironia", "critica-social"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-011",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Bula de Medicamento e Texto Prescritivo",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "POSOLOGIA E MODO DE USAR: Administrar 1 comprimido revestido de 500 mg por via oral a cada 8 horas, acompanhado de um copo de água, preferencialmente após as refeições. Não partir, mastigar ou triturar o comprimido. Caso ocorra esquecimento de uma dose, tome-a assim que se lembrar; todavia, se estiver próximo do horário da próxima tomada, desconsidere a dose esquecida e retome o esquema posológico regular. NUNCA tome duas doses simultâneas para compensar a dose esquecida. CONTRAINDICAÇÕES: Hipersensibilidade aos componentes da fórmula e histórico de úlcera péptica ativa.",
      source: "Fragmento adaptado de bula padronizada de medicamento antimicrobiano (ANVISA)."
    },
    prompt: "A bula de medicamento é um exemplar clássico de gênero textual regulatório. A sua funcionalidade sociocomunicativa essencial ancora-se na tipologia injuntiva/prescritiva, caracterizada predominantemente por:",
    options: [
      { id: "a", text: "orientar e disciplinar de maneira inequívoca as condutas práticas do paciente, empregando verbos no modo imperativo e formulações normativas isentas de ambiguidades.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "sensibilizar o leitor por meio de recursos poéticos e relatos subjetivos sobre a fragilidade da saúde humana.", isCorrect: false, distractorRationale: "A linguagem da bula é estritamente técnica, objetiva e denotativa, desprovida de apelos poéticos subjetivos." },
      { id: "c", text: "fomentar o debate sociológico sobre o monopólio da indústria farmacêutica transnacional.", isCorrect: false, distractorRationale: "O objetivo é exclusivamente a orientação terapêutica segura do usuário, não a reflexão sociopolítica." },
      { id: "d", text: "seduzir o consumidor com estratégias publicitárias de incentivo à automedicação preventiva diária.", isCorrect: false, distractorRationale: "A bula visa à segurança do paciente e segue normas sanitárias estritas, combatendo a automedicação." },
      { id: "e", text: "narrar em ordem cronológica os experimentos biográficos da equipe de cientistas que isolou a molécula.", isCorrect: false, distractorRationale: "Isso caracterizaria um relato biográfico ou artigo historiográfico, e não uma bula terapêutica." }
    ],
    detailedExplanation: {
      summary: "Textos prescritivos e injuntivos (bulas, leis, manuais, editais) visam orientar a ação do interlocutor com linguagem unívoca, imperativa e técnica.",
      stepByStep: [
        "A tipologia injuntiva/prescritiva tem como objetivo central direcionar o comportamento do leitor ('como fazer, o que fazer e o que não fazer').",
        "Presença marcante de verbos no imperativo ou infinitivo com valor deontológico ('administrar', 'não partir', 'tome-a', 'nunca tome').",
        "A precisão terminológica e a ausência de duplo sentido são indispensáveis para resguardar a vida do paciente e prevenir intoxicações ou erros de dosagem."
      ],
      coreConcept: "Tipologia Injuntiva/Prescritiva e Gênero Bula de Remédio",
      trapWarning: "Cuidado: enquanto a receita médica é individualizada para um paciente, a bula é um documento técnico normativo padronizado voltado a todos os usuários do fármaco."
    },
    commonTraps: ["confundir bula com anuncio publicitario de farmaco", "achar que textos prescritivos admitem interpretacao subjetiva livre"],
    tags: ["bula", "injuncao", "prescricao", "modo imperativo", "generos tecnicos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-012",
    area: "linguagens",
    competence: 5,
    skill: 17,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Infográfico e Multimodalidade Estatística",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Descrição de infográfico institucional de saúde pública: Um mapa cartográfico do Brasil utiliza cores contrastantes em escala térmica (de verde a vermelho escuro) para indicar a cobertura vacinal contra poliomielite por estado da federação. Ao lado do mapa, pictogramas em formato de seringas graduadas expressam a meta de 95% preconizada pela OMS em contraste com a média nacional alcançada de 78%. Abaixo, pequenos quadros com porcentagens e ícones de alerta destacam as capitais com índices críticos de abandono vacinal.",
      source: "Painel Epidemiológico Multimodal do Ministério da Saúde / Fiocruz, 2024."
    },
    prompt: "No gênero infográfico, a articulação sinérgica entre a linguagem verbal (palavras e porcentagens) e a linguagem visual (mapas, cores e pictogramas) atua no sentido de:",
    options: [
      { id: "a", text: "sintetizar grandes volumes de dados epidemiológicos complexos, permitindo ao leitor apreender visualmente correlações territoriais e comparativas de forma ágil e intuitiva.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "substituir integralmente a precisão das informações numéricas por ilustrações meramente decorativas desprovidas de rigor factual.", isCorrect: false, distractorRationale: "O infográfico integra dados rigorosos à imagem; os gráficos e pictogramas são ferramentas de precisão quantitativa." },
      { id: "c", text: "ocultar deliberadamente as deficiências das políticas públicas sob um arranjo artístico rebuscado.", isCorrect: false, distractorRationale: "A visualização rápida de cores contrastantes (alerta vermelho) serve justamente para evidenciar as disparidades e metas não cumpridas." },
      { id: "d", text: "limitar o acesso das informações a especialistas que dominem softwares avançados de design gráfico.", isCorrect: false, distractorRationale: "O objetivo primordial do infográfico é democratizar e tornar acessível a informação estatística para o grande público." },
      { id: "e", text: "transformar a comunicação em uma peça humorística fictícia de entretenimento infanto-juvenil.", isCorrect: false, distractorRationale: "Trata-se de gênero de divulgação técnica e conscientização cidadã de alta relevância social." }
    ],
    detailedExplanation: {
      summary: "O infográfico combina elementos visuais (gráficos, cores, mapas) e textos verbais concisos para facilitar a compreensão imediata de dados complexos.",
      stepByStep: [
        "A multimodalidade é o traço distintivo do infográfico: o texto verbal e a imagem dependem mutuamente um do outro para a construção integral do sentido.",
        "A hierarquização visual de dados (cores quentes para alerta, ícones para fixação de conceitos) auxilia na leitura não linear e na retenção rápida de informações.",
        "No contexto do ENEM, o infográfico é amplamente cobrado para testar a competência leitora de gráficos, tabelas e mapas articulados à análise crítica da realidade."
      ],
      coreConcept: "Infográfico, Multimodalidade e Letramento Visual em Linguagens",
      trapWarning: "Lembre-se: em infográficos, a imagem não é mero enfeite; ela contém dados fundamentais que complementam ou explicam o texto escrito!"
    },
    commonTraps: ["desprezar as imagens ao ler o infografico", "achar que o infografico e menos rigoroso que um texto corrido tradicional"],
    tags: ["infografico", "multimodalidade", "letramento visual", "saude publica", "dados estatisticos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-013",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Carta de Reclamação e Cidadania Institucional",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ilmo. Sr. Secretário de Saneamento e Infraestrutura Urbana do Município de Bela Vista.\nAssunto: Solicitação urgente de reparo na rede coletora de esgoto do Bairro Esperança.\nA Associação de Moradores do Bairro Esperança vem, por meio desta, expor e reivindicar a urgente resolução do transbordamento contínuo de efluentes sanitários na Rua das Acácias, ocorrido há mais de 25 dias consecutivos. A omissão na contenção do vazamento tem gerado odor insuportável e exposto dezenas de crianças a riscos graves de contaminação por agentes de veiculação hídrica, em frontal desrespeito ao direito à saúde preconizado pelo Art. 196 da Constituição Federal. Solicitamos o envio imediato de equipe técnica para desobstrução e saneamento da via no prazo improrrogável de 72 horas, sob pena de acionamento do Ministério Público Estadual.\nAtenciosamente, Coordenação Geral da Associação.",
      source: "Documento oficial adaptado de correspondência comunitária reivindicatória."
    },
    prompt: "O gênero textual 'carta de reclamação' estrutura-se na esfera pública da cidadania. A característica pragmática e estilística que o legitima perante a administração pública e o diferencia de um desabafo pessoal reside no fato de:",
    options: [
      { id: "a", text: "empregar a norma-padrão culta, fundamentar as queixas em fatos objetivos e argumentos legais e demandar providências institucionais formais com prazo determinado.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "utilizar ataques difamatórios subjetivos e ameaças anônimas para intimidar a autoridade pública destinatária.", isCorrect: false, distractorRationale: "A carta formal é assinada pela entidade e respalda-se no direito constitucional, sem ameaças ilegais ou ofensas gratuitas." },
      { id: "c", text: "adotar registro coloquial com gírias juvenis para demonstrar espontaneidade e aproximação afetiva com o secretário.", isCorrect: false, distractorRationale: "A interação oficial com autoridades públicas exige rigorosamente o registro formal e respeitoso de tratamento." },
      { id: "d", text: "estruturar o texto sob a forma de versos rimados líricos para sensibilizar a alma dos funcionários públicos.", isCorrect: false, distractorRationale: "Trata-se de correspondência em prosa técnico-argumentativa, e não de poesia." },
      { id: "e", text: "abster-se de indicar os problemas reais da localidade a fim de evitar mal-estar nas relações com a prefeitura.", isCorrect: false, distractorRationale: "A explicitação detalhada do dano e da localização é a própria essência do gênero reivindicatório." }
    ],
    detailedExplanation: {
      summary: "A carta de reclamação é um gênero dissertativo-argumentativo da esfera pública que formaliza uma demanda cívica com registro padrão, dados concretos e solicitação de providências.",
      stepByStep: [
        "Estrutura padrão do gênero epistolar: cabeçalho com vocativo formal de autoridade, identificação precisa do remetente e do objeto da queixa.",
        "Corpo do texto argumentativo: narrativa fática objetiva (vazamento há 25 dias) amparada em embasamento jurídico-constitucional (Art. 196 da CF/88).",
        "Conclusão e fecho: pedido formal com prazo estipulado para resposta e advertência de judicialização caso persista a inércia administrativa."
      ],
      coreConcept: "Carta de Reclamação: Argumentação Cívica, Formalidade e Exercício de Cidadania",
      trapWarning: "Atenção: a carta de reclamação não é um mero desabafo; é um instrumento jurídico-administrativo dotado de intencionalidade propositiva clara!"
    },
    commonTraps: ["confundir carta de reclamacao com desabafo informal em rede social", "achar que linguagem formal enfraquece a contundencia da reivindicacao"],
    tags: ["carta de reclamacao", "esfera publica", "cidadania", "argumentacao formal", "generos epistolares"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-014",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Ensaio Literário-Filosófico e Crítica Cultural",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Chamarei de literatura, da maneira mais ampla possível, todas as criações de toque poético, ficcional ou dramático em todos os níveis de uma sociedade, em todos os tipos de cultura [...]. Ora, se ninguém pode passar vinte e quatro horas sem mergulhar no universo do sonho e da fantasia, a literatura é tão indispensável para o equilíbrio do espírito humano quanto a alimentação e a moradia o são para o equilíbrio do corpo. Negar a fruição da literatura a uma parcela da população significa mutilar sua condição humana e perpetuar uma espoliação perversa que vai muito além da privação material.",
      source: "Antonio Candido, O Direito à Literatura (ensaio publicado em Vários Escritos, adaptado)."
    },
    prompt: "O texto de Antonio Candido exemplifica o gênero ensaio literário-filosófico. Esse gênero discursivo singulariza-se predominantemente pela:",
    options: [
      { id: "a", text: "reflexão livre, aprofundada e autoral sobre um tema humanístico, articulando erudição teórica, sensibilidade estilística e defesa de uma tese ética sobre a dignidade humana.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "subordinação irrestrita a tabelas quantitativas e fórmulas químicas que visam comprovar a eficácia farmacológica de livros.", isCorrect: false, distractorRationale: "O ensaio humanístico não opera com protocolos experimentais laboratoriais quantitativos." },
      { id: "c", text: "construção de diálogos cômicos entre personagens caricatos com vistas a entreter o público leitor descompromissado.", isCorrect: false, distractorRationale: "O texto aborda a questão com extrema gravidade ética e rigor conceitual crítico." },
      { id: "d", text: "elaboração de um manual técnico que ensina passo a passo como diagramar páginas de romances comerciais.", isCorrect: false, distractorRationale: "Isso seria uma apostila técnica instrucional de editoração gráfica." },
      { id: "e", text: "ausência intencional de qualquer ponto de vista autoral, limitando-se a registrar citações de outros pensadores.", isCorrect: false, distractorRationale: "O ensaio é marcado pela voz original, potente e posicionada do autor que propõe uma tese inovadora." }
    ],
    detailedExplanation: {
      summary: "O ensaio é um gênero discursivo reflexivo em que o autor investiga livremente um tema cultural ou filosófico sem a rigidez burocrática dos tratados acadêmicos.",
      stepByStep: [
        "Origem: criado por Michel de Montaigne no século XVI, o ensaio combina liberdade de pensamento, estilo pessoal refinado e debate ético de grande alcance.",
        "Tese de Antonio Candido: a literatura não é mero luxo supérfluo para as elites, mas um 'bem incompressível' indispensável para a humanização de todo cidadão.",
        "Estilo ensaístico: clareza argumentativa, analogias elucidativas (literatura como alimento para o espírito) e compromisso explícito com a justiça social."
      ],
      coreConcept: "Gênero Ensaio: Subjetividade Reflexiva, Erudição e Crítica Cultural",
      trapWarning: "O ensaio não é uma dissertação escolar padrão nem um artigo científico fechado; ele goza de flexibilidade de forma aliada à profundidade de conteúdo."
    },
    commonTraps: ["confundir ensaio com artigo de opiniao jornalistico curto", "achar que ensaio nao defende uma tese argumentativa solida"],
    tags: ["ensaio", "antonio candido", "direito a literatura", "critica cultural", "humanizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-015",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Abaixo-Assinado e Textos Reivindicatórios Coletivos",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nós, abaixo-assinados, estudantes, docentes, pesquisadores e servidores técnico-administrativos da Universidade Federal, dirigimo-nos à Magnífica Reitoria para manifestar veemente apoio à criação de uma creche universitária no campus sede e à instituição de auxílio-permanência integral para mães em vulnerabilidade socioeconômica. A evasão forçada de dezenas de alunas-mães por ausência de infraestrutura básica compromete o princípio republicano da igualdade de acesso ao ensino superior. Conclamamos a administração central a pautar em caráter de urgência a destinação orçamentária para a implementação das creches no próximo Conselho Universitário.",
      source: "Fragmento de petição pública universitária (abaixo-assinado), 2023."
    },
    prompt: "No gênero abaixo-assinado, a força argumentativa e a eficácia persuasiva do ato de linguagem apoiam-se primordialmente na:",
    options: [
      { id: "a", text: "legitimação democrática demonstrada pela adesão coletiva de múltiplos signatários que respaldam conjuntamente uma causa de interesse público comum.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ameaça direta de depredação das instalações patrimoniais caso as reivindicações não sejam atendidas em 24 horas.", isCorrect: false, distractorRationale: "O abaixo-assinado opera pelas vias da legalidade institucional e do debate de direitos, rejeitando atos de violência." },
      { id: "c", text: "imposição autoritária de multas pecuniárias aos gestores universitários que lerem o cabeçalho.", isCorrect: false, distractorRationale: "Estudantes e servidores não detêm poder judicial de impor multas; exercem o direito de petição." },
      { id: "d", text: "descrição lírica intimista de sentimentos de culpa familiar expressos em primeira pessoa do singular.", isCorrect: false, distractorRationale: "A voz enunciativa é eminentemente coletiva ('Nós, abaixo-assinados'), centrada no interesse comunitário." },
      { id: "e", text: "cobrança de ingressos pagos para os membros que quiserem assinar a manifestação.", isCorrect: false, distractorRationale: "A petição cívica é gratuita e aberta aos membros da comunidade universitária." }
    ],
    detailedExplanation: {
      summary: "O abaixo-assinado é um gênero de apelo e reivindicação coletiva cuja força política advém do número e da representatividade dos signatários reunidos.",
      stepByStep: [
        "Voz enunciativa plurivocal: o pronome 'Nós' e a lista nominativa de assinaturas conferem peso social e representatividade democrática ao pleito.",
        "Estrutura retórica: apresentação da demanda legítima, fundamentação ética/legal e interpelação formal da autoridade competente.",
        "Diferencial com outros gêneros epistolares: enquanto uma carta individual representa uma única vontade, o abaixo-assinado mobiliza a força quantitativa e qualitativa da sociedade civil organizada."
      ],
      coreConcept: "Abaixo-Assinado, Direito de Petição e Participação Coletiva",
      trapWarning: "Lembre-se: no abaixo-assinado, a quantidade e a idoneidade das assinaturas são parte indissociável da estratégia de convencimento!"
    },
    commonTraps: ["confundir abaixo-assinado com carta aberta ou manifesto", "achar que o abaixo-assinado tem poder de lei impositiva imediata"],
    tags: ["abaixo-assinado", "reivindicacao coletiva", "direito de peticao", "participacao democratica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-016",
    area: "linguagens",
    competence: 5,
    skill: 17,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Podcast e Oralidade Mediada pela Tecnologia",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "APRESENTADOR: E aí, pessoal do 'Ciência Sem Rodeios', bem-vindos a mais um episódio! Hoje estamos com a Dra. Mariana, que é ecóloga e pesquisadora de biomas brasileiros. Mariana, o pessoal no Twitter vive perguntando: afinal, o que explica essas ondas de calor insanas nas periferias?\nDRA. MARIANA: Pois é, Lucas... Veja bem, tem um conceito fundamental aqui que são as ilhas de calor urbanas. Mas o ponto-chave — e isso precisa ficar muito claro — é a justiça climática. Porque onde tem árvore e praça com sombra? Nos bairros nobres. Onde você tem asfalto pelando e telha de amianto sem saneamento? Na quebrada. Então, a crise do clima não afeta todo mundo igual. Tem corte de classe e tem corte de raça escancarado aí.",
      source: "Transcrição adaptada de episódio de podcast de divulgação científica, 2023."
    },
    prompt: "O fragmento transcrito pertence a um podcast de divulgação científica. As marcas linguísticas e discursivas presentes revelam a dinâmica desse gênero contemporâneo pelo equilíbrio entre:",
    options: [
      { id: "a", text: "o rigor conceitual do conhecimento científico e a coloquialidade dialógica espontânea característica da oralidade mediada pelas mídias digitais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o uso exclusivo de termos herméticos em latim e a total ausência de preocupação com a compreensão dos ouvintes.", isCorrect: false, distractorRationale: "O texto busca exatamente a clareza e o diálogo com o público por meio de analogias simples e linguagem acessível." },
      { id: "c", text: "a leitura mecânica e monótona de relatórios governamentais sem nenhuma interação afetiva entre os interlocutores.", isCorrect: false, distractorRationale: "Há marcadores conversacionais expressivos ('E aí, pessoal', 'Pois é', 'Veja bem') que denotam interação viva e calorosa." },
      { id: "d", text: "a adesão cega aos preceitos poéticos do Arcadismo bucólico do século XVIII.", isCorrect: false, distractorRationale: "O gênero é contemporâneo digital e trata de questões ecológicas e sociais urbanas do século XXI." },
      { id: "e", text: "o sigilo absoluto das fontes para manter o anonimato dos pesquisadores participantes.", isCorrect: false, distractorRationale: "Os participantes são nominalmente apresentados com suas credenciais científicas." }
    ],
    detailedExplanation: {
      summary: "O podcast combina a credibilidade temática da ciência com os recursos expressivos da oralidade informal para democratizar o saber especializado.",
      stepByStep: [
        "Marcas de oralidade e proximidade: gírias leves ('ondas de calor insanas', 'quebrada'), saudações informais ('E aí, pessoal') e marcadores discursivos de turno ('Veja bem', 'Pois é').",
        "Conteúdo acadêmico crítico: introdução de conceitos científicos sólidos ('ilhas de calor urbanas', 'justiça climática') articulados à crítica social da desigualdade.",
        "A tecnologia do podcast cria uma atmosfera de conversa íntima e acessível, quebrando as barreiras formais tradicionais da academia."
      ],
      coreConcept: "Podcast, Gêneros Orais Emergentes e Letramento Digital",
      trapWarning: "No ENEM, as questões sobre podcasts e gêneros digitais focam em como a linguagem se adapta à mídia e ao público-alvo sem perder o propósito comunicativo."
    },
    commonTraps: ["achar que coloquialismo desqualifica o rigor do conteudo cientifico", "ignorar as marcas tipicas da linguagem falada"],
    tags: ["podcast", "oralidade mediada", "divulgacao cientifica", "justica climatica", "generos digitais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-017",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Notícia Jornalística e a Técnica da Pirâmide Invertida",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Instituto Nacional de Pesquisas Espaciais (INPE) colocou em órbita com sucesso, na madrugada desta terça-feira (14), a partir da base espacial de Alcântara (MA), o satélite de monitoramento ambiental Amazônia-2B. Desenvolvido inteiramente por engenheiros brasileiros em parceria com universidades públicas, o equipamento possui sensores multiespectrais capazes de detectar focos de desmatamento em tempo real mesmo sob densa cobertura de nuvens, permitindo alertas automáticos para as brigadas de fiscalização ambiental do Ibama.",
      source: "Agência Brasil / Noticiário Científico, 2024 (adaptado)."
    },
    prompt: "O parágrafo de abertura da notícia jornalística (denominado lide) adota o modelo composicional da 'pirâmide invertida'. Esse recurso estrutural atende ao objetivo comunicativo de:",
    options: [
      { id: "a", text: "concentrar de imediato as respostas às indagações essenciais do leitor (quem, o quê, quando, onde, como e por quê), assegurando apreensão rápida do fato principal.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "reter a informação mais importante até o final do texto para gerar suspense no leitor.", isCorrect: false, distractorRationale: "O suspense é recurso típico de narrativas literárias ficcionais ou policiais, e não do lide jornalístico factual." },
      { id: "c", text: "emitir a opinião pessoal subjetiva do repórter sobre a política aeroespacial brasileira.", isCorrect: false, distractorRationale: "A notícia preza pela impessoalidade e objetividade do relato de fatos, sem primeira pessoa opinativa." },
      { id: "d", text: "inserir enigmas gramaticais e termos cifrados para restringir a informação a assinantes pagos.", isCorrect: false, distractorRationale: "O jornalismo visa à clareza máxima e à comunicabilidade transparente com toda a sociedade." },
      { id: "e", text: "prescrever ordens governamentais compulsórias que os cidadãos devem executar obrigatoriamente.", isCorrect: false, distractorRationale: "Notícias são textos informativos, não injunções legais prescritivas." }
    ],
    detailedExplanation: {
      summary: "A pirâmide invertida posiciona as informações cruciais no topo (o lide) e detalhamentos secundários nos parágrafos posteriores em ordem decrescente de relevância.",
      stepByStep: [
        "No lide clássico, respondem-se às 6 perguntas fundamentais do jornalismo anglo-saxão: Quem? (INPE e universidades); O quê? (lançamento do satélite Amazônia-2B); Quando? (madrugada de terça-feira); Onde? (Alcântara-MA); Como? (com sensores multiespectrais); Por quê? (para combater o desmatamento).",
        "Essa técnica surgiu no telégrafo para garantir que, se a transmissão caísse ou o jornal precisasse ser cortado de baixo para cima na impressão, a essência do fato estaria preservada.",
        "Para o leitor moderno, permite leitura dinâmica e informação instantânea sem necessidade de ler todo o corpo secundário do texto."
      ],
      coreConcept: "Gênero Notícia: O Lide e a Técnica da Pirâmide Invertida",
      trapWarning: "Diferencie NOTÍCIA (relato objetivo e conciso de fato recente no lide) de REPORTAGEM (investigação aprofundada, com múltiplas fontes e interpretação contextual)."
    },
    commonTraps: ["confundir noticia com editorial opinativo", "achar que o lide deixa a conclusao para o final"],
    tags: ["noticia", "lide", "piramide invertida", "jornalismo", "informacao factual"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-018",
    area: "linguagens",
    competence: 5,
    skill: 17,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Gêneros Digitais: Threads e Hipertextualidade",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Post 1/4: Você sabia que o cérebro humano consome cerca de 20% de toda a energia do corpo em repouso, mesmo pesando só 2% da nossa massa corporal? 🧵 Segue o fio para entender por que pensar cansa tanto! #CiênciaParaTodos #Neurociência\nPost 2/4: O 'combustível' quase exclusivo dos seus neurônios é a glicose. Quando você estuda focado para o ENEM, a taxa de disparo elétrico das sinapses dispara o consumo metabólico de ATP nas áreas pré-frontais.\nPost 3/4: É por isso que depois de um simulado de 5 horas bate aquela 'fome de carboidrato' e cansaço físico real. Não é preguiça, é bioquímica celular em ação! [link para artigo completo da USP na íntegra]\nPost 4/4: Dica de ouro: durma bem para consolidar a memória e tome água. Gostou? Dá um RT e salva nos favoritos para revisar depois! ✨🧠",
      source: "Exemplo de thread (fio explicativo) em microblogging digital de divulgação acadêmica, 2024."
    },
    prompt: "O fragmento explora as potencialidades do gênero digital conhecido como thread (fio em redes sociais). A especificidade da linguagem e da arquitetura composicional desse gênero caracteriza-se por:",
    options: [
      { id: "a", text: "fragmentar conteúdos temáticos densos em microblocos encadeados, incorporando recursos de hipertextualidade, emojis e chamadas explícitas de interação com a comunidade de leitores.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "exigir a redação em manuscrito caligráfico sem possibilidade de conexão hipertextual ou réplica pública.", isCorrect: false, distractorRationale: "O gênero é estritamente digital, hiperconectado e aberto a comentários instantâneos dos seguidores." },
      { id: "c", text: "empregar vocabulário arcaico do século XVI para criar distanciamento intelectual deliberado em relação aos jovens.", isCorrect: false, distractorRationale: "A linguagem das redes sociais aposta na jovialidade, clareza e termos comunicativos contemporâneos ('dá um RT', 'salva nos favoritos')." },
      { id: "d", text: "proibir qualquer menção a descobertas científicas ou referências a artigos acadêmicos sérios.", isCorrect: false, distractorRationale: "O texto inclui explicitamente link de acesso a artigo de pesquisa da USP." },
      { id: "e", text: "limitar o tamanho do texto a um único caractere por publicação diária.", isCorrect: false, distractorRationale: "O fio é uma sequência articulada de postagens complementares para aprofundar um tema." }
    ],
    detailedExplanation: {
      summary: "Threads e postagens em redes sociais criam novas modalidades de letramento digital: textos fragmentados, hipertextuais, multimodais e altamente interativos.",
      stepByStep: [
        "A restrição de caracteres das plataformas digitais gerou o recurso do 'fio' (thread): dividir um assunto complexo em partes numeradas para leitura fluida em telas móveis.",
        "Uso de marcadores de engajamento (#hashtags) e chamadas para ação (CTA: 'dá um RT', 'salva nos favoritos').",
        "Hipertextualidade: inserção de links externos que conectam o texto breve às fontes primárias aprofundadas da pesquisa científica."
      ],
      coreConcept: "Gêneros Digitais, Hipertextualidade e Novos Letramentos",
      trapWarning: "No ENEM, reconheça que os gêneros digitais não 'destroem a língua', mas inovam e ampliam as formas de comunicação social de acordo com as novas mídias."
    },
    commonTraps: ["considerar a linguagem da internet como 'erro' ou 'degeneracao' da lingua", "ignorar a funcao integradora dos links e hashtags"],
    tags: ["generos digitais", "threads", "hipertexto", "redes sociais", "letramento digital"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-019",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Entrevista Jornalística (Formato Perguntas e Respostas)",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "REPÓRTER: Dra. Helena, nas últimas décadas o Brasil avançou expressivamente no controle de doenças imunopreveníveis, mas recentemente tem enfrentado recrudescimento de surtos de sarampo e febre amarela. Qual é a raiz principal dessa regressão sanitária?\nDRA. HELENA: O problema é multifatorial, mas o epicentro reside na disseminação sistemática de desinformação científica em grupos digitais e no falso sentimento de segurança gerado exatamente pelas gerações anteriores que não viram essas doenças mutilarem crianças. Quando a sociedade esquece o terror da pólio, o medo da agulha supera o medo do vírus. Essa amnésia coletiva é o combustível mais perigoso das epidemias contemporâneas.",
      source: "Trecho adaptado de entrevista temática para caderno especial de saúde pública, 2024."
    },
    prompt: "No gênero entrevista no formato pingue-pongue (perguntas e respostas), as intervenções do repórter operam como instrumento estratégico discursivo para:",
    options: [
      { id: "a", text: "balizar e delimitar o foco do debate, provocando o especialista convidado a elucidar contradições e aspectos cruciais de um tema de interesse público.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "impor dogmaticamente suas próprias respostas ideológicas e calar as considerações da entrevistada.", isCorrect: false, distractorRationale: "O repórter faz perguntas instigantes para dar voz à especialista, sem monopolizar o discurso." },
      { id: "c", text: "impedir que o leitor compreenda os dados técnicos sobre a história das campanhas de vacinação.", isCorrect: false, distractorRationale: "A meta primordial da entrevista jornalística é justamente tornar os dados acessíveis e compreensíveis ao cidadão comum." },
      { id: "d", text: "transformar o texto em um monólogo poético sem nenhuma réplica ou alternância de interlocutores.", isCorrect: false, distractorRationale: "A entrevista assenta-se na polifonia e na alternância conversacional entre dois interlocutores definidos." },
      { id: "e", text: "reproduzir sem autorização gravações judiciais sob sigilo de Estado.", isCorrect: false, distractorRationale: "Trata-se de uma entrevista pública consentida entre jornalista profissional e médica sanitarista." }
    ],
    detailedExplanation: {
      summary: "A entrevista jornalística é um gênero dialógico orientado em que as perguntas do jornalista funcionam como condutoras que extraem a reflexão qualificada da fonte entrevistada.",
      stepByStep: [
        "A pergunta jornalística não é neutra ou ingênua: ela contextualiza o tema ('o Brasil avançou expressivamente... mas recentemente enfrenta recrudescimento') e aponta a pergunta nuclear ('Qual é a raiz principal?').",
        "A entrevistada responde desenvolvendo um raciocínio sofisticado com metáforas conceituais contundentes ('amnésia coletiva', 'quando a sociedade esquece o terror da pólio, o medo da agulha supera o medo do vírus').",
        "Esse gênero possibilita o confronto produtivo de ideias e a difusão democrática de conhecimentos técnicos especializados."
      ],
      coreConcept: "Entrevista Jornalística, Mediação Dialógica e Polifonia Enunciativa",
      trapWarning: "Lembre-se de que a entrevista publicada passa por edição e revisão gramatical para adequação ao veículo, preservando a autenticidade do pensamento da fonte."
    },
    commonTraps: ["achar que o entrevistador e uma figura passiva sem intencionalidade discursiva", "confundir entrevista jornalistica com inquerito policial"],
    tags: ["entrevista", "jornalismo", "dialogo", "polifonia", "saude coletiva"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-GEN-020",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Gêneros Textuais e Tipologias",
    subtopic: "Anúncio Publicitário Institucional e Função Conativa",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Descrição de cartaz de campanha institucional: No centro da imagem, o desenho estilizado de uma árvore frondosa em que as folhas são formadas por impressões digitais humanas de diferentes cores. Ao lado do tronco, lê-se em letras garrafais: 'PRESERVAR O BIOMA É PRESERVAR A NOSSA PRÓPRIA IDENTIDADE. Não deixe o fogo apagar a sua marca na história. Denuncie queimadas ilegais: ligue 181. O futuro do país brota das suas atitudes hoje.' No rodapé, a assinatura do Ministério do Meio Ambiente e de órgãos ambientais.",
      source: "Campanha nacional de conscientização ambiental contra queimadas e incêndios florestais, 2024."
    },
    prompt: "O gênero anúncio publicitário de caráter institucional diferencia-se da propaganda comercial mercantil porque o seu objetivo comunicativo prioritário é:",
    options: [
      { id: "a", text: "estimular a adesão voluntária a uma causa ética e de cidadania, mobilizando recursos expressivos para transformar atitudes e comportamentos da sociedade em prol do bem comum.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "incentivar a compra imediata de mercadorias florestais e ferramentas de corte com desconto promocional.", isCorrect: false, distractorRationale: "Publicidade institucional não vende mercadorias nem visa lucro; visa à conscientização cívica e proteção ambiental." },
      { id: "c", text: "comercializar maquinário pesado e defensivos químicos agrícolas em feiras agropecuárias privadas.", isCorrect: false, distractorRationale: "O texto combate queimadas ilegais com finalidade de interesse público, não vende insumos comerciais agrícolas." },
      { id: "d", text: "expor um tratado botânico acadêmico sobre a classificação taxonômica das árvores nativas do cerrado.", isCorrect: false, distractorRationale: "Não é um compêndio botânico escolar; é uma peça publicitária de apelo comportamental urgente." },
      { id: "e", text: "estimular a queima controlada de florestas públicas para facilitar o cultivo de soja transgênica.", isCorrect: false, distractorRationale: "A mensagem é expressamente contra queimadas ilegais, conclamando o cidadão a denunciar o fogo criminoso pelo telefone 181." }
    ],
    detailedExplanation: {
      summary: "A publicidade institucional foca na persuasão para a adoção de valores éticos, cidadãos e preventivos (bem público), sem finalidade lucrativa de venda de produtos.",
      stepByStep: [
        "Metáfora visual: impressões digitais compondo as folhas da árvore significam que a sobrevivência da natureza está diretamente ligada à responsabilidade de cada indivíduo humano.",
        "Função conativa/apelativa da linguagem: verbos no imperativo ('Não deixe', 'Denuncie', 'ligue 181') direcionados ao interlocutor para induzir uma ação concreta de preservação.",
        "Diferença essencial: a publicidade comercial busca gerar consumo mercantil e lucro privado; a publicidade institucional visa conscientizar e proteger patrimônios coletivos da sociedade."
      ],
      coreConcept: "Publicidade Institucional vs. Comercial e a Função Conativa da Linguagem",
      trapWarning: "No ENEM, fique atento: campanhas do Ministério da Saúde, do Meio Ambiente ou da Educação são PUBLICIDADES INSTITUCIONAIS, não comerciais!"
    },
    commonTraps: ["confundir publicidade institucional com venda de produtos", "ignorar a funcao conativa presente nos verbos de comando"],
    tags: ["publicidade institucional", "funcao conativa", "meio ambiente", "campanha educativa", "cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

