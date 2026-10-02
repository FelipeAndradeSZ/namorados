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
  }
];
