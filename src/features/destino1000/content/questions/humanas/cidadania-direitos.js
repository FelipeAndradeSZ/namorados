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
  }
];
