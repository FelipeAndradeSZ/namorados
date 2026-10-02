/**
 * BANCO DE QUESTÕES ENEM: Geografia Urbana, Metropolização e Segregação Socioespacial
 * Área: Ciências Humanas e suas Tecnologias
 * Disciplina: Geografia Urbana e Sociologia Espacial
 * Quantidade: 25 Questões Inéditas de Alta Fidelidade ENEM (HUM-SEG-001 a HUM-SEG-025)
 * Regra Estrita: ZERO termos de deslocamento turístico. Foco em urbanização brasileira, conurbação, gentrificação, direito à cidade, mobilidade pendular e desigualdade socioespacial.
 */

export const QUESTIONS_GEOGRAFIA_URBANA_SEGREGACAO = [
  {
    id: "HUM-SEG-001",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "Gentrificação e Valorização Imobiliária Excludente",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas últimas três décadas, antigas áreas portuárias e bairros centrais degradados de metrópoles brasileiras foram alvo de intervenções estatais associadas ao capital imobiliário privado sob o discurso do 'revitalização' urbana. Essas reformas promovem a recuperação da infraestrutura física, a instalação de centros culturais e novos empreendimentos gastronômicos e corporativos. Paralelamente, observa-se o aumento abrupto do valor do metro quadrado e do IPTU, resultando na substituição compulsória de antigos moradores de baixa renda e pequenos comércios tradicionais por um público de alto poder aquisitivo.",
      source: "MARICATO, E. Brasil, Cidades: Alternativas para a Crise Urbana. Petrópolis: Vozes, 2018."
    },
    prompt: "O processo socioespacial descrito no texto é conceituado na geografia urbana crítica como",
    options: [
      {
        id: "a",
        text: "conurbação interestadual, gerada pela fusão física de duas capitais regionais.",
        isCorrect: false,
        distractorRationale: "Conurbação refere-se à união física contígua da mancha urbana de dois municípios, não à elitização de um bairro."
      },
      {
        id: "b",
        text: "gentrificação, marcada pela apropriação do solo urbano pelas classes de maior renda e pela expulsão indireta das populações vulneráveis para periferias distantes.",
        isCorrect: true,
        distractorRationale: "Correto: A gentrificação (do inglês 'gentry', nobreza/alta burguesia) é o processo de transformação socioespacial de áreas centrais ou históricas degradadas que, após receberem investimentos públicos e privados, sofrem valorização imobiliária desmedida. O encarecimento do custo de vida e do aluguel expulsa ('despejo econômico') os moradores pobres históricos para periferias desprovidas de serviços, convertendo o espaço em consumo elitizado."
      },
      {
        id: "c",
        text: "desmetropolização demográfica, provocada pela fuga em massa de indústrias pesadas para o campo.",
        isCorrect: false,
        distractorRationale: "Desmetropolização trata da desaceleração do crescimento de megacidades em benefício de cidades médias, não da reforma de centros."
      },
      {
        id: "d",
        text: "reforma agrária urbana, caracterizada pela distribuição gratuita de lotes centrais a movimentos populares de moradia.",
        isCorrect: false,
        distractorRationale: "O texto descreve o oposto: a privatização e encarecimento do espaço, e não distribuição popular."
      },
      {
        id: "e",
        text: "macrocefalia primária, que consiste na ausência de cidades médias na hierarquia urbana nacional.",
        isCorrect: false,
        distractorRationale: "Macrocefalia urbana é a hipertrofia desproporcional de uma metrópole que concentra população e serviços, e não a reforma elitizante de um bairro."
      }
    ],
    detailedExplanation: {
      summary: "A gentrificação caracteriza-se pela valorização imobiliária provocada por reformas urbanísticas em áreas populares ou centrais, expulsando indiretamente moradores vulneráveis.",
      stepByStep: [
        "1. Identificar as palavras-chave do texto: 'revitalização', 'aumento do valor do metro quadrado', 'substituição de antigos moradores de baixa renda'.",
        "2. Reconhecer a crítica geográfica ao termo 'revitalização': a cidade não estava 'morta', mas habitada por classes populares que são empurradas para a periferia.",
        "3. Associar o fenômeno ao conceito de gentrificação (cunhado originariamente por Ruth Glass em 1964).",
        "4. Concluir que a gentrificação é uma forma de segregação socioespacial promovida pela aliança entre poder público e capital imobiliário."
      ],
      coreConcept: "Gentrificação é a transformação socioeconômica e elitização de um bairro, expulsando populações originais de menor poder aquisitivo.",
      trapWarning: "Cuidado com o termo 'revitalização': nas provas do ENEM, ele costuma ser criticado como discurso ideológico que mascara a gentrificação e a especulação imobiliária."
    },
    commonTraps: [
      "Confundir gentrificação com conurbação.",
      "Achar que o processo é puramente benéfico, ignorando a expulsão das classes trabalhadoras."
    ],
    tags: ["Humanas", "Geografia Urbana", "Gentrificação", "Segregação Socioespacial", "Especulação Imobiliária"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-002",
    area: "humanas",
    competence: 2,
    skill: 9,
    topic: "Geografia",
    subtopic: "Mobilidade Urbana Pendular e a Fratura Periferia-Centro",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Dados da Pesquisa Nacional por Amostra de Domicílios (PNAD) indicam que trabalhadores residentes nos municípios da Baixada Fluminense ou no extremo Leste Metropolitano de São Paulo despendem, em média, de duas a quatro horas diárias no interior de trens metropolitanos e ônibus circulares para acessar postos de trabalho e serviços situados nas regiões centrais das capitais, retornando aos seus lares somente ao final da noite.",
      source: "IBGE. Arranjos Populacionais e Movimentos Pendulares no Brasil. Rio de Janeiro: IBGE, 2020."
    },
    prompt: "O deslocamento rotineiro descrito exemplifica um movimento populacional e reflete uma dinâmica socioespacial conhecidos, respectivamente, como",
    options: [
      {
        id: "a",
        text: "transumância sazonal e descentralização equilibrada dos equipamentos urbanos.",
        isCorrect: false,
        distractorRationale: "Transumância é migração sazonal ligada ao pastoreio e colheitas agrícolas, não deslocamento urbano diário."
      },
      {
        id: "b",
        text: "migração pendular e segregação socioespacial marcada pela cisão entre locais de moradia e postos de trabalho.",
        isCorrect: true,
        distractorRationale: "Correto: A migração pendular é o deslocamento diário regular de ida e volta realizado por trabalhadores e estudantes entre o município de residência (muitas vezes 'cidade-dormitório' periférica) e o polo central de emprego e serviços. Ela expressa a aguda segregação socioespacial brasileira, na qual as classes trabalhadoras foram empurradas para periferias carentes de emprego, gerando a 'crise da mobilidade urbana'."
      },
      {
        id: "c",
        text: "êxodo rural definitivo e unificação homogênea das rendas per capita na metrópole.",
        isCorrect: false,
        distractorRationale: "O êxodo rural é a migração definitiva do campo para a cidade, e a renda metropolitana é profundamente desigual."
      },
      {
        id: "d",
        text: "nomadismo pastoril e homogeneização espacial das oportunidades metropolitanas.",
        isCorrect: false,
        distractorRationale: "Conceito anacrônico pré-histórico sem relação com metrópoles industriais."
      },
      {
        id: "e",
        text: "fuga de cérebros e saturação dos sistemas de previdência social regional.",
        isCorrect: false,
        distractorRationale: "Fuga de cérebros é a emigração de cientistas e profissionais altamente qualificados para o exterior."
      }
    ],
    detailedExplanation: {
      summary: "A migração pendular é o vaivém diário entre moradia e trabalho; ela decorre da segregação socioespacial que concentra empregos no centro e empurra a classe trabalhadora para a periferia.",
      stepByStep: [
        "1. Identificar as características do deslocamento: diário, repetitivo, de ida e volta entre periferia e centro.",
        "2. Conceituar como 'migração pendular' (movimento do pêndulo do relógio).",
        "3. Identificar a causa estrutural: cidades-dormitório sem postos de trabalho suficientes e concentração histórica de infraestrutura no centro expandido.",
        "4. Relacionar com as consequências: perda de qualidade de vida, tempo gasto no trânsito e poluição atmosférica."
      ],
      coreConcept: "A migração pendular reflete o descompasso entre a localização da moradia popular e a concentração dos postos de trabalho nas metrópoles.",
      trapWarning: "A migração pendular NÃO é uma mudança de residência definitiva; o indivíduo volta para casa todos os dias."
    },
    commonTraps: [
      "Confundir movimento pendular com migração sazonal (transumância) ou êxodo rural definitivo.",
      "Achar que as cidades periféricas possuem a mesma oferta de empregos que os polos centrais."
    ],
    tags: ["Humanas", "Geografia Urbana", "Migração Pendular", "Mobilidade Urbana", "Cidades-Dormitório"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-003",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "Conurbação e Gestão Metropolitana no Brasil",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao trafegar por rodovias como a Via Dutra ou a Rodovia Ayrton Senna no trecho entre a capital paulista e municípios como Guarulhos e Osasco, um observador é incapaz de identificar onde termina uma cidade e onde começa a outra, tamanha é a continuidade ininterrupta de galpões, avenidas e habitações contíguas.",
      source: "SANTOS, M. A Urbanização Brasileira. São Paulo: Edusp, 2018."
    },
    prompt: "O fenômeno geográfico de expansão horizontal contínua que unifica a malha urbana de dois ou mais municípios vizinhos é denominado",
    options: [
      {
        id: "a",
        text: "gentrificação setorial.",
        isCorrect: false,
        distractorRationale: "Gentrificação é a valorização e elitização de bairros específicos, não a expansão física territorial contínua entre municípios."
      },
      {
        id: "b",
        text: "conurbação.",
        isCorrect: true,
        distractorRationale: "Correto: A conurbação ocorre quando o crescimento horizontal das manchas urbanas de dois ou mais municípios contíguos atinge tamanha extensão que os limites físicos e edificados entre eles desaparecem, integrando espacialmente os territórios. A conurbação impõe desafios graves de gestão pública integrada (transporte, saneamento, destinação de lixo), exigindo a instituição formal de Regiões Metropolitanas (RMs)."
      },
      {
        id: "c",
        text: "reflorestamento perimetral.",
        isCorrect: false,
        distractorRationale: "Trata-se de expansão de asfalto e concreto, o oposto de reflorestamento."
      },
      {
        id: "d",
        text: "ruralização concêntrica.",
        isCorrect: false,
        distractorRationale: "A dinâmica apresentada é de intensa urbanização industrial e residencial."
      },
      {
        id: "e",
        text: "descentralização agrária.",
        isCorrect: false,
        distractorRationale: "O texto trata exclusivamente do espaço urbano metropolitano."
      }
    ],
    detailedExplanation: {
      summary: "A conurbação é o encontro e fusão física da mancha urbana construída de municípios vizinhos, integrando-os funcionalmente.",
      stepByStep: [
        "1. Analisar a descrição: continuidade ininterrupta de construções entre dois municípios autônomos.",
        "2. Identificar o conceito geográfico correspondente: conurbação.",
        "3. Reconhecer a exigência legal e administrativa: para planejar serviços públicos de áreas conurbadas, criam-se as Regiões Metropolitanas.",
        "4. Diferenciar de outros termos urbanos como gentrificação ou macrocefalia."
      ],
      coreConcept: "Conurbação é a fusão física das manchas urbanas de municípios limítrofes decorrente da expansão horizontal das cidades.",
      trapWarning: "Embora a conurbação una fisicamente as cidades, os municípios continuam sendo unidades político-administrativas autônomas com prefeitos e câmaras próprias."
    },
    commonTraps: [
      "Achar que conurbação significa que as cidades se uniram em um único município formal.",
      "Confundir conurbação com metropolização institucional."
    ],
    tags: ["Humanas", "Geografia Urbana", "Conurbação", "Região Metropolitana", "Mancha Urbana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-004",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "Os Circuitos Superior e Inferior da Economia Urbana (Milton Santos)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em sua clássica obra 'O Espaço Dividido', o geógrafo Milton Santos demonstrou que as cidades do Sul Global não possuem um sistema econômico único, mas organizam-se em dois circuitos indissociáveis e interdependentes: o circuito superior (moderno, intensivo em capital e tecnologia, conectado a bancos e corporações transnacionais) e o circuito inferior (intensivo em trabalho informal, baseado em pequenos comércios populares, ambulantes e redes de solidariedade cotidiana).",
      source: "SANTOS, M. O Espaço Dividido: Os Dois Circuitos da Economia Urbana dos Países Subdesenvolvidos. São Paulo: Edusp, 2008."
    },
    prompt: "De acordo com a teoria dos dois circuitos formulada por Milton Santos, o circuito inferior da economia urbana",
    options: [
      {
        id: "a",
        text: "funciona de forma inteiramente isolada, sem manter qualquer relação de compra, crédito ou abastecimento com as corporações do circuito superior.",
        isCorrect: false,
        distractorRationale: "Os dois circuitos são interdependentes: o circuito inferior abastece-se de mercadorias produzidas no superior e viabiliza a sobrevivência dos trabalhadores."
      },
      {
        id: "b",
        text: "desaparece espontaneamente e de modo rápido à medida que a internet e o sistema bancário digital se expandem nas favelas.",
        isCorrect: false,
        distractorRationale: "O circuito inferior é estrutural nos países periféricos e não desaparece com a modernização técnica."
      },
      {
        id: "c",
        text: "cumpre papel essencial de amortecedor social nas metrópoles, viabilizando a subsistência de milhões de trabalhadores precarizados e desprovidos de acesso ao emprego formal.",
        isCorrect: true,
        distractorRationale: "Correto: O circuito inferior abriga a economia popular e informal (feirantes, camelôs, oficinas de bairro, costureiras, pequenos consertos). Ele não exige grandes capitais de giro nem escolaridade de elite e opera com crédito pessoalizado e fracionamento de mercadorias, permitindo que as massas desempregadas pelo circuito superior mecanizado consigam sobreviver na metrópole excludente."
      },
      {
        id: "d",
        text: "constitui a causa primária da inflação galopante e do endividamento externo do Estado soberano.",
        isCorrect: false,
        distractorRationale: "A inflação e a dívida pública vinculam-se ao sistema financeiro macroeconômico (circuito superior)."
      },
      {
        id: "e",
        text: "é composto exclusivamente por multinacionais de tecnologia que operam plataformas de comércio eletrônico global.",
        isCorrect: false,
        distractorRationale: "Multinacionais de comércio eletrônico pertencem tipicamente ao circuito superior moderno da economia."
      }
    ],
    detailedExplanation: {
      summary: "O circuito inferior da economia urbana garante a sobrevivência e reprodução material das populações periféricas excluídas do emprego formal no capitalismo corporativo.",
      stepByStep: [
        "1. Compreender a tese de Milton Santos: nos países periféricos, a modernização é incompleta e desigual.",
        "2. Circuito superior: bancos, shoppings, grandes redes de varejo, tecnologia de ponta, empregos formais seletivos.",
        "3. Circuito inferior: vendedores de rua, camelôs, comércio popular, relações de confiança ('fiado'), alta absorção de mão de obra.",
        "4. Interdependência: o ambulante vende produtos fabricados por indústrias do circuito superior, e o circuito inferior garante o sustento da classe trabalhadora com preços acessíveis."
      ],
      coreConcept: "Os circuitos superior e inferior da economia urbana operam de forma dialética, garantindo a reprodução da força de trabalho nas metrópoles subdesenvolvidas.",
      trapWarning: "O circuito inferior não é sinônimo de crime ou ilegalidade, mas de estratégias legítimas de sobrevivência e trabalho popular perante o desemprego estrutural."
    },
    commonTraps: [
      "Achar que o circuito inferior é um resquício primitivo destinado a sumir rapidamente.",
      "Acreditar que os dois circuitos não interagem entre si."
    ],
    tags: ["Humanas", "Geografia Urbana", "Milton Santos", "Circuitos da Economia Urbana", "Trabalho Informal"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-005",
    area: "humanas",
    competence: 2,
    skill: 10,
    topic: "Geografia",
    subtopic: "Enclaves Fortificados e a Segregação Voluntária das Elites",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao investigar as transformações urbanas recentes de metrópoles como São Paulo, a antropóloga Teresa Caldeira identificou a proliferação do que denominou 'enclaves fortificados': condomínios fechados horizontais murados e edifícios de luxo equipados com guaritas blindadas, câmeras infravermelhas e serviços privativos de lazer (piscinas, academias e escolas internas). Sob o argumento da segurança contra a violência urbana, esses espaços segregam-se fisicamente do restante da cidade.",
      source: "CALDEIRA, T. P. R. Cidade de Muros: Crime, Segregação e Cidadania em São Paulo. São Paulo: Edusp/34, 2000."
    },
    prompt: "A difusão dos enclaves fortificados analisada por Teresa Caldeira resulta em impactos sociopolíticos sobre a vivência urbana porque",
    options: [
      {
        id: "a",
        text: "fortalece o convívio democrático igualitário nas praças e parques públicos tradicionais.",
        isCorrect: false,
        distractorRationale: "O enclave privatiza o convívio e esvazia o espaço público democrático."
      },
      {
        id: "b",
        text: "promove a fragmentação do tecido urbano e a erosão da esfera pública compartilhada, naturalizando a desconfiança social e a segregação entre diferentes classes.",
        isCorrect: true,
        distractorRationale: "Correto: Os enclaves fortificados operam uma autossegregação voluntária das elites abastadas. Ao criarem ilhas privadas muradas e independentes do espaço público, enfraquecem a ideia de cidade como lugar de encontro e diversidade, destruindo a convivência cívica democrática e aprofundando o medo do 'outro' (estigmatização das classes pobres como ameaça)."
      },
      {
        id: "c",
        text: "elimina as desigualdades financeiras ao distribuir as benfeitorias da segurança a todas as periferias.",
        isCorrect: false,
        distractorRationale: "A segurança privada dos enclaves é mercadoria cara, inacessível às periferias vulneráveis."
      },
      {
        id: "d",
        text: "anula a necessidade de patrulhamento pelas forças policiais do Estado de Direito.",
        isCorrect: false,
        distractorRationale: "Os enclaves continuam demandando aparato de segurança pública em seu entorno e acessos viários."
      },
      {
        id: "e",
        text: "estimula a circulação irrestrita de pedestres e o uso do transporte público coletivo.",
        isCorrect: false,
        distractorRationale: "Condomínios fechados são dependentes do automóvel particular e hostis ao pedestre e ao transporte coletivo."
      }
    ],
    detailedExplanation: {
      summary: "Os enclaves fortificados representam a segregação voluntária das elites: muros, câmeras e privatização do lazer rompem a sociabilidade pública e fragmentam a cidadania na metrópole.",
      stepByStep: [
        "1. Identificar o objeto de estudo de Teresa Caldeira: condomínios fechados de elite e a cultura dos muros de segurança.",
        "2. Reconhecer a motivação declarada: o medo da violência e do crime.",
        "3. Identificar a consequência socioespacial real: erosão do espaço público, recusa da convivência interclasse e fragmentação do tecido urbano.",
        "4. Concluir que a 'cidade de muros' debilita a vida democrática e aprofunda as fronteiras invisíveis da desigualdade."
      ],
      coreConcept: "Enclaves fortificados privatizam a segurança e o lazer das elites, acelerando a segregação e a perda de vitalidade dos espaços públicos urbanos.",
      trapWarning: "Diferencie a segregação involuntária sofrida pelas periferias desprovidas de saneamento da autossegregação voluntária praticada pelas classes altas em condomínios fechados."
    },
    commonTraps: [
      "Achar que o condomínio fechado resolve o problema da violência urbana no conjunto da sociedade.",
      "Não perceber a crítica sociológica à perda da dimensão pública da cidade."
    ],
    tags: ["Humanas", "Geografia Urbana", "Enclaves Fortificados", "Teresa Caldeira", "Segregação Voluntária"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-006",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A Função Social da Propriedade e o Estatuto da Cidade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Instituído pela Lei Federal nº 10.257/2001, o Estatuto da Cidade regulamentou os artigos 182 e 183 da Constituição Federal de 1988, estabelecendo diretrizes gerais para a política urbana no Brasil. Entre seus instrumentos jurídicos mais inovadores estão a exigência do Plano Diretor participativo para municípios com mais de 20 mil habitantes, a desapropriação com títulos da dívida pública para imóveis ociosos e a aplicação do IPTU progressivo no tempo sobre terrenos mantidos vazios exclusivamente para especulação imobiliária.",
      source: "BRASIL. Lei nº 10.257, de 10 de julho de 2001. Estatuto da Cidade. Brasília: Presidência da República, 2001."
    },
    prompt: "O princípio jurídico e constitucional que orienta e legitima os instrumentos de combate à especulação imobiliária previstos no Estatuto da Cidade é a",
    options: [
      {
        id: "a",
        text: "soberania irrestrita do direito individual de propriedade privada sobre qualquer interesse coletivo.",
        isCorrect: false,
        distractorRationale: "O direito de propriedade no ordenamento brasileiro não é irrestrito; é subordinado ao interesse social."
      },
      {
        id: "b",
        text: "função social da propriedade urbana, segundo a qual o solo urbano deve atender às necessidades coletivas de moradia, infraestrutura e sustentabilidade.",
        isCorrect: true,
        distractorRationale: "Correto: A Constituição de 1988 e o Estatuto da Cidade consagraram a tese de que a propriedade urbana não pode ser usada de modo abusivo ou puramente especulativo. Terrenos que contam com asfalto, saneamento e transporte pagos por toda a sociedade não podem ser mantidos indefinidamente ociosos esperando valorização sem cumprir sua função social (como habitação de interesse social ou equipamentos coletivos)."
      },
      {
        id: "c",
        text: "submissão obrigatória do planejamento municipal aos consórcios imobiliários privados internacionais.",
        isCorrect: false,
        distractorRationale: "O planejamento municipal é soberano e participativo, e não submisso aos consórcios privados."
      },
      {
        id: "d",
        text: "proibição legal de qualquer modalidade de tributação sobre imóveis situados em perímetros urbanos.",
        isCorrect: false,
        distractorRationale: "O texto cita expressamente o IPTU progressivo como instrumento fiscal de intervenção coercitiva."
      },
      {
        id: "e",
        text: "revogação automática de todos os alvarás comerciais de pequenos prestadores de serviços.",
        isCorrect: false,
        distractorRationale: "Não há relação com alvarás comerciais de pequenos prestadores."
      }
    ],
    detailedExplanation: {
      summary: "O Estatuto da Cidade combate terrenos ociosos e especulação com base no princípio constitucional da função social da propriedade urbana.",
      stepByStep: [
        "1. Analisar os instrumentos citados: IPTU progressivo no tempo, desapropriação e Plano Diretor.",
        "2. Identificar a finalidade desses instrumentos: coibir a especulação imobiliária que retém terrenos vazios bem localizados.",
        "3. Localizar o fundamento jurídico na CF/88: a propriedade privada só é garantida se cumprir sua 'função social'.",
        "4. Concluir que o Estatuto da Cidade busca garantir o 'Direito à Cidade' e o acesso à moradia digna."
      ],
      coreConcept: "A função social da propriedade determina que o solo urbano deve servir ao bem comum e não apenas ao lucro especulativo de proprietários de terra ociosa.",
      trapWarning: "O Estatuto da Cidade não aboliu a propriedade privada; ele impôs deveres e limites sociais ao seu exercício na cidade."
    },
    commonTraps: [
      "Achar que o direito de propriedade no Brasil é absoluto e imune a sanções estatais.",
      "Confundir IPTU progressivo com isenção fiscal."
    ],
    tags: ["Humanas", "Geografia Urbana", "Estatuto da Cidade", "Função Social da Propriedade", "Plano Diretor"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-007",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "Macrocefalia Urbana e Hipertrofia do Terciário no Brasil",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A rápida urbanização brasileira, acelerada a partir de meados do século XX pelo intenso êxodo rural decorrente da modernização conservadora do campo e da atração dos polos industriais do Sudeste, produziu um crescimento demográfico desordenado nas grandes cidades. Esse processo ocorreu em ritmo muito superior à capacidade de absorção de mão de obra pelas indústrias fabris e de investimento estatal em infraestrutura sanitária, de transporte e habitação.",
      source: "SANTOS, M. A Urbanização Brasileira. Edusp, 2018."
    },
    prompt: "Como consequência socioeconômica direta desse descompasso histórico entre urbanização acelerada e capacidade de geração de empregos formais, consolidou-se nas metrópoles a",
    options: [
      {
        id: "a",
        text: "plena formalização de todos os postos de trabalho assalariados na construção civil pesada.",
        isCorrect: false,
        distractorRationale: "Ocorreu exatamente o oposto: explosão do desemprego e da informalidade."
      },
      {
        id: "b",
        text: "hipertrofia do setor terciário informal (macrocefalia urbana), caracterizada pela proliferação de subempregos precários de baixa remuneração e sem garantias trabalhistas.",
        isCorrect: true,
        distractorRationale: "Correto: A macrocefalia urbana (crescimento desproporcional da metrópole em relação ao restante da rede) aliou-se à 'hipertrofia do terciário'. Sem que a indústria (setor secundário) conseguisse absorver o contingente gigantesco de migrantes rurais, a população excedente refugiou-se no setor de comércio e serviços informal (ambulantes, guardadores de carro, biscates, faxinas eventuais), gerando sobrevivência de baixa renda e precarização social generalizada."
      },
      {
        id: "c",
        text: "erradicação definitiva das periferias com a distribuição equânime de moradias públicas centrais.",
        isCorrect: false,
        distractorRationale: "A urbanização desordenada gerou exatamente o boom da favelização e da autoconstrução periférica."
      },
      {
        id: "d",
        text: "extinção do setor de comércio de rua em decorrência da mecanização da agricultura familiar.",
        isCorrect: false,
        distractorRationale: "O comércio de rua e informal cresceu exponencialmente nas cidades."
      },
      {
        id: "e",
        text: "redução da taxa de urbanização para patamares inferiores aos do período colonial.",
        isCorrect: false,
        distractorRationale: "A taxa de urbanização do Brasil explodiu de 31% em 1940 para mais de 85% na atualidade."
      }
    ],
    detailedExplanation: {
      summary: "A incapacidade de a indústria absorver os contingentes do êxodo rural culminou na hipertrofia do setor terciário informal e na macrocefalia urbana.",
      stepByStep: [
        "1. Identificar o contexto histórico: rápida urbanização brasileira entre 1950 e 1980 sem reformas sociais estruturais.",
        "2. Reconhecer o fenômeno do inchaço populacional: macrocefalia urbana.",
        "3. Analisar o mercado de trabalho: a indústria fabril modernizou-se e exigiu pouca mão de obra relativa.",
        "4. Identificar o destino dos trabalhadores: o setor terciário (comércio e serviços) inflou com ocupações informais e precarizadas (hipertrofia do terciário)."
      ],
      coreConcept: "A hipertrofia do terciário expressa o refúgio das massas no trabalho informal e subempregos perante a falta de postos industriais e formais.",
      trapWarning: "Cuidado: expansão do setor de serviços não significa necessariamente desenvolvimento de alta tecnologia; em cidades subdesenvolvidas, trata-se de serviços de baixa remuneração e sobrevivência."
    },
    commonTraps: [
      "Achar que todos os trabalhadores que saíram do campo viraram operários industriais protegidos pela CLT.",
      "Confundir setor terciário de alta tecnologia com o terciário informal de sobrevivência."
    ],
    tags: ["Humanas", "Geografia Urbana", "Macrocefalia Urbana", "Setor Terciário", "Trabalho Informal"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-008",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A Rede Urbana Brasileira e o Modelo REGIC do IBGE",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No estudo 'Regiões de Influência das Cidades' (REGIC), o Instituto Brasileiro de Geografia e Estatística (IBGE) mapeia periodicamente a hierarquia da rede urbana brasileira com base na capacidade de atração, gestão do território e oferta de bens e serviços de alta complexidade (hospitais especializados, sedes de tribunais superiores, universidades de ponta e centros de decisão corporativa). Nesse modelo, São Paulo figura no topo isolado como a única 'Grande Metrópole Nacional' do país.",
      source: "IBGE. Regiões de Influência das Cidades 2018 (REGIC). Rio de Janeiro: IBGE, 2020."
    },
    prompt: "A posição de destaque ocupada por São Paulo no topo da hierarquia urbana nacional e sua classificação como Metrópole Global explicam-se por",
    options: [
      {
        id: "a",
        text: "sua economia basear-se primordialmente na exportação de minério de ferro em estado bruto extraído em sua área central.",
        isCorrect: false,
        distractorRationale: "São Paulo não é polo de extração de minério de ferro; seu poder é de comando terciário, financeiro e corporativo."
      },
      {
        id: "b",
        text: "sua função de centro de comando financeiro, corporativo e informacional, concentrando bolsas de valores, sedes de multinacionais e fluxos globais de decisão.",
        isCorrect: true,
        distractorRationale: "Correto: A posição de São Paulo na rede urbana não decorre apenas de sua população absoluta, mas de sua centralidade na economia do conhecimento e das finanças. É a sede da B3 (bolsa de valores), abriga os maiores bancos, holdings corporativas, escritórios de advocacia transnacionais e centros de telecomunicações que comandam fluxos em todo o território nacional e na América do Sul."
      },
      {
        id: "c",
        text: "possuir taxa de pobreza e de favelização rigorosamente igual a zero em todos os seus bairros.",
        isCorrect: false,
        distractorRationale: "São Paulo possui imensas periferias, favelas e graves contradições sociais socioespaciais."
      },
      {
        id: "d",
        text: "ser a única cidade brasileira que abriga a capital política federal e os três poderes da República.",
        isCorrect: false,
        distractorRationale: "A capital política e federal do Brasil é Brasília, e não São Paulo."
      },
      {
        id: "e",
        text: "ter transferido todas as suas universidades públicas para zonas agrícolas desabitadas.",
        isCorrect: false,
        distractorRationale: "As maiores universidades do país (como a USP) têm seus maiores campi na capital e em cidades do interior paulista."
      }
    ],
    detailedExplanation: {
      summary: "São Paulo é a principal Metrópole Global do Brasil por concentrar centros de decisão corporativa, o mercado financeiro (B3), serviços especializados de saúde/educação e fluxos de informação.",
      stepByStep: [
        "1. Analisar a metodologia do REGIC/IBGE: a hierarquia não mede apenas população, mas capacidade de gestão e atração.",
        "2. Identificar a classificação máxima: Grande Metrópole Nacional (São Paulo).",
        "3. Reconhecer os atributos que a definem: cidade global, centro de comando financeiro, sede de multinacionais e alta conectividade internacional.",
        "4. Diferenciar a centralidade econômica de São Paulo da centralidade política de Brasília."
      ],
      coreConcept: "Cidades globais funcionam como nós estratégicos de comando e articulação de fluxos de capital, informação e serviços avançados na rede mundial.",
      trapWarning: "Cuidado: cidade global não precisa ser a capital política do país (ex: Nova York, São Paulo, Xangai não são as capitais de seus países, mas são metrópoles globais)."
    },
    commonTraps: [
      "Confundir São Paulo (capital econômica/global) com Brasília (capital política/federal).",
      "Achar que o tamanho da população é o único critério para definir a importância na hierarquia urbana."
    ],
    tags: ["Humanas", "Geografia Urbana", "Rede Urbana", "REGIC", "IBGE", "Metrópole Global"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-009",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A 'Desmetropolização' e o Papel das Cidades Médias",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A partir dos anos 1980 e com maior intensidade a partir dos anos 2000, os censos demográficos do IBGE apontaram uma sensível alteração nos padrões de migração interna no Brasil: as tradicionais metrópoles globais e nacionais (São Paulo e Rio de Janeiro) passaram a apresentar taxas de crescimento demográfico menores que a média nacional. Em contrapartida, cidades médias (com população entre 100 mil e 500 mil habitantes, como Campinas, Ribeirão Preto, Joinville, Londrina e Feira de Santana) registraram ritmos acelerados de atração populacional e industrial.",
      source: "BAENINGER, R. Cidades Médias no Brasil: Espaços em Transição. Campinas: Unicamp, 2017."
    },
    prompt: "Essa dinâmica de crescimento das cidades médias, muitas vezes chamada de 'desmetropolização relativa', foi impulsionada primordialmente pelas",
    options: [
      {
        id: "a",
        text: "deseconomias de aglomeração nas grandes metrópoles (engarrafamentos, IPTU alto, custo elevado da terra e sindicatos fortes), aliadas à guerra fiscal e melhor qualidade de vida oferecidas pelas cidades médias.",
        isCorrect: true,
        distractorRationale: "Correto: A desmetropolização relativa decorre das deseconomias de aglomeração: nas megacidades, os custos de produção explodiram (trânsito paralisado, terrenos caríssimos, tributos elevados, criminalidade). As indústrias e empresas migraram para cidades médias do interior, que ofereceram terrenos baratos, incentivos fiscais ('guerra fiscal'), mão de obra qualificada e logística fluida, atraindo também trabalhadores em busca de menor custo de vida."
      },
      {
        id: "b",
        text: "políticas públicas federais que proibiram a abertura de novas empresas nos limites territoriais das capitais.",
        isCorrect: false,
        distractorRationale: "Nunca houve proibição legal de abertura de empresas nas capitais."
      },
      {
        id: "c",
        text: "descobertas repentinas de jazidas de petróleo leve no subsolo de todos os municípios interioranos.",
        isCorrect: false,
        distractorRationale: "O petróleo brasileiro concentra-se na plataforma continental marítima (bacia de Campos e Santos)."
      },
      {
        id: "d",
        text: "migrações massivas de operários fabris de volta para o trabalho manual na colheita da cana-de-açúcar.",
        isCorrect: false,
        distractorRationale: "A agricultura mecanizou-se pesadamente, dispensando trabalho braçal no corte de cana."
      },
      {
        id: "e",
        text: "quedas bruscas nos investimentos em rodovias estaduais que isolaram o interior do restante do país.",
        isCorrect: false,
        distractorRationale: "O crescimento das cidades médias dependeu exatamente da modernização da malha rodoviária e de telecomunicações."
      }
    ],
    detailedExplanation: {
      summary: "A atração das cidades médias decorre das deseconomias de aglomeração das grandes metrópoles e de vantagens locacionais como incentivos fiscais, terrenos acessíveis e logística fluida.",
      stepByStep: [
        "1. Analisar o conceito de 'deseconomias de aglomeração': quando a cidade fica tão grande e congestionada que os custos superam os benefícios de estar nela.",
        "2. Identificar os custos das grandes metrópoles: custo da terra, trânsito caótico, custo de vida, sindicatos atuantes.",
        "3. Notar os atrativos das cidades médias: incentivos fiscais municipais, malha de transportes moderna, menor custo de vida, proximidade de centros universitários tecnológicos.",
        "4. Concluir que as cidades médias tornaram-se os novos polos dinâmicos de atração no território brasileiro."
      ],
      coreConcept: "A desmetropolização relativa não significa esvaziamento das metrópoles, mas sim a desconcentração industrial em direção às cidades médias do interior.",
      trapWarning: "Cuidado: 'desmetropolização' não significa que as grandes cidades estão diminuindo de tamanho absoluto; elas continuam imensas, mas seu ritmo de crescimento percentual desacelerou."
    },
    commonTraps: [
      "Achar que as grandes metrópoles estão despovoadas ou perdendo população em termos absolutos.",
      "Ignorar a importância da infraestrutura moderna nas cidades médias."
    ],
    tags: ["Humanas", "Geografia Urbana", "Cidades Médias", "Desmetropolização", "Deseconomias de Aglomeração"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-010",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A Produção Social do Espaço e o 'Direito à Cidade' (Henri Lefebvre / David Harvey)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A questão do que tipo de cidade queremos não pode ser divorciada do que tipo de laços sociais, de relações com a natureza, de estilos de vida, de tecnologias e de valores estéticos desejamos. O direito à cidade é muito mais do que a liberdade individual de ter acesso aos recursos urbanos: é o direito de mudar a nós mesmos pela mudança da cidade. Além disso, é um direito comum antes de individual, pois essa transformação depende inevitavelmente do exercício de um poder coletivo sobre os processos de urbanização.\n\nHARVEY, David. O Direito à Cidade. Lutas Sociais, São Paulo, n. 29, 2012.",
      source: "HARVEY, D. Cidades Rebeldes: Do Direito à Cidade à Revolução Urbana. São Paulo: Martins Fontes, 2014."
    },
    prompt: "Na formulação teórica de David Harvey, fundamentada originariamente em Henri Lefebvre, a reivindicação do 'direito à cidade' opõe-se diretamente à",
    options: [
      {
        id: "a",
        text: "construção de hospitais públicos e creches comunitárias geridas pelas prefeituras.",
        isCorrect: false,
        distractorRationale: "O direito à cidade defende a ampliação dos equipamentos públicos e serviços sociais."
      },
      {
        id: "b",
        text: "mercantilização do espaço urbano, em que a cidade é gerida prioritariamente como um negócio lucrativo para atender aos interesses da acumulação de capital imobiliário e corporativo.",
        isCorrect: true,
        distractorRationale: "Correto: David Harvey e Henri Lefebvre afirmam que o espaço urbano foi capturado pela lógica do valor de troca (a cidade como mercadoria, fonte de lucro para empreiteiras e especuladores financeiros). Reivindicar o 'direito à cidade' significa recuperar a primazia do valor de uso: a cidade como bem comum de fruição coletiva, convivência e decisão democrática por todos os seus habitantes, e não apenas por aqueles que podem pagar."
      },
      {
        id: "c",
        text: "utilização de energias limpas e renováveis na eletrificação das redes de transporte sobre trilhos.",
        isCorrect: false,
        distractorRationale: "A transição ecológica é compatível e incentivada na luta pelo direito à cidade."
      },
      {
        id: "d",
        text: "criação de associações de bairro e conselhos municipais de habitação popular.",
        isCorrect: false,
        distractorRationale: "Essas entidades populares são os canais de exercício prático do direito à cidade."
      },
      {
        id: "e",
        text: "adoção do saneamento básico universal em assentamentos informais.",
        isCorrect: false,
        distractorRationale: "O saneamento básico universal é bandeira primordial dos movimentos do direito à cidade."
      }
    ],
    detailedExplanation: {
      summary: "O direito à cidade opõe-se à cidade-mercadoria: defende que o espaço urbano deve ser moldado democraticamente pelos cidadãos para atender às necessidades da vida coletiva.",
      stepByStep: [
        "1. Analisar a citação de David Harvey: o direito à cidade é um direito coletivo de gerir a própria urbanização.",
        "2. Identificar o alvo da crítica: a submissão das políticas urbanas à lógica da acumulação privada de capital (especulação, despejos forçados, megaeventos excludentes).",
        "3. Opor 'valor de uso' (vida, lazer, moradia, cidadania) a 'valor de troca' (lucro imobiliário, aluguel, gentrificação).",
        "4. Concluir que o direito à cidade exige gestão pública democrática e justiça socioespacial."
      ],
      coreConcept: "O Direito à Cidade afirma o primado do valor de uso do espaço contra a sua transformação em mercadoria para poucos.",
      trapWarning: "Direito à cidade não é apenas 'direito de andar pelas ruas'; é o poder político coletivo de decidir o destino e a forma como a cidade é construída e compartilhada."
    },
    commonTraps: [
      "Interpretar o direito à cidade como mera liberdade de ir e vir individual.",
      "Achar que se trata de uma proposta puramente jurídica sem teor sociopolítico crítico."
    ],
    tags: ["Humanas", "Geografia Urbana", "Direito à Cidade", "David Harvey", "Henri Lefebvre", "Justiça Espacial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-011",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "Ilhas de Calor e Microclima Urbano",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em monitoramentos térmicos por imagens de satélite infravermelho realizados na Região Metropolitana de Belo Horizonte durante a estação seca, meteorologistas registraram temperaturas superficiais de até $34^\\circ\\text{C}$ nas áreas centrais hiperdensamente edificadas e canalizadas, enquanto em bairros periféricos arborizados e áreas de parques serranos contíguos a temperatura não ultrapassou $27^\\circ\\text{C}$ no mesmo instante.",
      source: "ROSS, J. L. S. Geografia do Brasil. São Paulo: Edusp, 2019."
    },
    prompt: "Essa discrepância térmica entre o centro hiperurbanizado e as áreas verdes periféricas caracteriza o fenômeno meteorológico das ilhas de calor, ocasionado principalmente",
    options: [
      {
        id: "a",
        text: "pelo excesso de biomassa vegetal e pela evapotranspiração acelerada das árvores nas avenidas centrais.",
        isCorrect: false,
        distractorRationale: "Árvores e vegetação provocam arrefecimento e resfriamento térmico, e não calor excessivo."
      },
      {
        id: "b",
        text: "pela impermeabilização do solo, escassez de vegetação, concentração de asfalto e concreto de baixo albedo e intensa emissão antrópica de calor por veículos e aparelhos de ar-condicionado.",
        isCorrect: true,
        distractorRationale: "Correto: A ilha de calor urbana resulta da substituição da cobertura vegetal por materiais construtivos (asfalto e concreto escuro) que possuem baixo albedo (alta absorção de radiação solar e alta retenção de calor). A falta de solo permeável impede a evapotranspiração resfriadora da água, e o calor emitido por queima de combustíveis em automóveis e sistemas prediais aprisiona a energia térmica nas cânions urbanas centrais."
      },
      {
        id: "c",
        text: "pela proximidade do lençol freático com o asfalto, que irradia calor geotérmico do núcleo da Terra.",
        isCorrect: false,
        distractorRationale: "O calor não provém de energia geotérmica profunda, mas de fatores antrópicos superficiais e radiação solar."
      },
      {
        id: "d",
        text: "pela inversão térmica que atinge exclusivamente as copas das árvores nos parques florestais.",
        isCorrect: false,
        distractorRationale: "Inversão térmica é o aprisionamento de ar frio sob camada quente, não explicador primário do calor no centro."
      },
      {
        id: "e",
        text: "pela ausência total de circulação de veículos automotores nos corredores expressos.",
        isCorrect: false,
        distractorRationale: "A intensa frota de veículos é justamente uma das fontes antrópicas geradoras de calor."
      }
    ],
    detailedExplanation: {
      summary: "As ilhas de calor urbanas decorrem da retenção de radiação pelo asfalto e concreto, perda de vegetação refrescante e calor gerado por carros e prédios no centro.",
      stepByStep: [
        "1. Identificar o fenômeno: diferença de até 7°C entre o centro densamente construído e as bordas florestadas (Ilha de Calor).",
        "2. Identificar fatores materiais: asfalto e concreto têm baixo albedo (absorvem muita radiação solar) e alta capacidade térmica.",
        "3. Identificar fatores morfológicos e ecológicos: falta de árvores (ausência de evapotranspiração) e 'cânions urbanos' de prédios altos que bloqueiam os ventos.",
        "4. Fatores antrópicos: calor residual de motores e ar-condicionado.",
        "5. Concluir que a arborização e tetos verdes são medidas mitigatórias comprovadas."
      ],
      coreConcept: "A ilha de calor urbana é um impacto microclimático derivado da impermeabilização do solo, dos materiais de baixo albedo e da emissão antrópica de calor.",
      trapWarning: "Não confunda 'baixo albedo' (reflete pouca luz e retém muito calor) com 'alto albedo' (reflete muita luz, como gelo ou tinta branca, mantendo o ambiente mais fresco)."
    },
    commonTraps: [
      "Inverter o conceito de albedo achando que asfalto tem alto albedo.",
      "Confundir ilhas de calor com efeito estufa global ou inversão térmica."
    ],
    tags: ["Humanas", "Geografia Urbana", "Ilhas de Calor", "Microclima", "Albedo", "Meio Ambiente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-012",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A Segregação Socioespacial e a Autoconstrução nas Favelas",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Empurrada para as margens do mercado formal de moradia pelo preço proibitivo dos aluguéis e dos imóveis centrais, a classe trabalhadora brasileira encontrou na autoconstrução em loteamentos periféricos clandestinos e encostas de morros a única alternativa viável para garantir um teto. Nesses territórios, ergueram suas próprias casas com ajuda de mutirões comunitários aos finais de semana, arcando com o custo de levar água e luz improvisadas antes mesmo de qualquer intervenção do Estado.",
      source: "KOWARICK, L. A Espoliação Urbana. Rio de Janeiro: Paz e Terra, 1993."
    },
    prompt: "O sociólogo Lúcio Kowarick denominou esse processo histórico de 'espoliação urbana' porque",
    options: [
      {
        id: "a",
        text: "o Estado subsidiou integralmente materiais nobres de alvenaria e arquitetos para todas as famílias de baixa renda.",
        isCorrect: false,
        distractorRationale: "O texto demonstra que as famílias arcaram sozinhas com a autoconstrução sem subsídio estatal."
      },
      {
        id: "b",
        text: "os trabalhadores são duplamente explorados: sofrem a exploração econômica nos locais de trabalho (baixos salários) e a carência extrema de serviços e infraestrutura básica nos bairros onde residem.",
        isCorrect: true,
        distractorRationale: "Correto: A 'espoliação urbana' é o conceito pelo qual Kowarick explicita que a precariedade da cidade brasileira barateia o custo de reprodução da força de trabalho para o capital. O trabalhador recebe salários miseráveis na fábrica e, em seu tempo livre ('descanso'), é obrigado a trabalhar construindo sua própria casa, esgoto e rua, sem que o Estado e as empresas forneçam moradia digna ou infraestrutura coletiva básica."
      },
      {
        id: "c",
        text: "as famílias periféricas enriqueceram rapidamente vendendo seus lotes a grandes fundos imobiliários.",
        isCorrect: false,
        distractorRationale: "A realidade das periferias é de vulnerabilidade econômica e insegurança da posse da terra."
      },
      {
        id: "d",
        text: "o mercado imobiliário privado sofreu perdas financeiras irreparáveis com a doação compulsória de terras.",
        isCorrect: false,
        distractorRationale: "O mercado imobiliário lucra com a valorização de áreas centrais e não doa terras."
      },
      {
        id: "e",
        text: "a autoconstrução eliminou completamente a necessidade de saneamento básico e postos de saúde.",
        isCorrect: false,
        distractorRationale: "A autoconstrução evidencia dramaticamente a falta de saneamento e saúde pública."
      }
    ],
    detailedExplanation: {
      summary: "A 'espoliação urbana' sintetiza a dupla penalização do trabalhador periférico: exploração salarial no emprego e desassistência de infraestrutura básica no espaço urbano.",
      stepByStep: [
        "1. Analisar o termo de Lúcio Kowarick: espoliação urbana.",
        "2. Compreender a autoconstrução: o próprio trabalhador constrói sua moradia em mutirão nas horas de folga por falta de opção financeira.",
        "3. Notar a ausência do Estado: saneamento, asfalto, iluminação e postos de saúde demoram décadas para chegar às periferias.",
        "4. Concluir que a precariedade urbana complementa a superexploração do trabalho no Brasil."
      ],
      coreConcept: "A espoliação urbana é a soma das carências de serviços coletivos (saúde, transporte, saneamento) que agrava a desigualdade salarial na periferia.",
      trapWarning: "A autoconstrução não deve ser romantizada como simples 'criatividade'; ela é fruto da exclusão das famílias do direito à moradia digna."
    },
    commonTraps: [
      "Romantizar a autoconstrução sem reconhecer o abandono estatal e o sofrimento das famílias.",
      "Achar que o Estado brasileiro sempre planejou e entregou moradia digna às periferias."
    ],
    tags: ["Humanas", "Geografia Urbana", "Espoliação Urbana", "Autoconstrução", "Lúcio Kowarick", "Favelização"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-013",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "Enchentes Urbanas e Impermeabilização do Solo",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No período de chuvas torrenciais de verão, grandes avenidas de fundos de vale em metrópoles brasileiras — como as marginais Tietê e Pinheiros em São Paulo ou a Avenida Tereza Cristina em Belo Horizonte — sofrem transbordamentos violentos e alagamentos paralisantes. Historicamente, essas avenidas foram implantadas sobre o leito maior de rios canalizados e retificados, em bacias onde a cobertura vegetal foi quase totalmente pavimentada.",
      source: "ROSS, J. L. S. Geografia do Brasil. Edusp, 2019."
    },
    prompt: "A causa hidrológica e geomorfológica determinante para a recorrência dessas inundações catastróficas é",
    options: [
      {
        id: "a",
        text: "o aumento exponencial da infiltração de água no lençol freático devido ao asfalto permeável.",
        isCorrect: false,
        distractorRationale: "O asfalto comum é impermeável e reduz a infiltração a quase zero."
      },
      {
        id: "b",
        text: "a redução drástica da infiltração natural provocada pela impermeabilização da bacia, somada à ocupação indevida da planície de inundação (leito maior) dos rios.",
        isCorrect: true,
        distractorRationale: "Correto: Em ambientes naturais, a vegetação e o solo infiltram a maior parte da chuva e retardam o escoamento superficial (tempo de concentração longo). Na cidade impermeabilizada, a água não infiltra e escoa imediatamente para o fundo do vale (escoamento superficial torrencial em minutos). Como os rios foram retificados e o leito maior foi ocupado por pistas de tráfego, o canal artificial não comporta a vazão de pico, gerando inundações devastadoras."
      },
      {
        id: "c",
        text: "o desvio deliberado das águas fluviais para alimentar usinas hidrelétricas construídas no centro das cidades.",
        isCorrect: false,
        distractorRationale: "Não existem barragens de usinas hidrelétricas no centro dessas avenidas metropolitanas."
      },
      {
        id: "d",
        text: "a evaporação instantânea de toda a água precipitada antes de tocar a superfície.",
        isCorrect: false,
        distractorRationale: "A água se acumula em volume colossal na superfície, gerando alagamentos."
      },
      {
        id: "e",
        text: "a drenagem subterrânea excessiva que seca os canais fluviais urbanos no verão.",
        isCorrect: false,
        distractorRationale: "O problema é o excesso torrencial de água superficial, e não a drenagem subterrânea excessiva."
      }
    ],
    detailedExplanation: {
      summary: "A impermeabilização do solo elimina a infiltração e acelera o escoamento superficial, sobrecarregando planícies de inundação ocupadas por avenidas de fundo de vale.",
      stepByStep: [
        "1. Analisar o ciclo hidrológico urbano: precipitação = infiltração + evapotranspiração + escoamento superficial.",
        "2. Na cidade asfaltada: a infiltração cai de ~50% para menos de 10%, e o escoamento superficial salta para mais de 50%.",
        "3. Geomorfologia: o fundo de vale (várzea ou leito maior sazonal) pertence naturalmente à dinâmica de cheias do rio.",
        "4. Conclusão: a ocupação por avenidas sobre rios canalizados impermeabilizados transforma as chuvas em enxurradas inescapáveis."
      ],
      coreConcept: "Inundações urbanas são desastres socioambientais resultantes da impermeabilização do solo e da ocupação das planícies de inundação naturais dos rios.",
      trapWarning: "A chuva é o evento meteorológico natural deflagrador; a enchente catastrófica é fruto do modelo predatório de urbanização que tapou os rios com asfalto."
    },
    commonTraps: [
      "Culpar exclusivamente a chuva forte pela inundação, desconsiderando a intervenção humana na bacia.",
      "Achar que canalizar o rio em concreto resolve o problema (a canalização acelera a água e transfere a enchente para jusante)."
    ],
    tags: ["Humanas", "Geografia Urbana", "Enchentes", "Impermeabilização", "Bacias Hidrográficas", "Inundações"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-014",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A 'Cidade Global' e a Nova Divisão Internacional do Trabalho (Saskia Sassen)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A socióloga Saskia Sassen formulou a influente teoria da 'Cidade Global' ao constatar que, à medida que a produção manufatureira se dispersou geograficamente pelo mundo (fábricas transferidas para a Ásia e periferias em busca de mão de obra barata), as funções de controle, gestão financeira, contabilidade e consultoria jurídica avançada tornaram-se extraordinariamente concentradas em um punhado de nós estratégicos da economia mundial.",
      source: "SASSEN, S. As Cidades na Economia Mundial. São Paulo: Nobel, 2010."
    },
    prompt: "De acordo com Saskia Sassen, as cidades globais exercem protagonismo na globalização contemporânea porque atuam como",
    options: [
      {
        id: "a",
        text: "principais centros de mineração de carvão mineral e siderurgia pesada do planeta.",
        isCorrect: false,
        distractorRationale: "Indústrias pesadas e mineração foram deslocadas para regiões periféricas, distantes das cidades globais."
      },
      {
        id: "b",
        text: "plataformas territoriais de comando estratégico, gestão informacional e produção de serviços avançados para o capital financeiro globalizado.",
        isCorrect: true,
        distractorRationale: "Correto: Cidades globais (como Nova York, Londres, Tóquio, Paris e São Paulo) não precisam ter grandes chaminés de indústrias dentro de seus bairros. Sua força reside em abrigar a infraestrutura de telecomunicações de ponta, bancos de investimento, agências de publicidade, consultorias contábeis multinacionais e bolsas de valores que governam a dispersão produtiva global em tempo real."
      },
      {
        id: "c",
        text: "comunidades autossuficientes isoladas das cadeias globais de suprimentos.",
        isCorrect: false,
        distractorRationale: "Cidades globais são os nós mais conectados e interdependentes do planeta."
      },
      {
        id: "d",
        text: "espaços desprovidos de contradições sociais, onde não existe subemprego de baixa remuneração.",
        isCorrect: false,
        distractorRationale: "Sassen ressalta que as cidades globais são marcadas por extrema polarização social entre executivos do topo e servidores precarizados da base."
      },
      {
        id: "e",
        text: "núcleos agrícolas voltados prioritariamente para o cultivo comunitário de subsistência.",
        isCorrect: false,
        distractorRationale: "Cidades globais são o ápice do espaço terciário corporativo hiperurbanizado."
      }
    ],
    detailedExplanation: {
      summary: "Cidades globais são nós territoriais de comando do capitalismo internacional, concentrando serviços financeiros, jurídicos e tecnológicos de ponta.",
      stepByStep: [
        "1. Analisar a tese de Saskia Sassen: a dispersão fabril global exigiu uma hiperconcentração de comando e controle.",
        "2. Identificar a função dessas cidades: sediar as finanças (bolsas, bancos), consultorias corporativas e Big Techs.",
        "3. Notar a dualidade social apontada por Sassen: convívio entre uma elite corporativa de rendas astronômicas e uma massa de trabalhadores imigrantes precarizados nos serviços de apoio (limpeza, restaurantes, entregas).",
        "4. Concluir que a cidade global é o polo de gestão da economia transnacional."
      ],
      coreConcept: "A cidade global é o centro de controle e produção de serviços especializados indispensáveis à governança do capitalismo desterritorializado.",
      trapWarning: "Cidades globais são definidas pela qualidade e intensidade de seus fluxos de serviços e finanças globais, e não apenas por seu número absoluto de habitantes."
    },
    commonTraps: [
      "Confundir megacidade (critério puramente quantitativo: mais de 10 milhões de habitantes) com cidade global (critério de comando econômico e conexões internacionais).",
      "Achar que as cidades globais produzem prioritariamente mercadorias fabris físicas."
    ],
    tags: ["Humanas", "Geografia Urbana", "Cidades Globais", "Saskia Sassen", "Globalização", "Serviços Avançados"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-015",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "O 'Déficit Habitacional' versus 'Imóveis Vazios' no Brasil",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Censo Demográfico 2022 do IBGE revelou um paradoxo urbano impressionante no Brasil: enquanto o déficit habitacional do país é estimado pela Fundação João Pinheiro em aproximadamente 6 milhões de moradias (famílias coabitando em precariedade, vivendo em habitações improvisadas ou comprometendo mais de 30% da renda com aluguel excessivo), o número total de domicílios particulares vagos e fechados ultrapassou a marca de 11 milhões de unidades em todo o território nacional.",
      source: "IBGE. Censo Demográfico 2022: Características dos Domicílios. Rio de Janeiro: IBGE, 2023."
    },
    prompt: "Esse descompasso estrutural entre o expressivo número de domicílios vagos e a escassez de moradia digna para as classes populares evidencia que",
    options: [
      {
        id: "a",
        text: "o problema habitacional brasileiro decorre da insuficiência física de tijolos e cimento para erguer novas paredes.",
        isCorrect: false,
        distractorRationale: "O Brasil tem excesso de imóveis construídos (11 milhões vagos); o problema é de acesso à terra e à renda, não de matéria-prima."
      },
      {
        id: "b",
        text: "a moradia é tratada primordialmente como ativo financeiro e reserva de valor para especulação, impedindo que o solo cumpra sua função social perante a população de baixa renda.",
        isCorrect: true,
        distractorRationale: "Correto: A coexistência de 11 milhões de imóveis vazios com 6 milhões de famílias sem moradia digna comprova que a crise urbana brasileira não é um problema de escassez absoluta de prédios, mas de desigualdade de classe e especulação imobiliária. O capital imobiliário e os proprietários retêm imóveis vazios aguardando valorização rentista ('reserva de valor'), enquanto as famílias pobres não possuem renda para pagar aluguéis inflacionados nem acesso a programas de habitação pública popular."
      },
      {
        id: "c",
        text: "todas as famílias sem moradia recusam apartamentos urbanos por preferirem habitar o meio rural.",
        isCorrect: false,
        distractorRationale: "A esmagadora maioria do déficit habitacional está concentrada nas áreas metropolitanas urbanas."
      },
      {
        id: "d",
        text: "o crescimento da população brasileira desacelerou tanto que não existem mais pessoas suficientes para ocupar os domicílios.",
        isCorrect: false,
        distractorRationale: "Existem 6 milhões de famílias sofrendo com falta de moradia adequada ou aluguel excessivo."
      },
      {
        id: "e",
        text: "o Estatuto da Cidade proibiu a concessão de crédito imobiliário a qualquer entidade pública ou privada.",
        isCorrect: false,
        distractorRationale: "O Estatuto da Cidade visa exatamente estimular a função social e o acesso à moradia digna."
      }
    ],
    detailedExplanation: {
      summary: "A contradição entre 11 milhões de imóveis vagos e 6 milhões de famílias em déficit habitacional revela que a cidade é gerida sob a lógica da especulação e do rentismo imobiliário.",
      stepByStep: [
        "1. Contrastar os dados oficiais: 6 milhões em déficit habitacional x 11 milhões de imóveis desocupados.",
        "2. Perceber que o estoque de moradias construídas supera numericamente a necessidade da população.",
        "3. Identificar o entrave: retenção especulativa e transformação da moradia em mercadoria inacessível às famílias de baixa renda.",
        "4. Concluir que a política urbana necessita acionar instrumentos de cumprimento da função social da propriedade para democratizar o acesso ao solo."
      ],
      coreConcept: "A crise habitacional brasileira é uma crise de distribuição e de especulação fundiária, e não de falta física absoluta de imóveis construídos.",
      trapWarning: "Déficit habitacional não mede apenas quem 'mora na rua', mas também ônus excessivo com aluguel, coabitação familiar forçada e precariedade estrutural."
    },
    commonTraps: [
      "Achar que o déficit habitacional só se resolve construindo condomínios distantes na periferia sem serviços.",
      "Ignorar o papel da especulação imobiliária na retenção de imóveis vazios."
    ],
    tags: ["Humanas", "Geografia Urbana", "Déficit Habitacional", "Imóveis Vagos", "Especulação Imobiliária", "IBGE"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-016",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A 'Cidade Invisível' e o Saneamento Básico Desigual",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "De acordo com o Instituto Trata Brasil (2023), cerca de 35 milhões de brasileiros não possuem acesso à água tratada em suas residências e quase 100 milhões não têm acesso à coleta de esgoto. Nas grandes capitais, esse abismo manifesta-se geograficamente: bairros nobres contam com quase 100% de cobertura de redes subterrâneas de água e esgoto, enquanto comunidades periféricas e favelas convivem com valas negras a céu aberto despejando efluentes diretamente em córregos que cortam seus quintais.",
      source: "INSTITUTO TRATA BRASIL. Ranking do Saneamento 2023. São Paulo: ITB, 2023."
    },
    prompt: "Essa distribuição profundamente desigual da infraestrutura de saneamento básico entre áreas nobres e periferias expressa uma forma de",
    options: [
      {
        id: "a",
        text: "injustiça ambiental e vulnerabilidade socioespacial, que expõe as populações empobrecidas a elevadas taxas de mortalidade infantil e doenças de veiculação hídrica.",
        isCorrect: true,
        distractorRationale: "Correto: A injustiça ambiental (ou racismo ambiental) manifesta-se quando a distribuição dos custos da degradação e a ausência de saneamento básico recaem desproporcionalmente sobre populações de baixa renda e negras nas periferias. A falta de esgoto e água encanada resulta na proliferação de doenças parasitárias, cólera e dengue, perpetuando o ciclo da miséria e da exclusão social."
      },
      {
        id: "b",
        text: "descentralização ecológica que favorece a reciclagem biológica espontânea dos dejetos orgânicos.",
        isCorrect: false,
        distractorRationale: "O esgoto a céu aberto é um vetor gravíssimo de contaminação e contágio, e não uma reciclagem saudável."
      },
      {
        id: "c",
        text: "escolha voluntária das comunidades de rejeitar a modernização dos serviços sanitários.",
        isCorrect: false,
        distractorRationale: "A ausência de saneamento é fruto da omissão estatal e da segregação socioespacial, jamais de opção voluntária das vítimas."
      },
      {
        id: "d",
        text: "equilíbrio sustentável garantido pela retenção natural dos sedimentos no solo arenoso.",
        isCorrect: false,
        distractorRationale: "A falta de rede polui os lençóis freáticos e degrada todo o ecossistema hidrográfico."
      },
      {
        id: "e",
        text: "harmonia socioeconômica decorrente da aplicação integral das diretrizes do Estatuto da Cidade.",
        isCorrect: false,
        distractorRationale: "Expressa justamente o descumprimento das diretrizes de sustentabilidade do Estatuto da Cidade."
      }
    ],
    detailedExplanation: {
      summary: "A desigualdade na cobertura de saneamento básico exemplifica a injustiça ambiental urbana, penalizando a saúde das classes populares periféricas.",
      stepByStep: [
        "1. Analisar os dados do Trata Brasil: abismo entre bairros centrais/ricos e periferias empobrecidas.",
        "2. Reconhecer as consequências para a saúde pública: diarreias infecciosas, verminoses, leptospirose e sobrecarga dos postos do SUS.",
        "3. Aplicar o conceito de injustiça/racismo ambiental: os danos da falta de infraestrutura concentram-se onde vivem as minorias e os pobres.",
        "4. Concluir que o saneamento básico é a condição primordial para a dignidade urbana e a cidadania plena."
      ],
      coreConcept: "A desigualdade no saneamento básico materializa a segregação socioespacial e a injustiça ambiental no território urbano.",
      trapWarning: "Lembre-se de que investir R$ 1,00 em saneamento básico gera economia de R$ 4,00 em gastos hospitalares e tratamentos de saúde curativa."
    },
    commonTraps: [
      "Achar que saneamento é mero detalhe de engenharia desvinculado dos direitos humanos fundamentais.",
      "Culpar os próprios moradores pela falta de rede de esgoto oficial."
    ],
    tags: ["Humanas", "Geografia Urbana", "Saneamento Básico", "Injustiça Ambiental", "Saúde Pública", "Trata Brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-017",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "O 'Espaço Luminoso' versus 'Espaço Opaco' (Milton Santos)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em sua reflexão sobre o meio técnico-científico-informacional, Milton Santos distinguiu os 'espaços luminosos' dos 'espaços opacos'. Os primeiros são territórios densamente aparelhados por redes digitais de fibra óptica, aerovias, sedes de multinacionais e fluxos financeiros velozes, atraindo investimentos globais. Já os espaços opacos são vastas áreas urbanas e regionais desprovidas dessas próteses técnicas avançadas, onde a vida segue ritmos lentos de sobrevivência cotidiana baseados na contiguidade e nas trocas locais.",
      source: "SANTOS, M. A Natureza do Espaço: Técnica e Tempo, Razão e Emoção. São Paulo: Edusp, 2006."
    },
    prompt: "No contexto da geografia urbana de metrópoles como São Paulo ou Rio de Janeiro, a dicotomia entre espaços luminosos e espaços opacos reflete",
    options: [
      {
        id: "a",
        text: "a divisão astronômica entre hemisférios terrestres durante o solstício de verão.",
        isCorrect: false,
        distractorRationale: "O conceito de Milton Santos é sociotécnico e geográfico urbano, nada tendo a ver com astronomia."
      },
      {
        id: "b",
        text: "a seletividade espacial dos investimentos em tecnologia, que moderniza ilhas corporativas de alta conectividade enquanto relega as periferias à lentidão e à escassez técnica.",
        isCorrect: true,
        distractorRationale: "Correto: A distribuição da técnica no território não é homogênea. As metrópoles contêm 'espaços luminosos' hiperconectados (avenidas Faria Lima, Berrini, Paulista), abastecidos com infraestrutura digital e redes que servem ao grande capital. Em contraste, os 'espaços opacos' (favelas, periferias profundas) são desprovidos de conectividade veloz e serviços de ponta, evidenciando a extrema seletividade espacial do capitalismo contemporâneo."
      },
      {
        id: "c",
        text: "o desligamento intencional dos postes de iluminação pública pela companhia de energia elétrica.",
        isCorrect: false,
        distractorRationale: "A metáfora da luminosidade e opacidade diz respeito à densidade técnica informacional, não a lâmpadas de poste apagadas."
      },
      {
        id: "d",
        text: "a conversão de todos os bairros periféricos em reservas ecológicas florestais intocadas.",
        isCorrect: false,
        distractorRationale: "As periferias são densamente habitadas e carentes de áreas verdes preservadas."
      },
      {
        id: "e",
        text: "a distribuição rigorosamente igualitária de recursos do orçamento público em todas as zonas urbanas.",
        isCorrect: false,
        distractorRationale: "A teoria demonstra exatamente a profunda desigualdade na distribuição dos recursos públicos."
      }
    ],
    detailedExplanation: {
      summary: "Espaços luminosos e opacos revelam a seletividade geográfica da modernização: a técnica de ponta fixa-se onde o capital comanda, deixando a periferia na opacidade e carência.",
      stepByStep: [
        "1. Analisar os conceitos de Milton Santos: luminosidade = alta densidade técnica, informação, fluidez do capital; opacidade = escassez de infraestrutura moderna, ritmos lentos.",
        "2. Observar a geografia da metrópole: eixos corporativos com internet ultrarrápida e helipontos convivendo a poucos quilômetros de periferias sem sinal básico de celular.",
        "3. Concluir que o meio técnico-científico-informacional opera por fragmentação e hierarquização territorial seletiva.",
        "4. Relacionar com o papel da geografia em denunciar essas desigualdades estruturais."
      ],
      coreConcept: "A seletividade espacial das redes técnicas consolida espaços luminosos funcionais ao grande capital e espaços opacos onde vive a maioria desassistida.",
      trapWarning: "Luminosidade em Milton Santos é uma metáfora para a concentração de redes técnicas e informação, e não luz solar ou postes elétricos literais."
    },
    commonTraps: [
      "Interpretar 'luminoso' e 'opaco' no sentido físico literal de luz e sombra.",
      "Achar que a tecnologia se distribui uniformemente em todo o território."
    ],
    tags: ["Humanas", "Geografia Urbana", "Milton Santos", "Espaço Luminoso", "Espaço Opaco", "Redes Técnicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-018",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A 'Verticalização' Urbana e Seus Impactos Ambientais",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas últimas décadas, a alteração nos planos diretores de diversas cidades brasileiras incentivou a intensa verticalização de bairros tradicionais de casas térreas. O aumento abrupto do coeficiente de aproveitamento do solo permitiu a multiplicação de espigões residenciais e torres comerciais envidraçadas, adensando exponencialmente o número de moradores e automóveis por metro quadrado de quadra.",
      source: "SCARLATO, F. C. O Espaço Urbano e a Verticalização. São Paulo: Contexto, 2019."
    },
    prompt: "Entre os impactos socioambientais diretos provocados pelo adensamento vertical desordenado sem ampliação prévia da infraestrutura urbana, destacam-se",
    options: [
      {
        id: "a",
        text: "o barateamento imediato dos aluguéis e a extinção de congestionamentos de veículos.",
        isCorrect: false,
        distractorRationale: "A verticalização elitizada costuma encarecer a terra e agravar o congestionamento de trânsito."
      },
      {
        id: "b",
        text: "a sobrecarga das redes de esgoto e água, o aumento do sombreamento de vias públicas, o bloqueio da circulação dos ventos e o colapso viário nas ruas locais.",
        isCorrect: true,
        distractorRationale: "Correto: A verticalização sem planejamento multiplica a densidade populacional sem que as redes subterrâneas de água, esgoto e drenagem tenham sido redimensionadas. As altas torres bloqueiam a ventilação natural ('efeito barreira'), reduzem a insolação de residências vizinhas por excesso de sombreamento e geram saturação no tráfego das ruas estreitas dos bairros, com centenas de novos veículos saindo das garagens simultaneamente nos horários de pico."
      },
      {
        id: "c",
        text: "o aumento exponencial da área agricultável e da produção de hortaliças nos centros urbanos.",
        isCorrect: false,
        distractorRationale: "Espigões de concreto reduzem ainda mais os quintais e o solo agricultável."
      },
      {
        id: "d",
        text: "a recuperação integral das bacias hidrográficas originais e a volta de peixes aos córregos.",
        isCorrect: false,
        distractorRationale: "A sobrecarga de efluentes sanitários piora a poluição das bacias urbanas."
      },
      {
        id: "e",
        text: "a diminuição da temperatura do ar e o fim definitivo das ilhas de calor.",
        isCorrect: false,
        distractorRationale: "O adensamento de concreto e espelhos de vidro piora as ilhas de calor."
      }
    ],
    detailedExplanation: {
      summary: "A verticalização intensa sem planejamento sobrecarrega a infraestrutura viária e sanitária, bloqueia ventos naturais e cria barreiras de sombreamento nas cidades.",
      stepByStep: [
        "1. Analisar o processo de verticalização: substituição de casas térreas por edifícios altos.",
        "2. Avaliar o coeficiente de aproveitamento: multiplicar por 10 ou 20 o número de famílias vivendo na mesma área de lote.",
        "3. Identificar os impactos ecológicos: barreiras contra os ventos, sombreamento excessivo de vizinhos, ampliação de superfícies que acumulam calor.",
        "4. Identificar os impactos urbanísticos: gargalos de trânsito e estouro na capacidade das redes de esgoto e drenagem pluvial."
      ],
      coreConcept: "A verticalização deve ser acompanhada do dimensionamento prévio das redes de transporte e saneamento para evitar colapsos ambientais e viários.",
      trapWarning: "A verticalização pode ser positiva se associada ao transporte de massa em eixos estruturadores, mas torna-se desastrosa quando feita de modo caótico guiada apenas pela especulação de construtoras."
    },
    commonTraps: [
      "Achar que verticalização é sinônimo automático de desenvolvimento sustentável.",
      "Desconsiderar os impactos climáticos (barreira aos ventos e ilhas de calor)."
    ],
    tags: ["Humanas", "Geografia Urbana", "Verticalização", "Impactos Ambientais", "Plano Diretor"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-019",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A Cidade Sustentável e o 'Transporte Orientado ao Desenvolvimento' (TOD)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O modelo de Desenvolvimento Orientado ao Transporte Sustentável (TOD, na sigla em inglês) preconiza que a expansão e o adensamento construtivo das cidades devem concentrar-se prioritariamente ao longo de eixos de transporte público de alta capacidade (linhas de metrô, trens metropolitanos e corredores de BRT). Esse modelo desestimula o uso do transporte individual motorizado ao exigir fachadas ativas no térreo dos edifícios (comércios e serviços abertos para a rua) e redução do número de vagas de garagem obrigatórias.",
      source: "INSTITUTO DE POLÍTICAS DE TRANSPORTE E DESENVOLVIMENTO (ITDP). Padrão de Qualidade TOD. Rio de Janeiro: ITDP Brasil, 2017."
    },
    prompt: "A implementação dos princípios do modelo TOD visa construir cidades mais sustentáveis e humanas porque",
    options: [
      {
        id: "a",
        text: "estimula a abertura de megaavenidas expressas exclusivas para caminhões e picapes de passeio.",
        isCorrect: false,
        distractorRationale: "O modelo combate explicitamente o rodoviarismo de automóveis individuais."
      },
      {
        id: "b",
        text: "reduz a necessidade de longos deslocamentos motorizados, aproxima moradia de empregos e serviços, e incentiva a mobilidade ativa (caminhada e bicicleta) integrada ao transporte coletivo.",
        isCorrect: true,
        distractorRationale: "Correto: O modelo TOD quebra a lógica da cidade dispersa e rodoviarista. Ao adensar habitações e comércios no entorno das estações de transporte de alta capacidade e exigir fachadas ativas, o cidadão pode fazer suas tarefas a pé ou em curtas distâncias cicloviárias ('cidade de 15 minutos'), reduzindo o tempo de trânsito, as emissões de gases de efeito estufa e a dependência do automóvel particular."
      },
      {
        id: "c",
        text: "proíbe expressamente a circulação de pedestres em áreas centrais para evitar acidentes de trânsito.",
        isCorrect: false,
        distractorRationale: "O modelo prioriza o pedestre e a mobilidade ativa como protagonistas do espaço urbano."
      },
      {
        id: "d",
        text: "obriga cada apartamento residencial a dispor de no mínimo três vagas de garagem privativas.",
        isCorrect: false,
        distractorRationale: "O modelo restringe as vagas de garagem para desestimular a compra e uso de automóveis."
      },
      {
        id: "e",
        text: "transfere todos os postos de saúde e escolas para zonas agrícolas despovoadas.",
        isCorrect: false,
        distractorRationale: "Os serviços essenciais devem ficar concentrados nos nós de transporte acessíveis a pé."
      }
    ],
    detailedExplanation: {
      summary: "O modelo TOD integra adensamento urbano com corredores de transporte coletivo de massa e fachadas ativas, reduzindo a dependência do carro e valorizando o pedestre.",
      stepByStep: [
        "1. Identificar os pilares do TOD: compactar, adensar perto do transporte público, conectar a pé e desestimular carros.",
        "2. Fachada ativa: comércio e serviços no térreo dos prédios, gerando vitalidade nas calçadas e maior segurança pública natural ('olhos da rua' de Jane Jacobs).",
        "3. Consequências ecológicas: redução na queima de combustíveis fósseis e mitigação das emissões de CO2.",
        "4. Concluir que se trata do paradigma contemporâneo mais elogiado em urbanismo sustentável."
      ],
      coreConcept: "O Desenvolvimento Orientado ao Transporte Sustentável combate o espraiamento urbano, integrando uso misto do solo ao transporte de massa.",
      trapWarning: "Cuidado: para ser justo, o modelo TOD deve garantir Habitação de Interesse Social (HIS) perto das estações de metrô, evitando que esses eixos virem áreas exclusivas de especulação rica."
    },
    commonTraps: [
      "Achar que desenvolvimento urbano sustentável significa proibir qualquer tipo de adensamento populacional.",
      "Supor que a solução para a mobilidade urbana é apenas construir mais viadutos e pistas para carros."
    ],
    tags: ["Humanas", "Geografia Urbana", "Mobilidade Urbana", "TOD", "Sustentabilidade", "Transporte Coletivo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-020",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "Megacidades e Desafios de Gestão no Sul Global",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "De acordo com o critério da Organização das Nações Unidas (ONU), uma 'megacidade' é qualquer aglomeração urbana cuja população total atinge ou supera 10 milhões de habitantes. No início do século XXI, a vasta maioria das megacidades mundiais não se localiza mais na Europa ou na América do Norte, mas sim em países em desenvolvimento da Ásia, África e América Latina (como Tóquio, Délhi, Xangai, São Paulo, Mumbai, Cidade do México, Cairo e Daca).",
      source: "UN-HABITAT. World Cities Report 2022: Envisaging the Future of Cities. Nairóbi: ONU, 2022."
    },
    prompt: "A concentração das megacidades nos países do Sul Global impõe aos gestores públicos desafios específicos que se diferenciam das antigas metrópoles ocidentais porque essas cidades",
    options: [
      {
        id: "a",
        text: "possuem orçamentos municipais per capita superiores aos de cidades de países centrais e desfrutam de pleno emprego industrial formal.",
        isCorrect: false,
        distractorRationale: "O orçamento per capita das megacidades do Sul Global é baixo e o desemprego/informalidade é crônico."
      },
      {
        id: "b",
        text: "cresceram em ritmo vertiginoso em curto espaço de tempo, acumulando graves déficits históricos de infraestrutura básica, habitação formal e gestão de resíduos sólidos.",
        isCorrect: true,
        distractorRationale: "Correto: As metrópoles dos países desenvolvidos urbanizaram-se lentamente ao longo de dois séculos, acompanhadas por industrialização e capacidade orçamentária para estruturar metrôs, esgotos e planos diretores. No Sul Global, o crescimento ocorreu em poucas décadas via êxodo rural acelerado, gerando megacidades com orçamentos restritos que lutam diariamente contra favelização, trânsito paralisado, poluição e carência de água e saneamento."
      },
      {
        id: "c",
        text: "apresentam taxas de crescimento demográfico rigorosamente negativas e escassez crônica de mão de obra jovem.",
        isCorrect: false,
        distractorRationale: "Elas continuam populosas, com expressivo contingente jovem e taxas elevadas de urbanização."
      },
      {
        id: "d",
        text: "conseguiram eliminar as emissões de carbono e adotaram a reciclagem compulsória de 100% de seus resíduos.",
        isCorrect: false,
        distractorRationale: "A gestão de resíduos e a queima de combustíveis fósseis estão entre os maiores gargalos dessas aglomerações."
      },
      {
        id: "e",
        text: "são desprovidas de qualquer atividade comercial ou bancária conectada às finanças mundiais.",
        isCorrect: false,
        distractorRationale: "Muitas megacidades (como São Paulo e Xangai) são também importantes centros econômicos globais."
      }
    ],
    detailedExplanation: {
      summary: "Megacidades do Sul Global cresceram de forma rápida e desordenada, acumulando dívidas históricas de saneamento, mobilidade e habitação com orçamentos públicos limitados.",
      stepByStep: [
        "1. Conhecer a definição da ONU: aglomeração urbana com 10 milhões ou mais de habitantes = Megacidade.",
        "2. Identificar a mudança geográfica: o fenômeno deslocou-se do Norte rico para o Sul em desenvolvimento.",
        "3. Comparar a história dos processos: lenta e rica na Europa x rápida, pobre e desordenada na América Latina e África.",
        "4. Concluir que o desafio primordial reside no déficit crônico de serviços essenciais e na vulnerabilidade socioambiental."
      ],
      coreConcept: "O conceito de megacidade é estritamente quantitativo (população ≥ 10 milhões), enfrentando crises severas de infraestrutura nos países periféricos.",
      trapWarning: "Lembre-se da diferença: Megacidade = tamanho populacional (≥ 10 milhões); Cidade Global = poder e centralidade de comando econômico internacional."
    },
    commonTraps: [
      "Confundir o critério demográfico de megacidade com o critério funcional de cidade global.",
      "Achar que o crescimento urbano no Sul Global seguiu o mesmo padrão planejado dos países ricos."
    ],
    tags: ["Humanas", "Geografia Urbana", "Megacidades", "ONU", "Sul Global", "Infraestrutura Urbana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-021",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A 'Cidade Invisível' dos Resíduos Sólidos e os Catadores de Recicláveis",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Política Nacional de Resíduos Sólidos (PNRS - Lei nº 12.305/2010) determinou o encerramento definitivo dos lixões a céu aberto no Brasil e estabeleceu a responsabilidade compartilhada pelo ciclo de vida dos produtos, instituindo a logística reversa. A legislação também determinou a inclusão prioritária e a contratação remunerada de cooperativas de catadores de materiais recicláveis na coleta seletiva municipal.",
      source: "BRASIL. Lei nº 12.305, de 2 de agosto de 2010. Política Nacional de Resíduos Sólidos. Brasília: Presidência da República, 2010."
    },
    prompt: "A inclusão formal das cooperativas de catadores de materiais recicláveis prevista na PNRS justifica-se social e ambientalmente porque",
    options: [
      {
        id: "a",
        text: "elimina a responsabilidade das indústrias fabricantes de recolherem suas próprias embalagens pós-consumo.",
        isCorrect: false,
        distractorRationale: "A PNRS impõe expressamente a logística reversa aos fabricantes."
      },
      {
        id: "b",
        text: "reconhece o papel ecológico fundamental desses trabalhadores na reciclagem do país, promovendo a emancipação de sua renda e tirando-os da informalidade degradante.",
        isCorrect: true,
        distractorRationale: "Correto: Historicamente, os catadores atuavam na informalidade mais precária nos lixões, explorados por atravessadores intermediários. No entanto, são responsáveis por mais de 90% de todo o material reciclado que efetivamente retorna à indústria no Brasil. A PNRS busca valorizar essa categoria por meio da economia solidária, gerando dignidade de renda, equipamentos de proteção e integração remunerada com o poder público municipal."
      },
      {
        id: "c",
        text: "obriga os catadores a financiarem com seus próprios recursos a construção de aterros sanitários privados.",
        isCorrect: false,
        distractorRationale: "A construção e operação de aterros sanitários cabe às prefeituras ou consórcios de saneamento."
      },
      {
        id: "d",
        text: "proíbe o recolhimento de plásticos e metais para priorizar a queima e incineração de todo o lixo urbano.",
        isCorrect: false,
        distractorRationale: "A prioridade da lei é a redução, reutilização e reciclagem, e não a queima indiscriminada."
      },
      {
        id: "e",
        text: "restringe a coleta seletiva apenas aos bairros centrais que possuem renda per capita elevada.",
        isCorrect: false,
        distractorRationale: "A PNRS visa à universalização da coleta seletiva em toda a malha municipal."
      }
    ],
    detailedExplanation: {
      summary: "A PNRS valoriza os catadores organizados em cooperativas como agentes ecológicos centrais da logística reversa, promovendo cidadania e economia solidária.",
      stepByStep: [
        "1. Identificar o marco legal: Lei 12.305/2010 (Política Nacional de Resíduos Sólidos).",
        "2. Identificar a diretriz: erradicar lixões a céu aberto, implantar aterros sanitários e coleta seletiva com cooperativas.",
        "3. Reconhecer o papel dos catadores: realizam a triagem da maior parte do lixo reciclável da indústria brasileira.",
        "4. Concluir que a formalização cooperativa resgata esses trabalhadores da exploração precarizada e fortalece a economia circular."
      ],
      coreConcept: "A logística reversa e a reciclagem na PNRS unem sustentabilidade ambiental à justiça social mediante a inclusão de catadores de materiais recicláveis.",
      trapWarning: "Lixão (depósito a céu aberto sem proteção do solo e com chorume vazando) é completamente diferente de Aterro Sanitário (obra de engenharia impermeabilizada com queima de biogás e tratamento de chorume)."
    },
    commonTraps: [
      "Confundir lixão a céu aberto com aterro sanitário controlado.",
      "Desconsiderar a relevância socioeconômica dos catadores na cadeia produtiva da reciclagem."
    ],
    tags: ["Humanas", "Geografia Urbana", "Resíduos Sólidos", "PNRS", "Catadores", "Reciclagem", "Sustentabilidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-022",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A 'Favelização' e a Topografia: Ocupação de Encostas e Riscos Geológicos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No relevo do domínio dos Mares de Morros característico do litoral do Sudeste (como na Serra do Mar e nos morros do Rio de Janeiro, Petrópolis e Baixada Santista), a combinação de declividade acentuada, solos de alteração espessos e chuvas torrenciais de verão gera suscetibilidade natural a movimentos de massa (deslizamentos de encosta). No entanto, a ocupação desordenada por moradias precárias que realizam cortes e aterros irregulares, desmatamento da cobertura florestal e lançamento de água servida diretamente no solo multiplica exponencialmente o número de tragédias fatais.",
      source: "ROSS, J. L. S. Geografia do Brasil. Edusp, 2019."
    },
    prompt: "A ocorrência de deslizamentos catastróficos de encostas em assentamentos precários decorre da interação entre fatores naturais e antrópicos, destacando-se entre as ações humanas desestabilizadoras",
    options: [
      {
        id: "a",
        text: "o plantio excessivo de árvores nativas com raízes profundas que quebram as rochas sãs.",
        isCorrect: false,
        distractorRationale: "A vegetação nativa com raízes profundas fixa o solo e estabiliza encostas, prevenindo deslizamentos."
      },
      {
        id: "b",
        text: "a retirada da vegetação que protegia o solo do impacto das gotas, aliada aos cortes verticais no talude e à infiltração de água servida que satura e lubrifica a camada de solo sobre a rocha.",
        isCorrect: true,
        distractorRationale: "Correto: A remoção da vegetação expõe o solo ao impacto direto da chuva (efeito splash). Os cortes mecânicos na base das encostas deixam o talude verticalizado e sem sustentação. Além disso, a ausência de rede de esgoto e canalização de águas pluviais faz com que a água descartada infiltre no solo residual, aumentando o peso da massa e criando uma superfície lubrificada sobre a rocha subjacente, o que deflagra o deslizamento quando sobrevêm as chuvas concentradas de verão."
      },
      {
        id: "c",
        text: "a construção de sistemas de drenagem pluvial profundos revestidos de concreto em todas as ruelas.",
        isCorrect: false,
        distractorRationale: "Sistemas de drenagem adequados evitam a saturação do solo e previnem deslizamentos."
      },
      {
        id: "d",
        text: "o uso exclusivo de estruturas de contenção por muros de gabião e solo grampeado certificado.",
        isCorrect: false,
        distractorRationale: "Muros de contenção são obras de engenharia preventiva que seguram as encostas."
      },
      {
        id: "e",
        text: "a instalação de sensores sismográficos de alta sensibilidade para prever erupções vulcânicas.",
        isCorrect: false,
        distractorRationale: "Não há vulcanismo ativo no Brasil; o fenômeno é de gravidade, declividade e água no solo."
      }
    ],
    detailedExplanation: {
      summary: "Os deslizamentos em favelas de morros resultam de cortes irregulares no relevo, desmatamento e infiltração de esgoto que saturam o solo em épocas de chuvas fortes.",
      stepByStep: [
        "1. Identificar o substrato geomorfológico: Mares de Morros, solo argiloso sobre rocha cristalina com alta declividade.",
        "2. Identificar a ação antrópica irregular: cortes em ângulo reto no talude para erguer barracos, eliminando o equilíbrio mecânico da encosta.",
        "3. Identificar o papel da água: ausência de rede de esgoto joga água diretamente no solo, encharcando-o e aumentando o peso da massa.",
        "4. O gatilho: chuvas torrenciais de verão atingem o solo já saturado, que desliza em bloco sobre a rocha lisa.",
        "5. Concluir que a tragédia é fruto da desigualdade fundiária que empurra os mais pobres para áreas de risco geológico."
      ],
      coreConcept: "Os deslizamentos urbanos são desastres socionaturais: a vulnerabilidade das encostas é agravada pela exclusão urbana e falta de infraestrutura habitacional segura.",
      trapWarning: "Cuidado: a chuva não é a única 'culpada'; sem os cortes irregulares, desmatamento e falta de drenagem provocados pela exclusão social, a magnitude das tragédias seria infinitamente menor."
    },
    commonTraps: [
      "Culpar exclusivamente a natureza ou os moradores sem reconhecer a falta de políticas habitacionais do Estado.",
      "Achar que plantar bananeiras ajuda a segurar encostas (bananeiras têm raízes rasas e acumulam muita água, facilitando o escorregamento)."
    ],
    tags: ["Humanas", "Geografia Urbana", "Movimentos de Massa", "Deslizamentos", "Encostas", "Riscos Geológicos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-023",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A 'Cidade Inteligente' (Smart City) e o Risco de Exclusão Digital",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O conceito contemporâneo de 'Cidade Inteligente' (Smart City) propõe o emprego massivo de sensores de Internet das Coisas (IoT), algoritmos de inteligência artificial e aplicativos para otimizar serviços públicos urbanos: semáforos adaptativos em tempo real, reconhecimento facial para segurança patrimonial, lâmpadas LED inteligentes e digitalização de prontuários médicos e agendamentos de serviços. Críticos do urbanismo digital alertam, todavia, que a privatização da gestão de dados por Big Techs e o fosso de conectividade nas periferias podem consolidar novas formas de vigilância corporativa e exclusão de cidadãos analfabetos digitais.",
      source: "ZUBOFF, S. A Era do Capitalismo de Vigilância. Rio de Janeiro: Intrínseca, 2021."
    },
    prompt: "Para que a transição para o modelo de 'cidade inteligente' não aprofunde as desigualdades socioespaciais históricas já existentes na metrópole, as políticas públicas devem assegurar",
    options: [
      {
        id: "a",
        text: "a substituição de todas as escolas e postos de atendimento presenciais por totens eletrônicos exclusivos em inglês.",
        isCorrect: false,
        distractorRationale: "Isso aumentaria a exclusão social de idosos, analfabetos digitais e populações sem instrução formal."
      },
      {
        id: "b",
        text: "a universalização da infraestrutura digital de qualidade em áreas vulneráveis, a proteção dos dados dos cidadãos contra abusos comerciais e a manutenção de canais acessíveis a toda a população.",
        isCorrect: true,
        distractorRationale: "Correto: A tecnologia deve ser instrumento de democratização da cidadania e não barreira excludente. Se um serviço de saúde ou assistência social só puder ser agendado por aplicativo moderno, as famílias pobres sem pacote de dados ou letramento digital serão marginalizadas. Cidades inteligentes justas exigem internet pública de alta velocidade nas periferias, proteção à privacidade (LGPD) e preservação do atendimento presencial humanizado."
      },
      {
        id: "c",
        text: "o repasse de todos os dados tributários e sanitários da população a bancos estrangeiros sem consentimento.",
        isCorrect: false,
        distractorRationale: "A entrega desregulada de dados viola direitos fundamentais e o marco legal da LGPD."
      },
      {
        id: "d",
        text: "a restrição do uso de smartphones aos indivíduos que comprovem renda familiar de classe média alta.",
        isCorrect: false,
        distractorRationale: "Trata-se de uma proposta abertamente discriminatória e inconstitucional."
      },
      {
        id: "e",
        text: "a eliminação do transporte público gratuito para estudantes e idosos.",
        isCorrect: false,
        distractorRationale: "A gratuidade do transporte para idosos e estudantes é garantia legal de inclusão social."
      }
    ],
    detailedExplanation: {
      summary: "A 'Smart City' só é socialmente justa se garantir inclusão digital democrática nas periferias, proteção de dados e alternativas presenciais para quem não domina aplicativos.",
      stepByStep: [
        "1. Analisar a promessa da Smart City: eficiência técnica através de automação e dados digitais.",
        "2. Identificar os perigos socioespaciais: apartheid digital (quem não tem internet fica sem atendimento público) e vigilância de dados pelas corporações.",
        "3. Definir o caminho para a justiça urbana: democratizar a infraestrutura digital pública e manter o serviço público acessível a todos os segmentos sociais.",
        "4. Concluir que a tecnologia deve servir ao bem comum e à redução de disparidades."
      ],
      coreConcept: "A cidade inteligente inclusiva combina automação técnica com soberania de dados e garantia de acesso a direitos para as camadas vulneráveis.",
      trapWarning: "Cuidado com o tecno-otimismo ingênuo: inovação tecnológica desprovida de sensibilidade social reproduz ou aprofunda as velhas desigualdades urbanas com roupagem digital."
    },
    commonTraps: [
      "Achar que colocar totens e aplicativos resolve automaticamente as mazelas estruturais da cidade.",
      "Esquecer que milhões de brasileiros enfrentam analfabetismo digital ou falta crônica de internet de qualidade."
    ],
    tags: ["Humanas", "Geografia Urbana", "Cidades Inteligentes", "Smart Cities", "Inclusão Digital", "Tecnologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-024",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A 'Pedonalização' e a Humanização dos Centros Urbanos",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No início dos anos 1970, o arquiteto Jaime Lerner, então prefeito de Curitiba, transformou a tradicional Rua das Flores no primeiro calçadão exclusivamente para pedestres do Brasil, executando a obra em um único final de semana para driblar a resistência dos comerciantes que temiam perder clientes automobilistas. O resultado foi uma explosão nas vendas do comércio lojista local, intensificação do convívio comunitário diário e valorização do patrimônio histórico arquitetônico.",
      source: "LERNER, J. Acupuntura Urbana. Rio de Janeiro: Record, 2011."
    },
    prompt: "O fechamento de vias centrais para o tráfego de automóveis particulares e sua conversão em calçadões de pedestres ('pedonalização') contribui para a sustentabilidade da cidade porque",
    options: [
      {
        id: "a",
        text: "inviabiliza o comércio tradicional ao impedir que caminhões pesados façam carga e descarga permanente no horário comercial.",
        isCorrect: false,
        distractorRationale: "Calçadões têm horários noturnos regulados para abastecimento e impulsionam o comércio lojista."
      },
      {
        id: "b",
        text: "restitui o espaço urbano à escala humana do pedestre, incentiva a permanência e o convívio coletivo, reduz emissões de poluentes e dinamiza as atividades econômicas locais.",
        isCorrect: true,
        distractorRationale: "Correto: A pedonalização resgata a cidade da tirania do automóvel. Ruas exclusivas para pedestres tornam a caminhada agradável e segura, incentivam a permanência nas vitrines e cafés, diminuem o ruído sonoro e a poluição do ar e transformam o espaço público em local de encontro cívico, lazer e vitalidade econômica."
      },
      {
        id: "c",
        text: "obriga todos os residentes a adquirirem motocicletas para se locomoverem sobre as calçadas.",
        isCorrect: false,
        distractorRationale: "Veículos motorizados são proibidos nos calçadões de pedestres."
      },
      {
        id: "d",
        text: "elimina a necessidade de iluminação pública e policiamento preventivo nas praças.",
        isCorrect: false,
        distractorRationale: "Calçadões demandam boa iluminação e segurança para fruição noturna dos cidadãos."
      },
      {
        id: "e",
        text: "estimula a fuga de moradores em direção aos bairros rurais isolados.",
        isCorrect: false,
        distractorRationale: "A humanização dos centros revitaliza a atratividade da vida urbana."
      }
    ],
    detailedExplanation: {
      summary: "A pedonalização humaniza as cidades, devolvendo as ruas ao convívio dos pedestres, estimulando o comércio local e reduzindo a poluição e ruído dos carros.",
      stepByStep: [
        "1. Analisar o exemplo histórico de Curitiba: a Rua das Flores como pioneira na valorização do pedestre.",
        "2. Identificar a resistência inicial do comércio e a constatação posterior: pedestres compram muito mais do que carros passando a 60 km/h.",
        "3. Benefícios ecológicos: ar mais puro, menos ruído sonoro, incentivo à caminhada saudável.",
        "4. Benefícios sociais: convívio democrático de diferentes classes sociais no espaço público compartilhado."
      ],
      coreConcept: "A pedonalização prioriza a escala humana e a caminhabilidade sobre a hegemonia do tráfego motorizado individual.",
      trapWarning: "Cidades modernas de referência mundial (Paris, Madri, Pontevedra, Bogotá) estão ampliando zonas de pedestres e reduzindo espaço para carros particulares."
    },
    commonTraps: [
      "Achar que fechar rua para carro prejudica o comércio (estudos mundiais provam que o comércio de calçadões fatura mais).",
      "Confundir rua de pedestres com ausência de planejamento de transporte coletivo."
    ],
    tags: ["Humanas", "Geografia Urbana", "Pedonalização", "Escala Humana", "Caminhabilidade", "Curitiba"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-SEG-025",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "Geografia",
    subtopic: "A 'Financeirização' do Solo Urbano e a Crise Global da Moradia",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em relatório apresentado à Assembleia Geral da ONU, a Relatora Especial para o Direito à Moradia Adequada, Leilani Farha, denunciou que o mercado habitacional global foi capturado pela 'financeirização'. Grandes fundos globais de private equity e investidores institucionais compram em escala maciça bairros inteiros e carteiras imobiliárias residenciais em metrópoles mundiais não para fornecer moradia a preços acessíveis, mas para transformá-los em ativos de especulação e securitização financeira, desvinculando o preço dos imóveis da renda real das famílias trabalhadoras.",
      source: "FARHA, L. Report of the Special Rapporteur on Adequate Housing as a Component of the Right to an Adequate Standard of Living. Genebra: Nações Unidas, 2017."
    },
    prompt: "A financeirização da moradia descrita pela relatora da ONU gera impactos deletérios sobre a cidadania urbana porque",
    options: [
      {
        id: "a",
        text: "distribui gratuitamente residências luxuosas a todas as famílias em situação de rua.",
        isCorrect: false,
        distractorRationale: "A financeirização encarece os imóveis e agrava o problema da população de rua."
      },
      {
        id: "b",
        text: "subordina um direito humano fundamental (morar) à lógica da rentabilidade e do lucro especulativo de fundos financeiros, elevando os preços do solo e gerando expulsões em massa de inquilinos de baixa e média renda.",
        isCorrect: true,
        distractorRationale: "Correto: A financeirização transforma a habitação (que é um direito humano universal consagrado na Declaração de 1948 e na CF/88) em mercadoria puramente financeira ('ativo rentista'). Os imóveis passam a ser negociados em bolsas de valores como ações especulativas, inflacionando o valor dos aluguéis para patamares inalcançáveis pela classe trabalhadora e provocando despejos em massa, hiperendividamento e desabrigo nas metrópoles contemporâneas."
      },
      {
        id: "c",
        text: "elimina a cobrança de juros e impostos sobre contratos de compra de casas populares.",
        isCorrect: false,
        distractorRationale: "Os fundos buscam maximizar o retorno financeiro com juros e aluguéis máximos possíveis."
      },
      {
        id: "d",
        text: "garante que os municípios construam creches e escolas em todos os terrenos desocupados.",
        isCorrect: false,
        distractorRationale: "A retenção especulativa de terras impede o poder público de construir equipamentos sociais."
      },
      {
        id: "e",
        text: "impõe a desapropriação compulsória dos ativos de todos os grandes investidores internacionais.",
        isCorrect: false,
        distractorRationale: "O texto denuncia exatamente a falta de regulação estatal contra a especulação desses fundos."
      }
    ],
    detailedExplanation: {
      summary: "A financeirização da moradia reduz o teto e o lar a ativos rentistas negociados em bolsas, desconectando o custo imobiliário dos salários e expulsando moradores.",
      stepByStep: [
        "1. Compreender o fenômeno da 'financeirização': a transferência do comando da economia produtiva para o capital financeiro e especulativo.",
        "2. Aplicação à habitação: casas e apartamentos deixam de ser lugares de vida familiar e viram papéis de investimento para fundos de pensão globais.",
        "3. Consequências diretas: explosão no valor dos aluguéis, despejos forçados, inflação imobiliária e aumento vertiginoso da população em situação de rua.",
        "4. A crítica da ONU: a moradia deve ser defendida como direito humano inalienável e não como cassino financeiro corporativo."
      ],
      coreConcept: "A financeirização da habitação transforma o direito humano à moradia em ativo especulativo global, agravando a crise de desabrigados e inquilinos nas metrópoles.",
      trapWarning: "Não confunda financiamento habitacional popular (como programas públicos de crédito subsidiado) com a financeirização especulativa dos fundos de investimento."
    },
    commonTraps: [
      "Achar que a crise de moradia atual no mundo é fruto apenas de decisões individuais de senhorios locais.",
      "Desconsiderar a denúncia formal de relatores de direitos humanos da ONU contra a especulação financeira das cidades."
    ],
    tags: ["Humanas", "Geografia Urbana", "Financeirização", "Direito à Moradia", "ONU", "Crise Urbana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
