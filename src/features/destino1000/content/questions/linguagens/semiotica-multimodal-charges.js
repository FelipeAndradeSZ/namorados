/**
 * Banco de Questões ENEM — Linguagens, Códigos e suas Tecnologias
 * Módulo: Semiótica Multimodal, Charges, Cartuns e Humor Gráfico
 * 
 * 25 Questões Inéditas Rigorosamente Alinhadas à Matriz do INEP
 * Validação: 5 alternativas (a-e), 1 correta, justificativa para cada distrator,
 * resolução pedagógica passo a passo e foco nos pilares da TRI.
 * ZERO termos de viagem.
 */

export const QUESTIONS_SEMIOTICA_MULTIMODAL_CHARGES = [
  {
    id: "LIN-SEM-001",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Diferenciação Crítica entre Charge e Cartum",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No estudo dos gêneros textuais multimodais da imprensa e das artes gráficas, charges e cartuns compartilham a síntese verbo-visual e o teor humorístico ou irônico. Entretanto, a teoria da comunicação estabelece distinções fundamentais quanto à sua temporalidade e ancoragem temática: enquanto um gênero prende-se estritamente à crítica de um acontecimento conjuntural recente da vida política local, o outro aborda temas atemporais e universais da condição humana.",
      source: "Teoria da Comunicação e Análise Semiótica da Imagem"
    },
    prompt: "A principal distinção funcional que caracteriza a charge em relação ao cartum consiste no fato de a charge:",
    options: [
      { id: "a", text: "vincular-se diretamente a uma notícia ou evento conjuntural pontual da atualidade social ou política, perdendo parte de sua força crítica se descontextualizada daquele momento histórico.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "prescindir completamente de qualquer elemento verbal, apoiando-se unicamente em símbolos pictóricos abstratos.", isCorrect: false, distractorRationale: "Tanto charges quanto cartuns podem ou não utilizar texto verbal; a presença de texto não é critério diferenciador." },
      { id: "c", text: "tratar com exclusividade de dilemas existenciais metafísicos e universais válidos para qualquer época histórica.", isCorrect: false, distractorRationale: "O tratamento de temas universais e atemporais é o traço característico do cartum, e não da charge." },
      { id: "d", text: "ser estruturada obrigatoriamente em tiras narrativas horizontais de quatro quadrinhos sucessivos com personagens fixos.", isCorrect: false, distractorRationale: "Essa é a descrição do gênero tirinha cômica diária (comic strip), enquanto a charge costuma ocupar um único quadro autônomo." },
      { id: "e", text: "adotar neutralidade axiológica absoluta, abstendo-se de emitir juízos de valor ideológicos sobre figuras públicas.", isCorrect: false, distractorRationale: "A charge é essencialmente opinativa, engajada e crítica, nunca neutra." }
    ],
    detailedExplanation: {
      summary: "A charge (do francês 'charger', carga/exagero) é intrinsecamente conjuntural: seu sentido depende da leitura atenta do noticiário contemporâneo, focalizando personagens e fatos específicos da esfera pública. O cartum, por outro lado, é atemporal e universal, ironizando comportamentos humanos gerais (como egoísmo, vaidade, amor, consumismo) sem depender de uma data ou personagem específico do noticiário.",
      stepByStep: [
        "1. Analisar o conceito de charge: gênero opinativo de imprensa centrado em fatos conjunturais e figuras públicas da atualidade.",
        "2. Analisar o conceito de cartum: humor gráfico atemporal que tematiza a conduta humana universal.",
        "3. Comparar a temporalidade: a charge envelhece rápido se o leitor não recordar o fato político que a motivou.",
        "4. Concluir que a vinculação ao evento conjuntural específico é a marca distintiva da charge."
      ],
      coreConcept: "Charge = conjuntural, datada, evento político/social recente. Cartum = atemporal, universal, comportamento humano.",
      trapWarning: "Cuidado: charge e cartum não se diferenciam pelo uso de texto verbal, mas pelo grau de dependência da conjuntura imediata."
    },
    commonTraps: ["Achar que a diferença entre charge e cartum está no uso ou ausência de balões de fala"],
    tags: ["semiotica", "charge", "cartum", "generos-textuais"]
  },
  {
    id: "LIN-SEM-002",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Relação Verbo-Visual e Quebra de Expectativa em Tirinhas",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma tirinha cômica de três quadrinhos, observa-se a seguinte sequência:\n• 1º quadrinho: Um executivo de terno caminha apressado olhando para a tela do celular e diz: 'A inteligência artificial avançada finalmente vai libertar os seres humanos das tarefas exaustivas...'\n• 2º quadrinho: Ele continua digitando furiosamente, com olheiras profundas e uma xícara transbordando café: '...permitindo que nos dediquemos exclusivamente à arte, à poesia e ao descanso reflexivo!'\n• 3º quadrinho: A câmera visual abre o plano e revela uma IA gerando poemas e quadros a óleo em alta velocidade, enquanto o executivo é mostrado preenchendo relatórios manuais de planilhas debaixo de uma pilha de processos às duas da madrugada.",
      source: "Crítica Cultural do Trabalho e Cibercultura Contemporânea"
    },
    prompt: "O efeito de humor crítico e ironia produzido pela tirinha decorre da:",
    options: [
      { id: "a", text: "quebra de expectativa promovida pela inversão cômica da realidade: a tecnologia passou a produzir arte enquanto o ser humano permaneceu escravizado pela burocracia mecânica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "celebração irrestrita da autonomia robótica como aliada indispensável ao descanso dos trabalhadores assalariados.", isCorrect: false, distractorRationale: "O texto não celebra a tecnologia; ele ironiza o fracasso da promessa de emancipação humana." },
      { id: "c", text: "falta de coerência temática entre a fala do executivo e a ilustração do primeiro quadrinho.", isCorrect: false, distractorRationale: "A progressão narrativa é altamente coerente e constrói o clímax irônico propositadamente no último quadro." },
      { id: "d", text: "demonstração de que a poesia gerada por computador é qualitativamente superior à literatura canônica humana.", isCorrect: false, distractorRationale: "A tirinha não avalia o mérito estético dos poemas da IA, mas sim a divisão de tarefas contraditória no trabalho moderno." },
      { id: "e", text: "ausência intencional de figuras de linguagem e o emprego de linguagem puramente descritiva e denotativa.", isCorrect: false, distractorRationale: "A tirinha estrutura-se em profunda ironia situacional e metáfora verbo-visual." }
    ],
    detailedExplanation: {
      summary: "O humor da tirinha reside na ironia situacional e na quebra de expectativa do terceiro quadrinho. A promessa histórica da tecnologia era assumir o trabalho monótono para que os humanos vivessem a sensibilidade artística. O desfecho revela a contradição contemporânea: as máquinas automatizam a criação sensível (arte e poesia) e o trabalhador continua soterrado por tarefas repetitivas e burocráticas.",
      stepByStep: [
        "1. Analisar a tese verbal (quadros 1 e 2): O discurso idealista do executivo de que a IA libertará os humanos para a arte.",
        "2. Analisar o contraste visual (quadro 3): O software produz arte enquanto o humano executa trabalho braçal burocrático.",
        "3. Identificar o mecanismo retórico: Ironia e quebra de expectativa entre o discurso verbal e a realidade visual.",
        "4. Concluir que a tirinha critica a alienação do trabalho na era digital."
      ],
      coreConcept: "A quebra de expectativa entre o discurso verbal inicial e a revelação visual no último quadrinho é o principal recurso de humor crítico em tirinhas.",
      trapWarning: "Em questões multimodais, nunca leia o texto verbal isolado da imagem: o sentido crítico completo nasce do choque entre verbo e visual."
    },
    commonTraps: ["Interpretar a tirinha de forma literal sem perceber a ironia situacional"],
    tags: ["tirinha", "ironia", "quebra-expectativa", "trabalho", "tecnologia"]
  },
  {
    id: "LIN-SEM-003",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Metáfora Visual e Crítica Ecológica no Cartum",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição de um cartum premiado em um salão de humor gráfico:\nO desenho apresenta uma gigantesca ampulheta de vidro pousada sobre um solo ressecado e árido. Na parte superior da ampulheta, em vez de grãos de areia, há uma densa floresta tropical verdejante repleta de animais e rios cristalinos. Na medida em que o tempo passa, os elementos da floresta passam pelo estreito gargalo central e caem na parte inferior da ampulheta já totalmente transformados em pilhas acinzentadas de notas de dinheiro e moedas.",
      source: "Salão Internacional de Humor Gráfico e Meio Ambiente"
    },
    prompt: "A metáfora visual central articulada pelo cartunista expressa uma crítica à:",
    options: [
      { id: "a", text: "lógica de exploração predatória que converte o patrimônio ecológico e a biodiversidade planetária em lucro monetário imediato e efêmero.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "impossibilidade física de medir o tempo em ecossistemas florestais desprovidos de tecnologia digital.", isCorrect: false, distractorRationale: "A ampulheta é um signo metafórico de tempo e escassez, não um instrumento de medição física real no contexto." },
      { id: "c", text: "superioridade moral do capital financeiro como agente insubstituível de reflorestamento sustentável.", isCorrect: false, distractorRationale: "O cartum denuncia a perda da floresta em prol do dinheiro, denunciando a destruição, e não enaltecendo o capital." },
      { id: "d", text: "precisão matemática das transações bancárias realizadas no comércio de créditos de carbono.", isCorrect: false, distractorRationale: "A imagem não aborda créditos de carbono formais, mas a destruição da floresta nativa pelo dinheiro." },
      { id: "e", text: "relação harmoniosa entre a expansão monetária e a preservação perene dos recursos hídricos globais.", isCorrect: false, distractorRationale: "A representação mostra um desastre de degradação antrópica irreversível, contrariando a ideia de harmonia." }
    ],
    detailedExplanation: {
      summary: "A ampulheta simboliza a contagem regressiva e a finitude do tempo que a humanidade dispõe. A passagem da floresta verde (biodiversidade e vida) através do estrangulamento para virar pilhas de cédulas de dinheiro na base inferior denuncia que a economia hegemônica trata a biosfera como mera mercadoria descartável em busca de lucro financeiro, exaurindo recursos vitais que não podem ser repostos quando o 'tempo acabar'.",
      stepByStep: [
        "1. Decodificar o símbolo da ampulheta: passagem inexorável do tempo e finitude de recursos.",
        "2. Analisar o conteúdo do compartimento superior: a natureza viva (biodiversidade, florestas, rios).",
        "3. Analisar a transformação no gargalo: a conversão mercantil da vida.",
        "4. Analisar o compartimento inferior: acúmulo estéril de moeda e solo árido ao redor.",
        "5. Concluir que o cartum critica a voracidade econômica que destrói a natureza em troca de dinheiro."
      ],
      coreConcept: "A metáfora visual associa domínios conceituais distintos (tempo/ampulheta + floresta/dinheiro) para construir uma denúncia ética contundente.",
      trapWarning: "Identifique os significantes visuais: a transformação de verde (vida) em cinza/cédulas (capital inerte) evidencia o juízo de valor crítico do autor."
    },
    commonTraps: ["Focar apenas no elemento temporal da ampulheta e esquecer a crítica ecológica ao acúmulo de capital"],
    tags: ["cartum", "metafora-visual", "meio-ambiente", "ecologia", "semiotica"]
  },
  {
    id: "LIN-SEM-004",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Intertextualidade e Paródia no Humor Visual",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Observe a descrição de uma charge editorial de jornal:\nO cartunista parodia a famosa escultura 'O Pensador', de Auguste Rodin. No lugar do homem musculoso desnudo em profunda concentração filosófica apoiando o queixo sobre a mão, o personagem retratado está curvado em postura corcunda, com a cabeça baixa e os olhos arregalados, hipnotizado pelo brilho ofuscante de um smartphone que emite notificações ininterruptas. Na base da estátua, a inscrição original foi riscada e substituída por: 'O Rolador de Feed'.",
      source: "Caderno Cultural e Crítica da Sociedade do Espetáculo"
    },
    prompt: "O recurso da paródia intertextual empregado na charge tem como objetivo comunicativo:",
    options: [
      { id: "a", text: "contrastar a profundidade da reflexão filosófica clássica com a superficialidade e passividade alienante do consumo frenético de conteúdos em redes sociais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "homenagear a perícia técnica dos mestres da escultura realista francesa do século XIX.", isCorrect: false, distractorRationale: "A paródia subverte a obra clássica com viés de crítica contemporânea, não tendo como meta principal o elogio técnico acadêmico." },
      { id: "c", text: "afirmar que a consulta contínua aos aparelhos celulares expandiu exponencialmente o raciocínio filosófico ocidental.", isCorrect: false, distractorRationale: "O texto visual aponta a perda de reflexão profunda em troca do scrolling automático e zumbificado." },
      { id: "d", text: "denunciar o alto custo de aquisição de aparelhos celulares por estudantes de artes plásticas.", isCorrect: false, distractorRationale: "O foco é o comportamento psicológico e cognitivo da sociedade, não o poder aquisitivo do artista." },
      { id: "e", text: "propor a demolição definitiva dos museus de belas artes para instalação de torres de transmissão móvel.", isCorrect: false, distractorRationale: "Interpretação absurda e distorcida dos objetivos discursivos da arte de charge." }
    ],
    detailedExplanation: {
      summary: "A paródia opera pelo diálogo entre a obra-fonte canônica ('O Pensador' de Rodin, signo universal de introspecção, filosofia e autonomia da mente humana) e a releitura contemporânea ('O Rolador de Feed'). O contraste entre a postura do filósofo clássico e a postura curvada do indivíduo absorvido pelo smartphone evidencia a degradação da capacidade crítica e reflexiva em prol da passividade algorítmica.",
      stepByStep: [
        "1. Identificar a obra de referência intertextual: 'O Pensador' de Auguste Rodin.",
        "2. Reconhecer o procedimento retórico: Paródia (reapropriação com tom irônico e crítico).",
        "3. Confrontar os sentidos: Reflexão intelectual ativa versus rolagem passiva e mecânica de telas.",
        "4. Ler a legenda subvertida: 'O Rolador de Feed' ridiculariza a perda da consciência filosófica.",
        "5. Concluir que a paródia critica a alienação atencional provocada pelas plataformas digitais."
      ],
      coreConcept: "A paródia estabelece um choque intertextual entre uma referência cultural consolidada e uma situação degradada da atualidade, gerando humor crítico.",
      trapWarning: "Diferencie paródia (que altera o sentido com teor crítico, humorístico ou contestatório) de paráfrase (que reafirma as ideias originais com outras palavras)."
    },
    commonTraps: ["Confundir paródia crítica com mera homenagem reverente à obra clássica"],
    tags: ["parodia", "intertextualidade", "redes-sociais", "Rodin", "semiotica"]
  },
  {
    id: "LIN-SEM-005",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Polissemia e Ironia Linguística em Balões de Fala",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a charge a seguir:\nDois cidadãos estão parados em uma esquina de grande metrópole brasileira, diante de um semáforo quebrado e de um imenso buraco no asfalto aberto há meses. Um deles segura um jornal com a manchete em letras garrafais: 'GOVERNO ANUNCIA CORTE BRUSCO DE RECURSOS PARA CONTER ROMBO NAS CONTAS'. O segundo cidadão olha fixamente para a cratera intransitável na via pública e comenta em balão de fala: 'Curioso... aqui na nossa rua eles estão fazendo exatamente o contrário: deixando o rombo crescer para ver se o dinheiro aparece!'.",
      source: "Charge Editorial e Cotidiano Urbano"
    },
    prompt: "O efeito humorístico e a crítica social construídos na fala do segundo cidadão exploram linguisticamente a:",
    options: [
      { id: "a", text: "polissemia do vocábulo 'rombo', que transita entre o sentido figurado de déficit fiscal financeiro e o sentido concreto de cratera física na via urbana.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ambiguidade sintática decorrente da má colocação do pronome oblíquo no início da oração.", isCorrect: false, distractorRationale: "O recurso não decorre de erro sintático gramatical, mas do jogo semântico de múltiplos significados da palavra 'rombo'." },
      { id: "c", text: "metáfora estrita da velocidade do trânsito expressa no funcionamento do semáforo quebrado.", isCorrect: false, distractorRationale: "O semáforo compõe o cenário urbano caótico, mas a sacada linguística principal gira em torno do termo 'rombo'." },
      { id: "d", text: "substituição de um termo formal por uma gíria arcaica e intraduzível do século XIX.", isCorrect: false, distractorRationale: "A palavra 'rombo' é de uso corrente e pleno na língua portuguesa contemporânea." },
      { id: "e", text: "prosopopeia que atribui características humanas voluntárias ao asfalto danificado.", isCorrect: false, distractorRationale: "Não há personificação do asfalto; o cidadão ironiza a inércia dos gestores públicos locais." }
    ],
    detailedExplanation: {
      summary: "A polissemia consiste na propriedade de uma mesma palavra assumir múltiplos significados contextuais. Na manchete jornalística, 'rombo' possui sentido metafórico/econômico (déficit financeiro, rombo orçamentário). Na observação do pedestre diante da rua esburacada, 'rombo' é ressemantizado em seu sentido denotativo físico (cratera, buraco no chão). Esse duplo sentido confronta a linguagem macroeconômica do governo com a precariedade dos serviços públicos básicos enfrentados pelo cidadão comum.",
      stepByStep: [
        "1. Identificar o termo-chave repetido: a palavra 'rombo'.",
        "2. Analisar o primeiro sentido (na manchete): 'rombo nas contas' = déficit monetário nas finanças públicas.",
        "3. Analisar o segundo sentido (na rua): 'o rombo crescer' = buraco físico não reparado no asfalto.",
        "4. Reconhecer o fenômeno linguístico: Polissemia (duplicidade de sentidos intencional).",
        "5. Concluir que a ironia aproxima o descaso fiscal da precarização material da infraestrutura urbana."
      ],
      coreConcept: "A polissemia verbal combinada à imagem concreta cria o trocadilho inteligente que fundamenta a ironia de charges políticas.",
      trapWarning: "Cuidado para não confundir polissemia (mesma palavra com vários sentidos aparentados no contexto) com homonímia perfeita arbitrária sem conexão de sentido."
    },
    commonTraps: ["Classificar o trocadilho semântico polissêmico como erro de sintaxe ou ambiguidade involuntária"],
    tags: ["polissemia", "ironia", "duplo-sentido", "charge", "urbanismo"]
  },
  {
    id: "LIN-SEM-006",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Caricatura e Hipérbole Fisionômica",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A caricatura é uma linguagem visual de longa tradição que opera pela seleção, distorção e exagero metonímico de traços corporais, posturais ou psicológicos de uma personalidade pública notória. Ao retratar um governante autoritário em um desenho satírico, o caricaturista costuma desenhar a sua boca desmedidamente gigantesca (como um megafone ruidoso) e seus ouvidos microscópicos e obstruídos por tampões de cera.",
      source: "História da Ilustração Política e Semiótica Visual"
    },
    prompt: "Essa deformação anatômica hiperbólica na representação do governante tem como objetivo discursivo:",
    options: [
      { id: "a", text: "materializar visualmente a crítica ao perfil centralizador do político, caracterizado por discursos impositivos incessantes e total recusa ao diálogo e à escuta democrática.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "reproduzir com rigor fotográfico anatômico uma patologia médica congênita do rosto da figura retratada.", isCorrect: false, distractorRationale: "A caricatura opera pela alegoria simbólica e exagero satírico, não por retrato fidedigno médico." },
      { id: "c", text: "ocultar a verdadeira identidade do político para evitar perseguições e processos de censura legal.", isCorrect: false, distractorRationale: "A caricatura preserva o reconhecimento inequívoco da pessoa pública, destacando justamente seus traços marcantes." },
      { id: "d", text: "ensinar anatomia humana a crianças por meio de ilustrações lúdicas simplificadas.", isCorrect: false, distractorRationale: "O gênero em questão é a sátira política de imprensa voltada à cidadania e crítica social." },
      { id: "e", text: "atestar a incapacidade técnica do desenhista em desenhar proporções faciais harmoniosas.", isCorrect: false, distractorRationale: "A desproporção na caricatura é um procedimento retórico proposital e sofisticado da arte gráfica." }
    ],
    detailedExplanation: {
      summary: "A caricatura utiliza a figura de linguagem da HIPÉRBOLE VISUAL: ao agigantar a boca e miniaturizar/tampar os ouvidos, o desenhista cria uma síntese semiótica imediata de quem 'só fala e manda, mas não escuta ninguém'. A anatomia caricatural traduz o comportamento ético e político do indivíduo no espaço público.",
      stepByStep: [
        "1. Identificar o recurso expressivo: Caricatura e hipérbole (exagero figurado).",
        "2. Decodificar a boca gigante/megafone: fala autoritária, prolixa, impositiva, propaganda barulhenta.",
        "3. Decodificar os ouvidos minúsculos e vedados: insensibilidade aos anseios populares, recusa ao contraditório.",
        "4. Associar à crítica política: denúncia do autoritarismo e da falta de escuta democrática.",
        "5. Concluir que a deformação anatômica traduz uma postura comportamental tirânica."
      ],
      coreConcept: "A caricatura traduz características psicológicas, éticas ou políticas em traços visuais hiperbólicos imediatamente legíveis.",
      trapWarning: "A caricatura nunca é erro de desenho; é deformação consciente a serviço de um comentário crítico contundente."
    },
    commonTraps: ["Achar que a caricatura é apenas um desenho cômico ingênuo sem mensagem ideológica"],
    tags: ["caricatura", "hiperbole-visual", "satira-politica", "semiotica"]
  },
  {
    id: "LIN-SEM-007",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Enquadramento, Perspectiva e Relações de Poder no Cartum",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma charge sobre desigualdade social no Brasil, um trabalhador informal que empurra um carrinho de reciclagem é desenhado em plano picado (visto de cima para baixo), parecendo minúsculo, curvado e frágil no canto inferior da página. Em contrapartida, no plano de fundo, ergue-se a fachada espelhada de um prédio corporativo financeiro, desenhada em contra-plongée (vista de baixo para cima), ocupando quase todo o enquadramento e estendendo-se em direção ao céu com linhas verticais agressivas.",
      source: "Linguagem Cinematográfica e Semiótica do Espaço Gráfico"
    },
    prompt: "A escolha desses ângulos e enquadramentos visuais desempenha a função semiótica de:",
    options: [
      { id: "a", text: "enfatizar a assimetria brutal de poder e a opressão socioeconômica, apequenando a figura vulnerável do trabalhador perante a imponência esmagadora do capital corporativo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "comprovar a precisão geodésica da topografia da cidade para projetos de engenharia civil viária.", isCorrect: false, distractorRationale: "O desenho é artístico-crítico, não um levantamento topográfico técnico." },
      { id: "c", text: "sugerir que o trabalhador possui maior influência nas decisões públicas por estar mais próximo do solo.", isCorrect: false, distractorRationale: "O plano picado diminui e fragiliza o personagem, transmitindo opressão e subalternidade, e não poder." },
      { id: "d", text: "atender exclusivamente a critérios de simetria geométrica renascentista sem qualquer intenção ideológica.", isCorrect: false, distractorRationale: "A arte gráfica contemporânea utiliza ângulos deliberadamente carregados de sentido político e social." },
      { id: "e", text: "indicar que o catador de recicláveis é o proprietário majoritário das ações do edifício espelhado.", isCorrect: false, distractorRationale: "A imagem retrata o abismo entre a precariedade da sobrevivência informal e o topo da pirâmide financeira." }
    ],
    detailedExplanation: {
      summary: "Na gramática do design visual (Kress & van Leeuwen), as relações de perspectiva expressam relações de poder: o ângulo picado (olhar de cima para baixo sobre o trabalhador) conota subordinação, inferioridade, fragilidade e vulnerabilidade social. O ângulo contra-plongée (olhar de baixo para cima voltado para a torre corporativa) traduz imponência, poder intimidador e supremacia institucional. A composição gráfica reitera visualmente a estrutura desigual da sociedade.",
      stepByStep: [
        "1. Identificar o plano sobre o catador de recicláveis: 'plongée' (olhar de cima para baixo) -> diminui o sujeito, transmite impotência.",
        "2. Identificar o plano sobre o edifício corporativo: 'contra-plongée' (olhar de baixo para cima) -> engrandece o objeto, transmite autoridade/poder.",
        "3. Analisar o contraste de escala: fragilidade humana individual versus gigantismo monumental corporativo.",
        "4. Associar à temática: Desigualdade socioeconômica estrutural e exclusão.",
        "5. Concluir que as escolhas de enquadramento reforçam formalmente a denúncia de assimetria de poder."
      ],
      coreConcept: "Ângulos de visão carregam valor semiótico: visão de cima (plongée) apequena e submete; visão de baixo (contra-plongée) impõe autoridade e poder.",
      trapWarning: "Em questões do ENEM sobre arte e cartum, nenhum detalhe de enquadramento ou iluminação é gratuito; tudo participa da construção ideológica do texto."
    },
    commonTraps: ["Ignorar o significado simbólico do ângulo de visão na composição da imagem"],
    tags: ["enquadramento", "plongee", "contra-plongee", "desigualdade", "semiotica-visual"]
  },
  {
    id: "LIN-SEM-008",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Personificação e Alegoria da Burocracia Estatal",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição de um cartum satírico:\nUm cidadão comum entra em uma repartição pública para solicitar um benefício emergencial. Atrás do balcão, no lugar de um funcionário humano, senta-se um polvo gigantesco e cinzento cujos incontáveis tentáculos seguram, simultaneamente: carimbos emperrados, pilhas de formulários em papel vegetal, cadeados trancados, placas que dizem 'volte amanhã', carretéis de fita adesiva amarrando pastas de processos e uma placa apontando para o guichê seguinte, em um labirinto infinito.",
      source: "Sátira Institucional e Crítica da Burocracia"
    },
    prompt: "A figuração do polvo de incontáveis tentáculos emperrados opera na imagem como uma:",
    options: [
      { id: "a", text: "alegoria zoomórfica da burocracia estatal kafkiana, que paralisa o acesso a direitos e aprisiona o cidadão em uma teia labiríntica de entraves ineficazes.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "campanha de conscientização sobre a preservação dos cefalópodes nos ecossistemas marinhos costeiros.", isCorrect: false, distractorRationale: "O ambiente retratado é uma repartição pública com carimbos e papéis; o animal funciona como alegoria institucional." },
      { id: "c", text: "demonstração de alta agilidade e eficiência do setor público proporcionada pelo uso de múltiplos braços robóticos.", isCorrect: false, distractorRationale: "Os tentáculos seguram cadeados, placas de 'volte amanhã' e entraves, simbolizando lentidão e bloqueio, e não agilidade." },
      { id: "d", text: "celebração da informatização total dos processos judiciais por meio de inteligência biológica marinha.", isCorrect: false, distractorRationale: "A cena satiriza a persistência do papelório arcaico e da morosidade administrativa." },
      { id: "e", text: "crítica à alimentação servida aos servidores públicos nas copas das repartições estatais.", isCorrect: false, distractorRationale: "Interpretação literal absurda desprovida de sensibilidade semiótica." }
    ],
    detailedExplanation: {
      summary: "A representação zoomórfica é uma alegoria clássica: o polvo com tentáculos infinitos e carimbos corporifica a burocracia asfixiante (evocando o universo absurdo das obras de Franz Kafka). Em vez de servir e acolher o cidadão que busca um benefício essencial, a máquina estatal envolve-se em formalismos estéreis, protelações e labirintos que impedem a concretização da cidadania.",
      stepByStep: [
        "1. Identificar a imagem central: O polvo em lugar do atendente público.",
        "2. Listar os objetos que os tentáculos manuseiam: carimbos, cadeados, papéis, placas de 'volte amanhã'.",
        "3. Decodificar o sentido alegórico: A burocracia estatal que aprisiona e emperra a vida social.",
        "4. Relacionar com a tradição cultural: A crítica kafkiana aos labirintos administrativos inalcançáveis.",
        "5. Concluir que a alegoria zoomórfica denuncia a ineficiência e o distanciamento do Estado perante os direitos dos cidadãos."
      ],
      coreConcept: "A alegoria visual converte conceitos abstratos e complexos (como a burocracia estatal asfixiante) em imagens concretas carregadas de significado simbólico.",
      trapWarning: "Não faça leituras puramente literais ou naturalistas de elementos animais quando inseridos em cenários institucionais humanos."
    },
    commonTraps: ["Interpretar a presença do polvo de modo literal em vez de alegórico"],
    tags: ["alegoria", "burocracia", "Kafka", "cartum", "cidadania"]
  },
  {
    id: "LIN-SEM-009",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Intertextualidade Canônica com Monteiro Lobato e Crítica Social",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma tirinha satírica contemporânea, o personagem Jeca Tatu, clássico personagem da literatura brasileira criado por Monteiro Lobato, é desenhado sentado sobre uma cerca de arame farpado. Porém, em vez de carregar a clássica palha de milho na boca e queixar-se de verminoses como no conto original de 'Urupês', o Jeca contemporâneo está cercado por outdoors de monoculturas agroindustriais de soja transgênica com maquinários autônomos sem operador, e segura um smartphone sem sinal dizendo: 'Eles diziam que eu era preguiçoso... agora que a máquina faz tudo, nem preguiça me deixam ter, só desemprego!'.",
      source: "Leituras Críticas da Literatura Brasileira e Agropecuária Contemporânea"
    },
    prompt: "Ao atualizar a figura de Jeca Tatu para os tempos atuais, a tirinha ressignifica o discurso literário de Monteiro Lobato com o propósito de:",
    options: [
      { id: "a", text: "deslocar a responsabilidade da exclusão do campo do estigma moral da 'preguiça individual' para as transformações estruturais da modernização agrícola excludente e desemprego tecnológico.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "reafirmar que os trabalhadores rurais brasileiros continuam biologicamente indolentes e avessos ao trabalho produtivo moderno.", isCorrect: false, distractorRationale: "A tirinha desmente esse estigma preconceituoso, mostrando que o problema é estrutural e tecnológico." },
      { id: "c", text: "estimular a destruição de maquinários agrícolas para restaurar técnicas agrícolas arcaicas e manuais.", isCorrect: false, distractorRationale: "O texto propõe reflexão crítica sobre os impactos sociais da tecnologia, não vandalismo retrógrado." },
      { id: "d", text: "exaltar a chegada do sinal de internet de banda larga em todos os rincões rurais do território nacional.", isCorrect: false, distractorRationale: "O personagem segura o celular sem sinal, ilustrando também o isolamento e exclusão digital." },
      { id: "e", text: "provar que Monteiro Lobato era um defensor entusiasta da substituição do campesinato por monoculturas de exportação.", isCorrect: false, distractorRationale: "Lobato criticava a indolência como sintoma de doenças endêmicas preveníveis; a tirinha subverte a questão para a economia moderna." }
    ],
    detailedExplanation: {
      summary: "Na obra original de Lobato, o Jeca Tatu era inicialmente rotulado de 'preguiçoso' e depois redescoberto como vítima de doenças tropicais (ancilostomose). A tirinha contemporânea faz uma subversão crítica e intertextual: a marginalização do homem do campo hoje não decorre de doença ou desídia pessoal, mas da modernização conservadora do agronegócio de grande escala, que hipertecnifica as lavouras, expulsa a mão de obra camponesa e gera desemprego estrutural.",
      stepByStep: [
        "1. Identificar o personagem intertextual: Jeca Tatu de Monteiro Lobato.",
        "2. Identificar a acusação histórica original: 'Ele não é assim, ele está assim' / o estigma da preguiça.",
        "3. Analisar o novo contexto visual: Tratores autônomos, monocultura extensiva, cerca de arame farpado.",
        "4. Decodificar a fala irônica: 'agora que a máquina faz tudo... só desemprego!'.",
        "5. Concluir que a crítica recai sobre a modernização agrícola tecnificada que prescinde dos trabalhadores locais sem integrá-los."
      ],
      coreConcept: "A intertextualidade crítica reaproveita figuras da tradição literária para iluminar e problematizar contradições socioeconômicas do presente.",
      trapWarning: "Atenção: identifique a voz crítica da tirinha; ela desconstrói o estereótipo da indolência popular ao revelar a causa material da exclusão."
    },
    commonTraps: ["Achar que a tirinha concorda com a pecha de preguiça associada a Jeca Tatu"],
    tags: ["intertextualidade", "Jeca-Tatu", "literatura", "campo", "desemprego-tecnologico"]
  },
  {
    id: "LIN-SEM-010",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Humor Gráfico Mudo e Universalidade Semiótica",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição de um cartum sem nenhuma palavra escrita (cartum mudo):\nEm uma praia deserta, um náufrago solitário com roupas esfarrapadas e longa barba avista uma garrafa de vidro trazida pelas ondas do mar. Com esperança nos olhos de encontrar uma mensagem de socorro ou um mapa, ele apanha a garrafa, retira a rolha de cortiça e, em vez de um pergaminho de papel, encontra no interior da garrafa um panfleto publicitário com promoções de cartão de crédito e taxa de juros parcelada.",
      source: "Antologia de Humor Gráfico Sem Palavras"
    },
    prompt: "A ausência de texto verbal nesse cartum e a natureza do objeto encontrado no interior da garrafa revelam que o cartum mudo:",
    options: [
      { id: "a", text: "utiliza a linguagem puramente icônica e situacional para criticar a onipresença sufocante do consumismo e do assédio financeiro, capaz de invadir até o mais extremo refúgio de sobrevivência humana.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "fracassa como ato de comunicação por depender obrigatoriamente de legendas explicativas para ser compreendido por leitores leigos.", isCorrect: false, distractorRationale: "Cartuns mudos são plenamente compreensíveis e constituem o ápice da sofisticação da linguagem semiótica visual." },
      { id: "c", text: "propõe que o náufrago compre um bote salva-vidas parcelado no cartão de crédito encontrado.", isCorrect: false, distractorRationale: "O náufrago está em uma ilha deserta sem energia ou lojas; a proposta evidencia o absurdo da publicidade, não uma solução prática viável." },
      { id: "d", text: "demonstra o sucesso ecológico do vidro como recipiente hidrodinâmico de transporte oceânico.", isCorrect: false, distractorRationale: "A mensagem visa a crítica à mercantilização invasiva da existência humana, e não a hidrodinâmica do vidro." },
      { id: "e", text: "elogia a inclusão bancária de populações que residem em ilhas fluviais do território amazônico.", isCorrect: false, distractorRationale: "Trata-se de uma sátira de náufrago universal, e não de propaganda bancária governamental." }
    ],
    detailedExplanation: {
      summary: "O cartum mudo atinge alcance universal porque não depende de barreiras idiomáticas. Ao substituir a tradicional mensagem de socorro (signo de solidariedade e resgate humano em narrativas de náufrago) por uma publicidade agressiva de cartão de crédito e juros, o desenhista cria uma ironia mordaz sobre a sociedade contemporânea: o capitalismo financeiro tornou-se tão onipresente e intrusivo que alcança até os rincões mais desolados do planeta, oferecendo dívidas em vez de salvação.",
      stepByStep: [
        "1. Identificar o tipo textual: Cartum mudo (apenas linguagem não verbal/icônica).",
        "2. Identificar o clichê literário: O náufrago e a mensagem na garrafa (pedido de ajuda/salvação).",
        "3. Identificar o elemento disruptivo: O panfleto de cartão de crédito com taxas de juros dentro da garrafa.",
        "4. Articular a crítica: A invasão do marketing de consumo e da dívida financeira em todas as dimensões da vida.",
        "5. Concluir que a imagem opera com perfeição semiótica ao ridicularizar a ganância financeira onipresente."
      ],
      coreConcept: "Cartuns mudos constroem mensagens complexas através da subversão de símbolos universais e contrastes visuais inesperados.",
      trapWarning: "Lembre-se: texto verbal NÃO é requisito obrigatório para a existência de um texto; a imagem visual organiza-se como linguagem e texto autônomo."
    },
    commonTraps: ["Achar que a ausência de palavras enfraquece o poder comunicativo da mensagem"],
    tags: ["cartum-mudo", "semiotica-visual", "consumismo", "ironia", "universalidade"]
  },
  {
    id: "LIN-SEM-011",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Crítica à Polarização e Efeito Bolha nas Redes Sociais",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição de uma charge editorial sobre sociabilidade digital:\nDois grupos de pessoas estão desenhados dentro de duas bolhas de sabão transparentes, gigantes e separadas por um muro opaco. Cada indivíduo segura um autofalante conectado ao próprio celular e grita a plenos pulmões. O som das vozes reflete nas paredes internas da sua própria bolha, transformando-se em ecos ensurdecedores que retornam multiplicados aos seus próprios ouvidos. Na parte superior, um pequeno pássaro pousado no muro olha para os dois lados e solta um balão de pensamento contendo apenas um ponto de interrogação.",
      source: "Comunicação e Redes Sociais na Sociedade em Rede"
    },
    prompt: "A representação das bolhas com autofalantes que ecoam a própria voz constitui uma metáfora semiótica para o fenômeno das:",
    options: [
      { id: "a", text: "câmaras de eco algorítmicas, onde os indivíduos apenas ouvem opiniões idênticas às suas, retroalimentando certezas e bloqueando a empatia e o diálogo plural.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "falhas de cabeamento óptico que reduzem a velocidade da transmissão de sinais nas metrópoles.", isCorrect: false, distractorRationale: "O foco da crítica é sociopolítico e comportamental, não uma questão de infraestrutura física de cabos." },
      { id: "c", text: "vantagens pedagógicas da acústica moderna em salas de aula preparatórias para vestibulares.", isCorrect: false, distractorRationale: "A imagem não se passa em ambiente escolar e denuncia o isolamento hostil nas redes." },
      { id: "d", text: "estratégias de preservação de espécies de aves canoras em áreas urbanizadas.", isCorrect: false, distractorRationale: "O pássaro no muro atua como observador irônico e perplexo da tolice humana, não como tema biológico central." },
      { id: "e", text: "campanhas de incentivo ao uso de megafones para aumento da participação eleitoral direta.", isCorrect: false, distractorRationale: "O megafone é utilizado como símbolo do barulho estridente e estéril que não gera escuta real." }
    ],
    detailedExplanation: {
      summary: "A metáfora das 'bolhas de sabão' e dos 'autofalantes com eco interno' materializa com exatidão o conceito sociológico de CÂMARAS DE ECO (echo chambers) e bolhas de filtros digitais (Eli Pariser). Nas redes sociais, a mediação por algoritmos de engajamento confina os usuários a comunidades homogêneas onde todos compartilham os mesmos preconceitos e crenças, gerando polarização tóxica e incapacidade de convívio com a alteridade e o contraditório.",
      stepByStep: [
        "1. Analisar os significantes: Pessoas confinadas em bolhas de sabão separadas por muro.",
        "2. Analisar o circuito do som: O grito no autofalante ecoa de volta para quem gritou.",
        "3. Reconhecer o fenômeno sociológico: Câmaras de eco e isolamento cognitivo em redes digitais.",
        "4. Ler o signo do pássaro: Representação do bom senso externo atônito diante da irracionalidade da polarização.",
        "5. Concluir que a charge denuncia o empobrecimento do debate público gerado pelas bolhas informativas."
      ],
      coreConcept: "A imagem traduz o conceito de câmaras de eco digitais, em que o indivíduo confunde a repetição estridente de sua própria opinião com a verdade universal.",
      trapWarning: "Identifique o alvo da crítica: não é a tecnologia em si, mas a dinâmica psicossocial de autofechamento que destrói a deliberação democrática."
    },
    commonTraps: ["Ver a charge apenas como desenho sobre acústica e som sem perceber o conceito sociológico de bolha ideológica"],
    tags: ["camaras-de-eco", "redes-sociais", "polarizacao", "bolha", "metafora-visual"]
  },
  {
    id: "LIN-SEM-012",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Ironia sobre Hipervigilância e Privacidade de Dados",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma tira cômica moderna, um cidadão está em sua sala de estar escura e sussurra timidamente no ar: 'Nossa, que vontade de comer uma pizza de marguerita...'. No quadrinho seguinte, a campainha toca com violência. Ao abrir a porta, um entregador segura uma pizza quente e diz: 'Aqui está sua pizza! Foram 45 reais debitados automaticamente na sua conta digital!'. O cliente, pasmo, pergunta: 'Mas eu nem pedi nada no aplicativo!', e o entregador responde apontando para a lâmpada inteligente e a televisão: 'É que os seus eletrodomésticos inteligentes perceberam seu tom de voz e concluíram o pedido preventivamente!'.",
      source: "Capitalismo de Vigilância e Cibercultura"
    },
    prompt: "A situação inusitada apresentada na tirinha satiriza um aspecto marcante da sociedade atual, a saber:",
    options: [
      { id: "a", text: "o avanço intrusivo da vigilância algorítmica e da internet das coisas (IoT), que mercantiliza a privacidade e antecipa desejos com base no monitoramento contínuo da vida íntima.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a excelência do atendimento comercial das pizzarias tradicionais de bairro no Brasil.", isCorrect: false, distractorRationale: "O texto não elogia pizzarias; satiriza a perda assustadora de controle e autonomia pessoal perante dispositivos inteligentes." },
      { id: "c", text: "o despreparo culinário dos entregadores de aplicativos que não sabem preparar pratos caseiros.", isCorrect: false, distractorRationale: "O foco não é a preparação de alimentos, mas a coleta não autorizada de dados biométricos/áudio." },
      { id: "d", text: "o aumento generalizado das tarifas de energia elétrica provocado por lâmpadas de LED.", isCorrect: false, distractorRationale: "A lâmpada atua como sensor espião, sem nenhuma menção a contas de eletricidade." },
      { id: "e", text: "a superioridade moral dos pagamentos em dinheiro vivo sobre cartões de débito.", isCorrect: false, distractorRationale: "A crítica versa sobre a perda de privacidade e vigilância constante (Shoshana Zuboff), não sobre formas de pagamento em espécie." }
    ],
    detailedExplanation: {
      summary: "A tirinha problematiza com muito humor a teoria do 'Capitalismo de Vigilância' (Shoshana Zuboff): a proliferação de assistentes virtuais e eletrodomésticos conectados à 'Internet das Coisas' (smart TVs, lâmpadas, caixas de som inteligentes) que escutam permanentemente conversas privadas no interior dos lares para alimentar modelos preditivos de consumo comercial, suprimindo o livre-arbítrio e a privacidade humana.",
      stepByStep: [
        "1. Analisar o ato inicial: O personagem apenas verbalizou um pensamento íntimo em voz baixa em sua casa.",
        "2. Analisar a consequência imediata: A entrega não solicitada de comida e cobrança automatizada.",
        "3. Decodificar a justificativa do entregador: A escuta invisível promovida por eletrodomésticos 'inteligentes'.",
        "4. Relacionar com o debate contemporâneo: Vigilância algorítmica, perda de privacidade e invasão corporativa dos lares.",
        "5. Concluir que a tirinha critica a hipervigilância corporativa disfarçada de conveniência tecnológica."
      ],
      coreConcept: "A sátira à vigilância digital expõe a linha tênue entre a comodidade tecnológica prometida e a perda da soberania e privacidade individual.",
      trapWarning: "Cuidado: o tom humorístico exagera a rapidez da entrega para tornar evidente a gravidade do monitoramento comportamental abusivo."
    },
    commonTraps: ["Achar que a tirinha faz uma propaganda positiva da eficiência das entregas rápidas"],
    tags: ["vigilancia-digital", "privacidade", "algoritmos", "tirinha", "IoT"]
  },
  {
    id: "LIN-SEM-013",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Discurso Institucional versus Prática Real em Charges",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição de uma charge editorial de jornalismo investigativo:\nEm um palanque iluminado com holofotes e bandeiras, um orador engravatado discursa em tom solene diante de microfones da imprensa: 'Nosso compromisso com a transparência pública é inegociável, absoluto e cristalino!'. Enquanto profere essas palavras, a sombra projetada pelo palanque no chão revela que o orador segura com a mão esquerda, escondida atrás das costas, um pesado triturador de papel em funcionamento, destruindo maços de notas fiscais, contratos de licitação e discos rígidos de computadores.",
      source: "Sátira Política e Ética na Gestão Pública"
    },
    prompt: "O recurso semiótico determinante para a construção da crítica e do desmascaramento do orador nessa charge é o:",
    options: [
      { id: "a", text: "contraste intencional entre o discurso verbal oficial proclamado publicamente e a ação oculta revelada no plano visual pelas sombras da imagem.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "uso exclusivo de termos técnicos do direito administrativo na composição dos balões de fala.", isCorrect: false, distractorRationale: "O discurso verbal é retórico e genérico, não técnico, e a crítica nasce da denúncia visual oculta." },
      { id: "c", text: "tamanho reduzido das bandeiras patrióticas que decoram a bancada do evento.", isCorrect: false, distractorRationale: "As bandeiras são elementos secundários de ambientação institucional do palanque." },
      { id: "d", text: "fato de o triturador de papel funcionar com energia solar sustentável.", isCorrect: false, distractorRationale: "Não há menção a energia solar; o triturador é a ferramenta material da ocultação de provas e corrupção." },
      { id: "e", text: "tom de agradecimento afetuoso que o orador dirige aos jornalistas presentes no local.", isCorrect: false, distractorRationale: "A atitude do político visa iludir a opinião pública, contrastando com sua atitude criminosa nos bastidores." }
    ],
    detailedExplanation: {
      summary: "A charge explora a ironia por incongruência semiótica: de um lado, a linguagem verbal solene apregoa 'transparência cristalina'; de outro lado, a linguagem visual nas sombras revela a destruição clandestina de documentos comprometedores. Esse descompasso entre o que se fala (aparência) e o que se faz às escondidas (essência) é a marca clássica da sátira política ao cinismo governamental.",
      stepByStep: [
        "1. Analisar a dimensão verbal da charge: 'transparência pública inegociável, absoluta e cristalina'.",
        "2. Analisar a dimensão visual oculta nas sombras: O político triturando contratos e discos rígidos nas costas.",
        "3. Confrontar os dois códigos (verbal vs visual): Hipocrisia flagrante entre a fala moralista e o ato fraudulento.",
        "4. Reconhecer a função da sombra no desenho: Revelar a verdade inconfessável que o palanque tenta mascarar.",
        "5. Concluir que a denúncia reside no choque gritante entre o discurso retórico e a prática real."
      ],
      coreConcept: "A duplicidade verbo-visual desmascara a hipocrisia política quando o texto verbal afirma uma virtude e a imagem ilustra a sua transgressão deliberada.",
      trapWarning: "Observe atentamente o que está em primeiro plano e o que está nas sombras ou em segundo plano: charges frequentemente escondem o clímax da crítica nos cantos e sombras da imagem."
    },
    commonTraps: ["Acreditar no discurso verbal do orador sem correlacioná-lo com a ação visual nas sombras"],
    tags: ["discurso-politico", "hipocrisia", "sombra-visual", "charge", "transparencia"]
  },
  {
    id: "LIN-SEM-014",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Quebra de Paradigma e Protagonismo Feminino nas Tirinhas",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere uma tirinha protagonizada por uma jovem garota e sua mãe:\n• 1º quadrinho: A mãe entrega à filha uma caixa de presente cor-de-rosa dizendo: 'Aqui, filha! Um jogo completo de vassourinha, paninhos e ferro de passar para você brincar de casinha como as meninas sempre fizeram!'.\n• 2º quadrinho: A menina olha para o conteúdo da caixa com expressão de incredulidade, depois olha para o pai sentado no sofá assistindo à TV com os pés para cima.\n• 3º quadrinho: A garota entrega a caixa de brinquedo diretamente nas mãos do pai e diz com um sorriso sereno: 'Toma, papai! Ganhei um presente novinho para te ajudar a superar a infância sem treino doméstico e começar a dividir a faxina agora mesmo!'.",
      source: "Gênero, Sociedade e Desconstrução de Estereótipos nas Artes Visuais"
    },
    prompt: "A atitude da personagem no desfecho da tirinha produz um efeito cômico contestatório ao:",
    options: [
      { id: "a", text: "subverter os papéis tradicionais de gênero ensinados pela socialização patriarcal, cobrando a corresponsabilidade masculina na divisão do trabalho doméstico.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "desprezar o valor sentimental dos presentes ofertados pela mãe em comemorações familiares.", isCorrect: false, distractorRationale: "A atitude da menina não é de ingratidão pessoal, mas de recusa política ao estereótipo de gênero embutido no brinquedo." },
      { id: "c", text: "incentivar que crianças deixem de estudar para assumir integralmente a liderança da casa.", isCorrect: false, distractorRationale: "A menina justamente questiona o confinamento precoce das mulheres às lides domésticas." },
      { id: "d", text: "comprovar que pais de família são biologicamente incapazes de realizar tarefas de limpeza residencial.", isCorrect: false, distractorRationale: "A garota afirma expressamente que o pai pode e deve começar a fazer a faxina de imediato." },
      { id: "e", text: "exigir que brinquedos de plástico sejam substituídos por utensílios de cerâmica rústica.", isCorrect: false, distractorRationale: "O material do brinquedo é irrelevante para a discussão social de gênero levantada pela tira." }
    ],
    detailedExplanation: {
      summary: "A tirinha atua no campo da desconstrução ideológica de gênero: tradicionalmente, brinquedos de afazeres domésticos são direcionados exclusivamente a meninas para naturalizar a divisão sexual desigual do trabalho. Ao repassar o kit de limpeza infantil para o pai ocioso no sofá, a protagonista desconstrói essa expectativa cultural com ironia refinada, apontando a necessidade de divisão equitativa das tarefas de cuidado no ambiente familiar.",
      stepByStep: [
        "1. Analisar a situação inicial: A mãe reproduzindo a socialização tradicional de gênero por meio do brinquedo doméstico rosa.",
        "2. Analisar o contraste visual do 2º quadro: O pai descansando passivamente no sofá alheio às obrigações do lar.",
        "3. Decodificar a fala final da garota: Transferir o kit ao pai como oportunidade de aprendizado tardio da corresponsabilidade.",
        "4. Identificar o valor pedagógico e social: Crítica à divisão desigual do trabalho doméstico não remunerado.",
        "5. Concluir que a tirinha subverte com humor afiado o machismo estrutural cotidiano."
      ],
      coreConcept: "O humor gráfico utiliza a inteligência e a quebra de expectativa de personagens infantis para desmascarar convenções sociais preconceituosas arraigadas na cultura.",
      trapWarning: "Em questões do ENEM com temática de gênero, valorize sempre alternativas que apontem a superação de preconceitos, equidade e respeito aos direitos humanos."
    },
    commonTraps: ["Interpretar a atitude da menina como mera falta de educação filial"],
    tags: ["genero", "trabalho-domestico", "patriarcado", "tirinha", "direitos-humanos"]
  },
  {
    id: "LIN-SEM-015",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "A Metonímia Visual na Crítica à Fome e Desperdício",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o cartum descrito a seguir:\nO desenho é dividido verticalmente em dois ambientes simétricos separados por uma fina linha divisória preta:\n• No lado esquerdo, dentro de um restaurante de luxo envidraçado, vê-se uma mesa farta onde um cliente bem-vestido deixa intocada uma enorme travessa de alimentos frescos que o garçom recolhe para jogar diretamente na lixeira.\n• No lado direito, do lado de fora na calçada cinzenta da rua, uma criança franzina e descalça apoia as duas mãos no vidro transparente e olha fixamente para a lixeira do restaurante com os olhos arregalados, segurando um prato vazio que reflete a luz dos lustres interiores.",
      source: "Exposição Internacional de Artes Gráficas sobre Segurança Alimentar"
    },
    prompt: "A oposição visual simétrica construída pelo artista tem como objetivo sensibilizar o leitor para o escândalo ético do:",
    options: [
      { id: "a", text: "abismo da desigualdade alimentar, evidenciado pela convivência brutal entre o desperdício ostensivo de comida e a carência nutricional extrema da população famélica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "custo excessivo dos serviços de limpeza e descarte em restaurantes de alta gastronomia.", isCorrect: false, distractorRationale: "O cartum denuncia a fome e a desigualdade, não a logística financeira da coleta de lixo do restaurante." },
      { id: "c", text: "isolamento térmico propiciado pela espessura das vidraças blindadas nos grandes centros urbanos.", isCorrect: false, distractorRationale: "O vidro atua como metáfora de barreira social e indiferença, não de engenharia predial térmica." },
      { id: "d", text: "hábito alimentar de crianças em situação de rua que preferem comidas descartadas a cardápios elaborados.", isCorrect: false, distractorRationale: "Interpretação perversa e preconceituosa que ignora o sofrimento da vulnerabilidade alimentar." },
      { id: "e", text: "uso inadequado de pratos de porcelana em ambientes externos ao ar livre.", isCorrect: false, distractorRationale: "O prato vazio simboliza a falta de comida e a fome crônica, não etiqueta de louçaria." }
    ],
    detailedExplanation: {
      summary: "O recurso semiótico empregado é a ANTÍTESE VISUAL: a justaposição lado a lado de duas realidades contraditórias e irreconciliáveis. De um lado, a fartura e o desperdício fútil de alimentos; de outro, a fome infantil e a privação absoluta. O vidro transparente materializa a barreira invisível da exclusão econômica: a criança vê o alimento, mas está impedida de acessá-lo por uma ordem social que mercantiliza o direito à vida.",
      stepByStep: [
        "1. Analisar a estrutura da composição: Divisão binária do espaço gráfico (interior luxuoso vs exterior marginal).",
        "2. Identificar a antítese visual: Desperdício de comida na lixeira versus prato vazio na mão da criança com fome.",
        "3. Decodificar o signo da vidraça transparente: Proximidade física, porém abismo socioeconômico e indiferença social.",
        "4. Articular a crítica moral e política: A persistência inaceitável da fome estrutural ao lado da opulência e do descarte alimentar.",
        "5. Concluir que a imagem denuncia a contradição obscena entre fartura desperdiçada e miséria humana."
      ],
      coreConcept: "A antítese visual justapõe opostos no mesmo enquadramento para provocar indignação moral contra injustiças sociais evidentes.",
      trapWarning: "Identifique sempre o foco da denúncia nos cartuns sociais: o contraste não é estético, é ético e humanitário."
    },
    commonTraps: ["Deixar de relacionar os dois lados da imagem como partes de um mesmo sistema de desigualdade"],
    tags: ["antitese-visual", "desigualdade", "fome", "desperdicio", "direitos-humanos"]
  },
  {
    id: "LIN-SEM-016",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "A Função dos Balões de Fala e Signos Paralinguísticos",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas histórias em quadrinhos e tiras cômicas, o formato gráfico dos balões e os signos pontuais (como rabiscos cinéticos, gotas de suor voadoras, lâmpadas sobre a cabeça e nuvens pontilhadas) constituem uma rica gramática paralinguística visual. Em determinado quadrinho, a fala de uma personagem é envolvida por um balão com bordas pontiagudas irregulares em zigue-zague espinhoso e as letras internas aparecem em negrito pesado maiúsculo de tamanho desproporcional.",
      source: "Linguagem dos Quadrinhos e Semiótica Gráfica"
    },
    prompt: "Na convenção expressiva da linguagem dos quadrinhos, essa formatação visual do balão e da tipografia indica inequivocamente que a fala foi proferida:",
    options: [
      { id: "a", text: "em tom de grito enfurecido, ordem violenta ou som ensurdecedor de altíssima intensidade acústica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "como um pensamento sussurrado e íntimo que ninguém ao redor conseguiu ouvir.", isCorrect: false, distractorRationale: "Pensamentos íntimos são representados por balões em formato de nuvem com pequenas bolhas circulares de ligação." },
      { id: "c", text: "com hesitação tímida, tristeza melancólica e volume quase inaudível.", isCorrect: false, distractorRationale: "Sussurros ou fraqueza de voz são convencionalmente desenhados com linhas tracejadas ou letras minúsculas cinzentas." },
      { id: "d", text: "por uma voz eletrônica robótica sintetizada por cabos submarinos.", isCorrect: false, distractorRationale: "Vozes robóticas geralmente usam balões retangulares rígidos com cantos retos ou tipografia digital pixelada." },
      { id: "e", text: "em tom de canção de ninar relaxante para induzir o sono tranquilo de crianças.", isCorrect: false, distractorRationale: "Bordas espinhosas e letras gigantes em negrito traduzem agressividade acústica estridente, oposto de calma." }
    ],
    detailedExplanation: {
      summary: "Na semiótica das HQs, a forma do balão é análoga ao tom de voz oral. Balões redondos e lisos representam fala normal; balões tracejados representam sussurro; balões em forma de nuvem representam pensamento ou sonho; e balões pontiagudos com zigue-zague e fontes gigantes em caixa-alta (negrito) representam gritos, explosões vocais, ordens enérgicas ou pânico ensurdecedor.",
      stepByStep: [
        "1. Analisar o contorno do balão: Linhas pontiagudas em zigue-zague (arestas agudas).",
        "2. Analisar a tipografia: Letras maiúsculas grandes e em negrito.",
        "3. Decodificar a convenção semiótica: Aumento drástico do volume sonoro e carga emocional agressiva.",
        "4. Diferenciar de outros balões: Nuvem = pensamento; Tracejado = sussurro; Liso = fala coloquial.",
        "5. Concluir que a imagem expressa um grito ou comando estridente de fúria."
      ],
      coreConcept: "A tipografia e a forma física do balão traduzem visualmente as qualidades prosódicas da fala (altura, timbre, entonação e intensidade).",
      trapWarning: "Nunca confunda o balão de grito (pontiagudo) com o balão de pensamento (nuvem)."
    },
    commonTraps: ["Confundir balão de grito com balão de pensamento ou sussurro"],
    tags: ["baloes-de-fala", "linguagem-quadrinhos", "prosodia-visual", "semiotica"]
  },
  {
    id: "LIN-SEM-017",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Metáfora da Engrenagem e Desumanização do Trabalho",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição de um cartum contemporâneo sobre a precarização das relações trabalhistas:\nUm imenso relógio mecânico industrial opera com centenas de engrenagens de ferro dourado girando em ritmo frenético. Ao olhar com uma lupa de aumento entre dois dentes de ferro de uma das rodas dentadas centrais, descobre-se o corpo de um trabalhador comprimido, cujos braços e pernas servem de elos para manter o maquinário rodando. Do lado de fora da máquina, o ponteiro do relógio aponta para uma placa que substituiu os numerais convencionais pela frase: 'PRODUTIVIDADE 24/7'.",
      source: "Artes Visuais, Trabalho e Saúde Mental no Século XXI"
    },
    prompt: "A imagem do trabalhador transformado em peça minúscula do maquinário da engrenagem dialoga com o conceito de:",
    options: [
      { id: "a", text: "alienação e reificação do trabalho, no qual o ser humano perde sua condição de sujeito e é reduzido a mero instrumento descartável da máquina econômica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "plena realização da dignidade humana através da ginástica laboral realizada no interior de relógios industriais.", isCorrect: false, distractorRationale: "O trabalhador está preso e esmagado, o que evidencia degradação e sofrimento, e não saúde ou dignidade." },
      { id: "c", text: "exaltação dos avanços da relojoaria artesanal suíça na preservação de métodos renascentistas.", isCorrect: false, distractorRationale: "O relógio é metáfora da opressão temporal capitalista (produtividade ininterrupta), não elogio à manufatura suíça." },
      { id: "d", text: "obsolescência dos equipamentos industriais que necessitam de intervenção humana para lubrificação mecânica.", isCorrect: false, distractorRationale: "A imagem critica a submissão humana à lógica da produtividade sem fim, não falhas de manutenção de máquinas." },
      { id: "e", text: "recusa operária ao uso de relógios de pulso durante o intervalo intrajornada regulamentar.", isCorrect: false, distractorRationale: "Interpretação descontextualizada que ignora a teoria sociológica do trabalho alienado." }
    ],
    detailedExplanation: {
      summary: "A imagem evoca diretamente a clássica metáfora do filme 'Tempos Modernos' de Charlie Chaplin e a teoria crítica de Karl Marx e Lukács sobre a REIFICAÇÃO (coisificação do humano): o trabalhador deixa de ser um indivíduo pensante com direitos e passa a ser tratado como mera engrenagem substituível e descartável da engrenagem produtiva ininterrupta (24 horas por dia, 7 dias por semana).",
      stepByStep: [
        "1. Identificar o objeto central: Engrenagens mecânicas gigantes de um relógio com a meta 'Produtividade 24/7'.",
        "2. Identificar a posição do trabalhador: Comprimido entre os dentes das rodas, agindo como elo de ferro.",
        "3. Decodificar o conceito sociológico: Reificação e alienação (o humano transformado em peça mecânica de produção).",
        "4. Reconhecer a perda de autonomia: O tempo do capital devora a vida, o descanso e a subjetividade do trabalhador.",
        "5. Concluir que o cartum denuncia a desumanização gerada pela exigência de produtividade ininterrupta."
      ],
      coreConcept: "A reificação visual transforma pessoas em peças de máquinas para denunciar a perda da humanidade sob regimes de trabalho precarizados.",
      trapWarning: "A relação entre homem e máquina no humor crítico do ENEM quase sempre aborda alienação, esgotamento psíquico (burnout) ou desemprego estrutural."
    },
    commonTraps: ["Achar que a engrenagem é um símbolo positivo de integração harmoniosa entre homem e tecnologia"],
    tags: ["reificacao", "alienacao", "trabalho", "engrenagem", "Tempos-Modernos"]
  },
  {
    id: "LIN-SEM-018",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "Charge sobre Desmatamento e Falsa Sustentabilidade (Greenwashing)",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição de uma charge ambiental contemporânea:\nUm imenso trator de esteira com uma lâmina de corte monumental acaba de devastar quilômetros quadrados de floresta amazônica nativa, deixando para trás apenas tocos de árvores fumegantes e terra arrasada. No meio da devastação, operários da corporação fincam cuidadosamente uma placa verde reluzente que exibe o logotipo da empresa com uma folhinha estilizada e a inscrição: 'EMPRESA 100% AMIGA DA NATUREZA — COMPROMISSO VERDE ESG'. Ao lado, o motorista do trator toma um café em um copinho plástico descartável e diz: 'Pronto, chefe! Já plantamos a placa!'.",
      source: "Charge Editorial e Crítica Socioambiental"
    },
    prompt: "O humor ácido da charge atinge sua eficácia crítica ao ridicularizar a prática corporativa conhecida como:",
    options: [
      { id: "a", text: "greenwashing (maquiagem verde), caracterizada pelo uso de retórica e publicidade ambiental enganosa para camuflar práticas destrutivas ao meio ambiente.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "reflorestamento intensivo com espécies nativas de rápido crescimento biológico.", isCorrect: false, distractorRationale: "O desenho mostra desmatamento criminoso seguido da instalação de uma mera placa publicitária, sem plantio real de mudas." },
      { id: "c", text: "auditoria independente de créditos de carbono certificada por órgãos internacionais da ONU.", isCorrect: false, distractorRationale: "A charge ironiza justamente a falsidade e a ausência de compromisso ecológico genuíno." },
      { id: "d", text: "transição energética sustentável baseada em tratores elétricos desprovidos de emissão de gases.", isCorrect: false, distractorRationale: "A crítica recai sobre a hipocrisia do marketing verde em meio à destruição predatória da floresta." },
      { id: "e", text: "pesquisa botânica pioneira para catalogação de espécies vegetais em risco de extinção.", isCorrect: false, distractorRationale: "Os tratores estão destruindo a floresta, e não promovendo expedições de conservação botânica." }
    ],
    detailedExplanation: {
      summary: "A charge desmonta o fenômeno contemporâneo do 'greenwashing' (maquiagem verde): a estratégia publicitária cínica de empresas que adotam slogans ecológicos, logotipos com folhinhas e selos ESG para vender uma imagem sustentável, enquanto na prática continuam promovendo destruição ambiental em larga escala. A fala irônica 'Já plantamos a placa!' sintetiza o simulacro: a placa de sustentabilidade substitui a própria floresta derrubada.",
      stepByStep: [
        "1. Analisar o cenário visual: Destruição massiva de árvores por maquinário pesado de desmatamento.",
        "2. Analisar o texto da placa: 'Empresa 100% amiga da natureza — Compromisso Verde ESG'.",
        "3. Analisar a fala do operador: 'Já plantamos a placa!' (a placa como substituto cômico e trágico de uma árvore real).",
        "4. Nomear o conceito sociológico/mercadológico: Greenwashing (marketing verde enganoso e hipócrita).",
        "5. Concluir que a charge denuncia o abismo entre a retórica ecológica corporativa e a devastação real dos biomas."
      ],
      coreConcept: "Greenwashing é o uso fraudulento de propaganda ecológica para ocultar condutas ecologicamente destrutivas no mundo corporativo.",
      trapWarning: "Atente-se para a ironia cáustica da frase 'plantar a placa': plantar é ato gerador de vida vegetal; plantar placa é puro fetiche publicitário."
    },
    commonTraps: ["Não reconhecer o conceito de greenwashing por trás da propaganda ecológica hipócrita"],
    tags: ["greenwashing", "desmatamento", "meio-ambiente", "charge", "ESG"]
  },
  {
    id: "LIN-SEM-019",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "A Expressão Corporal e Cinética como Construção de Sentido",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma tira cômica de dois personagens conversando sobre ansiedade na modernidade:\nNo 1º quadrinho, um dos personagens diz pausadamente: 'Eu descobri a meditação zen... aprendi a desacelerar, silenciar os pensamentos caóticos e viver no presente absoluto...'.\nNo 2º quadrinho, a imagem mostra esse mesmo personagem desenhado com múltiplos braços borrados por linhas cinéticas de movimento rápido, sacudindo as pernas de forma descompassada, roendo as unhas com gotas de suor saltando da testa, enquanto checa simultaneamente três telas de celular e bebe café fervendo com os olhos saltando das órbitas.",
      source: "Linguagem Corporal e Semiótica das Histórias em Quadrinhos"
    },
    prompt: "O sentido pretendido pela tira é construído pelo conflito semiótico entre:",
    options: [
      { id: "a", text: "o relato verbal de serenidade e autocontrole e os índices visuais de agitação motora extrema que denunciam a incapacidade real do sujeito em desacelerar.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "duas correntes filosóficas orientais milenares que disputam adeptos nas metrópoles ocidentais.", isCorrect: false, distractorRationale: "A tira satiriza o comportamento neurótico do cidadão urbano contemporâneo, não disputas acadêmicas teológicas." },
      { id: "c", text: "a qualidade nutricional do café expresso em comparação aos benefícios relaxantes do chá de camomila.", isCorrect: false, distractorRationale: "O café atua como índice visual de taquicardia e ansiedade, sem foco nutricional gastronômico." },
      { id: "d", text: "a gramática do português arcaico em oposição aos neologismos introduzidos pelas redes sociais.", isCorrect: false, distractorRationale: "A linguagem verbal é coloquial padrão atual, sem arcaísmos." },
      { id: "e", text: "a precisão anatômica do desenho do corpo humano e as distorções exigidas pela pintura barroca.", isCorrect: false, distractorRationale: "O estilo visual é cartunesco de HQs, sem vínculo histórico com o Barroco." }
    ],
    detailedExplanation: {
      summary: "O humor e a crítica nascem da DISSONÂNCIA COGNITIVA VERBO-VISUAL: enquanto o texto verbal apregoa calmaria, meditação e presença zen, os códigos visuais paralinguísticos (linhas cinéticas de tremor, hiperatividade multitarefa, sudorese, olhar alucinado) evidenciam um indivíduo em colapso ansioso. A imagem desmente frontalmente a palavra, ironizando a 'paz de fachada' de quem tenta vender bem-estar enquanto sucumbe à neurose do excesso de estímulos.",
      stepByStep: [
        "1. Analisar a mensagem verbal: Discurso de calma, desapego, desaceleração e meditação zen.",
        "2. Analisar os índices visuais corporais: Linhas cinéticas de tremor, multitelas, taquicardia, pernas inquietas.",
        "3. Identificar o conflito semiótico: Incoerência flagrante entre o que se diz e o que o corpo faz.",
        "4. Ler a crítica comportamental: A futilidade dos discursos 'zen' perante a ansiedade crônica da vida hiperconectada.",
        "5. Concluir que a imagem opera como desmascaramento cômico da autodecepção do personagem."
      ],
      coreConcept: "Índices visuais cinéticos (linhas de movimento, tremor, suor) possuem peso semiótico igual ou superior ao texto verbal, sendo cruciais para revelar a verdade da cena.",
      trapWarning: "Quando verbo e visual parecem contraditórios, a intenção do autor é quase sempre a ironia ou a denúncia da hipocrisia/ilusão do sujeito."
    },
    commonTraps: ["Acreditar na fala do personagem e ignorar o colapso físico explícito no desenho"],
    tags: ["linguagem-corporal", "cinetica", "ansiedade", "ironia-verbo-visual", "tirinha"]
  },
  {
    id: "LIN-SEM-020",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "A Falsa Equivalência e o Negacionismo Científico em Charges",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição de uma charge sobre o debate público contemporâneo:\nEm um estúdio de televisão de um programa de debates, o apresentador acomoda dois debatedores em poltronas idênticas diante de uma bancada: de um lado, uma cientista renomada com diploma acadêmico, cercada por pilhas de relatórios laboratoriais revisados por pares e microscópios; do outro lado, um indivíduo segurando um chapéu de papel alumínio e um celular reproduzindo um vídeo aleatório de teor conspiratório na internet. O apresentador olha para a câmera com sorriso satisfeito e anuncia: 'Hoje ouviremos os dois lados com absoluta imparcialidade democrática: a verdade da ciência versus a convicção do internauta que pesquisou durante cinco minutos no banheiro!'.",
      source: "Mídia, Pós-Verdade e Desinformação na Esfera Pública"
    },
    prompt: "A charge satiriza a postura dos veículos de comunicação que, a pretexto de defender a 'isenção jornalística', cometem o equívoco comunicativo da:",
    options: [
      { id: "a", text: "falsa equivalência, que nivela o consenso científico rigorosamente verificado a opiniões e teorias conspiratórias infundadas, desinformando o público.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "censura prévia compulsória contra pesquisadores formados em universidades públicas federais.", isCorrect: false, distractorRationale: "A cientista está presente no programa; o problema não é o silenciamento dela, mas o nivelamento indevido com um negacionista." },
      { id: "c", text: "proibição legal de programas de televisão transmitidos com iluminação de estúdio profissional.", isCorrect: false, distractorRationale: "Interpretação sem fundamento sobre aspectos técnicos irrelevantes da emissora." },
      { id: "d", text: "superioridade epistemológica das redes sociais em relação aos métodos empíricos de laboratório.", isCorrect: false, distractorRationale: "A charge defende a seriedade da ciência e ridiculariza o conspiracionismo raso das redes." },
      { id: "e", text: "obrigatoriedade de debates eleitorais sem a presença de apresentadores humanos.", isCorrect: false, distractorRationale: "O apresentador é o alvo central da charge pelo seu critério deformado de 'equilíbrio'." }
    ],
    detailedExplanation: {
      summary: "A charge aborda a falácia da FALSA EQUIVALÊNCIA (ambiguidade de equilíbrio / false balance) na imprensa: a prática distorcida de tratar fatos científicos comprovados por décadas de evidências (vacinação, mudanças climáticas, formato esférico da Terra) e mitos conspiratórios gerados em bolhas digitais como se fossem 'duas opiniões igualmente respeitáveis e equivalentes'. Ao conceder o mesmo palanque com mesmo peso, a mídia legitima o obscurantismo e compromete a saúde pública.",
      stepByStep: [
        "1. Identificar o cenário: Estúdio de TV com formato de debate 'imparcial'.",
        "2. Identificar a debatedora 1: Pesquisadora com evidências, relatórios revisados por pares e microscópio.",
        "3. Identificar o debatedor 2: Conspiracionista com chapéu de alumínio e vídeo sensacionalista de celular.",
        "4. Ler a fala do âncora: Tratar o rigor metodológico e o delírio conspiratório como lados 'iguais'.",
        "5. Concluir que a charge critica o falso equilíbrio midiático que desinforma a sociedade em temas de ciência."
      ],
      coreConcept: "A falsa equivalência consiste em conferir o mesmo peso discursivo e legitimidade a argumentos cientificamente validados e a opiniões infundadas.",
      trapWarning: "Cuidado com o conceito de 'imparcialidade': em ciência, conceder paridade a fatos comprovados e boatos negacionistas não é jornalismo neutro, é desinformação."
    },
    commonTraps: ["Achar que a charge apoia o debatedor do celular sob o argumento da livre expressão"],
    tags: ["falsa-equivalencia", "negacionismo", "ciencia", "pos-verdade", "charge"]
  },
  {
    id: "LIN-SEM-021",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "A Expressividade das Cores e Contraste Cromático no Cartum",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma ilustração editorial sobre infância e cidades contemporâneas, o artista constrói a cena utilizando uma rigorosa paleta monocromática de tons de cinza, preto e concreto áspero para retratar edifícios gigantescos, avenidas congestionadas, fumaça de escapamentos e pedestres adultos apressados. No meio desse cenário sombrio e acinzentado, no único canteiro de terra sobrevivente em uma praça, uma menina agachada planta uma florzinha silvestre: a flor, as mãos da garotinha e o pedaço de terra são os únicos elementos desenhados em cores vibrantes, luminosas e saturadas (amarelo ouro, verde esmeralda e marrom fértil).",
      source: "Semiótica das Cores e Artes Visuais Contemporâneas"
    },
    prompt: "O uso seletivo da cor saturada em contraste com a atmosfera cinzenta circundante atua como recurso semiótico para:",
    options: [
      { id: "a", text: "simbolizar a resistência da vida, da esperança e da sensibilidade infantil perante a desumanização árida e a hostilidade sufocante da metrópole de concreto.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "atestar a falta de verba do jornal para imprimir o restante da página em cores completas.", isCorrect: false, distractorRationale: "O contraste cromático é uma escolha poética deliberada do artista, e não restrição orçamentária editorial." },
      { id: "c", text: "indicar que as plantas urbanas são venenosas e representam perigo tóxico para os pedestres.", isCorrect: false, distractorRationale: "A cor quente e luminosa conota vitalidade, afeto e esperança, oposto de toxicidade perigosa." },
      { id: "d", text: "comprovar que os edifícios modernos de concreto são ambientalmente autossuficientes e imunes à poluição.", isCorrect: false, distractorRationale: "O cinza simboliza justamente a degradação, o estresse e a asfixia ecológica da cidade cinzenta." },
      { id: "e", text: "demonstrar que a menina cometeu um ato infracional ao danificar o solo da via pública.", isCorrect: false, distractorRationale: "O gesto é poético e regenerador, simbolizando cuidado e preservação." }
    ],
    detailedExplanation: {
      summary: "A cor possui função semiótica primária na construção de sentido: a dessaturação e o acinzentado monocromático conotam monotonia, opressão mecânica, poluição e alienação da metrópole de concreto. A saturação cromática intensa e calorosa na criança e na flor ilumina o gesto de cuidado como um oásis de vida e resistência poética em meio à frieza hostil do ambiente construído.",
      stepByStep: [
        "1. Identificar o código cromático predominante: Cinza e preto monocromático (concreto, asfalto, fumaça, estresse).",
        "2. Identificar a exceção cromática (ponto focal): A criança, a flor e a terra em cores vibrantes e quentes.",
        "3. Decodificar o significado simbólico do contraste: Vida vs concreto; Esperança/infância vs asfixia/mecanização.",
        "4. Interpretar a mensagem ideológica: O afeto, a natureza e a pureza infantil como focos de resistência humana.",
        "5. Concluir que a seleção cromática é o motor central da poética visual da obra."
      ],
      coreConcept: "A oposição entre áreas monocromáticas e pontos de cor saturada direciona o olhar do leitor e estabelece uma hierarquia de valores éticos e emocionais na cena.",
      trapWarning: "Cores nunca são meramente 'decorativas' em artes visuais avaliadas no ENEM: elas dialogam diretamente com os temas da humanização e cidadania."
    },
    commonTraps: ["Achar que a cor é apenas enfeite estético sem carga semântica ou ideológica"],
    tags: ["semiotica-das-cores", "contraste-cromatico", "infancia", "cidade", "esperanca"]
  },
  {
    id: "LIN-SEM-022",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "A Tipografia como Recurso Expressivo e Ideológico",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma peça de cartum editorial sobre direitos trabalhistas, a palavra 'DEMOCRACIA' é desenhada com letras monumentais de pedra de mármore branco e base firme, ocupando o topo da imagem. Logo abaixo, a palavra 'DIREITOS' é desenhada com letras feitas de gelo fino derretendo rapidamente sob o sol causticante, com poças de água escorrendo pelos lados. No fundo do cartum, a palavra 'LUCRO' é desenhada com vigas de aço pesadas e pontiagudas, esmagando os pingos de gelo que se desfazem.",
      source: "Design Tipográfico e Semiótica da Palavra Visual"
    },
    prompt: "A materialidade atribuída às letras das diferentes palavras na composição visual transmite a ideia de que:",
    options: [
      { id: "a", text: "enquanto a democracia é proclamada como ideal abstrato permanente, os direitos sociais concretos dos trabalhadores estão em processo de rápida dissolução e precarização sob a pressão esmagadora do capital.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o gelo é um material mineral de maior resistência estrutural do que as vigas de aço temperado.", isCorrect: false, distractorRationale: "O gelo que derrete representa efemeridade e vulnerabilidade extrema, oposto de rigidez duradoura." },
      { id: "c", text: "todas as três palavras possuem exatamente a mesma estabilidade jurídica e política no ordenamento legal.", isCorrect: false, distractorRationale: "A diferença radical de materiais (mármore, gelo e aço) expressa desequilíbrio e contradição gritante." },
      { id: "d", text: "o mármore das instituições públicas é extraído exclusivamente de geleiras polares em desmoronamento.", isCorrect: false, distractorRationale: "Interpretação literal absurda desprovida de sensibilidade metafórica." },
      { id: "e", text: "as empresas modernas priorizam o bem-estar dos operários em detrimento de seus lucros trimestrais.", isCorrect: false, distractorRationale: "A palavra 'LUCRO' em aço esmaga os direitos, evidenciando a supremacia do ganho corporativo." }
    ],
    detailedExplanation: {
      summary: "A semiótica tipográfica confere textura e materialidade às palavras abstratas: 'Democracia' em mármore evoca o monumento formal e o discurso institucional pétreo; 'Direitos' em gelo derretendo traduz a fragilidade, volatilidade e perda contínua das conquistas trabalhistas; e 'Lucro' em aço blindado esmagador traduz a força material bruta e prioritária dos interesses econômicos sobre a vida dos cidadãos.",
      stepByStep: [
        "1. Analisar o significante de 'Democracia': Mármore (permanência formal, retórica institucional de fachada).",
        "2. Analisar o significante de 'Direitos': Gelo derretendo (vulnerabilidade, desmanche, perda rápida de conquistas).",
        "3. Analisar o significante de 'Lucro': Viga de aço pontiaguda (força material pesada, implacável e esmagadora).",
        "4. Sintetizar a relação entre os três elementos: O discurso democrático permanece de pé enquanto os direitos reais derretem e o lucro esmaga os trabalhadores.",
        "5. Concluir que a tipografia expressiva traduz as contradições sociais entre lei formal e exploração real."
      ],
      coreConcept: "A materialidade visual das letras (textura, solidez, efemeridade) transforma termos conceituais em metáforas imediatas de forças sociais em conflito.",
      trapWarning: "Preste atenção aos suportes e texturas das palavras: tipografia é imagem e comunica argumentos ideológicos poderosos."
    },
    commonTraps: ["Achar que a tipografia foi escolhida aleatoriamente pelo desenhista sem intenção crítica"],
    tags: ["tipografia", "materialidade", "direitos-sociais", "trabalho", "metafora-visual"]
  },
  {
    id: "LIN-SEM-023",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "A Farsa da Meritocracia e Metáforas de Corrida de Obstáculos",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição de uma charge famosa sobre desigualdade de oportunidades:\nUma pista de corrida de atletismo olímpico está montada diante de uma linha de chegada com a faixa que diz 'SUCESSO PROFISSIONAL'.\n• Na raia 1, um jovem branco de terno fino calça tênis de corrida de última geração e tem diante de si uma pista reta, plana, pavimentada e livre de qualquer obstáculo.\n• Na raia 2, uma jovem negra periférica corre descalça, carregando nos ombros um irmão menor no colo, com a pista repleta de fossos com jacarés, arames farpados, livros caros trancados em cofres e montanhas de contas atrasadas.\nAo lado da pista, um árbitro engravatado ergue a pistola de largada e grita: 'Atenção! A largada é rigorosamente igual para todos! Vença o mais esforçado pelo mérito próprio!'.",
      source: "Sátira Social e Debate sobre Ações Afirmativas e Desigualdade"
    },
    prompt: "A metáfora da corrida com pistas profundamente desiguais tem como finalidade discursiva primordial:",
    options: [
      { id: "a", text: "desmistificar a ideologia da meritocracia pura, demonstrando que as trajetórias de sucesso não dependem apenas do esforço individual, mas são condicionadas por desigualdades históricas de classe, raça e gênero.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "incentivar a prática de atletismo com obstáculos extremos para aumento do condicionamento físico escolar.", isCorrect: false, distractorRationale: "A pista é alegórica e serve à crítica social, sem finalidade desportiva física real." },
      { id: "c", text: "atestar a superioridade física e atlética de competidores descalços em competições de salto em distância.", isCorrect: false, distractorRationale: "A jovem está sobrecarregada por vulnerabilidades impostas, sem elogio à falta de recursos básicos." },
      { id: "d", text: "afirmar que o árbitro agiu com absoluta imparcialidade ética ao garantir que o tiro de largada ocorreu no mesmo segundo.", isCorrect: false, distractorRationale: "O árbitro personifica o cinismo institucional que ignora o abismo nas condições prévias de cada corredor." },
      { id: "e", text: "propor a extinção de tênis esportivos de marcas internacionais nos jogos olímpicos da juventude.", isCorrect: false, distractorRationale: "O tênis de marca é símbolo do capital material herdado pelas elites, sem proposta de boicote esportivo." }
    ],
    detailedExplanation: {
      summary: "Essa charge é um clássico semiótico do debate sobre justiça social e ações afirmativas: desconstrói a falácia da meritocracia ingênua. Dizer que 'todos têm as mesmas chances porque a largada foi ao mesmo tempo' é uma hipocrisia estrutural quando um concorrente parte de privilégios acumulados (pista livre e pavimentada) e o outro enfrenta barreiras socioeconômicas, de gênero e racismo estrutural (abismos, cuidados familiares pesados e falta de investimento).",
      stepByStep: [
        "1. Identificar o cenário alegórico: Pista de corrida esportiva com chegada no 'Sucesso Profissional'.",
        "2. Analisar as condições da Raia 1: Jovem privilegiado com pista livre e tênis tecnológico.",
        "3. Analisar as condições da Raia 2: Jovem vulnerável descalça com obstáculos materiais brutais e carga de cuidado.",
        "4. Ler a fala do árbitro: 'A largada é igual... vença pelo mérito' (ironia contra a igualdade puramente formal).",
        "5. Concluir que a charge fundamenta a necessidade de políticas públicas e ações afirmativas que corrijam assimetrias de partida."
      ],
      coreConcept: "A meritocracia torna-se um mito opressor quando ignora as desigualdades estruturais de ponto de partida entre diferentes grupos sociais.",
      trapWarning: "Em questões sobre meritocracia e cidadania no ENEM, a interpretação correta sempre problematiza a ausência de igualdade real de condições iniciais."
    },
    commonTraps: ["Interpretar a charge como se ela confirmasse a justiça da vitória do corredor da Raia 1"],
    tags: ["meritocracia", "desigualdade-social", "acoes-afirmativas", "charge", "cidadania"]
  },
  {
    id: "LIN-SEM-024",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "O Silenciamento Histórico e a Polifonia no Cartum",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição de um cartum histórico-editorial:\nUm pintor acadêmico do século XIX está em frente a uma tela gigante pintando uma versão triunfal da proclamação de uma grande vitória militar nacional. Na pintura, ele retrata generais a cavalo com espadas erguidas, fardas impecáveis reluzentes e medalhas de ouro. No entanto, o chão do ateliê onde o pintor pisa é formado pelos corpos amontoados, sem rosto e descalços, de milhares de soldados anônimos e pessoas escravizadas que tombaram no conflito real. O pintor, sem olhar para o chão, usa a tinta vermelha que escorre desses corpos para pintar as fitas comemorativas dos generais.",
      source: "Memória, História Oficial e Artes Visuais Críticas"
    },
    prompt: "O procedimento semiótico utilizado pelo cartunista expressa uma reflexão historiográfica sobre:",
    options: [
      { id: "a", text: "a construção das narrativas monumentais da história oficial, que celebram heróis da elite enquanto ocultam e instrumentalizam o sacrifício anônimo das classes subalternas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "as técnicas de pigmentação natural de tintas vermelhas derivadas do óxido de ferro nos ateliês oitocentistas.", isCorrect: false, distractorRationale: "O sangue nos corpos atua como denúncia da violência e espoliação histórica, não como receita de manufatura de tintas." },
      { id: "c", text: "a fidelidade documental e a neutralidade científica das pinturas históricas produzidas por encomenda estatal.", isCorrect: false, distractorRationale: "A cena evidencia que a pintura acadêmica era ideológica, manipuladora e seletiva, oposto de neutra." },
      { id: "d", text: "a necessidade urgente de restaurar molduras de ouro do patrimônio histórico nacional.", isCorrect: false, distractorRationale: "A discussão visa a disputa de memória e silenciamento dos oprimidos (Walter Benjamin), e não restauro de molduras." },
      { id: "e", text: "o valor estético superior das fardas militares bordadas à mão por alfaiates parisienses.", isCorrect: false, distractorRationale: "Interpretação fútil que ignora a trágica denúncia humanitária do cartum." }
    ],
    detailedExplanation: {
      summary: "O cartum ilustra a famosa tese de Walter Benjamin nas 'Teses sobre o Conceito de História': 'Nunca houve um monumento da cultura que não fosse também um monumento da barbárie'. A história oficial e os quadros monumentais celebram os generais e governantes da elite como heróis solitários, enquanto apagam o sangue e a vida dos soldados anônimos, negros, indígenas e trabalhadores explorados que foram a verdadeira bucha de canhão dos conflitos.",
      stepByStep: [
        "1. Identificar o ato retratado: O pintor compondo a versão heróica da história para a elite militar.",
        "2. Identificar a realidade oculta: Os corpos subalternos esmagados no chão servindo de matéria-prima (sangue/tinta).",
        "3. Decodificar o significado semiótico: A fabricação artificial da 'Glória Nacional' sobre a carne dos explorados.",
        "4. Relacionar com a crítica historiográfica: Quem escreve ou pinta a história oficial seleciona os heróis e apaga os oprimidos.",
        "5. Concluir que a obra problematiza a manipulação ideológica da memória e o silenciamento das classes populares."
      ],
      coreConcept: "A história oficial monumentaliza as elites e silencia o protagonismo e o sofrimento das massas anônimas subalternizadas.",
      trapWarning: "Pinturas históricas acadêmicas (como as da Proclamação da República ou Independência) não são 'fotografias do passado', mas construções ideológicas planejadas."
    },
    commonTraps: ["Acreditar que a pintura histórica de época retratava fielmente os acontecimentos sem manipulação ideológica"],
    tags: ["historia-oficial", "memoria", "Walter-Benjamin", "silenciamento", "cartum"]
  },
  {
    id: "LIN-SEM-025",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Semiótica e Humor Gráfico",
    subtopic: "A Dessensibilização Moral perante Tragédias e Telas",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição de um cartum editorial contundente:\nUma família está sentada diante de uma enorme tela de televisão em uma sala climatizada e elegante. Na tela, o telejornal exibe imagens ao vivo de uma terrível enchente com casas submersas e pessoas desalojadas acenando por socorro nos telhados. Em vez de manifestar solidariedade ou buscar canais de ajuda, o pai da família utiliza o controle remoto para ajustar o brilho e a resolução da tela dizendo com entusiasmo: 'Nossa, veja a qualidade do 4K! A lama e a dor das pessoas parecem tão nítidas e reais que parece que estamos lá! Pega mais pipoca, querida!'.",
      source: "Sociedade do Espetáculo e Semiótica da Violência Midiatizada"
    },
    prompt: "O comportamento da família retratado no cartum satiriza com acidez o fenômeno da:",
    options: [
      { id: "a", text: "espetacularização da dor e anestesia empática da sociedade contemporânea, que transforma tragédias humanas reais em mero entretenimento audiovisual hiper-realista para consumo passivo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "falta de receptores de sinal digital em cidades do interior que sofrem com inundações sazonais.", isCorrect: false, distractorRationale: "O problema denunciado não é técnico de transmissão, mas ético e comportamental perante o sofrimento alheio." },
      { id: "c", text: "alta eficácia das campanhas televisivas de doação de mantimentos a vítimas de catástrofes climáticas.", isCorrect: false, distractorRationale: "A família consome pipoca e elogia a resolução de imagem em vez de doar ou solidarizar-se." },
      { id: "d", text: "superioridade pedagógica do cinema nacional em relação aos telejornais de grandes emissoras.", isCorrect: false, distractorRationale: "A cena focaliza a recepção apática da audiência diante de notícias trágicas, sem comparação com cinema." },
      { id: "e", text: "necessidade de trocar televisores antigos por aparelhos com menor consumo de quilowatts-hora.", isCorrect: false, distractorRationale: "A crítica versa sobre a frieza moral e apatia social, e não sobre sustentabilidade de eletrodomésticos." }
    ],
    detailedExplanation: {
      summary: "O cartum evoca o conceito de 'Sociedade do Espetáculo' de Guy Debord e a análise de Susan Sontag em 'Diante da Dor dos Outros': a midiatização incessante de catástrofes em telas de altíssima definição tende a dessensibilizar os espectadores. Em vez de suscitar compaixão e mobilização solidária ativa, a dor alheia é estetizada e consumida com indiferença higienizada como mero espetáculo visual de lazer doméstico acompanhado de pipoca.",
      stepByStep: [
        "1. Analisar a cena: Família comendo pipoca em ambiente climatizado enquanto assiste à tragédia alheia ao vivo.",
        "2. Analisar o comentário do pai: Elogiar a nitidez 4K da lama e da dor em vez de condoer-se com as vítimas.",
        "3. Decodificar o recurso semiótico: A ironia cruel da estetização da tragédia humana.",
        "4. Relacionar com a teoria crítica: Debord (Sociedade do Espetáculo) e Sontag (anestesia diante da dor dos outros).",
        "5. Concluir que o cartum denuncia a perda da empatia e a banalização do sofrimento humano pela sociedade do espetáculo."
      ],
      coreConcept: "A estetização da violência e da tragédia transforma o sofrimento real em mercadoria de entretenimento, erodindo a capacidade de empatia e solidariedade da sociedade.",
      trapWarning: "Identifique o alvo do riso amargo: a sátira não zomba das vítimas da enchente, mas da desumanização dos espectadores que assistem à dor alheia como se fosse ficção."
    },
    commonTraps: ["Achar que o cartum critica as vítimas da enchente e não a apatia moral da família espectadora"],
    tags: ["sociedade-do-espetaculo", "empatia", "midia", "espetacularizacao", "cartum"]
  }
];
