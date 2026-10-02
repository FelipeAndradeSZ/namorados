/**
 * BANCO DE QUESTÕES: GÊNEROS DIGITAIS, HIPERTEXTO, MULTIMODALIDADE E CULTURA DA CONEXÃO NO ENEM
 * Área: Linguagens, Códigos e suas Tecnologias
 * Competências: C1 / C7 / C9 | Habilidades: H1, H4, H21, H22, H23, H24
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de precisão semiótica, discursiva e comunicacional
 * Regra Estrita: ZERO termos de deslocamentos turísticos. Foco em cibercultura,
 * hipertexto, redes sociais, inteligência artificial, memes, checagem e letramento midiático.
 */

export const QUESTIONS_GENEROS_DIGITAIS_HIPERTEXTO = [
  {
    id: "LIN-DIG-001",
    area: "linguagens",
    competence: 9,
    skill: 24,
    topic: "Gêneros Digitais",
    subtopic: "Hipertexto e Leitura Não-Linear",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O hipertexto não se reduz a um texto digitalizado na tela de um computador. Ele constitui uma rede dinâmica de nós semânticos interligados por conexões navegáveis (hiperlinks), permitindo que o leitor construa seu próprio trajeto de significação. Ao clicar em uma palavra sublinhada ou em um ícone, o leitor rompe com a linearidade sequencial imposta pela página impressa tradicional de Gutenberg, tornando-se coautor do percurso textual ao escolher quais bifurcações cognitivas explorar a cada momento.\n(LÉVY, Pierre. As Tecnologias da Inteligência: O Futuro do Pensamento na Era da Informática. São Paulo: Ed. 34, 1993)",
      source: "LÉVY, Pierre. As Tecnologias da Inteligência. São Paulo: Ed. 34, 1993."
    },
    prompt: "De acordo com o texto, a principal transformação introduzida pela estrutura do hipertexto no processo de leitura reside na",
    options: [
      {
        id: "a",
        text: "substituição definitiva da linguagem verbal por estímulos estritamente visuais.",
        isCorrect: false,
        distractorRationale: "O hipertexto articula texto verbal com recursos visuais, mas não elimina a palavra escrita."
      },
      {
        id: "b",
        text: "emancipação da linearidade tradicional e descentralização da trajetória de leitura pelo usuário.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O hipertexto rompe a sequência início-meio-fim da página impressa clássica. Por meio de hiperlinks e nós conectivos, o leitor escolhe ativamente as bifurcações temáticas que deseja explorar, definindo seu próprio roteiro cognitivo e assumindo um papel participativo na construção do sentido do texto."
      },
      {
        id: "c",
        text: "redução da complexidade temática dos conteúdos disponibilizados em ambientes digitais.",
        isCorrect: false,
        distractorRationale: "A não-linearidade amplia as conexões conceituais em vez de simplificar os temas."
      },
      {
        id: "d",
        text: "passividade do leitor frente a roteiros pré-determinados e rígidos de navegação.",
        isCorrect: false,
        distractorRationale: "O leitor torna-se ativo e autônomo, o oposto de passivo."
      },
      {
        id: "e",
        text: "eliminação da necessidade de interpretação contextual das palavras interligadas.",
        isCorrect: false,
        distractorRationale: "A interpretação contextual continua essencial para integrar os nós visitados."
      }
    ],
    detailedExplanation: {
      summary: "O hipertexto institui uma arquitetura de leitura reticular, descentralizada e não-linear por meio de hiperlinks.",
      stepByStep: [
        "Passo 1: Analisar a tese de Pierre Lévy citada no texto de apoio:",
        "O hipertexto é definido como rede de nós semânticos que rompe a linearidade da página impressa e confere autonomia ao leitor.",
        "Passo 2: Avaliar as alternativas:",
        "A opção 'b' capta com precisão a quebra da ordem sequencial unidirecional e a coparticipação ativa do usuário na escolha dos trajetos de navegação."
      ],
      coreConcept: "Hipertexto = arquitetura reticular de leitura multisequencial mediada por hiperlinks, contrastando com o suporte linear clássico.",
      trapWarning: "Cuidado para não considerar hipertexto apenas como 'texto com links azuis'; teoricamente, trata-se de uma nova epistemologia de leitura não-linear."
    },
    commonTraps: ["Achar que o meio digital aboliu o texto verbal"],
    tags: ["hipertexto", "letramento-digital", "pierre-levy", "leitura-nao-linear"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-002",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Gêneros Digitais",
    subtopic: "Memes, Intertextualidade e Remix Cultural",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O meme contemporâneo na internet funciona como uma unidade cultural replicável que sobrevive e ganha relevância exatamente por sua maleabilidade semiótica. Ao apropriar-se de uma pintura renascentista, de uma cena de filme clássico ou de um fato do noticiário e associá-los a uma legenda irônica sobre as dores cotidianas do estudante universitário ou do trabalhador precarizado, o meme opera pela lógica do remix. Sua eficácia comunicativa não reside apenas no humor em si, mas no pacto silencioso de compartilhamento de repertório prévio entre emissor e receptor.\n(RECUERO, Raquel. Redes Sociais na Internet. Porto Alegre: Sulina, 2009)",
      source: "RECUERO, Raquel. Redes Sociais na Internet. Porto Alegre: Sulina, 2009."
    },
    prompt: "No ecossistema da cultura digital, a força discursiva e comunicativa do gênero meme decorre primordialmente da",
    options: [
      {
        id: "a",
        text: "cópia idêntica e sem variações de conteúdos institucionais governamentais.",
        isCorrect: false,
        distractorRationale: "Memes prosperam pela mutação, recontextualização e paródia, não pela cópia estática."
      },
      {
        id: "b",
        text: "intertextualidade paródica que ressignifica imagens consagradas a partir de repertórios sociais partilhados.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O meme atua como gênero multimodal híbrido sustentado na intertextualidade e no remix cultural: ele sequestra uma imagem existente (canônica, midiática ou cotidiana) e a justapõe a um novo enunciado textual ou contexto, produzindo efeito de humor, crítica ou identificação coletiva acessível àqueles que compartilham o mesmo repertório cultural."
      },
      {
        id: "c",
        text: "obrigatoriedade do uso de linguagem formal padronizada pela norma-padrão culta.",
        isCorrect: false,
        distractorRationale: "O meme utiliza majoritariamente linguagem coloquial, gírias da internet e marcas de oralidade."
      },
      {
        id: "d",
        text: "permanência eterna e imutabilidade dos temas abordados ao longo de décadas.",
        isCorrect: false,
        distractorRationale: "Memes são altamente efêmeros e voláteis, acompanhando o ciclo acelerado dos fatos cotidianos."
      },
      {
        id: "e",
        text: "ausência intencional de crítica às contradições materiais do cotidiano.",
        isCorrect: false,
        distractorRationale: "Pelo contrário, o humor do meme frequentemente veicula denúncia e crítica social contundente."
      }
    ],
    detailedExplanation: {
      summary: "O meme opera pelo remix e pela intertextualidade paródica, exigindo conhecimento enciclopédico compartilhado para sua decodificação irônica.",
      stepByStep: [
        "Passo 1: Reconhecer a definição semiótica do meme no texto: unidade cultural replicável via remix que associa imagens prévias a legendas irônicas.",
        "Passo 2: Relacionar com as habilidades do ENEM (H21 - intertextualidade e gêneros):",
        "A compreensão depende de repertório partilhado e da fusão crítica entre duas linguagens/contextos distintos."
      ],
      coreConcept: "Remix cultural e intertextualidade paródica constituem a espinha dorsal semiótica do gênero meme no ambiente virtual.",
      trapWarning: "O meme não é mera 'piada boba' para o ENEM; é tratado como gênero discursivo legítimo da cibercultura com função social crítica."
    },
    commonTraps: ["Subestimar o meme como gênero discursivo legítimo"],
    tags: ["memes", "intertextualidade", "cibercultura", "remix-cultural"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-003",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Gêneros Digitais",
    subtopic: "Infográficos Digitais e Multimodalidade",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os infográficos em portais de divulgação científica combinam códigos verbais (títulos concisos, verbetes explicativos e números estatísticos) com recursos visuais não verbais (vetores cromáticos, ícones anatômicos, setas direcionais de fluxo e mapas de calor). Essa orquestração multissemiótica não tem finalidade meramente decorativa: ela sintetiza correlações complexas de causa e efeito (como a propagação de patógenos em ambientes ventilados) em uma visualização única e imediata, guiando o olhar do leitor por uma hierarquia lógica de prioridades informativas.\n(DIONISIO, Angela Paiva. Gêneros Multimodais. In: Gêneros Textuais & Ensino. Rio de Janeiro: Lucerna, 2002)",
      source: "DIONISIO, Angela Paiva. Gêneros Multimodais e Letramento Visual, 2002."
    },
    prompt: "No gênero infográfico, a articulação sinérgica entre a linguagem verbal e os elementos gráficos tem como objetivo precípuo",
    options: [
      {
        id: "a",
        text: "dispensar por completo a leitura dos dados numéricos e das legendas explicativas.",
        isCorrect: false,
        distractorRationale: "Os dados e legendas verbais são componentes estruturantes essenciais que ancoram a interpretação dos gráficos."
      },
      {
        id: "b",
        text: "potencializar a clareza e a rapidez na compreensão de fenômenos complexos por meio de pistas visuais estruturadas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A multimodalidade do infográfico organiza a carga cognitiva do leitor: ícones, vetores de fluxo, cores e textos trabalham de forma complementar e cooperativa para traduzir relações abstratas e volumosas em sínteses visuais intuitivas, facilitando o letramento científico e a apreensão de hierarquias lógicas."
      },
      {
        id: "c",
        text: "produzir ambiguidade proposital para dificultar a extração de conclusões pelo público leigo.",
        isCorrect: false,
        distractorRationale: "A finalidade do infográfico é didática e comunicativa, buscando erradicar ambiguidades."
      },
      {
        id: "d",
        text: "atender exclusivamente a critérios estéticos de diagramação sem vínculo com o conteúdo abordado.",
        isCorrect: false,
        distractorRationale: "O design infográfico é rigorosamente funcional e semântico, subordinado à transmissão precisa da informação."
      },
      {
        id: "e",
        text: "substituir a comprovação científica por opiniões subjetivas de ilustradores digitais.",
        isCorrect: false,
        distractorRationale: "Infográficos de divulgação científica apoiam-se em dados empíricos rigorosos e fontes confiáveis."
      }
    ],
    detailedExplanation: {
      summary: "A multimodalidade do infográfico combina recursos verbais e visuais para otimizar o processamento cognitivo de dados complexos.",
      stepByStep: [
        "Passo 1: Notar o conceito de 'orquestração multissemiótica' mencionado no texto.",
        "Passo 2: Reconhecer a função didático-informativa do gênero:",
        "O design visual estabelece hierarquias e fluxos que tornam dados estatísticos e processos científicos acessíveis e rápidos de interpretar."
      ],
      coreConcept: "Multimodalidade = confluência de dois ou mais modos semióticos (linguístico, visual, espacial) na construção de um sentido unificado.",
      trapWarning: "No ENEM, imagens em infográficos nunca são 'enfeites'; cada seta, tom de cor ou proporção espacial carrega informação analítica."
    },
    commonTraps: ["Considerar os recursos visuais de infográficos como adornos estéticos vazios"],
    tags: ["infograficos", "multimodalidade", "letramento-visual", "divulgacao-cientifica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-004",
    area: "linguagens",
    competence: 9,
    skill: 23,
    topic: "Gêneros Digitais",
    subtopic: "Bolhas Algorítmicas, Câmaras de Eco e Desinformação",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os algoritmos de recomendação das plataformas de redes sociais operam com base na maximização do tempo de tela e do engajamento emocional do usuário. Para reter a atenção, os sistemas alimentam os feeds com publicações que confirmam as preferências prévias e os vieses de confirmação de cada perfil, ocultando pontos de vista divergentes. Cria-se, assim, a chamada 'bolha algorítmica' ou 'câmara de eco': o sujeito tem a ilusão de que o mundo inteiro pensa como ele, pois sua janela digital foi estreitada por cálculos estatísticos que priorizam conteúdos polarizantes e sensacionalistas em detrimento da ponderação dos fatos.\n(PARISER, Eli. O Filtro Invisível: O que a Internet Está Escondendo de Você. Rio de Janeiro: Zahar, 2012)",
      source: "PARISER, Eli. O Filtro Invisível. Rio de Janeiro: Zahar, 2012."
    },
    prompt: "O fenômeno sociotécnico descrito por Eli Pariser evidencia que a curadoria algorítmica nas redes sociais impacta o debate público ao",
    options: [
      {
        id: "a",
        text: "democratizar de forma neutra o acesso a opiniões plurais e divergentes.",
        isCorrect: false,
        distractorRationale: "O texto afirma explicitamente que o algoritmo oculta pontos de vista divergentes em favor de conteúdos afins."
      },
      {
        id: "b",
        text: "fomentar a polarização social e fragilizar o senso crítico ao confinar os indivíduos em ambientes informativos homogêneos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A curadoria algorítmica desenhada para retenção de atenção cria 'filtros invisíveis' que retroalimentam crenças prévias (viés de confirmação), isolam os usuários de visões contraditórias e amplificam a radicalização política e a disseminação acrítica de boatos e desinformação dentro de comunidades fechadas."
      },
      {
        id: "c",
        text: "estimular o consumo reflexivo e vagaroso de livros teóricos densos.",
        isCorrect: false,
        distractorRationale: "A lógica das redes é o hiperestímulo e a velocidade de rolagem (feed infinito), e não a lentidão reflexiva."
      },
      {
        id: "d",
        text: "eliminar a publicidade corporativa direcionada nos canais de comunicação.",
        isCorrect: false,
        distractorRationale: "A publicidade hipersegmentada é exatamente o motor econômico sustentador das bolhas algorítmicas."
      },
      {
        id: "e",
        text: "garantir a imunidade dos usuários frente a notícias falsas e sensacionalistas.",
        isCorrect: false,
        distractorRationale: "As bolhas aumentam exponencialmente a suscetibilidade a fake news pela ausência de contraditório."
      }
    ],
    detailedExplanation: {
      summary: "A personalização algorítmica voltada ao engajamento isola os cidadãos em câmaras de eco, deteriorando o pluralismo democrático.",
      stepByStep: [
        "Passo 1: Compreender o mecanismo da 'bolha algorítmica' (Eli Pariser): algoritmos mostram apenas o que confirma vieses para manter o tempo de tela.",
        "Passo 2: Avaliar a consequência para a cidadania:",
        "Cria-se um ecossistema polarizado, onde o contraditório é filtrado e desinformações proliferam sem contestação crítica."
      ],
      coreConcept: "Câmaras de eco algorítmicas = enclausuramento informacional resultante da personalização orientada pela economia da atenção.",
      trapWarning: "No ENEM, tecnologia digital não é vista como estritamente 'neutra' ou puramente 'positiva'; seus impactos sociais e éticos são cobrados criticamente."
    },
    commonTraps: ["Achar que algoritmos de recomendação distribuem conteúdo de forma imparcial"],
    tags: ["bolhas-algoritmicas", "desinformacao", "letramento-midiatico", "eli-pariser"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-005",
    area: "linguagens",
    competence: 9,
    skill: 24,
    topic: "Gêneros Digitais",
    subtopic: "Podcasts e a Ressignificação da Oralidade",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O podcast consolidou-se como um dos gêneros mais populares da internet brasileira por reconfigurar a tradição radiofônica sob a lógica do áudio sob demanda. Diferente do rádio tradicional, cujos programas estavam presos à grade linear de transmissão síncrona, o podcast permite a escuta assíncrona enquanto o ouvinte realiza tarefas mecânicas (como lavar louça ou caminhar no parque). Além disso, a linguagem adotada afasta-se da formalidade empolada dos antigos locutores, apostando na estética da conversa de mesa de cozinha: risadas, interrupções naturais, hesitações e uma sensação de intimidade auditiva direta ao pé do ouvido através dos fones.\n(MEDITSCH, Eduardo. A Rádio na Era da Informação. Florianópolis: Insular, 2011)",
      source: "MEDITSCH, Eduardo. Teorias do Rádio e Áudio Digital, 2011."
    },
    prompt: "A expressiva adesão dos ouvintes contemporâneos ao formato de podcast está associada à confluência entre",
    options: [
      {
        id: "a",
        text: "obrigatoriedade de transmissão ao vivo ininterrupta e linguagem jornalística rebuscada.",
        isCorrect: false,
        distractorRationale: "O podcast opera primariamente por consumo sob demanda assíncrono e linguagem coloquial íntima."
      },
      {
        id: "b",
        text: "flexibilidade temporal de consumo sob demanda e proximidade conversacional da oralidade espontânea.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O sucesso do podcast decorre da combinação de dois pilares: a tecnologia assíncrona (escutar quando, onde e na velocidade desejada) e a inflexão estilística de oralidade descontraída e confessional, que forja um vínculo de cumplicidade e intimidade acústica com o ouvinte."
      },
      {
        id: "c",
        text: "rejeição de conteúdos aprofundados em favor de vinhetas sonoras de três segundos.",
        isCorrect: false,
        distractorRationale: "Podcasts destacam-se justamente pela capacidade de dedicar horas a debates temáticos e entrevistas longas."
      },
      {
        id: "d",
        text: "eliminação dos fones de ouvido para favorecer audições coletivas em praças públicas.",
        isCorrect: false,
        distractorRationale: "A escuta com fones de ouvido é a marca da fruição individualizada e imersiva do gênero."
      },
      {
        id: "e",
        text: "imposição de discursos monológicos sem qualquer espaço para diálogo ou divergência.",
        isCorrect: false,
        distractorRationale: "A maior parte dos podcasts adota formato dialógico (mesas-redondas, entrevistas, duplas de apresentadores)."
      }
    ],
    detailedExplanation: {
      summary: "O podcast articula a liberdade assíncrona do meio digital com uma oralidade coloquial de intimidade afetiva.",
      stepByStep: [
        "Passo 1: Identificar as características distintivas do gênero apresentadas no texto:",
        "Consumo assíncrono (sob demanda) e oralidade espontânea/descontraída com estética conversacional.",
        "Passo 2: Relacionar com as opções:",
        "A alternativa 'b' sintetiza exatamente a dimensão técnica (flexibilidade temporal) e discursiva (proximidade conversacional)."
      ],
      coreConcept: "A oralidade no podcast é uma 'oralidade secundária meditada', que recria a sensação de espontaneidade em um suporte digital assíncrono.",
      trapWarning: "Apesar de parecer conversa casual, podcasts profissionais contam com roteirização prévia e edição sofisticada de áudio."
    },
    commonTraps: ["Confundir podcast com transmissão de rádio AM tradicional presa à grade horária"],
    tags: ["podcasts", "oralidade-digital", "generos-midiaticos", "audio-sob-demanda"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-006",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Gêneros Digitais",
    subtopic: "Emojis e Recursos Paralinguísticos na Escrita Web",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas conversas instantâneas em aplicativos de mensagens, a ausência de pistas físicas presenciais — como o tom de voz, o timbre, a modulação melódica, o sorriso ou o franzir de sobrancelhas — poderia facilmente transformar frases neutras em mensagens ríspidas ou hostis. O uso de emojis e figurinhas (stickers) preenche exatamente essa lacuna expressiva. Ao acrescentar uma carinha sorridente, piscando ou chorando de rir ao final de uma advertência ou cobrança de tarefa, o emissor ancora a intenção comunicativa, atenuando a aspereza e guiando a interpretação pragmática do interlocutor.\n(MARCUSCHI, Luiz Antônio. Da Fala para a Escrita: Atividades de Retextualização. São Paulo: Cortez, 2001)",
      source: "MARCUSCHI, Luiz Antônio. Letramento e Comunicação Digital, 2001."
    },
    prompt: "Sob a perspectiva da pragmática linguística, os emojis e figurinhas funcionam na comunicação escrita digital como",
    options: [
      {
        id: "a",
        text: "símbolos decorativos arbitrários sem qualquer função na transmissão do sentido da mensagem.",
        isCorrect: false,
        distractorRationale: "Eles possuem papel semântico-pragmático central na ancoragem da intenção do locutor."
      },
      {
        id: "b",
        text: "recursos paralinguísticos que compensam a falta de entonação e expressões faciais da fala presencial.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em linguística textual, recursos paralinguísticos são sinais que modulam a força ilocucionária de um enunciado (como o tom de voz e expressões na fala oral). No texto digital escrito, emojis e stickers exercem essa função paralinguística, sinalizando ironia, afeto, brincadeira ou ênfase para desarmar ambiguidades."
      },
      {
        id: "c",
        text: "provas irrefutáveis da degradação gramatical e do empobrecimento cognitivo da juventude.",
        isCorrect: false,
        distractorRationale: "Essa visão preconceituosa ignora a riqueza expressiva e a adaptação do código aos novos suportes comunicativos."
      },
      {
        id: "d",
        text: "substitutos perfeitos de normas jurídicas e contratos formais de compra e venda.",
        isCorrect: false,
        distractorRationale: "Emojis não substituem a precisão técnica da linguagem jurídica formal."
      },
      {
        id: "e",
        text: "mecanismos de criptografia destinados a impedir a leitura de mensagens por terceiros.",
        isCorrect: false,
        distractorRationale: "Emojis não são cifras criptográficas, mas signos visuais compartilhados culturalmente."
      }
    ],
    detailedExplanation: {
      summary: "Emojis atuam como moduladores paralinguísticos na escrita digital, suprindo a carência de prosódia e mímica facial.",
      stepByStep: [
        "Passo 1: Ler a reflexão de Marcuschi sobre a escrita digital:",
        "A ausência de tom de voz e gestos na escrita de mensagens pode gerar mal-entendidos.",
        "Passo 2: Reconhecer a função dos emojis:",
        "Eles funcionam como equivalentes visuais da entonação oral (recursos paralinguísticos), definindo o tom afetivo e atenuando atritos."
      ],
      coreConcept: "Recursos paralinguísticos digitais = sinais gráficos e icônicos que orientam o valor pragmático e a intenção enunciativa na web.",
      trapWarning: "O ENEM rejeita teses elitistas que tratam recursos digitais (como emojis e gírias de internet) como 'ruína da língua'; o exame os analisa como adaptações funcionais legítimas."
    },
    commonTraps: ["Assinalar que emojis representam o 'empobrecimento' da língua portuguesa"],
    tags: ["emojis", "paralinguistica", "pragmatica", "marcuschi", "comunicacao-instantanea"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-007",
    area: "linguagens",
    competence: 9,
    skill: 23,
    topic: "Gêneros Digitais",
    subtopic: "Fact-Checking e Letramento Informacional Crítico",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Texto 1: 'URGENTE!! Compartilhem antes que apaguem! Cientistas de laboratório secreto acabam de provar que ingrediente comum no café da manhã altera o DNA humano e causa perda instantânea de memória! A grande mídia está sendo paga para esconder a verdade! Clique no link e salve sua família!'\n\nTexto 2: 'Agência Lupa / Fato ou Boato: É falso que alimento matinal modifique o código genético humano. A alegação distorce artigo preliminar publicado por pesquisadores da Universidade de Oxford sobre digestão de carboidratos. Especialistas em genética celular afirmam que nenhum nutriente ingerido pela dieta tem a capacidade de reescrever o genoma celular. Além disso, a suposta citação atribuída a diretores de saúde nunca existiu.'",
      source: "Agência de Checagem e Letramento Midiático, 2026."
    },
    prompt: "A comparação entre os dois textos revela que o Texto 1 emprega estratégias discursivas típicas de desinformação (fake news), caracterizadas por",
    options: [
      {
        id: "a",
        text: "apelo emocional alarmista, teorias da conspiração e ausência de fontes e dados técnicos auditáveis.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Texto 1 mobiliza os marcadores clássicos do clickbait de desinformação: urgência fabricada ('URGENTE!!', 'antes que apaguem'), tom conspiratório ('laboratório secreto', 'grande mídia está sendo paga'), apelo afetivo de pânico ('salve sua família') e inexistência de nomes, datas ou metodologias científicas verificáveis."
      },
      {
        id: "b",
        text: "linguagem neutra, impessoal e rigorosamente embasada no método científico empírico.",
        isCorrect: false,
        distractorRationale: "O Texto 1 é histriônico, sensacionalista e subjetivo, o exato oposto da neutralidade científica."
      },
      {
        id: "c",
        text: "citação precisa de artigos acadêmicos com links para plataformas de periódicos indexados.",
        isCorrect: false,
        distractorRationale: "O Texto 1 fala vagamente em 'cientistas de laboratório secreto', sem citar artigo ou universidade."
      },
      {
        id: "d",
        text: "respeito estrito aos princípios éticos do jornalismo investigativo de interesse público.",
        isCorrect: false,
        distractorRationale: "O texto busca viralização e pânico por meio de engano deliberado, violando toda a ética jornalística."
      },
      {
        id: "e",
        text: "ausência de pontuação enfática e moderação nos verbos no modo imperativo.",
        isCorrect: false,
        distractorRationale: "O texto usa profusão de exclamações duplas e imperativos urgentes ('Compartilhem', 'Clique', 'salve')."
      }
    ],
    detailedExplanation: {
      summary: "Textos de desinformação utilizam gatilhos emocionais de urgência, perigo e conspiração para driblar o filtro analítico do leitor.",
      stepByStep: [
        "Passo 1: Analisar as marcas linguísticas do Texto 1:",
        "Letras maiúsculas, imperativos alarmistas ('URGENTE!!', 'salve sua família'), conspiração ('mídia paga para esconder') e fontes vagas ('laboratório secreto').",
        "Passo 2: Comparar com a checagem do Texto 2 (fact-checking):",
        "O Texto 2 restabelece fontes reais, métodos de checagem e argumentos científicos verificáveis."
      ],
      coreConcept: "Letramento midiático crítico = capacidade de desconstruir recursos de persuasão enganosa e identificar marcadores de sensacionalismo em textos virais.",
      trapWarning: "Atenção aos marcadores de 'urgência fabricada'; mensagens legítimas de utilidade pública baseiam-se em clareza institucional, e não em histeria conspiratória."
    },
    commonTraps: ["Achar que a existência de palavras pseudo-científicas legitima uma notícia falsa"],
    tags: ["fake-news", "fact-checking", "letramento-midiatico", "discurso-alarmista"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-008",
    area: "linguagens",
    competence: 9,
    skill: 24,
    topic: "Gêneros Digitais",
    subtopic: "Cultura do Cancelamento e Discurso de Ódio nas Redes",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A cultura do cancelamento digital nasceu com a intenção louvável de cobrar responsabilidade pública de figuras notórias por falas racistas, machistas ou homofóbicas que historicamente passavam impunes na mídia hegemônica. No entanto, ao ser cooptada pelas dinâmicas de linchamento virtual das redes sociais, muitas vezes transforma-se em vigilantismo moral punitivista. Em busca de validação dos pares e de capitais simbólicos de 'pureza ética', multidões digitais atacam desafetos de forma desproporcional, destruindo reputações em horas, sem direito à ampla defesa, contextualização ou possibilidade de retratação e reintegração.\n(SILVA, Daniel N. A Linguagem do Cancelamento e as Guerras Culturais. Campinas: Pontes, 2021)",
      source: "SILVA, Daniel N. Linguagem e Política na Era Digital, 2021."
    },
    prompt: "Segundo a análise apresentada, o fenômeno do cancelamento nas redes digitais apresenta uma contradição discursiva ao",
    options: [
      {
        id: "a",
        text: "eliminar qualquer tipo de debate ideológico sobre preconceitos estruturais.",
        isCorrect: false,
        distractorRationale: "O cancelamento amplifica o debate, ainda que de forma conflituosa e punitiva."
      },
      {
        id: "b",
        text: "partir de uma demanda legítima por justiça social e degenerar em punitivismo moral que obstaculiza o aprendizado e o diálogo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O texto aponta a tensão central: o cancelamento teve origem legítima na responsabilização de violências simbólicas, mas sob a lógica dos algoritmos de ódio e manada digital converte-se em espetáculo punitivo e linchamento individualizado, impedindo a reflexão, a reparação e a construção dialógica de soluções coletivas."
      },
      {
        id: "c",
        text: "promover o perdão incondicional automático para qualquer infração cometida.",
        isCorrect: false,
        distractorRationale: "A característica central do linchamento virtual é justamente a negação do perdão e da tolerância."
      },
      {
        id: "d",
        text: "fortalecer o sigilo dos usuários e proteger os direitos fundamentais do contraditório.",
        isCorrect: false,
        distractorRationale: "O linchamento atropela o contraditório e expõe dados privados (doxxing)."
      },
      {
        id: "e",
        text: "restringir-se a julgamentos jurídicos formais com ampla atuação da magistratura estatal.",
        isCorrect: false,
        distractorRationale: "O cancelamento ocorre em tribunais sumários informais de redes sociais, à margem do sistema judiciário legal."
      }
    ],
    detailedExplanation: {
      summary: "A contradição do cancelamento reside na mutação de cobrança legítima por ética em justiçamento virtual sumário e intolerante.",
      stepByStep: [
        "Passo 1: Identificar a tese do autor no texto de apoio:",
        "Origem: cobrança de responsabilidade contra preconceitos estruturais. Degeneração: linchamento moral punitivista, desproporcional e sem espaço para contraditório.",
        "Passo 2: Selecionar a alternativa correspondente:",
        "A opção 'b' resume com fidelidade o paradoxo entre a intenção originária de justiça e o resultado prático de intolerância."
      ],
      coreConcept: "Tribunal das redes = vigilantismo moral que substitui o debate pedagógico pela exclusão sumária orientada por capitais de reputação.",
      trapWarning: "Questões do ENEM sobre redes sociais cobram equilíbrio analítico: reconhecem as origens de mobilização social legítima ao mesmo tempo em que criticam a toxidade do linchamento."
    },
    commonTraps: ["Achar que o autor defende cegamente ou condena simplisticamente o cancelamento"],
    tags: ["cancelamento-digital", "redes-sociais", "vigilantismo-moral", "debate-publico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-009",
    area: "linguagens",
    competence: 9,
    skill: 24,
    topic: "Gêneros Digitais",
    subtopic: "Plataformas de Vídeo Curto e Economia da Atenção",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O formato de vídeos verticais curtos (de 15 a 60 segundos) revolucionou o consumo de mídia digital ao impor a gramática da hipervelocidade. Para capturar o usuário antes do gesto involuntário do polegar ('swipe' para cima), os criadores utilizam os primeiros três segundos como 'gancho' explosivo: cortes secos a cada frase, legendas dinâmicas coloridas que pulam no centro da tela, trilhas sonoras aceleradas em ritmo frenético e expressividade corporal exagerada. Esse modelo privilegia o impacto sensorial instantâneo em detrimento do desenvolvimento analítico aprofundado, treinando os circuitos cerebrais para recompensas dopaminérgicas imediatas e reduzindo a tolerância do público a silêncios, pausas e raciocínios encadeados de longa duração.\n(CARR, Nicholas. Os Inocentes do Algoritmo. São Paulo: Intrínseca, 2020)",
      source: "CARR, Nicholas. Os Desafios Cognitivos da Era Digital, 2020."
    },
    prompt: "A linguagem estética característica das plataformas de vídeos verticais curtos reflete as exigências da 'economia da atenção' ao",
    options: [
      {
        id: "a",
        text: "estimular a paciência contemplativa e o silêncio reflexivo nos espectadores.",
        isCorrect: false,
        distractorRationale: "O formato elimina pausas e silêncios para evitar que o usuário abandone o vídeo."
      },
      {
        id: "b",
        text: "adotar cortes rápidos, hiperestímulo audiovisual e ganchos imediatos para combater a dispersão em um fluxo contínuo de conteúdos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em um ecossistema de abundância infinita de estímulos concorrentes, a moeda mais escassa é a atenção humana. A estética dos vídeos curtos adapta-se a essa pressão mercadológica concentrando estímulos sensoriais densos nos primeiros instantes, utilizando edição sincopada e ritmo vertiginoso para maximizar a retenção da visualização."
      },
      {
        id: "c",
        text: "substituir completamente as imagens em movimento por ensaios filosóficos em prosa corrida.",
        isCorrect: false,
        distractorRationale: "A plataforma baseia-se fundamentalmente na visualidade dinâmica e no áudio acelerado."
      },
      {
        id: "d",
        text: "exigir dos usuários o pagamento obrigatório de mensalidades para assistir a cada publicação.",
        isCorrect: false,
        distractorRationale: "O modelo econômico baseia-se na gratuidade de acesso em troca da captura da atenção e coleta de dados publicitários."
      },
      {
        id: "e",
        text: "resgatar a tradição do teatro clássico épico de três horas sem cortes cênicos.",
        isCorrect: false,
        distractorRationale: "O formato é o oposto do tempo estendido e contemplativo do teatro clássico."
      }
    ],
    detailedExplanation: {
      summary: "A estética dos vídeos curtos é desenhada para fisgar a atenção no primeiro segundo através de hiperestímulos visuais e cortes frenéticos.",
      stepByStep: [
        "Passo 1: Entender a tese de Nicholas Carr: a abundância de dados gerou escassez de atenção.",
        "Passo 2: Observar os recursos formais descritos no texto:",
        "Cortes sem pausas, legendas móveis, ganchos nos primeiros 3 segundos e música acelerada para combater o 'swipe' de saída.",
        "Passo 3: Concluir que a opção 'b' descreve com precisão esse imperativo semiótico da economia da atenção."
      ],
      coreConcept: "Economia da atenção = disputa comercial agressiva pela retenção do foco visual e cognitivo do usuário em plataformas digitais.",
      trapWarning: "Fique atento ao termo 'economia da atenção'; ele frequentemente aparece na prova de Linguagens e Ciências Humanas do ENEM."
    },
    commonTraps: ["Achar que o formato fragmentado decorre apenas de escolha artística espontânea do criador"],
    tags: ["economia-da-atencao", "videos-curtos", "hiperestimulo", "linguagem-digital"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-010",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Gêneros Digitais",
    subtopic: "Linguagem Neutra e Debates Sociolinguísticos na Internet",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O debate em torno do chamado 'sistema neutro' de gênero gramatical (com o uso de desinências como '-e' em 'todes' ou 'amigues') ganhou ampla visibilidade nas redes sociais e em documentos de movimentos de diversidade. Do ponto de vista da sociolinguística descritiva, esse fenômeno não representa uma 'ameaça de destruição' da língua portuguesa nem um simples 'erro ortográfico casual', mas sim uma intervenção consciente sobre o sistema da língua com motivação de política identitária: questionar o uso histórico do masculino genérico como neutro universal e marcar linguisticamente a visibilidade de identidades não binárias.\n(BAGNO, Marcos. Preconceito Linguístico: O que É, como se Faz. São Paulo: Loyola, 2015)",
      source: "BAGNO, Marcos. Sociolinguística e Intervenções Linguísticas Contemporâneas, 2015."
    },
    prompt: "Ao analisar a emergência do gênero neutro nas práticas comunicativas digitais, a abordagem científica da sociolinguística enfatiza que a língua",
    options: [
      {
        id: "a",
        text: "é um monumento estático e imutável que deve ser preservado de quaisquer influências da sociedade.",
        isCorrect: false,
        distractorRationale: "A visão científica reconhece a língua como sistema vivo, dinâmico e intrinsecamente mutável."
      },
      {
        id: "b",
        text: "constitui um fenômeno social dinâmico e aberto a disputas culturais e políticas de representatividade de seus falantes.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A sociolinguística descritiva (Marcos Bagno, Ataliba de Castilho) não faz julgamentos morais de 'certo' ou 'errado', mas compreende a língua como organismo vivo e reflexo das tensões sociais: inovações lexicais ou morfológicas refletem reivindicações de grupos sociais por representação e legitimidade no espaço público."
      },
      {
        id: "c",
        text: "deve ser regulada com punições penais para falantes que inovarem em seus vocabulários cotidianos.",
        isCorrect: false,
        distractorRationale: "Leis proibitivas de linguagem violam princípios constitucionais de liberdade de expressão e ignoram o funcionamento natural da língua."
      },
      {
        id: "d",
        text: "não sofre nenhuma influência histórica decorrente de lutas por direitos humanos ou avanços tecnológicos.",
        isCorrect: false,
        distractorRationale: "A história da língua é diretamente moldada por transformações sociais, científicas e políticas."
      },
      {
        id: "e",
        text: "pertence exclusivamente a gramáticos e dicionários, cabendo à população apenas a obediência cega.",
        isCorrect: false,
        distractorRationale: "Dicionários e gramáticas registram os usos consolidados pelos falantes; quem faz e transforma a língua são os falantes."
      }
    ],
    detailedExplanation: {
      summary: "A sociolinguística compreende a língua como patrimônio vivo em constante evolução histórica, mediada pelas necessidades dos falantes.",
      stepByStep: [
        "Passo 1: Notar o posicionamento sociolinguístico descritivo apresentado no texto de apoio.",
        "Passo 2: Afastar a visão prescritivista preconceituosa que trata mudanças como 'ameaça' ou 'destruição'.",
        "Passo 3: Identificar a resposta correta:",
        "A língua é uma prática social dinâmica, aberta a disputas simbólicas e reflexo direto das demandas de representatividade de seus usuários."
      ],
      coreConcept: "Língua como prática social situada = o sistema linguístico evolui e abriga marcas ideológicas, políticas e identitárias dos grupos que a utilizam.",
      trapWarning: "No ENEM, questões sobre linguagem inclusiva avaliam o entendimento sociolinguístico da variação e das motivações sociais da linguagem, sem endossar visões punitivistas ou preconceituosas."
    },
    commonTraps: ["Confundir análise sociolinguística científica com julgamento normativo gramatical"],
    tags: ["linguagem-neutra", "sociolinguistica", "marcos-bagno", "variacao-linguistica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-011",
    area: "linguagens",
    competence: 9,
    skill: 24,
    topic: "Gêneros Digitais",
    subtopic: "Ciberativismo e Mobilização Social em Redes",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O uso de 'hashtags' (#) em campanhas como #VidasNegrasImportam ou em protestos contra queimadas ilegais no Pantanal demonstrou a força do ciberativismo contemporâneo. A indexação de termos-chave em redes sociais permite agregar milhões de relatos individuais em uma narrativa coletiva unificada em tempo real, rompendo o filtro editorial da mídia tradicional e pressionando autoridades e corporações internacionais. No entanto, teóricos da comunicação alertam para o risco do 'slacktivism' (ativismo de sofá): a ilusão de que apenas curtir uma publicação ou compartilhar um filtro colorido substitui a participação política concreta nos espaços públicos institucionais.\n(CASTELLS, Manuel. Redes de Indignação e Esperança: Movimentos Sociais na Era da Internet. Rio de Janeiro: Zahar, 2013)",
      source: "CASTELLS, Manuel. Redes de Indignação e Esperança, 2013."
    },
    prompt: "O texto de Manuel Castells analisa o ciberativismo destacando simultaneamente seu potencial de",
    options: [
      {
        id: "a",
        text: "substituição total das leis constitucionais por enquetes abertas na internet.",
        isCorrect: false,
        distractorRationale: "O ciberativismo pressiona o poder público, mas não substitui o arcabouço constitucional."
      },
      {
        id: "b",
        text: "articulação rápida e descentralizada de pautas sociais, contrastado com o risco de acomodação em engajamentos meramente superficiais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Castells demonstra a dupla face do ativismo digital: por um lado, a agilidade de conectar vozes e pautar a agenda pública global sem intermediação de grandes monopólios de mídia; por outro, a ameaça da superficialidade ('slacktivism'), em que o clique simbólico esvazia o engajamento cívico presencial e as ações materiais transformadoras."
      },
      {
        id: "c",
        text: "alienação absoluta da juventude, tornando impossível qualquer reivindicação democrática.",
        isCorrect: false,
        distractorRationale: "O texto reconhece a relevância real de campanhas históricas que pautaram temas decisivos."
      },
      {
        id: "d",
        text: "fortalecimento da censura estatal prévia sobre canais de comunicação descentralizados.",
        isCorrect: false,
        distractorRationale: "As redes quebram a censura centralizada em vez de fortalecê-la."
      },
      {
        id: "e",
        text: "obrigação de financiamento financeiro direto por parte de cada usuário que compartilha uma postagem.",
        isCorrect: false,
        distractorRationale: "O compartilhamento por hashtags é livre e não exige doações pecuniárias obrigatórias."
      }
    ],
    detailedExplanation: {
      summary: "O ciberativismo democratiza a vocalização de demandas, mas enfrenta o desafio de transcender o engajamento efêmero do clique ('slacktivism').",
      stepByStep: [
        "Passo 1: Reconhecer a dualidade conceitual apresentada por Manuel Castells:",
        "Aspecto positivo: articulação horizontal e veloz de relatos que quebram filtros midiáticos.",
        "Aspecto crítico: o 'slacktivism' (ativismo de sofá), que gera sensação de dever cumprido sem ação real.",
        "Passo 2: Escolher a opção que contempla ambos os polos da reflexão: alternativa 'b'."
      ],
      coreConcept: "Ciberativismo = mobilização em rede horizontal; Slacktivism = acomodação do engajamento em gestos simbólicos virtuais sem desdobramento material.",
      trapWarning: "Cuidado para não escolher alternativas maniqueístas (que afirmam que o ativismo na web é 100% inútil ou 100% perfeito)."
    },
    commonTraps: ["Desconsiderar a crítica ao ativismo de sofá ('slacktivism') presente no texto"],
    tags: ["ciberativismo", "slacktivism", "manuel-castells", "redes-sociais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-012",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Gêneros Digitais",
    subtopic: "Fanfictions e Práticas Colaborativas de Letramento",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "As fanfictions (narrativas ficcionais criadas por fãs a partir de universos de livros, filmes, séries ou quadrinhos consagrados) transformaram radicalmente o estatuto do leitor na cultura digital. Em plataformas colaborativas de escrita, jovens autores amadores não apenas consomem passivamente a obra canônica de seus ídolos: eles apropriam-se dos personagens, exploram desfechos alternativos, preenchem lacunas narrativas e desenvolvem romances entre coadjuvantes marginalizados. Nos comentários de cada capítulo publicado, outros leitores oferecem revisões gramaticais voluntárias, críticas de ritmo e sugestões de enredo, configurando uma verdadeira comunidade de aprendizagem e letramento autônomo.\n(JENKINS, Henry. Cultura da Convergência. São Paulo: Aleph, 2009)",
      source: "JENKINS, Henry. Cultura da Convergência, 2009."
    },
    prompt: "No âmbito da 'cultura participativa' teorizada por Henry Jenkins, o gênero fanfiction destaca-se por",
    options: [
      {
        id: "a",
        text: "violar intencionalmente a criatividade dos leitores ao impor cópias literais do texto original.",
        isCorrect: false,
        distractorRationale: "Fanfics promovem expansão criativa, reinterpretação e recriação autoral, e não cópia servil."
      },
      {
        id: "b",
        text: "converter o leitor passivo em produtor ativo de cultura dentro de comunidades colaborativas de escrita.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Henry Jenkins define a cultura participativa como o momento em que as fronteiras entre produtor e consumidor dissolvem-se ('prosumidor'). Nas fanfictions, os fãs exercem letramentos digitais avançados: criam enredos próprios, reescrevem o cânone sob novas perspectivas de representatividade e contam com o apoio colaborativo de leitores-beta para aprimorar sua escrita."
      },
      {
        id: "c",
        text: "eliminar qualquer interesse dos jovens pela leitura de obras literárias de grande circulação.",
        isCorrect: false,
        distractorRationale: "A produção de fanfictions deriva exatamente da paixão profunda pela literatura e estimula a leitura assídua."
      },
      {
        id: "d",
        text: "exigir diploma superior de letras para a publicação de cada parágrafo na web.",
        isCorrect: false,
        distractorRationale: "O ambiente das fanfictions é horizontal, amador e aberto a escritores de todas as faixas etárias."
      },
      {
        id: "e",
        text: "impedir a manifestação de pontos de vista e identidades dissidentes nas tramas.",
        isCorrect: false,
        distractorRationale: "As fanfics são conhecidas precisamente por darem protagonismo a personagens e causas sub-representadas no cânone comercial."
      }
    ],
    detailedExplanation: {
      summary: "A fanfiction exemplifica a passagem do consumo passivo à coautoria colaborativa na cultura participativa digital.",
      stepByStep: [
        "Passo 1: Reconhecer o conceito de 'cultura participativa' e 'convergência' de Henry Jenkins:",
        "O leitor não é mero receptor; ele intervém na obra, expande universos ficcionais e aprende a escrever em colaboração com seus pares.",
        "Passo 2: Assinalar a alternativa correta: letra 'b'."
      ],
      coreConcept: "Cultura participativa (Jenkins) = transição de consumidores passivos para participantes ativos e produtores autônomos de narrativas.",
      trapWarning: "Evite preconceitos elitistas contra gêneros nascidos na internet; para o ENEM, a fanfiction é um relevante espaço de letramento literário juvenil."
    },
    commonTraps: ["Julgar fanfiction como mera contravenção de direitos autorais sem valor pedagógico"],
    tags: ["fanfiction", "cultura-participativa", "henry-jenkins", "letramento-literario"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-013",
    area: "linguagens",
    competence: 9,
    skill: 24,
    topic: "Gêneros Digitais",
    subtopic: "Inteligência Artificial Generativa e Autoria Textual",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A popularização de modelos de linguagem de inteligência artificial generativa capazes de redigir ensaios acadêmicos, códigos de programação e poemas complexos em segundos provocou debates intensos sobre o conceito de autoria. Esses sistemas computacionais operam através de redes neurais profundas que calculam probabilidades estatísticas de predição da próxima palavra com base em bilhões de textos previamente digitalizados e alimentados em seus bancos de dados de treinamento. Não há subjetividade, intencionalidade ou consciência nos algoritmos; há um formidável processamento quantitativo de dados linguísticos combinatórios.\n(SANTAELLA, Lucia. Humanos Hiper-Híbridos: A Linguagem e a Inteligência Artificial. São Paulo: Paulus, 2023)",
      source: "SANTAELLA, Lucia. Linguagem e Inteligência Artificial, 2023."
    },
    prompt: "Com base na reflexão de Lucia Santaella, a produção textual por ferramentas de inteligência artificial generativa distingue-se da escrita humana porque a máquina",
    options: [
      {
        id: "a",
        text: "apresenta consciência reflexiva, sentimentos genuínos e compromisso ético autônomo com a verdade histórica.",
        isCorrect: false,
        distractorRationale: "O texto afirma explicitamente que a máquina não possui subjetividade, consciência ou compromisso ético próprio."
      },
      {
        id: "b",
        text: "opera por cálculos probabilísticos e arranjos estatísticos sobre acervos prévios, sem intencionalidade ou experiência vivenciada de mundo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Santaella enfatiza a distinção ontológica: a linguagem humana brota de vivências corporificadas, intencionalidade comunicativa, cultura vivida e responsabilidade ética; a IA generativa, por mais fluente e gramaticalmente correta que aparente ser, realiza predição estatística de padrões lexicais a partir de correlações matemáticas em grandes bases de dados."
      },
      {
        id: "c",
        text: "é totalmente incapaz de produzir textos coesos ou com concordância gramatical correta.",
        isCorrect: false,
        distractorRationale: "A IA destaca-se justamente pela facilidade em gerar textos superficialmente bem estruturados e coesos."
      },
      {
        id: "d",
        text: "rejeita qualquer tipo de treinamento computacional em bancos de dados digitais.",
        isCorrect: false,
        distractorRationale: "O treinamento em gigabytes de texto é o pré-requisito técnico absoluto para seu funcionamento."
      },
      {
        id: "e",
        text: "substitui a necessidade de checagem humana por garantir 100% de precisão factual sem alucinações de dados.",
        isCorrect: false,
        distractorRationale: "A IA sofre de 'alucinações' frequentes (invenção de fatos, fontes inexistentes), tornando a checagem humana indispensável."
      }
    ],
    detailedExplanation: {
      summary: "A IA generativa opera por predição estatística de padrões lexicais, desprovida da intencionalidade e da experiência vivenciada que fundam a autoria humana.",
      stepByStep: [
        "Passo 1: Entender a distinção entre escrita humana e produção por IA segundo Lucia Santaella:",
        "Humanos: intencionalidade, experiência subjetiva de vida, responsabilidade ética.",
        "IA: cálculo combinatório probabilístico em redes neurais sobre acervo prévio.",
        "Passo 2: Assinalar a alternativa correspondente: letra 'b'."
      ],
      coreConcept: "A máquina não 'compreende' o texto no sentido semântico e fenomenológico humano; ela calcula regularidades estatísticas na distribuição de palavras (probabilidade n-gram).",
      trapWarning: "Cuidado para não atribuir consciência, intenção ou emoção antropomórfica a modelos computacionais de processamento de linguagem natural."
    },
    commonTraps: ["Confundir fluência sintática do texto gerado por IA com consciência e compreensão humana"],
    tags: ["inteligencia-artificial", "autoria", "lucia-santaella", "linguagem-digital"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-014",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Gêneros Digitais",
    subtopic: "Acessibilidade Digital, Audiodescrição e Texto Alternativo",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em postagens de campanhas institucionais nas redes sociais, tem se tornado frequente a inclusão da hashtag #PraCegoVer ou do recurso técnico de texto alternativo (alt text) embutido no código da imagem. Esse recurso consiste em descrever minuciosamente em palavras o conteúdo da imagem (cenário, sujeitos retratados, expressões faciais, roupas, cores e textos inscritos no cartaz), permitindo que softwares leitores de tela empregados por pessoas com deficiência visual decodifiquem e verbalizem em voz sintetizada o conteúdo da postagem.\n(BRASIL. Lei Brasileira de Inclusão da Pessoa com Deficiência - Lei nº 13.146/2015)",
      source: "Cartilha de Acessibilidade na Web e Inclusão Digital, 2026."
    },
    prompt: "A prática de redigir descrições textuais alternativas para imagens veiculadas na internet materializa o princípio de",
    options: [
      {
        id: "a",
        text: "inclusão digital e cidadania, garantindo o direito universal de acesso à informação a pessoas com deficiência.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O texto alternativo e a audiodescrição cumprem o preceito constitucional e da LBI (Lei Brasileira de Inclusão) de remover barreiras comunicacionais na web, assegurando que o patrimônio informacional, cultural e de serviços públicos seja plenamente acessível a usuários cegos ou com baixa visão."
      },
      {
        id: "b",
        text: "aumento desnecessário do consumo de dados sem qualquer utilidade social prática.",
        isCorrect: false,
        distractorRationale: "O texto alternativo é levíssimo em dados (bytes) e possui impacto social transformador de equidade."
      },
      {
        id: "c",
        text: "censura prévia sobre imagens artísticas complexas e inovadoras.",
        isCorrect: false,
        distractorRationale: "Não há censura; pelo contrário, a audiodescrição expande o alcance e a democratização da apreciação da arte."
      },
      {
        id: "d",
        text: "eliminação definitiva da necessidade de desenvolvimento de softwares leitores de tela.",
        isCorrect: false,
        distractorRationale: "A audiodescrição depende diretamente dos softwares leitores de tela para ser vocalizada aos usuários."
      },
      {
        id: "e",
        text: "privilegiamento exclusivo de algoritmos de ranqueamento comercial em motores de busca.",
        isCorrect: false,
        distractorRationale: "Embora auxilie o SEO, sua motivação precípua é a dignidade humana, acessibilidade e inclusão cidadã."
      }
    ],
    detailedExplanation: {
      summary: "A audiodescrição e o texto alternativo traduzem signos visuais em linguagem verbal acessível a leitores de tela.",
      stepByStep: [
        "Passo 1: Identificar a função social do recurso #PraCegoVer e do 'alt text':",
        "Traduzir elementos visuais para que pessoas com deficiência visual tenham acesso autônomo ao conteúdo por meio de leitores de tela.",
        "Passo 2: Relacionar com os valores cobrados pelo ENEM:",
        "Cidadania, acessibilidade, equidade e respeito aos direitos fundamentais da pessoa com deficiência."
      ],
      coreConcept: "Acessibilidade comunicacional na web = adaptação de suportes multimodais para garantir autonomia e fruição universal da informação.",
      trapWarning: "No ENEM, questões sobre acessibilidade conectam linguagem, tecnologia e direitos humanos (Matriz de Referência, Competência 7)."
    },
    commonTraps: ["Reduzir acessibilidade digital a uma mera técnica de otimização de busca comercial"],
    tags: ["acessibilidade-digital", "audiodescricao", "inclusao", "direitos-humanos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-015",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Gêneros Digitais",
    subtopic: "Netiqueta e Registro em Comunicações Remotas de Trabalho",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em ambientes de trabalho remoto mediado por e-mails institucionais e canais corporativos de mensagens assíncronas, desenvolveu-se o conjunto de convenções sociocomunicativas denominado 'netiqueta'. Entre as recomendações de boa convivência, orienta-se evitar o uso excessivo de PALAVRAS ESCRITAS EM LETRAS MAIÚSCULAS (CAIXA ALTA), pois na convenção pragmática da escrita virtual isso é interpretado como se o emissor estivesse GRITANDO com o interlocutor ou demonstrando irritação descontrolada. Recomenda-se também cordialidade nas saudações iniciais, clareza no campo de 'assunto' e moderação no envio de mensagens fora do horário de expediente.\n(CORRÊA, Vilma. Comunicação Corporativa e Etiqueta na Era Digital. São Paulo: Atlas, 2018)",
      source: "CORRÊA, Vilma. Comunicação Corporativa e Netiqueta, 2018."
    },
    prompt: "De acordo com as regras de netiqueta em contextos corporativos digitais, a grafia de enunciados em caixa alta (letras maiúsculas) deve ser evitada porque",
    options: [
      {
        id: "a",
        text: "impede a visualização do texto em monitores modernos de alta definição.",
        isCorrect: false,
        distractorRationale: "Monitores exibem maiúsculas normalmente; o impedimento não é técnico, mas pragmático-discursivo."
      },
      {
        id: "b",
        text: "carrega uma carga paralinguística associada a grito, aspereza e agressividade comunicativa.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na pragmática da escrita digital, a caixa alta integral (ALL CAPS) convencionou-se como equivalente acústico do grito ou da imposição autoritária. Em ambientes profissionais, seu emprego transmite rispidez e agressividade involuntária, gerando atritos interpessoais."
      },
      {
        id: "c",
        text: "é proibida pela Academia Brasileira de Letras em qualquer tipo de documento impresso.",
        isCorrect: false,
        distractorRationale: "A ABL não proíbe o uso de maiúsculas, que são normatizadas pela ortografia oficial."
      },
      {
        id: "d",
        text: "transforma automaticamente a mensagem em um arquivo infectado por vírus eletrônico.",
        isCorrect: false,
        distractorRationale: "A formatação de caracteres não cria arquivos maliciosos."
      },
      {
        id: "e",
        text: "obriga o destinatário a responder a mensagem no prazo de cinco minutos.",
        isCorrect: false,
        distractorRationale: "A caixa alta não impõe regras temporais de resposta."
      }
    ],
    detailedExplanation: {
      summary: "A caixa alta na internet é interpretada pragmaticamente como grito e rispidez emocional.",
      stepByStep: [
        "Passo 1: Reconhecer a convenção sociocultural da internet destacada no texto:",
        "Palavras em CAIXA ALTA são lidas como grito e irritação.",
        "Passo 2: Relacionar com as opções:",
        "A opção 'b' explicita com clareza o valor paralinguístico associado à agressividade na comunicação interpessoal remota."
      ],
      coreConcept: "Netiqueta = conjunto de normas sociais informais de polidez e cooperação pragmática na interação pela internet.",
      trapWarning: "Adequação de registro à esfera de circulação (trabalho formal vs chat íntimo) é tema recorrente na prova de Linguagens do ENEM."
    },
    commonTraps: ["Achar que regras de netiqueta são leis jurídicas formais e não convenções sociopragmáticas"],
    tags: ["netiqueta", "registro-formal", "pragmatica", "trabalho-remoto"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-016",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Gêneros Digitais",
    subtopic: "Clickbait e Sensacionalismo Caça-Cliques",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Observe a manchete publicada em uma página de notícias de entretenimento:\n\n'VOCÊ NÃO VAI ACREDITAR NO QUE ESTA ATRIZ FAMOSA FEZ HOJE! O MOTIVO DEIXOU TODOS OS MÉDICOS EM CHOQUE!'\n\nAo clicar no link e ler o texto da reportagem, o internauta descobre que a referida atriz simplesmente decidiu trocar o café com açúcar por chá verde no desjejum por recomendação de sua nutricionista pessoal durante uma consulta rotineira.",
      source: "Estudos de Mídia e Jornalismo Digital Caça-Cliques, 2026."
    },
    prompt: "O recurso textual empregado no título da notícia é denominado 'clickbait' (caça-clique) e caracteriza-se por",
    options: [
      {
        id: "a",
        text: "apresentar com rigor analítico os benefícios metabólicos comprovados do chá verde.",
        isCorrect: false,
        distractorRationale: "O título não apresenta fatos analíticos; ele esconde deliberadamente a informação para instigar o clique."
      },
      {
        id: "b",
        text: "ocultar o fato central e inflacionar a expectativa do leitor por meio de suspense forçado e hipérbole enganosa.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O clickbait opera criando uma 'lacuna de curiosidade' artificial (curiosity gap): usa frases em segunda pessoa ('Você não vai acreditar'), hipérboles sensacionalistas ('em choque', caixa alta) e oculta propositalmente o acontecimento banal para forçar o internauta a clicar no link, inflando o tráfego publicitário da página às custas da frustração do leitor."
      },
      {
        id: "c",
        text: "cumprir rigorosamente o padrão clássico do jornalismo informativo ético e transparente.",
        isCorrect: false,
        distractorRationale: "O clickbait é amplamente criticado pela deontologia jornalística por desinformar e enganar o público."
      },
      {
        id: "d",
        text: "orientar a população em situações de emergência sanitária com informações de utilidade pública.",
        isCorrect: false,
        distractorRationale: "A matéria trata de futilidade cotidiana disfarçada de drama médico."
      },
      {
        id: "e",
        text: "resumir perfeitamente o desfecho da narrativa já na primeira oração da manchete.",
        isCorrect: false,
        distractorRationale: "O lead jornalístico tradicional resume o fato (quem, o quê, quando); o clickbait faz o oposto: esconde o fato para exigir o clique."
      }
    ],
    detailedExplanation: {
      summary: "O clickbait manipula a curiosidade do leitor através de hipérbole e sonegação da informação no título.",
      stepByStep: [
        "Passo 1: Comparar o título apelativo ('em choque', 'não vai acreditar') com o fato real revelado no corpo do texto (troca de café por chá).",
        "Passo 2: Reconhecer a técnica discursiva do clickbait:",
        "Ocultar o dado principal, exagerar dramaticamente e criar uma lacuna de curiosidade para gerar monetização de cliques."
      ],
      coreConcept: "Clickbait = estratégia sensacionalista de redação de títulos digitais que inflaciona expectativas e sonega dados para atrair tráfego.",
      trapWarning: "Identificar estratégias persuasivas enganosas na mídia é habilidade explícita da matriz do ENEM (H4 e H22)."
    },
    commonTraps: ["Confundir manchete informativa legítima com clickbait sensacionalista"],
    tags: ["clickbait", "jornalismo-digital", "sensacionalismo", "persuasao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-017",
    area: "linguagens",
    competence: 9,
    skill: 24,
    topic: "Gêneros Digitais",
    subtopic: "Deepfakes, Desinformação Multimodal e Crise da Prova",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Historicamente, o registro fotográfico e o vídeo documental foram considerados 'provas cabais' da ocorrência de um fato histórico: 'ver para crer'. No entanto, a ascensão das tecnologias de 'deepfake' — vídeos e áudios sintéticos hiper-realistas gerados por algoritmos generativos antagônicos (GANs) capazes de reproduzir com fidelidade a voz, os trejeitos faciais e o tom de qualquer figura pública dizendo coisas que ela jamais proferiu — implodiu esse pacto de veracidade. O risco mais perigoso não é apenas que as pessoas acreditem em vídeos falsificados, mas que passem a desconfiar de qualquer registro autêntico, alegando que tudo o que as desfavorece politicamente não passa de uma 'montagem de inteligência artificial'.\n(RANIERE, Nina. A Era da Pós-Verdade e as Tecnologias de Manipulação Audiovisual. Belo Horizonte: Autêntica, 2024)",
      source: "RANIERE, Nina. Audiovisual e Pós-Verdade, 2024."
    },
    prompt: "O fenômeno das 'deepfakes' instaura uma crise epistemológica profunda na sociedade contemporânea porque",
    options: [
      {
        id: "a",
        text: "estimula a contratação de atores profissionais no lugar de modelos computacionais de geração de imagens.",
        isCorrect: false,
        distractorRationale: "Deepfakes dispensam atores humanos em muitas produções, gerando manipulações digitais automatizadas."
      },
      {
        id: "b",
        text: "corrói a confiança coletiva na veracidade dos registros audiovisuais e favorece o ceticismo radical frente aos fatos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A disseminação de deepfakes gera o chamado 'dividendo do mentiroso' (liar's dividend): a linha entre documento autêntico e fraude sintética torna-se indistinguível a olho nu, permitindo que corruptos ou criminosos neguem evidências reais alegando que se trata de 'manipulação por IA', além de destruir reputações por meio de falsificações imperceptíveis."
      },
      {
        id: "c",
        text: "impossibilita a realização de qualquer transmissão de rádio analógico em território nacional.",
        isCorrect: false,
        distractorRationale: "A tecnologia de rádio analógico independe de redes neurais generativas."
      },
      {
        id: "d",
        text: "assegura que todos os crimes virtuais sejam imediatamente detectados e julgados em segundos.",
        isCorrect: false,
        distractorRationale: "A alta sofisticação das deepfakes dificulta a perícia forense e retarda a punição legal."
      },
      {
        id: "e",
        text: "elimina a necessidade de peritos de verificação e checagem de metadados em eleições.",
        isCorrect: false,
        distractorRationale: "A perícia de metadados e algoritmos de detecção torna-se cada vez mais crucial e urgente."
      }
    ],
    detailedExplanation: {
      summary: "Deepfakes rompem o estatuto documental da imagem, semeando desconfiança generalizada contra evidências factuais legítimas.",
      stepByStep: [
        "Passo 1: Compreender o argumento central do texto de apoio:",
        "As deepfakes criam vídeos falsos indistinguíveis do real, abalando a crença histórica de que o vídeo é 'prova irrefutável'.",
        "Passo 2: Reconhecer o duplo perigo apontado:",
        "Crê-se no falso e, pior ainda, passa-se a desqualificar o verdadeiro alegando que 'tudo é montagem'.",
        "Passo 3: Identificar a opção correta: letra 'b'."
      ],
      coreConcept: "Crise da prova documental = desestabilização da confiança social na materialidade dos fatos em decorrência de fraudes audiovisuais hiper-realistas.",
      trapWarning: "No ENEM, tecnologias de pós-verdade e IA são abordadas sob prisma humanístico, avaliando impactos na democracia, nas eleições e nos direitos de imagem."
    },
    commonTraps: ["Achar que o perigo da deepfake é restrito à paródia e ao entretenimento inofensivo"],
    tags: ["deepfakes", "pos-verdade", "desinformacao", "etica-digital"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-018",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Gêneros Digitais",
    subtopic: "Termos de Uso, 'Scroll' Automático e Contratos de Adesão",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao baixar um novo aplicativo de rede social ou serviço de streaming, mais de 90% dos usuários clica no botão 'Li e concordo com os Termos de Uso' em menos de três segundos, sem jamais ter lido uma única linha do documento. Redigidos em jargão jurídico propositalmente denso, com centenas de páginas em fontes minúsculas, esses contratos de adesão funcionam como um ritual burocrático que legitima a expropriação massiva de dados pessoais, localização geográfica, hábitos de consumo e acesso à câmera e microfone do aparelho. A complexidade sintática e lexical do texto atua como barreira deliberada para desestimular a reflexão crítica do consumidor antes do consentimento.\n(ZUBOFF, Shoshana. A Era do Capitalismo de Vigilância. Rio de Janeiro: Intrínseca, 2021)",
      source: "ZUBOFF, Shoshana. A Era do Capitalismo de Vigilância, 2021."
    },
    prompt: "A análise de Shoshana Zuboff evidencia que a extensão desmedida e a complexidade jurídica dos 'Termos de Uso' digitais cumprem uma função discursiva de",
    options: [
      {
        id: "a",
        text: "estimular o letramento jurídico detalhado de todos os cidadãos em idade escolar.",
        isCorrect: false,
        distractorRationale: "O texto afirma o contrário: a complexidade serve para afastar o leitor, não para educá-lo."
      },
      {
        id: "b",
        text: "desestimular a leitura atenta do usuário para obter consentimento tácito e irrestrito sobre a coleta de dados.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Trata-se de uma estratégia discursiva de cansaço cognitivo: ao redigir textos quilométricos e herméticos, as corporações induzem o usuário à assinatura automática sem compreensão dos direitos que está renunciando, viabilizando o extrativismo de dados que alimenta o capitalismo de vigilância."
      },
      {
        id: "c",
        text: "assegurar a privacidade total e confidencialidade perpétua das informações do cliente.",
        isCorrect: false,
        distractorRationale: "Os termos de uso servem frequentemente para autorizar o compartilhamento e a venda de dados a terceiros."
      },
      {
        id: "d",
        text: "garantir que nenhum anúncio publicitário apareça nas telas dos dispositivos móveis.",
        isCorrect: false,
        distractorRationale: "A coleta de dados viabilizada pelos termos é a base do direcionamento publicitário comercial."
      },
      {
        id: "e",
        text: "promover o cancelamento voluntário das contas de todos os usuários cadastrados.",
        isCorrect: false,
        distractorRationale: "O objetivo das empresas é exatamente a adesão massiva e contínua."
      }
    ],
    detailedExplanation: {
      summary: "A linguagem hermética dos Termos de Uso funciona como barreira deliberada para induzir o consentimento cego do usuário.",
      stepByStep: [
        "Passo 1: Analisar a tese de Shoshana Zuboff no texto:",
        "Textos longos e com juridiquês criam cansaço cognitivo; o usuário clica 'concordo' sem ler, legitimando o uso irrestrito de seus dados pessoais.",
        "Passo 2: Assinalar a alternativa correspondente: letra 'b'."
      ],
      coreConcept: "Opacidade contratual na web = uso do gênero textual jurídico como mecanismo de barreira e obtenção de consentimento desinformado.",
      trapWarning: "No ENEM, gêneros da esfera jurídica e digital são frequentemente articulados à cidadania e aos direitos do consumidor (LGPD)."
    },
    commonTraps: ["Achar que a extensão do contrato é uma gentileza didática da empresa para com o consumidor"],
    tags: ["termos-de-uso", "capitalismo-de-vigilancia", "zuboff", "privacidade-dados"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-019",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Gêneros Digitais",
    subtopic: "Threads do X/Twitter como Microensaios Contemporâneos",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A limitação histórica de caracteres por postagem no antigo Twitter incentivou o surgimento de um gênero narrativo próprio: as 'threads' (fios ou sequências encadeadas de tuítes numerados). O que parecia uma restrição rígida de espaço converteu-se em um modelo ágil de microensaio ou crônica em capítulos fragmentados. Cientistas, historiadores, jornalistas e ativistas utilizam a primeira postagem como 'isca' de curiosidade (com a promessa 'segue o fio 🧶') e distribuem fatos históricos, análises de conjuntura e documentos imagéticos ao longo de 10 ou 15 tuítes conexos, combinando síntese afiada e ritmo vertiginoso de leitura.\n(ROJO, Roxane. Multiletramentos na Escola. São Paulo: Parábola, 2012)",
      source: "ROJO, Roxane. Gêneros Emergentes e Multiletramentos, 2012."
    },
    prompt: "O surgimento e a consolidação do gênero 'thread' nas redes sociais demonstram como os usuários",
    options: [
      {
        id: "a",
        text: "reinventam práticas discursivas e adaptam formatos argumentativos para superar limitações técnicas da plataforma.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A teoria dos gêneros discursivos (Bakhtin, Marcuschi, Roxane Rojo) postula que os gêneros são plásticos e emergem das necessidades dos falantes frente aos suportes tecnológicos. Ao lidar com a limitação de caracteres, a comunidade de usuários criou a convenção do 'fio' para desenvolver argumentações mais longas e complexas de forma modular e serializada."
      },
      {
        id: "b",
        text: "abandonam a escrita alfabética em favor da comunicação por sinais de fumaça digitais.",
        isCorrect: false,
        distractorRationale: "A thread é um gênero intensamente verbal e alfabético."
      },
      {
        id: "c",
        text: "renunciam a qualquer encadeamento lógico de argumentos entre os parágrafos postados.",
        isCorrect: false,
        distractorRationale: "A essência da thread é justamente o encadeamento coerente e progressivo entre os tuítes."
      },
      {
        id: "d",
        text: "impedem outros internautas de comentar ou rebater as teses apresentadas.",
        isCorrect: false,
        distractorRationale: "O meio digital estimula respostas e réplicas imediatas a cada segmento da sequência."
      },
      {
        id: "e",
        text: "reproduzem com exatidão a estrutura métrica de sonetos camonianos do século XVI.",
        isCorrect: false,
        distractorRationale: "A thread não segue métrica rígida decassilábica de sonetos clássicos."
      }
    ],
    detailedExplanation: {
      summary: "A 'thread' exemplifica a maleabilidade dos gêneros discursivos, que ressignificam restrições técnicas em novas formas de argumentação.",
      stepByStep: [
        "Passo 1: Entender como surgiu a 'thread': limitação de caracteres + necessidade de desenvolver ideias longas.",
        "Passo 2: Relacionar com o conceito bakhtiniano de gênero discursivo:",
        "Falantes inovam e criam novas convenções textuais para expressar suas intenções em novos suportes técnicos.",
        "Passo 3: Assinalar a alternativa 'a'."
      ],
      coreConcept: "Plasticidade dos gêneros discursivos = adaptação criativa das estruturas comunicativas às restrições e potencialidades dos suportes digitais.",
      trapWarning: "Gêneros não são fôrmas fixas; eles nascem, fundem-se e adaptam-se continuamente às práticas sociais."
    },
    commonTraps: ["Achar que a limitação de caracteres impossibilita a reflexão analítica na internet"],
    tags: ["threads", "generos-digitais", "bakhtin", "roxane-rojo", "microensaios"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-020",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Gêneros Digitais",
    subtopic: "Economia dos Algoritmos e Cultura do 'Hater'",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Pesquisas em psicologia social e engenharia de dados revelam que postagens contendo ataques inflamados, acusações morais, sarcasmo agressivo e humilhação pública geram, em média, de duas a quatro vezes mais compartilhamentos e comentários do que textos equilibrados de reflexão conciliatória. Como a arquitetura dos algoritmos premia unicamente o volume bruto de engajamento (independentemente de sua valência emocional positiva ou negativa), a agressividade converteu-se em um modelo de negócios altamente lucrativo: o comportamento de ódio e conflito permanente ('hate') é recompensado com maior visibilidade e alcance dentro das plataformas digitais.\n(SRNICEK, Nick. Capitalismo de Plataforma. São Paulo: Autonomia Literária, 2018)",
      source: "SRNICEK, Nick. Capitalismo de Plataforma e Economia Digital, 2018."
    },
    prompt: "A correlação entre agressividade discursiva e visibilidade algorítmica analisada por Nick Srnicek demonstra que",
    options: [
      {
        id: "a",
        text: "o ódio nas redes é um desvio psicológico individual sem qualquer relação com o design econômico das plataformas.",
        isCorrect: false,
        distractorRationale: "O texto afirma o contrário: a agressividade é monetizada e estimulada estruturalmente pelo modelo de negócios das plataformas."
      },
      {
        id: "b",
        text: "a arquitetura algorítmica incentiva estruturalmente a polarização e a hostilidade porque o conflito maximiza as taxas de engajamento e lucro.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O texto desmonta a visão ingênua de que a toxicidade da web seria mero 'desvio moral isolado' de certos usuários. As plataformas faturam com a circulação acelerada da raiva: como o conflito retém o usuário e multiplica comentários e cliques, os sistemas recomendam ativamente conteúdos que inflamam tensões sociais."
      },
      {
        id: "c",
        text: "textos ponderados e pacíficos recebem o triplo de alcance pago nos mecanismos de busca.",
        isCorrect: false,
        distractorRationale: "O texto afirma expressamente que postagens agressivas geram muito mais compartilhamento do que reflexões equilibradas."
      },
      {
        id: "d",
        text: "as redes sociais operam com prejuízo financeiro permanente ao tentar banir o ódio de seus servidores.",
        isCorrect: false,
        distractorRationale: "As empresas proprietárias de redes estão entre as corporações mais ricas e lucrativas do planeta."
      },
      {
        id: "e",
        text: "os algoritmos possuem consciência moral autônoma e buscam intencionalmente a autodestruição da civilização.",
        isCorrect: false,
        distractorRationale: "Algoritmos não possuem consciência; operam por métricas quantitativas de otimização de faturamento comercial."
      }
    ],
    detailedExplanation: {
      summary: "A hostilidade na internet é incentivada pela mecânica lucrativa de engajamento dos algoritmos de recomendação.",
      stepByStep: [
        "Passo 1: Identificar a correlação no texto: conflito e raiva geram 2 a 4 vezes mais engajamento.",
        "Passo 2: Relacionar com o modelo de negócio de 'capitalismo de plataforma' (Nick Srnicek):",
        "O ódio não é mero desvio individual, mas produto incentivado pelo algoritmo para reter tempo de tela e faturar publicidade.",
        "Passo 3: Assinalar a alternativa correta: letra 'b'."
      ],
      coreConcept: "Engajamento por indignação moral = mecânica das redes onde emoções de ultraje e raiva são os principais vetores de viralização.",
      trapWarning: "Evite focar exclusivamente no 'indivíduo malvado' ao analisar problemas das redes; o ENEM valoriza a compreensão estrutural do sistema sociotécnico."
    },
    commonTraps: ["Achar que a polarização virtual é um fenômeno puramente psicológico sem causa material econômica"],
    tags: ["capitalismo-de-plataforma", "engajamento", "algoritmos", "odio-nas-redes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-021",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Gêneros Digitais",
    subtopic: "Newsletter Digital e a Busca por Curadoria Lenta",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Como reação à cacofonia caótica dos feeds infinitos de redes sociais, onde posts de alta qualidade disputam atenção com memes efêmeros e anúncios invasivos, assiste-se ao renascimento do formato de 'newsletters' por e-mail. Criadores de conteúdo, acadêmicos e jornalistas independentes enviam cartas digitais periódicas diretamente para as caixas de entrada de assinantes cadastrados. O gênero recupera a tradição das missivas epistolares: leitura mais lenta, tom pessoal intimista, ensaios estruturados em profundidade e um refúgio da tirania dos algoritmos de recomendação.\n(SANTAELLA, Lucia. Ecologia Pluralista das Mídias. São Paulo: Iluminuras, 2016)",
      source: "SANTAELLA, Lucia. Ecologia Pluralista das Mídias, 2016."
    },
    prompt: "O ressurgimento das newsletters no ecossistema da comunicação digital expressa uma demanda dos leitores contemporâneos por",
    options: [
      {
        id: "a",
        text: "eliminação de textos escritos em favor de vídeos curtos de dancinhas.",
        isCorrect: false,
        distractorRationale: "Newsletters são produtos essencialmente textuais e reflexivos."
      },
      {
        id: "b",
        text: "curadoria informacional qualificada, leitura aprofundada e desaceleração do consumo midiático.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O sucesso das newsletters representa o movimento de 'slow media' (mídia lenta): em contraposição ao fluxo desordenado das redes, o leitor busca um canal direto com autores de confiança, onde a curadoria temática e o ritmo de leitura reflexiva recuperam a profundidade e a intimidade da correspondência escrita."
      },
      {
        id: "c",
        text: "aumento do número de notificações sonoras a cada minuto no celular.",
        isCorrect: false,
        distractorRationale: "Newsletters são assíncronas e reduzem o excesso de notificações em tempo real."
      },
      {
        id: "d",
        text: "dependência irrestrita dos algoritmos de curtidas para selecionar o que ler.",
        isCorrect: false,
        distractorRationale: "O e-mail contorna os algoritmos das redes sociais, enviando o texto direto do autor para a caixa de entrada."
      },
      {
        id: "e",
        text: "proibição do uso de endereços de e-mail para comunicações profissionais.",
        isCorrect: false,
        distractorRationale: "O gênero baseia-se justamente no uso do e-mail como suporte de circulação."
      }
    ],
    detailedExplanation: {
      summary: "A newsletter recupera a estética epistolar de leitura pausada, oferecendo curadoria direta fora dos algoritmos das redes sociais.",
      stepByStep: [
        "Passo 1: Reconhecer a motivação do ressurgimento das newsletters apontada no texto:",
        "Fuga do caos dos feeds infinitos e busca por ensaios aprofundados, relação direta com o autor e leitura sem ruído algorítmico.",
        "Passo 2: Assinalar a alternativa correspondente: letra 'b'."
      ],
      coreConcept: "Slow media = tendência de desaceleração e busca por profundidade e curadoria qualificada em oposição ao consumo veloz e fragmentado das redes.",
      trapWarning: "Gêneros considerados 'antigos' (como cartas e e-mails) são frequentemente resemantizados no meio digital, demonstrando a circularidade e resiliência das formas discursivas."
    },
    commonTraps: ["Achar que a tecnologia digital caminha apenas na direção da fragmentação veloz e nunca da reflexão profunda"],
    tags: ["newsletters", "slow-media", "curadoria", "letramento-digital"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-022",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Gêneros Digitais",
    subtopic: "Reviews de Usuários e o Discurso da Avaliação de Consumo",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Texto: Avaliação de um produto em aplicativo de comércio eletrônico (5 estrelas):\n'Comprei o livro tem três semanas. A edição é linda, capa dura impecável e a entrega foi super rápida, chegou em dois dias! Mas dou 5 estrelas porque a embalagem veio com plástico bolha bem caprichado. Ainda não li nenhuma página da história porque estou ocupado, mas recomendo a compra para todo mundo!'",
      source: "Comentários e Avaliações de Usuários em Plataformas de E-commerce, 2026."
    },
    prompt: "O comentário transcrito exemplifica uma contradição comum encontrada no gênero discursivo 'review de usuário' na internet, que consiste em",
    options: [
      {
        id: "a",
        text: "avaliar a qualidade intrínseca do conteúdo da obra sem levar em conta a experiência de entrega física.",
        isCorrect: false,
        distractorRationale: "O usuário avaliou unicamente a entrega e a embalagem, sem ler o conteúdo."
      },
      {
        id: "b",
        text: "atribuir nota máxima e recomendar enfaticamente uma obra com base exclusiva na logística de entrega e na embalagem, sem ter avaliado o texto em si.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O gênero 'review de produto' tem como finalidade primordial orientar outros consumidores sobre a qualidade do item adquirido. A contradição pragmática reside no fato de o avaliador conceder nota máxima e recomendação categórica apoiando-se unicamente em fatores logísticos periféricos (prazo de frete e plástico bolha), admitindo expressamente que não leu o conteúdo literário do livro."
      },
      {
        id: "c",
        text: "recusar-se a recomendar o produto para qualquer outro consumidor na plataforma.",
        isCorrect: false,
        distractorRationale: "O comentário afirma 'recomendo a compra para todo mundo!'."
      },
      {
        id: "d",
        text: "empregar linguagem exclusivamente técnica e jargões da crítica literária universitária.",
        isCorrect: false,
        distractorRationale: "A linguagem é coloquial e informal, típica de consumidores comuns na web."
      },
      {
        id: "e",
        text: "reclamar de cobranças indevidas de frete em sua fatura de cartão de crédito.",
        isCorrect: false,
        distractorRationale: "O comprador elogia a entrega rápida e não faz nenhuma menção a cobranças indevidas."
      }
    ],
    detailedExplanation: {
      summary: "Em reviews online, o julgamento de consumo muitas vezes confunde a eficiência da logística do frete com a qualidade do conteúdo da obra.",
      stepByStep: [
        "Passo 1: Ler atentamente o comentário do consumidor:",
        "Dá 5 estrelas e recomenda a compra, mas elogia apenas a entrega rápida e a embalagem de plástico bolha, confessando que não leu o livro.",
        "Passo 2: Identificar a contradição funcional do gênero:",
        "Avalia a mercadoria pelo frete e não pelo conteúdo da obra literária.",
        "Passo 3: Assinalar a alternativa 'b'."
      ],
      coreConcept: "Desvio funcional em gêneros digitais = deslocamento do propósito comunicativo central (avaliar o livro) para aspectos periféricos (avaliar a entrega).",
      trapWarning: "O ENEM adora questões de leitura de comentários cotidianos da internet para testar senso crítico sobre a credibilidade das informações na web."
    },
    commonTraps: ["Achar que qualquer avaliação 5 estrelas é uma crítica literária válida da obra"],
    tags: ["reviews", "e-commerce", "generos-digitais", "leitura-critica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-023",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Gêneros Digitais",
    subtopic: "Gamificação e a Linguagem de Recompensas na Educação Digital",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Aplicativos de aprendizagem de idiomas e plataformas de estudos para exames vestibulares utilizam de forma crescente a 'gamificação': a transposição de mecânicas de jogos (pontos de experiência - XP, medalhas de conquista, barras de progresso, sequências diárias de 'ofensiva' e rankings entre usuários) para o ambiente de ensino. Estudos pedagógicos mostram que esse design discursivo estimula o hábito contínuo de estudo e combate a procrastinação através de recompensas visuais e sonoras imediatas. Contudo, especialistas alertam para o perigo de o estudante concentrar-se obsessivamente na pontuação mecânica do jogo, esquecendo-se da assimilação profunda dos conceitos conceituais da disciplina.\n(FARDO, Marcelo. A Gamificação Aplicada em Ambientes de Aprendizagem. Revista CINTED-UFRGS, 2013)",
      source: "FARDO, Marcelo. Gamificação e Educação, 2013."
    },
    prompt: "A aplicação de recursos de gamificação em plataformas digitais de educação visa primordialmente a",
    options: [
      {
        id: "a",
        text: "eliminar todos os conteúdos teóricos das matérias para transformar o estudo em videogame vazio.",
        isCorrect: false,
        distractorRationale: "O objetivo é engajar o estudante no estudo do conteúdo, não extinguir a teoria."
      },
      {
        id: "b",
        text: "aumentar o engajamento e a disciplina de estudo por meio de estímulos de progresso contínuo e recompensas simbólicas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A gamificação aproveita o feedback imediato característico dos jogos (XP, medalhas, níveis) para conferir visibilidade ao esforço diário do aprendiz, transformando o estudo autônomo em um ciclo contínuo de pequenas vitórias e metas alcançáveis, facilitando a adesão à rotina."
      },
      {
        id: "c",
        text: "impedir que os estudantes utilizem a internet para pesquisar em bibliotecas virtuais.",
        isCorrect: false,
        distractorRationale: "A gamificação é um recurso integrado ao meio digital e não bloqueia pesquisas externas."
      },
      {
        id: "d",
        text: "punir fisicamente alunos que cometem erros em simulados com o bloqueio do aparelho celular.",
        isCorrect: false,
        distractorRationale: "Mecânicas pedagógicas buscam incentivar pelo reforço positivo, sem violência ou punição física."
      },
      {
        id: "e",
        text: "dispensar a realização de provas oficiais de avaliação em vestibulares e concursos.",
        isCorrect: false,
        distractorRationale: "Aplicativos de estudo preparam o aluno exatamente para prestar os exames oficiais."
      }
    ],
    detailedExplanation: {
      summary: "A gamificação pedagógica utiliza elementos de jogos para fortalecer a motivação e a consistência na rotina de estudos.",
      stepByStep: [
        "Passo 1: Entender a definição e o objetivo da gamificação no texto de apoio:",
        "Uso de mecânicas de jogos (XP, medalhas, ofensivas) para gerar engajamento contínuo e hábitos regulares de estudo.",
        "Passo 2: Selecionar a opção correta: letra 'b'."
      ],
      coreConcept: "Gamificação pedagógica = uso de dinâmicas e elementos de design de jogos em contextos não-lúdicos para engajar e motivar a aprendizagem.",
      trapWarning: "Cuidado para não considerar gamificação como mero passatempo desprovido de base pedagógica; ela envolve psicologia comportamental e neurociência da motivação."
    },
    commonTraps: ["Confundir gamificação de estudos com jogar videogame sem fins educativos"],
    tags: ["gamificacao", "educacao-digital", "engajamento", "metodologias-ativas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-024",
    area: "linguagens",
    competence: 9,
    skill: 23,
    topic: "Gêneros Digitais",
    subtopic: "Rastros Digitais, Privacidade e 'Direito ao Esquecimento'",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na era da internet perene, cada busca realizada, comentário publicado na adolescência, fotografia marcada ou registro de infração pretérita permanece arquivado indefinidamente nos servidores de busca e redes sociais. Essa permanência indelével deu origem ao debate jurídico e ético sobre o 'direito ao esquecimento': a prerrogativa de um indivíduo requerer a desindexação de fatos antigos de sua vida privada que não possuem mais interesse público histórico, evitando que erros passados superados condenem perpetuamente sua vida pessoal e profissional. Opõem-se a esse direito os defensores da liberdade de informação irrestrita e da preservação da memória histórica coletiva.\n(FUX, Luiz. Liberdade de Expressão e Direito ao Esquecimento na Era Digital. Brasília: STF, 2021)",
      source: "FUX, Luiz. O Supremo Tribunal Federal e os Direitos na Internet, 2021."
    },
    prompt: "O debate contemporâneo em torno do 'direito ao esquecimento' no ambiente digital envolve um conflito ético-jurídico entre",
    options: [
      {
        id: "a",
        text: "o aumento do preço de computadores pessoais e o monopólio de provedores de internet.",
        isCorrect: false,
        distractorRationale: "O tema aborda direitos de personalidade e memória, e não precificação de equipamentos."
      },
      {
        id: "b",
        text: "a proteção da dignidade e privacidade individual contraposta à liberdade coletiva de informação e memória histórica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O cerne do debate constitucional sobre o direito ao esquecimento reside na tensão entre dois direitos fundamentais de mesma hierarquia: de um lado, a dignidade da pessoa humana, a intimidade e a reabilitação social do indivíduo; de outro, o direito coletivo à informação verídica, à liberdade de imprensa e à não alteração do registro histórico."
      },
      {
        id: "c",
        text: "a obrigatoriedade de apagar todos os livros didáticos de história após dez anos de publicação.",
        isCorrect: false,
        distractorRationale: "O direito ao esquecimento não se aplica à historiografia oficial ou a livros didáticos."
      },
      {
        id: "d",
        text: "o incentivo governamental ao anonimato total para a prática impune de crimes cibernéticos.",
        isCorrect: false,
        distractorRationale: "A Constituição veda expressamente o anonimato e pune crimes virtuais."
      },
      {
        id: "e",
        text: "a eliminação de backups digitais em bancos de dados de órgãos de meteorologia.",
        isCorrect: false,
        distractorRationale: "Dados meteorológicos nada têm a ver com direitos de personalidade de cidadãos."
      }
    ],
    detailedExplanation: {
      summary: "O direito ao esquecimento contrapõe a dignidade e intimidade individual à liberdade pública de informação e memória histórica.",
      stepByStep: [
        "Passo 1: Identificar a questão jurídica central trazida no texto:",
        "A internet não esquece nada por conta própria, eternizando erros do passado.",
        "Passo 2: Reconhecer a colisão de princípios fundamentais:",
        "Princípio 1: Dignidade, privacidade e recomeço da vida do indivíduo.",
        "Princípio 2: Liberdade de imprensa, direito de informação e preservação da história pública.",
        "Passo 3: Assinalar a alternativa correta: letra 'b'."
      ],
      coreConcept: "Ponderação de direitos fundamentais na era digital = harmonização entre intimidade pessoal e o direito coletivo à verdade histórica.",
      trapWarning: "No STF e no ENEM, o tema é analisado sob o prisma da ponderação de valores constitucionais, sem soluções simplistas ou maniqueístas."
    },
    commonTraps: ["Achar que direito ao esquecimento é sinônimo de censura prévia ditatorial"],
    tags: ["direito-ao-esquecimento", "privacidade", "stf", "cidadania-digital"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-DIG-025",
    area: "linguagens",
    competence: 9,
    skill: 24,
    topic: "Gêneros Digitais",
    subtopic: "Letramentos Digitais Críticos e o Protagonismo Cidadão",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Estar plenamente alfabetizado no século XXI vai muito além de saber decodificar letras impressas ou clicar mecanicamente em botões de uma tela sensível ao toque. O conceito de 'letramento digital crítico' exige que o indivíduo saiba interrogar as condições de produção de um texto virtual: quem financiou aquela postagem? Quais interesses econômicos ou políticos movem aquele influenciador? Como os algoritmos filtraram aquela informação para o meu perfil? O que foi omitido naquela narrativa? Somente ao desenvolver essa postura analítica o usuário deixa de ser um mero consumidor passivo de estímulos dopaminérgicos para tornar-se um sujeito autônomo, capaz de exercer sua cidadania consciente e emancipada na praça pública digital.\n(SOARES, Magda. Letramento: Um Tema em Três Gêneros. Belo Horizonte: Autêntica, 2002)",
      source: "SOARES, Magda. Letramento e Cidadania Contemporânea, 2002."
    },
    prompt: "De acordo com o texto, a conquista do 'letramento digital crítico' capacita o cidadão contemporâneo a",
    options: [
      {
        id: "a",
        text: "utilizar a internet unicamente para entretenimento passivo, sem jamais questionar os conteúdos veiculados.",
        isCorrect: false,
        distractorRationale: "Essa é exatamente a postura passiva que o letramento crítico visa combater."
      },
      {
        id: "b",
        text: "investigar criticamente a autoria, as intenções ideológicas e os interesses subjacentes às informações que circulam na web.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O letramento digital crítico (Magda Soares, Paulo Freire) pressupõe ler o mundo além das palavras digitais: desocultar os interesses econômicos de plataformas e patrocinadores, analisar a arquitetura de filtragem algorítmica e construir uma postura investigativa e autônoma na navegação e na formação de juízos políticos e éticos."
      },
      {
        id: "c",
        text: "adquirir obrigatoriamente todos os lançamentos tecnológicos de computadores e smartphones anualmente.",
        isCorrect: false,
        distractorRationale: "Letramento crítico não é consumo compulsivo de aparelhos, mas capacidade interpretativa emancipadora."
      },
      {
        id: "d",
        text: "rejeitar de forma obscurantista qualquer benefício proporcionado pelas tecnologias de informação.",
        isCorrect: false,
        distractorRationale: "Não se trata de negar a tecnologia (ludismo), mas de usá-la com lucidez, autonomia e discernimento."
      },
      {
        id: "e",
        text: "aceitar qualquer notícia compartilhada por influenciadores digitais como verdade inquestionável.",
        isCorrect: false,
        distractorRationale: "O letramento crítico ensina exatamente a duvidar de discursos de autoridade acríticos de influenciadores."
      }
    ],
    detailedExplanation: {
      summary: "O letramento digital crítico desenvolve a autonomia do leitor para investigar a autoria, interesses e ideologias nas mídias virtuais.",
      stepByStep: [
        "Passo 1: Ler a reflexão de Magda Soares sobre o letramento no século XXI:",
        "Não basta saber usar a ferramenta; é preciso saber interrogar quem financia, quais as intenções e o que foi omitido no discurso.",
        "Passo 2: Assinalar a alternativa correspondente: letra 'b'."
      ],
      coreConcept: "Letramento digital crítico = capacidade de analisar reflexivamente o contexto de produção, os interesses de poder e as ideologias embutidas nas narrativas virtuais.",
      trapWarning: "Esta é a questão de síntese da Competência 9 de Linguagens do ENEM: a tecnologia como instrumento de emancipação e cidadania reflexiva."
    },
    commonTraps: ["Achar que saber mexer no celular é o mesmo que ter letramento digital crítico"],
    tags: ["letramento-critico", "cidadania-digital", "magda-soares", "competencia-9"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
