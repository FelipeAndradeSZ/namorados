/**
 * BANCO DE QUESTÕES ENEM: República Oligárquica, Coronelismo e Revoltas Sociais (1889-1930)
 * Área: Ciências Humanas e suas Tecnologias
 * Disciplina: História do Brasil e Sociologia Política
 * Quantidade: 25 Questões Inéditas de Alta Fidelidade ENEM (HUM-OLI-001 a HUM-OLI-025)
 * Regra Estrita: ZERO termos de deslocamento turístico. Foco em coronelismo, voto de cabresto,
 * Política dos Governadores, Revolta da Vacina de 1904, Canudos, Chibata e crise dos anos 1920.
 */

export const QUESTIONS_REPUBLICA_OLIGARQUICA = [
  {
    id: "HUM-OLI-001",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "História do Brasil",
    subtopic: "A Mecânica do Coronelismo e o Voto de Cabresto",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O coronelismo é, antes de tudo, um compromisso, uma troca de proveitos entre o poder público, progressivamente fortalecido, e a decadente influência social dos chefes locais, notadamente os senhores de terras. O coronel comanda o voto de cabresto não apenas pelo recurso à violência privada de seus capangas, mas sobretudo pela distribuição de favores assistenciais essenciais — como remédios, empregos públicos e atestados — em um meio rural desprovido de qualquer assistência estatal.",
      source: "LEAL, V. N. Coronelismo, Enxada e Voto: o município e o regime representativo no Brasil. São Paulo: Companhia das Letras, 2012 [1948]."
    },
    prompt: "De acordo com a análise clássica de Victor Nunes Leal sobre a Primeira República brasileira, o sustentáculo do coronelismo residia em",
    options: [
      {
        id: "a",
        text: "uma relação de reciprocidade assimétrica entre as oligarquias agrárias locais e o poder público estadual e federal, mediada por redes de clientelismo e dependência material das populações rurais desassistidas.",
        isCorrect: true,
        distractorRationale: "Correto: O coronelismo não era pura violência bruta feudal; tratava-se de um sistema político estruturado em trocas clientelistas. O coronel entregava votos em bloco ao governo estadual em troca de verbas, nomeações e proteção policial para manter seu mando no município, aproveitando-se do desamparo social dos camponeses."
      },
      {
        id: "b",
        text: "um sistema democrático plenamente transparente baseado no voto secreto universal e na fiscalização exercida pela Justiça Eleitoral independente.",
        isCorrect: false,
        distractorRationale: "O voto era aberto (descoberto) e a Justiça Eleitoral só foi criada em 1932 na Era Vargas; as eleições eram fraudadas pela Comissão Verificadora de Poderes."
      },
      {
        id: "c",
        text: "uma ideologia operária de cariz marxista que estimulava a revolta armada dos colonos contra os donos de fazendas de café.",
        isCorrect: false,
        distractorRationale: "O coronelismo era a própria antítese do marxismo: expressava o domínio conservador dos latifundiários sobre a massa rural tutelada."
      },
      {
        id: "d",
        text: "uma aliança entre a burguesia industrial financeira emergente e os sindicatos fabris urbanos contra os barões do café.",
        isCorrect: false,
        distractorRationale: "A Primeira República foi dominada pelas oligarquias cafeeiras e agrárias, e não pelo operariado fabril."
      },
      {
        id: "e",
        text: "um processo de reforma agrária radical promovido pela Constituição republicana de 1891 que distribuiu terras devolutas aos ex-escravizados.",
        isCorrect: false,
        distractorRationale: "Não houve reforma agrária; o latifúndio permaneceu intacto e concentrado nas mãos das famílias tradicionais."
      }
    ],
    detailedExplanation: {
      summary: "O coronelismo baseava-se em um compromisso de dependência mútua: o coronel fornecia votos ao governo em troca de poder local, mantendo a população rural submetida por dívidas e favores.",
      stepByStep: [
        "1. Analisar a tese de Victor Nunes Leal: O coronelismo é uma troca de favores (reciprocidade assimétrica).",
        "2. Identificar a fragilidade dos votantes: Sem direitos sociais garantidos pelo Estado, os camponeses dependiam do coronel para conseguir remédios, médicos ou empregos.",
        "3. Conectar à mecânica eleitoral: O voto aberto permitia ao coronel vigiar a escolha do eleitor (voto de cabresto).",
        "4. Concluir: O poder se sustentava na articulação entre latifúndio, clientelismo e omissão estatal."
      ],
      coreConcept: "O coronelismo é a manifestação municipal da aliança oligárquica: troca votos no nível local por concessões do poder estadual.",
      trapWarning: "Cuidado: O ENEM adora desmistificar a ideia de que o coronelismo era apenas pistolagem; a dimensão do clientelismo paternalista é central na prova."
    },
    tags: ["republica-velha", "coronelismo", "voto-de-cabresto", "victor-nunes-leal", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-002",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "História do Brasil",
    subtopic: "A Política dos Governadores e a Comissão Verificadora",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Instituída pelo presidente Campos Sales (1898-1902), a 'Política dos Governadores' (ou Política dos Estados) estabeleceu uma engenharia de acomodação oligárquica: o Presidente da República apoiava os grupos dominantes de cada estado sem intervir na política local; em contrapartida, as bancadas estaduais no Congresso Nacional votavam disciplinadamente a favor dos projetos do Executivo federal. Qualquer deputado opositor que conseguisse se eleger era sumariamente expurgado pela Comissão Verificadora de Poderes na infame prática da 'degola'.",
      source: "FAUSTO, B. História do Brasil. São Paulo: Edusp, 2013."
    },
    prompt: "No arranjo político consolidado por Campos Sales, o mecanismo da 'degola' exercido pela Comissão Verificadora de Poderes tinha como objetivo central",
    options: [
      {
        id: "a",
        text: "assegurar a alternância democrática de partidos ideológicos por meio de auditorias transparentes das urnas de votação.",
        isCorrect: false,
        distractorRationale: "O objetivo era justamente o contrário: impedir a alternância e consolidar a permanência inabalável das mesmas oligarquias no poder."
      },
      {
        id: "b",
        text: "blindar o governo federal contra qualquer oposição parlamentar, barrando arbitrariamente a diplomação de deputados oposicionistas eleitos nas urnas e garantindo maiorias submissas ao Executivo.",
        isCorrect: true,
        distractorRationale: "Correto: A Comissão Verificadora de Poderes da Câmara era controlada pelos situacionistas. Quando um candidato opositor vencia a eleição no estado, a comissão simplesmente declarava a eleição fraudulenta e 'degolava' o parlamentar (negava-lhe o diploma de posse), empossando o candidato chapa-branca derrotado. Isso garantia que 100% da bancada apoiasse o presidente."
      },
      {
        id: "c",
        text: "julgar crimes de traição à pátria cometidos por generais do Exército contrários à posse de presidentes civis.",
        isCorrect: false,
        distractorRationale: "A comissão cuidava exclusivamente da validação eleitoral de deputados e senadores, sem caráter penal militar."
      },
      {
        id: "d",
        text: "estabelecer a soberania do Poder Judiciário sobre os mandatos legislativos e executivos da federação.",
        isCorrect: false,
        distractorRationale: "O Judiciário era mantido afastado das disputas eleitorais; a validação cabia ao próprio Legislativo corrompido."
      },
      {
        id: "e",
        text: "organizar a partilha paritária do orçamento nacional entre todas as províncias do Norte e Nordeste brasileiro.",
        isCorrect: false,
        distractorRationale: "O arranjo privilegiava as grandes oligarquias cafeeiras do Centro-Sul, concentrando poder e verbas."
      }
    ],
    detailedExplanation: {
      summary: "A 'degola' eleitoral era o instrumento institucional que impedia a posse de qualquer parlamentar de oposição, garantindo apoio cego do Congresso ao Presidente da República.",
      stepByStep: [
        "1. Analisar a Política dos Governadores: Pacto entre Presidente e Governadores estaduais.",
        "2. Identificar a função da Comissão Verificadora: Validar ou impugnar a posse dos eleitos.",
        "3. Explicar a 'degola': Recusar diplomação a candidatos oposicionistas, mesmo que tivessem recebido a maioria dos votos.",
        "4. Concluir: O sistema operava como um circuito fechado de perpetuação oligárquica."
      ],
      coreConcept: "A Primeira República combinava fraude na ponta da urna (voto de cabresto) com fraude institucional no topo do Parlamento (a degola da Comissão Verificadora).",
      trapWarning: "Lembre-se: Na Primeira República não havia Tribunal Superior Eleitoral (TSE); a eleição era fiscalizada pelos próprios parlamentares governistas."
    },
    tags: ["politica-dos-governadores", "degola-eleitoral", "campos-sales", "republica-velha", "oligarquia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-003",
    area: "humanas",
    competence: 2,
    skill: 9,
    topic: "História do Brasil",
    subtopic: "A Revolta da Vacina de 1904: Higienismo e Conflito Social",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em novembro de 1904, a capital da República, o Rio de Janeiro, transformou-se em um campo de batalha campal: bondes virados, barricadas nas ruas, tiroteios contra a polícia e depredações de prédios públicos. O estopim foi a lei de vacinação obrigatória contra a varíola, sancionada sob orientação do sanitarista Oswaldo Cruz. Contudo, historiadores demonstram que a revolta popular não foi uma mera reação ignorante contra a agulha médica, mas o ápice do descontentamento da população pobre com o plano de 'regeneração' e modernização urbana do prefeito Pereira Passos, que demoliu violentamente os cortiços centrais sem oferecer alternativa habitacional digna.",
      source: "CHALHOUB, S. Cidade Febril: cortiços e epidemias na corte imperial e na república. São Paulo: Companhia das Letras, 1996."
    },
    prompt: "A interpretação historiográfica contemporânea sobre a Revolta da Vacina de 1904 destaca que a insurreição popular decorreu",
    options: [
      {
        id: "a",
        text: "do choque entre uma política sanitária autoritária que violava a intimidade dos lares e o ressentimento social acumulado pelas demolições do projeto higienista excludente do 'Bota-Abaixo'.",
        isCorrect: true,
        distractorRationale: "Correto: Sidney Chalhoub e Nicolau Sevcenko demonstram que a revolta foi a explosão da revolta acumulada: a polícia sanitária invadia os domicílios populares à força para vacinar corpos que haviam acabado de ser despejados dos cortiços pelo 'Bota-Abaixo' de Pereira Passos. O povo associou a agulha estatal à mesma violência que destruíra suas moradias para embelezar avenidas de padrão parisiense."
      },
      {
        id: "b",
        text: "de uma conspiração organizada exclusivamente por médicos monarquistas que pretendiam reinstaurar a dinastia de Bragança no trono imperial.",
        isCorrect: false,
        distractorRationale: "Embora houvesse oficiais descontentes que tentaram aproveitar a crise, o movimento foi uma insurreição popular espontânea e de massas nas ruas da capital."
      },
      {
        id: "c",
        text: "da recusa deliberada da classe média letrada em aceitar tratamentos profiláticos de origem europeia.",
        isCorrect: false,
        distractorRationale: "A revolta foi protagonizada pelas classes subalternas, trabalhadores urbanos e moradores empobrecidos das áreas centrais."
      },
      {
        id: "d",
        text: "de um motim militar liderado pela Armada brasileira exigindo a abolição imediata da pena de morte.",
        isCorrect: false,
        distractorRationale: "Esse foi o teor da Revolta da Chibata (1910), e não da Revolta da Vacina de 1904."
      },
      {
        id: "e",
        text: "de uma greve geral de operários fabris reivindicando a jornada de trabalho de 8 horas e férias remuneradas.",
        isCorrect: false,
        distractorRationale: "A greve geral por direitos trabalhistas de 8 horas ocorreu em 1917 em São Paulo e no Rio, não sendo o motor de 1904."
      }
    ],
    detailedExplanation: {
      summary: "A Revolta da Vacina foi muito mais que recusa à vacina: foi a reação da população pobre carioca contra o autoritarismo sanitário, a invasão das casas e as desocupações violentas do Bota-Abaixo.",
      stepByStep: [
        "1. Contexto urbano: Prefeito Pereira Passos demoliu cortiços (Bota-Abaixo) para abrir a Avenida Central, empurrando os pobres para os morros (favelização).",
        "2. Contexto sanitário: Oswaldo Cruz instituiu brigadas mata-mosquitos e vacinação obrigatória contra a varíola com poder de invasão domiciliar.",
        "3. O estopim: A obrigatoriedade foi vista como invasão da honra familiar e desrespeito ao corpo do trabalhador.",
        "4. Concluir: O motim articulou insatisfação habitacional, preconceito higienista e resistência popular à tutela autoritária do Estado."
      ],
      coreConcept: "Políticas de saúde pública que ignoram o diálogo social e violam direitos básicos das populações vulneráveis geram desconfiança e resistência civil.",
      trapWarning: "Cuidado: Nunca trate os revoltosos de 1904 como 'ignorantes e retrógrados'; o ENEM sempre valoriza a agência histórica e as razões sociais do protesto."
    },
    tags: ["revolta-da-vacina", "oswaldo-cruz", "pereira-passos", "higienismo", "saude-publica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-004",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "História do Brasil",
    subtopic: "A Guerra de Canudos: Messianismo e Exclusão Social no Sertão",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Canudos não se rendeu. Exemplo único em toda a história, resistiu até ao esgotamento completo. Vencido desde o primeiro dia de outubro, quando caiu o último reduto, aguentou-se ainda até ao dia 5. Ao amanhecer daquele dia, morreram os quatro últimos defensores: um velho, dois homens feitos e uma criança, na frente dos quais rugiam raivosamente cinco mil soldados.\nCanudos foi o arraial onde milhares de sertanejos despossuídos de terras encontraram, sob a liderança de Antônio Conselheiro, um espaço comunitário autônomo de sobrevivência e devoção, rompendo com a tutela secular dos coronéis do sertão baiano.",
      source: "CUNHA, E. Os Sertões: campanha de Canudos. Rio de Janeiro: Francisco Alves, 1902."
    },
    prompt: "A destruição violenta do arraial de Belo Monte (Canudos) pelo Exército republicano brasileiro em 1897 expressou o temor das elites agrárias de que o movimento comunitário",
    options: [
      {
        id: "a",
        text: "ameaçasse o controle político dos coronéis locais e desestruturasse o suprimento de mão de obra semiescravizada nas fazendas da região, servindo de mau exemplo de autonomia sertaneja.",
        isCorrect: true,
        distractorRationale: "Correto: Belo Monte reuniu mais de 25 mil pessoas que viviam de produção comunitária e trocas autônomas, recusando-se a trabalhar por diárias miseráveis para os coronéis latifundiários e a pagar impostos da nascente República. As oligarquias baianas acusaram os conselheiristas de 'monarquistas fanáticos armados' para mobilizar as forças federais do Exército e esmagar a comunidade alternativa."
      },
      {
        id: "b",
        text: "estabelecesse uma base naval militar financiada pelo Império Britânico para bloquear o porto de Salvador.",
        isCorrect: false,
        distractorRationale: "Canudos ficava no sertão árido e isolado da Bahia, sem contato com potências estrangeiras."
      },
      {
        id: "c",
        text: "promovesse a abolição da propriedade privada e instaurasse um regime soviético alinhado à Revolução Russa.",
        isCorrect: false,
        distractorRationale: "A Revolução Russa só ocorreu em 1917 (vinte anos depois) e Conselheiro era um líder religioso tradicional místico."
      },
      {
        id: "d",
        text: "exigisse o confisco de todas as armas de fogo em posse das Forças Armadas brasileiras.",
        isCorrect: false,
        distractorRationale: "Os sertanejos apenas se defendiam das expedições punitivas enviadas pelo governo para chaciná-los."
      },
      {
        id: "e",
        text: "fosse integrado pacificamente à Federação como um novo estado independente aprovado pelo Senado.",
        isCorrect: false,
        distractorRationale: "O governo republicano recusou qualquer diálogo e enviou quatro expedições militares consecutivas até arrasar o arraial."
      }
    ],
    detailedExplanation: {
      summary: "Canudos incomodava os coronéis porque tirava trabalhadores do latifúndio e criava uma sociedade comunitária autônoma fora do controle dos chefes políticos locais.",
      stepByStep: [
        "1. Analisar a formação de Canudos: Milhares de camponeses, ex-escravizados e mestiços deserdados foram para o arraial atraídos por Antônio Conselheiro.",
        "2. Identificar a ameaça social: A falta de braços para a colheita nas fazendas vizinhas e a perda de arrecadação de impostos enfureceram os coronéis.",
        "3. Analisar a justificativa ideológica: A imprensa carioca e as elites propagaram o mito de que Canudos era uma ameaça monarquista armada à República.",
        "4. Concluir: O arraial foi aniquilado para restabelecer a ordem coronelista e o monopólio da terra no semiárido."
      ],
      coreConcept: "Movimentos messiânicos no Brasil sertanejo eram respostas concretas de sobrevivência coletiva contra a miséria, o latifúndio e o desamparo estatal.",
      trapWarning: "No ENEM, valorize a leitura sociológica de Euclides da Cunha: Canudos era o Brasil profundo ('o sertanejo é, antes de tudo, um forte') massacrado pelo litoral letrado e autoritário."
    },
    tags: ["canudos", "antonio-conselheiro", "euclides-da-cunha", "messianismo", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-005",
    area: "humanas",
    competence: 2,
    skill: 10,
    topic: "História do Brasil",
    subtopic: "A Revolta da Chibata (1910) e a Cidadania Negra",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 22 de novembro de 1910, os marinheiros dos couraçados Minas Gerais e São Paulo, navios de guerra de última geração da Marinha do Brasil, rebelaram-se contra seus oficiais na Baía de Guanabara. Liderados pelo marinheiro negro João Cândido Felisberto — cognominado pela imprensa como o 'Almirante Negro' —, os marinheiros apontaram os canhões dos encouraçados para a capital federal e enviaram um manifesto ao presidente Hermes da Fonseca exigindo o fim imediato dos castigos corporais com chibata, o aumento dos soldos e a anistia para os revoltosos.",
      source: "MOREL, E. A Revolta da Chibata. Rio de Janeiro: Graal, 1979."
    },
    prompt: "A Revolta da Chibata explicita as contradições da cidadania na jovem República brasileira porque revelou",
    options: [
      {
        id: "a",
        text: "a persistência de práticas disciplinares herdeiras diretas da escravidão no interior das Forças Armadas oficiais, onde a marujada predominantemente negra continuava sendo submetida a castigos físicos degradantes por oficiais brancos de famílias aristocráticas.",
        isCorrect: true,
        distractorRationale: "Correto: Embora a Lei Áurea tivesse abolido a escravidão em 1888 e a República prometesse igualdade civil em 1889, a Marinha de Guerra mantinha o castigo corporal por chibatadas (chibata de couro) contra os marinheiros rasos (quase todos negros e mestiços pobres). A revolta liderada por João Cândido denunciou a permanência da violência escravocrata no aparelho estatal republicano modernizado."
      },
      {
        id: "b",
        text: "um plano monarquista secreto coordenado pela Princesa Isabel para retomar o comando das Forças Armadas a partir do porto carioca.",
        isCorrect: false,
        distractorRationale: "A revolta não era monarquista; era um protesto trabalhista e humanitário por dignidade corporal e contra a tortura oficial."
      },
      {
        id: "c",
        text: "a rejeição radical da tecnologia bélica moderna pelos marinheiros, que exigiam o retorno das caravelas a vela.",
        isCorrect: false,
        distractorRationale: "Os marinheiros operavam com maestria os couraçados do tipo Dreadnought, os mais sofisticados da época no mundo."
      },
      {
        id: "d",
        text: "o triunfo pleno de uma revolução comunista inspirada no motim do couraçado Potemkin na Rússia czarista.",
        isCorrect: false,
        distractorRationale: "Apesar de paralelos com o Potemkin (1905), o objetivo da marujada era a abolição da chibata e soldos dignos, sem projeto marxista-leninista."
      },
      {
        id: "e",
        text: "o apoio unânime do Congresso Nacional e dos generais à ascensão de João Cândido ao cargo de Ministro da Marinha.",
        isCorrect: false,
        distractorRationale: "Após prometer anistia para encerrar o motim, o governo traiu os marinheiros: muitos foram fuzilados, deportados para o seringal no Acre ou encarcerados na Ilha das Cobras (onde a maioria morreu por asfixia)."
      }
    ],
    detailedExplanation: {
      summary: "A Revolta da Chibata expôs que o racismo e as punições corporais da escravidão continuavam vigentes na Marinha republicana vinte e dois anos após a abolição legal de 1888.",
      stepByStep: [
        "1. Identificar o contingente da Armada: Oficiais brancos de famílias da elite oligárquica e marujos negros/mestiços recrutados forçosamente.",
        "2. Identificar o gatilho da revolta: O marinheiro Marcelino Rodrigues recebeu 250 chibatadas diante de toda a tripulação, provocando a insurreição.",
        "3. Avaliar a liderança de João Cândido: Conduziu os navios com precisão técnica exemplar, sem derramar sangue civil e negociando com altivez cidadã.",
        "4. Concluir: A revolta é marco fundamental da luta pela cidadania negra e pelo fim da violência estatal no Brasil pós-abolição."
      ],
      coreConcept: "A abolição formal de 1888 não extirpou as práticas institucionais de violência racial herdadas de três séculos de cativeiro.",
      trapWarning: "No ENEM, a figura de João Cândido é símbolo de dignidade e competência técnica negra contra a violência institucionalizada da República Oligárquica."
    },
    tags: ["revolta-da-chibata", "joao-candido", "cidadania-negra", "racismo-estrutural", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-006",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "História do Brasil",
    subtopic: "O Convênio de Taubaté (1906) e a Socialização das Perdas Cafeeiras",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1906, reunidos no município paulista de Taubaté, os governadores de São Paulo, Minas Gerais e Rio de Janeiro firmaram um acordo de intervenção estatal inédito na cafeicultura. Diante da superprodução crônica que ameaçava desvalorizar o preço da saca nos mercados internacionais, os estados comprometeram-se a contrair vultosos empréstimos externos em libras esterlinas para comprar o café excedente e retê-lo em armazéns estatais até que os preços internacionais se recuperassem.",
      source: "PRADO JÚNIOR, C. História Econômica do Brasil. São Paulo: Brasiliense, 2012."
    },
    prompt: "Sob a ótica da política econômica e da estrutura social da Primeira República, o Convênio de Taubaté exemplifica o fenômeno da",
    options: [
      {
        id: "a",
        text: "privatização dos lucros pela oligarquia cafeeira combinada com a socialização dos prejuízos para toda a sociedade brasileira por meio do endividamento público e da desvalorização cambial da moeda nacional.",
        isCorrect: true,
        distractorRationale: "Correto: Celso Furtado e Caio Prado Júnior apontam que o Convênio de Taubaté transferiu os riscos do agronegócio privado para o Estado: quando o café subia, o fazendeiro embolsava os lucros; quando superproduzia e despencava, o Estado tomava dívidas em moeda forte para comprar as sacas e desvalorizava o câmbio. Isso encarecia os alimentos importados consumidos pelos trabalhadores pobres para proteger a renda da elite oligárquica."
      },
      {
        id: "b",
        text: "coletivização socialista das fazendas de café com expropriação dos coronéis paulistas sem indenização financeira.",
        isCorrect: false,
        distractorRationale: "O convênio serviu exclusivamente para proteger e enriquecer os fazendeiros latifundiários privados."
      },
      {
        id: "c",
        text: "distribuição gratuita de estoques de grãos para alimentar as famílias vulneráveis flageladas pela seca no Nordeste.",
        isCorrect: false,
        distractorRationale: "O café era estocado e muitas vezes queimado para manter os preços altos nos portos da Europa e EUA, sem função social interna."
      },
      {
        id: "d",
        text: "adoção estrita do liberalismo clássico do tipo 'laissez-faire', proibindo qualquer auxílio governamental a setores privados da economia.",
        isCorrect: false,
        distractorRationale: "O convênio foi o oposto do laissez-faire: foi uma pesada intervenção estatal artificial a favor dos grandes produtores."
      },
      {
        id: "e",
        text: "substituição total da agricultura cafeeira pelo cultivo de soja transgênica para exportação.",
        isCorrect: false,
        distractorRationale: "Soja transgênica é um fenômeno do final do século XX, sem nexo com 1906."
      }
    ],
    detailedExplanation: {
      summary: "O Convênio de Taubaté manipulou os preços do café com dinheiro público: o Estado endividava o país para garantir o lucro dos cafeicultores mesmo em tempos de crise de superprodução.",
      stepByStep: [
        "1. O problema: Oferta excessiva de café derrubava os preços mundiais.",
        "2. A solução oligárquica: O Estado toma empréstimos internacionais para comprar o excesso e guardar nos armazéns.",
        "3. O custo para o povo: A dívida pública aumentava e a inflação/desvalorização cambial corroía o salário dos operários e trabalhadores rurais.",
        "4. Concluir: Representou a 'socialização das perdas' e 'privatização dos lucros' típica da Primeira República."
      ],
      coreConcept: "O Estado oligárquico brasileiro funcionava como comitê executivo a serviço das elites agrárias exportadoras.",
      trapWarning: "Atenção: A elite cafeeira defendia o livre mercado apenas no discurso; na prática, exigia intervenção estatal pesada sempre que seus lucros estavam ameaçados."
    },
    tags: ["convenio-de-taubate", "cafeicultura", "politica-economica", "primeira-republica", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-007",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "História do Brasil",
    subtopic: "A Guerra do Contestado (1912-1916): Terra, Ferrovias e Messianismo",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre 1912 e 1916, a região fronteiriça disputada entre Paraná e Santa Catarina vivenciou a Guerra do Contestado. O conflito eclodiu quando o governo federal concedeu uma vasta faixa de 15 quilômetros de cada lado da ferrovia São Paulo-Rio Grande à empresa norte-americana Brazil Railway Company, do magnata Percival Farquhar, juntamente com o monopólio da exploração madeireira pela Southern Brazil Lumber & Colonization Company. Milhares de camponeses posseiros e caboclos foram expulsos violentamente de suas terras ancestrais e das florestas de araucárias, agrupando-se em 'cidades santas' sob a liderança do monge José Maria para resistir à expropriação.",
      source: "MACHADO, P. P. Lideranças do Contestado. Campinas: Unicamp, 2004."
    },
    prompt: "Diferentemente de uma revolta puramente mística, a Guerra do Contestado teve como raiz material determinante",
    options: [
      {
        id: "a",
        text: "o desapossamento territorial violento de camponeses caboclos promovido pela aliança entre o Estado republicano e conglomerados capitalistas estrangeiros de ferrovias e exploração de madeira.",
        isCorrect: true,
        distractorRationale: "Correto: Embora articulada sob a mística milenarista do monge José Maria, a causa estrutural do Contestado foi a expulsão violenta de milhares de famílias posseiras tradicionais para dar lugar aos trilhos da ferrovia de Percival Farquhar e à serraria da Lumber Company. Os camponeses lutavam pelo direito à terra e à subsistência comunal frente ao avanço do capitalismo predatório internacional chancelado pela República."
      },
      {
        id: "b",
        text: "a invasão de tropas do exército paraguaio buscando reaver territórios perdidos na Guerra da Tríplice Aliança.",
        isCorrect: false,
        distractorRationale: "O Paraguai não esteve envolvido no Contestado; o conflito foi estritamente interno em território brasileiro."
      },
      {
        id: "c",
        text: "a recusa dos coronéis paulistas em pagar as taxas aduaneiras de importação de máquinas a vapor.",
        isCorrect: false,
        distractorRationale: "O conflito ocorreu no planalto meridional entre camponeses caboclos e as forças federais/conglomerados norte-americanos."
      },
      {
        id: "d",
        text: "uma rebelião de imigrantes alemães e italianos exigindo a independência política dos estados do Sul.",
        isCorrect: false,
        distractorRationale: "A população revoltosa era cabocla (mestiça de indígenas e colonizadores luso-brasileiros tradicionais), não colonos europeus recentes."
      },
      {
        id: "e",
        text: "uma greve de engenheiros civis exigindo aumento de salários na construção de usinas hidrelétricas.",
        isCorrect: false,
        distractorRationale: "Não havia construção de usinas hidrelétricas na região à época."
      }
    ],
    detailedExplanation: {
      summary: "A Guerra do Contestado foi deflagrada pela expulsão de camponeses tradicionais por empresas transnacionais protegidas pelo governo federal republicano.",
      stepByStep: [
        "1. Concessão estatal: Faixa de 30 km ao longo da ferrovia entregue à Brazil Railway e monopólio das araucárias à Lumber Company.",
        "2. A violência social: Posseiros que viviam há gerações nas terras foram expulsos como 'invasores' sem qualquer indenização.",
        "3. A organização cabocla: Organizaram-se em 'cidades santas' com apoio do monge José Maria para resistir à opressão.",
        "4. A repressão do Exército: Uso inédito da aviação militar no Brasil para bombardear acampamentos rebeldes e massacrar milhares de camponeses.",
        "5. Concluir: O messianismo foi a linguagem cultural de resistência contra a espoliação fundiária imperialista."
      ],
      coreConcept: "A modernização da Primeira República foi marcada por extrema violência contra as populações tradicionais e camponesas do interior.",
      trapWarning: "Não reduza Canudos ou Contestado a 'fanatismo religioso': o messianismo era o elo de solidariedade para resistir à perda da terra e da dignidade."
    },
    tags: ["contestado", "questão-agraria", "messianismo", "brazil-railway", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-008",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "História do Brasil",
    subtopic: "A Greve Geral de 1917 e o Anarcossindicalismo Operário",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em julho de 1917, a cidade de São Paulo foi completamente paralisada pela primeira Greve Geral de sua história, movimento que rapidamente se alastrou para o Rio de Janeiro e Porto Alegre. Operários têxteis, sapateiros, ferroviários e gráficos cruzaram os braços após o assassinato do jovem sapateiro anarquista José Martinez pela cavalaria policial. O Comitê de Defesa Proletária publicou um manifesto exigindo: jornada de trabalho de 8 horas, proibição do trabalho noturno para mulheres e de qualquer trabalho para menores de 14 anos, aumento de 35% nos salários e congelamento dos preços de gêneros de primeira necessidade.",
      source: "DECCA, E. S. 1917: O ano que não acabou. São Paulo: Brasiliense, 1987."
    },
    prompt: "O protagonismo do movimento operário na Greve Geral de 1917 caracterizou-se pela forte influência da corrente político-filosófica do",
    options: [
      {
        id: "a",
        text: "anarcossindicalismo, que defendia a ação direta dos trabalhadores por meio de sindicatos autônomos e da greve geral como instrumentos para derrubar o capitalismo, recusando a via eleitoral partidária.",
        isCorrect: true,
        distractorRationale: "Correto: A liderança do operariado na Primeira República era hegemonizada por anarquistas e anarcossindicalistas (em grande parte imigrantes italianos e espanhóis). Eles acreditavam na ação direta, na auto-organização operária sem patrões nem chefes e viam a greve revolucionária como método de transformação social, rejeitando a participação em partidos políticos burgueses ou no Estado."
      },
      {
        id: "b",
        text: "integralismo fascista de Plínio Salgado, com camisas-verdes defendendo o corporativismo católico.",
        isCorrect: false,
        distractorRationale: "A Ação Integralista Brasileira só foi fundada em 1932, na década de 1930."
      },
      {
        id: "c",
        text: "trabalhismo varguista tutelado pelo Ministério do Trabalho e subordinado ao Estado Novo.",
        isCorrect: false,
        distractorRationale: "A legislação trabalhista varguista e o Ministério do Trabalho só surgiram após 1930; em 1917 a 'questão operária era tratada como caso de polícia'."
      },
      {
        id: "d",
        text: "positivismo comtista professado pelos oficiais militares da Escola Militar da Praia Vermelha.",
        isCorrect: false,
        distractorRationale: "O positivismo inspirou oficiais republicanos, e não o movimento operário fabril anarquista."
      },
      {
        id: "e",
        text: "liberalismo fisiocrata em defesa da desregulamentação absoluta das fábricas de tecido.",
        isCorrect: false,
        distractorRationale: "O liberalismo irrestrito era a ideologia dos donos de fábrica para superexplorar os operários."
      }
    ],
    detailedExplanation: {
      summary: "A Greve Geral de 1917 foi liderada por anarcossindicalistas que organizaram a luta fabril por meio da ação direta grevista, exigindo direitos humanos e trabalhistas fundamentais.",
      stepByStep: [
        "1. Condições de trabalho: Jornadas de 14 a 16 horas diárias, trabalho infantil desenfreado, acidentes mutilantes sem indenização e inflação galopante.",
        "2. Ideologia predominante: O anarcossindicalismo (ação direta, sindicatos autônomos, recusa de partidos).",
        "3. A resposta do Estado oligárquico: Repressão feroz da polícia de Washington Luís ('a questão social é um caso de polícia') e expulsão de líderes estrangeiros com base na Lei Adolfo Gordo.",
        "4. Concluir: Foi a fundação da luta operária moderna no Brasil urbano."
      ],
      coreConcept: "Antes de Vargas estatizar e tutelar os sindicatos em 1930, o movimento operário brasileiro era autônomo, combativo e predominantemente anarquista.",
      trapWarning: "No ENEM, não confunda a liderança anarquista das greves de 1917 com a criação do Partido Comunista (PCB), que só ocorreu em 1922."
    },
    tags: ["greve-geral-1917", "anarcossindicalismo", "movimento-operario", "sao-paulo", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-009",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "História do Brasil",
    subtopic: "O Tenentismo e a Crise de Hegemonia nos Anos 1920",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A década de 1920 foi sacudida pelo movimento tenentista — revoltas protagonizadas por jovens oficiais de média e baixa patente do Exército (tenentes e capitães) insatisfeitos com a corrupção eleitoral e a hegemonia das oligarquias cafeeiras. Manifestando-se nos '18 do Forte de Copacabana' (1922), na Revolução Paulista de 1924 e na lendária Coluna Prestes (1925-1927), os tenentes proclamavam-se os 'salvadores da pátria' encarregados de moralizar as instituições republicanas.",
      source: "CARVALHO, J. M. Forças Armadas e Política no Brasil. Rio de Janeiro: Jorge Zahar, 2005."
    },
    prompt: "O ideário político dos jovens militares do Tenentismo reivindicava prioritariamente",
    options: [
      {
        id: "a",
        text: "o voto secreto, a criação de uma Justiça Eleitoral independente para moralizar os pleitos, o fortalecimento do poder central e a expansão do ensino público primário gratuito.",
        isCorrect: true,
        distractorRationale: "Correto: O programa do Tenentismo era de natureza cívico-moralizadora liberal e centralizadora: fim da corrupção oligárquica, voto secreto para acabar com o cabresto dos coronéis, justiça eleitoral autônoma, educação pública para o povo e um governo central forte. Embora não tivessem um projeto socialista de massas, abalaram os alicerces da República Velha."
      },
      {
        id: "b",
        text: "a dissolução imediata do Exército nacional e a entrega da soberania às milícias particulares dos coronéis do interior.",
        isCorrect: false,
        distractorRationale: "Os tenentes queriam justamente o oposto: subordinar os coronéis ao poder disciplinado e central do Exército nacional."
      },
      {
        id: "c",
        text: "a restauração do regime monárquico hereditário e a coroação de D. Pedro III.",
        isCorrect: false,
        distractorRationale: "Os tenentes eram convictamente republicanos e não desejavam o retorno da monarquia."
      },
      {
        id: "d",
        text: "a adesão formal do Brasil ao bloco soviético e a abolição universal de qualquer forma de comércio privado.",
        isCorrect: false,
        distractorRationale: "O tenentismo nos anos 1920 era nacionalista e reformista burguês, embora Luís Carlos Prestes tenha aderido ao comunismo anos mais tarde (apenas na década de 1930)."
      },
      {
        id: "e",
        text: "a proibição de que cidadãos alfabetizados exercessem o direito ao sufrágio eleitoral.",
        isCorrect: false,
        distractorRationale: "Eles defendiam o voto secreto para os alfabetizados e a expansão da instrução pública."
      }
    ],
    detailedExplanation: {
      summary: "O Tenentismo expressava a revolta da classe média urbana e de jovens oficiais militares contra a farsa eleitoral e o domínio corrupto dos barões do café.",
      stepByStep: [
        "1. Quem eram: Jovens tenentes e capitães formados na Academia Militar.",
        "2. Reivindicações: Voto secreto, reforma educacional, moralização política e combate ao coronelismo.",
        "3. Ações históricas: 18 do Forte (1922), Revolução de 1924 em SP e Coluna Prestes (marcha de 25 mil km pelo interior).",
        "4. Concluir: Foram os coveiros da República Velha, abrindo caminho para a Revolução de 1930 que levou Vargas ao poder."
      ],
      coreConcept: "O Tenentismo não propunha revolução proletária, mas uma modernização institucional com voto secreto e poder centralizado.",
      trapWarning: "Cuidado: Não confunda o Tenentismo da década de 1920 (reformista e nacionalista) com o comunismo da Intentona de 1935."
    },
    tags: ["tenentismo", "coluna-prestes", "voto-secreto", "republica-velha", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-010",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "História do Brasil",
    subtopic: "A Ruptura de 1930: Café com Leite e Aliança Liberal",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A tradicional 'política do café com leite' baseava-se no revezamento tácito entre as oligarquias de São Paulo (PRP) e Minas Gerais (PRM) na presidência da República. Contudo, nas eleições de 1930, o presidente paulista Washington Luís quebrou o acordo ao indicar outro paulista, Júlio Prestes, para sucedê-lo, temendo que um mineiro não protegesse o café durante o colapso deflagrado pela Crise de 1929. Em resposta, a oligarquia de Minas Gerais rompeu a aliança e uniu-se ao Rio Grande do Sul e à Paraíba, formando a Aliança Liberal e lançando Getúlio Vargas como candidato opositor.",
      source: "SKIDMORE, T. Brasil: de Getúlio Vargas a Castelo Branco (1930-1964). Rio de Janeiro: Paz e Terra, 2007."
    },
    prompt: "O rompimento oligárquico de 1930 e a subsequente ascensão armada de Getúlio Vargas ao poder decorreram diretamente de",
    options: [
      {
        id: "a",
        text: "uma fratura intraoligárquica deflagrada pelo personalismo paulista no contexto de devastação econômica global de 1929, articulando dissidências estaduais, tenentes e anseios das classes médias urbanas.",
        isCorrect: true,
        distractorRationale: "Correto: A Revolução de 1930 foi o resultado da quebra do pacto entre as próprias elites (Minas aliou-se ao RS e PB para derrotar SP), potencializada pela Grande Depressão de 1929 (que arruinou os cafeicultores) e pelo apoio dos oficiais tenentistas e da classe média urbana, que não toleravam mais as fraudes da República Velha."
      },
      {
        id: "b",
        text: "uma insurreição camponesa geral que confiscou os cafezais de todo o estado de São Paulo.",
        isCorrect: false,
        distractorRationale: "Não houve revolta camponesa confiscando fazendas paulistas em 1930."
      },
      {
        id: "c",
        text: "uma ordem expedida pela Liga das Nações exigindo a renúncia imediata de Washington Luís.",
        isCorrect: false,
        distractorRationale: "A Liga das Nações não intervinha nos regimes internos de governos soberanos sul-americanos."
      },
      {
        id: "d",
        text: "um plebiscito popular que aprovou por 99% dos votos o fim do presidencialismo e a volta de D. Pedro II.",
        isCorrect: false,
        distractorRationale: "Não houve plebiscito e D. Pedro II havia falecido no exílio em 1891."
      },
      {
        id: "e",
        text: "uma invasão territorial perpetrada pela marinha da Argentina no estuário do Rio da Prata.",
        isCorrect: false,
        distractorRationale: "Não houve conflito armado internacional com a Argentina."
      }
    ],
    detailedExplanation: {
      summary: "A Revolução de 1930 sepultou a República Oligárquica quando São Paulo quebrou o pacto do café com leite no auge da Crise de 1929, unindo as oligarquias dissidentes e os tenentes contra o poder paulista.",
      stepByStep: [
        "1. Quebra do pacto: Washington Luís (SP) indicou Júlio Prestes (SP) em vez de um mineiro.",
        "2. Formação da Aliança Liberal: Minas Gerais + Rio Grande do Sul + Paraíba apoiam Getúlio Vargas.",
        "3. Impacto da Quebra de 1929: O café quebrou no mercado externo, fragilizando a hegemonia econômica paulista.",
        "4. O estopim: A derrota eleitoral fraudulenta de Vargas e o assassinato de João Pessoa (vice de Vargas) deflagram a revolta armada de outubro de 1930.",
        "5. Concluir: Vargas assume como chefe do Governo Provisório, inaugurando a Era Vargas e sepultando a República Velha."
      ],
      coreConcept: "A Revolução de 1930 reorganizou o Estado brasileiro, deslocando o eixo de poder da oligarquia agrária para um modelo centralizado, urbano e industrializante.",
      trapWarning: "No ENEM, entenda 1930 como marco divisor de águas: fecha o ciclo do coronelismo clássico cafeeiro e abre a modernização trabalhista e burocrática de Vargas."
    },
    tags: ["revolucao-de-1930", "alianca-liberal", "cafe-com-leite", "getulio-vargas", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-011",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "História do Brasil",
    subtopic: "O Cangaço e o Conceito de Banditismo Social de Eric Hobsbawm",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No sertão nordestino da Primeira República, bandos armados de cangaceiros — com destaque para figuras como Antônio Silvino, Sinhô Pereira e, mais tarde, Virgulino Ferreira da Silva (o Lampião) — percorriam os sertões atacando cidades, cobrando tributos e desafiando a polícia estadual (as volantes). O historiador britânico Eric Hobsbawm classificou esse fenômeno como 'banditismo social': uma forma arcaica e pré-política de protesto camponês que surge em sociedades rurais agrárias marcadas pela ausência de justiça formal, pela extrema concentração de terras e pela opressão coronelista.",
      source: "HOBSBAWM, E. Rebeldes Primitivos: estudos sobre formas arcaicas de movimentos sociais. Rio de Janeiro: Zahar, 1970."
    },
    prompt: "De acordo com o conceito sociológico de 'banditismo social', o cangaço no nordeste brasileiro durante a República Oligárquica expressava",
    options: [
      {
        id: "a",
        text: "uma resposta armada individual ou de pequenos bandos nascida da revolta camponesa contra as violências da ordem latifundiária, que, apesar de desprovida de um projeto político revolucionário de poder, gozava de cumplicidade popular e aura de heroísmo mítico entre os sertanejos desamparados.",
        isCorrect: true,
        distractorRationale: "Correto: Hobsbawm define os bandidos sociais como homens que a lei oficial trata como criminosos, mas que a comunidade camponesa enxerga como vingadores ou heróis que desafiam os poderosos. O cangaceiro não tinha projeto de tomar o governo ou fazer reforma agrária (inclusive prestava serviços ocasionais a coronéis rivais), mas sua existência só era possível no vácuo de cidadania e na violência do latifúndio sertanejo."
      },
      {
        id: "b",
        text: "um partido político legalmente constituído que concorria às eleições legislativas da Bahia e de Pernambuco.",
        isCorrect: false,
        distractorRationale: "Os cangaceiros eram foras-da-lei nômades e perseguidos, sem relação com partidos eleitorais."
      },
      {
        id: "c",
        text: "uma guarda pretoriana contratada pelo Ministério da Guerra para proteger os interesses da Marinha britânica.",
        isCorrect: false,
        distractorRationale: "Não havia relação alguma entre cangaço e marinha estrangeira."
      },
      {
        id: "d",
        text: "uma milícia operária formada por metalúrgicos demitidos das montadoras de automóveis do ABC paulista.",
        isCorrect: false,
        distractorRationale: "O ABC fabril é um fenômeno de meados do século XX em São Paulo, completamente distante da realidade rural sertaneja da época."
      },
      {
        id: "e",
        text: "uma ordem monástica pacífica que pregava a entrega de todas as armas de fogo ao governo federal.",
        isCorrect: false,
        distractorRationale: "O cangaço era marcado por tiroteios violentos, facadas, degolas e emboscadas com cartucheiras e fuzis Winchester."
      }
    ],
    detailedExplanation: {
      summary: "O banditismo social do cangaço é uma rebeldia primitiva: surge da revolta contra as injustiças do sertão, sem um programa de mudança estrutural, mas protegido pela simpatia dos oprimidos.",
      stepByStep: [
        "1. Origem social: Sertão sem lei e sem assistência estatal, sob mando violento dos coronéis e da polícia venal.",
        "2. Ação do cangaceiro: Enfrentar as volantes, atacar fazendeiros avaros e distribuir parte dos saques entre os pobres.",
        "3. Contradição interna: Muitas vezes os cangaceiros faziam acordos e alianças de conveniência com coronéis poderosos ('coiteiros').",
        "4. Concluir: Hobsbawm explica que é uma revolta pré-política em sociedades camponesas pré-industriais."
      ],
      coreConcept: "O cangaço não era mero banditismo comum; era o sintoma visceral de um sertão abandonado pela República dos barões do café.",
      trapWarning: "Cuidado: Não idealize o cangaceiro como herói puro nem como mero assassino vulgar: o ENEM valoriza a complexidade da figura social de Lampião e Corisco."
    },
    tags: ["cangaco", "lampiao", "banditismo-social", "hobsbawm", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-012",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "História do Brasil",
    subtopic: "A Constituição Republicana de 1891: Federalismo e Exclusão do Voto",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A primeira Constituição da República brasileira, promulgada em 1891 sob forte inspiração do modelo norte-americano, consagrou a forma federativa de governo, a separação dos Três Poderes e a laicidade do Estado (separação formal entre Igreja e Estado). No tocante aos direitos políticos, extinguiu o voto censitário por renda do Império, instituindo o sufrágio para cidadãos do sexo masculino maiores de 21 anos. Todavia, proibiu expressamente o voto de mendigos, praças de pré (soldados rasos) e, fundamentalmente, de todos os ANALFABETOS.",
      source: "BONAVIDES, P. História Constitucional do Brasil. Brasília: OAB Editora, 2010."
    },
    prompt: "Ao vetar o direito de voto aos analfabetos em um país onde cerca de 80% da população adulta não sabia ler e escrever, a Constituição de 1891",
    options: [
      {
        id: "a",
        text: "manteve a imensa maioria dos trabalhadores rurais, ex-escravizados e mulheres à margem da cidadania política formal, preservando a exclusão oligárquica sob a fachada de uma república representativa.",
        isCorrect: true,
        distractorRationale: "Correto: A exclusão dos analfabetos (associada à exclusão de mulheres, mendigos e soldados) funcionou como um filtro aristocrático brutal. Em 1891, mais de 80% dos brasileiros eram analfabetos devido à ausência secular de escolas públicas. Portanto, a elite cafeeira garantiu que apenas uma minúscula fração letrada (menos de 3% a 5% da população) participasse dos pleitos eleitorais."
      },
      {
        id: "b",
        text: "garantiu a emancipação política imediata de todas as mulheres e indígenas da Amazônia.",
        isCorrect: false,
        distractorRationale: "As mulheres continuaram proibidas de votar até o Código Eleitoral de 1932."
      },
      {
        id: "c",
        text: "obrigou todas as famílias camponesas a matricularem seus filhos em universidades federais sob pena de prisão.",
        isCorrect: false,
        distractorRationale: "O governo federal não criou sequer escolas primárias públicas universais no campo."
      },
      {
        id: "d",
        text: "eliminou qualquer tipo de fraude na apuração das cédulas manuscritas eleitorais.",
        isCorrect: false,
        distractorRationale: "O voto aberto de cabresto estimulava a fraude generalizada ('degolas', títulos fantasmas de mortos, etc.)."
      },
      {
        id: "e",
        text: "restabeleceu a união indissolúvel entre a fé católica e os tribunais judiciais da corte.",
        isCorrect: false,
        distractorRationale: "A Constituição de 1891 instituiu o Estado Laico e o casamento civil obrigatório, separando Igreja e Estado."
      }
    ],
    detailedExplanation: {
      summary: "A proibição do voto dos analfabetos substituiu o critério de renda do Império por um critério educacional excludente, deixando mais de 80% do povo brasileiro sem direito de votar.",
      stepByStep: [
        "1. Império (1824): Voto censitário baseado em renda mínima de 100 mil réis.",
        "2. República (1891): Extinguiu a renda, mas vetou analfabetos, mulheres, soldados e mendigos.",
        "3. Realidade social: Mais de 80% da população brasileira era analfabeta após séculos de escravidão.",
        "4. Concluir: A cidadania republicana permaneceu restrita a uma diminuta elite de homens proprietários e letrados."
      ],
      coreConcept: "A exclusão do analfabeto na Constituição de 1891 foi uma estratégia institucional para perpetuar a dominação oligárquica sem parecer censitária.",
      trapWarning: "Lembre-se: Os analfabetos só reconquistaram o direito pleno de votar na Constituição Cidadã de 1988!"
    },
    tags: ["constituicao-1891", "cidadania", "analfabetismo", "voto-excludente", "republica-velha"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-013",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "História do Brasil",
    subtopic: "O Encilhamento de Rui Barbosa e a Crise Financeira da República da Espada",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Logo após a Proclamação da República, o ministro da Fazenda Rui Barbosa implementou uma audaciosa reforma bancária e monetária (1890-1891). Com o objetivo de incentivar a industrialização nascente e substituir a mão de obra escrava pelo trabalho assalariado sem estrangulamento de liquidez, autorizou bancos privados provinciais a emitir papel-moeda com lastro em títulos da dívida pública, dispensando o lastro em ouro. A medida provocou uma onda desenfreada de especulação na Bolsa de Valores do Rio de Janeiro, com a criação de centenas de empresas fantasmas, hiperinflação descontrolada e falência em massa, episódio que entrou para a história como a crise do 'Encilhamento'.",
      source: "FRANCO, G. H. B. O Encilhamento: anatomia de uma bolha financeira. Rio de Janeiro: Paz e Terra, 1983."
    },
    prompt: "A política do Encilhamento implementada por Rui Barbosa produziu como desfecho estrutural",
    options: [
      {
        id: "a",
        text: "uma bolha especulativa marcada por desvalorização cambial aguda, explosão inflacionária e crise de credibilidade da nova moeda republicana, forçando os governos posteriores a adotarem planos austeros de contenção fiscal.",
        isCorrect: true,
        distractorRationale: "Correto: A emissão descontrolada de moeda sem lastro em ouro gerou especulação febril no mercado de capitais (empresas de fachada abriam capital sem produzir nada). O resultado foi hiperinflação, fuga de capitais, desvalorização da moeda e falências bancárias em série, obrigando governos posteriores (como Prudente de Morais e Campos Sales) a pactuarem o Funding Loan de 1898 com banqueiros britânicos sob severa austeridade."
      },
      {
        id: "b",
        text: "o enriquecimento imediato de todos os ex-cativos e a erradicação da pobreza nas favelas cariocas.",
        isCorrect: false,
        distractorRationale: "A inflação do Encilhamento corroeu drasticamente o poder de compra dos trabalhadores mais pobres."
      },
      {
        id: "c",
        text: "a total estatização de todos os bancos privados com proibição de cobrança de juros no território nacional.",
        isCorrect: false,
        distractorRationale: "A reforma de Rui Barbosa estimulou a banca privada a emitir papel-moeda desenfreadamente."
      },
      {
        id: "d",
        text: "a imediata consolidação de um império industrial capaz de superar a Inglaterra na produção de aço.",
        isCorrect: false,
        distractorRationale: "O parque industrial nascente sofreu com a quebradeira geral e a falta de capital real após o estouro da bolha."
      },
      {
        id: "e",
        text: "a extinção de qualquer dívida externa do Brasil perante a casa bancária Rothschild de Londres.",
        isCorrect: false,
        distractorRationale: "A dívida externa aumentou exponencialmente, exigindo a renegociação humilhante do Funding Loan em 1898."
      }
    ],
    detailedExplanation: {
      summary: "O Encilhamento foi a primeira grande bolha financeira e especulativa da República: emissão farta de moeda gerou euforia na Bolsa, empresas fantasmas e hiperinflação desastrosa.",
      stepByStep: [
        "1. Intenção de Rui Barbosa: Monetizar a economia de trabalho livre assalariado e estimular indústrias.",
        "2. O erro técnico: Autorizar emissão desregrada de papel-moeda por múltiplos bancos sem lastro metálico.",
        "3. A euforia especulativa: Lançamento de ações de empresas de mentira na Bolsa de Valores.",
        "4. O estouro da bolha: Hiperinflação, desvalorização da moeda e colapso de crédito.",
        "5. Concluir: Marcou a turbulência econômica da República da Espada."
      ],
      coreConcept: "Políticas monetárias expansionistas sem controle regulatório e sem lastro produtivo geram bolhas especulativas e inflação que sacrificam as classes trabalhadoras.",
      trapWarning: "Lembre-se do termo: 'Encilhamento' era uma metáfora hípica das apostas no jóquei clube aplicada à febre de especulação na Bolsa de Valores."
    },
    tags: ["encilhamento", "rui-barbosa", "republica-da-espada", "historia-economica", "inflacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-014",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "História do Brasil",
    subtopic: "A Belle Époque Carioca e a Segregação Socioespacial",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A reforma urbana empreendida pelo prefeito Pereira Passos (1902-1906) no Rio de Janeiro pretendeu transformar a antiga corte lusitana e imperial em uma 'Paris dos trópicos'. Largas avenidas foram abertas, bulevares arborizados foram construídos e teatros monumentais de inspiração neoclássica foram erguidos. Para tanto, mais de 600 casarões coloniais e cortiços populares do centro foram demolidos a picaretas pela política do 'Bota-Abaixo'. A legislação municipal baniu vendedores ambulantes, mendigos, cães soltos e até o hábito popular de andar descalço pelas novas calçadas de mosaico.",
      source: "SEVCENKO, N. A Revolta da Vacina: mentes insanas em corpos rebeldes. São Paulo: Scipione, 1993."
    },
    prompt: "O processo de remodelação urbanística da capital federal na Belle Époque expressou um projeto ideológico de classe que resultou em",
    options: [
      {
        id: "a",
        text: "segregação socioespacial acelerada, empurrando a população trabalhadora e negra para os morros periféricos (início da favelização maciça) e para os subúrbios ferroviários desprovidos de saneamento.",
        isCorrect: true,
        distractorRationale: "Correto: A reforma de Pereira Passos modernizou a cidade para as elites e para o capital estrangeiro, mas expulsou os pobres do centro histórico onde trabalhavam. Sem alternativas habitacionais acessíveis, os desalojados subiram os morros (como o Morro da Providência) ou deslocaram-se para os subúrbios da Estrada de Ferro Central do Brasil, aprofundando o abismo da desigualdade urbana carioca."
      },
      {
        id: "b",
        text: "distribuição equitativa de habitações sociais de alto padrão em todas as novas avenidas da cidade.",
        isCorrect: false,
        distractorRationale: "Não houve construção de habitações sociais para os desalojados dos cortiços."
      },
      {
        id: "c",
        text: "preservação arqueológica e proteção integral do patrimônio colonial dos escravizados africanos.",
        isCorrect: false,
        distractorRationale: "O projeto demoliu violentamente o patrimônio arquitetônico popular e colonial para imitar a estética francesa."
      },
      {
        id: "d",
        text: "estatização das indústrias e entrega do controle dos bondes aos sindicatos de carroceiros.",
        isCorrect: false,
        distractorRationale: "As concessões de transporte (Light) e serviços foram entregues a multinacionais anglo-canadenses."
      },
      {
        id: "e",
        text: "eliminação de qualquer cobrança de tarifas no transporte público da capital.",
        isCorrect: false,
        distractorRationale: "Os transportes eram pagos e as passagens eram caras para o operariado da época."
      }
    ],
    detailedExplanation: {
      summary: "A 'Paris dos Trópicos' foi construída às custas da destruição dos lares dos pobres: o Bota-Abaixo expulsou as classes populares do centro e inaugurou a favelização do Rio de Janeiro.",
      stepByStep: [
        "1. O ideal estético: Copiar a reforma de Haussmann em Paris (boulevards, vitrines, cafés, civilidade cosmopolita).",
        "2. O método violento: O Bota-Abaixo derrubou cortiços centrais sem aviso nem compensação aos inquilinos.",
        "3. A consequência sociológica: Deslocamento forçado para morros e subúrbios distantes.",
        "4. Concluir: Modernização elitista e excludente que gerou o formato segregado da metrópole brasileira moderna."
      ],
      coreConcept: "O urbanismo higienista da Primeira República utilizou a estética e a medicina como justificativas para a limpeza social e a expulsão dos pobres.",
      trapWarning: "No ENEM, conecte a história da Belle Époque com a geografia urbana contemporânea: a gênese das favelas cariocas remonta ao Bota-Abaixo de 1904."
    },
    tags: ["belle-epoque", "pereira-passos", "bota-abaixo", "favelizacao", "segregacao-urbana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-015",
    area: "humanas",
    competence: 2,
    skill: 9,
    topic: "História do Brasil",
    subtopic: "O Movimento Modernista de 1922 e a Ruptura Estética com o Passadismo",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Realizada no Theatro Municipal de São Paulo em fevereiro de 1922, a Semana de Arte Moderna reuniu escritores, poetas, músicos e pintores — como Mário de Andrade, Oswald de Andrade, Anita Malfatti, Menotti Del Picchia e Heitor Villa-Lobos. O evento rompeu escandalosamente com o parnasianismo engomado, a cópia servil dos moldes acadêmicos europeus e a linguagem arcaica da elite oligárquica, pregando a liberdade formal do verso livre, o humor desrespeitoso, a fala coloquial brasileira e a busca de uma identidade cultural antropofágica autêntica.",
      source: "AMARAL, A. Artes Plásticas na Semana de 22. São Paulo: Editora 34, 1998."
    },
    prompt: "No contexto sociopolítico do ano de 1922, a Semana de Arte Moderna articulou-se ao cenário mais amplo de crise da República Oligárquica porque",
    options: [
      {
        id: "a",
        text: "traduziu na esfera cultural e estética o mesmo anseio de ruptura contra as estruturas arcaicas da tradição dominante que também se manifestava politicamente na revolta tenentista e na fundação do Partido Comunista no mesmo ano.",
        isCorrect: true,
        distractorRationale: "Correto: O ano de 1922 foi o epicentro da contestação à velha ordem oligárquica: no campo artístico, a Semana de 22 implodiu o academicismo parnasiano da elite; no campo militar, os 18 do Forte deflagraram o Tenentismo; no campo operário, foi fundado o Partido Comunista Brasileiro (PCB). As três frentes convergiram na crítica ao Brasil arcaico do café com leite."
      },
      {
        id: "b",
        text: "defendeu a submissão incondicional dos artistas brasileiros às normas gramaticais de Portugal e ao academicismo parnasiano.",
        isCorrect: false,
        distractorRationale: "O Modernismo lutou exatamente contra a gramática lusitana e contra a frieza parnasiana."
      },
      {
        id: "c",
        text: "teve como principal objetivo apoiar a reeleição de cafeicultores paulistas com marchinhas de carnaval encomendadas.",
        isCorrect: false,
        distractorRationale: "Apesar de financiada por mecenas paulistas, a revolução estética dos jovens modernistas escandalizou e satirizou o gosto passadista dos barões do café."
      },
      {
        id: "d",
        text: "pregou o fechamento de todas as galerias de arte e a queima de partituras musicais em praça pública.",
        isCorrect: false,
        distractorRationale: "Eles queriam renovar a arte e valorizar a música nacional de Villa-Lobos, não destruí-las."
      },
      {
        id: "e",
        text: "proibiu a representação de elementos da cultura indígena e afro-brasileira nas telas de pintura.",
        isCorrect: false,
        distractorRationale: "O modernismo valorizou o folclore, as lendas indígenas (Macunaíma) e os ritmos sincopados afro-brasileiros."
      }
    ],
    detailedExplanation: {
      summary: "1922 é o ano do centenário da Independência e o ano de implosão da ordem oligárquica: a Semana de Arte Moderna desmonta o conformismo cultural assim como o Tenentismo desmonta a política tradicional.",
      stepByStep: [
        "1. Conexão histórica: Em 1922 comemorava-se o Centenário da Independência de 1822.",
        "2. O diagnóstico modernista: O Brasil político era independente, mas a cultura continuava colonizada e subserviente à Europa.",
        "3. A tríade de 1922: Semana de Arte Moderna (revolução estética) + Fundação do PCB (revolução proletária) + 18 do Forte (revolução tenentista militar).",
        "4. Concluir: O modernismo é a expressão cultural da crise terminal da República Velha."
      ],
      coreConcept: "A vanguarda artística de 1922 abriu as portas para uma redefinição crítica e plural da identidade nacional brasileira.",
      trapWarning: "Lembre-se: O ENEM frequentemente cobra a confluência de 1922: Arte Moderna + Fundação do PCB + Início do Tenentismo."
    },
    tags: ["semana-de-arte-moderna", "modernismo-1922", "mario-de-andrade", "oswald-de-andrade", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-016",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "História do Brasil",
    subtopic: "A Revolta da Armada e a Resistência Federalista no Sul (1893-1895)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a presidência do marechal Floriano Peixoto (o 'Marechal de Ferro'), a nascente República enfrentou duas graves rebeliões armadas simultâneas (1893-1895): a Segunda Revolta da Armada, liderada pelo almirante Custódio de Melo, que rebelou esquadras da Marinha na Baía de Guanabara exigindo eleições imediatas; e a sangrenta Revolução Federalista no Rio Grande do Sul, conflito que opôs os partidários de Júlio de Castilhos (castilhistas/pica-paus, republicanos autoritários aliados de Floriano) aos federalistas liderados por Gaspar Silveira Martins (maragatos, defensores do parlamentarismo e descentralização provincial). A guerra no Sul ficou marcada pela prática aterradora da degola de milhares de prisioneiros em ambos os lados.",
      source: "FLORES, M. Guerras e Revoltas no Sul do Brasil. Porto Alegre: EDIPUCRS, 2002."
    },
    prompt: "A violenta contenção da Revolução Federalista e da Revolta da Armada por Floriano Peixoto consolidou a vitória do modelo de",
    options: [
      {
        id: "a",
        text: "república centralizada, forte e militarizada apoiada pela mocidade jacobina urbana e pela oligarquia cafeeira paulista, esmagando tanto o parlamentarismo federalista sulista quanto a aristocracia naval monarquizante.",
        isCorrect: true,
        distractorRationale: "Correto: Floriano Peixoto apoiou-se no jacobinismo militar urbano e fez uma aliança tática decisiva com os cafeicultores paulistas do Partido Republicano Paulista (PRP) para esmagar tanto a Marinha aristocrática quanto os liberais federalistas do Sul, garantindo a consolidação definitiva do regime republicano contra ameaças de restauração ou fragmentação territorial."
      },
      {
        id: "b",
        text: "anarquia comunal com separação permanente dos estados do Paraná, Santa Catarina e Rio Grande do Sul do restante do Brasil.",
        isCorrect: false,
        distractorRationale: "O Sul não se separou do Brasil; as tropas de Floriano esmagaram os federalistas e mantiveram a unidade territorial nacional."
      },
      {
        id: "c",
        text: "monarquia absolutista com retorno do imperador D. Pedro II ao comando da esquadra de guerra.",
        isCorrect: false,
        distractorRationale: "Floriano Peixoto era republicano radical intransigente ('o Consolidador da República')."
      },
      {
        id: "d",
        text: "teocracia evangélica que baniu qualquer atividade de comércio portuário no Atlântico Sul.",
        isCorrect: false,
        distractorRationale: "O governo florianista era laico e positivista em sua formulação ideológica."
      },
      {
        id: "e",
        text: "entendimento pacífico desprovido de baixas ou fuzilamentos em tribunais militares.",
        isCorrect: false,
        distractorRationale: "A repressão foi sangrenta e impiedosa, rendendo a Floriano a alcunha de 'Marechal de Ferro'."
      }
    ],
    detailedExplanation: {
      summary: "Floriano Peixoto usou mão de ferro para impedir a queda da jovem República, aliando-se aos cafeicultores paulistas para aniquilar as rebeliões navais e federalistas no Sul.",
      stepByStep: [
        "1. Crise da posse: Floriano assumiu com a renúncia de Deodoro da Fonseca, mas não convocou eleições em 1891 como previa a Constituição transitória.",
        "2. Dupla ameaça armada: Revolta da Armada no Rio (Custódio de Melo) e Revolução Federalista no RS (maragatos vs. pica-paus).",
        "3. A aliança de poder: Floriano mobilizou batalhões patrióticos, comprou nova flotilha nos EUA e aliou-se ao PRP paulista.",
        "4. Concluir: A vitória de Floriano consolidou a República e abriu caminho para a entrega pacífica do poder aos civis em 1894 (Prudente de Morais)."
      ],
      coreConcept: "A República da Espada (Deodoro e Floriano) foi o período militar violento indispensável para estabilizar o regime antes da entrega do poder aos barões do café.",
      trapWarning: "Atenção: A cidade de Desterro (SC) foi rebatizada de 'Florianópolis' precisamente para celebrar a vitória sangrenta de Floriano Peixoto sobre os revoltosos federalistas."
    },
    tags: ["floriano-peixoto", "revolucao-federalista", "revolta-da-armada", "republica-da-espada", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-017",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "História do Brasil",
    subtopic: "A Imigração Subvencionada e o Projeto de Branqueamento Racial",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre 1888 e 1930, o Brasil acolheu mais de 3,5 milhões de imigrantes estrangeiros, sobretudo italianos, portugueses, espanhóis, alemães e, a partir de 1908, japoneses. No estado de São Paulo, a política de imigração foi maciçamente subsidiada pelos cofres públicos estaduais através da Sociedade Promotora de Imigração. Documentos e teses científicas da época — defendidas por intelectuais em congressos médicos e nas faculdades de direito — revelam que a atração da mão de obra europeia respondia a dois imperativos das elites: substituir a força de trabalho dos negros recém-libertos nos cafezais e acelerar o 'branqueamento' biológico e cultural da população brasileira, influenciado pelo darwinismo social e pela eugenia de Francis Galton.",
      source: "SCHWARCZ, L. M. O Espetáculo das Raças: cientistas, instituições e questão racial no Brasil. São Paulo: Companhia das Letras, 1993."
    },
    prompt: "A política oficial de imigração subvencionada implementada pelas oligarquias cafeeiras paulistas na Primeira República caracterizou-se pela confluência entre",
    options: [
      {
        id: "a",
        text: "o atendimento às demandas urgentes de braços agrícolas para o complexo agroexportador do café e a adesão a teorias racistas pseudocientíficas que preconizavam a eliminação gradual da negritude nacional por meio da mestiçagem com europeus brancos.",
        isCorrect: true,
        distractorRationale: "Correto: A historiadora Lilia Schwarcz demonstra que a imigração subvencionada não foi apenas uma decisão econômica de mercado de trabalho; foi um projeto de engenharia social racista. As elites intelectuais e cafeeiras acreditavam no darwinismo social e na eugenia, pagando a passagem de europeus para 'clarear' a população brasileira e marginalizando intencionalmente os ex-escravizados negros sem qualquer suporte estatal."
      },
      {
        id: "b",
        text: "uma política humanitária de acolhimento irrestrito de refugiados de guerras que garantiu títulos de terra gratuitos a todos os recém-chegados.",
        isCorrect: false,
        distractorRationale: "Os imigrantes eram submetidos a duras condições de trabalho assalariado ou de colonato sob dívidas nas fazendas de café, sem receber terras de graça."
      },
      {
        id: "c",
        text: "uma preferência declarada por trabalhadores qualificados do continente africano para fomentar a agricultura familiar de subsistência.",
        isCorrect: false,
        distractorRationale: "O governo vetou explicitamente a entrada de africanos e asiáticos em decretos de 1890, focando quase que exclusivamente em europeus brancos."
      },
      {
        id: "d",
        text: "uma aliança de solidariedade transnacional entre os sindicatos fabris paulistas e os governos socialistas da Europa central.",
        isCorrect: false,
        distractorRationale: "A imigração foi financiada pelo Estado oligárquico controlado pelos fazendeiros de café, e não por sindicatos socialistas."
      },
      {
        id: "e",
        text: "um plano estatal para acabar com a monocultura de exportação e transformar o Brasil em importador de alimentos básicos.",
        isCorrect: false,
        distractorRationale: "O objetivo era precisamente expandir a monocultura exportadora de café."
      }
    ],
    detailedExplanation: {
      summary: "A imigração europeia financiada pelo governo paulista atendeu ao latifúndio cafeeiro e ao mesmo tempo executou o projeto eugenista de branqueamento da população brasileira.",
      stepByStep: [
        "1. Demanda econômica: O fim da escravidão em 1888 exigia força de trabalho abundante nos cafezais paulistas em expansão.",
        "2. Ideologia racial: O darwinismo social e a eugenia consideravam os povos negros e indígenas 'inferiores' e 'atrasados'.",
        "3. A tese do branqueamento: Acreditava-se que em três ou quatro gerações a miscigenação com europeus tornaria a população brasileira predominantemente branca.",
        "4. Exclusão dos negros: Os ex-escravizados foram empurrados para a informalidade sem terras, educação ou reparações.",
        "5. Concluir: O projeto combinou lucro do latifúndio com racismo institucional de Estado."
      ],
      coreConcept: "A modernização da Primeira República foi moldada pelo racismo científico que marginalizou os trabalhadores negros nacionais em favor da mão de obra europeia subsidiada.",
      trapWarning: "No ENEM, questões sobre imigração sempre cruzam história econômica com a sociologia das teorias raciais (Lilia Schwarcz, Thomas Skidmore)."
    },
    tags: ["imigracao-subvencionada", "branqueamento", "eugenia", "cafeicultura", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-018",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "História do Brasil",
    subtopic: "O Ciclo da Borracha na Amazônia: Fastígio e Decadência",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre o final do século XIX e as primeiras décadas do século XX, a bacia amazônica vivenciou o apogeu da economia da borracha (látex extraído da seringueira Hevea brasiliensis), impulsionada pela explosão da indústria automobilística e do fabrico de pneumáticos nos Estados Unidos e Europa. O fluxo massivo de capitais gerou a ostentação suntuosa da 'Belle Époque amazônica', expressa no Teatro Amazonas em Manaus e no Theatro da Paz em Belém. Na base dessa riqueza vertiginosa, operava o sistema do 'barracão' e do aviamento: dezenas de milhares de migrantes nordestinos (os 'soldados da borracha' e flagelados das grandes secas do Ceará) embrenhavam-se na selva sob regime de escravidão por dívidas contraídas com os seringalistas para adquirir mantimentos e instrumentos a preços abusivos.",
      source: "WEINBERG, G. A Borracha na Amazônia: ascensão e queda. Rio de Janeiro: FGV, 2011."
    },
    prompt: "O colapso da economia gomífera amazônica a partir de 1912 decorreu fundamentalmente",
    options: [
      {
        id: "a",
        text: "da concorrência predatória da borracha plantada racionalmente pelos britânicos na Ásia (Malásia e Ceilão) a partir de sementes contrabandeadas da própria Amazônia, com custos de produção e produtividade imensamente superiores ao extrativismo silvestre brasileiro.",
        isCorrect: true,
        distractorRationale: "Correto: O explorador inglês Henry Wickham contrabandeou 70 mil sementes de seringueira da Amazônia para os Jardins de Kew em Londres, de onde foram enviadas para as colônias britânicas no Sudeste Asiático (Malásia, Ceilão e Cingapura). O cultivo asiático era planejado em plantações ordenadas com alta densidade, enquanto no Brasil dependia da busca de árvores nativas dispersas na floresta por seringueiros endividados. A borracha asiática inundou o mercado por uma fração do preço, arruinando a economia amazônica."
      },
      {
        id: "b",
        text: "da substituição definitiva da borracha natural por plástico sintético reciclável durante a Primeira Guerra Mundial.",
        isCorrect: false,
        distractorRationale: "A borracha sintética só se tornou viável em escala industrial durante a Segunda Guerra Mundial (década de 1940)."
      },
      {
        id: "c",
        text: "de uma invasão militar do Peru que anexou toda a floresta amazônica até a foz do rio Tapajós.",
        isCorrect: false,
        distractorRationale: "O Tratado de Petrópolis (1903), negociado pelo Barão do Rio Branco, garantiu o Acre para o Brasil de forma pacífica perante a Bolívia."
      },
      {
        id: "d",
        text: "da extinção biológica total de todas as espécies de seringueira provocada pela seca de 1910.",
        isCorrect: false,
        distractorRationale: "A Hevea brasiliensis continuou viva na floresta nativa; o problema foi a perda de competitividade comercial nos mercados mundiais."
      },
      {
        id: "e",
        text: "da renúncia voluntária dos barões de Manaus em favor do desenvolvimento fabril de São Paulo.",
        isCorrect: false,
        distractorRationale: "A elite manauara faliu abruptamente e sofreu um colapso financeiro dramático, sem renúncia voluntária."
      }
    ],
    detailedExplanation: {
      summary: "O ciclo da borracha ruiu porque os ingleses levaram sementes da Amazônia e plantaram seringais científicos na Ásia, produzindo borracha muito mais barata que o extrativismo arcaico brasileiro.",
      stepByStep: [
        "1. Apogeu: O Brasil fornecia mais de 90% da borracha mundial para pneus de automóveis (fastígio de Manaus e Belém).",
        "2. A biopirataria britânica: Henry Wickham contrabandeou sementes amazônicas para o Jardim Botânico de Londres em 1876.",
        "3. Plantações asiáticas: Em 1910-1912, as plantações organizadas da Malásia entraram em produção em escala massiva.",
        "4. A decadência: O preço despencou no mercado mundial e a Amazônia entrou em colapso econômico.",
        "5. Concluir: O modelo extrativista baseado na servidão por dívidas foi engolido pela agricultura colonial intensiva britânica."
      ],
      coreConcept: "A economia da borracha expõe a vulnerabilidade de ciclos extrativistas periféricos dependentes de monoculturas sem industrialização nem soberania científica.",
      trapWarning: "No ENEM, atente-se para o aviamento: o seringueiro nunca conseguia quitar sua dívida no barracão, vivendo em permanente cativeiro financeiro."
    },
    tags: ["ciclo-da-borracha", "amazonia", "extrativismo", "biopirataria", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-019",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "História do Brasil",
    subtopic: "A Diplomacia do Barão do Rio Branco e a Consolidação das Fronteiras",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "À frente do Ministério das Relações Exteriores entre 1902 e 1912, José Maria da Silva Paranhos Júnior, o Barão do Rio Branco, consolidou definitivamente os contornos cartográficos do território brasileiro. Por meio de habilidosa diplomacia jurídica fundada no princípio do 'uti possidetis' (posse de fato da terra), em laudos arbitrais internacionais e em pesquisas minuciosas em arquivos cartográficos coloniais, Rio Branco resolveu litígios fronteiriços centenários com a França (Amapá), Argentina (Palmas/Missões), Inglaterra (Guiana) e Bolívia (incorporação do Acre pelo Tratado de Petrópolis em 1903), sem disparar um único tiro de canhão.",
      source: "CERVO, A. L.; BUENO, C. História da Política Exterior do Brasil. Brasília: Editora UnB, 2011."
    },
    prompt: "A atuação diplomática do Barão do Rio Branco durante a Primeira República conferiu ao Brasil uma tradição de política externa caracterizada por",
    options: [
      {
        id: "a",
        text: "solução pacífica de controvérsias internacionais, recurso à arbitragem jurídica multilateral e defesa intransigente do princípio do 'uti possidetis' e da não intervenção armada.",
        isCorrect: true,
        distractorRationale: "Correto: Rio Branco é o patrono da diplomacia brasileira precisamente por ter consolidado quase 900 mil km² de fronteiras por vias pacíficas, laudos arbitrais neutros e tratados bilaterais. Esse legado institucional inaugurou a tradição do Itamaraty de valorização do direito internacional, pragmatismo e solução negociada de disputas territoriais."
      },
      {
        id: "b",
        text: "militarismo expansionista beligerante com ocupação forçada de capitais de países vizinhos para anexar territórios alheios.",
        isCorrect: false,
        distractorRationale: "Rio Branco evitou expressamente a guerra, resolvendo as questões por laudos jurídicos pacíficos."
      },
      {
        id: "c",
        text: "rompimento de todas as relações comerciais e diplomáticas com a Inglaterra e com os Estados Unidos.",
        isCorrect: false,
        distractorRationale: "Pelo contrário: Rio Branco promoveu a aproximação estratégica com os Estados Unidos (parceria preferencial com Washington)."
      },
      {
        id: "d",
        text: "entrega voluntária de territórios da Amazônia para o governo colonial francês da Guiana.",
        isCorrect: false,
        distractorRationale: "Rio Branco venceu a disputa do Amapá contra a França no laudo suíço de 1900, garantindo o território para o Brasil."
      },
      {
        id: "e",
        text: "submissão automática das forças militares brasileiras ao comando direto da OTAN.",
        isCorrect: false,
        distractorRationale: "A OTAN só foi criada em 1949 (após a Segunda Guerra Mundial), e o Brasil não faz parte dela."
      }
    ],
    detailedExplanation: {
      summary: "O Barão do Rio Branco consolidou todas as fronteiras brasileiras sem guerras, estabelecendo a tradição pacífica e jurídica do Itamaraty que perdura até hoje.",
      stepByStep: [
        "1. Desafio de 1900: O Brasil herdara do Império dezenas de fronteiras indefinidas e disputadas com vizinhos sul-americanos e potências europeias.",
        "2. Método de Rio Branco: Pesquisa em arquivos históricos, mapas antigos e arbitragem de presidentes neutros (como o da Suíça e dos EUA).",
        "3. O Caso do Acre (1903): Seringueiros brasileiros já ocupavam a região boliviana; Rio Branco assinou o Tratado de Petrópolis pagando 2 milhões de libras e construindo a ferrovia Madeira-Mamoré.",
        "4. Concluir: Criou a reputação do Brasil como defensor do multilateralismo pacífico."
      ],
      coreConcept: "A diplomacia de fronteiras consolidada no início do século XX garantiu a paz regional da América do Sul e a estabilidade geopolítica do país.",
      trapWarning: "No Tratado de Petrópolis (1903), lembre-se: o Brasil comprou o Acre da Bolívia e indenizou uma empresa norte-americana (Bolivian Syndicate) para pacificar a região."
    },
    tags: ["barao-do-rio-branco", "diplomacia", "fronteiras", "itamaraty", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-020",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "História do Brasil",
    subtopic: "A Sedição de Juazeiro (1914) e o Poder Religioso do Padre Cícero",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1914, o sertão do Ceará foi palco da Sedição de Juazeiro. Durante o governo do marechal Hermes da Fonseca (1910-1914), o Executivo federal deflagrou a 'Política das Salvações', visando intervir militarmente nos estados para derrubar as oligarquias tradicionais adversárias e substituí-las por militares leais. No Ceará, a intervenção depôs a família Acioli. Em resposta, o sacerdote católico Padre Cícero Romão Batista — venerado pelas multidões de romeiros como milagreiro e patriarca espiritual — aliou-se ao médico Floro Bartolomeu e mobilizou milhares de sertanejos armados de espingardas e terçados que marcharam sobre Fortaleza, derrotando as tropas legalistas e restituindo o controle oligárquico tradicional.",
      source: "DELLA CAVA, R. Milagre em Joaseiro. Rio de Janeiro: Paz e Terra, 1977."
    },
    prompt: "O episódio da Sedição de Juazeiro revela a singularidade política do fenômeno do 'padroado sertanejo', no qual",
    options: [
      {
        id: "a",
        text: "o carisma religioso messiânico e a liderança espiritual popular foram articulados diretamente às disputas entre oligarquias coronelistas e o governo federal, demonstrando a força política autônoma do catolicismo popular no Nordeste.",
        isCorrect: true,
        distractorRationale: "Correto: Diferente de Canudos (que rompeu com a Igreja e com os coronéis), em Juazeiro o Padre Cícero atuava como líder religioso amado pelos romeiros e, simultaneamente, como vice-governador e chefe político (coronel de batina) alinhado às oligarquias. O misticismo sertanejo foi canalizado para defender a autonomia local contra o intervencionismo salvacionista de Hermes da Fonseca."
      },
      {
        id: "b",
        text: "uma revolução anarquista camponesa aboliu o sacramento da eucaristia e fuzilou toda a congregação dos padres locais.",
        isCorrect: false,
        distractorRationale: "O movimento era intensamente devoto e católico, liderado pelo próprio Padre Cícero."
      },
      {
        id: "c",
        text: "as forças armadas francesas desembarcaram no litoral cearense para impor a língua francesa nas escolas.",
        isCorrect: false,
        distractorRationale: "Não houve intervenção militar francesa no Ceará em 1914."
      },
      {
        id: "d",
        text: "todos os latifúndios de cana-de-açúcar foram estatizados e transformados em cooperativas soviéticas.",
        isCorrect: false,
        distractorRationale: "O poder oligárquico tradicional latifundiário foi restaurado com a vitória da sedição."
      },
      {
        id: "e",
        text: "o Padre Cícero renunciou à batina e converteu-se ao protestantismo calvinista.",
        isCorrect: false,
        distractorRationale: "Padre Cícero permaneceu católico devoto até a morte, sendo objeto de culto fervoroso por milhões de romeiros até a atualidade."
      }
    ],
    detailedExplanation: {
      summary: "Em Juazeiro do Norte, fé e coronelismo uniram-se: Padre Cícero utilizou seu imenso prestígio espiritual junto aos romeiros para derrotar as tropas federais e defender os interesses políticos locais.",
      stepByStep: [
        "1. O contexto: Política das Salvações de Hermes da Fonseca derrubou os oligarcas civis cearenses (família Acioli).",
        "2. A figura do Padre Cícero: 'Padrinho' adorado pelos sertanejos devido aos supostos milagres da hóstia que sangrou.",
        "3. O papel político: Aliado de Floro Bartolomeu, Padre Cícero armou os romeiros para marchar contra a capital.",
        "4. Concluir: O catolicismo popular serviu como instrumento decisivo de poder político no jogo oligárquico da Primeira República."
      ],
      coreConcept: "A religiosidade popular no sertão não era alienação passiva; podia ser uma força militar e política capaz de derrubar governadores e peitar o presidente da República.",
      trapWarning: "Cuidado: Canudos confrontou o poder oligárquico; Juazeiro aliou-se ao poder oligárquico e foi aceito pelo sistema."
    },
    tags: ["padre-cicero", "juazeiro-do-norte", "messianismo", "politica-das-salvacoes", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-021",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "História do Brasil",
    subtopic: "A Revolução Paulista de 1924 e o Bombardeio do Território Urbano",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 5 de julho de 1924, exatamente dois anos após os '18 do Forte', jovens oficiais do Exército e da Força Pública de São Paulo, liderados pelo general reformado Isidoro Dias Lopes e pelos tenentes Juarez Távora e Eduardo Gomes, rebelaram-se contra o presidente Artur Bernardes, ocupando a cidade de São Paulo por 23 dias. Para retomar o controle da metrópole, o governo federal ordenou o bombardeio indiscriminado de artilharia pesada sobre bairros operários densamente povoados como Brás, Mooca, Belenzinho e Ipiranga, destruindo fábricas, residências e matando centenas de civis inocentes, episódio conhecido como o 'bombardeio terrificante'.",
      source: "COHEN, I. A Revolução de 1924 em São Paulo: a cidade entre as armas. São Paulo: Unesp, 2007."
    },
    prompt: "O bombardeio indiscriminado de bairros operários paulistanos pelas forças leais ao governo federal em 1924 demonstrou",
    options: [
      {
        id: "a",
        text: "o desapreço da elite oligárquica pela vida das populações civis trabalhadoras e a disposição do Estado em recorrer ao terror militar desmedido para debelar rebeliões e sufocar anseios de reforma política.",
        isCorrect: true,
        distractorRationale: "Correto: O presidente Artur Bernardes (conhecido por governar sob estado de sítio durante quase todo o mandato) não hesitou em bombardear com canhões a própria maior cidade industrial do país, atingindo bairros de trabalhadores operários que nada tinham a ver com o motim militar. O episódio revelou a violência despótica do Estado oligárquico quando sua hegemonia era posta em risco."
      },
      {
        id: "b",
        text: "a obediência estrita do governo federal aos tratados internacionais de proteção humanitária dos civis assinados na Convenção de Genebra.",
        isCorrect: false,
        distractorRationale: "O bombardeio violou frontalmente qualquer princípio de proteção humanitária, alvejando deliberadamente bairros residenciais civis."
      },
      {
        id: "c",
        text: "uma tentativa de resgatar os operários paulistas dos perigos do trabalho fabril em tecelagens.",
        isCorrect: false,
        distractorRationale: "O governo bombardeou as fábricas e casas, causando pânico, mortes e fuga em massa de 250 mil habitantes."
      },
      {
        id: "d",
        text: "uma revolta de latifundiários cafeeiros que exigiam o retorno de São Paulo ao estatuto de colônia portuguesa.",
        isCorrect: false,
        distractorRationale: "Os tenentes queriam derrubar Artur Bernardes, aprovar o voto secreto e moralizar a República, sem qualquer proposta colonial."
      },
      {
        id: "e",
        text: "o apoio unânime da classe trabalhadora ao estado de sítio decretado por Artur Bernardes.",
        isCorrect: false,
        distractorRationale: "A classe trabalhadora sofreu as consequências das bombas e organizou greves e comitês de sobrevivência contra a violência oficial."
      }
    ],
    detailedExplanation: {
      summary: "Em 1924, o governo federal bombardeou a cidade de São Paulo com canhões para derrotar os revoltosos tenentistas, massacrando civis nos bairros operários do Brás e da Mooca.",
      stepByStep: [
        "1. O levante: Tenentes ocuparam São Paulo exigindo a renúncia do presidente Artur Bernardes.",
        "2. A fuga do governador: O presidente de São Paulo (Carlos de Campos) fugiu para os arredores.",
        "3. A retaliação federal: Bombardeio cego de artilharia contra bairros operários (o 'bombardeio terrificante').",
        "4. A saída estratégica: Os tenentes recuaram para o interior e juntaram-se aos rebeldes gaúchos liderados por Prestes, formando a Coluna Prestes.",
        "5. Concluir: O evento exibiu o autoritarismo sanguinário da agonia da República Velha."
      ],
      coreConcept: "A Revolução Paulista de 1924 foi o maior conflito urbano bélico da história da cidade de São Paulo e o embrião direto da Coluna Prestes.",
      trapWarning: "No ENEM, lembre-se: Artur Bernardes governou quase todo o seu quadriênio (1922-1926) sob estado de sítio, censurando jornais e prendendo opositores."
    },
    tags: ["revolucao-de-1924", "tenentismo", "artur-bernardes", "sao-paulo", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-022",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "História do Brasil",
    subtopic: "A Fundação do Partido Comunista do Brasil (PCB) em 1922",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em março de 1922, reunidos clandestinamente em Niterói e no Rio de Janeiro, nove delegados representando grupos operários de diversas regiões do país — entre eles Astrojildo Pereira, ex-militante anarquista — fundaram o Partido Comunista do Brasil (PCB), seção brasileira da Internacional Comunista (Komintern). A criação do PCB marcou uma virada estratégica no movimento operário nacional: a transição gradual da espontaneidade insurrecional anarquista para a centralização partidária, a disciplina leninista e a disputa política pela condução das massas proletárias.",
      source: "KONDER, L. História das Ideias Socialistas no Brasil. São Paulo: Expressão Popular, 2003."
    },
    prompt: "A fundação do PCB em 1922 representou uma inflexão no movimento trabalhista brasileiro porque propôs",
    options: [
      {
        id: "a",
        text: "a superação da recusa anarquista à ação partidária e a organização de uma vanguarda política estruturada para liderar as lutas do proletariado rumo à conquista do Estado, sob influência direta do triunfo da Revolução Bolchevique de 1917 na Rússia.",
        isCorrect: true,
        distractorRationale: "Correto: Até 1922, os anarquistas rejeitavam partidos políticos, eleições e o Estado. O impacto mundial da Revolução Russa de 1917 (Lênin e Trotsky) convenceu intelectuais e operários brasileiros de que, para derrotar o capitalismo e os coronéis, era imprescindível um partido político de vanguarda disciplinado e profissionalizado. O PCB nasceu para cumprir esse papel."
      },
      {
        id: "b",
        text: "a conciliação pacífica das classes sociais por meio da aceitação irrestrita das diretrizes do Papa Leão XIII na encíclica Rerum Novarum.",
        isCorrect: false,
        distractorRationale: "O PCB era marxista-leninista, materialista e revolucionário, não corporativista católico."
      },
      {
        id: "c",
        text: "a defesa incondicional dos interesses dos grandes fazendeiros exportadores de café do oeste paulista.",
        isCorrect: false,
        distractorRationale: "O partido tinha como meta central a destruição do latifúndio cafeeiro e a emancipação do proletariado."
      },
      {
        id: "d",
        text: "o desarmamento voluntário dos sindicatos para apoiar a política dos governadores de Campos Sales.",
        isCorrect: false,
        distractorRationale: "O PCB combateu incansavelmente a política dos governadores e a farsa eleitoral oligárquica."
      },
      {
        id: "e",
        text: "a subordinação imediata dos sindicatos fabris aos ditames do Departamento de Estado norte-americano.",
        isCorrect: false,
        distractorRationale: "O PCB era anti-imperialista e subordinava-se à Internacional Comunista (Moscou), e não a Washington."
      }
    ],
    detailedExplanation: {
      summary: "A fundação do PCB em 1922 trouxe o marxismo organizado para o Brasil: trocou a dispersão anarquista pela disciplina de um partido de vanguarda inspirado na Revolução Russa.",
      stepByStep: [
        "1. Antes de 1922: O anarcossindicalismo dominava as lutas operárias (ação direta, sem partidos).",
        "2. O impacto global: A vitória dos bolcheviques na Rússia (1917) provou que um partido operário organizado podia tomar o poder.",
        "3. A fundação: Astrojildo Pereira e ex-anarquistas fundam o PCB como seção do Komintern.",
        "4. A clandestinidade: Imediatamente perseguido pelo governo de Epitácio Pessoa e colocado na ilegalidade.",
        "5. Concluir: O PCB tornou-se ator incontornável da esquerda brasileira durante todo o século XX."
      ],
      coreConcept: "A emergência do PCB em 1922 reflete a internacionalização da luta de classes e o fortalecimento do operariado industrial urbano no Brasil.",
      trapWarning: "No ENEM, lembre-se do ano mágico de 1922: Semana de Arte Moderna, Fundação do PCB e o início do Tenentismo com os 18 do Forte."
    },
    tags: ["pcb", "movimento-operario", "marxismo", "ano-1922", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-023",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "História do Brasil",
    subtopic: "A Marcha Heroica da Coluna Prestes (1925-1927)",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre 1925 e 1927, um contingente de cerca de 1.500 rebeldes tenentistas — fruto da junção dos insurgentes paulistas de 1924 com os revoltosos gaúchos liderados pelo capitão Luís Carlos Prestes — protagonizou uma das mais extraordinárias marchas militares da história mundial: a Coluna Prestes. Percorrendo a pé e a cavalo mais de 25 mil quilômetros através de 11 estados do interior do Brasil, a Coluna enfrentou o Exército legalista e as tropas de jagunços contratados pelos coronéis locais, sem jamais ter sido derrotada em batalha formal, até exilar-se invicta na Bolívia.",
      source: "PRESTES, A. L. A Coluna Prestes. São Paulo: Expressão Popular, 2016."
    },
    prompt: "A estratégia da Coluna Prestes de marchar incessantemente pelo vasto interior do país tinha como intuito principal",
    options: [
      {
        id: "a",
        text: "evitar o combate frontal decisivo contra a superioridade bélica do Exército regular, enquanto conscientizava as populações sertanejas oprimidas e desgastava a legitimidade política da oligarquia dominante.",
        isCorrect: true,
        distractorRationale: "Correto: A Coluna Prestes operava pela tática da guerra de movimento: marchava rapidamente pelo sertão evitando cercos das tropas federais (muito mais numerosas e bem armadas). Ao cruzar o sertão, os tenentes queimavam cartórios eleitorais com registros de dívidas e votos fraudados, conclamando o povo sertanejo a se rebelar contra os coronéis e abalando o mito de invulnerabilidade do poder federal."
      },
      {
        id: "b",
        text: "conquistar e anexar as províncias da Bolívia e do Paraguai ao Império brasileiro.",
        isCorrect: false,
        distractorRationale: "A Coluna era nacionalista brasileira e entrou na Bolívia apenas para se asilar pacificamente ao final da marcha."
      },
      {
        id: "c",
        text: "proteger as fazendas de café de São Paulo contra a invasão de imigrantes europeus.",
        isCorrect: false,
        distractorRationale: "A Coluna combatia precisamente os governos oligárquicos cafeeiros de Artur Bernardes e Washington Luís."
      },
      {
        id: "d",
        text: "obrigar as famílias rurais a abandonarem o catolicismo e a adotarem o islamismo.",
        isCorrect: false,
        distractorRationale: "Não houve qualquer questão de conversão religiosa na pauta da Coluna."
      },
      {
        id: "e",
        text: "garantir o fornecimento de armas americanas para os coronéis do sertão baiano.",
        isCorrect: false,
        distractorRationale: "Os coronéis eram os inimigos da Coluna e armavam jagunços ('batalhões patrióticos') para combatê-la."
      }
    ],
    detailedExplanation: {
      summary: "A Coluna Prestes utilizou a guerra de movimento: 25 mil km pelo interior sem ser derrotada, desmoralizando as tropas do governo e denunciando as misérias do sertão sob o coronelismo.",
      stepByStep: [
        "1. Composição: Tenentes de São Paulo e do Rio Grande do Sul (liderança militar de Luís Carlos Prestes e Miguel Costa).",
        "2. A tática militar: Marchar continuamente em velocidade para não ser cercada pelas tropas governistas.",
        "3. A ação simbólica: Queima de impostos, libertação de presos políticos e denúncia da corrupção oligárquica.",
        "4. O desfecho: Exílio invicto na Bolívia em 1927 após esgotamento material.",
        "5. Concluir: Forjou o mito político do 'Cavaleiro da Esperança' (Prestes) e precipitou a crise final da República Velha."
      ],
      coreConcept: "A Coluna Prestes expôs as veias abertas do sertão brasileiro e provou que o Estado oligárquico não conseguia controlar seu próprio território.",
      trapWarning: "Atenção: Durante a marcha (1925-1927), Prestes AINDA NÃO ERA COMUNISTA; ele era um jovem militar nacionalista. Sua adesão ao marxismo ocorreu apenas em 1930."
    },
    tags: ["coluna-prestes", "luis-carlos-prestes", "tenentismo", "guerra-de-movimento", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-024",
    area: "humanas",
    competence: 2,
    skill: 8,
    topic: "História do Brasil",
    subtopic: "A Crise de 1929 e o Colapso da Cafeicultura Exportadora",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em outubro de 1929, a Bolsa de Valores de Nova York sofreu o 'Crash' que deflagrou a Grande Depressão capitalista mundial. O impacto sobre a economia brasileira foi fulminante: os Estados Unidos, compradores de mais de 70% de todo o café nacional, reduziram drasticamente suas importações e o preço da saca de café nos portos despencou em mais de 60% em poucos meses. Com os armazéns estatais abarrotados de milhões de sacas que não encontravam compradores e as reservas de ouro do Banco do Brasil exauridas, ruiu o modelo agroexportador que sustentara politicamente a Primeira República durante quatro décadas.",
      source: "FURTADO, C. Formação Econômica do Brasil. São Paulo: Companhia das Letras, 2007 [1959]."
    },
    prompt: "Na análise de Celso Furtado sobre a formação econômica brasileira, a Crise de 1929 atuou como catalisador histórico porque",
    options: [
      {
        id: "a",
        text: "inviabilizou a reprodução do modelo agroexportador dependente da monocultura do café, criando as condições materiais e institucionais para o processo de industrialização por substituição de importações sob liderança do Estado.",
        isCorrect: true,
        distractorRationale: "Correto: Celso Furtado demonstra que a crise de 1929 quebrou a espinha dorsal do modelo primário-exportador. Com a queda das exportações de café, o país não tinha mais divisas em dólar para importar bens industriais manufaturados da Europa e EUA. Isso forçou o Brasil, a partir da Era Vargas, a produzir internamente aquilo que antes importava (industrialização por substituição de importações), mudando o centro dinâmico da economia do campo para as cidades."
      },
      {
        id: "b",
        text: "fez com que a economia brasileira superasse a dos Estados Unidos, tornando o Brasil a maior potência fabril do mundo ocidental.",
        isCorrect: false,
        distractorRationale: "O Brasil sofreu uma crise severa e permaneceu uma nação periférica em desenvolvimento."
      },
      {
        id: "c",
        text: "provocou o fechamento de todas as fábricas paulistas e o retorno forçado de 100% da população urbana ao campo.",
        isCorrect: false,
        distractorRationale: "A crise acelerou o êxodo rural e a urbanização fabril, e não o retorno ao campo."
      },
      {
        id: "d",
        text: "forçou o governo brasileiro a queimar todas as reservas petrolíferas da Bacia de Campos.",
        isCorrect: false,
        distractorRationale: "O petróleo da Bacia de Campos só foi descoberto na década de 1970."
      },
      {
        id: "e",
        text: "restabeleceu a moeda de cobre do período colonial como padrão monetário exclusivo do país.",
        isCorrect: false,
        distractorRationale: "Não houve retorno a moedas coloniais."
      }
    ],
    detailedExplanation: {
      summary: "A quebra da Bolsa de NY em 1929 destruiu os preços do café, inviabilizou o modelo agrário da República Velha e abriu caminho para a industrialização nacional varguista.",
      stepByStep: [
        "1. Dependência externa: O Brasil dependia da venda de café aos EUA para obter dólares e importar produtos industriais.",
        "2. O choque externo: A Grande Depressão de 1929 derrubou o preço do café em 60%.",
        "3. A quebra do modelo: O Estado não tinha mais como sustentar os lucros dos fazendeiros comprando o café estocado.",
        "4. A consequência histórica: Transição para a industrialização por substituição de importações (ISI) na Era Vargas.",
        "5. Concluir: O colapso econômico antecipou e acelerou o colapso político de 1930."
      ],
      coreConcept: "A crise de 1929 foi a pá de cal econômica sobre a República Oligárquica, tornando o café incapaz de ditar os rumos do país.",
      trapWarning: "Celso Furtado no ENEM: sempre que vir a tese de Furtado sobre 1929, associe à 'industrialização por substituição de importações' e ao fim do modelo primário-exportador."
    },
    tags: ["crise-de-1929", "celso-furtado", "cafeicultura", "substituicao-de-importacoes", "historia-economica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-OLI-025",
    area: "humanas",
    competence: 2,
    skill: 7,
    topic: "História do Brasil",
    subtopic: "Balanço Crítico da Primeira República: A Ilusão da Cidadania",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O povo assistiu àquilo bestializado, atônito, surpreso, sem conhecer o que significava. Muitos acreditaram seriamente estar vendo uma parada militar.\nAssim o jornalista e republicano histórico Aristides Lobo descreveu a atitude popular perante a Proclamação da República no dia 15 de novembro de 1889. Passadas quatro décadas, em 1930, a frase continuava a ecoar como síntese amarga de um regime que proclamara a soberania popular na Constituição, mas estruturara o poder sobre o voto de cabresto, o expurgo da degola eleitoral, o massacre de Canudos e Contestado, as chibatadas na Marinha e a exclusão da esmagadora maioria dos trabalhadores brasileiros da condição de cidadãos plenos.",
      source: "CARVALHO, J. M. Os Bestializados: o Rio de Janeiro e a República que não foi. São Paulo: Companhia das Letras, 1987."
    },
    prompt: "A tese dos 'bestializados', formulada por Aristides Lobo e consagrada pelo historiador José Murilo de Carvalho, sintetiza que a Primeira República brasileira caracterizou-se essencialmente como",
    options: [
      {
        id: "a",
        text: "um arranjo político de cúpula engendrado por elites civis e militares que instituiu a forma republicana sem construir a cidadania republicana substantiva, mantendo a população desprovida de canais efetivos de soberania popular e participação democrática real.",
        isCorrect: true,
        distractorRationale: "Correto: A expressão 'bestializados' ressalta a distância abissal entre a retórica de liberdade e igualdade da República e a realidade concreta de exclusão do povo. A proclamação foi um golpe militar de cúpula com apoio dos fazendeiros de café; a massa popular permaneceu sem direitos civis e políticos, assistindo passivamente ou reagindo em insurreições desesperadas (Canudos, Vacina, Chibata) contra a violência oligárquica."
      },
      {
        id: "b",
        text: "uma democracia de massas exemplar que superou o modelo ateniense antigo por meio de referendos populares diários.",
        isCorrect: false,
        distractorRationale: "A Primeira República foi uma oligarquia fraudulenta e excludente, o extremo oposto de uma democracia direta exemplar."
      },
      {
        id: "c",
        text: "uma ditadura monárquica teocrática que proibiu a circulação de dinheiro e fechou todos os jornais do país.",
        isCorrect: false,
        distractorRationale: "O regime era formalmente uma república federativa laica com economia de mercado capitalista."
      },
      {
        id: "d",
        text: "um sistema anarquista que extinguiu as prisões e concedeu o comando das polícias aos lavradores do semiárido.",
        isCorrect: false,
        distractorRationale: "A polícia era o braço armado dos coronéis e a violência estatal era sistemática contra os mais pobres."
      },
      {
        id: "e",
        text: "um governo socialista utópico que implementou a igualdade salarial compulsória entre homens e mulheres.",
        isCorrect: false,
        distractorRationale: "As mulheres eram desprovidas do direito ao voto e superexploradas nas fábricas sem nenhuma proteção trabalhista."
      }
    ],
    detailedExplanation: {
      summary: "A 'República dos Bestializados' foi uma república sem povo: adotou o nome de república, mas operou como oligarquia excludente que reservava o poder a poucas famílias e tratava a reivindicação popular com canhões e chibatadas.",
      stepByStep: [
        "1. A frase de Aristides Lobo: O povo assistiu à proclamação 'bestializado', achando que era parada militar.",
        "2. A tese de José Murilo de Carvalho: Mostra que o povo não era ignorante, mas foi ativamente desprovido de canais legítimos de representação pelas elites.",
        "3. A reação popular: Quando o povo agiu, foi pelas revoltas de sobrevivência e dignidade (Canudos, Chibata, Vacina, Contestado, Greve de 1917).",
        "4. Concluir: A Primeira República fracassou em instituir uma cidadania substantiva, ruindo na Revolução de 1930."
      ],
      coreConcept: "A verdadeira República exige 'res publica' (coisa pública para todos); quando a república pertence a poucos coronéis, torna-se uma oligarquia fantasiada.",
      trapWarning: "No ENEM, 'Os Bestializados' de José Murilo de Carvalho é um dos conceitos sociológicos e historiográficos mais cobrados para caracterizar a Primeira República."
    },
    tags: ["os-bestializados", "jose-murilo-de-carvalho", "cidadania", "primeira-republica", "historia-do-brasil"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
