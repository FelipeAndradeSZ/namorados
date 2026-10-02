export const QUESTIONS_GEOGRAFIA_FISICA = [
  {
    id: 'HUM-GEOBIO-001',
    area: 'humanas',
    competence: 6,
    skill: 27,
    topic: 'Geografia Física',
    subtopic: 'Domínios Morfoclimáticos',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'O geógrafo Aziz Ab\'Sáber propôs uma classificação do território brasileiro em domínios morfoclimáticos. Esses domínios representam a síntese e a interação entre relevo, clima, vegetação, hidrografia e solos de uma extensa área.',
      source: 'AB\'SÁBER, A. N. Os domínios de natureza no Brasil. São Paulo: Ateliê Editorial, 2003. (Adaptado).'
    },
    prompt: 'O conceito de domínio morfoclimático difere da simples classificação fitogeográfica (vegetação) porque:',
    options: [
      { id: 'a', text: 'considera a vegetação apenas como um fator secundário e irrelevante perante o clima globalizado.', isCorrect: false, distractorRationale: 'Incorreta. A vegetação é parte fundamental da paisagem em qualquer domínio morfoclimático.' },
      { id: 'b', text: 'analisa os elementos naturais de forma interdependente, formando um conjunto paisagístico integrado e homogêneo em sua área core.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'c', text: 'baseia-se exclusivamente na análise das bacias hidrográficas para delimitar fronteiras estaduais.', isCorrect: false, distractorRationale: 'Incorreta. Os domínios não respeitam fronteiras estaduais e incluem muito mais do que a hidrografia.' },
      { id: 'd', text: 'ignora as condições climáticas e geológicas em favor da ação antrópica (humana) moderna.', isCorrect: false, distractorRationale: 'Incorreta. Domínios são classificações de "natureza" e ecossistemas originais/estruturais.' },
      { id: 'e', text: 'demonstra que o Brasil possui biomas totalmente separados por montanhas intransponíveis.', isCorrect: false, distractorRationale: 'Incorreta. O Brasil apresenta "Faixas de Transição" entre os domínios e não possui cadeias de montanhas com neves eternas.' }
    ],
    detailedExplanation: {
      summary: 'Os domínios morfoclimáticos de Ab\'Sáber analisam a paisagem como um todo dinâmico: clima, relevo, hidrografia, solos e vegetação em interação mútua (holística).',
      stepByStep: [
        'Compreender o prefixo "morfo" (forma/relevo) e "climático" (clima).',
        'Recordar que Ab\'Sáber buscava definir áreas de feição ecológica e paisagística coesa.',
        'Distinguir bioma (foco biológico) de domínio morfoclimático (interação de fatores abióticos e bióticos).'
      ],
      coreConcept: 'Visão sistêmica e integrada da paisagem natural proposta por Aziz Ab\'Sáber.',
      trapWarning: 'Cuidado para não confundir bioma (IBGE) com Domínio Morfoclimático (Ab\'Sáber). Eles se sobrepõem, mas o domínio enfatiza a geomorfologia.'
    },
    tags: ['Geografia Física', 'Domínios Morfoclimáticos', 'AbSáber']
  },
  {
    id: 'HUM-GEOBIO-002',
    area: 'humanas',
    competence: 6,
    skill: 28,
    topic: 'Geografia Física',
    subtopic: 'Domínio Amazônico',
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: 'application',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Neste domínio, as elevadas taxas de precipitação e a constância térmica definem um ambiente onde os rios possuem enorme volume de água. A floresta, densa e perenifólia, protege os solos que, em grande parte, são arenosos e pobres em nutrientes minerais, sustentando-se pelo reaproveitamento da matéria orgânica acumulada na serapilheira.',
      source: 'Geografia do Brasil, Ensino Médio.'
    },
    prompt: 'O domínio morfoclimático descrito acima e seu respectivo clima característico são:',
    options: [
      { id: 'a', text: 'Domínio das Araucárias / Clima Subtropical.', isCorrect: false, distractorRationale: 'Incorreta. As araucárias ficam no sul, onde há grande amplitude térmica, não constância térmica.' },
      { id: 'b', text: 'Domínio do Cerrado / Clima Tropical Continental.', isCorrect: false, distractorRationale: 'Incorreta. O Cerrado tem duas estações bem marcadas (seca e chuva), não apresenta floresta densa em sua maior parte.' },
      { id: 'c', text: 'Domínio da Caatinga / Clima Semiárido.', isCorrect: false, distractorRationale: 'Incorreta. A Caatinga sofre com déficit hídrico.' },
      { id: 'd', text: 'Domínio Amazônico / Clima Equatorial.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'e', text: 'Domínio dos Mares de Morros / Clima Tropical de Altitude.', isCorrect: false, distractorRationale: 'Incorreta. Mares de morros é na faixa litorânea oriental do Brasil, com chuvas orográficas, mas o texto fala de rios volumosos em terrenos de baixo relevo geral da bacia e solos muito lavados sustentados por serapilheira em vasta extensão.' }
    ],
    detailedExplanation: {
      summary: 'A descrição remete ao Domínio Amazônico: rios caudalosos, chuvas constantes o ano todo, alta temperatura e solo pobre que sobrevive da própria camada superficial orgânica (serapilheira).',
      stepByStep: [
        'Identificar as características climáticas: chuvas abundantes e constância de temperatura apontam para clima Equatorial.',
        'Analisar as características de vegetação e solo: floresta densa (perenifólia) dependente da serapilheira indica floresta Amazônica.',
        'Associar essas características à área correta da Região Norte do Brasil.'
      ],
      coreConcept: 'Domínio Amazônico e as características do clima equatorial quente e úmido.',
      trapWarning: 'O solo da Amazônia é, em sua maioria, pobre (latossolos muito lavados - lixiviação). A riqueza da floresta está nela mesma (ciclagem de nutrientes).'
    },
    tags: ['Amazônia', 'Clima Equatorial', 'Solos']
  },
  {
    id: 'HUM-GEOBIO-003',
    area: 'humanas',
    competence: 6,
    skill: 29,
    topic: 'Geografia Física',
    subtopic: 'Domínio do Cerrado e Solos',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'As árvores do Cerrado costumam ter troncos tortuosos, cascas grossas e raízes profundas. Por muito tempo, acreditou-se que essa fisionomia era resultado da falta de água. Contudo, pesquisas da Embrapa revelaram que a acidez do solo e a alta concentração de um determinado metal são as reais causas dessa adaptação.',
      source: 'Revista Pesquisa FAPESP. (Adaptado).'
    },
    prompt: 'O metal mencionado no texto, que confere toxidez ao solo do Cerrado e que demanda a técnica de calagem para o desenvolvimento agrícola, é o:',
    options: [
      { id: 'a', text: 'chumbo.', isCorrect: false, distractorRationale: 'Incorreta. O chumbo não é o elemento natural limitante característico desses solos.' },
      { id: 'b', text: 'alumínio.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'c', text: 'ferro.', isCorrect: false, distractorRationale: 'Incorreta. Há muito ferro (que deixa a terra avermelhada), mas a toxidez e o nanismo/tortuosidade vêm primariamente do alumínio.' },
      { id: 'd', text: 'mercúrio.', isCorrect: false, distractorRationale: 'Incorreta. O mercúrio é poluente antrópico comum em garimpos de ouro na Amazônia.' },
      { id: 'e', text: 'cobre.', isCorrect: false, distractorRationale: 'Incorreta. O cobre não é o foco da calagem ou do problema natural do cerrado.' }
    ],
    detailedExplanation: {
      summary: 'A aparência tortuosa das árvores do Cerrado (escleromorfismo oligotrófico) deve-se à alta acidez do solo e à presença de alumínio tóxico (Al³⁺). Para a agricultura moderna, corrige-se a acidez com calcário (calagem).',
      stepByStep: [
        'Relacionar a aparência do Cerrado com suas causas edáficas (solo), em oposição à antiga teoria da escassez hídrica (as raízes alcançam lençóis freáticos).',
        'Recordar as características do latossolo ácido do Brasil central.',
        'Identificar a técnica da calagem, que visa neutralizar o pH e precipitar o alumínio tóxico.'
      ],
      coreConcept: 'Toxidez por alumínio e uso de corretivos agrícolas (calagem) nos solos do Cerrado.',
      trapWarning: 'O Cerrado recebe chuvas intensas no verão; portanto, a falta de água (estresse hídrico) ocorre apenas durante o inverno (seca). A tortuosidade é química, não de seca absoluta.'
    },
    tags: ['Cerrado', 'Pedologia', 'Solos', 'Agricultura']
  },
  {
    id: 'HUM-GEOBIO-004',
    area: 'humanas',
    competence: 6,
    skill: 28,
    topic: 'Geografia Física',
    subtopic: 'Clima Semiárido e Caatinga',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'application',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Na depressão sertaneja, os índices pluviométricos giram em torno de 500 mm a 800 mm anuais, concentrados em poucos meses. O intemperismo físico predomina sobre o químico, gerando solos rasos e pedregosos. A vegetação possui folhas pequenas ou transformadas em espinhos (cactáceas) e perde as folhas no período seco.',
      source: 'Geografia do Brasil.'
    },
    prompt: 'A vegetação descrita e a dinâmica de perda das folhas no período seco caracterizam essa formação, respectivamente, como:',
    options: [
      { id: 'a', text: 'Higrófila e perenifólia.', isCorrect: false, distractorRationale: 'Incorreta. Higrófila (precisa de muita água) e perenifólia (não perde folhas) são características da Amazônia.' },
      { id: 'b', text: 'Xerófila e caducifólia.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'c', text: 'Halófila e aciculifoliada.', isCorrect: false, distractorRationale: 'Incorreta. Halófila (solos salinos, mangues) e aciculifoliada (folhas em formato de agulhas, pinheiros).' },
      { id: 'd', text: 'Tropófila e latifoliada.', isCorrect: false, distractorRationale: 'Incorreta. Tropófila (Cerrado) e latifoliada (folhas largas) não se aplicam à caatinga estrita.' },
      { id: 'e', text: 'Xerófila e ombrófila.', isCorrect: false, distractorRationale: 'Incorreta. Ombrófila significa "amiga da chuva" (florestas densas).' }
    ],
    detailedExplanation: {
      summary: 'A Caatinga apresenta plantas adaptadas à seca (xerófilas) que perdem as folhas na estiagem para evitar perda de água por transpiração (caducifólias ou decíduas).',
      stepByStep: [
        'Analisar a adaptação à seca (espinhos, armazenamento de água): plantas xerófilas.',
        'Analisar o comportamento sazonal (perda de folhas no período seco): característica de plantas caducifólias/decíduas.',
        'Associar esses termos científicos às descrições feitas no texto-base sobre a vegetação do semiárido nordestino.'
      ],
      coreConcept: 'Adaptações morfofisiológicas da Caatinga (Xerofitismo) às condições de semi-aridez.',
      trapWarning: 'Caducifólia é o mesmo que decídua (cai a folha). Não confunda xerófila (seca) com halófila (sal).'
    },
    tags: ['Caatinga', 'Clima Semiárido', 'Biogeografia']
  },
  {
    id: 'HUM-GEOBIO-005',
    area: 'humanas',
    competence: 6,
    skill: 27,
    topic: 'Geografia Física',
    subtopic: 'Domínio dos Mares de Morros',
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Ao longo do litoral leste do Brasil, adentrando pelo Sudeste, a intensa ação das chuvas e do intemperismo químico esculpiu um relevo de colinas arredondadas, também chamadas de mamelonares. Originalmente, essa área estava inteiramente coberta por uma floresta densa e exuberante.',
      source: 'Geografia e Meio Ambiente. (Adaptado).'
    },
    prompt: 'O domínio morfoclimático descrito acima, cuja vegetação original sofreu a maior taxa de devastação histórica do país devido aos ciclos econômicos, é:',
    options: [
      { id: 'a', text: 'Domínio das Araucárias.', isCorrect: false, distractorRationale: 'Incorreta. Araucárias ficam no planalto meridional (Sul), não são caracterizadas por morros mamelonares generalizados litorâneos.' },
      { id: 'b', text: 'Domínio da Mata de Cocais.', isCorrect: false, distractorRationale: 'Incorreta. É uma área de transição no Maranhão/Piauí com presença de Carnaúba e Babaçu.' },
      { id: 'c', text: 'Domínio do Pantanal.', isCorrect: false, distractorRationale: 'Incorreta. O Pantanal é uma imensa planície de inundação no Centro-Oeste.' },
      { id: 'd', text: 'Domínio dos Mares de Morros (Mata Atlântica).', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'e', text: 'Domínio Amazônico.', isCorrect: false, distractorRationale: 'Incorreta. Não ocupa a face leste/sudeste, e o relevo é majoritariamente de planícies e baixos platôs.' }
    ],
    detailedExplanation: {
      summary: 'O domínio dos Mares de Morros coincide com o bioma Mata Atlântica e caracteriza-se por um relevo de mamelões (meia-laranja) formado por intenso desgaste químico devido ao clima tropical litorâneo úmido.',
      stepByStep: [
        'Identificar a localização ("litoral leste" e "Sudeste").',
        'Identificar a forma de relevo ("colinas arredondadas / mamelonares").',
        'Ligar essas informações ao conceito de Mares de Morros e à devastação da Mata Atlântica pelos ciclos de pau-brasil, cana e café.'
      ],
      coreConcept: 'Domínio dos Mares de Morros e a ação do intemperismo químico nas rochas cristalinas.',
      trapWarning: 'A expressão "meia-laranja" ou "mamelões" é a palavra-chave geomorfológica infalível para Mares de Morros nas provas do ENEM.'
    },
    tags: ['Mares de Morros', 'Mata Atlântica', 'Geomorfologia']
  },
  {
    id: 'HUM-GEOBIO-006',
    area: 'humanas',
    competence: 6,
    skill: 27,
    topic: 'Geografia Física',
    subtopic: 'Climatologia: Massas de Ar',
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Durante o inverno brasileiro, frentes frias avançam pela região Sul, provocando quedas acentuadas de temperatura e, algumas vezes, geadas. Em certas ocasiões, esse sistema consegue chegar até a Amazônia ocidental, causando o fenômeno da "friagem".',
      source: 'MENDONÇA, F.; DANNI-OLIVEIRA, I. M. Climatologia: noções básicas e climas do Brasil.'
    },
    prompt: 'O fenômeno da "friagem" na região Norte e as baixas temperaturas do inverno na região Sul são provocados pelo avanço da seguinte massa de ar:',
    options: [
      { id: 'a', text: 'Massa Equatorial Continental (mEc), quente e seca.', isCorrect: false, distractorRationale: 'Incorreta. A mEc é quente e úmida, originada na Amazônia.' },
      { id: 'b', text: 'Massa Tropical Atlântica (mTa), quente e úmida.', isCorrect: false, distractorRationale: 'Incorreta. A mTa atua na costa e não traz o frio polar.' },
      { id: 'c', text: 'Massa Tropical Continental (mTc), quente e seca.', isCorrect: false, distractorRationale: 'Incorreta. A mTc atua no interior do continente (Chaco Paraguaio) causando bloqueios atmosféricos secos.' },
      { id: 'd', text: 'Massa Polar Atlântica (mPa), fria e úmida.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'e', text: 'Massa Equatorial Atlântica (mEa), quente e úmida.', isCorrect: false, distractorRationale: 'Incorreta. A mEa atua no nordeste, é muito quente.' }
    ],
    detailedExplanation: {
      summary: 'A Massa Polar Atlântica (mPa) nasce na Patagônia/Antártida e avança pelo interior do continente sul-americano pelos vales dos rios Paraguai/Paraná até atingir a Amazônia nos meses de inverno, causando a "friagem".',
      stepByStep: [
        'Apreender que massas de ar que trazem frio são polares.',
        'No Brasil, a única massa polar atuante é a mPa (Massa Polar Atlântica).',
        'Compreender que o relevo de planície no centro do continente facilita a passagem do vento frio sul-norte sem bloqueios orográficos, atingindo o Acre/Rondônia e o sul do Amazonas.'
      ],
      coreConcept: 'Dinâmica das Massas de Ar no Brasil e os impactos da Massa Polar Atlântica.',
      trapWarning: 'Embora a palavra "Atlântica" passe a ideia de oceano, a mPa avança por dentro do continente (Calha do Paraná) para causar a friagem na Amazônia, canalizada pela Cordilheira dos Andes.'
    },
    tags: ['Climatologia', 'Massas de Ar', 'Friagem']
  },
  {
    id: 'HUM-GEOBIO-007',
    area: 'humanas',
    competence: 6,
    skill: 28,
    topic: 'Geografia Física',
    subtopic: 'Relevo Brasileiro - Classificações',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Com base nas imagens do projeto Radambrasil e critérios morfoclimáticos, Jurandyr Ross propôs a mais detalhada classificação do relevo brasileiro. Nela, o território nacional não apresenta dobramentos modernos (como os Andes e o Himalaia), sendo constituído, em sua maioria, por estruturas geológicas antigas.',
      source: 'ROSS, J. L. S. Geografia do Brasil. São Paulo: Edusp, 2011. (Adaptado).'
    },
    prompt: 'Segundo a classificação de Jurandyr Ross, o relevo brasileiro é caracterizado pela ausência de cordilheiras recentes e pelo predomínio das seguintes formas principais:',
    options: [
      { id: 'a', text: 'apenas planícies litorâneas e depressões absolutas (abaixo do nível do mar).', isCorrect: false, distractorRationale: 'Incorreta. O Brasil não possui depressões absolutas.' },
      { id: 'b', text: 'extensos platôs vulcânicos ativos e falhas tectônicas profundas.', isCorrect: false, distractorRationale: 'Incorreta. Não temos vulcanismo ativo no país (estamos no centro de uma placa tectônica).' },
      { id: 'c', text: 'planaltos, que sofrem mais desgaste erosivo do que acumulação, além de depressões relativas e planícies.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'd', text: 'montanhas rochosas originadas na era cenozoica com picos cobertos de gelo.', isCorrect: false, distractorRationale: 'Incorreta. Não possuímos dobramentos modernos (Era Cenozoica) ou montanhas altas com gelo.' },
      { id: 'e', text: 'bacias sedimentares perfeitamente planas em mais de 90% do território nacional.', isCorrect: false, distractorRationale: 'Incorreta. As bacias cobrem grande parte, mas o relevo sobre elas varia (planaltos sedimentares, depressões), não são apenas planícies.' }
    ],
    detailedExplanation: {
      summary: 'O relevo do Brasil é de formação antiga (Pré-cambriana e Paleo/Mesozoica), logo, foi intensamente desgastado pela erosão. Ross dividiu o Brasil em Planaltos (erosão maior que deposição), Depressões Relativas e Planícies (deposição maior que erosão).',
      stepByStep: [
        'Lembrar que o Brasil fica no centro da Placa Sul-Americana, evitando grandes tremores e dobramentos recentes.',
        'Identificar que o relevo antigo brasileiro foi muito esculpido pelo intemperismo.',
        'Conhecer as 28 unidades de Jurandyr Ross agrupadas em 3 tipos: Planaltos, Planícies e Depressões Relativas.'
      ],
      coreConcept: 'Classificação geomorfológica do Brasil por Jurandyr Ross, baseada em desgaste e acumulação de sedimentos.',
      trapWarning: 'Não confundir Depressão Relativa (acima do nível do mar, mas mais baixa que os terrenos ao redor) com Depressão Absoluta (abaixo do nível do mar - ex: Mar Morto). O Brasil SÓ tem relativas.'
    },
    tags: ['Geomorfologia', 'Relevo', 'Jurandyr Ross']
  },
  {
    id: 'HUM-GEOBIO-008',
    area: 'humanas',
    competence: 6,
    skill: 29,
    topic: 'Geografia Física',
    subtopic: 'Bacias Hidrográficas',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'application',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Conhecido como o "Rio da Integração Nacional", suas águas atravessam o semiárido nordestino, nascendo no sudeste do Brasil. Trata-se de um rio perene, fundamental para irrigação, geração de energia (Três Marias, Sobradinho, Paulo Afonso) e abastecimento de populações afetadas pelas secas.',
      source: 'Agência Nacional de Águas (ANA).'
    },
    prompt: 'O texto descreve a importância socioeconômica e natural da bacia hidrográfica do rio:',
    options: [
      { id: 'a', text: 'Amazonas.', isCorrect: false, distractorRationale: 'Incorreta. O Amazonas não cruza o semiárido nordestino e não possui usinas de Sobradinho.' },
      { id: 'b', text: 'Parnaíba.', isCorrect: false, distractorRationale: 'Incorreta. O rio Parnaíba divide o Piauí e o Maranhão, nascendo mais ao norte.' },
      { id: 'c', text: 'Paraná.', isCorrect: false, distractorRationale: 'Incorreta. O rio Paraná flui para o sul (Bacia do Prata) e tem Itaipu, não cruza o Nordeste.' },
      { id: 'd', text: 'São Francisco.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'e', text: 'Tocantins-Araguaia.', isCorrect: false, distractorRationale: 'Incorreta. Esta bacia flui para o norte (Pará), famosa pela usina de Tucuruí e Ilha do Bananal.' }
    ],
    detailedExplanation: {
      summary: 'O Rio São Francisco ("Velho Chico") nasce na Serra da Canastra (MG) e corre para o norte, cruzando o polígono das secas até desaguar no Oceano Atlântico (divisa AL/SE). É o principal rio totalmente brasileiro e salvaguarda do semiárido.',
      stepByStep: [
        'Analisar a expressão "Rio da Integração Nacional": liga o Sudeste (nasce em MG) ao Nordeste.',
        'Identificar a travessia de biomas: nasce no Cerrado, cruza a Caatinga e chega à costa.',
        'Ligar os nomes das usinas hidrelétricas: Três Marias (MG), Sobradinho (BA), Paulo Afonso (BA/AL/PE) ao curso do rio São Francisco.'
      ],
      coreConcept: 'Importância e características da bacia hidrográfica do Rio São Francisco.',
      trapWarning: 'Lembre-se que o rio é PERENE (nunca seca), o que é vital num bioma de rios predominantemente intermitentes/temporários (Caatinga).'
    },
    tags: ['Hidrografia', 'São Francisco', 'Semiárido']
  },
  {
    id: 'HUM-GEOBIO-009',
    area: 'humanas',
    competence: 6,
    skill: 27,
    topic: 'Geografia Física',
    subtopic: 'Faixas de Transição',
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Entre os domínios amazônico, do cerrado e da caatinga, existe uma larga faixa de transição, marcada pelo extrativismo vegetal de palmeiras, fundamentais para as economias locais e sobrevivência de comunidades tradicionais, como as "quebradeiras de coco".',
      source: 'IBGE, Biomas do Brasil.'
    },
    prompt: 'A faixa de transição descrita acima, de extrema importância social e ecológica, é denominada:',
    options: [
      { id: 'a', text: 'Pantanal Mato-Grossense.', isCorrect: false, distractorRationale: 'Incorreta. O Pantanal é transição de Cerrado, Chaco, Amazônia e Mata Atlântica, e fica no centro-oeste, sem o destaque da palmeira do coco babaçu.' },
      { id: 'b', text: 'Pampas ou Campos Sulinos.', isCorrect: false, distractorRationale: 'Incorreta. Os Pampas ficam no Rio Grande do Sul.' },
      { id: 'c', text: 'Mata de Cocais.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'd', text: 'Mata de Araucárias.', isCorrect: false, distractorRationale: 'Incorreta. Mata de clima subtropical no sul do país.' },
      { id: 'e', text: 'Agreste.', isCorrect: false, distractorRationale: 'Incorreta. O Agreste é uma sub-região transicional no nordeste oriental (entre Zona da Mata e Sertão), focado em policultura, não em grandes carnaubais/babaçuais amazônicos.' }
    ],
    detailedExplanation: {
      summary: 'A Mata dos Cocais (Meio-Norte do Nordeste - Maranhão e Piauí) é um ecótono (transição) rico em palmeiras como a Carnaúba e o Babaçu, unindo o clima úmido da Amazônia ao seco da Caatinga.',
      stepByStep: [
        'Localizar a área geográfica: entre Amazônia, Cerrado e Caatinga = Maranhão e Piauí.',
        'Identificar a vegetação predominante nas dicas: palmeiras e extrativismo (quebradeiras de coco babaçu).',
        'Concluir que se trata da Mata dos Cocais, área clássica de transição na geografia nacional.'
      ],
      coreConcept: 'O ecótono da Mata de Cocais e seu papel socioeconômico de extrativismo na região do Meio-Norte.',
      trapWarning: 'A Carnaúba ("árvore da providência") é a que mais resiste na borda da Caatinga; o Babaçu domina mais próximo à Amazônia.'
    },
    tags: ['Mata de Cocais', 'Extrativismo', 'Faixas de Transição']
  },
  {
    id: 'HUM-GEOBIO-010',
    area: 'humanas',
    competence: 6,
    skill: 27,
    topic: 'Geografia Física',
    subtopic: 'Climatologia: Fatores Climáticos',
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: 'interpretation',
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: 'Ao analisarmos duas cidades próximas à Linha do Equador na América do Sul, como Macapá (Brasil) e Quito (Equador), observamos que Macapá possui médias térmicas acima dos 26°C durante o ano todo, enquanto Quito possui um clima ameno, com médias em torno de 15°C.',
      source: 'Atlas Geográfico Escolar. (Adaptado).'
    },
    prompt: 'A grande diferença de temperatura média entre essas duas cidades, apesar de ambas estarem em áreas equatoriais de alta radiação solar (baixas latitudes), é explicada pelo fator climático da:',
    options: [
      { id: 'a', text: 'maritimidade e continentalidade.', isCorrect: false, distractorRationale: 'Incorreta. Maritimidade regula amplitude térmica, não causaria uma diferença drástica de 11°C na média anual per se nesse contexto específico.' },
      { id: 'b', text: 'latitude astronômica.', isCorrect: false, distractorRationale: 'Incorreta. A latitude de ambas é semelhante (próximas ao Equador).' },
      { id: 'c', text: 'altitude.', isCorrect: true, distractorRationale: 'Correta.' },
      { id: 'd', text: 'ação das correntes marítimas frias em Macapá.', isCorrect: false, distractorRationale: 'Incorreta. Macapá é banhada por correntes quentes do Atlântico equatorial.' },
      { id: 'e', text: 'presença da floresta amazônica em Quito.', isCorrect: false, distractorRationale: 'Incorreta. Quito está na cordilheira, não é dominada pela planície amazônica.' }
    ],
    detailedExplanation: {
      summary: 'Quito está na Cordilheira dos Andes (cerca de 2.800 metros de altitude), o que faz sua temperatura cair significativamente. A cada 1.000 metros de elevação, a temperatura do ar diminui em média 6°C.',
      stepByStep: [
        'Anular a latitude como causa, pois ambas as cidades dividem a mesma linha do Equador (mesma incidência solar).',
        'Recordar que Quito é a capital mais alta do mundo, encravada nos Andes.',
        'Aplicar o conhecimento de que o ar rarefeito das altas altitudes retém menos calor (efeito estufa natural é menor), esfriando o ambiente montanhoso (fator Altitude).'
      ],
      coreConcept: 'Altitude como fator climático capaz de anular o efeito da latitude (baixa latitude/calor).',
      trapWarning: 'No ENEM, a Altitude e a Latitude frequentemente jogam contra si ou a favor de si na determinação dos climas. Lembre-se: quanto mais alto, mais frio; quanto maior a latitude (longe do Equador), mais frio.'
    },
    tags: ['Climatologia', 'Fatores Climáticos', 'Altitude']
  }
];
