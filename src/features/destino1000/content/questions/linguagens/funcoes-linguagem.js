export const QUESTIONS_FUNCOES_LINGUAGEM = [
  {
    id: 'LIN-FUNC-001',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Funções da Linguagem',
    subtopic: 'Função Poética e Metalinguística',
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Não há vagas\n\nO preço do feijão\nnão cabe no poema. O preço\ndo arroz\nnão cabe no poema.\nNão cabem no poema o gás\na luz o telefone\na sonegação\ndo leite\nda carne\ndo açúcar\ndo pão\n\nO funcionário público\nnão cabe no poema\ncom seu salário de fome\nsua vida fechada\nem arquivos.\n\nComo não cabe no poema\no operário\nque esmerila seu dia de aço\ne carvão\nnas oficinas escuras\n\n— porque o poema, senhores,\nestá fechado:\n“não há vagas”\n\nSó cabe no poema\no homem sem estômago\na mulher de nuvens\na fruta sem preço",
      source: "GULLAR, F. Toda poesia. Rio de Janeiro: José Olympio, 2000."
    },
    prompt: "O poema de Ferreira Gullar tematiza a relação entre a arte e a realidade social. Além da função poética, predominante no gênero literário, identifica-se também a função metalinguística da linguagem. Essa função se manifesta no texto por meio da:",
    options: [
      { text: "crítica explícita às desigualdades sociais que marginalizam o trabalhador brasileiro.", isCorrect: false, distractorRationale: "Isso se refere ao conteúdo temático do poema (função referencial) e à postura ideológica, não à metalinguagem." },
      { text: "reflexão sobre os limites e as possibilidades da própria construção do fazer poético.", isCorrect: true, distractorRationale: "Correta. A função metalinguística ocorre porque o poema reflete sobre o próprio ato de escrever e sobre o que pode ou não compor a matéria poética." },
      { text: "expressão dos sentimentos de revolta do eu lírico diante das injustiças do mundo moderno.", isCorrect: false, distractorRationale: "A expressão de sentimentos remete à função emotiva, não à metalinguística." },
      { text: "tentativa de convencer o leitor a tomar uma atitude contra o aumento do custo de vida.", isCorrect: false, distractorRationale: "Convencer o leitor é característica da função conativa/apelativa." },
      { text: "descrição objetiva dos produtos que compõem a cesta básica das famílias de baixa renda.", isCorrect: false, distractorRationale: "Isso se refere à função referencial, focada no contexto e na informação objetiva." }
    ],
    detailedExplanation: {
      summary: "A função metalinguística ocorre quando o código (a linguagem poética) é usado para falar de si mesmo.",
      stepByStep: [
        "Passo 1: Identificar o que é a função metalinguística (foco no código, a linguagem refletindo sobre a própria linguagem).",
        "Passo 2: Analisar o poema e perceber que o eu lírico discute constantemente o que 'cabe' ou 'não cabe no poema'.",
        "Passo 3: Concluir que essa discussão sobre as limitações e a natureza do poema caracteriza a reflexão sobre o próprio fazer poético (metalinguagem)."
      ],
      coreConcept: "Função Metalinguística: Código focado no próprio código.",
      trapWarning: "Cuidado para não confundir o tema do poema (a crítica social) com a função da linguagem cobrada no enunciado (metalinguística)."
    },
    tags: ['funções da linguagem', 'metalinguagem', 'poesia contemporânea']
  },
  {
    id: 'LIN-FUNC-002',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Funções da Linguagem',
    subtopic: 'Função Conativa ou Apelativa',
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Texto I\nNa compra do seu novo smartphone, leve de brinde um fone sem fio. Não perca essa chance, acesse agora o nosso site e garanta o seu! Estoques limitados.\n\nTexto II\n“Doe sangue. Doe vida. Seja o herói de alguém hoje.” (Campanha de doação do Ministério da Saúde)",
      source: "Adaptado."
    },
    prompt: "Apesar de pertencerem a esferas de circulação distintas — um anúncio comercial e uma campanha de saúde pública —, os dois textos apresentam a mesma função de linguagem predominante. Essa função se caracteriza por:",
    options: [
      { text: "priorizar a transmissão de informações de forma neutra e objetiva.", isCorrect: false, distractorRationale: "Esta é a característica da função referencial." },
      { text: "testar o canal de comunicação para garantir que a mensagem foi recebida.", isCorrect: false, distractorRationale: "Esta é a característica da função fática." },
      { text: "expressar os sentimentos e o estado de espírito do emissor da mensagem.", isCorrect: false, distractorRationale: "Esta é a característica da função emotiva." },
      { text: "focar no receptor com o intuito de influenciar o seu comportamento.", isCorrect: true, distractorRationale: "Correta. A função conativa/apelativa busca persuadir, convencer ou ordenar uma ação ao interlocutor (comprar, doar)." },
      { text: "explorar os recursos estéticos da mensagem para causar impacto sonoro.", isCorrect: false, distractorRationale: "Esta é a característica da função poética." }
    ],
    detailedExplanation: {
      summary: "A função apelativa foca no receptor para persuadi-lo ou induzi-lo a alguma atitude.",
      stepByStep: [
        "Passo 1: Observar os verbos no imperativo nos dois textos ('leve', 'acesse', 'garanta', 'doe', 'seja').",
        "Passo 2: Reconhecer que o objetivo principal é mudar o comportamento do leitor (incentivar a compra ou a doação de sangue).",
        "Passo 3: Identificar essa característica como própria da função conativa/apelativa."
      ],
      coreConcept: "Função Conativa (Apelativa): Foco no receptor, uso de imperativos, vocativos e linguagem persuasiva.",
      trapWarning: "Sempre que houver injunções e ordens diretas para mudar o comportamento, trata-se da função conativa."
    },
    tags: ['funções da linguagem', 'função conativa', 'publicidade']
  },
  {
    id: 'LIN-FUNC-003',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Funções da Linguagem',
    subtopic: 'Função Emotiva',
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Querido diário,\nHoje acordei sentindo um vazio estranho. Não sei explicar direito, mas as coisas não têm tido o mesmo sabor de antes. Olho para os meus cadernos de biologia, para os resumos de redação, e me pergunto se todo esse sacrifício vai valer a pena no final. Eu sinto muito medo de falhar, sabe? O peso das expectativas sobre os meus ombros me deixa exausta. Ainda assim, respiro fundo e tento focar no jaleco branco que tanto sonho em vestir.",
      source: "Texto inédito."
    },
    prompt: "O fragmento simula uma página de diário em que a autora compartilha suas angústias em relação aos estudos. Nele, predomina a função emotiva (ou expressiva) da linguagem, a qual se evidencia no texto pelo(a):",
    options: [
      { text: "uso predominante da terceira pessoa, conferindo universalidade à experiência relatada.", isCorrect: false, distractorRationale: "O texto usa primeira pessoa, não terceira." },
      { text: "preocupação em instruir o leitor sobre métodos eficazes de controle da ansiedade.", isCorrect: false, distractorRationale: "O texto não instrui, apenas desabafa." },
      { text: "marcação constante de elementos em primeira pessoa e na expressão de subjetividade.", isCorrect: true, distractorRationale: "Correta. A função emotiva é centrada no emissor, caracterizada pelo uso da primeira pessoa, verbos e pronomes que expressam os sentimentos íntimos do autor." },
      { text: "recurso à metalinguagem para explicar o que significa o sentimento de vazio.", isCorrect: false, distractorRationale: "A metalinguagem ocorre quando a linguagem explica a própria linguagem; não é o caso aqui." },
      { text: "busca por manter o contato com o leitor imaginário através de expressões de checagem.", isCorrect: false, distractorRationale: "Apesar de usar 'sabe?', o foco principal do texto não é testar o canal (função fática), mas expor sentimentos (função emotiva)." }
    ],
    detailedExplanation: {
      summary: "A função emotiva é centrada no emissor e na sua visão subjetiva do mundo.",
      stepByStep: [
        "Passo 1: Identificar o foco da mensagem. O texto revela sentimentos íntimos ('vazio estranho', 'sinto muito medo', 'exausta').",
        "Passo 2: Analisar a gramática: uso de primeira pessoa ('acordei', 'meus', 'sinto').",
        "Passo 3: Concluir que essas características são marcas registradas da função emotiva ou expressiva da linguagem."
      ],
      coreConcept: "Função Emotiva: Foco no emissor, subjetividade, pronomes e verbos em 1ª pessoa.",
      trapWarning: "Embora haja um 'sabe?' (função fática), ele é secundário em relação à predominância do desabafo emocional (função emotiva)."
    },
    tags: ['funções da linguagem', 'função emotiva', 'subjetividade']
  },
  {
    id: 'LIN-FUNC-004',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Funções da Linguagem',
    subtopic: 'Função Fática',
    difficulty: 1,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "— Alô?\n— Oi, Fernando, tudo bem?\n— Tudo sim, e com você?\n— Tudo tranquilo. Olha, você tá me ouvindo bem? A ligação tá meio cortando...\n— Tô ouvindo sim, fala aí.\n— Então, é sobre aquele simulado de exatas de amanhã...",
      source: "Texto inédito."
    },
    prompt: "Na conversa telefônica acima, trechos como 'Alô?', 'você tá me ouvindo bem?' e 'Tô ouvindo sim' desempenham um papel específico na comunicação. Eles caracterizam predominantemente a função fática da linguagem, cujo objetivo é:",
    options: [
      { text: "expressar as emoções do falante em relação ao assunto abordado.", isCorrect: false, distractorRationale: "Não há emoções expressas nessas frases." },
      { text: "transmitir dados e informações objetivas sobre o simulado.", isCorrect: false, distractorRationale: "Informações sobre o simulado pertencem à função referencial." },
      { text: "estabelecer, manter ou testar o canal físico e psicológico de comunicação.", isCorrect: true, distractorRationale: "Correta. A função fática tem como foco o canal de comunicação, visando abrir, prolongar ou verificar se o contato está funcionando." },
      { text: "convencer o receptor a alterar o seu comportamento em relação ao simulado.", isCorrect: false, distractorRationale: "Não há persuasão ou apelo à ação nesses trechos específicos (isso seria função conativa)." },
      { text: "refletir sobre as palavras utilizadas e os códigos próprios da língua portuguesa.", isCorrect: false, distractorRationale: "Isso seria a função metalinguística." }
    ],
    detailedExplanation: {
      summary: "A função fática tem o foco no canal de comunicação.",
      stepByStep: [
        "Passo 1: Identificar os elementos em destaque: 'Alô?', 'tá me ouvindo?'.",
        "Passo 2: Reconhecer que essas frases não têm conteúdo informativo denso, servindo apenas para testar se a conexão física está ativa.",
        "Passo 3: Relacionar esse teste do canal de comunicação à definição da função fática da linguagem."
      ],
      coreConcept: "Função Fática: Foco no canal de comunicação (testar, abrir, prolongar, interromper o contato).",
      trapWarning: "Expressões de cortesia e saudações ('Oi, tudo bem?') também cumprem função fática por abrirem o canal de contato social."
    },
    tags: ['funções da linguagem', 'função fática', 'diálogo cotidiano']
  },
  {
    id: 'LIN-FUNC-005',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Funções da Linguagem',
    subtopic: 'Função Referencial',
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Universidade de São Paulo (USP) anunciou na última terça-feira a descoberta de uma nova espécie de anfíbio na região da Mata Atlântica, no interior do estado. Segundo os biólogos responsáveis pelo estudo, o pequeno sapo mede cerca de 1,5 cm e apresenta coloração predominantemente marrom, o que o ajuda a se camuflar nas folhas secas do solo da floresta. O estudo foi publicado na revista científica 'Biodiversity and Conservation'.",
      source: "Texto inédito."
    },
    prompt: "O texto acima possui o formato típico de uma notícia de divulgação científica. Nele, a linguagem desempenha a função de informar o leitor sobre fatos do mundo real. Essa função, conhecida como referencial ou denotativa, destaca-se no texto através da:",
    options: [
      { text: "utilização de linguagem figurada para envolver o leitor emocionalmente.", isCorrect: false, distractorRationale: "Linguagem figurada seria função poética; envolver emocionalmente seria emotiva ou conativa." },
      { text: "presença marcante de verbos no imperativo e discurso direto.", isCorrect: false, distractorRationale: "Verbos no imperativo caracterizam a função conativa." },
      { text: "foco nos aspectos estéticos e rítmicos na estruturação das frases.", isCorrect: false, distractorRationale: "Isso caracteriza a função poética." },
      { text: "linguagem denotativa, precisão de dados e impessoalidade.", isCorrect: true, distractorRationale: "Correta. A função referencial é focada no contexto e na transmissão de informações objetivas, utilizando denotação, clareza e dados verificáveis (como '1,5 cm', 'terça-feira')." },
      { text: "reflexão acerca do próprio papel do jornalismo na ciência contemporânea.", isCorrect: false, distractorRationale: "Isso seria metalinguagem." }
    ],
    detailedExplanation: {
      summary: "A função referencial foca na transmissão da informação de forma neutra, objetiva e denotativa.",
      stepByStep: [
        "Passo 1: Reconhecer o gênero do texto (notícia/divulgação científica).",
        "Passo 2: Observar a ausência de opinião ou sentimentos do emissor (impessoalidade).",
        "Passo 3: Notar os dados precisos (tamanho, cor, nome da revista) e a linguagem denotativa (sentido literal).",
        "Passo 4: Concluir que essas são as características da função referencial da linguagem."
      ],
      coreConcept: "Função Referencial/Denotativa: Foco no referente (contexto/assunto), informatividade, objetividade.",
      trapWarning: "Notícias e textos didáticos quase sempre têm a função referencial como predominante."
    },
    tags: ['funções da linguagem', 'função referencial', 'texto jornalístico']
  },
  {
    id: 'LIN-FUNC-006',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Funções da Linguagem',
    subtopic: 'Interseção de Funções',
    difficulty: 4,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Propaganda de creme dental:\n'Apenas um sorriso ilumina a sala inteira. Mas um sorriso protegido pela fórmula exclusiva com Flúor-Ativo de SorrisoBranco garante saúde para você e toda a sua família. Experimente e sinta a diferença hoje mesmo!'",
      source: "Texto inédito."
    },
    prompt: "Embora os textos publicitários tenham como objetivo central persuadir o consumidor (função conativa), muitas vezes eles recorrem a outras funções da linguagem para compor sua estratégia argumentativa. No texto acima, além da função conativa explícita no fim, nota-se o uso de outra função no trecho inicial ('Apenas um sorriso ilumina a sala inteira. Mas um sorriso protegido pela fórmula exclusiva com Flúor-Ativo...'). Qual é essa função secundária e como ela se justifica?",
    options: [
      { text: "Função emotiva, pois expressa os sentimentos de alegria que o sorriso causa no próprio locutor.", isCorrect: false, distractorRationale: "O texto não foca nos sentimentos subjetivos do locutor (não está em 1ª pessoa)." },
      { text: "Função metalinguística, pois a palavra 'sorriso' está sendo definida no contexto odontológico.", isCorrect: false, distractorRationale: "Não há definição do que é a palavra 'sorriso', logo não há metalinguagem forte aqui." },
      { text: "Função poética, pois há um trabalho metafórico e estético ('ilumina a sala inteira') para valorizar a mensagem.", isCorrect: true, distractorRationale: "Correta. A metáfora 'ilumina a sala inteira' e a repetição da palavra 'sorriso' evidenciam uma preocupação estética com a mensagem, característica da função poética." },
      { text: "Função fática, pois a frase inicial serve exclusivamente para prender a atenção e testar a leitura do consumidor.", isCorrect: false, distractorRationale: "Embora capture a atenção, o foco da figura de linguagem não é apenas o teste do canal, mas o embelezamento da mensagem." },
      { text: "Função referencial, já que transmite dados científicos precisos desde a primeira linha do texto.", isCorrect: false, distractorRationale: "A primeira linha ('ilumina a sala inteira') não contém dados científicos objetivos; é linguagem figurada." }
    ],
    detailedExplanation: {
      summary: "Na publicidade, a função poética costuma servir de suporte à função conativa, embelezando a mensagem para torná-la mais atrativa.",
      stepByStep: [
        "Passo 1: Identificar o objetivo principal do texto (vender - função conativa).",
        "Passo 2: Analisar a primeira frase: 'Apenas um sorriso ilumina a sala inteira'.",
        "Passo 3: Perceber o uso da metáfora ('ilumina') e da construção rítmica.",
        "Passo 4: Reconhecer que o trabalho estético e estilístico com a linguagem caracteriza a função poética."
      ],
      coreConcept: "Função Poética: Foco na mensagem, em como ela é construída (figuras de linguagem, sonoridade, ritmo), muito comum na publicidade.",
      trapWarning: "Cuidado para não achar que função poética só existe em poemas. Ela está presente sempre que há um foco estético na elaboração da mensagem."
    },
    tags: ['funções da linguagem', 'função poética', 'hibridismo funcional', 'publicidade']
  },
  {
    id: 'LIN-FUNC-007',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Funções da Linguagem',
    subtopic: 'Análise de Verbetes',
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "ver·bo\n(latim verbum, -i, palavra, termo)\nsubstantivo masculino\n1. [Gramática] Palavra variável que exprime uma acção, um estado ou uma qualidade.\n2. Palavra, vocábulo, termo.\n3. Expressão através da fala ou da escrita (ex.: possuía o dom do verbo). = LINGUAGEM, PALAVRA\n4. Eloquência, facilidade de exprimir as ideias.\n(Dicionário Priberam da Língua Portuguesa)",
      source: "Dicionário Priberam da Língua Portuguesa."
    },
    prompt: "Os dicionários são um dos exemplos mais clássicos da aplicação de uma determinada função da linguagem. No verbete acima, a linguagem é estruturada de forma a explicar o próprio significado de uma palavra pertencente à mesma língua. Dessa forma, predomina a função:",
    options: [
      { text: "Referencial, pois informa os sinônimos históricos da palavra.", isCorrect: false, distractorRationale: "Apesar de informar (o que tangencia a função referencial), o propósito principal de um dicionário é explicar o código com o próprio código." },
      { text: "Metalinguística, pois utiliza o código linguístico para explicar os signos que o compõem.", isCorrect: true, distractorRationale: "Correta. Dicionários e gramáticas são os maiores exemplos da função metalinguística, pois usam a língua para explicar a própria língua." },
      { text: "Poética, por apresentar múltiplos significados possíveis para uma única expressão verbal.", isCorrect: false, distractorRationale: "A polissemia não define, por si só, a função poética, que requereria um trabalho estético com a mensagem." },
      { text: "Fática, uma vez que estabelece uma relação pedagógica e de contato direto com o aprendiz.", isCorrect: false, distractorRationale: "O foco do dicionário não é testar ou abrir o canal de comunicação." },
      { text: "Conativa, já que impõe uma norma-padrão a ser seguida na comunicação oral e escrita.", isCorrect: false, distractorRationale: "O dicionário descreve os usos da palavra; não usa ordens diretas para mudar o comportamento do leitor." }
    ],
    detailedExplanation: {
      summary: "A função metalinguística ocorre quando o foco da mensagem está no próprio código linguístico.",
      stepByStep: [
        "Passo 1: Observar o gênero textual: verbete de dicionário.",
        "Passo 2: Reconhecer o propósito: usar palavras (código) para explicar o significado de outra palavra (código).",
        "Passo 3: Relacionar essa autorreferência do código à função metalinguística."
      ],
      coreConcept: "Função Metalinguística: Foco no Código. O código fala do código (ex: dicionários, gramáticas, poema que fala de poema, canção que fala sobre compor).",
      trapWarning: "É tentador marcar 'referencial' por ser um texto informativo e objetivo, mas quando o 'referente' (assunto) é a própria linguagem, a função é primariamente metalinguística."
    },
    tags: ['funções da linguagem', 'metalinguagem', 'dicionário']
  },
  {
    id: 'LIN-FUNC-008',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Funções da Linguagem',
    subtopic: 'Função Poética',
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Pluvial\n\n     A\n    C U V A\n   H       B\n  O         A\n M           N\nO             D\n              O...",
      source: "Poesia Concreta brasileira (adaptação lúdica)."
    },
    prompt: "Na poesia concreta e de vanguarda, a organização das palavras no espaço da página e a relação entre as letras são fundamentais para o sentido do poema. O poema acima simula a queda das gotas de chuva por meio da disposição gráfica da palavra 'CHUVABANDONANDO' (chuva + abandonando). Essa exploração da materialidade das palavras e do espaço caracteriza o ápice da função:",
    options: [
      { text: "Emotiva, pois transmite a tristeza e o choro do eu lírico.", isCorrect: false, distractorRationale: "O poema não apresenta marcas gramaticais de 1ª pessoa nem foco em sentimentos íntimos." },
      { text: "Fática, pois testa se o leitor consegue visualizar o que foi desenhado na folha.", isCorrect: false, distractorRationale: "A disposição visual não tem como objetivo primário testar o canal físico, mas sim construir o sentido." },
      { text: "Referencial, pois descreve cientificamente o processo de precipitação pluviométrica.", isCorrect: false, distractorRationale: "Não há descrição científica objetiva." },
      { text: "Poética, pois há um trabalho inovador e estético focado na forma e na estrutura da própria mensagem.", isCorrect: true, distractorRationale: "Correta. A manipulação da disposição das letras e do arranjo tipográfico evidencia que a preocupação central é em 'como' a mensagem está sendo transmitida, o que é a essência da função poética." },
      { text: "Metalinguística, pois o poema reflete teoricamente sobre como a poesia concreta deve ser lida.", isCorrect: false, distractorRationale: "O poema não está discutindo teoria poética ou as regras de sua composição verbalmente." }
    ],
    detailedExplanation: {
      summary: "A função poética se sobressai quando a estrutura, a forma, o som ou o aspecto visual da mensagem ganham protagonismo.",
      stepByStep: [
        "Passo 1: Analisar o arranjo visual: as letras formam um desenho (poesia visual/concreta).",
        "Passo 2: Entender que o significado não vem apenas da palavra, mas da FORMA como a palavra foi escrita na página.",
        "Passo 3: Relacionar o foco na elaboração e na estética da mensagem à função poética da linguagem."
      ],
      coreConcept: "Função Poética: Foco na Mensagem. Trabalha-se a estrutura, a sonoridade, as rimas e até a disposição visual (no caso da poesia visual/concreta).",
      trapWarning: "Muitos alunos esquecem que a disposição visual das letras na página em poemas visuais é um elemento estético que faz parte da Função Poética."
    },
    tags: ['funções da linguagem', 'função poética', 'poesia concreta', 'vanguarda']
  },
  {
    id: 'LIN-FUNC-009',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Funções da Linguagem',
    subtopic: 'Predominância Funcional',
    difficulty: 4,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Senhor Presidente, em resposta ao Ofício nº 45/2023 desta comissão, informo-lhe que o prazo para o envio do relatório fiscal foi prorrogado por 30 dias. Esta decisão foi tomada para garantir que todos os dados orçamentários dos hospitais vinculados ao nosso departamento sejam rigorosamente auditados. Sem mais para o momento, renovo meus votos de elevada estima e consideração.\nAtenciosamente,\nDiretor de Finanças da Saúde.",
      source: "Texto inédito."
    },
    prompt: "O ofício administrativo é um gênero textual que visa à comunicação oficial entre autoridades ou órgãos. No texto acima, encontram-se traços de mais de uma função da linguagem. No entanto, a função que predomina em todo o corpo do documento e que atende à sua finalidade principal é a:",
    options: [
      { text: "Conativa, por buscar convencer o presidente a auditar rigorosamente os hospitais citados.", isCorrect: false, distractorRationale: "O diretor não está ordenando a auditoria ao presidente, está apenas informando o motivo do atraso." },
      { text: "Referencial, pois o foco central é a transmissão de uma informação objetiva sobre prazos e procedimentos legais.", isCorrect: true, distractorRationale: "Correta. O núcleo do ofício é comunicar um fato (prorrogação de prazo) e sua justificativa (auditoria de dados), de forma clara, denotativa e objetiva, focando no contexto." },
      { text: "Emotiva, expressa nas linhas finais através da manifestação de sentimentos de elevada estima e afeto pelo presidente.", isCorrect: false, distractorRationale: "As fórmulas de cortesia final ('elevada estima') são jargões burocráticos padronizados, não expressam emoção genuína e subjetiva." },
      { text: "Fática, presente predominantemente no vocativo inicial e na assinatura final, que garantem que o papel seja lido.", isCorrect: false, distractorRationale: "Há função fática nos cumprimentos e despedidas, mas ela não é a função predominante do documento." },
      { text: "Metalinguística, visto que o texto cita e se refere a outro ofício (Ofício nº 45/2023) produzido anteriormente.", isCorrect: false, distractorRationale: "Fazer referência a outro documento não é metalinguagem (explicar a língua). É apenas referencial." }
    ],
    detailedExplanation: {
      summary: "Em textos oficiais e burocráticos, o foco principal é a transmissão de informações de forma impessoal e objetiva, o que caracteriza a função referencial.",
      stepByStep: [
        "Passo 1: Entender o objetivo do texto (comunicar a prorrogação de um prazo de forma oficial).",
        "Passo 2: Reconhecer elementos de outras funções (Fática em 'Senhor Presidente' e nas despedidas).",
        "Passo 3: Diferenciar elemento acessório do predominante. O núcleo do texto (informar o atraso e a causa) é focado no contexto/referente.",
        "Passo 4: Concluir que predomina a função referencial."
      ],
      coreConcept: "Função Referencial: A função predominante em relatórios, ofícios, e-mails de trabalho, notícias e textos didáticos, por informar de modo denotativo e neutro.",
      trapWarning: "Fórmulas de despedida como 'votos de estima' em documentos oficiais não caracterizam função emotiva, pois são convenções vazias de emoção subjetiva real."
    },
    tags: ['funções da linguagem', 'função referencial', 'redação oficial']
  },
  {
    id: 'LIN-FUNC-010',
    area: 'linguagens',
    competence: 8,
    skill: 26,
    topic: 'Funções da Linguagem',
    subtopic: 'Aplicações Práticas',
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entrevistador: Boa noite, Doutora. Como a senhora avalia o aumento dos casos de viroses nesta época do ano?\nMédica: Boa noite. Olha, veja bem, é... como eu posso te explicar de um jeito simples... a virose sazonal ocorre porque o clima mais frio faz com que... sabe, né... que as pessoas fiquem em ambientes fechados.",
      source: "Texto inédito."
    },
    prompt: "Na transcrição de uma entrevista falada espontânea, percebem-se diversas marcas de oralidade, tais como as expressões em destaque 'Olha', 'veja bem', 'é...', 'sabe, né...'. De acordo com os estudos da comunicação de Roman Jakobson, esses elementos linguísticos evidenciam principalmente o exercício da função:",
    options: [
      { text: "Poética, por criarem pausas rítmicas intencionais e dramáticas para o ouvinte.", isCorrect: false, distractorRationale: "As pausas são hesitações naturais da fala, não recursos estéticos elaborados intencionalmente." },
      { text: "Referencial, por adicionarem mais precisão e exatidão técnica ao discurso médico.", isCorrect: false, distractorRationale: "Ao contrário, esses marcadores expressam hesitação e busca por contato, não precisão técnica." },
      { text: "Fática, pois funcionam como marcadores conversacionais que servem para sustentar o contato entre os interlocutores.", isCorrect: true, distractorRationale: "Correta. Expressões como 'sabe?', 'né?', 'veja bem' e alongamentos ('é...') são usadas na oralidade para preencher o silêncio e manter o canal de comunicação aberto enquanto o falante elabora o pensamento." },
      { text: "Emotiva, pois demonstram o nervosismo e a insegurança patológica da entrevistada diante das câmeras.", isCorrect: false, distractorRationale: "Embora possam denotar certa ansiedade natural, a principal função desses marcadores na linguística é gerenciar o fluxo de comunicação e a atenção do ouvinte." },
      { text: "Metalinguística, visto que a médica para o discurso a fim de explicar o jargão 'virose sazonal'.", isCorrect: false, distractorRationale: "A expressão 'como posso explicar' sugere uma busca pela melhor forma, mas os marcadores listados no enunciado ('olha', 'veja bem', 'sabe, né') são fáticos." }
    ],
    detailedExplanation: {
      summary: "Marcadores conversacionais (né, sabe, entende) são usados para garantir que o interlocutor continue prestando atenção, atuando na função fática.",
      stepByStep: [
        "Passo 1: Isolar as expressões pedidas no enunciado: 'Olha', 'veja bem', 'é...', 'sabe, né...'.",
        "Passo 2: Refletir sobre seu papel num diálogo: elas não trazem informações novas, mas ajudam a preencher o vazio e prender a atenção do ouvinte.",
        "Passo 3: Identificar que ações voltadas para o canal de comunicação (manutenção do contato) correspondem à função fática."
      ],
      coreConcept: "Função Fática na Oralidade: Muito presente em diálogos reais e hesitações (né?, entende?, ahn, hum, veja bem), servindo para preencher espaços e manter o contato interpessoal ativo.",
      trapWarning: "Não confunda marcadores conversacionais naturais de interação fática com erro, nervosismo (emotiva) ou metalinguagem."
    },
    tags: ['funções da linguagem', 'função fática', 'marcas de oralidade']
  }
];
