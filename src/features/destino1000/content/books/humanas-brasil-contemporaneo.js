/**
 * LIVRO DIDÁTICO DIGITAL: Brasil Contemporâneo: Da Era Vargas à Redemocratização
 * Área: Ciências Humanas e suas Tecnologias (História e Sociologia)
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_HUMANAS_BRASIL_CONTEMPORANEO = {
  id: "livro-humanas-brasil-contemporaneo",
  area: "humanas",
  title: "Brasil Contemporâneo: De Vargas a 1988",
  subtitle: "As transformações do Estado, do trabalho e da cidadania na história republicana",
  estimatedReadingTimeMinutes: 55,
  badge: "Livro Essencial • História do Brasil",
  coverColor: "from-amber-950 to-orange-900",
  prerequisites: [
    "Contexto da Primeira República (República Oligárquica, coronelismo e voto de cabresto)",
    "Crise de 1929 e ascensão de regimes autoritários no entreguerras mundial"
  ],
  learningObjectives: [
    "Analisar o projeto varguista de modernização conservadora e a criação da legislação trabalhista",
    "Compreender a ambiguidade da Era Vargas entre avanços sociais e censura autoritária no Estado Novo",
    "Identificar as contradições do modelo desenvolvimentista de JK e a interiorização da capital",
    "Compreender a estrutura de poder da Ditadura Militar, o endurecimento do AI-5 e as ilusões do Milagre Econômico",
    "Avaliar o processo de redemocratização, a campanha das Diretas Já e os pilares da Constituição de 1988"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "A Era Vargas (1930-1945): O Pai dos Pobres e a Mãe dos Ricos",
      targetSkill: "H13, H14 — Analisar a atuação do Estado e a conformação de direitos trabalhistas",
      practiceModuleId: "humanas/era-vargas-populismo",
      deepContent: `
A Revolução de 1930 encerrou a hegemonia cafeeira da Primeira República, inaugurando um Estado centralizador, nacionalista e intervencionista.

1. As Três Fases da Era Vargas:
• Governo Provisório (1930-1934): Centralização do poder com interventores federais nos estados, Revolução Constitucionalista de 1932 em São Paulo e convocação da Assembleia Constituinte de 1934 (que consagrou o voto secreto, o voto feminino e a criação da Justiça do Trabalho).
• Governo Constitucional (1934-1937): Polarização ideológica extrema entre a Ação Integralista Brasileira (AIB, fascista de Plínio Salgado) e a Aliança Nacional Libertadora (ANL, antifascista de esquerda liderada por Luís Carlos Prestes). Em 1935, a Intentona Comunista serviu de pretexto para Vargas decretar estado de sítio.
• Estado Novo (1937-1945): Ditadura explícita outorgada por meio da Constituição 'Polaca'. Fechamento do Congresso, dissolução de partidos, censura ferrenha e repressão violenta pelo DOPS (comandado por Filinto Müller).

2. A Política Trabalhista: A 'Cidadania Regulada':
Vargas não concedeu direitos por caridade; tratou-se de uma estratégia de coaptação do proletariado urbano e combate ao comunismo.
• Criação do Ministério do Trabalho, Indústria e Comércio (1930).
• Consolidação das Leis do Trabalho - CLT (1943): salário mínimo, jornada de 8 horas, férias remuneradas, previdência social e carteira de trabalho.
• Estrutura Sindical Corporativista: Sindicatos atrelados ao Ministério do Trabalho (estrutura copiada da Carta del Lavoro da Itália fascista). Apenas trabalhadores sindicalizados e com carteira assinada tinham acesso pleno à cidadania ('cidadania regulada', conceito do sociólogo Wanderley Guilherme dos Santos). Os trabalhadores rurais ficaram completamente excluídos dessas conquistas!

3. O DIP e a Propaganda Política:
O Departamento de Imprensa e Propaganda (DIP, 1939) exercia censura prévia aos jornais, rádio e cinema, e produzia a imagem do 'Pai dos Pobres' através de festas multitudinárias no Estádio de São Januário em comemoração ao 1º de Maio e do programa de rádio diário 'A Hora do Brasil'.

4. A Industrialização de Base:
Aproveitando a Segunda Guerra Mundial, Vargas adotou uma diplomacia pragmática e obteve financiamento norte-americano para fundar as indústrias estatais de base:
- Companhia Siderúrgica Nacional (CSN, em Volta Redonda);
- Companhia Vale do Rio Doce (mineração);
- Fábrica Nacional de Motores (FNM).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: A 'Cidadania Regulada' na CLT",
          enunciado: "Na análise sociológica de Wanderley Guilherme dos Santos, a cidadania no Brasil durante a Era Vargas caracterizou-se pelo modelo da 'cidadania regulada'. Qual foi a principal limitação desse modelo em relação à universalização dos direitos sociais?",
          stepByStep: [
            "Passo 1: Recupere a tese central da cidadania regulada:",
            "Para ser considerado cidadão com direitos civis e previdenciários garantidos pelo Estado varguista, o indivíduo precisava possuir uma profissão formal reconhecida em lei e carteira de trabalho assinada.",
            "Passo 2: Identifique os grupos excluídos desse arranjo:",
            "A esmagadora maioria dos trabalhadores brasileiros da década de 1930 e 1940 residia no campo (camponeses, meeiros, boias-frias), desprovidos de carteira de trabalho e sem legislação trabalhista.",
            "Além disso, empregadas domésticas e trabalhadores informais urbanos não tinham direito à previdência.",
            "Conclusão: A cidadania não era universal (para todos os seres humanos pelo simples fato de serem pessoas), mas sim corporativa e condicionada ao trabalho formal urbano atrelado ao Estado."
          ],
          gabarito: "Vincular a cidadania e os direitos sociais estritamente ao trabalho formal urbano, excluindo trabalhadores rurais e informais."
        }
      ],
      realWorldApplications: [
        "Debates contemporâneos sobre reformas trabalhistas e previdenciárias e o futuro da CLT.",
        "Análise de estratégias de propaganda política estatal e comunicação governamental nas mídias de massa.",
        "Políticas de industrialização nacional e soberania de recursos minerais e energéticos."
      ],
      commonMisconceptions: [
        "Achar que Vargas concedeu direitos aos trabalhadores rurais (os trabalhadores rurais só conquistaram direitos parciais no Estatuto do Trabalhador Rural de 1963 e na CF/88).",
        "Achar que o Estado Novo era uma democracia republicana (era uma ditadura personalista com tortura, censura e sem eleições).",
        "Acreditar que a CLT foi uma cópia pura de benevolência varguista sem relação com a luta histórica e greves do movimento operário das décadas anteriores."
      ],
      quickReviewPoints: [
        "1930-1945: Estado forte, centralizador e nacionalista.",
        "CLT (1943): direitos trabalhistas urbanos sob tutela e controle sindical corporativo.",
        "Indústria de base estatal: CSN, Vale, Álcalis.",
        "DIP: censura prévia e culto à imagem do presidente."
      ]
    },
    {
      chapterNumber: 2,
      title: "O Desenvolvimentismo e JK: 50 Anos em 5",
      targetSkill: "H13, H15 — Avaliar impactos socioeconômicos da industrialização acelerada",
      practiceModuleId: "humanas/era-vargas-populismo",
      deepContent: `
O período entre 1945 e 1964, frequentemente denominado 'República Populista' ou 'Experiência Democrática', viveu o choque entre dois projetos econômicos: o nacional-desenvolvimentismo estatal (Vargas, João Goulart) e o liberalismo cosmopolita pró-capital estrangeiro (UDN, Eugênio Gudin).

1. O Governo Juscelino Kubitschek (1956-1961):
JK governou sob o lema ufanista '50 anos de progresso em 5 anos de governo', sintetizado no ambicioso Plano de Metas (31 metas distribuídas em 5 eixos: Energia, Transportes, Indústria de Base, Alimentação e Educação).

2. O Tripé Econômico do Desenvolvimentismo:
O crescimento econômico de JK baseou-se na articulação de três capitais:
1. Capital Estatal: Investimentos em infraestrutura pesada (abastecimento de energia hidrelétrica como Furnas e Tres Marias, e refinarias de petróleo).
2. Capital Privado Estrangeiro (Multinacionais): Atração massiva de montadoras automobilísticas internacionais (Volkswagen, Ford, General Motors), subsidiadas por incentivos cambiais da Instrução 113 da SUMOC.
3. Capital Privado Nacional: Produção de autopeças e bens de consumo não duráveis.

3. O Rodoviarismo e a Construção de Brasília:
• Opção Rodoviarista: JK preteriu as ferrovias e o transporte hidroviário, concentrando os investimentos públicos na abertura de rodovias asfaltadas (ex: Belém-Brasília). Essa decisão estratégica atendeu ao lobby das montadoras multinacionais e gerou uma dependência crônica do transporte rodoviário a diesel no Brasil.
• Inauguração de Brasília (1960): Desenhada por Lúcio Costa e Oscar Niemeyer, a nova capital transferiu o poder político do Rio de Janeiro para o Centro-Oeste com os objetivos oficiais de interiorizar o desenvolvimento e resguardar o centro decisório das pressões sindicais cariocas. A construção foi executada pelo suor dos 'candangos' (migrantes nordestinos pobres), que logo foram empurrados para as cidades-satélites segregadas.

4. As Faturas do Milagre de JK:
O crescimento acelerado foi financiado por emissão descontrolada de moeda e empréstimos externos, legando aos governos seguintes (Jânio Quadros e Jango) uma espiral inflacionária galopante, explosão da dívida externa e violenta concentração de renda.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O Rodoviarismo no Modelo de JK",
          enunciado: "Ao implementar o Plano de Metas na década de 1950, o governo JK priorizou a construção de rodovias em detrimento da malha ferroviária existente no país. Quais foram os impactos estruturais de longo prazo dessa escolha modal para a logística e a matriz de transportes brasileira?",
          stepByStep: [
            "Passo 1: Conecte a decisão política aos interesses industriais da época:",
            "Para atrair as multinacionais automobilísticas, o Brasil precisava garantir mercado consumidor rápido para caminhões e automóveis de passeio.",
            "Passo 2: Avalie as consequências de eficiência e custo:",
            "Para um país de dimensões continentais como o Brasil, o transporte de cargas a granel (soja, minério) por caminhões sobre rodovias tem custo por tonelada-quilômetro muito mais elevado do que o ferroviário e hidroviário.",
            "Passo 3: Identifique os desdobramentos contemporâneos:",
            "Isso gerou uma matriz de transportes altamente poluidora (emissões de CO₂), cara, dependente da oscilação do preço internacional do diesel e vulnerável a paralisações de caminhoneiros."
          ],
          gabarito: "Dependência excessiva do transporte rodoviário a diesel, encarecendo os fretes e elevando os custos de escoamento da produção nacional."
        }
      ],
      realWorldApplications: [
        "Crises contemporâneas de abastecimento provocadas por greves no setor rodoviário.",
        "Debates sobre transição energética, ferrovia Norte-Sul e cabotagem costeira no Brasil.",
        "Segregação socioespacial no Distrito Federal (Plano Piloto vs. Regiões Administrativas periféricas)."
      ],
      commonMisconceptions: [
        "Achar que Brasília foi construída sem desigualdades sociais (a segregação entre candangos periféricos e burocratas do Plano Piloto existiu desde a fundação).",
        "Achar que a opção rodoviarista decorreu de falta de tecnologia ferroviária (foi uma decisão deliberada para atrair a indústria automobilística estrangeira).",
        "Ignorar que o governo JK terminou em grave crise inflacionária e endividamento externo."
      ],
      quickReviewPoints: [
        "Plano de Metas: '50 anos em 5' (foco em energia e transportes).",
        "Tripé econômico: Estado (infraestrutura) + Multinacionais (automobilismo) + Privado nacional.",
        "Opção rodoviarista em detrimento das ferrovias.",
        "Brasília (1960): interiorização geopolítica e criação de cidades-satélites."
      ]
    },
    {
      chapterNumber: 3,
      title: "A Ditadura Militar (1964-1985): Repressão e Milagre Econômico",
      targetSkill: "H14, H15 — Analisar mecanismos autoritários e violações de direitos humanos",
      practiceModuleId: "humanas/brasil-republica",
      deepContent: `
Em 31 de março de 1964, um golpe civil-militar depôs o presidente João Goulart sob a justificativa de combater a corrupção e a suposta 'ameaça comunista' das Reformas de Base. O regime autoritário durou 21 anos.

1. A Doutrina de Segurança Nacional e os Atos Institucionais:
O regime manteve uma fachada de legalidade institucional enquanto governava por Atos Institucionais (AIs) arbitrários acima da Constituição:
• AI-1 (1964): Cassação de mandatos de opositores e suspensão de direitos políticos.
• AI-2 (1965): Extinção de todos os partidos políticos e instauração do bipartidarismo forçado:
  - ARENA (Aliança Renovadora Nacional, partido governista de sustentação);
  - MDB (Movimento Democrático Brasileiro, oposição consentida e vigiada).
• AI-5 (13 de dezembro de 1968, Governo Costa e Silva): O ápice do terror de Estado.
  - Fechamento do Congresso Nacional;
  - Censura prévia absoluta aos meios de comunicação, teatro, música e imprensa;
  - Suspensão da garantia de habeas corpus para crimes políticos;
  - Poder presidencial para demitir juízes, confiscar bens e cassar qualquer cidadão sem julgamento.

2. O Aparelho Repressivo e a Violência de Estado:
A repressão foi institucionalizada e descentralizada através dos DOI-CODI (Destacamento de Operações de Informações - Centro de Operações de Defesa Interna) e do SNI (Serviço Nacional de Informações). Milhares de opositores, líderes sindicais, camponeses, indígenas e estudantes foram presos arbitrariamente, torturados nos quartéis, assassinados ou dados como desaparecidos políticos.

3. O 'Milagre Econômico' (1968-1973):
Sob a gestão do ministro Delfim Netto (governo Médici), o PIB brasileiro cresceu a taxas de até 11% ao ano, acompanhado por propaganda ufanista intensa ('Brasil, ame-o ou deixe-o').
• O que financiou o milagre?
  - Arrocho salarial implacável sobre a classe trabalhadora (os salários reais caíram enquanto a produção subia);
  - Endividamento externo astronômico em bancos estrangeiros a juros flutuantes;
  - Obras faraônicas de integração de alto impacto ambiental (Rodovia Transamazônica, Ponte Rio-Niterói, Usina de Itaipu).
• A célebre frase de Delfim Netto: 'É preciso primeiro fazer o bolo crescer, para depois dividi-lo'. O bolo cresceu, mas foi dividido apenas entre a elite econômica, transformando o Brasil em um dos países mais desiguais do planeta.
O milagre colapsou a partir de 1973 com a Crise Internacional do Petróleo, mergulhando o país na 'Década Perdida' dos anos 1980 com hiperinflação e recessão.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O AI-5 e o Fechamento do Regime",
          enunciado: "O Ato Institucional nº 5 (AI-5), baixado em 1968, é considerado pela historiografia como o marco definitivo do fechamento ditatorial brasileiro. Qual foi o impacto da suspensão do habeas corpus prevista pelo Artigo 10 do AI-5 sobre as liberdades civis da população?",
          stepByStep: [
            "Passo 1: Defina a função jurídica constitucional do habeas corpus:",
            "O habeas corpus é a garantia fundamental que protege o cidadão contra prisões ilegais, arbitrárias ou sem flagrante/ordem judicial fundamentada, exigindo que o preso seja apresentado a um juiz.",
            "Passo 2: Analise o efeito da sua supressão em 1968:",
            "Ao suspender o habeas corpus para 'crimes contra a segurança nacional', a ditadura deu carta branca aos agentes de inteligência e forças de repressão militar (DOI-CODI, DOPS) para prenderem quem quisessem, pelo tempo que quisessem, sem qualquer controle do Poder Judiciário.",
            "Passo 3: Conclua sobre as consequências humanas:",
            "Essa blindagem contra a fiscalização judicial facilitou a prática sistemática de torturas físicas e assassinatos sob custódia estatal nos porões da ditadura."
          ],
          gabarito: "Permitiu prisões arbitrárias clandestinas e sequestros de Estado, eliminando o controle do Judiciário e viabilizando a tortura sistemática de prisioneiros políticos."
        }
      ],
      realWorldApplications: [
        "Relatório Final da Comissão Nacional da Verdade (CNV, 2014) sobre crimes contra a humanidade.",
        "Vigilância contra retrocessos autoritários e defesa do Estado Democrático de Direito.",
        "Análise dos impactos socioambientais da Transamazônica e terras indígenas demarcadas."
      ],
      commonMisconceptions: [
        "Achar que o 'Milagre Econômico' beneficiou igualmente todos os brasileiros (gerou brutal arrocho salarial e concentração de renda sem precedentes).",
        "Acreditar que o regime militar foi um período de inflação baixa (terminou com hiperinflação acima de 200% ao ano e dívida externa astronômica).",
        "Achar que não havia censura nas redações (fiscais da censura ficavam dentro dos jornais censurando matérias e forçando a publicação de receitas de bolo e sonetos de Camões na primeira página)."
      ],
      quickReviewPoints: [
        "1964-1985: 21 anos de ditadura militar sob a Doutrina de Segurança Nacional.",
        "AI-5 (1968): fechamento do Congresso, censura prévia e fim do habeas corpus.",
        "Milagre Econômico (1968-1973): PIB alto financiado por dívida externa e arrocho salarial ('bolo cresce, mas não é dividido').",
        "DOI-CODI: repressão sistemática, tortura e desaparecimentos forçados."
      ]
    },
    {
      chapterNumber: 4,
      title: "A Redemocratização e a Constituição Cidadã de 1988",
      targetSkill: "H14, H16 — Compreender a transição democrática e os direitos civis e sociais",
      practiceModuleId: "humanas/brasil-republica",
      deepContent: `
A transição democrática brasileira foi lenta, gradual e segura, fruto do desgaste econômico do regime e da massiva pressão da sociedade civil organizada.

1. A Abertura Política (Governos Geisel e Figueiredo):
• O presidente Geisel (1974-1979) iniciou a abertura política controlada diante do avanço eleitoral do MDB nas eleições legislativas.
• O 'Pacote de Abril' (1977): tentativa de frear a oposição criando os 'senadores biônicos' (escolhidos indiretamente).
• Revogação do AI-5 em 1978.
• Lei da Anistia (1979): promulgada no governo Figueiredo, permitiu o retorno de exilados políticos e libertação de presos, mas foi formulada de maneira recíproca/ampla para blindar agentes da repressão estatal contra julgamentos por crimes de tortura.
• Fim do Bipartidarismo (1979): retorno do pluripartidarismo (PMDB, PDS, PT, PDT, PTB).

2. A Campanha das Diretas Já (1983-1984):
A maior mobilização cívica da história brasileira reuniu milhões de pessoas nas ruas exigindo o restabelecimento de eleições presidenciais diretas através da Proposta de Emenda Constitucional (PEC) Dante de Oliveira.
Apesar da comoção nacional, a emenda não alcançou os 2/3 dos votos necessários na Câmara dos Deputados em abril de 1984.

3. O Colégio Eleitoral e a Eleição de Tancredo Neves (1985):
A oposição organizada na Aliança Democrática (PMDB + dissidentes do PDS na Frente Liberal) disputou o Colégio Eleitoral indireto, derrotando o candidato governista Paulo Maluf. A vitória de Tancredo Neves e José Sarney encerrou 21 anos de governos militares. Com a trágica morte de Tancredo às vésperas da posse, o vice José Sarney assumiu a presidência.

4. A Constituição Cidadã de 1988 (Marco Maior da Cidadania):
Elaborada pela Assembleia Nacional Constituinte presidida por Ulysses Guimarães:
• Art. 1º e 5º: Princípio da dignidade da pessoa humana e igualdade perante a lei, criminalizando a tortura e tornando o racismo crime inafiançável e imprescritível.
• Criação do Sistema Único de Saúde (SUS) universal e gratuito ('Saúde é direito de todos e dever do Estado').
• Conquistas Trabalhistas: Jornada semanal de 44 horas, seguro-desemprego, licença-maternidade de 120 dias e licença-paternidade.
• Direito de voto assegurado aos analfabetos (facultativo) e aos jovens de 16 e 17 anos.
• Reconhecimento dos direitos territoriais e culturais dos povos indígenas (Art. 231) e quilombolas.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O Papel Cidadão da Carta Magna de 1988",
          enunciado: "Ao promulgar a Constituição Federal de 1988, o deputado Ulysses Guimarães declarou: 'Temos ódio à ditadura. Ódio e nojo. Amaldiçoamos a tirania onde quer que ela desgrace homens e nações'. De que maneira a Constituição de 1988 rompeu estruturalmente com o ordenamento jurídico autoritário herdado do período militar?",
          stepByStep: [
            "Passo 1: Compare as duas ordens jurídicas:",
            "A Constituição de 1967/69 colocava a 'Segurança Nacional' e o poder punitivo do Estado acima dos indivíduos.",
            "A Constituição de 1988 inverteu essa hierarquia, colocando a Dignidade da Pessoa Humana e as Garantias Fundamentais no ápice do ordenamento jurídico (cláusulas pétreas que nem emendas podem abolir).",
            "Passo 2: Identifique os novos mecanismos institucionais de proteção:",
            "Fortalecimento do Ministério Público independente como defensor da sociedade civil, criação do habeas data, mandado de segurança coletivo e ampliação dos direitos sociais (SUS, Previdência e Educação como deveres inalienáveis do Estado)."
          ],
          gabarito: "Consolidou o Estado Democrático de Direito, subordinou o poder estatal aos direitos humanos inalienáveis e instituiu sistemas públicos universais de proteção social."
        }
      ],
      realWorldApplications: [
        "Defesa da universalidade e gratuidade do SUS e do Programa Nacional de Imunizações (PNI).",
        "Demarcação de terras indígenas e proteção constitucional de povos originários.",
        "Atuação do Ministério Público e da Defensoria Pública na garantia do acesso à justiça para minorias."
      ],
      commonMisconceptions: [
        "Achar que as Diretas Já elegeram o presidente pelo voto popular imediato (a emenda foi rejeitada no Congresso e a eleição de 1985 foi indireta no Colégio Eleitoral).",
        "Achar que a Lei da Anistia de 1979 puniu os torturadores da ditadura (a anistia foi ampla e irrestrita, blindando os oficiais militares).",
        "Ignorar que a Constituição de 1988 garantiu o voto facultativo aos analfabetos pela primeira vez na história da República."
      ],
      quickReviewPoints: [
        "Abertura lenta e gradual: revogação do AI-5 (1978) e Lei da Anistia (1979).",
        "Diretas Já (1984): multidões nas ruas, mas derrota da PEC Dante de Oliveira.",
        "Tancredo e Sarney (1985): vitória indireta no Colégio Eleitoral encerra a ditadura.",
        "Constituição de 1988: Constituição Cidadã, dignidade humana, SUS universal, racismo inafiançável e voto facultativo a analfabetos."
      ]
    }
  ]
};
