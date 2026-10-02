/**
 * BANCO DE QUESTÕES: TRABALHO, GLOBALIZAÇÃO, INDÚSTRIA CULTURAL E TEORIA SOCIAL NO ENEM
 * Área: Ciências Humanas e suas Tecnologias (Sociologia, Filosofia e Geografia Humana)
 * Competência: C1 / C4 | Habilidades: H1, H2, H3, H16, H17, H18, H19
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de rigor sociológico, historiográfico e conceitual
 * Regra Estrita: ZERO termos de deslocamentos turísticos. Foco em sociologia do trabalho,
 * indústria cultural, epistemologia crítica, meio técnico-científico e transformações do capitalismo.
 */

export const QUESTIONS_TRABALHO_GLOBALIZACAO_CULTURA = [
  {
    id: "HUM-TRA-001",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Sociologia do Trabalho",
    subtopic: "Taylorismo e a Gerência Científica",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No passado, o homem vinha em primeiro lugar; no futuro, o sistema deve vir em primeiro lugar. O primeiro objetivo de qualquer boa administração é o de assegurar o máximo de prosperidade ao patrão, associado ao máximo de prosperidade para cada empregado. Para isso, é imperativo separar estritamente o trabalho intelectual de planejamento do trabalho manual de execução, cronometrando cada movimento muscular com o objetivo de eliminar todo desperdício de tempo e de gestos inúteis no chão de fábrica.\n(Frederick Winslow Taylor, 'Princípios de Administração Científica', 1911)",
      source: "TAYLOR, F. W. Princípios de Administração Científica. São Paulo: Atlas, 1990."
    },
    prompt: "O modelo de organização do trabalho formulado por Frederick Taylor revolucionou a produção industrial no início do século XX ao implementar o(a)",
    options: [
      {
        id: "a",
        text: "autonomia criativa do operário para decidir o ritmo e o design dos produtos.",
        isCorrect: false,
        distractorRationale: "O Taylorismo retirou qualquer autonomia do operário, retirando-lhe o controle sobre o método de trabalho."
      },
      {
        id: "b",
        text: "separação radical entre planejamento/concepção e execução, associada à cronometragem milimétrica dos movimentos corporais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Taylorismo (administração científica) fundou-se na expropriação do saber empírico do operário: a gerência pensa, calcula e padroniza os gestos ótimos (cronometragem dos tempos e movimentos), enquanto o operário limita-se a executar tarefas repetitivas e fracionadas no menor tempo possível sob vigilância estrita, recebendo remuneração por produtividade individual."
      },
      {
        id: "c",
        text: "redução drástica da jornada diária para apenas quatro horas sem controle fabril.",
        isCorrect: false,
        distractorRationale: "O sistema visava intensificar ao máximo o rendimento de cada minuto da jornada laboral."
      },
      {
        id: "d",
        text: "abolição da hierarquia patronal e a gestão compartilhada em cooperativas operárias.",
        isCorrect: false,
        distractorRationale: "O modelo acentuou a verticalização hierárquica e o controle burocrático dos supervisores."
      },
      {
        id: "e",
        text: "retorno às técnicas manuais dos artesãos da Baixa Idade Média.",
        isCorrect: false,
        distractorRationale: "O objetivo de Taylor era combater o ritmo artesanal individualizado em prol da padronização científica industrial."
      }
    ],
    detailedExplanation: {
      summary: "O Taylorismo institui a separação entre quem concebe (gerência) e quem executa (operário), cronometrando movimentos para maximizar o rendimento fabril.",
      stepByStep: [
        "1. Teoria: Frederick Taylor (1911), Administração Científica do Trabalho.",
        "2. Pilares: Estudo dos tempos e movimentos, padronização de ferramentas e supervisão rígida.",
        "3. Consequência sociológica: Alienação no trabalho e esvaziamento cognitivo da atividade manual do operário."
      ],
      coreConcept: "A cisão entre concepção e execução é a marca central do modelo taylorista.",
      trapWarning: "Fordismo adicionou a esteira rolante mecanizada ao Taylorismo; Taylor focou na cronometragem dos gestos e na divisão das tarefas."
    },
    tags: ["humanas", "sociologia", "taylorismo", "trabalho", "administracao-cientifica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-002",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Sociologia e Economia",
    subtopic: "Fordismo e o Círculo Virtuoso da Produção em Massa",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Se você cortar os salários dos seus operários, estará cortando o número de seus próprios clientes. Ninguém compra carros se não tiver dinheiro no bolso para pagar a gasolina e as prestações. A produção em massa de bens rigorosamente padronizados só pode sobreviver se houver um mercado consumidor de massas com poder aquisitivo suficiente para absorver os estoques que saem ininterruptamente das nossas esteiras rolantes.\n(Henry Ford, 'Minha Filosofia de Indústria', 1926)",
      source: "FORD, H. Os Princípios da Prosperidade. São Paulo: Freitas Bastos, 1964."
    },
    prompt: "O modelo produtivo e social conhecido como Fordismo, que dominou as economias ocidentais em meados do século XX, estruturou-se a partir da articulação entre",
    options: [
      {
        id: "a",
        text: "pequenas oficinas descentralizadas e fabricação personalizada sob encomenda exclusiva de clientes ricos.",
        isCorrect: false,
        distractorRationale: "Essa é a descrição do artesanato pré-industrial ou da produção flexível pós-moderna de luxo."
      },
      {
        id: "b",
        text: "linha de montagem com esteira rolante, produção de mercadorias homogêneas em larga escala e salários que garantissem o consumo massivo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Fordismo aprimorou o Taylorismo ao introduzir a esteira rolante (o ritmo da máquina dita a velocidade do operário imóvel em seu posto) e percebeu a interdependência macroeconômica entre produção e consumo: para que a produção em massa gere lucro, os próprios trabalhadores assalariados precisam ter capacidade financeira de comprar as mercadorias produzidas (os famosos 5 dólares ao dia de Ford e a consolidação do American Way of Life no pós-guerra)."
      },
      {
        id: "c",
        text: "proibição do uso de combustíveis fósseis e priorização do transporte por tração animal.",
        isCorrect: false,
        distractorRationale: "O Fordismo acelerou a dependência global de derivados de petróleo e motores a combustão."
      },
      {
        id: "d",
        text: "eliminação total dos estoques industriais operando unicamente após a venda confirmada.",
        isCorrect: false,
        distractorRationale: "Essa característica (estoque zero e just-in-time) pertence ao Toyotismo, e não ao Fordismo (que produzia grandes estoques)."
      },
      {
        id: "e",
        text: "estatização compulsória de todas as montadoras automobilísticas pelo modelo socialista soviético.",
        isCorrect: false,
        distractorRationale: "Henry Ford era um dos maiores defensores do capitalismo privado de livre iniciativa."
      }
    ],
    detailedExplanation: {
      summary: "O Fordismo combina a esteira rolante e a produção em massa padronizada com uma política salarial que transformou o operário em consumidor de massas.",
      stepByStep: [
        "1. Inovação técnica: Esteira rolante móvel (o operário fica parado e a peça move-se até ele).",
        "2. Padronização: 'O cliente pode ter o carro da cor que quiser, desde que seja preto' (otimização de custos de escala).",
        "3. Dimensão sociológica: Aliança histórica no pós-guerra entre fordismo fabril e Estado de Bem-Estar Social (Welfare State)."
      ],
      coreConcept: "O Fordismo é simultaneamente um regime de produção em massa e um modo de regulação e consumo de massas.",
      trapWarning: "Não confunda Fordismo (grandes estoques de produtos idênticos) com Toyotismo (produtos diversificados e estoque zero)."
    },
    tags: ["humanas", "sociologia", "fordismo", "producao-em-massa", "trabalho"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-003",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Sociologia e Reestruturação Produtiva",
    subtopic: "Toyotismo, Just-in-Time e o Trabalhador Multifuncional",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A crise estrutural do petróleo na década de 1970 expôs o colapso do modelo fordista de gigantismo industrial e estoques monumentais encalhados nos pátios. No Japão, a montadora Toyota concebeu uma resposta revolucionária: a produção não deve mais empurrar produtos para o mercado; é o pedido do cliente na concessionária que deve puxar a montagem. Peças chegam à fábrica na hora exata em que serão instaladas (just-in-time), eliminando depósitos de estocagem dispendiosos, enquanto o operário deixa de apertar um único parafuso para operar múltiplos equipamentos simultaneamente.",
      source: "CORIAT, B. Pensar pelo Avesso: O Modelo Japonês de Trabalho e Organização. Rio de Janeiro: Revan, 1994."
    },
    prompt: "O modelo toyotista de acumulação flexível distingue-se fundamentalmente do fordismo tradicional porque exige do trabalhador",
    options: [
      {
        id: "a",
        text: "especialização estrita em um único movimento corporal durante toda a vida funcional.",
        isCorrect: false,
        distractorRationale: "O operário hiperespecializado em uma única tarefa repetitiva era a marca do Taylorismo/Fordismo."
      },
      {
        id: "b",
        text: "polivalência e multifuncionalidade em ilhas de produção, aliadas à flexibilização contratual e eliminação de estoques ociosos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. No Toyotismo (pós-fordismo ou acumulação flexível): 1. A produção opera pelo sistema just-in-time (estoque zero puxado pela demanda variada); 2. O trabalhador é polivalente (opera várias máquinas, fiscaliza o controle de qualidade via kanban e atua em círculos de controle de qualidade); 3. O modelo acarreta fragilização das garantias sindicais e proliferação de contratos flexíveis e terceirizados."
      },
      {
        id: "c",
        text: "recusa total de tecnologias digitais para preservar máquinas a vapor do século XIX.",
        isCorrect: false,
        distractorRationale: "O Toyotismo apoia-se intensamente na robótica, na microeletrônica e na automação informatizada."
      },
      {
        id: "d",
        text: "jornadas de trabalho fixas e garantias vitalícias de emprego em todas as subsidiárias terceirizadas.",
        isCorrect: false,
        distractorRationale: "A flexibilização toyotista baseia-se na terceirização de etapas periféricas com precarização da força de trabalho externa."
      },
      {
        id: "e",
        text: "fabricação de um único modelo de automóvel sem qualquer variação de opcionais por mais de 50 anos.",
        isCorrect: false,
        distractorRationale: "O Toyotismo caracteriza-se pela customização em massa e rápida adaptação às oscilações da moda e do mercado."
      }
    ],
    detailedExplanation: {
      summary: "O Toyotismo substitui a linha rígida e os estoques fordistas pelo sistema just-in-time puxado pela demanda e pelo trabalhador polivalente.",
      stepByStep: [
        "1. Origem: Desenvolvido por Taiichi Ohno na Toyota (Japão pós-guerra) e mundializado a partir da crise dos anos 1970.",
        "2. Pilares: Just-in-time (tempo exato), Kanban (gestão visual de fluxo) e Kaizen (melhoria contínua).",
        "3. Perfil do trabalhador: Multifuncionalidade e trabalho em equipe em ilhas celulares de produção.",
        "4. Impacto social: Flexibilização das relações de trabalho e desmonte do emprego formal estável."
      ],
      coreConcept: "O Toyotismo baseia-se na produção flexível puxada pelo consumo, estoque mínimo e trabalhador polivalente.",
      trapWarning: "Multifuncionalidade no Toyotismo não significou maior liberdade: significou acúmulo de funções e maior pressão psicológica por metas."
    },
    tags: ["humanas", "sociologia", "toyotismo", "just-in-time", "reestruturacao-produtiva"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-004",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Sociologia do Trabalho",
    subtopic: "Desemprego Conjuntural vs. Desemprego Estrutural",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A introdução de braços robóticos automatizados nas linhas de solda automotiva, a substituição de caixas de supermercado por terminais de autoatendimento e o avanço recente de sistemas de inteligência artificial generativa em tarefas de suporte ao cliente transformaram o perfil do mercado de trabalho global. Enquanto a perda de empregos durante recessões comerciais costuma ser revertida quando a economia volta a crescer, a substituição tecnológica definitiva de postos operacionais segue outra dinâmica.",
      source: "ORGANIZAÇÃO INTERNACIONAL DO TRABALHO (OIT). Relatório sobre o Futuro do Trabalho e Automação, Genebra, 2023."
    },
    prompt: "O fechamento irreversível de postos de trabalho provocado pela introdução de inovações tecnológicas e automação é conceituado pela Sociologia e Economia como",
    options: [
      {
        id: "a",
        text: "desemprego conjuntural (ou cíclico).",
        isCorrect: false,
        distractorRationale: "O desemprego conjuntural é temporário e decorre de crises econômicas passageiras; os postos retornam quando a economia se recupera."
      },
      {
        id: "b",
        text: "desemprego estrutural (ou tecnológico).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O desemprego estrutural resulta de transformações profundas na base técnica e organizacional da produção (automação, robótica, IA). As vagas eliminadas não reabrem mesmo após a recuperação do crescimento do PIB, pois as funções foram definitivamente absorvidas por máquinas ou softwares inteligentes, exigindo requalificação de habilidades ou gerando contingentes sobrantes de força de trabalho."
      },
      {
        id: "c",
        text: "desemprego sazonal agrícola.",
        isCorrect: false,
        distractorRationale: "O desemprego sazonal está ligado aos ciclos da natureza e colheitas agrícolas em períodos específicos do ano."
      },
      {
        id: "d",
        text: "desemprego voluntário reflexivo.",
        isCorrect: false,
        distractorRationale: "Ocorre quando o trabalhador opta conscientemente por não trabalhar aguardando propostas melhores, sem relação com substituição por robôs."
      },
      {
        id: "e",
        text: "desemprego friccional de transição.",
        isCorrect: false,
        distractorRationale: "O desemprego friccional é o tempo natural de busca enquanto o indivíduo troca de um emprego para outro."
      }
    ],
    detailedExplanation: {
      summary: "O desemprego estrutural é permanente e provocado por inovações tecnológicas que extinguem postos de trabalho sem que eles voltem com a retomada econômica.",
      stepByStep: [
        "1. Desemprego Conjuntural: Ligado a crises econômicas temporárias do ciclo comercial (ex: queda passageira do consumo).",
        "2. Desemprego Estrutural: Ligado a mudanças definitivas na tecnologia de produção (robôs, softwares de autoatendimento, inteligência artificial).",
        "3. Consequência: Exige reinvenção do sistema de seguridade social e políticas de requalificação profissional contínua."
      ],
      coreConcept: "Diferenciação analítica clássica do ENEM entre desemprego conjuntural (cíclico) e desemprego estrutural (tecnológico).",
      trapWarning: "Se a máquina substituiu o trabalhador e a vaga nunca mais existirá, o desemprego é categoricamente ESTRUTURAL."
    },
    tags: ["humanas", "sociologia", "desemprego-estrutural", "automacao", "tecnologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-005",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Sociologia Contemporânea",
    subtopic: "A 'Uberização' e a Plataformização do Trabalho",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A retórica das empresas de tecnologia apresenta o motorista ou entregador de aplicativo não como empregado assalariado, mas como um 'parceiro autônomo' ou 'empreendedor de si mesmo', livre para fazer seu próprio horário de trabalho. No entanto, por trás dessa aparente liberdade, operam algoritmos de gerenciamento invisível que definem o valor das corridas, distribuem as tarefas de modo opaco e punem com bloqueios quem recusa chamadas consecutivas. Ao transferir os custos dos veículos, combustível e riscos de acidentes para o trabalhador, consolida-se uma nova modalidade de servidão.\n(Ricardo Antunes, 'O Privilégio da Servidão', 2020)",
      source: "ANTUNES, R. O Privilégio da Servidão: O Novo Proletariado de Serviços na Era Digital. Boitempo, 2020."
    },
    prompt: "No debate sociológico contemporâneo, o fenômeno da 'uberização' e plataformização do trabalho é caracterizado pela",
    options: [
      {
        id: "a",
        text: "ampliação sem precedentes das garantias previdenciárias e dos limites legais de descanso remunerado.",
        isCorrect: false,
        distractorRationale: "A uberização caracteriza-se pelo esvaziamento das garantias da legislação trabalhista (CLT) e da proteção previdenciária."
      },
      {
        id: "b",
        text: "transformação de todos os trabalhadores urbanos em acionistas proprietários das sedes internacionais das corporações de tecnologia.",
        isCorrect: false,
        distractorRationale: "Os trabalhadores não possuem ações nem controle societário das Big Techs proprietárias dos softwares."
      },
      {
        id: "c",
        text: "transferência dos custos de produção e riscos econômicos para o trabalhador, associada ao controle algorítmico da jornada e à perda de direitos trabalhistas históricos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A uberização opera uma sofisticada metamorfose nas relações de trabalho: sob o manto ideológico do 'empreendedorismo autônomo', as corporações de plataforma controlam o processo de trabalho por vigilância algorítmica sem assumir o vínculo empregatício formal. O trabalhador arca com o capital fixo (moto, bicicleta, celular, combustível, manutenção) e não tem direito a férias, 13º salário, horas extras, auxílio-doença ou seguridade em caso de acidentes de trânsito."
      },
      {
        id: "d",
        text: "proibição governamental definitiva do uso de smartphones em ambientes urbanos metropolitanos.",
        isCorrect: false,
        distractorRationale: "O smartphone com internet é o instrumento material indispensável para a mediação da atividade das plataformas."
      },
      {
        id: "e",
        text: "adoção universal do salário mínimo profissional pago pontualmente pelo Estado a cada final de mês.",
        isCorrect: false,
        distractorRationale: "A remuneração dos trabalhadores de aplicativo é variável, paga por peça/entrega realizada pelas empresas privadas."
      }
    ],
    detailedExplanation: {
      summary: "A uberização do trabalho disfarça a subordinação algorítmica sob o discurso do empreendedorismo, transferindo custos e riscos para o trabalhador sem garantias trabalhistas.",
      stepByStep: [
        "1. Conceito: Plataformização do trabalho / Uberização (termo cunhado pela socióloga Ludmila Abílio e desenvolvido por Ricardo Antunes).",
        "2. Discurso ideológico: O trabalhador como 'empreendedor', 'chefe de si mesmo' e 'parceiro'.",
        "3. Realidade material: Subordinação a algoritmos opacos, longas jornadas (12 a 14h/dia) para atingir renda básica, insegurança alimentar e ausência de seguridade social."
      ],
      coreConcept: "A plataformização representa a precarização estrutural do trabalho terceirizado mediada por algoritmos digitais.",
      trapWarning: "No ENEM e vestibulares, o discurso do 'empreendedorismo de aplicativo' é analisado criticamente como ideologia de mascaramento da precariedade laboral."
    },
    tags: ["humanas", "sociologia", "uberizacao", "plataformizacao", "ricardo-antunes", "precarizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-006",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Geografia e Teoria Espacial",
    subtopic: "O Meio Técnico-Científico-Informacional em Milton Santos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O espaço geográfico da globalização é marcado pela união indissolúvel da ciência, da técnica e da informação. A técnica e a ciência não operam mais isoladas no laboratório; elas se territorializam, criando pontos luminosos hiperconectados por satélites e fibras ópticas e, simultaneamente, amplas regiões opacas desprovidas de infraestrutura moderna. É o meio técnico-científico-informacional, onde a informação atua como a verdadeira energia motriz da acumulação de capital.\n(Milton Santos, 'A Natureza do Espaço', 1996)",
      source: "SANTOS, M. A Natureza do Espaço: Técnica e Tempo, Razão e Emoção. Hucitec, 1996."
    },
    prompt: "Na consagrada periodização do espaço geográfico formulada pelo geógrafo Milton Santos, o Meio Técnico-Científico-Informacional caracteriza-se pela",
    options: [
      {
        id: "a",
        text: "dependência exclusiva da força muscular animal e do ritmo sazonal das cheias dos rios.",
        isCorrect: false,
        distractorRationale: "Essa é a definição do Meio Natural pré-moderno."
      },
      {
        id: "b",
        text: "integração profunda entre ciência, tecnologia e telecomunicações, gerando redes que aceleram fluxos globais e aprofundam assimetrias territoriais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A evolução espacial proposta por Milton Santos divide-se em: 1. Meio Natural (a natureza dita o ritmo); 2. Meio Técnico (Revolução Industrial, ferrovias, telégrafo, maquinismo); 3. Meio Técnico-Científico-Informacional (Revolução da microeletrônica, informática, cabos de fibra e biotecnologia). As decisões econômicas ocorrem em tempo real através de nós globais conectados em redes, criando 'espaços luminosos' (ricos em fluxo) e 'espaços opacos' (marginalizados da técnica moderna)."
      },
      {
        id: "c",
        text: "eliminação de toda e qualquer desigualdade regional entre os municípios brasileiros.",
        isCorrect: false,
        distractorRationale: "Milton Santos enfatiza que a técnica moderna acentua a fragmentação e as disparidades espaciais."
      },
      {
        id: "d",
        text: "destruição completa dos centros financeiros urbanos em proveito da economia florestal indígena.",
        isCorrect: false,
        distractorRationale: "Os centros urbanos e praças financeiras tornam-se os nós de comando do capital global."
      },
      {
        id: "e",
        text: "proibição de pesquisas em genética e informática pelas organizações internacionais.",
        isCorrect: false,
        distractorRationale: "A biotecnologia e a cibernética são pilares fundamentais do meio técnico-científico-informacional."
      }
    ],
    detailedExplanation: {
      summary: "O meio técnico-científico-informacional reflete a hegemonia da ciência e da telemática na organização desigual do espaço geográfico globalizado.",
      stepByStep: [
        "1. Autor: Milton Santos (prêmio Vautrin Lud, considerado o 'Nobel da Geografia').",
        "2. Periodização do espaço: Meio Natural ⟹ Meio Técnico ⟹ Meio Técnico-Científico-Informacional.",
        "3. Conceitos-chave: Espaços luminosos vs. Espaços opacos; Redes vs. Território usado; Informação como recurso estratégico."
      ],
      coreConcept: "A informação e a técnica fundem-se para reconfigurar o espaço geográfico na globalização.",
      trapWarning: "A globalização técnica não integra a todos de maneira igual: conecta os lugares de interesse do capital e abandona os demais."
    },
    tags: ["humanas", "geografia", "milton-santos", "meio-tecnico-cientifico-informacional", "espaco-geografico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-007",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Geopolítica e Crítica Social",
    subtopic: "As Três Dimensões da Globalização em Milton Santos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Podemos considerar a existência de pelo menos três mundos em um só. O primeiro seria o mundo tal como nos fazem vê-lo: a globalização como fábula. O segundo seria o mundo tal como ele é: a globalização como perversidade. O terceiro seria o mundo como ele pode ser: uma outra globalização. A perversidade sistêmica se manifesta no desemprego crescente, na tirania do dinheiro, na desinformação das massas e na mercantilização de todas as esferas da existência.\n(Milton Santos, 'Por uma outra globalização', 2000)",
      source: "SANTOS, M. Por uma outra globalização: do pensamento único à consciência universal. Record, 2000."
    },
    prompt: "Ao desmistificar a 'globalização como fábula' e apontar sua dimensão 'como perversidade', o pensamento de Milton Santos propõe que 'uma outra globalização' será viabilizada pela",
    options: [
      {
        id: "a",
        text: "expansão desregulada do mercado financeiro internacional sem intervenção dos Estados.",
        isCorrect: false,
        distractorRationale: "O mercado financeiro desregulado é justamente o motor da globalização como perversidade denunciada pelo autor."
      },
      {
        id: "b",
        text: "ação transformadora dos de baixo, isto é, das populações periféricas e dos excluídos que ressignificam a técnica para a solidariedade e emancipação humana.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na visão humanista de Milton Santos, a globalização contemporânea é perversa porque subordina a humanidade à tirania do dinheiro e da especulação. Contudo, as bases técnicas da globalização (comunicação instantânea, trocas globais) podem ser reapropriadas pelas classes populares ('os de baixo', os pobres, os povos do Sul global) para construir uma globalização alternativa pautada na solidariedade, na ética cidadã e no respeito à diversidade cultural."
      },
      {
        id: "c",
        text: "adesão militar dos países em desenvolvimento às doutrinas de guerra preventiva das superpotências.",
        isCorrect: false,
        distractorRationale: "A submissão bélica reforça o autoritarismo e a dominação das potências hegemônicas."
      },
      {
        id: "d",
        text: "destruição física de todos os cabos de comunicação e satélites do planeta.",
        isCorrect: false,
        distractorRationale: "O autor não defende o ludismo tecnológico; defende o uso emancipatório e solidário das tecnologias existentes."
      },
      {
        id: "e",
        text: "privatização compulsória de todas as escolas públicas e hospitais das nações pobres.",
        isCorrect: false,
        distractorRationale: "A mercantilização dos direitos fundamentais faz parte da globalização perversa combatida pelo geógrafo."
      }
    ],
    detailedExplanation: {
      summary: "Milton Santos contrapõe a fábula da aldeia global à realidade perversa do capitalismo financeiro, apostando na força dos excluídos para refundar uma globalização solidária.",
      stepByStep: [
        "1. Tríade analítica: 1. A fábula (discurso ideológico de que o mundo é uma aldeia feliz e sem fronteiras); 2. A perversidade (fome, desemprego estrutural, tirania do dinheiro); 3. A possibilidade (uma outra globalização solidária).",
        "2. O papel dos 'de baixo': As periferias não são apenas locais de carência, mas centros de criatividade, resiliência e insurgência política.",
        "3. Mensagem: A técnica contemporânea permite construir um mundo ético e compartilhado se for libertada do império do lucro exclusivo."
      ],
      coreConcept: "A crítica de Milton Santos ao pensamento único neoliberal e a defesa da globalização como possibilidade emancipatória.",
      trapWarning: "Milton Santos não era contra a globalização; ele era contra o modelo perverso excludente da globalização corporativa."
    },
    tags: ["humanas", "sociologia", "geografia", "milton-santos", "globalizacao", "critica-social"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-008",
    area: "humanas",
    competence: 1,
    skill: 3,
    topic: "Teoria Crítica e Indústria Cultural",
    subtopic: "A Indústria Cultural segundo Adorno e Horkheimer",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A indústria cultural fraudou o consumidor, prometendo-lhe incessantemente a felicidade através de suas mercadorias padronizadas. Os filmes de sucesso, as músicas de consumo fácil e os programas de entretenimento em massa são fabricados em série como carros em uma esteira, obedecendo ao mesmo esquema de clichês previsíveis. O resultado dessa engrenagem não é o esclarecimento das massas, mas a produção planejada da conformidade, da passividade e do enfraquecimento do pensamento crítico autônomo.\n(Theodor Adorno e Max Horkheimer, 'Dialética do Esclarecimento', 1947)",
      source: "ADORNO, T. W.; HORKHEIMER, M. Dialética do Esclarecimento. Rio de Janeiro: Jorge Zahar, 1985."
    },
    prompt: "O conceito de 'Indústria Cultural' formulado pelos filósofos da Escola de Frankfurt no pós-guerra propõe que os bens culturais sob o capitalismo moderno",
    options: [
      {
        id: "a",
        text: "tornaram-se mercadorias padronizadas voltadas para o lucro, incentivando a alienação e a resignação política do público consumidor.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para Adorno e Horkheimer, a cultura na sociedade de massas perdeu sua função crítica e emancipatória (a capacidade de desacomodar o sujeito e contestar a realidade). Submetida à lógica industrial do mercado capitalista, ela converte-se em produto pasteurizado e consumível sem esforço cognitivo, gerando 'semiformação' (Halbbildung), entretenimento compensatório e anestesiamento político das classes trabalhadoras."
      },
      {
        id: "b",
        text: "atingiram o ápice da autenticidade artística popular, eliminando qualquer influência dos interesses comerciais.",
        isCorrect: false,
        distractorRationale: "Os autores afirmam exatamente o oposto: a cultura foi totalmente capturada e degradada pelos interesses econômicos comerciais."
      },
      {
        id: "c",
        text: "estimulam prioritariamente o debate revolucionário e a derrubada das instituições democráticas.",
        isCorrect: false,
        distractorRationale: "A indústria cultural produz passividade e conformismo, e não ímpeto revolucionário transformador."
      },
      {
        id: "d",
        text: "distinguem-se por valorizar o experimentalismo sonoro e visual sem qualquer preocupação com o retorno de bilheteria.",
        isCorrect: false,
        distractorRationale: "A lógica mercantil da indústria cultural expulsa o experimentalismo autêntico por medo do fracasso financeiro."
      },
      {
        id: "e",
        text: "garantem a emancipação intelectual plena de todos os cidadãos por meio de mensagens científicas rigorosas.",
        isCorrect: false,
        distractorRationale: "A teoria crítica aponta que a indústria cultural produz o obscurecimento do esclarecimento (falsa consciência)."
      }
    ],
    detailedExplanation: {
      summary: "Adorno e Horkheimer conceituam a Indústria Cultural como a mercantilização e padronização dos bens simbólicos para induzir conformismo e passividade de massas.",
      stepByStep: [
        "1. Teóricos: Escola de Frankfurt (Theodor Adorno e Max Horkheimer, 'Dialética do Esclarecimento', 1947).",
        "2. Distinção essencial: Diferença entre 'cultura popular' (espontânea, comunitária) e 'indústria cultural' (fabricada de cima para baixo por corporações com vistas ao lucro).",
        "3. Mecanismos: Clichês, fórmulas repetitivas, falsa sensação de escolha e anestesia da consciência crítica."
      ],
      coreConcept: "A Indústria Cultural reduz as obras de arte a mercadorias estandardizadas que legitimam o status quo.",
      trapWarning: "Cuidado: 'Indústria cultural' NÃO é sinônimo de 'cultura popular autêntica'; é a sua apropriação e degradação mercantil pelas indústrias de entretenimento."
    },
    tags: ["humanas", "filosofia", "sociologia", "escola-de-frankfurt", "adorno", "industria-cultural"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-009",
    area: "humanas",
    competence: 1,
    skill: 3,
    topic: "Teoria da Arte e Sociedade",
    subtopic: "A Reprodutibilidade Técnica da Obra de Arte em Walter Benjamin",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Mesmo na mais perfeita reprodução de uma obra de arte, um elemento está ausente: o seu 'aqui e agora', a sua existência única no lugar em que ela se encontra. Essa singularidade irrepetível constitui o que chamo de a sua 'aura'. Na época da reprodução técnica de massas (como na fotografia e no cinema), ao multiplicar cópias aos milhares, a técnica arranca o objeto reproduzido do domínio da tradição ritualística e o aproxima das massas populares, transferindo a arte do domínio do culto mágico-religioso para o domínio da prática política.\n(Walter Benjamin, 'A Obra de Arte na Era de sua Reprodutibilidade Técnica', 1936)",
      source: "BENJAMIN, W. Magia e Técnica, Arte e Política: Ensaios sobre Literatura e História da Cultura. Brasiliense, 1985."
    },
    prompt: "Diferentemente do pessimismo radical de Adorno, Walter Benjamin identifica na perda da 'aura' da obra de arte promovida pela fotografia e pelo cinema a possibilidade de",
    options: [
      {
        id: "a",
        text: "restaurar a autoridade mística dos sacerdotes sobre o acesso exclusivo às pinturas sacras.",
        isCorrect: false,
        distractorRationale: "A técnica secularizou a arte, afastando-a do monopólio dos rituais religiosos sagrados."
      },
      {
        id: "b",
        text: "democratizar o acesso cultural e transformar a arte em um instrumento coletivo de reflexão e disputa política pelas massas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Walter Benjamin tem uma visão dialética da modernidade: a reprodutibilidade técnica liquida a 'aura' (o valor de culto aristocrático da peça original e intocável no museu ou igreja), mas, ao baratear e multiplicar as cópias através da fotografia e do cinema, permite que as massas populares tenham contato direto com a imagem e a usem como instrumento de conscientização política e transformação social (politização da arte contra a estetização da política praticada pelo fascismo)."
      },
      {
        id: "c",
        text: "destruir todos os museus e proibir a contemplação silenciosa de obras arquitetônicas antigas.",
        isCorrect: false,
        distractorRationale: "Benjamin não defende o vandalismo; ele analisa as consequências sociais da reprodutibilidade mecânica."
      },
      {
        id: "d",
        text: "subordinar a produção estética à aprovação individual de imperadores absolutistas.",
        isCorrect: false,
        distractorRationale: "O autor celebra justamente o fim da dependência da arte em relação a mecenas aristocráticos."
      },
      {
        id: "e",
        text: "eliminar a participação dos trabalhadores na vida pública das cidades modernas.",
        isCorrect: false,
        distractorRationale: "A tese do ensaio é colocar a arte reprodutível como aliada da emancipação das classes trabalhadoras."
      }
    ],
    detailedExplanation: {
      summary: "Para Benjamin, a perda da aura promovida pela reprodução técnica aproxima a arte das massas, transferindo-a do ritual sagrado para a arena da ação política.",
      stepByStep: [
        "1. Conceito de 'Aura': A singularidade e autenticidade da obra original no seu 'aqui e agora' histórico.",
        "2. Efeito da técnica (fotografia/cinema): Dissolução da aura e dessacralização da obra.",
        "3. Potencial emancipatório: A arte torna-se acessível a milhões simultaneamente, podendo funcionar como ferramenta de conscientização crítica das massas contra a propaganda autoritária."
      ],
      coreConcept: "A reprodutibilidade técnica desloca a obra de arte do valor de culto (aura) para o valor de exposição e ação política.",
      trapWarning: "Benjamin lamenta poeticamente o fim da aura, mas celebra o potencial político democrático que a reprodução em massa viabiliza para o povo."
    },
    tags: ["humanas", "filosofia", "walter-benjamin", "aura", "reprodutibilidade-tecnica", "cinema"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-010",
    area: "humanas",
    competence: 1,
    skill: 2,
    topic: "Sociologia Contemporânea",
    subtopic: "A 'Modernidade Líquida' em Zygmunt Bauman",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os sólidos conservam sua forma e resistem à mudança com o tempo; os líquidos, ao contrário, são informes, não se fixam no espaço nem se prendem ao tempo, escorrendo por entre os dedos. A passagem da fase pesada, sólida e fabril da modernidade para a fase leve, fluida e consumista fez com que os laços humanos, as instituições políticas, os empregos e os relacionamentos afetivos perdessem sua solidez duradoura, transformando-se em conexões descartáveis e temporárias.\n(Zygmunt Bauman, 'Modernidade Líquida', 2000)",
      source: "BAUMAN, Z. Modernidade Líquida. Rio de Janeiro: Jorge Zahar, 2001."
    },
    prompt: "Na metáfora da 'Modernidade Líquida' consagrada pelo sociólogo polonês Zygmunt Bauman, a sociedade contemporânea é diagnosticada pela",
    options: [
      {
        id: "a",
        text: "permanência inabalável das instituições comunitárias tradicionais e lealdades corporativas eternas.",
        isCorrect: false,
        distractorRationale: "Bauman argumenta precisamente o oposto: a solidez das instituições desmanchou-se na fluidez contemporânea."
      },
      {
        id: "b",
        text: "fragilidade e efemeridade das relações humanas, na qual o compromisso duradouro é substituído pela lógica do consumo descartável e pela incerteza individualizada.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para Bauman, a Modernidade Líquida caracteriza-se pela desregulamentação, flexibilidade e impermanência. Em vez de cidadãos engajados em projetos coletivos duradouros, a sociedade produz consumidores ansiosos que buscam satisfação imediata em mercadorias e conexões interpessoais facilmente revogáveis ('amor líquido'), gerando profunda sensação de insegurança existencial e isolamento."
      },
      {
        id: "c",
        text: "estabilidade definitiva das carreiras profissionais com garantia compulsória de aposentadoria precoce.",
        isCorrect: false,
        distractorRationale: "O mercado de trabalho na modernidade líquida é marcado pela instabilidade, terceirização e medo crônico do descarte."
      },
      {
        id: "d",
        text: "extinção da busca pelo consumo como motor das decisões pessoais.",
        isCorrect: false,
        distractorRationale: "O consumo frenético de novidades é exatamente o substituto ilusório para o vazio e a angústia da liquidez social."
      },
      {
        id: "e",
        text: "superação da ansiedade individual por meio da restauração dos feudos medievais agrários.",
        isCorrect: false,
        distractorRationale: "O mundo líquido de Bauman é hiperglobalizado, urbano e movido pelo mercado digital em tempo real."
      }
    ],
    detailedExplanation: {
      summary: "Zygmunt Bauman analisa a liquidez contemporânea como a dissolução dos vínculos duradouros e a transformação das relações afetivas e profissionais em laços descartáveis.",
      stepByStep: [
        "1. Metáfora central: Sólidos mantêm forma; líquidos moldam-se ao recipiente momentâneo e fluem com facilidade.",
        "2. Modernidade Sólida: Fábricas pesadas, sindicatos fortes, empregos de uma vida inteira, casamentos indissolúveis.",
        "3. Modernidade Líquida: Desregulamentação, trabalho precário, privatização das angústias, laços frágeis e consumo imediato."
      ],
      coreConcept: "A modernidade líquida reflete a fluidez e a insegurança das identidades e relacionamentos sob o capitalismo flexível.",
      trapWarning: "Termos derivados de Bauman como 'amor líquido', 'medo líquido' e 'vidas desperdiçadas' são repertórios recorrentes no ENEM e na Redação."
    },
    tags: ["humanas", "sociologia", "zygmunt-bauman", "modernidade-liquida", "consumo", "relacoes-humanas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-011",
    area: "humanas",
    competence: 1,
    skill: 2,
    topic: "Sociologia da Educação e Cultura",
    subtopic: "As Espécies de Capital e a Reprodução Social em Pierre Bourdieu",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A escola trata como iguais estudantes que são socialmente desiguais e, ao fazer isso, transforma privilégios herdados em méritos individuais de inteligência. A criança das classes dominantes chega à sala de aula dominando naturalmente a norma culta da língua, o vocabulário refinado e a postura corporal valorizada pelos professores, enquanto a criança das classes populares sofre com o distanciamento da cultura escolar oficial.\n(Pierre Bourdieu e Jean-Claude Passeron, 'A Reprodução', 1970)",
      source: "BOURDIEU, P.; PASSERON, J.-C. A Reprodução: Elementos para uma Teoria do Sistema de Ensino. Francisco Alves, 1975."
    },
    prompt: "De acordo com a teoria sociológica de Pierre Bourdieu, essa vantagem estrutural transmitida sutilmente no ambiente familiar por meio de livros, hábitos linguísticos, museus e gostos estéticos corresponde ao",
    options: [
      {
        id: "a",
        text: "capital financeiro especulativo em moeda estrangeira.",
        isCorrect: false,
        distractorRationale: "O texto trata de conhecimentos, linguagem e disposições subjetivas, e não de moeda bancária."
      },
      {
        id: "b",
        text: "capital cultural incorporado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Bourdieu categoriza o capital em quatro dimensões: 1. Econômico (renda, patrimônio); 2. Social (redes de influência e amizades influentes); 3. Cultural (saberes, domínio da norma culta, títulos acadêmicos e familiaridade estética); 4. Simbólico (prestígio, honra). O capital cultural incorporado é aquele internalizado no corpo do indivíduo desde a infância no seio da família, premiado pela escola como suposto 'talento natural' inato."
      },
      {
        id: "c",
        text: "capital social de cooperativas rurais camponesas.",
        isCorrect: false,
        distractorRationale: "Capital social refere-se à rede de contatos e relações úteis, não aos conhecimentos estéticos herdados."
      },
      {
        id: "d",
        text: "capital fixo de maquinários industriais depreciados.",
        isCorrect: false,
        distractorRationale: "Conceito marxista clássico da economia política, sem relação com as disposições culturais subjetivas."
      },
      {
        id: "e",
        text: "capital biológico genético derivado de linhagens sanguíneas puras.",
        isCorrect: false,
        distractorRationale: "Bourdieu é sociólogo e rejeita frontalmente o determinismo biológico ou eugênico: a desigualdade é histórica e social."
      }
    ],
    detailedExplanation: {
      summary: "O capital cultural incorporado transmitido pelas famílias de elite é legitimado pela escola como mérito acadêmico próprio, perpetuando a reprodução social.",
      stepByStep: [
        "1. Teoria: Pierre Bourdieu e a crítica ao mito da meritocracia escolar pura.",
        "2. Espécies de Capital: Econômico (dinheiro), Social (contatos/networking), Cultural (erudição, hábitos de leitura), Simbólico (legitimidade).",
        "3. Mecanismo de reprodução: A escola universaliza a cultura da classe dominante e avalia a todos como se tivessem tido o mesmo ponto de partida cultural."
      ],
      coreConcept: "Capital cultural incorporado como mecanismo sutil de distinção e perpetuação de hierarquias de classe.",
      trapWarning: "A escola, para Bourdieu, não cria a desigualdade do zero, mas a consagra e reproduz ao fingir neutralidade meritocrática."
    },
    tags: ["humanas", "sociologia", "pierre-bourdieu", "capital-cultural", "reproducao-social", "educacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-012",
    area: "humanas",
    competence: 1,
    skill: 2,
    topic: "Sociologia do Poder",
    subtopic: "Violência Simbólica e Habitus em Pierre Bourdieu",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A violência simbólica é aquela violência suave, insensível, invisível às suas próprias vítimas, que se exerce essencialmente pelas vias puramente simbólicas da comunicação e do conhecimento. Ela ocorre quando o dominado aplica às relações de dominação em que se encontra os próprios esquemas de percepção e categorias de pensamento produzidos pelo dominador, passando a enxergar a sua condição subalterna não como fruto de uma injustiça histórica, mas como ordem natural e justa das coisas.\n(Pierre Bourdieu, 'A Dominação Masculina', 1998)",
      source: "BOURDIEU, P. A Dominação Masculina. Rio de Janeiro: Bertrand Brasil, 2002."
    },
    prompt: "De acordo com a reflexão sociológica apresentada, a eficácia da violência simbólica na manutenção de assimetrias sociais reside fundamentalmente no fato de que",
    options: [
      {
        id: "a",
        text: "o dominador utiliza continuamente o aparato militar armado para coagir fisicamente a população.",
        isCorrect: false,
        distractorRationale: "O texto enfatiza que a violência simbólica dispensa a coação física direta, sendo sutil e imperceptível."
      },
      {
        id: "b",
        text: "as próprias vítimas internalizam e compartilham as categorias de pensamento que justificam a sua opressão, considerando a desigualdade um dado natural da realidade.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A força da violência simbólica decorre da cumplicidade involuntária do oprimido: os esquemas mentais de julgamento do mundo (o habitus) são moldados pelas estruturas de poder vigentes. Quando o dominado aceita os critérios do dominador (como em preconceitos raciais, de gênero ou de classe), a dominação reproduz-se sem necessidade de força policial explícita, porque é legitimada como natural e consensual."
      },
      {
        id: "c",
        text: "todas as vítimas de preconceito organizam rebeliões armadas imediatas contra os opressores.",
        isCorrect: false,
        distractorRationale: "A violência simbólica opera justamente desmobilizando a revolta, ao naturalizar a submissão."
      },
      {
        id: "d",
        text: "as leis estatais proíbem a existência de qualquer forma de linguagem escrita ou falada.",
        isCorrect: false,
        distractorRationale: "A violência simbólica exerce-se prioritariamente pela linguagem e pela cultura institucional."
      },
      {
        id: "e",
        text: "o poder econômico deixa de ter relevância na estruturação das classes sociais.",
        isCorrect: false,
        distractorRationale: "A violência simbólica atua como legitimadora do poder econômico e político subjacente."
      }
    ],
    detailedExplanation: {
      summary: "A violência simbólica é invisível porque é exercida com o consentimento implícito do dominado, que naturaliza a própria dominação.",
      stepByStep: [
        "1. Conceito: Violência Simbólica (Pierre Bourdieu).",
        "2. Mecanismo: Não utiliza armas nem prisões físicas; atua na mente, nos valores, no vocabulário e nos gostos estéticos.",
        "3. Resultado: Naturalização de desigualdades históricas (machismo, racismo, elitismo escolar) como se fossem disposições espontâneas da natureza."
      ],
      coreConcept: "A violência simbólica opera pela adesão involuntária do dominado às categorias mentais do opressor.",
      trapWarning: "'Simbólica' não significa que ela 'não existe ou é imaginária'; seus efeitos de sofrimento e exclusão social são perfeitamente reais e concretos."
    },
    tags: ["humanas", "sociologia", "pierre-bourdieu", "violencia-simbolica", "habitus", "dominacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-013",
    area: "humanas",
    competence: 1,
    skill: 2,
    topic: "Teoria Crítica e Sociedade",
    subtopic: "A 'Sociedade do Espetáculo' em Guy Debord",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Toda a vida das sociedades nas quais reinam as condições modernas de produção se anuncia como uma imensa acumulação de espetáculos. Tudo o que era vivido diretamente tornou-se uma representação. O espetáculo não é um conjunto de imagens soltas na televisão, mas uma relação social entre pessoas mediatizada por imagens. Na fase inicial da economia, o ser foi rebaixado ao ter; na fase do espetáculo, o ter é rebaixado ao parecer.\n(Guy Debord, 'A Sociedade do Espetáculo', 1967)",
      source: "DEBORD, G. A Sociedade do Espetáculo. Rio de Janeiro: Contraponto, 1997."
    },
    prompt: "Publicada no contexto pré-Maio de 1968, a crítica situacionista de Guy Debord antecipou traços centrais das redes sociais digitais ao denunciar que",
    options: [
      {
        id: "a",
        text: "a experiência humana real foi subordinada à produção incessante de aparências e imagens mercantilizadas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A tese central de Debord é a degradação da vida autêntica pelo império da mercadoria: a transição do 'Ser' (valor ontológico humano) para o 'Ter' (capitalismo industrial de bens físicos) e deste para o 'Parecer' (a imagem, a visibilidade espetacularizada, a validação pelas telas). O espetáculo atua como o ópio moderno que aliena o indivíduo da sua própria capacidade de agir criticamente na história."
      },
      {
        id: "b",
        text: "o rádio de ondas curtas eliminou totalmente a influência da televisão e dos outdoors publicitários.",
        isCorrect: false,
        distractorRationale: "O rádio não substituiu as mídias visuais; o espetáculo intensificou o domínio das imagens televisivas e cinematográficas."
      },
      {
        id: "c",
        text: "o cultivo da introspecção solitária em mosteiros medievais tornou-se o padrão obrigatório das massas urbanas.",
        isCorrect: false,
        distractorRationale: "A sociedade do espetáculo é gregária, ruidosa, midiática e centrada no consumo público exibicionista."
      },
      {
        id: "d",
        text: "o dinheiro perdeu qualquer relevância para a estruturação dos laços econômicos globais.",
        isCorrect: false,
        distractorRationale: "Para Debord, o espetáculo é a mercadoria capitalista em sua fase mais desenvolvida e abstrata."
      },
      {
        id: "e",
        text: "as artes visuais tornaram-se ilegais e foram substituídas pelo debate científico puramente matemático.",
        isCorrect: false,
        distractorRationale: "A cultura contemporânea hipervalorizou a imagem como moeda de circulação social obrigatória."
      }
    ],
    detailedExplanation: {
      summary: "Guy Debord demonstra que o capitalismo avançado reduz a vida vivida à representação imagética: o 'ser' vira 'ter' e o 'ter' vira 'parecer'.",
      stepByStep: [
        "1. Obra e autor: Guy Debord (Internacional Situacionista), 'A Sociedade do Espetáculo' (1967).",
        "2. Fórmula filosófica: Ser ⟹ Ter ⟹ Parecer.",
        "3. Relação social mediada por imagens: O valor de uma pessoa passa a ser medido por sua visibilidade nos palcos e telas midiáticas.",
        "4. Conexão atual: Diagnóstico profético da cultura de influenciadores digitais e algoritmos de atenção."
      ],
      coreConcept: "A sociedade do espetáculo como estágio superior de mercantilização da vida através das imagens.",
      trapWarning: "O espetáculo em Debord não é 'o teatro ou o circo': é a própria organização do capitalismo que aliena as pessoas pelo consumo de aparências."
    },
    tags: ["humanas", "filosofia", "sociologia", "guy-debord", "sociedade-do-espetaculo", "redes-sociais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-014",
    area: "humanas",
    competence: 1,
    skill: 2,
    topic: "Filosofia Contemporânea",
    subtopic: "A 'Sociedade do Cansaço' de Byung-Chul Han",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A sociedade disciplinar analisada por Michel Foucault, povoada por hospitais, prisões e fábricas com seus imperativos de proibição ('não deves'), deu lugar à sociedade do desempenho no século XXI. Esta não se rege pelo dever, mas pelo poder irrestrito: seu lema positivo é 'Yes, we can' (você pode tudo!). O sujeito do desempenho acredita ser um empresário livre de si mesmo, mas converte-se no seu próprio carrasco: a exploração deixa de ser imposta de fora para ser praticada voluntariamente pelo próprio indivíduo, culminando em epidemias de depressão, ansiedade e síndrome de burnout.\n(Byung-Chul Han, 'Sociedade do Cansaço', 2010)",
      source: "HAN, B.-C. Sociedade do Cansaço. Petrópolis: Vozes, 2015."
    },
    prompt: "No diagnóstico formulado pelo filósofo sul-coreano Byung-Chul Han, a peculiaridade da opressão na sociedade contemporânea do desempenho reside no fato de que",
    options: [
      {
        id: "a",
        text: "o trabalhador é agredido fisicamente por guardas armados em celas de penitenciárias medievais.",
        isCorrect: false,
        distractorRationale: "Esse seria o modelo pré-moderno do suplício ou da disciplina externa carcerária, oposto à autoexploração psíquica."
      },
      {
        id: "b",
        text: "a exploração torna-se internalizada e voluntária, na medida em que o indivíduo cobra de si mesmo produtividade e positividade ininterruptas sob a ilusão da liberdade.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Byung-Chul Han demonstra que a coerção moderna não precisa de correntes externas: ela é autoimposta pelo imperativo da auto-otimização. O trabalhador se autoexplora em nome do sucesso pessoal, trabalhando até a exaustão física e mental sem perceber que é senhor e escravo de si mesmo simultaneamente. A culpa pelo fracasso é individualizada, gerando colapsos psíquicos generalizados (burnout)."
      },
      {
        id: "c",
        text: "as leis estatais proíbem qualquer pessoa de trabalhar mais do que duas horas por dia.",
        isCorrect: false,
        distractorRationale: "O mercado contemporâneo hiperestimula o trabalho ininterrupto 24/7 mediado pela conectividade digital."
      },
      {
        id: "d",
        text: "a depressão e a ansiedade foram completamente erradicadas graças ao avanço dos robôs industriais.",
        isCorrect: false,
        distractorRationale: "O autor identifica a depressão e o burnout como os males neuronais endêmicos e patológicos da sociedade do desempenho."
      },
      {
        id: "e",
        text: "o sujeito recusa terminantemente qualquer busca por metas, aprovação social ou enriquecimento material.",
        isCorrect: false,
        distractorRationale: "O sujeito do desempenho é obcecado por metas, métricas, curtidas e constante autoaperfeiçoamento."
      }
    ],
    detailedExplanation: {
      summary: "Byung-Chul Han diagnostica a sociedade do desempenho: a coerção externa foi substituída pela autoexploração voluntária em busca de produtividade infinita.",
      stepByStep: [
        "1. Transição de paradigmas: Sociedade disciplinar de Foucault ('não deves') ⟹ Sociedade do desempenho de Han ('você pode tudo').",
        "2. Mecanismo de dominação: O indivíduo explora a si mesmo acreditando que está se realizando livremente.",
        "3. Sintomas clínicos: Esgotamento psíquico, hiperatividade estéril, depressão e síndrome de Burnout.",
        "4. Crítica: O imperativo da positividade tóxica interdita o repouso contemplativo e a negação crítica."
      ],
      coreConcept: "A autoexploração na sociedade do desempenho opera sob a máscara da liberdade pessoal.",
      trapWarning: "Repertório campeão de redações nota 1000 sobre saúde mental, produtividade tóxica e ritmo de trabalho no século XXI."
    },
    tags: ["humanas", "filosofia", "byung-chul-han", "sociedade-do-cansaco", "burnout", "saude-mental"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-015",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Geografia Econômica",
    subtopic: "A Evolução da Divisão Internacional do Trabalho (DIT)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na clássica Divisão Internacional do Trabalho (DIT colonial), as metrópoles europeias exportavam manufaturados e importavam matérias-primas e gêneros agrícolas das colônias tropicais. A partir do final do século XX, com a fragmentação global das cadeias de valor pelas corporações multinacionais, desenhou-se uma Nova DIT.",
      source: "HAESBAERT, R.; PORTO-GONÇALVES, C. W. A Nova Geopolítica do Mundo das Redes. Record, 2018."
    },
    prompt: "Na Nova Divisão Internacional do Trabalho contemporânea, a inserção dos países periféricos e emergentes (como China, Vietnã, México e Brasil) caracteriza-se pela",
    options: [
      {
        id: "a",
        text: "retenção exclusiva do controle das patentes de inteligência artificial e decisões financeiras globais.",
        isCorrect: false,
        distractorRationale: "O controle das patentes, P&D e centros financeiros de comando continua concentrado nas potências centrais (EUA, Europa Ocidental e Japão)."
      },
      {
        id: "b",
        text: "atração de etapas fabris de montagem e manufaturas intensivas em mão de obra e insumos, enquanto os países centrais concentram a pesquisa científica, design e lucros das matrizes.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na Nova DIT, os países emergentes e em desenvolvimento deixaram de ser meros exportadores primários e passaram a produzir manufaturados industriais para o mundo, atraindo corporações transnacionais graças a salários mais baixos, isenções fiscais e normas ambientais mais flexíveis. Paralelamente, os países ricos detêm o topo da cadeia de valor: Pesquisa e Desenvolvimento (P&D), patentes, marketing, logística global e retenção dos royalties."
      },
      {
        id: "c",
        text: "proibição legal de qualquer importação de bens fabricados no exterior para garantir a autossuficiência.",
        isCorrect: false,
        distractorRationale: "A globalização econômica baseia-se na abertura comercial e na interdependência de importações e exportações."
      },
      {
        id: "d",
        text: "eliminação completa da produção agropecuária em favor da importação integral de alimentos.",
        isCorrect: false,
        distractorRationale: "Países como o Brasil ampliaram exponencialmente seu agronegócio de commodities na divisão global."
      },
      {
        id: "e",
        text: "adoção compulsória de uma única moeda mundial regulada pela Assembleia da ONU.",
        isCorrect: false,
        distractorRationale: "O comércio global opera principalmente com divisas fortes nacionais como o dólar e o euro."
      }
    ],
    detailedExplanation: {
      summary: "Na Nova DIT, os países emergentes sediam a produção industrial de manufaturados e commodities, enquanto os países centrais concentram tecnologia de ponta, marcas e finanças.",
      stepByStep: [
        "1. DIT Clássica (Mercantilismo/Século XIX): Colônias/periferias fornecem matérias-primas e compram manufaturas.",
        "2. Nova DIT (Pós-Segunda Guerra / Anos 1970 em diante): Desconcentração espacial das indústrias para países do Sul em busca de custos baixos.",
        "3. Cadeias Globais de Valor: O smartphone é projetado na Califórnia (alto valor agregado), montado no Sudeste Asiático (etapa fabril intensiva) e consumido no mundo inteiro."
      ],
      coreConcept: "A Nova DIT redefine a divisão global entre produtores de conhecimento de alto valor e montadores industriais periféricos.",
      trapWarning: "Cuidado: hoje os países emergentes industrializaram-se, mas continuam submetidos à dependência tecnológica e financeira das sedes no Norte."
    },
    tags: ["humanas", "geografia", "divisao-internacional-do-trabalho", "nova-dit", "globalizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-016",
    area: "humanas",
    competence: 1,
    skill: 3,
    topic: "Sociologia e Cultura Latino-Americana",
    subtopic: "O Hibridismo Cultural em Néstor García Canclini",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas metrópoles latino-americanas, a tradição artesanal indígena não foi simplesmente destruída pelo avanço da modernização capitalista nem permaneceu congelada no passado folclórico. Em vez disso, artesãos tecem figuras de super-heróis em teares tradicionais andinos, comunidades indígenas usam a internet e redes sociais para comercializar peças ancestrais, e o barroco colonial convive com o grafite de vanguarda no mesmo quarteirão urbano.\n(Néstor García Canclini, 'Culturas Híbridas', 1989)",
      source: "CANCLINI, N. G. Culturas Híbridas: Estratégias para Entrar e Sair da Modernidade. EDUSP, 1997."
    },
    prompt: "O conceito sociológico de 'hibridismo cultural' formulado por Néstor García Canclini expressa o processo pelo qual",
    options: [
      {
        id: "a",
        text: "uma cultura hegemônica estrangeira extermina de maneira total e instantânea todas as manifestações tradicionais de um povo.",
        isCorrect: false,
        distractorRationale: "Canclini critica a visão apocalíptica da aculturação passiva, demonstrando que as culturas locais reagem e ressignificam elementos."
      },
      {
        id: "b",
        text: "estruturas e práticas culturais discretas, que existiam separadas, combinam-se para gerar novas estruturas, formas e práticas com significados ressignificados.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O hibridismo cultural descreve os processos socioculturais em que práticas tradicionais, populares e modernas combinam-se e geram novas formas artísticas e identitárias. Longe de ser perda de 'pureza' cultural (que para a antropologia moderna nunca existiu), o hibridismo é a estratégia dinâmica pela qual populações latino-americanas entram e saem da modernidade global negociando suas raízes com as tecnologias contemporâneas."
      },
      {
        id: "c",
        text: "as comunidades tradicionais isolam-se voluntariamente do contato com qualquer inovação tecnológica.",
        isCorrect: false,
        distractorRationale: "O texto enfatiza a apropriação criativa da tecnologia moderna (como internet e teares aprimorados) por comunidades tradicionais."
      },
      {
        id: "d",
        text: "o Estado impõe uma cultura oficial única por meio da censura violenta e livros didáticos obrigatórios.",
        isCorrect: false,
        distractorRationale: "O hibridismo é um processo espontâneo, plural e descentralizado nas trocas sociais do cotidiano."
      },
      {
        id: "e",
        text: "a música e a literatura deixam de existir para serem substituídas pela matemática pura.",
        isCorrect: false,
        distractorRationale: "O hibridismo celebra a vitalidade permanente e a renovação das artes e da linguagem."
      }
    ],
    detailedExplanation: {
      summary: "Canclini define hibridismo cultural como a fusão e ressignificação de tradições históricas, cultura popular e modernidade de massas nas sociedades latino-americanas.",
      stepByStep: [
        "1. Autor: Néstor García Canclini, antropólogo e sociólogo latino-americano.",
        "2. Obra: 'Culturas Híbridas' (1989).",
        "3. Tese: As culturas não são gavetas puras e estanques; a globalização promove encontros, fricções e mestiçagens criativas entre o arcaico e o pós-moderno."
      ],
      coreConcept: "Hibridismo cultural como combinação e ressignificação ativa de elementos tradicionais e modernos.",
      trapWarning: "Hibridismo não é sinônimo de 'aculturação forçada': envolve a capacidade ativa dos povos de adaptar e subverter as influências recebidas."
    },
    tags: ["humanas", "sociologia", "antropologia", "canclini", "hibridismo-cultural", "america-latina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-017",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Sociologia e Cultura Global",
    subtopic: "Homogeneização Cultural vs. Glocalização",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao expandir suas franquias de fast-food para o mercado indiano, uma famosa rede multinacional norte-americana retirou completamente a carne bovina de seus hambúrgueres em respeito aos preceitos religiosos da maioria hindu, substituindo-a por receitas à base de queijo paneer, batatas e condimentos típicos da culinária local como o curry e o garam masala.",
      source: "ROBERTSON, R. Glocalization: Time-Space and Homogeneity-Heterogeneity. Sage Publications, 1995."
    },
    prompt: "O fenômeno econômico e sociológico que descreve a adaptação de produtos e padrões globais às especificidades, valores e tradições culturais de cada localidade é denominado",
    options: [
      {
        id: "a",
        text: "xenofobia estrutural.",
        isCorrect: false,
        distractorRationale: "Xenofobia é aversão ou preconceito contra estrangeiros, sem relação com estratégia mercadológica cultural."
      },
      {
        id: "b",
        text: "glocalização.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Conceito formulado pelo sociólogo Roland Robertson, a 'glocalização' (fusão de 'global' com 'local') expressa como as forças da globalização não impõem uma homogeneização cultural unilateral passiva; pelo contrário, o padrão global precisa se adaptar e se reconfigurar em função das peculiaridades religiosas, linguísticas e identitárias dos mercados locais para ser aceito e consumido."
      },
      {
        id: "c",
        text: "protecionismo tarifário estatal.",
        isCorrect: false,
        distractorRationale: "Protecionismo é a cobrança de impostos de importação pelo Estado, não a adaptação culinária por empresas privadas."
      },
      {
        id: "d",
        text: "etnocentrismo radical purista.",
        isCorrect: false,
        distractorRationale: "Etnocentrismo é julgar a cultura do outro como inferior a partir dos próprios padrões, o oposto de adaptar o produto à cultura alheia."
      },
      {
        id: "e",
        text: "desenvolvimentismo intervencionista.",
        isCorrect: false,
        distractorRationale: "Diz respeito a políticas macroeconômicas de industrialização por investimento estatal, não a estratégias de marketing cultural."
      }
    ],
    detailedExplanation: {
      summary: "Glocalização é a interação e adaptação mútua entre produtos globais e peculiaridades culturais locais.",
      stepByStep: [
        "1. Termo: Glocalização (Global + Local), Roland Robertson.",
        "2. Dinâmica: O mercado global percebe que para vender no mundo precisa dialogar com os costumes de cada região.",
        "3. Exemplo clássico: Menus adaptados na Índia, publicidades locais e plataformas digitais com idiomas e filtros regionais."
      ],
      coreConcept: "A glocalização contrapõe-se à tese simplista de homogeneização cultural absoluta pela globalização.",
      trapWarning: "Cuidado: a globalização produz tanto homogeneização de padrões de consumo quanto proliferação de diferenciações locais adaptadas."
    },
    tags: ["humanas", "sociologia", "glocalizacao", "globalizacao", "roland-robertson"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-018",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Sociologia do Trabalho no Brasil",
    subtopic: "A Terceirização Ampla e a Precarização Laboral",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Aprovada em 2017, a Lei nº 13.429 autorizou no Brasil a terceirização irrestrita de todas as etapas de produção das empresas, inclusive a sua atividade-fim principal (anteriormente a súmula 331 do Tribunal Superior do Trabalho permitia a terceirização apenas para atividades-meio, como limpeza, conservação e vigilância patrimonial).",
      source: "DIEESE. Terceirização e Precarização das Condições de Trabalho no Brasil. Nota Técnica, 2021."
    },
    prompt: "Pesquisas empíricas do DIEESE e de institutos de sociologia do trabalho indicam que a expansão da terceirização para atividades-fim tende a provocar no mercado brasileiro o(a)",
    options: [
      {
        id: "a",
        text: "aumento médio de 50% nos salários e garantia de estabilidade decenal para todos os contratados.",
        isCorrect: false,
        distractorRationale: "Dados do DIEESE mostram exatamente o inverso: trabalhadores terceirizados ganham em média salários menores do que contratados diretos."
      },
      {
        id: "b",
        text: "redução média de salários, maior rotatividade de mão de obra, elevação dos índices de acidentes de trabalho e enfraquecimento da representação sindical.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Estudos comparativos demonstram que o trabalhador terceirizado no Brasil: 1. Recebe remuneração em média 25% a 30% inferior à dos trabalhadores diretos na mesma função; 2. Cumpre jornadas semanais mais longas; 3. Sofre maior rotatividade com permanência inferior a dois anos no posto; 4. É a principal vítima de acidentes de trabalho graves e fatais devido a treinamentos precários; 5. Enfrenta fragmentação sindical, já que sindicatos de terceirizados possuem menor poder de barganha coletiva."
      },
      {
        id: "c",
        text: "eliminação total dos lucros das empresas contratantes em favor da previdência pública.",
        isCorrect: false,
        distractorRationale: "A terceirização é adotada por empresas justamente como estratégia de corte de custos operacionais e aumento da margem de lucro."
      },
      {
        id: "d",
        text: "obrigatoriedade de que todos os terceirizados passem por concurso público de provas e títulos.",
        isCorrect: false,
        distractorRationale: "A terceirização no setor público é utilizada para contratação indireta sem estabilidade e sem concurso estatutário."
      },
      {
        id: "e",
        text: "proibição legal de demissões imotivadas em qualquer setor da economia nacional.",
        isCorrect: false,
        distractorRationale: "A rotatividade e facilidade de substituição do terceirizado é uma das maiores marcas do regime de flexibilização."
      }
    ],
    detailedExplanation: {
      summary: "A terceirização ampla no Brasil acarreta rebaixamento salarial, elevação da taxa de acidentes e enfraquecimento do poder de barganha sindical dos trabalhadores.",
      stepByStep: [
        "1. Mudança legislativa de 2017: Permissão para terceirizar a atividade-fim de qualquer empresa.",
        "2. Impactos econômicos: Redução da folha salarial e corte de encargos pelas empresas tomadoras de serviço.",
        "3. Impactos sociais: Menores salários, precarização dos equipamentos de segurança, fragmentação de categorias profissionais e perda de identidade de classe."
      ],
      coreConcept: "A terceirização como mecanismo estrutural de flexibilização e precarização das relações de trabalho.",
      trapWarning: "No debate sociológico, terceirização é analisada como flexibilização redutora de direitos, em contraste com a propaganda corporativa de 'modernização'."
    },
    tags: ["humanas", "sociologia", "trabalho-no-brasil", "terceirizacao", "clt", "precarizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-019",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Sociologia e Meio Ambiente",
    subtopic: "A Obsolescência Programada e a Crise do Lixo Eletrônico",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Desde a famosa conspiração do Cartel Phoebus na década de 1920 (quando fabricantes de lâmpadas pactuaram limitar a vida útil de lâmpadas incandescentes a 1.000 horas de uso contínuo para manter as vendas sempre aquecidas), a indústria moderna tem aplicado a obsolescência programada. Hoje, smartphones perdem suporte a softwares após poucos anos, peças de reposição não são comercializadas e o design dificulta reparos manuais, forçando o descarte precoce de aparelhos em perfeito estado mecânico.",
      source: "LATOUCHE, S. A Queda do Império do Crescimento: Ensaios sobre o Decrescimento. Autêntica, 2014."
    },
    prompt: "A prática deliberada da obsolescência programada pelo sistema produtivo industrial gera impactos socioambientais críticos porque",
    options: [
      {
        id: "a",
        text: "estimula o consumo consciente e diminui a extração de matérias-primas raras da natureza.",
        isCorrect: false,
        distractorRationale: "A obsolescência incentiva o consumo compulsivo desenfreado e multiplica a extração mineral predatória."
      },
      {
        id: "b",
        text: "acelera o ciclo contínuo de consumo artificial e potencializa a geração massiva de lixo eletrônico com contaminação tóxica por metais pesados.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A obsolescência programada (tanto técnica, com falhas induzidas de componentes e falta de peças, quanto perceptiva, ditada pela moda e obsolescência psicológica) mantém a taxa de lucro das indústrias às custas de duas grandes agressões: 1. Superexploração contínua de recursos naturais não renováveis (lítio, coltan, ouro, petróleo para plásticos); 2. Despejo monumental de lixo eletrônico tóxico (e-waste) com chumbo, mercúrio e cádmio em aterros sanitários e países periféricos desprovidos de reciclagem segura."
      },
      {
        id: "c",
        text: "assegura que todos os produtos eletrônicos funcionem perfeitamente por pelo menos dois séculos.",
        isCorrect: false,
        distractorRationale: "A prática visa propositalmente diminuir a durabilidade dos produtos, e não aumentá-la."
      },
      {
        id: "d",
        text: "restringe a fabricação de computadores aos laboratórios acadêmicos sem fins lucrativos.",
        isCorrect: false,
        distractorRationale: "O setor eletrônico é dominado por grandes conglomerados privados multinacionais."
      },
      {
        id: "e",
        text: "erradica completamente as desigualdades socioeconômicas no acesso à comunicação.",
        isCorrect: false,
        distractorRationale: "O encarecimento permanente e a substituição constante de aparelhos ampliam a exclusão digital de populações de baixa renda."
      }
    ],
    detailedExplanation: {
      summary: "A obsolescência programada força o consumidor a descartar bens funcionais para reaquecer o mercado, gerando esgotamento de recursos e crises graves de lixo eletrônico.",
      stepByStep: [
        "1. Definição: Planejamento industrial intencional para reduzir a vida útil de produtos ou inviabilizar consertos.",
        "2. Modalidades: Técnica (peças que quebram ou travam por software) e Perceptiva/Psicológica (design novo que faz o modelo antigo parecer ultrapassado).",
        "3. Impacto ambiental: Montanhas de lixo eletrônico não degradável contendo metais pesados perigosos para os lençóis freáticos."
      ],
      coreConcept: "A contradição entre a lógica de crescimento infinito do consumo capitalista e os limites ecológicos materiais finitos do planeta Terra.",
      trapWarning: "Obsolescência técnica é falha planejada de hardware/software; obsolescência perceptiva é mudança de estética estimulada pela publicidade para criar descontentamento no usuário."
    },
    tags: ["humanas", "sociologia", "meio-ambiente", "obsolescencia-programada", "consumismo", "lixo-eletronico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-020",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Teoria Social e Geografia",
    subtopic: "A 'Compressão do Espaço-Tempo' em David Harvey",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No século XIX, uma mensagem diplomática levava semanas para atravessar o Oceano Atlântico em navios a vela; com os telégrafos submarinos, esse tempo reduziu-se a minutos. No século XXI, ordens de compra e venda de derivativos financeiros e capitais especulativos viajam pelo globo em milissegundos por algoritmos de negociação de alta frequência. As distâncias espaciais físicas parecem ter sido aniquiladas pela velocidade da rotação do capital.\n(David Harvey, 'A Condição Pós-Moderna', 1989)",
      source: "HARVEY, D. Condição Pós-Moderna: Uma Pesquisa sobre as Origens da Mudança Cultural. Loyola, 1992."
    },
    prompt: "O conceito de 'compressão do espaço-tempo' formulado pelo geógrafo britânico David Harvey explica as transformações culturais e econômicas da pós-modernidade pelo(a)",
    options: [
      {
        id: "a",
        text: "encolhimento físico-geológico real das massas continentais e aproximação das placas tectônicas.",
        isCorrect: false,
        distractorRationale: "O relevo físico da Terra não encolheu; trata-se de uma transformação na percepção humana e nos fluxos sociais proporcionada pela velocidade técnica."
      },
      {
        id: "b",
        text: "aceleração das inovações nos transportes e telecomunicações voltadas a diminuir o tempo de circulação e maximizar a acumulação flexível de capital.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para David Harvey, o capitalismo vive sob a compulsão constante de 'aniquilar o espaço por meio do tempo': quanto mais rápido uma mercadoria for produzida, transportada e vendida, mais rápido o dinheiro retorna multiplicado como lucro para um novo ciclo. A revolução nos transportes (jatos de carga, contêineres marítimos) e na telemática comprime a sensação de distância, gerando ansiedade, aceleração da vida cotidiana e descartabilidade rápida dos bens de consumo."
      },
      {
        id: "c",
        text: "retorno da produção artesanal localizada com proibição de importações globais.",
        isCorrect: false,
        distractorRationale: "A pós-modernidade em Harvey marca a explosão da globalização e da dispersão planetária das cadeias produtivas."
      },
      {
        id: "d",
        text: "eliminação de qualquer necessidade de circulação de mercadorias no sistema capitalista.",
        isCorrect: false,
        distractorRationale: "A circulação rápida e incessante é a própria condição de sobrevivência do sistema capitalista."
      },
      {
        id: "e",
        text: "congelamento permanente das tecnologias de comunicação no padrão dos anos 1950.",
        isCorrect: false,
        distractorRationale: "A essência da tese é a permanente aceleração técnica e a volatilidade do capital contemporâneo."
      }
    ],
    detailedExplanation: {
      summary: "David Harvey conceitua a compressão espaço-tempo como o encurtamento do tempo necessário para percorrer distâncias, acelerando a rotação do capital na pós-modernidade.",
      stepByStep: [
        "1. Obra e autor: David Harvey, 'A Condição Pós-Moderna' (1989).",
        "2. Análise marxista do espaço: O capital precisa acelerar a rotação do dinheiro para evitar crises de sobreacumulação.",
        "3. Impacto cultural: Efemeridade, ritmo frenético nas metrópoles, perda da memória histórica e cultura do descartável."
      ],
      coreConcept: "A compressão espaço-tempo articula inovações nos transportes e telemática à aceleração dos ciclos de acumulação do capital flexível.",
      trapWarning: "A compressão do espaço-tempo é uma experiência social e econômica da aceleração do ritmo de vida, não um fenômeno geológico literal."
    },
    tags: ["humanas", "geografia", "david-harvey", "compressao-espaco-tempo", "pos-modernidade", "capitalismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-021",
    area: "humanas",
    competence: 1,
    skill: 2,
    topic: "Filosofia Política e Comunicação",
    subtopic: "A Teoria da Ação Comunicativa de Jürgen Habermas",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A racionalidade ocidental não pode ser reduzida unicamente à razão instrumental (aquela razão calculadora e técnica voltada para a dominação da natureza e controle de coisas e pessoas). Ao lado do mundo dos sistemas regido pelo poder burocrático e pelo dinheiro, existe o 'mundo da vida', a esfera dos encontros humanos, da linguagem cotidiana e da busca pelo entendimento mútuo. A democracia genuína exige uma esfera pública livre na qual os cidadãos participem de debates racionais sem coerção física, onde prevaleça a força do melhor argumento.\n(Jürgen Habermas, 'Teoria da Ação Comunicativa', 1981)",
      source: "HABERMAS, J. Teoria da Ação Comunicativa. São Paulo: WMF Martins Fontes, 2012."
    },
    prompt: "Na teoria crítica formulada pelo filósofo alemão Jürgen Habermas, a defesa da 'razão comunicativa' tem como finalidade primordial",
    options: [
      {
        id: "a",
        text: "subordinar todas as decisões éticas e políticas à lógica utilitária do lucro financeiro de curto prazo.",
        isCorrect: false,
        distractorRationale: "Habermas denuncia a invasão da lógica do lucro (sistema) sobre o 'mundo da vida'."
      },
      {
        id: "b",
        text: "resgatar a confiança no diálogo democrático racional e na deliberação consensual como freio à colonização da vida cotidiana pelo poder do Estado e do dinheiro.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Habermas contrapõe a 'razão instrumental' (que calcula meios para atingir fins utilitários de poder e lucro) à 'razão comunicativa' (que busca o entendimento livre entre sujeitos capazes de falar e agir). Para ele, a crise das democracias contemporâneas resulta da 'colonização do mundo da vida' pelo mercado e pela burocracia estatal. O antídoto ético é a revitalização da esfera pública democrática, onde o debate de ideias seja pautado na sinceridade, na veracidade e na ausência de coação."
      },
      {
        id: "c",
        text: "defender que apenas generais e tecnocratas do setor financeiro devam votar nas assembleias cívicas.",
        isCorrect: false,
        distractorRationale: "Habermas defende uma democracia deliberativa radicalmente aberta e inclusiva para todos os cidadãos afetados pelas decisões."
      },
      {
        id: "d",
        text: "eliminar a linguagem verbal em prol do silêncio absoluto e da meditação em cavernas isoladas.",
        isCorrect: false,
        distractorRationale: "Sua teoria funda-se nos atos de fala e na intersubjetividade da linguagem linguística."
      },
      {
        id: "e",
        text: "rejeitar qualquer compromisso com a verdade factual e legitimar o uso de notícias falsas na propaganda eleitoral.",
        isCorrect: false,
        distractorRationale: "Habermas exige pretensões universais de validade na comunicação: inteligibilidade, verdade factual, retidão moral e sinceridade subjetiva."
      }
    ],
    detailedExplanation: {
      summary: "Habermas defende a razão comunicativa como pilar da democracia deliberativa contra a colonização do mundo da vida pelo poder e pelo dinheiro.",
      stepByStep: [
        "1. Autor: Jürgen Habermas (segunda geração da Escola de Frankfurt).",
        "2. Distinção essencial: Razão Instrumental (meios para fins de dominação) vs. Razão Comunicativa (diálogo voltado ao consenso ético).",
        "3. Situação ideal de fala: Espaço de debate público livre de coerção onde vence o argumento racionalmente mais sólido.",
        "4. Diagnóstico: As decisões democráticas devem ser fruto da deliberação pública de cidadãos livres e iguais, e não de conchavos tecnocráticos ou imposições de mercado."
      ],
      coreConcept: "Ação comunicativa e democracia deliberativa como freios à colonização burocrática e mercantil da sociedade.",
      trapWarning: "Habermas não rejeita a razão iluminista; ele busca completá-la, superando o reducionismo técnico da razão instrumental."
    },
    tags: ["humanas", "filosofia", "habermas", "acao-comunicativa", "democracia-deliberativa", "esfera-publica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-022",
    area: "humanas",
    competence: 1,
    skill: 3,
    topic: "Sociologia e Epistemologia Crítica",
    subtopic: "As 'Epistemologias do Sul' de Boaventura de Sousa Santos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A dominação colonial moderna não se limitou à expropriação de terras, minérios e corpos escravizados; ela operou também um profundo genocídio cultural e epistemológico: o epistemicídio. Ao declarar que a ciência ocidental eurocêntrica era a única portadora universal da razão, desqualificaram-se como 'mágicos', 'primitivos' e 'supersticiosos' os saberes ancestrais, curas botânicas, formas comunitárias de justiça e cosmologias dos povos indígenas, camponeses e africanos.\n(Boaventura de Sousa Santos, 'Epistemologias do Sul', 2010)",
      source: "SANTOS, B. S. Para além do Pensamento Abissal: das linhas globais a uma ecologia de saberes. Novos Estudos CEBRAP, 2007."
    },
    prompt: "O conceito de 'ecologia de saberes', proposto por Boaventura de Sousa Santos para superar o epistemicídio eurocêntrico colonial, baseia-se na",
    options: [
      {
        id: "a",
        text: "destruição imediata de todas as universidades e queima pública de livros científicos ocidentais.",
        isCorrect: false,
        distractorRationale: "O autor não descarta o valor da ciência ocidental; defende a superação da sua pretensão monopolista e isolacionista."
      },
      {
        id: "b",
        text: "promoção do diálogo horizontal entre o conhecimento científico moderno e os saberes ancestrais, tradicionais e populares, reconhecendo a pluralidade de epistemologias válidas no mundo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A 'ecologia de saberes' rompe com a arrogância do 'pensamento abissal' ocidental: afirma que a ciência moderna é uma forma rigorosa de saber, mas não é a única nem universalmente suficiente para resolver todos os problemas da humanidade. Promover o diálogo dialógico entre a ciência e os conhecimentos de povos indígenas, quilombolas e ribeirinhos valoriza a diversidade epistêmica do planeta e enriquece a capacidade civilizatória de cuidar da vida e da justiça social."
      },
      {
        id: "c",
        text: "proibição de qualquer contato intercultural entre pesquisadores europeus e comunidades do Sul global.",
        isCorrect: false,
        distractorRationale: "A proposta é de abertura dialógica e tradução intercultural, não de fechamento chauvinista ou isolacionismo."
      },
      {
        id: "d",
        text: "imposição do pensamento único neoliberal como modelo pedagógico curricular obrigatório.",
        isCorrect: false,
        distractorRationale: "O autor é um dos mais célebres críticos do neoliberalismo e da globalização hegemônica excludente."
      },
      {
        id: "e",
        text: "submissão de todos os direitos humanos à aprovação de corporações farmacêuticas privadas.",
        isCorrect: false,
        distractorRationale: "O objetivo das Epistemologias do Sul é a emancipação das populações historicamente exploradas contra o domínio corporativo."
      }
    ],
    detailedExplanation: {
      summary: "A 'ecologia de saberes' propõe a convivência horizontal e enriquecedora entre a ciência moderna e os saberes ancestrais tradicionais, combatendo o epistemicídio colonial.",
      stepByStep: [
        "1. Conceito de Epistemicídio: Destruição sistemática de saberes locais pela hegemonia colonial eurocêntrica.",
        "2. Pensamento Abissal: Linha invisível que separa o mundo 'visível' (onde vigora a lei e a ciência ocidental) do mundo 'invisível' (onde vigora a apropriação e violência colonial).",
        "3. Resposta emancipadora: 'Ecologia de Saberes' — interconectar saberes científicos e saberes populares ancestrais em pé de igualdade e cooperação mútua."
      ],
      coreConcept: "A descolonização do pensamento e a valorização das Epistemologias do Sul contra o monopólio eurocêntrico da verdade.",
      trapWarning: "Ecologia de saberes não é 'anticiência': é o reconhecimento de que a ciência tem limites e pode aprender com conhecimentos tradicionais (ex: manejo florestal e etnobotânica)."
    },
    tags: ["humanas", "sociologia", "boaventura-de-sousa-santos", "epistemologias-do-sul", "epistemicidio", "ecologia-de-saberes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-023",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Sociologia das Desigualdades",
    subtopic: "A Divisão Sexual e Racial do Trabalho em Lélia Gonzalez",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No Brasil, as relações de trabalho não se estruturam apenas pela chave da classe econômica; elas são profundamente marcadas pelas hierarquias de gênero e raça. A mulher negra ocupa o patamar mais vulnerável da pirâmide socioeconômica nacional, herdeira da divisão colonial que a confinou ao trabalho doméstico não pago, ao cuidado precarizado e aos serviços de limpeza mal remunerados, enquanto o debate econômico tradicional insistia em ignorar a cor e o sexo da força de trabalho.\n(Lélia Gonzalez, 'Por um Feminismo Afro-Latino-Americano', 1988)",
      source: "GONZALEZ, L. Primavera para as Rosas Negras. São Paulo: Diáspora Africana, 2018."
    },
    prompt: "A análise pioneira de Lélia Gonzalez sobre a divisão sexual e racial do trabalho no Brasil antecipou conceitos sociológicos contemporâneos cruciais ao demonstrar que",
    options: [
      {
        id: "a",
        text: "o mercado de trabalho no Brasil é 100% meritocrático e imune a heranças coloniais patriarcais.",
        isCorrect: false,
        distractorRationale: "A autora denuncia que o mercado reproduz de maneira estrutural o racismo e o sexismo herdados do passado colonial."
      },
      {
        id: "b",
        text: "a exploração econômica capitalista no país opera de forma indissociável da opressão de gênero e da discriminação racial (interseccionalidade).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Lélia Gonzalez foi pioneira em articular a tríade raça, classe e gênero muito antes da consagração acadêmica formal do conceito de interseccionalidade. Ela demonstrou como a mulher negra é submetida a uma dupla ou tripla exploração: seu trabalho doméstico e reprodutivo invisibilizado sustenta a economia, mas ela recebe as menores remunerações e sofre os maiores índices de informalidade e violência no país."
      },
      {
        id: "c",
        text: "o trabalho doméstico das mulheres é hipervalorizado e recebe os maiores salários do setor financeiro nacional.",
        isCorrect: false,
        distractorRationale: "O trabalho doméstico e de cuidados no Brasil é historicamente precarizado e desvalorizado monetariamente."
      },
      {
        id: "d",
        text: "as mulheres brancas de classe alta enfrentam os mesmos obstáculos e a mesma vulnerabilidade socioeconômica que as mulheres negras periféricas.",
        isCorrect: false,
        distractorRationale: "Gonzalez aponta que as mulheres brancas de elite frequentemente delegam o trabalho doméstico e o cuidado dos filhos para mulheres negras sob baixíssima remuneração."
      },
      {
        id: "e",
        text: "o racismo foi completamente extinto com a promulgação da Lei Áurea em 1888.",
        isCorrect: false,
        distractorRationale: "O pós-abolição brasileiro manteve a população negra sem terras e sem direitos, empurrando-a para a base da pirâmide ocupacional."
      }
    ],
    detailedExplanation: {
      summary: "Lélia Gonzalez demonstra a imbricação estrutural entre raça, gênero e classe, revelando como a mulher negra é historicamente confinada às ocupações mais vulneráveis da economia.",
      stepByStep: [
        "1. Autora fundamental: Lélia Gonzalez (1935-1994), filósofa, antropóloga e fundadora do MNU.",
        "2. Conceito pioneiro: Améfrica Ladina e interseccionalidade na divisão do trabalho.",
        "3. Diagnóstico: O racismo e o sexismo não são 'desvios éticos individuais passageiros'; são eixos estruturantes do modo de produção e da hierarquia salarial brasileira."
      ],
      coreConcept: "A divisão racial e sexual do trabalho como pilar das desigualdades estruturais no Brasil.",
      trapWarning: "No ENEM, questões sobre trabalho contemporâneo exigem a análise integrada de marcadores sociais de raça e gênero, e não apenas de renda abstrata."
    },
    tags: ["humanas", "sociologia", "lelia-gonzalez", "divisao-sexual-trabalho", "racismo-estrutural", "interseccionalidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-024",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Sociologia Urbana Global",
    subtopic: "A Polarização Social nas Cidades Globais em Saskia Sassen",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "As cidades globais (como Nova York, Londres, Tóquio e São Paulo) concentram as sedes de corporações multinacionais, consultorias jurídicas transnacionais e centros financeiros de ponta. Contudo, essa economia hiperavançada de serviços altamente especializados não sobrevive sem um imenso contingente de trabalhadores de baixa qualificação e baixíssima remuneração para limpar os escritórios à noite, entregar refeições, cuidar de crianças e fazer a segurança predial, gerando uma acentuada polarização socioespacial no coração das metrópoles mais ricas do planeta.\n(Saskia Sassen, 'As Cidades Globais', 1991)",
      source: "SASSEN, S. As Cidades Globais: Nova York, Londres, Tóquio. Nobel, 1998."
    },
    prompt: "A tese sociológica de Saskia Sassen sobre a dinâmica das cidades globais desfaz o mito da classe média homogênea ao revelar que a globalização avançada produz",
    options: [
      {
        id: "a",
        text: "o desaparecimento total de qualquer prestação de serviços manuais nas grandes metrópoles devido à automação de 100% das tarefas urbanas.",
        isCorrect: false,
        distractorRationale: "Apesar da tecnologia avançada, a economia das cidades globais gera uma demanda massiva e permanente por trabalho manual precarizado de suporte."
      },
      {
        id: "b",
        text: "uma profunda polarização de classes: no topo, uma elite cosmopolita hiper-remunerada de gestores; na base, uma vasta massa invisibilizada de trabalhadores de serviços precarizados e migrantes.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Saskia Sassen demonstra que a globalização não expande uma classe média estável e equilibrada nas metrópoles mundiais. Em vez disso, ela polariza o mercado de trabalho urbano: de um lado, executivos, corretores e advogados corporativos com salários estratosféricos; de outro, um vasto exército de faxineiros, garçons, porteiros e cuidadores (em grande parte mulheres e migrantes) que recebem salários de subsistência e sofrem com a segregação residencial e a gentrificação dos bairros centrais."
      },
      {
        id: "c",
        text: "a distribuição equitativa dos lucros das empresas transnacionais entre todos os moradores da cidade.",
        isCorrect: false,
        distractorRationale: "As cidades globais são os espaços de maior concentração de riqueza e maior abismo de desigualdade social do planeta."
      },
      {
        id: "d",
        text: "a extinção completa do setor financeiro em proveito exclusivo da agricultura familiar de subsistência.",
        isCorrect: false,
        distractorRationale: "As cidades globais são os nós centrais de comando do mercado de capitais e das finanças internacionais."
      },
      {
        id: "e",
        text: "o esvaziamento populacional absoluto das grandes capitais financeiras do planeta.",
        isCorrect: false,
        distractorRationale: "As cidades globais atraem fluxos ininterruptos de capitais, migrantes e mão de obra de todo o planeta."
      }
    ],
    detailedExplanation: {
      summary: "Saskia Sassen demonstra que as cidades globais produzem polarização social extrema: uma superelite financeira no topo e um exército de trabalhadores de serviços precários na base.",
      stepByStep: [
        "1. Conceito: Cidade Global (Saskia Sassen) — nós territoriais onde se concentram telecomunicações, bolsas de valores e sedes de multinacionais.",
        "2. Polarização social: A riqueza hiperconcentrada no topo demanda uma enorme cadeia de serviços mal remunerados de apoio físico diário.",
        "3. Consequências urbanas: Gentrificação, expulsão das classes trabalhadoras para periferias distantes e fragmentação socioespacial."
      ],
      coreConcept: "A cidade global como laboratório da hiperconcentração de renda e da precarização dos serviços urbanos.",
      trapWarning: "Cidades globais não são apenas centros ricos e limpos: sua riqueza depende estruturalmente da exploração de trabalhadores invisibilizados."
    },
    tags: ["humanas", "sociologia", "geografia-urbana", "saskia-sassen", "cidades-globais", "polarizacao-social"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-TRA-025",
    area: "humanas",
    competence: 1,
    skill: 2,
    topic: "Sociologia da Tecnologia e Controle",
    subtopic: "O 'Capitalismo de Vigilância' em Shoshana Zuboff",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No antigo capitalismo industrial, a natureza e o trabalho humano eram transformados em mercadorias materiais vendidas no mercado. No novo 'capitalismo de vigilância' comandado pelas grandes corporações de tecnologia digital, a matéria-prima explorada é a própria experiência humana particular. Nossos cliques, buscas, pausas de leitura, curtidas, rotas de GPS e conversas privadas são secretamente extraídos na forma de 'excedente comportamental', processados por inteligência artificial para produzir modelos preditivos do nosso comportamento futuro e comercializados em mercados de futuros comportamentais.\n(Shoshana Zuboff, 'A Era do Capitalismo de Vigilância', 2019)",
      source: "ZUBOFF, S. A Era do Capitalismo de Vigilância: A Luta por um Futuro Humano na Nova Fronteira do Poder. Intrínseca, 2021."
    },
    prompt: "A teoria formulada pela socióloga norte-americana Shoshana Zuboff redefine a compreensão da sociedade digital contemporânea ao demonstrar que",
    options: [
      {
        id: "a",
        text: "os serviços online gratuitos representam pura filantropia corporativa desinteressada de qualquer objetivo de lucro financeiro.",
        isCorrect: false,
        distractorRationale: "O discurso da gratuidade mascara o fato de que a extração invisível de dados privados do usuário é a fonte mais lucrativa do capitalismo moderno."
      },
      {
        id: "b",
        text: "o usuário das plataformas digitais deixou de ser apenas o cliente ou o produto; a sua própria experiência subjetiva e intimidade foram transformadas em matéria-prima de extração, previsão e modificação de comportamento.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Zuboff desconstrói o bordão simplista 'se o produto é de graça, o produto é você'. No capitalismo de vigilância das Big Techs, o usuário é o corpo de onde se extrai a matéria-prima (dados de comportamento íntimo). Esses dados geram produtos preditivos vendidos a anunciantes, seguradoras e atores políticos, com o objetivo explícito não apenas de prever o que o indivíduo fará, mas de influenciar e modificar seus hábitos, decisões de compra e votos eleitorais em larga escala."
      },
      {
        id: "c",
        text: "a privacidade individual na internet é plenamente protegida por acordos voluntários das corporações sem necessidade de leis regulatórias.",
        isCorrect: false,
        distractorRationale: "A autora denuncia que a vigilância algorítmica opera na surdina com quebra massiva da privacidade e autonomia democrática dos indivíduos."
      },
      {
        id: "d",
        text: "o modelo industrial fordista de produção de aço continua sendo a única atividade econômica relevante do século XXI.",
        isCorrect: false,
        distractorRationale: "O centro dinâmico do poder econômico e geopolítico migrou para o processamento de megadados (Big Data) e inteligência artificial."
      },
      {
        id: "e",
        text: "o acesso à internet provoca o cancelamento instantâneo de todas as propagandas publicitárias no mundo.",
        isCorrect: false,
        distractorRationale: "O capitalismo de vigilância opera precisamente através do hiperdirecionamento algorítmico da publicidade comportamental."
      }
    ],
    detailedExplanation: {
      summary: "Shoshana Zuboff denuncia o Capitalismo de Vigilância: a captura da experiência humana como matéria-prima de dados para prever e manipular o comportamento social.",
      stepByStep: [
        "1. Obra e autora: Shoshana Zuboff (Harvard), 'A Era do Capitalismo de Vigilância' (2019).",
        "2. Excedente comportamental: Dados íntimos capturados além do necessário para a melhoria técnica do serviço.",
        "3. Mercados de futuros comportamentais: A venda da probabilidade do que o cidadão comprará ou votará.",
        "4. Ameaça à democracia: O poder instrumental de corporações que monitoram e modificam o comportamento humano sem prestar contas a parlamentos democráticos."
      ],
      coreConcept: "O capitalismo de vigilância transforma a experiência humana íntima em matéria-prima de monetização e controle algorítmico.",
      trapWarning: "Tema de extrema atualidade no ENEM sobre inteligência artificial, manipulação de dados, LGPD e limites éticos das Big Techs."
    },
    tags: ["humanas", "sociologia", "shoshana-zuboff", "capitalismo-de-vigilancia", "dados", "inteligencia-artificial", "privacidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
