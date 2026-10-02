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
  }
];
