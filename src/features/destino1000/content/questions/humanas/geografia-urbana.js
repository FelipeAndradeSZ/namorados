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
    cityId: "sao-paulo",
    hubId: "metro-sp",
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
    cityId: "sao-paulo",
    hubId: "metro-sp",
    context: {
      supportText: "Dados sobre o deslocamento nas regiões metropolitanas do Brasil indicam que os trabalhadores de baixa renda gastam, em média, duas a três horas diárias no trajeto casa-trabalho-casa. Isso ocorre porque as oportunidades de emprego estão concentradas nos centros, enquanto a habitação popular foi empurrada para as franjas periféricas.",
      source: "IPEA, Mobilidade Urbana no Brasil (adaptado)."
    },
    prompt: "O problema da mobilidade urbana descrito evidencia uma relação direta com o modelo histórico de crescimento das cidades brasileiras. Qual é o principal impacto socioeconômico desse padrão de deslocamento pendular prolongado?",
    options: [
      { id: "a", text: "O barateamento do custo de vida nas periferias, o que compensa as horas gastas em trânsito.", isCorrect: false, distractorRationale: "O custo do transporte e o tempo perdido precarizam a vida do trabalhador, não gerando 'compensação' real." },
      { id: "b", text: "A redução da jornada de trabalho nas áreas centrais, ajustando-se ao tempo de viagem.", isCorrect: false, distractorRationale: "As jornadas de trabalho não são reduzidas para compensar o tempo de trânsito." },
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
    cityId: "rio-de-janeiro",
    hubId: "geral",
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
    cityId: "brasilia",
    hubId: "geral",
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
    cityId: "brasilia",
    hubId: "geral",
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
  }
];
