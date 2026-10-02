/**
 * BANCO DE QUESTÕES DESTINO 1000
 * Módulo: Brasil Império (Primeiro Reinado, Regências e Segundo Reinado)
 * Área: Ciências Humanas e suas Tecnologias (História)
 * Total: 25 Questões originais e contextualizadas padrão ENEM
 * Competências: C3 | Habilidades: H11, H12, H13, H14
 */

export const QUESTIONS_BRASIL_IMPERIO = [
  {
    id: "HUM-IMP-001",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Primeiro Reinado - Constituição de 1824 e Poder Moderador",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Poder Moderador é a chave de toda a organização política e é delegado privativamente ao Imperador, como Chefe Supremo da Nação e seu Primeiro Representante, para que incessantemente vele sobre a manutenção da independência, equilíbrio e harmonia dos mais Poderes políticos.\nArt. 99. A pessoa do Imperador é sagrada e inviolável: Ele não está sujeito a responsabilidade alguma.",
      source: "BRASIL. Constituição Política do Império do Brasil, outorgada em 25 de março de 1824."
    },
    prompt: "A criação do Poder Moderador na Carta Constitucional outorgada por D. Pedro I estabeleceu uma estrutura institucional que, na prática,",
    options: [
      {
        id: "a",
        text: "assegurava a soberania popular irrestrita por meio de sufrágio universal direto e secreto.",
        isCorrect: false,
        distractorRationale: "O voto era censitário (baseado na renda em moeda/farinha) e indireto, excluindo mulheres, escravizados e a maioria da população livre pobre."
      },
      {
        id: "b",
        text: "subordinava as decisões do monarca à aprovação prévia e vinculante do Conselho de Estado e da Câmara dos Deputados.",
        isCorrect: false,
        distractorRationale: "O monarca nomeava os conselheiros de Estado vitaliciamente e podia dissolver a Câmara dos Deputados através do próprio Poder Moderador."
      },
      {
        id: "c",
        text: "conferia ao soberano prerrogativas de intervir sobre os poderes Legislativo, Judiciário e Executivo, consolidando o absolutismo prático sob roupagem liberal.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Inspirado no teórico Benjamin Constant, o Poder Moderador permitia dissolver a Câmara, nomear senadores vitalícios, suspender magistrados e vetar leis, concentrando poder quase absoluto nas mãos do Imperador."
      },
      {
        id: "d",
        text: "consagrava a separação rígida e simétrica dos três poderes preconizada pelo barão de Montesquieu.",
        isCorrect: false,
        distractorRationale: "A inclusão de um quarto poder superior que podia destituir ou intervir nos outros três rompe com o modelo tripartite clássico de Montesquieu."
      },
      {
        id: "e",
        text: "garantia autonomia tributária plena às províncias com a descentralização federativa das forças de segurança.",
        isCorrect: false,
        distractorRationale: "A Constituição de 1824 era rigidamente centralizadora; os presidentes de província eram diretamente nomeados pelo Imperador."
      }
    ],
    detailedExplanation: {
      summary: "O Poder Moderador outorgado em 1824 sobrepunha o Imperador aos demais poderes, garantindo centralização autoritária.",
      stepByStep: [
        "1. Após dissolver à força a Constituinte de 1823 ('Noite da Agonia'), D. Pedro I reuniu um Conselho de Notáveis para redigir a Carta de 1824.",
        "2. A Constituição estabeleceu quatro poderes: Executivo, Legislativo, Judiciário e Moderador.",
        "3. O Poder Moderador era privativo e vitalício do Imperador, definido como neutro e harmonizador, mas de fato atuava como superpoder de intervenção discricionária.",
        "4. D. Pedro I podia dissolver a Câmara dos Deputados, nomear e demitir ministros, nomear senadores em lista tríplice vitalícia, sancionar leis e perdoar penas judiciais.",
        "5. Isso garantia o controle estrito das elites palacianas sobre as províncias e a vida política nacional."
      ],
      coreConcept: "Constituição de 1824: Outorgada (imposta), voto censitário e indireto, catolicismo oficial subordinado ao Estado (padroado/beneplácito), e 4 poderes com primazia do Poder Moderador.",
      trapWarning: "Cuidado: a Constituição de 1824 foi OUTORGADA por D. Pedro I, e não promulgada por uma assembleia constituinte livre."
    },
    tags: ["humanas", "brasil-imperio", "constituicao-1824", "poder-moderador", "primeiro-reinado"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-002",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Brasil Império",
    subtopic: "Primeiro Reinado - Confederação do Equador (1824)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A outorga autoritária da Carta Constitucional de 1824 e a nomeação arbitrária de um presidente de província pelo Rio de Janeiro desencadearam forte revolta em Pernambuco. Liderados por figuras como Manuel de Carvalho Pais de Andrade e Frei Caneca, os rebeldes conclamaram as províncias vizinhas (Ceará, Rio Grande do Norte e Paraíba) à rebelião republicana.",
      source: "MELLO, Evaldo Cabral de. A Outra Independência: O Federalismo Pernambucano de 1817 a 1824. Editora 34, 2004."
    },
    prompt: "O movimento revolucionário conhecido como Confederação do Equador (1824) tinha como propostas centrais a",
    options: [
      {
        id: "a",
        text: "defesa do retorno imediato do Reino do Brasil à subordinação colonial perante as Cortes de Lisboa.",
        isCorrect: false,
        distractorRationale: "Os revoltosos eram veementemente contrários ao retorno da dominação portuguesa, defendendo soberania republicana local."
      },
      {
        id: "b",
        text: "criação de uma república federativa norteada pela autonomia das províncias e pela oposição ao centralismo absolutista do Poder Moderador.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Inspirados na Constituição dos EUA e no republicanismo pernambucano de 1817, os líderes propunham um Estado republicano confederado e descentralizado."
      },
      {
        id: "c",
        text: "manutenção da monarquia centralizada com transferência definitiva da capital do Império para Recife.",
        isCorrect: false,
        distractorRationale: "A proposta era republicana e não monarquista, e visava a confederação regional de províncias, não a simples troca de corte imperial."
      },
      {
        id: "d",
        text: "adesão incondicional à Santa Aliança monárquica europeia para erradicar ideais liberais das Américas.",
        isCorrect: false,
        distractorRationale: "A Confederação do Equador era um movimento liberal e republicano, radicalmente oposto ao conservadorismo da Santa Aliança."
      },
      {
        id: "e",
        text: "repartição imediata de latifúndios canavieiros entre a totalidade da massa escravizada sem indenização.",
        isCorrect: false,
        distractorRationale: "Embora houvesse setores populares e Frei Caneca debatesse o tema, as elites proprietárias temiam a questão abolicionista ampla, que dividiu e fragilizou o movimento."
      }
    ],
    detailedExplanation: {
      summary: "A Confederação do Equador foi uma revolta liberal, republicana e federalista contra a centralização da Constituição de 1824.",
      stepByStep: [
        "1. Insatisfação popular e das elites liberais do Nordeste com o fechamento da Constituinte de 1823 e o Poder Moderador outorgado.",
        "2. Estopim: D. Pedro I destituiu o presidente eleito de Pernambuco (Pais de Andrade) e impôs Francisco de Paiva Barreto.",
        "3. Proclamação da Confederação do Equador em 2 de julho de 1824, unindo Pernambuco, Ceará, Paraíba e Rio Grande do Norte.",
        "4. Defesa da República Federativa, liberdade de imprensa e autonomia das províncias.",
        "5. O movimento foi reprimido com extrema violência pelas tropas imperiais com apoio de mercenários estrangeiros comandados por Lord Cochrane; Frei Caneca foi fuzilado em 1825."
      ],
      coreConcept: "Confederação do Equador (1824): República + Federalismo + Crítica ao Poder Moderador. Repressão violenta por D. Pedro I.",
      trapWarning: "Lembre-se de que Frei Caneca foi condenado à forca, mas como nenhum carrasco aceitou enforcá-lo por respeito popular, foi fuzilado."
    },
    tags: ["humanas", "brasil-imperio", "confederacao-do-equador", "frei-caneca", "republicanismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-003",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Período Regencial - Criação da Guarda Nacional (1831)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Criada pelo padre Diogo Antônio Feijó em agosto de 1831, em meio ao turbulento período que sucedeu a abdicação de D. Pedro I, a Guarda Nacional nasceu como força paramilitar civil. Subordinada aos juízes de paz locais e ao Ministério da Justiça, seus quadros de oficiais exigiam renda censitária idêntica à dos eleitores de paróquia.",
      source: "FAORO, Raymundo. Os Donos do Poder: Formação do Patronato Político Brasileiro. 3ª ed. Globo, 2001."
    },
    prompt: "A estruturação da Guarda Nacional no contexto regencial visava precipuamente a",
    options: [
      {
        id: "a",
        text: "fortalecer o Exército regular permanente e assegurar o controle centralizado do Ministério da Guerra sobre os contingentes do interior.",
        isCorrect: false,
        distractorRationale: "A Guarda Nacional foi criada exatamente para esvaziar o Exército regular, visto pelos liberais como uma força potencialmente rebelde e indisciplinada."
      },
      {
        id: "b",
        text: "armar os grandes proprietários de terras e seus prepostos para conter agitações populares e garantir a ordem pública escravista no plano local.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A Guarda Nacional entregou patentes de coronel e major aos grandes fazendeiros latifundiários, institucionalizando o poder privado dos senhores de terras e embasando o coronelismo rural."
      },
      {
        id: "c",
        text: "promover o alistamento universal e obrigatório de trabalhadores escravizados em troca da concessão de alforria imediata.",
        isCorrect: false,
        distractorRationale: "Pessoas escravizadas eram expressamente proibidas de portar armas ou ingressar na Guarda Nacional."
      },
      {
        id: "d",
        text: "organizar um destacamento naval expedicionário para reanexar militarmente as Províncias Unidas do Rio da Prata.",
        isCorrect: false,
        distractorRationale: "A Guarda Nacional era uma milícia terrestre eminentemente voltada à manutenção da segurança interna nas províncias."
      },
      {
        id: "e",
        text: "implantar a igualdade cívica e jurídica entre todas as classes sociais nos núcleos urbanos.",
        isCorrect: false,
        distractorRationale: "Apenas cidadãos livres com renda comprovada podiam ser oficiais e guardas, reforçando a hierarquia censitária."
      }
    ],
    detailedExplanation: {
      summary: "A Guarda Nacional armou as elites proprietárias locais para sufocar rebeliões populares, dando origem à figura do 'coronel'.",
      stepByStep: [
        "1. Após a abdicação de D. Pedro I (1831), o Brasil viveu vácuo de autoridade e risco de insurreições populares e motins militares.",
        "2. O Exército de linha era visto com desconfiança pelos liberais moderados devido à presença de praças indisciplinados e oficiais lusitanos.",
        "3. O ministro da Justiça Diogo Antônio Feijó criou a Guarda Nacional em 1831.",
        "4. A milícia entregou o poder de polícia aos grandes proprietários de terras e juízes de paz municipais.",
        "5. As patentes de oficiais (como 'coronel da Guarda Nacional') eram compradas ou concedidas aos latifundiários mais influentes, consolidando o controle privado do território que mais tarde fundamentaria o coronelismo da República Velha."
      ],
      coreConcept: "Guarda Nacional (1831): Força paramilitar elitista ligada ao Ministério da Justiça, destinada a proteger a propriedade privada e sufocar revoltas populares, originando os 'coronéis'.",
      trapWarning: "Não confunda a Guarda Nacional com o Exército Brasileiro regular. A Guarda era uma milícia cidadã/proprietária descentralizada criada justamente em contraposição ao Exército."
    },
    tags: ["humanas", "brasil-imperio", "guarda-nacional", "periodo-regencial", "coronelismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-004",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Período Regencial - Ato Adicional de 1834 e Descentralização",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Aprovado em 1834, o Ato Adicional reformou profundamente a Constituição de 1824. Entre suas principais medidas, destacaram-se a criação das Assembleias Legislativas Provinciais (em substituição aos Conselhos Gerais), a extinção do Conselho de Estado, a instituição da Regência Una e a criação do Município Neutro na corte do Rio de Janeiro.",
      source: "CARVALHO, José Murilo de. A Construção da Ordem: O Teatro das Sombras. Record, 2003."
    },
    prompt: "O conjunto de reformas promovidas pelo Ato Adicional de 1834 representou um momento da história política regencial conhecido como",
    options: [
      {
        id: "a",
        text: "o 'Regresso Conservador', marcado pela restauração plena dos poderes absolutistas da Coroa e extinção de parlamentos locais.",
        isCorrect: false,
        distractorRationale: "O Regresso Conservador ocorreu a partir de 1837 com Araújo Lima e a Lei Interpretativa de 1840, revertendo o Ato Adicional."
      },
      {
        id: "b",
        text: "a experiência liberal descentralizadora, que concedeu maior autonomia decisória e tributária às elites das províncias.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Ato Adicional permitiu que as províncias legislassem sobre impostos, funcionalismo e segurança local, conferindo autonomia sem precedentes às elites regionais."
      },
      {
        id: "c",
        text: "o Golpe da Maioridade, que antecipou a coroação de D. Pedro II aos quatorze anos de idade.",
        isCorrect: false,
        distractorRationale: "O Golpe da Maioridade foi articulado em 1840 pelos liberais para encerrar as instabilidades das regências e coroar D. Pedro II."
      },
      {
        id: "d",
        text: "a fundação da República Federativa dos Estados Unidos do Brasil sob ditadura jacobina.",
        isCorrect: false,
        distractorRationale: "O Brasil permaneceu uma monarquia sob regência imperial durante todo o período (1831-1840)."
      },
      {
        id: "e",
        text: "a abolição das prerrogativas da Guarda Nacional em favor das capitanias hereditárias restauradas.",
        isCorrect: false,
        distractorRationale: "Capitanias hereditárias foram extintas no século XVIII por Marquês de Pombal."
      }
    ],
    detailedExplanation: {
      summary: "O Ato Adicional de 1834 representou o ápice liberal do Império, descentralizando poderes políticos para as Assembleias Provinciais.",
      stepByStep: [
        "1. Pressão dos liberais exaltados e moderados por maior autonomia contra o centralismo do Primeiro Reinado.",
        "2. O Ato Adicional de 1834 alterou a Carta de 1824 sem convocar uma Constituinte formal.",
        "3. Criou as Assembleias Legislativas Provinciais (autonomia tributária e administrativa para as elites regionais).",
        "4. Suprimiu o Conselho de Estado (órgão associado ao arbítrio de D. Pedro I).",
        "5. Transformou a Regência Trina em Regência Una eletiva por voto nacional censitário.",
        "6. A descentralização acirrou disputas locais de facções políticas, alimentando a eclosão das grandes revoltas regenciais subsequentes."
      ],
      coreConcept: "Ato Adicional de 1834 = 'Avanço Liberal' e descentralização federativa mitigada. Mais tarde, os conservadores aprovariam a 'Lei Interpretativa do Ato Adicional' (1840) para recentralizar o poder.",
      trapWarning: "Lembre-se da sequência pendular regencial: Avanço Liberal (1831-1836) -> Regresso Conservador (1837-1840)."
    },
    tags: ["humanas", "brasil-imperio", "ato-adicional-1834", "periodo-regencial", "federalismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-005",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Brasil Império",
    subtopic: "Revoltas Regenciais - A Revolta dos Malês (Salvador, 1835)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na noite de 24 para 25 de janeiro de 1835, em Salvador, centenas de africanos escravizados e libertos saíram às ruas em armas, empunhando papéis com versículos do Alcorão escritos em árabe e vestindo abadás brancos. Os rebeldes, majoritariamente de etnias haussá e iorubá (nagô), articulavam a tomada do poder na capital baiana.",
      source: "REIS, João José. Rebelião Escrava no Brasil: A História do Levante dos Malês em 1835. Companhia das Letras, 2003."
    },
    prompt: "A singularidade histórica da Revolta dos Malês no quadro dos levantes do Período Regencial reside no fato de ter sido",
    options: [
      {
        id: "a",
        text: "um levante militar articulado pela cúpula do Exército monárquico contra o tráfico de armas inglesas.",
        isCorrect: false,
        distractorRationale: "O levante foi estritamente organizado por africanos escravizados e libertos, sem apoio militar oficial."
      },
      {
        id: "b",
        text: "uma insurreição urbana de escravizados e libertos alfabetizados em árabe, articulada sob a identidade religiosa muçulmana contra a opressão senhorial e a imposição católica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Malê' provém do termo iorubá imalê (muçulmano). O levante urbano destacou-se pelo letramento em escrita árabe, planejamento organizado e objetivo de impor uma república islâmica e libertar escravizados."
      },
      {
        id: "c",
        text: "uma conspiração separatista de cafeicultores baianos em favor da anexação do Recôncavo pelos Estados Unidos.",
        isCorrect: false,
        distractorRationale: "O movimento ameaçava diretamente a ordem dos fazendeiros e proprietários de escravos."
      },
      {
        id: "d",
        text: "uma revolta camponesa liderada exclusivamente por vaqueiros sertanejos canudenses em defesa da restauração monárquica de D. Pedro I.",
        isCorrect: false,
        distractorRationale: "D. Pedro I já havia falecido em Portugal em 1834, e Canudos é um evento republicano no final do século XIX."
      },
      {
        id: "e",
        text: "um motim pacífico de escravizados domésticos reivindicando apenas redução de jornadas de trabalho em cartórios.",
        isCorrect: false,
        distractorRationale: "Foi uma rebelião armada combativa que travou intensos tiroteios nas ruas de Salvador contra a polícia e a Guarda Nacional."
      }
    ],
    detailedExplanation: {
      summary: "A Revolta dos Malês (1835) foi o mais importante levante urbano de escravizados no Brasil, protagonizado por africanos muçulmanos alfabetizados.",
      stepByStep: [
        "1. Salvador em 1835 concentrava vasta população africana urbana (escravos de ganho e libertos).",
        "2. Muitos escravizados de etnias nagô e haussá dominavam a escrita e a leitura em língua árabe.",
        "3. A revolta foi planejada para o fim do mês sagrado do Ramadã (noite do Lailat al-Qadr).",
        "4. Objetivos: destruição da ordem senhorial, libertação dos escravizados e estabelecimento de controle político islâmico.",
        "5. Traída por delação prévia, a revolta enfrentou violenta repressão pelas forças da Guarda Nacional e tropas de linha.",
        "6. Consequências: fuzilamentos, centenas de açoitamentos, deportação de libertos para a África e imposição de leis draconianas de controle sobre reuniões e religiosidade de africanos em todo o Império."
      ],
      coreConcept: "Revolta dos Malês (Salvador, 1835): Rebelião urbana de africanos muçulmanos (nagôs/haussás) letrados em árabe. Provocou pânico moral de 'haitianização' entre as elites brancas imperiais.",
      trapWarning: "Lembre-se do termo 'haitianismo': o pavor que as elites brasileiras tinham de que os escravizados fizessem aqui o que haviam feito na Revolução do Haiti."
    },
    tags: ["humanas", "brasil-imperio", "revolta-dos-males", "escravidao", "islamismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-006",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Revoltas Regenciais - Cabanagem, Farroupilha e Balaiada",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre 1835 e 1840, a província do Grão-Pará foi palco da Cabanagem, uma das revoltas mais sangrentas da história do Brasil independente. Índios, mestiços ribeirinhos que viviam em choupanas precárias (cabanas) e escravos negros uniram-se, tomaram a cidade de Belém e chegaram a constituir governos revolucionários próprios.",
      source: "RICCI, Magda. Cabanos, Patriotas e Amigos da Pátria: O Pará nas Voragens da Independência. Revista de História, USP, 2007."
    },
    prompt: "Diferentemente da Guerra dos Farrapos (RS), liderada por grandes estancieiros criadores de gado que reivindicavam autonomia aduaneira, a Cabanagem no Pará caracterizou-se essencialmente por",
    options: [
      {
        id: "a",
        text: "constituir um movimento estritamente legalista em apoio incondicional à monarquia centralizada no Rio de Janeiro.",
        isCorrect: false,
        distractorRationale: "Os cabanos depuseram os governadores imperiais nomeados e confrontaram militarmente o Império por anos."
      },
      {
        id: "b",
        text: "sua composição predominantemente popular e subalterna, que canalizou o ressentimento contra a extrema miséria e a dominação das elites oligárquicas locais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A Cabanagem teve protagonismo de indígenas, tapuios e negros pobres que ocuparam o poder de fato, resultando em guerra civil na qual morreu cerca de um terço da população da província."
      },
      {
        id: "c",
        text: "um tratado pacífico de conciliação firmado após semanas de protestos sem derramamento de sangue.",
        isCorrect: false,
        distractorRationale: "Estima-se que mais de 30 mil pessoas (30 a 40% da população paraense) tenham sido mortas na repressão impiedosa do general Soares de Andréa."
      },
      {
        id: "d",
        text: "sua liderança aristocrática que buscava negociar a redução das tarifas de importação do couro e do charque com a Coroa britânica.",
        isCorrect: false,
        distractorRationale: "A questão do charque e couro era a pauta econômica dos líderes farroupilhas no Rio Grande do Sul, e não dos cabanos amazônicos."
      },
      {
        id: "e",
        text: "uma tentativa organizada pelo clero ultramontano de restabelecer o Tribunal da Inquisição espanhol no Norte do país.",
        isCorrect: false,
        distractorRationale: "O movimento foi de libertação popular e anticolonial, sem conexão com a inquisição espanhola."
      }
    ],
    detailedExplanation: {
      summary: "A Cabanagem destacou-se pelo caráter genuinamente popular e radical, distinguindo-se das revoltas de elites proprietárias como a Farroupilha.",
      stepByStep: [
        "1. Contexto do Grão-Pará: região isolada, onde a independência de 1822 tardou a ser aceita e os portugueses mantinham o controle mercantil.",
        "2. População pobre (ribeirinhos cabanos, índios destituídos e negros) vivia sob condições de semiescravidão e opressão.",
        "3. Em 1835, os cabanos tomaram Belém e depuseram as autoridades provinciais (líderes: Félix Clemente Malcher, Francisco Vinhas e Eduardo Angelim).",
        "4. Diferença chave: a Farroupilha (RS) foi liderada por elites estancieiras proprietárias de terras; a Cabanagem foi uma explosão popular de massas subalternas.",
        "5. A repressão legalista imperial foi brutal e genocida, dizimando parcelas substanciais das populações indígenas e mestiças da bacia amazônica."
      ],
      coreConcept: "Revoltas Regenciais: Cabanagem (PA) = popular/radical; Farroupilha (RS) = elite estancieira/separatista; Sabinada (BA) = classe média urbana temporária; Balaiada (MA) = sertanejos pobres, vaqueiros e escravos (Quilombo de Preto Cosme).",
      trapWarning: "Cuidado ao comparar: a Farroupilha terminou com anistia generosa para os generais farroupilhas (Tratado de Ponche Verde), enquanto a Cabanagem popular foi massacrada sem concessões."
    },
    tags: ["humanas", "brasil-imperio", "cabanagem", "revoltas-regenciais", "grao-para"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-007",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Segundo Reinado - Golpe da Maioridade e Sistema Parlamentarista 'às Avessas'",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1847, o Decreto Imperial nº 523 criou o cargo de Presidente do Conselho de Ministros no Império do Brasil, consolidando um arranjo político que imitava formalmente a monarquia parlamentar britânica. Contudo, enquanto no modelo clássico inglês 'o rei reina, mas não governa', dependendo da maioria eleita da Câmara dos Comuns, no Brasil a dinâmica de escolha governamental era invertida.",
      source: "MATTOS, Ilmar Rohloff de. O Tempo Saquarema: A Formação do Estado Imperial. Hucitec, 2004."
    },
    prompt: "O funcionamento do parlamentarismo imperial brasileiro ficou conhecido na historiografia como 'parlamentarismo às avessas' porque",
    options: [
      {
        id: "a",
        text: "o Conselho de Ministros era eleito diretamente por sufrágio universal das câmaras municipais sem consulta ao Imperador.",
        isCorrect: false,
        distractorRationale: "O Presidente do Conselho de Ministros era pessoalmente escolhido e nomeado pelo próprio Imperador por meio do Poder Moderador."
      },
      {
        id: "b",
        text: "o Imperador usava o Poder Moderador para nomear primeiro o Primeiro-Ministro, o qual organizava as eleições parlamentares para garantir maioria fictícia a seu gabinete.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. No modelo britânico, a eleição popular define o parlamento, que então forma o ministério. No Brasil, o Imperador nomeava o gabinete, que convocava eleições controladas (a 'bico de pena' e com fraude) para fabricar a maioria parlamentar favorável."
      },
      {
        id: "c",
        text: "os partidos Liberal e Conservador divergiam radicalmente sobre a propriedade escrava e a abertura dos portos aos estrangeiros.",
        isCorrect: false,
        distractorRationale: "Os dois partidos eram de elites latifundiárias semelhantes ('nada mais parecido com um saquarema do que um luzia no poder'), ambos defendendo a escravidão."
      },
      {
        id: "d",
        text: "a Câmara dos Deputados podia caçar o mandato imperial e depor o monarca através de moção sumária de desconfiança.",
        isCorrect: false,
        distractorRationale: "A pessoa do Imperador era sagrada e inviolável pelo Art. 99 da Constituição, imune a votos de desconfiança."
      },
      {
        id: "e",
        text: "o poder Judiciário federal controlava com exclusividade todas as finanças das províncias da federação.",
        isCorrect: false,
        distractorRationale: "O poder Moderador e o Executivo subordinavam os juízes e geriam o tesouro centralizado."
      }
    ],
    detailedExplanation: {
      summary: "No parlamentarismo brasileiro, o Poder Moderador nomeava o gabinete ministerial de cima para baixo, fraudando as eleições para produzir a maioria.",
      stepByStep: [
        "1. No parlamentarismo clássico inglês: Eleitores -> Câmara dos Comuns (maioria) -> Primeiro-Ministro formado pelo parlamento.",
        "2. No parlamentarismo imperial brasileiro ('às avessas'): Imperador (Poder Moderador) -> Escolhe o Presidente do Conselho de Ministros.",
        "3. O Presidente do Conselho forma seu Ministério (gabinete).",
        "4. O Ministério dissolve a Câmara anterior e convoca novas eleições.",
        "5. Mediante controle da Guarda Nacional e violência eleitoral ('eleições a bico de pena'), o gabinete sempre garantia a eleição da sua própria maioria parlamentar.",
        "6. O Imperador alternava no poder Liberais ('Luzias') e Conservadores ('Saquaremas') para manter a estabilidade da ordem monárquica e escravista."
      ],
      coreConcept: "Parlamentarismo às Avessas: O Imperador manda mais que o Parlamento. O Poder Moderador cria e derruba gabinetes ministeriais ao seu bel-prazer.",
      trapWarning: "Lembre-se da famosa frase de Holanda Cavalcanti: 'Nada mais semelhante a um saquarema [conservador] do que um luzia [liberal] no poder'."
    },
    tags: ["humanas", "brasil-imperio", "segundo-reinado", "parlamentarismo-as-avessas", "poder-moderador"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-008",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Brasil Império",
    subtopic: "Economia e Sociedade - A Lei de Terras de 1850",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Art. 1º Ficam proibidas as aquisições de terras devolutas por outro título que não seja o de compra.\nArt. 2º Os que se apossarem de terras devolutas ou de outrem [...] serão despejados com perda das benfeitorias.\nArt. 18. O governo é autorizado a mandar vir anualmente à custa do Tesouro certo número de colonos livres para serem empregados na agricultura.",
      source: "BRASIL. Lei nº 601, de 18 de setembro de 1850 (Lei de Terras)."
    },
    prompt: "Promulgada apenas duas semanas após a Lei Eusébio de Queirós (que extinguiu o tráfico transatlântico de escravos), a Lei de Terras de 1850 teve como principal objetivo socioeconômico",
    options: [
      {
        id: "a",
        text: "democratizar a posse rural por meio da distribuição gratuita de pequenas propriedades agrícolas a ex-escravizados.",
        isCorrect: false,
        distractorRationale: "A lei fez exatamente o oposto: proibiu o apossamento e a doação, exigindo pagamento em dinheiro à vista."
      },
      {
        id: "b",
        text: "impedir o acesso à terra por trabalhadores livres, imigrantes pobres e futuros libertos, garantindo a formação de mão de obra assalariada para os latifúndios cafeeiros.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Com o fim do tráfico negreiro, os fazendeiros precisavam de novos braços para as fazendas. Ao exigir compra em dinheiro para terras públicas e proibir a posse, a lei impediu que imigrantes e negros virassem pequenos proprietários independentes, forçando-os a trabalhar para os latifundiários."
      },
      {
        id: "c",
        text: "estimular a criação de reservas indígenas e parques florestais intocáveis em toda a faixa de mata atlântica.",
        isCorrect: false,
        distractorRationale: "Terras habitadas por povos indígenas eram consideradas 'devolutas' pelo Estado imperial e leiloadas aos cafeicultores."
      },
      {
        id: "d",
        text: "implantar cooperativas estatais de café geridas em regime de autogestão operária no Vale do Paraíba.",
        isCorrect: false,
        distractorRationale: "O modelo econômico era de livre empresa agroexportadora privada baseada no latifúndio monocultor."
      },
      {
        id: "e",
        text: "restituir as terras comunais aos quilombos organizados das capitanias do Nordeste açucareiro.",
        isCorrect: false,
        distractorRationale: "A lei criminalizava as posses comunais e quilombolas, tratando-as como apossamento ilegal sujeito a despejo."
      }
    ],
    detailedExplanation: {
      summary: "A Lei de Terras de 1850 transformou a terra em mercadoria cara, bloqueando o acesso dos trabalhadores pobres para retê-los nos latifúndios.",
      stepByStep: [
        "1. Até 1822, vigorava o sistema de concessão de sesmarias da Coroa; de 1822 a 1850 vigorou o 'regime de posse' informal.",
        "2. Em setembro de 1850, a Lei Eusébio de Queirós proibiu em definitivo a entrada de novos escravizados da África.",
        "3. Diante da iminente falta de mão de obra cativa, as elites cafeeiras previram a chegada de colonos imigrantes europeus e a futura transição para o trabalho livre.",
        "4. Se a terra devoluta pudesse ser ocupada livremente por posse, o imigrante europeu ou o liberto se instalaria como produtor camponês autônomo.",
        "5. Para evitar isso, a Lei de Terras nº 601 determinou que terras públicas só poderiam ser adquiridas por compra em dinheiro à vista.",
        "6. O resultado histórico foi a cristalização da estrutura fundiária hiperconcentrada do Brasil, cuja desigualdade persiste até a atualidade."
      ],
      coreConcept: "Lei de Terras de 1850: Terra como mercadoria. Barrou o acesso à terra para imigrantes e ex-escravizados, garantindo mão de obra barata subordinada ao latifúndio cafeeiro.",
      trapWarning: "Ligue sempre a Lei Eusébio de Queirós (04/09/1850) à Lei de Terras (18/09/1850): ambas foram aprovadas no mesmo mês para proteger os interesses da oligarquia cafeeira."
    },
    tags: ["humanas", "brasil-imperio", "lei-de-terras-1850", "cafeicultura", "estrutura-fundiaria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-009",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Brasil Império",
    subtopic: "Economia Cafeeira - Vale do Paraíba versus Oeste Paulista",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A expansão da cafeicultura no Segundo Reinado conheceu dois momentos distintos. Inicialmente, o cultivo concentrou-se no Vale do Paraíba (fluminense e paulista), avançando posteriormente para o Oeste Paulista (regiões de Campinas e Ribeirão Preto), apresentando expressivas diferenças tecnológicas, fundiárias e na organização do trabalho.",
      source: "PRADO JÚNIOR, Caio. História Econômica do Brasil. 43ª ed. Brasiliense, 2012."
    },
    prompt: "Em comparação com o modelo cafeeiro do Vale do Paraíba, a cafeicultura que se consolidou no Oeste Paulista caracterizou-se por",
    options: [
      {
        id: "a",
        text: "uso exclusivo de técnicas rudimentares de derrubada e queimada com apego ferrenho ao cativeiro até a queda do Império.",
        isCorrect: false,
        distractorRationale: "Esse perfil arcaico e refratário a mudanças era a marca distintiva dos barões decadentes do Vale do Paraíba."
      },
      {
        id: "b",
        text: "solos férteis de terra roxa, implantação de ferrovias modernas e maior abertura à substituição gradual da escravidão pelo trabalho livre imigrante.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Oeste Paulista combinou solo fértil de origem basáltica (terra roxa), transporte ferroviário com capital reinvestido do café e liderança na transição para o colonato e imigração europeia (especialmente italiana)."
      },
      {
        id: "c",
        text: "abandono completo da monocultura de exportação para dedicar-se ao policultivo de subsistência para o mercado interno.",
        isCorrect: false,
        distractorRationale: "O Oeste Paulista tornou-se a maior potência exportadora de café do planeta, voltado primordialmente ao comércio internacional."
      },
      {
        id: "d",
        text: "predomínio de pequenas propriedades familiares cooperativas mantidas sob posse comunal de povos originários.",
        isCorrect: false,
        distractorRationale: "Tratava-se de gigantescos complexos latifundiários privados pertencentes à emergente oligarquia cafeeira paulista."
      },
      {
        id: "e",
        text: "recusa sistemática de conexões bancárias e industriais para preservação dos moldes coloniais pombalinos.",
        isCorrect: false,
        distractorRationale: "Os cafeicultores do Oeste Paulista foram os grandes financiadores de bancos, companhias de eletricidade e indústrias nascentes em São Paulo."
      }
    ],
    detailedExplanation: {
      summary: "O Vale do Paraíba era escravista tradicional e esgotou seus solos; o Oeste Paulista usou ferrovias, terra roxa e trabalho livre imigrante.",
      stepByStep: [
        "1. Vale do Paraíba: cafeicultura tradicional pioneira, praticada em terrenos acidentados, cultivo de morro abaixo que provocou rápida erosão e esgotamento dos solos; forte dependência de escravizados e mentalidade aristocrática conservadora.",
        "2. Oeste Paulista: relevo suave de planalto, solo basáltico de excepcional fertilidade ('terra roxa').",
        "3. Modernização logística: construção da São Paulo Railway e Companhia Paulista de Estradas de Ferro para escoar os grãos ao porto de Santos.",
        "4. Mentalidade empresarial: reinvestimento de lucros, pioneirismo na contratação de imigrantes europeus sob o sistema de colonato.",
        "5. Protagonismo político: a oligarquia do Oeste Paulista fundou o Partido Republicano Paulista (PRP) em Itu (1873), liderando o movimento republicano que derrubou o Império.",
        "6. Conclusão: a alternativa b sintetiza perfeitamente a dinâmica moderna do Oeste Paulista."
      ],
      coreConcept: "Dicotomia do Café: Vale do Paraíba (arcaico, escravista radical, conservador 'saquarema', solo esgotado) vs. Oeste Paulista (moderno, ferrovias, terra roxa, imigração europeia, republicano).",
      trapWarning: "Lembre-se de que a expressão 'terra roxa' vem do italiano 'terra rossa' (terra vermelha), decorrente da decomposição de rochas vulcânicas basálticas."
    },
    tags: ["humanas", "brasil-imperio", "cafeicultura", "vale-do-paraiba", "oeste-paulista"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-010",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Brasil Império",
    subtopic: "Abolicionismo - Leis Emancipatórias Gradualistas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Lei nº 2.040, promulgada em 28 de setembro de 1871 (conhecida como Lei do Ventre Livre), declarava livres os filhos de mulher escravizada nascidos a partir daquela data. Contudo, estabelecia que os ingênuos ficariam sob autoridade do senhor até os 8 anos de idade, cabendo a este optar por receber indenização estatal ou utilizar o trabalho do menor até que completasse 21 anos.",
      source: "CHALHOUB, Sidney. A Força da Escravidão: Ilegalidade e Costume no Brasil Oitocentista. Companhia das Letras, 2012."
    },
    prompt: "A arquitetura jurídica da Lei do Ventre Livre revela a estratégia das elites escravocratas imperiais de",
    options: [
      {
        id: "a",
        text: "acatar integralmente as teses radicais do abolicionismo popular de libertação imediata e incondicional sem indenização.",
        isCorrect: false,
        distractorRationale: "O movimento de rua e a imprensa abolicionista exigiam o fim imediato do cativeiro; a lei foi uma manobra protelatória da elite parlamentar."
      },
      {
        id: "b",
        text: "controlar e retardar o processo de extinção da escravidão por meio de um gradualismo que preservava o direito de exploração da força de trabalho senhorial.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A lei buscava esvaziar a pressão internacional britânica e do movimento abolicionista, adiando o fim da escravidão por décadas e garantindo o trabalho dos ingênuos até a idade adulta."
      },
      {
        id: "c",
        text: "conceder cidadania política ampla e cotas de terras públicas no interior para todas as mães libertas.",
        isCorrect: false,
        distractorRationale: "A mãe permanecia escravizada na fazenda, e a Lei de Terras de 1850 já bloqueava qualquer acesso gratuito à terra."
      },
      {
        id: "d",
        text: "provocar a falência imediata dos cafeicultores fluminenses por confisco compulsório de suas propriedades.",
        isCorrect: false,
        distractorRationale: "A lei protegeu os proprietários, concedendo-lhes a prerrogativa de explorar o menor até os 21 anos."
      },
      {
        id: "e",
        text: "promover o retorno compulsório de todos os nascidos no Brasil aos seus reinos ancestrais na África Ocidental.",
        isCorrect: false,
        distractorRationale: "A lei visava gerir a força de trabalho no território nacional, sem repatriamento de crianças brasileiras."
      }
    ],
    detailedExplanation: {
      summary: "As leis de 1871 (Ventre Livre) e 1885 (Sexagenários) foram concessões calculadas da elite para protelar a emancipação total sem romper a ordem senhorial.",
      stepByStep: [
        "1. Após a Guerra do Paraguai, a pressão social interna e diplomática externa contra a escravidão tornou-se insustentável.",
        "2. Para não perder o controle do processo para a mobilização das ruas, os gabinetes imperiais adotaram a via do gradualismo legislativo.",
        "3. A Lei do Ventre Livre (1871) libertou formalmente os nascituros, mas a imensa maioria dos fazendeiros optou por não pegar a indenização estatal e reteve os jovens sob trabalho compulsório até os 21 anos.",
        "4. A Lei dos Sexagenários (Saraiva-Cotegipe, 1885) libertava apenas quem atingisse 60 anos (raríssimos no cativeiro) e ainda exigia prestação de serviços compensatórios por 3 anos.",
        "5. Essa postergação forçou o movimento abolicionista (com Luís Gama, José do Patrocínio e André Rebouças) a radicalizar suas ações na década de 1880, apoiando fugas em massa até a Lei Áurea em 1888."
      ],
      coreConcept: "Gradualismo imperial: Lei Eusébio de Queirós (1850) -> Lei do Ventre Livre (1871) -> Lei dos Sexagenários (1885) -> Lei Áurea (1888). O Estado tentou adiar o desfecho até o limite da manutenção da ordem.",
      trapWarning: "Cuidado: a Lei Áurea (1888) foi a única que aboliu incondicionalmente a escravidão e NÃO concedeu um único tostão de indenização aos fazendeiros (o que acelerou a queda do Império)."
    },
    tags: ["humanas", "brasil-imperio", "abolicionismo", "lei-do-ventre-livre", "escravidao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-011",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Guerra do Paraguai (1864–1870) e o Fortalecimento do Exército",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Guerra da Tríplice Aliança contra o Paraguai (1864–1870) mobilizou cerca de 135 mil soldados brasileiros, incluindo os contingentes de 'Voluntários da Pátria' e escravizados alforriados sob condição de combate. Ao final do sangrento conflito na bacia platina, a instituição militar retornou profundamente transformada em termos de coesão, prestígio e aspirações cívicas.",
      source: "DORATIOTO, Francisco. Maldita Guerra: Nova História da Guerra do Paraguai. Companhia das Letras, 2002."
    },
    prompt: "Entre as principais consequências políticas internas da Guerra do Paraguai para o Império do Brasil, destaca-se o(a)",
    options: [
      {
        id: "a",
        text: "fortalecimento e politização da oficialidade do Exército, que passou a se enxergar como arauto da modernização do país e passou a criticar abertamente a monarquia e a escravidão.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Exército saiu fortalecido, com identidade corporativa, influenciado pelo positivismo republicano e indignado com a subserviência aos políticos civis casacas e com a sobrevivência da escravidão que presenciaram lado a lado nas trincheiras."
      },
      {
        id: "b",
        text: "anexação definitiva e permanente de todo o território paraguaio como nova província do Império do Brasil.",
        isCorrect: false,
        distractorRationale: "O Paraguai manteve sua soberania territorial como país independente após pagar com a perda de territórios de fronteira disputados e perda populacional maciça."
      },
      {
        id: "c",
        text: "extinção compulsória da Guarda Nacional e subordinação de todos os coronéis latifundiários ao Ministério da Marinha.",
        isCorrect: false,
        distractorRationale: "A Guarda Nacional continuou existindo até o início do século XX."
      },
      {
        id: "d",
        text: "reaproximação incondicional entre D. Pedro II e os governos republicanos da Argentina e do Uruguai para a restauração da Liga das Províncias.",
        isCorrect: false,
        distractorRationale: "Não houve proposta de restauração colonial ou fusão dos países da bacia platina."
      },
      {
        id: "e",
        text: "completo saneamento das finanças públicas do Império graças às vultosas indenizações em ouro recolhidas em Assunção.",
        isCorrect: false,
        distractorRationale: "O Brasil contraiu dívidas astronômicas com banqueiros ingleses durante a guerra, gerando inflação e crise econômica profunda nas décadas seguintes."
      }
    ],
    detailedExplanation: {
      summary: "A Guerra do Paraguai criou o Exército Brasileiro moderno como ator político autônomo, catalisando as contradições que derrubaram a monarquia.",
      stepByStep: [
        "1. Conflito geopolítico pela livre navegação dos rios da bacia platina entre Paraguai (Solano López), Brasil, Argentina e Uruguai.",
        "2. O Exército brasileiro, antes desarticulado e subordinado à Guarda Nacional, foi reequipado e transformado em força profissional.",
        "3. Milhares de escravizados combateram ao lado de oficiais brancos, gerando profunda contradição moral sobre a escravidão entre a oficialidade.",
        "4. A vitória consolidou a liderança do Duque de Caxias e do Conde d'Eu, mas gerou oficiais jovens (tenentes e capitães) fortemente atraídos pelo positivismo (Benjamin Constant).",
        "5. O oficialato ressentia-se do descaso dos gabinetes de políticos civis monárquicos ('casacas'), culminando na 'Questão Militar' da década de 1880, elemento chave do golpe republicano de 1889."
      ],
      coreConcept: "Impacto da Guerra do Paraguai (1864–1870): 1. Dívida externa colossal; 2. Exército politizado e abolicionista; 3. Início da crise terminal do Império.",
      trapWarning: "Cuidado: a tese antiga de que a Inglaterra 'provocou a guerra para destruir a indústria paraguaia' foi superada pela historiografia contemporânea; a guerra decorreu de conflitos regionais de consolidação dos Estados da Bacia do Prata."
    },
    tags: ["humanas", "brasil-imperio", "guerra-do-paraguai", "exercito-brasileiro", "questao-militar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-012",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Brasil Império",
    subtopic: "Crise do Império e Proclamação da República (1889)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A sustentação do Segundo Reinado desmoronou na década de 1880 pela perda sucessiva de seus três pilares históricos: a Igreja Católica (Questão Religiosa), o Exército (Questão Militar) e a grande oligarquia latifundiária escravocrata do Vale do Paraíba, que abandonou a Coroa após a assinatura da Lei Áurea em 13 de maio de 1888 sem indenização pecuniária.",
      source: "CARVALHO, José Murilo de. D. Pedro II: Ser ou Não Ser. Companhia das Letras, 2007."
    },
    prompt: "Os fazendeiros escravistas tradicionais do Vale do Paraíba, indignados com a abolição sem indenização operada pela Princesa Isabel, converteram-se subitamente ao republicanismo, ficando conhecidos historicamente como os",
    options: [
      {
        id: "a",
        text: "'republicanos históricos', fundadores do Manifesto Republicano de 1870.",
        isCorrect: false,
        distractorRationale: "Os republicanos históricos eram os que defendiam a República desde o Manifesto de 1870 e a Convenção de Itu em 1873."
      },
      {
        id: "b",
        text: "'republicanos de última hora' ou 'republicanos do 14 de maio'.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Abandonaram a monarquia no dia seguinte à abolição (14 de maio de 1888) por ressentimento pela perda de seus 'bens' sem compensação financeira do Tesouro imperial."
      },
      {
        id: "c",
        text: "'positivistas ortodoxos' liderados pela Escola Militar da Praia Vermelha.",
        isCorrect: false,
        distractorRationale: "Os positivistas eram militares e intelectuais como Benjamin Constant, desvinculados dos interesses escravocratas tradicionais."
      },
      {
        id: "d",
        text: "'jacobinos florianistas' partidários do tenentismo armado das capitais.",
        isCorrect: false,
        distractorRationale: "O florianismo radical e o tenentismo pertencem à República das Espadas e à década de 1920."
      },
      {
        id: "e",
        text: "'carbonários abolicionistas' ligados à Confederação Abolicionista de Patrocínio.",
        isCorrect: false,
        distractorRationale: "A Confederação Abolicionista combateu a escravidão por anos, sendo radicalmente oposta aos latifundiários escravistas."
      }
    ],
    detailedExplanation: {
      summary: "A abolição sem indenização fez a tradicional oligarquia escravista romper com o trono, virando 'republicana de última hora'.",
      stepByStep: [
        "1. A base social do trono imperial sempre foram os grandes proprietários de terras e escravos.",
        "2. A Princesa Isabel assinou a Lei Áurea em 13 de maio de 1888 extinguindo a escravidão sem pagar indenizações aos proprietários.",
        "3. Os barões do café do Vale do Paraíba sentiram-se traídos pela monarquia à qual haviam servido fielmente por meio século.",
        "4. Em revide, retiraram o apoio ao trono e aderiram ao Partido Republicano, passando a ser ironizados como 'republicanos de última hora' ou 'republicanos do 14 de maio'.",
        "5. Sem base social de sustentação civil, bastou uma movimentação militar liderada pelo Marechal Deodoro da Fonseca em 15 de novembro de 1889 para proclamar a República sem nenhuma reação popular em defesa do Imperador."
      ],
      coreConcept: "Tríplice Crise do Império: Questão Religiosa (1872-1875) + Questão Militar (1884-1887) + Questão Abolicionista (1888). O trono ruiu por completo isolamento político.",
      trapWarning: "Lembre-se da clássica observação de Aristides Lobo sobre o 15 de novembro: 'O povo assistiu a tudo bestializado, atônito, surpreso, acreditando tratar-se de um desfile militar'."
    },
    tags: ["humanas", "brasil-imperio", "proclamacao-da-republica", "1889", "crise-do-imperio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-013",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Primeiro Reinado - A Guerra da Cisplatina (1825–1828)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre 1825 e 1828, o recém-independente Império do Brasil travou uma desgastante guerra contra as Províncias Unidas do Rio da Prata (atual Argentina) pelo controle da Província Cisplatina (atual Uruguai), território que havia sido anexado por D. João VI em 1821.",
      source: "BANDEIRA, Luiz Alberto Moniz. O Feudo: A Disputa entre o Brasil e a Argentina pelo Controle do Rio da Prata. Record, 2000."
    },
    prompt: "O desfecho do conflito na Bacia do Prata, intermediado diplomaticamente pela Grã-Bretanha, resultou no(a)",
    options: [
      {
        id: "a",
        text: "reconhecimento da independência da República Oriental do Uruguai como Estado tampão neutro na região platina.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A Convenção Preliminar de Paz de 1828 estabeleceu a independência do Uruguai, impedindo que tanto o Brasil quanto a Argentina controlassem com exclusividade a foz do Rio da Prata."
      },
      {
        id: "b",
        text: "incorporação permanente de Montevidéu ao território da província do Rio Grande de São Pedro.",
        isCorrect: false,
        distractorRationale: "O Brasil foi forçado a renunciar definitivamente a qualquer soberania sobre a província Cisplatina."
      },
      {
        id: "c",
        text: "anexação da província argentina de Entre Ríos ao patrimônio particular da família real bragantina.",
        isCorrect: false,
        distractorRationale: "O território argentino não foi invadido nem incorporado ao patrimônio imperial."
      },
      {
        id: "d",
        text: "pagamento de vultosa indenização da Inglaterra aos cofres do Banco do Brasil pelo embargo marítimo.",
        isCorrect: false,
        distractorRationale: "A Inglaterra atuou como mediadora em benefício de seu próprio comércio livre no Prata, e o Banco do Brasil faliu em 1829 em decorrência dos gastos militares."
      },
      {
        id: "e",
        text: "restauração do domínio colonial da Coroa de Portugal sobre a foz do Rio da Prata.",
        isCorrect: false,
        distractorRationale: "Portugal não recuperou domínios na América do Sul após a independência do Brasil."
      }
    ],
    detailedExplanation: {
      summary: "A Guerra da Cisplatina drenou recursos do Império e terminou com a criação do Uruguai como nação independente em 1828.",
      stepByStep: [
        "1. Em 1825, patriotas uruguaios conhecidos como 'Trinta e Três Orientais' (liderados por Juan Antonio Lavalleja) rebelaram-se contra o domínio brasileiro.",
        "2. As Províncias Unidas do Rio da Prata apoiaram os rebeldes, deflagrando guerra formal com o Império do Brasil.",
        "3. O conflito foi militarmente inconclusivo e extremamente custoso: o Brasil sofreu derrotas terrestres (como em Passo do Rosário) e impôs bloqueio naval ineficiente.",
        "4. A mediação britânica, interessada em garantir a livre navegação no Rio da Prata para seus produtos manufaturados, forçou o armistício em 1828.",
        "5. Tratado de 1828: nem Brasil nem Argentina ficaram com a região; nasceu a República Oriental do Uruguai.",
        "6. Consequências para D. Pedro I: crise financeira aguda, falência do Banco do Brasil (1829), inflação e perda substancial de popularidade perante a opinião pública brasileira."
      ],
      coreConcept: "Guerra da Cisplatina (1825–1828): Perda territorial do Brasil, criação do Uruguai independente (Estado-tampão) e colapso financeiro que precipitou a abdicação de D. Pedro I em 1831.",
      trapWarning: "Cuidado: a perda da Cisplatina foi um dos fatores imediatos que desmoralizaram D. Pedro I perante a elite e o povo do Rio de Janeiro."
    },
    tags: ["humanas", "brasil-imperio", "cisplatina", "uruguai", "primeiro-reinado"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-014",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Primeiro Reinado - A Noite das Garrafadas e a Abdicação (1831)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em março de 1831, ao retornar de uma excursão frustrada a Minas Gerais, D. Pedro I foi recepcionado no Rio de Janeiro com festejos promovidos pelo Partido Português. Indignados, brasileiros do Partido Brasileiro atacaram as comemorações com pedras e cacos, sendo respondidos com garrafas arremessadas das janelas (evento que ficou conhecido como a 'Noite das Garrafadas'). Poucas semanas depois, em 7 de abril de 1831, D. Pedro I abdicou da coroa.",
      source: "BASILE, Marcello. Anais do Museu Paulista: História e Cultura Material, vol. 12, 2004."
    },
    prompt: "A abdicação de D. Pedro I em 7 de abril de 1831 teve como principal significado político histórico o(a)",
    options: [
      {
        id: "a",
        text: "fim da monarquia constitucional e proclamação imediata da República sob direção dos militares positivistas.",
        isCorrect: false,
        distractorRationale: "O Brasil permaneceu sob regime monárquico hereditário governado por regentes até a maioridade de Pedro II."
      },
      {
        id: "b",
        text: "consolidação da independência nacional e afastamento definitivo do risco de recolonização e influência de facções absolutistas portuguesas no governo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A historiografia define o 7 de abril como o 'fechamento da Independência': o poder passou às mãos das elites nativas brasileiras, eliminando os laços com a corte de Lisboa e os temores de reunião dos reinos."
      },
      {
        id: "c",
        text: "restituição de todos os poderes imperiais às capitanias donatárias com outorga de direitos trabalhistas urbanos.",
        isCorrect: false,
        distractorRationale: "Capitanias donatárias não existiam mais, e os direitos trabalhistas só surgiram com a Era Vargas no século XX."
      },
      {
        id: "d",
        text: "extinção legal imediata da escravidão em todas as províncias agrícolas do país.",
        isCorrect: false,
        distractorRationale: "A escravidão permaneceu intacta e foi vigorosamente defendida pelos regentes e proprietários de terras."
      },
      {
        id: "e",
        text: "anulação sumária da Constituição de 1824 com dissolução perene do Poder Judiciário imperial.",
        isCorrect: false,
        distractorRationale: "A Constituição de 1824 permaneceu em vigor (sendo apenas reformada pelo Ato Adicional de 1834)."
      }
    ],
    detailedExplanation: {
      summary: "A abdicação de 1831 concluiu o ciclo de independência, tirando os portugueses do poder central e entregando o comando às elites brasileiras.",
      stepByStep: [
        "1. D. Pedro I enfrentava crescente rejeição por seu autoritarismo, custos da Guerra da Cisplatina e seu envolvimento sucessório com Portugal (morte de D. João VI em 1826).",
        "2. A imprensa liberal criticava o favoritismo imperial em relação aos comerciantes portugueses (assassinato do jornalista Líbero Badaró em SP aumentou a revolta).",
        "3. Em março de 1831, a 'Noite das Garrafadas' no Rio explicitou o racha violento entre brasileiros e portugueses.",
        "4. D. Pedro I nomeou o impopular 'Ministério dos Marqueses', formado por nobres absolutistas; o povo e as tropas imperiais cercaram o Campo de Santana exigindo mudanças.",
        "5. Sem apoio militar, o monarca abdicou em favor de seu filho D. Pedro de Alcântara (então com apenas 5 anos) e partiu para a Europa.",
        "6. O Brasil iniciou o Período Regencial, consolidando o poder nas mãos dos proprietários de terras nacionais."
      ],
      coreConcept: "7 de Abril de 1831: Abdicação de D. Pedro I. Concluiu a separação de Portugal e inaugurou a regência ('uma república sem presidente').",
      trapWarning: "A abdicação não aboliu a monarquia; ela apenas inaugurou a fase das Regências para esperar a maioridade de D. Pedro II."
    },
    tags: ["humanas", "brasil-imperio", "abdicacao-1831", "primeiro-reinado", "noite-das-garrafadas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-015",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Segundo Reinado - Tarifa Alves Branco (1844) e Lei Bill Aberdeen (1845)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1844, o ministro da Fazenda Manuel Alves Branco decretou uma reforma alfandegária que elevou as tarifas de importação para cerca de 30% a 60% sobre produtos estrangeiros, pondo fim aos privilégios históricos das manufaturas inglesas (que pagavam apenas 15% desde os tratados de 1810). Como represália direta, o Parlamento britânico aprovou em 1845 o Bill Aberdeen (Slave Trade Suppression Act).",
      source: "BETHELL, Leslie. A Abolição do Tráfico de Escravos no Brasil. Record, 2002."
    },
    prompt: "A lei britânica Bill Aberdeen (1845) concedia à Marinha Real britânica a autoridade unilateral de",
    options: [
      {
        id: "a",
        text: "apreender navios negreiros em qualquer parte do Oceano Atlântico, julgando tripulações em tribunais de almirantado britânicos como piratas marítimos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Bill Aberdeen tratava o tráfico negreiro transatlântico como ato de pirataria internacional, permitindo que navios ingleses perseguissem e capturassem embarcações negreiras inclusive em águas territoriais brasileiras."
      },
      {
        id: "b",
        text: "bombardear e ocupar permanentemente os portos de Santos e Salvador com forças de infantaria naval britânica.",
        isCorrect: false,
        distractorRationale: "A lei focava na interceptação de navios negreiros no mar e em águas jurisdicionais, não na ocupação terrestre colonial de cidades."
      },
      {
        id: "c",
        text: "proibir a entrada de quaisquer navios com bandeira do Brasil nos portos europeus do Mediterrâneo.",
        isCorrect: false,
        distractorRationale: "O comércio lícito continuou; a coerção mirava a repressão coercitiva ao tráfico de pessoas escravizadas."
      },
      {
        id: "d",
        text: "obrigar o Império do Brasil a devolver imediatamente as alfândegas para a administração de magistrados de Lisboa.",
        isCorrect: false,
        distractorRationale: "Portugal não tinha qualquer ingerência sobre as decisões entre Inglaterra e o Brasil na década de 1840."
      },
      {
        id: "e",
        text: "subsidiar integralmente a transferência de teares industriais ingleses para a província de São Paulo.",
        isCorrect: false,
        distractorRationale: "A Inglaterra retaliou economicamente e politicamente o Brasil; não financiou indústrias nacionais."
      }
    ],
    detailedExplanation: {
      summary: "O Bill Aberdeen (1845) foi uma lei unilateral britânica que autorizou a captura de navios negreiros brasileiros como piratas.",
      stepByStep: [
        "1. Contexto comercial: A Tarifa Alves Branco (1844) quebrou as vantagens tarifárias de 15% que os ingleses detinham desde 1810, elevando os tributos para até 60%.",
        "2. Irritado com as tarifas e com o descumprimento brasileiro do tratado de 1826 sobre a extinção do tráfico de escravos, o Parlamento inglês aprovou o Bill Aberdeen em 1845.",
        "3. A medida autorizou a Marinha Real inglesa (Royal Navy) a revistar, interceptar e aprisionar qualquer navio suspeito de tráfico no Atlântico Sul.",
        "4. A Marinha inglesa passou a violar águas territoriais do Brasil, invadindo baías e disparando contra fortalezas brasileiras.",
        "5. Essa pressão asfixiante obrigou o governo imperial a aprovar a Lei Eusébio de Queirós em 1850 para evitar uma guerra aberta com a maior potência militar do mundo."
      ],
      coreConcept: "Tarifa Alves Branco (1844 - protecionismo alfandegário brasileiro) -> Retaliação inglesa via Bill Aberdeen (1845 - repressão naval ao tráfico) -> Lei Eusébio de Queirós (1850 - fim do tráfico pelo Brasil).",
      trapWarning: "Lembre-se de que a Tarifa Alves Branco gerou receita para o Estado e permitiu o florescimento da 'Era Mauá' (primeiro surto manufatureiro e de infraestrutura do Brasil)."
    },
    tags: ["humanas", "brasil-imperio", "bill-aberdeen", "tarifa-alves-branco", "trafico-negreiro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-016",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Brasil Império",
    subtopic: "Economia e Modernização - A Era Mauá no Segundo Reinado",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A partir de 1850, com o fim do tráfico transatlântico de escravos (Lei Eusébio de Queirós), vultosos capitais antes imobilizados na compra de cativos foram liberados para o mercado financeiro e produtivo. O empresário Irineu Evangelista de Sousa (visconde e futuro barão de Mauá) destacou-se por liderar investimentos em estaleiros navais, iluminação a gás, ferrovias e cabos submarinos telegráficos.",
      source: "CALDEIRA, Jorge. Mauá: Empresário do Império. Companhia das Letras, 1995."
    },
    prompt: "O ciclo de inovações financeiras e industriais associado à 'Era Mauá' encontrou fortes limites estruturais para sua consolidação perene no Brasil imperial devido ao(à)",
    options: [
      {
        id: "a",
        text: "domínio inconteste de uma elite agrária escravocrata tradicional que privilegiava o modelo agroexportador e via com desconfiança a industrialização e as reformas burguesas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Império era hegemonizado pelos grandes latifundiários cafeeiros e açucareiros; o governo restringiu créditos e revogou tarifas protetoras (Tarifa Silva Ferraz de 1860), levando os empreendimentos de Mauá à falência."
      },
      {
        id: "b",
        text: "esgotamento absoluto de todos os reservatórios mundiais de carvão e ferro nas fábricas fluminenses.",
        isCorrect: false,
        distractorRationale: "O problema não foi a disponibilidade física de recursos importados, mas a falta de política de apoio estatal e a estreiteza do mercado interno escravista."
      },
      {
        id: "c",
        text: "proibição papal de constituição de sociedades anônimas mercantis em países da América Latina.",
        isCorrect: false,
        distractorRationale: "O direito societário era regulado pelo Código Comercial imperial de 1850, sem relação com bulas pontifícias."
      },
      {
        id: "d",
        text: "falta de ferrovias e a impossibilidade técnica de conectar portos do litoral às regiões mineradoras.",
        isCorrect: false,
        distractorRationale: "Mauá foi pioneiro na construção da primeira ferrovia do país (Estrada de Ferro Mauá, 1854), inaugurando as conexões ferroviárias modernas."
      },
      {
        id: "e",
        text: "exclusão total de capitais britânicos em todos os contratos de iluminação urbana do Rio de Janeiro.",
        isCorrect: false,
        distractorRationale: "A dependência de capitais britânicos era imensa, e concorrentes ingleses contaram frequentemente com favorecimento oficial do gabinete ministerial conservador."
      }
    ],
    detailedExplanation: {
      summary: "A Era Mauá foi sufocada pela hegemonia latifundiária escravista, pela falta de mercado consumidor e por políticas estatais contrárias à indústria.",
      stepByStep: [
        "1. Com a Lei Eusébio de Queirós (1850), cerca de 30 mil a 40 mil contos de réis anuais que compravam escravizados foram redirecionados para novos negócios.",
        "2. Irineu Evangelista de Sousa fundou a Companhia de Iluminação a Gás do Rio, a Fundição e Estaleiro Ponta da Areia, companhias de navegação no Amazonas e ferrovias.",
        "3. Obstáculos estruturais intransponíveis:",
        "   - A escravidão impedia o surgimento de um mercado consumidor interno amplo de massa;",
        "   - A elite política agrária ('saquarema') não tinha interesse em um modelo urbano-industrial burguês;",
        "   - Em 1860, a Tarifa Silva Ferraz reduziu taxas alfandegárias para produtos ingleses concorrentes;",
        "   - O Banco do Brasil cortou crédito para as empresas de Mauá.",
        "4. A falência de Mauá em 1878 simbolizou a vitória do latifúndio agroexportador tradicional sobre o capitalismo industrial moderno no século XIX."
      ],
      coreConcept: "Era Mauá (década de 1850): Surto manufatureiro e de infraestrutura propiciado pelo capital liberado pelo fim do tráfico negreiro, frustrado pela ordem escravocrata agrária.",
      trapWarning: "Mauá era um liberal convicto e defensor do trabalho livre, o que o colocava em confronto direto com a aristocracia escravista da corte."
    },
    tags: ["humanas", "brasil-imperio", "barao-de-maua", "modernizacao", "segundo-reinado"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-017",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Crise do Império - A Questão Religiosa (1872–1875)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Pela Constituição de 1824, o Catolicismo Apostólico Romano era a religião oficial do Império. Os institutos do 'Padroado' (pelo qual o monarca nomeava bispos e provia cargos eclesiásticos) e do 'Beneplácito Imperial' (que condicionava a validade das bulas papais no Brasil ao assentimento prévio do Imperador) subordinavam a Igreja ao Estado. Em 1872, os bispos de Olinda (Dom Vital) e de Belém (Dom Macedo Costa) suspenderam irmandades que abrigavam clérigos maçons, desobedecendo ordens do gabinete imperial.",
      source: "VIEIRA, David Gueiros. O Protestantismo, a Maçonaria e a Questão Religiosa no Brasil. UnB, 1980."
    },
    prompt: "O episódio da 'Questão Religiosa' desgastou irremediavelmente as relações entre a monarquia e a Igreja Católica porque resultou no(a)",
    options: [
      {
        id: "a",
        text: "fechamento de todos os templos cristãos do Império e proclamação do ateísmo de Estado pelas Cortes.",
        isCorrect: false,
        distractorRationale: "O catolicismo permaneceu sendo a religião oficial do Estado até a proclamação da República com o Decreto 119-A de 1890."
      },
      {
        id: "b",
        text: "condenação e prisão dos dois bispos católicos pelo Supremo Tribunal de Justiça do Império, alienando o clero do apoio à Coroa.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O primeiro-ministro Visconde do Rio Branco (grão-mestre da Maçonaria) processou e encarcerou os bispos por desobediência ao beneplácito, gerando revolta no clero católico que retirou seu apoio tradicional à monarquia."
      },
      {
        id: "c",
        text: "substituição compulsória dos bispos brasileiros por pastores luteranos alemães em todas as províncias.",
        isCorrect: false,
        distractorRationale: "O luteranismo era permitido apenas nos núcleos de colonos imigrantes em cultos domésticos sem fachada de templo."
      },
      {
        id: "d",
        text: "confisco das terras da Companhia de Jesus para construção do palácio de Petrópolis.",
        isCorrect: false,
        distractorRationale: "Os jesuítas haviam sido expulsos ainda no período pombalino no século XVIII."
      },
      {
        id: "e",
        text: "proclamação de uma teocracia evangélica apoiada pelos fazendeiros do Vale do Paraíba.",
        isCorrect: false,
        distractorRationale: "O Vale do Paraíba era católico tradicional e escravista, sem qualquer ligação com movimentos teocráticos evangélicos."
      }
    ],
    detailedExplanation: {
      summary: "Ao prender dois bispos por desafiarem o beneplácito imperial, o Estado perdeu o apoio institucional da Igreja Católica.",
      stepByStep: [
        "1. O Papa Pio IX publicou a bula Síllabo (1864), ordenando a expulsão de maçons de irmandades católicas.",
        "2. Pelo regime do Beneplácito Imperial (Art. 102 da Carta de 1824), nenhuma bula tinha validade no Brasil sem a aprovação do Imperador.",
        "3. Como muitos políticos e o próprio chefe de gabinete (Visconde do Rio Branco) eram maçons, o governo imperial não concedeu o beneplácito à bula.",
        "4. Os jovens bispos ultramontanos Dom Vital e Dom Macedo Costa desafiaram o Estado e interditaram as irmandades com membros maçons.",
        "5. O governo imperial julgou e condenou ambos os bispos a quatro anos de prisão com trabalhos forçados (pena posteriormente comutada).",
        "6. Embora D. Pedro II tenha anistiado os bispos em 1875, a fratura foi irreversível: a Igreja Católica afastou-se da monarquia e acolheu com simpatia ou neutralidade a causa republicana."
      ],
      coreConcept: "Questão Religiosa (1872–1875): Conflito Padroado/Beneplácito vs. Ultramontanismo papal. A prisão de bispos desmoronou o apoio da Igreja à monarquia de D. Pedro II.",
      trapWarning: "Padroado e Beneplácito só deixaram de existir no Brasil com a separação formal entre Estado e Igreja na Proclamação da República (1889/1891)."
    },
    tags: ["humanas", "brasil-imperio", "questao-religiosa", "padroado", "crise-do-imperio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-018",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Brasil Império",
    subtopic: "Abolicionismo - As Fugas Coletivas e o Papel de Luís Gama",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nascido livre em Salvador em 1830 e vendido ilegalmente como escravo pelo próprio pai aos dez anos, Luís Gama conquistou sua própria liberdade pela via jurídica, alfabetizou-se e tornou-se um brilhante rábula (advogado prático). Em São Paulo, utilizou a Lei de 7 de novembro de 1831 (a chamada 'lei para inglês ver') para libertar judicialmente mais de 500 escravizados que haviam ingressado no país após a proibição formal do tráfico.",
      source: "AZEVEDO, Elciene. O Direito dos Escravos: Lutas Jurídicas e Abolicionismo na Província de São Paulo. Unicamp, 2010."
    },
    prompt: "A atuação combativa de Luís Gama no movimento abolicionista brasileiro exemplifica uma estratégia política e jurídica que",
    options: [
      {
        id: "a",
        text: "defendia a indenização prévia do Tesouro imperial a todos os senhores antes de qualquer libertação legal.",
        isCorrect: false,
        distractorRationale: "Luís Gama sustentava que o cativeiro era um crime contra a humanidade e que os escravizados eram vítimas de sequestro continuado, sem direito a indenização."
      },
      {
        id: "b",
        text: "utilizava as próprias contradições da ordem jurídica imperial e a ilegalidade da posse para libertar cativos nos tribunais e legitimar o direito de resistência dos escravizados.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Gama expunha perante a magistratura que a grande maioria dos escravizados vivos havia sido importada em violação da lei de 1831, tornando sua posse um crime flagrante de redução à escravidão de pessoas livres."
      },
      {
        id: "c",
        text: "recusava terminantemente qualquer litígio institucional, priorizando exclusivamente a diplomacia palaciana com o Conselho de Estado.",
        isCorrect: false,
        distractorRationale: "Gama era um tribuno de ação direta nos fóruns, jornais e reuniões populares, criticando duramente a condescendência monárquica."
      },
      {
        id: "d",
        text: "conclamava os escravizados a lutarem ao lado dos barões do Vale do Paraíba para preservar as instituições imperiais.",
        isCorrect: false,
        distractorRationale: "Gama apoiava a insubmissão escrava e declarava célebre frase: 'O escravo que mata o senhor em legítima defesa é um herói'."
      },
      {
        id: "e",
        text: "pleiteava a criação de colônias britânicas no interior do Paraná para acolher trabalhadores assalariados.",
        isCorrect: false,
        distractorRationale: "Gama defendia cidadania plena, direitos civis e soberania para os negros libertos no próprio território brasileiro."
      }
    ],
    detailedExplanation: {
      summary: "Luís Gama usou o direito contra os senhores de escravos, provando a posse ilegal de africanos trazidos após a lei de 1831.",
      stepByStep: [
        "1. Em 7 de novembro de 1831, foi aprovada a lei que proibia a entrada de escravos no Brasil (conhecida ironicamente como 'lei para inglês ver' pela omissão das autoridades).",
        "2. Entre 1831 e 1850, mais de 700 mil africanos entraram ilegalmente no Brasil por contrabando acobertado pelas elites.",
        "3. Luís Gama percebeu a fragilidade jurídica dos proprietários: juridicamente, qualquer pessoa que entrou no país após 1831 (ou seus descendentes) era legalmente livre sequestrada.",
        "4. Nos tribunais paulistas, Gama impetrou centenas de ações de liberdade com base nessa prova, obrigando juízes a concederem alforrias judiciais sem indenização.",
        "5. Aliou ativismo jurídico à imprensa (jornais satíricos) e à literatura poética, sendo patrono da advocacia e pioneiro da luta por direitos humanos no Brasil."
      ],
      coreConcept: "Abolicionismo Ativo: Luís Gama, André Rebouças e José do Patrocínio demonstraram o protagonismo negro no processo de emancipação, desmistificando a ideia de que a libertação foi mera benesse da Princesa Isabel.",
      trapWarning: "Lembre-se: Luís Gama faleceu em 1882, antes da Lei Áurea de 1888, mas seu cortejo fúnebre reuniu milhares de pessoas em São Paulo em uma das maiores manifestações políticas do século XIX."
    },
    tags: ["humanas", "brasil-imperio", "luis-gama", "abolicionismo", "protagonismo-negro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-019",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Brasil Império",
    subtopic: "Primeiro Reinado - A Assembleia Constituinte de 1823 e a 'Constituição da Mandioca'",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Reunida em maio de 1823 para elaborar a primeira Carta Magna do Brasil soberano, a Assembleia Constituinte apresentou um anteprojeto elaborado por Antônio Carlos de Andrada. O texto propunha subordinar o monarca ao Parlamento e estabelecia que o direito de votar e ser votado estaria condicionado à posse de terras que produzissem um valor mínimo de alqueires de farinha de mandioca.",
      source: "COSTA, Emília Viotti da. Da Monarquia à República: Momentos Decisivos. 8ª ed. Unesp, 2010."
    },
    prompt: "O critério censitário baseado na produção de farinha de mandioca adotado pelo anteprojeto de 1823 tinha o objetivo político prático de",
    options: [
      {
        id: "a",
        text: "assegurar a representação parlamentar predominante aos grandes proprietários de terras rurais nascidos no Brasil, alijando comerciantes portugueses do poder.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Os fazendeiros brasileiros possuíam terras e plantéis de mandioca, enquanto os comerciantes urbanos (em sua maioria portugueses abastados que apoiavam D. Pedro I) detinham dinheiro líquido, mas não terras rurais. Daí o apelido 'Constituição da Mandioca'."
      },
      {
        id: "b",
        text: "conceder sufrágio universal direto e irrestrito aos trabalhadores assalariados da agricultura de subsistência.",
        isCorrect: false,
        distractorRationale: "O voto era rigorosamente censitário e elitista, excluindo trabalhadores pobres, camponeses sem terra e escravizados."
      },
      {
        id: "c",
        text: "estimular a exportação internacional de tubérculos para concorrer com o café nos mercados europeus.",
        isCorrect: false,
        distractorRationale: "A farinha de mandioca era um alimento básico de subsistência e consumo interno, não produto primário de exportação."
      },
      {
        id: "d",
        text: "permitir que indígenas aldeados elegessem senadores com mandato perpétuo em Brasília.",
        isCorrect: false,
        distractorRationale: "Indígenas não tinham direitos de representação política reconhecidos pelo anteprojeto, e Brasília só foi fundada em 1960."
      },
      {
        id: "e",
        text: "submeter as forças armadas à liderança de diplomatas franceses enviados pela Santa Aliança.",
        isCorrect: false,
        distractorRationale: "O projeto de 1823 visava restringir o poder de D. Pedro I e de seus oficiais e conselheiros lusitanos."
      }
    ],
    detailedExplanation: {
      summary: "O anteprojeto da Constituinte de 1823 favorecia os latifundiários nativos e limitava o poder de D. Pedro I e dos comerciantes portugueses.",
      stepByStep: [
        "1. Conflito central da Constituinte de 1823: Partido Brasileiro (família Andrada e latifundiários) vs. Partido Português (comerciantes e D. Pedro I).",
        "2. Para excluir os comerciantes portugueses das decisões públicas, os constituintes brasileiros definiram que a renda mínima eleitoral seria medida em alqueires de farinha de mandioca (150 alqueires para eleitor de paróquia e mais para deputados).",
        "3. Como apenas grandes proprietários rurais produziam tal quantidade, o poder ficaria restrito aos latifundiários brasileiros.",
        "4. Além disso, o projeto limitava severamente a autoridade do monarca, proibindo-o de dissolver a Câmara.",
        "5. Em resposta a essa afronta, D. Pedro I cercou o plenário com o exército na madrugada de 12 de novembro de 1823 ('Noite da Agonia'), dissolveu a Assembleia e outorgou a sua própria Carta em 1824 com o Poder Moderador."
      ],
      coreConcept: "Constituição da Mandioca (1823): Antiabsolutista, antilusitana e elitista agrária. Foi dissolvida à força por D. Pedro I na Noite da Agonia.",
      trapWarning: "Lembre-se: a Constituição da Mandioca de 1823 NUNCA entrou em vigor, pois foi dissolvida antes de ser promulgada."
    },
    tags: ["humanas", "brasil-imperio", "constituinte-1823", "constituicao-da-mandioca", "noite-da-agonia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-020",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Brasil Império",
    subtopic: "Economia e Trabalho - A Imigração Europeia e o Sistema de Parceria de Vergueiro",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na década de 1840, antevendo o fim do tráfico negreiro, o senador Nicolau Vergueiro introduziu pioneiramente famílias de imigrantes suíços e alemães na Fazenda Ibicaba, em Limeira (SP), sob o regime de 'parceria'. Os colonos contraíam dívidas desde a Europa para arcar com o transporte, alojamento e mantimentos, comprometendo-se a repassar ao fazendeiro até metade dos lucros obtidos na colheita do café.",
      source: "HOLANDA, Sérgio Buarque de. Memórias de um Colono no Brasil (Thomas Davatz). Martins Fontes, 1980."
    },
    prompt: "O sistema de parceria implementado por Nicolau Vergueiro entrou em colapso com a eclosão da Revolta de Ibicaba (1856) porque",
    options: [
      {
        id: "a",
        text: "o endividamento impagável dos imigrantes, somado aos juros escorchantes cobrados nos armazéns da fazenda e ao autoritarismo senhorial, reduziu os colonos a uma condição de servidão por dívida.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O colono já chegava endividado pelas passagens e era obrigado a comprar suprimentos a preços abusivos no barracão do senhor de escravos, criando uma dívida perpétua análoga ao cativeiro, deflagrando a revolta liderada pelo professor Thomas Davatz."
      },
      {
        id: "b",
        text: "a geada negra destruiu integralmente as plantações de café de São Paulo por três décadas ininterruptas.",
        isCorrect: false,
        distractorRationale: "A produção de café continuou em franca expansão; o problema era a relação de trabalho exploratória."
      },
      {
        id: "c",
        text: "os governos da Alemanha e da Suíça exigiram a compra forçada de todas as terras dos fazendeiros paulistas por corporações bancárias.",
        isCorrect: false,
        distractorRationale: "Em resposta aos abusos denunciados por Davatz, a Prússia apenas proibiu a imigração para o Brasil (Rescrito de Heydt de 1859)."
      },
      {
        id: "d",
        text: "os imigrantes abandonaram voluntariamente os cafezais para fundar indústrias automotivas no ABC paulista.",
        isCorrect: false,
        distractorRationale: "A indústria automobilística só se instalou na região do ABC a partir da década de 1950 no governo JK."
      },
      {
        id: "e",
        text: "o governo imperial decretou a concessão de títulos de nobreza e latifúndios a todas as famílias suíças residentes.",
        isCorrect: false,
        distractorRationale: "Imigrantes eram mão de obra subordinada e não recebiam privilégios aristocráticos da Coroa."
      }
    ],
    detailedExplanation: {
      summary: "O sistema de parceria faliu por ser uma servidão por dívidas; mais tarde, o Estado assumiu as passagens e criou o modelo do colonato.",
      stepByStep: [
        "1. Sistema de Parceria (Vergueiro): iniciativa privada que financiava a vinda de imigrantes europeus.",
        "2. Como funcionava: os colonos chegavam com a dívida do transporte internacional, eram obrigados a consumir mantimentos com juros nos armazéns exclusivos do proprietário e dividiam a colheita 50/50.",
        "3. A conta nunca fechava: os fazendeiros, acostumados ao trato violento com escravizados, tratavam os europeus de forma despótica.",
        "4. Em 1856, liderados por Thomas Davatz, os colonos suíços e alemães da Fazenda Ibicaba rebelaram-se contra os abusos (Revolta de Ibicaba).",
        "5. O escândalo internacional fez a Prússia e governos germânicos proibirem a emigração para o Brasil (Rescrito de Heydt de 1859).",
        "6. Lição aprendida pelas elites: na década de 1880, o Estado de São Paulo passou a subsidiar as passagens e adotou o sistema de 'colonato' (salário fixo pelo trato dos cafeeiros + remuneração por saca colhida + permissão para lavoura de subsistência), atraindo centenas de milhares de italianos."
      ],
      coreConcept: "Transição do trabalho: Escravidão -> Sistema de Parceria (falhou por servidão por dívida / Ibicaba) -> Imigração subsidiada e Colonato (sucesso cafeeiro no Oeste Paulista).",
      trapWarning: "Lembre-se da diferença crucial: Parceria = dívida privada do colono com o patrão. Colonato = governo paga a passagem, colono recebe remuneração mista."
    },
    tags: ["humanas", "brasil-imperio", "imigracao", "sistema-de-parceria", "fazenda-ibicaba"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-021",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Segundo Reinado - A Revolução Praieira de 1848 em Pernambuco",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1848, eclodiu em Pernambuco a Revolução Praieira, último levante armado do ciclo revolucionário liberal do Império. Divulgado no jornal 'Diário Novo' (cujo comitê situava-se na Rua da Praia, no Recife), o célebre 'Manifesto ao Mundo' reivindicava: voto livre e universal do povo brasileiro, liberdade plena de imprensa, nacionalização do comércio varejista e extinção do Poder Moderador.",
      source: "MARSON, Adalberto. A Ideologia Praieira. Brasiliense, 1989."
    },
    prompt: "Sincronizada no tempo com a 'Primavera dos Povos' europeia de 1848, a Revolução Praieira sintetizou as aspirações de setores médios urbanos e liberais radicais nordestinos contra o(a)",
    options: [
      {
        id: "a",
        text: "monopólio fundiário da família Cavalcanti e a dominação do comércio varejista local por mercadores portugueses.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na época dizia-se: 'Quem não deve a Cavalcanti não é pernambucano'. A revolta atacava a hiperconcentração de terras dos barões do açúcar e exigia expulsão/nacionalização dos comerciantes lusitanos que controlavam o varejo e inflacionavam alimentos."
      },
      {
        id: "b",
        text: "instalação de missões militares soviéticas no arquipélago de Fernando de Noronha.",
        isCorrect: false,
        distractorRationale: "A União Soviética só surgiu em 1922 no século XX."
      },
      {
        id: "c",
        text: "anexação compulsória do estado do Maranhão aos domínios da monarquia espanhola.",
        isCorrect: false,
        distractorRationale: "A Espanha não tentava recuperar colônias no nordeste brasileiro em meados do século XIX."
      },
      {
        id: "d",
        text: "exigência imperial de alistamento feminino compulsório nos contingentes da Marinha de Guerra.",
        isCorrect: false,
        distractorRationale: "Mulheres não eram alistadas nas forças armadas do Império."
      },
      {
        id: "e",
        text: "isenção perpétua de tributos concedida aos operários da indústria têxtil paulista.",
        isCorrect: false,
        distractorRationale: "A pauta praieira era estritamente pernambucana e nordestina, voltada para as tensões locais entre açúcar, comércio e poder central."
      }
    ],
    detailedExplanation: {
      summary: "A Revolução Praieira (1848) combateu o latifúndio dos Cavalcanti, o comércio português e o centralismo do Poder Moderador.",
      stepByStep: [
        "1. No Recife dos anos 1840, a riqueza da cana-de-açúcar concentrava-se nas mãos de poucas famílias patriarcais (especialmente a oligarquia dos Cavalcanti).",
        "2. O comércio varejista que vendia produtos essenciais era monopolizado por negociantes portugueses, gerando forte xenofobia popular antilusitana ('mata-marinheiro').",
        "3. Em 1848, influenciados pelo socialismo utópico e pelas revoluções europeias ('Primavera dos Povos'), liberais radicais conhecidos como 'praieiros' pegaram em armas.",
        "4. O líder Joaquim Nunes Machado e o socialista utópico Borges da Fonseca redigiram o 'Manifesto ao Mundo':",
        "   - Voto universal do povo brasileiro;",
        "   - Liberdade plena e absoluta de imprensa;",
        "   - Garantia de trabalho para os cidadãos e nacionalização do comércio varejista;",
        "   - Extinção total do Poder Moderador do Imperador.",
        "5. As tropas legalistas imperiais derrotaram os revoltosos em 1850, marcando o início da longa fase de estabilidade política do Segundo Reinado."
      ],
      coreConcept: "Revolução Praieira (1848): Última grande revolta imperial. Coincidiu com a Primavera dos Povos; defendeu voto universal, fim do Poder Moderador e comércio nas mãos de brasileiros.",
      trapWarning: "Lembre-se: com a derrota da Praieira em 1850, o Império entrou em sua fase de ouro de conciliação política entre liberais e conservadores."
    },
    tags: ["humanas", "brasil-imperio", "revolucao-praieira", "1848", "pernambuco"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-022",
    area: "humanas",
    competence: 3,
    skill: 13,
    topic: "Brasil Império",
    subtopic: "Abolicionismo - O Tráfico Interprovincial de Escravos após 1850",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Com a proibição definitiva da entrada de africanos pela Lei Eusébio de Queirós em 1850, o preço dos trabalhadores escravizados atingiu patamares recordes no mercado interno. Em resposta à expansão das lavouras de café no Sudeste e à estagnação da economia açucareira e algodoeira do Nordeste, intensificou-se o chamado tráfico interno ou interprovincial.",
      source: "SLENES, Robert W. Na Senzala, uma Flor: Esperanças e Recordações na Formação da Família Escrava. Nova Fronteira, 1999."
    },
    prompt: "O tráfico interprovincial de escravos na segunda metade do século XIX gerou como importante desdobramento sociopolítico o(a)",
    options: [
      {
        id: "a",
        text: "deslocamento em massa de centenas de milhares de cativos do Nordeste para o Sudeste cafeeiro, o que acelerou o desinteresse dos proprietários nordestinos em manter a escravidão nas décadas seguintes.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Nordeste 'desescravizou-se' economicamente ao vender seus escravos a preços astronômicos para os cafeicultores do Rio e de São Paulo. Isso fez com que as elites nordestinas tivessem menor apego à manutenção da escravidão na década de 1880 (ex: o Ceará aboliu a escravidão em 1884)."
      },
      {
        id: "b",
        text: "transferência da capital imperial do Rio de Janeiro para o sertão do Cariri cearense.",
        isCorrect: false,
        distractorRationale: "O Rio de Janeiro consolidou-se como a metrópole política e financeira do Império."
      },
      {
        id: "c",
        text: "erradicação imediata de castigos físicos em todas as propriedades agrícolas das províncias do Sul.",
        isCorrect: false,
        distractorRationale: "A violência contra escravizados continuou respaldada pelo Código Criminal até a abolição formal."
      },
      {
        id: "d",
        text: "substituição espontânea da monocultura de café pela extração mineral de diamante no litoral fluminense.",
        isCorrect: false,
        distractorRationale: "O café permaneceu o eixo motor da balança comercial brasileira."
      },
      {
        id: "e",
        text: "fechamento de todas as rotas marítimas entre o porto de Salvador e o porto de Santos por ordem britânica.",
        isCorrect: false,
        distractorRationale: "O tráfico interprovincial de cabotagem era perfeitamente legal perante o direito brasileiro da época."
      }
    ],
    detailedExplanation: {
      summary: "O tráfico interno transferiu escravizados do Nordeste açucareiro decadente para o Sudeste cafeeiro próspero, quebrando a coesão escravocrata nacional.",
      stepByStep: [
        "1. Sem entrada de escravos da África após 1850, o café precisava desesperadamente de braços para a colheita.",
        "2. Como o café pagava preços altíssimos, proprietários nordestinos venderam centenas de milhares de escravizados para os cafeicultores do Sudeste.",
        "3. Impacto demográfico: concentração maciça de escravizados no Vale do Paraíba e Oeste Paulista, e rápido esvaziamento da escravidão no Norte e Nordeste.",
        "4. Impacto familiar: desestruturação brutal de famílias de escravizados que foram separadas à força pelos negociantes de escravos.",
        "5. Impacto político: os deputados nordestinos passaram a resistir menos às pressões abolicionistas, culminando com a abolição pioneira da escravidão no Ceará (1884, 'Terra da Luz') e no Amazonas.",
        "6. Quando a Lei Áurea foi votada em 1888, a escravidão estava praticamente circunscrita ao Sudeste."
      ],
      coreConcept: "Tráfico Interprovincial (1850–1880): Migração forçada do Nordeste para o Sudeste. Concentrou a escravidão no café paulista e fluminense e facilitou a causa abolicionista no Norte/Nordeste.",
      trapWarning: "Lembre-se da figura de Francisco José do Nascimento (o 'Dragão do Mar'), jangadeiro cearense que em 1881 liderou a greve de jangadeiros em Fortaleza recusando-se a embarcar escravos para o tráfico interprovincial."
    },
    tags: ["humanas", "brasil-imperio", "trafico-interprovincial", "escravidao", "cafe-e-acucar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-023",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Primeiro Reinado - Reconhecimento Diplomático e Dívida Externa",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Para que a Independência do Brasil proclamada em 1822 fosse reconhecida pelas potências internacionais, o recém-criado Império teve que atender a duras exigências financeiras e comerciais impostas por Portugal e pela Grã-Bretanha no Tratado de Paz e Aliança de 1825.",
      source: "CERVO, Amado Luiz; BUENO, Clodoaldo. História da Política Exterior do Brasil. 5ª ed. UnB, 2015."
    },
    prompt: "Entre as condições financeiras e diplomáticas impostas para que Portugal e a Grã-Bretanha reconhecessem formalmente o Império do Brasil em 1825, constava o(a)",
    options: [
      {
        id: "a",
        text: "pagamento de 2 milhões de libras esterlinas a Portugal (assumindo o Brasil uma dívida portuguesa com banqueiros ingleses) e a renovação dos privilégios comerciais britânicos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Brasil assumiu a dívida de Portugal com banqueiros ingleses (2 milhões de libras) como indenização e manteve a tarifa privilegiada de 15% sobre produtos britânicos, inaugurando a dívida externa brasileira."
      },
      {
        id: "b",
        text: "entrega da capitania de Pernambuco para a administração direta da Companhia das Índias Orientais.",
        isCorrect: false,
        distractorRationale: "Nenhum território soberano foi cedido a companhias de comércio estrangeiras."
      },
      {
        id: "c",
        text: "isenção total de tributos para mercadores espanhóis em troca de frotas de guerra da Prata.",
        isCorrect: false,
        distractorRationale: "A Espanha não teve participação no processo de mediação diplomática da independência brasileira."
      },
      {
        id: "d",
        text: "abolição compulsória e instantânea da escravidão em todas as províncias do Centro-Sul.",
        isCorrect: false,
        distractorRationale: "A escravidão foi expressamente preservada e protegida para manter a fidelidade das elites latifundiárias à nova monarquia."
      },
      {
        id: "e",
        text: "doação de todas as minas de ouro de Minas Gerais à rainha Carlota Joaquina.",
        isCorrect: false,
        distractorRationale: "A família real portuguesa reconheceu D. Pedro I como Imperador sem confisco pessoal das minas do interior."
      }
    ],
    detailedExplanation: {
      summary: "O reconhecimento da independência nasceu atrelado à contratação de empréstimos com a Inglaterra para indenizar Portugal em 2 milhões de libras.",
      stepByStep: [
        "1. Os Estados Unidos foram o primeiro país a reconhecer a independência do Brasil (em 1824, sob os auspícios da Doutrina Monroe).",
        "2. No entanto, o reconhecimento europeu era fundamental e dependia da intermediação britânica.",
        "3. A Grã-Bretanha intermediou as negociações entre Lisboa e o Rio de Janeiro.",
        "4. Exigências de Portugal: indenização de 2 milhões de libras esterlinas (o Brasil assumiu um empréstimo de Portugal com banqueiros ingleses da família Rothschild) e concessão do título honorário de Imperador a D. João VI.",
        "5. Exigências britânicas: renovação do tratado comercial de 1810 (mantendo taxa alfandegária preferencial de 15% sobre produtos ingleses) e promessa de extinguir o tráfico negreiro.",
        "6. Assim, o Estado nacional brasileiro nasceu com pesada hipoteca de dívida externa dependente do capital financeiro de Londres."
      ],
      coreConcept: "Reconhecimento da Independência (1825): Brasil pagou 2 milhões de libras esterlinas a Portugal financiadas por banqueiros ingleses e renovou tratados desiguais com a Inglaterra, inaugurando a dependência externa.",
      trapWarning: "Lembre-se: os EUA reconheceram em 1824 (primeiro país), mas o reconhecimento definitivo perante a Europa e Portugal só veio em 1825 através do tratado anglo-luso-brasileiro."
    },
    tags: ["humanas", "brasil-imperio", "reconhecimento-diplomatico", "divida-externa", "inglaterra"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-024",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Crise da Monarquia - O Manifesto Republicano de 1870 e a Convenção de Itu (1873)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "'A soberania do povo só pode existir onde ela for a fonte única e legítima de todo o poder. [...] A centralização desfigura a feição nacional, entorpece o desenvolvimento das províncias e anula o princípio da representação. [...] Somos da América e queremos ser americanos.'",
      source: "MANIFESTO REPUBLICANO. Publicado no jornal 'A República', Rio de Janeiro, 3 de dezembro de 1870."
    },
    prompt: "O célebre trecho 'Somos da América e queremos ser americanos', estampado no Manifesto Republicano de 1870, expressava o ideal político de",
    options: [
      {
        id: "a",
        text: "alinhar as instituições políticas brasileiras ao modelo republicano e federativo predominante no continente, repudiando a anomalia de uma monarquia dinástica europeia e centralizadora.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na América do século XIX, todos os países vizinhos eram repúblicas; o Brasil era a única monarquia isolada no continente. O manifesto defendia o federalismo inspirado nos EUA e o fim do Império centralizador."
      },
      {
        id: "b",
        text: "anexar o Brasil aos Estados Unidos como território colonial ultramarino subordinado a Washington.",
        isCorrect: false,
        distractorRationale: "O manifesto propunha soberania popular brasileira e federalismo autônomo, não subordinação colonial."
      },
      {
        id: "c",
        text: "promover uma união monárquica continental sob a liderança do imperador Maximiliano do México.",
        isCorrect: false,
        distractorRationale: "Maximiliano foi fuzilado no México em 1867 por Benito Juárez; o manifesto era radicalmente antimonárquico."
      },
      {
        id: "d",
        text: "dissolver os exércitos profissionais para instaurar a comuna agrária de modelo soviético.",
        isCorrect: false,
        distractorRationale: "O Manifesto Republicano foi redigido por advogados, jornalistas e cafeicultores liberais burgueses, e não socialistas."
      },
      {
        id: "e",
        text: "reintegrar a capitania de Grão-Pará ao vice-reinado do Peru sob protetorado espanhol.",
        isCorrect: false,
        distractorRationale: "Não havia proposta de retalhamento ou entrega de terras aos espanhóis."
      }
    ],
    detailedExplanation: {
      summary: "O Manifesto de 1870 criticava o isolamento do Brasil como única monarquia nas Américas e propunha o federalismo republicano.",
      stepByStep: [
        "1. Ano de 1870: fim da Guerra do Paraguai e descontentamento generalizado contra a centralização do Segundo Reinado.",
        "2. Fundação do Clube Republicano no Rio de Janeiro e lançamento do Manifesto Republicano de 1870 (redigido por Quintino Bocaiuva, Saldanha Marinho, entre outros).",
        "3. Tese central do documento: denúncia do Poder Moderador como ditadura disfarçada, crítica ao esvaziamento das províncias e afirmação da vocação republicana das Américas.",
        "4. A frase 'Somos da América e queremos ser americanos' sintetizava o contraste entre o Brasil (monarquia hereditária centralizada) e seus vizinhos americanos (repúblicas federativas).",
        "5. Três anos depois, em 1873, cafeicultores paulistas reuniram-se na Convenção de Itu e fundaram o Partido Republicano Paulista (PRP), aliando o ideário republicano ao poder econômico do café."
      ],
      coreConcept: "Manifesto Republicano de 1870: Lançou as bases ideológicas da propaganda republicana. Defesa do Federalismo, soberania popular e republicanismo contra o anacronismo monárquico na América.",
      trapWarning: "Apesar de defender o federalismo e a república, o Manifesto Republicano de 1870 omitiu deliberadamente a questão da escravidão para não desagradar os latifundiários signatários."
    },
    tags: ["humanas", "brasil-imperio", "manifesto-republicano-1870", "federalismo", "crise-da-monarquia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-IMP-025",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Brasil Império",
    subtopic: "Crise do Império - A Questão Militar e o Positivismo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A doutrina positivista fundada por Auguste Comte encontrou no Brasil solo excepcionalmente fértil na Escola Militar da Praia Vermelha, sob a cátedra de matemática do tenente-coronel Benjamin Constant. Acreditando na marcha inevitável do progresso científico, os jovens oficiais fardados passaram a conceber o Exército como vanguarda esclarecida e moralizadora capaz de regenerar a nação.",
      source: "CARVALHO, José Murilo de. Forças Armadas e Política no Brasil. Zahar, 2005."
    },
    prompt: "A influência do ideário positivista sobre a oficialidade do Exército no final do Segundo Reinado justificou politicamente",
    options: [
      {
        id: "a",
        text: "o golpe militar republicano liderado por Deodoro da Fonseca em 1889, fundamentado na crença de que uma república autoritária da 'ordem e progresso' conduziria o país à modernização sem convulsões sociais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para os positivistas, a monarquia e os políticos civis tradicionais eram corruptos e anacrônicos. O lema comtiano 'O Amor por princípio, a Ordem por base, o Progresso por fim' inspirou a divisa 'Ordem e Progresso' da nova bandeira republicana."
      },
      {
        id: "b",
        text: "a submissão incondicional de todos os generais à liderança teocrática do Papa em Roma.",
        isCorrect: false,
        distractorRationale: "O positivismo é uma filosofia científica secular que rejeita a teologia e a intervenção da Igreja católica nos assuntos do Estado."
      },
      {
        id: "c",
        text: "a defesa apaixonada da restauração da dinastia de Bragança como símbolo divino do império.",
        isCorrect: false,
        distractorRationale: "Os positivistas militares eram ferrenhos opositores da monarquia e foram os grandes articuladores de sua derrubada."
      },
      {
        id: "d",
        text: "a fundação imediata de sovietes armados de soldados para estatizar fazendas cafeeiras do interior paulista.",
        isCorrect: false,
        distractorRationale: "O positivismo pregava a preservação da propriedade privada e da hierarquia social ('ordem'), sendo oposto a revoluções socialistas."
      },
      {
        id: "e",
        text: "o desarmamento voluntário e a extinção de todas as academias militares das capitais brasileiras.",
        isCorrect: false,
        distractorRationale: "Ao contrário, o Exército reivindicava papel central e tutelar na condução dos destinos políticos da nação."
      }
    ],
    detailedExplanation: {
      summary: "O positivismo forneceu a base ideológica militar para derrubar a monarquia e instituir a República sob o lema 'Ordem e Progresso'.",
      stepByStep: [
        "1. A Questão Militar (1884–1887): série de atritos disciplinares entre o ministro civil da Guerra e generais prestigiados (como Deodoro da Fonseca e Sena Madureira) sobre o direito dos militares de se manifestarem na imprensa.",
        "2. O Exército sentia-se injustiçado e marginalizado pelos políticos civis da monarquia ('casacas').",
        "3. Paralelamente, os oficiais da Escola Militar foram formados por Benjamin Constant na filosofia do Positivismo de Auguste Comte.",
        "4. Postulados positivistas: primazia da ciência, superação da fase teológica/metafísica (monarquia) e necessidade de um Estado republicano forte, tecnocrata e garantidor da 'ordem' para promover o 'progresso'.",
        "5. Em 15 de novembro de 1889, Deodoro da Fonseca liderou as tropas que depuseram o gabinete ministerial de Ouro Preto; Benjamin Constant e os republicanos proclamaram a República.",
        "6. O lema na nova bandeira verde e amarela ('Ordem e Progresso') cristalizou a vitória do positivismo militar."
      ],
      coreConcept: "Positivismo Militar: Benjamin Constant ('Pai da República') + Deodoro da Fonseca. Concepção do Exército como salvador patriótico e modernizador do Brasil, corporificada no lema 'Ordem e Progresso'.",
      trapWarning: "Lembre-se: o lema original de Auguste Comte era 'O Amor por princípio e a Ordem por base; o Progresso por fim'. Apenas a Ordem e o Progresso foram incorporados à bandeira nacional."
    },
    tags: ["humanas", "brasil-imperio", "positivismo", "questao-militar", "proclamacao-da-republica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
