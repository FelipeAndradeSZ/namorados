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
  },
  {
    id: "HUM-GEOBIO-011",
    area: "humanas",
    competence: 6,
    skill: 27,
    topic: "Geografia Física",
    subtopic: "Massas de Ar e a Dinâmica Climática no Brasil",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A dinâmica meteorológica brasileira é governada pelo deslocamento sazonal de cinco massas de ar principais: Massa Equatorial Continental (mEc), Massa Equatorial Atlântica (mEa), Massa Tropical Atlântica (mTa), Massa Tropical Continental (mTc) e Massa Polar Atlântica (mPa). Durante o verão austral, a mEc expande seu domínio a partir da Amazônia, impulsionando chuvas convectivas por quase todo o território nacional. No inverno, com o recuo da radiação solar no hemisfério sul, a mPa avança vigorosamente pelo corredor de planícies e depressões do interior sul-americano.",
      source: "Climatologia Dinâmica do Brasil, Ensino Médio, 2024."
    },
    prompt: "No período do inverno, a penetração profunda da Massa Polar Atlântica (mPa) pelo território brasileiro é diretamente responsável por deflagrar:",
    options: [
      { id: "a", text: "chuvas frontais prolongadas no litoral oriental e o fenômeno da friagem com queda térmica abrupta no sudoeste da Amazônia.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "estiagem generalizada e calor escaldante em todas as serras e planaltos da Região Sul.", isCorrect: false, distractorRationale: "A mPa é uma massa fria; sua chegada derruba as temperaturas e causa geadas no Sul, não calor." },
      { id: "c", text: "aquecimento das águas fluviais na bacia amazônica acima de 40 °C.", isCorrect: false, distractorRationale: "A friagem resfria as águas e a atmosfera amazônica, podendo fazer as temperaturas caírem para 12 °C a 15 °C." },
      { id: "d", text: "nevascas constantes e formação permanente de geleiras nas capitais do Nordeste.", isCorrect: false, distractorRationale: "O Nordeste possui clima tropical e semiárido de baixas latitudes, sem condições térmicas para formação de geleiras." },
      { id: "e", text: "extinção temporária de todas as correntes de ventos na troposfera.", isCorrect: false, distractorRationale: "A mPa é caracterizada por frentes de vento sul e sudoeste de intensidade moderada a forte." }
    ],
    detailedExplanation: {
      summary: "A Massa Polar Atlântica (mPa) é a única massa fria atuante no Brasil. No inverno, ela se divide em três ramos: sobe pelo litoral (causando chuvas frontais com a mTa), avança pelas serras do Sul/Sudeste (causando geadas) e sobe pelo interior continental (causando a friagem na Amazônia Ocidental).",
      stepByStep: [
        "Origem da mPa: Subantártica, fria e úmida.",
        "Ramo litorâneo: Encontra o ar quente e úmido tropical no litoral do Sudeste e Nordeste, formando frentes frias e chuvas frontais prolongadas.",
        "Ramo ocidental/continental: Canalizado pelo corredor topográfico entre os Andes e o Planalto Central, atinge Rondônia, Acre e sul do Amazonas, gerando a friagem."
      ],
      coreConcept: "Massa Polar Atlântica (mPa): Frentes Frias, Geadas e o Fenômeno da Friagem",
      trapWarning: "Cuidado: a Massa Equatorial Continental (mEc) é ÚMIDA, sendo a única massa de ar continental do planeta que é úmida (devido à imensa evapotranspiração da floresta amazônica)."
    },
    commonTraps: [
      "Achar que massas continentais são sempre secas (a mEc amazônica é hiperúmida)",
      "Supor que a frente fria nunca alcança o norte do Brasil"
    ],
    tags: ["climatologia", "massas-de-ar", "mpa", "friagem", "frentes-frias"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-012",
    area: "humanas",
    competence: 6,
    skill: 27,
    topic: "Geografia Física",
    subtopic: "Classificação do Relevo Brasileiro por Jurandyr Ross",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A classificação do relevo brasileiro proposta pelo geógrafo Jurandyr Ross no final da década de 1980 substituiu as divisões clássicas anteriores de Aroldo de Azevedo e Aziz Ab'Sáber. Apoiando-se no levantamento cartográfico de imagens de radar obtidas pelo Projeto Radambrasil, Ross dividiu o território em 28 unidades morfoestruturais distribuídas em três categorias macrogeomorfológicas: planaltos, depressões e planícies.",
      source: "ROSS, J. L. S. Geografia do Brasil. São Paulo: EDUSP, 2023."
    },
    prompt: "A principal inovação teórica e conceitual introduzida por Jurandyr Ross na compreensão do relevo brasileiro consistiu em:",
    options: [
      { id: "a", text: "definir e mapear as depressões relativas como formas aplainadas rebaixadas por processos de erosão contínua situadas entre as bacias sedimentares e os núcleos cristalinos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "identificar dobramentos modernos cenozóicos pontilhados de vulcões ativos em atividade no litoral.", isCorrect: false, distractorRationale: "O relevo brasileiro é geologicamente antigo e não possui dobramentos modernos nem vulcanismo ativo." },
      { id: "c", text: "classificar todo o território nacional exclusivamente como uma imensa planície aluvial inundável.", isCorrect: false, distractorRationale: "As planícies verdadeiras ocupam menos de 5% do território brasileiro na classificação de Ross." },
      { id: "d", text: "ignorar a ação do intemperismo e considerar o relevo como uma estrutura estática imutável desde a criação da Terra.", isCorrect: false, distractorRationale: "Ross enfatiza a morfogênese e a dinâmica contínua entre intemperismo, erosão e sedimentação." },
      { id: "e", text: "estabelecer que as montanhas brasileiras ultrapassam habitualmente os 6.000 metros de altitude.", isCorrect: false, distractorRationale: "O ponto mais alto do Brasil é o Pico da Neblina com menos de 3.000 metros (2.995 m)." }
    ],
    detailedExplanation: {
      summary: "A revolução de Jurandyr Ross foi introduzir as DEPRESSÕES (como a Depressão Sertaneja, Depressão Periférica Paulista e Depressão Sanfranciscana), áreas intermediárias desgastadas pela erosão entre planaltos sedimentares e crátons cristalinos.",
      stepByStep: [
        "Planaltos: Relevos residuais onde os processos de erosão superam os de sedimentação (ex.: Planaltos e Chapadas da Bacia do Paraná).",
        "Depressões: Áreas rebaixadas por erosão prolongada circundadas por terrenos mais altos (processo erosivo predominante).",
        "Planícies: Áreas essencialmente planas onde os processos de sedimentação e deposição de matéria superam os de erosão (ex.: Planície do Pantanal, Planície Amazônica ao longo das várzeas fluviais)."
      ],
      coreConcept: "Classificação de Jurandyr Ross: Morfogênese e o Papel das Depressões Relativas",
      trapWarning: "No ENEM, lembre-se: no Brasil não existem depressões absolutas (abaixo do nível do mar); todas as depressões brasileiras são DEPRESSÕES RELATIVAS (abaixo apenas dos terrenos vizinhos)!"
    },
    commonTraps: [
      "Confundir depressão relativa (Brasil) com depressão absoluta (como o Mar Morto)",
      "Achar que as planícies cobrem a maior parte do território brasileiro (são menos de 5%)"
    ],
    tags: ["relevo-brasileiro", "jurandyr-ross", "depressoes", "planaltos", "geomorfologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-013",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia Física",
    subtopic: "Bacias Hidrográficas e Potencial Hidrelétrico no Brasil",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A hidrografia brasileira é uma das mais ricas do mundo, caracterizada pela predominância de drenagem exorreica (rios que deságuam no mar), regime de alimentação pluvial e fozes em estuário. Entretanto, a aptidão econômica para a geração de energia hidrelétrica distribui-se de forma muito desigual: enquanto a Bacia do Rio Paraná concentra o maior parque gerador já instalado no país, a Bacia Amazônica concentra o maior potencial hidrelétrico teórico remanescente.",
      source: "Recursos Hídricos e Matriz Elétrica Brasileira, EPE, 2024."
    },
    prompt: "Essa distinção no aproveitamento hidrelétrico entre as duas bacias decorre de fatores geomorfológicos e ambientais, pois a Bacia do Paraná:",
    options: [
      { id: "a", text: "situa-se em terreno de planalto com desníveis topográficos acentuados próximos aos grandes centros consumidores do Centro-Sul, enquanto a Amazônia é dominada por planícies e baixos platôs, exigindo usinas a fio d'água com extensas linhas de transmissão.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "possui volume d'água cem vezes superior ao da bacia amazônica durante todo o ano.", isCorrect: false, distractorRationale: "O Rio Amazonas tem vazão incomparavelmente maior que o Rio Paraná; o Paraná se destaca pelo desnível de planalto." },
      { id: "c", text: "congela no inverno, o que facilita a retenção de água sob forma de gelo sólido nas barragens.", isCorrect: false, distractorRationale: "Rios brasileiros não congelam; o clima é tropical e subtropical." },
      { id: "d", text: "apresenta drenagem endorreica que deságua em lagos subterrâneos fechados.", isCorrect: false, distractorRationale: "A drenagem da Bacia do Paraná é exorreica, correndo para o Rio da Prata e desembocando no Atlântico." },
      { id: "e", text: "foi totalmente desativada em favor de termoelétricas nucleares instaladas no Pantanal.", isCorrect: false, distractorRationale: "A Bacia do Paraná segue como a espinha dorsal hidrelétrica do Sistema Interligado Nacional (Itaipu, Furnas, etc.)." }
    ],
    detailedExplanation: {
      summary: "A energia hidrelétrica depende de dois fatores: vazão de água (Q) e desnível de queda (H), dados por Potência ≈ Q · H. A Bacia do Paraná alia água e quedas acentuadas de planalto perto das indústrias do Sudeste; já a Amazônia tem volume monumental mas pouco desnível, gerando grandes impactos socioambientais se alagar áreas planas.",
      stepByStep: [
        "Fórmula do potencial: P = densidade · gravidade · Vazão · Altura da queda.",
        "Rios de Planalto (Paraná/São Francisco): Quedas naturais facilitam turbinas sem necessidade de alagar planícies colossais.",
        "Rios de Planície e Baixo Planalto (Amazônia): Para evitar alagamentos monumentais, usam tecnologia a 'fio d'água' (como Belo Monte), cuja geração oscila fortemente entre épocas de seca e cheia."
      ],
      coreConcept: "Geomorfologia Fluvial e Potencial Hidrelétrico: Rios de Planalto vs. Rios de Planície",
      trapWarning: "Lembre-se: Usinas a 'fio d'água' reduzem o tamanho do lago do reservatório, mas tornam a usina vulnerável à sazonalidade da seca dos rios amazônicos."
    },
    commonTraps: [
      "Achar que o Amazonas é o rio com mais hidrelétricas instaladas (é o Paraná)",
      "Esquecer que energia hidrelétrica precisa tanto de vazão volumétrica quanto de desnível do relevo"
    ],
    tags: ["hidrografia", "hidreletricas", "bacia-do-parana", "amazonia", "relevo-de-planalto"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-014",
    area: "humanas",
    competence: 6,
    skill: 27,
    topic: "Geografia Física",
    subtopic: "Chuva Orográfica e o Efeito de 'Sombra de Chuva' no Nordeste",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No Nordeste oriental, os ventos alísios de sudeste carregados de umidade do oceano Atlântico encontram a escarpa oriental do Planalto da Borborema. Ao subir a encosta voltada para o mar (barlavento), o ar se expande adiabaticamente, resfria-se e atinge o ponto de saturação, precipitando intensas chuvas orográficas na Zona da Mata e nas serras úmidas. Ao ultrapassar o topo e descer pela encosta ocidental (sotavento) em direção ao Sertão, a massa de ar aquece-se e torna-se seca.",
      source: "Climatologia Regional Brasileira, 2024."
    },
    prompt: "O fenômeno meteorológico e geomorfológico descrito, caracterizado pelo dessecamento do ar a sotavento de uma barreira montanhosa, é denominado:",
    options: [
      { id: "a", text: "efeito de sombra de chuva (rain shadow), que acentua o déficit hídrico e contribui para a semiaridez do Sertão nordestino.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "efeito estufa antropogênico irreversível.", isCorrect: false, distractorRationale: "O fenômeno é natural e geomorfológico, não um efeito antrópico recente de queima de fósseis." },
      { id: "c", text: "convecção térmica equatorial de cúmulo-nimbos.", isCorrect: false, distractorRationale: "Chuva convectiva é causada pelo aquecimento do solo em dias quentes de verão, não pelo relevo." },
      { id: "d", text: "inversão térmica de inverno em bacias metropolitanas.", isCorrect: false, distractorRationale: "Inversão térmica prende ar frio poluído em centros urbanos no inverno, sem relação com escarpas de relevo." },
      { id: "e", text: "radiação ultravioleta reflexiva de dunas costeiras.", isCorrect: false, distractorRationale: "A sombra de chuva decorre da compressão adiabática do ar descendente, não de reflexão de radiação em dunas." }
    ],
    detailedExplanation: {
      summary: "A chuva de relevo (orográfica) ocorre quando o ar úmido é forçado a subir uma serra. No barlavento chove muito; no sotavento, o ar já desidratado desce comprimindo-se e aquecendo-se, criando uma 'sombra de chuva' seca no interior.",
      stepByStep: [
        "Barlavento: Lado da montanha de onde o vento sopra (úmido, condensação, nuvens e chuvas abundantes).",
        "Subida: Resfriamento adiabático (o ar esfria à medida que sobe).",
        "Sotavento: Lado protegido do vento (o ar desce seco e se aquece por compressão adiabática).",
        "Consequência regional: O Planalto da Borborema atua como barreira parcial de umidade, intensificando a semiaridez do Sertão nordestino."
      ],
      coreConcept: "Chuva Orográfica, Barlavento, Sotavento e Sombra de Chuva (Rain Shadow)",
      trapWarning: "Lembre-se: 'Barlavento' é onde o vento VEM e CHOVE; 'Sotavento' é onde o vento VAI e FICA SECO."
    },
    commonTraps: [
      "Inverter barlavento e sotavento",
      "Achar que o Planalto da Borborema é a única causa da seca do Sertão (a circulação atmosférica das células de Hadley e subsidência de ar também são determinantes)"
    ],
    tags: ["chuva-orografica", "barborema", "semiarido", "sombra-de-chuva", "relevo-e-clima"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-015",
    area: "humanas",
    competence: 6,
    skill: 27,
    topic: "Geografia Física",
    subtopic: "Intemperismo e Pedogênese: Mares de Morros vs. Caatinga",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A formação e o desenvolvimento dos solos (pedogênese) refletem a ação combinada de cinco fatores: rocha-mãe, clima, relevo, organismos vivos e tempo. Nas encostas úmidas da Serra do Mar (Mares de Morros), o intemperismo químico predomina amplamente, gerando solos profundos (latossolos e argissolos) e mantos de intemperismo que ultrapassam dezenas de metros. Já nas depressões interplanálticas do Semiárido (Caatinga), as precipitações escassas e a intensa insolação favorecem a atuação do intemperismo físico mecânico.",
      source: "Pedologia e Geomorfologia Tropical, Cadernos de Solos, 2024."
    },
    prompt: "Como decorrência do predomínio do intemperismo físico mecânico no Semiárido brasileiro, os solos característicos desse domínio são predominantemente:",
    options: [
      { id: "a", text: "rasos, pedregosos (litólicos) e ricos em minerais primários não lixiviados, com baixa taxa de matéria orgânica e vulnerabilidade à salinização quando irrigados incorretamente.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "hiperprofundos e ácidos, com mais de vinte metros de argila lavada e desprovida de quaisquer sais minerais.", isCorrect: false, distractorRationale: "Solos profundos e lixiviados (latossolos) são típicos de climas chuvosos e quentes, não de áreas semiáridas." },
      { id: "c", text: "formados inteiramente por cinzas vulcânicas recentes com fertilidade orgânica incomparável.", isCorrect: false, distractorRationale: "O Brasil não possui atividade vulcânica recente no período geológico atual." },
      { id: "d", text: "compostos exclusivamente de gelo fóssil permafrost resistente ao calor.", isCorrect: false, distractorRationale: "Permafrost só existe nas regiões polares e tundras de alta latitude." },
      { id: "e", text: "impossibilitados de sustentar qualquer espécie botânica adaptada às secas.", isCorrect: false, distractorRationale: "A Caatinga possui riquíssima vegetação xerófila e endêmica plenamente adaptada a esses solos." }
    ],
    detailedExplanation: {
      summary: "Em climas chuvosos (Mares de Morros/Amazônia), a água abundante dissolve e lava os minerais (intemperismo químico e lixiviação), criando solos profundos e lixiviados. No semiárido, a falta de água faz com que a dilatação térmica rache a rocha (intemperismo físico), deixando solos rasos, cheios de pedras, porém mineralmente ricos.",
      stepByStep: [
        "Intemperismo químico: Requer água líquida e calor para reações de oxidação, carbonatação e hidrólise.",
        "Intemperismo físico (termoclastia): Fragmentação mecânica pela variação de temperatura entre dia e noite.",
        "Solos da Caatinga: Rasos e pedregosos (neossolos litólicos), porém com muitos sais minerais que não foram 'lavados' pela chuva.",
        "Risco da salinização: Quando esses solos minerais são irrigados com drenagem ineficiente sob sol escaldante, a água evapora rapidamente e acumula sais tóxicos na superfície."
      ],
      coreConcept: "Intemperismo Químico vs. Físico e Solos Tropicais Brasileiros",
      trapWarning: "No ENEM, atente para o risco da SALINIZAÇÃO do solo no Semiárido: os solos já têm muitos sais minerais naturais; a irrigação mal planejada evapora rápido e 'salga' a terra, inutilizando-a."
    },
    commonTraps: [
      "Achar que solos rasos e pedregosos são quimicamente pobres em minerais",
      "Ignorar o perigo da salinização decorrente da evapotranspiração acelerada no Nordeste"
    ],
    tags: ["intemperismo", "pedogenese", "solos", "caatinga", "salinizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-016",
    area: "humanas",
    competence: 6,
    skill: 27,
    topic: "Geografia Física",
    subtopic: "O Fenômeno da Friagem no Sudoeste Amazônico",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em municípios do Acre, de Rondônia e do sul do Amazonas, é comum que entre os meses de maio e agosto os termômetros registrem quedas térmicas abruptas, despencando de médias de 32 °C para marcas inferiores a 14 °C em um intervalo de menos de vinte e quatro horas, acompanhadas de ventos constantes de quadrante sul. A população local denomina essa manifestação climática atípica de 'friagem'.",
      source: "Cadernos de Meteorologia Tropical do Brasil, 2024."
    },
    prompt: "A ocorrência da friagem no sudoeste da Amazônia brasileira é possibilitada pela combinação entre:",
    options: [
      { id: "a", text: "o avanço meridional da Massa Polar Atlântica (mPa) e a existência de um corredor de relevo plano e rebaixado pelas bacias do Prata e Paraguai, canalizado entre os Andes e o Planalto Central.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a erupção de cinzas vulcânicas nos planaltos da Guiana Francesa que bloqueiam o calor solar.", isCorrect: false, distractorRationale: "O escudo das Guianas não tem atividade vulcânica; o resfriamento é de origem polar sul." },
      { id: "c", text: "o congelamento repentino do Rio Amazonas em toda a sua extensão fluvial navegável.", isCorrect: false, distractorRationale: "O Rio Amazonas nunca congela; a temperatura cai na atmosfera, mas permanece positiva." },
      { id: "d", text: "a atração gravitacional excepcional da Lua durante o solstício de verão.", isCorrect: false, distractorRationale: "As marés astronômicas lunares influenciam o oceano, não ondas polares de ar no interior continental." },
      { id: "e", text: "a ausência completa de florestas no estado do Acre e de Rondônia.", isCorrect: false, distractorRationale: "A região abriga densa floresta tropical perenifólia." }
    ],
    detailedExplanation: {
      summary: "A friagem é a invasão de ar polar antártico no coração equatorial da Amazônia. Isso só acontece porque o relevo central da América do Sul é plano e rebaixado (Planície do Chaco e Pantanal), formando uma 'avenida' sem montanhas que permite à Massa Polar Atlântica avançar diretamente até a Amazônia Ocidental.",
      stepByStep: [
        "Origem: Massa Polar Atlântica (mPa) deslocando-se no inverno do hemisfério sul.",
        "Corredor geográfico: Cordilheira dos Andes a oeste e Planalto Central a leste formam uma calha de canalização do vento sul.",
        "Impacto térmico: Queda de até 15 °C a 20 °C na temperatura da Amazônia Ocidental, provocando sensação de frio intenso na população habituada ao calor equatorial."
      ],
      coreConcept: "A Friagem: Canalização da Massa Polar Atlântica pelo Relevo Sul-Americano",
      trapWarning: "No ENEM, observe como o relevo influencia a circulação atmosférica: a ausência de barreiras leste-oeste no interior da América do Sul permite que massas polares alcancem latitudes equatoriais!"
    },
    commonTraps: [
      "Achar que a friagem é um fenômeno de radiação cósmica ou de altitude de montanhas",
      "Ignorar o papel da Massa Polar Atlântica (mPa) como o motor térmico do evento"
    ],
    tags: ["friagem", "amazonia", "mpa", "climatologia", "relevo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-017",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia Física",
    subtopic: "Estrutura Geológica do Brasil e Recursos Minerais",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A crosta terrestre brasileira é tectonicamente estável, localizada no centro da Placa Sul-Americana e desprovida de zonas ativas de subducção ou choque de placas. Do ponto de vista morfoestrutural, o território reparte-se basicamente em dois domínios geológicos: os Escudos Cristalinos ou Crátons (formações antigas do Pré-Cambriano, cobrindo cerca de 36% do país) e as Bacias Sedimentares (depressões preenchidas por detritos sedimentares do Fanerozoico, cobrindo cerca de 64%).",
      source: "Geologia do Brasil e Recursos Minerais Estratégicos, CPRM, 2024."
    },
    prompt: "Essa arquitetura geológica determina diretamente a distribuição espacial das riquezas minerais brasileiras, de modo que:",
    options: [
      { id: "a", text: "os minerais metálicos (como ferro, manganês, bauxita e ouro) concentram-se nos escudos cristalinos pré-cambrianos, enquanto os combustíveis fósseis (como petróleo, gás natural e carvão) encontram-se nas bacias sedimentares.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "as reservas de petróleo e gás estão localizadas exclusivamente no interior de rochas magmáticas graníticas intrusivas.", isCorrect: false, distractorRationale: "Petróleo exige rochas sedimentares porosas geradoras e reservatórios de matéria orgânica fóssil." },
      { id: "c", text: "o minério de ferro do Quadrilátero Ferrífero formou-se durante a era quaternária recente do Cenozoico.", isCorrect: false, distractorRationale: "O minério de ferro brasileiro é pré-cambriano, tendo mais de 2 bilhões de anos de antiguidade." },
      { id: "d", text: "as bacias sedimentares são compostas unicamente por diamantes em estado bruto e platina.", isCorrect: false, distractorRationale: "Bacias sedimentares contêm fósseis, calcário, folhelhos, arenitos e hidrocarbonetos." },
      { id: "e", text: "não há carvão mineral nem petróleo em nenhuma bacia geológica do território brasileiro.", isCorrect: false, distractorRationale: "O Brasil possui grandes jazidas petrolíferas no Pré-Sal e carvão mineral na Bacia do Paraná (sul do país)." }
    ],
    detailedExplanation: {
      summary: "Regra de ouro da geologia para o ENEM: Escudos Cristalinos (rochas magmáticas e metamórficas antigas) = MINERAIS METÁLICOS (ferro de Carajás, manganês de Urucum, bauxita do Trombetas). Bacias Sedimentares (acúmulo de sedimentos e restos orgânicos) = COMBUSTÍVEIS FÓSSEIS (petróleo na Bacia de Santos e Campos, carvão na Bacia do Paraná).",
      stepByStep: [
        "Escudos Cristalinos / Crátons: Idade Arqueozoica e Proterozoica. Ouro, ferro (itabarito), níquel, cobre e bauxita.",
        "Bacias Sedimentares: Paleozoica, Mesozoica e Cenozoica. Camadas sedimentares acumuladas com restos de algas marinhas sob pressão e temperatura geram petróleo e gás.",
        "Conclusão: A história geológica define a vocação extrativa de cada região brasileira."
      ],
      coreConcept: "Geologia do Brasil: Escudos Cristalinos (Minerais Metálicos) vs. Bacias Sedimentares (Combustíveis Fósseis)",
      trapWarning: "Cuidado com o Pré-Sal: embora a rocha que armazena possa ser carbonática (calcário microbiano), ela está inserida em uma imensa Bacia Sedimentar marinha!"
    },
    commonTraps: [
      "Achar que minério de ferro e ouro se formam em bacias sedimentares",
      "Confundir escudo cristalino com dobramento moderno (que não existe no Brasil)"
    ],
    tags: ["geologia", "escudos-cristalinos", "bacias-sedimentares", "petroleo", "minerio-de-ferro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-018",
    area: "humanas",
    competence: 6,
    skill: 29,
    topic: "Geografia Física",
    subtopic: "Mares de Morros e Movimentos de Massa em Encostas Serranas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Domínio dos Mares de Morros, que se estende ao longo da fachada atlântica do Sudeste e Sul brasileiro, é marcado por um relevo mamelonar erodido ('meias-laranjas') com encostas de alta declividade na Serra do Mar e Mantiqueira. A combinação entre mantos espessos de solo residual (intemperismo químico avançado), pluviosidade concentrada no verão (chuvas convectivas e orográficas) e desmatamento das encostas gera condições propícias para movimentos gravitacionais de massa (escorregamentos e corridas de lama).",
      source: "Geomorfologia de Encostas e Riscos Geológicos no Brasil, 2024."
    },
    prompt: "O gatilho físico determinante que deflagra os grandes deslizamentos de terra nas encostas serranas do Sudeste durante a estação chuvosa é:",
    options: [
      { id: "a", text: "a saturação hídrica dos poros do solo pela água pluvial, que eleva a pressão neutra, reduz o atrito e a coesão interna entre as partículas e provoca a ruptura na interface com a rocha cristalina impermeável.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a ocorrência de abalos sísmicos de magnitude superior a 9 na escala Richter gerados no centro do estado de São Paulo.", isCorrect: false, distractorRationale: "O Brasil não possui epicentros de sismos de altíssima magnitude; a causa é hidrológica pluvial." },
      { id: "c", text: "a solidificação do solo provocada por congelamentos glaciais em temperaturas de 50 graus abaixo de zero.", isCorrect: false, distractorRationale: "O fenômeno ocorre no pico do verão chuvoso tropical (dezembro a março), com temperaturas altas." },
      { id: "d", text: "o ressecamento extremo que converte o solo fértil em pó eólico impulsionado por tempestades de areia do deserto.", isCorrect: false, distractorRationale: "O fator deflagrador é exatamente o excesso torrencial de água das chuvas, não a seca." },
      { id: "e", text: "a ausência de qualquer força de gravidade atuando sobre as vertentes montanhosas.", isCorrect: false, distractorRationale: "A gravidade é o motor primário do movimento de massa das encostas em declive." }
    ],
    detailedExplanation: {
      summary: "Deslizamentos de encosta no verão brasileiro resultam da água acumulada: as chuvas infiltram até que o solo fica encharcado (saturado). A água nos poros empurra os grãos de terra (pressão neutra), o solo perde sustentação e desliza encosta abaixo sobre a rocha lisa do fundo.",
      stepByStep: [
        "Fatores condicionantes naturais: Declividade acentuada, solo profundo e rocha cristalina impermeável subjacente.",
        "Fator deflagrador: Chuvas intensas e prolongadas que saturam o manto de alteração.",
        "Fator antrópico agravante: Ocupação desordenada de morros, cortes irregulares no talude, lançamento de águas servidas sem drenagem e retirada da cobertura vegetal original."
      ],
      coreConcept: "Movimentos Gravitacionais de Massa: Saturação de Solo, Coesão e Risco Geológico",
      trapWarning: "No ENEM, enfatize que a vegetação nativa com raízes profundas ancora o solo e reduz a velocidade da infiltração; o desmatamento acelera a saturação e os escorregamentos."
    },
    commonTraps: [
      "Achar que o deslizamento ocorre por sismos ou terremotos no Brasil",
      "Ignorar o papel da água subterrânea saturando a interface solo-rocha"
    ],
    tags: ["movimentos-de-massa", "deslizamentos", "mares-de-morros", "serra-do-mar", "riscos-ambientais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-019",
    area: "humanas",
    competence: 6,
    skill: 27,
    topic: "Geografia Física",
    subtopic: "Classificação Genética das Chuvas: Convectivas, Frontais e Orográficas",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "As precipitações pluviométricas resultam da ascensão, resfriamento e condensação do vapor d'água na atmosfera. De acordo com o mecanismo que força a elevação do ar, a meteorologia classifica as chuvas em três tipos fundamentais: convectivas, frontais e orográficas.",
      source: "Manual Didático de Meteorologia e Climatologia, 2024."
    },
    prompt: "A correspondência correta entre a dinâmica formadora e o tipo de precipitação pluviométrica predominante é expressa em:",
    options: [
      { id: "a", text: "Chuva Convectiva: forte aquecimento da superfície pelo Sol provocando subida rápida de ar quente e úmido com formação de nuvens cúmulo-nimbos e tempestades intensas de curta duração (típica chuva de verão).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Chuva Frontal: decorrente unicamente da colisão de ondas sonoras no topo de cânions rochosos desérticos.", isCorrect: false, distractorRationale: "Chuva frontal decorre do choque de duas massas de ar com temperaturas e umidades distintas (ex.: mPa e mTa)." },
      { id: "c", text: "Chuva Orográfica: gerada pelo resfriamento nuclear de átomos de hidrogênio nas planícies marítimas.", isCorrect: false, distractorRationale: "Chuva orográfica decorre da barreira mecânica do relevo que força a subida e condensação do ar." },
      { id: "d", text: "Chuva Convectiva: precipitação contínua e uniforme que dura semanas ininterruptas sobre continentes inteiros.", isCorrect: false, distractorRationale: "Chuvas contínuas e amplas são tipicamente frontais; chuvas convectivas são localizadas, torrenciais e rápidas." },
      { id: "e", text: "Chuva Orográfica: causada exclusivamente pela rotação da Terra sem qualquer interferência de serras ou montanhas.", isCorrect: false, distractorRationale: "O prefixo 'oro' significa relevo/montanha; depende estritamente da topografia." }
    ],
    detailedExplanation: {
      summary: "Os 3 tipos clássicos de chuvas no ENEM: 1) Convectiva ('chuva de verão', ar quente sobe rápido, tempestade à tarde com raios e trovoadas); 2) Frontal (encontro de massa fria com quente, chuva persistente e contínua de vários dias); 3) Orográfica ('chuva de relevo', nuvem sobe a serra e deságua no barlavento).",
      stepByStep: [
        "Convectiva: Aquecimento térmico basal ⟹ convecção vertical ⟹ Cumulonimbus (pancada de chuva à tarde).",
        "Frontal: Zona de transição entre massas de ar de densidades diferentes (frente fria avançando sobre ar quente).",
        "Orográfica: Vento úmido encontra obstáculo de relevo e sobe condensando."
      ],
      coreConcept: "Mecanismos de Precipitação Pluviométrica: Convecção, Frentes e Relevo",
      trapWarning: "No ENEM, chuvas convectivas são frequentemente associadas a ilhas de calor e alagamentos rápidos de fim de tarde nas capitais brasileiras."
    },
    commonTraps: [
      "Confundir chuva frontal (longa e abrangente) com chuva convectiva (rápida, localizada e intensa)",
      "Esquecer a relação da chuva convectiva com nuvens de grande desenvolvimento vertical (Cumulonimbus)"
    ],
    tags: ["chuvas-convectivas", "chuvas-frontais", "chuvas-orograficas", "climatologia", "meteorologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-020",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia Física",
    subtopic: "O Bioma Pantanal e a Dinâmica do 'Pulso de Inundação'",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Instalado em uma vasta depressão tectônica de sedimentação quaternária na Bacia do Alto Paraguai, o Pantanal é a maior planície úmida contínua do planeta. Sua ecologia, biodiversidade e dinâmica socioeconômica são regidas pelo 'pulso de inundação'. Devido à declividade extremamente suave do terreno (com desníveis de apenas alguns centímetros por quilômetro), as águas das chuvas de verão caídas nos planaltos circundantes demoram meses para drenar pelo leito sinuoso do Rio Paraguai, fazendo com que o pico da inundação na planície ocorra em pleno inverno seco dos planaltos vizinhos.",
      source: "Ecologia do Pantanal e Geomorfologia Fluvial, Embrapa Pantanal, 2024."
    },
    prompt: "Essa lentidão hidrológica e a alternância periódica entre vazante e enchente configuram um ambiente no qual:",
    options: [
      { id: "a", text: "a deposição de sedimentos e nutrientes aluviais durante a cheia renova a fertilidade natural das pastagens nativas, permitindo a prática secular de pecuária bovina extensiva adaptada ao calendário das águas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a vida biológica foi totalmente exterminada devido ao congelamento eterno das lagoas marginais.", isCorrect: false, distractorRationale: "O Pantanal possui uma das maiores biomassas de fauna selvagem das Américas e não sofre congelamento." },
      { id: "c", text: "todas as espécies animais habitam permanentemente túneis subterrâneos blindados sem emergir à superfície.", isCorrect: false, distractorRationale: "A fauna desloca-se sazonalmente entre cordilheiras de terra firme e áreas alagadas." },
      { id: "d", text: "os rios secam permanentemente de forma irreversível e transformam o bioma em um deserto de dunas rochosas.", isCorrect: false, distractorRationale: "O ciclo é hidrologicamente renovável e periódico de cheia e vazante todos os anos." },
      { id: "e", text: "a declividade abrupta de despenhadeiros provoca cachoeiras gigantescas em toda a planície central.", isCorrect: false, distractorRationale: "O relevo do Pantanal é uma planície de declividade quase nula, sem cachoeiras no seu leito interior." }
    ],
    detailedExplanation: {
      summary: "O Pantanal opera como uma imensa esponja: a planície quase perfeitamente plana retarda o escoamento das águas. Quando o rio transborda, fertiliza o solo com matéria orgânica. Quando seca (vazante), brotam pastagens nativas ricas onde o gado pantaneiro pasta há mais de dois séculos em harmonia ecológica tradicional.",
      stepByStep: [
        "Geomorfologia: Bacia sedimentar afundada entre planaltos sedimentares e cristalinos.",
        "Declividade ínfima: Desnível de 1 a 2 cm por quilômetro no sentido norte-sul; a água escoa lentamente, inundando até 80% da área durante a cheia.",
        "Pulso de inundação: Alternância rítmica anual entre fase aquática (cheia) e terrestre (vazante).",
        "Pecuária tradicional: Pecuária extensiva em pastos nativos adaptada às migrações do rebanho para áreas mais altas (cordilheiras e capões) durante as cheias."
      ],
      coreConcept: "Pulso de Inundação do Pantanal: Geomorfologia de Planície e Adaptação Socioecológica",
      trapWarning: "No ENEM, atente para as ameaças contemporâneas ao Pantanal: drenagem artificial para lavouras de soja, assoreamento do Rio Taquari decorrente do desmatamento nos planaltos circundantes e queimadas criminosas durante estiagens prolongadas."
    },
    commonTraps: [
      "Achar que o Pantanal tem relevo acidentado com corredeiras e quedas d'água",
      "Ignorar o atraso sazonal entre o período de chuva nos planaltos e a cheia máxima na planície"
    ],
    tags: ["pantanal", "pulso-de-inundacao", "relevo-de-planicie", "rio-paraguai", "pecuaria-pantaneira"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-021",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia Física",
    subtopic: "Massas de Ar no Brasil e o Fenômeno da Friagem",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante os meses de outono e inverno no Hemisfério Sul, a Massa Polar Atlântica (mPa) intensifica seu deslocamento a partir do sul do continente. Quando avança canalizada pela calha da Bacia do Paraná e pelas planícies centrais sul-americanas, a mPa consegue atingir os estados de Rondônia, Acre e sul do Amazonas, provocando quedas abruptas de temperatura de mais de 15 °C em menos de 24 horas em plena floresta tropical.",
      source: "Climatologia Dinâmica do Brasil e Circulação Atmosférica"
    },
    prompt: "O fenômeno climático regional descrito na Amazônia Ocidental e as características termohigrométricas da massa responsável são, respectivamente:",
    options: [
      { id: "a", text: "a friagem, ocasionada pela incursão da Massa Polar Atlântica (mPa), de natureza fria e originalmente úmida.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o El Niño canônico, impulsionado pela Massa Equatorial Continental (mEc), que é estritamente quente e seca.", isCorrect: false, distractorRationale: "A mEc é quente e extremamente ÚMIDA (alimentada pela evapotranspiração amazônica), e não explica a queda de temperatura." },
      { id: "c", text: "a inversão térmica costeira, gerada exclusivamente pela passagem da Massa Tropical Continental (mTc) do Chaco.", isCorrect: false, distractorRationale: "A mTc é quente e seca, atuando no bloqueio atmosférico do Centro-Oeste no inverno, não causando quedas de temperatura." },
      { id: "d", text: "a chuva orográfica perene decorrente do choque térmico de tufões subtropicais na Cordilheira dos Andes.", isCorrect: false, distractorRationale: "O Brasil não sofre tufões e o fenômeno da friagem decorre do avanço frontal da massa polar pelo interior continental." },
      { id: "e", text: "o congelamento permanente dos rios de água preta por granizo polar na foz do Rio Amazonas.", isCorrect: false, distractorRationale: "A friagem derruba a temperatura para cerca de 12 °C a 16 °C por alguns dias, nunca congelando rios equatoriais." }
    ],
    detailedExplanation: {
      summary: "A friagem é a queda súbita e acentuada de temperatura no sudoeste da Amazônia (Acre, Rondônia, sul do Amazonas e Mato Grosso) provocada pela invasão da Massa Polar Atlântica (mPa). Como o relevo da América do Sul é aberto no interior (planícies platina e pantaneira) sem barreiras montanhosas Leste-Oeste, o ar polar frio e denso avança como um 'corredor' até a bacia amazônica.",
      stepByStep: [
        "1. A Massa Polar Atlântica (mPa) nasce nas altas latitudes austrais; é uma massa FRIA e originalmente ÚMIDA.",
        "2. No inverno, a mPa ganha força e bifurca-se ao atingir a costa brasileira:",
        "   - Ramo litorâneo: causa chuvas frontais no litoral do Nordeste e resfriamento na costa Sudeste.",
        "   - Ramo continental: sobe pelas depressões e planícies do interior (Paraguai/Pantanal/Madeira).",
        "3. Ao chegar à Amazônia Ocidental, o ar polar expulsa o ar quente e úmido local, despencando a temperatura em poucas horas (fenômeno conhecido como FRIAGEM).",
        "4. A população amazônica vivencia temperaturas atípicas entre 10 °C e 16 °C que duram de 2 a 4 dias."
      ],
      coreConcept: "Climatologia Regional: Incursão da Massa Polar Atlântica (mPa) e o Fenômeno da Friagem",
      trapWarning: "Cuidado: lembre-se de que a Massa Equatorial Continental (mEc) na Amazônia é a grande EXCEÇÃO mundial: quase todas as massas continentais do planeta são secas, mas a mEc é HIPERÚMIDA por causa da evapotranspiração colossal da floresta!"
    },
    commonTraps: [
      "Achar que a Amazônia nunca registra temperaturas amenas ou frias",
      "Classificar a massa equatorial continental (mEc) como seca (ela é extremamente úmida)"
    ],
    tags: ["friagem", "massas-de-ar", "mpa", "climatologia-brasileira", "amazonia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-022",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia Física",
    subtopic: "Zona de Convergência do Atlântico Sul (ZCAS) e Rios Voadores",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No verão brasileiro, os telejornais frequentemente noticiam períodos de chuvas torrenciais contínuas que perduram por quatro a sete dias ininterruptos sobre os estados de Minas Gerais, Rio de Janeiro, Espírito Santo, São Paulo e Goiás, provocando cheias fluviais e deslizamentos em áreas serranas. Meteorologistas apontam que a precipitação prolongada é sustentada pela atuação da Zona de Convergência do Atlântico Sul (ZCAS).",
      source: "Meteorologia Tropical e Dinâmica das Precipitações de Verão"
    },
    prompt: "A ZCAS caracteriza-se fisicamente por uma banda semiestacionária de nebulosidade e chuvas orientada no sentido Noroeste-Sudeste, alimentada primordialmente pelo(a):",
    options: [
      { id: "a", text: "transporte maciço de vapor d'água proveniente da Bacia Amazônica (os chamados 'rios voadores'), canalizado pela barreira orográfica dos Andes em direção ao Centro-Oeste e Sudeste do Brasil.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "chegada de frentes frias antárticas secas que congelam as nuvens sobre o Oceano Atlântico.", isCorrect: false, distractorRationale: "A ZCAS é um fenômeno de verão com massas de ar quentes e extremamente úmidas, sem congelamento polar." },
      { id: "c", text: "evaporação exclusiva da água dos reservatórios artificiais do semiárido nordestino.", isCorrect: false, distractorRationale: "O semiárido sofre estiagem relativa no período e o volume de vapor d'água é gerado pela floresta amazônica equatorial." },
      { id: "d", text: "dissolução total da camada de ozônio sobre as capitais litorâneas pelo calor solar.", isCorrect: false, distractorRationale: "A ZCAS é uma dinâmica convectiva meteorológica de circulação atmosférica troposférica ordinária." },
      { id: "e", text: "bloqueio permanente que impede qualquer gota de chuva de atingir as áreas agrícolas de Minas Gerais.", isCorrect: false, distractorRationale: "A ZCAS gera o oposto: chuvas abundantes e volumosas contínuas por vários dias consecutivos." }
    ],
    detailedExplanation: {
      summary: "A ZCAS (Zona de Convergência do Atlântico Sul) é o principal sistema meteorológico causador de chuvas volumosas no verão do Centro-Oeste e Sudeste brasileiro. Ela conecta a convecção úmida da Amazônia ao Oceano Atlântico subtropical, formando um canal contínuo de vapor ('rios voadores') que mantém o tempo nublado e chuvoso por dias seguidos.",
      stepByStep: [
        "1. Bomba biótica e rios voadores: A floresta amazônica evapotranspira cerca de 20 trilhões de litros de água por dia na atmosfera.",
        "2. Barreira física dos Andes: Os ventos alísios empurram essa massa úmida para o oeste; ao bater na muralha dos Andes, o fluxo de vapor é desviado para o sul/sudeste.",
        "3. Formação da ZCAS: No verão, esse fluxo encontra a umidade do Atlântico e frentes frias remanescentes, alinhando uma faixa de nuvens espessas da Amazônia até o Sudeste (sentido NO-SE).",
        "4. Impactos: Abastece os reservatórios hidrelétricos (Cantareira, Furnas) e irriga lavouras de grãos, mas pode deflagrar enchentes e desmoronamentos urbanos severos se persistir por muitos dias."
      ],
      coreConcept: "Zona de Convergência do Atlântico Sul (ZCAS): Rios Voadores e Regime de Chuvas de Verão",
      trapWarning: "No ENEM: o desmatamento da Amazônia afeta DIRETAMENTE as chuvas no Sudeste! Menos árvores na Amazônia = rios voadores mais fracos = ZCAS enfraquecida = secas no Sistema Cantareira e nas lavouras do Centro-Sul."
    },
    commonTraps: [
      "Achar que as chuvas de verão do Sudeste vêm apenas do Oceano Atlântico (a Amazônia fornece a maior fatia de vapor)",
      "Confundir ZCAS (Noroeste-Sudeste no verão) com ZCIT (Zona de Convergência Intertropical na faixa equatorial no outono)"
    ],
    tags: ["zcas", "rios-voadores", "climatologia", "amazonia", "chuvas-de-verao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-023",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia Física",
    subtopic: "Classificação do Relevo Brasileiro por Jurandyr Ross",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na década de 1990, o geógrafo Jurandyr Ross elaborou a mais completa classificação geomorfológica do território brasileiro, utilizando dados aerofotogramétricos e de radar do Projeto Radambrasil. O modelo divide o relevo do país em 28 macrocompartimentos agrupados em três grandes categorias morfoestruturais: Planaltos, Depressões e Planícies.",
      source: "Jurandyr Ross, Geografia do Brasil e Geomorfologia Estrutural"
    },
    prompt: "De acordo com os critérios genéticos e morfoclimáticos estabelecidos por Ross, as principais características estruturais do relevo brasileiro consistem no(a):",
    options: [
      { id: "a", text: "predomínio de planaltos e depressões modelados por processos erosivos antigos, ausência de dobramentos modernos cenozóicos e planícies restritas a faixas estreitas fluviais e litorâneas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "domínio de imponentes cadeias de dobramentos modernos com vulcões ativos e frequentes terremotos de alta magnitude.", isCorrect: false, distractorRationale: "O Brasil está no centro estável da Placa Sul-Americana, sem dobramentos modernos, vulcões ativos ou abalos sísmicos graves." },
      { id: "c", text: "cobertura do território por mais de 80% de planícies aluviais perfeitamente planas e sem qualquer escarpa de serra.", isCorrect: false, distractorRationale: "Planícies representam menos de 10% do território nacional na classificação de Ross; planaltos e depressões predominam." },
      { id: "d", text: "inexistência de bacias sedimentares, sendo o país formado unicamente por escudos cristalinos do período Quaternário.", isCorrect: false, distractorRationale: "Cerca de 64% do território é constituído por grandes bacias sedimentares paleozóicas e mesozóicas." },
      { id: "e", text: "presença de fiordes glaciais profundos escavados por geleiras ativas nas serras do litoral paulista.", isCorrect: false, distractorRationale: "O relevo brasileiro é modelado por intemperismo químico e biológico tropical úmido, sem glaciações recentes." }
    ],
    detailedExplanation: {
      summary: "A classificação de Jurandyr Ross inovou ao introduzir a categoria das DEPRESSÕES (áreas rebaixadas por erosão em relação aos planaltos vizinhos). O relevo brasileiro assenta-se sobre crátons antigos (escudos cristalinos précambrianos, ~36%) e bacias sedimentares fanerozóicas (~64%). Por estar no centro de placa tectônica, não há dobramentos modernos (como Andes ou Himalaia). O relevo é antigo, desgastado e de altitudes modestas (pico mais alto: Neblina, ~2.995 m).",
      stepByStep: [
        "1. Planaltos (11 unidades): Relevos com superfícies irregulares onde os processos de EROSÃO superam os de sedimentação.",
        "2. Depressões (11 unidades): Superfícies aplainadas geradas por erosão prolongada nas bordas de bacias sedimentares e crátons, mais baixas que os relevos ao redor.",
        "3. Planícies (6 unidades): Áreas planas recentes (quaternárias) onde a SEDIMENTAÇÃO supera a erosão (ex: Planície do Pantanal, Planície Amazônica ao longo da calha dos rios, Planície Litorânea).",
        "4. Estabilidade tectônica: Sem vulcanismo ativo, sem orogênese cenozóica recente e com predomínio do intemperismo químico das águas tropicais."
      ],
      coreConcept: "Classificação de Jurandyr Ross: Planaltos, Depressões e Planícies e Estabilidade Geológica",
      trapWarning: "Pegadinha clássica no ENEM: A Amazônia NÃO é uma imensa planície! Na classificação de Ross, a maior parte da Amazônia é formada por PLANALTOS e DEPRESSÕES; a planície restringe-se à faixa ribeirinha estreita ao longo do Rio Amazonas e afluentes."
    },
    commonTraps: [
      "Achar que a Floresta Amazônica inteira é uma planície de sedimentação",
      "Confundir a classificação de Ross (28 unidades com depressões) com a de Aroldo de Azevedo ou Aziz Ab'Sáber"
    ],
    tags: ["jurandyr-ross", "relevo-brasileiro", "geomorfologia", "planaltos-e-depressoes", "geologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-024",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia Física",
    subtopic: "Bacias Hidrográficas e o Potencial Hidrelétrico Brasileiro",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A matriz elétrica brasileira é historicamente dependente da geração hidrelétrica, que responde por mais de 60% de toda a energia elétrica consumida no país. A distribuição do potencial hidrelétrico e da capacidade instalada é marcadamente assimétrica entre as bacias hidrográficas nacionais, contrapondo o Sudeste densamente urbanizado e industrializado à fronteira amazônica.",
      source: "Agência Nacional de Energia Elétrica (ANEEL) e Planejamento Energético Nacional"
    },
    prompt: "Em relação ao perfil hidrográfico e à exploração energética das bacias brasileiras, constata-se que:",
    options: [
      { id: "a", text: "a Bacia do Paraná detém a maior capacidade instalada e geração hidrelétrica em operação (com destaque para Itaipu), enquanto a Bacia Amazônica concentra o maior potencial hidrelétrico bruto remanescente, cuja exploração impõe severos desafios socioambientais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a Bacia do Rio São Francisco é totalmente desprovida de represas e cachoeiras aproveitáveis para geração de eletricidade.", isCorrect: false, distractorRationale: "O São Francisco abriga grandes usinas como Sobradinho, Paulo Afonso, Xingó e Três Marias." },
      { id: "c", text: "a Bacia do Paraguai gera mais de 90% de toda a eletricidade do parque fabril da Região Sudeste.", isCorrect: false, distractorRationale: "O Pantanal tem baixíssimo potencial hidrelétrico por ser planície plana com declividade quase nula." },
      { id: "d", text: "todos os rios brasileiros possuem regime hidrográfico nival sustentado pelo derretimento de geleiras de alta montanha.", isCorrect: false, distractorRationale: "Quase todos os rios brasileiros têm regime estritamente pluvial tropical (apenas o Rio Amazonas tem regime misto pluvio-nival na nascente andina peruana)." },
      { id: "e", text: "a construção de usinas hidrelétricas a fio d'água na Amazônia não gera qualquer alteração no modo de vida de povos indígenas.", isCorrect: false, distractorRationale: "Usinas como Belo Monte (Rio Xingu) causaram drásticos impactos na ictiofauna e terras indígenas locais." }
    ],
    detailedExplanation: {
      summary: "O Brasil possui rios de planalto com elevado potencial hidráulico natural. A Bacia do Paraná (Sudeste/Sul) é o coração hidrelétrico do país, próxima aos grandes centros consumidores, mas com seu potencial quase totalmente esgotado. A fronteira de expansão deslocou-se para a Bacia Amazônica (Madeira, Xingu, Tapajós), onde a construção de usinas a fio d'água (reservatórios menores) visa reduzir alagamentos, mas ainda assim deflagra graves impactos ecológicos e expulsão de comunidades ribeirinhas e indígenas.",
      stepByStep: [
        "1. Bacia do Paraná: maior capacidade geradora instalada (Itaipu Binacional, Furnas, Ilha Solteira), altamente regularizada.",
        "2. Bacia Amazônica: maior bacia hidrográfica do mundo, rios caudalosos em áreas de transição com planaltos que guardam enorme potencial remanescente.",
        "3. Usinas a fio d'água (Belo Monte, Jirau, Santo Antônio): operam sem grandes reservatórios de acumulação para evitar alagar florestas gigantescas, mas geram pouca energia no período de seca dos rios amazônicos.",
        "4. Regime hidrográfico: no Brasil predomina o regime PLUVIAL (rios cheios no verão chuvoso e vazantes no inverno seco).",
        "5. Conclusão: a expansão hidrelétrica enfrenta o dilema entre transição para energias renováveis e preservação dos direitos socioterritoriais tradicionais na Amazônia."
      ],
      coreConcept: "Bacias Hidrográficas Brasileiras: Potencial Hidráulico, Usinas a Fio d'Água e Desafios Socioambientais",
      trapWarning: "Lembre-se: usina a 'fio d'água' não tem um lago gigante para guardar água! Por isso, durante a seca da Amazônia, usinas como Belo Monte geram uma fração minúscula de sua capacidade máxima nominal."
    },
    commonTraps: [
      "Achar que a Bacia Amazônica é a que mais GERA eletricidade atualmente (a que mais gera é a Bacia do Paraná)",
      "Supor que rios brasileiros dependem de degelo de neve (dependem quase integralmente de chuva pluvial)"
    ],
    tags: ["bacias-hidrograficas", "hidreletricas", "itaipu", "belo-monte", "matriz-energetica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEOBIO-025",
    area: "humanas",
    competence: 6,
    skill: 28,
    topic: "Geografia Física",
    subtopic: "Domínios Morfoclimáticos de Aziz Ab'Sáber: Faixas de Transição e Ecótonos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao conceber a clássica divisão do Brasil em seis grandes Domínios Morfoclimáticos (Amazônico, Cerrado, Mares de Morros, Caatinga, Araucárias e Pradarias), o geógrafo Aziz Nacib Ab'Sáber enfatizou que essas unidades biogeográficas e paisagísticas não são delimitadas por fronteiras rígidas, mas separadas por complexas 'faixas de transição' (ecótonos) onde elementos de dois ou mais domínios se interpenetram de forma singular.",
      source: "Aziz Ab'Sáber, Os Domínios de Natureza no Brasil: Potencialidades Paisagísticas"
    },
    prompt: "Entre as faixas de transição mais emblemáticas do território brasileiro destacam-se:",
    options: [
      { id: "a", text: "o Meio-Norte (Mata dos Cocais), com predomínio de palmeiras de babaçu e carnaúba entre a Amazônia e a Caatinga, e o Agreste, situado entre a Zona da Mata úmida e o Sertão semiárido nordestino.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o Pantanal mato-grossense, que constitui uma tundra ártica desprovida de árvores entre o Cerrado e o Uruguai.", isCorrect: false, distractorRationale: "O Pantanal é um complexo mosaico alagável tropical, sem qualquer semelhança com tundras polares." },
      { id: "c", text: "a Cordilheira dos Andes equatoriana, que separa o bioma Pampa da floresta de araucárias.", isCorrect: false, distractorRationale: "Os Andes estão no litoral oeste sul-americano e não fazem fronteira com o sul do Brasil." },
      { id: "d", text: "o Deserto do Atacama, que corta o estado de São Paulo separando os Mares de Morros do litoral.", isCorrect: false, distractorRationale: "O Atacama situa-se no norte do Chile e a costa de São Paulo é coberta pela Mata Atlântica úmida." },
      { id: "e", text: "o arquipélago de Fernando de Noronha, que divide os cerrados do Centro-Oeste da savana africana.", isCorrect: false, distractorRationale: "Fernando de Noronha é um arquipélago oceânico vulcânico litorâneo em Pernambuco." }
    ],
    detailedExplanation: {
      summary: "As faixas de transição (ecótonos) ocupam milhões de quilômetros quadrados no Brasil. O Meio-Norte (Maranhão e Piauí) é o exemplo mais clássico: a Mata dos Cocais atua como amortecedor ecológico entre a exuberância úmida da Amazônia a oeste e a aridez da Caatinga a leste, onde comunidades tradicionais sobrevivem do extrativismo das quebradeiras de coco de babaçu e da cera de carnaúba. Já no Nordeste oriental, o Agreste é o ecótono entre a cana da Zona da Mata litorânea e a pecuária do Sertão seco.",
      stepByStep: [
        "1. Conceito de Ecótono em Ab'Sáber: Zona de contato e interpenetração ecológica com grande biodiversidade e endemismos.",
        "2. Meio-Norte / Mata dos Cocais: Transição Amazônia-Cerrado-Caatinga. Vegetação secundária e pioneira dominada por palmeiras oleaginosas (babaçu, carnaúba, buriti).",
        "3. Importância sociocultural da Mata dos Cocais: Movimento das Quebradeiras de Coco Babaçu e a 'Lei do Babaçu Livre' (preservação da sociobiodiversidade).",
        "4. Agreste nordestino: Transição entre a umidade da Zona da Mata e o Semiárido sertanejo; policultura camponesa e bacia leiteira em minifúndios familiares.",
        "5. Conclusão: As faixas de transição demonstram que a natureza opera por gradientes contínuos, e não por divisões cartográficas lineares artificiais."
      ],
      coreConcept: "Faixas de Transição em Aziz Ab'Sáber: Mata dos Cocais, Agreste e a Sociobiodiversidade dos Ecótonos",
      trapWarning: "No ENEM: A Mata dos Cocais NÃO É UM DOMÍNIO MORFOCLIMÁTICO AUTÔNOMO! Ela é classificada oficialmente por Aziz Ab'Sáber como uma FAIXA DE TRANSIÇÃO entre a Amazônia, a Caatinga e o Cerrado."
    },
    commonTraps: [
      "Classificar a Mata dos Cocais como um domínio à parte (ela é faixa de transição)",
      "Confundir o Agreste (zona de transição com policultura) com o Sertão semiárido ou com a Zona da Mata canavieira"
    ],
    tags: ["aziz-absaber", "faixas-de-transicao", "mata-dos-cocais", "agreste", "dominios-morfoclimaticos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
