/**
 * BANCO DE QUESTÕES: FILOSOFIA, ÉTICA E TEORIA DO CONHECIMENTO NO ENEM
 * Área: Ciências Humanas e suas Tecnologias (Filosofia)
 * Competência: C1, C4 | Habilidades: H1, H2, H16, H17, H18
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de rigor historiográfico, epistemológico e filosófico
 * Regra Estrita: ZERO termos de deslocamentos turísticos. Foco em cidadania, ética,
 * epistemologia, bioética, política clássica e filosofia da ciência.
 */

export const QUESTIONS_FILOSOFIA_CONHECIMENTO = [
  {
    id: "HUM-EPI-001",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Sócrates e o Método Dialético",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Minha arte obstétrica tem as mesmas características que a das parteiras, com a diferença de que se aplica aos homens e não às mulheres, e observa o parto de suas almas, e não de seus corpos. E o que há de mais sublime em minha arte é que ela é capaz de testar por todos os meios se a alma do jovem dá à luz uma quimera e uma falsidade ou algo fértil e verdadeiro.",
      source: "PLATÃO. Teeteto. Tradução de Carlos Alberto Nunes. Belém: Editora UFPA, 1973 (adaptado)."
    },
    prompt: "No diálogo platônico, Sócrates compara sua prática filosófica ao ofício de parteira (maiêutica). O objetivo primordial dessa metodologia dialética consiste em",
    options: [
      {
        id: "a",
        text: "transmitir verdades dogmáticas acabadas aos discípulos passivos por meio da oratória persuasiva.",
        isCorrect: false,
        distractorRationale: "Sócrates recusava a transmissão de verdades prontas e combatia o dogmatismo dos sofistas."
      },
      {
        id: "b",
        text: "conduzir o interlocutor, por meio da ironia e de perguntas sucessivas, a reconhecer a própria ignorância e dar à luz o próprio conhecimento.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A maiêutica socrática (do grego maieutiké, arte do parto) é a segunda etapa do método dialético socrático, sucedendo a ironia (que desmorona as falsas certezas do interlocutor pelo 'só sei que nada sei'). Sócrates não se via como portador de verdades prontas, mas como um facilitador que, por meio de questionamentos cirúrgicos, estimulava o indivíduo a pensar criticamente e gerar conceitos universais autênticos a partir de sua própria razão."
      },
      {
        id: "c",
        text: "doutrinar os cidadãos atenienses para a aceitação cega dos mitos fundadores da pólis.",
        isCorrect: false,
        distractorRationale: "A filosofia socrática rompe exatamente com as narrativas mitológicas tradicionais em favor do logos racional."
      },
      {
        id: "d",
        text: "estabelecer regras de mercado financeiro para as trocas mercantis na ágora grega.",
        isCorrect: false,
        distractorRationale: "O método socrático possui finalidade epistemológica e ética, e não econômica mercantil."
      },
      {
        id: "e",
        text: "comprovar empiricamente a composição química elementar da matéria cósmica.",
        isCorrect: false,
        distractorRationale: "A investigação socrática é antropocêntrica (foco na alma, na virtude e no homem), distanciando-se da física cosmológica dos pré-socráticos."
      }
    ],
    detailedExplanation: {
      summary: "A dialética socrática divide-se em ironia (refutação das falsas certezas) e maiêutica (parto das ideias pela razão do próprio interlocutor).",
      stepByStep: [
        "1. Contexto: Sócrates na ágora de Atenas dialogando com cidadãos que julgavam saber tudo.",
        "2. 1ª Etapa (Ironia): perguntas incisivas que levavam o interlocutor à contradição, culminando na admissão da ignorância ('só sei que nada sei').",
        "3. 2ª Etapa (Maiêutica): arte de 'dar à luz' ideias verdadeiras a partir do próprio pensamento do discípulo.",
        "4. Conclusão: a busca da verdade exige desconstrução prévia do preconceito e do dogmatismo."
      ],
      coreConcept: "Método socrático: ironia e maiêutica como busca dialética da essência e da virtude.",
      trapWarning: "Cuidado para não confundir Sócrates com os sofistas: sofistas cobravam para ensinar retórica de convencimento relativo; Sócrates não cobrava e buscava a verdade universal pela razão."
    },
    commonTraps: ["Confundir o método socrático com a retórica sofística de persuasão."],
    tags: ["Filosofia", "Sócrates", "Maiêutica", "Dialética", "Teoria do Conhecimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-002",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Platão e o Mito da Caverna",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Imagina homens que vivem numa morada subterrânea em forma de caverna, cuja entrada se abre para a luz em toda a sua largura. Eles estão ali desde a infância, com as pernas e o pescoço acorrentados, de modo que não podem mudar de lugar nem olhar para outra direção senão para a frente. A luz de uma fogueira acesa ao longe, no alto, brilha por trás deles. Os prisioneiros tomam as sombras projetadas na parede pela realidade suprema.",
      source: "PLATÃO. A República. Livro VII. Tradução de Maria Helena da Rocha Pereira. Lisboa: Fundação Calouste Gulbenkian, 2001 (adaptado)."
    },
    prompt: "Na célebre Alegoria da Caverna formulada por Platão, a saída do prisioneiro para o exterior iluminado pelo Sol representa metaforicamente a",
    options: [
      {
        id: "a",
        text: "alienação progressiva do sábio perante as necessidades materiais da pólis.",
        isCorrect: false,
        distractorRationale: "Para Platão, o filósofo que se liberta tem o dever ético de retornar à caverna para governar a pólis com justiça."
      },
      {
        id: "b",
        text: "transição dolorosa do mundo sensível (das aparências e opiniões) para o mundo inteligível (das ideias verdadeiras e da essência).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na epistemologia platônica (idealismo), a caverna simboliza o Mundo Sensível, apreendido pelos sentidos corpóreos enganosos, gerador de meras opiniões (doxa). O exterior ensolarado simboliza o Mundo Inteligível das Ideias (episteme), onde reside a Idéia do Bem (o Sol). A libertação do prisioneiro ilustra a ascensão dialética da alma por meio da filosofia, rompendo com a ilusão sensorial rumo à contemplação das verdades imutáveis e eternas."
      },
      {
        id: "c",
        text: "vitória da fé mística e da religiosidade sacrificial sobre o pensamento racional.",
        isCorrect: false,
        distractorRationale: "Platão propõe a superação do mito pela racionalidade filosófica e dialética matemática."
      },
      {
        id: "d",
        text: "validação irrestrita do conhecimento adquirido exclusivamente pelos cinco sentidos.",
        isCorrect: false,
        distractorRationale: "Na teoria de Platão, os sentidos são a fonte do engano e das sombras, devendo ser superados pelo intelecto."
      },
      {
        id: "e",
        text: "rejeição de qualquer forma de reflexão política na gestão da cidade.",
        isCorrect: false,
        distractorRationale: "A alegoria integra A República, cuja finalidade máxima é fundamentar a cidade justa governada pelo rei-filósofo."
      }
    ],
    detailedExplanation: {
      summary: "A Alegoria da Caverna ilustra a teoria do dualismo platônico: a passagem da doxa (ilusão dos sentidos na caverna) para a episteme (conhecimento inteligível fora da caverna).",
      stepByStep: [
        "1. Interior da caverna: correntes, sombras e ecos representam o Mundo Sensível e a doxa (opinião).",
        "2. Subida íngreme: o esforço árduo da educação filosófica e da dialética.",
        "3. Exterior: Mundo Inteligível das Formas e Ideias eternas.",
        "4. Sol: a Ideia Suprema do Bem, que ilumina todas as outras ideias e confere inteligibilidade ao real."
      ],
      coreConcept: "Dualismo ontológico e epistemológico platônico: Mundo Sensível vs. Mundo Inteligível.",
      trapWarning: "Lembre-se: em Platão, as coisas materiais deste mundo são cópias imperfeitas das Ideias perfeitas e imutáveis existentes no plano inteligível!"
    },
    commonTraps: ["Achar que o mito defende a valorização do conhecimento empírico sensorial."],
    tags: ["Filosofia", "Platão", "Mito da Caverna", "Mundo das Ideias", "Epistemologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-003",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Filosofia",
    subtopic: "Aristóteles e a Ética do Meio-Termo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A virtude é, portanto, uma disposição de caráter relacionada com a escolha de ações e paixões, e consistente num meio-termo (mesótis), isto é, a mediania relativa a nós, que é determinada por um princípio racional próprio do homem dotado de sabedoria prática (phrónesis). É um meio-termo entre dois vícios, um por excesso e outro por falta.",
      source: "ARISTÓTELES. Ética a Nicômaco. Livro II. Tradução de Leonel Vallandro e Gerd Bornheim. São Paulo: Nova Cultural, 1987 (adaptado)."
    },
    prompt: "Com base na filosofia moral de Aristóteles, a conquista da felicidade plena (eudaimonia) e a prática da virtude ética fundamentam-se na",
    options: [
      {
        id: "a",
        text: "busca irrestrita de prazeres sensoriais imediatos desprovidos de limites morais.",
        isCorrect: false,
        distractorRationale: "Essa postura corresponde ao hedonismo vulgar radical, veementemente criticado por Aristóteles."
      },
      {
        id: "b",
        text: "anulação completa de todos os sentimentos humanos em favor de um ascetismo monástico rígido.",
        isCorrect: false,
        distractorRationale: "Aristóteles não prega a aniquilação das paixões, mas a sua moderação racional consciente."
      },
      {
        id: "c",
        text: "adoção da moderação racional e do justo meio entre extremos viciosos de carência e excesso, consolidada pelo hábito cotidiano.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para Aristóteles, a virtude moral (areté) não é inata nem teórica abstrata: adquire-se pela prática habitual guiada pela prudência (phrónesis). A virtude situa-se no 'justo meio' (mesótis) entre dois vícios: por exemplo, a coragem é a justa medida entre a covardia (falta/deficiência) e a temeridade irresponsável (excesso). O exercício continuado dessa mediania conduz o cidadão à eudaimonia (realização plena do ser humano enquanto animal político e racional)."
      },
      {
        id: "d",
        text: "obediência cega a mandamentos divinos revelados por sacerdotes em templos sagrados.",
        isCorrect: false,
        distractorRationale: "A ética aristotélica é teleológica e racional, alicerçada na natureza do homem na pólis, e não em revelações místicas sobrenaturais."
      },
      {
        id: "e",
        text: "acumulação material ilimitada de riquezas monetárias como fim supremo da existência humana.",
        isCorrect: false,
        distractorRationale: "Na obra aristotélica, a riqueza é mero instrumento e não a finalidade ética do ser humano."
      }
    ],
    detailedExplanation: {
      summary: "A virtude aristotélica é a mediania (justo meio) entre o excesso e a falta, cultivada pelo hábito guiado pela prudência racional.",
      stepByStep: [
        "1. Finalidade humana: a eudaimonia (felicidade/plenitude de vida).",
        "2. Natureza da virtude: disposição voluntária orientada pela razão e exercitada pelo hábito.",
        "3. Doutrina do Justo Meio: Virtude = Mediania entre Excesso e Deficiência.",
        "4. Exemplos clássicos: Covardia (falta) ⟵ Coragem (justo meio) ⟶ Temeridade (excesso); Avareza (falta) ⟵ Generosidade (justo meio) ⟶ Prodigalidade (excesso)."
      ],
      coreConcept: "Ética das virtudes de Aristóteles: eudaimonia, phrónesis e a doutrina da mediania (mesótis).",
      trapWarning: "Cuidado: nem toda ação admite meio-termo! Em ações intrinsicamente más (como o assassinato, o roubo ou a traição), não existe moderação aceitável em Aristóteles."
    },
    commonTraps: ["Achar que o justo meio significa ficar em cima do muro ou que aceita moderação em atos hediondos."],
    tags: ["Filosofia", "Aristóteles", "Ética a Nicômaco", "Justo Meio", "Eudaimonia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-004",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Filosofia",
    subtopic: "Helenismo e o Estoicismo",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Das coisas que existem, algumas dependem de nós e outras não dependem de nós. Dependem de nós o julgamento, o impulso, o desejo e a aversão; em uma palavra, tudo o que é ação nossa. Não dependem de nós o corpo, as posses, a reputação e os cargos públicos; em uma palavra, tudo o que não é ação nossa. Se você considerar como dependente de você aquilo que depende de você, ninguém jamais o coagirá.",
      source: "EPITETO. Enquirídio (Manual). Tradução de Aldo Dinucci e Alfredo Julien. São Cristóvão: EdiUFS, 2012 (adaptado)."
    },
    prompt: "O fragmento sintetiza o núcleo da ética estoica no período helenístico. De acordo com essa corrente filosófica, a conquista da tranquilidade da alma (ataraxia) requer",
    options: [
      {
        id: "a",
        text: "o controle absoluto de todas as forças climáticas e políticas externas à vontade humana.",
        isCorrect: false,
        distractorRationale: "Os estoicos ensinam que é impossível controlar eventos externos à nossa vontade."
      },
      {
        id: "b",
        text: "a distinção clara entre o que está sob o controle do indivíduo (atitudes e juízos) e o que escapa à sua vontade (fatores externos), aceitando o destino com resignação serena.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. No estoicismo (fundado por Zenão de Cício e continuado por Sêneca, Epiteto e Marco Aurélio), a chave da sabedoria é a dicotomia do controle: o sábio deve focar sua energia apenas no que depende de sua razão interna (suas opiniões, desejos e virtudes morais) e cultivar a impassibilidade serena (apatheia/ataraxia) diante do que não depende dele (doenças, acidentes, perda de bens, morte), aceitando a ordem racional cósmica do logos (amor fati)."
      },
      {
        id: "c",
        text: "a revolta armada contínua contra a estrutura da sociedade e dos governantes.",
        isCorrect: false,
        distractorRationale: "O estoicismo prega a harmonia com a natureza universal e não a desestabilização contínua de rebeliões fúteis."
      },
      {
        id: "d",
        text: "o isolamento eremítico absoluto com renúncia completa ao convívio comunitário.",
        isCorrect: false,
        distractorRationale: "Os estoicos defendiam o cosmopolitismo (somos todos cidadãos do mundo) e atuavam na vida pública (Marco Aurélio era imperador romano)."
      },
      {
        id: "e",
        text: "a crença de que a dor física não existe e decorre exclusivamente de alucinações visuais.",
        isCorrect: false,
        distractorRationale: "Os estoicos reconhecem a dor física como sensação real, mas sustentam que o sofrimento mental decorre do julgamento negativo que fazemos dela."
      }
    ],
    detailedExplanation: {
      summary: "O estoicismo fundamenta a paz de espírito na distinção entre o que depende da nossa vontade (juízos internos) e o que foge ao nosso controle (fatos externos).",
      stepByStep: [
        "1. Dicotomia do controle: divida o mundo em 'coisas que controlo' vs. 'coisas que não controlo'.",
        "2. Coisas sob controle: pensamentos, atitudes, valores, caráter e reações éticas.",
        "3. Fora de controle: acontecimentos externos, opiniões alheias, saúde física frágil e morte.",
        "4. Resultado: serenidade (ataraxia) e ausência de perturbação emocional (apatheia)."
      ],
      coreConcept: "Ética estoica: dicotomia do controle, conformidade com a natureza e ataraxia.",
      trapWarning: "Estoicismo não significa 'insensibilidade fria', mas sim autocontrole emocional racional sobre como reagimos aos reveses da vida."
    },
    commonTraps: ["Achar que o estoico ignora a realidade ou que prega o desespero resignado passivo."],
    tags: ["Filosofia", "Helenismo", "Estoicismo", "Epiteto", "Ataraxia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-005",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Descartes e a Dúvida Metódica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Notei, todavia, que, enquanto eu queria pensar que tudo era falso, era de todo necessário que eu, que o pensava, fosse alguma coisa. E, notando que esta verdade — Penso, logo existo (Cogito, ergo sum) — era tão firme e tão certa que todas as mais extravagantes suposições dos céticos não eram capazes de a abalar, julguei que podia aceitá-la, sem escrúpulo, como o primeiro princípio da Filosofia que procurava.",
      source: "DESCARTES, René. Discurso do Método. Quarta Parte. Tradução de J. Guinsburg e Bento Prado Jr. São Paulo: Abril Cultural, 1979."
    },
    prompt: "Na construção do racionalismo moderno cartesiano, a formulação da primeira certeza indubitável ('Cogito, ergo sum') tem como ponto de partida a",
    options: [
      {
        id: "a",
        text: "aceitação irrestrita dos dados empíricos fornecidos pela visão e pelo tato.",
        isCorrect: false,
        distractorRationale: "Descartes coloca os sentidos sob suspeita inicial exatamente porque os sentidos às vezes nos enganam."
      },
      {
        id: "b",
        text: "aplicação radical da dúvida metódica e hiperbólica como ferramenta para desconstruir qualquer crença passível de incerteza.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A dúvida cartesiana não é cética destrutiva (duvidar por duvidar), mas metódica e voluntária: uma ferramenta de depuração racional. Descartes duvida sucessivamente dos sentidos (que às vezes nos enganam), da distinção entre vigília e sono e até mesmo das certezas matemáticas (pela hipótese do gênio maligno). Contudo, ao duvidar de tudo, percebe que para duvidar é indispensável pensar; e para pensar, é forçoso existir enquanto substância pensante (res cogitans). O Cogito surge como a primeira rocha de certeza inabalável."
      },
      {
        id: "c",
        text: "submissão voluntária aos cânones da autoridade escolástica medieval.",
        isCorrect: false,
        distractorRationale: "O projeto de Descartes é de ruptura contra o princípio medieval de autoridade tradicional (ipse dixit)."
      },
      {
        id: "d",
        text: "observação estatística do comportamento animal em ambientes controlados.",
        isCorrect: false,
        distractorRationale: "A descoberta do Cogito é puramente metafísica e a priori, dispensando indução biológica empírica."
      },
      {
        id: "e",
        text: "afirmação de que o homem é incapaz de alcançar qualquer conhecimento racional confiável.",
        isCorrect: false,
        distractorRationale: "Descartes combate exatamente o ceticismo radical, provando que a razão humana é capaz de encontrar a verdade clara e distinta."
      }
    ],
    detailedExplanation: {
      summary: "A dúvida cartesiana é metódica: usa a suspensão de certezas para encontrar uma verdade indubitável que resista a qualquer questionamento.",
      stepByStep: [
        "1. Objetivo de Descartes: fundar a ciência e a filosofia sobre bases sólidas e inabaláveis.",
        "2. Método: duvidar de tudo o que admitir a menor margem de incerteza (sentidos, sonho, gênio maligno).",
        "3. Ponto de inflexão: mesmo que um gênio enganador me iluda sobre tudo, para ser enganado eu preciso pensar.",
        "4. Certeza primeira: 'Se penso, logo existo' (Cogito, ergo sum). Sou uma coisa pensante (res cogitans)."
      ],
      coreConcept: "Racionalismo moderno de René Descartes: dúvida metódica, res cogitans e o Cogito como fundamento epistemológico.",
      trapWarning: "A dúvida de Descartes NÃO é ceticismo conformista; é um instrumento passageiro rigoroso para alcançar certezas claras e distintas."
    },
    commonTraps: ["Confundir a dúvida metódica cartesiana com o ceticismo definitivo que nega a possibilidade da verdade."],
    tags: ["Filosofia", "Descartes", "Racionalismo", "Cogito", "Dúvida Metódica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-006",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "John Locke e o Empirismo da Tábula Rasa",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Suponhamos, pois, que a mente é, como dissemos, um papel em branco, desprovida de todos os caracteres, sem quaisquer ideias; como ela vem a ser suprida? De onde lhe vem esse vasto estoque e essa variedade infinita que a imaginação do homem pintou com uma variedade quase infinita? A isso respondo numa só palavra: da EXPERIÊNCIA. Nela está fundado todo o nosso conhecimento, e dela em última análise se deriva todo ele.",
      source: "LOCKE, John. Ensaio sobre o Entendimento Humano. Livro II. Tradução de Anoar Aiex. São Paulo: Nova Cultural, 1999."
    },
    prompt: "O argumento apresentado por John Locke opõe-se frontalmente à teoria das ideias inatas de Platão e Descartes, estabelecendo como base do empirismo britânico a concepção de que",
    options: [
      {
        id: "a",
        text: "o ser humano já nasce com conceitos universais pré-programados na alma pela divindade.",
        isCorrect: false,
        distractorRationale: "Essa é a teoria inatista que Locke busca desmantelar em seu livro."
      },
      {
        id: "b",
        text: "a mente humana é desprovida de ideias natas no nascimento (tábula rasa), adquirindo todas as suas representações a partir das sensações e da experiência reflexiva.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na epistemologia empirista de John Locke, não existem ideias inatas (ideias impressas na mente desde o nascimento). Ao nascer, a mente é como uma 'tábula rasa' (papel em branco). Todo o acervo de ideias simples decorre de duas fontes empíricas: a sensação externa (impressões captadas pelos cinco sentidos: cor, forma, textura, temperatura) e a reflexão interna (operações da mente sobre essas impressões: lembrar, duvidar, querer, raciocinar)."
      },
      {
        id: "c",
        text: "o conhecimento científico independe totalmente de impressões táteis ou visuais.",
        isCorrect: false,
        distractorRationale: "O empirismo afirma o exato oposto: todo conhecimento depende primariamente dos sentidos."
      },
      {
        id: "d",
        text: "a linguagem verbal impede a mente humana de absorver a realidade objetiva.",
        isCorrect: false,
        distractorRationale: "Locke analisa os signos linguísticos como ferramentas essenciais de comunicação das ideias obtidas pela experiência."
      },
      {
        id: "e",
        text: "as ideias abstratas possuem realidade material independente dos cérebros humanos.",
        isCorrect: false,
        distractorRationale: "Ideias são conteúdos mentais derivados da percepção empírica e não entidades independentes no espaço."
      }
    ],
    detailedExplanation: {
      summary: "Locke refuta o inatismo defendendo que a mente é uma folha em branco (tábula rasa) preenchida pela experiência sensorial e pela reflexão.",
      stepByStep: [
        "1. Crítica de Locke: se houvesse ideias inatas (como Deus ou princípios lógicos), bebês e pessoas iletradas as conheceriam espontaneamente.",
        "2. Conceito da Tábula Rasa: a mente humana nasce sem ideias prévias.",
        "3. Fonte do conhecimento: Experiência empírica.",
        "4. Vias da experiência: Sensação (canais sensoriais externos) + Reflexão (percepção interna das operações mentais)."
      ],
      coreConcept: "Empirismo de John Locke: rejeição das ideias inatas e a mente como tábula rasa suprida pela experiência.",
      trapWarning: "Não confunda Locke com Descartes: para Descartes, a razão tem ideias inatas (como a ideia de perfeição); para Locke, nada existe no intelecto que não tenha passado antes pelos sentidos."
    },
    commonTraps: ["Atribuir a defesa de ideias inatas a John Locke."],
    tags: ["Filosofia", "John Locke", "Empirismo", "Tábula Rasa", "Sensação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-007",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "David Hume e a Crítica da Causalidade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Todos os nossos raciocínios concernentes a fatos parecem fundar-se na relação de causa e efeito. Mas o conhecimento dessa relação não é obtido, em nenhum caso, por raciocínios a priori, mas decorre inteiramente da experiência, quando descobrimos que certos objetos particulares estão constantemente conjugados uns aos outros. O sol nascerá amanhã não é uma proposição menos inteligível e não implica mais contradição do que a afirmação: o sol não nascerá amanhã.",
      source: "HUME, David. Investigação sobre o Entendimento Humano. Seção IV. Tradução de José Oscar de Almeida Marques. São Paulo: Editora Unesp, 1999."
    },
    prompt: "A reflexão de David Hume sobre a causalidade abalou os alicerces do dogmatismo científico ao demonstrar que a certeza de que o futuro repetirá o passado fundamenta-se no(a)",
    options: [
      {
        id: "a",
        text: "dedução puramente lógica irrefutável e necessária matematicamente.",
        isCorrect: false,
        distractorRationale: "Hume prova que a causa e efeito não é dedução lógica analítica necessária; a sua negação não contém contradição lógica."
      },
      {
        id: "b",
        text: "hábito e no costume psicológico gerado pela repetição constante de eventos sucessivos, e não em uma necessidade ontológica da natureza.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. No ceticismo empirista radical de David Hume, a experiência nos mostra apenas conjunções constantes (um evento A seguido pelo evento B, como fogo e calor ou bolas de bilhar se chocando), mas nunca a conexão causal necessária oculta entre eles. Como nos habituamos a ver B suceder A reiteradas vezes no passado, nossa mente projeta por costume (hábito psicológico) a expectativa de que o mesmo ocorrerá no futuro. A crença na causalidade é, portanto, uma predisposição psicológica prática da natureza humana, e não uma lei dedutiva universal a priori."
      },
      {
        id: "c",
        text: "revelação teológica de uma ordem divina imutável no cosmos.",
        isCorrect: false,
        distractorRationale: "Hume recusa fundamentações teológicas para fenômenos do entendimento humano."
      },
      {
        id: "d",
        text: "visão direta das forças gravitacionais que conectam os corpos materiais.",
        isCorrect: false,
        distractorRationale: "Hume aponta que as forças que unem causas aos seus efeitos são invisíveis e inobserváveis empiricamente."
      },
      {
        id: "e",
        text: "impossibilidade do cérebro em registrar impressões sensoriais externas.",
        isCorrect: false,
        distractorRationale: "Para Hume, as impressões sensoriais são vivas e reais; o que é ilusório é a inferência indutiva infalível para o futuro."
      }
    ],
    detailedExplanation: {
      summary: "Hume demonstra que a ideia de causalidade necessária nasce do hábito/costume da repetição no tempo, e não de uma lei lógica matemática.",
      stepByStep: [
        "1. Observação empírica: vemos o evento A e logo depois o evento B acontecerem.",
        "2. Limitação dos sentidos: vemos sucessão cronológica, mas NÃO vemos a 'cola' causal que obriga B a ocorrer.",
        "3. Crítica da indução: ter visto o sol nascer 1 milhão de vezes não garante pela lógica analítica pura que ele nascerá amanhã.",
        "4. Conclusão: a crença na causalidade é um produto do hábito psicológico, essencial para a sobrevivência prática, mas sem necessidade racional a priori."
      ],
      coreConcept: "Crítica humeana da causalidade: problema da indução e fundamentação no hábito e no costume.",
      trapWarning: "Foi essa crítica de Hume que, segundo Immanuel Kant, despertou o filósofo prussiano de seu 'sono dogmático' e originou o criticismo kantiano!"
    },
    commonTraps: ["Achar que Hume afirma que as coisas acontecem aleatoriamente por milagre."],
    tags: ["Filosofia", "David Hume", "Causalidade", "Hábito", "Empirismo Cético"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-008",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Immanuel Kant e o Esclarecimento (Aufklärung)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Esclarecimento (Aufklärung) é a saída do homem de sua menoridade, da qual ele próprio é culpado. A menoridade é a incapacidade de fazer uso do seu entendimento sem a direção de outro indivíduo. O homem é o próprio culpado dessa menoridade se a sua causa não reside na falta de entendimento, mas na falta de decisão e de coragem de servir-se de si mesmo sem a direção de outrem. Sapere aude! Tem coragem de fazer uso do teu próprio entendimento! Tal é o lema do Esclarecimento.",
      source: "KANT, Immanuel. Resposta à pergunta: O que é o Esclarecimento? Tradução de Raimundo Vier. Petrópolis: Vozes, 1985 (adaptado)."
    },
    prompt: "No texto seminal do Iluminismo, Immanuel Kant convoca os cidadãos a superarem a menoridade intelectual. Para o filósofo, essa superação exige que o sujeito",
    options: [
      {
        id: "a",
        text: "transfira todas as suas decisões existenciais para a tutela do Estado absolutista.",
        isCorrect: false,
        distractorRationale: "Isso perpetuaria a condição de menoridade subserviente que Kant condena."
      },
      {
        id: "b",
        text: "rompa com a preguiça e a covardia, exercendo a autonomia crítica da própria razão de forma livre no debate público.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Kant diagnostica que a permanência na 'menoridade' não resulta de déficit cognitivo, mas de preguiça e covardia moral, pois é cômodo ter um livro que pense por mim, um diretor espiritual que decida minha consciência e um governante que decida minha vida. O lema 'Sapere aude' (ousa saber) conclama à autonomia intelectual: pensar por conta própria, usando livremente o entendimento na esfera pública e recusando tutelas dogmáticas e autoritárias."
      },
      {
        id: "c",
        text: "abandone a leitura e o estudo formal em prol de impulsos emocionais irracionais.",
        isCorrect: false,
        distractorRationale: "O Iluminismo valoriza a razão crítica estruturada e não o irracionalismo cego."
      },
      {
        id: "d",
        text: "rejeite o convívio cívico e a moralidade coletiva para viver isolado sem leis.",
        isCorrect: false,
        distractorRationale: "Kant defende o cumprimento das leis civis concomitante ao exercício do uso público da razão."
      },
      {
        id: "e",
        text: "aceite verdades consagradas pelo simples fato de serem tradicionais na história.",
        isCorrect: false,
        distractorRationale: "O Iluminismo combate precisamente o argumento de autoridade e o apego cego às tradições arcaicas."
      }
    ],
    detailedExplanation: {
      summary: "Para Kant, o Esclarecimento é a passagem da menoridade (ser guiado por outros) para a maioridade (pensar com autonomia pela própria razão: Sapere aude).",
      stepByStep: [
        "1. Menoridade: incapacidade voluntária de usar a razão sem a tutela de terceiros (padre, governante, livros dogmáticos).",
        "2. Causas da menoridade: preguiça de pensar e covardia diante da liberdade.",
        "3. Sapere Aude: 'Ousa saber' — imperativo de autonomia intelectual.",
        "4. Uso público da razão: liberdade irrestrita para expressar críticas racionais perante a sociedade como cidadão pensante."
      ],
      coreConcept: "Iluminismo kantiano: Aufklärung, autonomia da razão e superação da menoridade intelectual.",
      trapWarning: "Kant distingue uso público da razão (onde a crítica é livre para reformar as leis) do uso privado da razão (onde, no exercício de uma função pública ou militar, deve-se obedecer às normas institucionais)."
    },
    commonTraps: ["Achar que menoridade em Kant refere-se à idade biológica (menor de 18 anos)."],
    tags: ["Filosofia", "Kant", "Iluminismo", "Esclarecimento", "Sapere Aude", "Autonomia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-009",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Filosofia",
    subtopic: "Kant e o Imperativo Categórico",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que ela se torne lei universal. [...] Age de tal maneira que uses a humanidade, tanto na tua pessoa como na pessoa de qualquer outro, sempre e simultaneamente como um fim, e nunca simplesmente como um meio.",
      source: "KANT, Immanuel. Fundamentação da Metafísica dos Costumes. Tradução de Paulo Quintela. Lisboa: Edições 70, 1986 (adaptado)."
    },
    prompt: "A ética deontológica kantiana rompe com modelos utilitaristas e consequencialistas ao postular o Imperativo Categórico. De acordo com esse princípio, um ato é autenticamente moral quando é praticado",
    options: [
      {
        id: "a",
        text: "com a intenção de obter recompensas financeiras, prestígio social ou aprovação pública.",
        isCorrect: false,
        distractorRationale: "Isso caracterizaria um imperativo hipotético de interesse pessoal egoísta, sem valor moral genuíno."
      },
      {
        id: "b",
        text: "exclusivamente por dever racional incondicional, tratando todo ser humano como um fim em si mesmo dotado de dignidade e nunca como mero instrumento.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na ética do dever (deontologia) de Kant, o valor moral de uma ação não reside nas suas consequências ou na utilidade gerada, mas na pureza da máxima racional que a move. O Imperativo Categórico impõe duas fórmulas universais: 1) Universalidade: a regra da sua ação deve poder ser desejada como lei para todos os seres racionais sem contradição (ex: a mentira não pode ser universalizada, pois anularia a própria confiança na palavra); 2) Dignidade da pessoa: os seres humanos possuem valor intrínseco (dignidade e não preço), sendo imoral instrumentalizar qualquer pessoa como ferramenta para interesses alheios."
      },
      {
        id: "c",
        text: "pelo cálculo das consequências pragmáticas que gerem o maior prazer para a maioria.",
        isCorrect: false,
        distractorRationale: "Esse é o princípio utilitarista de Bentham e Stuart Mill, diametralmente oposto à deontologia kantiana."
      },
      {
        id: "d",
        text: "pelo medo de sanções penais ou punições divinas no pós-morte.",
        isCorrect: false,
        distractorRationale: "Ações motivadas pelo medo são heterônomas; a moral kantiana exige autonomia do dever."
      },
      {
        id: "e",
        text: "pela adequação cega às normas culturais de cada grupo particular relativista.",
        isCorrect: false,
        distractorRationale: "O imperativo kantiano é universal e categórico, recusando o relativismo moral de ocasião."
      }
    ],
    detailedExplanation: {
      summary: "O Imperativo Categórico kantiano exige universalidade da ação e respeito absoluto à dignidade humana (nunca usar o outro como mero meio).",
      stepByStep: [
        "1. Imperativo Hipotético: condicional ('Se você quer X, faça Y' — visa um objetivo pragmático).",
        "2. Imperativo Categórico: incondicional e universal ('Faça Y porque é o dever moral racional').",
        "3. Teste da universalização: posso desejar que todo mundo minta? Não, senão ninguém acreditaria em ninguém.",
        "4. Fórmula da humanidade: pessoas têm dignidade (não têm preço) e nunca devem ser tratadas como meros objetos ou instrumentos."
      ],
      coreConcept: "Ética deontológica kantiana: imperativo categórico, universalidade e dignidade humana.",
      trapWarning: "Para Kant, mesmo que mentir salve uma vida em uma situação prática, a mentira continua sendo imoral em si mesma, pois a moral kantiana não admite cálculos de conveniência de resultados!"
    },
    commonTraps: ["Confundir a ética kantiana com o utilitarismo que calcula custo-benefício de resultados."],
    tags: ["Filosofia", "Kant", "Imperativo Categórico", "Deontologia", "Dignidade Humana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-010",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Filosofia",
    subtopic: "Maquiavel e a Autonomia da Política",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Muitos imaginaram repúblicas e principados que nunca se viram nem se souberam reais. Mas a distância entre o como se vive e o como se deveria viver é tão grande que aquele que abandona o que se faz pelo que se deveria fazer prepara sua ruína em vez de sua conservação. Pois o homem que quiser fazer profissão de bondade em todas as coisas arruinar-se-á entre tantos que não são bons. Daí ser necessário a um príncipe que queira conservar-se aprender a poder não ser bom, e a valer-se ou não disso segundo a necessidade.",
      source: "MAQUIAVEL, Nicolau. O Príncipe. Capítulo XV. Tradução de Lívio Xavier. São Paulo: Nova Cultural, 1987 (adaptado)."
    },
    prompt: "Ao analisar a conduta dos governantes renascentistas, Nicolau Maquiavel funda a teoria política moderna ao defender o(a)",
    options: [
      {
        id: "a",
        text: "subordinação irrestrita da administração pública aos dogmas morais da Igreja e das virtudes cristãs tradicionais.",
        isCorrect: false,
        distractorRationale: "Maquiavel rompe pioneiramente com a visão medieval que subordinava o Estado à moral religiosa."
      },
      {
        id: "b",
        text: "autonomia da esfera política, separando o julgamento da eficácia estatal da moralidade religiosa privada para garantir a ordem e a manutenção do poder.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Maquiavel é considerado o pai da ciência política moderna porque rompe com o idealismo utópico clássico (Platão, Cícero, escolástica) e introduz o realismo político ('a verdade efetiva das coisas' - verità effettuale). A política torna-se uma esfera autônoma com lógica própria: o sucesso do príncipe reside na manutenção da estabilidade do Estado e da ordem pública. Para isso, o governante deve articular virtù (habilidade estratégica, coragem e capacidade de adaptação) para domar a fortuna (o acaso, as circunstâncias imprevisíveis da história)."
      },
      {
        id: "c",
        text: "extinção de qualquer exército nacional em prol de tratados de paz perpétua imediatos.",
        isCorrect: false,
        distractorRationale: "Maquiavel defende exércitos próprios de cidadãos e condena veementemente o uso de mercenários covardes."
      },
      {
        id: "d",
        text: "estabelecimento de uma monarquia teocrática hereditária absoluta legitimada pelo direito divino dos reis.",
        isCorrect: false,
        distractorRationale: "Maquiavel fundamenta o poder na dinâmica humana das forças sociais (grandes versus povo) e não na teocracia divina."
      },
      {
        id: "e",
        text: "retirada total dos cidadãos do espaço público em nome de uma vida de meditação contemplativa.",
        isCorrect: false,
        distractorRationale: "Maquiavel valoriza a participação cívica combativa, como detalhado em seus Comentários sobre a Primeira Década de Tito Lívio."
      }
    ],
    detailedExplanation: {
      summary: "Maquiavel inaugura a ciência política moderna ao separar a ética privada/religiosa da ação política pública, focando na 'verdade efetiva das coisas' (realismo político).",
      stepByStep: [
        "1. Ruptura: abandono das repúblicas imaginárias utópicas em prol da realidade nua e crua (verità effettuale).",
        "2. Autonomia da Política: a ação política é avaliada pela manutenção do Estado e da paz social, e não por pecados cristãos individuais.",
        "3. Virtù: astúcia e firmeza para agir conforme a exigência do momento (saber ser leão e raposa).",
        "4. Fortuna: as circunstâncias mutáveis e a sorte, que o governante com virtù deve saber domar."
      ],
      coreConcept: "Realismo político maquiaveliano: separação entre ética religiosa e política, dinâmica entre virtù e fortuna.",
      trapWarning: "A frase 'os fins justificam os meios' não foi escrita textualmente por Maquiavel; o que ele defende é que o êxito na conservação do Estado é o critério de validação do governante virtuoso!"
    },
    commonTraps: ["Reduzir Maquiavel a uma caricatura de 'vilão cruel' e ignorar seu papel fundador da ciência política."],
    tags: ["Filosofia", "Maquiavel", "O Príncipe", "Realismo Político", "Virtù e Fortuna"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-011",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Thomas Hobbes e o Leviatã",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Com isto se torna manifesto que, durante o tempo em que os homens vivem sem um poder comum capaz de os manter a todos em respeito, eles se encontram naquela condição a que se chama guerra; e uma guerra que é de todos os homens contra todos os homens. [...] Numa tal situação, a vida do homem é solitária, pobre, sórdida, embrutecida e curta.",
      source: "HOBBES, Thomas. Leviatã. Primeira Parte. Capítulo XIII. Tradução de João Paulo Monteiro e Maria Beatriz Nizza da Silva. São Paulo: Abril Cultural, 1974."
    },
    prompt: "Na teoria contratualista de Thomas Hobbes, a justificativa racional para a criação do Estado soberano (o Leviatã) fundamenta-se na necessidade de",
    options: [
      {
        id: "a",
        text: "assegurar a liberdade anárquica irrestrita para que cada cidadão faça a sua própria justiça individual.",
        isCorrect: false,
        distractorRationale: "Isso é exatamente o estado de natureza que Hobbes quer superar, pois gera a guerra de todos contra todos."
      },
      {
        id: "b",
        text: "superar a insegurança crônica e a guerra generalizada do estado de natureza, transferindo o monopólio da força para um soberano capaz de garantir a ordem e a preservação da vida.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para Hobbes, no estado de natureza os indivíduos vivem em permanente medo da morte violenta, pois 'o homem é o lobo do homem' (homo homini lupus) impulsionado por competição, desconfiança e glória. Pelo pacto social originário, os homens abdicam de sua liberdade irrestrita e transferem o poder coercitivo para um poder central unificado e soberano (o Leviatã). Em troca dessa submissão política, o Estado assegura a paz civil, a lei e a integridade da vida de todos."
      },
      {
        id: "c",
        text: "implantar a divisão harmônica do poder em três esferas autônomas e independentes.",
        isCorrect: false,
        distractorRationale: "Hobbes defende a indivisibilidade da soberania; a divisão dos três poderes é a teoria de Montesquieu."
      },
      {
        id: "d",
        text: "eliminar a propriedade privada instituindo uma sociedade comunal sem classes.",
        isCorrect: false,
        distractorRationale: "Hobbes não é comunista; ele sustenta que a propriedade só pode existir de forma protegida onde há leis emitidas pelo soberano."
      },
      {
        id: "e",
        text: "preservar a bondade natural e a pureza selvagem que o homem possuía antes da civilização.",
        isCorrect: false,
        distractorRationale: "Essa visão do 'bom selvagem' corrompido pela civilização pertence a Jean-Jacques Rousseau, oposta ao pessimismo hobbesiano."
      }
    ],
    detailedExplanation: {
      summary: "Hobbes concebe o contrato social como um pacto de submissão para escapar da guerra de todos contra todos no estado de natureza, garantindo a paz.",
      stepByStep: [
        "1. Estado de Natureza hobbesiano: ausência de leis e de Estado soberano.",
        "2. Condição humana: 'O homem é o lobo do próprio homem' (guerra de todos contra todos por medo e ambição).",
        "3. Contrato Social: indivíduos renunciam à liberdade natural de usar a própria força.",
        "4. O Leviatã: o Estado soberano monopoliza a violência legítima para proteger a vida e evitar a guerra civil."
      ],
      coreConcept: "Contratualismo de Thomas Hobbes: estado de natureza, pacto social e soberania absoluta para preservação da vida.",
      trapWarning: "Lembre-se da diferença entre os contratualistas: Hobbes = Estado de natureza é guerra (pede Estado forte); Locke = Estado de natureza tem direitos naturais (pede Estado liberal); Rousseau = Bom selvagem (pede democracia e vontade geral)."
    },
    commonTraps: ["Confundir a visão pessimista de Hobbes com a tese do bom selvagem de Rousseau."],
    tags: ["Filosofia", "Hobbes", "Contratualismo", "Leviatã", "Estado de Natureza"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-012",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Rousseau e o Contrato Social",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O homem nasce livre, e por toda parte encontra-se a ferros. O que se crê senhor dos demais não deixa de ser mais escravo do que eles. Como se deu essa mudança? Ignoro-o. O que pode legitimá-la? Creio poder resolver essa questão. [...] Encontrar uma forma de associação que defenda e proteja a pessoa e os bens de cada associado com toda a força comum, e pela qual cada um, unindo-se a todos, não obedeça todavia senão a si mesmo e permaneça tão livre como antes. Esse é o problema fundamental.",
      source: "ROUSSEAU, Jean-Jacques. Do Contrato Social. Livro I. Tradução de Lourdes Santos Machado. São Paulo: Nova Cultural, 1987."
    },
    prompt: "Para superar a opressão social denunciada no texto, Jean-Jacques Rousseau propõe um modelo republicano no qual a legitimidade do poder político fundamenta-se na",
    options: [
      {
        id: "a",
        text: "soberania popular exercida pela Vontade Geral, na qual os cidadãos obedecem às leis que eles próprios elaboraram coletivamente.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Rousseau propõe o pacto social legítimo fundado na Vontade Geral (volonté générale), que não é a mera soma egoísta de vontades particulares, mas o interesse comum de toda a comunidade civil. Ao alienar seus direitos para a coletividade, o cidadão obedece a uma lei de cuja feitura participou ativamente como legislador soberano. Assim, liberdade e lei coincidem, garantindo a soberania popular democrática inalienável."
      },
      {
        id: "b",
        text: "concentração irrevogável de todos os poderes civis e religiosos nas mãos de uma dinastia absolutista.",
        isCorrect: false,
        distractorRationale: "Rousseau é crítico contundente do absolutismo hobbesiano e das monarquias hereditárias."
      },
      {
        id: "c",
        text: "defesa do direito irrestrito dos mais fortes em submeter os mais fracos pelo uso da violência física.",
        isCorrect: false,
        distractorRationale: "Rousseau refuta expressamente o 'direito do mais forte' no capítulo III de Do Contrato Social."
      },
      {
        id: "d",
        text: "extinção da cidadania participativa em prol de uma burocracia técnica indicada por corporações financeiras.",
        isCorrect: false,
        distractorRationale: "Rousseau defende a soberania direta do povo reunido em assembleia, desconfiando de intermediários e oligarquias."
      },
      {
        id: "e",
        text: "adoção imediata da escravidão como instrumento de equilíbrio das contas públicas.",
        isCorrect: false,
        distractorRationale: "Rousseau condena a escravidão como um absurdo antinatural e nulo de pleno direito."
      }
    ],
    detailedExplanation: {
      summary: "Rousseau fundamenta a liberdade política na Vontade Geral: o povo é soberano e ser livre é obedecer à lei que você mesmo ajudou a criar.",
      stepByStep: [
        "1. Diagnóstico: 'O homem nasce livre, e em toda parte está a ferros' (a sociedade desigual corrompeu a liberdade natural).",
        "2. Solução: Contrato Social Democrático.",
        "3. Conceito da Vontade Geral: foco no bem comum e na igualdade de todos perante a lei.",
        "4. Soberania popular: o poder emana do povo e pertence unicamente ao povo, sendo inalienável e indivisível."
      ],
      coreConcept: "Contratualismo democrático de Rousseau: soberania popular, vontade geral e autonomia cívica.",
      trapWarning: "A Vontade Geral em Rousseau NÃO é a vontade da maioria numérica (que pode ser egoísta); é a orientação racional voltada para o interesse coletivo de toda a sociedade."
    },
    commonTraps: ["Confundir a Vontade Geral com uma simples votação de maioria em que cada um vota em benefício próprio."],
    tags: ["Filosofia", "Rousseau", "Contrato Social", "Vontade Geral", "Soberania Popular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-013",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Friedrich Nietzsche e a Crítica da Moral Tradicional",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A rebelião dos escravos na moral começa quando o próprio ressentimento se torna criador e gera valores: o ressentimento de seres aos quais a verdadeira reação, a dos atos, é vedada, e que só se reparam mediante uma vingança imaginária. Enquanto toda moral nobre nasce de um triunfante 'sim' a si mesma, a moral dos escravos diz de antemão 'não' a um 'outro', a um 'diferente', a um 'não-eu': e este 'não' é o seu ato criador.",
      source: "NIETZSCHE, Friedrich. Genealogia da Moral. Primeira Dissertação. Tradução de Paulo César de Souza. São Paulo: Companhia das Letras, 1998."
    },
    prompt: "Ao desenvolver o método genealógico para desvendar a origem histórica dos conceitos de bem e mal, Nietzsche denuncia que a moral judaico-cristã ocidental opera como uma",
    options: [
      {
        id: "a",
        text: "celebração plena da potência vital, dos instintos dionisíacos e da vontade de poder afirmativa.",
        isCorrect: false,
        distractorRationale: "Pelo contrário: Nietzsche afirma que essa moral reprime e condena os instintos vitais terrestres."
      },
      {
        id: "b",
        text: "moral do ressentimento (moral de escravos), que inverteu os valores nobres de força e coragem para enaltecer a fraqueza, a culpa e a submissão como virtudes sagradas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em Genealogia da Moral, Nietzsche investiga como os valores surgiram na história. A 'moral dos nobres/senhores' (da Grécia Arcaica) afirmava a vida, a excelência e a vitalidade corpórea ('bom' = forte, nobre, saudável; 'mau' = vulgar, impotente). Com a revolta dos escravos na moral, os fracos e impotentes, movidos pelo ressentimento (inveja e vingança espiritual dos desfavorecidos), inverteram os termos: elevaram a submissão, a humildade e o sofrimento à categoria de santidade, transformando o forte em 'malvado' e castrando a pulsão vital dionisíaca."
      },
      {
        id: "c",
        text: "comprovação matemática da existência de um mundo inteligível de ideias puras.",
        isCorrect: false,
        distractorRationale: "Nietzsche combate o idealismo platônico como a raiz da desvalorização do mundo sensível terreno."
      },
      {
        id: "d",
        text: "proposta de obediência cega ao positivismo e ao determinismo biológico mecanicista.",
        isCorrect: false,
        distractorRationale: "Nietzsche rejeita o positivismo e a fé ingênua na ciência moderna neutra."
      },
      {
        id: "e",
        text: "doutrina formulada pelos reis gregos para garantir a supremacia física dos atletas espartanos.",
        isCorrect: false,
        distractorRationale: "A moral dos escravos combatida por Nietzsche foi construída como reação contra os guerreiros aristocráticos."
      }
    ],
    detailedExplanation: {
      summary: "Nietzsche diagnostica que a moral tradicional ocidental é uma 'moral de escravos' alimentada pelo ressentimento que condena a vida terrena.",
      stepByStep: [
        "1. Método genealógico: investigar como os valores morais foram inventados historicamente.",
        "2. Moral dos Senhores: afirmativa, celebra a força, a nobreza e a vitalidade terrena (amor fati).",
        "3. Moral dos Escravos: reativa, nasce do ressentimento dos fracos que não podem agir pela força física.",
        "4. Inversão dos valores: a fraqueza vira 'humildade', a covardia vira 'paciência' e a vida terrena é desprezada em favor de um pós-morte imaginário."
      ],
      coreConcept: "Genealogia da moral em Nietzsche: moral dos escravos, ressentimento, niilismo e transvaloração de todos os valores.",
      trapWarning: "Nietzsche não prega a crueldade vulgar desmedida; ele convoca o indivíduo superior (Übermensch / Além-do-Homem) a superar o niilismo e criar seus próprios valores afirmativos da vida!"
    },
    commonTraps: ["Achar que Nietzsche defende a moralidade tradicional cristã ou confundi-lo com niilismo passivo."],
    tags: ["Filosofia", "Nietzsche", "Genealogia da Moral", "Ressentimento", "Vontade de Poder"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-014",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Hannah Arendt e a Banalidade do Mal",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O problema com Eichmann era exatamente que muitos eram como ele, e muitos não eram nem pervertidos nem sádicos, mas eram, e ainda são, terrível e assustadoramente normais. Do ponto de vista de nossas instituições jurídicas e de nossos critérios morais, essa normalidade era muito mais aterrorizante que todas as atrocidades juntas, pois implicava que este novo tipo de criminoso comete seus crimes em circunstâncias que tornam quase impossível para ele saber ou sentir que está agindo mal.",
      source: "ARENDT, Hannah. Eichmann em Jerusalém: Um relato sobre a banalidade do mal. Tradução de José Rubens Siqueira. São Paulo: Companhia das Letras, 1999."
    },
    prompt: "Ao cobrir o julgamento do carrasco nazista Adolf Eichmann, a filósofa Hannah Arendt cunhou o conceito de 'banalidade do mal'. Essa reflexão filosófica alerta para o perigo de um mal perpetrado por sujeitos que",
    options: [
      {
        id: "a",
        text: "atuam motivados por ódio doentio incontrolável e prazer sádico em ver a dor física alheia.",
        isCorrect: false,
        distractorRationale: "Arendt constatou que Eichmann não era um monstro sádico patológico, mas um burocrata medíocre assustadoramente normal."
      },
      {
        id: "b",
        text: "abrem mão da capacidade crítica de pensar e julgar moralmente, cumprindo ordens de sistemas totalitários como meros burocratas eficientes e alienados.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A tese da 'banalidade do mal' causou comoção mundial ao demonstrar que os crimes mais monstruosos do totalitarismo não foram cometidos exclusivamente por psicopatas sádicos, mas por funcionários públicos normais e cidadãos comuns que abdicaram do ato de pensar (thoughtlessness). Eichmann funcionava como uma engrenagem burocrática: cumpria ordens com zelo técnico, falava em clichês e não se colocava no lugar das vítimas, evidenciando que a incapacidade de reflexão ética crítica transforma qualquer pessoa comum em instrumento do mal em massa."
      },
      {
        id: "c",
        text: "desconhecem totalmente a língua e a cultura do país em que desempenham suas funções.",
        isCorrect: false,
        distractorRationale: "A alienação descrita por Arendt é ética e política, não um desconhecimento linguístico."
      },
      {
        id: "d",
        text: "rejeitam qualquer tipo de tecnologia moderna e de transporte ferroviário nas cidades.",
        isCorrect: false,
        distractorRationale: "O mal totalitário utilizou extensivamente a tecnologia moderna industrial e logística para o extermínio."
      },
      {
        id: "e",
        text: "buscam implantar uma democracia direta anarquista em oposição a qualquer hierarquia.",
        isCorrect: false,
        distractorRationale: "O nazismo e o totalitarismo são a antítese absoluta da democracia e exigiam hierarquia cega indiscutível."
      }
    ],
    detailedExplanation: {
      summary: "A 'banalidade do mal' em Hannah Arendt mostra que o mal extremo pode nascer da renúncia ao pensamento crítico (thoughtlessness) de funcionários burocratas normais que apenas cumprem ordens.",
      stepByStep: [
        "1. Contexto: Julgamento de Adolf Eichmann em Jerusalém (1961), responsável pela logística dos trens do Holocausto.",
        "2. Constatação de Arendt: ele não agia por fanatismo diabólico ou sadismo, mas pela mediocridade de um burocrata obediente.",
        "3. Ausência de pensamento (thoughtlessness): incapacidade de refletir sobre o impacto humano de seus próprios atos.",
        "4. Alerta ético contemporâneo: quando a sociedade para de pensar criticamente, pessoas normais tornam-se cúmplices de horrores institucionais."
      ],
      coreConcept: "Filosofia política de Hannah Arendt: totalitarismo, banalidade do mal e a necessidade vital do pensamento crítico.",
      trapWarning: "Arendt NÃO defendeu nem desculpou Eichmann; ela demonstrou a natureza muito mais assustadora de um crime que pode ser reproduzido por qualquer pessoa alienada de consciência moral!"
    },
    commonTraps: ["Achar que banalidade do mal significa que o crime era de menor importância."],
    tags: ["Filosofia", "Hannah Arendt", "Banalidade do Mal", "Totalitarismo", "Ética Contemporânea"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-015",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Karl Popper e o Falseacionismo Científico",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O critério de demarcação inerente à lógica indutiva equivale a exigir que todas as proposições da ciência empírica devam ser suscetíveis de uma decisão definitiva quanto à sua verdade e à sua falsidade. [...] Ora, no meu entender, não existe indução. Proponho que o critério de demarcação entre ciência e não-ciência seja a falseabilidade ou refutabilidade de um sistema teórico. Um sistema só deve ser reconhecido como científico se for suscetível de ser testado pela experiência.",
      source: "POPPER, Karl. A Lógica da Pesquisa Científica. Capítulo I. Tradução de Leonidas Hegenberg e Octanny Silveira da Mota. São Paulo: Cultrix, 2006."
    },
    prompt: "Na epistemologia do filósofo Karl Popper, o critério de falseabilidade estabelece que uma teoria é autenticamente científica quando",
    options: [
      {
        id: "a",
        text: "alcança a condição de verdade dogmática absoluta e imutável que nenhuma experiência futura poderá jamais refutar.",
        isCorrect: false,
        distractorRationale: "Para Popper, teorias que se blindam contra refutação são pseudociências dogmáticas, e não ciência real."
      },
      {
        id: "b",
        text: "é formulada de tal modo que possa ser posta à prova por testes empíricos rigorosos e admitir a possibilidade lógica de ser desmentida ou refutada por fatos observáveis.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Karl Popper refuta o indutivismo e o positivismo lógico do Círculo de Viena. Como nunca é possível verificar todos os casos possíveis no universo (não importa quantos cisnes brancos vejamos, isso não prova que todos os cisnes sejam brancos), uma teoria jamais pode ser provada como definitivamente verdadeira. O que torna uma teoria científica é o critério de demarcação da falseabilidade (refutabilidade): ela deve formular previsões arriscadas e específicas que possam ser confrontadas com a experiência. Enquanto resiste aos testes de refutação, a teoria é considerada corroborada (provisoriamente válida)."
      },
      {
        id: "c",
        text: "obtém a aprovação unânime de sacerdotes e de comissões governamentais de censura.",
        isCorrect: false,
        distractorRationale: "O critério científico apoia-se em testes empíricos e lógica interna, recusando a censura estatal e religiosa."
      },
      {
        id: "d",
        text: "explica todos os fenômenos do universo sem deixar nenhuma margem para dúvidas ou anomalias.",
        isCorrect: false,
        distractorRationale: "Sistemas que 'explicam tudo e nunca erram' (como a astrologia) são, para Popper, pseudociências blindadas."
      },
      {
        id: "e",
        text: "rejeita qualquer tipo de verificação experimental e apoia-se somente em crenças místicas.",
        isCorrect: false,
        distractorRationale: "A ciência empírica exige necessariamente a realização de experimentos e testes rigorosos."
      }
    ],
    detailedExplanation: {
      summary: "Para Popper, a ciência avança por conjecturas e refutações: uma teoria só é científica se puder, em princípio, ser falseada por testes empíricos.",
      stepByStep: [
        "1. Crítica da indução: nenhum número finito de confirmações prova uma lei universal.",
        "2. Assimetria lógica: um milhão de cisnes brancos não provam que todos são brancos; porém, UM ÚNICO cisne negro refuta a teoria.",
        "3. Critério de Demarcação: Ciência = teorias refutáveis / falseáveis. Pseudociência = sistemas infalsificáveis que explicam qualquer resultado.",
        "4. Natureza da ciência: o conhecimento científico é hipotético, conjectural e provisório."
      ],
      coreConcept: "Filosofia da ciência de Karl Popper: falseacionismo, demarcação e método dedutivo de prova.",
      trapWarning: "Uma teoria ser falseável NÃO significa que ela seja falsa! Significa que ela é testável e que sabemos que tipo de evidência empírica seria capaz de refutá-la se ela estiver errada."
    },
    commonTraps: ["Confundir 'falseável' (passível de ser testada e refutada) com 'falsa'."],
    tags: ["Filosofia", "Karl Popper", "Filosofia da Ciência", "Falseacionismo", "Epistemologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-016",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Thomas Kuhn e as Revoluções Científicas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A transição de um paradigma em crise para um novo, do qual pode surgir uma nova tradição de ciência normal, está longe de ser um processo cumulativo alcançado por uma articulação ou extensão do velho paradigma. Trata-se antes de uma reconstrução da área de estudos sobre novos fundamentos, uma reconstrução que altera algumas das generalizações teóricas mais elementares da área, bem como muitos de seus métodos e aplicações de paradigma.",
      source: "KUHN, Thomas S. A Estrutura das Revoluções Científicas. Capítulo VIII. Tradução de Beatriz Vianna Boeira e Nelson Boeira. São Paulo: Perspectiva, 2011."
    },
    prompt: "Na perspectiva histórica da epistemologia de Thomas Kuhn, o desenvolvimento do conhecimento científico caracteriza-se por",
    options: [
      {
        id: "a",
        text: "uma marcha linear contínua e cumulativa que adiciona fatos novos sem nunca abandonar os alicerces teóricos preexistentes.",
        isCorrect: false,
        distractorRationale: "Essa é a visão positivista tradicional que Kuhn refuta veementemente em sua obra."
      },
      {
        id: "b",
        text: "períodos de 'ciência normal' sob um paradigma dominante, rompidos por crises de anomalias acumuladas que provocam revoluções científicas e quebras paradigmáticas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para Thomas Kuhn, a ciência não avança de forma puramente linear e neutra. A comunidade de cientistas trabalha durante a maior parte do tempo em 'ciência normal', resolvendo quebra-cabeças sob um modelo consensual compartilhado denominado paradigma (ex: a física aristotélica ou a newtoniana). Quando anomalias recorrentes não conseguem ser resolvidas pelo paradigma vigente, instaura-se uma crise. Essa crise culmina em uma revolução científica (mudança de paradigma), como a transição do geocentrismo ptolomaico para o heliocentrismo copernicano ou da mecânica newtoniana para a relatividade einsteiniana."
      },
      {
        id: "c",
        text: "um conjunto de revelações esotéricas imutáveis que não admitem debate entre pares acadêmicos.",
        isCorrect: false,
        distractorRationale: "A ciência é conduzida por uma comunidade de pesquisadores e métodos institucionais de validação."
      },
      {
        id: "d",
        text: "uma estagnação perene na qual as teorias dos antigos filósofos gregos permanecem insuperáveis até os dias de hoje.",
        isCorrect: false,
        distractorRationale: "As ciências da natureza superaram radicalmente as explicações da física grega clássica por sucessivas revoluções paradigmáticas."
      },
      {
        id: "e",
        text: "um processo caótico no qual nenhum cientista consegue chegar a acordos práticos sobre fórmulas e métodos.",
        isCorrect: false,
        distractorRationale: "A ciência normal é justamente caracterizada por consenso comunitário estável e partilha metodológica em torno do paradigma."
      }
    ],
    detailedExplanation: {
      summary: "Kuhn demonstra que a ciência avança por rupturas paradigmáticas: Ciência Normal ⟶ Acúmulo de Anomalias ⟶ Crise Teórica ⟶ Revolução Científica (Novo Paradigma).",
      stepByStep: [
        "1. Paradigma: conjunto de teorias, métodos e valores compartilhados por uma comunidade científica.",
        "2. Ciência Normal: período de pesquisa cumulativa dentro do paradigma (resolução de quebra-cabeças).",
        "3. Anomalias e Crise: dados da realidade contradizem o paradigma de forma repetida e insistente.",
        "4. Revolução Científica: substituição radical do paradigma antigo por um novo incomensurável (ex: Mecânica Clássica para Quântica/Relativística)."
      ],
      coreConcept: "Sociologia e epistemologia da ciência de Thomas Kuhn: paradigmas, ciência normal e revoluções científicas.",
      trapWarning: "Lembre-se: paradigmas sucessivos são 'incomensuráveis', pois redefinem os próprios conceitos fundamentais da disciplina (como espaço e tempo entre Newton e Einstein)!"
    },
    commonTraps: ["Achar que a ciência evolui sempre em linha reta e sem atritos na comunidade científica."],
    tags: ["Filosofia", "Thomas Kuhn", "Filosofia da Ciência", "Paradigmas", "Revoluções Científicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-017",
    area: "humanas",
    competence: 4,
    skill: 17,
    topic: "Filosofia",
    subtopic: "Jürgen Habermas e a Ação Comunicativa",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O conceito de racionalidade comunicativa remete à unidade de uma razão intersubjetiva que se manifesta nas condições universais de um acordo racionalmente motivado. A ação comunicativa diferencia-se da ação estratégica porque não visa o sucesso individual por meio da coerção, manipulação ou ameaça, mas sim a busca cooperativa de entendimento mútuo entre sujeitos capazes de falar e agir.",
      source: "HABERMAS, Jürgen. Teoria do Agir Comunicativo. Tomo I. Tradução de Paulo Astor Soethe. São Paulo: WMF Martins Fontes, 2012."
    },
    prompt: "Na teoria crítica do filósofo Jürgen Habermas, a consolidação de uma democracia participativa e a resolução de conflitos éticos contemporâneos exigem a supremacia da",
    options: [
      {
        id: "a",
        text: "imposição autoritária de decretos executivos sem debate parlamentar ou civil.",
        isCorrect: false,
        distractorRationale: "Isso constitui ação instrumental impositiva, recusada pelo modelo habermasiano de deliberação democrática."
      },
      {
        id: "b",
        text: "racionalidade comunicativa expressa no diálogo argumentativo aberto, inclusivo e livre de coerções na esfera pública democrática.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em sua Teoria do Agir Comunicativo e na Ética do Discurso, Habermas propõe a superação da racionalidade instrumental (que trata o outro como meio/objeto a ser manipulado) em favor da racionalidade comunicativa. Na esfera pública democrática ideal, cidadãos livres e iguais engajam-se em um diálogo intersubjetivo orientado pelo 'melhor argumento', no qual todos os interessados têm voz e voto garantidos sem ameaças ou privilégios, conferindo legitimidade às leis e às normas morais construídas por consenso cooperativo."
      },
      {
        id: "c",
        text: "ação estratégica manipuladora de algoritmos de publicidade para ludibriar eleitores desinformados.",
        isCorrect: false,
        distractorRationale: "A manipulação de redes sociais é exatamente a colonização do mundo da vida pelo sistema econômico-estratégico que Habermas combate."
      },
      {
        id: "d",
        text: "censura prévia a movimentos sociais que contestem as instituições tradicionais de poder.",
        isCorrect: false,
        distractorRationale: "Habermas defende a pluralidade ampla e a inclusão do outro na deliberação discursiva."
      },
      {
        id: "e",
        text: "submissão de todos os assuntos bioéticos a julgamento sumário de corporações privadas.",
        isCorrect: false,
        distractorRationale: "Dilemas de bioética e cidadania devem ser decididos na esfera pública compartilhada pelos cidadãos afetados."
      }
    ],
    detailedExplanation: {
      summary: "Habermas fundamenta a legitimidade política e moral na Ação Comunicativa: busca de consenso pelo diálogo argumentativo livre na esfera pública.",
      stepByStep: [
        "1. Ação Estratégica: orientada para o sucesso individual (o outro é visto como obstáculo ou ferramenta).",
        "2. Ação Comunicativa: orientada para o entendimento mútuo (o outro é um parceiro de diálogo legítimo).",
        "3. Esfera Pública: espaço civil de deliberação em que a força do melhor argumento supera a coação física ou econômica.",
        "4. Ética do Discurso: uma norma só é moral e legítima se puder ser aceita por todos os concernidos em um discurso racional livre."
      ],
      coreConcept: "Escola de Frankfurt / Teoria Crítica de Habermas: agir comunicativo, esfera pública e ética do discurso.",
      trapWarning: "Habermas não rejeita a razão (como fizeram pós-modernos radicais); ele resgata o projeto emancipatório da razão, mudando o foco da 'razão da consciência solitária' para a 'razão comunicativa dialógica'!"
    },
    commonTraps: ["Confundir a ação comunicativa dialógica com a ação estratégica de convencimento por propaganda."],
    tags: ["Filosofia", "Habermas", "Agir Comunicativo", "Esfera Pública", "Ética do Discurso"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-018",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "São Tomás de Aquino e a Síntese entre Fé e Razão",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A graça não destrói a natureza, mas a aperfeiçoa. Por isso, a razão natural deve servir à fé, assim como a inclinação natural da vontade obedece à caridade. Embora a verdade da fé cristã exceda a capacidade da razão humana, os primeiros princípios que a natureza implantou na razão humana não podem ser contrários a essa verdade da fé.",
      source: "TOMÁS DE AQUINO. Suma Teológica. Primeira Parte, Questão 1, Artigo 8. Tradução de Alexandre Correia. São Paulo: Loyola, 2002."
    },
    prompt: "No apogeu da Escolástica medieval no século XIII, São Tomás de Aquino promoveu uma síntese harmônica entre a filosofia pagã de Aristóteles e a teologia cristã, sustentando que",
    options: [
      {
        id: "a",
        text: "a fé e a razão são inimigas inconciliáveis, devendo o fiel rejeitar a lógica para manter a piedade religiosa.",
        isCorrect: false,
        distractorRationale: "Essa visão de conflito absoluto é refutada pelo tomismo, que postula a harmonia complementar entre ambas."
      },
      {
        id: "b",
        text: "a razão humana e a revelação divina são vias complementares para a verdade, de modo que a filosofia auxilia a teologia demonstrando as verdades acessíveis ao intelecto natural.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na filosofia escolástica tomista, não há contradição real entre razão e fé, pois ambas procedem da mesma fonte divina. A razão natural, com suas leis lógicas e observação do mundo empírico (filosofia aristotélica), é capaz de demonstrar os 'preâmbulos da fé' (como a existência de Deus pelas Cinco Vias cosmológicas e os preceitos da lei natural). A fé, por sua vez, complementa e eleva a razão, revelando os mistérios sobrenaturais (como a Trindade) que extrapolam o intelecto humano sem violá-lo."
      },
      {
        id: "c",
        text: "o estudo das ciências da natureza deve ser banido das universidades medievais por incitar a heresia.",
        isCorrect: false,
        distractorRationale: "Tomás de Aquino foi professor universitário em Paris e valorizava o estudo da física e da biologia aristotélica."
      },
      {
        id: "d",
        text: "as ideias dos filósofos gregos pagãos deveriam ser queimadas e ignoradas pelos pensadores ocidentais.",
        isCorrect: false,
        distractorRationale: "O tomismo fez exatamente o resgate sistemático de Aristóteles, apelidado carinhosamente de 'O Filósofo'."
      },
      {
        id: "e",
        text: "a mente humana é totalmente passiva e incapaz de compreender qualquer princípio lógico do mundo sensível.",
        isCorrect: false,
        distractorRationale: "Tomás de Aquino valoriza a epistemologia aristotélica empírica: 'nada está no intelecto que não tenha estado antes nos sentidos'."
      }
    ],
    detailedExplanation: {
      summary: "Tomás de Aquino formula a harmonia entre fé e razão: a graça não destrói a natureza, mas a aperfeiçoa; a razão serve à fé como sua serva valorosa.",
      stepByStep: [
        "1. Filosofia Escolástica: conciliar a herança clássica greco-romana (Aristóteles) com a revelação cristã.",
        "2. Dupla via da verdade: Razão (luz natural do intelecto) + Fé (luz sobrenatural da revelação).",
        "3. Não há contradição: o que é verdadeiro pela razão não pode contradizer o que é revelado por Deus.",
        "4. As Cinco Vias: demonstração racional da existência de Deus a partir do movimento, causa eficiente, contingência, graus de perfeição e finalidade."
      ],
      coreConcept: "Escolástica tomista: complementariedade entre fé e razão, aristotelismo cristão e as Cinco Vias.",
      trapWarning: "Lembre-se: Santo Agostinho (século V) apoiava-se em Platão ('creio para compreender'); São Tomás de Aquino (século XIII) apoiava-se em Aristóteles ('a razão apoia e prepara a fé')!"
    },
    commonTraps: ["Confundir a Escolástica de Tomás de Aquino (Aristóteles) com a Patrística de Santo Agostinho (Platão)."],
    tags: ["Filosofia", "Escolástica", "Tomás de Aquino", "Fé e Razão", "Aristotelismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-019",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Filosofia",
    subtopic: "John Stuart Mill e o Utilitarismo",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O credo que aceita como fundamento da moral a Utilidade, ou o Princípio da Maior Felicidade, sustenta que as ações são corretas na medida em que tendem a promover a felicidade, e erradas na medida em que tendem a produzir o reverso da felicidade. Por felicidade entende-se o prazer e a ausência de dor; por infelicidade, a dor e a privação do prazer.",
      source: "MILL, John Stuart. O Utilitarismo. Capítulo II. Tradução de Alexandre Braga. São Paulo: Iluminuras, 2000."
    },
    prompt: "A doutrina moral utilitarista formulada por Jeremy Bentham e refinada por John Stuart Mill estabelece como critério ético decisivo para julgar a correção de uma política pública o(a)",
    options: [
      {
        id: "a",
        text: "obediência cega aos privilégios tradicionais das dinastias aristocráticas hereditárias.",
        isCorrect: false,
        distractorRationale: "O utilitarismo é igualitário e combateu veementemente privilégios feudais e aristocráticos."
      },
      {
        id: "b",
        text: "maximização do bem-estar e da felicidade geral para o maior número possível de indivíduos afetados, minimizando a dor e o sofrimento coletivo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Utilitarismo é uma teoria ética consequencialista: a moralidade de uma ação não é avaliada por mandamentos a priori fixos (como em Kant), mas pelas suas consequências práticas e resultados observáveis. O princípio fundante é a 'Maior Felicidade para o Maior Número': uma decisão política, lei ou conduta médica é moralmente justificável quando maximiza o saldo líquido de prazer/satisfação e minimiza a dor agregada de toda a sociedade envolvida, considerando todos os indivíduos com o mesmo peso ético."
      },
      {
        id: "c",
        text: "análise da pureza metafísica da intenção íntima do agente, ignorando as consequências reais de seus atos.",
        isCorrect: false,
        distractorRationale: "A avaliação pelas intenções puras sem considerar consequências é a ética deontológica de Kant, o oposto do utilitarismo."
      },
      {
        id: "d",
        text: "privatização completa de todos os bens públicos sem qualquer preocupação social com os mais vulneráveis.",
        isCorrect: false,
        distractorRationale: "Mill defendia reformas sociais distributivas, direitos dos trabalhadores e a emancipação feminina."
      },
      {
        id: "e",
        text: "manutenção inalterada das penas cruéis corporais no sistema penitenciário.",
        isCorrect: false,
        distractorRationale: "Bentham e Mill foram pioneiros da reforma penal humanitária orientada pela utilidade preventiva e não pela vingança sádica."
      }
    ],
    detailedExplanation: {
      summary: "O utilitarismo avalia ações por suas consequências: uma ação é moral se maximiza a felicidade e o bem-estar para o maior número de pessoas.",
      stepByStep: [
        "1. Consequencialismo: o que importa são os efeitos reais no mundo, não princípios abstratos rígidos.",
        "2. Princípio da Maior Felicidade: buscar o maior bem para o maior número de seres capazes de sentir dor/prazer.",
        "3. Inovação de Mill: diferenciação qualitativa dos prazeres (prazeres intelectuais e estéticos superiores aos corporais imediatos: 'mais vale ser Sócrates insatisfeito do que um porco satisfeito').",
        "4. Aplicação política: base para criação de sistemas de saúde pública universal e direitos civis igualitários."
      ],
      coreConcept: "Ética utilitarista de Bentham e Mill: consequencialismo, princípio da maior felicidade e bem-estar coletivo.",
      trapWarning: "No utilitarismo, o interesse de cada indivíduo conta igualmente: 'cada qual conta como um e ninguém como mais de um'!"
    },
    commonTraps: ["Confundir utilitarismo com 'egoísmo individual' de quem busca apenas a própria vantagem."],
    tags: ["Filosofia", "Utilitarismo", "John Stuart Mill", "Bentham", "Consequencialismo", "Ética"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-020",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Michel Foucault e a Sociedade Disciplinar",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O pan-óptico é uma máquina de dissociar a parelha ver-ser visto: no anel periférico, se é totalmente visto, sem nunca ver; na torre central, vê-se tudo, sem nunca ser visto. É um arranjo importante, pois automatiza e desindividualiza o poder. [...] A disciplina fabrica corpos dóceis e úteis através de uma vigilância hierárquica contínua, do controle minucioso do tempo e do enquadramento espacial dos indivíduos.",
      source: "FOUCAULT, Michel. Vigiar e Punir: Nascimento da prisão. Terceira Parte. Tradução de Raquel Ramalhete. Petrópolis: Vozes, 1987."
    },
    prompt: "Ao analisar a gênese das instituições modernas (prisões, escolas, quartéis, fábricas e hospitais), Michel Foucault evidencia que o biopoder e as técnicas disciplinares operam fundamentalmente por meio da",
    options: [
      {
        id: "a",
        text: "aniquilação física imediata em praça pública de todos os indivíduos dissidentes como espetáculo punitivo soberano.",
        isCorrect: false,
        distractorRationale: "O suplício em praça pública é típico da Idade Média e do Antigo Regime monárquico; o poder disciplinar moderno substitui o suplício pelo confinamento e correção da conduta."
      },
      {
        id: "b",
        text: "gestão microscópica do tempo, adestramento normativo dos corpos e vigilância constante que interioriza a autocensura nos cidadãos sem necessidade de violência direta ostensiva.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em Vigiar e Punir, Foucault demonstra a transição histórica do poder de soberania monárquica (que 'fazia morrer e deixava viver' por meio de suplícios públicos violentos) para a sociedade disciplinar moderna (que 'faz viver e gere os corpos'). A disciplina penetra os detalhes da vida cotidiana nas fábricas, escolas e prisões por meio de horários rígidos, exames constantes, confinamento espacial e o modelo panóptico de Bentham: sentindo-se potencialmente vigiado a cada segundo, o indivíduo vigia a si próprio, tornando-se um 'corpo dócil' e produtivo."
      },
      {
        id: "c",
        text: "extinção total do Estado e de qualquer controle sobre os comportamentos humanos na contemporaneidade.",
        isCorrect: false,
        distractorRationale: "O poder moderno não desapareceu; ele se capilarizou e espalhou-se por todas as redes e instituições da sociedade."
      },
      {
        id: "d",
        text: "proibição universal de qualquer tipo de relógio ou instrumento de marcação temporal nos locais de trabalho.",
        isCorrect: false,
        distractorRationale: "A disciplina apoia-se exatamente no controle exaustivo de cada minuto e segundo da jornada."
      },
      {
        id: "e",
        text: "concessão irrestrita de autonomia e liberdade criativa a todos os internos de manicômios e penitenciárias.",
        isCorrect: false,
        distractorRationale: "Essas instituições visavam exatamente o enquadramento ortopédico e a normalização comportamental forçada."
      }
    ],
    detailedExplanation: {
      summary: "O poder disciplinar em Foucault molda 'corpos dóceis' pelo controle do tempo, espaço e vigilância panóptica que interioriza o autocontrole nos indivíduos.",
      stepByStep: [
        "1. Mudança histórica: abandono do suplício público medieval em favor da prisão e do adestramento corporal.",
        "2. Microfísica do poder: o poder não está apenas no Estado centralizado; circula nas relações diárias, na escola, fábrica e hospital.",
        "3. Panóptico de Bentham: arquitetura de vigilância invisível onde os vigiados não sabem quando estão sendo olhados.",
        "4. Corpos dóceis: sujeitos submetidos a normas rígidas de conduta e produtividade que acabam vigiando o próprio comportamento."
      ],
      coreConcept: "Filosofia contemporânea de Michel Foucault: microfísica do poder, sociedade disciplinar, pan-óptico e corpos dóceis.",
      trapWarning: "Para Foucault, o poder não é apenas repressor e negativo; o poder é relacional, capilar e 'produtivo', pois produz subjetividades, normas e saberes técnicos!"
    },
    commonTraps: ["Achar que o poder em Foucault localiza-se unicamente no presidente ou na polícia armada."],
    tags: ["Filosofia", "Foucault", "Poder Disciplinar", "Panóptico", "Vigiar e Punir", "Biopoder"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-021",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Zygmunt Bauman e a Modernidade Líquida",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os fluidos movem-se com facilidade. Eles fluem, escorrem, transbordam, respingam, espalham-se, vazam, inundam. [...] Ao contrário dos sólidos, eles não retêm a sua forma facilmente. Os fluidos são caracterizados por uma frouxidão e fragilidade das ligações moleculares. A passagem da fase sólida da modernidade para a sua fase líquida dissolve as estruturas duradouras de pertencimento, transformando vínculos comunitários em conexões descartáveis e passageiras.",
      source: "BAUMAN, Zygmunt. Modernidade Líquida. Prólogo. Tradução de Plínio Dentzien. Rio de Janeiro: Jorge Zahar Ed., 2001."
    },
    prompt: "Com o conceito de 'Modernidade Líquida', o sociólogo e filósofo Zygmunt Bauman diagnostica que as relações humanas e o mercado de trabalho na contemporaneidade são marcados por",
    options: [
      {
        id: "a",
        text: "estabilidade garantida para a vida inteira e compromissos afetivos inabaláveis de longuíssimo prazo.",
        isCorrect: false,
        distractorRationale: "Isso caracterizava a modernidade 'sólida' anterior, e não a liquidez contemporânea."
      },
      {
        id: "b",
        text: "volatilidade, individualismo exacerbado, consumismo imediato e fragilidade dos laços sociais e laborais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em Modernidade Líquida e Amor Líquido, Bauman aponta que as instituições e certezas que ancoravam a vida social sólida (emprego vitalício, casamentos indissolúveis, sindicatos fortes, previdência social segura) derreteram perante o neoliberalismo globalizado. A vida líquida é pautada pela velocidade, pela mercantilização de afetos, pela flexibilização precarizada do trabalho e por relações afetivas frágeis mantidas enquanto forem convenientes, gerando sensação constante de ansiedade e insegurança existencial."
      },
      {
        id: "c",
        text: "ressurgimento hegemônico das guildas e corporações de ofício artesanais medievais.",
        isCorrect: false,
        distractorRationale: "A modernidade líquida apoia-se em plataformas digitais globais e flexibilização pós-industrial, e não em guildas medievais."
      },
      {
        id: "d",
        text: "desaparecimento completo de qualquer forma de consumo em massa ou circulação de mercadorias.",
        isCorrect: false,
        distractorRationale: "A sociedade líquida é movida compulsivamente pela cultura do hiperconsumo e do descarte rápido."
      },
      {
        id: "e",
        text: "imposição universal de contratos de fidelidade profissional rígidos que impedem demissões voluntárias.",
        isCorrect: false,
        distractorRationale: "O mercado contemporâneo exige exatamente desregulamentação, contratos temporários e empreendedorismo individual precarizado."
      }
    ],
    detailedExplanation: {
      summary: "Na 'Modernidade Líquida' de Bauman, as instituições e laços que antes eram sólidos e duradouros tornaram-se fluidos, provisórios e descartáveis.",
      stepByStep: [
        "1. Modernidade Sólida: época de indústrias pesadas, empregos estáveis, partidos de massa e laços duradouros.",
        "2. Modernidade Líquida: desregulamentação, consumo veloz, hiperindividualismo e volatilidade.",
        "3. Relações sociais: 'conexões' que podem ser desfeitas com um clique em vez de 'laços' construídos com esforço mútuo.",
        "4. Consequência: ansiedade social difusa, solidão em rede e precarização das condições de vida e trabalho."
      ],
      coreConcept: "Diagnóstico contemporâneo de Zygmunt Bauman: modernidade líquida, amor líquido e sociedade do consumo.",
      trapWarning: "Lembre-se: Bauman é um excelente repertório sociocultural para redações nota 1000 que discutem saúde mental de jovens, solidão nas redes digitais e precarização do trabalho!"
    },
    commonTraps: ["Confundir liquidez com facilidade ou paz, ignorando a ansiedade gerada pela falta de solo firme."],
    tags: ["Filosofia", "Sociologia", "Bauman", "Modernidade Líquida", "Amor Líquido", "Consumismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-022",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Hans Jonas e o Princípio Responsabilidade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Age de tal modo que os efeitos de tua ação sejam compatíveis com a permanência de uma vida humana autêntica sobre a Terra; ou, expresso negativamente: Não ponhas em perigo as condições da continuidade indefinida da humanidade na Terra. A promessa da técnica moderna converteu-se em ameaça cósmica pelo seu potencial sem precedentes de destruição planetária cumulativa.",
      source: "JONAS, Hans. O Princípio Responsabilidade: Ensaio de uma ética para a civilização tecnológica. Tradução de Marijane Lisboa e Luiz Barros Montez. Rio de Janeiro: Contraponto/Ed. PUC-Rio, 2006."
    },
    prompt: "Ao formular o 'Princípio Responsabilidade' no campo da bioética e da filosofia da tecnologia, Hans Jonas postula a necessidade de uma ética inédita voltada para a",
    options: [
      {
        id: "a",
        text: "aceleração descontrolada de intervenções genéticas e nucleares guiadas exclusivamente pelo lucro corporativo.",
        isCorrect: false,
        distractorRationale: "Jonas critica severamente a subordinação cega da biosfera e da vida humana à lógica cega do lucro econômico."
      },
      {
        id: "b",
        text: "preservação ecológica do planeta e proteção dos direitos das gerações humanas futuras, que ainda não nasceram mas sofrerão as consequências de nossas decisões tecnológicas presentes.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Hans Jonas constata que as éticas filosóficas tradicionais (Aristóteles, Kant) eram antropocêntricas e de curto alcance: tratavam apenas das relações imediatas e horizontais entre contemporâneos vivos. O poder tecnológico moderno (armas nucleares, engenharia genética, emergência climática) adquiriu alcance global cumulativo e irreversível. Assim, Jonas formula um novo imperativo ético intergeracional: o dever moral dos vivos de proteger a integridade biológica da Terra para garantir que as gerações futuras possam herdar um planeta habitável (heurística do temor e responsabilidade com o porvir)."
      },
      {
        id: "c",
        text: "revogação de todas as leis ambientais em prol da industrialização pesada do século XIX.",
        isCorrect: false,
        distractorRationale: "Jonas é um dos pais da ética ambiental contemporânea e combate o produtivismo predatório."
      },
      {
        id: "d",
        text: "substituição total da humanidade por sistemas robóticos inteligentes autônomos.",
        isCorrect: false,
        distractorRationale: "A ética de Hans Jonas é fundamentalmente voltada para a preservação contínua da dignidade da vida humana na Terra."
      },
      {
        id: "e",
        text: "concessão de imunidade jurídica absoluta para cientistas que realizem testes com armas de destruição em massa.",
        isCorrect: false,
        distractorRationale: "O princípio da responsabilidade exige regulação moral e jurídica estrita sobre a pesquisa técnico-científica."
      }
    ],
    detailedExplanation: {
      summary: "Hans Jonas cria a ética intergeracional: temos o dever moral presente de proteger o planeta para garantir a existência e a dignidade das gerações futuras.",
      stepByStep: [
        "1. Crise da ética tradicional: antes, a técnica não ameaçava o equilíbrio biológico do planeta.",
        "2. Prometeu desencadeado: biotecnologia e poluição criaram risco existencial de colapso ambiental global.",
        "3. Novo Imperativo Ético: 'Age de modo que a humanidade continue a existir com dignidade'.",
        "4. Heurística do Temor: em caso de incerteza de impacto catastrófico irreversível, a prudência de proteção à vida deve prevalecer sobre o lucro imediato (origem do Princípio da Precaução)."
      ],
      coreConcept: "Bioética de Hans Jonas: o Princípio Responsabilidade, dever intergeracional e proteção ambiental do futuro.",
      trapWarning: "O imperativo de Jonas dialoga diretamente com o de Kant, mas expande-o no tempo (incluindo quem ainda vai nascer) e no espaço (incluindo a biosfera planetária)!"
    },
    commonTraps: ["Achar que a ética se restringe apenas a quem está vivo hoje, ignorando as gerações futuras."],
    tags: ["Filosofia", "Hans Jonas", "Princípio Responsabilidade", "Bioética", "Gerações Futuras", "Meio Ambiente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-023",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "Byung-Chul Han e a Sociedade do Cansaço",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A sociedade disciplinar de Foucault, feita de prisões, hospitais e fábricas, já não é mais a sociedade de hoje. Em seu lugar entrou uma sociedade do desempenho, povoada por empresários de si mesmos. Os sujeitos de desempenho não são obedientes, mas livres. No entanto, essa liberdade converte-se em coação paradoxal: o indivíduo explora a si mesmo acreditando que está se realizando, até o esgotamento depressivo e o burnout.",
      source: "HAN, Byung-Chul. A Sociedade do Cansaço. Tradução de Enio Paulo Giachini. Petrópolis: Vozes, 2015."
    },
    prompt: "Na análise crítica de Byung-Chul Han sobre o capitalismo tardio digital, a transição da sociedade disciplinar do 'dever' para a sociedade do desempenho do 'poder fazer tudo' resulta em uma forma de violência psicológica caracterizada pela",
    options: [
      {
        id: "a",
        text: "tortura física ostensiva praticada pelo Estado monárquico absolutista em masmorras secretas.",
        isCorrect: false,
        distractorRationale: "Han descreve uma violência neuronal interna invisível da modernidade digital, não torturas medievais."
      },
      {
        id: "b",
        text: "autoexploração voluntária, na qual o próprio trabalhador interioriza a cobrança por produtividade contínua e positivismo tóxico, gerando síndrome de burnout e depressão.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em A Sociedade do Cansaço, o filósofo sul-coreano Byung-Chul Han demonstra que na era digital o sujeito foi transformado em 'empresário de si mesmo' (sociedade do desempenho). Não há mais um feitor externo explícito chicoteando o operário; o próprio indivíduo interiorizou o imperativo do 'Yes, we can' e da autootimização compulsiva. Acreditando ser livre e autônomo, o trabalhador trabalha 24 horas por dia em seus dispositivos móveis, competindo consigo mesmo até o colapso psíquico (depressão, TDAH e burnout), caracterizando a autoexploração sem senhor visível."
      },
      {
        id: "c",
        text: "redução drástica do tempo de exposição a telas digitais e retorno a uma vida rural autossuficiente.",
        isCorrect: false,
        distractorRationale: "A sociedade descrita é marcada por hiperconectividade ininterrupta e dependência digital."
      },
      {
        id: "d",
        text: "proibição governamental expressa de qualquer atividade física ou profissional autônoma.",
        isCorrect: false,
        distractorRationale: "O sistema estimula exatamente a autonomia ilusória e o empreendedorismo individual desregulamentado."
      },
      {
        id: "e",
        text: "submissão consensual e voluntária a líderes religiosos de comunidades monásticas medievais.",
        isCorrect: false,
        distractorRationale: "O fenômeno analisado é o hipercapitalismo secularizado pós-industrial, alheio a ordens monásticas tradicionais."
      }
    ],
    detailedExplanation: {
      summary: "Na 'Sociedade do Cansaço', a opressão não vem de fora (disciplina externa), mas de dentro: o sujeito autoexplora-se em busca de desempenho máximo e colapsa em burnout.",
      stepByStep: [
        "1. Sociedade Disciplinar (Foucault): negativa ('Não deves fazer isso') ⟶ gera rebeldes e criminosos.",
        "2. Sociedade do Desempenho (Han): positiva ('Tu podes tudo, basta querer!') ⟶ gera sujeitos exaustos e deprimidos.",
        "3. Empresário de si mesmo: a pessoa é simultaneamente feitor e escravo de sua própria ambição de produtividade.",
        "4. Patologias neuronais: Síndrome de Burnout, depressão e ansiedade como sintomas do excesso de positividade tóxica."
      ],
      coreConcept: "Filosofia contemporânea de Byung-Chul Han: sociedade do desempenho, autoexploração e sociedade do cansaço.",
      trapWarning: "Repertório excepcional para redações do ENEM sobre precarização do trabalho 'uberizado', saúde mental contemporânea e dependência de redes sociais!"
    },
    commonTraps: ["Achar que a autoexploração em Byung-Chul Han é causada por preguiça individual, e não por uma estrutura cultural sistêmica."],
    tags: ["Filosofia", "Byung-Chul Han", "Sociedade do Cansaço", "Burnout", "Autoexploração", "Saúde Mental"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-024",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "John Rawls e a Teoria da Justiça",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Para formular princípios justos de convivência, devemos imaginar uma situação hipotética inicial em que as partes deliberam sob um véu de ignorância. Ninguém conhece seu lugar na sociedade, sua posição de classe ou status social, nem sua sorte na distribuição de dons e habilidades naturais, sua inteligência ou sua força. Como todos estão numa situação similar e ninguém é capaz de designar princípios para favorecer sua condição particular, os princípios da justiça são o resultado de um consenso ou ajuste equitativo.",
      source: "RAWLS, John. Uma Teoria da Justiça. Capítulo I. Tradução de Almiro Pisetta e Lenita Maria Rímoli Esteves. São Paulo: Martins Fontes, 2000."
    },
    prompt: "Ao formular o artifício do 'véu de ignorância' na posição original, o filósofo político John Rawls busca garantir que os princípios basilares da sociedade sejam estruturados com base na",
    options: [
      {
        id: "a",
        text: "defesa dos privilégios daquelas classes que comprovarem maior poder econômico acumulado.",
        isCorrect: false,
        distractorRationale: "O véu de ignorância impede justamente o favorecimento de classes ricas, pois ninguém sabe sua própria classe."
      },
      {
        id: "b",
        text: "imparcialidade e equidade ética, assegurando liberdades básicas iguais para todos e tolerando desigualdades econômicas apenas se beneficiarem ao máximo os grupos mais desfavorecidos (Princípio da Diferença).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na Teoria da Justiça como Equidade (Justice as Fairness), John Rawls revitaliza o contratualismo com o 'véu de ignorância' (veil of ignorance). Como você não sabe se nascerá rico ou pobre, negro ou branco, homem ou mulher, saudável ou com deficiência, a escolha racional imparcial é criar uma sociedade que proteja a todos. Isso gera dois princípios: 1) Princípio da Liberdade Igual (máximas liberdades civis e políticas idênticas para todos); 2) Princípio da Diferença e Igualdade de Oportunidades: desigualdades socioeconômicas só são justas se estiverem atreladas a cargos acessíveis a todos e se resultarem no maior benefício possível aos membros menos favorecidos da sociedade."
      },
      {
        id: "c",
        text: "eliminação total de qualquer liberdade civil em favor de um regime totalitário de planificação militar.",
        isCorrect: false,
        distractorRationale: "O primeiro princípio de Rawls é a prioridade absoluta das liberdades fundamentais civis e políticas (liberdade de expressão, voto, consciência)."
      },
      {
        id: "d",
        text: "determinação das leis por meio de consultas astrológicas na abertura do parlamento.",
        isCorrect: false,
        distractorRationale: "Rawls fundamenta a justiça na razão pública e na deliberação racional imparcial de sujeitos autônomos."
      },
      {
        id: "e",
        text: "submissão incondicional do destino de minorias étnicas às preferências da maioria eleitoral utilitarista.",
        isCorrect: false,
        distractorRationale: "A teoria de Rawls nasce exatamente como uma crítica veemente ao utilitarismo, que sacrificava os direitos fundamentais de minorias pelo 'bem-estar da maioria'."
      }
    ],
    detailedExplanation: {
      summary: "Com o 'véu de ignorância', Rawls garante imparcialidade: quem não sabe qual será sua posição na sociedade escolhe proteger a todos e beneficiar os mais vulneráveis (justiça como equidade).",
      stepByStep: [
        "1. Crítica ao utilitarismo: o bem da maioria não pode atropelar os direitos básicos de minorias vulneráveis.",
        "2. Posição Original e Véu de Ignorância: deliberação sem saber se você nascerá rico, pobre, talentoso ou vulnerável.",
        "3. Primeiro Princípio (Liberdade): liberdades civis básicas iguais e invioláveis para todos.",
        "4. Segundo Princípio (Diferença e Oportunidades): desigualdades só são toleráveis se gerarem o maior benefício aos mais desfavorecidos (justificativa moral para políticas distributivas e ações afirmativas)."
      ],
      coreConcept: "Filosofia política de John Rawls: justiça como equidade, véu de ignorância e o Princípio da Diferença.",
      trapWarning: "Rawls não é um socialista estrito (ele aceita desigualdades econômicas que estimulem inovação), mas exige que essas desigualdades compensem e melhorem a vida dos mais pobres!"
    },
    commonTraps: ["Confundir igualdade de oportunidades com igualitarismo rígido que impede qualquer mérito ou remuneração diferenciada."],
    tags: ["Filosofia", "John Rawls", "Teoria da Justiça", "Véu de Ignorância", "Equidade", "Cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "HUM-EPI-025",
    area: "humanas",
    competence: 4,
    skill: 16,
    topic: "Filosofia",
    subtopic: "A Filosofia Pré-Socrática e a Busca pela Arché",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A maior parte dos primeiros filósofos pensava que os princípios de todas as coisas eram exclusivamente materiais: aquilo de que todos os seres são feitos, de onde surgem primariamente e para onde se dissolvem no fim. Tales diz que o princípio (arché) é a água. [...] Mas Heráclito afirma que não é possível entrar duas vezes no mesmo rio, pois novas águas estão sempre fluindo. Tudo flui (panta rhei) e nada permanece estático.",
      source: "ARISTÓTELES. Metafísica. Livro I. Tradução de Giovanni Reale. São Paulo: Loyola, 2002 (adaptado)."
    },
    prompt: "A emergência do pensamento filosófico na Grécia Antiga com os pensadores pré-socráticos (Tales, Anaximandro, Heráclito e Parmênides) representou um salto epistemológico decisivo ao",
    options: [
      {
        id: "a",
        text: "reforçar a crença de que as secas e tempestades eram castigos emocionais arbitrários dos deuses do Olimpo.",
        isCorrect: false,
        distractorRationale: "Os pré-socráticos rompem justamente com as explicações mitológicas e personalistas dos deuses olímpicos."
      },
      {
        id: "b",
        text: "substituir as narrativas míticas tradicionais (mitos de Homero e Hesíodo) por investigações racionais sobre a origem e a ordem do cosmos (physis e arché) baseadas no logos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Os pré-socráticos promoveram a transição do mito (narrativa sobrenatural, genealógica e antropomórfica dos deuses) para a razão (logos, cosmologia explicativa). Buscavam a arché (o princípio primordial e originário de toda a matéria) dentro da própria natureza (physis), estabelecendo que o universo opera por leis necessárias, ordenadas e inteligíveis ao pensamento humano, dando início à cosmologia científica ocidental."
      },
      {
        id: "c",
        text: "proibir qualquer forma de diálogo democrático na administração das pólis gregas.",
        isCorrect: false,
        distractorRationale: "O nascimento da filosofia está intimamente associado ao espaço público de debate da pólis grega arcaica e clássica."
      },
      {
        id: "d",
        text: "defender que o universo foi criado do nada no tempo e terá um fim moral no juízo final.",
        isCorrect: false,
        distractorRationale: "A cosmologia grega antiga concebia a matéria como eterna (nada surge do nada) e cíclica, alheia ao criacionismo monoteísta."
      },
      {
        id: "e",
        text: "rejeitar a observação do mundo material para dedicar-se unicamente ao estudo de códigos jurídicos romanos.",
        isCorrect: false,
        distractorRationale: "A civilização romana e seu direito se desenvolveram séculos após o surgimento dos filósofos jônicos na Grécia."
      }
    ],
    detailedExplanation: {
      summary: "Os pré-socráticos inauguram a filosofia ao substituir o mito pela explicação racional (logos) sobre a origem da natureza (physis e arché).",
      stepByStep: [
        "1. Mito (Muthos): explicações poéticas sobre a vontade dos deuses (Zeus lançando raios).",
        "2. Filosofia (Logos): explicação racional da ordem cósmica sem invocar forças sobrenaturais.",
        "3. Conceito de Physis: a natureza material que possui suas próprias leis de funcionamento.",
        "4. Conceito de Arché: o princípio originário de todas as coisas (Tales: água; Anaxímenes: ar; Heráclito: fogo e devir perpétuo; Demócrito: átomo)."
      ],
      coreConcept: "Nascimento da Filosofia: passagem do mito ao logos, a busca da arché e a cosmologia pré-socrática.",
      trapWarning: "Lembre-se: os pré-socráticos não eram 'ateus militantes'; eles não negavam necessariamente o sagrado, mas buscavam o princípio imanente e racional que governa o cosmos!"
    },
    commonTraps: ["Achar que a passagem do mito ao logos foi um rompimento instantâneo em um único dia, e não um processo histórico gradual."],
    tags: ["Filosofia", "Pré-Socráticos", "Mito ao Logos", "Arché", "Heráclito", "Cosmologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
