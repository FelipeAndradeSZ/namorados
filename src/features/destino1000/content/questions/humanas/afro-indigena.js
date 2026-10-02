/**
 * BANCO DE QUESTÕES: HISTÓRIA E CULTURA AFRO-BRASILEIRA E INDÍGENA NO ENEM
 * Área: Ciências Humanas e suas Tecnologias
 * Competências: C1, C2, C3, C5 | Habilidades: H1, H4, H11, H14, H15, H26
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de precisão conceitual e pedagógica (Leis 10.639/03 e 11.645/08)
 * Regra Estrita: ZERO termos de deslocamentos turísticos.
 */

export const QUESTIONS_AFRO_INDIGENA = [
  {
    id: "HUM-ETN-001",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "História e Cultura dos Povos Indígenas",
    subtopic: "Cosmologia, Territorialidade e Visão da Natureza",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O nosso tempo é especialista em criar ausências: do sentido de viver em sociedade, do próprio sentido da experiência da vida. Isso gera uma intolerância muito grande com quem ainda é capaz de experimentar o prazer de estar vivo, de dançar, de cantar. E está cheio de pequenas constelações de gente espalhada pelo mundo que dança, canta, faz chover. [...] A minha provocação sobre adiar o fim do mundo é exatamente sempre poder contar mais uma história. Se pudermos fazer isso, estaremos adiando o fim.",
      source: "KRENAK, Ailton. Ideias para adiar o fim do mundo. São Paulo: Companhia das Letras, 2019, p. 26-27."
    },
    prompt: "No pensamento de Ailton Krenak, a crítica à modernidade ocidental e a defesa dos modos de vida originários fundamentam-se na concepção de que",
    options: [
      {
        id: "a",
        text: "o progresso técnico-científico deve assimilar os saberes rituais para acelerar a mercantilização de recursos biológicos.",
        isCorrect: false,
        distractorRationale: "Krenak se opõe frontalmente à mercantilização da natureza e à lógica utilitarista do extrativismo predatório."
      },
      {
        id: "b",
        text: "a separação entre humanidade e natureza constitui uma ilusão ocidental superável pela reafirmação de vínculos cosmopolíticos e comunitários com o planeta.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Krenak demonstra que a visão eurocêntrica dissociou o ser humano da terra ('recursos naturais'), enquanto os povos indígenas vivenciam a terra como organismo vivo parente."
      },
      {
        id: "c",
        text: "as populações tradicionais necessitam integrar-se ao mercado de consumo global para assegurar a preservação de sua memória oral.",
        isCorrect: false,
        distractorRationale: "O autor não condiciona a sobrevivência cultural à inserção no consumo capitalista; pelo contrário, critica a lógica consumista que devora o planeta."
      },
      {
        id: "d",
        text: "a sobrevivência física das comunidades nativas depende da adoção de modelos monocultores de alto rendimento.",
        isCorrect: false,
        distractorRationale: "A monocultura é modelo antagônico à agroecologia e ao manejo tradicional da floresta praticado pelos povos indígenas."
      },
      {
        id: "e",
        text: "o esgotamento civilizatório é um processo inexorável que prescinde de resistências culturais e simbólicas.",
        isCorrect: false,
        distractorRationale: "O texto afirma explicitamente que 'adiar o fim do mundo' é um ato contínuo de resistência por meio da narrativa, dos ritos e da arte de viver."
      }
    ],
    detailedExplanation: {
      summary: "A cosmologia indígena expressa por Ailton Krenak recusa a cisão moderna entre sociedade e natureza.",
      stepByStep: [
        "1. Analisar o excerto: Krenak denuncia as 'ausências' criadas pela modernidade ocidental consumista e tecnicista.",
        "2. Identificar a tese central: os povos originários mantêm relações de parentesco com montanhas, rios e florestas, resistindo ao colapso socioambiental.",
        "3. Conectar à alternativa correta: a superação da dicotomia humanidade-natureza por meio de práticas comunitárias e ancestrais."
      ],
      coreConcept: "Perspectivismo ameríndio e cosmopolítica indígena: a natureza não é mero estoque de recursos, mas sujeito de relações éticas e afetivas.",
      trapWarning: "Cuidado com alternativas que propõem assimilação, integração ao agronegócio ou subordinação à lógica mercantil."
    },
    commonTraps: ["Interpretar a obra de Krenak como fatalismo pessimista em vez de um manifesto de resistência ativa."],
    tags: ["Filosofia Indígena", "Ailton Krenak", "Cosmologia", "Ecologia Política"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-002",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Direitos Indígenas e Legislação Brasileira",
    subtopic: "Artigo 231 da Constituição de 1988 e Demarcação",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "São reconhecidos aos índios sua organização social, costumes, línguas, crenças e tradições, e os direitos originários sobre as terras que tradicionalmente ocupam, competindo à União demarcá-las, proteger e fazer respeitar todos os seus bens. As terras tradicionalmente ocupadas pelos índios destinam-se a sua posse permanente, cabendo-lhes o usufruto exclusivo das riquezas do solo, dos rios e dos lagos nelas existentes.",
      source: "BRASIL. Constituição da República Federativa do Brasil de 1988. Artigo 231, caput e § 2º."
    },
    prompt: "O texto constitucional de 1988 representou uma ruptura paradigmática no ordenamento jurídico brasileiro em relação às populações indígenas porque",
    options: [
      {
        id: "a",
        text: "abandonou a tutela integracionista e assimilacionista em favor do direito à diferença e à posse imemorial das terras originárias.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Antes de 1988, a legislação tratava os indígenas como 'relativamente incapazes' a serem integrados/assimilados à 'comunhão nacional'. A Carta Magna de 1988 reconheceu a cidadania plena e o direito permanente de manter suas culturas e territórios."
      },
      {
        id: "b",
        text: "transferiu a titularidade definitiva e alienável da propriedade fundiária aos caciques locais para comercialização em bolsa.",
        isCorrect: false,
        distractorRationale: "As terras indígenas são bens públicos da União; os povos indígenas detêm a posse permanente e o usufruto exclusivo, sendo as terras inalienáveis e indisponíveis."
      },
      {
        id: "c",
        text: "estabeleceu a obrigatoriedade da conversão religiosa das etnias ao catolicismo como condição para a demarcação.",
        isCorrect: false,
        distractorRationale: "A Constituição assegura a liberdade religiosa e o respeito absoluto às crenças e costumes ancestrais de cada povo."
      },
      {
        id: "d",
        text: "restringiu o reconhecimento territorial exclusivamente às comunidades que adotassem o português como idioma exclusivo.",
        isCorrect: false,
        distractorRationale: "O artigo reconhece explicitamente o uso e o ensino das línguas maternas e processos próprios de aprendizagem (art. 210, § 2º)."
      },
      {
        id: "e",
        text: "autorizou a exploração mineral predatória privada independentemente de consulta prévia ou autorização do Congresso Nacional.",
        isCorrect: false,
        distractorRationale: "A exploração mineral em terras indígenas depende de lei específica, aprovação do Congresso e consulta às comunidades afetadas."
      }
    ],
    detailedExplanation: {
      summary: "A Carta de 1988 encerrou o paradigma da assimilação forçada herdado do Estatuto do Índio de 1973.",
      stepByStep: [
        "1. Identificar o modelo pré-1988: tutelar, paternalista, visava desaparecer com a identidade indígena integrando-a à sociedade envolvente.",
        "2. Identificar a inovação de 1988 (Art. 231): reconhecimento de 'direitos originários' (anteriores à formação do próprio Estado) e posse permanente.",
        "3. Concluir que a inovação reside no respeito à pluralidade sociocultural e autodeterminação."
      ],
      coreConcept: "Direitos originários e multiculturalismo constitucional no Brasil pós-redemocratização.",
      trapWarning: "Terras indígenas NÃO são propriedade privada dos indivíduos: pertencem à União, cabendo aos indígenas a posse perpétua e o usufruto exclusivo."
    },
    commonTraps: ["Achar que a terra indígena pode ser vendida, loteada ou penhorada."],
    tags: ["Constituição de 1988", "Artigo 231", "Direitos Indígenas", "Demarcação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-003",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Resistência Negra e Escravidão",
    subtopic: "Revolta dos Malês (Bahia, 1835)",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na noite de 24 para 25 de janeiro de 1835, eclodiu em Salvador um levante que aterrorizou as elites provinciais. Tratava-se da Revolta dos Malês, protagonizada predominantemente por africanos islamizados (haussás e iorubás/nagôs). Muitos dos revoltosos sabiam ler e escrever em árabe e portavam amuletos com versículos corânicos (patuás) para proteção no combate.",
      source: "REIS, João José. Rebelião escrava no Brasil: a história do levante dos malês em 1835. São Paulo: Companhia das Letras, 2003."
    },
    prompt: "A peculiaridade da Revolta dos Malês no quadro dos movimentos insurrecionais do período regencial manifestou-se na",
    options: [
      {
        id: "a",
        text: "adesão incondicional dos grandes proprietários de engenho do Recôncavo Baiano às pautas abolicionistas.",
        isCorrect: false,
        distractorRationale: "Os senhores de engenho e a elite branca reprimiram violentamente a revolta para preservar a ordem escravista."
      },
      {
        id: "b",
        text: "organização conspiratória pautada no letramento em língua árabe e na identidade religiosa islâmica como fator de coesão comunitária.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O islamismo e o letramento em árabe funcionaram como elemento mobilizador e código secreto de comunicação entre os insurgentes urbanos em Salvador."
      },
      {
        id: "c",
        text: "reivindicação exclusiva de redução de impostos alfandegários para a exportação do charque sulista.",
        isCorrect: false,
        distractorRationale: "Essa era a pauta da Guerra dos Farrapos no Rio Grande do Sul, não da Revolta dos Malês."
      },
      {
        id: "d",
        text: "proclamação imediata de uma monarquia parlamentar federativa sob a liderança dos militares da Guarda Nacional.",
        isCorrect: false,
        distractorRationale: "A Guarda Nacional foi o instrumento repressor do Estado contra os rebeldes malês, que visavam a libertação dos escravizados e o controle do poder local."
      },
      {
        id: "e",
        text: "aliança tática com os regentes moderados para garantir a deportação pacífica de colonos portugueses.",
        isCorrect: false,
        distractorRationale: "Os regentes combateram com força bélica desproporcional a revolta, impondo açoites públicos, execuções e banimento aos revoltosos."
      }
    ],
    detailedExplanation: {
      summary: "A Revolta dos Malês (1835) destacou-se pela presença de cativos e libertos muçulmanos letrados que usaram o árabe e o islã para conspirar contra o cativeiro.",
      stepByStep: [
        "1. Identificar o contexto: Período Regencial (1831-1840) e Salvador urbana, cidade com maioria negra.",
        "2. Caracterizar os malês: escravizados de ganho e libertos urbanos, das etnias haussá e nagô, praticantes do islamismo.",
        "3. Destacar o fator distintivo: o domínio da escrita árabe permitiu que conspirassem por meio de bilhetes indecifráveis para os senhores e feitores brancos analfabetos em árabe."
      ],
      coreConcept: "Agência escrava urbana e pluralidade étnico-religiosa das populações africanas na diáspora brasileira.",
      trapWarning: "Não confunda a Revolta dos Malês com rebeliões liberais de elite do período regencial (como a Sabinada ou a Farroupilha)."
    },
    commonTraps: ["Homogeneizar os escravizados africanos ignorando suas religiões, línguas de origem e graus de instrução."],
    tags: ["Revolta dos Malês", "Período Regencial", "Islamismo no Brasil", "Resistência Negra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-004",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Pensamento Social Negro no Brasil",
    subtopic: "Lélia Gonzalez: Amefricanidade e Interseccionalidade",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A gente não é só o que a teoria europeia diz que a gente é. A nossa experiência histórica e cultural forjou o que chamo de 'Amefricanidade': um processo dinâmico de resistência e recriação que congrega afrodescendentes e povos originários de Abya Yala contra a dominação colonial. E quando olhamos para a mulher negra, ela está no entroncamento onde o racismo e o sexismo se combinam com a exploração de classe, gerando uma opressão tripla que a esquerda tradicional insistiu em secundarizar.",
      source: "GONZALEZ, Lélia. Por um feminismo afro-latino-americano. Cadernos de Formação Política, Rio de Janeiro, 1988 (adaptado)."
    },
    prompt: "A formulação teórica de Lélia Gonzalez antecipou debates contemporâneos das ciências sociais ao propor",
    options: [
      {
        id: "a",
        text: "a subordinação da luta antirracista à conquista do pleno emprego nas indústrias de base.",
        isCorrect: false,
        distractorRationale: "Lélia criticava o economicismo que reduzia o racismo a mero apêndice da luta de classes fabril."
      },
      {
        id: "b",
        text: "a homogeneização cultural das identidades latino-americanas sob padrões do liberalismo norte-americano.",
        isCorrect: false,
        distractorRationale: "A amefricanidade é uma categoria decolonial crítica ao imperialismo e ao eurocentrismo."
      },
      {
        id: "c",
        text: "a análise articulada das categorias de raça, gênero e classe para desvendar as formas singulares de vulnerabilização da mulher negra.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Lélia Gonzalez foi pioneira mundial na teorização da interseccionalidade (articulação indissociável de raça, gênero e classe no sul global)."
      },
      {
        id: "d",
        text: "o abandono da história ancestral africana em prol da adesão a cânones estéticos renascentistas.",
        isCorrect: false,
        distractorRationale: "A autora valoriza intensamente a matriz linguística e cultural afro-atlântica, cunhando o conceito de 'pretuguês'."
      },
      {
        id: "e",
        text: "a defesa da democracia racial brasileira como prova da harmonia pacífica entre colonizadores e colonizados.",
        isCorrect: false,
        distractorRationale: "Lélia combateu enfaticamente o mito da democracia racial, caracterizando-o como ideologia desmobilizadora e opressora."
      }
    ],
    detailedExplanation: {
      summary: "Lélia Gonzalez articulou de maneira precursora os conceitos de interseccionalidade e amefricanidade.",
      stepByStep: [
        "1. Ler a citação: atenção à articulação entre 'racismo', 'sexismo' e 'classe'.",
        "2. Identificar o conceito-chave: a tripla discriminação suportada pelas mulheres negras no continente americano.",
        "3. Conectar à opção C, que sintetiza essa abordagem interseccional e decolonial."
      ],
      coreConcept: "Interseccionalidade no pensamento feminista negro latino-americano e conceito de Amefricanidade.",
      trapWarning: "Lélia Gonzalez JAMAIS defendeu o mito da democracia racial formulado por Gilberto Freyre."
    },
    commonTraps: ["Achar que o feminismo negro apenas repete as pautas do feminismo branco de classe média."],
    tags: ["Lélia Gonzalez", "Amefricanidade", "Interseccionalidade", "Feminismo Negro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-005",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Direitos Quilombolas e Territorialidade",
    subtopic: "Artigo 68 do ADCT e Certificação Quilombola",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Aos remanescentes das comunidades dos quilombos que estejam ocupando suas terras é reconhecida a propriedade definitiva, devendo o Estado emitir-lhes os títulos respectivos.",
      source: "BRASIL. Constituição da República Federativa do Brasil de 1988. Ato das Disposições Constitucionais Transitórias (ADCT), Artigo 68."
    },
    prompt: "No debate sociológico e jurídico atual, o conceito de 'remanescentes de quilombos' fundamenta-se",
    options: [
      {
        id: "a",
        text: "na comprovação de isolamento geográfico absoluto e inexistência de trocas mercantis com núcleos urbanos.",
        isCorrect: false,
        distractorRationale: "A antropologia contemporânea demonstrou que os quilombos nunca foram ilhas isoladas; mantinham comércio, redes familiares e diálogo com a sociedade ao redor."
      },
      {
        id: "b",
        text: "na autoatribuição identitária e na trajetória histórica compartilhada de ocupação ancestral do território coletivo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Nos termos do Decreto 4.887/2003 e da Convenção 169 da OIT, quilombos contemporâneos definem-se por autorreconhecimento (autoatribuição), ancestralidade negra e relação coletiva com a terra."
      },
      {
        id: "c",
        text: "na realização obrigatória de testes genéticos de pureza de linhagem sanguínea para cada membro da associação.",
        isCorrect: false,
        distractorRationale: "O critério é histórico-antropológico e sociocultural, rejeitando qualquer determinismo biológico ou racialista."
      },
      {
        id: "d",
        text: "na exigência de certidão colonial manuscrita expedida pela Coroa Portuguesa concedendo alvará de sesmaria.",
        isCorrect: false,
        distractorRationale: "A escravidão era ilegalizada pelos cativos em fuga; exigir alvará colonial seria uma contradição histórica que inviabilizaria qualquer titulação."
      },
      {
        id: "e",
        text: "no compromisso de desmatar a totalidade da área para implantação de lavouras intensivas de exportação.",
        isCorrect: false,
        distractorRationale: "As práticas quilombolas de manejo são sustentáveis e fundamentadas na preservação ambiental dos recursos comunitários."
      }
    ],
    detailedExplanation: {
      summary: "O conceito de quilombo contemporâneo superou a visão arcaica de refúgio isolado do século XVII.",
      stepByStep: [
        "1. Analisar a evolução do conceito: de 'refúgio no mato' para 'grupo étnico-racial dotado de memória de resistência e territorialidade'.",
        "2. Identificar a norma jurídica regulamentadora: Decreto 4.887/2003 e jurisprudência do STF (ADI 3.239).",
        "3. Fixar os pilares: autoidentificação (critério da Convenção 169 da OIT) e uso coletivo da terra."
      ],
      coreConcept: "Territorialidade quilombola e direito originário à posse coletiva das terras ancestrais.",
      trapWarning: "Cuidado com noções arcaicas que exigem que o quilombo viva isolado no século XVII para ser reconhecido."
    },
    commonTraps: ["Acreditar que a comprovação quilombola exige documentos cartoriais coloniais da fuga dos antepassados."],
    tags: ["Quilombos", "ADCT Artigo 68", "Autoatribuição", "Direitos Territoriais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-006",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Patrimônio Cultural Imaterial Afro-Brasileiro",
    subtopic: "A Roda de Capoeira e o Ofício das Baianas de Acarajé",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Capoeira, classificada durante a Primeira República no Código Penal de 1890 como contravenção sujeita a desterro e prisão (artigos 402 a 404), foi declarada Patrimônio Cultural Imaterial do Brasil pelo IPHAN em 2008 e Patrimônio Cultural Imaterial da Humanidade pela UNESCO em 2014.",
      source: "IPHAN. Dossiê de Registro da Roda de Capoeira e Ofício dos Mestres de Capoeira. Brasília: Ministério da Cultura, 2014."
    },
    prompt: "A trajetória da capoeira entre o final do século XIX e o início do século XXI exemplifica",
    options: [
      {
        id: "a",
        text: "o desaparecimento das práticas corporais afro-brasileiras devido à imposição de esportes olímpicos europeus.",
        isCorrect: false,
        distractorRationale: "A capoeira se expandiu globalmente em vez de desaparecer, mantendo viva sua raiz afro-brasileira."
      },
      {
        id: "b",
        text: "a transição de uma prática perseguida e criminalizada pelo Estado para a sua consagração como patrimônio e símbolo de resistência cultural.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Mostra o processo histórico de ressignificação e reconhecimento de saberes afro-brasileiros que outrora foram criminalizados pelas elites higienistas e autoritárias."
      },
      {
        id: "c",
        text: "o desinteresse das instâncias internacionais em salvaguardar manifestações associadas à herança diaspórica.",
        isCorrect: false,
        distractorRationale: "A UNESCO reconheceu a capoeira como patrimônio da humanidade em 2014."
      },
      {
        id: "d",
        text: "a subordinação da manifestação popular às diretrizes de combate militar da infantaria do exército.",
        isCorrect: false,
        distractorRationale: "A capoeira preservou seu caráter de jogo, dança, luta e musicalidade comunitária libertária."
      },
      {
        id: "e",
        text: "a proibição definitiva de seu ensino em espaços comunitários e escolas públicas do país.",
        isCorrect: false,
        distractorRationale: "Pelas Leis 10.639/03 e diretrizes curriculares nacionais, a capoeira é recomendada como conteúdo pedagógico interdisciplinar."
      }
    ],
    detailedExplanation: {
      summary: "A capoeira passou de crime no Código Penal de 1890 a Patrimônio Imaterial da Humanidade pela UNESCO.",
      stepByStep: [
        "1. Analisar o contraste temporal: no Código Penal de 1890, a capoeiragem era crime punido com trabalho forçado.",
        "2. Identificar a transformação: a resistência dos mestres (como Bimba e Pastinha) legitimou a arte como matriz pedagógica e filosófica.",
        "3. Reconhecer o conceito de patrimônio imaterial: valorização de saberes, celebrações e formas de expressão de grupos marginalizados."
      ],
      coreConcept: "Criminalização da cultura negra na República Velha vs. Políticas públicas de patrimônio imaterial no século XXI.",
      trapWarning: "A criminalização pós-Abolição (1890) tinha como alvo controlar o corpo da população negra recém-liberta nas ruas."
    },
    commonTraps: ["Imaginar que a capoeira sempre foi aceita como esporte nacional sem conflitos com a polícia da época."],
    tags: ["Capoeira", "Patrimônio Imaterial", "Código Penal 1890", "Cultura Afro-Brasileira"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-007",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Cosmologia e Pensamento Yanomami",
    subtopic: "Davi Kopenawa e A Queda do Céu",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os brancos não temem, como nós, ser esmagados pela queda do céu. Mas um dia talvez tenham tanto medo quanto nós, quando a fumaça de suas fábricas e a fumaça do ouro que queimam na floresta empestarem tudo e os xapiri (espíritos) não puderem mais sustentar a abóbada celeste. Então o céu vai desabar e morreremos todos, nós e eles.",
      source: "KOPENAWA, Davi; ALBERT, Bruce. A queda do céu: palavras de um xamã yanomami. São Paulo: Companhia das Letras, 2015."
    },
    prompt: "A advertência xamânica de Davi Kopenawa expressa uma crítica contundente ao modelo econômico hegemônico ao evidenciar que",
    options: [
      {
        id: "a",
        text: "o garimpo e a poluição atmosférica provocam desequilíbrios ecológicos globais cujos efeitos catastróficos ameaçam a totalidade dos viventes.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Kopenawa alerta para a interconexão do planeta: a destruição da Amazônia pelo garimpo predatório gera colapso ecológico que atingirá tanto indígenas quanto a sociedade industrial ('morreremos todos')."
      },
      {
        id: "b",
        text: "a destruição das matas é compensada pela geração de riquezas minerais aplicadas no bem-estar comunitário.",
        isCorrect: false,
        distractorRationale: "O autor condena veementemente o garimpo ilegal, que destrói os rios, traz malária, mercúrio e morte."
      },
      {
        id: "c",
        text: "o xamanismo tradicional propõe o confinamento dos povos da floresta em reservas isoladas do sistema climático.",
        isCorrect: false,
        distractorRationale: "O xamanismo reconhece que o sistema climático é um só e conecta todos os seres vivos sob a mesma atmosfera."
      },
      {
        id: "d",
        text: "as mudanças climáticas decorrem exclusivamente de variações cósmicas alheias à intervenção das sociedades humanas.",
        isCorrect: false,
        distractorRationale: "O texto denuncia explicitamente as causas antrópicas: 'a fumaça de suas fábricas e a fumaça do ouro que queimam'."
      },
      {
        id: "e",
        text: "os povos indígenas rejeitam a aliança com cientistas e ativistas ambientais para a defesa do bioma amazônico.",
        isCorrect: false,
        distractorRationale: "Kopenawa escreveu o livro em coautoria com o antropólogo Bruce Albert exatamente para alertar o público internacional."
      }
    ],
    detailedExplanation: {
      summary: "Na obra 'A Queda do Céu', Davi Kopenawa articula o saber xamânico yanomami à crítica ao Antropoceno e à predação capitalista.",
      stepByStep: [
        "1. Analisar a metáfora da 'queda do céu': ruptura do equilíbrio cósmico e ecológico mantido pelos xapiri.",
        "2. Identificar a denúncia concreta: o mercúrio do garimpo e os gases industriais destroem a integridade da biosfera.",
        "3. Concluir que a tese de Kopenawa coincide com os alertas científicos contemporâneos sobre o risco de colapso climático planetário."
      ],
      coreConcept: "Ecologia xamânica Yanomami e crítica decolonial ao extrativismo predatório.",
      trapWarning: "A advertência não é mera crendice isolada, mas uma sofisticada epistemologia ecológica sobre o equilíbrio da Terra-Floresta (Urihi)."
    },
    commonTraps: ["Desconsiderar a dimensão política e ambiental do relato, tratando-o como lenda folclórica desprovida de rigor."],
    tags: ["Davi Kopenawa", "Yanomami", "A Queda do Céu", "Crise Climática"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-008",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Ações Afirmativas e Políticas de Reparação",
    subtopic: "Lei de Cotas e o Princípio da Igualdade Material",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Supremo Tribunal Federal, ao julgar a Arguição de Descumprimento de Preceito Fundamental (ADPF) 186 em 2012, declarou a constitucionalidade das cotas étnico-raciais nas universidades públicas brasileiras. O relator destacou que a igualdade puramente formal perante a lei não é suficiente para superar séculos de desvantagens estruturais acumuladas pela escravidão e pela discriminação institucional.",
      source: "SUPREMO TRIBUNAL FEDERAL. Acórdão da ADPF 186/DF. Rel. Min. Ricardo Lewandowski, julgado em 26/04/2012."
    },
    prompt: "A decisão da Suprema Corte baseou-se no princípio da igualdade material (ou substancial), o qual preconiza que",
    options: [
      {
        id: "a",
        text: "todos os candidatos devem ser submetidos a idênticos parâmetros de avaliação independentemente de suas condições históricas e econômicas.",
        isCorrect: false,
        distractorRationale: "Isso define a igualdade estritamente formal, a qual perpetua desigualdades históricas consolidadas."
      },
      {
        id: "b",
        text: "o Estado deve intervir com medidas compensatórias temporárias para tratar desigualmente os desiguais na exata medida de suas desigualdades.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A igualdade material (substancial) exige que o poder público crie políticas ativas para nivelar oportunidades e reparar desvantagens estruturais históricas."
      },
      {
        id: "c",
        text: "o mérito individual é uma grandeza neutra e imutável que dispensa correções de vulnerabilidade socioeconômica.",
        isCorrect: false,
        distractorRationale: "O tribunal apontou que a meritocracia sem igualdade de ponto de partida apenas aprofunda a exclusão."
      },
      {
        id: "d",
        text: "o acesso ao ensino superior deve ser restrito às elites econômicas detentoras de capital cultural tradicional.",
        isCorrect: false,
        distractorRationale: "A decisão visava justamente democratizar as universidades públicas de excelência."
      },
      {
        id: "e",
        text: "as reparações históricas devem limitar-se a indenizações financeiras pontuais, vedando o ingresso em instituições públicas.",
        isCorrect: false,
        distractorRationale: "A ADPF 186 referendou a inclusão educacional como instrumento fundamental de mobilidade social e justiça distributiva."
      }
    ],
    detailedExplanation: {
      summary: "A igualdade material fundamenta as ações afirmativas ao exigir que o Estado atue ativamente para equalizar oportunidades reais.",
      stepByStep: [
        "1. Diferenciar igualdade formal (todos iguais perante a lei na letra do texto) de igualdade material (ações para reduzir abismos concretos).",
        "2. Identificar a função das cotas raciais e sociais: promover reparação histórica, diversidade no ambiente acadêmico e democratização do saber.",
        "3. Concluir que a intervenção estatal compensatória é plenamente compatível com os princípios fundamentais da CF/88."
      ],
      coreConcept: "Ações Afirmativas, Igualdade Material e Justiça Distributiva no Direito Constitucional Brasileiro.",
      trapWarning: "Cuidado com o argumento meritocrático abstrato que ignora o ponto de partida desigual dos estudantes."
    },
    commonTraps: ["Confundir igualdade formal (todos são iguais perante a lei) com igualdade material (tratar desiguais desigualmente para promover equidade)."],
    tags: ["Ações Afirmativas", "ADPF 186", "Igualdade Material", "Cotas Universitárias"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-009",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Teatro Experimental do Negro e Abdias do Nascimento",
    subtopic: "Luta Antirracista e Protagonismo Cultural",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Fundado em 1944 no Rio de Janeiro por Abdias do Nascimento e outros intelectuais negros, o Teatro Experimental do Negro (TEN) tinha o objetivo de resgatar o valor da cultura negra no Brasil por meio da arte dramática e da alfabetização de seus atores, a maioria operários, empregadas domésticas e favelados. Além de encenar peças com protagonistas negros, o TEN denunciava a prática do 'blackface' nos teatros da época e realizava congressos e concursos de beleza exaltando a estética afro-brasileira.",
      source: "NASCIMENTO, Abdias do. O genocídio do negro brasileiro: processo de um racismo mascarado. Rio de Janeiro: Paz e Terra, 1978."
    },
    prompt: "A criação e atuação do Teatro Experimental do Negro (TEN) constituíram um marco sociopolítico porque",
    options: [
      {
        id: "a",
        text: "defenderam a exclusão de trabalhadores populares das atividades de criação dramática.",
        isCorrect: false,
        distractorRationale: "O TEN tinha como base justamente trabalhadores populares, atuando inclusive na alfabetização de seus membros."
      },
      {
        id: "b",
        text: "articularam formação educacional de base, protagonismo artístico negro e desconstrução de estereótipos racistas nas artes cênicas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O TEN combinou alfabetização, conscientização política e estética antirracista, abrindo espaço para que atores negros interpretassem papéis densos e humanizados."
      },
      {
        id: "c",
        text: "aderiram às teorias do embranquecimento populacional disseminadas pelo darwinismo social.",
        isCorrect: false,
        distractorRationale: "O TEN combatia vigorosamente o ideal de embranquecimento e a eugenia, valorizando a identidade fenotípica e cultural negra."
      },
      {
        id: "d",
        text: "restringiram o repertório cênico a adaptações servis de operetas vienenses do século XIX.",
        isCorrect: false,
        distractorRationale: "O TEN encenou textos como 'O Imperador Jones' e incentivou a dramaturgia original de temática negra nacional."
      },
      {
        id: "e",
        text: "apoiaram a censura estatal prévia contra qualquer manifestação cultural de matriz africana.",
        isCorrect: false,
        distractorRationale: "O grupo enfrentou a censura e a perseguição policial de sua época para promover os direitos civis e culturais dos negros."
      }
    ],
    detailedExplanation: {
      summary: "O TEN (1944) fundado por Abdias do Nascimento uniu arte, alfabetização e afirmação da negritude contra o racismo estrutural.",
      stepByStep: [
        "1. Analisar os objetivos do TEN: ocupar palcos monopolizados por atores brancos pintados de preto ('blackface').",
        "2. Identificar a composição: atores recrutados entre as camadas populares que recebiam aulas de alfabetização e cidadania.",
        "3. Concluir que a iniciativa foi um divisor de águas na afirmação da dignidade e estética afro-brasileira."
      ],
      coreConcept: "Protagonismo negro, Teatro Experimental do Negro e combate ao mito da democracia racial.",
      trapWarning: "Abdias do Nascimento foi dramaturgo, professor universitário, senador da República e formulador do Quilombismo."
    },
    commonTraps: ["Achar que o TEN era apenas um grupo de entretenimento desvinculado da militância política e social."],
    tags: ["Abdias do Nascimento", "TEN", "Teatro Experimental do Negro", "Cultura Negra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-010",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Sociologia das Relações Raciais no Brasil",
    subtopic: "Florestan Fernandes e a Integração do Negro na Sociedade de Classes",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os libertos foram atirados na sociedade de classes desprovidos de qualquer recurso material ou apoio institucional. A abolição jurídica de 1888 não foi acompanhada de reforma agrária, instrução pública ou suporte ocupacional. O imigrante europeu foi subsidiado e favorecido, restando à população negra a marginalização, o subemprego e a periferia urbana, configurando uma inserção desvantajosa que perpetuou a hierarquia senhorial.",
      source: "FERNANDES, Florestan. A integração do negro na sociedade de classes. São Paulo: Dominus/USP, 1965 (adaptado)."
    },
    prompt: "Na análise de Florestan Fernandes, a marginalização socioeconômica do negro no pós-abolição decorreu",
    options: [
      {
        id: "a",
        text: "da recusa congênita dos recém-libertos em participar do trabalho assalariado regular.",
        isCorrect: false,
        distractorRationale: "Essa era a justificativa racista das oligarquias para legitimar a importação da mão de obra europeia subsidiada."
      },
      {
        id: "b",
        text: "do caráter conservador da transição capitalista brasileira, que manteve a espoliação do trabalhador negro sem políticas públicas de inclusão social.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Florestan demonstra que a República nascente descartou a população negra, subsidiando a imigração europeia e mantendo intacto o monopólio da terra e do capital pelas antigas elites senhoriais."
      },
      {
        id: "c",
        text: "do êxito da reforma agrária radical implementada pela Lei Áurea de 1888.",
        isCorrect: false,
        distractorRationale: "A Lei Áurea teve apenas dois artigos e não concedeu um palmo de terra nem indenização aos libertos."
      },
      {
        id: "d",
        text: "da distribuição equitativa de cargos de comando na burocracia do Estado imperial.",
        isCorrect: false,
        distractorRationale: "A burocracia imperial e republicana permaneceu estritamente controlada pela aristocracia agrária branca."
      },
      {
        id: "e",
        text: "da imediata equiparação salarial assegurada pelas corporações de ofício medievais.",
        isCorrect: false,
        distractorRationale: "Não havia corporações medievais; o mercado de trabalho livre que se formou era excludente e altamente racializado."
      }
    ],
    detailedExplanation: {
      summary: "Florestan Fernandes demonstrou que a abolição foi inconclusa porque o Estado brasileiro abandonou os libertos à própria sorte.",
      stepByStep: [
        "1. Analisar a tese de Florestan: a transição do trabalho escravo para o trabalho livre no Brasil foi conduzida sob o signo do privilégio branco.",
        "2. Identificar a política de imigração: o Estado financiou a vinda do trabalhador europeu (ideologia do embranquecimento) e alijou o ex-escravizado.",
        "3. Concluir que a herança da marginalização contemporânea decorre dessa omissão proposital da ordem republicana burguesa."
      ],
      coreConcept: "Sociologia crítica da abolição inconclusa e racismo estrutural (Escola Paulista de Sociologia).",
      trapWarning: "Florestan Fernandes rompe definitivamente com a visão harmônica e idílica da miscigenação apresentada por Gilberto Freyre em 'Casa-Grande & Senzala'."
    },
    commonTraps: ["Achar que a abolição em 1888 resolveu o problema da cidadania da população negra no Brasil."],
    tags: ["Florestan Fernandes", "Pós-Abolição", "Sociedade de Classes", "Relações Raciais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-011",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "A Revolta da Chibata (1910)",
    subtopic: "Cidadania Negra e Conflitos nas Forças Armadas",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nós, marinheiros, cidadãos brasileiros e republicanos, não podemos mais suportar a escravidão na Marinha Brasileira; a falta de proteção que a Pátria nos dá; as chibatas que continuam a cortar nossas carnes, mesmo depois de abolida a escravidão por lei. Exigimos o fim imediato dos castigos corporais, melhoria na alimentação e anistia para todos.",
      source: "REVOLTOSOS DA MARINHA. Memorial enviado ao Presidente Hermes da Fonseca. Rio de Janeiro, 22 de novembro de 1910 (adaptado)."
    },
    prompt: "Liderada pelo marinheiro João Cândido ('O Almirante Negro'), a Revolta da Chibata em 1910 evidenciou",
    options: [
      {
        id: "a",
        text: "a adesão irrestrita da marujada aos ideais absolutistas da restauração monárquica bragantina.",
        isCorrect: false,
        distractorRationale: "Os marinheiros declaravam-se expressamente 'cidadãos brasileiros e republicanos', lutando por direitos civis dentro da República."
      },
      {
        id: "b",
        text: "a permanência de práticas punitivas herdadas do período escravocrata nas instituições republicanas, vitimando majoritariamente marinheiros negros e pardos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A marinha de guerra republicana mantinha o uso do chicote (chibata) aplicado por oficiais brancos contra marujos negros e mestiços, evidenciando que a lógica do tronco persistia após 1888."
      },
      {
        id: "c",
        text: "a oposição dos oficiais superiores ao uso de navios blindados modernos como o 'Minas Gerais'.",
        isCorrect: false,
        distractorRationale: "O conflito não era sobre tecnologia bélica naval, mas sobre a dignidade física dos marinheiros contra a tortura dos castigos corporais."
      },
      {
        id: "d",
        text: "o apoio unânime do governo Hermes da Fonseca ao cumprimento integral e duradouro da anistia prometida.",
        isCorrect: false,
        distractorRationale: "Após a rendição dos navios, o governo quebrou a promessa de anistia, prendendo, torturando na Ilha das Cobras e desterrando dezenas de marinheiros para o Acre."
      },
      {
        id: "e",
        text: "a recusa dos revoltosos em dialogar com o Congresso Nacional e com a imprensa carioca.",
        isCorrect: false,
        distractorRationale: "Os revoltosos redigiram manifestos formais, dialogaram com parlamentares (como Rui Barbosa) e mobilizaram a opinião pública."
      }
    ],
    detailedExplanation: {
      summary: "A Revolta da Chibata (1910) denunciou a sobrevivência do castigo físico escravista no seio das Forças Armadas republicanas.",
      stepByStep: [
        "1. Contexto: 1910, governo do Marechal Hermes da Fonseca, Baía de Guanabara.",
        "2. Estopim: Marcelino Rodrigues foi punido com 250 chibatadas diante de toda a tripulação sem desmaiar.",
        "3. Liderança e pauta: João Cândido assumiu o comando dos encouraçados modernos apontando canhões para a capital exigindo o fim do chicote e dignidade salarial e alimentar.",
        "4. Conclusão: a revolta simboliza a luta por cidadania substantiva para os homens negros na República Velha."
      ],
      coreConcept: "Permanências autoritárias e escravistas na Primeira República brasileira e agência de João Cândido.",
      trapWarning: "Cuidado: os marinheiros NÃO eram antirrepublicanos; exigiam que a República cumprisse sua promessa de igualdade cidadã."
    },
    commonTraps: ["Achar que a abolição dos castigos corporais na Marinha ocorreu espontaneamente sem a revolta popular armada."],
    tags: ["Revolta da Chibata", "João Cândido", "República Velha", "Castigos Corporais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-012",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Movimento Indígena Contemporâneo e Cidadania",
    subtopic: "A Marcha das Mulheres Indígenas e a Bancada do Cocar",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nós, mulheres indígenas, somos guardiãs dos territórios e das sementes da ancestralidade. Nossa luta não é apenas pelo chão físico, mas pelo direito de existir em nossos próprios corpos, culturas e espiritualidades. Quando ocupamos os espaços institucionais em Brasília, nós não estamos pedindo licença: estamos trazendo a voz das águas, das matas e dos nossos ancestrais para dentro do centro do poder que historicamente legislou contra nós.",
      source: "ARTICULAÇÃO NACIONAL DAS MULHERES INDÍGENAS GUERREIRAS DA ANCESTRALIDADE (ANMIGA). Documento Final da Marcha das Mulheres Indígenas. Brasília, 2021."
    },
    prompt: "O protagonismo político assumido pelas mulheres indígenas no cenário nacional contemporâneo reflete uma estratégia de",
    options: [
      {
        id: "a",
        text: "reclusão comunitária para evitar o contato com os órgãos do sistema de justiça ocidental.",
        isCorrect: false,
        distractorRationale: "O texto demonstra o exato oposto: a ocupação ativa dos centros decisórios em Brasília."
      },
      {
        id: "b",
        text: "ocupação ativa da esfera pública institucional e intersecção entre preservação biocultural e afirmação de direitos de gênero.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Mostra como o movimento uniu a proteção ambiental/territorial com a representação política formal (Ministério dos Povos Indígenas, deputadas federais da 'bancada do cocar') e protagonismo feminino."
      },
      {
        id: "c",
        text: "substituição das lideranças xamânicas ancestrais por diretórios partidários corporativos.",
        isCorrect: false,
        distractorRationale: "As lideranças femininas reforçam explicitamente a aliança com os pajés, a espiritualidade e a ancestralidade."
      },
      {
        id: "d",
        text: "renúncia à soberania territorial em troca de compensações de royalties do agronegócio.",
        isCorrect: false,
        distractorRationale: "A pauta central é inegociável: a demarcação das terras e o veto a invasões de grileiros e mineradoras."
      },
      {
        id: "e",
        text: "fragmentação das reivindicações dos diferentes povos originários em disputas locais irreconciliáveis.",
        isCorrect: false,
        distractorRationale: "A criação da ANMIGA e a realização de marchas unificam centenas de etnias de diferentes biomas em plataforma comum."
      }
    ],
    detailedExplanation: {
      summary: "O movimento das mulheres indígenas no Brasil uniu a defesa dos biomas ao empoderamento político nos poderes Legislativo e Executivo.",
      stepByStep: [
        "1. Analisar o manifesto: ênfase na defesa territorial combinada com a ocupação dos espaços institucionais em Brasília.",
        "2. Identificar os avanços práticos: criação do Ministério dos Povos Indígenas (liderado por Sonia Guajajara) e presidência da FUNAI (Joenia Wapichana).",
        "3. Conectar à alternativa correta: interseção entre defesa da biodiversidade e protagonismo político democrático."
      ],
      coreConcept: "Mulheres indígenas, ecofeminismo decolonial e representação política originária no Brasil contemporâneo.",
      trapWarning: "A atuação indígena contemporânea não nega a tradição: utiliza os instrumentos do Estado de Direito para proteger os territórios ancestrais."
    },
    commonTraps: ["Achar que o movimento indígena rejeita a política institucional ou os cargos eletivos."],
    tags: ["Mulheres Indígenas", "ANMIGA", "Demarcação", "Representação Política"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-013",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Historiografia da Escravidão e Agência Negra",
    subtopic: "A Família Escrava e as Brechas Camponesas",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A historiografia tradicional por muito tempo retratou o escravizado como uma 'coisa' inerte, um mero objeto nas mãos do senhor de engenho, desprovido de vontade e incapaz de formular projetos de vida. Pesquisas dos últimos quarenta anos, contudo, demonstraram a existência da 'brecha camponesa': em seus dias livres (domingos e santificados), os cativos cultivavam roças de subsistência, vendiam excedentes nos mercados locais, acumulavam pecúlio para a compra de cartas de alforria e constituíam famílias legítimas sacramentadas pela Igreja.",
      source: "CARDOSO, Ciro Flamarion Santana. Escravo ou camponês? O protocampesinato negro nas Américas. São Paulo: Brasiliense, 1987 (adaptado)."
    },
    prompt: "A revisão historiográfica sobre a escravidão brasileira destacada no texto permitiu",
    options: [
      {
        id: "a",
        text: "reconhecer a agência histórica dos escravizados, capazes de negociar limites ao arbítrio senhorial e construir espaços de autonomia dentro da ordem cativeira.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A tese da 'brecha camponesa' e da agência histórica comprova que o escravizado não era mero receptor passivo da violência, mas sujeito que construiu laços familiares, acumulou pecúlio e negociou termos de sua convivência."
      },
      {
        id: "b",
        text: "comprovar a ausência de castigos físicos ou exploração de mais-valia nas plantações canavieiras.",
        isCorrect: false,
        distractorRationale: "A escravidão continuava sendo um sistema estruturalmente violento, desumano e coercitivo."
      },
      {
        id: "c",
        text: "atestar que os senhores de engenho abdicavam espontaneamente do direito de propriedade sobre os cativos.",
        isCorrect: false,
        distractorRationale: "As brechas eram conquistadas com árdua luta e resistência diária, nunca por benevolência senhorial."
      },
      {
        id: "d",
        text: "demonstrar que a compra de alforrias dependia unicamente de doações de comerciantes ingleses.",
        isCorrect: false,
        distractorRationale: "O pecúlio era fruto direto do trabalho exaustivo do próprio cativo na venda de farinha, hortaliças e galinhas nas feiras."
      },
      {
        id: "e",
        text: "invalidar os registros paroquiais de batismo e casamento de cativos por falta de comprovação empírica.",
        isCorrect: false,
        distractorRationale: "Foram exatamente os registros paroquiais de batismo e matrimônio que permitiram aos historiadores comprovar a existência de sólidas redes familiares entre os escravizados."
      }
    ],
    detailedExplanation: {
      summary: "A historiografia contemporânea superou a visão do escravizado como 'coisa' passiva, resgatando a sua agência e negociação no interior do cativeiro.",
      stepByStep: [
        "1. Contrastar a historiografia tradicional (escravo passivo / 'coisa') com a historiografia renovada (agência, negociação e resistência).",
        "2. Identificar a 'brecha camponesa': cultivo de roças próprias aos domingos e comércio de excedentes.",
        "3. Concluir que a agência escrava não nega a brutalidade do cativeiro, mas resgata a humanidade e capacidade estratégica dos negros."
      ],
      coreConcept: "Agência histórica, brecha camponesa e redes de solidariedade no Brasil escravista.",
      trapWarning: "Negociar dentro do sistema escravista não significava aceitá-lo passivamente: a negociação e a fuga eram táticas complementares de resistência."
    },
    commonTraps: ["Achar que falar em brecha camponesa e negociação suaviza ou diminui a crueldade inerente à escravidão."],
    tags: ["Historiografia", "Agência Escrava", "Brecha Camponesa", "Alforrias"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-014",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Legislação Antirracista no Brasil",
    subtopic: "A Lei 10.639/03 e o Combate ao Eurocentrismo Curricular",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nos estabelecimentos de ensino fundamental e médio, oficiais e particulares, torna-se obrigatório o ensino sobre História e Cultura Afro-Brasileira. O conteúdo programático a que se refere este artigo incluirá o estudo da História da África e dos Africanos, a luta dos negros no Brasil, a cultura negra brasileira e o negro na formação da sociedade nacional, resgatando a contribuição do povo negro nas áreas social, econômica e política pertinentes à História do Brasil.",
      source: "BRASIL. Lei nº 10.639, de 9 de janeiro de 2003, que alterou a Lei de Diretrizes e Bases da Educação Nacional (LDB 9.394/96)."
    },
    prompt: "A obrigatoriedade curricular instituída pela Lei 10.639/2003 tem como objetivo pedagógico fundamental",
    options: [
      {
        id: "a",
        text: "substituir integralmente o estudo da história ocidental e da literatura em língua portuguesa nas escolas.",
        isCorrect: false,
        distractorRationale: "A lei visa a pluralidade e a superação do viés unicamente eurocêntrico, não a extinção de outros saberes."
      },
      {
        id: "b",
        text: "desconstruir a matriz eurocêntrica que reduzia a presença negra à escravidão, reconhecendo o continente africano e os afrodescendentes como sujeitos ativos de conhecimento, tecnologia e cultura.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A lei exige que a África seja ensinada antes da colonização (seus reinos, ciências e artes) e que a trajetória negra no Brasil seja apresentada por meio de lutas, saberes e contribuições emancipatórias, superando o estereótipo do negro passivo acorrentado."
      },
      {
        id: "c",
        text: "limitar as comemorações da cultura afro-brasileira exclusivamente ao Dia da Consciência Negra em novembro.",
        isCorrect: false,
        distractorRationale: "As diretrizes curriculares exigem o trabalho contínuo e transversal durante todo o ano letivo em todas as disciplinas."
      },
      {
        id: "d",
        text: "vincular as notas acadêmicas dos discentes à filiação a agremiações de samba e capoeira.",
        isCorrect: false,
        distractorRationale: "A lei estabelece diretrizes curriculares de conhecimento histórico e sociológico crítico, sem imposições rituais."
      },
      {
        id: "e",
        text: "restringir o ensino da história africana exclusivamente aos estudantes autodeclarados negros.",
        isCorrect: false,
        distractorRationale: "A lei aplica-se universalmente a toda a educação básica para formar cidadãos antirracistas em todo o país."
      }
    ],
    detailedExplanation: {
      summary: "A Lei 10.639/03 (estendida aos povos indígenas pela Lei 11.645/08) combate o epistemicídio e a narrativa eurocêntrica nos currículos escolares.",
      stepByStep: [
        "1. Analisar o texto da lei: obrigatoriedade do ensino da história e cultura afro-brasileira e africana.",
        "2. Identificar o problema que combate: currículos escolares que apresentavam a África apenas como terra de escravizados sem história própria.",
        "3. Concluir que a lei promove reparação curricular e formação de uma sociedade antirracista."
      ],
      coreConcept: "Educação das Relações Étnico-Raciais, Lei 10.639/03 e superação do epistemicídio curricular.",
      trapWarning: "Não confunda a Lei 10.639/03 (foco afro-brasileiro) com a Lei 11.645/08 (que incluiu os povos indígenas)."
    },
    commonTraps: ["Achar que a lei se resume a eventos folclóricos pontuais no mês da Consciência Negra."],
    tags: ["Lei 10.639/03", "Currículo Escolar", "História da África", "Antirracismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-015",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Literatura de Resistência e Memória",
    subtopic: "Carolina Maria de Jesus: Voz das Favelas",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "2 de maio de 1958: Eu não sou preguiçosa. Sou uma mulher que batalha para sustentar os filhos. Eu cato papel, ferro, garrafas. O que me cansa é essa fome que não passa. A tontura da fome é pior do que a da cachaça. [...] A democracia perdeu seus adeptos. No nosso país quase tudo é ilusão. O Brasil precisa ser dirigido por uma pessoa que já passou fome. A fome também é professora.",
      source: "JESUS, Carolina Maria de. Quarto de despejo: diário de uma favelada. São Paulo: Francisco Alves, 1960."
    },
    prompt: "A obra de Carolina Maria de Jesus alcançou repercussão sociológica ao expor",
    options: [
      {
        id: "a",
        text: "o conformismo das camadas vulneráveis diante da carência alimentar crônica.",
        isCorrect: false,
        distractorRationale: "O texto é um libelo de denúncia e indignação permanente contra a exclusão e a indiferença dos governantes."
      },
      {
        id: "b",
        text: "a vivência crua da miséria urbana sob o olhar de uma mulher negra catadora, desnudando as contradições do modelo desenvolvimentista nacional.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Carolina escreveu da favela do Canindé durante a época de JK ('50 anos em 5'), demonstrando que o 'milagre' modernizador empurrava a população pobre e negra para o 'quarto de despejo' da cidade."
      },
      {
        id: "c",
        text: "a plena efetivação do estado de bem-estar social nas periferias metropolitanas paulistas.",
        isCorrect: false,
        distractorRationale: "O relato atesta a ausência absoluta de saneamento, água encanada, saúde ou proteção estatal aos favelados."
      },
      {
        id: "d",
        text: "a submissão incondicional às normas gramaticais consagradas pelas academias literárias europeias.",
        isCorrect: false,
        distractorRationale: "Carolina inventou uma linguagem poética própria, autêntica, oral e transgressora dos padrões bacharelescos formais."
      },
      {
        id: "e",
        text: "a defesa intransigente da política de remoção forçada das comunidades periféricas para zonas rurais inóspitas.",
        isCorrect: false,
        distractorRationale: "Carolina retrata a favela como espaço de dor e solidariedade, criticando a violência policial e o desprezo das autoridades."
      }
    ],
    detailedExplanation: {
      summary: "Carolina Maria de Jesus desmistificou o otimismo modernizador dos anos 1950 com a perspectiva testimonial da mulher negra favelada.",
      stepByStep: [
        "1. Analisar o contexto histórico: 1958-1960, construção de Brasília, industrialização automobilística e expansão desordenada das favelas.",
        "2. Identificar a metáfora central: a cidade rica é a sala de visitas; a favela é o 'quarto de despejo' onde se jogam os indesejados.",
        "3. Concluir que a fome e a luta pela sobrevivência são eixos de uma crítica política aguda à democracia burguesa excludente."
      ],
      coreConcept: "Literatura testimonial periférica, racismo ambiental urbano e agência literária de Carolina Maria de Jesus.",
      trapWarning: "Carolina Maria de Jesus não foi um caso fortuito isolado: é uma das maiores escritoras e pensadoras sociais do Brasil do século XX."
    },
    commonTraps: ["Reduzir o livro a um diário piegas, ignorando sua densidade teórica, sociológica e política."],
    tags: ["Carolina Maria de Jesus", "Quarto de Despejo", "Literatura Negra", "Fome e Cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-016",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Sociologia Urbana e Segregação Espacial",
    subtopic: "Racismo Ambiental e Justiça Climática",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O conceito de Racismo Ambiental surgiu nas lutas por direitos civis para demonstrar que a degradação ecológica não atinge a todos de maneira equitativa. No Brasil, enchentes, deslizamentos de encostas, ausência de saneamento básico, proximidade de aterros de resíduos perigosos e ilhas de calor afetam desproporcionalmente as populações negras, indígenas e quilombolas, que habitam as áreas de maior risco geológico e menor investimento público em infraestrutura.",
      source: "HERCULANO, Selene. O clamor por justiça ambiental e o racismo ambiental. Revista de Gestão Integrada em Saúde do Trabalho e Meio Ambiente, v. 3, n. 1, 2008."
    },
    prompt: "O conceito de racismo ambiental fundamenta-se no entendimento de que",
    options: [
      {
        id: "a",
        text: "os fenômenos climáticos severos escolhem deliberadamente seus alvos em virtude de processos biológicos raciais.",
        isCorrect: false,
        distractorRationale: "Fenômenos naturais não possuem consciência; a vulnerabilidade desigual decorre da segregação socioespacial imposta pelo planejamento urbano desigual."
      },
      {
        id: "b",
        text: "a distribuição dos ônus ambientais decorre de processos históricos de desigualdade territorial que penalizam prioritariamente grupos étnico-raciais marginalizados.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O racismo ambiental demonstra que a falta de saneamento, os lixões e as áreas suscetíveis a desastres ecológicos coincidem geograficamente com os territórios ocupados por negros e indígenas."
      },
      {
        id: "c",
        text: "a degradação da natureza atinge com idêntica intensidade todas as classes e etnias nos grandes centros globais.",
        isCorrect: false,
        distractorRationale: "A classe média e alta possui recursos materiais e infraestrutura para se blindar ou mitigar riscos ambientais."
      },
      {
        id: "d",
        text: "a criação de áreas de preservação ambiental deve suprimir sumariamente as terras indígenas e reservas extrativistas.",
        isCorrect: false,
        distractorRationale: "Povos indígenas e comunidades tradicionais são comprovadamente os guardiões mais eficientes da conservação da biodiversidade."
      },
      {
        id: "e",
        text: "o mercado financeiro verde é imune às lógicas de exclusão que regem o capitalismo extrativista tradicional.",
        isCorrect: false,
        distractorRationale: "Muitos projetos de 'greenwashing' e créditos de carbono promovem a expulsão ilegal de comunidades tradicionais de suas terras."
      }
    ],
    detailedExplanation: {
      summary: "O racismo ambiental explica a concentração desproporcional de riscos ecológicos em territórios de populações negras e originárias.",
      stepByStep: [
        "1. Definir o conceito: cunhado por Benjamin Chavis e consolidado por Robert Bullard nos EUA, adaptado à realidade brasileira.",
        "2. Identificar a manifestação no Brasil: deslizamentos em favelas, contaminação de rios indígenas por mercúrio e ausência crônica de saneamento nas periferias.",
        "3. Concluir que a injustiça ambiental tem recorte racial explícito decorrente do passado escravocrata e da segregação urbana."
      ],
      coreConcept: "Racismo ambiental, justiça climática e segregação socioespacial no Brasil.",
      trapWarning: "Cuidado: desastres ecológicos não são meramente 'naturais'; suas consequências trágicas decorrem de negligência política e vulnerabilidade socialmente construída."
    },
    commonTraps: ["Tratar desastres como fatalidades imprevisíveis sem analisar o perfil étnico e de renda dos atingidos."],
    tags: ["Racismo Ambiental", "Justiça Climática", "Segregação Urbana", "Ecologia Política"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-017",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Movimento Abolicionista no Brasil",
    subtopic: "Luís Gama e a Judicialização da Liberdade",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Vendido ilegalmente como escravo pelo próprio pai aos dez anos, Luís Gama aprendeu a ler sozinho aos dezessete anos, conquistou sua própria liberdade pela via judicial e tornou-se rábula (advogado provisionado). Nas décadas de 1860 e 1870, nos tribunais de São Paulo, Gama utilizou a Lei Feijó de 7 de novembro de 1831 (que declarava livres todos os africanos introduzidos no Brasil após aquela data) para libertar gratuitamente mais de quinhentos cativos escravizados ilegalmente pelos grandes cafeicultores.",
      source: "AZEVEDO, Elciene. O direito da escravidão e a libertação dos escravos: a atuação jurídica de Luís Gama. Campinas: Editora da Unicamp, 1999."
    },
    prompt: "A atuação pioneira de Luís Gama no movimento abolicionista distinguiu-se por",
    options: [
      {
        id: "a",
        text: "recorrer às próprias contradições e brechas da legislação imperial para desmantelar o direito de posse dos proprietários escravistas nos tribunais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Luís Gama judicializou a abolição, provando que grande parte dos escravizados das fazendas de café descendia de africanos desembarcados após 1831 (época em que o tráfico era crime), forçando os juízes a conceder cartas de liberdade."
      },
      {
        id: "b",
        text: "defender o pagamento de generosas indenizações estatais aos fazendeiros antes de qualquer alforria.",
        isCorrect: false,
        distractorRationale: "Gama defendia a ilegalidade e a ilegitimidade da propriedade humana, recusando a lógica de indenizar quem cometera crime de sequestro de africanos."
      },
      {
        id: "c",
        text: "limitar sua militância à declamação de sonetos românticos em salões aristocráticos da Corte imperial.",
        isCorrect: false,
        distractorRationale: "Embora poeta talentoso (Primeiras Trovas Burlescas), Gama era um ativista combativo que enfrentava pessoalmente juízes, fazendeiros armados e a polícia nas ruas e tribunais."
      },
      {
        id: "d",
        text: "apoiar a manutenção vitalícia da Coroa e o fortalecimento do Poder Moderador de D. Pedro II.",
        isCorrect: false,
        distractorRationale: "Luís Gama era republicano convicto, afirmando que a monarquia era o alicerce moral e institucional da escravidão."
      },
      {
        id: "e",
        text: "proibir a participação de negros forros nas organizações maçônicas e jornalísticas da época.",
        isCorrect: false,
        distractorRationale: "Gama articulou a imprensa, a maçonaria progressista e as redes de libertos para sustentar a causa abolicionista."
      }
    ],
    detailedExplanation: {
      summary: "Luís Gama transformou o direito imperial em arma emancipatória, tornando-se o grande jurista e patrono da abolição no Brasil.",
      stepByStep: [
        "1. Conhecer a base legal usada: a Lei de 1831 (feita 'para inglês ver') declarava livres todos os escravizados entrados no Brasil a partir de então.",
        "2. Identificar a tese de Gama: como mais de 700 mil africanos foram contrabandeados ilegalmente após 1831, a maioria dos cativos do café estava sob cativeiro criminoso.",
        "3. Concluir que sua prática desestruturou a autoridade senhorial por meio da ousadia jurídica e da retórica impecável nos tribunais."
      ],
      coreConcept: "Abolicionismo jurídico, Patrono da Abolição e a Lei de 1831.",
      trapWarning: "Em 2015, a OAB concedeu a Luís Gama o título póstumo de advogado; em 2018, foi inscrito no Livro dos Heróis e Heroínas da Pátria."
    },
    commonTraps: ["Atribuir a abolição unicamente à Princesa Isabel em 1888, ignorando líderes negros gigantescos como Luís Gama, André Rebouças e José do Patrocínio."],
    tags: ["Luís Gama", "Abolicionismo", "Direito e Escravidão", "Heróis da Pátria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-018",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Filosofia Indígena e Antropologia",
    subtopic: "Perspectivismo Ameríndio (Viveiros de Castro)",
    difficulty: 4,
    estimatedTimeSeconds: 165,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Enquanto o pensamento moderno ocidental opera sob o pressuposto do multiculturalismo (uma única Natureza universal e objetiva sobre a qual se erguem múltiplas Culturas humanas particulares), as cosmologias indígenas da Amazônia funcionam segundo o que chamo de multinaturalismo ou perspectivismo ameríndio: o fundo comum a todos os seres do cosmos é a humanidade (todos os animais e plantas já foram pessoas e mantêm uma essência anímica humana), sendo a diferença situada nos corpos, que operam como 'roupas' ou perspectivas distintas de habitar o mundo.",
      source: "VIVEIROS DE CASTRO, Eduardo. A inconstância da alma selvagem e outros ensaios de antropologia. São Paulo: Cosac Naify, 2002."
    },
    prompt: "A tese do perspectivismo ameríndio formulada por Eduardo Viveiros de Castro desestabiliza a tradição filosófica eurocêntrica ao demonstrar que, para as cosmologias amazônicas,",
    options: [
      {
        id: "a",
        text: "a condição de sujeito dotado de agência e ponto de vista não é prerrogativa exclusiva da espécie humana biológica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. No perspectivismo ameríndio, onças, antas e espíritos também se percebem como pessoas e enxergam a si mesmos como humanos; a subjetividade, a cultura e a linguagem são compartilhadas por todos os entes do cosmos."
      },
      {
        id: "b",
        text: "os animais são meros autômatos mecânicos desprovidos de alma, conforme postulado pela filosofia cartesiana.",
        isCorrect: false,
        distractorRationale: "Essa é a visão cartesiana ocidental (animais-máquina), frontalmente oposta ao perspectivismo indígena."
      },
      {
        id: "c",
        text: "a natureza inanimada deve ser explorada até o esgotamento para satisfazer necessidades materiais ilimitadas.",
        isCorrect: false,
        distractorRationale: "Essa é a lógica da predação capitalista moderna, que a cosmologia indígena recusa radicalmente."
      },
      {
        id: "d",
        text: "a escrita alfabética é requisito indispensável para que qualquer ser adquira existência ontológica plena.",
        isCorrect: false,
        distractorRationale: "A cosmologia indígena baseia-se na oralidade, nos sonhos xamânicos e na relação corpórea com o ambiente."
      },
      {
        id: "e",
        text: "a divisão entre corpo e alma inexiste em qualquer manifestação de pensamento das sociedades tradicionais.",
        isCorrect: false,
        distractorRationale: "A diferença no perspectivismo está justamente nas capacidades sensoriais de cada corpo ('roupa'), não na alma (que é universalmente humana)."
      }
    ],
    detailedExplanation: {
      summary: "O perspectivismo ameríndio inverte o binarismo moderno: há uma só humanidade espiritual (cultura) distribuída em múltiplos corpos materiais (multinaturalismo).",
      stepByStep: [
        "1. Analisar a dicotomia ocidental: Natureza una e imutável vs. múltiplas culturas humanas.",
        "2. Compreender a inversão ameríndia: Cultura / Alma é una (tudo é humano na origem) vs. Naturezas / Corpos são múltiplos.",
        "3. Concluir que a agência e o direito de ter um ponto de vista são compartilhados com outros viventes não humanos."
      ],
      coreConcept: "Perspectivismo ameríndio, multinaturalismo e desconstrução da antropologia eurocêntrica.",
      trapWarning: "Para o xamã indígena, a onça não vê a si mesma como fera, mas como pessoa humana tomando cerveja de mandioca."
    },
    commonTraps: ["Achar que o pensamento indígena é 'ingênuo' ou 'animismo primitivo', ignorando sua profunda complexidade filosófica."],
    tags: ["Perspectivismo Ameríndio", "Eduardo Viveiros de Castro", "Filosofia Indígena", "Multinaturalismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-019",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Movimento de Mulheres Negras e Epistemicídio",
    subtopic: "Sueli Carneiro e o Enegrecimento do Feminismo",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Quando falamos em mito da fragilidade feminina, que historicamente justificou a proteção paterna e marital das mulheres brancas, de quem estamos falando? As mulheres negras nunca foram reconhecidas como frágeis: trabalharam de sol a sol no eito, foram ama de leite, sofreram violências sexuais impunes e, após a abolição, sustentaram lares trabalhando no serviço doméstico mal remunerado. Enegrecer o feminismo significa trazer essa historicidade para dentro da agenda emancipatória.",
      source: "CARNEIRO, Sueli. Enegrecer o feminismo: a situação da mulher negra na América Latina a partir de uma perspectiva de gênero. Revista Geledés, São Paulo, 2003 (adaptado)."
    },
    prompt: "Na perspectiva de Sueli Carneiro, a expressão 'enegrecer o feminismo' propõe",
    options: [
      {
        id: "a",
        text: "o silenciamento das demandas trabalhistas para priorizar disputas de representação em cargos diplomáticos.",
        isCorrect: false,
        distractorRationale: "O foco de Sueli Carneiro é a realidade concreta das trabalhadoras periféricas, e não o corporativismo burocrático de elites."
      },
      {
        id: "b",
        text: "a contestação do universalismo branco hegemônico nas teorias de gênero, incorporando a experiência histórica e as urgências materiais das mulheres negras.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Sueli Carneiro aponta que a categoria universal 'mulher' refletia apenas a experiência da mulher branca ocidental (que lutava pelo direito de trabalhar fora de casa), ignorando que a mulher negra sempre trabalhou compulsoriamente no trabalho braçal mais duro."
      },
      {
        id: "c",
        text: "a recusa de diálogo com os movimentos sindicais e a dissolução de centros de pesquisa acadêmica.",
        isCorrect: false,
        distractorRationale: "Sueli Carneiro fundou o Geledés - Instituto da Mulher Negra, articulando intensa produção acadêmica e ativismo social."
      },
      {
        id: "d",
        text: "a validação do mito da fragilidade feminina como conquista universal a ser estendida sem distinções.",
        isCorrect: false,
        distractorRationale: "A autora desmistifica esse conceito, mostrando que ele serviu para ocultar a exploração cruel e desumanizadora sobre as mulheres não brancas."
      },
      {
        id: "e",
        text: "a restrição das políticas de proteção à mulher exclusivamente ao espaço doméstico patriarcal.",
        isCorrect: false,
        distractorRationale: "A proposta exige a emancipação pública, combate ao feminicídio e equiparação salarial no mercado de trabalho formal."
      }
    ],
    detailedExplanation: {
      summary: "Sueli Carneiro cunhou a necessidade de 'enegrecer o feminismo' para desvendar as opressões cruzadas que vitimam as mulheres negras.",
      stepByStep: [
        "1. Analisar o argumento da autora: o feminismo clássico falava a partir do ponto de vista da mulher branca de classe média.",
        "2. Desconstruir mitos: o mito da 'fragilidade da mulher' nunca contemplou a mulher negra, submetida ao trabalho escravo e doméstico precarizado.",
        "3. Concluir que o feminismo negro traz a raça como categoria estruturante incontornável para pensar justiça social."
      ],
      coreConcept: "Feminismo Negro brasileiro, Sueli Carneiro, Geledés e epistemicídio.",
      trapWarning: "Epistemicídio é o apagamento e aniquilação sistemática da produção intelectual e cultural de povos subalternizados."
    },
    commonTraps: ["Achar que o feminismo é homogêneo e que não existiam divergências históricas profundas entre feministas brancas e negras."],
    tags: ["Sueli Carneiro", "Enegrecer o Feminismo", "Geledés", "Feminismo Negro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-020",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Patrimônio Cultural e História Urbana",
    subtopic: "O Cais do Valongo e a Memória da Diáspora Africana",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Descoberto durante as obras de revitalização da Zona Portuária do Rio de Janeiro em 2011, o Cais do Valongo foi o principal porto de entrada e comércio forçado de escravizados africanos nas Américas. Estima-se que por ali passaram cerca de um milhão de pessoas escravizadas entre 1811 e 1831. Em 1843, o cais foi aterrado e sobreposto pelo suntuoso Cais da Imperatriz para receber Teresa Cristina de Bourbon. Em 2017, a UNESCO concedeu ao Cais do Valongo o título de Patrimônio Mundial como sítio de memória sensível.",
      source: "UNESCO. Cais do Valongo: Patrimônio Cultural Mundial. Declaração de Valor Universal Excepcional. Paris, 2017."
    },
    prompt: "O processo de soterramento e posterior redescoberta do Cais do Valongo materializa",
    options: [
      {
        id: "a",
        text: "o empenho continuado do Segundo Reinado em erguer memoriais públicos que reverenciassem os mártires do cativeiro.",
        isCorrect: false,
        distractorRationale: "O Segundo Reinado aterrou o cais de escravizados exatamente para ocultá-lo sob o nome de Cais da Imperatriz, apagando as marcas da escravidão na capital."
      },
      {
        id: "b",
        text: "as políticas de embranquecimento e apagamento da memória da escravidão empreendidas pelas elites, contrastadas com as lutas contemporâneas pelo direito à memória e à verdade.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O aterro do Cais do Valongo exemplifica a tentativa de apagar fisicamente o passado escravista da paisagem carioca; sua redescoberta e titulação pela UNESCO representam a consagração da memória contra o esquecimento forçado."
      },
      {
        id: "c",
        text: "a primazia concedida pela Coroa Portuguesa às normas de preservação arqueológica de matriz africana.",
        isCorrect: false,
        distractorRationale: "A preservação arqueológica de sítios da escravidão é conquista recente de movimentos sociais no século XXI."
      },
      {
        id: "d",
        text: "a comprovação de que o tráfico de africanos para o Brasil colonial teve impacto demográfico insignificante.",
        isCorrect: false,
        distractorRationale: "O Brasil foi o país que mais recebeu cativos no mundo (quase 5 milhões de africanos), sendo o Valongo o maior porto de entrada das Américas."
      },
      {
        id: "e",
        text: "o abandono definitivo das pesquisas arqueológicas subaquáticas na Baía de Guanabara.",
        isCorrect: false,
        distractorRationale: "A descoberta impulsionou escavações intensas e a criação do Museu da História e da Cultura Afro-Brasileira (MUHCAB)."
      }
    ],
    detailedExplanation: {
      summary: "O Cais do Valongo é um 'sítio de memória sensível' (como Auschwitz ou Hiroshima) que testemunhou a maior tragédia humana do tráfico transatlântico.",
      stepByStep: [
        "1. Analisar a cronologia: 1811 (construção do cais do tráfico) ⟹ 1843 (aterrado e renomeado Cais da Imperatriz para apagar a memória da escravidão) ⟹ 2011 (redescoberta arqueológica).",
        "2. Identificar a categoria da UNESCO: sítio de memória sensível e dor humana incomparável.",
        "3. Concluir que o sítio desmonta a narrativa de harmonia racial e reafirma o dever de memória e reparação histórica."
      ],
      coreConcept: "Memória sensível, patrimônio cultural mundial da UNESCO e disputa pela paisagem urbana carioca ('Pequena África').",
      trapWarning: "A região do Valongo integra a 'Pequena África', termo cunhado por Heitor dos Prazeres para designar o coração cultural e comunitário negro do Rio."
    },
    commonTraps: ["Achar que o soterramento do cais foi um mero acidente de engenharia sem intencionalidade ideológica das elites monárquicas."],
    tags: ["Cais do Valongo", "UNESCO", "Patrimônio Mundial", "Diáspora Africana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-021",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Direitos Indígenas e Disputas Territoriais",
    subtopic: "A Tese do Marco Temporal e a Jurisprudência Constitucional",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em setembro de 2023, o Plenário do Supremo Tribunal Federal (STF) julgou o Recurso Extraordinário (RE) 1017365 com repercussão geral, rejeitando por 9 votos a 2 a chamada tese do 'marco temporal'. A tese jurídica refutada defendia que os povos indígenas só teriam direito à demarcação das terras que estivessem sob sua posse física exatamente em 5 de outubro de 1988 (data da promulgação da Constituição). A maioria dos ministros assentou que o direito sobre as terras tradicionalmente ocupadas é originário (indigenato), não dependendo de marcos cronológicos artificiais.",
      source: "SUPREMO TRIBUNAL FEDERAL. Julgamento do RE 1017365/SC. Notícias STF, Brasília, 21 de setembro de 2023."
    },
    prompt: "A rejeição da tese do marco temporal pelo Supremo Tribunal Federal fundamentou-se no princípio de que",
    options: [
      {
        id: "a",
        text: "os povos indígenas que foram forçadamente expulsos de seus territórios por violência, esbulho ou perseguição estatal não podem ser punidos pela ausência de posse física em 1988.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O STF reconheceu que muitas comunidades não estavam na terra em 5 de outubro de 1988 porque tinham sido brutalmente massacradas ou expulsas pela ditadura militar e grileiros (renitente esbulho), sendo o indigenato um direito originário congênito anterior ao próprio Estado."
      },
      {
        id: "b",
        text: "todas as terras brasileiras devem ser imediatamente convertidas em reservas florestais intangíveis sem atividade humana.",
        isCorrect: false,
        distractorRationale: "A decisão restringe-se às terras tradicionalmente ocupadas conforme critérios antropológicos do artigo 231 da CF."
      },
      {
        id: "c",
        text: "o texto constitucional de 1988 perdeu sua vigência jurídica após o decurso de trinta anos de sua promulgação.",
        isCorrect: false,
        distractorRationale: "A Constituição de 1988 é a norma fundamental vigente e a guardiã dos direitos fundamentais das minorias."
      },
      {
        id: "d",
        text: "a demarcação de terras indígenas subordina-se à concordância expressa e prévia das cooperativas do agronegócio.",
        isCorrect: false,
        distractorRationale: "A demarcação é dever vinculado da União fundamentado em laudos antropológicos objetivos da FUNAI, e não em interesses privados."
      },
      {
        id: "e",
        text: "as populações originárias abriram mão de seus costumes ancestrais ao aceitar a tecnologia digital.",
        isCorrect: false,
        distractorRationale: "O direito à identidade é permanente; o uso de tecnologias contemporâneas não descaracteriza a condição indígena de nenhum povo."
      }
    ],
    detailedExplanation: {
      summary: "A rejeição do Marco Temporal pelo STF consagrou a teoria do indigenato contra a tese do fato indígena.",
      stepByStep: [
        "1. Compreender o que era a tese do marco temporal: exigir que o indígena comprovasse presença física no dia 05/10/1988.",
        "2. Identificar a injustiça histórica da tese: povos haviam sido removidos à força pelo SPI e pela ditadura militar antes de 1988.",
        "3. Concluir que o direito originário (art. 231 da CF) é inalienável e prevalece sobre esbulhos pretéritos."
      ],
      coreConcept: "Indigenato, renitente esbulho e inconstitucionalidade do Marco Temporal.",
      trapWarning: "O direito originário significa que o direito indígena à terra NÃO foi criado pela Constituição de 1988: ele foi apenas RECONHECIDO como pré-existente ao Estado."
    },
    commonTraps: ["Supor que a ausência do indígena na terra em 1988 significava abandono voluntário do território."],
    tags: ["Marco Temporal", "STF", "RE 1017365", "Artigo 231"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-022",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Irmandades Religiosas Negras e Resistência",
    subtopic: "A Irmandade de Nossa Senhora do Rosário dos Homens Pretos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No Brasil colonial e imperial, impedidos de frequentar as mesmas confrarias e altares da elite branca, os negros criaram suas próprias irmandades religiosas, com destaque para a Irmandade de Nossa Senhora do Rosário dos Homens Pretos. Essas instituições iam muito além das orações: funcionavam como associações de socorro mútuo que garantiam enterros dignos, organizavam fundos coletivos para a compra de cartas de alforria de seus associados e elegiam os Reis de Congo (origem das congadas).",
      source: "SCARANO, Julita. Devoção e escravidão: a Irmandade de Nossa Senhora do Rosário dos Homens Pretos no Distrito Diamantino no século XVIII. São Paulo: Companhia Editora Nacional, 1976."
    },
    prompt: "As irmandades católicas de homens pretos desempenharam um papel crucial na sociedade escravista brasileira porque",
    options: [
      {
        id: "a",
        text: "atuavam como agências de cobrança compulsória de tributos para a Coroa portuguesa.",
        isCorrect: false,
        distractorRationale: "As irmandades eram organizadas pela própria comunidade negra para socorro de seus pares, e não para tributação fiscal."
      },
      {
        id: "b",
        text: "constituíram espaços de solidariedade comunitária, proteção social e preservação de identidades africanas sob o manto da devoção cristã.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Sob o respaldo formal da Igreja Católica, os escravizados e libertos criaram redes de previdência social, juntavam dinheiro para alforrias e celebravam a memória da realeza africana (festa da coroação do Rei e Rainha do Congo)."
      },
      {
        id: "c",
        text: "exigiam a comprovação de linhagem nobre portuguesa para admissão de seus membros.",
        isCorrect: false,
        distractorRationale: "Eram confrarias exclusivas ou prioritárias para africanos e afrodescendentes (crioulos e pardos)."
      },
      {
        id: "d",
        text: "impediam qualquer manifestação musical, dança ou cortejo festivo em seus templos.",
        isCorrect: false,
        distractorRationale: "As irmandades eram o núcleo de celebrações ricas como as congadas, maracatus e moçambiques com tambores e danças."
      },
      {
        id: "e",
        text: "rejeitavam a libertação de escravizados por considerá-la atentatória à moral religiosa.",
        isCorrect: false,
        distractorRationale: "A compra coletiva de alforrias por meio da arrecadação de esmolas era uma das atividades mais prestigiadas das irmandades."
      }
    ],
    detailedExplanation: {
      summary: "As irmandades de Nossa Senhora do Rosário foram os primeiros sindicatos e sociedades de socorro mútuo dos negros no Brasil.",
      stepByStep: [
        "1. Analisar as funções das irmandades: além da devoção religiosa, ofereciam funeral digno (crucial na espiritualidade africana).",
        "2. Identificar a função econômica: caixa comum (fundo de emancipação) para comprar a liberdade de irmãos cativos.",
        "3. Identificar a função cultural: realeza africana reelaborada através das Congadas e coroação dos Reis do Congo."
      ],
      coreConcept: "Sincretismo, irmandades leigas e solidariedade negra no Brasil colonial e imperial.",
      trapWarning: "Não confunda a devoção católica nas irmandades com submissão acrítica: era uma apropriação tática para garantir sobrevivência e dignidade."
    },
    commonTraps: ["Achar que os escravizados apenas adotaram o catolicismo passivamente sem reelaborar seus próprios significados comunitários."],
    tags: ["Irmandades Negras", "Nossa Senhora do Rosário", "Congada", "Solidariedade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-023",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Sociologia da Desigualdade e Relações Raciais",
    subtopic: "Silvio Almeida e o Conceito de Racismo Estrutural",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O racismo não é uma anomalia, um desvio de conduta individual ou uma patologia psicológica que atinge apenas sujeitos preconceituosos. Pelo contrário: em sociedades forjadas pela escravidão, o racismo é estrutural. Ele constitui o modo normal como as relações políticas, econômicas, judiciais e cotidianas se organizam, distribuindo privilégios para a branquitude e vulnerabilidades para a população negra de maneira rotineira e institucionalizada.",
      source: "ALMEIDA, Silvio. Racismo estrutural. São Paulo: Pólen Livros, 2019."
    },
    prompt: "Segundo a abordagem de Silvio Almeida, qualificar o racismo como 'estrutural' significa compreender que ele",
    options: [
      {
        id: "a",
        text: "manifesta-se exclusivamente por meio de agressões verbais explícitas tipificadas pelo Código Penal.",
        isCorrect: false,
        distractorRationale: "Isso define o racismo individual/comportamental, que é apenas a ponta visível do iceberg estrutural."
      },
      {
        id: "b",
        text: "opera como elemento constituinte das instituições e da dinâmica socioeconômica, perpetuando disparidades mesmo na ausência de intenção discriminatória explícita.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O racismo estrutural demonstra que a desigualdade racial está enraizada nas estruturas do Estado, do mercado de trabalho e do sistema judiciário, operando de forma orgânica e permanente."
      },
      {
        id: "c",
        text: "resulta de fatores imutáveis da psicologia humana que tornam ineficaz qualquer política pública antirracista.",
        isCorrect: false,
        distractorRationale: "O autor afirma que o racismo é histórico e social, e portanto pode e deve ser superado por meio de profundas transformações estruturais."
      },
      {
        id: "d",
        text: "atinge de modo equânime todos os estratos da sociedade civil sem qualquer correlação com indicadores de renda.",
        isCorrect: false,
        distractorRationale: "O racismo estrutural determina exatamente as piores remunerações, menores taxas de escolaridade e maiores índices de letalidade policial para negros."
      },
      {
        id: "e",
        text: "desapareceu do Brasil após a proclamação da República e a sanção da Lei Afonso Arinos de 1951.",
        isCorrect: false,
        distractorRationale: "A legislação antirracista foi um avanço, mas não extirpou a estrutura racializada de poder e privilégio herdada da escravidão."
      }
    ],
    detailedExplanation: {
      summary: "Silvio Almeida distingue o racismo em três dimensões: individual, institucional e estrutural.",
      stepByStep: [
        "1. Racismo individual: ato isolado de preconceito entre duas pessoas.",
        "2. Racismo institucional: desvantagem sistemática imposta por instituições públicas ou corporativas.",
        "3. Racismo estrutural: quando o próprio funcionamento normal da economia, do direito e da política reproduz a hierarquia racial herdada da colônia.",
        "4. Conclusão: a superação do racismo exige reformas estruturais anticapitalistas e descolonizadoras."
      ],
      coreConcept: "Racismo estrutural, branquitude e reprodução social das hierarquias raciais.",
      trapWarning: "Para combater o racismo estrutural, não basta não ser racista individualmente: é obrigatório ser ativamente antirracista nas práticas institucionais."
    },
    commonTraps: ["Achar que o racismo só existe quando alguém usa xingamentos racistas em público."],
    tags: ["Silvio Almeida", "Racismo Estrutural", "Instituições", "Sociologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-024",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Resistência Quilombola e Memória Histórica",
    subtopic: "Zumbi e o Quilombo dos Palmares",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Palmares durou quase um século (c. 1590–1694) na Serra da Barriga, abrigando mais de vinte mil pessoas. Não era uma simples paliçada de fugitivos, mas uma confederação de mocambos (como Macaco, Subupira e Zumbi) dotada de agricultura diversificada (milho, mandioca, feijão, cana), metalurgia de ferramentas, criação de animais e redes de comércio clandestino com moradores vizinhos. Em 1678, o líder Ganga Zumba negociou um tratado de paz com o governador de Pernambuco que previa a liberdade apenas para os nascidos em Palmares em troca da devolução dos novos fugitivos; Zumbi recusou o acordo por considerá-lo traição à causa da liberdade irrestrita.",
      source: "FREITAS, Décio. Palmares: a guerra dos escravos. Porto Alegre: Mercado Aberto, 1984 (adaptado)."
    },
    prompt: "A ruptura entre Zumbi e Ganga Zumba em 1678 expressou",
    options: [
      {
        id: "a",
        text: "o anseio de Palmares de se converter em colônia vassala da coroa espanhola.",
        isCorrect: false,
        distractorRationale: "Palmares nunca buscou vassalagem a impérios europeus, lutando por autonomia total."
      },
      {
        id: "b",
        text: "o dilema estratégico entre a conciliação pragmática com a ordem colonial e a recusa radical de qualquer compromisso que mantivesse a escravidão de irmãos de luta.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Mostra que Ganga Zumba aceitou a liberdade condicional parcial das autoridades coloniais, enquanto Zumbi liderou a ala intransigente que não aceitava devolver nenhum escravizado nem aceitar a submissão aos portugueses."
      },
      {
        id: "c",
        text: "a concordância unânime de todos os quilombolas com o desarmamento voluntário dos mocambos.",
        isCorrect: false,
        distractorRationale: "A discordância gerou cisão interna profunda, com Zumbi assumindo a liderança do Mocambo do Macaco."
      },
      {
        id: "d",
        text: "a decisão de transformar a Serra da Barriga em feitoria comercial de açúcar de exportação.",
        isCorrect: false,
        distractorRationale: "A produção de Palmares era voltada à policultura de subsistência e consumo comunitário, oposta à plantation canavieira monocultora."
      },
      {
        id: "e",
        text: "a recusa dos palmarinos em desenvolver técnicas agrícolas e ferramentas de ferro.",
        isCorrect: false,
        distractorRationale: "O texto afirma explicitamente que Palmares dominava a metalurgia e mantinha agricultura diversificada de alta produtividade."
      }
    ],
    detailedExplanation: {
      summary: "O Quilombo dos Palmares foi a maior república de homens livres e resistência negra da história das Américas.",
      stepByStep: [
        "1. Conhecer a magnitude de Palmares: durou cerca de 100 anos e resistiu a dezenas de expedições militares portuguesas e holandesas.",
        "2. Analisar o conflito de 1678: o Tratado de Cucuau proposto por Ganga Zumba concedia anistia aos nascidos em Palmares, mas exigia a devolução de cativos que chegassem depois.",
        "3. Explicar a postura de Zumbi: princípio ético inegociável de liberdade universal para todos os escravizados.",
        "4. Queda de Palmares: destruído em 1694 pelo bandeirante paulista Domingos Jorge Velho após cerco prolongado com canhões."
      ],
      coreConcept: "Quilombo dos Palmares, Zumbi, resistência quilombola e a recusa da conciliação escravocrata.",
      trapWarning: "Zumbi foi assassinado em 20 de novembro de 1695, data que motivou a consagração do Dia Nacional da Consciência Negra (Lei 12.519/2011 e feriado nacional pela Lei 14.759/2023)."
    },
    commonTraps: ["Achar que Palmares era um refúgio desorganizado e vulnerável, ignorando sua estrutura política e econômica complexa."],
    tags: ["Zumbi dos Palmares", "Quilombo dos Palmares", "Ganga Zumba", "Consciência Negra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-ETN-025",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Cultura e Religiosidade de Matriz Africana",
    subtopic: "O Candomblé como Espaço de Reexistência e Preservação Linguística",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No terreiro de candomblé, a diáspora africana reconstituiu não apenas um sistema de crenças, mas uma civilização inteira. Na culinária dos orixás, nos toques dos atabaques (rum, rumpi e lé), nos cantos em iorubá, banto e fon, e na relação sacralizada com as folhas medicinais e sagradas (axé das plantas), os terreiros preservaram saberes ancestrais que foram sistematicamente perseguidos pela polícia republicana até meados do século XX. O terreiro é, antes de tudo, um território de reexistência comunitária.",
      source: "SANTOS, Juana Elbein dos. Os nàgô e a morte: Pàdè, Àsèsè e o culto égun na Bahia. Petrópolis: Vozes, 1986 (adaptado)."
    },
    prompt: "A sociologia da cultura identifica os terreiros de candomblé no Brasil como espaços fundamentais de",
    options: [
      {
        id: "a",
        text: "imposição da uniformidade litúrgica euro-cristã sobre as línguas originárias africanas.",
        isCorrect: false,
        distractorRationale: "O candomblé preservou e recriou as matrizes linguísticas e teológicas africanas que o catolicismo dominante tentou aniquilar."
      },
      {
        id: "b",
        text: "salvaguarda de memórias, botânica tradicional, sistemas linguísticos e sociabilidades decoloniais contra o epistemicídio.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Os terreiros funcionaram como bibliotecas vivas de ancestralidade, preservando línguas africanas, fitoterapia e redes de solidariedade contra a perseguição policial e o racismo religioso."
      },
      {
        id: "c",
        text: "adesão voluntária à mercantilização comercial exógena e eliminação de seus preceitos iniciáticos.",
        isCorrect: false,
        distractorRationale: "Os terreiros mantêm rigorosos preceitos de iniciação, segredo e respeito aos orixás e ancestrais."
      },
      {
        id: "d",
        text: "rejeição de qualquer vínculo de acolhimento solidário com as comunidades periféricas do entorno.",
        isCorrect: false,
        distractorRationale: "Os terreiros historicamente funcionam como centros comunitários de partilha de alimentos, acolhimento psicossocial e apoio aos desvalidos."
      },
      {
        id: "e",
        text: "submissão incondicional aos alvarás policiais emitidos pelas delegacias de costumes da época.",
        isCorrect: false,
        distractorRationale: "Os praticantes resistiram clandestinamente e lutaram por décadas até que a liberdade religiosa fosse respeitada sem exigência de licença policial (como o Decreto da Bahia de 1976)."
      }
    ],
    detailedExplanation: {
      summary: "O Candomblé no Brasil é um monumento vivo de resistência cultural, cosmologia ecológica e preservação das matrizes africanas.",
      stepByStep: [
        "1. Compreender o conceito de 'terreiro': espaço de comunhão, memória, família de santo e transmissão oral.",
        "2. Identificar os saberes preservados: conhecimento botânico (as folhas sagradas), linguístico (iorubá, quimbundo, quicongo) e gastronômico.",
        "3. Concluir que a preservação do axé constitui resistência viva contra o racismo religioso e epistemicídio secular."
      ],
      coreConcept: "Terreiros de Candomblé, racismo religioso e preservação patrimonial afro-brasileira.",
      trapWarning: "A perseguição aos terreiros até 1976 na Bahia exigia registro e pagamento de taxas na Delegacia de Jogos e Costumes, evidenciando o racismo de Estado."
    },
    commonTraps: ["Reduzir o candomblé a mero folclore ou feitiçaria, ignorando sua complexa ontologia filosófica e relevância comunitária."],
    tags: ["Candomblé", "Terreiros", "Patrimônio Afro-Brasileiro", "Racismo Religioso"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
