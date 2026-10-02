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
  },
  {
    id: "LIN-FIG-011",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Figuras de Linguagem",
    subtopic: "Antítese vs. Paradoxo (Oxímoro) na Poética Clássica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere os fragmentos poéticos a seguir:\n\nFragmento 1 (Gregório de Matos, Barroco):\n'Nasce o Sol, e não dura mais que um dia,\nDepois da Luz se segue a noite escura,\nEm tristes sombras morre a formosura,\nEm contínuas tristezas a alegria.'\n\nFragmento 2 (Luís de Camões, Classicismo):\n'Amor é fogo que arde sem se ver;\nÉ ferida que dói e não se sente;\nÉ um contentamento descontente;\nÉ dor que desatina sem doer.'",
      source: "Estudos de Teoria Poética e Figuras de Linguagem, 2024."
    },
    prompt: "Ao analisar a construção retórica das oposições semânticas nos dois poemas, a distinção teórica entre Antítese e Paradoxo (Oxímoro) comprova-se porque:",
    options: [
      { id: "a", text: "no Fragmento 1 opera-se a Antítese pela simples aproximação de palavras de sentidos contrários ('Luz / noite', 'tristezas / alegria') sem ferir a lógica natural; enquanto no Fragmento 2 opera-se o Paradoxo pela fusão simultânea de ideias inconciliáveis ('contentamento descontente', 'dói e não se sente') que desafiam a coerência racional.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "em ambos os fragmentos ocorrem unicamente metáforas zoológicas sobre animais da savana africana.", isCorrect: false, distractorRationale: "Os poemas tratam da efemeridade do tempo e das contradições amorosas, sem alusão zoológica." },
      { id: "c", text: "o Fragmento 1 é um exemplo clássico de eufemismo para suavizar uma notícia fúnebre familiar.", isCorrect: false, distractorRationale: "O poema de Gregório de Matos reflete sobre o tempo transitório (carpe diem) através de antíteses dramáticas." },
      { id: "d", text: "no Fragmento 2 todas as afirmações são fatos empíricos comprováveis pela medicina ortopédica tradicional.", isCorrect: false, distractorRationale: "Dizer que uma ferida dói sem doer é uma contradição poética e lógica insolúvel (paradoxo)." },
      { id: "e", text: "ambos os textos constituem pleonasmos viciosos que deveriam ser censurados das antologias escolares.", isCorrect: false, distractorRationale: "Trata-se de obras-primas canônicas da literatura em língua portuguesa ricas em figuras de pensamento." }
    ],
    detailedExplanation: {
      summary: "Antítese e Paradoxo lidam com ideias contrárias, mas de maneiras diferentes: a Antítese coloca opostos lado a lado (alto e baixo, dia e noite; é perfeitamente lógico). O Paradoxo (ou Oxímoro) funde os opostos na mesma coisa ao mesmo tempo, criando uma contradição lógica insolúvel (um silêncio ensurdecedor, ferida que dói e não se sente).",
      stepByStep: [
        "Antítese: Contraposição de termos contrários. Luz vs. Noite; Tristeza vs. Alegria. Um existe após o outro, sem quebrar a lógica da realidade.",
        "Paradoxo: Coexistência de elementos mutuamente excludentes. Como algo pode doer e não doer ao mesmo tempo? Isso choca a razão cartesiana e expressa a natureza misteriosa do amor.",
        "Dica clássica do ENEM: Antítese = oposição possível; Paradoxo = oposição absurda/ilógica."
      ],
      coreConcept: "Diferenciação Estilística: Antítese (Oposição Lógica) vs. Paradoxo (Contradição Insolúvel)",
      trapWarning: "Cuidado no ENEM: 'oxímoro' é o nome técnico mais erudito do paradoxo (fusão de conceitos opostos no mesmo sintagma, como 'claridade escura' ou 'doce amargura')."
    },
    commonTraps: [
      "Confundir antítese com paradoxo em questões de interpretação de poemas barrocos",
      "Achar que paradoxo é um 'erro gramatical' do poeta em vez de uma figura de pensamento profunda"
    ],
    tags: ["figuras-de-linguagem", "antitese", "paradoxo", "oximoro", "camoes", "gregorio-de-matos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FIG-012",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Figuras de Linguagem",
    subtopic: "Prosopopeia (Personificação) e a Humanização da Natureza",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o fragmento do poema abolicionista 'Vozes d'África' (1868), de Castro Alves:\n\n'O mar revolto geme de pavor na escuridão...\nAs vagas trêmulas ajoelham-se na areia deserta,\nE o vento da noite soluça baixinho segredos de dor,\nEnquanto a lua pranteia o destino dos filhos escravizados.'",
      source: "ALVES, Castro Alves. Os Escravos. São Paulo: Martin Claret."
    },
    prompt: "Ao atribuir ao mar a ação de 'gemer de pavor', às ondas a atitude de 'ajoelhar-se' e à lua o ato de 'prantear', o poeta constrói a figura de linguagem denominada:",
    options: [
      { id: "a", text: "prosopopeia (ou personificação), conferindo sentimentos, reações corporais e consciência humana a elementos inanimados da natureza para amplificar a dor cósmica perante o horror da escravidão.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "eufemismo, para amenizar a gravidade do tráfico negreiro e transformá-lo em conto de fadas infantil.", isCorrect: false, distractorRationale: "O poema é uma denúncia monumental e dramática, o oposto de qualquer suavização atenuadora." },
      { id: "c", text: "catacrese, motivada pela carência de termos adequados para nomear a água salgada dos oceanos.", isCorrect: false, distractorRationale: "Catacrese é uso desgastado (como 'pé da mesa'); aqui há criação poética vívida e dramática." },
      { id: "d", text: "metonímia anatômica, substituindo os marinheiros pelos joelhos das ondas.", isCorrect: false, distractorRationale: "As ondas não têm joelhos de carne; estão sendo poeticamente personificadas." },
      { id: "e", text: "ironia sarcástica com o intuito de fazer os leitores darem gargalhadas descontraídas.", isCorrect: false, distractorRationale: "O tom do Condoreirismo de Castro Alves é de indignação moral, comoção ética e gravidade trágica." }
    ],
    detailedExplanation: {
      summary: "A prosopopeia (ou personificação) consiste em emprestar qualidades humanas (sentimentos, fala, choro, ações morais) a animais, objetos inanimados ou forças da natureza.",
      stepByStep: [
        "Ações humanas no texto: Gemer de pavor, ajoelhar-se, soluçar segredos, prantear (chorar copiosamente).",
        "Seres inanimados receptores: O mar, as ondas, o vento, a lua.",
        "Efeito expressivo no Condoreirismo: O universo inteiro parece comover-se e protestar contra a crueldade da escravidão no Atlântico.",
        "Gêneros comuns da prosopopeia: Fábulas infantis (animais que falam), poesia romântica e crônicas animistas."
      ],
      coreConcept: "Prosopopeia / Personificação: Atribuição de Ações e Sentimentos Humanos a Seres Inanimados",
      trapWarning: "No ENEM, prosopopeia e personificação são sinônimos perfeitos; se a opção trouxer um ou outro termo, o significado técnico é o mesmo!"
    },
    commonTraps: [
      "Confundir prosopopeia (dar vida/humanidade a coisas) com metonímia (trocar a parte pelo todo)",
      "Supor que personificação ocorre apenas em historinhas de animais falantes"
    ],
    tags: ["figuras-de-linguagem", "prosopopeia", "personificacao", "castro-alves", "condoreirismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FIG-013",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Figuras de Linguagem",
    subtopic: "Ironia e Sarcasmo como Ferramentas de Crítica Social",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma crônica jornalística sobre os atrasos crônicos nas obras de infraestrutura e a burocracia dos órgãos públicos, lê-se o seguinte comentário de um cidadão após esperar cinco horas em uma fila interminável sob chuva torrencial:\n\n'Que primor de agilidade e respeito ao cidadão! Fiquei emocionado com a pontualidade britânica da repartição pública: cheguei às sete da manhã e ao meio-dia finalmente descobri que o funcionário que assina o formulário está de folga até o próximo mês. Um verdadeiro espetáculo de eficiência!'",
      source: "Crônicas do Cotidiano Urbano, 2024."
    },
    prompt: "O recurso estilístico que estrutura fundamentalmente a manifestação do cidadão revoltado na crônica é a:",
    options: [
      { id: "a", text: "ironia, processo retórico em que o enunciador afirma literalmente o oposto daquilo que pretende comunicar, valendo-se da contradição contextual para expressar sarcasmo, indignação e crítica contundente.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "antítese simétrica, para demonstrar que o funcionário público é um modelo de disciplina a ser premiado.", isCorrect: false, distractorRationale: "O enunciador não está elogiando o funcionário; está denunciando a incompetência do atendimento através do deboche." },
      { id: "c", text: "sinestesia sensorial, por misturar sensações térmicas de frio com sabores agridoces.", isCorrect: false, distractorRationale: "Não há mistura de órgãos dos sentidos no fragmento." },
      { id: "d", text: "pleonasmo descritivo redundante que repete termos desnecessários sem produzir sentido.", isCorrect: false, distractorRationale: "O texto é ágil e afiado na construção da sátira social." },
      { id: "e", text: "catacrese de dicionário empregada por falta de palavras adequadas para nomear filas de espera.", isCorrect: false, distractorRationale: "A expressão é intencional, sarcástica e com duplo sentido mordaz." }
    ],
    detailedExplanation: {
      summary: "A ironia consiste em dizer uma coisa para significar o seu exato oposto, contando com a inteligência e o contexto do ouvinte/leitor para captar a sátira e o tom de denúncia.",
      stepByStep: [
        "O que o texto diz explicitamente: 'Primor de agilidade', 'pontualidade britânica', 'espetáculo de eficiência'.",
        "A situação fática real: Cinco horas na chuva, fila parada, funcionário ausente.",
        "O choque discursivo: Como as duas coisas são incompatíveis, o receptor decodifica que se trata de uma crítica sarcástica mordaz (Ironia)."
      ],
      coreConcept: "Ironia: Inversão Semântica Intencional, Sarcasmo e Crítica Institucional",
      trapWarning: "No ENEM, a compreensão da ironia é avaliada em crônicas, charges e tirinhas (como Mafalda, Armandinho e Calvin). Sempre analise a DISCREPÂNCIA entre o texto e a imagem/situação para identificar a crítica!"
    },
    commonTraps: [
      "Ler o texto com ingenuidade literal e acreditar que o autor estava elogiando o serviço público",
      "Confundir ironia fina com insulto direto sem figuração"
    ],
    tags: ["figuras-de-linguagem", "ironia", "sarcasmo", "cronica", "critica-social"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FIG-014",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Figuras de Linguagem",
    subtopic: "Hipérbole vs. Eufemismo: Contrastes de Intensidade Expressiva",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere dois enunciados colhidos na linguagem cotidiana contemporânea:\n\nEnunciado 1: 'Eu já te mandei essa mensagem dezenas de milhões de vezes e estou morrendo de fome depois de esperar uma eternidade na sala de espera!'\n\nEnunciado 2: 'O comitê de ética informou que o parlamentar faltou com a verdade durante a sessão plenária e subtraiu bens públicos em benefício próprio.'",
      source: "Manual Prático de Figuras de Pensamento, 2024."
    },
    prompt: "A análise dos recursos expressivos empregados nos enunciados 1 e 2 revela que eles se estruturam, respectivamente, a partir de:",
    options: [
      { id: "a", text: "hipérbole no Enunciado 1 (exagero desmedido e dramático para intensificar a queixa) e eufemismo no Enunciado 2 (atenuação de expressões rudes para suavizar acusações graves como mentir e roubar).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "metonímia no Enunciado 1 e prosopopeia mitológica no Enunciado 2.", isCorrect: false, distractorRationale: "Não há contiguidade metonímica no primeiro nem humanização de objetos inanimados no segundo." },
      { id: "c", text: "paradoxo insolúvel no Enunciado 1 e metáfora biológica no Enunciado 2.", isCorrect: false, distractorRationale: "Esperar uma eternidade é exagero evidente (hipérbole), não paradoxo lógico." },
      { id: "d", text: "eufemismo no Enunciado 1 e hipérbole descontrolada no Enunciado 2.", isCorrect: false, distractorRationale: "A ordem está exatamente invertida: o Enunciado 1 exagera (hipérbole) e o 2 suaviza (eufemismo)." },
      { id: "e", text: "ambiguidade sintática viciosa em ambos os períodos analisados.", isCorrect: false, distractorRationale: "Os períodos são perfeitamente claros em sua intenção discursiva." }
    ],
    detailedExplanation: {
      summary: "Hipérbole e Eufemismo operam em direções opostas na balança da intensidade: a Hipérbole 'aumenta o volume' ao extremo pelo exagero; o Eufemismo 'abaixa o volume' para suavizar palavras duras, ofensivas ou tabus.",
      stepByStep: [
        "Enunciado 1: 'Milhões de vezes', 'morrendo de fome', 'uma eternidade' ⟹ ninguém espera uma eternidade biológica real; trata-se de HIPÉRBOLE para expressar cansaço extremo.",
        "Enunciado 2: 'Faltou com a verdade' (suavização para mentiu); 'subtraiu bens públicos' (suavização formal jurídica para roubou/desviou) ⟹ trata-se de EUFEMISMO para evitar o termo direto estigmatizante.",
        "Gêneros do eufemismo: Necrológios ('faleceu', 'descansou'), notícias diplomáticas e comunicados corporativos."
      ],
      coreConcept: "Hipérbole (Exagero Intencional) versus Eufemismo (Atenuação Suavizadora)",
      trapWarning: "No ENEM, o eufemismo é muito frequente na análise da linguagem política e jornalística, onde autoridades 'ajustam tarifas' (em vez de aumentar preços) ou anunciam 'descontinuidade contratual' (em vez de demissão em massa)."
    },
    commonTraps: [
      "Inverter os conceitos de hipérbole e eufemismo",
      "Achar que hipérbole é erro de cálculo matemático em vez de figura poética de exagero"
    ],
    tags: ["figuras-de-linguagem", "hiperbole", "eufemismo", "exagero", "atenuacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FIG-015",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Figuras de Linguagem",
    subtopic: "Gradação (Clímax e Anticlímax) no Discurso Literário",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o trecho oratório do Sermão da Sexagésima (1655), proferido pelo Padre Antônio Vieira:\n\n'O trigo semeado na terra boa primeiro germina em segredo, depois brota em tenra haste verde, eleva-se em espiga dourada, amadurece sob os raios do sol e multiplica-se em celeiros cheios de pão abundante para alimentar a multidão faminta.'",
      source: "VIEIRA, Pe. Antônio. Sermões Escolhidos. São Paulo: Cultrix."
    },
    prompt: "A enumeração progressiva das fases do cultivo ('germina ⟹ brota ⟹ eleva-se ⟹ amadurece ⟹ multiplica-se') constitui a figura de linguagem da:",
    options: [
      { id: "a", text: "gradação (ou clímax), encadeando ideias em sequência ascendente cumulativa de intensidade e desenvolvimento temporal para persuadir o ouvinte sobre a fecundidade da palavra de Deus.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "catacrese de cozinha, por fazer menção implícita a receitas de padarias de Lisboa.", isCorrect: false, distractorRationale: "Trata-se de oratória sacra barroca com rigor estilístico clássico, não linguagem de culinária caseira." },
      { id: "c", text: "ironia depreciativa, destinada a demonstrar que plantar trigo é uma ocupação inútil para o ser humano.", isCorrect: false, distractorRationale: "O tom é solene, de exaltação da fecundidade e do trabalho evangélico." },
      { id: "d", text: "sinestesia auditiva que combina o som dos sinos da igreja com a dor de dente dos fiéis.", isCorrect: false, distractorRationale: "Não há cruzamento sensorial desse tipo no sermão." },
      { id: "e", text: "pleonasmo vicioso que repete vocábulos idênticos sem acrescentar qualquer avanço narrativo.", isCorrect: false, distractorRationale: "Cada verbo acrescenta uma etapa nova e superior na evolução da semente até o pão." }
    ],
    detailedExplanation: {
      summary: "A gradação é a disposição de termos em ordem progressiva de ideias. Pode ser ascendente (clímax - do menor para o maior) ou descendente (anticlímax - do maior para o menor, como 'virou pó, cinza, nada').",
      stepByStep: [
        "Sequência temporal ascendente: Germina ⟹ brota ⟹ eleva-se ⟹ amadurece ⟹ multiplica-se.",
        "Finalidade retórica no Barroco: O Padre Antônio Vieira utiliza a gradação para demonstrar que o bom pregador precisa plantar a semente da fé com paciência até colher frutos monumentais.",
        "Gradação descendente (anticlímax): Muito comum no Romantismo e Realismo para retratar decadência ('O herói perdeu o trono, a honra, o dinheiro, os amigos e a própria dignidade')."
      ],
      coreConcept: "Gradação: Progressão Ascendente (Clímax) e Descendente (Anticlímax)",
      trapWarning: "No ENEM, observe o dinamismo dos verbos ou adjetivos alinhados: se há uma 'escada' de ideias subindo ou descendo em intensidade, a resposta é GRADAÇÃO!"
    },
    commonTraps: [
      "Confundir gradação com mera lista aleatória de substantivos",
      "Esquecer que a gradação pode ser tanto ascendente quanto descendente"
    ],
    tags: ["figuras-de-linguagem", "gradacao", "climax", "anticlimax", "padre-antonio-vieira", "barroco"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FIG-016",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Figuras de Linguagem",
    subtopic: "Catacrese: A Metáfora Desgastada e Incorporada ao Dicionário",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as seguintes expressões corriqueiras utilizadas espontaneamente no cotidiano:\n\n1. 'Apoiei o prato no braço do sofá enquanto assistia à aula.'\n2. 'Quebrei sem querer o dente de alho que estava descascando.'\n3. 'A caminhonete parou no pé da serra antes de iniciar a subida íngreme.'\n4. 'Segurei a xícara de café quente pela sua asa de cerâmica.'",
      source: "Manual de Semântica e Lexicologia, 2024."
    },
    prompt: "Termos como 'braço do sofá', 'dente de alho', 'pé da serra' e 'asa da xícara' exemplificam a figura de linguagem denominada catacrese, que se define linguisticamente por ser:",
    options: [
      { id: "a", text: "o uso figurado de uma palavra preexistente adotada em razão da ausência de um vocábulo específico próprio no léxico da língua para nomear determinado objeto ou parte dele, tornando-se uma metáfora cristalizada pelo uso popular.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "um erro de sintaxe que demonstra falta de instrução formal dos falantes que o utilizam.", isCorrect: false, distractorRationale: "Catacrese não é erro; é um recurso lexical legítimo e consagrado por todos os dicionários formais da língua." },
      { id: "c", text: "uma hipérbole deliberada que exagera as dimensões físicas dos móveis e dos temperos de cozinha.", isCorrect: false, distractorRationale: "Não há exagero enfático nessas expressões cotidianas; trata-se de nomeação lexical comum." },
      { id: "d", text: "uma rima poética rara criada exclusivamente por escritores simbolistas herméticos.", isCorrect: false, distractorRationale: "São expressões coloquiais e populares usadas por todas as classes sociais." },
      { id: "e", text: "a tradução equivocada de expressões náuticas do mandarim clássico.", isCorrect: false, distractorRationale: "São criações semânticas orgânicas da história da própria língua portuguesa." }
    ],
    detailedExplanation: {
      summary: "A catacrese é a 'metáfora de que ninguém mais lembra que era metáfora': ocorre quando a língua não tem uma palavra própria para algo e toma emprestada uma palavra do corpo humano ou da natureza ('boca da noite', 'céu da boca', 'cabeça de prego', 'maçã do rosto').",
      stepByStep: [
        "Falta de termo específico: Como se chama a parte lateral da poltrona onde se apoia o braço? Não há outro nome senão 'braço da poltrona'.",
        "Perda da força poética: O uso repetido e contínuo ao longo de gerações cristalizou o termo, que passou a ser percebido como denotativo.",
        "Outros exemplos consagrados: 'Enterrar uma farpa no dedo' (embora enterrar venha de terra), 'maçã do rosto', 'veia d'água'."
      ],
      coreConcept: "Catacrese: Metáfora Cristalizada por Lacuna Lexical",
      trapWarning: "No ENEM, lembre-se: catacrese é a figura que 'tapa um buraco' no vocabulário! Diferente da metáfora viva criada pelo poeta na hora, a catacrese já está há séculos dicionarizada pelo uso popular."
    },
    commonTraps: [
      "Julgar expressões como 'dente de alho' ou 'asa da xícara' como personificação ou prosopopeia",
      "Achar que expressões consagradas pelo uso cotidiano são erros gramaticais em vez de catacreses legítimas"
    ],
    tags: ["figuras-de-linguagem", "catacrese", "metafora-cristalizada", "lexico", "semantica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FIG-017",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Figuras de Linguagem",
    subtopic: "Anáfora e Aliteração: O Ritmo Hipnótico em 'Águas de Março'",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a célebre letra de Tom Jobim em 'Águas de Março' (1972):\n\n'É pau, é pedra, é o fim do caminho\nÉ um resto de toco, é um pouco sozinho\nÉ um caco de vidro, é a vida, é o sol\nÉ a noite, é a morte, é um laço, é o anzol\nSão as águas de março fechando o verão\nÉ a promessa de vida no teu coração...'",
      source: "JOBIM, Tom. Matita Perê. Rio de Janeiro: Philips."
    },
    prompt: "A repetição sistemática e contínua da estrutura verbal 'É...' no início de sucessivos versos e sintagmas atua como recurso expressivo denominado:",
    options: [
      { id: "a", text: "anáfora, criando um efeito rítmico cumulativo e hipnótico que emula o gotejar incessante da chuva e a torrente ininterrupta de elementos que compõem o fluxo da existência humana.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "pleonasmo vicioso, gerando cansaço auditivo que empobrece a qualidade melódica da canção popular.", isCorrect: false, distractorRationale: "A repetição é uma escolha estilística genial e consciente que consagrou a canção internacionalmente." },
      { id: "c", text: "paradoxo teológico, por afirmar que paus e pedras são animais que respiram ar.", isCorrect: false, distractorRationale: "A letra justapõe fragmentos da paisagem brasileira de forma acumulativa, sem contradições teológicas insolúveis." },
      { id: "d", text: "ironia depreciativa voltada a zombar da estação chuvosa do clima tropical.", isCorrect: false, distractorRationale: "A canção é uma celebração poética do ciclo da vida e da renovação da natureza ('promessa de vida')." },
      { id: "e", text: "eufemismo funerário para ocultar qualquer menção à finitude dos seres vivos.", isCorrect: false, distractorRationale: "O verso diz explicitamente 'é a morte', sem qualquer ocultação ou suavização eufêmica." }
    ],
    detailedExplanation: {
      summary: "A anáfora é a figura de linguagem de construção sintática que consiste na repetição da mesma palavra (ou conjunto de palavras) no início de frases, orações ou versos seguidos para criar ritmo, ênfase e musicalidade.",
      stepByStep: [
        "Identificação formal: 'É pau', 'é pedra', 'é o fim', 'é um resto', 'é a noite', 'é a vida' ⟹ repetição do verbo de ligação 'é' no começo de cada segmento.",
        "Efeito poético e semântico: A enxurrada de imagens atomizadas cria a sensação sinestésica da chuva de verão lavando a terra, unindo coisas insignificantes ('caco de vidro', 'resto de toco') a coisas sublimes ('o sol', 'a vida').",
        "Importância no ENEM: A anáfora é muito cobrada tanto na literatura quanto na retórica de discursos célebres (como Martin Luther King repetindo 'I have a dream')."
      ],
      coreConcept: "Anáfora: Repetição Inicial Enfática, Musicalidade e Construção Rítmica",
      trapWarning: "Atenção para a distinção terminológica: na sintaxe textual, 'anáfora' pode se referir à retomada de um termo anterior; nas FIGURAS DE LINGUAGEM poéticas, 'anáfora' é a repetição da mesma palavra no início de versos consecutivos!"
    },
    commonTraps: [
      "Confundir repetição estética rítmica (anáfora) com pobreza lexical ou erro gramatical",
      "Não perceber a correspondência entre a repetição formal e o tema das águas da chuva descendo"
    ],
    tags: ["figuras-de-linguagem", "anafora", "tom-jobim", "aguas-de-marco", "ritmo-poetico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FIG-018",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Figuras de Linguagem",
    subtopic: "Sinestesia e o Cruzamento Sensorial na Poesia Simbolista",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere os versos simbolistas de Cruz e Sousa em 'Broquéis' (1893):\n\n'Nas amplidões dos céus uma canção desce veludina...\nOuviam-se perfumes límpidos e doces no ar,\nE um aroma azul e gelado cortava a noite\nCom a pureza virginal de uma luz de prata.'",
      source: "CRUZ E SOUSA, J. Poesia Completa. Florianópolis: Fundação Catarinense de Cultura."
    },
    prompt: "Expressões como 'canção veludina' (som + tato), 'ouviam-se perfumes doces' (audição + olfato + paladar) e 'aroma azul e gelado' (olfato + visão + tato) configuram a figura de linguagem da sinestesia. Na estética simbolista, esse recurso tem como objetivo primordial:",
    options: [
      { id: "a", text: "fundir múltiplos canais sensoriais humanos em uma única percepção sensorial transcendente, sugerindo estados de espírito etéreos, misteriosos e inefáveis que desafiam a descrição objetiva do mundo material.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "fornecer um guia anatômico preciso para cirurgias otorrinolaringológicas em hospitais públicos.", isCorrect: false, distractorRationale: "A poesia simbolista é metafísica e espiritualizada, distante de tratados cirúrgicos hospitalares." },
      { id: "c", text: "comprovar que todas as pessoas nascem biologicamente desprovidas do sentido da visão.", isCorrect: false, distractorRationale: "O poema mobiliza ricas imagens visuais associadas a perfumes e toques." },
      { id: "d", text: "proibir o uso de instrumentos musicais de corda em orquestras filarmônicas.", isCorrect: false, distractorRationale: "Não há relação alguma com proibição instrumental; trata-se de evocação poética sensorial." },
      { id: "e", text: "demonstrar que a poesia não possui nenhum valor sonoro ou estético.", isCorrect: false, distractorRationale: "O Simbolismo valoriza o aspecto musical da palavra acima de todas as coisas ('Da música antes de tudo', dizia Verlaine)." }
    ],
    detailedExplanation: {
      summary: "A sinestesia é a mistura e cruzamento deliberado de sentidos físicos humanos (visão, audição, tato, olfato, paladar) na mesma expressão poética.",
      stepByStep: [
        "Cruzamentos sensoriais no texto: Canção (audição) veludina (tato macio do veludo); Ouvir (audição) perfumes (olfato) doces (paladar); Aroma (olfato) azul (visão) gelado (tato térmico).",
        "O Simbolismo e a Sinestesia: Os poetas simbolistas acreditavam que o mundo físico material era apenas uma casca superficial; a sinestesia permitia ultrapassar essa casca e conectar a alma com planos astrais e correspondências secretas da natureza.",
        "Uso coloquial cotidiano: Também usamos sinestesia todo dia sem perceber ('voz áspera' = audição + tato; 'cor quente' = visão + tato térmico)."
      ],
      coreConcept: "Sinestesia: Fusão de Planos Sensoriais e a Mística dos Sentidos no Simbolismo",
      trapWarning: "No ENEM, identifique a sinestesia perguntando a si mesmo: 'essas duas palavras pertencem a órgãos do sentido diferentes?' (ex.: perfume doce = nariz + língua ⟹ Sinestesia!)."
    },
    commonTraps: [
      "Confundir sinestesia (mistura de sentidos físicos) com metáfora comum sem apelo sensorial",
      "Achar que sinestesia é apenas um erro de percepção psicológica em vez de recurso poético"
    ],
    tags: ["figuras-de-linguagem", "sinestesia", "cruz-e-sousa", "simbolismo", "sensacoes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FIG-019",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Figuras de Linguagem",
    subtopic: "Pleonasmo Literário (Enfático) vs. Pleonasmo Vicioso",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as seguintes ocorrências de repetição de sentido na língua portuguesa:\n\nTexto 1 (Fernando Pessoa, 'Mensagem'):\n'Ó mar salgado, quanto do teu sal\nSão lágrimas de Portugal!'\n(E Vinicius de Moraes em 'Soneto de Felicidade': 'E rir meu riso e derramar meu pranto...')\n\nTexto 2 (Comentários orais desatentos):\n'Vamos subir para cima para ver a vista'; 'A prefeitura estabeleceu um elo de ligação entre as secretarias'; 'O paciente sofreu uma hemorragia de sangue'.",
      source: "Estilística da Língua Portuguesa, 2024."
    },
    prompt: "Ao comparar o fenômeno da redundância nos dois textos, a distinção gramatical e estilística entre o pleonasmo literário (enfático) e o pleonasmo vicioso fundamenta-se no fato de que:",
    options: [
      { id: "a", text: "no Texto 1 a reiteração da ideia ('mar salgado', 'rir meu riso') cumpre uma função poética intencional de intensidade emotiva e refinamento estético; enquanto no Texto 2 a repetição ('subir para cima', 'hemorragia de sangue') constitui um vício redutivo desnecessário que compromete a clareza e a concisão da comunicação.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "em ambos os textos as repetições configuram erros gramaticais crassos que desclassificam qualquer candidato em exames vestibulares.", isCorrect: false, distractorRationale: "O pleonasmo literário de Fernando Pessoa e Vinicius de Moraes é recurso estilístico magistral amplamente celebrado na literatura." },
      { id: "c", text: "no Texto 1 o mar é composto de água doce desprovida de cloreto de sódio mineral.", isCorrect: false, distractorRationale: "O mar é biologicamente salgado; a redundância é poética para conectá-lo às lágrimas de sal dos portugueses." },
      { id: "d", text: "o Texto 2 é um modelo exemplar da norma-padrão erudita que deve ser reproduzido em redações nota mil.", isCorrect: false, distractorRationale: "Pleonasmos viciosos como 'subir para cima' e 'hemorragia de sangue' são severamente penalizados na Competência 1 da redação." },
      { id: "e", text: "as expressões do Texto 2 são casos legítimos de sinestesia poética abstrata.", isCorrect: false, distractorRationale: "Não há cruzamento de sentidos na expressão 'subir para cima'; trata-se de tautologia viciosa." }
    ],
    detailedExplanation: {
      summary: "O pleonasmo é a repetição da mesma ideia com palavras diferentes. Quando é intencional e poético (para reforçar um sentimento dramático), é uma figura de linguagem de valor estético (pleonasmo literário). Quando é involuntário e inútil (fruto de descuido), é um vício de linguagem a ser eliminado (pleonasmo vicioso).",
      stepByStep: [
        "Pleonasmo literário (figura de estilo): 'Chorou um choro amargo', 'morrer uma morte gloriosa', 'mar salgado' ⟹ amplia a densidade afetiva e o lirismo da mensagem.",
        "Pleonasmo vicioso (defeito de redação): 'Entrar para dentro', 'sair para fora', 'elo de ligação' (todo elo é de ligação), 'certeza absoluta' (certeza já é plena), 'hemorragia de sangue' (toda hemorragia é de sangue) ⟹ empobrece a concisão do texto dissertativo.",
        "Aplicação na Redação do ENEM: Elimine pleonasmos viciosos para garantir nota máxima no critério de precisão vocabular e concisão."
      ],
      coreConcept: "Pleonasmo Estilístico (Enfático) versus Pleonasmo Vicioso (Redundância Desnecessária)",
      trapWarning: "No ENEM, distinga a intenção do autor: na poesia e na música, 'viver a vida' e 'sonhar um sonho' é arte; no relatório técnico da empresa, 'monopólio exclusivo' é pleonasmo vicioso!"
    },
    commonTraps: [
      "Classificar todo pleonasmo como vício gramatical sem avaliar o contexto literário",
      "Deixar passar pleonasmos viciosos ocultos na própria redação (como 'duas metades iguais' ou 'panorama geral')"
    ],
    tags: ["figuras-de-linguagem", "pleonasmo", "pleonasmo-vicioso", "fernando-pessoa", "vinicius-de-moraes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FIG-020",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Figuras de Linguagem",
    subtopic: "Metonímia na Comunicação Midiática e Geopolítica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as manchetes jornalísticas a seguir extraídas do noticiário contemporâneo:\n\n1. 'Brasília aprovou ontem o novo plano de investimentos em energia renovável.' (A capital pelo governo federal)\n2. 'A Casa Branca anunciou sanções econômicas adicionais no início da manhã.' (A sede do governo pelo presidente)\n3. 'A fabricante com as três listras revolucionou a tecnologia de amortecimento esportivo.' (O logotipo gráfico pela empresa comercial)\n4. 'O Brasil vibrou com a medalha de ouro inédita conquistada na ginástica artística.' (O território nacional pelos cidadãos torcedores)",
      source: "Linguagem Jornalística e Figuras de Palavras na Mídia, 2024."
    },
    prompt: "Nas quatro manchetes apresentadas, a linguagem informativa emprega diferentes modalidades de uma mesma figura de linguagem fundamental: a metonímia. Essa figura caracteriza-se pela:",
    options: [
      { id: "a", text: "substituição de um termo por outro com base em uma relação lógica e factual de contiguidade (como o lugar pela instituição, o continente pelo conteúdo, o símbolo pelo fabricante e o país pela sua população).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "criação de analogias metafóricas subjetivas e poéticas fundamentadas na semelhança visual imaginária.", isCorrect: false, distractorRationale: "Isso definiria a metáfora; a metonímia não opera por semelhança subjetiva, mas por relação objetiva real de proximidade física, espacial ou institucional." },
      { id: "c", text: "tentativa de enganar deliberadamente os leitores com notícias falsas não verificadas.", isCorrect: false, distractorRationale: "A metonímia é uma convenção textual perfeitamente inteligível e cotidiana na imprensa séria." },
      { id: "d", text: "proposta de abolição definitiva de todas as capitais e sedes de governo do planeta.", isCorrect: false, distractorRationale: "O texto usa os nomes de cidades e prédios como recursos de economia discursiva." },
      { id: "e", text: "deformação gramatical incorreta punível pelo código penal de imprensa.", isCorrect: false, distractorRationale: "Trata-se de uma das figuras de linguagem mais prestigiadas, naturais e eficazes da língua." }
    ],
    detailedExplanation: {
      summary: "A metonímia é a rainha da linguagem jornalística e cotidiana. Diferente da metáfora (que une coisas distantes por uma semelhança poética, como 'seus olhos são duas jabuticabas'), a metonímia opera por CONTIGUIDADE REAL (coisas que estão conectadas na realidade concreta).",
      stepByStep: [
        "Lugar pela instituição: 'Brasília votou' (os congressistas votaram); 'A Casa Branca anunciou' (o governo dos EUA anunciou).",
        "Símbolo pela empresa: 'As três listras' (Adidas); 'A maçã mordida' (Apple).",
        "O continente pelo conteúdo: 'O Brasil vibrou' (os brasileiros que moram no Brasil vibraram); 'Comi dois pratos' (comi a comida que estava dentro dos pratos).",
        "O autor pela obra: 'Li Machado de Assis' (li os livros de Machado).",
        "A matéria pelo objeto: 'Os bronzes soaram na torre' (os sinos feitos de bronze soaram)."
      ],
      coreConcept: "Metonímia: Relação de Contiguidade Real e suas Múltiplas Modalidades no Cotidiano",
      trapWarning: "No ENEM, grave a diferença definitiva: METÁFORA = relação de semelhança (analogia no plano imaginário); METONÍMIA = relação de contiguidade (proximidade na realidade prática)!"
    },
    commonTraps: [
      "Confundir metonímia com metáfora",
      "Achar que 'Brasília aprovou' é prosopopeia (é metonímia: o lugar pelo poder político sediado nele)"
    ],
    tags: ["figuras-de-linguagem", "metonimia", "contiguidade", "jornalismo", "linguagem-midiática"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
