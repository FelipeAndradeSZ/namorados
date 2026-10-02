export const QUESTIONS_GEOPOLITICA = [
  {
    id: "HUM-GEOPOL-001",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Geopolítica e Globalização",
    subtopic: "A Nova Divisão Internacional do Trabalho (DIT)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A cadeia global de valor de um smartphone moderno envolve o design e a programação desenvolvidos no Vale do Silício (EUA), componentes semicondutores e telas fabricados em Taiwan e na Coreia do Sul, montagem final em fábricas automatizadas na China e Vietnã, e matéria-prima (lítio e cobalto) extraída na América do Sul e na África.",
      source: "ENEM Geografia Econômica"
    },
    prompt: "Esse modelo de produção e distribuição reflete a Nova Divisão Internacional do Trabalho (DIT), caracterizada pela:",
    options: [
      { id: "a", text: "Fragmentação espacial da produção e dispersão das etapas produtivas com concentração das tomadas de decisão de alto valor agregado nas matrizes.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Autossuficiência industrial de cada país, eliminando o comércio internacional entre continentes.", isCorrect: false, distractorRationale: "O exemplo mostra exatamente o oposto: intensa interdependência global." },
      { id: "c", text: "Transferência igualitária de lucros e de tecnologia de ponta para os países extrativistas de minérios.", isCorrect: false, distractorRationale: "A DIT contemporânea perpetua a desigualdade entre produtores de commodities e donos de patentes." },
      { id: "d", text: "Substituição completa do trabalho humano em todos os continentes por sistemas manuais artesanais.", isCorrect: false, distractorRationale: "Absurdo evidente: o modelo usa alta tecnologia e manufatura fabril." },
      { id: "e", text: "Retração dos fluxos de capitais financeiros transnacionais e fechamento das fronteiras marítimas.", isCorrect: false, distractorRationale: "A globalização intensifica os fluxos de capitais e transportes marítimos conteinerizados." }
    ],
    detailedExplanation: {
      summary: "A Nova DIT baseia-se na fábrica global: empresas transnacionais dispersam as etapas de menor custo (manufatura/montagem) e concentram pesquisa, patentes e marketing nos países centrais.",
      stepByStep: [
        "DIT Tradicional: Metrópole (produtos manufaturados) vs. Colônia (matérias-primas).",
        "Nova DIT: Fragmentação global. Países em desenvolvimento fornecem mão de obra barata e incentivos fiscais para montagem de peças; países desenvolvidos mantêm o controle financeiro, design e patentes de alto valor agregado."
      ],
      coreConcept: "A Nova Divisão Internacional do Trabalho (DIT) e as Cadeias Globais de Valor",
      trapWarning: "Cuidado: a produção física se descentralizou, mas o capital e o comando tecnológico continuam altamente centralizados."
    },
    commonTraps: ["achar que globalização democratizou a posse das tecnologias"],
    tags: ["globalizacao", "dit", "geopolitica", "economia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-002",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Geopolítica e Globalização",
    subtopic: "Crise de Refugiados e Migrações Internacionais",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Segundo o ACNUR (Alto Comissariado das Nações Unidas para Refugiados), o número de pessoas deslocadas à força no mundo ultrapassou a marca histórica de 110 milhões de indivíduos em 2023, impulsionado por guerras civis, perseguições étnico-religiosas e eventos climáticos extremos.",
      source: "Relatório Anual ACNUR"
    },
    prompt: "Diferente do imigrante econômico voluntário, o indivíduo classificado juridicamente pelo Direito Internacional como 'refugiado' é caracterizado por:",
    options: [
      { id: "a", text: "Haver deixado seu país de origem por fundado temor de perseguição (por motivos de raça, religião, nacionalidade, grupo social ou opinião política) ou por grave e generalizada violação de direitos humanos, sem poder retornar em segurança.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Ter mudado de país com autorização de trabalho regular emitida por empresas multinacionais.", isCorrect: false, distractorRationale: "Isso caracteriza migração laboral qualificada com autorização regular, não refúgio humanitário." },
      { id: "c", text: "Ser um cidadão estrangeiro que decide prolongar sua estada temporária após o vencimento do prazo consular.", isCorrect: false, distractorRationale: "Isso configura permanência administrativa irregular, não refúgio sob proteção humanitária." },
      { id: "d", text: "Ser um cidadão com dupla nacionalidade que opta por pagar menos impostos em paraísos fiscais.", isCorrect: false, distractorRationale: "Isso é elisão fiscal internacional, nada tem a ver com proteção humanitária." },
      { id: "e", text: "Pessoa em intercâmbio acadêmico financiada por bolsas de pesquisa universitárias.", isCorrect: false, distractorRationale: "Isso é intercâmbio acadêmico temporário de estudos." }
    ],
    detailedExplanation: {
      summary: "A Convenção de Genebra de 1951 e a Declaração de Cartagena definem refúgio com base no fundado temor de perseguição e na incapacidade de proteção pelo Estado de origem.",
      stepByStep: [
        "Imigrante econômico: desloca-se voluntariamente em busca de melhores condições de vida/trabalho.",
        "Refugiado: desloca-se FORÇADAMENTE porque sua vida, integridade física ou liberdade estão sob risco iminente por guerra, perseguição ou colapso dos direitos humanos.",
        "Princípio do 'Non-refoulement': o país acolhedor não pode devolver o refugiado a um território onde sua vida corra perigo."
      ],
      coreConcept: "Conceito Jurídico e Humanitário de Refugiado vs. Imigrante Econômico",
      trapWarning: "No ENEM, não confunda migrante voluntário com refugiado forçado."
    },
    commonTraps: ["tratar refugiados como imigrantes econômicos comuns"],
    tags: ["refugiados", "direitos humanos", "geografia da populacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-003",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geopolítica e Globalização",
    subtopic: "Conflito Israel-Palestina e Disputas Territoriais",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A questão palestina remonta à partilha da Palestina proposta pela ONU em 1947 e à subsequente criação do Estado de Israel em 1948. Ao longo de sucessivos conflitos bélicos (Guerra dos Seis Dias em 1967, Guerra do Yom Kippur em 1973), o mapa da região foi profundamente redesenhado, com a ocupação israelense da Cisjordânia, Faixa de Gaza e Colinas de Golã. Além da soberania territorial e do estatuto de Jerusalém, o controle sobre os escassos recursos hídricos na bacia do Rio Jordão e sobre aquíferos subterrâneos constitui um vetor geopolítico determinante para a sobrevivência das populações locais.",
      source: "Atlas das Relações Internacionais Contemporâneas."
    },
    prompt: "No contexto geopolítico do Oriente Médio, a persistência do conflito árabe-israelense é agravada por fatores que vão além das divergências religiosas, destacando-se:",
    options: [
      { id: "a", text: "a disputa estratégica pela soberania sobre a terra, o controle de mananciais de água doce e a proliferação de assentamentos na Cisjordânia que inviabilizam a contiguidade territorial de um futuro Estado Palestino.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a inexistência de recursos petrolíferos em qualquer nação do Oriente Médio, forçando a busca de terras agrícolas em Israel.", isCorrect: false, distractorRationale: "O Oriente Médio detém cerca de metade das reservas globais de petróleo." },
      { id: "c", text: "o acordo unânime entre todas as facções palestinas e partidos israelenses pela divisão pacífica e imediata de Jerusalém Oriental.", isCorrect: false, distractorRationale: "Jerusalém é exatamente um dos nós mais controversos e irreconciliáveis da disputa." },
      { id: "d", text: "o isolamento completo da região em relação a potências globais como Estados Unidos e União Soviética/Rússia.", isCorrect: false, distractorRationale: "A região sempre foi palco de intensa interferência das superpotências globais." },
      { id: "e", text: "a recusa de Israel em receber suporte financeiro ou militar de nações ocidentais.", isCorrect: false, distractorRationale: "Israel mantém aliança estratégica e recebe expressivo suporte militar dos Estados Unidos." }
    ],
    detailedExplanation: {
      summary: "O conflito histórico entre israelenses e palestinos envolve território, refugiados históricos da Nakba, o estatuto sagrado de Jerusalém e o controle de recursos vitais como a água em uma região semiárida.",
      stepByStep: [
        "1947: Plano de Partilha da ONU prevendo dois Estados (judeu e árabe); rejeitado pelos países árabes vizinhos.",
        "1967: Guerra dos Seis Dias; Israel ocupa militarmente a Cisjordânia, Faixa de Gaza, Península do Sinai e Colinas de Golã.",
        "A construção de assentamentos civis israelenses na Cisjordânia fragmenta o território palestino em enclaves desconexos, dificultando a 'solução de dois Estados'."
      ],
      coreConcept: "Geopolítica do Oriente Médio: Território, Hidropolítica e Fronteiras",
      trapWarning: "Evite reduzir o conflito a ódio religioso milenar; trata-se primariamente de um conflito geopolítico moderno sobre terra, direitos cívicos e soberania estatal."
    },
    commonTraps: [
      "Achar que o conflito começou na Antiguidade bíblica e não no século XX",
      "Ignorar o fator da hidropolítica (água do Jordão) na geopolítica regional"
    ],
    tags: ["oriente-medio", "israel-palestina", "geopolitica", "hidropolitica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-004",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Geopolítica e Globalização",
    subtopic: "Segurança Energética e Guerra na Ucrânia",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A eclosão do conflito entre Rússia e Ucrânia em 2022 descortinou a extrema vulnerabilidade energética da União Europeia, em especial da Alemanha, altamente dependente do gás natural transportado por gasodutos russos como o Nord Stream. Em resposta às sanções econômicas do bloco ocidental, Moscou restringiu o fluxo de hidrocarbonetos, forçando os países europeus a reativarem usinas a carvão mineral, ampliarem compras emergenciais de Gás Natural Liquefeito (GNL) dos Estados Unidos e Catar e acelerarem metas da transição energética verde.",
      source: "Agência Internacional de Energia (IEA), Relatório de Segurança Energética, 2023."
    },
    prompt: "O cenário de crise energética descrito demonstra que, na geopolítica contemporânea, as fontes de energia primária funcionam como:",
    options: [
      { id: "a", text: "instrumentos de poder e barganha geopolítica capazes de condicionar decisões diplomáticas, segurança nacional e inflação em escala planetária.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "mercadorias neutras cujo comércio independe de alianças militares ou conflitos territoriais entre Estados soberanos.", isCorrect: false, distractorRationale: "A energia é um dos ativos mais politizados e militarizados do sistema internacional." },
      { id: "c", text: "fatores de irrelevância para países desenvolvidos, já que toda a indústria europeia opera 100% à base de energia solar fotovoltaica.", isCorrect: false, distractorRationale: "A indústria pesada europeia ainda depende fortemente de combustíveis fósseis e gás para calor de processo." },
      { id: "d", text: "bens abundantes e gratuitos cuja distribuição é regulada voluntariamente por organizações não governamentais ecológicas.", isCorrect: false, distractorRationale: "O gás e o petróleo são commodities de mercado altamente lucrativas geridas por corporações estatais e privadas." },
      { id: "e", text: "elementos obsoletos que foram completamente substituídos por baterias de íon-lítio em usinas nucleares.", isCorrect: false, distractorRationale: "Baterias de lítio armazenam eletricidade, não geram energia primária em substituição a usinas nucleares." }
    ],
    detailedExplanation: {
      summary: "A dependência de combustíveis fósseis de potências rivais cria assimetria geopolítica ('arma energética'). A Europa descobriu que a interdependência econômica não impediu o uso do gás como instrumento coercitivo de guerra.",
      stepByStep: [
        "A Rússia utilizou o monopólio da infraestrutura física de dutos (Nord Stream, Yamal) para pressionar a OTAN e a União Europeia.",
        "A crise evidenciou o conceito de 'Segurança Energética': capacidade de uma nação garantir suprimento ininterrupto de energia a preços acessíveis.",
        "Impacto geopolítico: inflação global, busca por GNL liquefeito transportado por navios e fortalecimento do eixo energético EUA-Europa."
      ],
      coreConcept: "Geopolítica da Energia: Dependência Estratégica, Gasodutos e Segurança Nacional",
      trapWarning: "No ENEM, conecte sempre choques geopolíticos a impactos econômicos diretos no custo de vida e na matriz energética global."
    },
    commonTraps: [
      "Achar que a Europa já havia completado sua transição verde antes da guerra",
      "Ignorar o papel crucial da infraestrutura fixa de gasodutos na geopolítica euroasiática"
    ],
    tags: ["energia", "russia-ucrania", "gas-natural", "geopolitica-europeia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-005",
    area: "humanas",
    competence: 2,
    skill: 9,
    topic: "Geopolítica e Globalização",
    subtopic: "A Expansão dos BRICS e a Multipolaridade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na cúpula de Joanesburgo em 2023, o grupo BRICS (originalmente formado por Brasil, Rússia, Índia, China e África do Sul) anunciou uma expansão histórica, convidando países como Arábia Saudita, Irã, Emirados Árabes Unidos, Egito e Etiópia. O bloco ampliado passou a concentrar mais de 45% da população mundial e cerca de 40% da produção global de petróleo cru. Uma das pautas mais debatidas pelos líderes do Sul Global foi o estímulo ao comércio bilateral utilizando moedas locais, contornando o uso exclusivo do dólar norte-americano nas transações de commodities.",
      source: "Declaração de Joanesburgo II, 15ª Cúpula do BRICS."
    },
    prompt: "A ampliação do grupo BRICS e a proposta de transações em moedas locais refletem um movimento geopolítico contemporâneo voltado à:",
    options: [
      { id: "a", text: "construção de uma ordem internacional multipolar que contesta a hegemonia financeira ocidental e fortalece o protagonismo do Sul Global na governança econômica mundial.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "subordinação irrestrita de todas as economias emergentes aos ditames do Fundo Monetário Internacional (FMI) e do Banco Mundial.", isCorrect: false, distractorRationale: "O Novo Banco de Desenvolvimento (NBD dos BRICS) foi criado justamente como alternativa às regras do FMI e do Banco Mundial." },
      { id: "c", text: "criação imediata de uma moeda única impressa com eliminação de todas as moedas soberanas nacionais dos países membros.", isCorrect: false, distractorRationale: "Não há proposta de moeda física única imediata nos moldes do euro, mas sim facilitação de comércio em moedas locais soberanas." },
      { id: "d", text: "imposição do isolacionismo comercial absoluto, proibindo transações de exportação de soja e minério para os Estados Unidos.", isCorrect: false, distractorRationale: "Os países membros mantêm fortes relações comerciais com o Ocidente e não propõem isolacionismo." },
      { id: "e", text: "extinção formal da Organização das Nações Unidas (ONU) e substituição pelo Conselho dos BRICS.", isCorrect: false, distractorRationale: "Os BRICS defendem a reforma do Conselho de Segurança da ONU, não sua extinção." }
    ],
    detailedExplanation: {
      summary: "A emergência dos BRICS consolida a transição de um mundo unipolar (pós-Guerra Fria centrado nos EUA) para uma ordem multipolar, com múltiplos polos de atração diplomática e financeira.",
      stepByStep: [
        "Sul Global: termo que designa países em desenvolvimento e emergentes da América Latina, África, Ásia e Oceania.",
        "Desdolarização relativa: utilização do yuan chinês, rúpia indiana ou real em trocas bilaterais para reduzir a vulnerabilidade a sanções de Washington.",
        "O Brasil ocupa posição de destaque como ponte diplomática e grande fornecedor mundial de alimentos e energias renováveis."
      ],
      coreConcept: "Multipolaridade, Sul Global e Geopolítica dos BRICS",
      trapWarning: "Atenção: os BRICS não formam uma aliança militar formal (como a OTAN), mas sim uma coalizão geopolítica e geoeconômica heterogênea."
    },
    commonTraps: [
      "Confundir bloco geopolítico (BRICS) com união monetária aos moldes da Zona do Euro",
      "Tratar os BRICS como bloco ideologicamente homogêneo (há rivalidades internas, como entre Índia e China)"
    ],
    tags: ["brics", "multipolaridade", "sul-global", "geopolitica-economica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-006",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Geopolítica e Globalização",
    subtopic: "A Guerra dos Semicondutores e a Disputa Tecnológica EUA-China",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A indústria contemporânea de alta tecnologia depende de circuitos integrados microscópicos: os semicondutores. Cerca de 90% dos microchips mais avançados do mundo (abaixo de 5 nanômetros) são fabricados por uma única empresa sediada em Taiwan (a TSMC), utilizando maquinário litográfico ultravioleta extremo produzido na Holanda. Nos últimos anos, os Estados Unidos promulgaram o 'Chips Act' e impuseram rígidas restrições de exportação de tecnologia de ponta para a China, com o objetivo explícito de frear o avanço chinês em inteligência artificial e computação quântica militar.",
      source: "MILLER, Chris. A Guerra dos Chips. 2023 (adaptado)."
    },
    prompt: "A centralidade geopolítica da ilha de Taiwan e a corrida global pelos microchips ilustram que, no século XXI:",
    options: [
      { id: "a", text: "o controle sobre elos hiperconcentrados de cadeias tecnológicas de ponta constitui o epicentro da rivalidade hegemônica e da segurança militar entre superpotências.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "os microprocessadores perderam sua importância econômica devido à volta do telégrafo e de máquinas a vapor nas forças armadas.", isCorrect: false, distractorRationale: "O armamento moderno (mísseis hipersônicos, caças, drones) depende umbilicalmente de chips de ponta." },
      { id: "c", text: "qualquer país em desenvolvimento pode instalar fábricas de chips de 3nm em poucas semanas sem investimento financeiro relevante.", isCorrect: false, distractorRationale: "A fabricação de semicondutores de ponta custa dezenas de bilhões de dólares e exige know-how quase inalcançável." },
      { id: "d", text: "a China desistiu completamente de disputar a liderança científica e aceitou a soberania permanente norte-americana sobre a Ásia.", isCorrect: false, distractorRationale: "A China investe centenas de bilhões de dólares em autossuficiência científica e semicondutores nacionais." },
      { id: "e", text: "as fronteiras estatais desapareceram e as corporações de tecnologia operam sem nenhuma intervenção dos governos nacionais.", isCorrect: false, distractorRationale: "Os Estados Nacionais intervêm maciçamente por meio de subsídios públicos e embargos estratégicos." }
    ],
    detailedExplanation: {
      summary: "A 'Guerra dos Chips' demonstra como o poder geopolítico contemporâneo não é medido apenas por armas convencionais, mas pelo monopólio tecnológico da computação avançada e semicondutores.",
      stepByStep: [
        "Taiwan é o centro nevrálgico: o Estreito de Taiwan tornou-se o ponto de fricção geopolítica mais perigoso do planeta.",
        "Sem semicondutores avançados, não há inteligência artificial generativa, supercomputadores climáticos ou sistemas autônomos de defesa.",
        "Os EUA tentam o 'desacoplamento' (decoupling/de-risking) para isolar a China das tecnologias de litografia de última geração."
      ],
      coreConcept: "Tecnopolítica Global: Semicondutores, Soberania Digital e Guerra Fria Tecnológica",
      trapWarning: "No ENEM, correlacione fatores geográficos (posição de Taiwan no Mar do Sul da China) com dinâmicas de poder global."
    },
    commonTraps: [
      "Achar que microchips são apenas produtos de consumo doméstico (celulares e videogames)",
      "Desconsiderar a hiperconcentração geográfica da produção global de semicondutores avançados"
    ],
    tags: ["tecnologia", "semicondutores", "taiwan", "eua-china"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-007",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Geopolítica e Globalização",
    subtopic: "A Nova Rota da Seda Chinesa (Belt and Road Initiative)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Lançada por Pequim em 2013, a iniciativa 'Cinturão e Rota' (conhecida como Nova Rota da Seda) financiou centenas de bilhões de dólares em megaprojetos de infraestrutura ao redor do globo: ferrovias na África Oriental, portos de águas profundas no Paquistão, Sri Lanka e Grécia (Porto de Pireu), rodovias na Ásia Central e redes de energia na América do Sul. Enquanto analistas ocidentais alertam para a chamada 'diplomacia da armadilha da dívida' e ampliação do poderio naval chinês, governos de países em desenvolvimento veem no programa a única fonte viável de financiamento para sanar seus gargalos históricos de logística.",
      source: "World Bank Report, Belt and Road Economics, 2022."
    },
    prompt: "Do ponto de vista geoestratégico, o principal objetivo da China ao articular a Nova Rota da Seda é:",
    options: [
      { id: "a", text: "garantir rotas seguras e diversificadas de abastecimento de commodities e escoamento de manufaturados, reduzindo sua vulnerabilidade a eventuais bloqueios marítimos ocidentais em estreitos estratégicos como o de Malaca.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "abandonar toda a produção industrial no território chinês e transferir sua população para colônias agrícolas na Europa Ocidental.", isCorrect: false, distractorRationale: "A China é a 'fábrica do mundo' e expande sua infraestrutura para fortalecer sua indústria nacional, não para abandoná-la." },
      { id: "c", text: "estimular os países parceiros a fecharem seus terminais aduaneiros e entrepostos logísticos ao comércio internacional de contêineres.", isCorrect: false, distractorRationale: "O projeto visa exatamente multiplicar conexões marítimas e terrestres integradas." },
      { id: "d", text: "transformar todos os países participantes em membros automáticos da União Europeia.", isCorrect: false, distractorRationale: "A União Europeia é um bloco regional europeu independente e frequentemente crítico da influência chinesa." },
      { id: "e", text: "impedir o uso da internet e barrar a instalação de cabos submarinos de fibra óptica intercontinentais.", isCorrect: false, distractorRationale: "A 'Rota da Seda Digital' envolve a expansão de cabos de fibra óptica e redes 5G pela Huawei." }
    ],
    detailedExplanation: {
      summary: "A Nova Rota da Seda chinesa é a mais ambiciosa iniciativa de engenharia geopolítica do pós-Guerra Fria, conectando a Eurásia, a África e a América Latina à órbita produtiva de Pequim.",
      stepByStep: [
        "Dilema de Malaca: cerca de 80% do petróleo importado pela China passa pelo Estreito de Malaca, suscetível a bloqueios pela marinha americana.",
        "Estratégia chinesa: criar rotas terrestres alternativas (corredor China-Paquistão, ferrovias transasiáticas) e adquirir portos marítimos estratégicos ao redor do Oceano Índico.",
        "Exportação de sobrecapacidade produtiva: utiliza o excesso de aço, cimento e engenharia pesada chinesa para construir infraestrutura externa."
      ],
      coreConcept: "Geopolítica da Infraestrutura: Conectividade Terrestre, Rotas Marítimas e Expansão Chinesa",
      trapWarning: "No ENEM, compreenda que projetos de infraestrutura internacional sempre possuem dupla função: desenvolvimento econômico e projeção de poder geopolítico."
    },
    commonTraps: [
      "Achar que a Rota da Seda é apenas uma recriação turística do passado histórico",
      "Ignorar o papel dos 'choke points' (gargalos marítimos estratégicos como Malaca) na segurança nacional"
    ],
    tags: ["china", "rota-da-seda", "infraestrutura", "geopolitica-asiatica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-008",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Geopolítica e Globalização",
    subtopic: "A Geopolítica Ambiental e o Papel do Brasil",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A emergência climática global reposicionou a agenda ambiental no centro das relações internacionais. Países centrais, após séculos de industrialização intensiva em carbono e desmatamento de suas próprias florestas nativas, passaram a pressionar nações tropicais por metas rígidas de desmatamento zero e preservação da biodiversidade, condicionando acordos comerciais (como o Acordo Mercosul-União Europeia) a cláusulas ambientais estritas. Em contrapartida, países do Sul Global como o Brasil cobram o cumprimento das promessas financeiras dos países desenvolvidos (o fundo de US$ 100 bilhões anuais) e defendem o princípio das 'responsabilidades comuns, porém diferenciadas'.",
      source: "Acordo de Paris sobre o Clima (2015) e Negociações Diplomáticas na COP."
    },
    prompt: "O impasse diplomático entre as exigências ecológicas das nações ricas e as demandas de desenvolvimento das nações emergentes fundamenta-se no princípio de que:",
    options: [
      { id: "a", text: "os países historicamente responsáveis pela maior parte das emissões acumuladas de gases do efeito estufa na atmosfera devem prover financiamento e tecnologia aos países em desenvolvimento para conciliar conservação e superação da pobreza.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "as nações em desenvolvimento devem pagar indenizações financeiras aos países ricos pelos custos do aquecimento global.", isCorrect: false, distractorRationale: "O dever de financiamento de perdas e danos é exatamente o inverso: cabe aos países historicamente emissores." },
      { id: "c", text: "o aquecimento global atinge exclusivamente os países do Hemisfério Norte, deixando o Brasil imune a secas ou enchentes.", isCorrect: false, distractorRationale: "Os países tropicais e do Sul Global são os mais vulneráveis a eventos climáticos extremos." },
      { id: "d", text: "o desmatamento florestal é a única e exclusiva causa de todas as emissões antrópicas de carbono do planeta Terra.", isCorrect: false, distractorRationale: "A queima de combustíveis fósseis (carvão, petróleo, gás) responde por mais de 70% das emissões globais." },
      { id: "e", text: "a Amazônia deve ser formalmente desmembrada do Brasil e transformada em um protetorado militar estrangeiro.", isCorrect: false, distractorRationale: "O Brasil defende intransigentemente sua soberania constitucional sobre o território amazônico." }
    ],
    detailedExplanation: {
      summary: "A geopolítica climática internacional é pautada pelo princípio das 'Responsabilidades Comuns, Porém Diferenciadas' (consagrado na Rio-92 e no Acordo de Paris): todos os países têm o dever de combater o colapso climático, mas os países historicamente emissores têm obrigação financeira maior.",
      stepByStep: [
        "Divida ecológica histórica: EUA e Europa emitiram a maior parte do carbono acumulado na atmosfera desde a Revolução Industrial.",
        "Potencial do Brasil: o país é uma superpotência agroambiental (biodiversidade, matriz elétrica predominantemente renovável, bacias hídricas e etanol).",
        "Tensão diplomática: protecionismo disfarçado de ambientalismo vs. soberania nacional sobre os recursos naturais."
      ],
      coreConcept: "Geopolítica Ambiental: Responsabilidades Diferenciadas, Soberania e Transição Justa",
      trapWarning: "No ENEM, diferencie as causas das emissões no mundo rico (queima fóssil para energia e indústria) das causas no Brasil (predomínio de desmatamento ilegal e agropecuária)."
    },
    commonTraps: [
      "Achar que todos os países têm a mesma culpa histórica pelo aquecimento global",
      "Ignorar o uso de barreiras ecológicas não tarifárias no comércio internacional de commodities"
    ],
    tags: ["meio-ambiente", "clima", "geopolitica-ambiental", "acordo-de-paris"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-009",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geopolítica e Globalização",
    subtopic: "A OPEP+ e os Choques do Petróleo",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Criada na Conferência de Bagdá em 1960, a OPEP (Organização dos Países Exportadores de Petróleo) alterou o equilíbrio de forças no mercado energético global, que até então era controlado pelo cartel das 'Sete Irmãs' (grandes petroleiras anglo-americanas). Ao coordenar cotas de produção entre seus membros — ampliada recentemente para o formato 'OPEP+', incluindo a Rússia —, a organização atua como um cartel soberano capaz de influenciar diretamente a cotação do barril de petróleo no mercado futuro.",
      source: "YERGIN, Daniel. O Petróleo: Uma História Mundial de Conquistas, Poder e Dinheiro."
    },
    prompt: "A capacidade da OPEP+ de modular o preço internacional do petróleo por meio do controle coordenado da oferta afeta a economia global porque:",
    options: [
      { id: "a", text: "o petróleo é um insumo básico transversal que compõe a matriz de transportes, petroquímica e produção de fertilizantes, impactando os custos de produção e gerando pressões inflacionárias generalizadas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "nenhum navio ou veículo automotor do mundo utiliza derivados de petróleo desde a década de 1970.", isCorrect: false, distractorRationale: "O petróleo continua sendo a fonte primária de mais de 80% do transporte global de cargas." },
      { id: "c", text: "os lucros das vendas de petróleo são compulsoriamente doados a instituições de caridade da ONU.", isCorrect: false, distractorRationale: "Os lucros compõem fundos soberanos de investimento e orçamentos estatais dos países produtores." },
      { id: "d", text: "a cotação do petróleo é fixada por decreto papal no Vaticano sem relação com oferta e demanda.", isCorrect: false, distractorRationale: "A cotação é definida em bolsas internacionais de mercadorias (Brent e WTI) com base na oferta e demanda." },
      { id: "e", text: "o corte de produção da OPEP faz o preço do barril cair para quase zero dólares instantaneamente.", isCorrect: false, distractorRationale: "O corte de produção reduz a oferta, fazendo os preços SUBIREM (lei da oferta e procura)." }
    ],
    detailedExplanation: {
      summary: "A OPEP atua como um cartel de produtores soberanos. Ao reduzir cotas de extração, contrai a oferta de petróleo bruto e eleva a cotação internacional do barril (Brent/WTI).",
      stepByStep: [
        "Choque da oferta: menor extração de petróleo -> barril mais caro no mercado mundial.",
        "Efeito cascata: encarece o óleo diesel marítimo e rodoviário, frete de alimentos, plásticos e gasolina nas bombas.",
        "Repercussão macroeconômica: bancos centrais elevam taxas de juros para conter a inflação provocada pela alta dos combustíveis."
      ],
      coreConcept: "Cartel Internacional, Preço do Petróleo e Inflação Transversal",
      trapWarning: "No ENEM, lembre-se da mecânica econômica básica: cortes na produção = escassez relativa = aumento de preços."
    },
    commonTraps: [
      "Inverter o impacto da redução de cotas (achar que menos oferta gera queda de preço)",
      "Subestimar o peso do petróleo na fabricação de fertilizantes agrícolas e petroquímica"
    ],
    tags: ["petroleo", "opep", "cartel", "geopolitica-economica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-010",
    area: "humanas",
    competence: 5,
    skill: 25,
    topic: "Geopolítica e Globalização",
    subtopic: "Guerras Híbridas, Ciberespaço e Desinformação",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O século XXI testemunhou a expansão dos teatros de conflito para além da terra, mar, ar e espaço sideral: consolidou-se o quinto domínio da guerra, o ciberespaço. No conceito contemporâneo de 'guerra híbrida', atores estatais e não estatais combinam operações militares convencionais com ataques cibernéticos contra infraestruturas críticas (redes elétricas, hospitais, sistemas bancários) e campanhas massivas de desinformação algorítmica voltadas a desestabilizar processos eleitorais e polarizar o tecido social de países adversários.",
      source: "Manual de Doutrina Militar de Defesa Cibernética e Segurança Internacional, 2023."
    },
    prompt: "A militarização do ciberespaço e as táticas de guerra híbrida impõem novos desafios à soberania e à segurança das democracias contemporâneas porque:",
    options: [
      { id: "a", text: "operam na zona cinzenta da atribuição de autoria, atingem diretamente a infraestrutura civil essencial e corroem a confiança nas instituições democráticas sem a necessidade de declaração formal de guerra.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "garantem que qualquer conflito entre nações seja resolvido exclusivamente por partidas virtuais de xadrez computacional.", isCorrect: false, distractorRationale: "Ataques cibernéticos causam danos reais, apagões elétricos e sabotagem industrial concreta." },
      { id: "c", text: "tornam as forças armadas convencionais e os exércitos totalmente desnecessários no mundo moderno.", isCorrect: false, distractorRationale: "A guerra híbrida combina o cibernético com forças militares cinéticas tradicionais." },
      { id: "d", text: "eliminam todas as fronteiras nacionais e extinguem os governos soberanos em favor de uma única inteligência artificial benevolente.", isCorrect: false, distractorRationale: "Os Estados soberanos continuam existindo e travando disputas de poder acirradas." },
      { id: "e", text: "impedem que cidadãos comuns acessem notícias falsas ou redes sociais na internet.", isCorrect: false, distractorRationale: "O ataque híbrido utiliza justamente a viralização de desinformação nas redes como arma de perturbação cívica." }
    ],
    detailedExplanation: {
      summary: "A guerra híbrida e a cibernética redefinem a segurança internacional: a agressão ocorre no espaço invisível dos servidores e algoritmos de redes sociais, dificultando a responsabilização jurídica do agressor ('problema da atribuição').",
      stepByStep: [
        "Ataques a infraestruturas críticas: malwares capazes de paralisar redes de distribuição elétrica ou refinarias (como o pioneiro Stuxnet).",
        "Guerra cognitiva e infodemia: uso de exércitos de bots e perfis falsos para acirrar ódios sociais e deslegitimar votações e urnas.",
        "Desafio legal: Convenções de Genebra foram desenhadas para soldados uniformizados, não para hackers estatais anônimos operando em servidores terceirizados."
      ],
      coreConcept: "Guerra Híbrida: Ciberespaço, Ataques Cibernéticos e Soberania Digital",
      trapWarning: "No ENEM, questões sobre ciberespaço e informação cobram a percepção de que a tecnologia não é neutra, mas um vetor de controle, vigilância e poder militar."
    },
    commonTraps: [
      "Achar que ciberguerra é ficção científica sem impacto na vida real da população civil",
      "Ignorar o papel da desinformação em redes sociais como ferramenta de sabotagem geopolítica"
    ],
    tags: ["ciberguerra", "guerra-hibrida", "desinformacao", "seguranca-internacional"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-011",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geopolítica e Globalização",
    subtopic: "A Ordem Multipolar e a Articulação dos BRICS",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A ampliação do bloco dos BRICS em 2024, incorporando países do Oriente Médio e da África, consolidou uma plataforma representativa de mais de 45% da população global e cerca de 36% do PIB mundial em paridade de poder de compra. Entre as pautas centrais do bloco, destacam-se o fortalecimento do Novo Banco de Desenvolvimento (NDB), o incentivo ao comércio bilateral liquidado em moedas locais e a cobrança por reformas estruturais no Conselho de Segurança da ONU e no FMI.",
      source: "Declaração de Cúpula dos Países do Sul Global, Análise Geopolítica Contemporânea, 2024."
    },
    prompt: "A consolidação e a expansão desse arranjo interestatal expressam uma dinâmica geopolítica orientada a:",
    options: [
      { id: "a", text: "promover o multilateralismo e contrabalançar a hegemonia econômico-financeira ocidental, reivindicando maior poder decisório para os países emergentes.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "estabelecer uma aliança militar formal nos moldes da OTAN com vistas à dissolução imediata do comércio internacional.", isCorrect: false, distractorRationale: "Os BRICS não configuram uma aliança militar de defesa coletiva, mas sim uma cooperação geoeconômica e diplomática." },
      { id: "c", text: "restringir toda a produção fabril e agrícola exclusivamente ao continente africano com isolamento autárquico.", isCorrect: false, distractorRationale: "O bloco promove a integração comercial e financeira global, não a autarquia isolacionista." },
      { id: "d", text: "restabelecer a ordem bipolar da Guerra Fria dividida unicamente entre dois polos ideológicos rígidos.", isCorrect: false, distractorRationale: "O mundo contemporâneo é multipolar, e o bloco reúne países com regimes e interesses geopolíticos heterogêneos." },
      { id: "e", text: "subordinar as decisões fiscais e soberanas de todos os membros a um banco central unificado com moeda única compulsória.", isCorrect: false, distractorRationale: "Não há banco central único nem moeda compulsória entre os BRICS; há incentivo ao uso de moedas locais nas transações bilaterais." }
    ],
    detailedExplanation: {
      summary: "A ampliação dos BRICS simboliza o fortalecimento da multipolaridade e do Sul Global, desafiando a supremacia do dólar no comércio mundial e a sobrerrepresentação do Ocidente nas instituições de Bretton Woods.",
      stepByStep: [
        "Identificação do tema: Relações internacionais, governança global e Nova Ordem Mundial pós-Guerra Fria.",
        "Análise da atuação dos BRICS: Foco na desdolarização parcial das trocas, criação de mecanismos alternativos de crédito (NDB) e pressão por reforma dos organismos multilaterais.",
        "Conclusão: A iniciativa busca diversificar os centros de poder político e financeiro internacional sem recorrer à unificação militar."
      ],
      coreConcept: "Multipolaridade, Sul Global e Reforma das Instituições Internacionais",
      trapWarning: "Não confunda bloco de cooperação diplomático-financeira (BRICS) com pacto militar (OTAN) ou união monetária com banco central único (Zona do Euro)."
    },
    commonTraps: [
      "Achar que os BRICS criaram uma aliança militar vinculante",
      "Confundir incentivo ao uso de moedas locais com criação forçada de moeda física única compulsória"
    ],
    tags: ["brics", "multipolaridade", "sul-global", "geopolitica-financeira"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-012",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Geopolítica e Globalização",
    subtopic: "Transição Energética e a Geopolítica dos Minerais Críticos",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A descarbonização da economia mundial e a eletrificação dos transportes geraram uma corrida desenfreada por minerais críticos indispensáveis à fabricação de baterias, turbinas eólicas e redes de alta voltagem. Países da América do Sul detentores do chamado 'Triângulo do Lítio' (Argentina, Bolívia e Chile), a República Democrática do Congo (que responde por mais de 70% da extração de cobalto) e a China (que monopoliza o processamento e refino de terras raras) passaram a ocupar o epicentro dos novos fluxos geoestratégicos.",
      source: "Agência Internacional de Energia (IEA), Relatório de Minerais Críticos para a Transição Energética, 2023."
    },
    prompt: "O cenário geopolítico descrito demonstra que a transição energética global:",
    options: [
      { id: "a", text: "desloca a dependência estratégica dos combustíveis fósseis para novas cadeias de suprimento mineral, gerando assimetrias e disputas geoeconômicas pelo controle dos insumos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "elimina completamente qualquer tipo de conflito geopolítico e assegura a autossuficiência de todas as nações.", isCorrect: false, distractorRationale: "A transição não acaba com os conflitos; cria novas dependências em torno de minerais finitos e concentrados geograficamente." },
      { id: "c", text: "torna os minerais metálicos e os recursos do subsolo obsoletos na fabricação de equipamentos de alta tecnologia.", isCorrect: false, distractorRationale: "O texto demonstra o exato oposto: a demanda por lítio, cobalto e terras raras cresceu exponencialmente." },
      { id: "d", text: "transfere todo o poder financeiro e as sedes das montadoras globais para os países extrativistas africanos e sul-americanos.", isCorrect: false, distractorRationale: "A cadeia de refino, tecnologia de baterias e controle financeiro segue concentrada em grandes potências industriais." },
      { id: "e", text: "restringe o uso de eletricidade às nações que possuem reservas comprovadas de petróleo cru.", isCorrect: false, distractorRationale: "A energia elétrica pode ser gerada por múltiplas fontes renováveis (solar, eólica, hídrica), desvinculadas do petróleo." }
    ],
    detailedExplanation: {
      summary: "A substituição dos combustíveis fósseis por tecnologias limpas não elimina a geopolítica de recursos; transfere a vulnerabilidade para os minerais críticos (lítio, cobalto, níquel, terras raras), cuja concentração geográfica gera novas tensões globais.",
      stepByStep: [
        "Compreensão do cenário: Eletrificação de veículos e equipamentos verdes requer minerais específicos.",
        "Geografia da extração vs. refino: Extração concentrada em poucos países (América do Sul, África) e refino químico concentrado na China.",
        "Conclusão: O controle das cadeias produtivas desses insumos críticos tornou-se matéria de segurança nacional e política industrial das potências."
      ],
      coreConcept: "Geopolítica da Transição Energética: Minerais Críticos e Segurança de Suprimentos",
      trapWarning: "No ENEM, cuidado para não assumir que energia limpa significa ausência de impactos socioambientais ou de disputas por matérias-primas."
    },
    commonTraps: [
      "Acreditar que fontes limpas extinguem as disputas por matérias-primas minerais",
      "Supor que os países exportadores de minério bruto dominam automaticamente a tecnologia de baterias acabadas"
    ],
    tags: ["transicao-energetica", "litio", "minerais-criticos", "geopolitica-ambiental"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-013",
    area: "humanas",
    competence: 2,
    skill: 9,
    topic: "Geopolítica e Globalização",
    subtopic: "A Iniciativa Cinturão e Rota (Nova Rota da Seda) e o Poder Chinês",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Lançada em 2013, a Iniciativa Cinturão e Rota (Belt and Road Initiative - BRI) transformou-se no maior programa de infraestrutura global da história contemporânea. Financiando a construção de corredores logísticos multimodais, ferrovias de carga, portos de águas profundas, gasodutos e usinas energéticas na Ásia Central, África, Europa e América Latina, Pequim busca garantir canais seguros para suas exportações de bens manufaturados e o abastecimento contínuo de commodities vitais.",
      source: "Estudos Geopolíticos Globais, Relações Internacionais, 2024."
    },
    prompt: "Sob a perspectiva da geopolítica contemporânea, a implementação dessa megainfraestrutura representa:",
    options: [
      { id: "a", text: "um instrumento de projeção geoeconômica e de influência diplomática, reduzindo a vulnerabilidade a bloqueios marítimos e reconfigurando os fluxos de comércio a partir de Pequim.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "uma iniciativa altruísta sem qualquer interesse comercial ou geoestratégico por parte do governo financiador.", isCorrect: false, distractorRationale: "Megaprojetos de infraestrutura financiam rotas comerciais e asseguram influência geopolítica direta sobre os países devedores." },
      { id: "c", text: "uma estratégia para abolir todo o uso de combustíveis fósseis e proibir o transporte marítimo de mercadorias no planeta.", isCorrect: false, distractorRationale: "O projeto inclui grandes portos marítimos e gasodutos de combustíveis fósseis." },
      { id: "d", text: "o isolamento completo da economia chinesa em relação aos mercados consumidores mundiais.", isCorrect: false, distractorRationale: "O projeto é o oposto do isolamento: conecta a China a mais de uma centena de países parceiros comerciais." },
      { id: "e", text: "um mecanismo estritamente militar destinado a invadir militarmente e anexar os países da Europa Ocidental.", isCorrect: false, distractorRationale: "A BRI atua prioritariamente no plano econômico e diplomático (soft power, empréstimos e obras de engenharia civil)." }
    ],
    detailedExplanation: {
      summary: "A Iniciativa Cinturão e Rota combina investimentos maciços em logística com objetivos geoestratégicos: integrar a Eurásia e o Sul Global aos mercados chineses, diversificar canais de abastecimento e consolidar a China como polo central da economia global.",
      stepByStep: [
        "Dimensão logística: Obras de infraestrutura de transporte (portos comerciais e malhas ferroviárias continentais de carga).",
        "Dimensão geopolítica: Superar o 'Dilema de Malaca' (dependência de estreitos marítimos patrulhados por forças navais adversárias) e ampliar alianças no Sul Global.",
        "Conclusão: Trata-se de geoeconomia aplicada à expansão do poder e liderança internacional."
      ],
      coreConcept: "Iniciativa Cinturão e Rota (BRI), Geoeconomia e Projeção de Poder Global",
      trapWarning: "Atenção: a BRI envolve tanto uma rota terrestre (cinturão ferroviário eurasiático) quanto uma rota marítima (portos comerciais no Índico e Mediterrâneo)."
    },
    commonTraps: [
      "Achar que o projeto se limita a estradas de rodagem sem envolver portos e telecomunicações",
      "Ignorar os interesses estratégicos de segurança energética e escoamento fabril da China"
    ],
    tags: ["china", "bri", "infraestrutura", "geoeconomia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-014",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Geopolítica e Globalização",
    subtopic: "A Questão Palestina e os Impasses Territoriais no Oriente Médio",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Desde a Resolução 181 da Assembleia Geral da ONU em 1947, que propôs a partilha da Palestina sob mandato britânico em dois Estados independentes (um judeu e um árabe) com regime internacional para Jerusalém, o território é palco de sucessivas guerras e ocupações militares. Os confrontos de 1948 e 1967 (Guerra dos Seis Dias), a fragmentação territorial na Cisjordânia resultante da expansão contínua de assentamentos e o bloqueio terrestre, aéreo e marítimo imposto à Faixa de Gaza constituem barreiras históricas à viabilização de um Estado palestino soberano e contíguo.",
      source: "Dossiê Conflitos Históricos no Oriente Médio, Análise Geopolítica Territorial, 2024."
    },
    prompt: "Entre os principais obstáculos de ordem territorial e geopolítica que dificultam a concretização da Solução de Dois Estados na região, destaca-se:",
    options: [
      { id: "a", text: "a descontinuidade territorial dos territórios palestinos decorrente da malha de assentamentos e postos de controle na Cisjordânia, somada à disputa pelo estatuto de Jerusalém.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a inexistência completa de populações civis residindo nas áreas urbanas e rurais da Cisjordânia.", isCorrect: false, distractorRationale: "A região é densamente habitada por milhões de palestinos e centenas de milhares de colonos israelenses." },
      { id: "c", text: "a recusa de todas as nações do planeta em reconhecer a existência de conflitos ou disputas fronteiriças na área.", isCorrect: false, distractorRationale: "O conflito é um dos mais debatidos e documentados pela diplomacia internacional e pela ONU." },
      { id: "d", text: "a total uniformidade cultural, linguística e religiosa entre todos os habitantes dos dois lados da contenda.", isCorrect: false, distractorRationale: "A diversidade e as divergências étnico-religiosas e nacionais são marcas centrais das tensões históricas na região." },
      { id: "e", text: "o esgotamento absoluto de todos os recursos hídricos subterrâneos e a desertificação total irreversível do solo fértil.", isCorrect: false, distractorRationale: "A disputa pela água (Aquífero da Montanha e bacia do Rio Jordão) é fator de conflito por sua importância vital, não por sua inexistência." }
    ],
    detailedExplanation: {
      summary: "A criação de um Estado palestino viável esbarra na fragmentação física do território (Cisjordânia retalhada por assentamentos, rodovias restritas e muros de separação), no enclave isolado de Gaza, no controle de recursos hídricos e na indefinição sobre o estatuto jurídico de Jerusalém.",
      stepByStep: [
        "Raízes históricas: Partilha da ONU (1947), Guerra de 1948 (criação de Israel e Nakba palestina), Guerra de 1967 (ocupação da Cisjordânia, Faixa de Gaza, Colinas de Golã e Jerusalém Oriental).",
        "Geografia do conflito atual: Assentamentos israelenses na Cisjordânia que inviabilizam a contiguidade territorial de um futuro Estado palestino.",
        "Pontos nevrálgicos: Status de Jerusalém (reivindicada por ambos como capital), retorno de refugiados e controle de fronteiras e aquíferos."
      ],
      coreConcept: "A Questão Palestina: Fragmentação Espacial, Ocupação e a Solução de Dois Estados",
      trapWarning: "No ENEM, questões sobre o Oriente Médio cobram a análise territorial crítica (mapa, fronteiras, colônias e água) e não apenas estereótipos religiosos simplistas."
    },
    commonTraps: [
      "Achar que o conflito é puramente religioso milenar, ignorando a disputa material moderna por terra, fronteiras e soberania",
      "Desconsiderar a descontinuidade espacial entre a Cisjordânia e a Faixa de Gaza"
    ],
    tags: ["oriente-medio", "palestina", "israel", "territorio", "soberania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-015",
    area: "humanas",
    competence: 5,
    skill: 22,
    topic: "Geopolítica e Globalização",
    subtopic: "Segurança Alimentar Global e o Papel dos Celeiros Agrícolas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A eclosão do conflito armado no Leste Europeu em 2022 colocou em evidência a fragilidade da cadeia global de suprimentos agrícolas. A região do Mar Negro, frequentemente denominada de 'celeiro do mundo' devido à fertilidade excepcional do solo de 'tchernozion' (terra negra), concentrava cerca de um terço de todas as exportações mundiais de trigo e cevada, além de insumos fertilizantes nitrogenados e potássicos. A interrupção de safras e os bloqueios navais provocaram picos inflacionários imediatos e risco de desabastecimento em nações do Oriente Médio e do Chifre da África.",
      source: "Organização das Nações Unidas para a Alimentação e a Agricultura (FAO), Relatório de Crise e Mercados de Grãos, 2023."
    },
    prompt: "A vulnerabilidade alimentar observada em escala internacional evidencia que a globalização agroalimentar:",
    options: [
      { id: "a", text: "produziu uma elevada dependência de cadeias de suprimento concentradas geograficamente, tornando países importadores vulneráveis a choques geopolíticos e climáticos em regiões produtoras-chave.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "garantiu que todos os países do mundo se tornassem autossuficientes na produção de grãos básicos e fertilizantes.", isCorrect: false, distractorRationale: "O texto demonstra o oposto: nações inteiras no Oriente Médio e África dependem criticamente de importações do Mar Negro." },
      { id: "c", text: "eliminou as leis de mercado e estabeleceu a distribuição gratuita e irrestrita de alimentos por navios humanitários.", isCorrect: false, distractorRationale: "Os preços dos alimentos são cotados em bolsas de commodities mundiais e sofreram disparada inflacionária." },
      { id: "d", text: "tornou o cultivo de grãos irrelevante diante da produção massificada de alimentos artificiais sintetizados em laboratórios.", isCorrect: false, distractorRationale: "O trigo e a cevada continuam sendo a base calórica elementar de bilhões de seres humanos." },
      { id: "e", text: "desvinculou a agricultura moderna da utilização de qualquer insumo químico ou fertilizante mineral.", isCorrect: false, distractorRationale: "A agricultura em larga escala depende visceralmente de fertilizantes nitrogenados, fosfatados e potássicos." }
    ],
    detailedExplanation: {
      summary: "A globalização agrícola gerou hiperespecialização produtiva em certas regiões do planeta. Quando guerras ou embargos afetam esses polos exportadores, o efeito cascata atinge a segurança alimentar de países vulneráveis e eleva custos de produção globalmente.",
      stepByStep: [
        "Compreensão do papel do solo tchernozion: Região de estepe ucraniana e russa de altíssima produtividade cerealífera natural.",
        "Dependência de importações: Países como Egito, Líbano e Somália importavam mais de 70% de seu trigo dessa bacia geográfica.",
        "Efeito no agronegócio global: Aumento nos custos de fertilizantes (dos quais o Brasil também é altamente dependente da Rússia e Belarus).",
        "Conclusão: A segurança alimentar é indissociável da estabilidade geopolítica das rotas mercantis e das regiões produtoras."
      ],
      coreConcept: "Segurança Alimentar Global, Cadeias de Grãos e Dependência de Fertilizantes",
      trapWarning: "Lembre-se de que o Brasil, apesar de ser potência agroexportadora de grãos e carne, é altamente dependente da importação externa de adubos e fertilizantes."
    },
    commonTraps: [
      "Supor que os países mais ricos são os que mais sofrem fome em crises de desabastecimento de grãos",
      "Ignorar a importância dos fertilizantes químicos na determinação do preço final dos alimentos"
    ],
    tags: ["seguranca-alimentar", "commodities", "fertilizantes", "geopolitica-agricola"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-016",
    area: "humanas",
    competence: 4,
    skill: 19,
    topic: "Geopolítica e Globalização",
    subtopic: "Geopolítica da Água e Conflitos em Bacias Hidrográficas Transfronteiriças",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A construção da Grande Represa do Renascimento Etíope (GERD) no Nilo Azul, iniciada em 2011 pela Etiópia, tornou-se foco de intensas controvérsias diplomáticas com o Sudão e, especialmente, com o Egito. Enquanto Adis Abeba reivindica a represa como obra indispensável para eletrificar o país e impulsionar o desenvolvimento industrial, o Cairo argumenta que a retenção do fluxo das águas ameaça a vazão hídrica histórica necessária para irrigar o fértil vale do Nilo, do qual dependem mais de 100 milhões de egípcios.",
      source: "Relatório de Recursos Hídricos e Tensões Geopolíticas no Nordeste Africano, 2023."
    },
    prompt: "O impasse em torno do aproveitamento das águas do Rio Nilo ilustra que:",
    options: [
      { id: "a", text: "rios transfronteiriços demandam governança compartilhada, pois intervenções de engenharia realizadas a montante impactam a segurança hídrica e alimentar dos países situados a jusante.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "as bacias hidrográficas deixaram de ter valor econômico devido à dessalinização barata e instantânea de toda a água salgada do planeta.", isCorrect: false, distractorRationale: "A água doce fluvial continua insubstituível para irrigação agrícola em escala massiva." },
      { id: "c", text: "os países localizados na foz de um rio têm autoridade soberana inquestionável para proibir qualquer uso da água nas nascentes situadas em outros territórios.", isCorrect: false, distractorRationale: "O direito internacional não outorga poder unilateral irrestrito ao país da foz sobre as nascentes em territórios soberanos estrangeiros." },
      { id: "d", text: "a geração de energia hidrelétrica em países africanos não interfere no fluxo volumétrico nem na sazonalidade das cheias fluviais.", isCorrect: false, distractorRationale: "O enchimento do reservatório altera a vazão a jusante e pode reter volumes críticos durante anos secos." },
      { id: "e", text: "o regime de vazão dos rios internacionais é imutável e independente de qualquer intervenção antrópica de barragens.", isCorrect: false, distractorRationale: "Grandes barragens modificam profundamente o regime hidrológico, transporte de sedimentos e vazão dos rios." }
    ],
    detailedExplanation: {
      summary: "A hidrogeopolítica analisa como recursos hídricos compartilhados geram disputas de poder. O controle da cabeceira (montante) confere vantagem estratégica sobre os países ribeirinhos inferiores (jusante), exigindo tratados de gestão equitativa para evitar conflitos armados.",
      stepByStep: [
        "Conceitos hidrológicos fundamentais: Montante (onde o rio nasce / altitude superior) vs. Jusante (direção da foz / altitude inferior).",
        "Geografia do Nilo: O Nilo Azul nasce na Etiópia e fornece cerca de 85% do volume d'água total do Rio Nilo principal.",
        "Egito a jusante: Depende quase que totalmente das águas do Nilo para agricultura e consumo urbano.",
        "Conclusão: Obras unilaterais em rios internacionais geram tensões severas sobre soberania e subsistência coletiva."
      ],
      coreConcept: "Hidrogeopolítica: Gestão de Bacias Transfronteiriças, Montante e Jusante",
      trapWarning: "Lembre-se da distinção geográfica entre 'montante' (rio acima) e 'jusante' (rio abaixo), termo técnico frequentemente cobrado em questões ambientais e geopolíticas do ENEM."
    },
    commonTraps: [
      "Inverter o sentido do fluxo fluvial (confundir montante com jusante)",
      "Supor que rios internacionais pertencem exclusivamente a uma única nação por onde passam"
    ],
    tags: ["hidrogeopolitica", "recursos-hidricos", "africa", "rio-nilo", "conflitos-ambientais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-017",
    area: "humanas",
    competence: 5,
    skill: 25,
    topic: "Geopolítica e Globalização",
    subtopic: "A Disputa Tecnológica Global: Semicondutores e Soberania Digital",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No século XXI, os microchips e semicondutores de litografia avançada tornaram-se o equivalente estratégico do petróleo no século XX. A ilha de Taiwan responde por mais de 60% da fabricação de todos os semicondutores do planeta e por mais de 90% dos chips mais miniaturizados e avançados (abaixo de 5 nanômetros), utilizados em supercomputadores, sistemas de inteligência artificial e vetores de defesa militar. Essa extrema concentração fabril levou potências como os Estados Unidos e a União Europeia a subsidiarem maciçamente fábricas domésticas e a imporem restrições à exportação de maquinário tecnológico para a China.",
      source: "Relatório de Segurança da Informação e Cadeia de Semicondutores, 2024."
    },
    prompt: "Essa disputa tecnológica e a tentativa de 'nacionalização' das cadeias de manufatura de microchips revelam que:",
    options: [
      { id: "a", text: "o controle sobre a fabricação de semicondutores é percebido como componente essencial da segurança nacional, da liderança econômica e do poder bélico na era da informação.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "os componentes eletrônicos perderam a importância em prol da mecanização a vapor e do carvão mineral.", isCorrect: false, distractorRationale: "O texto enfatiza que os chips são o recurso estratégico central do século XXI." },
      { id: "c", text: "as nações industrializadas abriram mão de seus direitos de propriedade intelectual em prol de uma tecnologia 100% aberta e sem patentes.", isCorrect: false, distractorRationale: "Há disputa ferrenha por patentes de litografia, códigos-fonte e propriedades intelectuais entre as superpotências." },
      { id: "d", text: "a produção de computadores modernos independe inteiramente de matérias-primas e de plantas industriais físicas.", isCorrect: false, distractorRationale: "A produção de semicondutores exige plantas físicas multibilionárias de silício, salas limpas de altíssima pureza e água ultrapura." },
      { id: "e", text: "qualquer país em desenvolvimento pode produzir chips de 3 nanômetros em oficinas manuais sem investimentos de capital.", isCorrect: false, distractorRationale: "Produzir chips de litografia extrema exige dezenas de bilhões de dólares e maquinário de precisão atômica monopolizado por pouquíssimas empresas globais." }
    ],
    detailedExplanation: {
      summary: "A 'guerra dos chips' evidencia que a hegemonia no século XXI repousa sobre o domínio da computação de ponta e dos semicondutores. Quem domina os microprocessadores controla o avanço da Inteligência Artificial, sistemas de guiagem de mísseis, criptografia e finanças mundiais.",
      stepByStep: [
        "O papel de Taiwan: A TSMC (Taiwan Semiconductor Manufacturing Company) opera como nó vital da cadeia produtiva global.",
        "Vulnerabilidade geopolítica: Uma eventual crise no Estreito de Taiwan paralisaria montadoras de veículos, fábricas de computadores e servidores no mundo inteiro.",
        "Respostas estatais: O 'CHIPS Act' nos EUA e o 'European Chips Act' representam o retorno da política industrial estatal e da busca por autonomia estratégica.",
        "Conclusão: A tecnologia de ponta é tratada como pilar indiscutível de segurança e soberania nacional."
      ],
      coreConcept: "Geopolítica dos Semicondutores: Hardware Estratégico e Soberania Digital",
      trapWarning: "Observe que, contrariando o dogma neoliberal dos anos 1990 de que o mercado global sempre resolveria tudo, as grandes potências voltaram a gastar bilhões em subsídios estatais diretos para garantir produção industrial estratégica dentro de seus limites."
    },
    commonTraps: [
      "Achar que inovação tecnológica opera sem base industrial material pesada",
      "Subestimar o papel geopolítico de Taiwan no equilíbrio de poder entre EUA e China"
    ],
    tags: ["semicondutores", "tecnologia", "taiwan", "soberania-digital", "geopolitica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-018",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geopolítica e Globalização",
    subtopic: "A Contradição da Globalização: Fluxos de Capitais vs. Muros para Pessoas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A contemporaneidade é marcada por uma contradição flagrante do processo de globalização: enquanto as transações financeiras, os dados digitais e os produtos industrializados circulam pelos continentes em velocidades vertiginosas e com tarifas alfandegárias historicamente baixas, multiplicam-se barreiras físicas, cercas eletrificadas, patrulhas de fronteira e leis migratórias cada vez mais restritivas destinadas a deter a circulação de populações vulneráveis e requerentes de asilo que fogem da miséria e de conflitos armados.",
      source: "Estudos de Sociologia Urbana e Fronteiras Globais, 2023."
    },
    prompt: "Essa discrepância entre a desregulamentação para o capital e o recrudescimento das barreiras para as pessoas explicita:",
    options: [
      { id: "a", text: "o caráter seletivo e assimétrico da globalização, que privilegia a livre circulação de mercadorias e finanças enquanto criminaliza ou segrega os fluxos migratórios do Sul Global.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a eficácia total dos acordos multilaterais em acolher e dar cidadania plena a todos os migrantes do mundo sem qualquer burocracia.", isCorrect: false, distractorRationale: "O texto enfatiza a multiplicação de muros, restrições e cerceamento de direitos contra migrantes." },
      { id: "c", text: "o fim das fronteiras territoriais e o estabelecimento de uma cidadania universal única regida pela ONU.", isCorrect: false, distractorRationale: "As fronteiras nacionais foram, na verdade, reforçadas e militarizadas para a circulação de trabalhadores pobres." },
      { id: "d", text: "a ausência de qualquer diferença socioeconômica entre os países do Norte e do Sul Global.", isCorrect: false, distractorRationale: "As desigualdades abissais entre o Norte e o Sul são justamente o motor da pressão migratória." },
      { id: "e", text: "a extinção do sistema financeiro internacional e o isolamento autárquico de todos os mercados consumidores.", isCorrect: false, distractorRationale: "O capital financeiro transnacional circula com velocidade recorde e liberdade nas bolsas mundiais." }
    ],
    detailedExplanation: {
      summary: "Zygmunt Bauman e outros sociólogos descrevem a globalização como profundamente estratificada: a elite e o capital financeiro desfrutam de hiperconectividade e mobilidade sem barreiras, enquanto os despossuídos e refugiados são contidos por muros, detenções e xenofobia institucional.",
      stepByStep: [
        "Identificação do contraste: Livre trânsito de capitais e patentes versus contenção física e securitização das fronteiras humanas.",
        "Exemplos práticos: Muro entre México e EUA, agência Frontex no Mediterrâneo, campos de retenção na Líbia e Turquia.",
        "Conclusão: A globalização não é universal nem igualitária; sua abertura é moldada pelos interesses do capital transnacional."
      ],
      coreConcept: "A Seletividade da Globalização: Mobilidade do Capital e Securitização das Fronteiras",
      trapWarning: "No ENEM, essa contradição é cobrada com frequência em conexão com autores contemporâneos (como Milton Santos ao analisar a 'globalização como perversidade')."
    },
    commonTraps: [
      "Acreditar que a globalização eliminou as fronteiras políticas para todas as pessoas indistintamente",
      "Ignorar a dimensão socioeconômica que diferencia o expatriado corporativo de elite do imigrante clandestino vulnerável"
    ],
    tags: ["migracao", "fronteiras", "globalizacao-seletiva", "direitos-humanos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-019",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Geopolítica e Globalização",
    subtopic: "O Descongelamento do Ártico e as Novas Rotas de Carga Marítima",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O recuo acelerado da calota de gelo marinho no Oceano Glacial Ártico, intensificado pelas mudanças climáticas globais, tem transformado uma região antes inacessível em um novo tabuleiro geoeconômico. A abertura da Rota Marítima do Norte (ao longo da costa da Sibéria) e da Passagem Noroeste (no norte do Canadá) permite encurtar em até 40% a distância marítima de transporte de contêineres entre os portos da Ásia Oriental e da Europa Ocidental, em comparação com os trajetos tradicionais pelo Canal de Suez e Estreito de Malaca, além de viabilizar o acesso a reservas intocadas de hidrocarbonetos na plataforma polar.",
      source: "Conselho do Ártico, Boletim de Estudos Marítimos e Climáticos Polares, 2024."
    },
    prompt: "A transformação climática do Ártico acarreta impactos geopolíticos globais ao:",
    options: [
      { id: "a", text: "despertar disputas de soberania sobre plataformas continentais e criar novos corredores logísticos para a circulação comercial de navios cargueiros em altas latitudes.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "garantir que nenhum país litorâneo tenha interesse em explorar as reservas do leito submarino ártico.", isCorrect: false, distractorRationale: "Países como Rússia, Noruega, EUA e Canadá disputam avidamente os direitos de perfuração submarina." },
      { id: "c", text: "provocar o fechamento definitivo de todos os canais de navegação comercial no restante do planeta.", isCorrect: false, distractorRationale: "Os canais de Suez e Panamá continuam operando e transportando imensos volumes de carga global." },
      { id: "d", text: "congelar permanentemente os portos europeus e asiáticos durante todos os meses do ano.", isCorrect: false, distractorRationale: "O fenômeno descrito é de aquecimento global e descongelamento marinho polar, não de glaciação extrema." },
      { id: "e", text: "extinguir os tratados de direito internacional e as convenções da ONU sobre os mares.", isCorrect: false, distractorRationale: "A Convenção da ONU sobre o Direito do Mar (UNCLOS) é justamente a base jurídica onde as nações reivindicam a extensão de suas plataformas." }
    ],
    detailedExplanation: {
      summary: "O derretimento do gelo ártico exemplifica como o aquecimento global tem consequências geopolíticas diretas: a criação de novas hidrovias de transporte marítimo de mercadorias e a corrida pela exploração de petróleo e gás submarino em águas antes inavegáveis.",
      stepByStep: [
        "Vantagem logística da Rota do Norte: Economia de tempo, combustível fóssil de propulsão náutica e tarifas de passagem em canais artificiais (Suez).",
        "Disputas de jurisdição: Reivindicações territoriais sobre a Plataforma Continental Estendida junto à Comissão de Limites da ONU.",
        "Militarização polar: Reativação de bases militares costeiras pelas nações do Conselho do Ártico.",
        "Conclusão: O derretimento ambiental abre um novo fronte de expansão mercantil e disputa hegemônica."
      ],
      coreConcept: "Geopolítica do Ártico: Rota Marítima do Norte, Descongelamento e Recursos Submarinos",
      trapWarning: "Cuidado: a Antártica (Polo Sul) é regida pelo Tratado da Antártica (área dedicada exclusivamente à paz e pesquisa científica internacional), enquanto o Ártico (Polo Norte) é um oceano cercado por Estados soberanos que disputam suas zonas econômicas exclusivas."
    },
    commonTraps: [
      "Confundir o regime geopolítico do Ártico (disputado comercialmente) com o da Antártica (protegido por tratado científico internacional)",
      "Achar que o degelo marinho polar traz apenas impactos biológicos locais, ignorando os efeitos no comércio marítimo mundial de carga"
    ],
    tags: ["artico", "mudancas-climaticas", "rotas-maritimas", "geopolitica-dos-recursos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-020",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Geopolítica e Globalização",
    subtopic: "Desindustrialização, 'Rust Belt' e a Reação Antiglobalista",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao longo das últimas quatro décadas, o fenômeno da deslocalização industrial (offshoring) transferiu milhões de postos de trabalho da manufatura tradicional dos Estados Unidos e da Europa Ocidental em direção ao Leste e Sudeste Asiático, atraídos por custos salariais reduzidos e subsídios fiscais. O esvaziamento fabril de regiões como o 'Cinturão da Ferrugem' (Rust Belt) norte-americano gerou bolsões de depressão econômica, endividamento das famílias e estagnação da classe trabalhadora local. Esse cenário alimentou um forte ressentimento social, que se converteu em bandeira política de movimentos nacionalistas partidários de barreiras protecionistas e discursos antiglobalistas.",
      source: "Sociologia Econômica e Geografia do Trabalho Global, 2024."
    },
    prompt: "A crise social do 'Rust Belt' e o ressurgimento do protecionismo comercial nas economias centrais evidenciam:",
    options: [
      { id: "a", text: "que a globalização produziu ganhos desiguais no interior dos próprios países desenvolvidos, gerando contingentes de trabalhadores desfavorecidos que passaram a apoiar políticas de resgate nacionalista e retaliação alfandegária.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o sucesso irrestrito da divisão internacional do trabalho em enriquecer igualmente todos os operários do planeta Terra.", isCorrect: false, distractorRationale: "O texto demonstra claramente que a classe operária do Rust Belt empobreceu e perdeu empregos para a deslocalização asiática." },
      { id: "c", text: "a superação definitiva de qualquer sentimento nacionalista ou de barreiras alfandegárias no mundo moderno.", isCorrect: false, distractorRationale: "O texto aponta justamente a volta com força do nacionalismo, das tarifas alfandegárias e das tensões protecionistas." },
      { id: "d", text: "que as grandes corporações multinacionais preferem pagar salários mais altos em vez de reduzir seus custos de fabricação.", isCorrect: false, distractorRationale: "A deslocalização fabril foi motivada precisamente pela busca desenfreada de redução de custos de mão de obra e encargos." },
      { id: "e", text: "a completa extinção de indústrias pesadas e fábricas em qualquer parte do território asiático.", isCorrect: false, distractorRationale: "A Ásia tornou-se a grande fábrica manufatureira do mundo moderno, absorvendo os empregos transferidos do Ocidente." }
    ],
    detailedExplanation: {
      summary: "A globalização econômica não divide o mundo apenas entre 'países ricos' e 'países pobres', mas também cria vencedores e perdedores internamente nas nações ricas. O desmonte do parque produtor tradicional ocidental gerou descontentamento popular capitalizado por projetos políticos antiglobalização e pró-tarifas de importação.",
      stepByStep: [
        "Causas da desindustrialização ocidental: Empresas transnacionais transferiram linhas de montagem para a Ásia em busca de maior lucratividade.",
        "Consequências no Rust Belt: Cidades decadentes (como Detroit), perda de benefícios trabalhistas e desemprego estrutural de trabalhadores industriais.",
        "Desdobramentos políticos: Crescimento do ceticismo em relação a tratados de livre comércio, aumento da polarização eleitoral e ascensão de tarifas protecionistas.",
        "Conclusão: A assimetria da globalização desestabilizou o pacto social do pós-Segunda Guerra no coração dos países centrais."
      ],
      coreConcept: "Desindustrialização, Deslocalização Fabril (Offshoring) e Tensões Sociais da Globalização",
      trapWarning: "No ENEM, observe como a geografia econômica se entrelaça com a sociologia política para explicar fenômenos eleitorais contemporâneos (como o Brexit e a votação em tarifas industriais nos EUA)."
    },
    commonTraps: [
      "Achar que todos os cidadãos dos países ricos foram beneficiados uniformemente pela globalização",
      "Ignorar as raízes econômico-materiais do ressentimento político e do nacionalismo contemporâneo"
    ],
    tags: ["desindustrializacao", "rust-belt", "protecionismo", "offshoring", "geopolitica-do-trabalho"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-021",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Geopolítica e Globalização",
    subtopic: "A Guerra dos Semicondutores e a Hegemonia Tecnológica Global",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os semicondutores e microchips de alta precisão (com litografia inferior a 5 nanômetros) tornaram-se o recurso estratégico mais disputado do século XXI, indispensáveis para inteligência artificial, supercomputadores, mísseis guiados e telecomunicações 5G/6G. Mais de 60% da fabricação global desses chips avançados e cerca de 90% dos mais sofisticados concentram-se na ilha de Taiwan, sobretudo por meio da gigante corporativa TSMC, gerando o chamado 'Escudo de Silício'.",
      source: "Relações Internacionais e Soberania Digital Contemporânea"
    },
    prompt: "A centralidade geopolítica de Taiwan na produção de semicondutores e as disputas entre Estados Unidos e China sobre a ilha revelam que:",
    options: [
      { id: "a", text: "o controle sobre as cadeias globais de suprimento de tecnologias digitais de ponta tornou-se um elemento central de segurança nacional e supremacia militar entre superpotências.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a tecnologia de microprocessadores tornou-se obsoleta frente ao retorno do carvão mineral como base computacional.", isCorrect: false, distractorRationale: "Microchips são o coração da economia digital de ponta e semicondutores são indispensáveis para qualquer automação contemporânea." },
      { id: "c", text: "qualquer país periférico pode fabricar chips de 2 nanômetros utilizando maquinário de ferro fundido simples.", isCorrect: false, distractorRationale: "A produção de chips de ponta exige equipamentos de litografia ultravioleta extrema (EUV) monopolizados por pouquíssimas empresas globais." },
      { id: "d", text: "os Estados Unidos abandonaram qualquer investimento em fábricas de semicondutores em seu próprio território.", isCorrect: false, distractorRationale: "Os EUA aprovaram o Chips and Science Act investindo dezenas de bilhões de dólares para subsidiar fábricas locais de semicondutores." },
      { id: "e", text: "a China desfez completamente sua reivindicação territorial histórica sobre a reunificação da ilha de Taiwan.", isCorrect: false, distractorRationale: "A China mantém formalmente o princípio de 'Uma Só China' e considera a reunificação com Taiwan uma prioridade estatal inegociável." }
    ],
    detailedExplanation: {
      summary: "A 'Guerra dos Chips' demonstra que o poder hegemônico no século XXI não depende apenas de arsenais bélicos ou jazidas de petróleo, mas do domínio monopolista das cadeias de valor de semicondutores. A concentração de fábricas em Taiwan transforma o Estreito de Taiwan em um dos pontos de estrangulamento (chokepoints) geopolíticos mais vulneráveis do planeta.",
      stepByStep: [
        "1. Dependência crítica: Semicondutores são os 'tijolos' de toda a indústria moderna (de smartphones a caças supersônicos).",
        "2. Posição de Taiwan: A TSMC (Taiwan Semiconductor Manufacturing Company) detém o domínio quase monopolista dos chips de litografia mais avançada.",
        "3. Conceito de 'Escudo de Silício': A dependência econômica mundial dos chips de Taiwan cria forte desincentivo à interrupção de sua cadeia produtiva por invasões militares.",
        "4. Resposta das potências: Sanções americanas que barram exportação de máquinas de litografia avançada para a China e subsídios para transferir fábricas de chips para território ocidental (reshoring)."
      ],
      coreConcept: "Geopolítica Tecnológica: Semicondutores, Cadeias de Suprimento e Tensão no Estreito de Taiwan",
      trapWarning: "No ENEM, compreenda que as disputas geopolíticas contemporâneas migraram fortemente do controle de terras agrícolas e petróleo para a supremacia sobre fluxos de dados, inteligência artificial e semicondutores."
    },
    commonTraps: [
      "Achar que Taiwan é importante para as superpotências apenas por razões territoriais agrícolas",
      "Ignorar o papel crucial da empresa TSMC na infraestrutura de informática global"
    ],
    tags: ["semicondutores", "taiwan", "guerra-comercial", "china-eua", "tecnologia-de-ponta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-022",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Geopolítica e Globalização",
    subtopic: "Expansão dos BRICS+ e Tendências de Desdolarização",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na Cúpula de Joanesburgo (2023) e encontros subsequentes, o bloco dos BRICS formalizou uma histórica expansão para o formato 'BRICS+', admitindo novos membros como Arábia Saudita, Emirados Árabes Unidos, Irã, Egito e Etiópia. Em paralelo à ampliação geopolítica, o bloco acelerou debates sobre o incentivo ao comércio mútuo liquidado em moedas locais e a criação de canais de compensação financeira alternativos ao sistema de pagamentos SWIFT, dominado por capitais ocidentais.",
      source: "Economia Política Internacional e Geofinanças Globais"
    },
    prompt: "A ampliação do bloco dos BRICS e o debate sobre a redução da dependência do dólar norte-americano nas trocas comerciais bilaterais refletem:",
    options: [
      { id: "a", text: "o fortalecimento de uma ordem global multipolar que busca reduzir a vulnerabilidade dos países do Sul Global frente a sanções econômicas extraterritoriais e à hegemonia monetária do Ocidente.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a dissolução definitiva do Fundo Monetário Internacional e a proibição imediata do uso de moedas fiduciárias no comércio marítimo.", isCorrect: false, distractorRationale: "O FMI e o Banco Mundial continuam existindo e o dólar ainda é a principal moeda de reserva, ocorrendo diversificação gradual e não abolição repentina." },
      { id: "c", text: "a unificação monetária de todos os países membros em uma moeda de papel única e obrigatória com banco central sediado na Antártica.", isCorrect: false, distractorRationale: "Não há proposta de moeda única comum como o Euro; a estratégia é uso de moedas locais bilaterais (real, yuan, rúpia, dirham)." },
      { id: "d", text: "o alinhamento diplomático e militar irrestrito de todos os países do Sul Global com as diretrizes do Conselho de Segurança da OTAN.", isCorrect: false, distractorRationale: "Os BRICS operam como contraponto autônomo à hegemonia ocidental representada pelo G7 e pela OTAN." },
      { id: "e", text: "a extinção de qualquer exportação de petróleo e gás fóssil proveniente do Golfo Pérsico.", isCorrect: false, distractorRationale: "A entrada de Arábia Saudita e Emirados Árabes justamente fortaleceu o peso do bloco na geopolítica energética dos hidrocarbonetos." }
    ],
    detailedExplanation: {
      summary: "O dólar norte-americano é historicamente utilizado como a 'moeda de reserva mundial' e instrumento de política externa (sanções, congelamento de reservas cambiais pelo SWIFT). Ao integrar os maiores produtores mundiais de energia (Oriente Médio e Rússia) com os maiores consumidores industriais (China e Índia), os BRICS+ ganham massa crítica para liquidar transações petrolíferas e agrícolas em moedas nacionais (desdolarização relativa) e consolidar a multipolaridade.",
      stepByStep: [
        "1. Petrodólar histórico: Desde a década de 1970, o petróleo mundial era transacionado quase compulsoriamente em dólares americanos.",
        "2. Arma financeira (weaponization of finance): O bloqueio de centenas de bilhões de dólares em reservas da Rússia em 2022 acelerou a busca de outros países por diversificação de reservas.",
        "3. Novo arranjo nos BRICS+: Transações de petróleo entre Arábia Saudita, Índia, Rússia e China passaram a ser liquidadas em yuan, rúpias e dirhams.",
        "4. Multipolaridade: O Sul Global busca maior autonomia institucional, sem depender exclusivamente das regras do sistema financeiro de Bretton Woods.",
        "5. Conclusão: Trata-se de um movimento geopolítico de reequilíbrio de poder econômico global."
      ],
      coreConcept: "BRICS+: Multipolaridade, Sul Global e Diversificação Monetária nas Relações Internacionais",
      trapWarning: "Cuidado: desdolarização não significa o desaparecimento imediato do dólar! O dólar continua sendo a moeda dominante no mundo. O que ocorre é uma redução da dependência e ascensão de arranjos bilaterais em moedas locais."
    },
    commonTraps: [
      "Achar que os BRICS criaram uma moeda física única para substituir o Real e o Yuan",
      "Confundir busca por autonomia financeira multipolar com isolacionismo econômico"
    ],
    tags: ["brics", "desdolarizacao", "multipolaridade", "sul-global", "geofinancas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-023",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Geopolítica e Globalização",
    subtopic: "Geopolítica dos Minerais Críticos e a Transição Energética",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A descarbonização da matriz energética global exige a substituição de combustíveis fósseis por tecnologias limpas (painéis solares fotovoltaicos, turbinas eólicas e baterias eletroquímicas para veículos elétricos). No entanto, essas tecnologias verdes demandam quantidades monumentais de minerais críticos e terras raras: o lítio (concentrado no 'Triângulo do Lítio' entre Chile, Bolívia e Argentina), o cobalto (extraído majoritariamente na República Democrática do Congo) e o processamento de refino químico de terras raras, onde a China controla mais de 70% da capacidade industrial mundial.",
      source: "Agência Internacional de Energia (IEA), Relatório de Minerais Críticos"
    },
    prompt: "Essa dependência material da economia verde engendra uma nova dinâmica na geopolítica dos recursos naturais caracterizada pela:",
    options: [
      { id: "a", text: "transferência da vulnerabilidade geopolítica do petróleo para os minerais críticos, redefinindo as alianças estratégicas e disputas de poder sobre países detentores dessas reservas e elos de refino.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "eliminação de qualquer impacto socioambiental ou conflito de interesses na mineração sustentável moderna.", isCorrect: false, distractorRationale: "A mineração de lítio (estresse hídrico em salares) e de cobalto (trabalho precarizado e impactos ecológicos) gera graves tensões socioambientais locais." },
      { id: "c", text: "descoberta de jazidas homogêneas e infinitas de lítio e cobalto em todos os municípios do planeta.", isCorrect: false, distractorRationale: "Esses minerais possuem distribuição geológica altamente concentrada e assimétrica em poucas regiões." },
      { id: "d", text: "perda total de relevância econômica da China no comércio e na indústria de baterias recarregáveis.", isCorrect: false, distractorRationale: "A China consolidou posição hegemônica incontestável na cadeia de suprimento e refino dos minerais de baterias." },
      { id: "e", text: "proibição internacional definitiva do uso de eletricidade e redes elétricas até o ano de 2050.", isCorrect: false, distractorRationale: "A transição energética caminha na direção oposta: eletrificação em massa de transportes e matrizes produtivas." }
    ],
    detailedExplanation: {
      summary: "A transição energética não elimina a geopolítica dos recursos, mas a reconfigura. Se no século XX a geopolítica mundial gravitava em torno do controle de poços de petróleo e gasodutos no Oriente Médio, no século XXI ela passa a gravitar em torno de salares de lítio, minas de cobalto, níquel, cobre e usinas de refino de terras raras.",
      stepByStep: [
        "1. Comparação histórica: Petróleo (Oriente Médio/Rússia) -> Minerais Críticos (América do Sul, África Central e refino na China).",
        "2. Triângulo do Lítio: Bolívia, Chile e Argentina detêm mais de metade das reservas conhecidas de salares de lítio, atraindo investimentos chineses, europeus e norte-americanos.",
        "3. Gargalo do refino: A China não controla apenas minas locais, mas detém quase o monopólio global do refino químico de lítio, níquel e terras raras.",
        "4. Desafio socioambiental: O consumo desenfreado de água doce para evaporar salmoura de lítio em áreas áridas e a exploração precarizada de cobalto impõem debates sobre 'justiça climática' e direitos indígenas.",
        "5. Conclusão: A transição energética gera novas dependências estratégicas globais."
      ],
      coreConcept: "Geopolítica dos Minerais Críticos: Lítio, Terras Raras e a Nova Dependência da Transição Verde",
      trapWarning: "Cuidado com o mito de que 'energia renovável não tem geopolítica nem impacto ambiental'! A tecnologia é limpa na operação, mas sua cadeia de matérias-primas minerais exige intensa exploração territorial e gera novas tensões globais."
    },
    commonTraps: [
      "Supor que a transição para energias limpas extingue disputas geopolíticas por matérias-primas",
      "Ignorar o papel quase monopolista da China no beneficiamento e refino de terras raras"
    ],
    tags: ["minerais-criticos", "litio", "terras-raras", "transicao-energetica", "geopolitica-ambiental"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-024",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Geopolítica e Globalização",
    subtopic: "Migrações Climáticas e o Vácuo Jurídico Internacional",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A elevação do nível médio dos oceanos que ameaça submergir nações insulares de baixa altitude (como Tuvalu, Kiribati e Ilhas Marshall), somada ao avanço da desertificação e secas catastróficas no Sahel africano, já força o deslocamento forçado de milhões de pessoas de suas terras ancestrais. Contudo, o Estatuto dos Refugiados da ONU (Convenção de Genebra de 1951) concede o status jurídico de refugiado unicamente a indivíduos sob fundado temor de perseguição por motivos de raça, religião, nacionalidade, grupo social ou opiniões políticas.",
      source: "Direito Internacional Humanitário e Migrações Globais"
    },
    prompt: "A ausência de previsão legal expressa para os chamados 'refugiados do clima' no direito internacional acarreta como consequência imediata:",
    options: [
      { id: "a", text: "uma situação de desamparo jurídico internacional e vulnerabilidade humanitária, na qual populações deslocadas por colapsos ambientais não possuem direito automático a asilo ou acolhimento compulsório pelos Estados soberanos receptores.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a concessão imediata de dupla cidadania diplomática e auxílio financeiro vitalício em todos os países membros da União Europeia.", isCorrect: false, distractorRationale: "Pelo contrário, sem enquadramento jurídico como refugiados, esses migrantes são frequentemente tratados como clandestinos sujeitos à deportação." },
      { id: "c", text: "a erradicação definitiva de qualquer seca ou inundação nas regiões periféricas do planeta.", isCorrect: false, distractorRationale: "O vácuo jurídico decorre justamente do agravamento concreto dos eventos climáticos extremos." },
      { id: "d", text: "o fechamento de todas as embaixadas e representações consulares dos países desenvolvidos.", isCorrect: false, distractorRationale: "O direito consular opera normalmente; a questão reside na ausência de tratado vinculante de asilo ambiental." },
      { id: "e", text: "a transferência de todas as populações insulares para bases espaciais autossuficientes na órbita terrestre.", isCorrect: false, distractorRationale: "Hipótese de ficção científica inviável que não corresponde à realidade das negociações multilaterais." }
    ],
    detailedExplanation: {
      summary: "A Convenção de Genebra de 1951 foi redigida no contexto do pós-Segunda Guerra para proteger perseguidos políticos pelo Estado. Ela não contemplava catástrofes ecológicas e aquecimento global. Quem perde sua casa e seu território por secas extremas ou invasão marinha não é considerado legalmente 'refugiado' pela lei internacional, caindo na categoria desprotegida de migrante econômico ou ambiental sem garantia de asilo.",
      stepByStep: [
        "1. Definição restrita de refugiado (Genebra 1951): exige PERSEGUIÇÃO ativa por raça, religião, nacionalidade ou opinião política.",
        "2. Natureza da crise climática: a causa da perda de moradia é ambiental (seca extrema, furacões repetidos, submersão de atóis), não perseguição estatal.",
        "3. Limbo jurídico: países receptores podem recusar a entrada e deportar migrantes climáticos legalmente sob suas leis soberanas de controle de fronteiras.",
        "4. Desafio das ilhas do Pacífico: nações inteiras correm o risco de perder sua base territorial física, criando a figura inédita de Estados soberanos sem território terrestre.",
        "5. Pauta do Sul Global: pressão por um novo tratado internacional que reconheça o refúgio climático e estabeleça financiamento e salvaguardas migratórias vinculantes."
      ],
      coreConcept: "Migrações Climáticas: Convenção de Genebra de 1951 e o Limbo Jurídico do Refúgio Ambiental",
      trapWarning: "Atenção técnica no ENEM: do ponto de vista do DIREITO INTERNACIONAL FORMAL, a expressão 'refugiado climático' ainda NÃO EXISTE juridicamente! Existe como conceito sociológico e humanitário, mas a lei de 1951 não garante asilo a eles."
    },
    commonTraps: [
      "Achar que qualquer pessoa que perde a casa em um desastre climático tem direito legal automático a asilo na Europa ou EUA",
      "Confundir a Convenção de Refugiados de 1951 com os Acordos Climáticos de Paris"
    ],
    tags: ["refugiados-climaticos", "convencao-de-genebra", "direitos-humanos", "migracoes", "justica-climatica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOPOL-025",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Geopolítica e Globalização",
    subtopic: "A Nova Rota da Seda Chinesa e a Infraestrutura Geoeconômica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Lançada em 2013 pelo governo de Pequim, a Iniciativa Cinturão e Rota (Belt and Road Initiative - BRI), popularmente conhecida como a 'Nova Rota da Seda', já financiou e construiu centenas de bilhões de dólares em ferrovias transcontinentais, redes de gasodutos, pontes, hidrelétricas e complexos portuários ao longo da Ásia Central, Europa, África e América Latina. Em paralelo à modernização logística, analistas internacionais apontam casos de contrapartidas estratégicas quando países devedores enfrentam inadimplência, a exemplo do porto marítimo de Hambantota, no Sri Lanka, arrendado a uma estatal chinesa por 99 anos.",
      source: "Geopolítica Eurasiana e Expansão Econômica Global"
    },
    prompt: "Como estratégia de política externa e projeção hegemônica de poder global, a Nova Rota da Seda chinesa visa primordialmente:",
    options: [
      { id: "a", text: "escoar a capacidade industrial e construtiva excedente de Pequim, garantir rotas seguras de abastecimento de commodities e expandir a influência geopolítica chinesa sobre corredores estratégicos do comércio mundial.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "financiar doações filantrópicas sem qualquer interesse econômico, comercial ou de suprimento mineral para a indústria asiática.", isCorrect: false, distractorRationale: "O projeto é um plano de Estado estratégico altamente planejado para assegurar suprimento e ampliar influência geoeconômica." },
      { id: "c", text: "isolar comercialmente o continente asiático do restante da economia capitalista global.", isCorrect: false, distractorRationale: "A iniciativa visa integrar a Ásia com a Europa, África e América Latina por ferrovias e corredores marítimos rápidos." },
      { id: "d", text: "substituir todas as ferrovias e rodovias por canais fluviais navegáveis subterrâneos na Cordilheira dos Andes.", isCorrect: false, distractorRationale: "Os investimentos priorizam modais ferroviários modernos de carga, rodovias e portos de contêineres." },
      { id: "e", text: "obrigar todos os países parceiros a abolir o comércio de petróleo e derivados de carvão.", isCorrect: false, distractorRationale: "A China financiou múltiplos projetos energéticos, incluindo oleodutos, gasodutos e termelétricas ao longo da rota." }
    ],
    detailedExplanation: {
      summary: "A 'Belt and Road Initiative' (BRI) é o mais ambicioso plano de infraestrutura geoeconômica da história contemporânea. Ela cumpre tríplice objetivo estratégico: 1) Absorve a sobrecapacidade de produção de aço, cimento e engenharia pesada chinesa; 2) Cria rotas terrestres alternativas ao Estreito de Malaca (vulnerável a bloqueios navais ocidentais) para importar energia e alimentos; 3) Conecta os mercados consumidores da Eurásia e África ao polo industrial chinês, consolidando a liderança de Pequim.",
      stepByStep: [
        "1. Cinturão Terrestre (Silk Road Economic Belt): Ferrovias conectando o interior da China até a Alemanha e Europa Ocidental cruzando a Ásia Central e a Rússia.",
        "2. Rota Marítima (21st Century Maritime Silk Road): Rede de portos e entrepostos ao longo do Oceano Índico, Mar Vermelho e Mediterrâneo.",
        "3. Dilema de Malaca: Cerca de 80% do petróleo importado pela China passa pelo Estreito de Malaca; corredores terrestres via Paquistão (porto de Gwadar) e Mianmar contornam esse gargalo naval.",
        "4. Diplomacia da Dívida e influência: Empréstimos volumosos de bancos estatais chineses geram laços de dependência econômica e alinhamento diplomático na ONU com os países receptores de infraestrutura."
      ],
      coreConcept: "A Nova Rota da Seda (Belt and Road): Infraestrutura Global, Dilema de Malaca e Hegemonia Chinesa",
      trapWarning: "No ENEM, analise a Nova Rota da Seda com equilíbrio crítico: por um lado, supre carências históricas gritantes de infraestrutura no Sul Global; por outro, projeta o poder econômico e militar chinês sobre nós de estrangulamento vitais da economia mundial."
    },
    commonTraps: [
      "Tratar o projeto como mera 'doação filantrópica desinteressada'",
      "Ignorar a preocupação geopolítica chinesa em contornar o Estreito de Malaca"
    ],
    tags: ["nova-rota-da-seda", "china", "infraestrutura", "belt-and-road", "geoeconomia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
