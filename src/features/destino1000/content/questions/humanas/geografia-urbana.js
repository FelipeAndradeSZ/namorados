export const QUESTIONS_GEOGRAFIA_URBANA = [
  {
    id: "HUM-GEO-001",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Urbanização",
    subtopic: "Segregação Socioespacial",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em muitas metrópoles brasileiras, observa-se a construção de condomínios de alto padrão cercados por muros e esquemas de segurança privada, localizados próximos a áreas de ocupação irregular e favelas. Essa proximidade física não se traduz em integração social, mas evidencia um profundo contraste na apropriação e uso do espaço urbano.",
      source: "Roberto Lobato Corrêa, O Espaço Urbano (adaptado)."
    },
    prompt: "O fenômeno descrito no texto, comum nas grandes cidades brasileiras, como São Paulo e Rio de Janeiro, é conceitualmente conhecido como:",
    options: [
      { id: "a", text: "Gentrificação estrutural, que visa a homogeneização das classes sociais.", isCorrect: false, distractorRationale: "Gentrificação é a expulsão de populações pobres de centros valorizados, não a convivência lado a lado de condomínios e favelas." },
      { id: "b", text: "Conurbação metropolitana, fruto da fusão administrativa entre municípios.", isCorrect: false, distractorRationale: "Conurbação é a união física de manchas urbanas de diferentes municípios, não a separação de classes." },
      { id: "c", text: "Segregação socioespacial, expressando materialmente a desigualdade de renda.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "Macrocefalia urbana, caracterizada pela ausência total de serviços públicos.", isCorrect: false, distractorRationale: "Macrocefalia refere-se ao crescimento desproporcional de uma metrópole em relação ao resto da rede urbana." },
      { id: "e", text: "Desmetropolização, que dispersa a população rica para o campo.", isCorrect: false, distractorRationale: "Desmetropolização é o crescimento de cidades médias em ritmo maior que as metrópoles, não o fenômeno citado." }
    ],
    detailedExplanation: {
      summary: "A segregação socioespacial é a materialização das desigualdades sociais na geografia da cidade.",
      stepByStep: [
        "O texto descreve condomínios ricos e favelas ocupando espaços próximos, mas separados por muros (físicos e sociais).",
        "Esse contraste visual e estrutural revela acesso desigual à moradia, segurança e infraestrutura.",
        "O termo correto em geografia urbana para a separação de classes no espaço da cidade é 'segregação socioespacial'."
      ],
      coreConcept: "Segregação Socioespacial nas Metrópoles Brasileiras",
      trapWarning: "Cuidado para não confundir com gentrificação, que é um processo de renovação/elitização de bairros antigos."
    },
    commonTraps: ["confundir com gentrificação", "confundir com conurbação"],
    tags: ["urbanizacao", "desigualdade", "sao-paulo", "favelizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-002",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Mobilidade Urbana",
    subtopic: "Transporte Público",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Dados sobre o deslocamento nas regiões metropolitanas do Brasil indicam que os trabalhadores de baixa renda gastam, em média, duas a três horas diárias no trajeto casa-trabalho-casa. Isso ocorre porque as oportunidades de emprego estão concentradas nos centros, enquanto a habitação popular foi empurrada para as franjas periféricas.",
      source: "IPEA, Mobilidade Urbana no Brasil (adaptado)."
    },
    prompt: "O problema da mobilidade urbana descrito evidencia uma relação direta com o modelo histórico de crescimento das cidades brasileiras. Qual é o principal impacto socioeconômico desse padrão de deslocamento pendular prolongado?",
    options: [
      { id: "a", text: "O barateamento do custo de vida nas periferias, o que compensa as horas gastas em trânsito.", isCorrect: false, distractorRationale: "O custo do transporte e o tempo perdido precarizam a vida do trabalhador, não gerando 'compensação' real." },
      { id: "b", text: "A redução da jornada de trabalho nas áreas centrais, ajustando-se ao tempo de deslocamento diário.", isCorrect: false, distractorRationale: "As jornadas de trabalho não são reduzidas para compensar o tempo de trânsito." },
      { id: "c", text: "A limitação do acesso ao lazer, cultura e qualidade de vida para a população periférica.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "O fortalecimento de polos industriais descentralizados, esvaziando o centro histórico.", isCorrect: false, distractorRationale: "O texto afirma que as oportunidades continuam concentradas nos centros." },
      { id: "e", text: "A consolidação do transporte ferroviário como modal prioritário e eficiente no país.", isCorrect: false, distractorRationale: "A matriz de transporte no Brasil foca no rodoviário (ônibus, carros) e o transporte ferroviário metropolitano é historicamente insuficiente." }
    ],
    detailedExplanation: {
      summary: "O tempo excessivo gasto no transporte subtrai horas de descanso, lazer e convívio familiar.",
      stepByStep: [
        "A população pobre mora na periferia devido à especulação imobiliária no centro.",
        "O deslocamento para o centro (movimento pendular) consome horas do dia.",
        "Esse tempo roubado resulta em fadiga, exclusão de espaços de lazer centrais e redução da qualidade de vida global do indivíduo."
      ],
      coreConcept: "Movimento pendular e direito à cidade",
      trapWarning: "Cuidado ao assumir que morar longe barateia o custo de vida geral; o custo do transporte e o tempo perdido tornam a vida periferizada muito cara do ponto de vista da qualidade."
    },
    commonTraps: ["ignorar impactos na qualidade de vida", "achar que há descentralização do emprego"],
    tags: ["mobilidade", "movimento-pendular", "transporte", "periferia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-003",
    area: "humanas",
    competence: 2,
    skill: 10,
    topic: "Urbanização",
    subtopic: "Êxodo Rural e Industrialização",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "text",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A partir da década de 1950, o Brasil acelerou sua transição de um país agrário para urbano-industrial. A promessa de empregos nas indústrias do Sudeste e a modernização do campo promoveram uma migração em massa de camponeses para as cidades, um processo rápido e caótico.",
      source: "Milton Santos, A Urbanização Brasileira."
    },
    prompt: "O processo de crescimento acelerado das cidades brasileiras no século XX, impulsionado pelo êxodo rural, resultou em qual fenômeno estrutural?",
    options: [
      { id: "a", text: "Um planejamento urbano rigoroso, capaz de absorver a mão de obra no setor formal.", isCorrect: false, distractorRationale: "A urbanização foi espontânea e desordenada, sem planejamento estatal adequado." },
      { id: "b", text: "O fenômeno da macrocefalia urbana, com inchaço das metrópoles e proliferação de moradias informais.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A equiparação das condições de infraestrutura entre bairros centrais e loteamentos periféricos.", isCorrect: false, distractorRationale: "As periferias ficaram marcadas pela falta de infraestrutura." },
      { id: "d", text: "O declínio populacional do Sudeste devido ao retorno planejado dos migrantes ao Nordeste.", isCorrect: false, distractorRationale: "A migração de retorno só ganha força décadas depois, e não causou declínio populacional no Sudeste." },
      { id: "e", text: "O aumento expressivo de pequenas propriedades familiares nas cinturões verdes urbanos.", isCorrect: false, distractorRationale: "A migração gerou inchaço em periferias e favelas, não assentamentos rurais em cinturões." }
    ],
    detailedExplanation: {
      summary: "A rápida urbanização gerou inchaço urbano e precarização das condições de habitação.",
      stepByStep: [
        "A industrialização atraiu massas do campo (fator de atração).",
        "A modernização agrícola expulsou camponeses (fator de repulsão).",
        "As cidades cresceram rapidamente sem infraestrutura para todos.",
        "Resultado: macrocefalia urbana, favelização e loteamentos clandestinos nas periferias."
      ],
      coreConcept: "Urbanização desordenada e inchaço urbano",
      trapWarning: "O Brasil urbanizou-se de forma rápida e concentrada, diferente dos países centrais que tiveram uma urbanização mais lenta e acompanhada de infraestrutura."
    },
    commonTraps: ["acreditar em planejamento urbano eficiente", "desconhecer o conceito de macrocefalia"],
    tags: ["exodo-rural", "macrocefalia", "favelizacao", "industrializacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-004",
    area: "humanas",
    competence: 5,
    skill: 24,
    topic: "Demografia",
    subtopic: "Estrutura Etária e Envelhecimento",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "graph",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Descrição do Gráfico (Pirâmides Etárias do Brasil: 1980 vs 2020): Em 1980, a base era muito larga e o topo estreito. Em 2020, percebe-se um estreitamento significativo da base e um alargamento do corpo e do topo, indicando a transição demográfica brasileira em curso acelerado.",
      source: "IBGE, Censos Demográficos (adaptado)."
    },
    prompt: "As mudanças observadas no formato da pirâmide etária brasileira ao longo das últimas décadas refletem processos socioeconômicos profundos. A principal implicação de longo prazo para as políticas públicas gerada por essa transição é:",
    options: [
      { id: "a", text: "A necessidade de expansão massiva de vagas em creches e ensino fundamental devido à alta taxa de fecundidade.", isCorrect: false, distractorRationale: "A base está encolhendo, logo a prioridade relativa não é a expansão massiva na infância, embora a qualidade siga sendo desafio." },
      { id: "b", text: "A diminuição da população economicamente ativa e o consequente desafio de sustentabilidade do sistema previdenciário e de saúde.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "O aumento da mortalidade infantil gerado pelo declínio da infraestrutura hospitalar.", isCorrect: false, distractorRationale: "A mortalidade infantil caiu ao longo dessas décadas, o que contribui para a transição." },
      { id: "d", text: "A estagnação do crescimento urbano, uma vez que a população rural volta a crescer aceleradamente.", isCorrect: false, distractorRationale: "O Brasil segue urbanizado; a transição demográfica não afeta isso de forma a causar um êxodo urbano." },
      { id: "e", text: "O alívio imediato no setor de habitação, já que o déficit habitacional desaparece com o menor número de jovens.", isCorrect: false, distractorRationale: "O déficit habitacional é um problema estrutural de renda, não apenas demográfico." }
    ],
    detailedExplanation: {
      summary: "O envelhecimento da população exige reformas na previdência e na saúde geriátrica.",
      stepByStep: [
        "Estreitamento da base: queda nas taxas de natalidade e fecundidade.",
        "Alargamento do topo: aumento da expectativa de vida.",
        "Aumento da proporção de idosos sobrecarrega o sistema previdenciário e de saúde pública, enquanto a força de trabalho (adultos) tenderá a diminuir no futuro."
      ],
      coreConcept: "Transição Demográfica e Previdência Social",
      trapWarning: "Cuidado ao focar na base da pirâmide; o desafio das próximas décadas é o topo (idosos)."
    },
    commonTraps: ["não interpretar as mudanças na pirâmide", "focar apenas em jovens"],
    tags: ["demografia", "transicao-demografica", "ibge", "previdencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-005",
    area: "humanas",
    competence: 5,
    skill: 21,
    topic: "Urbanização",
    subtopic: "Planejamento Urbano e Brasília",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Plano Piloto de Brasília, desenhado por Lúcio Costa e inaugurado em 1960, pretendia ser um marco da modernidade e igualdade social. Suas superquadras não possuíam portões e o espaço era fluido. Contudo, os trabalhadores que construíram a cidade (candangos) foram alocados em cidades-satélites distantes do plano central.",
      source: "James Holston, A Cidade Modernista (adaptado)."
    },
    prompt: "O desenvolvimento espacial de Brasília contrasta com as intenções igualitárias do projeto original. Essa contradição espacial, materializada na relação entre o Plano Piloto e as cidades-satélites, demonstra que:",
    options: [
      { id: "a", text: "O modernismo arquitetônico conseguiu, na prática, anular as distinções de classe na capital federal.", isCorrect: false, distractorRationale: "Ao contrário, as distinções de classe se evidenciaram fortemente na separação espacial." },
      { id: "b", text: "O planejamento estatal foi capaz de conter a especulação imobiliária, garantindo moradia barata no centro.", isCorrect: false, distractorRationale: "O Plano Piloto tornou-se extremamente valorizado e inacessível às classes baixas." },
      { id: "c", text: "A cidade, mesmo planejada, reproduziu a lógica excludente e segregacionista típica do capitalismo periférico brasileiro.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "As cidades-satélites foram criadas para abrigar exclusivamente políticos e burocratas estrangeiros.", isCorrect: false, distractorRationale: "Cidades-satélites (como Taguatinga) abrigaram inicialmente os trabalhadores pobres." },
      { id: "e", text: "O êxodo rural para o Centro-Oeste fracassou, forçando o abandono das cidades-satélites na década de 1970.", isCorrect: false, distractorRationale: "As cidades-satélites (hoje Regiões Administrativas) continuaram a crescer vertiginosamente." }
    ],
    detailedExplanation: {
      summary: "Apesar do planejamento, Brasília reproduziu a segregação espacial clássica do Brasil.",
      stepByStep: [
        "Analisar a promessa do projeto de Brasília: modernidade e igualdade.",
        "Observar a realidade: quem construiu (pobres) não pôde morar no centro (Plano Piloto).",
        "Concluir que o planejamento urbano utópico não resistiu à lógica excludente socioeconômica da sociedade brasileira, gerando forte periferização."
      ],
      coreConcept: "Planejamento Urbano e Desigualdade Socioespacial",
      trapWarning: "Cidades planejadas não estão imunes às dinâmicas de mercado e desigualdade."
    },
    commonTraps: ["achar que cidades planejadas não têm favelas/periferias", "romantizar o projeto de Lúcio Costa"],
    tags: ["brasilia", "planejamento-urbano", "segregacao", "modernismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-006",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Urbanização",
    subtopic: "Conurbação e Mobilidade Pendular",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas grandes regiões metropolitanas brasileiras, o crescimento horizontal desordenado das manchas urbanas provocou a união física dos perímetros de municípios contíguos. Esse fenômeno intensificou fluxos diários massivos de pessoas que residem em municípios periféricos (muitas vezes denominados 'cidades-dormitório') e se deslocam todos os dias para trabalhar ou estudar no polo metropolitano central.",
      source: "Milton Santos, A Urbanização Brasileira. São Paulo: Hucitec (adaptado)."
    },
    prompt: "O processo de união física entre perímetros urbanos vizinhos e o respectivo deslocamento populacional diário são conceituados na geografia, respectivamente, como:",
    options: [
      { id: "a", text: "conurbação e migração pendular.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "gentrificação e transumância sazonal.", isCorrect: false, distractorRationale: "Transumância é migração sazonal ligada a ciclos agropecuários ou climáticos; gentrificação é valorização imobiliária." },
      { id: "c", text: "macrocefalia urbana e êxodo rural definitivo.", isCorrect: false, distractorRationale: "Êxodo rural é a mudança definitiva do campo para a cidade, não o deslocamento diário de ida e volta." },
      { id: "d", text: "desmetropolização e diáspora intraurbana.", isCorrect: false, distractorRationale: "Desmetropolização refere-se ao crescimento relativo de cidades médias em detrimento das megacidades." },
      { id: "e", text: "segregação involuntária e nomadismo metropolitano.", isCorrect: false, distractorRationale: "Nomadismo pressupõe ausência de moradia fixa, o que não descreve trabalhadores que retornam para suas casas à noite." }
    ],
    detailedExplanation: {
      summary: "A conurbação é o encontro das manchas urbanas de dois municípios, gerando migração pendular diária.",
      stepByStep: [
        "Conurbação ocorre quando o crescimento urbano horizontal funde as fronteiras físicas de dois ou mais municípios.",
        "Essa dinâmica cria cidades-dormitório nas bordas metropolitanas com moradias mais baratas.",
        "A migração pendular é o movimento diário de ida e volta entre a residência e o local de trabalho/estudo, gerando gargalos críticos no transporte coletivo."
      ],
      coreConcept: "Conurbação e Migração Pendular Urbana",
      trapWarning: "Migração pendular não é migração definitiva: a pessoa vai e volta no mesmo dia (como o pêndulo de um relógio)."
    },
    commonTraps: ["confundir pendular com sazonal/transumância", "confundir conurbação com metropolização isolada"],
    tags: ["conurbacao", "migracao pendular", "cidades-dormitorio", "metropole"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-007",
    area: "humanas",
    competence: 5,
    skill: 21,
    topic: "Urbanização",
    subtopic: "Gentrificação e Especulação Imobiliária",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Projetos de 'revitalização' urbana implementados em antigas zonas portuárias e bairros centrais degradados introduzem museus de arquitetura arrojada, centros comerciais sofisticados e condomínios de alto padrão. Como consequência, observa-se uma rápida escalada no preço do solo, dos aluguéis e dos tributos municipais nessas localidades.",
      source: "David Harvey, Cidades Rebeldes. São Paulo: Boitempo (adaptado)."
    },
    prompt: "O processo socioespacial descrito resulta, frequentemente, em um fenômeno conhecido como gentrificação, cujo impacto social direto é a:",
    options: [
      { id: "a", text: "expulsão indireta de moradores tradicionais de baixa renda devido ao encarecimento do custo de vida e da moradia.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "democratização imediata do acesso à habitação social de interesse comunitário no núcleo histórico.", isCorrect: false, distractorRationale: "A habitação social é comumente preterida em prol de empreendimentos imobiliários corporativos e de luxo." },
      { id: "c", text: "desvalorização drástica de imóveis e terrenos que passam a ser abandonados pela iniciativa privada.", isCorrect: false, distractorRationale: "Ocorre o inverso: forte valorização especulativa do solo urbano." },
      { id: "d", text: "extinção completa da desigualdade socioeconômica no perímetro reabilitado pela prefeitura.", isCorrect: false, distractorRationale: "A desigualdade é aprofundada com a substituição de classes sociais residentes." },
      { id: "e", text: "proibição compulsória da circulação de veículos automotores particulares em toda a malha municipal.", isCorrect: false, distractorRationale: "Não há relação direta entre gentrificação e o banimento irrestrito de automóveis." }
    ],
    detailedExplanation: {
      summary: "A gentrificação remodela bairros tradicionais ou degradados, tornando-os caros demais para seus moradores originários.",
      stepByStep: [
        "A revitalização urbana traz investimentos estatais e privados, requalificando praças, calçadas e equipamentos culturais.",
        "O comércio local converte-se em boutiques e restaurantes gourmet, elevando o custo de vida e os aluguéis.",
        "Os antigos residentes e comerciantes de baixa renda são forçados a se mudar para periferias mais distantes por não conseguirem custear o novo padrão socioespacial."
      ],
      coreConcept: "Gentrificação e Segregação Socioespacial",
      trapWarning: "Nem todo embelezamento urbano beneficia igualmente a todos; intervenções sem salvaguardas habitacionais geram expulsão velada."
    },
    commonTraps: ["julgar gentrificação como processo puramente estético/positivo", "ignorar expulsão dos moradores de baixa renda"],
    tags: ["gentrificacao", "especulacao imobiliaria", "espaco urbano", "segregacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-008",
    area: "humanas",
    competence: 2,
    skill: 9,
    topic: "Urbanização",
    subtopic: "Macrocefalia Urbana e Terciário Informal",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em muitos países em desenvolvimento da América Latina, o intenso fluxo migratório campo-cidade a partir de meados do século XX ocorreu em velocidade muito superior à capacidade do mercado industrial de absorver mão de obra. Essa assimetria histórica gerou uma macrocefalia urbana acompanhada da proliferação massiva de atividades informais de sobrevivência.",
      source: "Armen Mamigonian, Estudos de Geografia Urbana (adaptado)."
    },
    prompt: "No panorama das metrópoles brasileiras, uma manifestação econômica típica da chamada hipertrofia do setor terciário é:",
    options: [
      { id: "a", text: "a expansão do mercado informal de camelôs, entregadores de aplicativos e ambulantes sem seguridade trabalhista.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o pleno emprego nas fábricas automobilísticas e siderúrgicas de ponta instaladas nos centros antigos.", isCorrect: false, distractorRationale: "As fábricas se automatizaram e muitas migraram para o interior (desconcentração industrial), reduzindo postos formais." },
      { id: "c", text: "o esvaziamento absoluto dos escritórios comerciais em razão do regresso em massa das famílias ao meio rural.", isCorrect: false, distractorRationale: "O setor de serviços continua crescendo e concentrando a maior parte da renda urbana." },
      { id: "d", text: "a hegemonia de cooperativas agrárias comunitárias operando no interior dos distritos financeiros.", isCorrect: false, distractorRationale: "Cooperativas agrárias operam no campo, não nos núcleos financeiros metropolitanos." },
      { id: "e", text: "a estatização integral de todos os ramos do comércio varejista e atacadista de suprimentos.", isCorrect: false, distractorRationale: "O comércio no Brasil é predominantemente privado e desregulamentado." }
    ],
    detailedExplanation: {
      summary: "A hipertrofia do terciário decorre do inchaço urbano sem postos industriais suficientes, canalizando os trabalhadores para o subemprego.",
      stepByStep: [
        "A rápida mecanização agrícola e a concentração fundiária expulsaram milhões de trabalhadores para as cidades.",
        "O setor secundário (indústria) não gerou empregos em ritmo compatível com esse contingente populacional.",
        "Como alternativa de subsistência, inflou-se o setor terciário 'refúgio', marcado por informalidade, precarização, bicos e ambulantes."
      ],
      coreConcept: "Macrocefalia Urbana e Hipertrofia do Setor Terciário",
      trapWarning: "O setor terciário abrange serviços de alta qualificação (TI, finanças), mas nas metrópoles desiguais expande-se prioritariamente o setor informal desqualificado."
    },
    commonTraps: ["confundir terciário dinâmico com terciário de sobrevivência", "achar que a indústria absorveu todos os migrantes"],
    tags: ["macrocefalia", "terciario informal", "uberizacao", "subemprego"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-009",
    area: "humanas",
    competence: 5,
    skill: 22,
    topic: "Impactos Ambientais Urbanos",
    subtopic: "Ilhas de Calor e Impermeabilização",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Estudos termográficos na Região Metropolitana de São Paulo revelam gradientes de temperatura significativos: áreas com densa concentração de edifícios altos, recobertas por asfalto escuro e desprovidas de vegetação, chegam a registrar temperaturas até 6 °C superiores às de bairros periféricos arborizados ou parques florestais vizinhos.",
      source: "Tarifa e Armani, Os Climas na Cidade de São Paulo (adaptado)."
    },
    prompt: "A anomalia microclimática caracterizada por temperaturas mais elevadas no tecido urbano consolidado em relação ao seu entorno é denominada e causada, respectivamente, por:",
    options: [
      { id: "a", text: "ilha de calor; decorrente da alta capacidade de retenção térmica de materiais como concreto e asfalto e da escassez de evapotranspiração vegetal.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "inversão térmica; gerada pela absorção de radiação ultravioleta pelas copas de árvores nativas preservadas.", isCorrect: false, distractorRationale: "Inversão térmica é o aprisionamento de ar frio sob ar quente em dias de inverno, retendo poluentes." },
      { id: "c", text: "chuva ácida; causada pela queima de carvão mineral nas caldeiras de parques tecnológicos rurais.", isCorrect: false, distractorRationale: "Chuva ácida decorre de emissões de óxidos de enxofre e nitrogênio, alterando o pH da água e não a temperatura local." },
      { id: "d", text: "efeito estufa estocástico; provocado pela movimentação das placas tectônicas sobre as bacias sedimentares.", isCorrect: false, distractorRationale: "Tectonismo não tem vínculo com variações microclimáticas intraurbanas cotidianas." },
      { id: "e", text: "assoreamento hídrico; impulsionado pelo lançamento de água quente de usinas termonucleares fluviais.", isCorrect: false, distractorRationale: "Assoreamento é acúmulo de sedimentos em rios; o fenômeno térmico urbano chama-se ilha de calor." }
    ],
    detailedExplanation: {
      summary: "As ilhas de calor são causadas pelo concreto, asfalto, poluição e redução de verde, retendo calor no centro urbano.",
      stepByStep: [
        "Materiais urbanos (asfalto e concreto) têm baixo albedo e alta capacidade térmica, absorvendo calor solar ao longo do dia.",
        "A substituição de árvores por edificações suprime a evapotranspiração que refresca o ambiente natural.",
        "A geometria dos edifícios dificulta a circulação de ventos, concentrando calor e calor antropogênico gerado por motores e ar-condicionado."
      ],
      coreConcept: "Ilhas de Calor Urbanas e Balanço Térmico",
      trapWarning: "Não confunda ilha de calor (diferença de temperatura cidade-campo) com inversão térmica (fenômeno atmosférico que dificulta a dispersão de poluentes)."
    },
    commonTraps: ["confundir ilha de calor com inversão térmica", "ignorar o papel da falta de vegetação"],
    tags: ["ilha de calor", "clima urbano", "impermeabilizacao", "meio ambiente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-010",
    area: "humanas",
    competence: 5,
    skill: 21,
    topic: "Legislação Urbana",
    subtopic: "Estatuto da Cidade e Função Social da Propriedade",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Art. 2º - A política urbana tem por objetivo ordenar o pleno desenvolvimento das funções sociais da cidade e da propriedade urbana, mediante as seguintes diretrizes gerais:\nI - garantia do direito a cidades sustentáveis, entendido como o direito à terra urbana, à moradia, ao saneamento ambiental, à infraestrutura urbana, ao transporte e aos serviços públicos [...].",
      source: "Lei Federal nº 10.257, de 10 de julho de 2001 (Estatuto da Cidade)."
    },
    prompt: "O Estatuto da Cidade introduziu instrumentos urbanísticos fundamentais para a gestão das metrópoles brasileiras. Um dos principais mecanismos previstos para coibir a retenção especulativa de terrenos e imóveis desocupados em áreas centrais dotadas de infraestrutura é o(a):",
    options: [
      { id: "a", text: "IPTU progressivo no tempo combinado com a desapropriação com títulos da dívida pública.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "concessão obrigatória de subsídios fiscais irrestritos para construtoras manterem glebas desocupadas.", isCorrect: false, distractorRationale: "O Estatuto combate a retenção especulativa em vez de premiá-la com isenções." },
      { id: "c", text: "permissão automática para que latifundiários urbanos cerquem calçadas públicas para estacionamentos.", isCorrect: false, distractorRationale: "Isso violaria o domínio público e a acessibilidade urbana." },
      { id: "d", text: "extinção da exigência de planos diretores municipais para cidades de qualquer porte populacional.", isCorrect: false, distractorRationale: "O Estatuto tornou o Plano Diretor obrigatório para cidades com mais de 20 mil habitantes." },
      { id: "e", text: "cobrança de pedágios interbairros controlados por fundos de investimento estrangeiro.", isCorrect: false, distractorRationale: "Não é instrumento do Estatuto da Cidade para combate à especulação do solo." }
    ],
    detailedExplanation: {
      summary: "O Estatuto da Cidade criou o IPTU progressivo no tempo para punir imóveis que não cumprem função social.",
      stepByStep: [
        "A retenção especulativa ocorre quando proprietários mantêm terrenos vazios em áreas centrais com infraestrutura à espera de valorização.",
        "O Estatuto da Cidade faculta ao município notificar o proprietário para edificar ou utilizar o imóvel.",
        "Caso não utilize, aplica-se o IPTU progressivo no tempo por até 5 anos consecutivos, seguido de desapropriação indenizada em títulos da dívida pública caso a omissão persista."
      ],
      coreConcept: "Função Social da Propriedade e Instrumentos do Estatuto da Cidade",
      trapWarning: "O direito de propriedade no Brasil não é absoluto: a Constituição exige que ele cumpra sua função social."
    },
    commonTraps: ["considerar propriedade urbana como direito sem deveres", "desconhecer o IPTU progressivo"],
    tags: ["estatuto da cidade", "plano diretor", "iptu progressivo", "especulacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-011",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Urbanização",
    subtopic: "Conurbação e Gestão Metropolitana",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao circular pela Rodovia Presidente Dutra entre os municípios de São Paulo, Guarulhos e Arujá, um motorista não percebe qualquer descontinuidade física na malha de edifícios, indústrias e avenidas que separam as cidades. A fronteira entre os municípios tornou-se puramente administrativa e cartográfica, uma vez que a mancha construída unificou-se no espaço.",
      source: "Milton Santos, A Urbanização Brasileira. São Paulo: Hucitec."
    },
    prompt: "O fenômeno geográfico de fusão física horizontal entre áreas urbanas contíguas de municípios vizinhos é denominado conurbação. Em termos de governança urbana, a conurbação impõe às autoridades públicas a necessidade urgente de:",
    options: [
      { id: "a", text: "extinguir imediatamente todas as prefeituras periféricas e unificar todos os orçamentos em uma única administração municipal.", isCorrect: false, distractorRationale: "A Constituição de 1988 garante a autonomia federativa dos municípios; conurbação não extingue prefeituras por decreto." },
      { id: "b", text: "estruturar consórcios intermunicipais e políticas metropolitanas coordenadas para a gestão integrada de serviços públicos comuns, como transporte coletivo e saneamento.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "construir barreiras alfandegárias físicas nos limites municipais para controlar a circulação de trabalhadores pendulares.", isCorrect: false, distractorRationale: "O direito de ir e vir é garantia constitucional no território nacional; barreiras municipais seriam ilegais e inviáveis." },
      { id: "d", text: "isolar as zonas industriais nas cidades menores, proibindo a circulação de caminhões de carga nas rodovias conurbadas.", isCorrect: false, distractorRationale: "A economia metropolitana baseia-se exatamente na livre circulação e na complementaridade logística entre as cidades." },
      { id: "e", text: "desestimular o transporte público intermunicipal para incentivar o uso individual de automóveis particulares.", isCorrect: false, distractorRationale: "Isso colapsaria definitivamente a mobilidade urbana metropolitana com engarrafamentos crônicos." }
    ],
    detailedExplanation: {
      summary: "A conurbação cria uma continuidade urbana que ultrapassa os limites administrativos locais, demandando consórcios metropolitanos integrados.",
      stepByStep: [
        "Passo 1: Compreender o conceito de conurbação: união física e horizontal de manchas urbanas vizinhas resultante do crescimento demográfico e imobiliário desordenado.",
        "Passo 2: Reconhecer o desafio de gestão: o cidadão mora em um município (onde usa postos de saúde), trabalha em outro (onde gera riqueza) e transita diariamente por linhas de ônibus que cruzam ambos.",
        "Passo 3: Identificar a solução institucional: criação de Regiões Metropolitanas e consórcios públicos de funções públicas de interesse comum (FPIC), articulando tarifa integrada de transporte e destinação de lixo.",
        "Passo 4: A alternativa 'b' expressa a diretriz de gestão metropolitana consagrada no Estatuto da Metrópole."
      ],
      coreConcept: "Conurbação, Regiões Metropolitanas e gestão integrada de mobilidade e saneamento.",
      trapWarning: "Confundir conurbação (conceito geográfico e espacial) com fusão administrativa de cidades (que exigiria plebiscito e emenda estadual)."
    },
    commonTraps: ["confundir_conurbacao_com_fusao_administrativa", "desconhecer_o_papel_dos_consorcios_metropolitanos"],
    tags: ["conurbacao", "regiao_metropolitana", "gestao_urbana", "planejamento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-012",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Urbanização",
    subtopic: "Hierarquia Urbana e Estudo REGIC do IBGE",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "De acordo com a pesquisa 'Regiões de Influência das Cidades' (REGIC), elaborada periodicamente pelo IBGE, a rede urbana brasileira é estruturada por fluxos de pessoas, capitais, mercadorias e informações. No topo da hierarquia encontra-se a cidade de São Paulo, classificada como a única 'Grande Metrópole Nacional', exercendo raio de influência direto ou indireto sobre todo o território do país.",
      source: "IBGE, Regiões de Influência das Cidades (REGIC)."
    },
    prompt: "A posição hegemônica de São Paulo no ápice da hierarquia urbana brasileira decorre fundamentalmente de sua capacidade de concentrar:",
    options: [
      { id: "a", text: "a maior extensão territorial agricultável do país dedicada à monocultura de exportação de soja.", isCorrect: false, distractorRationale: "O polo da produção agrícola fica nos cerrados do Centro-Oeste e Matopiba, não na mancha urbana paulistana." },
      { id: "b", text: "as sedes de grandes corporações transnacionais, centros de pesquisa de ponta e o principal centro financeiro e de serviços avançados do hemisfério sul.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "a totalidade das usinas hidrelétricas responsáveis pelo abastecimento de energia elétrica do Sistema Interligado Nacional.", isCorrect: false, distractorRationale: "As grandes hidrelétricas localizam-se nas bacias do Paraná, São Francisco e rios amazônicos distantes da capital." },
      { id: "d", text: "a sede administrativa dos três poderes da República e dos ministérios federais.", isCorrect: false, distractorRationale: "A sede política e governamental da União está localizada em Brasília desde 1960." },
      { id: "e", text: "a maior taxa de crescimento demográfico percentual entre todas as cidades brasileiras no século XXI.", isCorrect: false, distractorRationale: "São Paulo cresce a taxas demográficas muito baixas atualmente; as cidades médias do agronegócio e do litoral crescem proporcionalmente muito mais rápido." }
    ],
    detailedExplanation: {
      summary: "São Paulo funciona como cidade global e grande metrópole nacional por articular os nós de comando do capital financeiro, serviços quaternários e redes corporativas globais.",
      stepByStep: [
        "Passo 1: Entender o conceito de hierarquia urbana: a classificação não depende apenas do número de habitantes, mas da capacidade de prestar serviços de alta complexidade (hospitais terciários, universidades, consultorias jurídicas, bolsa de valores).",
        "Passo 2: Reconhecer o papel de São Paulo na rede: comanda o fluxo de investimentos nacionais e internacionais através da B3, abriga sedes de bancos, escritórios executivos de multinacionais e hubs aeroportuários e de telecomunicação.",
        "Passo 3: A pesquisa REGIC do IBGE reconhece que decisões tomadas na avenida Paulista ou Faria Lima afetam cadeias produtivas em todas as unidades da federação.",
        "Passo 4: A alternativa 'b' explicita com rigor científico essa condição de comando econômico-informacional."
      ],
      coreConcept: "Hierarquia urbana no Brasil, pesquisa REGIC do IBGE e o papel de São Paulo como cidade global.",
      trapWarning: "Confundir liderança econômica e de serviços (São Paulo) com centro político-administrativo nacional (Brasília)."
    },
    commonTraps: ["confundir_sao_paulo_com_brasilia_como_capital", "associar_hierarquia_apenas_a_populacao_bruta"],
    tags: ["regic", "ibge", "hierarquia_urbana", "sao_paulo", "cidade_global"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-013",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Urbanização",
    subtopic: "Gentrificação e Especulação Imobiliária",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A requalificação de antigas áreas industriais e bairros históricos centrais tem sido promovida por parcerias público-privadas sob a promessa de 'revitalização' e modernização paisagística. Intervenções arquitetônicas, novos museus, bares gourmet e edifícios de alto padrão atraem investimentos maciços. Contudo, o aumento exponencial dos aluguéis, do IPTU e do custo de vida nesses bairros acaba forçando a saída gradual de famílias moradoras tradicionais e do comércio popular de menor renda.",
      source: "David Harvey, Cidades Rebeldes: Do direito à cidade à revolução urbana."
    },
    prompt: "O processo socioespacial descrito, no qual intervenções de renovação urbana provocam a elitização de um bairro e a expulsão indireta das populações locais de menor poder aquisitivo, denomina-se:",
    options: [
      { id: "a", text: "conurbação espontânea.", isCorrect: false, distractorRationale: "Conurbação é o encontro físico de manchas urbanas municipais, sem relação com elitização interna de bairros." },
      { id: "b", text: "desmetropolização industrial.", isCorrect: false, distractorRationale: "Desmetropolização é a transferência de indústrias e população para cidades médias do interior." },
      { id: "c", text: "gentrificação.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "macrocefalia periférica.", isCorrect: false, distractorRationale: "Macrocefalia é a hipertrofia de uma metrópole em relação ao restante do território." },
      { id: "e", text: "reforma agrária comunitária.", isCorrect: false, distractorRationale: "Reforma agrária diz respeito à distribuição de terras rurais, não a centros urbanos consolidados." }
    ],
    detailedExplanation: {
      summary: "Gentrificação é o processo de transformação urbana que 'enobrece' um bairro popular ou degradado, atraindo moradores de classe alta e expulsando os antigos residentes pelo encarecimento do solo.",
      stepByStep: [
        "Passo 1: Identificar as etapas da gentrificação: área central com patrimônio histórico ou antiga zona fabril sofre desvalorização inicial; o poder público e fundos imobiliários investem em reformas e entretenimento cultural; a área se torna 'cult' ou nobre.",
        "Passo 2: Analisar a dinâmica do mercado de solo: a alta dos aluguéis residenciais e comerciais e a elevação dos tributos tornam insustentável a permanência de moradores pobres, artesãos e pequenos comerciantes tradicionais.",
        "Passo 3: Reconhecer os efeitos sociais: segregação socioespacial ampliada e empurramento das populações vulneráveis para periferias ainda mais distantes.",
        "Passo 4: Concluir que a resposta 'c' (gentrificação) é o conceito exato exigido na geografia crítica do ENEM."
      ],
      coreConcept: "Gentrificação, direito à cidade, valorização do solo e expulsão das camadas populares.",
      trapWarning: "Acreditar que toda 'revitalização urbana' beneficia igualmente todos os antigos moradores; a geografia demonstra a exclusão social gerada pela valorização imobiliária desregulada."
    },
    commonTraps: ["confundir_gentrificacao_com_conurbacao", "ignorar_a_expulsao_das_classes_populares"],
    tags: ["gentrificacao", "especulacao_imobiliaria", "direito_a_cidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-014",
    area: "humanas",
    competence: 5,
    skill: 22,
    topic: "Impactos Ambientais Urbanos",
    subtopic: "Ilhas de Calor e Microclima Urbano",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Imagens térmicas captadas por satélite sobre a Região Metropolitana de São Paulo revelam que as temperaturas superficiais nas áreas densamente verticalizadas do centro expandido (como a região da avenida Paulista e do centro histórico) chegam a ser de 4 °C a 7 °C superiores às registradas em bairros periféricos arborizados ou nas encostas da Serra da Cantareira no mesmo instante.",
      source: "Laboratório de Climatologia Urbana / USP"
    },
    prompt: "O fenômeno microclimático urbano responsável por esse gradiente térmico é a 'ilha de calor'. Entre os principais fatores antrópicos que causam essa anomalia térmica nas áreas centrais, destacam-se:",
    options: [
      { id: "a", text: "o excesso de áreas de preservação florestal que barram a luz solar e a substituição do concreto por gramados reflexivos.", isCorrect: false, distractorRationale: "Florestas e gramados diminuem a temperatura pela evapotranspiração; a ilha de calor decorre justamente da falta de verde." },
      { id: "b", text: "a ampla cobertura de asfalto e concreto de baixo albedo, a escassez de cobertura vegetal e a emissão contínua de calor por veículos e aparelhos de ar-condicionado.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "a proliferação de corpos hídricos navegáveis abertos que aquecem o ar circundante por irradiação térmica.", isCorrect: false, distractorRationale: "Água possui alto calor específico e atua como amenizadora térmica, não como aquecedora do centro." },
      { id: "d", text: "o uso exclusivo de transporte ferroviário elétrico subterrâneo que impede a circulação de ventos alísios.", isCorrect: false, distractorRationale: "O metrô elétrico não aquece a superfície atmosférica nem bloqueia ventos planetários." },
      { id: "e", text: "o predomínio de habitações térreas de madeira que aumentam a reflexão total da luz solar para o espaço.", isCorrect: false, distractorRationale: "Centros urbanos com ilhas de calor são caracterizados por verticalização de concreto, e não casas térreas de madeira." }
    ],
    detailedExplanation: {
      summary: "As ilhas de calor formam-se pela retenção de calor em superfícies urbanas escuras e impermeáveis somada ao calor gerado pelas atividades antrópicas e à perda de evapotranspiração vegetal.",
      stepByStep: [
        "Passo 1: Analisar os materiais construtivos: asfalto e concreto possuem baixo albedo (absorvem grande parte da radiação solar durante o dia e a liberam lentamente à noite como calor sensível).",
        "Passo 2: Considerar a verticalização: os cânions formados pelos arranha-céus criam múltiplos reflexos que aprisionam a radiação e diminuem a velocidade dos ventos dissipadores.",
        "Passo 3: Reconhecer o papel da vegetação: a ausência de árvores elimina o resfriamento evaporativo (evapotranspiração foliar).",
        "Passo 4: Acrescentar o calor antropogênico: motores a combustão, tráfego pesado e condensadoras de climatizadores jogam calor diretamente na atmosfera local.",
        "Passo 5: A opção 'b' resume com precisão a cadeia causal do fenômeno."
      ],
      coreConcept: "Ilhas de calor urbanas, albedo de materiais, calor antropogênico e planejamento ambiental sustentável.",
      trapWarning: "Confundir ilha de calor (aquecimento do centro por materiais e falta de verde) com inversão térmica (bloqueio do ar frio perto do solo no inverno impedindo a dispersão de poluentes)."
    },
    commonTraps: ["confundir_ilha_de_calor_com_inversao_termica", "achar_que_rios_urbanos_aquecem_a_cidade"],
    tags: ["ilha_de_calor", "microclima_urbano", "impactos_ambientais", "sao_paulo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-015",
    area: "humanas",
    competence: 5,
    skill: 22,
    topic: "Impactos Ambientais Urbanos",
    subtopic: "Enchentes Urbanas e Impermeabilização do Solo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Historicamente, o crescimento das metrópoles brasileiras foi acompanhado pela retificação e canalização de cursos d'água de várzea para a abertura de grandes avenidas de fundo de vale (como as marginais Tietê e Pinheiros em São Paulo). Durante tempestades convectivas de verão, as águas pluviais rapidamente transbordam esses canais, alagando pistas expressas e bairros baixos.",
      source: "Aziz Ab'Sáber, Geomorfologia e Urbanização Brasileira."
    },
    prompt: "A recorrência crônica de enchentes catastróficas nas grandes cidades brasileiras está associada a uma intervenção na bacia hidrográfica que provoca:",
    options: [
      { id: "a", text: "a redução drástica da infiltração de água no subsolo por impermeabilização generalizada, aumentando o escoamento superficial e encurtando o tempo de pico das cheias.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o aumento do tempo de retenção da água nas encostas florestadas através da construção de terraços agrícolas.", isCorrect: false, distractorRationale: "O ambiente urbano substitui florestas por asfalto, reduzindo (e não aumentando) a retenção natural." },
      { id: "c", text: "o rebaixamento permanente do lençol freático decorrente do excesso de raízes de árvores nativas nas calçadas.", isCorrect: false, distractorRationale: "Árvores urbanas não rebaixam lençóis a ponto de causar enchentes; árvores ajudam na retenção e absorção das chuvas." },
      { id: "d", text: "a elevação natural das cabeceiras dos rios provocada pelo soerguimento orogenético das serras costeiras.", isCorrect: false, distractorRationale: "Orogenese leva milhões de anos geológicos e não explica cheias sazonais em períodos históricos urbanos." },
      { id: "e", text: "o congelamento superficial das galerias pluviais durante as tempestades tropicais de verão.", isCorrect: false, distractorRationale: "Não há congelamento de água em tempestades de verão em clima tropical ou subtropical no Brasil." }
    ],
    detailedExplanation: {
      summary: "A impermeabilização do solo impede a absorção natural pelas camadas freáticas, fazendo com que 90% da chuva escoe em minutos para os canais estreitados, gerando o colapso por transbordamento.",
      stepByStep: [
        "Passo 1: Entender a dinâmica hidrológica natural: em uma bacia preservada, a vegetação e o solo permeável retêm a maior parte da água da chuva, permitindo que ela infiltre lentamente e alimente o lençol freático.",
        "Passo 2: Analisar a urbanização predatória: o asfalto, telhados e calçadas bloqueiam a infiltração (impermeabilização); o escoamento superficial (run-off) atinge volumes astronômicos quase que instantaneamente.",
        "Passo 3: Avaliar a canalização: rios retificados perdem suas curvas e planícies de inundação (várzeas) naturais, que funcionavam como 'esponjas' reguladoras de cheias.",
        "Passo 4: O resultado combinado é a enchente repentina de fundo de vale.",
        "Passo 5: A opção 'a' descreve o mecanismo hidrológico de forma perfeita."
      ],
      coreConcept: "Impermeabilização do solo urbano, escoamento superficial (run-off), perda de várzeas e enchentes.",
      trapWarning: "Culpar exclusivamente a 'intensidade das chuvas' de forma fatalista, desconsiderando que a catástrofe decorre de intervenções antrópicas equivocadas de drenagem urbana."
    },
    commonTraps: ["culpar_apenas_o_clima_sem_avaliar_a_impermeabilizacao", "desconhecer_o_papel_das_varzeas"],
    tags: ["enchentes", "impermeabilizacao", "bacia_hidrografica", "drenagem_urbana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-016",
    area: "humanas",
    competence: 5,
    skill: 21,
    topic: "Habitação Urbana",
    subtopic: "Déficit Habitacional e Zonas Especiais de Interesse Social (ZEIS)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Dados da Fundação João Pinheiro estimam que o déficit habitacional no Brasil ultrapassa 6 milhões de moradias, com destaque para o ônus excessivo com o aluguel urbano nas famílias que recebem até três salários mínimos. Paralelamente, os censos do IBGE apontam a existência de mais de 11 milhões de imóveis residenciais desocupados ou abandonados no país, muitos localizados em regiões centrais com rede consolidada de água, luz e transporte público.",
      source: "Fundação João Pinheiro / IBGE, Censo Demográfico."
    },
    prompt: "Para democratizar o acesso à terra urbanizada e combater o déficit habitacional, o Estatuto da Cidade previu a criação das Zonas Especiais de Interesse Social (ZEIS), cujo instrumento urbanístico tem como finalidade primordial:",
    options: [
      { id: "a", text: "destinar e reservar porções estratégicas do solo urbano prioritariamente para a regularização fundiária de favelas e a produção de habitação de interesse social para famílias de baixa renda.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "proibir a entrada de serviços de saneamento básico e postos de saúde em loteamentos informais para forçar a desocupação rápida.", isCorrect: false, distractorRationale: "O objetivo das ZEIS é exatamente levar urbanização, infraestrutura e regularização a essas comunidades." },
      { id: "c", text: "isentar totalmente grandes incorporadoras imobiliárias de qualquer exigência de impacto de trânsito em bairros nobres.", isCorrect: false, distractorRationale: "ZEIS são instrumentos de inclusão social nas áreas populares, não privilégios para megaempreendimentos de luxo." },
      { id: "d", text: "transferir compulsoriamente os moradores de favelas para áreas rurais remotas sem compensação financeira.", isCorrect: false, distractorRationale: "Remoções forçadas violam o direito à cidade e as diretrizes do Estatuto da Cidade." },
      { id: "e", text: "autorizar a derrubada de patrimônio histórico para a construção exclusiva de helipontos privados.", isCorrect: false, distractorRationale: "Totalmente incoerente com o propósito de interesse social da lei." }
    ],
    detailedExplanation: {
      summary: "As ZEIS (Zonas Especiais de Interesse Social) demarcam áreas do município onde a construção deve ser prioritariamente voltada a moradia popular e regularização de assentamentos precários.",
      stepByStep: [
        "Passo 1: Identificar a contradição urbana: milhões de famílias sem teto ou pagando aluguéis abusivos enquanto milhões de prédios e terrenos permanecem vazios para especulação.",
        "Passo 2: Reconhecer a função das ZEIS: delimitadas no Plano Diretor, elas 'blindam' determinadas áreas do solo da especulação predatória, exigindo que ali se construam casas populares ou se façam obras de saneamento e regularização jurídica de posse.",
        "Passo 3: Compreender o impacto social: as ZEIS garantem que o trabalhador pobre possa morar em áreas integradas à cidade sem ser empurrado para margens sem infraestrutura.",
        "Passo 4: A opção 'a' sintetiza com clareza o objetivo legal e social das ZEIS."
      ],
      coreConcept: "ZEIS, Plano Diretor, função social da propriedade e combate ao déficit habitacional no Brasil.",
      trapWarning: "Achar que a única solução para favelas é a demolição e remoção. As ZEIS priorizam a urbanização in loco e a regularização jurídica da permanência dos moradores."
    },
    commonTraps: ["confundir_zeis_com_zonas_de_expulsao", "desconhecer_o_conceito_de_regularizacao_fundiaria"],
    tags: ["zeis", "deficit_habitacional", "estatuto_da_cidade", "moradia_popular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-017",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Espaço Urbano e Tecnologia",
    subtopic: "Cidades Inteligentes e Vigilância no Espaço Público",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A implementação de programas de 'cidades inteligentes' (smart cities) em metrópoles brasileiras tem promovido o espalhamento de milhares de câmeras com reconhecimento facial e sistemas de análise algorítmica de comportamentos em praças, estações de transporte coletivo e vias públicas. Especialistas em direitos humanos e urbanismo apontam preocupações quanto à opacidade dos dados e ao risco de reprodução de viés racial e discriminação algorítmica na atuação policial preventiva.",
      source: "Rede de Observatórios da Segurança / CEPID-USP"
    },
    prompt: "O debate contemporâneo em torno do uso intensivo de reconhecimento facial e inteligência artificial no monitoramento do espaço urbano tensiona o equilíbrio entre:",
    options: [
      { id: "a", text: "a promessa tecnológica de aumento da segurança pública e a salvaguarda de direitos fundamentais, como a privacidade individual e o tratamento não discriminatório dos cidadãos no espaço público.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o interesse de montadoras de automóveis e a proliferação de ciclovias nos centros expandidos.", isCorrect: false, distractorRationale: "O tema do texto é vigilância facial algorítmica e direitos civis, e não mobilidade cicloviária versus montadoras." },
      { id: "c", text: "a necessidade de iluminação pública noturna e a proibição de uso de energia solar nas fachadas prediais.", isCorrect: false, distractorRationale: "A controvérsia não diz respeito ao tipo de lâmpada ou painel solar, mas ao controle biométrico e vigilância em massa." },
      { id: "d", text: "a ampliação de bibliotecas comunitárias e o fechamento compulsório de livrarias de rua.", isCorrect: false, distractorRationale: "Tema sem qualquer aderência ao debate sobre câmeras de vigilância e inteligência artificial." },
      { id: "e", text: "a exigência de autorização cartorial compulsória para cruzar bairros de um mesmo município metropolitano.", isCorrect: false, distractorRationale: "Não há exigência de autorizações documentais internas para a livre locomoção urbana no Brasil." }
    ],
    detailedExplanation: {
      summary: "A expansão de algoritmos de reconhecimento facial nos centros urbanos gera atrito entre os discursos de eficiência de segurança e a criminalização desproporcional de corpos negros e periféricos.",
      stepByStep: [
        "Passo 1: Compreender o papel da tecnologia no urbanismo: as smart cities prometem gestão eficiente do tráfego e combate ao crime por big data.",
        "Passo 2: Identificar a crítica de direitos humanos: pesquisas mostram que bancos de imagens frequentemente apresentam taxas desproporcionais de erro e falsos-positivos ao identificar pessoas negras, resultando em prisões injustas de inocentes.",
        "Passo 3: Reconhecer a ameaça às liberdades civis: a sensação de vigilância onipresente restringe o livre uso do espaço público e manifestações pacíficas.",
        "Passo 4: A opção 'a' expressa o dilema sociológico e ético que conecta tecnologia, urbanismo e cidadania no ENEM."
      ],
      coreConcept: "Smart cities, vigilância biopolítica, discriminação algorítmica e o direito ao espaço público.",
      trapWarning: "Tratar a tecnologia como elemento neutro que 'resolve todos os problemas urbanos' sem examinar os vieses sociais de sua aplicação concreta."
    },
    commonTraps: ["achar_que_tecnologia_e_sempre_neutra", "ignorar_os_vieses_raciais_do_reconhecimento_facial"],
    tags: ["smart_cities", "vigilancia", "reconhecimento_facial", "direitos_humanos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-018",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Demografia Urbana",
    subtopic: "Transição Demográfica e Envelhecimento Populacional",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os resultados do Censo Demográfico de 2022 do IBGE revelaram que a taxa de fecundidade no Brasil caiu para menos de 1,6 filho por mulher (abaixo da taxa de reposição populacional de 2,1) e que o índice de envelhecimento atingiu 55 idosos para cada 100 crianças. Em metrópoles consolidadas como Porto Alegre, Belo Horizonte e São Paulo, a proporção de cidadãos com mais de 60 anos já supera amplamente a média nacional.",
      source: "IBGE, Censo Demográfico 2022 / Transição Demográfica."
    },
    prompt: "Essa mudança estrutural na pirâmide etária urbana brasileira exige que o planejamento das cidades passe a priorizar políticas públicas voltadas a:",
    options: [
      { id: "a", text: "acessibilidade universal nas calçadas e no transporte público coletivo, adaptação do mobiliário urbano e fortalecimento de redes municipais de cuidados geriátricos e atenção básica de saúde.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "construção massiva e exclusiva de creches e escolas de ensino fundamental em todos os bairros centrais em detrimento dos hospitais.", isCorrect: false, distractorRationale: "Com a queda na taxa de fecundidade, a base de crianças diminui percentualmente, reduzindo a demanda por novas creches em muitas áreas." },
      { id: "c", text: "substituição de faixas de pedestres e semáforos temporizados por passarelas com rampas íngremes e escadas metálicas sem elevadores.", isCorrect: false, distractorRationale: "Escadas e rampas íngremes criam barreiras intransponíveis para a mobilidade de idosos e pessoas com deficiência." },
      { id: "d", text: "incentivo compulsório ao retorno dos aposentados para atividades agropecuárias de subsistência no semiárido.", isCorrect: false, distractorRationale: "Deslocamento forçado de idosos para o campo é uma medida inexistente e inconstitucional." },
      { id: "e", text: "extinção do passe livre e de gratuidades no transporte coletivo urbano para a faixa populacional acima de 65 anos.", isCorrect: false, distractorRationale: "A gratuidade a idosos é assegurada pelo Estatuto da Pessoa Idosa como garantia de dignidade e inclusão social." }
    ],
    detailedExplanation: {
      summary: "A transição demográfica avançada no Brasil transforma as demandas urbanas: menos creches nos centros e mais acessibilidade, hospitais de geriatria e calçadas caminháveis para a população idosa.",
      stepByStep: [
        "Passo 1: Analisar os dados censitários: aumento da expectativa de vida somado à queda vertiginosa da taxa de natalidade/fecundidade = alargamento do topo da pirâmide etária e estreitamento da base de jovens.",
        "Passo 2: Identificar os desafios no espaço urbano: calçadas esburacadas, semáforos de pedestres ultrarrápidos e ônibus com degraus altos tornam a cidade hostil para pessoas idosas com mobilidade reduzida.",
        "Passo 3: Mapear as demandas de saúde: maior prevalência de doenças crônico-degenerativas exige unidades básicas de saúde e centros-dia capacitados para gerontologia.",
        "Passo 4: A opção 'a' sintetiza adequadamente o desenho de cidades amigáveis à longevidade."
      ],
      coreConcept: "Transição demográfica, envelhecimento populacional e adaptação da infraestrutura urbana no Brasil.",
      trapWarning: "Achar que a população brasileira ainda é predominantemente 'jovem' como na década de 1970; o Censo 2022 confirmou que o bônus demográfico está se encerrando rapidamente."
    },
    commonTraps: ["achar_que_a_populacao_infantil_ainda_esta_crescendo", "desconsiderar_o_impacto_do_envelhecimento_na_mobilidade"],
    tags: ["censo_2022", "transicao_demografica", "envelhecimento", "acessibilidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-019",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Trabalho e Espaço Urbano",
    subtopic: "Economia Informal e 'Uberização' nas Metrópoles",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas últimas décadas, a paisagem das ruas e avenidas das grandes capitais brasileiras foi profundamente transformada pela proliferação de trabalhadores em motocicletas e bicicletas munidos de mochilas térmicas de entrega de refeições, além de motoristas de carros particulares intermediados por plataformas digitais. Esse modelo de gestão algorítmica do trabalho transfere aos trabalhadores os custos de manutenção dos veículos e os riscos de acidentes, sob a retórica da autonomia e do 'empreendedorismo de si mesmo'.",
      source: "Ricardo Antunes, O Privilégio da Servidão: O novo proletariado de serviços na era digital."
    },
    prompt: "A expansão dessa modalidade laboral, frequentemente designada como 'uberização', expressa uma transformação na dinâmica socioespacial das cidades caracterizada por:",
    options: [
      { id: "a", text: "precarização das relações de trabalho e apropriação das ruas como local de trabalho informal contínuo, sem garantias de descanso, previdência social ou pontos de apoio físico adequados.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "consolidação de vínculos empregatícios com estabilidade decenal e concessão de plano de saúde integral por parte dos aplicativos.", isCorrect: false, distractorRationale: "O modelo de plataforma nega o vínculo da CLT e não concede estabilidade ou assistência médica direta." },
      { id: "c", text: "erradicação definitiva de acidentes de trânsito em função de rotas otimizadas por inteligência artificial.", isCorrect: false, distractorRationale: "Pelo contrário, o tempo curto e as metas de entrega aumentaram drasticamente os índices de sinistros e mortes no trânsito." },
      { id: "d", text: "redução do tempo de permanência diária dos entregadores nas vias públicas para no máximo duas horas por dia.", isCorrect: false, distractorRationale: "Jornadas de entregadores por aplicativo frequentemente superam 10 a 14 horas diárias para garantir renda mínima." },
      { id: "e", text: "distribuição equitativa de renda que transformou os entregadores nos principais compradores de imóveis de luxo nos centros.", isCorrect: false, distractorRationale: "Trata-se de uma categoria submetida a remunerações rebaixadas e alta vulnerabilidade socioeconômica." }
    ],
    detailedExplanation: {
      summary: "A uberização exemplifica a flexibilização precarizada do trabalho contemporâneo, onde o espaço viário urbano se torna a 'fábrica a céu aberto' de entregadores desprovidos de direitos trabalhistas.",
      stepByStep: [
        "Passo 1: Analisar o fenômeno da plataformização: empresas de tecnologia gerenciam mão de obra via algoritmos sem assumir os encargos da CLT.",
        "Passo 2: Observar a materialidade na cidade: entregadores aglomeram-se em calçadas e semáforos aguardando chamadas sem acesso a banheiros, água potável ou abrigo contra chuva.",
        "Passo 3: Reconhecer a transferência de riscos: gasolina, manutenção da moto/bicicleta e contas hospitalares de acidentes de trânsito recaem integralmente sobre o entregador.",
        "Passo 4: A opção 'a' sintetiza com rigor sociológico e geográfico esse modelo de precarização urbana."
      ],
      coreConcept: "Uberização, precarização do trabalho, espaço público como local de labor e informalidade urbana no Brasil.",
      trapWarning: "Acreditar no discurso do 'microempresário autônomo' sem perceber a subordinação algorítmica e a ausência de seguridade social real."
    },
    commonTraps: ["confundir_trabalho_em_plataformas_com_autonomia_empresarial_real"],
    tags: ["uberizacao", "trabalho_informal", "espaco_urbano", "sociologia_do_trabalho"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-020",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Urbanização",
    subtopic: "Desmetropolização e Dinamismo das Cidades Médias",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A partir do final do século XX, os censos do IBGE apontaram uma desaceleração no ritmo de crescimento demográfico das grandes metrópoles tradicionais brasileiras (como Rio de Janeiro e São Paulo) em paralelo a um vigoroso crescimento das cidades médias (população entre 100 mil e 500 mil habitantes), como Londrina, Campinas, Uberlândia, Ribeirão Preto e Sorocaba. Esse processo é impulsionado pela desconcentração industrial e pela saturação dos grandes centros.",
      source: "Roberto Lobato Corrêa, Rede Urbana e Cidades Médias no Brasil."
    },
    prompt: "Entre os fatores locacionais de repulsão que motivaram empresas e indústrias a deixar as grandes metrópoles em direção às cidades médias do interior, destacam-se:",
    options: [
      { id: "a", text: "o elevado custo da terra urbana, o trânsito saturado que encarece a logística, os impostos elevados e a forte atuação reivindicativa dos sindicatos metropolitanos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a ausência total de energia elétrica e rodovias pavimentadas nas capitais do Sudeste.", isCorrect: false, distractorRationale: "As capitais possuem a infraestrutura básica mais consolidada, não sendo esse o motivo de repulsão." },
      { id: "c", text: "a proibição constitucional de funcionamento de indústrias em municípios com mais de 1 milhão de habitantes.", isCorrect: false, distractorRationale: "Não existe qualquer proibição legal desse tipo na legislação brasileira." },
      { id: "d", text: "o esgotamento absoluto de mão de obra em idade ativa nas cidades metropolitanas.", isCorrect: false, distractorRationale: "As metrópoles possuem os maiores contingentes de mão de obra disponível do país." },
      { id: "e", text: "o interesse exclusivo das multinacionais em instalar fábricas em reservas extrativistas da floresta amazônica.", isCorrect: false, distractorRationale: "A interiorização industrial ocorreu sobretudo no interior de São Paulo, Minas Gerais, Paraná e Santa Catarina, em eixos logísticos rodoviários consolidados." }
    ],
    detailedExplanation: {
      summary: "A 'desmetropolização' decorre de deseconomias de aglomeração nas metrópoles (terra cara, congestionamentos, tributos altos) confrontadas com incentivos fiscais e custos operacionais menores nas cidades médias.",
      stepByStep: [
        "Passo 1: Entender o conceito de deseconomia de aglomeração: quando a metrópole cresce em excesso, os custos de trânsito, criminalidade, preço do metro quadrado e impostos passam a superar as vantagens de estar nela.",
        "Passo 2: Analisar a atratividade das cidades médias: terrenos amplos e baratos próximos a rodovias duplicadas, governos municipais oferecendo isenções fiscais ('guerra fiscal') e sindicatos menos mobilizados.",
        "Passo 3: Observar as redes técnicas: a interiorização das redes de telecomunicação, internet de fibra ótica e universidades públicas permitiu que o interior tivesse infraestrutura técnica competitiva.",
        "Passo 4: A opção 'a' sintetiza com exatidão os fatores de repulsão metropolitana."
      ],
      coreConcept: "Desmetropolização, desconcentração industrial, deseconomias de aglomeração e papel das cidades médias.",
      trapWarning: "Não confundir desmetropolização com esvaziamento das metrópoles. As metrópoles continuam populosas e no comando financeiro, apenas crescem em ritmo percentual mais lento enquanto transferem fábricas para o interior."
    },
    commonTraps: ["achar_que_as_metropoles_perderam_populacao_absoluta", "confundir_desmetropolizacao_com_ruralizacao"],
    tags: ["desmetropolizacao", "cidades_medias", "desconcentracao_industrial", "fatores_locacionais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];


