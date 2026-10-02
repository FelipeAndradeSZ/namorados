/**
 * BANCO DE QUESTÕES: História Geral: Da Antiguidade Clássica às Revoluções Contemporâneas
 * Área: Ciências Humanas e suas Tecnologias
 * Disciplina: História Geral
 * Total: 25 Questões originais alinhadas ao padrão ENEM
 * Validação: 100% Determinística (5 alternativas, justificativas completas, zero elementos de viagem)
 */

export const QUESTIONS_HISTORIA_GERAL = [
  {
    id: "HUM-HIS-001",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "História Geral",
    subtopic: "A Democracia Ateniense e os Limites da Cidadania",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nossa constituição política não copia as leis dos países vizinhos; antes, servimos de modelo a outros. Chama-se democracia porque a administração do Estado não pertence a um punhado de cidadãos, mas à maioria. No entanto, quando se trata de participar da vida pública, cada qual é preferido não em razão de sua classe social, mas por causa de seus méritos individuais.",
      source: "TUCÍDIDES. História da Guerra do Peloponeso. Oração Fúnebre de Péricles. Brasília: Editora UnB, 1987."
    },
    prompt: "Apesar do elogio entusiástico de Péricles à igualdade política na Atenas clássica do século V a.C., a democracia ateniense possuía como contradição estrutural o fato de:",
    options: [
      { id: "a", text: "Ser representativa, com mandatos parlamentares hereditários transmitidos por famílias imperiais.", isCorrect: false, distractorRationale: "A democracia ateniense era direta e baseada em sorteio/assembleia (Eclésia), e não parlamentar representativa hereditária." },
      { id: "b", text: "Restringir os direitos de cidadania a homens livres e adultos filhos de pais atenienses, excluindo categoricamente mulheres, estrangeiros (metecos) e a massa de pessoas escravizadas.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Exigir que todos os governantes pertencessem obrigatoriamente à casta dos sacerdotes do Oráculo de Delfos.", isCorrect: false, distractorRationale: "A política ateniense era secularizada e os cargos eram preenchidos por sorteio entre cidadãos ordinários, sem tutela sacerdotal." },
      { id: "d", text: "Proibir o debate retórico público e a assembleia popular na praça da Ágora.", isCorrect: false, distractorRationale: "O debate livre entre cidadãos na Ágora (isegoria) era justamente o coração da democracia ateniense." },
      { id: "e", text: "Conceder direito a voto preferencial exclusivamente às tribos nômades do norte da África.", isCorrect: false, distractorRationale: "A cidadania era estritamente local ateniense; estrangeiros estavam alijados das decisões políticas." }
    ],
    detailedExplanation: {
      summary: "A democracia ateniense direta era restrita e excludente: menos de 10% da população total da pólis usufruía dos direitos cívicos.",
      stepByStep: [
        "Passo 1: Reconhecer os pilares da democracia clássica: isonomia (igualdade perante a lei) e isegoria (igualdade de palavra na assembleia).",
        "Passo 2: Identificar os contingentes excluídos da condição de cidadão: mulheres (confinadas ao gineceu), metecos (estrangeiros residentes que pagavam tributos sem ter voto) e pessoas escravizadas (a base material da produção).",
        "Passo 3: A alternativa B aponta com precisão o caráter excludente e elitizado da cidadania antiga frente ao conceito moderno universal de cidadania."
      ],
      coreConcept: "A democracia ateniense combinava a participação direta radical dos cidadãos com a exclusão sistemática da imensa maioria da população.",
      trapWarning: "Atenas era uma democracia direta para seus cidadãos, mas uma sociedade escravocrata patriarcal em sua estrutura real."
    },
    tags: ["atenas", "democracia-antiga", "cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-002",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "História Geral",
    subtopic: "As Lutas Sociais na República Romana: Patrícios versus Plebeus",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os animais da Itália têm suas tocas, onde cada um deles se recolhe; mas os homens que combatem e morrem pela Itália só possuem o ar e a luz. Sem teto, sem domicílio, vagueiam com suas famílias; os generais mentem quando, nas batalhas, exortam os soldados a defender seus túmulos e seus altares, pois nenhum deles possui altar doméstico nem sepultura de antepassados.",
      source: "PLUTARCO. Vidas Paralelas: Tibério e Caio Graco. São Paulo: Cultrix, 1991."
    },
    prompt: "No discurso proferido pelo tribuno da plebe Tibério Graco no século II a.C., a denúncia da penúria dos soldados plebeus fundamentou qual proposta de reforma política em Roma?",
    options: [
      { id: "a", text: "A defesa de uma reforma agrária que limitasse a extensão dos latifúndios patrícios e distribuísse terras públicas aos cidadãos despossuídos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "A restauração imediata da Monarquia etrusca sob o comando de generais cartagineses.", isCorrect: false, distractorRationale: "Os irmãos Graco eram magistrados republicanos romanos e não defendiam monarquias estrangeiras." },
      { id: "c", text: "A proibição do alistamento militar de plebeus nas legiões em defesa de mercenários persas.", isCorrect: false, distractorRationale: "A crise justamente residia no fato de que os soldados plebeus voltavam empobrecidos da guerra e perdiam suas plantações familiares." },
      { id: "d", text: "A concessão imediata de títulos de nobreza imperial a todos os povos escravizados de Roma.", isCorrect: false, distractorRationale: "A proposta dos Graco focava em cidadãos plebeus livres empobrecidos, não na libertação de escravizados." },
      { id: "e", text: "A extinção definitiva do Senado romano e de todos os tribunais de justiça da capital.", isCorrect: false, distractorRationale: "Os tribunos propunham leis no âmbito das instituições republicanas existentes (Lex Sempronia Agraria)." }
    ],
    detailedExplanation: {
      summary: "A expansão militar romana gerou imensa concentração de terras nas mãos da nobreza patrícia e encheu a península de escravizados, arruinando os pequenos proprietários plebeus.",
      stepByStep: [
        "Passo 1: Compreender o drama dos plebeus: lutavam anos nas guerras de conquista e, ao regressar, encontravam seus sítios endividados e comprados por patrícios enriquecidos.",
        "Passo 2: Tibério Graco (e depois seu irmão Caio) propôs a Lei Agrária para limitar as terras públicas (ager publicus) ocupadas pelos ricos e assentá-las com famílias plebeias pobres.",
        "Passo 3: A alternativa A capta a essência da luta dos Graco, que foram assassinados pela reação violenta da aristocracia senatorial patrícia."
      ],
      coreConcept: "A expansão territorial romana agravou a concentração fundiária e intensificou a luta de classes entre a oligarquia patrícia e a plebe empobrecida.",
      trapWarning: "A luta por terra não é uma exclusividade do Brasil contemporâneo; ela foi o eixo central das crises políticas da República Romana antiga."
    },
    tags: ["roma-antiga", "irmaos-graco", "reforma-agraria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-003",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "História Geral",
    subtopic: "A Ordem Feudal: Servidão da Gleba versus Relações de Vassalagem",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na Idade Média Ocidental (séculos IX a XIII), a sociedade estamental dividia-se, segundo a teologia da época, em três ordens funcionais divinamente estabelecidas: os que oram (clerus / oratores), os que guerreiam (nobilitas / bellatores) e os que trabalham (laboratores). No interior da nobreza, vigoravam pactos solenes de suserania e vassalagem com obrigações de fidelidade e auxílio militar mútuo.",
      source: "LE GOFF, Jacques. A Civilização do Ocidente Medieval. Lisboa: Estampa, 1983."
    },
    prompt: "No sistema feudal medieval europeu, a distinção fundamental entre o liame de 'vassalagem' e a condição de 'servidão' residia no fato de que:",
    options: [
      { id: "a", text: "A vassalagem era um vínculo jurídico de reciprocidade e honra firmado entre membros nobres de mesmo estatuto aristocrático, enquanto a servidão era uma relação de exploração econômica e sujeição de camponeses presos à terra senhorial.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Os servos eram proprietários das fábricas urbanas, e os vassalos trabalhavam como operários fabris assalariados.", isCorrect: false, distractorRationale: "Na Idade Média feudal não havia indústrias modernas; a economia era eminentemente agrária senhorial." },
      { id: "c", text: "A vassalagem consistia na compra e venda de nobres em mercados abertos como mercadorias descartáveis.", isCorrect: false, distractorRationale: "Vassalagem envolvia honra, beijo ritual (osculum) e juramento de fidelidade religiosa entre nobres." },
      { id: "d", text: "Os servos podiam abandonar o feudo livremente para concorrer a eleições municipais de prefeitos.", isCorrect: false, distractorRationale: "Os servos estavam presos à terra (adscrição à gleba) e deviam tributos obrigatórios como corveia, talha e banalidades." },
      { id: "e", text: "O clero católico proibia qualquer aliança militar entre senhores feudais em território europeu.", isCorrect: false, distractorRationale: "A nobreza e o clero mantinham alianças de proteção militar mútua institucionalizadas." }
    ],
    detailedExplanation: {
      summary: "A vassalagem era uma relação horizontal de honra militar interna à nobreza; a servidão era uma relação vertical assimétrica de exploração do camponês pelo senhor do feudo.",
      stepByStep: [
        "Passo 1: Diferenciar os dois laços essenciais da Idade Média:",
        "Passo 2: Suserania e Vassalagem: envolve dois nobres livres. O suserano doa um feudo (benefício) e o vassalo jura conselho e apoio militar militar em guerras (auxilium et consilium).",
        "Passo 3: Servidão: envolve o senhor nobre e o camponês subordinado. O servo cultiva as terras senhoriais em troca de proteção física e entrega de excedentes produtivos (corveia, talha, banalidades).",
        "Passo 4: A alternativa A explica com rigor conceitual a distinção que o ENEM com frequência exige dos estudantes."
      ],
      coreConcept: "A sociedade feudal organizava-se em laços horizontais de fidelidade bélica nobre (vassalagem) e laços verticais de expropriação tributária camponesa (servidão).",
      trapWarning: "Cuidado: servos não eram escravos da antiguidade (não podiam ser vendidos individualmente no mercado), mas estavam juridicamente presos à terra que cultivavam."
    },
    tags: ["feudalismo", "idade-media", "vassalagem-servidao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-004",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História Geral",
    subtopic: "O Renascimento Cultural e a Secularização do Saber",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No célebre desenho 'O Homem Vitruviano' (c. 1490), Leonardo da Vinci inscreve a figura humana masculina nua perfeitamente proporcionada no centro de um círculo e de um quadrado, resgatando os cânones da arquitetura romana de Vitrúvio e traduzindo o ideal humanista de que o ser humano é a medida harmoniosa de todas as coisas.",
      source: "BURCKHARDT, Jacob. A Cultura do Renascimento na Itália. Brasília: Editora UnB, 1991."
    },
    prompt: "A obra de Leonardo da Vinci e o movimento renascentista dos séculos XV e XVI caracterizaram-se pela convergência entre:",
    options: [
      { id: "a", text: "Antropocentrismo reflexivo, rigor investigativo empírico e reapropriação dos valores estéticos da Antiguidade Clássica greco-romana.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Submissão dogmática cega ao princípio de autoridade da teologia medieval e censura a qualquer dissecação anatômica.", isCorrect: false, distractorRationale: "Os renascentistas desafiaram o princípio escolástico de autoridade e praticaram dissecações anatômicas pioneiras." },
      { id: "c", text: "Destruição iconoclasta de todas as estátuas e monumentos remanescentes do Império Romano.", isCorrect: false, distractorRationale: "Os renascentistas resgataram, estudaram e veneraram as obras da Antiguidade clássica." },
      { id: "d", text: "Rejeição radical do mecenato patrocinado por burgueses, papas e príncipes mercadores.", isCorrect: false, distractorRationale: "O mecenato (família Médici, papas Júlio II e Leão X) foi justamente o motor econômico da produção renascentista." },
      { id: "e", text: "Abolição de qualquer representação de temas religiosos na pintura e na escultura.", isCorrect: false, distractorRationale: "Obras-primas como a Capela Sistina de Michelangelo e a Última Ceia de Da Vinci tinham temática religiosa expressa sob olhar humanista." }
    ],
    detailedExplanation: {
      summary: "O Renascimento Cultural colocou a razão humana, a observação da natureza e o equilíbrio clássico no centro da produção científica e artística.",
      stepByStep: [
        "Passo 1: Reconhecer os pilares do Humanismo renascentista: Antropocentrismo (o homem como foco de reflexão ativa), Racionalismo, Empirismo e Classicismo (redescoberta de Roma e Grécia).",
        "Passo 2: Notar que os artistas eram também cientistas, engenheiros e anatomistas (como Leonardo da Vinci).",
        "Passo 3: A alternativa A sintetiza os traços basilares do movimento sem incorrer no erro de achar que os renascentistas eram ateus radicais."
      ],
      coreConcept: "O Humanismo renascentista não negava Deus, mas valorizava a capacidade racional do ser humano para compreender as leis da natureza e do cosmos.",
      trapWarning: "Renascentistas não rejeitavam a religião cristã; eles transformaram a forma de representar o sagrado através da dignidade humana e da perspectiva matemática."
    },
    tags: ["renascimento", "humanismo", "da-vinci"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-005",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História Geral",
    subtopic: "A Reforma Protestante e as Rupturas Teológicas",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1517, ao fixar suas 95 Teses na porta da igreja de Wittenberg, o monge agostiniano Martinho Lutero denunciou frontalmente o comércio de indulgências promovido por emissários papais para financiar as obras da Basílica de São Pedro. Lutero defendeu a doutrina da justificação pela fé (Sola Fide) e a autoridade suprema das Escrituras Sagradas (Sola Scriptura), traduzindo a Bíblia para a língua alemã acessível aos fiéis.",
      source: "SKINNER, Quentin. As Fundações do Pensamento Político Moderno. São Paulo: Companhia das Letras, 1996."
    },
    prompt: "Do ponto de vista social e cultural na Europa Moderna, a tradução da Bíblia para o vernáculo (alemão) e o princípio luterano do livre exame das Escrituras provocaram:",
    options: [
      { id: "a", text: "O fortalecimento definitivo do monopólio do clero católico romano na interpretação exclusiva dos textos sagrados.", isCorrect: false, distractorRationale: "A medida quebrou o monopólio clerical romano, permitindo que os próprios leigos lessem a palavra sagrada." },
      { id: "b", text: "A quebra do controle sacerdotal latino sobre a fé e o estímulo indireto à alfabetização e à difusão da imprensa de tipos móveis.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A proibição de cultos religiosos em todas as cidades da Confederação Germânica.", isCorrect: false, distractorRationale: "A Reforma expandiu cultos em língua local e fundou novas confissões religiosas protestantes." },
      { id: "d", text: "A imediata abolição de todas as monarquias absolutistas europeias.", isCorrect: false, distractorRationale: "Príncipes alemães acolheram o luteranismo para confiscar terras da Igreja Católica e fortalecer seu poder soberano regional." },
      { id: "e", text: "A unificação política da Europa sob a liderança de um único czar ortodoxo russo.", isCorrect: false, distractorRationale: "A Reforma fragmentou a Europa religiosa e política em múltiplos blocos confessionais em disputa." }
    ],
    detailedExplanation: {
      summary: "A Reforma Protestante democratizou o acesso à leitura ao traduzir as Escrituras do latim para as línguas populares nacionais, impulsionando a imprensa de Gutenberg e a alfabetização em massa.",
      stepByStep: [
        "Passo 1: Reconhecer a barreira anterior: até então, a Bíblia só existia em latim (Vulgata), e o fiel dependia obrigatoriamente da intermediação do padre para saber o conteúdo.",
        "Passo 2: Com a tradução de Lutero e o uso da prensa de Gutenberg, os cidadãos foram incentivados a aprender a ler para examinar pessoalmente o texto divino.",
        "Passo 3: A alternativa B conecta o impacto teológico aos desdobramentos socioculturais do letramento e da expansão editorial."
      ],
      coreConcept: "O princípio do sacerdócio universal e a tradução vernácula das Escrituras foram motores cruciais para o avanço da alfabetização popular na Europa moderna.",
      trapWarning: "Lutero combatia a corrupção e a venda de indulgências da cúria romana, mas apoiou os príncipes alemães na repressão violenta à Revolta dos Camponeses de Thomas Müntzer."
    },
    tags: ["reforma-protestante", "lutero", "modernidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-006",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História Geral",
    subtopic: "A Ética Protestante e o Espírito do Capitalismo",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na análise de Max Weber, a doutrina calvinista da predestinação absoluta gerou nos fiéis uma angustiante incerteza soteriológica: ninguém poderia saber de antemão se estava salvo ou condenado à perdição eterna. Para buscar sinais da graça divina, o calvinista adotou uma ascese intramundana rigorosa, valorizando o trabalho disciplinado metódico, a parcimônia frugal e a aversão ao consumo faustoso, reinvestindo sistematicamente o lucro na própria atividade produtiva.",
      source: "WEBER, Max. A Ética Protestante e o Espírito do Capitalismo. São Paulo: Companhia das Letras, 2004."
    },
    prompt: "De acordo com a tese weberiana, a teologia do calvinismo forneceu afinidades eletivas fundamentais para o desenvolvimento do capitalismo moderno porque:",
    options: [
      { id: "a", text: "Condenava qualquer ganho comercial financeiro como pecado mortal imperdoável de usura.", isCorrect: false, distractorRationale: "O catolicismo tradicional medieval condenava a usura e o lucro comercial; o calvinismo, ao contrário, legitimou o enriquecimento lícito decorrente do trabalho metódico." },
      { id: "b", text: "Transformou o trabalho honesto e a acumulação comedida de capital em indícios terrenos de bênção e vocação religiosa predestinada.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Exigia a destruição de fábricas e ferrovias em defesa do retorno à caça e coleta primitivas.", isCorrect: false, distractorRationale: "O calvinismo floresceu nos centros manufatureiros e comerciais mais avançados da Holanda, Suíça e Inglaterra." },
      { id: "d", text: "Determinava que todo lucro obtido por empresários fosse entregue compulsoriamente a monges contemplativos.", isCorrect: false, distractorRationale: "O calvinismo aboliu ordens monásticas contemplativas, valorizando a ação econômica ativa no mundo real." },
      { id: "e", text: "Proibia investimentos em tecnologia e comércio marítimo de longa distância.", isCorrect: false, distractorRationale: "Comerciantes e armadores calvinistas holandeses e ingleses lideraram a expansão comercial moderna." }
    ],
    detailedExplanation: {
      summary: "Weber demonstrou que as ideias religiosas moldam atitudes econômicas: o calvinismo conferiu legitimidade moral ao lucro e santificou a disciplina do trabalho.",
      stepByStep: [
        "Passo 1: Entender o drama da predestinação calvinista: a salvação é escolhida por Deus antes do nascimento. Como o homem sabe se foi eleito?",
        "Passo 2: O sucesso na profissão, acompanhado de conduta moral austera (sem gastar em luxos e bebedeiras), era interpretado como evidência visível da graça divina.",
        "Passo 3: A alternativa B expressa com perfeição o conceito sociológico de 'espírito do capitalismo' nascido da ética de trabalho e poupança."
      ],
      coreConcept: "A tese de Max Weber ressalta o papel das matrizes religiosas e éticas no surgimento da racionalidade econômica capitalista moderna.",
      trapWarning: "Weber não disse que o calvinismo 'criou' o capitalismo sozinho; ele apontou uma 'afinidade eletiva' entre a moral puritana e o impulso de acumulação disciplinada."
    },
    tags: ["max-weber", "calvinismo", "capitalismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-007",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História Geral",
    subtopic: "O Absolutismo Monárquico e o Mercantilismo",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No século XVII, o bispo francês Jacques Bossuet formulou na obra 'A Política Inspirada nas Sagradas Escrituras' a Teoria do Direito Divino dos Reis: o trono real não é o trono de um homem, mas o trono do próprio Deus. Por isso, a autoridade do monarca absoluto é sagrada, paternal e inquestionável, cabendo aos súditos a obediência irrestrita, sob pena de cometer sacrilégio.",
      source: "BOSSUET, Jacques-Bénigne. Política das Sagradas Escrituras. Lisboa: Europa-América, 1989."
    },
    prompt: "A legitimação teológico-política do Absolutismo formulada por Bossuet sustentou um modelo de Estado que, no plano econômico, operava por meio do Mercantilismo caracterizado por:",
    options: [
      { id: "a", text: "Livre concorrência irrestrita, desregulamentação alfandegária e ausência total de intervenção estatal nos mercados.", isCorrect: false, distractorRationale: "O livre comércio e o Estado mínimo são pilares do liberalismo clássico de Adam Smith (século XVIII), não do mercantilismo do século XVII." },
      { id: "b", text: "Forte intervencionismo estatal, busca obstinada de balança comercial favorável (superávit), protecionismo alfandegário e metalismo (acumulação de ouro e prata).", isCorrect: true, distractorRationale: null },
      { id: "c", text: "Coletivização compulsória das terras agrícolas sob o controle de conselhos de camponeses semipresenciais.", isCorrect: false, distractorRationale: "A coletivização camponesa é conceito socialista do século XX, estranho ao mercantilismo monárquico absolutista." },
      { id: "d", text: "Proibição da exploração de colônias ultramarinas e devolução de tributos às populações colonizadas.", isCorrect: false, distractorRationale: "O Pacto Colonial e o monopólio exclusivo metropolitano eram o núcleo do enriquecimento dos Estados mercantilistas." },
      { id: "e", text: "Extinção da cobrança de impostos régios sobre a circulação de mercadorias nas fronteiras.", isCorrect: false, distractorRationale: "As monarquias absolutistas cobravam pesadas taxas e alfândegas protecionistas para proteger suas manufaturas reais." }
    ],
    detailedExplanation: {
      summary: "O Estado Absolutista e as práticas econômicas do Mercantilismo formavam uma aliança orgânica: a monarquia centralizada necessitava de ouro e tributos para manter exércitos permanentes e a corte palaciana.",
      stepByStep: [
        "Passo 1: Reconhecer os fundamentos teóricos do absolutismo: centralização de poderes na figura régia (Bossuet e o direito divino).",
        "Passo 2: Conectar ao modelo econômico: Mercantilismo. Seus pilares: metalismo (riqueza medida em metais preciosos), protecionismo alfandegário, estímulo às manufaturas locais e superávit comercial (vender mais do que comprar).",
        "Passo 3: A alternativa B reúne com precisão todos os instrumentos práticos da política mercantilista europeia."
      ],
      coreConcept: "O Mercantilismo foi a política econômica de intervenção do Estado absolutista com vistas ao enriquecimento nacional e ao acúmulo de metais preciosos.",
      trapWarning: "Não confunda mercantilismo com liberalismo econômico: o primeiro é hiperintervencionista; o segundo defende o 'laissez-faire' e a autorregulação do mercado."
    },
    tags: ["absolutismo", "mercantilismo", "bossuet"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-008",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História Geral",
    subtopic: "A Revolução Francesa e a Queda do Antigo Regime",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Artigo 1º: Os homens nascem e permanecem livres e iguais em direitos. As distinções sociais só podem ser fundadas na utilidade comum. / Artigo 2º: A finalidade de toda associação política é a conservação dos direitos naturais e imprescritíveis do homem. Esses direitos são a liberdade, a propriedade, a segurança e a resistência à opressão.",
      source: "ASSEMBLEIA NACIONAL CONSTITUINTE DA FRANÇA. Declaração dos Direitos do Homem e do Cidadão, 26 de agosto de 1789."
    },
    prompt: "Ao proclamar a igualdade civil jurídica dos homens perante a lei em 1789, a Revolução Francesa desferiu um golpe mortal contra qual estrutura do Antigo Regime?",
    options: [
      { id: "a", text: "A sociedade de estamentos fundada em privilégios tributários e jurídicos de nascimento hereditário do Clero e da Nobreza.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "O sistema republicano presidencialista com eleições diretas a cada quatro anos.", isCorrect: false, distractorRationale: "A França de 1789 não era uma república presidencialista; era uma monarquia absolutista em crise." },
      { id: "c", text: "O direito de propriedade privada conquistado pela alta burguesia manufatureira e financeira.", isCorrect: false, distractorRationale: "O Artigo 2º consagra expressamente a 'propriedade' como direito natural imprescritível do homem burguês." },
      { id: "d", text: "A industrialização pesada robotizada movida a motores elétricos e energia atômica.", isCorrect: false, distractorRationale: "Em 1789 não existiam motores atômicos ou robótica; a produção era predominantemente agrícola e manufatureira." },
      { id: "e", text: "A separação harmoniosa entre as três ordens feudais decretada pela corte papal medieval.", isCorrect: false, distractorRationale: "Embora a ordem tripartite medieval estivesse presente, a luta imediata era contra os privilégios fiscais e jurídicos da corte francesa." }
    ],
    detailedExplanation: {
      summary: "A Revolução Francesa destruiu o Antigo Regime ao substituir os privilégios hereditários do Primeiro (Clero) e Segundo (Nobreza) Estados pela igualdade formal de todos os cidadãos perante a lei.",
      stepByStep: [
        "Passo 1: Lembrar que o Terceiro Estado (98% da população: camponeses, artesãos e burgueses) sustentava com impostos o luxo e a isenção tributária do Clero e da Nobreza.",
        "Passo 2: A Queda da Bastilha (14 de julho de 1789) e a Declaração de Direitos aboliram os foros e direitos feudais e consagraram a igualdade civil perante as leis do Estado.",
        "Passo 3: A alternativa A explica com rigor o fim da estratificação estamental baseada no sangue e privilégio de berço."
      ],
      coreConcept: "A Declaração de 1789 universalizou a igualdade jurídica civil formal burguesa, destruindo as bases institucionais do privilégio corporativo do Antigo Regime.",
      trapWarning: "A igualdade consagrada em 1789 era a igualdade formal jurídica perante a lei, e não igualdade econômica substantiva e material de renda."
    },
    tags: ["revolucao-francesa", "antigo-regime", "direitos-humanos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-009",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História Geral",
    subtopic: "A Primeira Revolução Industrial e a Condição Proletária",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em Manchester e Leeds, centros têxteis da Inglaterra de 1840, homens, mulheres e crianças a partir dos seis anos de idade cumpriam jornadas de até 16 horas diárias em galpões fabris úmidos e sem ventilação, com poeira de algodão que causava tuberculose. Os acidentes com engrenagens sem proteção eram diários, e a perda de um membro resultava em demissão imediata sem amparo médico ou indenização patronal.",
      source: "ENGELS, Friedrich. A Situação da Classe Trabalhadora na Inglaterra. São Paulo: Boitempo, 2010."
    },
    prompt: "As condições degradantes de labor e moradia descritas no auge da Primeira Revolução Industrial motivaram quais respostas organizadas da nascente classe trabalhadora?",
    options: [
      { id: "a", text: "A celebração cega do maquinismo e o financiamento de ações corporativas em bolsas de valores internacionais.", isCorrect: false, distractorRationale: "Os operários não compravam ações de bolsa; viviam em extrema subsistência e muitas vezes destruíam as máquinas que os desempregavam." },
      { id: "b", text: "Movimentos de contestação social como o Ludismo (quebra de máquinas como protesto contra o desemprego) e o Cartismo (luta por sufrágio universal e direitos trabalhistas no parlamento).", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A exigência de que todas as indústrias fossem geridas por monarcas absolutistas da dinastia Tudor.", isCorrect: false, distractorRationale: "O movimento operário lutava por direitos democráticos, republicanos e sindicais, e não por retorno a dinastias antigas." },
      { id: "d", text: "A recusa em aceitar qualquer redução da jornada de trabalho de 16 para 10 horas semanais.", isCorrect: false, distractorRationale: "A limitação da jornada diária e a proibição do trabalho infantil foram as maiores bandeiras das greves operárias." },
      { id: "e", text: "A proibição de manifestações e assembleias sindicais por consenso dos próprios trabalhadores.", isCorrect: false, distractorRationale: "Os operários fundaram as 'Trade Unions' (sindicatos) para lutar coletivamente por seus direitos, enfrentando a repressão policial." }
    ],
    detailedExplanation: {
      summary: "A exploração desregulada do trabalho nas fábricas gerou a consciência de classe do proletariado e as primeiras organizações de resistência operária da história.",
      stepByStep: [
        "Passo 1: Identificar as respostas históricas da classe trabalhadora inglesa no século XIX:",
        "Passo 2: O Ludismo (liderado simbolicamente pelo 'General Ned Ludd'): destruição noturna de teares mecânicos que roubavam postos de trabalho e rebaixavam salários.",
        "Passo 3: O Cartismo (da 'Carta do Povo' de 1838): movimento político pioneiro que recolheu milhões de assinaturas exigindo voto secreto, sufrágio universal masculino e assento de operários no Parlamento.",
        "Passo 4: A alternativa B sintetiza com perfeição essas duas manifestações paradigmáticas cobradas recorrentemente no ENEM."
      ],
      coreConcept: "A Revolução Industrial consolidou a divisão social antagônica entre capitalistas burgueses e proletários assalariados, dando origem ao sindicalismo moderno.",
      trapWarning: "Os ludistas não eram 'inimigos da tecnologia por ignorância'; destruíam máquinas como tática de negociação de choque para forçar patrões a manter salários e empregos."
    },
    tags: ["revolucao-industrial", "ludismo", "cartismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-010",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História Geral",
    subtopic: "O Imperialismo do Século XIX e a Partilha da África",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na Conferência de Berlim (1884-1885), convocada pelo chanceler alemão Otto von Bismarck, as potências industriais europeias retalharam o mapa do continente africano estabelecendo fronteiras artificiais com réguas e esquadros. A ocupação foi justificada pela ideologia da 'missão civilizadora' e do 'fardo do homem branco' (Rudyard Kipling), respaldada pelo darwinismo social que postulava a superioridade biológica da raça branca caucasiana.",
      source: "HOBSBAWM, Eric. A Era dos Impérios: 1875-1914. Rio de Janeiro: Paz e Terra, 1988."
    },
    prompt: "A imposição de fronteiras coloniais artificiais na partilha imperialista da África legou como consequência trágica de longo prazo para as nações africanas:",
    options: [
      { id: "a", text: "A pacificação duradoura e a harmonização definitiva entre todos os grupos étnicos ancestrais do continente.", isCorrect: false, distractorRationale: "O imperialismo gerou o efeito inverso exato: conflitos étnicos violentos e guerras civis que perduram até a atualidade." },
      { id: "b", text: "A separação de povos com laços históricos e a junção forçada sob um mesmo Estado de etnias rivais históricas, fomentando guerras civis sangrentas no pós-independência.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A transferência pacífica de toda a riqueza mineral e petrolífera para o benefício direto das populações nativas locais.", isCorrect: false, distractorRationale: "As riquezas foram sistematicamente espoliadas pelas metrópoles europeias (ouro, diamantes, borracha, cobre)." },
      { id: "d", text: "A erradicação completa de todas as línguas europeias em solo africano.", isCorrect: false, distractorRationale: "Línguas como inglês, francês e português foram impostas como línguas administrativas oficiais obrigatórias." },
      { id: "e", text: "A criação imediata de regimes democráticos republicanos autônomos e desenvolvidos no século XIX.", isCorrect: false, distractorRationale: "A dominação imperialista foi ditatorial, racista e sanguinária (como no Congo belga sob o rei Leopoldo II)." }
    ],
    detailedExplanation: {
      summary: "A Partilha da África dividiu o continente segundo os interesses de matérias-primas e mercados das potências europeias, semeando guerras civis profundas.",
      stepByStep: [
        "Passo 1: Entender o traçado arbitrário de Berlim: burocratas europeus desenharam fronteiras retas sem qualquer respeito às identidades linguísticas e étnicas tradicionais africanas.",
        "Passo 2: Etnologias rivais foram enclausuradas dentro da mesma fronteira colonial para que os colonizadores pudessem 'dividir para governar' (como tutsis e hutus em Ruanda).",
        "Passo 3: Quando esses países conquistaram a independência nas décadas de 1950/1960, herdaram essas fronteiras fraturadas, resultando em instabilidade e conflitos armados crônicos.",
        "Passo 4: A alternativa B sintetiza perfeitamente a herança estrutural nefasta do neocolonialismo europeu."
      ],
      coreConcept: "O Neocolonialismo imperialista do século XIX espoliou os recursos naturais da África e impôs divisões geopolíticas artificiais que explicam grande parte das crises contemporâneas do continente.",
      trapWarning: "O darwinismo social era uma pseudociência racista criada para justificar ideologicamente a violência e a exploração imperialista."
    },
    tags: ["imperialismo", "partilha-da-africa", "conferencia-de-berlim"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-011",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História Geral",
    subtopic: "A Primeira Guerra Mundial: A Aliança Imperial e a Guerra de Trincheiras",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Primeira Guerra Mundial (1914-1918) não resultou de um incidente isolado em Sarajevo, mas do acúmulo de rivalidades econômicas imperialistas, disputas por mercados coloniais e revanchismos nacionalistas (como a questão da Alsácia-Lorena entre França e Alemanha e a crise dos Bálcãs), articulados a um intrincado sistema de alianças militares secretas (Tríplice Entente e Tríplice Aliança) e à 'Paz Armada'.",
      source: "RENOUVIN, Pierre. A Primeira Guerra Mundial. São Paulo: Difusão Europeia do Livro, 1969."
    },
    prompt: "No plano tático e militar, a fase mais longa e mortífera do conflito no Front Ocidental caracterizou-se pela:",
    options: [
      { id: "a", text: "Guerra de trincheiras, na qual a tecnologia de metralhadoras, arame farpado e armas químicas imobilizou os exércitos em valas lamacentas com mortandades massivas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Batalha naval exclusiva em navios a vela de madeira desprovidos de artilharia pesada.", isCorrect: false, distractorRationale: "A guerra utilizou couraçados de aço, canhões de longo alcance e submarinos modernos." },
      { id: "c", text: "Ausência total de baixas humanas decorrente de tréguas diplomáticas permanentes entre os generais.", isCorrect: false, distractorRationale: "A Primeira Guerra foi uma carnificina sem precedentes, deixando mais de 15 milhões de mortos e mutilados." },
      { id: "d", text: "Subordinação de todas as decisões estratégicas a comandos de capitais da América do Sul.", isCorrect: false, distractorRationale: "O centro decisório do conflito esteve sediado nas capitais das potências industriais europeias." },
      { id: "e", text: "Utilização imediata de ogivas nucleares que destruíram a infraestrutura de Paris e Berlim.", isCorrect: false, distractorRationale: "Armas nucleares foram desenvolvidas apenas no final da Segunda Guerra Mundial em 1945." }
    ],
    detailedExplanation: {
      summary: "A Guerra de Trincheiras (1915-1918) transformou o campo de batalha em um massacre estático: o poder de fogo das metralhadoras e da artilharia superava a capacidade de avanço da infantaria humana.",
      stepByStep: [
        "Passo 1: Reconhecer a evolução das fases da guerra: Guerra de Movimento (1914) -> Guerra de Posição / Trincheiras (1915-1918).",
        "Passo 2: Soldados viviam meses sob lama, ratos, cadáveres insepultos e ataques surpresa de gás asfixiante (gás mostarda e cloro).",
        "Passo 3: A alternativa A retrata com exatidão como a industrialização bélica (metralhadoras, artilharia e arame farpado) impôs o impasse sangrento das trincheiras."
      ],
      coreConcept: "A Primeira Guerra Mundial inaugurou a 'guerra total' em escala industrial, na qual toda a economia e a tecnologia dos Estados foram mobilizadas para a destruição do inimigo.",
      trapWarning: "O Tratado de Versalhes (1919) impôs pesadíssimas reparações e humilhações à Alemanha derrotada, plantando o germe do ressentimento nazista que deflagraria a Segunda Guerra."
    },
    tags: ["primeira-guerra", "trincheiras", "paz-armada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-012",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História Geral",
    subtopic: "A Revolução Russa de 1917 e o Poder dos Sovietes",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em abril de 1917, ao retornar do exílio, Vladimir Lênin publicou suas 'Teses de Abril' sintetizadas no lema 'Pão, Paz e Terra' e na palavra de ordem 'Todo o Poder aos Sovietes!'. Lênin defendeu que a Revolução não deveria estagnar na fase burguesa moderada do Governo Provisório menchevique, mas avançar imediatamente para a tomada do poder pelos conselhos de operários, soldados e camponeses (sovietes).",
      source: "DEUTSCHER, Isaac. O Profeta Armado: Trotsky (1879-1921). Rio de Janeiro: Civilização Brasileira, 1968."
    },
    prompt: "O lema bolchevique 'Pão, Paz e Terra' dialogava diretamente com os três anseios mais urgentes e desesperados da população russa em 1917, que eram, respectivamente:",
    options: [
      { id: "a", text: "O combate à fome generalizada nas cidades, a retirada imediata da Rússia da mortífera Primeira Guerra Mundial e a realização de uma reforma agrária radical no campo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "O fornecimento de refeições gratuitas para a nobreza czarista, a compra de novos caças militares e a privatização de florestas estatais.", isCorrect: false, distractorRationale: "O lema combatia precisamente os privilégios da nobreza e do czar e rejeitava a guerra imperialista." },
      { id: "c", text: "A assinatura de um tratado militar para conquistar territórios na América Central e Caribe.", isCorrect: false, distractorRationale: "A prioridade russa era sair da carnificina da guerra europeia para cuidar de suas urgências internas." },
      { id: "d", text: "A conversão obrigatória de todos os camponeses ao rito ortodoxo bizantino tradicional.", isCorrect: false, distractorRationale: "O partido bolchevique era laico e materialista, sem pretensões de conversão religiosa ortodoxa." },
      { id: "e", text: "A extinção compulsória de qualquer sindicato ou conselho popular de fábrica.", isCorrect: false, distractorRationale: "Os bolcheviques apoiavam-se exatamente no poder dos sovietes (conselhos populares de trabalhadores e soldados)." }
    ],
    detailedExplanation: {
      summary: "Lênin captou a alma do povo russo faminto e exausto pelas trincheiras com uma plataforma direta: Pão (combater a penúria), Paz (sair da Primeira Guerra) e Terra (distribuir as fazendas da nobreza e da Igreja aos camponeses).",
      stepByStep: [
        "Passo 1: Lembrar o contexto de 1917: o exército czarista sofria derrotas humilhantes na Primeira Guerra com milhões de baixas; nas cidades faltava pão e carvão.",
        "Passo 2: O Governo Provisório burguês (Kerensky) cometeu o erro fatal de manter a Rússia na guerra europeia impopular.",
        "Passo 3: A liderança bolchevique de Lênin e Trotsky canalizou a revolta popular com o programa que garantiu a vitória da Revolução de Outubro.",
        "Passo 4: A alternativa A traduz com absoluta precisão o significado dos três termos do lema histórico."
      ],
      coreConcept: "A Revolução Russa de Outubro de 1917 instaurou o primeiro Estado socialista da história a partir da mobilização dos sovietes contra a monarquia czarista e a ordem capitalista.",
      trapWarning: "Não confunda a Revolução de Fevereiro (que derrubou o Czar Nicolau II e instaurou um governo liberal moderado) com a Revolução de Outubro (que levou os bolcheviques de Lênin ao poder)."
    },
    tags: ["revolucao-russa", "lenin", "sovietes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-013",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História Geral",
    subtopic: "A Crise de 1929 e o Colapso do Liberalismo Econômico",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na década de 1920, sob o lema ufanista do 'American Way of Life', a economia norte-americana experimentou uma expansão industrial fabulosa acompanhada de especulação financeira desregrada em Wall Street. Em outubro de 1929, o descompasso crônico entre a superprodução de mercadorias não absorvidas pelo consumo e a bolha de crédito causou o 'Crash' da Bolsa de Nova York, desencadeando a Grande Depressão que paralisou o comércio internacional.",
      source: "GALBRAITH, John Kenneth. O Grande Colapso de 1929. São Paulo: Pioneira, 1988."
    },
    prompt: "Para resgatar a economia americana da depressão e do desemprego em massa nos anos 1930, o presidente Franklin Roosevelt implementou o 'New Deal', cujo princípio estruturante foi:",
    options: [
      { id: "a", text: "A adoção do intervencionismo estatal de matriz keynesiana com investimentos maciços em obras públicas, regulação do sistema bancário e seguridade social.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "A entrega imediata de todas as indústrias para o planejamento centralizado de comissários da União Soviética.", isCorrect: false, distractorRationale: "O New Deal salvou o capitalismo democrático americano, sem qualquer vínculo com a economia estatal soviética." },
      { id: "c", text: "A proibição de contratação de trabalhadores assalariados em território norte-americano.", isCorrect: false, distractorRationale: "O plano visava justamente à geração de milhões de empregos formais em grandes obras públicas de infraestrutura." },
      { id: "d", text: "A eliminação de qualquer taxa de seguro desemprego ou previdência para idosos.", isCorrect: false, distractorRationale: "O Social Security Act de 1935 criou a previdência e o amparo social moderno nos Estados Unidos." },
      { id: "e", text: "A suspensão permanente da fabricação de automóveis e aço em todo o Ocidente.", isCorrect: false, distractorRationale: "O plano reativou a indústria básica de aço, energia e bens de consumo por meio do estímulo à demanda efetiva." }
    ],
    detailedExplanation: {
      summary: "O New Deal demonstrou que o mercado não é autorregulável: o Estado precisa intervir como indutor do investimento e garantidor de direitos sociais em momentos de crise cíclica.",
      stepByStep: [
        "Passo 1: Reconhecer a falência do dogma liberal clássico do 'laissez-faire' diante do desemprego de 25% da população norte-americana em 1932.",
        "Passo 2: Roosevelt aplicou as formulações de John Maynard Keynes: o governo deve emitir títulos e gastar em obras de infraestrutura (barragens do Tennessee Valley, pontes, estradas) para injetar dinheiro nos bolsos dos trabalhadores.",
        "Passo 3: Com renda nas mãos, os trabalhadores voltam a consumir produtos industriais e alimentos rurais, reativando a roda da economia.",
        "Passo 4: A alternativa A traduz com perfeição a virada keynesiana que fundou as bases do Estado de Bem-Estar Social (Welfare State)."
      ],
      coreConcept: "O New Deal rompeu com a ortodoxia do livre mercado puro, estabelecendo a intervenção reguladora e o investimento público como salvaguardas contra o colapso econômico.",
      trapWarning: "A Crise de 1929 afetou diretamente o Brasil, derrubando os preços internacionais do café e viabilizando politicamente a Revolução de 1930 de Getúlio Vargas."
    },
    tags: ["crise-de-1929", "new-deal", "keynesianismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-014",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História Geral",
    subtopic: "A Ascensão dos Totalitarismos Fascista e Nazista",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O totalitarismo não pretende apenas a submissão política externa dos indivíduos, mas a destruição da própria espontaneidade humana e a subordinação total da vida privada à vontade do Estado. Sustenta-se no culto obsessivo à figura infalível do Líder (Führer / Duce), no controle absoluto das mídias pela propaganda de massas, no partido único, no terror policial sistemático (Gestapo, OVRA) e na invenção de um 'inimigo objetivo' bode expiatório para canalizar o ódio social.",
      source: "ARENDT, Hannah. As Origens do Totalitarismo. São Paulo: Companhia das Letras, 1989."
    },
    prompt: "De acordo com Hannah Arendt, o regime nazista na Alemanha diferenciou-se de ditaduras tradicionais ao articular a tecnologia moderna do Estado a uma ideologia que colocava como núcleo absoluto:",
    options: [
      { id: "a", text: "O racismo biológico e o antissemitismo sistemático voltado à conquista do 'espaço vital' (Lebensraum) e à eliminação industrial do povo judeu e de minorias.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "A defesa incondicional dos direitos humanos fundamentais e da igualdade universal de todos os povos.", isCorrect: false, distractorRationale: "O nazismo rejeitava expressamente o Iluminismo, os direitos humanos e a igualdade entre etnias." },
      { id: "c", text: "A submissão do poder militar alemão à jurisdição da Liga das Nações e de tribunais neutros da Suíça.", isCorrect: false, distractorRationale: "Hitler retirou a Alemanha da Liga das Nações e violou sistematicamente todos os tratados internacionais de desarmamento." },
      { id: "d", text: "A convivência harmônica e multipartidária entre comunistas, sociais-democratas e conservadores no parlamento.", isCorrect: false, distractorRationale: "O incêndio do Reichstag em 1933 foi usado como pretexto para cassar e prender todos os partidos de oposição em campos de concentração." },
      { id: "e", text: "O desarmamento unilateral total de todos os corpos policiais e forças armadas da Alemanha.", isCorrect: false, distractorRationale: "O nazismo promoveu o remilitarismo fanático e a expansão agressiva da Wehrmacht e das tropas de elite SS." }
    ],
    detailedExplanation: {
      summary: "O totalitarismo nazista combinou modernidade técnica, propaganda orquestrada por Goebbels e racismo de Estado na monstruosa engenharia do Holocausto.",
      stepByStep: [
        "Passo 1: Entender o diagnóstico clássico de Hannah Arendt: o totalitarismo mobiliza as massas desorientadas por meio de ideologias fechadas e do terror.",
        "Passo 2: No nazismo, o princípio central não era apenas o nacionalismo ou o estatismo, mas a pureza racial ariana e o ódio patológico aos judeus (antissemitismo), ciganos, eslavos, pessoas com deficiência e dissidentes políticos.",
        "Passo 3: A alternativa A capta a especificidade trágica do projeto nazista que culminou na 'Solução Final' dos campos de extermínio.",
        "Passo 4: Essa questão exige discernimento ético e histórico fundamental para a cidadania contemporânea."
      ],
      coreConcept: "O Nazismo constituiu um regime totalitário radical sustentado no racismo de Estado, no antissemitismo biológico e no extermínio industrial planejado de seres humanos.",
      trapWarning: "Ditaduras comuns calam a oposição política; regimes totalitários buscam moldar a mente, a família e a própria biologia dos cidadãos através do terror e da propaganda."
    },
    tags: ["nazismo", "totalitarismo", "hannah-arendt"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-015",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História Geral",
    subtopic: "A Segunda Guerra Mundial e o Julgamento de Nuremberg",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Realizado entre 1945 e 1946 pelos Aliados na cidade de Nuremberg, o Tribunal Militar Internacional julgou os principais líderes civis e militares do Terceiro Reich alemão. Pela primeira vez no direito internacional positivo, autoridades de Estado foram individualmente responsabilizadas e condenadas por 'crimes contra a paz', 'crimes de guerra' e pela tipificação inédita de 'crimes contra a humanidade'.",
      source: "BOBBIO, Norberto. A Era dos Direitos. Rio de Janeiro: Elsevier, 2004."
    },
    prompt: "O Tribunal de Nuremberg constituiu um divisor de águas na história do Direito Internacional porque derrubou a tese defensiva comum de que:",
    options: [
      { id: "a", text: "Criminosos de guerra poderiam ser absolvidos pelo simples argumento de que agiram apenas cumprindo ordens superiores hierárquicas do Estado.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Tribunais internacionais deveriam ser subordinados à aprovação prévia das potências derrotadas em batalha.", isCorrect: false, distractorRationale: "O tribunal foi instaurado pelos Aliados vencedores para julgar os líderes da máquina de destruição nazista." },
      { id: "c", text: "Tratados de paz devem conceder imunidade vitalícia a comandantes de campos de concentração e extermínio.", isCorrect: false, distractorRationale: "O tribunal negou qualquer imunidade a agentes do genocídio, condenando dezenas de líderes à forca ou prisão perpétua." },
      { id: "d", text: "Crimes cometidos contra populações civis são irrelevantes quando comparados a perdas financeiras empresariais.", isCorrect: false, distractorRationale: "A dignidade da vida humana de civis desarmados foi o valor central afirmado na criação dos crimes contra a humanidade." },
      { id: "e", text: "Leis nacionais autoritárias possuem valor superior aos direitos fundamentais de todos os seres humanos.", isCorrect: false, distractorRationale: "Nuremberg afirmou o princípio oposto: a soberania da lei moral universal sobre decretos genocidas de Estados soberanos." }
    ],
    detailedExplanation: {
      summary: "Nuremberg estabeleceu que ordens de massacre emanadas de governantes não isentam indivíduos da responsabilidade penal por atrocidades cometidas contra a humanidade.",
      stepByStep: [
        "Passo 1: Entender o argumento alegado pela maioria dos oficiais nazistas julgados: 'Eu era um oficial do exército cumprindo ordens legais da chefia do Estado (Befehlsnotstand)'.",
        "Passo 2: O tribunal rejeitou essa tese com firmeza: existe uma lei da humanidade superior às leis perversas de um regime tirânico; a obediência cega a ordens desumanas não anula a culpa individual.",
        "Passo 3: A alternativa A aponta essa virada doutrinária essencial que serviu de alicerce para a Declaração Universal dos Direitos Humanos de 1948.",
        "Passo 4: Essa herança jurídica é a raiz do Tribunal Penal Internacional (TPI) de Haia em funcionamento na atualidade."
      ],
      coreConcept: "O Julgamento de Nuremberg consagrou a imprescritibilidade dos crimes contra a humanidade e responsabilizou diretamente agentes individuais por violações sistemáticas da dignidade humana.",
      trapWarning: "A defesa de 'eu só estava cumprindo ordens' foi definitivamente desmoralizada em Nuremberg e na análise de Hannah Arendt sobre o julgamento de Adolf Eichmann em Jerusalém."
    },
    tags: ["segunda-guerra", "nuremberg", "direitos-humanos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-016",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História Geral",
    subtopic: "A Guerra Fria e a Doutrina de Contenção",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1947, o presidente norte-americano Harry Truman discursou ao Congresso anunciando a 'Doutrina Truman', segundo a qual cabia aos Estados Unidos apoiar os povos livres que resistiam à subjugação por minorias armadas ou pressões externas. Pouco depois, o Plano Marshall injetou mais de 13 bilhões de dólares na reconstrução econômica da Europa Ocidental devastada pela Segunda Guerra.",
      source: "JUDT, Tony. Pós-Guerra: uma história da Europa desde 1945. Rio de Janeiro: Objetiva, 2008."
    },
    prompt: "A Doutrina Truman e o Plano Marshall tinham como meta estratégica primordial no início da Guerra Fria:",
    options: [
      { id: "a", text: "Conter o avanço da influência geopolítica soviética e do comunismo na Europa através do fortalecimento das democracias de livre mercado.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Promover a unificação pacífica e desmilitarizada de todos os países do mundo sob o comando do Kremlin moscovita.", isCorrect: false, distractorRationale: "O plano era estadunidense e combatia a expansão do Kremlin comunista em território europeu." },
      { id: "c", text: "Financiar a fundação de monarquias absolutistas feudais na América Latina e África.", isCorrect: false, distractorRationale: "O foco geográfico prioritário do Plano Marshall foi a Europa Ocidental (França, Alemanha Ocidental, Itália, Reino Unido)." },
      { id: "d", text: "Proibir a comercialização de produtos industriais e dólares americanos no continente europeu.", isCorrect: false, distractorRationale: "O plano inundou a Europa de dólares e créditos para reativar as compras de produtos manufaturados americanos." },
      { id: "e", text: "Garantir a adesão imediata de todos os governos europeus ao Pacto de Varsóvia.", isCorrect: false, distractorRationale: "O Pacto de Varsóvia era a aliança militar oposta, chefiada pela União Soviética em resposta à OTAN." }
    ],
    detailedExplanation: {
      summary: "A contenção (Containment) foi a viga-mestra da diplomacia norte-americana na Guerra Fria: impedir que o desespero e a pobreza do pós-guerra empurrassem os países europeus para o socialismo soviético.",
      stepByStep: [
        "Passo 1: Lembrar que partidos comunistas eram muito fortes na Itália e França em 1945/1947 devido ao seu protagonismo heróico na resistência armada ao nazifascismo.",
        "Passo 2: Washington sabia que a melhor vacina contra revoluções populares de esquerda era reerguer rapidamente a prosperidade econômica das nações capitalistas.",
        "Passo 3: A alternativa A explica com rigor a complementaridade entre a política diplomático-militar (Doutrina Truman) e a ajuda financeira de reconstrução (Plano Marshall)."
      ],
      coreConcept: "A Guerra Fria caracterizou-se pela disputa ideológica, econômica e militar indireta entre duas superpotências nucleares (EUA e URSS) sem confronto armado direto em seus territórios.",
      trapWarning: "Em resposta ao Plano Marshall, a União Soviética criou o COMECON (Conselho para Assistência Econômica Mútua) para integrar as economias do bloco socialista do Leste Europeu."
    },
    tags: ["guerra-fria", "plano-marshall", "doutrina-truman"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-017",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História Geral",
    subtopic: "A Descolonização Afro-Asiática e a Conferência de Bandung",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em abril de 1955, líderes de 29 nações asiáticas e africanas recém-emancipadas (como Jawaharlal Nehru da Índia, Sukarno da Indonésia, Zhou Enlai da China e Gamal Abdel Nasser do Egito) reuniram-se na histórica Conferência de Bandung. O comunicado final condenou categoricamente o colonialismo em todas as suas manifestações como negação dos direitos humanos fundamentais e proclamou os princípios da autodeterminação dos povos e da não adesão compulsória aos blocos militares da Guerra Fria.",
      source: "BETTS, Raymond F. A Descolonização. São Paulo: Cultrix, 2009."
    },
    prompt: "A Conferência de Bandung (1955) representou um marco histórico na ordem internacional porque consolidou:",
    options: [
      { id: "a", text: "A emergência do 'Terceiro Mundo' e do Movimento dos Países Não Alinhados como força política autônoma frente à bipolaridade entre Estados Unidos e União Soviética.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "A subordinação definitiva de todas as nações do Sul Global às ordens militares do generalato da OTAN.", isCorrect: false, distractorRationale: "Bandung recusou alianças militares impostas pelas superpotências, defendendo o não alinhamento." },
      { id: "c", text: "A redivisão pacífica da África sob o controle exclusivo da Coroa britânica e holandesa.", isCorrect: false, distractorRationale: "A conferência exigiu o fim imediato e irrevogável de todos os impérios coloniais e do apartheid." },
      { id: "d", text: "O fechamento do Canal de Suez para qualquer navio de nações de fora do continente asiático.", isCorrect: false, distractorRationale: "Bandung defendeu a cooperação econômica e comercial internacional justa, sem bloqueios mercantis gerais." },
      { id: "e", text: "A proibição do ingresso de novos países membros na Organização das Nações Unidas (ONU).", isCorrect: false, distractorRationale: "Os líderes de Bandung exigiram a democratização e o ingresso universal das nações libertadas na Assembleia Geral da ONU." }
    ],
    detailedExplanation: {
      summary: "Bandung foi a voz unida dos povos colonizados: nem satélites do capitalismo norte-americano, nem peões do bloco soviético, mas soberanos do próprio destino.",
      stepByStep: [
        "Passo 1: Reconhecer a novidade geopolítica dos anos 1950: o colapso dos impérios coloniais europeu (britânico, francês, holandês, português) após a Segunda Guerra.",
        "Passo 2: As novas nações independentes recusaram ser meras peças do xadrez nuclear bipolar da Guerra Fria.",
        "Passo 3: A alternativa A define com exatidão o surgimento do conceito de 'Terceiro Mundo' (Sul Global) e a fundação do Movimento dos Países Não Alinhados em Belgrado (1961)."
      ],
      coreConcept: "A Descolonização Afro-Asiática e a Conferência de Bandung alteraram a correlação de forças global ao afirmar o direito inalienável dos povos à autodeterminação e soberania.",
      trapWarning: "O termo 'Terceiro Mundo' nasceu na sociologia francesa (Alfred Sauvy, em alusão ao Terceiro Estado da Revolução Francesa: o grupo imenso e explorado que queria ter voz)."
    },
    tags: ["descolonizacao", "bandung", "terceiro-mundo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-018",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História Geral",
    subtopic: "A Queda do Muro de Berlim e o Fim da União Soviética",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em meados da década de 1980, diante da estagnação econômica crônica, da corrupção burocrática e dos custos exorbitantes da corrida armamentista, o líder soviético Mikhail Gorbachev lançou as diretrizes da 'Perestroika' (reestruturação econômica descentralizada) e da 'Glasnost' (transparência e liberdade de expressão política). Em novembro de 1989, a abertura dos postos de fronteira culminou na queda popular pacífica do Muro de Berlim.",
      source: "SERVICE, Robert. Camaradas: uma história do comunismo mundial. Rio de Janeiro: Difel, 2008."
    },
    prompt: "O desmantelamento do Muro de Berlim em 1989 e a dissolução da União Soviética em 1991 produziram como desdobramento imediato na geopolítica planetária:",
    options: [
      { id: "a", text: "O fim da ordem bipolar da Guerra Fria e a unificação da Alemanha sob o sistema capitalista ocidental.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "A redivisão da Europa em monarquias governadas por imperadores do Sacro Império Romano-Germânico.", isCorrect: false, distractorRationale: "O Sacro Império foi extinto por Napoleão em 1806; os acontecimentos de 1989 consolidaram democracias republicanas e liberais." },
      { id: "c", text: "A deflagração de uma guerra nuclear apocalíptica generalizada entre as forças do Pacto de Varsóvia.", isCorrect: false, distractorRationale: "A transição na maior parte da Europa Central e na Alemanha ocorreu de forma predominantemente pacífica e negociada." },
      { id: "d", text: "O isolamento absoluto dos Estados Unidos e o encerramento do comércio global de mercadorias.", isCorrect: false, distractorRationale: "Os EUA emergiram como a hiperpotência incontestável dos anos 1990 ('momento unipolar')." },
      { id: "e", text: "A proibição do trânsito de cidadãos entre as cidades de Berlim Ocidental e Berlim Oriental.", isCorrect: false, distractorRationale: "A queda do muro significou exatamente o fim das barreiras físicas e a livre circulação de pessoas reunificando as famílias alemãs." }
    ],
    detailedExplanation: {
      summary: "A queda do Muro de Berlim é o marco simbólico que encerrou o 'Breve Século XX' (Eric Hobsbawm), sepultando a Guerra Fria e abrindo caminho para a globalização hegemônica do capitalismo.",
      stepByStep: [
        "Passo 1: Recordar o que representava o Muro de Berlim (1961-1989): o símbolo físico da Cortina de Ferro entre o capitalismo ocidental e o socialismo real soviético.",
        "Passo 2: Com a Glasnost e a recusa de Gorbachev de usar tanques para reprimir manifestações populares nos países satélites, o bloco ruiu como peças de dominó (Polônia, Hungria, RDA, Tchecoslováquia, Romênia).",
        "Passo 3: A alternativa A resume com perfeição o fim da ordem bipolar e a reunificação pacífica da Alemanha em outubro de 1990."
      ],
      coreConcept: "A derrocada do bloco soviético encerrou a bipolaridade ideológica do século XX, inaugurando a Nova Ordem Mundial multipolar da globalização contemporânea.",
      trapWarning: "A Glasnost (abertura política) e a Perestroika (reforma econômica) tentaram modernizar o socialismo, mas aceleraram involuntariamente o esfacelamento da União Soviética em 15 repúblicas autônomas."
    },
    tags: ["muro-de-berlim", "perestroika", "fim-da-urss"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-019",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História Geral",
    subtopic: "A Revolução Gloriosa Inglesa e a Monarquia Parlamentar",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1689, ao aceitarem a coroa britânica após a fuga do rei católico Jaime II, os príncipes Guilherme de Orange e Maria Stuart juraram solenemente a Declaração de Direitos (Bill of Rights). O documento estabeleceu que o monarca não poderia suspender leis, criar tribunais de exceção, instituir tributos ou manter exército em tempo de paz sem a prévia e expressa autorização do Parlamento.",
      source: "HILL, Christopher. O Século das Revoluções: 1603-1714. São Paulo: Unesp, 2012."
    },
    prompt: "A Revolução Gloriosa (1688-1689) representou um marco fundacional para o Ocidente moderno ao instaurar o modelo de:",
    options: [
      { id: "a", text: "Monarquia Constitucional Parlamentar, limitando legalmente o poder absolutista da Coroa e garantindo a supremacia política do Parlamento e da burguesia.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "República dos Sovietes com coletivização compulsória de todas as fábricas inglesas de fiação.", isCorrect: false, distractorRationale: "Trata-se de uma monarquia parlamentar burguesa do século XVII, sem qualquer relação com a revolução soviética do século XX." },
      { id: "c", text: "Tirania teocrática absolutista com poder irrestrito exercido exclusivamente pela cúria papal do Vaticano.", isCorrect: false, distractorRationale: "A Revolução Gloriosa consagrou o protestantismo e a proibição expressa de ascensão de monarcas católicos ao trono inglês." },
      { id: "d", text: "Democracia direta universal com direito a voto garantido imediatamente a todas as mulheres operárias.", isCorrect: false, distractorRationale: "O direito a voto continuou censitário e restrito aos homens proprietários de terras e capital durante séculos." },
      { id: "e", text: "Ditadura militar perpétua sob a liderança dos oficiais do Exército de Novo Tipo (New Model Army).", isCorrect: false, distractorRationale: "A ditadura militar ocorreu na fase da República de Cromwell (década de 1650); a Revolução Gloriosa foi a consolidação pacífica do parlamentarismo em 1689." }
    ],
    detailedExplanation: {
      summary: "A célebre fórmula 'o rei reina, mas o Parlamento governa' nasceu na Inglaterra em 1689, liquidando o absolutismo um século antes da Revolução Francesa.",
      stepByStep: [
        "Passo 1: Entender o embate do século XVII inglês: os reis Stuart queriam o absolutismo de direito divino à moda francesa; o Parlamento (liderado por gentry e burgueses comerciantes) queria controle orçamentário.",
        "Passo 2: Com o Bill of Rights (1689), o poder real ficou rigidamente subordinado à lei votada pelos parlamentares.",
        "Passo 3: A estabilidade jurídica e política conquistada com o parlamentarismo abriu as portas para que a Inglaterra acumulasse capitais e liderasse a Revolução Industrial no século seguinte.",
        "Passo 4: A alternativa A resume com precisão a essência da Monarquia Constitucional e Parlamentar."
      ],
      coreConcept: "A Revolução Gloriosa enterrou em definitivo o absolutismo na Grã-Bretanha, transferindo a soberania do rei para a lei e para a representação parlamentar burguesa.",
      trapWarning: "John Locke escreveu seus clássicos 'Tratados sobre o Governo Civil' justamente para legitimar e justificar a Revolução Gloriosa e a soberania do consentimento popular."
    },
    tags: ["revolucao-gloriosa", "parlamentarismo", "bill-of-rights"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-020",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História Geral",
    subtopic: "A Comuna de Paris de 1871 e o Primeiro Governo Operário",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre março e maio de 1871, após a humilhante derrota da França na Guerra Franco-Prussiana e o cerco prussiano à capital, operários, artesãos e guardas nacionais rebelaram-se contra o governo conservador de Versalhes e proclamaram a Comuna de Paris. Por 72 dias, a Comuna geriu a cidade instituindo a separação imediata entre Igreja e Estado, o controle operário das fábricas abandonadas, a educação pública laica e gratuita e a elegibilidade e revogabilidade de todos os cargos públicos.",
      source: "MARX, Karl. A Guerra Civil na França. São Paulo: Boitempo, 2011."
    },
    prompt: "A Comuna de Paris de 1871 ocupa um lugar seminal na história do movimento operário internacional por ter sido:",
    options: [
      { id: "a", text: "A primeira experiência concreta de autogestão popular e governo operário democrático radical a substituir o aparelho estatal tradicional.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Uma conspiração secreta financiada pela aristocracia prussiana para restaurar a monarquia absoluta de Luís XVI.", isCorrect: false, distractorRationale: "A Comuna era socialista, republicana e operária; lutou bravamente contra o exército prussiano e contra Versalhes." },
      { id: "c", text: "Um pacto militar para entregar a soberania da França a corporações financeiras norte-americanas.", isCorrect: false, distractorRationale: "A Comuna era anticapitalista e gerida por delegados eleitos dos bairros populares parisienses." },
      { id: "d", text: "A defensora incondicional do direito divino dos reis e do retorno da Inquisição espanhola.", isCorrect: false, distractorRationale: "A Comuna adotou a laicidade radical, retirando crucifixos de escolas e confiscando propriedades clericais improdutivas." },
      { id: "e", text: "Um movimento pacífico desprovido de qualquer confronto militar ou derramamento de sangue.", isCorrect: false, distractorRationale: "A Comuna foi esmagada brutalmente na 'Semana Sangrenta' pelas tropas francesas de Versalhes, com mais de 20 mil operários executados sumariamente." }
    ],
    detailedExplanation: {
      summary: "A Comuna de Paris provou aos trabalhadores de todo o mundo que a classe trabalhadora podia organizar e governar uma das maiores metrópoles do planeta sem patrões e sem generais.",
      stepByStep: [
        "Passo 1: Notar as medidas pioneiras da Comuna: salário de delegado igual ao salário médio de operário, revogabilidade de mandatos, creches populares e controle operário de oficinas.",
        "Passo 2: Karl Marx analisou a Comuna como 'a forma política enfim encontrada sob a qual se podia realizar a emancipação econômica do trabalho'.",
        "Passo 3: A alternativa A conceitua com perfeição o valor de laboratório histórico e inspiração revolucionária da Comuna para os séculos XIX e XX."
      ],
      coreConcept: "A Comuna de Paris de 1871 foi o primeiro governo operário moderno, tornando-se referência teórica e afetiva indispensável para o socialismo e anarquismo globais.",
      trapWarning: "Embora tenha durado apenas 72 dias antes do massacre de Versalhes, a Comuna inspirou diretamente a criação do hino 'A Internacional' e a estratégia dos sovietes russos de 1917."
    },
    tags: ["comuna-de-paris", "socialismo", "movimento-operario"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-021",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História Geral",
    subtopic: "A Revolução Científica do Século XVII e o Heliocentrismo",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1633, perante o Tribunal do Santo Ofício em Roma, Galileu Galilei foi forçado a abjurar de joelhos suas convicções astronômicas para não ser queimado vivo na fogueira da Inquisição. Utilizando a luneta aperfeiçoada, Galileu havia descoberto crateras na Lua, manchas no Sol e luas orbitando Júpiter, fornecendo provas empíricas definitivas para o modelo heliocêntrico de Nicolau Copérnico e destruindo o geocentrismo aristotélico-ptolomaico adotado pela teologia da Igreja.",
      source: "KOYRÉ, Alexandre. Do Mundo Fechado ao Universo Infinito. Rio de Janeiro: Forense Universitária, 2006."
    },
    prompt: "O choque entre Galileu Galilei e o Tribunal da Inquisição simboliza o embate fundacional da modernidade ocidental entre:",
    options: [
      { id: "a", text: "O método científico empírico experimental baseado na observação e na matemática e o dogma teológico ancorado no princípio cego da autoridade clerical.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "A astronomia maia da América pré-colombiana e a física quântica dos laboratórios alemães modernos.", isCorrect: false, distractorRationale: "O debate deu-se no coração da Europa moderna entre o heliocentrismo copernicano e o geocentrismo católico escolástico." },
      { id: "c", text: "A defesa da astrologia mágica dos horóscopos contra a engenharia de foguetes teleguiados.", isCorrect: false, distractorRationale: "Galileu praticou a física e a mecânica matemática rigorosa, superando a astrologia mágica." },
      { id: "d", text: "A pretensão de proibir o uso de óculos e instrumentos ópticos de aumento em universidades públicas.", isCorrect: false, distractorRationale: "A questão central era a cosmologia do universo: a Terra no centro imóvel (geocentrismo) vs o Sol no centro do sistema (heliocentrismo)." },
      { id: "e", text: "A exigência de que todos os astrônomos do planeta escrevessem seus relatórios em dialetos astecas.", isCorrect: false, distractorRationale: "Galileu escreveu inclusive em italiano vernáculo ('Diálogo sobre os Dois Máximos Sistemas do Mundo') para ser lido pelo povo culto, não em dialetos astecas." }
    ],
    detailedExplanation: {
      summary: "A Revolução Científica fundou a modernidade ao instituir que uma tese sobre a natureza é válida não porque um papa ou filósofo antigo disse, mas porque a evidência empírica e a matemática a comprovam.",
      stepByStep: [
        "Passo 1: Reconhecer a visão de mundo anterior: a Terra imóvel no centro do universo (criacionismo geocêntrico de Ptolomeu e Aristóteles adaptado pela Igreja Católica medieval).",
        "Passo 2: Galileu observou a realidade com a luneta e provou que a Terra se move em torno do Sol, contestando a interpretação literal de passagens bíblicas (como a de Josué mandando o Sol parar).",
        "Passo 3: A alternativa A capta precisamente o divisor de águas entre o dogma de autoridade e a ciência moderna experimental."
      ],
      coreConcept: "A Revolução Científica do século XVII autonomizou a ciência empírica em relação à autoridade teológica, estabelecendo as bases do racionalismo moderno.",
      trapWarning: "Diz a tradição que, após abjurar diante dos cardeais, Galileu teria murmurado baixinho: 'Eppur si muove' ('Contudo, ela se move'), atestando a soberania da verdade factual da natureza sobre a censura ideológica."
    },
    tags: ["revolucao-cientifica", "galileu", "heliocentrismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-022",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História Geral",
    subtopic: "A Guerra do Vietnã e os Protestos da Juventude Ocidental",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Transmitida diariamente em cores para os lares norte-americanos nos telejornais da noite, a Guerra do Vietnã (1955-1975) provocou uma onda mundial de choque ético. Imagens de crianças queimadas por bombas de napalm, vilarejos de camponeses incendiados e caixões de jovens soldados americanos regressando aos milhares desencadearam protestos multitudinários nos campi universitários, a contracultura pacifista ('Faça amor, não faça guerra') e a crise de legitimidade da intervenção militar dos EUA no Sudeste Asiático.",
      source: "KARNOW, Stanley. Vietnã: uma história. Rio de Janeiro: Nova Fronteira, 1984."
    },
    prompt: "A cobertura televisiva de massa da Guerra do Vietnã teve como impacto político decisivo na opinião pública ocidental:",
    options: [
      { id: "a", text: "A ampliação do apoio popular irrestrito à escalada de bombardeios atômicos sobre Hanói.", isCorrect: false, distractorRationale: "O impacto foi o oposto: a perda catastrófica de apoio popular e o crescimento massivo da oposição pacifista à guerra." },
      { id: "b", text: "A desmistificação do discurso governamental de salvação democrática, impulsionando manifestações civis contra o militarismo imperialista.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A proibição de transmissões de rádio e televisão comercial em território estadunidense.", isCorrect: false, distractorRationale: "As televisões continuaram funcionando e foram fundamentais para alimentar o debate democrático público." },
      { id: "d", text: "O fechamento compulsório de todas as universidades federais do estado da Califórnia.", isCorrect: false, distractorRationale: "As universidades tornaram-se os epicentros vibrantes de debates cívicos e protestos estudantis." },
      { id: "e", text: "A adesão imediata do governo norte-americano ao modelo comunista dos vietcongues.", isCorrect: false, distractorRationale: "Os EUA combatiam os vietcongues e retiraram suas tropas derrotadas em 1973 (Acordos de Paz de Paris)." }
    ],
    detailedExplanation: {
      summary: "O Vietnã foi a primeira guerra televisionada da história: a crueza das imagens desmascarou a retórica oficial de Washington e incendiou o movimento pacifista civil nos EUA.",
      stepByStep: [
        "Passo 1: Reconhecer a força da televisão nas décadas de 1960/1970: pela primeira vez os cidadãos viram a barbaridade da guerra de perto na sala de estar.",
        "Passo 2: Movimentos civis, estudantes e veteranos mutilados marcharam sobre Washington exigindo a retirada das tropas ('Bring the boys home').",
        "Passo 3: A alternativa B capta a desilusão com o triunfalismo imperialista e o nascimento do pacifismo contemporâneo."
      ],
      coreConcept: "A visibilidade midiática de violações de direitos humanos em conflitos bélicos atua como poderoso catalisador de pressão cidadã e questionamento de políticas estatais.",
      trapWarning: "A oposição à Guerra do Vietnã entrelaçou-se à luta pelos Direitos Civis dos negros nos EUA liderada por Martin Luther King e Malcolm X."
    },
    tags: ["guerra-do-vietna", "pacifismo", "midia-e-opiniao-publica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-023",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História Geral",
    subtopic: "A Independência das Treze Colônias e o Constitucionalismo Liberal",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Consideramos estas verdades como evidentes por si mesmas: que todos os homens são criados iguais, dotados pelo Criador de certos direitos inalienáveis, entre os quais estão a Vida, a Liberdade e a busca da Felicidade. E para assegurar esses direitos, governos são instituídos entre os homens, derivando seus justos poderes do consentimento dos governados.",
      source: "JEFFERSON, Thomas et al. Declaração de Independência dos Estados Unidos da América, 4 de julho de 1776."
    },
    prompt: "Ao justificar a ruptura com a Coroa Britânica em 1776, a Declaração de Independência dos Estados Unidos inspirou-se diretamente nos postulados filosóficos de qual autor e corrente de pensamento?",
    options: [
      { id: "a", text: "No contratualismo liberal de John Locke, que fundamentava a legitimidade do poder no consentimento dos cidadãos e na preservação de seus direitos naturais inalienáveis.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "No absolutismo teocrático de Nicolau Maquiavel em defesa da tirania hereditária de príncipes estrangeiros.", isCorrect: false, distractorRationale: "Maquiavel não defendia o direito divino dos reis, e o texto de Jefferson é um manifesto republicano iluminista antiabsolutista." },
      { id: "c", text: "No manifesto comunista de Karl Marx publicado no século XIX em prol da abolição do capital financeiro.", isCorrect: false, distractorRationale: "Em 1776 Karl Marx ainda não havia nascido (ele nasceu em 1818); o texto fundamenta a república liberal burguesa." },
      { id: "d", text: "Nas encíclicas papais da Contrarreforma que exigiam a restauração do Sacro Tribunal do Santo Ofício.", isCorrect: false, distractorRationale: "Os patriotas coloniais eram em sua maioria protestantes puritanos, deístas e iluministas laicos." },
      { id: "e", text: "Nas teorias do feudalismo senhorial que exigiam a escravização universal de todos os imigrantes da Europa.", isCorrect: false, distractorRationale: "O texto proclama que todos os homens são dotados do direito inalienável à liberdade e busca da felicidade." }
    ],
    detailedExplanation: {
      summary: "A redação de Thomas Jefferson para a Independência de 1776 é uma transposição direta do 'Segundo Tratado sobre o Governo Civil' de John Locke para o contexto de revolta contra a tirania colonial inglesa.",
      stepByStep: [
        "Passo 1: Reconhecer os conceitos de Locke presentes no texto: 'direitos inalienáveis', 'vida, liberdade', 'consentimento dos governados'.",
        "Passo 2: Locke argumentava que, se um governo quebra o contrato social e oprime a liberdade dos cidadãos, o povo tem o direito e o dever moral de se rebelar e instituir nova ordem política.",
        "Passo 3: A alternativa A identifica o autor correto (Locke) e a corrente de legitimação republicana liberal."
      ],
      coreConcept: "A Independência dos Estados Unidos foi o primeiro movimento de descolonização bem-sucedido nas Américas e materializou as teses do Iluminismo na forma de uma Constituição republicana escrita.",
      trapWarning: "Apesar de proclamar que 'todos os homens são criados iguais', a Constituição dos EUA de 1787 manteve a escravidão negra nos estados do Sul para preservar o pacto com os latifundiários."
    },
    tags: ["independencia-eua", "john-locke", "iluminismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-024",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História Geral",
    subtopic: "A Guerra Civil Espanhola e a Antesala da Segunda Guerra Mundial",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 26 de abril de 1937, a Legião Condor da força aérea da Alemanha nazista, atendendo a pedido do general golpista Francisco Franco, bombardeou implacavelmente e arrasou a pequena cidade basca de Guernica, metralhando civis indefesos, mulheres e crianças que realizavam suas feiras na praça pública. O horror daquele teste militar de bombardeio terrorista contra populações civis foi imortalizado no monumental painel em preto e branco pintado por Pablo Picasso.",
      source: "THOMAS, Hugh. A Guerra Civil Espanhola. Rio de Janeiro: Civilização Brasileira, 1964."
    },
    prompt: "A Guerra Civil Espanhola (1936-1939) e o massacre retratado por Picasso no painel 'Guernica' são historicamente analisados como:",
    options: [
      { id: "a", text: "O ensaio geral da Segunda Guerra Mundial, no qual as forças fascistas e nazistas testaram táticas de guerra aérea de extermínio contra o campo democrático e antifascista.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Um conflito desprovido de qualquer dimensão ideológica ou interesse internacional dos países vizinhos.", isCorrect: false, distractorRationale: "O conflito mobilizou brigadas internacionais de voluntários do mundo inteiro e o apoio de Hitler, Mussolini e Stalin." },
      { id: "c", text: "A vitória esmagadora do anarquismo e da república democrática sobre todas as forças militares da Espanha.", isCorrect: false, distractorRationale: "O general Francisco Franco venceu a guerra e instaurou uma ditadura fascista e corporativista que durou até 1975." },
      { id: "d", text: "A celebração cívica da amizade inabalável entre o governo republicano e a monarquia absoluta dos Habsburgos.", isCorrect: false, distractorRationale: "A Segunda República espanhola era laica e progressista; Franco derrubou a República por um golpe militar sanguinário." },
      { id: "e", text: "Uma disputa isolada entre pescadores da costa do mar Mediterrâneo sem repercussão fora da província basca.", isCorrect: false, distractorRationale: "O bombardeio de Guernica gerou comoção internacional imediata e tornou-se um dos símbolos universais contra o horror da guerra." }
    ],
    detailedExplanation: {
      summary: "A Espanha nos anos 1930 foi o campo de provas onde o fascismo internacional testou as armas, os bombardeiros Stuka e a crueldade que incendiariam o planeta na Segunda Guerra Mundial.",
      stepByStep: [
        "Passo 1: Reconhecer os lados em combate: de um lado, a Frente Popular Republicana (democratas, socialistas, anarquistas, comunistas); do outro, os falangistas fascistas do general Franco.",
        "Passo 2: Hitler e Mussolini enviaram tropas, tanques e caças bombardeiros de ponta para garantir a vitória do franquismo.",
        "Passo 3: A alternativa A explica com profundidade por que os historiadores chamam a Guerra Civil Espanhola de 'ensaio geral' da Segunda Guerra Mundial."
      ],
      coreConcept: "A tragédia de Guernica simboliza o terror aéreo moderno contra civis desarmados e a conivência inicial das democracias liberais perante a expansão nazifascista.",
      trapWarning: "Quando um oficial nazista viu o quadro 'Guernica' no ateliê de Picasso e perguntou 'Foi você quem fez isso?', Picasso respondeu com coragem: 'Não, foram vocês!'."
    },
    tags: ["guerra-civil-espanhola", "guernica", "picasso"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-HIS-025",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História Geral",
    subtopic: "A Queda do Apartheid na África do Sul e a Reconciliação",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Instituído formalmente em 1948 pelo Partido Nacional da minoria branca africâner, o regime do Apartheid na África do Sul legalizou a segregação racial absoluta: a maioria negra (mais de 75% da população) foi privada de direitos políticos, proibida de votar, forçada a viver em bairros segregados (townships como Soweto) e a portar cadernetas de passe para circular em áreas brancas. Após décadas de luta armada e desobediência civil lideradas pelo Congresso Nacional Africano (CNA) e de sanções comerciais globais, Nelson Mandela foi libertado em 1990 e eleito o primeiro presidente negro em eleições universais e multirraciais em 1994.",
      source: "MANDELA, Nelson. Longo Caminho para a Liberdade: uma autobiografia. Rio de Janeiro: Record, 1995."
    },
    prompt: "O fim do Apartheid e o processo de transição democrática sul-africano sob a liderança de Nelson Mandela e Desmond Tutu destacaram-se pelo pioneirismo de:",
    options: [
      { id: "a", text: "Instituir a Comissão da Verdade e Reconciliação, que priorizou o desvelamento público da verdade e a justiça restaurativa para curar as fraturas do ódio racial sem revanchismo genocida.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Promover a expulsão imediata de todos os descendentes de europeus do continente africano.", isCorrect: false, distractorRationale: "Mandela defendeu uma nação do arco-íris (Rainbow Nation) multirracial onde brancos, negros e indianos convivessem em paz e igualdade civil." },
      { id: "c", text: "Criar campos de trabalho forçado para aprisionar qualquer pessoa de fé cristã ou islâmica.", isCorrect: false, distractorRationale: "A transição garantiu ampla liberdade religiosa e direitos fundamentais a todas as confissões." },
      { id: "d", text: "Restaurar o modelo colonial britânico do século XIX com a coroação de reis ingleses no parlamento de Joanesburgo.", isCorrect: false, distractorRationale: "A África do Sul consolidou-se como república democrática constitucional soberana com sufrágio universal." },
      { id: "e", text: "Recusar a promulgação de uma nova Constituição e abolir as eleições presidenciais para sempre.", isCorrect: false, distractorRationale: "A África do Sul aprovou uma das Constituições mais progressistas do mundo em 1996, com ampla proteção a direitos humanos e contra preconceitos." }
    ],
    detailedExplanation: {
      summary: "A África do Sul evitou uma temida guerra civil racial sangrenta através da coragem ética de Nelson Mandela e do modelo da Comissão da Verdade e Reconciliação presidida pelo arcebispo Desmond Tutu.",
      stepByStep: [
        "Passo 1: Lembrar que o Apartheid foi o sistema institucional de racismo de Estado mais sofisticado e violento do pós-Segunda Guerra.",
        "Passo 2: Após 27 anos de prisão na Ilha Robben, Mandela saiu sem espírito de vingança cega: defendeu a 'Nação do Arco-Íris' onde todas as cores tivessem dignidade e voto.",
        "Passo 3: A Comissão da Verdade e Reconciliação ouviu vítimas e carrascos publicamente, garantindo que os crimes fossem confessados e documentados para que a história não se repita.",
        "Passo 4: A alternativa A define com rigor o legado da justiça restaurativa sul-africana para o mundo contemporâneo."
      ],
      coreConcept: "A superação do Apartheid e a experiência da Comissão da Verdade e Reconciliação comprovaram a potência da justiça de transição e dos direitos humanos no desmonte do racismo institucional.",
      trapWarning: "Nelson Mandela e o presidente branco Frederik de Klerk receberam conjuntamente o Prêmio Nobel da Paz em 1993 pelo sucesso da transição pacífica para a democracia universal."
    },
    tags: ["apartheid", "nelson-mandela", "justica-de-transicao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
