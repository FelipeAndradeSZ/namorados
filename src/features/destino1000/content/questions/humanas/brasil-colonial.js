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
  }
];

