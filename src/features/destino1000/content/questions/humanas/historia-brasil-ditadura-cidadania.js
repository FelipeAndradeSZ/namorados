/**
 * BANCO DE QUESTÕES DESTINO 1000 - ENEM
 * Módulo: O Regime Militar Brasileiro (1964-1985), Cidadania, Repressão e Redemocratização
 * Código de Referência: HUM-DIT-001 a HUM-DIT-025 (25 Questões Inéditas)
 * Área: Ciências Humanas e suas Tecnologias
 * Foco Pedagógico: Historiografia Crítica, Atos Institucionais, Milagre Econômico, Direitos Humanos e Memória
 * Regra Estrita: ZERO termos de deslocamento turístico.
 */

export const QUESTIONS_HISTORIA_DITADURA = [
  {
    id: "HUM-DIT-001",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "O Golpe Civil-Militar de 1964 e o Contexto da Guerra Fria",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A historiografia recente enfatiza o caráter 'civil-militar' do movimento que derrubou João Goulart em 31 de março de 1964. O golpe não foi uma intervenção corporativa estrita de quartéis, mas uma ampla coalizão que articulou Forças Armadas, o Instituto de Pesquisas e Estudos Sociais (IPES), o Instituto Brasileiro de Ação Democrática (IBAD), setores expressivos da grande imprensa, o empresariado urbano-industrial paulista, a cúpula da Igreja Católica conservadora (na Marcha da Família com Deus pela Liberdade) e o apoio logístico e diplomático dos Estados Unidos (Operação Brother Sam).",
      source: "DREIFUSS, René Armand. 1964: A Conquista do Estado. Petrópolis: Vozes, 1981 (adaptado)."
    },
    prompt: "A denominação 'civil-militar' adotada pela historiografia contemporânea para caracterizar o golpe de 1964 fundamenta-se no reconhecimento de que:",
    options: [
      {
        id: "a",
        text: "o regime republicano foi deposto por uma conspiração que articulou frações civis das classes dominantes, mídia e oficiais das Forças Armadas em nome do anticomunismo e do capital transnacional.",
        isCorrect: true,
        distractorRationale: "Correta. A historiografia consolidou a terminologia civil-militar para demonstrar que o golpe atendeu aos interesses de classe de frações burguesas industriais, financeiras e agrárias aliadas aos militares e apoiadas pelos EUA no contexto da Guerra Fria."
      },
      {
        id: "b",
        text: "as lideranças sindicais e as Ligas Camponesas de Francisco Julião apoiaram a tomada do poder para acelerar a reforma agrária radical.",
        isCorrect: false,
        distractorRationale: "Incorreta. As ligas camponesas e os sindicatos foram as primeiras vítimas da repressão e das intervenções imediatas pós-golpe."
      },
      {
        id: "c",
        text: "a totalidade dos partidos políticos com assento no Congresso votou a favor da renúncia voluntária do presidente João Goulart.",
        isCorrect: false,
        distractorRationale: "Incorreta. Jango não renunciou; sua vacância foi declarada ilegitimamente por Auro de Moura Andrade enquanto ele ainda se encontrava em território nacional (no Rio Grande do Sul)."
      },
      {
        id: "d",
        text: "a intervenção resultou da exclusiva rivalidade corporativa entre oficiais do Exército e almirantes da Marinha pela liderança do Ministério da Guerra.",
        isCorrect: false,
        distractorRationale: "Incorreta. Essa interpretação ignora o caráter civil, classista e geopolítico da articulação golpista."
      },
      {
        id: "e",
        text: "a população brasileira votou em plebiscito nacional direto pela entrega temporária do governo aos generais da Escola Superior de Guerra.",
        isCorrect: false,
        distractorRationale: "Incorreta. Não houve plebiscito algum em 1964; o plebiscito ocorrido foi o de 1963, que restaurou o presidencialismo contra o parlamentarismo."
      }
    ],
    detailedExplanation: {
      summary: "O conceito de golpe civil-militar evidencia que a conspiração contra Jango foi articulada por classes dirigentes empresariais, mídia e setores conservadores associados aos militares.",
      stepByStep: [
        "Passo 1: Compreender o texto de Dreifuss: Mostra que organizações como o IPES e o IBAD reuniram industriais, banqueiros, juristas e jornalistas para conspirar ativamente contra o governo Jango.",
        "Passo 2: Analisar a expressão 'civil-militar': Supera o mito de que o golpe teria sido apenas uma ação inesperada ou exclusiva de soldados, revelando o protagonismo da burguesia civil na ruptura democrática.",
        "Passo 3: A alternativa A sintetiza com precisão a base social e ideológica do golpe de 1964."
      ],
      coreConcept: "O regime de 1964 foi civil-militar porque contou com a cumplicidade ativa e a participação orgânica da elite econômica, da mídia hegemônica e de setores do empresariado.",
      trapWarning: "Cuidado: A banca do ENEM não aceita a tese de 'revolução democrática' de 1964; o evento é categorizado como golpe de Estado civil-militar."
    },
    commonTraps: ["Achar que apenas generais planejaram e executaram a derrubada do governo João Goulart."],
    tags: ["golpe-1964", "ditadura-militar", "historiografia", "civil-militar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-002",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História do Brasil",
    subtopic: "Os Atos Institucionais e o Fechamento do Regime (AI-1 ao AI-5)",
    difficulty: 3,
    estimatedTimeSeconds: 155,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Art. 2º — O Presidente da República poderá decretar o recesso do Congresso Nacional, das Assembléias Legislativas e das Câmaras de Vereadores.\nArt. 5º — A suspensão dos direitos políticos, com base neste Ato, importa simultaneamente em: cessação de privilégio de foro por prerrogativa de função; suspensão do direito de votar e de ser votado nas eleições sindicais; proibição de atividades ou manifestação sobre assunto de natureza política.\nArt. 10 — Fica suspensa a garantia de habeas corpus, nos casos de crimes políticos, contra a segurança nacional, a ordem econômica e social e a economia popular.",
      source: "Ato Institucional nº 5 (AI-5), promulgado pelo presidente Costa e Silva em 13 de dezembro de 1968."
    },
    prompt: "Promulgado no ápice da contestação social de 1968, o Ato Institucional nº 5 representou para a ordem jurídica e política brasileira:",
    options: [
      {
        id: "a",
        text: "o esgotamento das aparências de legalidade constitucional e a consolidação do arbítrio de Estado, suprimindo garantias fundamentais e blindando os atos de exceção de controle judicial.",
        isCorrect: true,
        distractorRationale: "Correta. O AI-5 formalizou a ditadura escancarada: outorgou poder ao presidente para fechar o parlamento, cassar mandatos sem julgamento, censurar previamente os meios de comunicação e suspender o habeas corpus para acusados de crimes políticos."
      },
      {
        id: "b",
        text: "o início do processo de abertura política lenta, gradual e segura sob tutela dos generais da linha moderada castelista.",
        isCorrect: false,
        distractorRationale: "Incorreta. A abertura 'lenta, gradual e segura' iniciou-se quase seis anos depois, no governo Geisel (1974); o AI-5 inaugurou os 'anos de chumbo' de endurecimento máximo."
      },
      {
        id: "c",
        text: "a convocação de eleições presidenciais diretas com voto facultativo para analfabetos no pleito de 1970.",
        isCorrect: false,
        distractorRationale: "Incorreta. As eleições para presidente continuaram estritamente indiretas, realizadas por Colégio Eleitoral biônico controlado pela Arena."
      },
      {
        id: "d",
        text: "a transferência das atribuições do Poder Executivo para a liderança dos partidos de oposição reunidos no MDB.",
        isCorrect: false,
        distractorRationale: "Incorreta. O MDB teve dezenas de parlamentares cassados pelo AI-5 e o Congresso foi colocado em recesso compulsório."
      },
      {
        id: "e",
        text: "o fortalecimento do Supremo Tribunal Federal como instância moderadora independente das diretrizes do Conselho de Segurança Nacional.",
        isCorrect: false,
        distractorRationale: "Incorreta. O STF foi expurgado com a aposentadoria compulsória de ministros e teve sua jurisdição amputada pelo AI-5."
      }
    ],
    detailedExplanation: {
      summary: "O AI-5 de 13 de dezembro de 1968 marcou o início dos 'Anos de Chumbo', outorgando plenos poderes ao Executivo militar e suspendendo o habeas corpus.",
      stepByStep: [
        "Passo 1: Contextualizar 1968: Ano marcado pela Passeata dos Cem Mil, greves operárias em Contagem e Osasco, e o discurso do deputado Márcio Moreira Alves conclamando ao boicote ao Exército no Sete de Setembro.",
        "Passo 2: Analisar os artigos do AI-5: Fechamento discricionário do Congresso (Art. 2º), cassação de direitos civis sem devido processo legal (Art. 5º) e suspensão do habeas corpus (Art. 10).",
        "Passo 3: Consequência histórica: O Judiciário perdeu o poder de analisar qualquer ato derivado do AI-5, institucionalizando a tortura nos porões do regime.",
        "Conclusão: A alternativa A expressa perfeitamente a consagração do terrorismo de Estado e o sepultamento do Estado de Direito."
      ],
      coreConcept: "A suspensão do habeas corpus pelo AI-5 foi o instrumento jurídico que permitiu à repressão prender, incomunicar e torturar opositores sem qualquer controle judicial.",
      trapWarning: "Não confunda a linha-dura (Costa e Silva, Médici) que impôs o AI-5 com a linha castelista inicial ou com o projeto de distensão de Geisel."
    },
    commonTraps: ["Achar que o AI-5 preservou os direitos de defesa ou que permitia recurso ao Supremo Tribunal Federal."],
    tags: ["ai-5", "anos-de-chumbo", "direitos-humanos", "autoritarismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-003",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "O 'Milagre Econômico' (1968-1973): Crescimento, Desigualdade e Endividamento",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O período entre 1968 e 1973 registrou taxas de crescimento do PIB que chegaram a superar 10% ao ano, impulsionadas pela construção civil, bens de consumo duráveis (automóveis e eletrodomésticos) e grandes obras faraônicas (Ponte Rio-Niterói, Rodovia Transamazônica, Usina de Itaipu). Contudo, o economista Antônio Delfim Netto formulou a teoria de que era necessário 'fazer o bolo crescer para depois dividi-lo'. O Censo Demográfico de 1980 revelou que, enquanto os 5% mais ricos ampliaram sua fatia na renda nacional de 28% para quase 38%, os 50% mais pobres viram sua participação encolher de 18% para menos de 13%.",
      source: "GIAMBIAGI, Fabio et al. Economia Brasileira Contemporânea. Rio de Janeiro: Elsevier, 2011 (adaptado)."
    },
    prompt: "A análise socioeconômica do modelo implementado durante o chamado 'Milagre Econômico' revela que sua sustentação assentou-se sobre:",
    options: [
      {
        id: "a",
        text: "arrocho salarial dos trabalhadores de base, repressão violenta a greves e forte concentração de renda que favoreceu o consumo das classes médias e altas sob dependência de capitais externos.",
        isCorrect: true,
        distractorRationale: "Correta. O milagre foi viabilizado pela perda do poder de compra do salário mínimo (arrocho salarial desindexado da inflação real), proibição de greves sindicais, incentivo fiscal às montadoras multinacionais e empréstimos bancários internacionais fáceis antes da crise do petróleo."
      },
      {
        id: "b",
        text: "ampla reforma agrária redistributiva e aumento exponencial do poder aquisitivo real das famílias de trabalhadores rurais assalariados.",
        isCorrect: false,
        distractorRationale: "Incorreta. A concentração fundiária aumentou e o campo sofreu modernização conservadora (expansão do agronegócio e expulsão de pequenos agricultores)."
      },
      {
        id: "c",
        text: "superávit fiscal contínuo que eliminou a dívida externa brasileira junto a credores privados internacionais.",
        isCorrect: false,
        distractorRationale: "Incorreta. A dívida externa explodiu durante o milagre e se tornou impagável após os choques do petróleo e a disparada dos juros americanos em 1979."
      },
      {
        id: "d",
        text: "nacionalização completa de todas as indústrias petroquímicas e automobilísticas estrangeiras sob gestão operária coletiva.",
        isCorrect: false,
        distractorRationale: "Incorreta. O modelo foi o 'tripé econômico' associando empresas estatais de base, capital privado nacional e capitais multinacionais."
      },
      {
        id: "e",
        text: "redução imediata da inflação para zero e eliminação completa da taxa de mortalidade infantil nas periferias das metrópoles.",
        isCorrect: false,
        distractorRationale: "Incorreta. A mortalidade infantil chegou a subir em metrópoles como São Paulo na década de 1970 em decorrência do arrocho salarial e desnutrição."
      }
    ],
    detailedExplanation: {
      summary: "O 'Milagre Econômico' combinou alto crescimento do PIB com profunda concentração de renda, arrocho salarial e endividamento em moeda estrangeira.",
      stepByStep: [
        "Passo 1: Compreender os motores do milagre: Crédito internacional abundante com taxas de juros baixas (petrodólares), investimentos estatais em infraestrutura e expansão da indústria de bens de consumo duráveis.",
        "Passo 2: Compreender o custo social: O ministro Delfim Netto impôs o 'arrocho salarial' (fórmulas oficiais subestimavam a inflação para não reajustar salários adequadamente).",
        "Passo 3: A metáfora do bolo: 'Fazer o bolo crescer para depois dividir'. Na realidade, o bolo cresceu, mas foi apropriado pelas elites e classes médias superiores, acentuando o índice de Gini.",
        "Conclusão: A alternativa A explica com perfeição a mecânica contraditória do período."
      ],
      coreConcept: "A concentração de renda do 'milagre' demonstrou que crescimento do PIB não é sinônimo de desenvolvimento social ou distribuição de riqueza.",
      trapWarning: "Cuidado: Dados demográficos dos anos 1970 revelam que a mortalidade infantil e doenças infecciosas subiram em bolsões metropolitanos mesmo durante os anos de PIB recorde."
    },
    commonTraps: ["Acreditar que o Milagre Econômico beneficiou igualitariamente toda a população brasileira."],
    tags: ["milagre-economico", "delfim-netto", "concentracao-renda", "arrocho-salarial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-004",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "Aparelho Repressivo, Tortura de Estado e Censura Cultural",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A repressão durante a ditadura brasileira estruturou-se na doutrina de Segurança Nacional formulada na Escola Superior de Guerra (ESG), que deslocou a noção de inimigo externo para o 'inimigo interno' (o cidadão dissidente classificado como subversivo). A criação da Operação Bandeirante (Oban) em 1969 em São Paulo, financiada ilegalmente por empresários da FIESP e integrada por policiais civis, militares e Forças Armadas, serviu de protótipo para o sistema DOI-CODI (Destacamento de Operações de Informações - Centro de Operações de Defesa Interna), transformando a tortura sistemática em metodologia institucionalizada de interrogação.",
      source: "COMISSÃO NACIONAL DA VERDADE. Relatório Final, Volume I. Brasília: CNV, 2014."
    },
    prompt: "Com base nas investigações consolidadas pela Comissão Nacional da Verdade, o funcionamento do aparato repressivo no Brasil caracterizou-se por:",
    options: [
      {
        id: "a",
        text: "uma política sistemática de terrorismo de Estado clandestino, com conivência da cúpula governamental, que praticou sequestros, torturas, assassinatos e ocultação de cadáveres de opositores políticos.",
        isCorrect: true,
        distractorRationale: "Correta. A CNV comprovou documentalmente que as violações não foram 'excessos isolados' de subordinados, mas uma política de Estado centralizada e coordenada pelos presidentes generais e seus ministros militares."
      },
      {
        id: "b",
        text: "ações pontuais e desautorizadas de soldados amotinados que agiam sem o conhecimento ou consentimento dos comandantes de Exército.",
        isCorrect: false,
        distractorRationale: "Incorreta. Esta era a tese revisionista dos militares ('casos isolados'), categoricamente desmontada pelos arquivos oficiais da repressão analisados pela CNV."
      },
      {
        id: "c",
        text: "intervenções exclusivamente pacíficas de reeducação cívica conduzidas por psicólogos e assistentes sociais nos presídios.",
        isCorrect: false,
        distractorRationale: "Incorreta. Essa formulação é um eufemismo falso que nega a existência documentada de centros de tortura e assassinatos políticos."
      },
      {
        id: "d",
        text: "julgamentos públicos abertos conduzidos pela Justiça Comum em estrita observância das normas do Tribunal Penal Internacional.",
        isCorrect: false,
        distractorRationale: "Incorreta. Os opositores eram submetidos à Justiça Militar sob a Lei de Segurança Nacional ou torturados em centros clandestinos sem registro prisional."
      },
      {
        id: "e",
        text: "atuação coordenada exclusivamente pela Polícia Federal civil, mantendo as Forças Armadas nos quartéis de fronteira.",
        isCorrect: false,
        distractorRationale: "Incorreta. Os órgãos centrais da repressão (DOI-CODI, CIE, Cisa, Cenimar) eram comandados diretamente por oficiais das Forças Armadas."
      }
    ],
    detailedExplanation: {
      summary: "A Comissão Nacional da Verdade (2014) comprovou que a tortura e os assassinatos políticos no regime militar foram políticas de Estado sistemáticas e institucionalizadas.",
      stepByStep: [
        "Passo 1: Compreender o papel da Doutrina de Segurança Nacional: Considerava qualquer contestador político como 'inimigo interno' que ameaçava a pátria.",
        "Passo 2: Analisar a estrutura do DOI-CODI e da Oban: Financiamento empresarial privado somado à logística do Exército para capturar, torturar e matar opositores.",
        "Passo 3: As conclusões da CNV: O Estado brasileiro praticou graves violações de direitos humanos (tortura, execuções sumárias, desaparecimento forçado), configurando crimes contra a humanidade.",
        "Conclusão: A alternativa A traz a síntese historiográfica e jurídica contemporânea correta."
      ],
      coreConcept: "Terrorismo de Estado ocorre quando o próprio Estado utiliza sua máquina de coerção legal e ilegal para aterrorizar, torturar e eliminar cidadãos sob sua jurisdição.",
      trapWarning: "Cuidado com o discurso negacionista que tenta atribuir os crimes da ditadura a 'excessos de alguns radicais dos dois lados'; o Estado tem responsabilidade primária indelegável."
    },
    commonTraps: ["Acreditar que a tortura nos quartéis era ignorada pelos generais que ocupavam a presidência."],
    tags: ["repressao", "tortura", "comissao-da-verdade", "direitos-humanos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-005",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História do Brasil",
    subtopic: "A Resistência Cultural, a MPB e as Metáforas de Drible à Censura",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Pai, afasta de mim esse cálice\nPai, afasta de mim esse cálice\nPai, afasta de mim esse cálice\nDe vinho tinto de sangue\n\nComo beber dessa bebida amarga\nTragar a dor, engolir a labuta\nMesmo calada a boca, resta o peito\nSilêncio na cidade não se escuta\nDe que me vale ser filho da santa\nMelhor seria ser filho da outra\nOutra realidade menos morta\nTanta mentira, tanta força bruta",
      source: "HOLANDA, Chico Buarque de; GIL, Gilberto. Cálice, 1973 (gravada em 1978)."
    },
    prompt: "Na canção 'Cálice', os autores utilizam recursos poéticos sofisticados para confrontar o regime autoritário. O principal estratagema discursivo empregado para contornar a censura prévia consistiu em:",
    options: [
      {
        id: "a",
        text: "explorar a homofonia entre a palavra bíblica 'cálice' e a forma verbal imperativa 'cale-se', denunciando metaforicamente o silenciamento forçado e a violência física do regime militar.",
        isCorrect: true,
        distractorRationale: "Correta. O refrão apropria-se do texto bíblico da oração de Jesus no Getsêmani ('Pai, afasta de mim este cálice') para criar um jogo fônico perfeito com o imperativo de silenciamento 'cale-se', driblando os censores desatentos enquanto denunciava a mordaça política e as torturas ('vinho tinto de sangue')."
      },
      {
        id: "b",
        text: "fazer um elogio direto à religiosidade tradicional das famílias católicas que organizaram a Marcha da Família em 1964.",
        isCorrect: false,
        distractorRationale: "Incorreta. A canção faz oposição frontal aos apoiadores do regime militar, não elogio."
      },
      {
        id: "c",
        text: "apoiar a proibição do consumo de bebidas alcoólicas destiladas nos festivais de música popular brasileira.",
        isCorrect: false,
        distractorRationale: "Incorreta. Trata-se de uma leitura superficial e literal da metáfora do vinho e da bebida amarga."
      },
      {
        id: "d",
        text: "celebrar os acordos econômicos firmados pelo Brasil com os produtores de vinho da Europa ocidental.",
        isCorrect: false,
        distractorRationale: "Incorreta. Extrapolação delirante sem base no contexto de engajamento da MPB."
      },
      {
        id: "e",
        text: "criticar a falta de patrocínio estatal às transmissões radiofônicas no interior do país.",
        isCorrect: false,
        distractorRationale: "Incorreta. A canção aborda a censura, a violência repressiva e o medo, e não financiamento midiático."
      }
    ],
    detailedExplanation: {
      summary: "A canção 'Cálice' explora a ambiguidade fônica entre 'cálice' (taça litúrgica) e 'cale-se' (ordem de silenciamento da censura), ícone da resistência artística à ditadura.",
      stepByStep: [
        "Passo 1: Analisar o contexto histórico de 1973: Auge da censura prévia da Divisão de Censura de Diversões Públicas (DCDP). Compositores eram proibidos de usar palavras diretas como 'ditadura', 'tortura' ou 'prisão'.",
        "Passo 2: Analisar a construção lírica: Ao ouvir o refrão cantado, o ouvido apreende tanto 'afasta de mim esse cálice' (taça de sofrimento) quanto 'afasta de mim esse cale-se' (a mordaça da censura).",
        "Passo 3: Os versos 'mesmo calada a boca', 'vinho tinto de sangue' e 'tanta força bruta' reforçam explicitamente a denúncia da tortura e do autoritarismo.",
        "Conclusão: A alternativa A capta precisamente a estratégia estética e política da obra."
      ],
      coreConcept: "A polifonia e a metáfora foram as principais armas da arte engajada para comunicar mensagens políticas sem que a censura barrasse as obras.",
      trapWarning: "O ENEM frequentemente cobra letras de Chico Buarque, Gilberto Gil, Caetano Veloso e Geraldo Vandré explorando a dimensão metafórica contra a censura."
    },
    commonTraps: ["Interpretar a letra de forma puramente religiosa ou literal, ignorando a denúncia política sob censura."],
    tags: ["mpb", "chico-buarque", "censura", "resistencia-cultural"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-006",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "A Crise dos Anos 1970 e a Abertura 'Lenta, Gradual e Segura' de Geisel",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao assumir a presidência em 1974 em meio ao primeiro choque do petróleo e ao esgotamento do 'milagre', o general Ernesto Geisel anunciou um projeto de 'distensão política' que deveria ser 'lenta, gradual e segura'. Esse processo não foi uma concessão graciosa dos militares, mas uma tentativa de controlar a transição pelo alto, evitando uma ruptura revolucionária e neutralizando a linha-dura das Forças Armadas, que resistia a qualquer concessão democrática.",
      source: "SKIDMORE, Thomas. Brasil: De Castelo a Tancredo. Rio de Janeiro: Paz e Terra, 1988 (adaptado)."
    },
    prompt: "A expressão 'lenta, gradual e segura' utilizada pelo general Ernesto Geisel expressava o objetivo estratégico do regime militar de:",
    options: [
      {
        id: "a",
        text: "pilotar uma descompressão política controlada pelo próprio Executivo, que impedisse a responsabilização jurídica dos agentes da repressão e assegurasse a hegemonia conservadora na transição.",
        isCorrect: true,
        distractorRationale: "Correta. Geisel e seu chefe da Casa Civil Golbery do Couto e Silva queriam desanuviar as tensões sociais e isolar a linha-dura terrorista dos quartéis, mas sem permitir que a oposição tomasse o poder de surpresa nem que as Forças Armadas fossem julgadas pelas violações de direitos humanos."
      },
      {
        id: "b",
        text: "entregar o governo imediatamente a partidos de esquerda para que instaurassem uma constituição socialista.",
        isCorrect: false,
        distractorRationale: "Incorreta. O projeto de Geisel era rigorosamente anticomunista e buscava a perpetuação da tutela militar sobre a vida civil."
      },
      {
        id: "c",
        text: "acelerar a convocação de eleições diretas para presidente já no ano seguinte com a dissolução das Forças Armadas.",
        isCorrect: false,
        distractorRationale: "Incorreta. O processo foi intencionalmente protelado: eleições diretas para presidente só ocorreram em 1989, 15 anos depois da posse de Geisel."
      },
      {
        id: "d",
        text: "submeter todos os ministros do Superior Tribunal Militar a plebiscitos populares em praça pública.",
        isCorrect: false,
        distractorRationale: "Incorreta. Não houve qualquer democratização desse tipo nas instâncias militares."
      },
      {
        id: "e",
        text: "abandonar o modelo de industrialização pesada do II PND em favor do retorno à economia agrária cafeeira do século XIX.",
        isCorrect: false,
        distractorRationale: "Incorreta. Geisel aprofundou a industrialização pesada por meio do II Plano Nacional de Desenvolvimento (II PND)."
      }
    ],
    detailedExplanation: {
      summary: "A abertura de Geisel (1974-1979) foi um projeto de transição tutelada 'pelo alto', desenhado para descomprimir o sistema sem perder o controle do poder político.",
      stepByStep: [
        "Passo 1: Compreender o cenário de 1974: Fim da bonança econômica externa (choque do petróleo), inflação em alta e vitória avassaladora do MDB nas eleições parlamentares de 1974.",
        "Passo 2: A estratégia de Geisel e Golbery: Uma abertura controlada para desativar a bomba social, enfrentando a 'linha-dura' interna que tentava sabotar a distensão com atentados terroristas (como a morte do jornalista Vladimir Herzog em 1975 e do operário Manoel Fiel Filho em 1976 no DOI-CODI de SP).",
        "Passo 3: O significado de 'segura': Segura para os militares, garantindo que não houvesse 'revanchismo' nem perda dos privilégios da corporação.",
        "Conclusão: A alternativa A traduz fielmente o consenso historiográfico contemporâneo."
      ],
      coreConcept: "A transição brasileira para a democracia foi transacionada, pactuada e tutelada, caracterizando-se por fortes continuidades institucionais.",
      trapWarning: "Atenção: A demissão do comandante do II Exército (general Ednardo D'Ávila) por Geisel após o assassinato de Fiel Filho demonstrou que o presidente precisava enquadrar a linha-dura para manter o comando da transição."
    },
    commonTraps: ["Achar que a abertura foi um ato espontâneo de bondade dos generais sem relação com a crise econômica e a pressão popular."],
    tags: ["governo-geisel", "distensao", "abertura-politica", "linha-dura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-007",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "A Lei da Anistia de 1979 e as Disputas sobre Memória e Justiça",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Art. 1º — É concedida anistia a todos quantos, no período compreendido entre 02 de setembro de 1961 e 15 de agosto de 1979, cometeram crimes políticos ou conexos com estes, crimes eleitorais, aos que tiveram seus direitos políticos suspensos e aos servidores da Administração Direta e Indireta, de fundações vinculadas ao poder público, aos Servidores dos Poderes Legislativo e Judiciário, aos Militares e aos dirigentes e representantes sindicais, punidos com fundamento em Atos Institucionais e Complementares.\n§ 1º — Consideram-se conexos, para os efeitos deste artigo, os crimes de qualquer natureza relacionados com crimes políticos ou praticados por motivação política.",
      source: "Lei nº 6.683, de 28 de agosto de 1979 (Lei da Anistia)."
    },
    prompt: "A interpretação dada ao parágrafo primeiro do artigo 1º da Lei da Anistia pelo regime militar e mantida por setores jurídicos brasileiros produziu uma polêmica histórica continuada porque:",
    options: [
      {
        id: "a",
        text: "estendeu a anistia aos agentes do Estado que cometeram crimes de tortura e desaparecimento forçado sob a rubrica de 'crimes conexos', bloqueando a responsabilização criminal dos torturadores.",
        isCorrect: true,
        distractorRationale: "Correta. Os militares articularam o conceito de 'crimes conexos' para anistiar a si mesmos (autoanistia), impedindo que policiais e oficiais fossem processados pela tortura sistemática, contrariando convenções internacionais que consideram a tortura crime contra a humanidade imprescritível e inanistiável."
      },
      {
        id: "b",
        text: "autorizou a extradição sumária de todos os presos políticos para tribunais militares sediados no exterior.",
        isCorrect: false,
        distractorRationale: "Incorreta. A anistia permitiu o retorno de centenas de exilados políticos ao Brasil (como Leonel Brizola, Miguel Arraes, Fernando Gabeira, Betinho)."
      },
      {
        id: "c",
        text: "concedeu indenizações imediatas com dinheiro público exclusivamente aos membros da guerrilha armada.",
        isCorrect: false,
        distractorRationale: "Incorreta. A Lei de 1979 não previa indenizações diretas automáticas, que só vieram com a Comissão de Anistia na década de 2000."
      },
      {
        id: "d",
        text: "determinou o fechamento definitivo de todos os centros de pesquisa histórica e arquivos públicos do país.",
        isCorrect: false,
        distractorRationale: "Incorreta. A lei não tratava de arquivos públicos, embora a ditadura tenha destruído e ocultado documentos de operações militares."
      },
      {
        id: "e",
        text: "proibiu a criação de novos partidos políticos e manteve o bipartidarismo obrigatório entre Arena e MDB.",
        isCorrect: false,
        distractorRationale: "Incorreta. Meses após a anistia, no final de 1979, o governo Figueiredo decretou a reforma partidária que extinguiu o bipartidarismo e restaurou o pluripartidarismo."
      }
    ],
    detailedExplanation: {
      summary: "A Lei da Anistia de 1979 foi uma 'anistia negociada': permitiu a volta dos exilados, mas foi interpretada pelos militares como uma autoanistia para blindar os torturadores de processos criminais.",
      stepByStep: [
        "Passo 1: Contextualizar a luta social pela anistia: Movimento liderado pelo Movimento Feminino pela Anistia e pelo Comitê Brasileiro pela Anistia, que exigiam anistia 'ampla, geral e irrestrita'.",
        "Passo 2: A manobra governamental: O presidente João Figueiredo enviou ao Congresso um projeto com o parágrafo sobre 'crimes conexos'.",
        "Passo 3: A tese da autoanistia: O regime equiparou a violência de opositores que lutavam contra a ditadura aos atos de tortura e assassinato praticados pelo próprio Estado, garantindo impunidade aos agentes do DOI-CODI.",
        "Passo 4: Controvérsia contemporânea: Em 2010, o STF confirmou a validade da lei na ADPF 153, mas a Corte Interamericana de Direitos Humanos condenou o Brasil no caso Guerrilha do Araguaia, afirmando que autoanistia para crimes contra a humanidade viola o Direito Internacional.",
        "Conclusão: A alternativa A aborda exatamente essa tensão central da história republicana."
      ],
      coreConcept: "A anistia brasileira diferiu de países como Argentina e Chile, onde generais e torturadores foram levados a julgamento e condenados por crimes contra a humanidade.",
      trapWarning: "Cuidado: A anistia de 1979 excluiu os condenados por 'crimes de sangue' que ainda cumpriam pena na época, concedendo-lhes indulto posterior individualizado."
    },
    commonTraps: ["Achar que a anistia de 1979 foi uma vitória plena da oposição, sem perceber a contrapartida da impunidade aos agentes da repressão."],
    tags: ["lei-da-anistia", "justica-de-transicao", "memoria", "direitos-humanos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-008",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "O Movimento Sindical do ABC Paulista e o Novo Sindicalismo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre 1978 e 1980, o ABC paulista (Santo André, São Bernardo do Campo e São Caetano do Sul) foi sacudido por greves metalúrgicas de massas que paralisaram as montadoras multinacionais (Volkswagen, Ford, Scania). Liderado por Luiz Inácio Lula da Silva, o movimento recusou a tutela da estrutura sindical corporativista herdada da Era Vargas e da Carta del Lavoro fascista, rompendo o medo imposto pela Lei de Segurança Nacional e articulando reinvindicações de reposição salarial frente às fraudes do índice oficial de inflação com demandas por comissões de fábrica e liberdade política.",
      source: "SADER, Eder. Quando Novos Personagens Entraram em Cena. Rio de Janeiro: Paz e Terra, 1988 (adaptado)."
    },
    prompt: "O fenômeno histórico denominado 'Novo Sindicalismo', surgido nas greves do ABC paulista no final da década de 1970, caracterizou-se essencialmente por:",
    options: [
      {
        id: "a",
        text: "romper com o atrelamento ministerial e o peleguismo corporativo da Era Vargas, afirmando a autonomia operária na base e catalisando o surgimento de novos atores políticos na luta pela redemocratização.",
        isCorrect: true,
        distractorRationale: "Correta. O novo sindicalismo recusou o controle do Ministério do Trabalho sobre os sindicatos (peleguismo), fortaleceu as comissões de fábrica e impulsionou a fundação da Central Única dos Trabalhadores (CUT) em 1983 e do Partido dos Trabalhadores (PT) em 1980."
      },
      {
        id: "b",
        text: "defender a manutenção irrestrita da CLT getulista e a proibição definitiva de comissões de representação no chão de fábrica.",
        isCorrect: false,
        distractorRationale: "Incorreta. O movimento criticava as amarras da CLT corporativa e exigia representação direta por delegados de fábrica."
      },
      {
        id: "c",
        text: "apoiar as medidas econômicas do ministro Delfim Netto em troca de assentos no Conselho de Segurança Nacional.",
        isCorrect: false,
        distractorRationale: "Incorreta. As greves foram deflagradas precisamente para denunciar as fraudes e o arrocho salarial impostos pela política de Delfim Netto."
      },
      {
        id: "d",
        text: "exigir a militarização dos parques industriais paulistas para evitar conflitos com donos de montadoras transnacionais.",
        isCorrect: false,
        distractorRationale: "Incorreta. Os operários sofreram com a invasão militar de seus sindicatos e com a prisão de suas lideranças sob a Lei de Segurança Nacional."
      },
      {
        id: "e",
        text: "alinhar-se incondicionalmente aos partidos governistas da Arena para garantir estabilidade funcional vitalícia aos operários.",
        isCorrect: false,
        distractorRationale: "Incorreta. O movimento era de oposição radical ao regime autoritário e aos seus partidos de sustentação."
      }
    ],
    detailedExplanation: {
      summary: "O Novo Sindicalismo rompeu com o modelo corporativista varguista e projetou o movimento operário como protagonista da redemocratização e da fundação de novos partidos e centrais sindicais.",
      stepByStep: [
        "Passo 1: Entender o contexto do ABC: Região que concentrava o proletariado industrial mais moderno do país em montadoras transnacionais.",
        "Passo 2: A denúncia da fraude do DIEESE (1977): O Banco Mundial comprovou que o governo Médici havia manipulado os dados de inflação de 1973 para diminuir o reajuste salarial, gerando uma defasagem de 34,1%. Isso serviu de estopim moral para as greves de 1978.",
        "Passo 3: A ruptura com o peleguismo: As greves de braços cruzados dentro das fábricas demonstraram que a repressão policial não conseguia deter a organização coletiva autônoma.",
        "Passo 4: Desdobramentos políticos: Esse movimento gerou a criação do PT (1980) e da CUT (1983), redesenhando a correlação de forças na transição democrática.",
        "Conclusão: A alternativa A traduz perfeitamente a importância sociológica do novo sindicalismo."
      ],
      coreConcept: "O Novo Sindicalismo uniu a luta econômica de fábrica à luta civil pela democracia e contra a tutela autoritária do Estado.",
      trapWarning: "Cuidado: Não confunda o sindicalismo pelego atrelado ao Ministério do Trabalho da era Vargas/Dutra com o 'novo sindicalismo' autônomo dos anos 1970/1980."
    },
    commonTraps: ["Achar que o movimento grevista de 1978 reivindicava apenas aumento de salário, desconsiderando sua dimensão de contestação ao regime militar."],
    tags: ["novo-sindicalismo", "abc-paulista", "lula", "greves-1978", "redemocratizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-009",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História do Brasil",
    subtopic: "A Campanha das Diretas Já (1984) e a Emenda Dante de Oliveira",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nos primeiros meses de 1984, milhões de brasileiros tomaram as ruas das capitais e cidades médias do país vestidos de verde e amarelo empunhando a palavra de ordem 'Quero Votar para Presidente'. A campanha das 'Diretas Já' reuniu uma frente ampla pluripartidária (Ulisses Guimarães, Tancredo Neves, Leonel Brizola, Lula, FHC), artistas, movimentos sociais e setores eclesiásticos em torno da aprovação da Proposta de Emenda Constitucional nº 05/1983 (Emenda Dante de Oliveira), que restabelecia o sufrágio direto para a sucessão de João Figueiredo.",
      source: "KOTSCHO, Ricardo. Explode um Novo Brasil: Diário da Campanha das Diretas. São Paulo: Brasiliense, 1984."
    },
    prompt: "Apesar de ter mobilizado as maiores manifestações populares de rua da história republicana até aquele momento, a campanha das 'Diretas Já' culminou em um desfecho institucional que revelou:",
    options: [
      {
        id: "a",
        text: "os limites do controle civil sobre o Congresso Nacional, onde a emenda foi derrotada por não atingir os dois terços necessários, forçando a oposição a disputar a presidência no Colégio Eleitoral indireto.",
        isCorrect: true,
        distractorRationale: "Correta. Na votação de 25 de abril de 1984, a Emenda Dante de Oliveira obteve 298 votos a favor e 65 contra, mas faltaram 22 votos para os 320 exigidos (dois terços da Câmara), devido à ausência maciça de parlamentares do PDS governista. A oposição teve então de canalizar forças para eleger Tancredo Neves no Colégio Eleitoral em janeiro de 1985."
      },
      {
        id: "b",
        text: "a renúncia imediata do general Figueiredo e a posse direta do jurista Ulisses Guimarães na presidência provisória da República.",
        isCorrect: false,
        distractorRationale: "Incorreta. Figueiredo concluiu seu mandato até 15 de março de 1985 e Ulisses Guimarães permaneceu deputado federal."
      },
      {
        id: "c",
        text: "a convocação de um golpe preventivo da linha-dura que cancelou todas as eleições e instaurou o AI-6.",
        isCorrect: false,
        distractorRationale: "Incorreta. A linha-dura estava politicamente esgotada e isolada após escândalos como o atentado do Riocentro em 1981."
      },
      {
        id: "d",
        text: "a vitória folgada da emenda no Congresso com apoio unânime da bancada governista do PDS.",
        isCorrect: false,
        distractorRationale: "Incorreta. A bancada do PDS manobrou por orientação do Planalto e esvaziou a votação para impedir o quórum de dois terços."
      },
      {
        id: "e",
        text: "o desinteresse da população trabalhadora urbana, que preferiu não participar dos comícios promovidos no Rio de Janeiro e em São Paulo.",
        isCorrect: false,
        distractorRationale: "Incorreta. Os comícios da Candelária (Rio) e da Praça da Sé e Vale do Anhangabaú (São Paulo) reuniram mais de um milhão de pessoas cada um."
      }
    ],
    detailedExplanation: {
      summary: "A derrota parlamentar da Emenda Dante de Oliveira em abril de 1984 impediu as eleições diretas e levou a oposição moderada a pactuar a transição via Colégio Eleitoral com dissidentes do regime.",
      stepByStep: [
        "Passo 1: Entender a mobilização das Diretas Já: A maior mobilização cívica de massas do século XX no Brasil, unificando da esquerda radical a liberais moderados.",
        "Passo 2: O resultado da votação em 25/04/1984: A emenda teve maioria simples (298 a favor), mas o regimento constitucional da ditadura exigia quórum qualificado de dois terços (320 votos). Centenas de deputados do PDS se abstiveram ou faltaram por pressão do governo.",
        "Passo 3: A consequência histórica: A impossibilidade da eleição direta empurrou a Aliança Democrática (PMDB + dissidentes do PDS na Frente Liberal) para a disputa indireta no Colégio Eleitoral, elegendo a chapa Tancredo Neves / José Sarney em 15 de janeiro de 1985.",
        "Conclusão: A alternativa A expõe a contradição entre a força das ruas e os limites do arranjo parlamentar conservador."
      ],
      coreConcept: "A transição democrática brasileira resultou de um acordo entre a oposição moderada e setores dissidentes do próprio regime militar (a Frente Liberal de Sarney e Aureliano Chaves).",
      trapWarning: "Cuidado: Tancredo Neves NÃO foi eleito pelo voto direto do povo; ele foi eleito pelo Colégio Eleitoral indireto derrotando Paulo Maluf."
    },
    commonTraps: ["Achar que a campanha das Diretas Já venceu e que Tancredo Neves foi eleito pelo voto direto da população."],
    tags: ["diretas-ja", "dante-de-oliveira", "colegio-eleitoral", "tancredo-neves"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-010",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "A 'Nova República', a Transição Conciliada e a Herança Autoritária",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A posse de José Sarney em 15 de março de 1985 — em decorrência da súbita doença e posterior morte de Tancredo Neves antes de ser empossado — marcou o início da chamada 'Nova República'. No entanto, a transição revelou as marcas indeléveis do pacto conciliatório: o primeiro presidente civil após vinte e um anos de ditadura havia sido presidente do próprio partido de sustentação do regime (a Arena/PDS) durante os anos mais duros do regime autoritário.",
      source: "FAUSTO, Boris. História do Brasil. São Paulo: Edusp, 2012 (adaptado)."
    },
    prompt: "A trajetória política que culminou na posse de José Sarney em 1985 exemplifica a seguinte característica estrutural da história política brasileira:",
    options: [
      {
        id: "a",
        text: "o padrão histórico de conciliação das elites políticas, no qual a transição para a democracia preserva quadros dirigentes, estruturas institucionais e interesses econômicos do regime precedente para evitar rupturas profundas.",
        isCorrect: true,
        distractorRationale: "Correta. A redemocratização brasileira não ocorreu por revolução popular ou ruptura abrupta, mas por acomodação negociada entre a oposição moderada e quadros egressos da ditadura (como o próprio Sarney, ex-presidente da Arena e do PDS), garantindo a preservação de interesses e a imunidade dos militares."
      },
      {
        id: "b",
        text: "a instauração de um tribunal de exceção revolucionário que baniu perpetuamente todos os membros dos partidos conservadores da vida pública.",
        isCorrect: false,
        distractorRationale: "Incorreta. Ao contrário, os membros do PDS/PFL continuaram no centro do poder governamental e integraram a base aliada de Sarney."
      },
      {
        id: "c",
        text: "o cancelamento imediato da dívida externa e o confisco sumário de empresas multinacionais que apoiaram a ditadura militar.",
        isCorrect: false,
        distractorRationale: "Incorreta. O governo Sarney manteve as negociações da dívida e o modelo de mercado aberto ao capital internacional."
      },
      {
        id: "d",
        text: "a total desmilitarização do Estado e a extinção de todas as polícias militares estaduais herdadas do período autoritário.",
        isCorrect: false,
        distractorRationale: "Incorreta. As Polícias Militares foram mantidas como forças auxiliares do Exército na Constituição de 1988."
      },
      {
        id: "e",
        text: "a dissolução imediata do Congresso Nacional e a entrega da presidência da República aos comandantes das três Forças Armadas.",
        isCorrect: false,
        distractorRationale: "Incorreta. A posse de Sarney marcou a saída dos generais da presidência civil, embora tenham mantido tutela sobre setores estratégicos."
      }
    ],
    detailedExplanation: {
      summary: "A transição de 1985 consagrou a tradição conciliatória das elites brasileiras: mudou o regime político mantendo os quadros políticos e a estrutura econômica herdada.",
      stepByStep: [
        "Passo 1: Analisar o paradoxo Sarney: Homem de confiança do regime militar que se converteu em dissidente de última hora (Frente Liberal) e assumiu a liderança da redemocratização após a tragédia da morte de Tancredo.",
        "Passo 2: O conceito de transição conciliada: Diferente de rupturas revolucionárias (como em Portugal na Revolução dos Cravos), o Brasil manteve a burocracia, a Lei da Anistia de 1979 e grande parte dos privilégios da ordem pretérita.",
        "Passo 3: A alternativa A capta a essência da análise sociológica e histórica da Nova República."
      ],
      coreConcept: "A 'conciliação pelo alto' é um traço recorrente na história brasileira (Independência de 1822, Proclamação da República de 1889, Revolução de 1930 e Redemocratização de 1985).",
      trapWarning: "Cuidado: A morte de Tancredo Neves em 21 de abril de 1985 colocou Sarney no poder sem que ele tivesse sido a opção original de liderança da frente popular das Diretas."
    },
    commonTraps: ["Achar que a redemocratização de 1985 representou uma ruptura total com todas as práticas e grupos que governaram a ditadura militar."],
    tags: ["nova-republica", "jose-sarney", "conciliacao-pelo-alto", "transicao-democratica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-011",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "A Guerrilha do Araguaia e a Repressão aos Movimentos Armados",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre 1972 e 1974, as Forças Armadas mobilizaram milhares de soldados na região do Bico do Papagaio (sul do Pará) para aniquilar o foco da Guerrilha do Araguaia, organizado por militantes do Partido Comunista do Brasil (PCdoB) que buscavam implantar uma guerra popular prolongada inspirada no modelo chinês. Após três campanhas militares sucessivas, quase todos os guerrilheiros foram capturados, executados sumariamente e seus corpos ocultados na selva por determinação superior, permanecendo desaparecidos políticos até o presente.",
      source: "CAMPOS FILHO, Romualdo. Araguaia: Relato de um Guerrilheiro. São Paulo: Anita Garibaldi, 2012 (adaptado)."
    },
    prompt: "O episódio da Guerrilha do Araguaia e a posterior política de desaparecimento forçado de seus participantes evidenciam que:",
    options: [
      {
        id: "a",
        text: "o regime militar operou para além da legalidade de exceção formal, adotando a execução clandestina e a ocultação de cadáveres como estratégia deliberada de eliminação de dissidências armadas.",
        isCorrect: true,
        distractorRationale: "Correta. A Guerrilha do Araguaia foi objeto de censura absoluta na imprensa da época e a liquidação dos guerrilheiros rendidos com ocultação sistemática de seus restos mortais foi reconhecida pela Corte Interamericana de Direitos Humanos como crime continuado contra a humanidade do Estado brasileiro."
      },
      {
        id: "b",
        text: "as Forças Armadas garantiram julgamento aberto na Justiça Militar e concederam habeas corpus a todos os camponeses e guerrilheiros presos na selva.",
        isCorrect: false,
        distractorRationale: "Incorreta. Não houve julgamentos regulares para a maioria dos guerrilheiros do Araguaia; foram sumariamente executados sob sigilo absoluto."
      },
      {
        id: "c",
        text: "o movimento guerrilheiro contava com dezenas de milhares de soldados regulares armados com mísseis antiaéreos pesados de fabricação soviética.",
        isCorrect: false,
        distractorRationale: "Incorreta. Eram menos de 80 militantes precariamente armados com espingardas de caça convivendo com posseiros locais."
      },
      {
        id: "d",
        text: "o conflito foi imediatamente televisionado ao vivo para todo o país, gerando protestos generalizados que derrubaram o presidente Médici.",
        isCorrect: false,
        distractorRationale: "Incorreta. A existência da guerrilha foi mantida sob censura total da imprensa durante os anos de combate."
      },
      {
        id: "e",
        text: "as famílias dos guerrilheiros receberam os atestados de óbito e certidões de sepultamento formal na mesma semana em que os combates cessaram.",
        isCorrect: false,
        distractorRationale: "Incorreta. O Estado brasileiro negou durante décadas a morte dos combatentes, mantendo-os na condição de desaparecidos políticos."
      }
    ],
    detailedExplanation: {
      summary: "A repressão à Guerrilha do Araguaia institucionalizou o desaparecimento forçado como método de aniquilação física de opositores, mantido em segredo pelo Estado.",
      stepByStep: [
        "Passo 1: Contextualizar a guerrilha: O PCdoB apostou na guerrilha rural em área de floresta amazônica onde posseiros entravam em conflito com grileiros.",
        "Passo 2: A reação militar: Operação Papagaio, Sucuri e Marajoara. O Exército infiltrou agentes e utilizou helicópteros e guias locais para cercar e eliminar os núcleos guerrilheiros.",
        "Passo 3: A doutrina da terra arrasada: Prisioneiros foram decapitados ou fuzilados após interrogatório, e seus corpos foram enterrados em valas clandestinas ou queimados, gerando o drama dos desaparecidos políticos.",
        "Conclusão: A alternativa A sintetiza os fatos documentados pela Comissão da Verdade e por decisões de cortes internacionais."
      ],
      coreConcept: "O desaparecimento forçado é um crime continuado e permanente que só cessa quando os restos mortais são localizados e entregues formalmente aos familiares.",
      trapWarning: "Cuidado: A censura da ditadura foi tão rígida que a imensa maioria dos brasileiros só soube da existência da Guerrilha do Araguaia anos após o fim dos combates."
    },
    commonTraps: ["Achar que os guerrilheiros do Araguaia morreram em combate regular aberto; a maioria foi executada após a rendição."],
    tags: ["guerrilha-do-araguaia", "pcdob", "desaparecidos-politicos", "crimes-de-estado"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-012",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História do Brasil",
    subtopic: "O Modelo Bipartidário Compulsório (Arena vs MDB)",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Ato Institucional nº 2 (AI-2), baixado em 27 de outubro de 1965 pelo presidente Castelo Branco, extinguiu todos os partidos políticos tradicionais (PSD, UDN, PTB, PCB, etc.) e estabeleceu normas draconianas para a reorganização partidária. Disso resultou o bipartidarismo compulsório: a Aliança Renovadora Nacional (Arena), criada para ser o partido de sustentação do governo e da ordem militar; e o Movimento Democrático Brasileiro (MDB), concebido como uma 'oposição consentida' e vigiada, autorizada a funcionar dentro de limites estritos fixados pelo Palácio do Planalto.",
      source: "KAUFMAN, Tânia. O Bipartidarismo no Brasil da Ditadura. São Paulo: Brasiliense, 1985 (adaptado)."
    },
    prompt: "A imposição do bipartidarismo pelo regime militar através do AI-2 teve como objetivo primordial:",
    options: [
      {
        id: "a",
        text: "manter uma fachada de funcionamento parlamentar representativo enquanto neutralizava a dispersão partidária e restringia a oposição a limites rigorosamente controlados pelo Executivo.",
        isCorrect: true,
        distractorRationale: "Correta. Ao contrário de ditaduras totalitárias clássicas que fecham o parlamento indefinidamente, o regime brasileiro preferiu manter o Congresso aberto na maior parte do tempo, purgando os oposicionistas mais radicais por cassações e canalizando a oposição legal para o MDB para exibir legitimidade externa perante democracias ocidentais."
      },
      {
        id: "b",
        text: "garantir que a presidência da República fosse disputada em eleições diretas a cada dois anos entre Arena e MDB.",
        isCorrect: false,
        distractorRationale: "Incorreta. A presidência era disputada indiretamente por Colégio Eleitoral, e as eleições presidenciais diretas foram banidas."
      },
      {
        id: "c",
        text: "fortalecer a aliança histórica entre camponeses sem-terra e a bancada ruralista da Arena em favor da reforma agrária.",
        isCorrect: false,
        distractorRationale: "Incorreta. A Arena era o bastião do latifúndio conservador e opunha-se tenazmente a reformas agrárias distributivas."
      },
      {
        id: "d",
        text: "estimular a proliferação de partidos comunistas e anarquistas com direito a horário gratuito de televisão.",
        isCorrect: false,
        distractorRationale: "Incorreta. Partidos comunistas foram banidos, postos na clandestinidade e seus membros foram perseguidos."
      },
      {
        id: "e",
        text: "entregar a liderança do Senado aos governadores dos estados onde o MDB detinha maioria eleitoral absoluta.",
        isCorrect: false,
        distractorRationale: "Incorreta. O regime criou instrumentos autoritários como os 'senadores biônicos' do Pacote de Abril de 1977 para garantir a maioria da Arena mesmo com votação minoritária."
      }
    ],
    detailedExplanation: {
      summary: "O bipartidarismo artificial (Arena e MDB) serviu para preservar uma aparência de normalidade institucional republicana sob tutela estrita dos generais.",
      stepByStep: [
        "Passo 1: Entender o AI-2 de 1965: Extinguiu os partidos clássicos após a oposição vencer eleições para governador em estados-chave (Minas Gerais e Guanabara).",
        "Passo 2: A engenharia política: Criou o partido do 'sim' (Arena) e o partido do 'sim, senhor' (MDB).",
        "Passo 3: A ironia histórica: Nos anos 1970, o MDB transformou-se no grande canal de contestação eleitoral da sociedade civil, vencendo eleições majoritárias para o Senado em 1974 e forçando o governo a decretar o 'Pacote de Abril' em 1977 para inventar senadores biônicos não-eleitos e manter a maioria governista.",
        "Conclusão: A alternativa A explica com precisão funcional a razão de ser do bipartidarismo."
      ],
      coreConcept: "A ditadura militar brasileira recorreu sistematicamente a casuísmos eleitorais (mudanças nas regras do jogo durante a partida) para não perder o controle do Congresso.",
      trapWarning: "Cuidado com o 'Pacote de Abril' de 1977: criou o senador biônico (um terço do Senado indicado indiretamente pelas assembleias controladas pela Arena) para conter a vitória do MDB."
    },
    commonTraps: ["Achar que o bipartidarismo foi criado para fortalecer a democracia e alternância de poder partidário."],
    tags: ["bipartidarismo", "arena", "mdb", "ai-2", "casuismos-eleitorais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-013",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "A Modernização Conservadora do Campo e a Expansão da Fronteira Agrícola",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a ditadura militar, a agricultura brasileira passou pelo processo denominado pela sociologia de 'modernização conservadora': mecanização intensiva da lavoura, uso maciço de insumos químicos (agrotóxicos e fertilizantes sintéticos) promovido pelo Sistema Nacional de Crédito Rural (SNCR) e expansão da fronteira agrícola sobre o Cerrado e a Amazônia. Essa modernização técnica não tocou na secular concentração da posse da terra; ao contrário, expulsou milhões de meeiros, posseiros e pequenos agricultores familiares para as periferias urbanas (êxodo rural) ou para frentes de conflito sangrento na Amazônia.",
      source: "GRAZIANO DA SILVA, José. O Que É Questão Agrária. São Paulo: Brasiliense, 1982 (adaptado)."
    },
    prompt: "O conceito de 'modernização conservadora' aplicado ao campo brasileiro sob a ditadura militar expressa a contradição entre:",
    options: [
      {
        id: "a",
        text: "o avanço tecnológico do agronegócio de exportação e a manutenção arcaica da estrutura fundiária concentrada, gerando êxodo rural acelerado e violentos conflitos de terra.",
        isCorrect: true,
        distractorRationale: "Correta. O regime modernizou o aparato técnico e produtivo do campo para gerar superávits de exportação de commodities (como soja), mas conservou intocada a propriedade latifundiária tradicional, sem qualquer reforma agrária democratizante."
      },
      {
        id: "b",
        text: "a divisão igualitária de fazendas estatais entre pequenos posseiros e a proibição da mecanização de colheitadeiras.",
        isCorrect: false,
        distractorRationale: "Incorreta. O regime incentivou a mecanização pesada e não realizou divisão igualitária de terras."
      },
      {
        id: "c",
        text: "o confisco de latifúndios de multinacionais para doá-los integralmente a reservas extrativistas indígenas.",
        isCorrect: false,
        distractorRationale: "Incorreta. Pelo contrário: terras indígenas foram invadidas e cortadas por rodovias como a Transamazônica e Perimetral Norte, com etnocídio de povos originários."
      },
      {
        id: "d",
        text: "a diminuição da produção de alimentos no Brasil combinada com a fuga maciça de fazendeiros para centros urbanos.",
        isCorrect: false,
        distractorRationale: "Incorreta. A produção de commodities cresceu expressivamente e quem fugiu para as periferias foram os trabalhadores rurais despossuídos."
      },
      {
        id: "e",
        text: "a recusa do governo em conceder subsídios e créditos bancários aos grandes produtores agroindustriais.",
        isCorrect: false,
        distractorRationale: "Incorreta. O crédito rural subsidiado com juros reais negativos foi a principal ferramenta estatal de fomento aos grandes proprietários rurais."
      }
    ],
    detailedExplanation: {
      summary: "A modernização conservadora modernizou as forças produtivas do campo sem alterar as arcaicas relações sociais de posse da terra e exploração do trabalho.",
      stepByStep: [
        "Passo 1: Entender a fórmula de Barrington Moore adaptada ao Brasil: Modernizar a técnica sem reformar as estruturas sociais arcaicas.",
        "Passo 2: Os instrumentos do regime: Fundação da Embrapa (1973), incentivos fiscais da Sudam/Sudene e subsídios bancários do Banco do Brasil para o complexo soja-trigo.",
        "Passo 3: As consequências sociais: Aumento dramático da concentração fundiária, mecanização que substituiu mão de obra rural por máquinas, êxodo de mais de 30 milhões de brasileiros para favelas metropolitanas entre 1960 e 1980 e o nascimento do Movimento dos Trabalhadores Rurais Sem Terra (MST) em 1984.",
        "Conclusão: A alternativa A retrata fielmente essa contradição estrutural."
      ],
      coreConcept: "A modernização conservadora no campo transformou o latifúndio improdutivo tradicional no moderno agronegócio corporativo de exportação, sem democratizar o acesso à terra.",
      trapWarning: "Cuidado: O Estatuto da Terra de 1964 foi aprovado por Castelo Branco formalmente prometendo reforma agrária, mas na prática foi usado para cadastrar e controlar politicamente os camponeses."
    },
    commonTraps: ["Achar que a modernização agrícola da ditadura beneficiou democraticamente a agricultura familiar camponesa."],
    tags: ["modernizacao-conservadora", "agronegocio", "exodo-rural", "questao-agraria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-014",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "A 'Doutrina de Segurança Nacional' e os Povos Indígenas",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Relatório Figueiredo (elaborado em 1967 pelo procurador Jader de Figueiredo Correia) e as conclusões da Comissão Nacional da Verdade em 2014 documentaram que, sob a justificativa de 'integrar para não entregar' a Amazônia, a ditadura militar promoveu projetos desenvolvimentistas de grande escala (abertura de rodovias como a Transamazônica, construção de hidrelétricas como Balbina e Tucuruí e incentivo a mineradoras) que resultaram na morte de pelo menos 8.350 indígenas por massacres deliberados, introdução de epidemias, remoções forçadas e esbulho territorial.",
      source: "COMISSÃO NACIONAL DA VERDADE. Relatório Final: Violações de Direitos Humanos contra Povos Indígenas. Brasília, 2014."
    },
    prompt: "A política indigenista oficial praticada pelo Estado brasileiro durante a ditadura militar apoiava-se na premissa de que os povos originários eram:",
    options: [
      {
        id: "a",
        text: "obstáculos anacrônicos à integração territorial e à expansão econômica que deveriam ser assimilados compulsoriamente à sociedade nacional ou removidos de seus territórios ancestrais.",
        isCorrect: true,
        distractorRationale: "Correta. A ideologia do regime militar (expressa inclusive no Estatuto do Índio de 1973) considerava o indígena como 'relativamente incapaz' em trânsito transitório para a assimilação completa à comunhão nacional, tratando suas terras como 'vazios demográficos' a serem colonizados por frentes agropecuárias e de infraestrutura."
      },
      {
        id: "b",
        text: "cidadãos plenos de direitos com soberania jurídica inalienável para vetar qualquer obra de infraestrutura militar em suas florestas.",
        isCorrect: false,
        distractorRationale: "Incorreta. Os povos indígenas eram tutelados pelo Estado (pela Funai) e não tinham qualquer poder de veto sobre as obras do regime."
      },
      {
        id: "c",
        text: "aliados estratégicos soberanos treinados pelo Exército para comandar a guarda de fronteira internacional contra invasões da Guiana.",
        isCorrect: false,
        distractorRationale: "Incorreta. Trata-se de uma caracterização fantasiosa e historicamente incorreta."
      },
      {
        id: "d",
        text: "proprietários privados exclusivos das maiores mineradoras de ferro e bauxita instaladas na região de Carajás.",
        isCorrect: false,
        distractorRationale: "Incorreta. As mineradoras eram estatais (como a Companhia Vale do Rio Doce) ou transnacionais que esbulharam terras de povos indígenas."
      },
      {
        id: "e",
        text: "etnias com garantias de demarcação de 100% de seus territórios sagrados concluídas antes do início de qualquer obra rodoviária.",
        isCorrect: false,
        distractorRationale: "Incorreta. As rodovias rasgaram territórios indígenas sem qualquer demarcação prévia, dizimando etnias como os Waimiri-Atroari e os Cinta-Larga."
      }
    ],
    detailedExplanation: {
      summary: "A ditadura militar considerava os indígenas como obstáculos ao progresso e promoveu a política da assimilação forçada, resultando em etnocídio documentado pela Comissão da Verdade.",
      stepByStep: [
        "Passo 1: Compreender o lema geopolítico da ditadura: 'Integrar para não entregar' e 'Terra sem homens para homens sem terra'.",
        "Passo 2: O choque com as populações indígenas: A Amazônia não era um vazio demográfico; era habitada por centenas de etnias ancestrais que foram atropeladas por tratores, contágios induzidos de gripe e sarampo e bombas de fósforo.",
        "Passo 3: A doutrina integracionista: O objetivo era transformar o índio em trabalhador assalariado rural ou urbano, eliminando suas identidades culturais e comunitárias.",
        "Conclusão: A alternativa A explica com precisão o paradigma assimilationista autoritário da época."
      ],
      coreConcept: "A Constituição de 1988 (Artigos 231 e 232) foi uma ruptura histórica direta com a ditadura ao reconhecer, pela primeira vez, o direito originário dos povos indígenas às suas terras e a preservação permanente de suas culturas singulares.",
      trapWarning: "Cuidado: A morte de mais de 8 mil indígenas durante a ditadura militar foi formalmente reconhecida pelo Estado brasileiro no Relatório Final da Comissão Nacional da Verdade."
    },
    commonTraps: ["Achar que a violência da ditadura militar atingiu apenas guerrilheiros e militantes de esquerda urbanos."],
    tags: ["povos-indigenas", "etnocidio", "comissao-da-verdade", "doutrina-seguranca-nacional"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-015",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "A Crise da Dívida Externa, Hiperinflação e o Fim do Regime",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No final da década de 1970, o Federal Reserve dos Estados Unidos (liderado por Paul Volcker) elevou abruptamente as taxas de juros básicas norte-americanas para conter a inflação doméstica após o segundo choque do petróleo. Essa medida unilateral provocou um colapso financeiro nos países em desenvolvimento devedores, em especial na América Latina. A dívida externa brasileira, que era de cerca de US$ 3,5 bilhões em 1964, superou os US$ 100 bilhões em 1984, arrastando o país para a moratória, desvalorizações cambiais sucessivas, recessão econômica e a espiral incontrolável da hiperinflação dos anos 1980.",
      source: "ABREU, Marcelo de Paiva (Org.). A Ordem do Progresso: Dois Séculos de Política Econômica no Brasil. Rio de Janeiro: Elsevier, 2014 (adaptado)."
    },
    prompt: "A eclosão da crise da dívida externa e da hiperinflação nos últimos anos do governo militar demonstrou que a sustentabilidade do modelo econômico da ditadura dependia de:",
    options: [
      {
        id: "a",
        text: "um fluxo contínuo de empréstimos externos a juros flutuantes internacionais, cuja interrupção desnudou a vulnerabilidade estrutural da economia nacional e deslegitimou a autoridade política do regime perante a sociedade civil.",
        isCorrect: true,
        distractorRationale: "Correta. O regime militar financiou suas grandes obras de infraestrutura e o crescimento do PIB tomando empréstimos em dólares com taxas de juros variáveis; quando os EUA dispararam os juros, o serviço da dívida explodiu, o país ficou sem divisas, a inflação disparou para três dígitos ao ano e as próprias classes médias e empresariais romperam com a ditadura."
      },
      {
        id: "b",
        text: "reservas soberanas de ouro acumuladas que blindaram o Brasil contra qualquer impacto de oscilações cambiais no mercado de Wall Street.",
        isCorrect: false,
        distractorRationale: "Incorreta. O Brasil não possuía reservas soberanas suficientes e teve que recorrer humilhantemente ao FMI em 1982."
      },
      {
        id: "c",
        text: "um superávit industrial autossuficiente focado exclusivamente no comércio com a União Soviética e Cuba.",
        isCorrect: false,
        distractorRationale: "Incorreta. O Brasil militar era fortemente dependente do comércio e dos bancos privados dos Estados Unidos, Europa e Japão."
      },
      {
        id: "d",
        text: "empréstimos a juros zero garantidos pelo Banco dos BRICS para financiar a construção de ferrovias transoceânicas.",
        isCorrect: false,
        distractorRationale: "Incorreta. Os BRICS foram criados no século XXI, décadas após o término da ditadura."
      },
      {
        id: "e",
        text: "uma política de salários reais ascendentes que redistribuiu a totalidade dos lucros corporativos aos trabalhadores do campo.",
        isCorrect: false,
        distractorRationale: "Incorreta. A política do regime foi de arrocho salarial e concentração de renda, não redistribuição."
      }
    ],
    detailedExplanation: {
      summary: "A explosão dos juros internacionais em 1979 quebrou o modelo de endividamento da ditadura, mergulhando o Brasil na 'década perdida' dos anos 1980.",
      stepByStep: [
        "Passo 1: Entender o mecanismo de endividamento dos generais: Durante os governos Médici e Geisel, o Brasil contraiu dívidas bilionárias com juros flutuantes para bancar hidrelétricas, pontes e rodovias.",
        "Passo 2: O choque de juros de Volcker (1979): Os juros americanos saltaram para quase 20% ao ano, multiplicando instantaneamente a dívida de todos os países latino-americanos.",
        "Passo 3: A quebra da credibilidade do regime: Sem dólares para pagar a dívida e com a inflação escalando acima de 200% ao ano no governo Figueiredo, a ditadura perdeu seu último argumento de legitimação (a suposta competência econômica dos tecnocratas).",
        "Conclusão: A alternativa A explica com profundidade a derrocada financeira e política da ditadura."
      ],
      coreConcept: "A crise da dívida externa e a crise hiperinflacionária dos anos 1980 foram heranças estruturais diretas da política de endividamento e irresponsabilidade fiscal da ditadura militar.",
      trapWarning: "Cuidado: Muitos pensam que a inflação brasileira nasceu na Nova República; na verdade, o governo do general Figueiredo entregou o país em 1985 com uma inflação anual acumulada de 235%!"
    },
    commonTraps: ["Achar que a economia da ditadura militar foi financeiramente sólida até o final; o regime terminou falido e sob intervenção do FMI."],
    tags: ["divida-externa", "crise-anos-1980", "hiperinflacao", "decada-perdida"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-016",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História do Brasil",
    subtopic: "O Atentado do Riocentro (1981) e o Terrorismo da Linha-Dura",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na noite de 30 de abril de 1981, durante um show comemorativo do Dia do Trabalhador no Centro de Convenções do Riocentro (Rio de Janeiro), que reunia mais de 20 mil pessoas, uma bomba explodiu no colo do sargento Guilherme Pereira do Rosário dentro de um automóvel Puma no estacionamento, matando-o na hora e ferindo gravemente o capitão Wilson Luís Chaves Machado, ambos membros da seção de operações do DOI-CODI do I Exército. O inquérito militar inicial tentou forjar a versão de que os militares eram 'vítimas' de um ataque de extremistas de esquerda, mas as evidências comprovaram que o próprio aparato repressivo planejava um massacre terrorista de civis para culpar a oposição.",
      source: "GASPARI, Elio. A Ditadura Acabada. Rio de Janeiro: Intrínseca, 2016 (adaptado)."
    },
    prompt: "O atentado do Riocentro constituiu um episódio paradigmático da transição brasileira porque revelou:",
    options: [
      {
        id: "a",
        text: "o desespero da linha-dura militar clandestina, que recorria ao terrorismo de Estado para tentar provocar o recrudescimento autoritário e abortar o processo de abertura política.",
        isCorrect: true,
        distractorRationale: "Correta. A linha-dura dos porões da repressão não aceitava a perda de poder e a abertura do regime; planejaram detonar bombas em um show de jovens e trabalhadores para semear o pânico, culpar a esquerda e justificar um novo golpe militar linha-dura com cancelamento da anistia."
      },
      {
        id: "b",
        text: "o total desmantelamento pacífico de todos os órgãos de inteligência do Exército ordenado pelo presidente Figueiredo no dia seguinte ao evento.",
        isCorrect: false,
        distractorRationale: "Incorreta. O governo Figueiredo abafou as investigações e promoveu os envolvidos, o que levou à demissão indignada do general Golbery do Couto e Silva da Casa Civil."
      },
      {
        id: "c",
        text: "uma ação coordenada de forças policiais internacionais da Interpol para libertar presos políticos detidos no Rio de Janeiro.",
        isCorrect: false,
        distractorRationale: "Incorreta. O atentado foi planejado e executado por oficiais brasileiros do DOI-CODI."
      },
      {
        id: "d",
        text: "a adesão entusiasmada da classe trabalhadora aos ideais monarquistas difundidos pelos militares da Marinha.",
        isCorrect: false,
        distractorRationale: "Incorreta. Afirmação anacrônica e descabida."
      },
      {
        id: "e",
        text: "o sucesso da política de desarmamento geral da população implementada pelo Ministério da Justiça em 1981.",
        isCorrect: false,
        distractorRationale: "Incorreta. O episódio não teve qualquer relação com campanhas de desarmamento civil."
      }
    ],
    detailedExplanation: {
      summary: "O atentado do Riocentro desmascarou o terrorismo clandestino da linha-dura militar e acelerou a perda de legitimidade moral do governo Figueiredo.",
      stepByStep: [
        "Passo 1: Entender a série de atentados terroristas da extrema-direita em 1980-1981: Bombas em bancas de jornal que vendiam imprensa alternativa e carta-bomba na sede da Ordem dos Advogados do Brasil (OAB) que matou a secretária Lyda Monteiro da Silva.",
        "Passo 2: O plano do Riocentro: Colocar bombas na caixa de força e no auditório lotado com 20 mil jovens para causar pânico coletivo e centenas de mortos pisoteados, forjando panfletos atribuindo a autoria a grupos de esquerda.",
        "Passo 3: O acidente revelador: A bomba explodiu prematuramente no colo do sargento do DOI-CODI dentro do carro, provando que o terrorismo vinha dos próprios órgãos oficiais de segurança.",
        "Passo 4: A reação governamental: Em vez de punir os culpados, Figueiredo acobertou o caso em inquérito fraudulento, acelerando o esgotamento moral da ditadura perante toda a sociedade.",
        "Conclusão: A alternativa A traduz com clareza o objetivo político da linha-dura."
      ],
      coreConcept: "O atentado do Riocentro provou que o terrorismo no final da ditadura era praticado por setores do próprio aparato de segurança do Estado para impedir a democracia.",
      trapWarning: "Cuidado: As conclusões da Comissão Nacional da Verdade e do Ministério Público Federal na década de 2010 denunciaram formalmente os militares envolvidos no Riocentro por tentativa de homicídio e associação criminosa armada."
    },
    commonTraps: ["Acreditar na versão forjada pelo inquérito militar da época de que a bomba foi colocada por terroristas de esquerda."],
    tags: ["riocentro", "terrorismo-de-estado", "linha-dura", "abertura-politica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-017",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "A Imprensa Alternativa e o Combate à Censura Oficial",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante os anos de chumbo e a vigência da censura prévia, periódicos independentes como 'O Pasquim', 'Opinião', 'Movimento' e 'Em Tempo' protagonizaram o fenômeno da chamada 'imprensa alternativa'. Utilizando o humor iconoclástico, a sátira mordaz, charges e reportagens investigativas corajosas, esses jornais conseguiam comunicar aquilo que os grandes conglomerados de mídia — submetidos a censores de plantão em suas redações ou alinhados ao regime — não noticiavam, enfrentando apreensões sistemáticas de edições, bombas em bancas e prisões de jornalistas.",
      source: "KUCINSKI, Bernardo. Jornalistas e Revolucionários: Nos Tempos da Imprensa Alternativa. São Paulo: Edusp, 2001."
    },
    prompt: "O papel desempenhado pela imprensa alternativa durante o regime militar brasileiro destacou-se por:",
    options: [
      {
        id: "a",
        text: "construir canais contra-hegemônicos de informação e resistência que desafiaram a narrativa oficial do regime, politizando setores médios e desvelando as contradições do autoritarismo.",
        isCorrect: true,
        distractorRationale: "Correta. A imprensa alternativa rompeu o monopólio da informação oficial, usou a linguagem popular e o humor para ridicularizar os generais e disseminou denúncias de tortura, corrupção em obras faraônicas e desigualdade social que a censura tentava ocultar."
      },
      {
        id: "b",
        text: "atuar como porta-voz exclusivo dos comunicados oficiais do Conselho de Segurança Nacional e do Ministério da Justiça.",
        isCorrect: false,
        distractorRationale: "Incorreta. Quem cumpria esse papel era a imprensa governista ou oficial, não a imprensa alternativa de oposição."
      },
      {
        id: "c",
        text: "defender a censura prévia irrestrita como mecanismo essencial para a preservação dos valores da moral tradicional cristã.",
        isCorrect: false,
        distractorRationale: "Incorreta. A imprensa alternativa lutava ferozmente pelo fim de toda e qualquer censura."
      },
      {
        id: "d",
        text: "financiar campanhas eleitorais para a eleição unânime de parlamentares ligados à Arena no interior do país.",
        isCorrect: false,
        distractorRationale: "Incorreta. A imprensa alternativa apoiava as candidaturas de oposição do MDB e movimentos sociais."
      },
      {
        id: "e",
        text: "limitar-se à divulgação de receitas culinárias e notícias sobre campeonatos de futebol de várzea sem teor político.",
        isCorrect: false,
        distractorRationale: "Incorreta. Quando a censura cortava matérias em jornais tradicionais (como o Estado de S. Paulo), publicavam-se receitas ou versos de Camões, mas a imprensa alternativa tinha teor político explícito e combativo."
      }
    ],
    detailedExplanation: {
      summary: "A imprensa alternativa (O Pasquim, Movimento, etc.) articulou humor, crítica política e jornalismo investigativo para resistir à censura da ditadura militar.",
      stepByStep: [
        "Passo 1: Compreender o papel de O Pasquim (1969): Criado por Jaguar, Millôr Fernandes, Ziraldo e Tarso de Castro, alcançou tiragens de mais de 200 mil exemplares semanais com entrevistas antológicas (como a de Leila Diniz) e humor irreverente.",
        "Passo 2: A perseguição estatal: Redatores foram presos em massa no final de 1970, mas o jornal continuou circulando graças à solidariedade de intelectuais e leitores.",
        "Passo 3: A função democrática: Esses jornais foram vitrines de debates sobre marxismo, feminismo, questão agrária, ecologia e novos movimentos sindicais.",
        "Conclusão: A alternativa A capta a essência dessa resistência comunicacional."
      ],
      coreConcept: "A imprensa alternativa demonstrou que a disputa pela hegemonia cultural e informativa é decisiva para erodir a sustentação de regimes autoritários.",
      trapWarning: "Cuidado: A grande imprensa (Globo, Folha, Estadão) teve posturas complexas — apoiou o golpe de 1964, mas sofreu censura e mais tarde aderiu à abertura ou às Diretas Já em momentos diferentes."
    },
    commonTraps: ["Confundir a imprensa alternativa independente com os grandes veículos de comunicação comercial."],
    tags: ["imprensa-alternativa", "o-pasquim", "censura", "resistencia-democratica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-018",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "A 'Operação Condor' e o Terrorismo Transnacional no Cone Sul",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na década de 1970, as ditaduras militares do Cone Sul (Brasil, Argentina, Chile, Uruguai, Paraguai e Bolívia) formalizaram uma rede secreta de cooperação de inteligência e repressão clandestina denominada 'Operação Condor'. Apoiada tecnicamente pela CIA norte-americana, a aliança permitia que agentes de um país operassem livremente no território de outro para monitorar, sequestrar, torturar, trocar prisioneiros políticos e executar opositores exilados sem qualquer respeito às fronteiras nacionais e ao direito de asilo.",
      source: "DINGES, John. Os Anos do Condor: Como Pinochet e Seus Aliados Levaram o Terrorismo a Três Continentes. São Paulo: Companhia das Letras, 2005."
    },
    prompt: "A existência e o funcionamento da Operação Condor evidenciam que o autoritarismo militar na América Latina caracterizou-se por:",
    options: [
      {
        id: "a",
        text: "uma articulação repressiva transnacional que ignorava a soberania territorial e o direito internacional humanitário para perseguir e exterminar opositores políticos além das fronteiras nacionais.",
        isCorrect: true,
        distractorRationale: "Correta. A Operação Condor demonstrou que as ditaduras latino-americanas compartilhavam a mesma Doutrina de Segurança Nacional e operavam como um consórcio transfronteiriço de terrorismo de Estado clandestino, realizando operações conjuntas de sequestro e eliminação de refugiados políticos."
      },
      {
        id: "b",
        text: "um tratado pacífico exclusivo de livre comércio agrícola que inspirou diretamente a fundação do Mercosul na década seguinte.",
        isCorrect: false,
        distractorRationale: "Incorreta. A Operação Condor era uma rede clandestina de cooperação policial-militar e repressiva, e não um tratado de livre comércio."
      },
      {
        id: "c",
        text: "uma tentativa bem-sucedida das Forças Armadas latino-americanas de expulsar as embaixadas dos Estados Unidos do continente.",
        isCorrect: false,
        distractorRationale: "Incorreta. A Operação Condor contava com o apoio explícito, treinamento e equipamentos de comunicação fornecidos pela inteligência norte-americana."
      },
      {
        id: "d",
        text: "um programa humanitário de abrigo e concessão de vistos diplomáticos a refugiados de guerra de outros continentes.",
        isCorrect: false,
        distractorRationale: "Incorreta. Tratava-se exatamente do oposto: a destruição do direito de asilo político e sequestro de refugiados."
      },
      {
        id: "e",
        text: "um plano militar conjunto para invadir os países do bloco soviético durante a crise dos mísseis em Cuba.",
        isCorrect: false,
        distractorRationale: "Incorreta. O foco era estritamente a repressão a cidadãos latino-americanos no Cone Sul."
      }
    ],
    detailedExplanation: {
      summary: "A Operação Condor foi uma aliança terrorista transnacional entre as ditaduras do Cone Sul para sequestrar, torturar e assassinar opositores além de suas fronteiras.",
      stepByStep: [
        "Passo 1: Entender a escala transfronteiriça: Opositores brasileiros que se refugiavam em Montevidéu ou Buenos Aires eram sequestrados por militares locais e entregues ilegalmente aos agentes do DOI-CODI brasileiro (como ocorreu no caso do sequestro dos uruguaios Lilian Celiberti e Universindo Diaz em Porto Alegre, 1978).",
        "Passo 2: O apoio geopolítico: Documentos desclassificados dos EUA comprovaram que a diplomacia de Henry Kissinger tinha conhecimento prévio e chancelou as ações clandestinas.",
        "Passo 3: A gravidade jurídica: Representa violação massiva do Direito Internacional Público e do princípio do não-devolução de refugiados (*non-refoulement*).",
        "Conclusão: A alternativa A define com precisão histórica e conceitual a natureza da Operação Condor."
      ],
      coreConcept: "A Operação Condor provou que o terrorismo de Estado nas ditaduras do Cone Sul não conhecia fronteiras éticas ou geográficas.",
      trapWarning: "Cuidado: A descoberta dos 'Arquivos do Terror' no Paraguai em 1992 por Martín Almada forneceu as provas documentais definitivas da existência da Operação Condor."
    },
    commonTraps: ["Achar que as ditaduras do Cone Sul agiam isoladamente sem coordenação internacional sistemática entre seus serviços secretos."],
    tags: ["operacao-condor", "cone-sul", "guerra-fria", "terrorismo-transnacional"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-019",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "História do Brasil",
    subtopic: "A Guerrilha Urbana e as Ações Armadas de Esquerda",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Após o fechamento total dos canais de participação política pelo AI-5 em dezembro de 1968, frações dissidentes de organizações de esquerda optaram pela luta armada urbana. Grupos como a Ação Libertadora Nacional (ALN), liderada por Carlos Marighella, e a Vanguarda Popular Revolucionária (VPR), liderada por Carlos Lamarca, realizaram assaltos a bancos ('expropriações financeiras') e sequestros de diplomatas estrangeiros (como o embaixador norte-americano Charles Elbrick em setembro de 1969) para exigir a libertação de presos políticos submetidos a torturas nos presídios da ditadura.",
      source: "REIS FILHO, Daniel Aarão. Ditadura e Democracia no Brasil. Rio de Janeiro: Zahar, 2014."
    },
    prompt: "A opção de setores oposicionistas pela luta armada urbana no Brasil pós-1968 decorreu fundamentalmente:",
    options: [
      {
        id: "a",
        text: "do estrangulamento autoritário das vias pacíficas e institucionais de oposição política imposto pelo AI-5, somado à influência da Revolução Cubana na crença de que um foco de vanguarda catalisaria a insurreição popular.",
        isCorrect: true,
        distractorRationale: "Correta. Com a censura, a cassação de mandatos, a proscrição de sindicatos e o fechamento do Congresso, jovens militantes e intelectuais concluíram que a via democrática estava totalmente bloqueada, inspirando-se no foquismo guevarista para tentar derrubar o regime pelas armas, embora sem alcançar inserção de massas no operariado."
      },
      {
        id: "b",
        text: "do apoio financeiro e militar ostensivo fornecido pela maioria esmagadora das bancadas partidárias da Arena no Congresso Nacional.",
        isCorrect: false,
        distractorRationale: "Incorreta. A Arena era o partido de sustentação incondicional dos generais contra a guerrilha."
      },
      {
        id: "c",
        text: "da vitória prévia de partidos revolucionários socialistas nas eleições presidenciais diretas daquele mesmo ano.",
        isCorrect: false,
        distractorRationale: "Incorreta. Não havia eleições diretas e os partidos de esquerda estavam na clandestinidade."
      },
      {
        id: "d",
        text: "de uma exigência formulada pelo Fundo Monetário Internacional para acelerar o pagamento da dívida externa brasileira.",
        isCorrect: false,
        distractorRationale: "Incorreta. O FMI não apoiava movimentos revolucionários de esquerda."
      },
      {
        id: "e",
        text: "da decisão pacífica de oficiais generais em entregar quartéis e armamentos aos sindicatos grevistas.",
        isCorrect: false,
        distractorRationale: "Incorreta. As Forças Armadas responderam à guerrilha com perseguição implacável, tortura e assassinatos."
      }
    ],
    detailedExplanation: {
      summary: "A guerrilha urbana emergiu como resposta ao fechamento radical do espaço público e político democrático pelo AI-5, inspirada no imaginário revolucionário dos anos 1960.",
      stepByStep: [
        "Passo 1: O dilema da oposição em 1968: As passeatas foram reprimidas com cavalaria e armas de fogo, o parlamento foi fechado e o habeas corpus extinto.",
        "Passo 2: A teoria do foquismo armado: Marighella (*Mini-manual do Guerrilheiro Urbano*) acreditava que ações armadas audaciosas desmascarariam a violência do regime e provocariam um levante popular.",
        "Passo 3: Os limites do movimento: Embora tenham conseguido libertar presos políticos em troca de diplomatas sequestrados, as organizações armadas ficaram isoladas da grande massa da classe trabalhadora e foram exterminadas pela repressão entre 1969 e 1973.",
        "Conclusão: A alternativa A sintetiza com precisão as causas históricas e ideológicas do fenômeno."
      ],
      coreConcept: "A guerrilha urbana no Brasil foi minoritária e isolada, mas sua existência foi instrumentalizada pelo regime militar para justificar a expansão da máquina de terror e tortura de Estado.",
      trapWarning: "Cuidado: A morte de Carlos Marighella em emboscada em São Paulo (novembro de 1969) e de Carlos Lamarca na Bahia (setembro de 1971) desarticularam os principais focos da guerrilha urbana."
    },
    commonTraps: ["Achar que a guerrilha armada começou antes do golpe; a luta armada urbana só se generalizou a partir do endurecimento do AI-5 no final de 1968."],
    tags: ["guerrilha-urbana", "marighella", "ai-5", "aln-vpr"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-020",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "História do Brasil",
    subtopic: "A Censura Moralista e o Papel da Televisão nos Anos 1970",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A ditadura brasileira investiu pesadamente na modernização das telecomunicações: criou a Embratel em 1965, implantou o sistema de micro-ondas e satélites e fomentou a formação de uma rede nacional de televisão aberta (a Rede Globo de Televisão). Esse projeto articulava duas dimensões: a construção de uma 'identidade nacional' integradora em consonância com a doutrina geopolítica do regime, e o exercício de uma censura minuciosa que vetava não apenas temas políticos subversivos, mas qualquer representação de costumes, sexualidade ou crítica familiar considerada contrária à 'moral e aos bons costumes da família brasileira'.",
      source: "ORTIZ, Renato. A Moderna Tradição Brasileira: Cultura Brasileira e Indústria Cultural. São Paulo: Brasiliense, 1988."
    },
    prompt: "A modernização tecnológica dos meios de comunicação eletrônicos durante o regime militar teve como papel estratégico:",
    options: [
      {
        id: "a",
        text: "integrar o território nacional sob um fluxo centralizado de informações e entretenimento, combinando modernização capitalista de consumo com vigilância ideológica e censura de costumes.",
        isCorrect: true,
        distractorRationale: "Correta. A ditadura percebeu que precisava de uma rede televisiva nacional para integrar simbolicamente o país (o 'Brasil grande'), promover o consumo de bens industriais e transmitir uma imagem de harmonia e progresso ordeiro, submetendo novelas, jornais e programas ao crivo estrito dos censores da DCDP em Brasília."
      },
      {
        id: "b",
        text: "garantir que emissoras estatais exibissem exclusivamente peças teatrais soviéticas sem intervalos comerciais.",
        isCorrect: false,
        distractorRationale: "Incorreta. O modelo fomentado pelo regime foi o da televisão comercial privada sustentada por anunciantes multinacionais."
      },
      {
        id: "c",
        text: "estimular o debate livre sobre a descriminalização do aborto e direitos reprodutivos nos horários nobres de audiência.",
        isCorrect: false,
        distractorRationale: "Incorreta. Esses temas eram sumariamente censurados e proibidos pela censura moralista do regime."
      },
      {
        id: "d",
        text: "descentralizar a produção televisiva em cooperativas camponesas autônomas no sertão nordestino.",
        isCorrect: false,
        distractorRationale: "Incorreta. A produção foi hiperconcentrada no eixo Rio-São Paulo sob grandes conglomerados empresariais."
      },
      {
        id: "e",
        text: "proibir o uso de televisores em residências particulares para forçar a população a comparecer a comícios da Arena.",
        isCorrect: false,
        distractorRationale: "Incorreta. O regime incentivou ativamente a compra a prazo de televisores para expandir a audiência da propaganda ufanista."
      }
    ],
    detailedExplanation: {
      summary: "O regime militar financiou a infraestrutura técnica das telecomunicações para criar um mercado cultural integrado nacional e difundir a ideologia do 'Brasil potência' sob censura prévia.",
      stepByStep: [
        "Passo 1: A visão geopolítica de integração: Antes dos anos 1960, o Brasil era um arquipélago de emissoras de rádio e TV regionais desarticuladas. A ditadura criou a infraestrutura de satélites e micro-ondas da Embratel para unificar o território.",
        "Passo 2: A parceria com o capital privado: O regime apoiou o crescimento da Rede Globo como modelo de excelência técnica e alinhamento editorial.",
        "Passo 3: A censura de costumes e política: Capítulos inteiros de telenovelas (como *Roque Santeiro* em 1975) foram vetados na íntegra na véspera da estreia por afrontarem a moral conservadora ou tocarem em temas sociais sensíveis.",
        "Conclusão: A alternativa A expõe a duplicidade entre modernização tecnológica e controle autoritário."
      ],
      coreConcept: "A indústria cultural brasileira moderna nasceu e se consolidou sob a égide e o fomento modernizador da ditadura civil-militar.",
      trapWarning: "Cuidado: A censura da ditadura não era apenas política ('anti-esquerda'); ela era profundamente moralista, censurando biquínis, beijos, menções a divórcio e gírias juvenis."
    },
    commonTraps: ["Achar que a censura militar só fiscalizava discursos políticos em jornais, esquecendo a censura em novelas e programas de auditório."],
    tags: ["industria-cultural", "televisao", "censura-de-costumes", "embratel"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-021",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "A 'Marcha dos Cem Mil' e a Morte de Edson Luís em 1968",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 28 de março de 1968, o estudante secundarista paraense Edson Luís de Lima Souto, de apenas 18 anos, foi assassinado a queima-roupa pela Polícia Militar durante um protesto contra o preço e a má qualidade das refeições no restaurante estudantil do Calabouço, no Rio de Janeiro. Seu corpo foi levado por estudantes para a Assembleia Legislativa, transformando o velório em comoção cívica nacional e deflagrando uma onda de protestos de rua que culminou na emblemática 'Passeata dos Cem Mil' em junho daquele mesmo ano.",
      source: "VENTURA, Zuenir. 1968: O Ano que Não Terminou. Rio de Janeiro: Nova Fronteira, 1988."
    },
    prompt: "O assassinato do estudante Edson Luís no restaurante do Calabouço constituiu um catalisador histórico para a oposição porque:",
    options: [
      {
        id: "a",
        text: "aglutinou estudantes, artistas, intelectuais e setores da classe média em manifestações massivas que desafiaram abertamente a legitimidade e a violência do regime militar antes do fechamento do AI-5.",
        isCorrect: true,
        distractorRationale: "Correta. A morte trágica de um estudante pobre secundarista chocou o país e transformou a revolta estudantil em um movimento político amplo de contestação cívica com apoio da classe média carioca e nacional, culminando na Passeata dos Cem Mil."
      },
      {
        id: "b",
        text: "provocou a renúncia imediata do general Costa e Silva e a entrega das chaves do palácio presidencial aos líderes da UNE.",
        isCorrect: false,
        distractorRationale: "Incorreta. Costa e Silva respondeu a essa onda de protestos endurecendo o regime e promulgando o AI-5 meses depois."
      },
      {
        id: "c",
        text: "foi apoiado por editoriais dos principais jornais do país que pediam o fechamento de todas as universidades públicas brasileiras.",
        isCorrect: false,
        distractorRationale: "Incorreta. A comoção com a morte de Edson Luís gerou solidariedade da imprensa liberal e de grandes personalidades públicas aos estudantes."
      },
      {
        id: "d",
        text: "resultou no desarmamento definitivo da Polícia Militar em todo o território nacional.",
        isCorrect: false,
        distractorRationale: "Incorreta. Pelo contrário: as polícias estaduais foram militarizadas e integradas ao aparelho de repressão do Exército."
      },
      {
        id: "e",
        text: "levou os estudantes a desistirem de qualquer atividade política para apoiarem as candidaturas da Arena governista.",
        isCorrect: false,
        distractorRationale: "Incorreta. O movimento estudantil tornou-se um dos principais focos de resistência contra a ditadura."
      }
    ],
    detailedExplanation: {
      summary: "A morte de Edson Luís em março de 1968 incendiou a oposição estudantil e civil, servindo de estopim para as grandes passeatas que marcaram o ano de 1968 no Brasil.",
      stepByStep: [
        "Passo 1: Compreender o evento do Calabouço: Uma reivindicação cotidiana básica (comida acessível para estudantes pobres) foi reprimida com tiros de arma de fogo pela PM.",
        "Passo 2: A frase histórica: O cartaz pintado pelos estudantes durante o cortejo: 'Mataram um estudante... E se fosse seu filho?'.",
        "Passo 3: A escalada dos protestos: A Passeata dos Cem Mil (junho de 1968) reuniu freiras, padres, artistas (como Nara Leão e Caetano Veloso) e a classe média, demonstrando o isolamento social da ditadura.",
        "Passo 4: A reação da linha-dura: A incapacidade de controlar as ruas levou os generais a promulgarem o AI-5 em dezembro de 1968, fechando as brechas de manifestação pública.",
        "Conclusão: A alternativa A retrata fielmente a dinâmica histórica de 1968."
      ],
      coreConcept: "A violência contra Edson Luís quebrou a complacência da classe média com a ditadura, unificando a oposição urbana contra o arbítrio militar.",
      trapWarning: "Cuidado com as datas: Edson Luís foi assassinado no início de 1968; o AI-5 veio no final de 1968 justamente para calar a onda de protestos aberta pela sua morte."
    },
    commonTraps: ["Achar que a Passeata dos Cem Mil ocorreu durante os anos de chumbo pós-AI-5; ela ocorreu antes, durante a vigência do AI-2/AI-3."],
    tags: ["edson-luis", "calabouco", "passeata-dos-cem-mil", "1968"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-022",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "A Campanha Ufanista e a Utilização Política da Copa de 1970",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante o governo do general Emílio Garrastazu Médici (1969-1974), a Assessoria Especial de Relações Públicas (AERP) desenvolveu uma sofisticada máquina de propaganda ufanista. Slogans como 'Brasil: Ame-o ou Deixe-o' e 'Ninguém Mais Segura Este País' inundavam os rádios e as telas de cinema. A conquista do tricampeonato mundial de futebol no México em 1970 foi explorada politicamente com intensidade máxima: a canção 'Pra Frente Brasil' tornou-se quase um hino oficial, e os jogadores foram recebidos com honras de Estado em Brasília para transferir o prestígio esportivo de Pelé e Tostão para a imagem do ditador.",
      source: "FICO, Carlos. Reinventando o Otimismo: Ditadura, Propaganda e Imaginário Social no Brasil. Rio de Janeiro: FGV, 1997."
    },
    prompt: "A intensa exploração política da vitória da seleção brasileira de futebol na Copa de 1970 pelo governo Médici visava:",
    options: [
      {
        id: "a",
        text: "construir uma cortina de fumaça ufanista que fomentasse o orgulho nacionalista e ofuscasse aos olhos da opinião pública a violência sistemática dos porões da tortura e a censura política.",
        isCorrect: true,
        distractorRationale: "Correta. O ufanismo esportivo e econômico serviu para criar um clima de euforia e consenso coletivo, deslegitimando a oposição (que era enquadrada pelo slogan 'Ame-o ou Deixe-o' como antipatriótica) enquanto os opositores eram clandestinamente torturados e mortos no DOI-CODI."
      },
      {
        id: "b",
        text: "estimular a criação de sindicatos operários independentes em todas as capitais das regiões Norte e Nordeste.",
        isCorrect: false,
        distractorRationale: "Incorreta. O governo Médici sufocou completamente o movimento sindical e prendeu lideranças operárias."
      },
      {
        id: "c",
        text: "anunciar a revogação imediata do AI-5 e a restauração do direito de greve para os trabalhadores da indústria metalúrgica.",
        isCorrect: false,
        distractorRationale: "Incorreta. O AI-5 vigorou plenamente ao longo de todo o governo Médici, sendo revogado apenas em 1978 no final do governo Geisel."
      },
      {
        id: "d",
        text: "provocar uma ruptura diplomática formal com os Estados Unidos e a OEA em nome da solidariedade pan-africana.",
        isCorrect: false,
        distractorRationale: "Incorreta. O regime manteve alinhamento ideológico e econômico com o bloco ocidental liderado por Washington."
      },
      {
        id: "e",
        text: "transferir os lucros da venda de ingressos dos estádios mexicanos para o fundo de apoio à reforma agrária no Nordeste.",
        isCorrect: false,
        distractorRationale: "Incorreta. Os lucros da Copa pertenciam à Fifa e o governo não realizou reforma agrária redistributiva."
      }
    ],
    detailedExplanation: {
      summary: "A AERP utilizou a Copa de 1970 e o tricampeonato de futebol para criar uma atmosfera ufanista que encobriu o terrorismo de Estado e a repressão dos anos de chumbo.",
      stepByStep: [
        "Passo 1: Entender o governo Médici: O período mais violento e repressor do regime coincidiu com os índices mais altos de crescimento do PIB ('milagre') e a vitória esportiva de 1970.",
        "Passo 2: A máquina de propaganda da AERP: Produção profissional de jingles ufanistas ('Este é um país que vai pra frente...'), slogans agressivos contra dissidentes ('Brasil: ame-o ou deixe-o').",
        "Passo 3: A apropriação do futebol: O general Médici fazia questão de aparecer em fotos oficiais com um radinho de pilha no ouvido torcendo no Maracanã, construindo uma imagem de líder popular e simples.",
        "Conclusão: A alternativa A desvela com precisão o uso ideológico do esporte como ferramenta de consenso autoritário."
      ],
      coreConcept: "A propaganda ufanista opera mobilizando afetos e paixões legítimas da população (como o amor ao futebol) para legitimar projetos políticos ilegítimos e mascarar a violência de Estado.",
      trapWarning: "Cuidado: Jogadores como Tostão e o técnico comunista João Saldanha (demitido às vésperas da Copa por não aceitar interferências de Médici na escalação) demonstraram que a adesão ao ufanismo não foi unânime no meio esportivo."
    },
    commonTraps: ["Achar que a propaganda ufanista não teve impacto na sociedade; ela conseguiu gerar ampla adesão e alienação entre setores populares e classes médias."],
    tags: ["copa-1970", "governo-medici", "ufanismo", "propaganda-politica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-023",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "A Crise da Ditadura e o 'Pacote de Abril' de 1977",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1º de abril de 1977, o presidente Ernesto Geisel colocou o Congresso Nacional em recesso compulsório por duas semanas e baixou por decreto um conjunto de medidas conhecido como o 'Pacote de Abril'. Diante do avanço eleitoral do MDB, o pacote alterou casuisticamente as regras políticas: criou a figura do 'senador biônico' (um terço dos senadores seria eleito indiretamente pelas assembleias estaduais controladas pela Arena), aumentou o mandato presidencial de cinco para seis anos, manteve eleições indiretas para governadores e estendeu a Lei Falcão (que proibia debates e restringia a propaganda política no rádio e na TV apenas à leitura do currículo do candidato) às eleições gerais.",
      source: "KINZO, Maria D'Alva. Oposição e Eleições no Brasil. São Paulo: Vértice, 1988."
    },
    prompt: "As medidas autoritárias instituídas pelo 'Pacote de Abril' de 1977 demonstraram que o regime militar:",
    options: [
      {
        id: "a",
        text: "recorria à manipulação casuística das regras eleitorais para conter o crescimento legítimo da oposição nas urnas e garantir artificialmente a maioria parlamentar governista.",
        isCorrect: true,
        distractorRationale: "Correta. Quando percebeu que as urnas dariam vitória ao MDB em eleições abertas, o governo Geisel simplesmente fechou o Congresso e mudou a lei eleitoral para inventar senadores biônicos não-eleitos e manter o controle do Senado e do Colégio Eleitoral, revelando os limites autoritários de sua suposta 'distensão'."
      },
      {
        id: "b",
        text: "atendia a uma exigência da bancada do MDB para acelerar a extinção do bipartidarismo e legalizar o Partido Comunista.",
        isCorrect: false,
        distractorRationale: "Incorreta. O MDB se opôs frontalmente ao Pacote de Abril, que foi imposto de forma ditatorial contra a oposição."
      },
      {
        id: "c",
        text: "restabelecia a eleição direta para presidente da República a partir daquele mesmo ano legislativo.",
        isCorrect: false,
        distractorRationale: "Incorreta. O pacote manteve eleições estritamente indiretas e ainda aumentou o mandato de Geisel/Figueiredo para 6 anos."
      },
      {
        id: "d",
        text: "autorizava debates livres e ao vivo entre candidatos presidenciais em horário nobre de televisão.",
        isCorrect: false,
        distractorRationale: "Incorreta. A Lei Falcão ampliada pelo pacote proibia qualquer debate e permitia apenas uma foto estática e leitura de currículo."
      },
      {
        id: "e",
        text: "extinguia o mandato de todos os governadores da Arena para nomear generais do Exército como prefeitos municipais.",
        isCorrect: false,
        distractorRationale: "Incorreta. O pacote manteve e protegeu os governadores da Arena criando o mecanismo dos senadores biônicos."
      }
    ],
    detailedExplanation: {
      summary: "O 'Pacote de Abril' de 1977 foi o mais emblemático casuísmo eleitoral da ditadura, criando senadores biônicos para impedir a vitória parlamentar da oposição.",
      stepByStep: [
        "Passo 1: Entender o temor do regime: Após o MDB vencer as eleições para o Senado em 1974 em 16 dos 22 estados, a projeção indicava que em 1978 o MDB conquistaria a maioria absoluta do Senado.",
        "Passo 2: O fechamento do Congresso: Geisel usou os poderes do AI-5 para fechar o Congresso e editar o Pacote de Abril por decreto.",
        "Passo 3: As invenções autoritárias: 1) Senador biônico (um terço do Senado sem voto popular); 2) Mandato presidencial estendido para 6 anos; 3) Quórum para emendas constitucionais reduzido para maioria absoluta (facilitando a aprovação de reformas do governo).",
        "Conclusão: A alternativa A traduz com perfeição o casuísmo como método de sobrevivência da ditadura."
      ],
      coreConcept: "Casuísmo eleitoral é a alteração oportunista das leis eleitorais pelos governantes com o propósito deliberado de fraudar a soberania do voto popular.",
      trapWarning: "Cuidado: A palavra 'biônico' entrou para o vocabulário político brasileiro a partir de 1977 para designar qualquer autoridade política ungida por indicação sem voto do povo."
    },
    commonTraps: ["Achar que o governo Geisel promoveu uma abertura sem recuos autoritários; o Pacote de Abril foi um dos atos mais despóticos do período."],
    tags: ["pacote-de-abril", "governo-geisel", "senador-bionico", "casuismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-024",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "A Teologia da Libertação e a Resistência das Comunidades Eclesiais de Base (CEBs)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A partir das conferências episcopais de Medellín (1968) e Puebla (1979) e sob o impacto da Teologia da Libertação formulada por teólogos como Gustavo Gutiérrez e Leonardo Boff, parcelas expressivas da Igreja Católica brasileira romperam com o conservadorismo de 1964. Sob a liderança de bispos corajosos como Dom Paulo Evaristo Arns (São Paulo), Dom Hélder Câmara (Olinda e Recife) e Dom Pedro Casaldáliga (São Félix do Araguaia), a Igreja converteu paróquias periféricas e as Comunidades Eclesiais de Base (CEBs) em trincheiras de denúncia da tortura, defesa dos direitos humanos (como no projeto ecumênico 'Brasil: Nunca Mais') e apoio a greves operárias e camponesas.",
      source: "MAINWARING, Scott. A Igreja Católica e a Política no Brasil (1916-1985). São Paulo: Brasiliense, 1989."
    },
    prompt: "A transformação da postura de setores da Igreja Católica durante a ditadura militar destacou-se pela chamada 'opção preferencial pelos pobres', que significou:",
    options: [
      {
        id: "a",
        text: "articular a mensagem evangélica à luta concreta contra a injustiça social e o autoritarismo, acolhendo perseguidos políticos e organizando comunidades periféricas em defesa dos direitos humanos.",
        isCorrect: true,
        distractorRationale: "Correta. A Teologia da Libertação e as CEBs aproximaram o clero progressista das massas populares exploradas, transformando a fé em ferramenta de conscientização crítica, denúncia da violência de Estado e criação de redes de solidariedade aos perseguidos da ditadura."
      },
      {
        id: "b",
        text: "apoiar a expulsão de camponeses sem-terra para viabilizar a criação de monoculturas exportadoras de algodão.",
        isCorrect: false,
        distractorRationale: "Incorreta. A Comissão Pastoral da Terra (CPT), criada por bispos em 1975, lutava exatamente ao lado dos posseiros e contra os latifúndios."
      },
      {
        id: "c",
        text: "defender a reintrodução da Inquisição canônica para perseguir dissidentes que escutassem discos de música popular.",
        isCorrect: false,
        distractorRationale: "Incorreta. Descrição anacrônica e absurda."
      },
      {
        id: "d",
        text: "romper formalmente os laços diplomáticos com o Vaticano para fundar uma religião nacionalista atrelada à Arena.",
        isCorrect: false,
        distractorRationale: "Incorreta. A Igreja manteve sua comunhão com Roma e foi oposição severa aos generais da Arena."
      },
      {
        id: "e",
        text: "exigir que todos os membros do clero fossem nomeados exclusivamente por oficiais generais do Exército.",
        isCorrect: false,
        distractorRationale: "Incorreta. O regime militar via a Igreja progressista como um 'foco de subversão comunista' e chegou a assassinar padres e perseguir bispos (como Dom Hélder Câmara, que teve seu assessor Antônio Henrique Pereira Neto torturado e morto em 1969)."
      }
    ],
    detailedExplanation: {
      summary: "A Igreja progressista e a Teologia da Libertação foram pilares decisivos da resistência civil à ditadura, convertendo templos em espaços sagrados de defesa da vida e dos direitos humanos.",
      stepByStep: [
        "Passo 1: A virada da Igreja: A cúpula católica apoiou o golpe em 1964, mas diante da escalada da tortura após o AI-5 e do assassinato de líderes pastorais, bispos e freiras engajaram-se na denúncia profética.",
        "Passo 2: As CEBs: Pequenos grupos comunitários em favelas e roças que liam a Bíblia à luz da realidade social de opressão e miséria, fomentando cidadania ativa.",
        "Passo 3: O projeto 'Brasil: Nunca Mais': Liderado clandestinamente por Dom Paulo Evaristo Arns e pelo pastor presbiteriano Jaime Wright, fotocopiou mais de 700 processos do Superior Tribunal Militar para comprovar irrefutavelmente a prática de tortura pelo Estado brasileiro.",
        "Conclusão: A alternativa A define com fidelidade a 'opção preferencial pelos pobres'."
      ],
      coreConcept: "O projeto 'Brasil: Nunca Mais' (1985) foi a maior iniciativa não-governamental de resgate documental de violações aos direitos humanos da história do país.",
      trapWarning: "Cuidado: A Igreja Católica no Brasil não era homogênea; setores ultraconservadores (como a TFP - Tradição, Família e Propriedade) continuaram apoiando o regime militar até o fim."
    },
    commonTraps: ["Achar que a Igreja Católica brasileira teve uma posição única e imutável de apoio ao regime militar ao longo de todos os 21 anos."],
    tags: ["teologia-da-libertacao", "igreja-catolica", "brasil-nunca-mais", "cebs"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-DIT-025",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "História do Brasil",
    subtopic: "A Constituição Cidadã de 1988 e a Superação do Entulho Autoritário",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 5 de outubro de 1988, ao promulgar a nova Carta Magna, o deputado Ulysses Guimarães, presidente da Assembleia Nacional Constituinte, declarou do alto da tribuna: 'A sociedade foi Rubens Paiva, não os facínoras que o mataram. A sociedade quer mudar, a sociedade está mudando. [...] A Constituição quer ser a voz, a letra, a vontade política da sociedade rumo à sua mudança. [...] Discordar, sim. Divergir, sim. Descumprir, jamais. Afrontá-la, nunca. Traidor da pátria é traidor da Constituição: conhecemos o caminho do maldito. Temos ódio à ditadura. Ódio e nojo!'",
      source: "GUIMARÃES, Ulysses. Discurso de Promulgação da Constituição de 1988. Brasília: Câmara dos Deputados, 1988."
    },
    prompt: "O discurso histórico de Ulysses Guimarães e a promulgação da Constituição de 1988 simbolizaram o ápice do processo de redemocratização ao consagrar:",
    options: [
      {
        id: "a",
        text: "a refundação do Estado Democrático de Direito assentada sobre a primazia da dignidade da pessoa humana, o repúdio indelével ao autoritarismo e a universalização de direitos sociais, trabalhistas e civis.",
        isCorrect: true,
        distractorRationale: "Correta. A Constituição de 1988 (batizada de 'Constituição Cidadã') foi o antídoto jurídico e político aos 21 anos de ditadura: criminalizou a tortura como inafiançável e imprescritível, garantiu liberdade sindical, criou o SUS, reconheceu terras indígenas e consagrou o catálogo mais extenso de direitos fundamentais da história nacional."
      },
      {
        id: "b",
        text: "o restabelecimento dos Atos Institucionais como prerrogativa permanente do Ministério do Exército em situações de comoção pública.",
        isCorrect: false,
        distractorRationale: "Incorreta. A Constituição revogou categoricamente toda a legislação de exceção dos Atos Institucionais da ditadura."
      },
      {
        id: "c",
        text: "a proibição de que cidadãos analfabetos e jovens maiores de dezesseis anos pudessem exercer o direito de voto nas eleições municipais.",
        isCorrect: false,
        distractorRationale: "Incorreta. A Carta de 1988 expandiu historicamente a cidadania ao conceder direito de voto aos analfabetos e facultativo aos jovens de 16 e 17 anos."
      },
      {
        id: "d",
        text: "a subordinação da Presidência da República ao comando vitalício de generais indicados pelo Conselho de Segurança Nacional.",
        isCorrect: false,
        distractorRationale: "Incorreta. A Carta subordinou as Forças Armadas à autoridade suprema do Presidente civil eleito da República."
      },
      {
        id: "e",
        text: "a exclusão da saúde pública e da previdência social do rol de deveres orçamentários obrigatórios do Estado brasileiro.",
        isCorrect: false,
        distractorRationale: "Incorreta. O artigo 196 da Carta declarou que 'A saúde é direito de todos e dever do Estado', criando a base constitucional do SUS."
      }
    ],
    detailedExplanation: {
      summary: "A Constituição de 1988 foi a resposta institucional da sociedade brasileira a duas décadas de ditadura, refundando o pacto democrático com foco na cidadania plena.",
      stepByStep: [
        "Passo 1: Compreender o simbolismo de Ulysses Guimarães citando Rubens Paiva: Rubens Paiva foi um ex-deputado assassinado e desaparecido nos porões do DOI-CODI em 1971. Sua menção homenageou todas as vítimas da ditadura.",
        "Passo 2: As conquistas da Constituição Cidadã: 1) Criação do Sistema Único de Saúde (SUS); 2) Voto aos analfabetos e aos jovens de 16 anos; 3) Direitos de demarcação de terras indígenas e quilombolas; 4) Tortura e racismo declarados crimes inafiançáveis; 5) Acesso livre a informações pelo habeas data.",
        "Passo 3: A superação do 'entulho autoritário': A Carta rompeu com a tutela dos generais, embora concessões como o artigo 142 tenham mantido ambiguidades sobre o papel constitucional das Forças Armadas.",
        "Conclusão: A alternativa A sintetiza o ápice do processo de redemocratização brasileiro."
      ],
      coreConcept: "A Constituição Cidadã de 1988 é o marco fundacional da democracia brasileira contemporânea e o documento mais avançado em termos de garantias sociais de nossa história.",
      trapWarning: "Cuidado: A Constituição de 1988 NÃO foi outorgada por militares; foi promulgada por uma Assembleia Constituinte livremente eleita pelo voto popular em 1986."
    },
    commonTraps: ["Achar que a Constituição de 1988 manteve os poderes dos Atos Institucionais ou que não garantiu o voto aos analfabetos."],
    tags: ["constituicao-1988", "ulysses-guimaraes", "redemocratizacao", "estado-democratico-de-direito"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
