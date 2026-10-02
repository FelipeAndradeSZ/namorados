/**
 * Banco de Questões ENEM — Ciências da Natureza
 * Módulo: Evolução Biológica, Neodarwinismo e Genética de Populações
 * 
 * 25 Questões Inéditas Rigorosamente Alinhadas à Matriz do INEP
 * Validação: 5 alternativas, 1 correta, justificativa para cada distrator,
 * resolução pedagógica passo a passo e foco nos pilares da TRI.
 * ZERO termos de viagem.
 */

export const QUESTIONS_EVOLUCAO = [
  {
    id: "NAT-EVO-001",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Seleção Natural vs Lamarquismo: Resistência a Antibióticos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em ambientes hospitalares, o uso indiscriminado e frequente de antibióticos de amplo espectro tem levado ao aumento alarmante de cepas bacterianas multirresistentes ('superbactérias'). Pacientes e leigos frequentemente acreditam que 'o medicamento ensina a bactéria a se proteger e faz com que ela crie uma mutação para sobreviver ao tratamento'.",
      source: "Microbiologia Clínica e Epidemiologia das Doenças Infecciosas"
    },
    prompt: "À luz da Teoria Sintética da Evolução (Neodarwinismo), o mecanismo científico correto que explica o surgimento de bactérias resistentes a antibióticos baseia-se no fato de que:",
    options: [
      { id: "a", text: "as mutações e recombinações genéticas que conferem resistência ocorrem de forma espontânea e prévia na população bacteriana, atuando o antibiótico como agente seletivo ambiental que elimina as bactérias sensíveis e preserva as resistentes.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o antibiótico induz diretamente alterações direcionadas no DNA bacteriano para que a célula se adapte à nova condição química hostil.", isCorrect: false, distractorRationale: "Isso expressa a visão lamarquista errônea; o antibiótico não direciona mutações benéficas, ele apenas seleciona." },
      { id: "c", text: "as bactérias sensíveis aprendem a metabolizar o antibiótico como fonte primária de glicose e transmitem esse hábito adquirido aos descendentes.", isCorrect: false, distractorRationale: "Hábitos ou adaptações fenotípicas adquiridas não alteram o código genético hereditário (erro lamarquista)." },
      { id: "d", text: "a resistência surge pela perda completa de parede celular em todas as espécies bacterianas simultaneamente.", isCorrect: false, distractorRationale: "A resistência envolve enzimas inativadoras (ex: beta-lactamases) ou bombas de efluxo, e não perda generalizada da parede celular." },
      { id: "e", text: "as bactérias entram em processo de meiose obrigatória para duplicar o número de plasmídeos de resistência.", isCorrect: false, distractorRationale: "Bactérias são procariontes e não realizam meiose celular." }
    ],
    detailedExplanation: {
      summary: "O clássico equívoco de Lamarck postula que o meio 'provoca a adaptação na hora da necessidade'. No Neodarwinismo, a variabilidade genética pré-existe (por mutações ao acaso e plasmídeos de resistência conjugados). Quando o antibiótico é administrado, ele funciona como filtro seletivo: extermina as suscetíveis e deixa livres as resistentes para se multiplicarem.",
      stepByStep: [
        "1. Variabilidade genética inicial: Em uma colônia de bilhões de bactérias, mutações aleatórias já existem antes da aplicação do remédio.",
        "2. Pressão seletiva: O antibiótico mata as bactérias sensíveis.",
        "3. Sobrevivência diferencial: As poucas bactérias portadoras de genes de resistência sobrevivem com fartura de recursos.",
        "4. Sucesso reprodutivo: Por fissão binária e transferência horizontal de plasmídeos, a nova população passa a ser quase 100% resistente.",
        "5. Conclusão: O meio SELECIONA variações pré-existentes; ele não induz mutações orientadas para a sobrevivência."
      ],
      coreConcept: "Seleção Natural Neodarwinista vs Indução Lamarquista",
      trapWarning: "No ENEM: Se a alternativa disser 'o veneno/antibiótico fez o ser vivo criar a resistência', ela é LAMARQUISTA e está ERRADA! O correto é: a resistência já existia antes e foi SELECIONADA!"
    },
    commonTraps: [
      "Achar que o antibiótico induz a mutação adaptativa benéfica",
      "Confundir seleção ambiental com intenção do organismo vivo"
    ],
    tags: ["evolucao", "neodarwinismo", "selecao-natural", "resistencia-bacteriana", "medicina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-002",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Homologia vs Analogia: Irradiação Adaptativa e Convergência Evolutiva",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as seguintes estruturas anatômicas de vertebrados:\n1. A nadadeira de uma baleia e o braço de um ser humano;\n2. A asa de um morcego e a asa de uma ave;\n3. O corpo hidrodinâmico com nadadeiras de um tubarão (peixe cartilaginoso) e o de um golfinho (mamífero cetáceo).\n\nEm anatomia comparada e biologia evolutiva, o parentesco filogenético é determinado pela origem embriológica dos órgãos.",
      source: "Biologia Evolutiva e Anatomia Comparada dos Vertebrados"
    },
    prompt: "A comparação anatômica e evolutiva entre o corpo hidrodinâmico do tubarão e o do golfinho (caso 3) exemplifica um processo de:",
    options: [
      { id: "a", text: "convergência evolutiva (estruturas análogas), em que linhagens filogeneticamente distantes desenvolveram formas corporais semelhantes em resposta a pressões seletivas análogas no meio aquático.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "irradiação adaptativa (estruturas homólogas), indicando que tubarões e golfinhos divergiram recentemente de um mesmo ancestral comum primata.", isCorrect: false, distractorRationale: "Tubarões e golfinhos são de classes muito distantes (peixes condríctes vs mamíferos) e não divergiram recentemente de primatas." },
      { id: "c", text: "deriva genética pura sem nenhuma influência da seleção natural sobre o deslocamento na água.", isCorrect: false, distractorRationale: "A forma hidrodinâmica reduz o atrito e confere nítida vantagem seletiva hidrodinâmica na locomoção." },
      { id: "d", text: "hibridização fértil entre espécies de classes taxonômicas completamente incompatíveis.", isCorrect: false, distractorRationale: "Peixes e mamíferos não realizam hibridização biológica interespecífica." },
      { id: "e", text: "lamarquismo espontâneo pelo qual a água salgada modificou o DNA do golfinho para transformá-lo em peixe.", isCorrect: false, distractorRationale: "Mamíferos aquáticos mantêm pulmões, glândulas mamárias e endotermia; a água não modifica DNA de forma lamarquista." }
    ],
    detailedExplanation: {
      summary: "Homologia decorre de ancestralidade comum recente (mesma origem embrionária, como braço humano e nadadeira de baleia -> divergência/irradiação). Analogia decorre de convergência evolutiva: origens embrionárias distintas que se tornaram semelhantes por viverem no mesmo habitat e sofrerem a mesma seleção (tubarão e golfinho).",
      stepByStep: [
        "1. Tubarão é peixe condrícte (respiração branquial, fecundação interna, pecilotérmico).",
        "2. Golfinho é mamífero cetáceo (respiração pulmonar, glândulas mamárias, endotérmico, placenta).",
        "3. Ambas as linhagens desenvolveram corpos fusiformes hidrodinâmicos para nadar velozmente na água.",
        "4. Como a origem embrionária e filogenética é distante, trata-se de CONVERGÊNCIA EVOLUTIVA resultando em órgãos ANÁLOGOS.",
        "5. Conclusão: Alternativa (a) reflete com precisão o conceito cobrado recorrentemente pelo ENEM."
      ],
      coreConcept: "Homologia vs Analogia / Irradiação Adaptativa vs Convergência Evolutiva",
      trapWarning: "No ENEM: Mesma função com origens diferentes = Analogia / Convergência (tubarão e golfinho; asa de inseto e asa de ave). Mesma origem com funções diferentes = Homologia / Divergência (braço humano, pata do cavalo, asa do morcego)!"
    },
    commonTraps: [
      "Confundir semelhança visual externa com parentesco de ancestralidade comum recente",
      "Inverter os conceitos de convergência evolutiva e irradiação adaptativa"
    ],
    tags: ["evolucao", "convergencia-evolutiva", "irradiacao-adaptativa", "homologia", "analogia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-003",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Especiação Alopátrica: Barreira Geográfica e Isolamento Reprodutivo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a formação de duas espécies de roedores florestais que habitavam uma planície contínua. Com o soerguimento de uma cordilheira montanhosa de falha tectônica, a população original foi dividida em duas subpopulações isoladas (X e Y) durante milhões de anos. Ao longo desse período geológico, as subpopulações foram submetidas a condições climáticas, tipos de predadores e fontes de alimento distintos. Quando as montanhas sofreram erosão e as duas populações voltaram a ter contato físico, indivíduos machos de X e fêmeas de Y não foram mais capazes de produzir descendentes férteis.",
      source: "Fundamentos de Biologia Evolutiva e Genética de Populações"
    },
    prompt: "O processo evolutivo descrito ilustra o modelo clássico de especiação alopátrica. O evento crucial que consolidou em definitivo a formação das duas espécies distintas foi:",
    options: [
      { id: "a", text: "o estabelecimento do isolamento reprodutivo entre as populações, impedindo o fluxo gênico mesmo após o restabelecimento do contato geográfico secundário.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o aumento compulsório do número de cromossomos sexuais em todas as células somáticas da população Y.", isCorrect: false, distractorRationale: "Especiação não exige necessariamente alteração no número de cromossomos; pequenas mutações gênicas já geram incompatibilidade." },
      { id: "c", text: "o desaparecimento completo de todos os alelos recessivos em ambas as populações por seleção artificial.", isCorrect: false, distractorRationale: "A seleção foi estritamente natural em ambiente selvagem, e alelos recessivos continuam presentes nas populações." },
      { id: "d", text: "a reversão filogenética que transformou a população X em uma espécie ancestral de réptil fóssil.", isCorrect: false, distractorRationale: "A evolução é um processo biológico não reversível a estágios fósseis prévios (Lei da Irreversibilidade de Dollo)." },
      { id: "e", text: "a fusão dos núcleos celulares para formar uma única colônia celular gigante sem meiose.", isCorrect: false, distractorRationale: "Distrator fisiologicamente absurdo sem relação com especiação biológica." }
    ],
    detailedExplanation: {
      summary: "A especiação alopátrica (do grego *allos*, 'outro', e *patra*, 'pátria') ocorre em 4 passos: 1) População original contínua; 2) Barreira geográfica física (rio, montanha, cânion) interrompendo o fluxo gênico; 3) Mutações e seleção natural agindo de forma independente em cada lado; 4) ISOLAMENTO REPRODUTIVO definitivo (não se cruzam mais ou geram híbridos estéreis).",
      stepByStep: [
        "1. Barreira geográfica: Separação física inicial que impede o cruzamento.",
        "2. Divergência genética: Mutações aleatórias e diferentes pressões seletivas acumulam diferenças anatômicas, comportamentais ou genéticas.",
        "3. Critério biológico de espécie de Mayr: Duas populações pertencem a espécies distintas quando não conseguem mais produzir descendentes férteis entre si.",
        "4. Conclusão: O isolamento reprodutivo é o marco final e definitivo da especiação biológica."
      ],
      coreConcept: "Especiação Alopátrica e Isolamento Reprodutivo",
      trapWarning: "No ENEM: A barreira geográfica NÃO faz a espécie por si só! O que consolida uma nova espécie é o ISOLAMENTO REPRODUTIVO. Se voltarem a se encontrar e ainda tiverem filhos férteis, continuam sendo da mesma espécie (apenas subespécies/raças)!"
    },
    commonTraps: [
      "Achar que barreira geográfica e isolamento reprodutivo são a mesma coisa",
      "Acreditar que o isolamento geográfico transforma imediatamente os indivíduos em espécies novas"
    ],
    tags: ["especiação", "alopátrica", "isolamento-reprodutivo", "barreira-geografica", "fluxo-genico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-004",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Deriva Genética: Efeito Fundador e Gargalo Populacional",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No século XVIII, uma pequena comunidade religiosa composta por apenas cerca de duzentas pessoas emigrou da Europa para a América do Norte e viveu em isolamento cultural estrito durante séculos, casando-se exclusivamente entre si. Na atualidade, os descendentes dessa comunidade apresentam incidência extraordinariamente elevada da síndrome de Ellis-van Creveld (um tipo raro de nanismo acompanhado de polidactilia recessiva), muito superior à taxa observada na população mundial geral.",
      source: "Genética Humana Médica e Genética de Populações"
    },
    prompt: "O fenômeno evolutivo responsável pela elevada frequência dessa anomalia genética na comunidade descrita é conhecido como:",
    options: [
      { id: "a", text: "efeito fundador (uma modalidade de deriva genética), em que uma nova população é estabelecida por uma amostra muito pequena de indivíduos cujas frequências alélicas casuais não representavam a população original.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "seleção sexual positiva que favorece reprodutivamente indivíduos com nanismo para a liderança política.", isCorrect: false, distractorRationale: "O fenômeno decorre do acaso da amostragem fundadora e consanguinidade, não de preferência sexual seletiva adaptativa." },
      { id: "c", text: "aumento espontâneo da taxa de mutação provocado pela altitude e pelo consumo de alimentos sem glúten.", isCorrect: false, distractorRationale: "O alelo recessivo já estava presente nos poucos colonizadores fundadores, não foi criado por dietas sem glúten." },
      { id: "d", text: "equilíbrio de Hardy-Weinberg perpétuo operando em uma população infinitamente grande.", isCorrect: false, distractorRationale: "O equilíbrio de Hardy-Weinberg exige populações muito grandes com cruzamentos ao acaso (panmixia), exatamente o oposto do grupo isolado." },
      { id: "e", text: "convergência adaptativa que equiparou os membros da comunidade aos hábitos de mamíferos marinhos.", isCorrect: false, distractorRationale: "Distrator sem sentido no contexto da genética médica populacional." }
    ],
    detailedExplanation: {
      summary: "A deriva genética é a flutuação aleatória nas frequências alélicas de uma população, com impacto devastador em populações pequenas. O 'Efeito Fundador' ocorre quando poucos indivíduos fundam uma nova colônia: se um dos fundadores portava um alelo raro, esse alelo terá frequência desproporcionalmente alta entre seus descendentes.",
      stepByStep: [
        "1. População original grande: Alelo de nanismo/polidactilia é raro (< 0,001%).",
        "2. Fundação por amostra minúscula (200 pessoas): Por puro acaso, um casal fundador carregava o alelo.",
        "3. Isolamento e endogamia (casamentos consanguíneos): Aumento da homozigose recessiva (aa) nas gerações seguintes.",
        "4. Conceito genético: Efeito Fundador (modalidade de Deriva Genética).",
        "5. Conclusão: A alternativa (a) conceitua com perfeição o fenômeno biomédico."
      ],
      coreConcept: "Deriva Genética: Efeito Fundador e Gargalo Populacional",
      trapWarning: "No ENEM: Deriva genética ocorre pelo ACASO (amostragem casual), sem relação com adaptação ao meio! Efeito Gargalo ocorre quando um desastre natural dizima quase todos os indivíduos; Efeito Fundador ocorre quando poucos fundam um novo grupo isolado."
    },
    commonTraps: [
      "Confundir deriva genética com seleção natural (deriva é casual/aleatória, seleção é adaptativa/direcionada)",
      "Achar que casamentos consanguíneos criam mutações novas (eles apenas aumentam a chance de encontrar alelos recessivos já existentes)"
    ],
    tags: ["deriva-genetica", "efeito-fundador", "genetica-populacoes", "consanguinidade", "endogamia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-005",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Equilíbrio de Hardy-Weinberg e Frequências Alélicas",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma população humana panmítica (com cruzamentos ao acaso) em equilíbrio de Hardy-Weinberg, a frequência de indivíduos afetados por uma doença genética autossômica recessiva rara é de 1 em cada 10.000 nascidos vivos (q² = 0,0001). Sabe-se que a população é suficientemente grande e não está sofrendo pressões mutagênicas, seletivas ou migratórias significativas para esse loco gênico.",
      source: "Princípios de Genética Médica e Epidemiologia Genética"
    },
    prompt: "Com base no modelo de Hardy-Weinberg (p² + 2pq + q² = 1 e p + q = 1), a porcentagem aproximada de indivíduos heterozigotos portadores assintomáticos do alelo recessivo (2pq) nessa população é de:",
    options: [
      { id: "a", text: "1,98% (aproximadamente 2%).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "0,01%.", isCorrect: false, distractorRationale: "0,01% é a frequência de homozigotos afetados (q² = 0,0001 = 0,01%), e não dos heterozigotos portadores." },
      { id: "c", text: "9,90%.", isCorrect: false, distractorRationale: "Cálculo decorrente de erro ao não multiplicar por 2 na fórmula 2pq." },
      { id: "d", text: "50,00%.", isCorrect: false, distractorRationale: "Valor genérico sem base no cálculo das frequências alélicas." },
      { id: "e", text: "98,01%.", isCorrect: false, distractorRationale: "98,01% é a frequência de homozigotos dominantes saudáveis (p² = 0,99² = 0,9801)." }
    ],
    detailedExplanation: {
      summary: "O Teorema de Hardy-Weinberg calcula frequências alélicas (p e q) e genotípicas (p², 2pq, q²). Se q² = 1/10.000 = 0,0001, temos q = √0,0001 = 0,01. Como p + q = 1, p = 1 - 0,01 = 0,99. Os heterozigotos são 2pq = 2 · 0,99 · 0,01 = 0,0198 = 1,98%.",
      stepByStep: [
        "1. Frequência do genótipo recessivo (aa): q² = 1 / 10.000 = 0,0001.",
        "2. Frequência do alelo recessivo (a): q = √0,0001 = 0,01 (1%).",
        "3. Frequência do alelo dominante (A): p = 1 - q = 1 - 0,01 = 0,99 (99%).",
        "4. Frequência dos portadores heterozigotos (Aa): 2pq = 2 · (0,99) · (0,01) = 0,0198.",
        "5. Em porcentagem: 0,0198 · 100% = 1,98% (~2%).",
        "6. Conclusão: Em doenças recessivas raras, o número de portadores sadios (2pq ~ 2%) é centenas de vezes maior que o de afetados (q² = 0,01%)."
      ],
      coreConcept: "Equilíbrio de Hardy-Weinberg: p² + 2pq + q² = 1 e p + q = 1",
      trapWarning: "No ENEM: NUNCA se esqueça do fator 2 na fórmula do heterozigoto (2pq)! E lembre-se: 'indivíduos afetados' = q²; 'frequência do alelo' = q!"
    },
    commonTraps: [
      "Confundir frequência do alelo (q) com frequência do genótipo recessivo (q²)",
      "Esquecer de multiplicar por 2 ao calcular a frequência de heterozigotos (2pq)"
    ],
    tags: ["hardy-weinberg", "genetica-de-populacoes", "frequencias-alelicas", "heterozigotos", "calculo-biologico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-006",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Padrões de Seleção Natural: Direcional, Estabilizadora e Disruptiva",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere três situações ecológicas de seleção fenotípica observadas em populações selvagens:\n\nSituação 1: Em uma espécie de pássaro, recém-nascidos com peso corporal intermediário apresentam taxa de sobrevivência significativamente superior à de filhotes excessivamente leves (vulneráveis ao frio) e filhotes excessivamente pesados (que causam distocia no parto).\nSituação 2: Em um ambiente com poluição industrial de fuligem escura sobre os troncos de árvores, mariposas com coloração escura passam a ter vantagem críptica sobre as claras, deslocando a média fenotípica da população em direção ao fenótipo escuro.\nSituação 3: Em uma ilha com abundância de sementes muito duras e sementes muito macias (mas quase nenhuma semente de dureza intermediária), pássaros com bicos muito robustos e pássaros com bicos muito finos são favorecidos, enquanto pássaros de bico médio sofrem alta taxa de mortalidade.",
      source: "Ecologia Evolutiva e Dinâmica das Populações"
    },
    prompt: "As situações 1, 2 e 3 correspondem, respectivamente, aos seguintes padrões de seleção natural:",
    options: [
      { id: "a", text: "Seleção Estabilizadora (favorece a média intermediária), Seleção Direcional (desloca a média para um dos extremos) e Seleção Disruptiva ou Diversificadora (favorece ambos os extremos fenotípicos em detrimento da média).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Seleção Artificial, Seleção Sexual e Seleção Lamarquista de caracteres adquiridos.", isCorrect: false, distractorRationale: "Todas são modalidades de seleção natural no meio silvestre, sem interferência humana ou transmissão lamarquista." },
      { id: "c", text: "Seleção Disruptiva na Situação 1, Seleção Estabilizadora na Situação 2 e Seleção Direcional na Situação 3.", isCorrect: false, distractorRationale: "Inversão completa das definições conceituais dos três tipos de seleção." },
      { id: "d", text: "Deriva genética casual em todas as três situações sem nenhuma pressão de sobrevivência seletiva.", isCorrect: false, distractorRationale: "Há nítida correlação causal de sobrevivência diferencial com o meio em todas as situações." },
      { id: "e", text: "Evolução reticulada por transferência horizontal de genes entre fungos e aves.", isCorrect: false, distractorRationale: "Distrator sem cabimento biológico nas situações analisadas." }
    ],
    detailedExplanation: {
      summary: "A seleção natural atua sobre a distribuição fenotípica de três formas clássicas: 1) Estabilizadora: estreita a curva e favorece a média (ex: peso de bebês humanos ao nascer); 2) Direcional: empurra a curva para um extremo (ex: melanismo industrial de mariposas); 3) Disruptiva: divide a curva em duas cristas nos extremos e pode conduzir à especiação.",
      stepByStep: [
        "1. Situação 1: Peso intermediário vence os extremos leves e pesados -> Seleção Estabilizadora.",
        "2. Situação 2: Média se desloca no sentido da cor escura contra a cor clara -> Seleção Direcional.",
        "3. Situação 3: Extremos (bicos grossos e bicos finos) vencem o intermediário -> Seleção Disruptiva.",
        "4. Conclusão: A alternativa (a) corresponde com rigor à classificação clássica da biologia evolutiva."
      ],
      coreConcept: "Modos de Seleção Natural: Estabilizadora, Direcional e Disruptiva",
      trapWarning: "No ENEM: Gráficos de curvas de sino mostrando antes e depois da seleção caem frequentemente! Se a curva ficou mais estreita no centro = estabilizadora; se andou para o lado = direcional; se abriu duas lombadas e afundou no meio = disruptiva!"
    },
    commonTraps: [
      "Confundir seleção direcional (um extremo) com disruptiva (ambos os extremos)",
      "Achar que seleção estabilizadora significa que a evolução 'parou'"
    ],
    tags: ["selecao-natural", "selecao-estabilizadora", "selecao-direcional", "selecao-disruptiva", "graficos-biologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-007",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Lamarquismo vs Darwinismo: Análise Comparativa do Pescoço das Girafas",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O clássico exemplo do alongamento do pescoço das girafas ao longo das eras é frequentemente utilizado nos livros didáticos para ilustrar o confronto histórico entre as teses de Jean-Baptiste Lamarck (1809) e Charles Darwin (1859).",
      source: "História e Filosofia da Ciência Biológica"
    },
    prompt: "A explicação estritamente darwinista para o comprimento do pescoço das girafas atuais fundamenta-se na premissa de que:",
    options: [
      { id: "a", text: "na população ancestral já existiam girafas com diferentes comprimentos de pescoço decorrentes da variabilidade natural; as de pescoço mais longo alcançavam folhas mais altas em períodos de escassez, sobreviviam em maior proporção e transmitiam essa característica aos seus descendentes.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o esforço diário e contínuo de esticar o pescoço fez com que os músculos e ossos vertebrais crescessem durante a vida do animal, sendo essa alteração muscular repassada via espermatozoides.", isCorrect: false, distractorRationale: "Essa é a hipótese lamarquista (uso e desuso + transmissão de caracteres adquiridos), recusada pela ciência moderna." },
      { id: "c", text: "as folhas das árvores altas continham hormônios vegetais que provocavam mutações genéticas benéficas nos tecidos das girafas.", isCorrect: false, distractorRationale: "Fitormônios de folhas não promovem mutações direcionadas nas células germinativas de mamíferos herbívoros." },
      { id: "d", text: "todas as girafas ancestrais tinham pescoço curto e decidiram coletivamente alterar seu código genético por força de vontade.", isCorrect: false, distractorRationale: "O código genético não pode ser voluntariamente modificado pela vontade psíquica do indivíduo." },
      { id: "e", text: "o pescoço curto conferia invisibilidade contra felinos predadores, eliminando as girafas altas por seleção artificial.", isCorrect: false, distractorRationale: "Girafas altas sobreviveram e foram favorecidas, e a seleção em ambiente natural é seleção natural, não artificial." }
    ],
    detailedExplanation: {
      summary: "A contraposição essencial entre Lamarck e Darwin é a seguinte: Para Lamarck, 'o meio cria a necessidade, o animal usa o órgão, o órgão desenvolve e passa aos filhos'. Para Darwin, 'a variação de pescoço já existia antes na população; quem tinha pescoço longo comeu mais na seca, não morreu de fome e deixou mais filhos'.",
      stepByStep: [
        "1. Teoria de Lamarck (1809): Uso e desuso (esforço contínuo para esticar o pescoço) e transmissão dos caracteres adquiridos aos filhos.",
        "2. Teoria de Darwin (1859): Variabilidade fenotípica pré-existente (girafas de pescoço curto e longo na população original).",
        "3. Seleção ambiental: Em tempos de estiagem e folhagem escassa nos estratos baixos, indivíduos de pescoço mais longo alimentam-se melhor.",
        "4. Sucesso reprodutivo: Girafas mais bem nutridas sobrevivem em maior proporção e transmitem seus alelos à prole.",
        "5. Conclusão: O meio ambiente seleciona os mais aptos; ele não cria a variação. Alternativa (a) correta."
      ],
      coreConcept: "Seleção Natural vs Lei do Uso e Desuso e Transmissão de Caracteres Adquiridos",
      trapWarning: "No ENEM: Fuja de enunciados com tom finalista ou voluntarista ('para se adaptar', 'para alcançar as folhas') ao descrever Darwin! Darwinismo é sobrevivência diferencial de variações pré-existentes!"
    },
    commonTraps: [
      "Usar verbos de intenção ('a girafa esticou para alcançar') ao explicar Darwin",
      "Esquecer que o Darwinismo clássico já postulava variabilidade prévia, mesmo antes de conhecer o DNA"
    ],
    tags: ["darwinismo", "lamarquismo", "girafas", "selecao-natural", "historia-da-biologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-008",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Evidências Moleculares da Evolução: Citocromo C e Proximidade Filogenética",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A proteína citocromo c participa da cadeia respiratória mitocondrial em quase todos os seres aeróbicos e é composta por 104 aminoácidos. A tabela abaixo compara a quantidade de aminoácidos diferentes na cadeia do citocromo c humano em relação a outros animais:\n• Chimpanzé: 0 aminoácidos diferentes;\n• Macaco Rhesus: 1 aminoácido diferente;\n• Cavalo: 12 aminoácidos diferentes;\n• Galinha: 13 aminoácidos diferentes;\n• Sapo: 18 aminoácidos diferentes;\n• Atum (peixe): 21 aminoácidos diferentes.",
      source: "Bioquímica Evolutiva e Filogenia Molecular"
    },
    prompt: "Com base nas evidências bioquímicas e na teoria do 'relógio molecular', a correspondência exata de 104 aminoácidos do citocromo c entre o ser humano e o chimpanzé comprova que:",
    options: [
      { id: "a", text: "seres humanos e chimpanzés compartilham um ancestral comum mais recente entre si do que com os demais vertebrados da lista, tendo acumulado menor quantidade de mutações divergentes ao longo do tempo geológico.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o ser humano é descendente direto do chimpanzé moderno que habita as florestas equatoriais africanas.", isCorrect: false, distractorRationale: "O homem não descende do chimpanzé atual; ambos compartilham um ancestral comum extinto que divergiu há ~6-7 milhões de anos." },
      { id: "c", text: "as galinhas e os sapos não utilizam mitocôndrias nem realizam fosforilação oxidativa celular.", isCorrect: false, distractorRationale: "Todos os vertebrados citados são eucariontes aeróbicos dotados de mitocôndrias e citocromo c funcional." },
      { id: "d", text: "o atum possui sistema circulatório aberto e por isso não tem proteínas conservadas no plasma.", isCorrect: false, distractorRationale: "Peixes possuem sistema circulatório fechado e o citocromo c é uma proteína mitocondrial intracelular." },
      { id: "e", text: "o código genético do chimpanzé é composto por cinco bases nitrogenadas diferentes das do DNA humano.", isCorrect: false, distractorRationale: "O código genético é universal: ambos utilizam exatamente as mesmas 4 bases (A, T, C, G)." }
    ],
    detailedExplanation: {
      summary: "Quanto menor o número de diferenças na sequência de aminoácidos de uma proteína homóloga (ou bases de DNA), menor foi o tempo desde a separação das linhagens a partir do ancestral comum. Zero diferenças entre humano e chimpanzé reflete o parentesco filogenético extremamente próximo entre os dois hominídeos.",
      stepByStep: [
        "1. Citocromo c: Proteína conservada essencial da cadeia de elétrons.",
        "2. Análise comparativa: 0 diferenças com chimpanzé > 1 com rhesus > 12 com cavalo > 13 com ave > 18 com anfíbio > 21 com peixe.",
        "3. Lógica do relógio molecular: Mutações neutras acumulam-se a uma taxa relativamente constante ao longo das gerações.",
        "4. Conclusão: Quanto mais recente o ancestral comum, menos diferenças existem. Alternativa (a) correta."
      ],
      coreConcept: "Evidências Moleculares da Evolução e o Relógio Molecular",
      trapWarning: "No ENEM: NUNCA diga que 'o homem veio do macaco'! Diga sempre que 'homens e macacos compartilham um ancestral comum recente'!"
    },
    commonTraps: [
      "Afirmar que uma espécie viva atual descende de outra espécie viva atual",
      "Ignorar a universalidade do código genético e das proteínas respiratórias"
    ],
    tags: ["bioquimica-evolutiva", "citocromo-c", "relogio-molecular", "ancestral-comum", "filogenia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-009",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Estruturas Vestigiais como Testemunhos da História Evolutiva",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No corpo humano e em outros animais encontram-se estruturas anatômicas atróficas com funções reduzidas ou ausentes, como o apêndice cecal em humanos (extremamente desenvolvido e funcional em herbívoros para digestão de celulose por fermentação simbionte) e os ossos pélvicos vestigiais encontrados no esqueleto interno de baleias e serpentes.",
      source: "Anatomia Comparada e Paleontologia dos Vertebrados"
    },
    prompt: "A presença de estruturas vestigiais no organismo de espécies modernas constitui evidência evolutiva relevante porque:",
    options: [
      { id: "a", text: "indica que a espécie atual descende de ancestrais nos quais tais estruturas eram plenamente desenvolvidas e funcionais, tendo sofrido regressão ao longo do tempo por perda da pressão seletiva que mantinha sua utilidade.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "comprova que os mamíferos marinhos são fruto de engenharia genética alienígena de laboratório.", isCorrect: false, distractorRationale: "Distrator estapafúrdio sem validade científica." },
      { id: "c", text: "atesta que a serpente e a baleia cruzam entre si para produzir ovos amnióticos com casca rígida.", isCorrect: false, distractorRationale: "Serpentes e baleias pertencem a classes distintas e não realizam reprodução cruzada." },
      { id: "d", text: "revela que o apêndice humano foi implantado por bactérias intestinais para digerir microplásticos.", isCorrect: false, distractorRationale: "O apêndice é um órgão anatômico embriológico humano vestigial com resquício de tecido linfoide, não um implante bacteriano." },
      { id: "e", text: "demonstra que a evolução ocorre exclusivamente por saltos miraculosos que anulam as leis da física.", isCorrect: false, distractorRationale: "A evolução gradual é regida por mutações, deriva, recombinação e seleção natural sob leis naturais." }
    ],
    detailedExplanation: {
      summary: "Estruturas vestigiais são 'arquivos históricos' gravados na anatomia dos seres vivos. A cintura pélvica da baleia e da jiboia atesta que seus ancestrais eram tetrápodes terrestres com quatro patas. O apêndice humano atesta ancestral herbívoro com grande ceco fermentador.",
      stepByStep: [
        "1. Definição: Órgão vestigial = estrutura que perdeu sua função primordial ancestral ao longo da filogenia.",
        "2. Exemplos: Ceco/apêndice em humanos, ossos da pelve em cetáceos, dentes do siso, membrana nictitante no canto do olho.",
        "3. Significado evolutivo: Comprova descendência com modificação a partir de ancestrais comuns que usavam ativamente tais órgãos.",
        "4. Conclusão: A alternativa (a) conceitua perfeitamente as estruturas vestigiais."
      ],
      coreConcept: "Estruturas Vestigiais e Descendência com Modificação",
      trapWarning: "No ENEM: Estruturas vestigiais não são 'órgãos inúteis que não servem para nada'; o apêndice hoje possui células de defesa imune (tecido linfoide), mas sua função original de câmara digestiva de celulose foi perdida."
    },
    commonTraps: [
      "Achar que órgãos vestigiais são prova contra a evolução (são, na verdade, uma das provas mais contundentes a favor)",
      "Confundir órgão vestigial com órgão atrofiado por desuso durante a vida do próprio indivíduo (ideia lamarquista)"
    ],
    tags: ["estruturas-vestigiais", "anatomia-comparada", "apendice", "baleias", "evidencias-da-evolucao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-010",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Coevolução: A Corrida Armamentista Ecológica e Polinização Especializada",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao estudar a orquídea *Angraecum sesquipedale* em Madagascar — que possui um esporão floral com cerca de 30 centímetros de profundidade no fundo do qual se localiza o néctar —, Charles Darwin previu em 1862 que deveria existir na ilha uma mariposa com uma probóscide (aparelho bucal sugador) de comprimento extraordinário de cerca de 30 centímetros capaz de alcançar o néctar. Décadas após sua morte, cientistas descobriram a mariposa esfingídea *Xanthopan morganii praedicta*, portadora de uma tromba de quase 30 centímetros que se alimenta exclusivamente nessa flor.",
      source: "Ecologia e Coevolução Planta-Polinizador"
    },
    prompt: "A relação evolutiva descrita entre a orquídea de Madagascar e a mariposa esfingídea exemplifica o fenômeno biológico de:",
    options: [
      { id: "a", text: "coevolução, processo no qual duas ou mais espécies exercem pressões seletivas recíprocas ao longo das gerações, resultando em adaptações anatômicas e comportamentais estreitamente acopladas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "parasitismo obrigatório no qual a mariposa esteriliza e mata a planta após sugar o néctar.", isCorrect: false, distractorRationale: "Trata-se de mutualismo com polinização eficiente recíproca, e não parasitismo letal." },
      { id: "c", text: "deriva genética em populações que habitam túneis subterrâneos escuros.", isCorrect: false, distractorRationale: "A interação ocorre na superfície da floresta tropical e envolve nítida pressão de seleção natural mútua." },
      { id: "d", text: "amensalismo com liberação de antibióticos voláteis pelas pétalas da flor.", isCorrect: false, distractorRationale: "Amensalismo é a inibição unilateral de um ser por outro (ex: fungo Penicillium), o que não ocorre na polinização." },
      { id: "e", text: "seleção artificial conduzida por agricultores indígenas do período paleolítico.", isCorrect: false, distractorRationale: "A relação desenvolveu-se em florestas virgens por seleção natural mútua, sem ação humana." }
    ],
    detailedExplanation: {
      summary: "A coevolução ocorre quando a evolução de uma espécie afeta diretamente a evolução de outra espécie que interage estreitamente com ela. Se a flor desenvolve esporão mais fundo para forçar o polinizador a esfregar pólen na antera, apenas mariposas com trombas mais longas conseguem o alimento, gerando uma 'corrida' mútua de especialização extrema.",
      stepByStep: [
        "1. Interação ecológica: Polinizador e planta (mutualismo especializado).",
        "2. Pressão seletiva na planta: Atrair polinizador fiel que não disperse o pólen em outras espécies.",
        "3. Pressão seletiva no inseto: Conseguir alcançar o alimento calórico e nutritivo (néctar).",
        "4. Resultado: Adaptações mútuas recíprocas ao longo de milhares de gerações -> Coevolução.",
        "5. Conclusão: A alternativa (a) define rigorosamente o conceito biológico."
      ],
      coreConcept: "Coevolução e Adaptações Recíprocas entre Espécies Interagentes",
      trapWarning: "No ENEM: Coevolução não ocorre apenas no mutualismo (flor/inseto)! Ocorre também em corrida armamentista de predação (guepardo mais veloz seleciona gazela mais veloz) e parasita/hospedeiro!"
    },
    commonTraps: [
      "Confundir coevolução com convergência evolutiva",
      "Achar que mutualismo simples sem adaptações mútuas acopladas já é coevolução"
    ],
    tags: ["coevolucao", "darwin", "polinizacao", "orquidea", "interacoes-ecologicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-011",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Mutações e Recombinação Gênica: As Fontes Primárias da Variabilidade",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na síntese neodarwinista contemporânea, a evolução resulta da ação de fatores evolutivos que geram ou reorganizam a variabilidade genética e de fatores que direcionam ou alteram as frequências alélicas.",
      source: "Genética Básica e Evolução Biológica"
    },
    prompt: "Entre os fatores evolutivos conhecidos, aquele que atua como a ÚNICA fonte primária criadora de novos alelos em uma espécie é a:",
    options: [
      { id: "a", text: "mutação gênica, que introduz alterações inéditas na sequência de nucleotídeos do DNA, enquanto a recombinação gênica (crossing-over e segregação independente) apenas reorganiza os alelos preexistentes.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "deriva genética, que sintetiza fitas de RNA mensageiro a partir de vibrações sísmicas da terra.", isCorrect: false, distractorRationale: "Deriva genética altera frequências alélicas por acaso, não cria novos alelos nem sintetiza RNA por abalos sísmicos." },
      { id: "c", text: "seleção natural, que produz novos genes a pedido dos ribossomos das células musculares.", isCorrect: false, distractorRationale: "A seleção natural seleciona ou descarta alelos já existentes; ela não tem capacidade química criadora de alelos." },
      { id: "d", text: "recombinação meiótica, que converte cromossomos humanos em genoma viral bacteriófago.", isCorrect: false, distractorRationale: "Recombinação apenas permuta alelos já presentes entre cromátides homólogas." },
      { id: "e", text: "panmixia pura, que impede a ocorrência de erros na polimerase durante a fase S celular.", isCorrect: false, distractorRationale: "Panmixia é o cruzamento ao acaso e não previne erros enzimáticos de replicação." }
    ],
    detailedExplanation: {
      summary: "Grave para o ENEM: A ÚNICA fonte de NOVIDADE genética é a MUTAÇÃO! A recombinação gênica (meiose: crossing-over e segregação independente) é como 'embaralhar as cartas do baralho' (cria novas combinações de cartas que já existem). A mutação é colocar uma 'carta nova' dentro do baralho.",
      stepByStep: [
        "1. Mutação: Erro na replicação do DNA (substituição, inserção, deleção) -> cria NOVO alelo.",
        "2. Recombinação: Mistura os alelos já criados em novas combinações nos gametas.",
        "3. Seleção natural e deriva: Filtram e alteram as frequências dos alelos na população.",
        "4. Conclusão: A mutação é a fonte primária de toda a diversidade genética da biosfera terrestre."
      ],
      coreConcept: "Mutação como Fonte Primária de Variabilidade vs Recombinação como Reorganização",
      trapWarning: "No ENEM: Se perguntarem 'qual fator gera alelos novos?', responda SEMPRE MUTAÇÃO! Seleção natural apenas seleciona; Recombinação apenas mistura!"
    },
    commonTraps: [
      "Achar que crossing-over cria alelos novos (ele cria combinações genotípicas novas, mas não alelos novos)",
      "Achar que a seleção natural 'cria' adaptações"
    ],
    tags: ["mutacao", "recombinacao-genica", "variabilidade-genetica", "neodarwinismo", "dna"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-012",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Mecanismos de Isolamento Reprodutivo Pré-Zigótico e Pós-Zigótico",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O isolamento reprodutivo entre populações pode ser classificado em mecanismos pré-zigóticos (que impedem a fecundação e a formação do zigoto) e pós-zigóticos (que atuam após a fecundação).\nConsidere dois exemplos:\nExemplo 1: Duas espécies de sapos habitam a mesma lagoa, mas uma se reproduz no início da primavera (março) e a outra se reproduz no auge do verão (dezembro).\nExemplo 2: O cruzamento entre um jumento (*Equus asinus*) e uma égua (*Equus caballus*) resulta no nascimento de uma mula ou burro vigoroso, porém completamente estéril.",
      source: "Biologia Reprodutiva e Mecanismos de Especiação"
    },
    prompt: "Os exemplos 1 e 2 ilustram, respectivamente, mecanismos de isolamento reprodutivo do tipo:",
    options: [
      { id: "a", text: "Pré-zigótico temporal ou estacional (no Exemplo 1) e Pós-zigótico por esterilidade do híbrido (no Exemplo 2).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Pós-zigótico mecânico no Exemplo 1 e Pré-zigótico etológico no Exemplo 2.", isCorrect: false, distractorRationale: "Inversão de conceitos; no Exemplo 1 o zigoto nem é formado por incompatibilidade de época de acasalamento." },
      { id: "c", text: "Isolamento geográfico continental no Exemplo 1 e Especiação alopátrica por deriva no Exemplo 2.", isCorrect: false, distractorRationale: "No Exemplo 1 os sapos habitam a mesma lagoa (são simpátricos), não há isolamento geográfico." },
      { id: "d", text: "Isolamento gamético químico em ambos os exemplos com destruição dos espermatozoides.", isCorrect: false, distractorRationale: "No Exemplo 2 há fecundação e nascimento do animal (o híbrido se desenvolve), descartando barreira gamética." },
      { id: "e", text: "Seleção artificial provocada por agrotóxicos em lagoas de cultivo de arroz.", isCorrect: false, distractorRationale: "Mecanismos de isolamento biológico evolutivo intrínseco, sem relação com agrotóxicos." }
    ],
    detailedExplanation: {
      summary: "Mecanismos pré-zigóticos impedem o cruzamento: temporal/estacional (épocas diferentes), etológico/comportamental (rituais de cortejo diferentes), mecânico (incompatibilidade anatômica dos órgãos genitais) e ecológico (habitats diferentes). Mecanismos pós-zigóticos ocorrem após a fecundação: inviabilidade do zigoto ou esterilidade do híbrido (a mula tem 63 cromossomos e não realiza pareamento na meiose).",
      stepByStep: [
        "1. Exemplo 1: Reprodução em épocas diferentes do ano -> Isolamento temporal/sazonal (Pré-zigótico).",
        "2. Exemplo 2: O filhote nasce e vive, mas não consegue produzir gametas viáveis -> Esterilidade do híbrido (Pós-zigótico).",
        "3. Por que a mula é estéril? Jumento (2n=62, n=31) + Égua (2n=64, n=32) -> Mula (2n=63 cromossomos ímpares, sem pareamento na prófase I da meiose).",
        "4. Conclusão: A alternativa (a) categoriza com precisão técnica as duas barreiras reprodutivas."
      ],
      coreConcept: "Mecanismos Pré-Zigóticos e Pós-Zigóticos de Isolamento Reprodutivo",
      trapWarning: "No ENEM: A mula é forte e saudável, mas é ESTÉRIL! Portanto, cavalo e jumento continuam sendo duas espécies completamente separadas segundo o conceito biológico de espécie!"
    },
    commonTraps: [
      "Achar que porque o animal nasceu, cavalo e jumento são da mesma espécie",
      "Confundir isolamento temporal (meses/estações) com isolamento comportamental (cantos/danças de corte)"
    ],
    tags: ["isolamento-reprodutivo", "pre-zigotico", "pos-zigotico", "esterilidade-hibrido", "mula"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-013",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Especiação Simpátrica e Poliploidia em Espécies Vegetais",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Diferente dos animais, em que a especiação ocorre predominantemente com barreira geográfica física (alopátrica), muitas espécies de plantas cultivadas como o trigo moderno (*Triticum aestivum* - hexaploide, 6n), o algodão e a cana-de-açúcar originaram-se no mesmo local geográfico sem separação espacial de seus ancestrais diploides (2n), através de erros de não disjunção meiótica que geraram indivíduos autopolipoides ou alopolipoides férteis entre si, mas reprodutivamente isolados das espécies parentais.",
      source: "Genética Vegetal, Melhoramento Genético e Evolução"
    },
    prompt: "A formação de novas espécies vegetais no mesmo habitat geográfico por duplicação do lote cromossômico (poliploidia) constitui um exemplo de:",
    options: [
      { id: "a", text: "especiação simpátrica instantânea, na qual o isolamento reprodutivo é estabelecido de forma abrupta entre a linhagem polipolide e as linhagens parentais na ausência de barreira física territorial.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "especiação alopátrica clássica decorrente da deriva dos continentes no período jurássico.", isCorrect: false, distractorRationale: "Ocorre no mesmo local físico ('sim' = mesmo; 'pátria' = território), sem separação por deriva continental." },
      { id: "c", text: "degeneração mutacional letal que extingue a produção de clorofila nas folhas.", isCorrect: false, distractorRationale: "Plantas poliploides costumam ser vigorosas, com folhas, flores e frutos maiores e saudáveis." },
      { id: "d", text: "herança lamarquista induzida pelo frio polar sobre as sementes de trigo.", isCorrect: false, distractorRationale: "Trata-se de alteração numérica cromossômica genética (não disjunção na anáfase), e não de lamarquismo." },
      { id: "e", text: "convergência evolutiva que transformou angiospermas em briófitas avasculares.", isCorrect: false, distractorRationale: "Angiospermas poliploides continuam sendo angiospermas com flores, frutos e vasos condutores." }
    ],
    detailedExplanation: {
      summary: "A especiação simpátrica ocorre sem isolamento geográfico. O mecanismo mais rápido e comum na natureza é a POLIPLOIDIA em vegetais (ex: 4n, 6n). Se um vegetal tetraploide (4n) cruzar com o diploide ancestral (2n), o descendente será triploide (3n) e estéril. Portanto, a linhagem 4n já nasce reprodutivamente isolada, fundando uma nova espécie instantaneamente no mesmo campo.",
      stepByStep: [
        "1. Alopátrica: exige barreira geográfica prévia (rios, montanhas).",
        "2. Simpátrica: ocorre no mesmo território geográfico.",
        "3. Mecanismo vegetal: Erro na meiose gera gametas 2n; autofecundação gera planta 4n (tetraploide).",
        "4. Isolamento reprodutivo imediato: A planta 4n cruza apenas com outras 4n férteis.",
        "5. Conclusão: Trata-se de especiação simpátrica clássica no reino vegetal."
      ],
      coreConcept: "Especiação Simpátrica e Poliploidia em Vegetais",
      trapWarning: "No ENEM: A especiação nem sempre precisa de milhões de anos de separação por montanhas! Em plantas poliploides, a especiação pode acontecer em uma única geração!"
    },
    commonTraps: [
      "Achar que toda especiação necessita obrigatoriamente de barreira geográfica prévia",
      "Confundir aneuploidia (Down, Turner - alteração de 1 cromossomo) com poliploidia (duplicação de genomas inteiros: 3n, 4n, 6n)"
    ],
    tags: ["especiação", "simpatrica", "poliploidia", "botanica", "trigo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-014",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Seleção Sexual e Dimorfismo: O Custo Adaptativo das Caudas de Pavão",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Machos de pavão (*Pavo cristatus*) ostentam caudas enormes, coloridas e pesadas que exigem gasto energético considerável para o crescimento e dificultam o voo e a fuga de predadores carnívoros terrestres. À primeira vista, essa plumagem exuberante pareceria contradizer o princípio da seleção natural por redução da sobrevivência individual.",
      source: "Comportamento Animal e Ecologia Evolutiva"
    },
    prompt: "Charles Darwin explicou a manutenção e o aprimoramento dessas caudas exuberantes propondo o conceito de seleção sexual, segundo o qual essa estrutura:",
    options: [
      { id: "a", text: "confere vantagem reprodutiva direta aos machos no cortejo nupcial, pois fêmeas escolhem parceiros com plumagens vistosas como indicadores fidedignos de vigor biológico, imunidade robusta e ausência de parasitas ('teoria do bom gene').", isCorrect: true, distractorRationale: null },
      { id: "b", text: "serve exclusivamente para camuflar o pavão macho na neve durante o inverno rigoroso.", isCorrect: false, distractorRationale: "A cauda é multicolorida e brilhante, servindo exatamente para atrair atenção e exibição, não para camuflagem na neve." },
      { id: "c", text: "foi desenvolvida pelo esforço voluntário dos machos para aquecer os ovos no ninho coletivo.", isCorrect: false, distractorRationale: "São as fêmeas que chocam os ovos e cuidam da prole; os machos não usam a cauda para chocar." },
      { id: "d", text: "é uma doença mitocondrial degenerativa causada por infecção por retrovírus de galináceos.", isCorrect: false, distractorRationale: "Trata-se de uma característica fenotípica natural saudável selecionada por preferência das fêmeas." },
      { id: "e", text: "protege os animais contra a radiação gama por acumular chumbo nos folículos das penas.", isCorrect: false, distractorRationale: "Penas não acumulam chumbo nem servem de escudo contra radiação gama em florestas nativas." }
    ],
    detailedExplanation: {
      summary: "A seleção sexual é uma força evolutiva específica que favorece características que aumentam o SUCESSO NO ACASALAMENTO, mesmo que causem desvantagem leve na sobrevivência cotidiana. Fêmeas exercem escolha ativa (seleção intersexual): um macho com cauda exuberante e simétrica sinaliza que possui saúde de ferro para sobreviver carregando um fardo tão pesado.",
      stepByStep: [
        "1. Conflito ecológico: Cauda grande atrai predadores e consome energia.",
        "2. Vantagem reprodutiva: Fêmeas copulam preferencialmente com machos de caudas mais vistosas.",
        "3. Resultado evolutivo: A seleção sexual supera o custo da sobrevivência, repassando os genes da cauda longa para a próxima geração.",
        "4. Conclusão: A alternativa (a) expressa o conceito darwinista clássico de seleção sexual e sinalização honesta de qualidade biológica."
      ],
      coreConcept: "Seleção Sexual, Dimorfismo Sexual e a Hipótese dos Bons Genes",
      trapWarning: "No ENEM: A evolução não mede apenas se o indivíduo sobrevive; mede se ele DEIXA DESCENDENTES FÉRTEIS (aptidão biológica/fitness)! Quem vive 100 anos mas não tem filhos tem aptidão evolutiva zero."
    },
    commonTraps: [
      "Achar que toda característica selecionada serve para fugir de predadores ou conseguir comida",
      "Ignorar o papel da escolha da fêmea na seleção de características masculinas"
    ],
    tags: ["selecao-sexual", "dimorfismo-sexual", "pavao", "fitness", "darwin"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-015",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "A Teoria Endossimbiótica de Lynn Margulis para Mitocôndrias e Cloroplastos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na década de 1960, a bióloga norte-americana Lynn Margulis formulou a Teoria Endossimbiótica Serial (SET), propondo que as organelas energéticas das células eucarióticas — mitocôndrias e cloroplastos — originaram-se a partir de procariontes ancestrais de vida livre que foram fagocitados por uma célula hospedeira primitiva e passaram a viver em simbiose mutualística estável.",
      source: "Biologia Celular e Evolução dos Eucariontes"
    },
    prompt: "Entre as evidências bioquímicas e citológicas modernas que comprovam de forma irrefutável a origem endossimbiótica de mitocôndrias e cloroplastos, destaca-se o fato de que essas organelas possuem:",
    options: [
      { id: "a", text: "DNA próprio circular desprovido de histonas, ribossomos 70S semelhantes aos de bactérias e dupla membrana lipídica, sendo capazes de autorreplicação independente por fissão binária.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "parede celular espessa de peptideoglicano e locomoção obrigatória por cílios eucarióticos 9+2.", isCorrect: false, distractorRationale: "Organelas não têm parede celular externa bacteriana nem cílios eucarióticos de microtúbulos." },
      { id: "c", text: "núcleo delimitado por carioteca com poros e cromossomos lineares idênticos aos humanos.", isCorrect: false, distractorRationale: "O DNA de mitocôndrias e cloroplastos é circular e procarionte, sem carioteca e sem núcleo organizado." },
      { id: "d", text: "capacidade exclusiva de realizar fermentação alcoólica para excretar etanol no citoplasma.", isCorrect: false, distractorRationale: "Mitocôndrias realizam respiração aeróbica (ciclo de Krebs e cadeia respiratória) e cloroplastos realizam fotossíntese." },
      { id: "e", text: "origem espontânea a cada ciclo celular a partir do aparelho de Golgi sem divisão prévia.", isCorrect: false, distractorRationale: "Organelas endossimbiontes NUNCA são fabricadas do zero pelo Golgi; elas nascem exclusivamente da divisão de organelas pré-existentes." }
    ],
    detailedExplanation: {
      summary: "A Teoria Endossimbiótica é uma das teorias mais belas e cobradas do ENEM. Mitocôndrias descendem de alfa-proteobactérias aeróbicas e cloroplastos de cianobactérias fotossintetizantes. As evidências são: 1) DNA próprio circular bacteriano; 2) Ribossomos 70S (eucariontes têm 80S); 3) Dupla membrana (a interna é bacteriana, a externa é a vesícula de fagocitose hospedeira); 4) Fissão binária independente.",
      stepByStep: [
        "1. Hipótese de Margulis: Fagocitose sem digestão -> simbiose benéfica mútua.",
        "2. Evidência 1: DNA circular próprio e capacidade de autoduplicação.",
        "3. Evidência 2: Ribossomos 70S bacterianos inibidos por antibióticos (como cloranfenicol).",
        "4. Evidência 3: Dupla membrana lipoproteica.",
        "5. Conclusão: A alternativa (a) elenca todas as provas científicas cabais da endossimbiose."
      ],
      coreConcept: "Teoria Endossimbiótica de Lynn Margulis",
      trapWarning: "No ENEM: Se você tomar antibióticos de alta dosagem, eles podem atingir os ribossomos 70S das suas próprias mitocôndrias, gerando cansaço muscular temporário! Essa é a prova viva do parentesco bacteriano das nossas organelas."
    },
    commonTraps: [
      "Achar que mitocôndrias são sintetizadas pelo complexo de Golgi ou retículo",
      "Ignorar que o DNA mitocondrial é herdado exclusivamente por via materna nos mamíferos"
    ],
    tags: ["endossimbiose", "lynn-margulis", "mitocondrias", "cloroplastos", "evolucao-celular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-016",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Anagênese vs Cladogênese e Leitura de Cladogramas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em sistemática filogenética, a especiação e a evolução das linhagens são representadas em árvores filogenéticas ou cladogramas.\nDois conceitos fundamentais operam na diferenciação de táxons:\n• Anagênese: acúmulo gradual de modificações genéticas e anatômicas em uma mesma linhagem ao longo do tempo, sem bifurcação;\n• Cladogênese: ruptura e ramificação de uma linhagem ancestral em duas ou mais linhagens independentes a partir de nós evolutivos (eventos de especiação).",
      source: "Sistemática Filogenética e Reconstrução da Árvore da Vida"
    },
    prompt: "Em um cladograma, um 'nó' (ponto de bifurcação de onde partem dois ramos irmãos) representa graficamente:",
    options: [
      { id: "a", text: "o ancestral comum compartilhado exclusivamente pelas linhagens descendentes que partem daquele ponto e o momento histórico de cladogênese que levou à divergência evolutiva.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a extinção simultânea de todos os seres vivos do planeta por impacto de asteroides.", isCorrect: false, distractorRationale: "O nó indica especiação e surgimento de novos ramos irmãos, não aniquilação da biosfera." },
      { id: "c", text: "o ponto exato em que a seleção natural foi desativada e substituída por mutações lamarquistas.", isCorrect: false, distractorRationale: "A seleção natural atua continuamente em todos os ramos do cladograma." },
      { id: "d", text: "uma espécie que parou completamente de evoluir e congelou sua sequência genética para sempre.", isCorrect: false, distractorRationale: "Nenhum organismo vivo para de evoluir; linhagens continuam sofrendo mutações mesmo mantendo formas estáveis." },
      { id: "e", text: "a fusão de dois reinos biológicos incompatíveis gerando quimeras mitológicas.", isCorrect: false, distractorRationale: "O nó indica bifurcação e separação de linhagens, não fusão mitológica." }
    ],
    detailedExplanation: {
      summary: "Cladogramas mostram relações de parentesco. O nó representa o ANCESTRAL COMUM daquele clado e marca o evento de CLADOGÊNESE (geralmente gerado por isolamento geográfico e reprodutivo). Quanto mais recente o nó compartilhado, maior o parentesco entre os táxons terminais.",
      stepByStep: [
        "1. Raiz: ancestral comum de todo o grupo analisado.",
        "2. Nós: pontos de cladogênese (bifurcações) com ancestrais comuns hipotéticos.",
        "3. Ramos: linhagens que acumulam modificações por anagênese.",
        "4. Táxons terminais: espécies atuais ou fósseis posicionadas no topo.",
        "5. Conclusão: A alternativa (a) reflete com precisão técnica a anatomia de um cladograma."
      ],
      coreConcept: "Cladogênese, Anagênese e Leitura de Cladogramas",
      trapWarning: "No ENEM: A proximidade física na ponta do papel não importa! O que define parentesco em um cladograma é o NÓ compartilhado mais recente! (Girar um ramo em torno do nó não altera a filogenia)."
    },
    commonTraps: [
      "Ler a filogenia da esquerda para a direita achando que 'quem está na direita é mais evoluído'",
      "Confundir cladogênese (bifurcação de ramos) com anagênese (mudança dentro da mesma linhagem)"
    ],
    tags: ["filogenia", "cladograma", "cladogenese", "anagenese", "sistematica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-017",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "A Teoria Sintética e o Papel dos Fósseis como Registro Geológico",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A descoberta do fóssil de *Archaeopteryx lithographica* em rochas sedimentares do Jurássico na Alemanha representou um dos marcos mais decisivos para a comprovação da teoria da evolução. O espécime exibia uma combinação singular de características de répteis dinossauros (dentes na boca, cauda óssea longa e garras nas asas) e de aves modernas (penas assimétricas de voo e fúrcula óssea).",
      source: "Paleontologia dos Vertebrados e Origem das Aves"
    },
    prompt: "Fósseis como o *Archaeopteryx* são denominados 'fósseis de transição' e têm valor inestimável para a biologia porque comprovam que:",
    options: [
      { id: "a", text: "grandes grupos taxonômicos não surgiram de forma isolada e imutável, mas derivaram uns dos outros através de ancestrais compartilhados dotados de caracteres intermediários.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "as aves surgiram primeiro no planeta e deram origem aos peixes pulmonados através de degeneração morfológica.", isCorrect: false, distractorRationale: "Peixes surgiram centenas de milhões de anos antes das aves na escala do tempo geológico." },
      { id: "c", text: "os fósseis são esculturas rochosas intencionalmente lapidadas por povos antigos da era dos metais.", isCorrect: false, distractorRationale: "Fósseis são restos mineralizados genuínos de organismos pré-históricos petrificados em rochas sedimentares." },
      { id: "d", text: "todos os dinossauros foram répteis aquáticos que respiravam por traqueias abdominais.", isCorrect: false, distractorRationale: "Dinossauros eram amniotas terrestres pulmonados e não respiravam por traqueias abdominais de artrópodes." },
      { id: "e", text: "as penas surgiram originalmente com a finalidade exclusiva de refletir sinais de satélites artificiais.", isCorrect: false, distractorRationale: "Distrator anacrônico absurdo." }
    ],
    detailedExplanation: {
      summary: "Formas fósseis de transição mostram o elo morfológico entre grandes classes. O Archaeopteryx comprovou que as aves modernas são dinossauros terópodes emplumados vivos! Outros fósseis de transição famosos: Tiktaalik (entre peixes sarcopterígeos e anfíbios tetrápodes) e fósseis hominídeos como Lucy (Australopithecus).",
      stepByStep: [
        "1. Traços reptilianos de Archaeopteryx: dentes cônicos, vértebras caudais longas, dedos com garras nas asas.",
        "2. Traços de ave: penas de contorno perfeitamente preservadas, ossos pneumáticos leves.",
        "3. Importância: Demonstração material irrefutável da transição evolutiva entre répteis dinossauros e aves.",
        "4. Conclusão: A alternativa (a) reflete o consenso paleontológico da teoria evolutiva."
      ],
      coreConcept: "Fósseis de Transição e Continuidade Filogenética",
      trapWarning: "No ENEM: Aves são taxonomicamente dinossauros terópodes aviários que sobreviveram ao evento de extinção do Cretáceo-Paleógeno!"
    },
    commonTraps: [
      "Achar que não existem fósseis que conectem diferentes classes de animais",
      "Ignorar o princípio geológico da sobreposição das camadas sedimentares"
    ],
    tags: ["paleontologia", "archaeopteryx", "fosseis", "dinossauros", "origem-das-aves"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-018",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Aptidão Biológica (Fitness) e Sucesso Reprodutivo Diferencial",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em linguagem popular, a expressão darwiniana 'a sobrevivência do mais apto' é frequentemente interpretada como 'a sobrevivência do animal mais forte, agressivo e musculoso'. Em ecologia evolutiva contemporânea, todavia, o termo *aptidão biológica* (*fitness*) possui um significado técnico estritamente mensurável.",
      source: "Fundamentos de Genética e Evolução de Populações"
    },
    prompt: "No contexto da teoria evolutiva neodarwinista, a aptidão biológica (*fitness*) de um organismo é medida primordialmente pela sua capacidade de:",
    options: [
      { id: "a", text: "sobreviver até a idade fértil e deixar descendentes viáveis e férteis para as próximas gerações, transmitindo seus alelos com maior sucesso relativo na população.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "derrotar outros machos em disputas físicas de força bruta sem necessariamente procriar.", isCorrect: false, distractorRationale: "Vencer brigas físicas sem deixar descendentes resulta em aptidão biológica nula (zero cópias de genes repassados)." },
      { id: "c", text: "apresentar o maior volume de massa muscular e o esqueleto mais denso entre todos os seus congêneres.", isCorrect: false, distractorRationale: "Força física não garante fitness; animais camuflados e discretos podem ter sucesso reprodutivo muito maior." },
      { id: "d", text: "acumular tecido adiposo infinito para suportar décadas sem se alimentar no deserto.", isCorrect: false, distractorRationale: "Adaptações extremas não mensuram aptidão a menos que se traduzam em sucesso reprodutivo." },
      { id: "e", text: "aprender truques circenses complexos por meio de condicionamento pavloviano.", isCorrect: false, distractorRationale: "Truques adquiridos não são herdados geneticamente e não compõem a aptidão evolutiva populacional." }
    ],
    detailedExplanation: {
      summary: "Aptidão biológica (fitness) = contribuição genética relativa para a próxima geração. O animal mais rápido e forte que morre antes de se reproduzir tem fitness ZERO. Uma planta modesta e lenta que produz 10.000 sementes viáveis férteis tem fitness elevadíssimo.",
      stepByStep: [
        "1. Conceito vulgar: 'Mais forte' = músculos, agressividade.",
        "2. Conceito científico de fitness: Capacidade de deixar descendentes férteis.",
        "3. Seleção natural atua favorecendo quem tem maior sucesso reprodutivo diferencial.",
        "4. Conclusão: A alternativa (a) conceitua perfeitamente a aptidão neodarwinista."
      ],
      coreConcept: "Aptidão Biológica (Fitness) e Contribuição Genética",
      trapWarning: "No ENEM: Jamais confunda 'mais apto' com 'mais forte'! O mais apto é o mais bem adaptado ao contexto ecológico específico que gera mais filhos férteis!"
    },
    commonTraps: [
      "Associar 'mais apto' à força física ou tamanho corporal",
      "Esquecer que a descendência deve ser fértil para que o gene persista"
    ],
    tags: ["fitness", "aptidao-biologica", "sucesso-reprodutivo", "selecao-natural", "neodarwinismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-019",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "A Epigenética e a Reinterpretação Moderna da Ação Ambiental",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Estudos biomédicos recentes revelaram que fatores ambientais como dieta, estresse crônico severo e exposição a substâncias tóxicas podem causar modificações químicas reversíveis na cromatina — tais como metilação do DNA e acetilação de histonas — sem alterar a sequência de bases nitrogenadas (A, T, C, G). Essas modificações podem silenciar ou ativar a expressão de certos genes e, em alguns casos demonstrados em mamíferos, serem transmitidas mitoticamente e até pelas linhagens germinativas às gerações subsequentes.",
      source: "Epigenética Médica e Regulação da Expressão Gênica"
    },
    prompt: "Em relação aos mecanismos da Teoria Sintética da Evolução, as descobertas da epigenética:",
    options: [
      { id: "a", text: "acrescentam uma camada regulatória sofisticada sobre a expressão do genoma (revelando como o ambiente pode modular o funcionamento dos genes sem mudar o texto do DNA), mas não ressuscitam o lamarquismo clássico nem anulam o papel primordial das mutações e da seleção natural na evolução de longo prazo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "comprovam que Lamarck estava 100% correto e que o DNA não desempenha nenhuma função na hereditariedade biológica.", isCorrect: false, distractorRationale: "O DNA continua sendo o código genético universal; marcas epigenéticas apenas modulam a expressão sem invalidar a genética." },
      { id: "c", text: "demonstram que qualquer ideia pensada pelo cérebro humano transforma-se em um novo cromossomo funcional.", isCorrect: false, distractorRationale: "Pensamentos não geram novos cromossomos somáticos ou germinativos." },
      { id: "d", text: "invalidam a descoberta da estrutura em dupla hélice descrita por Watson e Crick em 1953.", isCorrect: false, distractorRationale: "A dupla hélice é a base molecular exata onde ocorrem as metilações das citosinas (ilhas CpG)." },
      { id: "e", text: "provam que bactérias podem ser clonadas a partir de poeira lunar esterilizada.", isCorrect: false, distractorRationale: "Distrator infundado sem relação com epigenética." }
    ],
    detailedExplanation: {
      summary: "A epigenética estuda mudanças na expressão gênica que não decorrem de mutações na fita de DNA (ex: metilação que 'desliga' um gene). Embora mostre que o ambiente influencia como o gene é lido, não valida o lamarquismo mítico de que o animal gera asas porque quer voar: a matriz genética primária continua sendo o DNA neodarwinista.",
      stepByStep: [
        "1. Epigenética: modificações químicas (metilação de citosina, acetilação de histonas).",
        "2. Não há alteração no código: a sequência de letras A-T-C-G permanece idêntica.",
        "3. Impacto evolutivo: plasticidade fenotípica adaptativa a curto e médio prazos.",
        "4. Conclusão: A alternativa (a) sintetiza a visão científica contemporânea integradora."
      ],
      coreConcept: "Epigenética: Modulação da Expressão sem Alteração da Sequência do DNA",
      trapWarning: "No ENEM: Cuidado com pegadinhas sensacionalistas! Epigenética NÃO desmente a seleção natural nem comprova Lamarck; ela apenas explica a fina regulação ambiental sobre o genoma."
    },
    commonTraps: [
      "Achar que marcas epigenéticas alteram as bases nitrogenadas do DNA",
      "Concluir precipitadamente que Darwin foi refutado pela epigenética"
    ],
    tags: ["epigenetica", "metilacao-dna", "histonas", "expressao-genica", "neodarwinismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-020",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "A Origem da Vida: Miller-Urey e a Hipótese do Mundo do RNA",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No famoso experimento de Stanley Miller e Harold Urey (1953), foi construído um aparelho de vidro fechado contendo uma mistura gasosa que simulava a atmosfera primitiva da Terra (metano - CH4, amônia - NH3, hidrogênio - H2 e vapor de água - H2O). O sistema era aquecido e recebia descargas elétricas contínuas para simular tempestades com relâmpagos. Após uma semana de circulação contínua, os cientistas analisaram a solução aquosa condensada no fundo e identificaram a formação espontânea de diversos aminoácidos (como glicina e alanina) e outros compostos orgânicos precursores.",
      source: "Origem da Vida e Evolução Química Prebiótica"
    },
    prompt: "O resultado experimental obtido por Miller e Urey forneceu sustentação empírica direta para a hipótese de Oparin e Haldane da evolução química da vida, demonstrando que:",
    options: [
      { id: "a", text: "moléculas orgânicas fundamentais para os seres vivos puderam ser sintetizadas abioticamente a partir de compostos inorgânicos simples nas condições físico-químicas da Terra primitiva.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "células procarióticas vivas complexas com membrana plasmática foram geradas instantaneamente pelas descargas elétricas em tubos de vidro.", isCorrect: false, distractorRationale: "O experimento sintetizou aminoácidos (moléculas orgânicas simples), e não células vivas completas." },
      { id: "c", text: "a vida na Terra teve origem obrigatória em meteoritos provenientes do planeta Marte (panspermia dirigida).", isCorrect: false, distractorRationale: "O experimento comprovou a viabilidade da síntese química prebiótica na própria Terra, sem necessidade de panspermia." },
      { id: "d", text: "o oxigênio molecular gasoso (O2) era o gás mais abundante na atmosfera terrestre primordial.", isCorrect: false, distractorRationale: "A atmosfera primitiva era redutora e anaeróbia; o O2 só surgiu muito depois com a fotossíntese de cianobactérias." },
      { id: "e", text: "a geração espontânea aristotélica de sapos a partir de lama podre é uma verdade biológica comprovada.", isCorrect: false, distractorRationale: "A abiogênese ingênua clássica (geração espontânea de sapos) foi refutada por Pasteur em 1862." }
    ],
    detailedExplanation: {
      summary: "Miller e Urey não criaram a vida em laboratório, mas comprovaram a primeira e mais crucial etapa da hipótese de Oparin e Haldane: a SÍNTESE PREBIÓTICA ABIÓTICA de monômeros orgânicos (aminoácidos) a partir de gases inorgânicos sob energia de raios e calor.",
      stepByStep: [
        "1. Hipótese de Oparin-Haldane: Atmosfera primitiva redutora (sem O2) + raios + radiação UV -> formação de aminoácidos na 'sopa primordial'.",
        "2. Teste de Miller-Urey: Montaram o circuito fechado com CH4, NH3, H2 e H2O com eletrodos de centelha.",
        "3. Descoberta: Síntese de vários aminoácidos fundamentais das proteínas.",
        "4. Importância: Prova de que a matéria inorgânica pode formar blocos construtores orgânicos por processos puramente físico-químicos naturais.",
        "5. Conclusão: A alternativa (a) descreve com perfeição a vitória epistêmica do experimento."
      ],
      coreConcept: "Experimento de Miller-Urey e a Evolução Química Prebiótica",
      trapWarning: "No ENEM: Miller NÃO criou uma bactéria ou célula! Ele sintetizou AMINOÁCIDOS (matéria-prima de proteínas) a partir de gases inorgânicos!"
    },
    commonTraps: [
      "Achar que Miller e Urey geraram seres vivos no laboratório",
      "Achar que a atmosfera primitiva continha gás oxigênio livre (O2)"
    ],
    tags: ["origem-da-vida", "miller-urey", "oparin-haldane", "evolucao-quimica", "aminoacidos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-021",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "A Hipótese do Mundo do RNA e as Ribozimas Catalíticas",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Um dos grandes enigmas da biogênese molecular era o paradoxo do 'ovo e da galinha': o DNA necessita de proteínas enzimáticas para se duplicar e ser transcrito, mas as proteínas necessitam da informação codificada no DNA para serem sintetizadas pelos ribossomos. A descoberta de ribozimas por Thomas Cech e Sidney Altman — moléculas de RNA dotadas de capacidade de atividade catalítica enzimática — abriu caminho para a consagrada 'Hipótese do Mundo do RNA'.",
      source: "Biologia Molecular da Célula e Bioquímica Prebiótica"
    },
    prompt: "De acordo com a Hipótese do Mundo do RNA, o RNA antecedeu o DNA e as proteínas na história primitiva da vida porque o RNA possui a capacidade ímpar de:",
    options: [
      { id: "a", text: "armazenar informação genética hereditária e, simultaneamente, atuar como catalisador biológico de reações químicas (ribozima), resolvendo o paradoxo entre material genético e enzima nos primórdios da vida.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "armazenar energia na forma de trifosfato de titânio cristalizado em rochas ígneas.", isCorrect: false, distractorRationale: "O RNA armazena informação genética e atua como ribozima, sem relação com titânio de rochas ígneas." },
      { id: "c", text: "substituir a água como solvente universal de todas as membranas biológicas.", isCorrect: false, distractorRationale: "O solvente da vida é a água polar; o RNA é um polímero de nucleotídeos hidrossolúvel." },
      { id: "d", text: "transformar-se instantaneamente em fosfolipídios de membrana sem gastar calorias.", isCorrect: false, distractorRationale: "Fosfolipídios são lipídios com ácidos graxos e glicerol, de rota metabólica distinta dos ácidos nucleicos." },
      { id: "e", text: "manter estabilidade química trilhões de vezes superior à do DNA em temperaturas de 500 °C.", isCorrect: false, distractorRationale: "O RNA é quimicamente MENOS estável que o DNA por possuir a hidroxila 2'-OH na ribose." }
    ],
    detailedExplanation: {
      summary: "A 'Hipótese do Mundo do RNA' solucionou o enigma primordial: antes da divisão de trabalho atual (onde o DNA guarda a informação e as proteínas executam as reações), o RNA fazia os DOIS papéis: guardava a informação genética e acelerava as reações como ribozima. Posteriormente, o DNA (mais estável) assumiu a guarda do genoma e as proteínas (mais versáteis) assumiram as enzimas.",
      stepByStep: [
        "1. Paradoxo inicial: Quem veio primeiro, o DNA que precisa de enzimas ou as enzimas que precisam do DNA?",
        "2. Descoberta de Cech e Altman: RNA pode ser enzima (Ribozima).",
        "3. Papel duplo do RNA primitivo: Hereditariedade (como o DNA) + Catálise química (como as proteínas).",
        "4. Evolução posterior: Transição para o DNA (fita dupla com timina, quimicamente mais estável) e proteínas com 20 aminoácidos.",
        "5. Conclusão: A alternativa (a) expõe os alicerces da Hipótese do Mundo do RNA."
      ],
      coreConcept: "Mundo do RNA e Ribozimas Catalíticas",
      trapWarning: "No ENEM: Lembra quem faz a ligação peptídica na síntese proteica dentro do seu corpo hoje? É o rRNA 28S do ribossomo — uma ribozima fóssil viva do Mundo do RNA dentro de cada uma de suas células!"
    },
    commonTraps: [
      "Achar que enzimas só podem ser feitas de aminoácidos/proteínas (ribozimas são feitas de RNA)",
      "Achar que o DNA veio antes do RNA"
    ],
    tags: ["mundo-do-rna", "ribozimas", "origem-da-vida", "thomas-cech", "biologia-molecular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-022",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "A Teoria Sintética e o Melanismo Industrial: Seleção em Ação",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O caso das mariposas *Biston betularia* na Inglaterra durante o século XIX é o exemplo clássico de seleção natural em tempo real: antes da Revolução Industrial, mariposas claras eram a quase totalidade da população por se camuflarem em troncos recobertos de liquens claros. Com a poluição do carvão mineral, a fuligem matou os liquens e escureceu os troncos; em poucas décadas, mariposas escuras (mutantes que antes eram presas fáceis de pássaros predadores) tornaram-se mais de 95% da população nas regiões fabris.",
      source: "Genética Ecológica e Seleção Natural em Ambientes Antrópicos"
    },
    prompt: "Quando, no século XX, leis ambientais britânicas despoluíram o ar e os troncos voltaram a se clarear com o retorno dos liquens, a população de mariposas claras voltou a crescer, ultrapassando novamente as escuras. Esse retorno comprova que:",
    options: [
      { id: "a", text: "o valor adaptativo de uma característica fenotípica é relativo e depende do contexto ecológico ambiental do momento, não existindo fenótipos 'intrinsecamente superiores' em termos absolutos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "as mariposas escuras decidiram mudar a cor de suas asas por esforço mental para não serem presas.", isCorrect: false, distractorRationale: "Camuflagem e coloração não são alteradas por decisão mental voluntária de insetos." },
      { id: "c", text: "a fuligem das fábricas era um alimento indispensável para a síntese de quitina nas asas escuras.", isCorrect: false, distractorRationale: "A fuligem apenas alterou o fundo visual dos troncos, não serviu como nutriente das mariposas." },
      { id: "d", text: "as mariposas claras e escuras deixaram de realizar reprodução sexuada e passaram a se clonar.", isCorrect: false, distractorRationale: "A reprodução continuou sendo sexuada com segregação mendeliana de alelos dominantes/recessivos." },
      { id: "e", text: "a extinção das mariposas escuras foi causada por vacinas aplicadas pelos fiscais da saúde pública.", isCorrect: false, distractorRationale: "Distrator estapafúrdio sem relação com ecologia florestal de lepidópteros." }
    ],
    detailedExplanation: {
      summary: "O valor adaptativo é SEMPRE relativo ao meio. Ser escuro era ótimo no tronco preto de fuligem; no tronco claro com liquens, tornou-se péssimo. A seleção natural oscila acompanhando as alterações do ambiente ecológico.",
      stepByStep: [
        "1. Fase 1 (pré-industrial): Tronco claro -> Mariposa clara camuflada (alta aptidão); Escura visível (baixa aptidão).",
        "2. Fase 2 (industrialização): Tronco preto de fuligem -> Mariposa escura camuflada (alta aptidão); Clara visível (baixa aptidão).",
        "3. Fase 3 (despoluição): Tronco claro retorna -> Mariposa clara volta a ter alta aptidão.",
        "4. Conclusão: Não há gene ou cor 'melhor'; há o fenótipo que no momento oferece maior probabilidade de sobrevivência contra predadores visuais (pássaros). Alternativa (a) correta."
      ],
      coreConcept: "Caráter Relativo da Adaptação e Pressão Seletiva Flutuante",
      trapWarning: "No ENEM: Adaptação NUNCA é absoluta! Um fenótipo excelente em um bioma pode ser mortal em outro bioma!"
    },
    commonTraps: [
      "Achar que o gene escuro é 'superior' por ser mutante ou dominante",
      "Esquecer que predadores visuais (aves) são os agentes da seleção natural no melanismo"
    ],
    tags: ["melanismo-industrial", "biston-betularia", "selecao-natural", "camuflagem", "ecologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-023",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "A Anemia Falciforme e a Vantagem do Heterozigoto na Malária",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A anemia falciforme é uma doença genética grave causada por uma mutação de ponto no gene da beta-globina (alelo HbS). Homozigotos recessivos (HbS/HbS) sofrem de vaso-oclusões dolorosas e anemia crônica severa. No entanto, em certas regiões da África Subsaariana e da Bacia do Mediterrâneo onde a malária por *Plasmodium falciparum* é endêmica, a frequência do alelo HbS na população atinge surpreendentes 20%, muito superior ao esperado para uma mutação deletéria.",
      source: "Genética Médica e Evolução Humana"
    },
    prompt: "A manutenção do alelo deletério da anemia falciforme em frequências elevadas nessas regiões endêmicas de malária explica-se pelo fenômeno da:",
    options: [
      { id: "a", text: "vantagem do heterozigoto (sobredominância), no qual indivíduos heterozigotos (HbA/HbS) apresentam hemácias que deformam precocemente quando invadidas pelo plasmódio, impedindo a proliferação do protozoário e conferindo resistência natural seletiva contra as formas letais da malária.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "imunidade provocada pelo consumo abundante de frutos cítricos ricos em vitamina C.", isCorrect: false, distractorRationale: "A resistência decorre de alteração genética na hemoglobina, e não de dieta rica em vitamina C." },
      { id: "c", text: "eliminação compulsória de todas as pessoas que não possuem o alelo mutante por ação de inseticidas agrícolas.", isCorrect: false, distractorRationale: "A seleção foi exercida pela letalidade da malária ao longo de milênios, não por inseticidas modernos." },
      { id: "d", text: "infecção do vírus do sarampo que converte glóbulos brancos em hemácias com núcleo.", isCorrect: false, distractorRationale: "Hemácias humanas são anucleadas e não se relacionam com infecção viral do sarampo." },
      { id: "e", text: "transformação do protozoário *Plasmodium* em uma bactéria mutualista no baço humano.", isCorrect: false, distractorRationale: "O plasmódio é um protozoário parasita intracelular de hemácias e hepatócitos e não se converte em bactéria." }
    ],
    detailedExplanation: {
      summary: "Este é o exemplo mais clássico de POLIMORFISMO EQUILIBRADO por VANTAGEM DO HETEROZIGOTO na espécie humana. 1) Homozigoto dominante (HbA/HbA): normal, mas vulnerável à malária grave (morre de malária na infância); 2) Homozigoto recessivo (HbS/HbS): sofre de anemia falciforme grave (alta mortalidade); 3) Heterozigoto (HbA/HbS): tem vida quase normal E É RESISTENTE À MALÁRIA! O heterozigoto sobrevive mais que ambos os homozigotos, mantendo o alelo HbS na população.",
      stepByStep: [
        "1. Locação geográfica: Regiões de malária endêmica.",
        "2. Mecanismo de resistência: O protozoário consome O2 dentro da hemácia do heterozigoto, provocando afoiçamento parcial; o baço reconhece a célula infectada e a destrói antes de o parasita completar o ciclo.",
        "3. Equilíbrio seletivo: A seleção contra a malária é tão forte que 'paga o preço' de gerar alguns filhos com anemia falciforme para garantir a sobrevivência da maioria heterozigota resistente.",
        "4. Conclusão: A alternativa (a) descreve com precisão a sobredominância adaptativa."
      ],
      coreConcept: "Vantagem do Heterozigoto (Sobredominância) e Polimorfismo Equilibrado",
      trapWarning: "No ENEM: Se uma região NÃO tem malária (ex: após migração para o sul do Brasil), a vantagem do heterozigoto DESAPARECE! Nessas áreas, a seleção natural atua desfavoravelmente contra o alelo HbS."
    },
    commonTraps: [
      "Achar que anemia falciforme é uma doença contagiosa transmitida pelo mosquito",
      "Não compreender por que uma mutação prejudicial à saúde pode ser preservada pela seleção natural"
    ],
    tags: ["anemia-falciforme", "vantagem-do-heterozigoto", "malaria", "polimorfismo", "medicina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-024",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "A Teoria Neutra da Evolução Molecular de Motoo Kimura",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1968, o geneticista de populações japonês Motoo Kimura propôs a Teoria Neutra da Evolução Molecular. Kimura demonstrou matematicamente que, em nível molecular (sequências de nucleotídeos no DNA e aminoácidos em proteínas), a esmagadora maioria das mutações que se fixam nas espécies não é prejudicial nem vantajosa, mas sim neutra em relação à seleção natural.",
      source: "KIMURA, Motoo. The Neutral Theory of Molecular Evolution"
    },
    prompt: "De acordo com a Teoria Neutra da Evolução Molecular, o principal mecanismo responsável pela fixação ou perda de mutações neutras ao longo das gerações na história da vida é a:",
    options: [
      { id: "a", text: "deriva genética casual (flutuação estocástica aleatória das frequências alélicas), demonstrando que no nível do DNA o acaso de amostragem desempenha papel preponderante sobre a seleção darwiniana.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "seleção natural direcional orientada para o aprimoramento constante de todas as proteínas.", isCorrect: false, distractorRationale: "A teoria de Kimura demonstra que a seleção natural é cega para mutações neutras, pois elas não alteram a aptidão do organismo." },
      { id: "c", text: "intervenção de raios cósmicos que forçam todas as populações a terem exatamente a mesma quantidade de cromossomos.", isCorrect: false, distractorRationale: "Raios cósmicos causam mutações esporádicas, não controlam número de cromossomos de populações." },
      { id: "d", text: "herança lamarquista na qual o desuso de introns corporais elimina as mitocôndrias.", isCorrect: false, distractorRationale: "Introns são transcritos e removidos no splicing; não há lamarquismo na evolução molecular." },
      { id: "e", text: "destruição imediata de qualquer molécula de DNA que sofra mutação sinônima por lisossomos.", isCorrect: false, distractorRationale: "Mutações sinônimas codificam o mesmo aminoácido e são toleradas perfeitamente pela célula." }
    ],
    detailedExplanation: {
      summary: "Motoo Kimura não negou que a seleção natural molda a morfologia e a fisiologia adaptativa do corpo (a casca exterior do organismo). O que ele provou é que, lá DENTRO das letras do DNA (mutações sinônimas em códons, íntrons, regiões intergênicas e trocas de aminoácidos conservados), a maior parte das mutações não faz diferença na sobrevivência e se fixa por PURA DERIVA GENÉTICA (acaso estatístico).",
      stepByStep: [
        "1. Código genético degenerado: Mutações na 3ª base do códon costumam codificar o mesmo aminoácido (mutações sinônimas/silenciosas).",
        "2. Como a proteína não muda de função, a seleção natural não tem como escolher contra ou a favor.",
        "3. Força evolutiva atuante: Deriva Genética (acaso de amostragem aleatória ao longo das gerações).",
        "4. Aplicação crucial: É a taxa constante de deriva das mutações neutras que permite construir o RELÓGIO MOLECULAR para datar quando duas espécies divergiram!",
        "5. Conclusão: A alternativa (a) resume a teoria de Kimura com maestria."
      ],
      coreConcept: "Teoria Neutra da Evolução Molecular e Deriva Genética em Nível de DNA",
      trapWarning: "No ENEM: A teoria de Kimura complementa Darwin! Darwin explica a anatomia visível (seleção adaptativa); Kimura explica o ritmo do relógio molecular no DNA (deriva neutra)!"
    },
    commonTraps: [
      "Achar que toda mutação afeta drasticamente a sobrevivência do indivíduo (a maioria é neutra)",
      "Achar que a Teoria Neutra nega a seleção natural para características fenotípicas"
    ],
    tags: ["teoria-neutra", "motoo-kimura", "evolucao-molecular", "deriva-genetica", "relogio-molecular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-EVO-025",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Evolução e Genética de Populações",
    subtopic: "Evolução Humana: Os Hominíneos e a Árvore Não Linear da Humanidade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A clássica ilustração 'A Marcha do Progresso' (desenhada por Rudolph Zallinger em 1965), que retrata uma fila indiana de primatas começando com um macaco quadrúpede encurvado e culminando de forma linear em um homem moderno caucasiano ereto, tornou-se um dos ícones visuais mais populares da cultura de massa. No entanto, a paleoantropologia contemporânea refuta categoricamente essa imagem como representação da evolução biológica.",
      source: "Paleoantropologia e Evolução dos Hominíneos"
    },
    prompt: "A paleoantropologia contemporânea rejeita a representação linear da 'Marcha do Progresso' porque a evolução da linhagem humana ocorreu sob o modelo de uma:",
    options: [
      { id: "a", text: "árvore filogenética densamente ramificada (arbusto evolutivo), na qual múltiplas espécies de hominíneos com diferentes combinações de traços anatômicos coexistiram no mesmo período geológico, tendo ocorrido inclusive cruzamentos e hibridizações pontuais entre linhagens como Homo sapiens, Neandertais e Denisovanos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "linha reta perfeita de teleologia finalista cujo objetivo biológico cósmico era criar o Homo sapiens para dominar o planeta.", isCorrect: false, distractorRationale: "A evolução não tem plano pré-determinado, meta finalista cósmica nem segue linha reta de progresso." },
      { id: "c", text: "regressão involuntária que transformou hominíneos bípedes eretos em chimpanzés quadrúpedes.", isCorrect: false, distractorRationale: "Chimpanzés e humanos seguiram caminhos divergentes independentes a partir de um ancestral comum extinto." },
      { id: "d", text: "mutação única espontânea ocorrida em um único casal humano no ano de 1500 da era cristã.", isCorrect: false, distractorRationale: "O gênero Homo existe há mais de 2,5 milhões de anos na África e o Homo sapiens há mais de 300 mil anos." },
      { id: "e", text: "subordinação irrestrita à seleção artificial conduzida por dinossauros domesticados em fazendas pré-históricas.", isCorrect: false, distractorRationale: "Dinossauros não aviários foram extintos há 66 milhões de anos, muito antes do surgimento dos hominíneos." }
    ],
    detailedExplanation: {
      summary: "A evolução humana não foi uma fila indiana onde uma espécie vira a outra e desaparece. Foi um ARBUSTO RAMIFICADO: há 50.000 anos, dividiam o planeta SIMULTANEAMENTE o Homo sapiens, o Homo neanderthalensis (na Europa/Ásia), os Denisovanos (na Ásia), o Homo floresiensis (na Indonésia) e o Homo luzonensis (nas Filipinas)! O DNA de humanos não africanos atuais preserva de 1% a 2% de genes neandertais, comprovando hibridização no passado.",
      stepByStep: [
        "1. Crítica à 'Marcha do Progresso': Dá a ilusão falsa de teleologia (objetivo final), progresso linear e 'escada evolutiva'.",
        "2. Realidade científica: Cladogênese ramificada com múltiplos ramos laterais extintos.",
        "3. Coexistência: Neandertais e Sapiens conviveram e cruzaram na Eurásia.",
        "4. Conclusão: A espécie humana atual é o único ramo sobrevivente de uma rica árvore com dezenas de hominíneos bípedes extintos. Alternativa (a) correta."
      ],
      coreConcept: "Evolução Humana como Arbusto Ramificado vs Mito da Marcha Linear",
      trapWarning: "No ENEM: Fuja de alternativas que digam que a evolução tem 'um objetivo', 'uma meta de criar o homem' ou que 'uma espécie se transformou inteira na outra em linha reta'!"
    },
    commonTraps: [
      "Acreditar que a evolução humana é linear (um virou o outro)",
      "Achar que o homem moderno nunca cruzou com outras espécies de hominíneos (cruzou com Neandertais e Denisovanos)"
    ],
    tags: ["evolucao-humana", "hominineos", "neandertais", "cladogenese", "antropologia-evolutiva"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
