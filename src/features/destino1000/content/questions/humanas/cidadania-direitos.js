export const QUESTIONS_CIDADANIA_DIREITOS = [
  {
    id: "HUM-CID-001",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Cidadania e Direitos",
    subtopic: "Gerações dos Direitos Fundamentais (T. H. Marshall / Bobbio)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na clássica formulação do sociólogo britânico T. H. Marshall sobre a evolução da cidadania moderna, e posteriormente aprofundada pelo jurista Norberto Bobbio na obra 'A Era dos Direitos', os direitos fundamentais não surgiram simultaneamente, mas por meio de sucessivas lutas históricas. Iniciaram-se com os direitos civis no século XVIII (liberdade individual, propriedade e igualdade perante a lei), expandiram-se para os direitos políticos no século XIX (sufrágio universal e participação eleitoral) e consolidaram-se com os direitos sociais no século XX (saúde, educação, trabalho e previdência).",
      source: "Cidadania, Classe Social e Status (T. H. Marshall) / A Era dos Direitos (Norberto Bobbio)"
    },
    prompt: "Ao contrário dos direitos civis de primeira dimensão (que exigem uma postura de abstenção ou não intervenção do Estado na vida do cidadão), a garantia efetiva dos direitos sociais de segunda dimensão requer do Estado uma postura:",
    options: [
      { id: "a", text: "prestacional e ativa, mediante a formulação e o financiamento de políticas públicas redistributivas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "neutra e desregulamentada, permitindo que as forças espontâneas de livre mercado definam o acesso a hospitais e escolas.", isCorrect: false, distractorRationale: "O livre mercado sem intervenção é o modelo liberal que não garante direitos sociais universais." },
      { id: "c", text: "punitiva e censora, restringindo a liberdade sindical para preservar o equilíbrio fiscal.", isCorrect: false, distractorRationale: "Restringir liberdade sindical viola direitos sociais e políticos." },
      { id: "d", text: "exclusivamente diplomática, delegando a responsabilidade do bem-estar social a organismos internacionais da ONU.", isCorrect: false, distractorRationale: "A prestação de saúde e educação é dever precípuo do Estado soberano nacional." },
      { id: "e", text: "corporativista e clientelista, restrita apenas aos proprietários de terras rurais.", isCorrect: false, distractorRationale: "Direitos sociais visam à universalidade e dignidade da pessoa humana, não privilégio agrário." }
    ],
    detailedExplanation: {
      summary: "Direitos de 1ª geração (liberdades negativas) exigem que o Estado NÃO interfira. Direitos de 2ª geração (igualdade/direitos sociais) exigem uma prestação POSITIVA do Estado (políticas públicas de saúde, educação e previdência).",
      stepByStep: [
        "Passo 1: Entender a distinção clássica das dimensões dos direitos:",
        "- 1ª Dimensão (Liberdade / Civis e Políticos): Liberdades negativas. O Estado deve abster-se de violar a liberdade de expressão, locomoção e credo.",
        "- 2ª Dimensão (Igualdade / Sociais, Econômicos e Culturais): Prestações positivas. O Estado deve AGIR ativamente construindo hospitais (SUS), escolas públicas e garantindo previdência.",
        "- 3ª Dimensão (Fraternidade / Difusos e Coletivos): Meio ambiente equilibrado, paz, patrimônio comum da humanidade e direitos do consumidor.",
        "Passo 2: Portanto, a garantia dos direitos sociais exige papel prestacional e financiamento por tributação progressiva."
      ],
      coreConcept: "Dimensões dos Direitos Fundamentais: Liberdades Negativas (1ª) vs. Ações Positivas do Estado (2ª)",
      trapWarning: "Lembre-se da trilogia da Revolução Francesa: 1ª Geração = Liberdade (Civil); 2ª Geração = Igualdade (Social); 3ª Geração = Fraternidade (Coletivo/Ambiental)."
    },
    commonTraps: ["Confundir abstenção estatal (1ª geração) com prestação positiva (2ª geração)", "Achar que direitos sociais dependem apenas de caridade voluntária"],
    tags: ["direitos fundamentais", "cidadania", "sociologia", "repertorio redação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-002",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "Constituição de 1988 e a Criação do SUS",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Antes da promulgação da Constituição de 1988, o atendimento médico público e previdenciário no Brasil (via INAMPS) era restrito exclusivamente aos trabalhadores formais com carteira assinada que contribuíam para a previdência. Cerca de metade da população (trabalhadores informais, camponeses e desempregados) era considerada 'indigente sanitária', dependendo de santas casas de misericórdia ou caridade privada. O Artigo 196 da CF/88 alterou esse paradigma ao estabelecer que: 'A saúde é direito de todos e dever do Estado'.",
      source: "História das Políticas de Saúde Pública no Brasil"
    },
    prompt: "A principal ruptura histórica introduzida pela Constituição Cidadã com a criação do Sistema Único de Saúde (SUS) foi a consagração do princípio da:",
    options: [
      { id: "a", text: "universalidade de acesso, garantindo assistência médica e farmacêutica integral e gratuita a qualquer pessoa em território nacional, sem exigência de vínculo contributivo prévio.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "privatização progressiva dos leitos hospitalares mediante copagamento obrigatório dos usuários.", isCorrect: false, distractorRationale: "O SUS é público, gratuito no ponto de atendimento e universal." },
      { id: "c", text: "centralização decisória exclusiva em Brasília, extinguindo a gestão descentralizada nos municípios.", isCorrect: false, distractorRationale: "Uma das diretrizes do SUS é justamente a DESCENTRALIZAÇÃO político-administrativa para os municípios." },
      { id: "d", text: "priorização do atendimento curativo de alta complexidade em detrimento da prevenção e vigilância sanitária.", isCorrect: false, distractorRationale: "O SUS prioriza a atenção básica primária (prevenção e promoção da saúde)." },
      { id: "e", text: "exclusão de estrangeiros e imigrantes não naturalizados dos programas de vacinação pública.", isCorrect: false, distractorRationale: "O SUS atende universalmente qualquer ser humano em solo brasileiro, inclusive estrangeiros temporários e migrantes sem documentação." }
    ],
    detailedExplanation: {
      summary: "O SUS consagrou a universalidade: saúde deixou de ser privilégio dos segurados da previdência e passou a ser direito de cidadania universal garantido pelo Estado.",
      stepByStep: [
        "Passo 1: Recordar o modelo pré-1988: o INAMPS cobria apenas quem tinha carteira assinada; os demais eram 'indigentes sanitários'.",
        "Passo 2: Movimento da Reforma Sanitária (8ª Conferência Nacional de Saúde, 1986): liderado por médicos como Sérgio Arouca, defendeu saúde como direito social universal.",
        "Passo 3: A Constituição de 1988 acolheu essas demandas nos artigos 196 a 200, criando o SUS com três princípios doutrinários fundamentais:",
        "1) Universalidade (todos têm direito);",
        "2) Equidade (tratar desigualmente os desiguais, focando onde há mais vulnerabilidade);",
        "3) Integralidade (visão completa do ser humano: da vacina e saneamento ao transplante de órgãos de alta complexidade)."
      ],
      coreConcept: "Princípios Doutrinários do SUS: Universalidade, Equidade e Integralidade",
      trapWarning: "Cuidado com pegadinhas sobre descentralização: o SUS NÃO é centralizado em Brasília; sua gestão é tripartite descentralizada (União, Estados e Municípios)."
    },
    commonTraps: ["Confundir universalidade com focalização nos contribuintes", "Achar que o SUS só atende procedimentos simples (o SUS realiza mais de 90% dos transplantes do Brasil)"],
    tags: ["sus", "constituicao 1988", "saude publica", "cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-003",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Cidadania e Direitos",
    subtopic: "Gilberto Dimenstein e o 'Cidadão de Papel'",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No livro 'O Cidadão de Papel', o jornalista Gilberto Dimenstein argumenta que, embora o Brasil possua uma das Constituições e legislações de direitos humanos mais avançadas e detalhadas do planeta, existe um abismo intransponível entre o que está assegurado nos textos da lei e a vivência cotidiana de milhões de cidadãos que enfrentam submoradias, hospitais superlotados, fome e violência policial nas periferias urbanas.",
      source: "O Cidadão de Papel (Gilberto Dimenstein, 1993)"
    },
    prompt: "O conceito sociológico de 'cidadão de papel' cunhado pelo autor expressa criticamente a:",
    options: [
      { id: "a", text: "discrepância entre a cidadania formal (garantida no papel das leis) e a cidadania real (a inefetividade prática dos direitos socioeconômicos básicos).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "necessidade urgente de extinguir a Constituição escrita em favor de costumes orais pré-modernos.", isCorrect: false, distractorRationale: "O autor não defende a extinção das leis, mas sua efetivação prática na realidade social." },
      { id: "c", text: "superioridade moral das leis tributárias frente às liberdades individuais de imprensa.", isCorrect: false, distractorRationale: "Essa não é a tese de Dimenstein." },
      { id: "d", text: "ausência de leis no ordenamento jurídico brasileiro que protejam a infância e a juventude.", isCorrect: false, distractorRationale: "O autor destaca justamente que existem ótimas leis (como o ECA), mas elas não são cumpridas plenamente." },
      { id: "e", text: "recusa voluntária das populações periféricas em utilizar os serviços públicos de saúde e educação.", isCorrect: false, distractorRationale: "A precariedade do atendimento decorre de omissão e descaso estatal, não de recusa da população." }
    ],
    detailedExplanation: {
      summary: "Cidadania de Papel: existência de direitos formais na lei que contrastam com a privação material real vivida pelas populações vulneráveis. Repertório de altíssimo impacto para a Redação Nota 1000.",
      stepByStep: [
        "Passo 1: Compreender a crítica de Dimenstein: a legislação brasileira (CF/88, ECA, Código de Defesa do Consumidor) é moderna e progressista no papel.",
        "Passo 2: No entanto, a desigualdade histórica, a inoperância do Estado e a falta de investimentos geram cidadãos que só existem com direitos nos documentos formais.",
        "Passo 3: Na prática, falta-lhes acesso a saneamento básico, educação de qualidade, nutrição adequada e segurança pública equitativa.",
        "Passo 4: Portanto, o termo sintetiza o descompasso entre a cidadania formal (jurídica) e a cidadania material/real."
      ],
      coreConcept: "Cidadania Formal vs. Cidadania Real (Gilberto Dimenstein)",
      trapWarning: "Este conceito é uma das citações mais valorizadas e versáteis pelos corretores do ENEM na Competência 2 e 3 da Redação!"
    },
    commonTraps: ["Achar que Dimenstein critica a existência da lei em si", "Confundir cidadão de papel com analfabetismo funcional"],
    tags: ["dimenstein", "cidadania real", "sociologia brasileira", "repertorio coringa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-004",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "Direitos Indígenas e o Artigo 231 da CF/88",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Artigo 231 da Constituição de 1988 representou uma virada copernicana no indigenismo brasileiro: 'São reconhecidos aos índios sua organização social, costumes, línguas, crenças e tradições, e os direitos originários sobre as terras que tradicionalmente ocupam, competindo à União demarcá-las, proteger e fazer respeitar todos os seus bens'. Rompeu-se, assim, com a secular doutrina assimilacionista tutelar, que tratava os povos originários como populações transitórias que deveriam ser aculturadas e integradas à sociedade ocidental.",
      source: "Constituição da República Federativa do Brasil e Antropologia Jurídica"
    },
    prompt: "Ao reconhecer o direito originário e o direito à alteridade cultural dos povos indígenas, a Carta de 1988 estabelece que a demarcação das terras indígenas pelo Estado possui caráter:",
    options: [
      { id: "a", text: "declaratório de uma posse imemorial preexistente à própria criação do Estado brasileiro, e não concessivo de um favor governamental.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "constitutivo e revogável a qualquer momento conforme as cotações internacionais de commodities agrícolas.", isCorrect: false, distractorRationale: "O direito é originário e imprescritível; a demarcação apenas declara o que já existia antes do Estado." },
      { id: "c", text: "comercial, autorizando a venda das terras ancestrais no mercado imobiliário privado pelos caciques.", isCorrect: false, distractorRationale: "Terras indígenas são inalienáveis e indisponíveis (não podem ser vendidas)." },
      { id: "d", text: "temporário, com validade restrita até que a aldeia tenha acesso a telefonia e internet.", isCorrect: false, distractorRationale: "O acesso à tecnologia moderna não retira a identidade indígena nem o direito à terra." },
      { id: "e", text: "meramente indenizatório aos proprietários de garimpos ilegais da região.", isCorrect: false, distractorRationale: "Garimpo em terra indígena é crime constitucional, não ensejando indenização." }
    ],
    detailedExplanation: {
      summary: "Direito Originário: os indígenas possuem direito à terra anterior ao próprio Estado brasileiro. O ato de demarcação é declaratório (reconhece um direito preexistente), e a posse tradicional é imprescritível e inalienável.",
      stepByStep: [
        "Passo 1: A CF/88 abandonou a tese da integração compulsória (tutela civil do Código de 1916 e Estatuto do Índio de 1973).",
        "Passo 2: Reconheceu o direito à diferença cultural permanente e aos seus territórios ancestrais.",
        "Passo 3: A posse das terras tradicionais é originária (indigenato), significando que o direito sobre elas é anterior à independência ou à colonização portuguesa.",
        "Passo 4: O decreto de demarcação pela União tem natureza DECLARATÓRIA (constata e delimita os limites da ocupação tradicional), e as terras são bens da União com posse exclusiva e usufruto perpétuo das comunidades indígenas."
      ],
      coreConcept: "Direitos Originários dos Povos Indígenas (Art. 231) e Natureza Declaratória da Demarcação",
      trapWarning: "Terras indígenas são de propriedade da União, mas a posse direta e o usufruto das riquezas do solo, rios e florestas pertencem EXCLUSIVAMENTE aos povos indígenas (inalienáveis e impenhoráveis)."
    },
    commonTraps: ["Achar que a União 'dá' a terra de presente aos indígenas", "Achar que os indígenas podem vender suas terras"],
    tags: ["povos indigenas", "artigo 231", "antropologia", "direitos humanos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-005",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Cidadania e Direitos",
    subtopic: "Movimento Negro e Ações Afirmativas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Lei nº 12.711/2012 (Lei de Cotas nas Universidades e Institutos Federais) e a Lei nº 10.639/2003 (que tornou obrigatório o ensino de História e Cultura Afro-Brasileira nas escolas) resultaram de décadas de mobilização do Movimento Negro Unificado (MNU) e de intelectuais antirracistas contra o persistente mito da 'democracia racial' brasileira.",
      source: "Relações Étnico-Raciais e Sociologia Brasileira"
    },
    prompt: "No âmbito da teoria da justiça social e do princípio constitucional da igualdade material, a implementação de políticas públicas de cotas étnico-raciais fundamenta-se na necessidade de:",
    options: [
      { id: "a", text: "adotar medidas de reparação histórica e justiça distributiva que tratem os desiguais na medida de suas desigualdades para mitigar o racismo estrutural.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "premiar apenas os indivíduos com mérito genético comprovado por comissões biométricas.", isCorrect: false, distractorRationale: "O conceito de mérito genético é eugenista e cientificamente rechaçado." },
      { id: "c", text: "isentar o Estado brasileiro de qualquer responsabilidade pelas consequências da escravidão.", isCorrect: false, distractorRationale: "As ações afirmativas reconhecem precisamente a responsabilidade do Estado na exclusão pós-abolição de 1888." },
      { id: "d", text: "restringir a livre concorrência em benefício de grupos estrangeiros de capital de risco.", isCorrect: false, distractorRationale: "Não há relação com grupos financeiros internacionais." },
      { id: "e", text: "preservar a segregação racial espacial como política oficial permanente e inalterável.", isCorrect: false, distractorRationale: "O objetivo das cotas é a integração e diversidade nas posições de liderança e ensino superior, não a segregação." }
    ],
    detailedExplanation: {
      summary: "As ações afirmativas baseiam-se na igualdade material (Aristóteles/Rui Barbosa): tratar desigualmente os desiguais para reduzir assimetrias históricas causadas pelo racismo estrutural pós-abolição sem terra ou reparação.",
      stepByStep: [
        "Passo 1: A abolição da escravidão em 1888 ocorreu sem nenhuma política de integração, distribuição de terras ou educação para os libertos, gerando o racismo estrutural.",
        "Passo 2: A igualdade meramente formal perante a lei ('todos são iguais') é insuficiente quando os pontos de partida são radicalmente desiguais.",
        "Passo 3: Ações afirmativas são políticas públicas temporárias de compensação e indução de mobilidade social focadas em grupos historicamente marginalizados.",
        "Passo 4: Elas democratizam o acesso a carreiras de alta remuneração (Medicina, Direito, Engenharia), promovendo representatividade e rompendo ciclos de exclusão intergeracional."
      ],
      coreConcept: "Ações Afirmativas, Igualdade Material e Superação do Racismo Estrutural",
      trapWarning: "Cuidado: ações afirmativas NÃO violam o princípio da isonomia constitucional. O STF julgou as cotas 100% constitucionais (ADPF 186) por cumprirem o objetivo republicano de erradicar desigualdades."
    },
    commonTraps: ["Confundir igualdade formal (letra da lei) com igualdade material (realidade fática)", "Achar que cotas são permanentes (são políticas transitórias de equidade)"],
    tags: ["movimento negro", "cotas", "acoes afirmativas", "racismo estrutural"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-006",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "Direitos Trabalhistas e a 'Uberização' do Trabalho",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas últimas décadas, a difusão de aplicativos de transporte e entrega por plataformas digitais inaugurou o fenômeno denominado pelos sociólogos de 'uberização' ou plataformização do trabalho. Os prestadores de serviço são apresentados pelas empresas como 'parceiros autônomos' ou 'empreendedores livres' que fazem seu próprio horário, mas estão submetidos ao controle estrito de algoritmos de pontuação, bloqueios arbitrários e jornadas de mais de 12 horas diárias sem garantias previdenciárias de afastamento por acidente ou doença.",
      source: "Sociologia do Trabalho Contemporâneo (Ricardo Antunes)"
    },
    prompt: "Sob a perspectiva sociológica crítica das relações de produção, a transferência integral dos riscos e custos operacionais (veículo, combustível, manutenção e saúde) para o trabalhador plataformizado caracteriza um processo de:",
    options: [
      { id: "a", text: "precarização extrema das condições de trabalho com ocultação da subordinação jurídica e perda de direitos sociais clássicos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "plena emancipação do proletariado, que agora domina os meios de produção algorítmicos globais.", isCorrect: false, distractorRationale: "O trabalhador não domina a infraestrutura do algoritmo nem os dados; está subordinado a eles." },
      { id: "c", text: "consolidação automática da estabilidade no emprego conforme prevista na CLT de 1943.", isCorrect: false, distractorRationale: "A uberização caracteriza-se precisamente pela ausência de carteira assinada, FGTS e estabilidade." },
      { id: "d", text: "extinção da mais-valia em decorrência da distribuição igualitária dos lucros das empresas de tecnologia.", isCorrect: false, distractorRationale: "A taxa de extração de excedente econômico pelas plataformas multinacionais atinge níveis elevados." },
      { id: "e", text: "retorno às corporações de ofício medievais com controle colegiado dos preços pelos sindicatos.", isCorrect: false, distractorRationale: "Não há corporações medievais nem controle dos preços pelos trabalhadores; a precificação é ditada unilateralmente pelo algoritmo." }
    ],
    detailedExplanation: {
      summary: "A 'uberização' representa a precarização do trabalho: o indivíduo é rotulado de 'microempreendedor', mas suporta todos os riscos, custos e desgastes físicos sem salário fixo, previdência, férias ou seguro contra acidentes.",
      stepByStep: [
        "Passo 1: Identificar a ideologia do empreendedorismo de si mesmo (neoliberalismo): convencer o trabalhador de que ele é seu 'próprio patrão'.",
        "Passo 2: Na realidade material, o algoritmo monitora tempo, rota e cancelamentos, caracterizando subordinação direta.",
        "Passo 3: A empresa plataforma desresponsabiliza-se de obrigações trabalhistas e de saúde ocupacional.",
        "Passo 4: O sociólogo Ricardo Antunes denomina esse contingente de 'infoproletariado': trabalhadores sem proteção social na era digital."
      ],
      coreConcept: "Uberização, Plataformização e Precarização do Trabalho Contemporâneo",
      trapWarning: "Excelente argumento e repertório sociológico contemporâneo para temas de redação ligados a trabalho, tecnologia, juventude e previdência social!"
    },
    commonTraps: ["Achar que ser motorista de aplicativo é empreendedorismo genuíno com poder de mercado", "Ignorar a dependência da segurança social pública em caso de invalidez"],
    tags: ["trabalho", "uberizacao", "ricardo antunes", "precarizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-007",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Cidadania e Direitos",
    subtopic: "Direitos da Mulher e Lei Maria da Penha",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Lei nº 11.340/2006 (Lei Maria da Penha) foi sancionada após o Brasil ser condenado pela Comissão Interamericana de Direitos Humanos (CIDH/OEA) por negligência e omissão judicial no caso da farmacêutica Maria da Penha Fernandes, que sofreu duas tentativas de feminicídio por parte de seu marido sem que a justiça comum aplicasse punição efetiva ao agressor por mais de 15 anos.",
      source: "Relatório da CIDH/OEA e Legislação sobre Violência Doméstica"
    },
    prompt: "Além de tipificar a violência física e sexual, a Lei Maria da Penha representou um marco jurídico protetivo fundamental ao reconhecer expressamente no âmbito doméstico as formas de violência:",
    options: [
      { id: "a", text: "psicológica, moral e patrimonial (como retenção de documentos e destruição de bens pessoais).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "exclusivamente cibernética praticada por invasores estrangeiros de servidores bancários.", isCorrect: false, distractorRationale: "A lei protege contra violência doméstica e familiar de gênero, não fraudes bancárias de internet." },
      { id: "c", text: "tributária decorrente de cobrança indevida de IPTU residencial.", isCorrect: false, distractorRationale: "Cobrança tributária não é violência doméstica." },
      { id: "d", text: "corporativa relacionada à demissão sem justa causa de diretoras executivas.", isCorrect: false, distractorRationale: "Demissão sem justa causa é regida pela CLT, não pela Lei Maria da Penha." },
      { id: "e", text: "militar em conflitos armados declarados fora do território nacional.", isCorrect: false, distractorRationale: "Direito internacional humanitário e Convenções de Genebra, sem vínculo com a Lei Maria da Penha." }
    ],
    detailedExplanation: {
      summary: "A Lei Maria da Penha tipifica 5 formas de violência doméstica contra a mulher: Física, Psicológica, Sexual, Patrimonial e Moral. Além disso, criou as medidas protetivas de urgência.",
      stepByStep: [
        "Passo 1: Reconhecer as 5 dimensões da violência doméstica na Lei 11.340/2006:",
        "1. Física: qualquer conduta que ofenda integridade corporal ou saúde;",
        "2. Psicológica: ameaça, humilhação, isolamento, vigilância constante, chantagem emocional;",
        "3. Sexual: coerção ao ato sexual não consentido ou impedimento ao uso de métodos contraceptivos;",
        "4. Patrimonial: retenção, destruição de instrumentos de trabalho, documentos pessoais, bens ou valores;",
        "5. Moral: calúnia, difamação ou injúria no círculo social ou familiar.",
        "Passo 2: A inovação permitiu medidas protetivas de urgência (afastamento imediato do agressor do lar pela autoridade judicial)."
      ],
      coreConcept: "As Cinco Formas de Violência Doméstica da Lei Maria da Penha e Medidas Protetivas",
      trapWarning: "Lembre-se de que violência contra a mulher não é apenas agressão física! Violência psicológica, retenção de salário e destruição de celular são crimes gravíssimos com respaldo legal da lei."
    },
    commonTraps: ["Achar que a lei só pune agressão física evidente", "Desconhecer que o caso Maria da Penha foi julgado em corte internacional de direitos humanos (OEA)"],
    tags: ["lei maria da penha", "direitos da mulher", "violencia domestica", "legislacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-008",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "Estatuto da Criança e do Adolescente (ECA) e Prioridade Absoluta",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Aprovado em 1990 (Lei nº 8.069), o Estatuto da Criança e do Adolescente (ECA) substituiu o antigo Código de Menores da Ditadura Militar, que tratava jovens de classes desfavorecidas como 'em situação irregular', objeto de recolhimento correcional. O ECA incorporou a Doutrina da Proteção Integral formulada pela Convenção Internacional sobre os Direitos da Criança da ONU.",
      source: "Trinta Anos do ECA e Direitos da Infância"
    },
    prompt: "Segundo a doutrina jurídica da Proteção Integral e o Artigo 227 da Constituição de 1988, crianças e adolescentes passaram a ser considerados pelo Estado e pela sociedade como:",
    options: [
      { id: "a", text: "sujeitos de direitos em condição peculiar de desenvolvimento, titulares de prioridade absoluta em políticas públicas de proteção e orçamento.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "propriedade exclusiva do pátrio poder paterno sem qualquer tutela do poder público.", isCorrect: false, distractorRationale: "Crianças são sujeitos autônomos de direitos; o Estado deve intervir em caso de negligência familiar." },
      { id: "c", text: "cidadãos plenos apenas após a conclusão do ensino médio ou alistamento eleitoral aos 16 anos.", isCorrect: false, distractorRationale: "Desde o nascimento a criança é titular plena de direitos fundamentais protegidos pelo ECA." },
      { id: "d", text: "mão de obra fabril prioritária para dinamizar a balança comercial externa.", isCorrect: false, distractorRationale: "O trabalho infantil antes dos 14 anos é terminantemente proibido pela Constituição, sendo permitido apenas como aprendiz a partir dos 14 anos." },
      { id: "e", text: "indivíduos imputáveis pelas leis penais adultas comuns independentemente da idade biológica.", isCorrect: false, distractorRationale: "Menores de 18 anos são penalmente inimputáveis, submetidos a medidas socioeducativas específicas." }
    ],
    detailedExplanation: {
      summary: "O ECA consagrou a criança e o adolescente como SUJEITOS DE DIREITOS em desenvolvimento, com PRIORIDADE ABSOLUTA na destinação de recursos públicos, socorro e proteção familiar e social.",
      stepByStep: [
        "Passo 1: Mudança paradigmática: da 'Doutrina da Situação Irregular' (que tratava o menor pobre como problema de polícia) para a 'Doutrina da Proteção Integral'.",
        "Passo 2: Reconhecimento de que a criança e o adolescente estão em processo de formação biológica, psicológica e moral.",
        "Passo 3: O Artigo 227 da CF/88 estabelece que é dever da família, da sociedade e do Estado assegurar com prioridade absoluta: vida, saúde, educação, lazer, cultura e dignidade.",
        "Passo 4: Prioridade absoluta significa: preferência no socorro, primazia nos serviços públicos e destinação orçamentária prioritária."
      ],
      coreConcept: "Doutrina da Proteção Integral e Prioridade Absoluta da Infância (ECA e Art. 227)",
      trapWarning: "Cuidado: adolescentes de 12 a 18 anos que cometem atos infracionais NÃO ficam impunes; eles respondem a medidas socioeducativas previstas no ECA (como internação em entidade socioeducativa)."
    },
    commonTraps: ["Achar que o ECA aboliu a responsabilização de atos infracionais", "Confundir proteção integral com tutela patriarcal"],
    tags: ["eca", "infancia", "protecao integral", "artigo 227"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-009",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Cidadania e Direitos",
    subtopic: "Acesso à Justiça e Defensoria Pública",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Artigo 134 da Constituição Federal define a Defensoria Pública como 'instituição permanente, essencial à função jurisdicional do Estado, incumbindo-lhe, como expressão e instrumento do regime democrático, fundamentalmente, a orientação jurídica, a promoção dos direitos humanos e a defesa, em todos os graus, judicial e extrajudicial, dos direitos individuais e coletivos, de forma integral e gratuita, aos necessitados'.",
      source: "Direito Constitucional e Acesso à Cidadania"
    },
    prompt: "Em uma sociedade marcada por profundas desigualdades socioeconômicas como a brasileira, a atuação independente da Defensoria Pública é indispensável para evitar que:",
    options: [
      { id: "a", text: "o exercício dos direitos fundamentais e o acesso ao Poder Judiciário fiquem restritos apenas àqueles cidadãos com poder aquisitivo para contratar advogados particulares.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o Ministério Público proponha ações civis públicas de proteção ao patrimônio ecológico.", isCorrect: false, distractorRationale: "O Ministério Público atua em harmonia na defesa coletiva; a Defensoria protege os hipossuficientes." },
      { id: "c", text: "juízes concursados decidam causas de acordo com o ordenamento jurídico vigente.", isCorrect: false, distractorRationale: "A Defensoria atua perante os juízes para garantir o contraditório e a ampla defesa." },
      { id: "d", text: "empresas privadas terceirizem suas despesas de assessoria jurídica ao tesouro nacional.", isCorrect: false, distractorRationale: "A Defensoria atende pessoas físicas hipossuficientes que não podem pagar sem prejuízo de seu sustento." },
      { id: "e", text: "ocorra a aplicação do princípio da presunção de inocência nas varas criminais.", isCorrect: false, distractorRationale: "A presunção de inocência é uma garantia constitucional defendida com vigor pela Defensoria." }
    ],
    detailedExplanation: {
      summary: "A Defensoria Pública garante o mandamento constitucional da 'assistência jurídica integral e gratuita aos hipossuficientes' (Art. 5º, LXXIV), democratizando o acesso à Justiça para quem não tem dinheiro para pagar honorários advocatícios.",
      stepByStep: [
        "Passo 1: Sem defesa técnica qualificada, o cidadão pobre é incapaz de resistir a despejos arbitrários, erros médicos, prisões ilegais ou abusos do poder econômico.",
        "Passo 2: A Constituição garante a ampla defesa e o contraditório (Art. 5º, LV).",
        "Passo 3: A Defensoria Pública não defende apenas causas individuais, mas também tutela direitos coletivos (como vagas em creches, fornecimento de remédios de alto custo pelo SUS e regularização fundiária de favelas).",
        "Passo 4: Ela materializa o princípio de que a Justiça não pode ser privilégio dos ricos."
      ],
      coreConcept: "Acesso à Justiça, Defensoria Pública e Isonomia Material",
      trapWarning: "A Defensoria Pública NÃO defende os interesses do governo (quem defende o governo é a Advocacia-Geral da União / Procuradorias do Estado). A Defensoria defende o cidadão contra abusos, inclusive cometidos pelo próprio Estado!"
    },
    commonTraps: ["Confundir Defensoria Pública com Advocacia do Estado", "Achar que a Defensoria atende pessoas ricas"],
    tags: ["defensoria publica", "acesso a justica", "direitos humanos", "cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-010",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "Democracia Representativa e Participativa",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O parágrafo único do Artigo 1º da Constituição de 1988 estabelece uma fórmula mista de democracia: 'Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição'. Além das eleições periódicas pelo voto secreto, universal e periódico, a Carta Magna assegura instrumentos de exercício direto da soberania popular nos artigos 14 e 61, como o plebiscito, o referendo e a iniciativa popular de lei, além dos conselhos de políticas públicas com paridade entre sociedade civil e governo.",
      source: "Teoria do Estado e Ciência Política Contemporânea"
    },
    prompt: "A conjugação entre os mecanismos representativos e as práticas de democracia participativa no desenho institucional brasileiro tem por objetivo principal:",
    options: [
      { id: "a", text: "superar a apatia política e o distanciamento entre governantes e cidadãos, ampliando o controle social e a deliberação pública sobre as decisões estatais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "transferir o julgamento de crimes dolosos contra a vida exclusivamente para redes sociais virtuais.", isCorrect: false, distractorRationale: "O julgamento desses crimes cabe privativamente ao Tribunal do Júri popular oficial." },
      { id: "c", text: "eliminar o Congresso Nacional para acelerar a aprovação de medidas provisórias executivas.", isCorrect: false, distractorRationale: "Extinguir o parlamento é golpe de Estado ditatorial antidemocrático." },
      { id: "d", text: "permitir que apenas cidadãos diplomados votem em referendos econômicos.", isCorrect: false, distractorRationale: "O sufrágio universal garante voto com o mesmo peso para todos os cidadãos (one person, one vote)." },
      { id: "e", text: "subordinar as decisões do Supremo Tribunal Federal a auditorias de bancos internacionais.", isCorrect: false, distractorRationale: "A soberania popular é nacional e republicana, sem subordinação a bancos privados estrangeiros." }
    ],
    detailedExplanation: {
      summary: "A democracia participativa complementa o voto com canais de engajamento contínuo: conselhos municipais (saúde, educação, assistência social), orçamentos participativos, audiências públicas e leis de iniciativa popular (como a Lei da Ficha Limpa).",
      stepByStep: [
        "Passo 1: A democracia representativa pura limita a participação do cidadão ao ato de votar a cada 2 ou 4 anos.",
        "Passo 2: O modelo da CF/88 é participativo e deliberativo, consagrando o 'Controle Social'.",
        "Passo 3: Mecanismos diretos: Plebiscito (consulta prévia à decisão legislativa), Referendo (aprovação posterior de lei já feita) e Iniciativa Popular (assinatura de 1% do eleitorado nacional em pelo menos 5 estados).",
        "Passo 4: Isso fortalece a accountability (prestação de contas), combate a corrupção e torna as políticas públicas mais aderentes às necessidades reais da população."
      ],
      coreConcept: "Democracia Mista na CF/88: Representativa, Participativa e Deliberativa",
      trapWarning: "Diferença entre Plebiscito e Referendo: Plebiscito = ANTES do ato legal (ex: plebiscito de 1993 sobre monarquia/república); Referendo = DEPOIS que o Congresso fez a lei (ex: referendo de 2005 sobre desarmamento)."
    },
    commonTraps: ["Confundir plebiscito com referendo", "Achar que a democracia brasileira é exclusivamente representativa"],
    tags: ["democracia participativa", "plebiscito", "referendo", "controle social"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-011",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Cidadania e Direitos",
    subtopic: "Dimensões dos Direitos Humanos (Vasak e Bobbio)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na clássica teoria jurídica formulada por Karel Vasak e aprofundada pelo filósofo Norberto Bobbio na obra 'A Era dos Direitos', os direitos fundamentais não surgiram simultaneamente, mas foram conquistados em ondas históricas sucessivas associadas ao lema da Revolução Francesa (Liberdade, Igualdade e Fraternidade):\n• 1ª Dimensão: Direitos civis e políticos (abstenção do Estado / liberdade negativa);\n• 2ª Dimensão: Direitos sociais, econômicos e culturais (prestação positiva do Estado);\n• 3ª Dimensão: Direitos transindividuais e difusos (paz, meio ambiente ecologicamente equilibrado, patrimônio comum da humanidade).",
      source: "A Era dos Direitos - Norberto Bobbio"
    },
    prompt: "Com base nessa classificação teórica, o direito a um meio ambiente ecologicamente equilibrado (Art. 225 da CF/88) e o direito à proteção do patrimônio genético da humanidade inserem-se:",
    options: [
      { id: "a", text: "nos direitos de terceira dimensão, cuja titularidade é difusa e coletiva, transcendendo o indivíduo isolado e demandando a solidariedade e fraternidade intergeracional.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "nos direitos de primeira dimensão, voltados exclusivamente a proteger a liberdade de locomoção de empresários no mercado financeiro.", isCorrect: false, distractorRationale: "Primeira dimensão trata de liberdades civis clássicas (vida, propriedade, liberdade de expressão, voto), não de ecologia." },
      { id: "c", text: "nas prerrogativas de exceção que autorizam a suspensão do habeas corpus em períodos de seca.", isCorrect: false, distractorRationale: "Direitos fundamentais não são medidas de exceção autoritárias." },
      { id: "d", text: "nos privilégios nobiliárquicos hereditários assegurados aos grandes proprietários rurais do semiárido.", isCorrect: false, distractorRationale: "A República veda qualquer título nobiliárquico ou privilégio hereditário de casta." },
      { id: "e", text: "em contratos bilaterais privados de prestação de serviços civis regidos pelo Código Comercial de 1850.", isCorrect: false, distractorRationale: "O direito ambiental é público, indisponível e constitucional." }
    ],
    detailedExplanation: {
      summary: "Os direitos de 3ª dimensão consagram o valor da FRATERNIDADE/SOLIDARIEDADE. Pertencem à coletividade indeterminada (direitos difusos), como o direito à paz, ao meio ambiente equilibrado e à autodeterminação dos povos.",
      stepByStep: [
        "1. Primeira dimensão (séculos XVII-XVIII): Liberdade (Estado liberal mínimo; direitos negativos de defesa contra o arbítrio do rei; civis e políticos).",
        "2. Segunda dimensão (século XIX-XX): Igualdade (Estado de bem-estar social; direitos positivos prestacionais; saúde, educação, previdência, trabalho).",
        "3. Terceira dimensão (pós-Segunda Guerra / anos 1970): Fraternidade/Solidariedade (meio ambiente, paz, desenvolvimento sustentável, direitos dos consumidores).",
        "4. Quarta dimensão (atual): Bioética, engenharia genética, proteção de dados digitais e democracia virtual."
      ],
      coreConcept: "Gerações / Dimensões dos Direitos Humanos (Liberdade, Igualdade, Fraternidade)",
      trapWarning: "No ENEM: Lembre-se do lema da Revolução Francesa para as 3 dimensões: 1ª = Liberdade (Civil/Político); 2ª = Igualdade (Social/Trabalhista); 3ª = Fraternidade (Ambiental/Coletivo)."
    },
    commonTraps: [
      "Achar que direitos de 3ª dimensão substituem os de 1ª e 2ª (eles são cumulativos e interdependentes)",
      "Confundir direitos individuais (1ª dimensão) com direitos difusos (3ª dimensão)"
    ],
    tags: ["direitos-humanos", "dimensoes-dos-direitos", "norberto-bobbio", "meio-ambiente", "cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-012",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "Isonomia Material e Políticas Públicas Reparatórias",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em clássica reflexão jurídica e filosófica, Rui Barbosa enunciou na 'Oração aos Moços' (1920) que a verdadeira regra da igualdade consiste em 'tratar igualmente os iguais e desigualmente os desiguais, na medida em que eles se desigualam'. Esse postulado diferencia a igualdade puramente formal perante a lei (que ignora as desigualdades materiais de partida) da igualdade material substantiva.",
      source: "Oração aos Moços - Rui Barbosa (Teoria Constitucional)"
    },
    prompt: "O princípio da igualdade material fundamenta legitimamente a adoção pelo Estado brasileiro de:",
    options: [
      { id: "a", text: "ações afirmativas e políticas públicas compensatórias de discriminação positiva (como cotas para pessoas com deficiência, cotas raciais e tarifas sociais de energia), com o fito de nivelar desvantagens históricas estruturais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "impostos que cobram exatamente o mesmo valor em reais de todas as famílias, independentemente de sua renda ou patrimônio.", isCorrect: false, distractorRationale: "Isso seria tributação regressiva, que acentua a desigualdade material em vez de reduzi-la." },
      { id: "c", text: "proibições judiciais ao ingresso de grupos minoritários nos tribunais de justiça do país.", isCorrect: false, distractorRationale: "Acesso à justiça é garantia constitucional universal inalienável." },
      { id: "d", text: "distribuição compulsória de terras produtivas desapropriadas para corporações financeiras internacionais.", isCorrect: false, distractorRationale: "A reforma agrária visa assentar famílias camponesas e trabalhadores sem-terra." },
      { id: "e", text: "restrição do direito ao voto apenas aos cidadãos que comprovarem posse de títulos de renda fixa.", isCorrect: false, distractorRationale: "Voto censitário foi extinto no século XIX e viola o sufrágio universal democrático." }
    ],
    detailedExplanation: {
      summary: "A igualdade formal diz apenas que 'todos são iguais perante a lei'. Se uma pessoa rica e uma pessoa em extrema pobreza competem em condições idênticas sem qualquer suporte, a igualdade formal perpetua a injustiça. A igualdade material exige que o Estado crie mecanismos de compensação para promover a equidade real.",
      stepByStep: [
        "1. Igualdade Formal: Ausência de privilégios legais formais (típica do Estado liberal clássico).",
        "2. Insuficiência da igualdade formal: Ignora séculos de escravidão, exclusão socioeconômica e barreiras de gênero/deficiência.",
        "3. Igualdade Material (Substantiva): O Estado atua com 'discriminação positiva' para compensar desníveis de partida.",
        "4. Aplicações no Brasil: Cotas no ensino superior e concursos, gratuidade no transporte para idosos, tarifa social, benefícios assistenciais (BPC)."
      ],
      coreConcept: "Princípio da Isonomia Material vs. Isonomia Formal",
      trapWarning: "No ENEM e na redação nota 1000: 'Tratar desigualmente os desiguais' NÃO é criar privilégio; é promover EQUIDADE para desarticular desigualdades históricas consolidadas."
    },
    commonTraps: [
      "Achar que ações afirmativas violam o princípio da igualdade (elas concretizam a igualdade material)",
      "Confundir igualdade formal (lei abstrata) com material (vida concreta)"
    ],
    tags: ["isonomia-material", "acoes-afirmativas", "equidade", "rui-barbosa", "politicas-publicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-013",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "A Lei de Cotas no Ensino Superior (Lei nº 12.711/2012)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Sancionada em 2012 e aprimorada pela Lei nº 14.723/2023, a Lei de Cotas reservou 50% das vagas em universidades federais e institutos federais de educação profissional e tecnológica para estudantes egressos de escolas públicas, subdividindo essas vagas por critérios de renda familiar per capita, autodeclaração étnico-racial (pretos, pardos e indígenas), quilombolas e pessoas com deficiência.",
      source: "Ministério da Educação (MEC) e Instituto de Pesquisa Econômica Aplicada (IPEA)"
    },
    prompt: "A principal justificativa sociológica e constitucional para a instituição da Lei de Cotas reside na:",
    options: [
      { id: "a", text: "necessidade de democratizar o acesso ao ensino superior público e promover mobilidade social, rompendo com o ciclo histórico de exclusão de alunos de escolas públicas e populações vulnerabilizadas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "eliminação compulsória do mérito acadêmico e da avaliação curricular nos cursos de medicina e engenharia.", isCorrect: false, distractorRationale: "O ingresso por cotas é altamente competitivo e exige alto rendimento no ENEM; estudos comprovam desempenho equivalente ou superior dos cotistas ao longo da graduação." },
      { id: "c", text: "privatização progressiva dos campi universitários federais para diminuir os gastos da União.", isCorrect: false, distractorRationale: "As universidades federais permanecem 100% públicas e gratuitas." },
      { id: "d", text: "redução deliberada do número total de médicos e engenheiros formados anualmente no território nacional.", isCorrect: false, distractorRationale: "A lei expandiu e diversificou o corpo de profissionais formados sem reduzir vagas." },
      { id: "e", text: "substituição de todas as disciplinas científicas por treinos militares obrigatórios de fronteira.", isCorrect: false, distractorRationale: "Distrator estapafúrdio." }
    ],
    detailedExplanation: {
      summary: "A Lei de Cotas combina recorte socioeconômico (escola pública e renda) com recorte étnico-racial proporcional à demografia do IBGE em cada estado. Pesquisas do IPEA demonstraram que as cotas reduziram a evasão, aumentaram a diversidade no campus e não derrubaram as médias acadêmicas.",
      stepByStep: [
        "1. Histórico de exclusão: As universidades públicas eram historicamente dominadas por estudantes de classes altas que cursaram escolas privadas caras.",
        "2. Dupla barreira: Barreira de classe (renda) e barreira racial estrutural.",
        "3. Decisão do STF (ADPF 186): Em 2012, o Supremo Tribunal Federal declarou as cotas unanimente constitucionais com base na igualdade material e no dever estatal de combater o racismo estrutural.",
        "4. Atualização de 2023: Inclusão explícita de estudantes quilombolas e alteração na forma de concorrência (cotistas concorrem primeiro na ampla concorrência; se atingirem a nota, liberam a cota para outros cotistas)."
      ],
      coreConcept: "Ações Afirmativas, Lei de Cotas e Mobilidade Social",
      trapWarning: "No ENEM: A base da Lei de Cotas federal é a ESCOLA PÚBLICA. Todos os cotistas da lei federal estudaram integralmente o ensino médio na rede pública."
    },
    commonTraps: [
      "Achar que cotistas não fazem vestibular ou ENEM",
      "Ignorar que a exigência primária da lei federal é ter cursado o ensino médio em escola pública"
    ],
    tags: ["lei-de-cotas", "acoes-afirmativas", "educacao-superior", "desigualdade-social", "antirracismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-014",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "ECA e a Doutrina da Proteção Integral",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A promulgação do Estatuto da Criança e do Adolescente (ECA - Lei nº 8.069/1990) representou uma ruptura de paradigma na história jurídica brasileira. O antigo Código de Menores de 1979 adotava a 'Doutrina da Situação Irregular', tratando os jovens pobres, abandonados ou em conflito com a lei como meros 'objetos de intervenção penal e assistencialista'. O ECA, alinhado à Convenção da ONU sobre os Direitos da Criança, consagrou a 'Doutrina da Proteção Integral'.",
      source: "30 Anos do Estatuto da Criança e do Adolescente - UNICEF e Conanda"
    },
    prompt: "A 'Doutrina da Proteção Integral' preconizada pelo ECA caracteriza-se pelo reconhecimento de que crianças e adolescentes:",
    options: [
      { id: "a", text: "são sujeitos plenos de direitos em condição peculiar de desenvolvimento, titulares de prioridade absoluta da família, da sociedade e do Estado na garantia à vida, saúde, educação e dignidade.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "devem ser submetidos ao mesmo regime carcerário penitenciário fechado de adultos reincidentes desde os 10 anos de idade.", isCorrect: false, distractorRationale: "O ECA proíbe apenamento criminal comum para menores de 18 anos, prevendo medidas socioeducativas específicas para adolescentes infratores." },
      { id: "c", text: "são propriedades jurídicas exclusivas dos pais, não tendo o Estado o direito de intervir mesmo diante de violência ou maus-tratos comprovados.", isCorrect: false, distractorRationale: "O ECA garante a proteção estatal contra negligência, exploração e violência parental." },
      { id: "d", text: "não possuem direito à convivência familiar comunitária em nenhuma circunstância.", isCorrect: false, distractorRationale: "O direito à convivência familiar e comunitária é um dos pilares centrais do ECA." },
      { id: "e", text: "devem trabalhar em jornadas industriais insalubres noturnas a partir do ensino fundamental.", isCorrect: false, distractorRationale: "O trabalho infantil é vedado no Brasil, permitindo-se apenas a condição de aprendiz a partir dos 14 anos, com proteção e sem insalubridade." }
    ],
    detailedExplanation: {
      summary: "O ECA transformou o 'menor' (termo estigmatizante que designava o jovem pobre ou abandonado) em CRIANÇA e ADOLESCENTE como sujeitos de direitos. O princípio da prioridade absoluta impõe que recursos orçamentários e políticas públicas priorizem a infância.",
      stepByStep: [
        "1. Paradigma anterior (Código de Menores): Doutrina da situação irregular (o jovem só era visto pelo Estado quando 'incomodava' ou cometia infração).",
        "2. Novo paradigma (ECA/1990): Doutrina da Proteção Integral (toda criança e adolescente, sem exceção, tem direitos inalienáveis).",
        "3. Conceito central: Seres humanos em 'condição peculiar de desenvolvimento' biopsicossocial.",
        "4. Redes de garantia: Conselho Tutelar, Varas da Infância e da Juventude e Conselhos Municipais de Direitos."
      ],
      coreConcept: "Doutrina da Proteção Integral e o Estatuto da Criança e do Adolescente",
      trapWarning: "No ENEM: Adolescente em conflito com a lei NÃO comete crime, comete ATO INFRACIONAL; não recebe pena de prisão, recebe MEDIDA SOCIOEDUCATIVA (como internação em entidade especializada)."
    },
    commonTraps: [
      "Achar que o ECA foi criado para punir jovens infratores como se fossem criminosos adultos",
      "Ignorar a mudança conceitual da situação irregular para a proteção integral"
    ],
    tags: ["eca", "protecao-integral", "direitos-da-crianca", "cidadania", "politicas-sociais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-015",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "Estatuto da Pessoa Idosa e Direitos Intergeracionais",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O rápido envelhecimento demográfico da população brasileira desafia as estruturas tradicionais de seguridade social e cuidado. Em 2003, foi promulgado o Estatuto do Idoso (renomeado em 2022 para Estatuto da Pessoa Idosa - Lei nº 10.741/2003), que define como pessoa idosa aquela com idade igual ou superior a 60 anos, estabelecendo punições severas para o abandono moral, material e a violência patrimonial contra a terceira idade.",
      source: "Ministério dos Direitos Humanos e Cidadania - Secretaria Nacional dos Direitos da Pessoa Idosa"
    },
    prompt: "Dentre as garantias fundamentais asseguradas expressamente pelo Estatuto da Pessoa Idosa, destaca-se:",
    options: [
      { id: "a", text: "a prioridade especial de atendimento aos maiores de 80 anos, a gratuidade no transporte público coletivo urbano e a tipificação penal da apropriação indébita de pensões e aposentadorias de idosos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a perda automática da capacidade civil e da guarda de bens a qualquer indivíduo que complete 60 anos.", isCorrect: false, distractorRationale: "O idoso mantém plena capacidade civil e autonomia jurídica, salvo decisão judicial individual por incapacidade de discernimento." },
      { id: "c", text: "a exclusão definitiva das pessoas com mais de 65 anos de todos os tratamentos hospitalares de alta complexidade do SUS.", isCorrect: false, distractorRationale: "O SUS garante universalidade e integralidade; idosos têm prioridade no atendimento e acesso integral a medicamentos e cirurgias." },
      { id: "d", text: "a obrigação de internamento compulsório em asilos para todos os aposentados sem filhos vivos.", isCorrect: false, distractorRationale: "O abrigamento institucional é medida excepcional; a lei prioriza a convivência no ambiente familiar e comunitário." },
      { id: "e", text: "o confisco de bens pelo Estado quando o idoso decide casar-se novamente.", isCorrect: false, distractorRationale: "Viola a autonomia pessoal e patrimonial do cidadão idoso." }
    ],
    detailedExplanation: {
      summary: "Com a transição demográfica e o aumento da expectativa de vida, o Estatuto da Pessoa Idosa assegurou direitos civis, prioridade na tramitação judicial, canais de denúncia (Disque 100) contra violência doméstica e proteção especial aos 'superidosos' (maiores de 80 anos).",
      stepByStep: [
        "1. Demografia: O Brasil caminha rapidamente para se tornar um país com mais idosos do que crianças nas próximas décadas.",
        "2. Proteção patrimonial: É comum o abuso financeiro por parentes (empréstimos consignados sem consentimento, apropriação de cartões de aposentadoria); o Estatuto tornou isso crime com pena de reclusão.",
        "3. Prioridade sobre a prioridade: Em 2017, a lei criou atendimento preferencial imediato dos maiores de 80 anos sobre os demais idosos.",
        "4. Cidadania ativa: O estatuto não trata a velhice como doença, mas como etapa legítima de vida com direito ao lazer, cultura e educação."
      ],
      coreConcept: "Estatuto da Pessoa Idosa, Transição Demográfica e Direitos Intergeracionais",
      trapWarning: "No ENEM: A regra geral de pessoa idosa no Brasil começa aos 60 anos; a prioridade especial dentre os idosos é para quem tem mais de 80 anos."
    },
    commonTraps: [
      "Achar que o idoso perde o direito de administrar suas finanças ao se aposentar",
      "Ignorar a importância da violência patrimonial nas denúncias de violações de direitos humanos de idosos"
    ],
    tags: ["estatuto-da-pessoa-idosa", "envelhecimento-demografico", "cidadania", "direitos-sociais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-016",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "Lei Maria da Penha e Formas de Violência Doméstica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Aprovada após recomendação formal da Comissão Interamericana de Direitos Humanos da OEA, a Lei Maria da Penha (Lei nº 11.340/2006) criou mecanismos inovadores para coibir e prevenir a violência doméstica e familiar contra a mulher. No Artigo 7º, a legislação inova ao tipificar cinco formas distintas de violência: física, psicológica, sexual, patrimonial e moral.",
      source: "Lei Maria da Penha e Jurisprudência dos Direitos da Mulher"
    },
    prompt: "De acordo com o texto da lei, a conduta de um agressor que destrói intencionalmente documentos pessoais, quebra o celular de trabalho da companheira e retém o seu cartão bancário classifica-se juridicamente como violência:",
    options: [
      { id: "a", text: "patrimonial, caracterizada pela retenção, subtração ou destruição parcial ou total de seus objetos, instrumentos de trabalho, documentos pessoais, bens ou valores econômicos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "física, caracterizada exclusivamente por lesões corporais que deixam marcas hematológicas aparentes na derme.", isCorrect: false, distractorRationale: "Violência física atenta diretamente contra a integridade ou saúde corporal da mulher." },
      { id: "c", text: "moral, limitada exclusivamente a calúnia, difamação ou injúria verbal.", isCorrect: false, distractorRationale: "Violência moral atenta contra a reputação e honra; a destruição de bens e retenção de dinheiro é violência patrimonial." },
      { id: "d", text: "acidental, não punível caso o casal resida sob o mesmo teto em regime de comunhão de bens.", isCorrect: false, distractorRationale: "O regime de bens do casamento não isenta o agressor de responsabilidade penal na Lei Maria da Penha." },
      { id: "e", text: "psiquiátrica, resultante apenas de delírios psicóticos medicamente diagnosticados.", isCorrect: false, distractorRationale: "Essa classificação não existe no texto legal da Lei Maria da Penha." }
    ],
    detailedExplanation: {
      summary: "Muitas mulheres permanecem presas em relações violentas porque o agressor controla seu dinheiro e destrói seus meios de subsistência. A tipificação da violência PATRIMONIAL e da violência PSICOLÓGICA (isolamento social, humilhação, vigilância constante) desmistificou a ideia de que agressão só ocorre quando há espancamento físico.",
      stepByStep: [
        "1. As 5 formas de violência na Lei Maria da Penha:",
        "   • Física: qualquer ofensa à integridade ou saúde corporal.",
        "   • Psicológica: dano emocional, diminuição da autoestima, controle de passos, humilhação, chantagem.",
        "   • Sexual: presenciar, manter ou forçar relação sexual não consentida.",
        "   • Patrimonial: reter salário, quebrar celular, queimar roupas, reter documentos.",
        "   • Moral: calúnia, difamação ou injúria.",
        "2. Medidas protetivas de urgência: afastamento do agressor do lar, proibição de aproximação e suspensão de posse de arma."
      ],
      coreConcept: "As 5 Formas de Violência Doméstica da Lei Maria da Penha",
      trapWarning: "No ENEM: Reter cartão de banco, confiscar salário ou quebrar instrumentos de trabalho da mulher é VIOLÊNCIA PATRIMONIAL."
    },
    commonTraps: [
      "Achar que violência doméstica só existe se houver agressão física com hematomas",
      "Confundir violência moral (honra) com patrimonial (bens/documentos)"
    ],
    tags: ["lei-maria-da-penha", "violencia-patrimonial", "direitos-das-mulheres", "genero", "cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-017",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Cidadania e Direitos",
    subtopic: "Novos Movimentos Sociais e Teoria Crítica",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Para sociólogos contemporâneos como Alain Touraine e Jürgen Habermas, a segunda metade do século XX testemunhou a transição dos 'movimentos sociais tradicionais' (centrados na luta de classes fabril, no sindicato operário e na disputa pelo controle dos meios de produção) para os chamados 'novos movimentos sociais'. Estes últimos articulam-se em torno de bandeiras ecológicas, feministas, LGBTQIA+, pacifistas, antirracistas e de povos originários.",
      source: "Movimentos Sociais e Sociedade Pós-Industrial - Alain Touraine"
    },
    prompt: "A principal distinção conceitual que singulariza os 'novos movimentos sociais' em relação aos movimentos operários tradicionais reside no fato de que suas lutas se concentram prioritariamente na:",
    options: [
      { id: "a", text: "defesa da identidade cultural, da qualidade de vida, da autonomia individual e do reconhecimento simbólico das diferenças, para além da mera reivindicação econômica de salários e benefícios materiais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "destruição imediata de todas as universidades e hospitais públicos do hemisfério ocidental.", isCorrect: false, distractorRationale: "Os novos movimentos sociais defendem a ampliação da cidadania e da educação inclusiva." },
      { id: "c", text: "proposta de reintrodução do trabalho escravo nas lavouras de exportação do sul global.", isCorrect: false, distractorRationale: "Totalmente absurdo e antagônico à pauta dos direitos humanos." },
      { id: "d", text: "restauração de monarquias absolutistas feudais na América Latina.", isCorrect: false, distractorRationale: "Os novos movimentos são democratizantes e antiautoritários." },
      { id: "e", text: "recusa categórica em utilizar qualquer meio de comunicação moderno ou mídias digitais.", isCorrect: false, distractorRationale: "Os novos movimentos utilizam ativamente redes digitais e campanhas ciberativistas transnacionais." }
    ],
    detailedExplanation: {
      summary: "Enquanto o movimento operário tradicional lutava pelo pão e pelo salário (distribuição material e tomada do poder de Estado), os Novos Movimentos Sociais lutam pela CULTURA, IDENTIDADE e RECONHECIMENTO (Nancy Fraser e Axel Honneth).",
      stepByStep: [
        "1. Movimento Tradicional: Base fabril/sindical, sujeito histórico = proletariado, objetivo = poder estatal e redistribuição econômica.",
        "2. Novos Movimentos Sociais (anos 1960 em diante): Pluralidade de sujeitos (mulheres, negros, ambientalistas, indígenas, jovens).",
        "3. Pautas pós-materiais: Estilo de vida, relação com a natureza, diversidade de gênero, dignidade dos corpos, combate a preconceitos culturais.",
        "4. Estrutura organizacional: Menos burocrática e hierárquica, organizada em redes descentralizadas e coletivos horizontais."
      ],
      coreConcept: "Novos Movimentos Sociais: Da Redistribuição ao Reconhecimento",
      trapWarning: "No ENEM: Os novos movimentos sociais não anulam as reivindicações econômicas; eles ampliam o debate para o campo do RECONHECIMENTO e da DIGNIDADE IDENTITÁRIA."
    },
    commonTraps: [
      "Achar que novos movimentos sociais se preocupam apenas com questões financeiras",
      "Ignorar a importância do conceito sociológico de 'reconhecimento simbólico'"
    ],
    tags: ["movimentos-sociais", "novos-movimentos-sociais", "touraine", "reconhecimento", "identidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-018",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "Acesso à Justiça e a Defensoria Pública (Art. 134 da CF/88)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O jurista italiano Mauro Cappelletti, em sua célebre obra 'Acesso à Justiça', destacou que a primeira e mais dramática 'onda' de democratização do sistema jurídico consiste em superar o obstáculo econômico que impede os cidadãos de baixa renda de contratar advogados particulares para defender seus direitos fundamentais. No Brasil, o Artigo 134 da Constituição Federal de 1988 consagrou a Defensoria Pública como instituição permanente essencial à função jurisdicional do Estado.",
      source: "Acesso à Justiça - Mauro Cappelletti e Bryant Garth"
    },
    prompt: "A missão constitucional atribuída com exclusividade à Defensoria Pública no desenho institucional republicano consiste na:",
    options: [
      { id: "a", text: "orientação jurídica integral e gratuita e defesa dos direitos individuais e coletivos das pessoas necessitadas (hipossuficientes econômicas e organizacionais) em todos os graus de jurisdição.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "defesa intransigente dos interesses tributários da União contra os cidadãos contribuintes.", isCorrect: false, distractorRationale: "Essa é a função da Advocacia-Geral da União (AGU), que defende o Estado, não os cidadãos necessitados." },
      { id: "c", text: "acusação penal de réus e abertura de inquéritos policiais de ofício nos presídios estaduais.", isCorrect: false, distractorRationale: "A acusação penal cabe ao Ministério Público (MP), enquanto a Defensoria atua na defesa e garantia de direitos." },
      { id: "d", text: "cobrança de honorários contratuais de luxo aos usuários cadastrados em programas sociais.", isCorrect: false, distractorRationale: "O atendimento da Defensoria Pública é gratuito para os hipossuficientes, sendo vedada a cobrança de honorários advocatícios privados." },
      { id: "e", text: "substituição dos juízes togados nos tribunais de apelação e corte marcial.", isCorrect: false, distractorRationale: "A Defensoria atua como órgão postulante e de tutela de direitos, não como órgão julgador." }
    ],
    detailedExplanation: {
      summary: "Sem Defensoria Pública atuante, a Constituição vira 'letra morta' para as populações periféricas. A Defensoria garante o contraditório, move ações civis públicas por vagas em creches, remédios no SUS e habitação, além de atuar nas audiências de custódia.",
      stepByStep: [
        "1. Obstáculo econômico: Processos judiciais custam caro (custas forenses e honorários de advogados).",
        "2. Solução constitucional (Art. 134 da CF/88): Defensoria Pública é autônoma, custeada pelo erário e vocacionada à promoção dos direitos humanos.",
        "3. Conceito de Hipossuficiente: Não é apenas quem não tem dinheiro; inclui hipossuficiência informacional e de vulnerabilidade (ex.: mulheres vítimas de violência, pessoas em situação de rua, crianças acolhidas).",
        "4. Distinção essencial: MP acusa (promove ação penal pública); Defensoria defende (assegura o devido processo legal)."
      ],
      coreConcept: "Acesso à Justiça, Defensoria Pública e Tutela dos Hipossuficientes",
      trapWarning: "No ENEM: Diferencie com clareza: AGU defende o governo/Estado; MP fiscaliza a lei e acusa na esfera penal; Defensoria Pública defende o cidadão vulnerável sem dinheiro para advogado."
    },
    commonTraps: [
      "Confundir as atribuições da Defensoria Pública com as do Ministério Público ou da AGU",
      "Achar que defensoria só atua em casos criminais (atua massivamente em família, moradia e saúde pública)"
    ],
    tags: ["acesso-a-justica", "defensoria-publica", "cf88", "cidadania", "hipossuficiencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-019",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "Liberdade de Expressão vs Discurso de Ódio no STF",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No histórico julgamento do Habeas Corpus nº 82.424 (o célebre 'Caso Ellwanger', julgado em 2003), o Supremo Tribunal Federal brasileiro debateu a condenação de um editor de livros por crime de racismo decorrente da publicação e venda de obras que negavam o Holocausto e propagavam conteúdo antissemita. A defesa alegou que a condenação violava a garantia constitucional da liberdade de expressão (Art. 5º, IX da CF/88).",
      source: "Jurisprudência Constitucional do STF - Caso Ellwanger (HC 82.424/RS)"
    },
    prompt: "Ao manter a condenação penal do editor por crime de racismo inafiançável e imprescritível, a decisão paradigmática do STF fixou a tese jurídica de que:",
    options: [
      { id: "a", text: "a liberdade de expressão não é um direito absoluto e não pode ser brandida como salvo-conduto para a incitação ao ódio, à discriminação ou à desumanização de grupos sociais vulnerabilizados.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "nenhum livro ou impresso de qualquer natureza pode ser vendido comercialmente no país sem chancela prévia da polícia.", isCorrect: false, distractorRationale: "A censura prévia é vedada pela CF/88; o controle sobre crimes de ódio é posterior com responsabilização penal." },
      { id: "c", text: "o antissemitismo é uma manifestação cultural legítima que não se enquadra na definição sociológica de racismo.", isCorrect: false, distractorRationale: "O STF reconheceu expressamente que o racismo compreende qualquer discriminação biológica ou sociocultural contra grupos humanos, inclusive o povo judeu." },
      { id: "d", text: "o direito de propriedade comercial privada se sobrepõe a todos os tratados internacionais de direitos humanos.", isCorrect: false, distractorRationale: "A dignidade da pessoa humana prevalece sobre a exploração econômica de materiais criminosos." },
      { id: "e", text: "todos os cidadãos brasileiros perdem automaticamente seus direitos políticos ao ingressarem no setor editorial.", isCorrect: false, distractorRationale: "Distrator sem cabimento." }
    ],
    detailedExplanation: {
      summary: "O Caso Ellwanger é o divisor de águas do Direito Constitucional brasileiro: estabeleceu que não existem direitos fundamentais absolutos. Quando a 'liberdade de manifestação' colide frontalmente com a 'Dignidade da Pessoa Humana' (núcleo da Carta Magna) e com o repúdio ao racismo (crime inafiançável e imprescritível), a liberdade cede passo à proteção da vida e da dignidade.",
      stepByStep: [
        "1. Conflito aparente de princípios: Liberdade de Expressão vs. Dignidade Humana e Princípio da Não-Discriminação.",
        "2. Ponderação de valores (Robert Alexy): O exercício de um direito não pode servir de escudo para aniquilar o direito à existência digna de outrem.",
        "3. Conceito constitucional de Racismo: Vai além da cor da pele; abrange a segregação e estigmatização de qualquer grupo étnico, religioso ou cultural (antissemitismo incluído).",
        "4. Atualidade: Esse precedente é a base teórica usada hoje pelo STF e TSE para combater o discurso de ódio (hate speech) e campanhas digitais de desinformação antidemocrática."
      ],
      coreConcept: "Limites da Liberdade de Expressão e Repúdio ao Discurso de Ódio (Caso Ellwanger)",
      trapWarning: "No ENEM: Em uma democracia constitucional, NENHUM direito fundamental é absoluto. A liberdade de expressão termina onde começa a violação dos direitos humanos do outro."
    },
    commonTraps: [
      "Achar que a liberdade de expressão autoriza difamação, racismo ou apologia ao nazismo",
      "Confundir liberdade crítica legítima com incitação criminosa ao ódio"
    ],
    tags: ["liberdade-de-expressao", "discurso-de-odio", "caso-ellwanger", "stf", "antirracismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-CID-020",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Cidadania e Direitos",
    subtopic: "O SUS e os Princípios da Seguridade Social na CF/88",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Constituição de 1988 consagrou a saúde como 'direito de todos e dever do Estado' (Art. 196), integrando a Seguridade Social junto à Previdência e à Assistência Social. A criação do Sistema Único de Saúde (SUS), regulamentado pela Lei Orgânica da Saúde (Lei nº 8.080/1990), consolidou um modelo tripartite estruturado sobre princípios doutrinários (Universalidade, Integralidade e Equidade) e organizativos (Descentralização, Regionalização e Participação da Comunidade).",
      source: "História das Políticas de Saúde no Brasil - Gilson Carvalho e Fiocruz"
    },
    prompt: "No funcionamento prático do SUS, o princípio doutrinário da EQUIDADE manifesta-se através:",
    options: [
      { id: "a", text: "da destinação prioritária e diferenciada de recursos e atenção à saúde para populações em situação de maior vulnerabilidade social e risco epidemiológico, reconhecendo que indivíduos diferentes possuem necessidades desiguais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "da cobrança obrigatória de taxas hospitalares proporcionais ao salário de cada cidadão atendido na emergência pública.", isCorrect: false, distractorRationale: "O SUS é 100% gratuito em todos os níveis de complexidade, sendo vedada a cobrança de qualquer coparticipação." },
      { id: "c", text: "da exclusão de comunidades ribeirinhas e indígenas dos programas de vacinação e saneamento básico.", isCorrect: false, distractorRationale: "O SUS possui subsistemas dedicados à saúde indígena e atenção primária fluvial para garantir equidade aos povos da floresta." },
      { id: "d", text: "da centralização burocrática de todas as decisões hospitalares exclusivamente em Brasília.", isCorrect: false, distractorRationale: "O SUS adota o princípio da DESCENTRALIZAÇÃO com comando único em cada esfera de governo (município, estado e União)." },
      { id: "e", text: "da extinção de todos os conselhos municipais de saúde com participação popular.", isCorrect: false, distractorRationale: "A participação da comunidade é princípio organizativo obrigatório assegurado pela Lei 8.142/90." }
    ],
    detailedExplanation: {
      summary: "Os 3 princípios doutrinários do SUS são a espinha dorsal da saúde pública brasileira: 1) Universalidade (saúde para todos, sem distinção de renda ou emprego); 2) Integralidade (visão do ser humano em sua totalidade: prevenção, tratamento e reabilitação); 3) Equidade (tratar com mais cuidado quem mais precisa, reduzindo disparidades sociais).",
      stepByStep: [
        "1. Universalidade: Superou o modelo do antigo INAMPS, que só atendia trabalhadores com carteira assinada; agora todo residente no Brasil tem direito ao SUS.",
        "2. Integralidade: Do transplante de órgãos complexo e vacina gratuita à vigilância sanitária em restaurantes.",
        "3. Equidade: Não é tratar todo mundo de forma cega e idêntica ('igualdade'), mas investir mais onde há mais fome, mais pobreza, mais leishmaniose ou falta de saneamento.",
        "4. Participação social: Conselhos e Conferências de Saúde com 50% de usuários da sociedade civil (paridade de voz)."
      ],
      coreConcept: "Princípios do SUS: Universalidade, Integralidade e Equidade",
      trapWarning: "No ENEM: Diferencie: Universalidade = QUEM tem direito (todos); Integralidade = O QUE o SUS cobre (tudo, da vacina ao transplante); Equidade = COMO atende (dando mais atenção a quem tem mais carência)."
    },
    commonTraps: [
      "Confundir Universalidade com Equidade",
      "Achar que o SUS foi criado antes da Constituição de 1988 (antes existia o INAMPS, restrito a quem tinha carteira assinada)"
    ],
    tags: ["sus", "seguridade-social", "universalidade", "equidade", "saude-publica", "cf88"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

