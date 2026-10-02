/**
 * LIVRO DIDÁTICO DIGITAL: História e Cultura Afro-Brasileira e Indígena no ENEM
 * Área: Ciências Humanas e suas Tecnologias
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026 - Leis 10.639/03 e 11.645/08)
 * Regra Estrita: ZERO termos de deslocamentos turísticos.
 */

export const LIVRO_HUMANAS_AFRO_INDIGENA = {
  id: "livro-humanas-afro-indigena",
  area: "humanas",
  title: "História e Cultura Afro-Brasileira e Indígena no ENEM",
  subtitle: "Cosmologias originárias, diáspora atlântica, lutas quilombolas, pensamento social negro e direitos territoriais",
  estimatedReadingTimeMinutes: 65,
  badge: "Livro Essencial • Leis 10.639 e 11.645",
  coverColor: "from-amber-950 to-orange-900",
  prerequisites: [
    "Conceitos fundamentais de história colonial e imperial brasileira",
    "Noções básicas de direitos humanos e cidadania constitucional",
    "Introdução à sociologia das desigualdades sociais e raciais"
  ],
  learningObjectives: [
    "Compreender as cosmologias indígenas e as críticas contemporâneas ao antropocentrismo predatório (Krenak, Kopenawa e Viveiros de Castro)",
    "Analisar o tráfico atlântico e a complexidade social da diáspora africana sob a ótica da agência negra e do patrimônio cultural sensível",
    "Interpretar a territorialidade e as estratégias de resistência quilombola do período colonial aos dias atuais (Palmares ao art. 68 do ADCT)",
    "Dominar as formulações do pensamento social negro brasileiro (Lélia Gonzalez, Abdias do Nascimento, Sueli Carneiro, Florestan Fernandes e Silvio Almeida)",
    "Avaliar o marco jurídico protetivo pós-1988 (Artigo 231, inconstitucionalidade do Marco Temporal, Ações Afirmativas e Leis 10.639/03 e 11.645/08)"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "Cosmologias Indígenas, Perspectivismo e a Crítica Ecológica da Terra",
      targetSkill: "H1, H4, H11 — Comparar visões de mundo e analisar o papel das culturas originárias na preservação socioambiental",
      practiceModuleId: "humanas/afro-indigena",
      deepContent: `
A abordagem das sociedades indígenas no ENEM superou a narrativa folclórica e etnocêntrica do colonizador europeu. Hoje, os povos originários são estudados como formuladores de sofisticadas ontologias ecológicas e sistemas filosóficos contemporâneos de alcance planetário.

1. A Ilusão Ocidental da Separação Sociedade-Natureza:
A modernidade europeia cartesiana construiu o conceito de "natureza" como objeto inanimado exterior ao ser humano — um repositório inerte de matérias-primas a ser dominado, precificado e explorado pela técnica industrial. Nas cosmologias ameríndias, essa separação inexiste. O rio, a montanha, os animais e a floresta são "parentes", sujeitos dotados de agência espiritual e vontade.

2. Ailton Krenak e as "Ideias para Adiar o Fim do Mundo":
O líder e pensador indígena Ailton Krenak denuncia a mercantilização da vida promovida pelo capitalismo global, que reduziu o ser humano à condição estéril de "consumidor". Para Krenak:
• A terra não é um negócio imobiliário; é nossa mãe geradora.
• "Adiar o fim do mundo" é a capacidade ancestral de resistir cantando, dançando e contando histórias, preservando modos comunitários de existência que recusam a lógica autodestrutiva da predação ecocida.
• Os povos indígenas já sobreviveram a vários "fins de mundo" desde a invasão europeia de 1500 e têm muito a ensinar a uma sociedade ocidental em crise climática.

3. Davi Kopenawa e a Ecologia Xamânica Yanomami:
Em "A Queda do Céu" (coautoria com Bruce Albert), o xamã Davi Kopenawa apresenta a cosmologia dos Yanomami:
• A Terra-Floresta (Urihi a) é mantida em equilíbrio pelos espíritos auxiliares xapiri.
• O ouro e os minerais pertencem às entranhas profundas da terra; quando o garimpo queima ouro com mercúrio e polui os rios, libera a fumaça da epidemia (xawara), que enfraquece os xapiri e faz o céu desabar sobre brancos e indígenas indistintamente.

4. Eduardo Viveiros de Castro e o Perspectivismo Ameríndio:
O antropólogo brasileiro formulou o conceito de multinaturalismo:
• Ao contrário do Ocidente (uma única natureza biológica e muitas culturas humanas), os povos amazônicos concebem que o fundo comum de todos os seres é a humanidade (tudo era gente no início dos tempos).
• A diferença está nos corpos, que operam como "roupas" ou perspectivas: a anta vê o barro como casa comunal; a onça vê o sangue de sua caça como cerveja de mandioca fermentada. Todos os seres são sujeitos e dotados de ponto de vista.
`,
      workedExamples: [
        {
          problem: "Em uma prova do ENEM, um excerto de Ailton Krenak afirma que 'quando despersonalizamos o rio e a montanha, abrindo mão do parentesco com eles, autorizamos que uma corporação os destrua para obter lucro'. Como essa passagem deve ser articulada pelo estudante em uma questão sobre ética socioambiental?",
          solution: "Passo 1: Identificar a crítica de Krenak à coisificação da biosfera. O modelo capitalista ocidental trata montanhas e rios como 'recursos minerais e hídricos' para justificar barragens e mineradoras predatórias.\nPasso 2: Resgatar a cosmologia indígena de parentesco: o Rio Doce (Watu para os Krenak) é um avô sagrado com direitos próprios.\nPasso 3: Concluir que a ética ecológica originária propõe a personificação jurídica da natureza e o respeito à interdependência entre todos os viventes."
        },
        {
          problem: "Analise como a advertência xamânica de Davi Kopenawa sobre a fumaça do garimpo (xawara) dialoga com os relatórios contemporâneos do IPCC sobre o Antropoceno.",
          solution: "Passo 1: Kopenawa traduz pela linguagem xamânica os efeitos reais da devastação antrópica: mercúrio, desmatamento e queima de combustíveis fósseis geram o desequilíbrio climático global ('a queda do céu').\nPasso 2: O conceito de Antropoceno na ciência ocidental define a época geológica em que a ação humana tornou-se a força dominante de alteração do clima planetário.\nPasso 3: A convergência demonstra que o xamanismo Yanomami e a ciência climática contemporânea diagnosticam o mesmo colapso ecossistêmico derivado da ganância predatória."
        }
      ],
      realWorldApplications: [
        "Direito Internacional Ambiental: reconhecimento de rios e ecossistemas como sujeitos de direitos jurídicos (como o Rio Atrato na Colômbia e o Rio Whanganui na Nova Zelândia).",
        "Gestão de Unidades de Conservação: comprovação científica de que as terras indígenas demarcadas são as barreiras mais eficientes contra o desmatamento em todo o território nacional."
      ],
      commonMisconceptions: [
        "Tratar o saber indígena como folclore ingênuo, desconsiderando que se trata de uma epistemologia filosófica e ecológica rigorosa.",
        "Achar que o indígena que utiliza smartphones ou roupas contemporâneas perde sua identidade étnica e cultural."
      ],
      quickReview: [
        "Ocidente: monocultura e separação sociedade-natureza.",
        "Krenak: a terra como parente e a arte de adiar o fim do mundo.",
        "Kopenawa: ecologia xamânica e o alerta contra a fumaça da epidemia (xawara).",
        "Viveiros de Castro: perspectivismo ameríndio (todos os viventes compartilham alma humana)."
      ]
    },
    {
      chapterNumber: 2,
      title: "A Diáspora Africana, o Tráfico Atlântico e a Agência Negra",
      targetSkill: "H11, H15 — Analisar os impactos da diáspora africana e as estratégias de resistência dos escravizados no Brasil",
      practiceModuleId: "humanas/afro-indigena",
      deepContent: `
A historiografia contemporânea sobre a escravidão no Brasil sepultou definitivamente o mito do escravizado passivo, que apenas aceitava castigos físicos sem reação. Cativos e libertos foram sujeitos históricos ativos que construíram estratégias multifacetadas de sobrevivência, negociação, revolta e afirmação comunitária.

1. O Tráfico Transatlântico e o Cais do Valongo:
Entre os séculos XVI e XIX, quase 5 milhões de africanos foram sequestrados e trazidos forçadamente para o Brasil, fazendo do país o maior território escravista das Américas.
• O Cais do Valongo (Rio de Janeiro): construído em 1811, foi o maior porto de entrada de cativos do mundo ocidental (mais de 1 milhão de pessoas). Aterrado em 1843 para dar lugar ao suntuoso Cais da Imperatriz, foi redescoberto em 2011 e declarado pela UNESCO Patrimônio Mundial como sítio de memória sensível.
• Pluralidade das Nações Africanas: os africanos escravizados não formavam um bloco homogêneo; pertenciam a dezenas de etnias distintas com línguas, tecnologias agrícolas (como a metalurgia e cultivo de arroz) e religiões diversas: povos bantos (angolas, congos, moçambiques) e povos sudaneses e iorubás (nagôs, jejes, haussás islamizados).

2. A Agência Escrava e a "Brecha Camponesa":
Conceito formulado por Ciro Flamarion Cardoso: dentro da plantation escravista, os cativos conquistaram espaços consuetudinários de autonomia:
• Roças de subsistência aos domingos e dias santos.
• Venda do excedente de farinha, galinhas e hortaliças nos mercados coloniais e feiras livres.
• Constituição do pecúlio individual e familiar, acumulado ao longo de décadas para a compra onerosa de cartas de alforria.
• Família Escrava: pesquisas paroquiais revelaram que os cativos constituíam matrimônios legítimos, redes de compadrio e solidariedade parental para proteger os filhos da venda e da dispersão senhorial.

3. Formas Cotidianas e Coletivas de Resistência:
• Resistência Cultural e Religiosa: recriação do Candomblé nos terreiros e organização de Irmandades Católicas de Homens Pretos (como a de Nossa Senhora do Rosário), que funcionavam como sociedades de socorro mútuo e compravam alforrias coletivas.
• Resistência Aberta e Conflitiva: revoltas armadas (como a Revolta dos Malês em Salvador, 1835, articulada por escravizados letrados em árabe) e a formação contínua de quilombos e mocambos em todas as províncias.
`,
      workedExamples: [
        {
          problem: "Por que a redescoberta arqueológica do Cais do Valongo no Rio de Janeiro é considerada pela historiografia e pelo ENEM um marco na disputa pela memória nacional?",
          solution: "Passo 1: Compreender o papel do Cais do Valongo como o maior entreposto de escravizados das Américas no século XIX.\nPasso 2: Analisar a intenção política de seu soterramento em 1843 sob o 'Cais da Imperatriz': tratou-se de uma política deliberada de higienismo e apagamento visual da escravidão pelas elites monárquicas.\nPasso 3: Concluir que sua titulação como Patrimônio Mundial pela UNESCO consagra o direito à memória e à verdade contra o esquecimento colonial."
        },
        {
          problem: "Explique como o conceito de 'brecha camponesa' rompe com a visão tradicional que retratava o cativo como uma 'coisa' desprovida de humanidade.",
          solution: "Passo 1: A visão arcaica enxergava o escravizado apenas como mercadoria passiva (res corporalis).\nPasso 2: A brecha camponesa demonstra que os cativos trabalhavam em roças próprias, vendiam gêneros nos mercados, formavam famílias e acumulavam recursos para comprar a liberdade.\nPasso 3: Isso comprova a agência histórica: a capacidade humana do oprimido de negociar limites com o feitor e o senhor mesmo sob um regime brutal de dominação."
        }
      ],
      realWorldApplications: [
        "Políticas de Preservação do Patrimônio Urbano: criação de circuitos de herança africana na Pequena África carioca e tombamentos de terreiros centenários pelo IPHAN.",
        "Direito das Obrigações e Relações de Trabalho: compreensão da gênese da informalidade e da precarização laboral como reflexo do modelo pós-abolição."
      ],
      commonMisconceptions: [
        "Acreditar que os africanos aceitaram a escravidão por passividade ou apatia.",
        "Supor que todos os escravizados africanos falavam a mesma língua e partilhavam as mesmas crenças antes do embarque forçado."
      ],
      quickReview: [
        "Valongo: sítio de memória sensível da maior tragédia humana das Américas.",
        "Brecha camponesa: roças de subsistência, comércio e conquista de pecúlio para alforria.",
        "Irmandades de homens pretos: redes de solidariedade, enterros dignos e caixas de alforria.",
        "Revolta dos Malês (1835): conspiração urbana na Bahia liderada por negros islamizados letrados."
      ]
    },
    {
      chapterNumber: 3,
      title: "Quilombos, Palmares e a Luta Contemporânea pela Terra",
      targetSkill: "H14, H15 — Interpretar o significado histórico dos quilombos e a regulamentação dos territórios tradicionais",
      practiceModuleId: "humanas/afro-indigena",
      deepContent: `
O quilombo foi a forma mais radical e duradoura de negação da ordem escravista nas Américas. Longe de ser um esconderijo precário, constituiu uma verdadeira república comunitária de autodeterminação.

1. O Quilombo dos Palmares e a Serra da Barriga:
Localizado no atual estado de Alagoas (Capitania de Pernambuco), Palmares sobreviveu por quase um século (c. 1590 a 1694):
• Estrutura: confederação de mocambos autônomos (Macaco, Subupira, Zumbi) abrigando mais de vinte mil pessoas (africanos, indígenas e brancos marginalizados).
• Economia: policultura diversificada (milho, mandioca, feijão, cana, frutas), metalurgia avançada de ferramentas e comércio clandestino com moradores vizinhos.
• A Cisão Histórica de 1678: o governador de Pernambuco ofereceu a paz (Tratado de Cucuau) a Ganga Zumba, propondo anistia aos nascidos em Palmares em troca da devolução dos novos fugitivos. Zumbi recusou o acordo com veemência: considerava inaceitável a liberdade parcial que devolvia irmãos negros à senzala. Em 1694, Palmares foi sitiado e destruído pelas tropas mercenárias do bandeirante Domingos Jorge Velho. Zumbi foi traído e assassinado em 20 de novembro de 1695.

2. O Conceito Antropológico e Jurídico de Quilombo Contemporâneo:
A Constituição de 1988 ressignificou o conceito no artigo 68 do Ato das Disposições Constitucionais Transitórias (ADCT):
• Superação da definição arcaica: quilombo hoje NÃO exige isolamento geográfico nem fuga no século XVII.
• Critério da Autoatribuição (Decreto 4.887/2003 e Convenção 169 da OIT): quilombolas são grupos étnico-raciais dotados de trajetória histórica própria, ancestralidade negra compartilhada, territorialidade coletiva e memória de resistência à opressão.
• O Supremo Tribunal Federal, no julgamento da ADI 3.239 (2018), confirmou a constitucionalidade do Decreto 4.887/2003, assegurando que a autoidentificação e o laudo antropológico do INCRA são os instrumentos legítimos para a titulação coletiva e inalienável das terras ancestrais.
`,
      workedExamples: [
        {
          problem: "Por que a recusa de Zumbi ao Tratado de Cucuau em 1678 é considerada um dos momentos fundantes da ética emancipatória negra no Brasil?",
          solution: "Passo 1: Analisar os termos do acordo proposto por Ganga Zumba: obter privilégios e terras para os palmarinos já nascidos livres, traindo os novos fugitivos que seriam entregues aos capitães do mato.\nPasso 2: Reconhecer a postura ética de Zumbi: a liberdade não é concessão senhorial nem pode ser construída sobre o cativeiro de irmãos de luta.\nPasso 3: Concluir que a atitude intransigente de Zumbi transformou Palmares em símbolo perpétuo de dignidade e universalidade do direito à liberdade."
        },
        {
          problem: "Como a jurisprudência do STF (ADI 3.239) interpretou o artigo 68 do ADCT em relação ao direito das comunidades quilombolas sobre o território?",
          solution: "Passo 1: A ação movida por setores ruralistas tentava limitar a titulação apenas a comunidades que comprovassem posse física ininterrupta desde o período colonial com títulos em cartório.\nPasso 2: O STF rechaçou a tese, confirmando que a autoatribuição e a posse ancestral coletiva são direitos originários de reparação histórica previstos na Constituição.\nPasso 3: A terra quilombola titulada é inalienável, imprescritível e de usufruto comum dos remanescentes."
        }
      ],
      realWorldApplications: [
        "Regularização Fundiária pelo INCRA: processos de demarcação e emissão de títulos coletivos para comunidades quilombolas em todo o Brasil (ex: Quilombo dos Macacos, Quilombo Kalunga).",
        "Políticas de Cotas Quilombolas: reserva de vagas em universidades federais e concursos públicos (Lei 14.723/2023)."
      ],
      commonMisconceptions: [
        "Achar que quilombos acabaram em 1888 com a Lei Áurea: existem milhares de comunidades quilombolas vivas e ativas em todos os estados brasileiros.",
        "Exigir documentos coloniais cartoriais para reconhecer a legitimidade de uma comunidade remanescente de quilombo."
      ],
      quickReview: [
        "Palmares: república confederada autônoma que durou um século na Serra da Barriga.",
        "Zumbi vs. Ganga Zumba: recusa da liberdade parcial e afirmação da liberdade universal.",
        "Artigo 68 do ADCT: propriedade definitiva reconhecida às comunidades remanescentes.",
        "Critério contemporâneo: autoatribuição identitária e posse coletiva do território."
      ]
    },
    {
      chapterNumber: 4,
      title: "Pensamento Social Negro, Interseccionalidade e Emancipação",
      targetSkill: "H11, H14 — Analisar as contribuições dos intelectuais negros brasileiros para a crítica da democracia racial e do racismo estrutural",
      practiceModuleId: "humanas/afro-indigena",
      deepContent: `
O pensamento social negro brasileiro construiu uma das mais robustas tradições teóricas do mundo ocidental, antecipando em décadas debates contemporâneos sobre raça, colonialidade e gênero.

1. Lélia Gonzalez: Amefricanidade, Pretuguês e Interseccionalidade:
Filósofa, antropóloga e ativista internacional, Lélia Gonzalez revolucionou as ciências sociais:
• Crítica à Democracia Racial: desnudou o mito freyreano da harmonia racial, qualificando-o como ideologia que anestesia a revolta e mantém a hierarquia branca.
• Amefricanidade: conceito decolonial que reúne a experiência histórica e cultural dos afrodescendentes e povos originários em Abya Yala (América Latina), superando o eurocentrismo.
• Pretuguês: a matriz linguística e cultural afro-atlântica que moldou o português brasileiro (marca de oralidade, rítmica e vocabulário originário dos povos bantos e iorubás).
• Interseccionalidade Precursora: demonstrou que a mulher negra sofre a articulação indissociável de racismo, sexismo e exploração de classe, desconstruindo a falsa universalidade do feminismo branco burguês.

2. Abdias do Nascimento: O Teatro Experimental do Negro (TEN) e o Quilombismo:
• Criou o TEN em 1944 para combater a prática do blackface e formar atores negros populares, promovendo alfabetização e dignidade estética.
• Em "O Genocídio do Negro Brasileiro" (1978), denunciou o embranquecimento compulsório, a esterilização e o epistemicídio das populações negras.
• Formulou a proposta política do Quilombismo como modelo democrático de socialismo comunitário afro-brasileiro.

3. Sueli Carneiro e o Enegrecimento do Feminismo:
Fundadora do Geledés - Instituto da Mulher Negra, Sueli Carneiro apontou o "epistemicídio" — aniquilação sistemática do saber e da capacidade racional de populações subalternizadas:
• Desmistificou o mito da fragilidade feminina: a mulher negra sempre trabalhou nas lavouras e no serviço doméstico sem qualquer proteção patriarcal, exigindo o enegrecimento das pautas dos direitos humanos.

4. Silvio Almeida e o Racismo Estrutural:
Distingue o racismo em três níveis fundamentais:
• Individual: conduta comportamental preconceituosa isolada.
• Institucional: desvantagem sistemática imposta pelo funcionamento de corporações e órgãos de Estado.
• Estrutural: quando o racismo não é anomalia nem desvio, mas o próprio modo normal e orgânico pelo qual a economia, o direito e a política se organizam em países pós-escravocratas.
`,
      workedExamples: [
        {
          problem: "Como a categoria teórica de 'Amefricanidade' formulada por Lélia Gonzalez desconstrói a hegemonia epistêmica ocidental na análise da América Latina?",
          solution: "Passo 1: A categoria forjada por Lélia Gonzalez recusa a visão de que a América Latina é mera extensão periférica da Europa branca.\nPasso 2: Amefricanidade resgata a agência compartilhada de africanos escravizados e povos indígenas nativos que moldaram a linguagem ('pretuguês'), a espiritualidade e as sociabilidades do continente.\nPasso 3: Concluir que se trata de uma ferramenta decolonial de afirmação identitária contra o imperialismo euro-americano."
        },
        {
          problem: "Diferencie, com base na sociologia de Silvio Almeida, um ato de racismo institucional de uma manifestação de racismo estrutural.",
          solution: "Passo 1: O racismo institucional expressa-se quando determinadas instituições públicas ou privadas criam barreiras tácitas que impedem negros de alcançar cargos de chefia ou quando a polícia atua com filtragem racial explícita.\nPasso 2: O racismo estrutural vai além: é a própria matriz fundante que organiza a distribuição histórica desigual de renda, propriedade e poder em toda a sociedade, operando cotidianamente mesmo sem ofensas individuais intencionais.\nPasso 3: Concluir que combater o racismo estrutural exige transformar as próprias bases socioeconômicas e jurídicas da nação."
        }
      ],
      realWorldApplications: [
        "Elaboração de Políticas Públicas Educacionais: aplicação obrigatória das diretrizes curriculares das Leis 10.639/03 e 11.645/08 na formação de professores.",
        "Diversidade em Cargos Corporativos: adoção de comitês de governança ESG com metas obrigatórias de equidade racial e de gênero no mercado de trabalho."
      ],
      commonMisconceptions: [
        "Reduzir o racismo a um problema moral individual que se resolve apenas com gentileza, ignorando sua dimensão estrutural e institucional.",
        "Considerar o feminismo negro como um movimento separatista, quando na verdade ele aprofunda a universalidade real dos direitos de todas as mulheres."
      ],
      quickReview: [
        "Lélia Gonzalez: pioneira da interseccionalidade, Amefricanidade e pretuguês.",
        "Abdias do Nascimento: TEN, combate ao embranquecimento e conceito de Quilombismo.",
        "Sueli Carneiro: enegrecer o feminismo e combate ao epistemicídio acadêmico.",
        "Silvio Almeida: distinção entre racismo individual, institucional e estrutural."
      ]
    },
    {
      chapterNumber: 5,
      title: "Marcos Constitucionais, Direitos Originários e Ações Afirmativas",
      targetSkill: "H14, H15 — Avaliar os instrumentos jurídicos e as políticas públicas de promoção da igualdade racial e dos direitos indígenas",
      practiceModuleId: "humanas/afro-indigena",
      deepContent: `
A Constituição Cidadã de 1988 representou uma virada histórica na garantia de direitos fundamentais para as populações indígenas e afro-brasileiras, consolidando o princípio da igualdade material e a legitimidade das ações afirmativas de reparação.

1. O Artigo 231 da CF/88 e a Teoria do Indigenato:
A Carta de 1988 rompeu com a ideologia secular da tutela paternalista e do assimilacionismo (que pretendia extinguir a identidade indígena integrando-a à força à sociedade nacional):
• Reconhecimento da organização social, línguas, crenças e costumes ancestrais.
• Direitos Originários sobre as terras tradicionalmente ocupadas: a teoria do indigenato postula que o direito indígena à terra é anterior à própria criação do Estado brasileiro e à independência de 1822. O Estado não "concede" a terra: apenas reconhece e demarca um direito imemorial pré-existente.
• Posse permanente e usufruto exclusivo das riquezas do solo, rios e lagos. As terras indígenas são bens públicos da União, inalienáveis e indisponíveis.

2. A Inconstitucionalidade da Tese do Marco Temporal:
Em setembro de 2023, o STF julgou o RE 1017365 com repercussão geral, rejeitando a tese do Marco Temporal por 9 votos a 2:
• Tese refutada: exigia que os indígenas estivessem fisicamente ocupando a terra em 5 de outubro de 1988 para terem direito à demarcação.
• Fundamento da decisão do STF: reconheceu que muitos povos foram forçadamente expulsos de seus territórios por massacres, pistolagem e ações da ditadura militar antes de 1988 (renitente esbulho), sendo inconstitucional penalizar as vítimas da violência com a perda perpétua de suas terras originárias.

3. As Ações Afirmativas e o Princípio da Igualdade Material:
• Julgamento da ADPF 186 pelo STF (2012): declarou constitucionais as cotas étnico-raciais nas universidades públicas. A Corte assentou que a igualdade puramente formal perante a lei não é suficiente para neutralizar desvantagens estruturais acumuladas por séculos de escravidão. O Estado tem o dever de tratar desigualmente os desiguais para produzir equidade real (igualdade material).
• Lei de Cotas (Lei nº 12.711/2012 e sua revisão pela Lei nº 14.723/2023): reserva de vagas no ensino superior federal para estudantes de escolas públicas, com subcotas étnico-raciais para pretos, pardos, indígenas e quilombolas, além de pessoas com deficiência.
• O Estatuto da Igualdade Racial (Lei nº 12.288/2010): consagração de diretrizes para superação das desigualdades de saúde, moradia, trabalho e cultura.
`,
      workedExamples: [
        {
          problem: "Explique a diferença jurídica entre a teoria do indigenato e a teoria do fato indígena no debate sobre a demarcação de terras no Brasil.",
          solution: "Passo 1: A teoria do indigenato sustenta que o direito dos povos originários à posse tradicional de suas terras é congênito, primário e anterior ao próprio nascimento do Estado soberano brasileiro.\nPasso 2: A teoria do fato indígena (base do Marco Temporal) defendia que a posse só existiria a partir do reconhecimento estatal concreto em 1988.\nPasso 3: O STF consagrou o indigenato, reafirmando que o esbulho renitente praticado no passado não apaga o direito imemorial dos povos indígenas."
        },
        {
          problem: "Por que a adoção de cotas étnico-raciais nas universidades públicas não fere o princípio constitucional da isonomia, segundo a jurisprudência do STF (ADPF 186)?",
          solution: "Passo 1: O princípio da isonomia possui duas dimensões: a formal (todos são iguais perante a lei na teoria) e a material (o dever de intervir para aproximar os pontos de partida reais).\nPasso 2: Se o Estado aplicar critérios idênticos a grupos que sofreram séculos de desvantagens e segregação estrutural, ele perpetua a exclusão.\nPasso 3: As ações afirmativas são mecanismos constitucionais legítimos de justiça distributiva e reparação para concretizar a igualdade material."
        }
      ],
      realWorldApplications: [
        "Acesso e Democratização do Ensino Superior: ingresso de mais de 1 milhão de estudantes negros e indígenas nas universidades públicas federais pela Lei 12.711/2012.",
        "Demarcação de Terras Indígenas pela FUNAI e Ministério dos Povos Indígenas: cumprimento das ordens judiciais de desintrusão de invasores em terras homologadas (como na TI Yanomami)."
      ],
      commonMisconceptions: [
        "Acreditar que ações afirmativas são privilégios sem prazo: são medidas temporárias de reparação histórica fundamentadas na igualdade material.",
        "Confundir terra indígena com propriedade privada particular que possa ser vendida ou hipotecada."
      ],
      quickReview: [
        "Artigo 231 da CF/88: direitos originários, posse permanente e usufruto exclusivo.",
        "Marco Temporal derrubado pelo STF: o direito à terra não depende de posse física em 1988.",
        "ADPF 186 e Lei de Cotas: igualdade material e democratização da universidade pública.",
        "Estatuto da Igualdade Racial (Lei 12.288/10): proteção integral e combate à discriminação."
      ]
    }
  ]
};
