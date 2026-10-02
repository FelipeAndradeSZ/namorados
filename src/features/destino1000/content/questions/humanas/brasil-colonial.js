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
  },
  {
    id: "HUM-BRC-011",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Brasil Colônia",
    subtopic: "O Período Pré-Colonial: Pau-Brasil, Escambo e Feitorias",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas três primeiras décadas após a chegada da armada de Cabral (1500-1530), a Coroa portuguesa não estabeleceu vilas povoadas nem lavouras agrícolas contínuas na costa americana. O interesse régio limitou-se à exploração do pau-brasil (ibirapitanga), monopolizada pela monarquia sob a forma de estanco. A extração das toras era realizada em armazéns fortificados à beira-mar denominados feitorias, valendo-se do trabalho de indígenas tupis em troca de machados de ferro, facas, tecidos e espelhos.",
      source: "História do Brasil Colonial, Síntese Historiográfica, 2024."
    },
    prompt: "A relação de trabalho e o arranjo econômico predominantes no litoral brasileiro durante a fase pré-colonial caracterizaram-se pelo:",
    options: [
      { id: "a", text: "escambo, modalidade de troca direta de mercadorias e ferramentas manufaturadas pelo corte e transporte das toras florestais sem utilização de moeda metálica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "assalariamento formal compulsório regido por contratos de trabalho e remuneração em moedas de ouro cunhadas na metrópole.", isCorrect: false, distractorRationale: "Não havia moeda circulante nem regime assalariado no período pré-colonial entre colonizadores e nativos." },
      { id: "c", text: "trabalho escravo africano em larga escala nas plantações de cana-de-açúcar.", isCorrect: false, distractorRationale: "O tráfico transatlântico de africanos escravizados só se consolidou décadas depois com a montagem dos engenhos." },
      { id: "d", text: "estabelecimento de pequenas fábricas fabris operadas por operários industriais europeus.", isCorrect: false, distractorRationale: "A Revolução Industrial só ocorreria séculos depois; a atividade pré-colonial era extrativismo florestal rudimentar." },
      { id: "e", text: "confinamento imediato de todos os povos originários em reservas demarcadas com cercas permanentes.", isCorrect: false, distractorRationale: "Os indígenas viviam em suas aldeias tradicionais e atuavam autonomamente no escambo com os marinheiros." }
    ],
    detailedExplanation: {
      summary: "O período pré-colonial caracterizou-se pelo extrativismo nômade do pau-brasil, organizado em feitorias litorâneas e dependente da cooperação dos povos originários por meio do escambo.",
      stepByStep: [
        "Contexto histórico (1500-1530): Portugal concentrava seus investimentos no rendoso comércio de especiarias nas Índias Orientais.",
        "Monopólio régio (Estanco): A Coroa arrendava o direito de corte da madeira a particulares (como Fernando de Noronha).",
        "Mecanismo de exploração: Sem fixação permanente de colonos na terra, utilizava-se o escambo com os nativos, que recebiam artefatos metálicos utilitários para cortar e carregar as toras até as caravelas."
      ],
      coreConcept: "Extrativismo Pré-Colonial, Feitorias e a Relação de Escambo",
      trapWarning: "No ENEM, não confunda o escambo voluntário do pau-brasil com o cativeiro forçado imposto posteriormente aos indígenas nas lavouras açucareiras."
    },
    commonTraps: [
      "Achar que o período pré-colonial já contava com agricultura canavieira e escravidão negra",
      "Supor que os indígenas aceitavam 'quinquilharias inúteis', ignorando o imenso valor prático que ferramentas de ferro tinham para povos em estágio neolítico"
    ],
    tags: ["pre-colonial", "pau-brasil", "escambo", "feitorias"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-012",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Colônia",
    subtopic: "Capitanias Hereditárias e a Concessão de Sesmarias",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1534, premido pelas ameaças de invasão estrangeira e pela crise do comércio oriental, D. João III dividiu a América portuguesa em quinze lotes perpendiculares à linha de costa, doados a doze capitães donatários. Regulada por dois documentos jurídicos — a Carta de Doação (que transferia a posse e a jurisdição) e o Foral (que estipulava os tributos devidos à Coroa) —, a iniciativa outorgava ao donatário a prerrogativa de fundar vilas e doar terras virgens na forma de sesmarias.",
      source: "Documentos Históricos do Brasil Colônia, Coleção Jurídica, 2023."
    },
    prompt: "A instituição das capitanias hereditárias e o regime de distribuição de sesmarias deixaram marcas profundas na formação territorial e social brasileira porque:",
    options: [
      { id: "a", text: "terceirizaram a colonização a particulares sem custos para a Coroa e consolidaram uma estrutura fundiária hiperconcentrada em imensos latifúndios.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "garantiram a reforma agrária com a divisão da terra em lotes iguais de minifúndios para camponeses assalariados.", isCorrect: false, distractorRationale: "O regime de sesmarias concedia imensas extensões de terra (latifúndios) apenas a homens com posses e escravos." },
      { id: "c", text: "eliminaram a autoridade do rei de Portugal e estabeleceram doze repúblicas democráticas independentes.", isCorrect: false, distractorRationale: "A autoridade régia continuava soberana e o rei mantinha monopólios fiscais rigorosos previstos no Foral." },
      { id: "d", text: "impediram o cultivo da cana-de-açúcar em todo o litoral brasileiro por motivos religiosos.", isCorrect: false, distractorRationale: "As capitanias foram criadas justamente para viabilizar e expandir a produção de cana e derivados." },
      { id: "e", text: "conferiram a posse coletiva das propriedades rurais aos povos indígenas originários.", isCorrect: false, distractorRationale: "O sistema expropriou as terras ancestrais indígenas e impôs o direito de propriedade da Coroa." }
    ],
    detailedExplanation: {
      summary: "O sistema de capitanias hereditárias aliou a terceirização do custo colonial ao modelo de sesmarias, gerando as raízes históricas da perversa concentração fundiária e do poder político dos latifundiários no Brasil.",
      stepByStep: [
        "Crise metropolitana: Portugal não tinha recursos no tesouro real para custear a colonização direta de um território continental.",
        "Mecanismo de concessão: Donatários investiam capital próprio em troca de privilégios hereditários e arrecadação tributária local.",
        "Regime de Sesmarias: Para receber terras, o colono precisava comprovar capacidade de cultivo e posses de escravos, inviabilizando pequenas propriedades familiares e gerando a estrutura latifundiária perene do país."
      ],
      coreConcept: "Capitanias Hereditárias, Sesmarias e a Gênese do Latifúndio Brasileiro",
      trapWarning: "No ENEM, sesmaria é a chave histórica para compreender a secular concentração de terras no Brasil contemporâneo."
    },
    commonTraps: [
      "Achar que donatários eram os 'donos proprietários plenos' da terra (a propriedade jurídica final pertencia à Coroa de Portugal)",
      "Supor que todas as capitanias prosperaram (apenas Pernambuco e São Vicente tiveram pleno êxito inicial)"
    ],
    tags: ["capitanias-hereditarias", "sesmarias", "latifundio", "estrutura-fundiaria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-013",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Colônia",
    subtopic: "O Governo-Geral (1548) e a Centralização Administrativa",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Diante do fracasso da maioria das capitanias hereditárias — provocado pela carência de capitais, pela falta de comunicação entre os lotes e pela vigorosa resistência armada dos povos indígenas nativos —, D. João III promulgou em 1548 o Regimento de Tomé de Sousa. O diploma fundou o Governo-Geral, estabeleceu a cidade de Salvador da Bahia como primeira capital da colônia e estruturou um corpo burocrático com o Ouvidor-Mor, o Provedor-Mor e o Capitão-Mor.",
      source: "Historiografia Política Colonial, Manuais Universitários de História, 2024."
    },
    prompt: "A criação do Governo-Geral representou uma inflexão na política colonial lusitana ao:",
    options: [
      { id: "a", text: "estabelecer um polo centralizador do poder metropolitano no litoral para coordenar a arrecadação tributária, a justiça régia e a defesa militar contra agressões internas e externas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "anular todas as concessões de sesmarias e expulsar todos os colonos brancos residentes na América.", isCorrect: false, distractorRationale: "O governo-geral veio apoiar os colonos e garantir a segurança das vilas e engenhos." },
      { id: "c", text: "transferir a sede da corte monárquica de Lisboa para o continente americano no século XVI.", isCorrect: false, distractorRationale: "A transferência da corte só ocorreu em 1808 no período joanino, em contexto totalmente diferente." },
      { id: "d", text: "adotar o sufrágio universal secreto para a escolha democrática dos governantes pelos escravizados.", isCorrect: false, distractorRationale: "Não existia sufrágio popular nem democracia no Império colonial português absolutista." },
      { id: "e", text: "proibir qualquer cobrança de impostos sobre o ouro e o açúcar exportados para a Europa.", isCorrect: false, distractorRationale: "O cargo de Provedor-Mor foi criado exatamente para aumentar a eficiência da arrecadação de tributos para a Coroa." }
    ],
    detailedExplanation: {
      summary: "O Governo-Geral centralizou o comando político-militar da colônia sem suprimir as capitanias existentes, dotando a Coroa de um braço armado e fiscal efetivo para consolidar o domínio no território.",
      stepByStep: [
        "Diagnóstico do fracasso descentralizado: As capitanias isoladas eram vulneráveis a ataques de corsários franceses e a levantes nativos.",
        "Estrutura tripartite do Governo-Geral: Ouvidor-Mor (administração da justiça régia), Provedor-Mor (arrecadação fiscal e fazenda) e Capitão-Mor (defesa militar das costas).",
        "Fundação de Salvador (1549): Escolha estratégica no Recôncavo Baiano, centro geográfico do Atlântico açucareiro."
      ],
      coreConcept: "Governo-Geral: Centralização Administrativa, Defesa Militar e Fiscalização Régia",
      trapWarning: "Cuidado: o Governo-Geral não extinguiu as capitanias hereditárias; ele se sobrepôs a elas como autoridade político-jurídica suprema."
    },
    commonTraps: [
      "Achar que as capitanias foram abolidas com a chegada de Tomé de Sousa",
      "Confundir as funções do Provedor-Mor (fiscal) com o Ouvidor-Mor (juiz)"
    ],
    tags: ["governo-geral", "salvador", "centralizacao", "administracao-colonial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-014",
    area: "humanas",
    competence: 1,
    skill: 4,
    topic: "Brasil Colônia",
    subtopic: "A Companhia de Jesus, Aldeamentos Indígenas e Conflitos com os Colonos",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A chegada dos padres da Companhia de Jesus ao Brasil em 1549 inaugurou uma política de catequese estruturada em aldeamentos e reduções. Enquanto os missionários buscavam salvar as almas dos gentios por meio da imposição da fé católica, do aprendizado de ofícios e do abandono de suas práticas socioculturais tradicionais (como a poligamia e a antropofagia ritual), os colonos e senhores de engenho exigiam a escravização irrestrita dos nativos para suprir a crônica escassez de braços nas lavouras.",
      source: "Antropologia Histórica das Populações Indígenas, 2023."
    },
    prompt: "A atuação dos jesuítas em relação aos povos originários caracterizou-se por uma profunda ambiguidade porque:",
    options: [
      { id: "a", text: "opunha-se à escravização física direta praticada pelos colonos, mas impunha uma tutela rigorosa que promovia a aculturação e a desestruturação dos modos de vida e das crenças ancestrais nativas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "defendia incondicionalmente a preservação integral da cosmologia, dos ritos xamânicos e das guerras rituais indígenas sem qualquer pregação católica.", isCorrect: false, distractorRationale: "O objetivo explícito dos jesuítas era a conversão espiritual e a destruição dos ritos pagãos nativos." },
      { id: "c", text: "organizava levantes armados de nativos para fundar repúblicas socialistas contrárias à monarquia de Portugal.", isCorrect: false, distractorRationale: "A Companhia de Jesus atuava como agente da fé católica sob a bênção do padroado régio luso." },
      { id: "d", text: "concordava plenamente com a escravização em massa de todos os povos originários batizados na Igreja.", isCorrect: false, distractorRationale: "Os jesuítas protegiam os indígenas aldeados contra os cativeiros ilegais dos colonos, admitindo apenas a 'guerra justa'." },
      { id: "e", text: "abandonou o território americano após os primeiros meses de atuação pastoral.", isCorrect: false, distractorRationale: "A Companhia de Jesus permaneceu por mais de dois séculos no Brasil até a expulsão pombalina em 1759." }
    ],
    detailedExplanation: {
      summary: "A missão jesuítica protegia os indígenas do cativeiro mercantil colonial imediato, mas operava como um instrumento de violência simbólica e etnocídio cultural, confinando populações em aldeamentos e submetendo-as à rígida disciplina cristã europeia.",
      stepByStep: [
        "A posição dos colonos: Viam o indígena como mão de obra escrava rápida e barata.",
        "A posição dos jesuítas: Consideravam o indígena um ser inocente com 'alma a ser salva', passível de catequese e batismo.",
        "O conflito: Atritos constantes entre colonos bandeirantes e padres jesuítas (como na expulsão dos jesuítas de São Paulo em 1640 e no Maranhão em 1684).",
        "Conclusão crítica: Proteger contra a escravidão física não significava respeitar a identidade originária; implicava conversão forçada e apagamento cultural."
      ],
      coreConcept: "Ação Jesuítica: Protecionismo Físico Tutelar e Etnocídio Cultural",
      trapWarning: "No ENEM, fuja de visões maniqueístas que retratam os jesuítas como 'heróis benevolentes' ou como 'simples carrascos'; trate-os como agentes da expansão católica e civilizatória europeia da Contrarreforma."
    },
    commonTraps: [
      "Achar que os jesuítas apoiavam a escravidão indígena indiscriminada",
      "Ignorar a destruição dos padrões culturais tradicionais imposta pelas reduções e aldeamentos"
    ],
    tags: ["jesuitas", "aldeamentos", "povos-indigenas", "etnocidio", "aculturacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-015",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Brasil Colônia",
    subtopic: "Invasões Francesas e o Questionamento do Tratado de Tordesilhas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao contestar a divisão do Novo Mundo entre as coroas ibéricas estipulada pelo Tratado de Tordesilhas (1494), o rei Francisco I de França ironizou: 'Gostaria de ver o testamento de Adão que dividiu o mundo entre Portugal e Espanha'. A recusa francesa em reconhecer o monopólio ibérico desdobrou-se em expedições de corsários e na tentativa de fundação de colônias fixas no litoral brasileiro, como a França Antártica na Baía de Guanabara (1555-1567) e a França Equinocial no Maranhão (1612-1615).",
      source: "Relações Internacionais na Época Moderna, Historiografia Clássica, 2024."
    },
    prompt: "O estabelecimento dessas colônias francesas em território pretendido por Portugal dependeu de uma conjuntura geopolítica que envolveu:",
    options: [
      { id: "a", text: "guerras de religião na Europa (refúgio de huguenotes protestantes) e a aliança militar estabelecida com povos nativos adversários dos portugueses, como a Confederação dos Tamoios.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o fornecimento gratuito de armas pelos governantes de Portugal para apoiar seus vizinhos franceses.", isCorrect: false, distractorRationale: "Portugal e França estavam em litígio bélico feroz pelo controle das terras americanas." },
      { id: "c", text: "o apoio unânime e voluntário de todos os padres jesuítas à fundação de colônias protestantes calvinistas.", isCorrect: false, distractorRationale: "Os jesuítas (como Anchieta e Nóbrega) articularam a paz de Iperoig para romper a Confederação dos Tamoios e expulsar os franceses." },
      { id: "d", text: "a extinção de qualquer conflito entre as tribos indígenas tupinambás e tupiniquins.", isCorrect: false, distractorRationale: "A rivalidade histórica entre as tribos foi aproveitada militarmente por franceses e portugueses." },
      { id: "e", text: "a rendição pacífica das forças navais portuguesas sem disparar um único tiro.", isCorrect: false, distractorRationale: "Houve sangrentas batalhas marítimas e terrestres lideradas por Mem de Sá e Estácio de Sá até a expulsão dos franceses." }
    ],
    detailedExplanation: {
      summary: "A presença francesa articulou tensões religiosas europeias (huguenotes fugindo das perseguições católicas na França) e rivalidades nativas locais (aliança com os tupinambás na Confederação dos Tamoios contra o domínio luso).",
      stepByStep: [
        "França Antártica (1555): Liderada por Villegagnon na Baía de Guanabara, contava com calvinistas e católicos.",
        "Confederação dos Tamoios: Coalizão de povos tupinambás revoltados contra a escravidão lusa que se aliou militarmente aos franceses.",
        "Reação portuguesa: Governador-geral Mem de Sá e seu sobrinho Estácio de Sá fundaram o Rio de Janeiro (1565) como praça de guerra, expulsando os franceses em 1567 com o apoio dos tupiniquins liderados por Arariboia."
      ],
      coreConcept: "Invasões Francesas: Disputa pelo Tratado de Tordesilhas, Conflito Religioso e Alianças Indígenas",
      trapWarning: "Lembre-se de que os povos indígenas não eram meros espectadores passivos; eles atuavam ativamente estabelecendo alianças militares estratégicas com as potências europeias em confronto."
    },
    commonTraps: [
      "Achar que as invasões francesas ocorreram sem qualquer participação de populações nativas",
      "Ignorar a dimensão religiosa (calvinistas franceses) na colonização da Baía de Guanabara"
    ],
    tags: ["franca-antartica", "tamoios", "tordesilhas", "rio-de-janeiro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-016",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Brasil Colônia",
    subtopic: "A União Ibérica e a Ocupação Holandesa em Pernambuco",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A crise de sucessão na monarquia portuguesa após o desaparecimento de D. Sebastião levou à União Ibérica (1580-1640), quando o rei Felipe II da Espanha assumiu a coroa lusa. Como a Espanha travava uma prolongada guerra de independência contra os Países Baixos, o monarca proibiu o comércio dos negociantes flamengos com os portos do Império ultramarino português. Em resposta ao embargo, a recém-criada Companhia das Índias Ocidentais (WIC) holandesa financiou a invasão de Salvador (1624) e, com sucesso duradouro, de Olinda e Recife (1630-1654).",
      source: "História Econômica e Política do Nordeste Holandês, 2024."
    },
    prompt: "Durante a administração do conde Maurício de Nassau (1637-1644) em Pernambuco, a presença holandesa destacou-se pela:",
    options: [
      { id: "a", text: "concessão de empréstimos vultosos para a reconstrução de engenhos, tolerância religiosa para judeus e católicos e incentivo às artes, à ciência e à modernização urbana da Cidade Maurícia.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "abolição compulsória imediata do tráfico de escravizados e libertação irrestrita de toda a mão de obra negra nos canaviais.", isCorrect: false, distractorRationale: "Os holandeses mantiveram integralmente a escravidão negra e tornaram-se os maiores traficantes negreiros da época." },
      { id: "c", text: "destruição sistemática de todas as plantações de cana para substituir a lavoura por trigo e oliveiras.", isCorrect: false, distractorRationale: "O objetivo primordial da WIC era justamente o lucro astronômico propiciado pelo refino e comércio do açúcar." },
      { id: "d", text: "proibição total de qualquer manifestação cultural ou pesquisa científica em território nordestino.", isCorrect: false, distractorRationale: "Nassau trouxe pintores renomados (Frans Post, Albert Eckhout) e cientistas (Marcgrave, Piso) para registrar a natureza e sociedade local." },
      { id: "e", text: "transformação de Pernambuco em província vassala subordinada diretamente ao imperador do Japão.", isCorrect: false, distractorRationale: "Absurdo geográfico evidente: o controle era exercido pelos Estados Gerais e pela WIC dos Países Baixos." }
    ],
    detailedExplanation: {
      summary: "O governo nassoviano buscou conciliar os interesses da Companhia Holandesa (WIC) com os senhores de engenho luso-brasileiros através de financiamento agrícola, liberdade de culto e embelezamento urbano de Recife.",
      stepByStep: [
        "Causa da invasão: A União Ibérica fechou os negócios do açúcar aos holandeses, que antes refinavam e distribuíam o produto na Europa.",
        "A era Nassau: Crédito para reativar engenhos, fundação da Sinagoga Kahal Zur Israel (liberdade religiosa para judeus e tolerância a católicos), criação do observatório astronômico e obras de Frans Post e Eckhout.",
        "O pós-Nassau e a Insurreição Pernambucana: A saída de Nassau e a cobrança inflexível dos empréstimos pela WIC levaram os senhores de terra a liderar a guerra de expulsão dos holandeses (1645-1654)."
      ],
      coreConcept: "Invasões Holandesas: WIC, Governo de Maurício de Nassau e a Insurreição Pernambucana",
      trapWarning: "Cuidado com o mito liberal: embora tolerante para os padrões da época, a administração holandesa foi conivente e ampliou o tráfico transatlântico de africanos escravizados."
    },
    commonTraps: [
      "Achar que Nassau libertou os escravizados africanos",
      "Ignorar que a Insurreição Pernambucana foi movida também pelas dívidas financeiras dos proprietários de terras com a WIC"
    ],
    tags: ["uniao-iberica", "holandeses", "pernambuco", "nassau", "acucar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-017",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Colônia",
    subtopic: "O Bandeirismo Paulista: Apresamento, Prospecção e Sertanismo de Contrato",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Capitania de São Paulo dos Campos de Piratininga, isolada pelo paredão da Serra do Mar e desprovida das riquezas dos engenhos açucareiros do Nordeste, desenvolveu uma sociedade mestiça (mameluca) com forte dependência da exploração do trabalho forçado de nativos escravizados. A partir do século XVII, as expedições armadas organizadas pelos paulistas adentraram o sertão continental em três frentes principais: as bandeiras de apresamento de indígenas (que atacavam inclusive as reduções jesuíticas espanholas), as bandeiras de prospecção mineral (que acabariam encontrando ouro) e o sertanismo de contrato (destinado a reprimir rebeliões escravas e destruir quilombos).",
      source: "Historiografia Crítica do Bandeirismo, Manuais de História Social, 2024."
    },
    prompt: "Na historiografia contemporânea e nos exames do ENEM, a atuação dos bandeirantes é analisada criticamente como um processo que:",
    options: [
      { id: "a", text: "combinou a violência sistemática contra populações indígenas e quilombolas com a ampliação fática das fronteiras territoriais da América portuguesa para além do Tratado de Tordesilhas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "promoveu expedições humanitárias pacíficas que respeitavam a autonomia territorial de todas as aldeias e quilombos.", isCorrect: false, distractorRationale: "O bandeirismo operava pela captura violenta de cativos, massacres e pilhagem armada." },
      { id: "c", text: "obedeceu estritamente aos limites fixados pela linha imaginária do Tratado de Tordesilhas sem jamais ultrapassá-la.", isCorrect: false, distractorRationale: "As bandeiras ultrapassaram maciçamente Tordesilhas, incorporando grande parte do Centro-Oeste e Sul ao domínio luso." },
      { id: "d", text: "restringiu-se a debates teológicos pacíficos nos colégios jesuítas da vila de São Paulo.", isCorrect: false, distractorRationale: "Os bandeirantes eram inimigos jurados dos jesuítas, chegando a expulsá-los de São Paulo e destruir missões inteiras no Guairá." },
      { id: "e", text: "foi financiada integralmente por monarcas espanhóis para expulsar colonos portugueses do território.", isCorrect: false, distractorRationale: "As bandeiras eram iniciativas privadas paulistas, muitas vezes sob contrato de senhores de engenho e governadores portugueses." }
    ],
    detailedExplanation: {
      summary: "O mito romântico do bandeirante como 'herói desbravador pioneiro' foi desconstruído pela historiografia: tratavam-se de agentes violentos que capturavam indígenas para vender como escravos e destruíam quilombos (como Domingos Jorge Velho destruindo Palmares), mas cuja expansão territorial subsidiou a futura posse territorial do Brasil.",
      stepByStep: [
        "Ciclos do bandeirismo: Apresamento (captura de nativos), Sertanismo de contrato (mercenários contratados para caçar quilombolas e reprimir revoltas) e Prospecção (busca de metais preciosos).",
        "Consequência territorial: Rasgaram a linha do Tratado de Tordesilhas, permitindo que Portugal reivindicasse o interior pelo princípio do uti possidetis.",
        "Dimensão social: Causaram genocídio indígena e repressão impiedosa aos quilombos de resistência negra."
      ],
      coreConcept: "Bandeirismo: Desmistificação Histórica, Violência Contra Cativos e Expansão Territorial",
      trapWarning: "No ENEM, rejeite qualquer alternativa que classifique os bandeirantes como benfeitores civilizadores desinteressados ou heróis da pátria imaculados."
    },
    commonTraps: [
      "Achar que bandeirantes buscavam apenas ouro desde o início (o apresamento indígena começou muito antes da mineração)",
      "Romantizar as bandeiras ignorando a dizimação das missões jesuíticas e o ataque aos quilombos"
    ],
    tags: ["bandeirantes", "apresamento", "quilombos", "fronteiras", "genocidio-indigena"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-018",
    area: "humanas",
    competence: 1,
    skill: 3,
    topic: "Brasil Colônia",
    subtopic: "A Sociedade Mineradora, Fiscalização Régia e o Barroco Mineiro",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A descoberta de jazidas auríferas no final do século XVII nas Gerais desencadeou uma profunda reconfiguração espacial e social no Brasil. Diferente do isolamento e da rigidez patriarcal da sociedade açucareira rural, a economia mineradora fomentou a urbanização de arraiais e vilas, a atração de imigrantes e de contingentes de escravizados, a expansão de uma classe média de artesãos e profissionais livres e uma densa malha de fiscalização metropolitana (criação da Intendência das Minas, Casas de Fundição e a cobrança do Quinto). Nesse ambiente urbano e religiosamente associativo das irmandades leigas, desabrochou o Barroco Mineiro.",
      source: "Cultura e Sociedade no Século do Ouro, Síntese Histórica, 2024."
    },
    prompt: "Em termos socioculturais e artísticos, o Barroco Mineiro — simbolizado nas obras de Aleijadinho e do Mestre Ataíde — revelou:",
    options: [
      { id: "a", text: "uma expressão estética singular que adaptou matrizes estilísticas europeias à realidade colonial, marcada pelo protagonismo de artistas mestiços e pardos atuantes nas irmandades religiosas e pelo uso criativo de matérias-primas locais, como a pedra-sabão.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "uma cópia idêntica e sem criatividade das catedrais góticas da Idade Média executada unicamente por clérigos nobres nascidos em Portugal.", isCorrect: false, distractorRationale: "O barroco mineiro era original, urbano, setecentista e produzido por leigos mestiços locais, não nobres da cúria." },
      { id: "c", text: "a recusa de qualquer tema sagrado ou religioso em benefício exclusivo de retratos de imperadores chineses.", isCorrect: false, distractorRationale: "A arte barroca mineira era essencialmente sacra católica, financiada pelas irmandades religiosas das vilas." },
      { id: "d", text: "a ausência de qualquer controle ou tributação por parte da Coroa portuguesa sobre o ouro extraído nas lavras.", isCorrect: false, distractorRationale: "A fiscalização régia era sufocante (Quinto, Derrama, Casas de Fundição), gerando constante tensão social." },
      { id: "e", text: "a decadência do comércio interno e a total autossuficiência agrícola das minas sem compra de alimentos de outras capitanias.", isCorrect: false, distractorRationale: "A mineração dinamizou a primeira grande rede de mercado interno colonial brasileiro (tropeiros, gado do Sul e alimentos de São Paulo)." }
    ],
    detailedExplanation: {
      summary: "A sociedade mineradora era dinâmica, urbana e mestiça. O Barroco Mineiro refletiu essa estrutura por meio das irmandades religiosas leigas (como a de São Francisco de Assis), consagrando artistas locais mestiços que utilizaram pedra-sabão e cedro para criar obras-primas escultóricas e pictóricas com traços próprios.",
      stepByStep: [
        "Transformação socioespacial: Mudança da capital de Salvador para o Rio de Janeiro (1763) para vigiar o escoamento do ouro.",
        "Ambiente urbano das Minas: Surgimento de cidades como Vila Rica (Ouro Preto), Mariana e Congonhas.",
        "As irmandades leigas: Como as ordens religiosas regulares (franciscanos, beneditinos) foram proibidas de se instalar nas minas para evitar contrabando, as irmandades de leigos (brancos, pardos e negros) financiaram templos suntuosos.",
        "Inovação estética: Aleijadinho (Antônio Francisco Lisboa) e Manuel da Costa Ataíde imprimiram formas sinuosas, expressividade e elementos mestiços (como anjos mulatos nas pinturas de forro)."
      ],
      coreConcept: "Sociedade Mineradora e o Barroco Mineiro: Urbanização, Mestiçagem e Expressão Artística",
      trapWarning: "No ENEM, valorize a articulação entre as condições econômicas urbanas da mineração e a originalidade da produção artística barroca de artesãos pardos."
    },
    commonTraps: [
      "Achar que o barroco mineiro utilizava mármore de Carrara importado (utilizava fartamente a pedra-sabão e madeira da terra)",
      "Supor que a sociedade mineradora era exclusivamente rural como a dos engenhos de açúcar"
    ],
    tags: ["mineracao", "barroco-mineiro", "aleijadinho", "urbanizacao", "irmandades"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-019",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Brasil Colônia",
    subtopic: "Revoltas Emancipacionistas: Inconfidência Mineira vs. Conjuração Baiana",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No final do século XVIII, sob a influência das ideias iluministas, da Independência das Treze Colônias norte-americanas (1776) e da Revolução Francesa (1789), surgiram na colônia os primeiros movimentos com projetos de ruptura definitiva com Portugal. Em Minas Gerais eclodiu a Inconfidência Mineira (1789), articulada por magistrados, proprietários e intelectuais descontentes com a ameaça da derrama. Na Bahia explodiu a Conjuração Baiana ou Revolta dos Alfaiates (1798), encabeçada por artesãos, alfaiates, soldados de baixa patente e escravizados alforriados.",
      source: "Movimentos Separatistas no Brasil Colonial, Coletânea Documental, 2024."
    },
    prompt: "Ao comparar o perfil social e os projetos programáticos dos dois movimentos contestatórios, constata-se que a Conjuração Baiana de 1798 diferenciou-se fundamentalmente da Inconfidência Mineira de 1789 por:",
    options: [
      { id: "a", text: "possuir base social marcadamente popular e negra, defendendo explicitamente o fim da escravidão, a igualdade racial e a ampliação dos direitos para as classes trabalhadoras.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "restringir sua liderança unicamente a fazendeiros escravistas e proibir qualquer participação de negros ou mestiços.", isCorrect: false, distractorRationale: "Esse perfil elitista e proprietário era característico da Inconfidência Mineira, não da Baiana." },
      { id: "c", text: "reivindicar a manutenção integral da monarquia absolutista portuguesa e o aumento dos impostos coloniais.", isCorrect: false, distractorRationale: "Ambos os movimentos defendiam a proclamação da república e o rompimento dos laços coloniais com Portugal." },
      { id: "d", text: "ter sido vitoriosa em derrubar as autoridades coloniais e instalar um governo permanente que perdurou por décadas.", isCorrect: false, distractorRationale: "Ambas as conjurações foram duramente desmanteladas e reprimidas pela Coroa antes que pudessem tomar o poder." },
      { id: "e", text: "ter sido inspirada exclusivamente na restauração das antigas monarquias da Idade Média.", isCorrect: false, distractorRationale: "Ambas foram inspiradas nas ideias iluministas, na fase jacobina francesa e na autodeterminação republicana." }
    ],
    detailedExplanation: {
      summary: "A Inconfidência Mineira foi um levante de elites proprietárias de escravos (onde não havia consenso sobre a abolição), enquanto a Conjuração Baiana (Revolta dos Alfaiates) foi um movimento popular e negro de vanguarda que conjugou republicanismo, igualdade racial e abolição irrestrita da escravidão.",
      stepByStep: [
        "Inconfidência Mineira (1789): Liderança de elite (doutores, poetas, mineradores endividados com a Coroa). Projeto republicano liberal, mas silenciou sobre a escravidão por temer a perda de seus cativos.",
        "Conjuração Baiana (1798): Liderança popular (Lucas Dantas, Manuel Faustino, João de Deus, soldados e artesãos negros). Propostas: República democrática, abertura dos portos, aumento de soldos e fim imediato da escravidão.",
        "Desfecho repressivo: Em Minas, a punição máxima de morte recaiu apenas sobre Tiradentes (o mais pobre do grupo conspirador); na Bahia, os quatro principais líderes negros e populares foram enforcados e esquartejados em praça pública."
      ],
      coreConcept: "Inconfidência Mineira versus Conjuração Baiana: Elitismo vs. Popularismo e a Questão da Escravidão",
      trapWarning: "Esta é uma das questões mais recorrentes no ENEM: a Inconfidência Mineira NÃO propôs a abolição da escravidão, ao passo que a Conjuração Baiana tinha a abolição e a igualdade racial como bandeiras centrais inegociáveis."
    },
    commonTraps: [
      "Afirmar que Tiradentes e os inconfidentes mineiros queriam libertar todos os escravizados do Brasil",
      "Desconsiderar a presença e o protagonismo popular na Revolta dos Alfaiates na Bahia"
    ],
    tags: ["inconfidencia-mineira", "conjuracao-baiana", "revoltas-emancipacionistas", "iluminismo", "abolicionismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-020",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Brasil Colônia",
    subtopic: "O Tratado de Madri (1750) e o Princípio do 'Uti Possidetis'",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao longo dos séculos XVII e XVIII, a expansão das bandeiras paulistas, as missões religiosas carmelitas e franciscanas nos vales fluviais amazônicos e as tropas de gado no sul extrapolaram largamente a linha divisória do Tratado de Tordesilhas. Em 1750, as coroas de Portugal e Espanha firmaram o Tratado de Madri. Conduzido pelo diplomata luso-brasileiro Alexandre de Gusmão, o tratado revogou Tordesilhas e adotou a doutrina jurídica romana do 'uti possidetis, ita possideatis' (quem possui de fato a terra, tem direito à sua posse de direito), além de utilizar acidentes geográficos naturais (rios e serras) para delimitar as fronteiras.",
      source: "Tratados Internacionais e Formação Territorial do Brasil, Síntese Histórica, 2024."
    },
    prompt: "A assinatura do Tratado de Madri foi de fundamental importância para a consolidação geopolítica do Brasil porque:",
    options: [
      { id: "a", text: "conferiu legitimidade jurídica internacional à interiorização e fixação territorial dos colonos luso-brasileiros, delineando as bases espaciais do futuro Estado independente.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "reduziu o território português a uma pequena faixa litorânea de cinquenta quilômetros de largura.", isCorrect: false, distractorRationale: "O tratado consagrou a expansão para o interior e mais que duplicou a área reconhecida para Portugal." },
      { id: "c", text: "obrigou a Coroa portuguesa a devolver todo o território amazônico e o Centro-Oeste à Espanha.", isCorrect: false, distractorRationale: "Portugal garantiu a posse inconteste da Amazônia e de todo o Centro-Oeste no Tratado de Madri." },
      { id: "d", text: "estabeleceu a imediata independência política e econômica de todas as colônias latino-americanas.", isCorrect: false, distractorRationale: "O tratado foi um acordo entre monarquias colonizadoras para repartir territórios ultramarinos sob seu domínio." },
      { id: "e", text: "aboliu o direito de propriedade e transferiu todas as terras americanas para o papado romano.", isCorrect: false, distractorRationale: "O tratado consolidou o direito territorial das monarquias soberanas ibéricas signatárias." }
    ],
    detailedExplanation: {
      summary: "O Tratado de Madri (1750) representou o triunfo da diplomacia do 'uti possidetis': a posse efetiva e ocupação do solo conferiram a Portugal o reconhecimento legal sobre vastas extensões territoriais que superavam em muito o Tratado de Tordesilhas.",
      stepByStep: [
        "A desatualização de Tordesilhas: Bandeirantes, jesuítas e criadores de gado haviam povoado áreas muito a oeste do meridiano de 1494.",
        "Princípio do Uti Possidetis: Defendido com brilhantismo por Alexandre de Gusmão, estabeleceu que a ocupação efetiva prevalecia sobre linhas imaginárias traçadas no papel três séculos antes.",
        "Permuta de territórios: Portugal cedeu a Colônia do Sacramento (no Rio da Prata) em troca dos Sete Povos das Missões (no atual Rio Grande do Sul), gerando conflitos com os guaranis aldeados (Guerras Guaraníticas).",
        "Conclusão: O Tratado de Madri conferiu à América portuguesa uma fisionomia geográfica muito semelhante à do Brasil atual."
      ],
      coreConcept: "Tratado de Madri (1750): Uti Possidetis, Fronteiras Naturais e Formação Territorial",
      trapWarning: "No ENEM, lembre-se de que o Tratado de Madri desencadeou as Guerras Guaraníticas (1753-1756), quando indígenas liderados por Sepé Tiaraju resistiram a entregar suas terras para a Coroa de Portugal."
    },
    commonTraps: [
      "Achar que o Tratado de Madri manteve os limites do Tratado de Tordesilhas",
      "Esquecer o significado do princípio 'uti possidetis' (posse efetiva do solo)"
    ],
    tags: ["tratado-de-madri", "uti-possidetis", "fronteiras", "alexandre-de-gusmao", "formacao-territorial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-021",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Brasil Colônia",
    subtopic: "Abertura dos Portos (1808) e o Fim do Pacto Colonial",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Assim que aportou em Salvador em janeiro de 1808, fugindo da invasão napoleônica na Península Ibérica sob escolta da esquadra britânica, o príncipe regente D. João assinou a Carta Régia de Abertura dos Portos às Nações Amigas. O decreto revogou séculos de monopólio mercantil absoluto exercido por Lisboa sobre a colônia americana.",
      source: "História Econômica do Brasil e o Período Joanino"
    },
    prompt: "Do ponto de vista econômico e estrutural, o significado histórico decisivo da Abertura dos Portos em 1808 foi o(a):",
    options: [
      { id: "a", text: "rompimento definitivo do Exclusivo Metropolitano (Pacto Colonial), inaugurando o livre comércio e a hegemonia das manufaturas da Grã-Bretanha no mercado brasileiro.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "abolição imediata do cativeiro de africanos e a reforma agrária popular nas sesmarias litorâneas.", isCorrect: false, distractorRationale: "O período joanino manteve intacta a estrutura fundiária concentrada e intensificou o tráfico transatlântico negreiro." },
      { id: "c", text: "transferência da capital administrativa da colônia do Rio de Janeiro de volta para Salvador da Bahia.", isCorrect: false, distractorRationale: "A sede da corte instalou-se no Rio de Janeiro, que permaneceu capital até 1960." },
      { id: "d", text: "proibição de importação de qualquer mercadoria proveniente da Europa Ocidental.", isCorrect: false, distractorRationale: "A abertura dos portos inundou o Brasil de mercadorias europeias, especialmente britânicas." },
      { id: "e", text: "nacionalização compulsória de todas as fábricas têxteis da América portuguesa pelo Reino Unido.", isCorrect: false, distractorRationale: "A Carta Régia autorizou a liberdade fabril, mas os tratados de 1810 estrangularam a indústria nascente com importados ingleses mais baratos." }
    ],
    detailedExplanation: {
      summary: "A Abertura dos Portos de 1808 liquidou a espinha dorsal do sistema colonial mercantilista: o Exclusivo Metropolitano. A partir desse ato, a colônia pôde comercializar diretamente com qualquer nação amiga (na prática, a Grã-Bretanha). Em 1810, os Tratados de Aliança e Comércio fixaram tarifas alfandegárias de apenas 15% para produtos ingleses (mais baratas que os 16% de Portugal e 24% de outros países), selando a dependência do Brasil em relação aos produtos industrializados britânicos.",
      stepByStep: [
        "1. Pacto Colonial pré-1808: o Brasil só podia comprar e vender mercadorias através de intermediários da burguesia de Lisboa.",
        "2. Fuga da família real (1808): sob bloqueio continental de Napoleão, Portugal dependeu da Marinha Britânica.",
        "3. Decreto de 1808: D. João franqueia os portos, acabando juridicamente com o exclusivo metropolitano.",
        "4. Tratados de 1810: consolidação dos privilégios britânicos (tarifas alfandegárias privilegiadas de 15% e foro especial de juízes conservadores ingleses).",
        "5. Consequência: independência econômica precoce em relação a Portugal, mas subordinação direta à hegemonia capitalista inglesa."
      ],
      coreConcept: "Abertura dos Portos (1808): Fim do Pacto Colonial e Primazia Comercial Britânica",
      trapWarning: "Cuidado: a independência econômica do Brasil ocorreu em 1808 com a Abertura dos Portos! A independência política em 1822 foi o desfecho formal de um processo já iniciado com D. João."
    },
    commonTraps: [
      "Achar que o Pacto Colonial acabou apenas no Grito do Ipiranga em 1822",
      "Esquecer que a Grã-Bretanha pagava tarifas menores que o próprio Portugal nos portos brasileiros (Tratados de 1810)"
    ],
    tags: ["periodo-joanino", "abertura-dos-portos", "pacto-colonial", "gra-bretanha", "exclusivo-metropolitano"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-022",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Brasil Colônia",
    subtopic: "A Revolução Pernambucana de 1817",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1817, eclodiu em Pernambuco uma revolta armada que depôs o governador régio e instaurou uma república autônoma por mais de dois meses. O movimento reuniu clérigos católicos (conhecido como a 'Revolução dos Padres'), proprietários de terras, militares e maçons, revoltados com os pesados tributos cobrados pela corte de D. João VI instalada no Rio de Janeiro para financiar o luxo da corte imperial, em pleno cenário de grave seca no Nordeste e queda nos preços internacionais do açúcar e do algodão.",
      source: "Movimentos Emancipacionistas e Crise do Antigo Sistema Colonial"
    },
    prompt: "A Revolução Pernambucana de 1817 diferenciou-se das conjurações mineira e baiana do século XVIII pelo fato de:",
    options: [
      { id: "a", text: "ter ultrapassado a fase conspiratória teórica e assumido concretamente o poder político efetivo, instituindo um governo republicano provisório com constituição e liberdade de culto.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ter defendido a submissão voluntária incondicional de todo o Nordeste à soberania absolutista da Espanha.", isCorrect: false, distractorRationale: "O movimento era republicano, iluminista e radicalmente anticolonialista luso e ibérico." },
      { id: "c", text: "ter sido a única revolta colonial a decretar a imediata abolição de todos os escravizados africanos das lavouras de cana.", isCorrect: false, distractorRationale: "Os líderes proprietários de 1817 mantiveram a escravidão para preservar o apoio das elites açucareiras e canavieiras." },
      { id: "d", text: "ter sido liderada exclusivamente por operários industriais anarcossindicalistas das fábricas têxteis do Recife.", isCorrect: false, distractorRationale: "Não existiam indústrias modernas nem movimento operário no Brasil em 1817; a liderança era agrária, eclesiástica e militar." },
      { id: "e", text: "ter contado com o apoio militar direto de tropas de Napoleão Bonaparte desembarcadas em Olinda.", isCorrect: false, distractorRationale: "Napoleão estava derrotado e preso na Ilha de Santa Helena em 1817." }
    ],
    detailedExplanation: {
      summary: "A Revolução Pernambucana de 1817 foi o único movimento emancipacionista colonial que conseguiu tomar o poder e governar. Os revolucionários proclamaram a República, instituíram a Lei Orgânica Provisória (com separação de poderes, liberdade de imprensa e de consciência religiosa), mas preservaram a escravidão para manter a coesão da elite rural proprietária.",
      stepByStep: [
        "1. Fatores de insatisfação: Altos impostos drenados para manter o funcionalismo e a corte de D. João VI no Rio de Janeiro + seca de 1816 + crise açucareira.",
        "2. Ideologia: Republicanismo, Iluminismo e patriotismo regional pernambucano alimentado pelo Seminário de Olinda e pela Maçonaria (Areópago de Itambé).",
        "3. Tomada do poder: Em 6 de março de 1817, militares e civis expulsam o governador Caetano Pinto de Miranda Montenegro.",
        "4. Governo Republicano: Durou cerca de 75 dias, enviou embaixadores aos EUA e à Inglaterra buscando reconhecimento internacional e tentou expandir a revolta para Paraíba, Rio Grande do Norte e Ceará.",
        "5. Contradição interna: Apesar do discurso liberal avançado, manteve a escravidão negra por pressão dos grandes senhores de engenho da bancada de governo.",
        "6. Repressão: Bloqueio naval do Recife pela frota régia e execução violenta dos principais líderes (como Domingos José Martins e Padre João Ribeiro)."
      ],
      coreConcept: "Revolução Pernambucana de 1817: Tomada do Poder, Republicanismo Provisório e Limites Sociais",
      trapWarning: "Cuidado: 1817 foi republicana e liberal, MAS NÃO ABOLIU A ESCRAVIDÃO! O medo de uma rebelião haitiana de negros fez a elite pernambucana garantir a propriedade dos cativos."
    },
    commonTraps: [
      "Achar que 1817 ficou apenas na conspiração como a Inconfidência Mineira (1817 GOVERNOU de fato)",
      "Confundir 1817 com a Conjuração Baiana de 1798 no tocante à abolição da escravidão"
    ],
    tags: ["revolucao-pernambucana-1817", "republicanismo", "seminario-de-olinda", "periodo-joanino", "emancipacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-023",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Brasil Colônia",
    subtopic: "A Sociedade do Açúcar e a Estrutura Patriarcal Colonial",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na América portuguesa dos séculos XVI e XVII, o engenho de cana-de-açúcar estruturou muito mais do que um complexo agroexportador: forjou um modelo de organização social profundamente hierarquizado e polarizado. Em torno do senhor de engenho gravitavam familiares, agregados livres sem posses, trabalhadores assalariados especializados e a esmagadora massa de africanos escravizados, sob a égide moral do catolicismo tridentino.",
      source: "Gilberto Freyre, Casa-Grande & Senzala e História Social da América Portuguesa"
    },
    prompt: "Essa sociedade açucareira colonial caracterizava-se essencialmente pelo(a):",
    options: [
      { id: "a", text: "patriarcalismo autoritário, no qual o senhor de engenho concentrava poder quase absoluto sobre a família, os agregados e os cativos, aliado a uma rígida estratificação social com baixa mobilidade vertical.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "predomínio de uma ampla classe média urbana assalariada dotada de direitos políticos e voto universal secreto.", isCorrect: false, distractorRationale: "A sociedade açucareira era eminentemente rural, bipartida entre senhores e escravizados, sem classe média expressiva ou voto democrático." },
      { id: "c", text: "igualitarismo comunitário derivado do desapego franciscano às terras e à riqueza agroexportadora.", isCorrect: false, distractorRationale: "O sistema fundava-se na exploração violenta da mão de obra forçada e na acumulação mercantilista privada." },
      { id: "d", text: "subordinação irrestrita dos latifundiários às ordens das assembleias operárias de manufaturas têxteis.", isCorrect: false, distractorRationale: "Não havia fábricas nem operários; os senhores de engenho ('homens bons') dominavam as Câmaras Municipais." },
      { id: "e", text: "secularização e laicidade radical do Estado, que proibia qualquer manifestação católica nos engenhos.", isCorrect: false, distractorRationale: "A Igreja Católica era o esteio ideológico oficial e todas as fazendas possuíam capelas onde se realizavam missas e batismos compulsórios." }
    ],
    detailedExplanation: {
      summary: "A sociedade açucareira do Nordeste colonial era rural, patriarcal, escravista e estratificada. A Casa-Grande concentrava o comando político e econômico nas mãos do patriarca (senhor de engenho), cujas vontades privadas se sobrepunham frequentemente às leis distantes da Coroa portuguesa, enquanto a Senzala abrigava os escravizados desprovidos de direitos jurídicos.",
      stepByStep: [
        "1. Ruralismo: a vida social girava em torno dos canaviais e da casa-grande, e não das cidades (que eram pequenos entrepostos portuários).",
        "2. Patriarcalismo: o pai de família e senhor exercia domínio sobre a esposa, filhos, filhas (casamentos arranjados por interesses patrimoniais), afilhados e agregados.",
        "3. Poder político local: os senhores de engenho controlavam as Câmaras Municipais (os 'homens bons'), detendo poder de polícia e justiça local informal.",
        "4. Bipolaridade social: topo formado pela elite branca açucareira e base composta pela maioria escravizada negra/indígena, com um estrato intermediário reduzido de homens livres pobres e despossuídos."
      ],
      coreConcept: "A Sociedade do Açúcar: Patriarcalismo, Ruralismo e Escravismo Colonial",
      trapWarning: "No ENEM, lembre-se de que patriarcalismo colonial não significa apenas 'machismo familiar', mas uma forma de poder político e social privado onde o senhor manda em toda a comunidade ao redor do engenho."
    },
    commonTraps: [
      "Achar que a sociedade açucareira era urbana e dinâmica como a das cidades mineradoras",
      "Ignorar o papel dos homens livres pobres (agregados) como dependentes clientelistas do senhor"
    ],
    tags: ["sociedade-do-acucar", "patriarcalismo", "casa-grande-e-senzala", "escravismo", "brasil-colonial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-024",
    area: "humanas",
    competence: 3,
    skill: 15,
    topic: "Brasil Colônia",
    subtopic: "A Economia da Mineração e a Urbanização no Século XVIII",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A descoberta de ouro nos vales fluviais das Minas Gerais no final do século XVII e início do século XVIII provocou uma corrida populacional sem precedentes na América portuguesa. Em poucas décadas, surgiram vilas populosas e dinâmicas como Vila Rica (Ouro Preto), Mariana e Sabará, integrando rotas de tropeiros de gado do Sul e alimentos do Nordeste, em contraste gritante com a sociedade ruralizada e estática do litoral canavieiro.",
      source: "Laura de Mello e Souza, Desclassificados do Ouro e História de Minas Colonial"
    },
    prompt: "Entre as transformações econômicas e socioculturais provocadas pelo ciclo da mineração no Brasil destaca-se:",
    options: [
      { id: "a", text: "a emergência de uma malha urbana diversificada com classes médias, escravizados de ganho com mobilidade espacial e florescimento cultural do Barroco, além do deslocamento do eixo econômico e político para o Centro-Sul.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o esvaziamento completo de todas as vilas do interior e o confinamento de 100% da população na fronteira com a Bolívia.", isCorrect: false, distractorRationale: "A mineração provocou intensa ocupação urbana e concentração demográfica no atual Sudeste brasileiro." },
      { id: "c", text: "a extinção da tributação régia pela Coroa portuguesa que declarou a extração mineral livre de quaisquer impostos.", isCorrect: false, distractorRationale: "Portugal criou a mais pesada e severa máquina fiscal da história colonial: Quinto, Capitação, Casas de Fundição e a odiada Derrama." },
      { id: "d", text: "a diminuição do tráfico de africanos escravizados devido à substituição integral da mão de obra por máquinas a vapor.", isCorrect: false, distractorRationale: "O século do ouro registrou a entrada de centenas de milhares de escravizados africanos no trabalho desumano das galerias e aluviões." },
      { id: "e", text: "a manutenção definitiva de Salvador como capital perpétua de todo o Império ultramarino luso.", isCorrect: false, distractorRationale: "Em 1763, o Marquês de Pombal transferiu a capital de Salvador para o Rio de Janeiro para melhor fiscalizar o ouro minerado." }
    ],
    detailedExplanation: {
      summary: "O ciclo do ouro alterou os rumos do Brasil colonial em múltiplos aspectos: 1) Integrou o território (criação do mercado interno via tropeirismo); 2) Transferiu a capital colonial de Salvador para o Rio de Janeiro (1763); 3) Criou uma sociedade urbana com maior mobilidade (artesãos, alfaiates, tropeiros, burocratas, padres, advogados); 4) Possibilitou a figura dos 'escravizados de ganho' (comércio de rua que podia juntar pecúlio para comprar a alforria); 5) Despertou o Barroco e Rococó mineiro (Aleijadinho e Mestre Ataíde).",
      stepByStep: [
        "1. Urbanização: surgimento de núcleos urbanos densos com intenso comércio e serviços especializados.",
        "2. Fiscalismo metropolitano: Casas de Fundição (onde o ouro era fundido em barras, selado com o brasão real e descontado o Quinto de 20%) e a ameaça da Derrama.",
        "3. Interiorização: povoamento do Centro-Oeste e Sudeste (Minas, Goiás e Mato Grosso).",
        "4. Dinamismo do mercado interno: compra de charque e mulas do Rio Grande do Sul e cachaça/rapadura de São Paulo e Nordeste.",
        "5. Conclusão: a mineração formou o embrião da integração econômica nacional."
      ],
      coreConcept: "Ciclo do Ouro: Urbanização, Fiscalismo Régio, Mercado Interno e Deslocamento do Eixo Colonial",
      trapWarning: "No ENEM, contraste sempre a sociedade do AÇÚCAR (rural, patriarcal, rígida) com a da MINERAÇÃO (urbana, heterogênea, com setores médios e maior circulação social)."
    },
    commonTraps: [
      "Achar que na mineração o trabalho era livre e remunerado (continuou sendo predominantemente ESCRAVISTA)",
      "Esquecer da transferência da capital colonial para o Rio de Janeiro em 1763"
    ],
    tags: ["ciclo-do-ouro", "minas-gerais", "urbanizacao", "barroco-mineiro", "fiscalismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-BRC-025",
    area: "humanas",
    competence: 3,
    skill: 14,
    topic: "Brasil Colônia",
    subtopic: "Resistência Negra e a Organização do Quilombo dos Palmares",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao longo do século XVII, na Serra da Barriga (atual estado de Alagoas), consolidou-se o Quilombo dos Palmares, a maior república de escravizados fugidos da história das Américas, abrigando mais de 20 mil habitantes em uma rede fortificada de mocambos (como Macaco, Subupira e Zumbi). Para além de um mero refúgio militar contra capatazes, Palmares constituiu uma complexa sociedade autônoma baseada na policultura camponesa (mandioca, milho, feijão, cana), na metalurgia do ferro e na recriação de tradições culturais e políticas de matriz bantu.",
      source: "Flávio dos Santos Gomes, A Hidra e os Pântanos: Quilombos e Mocambos no Brasil"
    },
    prompt: "A longevidade secular e o significado histórico do Quilombo dos Palmares como símbolo máximo de resistência negra demonstraram que:",
    options: [
      { id: "a", text: "a escravidão nunca foi aceita passivamente pelos cativos, gerando espaços alternativos autossuficientes de liberdade e reelaboração comunitária que desafiaram frontalmente a ordem colonial escravista.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "os fugitivos pretendiam apenas negociar sua rendição imediata em troca de cargos na corte portuguesa de Lisboa.", isCorrect: false, distractorRationale: "Palmares resistiu militarmente por quase um século a dezenas de expedições holandesas e portuguesas para manter sua independência." },
      { id: "c", text: "as fugas de escravizados eram estimuladas e financiadas pelos próprios senhores de engenho para reduzir despesas com alimentação.", isCorrect: false, distractorRationale: "Os senhores viam a fuga como roubo de patrimônio valioso e financiavam capitães-do-mato para caçar e recapturar cativos." },
      { id: "d", text: "a resistência quilombola foi um fenômeno pacífico e sem qualquer tipo de confronto armado com forças mercenárias.", isCorrect: false, distractorRationale: "Palmares foi alvo de guerras sangrentas e foi destruído militarmente por bandeirantes paulistas armados com canhões." },
      { id: "e", text: "a Coroa portuguesa concedeu independência política soberana perpétua a Palmares através de um tratado assinado em Roma.", isCorrect: false, distractorRationale: "A Coroa financiou o bandeirante Domingos Jorge Velho para sitiar, queimar e massacrar Palmares em 1694-1695." }
    ],
    detailedExplanation: {
      summary: "O Quilombo dos Palmares desmente a visão preconceituosa e passiva da escravidão. Os quilombos não eram apenas esconderijos provisórios, mas comunidades agrícolas organizadas com economia camponesa diversificada, comércio com vilas vizinhas e sistemas defensivos sofisticados. A destruição do Mocambo do Macaco em 1694 e a morte de Zumbi em 20 de novembro de 1695 simbolizam a ferocidade com que o Estado colonial reprimia qualquer alternativa viável de liberdade negra.",
      stepByStep: [
        "1. Desconstrução do mito da docilidade escrava: escravizados resistiram por revoltas armadas, fugas coletivas, formação de quilombos, suicídios e quebra de ferramentas.",
        "2. Estrutura de Palmares: confederação de mocambos autônomos na Serra da Barriga liderada por Ganga Zumba e posteriormente por Zumbi e Dandara.",
        "3. Economia de subsistência: cultivo variado de gêneros alimentícios, criação de galinhas e porcos, cestaria e fundição de lanças de ferro.",
        "4. Ameaça ao sistema colonial: Palmares atraía escravizados de toda a região e provava que uma sociedade livre de senhores era viável.",
        "5. Desfecho: o governo colonial contratou o bandeirante paulista Domingos Jorge Velho, que utilizou armas pesadas para destruir a fortificação em 1694. Zumbi foi capturado e executado em 20 de novembro de 1695 (data comemorativa do Dia da Consciência Negra)."
      ],
      coreConcept: "Quilombo dos Palmares: Resistência Negra, Policultura Comunitária e Consciência Negra",
      trapWarning: "No ENEM, valorize a agência e o protagonismo histórico da população negra: o 20 de novembro (Zumbi) foi escolhido pelos movimentos negros exatamente para contrapor o 13 de maio (Princesa Isabel), afirmando a liberdade como conquista e luta, e não como benesse outorgada de cima para baixo!"
    },
    commonTraps: [
      "Achar que os escravizados aceitavam passivamente a violência do cativeiro",
      "Reduzir o quilombo a um mero acampamento militar provisório, ignorando sua rica organização econômica e social"
    ],
    tags: ["quilombo-dos-palmares", "zumbi", "resistencia-negra", "quilombos", "consciencia-negra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

