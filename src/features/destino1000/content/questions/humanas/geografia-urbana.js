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
  }
];

