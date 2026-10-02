/**
 * BANCO DE QUESTÕES: GEOGRAFIA AGRÁRIA, AGRONEGÓCIO E QUESTÃO FUNDIÁRIA NO ENEM
 * Área: Ciências Humanas e suas Tecnologias
 * Competências: C2, C4, C6 | Habilidades: H6, H7, H17, H18, H26, H27
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de conformidade com a Matriz de Referência do INEP
 * Regra Estrita: ZERO termos de deslocamentos turísticos.
 */

export const QUESTIONS_GEOGRAFIA_AGRARIA = [
  {
    id: "HUM-AGR-001",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Estrutura Fundiária Brasileira",
    subtopic: "Concentração Fundiária e o Índice de Gini da Terra",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Dados do Censo Agropecuário do IBGE revelam que os estabelecimentos agropecuários com mais de 1.000 hectares representam menos de 1% do total de propriedades rurais no Brasil, mas concentram quase metade (cerca de 47%) de toda a área agricultável do país. Em contrapartida, as propriedades familiares com menos de 10 hectares representam cerca de metade de todos os estabelecimentos, mas ocupam apenas 2,3% da área total. O Índice de Gini da posse da terra no Brasil permanece historicamente acima de 0,85.",
      source: "IBGE. Censo Agropecuário 2017: Resultados Definitivos. Rio de Janeiro: IBGE, 2019."
    },
    prompt: "O quadro estatístico apresentado expressa uma característica estrutural do espaço agrário brasileiro marcada pela",
    options: [
      {
        id: "a",
        text: "distribuição equitativa dos lotes rurais propiciada pela reforma agrária universal nos anos 1990.",
        isCorrect: false,
        distractorRationale: "O Brasil nunca realizou uma reforma agrária ampla ou universal; a estrutura permaneceu hiperconcentrada."
      },
      {
        id: "b",
        text: "elevada concentração fundiária histórica, na qual uma minoria latifundiária monopoliza a maior parte da área produtiva nacional.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Índice de Gini próximo a 1 (0,85) e o fato de menos de 1% dos imóveis deterem quase 50% das terras atestam a persistência secular da extrema concentração fundiária herdada do modelo de capitanias, sesmarias e da Lei de Terras de 1850."
      },
      {
        id: "c",
        text: "supremacia da policultura de subsistência comunitária nas maiores propriedades do Centro-Oeste.",
        isCorrect: false,
        distractorRationale: "As grandes propriedades do Centro-Oeste dedicam-se predominantemente à monocultura mecanizada de commodities (soja e milho)."
      },
      {
        id: "d",
        text: "eliminação completa dos conflitos fundiários por meio da regularização cartorial imediata.",
        isCorrect: false,
        distractorRationale: "A concentração de terras e a indefinição fundiária são justamente as principais causas da violência no campo."
      },
      {
        id: "e",
        text: "substituição das grandes fazendas monocultoras por cooperativas agroecológicas indígenas urbanas.",
        isCorrect: false,
        distractorRationale: "Os dados mostram o fortalecimento do latifúndio monocultor empresarial, e não sua substituição."
      }
    ],
    detailedExplanation: {
      summary: "O Brasil possui uma das estruturas fundiárias mais desiguais do planeta, com Índice de Gini fundiário superior a 0,85.",
      stepByStep: [
        "1. Analisar os números do Censo do IBGE: menos de 1% dos estabelecimentos detêm quase metade da área agrícola.",
        "2. Compreender o Índice de Gini fundiário: varia de 0 (perfeita igualdade) a 1 (máxima concentração); 0,85 reflete extrema desigualdade.",
        "3. Conectar às causas históricas: sesmarias coloniais, escravismo e a Lei de Terras de 1850, mantidas pela modernização conservadora."
      ],
      coreConcept: "Estrutura fundiária brasileira, Índice de Gini e concentração de terras.",
      trapWarning: "Cuidado: grande número de pequenas propriedades não significa que elas tenham muita terra; somadas, ocupam uma parcela insignificante do território."
    },
    commonTraps: ["Confundir número total de propriedades com percentual de área territorial ocupada."],
    tags: ["Estrutura Fundiária", "Censo Agropecuário", "Índice de Gini", "Latifúndio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-002",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Modernização da Agricultura Brasileira",
    subtopic: "A Modernização Conservadora e a Ditadura Militar",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A transformação da agricultura brasileira a partir dos anos 1960 e 1970 foi qualificada pela sociologia como uma 'modernização conservadora'. O Estado autoritário injetou vultosos subsídios através do Sistema Nacional de Crédito Rural (SNCR), mecanizou lavouras e introduziu insumos químicos sem alterar a estrutura da propriedade da terra. Em vez de democratizar o acesso ao solo, o modelo expulsou milhões de meeiros, parceiros e posseiros, acelerando um êxodo rural desordenado rumo às favelas das grandes cidades.",
      source: "GRAZIANO DA SILVA, José. O que é questão agrária. São Paulo: Brasiliense, 1982."
    },
    prompt: "A expressão 'modernização conservadora' sintetiza a dinâmica agrícola brasileira desse período porque",
    options: [
      {
        id: "a",
        text: "conjugou a introdução de inovações tecnológicas no campo com a preservação intacta da concentração fundiária e das velhas estruturas de poder oligárquico.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Modernizou a base técnica (tratores, colheitadeiras, sementes híbridas e fertilizantes químicos), mas conservou a estrutura social arcaica (concentração da terra e exclusão dos camponeses pobres)."
      },
      {
        id: "b",
        text: "promoveu a desapropriação em massa de latifúndios improdutivos para assentar trabalhadores sem-terra.",
        isCorrect: false,
        distractorRationale: "A ditadura militar reprimiu violentamente as Ligas Camponesas e os movimentos pró-reforma agrária."
      },
      {
        id: "c",
        text: "extinguiu o crédito bancário aos grandes produtores para priorizar a agricultura familiar cooperativa.",
        isCorrect: false,
        distractorRationale: "O crédito rural subsidiado (SNCR) beneficiou quase exclusivamente os grandes proprietários exportadores."
      },
      {
        id: "d",
        text: "impediu a importação de maquinários industriais para resguardar as técnicas artesanais indígenas.",
        isCorrect: false,
        distractorRationale: "O governo estimulou fortemente a indústria pesada de maquinários agrícolas e o consumo de combustíveis fósseis."
      },
      {
        id: "e",
        text: "fixou a totalidade da população camponesa no interior, impedindo o inchaço urbano das metrópoles.",
        isCorrect: false,
        distractorRationale: "O efeito foi o oposto: a mecanização gerou desemprego rural em massa e disparou o êxodo rural para as periferias urbanas."
      }
    ],
    detailedExplanation: {
      summary: "A modernização conservadora modernizou os tratores e a tecnologia, mas conservou a desigualdade da terra e os privilégios das elites rurais.",
      stepByStep: [
        "1. Definir o conceito de Graziano da Silva: modernização técnica sem transformação social distributiva.",
        "2. Identificar os instrumentos: subsídios do SNCR, incentivo à soja no Sul/Centro-Oeste e criação da Embrapa.",
        "3. Identificar os impactos: êxodo rural desenfreado, expulsão de posseiros e favelização metropolitana acelerada nas décadas de 1970 e 1980."
      ],
      coreConcept: "Modernização conservadora, Ditadura Militar e questão agrária no Brasil.",
      trapWarning: "Cuidado: modernizar a agricultura não significou torná-la democrática; o campo brasileiro mecanizou-se mantendo o latifúndio excludente."
    },
    commonTraps: ["Achar que modernização agrícola é sinônimo automático de desenvolvimento social equitativo."],
    tags: ["Modernização Conservadora", "Ditadura Militar", "Êxodo Rural", "Crédito Rural"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-003",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Agricultura Familiar e Segurança Alimentar",
    subtopic: "O Papel da Agricultura Familiar na Alimentação dos Brasileiros",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Embora o agronegócio de grande escala seja responsável pelos saldos expressivos da balança comercial brasileira com a exportação de soja, milho em grão e cana-de-açúcar, é a agricultura familiar a principal responsável por colocar comida na mesa do cidadão comum: ela produz cerca de 70% da mandioca, 60% do leite de consumo direto, 70% do feijão e a quase totalidade das hortaliças frescas, além de responder por mais de 67% de todos os postos de trabalho ocupados no campo.",
      source: "MINISTÉRIO DO DESENVOLVIMENTO AGRÁRIO (MDA). Agricultura Familiar no Brasil: Produção e Emprego. Brasília, 2021."
    },
    prompt: "A relevância socioeconômica e estratégica da agricultura familiar no Brasil decorre de sua capacidade de",
    options: [
      {
        id: "a",
        text: "assegurar a soberania alimentar da população e gerar ocupação de mão de obra em escala superior à do grande agronegócio monocultor.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A agricultura familiar produz a cesta básica de alimentos consumida internamente e emprega a maioria dos trabalhadores rurais, contrastando com o agronegócio que é altamente mecanizado (poucos empregos) e focado em commodities de exportação."
      },
      {
        id: "b",
        text: "monopolizar os subsídios financeiros concedidos pelos bancos de fomento internacional.",
        isCorrect: false,
        distractorRationale: "A agricultura familiar recebe uma fatia muito menor de crédito em comparação ao grande agronegócio empresarial (Plano Safra)."
      },
      {
        id: "c",
        text: "substituir a produção de hortaliças pelo plantio intensivo de soja transgênica para nutrição animal externa.",
        isCorrect: false,
        distractorRationale: "A soja para ração animal externa é cultivada pelas grandes corporações agroindustriais, e não pelos pequenos agricultores familiares."
      },
      {
        id: "d",
        text: "operar sem qualquer dependência de precipitação pluviométrica ou de recursos edáficos.",
        isCorrect: false,
        distractorRationale: "A agricultura familiar é altamente vulnerável a secas, cheias e variações climáticas locais."
      },
      {
        id: "e",
        text: "converter as florestas equatoriais em pastagens de pecuária extensiva de corte para a Europa.",
        isCorrect: false,
        distractorRationale: "A pecuária extensiva é atividade de grandes fazendeiros e grileiros na fronteira agrícola, não da agricultura familiar tradicional."
      }
    ],
    detailedExplanation: {
      summary: "A agricultura familiar é o pilar da segurança alimentar brasileira e da empregabilidade no campo.",
      stepByStep: [
        "1. Diferenciar agronegócio patronal (commodities, exportação, mecanização pesada, poucos empregos diretos) de agricultura familiar (alimentos da cesta básica, policultura, alta absorção de trabalho).",
        "2. Identificar a participação: a agricultura familiar responde por cerca de 70% dos alimentos diretos que chegam às feiras e mesas do país.",
        "3. Concluir que apoiar a agricultura familiar (PRONAF, PAA, PNAE) é essencial para o controle da inflação de alimentos e combate à fome."
      ],
      coreConcept: "Agricultura familiar, segurança alimentar e geração de emprego rural no Brasil.",
      trapWarning: "Cuidado com o senso comum: o Brasil ser o maior produtor de soja não significa que a soja alimente o povo brasileiro; a soja é farelo para engordar porcos e frangos na Ásia e Europa."
    },
    commonTraps: ["Achar que o agronegócio de exportação é quem produz o arroz, o feijão e as hortaliças das refeições dos brasileiros."],
    tags: ["Agricultura Familiar", "Segurança Alimentar", "Emprego no Campo", "PRONAF"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-004",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Expansão da Fronteira Agrícola no Brasil",
    subtopic: "A Região do MATOPIBA e os Impactos no Cerrado",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A sigla MATOPIBA designa a região formada por áreas confluentes dos estados do Maranhão, Tocantins, Piauí e Bahia. Considerada a última grande fronteira agrícola do Cerrado brasileiro, a área presenciou um crescimento vertiginoso da produção mecanizada de soja e algodão em chapadões planos. No entanto, ambientalistas e hidrólogos alertam para a perda de vegetação nativa do Cerrado — bioma conhecido como a 'caixa d'água do Brasil' —, o que tem provocado a diminuição do fluxo de nascentes que alimentam as bacias do São Francisco, Araguaia e Tocantins.",
      source: "EMBRAPA. Dinâmica da fronteira agrícola no MATOPIBA. Campinas: Embrapa Gestão Territorial, 2020."
    },
    prompt: "A expansão do agronegócio no MATOPIBA gera um dilema socioambiental porque",
    options: [
      {
        id: "a",
        text: "o relevo montanhoso e íngreme da região impede a passagem de colheitadeiras modernas.",
        isCorrect: false,
        distractorRationale: "O MATOPIBA é formado por extensos chapadões planos altamente favoráveis à mecanização pesada."
      },
      {
        id: "b",
        text: "o aumento da produção de grãos para exportação ocorre às custas do desmatamento do Cerrado e do comprometimento da recarga dos aquíferos que sustentam importantes bacias hidrográficas nacionais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O desmatamento das raízes profundas do Cerrado (que funcionam como 'esponja' subterrânea) reduz a infiltração de água para os aquíferos Guarani e Urucuia, ameaçando a segurança hídrica e os rios de várias regiões do país."
      },
      {
        id: "c",
        text: "a legislação ambiental proíbe qualquer atividade produtiva na totalidade dos estados do Nordeste.",
        isCorrect: false,
        distractorRationale: "O Código Florestal permite a supressão de até 65% a 80% do Cerrado dependendo da localização (fora da Amazônia Legal a reserva legal é de apenas 20%)."
      },
      {
        id: "d",
        text: "a população nativa recusou a utilização de sementes transgênicas desenvolvidas pela Embrapa.",
        isCorrect: false,
        distractorRationale: "A produção empresarial utiliza quase 100% de sementes transgênicas."
      },
      {
        id: "e",
        text: "a fertilidade natural dos solos da região prescinde de qualquer correção com calcário ou adubação fosfatada.",
        isCorrect: false,
        distractorRationale: "O solo do Cerrado é ácido e pobre em nutrientes, exigindo pesada calagem e fertilização química."
      }
    ],
    detailedExplanation: {
      summary: "O MATOPIBA é a fronteira agrícola mais ativa do país, com alta produtividade de grãos e graves impactos na segurança hídrica do Cerrado.",
      stepByStep: [
        "1. Identificar o acrônimo: MATOPIBA = Maranhão, Tocantins, Piauí e Bahia.",
        "2. Identificar as vantagens físicas para o agronegócio: relevo plano de chapada, radiação solar e terras historicamente baratas.",
        "3. Identificar os impactos ecológicos: o Cerrado é a 'caixa d'água' que recarrega 8 das 12 regiões hidrográficas do Brasil; sua supressão compromete rios vitais como o São Francisco e o Tocantins."
      ],
      coreConcept: "Fronteira agrícola, MATOPIBA, bioma Cerrado e recarga de aquíferos.",
      trapWarning: "No Cerrado fora da Amazônia Legal, a Reserva Legal obrigatória é de apenas 20% (contra 80% na floresta amazônica), facilitando o rápido desmatamento legalizado."
    },
    commonTraps: ["Achar que o desmatamento no Brasil ocorre apenas na Amazônia, esquecendo o colapso acelerado do Cerrado."],
    tags: ["MATOPIBA", "Cerrado", "Agronegócio", "Bacias Hidrográficas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-005",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Impactos Ambientais dos Agrotóxicos e Revolução Verde",
    subtopic: "Contaminação Química, Resistência de Pragas e Bioacumulação",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O modelo da Revolução Verde baseou-se no plantio extensivo de monoculturas associado ao uso em larga escala de defensivos químicos sintéticos (agrotóxicos) e fertilizantes à base de nitrogênio e fósforo. Com o passar dos anos, a aplicação contínua dos mesmos princípios ativos selecionou populações de plantas invasoras e insetos resistentes, exigindo doses cada vez mais altas e coquetéis de substâncias com potencial carcinogênico e desregulador endócrino, que contaminam o lençol freático e os cursos d'água.",
      source: "CARNEIRO, Fernando Ferreira (Org.). Dossiê ABRASCO: um alerta sobre os impactos dos agrotóxicos na saúde. Rio de Janeiro: EPSJV/Expressão Popular, 2015."
    },
    prompt: "O aumento progressivo do consumo de agrotóxicos no modelo agrícola monocultor contemporâneo decorre diretamente de um processo ecológico conhecido como",
    options: [
      {
        id: "a",
        text: "seleção artificial espontânea que imuniza os mamíferos carnívoros contra venenos químicos.",
        isCorrect: false,
        distractorRationale: "Mamíferos sofrem bioacumulação tóxica e doenças, não imunidade."
      },
      {
        id: "b",
        text: "pressão seletiva gerada pelo uso continuado de pesticidas, que elimina espécimes suscetíveis e seleciona indivíduos resistentes, retroalimentando a dependência de insumos químicos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O uso contínuo e massivo de um pesticida elimina os indivíduos vulneráveis e permite a sobrevivência e reprodução dos espécimes que possuem resistência genética, exigindo venenos mais fortes num ciclo vicioso ('esteira de pesticidas')."
      },
      {
        id: "c",
        text: "reflorestamento espontâneo de matas ciliares nos leitos dos rios poluídos.",
        isCorrect: false,
        distractorRationale: "A contaminação química e o desmatamento destroem a vegetação ripária."
      },
      {
        id: "d",
        text: "erradicação definitiva de fungos e microrganismos de todo o território continental.",
        isCorrect: false,
        distractorRationale: "Microrganismos patogênicos desenvolvem resistência rápida e continuam proliferando."
      },
      {
        id: "e",
        text: "proliferação exclusiva de abelhas nativas polinizadoras em áreas pulverizadas.",
        isCorrect: false,
        distractorRationale: "Agrotóxicos (especialmente neonicotinoides) provocam o colapso e morte massiva de colmeias de abelhas polinizadoras."
      }
    ],
    detailedExplanation: {
      summary: "O uso massivo de agrotóxicos provoca a seleção natural de pragas e ervas resistentes, gerando a armadilha química da monocultura.",
      stepByStep: [
        "1. Analisar a lógica evolutiva darwiniana: a aplicação do veneno atua como agente seletivo.",
        "2. Identificar a consequência: apenas os insetos/ervas com mutações que conferem resistência sobrevivem e deixam descendentes.",
        "3. Concluir que a monocultura gera desequilíbrio ecológico e exige volumes crescentes de pesticidas tóxicos."
      ],
      coreConcept: "Revolução Verde, resistência a pesticidas e impactos socioambientais dos agrotóxicos.",
      trapWarning: "O Brasil é um dos maiores consumidores mundiais absolutos de agrotóxicos, muitos deles proibidos na União Europeia por toxicidade comprovada."
    },
    commonTraps: ["Achar que os agrotóxicos matam 100% dos insetos para sempre sem gerar resistência evolutiva."],
    tags: ["Agrotóxicos", "Revolução Verde", "Seleção Natural", "Impacto Ambiental"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-006",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Conflitos no Campo e Comunidades Tradicionais",
    subtopic: "A Luta das Quebradeiras de Coco Babaçu e a Lei do Babaçu Livre",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nos estados do Maranhão, Piauí, Pará e Tocantins, milhares de mulheres organizadas no Movimento Interestadual das Quebradeiras de Coco Babaçu (MIQCB) lutam pela aprovação e cumprimento das leis municipais do 'Babaçu Livre'. Essas leis asseguram o livre acesso das quebradeiras aos babaçuais nativos situados mesmo dentro de propriedades privadas, proibindo a derrubada das palmeiras para a formação de pasto de gado ou plantio de soja e vedando a queima e o uso de agrotóxicos nas áreas de coleta comunitária.",
      source: "MIQCB. Nós e os babaçuais: cartilha de direitos e convivência ecológica. São Luís, 2021."
    },
    prompt: "A reivindicação da Lei do Babaçu Livre expressa um conflito socioespacial centrado na disputa entre",
    options: [
      {
        id: "a",
        text: "o direito de propriedade privada absoluta dos latifundiários e o uso comum tradicional dos recursos da biodiversidade vegetal por populações extrativistas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A luta contrapõe a concepção privatista e excludente da terra (fazendeiros que cercam e derrubam palmeiras para gado/soja) ao modo de vida tradicional comunitário das quebradeiras, que dependem do fruto para sustento, óleo, farinha e artesanato."
      },
      {
        id: "b",
        text: "a preservação de reservas de petróleo fóssil e o avanço da mineração de bauxita em cavernas.",
        isCorrect: false,
        distractorRationale: "O conflito é agroextrativista sobre a palmeira do babaçu na Zona dos Cocais, não sobre petróleo."
      },
      {
        id: "c",
        text: "a introdução compulsória de palmeiras exóticas asiáticas importadas da Indonésia.",
        isCorrect: false,
        distractorRationale: "O babaçu é uma palmeira nativa brasileira de grande valor socioambiental."
      },
      {
        id: "d",
        text: "a instalação de gasodutos industriais de alta pressão e a expansão de usinas siderúrgicas no litoral.",
        isCorrect: false,
        distractorRationale: "Tema totalmente dissociado da luta camponesa das quebradeiras de coco."
      },
      {
        id: "e",
        text: "a proibição do consumo de alimentos orgânicos nas feiras livres das pequenas cidades.",
        isCorrect: false,
        distractorRationale: "As quebradeiras promovem exatamente a comercialização de produtos agroecológicos."
      }
    ],
    detailedExplanation: {
      summary: "A Lei do Babaçu Livre sintetiza a função social da terra e o direito de uso comum dos recursos naturais por povos tradicionais.",
      stepByStep: [
        "1. Identificar o sujeito histórico: as quebradeiras de coco babaçu (reconhecidas como comunidade tradicional).",
        "2. Identificar o objeto da disputa: os babaçuais na Zona dos Cocais (faixa de transição entre Amazônia, Cerrado e Caatinga).",
        "3. Concluir que a Lei do Babaçu Livre relativiza o direito absoluto de cercamento da propriedade privada em prol da sobrevivência alimentar de milhares de famílias camponesas."
      ],
      coreConcept: "Povos e comunidades tradicionais, Zona dos Cocais, Babaçu Livre e bens comuns.",
      trapWarning: "A Constituição de 1988 estabelece que a propriedade deve cumprir sua função social (art. 5º, XXIII e art. 186)."
    },
    commonTraps: ["Achar que comunidade tradicional no Brasil refere-se unicamente a indígenas e quilombolas."],
    tags: ["Quebradeiras de Coco", "Babaçu Livre", "Comunidades Tradicionais", "Função Social da Terra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-007",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Agroecologia e Modelos Produtivos Sustentáveis",
    subtopic: "Sistemas Agroflorestais (SAFs) e Agricultura Sintrópica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os Sistemas Agroflorestais (SAFs), amplamente difundidos pela agroecologia e pela agricultura sintrópica, combinam na mesma área o cultivo consorciado de espécies agrícolas alimentares (mandioca, milho, banana, hortaliças) com árvores florestais nativas de diferentes estratos e idades. Ao imitar a dinâmica natural de sucessão ecológica das florestas, os SAFs eliminam a necessidade de fertilizantes químicos e agrotóxicos, aumentam a retenção de matéria orgânica no solo, reduzem a evapotranspiração e recuperam áreas degradadas.",
      source: "GÖTSCH, Ernst. O renascer da agricultura: princípios da agricultura sintrópica. Rio de Janeiro: AS-PTA, 1996."
    },
    prompt: "Em contraposição à monocultura convencional do agronegócio, os Sistemas Agroflorestais (SAFs) caracterizam-se por",
    options: [
      {
        id: "a",
        text: "potencializar a regeneração biológica do solo e a ciclagem de nutrientes mediante a diversificação vegetal e a estratificação vertical dos cultivos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Os SAFs consorciam árvores e lavouras em diferentes alturas (estratos), permitindo que a biomassa das podas alimente os microrganismos do solo, mantendo a umidade e sequestrando carbono sem venenos químicos."
      },
      {
        id: "b",
        text: "exigir a queima anual completa da biomassa vegetal para elevar o pH através das cinzas alcalinas.",
        isCorrect: false,
        distractorRationale: "A agroecologia proíbe queimadas; a biomassa é triturada ou podada e deixada no solo como cobertura morta (mulch)."
      },
      {
        id: "c",
        text: "depender da pulverização aérea intensiva de adubos fosfatados solúveis importados.",
        isCorrect: false,
        distractorRationale: "Os SAFs baseiam-se na fertilidade biológica construída pelas próprias plantas acumuladoras de nutrientes e leguminosas fixadoras de nitrogênio."
      },
      {
        id: "d",
        text: "reduzir a variedade de espécies colhidas a um único cultivar transgênico de ciclo curto.",
        isCorrect: false,
        distractorRationale: "O princípio basilar do SAF é a policultura diversificada e rica em agrobiodiversidade."
      },
      {
        id: "e",
        text: "eliminar a presença de polinizadores e microrganismos decompositores da rizosfera.",
        isCorrect: false,
        distractorRationale: "Os SAFs criam habitats ricos que multiplicam abelhas nativas, pássaros, fungos micorrízicos e minhocas."
      }
    ],
    detailedExplanation: {
      summary: "Os Sistemas Agroflorestais integram produção agrícola e recomposição florestal no mesmo espaço com alta produtividade ecológica.",
      stepByStep: [
        "1. Analisar o mecanismo dos SAFs: consórcio de árvores de madeira de lei, frutíferas e culturas anuais.",
        "2. Identificar as vantagens ecossistêmicas: cobertura permanente do solo, retenção de água, sombra parcial que protege contra extremos de calor e enriquecimento de matéria orgânica.",
        "3. Concluir que a agroecologia prova a viabilidade de produzir alimento farto restaurando o ecossistema."
      ],
      coreConcept: "Sistemas Agroflorestais (SAFs), agroecologia e agricultura sintrópica no Brasil.",
      trapWarning: "Agroecologia não é agricultura primitiva: é ciência interdisciplinar de ponta baseada em ecologia, agronomia e saberes tradicionais."
    },
    commonTraps: ["Achar que a agroecologia tem produtividade menor e não consegue alimentar populações."],
    tags: ["Agroecologia", "SAFs", "Agricultura Sintrópica", "Sustentabilidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-008",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Legislação e História da Terra no Brasil",
    subtopic: "A Lei de Terras de 1850 e a Gênese do Latifúndio Moderno",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Sancionada apenas duas semanas após a Lei Eusébio de Queirós (que extinguiu o tráfico transatlântico de escravizados em setembro de 1850), a Lei de Terras nº 601 estabeleceu que as terras públicas devolutas só poderiam ser adquiridas por meio de compra em dinheiro à vista, e não mais por posse ou doação de sesmarias. A lei fixou preços elevados e estabeleceu que os recursos arrecadados seriam utilizados para subsidiar a vinda de imigrantes europeus para trabalhar como colonos nos cafezais.",
      source: "SILVA, Lígia Osório. Terras devolutas e latifúndio: efeitos da Lei de 1850. Campinas: Editora da Unicamp, 1996."
    },
    prompt: "A promulgação da Lei de Terras de 1850 vinculou-se estruturalmente à crise do regime escravista porque",
    options: [
      {
        id: "a",
        text: "assegurou a concessão de lotes de subsistência aos ex-escravizados para formar uma classe média camponesa.",
        isCorrect: false,
        distractorRationale: "A lei foi formulada exatamente para IMPEDIR que ex-escravizados e imigrantes tivessem acesso à terra própria."
      },
      {
        id: "b",
        text: "transformou a terra em mercadoria cara inacessível aos pobres, forçando tanto os futuros libertos quanto os imigrantes a se submeterem ao trabalho assalariado dependente nas grandes fazendas cafeeiras.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Sabendo que o fim do tráfico levaria ao fim da escravidão, os cafeicultores blindaram a terra: com a terra inacessível por compra à vista, quem não tinha capital não podia se tornar camponês autônomo, sendo obrigado a vender sua força de trabalho aos latifundiários."
      },
      {
        id: "c",
        text: "decretou a desapropriação de todas as sesmarias não cultivadas no Vale do Paraíba fluminense.",
        isCorrect: false,
        distractorRationale: "A lei legitimou as sesmarias já ocupadas pelas oligarquias e puniu a posse de pequenos posseiros."
      },
      {
        id: "d",
        text: "aboliu sumariamente os impostos sobre a exportação de produtos agrícolas primários.",
        isCorrect: false,
        distractorRationale: "O objetivo era a regulamentação do regime fundiário e controle da força de trabalho."
      },
      {
        id: "e",
        text: "concedeu cidadania imediata e isenção fiscal aos povos indígenas aldeados.",
        isCorrect: false,
        distractorRationale: "A lei ignorou solenemente os direitos territoriais indígenas, considerando suas terras como 'devolutas' para serem vendidas pelo Estado."
      }
    ],
    detailedExplanation: {
      summary: "A Lei de Terras de 1850 foi o grande golpe das elites cafeeiras para transformar a terra em mercadoria cara antes do fim da escravidão.",
      stepByStep: [
        "1. Analisar a sincronia das leis: Setembro de 1850 ⟹ Lei Eusébio de Queirós (fim do tráfico) e Lei de Terras nº 601.",
        "2. Compreender a jogada das oligarquias: se a terra continuasse acessível pela simples ocupação (posse), os imigrantes e libertos teriam suas próprias roças e ninguém aceitaria trabalhar nos cafezais.",
        "3. Concluir que a lei consolidou o monopólio da terra e condenou as classes trabalhadoras ao assalariamento precarizado."
      ],
      coreConcept: "Lei de Terras de 1850, transição para o trabalho livre e formação do latifúndio no Brasil.",
      trapWarning: "Antes de 1850, a terra era adquirida por sesmaria da Coroa ou por posse física; a partir de 1850, APENAS por compra e venda com registro e dinheiro à vista."
    },
    commonTraps: ["Achar que a Lei de Terras foi criada para democratizar o acesso ao solo."],
    tags: ["Lei de Terras de 1850", "História Econômica", "Latifúndio", "Trabalho Livre"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-009",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Conflitos Fundiários e Violência no Campo",
    subtopic: "A Grilagem de Terras e a Atuação da CPT",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O relatório anual 'Conflitos no Campo Brasil', publicado pela Comissão Pastoral da Terra (CPT), registra que a maioria esmagadora dos assassinatos e ameaças de morte no campo concentra-se nos estados que compõem a Amazônia Legal. A prática da 'grilagem' — a apropriação criminosa e forja de títulos falsificados de terras públicas e devolutas — é apontada como a mola propulsora da violência armada, da invasão de territórios indígenas e quilombolas e da derrubada criminosa de florestas para posterior venda a especuladores.",
      source: "COMISSÃO PASTORAL DA TERRA (CPT). Conflitos no Campo Brasil 2022. Goiânia: CPT Nacional, 2023."
    },
    prompt: "A correlação entre grilagem de terras públicas e violência socioambiental na Amazônia Legal explica-se pelo fato de que",
    options: [
      {
        id: "a",
        text: "a regularização fundiária digital via satélite erradicou os crimes de falsificação cartorial em cartórios municipais.",
        isCorrect: false,
        distractorRationale: "O Cadastro Ambiental Rural (CAR) muitas vezes tem sido fraudado para sobrepor terras públicas a títulos forjados."
      },
      {
        id: "b",
        text: "o roubo de terras da União envolve a expulsão violenta de posseiros e povos tradicionais por pistoleiros, seguida da derrubada da mata nativa para legitimar a ocupação perante o mercado imobiliário rural.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A grilagem opera em fases: falsifica-se o documento (o papel velho amarelado por grilos na gaveta deu o nome ao crime), contratam-se milícias armadas para expulsar camponeses/indígenas e derruba-se a floresta para simular 'posse produtiva' perante compradores e órgãos públicos."
      },
      {
        id: "c",
        text: "as populações tradicionais possuem títulos definitivos emitidos em cartórios com fé pública inviolável.",
        isCorrect: false,
        distractorRationale: "A maioria dos povos tradicionais possui posse consuetudinária sem titulação definitiva, tornando-se alvos fáceis de esbulho."
      },
      {
        id: "d",
        text: "a fiscalização federal permanente nas fronteiras impede o funcionamento de redes criminosas organizadas.",
        isCorrect: false,
        distractorRationale: "A desestruturação e falta de contingente em órgãos fiscalizadores facilitam a impunidade dos mandantes dos crimes."
      },
      {
        id: "e",
        text: "o mercado de terras amazônico opera sem qualquer vínculo com investimentos do setor financeiro tradicional.",
        isCorrect: false,
        distractorRationale: "A terra valorizada e desmatada é negociada e transacionada no circuito financeiro especulativo do agronegócio."
      }
    ],
    detailedExplanation: {
      summary: "A grilagem de terras é o motor da violência no campo e do desmatamento ilegal na fronteira amazônica.",
      stepByStep: [
        "1. Definir 'grilagem': fraude jurídica e ocupação criminosa de patrimônio público (terras devolutas pertencentes à União).",
        "2. Identificar a mecânica: contratação de pistoleiros, violência contra posseiros, queima da floresta e sobreposição criminosa de cadastros rurais.",
        "3. Conectar aos relatórios da CPT: concentração crônica de conflitos e letalidade no Arco do Desmatamento da Amazônia Legal."
      ],
      coreConcept: "Grilagem, terras devolutas, violência no campo e a CPT no ENEM.",
      trapWarning: "Terras devolutas são terras públicas sem destinação dada pelo poder público; elas NÃO são terras de ninguém para serem tomadas por grileiros."
    },
    commonTraps: ["Achar que a violência no campo ocorre por brigas interpessoais desvinculadas de esquemas empresariais de apropriação imobiliária."],
    tags: ["Grilagem", "CPT", "Violência no Campo", "Amazônia Legal"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-010",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Estrutura Agrária e Conceitos Fundamentais",
    subtopic: "Módulo Rural e Módulo Fiscal (Estatuto da Terra de 1964)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Instituído pelo Estatuto da Terra (Lei nº 4.504 de 1964), o conceito de Módulo Fiscal é fixado pelo INCRA para cada município brasileiro em hectares, variando de 5 hectares (em municípios desenvolvidos de agricultura intensiva do Sul/Sudeste) a até 110 hectares (em municípios da Amazônia Ocidental e do semiárido nordestino). O módulo fiscal representa a área mínima necessária para que uma família garanta seu sustento econômico e dignidade social em determinada região geográfica.",
      source: "INCRA. Instrução Especial nº 20: Tabela de Módulos Fiscais por Município. Brasília: INCRA, 1980."
    },
    prompt: "A ampla variação do tamanho do Módulo Fiscal entre diferentes municípios brasileiros decorre",
    options: [
      {
        id: "a",
        text: "do volume de impostos municipais arrecadados pelas prefeituras no ano anterior.",
        isCorrect: false,
        distractorRationale: "A definição do módulo não depende de arrecadação de IPTU/ISS municipal, mas de parâmetros agronômicos e ecológicos regionais."
      },
      {
        id: "b",
        text: "das disparidades regionais relativas à fertilidade do solo, tipo de relevo, regime hídrico, distância dos mercados consumidores e tecnologia agrícola predominante.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em terras férteis, irrigadas e próximas aos centros consumidores (como em São Paulo), poucos hectares (5 ha) bastam para sustentar uma família com hortaliças e frutas; na Amazônia ou sertão árido, com solos pobres ou pasto extensivo, necessita-se de 100 hectares para a mesma sobrevivência familiar."
      },
      {
        id: "c",
        text: "da densidade demográfica exclusiva de migrantes estrangeiros residentes na área urbana.",
        isCorrect: false,
        distractorRationale: "O módulo fiscal é uma medida estritamente agrária e rural."
      },
      {
        id: "d",
        text: "da proibição federal de instalação de redes elétricas e de saneamento básico no interior.",
        isCorrect: false,
        distractorRationale: "Critério sem qualquer cabimento técnico."
      },
      {
        id: "e",
        text: "da cotação em moeda estrangeira do barril de petróleo cru nos portos marítimos.",
        isCorrect: false,
        distractorRationale: "O módulo é parâmetro territorial fixado com base no tipo de exploração e condições biofísicas."
      }
    ],
    detailedExplanation: {
      summary: "O Módulo Fiscal adapta a dimensão mínima da propriedade produtiva às condições ecológicas e econômicas de cada município brasileiro.",
      stepByStep: [
        "1. Compreender o Módulo Fiscal: unidade de medida em hectares fixada pelo INCRA para cada município.",
        "2. Identificar os fatores determinantes: qualidade da terra, clima, tipo de cultura e facilidade de escoamento da produção.",
        "3. Concluir que a variação (5 a 110 ha) expressa a imensa diversidade geográfica e agronômica do território nacional."
      ],
      coreConcept: "Módulo fiscal, INCRA, Estatuto da Terra de 1964 e geografia agrária.",
      trapWarning: "Pequena propriedade é a de até 4 módulos fiscais; média propriedade tem de 4 a 15 módulos; grande propriedade tem mais de 15 módulos fiscais."
    },
    commonTraps: ["Achar que um hectare rende o mesmo valor econômico em qualquer bioma ou estado brasileiro."],
    tags: ["Módulo Fiscal", "INCRA", "Estatuto da Terra", "Tipologia Agrária"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-011",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Complexos Agroindustriais e a Soja no Brasil",
    subtopic: "A 'Soitização' e a Dependência da Cadeia Global de Suprimentos",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A cadeia global de valor da soja transformou o Centro-Oeste brasileiro em um dos polos mais dinâmicos do agronegócio internacional. No entanto, o complexo agroindustrial opera sob forte controle de poucas multinacionais de insumos, sementes e logística (as chamadas tradings globais do grupo ABCD: ADM, Bunge, Cargill e Louis Dreyfus). Enquanto o produtor brasileiro arca com os riscos climáticos e o endividamento bancário dos insumos cotados em dólar, as tradings controlam a armazenagem, o escoamento portuário e a precificação nos mercados futuros da Bolsa de Chicago.",
      source: "DELGADO, Guilherme. Do capital financeiro ao agronegócio: dinâmicas contemporâneas do campo. Brasília: Ipea, 2012."
    },
    prompt: "A dinâmica descrita evidencia que o sucesso produtivo do complexo agroindustrial da soja no Brasil convive com",
    options: [
      {
        id: "a",
        text: "a total soberania nacional na fixação de preços e na autonomia sobre patentes biotecnológicas.",
        isCorrect: false,
        distractorRationale: "O texto aponta a forte dependência de bolsas internacionais (Chicago) e corporações transnacionais de insumos."
      },
      {
        id: "b",
        text: "uma subordinação estrutural às grandes tradings internacionais e conglomerados químicos que controlam o crédito, as sementes e a comercialização global.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O produtor rural fica na ponta vulnerável (toma crédito, compra insumos dolarizados e assume o risco climático), enquanto as tradings multinacionais capturam a maior fatia da mais-valia nas operações financeiras e logísticas globais."
      },
      {
        id: "c",
        text: "a extinção completa de empréstimos em moeda estrangeira para empresas exportadoras.",
        isCorrect: false,
        distractorRationale: "O financiamento do agronegócio apoia-se intensamente em títulos de crédito dolarizados (CRAs, CPRs)."
      },
      {
        id: "d",
        text: "a conversão das fazendas de grãos em unidades fabris têxteis de autogestão operária.",
        isCorrect: false,
        distractorRationale: "O modelo permanece baseado em fazendas empresariais privadas altamente mecanizadas e financeirizadas."
      },
      {
        id: "e",
        text: "a autossuficiência do país na síntese química de fertilizantes nitrogenados e potássicos.",
        isCorrect: false,
        distractorRationale: "O Brasil importa mais de 80% dos fertilizantes que consome (especialmente da Rússia, Canadá e China), sendo altamente vulnerável no cenário externo."
      }
    ],
    detailedExplanation: {
      summary: "O agronegócio moderno é oligopolizado por tradings globais que controlam a logística, patentes e comercialização internacional de grãos.",
      stepByStep: [
        "1. Identificar o papel das tradings (Cargill, Bunge, ADM, Dreyfus): controle da armazenagem em silos, ferrovias, portos e mercados futuros.",
        "2. Identificar a vulnerabilidade dos agricultores: compra de sementes transgênicas patenteadas e fertilizantes importados cotados em dólar.",
        "3. Concluir que a 'soitização' atende à acumulação de capital transnacional e expõe o país a oscilações cambiais e geopolíticas externas."
      ],
      coreConcept: "Complexos agroindustriais, tradings multinacionais e dependência de insumos externos no agronegócio.",
      trapWarning: "Embora o agronegócio gere superávit na balança comercial, o Brasil é cronicamente dependente da importação de fertilizantes (NPK)."
    },
    commonTraps: ["Supor que o agricultor individual possui controle sobre os preços internacionais das commodities agrícolas."],
    tags: ["Complexo da Soja", "Tradings", "Agronegócio", "Balança Comercial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-012",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Trabalho Degradante e Escravidão Contemporânea",
    subtopic: "Trabalho Análogo à Escravidão no Meio Rural",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Art. 149 do Código Penal Brasileiro: Reduzir alguém a condição análoga à de escravo, quer submetendo-o a trabalhos forçados ou a jornada exaustiva, quer sujeitando-o a condições degradantes de trabalho, quer restringindo, por qualquer meio, sua locomoção em razão de dívida contraída com o empregador ou preposto. No meio rural, fiscalizações do Ministério do Trabalho resgatam centenas de trabalhadores submetidos ao 'barracão' (servidão por dívida inflacionada com mantimentos e ferramentas) em atividades como desmatamento para pasto, colheita de café e corte de cana.",
      source: "BRASIL. Código Penal. Decreto-Lei nº 2.848/1940, redação dada pela Lei nº 10.803/2003."
    },
    prompt: "A caracterização jurídica contemporânea do trabalho escravo no campo brasileiro distingue-se da escravidão colonial porque",
    options: [
      {
        id: "a",
        text: "exige a existência de correntes de ferro, troncos de açoite e certidões cartoriais de propriedade senhorial sobre a vida humana.",
        isCorrect: false,
        distractorRationale: "Essa era a escravidão formal legal pré-1888. O trabalho escravo contemporâneo prescinde de propriedade jurídica de pessoas."
      },
      {
        id: "b",
        text: "configura-se pela violação da dignidade humana por meio de condições degradantes, servidão por dívidas e jornadas exaustivas, mesmo sem posse formal sobre o indivíduo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Nos termos do art. 149 do Código Penal, não é necessária a compra e venda formal de um ser humano (o que é ilegal desde 1888); a escravidão contemporânea manifesta-se quando o trabalhador é submetido a alojamentos desumanos, água contaminada, coerção por dívidas forjadas ('barracão') e retenção de documentos."
      },
      {
        id: "c",
        text: "limita-se a disputas sindicais sobre atraso de poucas horas no pagamento de horas extras.",
        isCorrect: false,
        distractorRationale: "Trata-se de grave crime contra a dignidade humana e direitos fundamentais, e não de mera infração trabalhista leve."
      },
      {
        id: "d",
        text: "ocorre exclusivamente com trabalhadores imigrantes ilegais em centros de moda têxtil.",
        isCorrect: false,
        distractorRationale: "O trabalho análogo à escravidão é historicamente predominante no meio rural (pecuária, carvão vegetal, cana, café)."
      },
      {
        id: "e",
        text: "foi legalizada em propriedades rurais que exportem mais de 80% de suas safras anuais.",
        isCorrect: false,
        distractorRationale: "É crime inafiançável contra a pessoa humana punido com reclusão de dois a oito anos."
      }
    ],
    detailedExplanation: {
      summary: "O trabalho análogo ao de escravo contemporâneo define-se por condições degradantes, servidão por dívida e cerceamento da liberdade.",
      stepByStep: [
        "1. Compreender o Artigo 149 do Código Penal: quatro hipóteses (trabalhos forçados, jornada exaustiva, condições degradantes, servidão por dívida).",
        "2. Identificar a mecânica no campo: aliciamento por 'gatos' (intermediários), retenção da carteira de trabalho e endividamento forçado no armazém da fazenda.",
        "3. Concluir que a fiscalização pública com auditores fiscais é ferramenta essencial para erradicar essa chaga do espaço rural brasileiro."
      ],
      coreConcept: "Trabalho análogo à escravidão, Artigo 149 do Código Penal e direitos humanos no campo.",
      trapWarning: "Cuidado com o distrator que exige violência física visível ou correntes para caracterizar trabalho escravo contemporâneo."
    },
    commonTraps: ["Confundir escravidão antiga (propriedade legal do corpo) com escravidão moderna (violação da dignidade, servidão e degradação)."],
    tags: ["Trabalho Escravo Contemporâneo", "Artigo 149", "Direitos Trabalhistas", "Fiscalização"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-013",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Movimentos Sociais e Reforma Agrária",
    subtopic: "O MST e a Função Social da Propriedade",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Fundado em 1984 durante o processo de redemocratização do Brasil, o Movimento dos Trabalhadores Rurais Sem Terra (MST) fundamenta sua atuação na exigência do cumprimento da função social da terra, prevista no artigo 186 da Constituição de 1988 (aproveitamento racional e adequado, utilização adequada dos recursos naturais, observância das normas trabalhistas e exploração que favoreça o bem-estar de proprietários e trabalhadores). O movimento organiza ocupações de latifúndios improdutivos para pressionar o Estado a desapropriá-los para fins de assentamento da reforma agrária.",
      source: "FERNANDES, Bernardo Mançano. A formação do MST no Brasil. Petrópolis: Vozes, 2000."
    },
    prompt: "A legitimidade constitucional defendida pelo movimento social apoia-se no entendimento de que",
    options: [
      {
        id: "a",
        text: "a propriedade privada da terra não é um direito absoluto e intocável, devendo submeter-se aos imperativos do interesse coletivo, da sustentabilidade ecológica e da produtividade social.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A Constituição de 1988 subordina a proteção da propriedade ao cumprimento de sua função social (art. 5º, XXIII e art. 186); quando a propriedade é improdutiva ou comete crimes ambientais/trabalhistas, ela é passível de desapropriação pelo Estado para reforma agrária."
      },
      {
        id: "b",
        text: "qualquer imóvel rural produtivo deve ser confiscado pelo poder público sem indenização prévia em títulos da dívida agrária.",
        isCorrect: false,
        distractorRationale: "A Constituição protege expressamente a pequena e média propriedade rural e a propriedade produtiva contra a desapropriação (art. 185)."
      },
      {
        id: "c",
        text: "o meio rural deve abolir a produção agrícola para incentivar a mineração de lítio a céu aberto.",
        isCorrect: false,
        distractorRationale: "O MST reivindica a posse da terra para produzir alimentos em assentamentos agroecológicos e cooperativas."
      },
      {
        id: "d",
        text: "a modernização técnica das máquinas dispensa o assentamento de famílias sem-terra.",
        isCorrect: false,
        distractorRationale: "A concentração da terra sem reforma agrária perpetua a miséria e a desigualdade social no campo."
      },
      {
        id: "e",
        text: "os assentamentos rurais devem vedar a criação de escolas de educação infantil e de cooperativas.",
        isCorrect: false,
        distractorRationale: "O MST incentiva ativamente a criação de cooperativas de produção (CONCRAB) e escolas do campo em seus assentamentos."
      }
    ],
    detailedExplanation: {
      summary: "O artigo 186 da CF/88 estabelece os quatro critérios para a função social da propriedade rural no Brasil.",
      stepByStep: [
        "1. Analisar os quatro pilares da função social: produtividade econômica, respeito à legislação ambiental, respeito aos direitos trabalhistas e bem-estar mútuo.",
        "2. Identificar a tese do MST: latifúndios que não cumprem esses quatro requisitos descumprem a Constituição e devem ser desapropriados para assentamento.",
        "3. Concluir que a reforma agrária democratiza o espaço rural e fomenta cooperativas agroecológicas comunitárias."
      ],
      coreConcept: "Função social da propriedade, Artigo 186 da CF/88, MST e reforma agrária.",
      trapWarning: "A pequena e média propriedade e a propriedade comprovadamente produtiva são constitucionalmente imunes à desapropriação para reforma agrária."
    },
    commonTraps: ["Achar que a Constituição garante direito ilimitado e absoluto de manter terras férteis ociosas para especulação imobiliária."],
    tags: ["MST", "Reforma Agrária", "Função Social", "Constituição de 1988"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-014",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Pecuária e Impactos Ambientais",
    subtopic: "A Pecuária Bovina Extensiva e a 'Padrão Espeto' de Desmatamento",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na Amazônia brasileira, a pecuária bovina extensiva ocupa cerca de 75% a 80% de todas as áreas desmatadas consolidadas. O modelo tradicional de baixíssima produtividade (média de menos de 1 cabeça de gado por hectare) funciona historicamente como ponta de lança da apropriação fundiária: derruba-se a floresta, vende-se a madeira nobre, queima-se o restante da biomassa e planta-se capim braquiária, consolidando a posse da terra antes da sua valorização comercial ou transferência futura para a soja.",
      source: "IMAZON. A pecuária e o desmatamento na Amazônia: dinâmica de ocupação territorial. Belém: Instituto do Homem e Meio Ambiente da Amazônia, 2021."
    },
    prompt: "O papel desempenhado pela pecuária bovina extensiva na fronteira de expansão amazônica evidencia que a atividade atua primordialmente como",
    options: [
      {
        id: "a",
        text: "instrumento financeiro e físico de consolidação da ocupação do solo e especulação imobiliária sobre terras públicas desmatadas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O boi na Amazônia frequentemente não é criado por alta eficiência zootécnica, mas como forma barata de 'segurar' e marcar a posse da terra desmatada (limpeza do terreno), viabilizando a grilagem e a valorização especulativa do solo."
      },
      {
        id: "b",
        text: "método biológico voltado à regeneração espontânea das copas florestais primárias.",
        isCorrect: false,
        distractorRationale: "O pisoteio do gado e o plantio de gramíneas exóticas (braquiária) compactam o solo e impedem a regeneração florestal."
      },
      {
        id: "c",
        text: "sistema agroecológico de alta densidade que preserva 100% da fauna nativa de topo.",
        isCorrect: false,
        distractorRationale: "A pecuária extensiva fragmenta habitats e expulsa predadores nativos como onças e jaguatiricas."
      },
      {
        id: "d",
        text: "projeto de abastecimento emergencial de leite pasteurizado exclusivo para ribeirinhos.",
        isCorrect: false,
        distractorRationale: "A pecuária de fronteira é de corte (bovina para abate de carne), e não de laticínios para ribeirinhos."
      },
      {
        id: "e",
        text: "estratégia estatal destinada a ampliar as reservas extrativistas marinhas.",
        isCorrect: false,
        distractorRationale: "Tema sem correlação com a dinâmica continental amazônica."
      }
    ],
    detailedExplanation: {
      summary: "A pecuária extensiva na Amazônia é a maior indutora de desmatamento porque serve como instrumento de apropriação e especulação da terra.",
      stepByStep: [
        "1. Analisar a taxa de lotação: menos de 1 animal por hectare (baixíssima eficiência por área).",
        "2. Identificar a função econômica oculta: a posse do gado consolida a ocupação de terras públicas griladas a baixo custo.",
        "3. Concluir que a transição para pecuária intensificada sustentável e o fim da grilagem são essenciais para zerar o desmatamento."
      ],
      coreConcept: "Pecuária bovina extensiva, fronteira agrícola e especulação fundiária na Amazônia.",
      trapWarning: "Cerca de 80% do desmatamento acumulado na Amazônia transformou-se em pasto para gado, e não diretamente em lavoura de soja."
    },
    commonTraps: ["Achar que a soja é a causa direta imediata de todo desmatamento primário, ignorando que o pasto com gado é quase sempre a primeira etapa."],
    tags: ["Pecuária Extensiva", "Amazônia", "Desmatamento", "Especulação Fundiária"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-015",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Crise Hídrica e Agropecuária",
    subtopic: "Irrigação por Pivô Central e Conflitos pelo Uso da Água",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "De acordo com o Relatório de Conjuntura dos Recursos Hídricos da Agência Nacional de Águas e Saneamento Básico (ANA), o setor agrícola irrigado responde por cerca de 70% de toda a água consumida (não devolvida aos mananciais) no Brasil. Em bacias hidrográficas do semiárido e do Cerrado ocidental, a instalação massiva de sistemas de pivô central tem gerado conflitos severos entre grandes produtores agropecuários e comunidades ribeirinhas e vazanteiras, cujos rios e poços secaram devido ao rebaixamento acelerado do lençol freático durante os períodos de estiagem.",
      source: "AGÊNCIA NACIONAL DE ÁGUAS E SANEAMENTO BÁSICO (ANA). Relatório de Conjuntura dos Recursos Hídricos no Brasil 2022. Brasília, 2023."
    },
    prompt: "O cenário de disputas hídricas evidenciado no relatório demonstra que o uso da água no campo brasileiro enfrenta desafios decorrentes",
    options: [
      {
        id: "a",
        text: "da primazia constitucional conferida à irrigação de commodities em detrimento do abastecimento humano e da dessedentação de animais.",
        isCorrect: false,
        distractorRationale: "A Lei das Águas (Lei 9.433/97) estabelece expressamente a prioridade absoluta para o consumo humano e dos animais em situações de escassez."
      },
      {
        id: "b",
        text: "do consumo desproporcional da irrigação intensiva não regulada adequadamente, gerando assimetrias no acesso ao recurso e privando comunidades tradicionais de suas necessidades vitais básicas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A irrigação por pivô central extrai volumes gigantescos de água superficial e subterrânea (70% do consumo nacional), secando rios e poços de comunidades vulneráveis que dependem da vazante para beber e plantar."
      },
      {
        id: "c",
        text: "da proibição definitiva da outorga de direitos de uso da água para qualquer atividade econômica.",
        isCorrect: false,
        distractorRationale: "A outorga é o instrumento legal padrão de gestão da ANA e dos comitês de bacia para autorizar o uso hídrico."
      },
      {
        id: "d",
        text: "da inexistência de ferramentas de bombeamento mecânico de água no território brasileiro.",
        isCorrect: false,
        distractorRationale: "Pivôs centrais utilizam potentes bombas elétricas e a diesel para irrigar centenas de hectares simultaneamente."
      },
      {
        id: "e",
        text: "do transbordamento contínuo de barragens que inundou todas as cidades do interior de Minas Gerais.",
        isCorrect: false,
        distractorRationale: "O problema central destacado é a escassez hídrica provocada pela sobre-extração, e não inundações generalizadas."
      }
    ],
    detailedExplanation: {
      summary: "A irrigação é a maior consumidora de água doce no Brasil, gerando disputas e conflitos regulados pela Lei das Águas.",
      stepByStep: [
        "1. Conhecer os dados da ANA: Irrigação = ~70% do consumo consuntivo de água no Brasil (contra ~20% urbano e ~10% industrial).",
        "2. Identificar a Lei Federal nº 9.433/1997 (Lei das Águas): em situação de escassez, a prioridade absoluta é o consumo humano e dessedentação de animais.",
        "3. Concluir que a proliferação desordenada de pivôs centrais no Cerrado/Semiárido compromete a segurança hídrica das populações ribeirinhas."
      ],
      coreConcept: "Gestão de recursos hídricos, Lei das Águas (Lei 9.433/97), pivô central e conflitos pelo uso da água.",
      trapWarning: "Consumo de água (que não volta para o rio imediatamente devido à evapotranspiração da planta) não é o mesmo que uso da água para geração hidrelétrica (que passa pelas turbinas e continua no leito do rio)."
    },
    commonTraps: ["Achar que a indústria ou as residências urbanas são as maiores consumidoras de água doce no país."],
    tags: ["Recursos Hídricos", "ANA", "Pivô Central", "Lei das Águas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-016",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Transgênicos e Biotecnologia Agrícola",
    subtopic: "Organismos Geneticamente Modificados (OGMs) e Soberania Alimentar",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A introdução comercial de sementes transgênicas no Brasil, autorizada pela Lei de Biossegurança (Lei nº 11.105 de 2005), prometeu reduzir o uso de agrotóxicos e ampliar os rendimentos por hectare. Vinte anos depois, as variedades tolerantes a herbicidas (como a soja RR tolerante ao glifosato e glufosinato de amônio) cobrem mais de 90% das lavouras de grãos. No entanto, o surgimento de plantas daninhas resistentes ao herbicida multiplicou o volume de veneno aplicado, enquanto a exigência de royalties a cada safra aprisionou os produtores a um punhado de conglomerados químicos internacionais.",
      source: "NODARI, Rubens. Biossegurança e soberania de sementes: duas décadas de cultivos transgênicos no Brasil. Florianópolis: Editora da UFSC, 2021."
    },
    prompt: "A difusão hegemônica das sementes transgênicas na agricultura brasileira resultou em",
    options: [
      {
        id: "a",
        text: "descentralização democrática da produção biotecnológica em favor de pequenas sementarias cooperativas municipais.",
        isCorrect: false,
        distractorRationale: "O mercado foi fortemente concentrado em gigantes químicas transnacionais detentoras de patentes biológicas."
      },
      {
        id: "b",
        text: "ampliação da dependência tecnológica dos agricultores em relação às corporações detentoras de patentes e intensificação do uso de herbicidas associados.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A semente transgênica é vendida sob patente tecnológica que obriga o pagamento de royalties; como foi desenhada para tolerar doses massivas do herbicida fabricado pela mesma empresa, a proliferação de ervas resistentes gerou aumento contínuo do volume de venenos aplicados nas lavouras."
      },
      {
        id: "c",
        text: "erradicação definitiva de qualquer custo financeiro associado à aquisição de sementes a cada ciclo produtivo.",
        isCorrect: false,
        distractorRationale: "O agricultor perdeu o direito ancestral de guardar sementes da safra anterior sem pagar royalties contratuais à detentora da patente."
      },
      {
        id: "d",
        text: "eliminação das exportações de grãos devido à proibição internacional total do consumo de produtos transgênicos.",
        isCorrect: false,
        distractorRationale: "O Brasil é o maior exportador mundial de soja transgênica para nutrição animal na China e União Europeia."
      },
      {
        id: "e",
        text: "restauração espontânea da agrobiodiversidade de sementes crioulas ancestrais no Centro-Oeste.",
        isCorrect: false,
        distractorRationale: "A contaminação genética por pólen transgênico ameaça a pureza de variedades tradicionais de sementes crioulas de milho."
      }
    ],
    detailedExplanation: {
      summary: "A biotecnologia transgênica fortaleceu o monopólio corporativo de sementes e retroalimentou o mercado de herbicidas químicos.",
      stepByStep: [
        "1. Analisar a Lei de Biossegurança (Lei 11.105/2005) e a CTNBio: liberação comercial em larga escala de soja e milho transgênicos.",
        "2. Identificar a função da semente RR (Roundup Ready): resistir à aplicação do glifosato para matar as ervas concorrentes.",
        "3. Consequências concretas: seleção de superervas resistentes (como buva e capim-amargoso), aumento na dosagem de agrotóxicos e pagamento compulsório de royalties."
      ],
      coreConcept: "Transgênicos (OGMs), patentes biológicas, glifosato e dependência tecnológica no campo.",
      trapWarning: "Sementes crioulas são variedades tradicionais mantidas e adaptadas ao longo de gerações por povos indígenas e camponeses, sem transgenia."
    },
    commonTraps: ["Acreditar que os transgênicos diminuíram o uso de agrotóxicos no Brasil a médio e longo prazo."],
    tags: ["Transgênicos", "Biotecnologia", "Patentes", "Glifosato"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-017",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Geografia e Dinâmica da Agropecuária no Sul do Brasil",
    subtopic: "A Integração Agroindustrial de Aves e Suínos e a Subordinação do Camponês",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No oeste dos estados de Santa Catarina, Paraná e Rio Grande do Sul, consolidou-se o modelo de integração agroindustrial nas cadeias de avicultura e suinocultura. O frigorífico transnacional fornece os pintinhos de um dia, a ração balanceada, os medicamentos e a assistência técnica; o agricultor familiar 'integrado' entra com a terra, a construção do galpão climatizado, a energia elétrica, a água e a jornada exaustiva de trabalho dele e de sua família. Caso haja mortalidade nas aves ou oscilação de mercado, o prejuízo financeiro recai prioritariamente sobre o integrado.",
      source: "PAULILO, Maria Ignez. Trabalho familiar e integração agroindustrial. Florianópolis: Editora da UFSC, 2011."
    },
    prompt: "O sistema de integração agroindustrial nas regiões produtoras de aves e suínos caracteriza-se por",
    options: [
      {
        id: "a",
        text: "assegurar a autogestão plena dos pequenos criadores sobre a precificação de seus lotes de animais.",
        isCorrect: false,
        distractorRationale: "O frigorífico determina unilateralmente os critérios de pesagem, qualidade e a remuneração final paga."
      },
      {
        id: "b",
        text: "subordinar formalmente o produtor familiar ao capital da agroindústria, transferindo para o trabalhador os custos de infraestrutura e os riscos biológicos e ambientais do processo produtivo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A relação de integração contratual transforma o pequeno agricultor num 'trabalhador a domicílio' da agroindústria: ele assume vultosas dívidas para construir galpões automatizados, assume o passivo ambiental dos dejetos e arca com a mortalidade dos lotes."
      },
      {
        id: "c",
        text: "eliminar qualquer necessidade de energia elétrica ou consumo de água nas granjas rurais.",
        isCorrect: false,
        distractorRationale: "Granjas modernas exigem refrigeração e ventilação elétrica contínua e imenso volume hídrico."
      },
      {
        id: "d",
        text: "proibir o uso de rações comerciais enriquecidas com farelo de soja.",
        isCorrect: false,
        distractorRationale: "A base da alimentação avícola e suinícola é exatamente a ração concentrada de milho e soja formulada pelo frigorífico."
      },
      {
        id: "e",
        text: "distribuir cotas societárias do frigorífico gratuitamente para todos os criadores da bacia.",
        isCorrect: false,
        distractorRationale: "O produtor não é sócio, mas mero fornecedor integrado submetido a contrato de adesão."
      }
    ],
    detailedExplanation: {
      summary: "A integração agroindustrial transfere riscos e investimentos pesados para a família rural enquanto o frigorífico captura o lucro da carne beneficiada.",
      stepByStep: [
        "1. Analisar a divisão de responsabilidades: Frigorífico entra com matrizes, ração e remédios ⟺ Agricultor entra com terra, galpão financiado, água, luz e mão de obra.",
        "2. Identificar a assimetria contratual: o integrado contrai empréstimos de longo prazo no banco e depende exclusivamente de um único comprador.",
        "3. Concluir que o modelo representa a penetração e o controle direto do capital agroindustrial sobre a propriedade familiar camponesa."
      ],
      coreConcept: "Integração agroindustrial, avicultura e suinocultura no Sul do Brasil, assimetria contratual.",
      trapWarning: "Embora o agricultor seja dono da escritura da terra, ele perde a autonomia produtiva, virando um elo dependente da esteira agroindustrial."
    },
    commonTraps: ["Achar que o agricultor integrado é um empresário independente com liberdade de negociar com vários compradores no mercado aberto."],
    tags: ["Integração Agroindustrial", "Sul do Brasil", "Avicultura", "Suinocultura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-018",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Geografia Agrária e Territórios Tradicionais",
    subtopic: "Comunidades Geraizeiras e Conflitos com o Eucalipto no Cerrado",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No Norte de Minas Gerais e Oeste da Bahia, os geraizeiros (habitantes tradicionais dos 'gerais' do Cerrado) desenvolveram historicamente um modo de vida baseado na ocupação de dois ambientes: os vales úmidos (onde mantêm roças de subsistência e moradia) e os chapadões de uso comum (onde soltam o gado para pastar na vegetação nativa e coletam frutos como pequi, murici e mangaba). A partir dos anos 1970, extensas plantações industriais de monocultura de eucalipto para carvão vegetal siderúrgico cercaram os chapadões, secando veredas e impedindo o acesso tradicional comunitário.",
      source: "DAYRELL, Carlos Alberto. Geraizeiros e a biodiversidade no Norte de Minas. Montes Claros: Centro de Agricultura Alternativa do Norte de Minas (CAA-NM), 2008."
    },
    prompt: "O conflito entre os povos geraizeiros e as empresas de silvicultura de eucalipto decorre da",
    options: [
      {
        id: "a",
        text: "destruição dos sistemas tradicionais de uso comum dos chapadões e do rebaixamento hídrico das veredas provocado pela monocultura exótica de eucalipto.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O eucalipto (árvore exótica de crescimento rápido e alto consumo hídrico) secou as nascentes e veredas protegidas por buritis, e os cercamentos privados impediram o pastoreio tradicional e o extrativismo secular de frutos do Cerrado que sustentavam os geraizeiros."
      },
      {
        id: "b",
        text: "recusa dos geraizeiros em comercializar o gado bovino nas feiras municipais locais.",
        isCorrect: false,
        distractorRationale: "Os geraizeiros comercializam seus excedentes agrícolas e animais regularmente."
      },
      {
        id: "c",
        text: "imposição legal que obriga todas as comunidades tradicionais a cultivar exclusivamente cana-de-açúcar.",
        isCorrect: false,
        distractorRationale: "Não existe qualquer legislação nesse sentido."
      },
      {
        id: "d",
        text: "proximidade geográfica com portos de transbordo de minério de ferro no litoral fluminense.",
        isCorrect: false,
        distractorRationale: "A região mencionada é o interior semiárido/Cerrado do Norte de Minas Gerais."
      },
      {
        id: "e",
        text: "substituição voluntária das matas ciliares por usinas eólicas offshore.",
        isCorrect: false,
        distractorRationale: "Usinas offshore ficam em alto-mar, nada a ver com o Cerrado mineiro."
      }
    ],
    detailedExplanation: {
      summary: "Os geraizeiros representam a resistência cultural e ecológica no Cerrado mineiro contra a monocultura florestal de eucalipto.",
      stepByStep: [
        "1. Identificar o grupo tradicional: Geraizeiros (habitantes do Cerrado do Norte de Minas e Bahia).",
        "2. Identificar a gestão do território: vales agrícolas + chapadões de uso coletivo comum.",
        "3. Identificar o vetor de degradação: o 'deserto verde' de eucalipto plantado para queimar carvão para a siderurgia, que esgota lençóis freáticos e privatiza terras devolutas."
      ],
      coreConcept: "Povos tradicionais do Cerrado, Geraizeiros, veredas e impactos da monocultura de eucalipto.",
      trapWarning: "Monocultura de eucalipto não é floresta; é plantação industrial ('deserto verde') de baixa agrobiodiversidade e alto consumo de água."
    },
    commonTraps: ["Achar que qualquer plantação de árvores melhora o meio ambiente, esquecendo que monoculturas exóticas de eucalipto podem dessecar mananciais."],
    tags: ["Geraizeiros", "Cerrado", "Eucalipto", "Veredas", "Conflitos Agrários"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-019",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Agroenergia e a Cana-de-Açúcar no Brasil",
    subtopic: "Etanol, Bagaço e a Expansão Canavieira no Centro-Sul",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O programa Proálcool, criado na década de 1970 em resposta ao choque internacional do petróleo, impulsionou a cana-de-açúcar como matriz de agroenergia. Nas últimas décadas, o setor sucroenergético modernizou-se com usinas flex que produzem açúcar, etanol hidratado e anidro, além de cogeração de energia elétrica a partir da queima da biomassa de bagaço e palha. No estado de São Paulo, a mecanização compulsória da colheita substituiu a queima prévia da palha, eliminando a figura tradicional do trabalhador migrante cortador de cana (bóia-fria).",
      source: "UNICA. Relatório de Sustentabilidade do Setor Sucroenergético. São Paulo: União da Indústria de Cana-de-Açúcar, 2022."
    },
    prompt: "A modernização técnica recente da lavoura canavieira no Centro-Sul brasileiro gerou como efeito simultâneo",
    options: [
      {
        id: "a",
        text: "o aumento do uso de trabalho escravo braçal nas usinas do interior paulista.",
        isCorrect: false,
        distractorRationale: "A colheita em São Paulo mecanizou-se em mais de 95%, reduzindo drasticamente a contratação braçal de bóias-frias."
      },
      {
        id: "b",
        text: "a redução da emissão de fuligem pela extinção das queimadas e a dispensa massiva de mão de obra temporária pouco qualificada com a mecanização das colheitadeiras.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A eliminação da queima da palha trouxe enorme benefício à saúde respiratória e à qualidade do ar, mas a mecanização das colheitadeiras cortou centenas de milhares de postos de trabalho de cortadores de cana migrantes, forçando sua reconversão ou expulsão."
      },
      {
        id: "c",
        text: "a substituição de todo o plantio de cana por pastagens de gado leiteiro.",
        isCorrect: false,
        distractorRationale: "A área plantada de cana expandiu-se fortemente sobre antigas pastagens no interior de SP, GO, MS e MG."
      },
      {
        id: "d",
        text: "o encerramento definitivo da cogeração de eletricidade nas usinas térmicas.",
        isCorrect: false,
        distractorRationale: "O setor sucroalcooleiro tornou-se importante fornecedor de bioeletricidade limpa para a rede do Sistema Interligado Nacional (SIN)."
      },
      {
        id: "e",
        text: "a obrigatoriedade de importação de 100% do etanol consumido pelos veículos flex nacionais.",
        isCorrect: false,
        distractorRationale: "O Brasil é autossuficiente e um dos maiores produtores e exportadores mundiais de etanol de cana."
      }
    ],
    detailedExplanation: {
      summary: "A modernização da cana-de-açúcar eliminou a poluição da queima da palha, mas causou desemprego estrutural de cortadores de cana migrantes.",
      stepByStep: [
        "1. Contexto histórico: Proálcool (1975), carros a álcool, motores flex-fuel (2003) e cogeração com bagaço.",
        "2. Impacto ambiental: Lei paulista proibiu queimadas graduais até a colheita 100% mecanizada crua.",
        "3. Impacto socioeconômico: diminuição brutal dos bóias-frias (migrantes nordestinos e mineiros que viajavam anualmente para a safra), exigindo menor contingente de operadores de máquinas qualificados."
      ],
      coreConcept: "Complexo sucroenergético, agroenergia, mecanização da colheita e transformação do trabalho rural.",
      trapWarning: "A queima da palha servia para desfolhar e afugentar cobras/escorpiões para o corte manual; a colheitadeira mecanizada dispensa a queima e colhe a cana crua."
    },
    commonTraps: ["Achar que o fim das queimadas ocorreu sem gerar crise de emprego para os trabalhadores rurais mais pobres."],
    tags: ["Cana-de-Açúcar", "Etanol", "Mecanização", "Bóias-Frias", "Bioeletricidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-020",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Gênero e Trabalho no Campo",
    subtopic: "A Marcha das Margaridas e a Visibilidade das Mulheres Rurais",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Realizada a cada quatro anos em Brasília desde o ano 2000 pela Confederação Nacional dos Trabalhadores na Agricultura (CONTAG), a Marcha das Margaridas homenageia Margarida Maria Alves, líder sindical paraibana assassinada em 1983 por latifundiários. O movimento mobiliza mais de cem mil trabalhadoras rurais, agricultoras familiares, quilombolas e indígenas, reivindicando a titulação da terra conjunta em nome da mulher, linhas de crédito específicas, combate à violência doméstica no campo e acesso universal à documentação civil.",
      source: "CONTAG. Plataforma Política da Marcha das Margaridas. Brasília, 2023."
    },
    prompt: "A Marcha das Margaridas constitui um marco para o movimento sindical e social brasileiro porque",
    options: [
      {
        id: "a",
        text: "conseguiu dar visibilidade ao protagonismo produtivo e político das mulheres camponesas, historicamente invisibilizadas pelo patriarcado rural.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O movimento rompeu com a visão machista de que o trabalho rural feminino é mero 'ajutório' secundário do marido, conquistando a titulação obrigatória conjunta da terra na reforma agrária e políticas de crédito e documentação para mulheres rurais."
      },
      {
        id: "b",
        text: "defende a extinção definitiva dos sindicatos de trabalhadores rurais em favor de cooperativas de acionistas.",
        isCorrect: false,
        distractorRationale: "A marcha é coordenada pela própria confederação sindical dos trabalhadores do campo (CONTAG)."
      },
      {
        id: "c",
        text: "propõe que as propriedades rurais sejam transferidas exclusivamente para latifundiários homens solteiros.",
        isCorrect: false,
        distractorRationale: "A pauta central é o empoderamento feminino e a titulação obrigatória da terra em nome das mulheres."
      },
      {
        id: "d",
        text: "rejeita a concessão de certidões de nascimento e carteiras de identidade para a população do sertão.",
        isCorrect: false,
        distractorRationale: "O Programa Nacional de Documentação da Mulher Trabalhadora Rural foi conquista direta das Margaridas."
      },
      {
        id: "e",
        text: "limita sua atuação à compra de sementes transgênicas no mercado atacadista.",
        isCorrect: false,
        distractorRationale: "A marcha defende a agroecologia, sementes crioulas e soberania alimentar."
      }
    ],
    detailedExplanation: {
      summary: "A Marcha das Margaridas é a maior mobilização política de mulheres trabalhadoras rurais da América Latina.",
      stepByStep: [
        "1. Identificar a memória histórica: Margarida Alves, assassinada em 1983 ('Da luta não fujo, prefiro morrer na luta a morrer de fome').",
        "2. Identificar as pautas estruturantes: combate ao patriarcado rural, agroecologia, documentação civil e posse compartilhada da terra.",
        "3. Concluir que a ação feminina redefine as relações de gênero e cidadania no espaço agrário brasileiro."
      ],
      coreConcept: "Mulheres do campo, Marcha das Margaridas, Margarida Alves e sindicalismo rural.",
      trapWarning: "Antes da luta das Margaridas, os lotes da reforma agrária eram titulados unicamente no nome do 'chefe de família' homem."
    },
    commonTraps: ["Achar que o trabalho feminino na agricultura familiar é apenas doméstico, ignorando sua participação direta na produção agropecuária."],
    tags: ["Marcha das Margaridas", "Margarida Alves", "Mulheres Rurais", "Cidadania no Campo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-021",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Crédito Rural e Políticas Públicas",
    subtopic: "A Desigualdade na Alocação de Recursos do Plano Safra",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No anúncio anual do Plano Safra pelo governo federal, verifica-se uma disparidade estrutural nos montantes de financiamento creditício: enquanto o agronegócio de grande e médio porte empresarial (via Plano Safra geral) recebe cerca de 80% a 85% do total de recursos subsidiados (mais de R$ 300 bilhões), a agricultura familiar (através do PRONAF - Programa Nacional de Fortalecimento da Agricultura Familiar) recebe entre 15% e 20% do orçamento total, embora represente mais de 75% dos estabelecimentos rurais do país.",
      source: "MINISTÉRIO DA AGRICULTURA E PECUÁRIA (MAPA). Plano Safra: Relatório de Aplicação de Recursos. Brasília, 2023."
    },
    prompt: "Essa assimetria na distribuição de crédito público subsidiado reflete",
    options: [
      {
        id: "a",
        text: "a priorização estatal histórica do modelo exportador de commodities para geração de divisas cambiais em detrimento do apoio prioritário à agricultura de subsistência e abastecimento interno.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A política creditícia do Estado brasileiro privilegia o agronegócio patronal que traz dólares para a balança comercial e possui forte representação política (Bancada Ruralista), enquanto a agricultura familiar recebe recursos orçamentários proporcionalmente inferiores."
      },
      {
        id: "b",
        text: "a impossibilidade jurídica de concessão de empréstimos bancários a estabelecimentos familiares.",
        isCorrect: false,
        distractorRationale: "O PRONAF foi criado em 1995 exatamente para financiar a agricultura familiar com juros subsidiados."
      },
      {
        id: "c",
        text: "o fato de a agricultura familiar não possuir capacidade produtiva para cultivar grãos ou hortaliças.",
        isCorrect: false,
        distractorRationale: "A agricultura familiar produz 70% dos alimentos frescos da mesa brasileira."
      },
      {
        id: "d",
        text: "a extinção definitiva do grande agronegócio exportador por falta de rentabilidade financeira.",
        isCorrect: false,
        distractorRationale: "O agronegócio é altamente rentável e registra sucessivos recordes de safra e exportação."
      },
      {
        id: "e",
        text: "a exigência de que os pequenos produtores exportem toda a sua produção para a União Europeia.",
        isCorrect: false,
        distractorRationale: "A agricultura familiar é prioritariamente voltada para o mercado consumidor interno nacional."
      }
    ],
    detailedExplanation: {
      summary: "O Plano Safra concentra a maior parte dos subsídios no agronegócio exportador, perpetuando a disparidade do espaço agrário.",
      stepByStep: [
        "1. Analisar as cifras: agronegócio empresarial recebe a esmagadora maioria dos créditos e equalização de juros.",
        "2. Identificar as causas: peso político da Frente Parlamentar da Agropecuária (FPA) e necessidade do Estado de manter superávits comerciais.",
        "3. Concluir que a ampliação do PRONAF é necessária para baratear a comida e conter a inflação de alimentos da população brasileira."
      ],
      coreConcept: "Plano Safra, PRONAF, crédito rural subsidiado e desigualdade orçamentária no campo.",
      trapWarning: "Equalização de juros é quando o Tesouro Nacional paga a diferença entre a taxa de mercado (Selic) e a taxa menor cobrada do agricultor."
    },
    commonTraps: ["Achar que o agronegócio não recebe dinheiro público, quando na verdade depende de vultosos subsídios creditícios estatais."],
    tags: ["Plano Safra", "PRONAF", "Crédito Rural", "Políticas Públicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-022",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Biopirataria e Saberes Tradicionais",
    subtopic: "Patenteamento de Conhecimentos Etnobotânicos sem Repartição de Benefícios",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Convenção sobre Diversidade Biológica (CDB) e o Protocolo de Nagoia reconhecem que os conhecimentos tradicionais associados à biodiversidade (como o uso medicinal de plantas como o jaborandi, a andiroba e o cupuaçu) desenvolvidos por gerações de indígenas e comunidades locais têm valor inestimável. No entanto, laboratórios multinacionais frequentemente isolam moléculas ativas baseando-se em indicações xamânicas ou populares e registram patentes exclusivas no exterior, sem consentimento prévio informado e sem repartição justa dos lucros gerados com as comunidades de origem.",
      source: "SANTILLI, Juliana. Sociobiodiversidade e direitos socioambientais. São Paulo: Peirópolis, 2005."
    },
    prompt: "A prática descrita no texto, caracterizada como biopirataria e apropriação indevida do patrimônio imaterial, fundamenta-se",
    options: [
      {
        id: "a",
        text: "na usurpação ilegítima de saberes coletivos ancestrais convertidos em mercadorias privatizadas por meio do sistema de propriedade intelectual ocidental.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A biopirataria apropria-se do conhecimento tradicional desenvolvido ao longo de séculos pelos povos da floresta, patenteando-o em escritórios de propriedade industrial estrangeiros e excluindo as comunidades da repartição dos lucros e de sua própria autonomia terapêutica."
      },
      {
        id: "b",
        text: "no cumprimento estrito das diretrizes de sustentabilidade formuladas pelas lideranças dos pajés.",
        isCorrect: false,
        distractorRationale: "A prática viola frontalmente os direitos e decisões das lideranças tradicionais."
      },
      {
        id: "c",
        text: "na recusa do mercado farmacêutico internacional em utilizar princípios ativos de origem botânica.",
        isCorrect: false,
        distractorRationale: "Grande parte dos medicamentos modernos de ponta provém de compostos botânicos da floresta tropical."
      },
      {
        id: "d",
        text: "na doação obrigatória de 90% dos lucros corporativos aos fundos de demarcação fundiária.",
        isCorrect: false,
        distractorRationale: "A ausência de repartição de benefícios é exatamente a denúncia central do Protocolo de Nagoia."
      },
      {
        id: "e",
        text: "na substituição completa de antibióticos sintéticos por infusões caseiras nos grandes hospitais.",
        isCorrect: false,
        distractorRationale: "Interpretação anedótica sem respaldo na realidade científica hospitalar."
      }
    ],
    detailedExplanation: {
      summary: "A biopirataria transforma conhecimentos ancestrais etnobotânicos em patentes privadas de corporações transnacionais.",
      stepByStep: [
        "1. Identificar o Protocolo de Nagoia: tratado internacional que exige Consentimento Prévio Informado (CPI) e Repartição Justa de Benefícios.",
        "2. Identificar a assimetria: o pesquisador forâneo aprende com o saber indígena/ribeirinho, patenteia a fórmula no exterior e o remédio volta caríssimo para o país de origem.",
        "3. Concluir que a defesa da sociobiodiversidade exige blindar os conhecimentos imateriais dos povos da floresta contra a espoliação privatista."
      ],
      coreConcept: "Biopirataria, Protocolo de Nagoia, conhecimentos tradicionais e propriedade intelectual.",
      trapWarning: "O caso do Cupuaçu (Theobroma grandiflorum) patenteado por empresa japonesa nos anos 2000 foi o marco clássico de luta contra a biopirataria no Brasil."
    },
    commonTraps: ["Achar que a biopirataria é apenas contrabandear animais silvestres na mala, esquecendo o roubo de patentes genéticas e saberes botânicos."],
    tags: ["Biopirataria", "Protocolo de Nagoia", "Conhecimentos Tradicionais", "Propriedade Intelectual"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-023",
    area: "humanas",
    competence: 2,
    skill: 6,
    topic: "Desertificação e Degradação dos Solos no Brasil",
    subtopic: "O Núcleo de Gilbués (PI) e a Caatinga",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No município de Gilbués, localizado no sul do estado do Piauí, encontra-se um dos núcleos de desertificação mais graves do Brasil, abrangendo milhares de hectares de solos degradados por voçorocas monumentais. O fenômeno resulta da conjugação de fatores naturais (solos sedimentares frágeis altamente suscetíveis à erosão e clima semiárido com chuvas torrenciais concentradas) com práticas antrópicas predatórias, como desmatamento da vegetação nativa da Caatinga/Cerrado para pasto, sobrepastoreio contínuo e uso indiscriminado de queimadas.",
      source: "MINISTÉRIO DO MEIO AMBIENTE (MMA). Atlas das Áreas Suscetíveis à Desertificação no Brasil. Brasília: MMA, 2007."
    },
    prompt: "O avanço da desertificação em núcleos críticos como o de Gilbués decorre da interação entre",
    options: [
      {
        id: "a",
        text: "fatores climáticos de superabundância hídrica permanente e plantio de arrozais inundados.",
        isCorrect: false,
        distractorRationale: "O clima é semiárido marcado por longas estiagens, nada de abundância hídrica permanente."
      },
      {
        id: "b",
        text: "vulnerabilidades pedológicas e climáticas naturais combinadas a intervenções antrópicas insustentáveis que desnudam o solo e disparam processos erosivos severos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Desertificação segundo a ONU é a degradação da terra em zonas áridas, semiáridas e subúmidas secas decorrente de variações climáticas e atividades humanas inadequadas (desmatamento, sobrepastoreio, fogo)."
      },
      {
        id: "c",
        text: "a proliferação de geleiras fósseis que impedem a penetração da radiação solar.",
        isCorrect: false,
        distractorRationale: "Inexistência de geleiras no território piauiense."
      },
      {
        id: "d",
        text: "o abandono definitivo das criações de caprinos e bovinos em todo o sertão nordestino.",
        isCorrect: false,
        distractorRationale: "O sobrepastoreio (excesso de animais pisoteando e consumindo os brotos) é justamente um dos motores da degradação."
      },
      {
        id: "e",
        text: "a extração mecanizada de minério de carvão mineral de profundidade geológica.",
        isCorrect: false,
        distractorRationale: "Não há mineração profunda de carvão no Piauí (o carvão mineral brasileiro fica no Sul)."
      }
    ],
    detailedExplanation: {
      summary: "A desertificação no Brasil atinge o Semiárido e áreas de transição onde o manejo predatório desestabiliza solos naturalmente frágeis.",
      stepByStep: [
        "1. Definir Desertificação (Convenção da ONU - UNCCD): degradação de terras em áreas secas decorrente de ação climática e antrópica.",
        "2. Localizar os 4 grandes núcleos no Brasil: Gilbués (PI), Irauçuba (CE), Seridó (RN/PB) e Cabrobó (PE).",
        "3. Concluir que desmatar a Caatinga e queimar a terra retira a proteção superficial, permitindo que chuvas torrenciais arranquem a camada fértil e abram voçorocas."
      ],
      coreConcept: "Desertificação, núcleos de degradação, Gilbués e fragilidade dos solos no semiárido.",
      trapWarning: "Desertificação não é avanço de dunas do deserto do Saara: é a perda da capacidade biológica e produtiva do solo pelo manejo inadequado."
    },
    commonTraps: ["Confundir desertificação (fenômeno de áreas semiáridas secas) com arenização (fenômeno de solos arenosos úmidos do Rio Grande do Sul)."],
    tags: ["Desertificação", "Gilbués", "Caatinga", "Degradação dos Solos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-024",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Cadeias Agropecuárias e Cooperativismo",
    subtopic: "Cooperativismo Agropecuário e Inclusão de Pequenos e Médios Produtores",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O cooperativismo agropecuário no Brasil congrega mais de um milhão de cooperados em milhares de sociedades. Em regiões como o Paraná, cooperativas como Coamo e Lar tornaram-se gigantes econômicos com fábricas de processamento de óleo, moinhos e usinas de ração. O modelo cooperativo tradicional rege-se pelos princípios de adesão voluntária, gestão democrática ('um homem, um voto' independentemente do capital investido), retorno das sobras líquidas proporcional às operações e intercooperação.",
      source: "ORGANIZAÇÃO DAS COOPERATIVAS BRASILEIRAS (OCB). Anuário do Cooperativismo Brasileiro. Brasília: OCB, 2022."
    },
    prompt: "O princípio da gestão democrática que distingue a sociedade cooperativa da sociedade anônima (S/A) tradicional estabelece que",
    options: [
      {
        id: "a",
        text: "o poder decisório nas assembleias é proporcional à quantidade de ações financeiras compradas na bolsa de valores.",
        isCorrect: false,
        distractorRationale: "Isso define a Sociedade Anônima (S/A) capitalista padrão, e não a cooperativa."
      },
      {
        id: "b",
        text: "cada membro cooperado possui direito a um voto nas decisões assembleares soberanas, prevalecendo a pessoa humana associada sobre o montante de cotas de capital.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. No cooperativismo autêntico vale o princípio 'um associado, um voto', o que impede que os grandes produtores comprem votos e passem por cima dos pequenos associados nas decisões da cooperativa."
      },
      {
        id: "c",
        text: "as assembleias são conduzidas e votadas unicamente por auditores externos contratados pelo governo.",
        isCorrect: false,
        distractorRationale: "As decisões são tomadas pelos próprios membros cooperados reunidos em Assembleia Geral."
      },
      {
        id: "d",
        text: "os lucros gerados devem ser retidos integralmente no cofre bancário sem qualquer distribuição de sobras.",
        isCorrect: false,
        distractorRationale: "As sobras são distribuídas aos cooperados na proporção do volume que cada um movimentou na cooperativa."
      },
      {
        id: "e",
        text: "o voto é restrito aos associados que possuam mais de mil hectares de terra registrada.",
        isCorrect: false,
        distractorRationale: "A adesão é aberta e o direito a voto é igualitário para todos os cooperados adimplentes."
      }
    ],
    detailedExplanation: {
      summary: "O cooperativismo agropecuário organiza a produção sob a lógica da cooperação democrática e divisão justa de sobras.",
      stepByStep: [
        "1. Identificar a diferença jurídica entre S/A e Cooperativa: S/A foca no lucro proporcional ao capital (quem tem mais ações manda mais); Cooperativa foca na pessoa associada (cada cooperado tem um voto).",
        "2. Identificar a função econômica: permite aos pequenos e médios agricultores negociar compra de insumos em grande escala e industrializar a produção (moinhos, silos, laticínios).",
        "3. Concluir pela alternativa B."
      ],
      coreConcept: "Cooperativismo agropecuário, princípios de Rochdale e gestão democrática no campo.",
      trapWarning: "Em cooperativas, não se usa o termo 'lucro', mas sim 'sobras líquidas', que são distribuídas aos cooperados."
    },
    commonTraps: ["Confundir sociedade cooperativa com empresa capitalista por ações."],
    tags: ["Cooperativismo", "OCB", "Gestão Democrática", "Economia Solidária"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-AGR-025",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "Políticas de Aquisição de Alimentos e Merenda Escolar",
    subtopic: "O PNAE e o PAA como Motores da Transição Agroecológica",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Lei nº 11.947 de 2009 determinou que no mínimo 30% dos recursos financeiros repassados pelo Fundo Nacional de Desenvolvimento da Educação (FNDE) para o Programa Nacional de Alimentação Escolar (PNAE) devem ser obrigatoriamente investidos na compra direta de gêneros alimentícios da agricultura familiar e do empreendedor familiar rural ou de suas organizações, com prioridade para assentamentos de reforma agrária, comunidades tradicionais indígenas e quilombolas e produtos orgânicos/agroecológicos.",
      source: "BRASIL. Lei nº 11.947, de 16 de junho de 2009. Dispõe sobre o atendimento da alimentação escolar."
    },
    prompt: "A obrigatoriedade de compras públicas da agricultura familiar instituída pelo PNAE produz um impacto virtuoso porque",
    options: [
      {
        id: "a",
        text: "obriga os estudantes da rede pública a se alimentarem exclusivamente de rações desidratadas importadas.",
        isCorrect: false,
        distractorRationale: "O PNAE visa alimentos frescos, saudáveis e locais: frutas, verduras, feijão e raízes."
      },
      {
        id: "b",
        text: "cria um mercado consumidor institucional garantido para a produção dos pequenos agricultores familiares, estimulando a transição agroecológica e melhorando a qualidade nutricional da merenda escolar dos estudantes.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A lei assegura mercado certo e remuneração justa aos camponeses (sem intermediários exploradores), combatendo a evasão rural e garantindo comida fresca, diversificada e nutritiva nas escolas públicas."
      },
      {
        id: "c",
        text: "proíbe as escolas municipais de receberem verbas federais para reformas de infraestrutura física.",
        isCorrect: false,
        distractorRationale: "O PNAE trata exclusivamente da verba carimbada da merenda escolar."
      },
      {
        id: "d",
        text: "direciona a totalidade das compras governamentais para multinacionais de alimentos ultraprocessados.",
        isCorrect: false,
        distractorRationale: "A legislação restringe severamente ultraprocessados na merenda e proíbe refrigerantes nas escolas."
      },
      {
        id: "e",
        text: "exige a eliminação da produção local de frutas e legumes em favor de derivados lácteos da Europa.",
        isCorrect: false,
        distractorRationale: "A lei exige prioridade para a produção local dos municípios do entorno da escola."
      }
    ],
    detailedExplanation: {
      summary: "O PNAE e o PAA articulam políticas de alimentação saudável nas escolas com geração de renda e permanência camponesa na terra.",
      stepByStep: [
        "1. Analisar a Lei 11.947/2009: 30% no mínimo dos recursos da merenda escolar destinados à agricultura familiar local.",
        "2. Identificar a prioridade legal: assentados da reforma agrária, quilombolas, indígenas e produtores agroecológicos.",
        "3. Concluir que a política pública combate a desnutrição infantil, erradica intermediários da cadeia de valor e fortalece a economia regional sustentável."
      ],
      coreConcept: "PNAE, compras públicas institucionais, segurança alimentar e nutrição escolar no Brasil.",
      trapWarning: "O PNAE atende mais de 40 milhões de estudantes brasileiros todos os dias letivos, sendo referência mundial na FAO/ONU."
    },
    commonTraps: ["Achar que a merenda escolar compra apenas de grandes indústrias de enlatados e ultraprocessados."],
    tags: ["PNAE", "Alimentação Escolar", "Agricultura Familiar", "Políticas Públicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
