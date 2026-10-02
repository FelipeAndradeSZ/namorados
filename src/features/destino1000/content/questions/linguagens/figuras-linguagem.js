export const QUESTIONS_FIGURAS_LINGUAGEM = [
  {
    id: 'LIN-FIG-001',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Figuras de Linguagem',
    subtopic: 'Metáfora e Comparação',
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O amor é um fogo que arde sem se ver;\nÉ ferida que dói, e não se sente;\nÉ um contentamento descontente;\nÉ dor que desatina sem doer.",
      source: "CAMÕES, L. Sonetos. São Paulo: Martin Claret, 2010."
    },
    prompt: "No célebre soneto de Camões, o autor busca conceituar um sentimento complexo por meio de imagens poéticas. No primeiro verso ('O amor é um fogo que arde sem se ver'), a relação estabelecida entre 'amor' e 'fogo' configura qual figura de linguagem e com que propósito?",
    options: [
      { text: "Metonímia, para substituir a causa do sofrimento pelo efeito que ele provoca.", isCorrect: false, distractorRationale: "A metonímia baseia-se numa relação de contiguidade (ex: a parte pelo todo), não numa interseção de características como ocorre aqui." },
      { text: "Comparação, pois utiliza um conectivo implícito para mostrar como o amor age de modo idêntico ao fogo real.", isCorrect: false, distractorRationale: "Se o conectivo fosse explícito ('O amor é como um fogo'), seria comparação. Como é direto ('O amor é um fogo'), é metáfora." },
      { text: "Metáfora, para afirmar uma identidade subjetiva e figurada baseada em características comuns (ardor, intensidade).", isCorrect: true, distractorRationale: "Correta. A metáfora ocorre quando há uma transferência de significado baseada na semelhança entre dois termos, afirmando algo através de uma substituição mental imediata, sem termo comparativo explícito." },
      { text: "Paradoxo, uma vez que é impossível cientificamente que um fogo seja invisível aos olhos.", isCorrect: false, distractorRationale: "O paradoxo existe no poema ('ferida que dói e não se sente'), mas o trecho destacado na questão foca na relação entre 'amor' e 'fogo', que é uma metáfora." },
      { text: "Hipérbole, para exagerar o poder destrutivo das relações românticas na vida humana.", isCorrect: false, distractorRationale: "Não há um exagero explícito nessa associação específica; trata-se de uma analogia subjetiva direta (metáfora)." }
    ],
    detailedExplanation: {
      summary: "A metáfora é uma comparação implícita, sem o uso de conectivos comparativos ('como', 'tal qual').",
      stepByStep: [
        "Passo 1: Analisar o trecho destacado: 'O amor é um fogo'.",
        "Passo 2: Perceber que se estabelece uma equivalência abstrata entre dois elementos de naturezas distintas (sentimento e elemento físico).",
        "Passo 3: Notar a ausência da partícula comparativa.",
        "Passo 4: Classificar a figura como metáfora."
      ],
      coreConcept: "Metáfora: Figura de palavra que consiste na substituição de um termo por outro por meio de uma relação de semelhança subentendida.",
      trapWarning: "Cuidado para não confundir com o Paradoxo, que está muito presente nos outros versos do poema. Atenha-se estritamente ao verso solicitado no enunciado."
    },
    tags: ['figuras de linguagem', 'metáfora', 'camões', 'poesia clássica']
  },
  {
    id: 'LIN-FIG-002',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Figuras de Linguagem',
    subtopic: 'Metonímia',
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a longa e exaustiva noite de estudos para a prova de Biologia, Beatriz, exausta, decidiu fazer uma pausa. Foi até a cozinha, bebeu dois copos de leite gelado, devorou três pratos de macarronada que haviam sobrado do almoço e leu mais um Machado de Assis para espairecer antes de dormir.",
      source: "Texto inédito."
    },
    prompt: "No texto acima, encontram-se várias ocorrências de uma mesma figura de linguagem que consiste na substituição de um termo por outro, baseando-se em uma relação lógica de contiguidade (proximidade). Essa figura de linguagem é evidenciada nas expressões:",
    options: [
      { text: "'noite de estudos' e 'pausa', configurando metáforas do esforço acadêmico.", isCorrect: false, distractorRationale: "Essas são expressões em sentido literal." },
      { text: "'bebeu dois copos' e 'leu mais um Machado de Assis', que representam casos de metonímia.", isCorrect: true, distractorRationale: "Correta. A personagem não bebeu o vidro do copo, mas o conteúdo (continente pelo conteúdo); e não leu o autor fisicamente, mas sim o livro que ele escreveu (autor pela obra). Isso é Metonímia." },
      { text: "'leite gelado' e 'macarronada', que constituem sinestesias por misturarem os sentidos do paladar e do tato.", isCorrect: false, distractorRationale: "As expressões são literais e não misturam planos sensoriais poeticamente." },
      { text: "'três pratos' e 'devorou', que são exemplos claros de hipérbole e prosopopeia.", isCorrect: false, distractorRationale: "'Três pratos' é metonímia (continente pelo conteúdo). 'Devorou' é força de expressão, mas prosopopeia seria dar vida a seres inanimados." },
      { text: "'espairecer antes de dormir', caracterizando um eufemismo para evitar falar sobre o cansaço.", isCorrect: false, distractorRationale: "'Espairecer' é usado em sentido próprio e não suaviza uma ideia desagradável de forma cifrada." }
    ],
    detailedExplanation: {
      summary: "A metonímia substitui uma palavra por outra devido a uma relação lógica entre elas (autor pela obra, continente pelo conteúdo, etc.).",
      stepByStep: [
        "Passo 1: Procurar no texto usos figurados baseados em relações lógicas e proximidade material.",
        "Passo 2: Identificar 'bebeu dois copos'. Literalmente bebe-se o líquido, então o recipiente (copo) substitui o conteúdo (leite).",
        "Passo 3: Identificar 'leu um Machado de Assis'. O autor substitui a obra.",
        "Passo 4: Confirmar que essas relações de contiguidade recebem o nome de Metonímia."
      ],
      coreConcept: "Metonímia: Substituição lógica (autor pela obra, continente pelo conteúdo, marca pelo produto, parte pelo todo).",
      trapWarning: "Metáfora é baseada em semelhança (analogia), enquanto a Metonímia é baseada em relação lógica/material."
    },
    tags: ['figuras de linguagem', 'metonímia']
  },
  {
    id: 'LIN-FIG-003',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Figuras de Linguagem',
    subtopic: 'Antítese vs. Paradoxo',
    difficulty: 4,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Texto I\nO mito é o nada que é tudo. \n(Fernando Pessoa, Mensagem)\n\nTexto II\nA educação não tem preço, mas o seu custo social na falta dela é muito alto. Em um mesmo país convivem a riqueza ostensiva de poucos e a miséria absoluta de muitos.",
      source: "Adaptado."
    },
    prompt: "A oposição de ideias é um recurso recorrente na literatura e na argumentação. Comparando os dois textos, observa-se que as figuras de linguagem neles empregadas baseadas na oposição são, respectivamente:",
    options: [
      { text: "Antítese em ambos, pois contrapõem palavras com sentidos contrários no mesmo enunciado.", isCorrect: false, distractorRationale: "O texto I não apenas contrapõe, mas funde opostos na mesma entidade simultaneamente, o que gera uma aparente contradição ilógica (paradoxo)." },
      { text: "Paradoxo no Texto I e Antítese no Texto II.", isCorrect: true, distractorRationale: "Correta. No Texto I, 'nada' e 'tudo' referem-se à mesma coisa ('o mito') simultaneamente, criando um absurdo lógico que guarda uma verdade poética (Paradoxo). No Texto II, 'riqueza' e 'miséria' referem-se a sujeitos diferentes ('poucos' e 'muitos'), apenas contrastando duas realidades que podem coexistir (Antítese)." },
      { text: "Antítese no Texto I e Paradoxo no Texto II.", isCorrect: false, distractorRationale: "A inversão dos conceitos. O Texto I é paradoxo e o Texto II é antítese." },
      { text: "Ironia no Texto I e Metáfora no Texto II.", isCorrect: false, distractorRationale: "Não há afirmação dizendo o oposto do que se pensa (ironia) nem metáfora centrada na oposição." },
      { text: "Paradoxo em ambos, uma vez que a coexistência de riqueza e miséria na mesma sociedade é logicamente impossível.", isCorrect: false, distractorRationale: "É uma injustiça social, mas é perfeitamente possível e lógico que ambas existam separadamente em locais ou pessoas diferentes na mesma sociedade. Logo, o Texto II é apenas antítese." }
    ],
    detailedExplanation: {
      summary: "Antítese é a aproximação de palavras opostas. Paradoxo (ou oxímoro) é a fusão de ideias opostas aplicadas à mesma coisa simultaneamente, gerando uma contradição lógica.",
      stepByStep: [
        "Passo 1: Avaliar o Texto I. 'O mito é o nada' e também 'é tudo'. Ser nada e tudo ao mesmo tempo desafia a lógica material. Trata-se de um Paradoxo.",
        "Passo 2: Avaliar o Texto II. Temos 'riqueza' de um lado (poucos) e 'miséria' de outro (muitos). São palavras opostas colocadas lado a lado, mas não criam conflito lógico. Trata-se de Antítese."
      ],
      coreConcept: "Paradoxo vs Antítese: Se as duas ideias opostas não podem ser verdade ao mesmo tempo para o mesmo sujeito (gera quebra de lógica), é Paradoxo. Se elas apenas contrastam, sendo aplicadas a alvos diferentes, é Antítese.",
      trapWarning: "Tome cuidado: todo paradoxo contém uma antítese dentro dele (palavras opostas), mas nem toda antítese chega a formar um paradoxo (contradição lógica de sentido)."
    },
    tags: ['figuras de linguagem', 'paradoxo', 'antítese']
  },
  {
    id: 'LIN-FIG-004',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Figuras de Linguagem',
    subtopic: 'Prosopopeia/Personificação',
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A lua estava tão triste naquela noite de inverno que escondeu seu rosto pálido atrás de um manto espesso de nuvens cinzentas, recusando-se a testemunhar o fim daquele longo romance.",
      source: "Texto inédito."
    },
    prompt: "O texto utiliza recursos figurados para conferir maior lirismo à descrição de uma noite. A atribuição de sentimentos ('triste'), ações humanas conscientes ('escondeu seu rosto', 'recusando-se a testemunhar') a um corpo celeste (a lua) configura a figura de linguagem conhecida como:",
    options: [
      { text: "Sinestesia.", isCorrect: false, distractorRationale: "Sinestesia é a mistura de percepções sensoriais (visão, audição, etc.)." },
      { text: "Eufemismo.", isCorrect: false, distractorRationale: "Eufemismo é a suavização de uma ideia grosseira ou pesada." },
      { text: "Hipérbole.", isCorrect: false, distractorRationale: "Hipérbole é um exagero intencional ('chorei rios de lágrimas')." },
      { text: "Prosopopeia.", isCorrect: true, distractorRationale: "Correta. A prosopopeia (ou personificação) consiste em atribuir características, sentimentos ou ações de seres humanos/animados a seres inanimados ou irracionais." },
      { text: "Gradação.", isCorrect: false, distractorRationale: "Gradação é a apresentação de ideias em progressão crescente ou decrescente." }
    ],
    detailedExplanation: {
      summary: "Prosopopeia (ou personificação) é dar vida e características humanas a coisas não humanas.",
      stepByStep: [
        "Passo 1: Observar o sujeito da frase: 'A lua'. É um corpo celeste inanimado.",
        "Passo 2: Observar as ações e adjetivos aplicados à lua: ela estava 'triste', 'escondeu o rosto', e 'recusou-se'.",
        "Passo 3: Perceber que essas são características exclusivas de seres humanos (ou seres com consciência).",
        "Passo 4: Identificar a figura como prosopopeia/personificação."
      ],
      coreConcept: "Prosopopeia (Personificação): Atribuir características humanas a seres irracionais, inanimados ou abstratos.",
      trapWarning: "Em provas do ENEM, os dois termos — prosopopeia e personificação — são aceitos como sinônimos exatos."
    },
    tags: ['figuras de linguagem', 'prosopopeia', 'personificação']
  },
  {
    id: 'LIN-FIG-005',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Figuras de Linguagem',
    subtopic: 'Ironia',
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Moça linda, bem tratada,\nTrês séculos de família,\nBurra como uma porta:\nUm amor.\n\nGarçom, um chope.",
      source: "ANDRADE, M. de. Poesias completas. São Paulo: Martins Fontes, 1987."
    },
    prompt: "O poema modernista de Mário de Andrade descreve uma mulher com traços de classe social elevada. No entanto, a construção dos versos desestabiliza a aparente admiração inicial. A figura de pensamento que se evidencia ao final da primeira estrofe e subverte o sentido literal das palavras anteriores é a:",
    options: [
      { text: "Gradação, por construir uma escada de elogios que culmina na palavra 'amor'.", isCorrect: false, distractorRationale: "A expressão 'burra como uma porta' quebra qualquer gradação de elogios e revela o tom jocoso do poema." },
      { text: "Metáfora, pois 'porta' substitui de forma inovadora o conceito de beleza feminina.", isCorrect: false, distractorRationale: "'Burra como uma porta' é, na verdade, uma comparação cristalizada (símile), mas o eixo central do deboche e subversão é outra figura." },
      { text: "Ironia, que se consolida quando o eu lírico conclui a descrição grotesca chamando a moça de 'Um amor'.", isCorrect: true, distractorRationale: "Correta. A ironia consiste em afirmar algo buscando transmitir exatamente o sentido oposto, em tom de sarcasmo. Após chamá-la de 'burra', dizer que ela é 'um amor' é claramente um recurso irônico para criticar a futilidade da elite." },
      { text: "Sinestesia, decorrente da mistura entre a visão ('linda') e o paladar ('chope').", isCorrect: false, distractorRationale: "O chope e a moça pertencem a momentos diferentes do poema, não havendo mistura sensorial na mesma expressão." },
      { text: "Hipérbole, por conta da expressão exagerada 'três séculos de família'.", isCorrect: false, distractorRationale: "Embora haja um exagero hiperbólico na duração cronológica, a figura que subverte a lógica da admiração superficial é a ironia contida em 'Um amor'." }
    ],
    detailedExplanation: {
      summary: "A ironia consiste em usar uma expressão que sugere, no contexto, o exato oposto de seu significado literal, quase sempre com tom crítico ou cômico.",
      stepByStep: [
        "Passo 1: Analisar os atributos dados à moça: 'linda', 'bem tratada', com pedigree histórico ('três séculos').",
        "Passo 2: Observar a quebra brusca de expectativa no terceiro verso: 'Burra como uma porta'.",
        "Passo 3: Avaliar a conclusão da estrofe: 'Um amor'. Dado que acabou de chamá-la de extremamente burra, o poeta não acredita literalmente que ela seja um amor ideal.",
        "Passo 4: Concluir que a discordância entre o que é dito e o que se pretende comunicar é a marca da Ironia."
      ],
      coreConcept: "Ironia: Afirmar o contrário do que se pensa, resultando em um sentido sarcástico ou crítico.",
      trapWarning: "A ironia só funciona se o leitor estiver atento ao contexto e à quebra de expectativa. O poema é uma crítica à alta burguesia vazia de intelecto."
    },
    tags: ['figuras de linguagem', 'ironia', 'modernismo']
  },
  {
    id: 'LIN-FIG-006',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Figuras de Linguagem',
    subtopic: 'Eufemismo',
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Comunicado de imprensa da Prefeitura:\n'Informamos que, devido aos ajustes orçamentários necessários para o próximo semestre, ocorrerão realocações no quadro de servidores e alguns de nossos colaboradores mais antigos buscarão novas oportunidades no mercado de trabalho, finalizando seu ciclo de contribuição para com este município.'",
      source: "Texto inédito."
    },
    prompt: "O texto corporativo é conhecido por suavizar informações duras ou desagradáveis para minimizar o impacto negativo no público. No trecho 'alguns de nossos colaboradores mais antigos buscarão novas oportunidades [...] finalizando seu ciclo', há uma nítida tentativa de não empregar a palavra 'demissão'. Essa atenuação conceitual caracteriza a figura de linguagem:",
    options: [
      { text: "Paradoxo.", isCorrect: false, distractorRationale: "Não há ideias contraditórias simultâneas; apenas uma verdade contada de forma suave." },
      { text: "Eufemismo.", isCorrect: true, distractorRationale: "Correta. O Eufemismo é a figura que consiste no abrandamento ou na suavização de uma mensagem triste, chocante, ou indelicada (ex: usar 'partiu dessa para melhor' em vez de 'morreu', ou 'buscar novas oportunidades' em vez de 'foi demitido')." },
      { text: "Antítese.", isCorrect: false, distractorRationale: "Não há contraste direto de palavras opostas (como entrada e saída)." },
      { text: "Hipérbole.", isCorrect: false, distractorRationale: "Hipérbole seria o exagero ('demitimos milhões de pessoas'), o que é o exato oposto do objetivo do texto, que é diminuir o impacto." },
      { text: "Metonímia.", isCorrect: false, distractorRationale: "Não há substituição de uma palavra por outra baseada em relação material ou lógica como continente/conteúdo." }
    ],
    detailedExplanation: {
      summary: "O Eufemismo suaviza ideias ou expressões desagradáveis.",
      stepByStep: [
        "Passo 1: Entender a mensagem real do comunicado: funcionários estão sendo demitidos.",
        "Passo 2: Observar a forma polida e diplomática como a mensagem foi escrita ('buscarão novas oportunidades', 'finalizando seu ciclo').",
        "Passo 3: Identificar a intenção comunicativa: diminuir o tom agressivo e negativo da palavra 'demissão'.",
        "Passo 4: Classificar o recurso estilístico como Eufemismo."
      ],
      coreConcept: "Eufemismo: Atenuação ou suavização de um termo considerado pesado, chulo ou agressivo.",
      trapWarning: "Linguagem corporativa (o famoso 'corporatês') é rica em eufemismos para maquiar más notícias (ex: 'descontinuação' no lugar de 'fim/falência', 'crescimento negativo' para 'prejuízo')."
    },
    tags: ['figuras de linguagem', 'eufemismo', 'textos corporativos']
  },
  {
    id: 'LIN-FIG-007',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Figuras de Linguagem',
    subtopic: 'Hipérbole',
    difficulty: 1,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Mensagem de WhatsApp:\n'Felipe, cadê você?! Eu já te liguei um bilhão de vezes, tô morrendo de fome! O restaurante vai fechar e eu tô congelando aqui fora esperando. Vem logo pelo amor de Deus!'",
      source: "Texto inédito."
    },
    prompt: "A mensagem acima, comum em interações do dia a dia, utiliza um recurso retórico clássico para expressar a impaciência e a urgência do emissor. Expressões como 'liguei um bilhão de vezes', 'morrendo de fome' e 'congelando' configuram a figura de linguagem denominada:",
    options: [
      { text: "Hipérbole, por consistirem em exageros intencionais usados para enfatizar o estado e a aflição do emissor.", isCorrect: true, distractorRationale: "Correta. A hipérbole ocorre quando a realidade é exagerada de forma irreal para gerar um impacto expressivo na comunicação (ninguém liga literalmente um bilhão de vezes, nem está clinicamente morrendo de fome naquele instante)." },
      { text: "Ironia, pois o falante não estava com fome de verdade e usou de sarcasmo para ofender o destinatário.", isCorrect: false, distractorRationale: "O texto demonstra aflição real, não há sarcasmo ou significado oposto sendo empregado." },
      { text: "Sinestesia, porque ocorre a fusão da sensação térmica do frio ('congelando') com o paladar ('fome').", isCorrect: false, distractorRationale: "Essas sensações estão em orações separadas e independentes; elas não estão fundidas poeticamente (ex: 'uma fome gelada')." },
      { text: "Metonímia, já que a parte ('um bilhão de vezes') substitui o todo das ligações reais efetuadas.", isCorrect: false, distractorRationale: "Substituir o real por um número inalcançável não é relação lógica de contiguidade, é simplesmente exagero." },
      { text: "Eufemismo, pois buscam suavizar a cobrança agressiva feita a Felipe.", isCorrect: false, distractorRationale: "Pelo contrário, as expressões acentuam e dramatizam a cobrança, não a suavizam." }
    ],
    detailedExplanation: {
      summary: "Hipérbole é o emprego de expressões que exageram a realidade para enfatizar uma ideia.",
      stepByStep: [
        "Passo 1: Identificar as marcas do texto: 'bilhão de vezes', 'morrendo', 'congelando'.",
        "Passo 2: Contrastar essas afirmações com a realidade lógica e física (é impossível o telefone registrar um bilhão de ligações em tão pouco tempo).",
        "Passo 3: Reconhecer a intenção: magnificar, aumentar drasticamente a gravidade da situação para chamar a atenção.",
        "Passo 4: Nomear a figura como hipérbole."
      ],
      coreConcept: "Hipérbole: Exagero intencional e expressivo (ex: chorar rios de lágrimas, estourar de rir).",
      trapWarning: "Na fala coloquial, a hipérbole é tão comum que muitas vezes nem percebemos que estamos usando uma figura de linguagem."
    },
    tags: ['figuras de linguagem', 'hipérbole', 'coloquialismo']
  },
  {
    id: 'LIN-FIG-008',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Figuras de Linguagem',
    subtopic: 'Gradação',
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O trigo... nasceu, cresceu, espigou, amadureceu, colheu-se, mediu-se, encheu os celeiros, saciou a fome dos povos, e sobrou.\n(Padre Antônio Vieira, Sermões)",
      source: "VIEIRA, A. Sermões."
    },
    prompt: "No trecho do Padre Antônio Vieira, a apresentação dos fatos não ocorre de forma aleatória. Os verbos são dispostos em uma sequência lógica que acompanha o desenvolvimento biológico e utilitário do trigo. Essa ordenação sequencial, que vai ampliando o sentido e o alcance da ideia passo a passo, recebe o nome de:",
    options: [
      { text: "Prosopopeia, visto que o trigo é tratado como um ser humano e independente.", isCorrect: false, distractorRationale: "Nascer e crescer são verbos próprios também para plantas (seres animados biologicamente); não há traços exclusivamente humanos na descrição." },
      { text: "Antítese, pois as etapas de nascer e ser colhido (morrer) revelam ideias diametralmente opostas e conflituosas.", isCorrect: false, distractorRationale: "O texto não foca no conflito ou oposição das palavras, mas na progressão natural temporal entre elas." },
      { text: "Gradação, por estruturar uma série de palavras em ordem crescente ou sucessiva de evolução temporal e espacial.", isCorrect: true, distractorRationale: "Correta. A gradação (ou clímax) ocorre quando as ideias são dispostas em uma sequência, seja crescente (do mais simples ao mais complexo, ou menor para o maior) ou decrescente, criando um efeito de progressão contínua." },
      { text: "Paradoxo, uma vez que não é possível o trigo saciar os povos e ainda sobrar na mesma colheita.", isCorrect: false, distractorRationale: "É perfeitamente possível haver sobra de estoque após alimentar a população, logo não há rompimento de lógica." },
      { text: "Ironia, porque o orador deboca da fartura num cenário histórico de miséria.", isCorrect: false, distractorRationale: "No contexto do Vieira, o trigo era analogia para a palavra de Deus; não há sarcasmo na passagem." }
    ],
    detailedExplanation: {
      summary: "A gradação é a disposição de palavras ou ideias em progressão crescente (clímax) ou decrescente (anticlímax).",
      stepByStep: [
        "Passo 1: Observar a lista de verbos apresentada por vírgulas: nasceu, cresceu, espigou, amadureceu, colheu-se...",
        "Passo 2: Notar que não são verbos aleatórios. Eles seguem uma linha do tempo perfeita (do plantio à distribuição continental).",
        "Passo 3: Perceber que a intensidade da ação cresce: vai de uma semente minúscula (nasceu) para a escala planetária (saciou povos).",
        "Passo 4: Identificar a figura como gradação crescente."
      ],
      coreConcept: "Gradação: Apresentação de ideias em cadeia ou escala evolutiva (crescente ou decrescente).",
      trapWarning: "Sempre que observar listas longas de verbos ou substantivos separados por vírgula em uma prova, verifique se eles indicam um aumento ou diminuição de intensidade; se sim, é gradação."
    },
    tags: ['figuras de linguagem', 'gradação', 'barroco', 'padre antônio vieira']
  },
  {
    id: 'LIN-FIG-009',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Figuras de Linguagem',
    subtopic: 'Sinestesia',
    difficulty: 4,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "E um doce perfume verde invadiu a sala,\nTrazendo sons ásperos de uma tarde distante,\nOnde a luz fria do inverno silenciava nossos passos.",
      source: "Texto inédito (estilo Simbolista)."
    },
    prompt: "O texto literário acima evoca uma forte carga atmosférica. Para criar esse efeito, o poeta utiliza a fusão de diferentes esferas sensoriais humanas na mesma imagem poética ('doce perfume verde', 'sons ásperos', 'luz fria'). Essa mistura de diferentes percepções dos órgãos dos sentidos em uma única expressão denomina-se:",
    options: [
      { text: "Metáfora, por igualar implicitamente a natureza a uma casa.", isCorrect: false, distractorRationale: "Apesar de toda sinestesia ser uma forma de metáfora complexa, há uma figura muito mais específica para o cruzamento de sentidos cobrada aqui." },
      { text: "Hipérbole, pelo exagero ao afirmar que a luz pode influenciar a audição dos passos.", isCorrect: false, distractorRationale: "O objetivo não é o exagero em quantidade, mas a qualidade misteriosa da percepção." },
      { text: "Sinestesia, que ocorre quando o escritor mescla, na mesma expressão, os sentidos (visão, olfato, paladar, audição, tato).", isCorrect: true, distractorRationale: "Correta. 'Doce' (paladar) + 'perfume' (olfato) + 'verde' (visão). 'Sons' (audição) + 'ásperos' (tato). 'Luz' (visão) + 'fria' (tato). A fusão de sensações fisiológicas é a essência da sinestesia literária." },
      { text: "Paradoxo, pois é cientificamente impossível que um cheiro possua uma cor.", isCorrect: false, distractorRationale: "Apesar da estranheza lógica, a quebra de regra aqui é baseada no aparato sensorial e sensorial-poético, não num nó lógico existencial entre ideias opostas absolutas." },
      { text: "Prosopopeia, uma vez que os sentimentos humanos foram transferidos para elementos da natureza.", isCorrect: false, distractorRationale: "Não são dados traços de personalidade ou ações humanas intencionais aos objetos; as percepções de quem sente é que estão misturadas." }
    ],
    detailedExplanation: {
      summary: "A sinestesia ocorre quando cruzamos sensações que pertencem a órgãos dos sentidos diferentes.",
      stepByStep: [
        "Passo 1: Isolar as expressões e apontar a qual sentido pertencem.",
        "Passo 2: Doce = Paladar; Perfume = Olfato; Verde = Visão. (3 sentidos em uma imagem).",
        "Passo 3: Sons = Audição; Áspero = Tato. (2 sentidos em uma imagem).",
        "Passo 4: Luz = Visão; Fria = Tato. (2 sentidos).",
        "Passo 5: Concluir que essa mistura intencional da percepção sensorial é a Sinestesia."
      ],
      coreConcept: "Sinestesia: Mescla poética ou linguística das diferentes percepções sensoriais (ex: voz doce, cheiro gritante, olhar frio).",
      trapWarning: "Essa figura foi intensamente utilizada pela escola Simbolista. No dia a dia, também usamos sem notar, como em 'cor berrante' (visão+audição)."
    },
    tags: ['figuras de linguagem', 'sinestesia', 'simbolismo']
  },
  {
    id: 'LIN-FIG-010',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Figuras de Linguagem',
    subtopic: 'Revisão e Comparação de Figuras',
    difficulty: 5,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "1. Minha vida é um mar de problemas que nunca acaba.\n2. O estádio do Maracanã inteiro aplaudiu o jogador.\n3. Após receber a péssima notícia, ela partiu desta para uma melhor.\n4. Ele riu um sorriso tão amargo que assustou a todos.",
      source: "Texto inédito."
    },
    prompt: "Abaixo estão apresentadas quatro frases que contêm diferentes figuras de linguagem. Assinale a alternativa que traz, respectivamente, a sequência correta da classificação das figuras de linguagem presentes nas sentenças 1, 2, 3 e 4.",
    options: [
      { text: "1. Metáfora; 2. Metonímia; 3. Eufemismo; 4. Sinestesia.", isCorrect: true, distractorRationale: "Correta. 1) 'vida é um mar' = Metáfora direta. 2) 'O Maracanã aplaudiu' (as pessoas no estádio aplaudiram, continente pelo conteúdo) = Metonímia. 3) 'partiu dessa para uma melhor' (morreu) = Eufemismo. 4) 'sorriso amargo' (visão/expressão + paladar) = Sinestesia." },
      { text: "1. Hipérbole; 2. Prosopopeia; 3. Ironia; 4. Paradoxo.", isCorrect: false, distractorRationale: "Errada. 'Vida é um mar' não foca só no exagero, mas na transposição analógica. 'O Maracanã aplaudiu' não quer dar vida a um prédio (prosopopeia), mas substituir as pessoas pelo prédio (metonímia). O 3 é Eufemismo, não ironia. O 4 é sinestesia." },
      { text: "1. Metáfora; 2. Prosopopeia; 3. Eufemismo; 4. Antítese.", isCorrect: false, distractorRationale: "Errada. A 2 não é prosopopeia, pois o estádio não ganha características humanas, ele apenas representa as pessoas ali dentro (metonímia contígua). E a 4 não tem palavras opostas literais para ser antítese." },
      { text: "1. Comparação; 2. Metonímia; 3. Paradoxo; 4. Sinestesia.", isCorrect: false, distractorRationale: "Errada. A 1 não tem conectivo comparativo (não é 'vida é COMO um mar'), logo é metáfora. A 3 não tem contradição lógica simultânea, é apenas a suavização da morte." },
      { text: "1. Eufemismo; 2. Metáfora; 3. Ironia; 4. Paradoxo.", isCorrect: false, distractorRationale: "Totalmente incorreta. 'Mar de problemas' não suaviza a vida (eufemismo), o Maracanã aplaudir não é baseado em semelhança (metáfora)." }
    ],
    detailedExplanation: {
      summary: "Questão de identificação múltipla. É preciso analisar o conceito central da figura contida em cada uma das sentenças separadamente.",
      stepByStep: [
        "Passo 1: Analisar frase 1. 'Minha vida é um mar'. Comparação implícita sem conectivo = Metáfora.",
        "Passo 2: Analisar frase 2. 'O estádio aplaudiu'. Prédios não aplaudem, as pessoas dentro sim. O continente substitui o conteúdo = Metonímia.",
        "Passo 3: Analisar frase 3. 'Partiu para uma melhor'. Empregado para amenizar a palavra 'morreu' = Eufemismo.",
        "Passo 4: Analisar frase 4. 'Sorriso amargo'. Sorriso (expressão facial, visual) fundido a amargo (sentido do paladar) = Sinestesia.",
        "Passo 5: Buscar a alternativa correspondente: Metáfora, Metonímia, Eufemismo, Sinestesia."
      ],
      coreConcept: "Múltiplas Figuras. A capacidade de distinguir entre metáfora e metonímia é essencial, assim como diferenciar figuras de pensamento (eufemismo, ironia) e figuras de palavras (sinestesia).",
      trapWarning: "Na frase 2, é muito comum alunos confundirem 'O estádio aplaudiu' com Prosopopeia. Lembre-se: se o objeto físico está apenas representando geograficamente as pessoas que estão nele (continente/conteúdo), a figura é sempre Metonímia."
    },
    tags: ['figuras de linguagem', 'revisão', 'metáfora', 'metonímia', 'eufemismo', 'sinestesia']
  }
];
