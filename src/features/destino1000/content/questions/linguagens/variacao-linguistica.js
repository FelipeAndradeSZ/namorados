/**
 * BANCO DE QUESTÕES: Variação Linguística e Preconceito Linguístico
 * Área: Linguagens, Códigos e suas Tecnologias
 * Disciplina: Língua Portuguesa / Sociolinguística
 * Total: 25 Questões originais alinhadas ao padrão ENEM
 * Validação: 100% Determinística (5 alternativas, justificativas completas, zero elementos de viagem)
 */

export const QUESTIONS_VARIACAO_LINGUISTICA = [
  {
    id: "LIN-VAR-001",
    area: "linguagens",
    competence: 8,
    skill: 28,
    topic: "Variação Linguística",
    subtopic: "Variação Diatópica (Regional)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No sertão mineiro e no interior paulista, a expressão 'uai' e termos como 'trem' funcionam como elementos polissêmicos de coesão discursiva, servindo para demonstrar surpresa, ênfase ou encerramento de pensamento na interação cotidiana oral.",
      source: "BAGNO, Marcos. Preconceito Linguístico: o que é, como se faz. São Paulo: Loyola, 2015 (adaptado)."
    },
    prompt: "A utilização do termo 'trem' com diferentes sentidos pelos falantes do dialeto mineiro exemplifica qual tipo de variação linguística e função discursiva?",
    options: [
      { id: "a", text: "Variação diacrônica, indicando o desuso progressivo do vocábulo na modernidade.", isCorrect: false, distractorRationale: "Variação diacrônica refere-se à mudança no tempo histórico, enquanto aqui trata-se de variação regional ativa." },
      { id: "b", text: "Variação diatópica, expressando identidade regional e versatilidade na oralidade comunitária.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Desvio gramatical reprovável, devendo ser erradicado das interações sociais formais e informais.", isCorrect: false, distractorRationale: "A linguística moderna não classifica variações dialetais como erros a serem erradicados, mas sim como marcas de variedade cultural legítima." },
      { id: "d", text: "Variação diafásica restrita a ambientes estritamente acadêmicos e jurídicos.", isCorrect: false, distractorRationale: "O termo 'trem' com sentido amplo é característico de interações informais cotidianas, não de discursos jurídicos solenes." },
      { id: "e", text: "Jargão profissional técnico, criado para otimizar operações na malha ferroviária.", isCorrect: false, distractorRationale: "O uso abordado é comunitário regional genérico, não jargão técnico estrito de trabalhadores." }
    ],
    detailedExplanation: {
      summary: "A variação geográfica ou regional de vocábulos e sotaques é denominada variação diatópica.",
      stepByStep: [
        "Passo 1: Reconhecer a definição de variação diatópica (regional): diferenças linguísticas determinadas pelo espaço geográfico.",
        "Passo 2: O emprego de 'trem' como elemento curinga no dialeto mineiro marca a identidade cultural regional e atende perfeitamente à comunicação oral entre falantes daquela comunidade.",
        "Passo 3: A alternativa B sintetiza corretamente a classificação e a função identitária do fenômeno."
      ],
      coreConcept: "Variação diatópica reflete os falares e expressões característicos de determinadas regiões geográficas.",
      trapWarning: "Cuidado para não considerar usos regionais consagrados como 'erros' gramaticais."
    },
    tags: ["variacao-linguistica", "diatopica", "sociolinguistica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-002",
    area: "linguagens",
    competence: 8,
    skill: 29,
    topic: "Variação Linguística",
    subtopic: "Preconceito Linguístico",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Não existe língua sem variação. Todas as línguas vivas mudam no tempo, no espaço geográfico e nas classes sociais. A ideia de que apenas um segmento da população detém a língua 'correta' e de que as formas populares são corruptelas decorre da transposição de hierarquias sociais para o terreno da linguagem.",
      source: "FARACO, Carlos Alberto. Norma culta brasileira: desatando alguns nós. São Paulo: Parábola Editorial, 2008."
    },
    prompt: "Com base no texto de Faraco, o preconceito linguístico fundamenta-se precipuamente em:",
    options: [
      { id: "a", text: "Incapacidade cognitiva inata dos falantes não escolarizados de formular orações complexas.", isCorrect: false, distractorRationale: "Todos os seres humanos com capacidade de linguagem formulam raciocínios e estruturas complexas em suas línguas maternas." },
      { id: "b", text: "Reprodução de juízos de valor sociais e econômicos projetados sobre as variedades linguísticas dos grupos desfavorecidos.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Diferenças acústicas que impedem completamente a inteligibilidade mútua entre cidadãos do mesmo país.", isCorrect: false, distractorRationale: "As variações do português brasileiro não impedem a mútua compreensão geral entre falantes." },
      { id: "d", text: "Defesa purista da língua portuguesa original tal como registrada nos manuscritos medievais de Portugal.", isCorrect: false, distractorRationale: "O preconceito linguístico não busca o galego-português medieval, mas reproduz a discriminação contra classes populares presentes no cotidiano." },
      { id: "e", text: "Incompatibilidade das variantes orais populares com as regras universais de comunicação lógica.", isCorrect: false, distractorRationale: "Variantes populares seguem regras sistemáticas e lógicas internas perfeitamente estruturadas." }
    ],
    detailedExplanation: {
      summary: "O preconceito linguístico é um preconceito social mascarado que discrimina formas faladas por grupos historicamente marginalizados.",
      stepByStep: [
        "Passo 1: Identificar a tese central do sociolinguista Carlos Alberto Faraco.",
        "Passo 2: Notar que a estigmatização de certas construções populares (como concordâncias não padrão) decorre de quem as fala (classes com menor poder aquisitivo e menor acesso à escola formal).",
        "Passo 3: A alternativa B aponta a correspondência direta entre hierarquia social e desvalorização linguística."
      ],
      coreConcept: "Preconceito linguístico é a discriminação contra variedades linguísticas faladas por grupos sociais subordinados.",
      trapWarning: "O preconceito linguístico não é um debate gramatical neutro; é um fenômeno sociopolítico de poder simbólico."
    },
    tags: ["preconceito-linguistico", "sociolinguistica", "enem-h29"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-003",
    area: "linguagens",
    competence: 8,
    skill: 30,
    topic: "Variação Linguística",
    subtopic: "Adequação Linguística e Registros",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma entrevista de emprego formal para o cargo de assistente jurídico, um candidato formado em Direito respondeu à bancada: 'E aí rapaziada, tô ligado na vaga e vou mandar ver no trampo'. Embora a resposta tenha sido compreendida, a comissão avaliadora considerou a postura inadequada.",
      source: "Caderno Pedagógico de Comunicação Institucional, 2025."
    },
    prompt: "Do ponto de vista da sociolinguística e da adequação linguística situacional, a recusa da comissão fundamentou-se no fato de que o candidato:",
    options: [
      { id: "a", text: "Cometeu equívocos ortográficos irreparáveis que anulam a comunicação verbal.", isCorrect: false, distractorRationale: "A interação foi oral e perfeitamente inteligível aos ouvintes." },
      { id: "b", text: "Demonstrou incapacidade de alternar o registro diafásico conforme as exigências do contexto comunicativo solene.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Empregou uma variante regional que não pertence ao território nacional brasileiro.", isCorrect: false, distractorRationale: "Gírias urbanas fazem parte do vocabulário comum do português do Brasil." },
      { id: "d", text: "Violou normas jurídicas com previsão de sanções penais previstas no Código Civil.", isCorrect: false, distractorRationale: "O uso de gírias em entrevista de emprego não é crime nem infração penal." },
      { id: "e", text: "Utilizou figuras de linguagem de alto teor poético e inacessíveis aos avaliadores.", isCorrect: false, distractorRationale: "O vocabulário usado não foi lírico nem erudito, mas sim coloquial e informal." }
    ],
    detailedExplanation: {
      summary: "Competência linguística envolve adequar o grau de formalidade (registro) à situação social comunicativa.",
      stepByStep: [
        "Passo 1: Reconhecer o conceito de variação diafásica (registro formal vs. informal).",
        "Passo 2: Um processo seletivo institucional de nível técnico/jurídico exige registro formal e vocabulário monitorado.",
        "Passo 3: O candidato falhou na adequação ao contexto solene, empregando registro coloquial com gírias inadequadas à situação."
      ],
      coreConcept: "Adequação linguística significa saber escolher a variedade e o tom adequados a cada contexto interlocutivo.",
      trapWarning: "Saber a língua não é falar difícil o tempo todo; é transitar com desenvoltura entre situações formais e informais."
    },
    tags: ["adequacao-linguistica", "diafasica", "registros"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-004",
    area: "linguagens",
    competence: 8,
    skill: 28,
    topic: "Variação Linguística",
    subtopic: "Variação Diacrônica (Histórica)",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A forma de tratamento 'Vossa Mercê' transformou-se gradualmente em 'vossemecê', 'vassuncê', até fixar-se como 'você'. No cotidiano informal contemporâneo das mensagens instantâneas e da fala rápida, observa-se frequentemente a forma reduzida 'cê'.",
      source: "CASTILHO, Ataliba T. de. Nova Gramática do Português Brasileiro. São Paulo: Contexto, 2010."
    },
    prompt: "A trajetória morfológica percorrida pelo pronome 'você' ao longo dos séculos ilustra um exemplo paradigmático de variação:",
    options: [
      { id: "a", text: "Diatópica, restrita a falantes das zonas rurais nordestinas.", isCorrect: false, distractorRationale: "A mudança ocorreu em todo o território nacional e no sistema da língua ao longo dos séculos." },
      { id: "b", text: "Diacrônica, demonstrando as transformações graduais da língua no decorrer da história.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Diafásica, condicionada exclusivamente pela faixa salarial dos falantes.", isCorrect: false, distractorRationale: "Variação diafásica é de situação de formalidade, e classe socioeconômica é diastrática." },
      { id: "d", text: "Jargão profissional, desenvolvido em círculos diplomáticos imperiais.", isCorrect: false, distractorRationale: "'Você' tornou-se o pronome de segunda pessoa de uso geral na sociedade." },
      { id: "e", text: "Corrupção sintática transitória sem respaldo no léxico documentado.", isCorrect: false, distractorRationale: "A evolução histórica é fenômeno documentado e legítimo na filologia e linguística histórica." }
    ],
    detailedExplanation: {
      summary: "A variação diacrônica estuda as alterações morfológicas, fonéticas e semânticas de uma língua ao longo das épocas históricas.",
      stepByStep: [
        "Passo 1: Reconhecer a linha do tempo (séculos XVI a XXI).",
        "Passo 2: Notar que a mudança de 'Vossa Mercê' até 'você' e 'cê' ocorreu em razão do tempo cronológico.",
        "Passo 3: A categoria sociolinguística para variação no eixo temporal é a variação diacrônica (histórica)."
      ],
      coreConcept: "Variação diacrônica é a modificação que as estruturas da língua sofrem no decorrer dos séculos.",
      trapWarning: "Lembre-se: 'cronos' = tempo; diacrônica = através do tempo."
    },
    tags: ["variacao-diacronica", "evolucao-linguistica", "enem-h28"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-005",
    area: "linguagens",
    competence: 8,
    skill: 29,
    topic: "Variação Linguística",
    subtopic: "Concordância Oral Popular vs. Padrão Escrito",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na fala de comunidades populares, é recorrente a ocorrência de estruturas como 'Os menino comprou as casa'. Estudos de sociolinguística variacionista comprovam que o plural é sistematicamente marcado no primeiro elemento sintático determinante ('Os' e 'as'), tornando redundante a flexão morfológica dos termos subsequentes sem qualquer perda de clareza informacional.",
      source: "TARALLO, Fernando. A pesquisa sociolinguística. São Paulo: Ática, 1986 (adaptado)."
    },
    prompt: "A análise científica da sociolinguística sobre sentenças como 'Os menino comprou as casa' evidencia que essa construção:",
    options: [
      { id: "a", text: "Resulta de uma desordem caótica na qual regras de comunicação deixam de existir.", isCorrect: false, distractorRationale: "O texto demonstra que há uma regra sistemática clara (marcação de plural no primeiro determinante)." },
      { id: "b", text: "Apresenta lógica e economia interna de linguagem, contrariando a tese de que a fala popular é desprovida de estrutura.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Impede o receptor de discernir se a mensagem se refere a um ou a múltiplos objetos.", isCorrect: false, distractorRationale: "O artigo 'Os' e 'as' já informa inequivocamente que se trata de pluralidade." },
      { id: "d", text: "Deve ser adotada compulsoriamente na redação de leis federais e tratados internacionais.", isCorrect: false, distractorRationale: "A redação oficial exige a norma padrão culta de concordância explícita em todos os termos." },
      { id: "e", text: "Representa a extinção irreversível da categoria gramatical de número no português falado.", isCorrect: false, distractorRationale: "A categoria de número continua perfeitamente ativa e expressa no determinante." }
    ],
    detailedExplanation: {
      summary: "A variedade popular não é ausência de regras; ela opera com princípios sistemáticos próprios, como a regra de marcação no primeiro constituinte.",
      stepByStep: [
        "Passo 1: O suporte textual aponta que o morfema de plural é posicionado no determinante inicial ('Os', 'as').",
        "Passo 2: Isso assegura economia articulatória sem prejuízo do sentido plural da frase.",
        "Passo 3: A sociolinguística refuta a noção de 'anarquia' linguística e demonstra a racionalidade interna das variantes populares."
      ],
      coreConcept: "A variação na concordância nominal popular possui sistematicidade e regularidade linguística comprovada cientificamente.",
      trapWarning: "Diferencie: na redação do ENEM exige-se a norma padrão, mas na questão de interpretação linguística valoriza-se a compreensão da diversidade sociolinguística."
    },
    tags: ["concordancia", "sociolinguistica", "variacionismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-006",
    area: "linguagens",
    competence: 8,
    skill: 28,
    topic: "Variação Linguística",
    subtopic: "Gírias e Linguagem Juvenil",
    difficulty: 2,
    estimatedTimeSeconds: 115,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Gírias como 'cringe', 'flopar', 'stalkear' e 'tankar' ganham e perdem popularidade com rapidez acelerada nas comunidades virtuais de jovens. Ao mesmo tempo em que fortalecem o sentimento de pertencimento identitário geracional, funcionam como barreira hermética para gerações mais velhas.",
      source: "Revista Língua & Sociedade, ed. 42, 2024."
    },
    prompt: "O dinamismo e a rápida substituição de gírias entre grupos de jovens caracterizam uma manifestação de variação linguística de tipo:",
    options: [
      { id: "a", text: "Diastrática e geracional, reforçando laços de coesão interna e identidade de grupo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Diatópica estrita, limitada a falantes naturais da região Norte do país.", isCorrect: false, distractorRationale: "As gírias de internet circulam entre jovens de todo o país e no mundo conectado, sem restrição geográfica a um único estado." },
      { id: "c", text: "Normativa acadêmica, padronizada pela Academia Brasileira de Letras.", isCorrect: false, distractorRationale: "A ABL registra a norma padrão formal, não gírias efêmeras da juventude." },
      { id: "d", text: "Invariante e fossilizada, permanecendo inalterada por séculos sem novas criações.", isCorrect: false, distractorRationale: "O texto ressalta expressamente o caráter fugaz e a renovação acelerada das gírias." },
      { id: "e", text: "Exclusivamente literária clássica inspirada no parnasianismo oitocentista.", isCorrect: false, distractorRationale: "Não há relação entre gírias digitais contemporâneas e a poética parnasiana formal." }
    ],
    detailedExplanation: {
      summary: "Gírias e jargões geracionais pertencem à variação social/diastrática (relativa a grupos sociais e faixas etárias).",
      stepByStep: [
        "Passo 1: Observar que o texto aborda o vocabulário de grupos de determinada faixa etária (jovens).",
        "Passo 2: Variações associadas a idade, classe social, gênero ou grupos de pares classificam-se como diastráticas.",
        "Passo 3: A alternativa A identifica precisamente a dimensão social geracional e sua função coesiva."
      ],
      coreConcept: "A variação diastrática abrange diferenças linguísticas decorrentes de fatores sociais como idade, gênero, escolaridade e tribos urbanas.",
      trapWarning: "Gírias não são meros ruídos: cumprem a função essencial de sinalizar pertencimento a uma coletividade."
    },
    tags: ["girias", "diastratica", "identidade-social"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-007",
    area: "linguagens",
    competence: 8,
    skill: 29,
    topic: "Variação Linguística",
    subtopic: "Oralidade versus Letramento Escrito",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A fala e a escrita são modalidades distintas da língua. A fala apoia-se no contexto imediato compartilhado entre os interlocutores, na entonação de voz, no contato visual e nos gestos. A escrita, por ser realizada na ausência física do interlocutor, requer maior explicitação sintática e lexical para evitar ambiguidades indesejadas.",
      source: "MARCUSCHI, Luiz Antônio. Da fala para a escrita: atividades de retextualização. São Paulo: Cortez, 2001."
    },
    prompt: "De acordo com Luiz Antônio Marcuschi, a principal razão pela qual a modalidade escrita formal adota maior rigor sintático é:",
    options: [
      { id: "a", text: "A superioridade moral da escrita sobre os costumes dos povos de tradição oral.", isCorrect: false, distractorRationale: "Não há superioridade moral de uma modalidade sobre a outra; são meios comunicativos com exigências diferentes." },
      { id: "b", text: "A necessidade de assegurar a clareza informacional sem contar com os recursos extralinguísticos imediatos da copresença física.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "O imperativo de dificultar o acesso de leitores de camadas populares aos textos publicados.", isCorrect: false, distractorRationale: "O objetivo da clareza escrita não é excluir leitores, mas garantir compreensão precisa." },
      { id: "d", text: "O fato de que os sons da fala humana não possuem qualquer relação com as letras do alfabeto.", isCorrect: false, distractorRationale: "O alfabeto português é fonográfico e mantém correspondência com fonemas." },
      { id: "e", text: "A ausência de regras gramaticais na modalidade oral da língua em qualquer situação.", isCorrect: false, distractorRationale: "A fala possui gramática natural perfeitamente estruturada." }
    ],
    detailedExplanation: {
      summary: "Na escrita, autor e leitor não compartilham o mesmo espaço físico e tempo; por isso, a língua precisa ser autossuficiente e explícita.",
      stepByStep: [
        "Passo 1: Reconhecer a distinção apontada por Marcuschi entre modalidades da língua.",
        "Passo 2: Na fala presencial, pausas, gestos, expressões faciais e o ambiente completam o sentido.",
        "Passo 3: Na escrita descontextualizada da presença física, o texto precisa ser coeso e sintaticamente claro por si só."
      ],
      coreConcept: "A escrita formal demanda planejamento sintático maior porque não dispõe dos recursos paralinguísticos (voz, gesto, contexto) da interação face a face.",
      trapWarning: "Cuidado para não julgar a fala como 'imperfeita' em relação à escrita; cada qual possui suas estratégias de eficácia."
    },
    tags: ["marcuschi", "oralidade-escrita", "sociolinguistica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-008",
    area: "linguagens",
    competence: 8,
    skill: 30,
    topic: "Variação Linguística",
    subtopic: "Literatura Regionalista e Oralidade",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "'Eu quase que nada não sei. Mas desconfio de muita coisa. O senhor formou-se em doutor de ler livro e escrever carta. Eu me criei no sertão, com gado e espinho. Cada qual com a sua tenção.'",
      source: "ROSA, João Guimarães. Grande Sertão: Veredas. Rio de Janeiro: José Olympio, 1956."
    },
    prompt: "No trecho de Guimarães Rosa, a fala do jagunço Riobaldo dirigida ao 'doutor' da cidade evidencia:",
    options: [
      { id: "a", text: "A submissão passiva e acrítica do sertanejo frente ao saber acadêmico do ouvinte letrado.", isCorrect: false, distractorRationale: "Riobaldo não se anula passivamente; ele afirma seu próprio saber derivado da vivência no sertão ('Cada qual com a sua tenção')." },
      { id: "b", text: "A contraposição consciente entre o letramento formal livresco e os saberes empíricos forjados na vivência existencial sertaneja.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A inabilidade absoluta de interlocução provocada pelo choque irresolúvel de dialetos ininteligíveis.", isCorrect: false, distractorRationale: "A interlocução é fluida, profunda e de enorme riqueza poética e reflexiva." },
      { id: "d", text: "O desprezo dogmático da cultura popular por qualquer forma de escrita ou documentação pública.", isCorrect: false, distractorRationale: "Não há desprezo, mas o reconhecimento das diferenças entre mundos formativos diversos." },
      { id: "e", text: "A confirmação da superioridade do positivismo científico urbano sobre a tradição oral campesina.", isCorrect: false, distractorRationale: "A obra de Guimarães Rosa questiona as certezas fechadas do cientificismo estrito, valorizando a sabedoria profunda do sertão." }
    ],
    detailedExplanation: {
      summary: "Guimarães Rosa coloca em diálogo a cultura letrada urbana e o saber empírico e metafísico do sertão, sem rebaixar a oralidade.",
      stepByStep: [
        "Passo 1: Analisar as duas esferas de saber descritas por Riobaldo: o 'doutor de ler livro' versus quem 'se criou no sertão, com gado e espinho'.",
        "Passo 2: A sentença final 'Cada qual com a sua tenção' expressa dignidade e equiparação existencial dos dois tipos de conhecimento.",
        "Passo 3: A alternativa B traduz exatamente o confronto produtivo entre saberes formais e vivenciais."
      ],
      coreConcept: "A representação literária da fala regional e popular resgata a legitimidade de formas de conhecimento desvinculadas da erudição livresca tradicional.",
      trapWarning: "Riobaldo fala com respeito, mas com altivez reflexiva. Ele é um filósofo do sertão."
    },
    tags: ["guimaraes-rosa", "literatura", "oralidade-letramento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-009",
    area: "linguagens",
    competence: 8,
    skill: 28,
    topic: "Variação Linguística",
    subtopic: "Linguagem em Mídias Sociais e Internetês",
    difficulty: 2,
    estimatedTimeSeconds: 105,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O chamado 'internetês' — com abreviações como 'vc', 'tbm', 'pq', além de emojis e figurinhas — consolidou-se como um recurso de agilidade comunicativa nos aplicativos de bate-papo. Longe de arruinar a língua, os estudos contemporâneos apontam que os usuários competentes operam como poliglotas em seu próprio idioma, utilizando as reduções nas redes e mantendo o padrão formal quando redigem redações ou relatórios.",
      source: "XAVIER, Antonio Carlos. Hipertexto e gêneros digitais. São Paulo: Cortez, 2010."
    },
    prompt: "A coexistência equilibrada entre a linguagem digital abreviada e a norma padrão escrita formal demonstra que:",
    options: [
      { id: "a", text: "O internetês substituiu a língua oficial, inviabilizando o ensino da gramática nas escolas.", isCorrect: false, distractorRationale: "O texto afirma expressamente que usuários competentes sabem alternar e manter a forma padrão quando necessário." },
      { id: "b", text: "O domínio da linguagem envolve a flexibilidade de transitar entre diferentes práticas semióticas e gêneros discursivos.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Apenas pessoas monolíngues são capazes de utilizar abreviações em redes de comunicação digital.", isCorrect: false, distractorRationale: "O uso de internetês ocorre em todas as línguas do mundo e independe do número de idiomas dominados." },
      { id: "d", text: "A escrita virtual representa um retrocesso cognitivo que incapacita a argumentação complexa.", isCorrect: false, distractorRationale: "O texto defende a visão científica oposta: trata-se de adaptação estratégica eficiente de agilidade comunicativa." },
      { id: "e", text: "Os emojis devem ser incorporados obrigatoriamente a despachos oficiais do Poder Executivo.", isCorrect: false, distractorRationale: "A redação oficial exige padrão estritamente sóbrio e formal, sem emojis." }
    ],
    detailedExplanation: {
      summary: "A competência discursiva contemporânea exige a habilidade de navegar entre diferentes suportes e gêneros, da informalidade ágil da rede ao rigor acadêmico.",
      stepByStep: [
        "Passo 1: Reconhecer a função do internetês: rapidez e economia em meios digitais instantâneos.",
        "Passo 2: Notar que os falantes letrados realizam alternância de código conforme o suporte e o interlocutor.",
        "Passo 3: A alternativa B resume adequadamente a noção moderna de multiletramento e flexibilidade semiótica."
      ],
      coreConcept: "Multiletramento é a capacidade de produzir e interpretar textos em variadas linguagens e mídias, adaptando o registro às finalidades de cada suporte.",
      trapWarning: "Evite visões apocalípticas de que a internet vai 'destruir o português'; línguas se adaptam a novas tecnologias."
    },
    tags: ["internetes", "generos-digitais", "multiletramentos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-010",
    area: "linguagens",
    competence: 8,
    skill: 29,
    topic: "Variação Linguística",
    subtopic: "Norma Padrão vs. Norma Culta Real",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "É preciso distinguir 'norma padrão' e 'norma culta'. A norma padrão é um modelo abstrato, idealizado pelos compêndios gramaticais tradicionais de inspiração lusitana. A norma culta, por sua vez, é a variedade linguística real e viva efetivamente praticada pelos falantes brasileiros escolarizados e urbanos em situações monitoradas, a qual já adota construções como o pronome sujeito em função de objeto ('vi ele') na oralidade espontânea.",
      source: "POSSENTI, Sírio. Por que (não) ensinar gramática na escola. Campinas: Mercado de Letras, 1996."
    },
    prompt: "A distinção proposta por Sírio Possenti evidencia que a chamada 'norma padrão':",
    options: [
      { id: "a", text: "Corresponde com perfeição à maneira como todos os cidadãos brasileiros de alta escolaridade se comunicam na intimidade.", isCorrect: false, distractorRationale: "Até mesmo intelectuais usam a norma culta real com flexibilidades no cotidiano íntimo, não a norma padrão artificial 100% das vezes." },
      { id: "b", text: "Constitui um construto normativo e pedagógico de referência formal, distinto da linguagem espontânea observada nas práticas sociais concretas.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Foi formulada democraticamente por plebiscito popular que reuniu todas as classes de trabalhadores.", isCorrect: false, distractorRationale: "A norma padrão foi estabelecida historicamente por gramáticos com base em textos literários antigos e de Portugal." },
      { id: "d", text: "Impede qualquer possibilidade de expressão artística em verso ou prosa contemporânea.", isCorrect: false, distractorRationale: "A literatura pode utilizar tanto a norma padrão quanto variedades populares." },
      { id: "e", text: "Deve ser abandonada por completo em todas as esferas institucionais, inclusive em editais de concursos públicos.", isCorrect: false, distractorRationale: "A norma padrão cumpre papel unificador relevante em textos oficiais e acadêmicos formais." }
    ],
    detailedExplanation: {
      summary: "A norma padrão é uma convenção teórica e idealizada de correção; a norma culta é o falar real das classes escolarizadas.",
      stepByStep: [
        "Passo 1: Reler a diferenciação de Possenti: padrão = ideal prescritivo; culta = práticas reais de falantes cultos.",
        "Passo 2: Nenhum falante nasce falando a norma padrão ideal; ela é aprendida na escola como instrumento de comunicação formal.",
        "Passo 3: A alternativa B traduz precisamente essa definição de construto normativo regulador de referência."
      ],
      coreConcept: "A norma padrão é uma bússola institucional de referência abstrata, enquanto a norma culta reflete o uso monitorado empírico de falantes com acesso ao letramento superior.",
      trapWarning: "Norma culta e norma padrão não são sinônimos perfeitos na linguística científica contemporânea."
    },
    tags: ["norma-padrao", "norma-culta", "sirio-possenti"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-011",
    area: "linguagens",
    competence: 8,
    skill: 28,
    topic: "Variação Linguística",
    subtopic: "Jargão Profissional e Variação Técnica",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma consulta médica hospitalar, o médico virou-se para a mãe de um paciente pediátrico e declarou: 'O infante apresenta quadro prodrômico de laringotraqueobronquite aguda com estridor inspiratório estático, indicando necessidade de corticoterapia endovenosa'. A mãe, desesperada, perguntou em prantos se o filho corria risco de morte.",
      source: "Manual de Comunicação Empática em Saúde Coletiva, 2024."
    },
    prompt: "O problema comunicativo retratado na cena decorre do uso inadequado de:",
    options: [
      { id: "a", text: "Variação diacrônica ultrapassada que caiu em desuso desde o século XIX.", isCorrect: false, distractorRationale: "Os termos utilizados pelo médico são atuais e técnicos da medicina moderna." },
      { id: "b", text: "Jargão técnico-científico corporativo diante de uma interlocutora leiga em situação de vulnerabilidade emocional.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Gírias juvenis das periferias urbanas que desrespeitam o código de ética profissional.", isCorrect: false, distractorRationale: "O médico não usou gírias, mas vocabulário médico formal excessivamente hermético." },
      { id: "d", text: "Expressões em língua estrangeira desprovidas de correspondência em território brasileiro.", isCorrect: false, distractorRationale: "Todos os termos foram pronunciados em língua portuguesa, embora de vocabulário altamente especializado." },
      { id: "e", text: "Dialeto regional campestre que impede o entendimento das instituições da capital.", isCorrect: false, distractorRationale: "Trata-se de jargão profissional hospitalar, não de dialeto regional campestre." }
    ],
    detailedExplanation: {
      summary: "Jargões profissionais são funcionais entre especialistas da mesma área, mas constituem barreira comunicativa grave diante do público geral.",
      stepByStep: [
        "Passo 1: Identificar os interlocutores: médico (especialista) e mãe de paciente (leiga).",
        "Passo 2: Notar que o médico empregou terminologia estritamente técnica ('prodrômico', 'laringotraqueobronquite', 'estridor inspiratório') em vez de explicar com clareza acessível.",
        "Passo 3: A falha comunicativa decorre da incapacidade de modular o jargão técnico para um registro compreensível ao paciente."
      ],
      coreConcept: "A adequação comunicativa na área da saúde exige a tradução de termos técnicos complexos para uma linguagem acessível e empática.",
      trapWarning: "Usar jargões técnicos com leigos não denota erudição positiva, mas incompetência pedagógica e comunicativa."
    },
    tags: ["jargao", "comunicacao-medica", "adequacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-012",
    area: "linguagens",
    competence: 8,
    skill: 29,
    topic: "Variação Linguística",
    subtopic: "A Influência das Línguas Indígenas e Africanas no Léxico Brasileiro",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Vocábulos como 'moleque', 'quilombo', 'cachaça', 'fubá', 'caçula' e 'dengo' originaram-se de línguas da família banto (como quimbundo e quicongo). Paralelamente, a toponímia e a flora brasileira estão repletas de termos de matriz tupi-guarani ('Ipanema', 'Tijuca', 'abacaxi', 'mandioquinha', 'pipoca'). Essa confluência moldou a identidade acústica e conceitual singular do português brasileiro.",
      source: "CASTRO, Yeda Pessoa de. A presença africana no português brasileiro. Brasília: MEC/Unesco, 2005."
    },
    prompt: "A marcante presença de termos de matriz banto e tupi-guarani no vocabulário cotidiano do Brasil comprova que:",
    options: [
      { id: "a", text: "O português falado no Brasil é uma cópia intocada e passiva do idioma lusitano quinhentista.", isCorrect: false, distractorRationale: "O texto demonstra o exato oposto: uma língua profundamente transformada e enriquecida por aportes indígenas e africanos." },
      { id: "b", text: "A formação lexical nacional reflete a história de contato, miscigenação e resistência cultural de diferentes povos.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Essas palavras foram introduzidas exclusivamente pela internet após as reformas ortográficas contemporâneas.", isCorrect: false, distractorRationale: "Esses termos foram incorporados ao longo de séculos de convivência colonial e imperial." },
      { id: "d", text: "A gramática tradicional considera os termos de origem africana desvios que devem ser retirados do dicionário.", isCorrect: false, distractorRationale: "Esses vocábulos estão dicionarizados e plenamente legitimados na língua portuguesa oficial." },
      { id: "e", text: "As línguas indígenas impediram a expansão do processo de alfabetização formal no país.", isCorrect: false, distractorRationale: "O contato com línguas indígenas enriqueceu o patrimônio semântico nacional sem impedir a alfabetização." }
    ],
    detailedExplanation: {
      summary: "O português brasileiro é produto do contato intenso entre a língua do colonizador e as centenas de línguas indígenas e africanas faladas no território.",
      stepByStep: [
        "Passo 1: Observar a lista de vocábulos de uso diário ('moleque', 'dengo', 'pipoca', 'abacaxi').",
        "Passo 2: Reconhecer que esses termos expressam afetos, relações familiares e elementos da natureza brasileira.",
        "Passo 3: A alternativa B destaca o valor histórico do contato cultural e étnico na constituição da identidade linguística do Brasil."
      ],
      coreConcept: "O contato linguístico entre o português e as matrizes africana e ameríndia foi fundamental para a diferenciação do português brasileiro em relação ao europeu.",
      trapWarning: "Palavras como 'dengo' e 'caçula' não são gírias marginais; são heranças ancestrais africanas fundamentais da nossa identidade."
    },
    tags: ["matriz-africana", "tupi-guarani", "lexico-brasileiro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-013",
    area: "linguagens",
    competence: 8,
    skill: 30,
    topic: "Variação Linguística",
    subtopic: "A Poesia Marginal e o Rompimento de Padrões Formais",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "'dois e dois: quatro / quatro e quatro: oito / oito e oito: dezesseis / como se a vida / pudesse ser / calculada com giz / na calçada / ou com uma faca / no coração'",
      source: "GULLAR, Ferreira. Toda Poesia. Rio de Janeiro: José Olympio, 1980."
    },
    prompt: "Ao justapor a matemática exata da aritmética à vulnerabilidade da vida humana cotidiana, Ferreira Gullar emprega uma linguagem poética que:",
    options: [
      { id: "a", text: "Adota uma sintaxe hermética e preciosista com rimas raras e métrica parnasiana rigorosa.", isCorrect: false, distractorRationale: "O poema é construído com versos livres, curtos e vocabulário direto do cotidiano." },
      { id: "b", text: "Explora a simplicidade vocabular e o verso livre para contestar a frieza de modelos rígidos e exprimir o drama existencial.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Defende a primazia da razão instrumental sobre todas as emoções e impulsos afetivos humanos.", isCorrect: false, distractorRationale: "O poema questiona a pretensão de calcular a vida como se ela fosse mera conta aritmética de giz." },
      { id: "d", text: "Comete incorreções aritméticas grosseiras com o propósito deliberado de ludibriar o leitor.", isCorrect: false, distractorRationale: "As contas 'dois e dois: quatro' estão matematicamente corretas; a crítica incide sobre reduzi-la à vida." },
      { id: "e", text: "Demonstra o desinteresse do autor pelos problemas sociais e políticos do seu momento histórico.", isCorrect: false, distractorRationale: "Ferreira Gullar foi um dos poetas mais engajados e combativos do modernismo brasileiro." }
    ],
    detailedExplanation: {
      summary: "Gullar utiliza a despojamento da linguagem coloquial e direta para criar impacto lírico e reflexão existencial.",
      stepByStep: [
        "Passo 1: Ler o poema e notar a economia das palavras e a concisão das imagens ('giz na calçada', 'faca no coração').",
        "Passo 2: O autor confronta a lógica matemática calculista com a imprevisibilidade dolorosa e bela da existência.",
        "Passo 3: A alternativa B capta com precisão o contraste estético e a denúncia da frieza dos cálculos frente à vida humana."
      ],
      coreConcept: "A poesia contemporânea utiliza a linguagem concisa e direta para desestabilizar certezas tecnocráticas.",
      trapWarning: "Linguagem simples e direta na poesia não significa superficialidade temática."
    },
    tags: ["ferreira-gullar", "poesia-social", "linguagem-poetica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-014",
    area: "linguagens",
    competence: 8,
    skill: 28,
    topic: "Variação Linguística",
    subtopic: "Variação Fonética: O Rotacismo Popular",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A troca do som /l/ pelo som /r/ em encontros consonantais (como em 'chiclete' pronunciado 'chicrete' ou 'planta' como 'pranta') é chamada de rotacismo. Esse fenômeno fonético não é uma 'invenção ignorante moderna', mas uma tendência histórica presente na formação do próprio português: a palavra latina 'blandu' gerou 'brando', e 'clavu' originou 'cravo'.",
      source: "ILARI, Rodolfo; BASSO, Renato. O português da gente: a língua que estudamos, a língua que falamos. São Paulo: Contexto, 2006."
    },
    prompt: "A recuperação filológica da origem histórica do rotacismo no português serve para desconstruir qual mito do preconceito linguístico?",
    options: [
      { id: "a", text: "O mito de que a língua portuguesa é incapaz de absorver estrangeirismos contemporâneos.", isCorrect: false, distractorRationale: "O texto não trata de estrangeirismos, mas de processos fonéticos internos de variação." },
      { id: "b", text: "O mito de que formas estigmatizadas na fala popular decorrem de preguiça articulatória ou corrupção irracional da língua.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "O mito de que a escrita oficial é anterior e mais importante do que a linguagem falada primitiva.", isCorrect: false, distractorRationale: "O foco do texto é a regularidade dos processos de transição fonética na fala." },
      { id: "d", text: "O mito de que as regras gramaticais clássicas se originaram a partir da fala dos povos ameríndios.", isCorrect: false, distractorRationale: "A gramática tradicional baseou-se em tradições greco-latinas e portuguesas, não indígenas." },
      { id: "e", text: "O mito de que o latim clássico era uma língua desprovida de regras fonológicas consistentes.", isCorrect: false, distractorRationale: "O latim possuía fonologia e métrica extremamente rigorosas e bem documentadas." }
    ],
    detailedExplanation: {
      summary: "O rotacismo popular nada mais é do que a continuidade de um mecanismo fonético produtivo que transformou o latim em português.",
      stepByStep: [
        "Passo 1: Reconhecer os exemplos históricos fornecidos: 'blandu' -> 'brando' e 'clavu' -> 'cravo'. Ninguém hoje diz que falar 'cravo' é erro.",
        "Passo 2: O mesmo processo fonético que gerou as palavras padrão do português de hoje opera na fala popular ('pranta', 'chicrete').",
        "Passo 3: A sociolinguística demonstra que esses fenômenos seguem leis fonológicas naturais, desarmando o preconceito de que seriam frutos de preguiça ou ignorância."
      ],
      coreConcept: "Processos fonéticos estigmatizados na fala popular muitas vezes repetem as mesmas dinâmicas históricas que consolidaram o léxico culto atual.",
      trapWarning: "Entender a lógica científica do rotacismo não anula a exigência da ortografia padrão nas redações formais."
    },
    tags: ["rotacismo", "fonetica", "preconceito-linguistico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-015",
    area: "linguagens",
    competence: 8,
    skill: 29,
    topic: "Variação Linguística",
    subtopic: "A Função Poética no Rap Nacional",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "'Eu sou o espelho da favela que não se calou / O diploma que o sistema nunca me entregou / Minha rima é a bala que não fere, mas acorda a mente / Do irmão que tá dormindo no ponto da frente.'",
      source: "Letra contemporânea de Rap da periferia de São Paulo, 2024."
    },
    prompt: "No fragmento lírico, o uso de metáforas combativas e da variante coloquial ('tá dormindo no ponto') cumpre a função de:",
    options: [
      { id: "a", text: "Impedir que ouvintes de fora da comunidade periférica consigam decodificar o sentido dos versos.", isCorrect: false, distractorRationale: "As metáforas ('espelho da favela', 'rima é a bala') são perfeitamente claras e universais na denúncia poética." },
      { id: "b", text: "Articular a oralidade periférica à conscientização sociopolítica, transformando a música em instrumento de emancipação e denúncia.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Estimular o confronto armado contra as instituições democráticas do Estado de Direito.", isCorrect: false, distractorRationale: "O texto ressalta que 'a rima é a bala que não fere, mas acorda a mente', descartando violência física." },
      { id: "d", text: "Demonstrar a ineficácia das expressões artísticas de rua na formação de novos leitores.", isCorrect: false, distractorRationale: "O rap é reconhecido como potente vetor de letramento crítico e formação cívica de jovens." },
      { id: "e", text: "Padronizar a língua portuguesa segundo as regras estritas da corte renascentista portuguesa.", isCorrect: false, distractorRationale: "A estética do rap desafia cânones aristocráticos e valoriza a voz das periferias brasileiras." }
    ],
    detailedExplanation: {
      summary: "O rap nacional ressignifica a linguagem cotidiana da periferia para construir contrapoder, arte crítica e conscientização política.",
      stepByStep: [
        "Passo 1: Identificar a antítese poética 'bala que não fere, mas acorda a mente'.",
        "Passo 2: Notar que expressões como 'dormir no ponto' combinam-se com reivindicações de dignidade e educação ('diploma').",
        "Passo 3: A alternativa B expressa com fidelidade a função social da cultura Hip-Hop e da lírica marginal urbana."
      ],
      coreConcept: "A lírica periférica utiliza recursos expressivos populares como veículos legítimos de conscientização cidadã e intervenção simbólica.",
      trapWarning: "O ENEM frequentemente valoriza manifestações culturais periféricas como legítimas produções de arte contemporânea."
    },
    tags: ["rap-nacional", "cultura-periferica", "funcao-social"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-016",
    area: "linguagens",
    competence: 8,
    skill: 30,
    topic: "Variação Linguística",
    subtopic: "A Variação Sintática: Pronomes Oblíquos no Brasil",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Enquanto a gramática normativa prescritiva condena o início de frases com pronomes oblíquos átonos ('Me dá um café'), Oswald de Andrade ironizou essa regra em seu célebre poema 'Pronominais': 'Dê-me um cigarro / Diz a gramática / Do professor e do aluno / E do mulato sabido / Mas o bom negro e o bom branco / Da nação brasileira / Dizem todos os dias / Deixa disso camarada / Me dá um cigarro.'",
      source: "ANDRADE, Oswald de. Pau-Brasil. Paris: Au Sans Pareil, 1925."
    },
    prompt: "Ao celebrar o uso de 'Me dá um cigarro' em detrimento do padrão lusitano 'Dê-me um cigarro', Oswald de Andrade propõe:",
    options: [
      { id: "a", text: "O fechamento de todas as faculdades de Letras do território nacional.", isCorrect: false, distractorRationale: "Trata-se de uma provocação estética sobre a identidade da língua, não de proposta de fechar universidades." },
      { id: "b", text: "A legitimação da sintaxe brasileira natural falada pelo povo como esteio de uma literatura autêntica e emancipada.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "O incentivo compulsório ao tabagismo entre as camadas jovens da sociedade moderna.", isCorrect: false, distractorRationale: "O cigarro no poema é mero pretexto temático para debater a colocação pronominal na língua." },
      { id: "d", text: "A adoção das regras de colocação pronominal exclusivas da língua francesa colonial.", isCorrect: false, distractorRationale: "O autor celebra a fala autêntica brasileira, recusando qualquer servilismo a modelos estrangeiros." },
      { id: "e", text: "A erradicação definitiva da poesia como modalidade artística no modernismo.", isCorrect: false, distractorRationale: "O poema é considerado um marco fundacional da nova poética modernista brasileira." }
    ],
    detailedExplanation: {
      summary: "Oswald defende o português brasileiro real (que prefere próclise generalizada) contra a imposição de regras lusitanas artificiais.",
      stepByStep: [
        "Passo 1: Reconhecer a oposição traçada no poema: a gramática do professor ('Dê-me') versus a fala de todo o povo ('Me dá').",
        "Passo 2: O modernismo de 1922 lutou pela emancipação linguística do Brasil, reconhecendo que os brasileiros não falam como os portugueses.",
        "Passo 3: A alternativa B capta perfeitamente o projeto antropofágico e nacionalista de Oswald de Andrade."
      ],
      coreConcept: "O Modernismo brasileiro consagrou a espontaneidade da sintaxe falada nacional como matéria-prima da criação estética inovadora.",
      trapWarning: "Na fala brasileira culta e popular, a próclise no início da frase é a regra natural e espontânea há mais de um século."
    },
    tags: ["oswald-de-andrade", "pronominais", "modernismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-017",
    area: "linguagens",
    competence: 8,
    skill: 28,
    topic: "Variação Linguística",
    subtopic: "Língua Brasileira de Sinais (Libras) como Sistema Linguístico Autônomo",
    difficulty: 2,
    estimatedTimeSeconds: 115,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Reconhecida oficialmente pela Lei Federal nº 10.436/2002, a Língua Brasileira de Sinais (Libras) é um sistema linguístico de natureza visual-espacial dotado de gramática própria, níveis morfológicos, fonológicos (parâmetros gestuais: configuração de mão, ponto de articulação e movimento) e sintáticos autônomos. Libras não é mímica nem uma tradução palavra por palavra do português.",
      source: "QUADROS, Ronice Müller de; KARNOPP, Lodenir Becker. Língua de Sinais Brasileira: estudos linguísticos. Porto Alegre: Artmed, 2004."
    },
    prompt: "Com base nas pesquisas científicas sobre a Libras, é correto afirmar que esse idioma:",
    options: [
      { id: "a", text: "Constitui uma pantomima simplória destinada apenas a expressar necessidades biológicas básicas.", isCorrect: false, distractorRationale: "Libras possui complexidade sintática plena capaz de expressar conceitos filosóficos, científicos e poéticos abstratos." },
      { id: "b", text: "Possui estatuto linguístico pleno e regras estruturadas independentes da gramática da língua portuguesa falada.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "É uma língua universal e idêntica em todos os países do mundo, sem variações regionais.", isCorrect: false, distractorRationale: "Línguas de sinais não são universais; cada comunidade surda desenvolveu a sua própria (ASL nos EUA, LSF na França, etc.)." },
      { id: "d", text: "Subordina-se estritamente à soletração do alfabeto manual para formular pensamentos intelectuais.", isCorrect: false, distractorRationale: "O alfabeto datilológico é usado apenas para nomes próprios ou vocábulos sem sinal convencionado." },
      { id: "e", text: "Inviabiliza a aprendizagem da escrita formal do português pelos estudantes surdos.", isCorrect: false, distractorRationale: "Pelo contrário: o bilinguismo precoce favorece a aprendizagem do português como segunda língua na modalidade escrita." }
    ],
    detailedExplanation: {
      summary: "Libras é uma língua viva completa com gramática própria, parâmetros espaciais e riqueza semântica inquestionável.",
      stepByStep: [
        "Passo 1: Reler as características listadas: fonologia de sinais, sintaxe espacial, reconhecimento legal por lei federal.",
        "Passo 2: Derrubar mitos comuns: Libras não é mímica, não é universal (cada país tem a sua língua de sinais) e não é código subsidiário do português.",
        "Passo 3: A alternativa B consagra o estatuto de língua legítima e autônoma da comunidade surda brasileira."
      ],
      coreConcept: "A Libras é uma língua natural de modalidade espaço-visual dotada de todos os níveis de complexidade das línguas orais.",
      trapWarning: "Libras não é internacional! Ela possui dialetos e expressões regionais dentro do próprio território brasileiro."
    },
    tags: ["libras", "acessibilidade", "diversidade-linguistica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-018",
    area: "linguagens",
    competence: 8,
    skill: 29,
    topic: "Variação Linguística",
    subtopic: "A Hipótese do 'Certo e Errado' vs. 'Adequado e Inadequado'",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A metáfora do guarda-roupa ilustra com precisão o princípio da adequação: ninguém vai à praia vestindo fraque e cartola, nem comparece a uma cerimônia de posse do Supremo Tribunal Federal de bermuda e chinelos. Ambas as roupas são úteis e têm valor intrínseco, mas dependem do espaço social. Do mesmo modo, não se deve falar em linguagem 'certa' ou 'errada', mas em variantes 'adequadas' ou 'inadequadas' a cada situação comunicativa.",
      source: "BAGNO, Marcos. Nada na língua é por acaso: por uma pedagogia da variação linguística. São Paulo: Parábola, 2007."
    },
    prompt: "A analogia formulada por Marcos Bagno propõe uma mudança pedagógica que consiste em substituir:",
    options: [
      { id: "a", text: "O ensino da língua portuguesa pelo aprendizado obrigatório de corte e costura têxtil.", isCorrect: false, distractorRationale: "Trata-se de uma metáfora didática sobre linguagem, não de mudança na grade curricular de confecção de roupas." },
      { id: "b", text: "A abordagem punitiva do erro absoluto pela consciência sociolinguística da adequação contextual dos registros.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "O uso da fala espontânea em ambientes familiares pela reprodução engessada de documentos cartorários.", isCorrect: false, distractorRationale: "O autor valoriza a variedade informal espontânea em ambientes familiares e informais." },
      { id: "d", text: "A leitura de clássicos literários nacionais por manuais burocráticos de protocolo judiciário.", isCorrect: false, distractorRationale: "A pedagogia da variação linguística amplia o repertório de leitura e apreciação cultural." },
      { id: "e", text: "A liberdade de expressão nas mídias sociais por censura prévia governamental sobre publicações.", isCorrect: false, distractorRationale: "A sociolinguística não apoia censura política, mas sim o respeito à diversidade dos falantes." }
    ],
    detailedExplanation: {
      summary: "Em vez de julgar variantes populares como 'erros monstruosos', a pedagogia moderna ensina o estudante a dominar múltiplos registros e escolher o mais apropriado para cada momento.",
      stepByStep: [
        "Passo 1: Entender a metáfora do guarda-roupa: uma roupa não é moralmente má; ela apenas é inadequada se usada no lugar indevido.",
        "Passo 2: Na linguagem, falar de maneira descontraída na praia é adequado; em uma redação do ENEM, exige-se o padrão formal culto.",
        "Passo 3: A alternativa B expressa com clareza a superação do punitivismo em favor da adequação contextual sociolinguística."
      ],
      coreConcept: "A sociolinguística substitui o binômio moralizante 'certo versus errado' pelo binômio pragmático 'adequado versus inadequado ao contexto'.",
      trapWarning: "Defender a adequação linguística não significa deixar de ensinar a norma padrão; significa ensinar a norma padrão sem desrespeitar a cultura de origem do aluno."
    },
    tags: ["adequacao", "pedagogia-linguistica", "marcos-bagno"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-019",
    area: "linguagens",
    competence: 8,
    skill: 30,
    topic: "Variação Linguística",
    subtopic: "A Influência de Imigrantes no Dialeto Urbano Paulistano",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No romance 'Brás, Bexiga e Barra Funda' (1927), de Antônio de Alcântara Machado, a prosa moderna registra a fala híbrida ítalo-paulistana das famílias de imigrantes operários que transformaram a capital de São Paulo: '— Me dá uma cerveja, Nicola. — Ma hoje não tem, Gaetano! O patrão foi na fábrica e não deixou nada.'",
      source: "ALCÂNTARA MACHADO, Antônio de. Brás, Bexiga e Barra Funda. São Paulo: Imprensa Oficial, 2008."
    },
    prompt: "O diálogo reproduzido no romance exemplifica como a literatura moderna capturou:",
    options: [
      { id: "a", text: "A homogeneidade étnica e o isolamento cultural do interior do país no início do século XX.", isCorrect: false, distractorRationale: "O texto retrata o oposto: o ambiente cosmopolita e heterogêneo da capital com forte presença de imigrantes operários italianos." },
      { id: "b", text: "A fusão dialetal entre a língua portuguesa e a imigração italiana na constituição do espaço urbano operário.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A tentativa de restaurar o latim arcaico como língua diplomática das empresas fabris.", isCorrect: false, distractorRationale: "A fala coloquial dos operários não buscava restaurar o latim clássico erudito." },
      { id: "d", text: "A ausência total de comunicação entre os trabalhadores das indústrias da metrópole.", isCorrect: false, distractorRationale: "O diálogo entre Gaetano e Nicola é compreensível, ágil e expressivo." },
      { id: "e", text: "A rejeição das vanguardas paulistas em relação ao cotidiano dos bairros populares.", isCorrect: false, distractorRationale: "Alcântara Machado foi um dos principais expoentes modernistas dedicados a retratar a vida popular dos bairros operários." }
    ],
    detailedExplanation: {
      summary: "A imigração italiana imprimiu marcas definitivas na entonação, vocabulário e construções do dialeto paulistano retratado na literatura modernista.",
      stepByStep: [
        "Passo 1: Reconhecer os marcadores ítalo-brasileiros ('Ma hoje não tem', nomes Gaetano e Nicola, bairros Brás e Bexiga).",
        "Passo 2: Observar que a literatura da década de 1920 incorporou a oralidade cosmopolita da cidade que se industrializava.",
        "Passo 3: A alternativa B sintetiza perfeitamente o fenômeno do contato de línguas no ambiente urbano fabril."
      ],
      coreConcept: "Contatos de línguas decorrentes de fluxos migratórios deixam heranças fonéticas e lexicais duradouras nos dialetos regionais receptores.",
      trapWarning: "A literatura modernista não retratou apenas o sertão ou o passado colonial; também documentou a nova metrópole industrial operária."
    },
    tags: ["imigracao", "dialeto-paulistano", "literatura-moderna"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-020",
    area: "linguagens",
    competence: 8,
    skill: 28,
    topic: "Variação Linguística",
    subtopic: "A Variação na Concordância Verbal da Primeira Pessoa do Plural",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No português brasileiro contemporâneo, coexistem duas estratégias para a primeira pessoa do plural: a forma sintética tradicional ('Nós fomos ao cinema') e a forma analítica inovadora ('A gente foi ao cinema'). Enquanto a primeira exige verbo na primeira pessoa do plural, a segunda concorda morfologicamente na terceira pessoa do singular, embora ambas compartilhem exatamente o mesmo significado semântico coletivo.",
      source: "SCHERRE, Maria Marta Pereira. Doer, doer, dói: o preconceito linguístico e as formas nós e a gente. São Paulo: Parábola, 2005."
    },
    prompt: "A ampla difusão de 'A gente foi' em todas as camadas sociais e faixas etárias do Brasil demonstra que:",
    options: [
      { id: "a", text: "O português brasileiro perdeu a capacidade de diferenciar ações no passado e no futuro.", isCorrect: false, distractorRationale: "O tempo verbal 'foi' continua perfeitamente marcado como pretérito perfeito." },
      { id: "b", text: "O sistema pronominal brasileiro passa por uma reorganização funcional regular que simplifica as desinências verbais.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A expressão deve ser tratada como infração grave que anula contratos comerciais públicos.", isCorrect: false, distractorRationale: "O uso de 'a gente' é legítimo e amplamente aceito na comunicação oral, mesmo em contextos corporativos informais." },
      { id: "d", text: "O pronome 'nós' foi proibido por determinação do Ministério da Educação.", isCorrect: false, distractorRationale: "'Nós' continua em pleno uso, sobretudo em textos escritos formais." },
      { id: "e", text: "As duas estruturas transmitem sentidos opostos, uma indicando exclusão e a outra união.", isCorrect: false, distractorRationale: "Ambas as expressões cumprem o mesmo papel semântico de referência coletiva à primeira pessoa." }
    ],
    detailedExplanation: {
      summary: "A substituição de pronomes com flexões complexas por formas que usam a terceira pessoa singular é um processo de simplificação paradigmática comprovado linguisticamente.",
      stepByStep: [
        "Passo 1: Notar que 'nós cantamos / nós fizemos' demanda uma desinência exclusiva (-mos).",
        "Passo 2: Ao usar 'a gente canta / a gente fez', o sistema aproveita a desinência já existente da terceira pessoa singular (ele/ela), tornando o sistema mais econômico.",
        "Passo 3: A alternativa B explica com rigor científico a reorganização funcional do sistema pronominal e verbal brasileiro."
      ],
      coreConcept: "A incorporação de 'a gente' no lugar de 'nós' reflete um ciclo natural de mudança linguística gramaticalizada no português do Brasil.",
      trapWarning: "Cuidado: na redação formal do ENEM prefira 'nós' com concordância padrão ou orações impessoais ('percebe-se'), evitando a coloquialidade de 'a gente'."
    },
    tags: ["concordancia-verbal", "mudanca-linguistica", "enem-h28"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-021",
    area: "linguagens",
    competence: 8,
    skill: 29,
    topic: "Variação Linguística",
    subtopic: "A Estigmatização do Sotaque Nordestino na Mídia Tradicional",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante décadas, as telenovelas de grande audiência no Brasil reservaram os sotaques regionais do Nordeste exclusivamente a personagens cômicos, ingênuos ou subalternos, enquanto os papéis de médicos, advogados, cientistas e heróis centrais eram interpretados invariavelmente com o sotaque neutro carioca ou paulistano higienizado.",
      source: "Observatório da Mídia e Diversidade Cultural, Relatório 2023."
    },
    prompt: "Essa padronização das representações na teledramaturgia revela um mecanismo de:",
    options: [
      { id: "a", text: "Valorização equânime de todas as variedades linguísticas em horário nobre.", isCorrect: false, distractorRationale: "O texto demonstra justamente a hierarquização e exclusão desigual dos falares nordestinos dos postos de prestígio." },
      { id: "b", text: "Hierarquização simbólica que associa prestígio social aos dialetos do Sudeste e estigmatiza identidades regionais periféricas.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Preservação neutra da pureza fonética original da família de línguas indo-europeias.", isCorrect: false, distractorRationale: "Sotaques sudestinos modernos não têm relação com pretensa 'pureza' do indo-europeu ancestral." },
      { id: "d", text: "Garantia técnica de que aparelhos de televisão só transmitem frequências sonoras da capital fluminense.", isCorrect: false, distractorRationale: "Aparelhos de som e TV transmitem qualquer frequência acústica independentemente do sotaque." },
      { id: "e", text: "Eliminação total de estereótipos regionais nos meios de comunicação de massa.", isCorrect: false, distractorRationale: "O trecho aponta a perpetuação e cristalização de estereótipos, não sua eliminação." }
    ],
    detailedExplanation: {
      summary: "A televisão e os meios de massa exercem poder simbólico normatizador ao associar saberes e posições de mando a determinados sotaques regionais.",
      stepByStep: [
        "Passo 1: Reconhecer a disparidade de papéis: cargos intelectuais e de liderança retratados com sotaques do Sudeste; papéis cômicos ou subalternos atribuídos ao Nordeste.",
        "Passo 2: Essa distribuição não é casual: reproduz a hegemonia econômica e cultural do eixo Centro-Sul sobre as demais regiões da federação.",
        "Passo 3: A alternativa B conceitua com precisão esse processo de violência e dominação simbólica por meio da linguagem."
      ],
      coreConcept: "A legitimação de certos falares como 'neutros' e o confinamento de outros ao riso caricatural é uma manifestação clássica do preconceito linguístico e regional.",
      trapWarning: "Nenhum falante fala 'sem sotaque'; todo ser humano possui uma realização fonética situada geograficamente."
    },
    tags: ["preconceito-regional", "midia", "poder-simbolico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-022",
    area: "linguagens",
    competence: 8,
    skill: 30,
    topic: "Variação Linguística",
    subtopic: "O Conto Modernista e a Fala Cabocla",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "'— Sinhô juiz, a terra é nossa por deferimento dos antepassado. Foi o meu avô que botou cerca de arame e limpou o capim-gordura. Agora vem o homem da cidade com papel carimbado dizendo que nóis num vale nada e tem que desocupá.'",
      source: "Conto de temática agrária do Modernismo de 1930."
    },
    prompt: "No depoimento do posseiro perante o magistrado, o recurso à linguagem caipira ('deferimento dos antepassado', 'nóis num vale nada') produz o efeito estético e político de:",
    options: [
      { id: "a", text: "Desacreditar o sofrimento do camponês ao comprovar sua desonestidade intrínseca.", isCorrect: false, distractorRationale: "O texto valoriza a dor e a legitimidade histórica da família de trabalhadores rurais." },
      { id: "b", text: "Conferir verossimilhança à narrativa e expor a assimetria entre o direito burocrático letrado e a posse comunitária da terra.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Demonstrar a perfeição técnica dos cartórios imobiliários durante a Primeira República.", isCorrect: false, distractorRationale: "O papel carimbado do homem da cidade é retratado criticamente como instrumento de usurpação de terras." },
      { id: "d", text: "Promover o humor pastelão em detrimento da gravidade dos conflitos agrários nacionais.", isCorrect: false, distractorRationale: "A cena tem tom dramático e denúncia social contundente, sem qualquer intenção cômica de pastelão." },
      { id: "e", text: "Confirmar que a posse da terra deve ser concedida unicamente a quem domina o vocabulário latino.", isCorrect: false, distractorRationale: "O conto questiona a exclusão dos camponeses pela violência do formalismo jurídico excludente." }
    ],
    detailedExplanation: {
      summary: "A literatura regionalista de 30 utiliza a oralidade popular autêntica para conferir voz aos despossuídos e desmascarar a violência das leis que protegem apenas as elites.",
      stepByStep: [
        "Passo 1: Notar o contraste: de um lado, o trabalho real de gerações na terra; do outro, o 'papel carimbado' e as palavras difíceis do tribunal.",
        "Passo 2: A fala do posseiro é carregada de dignidade e razão humana, contrastando com o frio formalismo cartorial.",
        "Passo 3: A alternativa B sintetiza com precisão a busca de verossimilhança artística e o confronto ético entre justiça real e formalismo legal."
      ],
      coreConcept: "A incorporação da fala regional na literatura engajada confere densidade dramática e autenticidade testemunhal aos sujeitos históricos oprimidos.",
      trapWarning: "Verossimilhança é o efeito de verdade alcançado na ficção pelo uso coerente dos recursos expressivos."
    },
    tags: ["conto-social", "verossimilhanca", "conflitos-no-campo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-023",
    area: "linguagens",
    competence: 8,
    skill: 28,
    topic: "Variação Linguística",
    subtopic: "A Monotongação e as Tendências Fonológicas do Português",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A redução de ditongos a uma vogal simples (monotongação) ocorre habitualmente na fala de brasileiros de todas as classes sociais em palavras como 'peixe' (pronunciado 'pexe'), 'caixa' ('caxa') e 'ouro' ('oro'). Em algumas palavras, esse processo fonológico já foi oficializado pela ortografia padrão há séculos, como ocorreu na passagem do latim 'aurum' para o português moderno 'ouro' e na evolução da palavra 'cousa' para 'coisa'.",
      source: "HOUAISS, Antônio. Dicionário Histórico da Língua Portuguesa. Rio de Janeiro: Objetiva, 2001."
    },
    prompt: "O fenômeno da monotongação ilustra que a variação fonética:",
    options: [
      { id: "a", text: "Trata-se de um sintoma patológico que afeta unicamente indivíduos sem instrução escolar.", isCorrect: false, distractorRationale: "O texto demonstra que a monotongação ocorre em falantes de todas as classes sociais e escolaridades na oralidade espontânea." },
      { id: "b", text: "Constitui uma tendência estrutural e contínua de economia articulatória que molda o idioma ao longo da sua história.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Resulta de contaminações estrangeiras trazidas por transmissões de satélite no século XXI.", isCorrect: false, distractorRationale: "O fenômeno vem ocorrendo há séculos desde a transição do latim vulgar para o romance peninsular." },
      { id: "d", text: "Impede que o leitor moderno consiga identificar o significado exato de substantivos cotidianos.", isCorrect: false, distractorRationale: "A pronúncia 'pexe' é perfeitamente compreendida como 'peixe' sem qualquer ruído de comunicação." },
      { id: "e", text: "Deve ser penalizada com anulação sumária de provas de vestibular em todo o país.", isCorrect: false, distractorRationale: "A variação fonética diz respeito à fala; a avaliação em vestibulares afere a escrita ortográfica em redações." }
    ],
    detailedExplanation: {
      summary: "A lei do menor esforço articulatório (economia fonológica) é um motor universal de simplificação e transformação das línguas vivas.",
      stepByStep: [
        "Passo 1: Reconhecer a definição de monotongação: transformação de ditongo em monotongo (vogal única).",
        "Passo 2: Notar que dizer 'pexe' ou 'oro' na fala espontânea rápida é natural e compartilhado por professores, médicos e operários.",
        "Passo 3: A alternativa B capta a essência da linguística histórica: economia articulatória moldando o idioma através dos tempos."
      ],
      coreConcept: "A economia articulatória fonética é um fenômeno universal nas línguas naturais e não um defeito da fala contemporânea.",
      trapWarning: "Uma coisa é falar 'pexe' no almoço de domingo; outra é escrever 'peixe' na redação do ENEM. Respeite as diferenças entre fala e código ortográfico."
    },
    tags: ["fonologia", "monotongacao", "linguistica-historica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-024",
    area: "linguagens",
    competence: 8,
    skill: 29,
    topic: "Variação Linguística",
    subtopic: "A Inclusão Sociolinguística e Cidadania",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No atendimento ao público em repartições de assistência social e previdência, cartazes explicativos começaram a ser redigidos em 'Linguagem Simples' (Plain Language) — com frases curtas, ordem direta, eliminação de termos rebuscados do direito e diagramação limpa —, visando assegurar que cidadãos de baixa escolaridade consigam exercer seus direitos constitucionais de forma autônoma.",
      source: "Diretrizes Nacionais para a Rede de Inovação em Linguagem Simples no Setor Público, 2024."
    },
    prompt: "A iniciativa de adotar a 'Linguagem Simples' nos serviços públicos do Estado orienta-se pelo princípio de:",
    options: [
      { id: "a", text: "Diminuir a qualidade do atendimento ao rebaixar o nível intelectual dos funcionários concursados.", isCorrect: false, distractorRationale: "O projeto visa à eficiência e garantia de direitos para o cidadão, e não ao rebaixamento funcional." },
      { id: "b", text: "Democratizar o acesso a direitos e informações essenciais por meio da superação de barreiras de letramento burocrático.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Impedir que leis aprovadas pelo Congresso Nacional continuem vigorando no território brasileiro.", isCorrect: false, distractorRationale: "A iniciativa não revoga leis; ela apenas torna a comunicação de serviços públicos acessível à população." },
      { id: "d", text: "Obrigar os cidadãos a realizar cursos compulsórios de oratória jurídica antes de requerer benefícios.", isCorrect: false, distractorRationale: "O objetivo é o oposto: dispensar intermediários e intermediárias tornando o atendimento intuitivo." },
      { id: "e", text: "Eliminar a língua portuguesa em benefício da adoção exclusiva de ícones digitais e pictogramas.", isCorrect: false, distractorRationale: "A Língua Portuguesa continua sendo utilizada, porém em sua modalidade clara, direta e objetiva." }
    ],
    detailedExplanation: {
      summary: "A clareza na comunicação pública é um dever democrático do Estado republicano para garantir a cidadania plena.",
      stepByStep: [
        "Passo 1: Reconhecer a barreira enfrentada por cidadãos comuns diante do jargão jurídico e burocrático estatal.",
        "Passo 2: O movimento da Linguagem Simples transforma textos impenetráveis em comunicados transparentes e acessíveis.",
        "Passo 3: A alternativa B expressa perfeitamente a relação direta entre acessibilidade linguística e efetivação de direitos fundamentais."
      ],
      coreConcept: "A linguagem simples no setor público é uma ferramenta de justiça social e cidadania que combate a exclusão promovida pelo tecnicismo burocrático.",
      trapWarning: "Linguagem simples não é linguagem infantilizada; é comunicação eficiente, direta e respeitosa com o cidadão."
    },
    tags: ["linguagem-simples", "cidadania", "politicas-publicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-VAR-025",
    area: "linguagens",
    competence: 8,
    skill: 30,
    topic: "Variação Linguística",
    subtopic: "A Diversidade Linguística Indígena no Brasil Contemporâneo",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Embora o senso comum imagine o Brasil como um país puramente monolíngue, coexistem no território nacional mais de 270 línguas indígenas vivas pertencentes a dezenas de troncos linguísticos distintos (como Tupi, Macro-Jê, Aruak, Yanomami e Karib), além de línguas de imigração e línguas de sinais. Municípios como São Gabriel da Cachoeira (AM) reconheceram oficialmente, além do português, línguas indígenas como o Nheengatu, o Tukano e o Baniwa como cooficiais.",
      source: "Censo do Instituto Brasileiro de Geografia e Estatística (IBGE) e Museu da Língua Portuguesa, 2023."
    },
    prompt: "O reconhecimento de línguas indígenas como cooficiais em municípios brasileiros representa um marco histórico porque:",
    options: [
      { id: "a", text: "Decreta o fim imediato do ensino da língua portuguesa nas escolas de todo o estado do Amazonas.", isCorrect: false, distractorRationale: "O português continua sendo língua oficial de ensino juntamente com as línguas cooficiais em regime bilíngue." },
      { id: "b", text: "Rompe com o mito homogeneizador do monolinguismo nacional e valoriza o patrimônio sociolinguístico e a soberania dos povos originários.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Subordina a administração pública local às diretrizes de governos e embaixadas de nações europeias.", isCorrect: false, distractorRationale: "A medida é soberana e decorre de leis municipais e direitos constitucionais brasileiros." },
      { id: "d", text: "Impede o acesso das populações indígenas às tecnologias digitais e à rede mundial de computadores.", isCorrect: false, distractorRationale: "A cooficialização estimula a criação de aplicativos, dicionários e conteúdos digitais nas línguas originárias." },
      { id: "e", text: "Constitui uma violação da soberania nacional com penalidades administrativas sumárias.", isCorrect: false, distractorRationale: "A Constituição de 1988 (art. 231) garante expressamente aos povos indígenas o uso de suas línguas e processos próprios de aprendizagem." }
    ],
    detailedExplanation: {
      summary: "O Brasil é um país multilíngue; a cooficialização de línguas indígenas celebra a diversidade e repara séculos de apagamento cultural forçado.",
      stepByStep: [
        "Passo 1: Observar o dado empírico: mais de 270 línguas indígenas vivas em território brasileiro.",
        "Passo 2: Reconhecer a relevância pioneira de São Gabriel da Cachoeira ao oficializar o Nheengatu, Tukano e Baniwa nos serviços públicos municipais.",
        "Passo 3: A alternativa B sintetiza com precisão a desconstrução do mito do monolinguismo e a valorização das matrizes sociolinguísticas originárias."
      ],
      coreConcept: "O plurilinguismo brasileiro é uma riqueza constitucional que exige políticas ativas de documentação, cooficialização e preservação das línguas originárias.",
      trapWarning: "O mito de que 'no Brasil só se fala português' ignora a rica existência de centenas de línguas originárias que resistem vivas no território."
    },
    tags: ["linguas-indigenas", "plurilinguismo", "patrimonio-cultural"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
