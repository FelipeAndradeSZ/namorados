export const QUESTIONS_BRASIL_COLONIAL = [
  {
    id: "HUM-BRC-001",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Brasil Colônia",
    subtopic: "Economia Açucareira",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O açúcar foi o produto escolhido por Portugal para dar início à colonização efetiva do Brasil, em meados do século XVI. A escolha não foi acidental: os portugueses já tinham experiência com a cultura da cana nas ilhas atlânticas, o produto tinha alto valor no mercado europeu e a empresa contou com o financiamento de capitais holandeses.",
      source: "Original, baseado em historiografia clássica (Celso Furtado)."
    },
    prompt: "A implementação da empresa açucareira no Nordeste brasileiro durante o período colonial dependeu de um conjunto de fatores estruturais. Qual característica sociopolítica ou econômica foi fundamental para a estruturação dessa atividade?",
    options: [
      { id: "a", text: "O trabalho assalariado de colonos portugueses pobres.", isCorrect: false, distractorRationale: "Confunde com modelos de colonização de povoamento, enquanto no Brasil predominou o trabalho escravo." },
      { id: "b", text: "A produção voltada prioritariamente para o abastecimento do mercado interno.", isCorrect: false, distractorRationale: "O foco era a exportação (plantation), não o mercado interno." },
      { id: "c", text: "A adoção do sistema de plantation, baseado em latifúndio, monocultura e trabalho escravo.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "A ausência de investimentos estrangeiros na infraestrutura dos engenhos.", isCorrect: false, distractorRationale: "O texto-base cita o financiamento holandês." },
      { id: "e", text: "A distribuição igualitária de pequenas propriedades familiares.", isCorrect: false, distractorRationale: "O modelo baseava-se em grandes latifúndios." }
    ],
    detailedExplanation: {
      summary: "A economia açucareira colonial baseou-se no modelo de plantation.",
      stepByStep: [
        "Identificar o contexto: colonização do Brasil no século XVI.",
        "Relembrar as características do cultivo da cana: plantation.",
        "Associar plantation aos seus três pilares: latifúndio (grandes extensões), monocultura (foco no açúcar) e escravidão (inicialmente indígena, depois africana)."
      ],
      coreConcept: "Sistema de Plantation e Economia Colonial",
      trapWarning: "Cuidado para não ignorar o papel do capital holandês na economia colonial portuguesa."
    },
    commonTraps: ["confundir mercado interno com externo", "ignorar a estrutura fundiária"],
    tags: ["brasil-colonia", "economia", "acucar", "escravidao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-002",
    area: "humanas",
    competence: 1,
    skill: 5,
    topic: "Escravidão",
    subtopic: "Resistência Negra",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Documento histórico: 'Revolta dos Malês (1835). Os rebeldes pretendiam tomar a cidade de Salvador e instituir um governo islâmico. Vestidos com abadás brancos, os africanos, muitos deles letrados e muçulmanos, organizaram um dos levantes mais sofisticados do período imperial.'",
      source: "João José Reis, Rebelião Escrava no Brasil (adaptado)."
    },
    prompt: "A Revolta dos Malês, ocorrida na Bahia em 1835, destaca-se entre as diversas formas de resistência à escravidão no Brasil. O aspecto singular que diferenciou esse movimento de outras rebeliões escravas foi:",
    options: [
      { id: "a", text: "O apoio irrestrito da elite agrária baiana, descontente com os impostos imperiais.", isCorrect: false, distractorRationale: "A elite agrária baiana reprimiu a revolta, não a apoiou." },
      { id: "b", text: "A liderança de negros muçulmanos alfabetizados em árabe, evidenciando uma articulação político-religiosa.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A aliança militar com povos indígenas do sertão nordestino.", isCorrect: false, distractorRationale: "A revolta teve caráter urbano e foco na população africana islâmica." },
      { id: "d", text: "O sucesso do levante, que conseguiu abolir a escravidão na província da Bahia por uma década.", isCorrect: false, distractorRationale: "A revolta foi rapidamente reprimida pelas autoridades." },
      { id: "e", text: "A reivindicação central de retorno em massa ao continente africano com financiamento do Império.", isCorrect: false, distractorRationale: "O objetivo principal era tomar o controle local, embora alguns rebeldes quisessem retornar." }
    ],
    detailedExplanation: {
      summary: "A Revolta dos Malês foi liderada por escravizados africanos muçulmanos e alfabetizados.",
      stepByStep: [
        "Ler o documento e identificar a natureza do levante.",
        "Destacar as palavras-chave: 'letrados', 'muçulmanos', 'abadas brancos'.",
        "Concluir que a religião islâmica e a alfabetização em árabe foram fundamentais para a comunicação e organização do movimento."
      ],
      coreConcept: "Resistência escrava e identidades africanas no Brasil",
      trapWarning: "Evitar a generalização de que todas as rebeliões escravas tinham os mesmos líderes ou características."
    },
    commonTraps: ["generalização das revoltas", "assumir sucesso militar"],
    tags: ["imperio", "escravidao", "males", "resistencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-003",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Era Vargas",
    subtopic: "Legislação Trabalhista e Sindicalismo",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "text",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1943, o governo de Getúlio Vargas consolidou as Leis do Trabalho (CLT). Em seus discursos de 1º de maio, Vargas frequentemente se referia aos trabalhadores como 'trabalhadores do Brasil', apresentando-se como um 'pai' que lhes concedia direitos, enquanto o Estado passava a controlar e atrelar os sindicatos ao Ministério do Trabalho.",
      source: "Discursos de Getúlio Vargas, 1930-1945 (adaptado)."
    },
    prompt: "A política trabalhista implementada durante o Estado Novo (1937-1945) caracterizou-se pela dupla face de concessão de direitos e controle estatal. Essa estratégia de Vargas tinha como objetivo político primordial:",
    options: [
      { id: "a", text: "Fomentar a independência dos sindicatos para preparar o Brasil para o socialismo.", isCorrect: false, distractorRationale: "O Estado Novo era autoritário e reprimia fortemente o comunismo/socialismo." },
      { id: "b", text: "Reduzir o poder da burguesia industrial, transferindo os meios de produção aos operários.", isCorrect: false, distractorRationale: "Vargas promoveu a industrialização e apoiou a burguesia nacional, sem ameaçar a propriedade privada." },
      { id: "c", text: "Neutralizar os conflitos de classe e enquadrar a classe operária no projeto nacionalista e autoritário do Estado.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "Atender às exigências de órgãos internacionais para a inserção do Brasil no mercado global liberal.", isCorrect: false, distractorRationale: "A política era voltada para dentro (nacionalismo econômico) e não para exigências externas liberais." },
      { id: "e", text: "Desarticular o setor urbano para fortalecer as oligarquias rurais exportadoras de café.", isCorrect: false, distractorRationale: "Vargas focava no desenvolvimento urbano-industrial e na redução do poder das antigas oligarquias." }
    ],
    detailedExplanation: {
      summary: "Vargas usou a CLT e o corporativismo para controlar as massas e evitar o conflito de classes.",
      stepByStep: [
        "Compreender a figura de Vargas: líder populista, nacionalista e autoritário (Estado Novo).",
        "Analisar o impacto da CLT: concessão de direitos trabalhistas inéditos.",
        "Relacionar os direitos ao atrelamento sindical: os sindicatos perdem autonomia e viram braços do Estado.",
        "Concluir que o objetivo era manter a paz social (neutralizar conflitos de classe) e apoiar a industrialização sob controle estatal."
      ],
      coreConcept: "Populismo, Corporativismo e Estado Novo",
      trapWarning: "Cuidado com o mito de 'pai dos pobres'; os direitos foram conquistas reguladas para manter o controle."
    },
    commonTraps: ["acreditar na benevolência absoluta do Estado", "confundir com movimentos socialistas"],
    tags: ["era-vargas", "trabalho", "estado-novo", "corporativismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-004",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Período Imperial",
    subtopic: "Abolição da Escravatura",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Lei Áurea (1888) decretou o fim oficial da escravidão no Brasil. Contudo, as décadas seguintes foram marcadas pela ausência de políticas públicas para a inserção socioeconômica dos ex-escravizados, que foram relegados a subempregos, moradias precárias e forte discriminação racial na nascente República.",
      source: "Historiografia contemporânea sobre o Pós-Abolição."
    },
    prompt: "Analisando as consequências sociais da abolição no Brasil, é correto afirmar que o processo de emancipação caracterizou-se pela:",
    options: [
      { id: "a", text: "Imediata distribuição de terras (reforma agrária) aos libertos para garantir sua subsistência.", isCorrect: false, distractorRationale: "Nunca houve distribuição de terras aos ex-escravizados; a Lei de Terras de 1850 já havia dificultado o acesso." },
      { id: "b", text: "Substituição total e imediata da mão de obra escrava por imigrantes europeus em todas as regiões do país.", isCorrect: false, distractorRationale: "Ocorreu em SP e no Sul, mas outras regiões, como o Nordeste, mantiveram ex-escravos em relações de dependência." },
      { id: "c", text: "Abolição formal sem garantia de direitos de cidadania plena, resultando na marginalização da população negra.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "Integração plena da população negra no incipiente setor industrial paulista e carioca.", isCorrect: false, distractorRationale: "Na indústria, privilegiou-se a contratação de imigrantes europeus." },
      { id: "e", text: "Criação de programas de indenização financeira aos ex-escravizados pelo trabalho não remunerado.", isCorrect: false, distractorRationale: "Não houve indenização para os ex-escravizados (alguns projetos debateram indenizar os senhores)." }
    ],
    detailedExplanation: {
      summary: "A abolição não foi acompanhada de integração social ou econômica para os libertos.",
      stepByStep: [
        "A Lei Áurea acabou com a situação jurídica da escravidão.",
        "Não houve projeto de integração (como educação, reforma agrária ou emprego).",
        "O resultado foi a continuidade da marginalização estrutural da população negra na sociedade brasileira republicana."
      ],
      coreConcept: "Abolição inconclusa e desigualdade estrutural",
      trapWarning: "Muitos estudantes acreditam que a abolição encerrou o racismo ou garantiu direitos imediatos."
    },
    commonTraps: ["mito da democracia racial", "superestimar o alcance da Lei Áurea"],
    tags: ["abolicao", "imperio", "racismo-estrutural", "sociedade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-005",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Economia Colonial",
    subtopic: "Mineração",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante o século XVIII, a descoberta de ouro em Minas Gerais alterou profundamente a dinâmica colonial. O eixo econômico deslocou-se do Nordeste para o Centro-Sul, surgiram vilas e arraiais, e o mercado interno ganhou impulso para abastecer a crescente população mineradora.",
      source: "Laura de Mello e Souza, Desclassificados do Ouro (adaptado)."
    },
    prompt: "A economia mineradora no Brasil colonial representou uma ruptura com o modelo exclusivamente agroexportador açucareiro. Uma das principais transformações socioeconômicas promovidas pela mineração foi:",
    options: [
      { id: "a", text: "O fim do trabalho escravo, substituído pelo trabalho livre nas minas de ouro.", isCorrect: false, distractorRationale: "A mineração continuou baseada predominantemente no trabalho escravo africano." },
      { id: "b", text: "O estímulo à formação de um mercado interno articulado e o surgimento de uma sociedade urbana e mais móvel.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "A descentralização administrativa, com enfraquecimento do controle fiscal português.", isCorrect: false, distractorRationale: "Houve enorme aumento do controle fiscal e administrativo por parte de Portugal (ex: Intendência das Minas, Derrama)." },
      { id: "d", text: "O isolamento da região das minas em relação ao restante da colônia, focando apenas no comércio direto com a Europa.", isCorrect: false, distractorRationale: "Ocorreu o oposto: integração das regiões para abastecimento (gado do sul, escravos de portos, etc)." },
      { id: "e", text: "A criação de uma sociedade estritamente igualitária, sem estratificação social nas áreas urbanas.", isCorrect: false, distractorRationale: "A sociedade mineradora era altamente hierarquizada, apesar de ter mais mobilidade que a do açúcar." }
    ],
    detailedExplanation: {
      summary: "A mineração criou vida urbana, um mercado interno integrado e certa mobilidade social.",
      stepByStep: [
        "Comparar a sociedade do açúcar (rural, bipolar, rígida) com a do ouro.",
        "A mineração exigia abastecimento de alimentos, roupas e mulas, criando um mercado interno.",
        "As pessoas viviam em vilas, o que gerou ofícios urbanos (artesãos, comerciantes, profissionais liberais).",
        "A estrutura social tornou-se mais complexa e permitiu ligeira mobilidade (alforrias)."
      ],
      coreConcept: "Sociedade Mineradora e Mercado Interno Colonial",
      trapWarning: "Cuidado: a mobilidade social existia, mas o sistema continuava sendo escravocrata e opressor."
    },
    commonTraps: ["achar que a mineração acabou com a escravidão", "confundir controle fiscal com autonomia"],
    tags: ["mineracao", "colonia", "ouro-preto", "mercado-interno"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-006",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Expansão Territorial",
    subtopic: "Tratado de Madri e Uti Possidetis",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Tratado de Madri (1750) consagrou diplomaticamente a nova configuração geográfica da América portuguesa. Negociado pelo diplomata luso-brasileiro Alexandre de Gusmão, o acordo revogou a linha imaginária de Tordesilhas e estabeleceu que a posse efetiva da terra (o princípio do uti possidetis, ita possideatis) determinaria as fronteiras entre as coroas ibéricas.",
      source: "Boris Fausto, História do Brasil. São Paulo: EDUSP (adaptado)."
    },
    prompt: "A consolidação das fronteiras do Brasil pelo Tratado de Madri baseou-se na ocupação territorial prévia decorrente, principalmente, da:",
    options: [
      { id: "a", text: "atuação de bandeirantes, avanço da pecuária extensiva no sertão e missões religiosas no vale amazônico.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "instalação planejada de fortificações militares portuguesas ao longo de toda a cordilheira dos Andes.", isCorrect: false, distractorRationale: "Portugal nunca ocupou nem construiu fortes na cordilheira dos Andes." },
      { id: "c", text: "compra legalizada de terras aos chefes incas e astecas autorizada pela coroa espanhola.", isCorrect: false, distractorRationale: "Incas e astecas ficavam em domínios hispânicos e suas civilizações já haviam sido destruídas séculos antes." },
      { id: "d", text: "substituição pacífica dos colonizadores espanhóis por imigrantes asiáticos financiados pelo governo luso.", isCorrect: false, distractorRationale: "Anacronismo total; a imigração asiática só ocorreu no século XX republicano." },
      { id: "e", text: "intervenção militar direta da marinha britânica para frear o avanço colonial espanhol no Prata.", isCorrect: false, distractorRationale: "A Inglaterra não interveio militarmente no Tratado de Madri de 1750." }
    ],
    detailedExplanation: {
      summary: "O Tratado de Madri legalizou a expansão territorial baseando-se no princípio do uti possidetis (quem possui de fato a terra).",
      stepByStep: [
        "A linha de Tordesilhas de 1494 limitava as possessões portuguesas ao litoral atlântico.",
        "Ao longo dos séculos XVII e XVIII, bandeirantes paulistas em busca de ouro e indígenas, pecuaristas no vale do Rio São Francisco e jesuítas na Amazônia avançaram para o interior.",
        "Em 1750, Alexandre de Gusmão utilizou o princípio romano do uti possidetis para garantir a soberania portuguesa sobre as áreas efetivamente colonizadas."
      ],
      coreConcept: "Uti Possidetis e Expansão Territorial Colonial",
      trapWarning: "A expansão territorial não decorreu de concessão espanhola benevolente, mas da ocupação física de fato."
    },
    commonTraps: ["confundir Tordesilhas com Tratado de Madri", "anacronismo sobre fronteiras"],
    tags: ["fronteiras", "tratado de madri", "uti possidetis", "bandeiras"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-007",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Resistência Escrava",
    subtopic: "Quilombo dos Palmares",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os quilombos nunca foram apenas refúgios temporários de escravizados fugidos; constituíram verdadeiras comunidades autônomas que reinventaram relações de parentesco, técnicas agrícolas, metalurgia e estratégias políticas de autodefesa em meio à ordem colonial escravista opressora.",
      source: "Flávio dos Santos Gomes, A Hidra e os Pântanos: Mocambos, Quilombos e Comunidades de Fugitivos no Brasil (adaptado)."
    },
    prompt: "No contexto da América portuguesa, a existência e longevidade do Quilombo dos Palmares no século XVII evidenciam que a resistência negra à escravidão:",
    options: [
      { id: "a", text: "articulava resistência armada, autonomia produtiva e reorganização sociopolítica alternativa ao modelo colonial.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "dependia obrigatoriamente do consentimento e do financiamento secreto de senhores de engenho pernambucanos.", isCorrect: false, distractorRationale: "Os senhores de engenho organizavam expedições armadas para destruir os quilombos." },
      { id: "c", text: "tinha como único propósito restaurar monarquias absolutistas idênticas às europeias em solo americano.", isCorrect: false, distractorRationale: "Palmares recriava formas de organização comunitária com forte matriz africana, e não absolutismo europeu." },
      { id: "d", text: "limitava-se à fuga individual e passiva, sem impactos econômicos ou militares sobre a capitania.", isCorrect: false, distractorRationale: "Palmares gerou sucessivas campanhas militares coloniais e impactos socioeconômicos profundos." },
      { id: "e", text: "foi suprimida facilmente pelo governo colonial em poucas semanas sem necessidade de forças mercenárias.", isCorrect: false, distractorRationale: "Palmares resistiu por quase um século e exigiu a contratação de Domingos Jorge Velho para sua destruição." }
    ],
    detailedExplanation: {
      summary: "Os quilombos representavam uma alternativa sociopolítica e econômica completa ao modelo escravista de plantation colonial.",
      stepByStep: [
        "A historiografia contemporânea superou a visão de quilombos como meros esconderijos de fugitivos.",
        "Palmares contava com dezenas de milhares de habitantes distribuídos em mocambos, com policultura, metalurgia e comércio com povoados vizinhos.",
        "A resistência negra combinava insubordinação militar com preservação de identidades e solidariedades reconstruídas."
      ],
      coreConcept: "Quilombos como Espaços de Autonomia e Resistência",
      trapWarning: "Não reduza a resistência à fuga passiva: houve produção, estratégia diplomática e enfrentamento militar."
    },
    commonTraps: ["visão passiva do escravizado", "desconsiderar complexidade do quilombo"],
    tags: ["quilombos", "palmares", "resistencia", "escravidao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-008",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Reformas Pombalinas",
    subtopic: "Iluminismo Ibérico e Centralização",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Sob o reinado de D. José I, o ministro Marquês de Pombal (1750-1777) implementou uma série de medidas administrativas inspiradas no despotismo esclarecido, com o objetivo de recuperar as finanças do império português e intensificar a exploração econômica de suas colônias, em especial o Brasil.",
      source: "Kenneth Maxwell, A Devassa da Devassa. Rio de Janeiro: Paz e Terra (adaptado)."
    },
    prompt: "Entre as principais medidas do reformismo pombalino que impactaram diretamente a administração e a sociedade do Brasil colonial, destaca-se a:",
    options: [
      { id: "a", text: "expulsão dos jesuítas e a transferência da capital da colônia de Salvador para o Rio de Janeiro.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "proclamação imediata da independência política da colônia sob uma monarquia constitucional lusa.", isCorrect: false, distractorRationale: "Pombal buscou reforçar os laços coloniais e o controle mercantilista sobre o Brasil." },
      { id: "c", text: "extinção completa da cobrança de impostos sobre a extração do ouro na região de Minas Gerais.", isCorrect: false, distractorRationale: "Pombal criou a cota mínima de 100 arrobas de ouro e a derrama para forçar o pagamento dos tributos." },
      { id: "d", text: "abertura total dos portos brasileiros ao livre comércio com os Estados Unidos da América.", isCorrect: false, distractorRationale: "A Abertura dos Portos só ocorreu em 1808 com D. João VI, em contexto das guerras napoleônicas." },
      { id: "e", text: "devolução das terras indígenas à soberania autônoma dos povos nativos sem cobrança de dízimo.", isCorrect: false, distractorRationale: "O Diretório dos Índios secularizou a administração, mas com fins de assimilação cultural forçada e trabalho compulsório." }
    ],
    detailedExplanation: {
      summary: "Pombal expulsou a Companhia de Jesus em 1759 e transferiu a sede do Vice-Reinado para o Rio de Janeiro em 1763.",
      stepByStep: [
        "A transferência da capital de Salvador para o Rio de Janeiro (1763) atendeu ao novo eixo econômico minerador e à necessidade de vigiar o escoamento do ouro.",
        "A expulsão dos jesuítas (1759) visou quebrar o poder secular da Igreja e instaurar um ensino estatal laico subordinado à Coroa.",
        "Essas medidas exemplificam o Despotismo Esclarecido português: modernizar a máquina estatal para maximizar a arrecadação metropolitana."
      ],
      coreConcept: "Reformas Pombalinas e Despotismo Esclarecido",
      trapWarning: "Pombal não enfraqueceu o pacto colonial; ele tentou torná-lo mais eficiente e fiscalizador."
    },
    commonTraps: ["confundir modernização com liberdade colonial", "antecipar abertura dos portos"],
    tags: ["pombal", "jesuitas", "rio de janeiro", "fiscalismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-009",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Movimentos Emancipacionistas",
    subtopic: "Inconfidência Mineira vs Conjuração Baiana",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No final do século XVIII, o descontentamento contra a opressão colonial gerou duas conspirações marcantes: a Inconfidência Mineira (1789), articulada por magistrados, poetas, proprietários e militares; e a Conjuração Baiana de 1798 (Revolta dos Alfaiates), que mobilizou alfaiates, soldados, negros libertos e escravizados.",
      source: "Emília Viotti da Costa, Da Monarquia à República. São Paulo: UNESP (adaptado)."
    },
    prompt: "Ao comparar esses dois movimentos que questionaram a autoridade metropolitana portuguesa, verifica-se que a Conjuração Baiana diferenciava-se da Inconfidência Mineira fundamentalmente pela:",
    options: [
      { id: "a", text: "composição popular e pela defesa explícita da abolição da escravidão e da igualdade racial.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "proposta de manutenção irrestrita do pacto colonial e submissão absolutista à Coroa de Portugal.", isCorrect: false, distractorRationale: "Ambos os movimentos eram separatistas e anticoloniais." },
      { id: "c", text: "recusa categórica em adotar os ideais iluministas e republicanos divulgados pela Revolução Francesa.", isCorrect: false, distractorRationale: "A Conjuração Baiana foi profundamente inspirada na fase popular/jacobina da Revolução Francesa." },
      { id: "d", text: "ausência de qualquer liderança militar ou letrada em sua organização e panfletagem nas cidades.", isCorrect: false, distractorRationale: "Contou com médicos e letrados (como Cipriano Barata) e soldados entre suas fileiras." },
      { id: "e", text: "defesa intransigente da conservação dos privilégios da grande aristocracia cafeeira paulista.", isCorrect: false, distractorRationale: "A cafeicultura paulista sequer existia nessa época com peso político significativo." }
    ],
    detailedExplanation: {
      summary: "A Inconfidência Mineira foi elitista e tímida quanto à escravidão; a Conjuração Baiana foi popular, jacobina e antiescravista.",
      stepByStep: [
        "A Inconfidência Mineira foi influenciada pela independência dos EUA (1776), com base social de proprietários devedores da Fazenda Real, mantendo divergências sobre a libertação dos escravos.",
        "A Conjuração Baiana de 1798 teve forte influência jacobina da Revolução Francesa (1789), com panfletos pregando liberdade, república, igualdade racial e o fim do trabalho escravo.",
        "A repressão colonial na Bahia foi implacável contra os líderes populares negros (Lucas Dantas, Manuel Faustino), condenados à forca."
      ],
      coreConcept: "Movimentos Emancipacionistas e Questão Social",
      trapWarning: "Cuidado: nem toda revolta separatista era abolicionista; a elite mineira não defendia o fim da escravidão."
    },
    commonTraps: ["generalizar abolição para todos os movimentos", "homogeneizar bases sociais"],
    tags: ["inconfidencia mineira", "conjuracao baiana", "republicanismo", "abolicionismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-010",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Período Joanino",
    subtopic: "Abertura dos Portos e Ruptura do Pacto Colonial",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Logo após a transferência da corte portuguesa para o Rio de Janeiro em 1808, fugindo da invasão napoleônica, o príncipe regente D. João assinou a Carta Régia de Abertura dos Portos às Nações Amigas, seguida pelos Tratados de 1810 com o Reino Unido da Grã-Bretanha.",
      source: "Leslie Bethell, História da América Latina: Da Independência a 1870. São Paulo: EDUSP."
    },
    prompt: "A Abertura dos Portos de 1808 e os Tratados de 1810 representaram um marco decisivo no processo de independência do Brasil porque:",
    options: [
      { id: "a", text: "romperam de fato o pacto colonial mercantilista e integraram a economia brasileira à órbita industrial britânica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "estabeleceram barreiras alfandegárias proibitivas para proteger o parque manufatureiro brasileiro nascente.", isCorrect: false, distractorRationale: "Os Tratados de 1810 fixaram tarifa de apenas 15% para produtos ingleses, inviabilizando indústrias nacionais." },
      { id: "c", text: "provocaram o fechamento definitivo de todos os comércios marítimos com as nações europeias.", isCorrect: false, distractorRationale: "O ato abriu as trocas comerciais com potências globais, sobretudo com a Inglaterra." },
      { id: "d", text: "restringiram o poder político dos grandes proprietários de terras em benefício das comunidades indígenas.", isCorrect: false, distractorRationale: "A aristocracia rural brasileira foi a principal beneficiada com o escoamento de suas exportações." },
      { id: "e", text: "anularam imediatamente a soberania da coroa de Bragança, transformando o Brasil em colônia oficial francesa.", isCorrect: false, distractorRationale: "Portugal estava em guerra com a França napoleônica sob proteção da marinha inglesa." }
    ],
    detailedExplanation: {
      summary: "A Carta Régia de 1808 liquidou o exclusivo metropolitano, inaugurando a dependência comercial em relação à Inglaterra.",
      stepByStep: [
        "O pacto colonial obrigava o Brasil a comerciar apenas com ou através de Portugal.",
        "Com a Abertura dos Portos às Nações Amigas (1808), a metrópole perdeu seu monopólio comercial.",
        "Os Tratados de Comércio e Navegação de 1810 deram à Inglaterra tarifa privilegiada de 15% (menor que a dos próprios portugueses, 16%).",
        "Essa medida tornou economicamente irreversível o processo de separação política entre Brasil e Portugal."
      ],
      coreConcept: "Fim do Exclusivo Metropolitano e Dependência Inglesa",
      trapWarning: "A independência econômica do Brasil em relação a Portugal antecedeu em 14 anos a independência política de 1822."
    },
    commonTraps: ["achar que protegeu a indústria nacional", "confundir nações amigas com França"],
    tags: ["periodo joanino", "abertura dos portos", "inglaterra", "pacto colonial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

