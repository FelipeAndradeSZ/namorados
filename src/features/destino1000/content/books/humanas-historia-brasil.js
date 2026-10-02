/**
 * LIVRO DIDÁTICO DIGITAL: História do Brasil: Das Sociedades Indígenas ao Século XXI
 * Área: Ciências Humanas e suas Tecnologias (História)
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_HUMANAS_HISTORIA_BRASIL = {
  id: "livro-humanas-historia-brasil",
  area: "humanas",
  title: "História do Brasil: Das Sociedades Indígenas à Contemporaneidade",
  subtitle: "Processos estruturais, lutas sociais, formação do Estado nacional e cidadania",
  estimatedReadingTimeMinutes: 75,
  badge: "Livro Essencial • História do Brasil",
  coverColor: "from-amber-950 to-orange-900",
  chapters: [
    {
      id: "cap-1-brasil-colonial",
      chapterNumber: 1,
      title: "O Período Colonial e o Sistema Agroexportador Escravista",
      subtitle: "Estrutura do plantation canavieiro, tráfico transatlântico e dinâmicas de resistência",
      readTimeMinutes: 15,
      learningObjectives: [
        "Compreender a montagem do sistema colonial mercantilista e o papel do exclusivo metropolitano.",
        "Analisar as características do latifúndio monocultor açucareiro e a sociedade patriarcal.",
        "Identificar o tráfico transatlântico e as formas ativas de resistência negra e indígena (quilombos, revoltas e negociações)."
      ],
      targetSkills: ["H11 - Identificar registros sobre a formação social", "H12 - Analisar conflitos da colonização"],
      content: `
### 1. A Montagem do Antigo Sistema Colonial

O processo de colonização do território brasileiro insere-se no quadro da expansão marítimo-comercial europeia e do mercantilismo dos séculos XVI e XVII. A Coroa portuguesa buscava integrar as terras americanas em uma economia complementar, orientada pelo **exclusivo comercial metropolitano** (o chamado pacto colonial).

O modelo adotado para a exploração em larga escala alicerçou-se no tripé clássico do *plantation*:
1. **Latifúndio**: Grandes extensões territoriais concentradas em sesmarias concedidas pela Coroa a colonos fidalgos.
2. **Monocultura de exportação**: Inicialmente centrada na cana-de-açúcar (produto de alto valor agregado na Europa) e posteriormente no café.
3. **Mão de obra escravizada**: Substituição gradual e violenta do escambo e escravização de povos indígenas pelo cativeiro de africanos trazidos pelo tráfico negreiro atlântico.

### 2. A Sociedade Canavieira e o Patriarcalismo

No Nordeste colonial (com ênfase no Recôncavo Baiano e na Zona da Mata pernambucana), desenvolveu-se uma sociedade rigidamente estratificada e ruralizada em torno da figura do **Senhor de Engenho**. 

Gilberto Freyre, em sua obra clássica *Casa-Grande & Senzala* (1933), ressaltou a dimensão do **patriarcalismo**, no qual o senhor exercia autoridade quase absoluta sobre a esposa, filhos, agregados, trabalhadores livres empobrecidos e a massa escravizada. A posse do engenho conferia não apenas riqueza econômica, mas também prestígio político e domínio das instituições locais através das Câmaras Municipais (os 'homens-bons').

### 3. A Escravidão e as Redes de Resistência

A historiografia contemporânea (João José Reis, Sidney Chalhoub, Stuart Schwartz) superou a visão do escravizado como mero objeto passivo da dominação senhorial. A escravidão brasileira foi permanentemente confrontada por múltiplas modalidades de agência histórica dos cativos:
- **Resistência coletiva direta**: Formação de mocambos e quilombos, destacando-se o Quilombo dos Palmares na Serra da Barriga (liderado por Ganga Zumba e Zumbi), que reuniu milhares de pessoas durante mais de um século.
- **Resistência cotidiana e cultural**: Sincretismo religioso, preservação de laços de parentesco e irmandades religiosas negras (como as Irmandades de Nossa Senhora do Rosário dos Homens Pretos).
- **Resistência jurídica e negociação**: Lutas por alforrias, constituição de pecúlio e acordos de trabalho no interior do cativeiro.
      `,
      workedExample: {
        scenario: "Questão clássica do ENEM sobre o papel do tráfico atlântico e da escravidão na dinâmica colonial.",
        resolution: "O tráfico transatlântico de africanos não foi apenas um instrumento de suprimento de braços, mas um dos negócios mais lucrativos do capitalismo mercantil internacional, movimentando capitais, navios, mercadorias e seguros na Europa, África e Américas."
      },
      realWorldApplication: "Compreender a escravidão colonial é a chave sociológica para analisar o racismo estrutural contemporâneo, a segregação espacial nas periferias urbanas e a desigualdade de renda no Brasil de hoje.",
      commonMisconceptions: [
        "Achar que a escravidão indígena foi abandonada porque o indígena 'não aguentava o trabalho': a transição para o africano deveu-se à alta lucratividade do tráfico negreiro mercantil e à resistência ativa e fuga no território continental.",
        "Acreditar que os quilombos eram habitados unicamente por escravizados fugidos: abrigavam também indígenas desterrados, brancos pobres marginalizados e desertores militares."
      ],
      quickReview: [
        "Mercantilismo = Exclusivo comercial + Metalismo + Balança comercial favorável.",
        "Plantation = Latifúndio + Monocultura de exportação + Mão de obra escravizada.",
        "Resistência = Agência ativa dos cativos (quilombos, irmandades, negociações)."
      ]
    },
    {
      id: "cap-2-independencia-segundo-reinado",
      chapterNumber: 2,
      title: "Da Independência ao Segundo Reinado (1822–1889)",
      subtitle: "Construção do Estado Imperial, centralização política e a economia cafeeira",
      readTimeMinutes: 16,
      learningObjectives: [
        "Analisar o processo de ruptura com Portugal e a singularidade da monarquia brasileira na América.",
        "Discutir a Constituição outorgada de 1824 e a dinâmica do Poder Moderador.",
        "Compreender a economia cafeeira, a Lei de Terras de 1850 e o processo gradual de abolição da escravidão."
      ],
      targetSkills: ["H11 - Formação do Estado Nacional", "H13 - Transformações socioeconômicas no século XIX"],
      content: `
### 1. Uma Independência Conservadora (1822)

Enquanto a América espanhola fragmentou-se em repúblicas após violentas guerras civis populares, a Independência do Brasil (1822) caracterizou-se pela **manutenção da unidade territorial, do regime monárquico e da escravidão**. O processo foi conduzido de cima para baixo por uma aliança entre o príncipe herdeiro D. Pedro I e as elites latifundiárias do Centro-Sul (José Bonifácio de Andrada e Silva).

### 2. A Constituição de 1824 e a Centralização Política

Após fechar a Assembleia Constituinte de 1823 na truculenta 'Noite da Agonia', D. Pedro I outorgou a Carta Constitucional de 1824:
- **Quatro Poderes**: Executivo, Legislativo, Judiciário e o **Poder Moderador** (privativo e vitalício do Imperador, sagrado e inviolável).
- **Voto Censitário e Indireto**: Exigia renda mínima em moeda, alijando trabalhadores pobres e escravizados do sufrágio.
- **Padroado e Beneplácito**: A Igreja Católica era religião oficial, subordinada administrativamente às decisões do Estado.

A reação popular e regional a esse autoritarismo eclodiu na **Confederação do Equador (1824)** em Pernambuco, brutalmente sufocada com a execução de Frei Caneca. O descontentamento com o imperador culminou em sua abdicação em 7 de abril de 1831.

### 3. O Segundo Reinado (1840–1889): Conciliação e Café

Após a turbulência do Período Regencial (1831–1840), o Golpe da Maioridade levou D. Pedro II ao trono aos 14 anos. O regime parlamentarista implantado funcionava 'às avessas': o monarca usava o Poder Moderador para nomear primeiro o gabinete, que convocava eleições fraudadas ('a bico de pena') para obter maioria.

A base material do Segundo Reinado foi o **café**, que percorreu duas etapas:
- **Vale do Paraíba**: Cafeicultura tradicional, relevo acidentado, esgotamento rápido dos solos, apego incondicional ao trabalho escravo e conservadorismo político ('barões do café').
- **Oeste Paulista**: Solos férteis de 'terra roxa', relevo suave, transporte por ferrovias modernas e pioneirismo na transição para o trabalho livre assalariado imigrante (colonato).

### 4. A Lei de Terras e o Fim da Escravidão

Em setembro de 1850, o gabinete imperial aprovou duas leis complementares decisivas:
1. **Lei Eusébio de Queirós**: Extinguiu definitivamente o tráfico negreiro transatlântico sob pressão naval da marinha britânica.
2. **Lei de Terras (Lei nº 601)**: Proibiu a posse de terras devolutas, exigindo compra em moeda à vista. O objetivo foi bloquear o acesso dos futuros imigrantes e ex-escravizados à terra, mantendo-os como mão de obra assalariada barata nos cafezais.

O fim da escravidão ocorreu por um gradualismo conservador (Lei do Ventre Livre em 1871; Lei dos Sexagenários em 1885) até ser superado pela mobilização popular e frentes de resistência (Luís Gama, André Rebouças, José do Patrocínio), culminando na **Lei Áurea de 13 de maio de 1888**, assinada pela Princesa Isabel sem indenizações financeiras aos proprietários.
      `,
      workedExample: {
        scenario: "Por que a Lei de Terras de 1850 é considerada a raiz da concentração fundiária no Brasil contemporâneo?",
        resolution: "Porque ao vetar o apossamento e impor o pagamento em dinheiro à vista em leilões estatais, a lei garantiu que apenas os grandes fazendeiros e especuladores com capital pudessem adquirir terras, alijando trabalhadores pobres, imigrantes e negros do direito de propriedade familiar."
      },
      realWorldApplication: "A estrutura de latifúndio herdada da Lei de Terras de 1850 fundamenta os conflitos agrários contemporâneos, a luta pela reforma agrária e as reivindicações dos movimentos camponeses.",
      commonMisconceptions: [
        "Achar que o parlamentarismo brasileiro era igual ao inglês: no Brasil, o Imperador mandava mais que o parlamento e escolhia o Primeiro-Ministro pelo Poder Moderador.",
        "Acreditar que a Princesa Isabel concedeu a abolição por simples 'bondade cristã': a Lei Áurea foi o desfecho de décadas de fugas em massa, revoltas armadas e pressão jurídica e internacional intransigente."
      ],
      quickReview: [
        "Constituição de 1824 = Outorgada + Voto censitário + 4 Poderes (Poder Moderador discricionário).",
        "Setembro de 1850 = Fim do tráfico negreiro (Eusébio de Queirós) + Terra como mercadoria cara (Lei de Terras).",
        "Oeste Paulista = Café moderno + Ferrovias + Terra Roxa + Colonato imigrante."
      ]
    },
    {
      id: "cap-3-republica-velha",
      chapterNumber: 3,
      title: "A República Velha e a Hegemonia Oligárquica (1889–1930)",
      subtitle: "Coronelismo, política do café com leite e revoltas sociais urbanas e rurais",
      readTimeMinutes: 15,
      learningObjectives: [
        "Analisar as forças que proclamaram a República em 1889 e os modelos em disputa.",
        "Compreender a mecânica do coronelismo, voto de cabresto e a Política dos Governadores.",
        "Examinar as revoltas sociais do período (Canudos, Contestado, Vacina, Chibata e Tenentismo)."
      ],
      targetSkills: ["H11 - Identificar cidadania na República Velha", "H12 - Analisar conflitos rurais e urbanos"],
      content: `
### 1. A Proclamação e a República da Espada (1889–1894)

Em 15 de novembro de 1889, o Marechal Deodoro da Fonseca liderou o golpe militar que derrubou o gabinete imperial e proclamou a República. As três forças principais em disputa eram:
1. **Militares positivistas** (Benjamin Constant, Floriano Peixoto): Defendiam uma república autoritária modernizadora guiada pela divisa 'Ordem e Progresso'.
2. **Oligarquia cafeeira paulista** (PRP): Defendia o federalismo amplo com autonomia estadual para controlar os lucros do café.
3. **Liberais jacobinos urbanos** (Silva Jardim): Defendiam democracia representativa e participação popular (rapidamente derrotados).

Após o governo de Deodoro e o autoritarismo de Floriano Peixoto que sufocou a Revolta da Armada e a Revolução Federalista (RS), o poder passou definitivamente para a oligarquia civil com Prudente de Morais em 1894.

### 2. A Estrutura da Dominação Oligárquica

Criada pelo presidente Campos Sales (1898–1902), a engrenagem do poder alicerçava-se em três pilares integrados:
- **Coronelismo e Voto de Cabresto**: No nível municipal, os latifundiários ('coronéis') controlavam o voto da população dependente por meio do voto aberto (não secreto), fraude nas atas e violência dos jagunços.
- **Política dos Governadores**: O presidente da República garantia verbas e não interferia nas oligarquias estaduais dominantes; em troca, as bancadas de deputados estaduais apoiavam os projetos do governo federal no Congresso.
- **Comissão Verificadora de Poderes**: Órgão do Congresso responsável por diplomar os eleitos, que praticava a 'degola' (cassação arbitrária de qualquer candidato de oposição que porventura vencesse nas urnas).
- **Política do Café com Leite**: Alternância ou concertação entre as duas maiores oligarquias estaduais: São Paulo (maior produtor de café) e Minas Gerais (maior colégio eleitoral e produtor de leite e café).

### 3. A Economia do Café e o Convênio de Taubaté (1906)

Diante de crises cíclicas de superprodução de café no mercado mundial, os governos de SP, MG e RJ reuniram-se no **Convênio de Taubaté (1906)**. Ficou estabelecido que o Estado compraria os excedentes de sacas de café com empréstimos externos e queimaria ou estocaria a produção para garantir os lucros dos fazendeiros (socialização dos prejuízos privados pelo Estado público).

### 4. As Revoltas Sociais na República Velha

A exclusão social e a violência do Estado deflagraram intensas revoltas populares:
- **Guerra de Canudos (Bahia, 1896–1897)**: Liderada pelo beato messiânico Antônio Conselheiro em Belo Monte; destruída pelo exército após 4 expedições militares (retratada por Euclides da Cunha em *Os Sertões*).
- **Guerra do Contestado (PR/SC, 1912–1916)**: Camponeses e posseiros messiânicos (Monge José Maria) expropriados pela ferrovia *Brazil Railway Company* e por madeireiras norte-americanas.
- **Revolta da Vacina (Rio de Janeiro, 1904)**: Insurreição popular urbana contra a vacinação antivariólica obrigatória conduzida de forma arbitrária por Oswaldo Cruz e contra o 'bota-abaixo' das reformas higienistas de Pereira Passos.
- **Revolta da Chibata (1910)**: Marinheiros negros e mestiços liderados por João Cândido ('Almirante Negro') rebelaram-se contra os castigos corporais (chibatadas) e a alimentação podre na Marinha de Guerra.
      `,
      workedExample: {
        scenario: "Como a Constituição de 1891 garantiu a hegemonia das oligarquias estaduais?",
        resolution: "Ao adotar o federalismo de molde norte-americano com ampla autonomia para os estados contraírem empréstimos externos e criarem forças policiais próprias, e ao instituir o voto aberto masculino, permitindo aos coronéis fraudar eleições através do voto de cabresto."
      },
      realWorldApplication: "Práticas clientelistas de troca de favores por votos, corrupção eleitoral e dependência econômica em municípios do interior ainda guardam vestígios da lógica coronelista.",
      commonMisconceptions: [
        "Achar que 'Café com Leite' significava alternância exata e perfeita de um paulista e um mineiro a cada 4 anos: houve mandatos de presidentes de outros estados (como Hermes da Fonseca do RS) e conflitos acirrados entre as oligarquias.",
        "Achar que Canudos era uma conspiração monarquista perigosa: tratava-se de uma comunidade comunitária camponesa autônoma que buscava fugir da fome e da opressão coronelista sertaneja."
      ],
      quickReview: [
        "Engrenagem do Poder = Coronelismo (município) + Política dos Governadores (estado) + Degola no Congresso (União).",
        "Convênio de Taubaté (1906) = Intervenção estatal para garantir o preço do café com dinheiro público.",
        "Revoltas = Canudos e Contestado (rurais messiânicas); Vacina e Chibata (urbanas populares)."
      ]
    },
    {
      id: "cap-4-era-vargas",
      chapterNumber: 4,
      title: "A Era Vargas e a Industrialização de Base (1930–1945)",
      subtitle: "Revolução de 1930, legislação trabalhista (CLT), Estado Novo e nacionalismo econômico",
      readTimeMinutes: 15,
      learningObjectives: [
        "Compreender a ruptura de 1930 com a quebra da política do café com leite e a Aliança Liberal.",
        "Examinar o papel da legislação trabalhista (CLT) e o corporativismo sindical varguista.",
        "Analisar o Estado Novo (1937–1945), a censura do DIP e a política de industrialização de base (CSN, Vale)."
      ],
      targetSkills: ["H11 - Compreender as matrizes do Estado republicano", "H14 - Analisar direitos e cidadania no século XX"],
      content: `
### 1. A Revolução de 1930 e a Crise da República Oligárquica

A crise mundial de 1929 e o esgotamento do café aceleraram a crise política. O presidente Washington Luís rompeu o pacto oligárquico ao apoiar o paulista Júlio Prestes para a presidência, e não um candidato mineiro. Minas Gerais uniu-se ao Rio Grande do Sul e à Paraíba na **Aliança Liberal**, lançando Getúlio Vargas com uma plataforma de voto secreto e leis trabalhistas.

Derrotada nas urnas fraudadas, a Aliança Liberal aproveitou o assassinato de João Pessoa (vice de Vargas) para deflagrar a **Revolução de Outubro de 1930**. O exército depôs Washington Luís e entregou a chefia do Governo Provisório a Getúlio Vargas.

### 2. O Governo Provisório e a Revolução Constitucionalista de 1932

Vargas dissolveu o Congresso e nomeou tenentes intervencionistas para governar os estados. Irritadas com a perda de poder político e econômico, as elites paulistas deflagraram a **Revolução Constitucionalista de 1932**, exigindo uma nova Constituição.

Embora derrotada militarmente, São Paulo alcançou seu objetivo político: em 1934, foi promulgada a **Constituição de 1934**, que instituiu:
- Voto secreto obrigatório e **voto feminino** (reconhecido no Código Eleitoral de 1932 e na Carta de 1934);
- Criação da Justiça Eleitoral e da Justiça do Trabalho;
- Garantias constitucionais trabalhistas (jornada de 8h, descanso semanal, salário mínimo).

### 3. Radicalização Política: AIB vs. ANL (1934–1937)

Em consonância com a polarização europeia pré-Segunda Guerra, o Brasil viu nascer dois grandes movimentos antagônicos:
1. **AIB (Ação Integralista Brasileira)**: Liderada por Plínio Salgado. Inspirada no fascismo italiano ('Deus, Pátria e Família', camisa-verde, saudação 'Anauê').
2. **ANL (Aliança Nacional Libertadora)**: Frente ampla antifascista liderada pelo capitão Luís Carlos Prestes (Partido Comunista). Pregava o não pagamento da dívida externa e a reforma agrária.

Em novembro de 1935, a ANL deflagrou o levante militar comunista ('Intentona Comunista'), sufocado pelo governo. Vargas usou o levante como pretexto para decretar estado de sítio permanente e forjar, em setembro de 1937, o fictício **Plano Cohen** (farsa montada pelo capitão integralista Olímpio Mourão Filho alegando plano comunista de invasão), justificando o golpe de Estado.

### 4. O Estado Novo (1937–1945): Ditadura e Trabalhismo

Em 10 de novembro de 1937, Vargas outorgou a Constituição autoritária (a 'Polaca'), inaugurando a ditadura do Estado Novo:
- **Centralização e Censura**: Criação do **DIP (Departamento de Imprensa e Propaganda)**, responsável pela censura a jornais, rádio e cinema e pela criação da imagem de Vargas como o 'Pai dos Pobres'.
- **Legislação Trabalhista e CLT (1943)**: Consolidação das Leis do Trabalho garantindo direitos fundamentais aos trabalhadores urbanos, mas atrelando os sindicatos ao Ministério do Trabalho através da estrutura corporativista (o chamado 'peleguismo').
- **Industrialização de Base**: Pragmática aliança com os EUA na Segunda Guerra Mundial (cedendo bases em Natal e enviando a FEB à Itália) permitiu o financiamento da **Companhia Siderúrgica Nacional (CSN)** em Volta Redonda, fundando a indústria de base estatal brasileira, além da Companhia Vale do Rio Doce e da Fábrica Nacional de Motores.
      `,
      workedExample: {
        scenario: "Por que os historiadores classificam o trabalhismo varguista como uma política de 'cidadania regulada' (Wanderley Guilherme dos Santos)?",
        resolution: "Porque o acesso aos direitos sociais e trabalhistas era condicionado ao vínculo empregatício formal com carteira assinada em sindicatos reconhecidos pelo Estado, excluindo trabalhadores informais e a totalidade dos camponeses do campo."
      },
      realWorldApplication: "A CLT de 1943 e a presença de estatais de infraestrutura continuam no centro dos debates contemporâneos sobre reformas trabalhistas, direitos sociais e soberania energética.",
      commonMisconceptions: [
        "Acreditar que os direitos trabalhistas foram uma 'dádiva pura e desinteressada' de Vargas: foram fruto de décadas de greves e lutas anarquistas e operárias desde o início do século XX, cooptadas e reguladas pelo Estado.",
        "Achar que o Plano Cohen era um plano comunista autêntico: foi comprovadamente uma farsa militar para justificar o fechamento autoritário de 1937."
      ],
      quickReview: [
        "1930 = Quebra da República Oligárquica com Vargas no poder.",
        "Constituição de 1934 = Voto secreto, voto feminino e Justiça do Trabalho.",
        "Estado Novo (1937–1945) = Ditadura + DIP (censura/propaganda) + CLT (1943) + CSN (indústria de base)."
      ]
    },
    {
      id: "cap-5-ditadura-redemocratizacao",
      chapterNumber: 5,
      title: "Da Ditadura Civil-Militar à Redemocratização (1964–2026)",
      subtitle: "Golpe de 1964, Atos Institucionais (AI-5), Milagre Econômico, Diretas Já e Constituição Cidadã",
      readTimeMinutes: 14,
      learningObjectives: [
        "Examinar o contexto geopolítico do Golpe de 1964 no quadro da Guerra Fria e a Doutrina de Segurança Nacional.",
        "Analisar o endurecimento repressivo do AI-5 (1968), censura, tortura e resistência armada e cultural.",
        "Compreender a transição 'lenta, gradual e segura', a campanha das Diretas Já e as conquistas da Constituição de 1988."
      ],
      targetSkills: ["H11 - Reconhecer regimes democráticos e autoritários", "H15 - Conquistas de cidadania e direitos humanos"],
      content: `
### 1. O Golpe Civil-Militar de 1964

Em 31 de março de 1964, forças militares com amplo apoio de setores civis (grandes empresários, grande imprensa, Igreja conservadora na *Marcha da Família com Deus pela Liberdade* e governo dos Estados Unidos via Operação *Brother Sam*) depuseram o presidente João Goulart ('Jango'). 

O pretexto alegado foi a 'ameaça comunista' e o repúdio às **Reformas de Base** de Jango (reformas agrária, educacional, tributária e urbana). Instalou-se um regime tutelado pelas Forças Armadas fundamentado na **Doutrina de Segurança Nacional** da Escola Superior de Guerra (ESG), que encarava a oposição política interna como 'inimigo subversivo' a ser aniquilado.

### 2. O Endurecimento da Repressão e o AI-5 (1968)

O regime militar editou sucessivos Atos Institucionais para suspender a Constituição e esmagar a oposição:
- **AI-1 (1964)**: Cassação de mandatos e suspensão de direitos políticos de ex-presidentes e líderes sindicais.
- **AI-2 (1965)**: Extinção de todos os partidos políticos e criação do bipartidarismo artificial: ARENA (governista) e MDB (oposição consentida).
- **AI-5 (13 de dezembro de 1968)**: Apogeu autoritário decretado pelo general Costa e Silva. Fechou o Congresso Nacional, suspendeu as garantias do *habeas corpus* para crimes políticos, instituiu a censura prévia irrestrita e conferiu plenos poderes ao Executivo para intervir em estados e confiscar bens.

Sob o AI-5 e o governo Médici (1969–1974), estruturou-se o aparelho de repressão clandestina e tortura institucionalizada (DOI-CODI, OBAN e SNI), resultando em assassinatos de opositores, desaparecimentos forçados e exílio de artistas, acadêmicos e políticos.

### 3. O 'Milagre Econômico' e a Concentração de Renda

Entre 1968 e 1973, a economia cresceu a taxas médias de 10% ao ano, sob a gestão do ministro Delfim Netto. O crescimento foi sustentado por:
- Vultosos empréstimos externos e endividamento maciço;
- Arrocho salarial severo sobre a classe trabalhadora;
- Grandes obras faraônicas (Ponte Rio-Niterói, Rodovia Transamazônica, Usina de Itaipu);
- Concentração brutal de renda (a célebre tese do 'fazer o bolo crescer para depois dividir', que nunca foi dividido).

### 4. A Abertura 'Lenta, Gradual e Segura' e as Diretas Já

A partir de 1974, sob o choque do petróleo e o retorno da inflação, o general Ernesto Geisel iniciou a abertura política controlada:
- Revogação do AI-5 em 1978;
- Promulgação da **Lei da Anistia de 1979** pelo general Figueiredo (ampla e irrestrita, garantindo a volta dos exilados, mas anistiando também os agentes do Estado torturadores);
- Fim do bipartidarismo (surgimento de PT, PDT, PMDB, PDS, PTB).

Em 1984, a campanha cívica das **Diretas Já** mobilizou milhões de brasileiros nas ruas exigindo eleições presidenciais diretas pela emenda Dante de Oliveira. Rejeitada a emenda no Congresso, a transição ocorreu por via indireta no Colégio Eleitoral em 1985, com a vitória de Tancredo Neves e posse de José Sarney, encerrando 21 anos de ditadura militar.

### 5. A Constituição Cidadã de 1988 e a Nova República

Presidida por Ulysses Guimarães, a Assembleia Nacional Constituinte promulgou em 5 de outubro de 1988 a **Constituição da República Federativa do Brasil**, consagrada como a 'Constituição Cidadã':
- Inviolabilidade dos direitos humanos e repúdio ao racismo (crime inafiançável e imprescritível);
- Criação do Sistema Único de Saúde (SUS) e da Seguridade Social universal;
- Demarcação e reconhecimento dos direitos originários territoriais dos povos indígenas e das comunidades quilombolas;
- Eleições diretas em dois turnos e voto facultativo para jovens de 16 e 17 anos e analfabetos.
      `,
      workedExample: {
        scenario: "Como a Constituição de 1988 rompeu com a tradição autoritária do Estado brasileiro?",
        resolution: "Ao colocar a dignidade da pessoa humana e os direitos fundamentais inalienáveis no centro do ordenamento jurídico, estabelecendo remédios constitucionais como o mandado de segurança coletivo e criminalizando severamente a tortura e o racismo."
      },
      realWorldApplication: "O debate contemporâneo sobre a defesa das instituições republicanas, da liberdade de expressão e da integridade eleitoral tem raízes diretas na memória das lutas contra o autoritarismo militar.",
      commonMisconceptions: [
        "Achar que o Golpe de 1964 foi exclusivamente 'militar': foi um golpe civil-militar articulado com grandes empresários, bancos, oligarquias e corporações de mídia.",
        "Acreditar que a Lei da Anistia de 1979 foi uma 'concessão graciosa' dos generais: foi uma conquista de árdua campanha nacional de mães e familiares de presos e desaparecidos políticos."
      ],
      quickReview: [
        "1964 = Golpe civil-militar apoiado pelos EUA contra as Reformas de Base.",
        "AI-5 (1968) = Apogeu da ditadura militar, fechamento do Congresso e suspensão do habeas corpus.",
        "1988 = Constituição Cidadã consagrando direitos sociais universais, SUS e garantias democráticas."
      ]
    }
  ]
};
