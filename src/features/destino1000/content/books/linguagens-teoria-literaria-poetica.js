/**
 * LIVRO DIDÁTICO DIGITAL: Teoria Literária, Análise Narrativa e Poética Canônica
 * Área: Linguagens, Códigos e suas Tecnologias
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Edição Canônica 2026)
 * Regra Estrita: ZERO termos de deslocamento turístico. Foco em narratologia, poética,
 * gêneros aristotélicos, polifonia, metalinguagem e análise crítica de textos canônicos.
 */

export const LIVRO_LINGUAGENS_TEORIA_LITERARIA = {
  id: "livro-linguagens-teoria-literaria",
  area: "linguagens",
  title: "Teoria Literária, Análise Narrativa e Poética Canônica",
  subtitle: "Gêneros clássicos, narratologia, estranhamento formal, polifonia bakhtiniana e estética brasileira no ENEM",
  estimatedReadingTimeMinutes: 85,
  badge: "Livro Essencial • Alta Densidade & TRI Ouro",
  coverColor: "from-purple-950 to-pink-900",
  prerequisites: [
    "Noções fundamentais de compreensão e interpretação de textos em prosa e verso",
    "Familiaridade básica com os períodos literários da literatura brasileira e portuguesa"
  ],
  learningObjectives: [
    "Compreender a tripartição clássica dos gêneros literários (lírico, épico/narrativo e dramático) e suas manifestações modernas",
    "Dominar as categorias da narrativa ficcional: foco narrativo, tempo cronológico e psicológico, espaço e narrador não confiável",
    "Identificar os procedimentos de estranhamento estético (desfamiliarização), metapoética e quebra de convenções nas vanguardas",
    "Analisar o romance moderno sob as lentes do dialogismo e da polifonia de Mikhail Bakhtin",
    "Interpretar a literatura brasileira a partir de teorias críticas descolonizadoras, como a Antropofagia e a Escrevivência"
  ],
  chapters: [
    {
      id: "cap-1-generos-literarios",
      chapterNumber: 1,
      title: "A Tríade dos Gêneros Literários: Lírico, Épico e Dramático",
      estimatedMinutes: 16,
      learningObjectives: [
        "Diferenciar a atitude enunciativa lírica, narrativa e dramática",
        "Reconhecer a especificidade do texto teatral frente à prosa narrativa",
        "Compreender o conceito de catarse na tragédia aristotélica"
      ],
      targetSkills: [
        "H15 - Estabelecer relações entre o texto literário e o momento de sua produção",
        "H16 - Relacionar informações sobre concepções artísticas e procedimentos de construção do texto literário"
      ],
      content: `
### 1. A Sistematização dos Gêneros Clássicos

Desde a Antiguidade grega, com a *Poética* de Aristóteles, e através das reelaborações do Classicismo e do Romantismo, a teoria estética ocidental estruturou a criação literária em três atitudes enunciativas fundamentais:

* **Gênero Lírico**:
  * **Eixo Central**: A expressão subjetiva do mundo interior, dos sentimentos e dos estados de espírito de um *eu lírico*.
  * **Temporalidade**: Preponderância do tempo presente afetivo e da atemporalidade da emoção.
  * **Forma e Ritmo**: Tradicionalmente associado ao verso, à musicalidade sonora e à exploração de figuras de linguagem (metáforas, aliterações e sinestesias).

* **Gênero Épico (ou Narrativo)**:
  * **Eixo Central**: A mediação obrigatória de uma voz narradora que relata uma sucessão de ações e acontecimentos vividos por personagens em determinado tempo e espaço.
  * **Origem e Evolução**: Nasceu na antiguidade como epopeia em verso heroico (*Ilíada*, *Odisseia*, *Os Lusíadas*) e evoluiu para as formas da prosa moderna: romance, novela, conto e crônica.

* **Gênero Dramático**:
  * **Eixo Central**: A presentificação da ação no palco perante o espectador, sem a presença de um narrador mediador.
  * **Mecanismo Formal**: A história é conduzida exclusivamente pelos diálogos e monólogos dos atores e pelas indicações cênicas do autor (rubricas ou didascálias), destinadas à encenação teatral.

---

### 2. A Catarse e a Teoria da Tragédia

Na teoria dramática aristotélica, a tragédia ocupa um lugar privilegiado como arte de elevação ética. O herói trágico não é um vilão perverso nem um santo perfeito; é um ser humano nobre que comete um erro de julgamento fatal (*hamartia*), frequentemente impulsionado pela desmedida do orgulho (*hýbris*).

Ao contemplar a queda inevitável do protagonista sob o peso do destino, o público vivencia simultaneamente:
1. **Terror (*fóvos*)**: O temor diante da fragilidade da condição humana e da vulnerabilidade perante forças cósmicas ou sociais superiores.
2. **Piedade (*éleos*)**: A compaixão empática pelo sofrimento imerecido ou desproporcional do herói.

A conjunção dialética dessas duas emoções produz a **Catarse (*kátharsis*)**: a purgação, alívio e harmonização das paixões da alma, restabelecendo o equilíbrio ético e psicológico do indivíduo na pólis.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Identificação do Gênero Dramático no ENEM",
          context: "Um trecho apresenta o diálogo entre duas personagens (Manuel e Simão) intercalado pela indicação entre parênteses: '(Manuel levanta-se bruscamente e caminha em direção à janela, fitando a escuridão da noite)'.",
          questionFocus: "Qual a função estrutural da indicação entre parênteses e a qual gênero pertence o excerto?",
          resolution: "A indicação entre parênteses é uma rubrica cênica (ou didascália), cuja função é orientar a movimentação corporal, o tom de voz e o cenário para a encenação teatral dos atores e do diretor. A presença de diálogos diretos sem narrador mediador comprova inequivocamente o pertencimento ao gênero dramático."
        }
      ],
      quickReview: [
        "Lírico: subjetividade íntima do eu lírico, atemporalidade e prevalência da função poética.",
        "Épico/Narrativo: relato de fatos no tempo conduzido obrigatoriamente por um narrador.",
        "Dramático: encenação cênica direta via diálogos e rubricas, sem narrador intermediário.",
        "Catarse: purificação das paixões (terror e piedade) na tragédia aristotélica."
      ]
    },
    {
      id: "cap-2-narratologia-foco-narrativo",
      chapterNumber: 2,
      title: "Narratologia: Foco Narrativo, Tempo e a Voz Não Confiável",
      estimatedMinutes: 18,
      learningObjectives: [
        "Diferenciar narrador homodiegético (1ª pessoa) de heterodiegético (3ª pessoa)",
        "Compreender a diferença entre tempo cronológico e tempo psicológico",
        "Analisar o conceito de narrador não confiável e o discurso indireto livre"
      ],
      targetSkills: [
        "H15 - Relacionar aspectos do contexto e do narrador na interpretação da obra",
        "H16 - Analisar procedimentos narrativos na prosa ficcional"
      ],
      content: `
### 1. Foco Narrativo e Ponto de Vista

O foco narrativo define a perspectiva a partir da qual o mundo ficcional é percebido e relatado ao leitor:

* **Narrador em Primeira Pessoa (Foco Interno / Homodiegético)**:
  * O narrador é um personagem da diegese (protagonista ou testemunha periférica).
  * Sua visão é inerentemente **subjetiva, parcial e limitada**: ele só relata o que presenciou, ouviu de terceiros ou deduziu. Não tem acesso direto e infalível à consciência alheia.
  * Exemplo: Bento Santiago em *Dom Casmurro*, que relata retrospectivamente suas memórias envenenadas pelo ciúme.

* **Narrador em Terceira Pessoa (Foco Externo / Heterodiegético)**:
  * O narrador não é personagem da história; relata de fora.
  * **Onisciente**: Conhece o passado, o presente, o futuro e a intimidade psicológica mais secreta de todas as personagens.
  * **Observador**: Comporta-se como uma câmera neutra, relatando apenas as ações visíveis e comportamentos externos sem penetrar nos pensamentos íntimos.

---

### 2. O Narrador Não Confiável (*Unreliable Narrator*)

Na narratologia contemporânea, o narrador não confiável é aquela voz enunciativa cujo relato não pode ser aceito pelo leitor de forma ingênua ou literal. As distorções podem nascer de:
* Julgamentos morais enviesados ou preconceitos de classe.
* Loucura, ciúme obsessivo ou delírios paranoides.
* Falhas e lacunas voluntárias da memória retrospectiva.
* Má-fé deliberada para construir uma versão autojustificadora de seus próprios atos perante a opinião pública.

> **Regra de Ouro no ENEM**: Em narrativas em primeira pessoa, nunca tome o depoimento do narrador como a verdade factual definitiva da trama. O leitor crítico deve procurar as contradições nas entrelinhas do relato.

---

### 3. As Modalidades de Discurso na Prosa

* **Discurso Direto**: As falas das personagens são reproduzidas textualmente, separadas por pontuação nítida (dois-pontos, travessões ou aspas) e verbos de elocução (*disse*, *perguntou*).
* **Discurso Indireto**: O narrador relata com suas próprias palavras o que a personagem falou por meio de orações subordinadas substantivas (*Ele afirmou que não voltaria mais*).
* **Discurso Indireto Livre**: É a mais sofisticada técnica da prosa moderna. Funde a terceira pessoa do narrador com o fluxo de consciência e interjeições da personagem, sem qualquer marca formal de travessão ou verbo declarativo. A voz do narrador e a mente da personagem fundem-se em uma mesma corrente verbal contínua (marca registrada de Graciliano Ramos e Clarice Lispector).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Identificação do Discurso Indireto Livre",
          context: "Texto: 'Fabiano sentou-se na beira da estrada. Sim senhor, arrumara um bom emprego. Quem diria que um sertanejo bruto como ele governaria as cabras do patrão? Fabiano era um homem de respeito.'",
          questionFocus: "Que modalidade de discurso predomina no fragmento e qual o seu efeito estilístico?",
          resolution: "Predomina o discurso indireto livre. Frases como 'Sim senhor, arrumara um bom emprego' e 'Quem diria...?' revelam os pensamentos íntimos e o vocabulário coloquial do sertanejo Fabiano inseridos diretamente dentro do parágrafo narrado em terceira pessoa, sem aspas nem travessões, aproximando empaticamente o leitor da psicologia da personagem."
        }
      ],
      quickReview: [
        "1ª pessoa: visão parcial, subjetiva e potencialmente não confiável.",
        "3ª pessoa onisciente: penetra na consciência e sabe tudo sobre a trama.",
        "Discurso indireto livre: fusão da voz do narrador com o pensamento da personagem sem pontuação divisória.",
        "Tempo psicológico: tempo interno da memória e da emoção, sem linearidade cronológica."
      ]
    },
    {
      id: "cap-3-poetica-estranhamento-vanguarda",
      chapterNumber: 3,
      title: "Poética, Estranhamento Estético e as Rupturas de Vanguarda",
      estimatedMinutes: 17,
      learningObjectives: [
        "Compreender a teoria do estranhamento (ostranenie) dos formalistas russos",
        "Diferenciar métrica tradicional (escansão) de verso livre moderno",
        "Analisar o procedimento da metapoética em Drummond e João Cabral"
      ],
      targetSkills: [
        "H16 - Relacionar procedimentos formais e concepções artísticas de época",
        "H17 - Reconhecer valores humanos e inovações formais no patrimônio poético"
      ],
      content: `
### 1. O Estranhamento Estético (*Ostranenie*)

Segundo o crítico e formalista russo Viktor Shklovsky em seu seminal ensaio *A Arte como Procedimento* (1917), o hábito cotidiano mecaniza a percepção humana: olhamos para as paredes, para os rostos e para as palavras sem realmente enxergá-los. A vida automatiza-se e torna-se invisível.

A finalidade suprema da arte é resgatar a sensação do viver, quebrando essa couraça de automatismo por meio do **estranhamento estético (*desfamiliarização*)**:
* A arte torna a forma difícil e desconcertante.
* Retarda o tempo de percepção do leitor, obrigando-o a deter-se na materialidade do signo linguístico.
* Mostra os objetos conhecidos sob uma luz tão inusitada que o leitor parece vê-los pela primeira vez.

---

### 2. A Métrica Tradicional versus o Verso Livre Moderno

Na tradição lírica clássica ocidental, a poesia fundamentava-se na regularidade silábica rigorosa:

* **Escansão Poética**: Contagem das sílabas sonoras (métricas) de um verso. A contagem é fonética e encerra-se sempre na **última sílaba tônica** do verso. Vogais contíguas fundem-se em elisão.
* **Metros Clássicos Principais**:
  * **Redondilha Menor**: 5 sílabas poéticas (pentassílabo), comum no verso popular e cantigas medievais.
  * **Redondilha Maior**: 7 sílabas poéticas (heptassílabo), base da trova, cordel e modinhas populares.
  * **Decassílabo**: 10 sílabas poéticas, introduzido na medida nova renascentista por Camões e Sá de Miranda, base do soneto clássico.
  * **Alexandrino**: 12 sílabas poéticas (dodecassílabo), típico do Parnasianismo francês e brasileiro (Olavo Bilac).

* **A Ruptura do Verso Livre Modernista**:
  A partir da Semana de Arte Moderna de 1922 e do Modernismo de 1930 (Manuel Bandeira, Mário de Andrade, Carlos Drummond de Andrade), os poetas aboliram a obrigatoriedade da métrica fixa e da rima rica. O ritmo passou a ser interior e semântico, modulado pela cadência da fala coloquial cotidiana e pela necessidade expressiva da mensagem.

---

### 3. A Metapoética: O Poema que Pensa o Fazer Poético

A metapoética ocorre quando o poema toma a sua própria oficina de criação como tema lírico (função metalinguística de Jakobson):
* Em Carlos Drummond de Andrade (*Procura da Poesia*): a recusa ao lirismo de gabinete e a exortação a penetrar surdamente no reino das palavras.
* Em João Cabral de Melo Neto (*Catar Feijão*, *A Educação pela Pedra*): a escrita comparada ao corte, à catação manual e à escultura austera, rejeitando floreios sentimentais e rimas de efeito fácil.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Escansão Poética e Identificação do Decassílabo",
          context: "Verso camoniano: 'Sete anos de pastor Jacó servia'.",
          questionFocus: "Quantas sílabas poéticas possui o verso e como se classifica sua métrica?",
          resolution: "Fazendo a escansão fonética: Se- / te a- (elisão em 'te-a') / nos / de / pas- / tor / Ja- / có / ser- / VI- (a). Como 'servia' é paroxítona (tônica em 'vi'), a contagem métrica cessa na 10ª sílaba ('vi'), descartando a sílaba átona final 'a'. Logo, o verso possui rigorosamente 10 sílabas poéticas, classificando-se como decassílabo clássico."
        }
      ],
      quickReview: [
        "Estranhamento (Shklovsky): desautomatizar a percepção cotidiana tornando a forma poética perceptível e densa.",
        "Escansão: contagem fonética de sílabas poéticas até a última tônica do verso.",
        "Redondilha maior (7 sílabas), Decassílabo (10 sílabas), Alexandrino (12 sílabas).",
        "Verso livre: ausência de metro fixo, ritmo regido pela respiração e pela sintaxe do poema."
      ]
    },
    {
      id: "cap-4-revolucao-machadiana-ironia",
      chapterNumber: 4,
      title: "A Revolução Machadiana: Ironia Póstuma e Crítica da Sociedade Patriarcal",
      estimatedMinutes: 18,
      learningObjectives: [
        "Compreender a ruptura inaugurada por Memórias Póstumas de Brás Cubas (1881)",
        "Analisar o recurso do defunto autor e a desfaçatez de classe da elite senhorial",
        "Identificar o pessimismo filosófico machadiano e a paródia ao determinismo científico"
      ],
      targetSkills: [
        "H15 - Situar a obra machadiana nas contradições do Segundo Reinado escravocrata",
        "H16 - Analisar os procedimentos irônicos, digressões e metalinguagem no Realismo brasileiro"
      ],
      content: `
### 1. O Ponto de Inflexão de 1881 na Literatura Brasileira

Com a publicação em folhetins de *Memórias Póstumas de Brás Cubas* em 1880 (e em livro em 1881), Machado de Assis enterrou definitivamente o Romantismo idealizante e inaugurou a maturidade do Realismo no Brasil.

Em vez de narrar uma trama com heróis valorosos e vilões punidos, Machado cria um protagonista profundamente medíocre, herdeiro parasitário da elite senhorial do Segundo Reinado. O golpe de mestre estrutural do romance reside no estatuto ontológico do narrador: Brás Cubas não é um autor defunto (um homem que escreveu em vida e faleceu depois), mas um **defunto autor** — alguém que já morreu e decide escrever suas memórias diretamente do túmulo.

---

### 2. A Desfaçatez de Classe e a Liberdade Póstuma

Estando morto e enterrado, Brás Cubas está irremediavelmente livre das coerções sociais, da censura moral, das ameaças de tribunais e da necessidade de preservar aparências públicas:
* Ele pode confessar abertamente sua covardia, seu adultério com Virgília, sua ambição fútil de inventar o emplastro milagroso apenas para alcançar a glória e a vaidade.
* Revela com desinibição cínica a violência doméstica da escravidão (o escravizado Prudêncio, em quem Brás montava quando menino como se fosse um cavalo de pau, e que, uma vez alforriado, compra seu próprio escravo para açoitá-lo na praça pública, reproduzindo a cadeia da opressão).
* Esse cinismo aristocrático foi conceituado pelo crítico Roberto Schwarz como a **desfaçatez de classe**: a elite senhorial brasileira usava as ideias liberais europeias apenas como adorno exterior ('ideias fora do lugar'), enquanto preservava o clientelismo, o favor e o cativeiro na prática material.

---

### 3. A Crítica ao Cientificismo: O Humanitismo de Quincas Borba

Machado de Assis não poupou o cientificismo arrogante do século XIX (Positivismo, Darwinismo Social e Teoria dos Germes). Criou a paródia filosófica do **Humanitismo**, formulada pelo filósofo louco Quincas Borba:
* O princípio supremo da existência é *Humanitas*, a substância primordial que se alimenta de si mesma.
* A guerra e a destruição não são tragédias, mas o triunfo dos fortes sobre os fracos: *'Ao vencedor, as batatas!'*.
* Por trás da sátira hilariante, Machado desmontava a crueldade da sobrevivência do mais apto quando usada para justificar a desigualdade e a opressão social na história humana.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O 'Capítulo das Negativas' de Brás Cubas",
          context: "No desfecho de Memórias Póstumas, Brás Cubas faz o balanço final de sua vida: 'Não alcancei a celebridade do emplastro, não fui ministro, não fui califa (...). Não tive filhos, não transmiti a nenhuma criatura o legado da nossa miséria.'",
          questionFocus: "Qual a interpretação sociológica e filosófica dessa última negativa machadiana?",
          resolution: "A recusa de transmitir o 'legado da nossa miséria' condensa o pessimismo ontológico radical de Machado de Assis. Em um país escravocrata e hipócrita onde a vida humana é marcada por vacuidade, egoísmo e sofrimento incessante, não deixar descendência torna-se, na lógica amarga e irônica de Brás Cubas, o único saldo positivo ('um pequeno saldo') de uma existência inteira desperdiçada."
        }
      ],
      quickReview: [
        "Defunto autor: perspectiva póstuma que assegura liberdade crítica total para ridicularizar os vivos.",
        "Desfaçatez de classe: cinismo com que a elite senhorial expõe sua mediocridade e seu parasitismo escravocrata.",
        "Humanitismo: paródia machadiana ao positivismo e darwinismo social ('Ao vencedor, as batatas!').",
        "Capítulo das negativas: desfecho amargo que sintetiza a desilusão existencial da condição humana."
      ]
    },
    {
      id: "cap-5-polifonia-antropofagia-escrevivencia",
      chapterNumber: 5,
      title: "Polifonia, Antropofagia Cultural e Escrevivência Crítica",
      estimatedMinutes: 16,
      learningObjectives: [
        "Dominar os conceitos de dialogismo e polifonia em Mikhail Bakhtin",
        "Compreender a Antropofagia Cultural de Oswald de Andrade como teoria descolonizadora",
        "Analisar o conceito de escrevivência em Conceição Evaristo e a autoria negra"
      ],
      targetSkills: [
        "H17 - Reconhecer valores e matrizes identitárias no patrimônio literário nacional",
        "H18 - Analisar a produção de grupos historicamente minorizados na afirmação de direitos"
      ],
      content: `
### 1. Dialogismo e Polifonia em Mikhail Bakhtin

O filósofo russo Mikhail Bakhtin revolucionou os estudos da linguagem e da literatura ao afirmar que a palavra nunca é neutra, virgem ou isolada. Todo enunciado é essencialmente **dialógico**: ele responde a enunciados passados e antecipa reações e réplicas futuras.

No âmbito literário, Bakhtin formulou o conceito de **romance polifônico** (a partir de Dostoiévski):
* Ao contrário do romance monológico tradicional, onde a ideologia do autor dita a verdade de forma tirânica e reduz os personagens a fantoches subordinados, a polifonia é a orquestração de **múltiplas consciências autônomas e equipolentes**.
* Os personagens são sujeitos ideológicos plenos, capazes de confrontar o narrador e expressar visões de mundo inconclusas, gerando um debate ético aberto e plural.

---

### 2. A Antropofagia de 1928: Teoria Descolonizadora da Cultura

Em 1928, Oswald de Andrade publicou o seminal *Manifesto Antropófago*, transformando o ritual guerreiro dos povos Tupinambá em uma poderosa teoria estética e filosófica descolonizadora:
* Os indígenas canibais não devoravam o inimigo por fome nutricional; devoravam o guerreiro forte e destemido para absorver no corpo as suas qualidades e virtudes.
* Transposta para a cultura brasileira, a Antropofagia rejeita tanto o **nacionalismo ufanista xenófobo** (que se fecha para o mundo) quanto a **cópia servil do colonizador europeu** (que aliena o povo em preconceitos importados).
* A atitude do artista nacional deve ser devorar criticamente Shakespeare, Freud, Marx e as vanguardas europeias (*'Tupy, or not tupy that is the question'*), digeri-las sob a luz das matrizes ameríndias e afro-brasileiras, e expelir uma arte autônoma, rebelde e genuinamente brasileira.

---

### 3. A Escrevivência de Conceição Evaristo e a Autoria Negra

No cenário contemporâneo, a escritora Conceição Evaristo cunhou o conceito teórico de **Escrevivência** (*escrever + viver + ver*), que redefine o papel da mulher negra na literatura nacional:
* Rompe com a tradição secular em que os negros eram apenas personagens folclorizados ou objetos exóticos narrados pela elite letrada da casa-grande.
* Afirma a mulher negra como sujeito pleno de sua própria enunciação, unindo criação estética, memória ancestral, corporalidade e testemunho político de resistência periférica.
* A escrevivência *'não é para adormecer os da casa-grande, mas para acordá-los de seus sonos injustos'*, transformando a vivência da dor e da solidariedade em literatura de intervenção social permanente.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: A Antropofagia no Tropicalismo dos Anos 1960",
          context: "No final dos anos 1960, Caetano Veloso e Gilberto Gil chocaram a MPB ao introduzir guitarras elétricas importadas do rock anglo-saxão ao lado do berimbau da capoeira e do baião de Luiz Gonzaga.",
          questionFocus: "Como esse procedimento musical expressa a teoria da Antropofagia oswaldiana?",
          resolution: "O Tropicalismo aplicou rigorosamente a lição do Manifesto Antropófago de 1928: em vez de rejeitar a guitarra elétrica em nome de um purismo nacionalista estéril ou de copiar o rock inglês passivamente, os músicos devoraram a tecnologia estrangeira da guitarra, fundiram-na com os ritmos tradicionais da raiz popular afro-brasileira e criaram uma vanguarda sonora inovadora e autônoma."
        }
      ],
      quickReview: [
        "Dialogismo (Bakhtin): a palavra é sempre social e orientada para a resposta do outro.",
        "Polifonia: coexistência de vozes e consciências autônomas sem a soberania de uma verdade autoral única.",
        "Antropofagia (Oswald de Andrade): deglutição crítica da cultura estrangeira para refundá-la com as raízes nacionais.",
        "Escrevivência (Conceição Evaristo): escrita corporificada na vivência e na memória ancestral da mulher negra."
      ]
    }
  ]
};
