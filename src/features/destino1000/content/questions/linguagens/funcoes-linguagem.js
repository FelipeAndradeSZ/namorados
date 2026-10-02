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
  },
  {
    id: "LIN-FUNC-011",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Funções da Linguagem",
    subtopic: "Função Emotiva (Expressiva) em Diários Pessoais e Testemunhos",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "'2 de maio de 1958. Eu não sou indolente. Há dias que eu fico revoltada. O que me choca é o descaso dos que podem. Eu escrevo a miséria e a vida que os favelados levam... Eu que antes de comer via o céu, as árvores, as aves, tudo tão alegre... hoje acho que tudo está desbotado... sinto uma dor imensa na alma ao ver meus filhos chorando de fome...'",
      source: "JESUS, Carolina Maria de. Quarto de Despejo: Diário de uma Favelada. São Paulo: Ática."
    },
    prompt: "No relato pungente de Carolina Maria de Jesus, o gênero diário íntimo é estruturado com predomínio da função emotiva (ou expressiva) da linguagem. Essa função evidencia-se linguisticamente pela:",
    options: [
      { id: "a", text: "centralidade no emissor, caracterizada pelo uso recorrente da primeira pessoa gramatical ('eu', 'meus filhos'), adjetivação subjetiva e expressão direta de estados anímicos de dor, revolta e sofrimento.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "descrição fria, estatística e distanciada do produto interno bruto da cidade de São Paulo.", isCorrect: false, distractorRationale: "Isso caracterizaria a função referencial objetiva, que é o oposto do depoimento comovido em primeira pessoa de Carolina." },
      { id: "c", text: "utilização contínua de verbos no imperativo convocando os leitores a assinar abaixo-assinados partidários.", isCorrect: false, distractorRationale: "O foco não está em dar ordens ao interlocutor (função conativa), mas em desabafar a própria dor interior." },
      { id: "d", text: "exploração de rimas ricas e métrica alexandrina decassílaba de acordo com os cânones parnasianos.", isCorrect: false, distractorRationale: "Trata-se de prosa confessional autobiográfica em prosa, não poesia de forma fixa clássica." },
      { id: "e", text: "busca incessante por verificar se a caneta tinteiro e o papel do caderno continuavam funcionando.", isCorrect: false, distractorRationale: "Testar o canal físico pertence à função fática." }
    ],
    detailedExplanation: {
      summary: "A função emotiva centra-se no EMISSOR (quem fala/escreve). Revela a subjetividade, a carga emocional, os sentimentos íntimos, utilizando verbos e pronomes de 1ª pessoa, pontuação expressiva (exclamações, reticências) e adjetivos opinativos.",
      stepByStep: [
        "Foco no emissor: A voz de Carolina expõe sua vulnerabilidade, sua indignação e sua fome ('sinto uma dor imensa', 'eu fico revoltada').",
        "Marcas gramaticais: Primeira pessoa do singular ('eu', 'me', 'meus').",
        "Gêneros típicos da função emotiva: Diários pessoais, cartas de amor, memórias confessionais, relatos de testemunho, depoimentos autobiográficos."
      ],
      coreConcept: "Função Emotiva (Expressiva): Foco no Emissor, Subjetividade e Primeira Pessoa",
      trapWarning: "No ENEM, não confunda o sofrimento social retratado (tema) com a função da linguagem: o foco nos sentimentos e na perspectiva pessoal do sujeito que fala é a marca definitiva da função emotiva."
    },
    commonTraps: [
      "Confundir função emotiva (foco no emissor/sentimento) com função conativa (foco no receptor/ordem)",
      "Achar que todo texto que emociona o leitor é emotivo (o que define é o foco no EMISSOR, não no leitor)"
    ],
    tags: ["funcoes-da-linguagem", "funcao-emotiva", "carolina-maria-de-jesus", "diario-intimo", "subjetividade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FUNC-012",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Funções da Linguagem",
    subtopic: "Função Referencial (Informativa) em Textos Científicos",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "'As vacinas de RNA mensageiro (mRNA) utilizam uma molécula sintética de ácido ribonucleico que instrui os ribossomos das células hospedeiras a sintetizarem temporariamente a proteína Spike do vírus. O sistema imunológico reconhece a glicoproteína como antígeno exógeno e desencadeia a proliferação clonal de linfócitos T e a síntese de anticorpos neutralizantes específicos da classe IgG, conferindo imunidade adquirida sem expor o indivíduo ao patógeno atenuado ou inativado.'",
      source: "Revista Brasileira de Imunologia e Biotecnologia, 2024."
    },
    prompt: "No artigo de divulgação científica acima, a linguagem é estruturada prioritariamente com foco na função referencial (denotativa ou informativa). Essa predominância justifica-se pelo fato de o texto:",
    options: [
      { id: "a", text: "privilegiar o referente (o contexto objetivo), utilizando terceira pessoa gramatical, léxico preciso e unívoco e neutralidade descritiva voltada a transmitir conhecimento científico verificável.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "apelar para o sentimento de compaixão e medo do leitor através de orações exclamativas e desabafos de 1ª pessoa.", isCorrect: false, distractorRationale: "O texto não possui desabafos nem exclamações; é rigorosamente objetivo e impessoal." },
      { id: "c", text: "utilizar versos livres rimados para criar sonoridade musical envolvente.", isCorrect: false, distractorRationale: "O texto é em prosa científica com vocabulário técnico rigoroso." },
      { id: "d", text: "ordenar imperativamente que o cidadão compareça ao posto de saúde para vacinar-se imediatamente.", isCorrect: false, distractorRationale: "Não há verbos no imperativo nem apelo de persuasão (função conativa); há explicação biológica." },
      { id: "e", text: "questionar o significado de palavras da gramática grega arcaica.", isCorrect: false, distractorRationale: "O texto trata de biologia molecular contemporânea, sem reflexão sobre o código gramatical (metalinguagem)." }
    ],
    detailedExplanation: {
      summary: "A função referencial (denotativa/cognitiva) foca no REFERENTE/CONTEXTO (o assunto). Sua meta é informar com clareza, impessoalidade e exatidão, empregando palavras em sentido literal (denotativo) e verbos em 3ª pessoa.",
      stepByStep: [
        "Foco no referente: O centro da mensagem é a explicação do mecanismo imunológico do mRNA.",
        "Linguagem denotativa: Palavras em sentido unívoco de dicionário, sem metáforas poéticas nem ambiguidades.",
        "Gêneros típicos da função referencial: Artigos científicos, notícias jornalísticas factuais, relatórios técnicos, livros didáticos, verbetes enciclopédicos."
      ],
      coreConcept: "Função Referencial: Foco no Contexto, Impessoalidade, Denotação e Objetividade",
      trapWarning: "No ENEM, identifique a função referencial pela ausência de marcas de opinião pessoal escancarada e pela presença de dados, fatos e terminologia técnica precisa."
    },
    commonTraps: [
      "Confundir termos biológicos complexos com metalinguagem (biologia é ciência da vida/referente, não ciência da gramática/código)",
      "Supor que textos referenciais não possuem rigor comunicativo"
    ],
    tags: ["funcoes-da-linguagem", "funcao-referencial", "denotacao", "texto-cientifico", "objetividade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FUNC-013",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Funções da Linguagem",
    subtopic: "Função Conativa (Apelativa) e Estratégias Persuasivas",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha institucional de combate ao mosquito transmissor da dengue e do zika vírus, o cartaz fixado nas estações de trem exibe o seguinte texto em destaque:\n\n'NÃO DÊ FOLGA PARA O MOSQUITO! Verifique seus vasos de plantas toda semana. Elimine os pratos com água parada e tampe bem a sua caixa d'água. Proteja a sua família e os seus vizinhos. O combate começa na sua casa.'",
      source: "Ministério da Saúde, Campanha Nacional de Vigilância em Saúde, 2024."
    },
    prompt: "A estruturação composicional do anúncio orienta-se pela função conativa (ou apelativa) da linguagem. O mecanismo gramatical prioritário utilizado para mobilizar a atitude prática do leitor consiste no emprego de:",
    options: [
      { id: "a", text: "verbos flexionados no modo imperativo ('Não dê', 'Verifique', 'Elimine', 'tampe', 'Proteja') associados a pronomes de segunda pessoa ('seus', 'sua'), visando influenciar e direcionar a conduta do interlocutor.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "substantivos abstratos eruditos e termos em latim que dificultam a leitura rápida.", isCorrect: false, distractorRationale: "O anúncio é direto, popular e didático para atingir toda a população usuária do transporte público." },
      { id: "c", text: "verbos conjugados no pretérito mais-que-perfeito para remeter a ações do passado distante.", isCorrect: false, distractorRationale: "O apelo é imediato e presente, demandando ação no agora com imperativo afirmativo e negativo." },
      { id: "d", text: "figuras de som complexas voltadas unicamente ao deleite estético musical de leitores eruditos.", isCorrect: false, distractorRationale: "A meta não é o virtuosismo estético (função poética), mas a persuasão comportamental (função conativa)." },
      { id: "e", text: "depoimentos confessionais da intimidade amorosa dos agentes comunitários de saúde.", isCorrect: false, distractorRationale: "Não há confissão íntima em primeira pessoa (função emotiva); há conclamação de dever cívico coletivo." }
    ],
    detailedExplanation: {
      summary: "A função conativa (ou apelativa) centra-se no RECEPTOR (quem recebe a mensagem). O objetivo é persuadir, seduzir, convencer, aconselhar ou ordenar uma ação concreta, empregando verbos no imperativo e vocativos.",
      stepByStep: [
        "Foco no receptor: Todo o texto é direcionado a 'você' (o cidadão leitor).",
        "Marcas gramaticais do imperativo: 'Verifique', 'Elimine', 'Tampe', 'Proteja' (ordens, conselhos e pedidos de ação sanitária).",
        "Gêneros típicos da função conativa: Publicidades comerciais, sermões religiosos, discursos políticos eleitorais, campanhas educativas comunitárias, manuais de autoajuda."
      ],
      coreConcept: "Função Conativa (Apelativa): Foco no Receptor, Modo Imperativo e Persuasão",
      trapWarning: "Lembre-se: 'Conativa' vem do latim conari (esforçar-se, tentar influenciar). Não confunda 'conativa' (apelativa) com 'conotativa' (sentido figurado)!"
    },
    commonTraps: [
      "Confundir 'conativa' (função da linguagem) com 'conotativa' (sentido figurado)",
      "Achar que imperativo é apenas grosseria/ordem militar (imperativo é pedido, orientação e conselho)"
    ],
    tags: ["funcoes-da-linguagem", "funcao-conativa", "modo-imperativo", "campanhas-educativas", "persuasao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FUNC-014",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Funções da Linguagem",
    subtopic: "Função Metalinguística: O Código Explicando o Próprio Código",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere os dois textos a seguir:\n\nTexto 1 (Verbete de dicionário):\n'ver.be.te (s.m.) Apontamento, nota. / Conjunto das acepções e dos exemplos de uma palavra em um dicionário ou enciclopédia; entrada lexical.'\n\nTexto 2 (Poema 'Catar Feijão', de João Cabral de Melo Neto):\n'Catar feijão se limita com escrever:\njoga-se os grãos na água do alguidar\ne as palavras na folha de papel;\ne depois, joga-se fora o grão que boiou\nou a palavra que não diz nada...'",
      source: "Estudos de Linguística e Poética, 2024."
    },
    prompt: "Tanto o verbete lexicográfico quanto o poema cabralino realizam primordialmente a função metalinguística da linguagem. Essa convergência funcional funda-se no fato de que ambos os textos:",
    options: [
      { id: "a", text: "utilizam a própria linguagem (o código verbal) para descrever, conceituar e refletir sobre a própria linguagem e o ato de escrever.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "têm por objetivo único induzir o consumidor a adquirir sacos de feijão em feiras livres.", isCorrect: false, distractorRationale: "O feijão no poema é uma metáfora para o trabalho rigoroso de lapidação da palavra escrita." },
      { id: "c", text: "expressam o desabafo angustiado e o choro descontrolado de um eu lírico desiludido no amor.", isCorrect: false, distractorRationale: "João Cabral é o poeta engenheiro, cerebral e antirromântico por excelência." },
      { id: "d", text: "testam a eficiência do aparelho auditivo de pessoas que escutam gravações em fones de ouvido.", isCorrect: false, distractorRationale: "Isso pertenceria à função fática de teste do canal." },
      { id: "e", text: "proíbem os escritores de usarem papéis e canetas na produção de poemas contemporâneos.", isCorrect: false, distractorRationale: "O poema reflete sobre o ofício minucioso da escrita literária." }
    ],
    detailedExplanation: {
      summary: "A função metalinguística centra-se no CÓDIGO (o idioma, a língua, o signo). Ocorre sempre que a palavra é usada para falar da palavra, a poesia fala do ato de fazer poema, a pintura mostra um quadro sendo pintado ou o cinema mostra os bastidores de um filme.",
      stepByStep: [
        "Foco no código: Empregamos o português para explicar termos em português (verbete do Texto 1).",
        "Metapoesia: João Cabral usa versos para refletir sobre o esforço artesanal e crítico da escrita ('jogar fora a palavra que não diz nada').",
        "Gêneros típicos da função metalinguística: Dicionários, gramáticas, aulas de português, livros de teoria literária, poemas metalinguísticos e filmes sobre cinema."
      ],
      coreConcept: "Função Metalinguística: Foco no Código, Metalinguagem e Autorreflexividade",
      trapWarning: "No ENEM, poesia sobre o ato de fazer poesia ('Catar Feijão', 'A Flor e a Náusea', 'Motivo' de Cecília Meireles) é clássico absoluto de questão de metalinguagem!"
    },
    commonTraps: [
      "Achar que metalinguagem só existe em dicionário técnico e não em poemas",
      "Confundir a metáfora do feijão com tema puramente culinário/referencial"
    ],
    tags: ["funcoes-da-linguagem", "funcao-metalinguistica", "codigo", "joao-cabral-de-melo-neto", "metalinguagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FUNC-015",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Funções da Linguagem",
    subtopic: "Função Poética: A Materialidade e a Forma da Mensagem",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a icônica poesia visual concreta de Décio Pignatari (1957):\n\n'beba coca cola\nbabe        cola\nbeba coca\nbabe cola caco\ncaco\ncola\ncloaca'",
      source: "PIGNATARI, Décio. Poesia Pois É Poesia. São Paulo: Brasiliense."
    },
    prompt: "No célebre poema concreto de Pignatari, o ápice da função poética da linguagem manifesta-se no arranjo construtivo textual em que:",
    options: [
      { id: "a", text: "o foco recai sobre a própria materialidade da mensagem, trabalhando a sonoridade, as aliterações em /k/ e a decomposição visual das sílabas até metamorfosear o slogan publicitário da bebida no termo degradante 'cloaca'.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o texto atua como um manual farmacêutico com a receita de substâncias químicas de refrigerantes.", isCorrect: false, distractorRationale: "O poema é uma criação estética de vanguarda que subverte o slogan de consumo, não bula farmacêutica." },
      { id: "c", text: "o poeta expressa seu amor romântico idealizado pela musa inspiradora das colinas medievais.", isCorrect: false, distractorRationale: "O Concretismo é radicalmente desprovido de confessionalismo romântico nostálgico." },
      { id: "d", text: "o autor verifica exclusivamente se o papel da gráfica possuía gramatura adequada para impressão.", isCorrect: false, distractorRationale: "Isso seria preocupação com o canal físico, e não com a forma poética do signo." },
      { id: "e", text: "a intenção exclusiva era incentivar o aumento das vendas de bebidas gaseificadas em lanchonetes.", isCorrect: false, distractorRationale: "A desconstrução crítica visa alertar para a alienação e degradação provocadas pela cultura de massa ('cloaca')." }
    ],
    detailedExplanation: {
      summary: "A função poética centra-se na MENSAGEM (no arranjo estético, no significante, na rima, no ritmo e na forma). Como formulou Roman Jakobson, a função poética projeta o princípio da equivalência do eixo da seleção sobre o eixo da combinação.",
      stepByStep: [
        "Foco na mensagem: O poeta seleciona e combina fonemas (beba/babe, coca/caco/cloaca).",
        "Tensão visual e semântica: O slogan capitalista de consumo 'beba coca cola' é desmontado sílaba a sílaba até revelar seu avesso: dejeto, esgoto ('cloaca').",
        "Função poética além da literatura: A função poética também é fartamente usada na publicidade (em trocadilhos, rimas de slogans e trava-línguas) para fixar a marca na memória auditiva do público."
      ],
      coreConcept: "Função Poética: Foco na Mensagem, Trabalho Estético com o Significante e Concretismo",
      trapWarning: "Atenção: a função poética NÃO é exclusiva da poesia! Ela aparece em slogans publicitários ('Tomou Doril, a dor sumiu'), provérbios populares ('Água mole em pedra dura...') e títulos criativos de matérias de jornal."
    },
    commonTraps: [
      "Achar que função poética só existe quando há sentimento amoroso lírico",
      "Ignorar o trabalho visual e fônico com as letras no poema concreto"
    ],
    tags: ["funcoes-da-linguagem", "funcao-poetica", "poesia-concreta", "decio-pignatari", "mensagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FUNC-016",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Funções da Linguagem",
    subtopic: "Função Fática nas Plataformas Digitais de Videoconferência",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o diálogo inicial captado em uma reunião virtual de trabalho por videoconferência:\n\n— Bom dia, pessoal. Vocês conseguem me ouvir bem?\n— Alô? Estamos ouvindo, mas o seu áudio está meio picotado...\n— Esperem um segundo, vou fechar a câmera para ver se melhora a conexão... Testando: um, dois, três. Estão me ouvindo agora?\n— Agora sim! Alto e claro. Pode prosseguir.",
      source: "Comunicação Digital e Práticas Interativas Contemporâneas, 2024."
    },
    prompt: "Nas interações mediadas por ambientes tecnológicos, enunciados como 'Vocês conseguem me ouvir bem?', 'Alô?', 'Testando: um, dois, três' e 'Agora sim!' exemplificam a função fática da linguagem porque visam primordialmente:",
    options: [
      { id: "a", text: "estabelecer, testar, manter ou encerrar o funcionamento do canal de comunicação, assegurando a transmissão técnica do contato entre os interlocutores antes de transmitir conteúdos temáticos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "expor uma teoria matemática avançada sobre a velocidade da luz no vácuo quântico.", isCorrect: false, distractorRationale: "O diálogo trata de checar o microfone e a conexão de rede, sem teorias físicas abstratas." },
      { id: "c", text: "persuadir os colegas de trabalho a votar em uma chapa sindical em eleição corporativa.", isCorrect: false, distractorRationale: "Não há teor político eleitoral persuasivo (função conativa)." },
      { id: "d", text: "descrever o significado lexicográfico da palavra 'videoconferência' na língua portuguesa.", isCorrect: false, distractorRationale: "Explicar palavras de dicionário pertence à função metalinguística." },
      { id: "e", text: "expressar desespero existencial e melancolia profunda provocada pelo isolamento social.", isCorrect: false, distractorRationale: "As frases são operacionais de verificação de sinal sonoro." }
    ],
    detailedExplanation: {
      summary: "A função fática centra-se no CANAL (o meio físico e psicológico que conecta emissor e receptor). Seu propósito não é transmitir informações novas, mas verificar se o canal está aberto, funcionando e sem ruídos.",
      stepByStep: [
        "Foco no canal: Garantir que a rede, o microfone e as caixas de som estão transmitindo adequadamente o sinal sonoro.",
        "Exemplos clássicos da função fática: 'Alô?', 'Tô te ouvindo', 'Câmbio desligo', 'Boa tarde', 'Entendeu?', acenos de mão, conversas de elevador sobre o tempo ('Parece que vai chover, né?').",
        "Importância no ENEM: O exame frequentemente explora a função fática em telefonemas, tirinhas cômicas de personagens no telefone e reuniões digitais remotas."
      ],
      coreConcept: "Função Fática: Foco no Canal, Manutenção do Contato e Checagem de Ruído",
      trapWarning: "No ENEM, cumprimentos sociais ('Bom dia, tudo bem?') e falas de elevador são predominantemente FÁTICOS: servem para quebrar o gelo e abrir o canal social, sem que a pessoa realmente espere um laudo médico sobre a sua saúde."
    },
    commonTraps: [
      "Achar que saudações cotidianas ('tudo bem?') pertencem à função emotiva ou referencial",
      "Ignorar o papel tecnológico da função fática em chamadas de voz e vídeo"
    ],
    tags: ["funcoes-da-linguagem", "funcao-fatica", "canal-de-comunicacao", "videoconferencia", "oralidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FUNC-017",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Funções da Linguagem",
    subtopic: "Hibridismo de Funções da Linguagem em Textos Complexos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma peça publicitária de um medicamento fitoterápico para combater o estresse e a insônia, lê-se o seguinte texto veiculado em uma revista:\n\n'NOITES CLARAS, DIAS LEVES. (Slogan em rima com tipografia suave)\nFormulado à base de extrato concentrado de Passiflora incarnata, nosso fitoterápico atua nos receptores GABAérgicos, comprovando em ensaios clínicos a redução de 78% na latência do sono sem causar dependência química. (Dados descritivos)\nExperimente hoje mesmo e reconquiste a tranquilidade que você merece. Peça ao seu farmacêutico!' (Fechamento com imperativo)",
      source: "Comunicação e Publicidade no Setor Farmacêutico, 2024."
    },
    prompt: "Textos reais do cotidiano frequentemente combinam múltiplos recursos. Na análise da hierarquia funcional da peça publicitária acima, constata-se que ela articula:",
    options: [
      { id: "a", text: "a função conativa como dominante (persuadir o leitor à compra), ancorada na função referencial (dados científicos que conferem credibilidade ao produto) e na função poética (slogan rítmico memorável).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a função metalinguística como a única e exclusiva existente no anúncio farmacêutico.", isCorrect: false, distractorRationale: "O texto não se propõe a explicar a gramática da língua portuguesa, mas a vender o medicamento." },
      { id: "c", text: "a função emotiva predominante, visto que o laboratório desabafa sobre suas dificuldades financeiras com a inflação.", isCorrect: false, distractorRationale: "Não há confissão íntima pessoal do laboratório; há estratégia de marketing persuasivo." },
      { id: "d", text: "a completa inexistência de qualquer intenção de influenciar a conduta ou o consumo do leitor.", isCorrect: false, distractorRationale: "A publicidade é orientada por definição para influenciar a ação de compra do consumidor." },
      { id: "e", text: "uma narrativa mitológica de ficção científica ambientada no século vinte e três.", isCorrect: false, distractorRationale: "O anúncio trata de um produto fitoterápico de aplicação clínica real contemporânea." }
    ],
    detailedExplanation: {
      summary: "Roman Jakobson frisou que dificilmente encontramos mensagens com apenas uma função: a riqueza da análise linguística reside em identificar a FUNÇÃO PREDOMINANTE (hierarquicamente superior) e as funções auxiliares que colaboram com o propósito discursivo geral.",
      stepByStep: [
        "Função predominante (Conativa): 'Experimente hoje mesmo', 'Peça ao seu farmacêutico' ⟹ o objetivo final da publicidade é induzir o leitor a comprar.",
        "Função auxiliar 1 (Referencial): 'Passiflora incarnata', 'receptores GABAérgicos', 'redução de 78%' ⟹ serve de argumento de autoridade técnica para legitimar a eficácia.",
        "Função auxiliar 2 (Poética): 'Noites claras, dias leves' ⟹ antítese e paralelismo sonoro facilitam a fixação afetiva e estética na memória do público."
      ],
      coreConcept: "Hibridismo Funcional: Função Dominante e Funções Acessórias no Gênero Publicitário",
      trapWarning: "No ENEM, preste atenção no enunciado: quando a questão pergunta 'qual é a função predominante', procure o OBJETIVO FINAL do gênero textual!"
    },
    commonTraps: [
      "Achar que um texto só pode ter uma função da linguagem e nada mais",
      "Iludir-se com os dados científicos da função referencial e esquecer que a meta final do anúncio é a venda (conativa)"
    ],
    tags: ["funcoes-da-linguagem", "hibridismo-funcional", "publicidade", "persuasao", "jakobson"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FUNC-018",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Funções da Linguagem",
    subtopic: "A Função Emotiva vs. Conativa na Canção Popular de Protesto",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere dois clássicos da canção de resistência cultural durante o período da Ditadura Militar no Brasil:\n\nCanção 1 ('Cálice', de Chico Buarque e Gilberto Gil, 1973):\n'Pai, afasta de mim esse cálice\nDe vinho tinto de sangue...\nComo beber dessa bebida amarga\nTragar a dor, engolir a labuta\nMesmo calada a boca, resta o peito\nSilêncio na cidade não se escuta...'\n\nCanção 2 ('Pra Não Dizer que Não Falei das Flores', de Geraldo Vandré, 1968):\n'Caminhando e cantando e seguindo a canção\nSomos todos iguais braços dados ou não...\nVem, vamos embora, que esperar não é saber\nQuem sabe faz a hora, não espera acontecer.'",
      source: "Música Popular Brasileira e Resistência Política, 2024."
    },
    prompt: "Ao analisar a modulação das funções da linguagem nos refrões das duas canções, constata-se que:",
    options: [
      { id: "a", text: "na Canção 1 predomina a função emotiva, expressando a angústia sufocada e a dor existencial do sujeito sob a opressão; enquanto na Canção 2 sobressai a função conativa, convocando imperativamente a coletividade à mobilização e à ação histórica imediata ('Vem, vamos embora').", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ambas as canções limitam-se à função fática de teste de cabos de som de guitarras elétricas em estúdio.", isCorrect: false, distractorRationale: "As canções são obras poéticas de alta densidade lírica e política sobre o contexto repressivo do país." },
      { id: "c", text: "na Canção 1 há um apelo militar de submissão voluntária às forças repressivas da censura.", isCorrect: false, distractorRationale: "O trocadilho 'cálice / cale-se' é uma denúncia poética contundente contra a censura e a tortura." },
      { id: "d", text: "a Canção 2 é desprovida de qualquer apelo ao público, funcionando como um monólogo interior passivo.", isCorrect: false, distractorRationale: "O refrão de Vandré tornou-se o hino de conclamação ativa da juventude e dos estudantes à resistência." },
      { id: "e", text: "as letras pertencem à função referencial de boletins de trânsito rodoviário interestadual.", isCorrect: false, distractorRationale: "Trata-se de canção engajada da MPB, não de informe de tráfego de rodovias." }
    ],
    detailedExplanation: {
      summary: "Chico Buarque interioriza o drama da repressão na dor da voz silenciada ('Cálice' = 'Cale-se'), mobilizando a função emotiva e poética; já Geraldo Vandré constrói um hino de marcha de mobilização coletiva com imperativo chamativo ('Vem, vamos embora!'), operando a função conativa.",
      stepByStep: [
        "Canção 1 ('Cálice'): Metáfora bíblica e dor corporal ('dor amarga', 'boca calada', 'sangue') ⟹ foco na expressão do sofrimento do eu poético perante a censura (Função Emotiva).",
        "Canção 2 ('Pra não dizer...'): Verbo convocatório no imperativo ('Vem'), plural associativo ('vamos embora') ⟹ conclamação explícita ao ouvinte para que tome uma atitude de luta política (Função Conativa).",
        "Relevância no ENEM: O exame frequentemente analisa canções da era dos festivais correlacionando recursos gramaticais e contexto histórico."
      ],
      coreConcept: "Canção de Protesto: Diferenciação entre a Expressão da Dor (Emotiva) e o Chamamento à Ação (Conativa)",
      trapWarning: "No ENEM, repare como o pronome e o verbo entregam a função: se o texto diz 'engulo a dor, resta meu peito' é 1ª pessoa (emotiva); se diz 'vem você também, não espere' é 2ª pessoa/imperativo (conativa)."
    },
    commonTraps: [
      "Achar que toda canção política é apenas conativa sem distinguir nuances poéticas e emotivas",
      "Não perceber a força do verbo 'vem' como operador apelativo conativo"
    ],
    tags: ["funcoes-da-linguagem", "funcao-conativa", "funcao-emotiva", "chico-buarque", "geraldo-vandre", "mpb"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FUNC-019",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Funções da Linguagem",
    subtopic: "Metalinguagem Multimodal nas Artes Visuais e no Cinema",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O conceito jakobsoniano de metalinguagem (o código voltando-se sobre o próprio código) expandiu-se da linguística verbal para todas as linguagens semióticas contemporâneas. Nas artes visuais, manifesta-se em quadros como 'As Meninas' de Diego Velázquez (no qual o pintor retrata a si mesmo em frente a uma tela gigante dentro da cena, com um pincel na mão, pintando a própria obra que o observador contempla); no cinema, consolida-se em filmes que expõem claquetes, câmeras e refletores nos bastidores ou quando personagens 'quebram a quarta parede' e dialogam com o espectador sobre a estrutura do roteiro cinematográfico.",
      source: "Semiótica da Arte e Metalinguagens Contemporâneas, 2024."
    },
    prompt: "A manifestação do procedimento metalinguístico em linguagens artísticas visuais e cinematográficas tem como efeito estético e reflexivo:",
    options: [
      { id: "a", text: "romper a ilusão de transparência da representação, chamando a atenção do público para os bastidores, as regras, as técnicas e os artifícios da própria construção artística.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "garantir que o espectador acredite piamente que o filme que assiste é uma transmissão jornalística ao vivo da realidade nua e crua.", isCorrect: false, distractorRationale: "A metalinguagem faz exatamente o oposto: desfaz a ilusão realista para mostrar que a obra é um artifício construído." },
      { id: "c", text: "proibir o uso de atores de carne e osso em produções audiovisuais.", isCorrect: false, distractorRationale: "Os atores continuam presentes, muitas vezes interpretando cineastas e artistas." },
      { id: "d", text: "provar que telas de pintura a óleo não utilizam pigmentos ou solventes químicos.", isCorrect: false, distractorRationale: "Velázquez usa tinta e tela tradicionais, inovando na reflexão metalinguística sobre o ato de pintar." },
      { id: "e", text: "destruir todos os roteiros cinematográficos em favor exclusivo de romances impressos em tipografia gótica.", isCorrect: false, distractorRationale: "A metalinguagem cinematográfica valoriza e complexifica o próprio cinema." }
    ],
    detailedExplanation: {
      summary: "Assim como a palavra pode explicar a palavra (dicionário), a pintura pode pintar a si mesma (Velázquez) e o cinema pode filmar o ato de filmar (metacinema). A metalinguagem expõe o 'truque da arte', desmistificando a ingenuidade do público.",
      stepByStep: [
        "Metalinguagem visual: O pintor pinta o ato da pintura, a mão desenhando a mão (como nas famosas gravuras de Escher).",
        "Quebra da quarta parede no cinema: O ator olha direto para a lente e fala com o espectador, revelando que aquilo é uma encenação com regras prévias.",
        "Significado crítico no ENEM: A arte moderna recusa ser um espelho passivo e transparente do real; ela exige que o espectador pense sobre como a imagem foi produzida."
      ],
      coreConcept: "Metalinguagem Multimodal: Artes Visuais, Metacinema e Ruptura da Ilusão de Realidade",
      trapWarning: "No ENEM, questões sobre metalinguagem em cartuns, quadrinhos (onde a personagem conversa com o desenhista) ou fotografias cobram a percepção de que o meio artístico está refletindo sobre sua própria natureza!"
    },
    commonTraps: [
      "Achar que metalinguagem é restrita a textos com palavras escritas",
      "Confundir quebra da quarta parede com mero erro de gravação de cena"
    ],
    tags: ["funcoes-da-linguagem", "metalinguagem", "artes-visuais", "cinema", "semiotica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-FUNC-020",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Funções da Linguagem",
    subtopic: "A Matriz Geral da Comunicação de Roman Jakobson",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No seminal ensaio 'Linguística e Poética' (1960), o linguista russo Roman Jakobson esquematizou os seis fatores constitutivos fundamentais de qualquer ato de comunicação verbal e estabeleceu uma correspondência unívoca direta entre cada um desses polos e uma respectiva função da linguagem:\n\n[CONTEXTO / REFERENTE] ⟹ Função Referencial\n[EMISSOR / DESTINADOR] ⟹ Função Emotiva\n[MENSAGEM] ⟹ Função Poética\n[CANAL / CONTATO] ⟹ Função Fática\n[CÓDIGO] ⟹ Função Metalinguística\n[RECEPTOR / DESTINATÁRIO] ⟹ Função Conativa",
      source: "JAKOBSON, Roman. Linguística e Comunicação. São Paulo: Cultrix, 2023."
    },
    prompt: "Com base no modelo jakobsoniano de comunicação, assinale a alternativa que correlaciona corretamente a situação de interação discursiva com o elemento focalizado e sua respectiva função dominante da linguagem:",
    options: [
      { id: "a", text: "Um professor de língua portuguesa explicando em sala a regra de concordância verbal foca no CÓDIGO linguístico, exercendo primordialmente a função METALINGUÍSTICA.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Um cientista divulgando a descoberta de um novo fóssil pré-histórico foca no RECEPTOR, exercendo a função CONATIVA apelativa.", isCorrect: false, distractorRationale: "O cientista foca no CONTEXTO/REFERENTE factual (o fóssil), exercendo a função REFERENCIAL denotativa." },
      { id: "c", text: "Um homem dizendo 'alô, alô, está me ouvindo?' ao celular foca na MENSAGEM poética, exercendo a função POÉTICA.", isCorrect: false, distractorRationale: "Testar a ligação foca no CANAL físico de comunicação, exercendo a função FÁTICA." },
      { id: "d", text: "Um cartaz eleitoral conclamando 'Vote no candidato X para mudar nossa cidade' foca no EMISSOR íntimo, exercendo a função EMOTIVA.", isCorrect: false, distractorRationale: "O cartaz conclamando o eleitor ao voto foca no RECEPTOR, exercendo a função CONATIVA apelativa." },
      { id: "e", text: "Um poeta lapidando rimas ricas e ritmo decassílabo em um soneto foca no CANAL tecnológico, exercendo a função FÁTICA.", isCorrect: false, distractorRationale: "Trabalhar a forma estética da palavra foca na MENSAGEM, exercendo a função POÉTICA." }
    ],
    detailedExplanation: {
      summary: "Essa questão sintetiza toda a teoria das funções da linguagem do ENEM: a correspondência matemática perfeita entre o polo do circuito comunicativo e a função exercida.",
      stepByStep: [
        "1. EMISSOR ⟹ Função Emotiva (sentimentos de quem fala).",
        "2. RECEPTOR ⟹ Função Conativa (ordens/persuasão sobre quem ouve).",
        "3. REFERENTE ⟹ Função Referencial (dados/fatos do mundo real).",
        "4. MENSAGEM ⟹ Função Poética (estética e forma do texto).",
        "5. CANAL ⟹ Função Fática (conexão, testes e saudações).",
        "6. CÓDIGO ⟹ Função Metalinguística (a língua explicando a si mesma)."
      ],
      coreConcept: "A Matriz dos Seis Fatores da Comunicação de Roman Jakobson e as Funções da Linguagem",
      trapWarning: "Esta tabela resumo deve estar gravada na memória de todo candidato de alta performance no ENEM: dominar os 6 polos garante acerto certeiro nas questões de Linguagens!"
    },
    commonTraps: [
      "Trocar a correspondência dos polos da comunicação de Jakobson",
      "Esquecer que o foco no código é que gera a metalinguagem"
    ],
    tags: ["funcoes-da-linguagem", "roman-jakobson", "fatores-da-comunicacao", "teoria-da-linguagem", "sistematizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
