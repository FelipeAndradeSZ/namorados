/**
 * BANCO DE QUESTÕES: PUBLICIDADE, PROPAGANDA E SEMIÓTICA VISUAL NO ENEM
 * Área: Linguagens, Códigos e suas Tecnologias (Língua Portuguesa e Comunicação)
 * Competência: C7 | Habilidades: H21, H22, H23, H24
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de rigor semiótico, discursivo e comunicacional
 * Regra Estrita: ZERO termos de deslocamentos turísticos. Foco em campanhas sociais,
 * saúde coletiva, trânsito cidadão, consumo consciente, charges de imprensa e persuasão.
 */

export const QUESTIONS_PUBLICIDADE_SEMIOTICA = [
  {
    id: "LIN-PUB-001",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Publicidade e Semiótica",
    subtopic: "Campanhas Institucionais de Doação de Sangue",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um cartaz institucional do Ministério da Saúde veiculado em paradas de ônibus e hospitais, a imagem central retrata uma ampulheta transparente. Em vez de areia, a parte superior contém gotas estilizadas de sangue carmesim pingando lentamente para a base inferior, onde desabrocha a ilustração de uma árvore frondosa cheia de frutos verdes. Ao lado da imagem, em letras brancas destacadas, lê-se o slogan: 'O tempo de alguém está correndo. Cada gota que você doa faz a vida florescer. Doe sangue regularmente.'",
      source: "MINISTÉRIO DA SAÚDE. Campanha Nacional de Incentivo à Doação Voluntária de Sangue. Brasília, 2023."
    },
    prompt: "No cartaz analisado, a articulação entre a linguagem verbal e a linguagem não-verbal visa comover e mobilizar o leitor por meio do recurso semiótico da",
    options: [
      {
        id: "a",
        text: "metáfora visual que associa o sangue ao tempo vital que se esgota e à seiva que regenera a vida, conclamando à urgência solidária.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A peça publicitária trabalha com a função apelativa/conativa da linguagem e com a metáfora visual multimodal: a ampulheta evoca a urgência do tempo da vida que corre contra pacientes graves, enquanto a árvore florescendo simboliza o renascimento propiciado pela doação. O texto verbal ancora essa analogia ('O tempo de alguém está correndo' / 'faz a vida florescer'), persuadindo o interlocutor a doar sangue com senso de responsabilidade cidadã imediata."
      },
      {
        id: "b",
        text: "ironia sarcástica que ridiculariza aqueles que não têm tempo livre para praticar atos de caridade.",
        isCorrect: false,
        distractorRationale: "O tom da campanha é emotivo e solidário, sem nenhum deboche ou ironia hostil contra a população."
      },
      {
        id: "c",
        text: "antítese científica pura desprovida de qualquer apelo emocional para o leitor comum.",
        isCorrect: false,
        distractorRationale: "A peça apoia-se intensamente no apelo emocional (pathos) e na solidariedade comunitária."
      },
      {
        id: "d",
        text: "denúncia punitiva da precariedade estrutural dos bancos de sangue do sistema hospitalar privado.",
        isCorrect: false,
        distractorRationale: "O cartaz é uma peça promocional de conscientização voluntária e não uma denúncia investigativa de gestão."
      },
      {
        id: "e",
        text: "linguagem metalinguística voltada unicamente para explicar o processo de fabricação do vidro da ampulheta.",
        isCorrect: false,
        distractorRationale: "O foco está no ato altruísta da doação e não no material físico do instrumento ilustrado."
      }
    ],
    detailedExplanation: {
      summary: "A metáfora visual da ampulheta com sangue regando uma árvore integra-se ao slogan para reforçar a urgência e a capacidade vitalizadora da doação.",
      stepByStep: [
        "1. Identificar os elementos visuais: ampulheta (tempo passando velozmente) + gotas de sangue + árvore frutífera (vida florescendo).",
        "2. Identificar o texto verbal: slogan em imperativo ('Doe sangue regularmente') e apelo à urgência ('O tempo de alguém está correndo').",
        "3. Relação semiótica: o texto verbal ancora e fecha o sentido da metáfora visual.",
        "4. Intenção discursiva: mobilizar a empatia do público por meio do apelo afetivo (pathos) e do dever cívico."
      ],
      coreConcept: "Multimodalidade e ancoragem semiótica: a imagem e o texto verbal cooperam para criar um sentido persuasivo único.",
      trapWarning: "Em campanhas sociais, a função predominante da linguagem é a conativa/apelativa (foco no receptor com verbos no imperativo para mudar seu comportamento)."
    },
    commonTraps: ["Confundir metáfora visual poética com ironia ou linguagem meramente descritiva."],
    tags: ["Linguagens", "Publicidade", "Semiótica", "Doação de Sangue", "Multimodalidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-002",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Publicidade e Semiótica",
    subtopic: "Segurança no Trânsito e Funções da Linguagem",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Uma campanha de conscientização para motoristas exibe a tela de um smartphone com o visor totalmente estilhaçado. No centro da tela trincada, sobre uma poça de asfalto molhado, lê-se uma mensagem de aplicativo de mensagens incompleta: 'Jéssica, estou chegand...'. Abaixo, em fonte sóbria e direta, surge a advertência: 'Não responda. A última mensagem não pode ser o seu ponto final. No volante, guarde o celular. Sua vida vale mais que uma notificação.'",
      source: "DEPARTAMENTO NACIONAL DE TRÂNSITO (DENATRAN). Semana Nacional de Trânsito: Conectados pela Vida. Brasília, 2023."
    },
    prompt: "A eficácia argumentativa do anúncio institucional constrói-se a partir de um recurso de choque visual e verbal baseado na",
    options: [
      {
        id: "a",
        text: "interrupção abrupta da frase simulando a ocorrência repentina de um sinistro grave de trânsito causado pela distração ao volante.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A estratégia persuasiva utiliza a quebra abrupta da mensagem digitada ('estou chegand...'), associada à tela trincada no asfalto, como representação direta do instante em que a colisão veicular interrompeu tragicamente a vida ou a integridade do motorista. O trocadilho reflexivo com 'ponto final' explora tanto o sinal gráfico de pontuação textual quanto o término irreversível da existência biológica, despertando no interlocutor o senso de risco imediato da desatenção provocada pelo celular ao dirigir."
      },
      {
        id: "b",
        text: "promoção comercial de novas marcas de películas protetoras ultrarresistentes para smartphones.",
        isCorrect: false,
        distractorRationale: "Trata-se de uma campanha institucional de segurança pública de vidas e não de anúncio comercial de acessórios."
      },
      {
        id: "c",
        text: "crítica gramatical aos erros ortográficos frequentes em mensagens rápidas de aplicativos.",
        isCorrect: false,
        distractorRationale: "A preocupação central é a preservação da vida e não a correção sintática formal de digitação."
      },
      {
        id: "d",
        text: "defesa do banimento irrestrito de redes sociais e de conexões móveis em todas as rodovias do país.",
        isCorrect: false,
        distractorRationale: "A peça não prega o corte de sinal de telecomunicações, mas sim a conduta consciente do motorista ao guardar o aparelho."
      },
      {
        id: "e",
        text: "homenagem nostálgica às cartas postais manuscritas em desuso frente à era digital.",
        isCorrect: false,
        distractorRationale: "O tema não aborda correspondências postais, mas sim os riscos da distração digital contemporânea ao volante."
      }
    ],
    detailedExplanation: {
      summary: "A frase truncada ('estou chegand...') combinada à tela quebrada materializa o impacto do sinistro, gerando choque e reflexão no motorista.",
      stepByStep: [
        "1. Elemento não-verbal: smartphone quebrado sobre o asfalto.",
        "2. Elemento verbal truncado: mensagem interrompida no meio de uma palavra, evocando a tragédia súbita.",
        "3. Trocadilho conotativo: 'ponto final' = fim da oração gramatical vs. fim da vida humana.",
        "4. Objetivo comunicativo: inibir o comportamento de risco de teclar ao dirigir (função conativa)."
      ],
      coreConcept: "Recursos expressivos na publicidade social: quebra de expectativa, truncamento intencional e polissemia.",
      trapWarning: "Publicidade institucional não visa vender produtos nem lucrar; visa vender uma ideia cidadã ou alterar um hábito social danoso!"
    },
    commonTraps: ["Achar que a campanha é sobre proteção de celulares e ignorar a mensagem de segurança no trânsito."],
    tags: ["Linguagens", "Publicidade", "Segurança no Trânsito", "Persuasão", "Função Conativa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-003",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Publicidade e Semiótica",
    subtopic: "Greenwashing e Publicidade Enganosa",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma embalagem de garrafa plástica descartável de refrigerante, a empresa substituiu o rótulo convencional por um grafismo repleto de folhas verdes, borboletas e um selo autoatribuído com os dizeres: '100% Eco-Friendly e Amigo da Amazônia'. No entanto, em letras minúsculas no verso, constata-se que apenas 3% do polímero empregado é reciclado, e a fábrica despeja efluentes industriais em mananciais hídricos sem tratamento prévio adequado.",
      source: "INSTITUTO BRASILEIRO DE DEFESA DO CONSUMIDOR (IDEC). Dossiê Greenwashing no Brasil. São Paulo, 2023."
    },
    prompt: "A prática mercadológica denunciada no texto configura o fenômeno do greenwashing (maquiagem verde). Sob a ótica da análise crítica do discurso publicitário, essa estratégia busca",
    options: [
      {
        id: "a",
        text: "apresentar com rigor científico auditado os relatórios de ciclo de vida completo do produto.",
        isCorrect: false,
        distractorRationale: "O greenwashing omite e falseia dados em vez de apresentar relatórios transparentes auditados."
      },
      {
        id: "b",
        text: "cooptar consumidores conscientes por meio de apelos ecológicos superficiais e selos vagos, mascarando impactos ambientais reais e predatórios da cadeia de produção.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O greenwashing (maquiagem verde) é uma estratégia publicitária dissimulada que utiliza elementos visuais bucólicos (verde, folhas, animais) e vocabulário pretensamente ecológico ('eco-friendly', 'sustentável', 'verde') para forjar uma reputação ecologicamente responsável para a marca. O objetivo é capitalizar sobre a preocupação do consumidor contemporâneo com o meio ambiente, induzindo-o ao erro e desviando o foco da poluição real e da ausência de práticas socioambientais consistentes da empresa."
      },
      {
        id: "c",
        text: "estimular o boicote popular imediato a qualquer tipo de embalagem reciclável de bebidas.",
        isCorrect: false,
        distractorRationale: "A propaganda visa estimular a compra do produto da empresa e não o boicote a embalagens recicladas."
      },
      {
        id: "d",
        text: "promover o reflorestamento integral de todas as matas ciliares degradadas da Bacia Amazônica.",
        isCorrect: false,
        distractorRationale: "A empresa apenas utiliza a imagem da Amazônia no rótulo, sem realizar ações reais de restauração florestal."
      },
      {
        id: "e",
        text: "obedecer voluntariamente aos princípios mais severos de publicidade ética fixados pelo CONAR.",
        isCorrect: false,
        distractorRationale: "A prática do greenwashing viola frontalmente o Código de Defesa do Consumidor e as diretrizes éticas do CONAR contra publicidade enganosa."
      }
    ],
    detailedExplanation: {
      summary: "O greenwashing utiliza semiótica ecológica vazia (imagens de natureza e termos vagos) para criar uma falsa aura de sustentabilidade e enganar o consumidor.",
      stepByStep: [
        "1. Semiótica de superfície: cores verdes, folhas, borboletas e selos criados pela própria empresa.",
        "2. Realidade material: produto plástico com índice quase nulo de reciclagem e descarte poluente.",
        "3. Dissimulação discursiva: termos genéricos e não comprovados ('Eco-Friendly', 'Verde').",
        "4. Efeito intencional: atrair o consumidor engajado e ocultar passivos ambientais graves da corporação."
      ],
      coreConcept: "Análise crítica do discurso publicitário: publicidade enganosa, greenwashing e responsabilidade socioambiental.",
      trapWarning: "Fique atento no ENEM aos chamados 'pecados do greenwashing': ausência de provas, vagueza terminológica, selos falsos sem certificação independente e irrelevância!"
    },
    commonTraps: ["Acreditar cegamente que qualquer produto com rótulo verde é realmente ecológico."],
    tags: ["Linguagens", "Publicidade", "Greenwashing", "Consumo Consciente", "Discurso Crítico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-004",
    area: "linguagens",
    competence: 7,
    skill: 24,
    topic: "Publicidade e Semiótica",
    subtopic: "Intertextualidade e Paródia Publicitária",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma clássica campanha de alimentos hortifrúti veiculada em revistas e painéis urbanos, um anúncio exibe uma maçã vermelha brilhante vestindo uma capa escura esvoaçante e uma máscara com orelhas pontiagudas. No topo da peça, o título estampa: 'O Cavaleiro das Trevas contra o colesterol alto: Batmã'. No rodapé, lê-se o slogan institucional: 'Aqui, a natureza é o maior super-herói da sua saúde.'",
      source: "REDE HORTIFRÚTI. Campanha Clássicos da Natureza: Batmã. Rio de Janeiro, 2022."
    },
    prompt: "O efeito de humor e a persuasão do anúncio baseiam-se na relação de intertextualidade paródica estabelecida entre",
    options: [
      {
        id: "a",
        text: "o universo da ficção científica espacial e os manuais de instrução de eletrodomésticos.",
        isCorrect: false,
        distractorRationale: "O texto não faz alusão a espaçonaves nem a manuais de eletrodomésticos."
      },
      {
        id: "b",
        text: "o personagem Batman da cultura pop de quadrinhos/cinema e a fruta maçã, gerando uma associação bem-humorada que valoriza a alimentação saudável.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A peça apoia-se no recurso da intertextualidade explícita paródica: pega emprestado o repertório cultural do super-herói Batman (o 'Cavaleiro das Trevas', capa e máscara) e faz um trocadilho fonético com 'Batmã' (Batman + Maçã). Essa hibridização lúdica e inteligente atrai a simpatia do leitor, conferindo à maçã os 'superpoderes' de combater o colesterol e proteger a saúde cardiovascular familiar."
      },
      {
        id: "c",
        text: "a obra teatral de Shakespeare e os tratados de botânica pura da Idade Média.",
        isCorrect: false,
        distractorRationale: "A referência é moderna, baseada nas histórias em quadrinhos da DC Comics e não no teatro renascentista."
      },
      {
        id: "d",
        text: "o mito grego de Narciso e o consumo desenfreado de produtos de beleza cosmética.",
        isCorrect: false,
        distractorRationale: "A analogia concentra-se em nutrição saudável e super-heróis, sem relação com o mito de Narciso."
      },
      {
        id: "e",
        text: "uma cantiga trovadoresca medieval de amor e o noticiário policial matutino.",
        isCorrect: false,
        distractorRationale: "Não há métrica trovadoresca nem narrativa policial na estrutura da peça publicitária."
      }
    ],
    detailedExplanation: {
      summary: "A paródia publicitária funde o personagem Batman com a maçã ('Batmã'), usando o humor intertextual para promover alimentação balanceada.",
      stepByStep: [
        "1. Texto-fonte / Hipotexto: Batman (quadrinhos/filmes, justiceiro de Gotham, capa e máscara).",
        "2. Texto derivado / Hipertexto: maçã vestida como Batman ('Batmã') combatendo o 'vilão' (colesterol alto).",
        "3. Trocadilho fonético: Batmã (Batman / Maçã).",
        "4. Resultado persuasivo: memorização rápida da marca pela via do entretenimento lúdico."
      ],
      coreConcept: "Intertextualidade na publicidade: paródia, trocadilho, apropriação da cultura pop e humor persuasivo.",
      trapWarning: "A intertextualidade só funciona se o leitor compartilhar o repertório sociocultural prévio do texto original!"
    },
    commonTraps: ["Achar que a propaganda está fazendo propaganda do filme em vez da rede de supermercados hortifrúti."],
    tags: ["Linguagens", "Publicidade", "Intertextualidade", "Paródia", "Cultura Pop", "Humor"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-005",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Publicidade e Semiótica",
    subtopic: "Combate à Violência Contra a Mulher (Ligue 180)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma peça de publicidade social veiculada em redes digitais pelo Ministério das Mulheres, a tela exibe o rosto em primeiro plano de uma mulher de olhos expressivos. Uma mão masculina desenhada em sombra escura cobre a sua boca. No entanto, por entre os dedos da sombra, a mulher segura com determinação um megafone estilizado do qual saem letras tipografadas em vermelho vivo: 'O silêncio protege o agressor. Quebre o ciclo. Você não está sozinha. Disque 180.'",
      source: "MINISTÉRIO DAS MULHERES. Campanha Nacional de Enfrentamento à Violência Doméstica. Brasília, 2023."
    },
    prompt: "Ao articular o gesto de silenciamento imposto pela sombra e a presença do megafone com o número de emergência, o cartaz institucional tem por finalidade",
    options: [
      {
        id: "a",
        text: "incentivar a conformidade pacífica das vítimas perante ameaças no ambiente familiar.",
        isCorrect: false,
        distractorRationale: "A mensagem visa romper exatamente com o silêncio e com a submissão, conclamando à denúncia ativa."
      },
      {
        id: "b",
        text: "desconstruir o isolamento imposto pela violência doméstica, convocando as vítimas e a sociedade à denúncia ativa e à rede de acolhimento estatal.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O anúncio expõe a dinâmica psicológica da violência doméstica: o silenciamento forçado da vítima pela intimidação e medo (simbolizado pela mão sobre a boca). O contra-ataque simbólico surge com o megafone e o número '180', representando a amplificação da voz, o apoio coletivo e o canal oficial de socorro. A antítese visual (mão calando vs. megafone falando) e os verbos no imperativo ('Quebre o ciclo', 'Disque 180') mobilizam a mulher a buscar a rede de proteção da Lei Maria da Penha."
      },
      {
        id: "c",
        text: "anunciar a comercialização de novos aparelhos amplificadores de som para eventos comunitários.",
        isCorrect: false,
        distractorRationale: "O megafone é um símbolo metafórico de amplificação da voz cidadã e não um produto sonoro à venda."
      },
      {
        id: "d",
        text: "condenar o uso de telefones celulares para comunicações interpessoais diárias.",
        isCorrect: false,
        distractorRationale: "O canal telefônico Disque 180 é exaltado como ferramenta vital de denúncia e acolhimento."
      },
      {
        id: "e",
        text: "defender que os casos de violência devem ser resolvidos exclusivamente no âmbito doméstico sem intervenção das leis.",
        isCorrect: false,
        distractorRationale: "A violência contra a mulher é um crime público incondicionado que exige intervenção legal e judiciária rigorosa."
      }
    ],
    detailedExplanation: {
      summary: "A tensão entre a mão que tenta calar e o megafone que grita pelo Disque 180 simboliza a superação do medo e o rompimento do ciclo de violência.",
      stepByStep: [
        "1. Conflito visual: mão sombria tapando a boca (opressão, medo, coerção) versus megafone com o 'Disque 180' (voz, denúncia, libertação).",
        "2. Frase de efeito: 'O silêncio protege o agressor' desconstrói o tabu de que brigas conjugais não devem ter intervenção externa.",
        "3. Função conativa: convoca a vítima e os vizinhos a agirem ligando para o canal de proteção.",
        "4. Cidadania: afirmação dos direitos fundamentais da mulher sob a Lei Maria da Penha."
      ],
      coreConcept: "Publicidade social e engajamento cívico: uso de antíteses visuais para romper preconceitos e defender direitos humanos.",
      trapWarning: "Campanhas sociais de denúncia dirigem-se não apenas à vítima direta, mas a toda a rede de testemunhas e à comunidade ao redor!"
    },
    commonTraps: ["Achar que a campanha busca apenas retratar a dor sem oferecer saída institucional concreta."],
    tags: ["Linguagens", "Publicidade", "Direitos da Mulher", "Lei Maria da Penha", "Cidadania", "Ligue 180"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-006",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Publicidade e Semiótica",
    subtopic: "A Retórica Clássica na Persuasão (Ethos, Pathos e Logos)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha institucional veiculada por uma associação pediátrica nacional contra o consumo excessivo de açúcar na infância, a peça apresenta três elementos destacados: 1) A declaração assinada pelo presidente da Sociedade Brasileira de Pediatria; 2) Um gráfico estatístico comprovando que o excesso de doces triplica o risco de diabetes tipo 2 e esteatose hepática em crianças de 5 a 10 anos; 3) A foto em primeiro plano de um garotinho chorando segurando um dente de leite quebrado por cárie severa, com os olhos marejados de dor.",
      source: "SOCIEDADE BRASILEIRA DE PEDIATRIA. Manual de Comunicação em Saúde Pública. Rio de Janeiro, 2023."
    },
    prompt: "De acordo com a teoria clássica da retórica aristotélica aplicada à análise do discurso publicitário, o gráfico estatístico das doenças, o depoimento do médico especialista e a imagem da criança em sofrimento correspondem, respectivamente, às dimensões de",
    options: [
      {
        id: "a",
        text: "Pathos (apelo emocional), Ethos (credibilidade do orador) e Logos (argumentação racional).",
        isCorrect: false,
        distractorRationale: "Inverteu a ordem: o gráfico estatístico é Logos e a criança chorando é Pathos."
      },
      {
        id: "b",
        text: "Logos (argumentação lógica e dados comprobatórios), Ethos (autoridade moral e científica do emissor) e Pathos (apelo afetivo e compaixão emocional).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na retórica clássica de Aristóteles (A Retórica), a persuasão efetiva ancora-se no tripé: 1) Logos: a lógica dos fatos, evidências e dados quantitativos (o gráfico estatístico com taxas de risco de diabetes); 2) Ethos: a autoridade, credibilidade e reputação ética de quem fala (a Sociedade Brasileira de Pediatria e seu presidente); 3) Pathos: a emoção, o sentimento e a empatia despertados no público (a foto comovente do menino chorando de dor com o dente cariado)."
      },
      {
        id: "c",
        text: "Ironia, Metonímia e Eufemismo estilísticos.",
        isCorrect: false,
        distractorRationale: "Essas são figuras de linguagem estéticas e não as três provas retóricas universais de persuasão."
      },
      {
        id: "d",
        text: "Metalinguagem, Função Fática e Função Poética da comunicação.",
        isCorrect: false,
        distractorRationale: "Confundiu as dimensões retóricas aristotélicas com as funções da linguagem de Roman Jakobson."
      },
      {
        id: "e",
        text: "Falácia ad hominem, Causa Falsa e Espantalho argumentativo.",
        isCorrect: false,
        distractorRationale: "Os recursos utilizados na campanha são evidências legítimas e não falácias lógicas desonestas."
      }
    ],
    detailedExplanation: {
      summary: "O tripé da persuasão aristotélica compõe-se de Logos (dados lógicos), Ethos (autoridade moral) e Pathos (emoção e empatia).",
      stepByStep: [
        "1. Gráfico estatístico com taxas de diabetes: apelo à razão lógica e aos dados objetivos = LOGOS.",
        "2. Declaração da Sociedade de Pediatria: apelo à credibilidade, ciência e autoridade médica = ETHOS.",
        "3. Foto do menino chorando de dor: apelo aos sentimentos de proteção, culpa e compaixão dos pais = PATHOS.",
        "4. A união dos três pilares maximiza a força de convencimento da campanha sanitária."
      ],
      coreConcept: "Retórica e argumentação no ENEM: o tripé persuasivo aristotélico (Ethos, Pathos, Logos).",
      trapWarning: "A publicidade de excelência nunca usa apenas um dos pilares: combina dados objetivos (logos) com autoridade de marca (ethos) e emoção estética (pathos)!"
    },
    commonTraps: ["Confundir Ethos (credibilidade) com Pathos (emoção)."],
    tags: ["Linguagens", "Publicidade", "Retórica", "Ethos", "Pathos", "Logos", "Argumentação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-007",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Publicidade e Semiótica",
    subtopic: "Charges de Imprensa e Ironia Política",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma charge publicada na editoria de economia de um grande jornal, um cidadão empobrecido, usando roupas remendadas, segura uma nota amassada de R$ 100,00 diante de um carrinho de supermercado gigantesco. Dentro do carrinho imenso, repousa solitária uma minúscula caixa de fósforos e um pão francês. Ao fundo, um elegante homem de terno, com um broche de cifrão na lapela, olha pelo binóculo e declara para a imprensa: 'Pelos meus cálculos macroeconômicos, o poder de compra do brasileiro atingiu patamares nunca antes vistos!'",
      source: "REVISTA DE JORNALISMO E CARICATURA SOCIAL. O Traço Crítico da Imprensa Brasileira. São Paulo, 2023."
    },
    prompt: "O efeito humorístico e a crítica sociopolítica veiculados pela charge constroem-se a partir de um recurso discursivo de",
    options: [
      {
        id: "a",
        text: "elogio sincero à precisão matemática dos economistas e à fartura material que beneficia todas as classes trabalhadoras.",
        isCorrect: false,
        distractorRationale: "A charge visa exatamente desmascarar a farsa desse discurso mostrando a mesa vazia do trabalhador."
      },
      {
        id: "b",
        text: "ironia e contraste hiperbólico entre a opulência ufanista do discurso oficial técnico e a dura realidade da perda inflacionária do poder de compra popular.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A charge jornalística opera com a ironia, a hipérbole visual e o contraste dramático: de um lado, a visualidade do carrinho monumental contendo apenas uma insignificante caixa de fósforos expõe a corrosão inflacionária real do salário (R$ 100 não compram quase nada); de outro, a fala pretensiosa e desconectada da autoridade técnica ('poder de compra atingiu patamares nunca vistos') evidencia o abismo entre as narrativas macroeconômicas oficiais e a sobrevivência diária das famílias de baixa renda."
      },
      {
        id: "c",
        text: "apologia ao desperdício generalizado de alimentos nos grandes centros de abastecimento.",
        isCorrect: false,
        distractorRationale: "O carrinho está escancaradamente vazio, retratando escassez e caristia, não abundância ou desperdício."
      },
      {
        id: "d",
        text: "propaganda explícita convidando os leitores a investirem em títulos de fósforos na bolsa de valores.",
        isCorrect: false,
        distractorRationale: "A caixa de fósforos é um elemento metonímico da cesta básica mínima inacessível, não um ativo financeiro."
      },
      {
        id: "e",
        text: "proibição legal de qualquer manifestação gráfica cômica nas páginas de periódicos impressos.",
        isCorrect: false,
        distractorRationale: "A charge de imprensa é um gênero de opinião jornalística plenamente amparado pela liberdade de expressão constitucional."
      }
    ],
    detailedExplanation: {
      summary: "A charge usa o contraste irônico e a desproporção visual (carrinho imenso com quase nada dentro) para denunciar o distanciamento entre a tecnocracia e a carestia real da população.",
      stepByStep: [
        "1. Linguagem não-verbal: carrinho de compras gigantesco com apenas dois itens ínfimos + cidadão com roupas surradas segurando R$ 100.",
        "2. Linguagem verbal: fala do economista arrogante que declara que o poder de compra está recorde.",
        "3. Conflito semiótico: a imagem desmente radicalmente a fala verbal.",
        "4. Efeito de sentido: ironia crítica e indignação política contra a desigualdade e a inflação alimentar."
      ],
      coreConcept: "Gênero Charge: crítica política, ironia, caricatura e desproporção visual multimodal.",
      trapWarning: "Na charge do ENEM, o humor nunca é neutro ou inocente: ele é SEMPRE uma arma crítica contra contradições sociais, privilégios ou hipocrisia de figuras públicas!"
    },
    commonTraps: ["Interpretar a fala do personagem de terno de forma literal sem perceber a ironia desmentida pela imagem."],
    tags: ["Linguagens", "Charge", "Ironia", "Semiótica", "Economia", "Crítica Social"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-008",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Publicidade e Semiótica",
    subtopic: "A Função Poética em Slogans e Textos Comerciais",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere os slogans publicitários e institucionais a seguir, consagrados na memória coletiva brasileira:\n1. 'Tomou Doril, a dor sumiu.'\n2. 'Território da tranquilidade, plantando hoje a paz da cidade.'\n3. 'Quem pede com carinho, colhe com sabor.'\nEm todas essas construções breves, nota-se o cuidado estético minucioso com o ritmo sonoro, as rimas internas e o paralelismo sintático entre os termos.",
      source: "ASSOCIAÇÃO BRASILEIRA DE PROPAGANDA (ABP). A Palavra que Fica: Memória dos Slogans Brasileiros. São Paulo, 2022."
    },
    prompt: "Ao trabalhar a sonoridade das palavras, a métrica ritmada e os jogos de rima, a publicidade apropria-se da função poética da linguagem com o objetivo primordial de",
    options: [
      {
        id: "a",
        text: "transmitir dados puramente técnicos com vocabulário estritamente denotativo e neutro.",
        isCorrect: false,
        distractorRationale: "A transmissão neutra de dados é a função referencial, contrária aos jogos lúdicos da função poética."
      },
      {
        id: "b",
        text: "garantir a rápida memorização e fixação da mensagem na mente do consumidor por meio do prazer estético e da musicalidade da mensagem.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na comunicação publicitária, a função conativa (foco em persuadir o receptor) apoia-se intensamente na função poética (foco no arranjo estético e sonoro da própria mensagem). Slogans curtos com rimas emparelhadas ('Doril / sumiu'), aliterações e ritmo cadenciado atuam como 'chicletes cognitivos': provocam prazer auditivo, facilitam a retenção na memória de longo prazo e fazem com que o consumidor reproduza a frase espontaneamente no cotidiano, associando a marca a uma resposta imediata."
      },
      {
        id: "c",
        text: "comprovar a ausência de princípios químicos ativos nos medicamentos mencionados.",
        isCorrect: false,
        distractorRationale: "O slogan publicitário de fármacos visa criar uma associação psicológica de alívio rápido e não atestar relatórios laboratoriais."
      },
      {
        id: "d",
        text: "testar se a linha telefônica ou o canal de áudio da emissora de rádio está em perfeito funcionamento.",
        isCorrect: false,
        distractorRationale: "Testar o canal de comunicação é a função fática ('alô, está ouvindo?'), e não a função poética."
      },
      {
        id: "e",
        text: "explicar a etimologia e a conjugação gramatical dos verbos empregados.",
        isCorrect: false,
        distractorRationale: "Explicar a gramática pelo código é a função metalinguística."
      }
    ],
    detailedExplanation: {
      summary: "A função poética na publicidade explora o ritmo, a rima e a musicalidade da mensagem para facilitar a memorização involuntária do slogan pelo público.",
      stepByStep: [
        "1. Função Poética (Jakobson): mensagem centrada na sua própria forma (sonoridade, rima, ritmo, métrica).",
        "2. Estrutura dos slogans: frases curtas, paralelismo e rimas ('Doril / sumiu').",
        "3. Efeito psicológico: musicalidade e ludicidade tornam a frase cativante.",
        "4. Efeito publicitário: fixação duradoura na memória afetiva do consumidor, induzindo à preferência de compra."
      ],
      coreConcept: "Função Poética da Linguagem a serviço da persuasão publicitária e fixação de slogans.",
      trapWarning: "A função poética não existe apenas em poemas clássicos de livros de literatura; ela está presente em provérbios populares, letras de rap, charges e slogans publicitários de TV!"
    },
    commonTraps: ["Achar que a função poética só pode ser encontrada em sonetos de autores mortos."],
    tags: ["Linguagens", "Publicidade", "Função Poética", "Slogan", "Rima", "Memorização"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-009",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Publicidade e Semiótica",
    subtopic: "Campanhas de Vacinação e Gotinha Cidadão",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Criado em 1986 pelo artista plástico Darlan Rosa a pedido do Ministério da Saúde para humanizar as campanhas de erradicação da poliomielite, o personagem 'Zé Gotinha' tornou-se o maior símbolo da imunização infantil brasileira. Desenhado como uma simpática gota de vacina antropomórfica de olhos grandes e sorriso acolhedor, o mascote aparece em postos de saúde de todo o país abraçando crianças e profissionais de saúde, acompanhado do slogan: 'Vacinas salvam vidas. Leve seu filho para vacinar.'",
      source: "FUNDAÇÃO OSWALDO CRUZ (FIOCRUZ). História da Imunização Pública e Comunicação em Saúde. Rio de Janeiro, 2023."
    },
    prompt: "A longevidade e o êxito histórico do personagem Zé Gotinha como estratégia de comunicação pública decorrem da sua capacidade de",
    options: [
      {
        id: "a",
        text: "provocar pânico e terror sanitário nas famílias para que busquem remédios privados nas farmácias.",
        isCorrect: false,
        distractorRationale: "O Zé Gotinha foi desenhado justamente para eliminar o medo infantil da injeção e do ambiente médico."
      },
      {
        id: "b",
        text: "desmistificar o medo infantil da dor médica por meio de uma figura lúdica, empática e acolhedora, transformando o ato da vacinação em uma festa de cidadania e proteção familiar.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Antes do Zé Gotinha, as campanhas sanitárias eram focadas no perigo das agulhas e em advertências rígidas que assustavam crianças e pais. A criação de um mascote amigável, macio e festivo (a personificação antropomórfica da gota de vacina oral) alterou o imaginário social da imunização: vacinar deixou de ser associado a sofrimento hospitalar e tornou-se um rito afetuoso de amor familiar, cuidado mútuo e conquista da saúde pública brasileira no SUS."
      },
      {
        id: "c",
        text: "anunciar a cobrança compulsória de tarifas de aplicação de vacinas nos postos do SUS.",
        isCorrect: false,
        distractorRationale: "As vacinas do Programa Nacional de Imunizações (PNI) do SUS são 100% universais e gratuitas."
      },
      {
        id: "d",
        text: "incentivar o isolamento doméstico permanente sem realização de exames pediátricos periódicos.",
        isCorrect: false,
        distractorRationale: "A campanha estimula a ida aos postos de saúde e a atualização da caderneta de vacinação."
      },
      {
        id: "e",
        text: "promover o comércio internacional de seringas descartáveis importadas da Ásia.",
        isCorrect: false,
        distractorRationale: "O personagem foi criado para a vacina oral da pólio (gotinha) com fins de saúde pública coletiva."
      }
    ],
    detailedExplanation: {
      summary: "O Zé Gotinha humaniza e desmistifica a imunização pública, substituindo o medo da dor pela afetividade lúdica e pelo dever de cidadania.",
      stepByStep: [
        "1. Problema de comunicação pré-1986: crianças choravam e tinham pânico da figura do médico com seringa.",
        "2. Solução semiótica: criação de uma mascote antropomórfica amigável, fofa e sorridente (Zé Gotinha).",
        "3. Ressignificação do ato: vacinação como momento de festa, carinho e acolhimento familiar nos postos de saúde.",
        "4. Impacto: Brasil erradicou a poliomielite e tornou o PNI uma referência global da OMS."
      ],
      coreConcept: "Personificação e humanização na comunicação pública de saúde: como a empatia visual supera resistências culturais.",
      trapWarning: "Zé Gotinha é um exemplo supremo de comunicação comunitária do SUS, frequentemente lembrado em redações sobre hesitação vacinal e saúde pública no Brasil!"
    },
    commonTraps: ["Achar que mascotes em campanhas públicas são meros enfeites sem fundamentação pedagógica e comunicativa."],
    tags: ["Linguagens", "Publicidade", "Zé Gotinha", "Saúde Pública", "SUS", "Comunicação Cidadã"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-010",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Publicidade e Semiótica",
    subtopic: "Adesão a Causas e o Papel do Slogan Social",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha promovida por coletivos ambientais urbanos para preservação dos rios e córregos canalizados de uma metrópole, faixas pintadas por voluntários nas pontes exibem a seguinte mensagem:\n'Sob este asfalto cinza, corre um rio vivo que pede socorro. Desenterre sua consciência antes que a água vire poeira.'",
      source: "MOVIMENTO RIOS E CIDADES. Cartilha de Preservação das Bacias Hidrográficas Urbanas. Belo Horizonte, 2023."
    },
    prompt: "Ao confrontar os termos 'asfalto cinza' e 'rio vivo' com o jogo antitético entre 'água' e 'poeira', o slogan mobiliza recursos estilísticos para",
    options: [
      {
        id: "a",
        text: "enaltecer a expansão rodoviária e a pavimentação de avenidas sobre áreas de várzea.",
        isCorrect: false,
        distractorRationale: "O texto denuncia a destruição dos rios pela pavimentação cinza e não faz apologia a rodovias."
      },
      {
        id: "b",
        text: "provocar reflexão crítica sobre o sufocamento das águas urbanas pelo concreto, alertando para o risco de colapso hídrico decorrente da negligência ecológica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O slogan trabalha com antíteses e metáforas poderosas: o 'asfalto cinza' (a metrópole árida, cinzenta e impermeabilizada) em contraste com o 'rio vivo' (a natureza sufocada que foi ocultada pela engenharia predatória). O paradoxo final ('antes que a água vire poeira') expressa com força poética o perigo extremo da seca extrema e da escassez hídrica se os cidadãos não mudarem sua postura de indiferença ambiental."
      },
      {
        id: "c",
        text: "convocar os moradores a fecharem os encanamentos residenciais de água potável.",
        isCorrect: false,
        distractorRationale: "A mensagem visa proteger os rios urbanos e recuperar bacias, e não desligar tubulações sanitárias."
      },
      {
        id: "d",
        text: "exigir a destruição de todos os edifícios históricos de bairros tradicionais.",
        isCorrect: false,
        distractorRationale: "A reivindicação é socioambiental (despoluição de rios e drenagem sustentável), e não demolição cega de patrimônio."
      },
      {
        id: "e",
        text: "anunciar a venda de terrenos em áreas de encostas instáveis sem licenciamento ambiental.",
        isCorrect: false,
        distractorRationale: "O texto é um manifesto voluntário de proteção ecológica e não um anúncio de imobiliária privada."
      }
    ],
    detailedExplanation: {
      summary: "As antíteses 'asfalto cinza vs. rio vivo' e 'água vs. poeira' criam um alerta dramático sobre a impermeabilização do solo e a emergência da escassez hídrica.",
      stepByStep: [
        "1. Antítese 1: 'asfalto cinza' (morte, impermeabilidade, concreto) vs. 'rio vivo' (vida, natureza, fluxo de água).",
        "2. Prosopopeia: o rio 'pede socorro' (atribuição de sentimentos humanos à natureza).",
        "3. Paradoxo temporal: 'antes que a água vire poeira' (imagem da seca severa).",
        "4. Intenção discursiva: desnaturalizar o soterramento dos rios urbanos e despertar engajamento cidadão."
      ],
      coreConcept: "Figuras de estilo a serviço da persuasão cívica: antítese, prosopopeia e metáfora na publicidade ecológica.",
      trapWarning: "Lembre-se: slogans eficientes condensam um dilema sociopolítico complexo em poucas palavras de alto impacto imagético!"
    },
    commonTraps: ["Desconsiderar a força das figuras de linguagem na mobilização de movimentos ecológicos."],
    tags: ["Linguagens", "Publicidade", "Meio Ambiente", "Slogan", "Antítese", "Cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-011",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Publicidade e Semiótica",
    subtopic: "A Tipografia como Recurso Expressivo",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha contra o bullying nas escolas, um cartaz apresenta a palavra 'RESPEITO' escrita em letras garrafais sólidas, espessas e em alto-relevo de concreto. Logo abaixo, a palavra 'ofensa' surge digitada em letras minúsculas, trêmulas, finas e semiapagadas, quase se desfazendo em pó sobre uma folha de caderno escolar rasgada.",
      source: "CENTRO DE ESTUDOS EM DESIGN E EDUCAÇÃO. Semiótica Tipográfica na Prevenção à Violência Escolar. Curitiba, 2023."
    },
    prompt: "A escolha das fontes e a formatação tipográfica das palavras 'RESPEITO' e 'ofensa' constituem um recurso semiótico cujo objetivo é",
    options: [
      {
        id: "a",
        text: "atestar a superioridade de métodos antiquados de datilografia mecânica manual.",
        isCorrect: false,
        distractorRationale: "O design moderno explora peso tipográfico e não saudosismos de máquinas de escrever antigas."
      },
      {
        id: "b",
        text: "atribuir valor semântico e peso moral à mensagem por meio da materialidade visual das letras, contrapondo a solidez do respeito à covardia efêmera da agressão verbal.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na semiótica visual contemporânea, a tipografia (tipo de letra, espessura, tamanho, textura e estabilidade) não é neutra: ela carrega significado conotativo autônomo. A palavra 'RESPEITO', em caixa alta, espessa e com textura de concreto, materializa firmeza, permanência, dignidade e autoridade ética inegociável. Por outro lado, a palavra 'ofensa', trêmula, fina e fragmentando-se em pó, traduz a fragilidade, pequenez e insignificância moral do agressor covarde, reforçando o valor pedagógico da campanha."
      },
      {
        id: "c",
        text: "provar que folhas de papel escolar rasgadas aumentam a retenção do conteúdo em provas acadêmicas.",
        isCorrect: false,
        distractorRationale: "A folha rasgada simboliza a dor e a vulnerabilidade da vítima e não técnicas de memorização para testes."
      },
      {
        id: "d",
        text: "ensinar alunos do ensino fundamental a desenharem letras de fôrma para competições de caligrafia.",
        isCorrect: false,
        distractorRationale: "O foco é o combate ético ao bullying e à violência psicológica, não caligrafia ornamental."
      },
      {
        id: "e",
        text: "exigir que todas as provas escolares sejam impressas unicamente com fontes em relevo de concreto.",
        isCorrect: false,
        distractorRationale: "A textura de concreto é uma metáfora visual gráfica e não uma diretriz física de impressão de cadernos escolares."
      }
    ],
    detailedExplanation: {
      summary: "A semiótica tipográfica confere significado visual às palavras: a robustez de 'RESPEITO' contrapõe-se à fragilidade e pequenez de 'ofensa'.",
      stepByStep: [
        "1. Tipografia de 'RESPEITO': caixa alta (maiúsculas), peso bold/extrabold, textura de concreto ⟶ solidez, firmeza moral inabalável.",
        "2. Tipografia de 'ofensa': minúsculas, linha trêmula, apagando-se ⟶ covardia, fraqueza, efemeridade.",
        "3. Suporte: folha de caderno rasgada ⟶ a dor e o sofrimento causados no cotidiano escolar.",
        "4. Conclusão semiótica: a forma visual da letra comunica tanto ou mais que o seu significado de dicionário."
      ],
      coreConcept: "Semiótica da Tipografia: a dimensão expressiva das fontes, pesos, tamanhos e texturas na publicidade.",
      trapWarning: "No ENEM, as propriedades visuais de um texto (tamanho da fonte, cor, espaçamento e alinhamento) são SEMPRE intencionais e avaliadas na leitura multimodal!"
    },
    commonTraps: ["Ignorar a tipografia e focar apenas no significado denotativo literal das palavras do dicionário."],
    tags: ["Linguagens", "Publicidade", "Tipografia", "Semiótica", "Bullying", "Design"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-012",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Publicidade e Semiótica",
    subtopic: "A Função Fática e o Diálogo com o Consumidor",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma propaganda veiculada no início de vídeos em plataformas digitais de compartilhamento, o locutor olha fixamente para a lente da câmera, aponta o indicador diretamente para o espectador e abre a locução dizendo: 'Ei, você! Sim, você mesmo que está prestes a pular este anúncio em 5 segundos! Para tudo e me ouve por um instante.'",
      source: "REVISTA BRASILEIRA DE MARKETING DIGITAL. Estratégias de Retenção de Atenção em Vídeos Curtos. São Paulo, 2023."
    },
    prompt: "Ao utilizar expressões como 'Ei, você!' e antecipar o comportamento do internauta ('prestes a pular este anúncio'), o enunciador emprega primariamente a função",
    options: [
      {
        id: "a",
        text: "metalinguística, pois tem por objetivo ditar regras sobre a morfologia de pronomes demonstrativos.",
        isCorrect: false,
        distractorRationale: "O enunciador não está explicando regras de gramática, mas tentando capturar o contato com o espectador."
      },
      {
        id: "b",
        text: "fática da linguagem, voltada para abrir, manter e restabelecer o canal de contato e atenção com o interlocutor antes que a comunicação seja interrompida.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A função fática (proposta por Roman Jakobson) tem como foco o CANAL de comunicação: seu propósito não é transmitir informações densas (referencial) nem expressar sentimentos líricos (emotiva), mas estabelecer, prolongar, verificar ou reativar o contato entre emissor e receptor ('Ei!', 'Alô?', 'Olhe aqui!'). No ambiente digital onde o internauta tem o botão de pular o anúncio em 5 segundos, a quebra da quarta parede e a interpelação direta servem como 'gancho fático' para impedir a fuga da audiência."
      },
      {
        id: "c",
        text: "emotiva, revelando o sofrimento pessoal profundo do ator perante as dificuldades de sua carreira artística.",
        isCorrect: false,
        distractorRationale: "O ator está desempenhando um papel estratégico comercial de engajamento e não expondo confissões íntimas."
      },
      {
        id: "d",
        text: "referencial, focando exclusivamente na descrição enciclopédica do produto comercializado.",
        isCorrect: false,
        distractorRationale: "Nenhum dado referencial sobre o produto foi mencionado ainda na abertura do vídeo."
      },
      {
        id: "e",
        text: "poética arcaica, preservando versos rimados de cantigas de amigo medievais portuguesas.",
        isCorrect: false,
        distractorRationale: "A linguagem é coloquialíssima, direta e agressivamente contemporânea, sem qualquer traço lírico medieval."
      }
    ],
    detailedExplanation: {
      summary: "A interpelação direta ('Ei, você! Me ouve!') é a função fática em ação: busca prender o canal de contato e evitar que o usuário pule o vídeo.",
      stepByStep: [
        "1. Canal sob ameaça: o internauta está prestes a clicar em 'Pular Anúncio'.",
        "2. Estratégia do locutor: olhar na câmera e chamar a atenção diretamente ('Ei, você!').",
        "3. Função fática: manutenção do canal de contato perceptivo e combate à dispersão da atenção.",
        "4. Transição: uma vez retido o canal, o anúncio parte para a função apelativa/conativa de convencimento."
      ],
      coreConcept: "Função Fática da Linguagem na era digital: captura e sustentação da atenção em janelas de engajamento curto.",
      trapWarning: "Lembre-se: 'Alô', 'Ei', 'Você tá me ouvindo?', 'Olha pra cá' são exemplos clássicos de função fática no ENEM!"
    },
    commonTraps: ["Confundir o ato de prender a atenção (função fática) com a mensagem comercial completa (função conativa)."],
    tags: ["Linguagens", "Publicidade", "Função Fática", "Marketing Digital", "Jakobson", "Canal de Comunicação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-013",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Publicidade e Semiótica",
    subtopic: "A Estética do Cartaz Moderno e a Síntese Visual",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um festival de cinema independente sobre direitos humanos, o cartaz oficial apresenta o desenho estilizado de uma gaiola de pássaros cuja porta de arame foi entortada para fora. No espaço onde ficaria o pássaro engaiolado, observa-se a silhueta vazia no formato de um livro aberto voando com asas de papel. Nenhuma palavra é escrita além da data e do nome do evento.",
      source: "MOSTRA INTERNACIONAL DE CINEMA E MEMÓRIA. Catálogo de Identidade Visual. Porto Alegre, 2023."
    },
    prompt: "A metáfora visual construída pelo cartaz articula elementos semióticos para comunicar que",
    options: [
      {
        id: "a",
        text: "a leitura e o conhecimento crítico operam como instrumentos de libertação e emancipação humana contra a opressão e o aprisionamento.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O cartaz opera pela síntese visual minimalista: a gaiola representa a prisão, a censura, a ignorância e a opressão de regimes autoritários. A grade entortada e o livro aberto transformado em pássaro voando simbolizam o poder emancipatório da educação, da arte cinematográfica e do saber letrado, os quais rompem as correntes do obscurantismo e concedem liberdade de voo à consciência humana."
      },
      {
        id: "b",
        text: "a comercialização de aves silvestres em feiras populares é a principal temática do evento cinematográfico.",
        isCorrect: false,
        distractorRationale: "A gaiola é uma metáfora universal de aprisionamento social e político, e não uma denúncia biológica estrita de ornitologia."
      },
      {
        id: "c",
        text: "o papel celulose utilizado na confecção de livros físicos deve ser substituído por grades de metal.",
        isCorrect: false,
        distractorRationale: "Interpretação literal ingênua e descabida da metáfora gráfica do cartaz."
      },
      {
        id: "d",
        text: "os livros devem ser mantidos trancados em bibliotecas para evitar que sofram desgaste físico.",
        isCorrect: false,
        distractorRationale: "A imagem mostra exatamente o livro quebrando a grade e escapando para a liberdade."
      },
      {
        id: "e",
        text: "a tecnologia digital tornou o cinema totalmente obsoleto frente aos livros impressos.",
        isCorrect: false,
        distractorRationale: "O cartaz promove justamente um festival de cinema que celebra a cultura e os direitos humanos em comunhão com o saber."
      }
    ],
    detailedExplanation: {
      summary: "O livro alado escapando da gaiola arrombada é a metáfora visual clássica do conhecimento como força de libertação e resistência à opressão.",
      stepByStep: [
        "1. Objeto 1: Gaiola aberta com arames forçados ⟶ rompimento de limites impostos, libertação de amarras autoritárias.",
        "2. Objeto 2: Livro com páginas abertas em formato de pássaro voando ⟶ educação, cultura e arte como asas da consciência.",
        "3. Ausência de texto explicativo longo: confiança no repertório metafórico universal do leitor (síntese visual).",
        "4. Conclusão: a cultura emancipa o ser humano da escuridão do aprisionamento social."
      ],
      coreConcept: "Síntese visual e metáfora não-verbal no cartaz contemporâneo: economia de signos e densidade polissêmica.",
      trapWarning: "Quando um cartaz do ENEM quase não tem texto escrito, preste atenção dobrada aos símbolos arquetípicos (gaiola, asas, luz, correntes, olhos)!"
    },
    commonTraps: ["Interpretar símbolos arquetípicos de forma literal (achar que a gaiola fala sobre passarinhos reais)."],
    tags: ["Linguagens", "Cartaz", "Semiótica Visual", "Metáfora", "Educação", "Direitos Humanos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-014",
    area: "linguagens",
    competence: 7,
    skill: 24,
    topic: "Publicidade e Semiótica",
    subtopic: "A Ancoragem Texto-Imagem segundo Roland Barthes",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O semiólogo francês Roland Barthes demonstrou que toda imagem visual é polissêmica: ela oferece uma cadeia flutuante de significados possíveis entre os quais o leitor pode escolher. O texto verbal anexado à imagem desempenha frequentemente a função de ancoragem: ele guia o olhar do observador, fixa um sentido pretendido e impede que a polissemia da imagem se disperse em leituras indesejadas pelo autor.",
      source: "BARTHES, Roland. A Retórica da Imagem. In: O Óbvio e o Obtuso. Tradução de Léa Novaes. Rio de Janeiro: Nova Fronteira, 1990."
    },
    prompt: "Considere uma fotografia de um par de sapatos de corrida velhos e cobertos de terra jogados ao lado de uma cadeira de rodas vazia. Para que a imagem seja lida indubitavelmente como uma campanha de celebração da superação e inclusão paralímpica de um paratleta, a função de ancoragem verbal é exercida pelo seguinte título:",
    options: [
      {
        id: "a",
        text: "'Sapateiro de plantão: consertamos calçados surrados com desconto à vista.'",
        isCorrect: false,
        distractorRationale: "Essa frase ancora a imagem no comércio de sapataria, anulando o sentido esportivo paralímpico."
      },
      {
        id: "b",
        text: "'Não há limites para quem transforma desafios em medalhas. O esporte abre caminhos.'",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Conforme a teoria de Roland Barthes, a imagem isolada poderia sugerir abandono, tragédia, acidente ou mero descarte de lixo. O texto verbal ('Não há limites para quem transforma desafios em medalhas') opera como âncora interpretativa decisiva: seleciona e fixa a leitura esportiva e afirmativa (a cadeira vazia não significa morte, mas sim que o paratleta foi para a pista competir e superar limites), canalizando a interpretação do leitor para o horizonte da superação atlética."
      },
      {
        id: "c",
        text: "'Prefeitura alerta: proibido abandonar entulhos e cadeiras danificadas em calçadas.'",
        isCorrect: false,
        distractorRationale: "Ancora a imagem no âmbito da limpeza urbana e multas municipais."
      },
      {
        id: "d",
        text: "'História das cadeiras dobráveis na arquitetura hospitalar moderna dos anos 1950.'",
        isCorrect: false,
        distractorRationale: "Ancora a imagem no design histórico de mobiliário hospitalar."
      },
      {
        id: "e",
        text: "'Estudo comprova que a poeira acelera o desgaste das solas de borracha sintética.'",
        isCorrect: false,
        distractorRationale: "Ancora a imagem em engenharia mecânica de materiais esportivos."
      }
    ],
    detailedExplanation: {
      summary: "A ancoragem textual de Roland Barthes restringe a polissemia da imagem, direcionando o leitor para o sentido pretendido pelo emissor.",
      stepByStep: [
        "1. Imagem polissêmica: cadeira de rodas vazia + tênis esportivos usados (admite múltiplos significados: tristeza, acidente, conserto, esporte).",
        "2. Função do texto (ancoragem): restringir as leituras livres e fixar a mensagem oficial.",
        "3. Título esportivo: 'Não há limites para quem transforma desafios em medalhas'.",
        "4. Resultado: a cadeira vazia é interpretada como símbolo de superação e vitória paradesportiva."
      ],
      coreConcept: "Conceito semiótico de Roland Barthes: ancoragem (ancrage) do texto sobre a imagem na publicidade.",
      trapWarning: "Sem a ancoragem do texto, uma imagem publicitária pode gerar interpretações totalmente equivocadas ou indesejadas pelo público!"
    },
    commonTraps: ["Achar que a imagem sempre fala por si mesma sem depender do texto verbal."],
    tags: ["Linguagens", "Publicidade", "Roland Barthes", "Ancoragem", "Polissemia", "Semiótica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-015",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Publicidade e Semiótica",
    subtopic: "A Desconstrução de Estereótipos de Gênero",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha publicitária de brinquedos educativos, a imagem central retrata uma menina vestindo um jaleco branco e capacete de astronauta manuseando ferramentas de robótica e telescópios, enquanto, ao seu lado, um menino veste um avental colorido e cuida carinhosamente de um bebê de brinquedo em um berço. O slogan no topo questiona: 'Quem disse que sonhar tem cor ou gênero? Deixe seu filho ser o que a imaginação criar.'",
      source: "ASSOCIAÇÃO BRASILEIRA DE FABRICANTES DE BRINQUEDOS (ABRINQ). Brincar Sem Barreiras: Infância Livre de Preconceitos. São Paulo, 2023."
    },
    prompt: "A disposição das personagens infantis e das atividades ilustradas na peça publicitária constrói uma estratégia argumentativa voltada para",
    options: [
      {
        id: "a",
        text: "reforçar a divisão sexual tradicional do trabalho que confina mulheres exclusivamente ao ambiente doméstico.",
        isCorrect: false,
        distractorRationale: "A peça combate exatamente essa divisão arcaica, mostrando a menina na ciência espacial."
      },
      {
        id: "b",
        text: "desconstruir papéis de gênero estereotipados na infância, promovendo a liberdade de aspirações profissionais e afetivas sem limitações sexistas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Historicamente, a publicidade de brinquedos reforçou papéis de gênero rígidos (meninas ganhavam bonecas e cozinhas em tons de rosa, preparando-as para o cuidado doméstico; meninos ganhavam robôs, carros e ferramentas científicas, associando-os à liderança externa e tecnologia). A campanha inverte deliberadamente essas posições para desconstruir o sexismo precoce: a menina explora a astronomia e a engenharia, e o menino desenvolve a sensibilidade do cuidado e da paternidade responsável, afirmando que a imaginação e as vocações não têm gênero pré-determinado."
      },
      {
        id: "c",
        text: "proibir as crianças de brincarem em espaços públicos de lazer coletivo.",
        isCorrect: false,
        distractorRationale: "O anúncio incentiva a brincadeira livre e plural, sem propor restrições de convívio social."
      },
      {
        id: "d",
        text: "defender o fechamento das agências espaciais e laboratórios de robótica do país.",
        isCorrect: false,
        distractorRationale: "Pelo contrário, a peça incentiva o interesse de meninas pelas carreiras científicas (STEM)."
      },
      {
        id: "e",
        text: "afirmar que brinquedos educativos são prejudiciais ao desenvolvimento psicomotor da criança.",
        isCorrect: false,
        distractorRationale: "O anúncio promove justamente o brinquedo educativo como propulsor de imaginação e empatia."
      }
    ],
    detailedExplanation: {
      summary: "A inversão dos papéis tradicionais de brinquedos quebra preconceitos de gênero e valoriza tanto meninas na ciência quanto meninos no cuidado afetivo.",
      stepByStep: [
        "1. Estereótipo tradicional: meninas cuidam de bonecas; meninos brincam de ciência e tecnologia.",
        "2. Quebra de expectativa no anúncio: menina com telescópio/robótica; menino cuidando do bebê com afeto.",
        "3. Mensagem verbal: 'Quem disse que sonhar tem cor ou gênero?'.",
        "4. Intenção social: combater o machismo estrutural desde a primeira infância por meio da representatividade e do brincar livre."
      ],
      coreConcept: "Publicidade cidadã e desconstrução de estereótipos de gênero: representatividade e direitos humanos.",
      trapWarning: "O ENEM frequentemente traz questões de publicidade que debatem a evolução do papel da mulher na sociedade e a paternidade ativa contemporânea!"
    },
    commonTraps: ["Achar que a campanha busca padronizar as brincadeiras, quando na verdade amplia as possibilidades de escolha."],
    tags: ["Linguagens", "Publicidade", "Estereótipos de Gênero", "Infância", "Diversidade", "Cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-016",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Publicidade e Semiótica",
    subtopic: "A Publicidade Comparativa e Limites Éticos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Conselho Nacional de Autorregulamentação Publicitária (CONAR) estabelece em seu Código Brasileiro de Autorregulamentação Publicitária que a publicidade comparativa é legítima desde que atenda a critérios estritos: seu objetivo principal deve ser o esclarecimento do consumidor; a comparação deve assentar-se em dados objetivos e comprováveis em laudos técnicos oficiais; e deve abster-se terminantemente de denegrir, ridicularizar ou difamar a honra da marca concorrente.",
      source: "CONAR. Código Brasileiro de Autorregulamentação Publicitária. Artigo 32. São Paulo, 2022."
    },
    prompt: "De acordo com as diretrizes do CONAR, uma peça de publicidade comparativa torna-se ILEGAL e antiética quando",
    options: [
      {
        id: "a",
        text: "apresenta laudos laboratoriais certificados demonstrando que seu sabão em pó remove manchas com menor tempo de lavagem que o concorrente.",
        isCorrect: false,
        distractorRationale: "Isso é uma comparação objetiva e comprovada permitida pelas normas éticas."
      },
      {
        id: "b",
        text: "recorre a deboches pessoais, difamação infundada da imagem comercial alheia ou alegações enganosas sem base empírica demonstrável para desqualificar o concorrente.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A publicidade comparativa é admitida no Brasil como mecanismo de transparência pró-consumidor, mas é estritamente regulada pelo CONAR e pelo Código de Defesa do Consumidor. Ela é considerada ilícita quando incorre em depreciação gratuita ('denegrir'), concorrência desleal, deboche degradante, comparações enganosas ou afirmações genéricas subjetivas ('nosso produto é o único decente, o deles é lixo') sem sustentação em laudos periciais independentes."
      },
      {
        id: "c",
        text: "informa o preço real dos dois produtos apurado nas mesmas prateleiras de supermercados na mesma data.",
        isCorrect: false,
        distractorRationale: "A comparação de preços objetivos vigentes na mesma data é plenamente admitida como direito de informação."
      },
      {
        id: "d",
        text: "cita que seu veículo elétrico possui autonomia auditada por instituto oficial maior que a de outros modelos da mesma categoria.",
        isCorrect: false,
        distractorRationale: "Dados auditados por órgãos oficiais (como INMETRO) constituem comparação técnica legítima."
      },
      {
        id: "e",
        text: "veicula o nome fantasia e o CNPJ da empresa anunciante de forma legível no rodapé.",
        isCorrect: false,
        distractorRationale: "Identificar o anunciante é um dever de transparência obrigatório em todas as peças publicitárias."
      }
    ],
    detailedExplanation: {
      summary: "A publicidade comparativa só é ética se for objetiva, comprovável e respeitosa; torna-se ilícita se difamar ou ridicularizar o concorrente.",
      stepByStep: [
        "1. Princípio do CONAR: a comparação visa esclarecer o consumidor, não destruir o rival.",
        "2. Critérios legais: dados objetivos, mensuráveis, mesma categoria e comprovados por testes.",
        "3. Limites éticos: vedação ao deboche, à depreciação desleal e a acusações caluniosas.",
        "4. Finalidade da norma: proteger o consumidor contra informações falsas e assegurar livre concorrência honesta."
      ],
      coreConcept: "Ética na publicidade e regulação comunicacional: o papel do CONAR e o combate à concorrência desleal.",
      trapWarning: "No Brasil, é permitido citar concorrentes em comparações, desde que haja prova laboratorial pericial irrefutável e ausência de ridicularização!"
    },
    commonTraps: ["Achar que no Brasil é terminantemente proibido comparar produtos na publicidade."],
    tags: ["Linguagens", "Publicidade", "CONAR", "Ética Publicitária", "Legislação", "Consumidor"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-017",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Publicidade e Semiótica",
    subtopic: "A Metalinguagem na Publicidade Contemporânea",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma peça veiculada em jornal de grande circulação, a página é totalmente branca, com exceção de um pequeno texto impresso no centro que diz:\n'Este era para ser um anúncio brilhante sobre como nosso café artesanal desperta a sua criatividade matinal. Mas o redator publicitário ainda não tomou a primeira xícara do dia e não conseguiu pensar em nenhuma frase inteligente. Tome nosso café antes de começar a criar o seu dia.'",
      source: "ANUÁRIO DO CLUBE DE CRIAÇÃO DO BRASIL. Publicidade Autorreflexiva e Metalinguagem. São Paulo, 2023."
    },
    prompt: "A peça constrói sua persuasão a partir do recurso da metalinguagem publicitária, que consiste em",
    options: [
      {
        id: "a",
        text: "denunciar a exploração salarial dos agricultores colhedores de café nas fazendas do interior.",
        isCorrect: false,
        distractorRationale: "O anúncio foca no processo de criação da própria peça publicitária e não na cadeia agrícola do café."
      },
      {
        id: "b",
        text: "utilizar o próprio processo de feitura e as dificuldades de criação do anúncio como argumento central para comprovar a tese da eficácia energética do produto anunciado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A metalinguagem ocorre quando o código explica ou fala sobre si mesmo. Na publicidade contemporânea, o anúncio metalinguístico quebra a ilusão cênica tradicional e expõe os bastidores da própria criação publicitária ('o redator não tomou café e não teve ideias'). Ao admitir com humor que o redator estava travado sem café, o texto prova a tese da marca de forma sutil e genial: sem nosso café, ninguém é criativo; com nosso café, a mente desperta. O leitor diverte-se com a autorreflexividade e assimila o benefício do produto."
      },
      {
        id: "c",
        text: "atestar o analfabetismo funcional crônico de profissionais formados em comunicação social.",
        isCorrect: false,
        distractorRationale: "O bloqueio criativo fictício é uma estratégia cômica requintada e não um atestado de incapacidade do redator."
      },
      {
        id: "d",
        text: "explicar as regras químicas de torrefação dos grãos por meio de equações termodinâmicas.",
        isCorrect: false,
        distractorRationale: "O texto não recorre à química ou termodinâmica, mas à narrativa bem-humorada do bloqueio criativo."
      },
      {
        id: "e",
        text: "convocar os leitores a abandonarem o consumo de bebidas com cafeína por motivos de saúde cardíaca.",
        isCorrect: false,
        distractorRationale: "O anúncio promove exatamente a compra e o consumo do café artesanal anunciado."
      }
    ],
    detailedExplanation: {
      summary: "A metalinguagem publicitária expõe os bastidores do próprio anúncio (o redator sem café) para persuadir com humor sobre a necessidade do café para despertar a mente.",
      stepByStep: [
        "1. Recurso: Metalinguagem (o anúncio que fala sobre como fazer um anúncio).",
        "2. Quebra da quarta parede: o redator assume que não teve criatividade porque faltou café.",
        "3. Conexão lógica com o produto: se o redator precisa do café para criar, você também precisa dele para começar o dia.",
        "4. Resultado estético: surpresa, simpatia do leitor e memorização espontânea da marca."
      ],
      coreConcept: "Metalinguagem na Publicidade: autorreflexividade, humor inteligente e quebra dos clichês de propaganda tradicional.",
      trapWarning: "A metalinguagem no ENEM não é exclusividade de dicionários e gramáticas: ela ocorre no cinema (filme sobre fazer filme), no teatro, na poesia e na publicidade!"
    },
    commonTraps: ["Achar que o anúncio falhou de verdade e que foi publicado sem ideias por engano."],
    tags: ["Linguagens", "Publicidade", "Metalinguagem", "Funções da Linguagem", "Humor", "Criatividade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-018",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Publicidade e Semiótica",
    subtopic: "A Publicidade Infantil e a Vulnerabilidade Cognitiva",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Resolução nº 163 do Conselho Nacional dos Direitos da Criança e do Adolescente (CONANDA) e o Código de Defesa do Consumidor consideram abusiva a publicidade dirigida diretamente à criança que se aproveite de sua deficiência de julgamento e inexperiência infantil. Práticas como o uso de linguagem imperativa infantilizada ('Peça para o seu papai comprar agora!'), personagens infantis associados a alimentos ultraprocessados hipercalóricos e a distribuição de brindes promocionais colecionáveis como iscas de compra são alvos constantes de fiscalização jurídica.",
      source: "MINISTÉRIO DA JUSTIÇA E SEGURANÇA PÚBLICA. Proteção Integral da Criança nas Relações de Consumo. Brasília, 2023."
    },
    prompt: "O enquadramento legal da publicidade voltada ao público infantil como prática abusiva ampara-se no princípio jurídico-pedagógico de que",
    options: [
      {
        id: "a",
        text: "as crianças devem ser educadas precocemente para assumirem a gestão das dívidas financeiras familiares.",
        isCorrect: false,
        distractorRationale: "Crianças não possuem capacidade civil nem jurídica para assumir gestão de dívidas financeiras."
      },
      {
        id: "b",
        text: "o sujeito em estágio de desenvolvimento biopsicossocial não possui ainda o discernimento crítico maduro para decodificar a persuasão comercial, sendo hipervulnerável à manipulação de desejos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na psicologia do desenvolvimento infantil (Jean Piaget, Lev Vygotsky) e no Direito do Consumidor, crianças até cerca de 12 anos não desenvolveram plenamente o pensamento abstrato e o senso crítico necessários para diferenciar a fantasia lúdica da intenção de venda mercantilista. A publicidade dirigida diretamente a elas explora essa inocência, provocando o 'fator importunação' (a criança chora e pressiona os pais até conseguir o produto) e estimulando hábitos alimentares danosos (obesidade infantil) e consumismo precoce, justificando a intervenção protetiva do Estado."
      },
      {
        id: "c",
        text: "os pais não devem ter qualquer autoridade moral sobre as escolhas de consumo de seus filhos.",
        isCorrect: false,
        distractorRationale: "A legislação busca exatamente proteger os pais contra o assédio comercial abusivo direcionado aos filhos."
      },
      {
        id: "d",
        text: "todos os brinquedos plásticos comercializados no país devem ser substituídos por blocos de argila crua.",
        isCorrect: false,
        distractorRationale: "A regulação foca na mensagem persuasiva abusiva e não no banimento de materiais industriais de brinquedos."
      },
      {
        id: "e",
        text: "a transmissão de desenhos animados deve ser proibida em todas as emissoras públicas de televisão.",
        isCorrect: false,
        distractorRationale: "A legislação proíbe o assédio comercial mercantilista abusivo nos intervalos, não os conteúdos culturais infantis saudáveis."
      }
    ],
    detailedExplanation: {
      summary: "A publicidade infantil é considerada abusiva porque a criança é hipervulnerável: não tem maturidade cognitiva para diferenciar fantasia de manipulação comercial.",
      stepByStep: [
        "1. Vulnerabilidade cognitiva: crianças não compreendem a intenção oculta de lucro por trás de personagens fofos.",
        "2. Abuso do 'fator importunação': o anúncio incentiva a criança a constranger e pressionar os pais para comprar.",
        "3. Impactos na saúde: estímulo ao consumo desenfreado de produtos ultraprocessados açucarados (epidemia de obesidade infantil).",
        "4. Marco regulatório: CDC (Art. 37) e Resolução 163 do CONANDA vedam apelos mercantis diretos à infância."
      ],
      coreConcept: "Regulação da Publicidade Infantil: hipervulnerabilidade da criança, bioética e proteção dos direitos fundamentais.",
      trapWarning: "Tema de altíssima relevância: a publicidade infantil já foi tema oficial da Redação do ENEM ('A publicidade infantil em questão no Brasil') e continua recorrente na prova de Linguagens!"
    },
    commonTraps: ["Achar que proibir publicidade infantil fere a liberdade de expressão comercial legítima de produtos adultos."],
    tags: ["Linguagens", "Publicidade", "Publicidade Infantil", "CONANDA", "Consumismo", "Ética"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-019",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Publicidade e Semiótica",
    subtopic: "A Linguagem de Memes na Publicidade Institucional",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na divulgação do cronograma de inscrições para o ENEM, o perfil oficial do Ministério da Educação em uma rede social publicou a imagem de um gato sonolento olhando espantado para o relógio digital, acompanhada da legenda em linguagem coloquial da internet: 'Aquele momento em que você percebe que hoje é o ÚLTIMO DIA e ainda não gerou a Guia de Recolhimento da União! Não mosca, estudante! Corre lá na Página do Participante agora!'",
      source: "INSTITUTO NACIONAL DE ESTUDOS E PESQUISAS EDUCACIONAIS ANÍSIO TEIXEIRA (INEP). Redes Oficiais de Informação ao Estudante. Brasília, 2023."
    },
    prompt: "A apropriação da estética e da linguagem de 'memes' das redes digitais por órgãos governamentais oficiais representa uma estratégia discursiva que busca",
    options: [
      {
        id: "a",
        text: "rebaixar a solenidade dos atos administrativos para demonstrar descompromisso com os prazos do exame.",
        isCorrect: false,
        distractorRationale: "O objetivo é o oposto: garantir que ninguém perca o prazo por distração ou desinformação."
      },
      {
        id: "b",
        text: "aproximar a instituição pública da linguagem do público jovem, aumentando o engajamento e a eficácia da comunicação sobre prazos decisivos do exame.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A comunicação pública contemporânea reconhece que a norma padrão excessivamente solene e burocrática dos diários oficiais gera distanciamento e baixa leitura entre adolescentes e jovens estudantes. Ao adotar a gramática visual da cultura da internet (memes, humor empático, gírias como 'não mosca', imagens de animais e tom informal e caloroso), o órgão encurta a distância comunicativa, viraliza o alerta nas redes e garante que a informação cívica essencial atinja seu público-alvo com máxima eficácia."
      },
      {
        id: "c",
        text: "substituir a realização de vestibulares pela premiação de criadores de conteúdo humorístico.",
        isCorrect: false,
        distractorRationale: "A postagem apenas lembra os prazos do próprio exame nacional oficial."
      },
      {
        id: "d",
        text: "proibir o uso de internet formal nos computadores de escolas públicas estaduais.",
        isCorrect: false,
        distractorRationale: "A estratégia utiliza exatamente as redes de internet como canal central de difusão de cidadania."
      },
      {
        id: "e",
        text: "anular as taxas de inscrição de todos os candidatos sem necessidade de comprovação de carência.",
        isCorrect: false,
        distractorRationale: "A isenção segue regras normativas próprias em edital e não é alterada pela linguagem informal da postagem."
      }
    ],
    detailedExplanation: {
      summary: "Órgãos públicos usam memes e linguagem jovem na internet para quebrar o distanciamento burocrático e garantir que os estudantes prestem atenção aos prazos vitais.",
      stepByStep: [
        "1. Desafio da comunicação pública: jovens ignoram editais burocráticos longos.",
        "2. Adaptação ao meio: redes sociais operam com humor rápido, empatia e memes visuais.",
        "3. Linguagem híbrida: imagem cômica do gato assustado + gíria coloquial ('Não mosca') + serviço público vital ('Último dia da taxa').",
        "4. Resultado: altíssimo engajamento, compartilhamento espontâneo e redução do número de estudantes desavisados."
      ],
      coreConcept: "Comunicação Pública Digital e Variação Diafásica: adequação do registro institucional ao suporte e ao público-alvo jovem.",
      trapWarning: "Usar linguagem informal em redes sociais governamentais não é 'falha de português'; é adequação discursiva planejada para atingir o objetivo comunicativo!"
    },
    commonTraps: ["Considerar o uso de memes por órgãos públicos um erro de postura e ignorar sua eficácia comunicativa."],
    tags: ["Linguagens", "Publicidade", "Comunicação Pública", "Memes", "Redes Sociais", "ENEM", "Adequação Linguística"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-020",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Publicidade e Semiótica",
    subtopic: "A Ilusão de Escassez e os Gatilhos de Vendas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em sites de comércio eletrônico durante datas promocionais, anúncios utilizam recursos interativos dinâmicos com contadores regressivos piscando na tela: 'Restam apenas 3 unidades com este preço! Oferta válida pelos próximos 4 minutos e 12 segundos! 48 pessoas estão olhando este produto agora mesmo.'",
      source: "OBSERVATÓRIO DE PADRÕES ESCUROS NA WEB (DARK PATTERNS). Mecanismos de Coerção Psicológica no E-Commerce. Campinas, 2023."
    },
    prompt: "As estratégias digitais descritas fundamentam-se em gatilhos comportamentais de persuasão (design persuasivo) cujo propósito psicológico é",
    options: [
      {
        id: "a",
        text: "estimular a reflexão crítica serena e a pesquisa de preços comparada ao longo de várias semanas.",
        isCorrect: false,
        distractorRationale: "O design persuasivo busca exatamente impedir que o consumidor pare para pesquisar ou refletir com calma."
      },
      {
        id: "b",
        text: "induzir um estado de urgência e medo de exclusão social (FOMO), precipitando compras impulsivas sem análise racional da real necessidade do gasto.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na economia comportamental e no design de interfaces de comércio eletrônico, relógios regressivos, alertas de estoque minúsculo ('só restam 3') e notificações de concorrência simultânea ('48 pessoas estão olhando') atuam como gatilhos de escassez e urgência fabricada. O mecanismo explora o medo primitivo da perda e da exclusão (FOMO - Fear of Missing Out), sequestrando a reflexão racional do consumidor e forçando-o a tomar uma decisão impulsiva de compra sob pressão psicológica artificial antes que a suposta oportunidade desapareça."
      },
      {
        id: "c",
        text: "garantir que todos os produtos com defeito de fábrica sejam devolvidos antes do prazo de entrega.",
        isCorrect: false,
        distractorRationale: "Os contadores visam acelerar a compra inicial e não regulam devoluções de assistência técnica."
      },
      {
        id: "d",
        text: "ensinar fundamentos de cronometria atômica e física relativística aos usuários da internet.",
        isCorrect: false,
        distractorRationale: "O relógio regressivo é uma ferramenta comercial psicológica, sem objetivos didáticos de física."
      },
      {
        id: "e",
        text: "bloquear definitivamente compras fraudulentas de cartões clonados no comércio varejista.",
        isCorrect: false,
        distractorRationale: "A segurança contra fraudes é realizada por intermediadores de pagamento em segundo plano, não por contadores visuais de promoção."
      }
    ],
    detailedExplanation: {
      summary: "Gatilhos de escassez e urgência (contadores regressivos e alertas de estoque baixo) pressionam o consumidor psicologicamente a comprar por impulso.",
      stepByStep: [
        "1. Gatilho de escassez: 'Restam só 3 unidades' ⟶ gera sensação de raridade e valor exagerado.",
        "2. Gatilho de urgência: contador regressivo de minutos ⟶ desativa a ponderação racional.",
        "3. Prova social competitiva: '48 pessoas vendo agora' ⟶ medo de que outro leve o que você deseja.",
        "4. Crítica do consumidor: muitas vezes a escassez é falsa (dark pattern), configurando prática abusiva de comércio."
      ],
      coreConcept: "Design persuasivo e Economia Comportamental: gatilhos de urgência, escassez artificial e manipulação da tomada de decisão.",
      trapWarning: "Esteja atento: o ENEM cobra leitura crítica sobre como algoritmos e interfaces digitais induzem o cidadão ao endividamento precoce!"
    },
    commonTraps: ["Acreditar que os contadores de tempo e estoques baixos são sempre reais e espontâneos."],
    tags: ["Linguagens", "Publicidade", "Economia Comportamental", "Gatilhos Mentais", "Comércio Digital", "Consumo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-021",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Publicidade e Semiótica",
    subtopic: "A Retórica da Imagem e a Construção do Desejo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um comercial de automóvel utilitário esportivo (SUV), o veículo é filmado em alta definição atravessando correntezas de rios selvagens, subindo montanhas rochosas isoladas e rasgando dunas inóspitas ao som de uma trilha sonora épica de percussão. No entanto, pesquisas de mercado revelam que mais de 98% dos compradores utilizam o automóvel exclusivamente para enfrentar congestionamentos lentos de cidades e levar os filhos à escola.",
      source: "LABORATÓRIO DE ESTUDOS DO IMAGINÁRIO E CONSUMO. O Mito da Aventura no Automobilismo Urbano. Porto Alegre, 2023."
    },
    prompt: "O descompasso entre a narrativa épica da propaganda e o uso real e prosaico do produto no cotidiano evidencia que a publicidade contemporânea vende primariamente",
    options: [
      {
        id: "a",
        text: "o valor mecânico de uso estrito dos eixos de transmissão de potência da fábrica.",
        isCorrect: false,
        distractorRationale: "A propaganda quase não detalha especificações mecânicas de fábrica, focando em imagens cinematográficas de aventura."
      },
      {
        id: "b",
        text: "um estilo de vida simbólico, conferindo ao consumidor a promessa imaginária de liberdade, aventura e poder que compensa a rotina domesticada e confinada da vida urbana.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Como demonstrado pelos filósofos Jean Baudrillard e Guy Debord, a publicidade na sociedade de consumo não vende meros objetos físicos por seu valor de uso funcional; ela comercializa signos, mitos e subjetividades (valor-signo). Ao comprar o SUV que atravessa rios selvagens no comercial, o motorista preso no trânsito de São Paulo não compra apenas chapas de metal e quatro rodas: ele compra a fantasia de ser um desbravador aventureiro e indomável, sublimando a frustração da vida urbana metropolitana monótona."
      },
      {
        id: "c",
        text: "um compromisso real com a preservação intacta dos ecossistemas de montanhas selvagens.",
        isCorrect: false,
        distractorRationale: "Veículos pesados a combustão atravessando rios causam impacto ecológico em ecossistemas fluviais frágeis."
      },
      {
        id: "d",
        text: "a garantia jurídica de que os compradores nunca enfrentarão congestionamentos nas capitais.",
        isCorrect: false,
        distractorRationale: "Nenhum carro consegue evitar as filas do trânsito urbano congestionado."
      },
      {
        id: "e",
        text: "a extinção imediata do transporte coletivo metroviário e das linhas de ônibus municipais.",
        isCorrect: false,
        distractorRationale: "A propaganda visa promover as vendas da montadora privada e não planejar o sistema de transporte coletivo metropolitano."
      }
    ],
    detailedExplanation: {
      summary: "A publicidade vende valor-signo e fantasias identitárias: o carro não é vendido como meio de transporte, mas como promessa imaginária de liberdade e poder contra a rotina monótona.",
      stepByStep: [
        "1. Valor de uso: levar crianças à escola e enfrentar trânsito urbano engarrafado.",
        "2. Valor de troca: preço monetário do automóvel.",
        "3. Valor de signo (Baudrillard): a aura de aventura, virilidade, liberdade selvagem e prestígio social.",
        "4. Mecanismo persuasivo: o consumidor compra a imagem idealizada de si mesmo refletida no produto anunciado."
      ],
      coreConcept: "Sociedade de Consumo (Baudrillard e Debord): valor de signo, fetichismo da mercadoria e imaginário publicitário.",
      trapWarning: "Lembre-se: no ENEM, publicidade e consumo são analisados com frequência pela sociologia e pela semiótica crítica!"
    },
    commonTraps: ["Achar que as pessoas compram produtos unicamente pela utilidade prática das suas peças."],
    tags: ["Linguagens", "Publicidade", "Baudrillard", "Valor de Signo", "Sociedade de Consumo", "Semiótica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-022",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Publicidade e Semiótica",
    subtopic: "A Linguagem Não-Verbal em Cartazes de Cinema",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No cartaz de lançamento de um filme dramático biográfico sobre uma cientista que enfrentou preconceitos históricos, a protagonista é retratada no terço inferior da imagem, vista de costas em ângulo contra-plongée (câmera posicionada de baixo para cima). Diante dela, ergue-se uma escadaria de mármore gigantesca que sobe até um tribunal imponente na penumbra. Um único facho de luz diagonal azulada incide sobre as costas da personagem, iluminando o caderno de anotações que ela aperta contra o peito.",
      source: "REVISTA DE CINEMA E COMPOSIÇÃO VISUAL. A Arquitetura do Enquadramento nos Cartazes de Cinema. Belo Horizonte, 2023."
    },
    prompt: "A escolha do ângulo em contra-plongée, da escadaria desmedida e do foco de luz diagonal constitui uma construção semiótica que transmite visualmente a",
    options: [
      {
        id: "a",
        text: "ausência de qualquer obstáculo no caminho da cientista rumo ao reconhecimento pacífico imediato.",
        isCorrect: false,
        distractorRationale: "A escadaria colossal na penumbra simboliza enormes dificuldades institucionais a serem vencidas."
      },
      {
        id: "b",
        text: "magnitude avassaladora das barreiras patriarcais e institucionais a serem enfrentadas, contrastada com a bravura solitária e a resiliência da protagonista sustentada pelo conhecimento científico.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A composição visual expressa com riqueza simbólica a narrativa dramática: a escadaria monumental e o tribunal gigantesco em plano sombrio materializam o peso esmagador das estruturas machistas, corporativas e institucionais que se colocam contra ela. O ângulo contra-plongée e a postura firme da protagonista encarando o abismo, combinados com o facho de luz iluminando seu caderno de anotações científicas, simbolizam a coragem moral individual, a lucidez da razão e a resistência inabalável da mulher cientista diante da adversidade."
      },
      {
        id: "c",
        text: "inaptidão da pesquisadora para o trabalho de campo em laboratórios modernos.",
        isCorrect: false,
        distractorRationale: "A cena celebra a coragem e a determinação da personagem, e não incompetência profissional."
      },
      {
        id: "d",
        text: "necessidade urgente de reformas de acessibilidade com rampas na escadaria do tribunal.",
        isCorrect: false,
        distractorRationale: "A escadaria é uma metáfora dramática da subida árdua da vida, não uma cobrança de engenharia civil predial."
      },
      {
        id: "e",
        text: "condenação definitiva da cientista por crimes contra o patrimônio histórico nacional.",
        isCorrect: false,
        distractorRationale: "O facho de luz azulada confere dignidade heroica e nobreza à cientista, refutando a ideia de vilania culpada."
      }
    ],
    detailedExplanation: {
      summary: "A escala desmedida da escadaria contra a figura solitária iluminada simboliza o embate épico entre a resiliência da cientista e o peso das instituições patriarcais.",
      stepByStep: [
        "1. Elemento de opressão: escadaria monumental na penumbra ⟶ a imensidão das barreiras institucionais machistas.",
        "2. Ângulo contra-plongée: de baixo para cima ⟶ realça a altura intimidante do tribunal.",
        "3. Facho de luz sobre a protagonista e seu caderno: clareza, razão, nobreza ética e verdade científica.",
        "4. Postura de costas decidida: determinação de subir os degraus e enfrentar o julgamento histórico."
      ],
      coreConcept: "Composição visual, enquadramento cinematográfico e semiótica da luz na construção de personagens em cartazes.",
      trapWarning: "Cuidado: plongée (olhar de cima para baixo) apequena e fragiliza o personagem; contra-plongée (olhar de baixo para cima) engrandece a imponência do que está acima!"
    },
    commonTraps: ["Confundir plongée (câmera alta apequenando) com contra-plongée (câmera baixa engrandecendo a escala)."],
    tags: ["Linguagens", "Cartaz de Cinema", "Semiótica", "Enquadramento", "Mulheres na Ciência", "Composição Visual"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-023",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Publicidade e Semiótica",
    subtopic: "A Publicidade de Utilidade Pública contra o Desperdício de Água",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha de utilidade pública veiculada durante uma grave estiagem nos reservatórios urbanos, a imagem exibe uma torneira pingando em câmera lenta. Cada gota que cai, em vez de se espalhar na pia, transforma-se em uma moeda de um real que escorrega pelo ralo e some na tubulação escura. Ao lado, o anúncio estampa o seguinte texto: 'Torneira gotejando não é apenas água que se perde: é o seu dinheiro indo pelo ralo e a seca batendo à sua porta. Feche a torneira enquanto escova os dentes e ensaboa a louça. Economizar água é inteligência cidadã.'",
      source: "COMPANHIA DE SANEAMENTO BÁSICO. Campanha Uso Racional da Água: Cada Gota Conta. São Paulo, 2023."
    },
    prompt: "Para convencer os munícipes a mudarem hábitos cotidianos de consumo hídrico, a campanha adota uma estratégia argumentativa que combina",
    options: [
      {
        id: "a",
        text: "o apelo ao interesse financeiro direto do consumidor (a água desperdiçada vira dinheiro perdido) com a responsabilidade cívica coletiva perante a crise ecológica.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A peça utiliza uma dupla alavanca persuasiva extremamente eficaz: 1) Apelo pragmático-econômico individual: a metáfora visual da gota virando moeda que vai para o ralo demonstra que o gotejamento gera prejuízo financeiro tangível no bolso da própria família na conta do final do mês; 2) Apelo ético-cívico coletivo: alerta para a seca que bate à porta de toda a comunidade, definindo a conservação não como mera mesquinharia, mas como 'inteligência cidadã' solidária."
      },
      {
        id: "b",
        text: "a intimação policial autoritária com aplicação de multas rescisórias imediatas a quem lavar louça.",
        isCorrect: false,
        distractorRationale: "A campanha foca na conscientização voluntária e economia prática, sem ameaças policiais."
      },
      {
        id: "c",
        text: "a defesa da desativação completa de todas as redes de abastecimento público de água nas cidades.",
        isCorrect: false,
        distractorRationale: "A companhia de saneamento busca o uso racional sustentável das redes existentes e não o corte permanente."
      },
      {
        id: "d",
        text: "o incentivo à substituição de moedas metálicas por cédulas de papel no comércio bancário.",
        isCorrect: false,
        distractorRationale: "A moeda é uma metáfora visual de valor financeiro desperdiçado, sem relação com política monetária de cédulas."
      },
      {
        id: "e",
        text: "o ataque irônico a moradores de áreas rurais que dependem de cisternas e poços artesianos.",
        isCorrect: false,
        distractorRationale: "O anúncio é voltado ao combate ao desperdício doméstico metropolitano, sem ataques a populações rurais."
      }
    ],
    detailedExplanation: {
      summary: "A campanha alia o impacto financeiro no bolso (gota virando moeda no ralo) à responsabilidade ética cidadã (preservação coletiva contra a seca).",
      stepByStep: [
        "1. Metáfora visual: água gotejando = moedas escorrendo pelo ralo.",
        "2. Argumento individual: desperdício encarece a conta familiar mensal.",
        "3. Argumento coletivo: estiagem e reservatórios baixos afetam a todos.",
        "4. Slogan: 'Economizar água é inteligência cidadã' confere status positivo e nobre a quem adota o hábito saudável."
      ],
      coreConcept: "Estratégias de argumentação mista em campanhas públicas: união do interesse individual pragmático com o valor social solidário.",
      trapWarning: "Muitas campanhas sociais usam o bolso como argumento de convencimento porque o custo financeiro imediato atinge o público mais rápido do que um apelo ambiental abstrato distante!"
    },
    commonTraps: ["Achar que a campanha fala apenas sobre dinheiro e esquecer o apelo ambiental e comunitário."],
    tags: ["Linguagens", "Publicidade", "Uso Consciente da Água", "Persuasão", "Metáfora Visual", "Cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-024",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Publicidade e Semiótica",
    subtopic: "A Ambiguidade Estratégica na Linguagem Publicitária",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha de incentivo à adoção de animais abandonados promovida por um centro de zoonoses municipal, a imagem mostra um cachorro vira-lata sentado na calçada olhando com ternura para a frente. O título principal do cartaz estampa em letras grandes:\n'Ele não tem pedigree, mas tem pedigree de amor.'\nLogo abaixo, o subtítulo arremata:\n'Amor de raça é amor sem raça definida. Adote um amigo de verdade.'",
      source: "CENTRO DE CONTROLE DE ZOONOSES E BEM-ESTAR ANIMAL. Campanha Adote um Vira-Lata: Amor Sem Rótulos. Curitiba, 2023."
    },
    prompt: "A expressividade do texto publicitário reside na ressignificação polissêmica dos termos 'pedigree' e 'raça', que passam a designar",
    options: [
      {
        id: "a",
        text: "o valor financeiro exorbitante cobrado por canis comerciais especializados em animais exóticos de alto custo.",
        isCorrect: false,
        distractorRationale: "O texto combate exatamente o elitismo da compra comercial de animais de raça pura em prol da adoção voluntária."
      },
      {
        id: "b",
        text: "não mais a linhagem biológica pura certificada em cartórios caninos, mas sim a nobreza de caráter, a lealdade incondicional e o afeto genuíno do animal sem raça definida (vira-lata).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A peça desconstrói o preconceito contra animais mestiços e vira-latas (SRD - Sem Raça Definida) ressignificando semanticamente os conceitos elitistas de 'pedigree' e 'ter raça'. O pedigree tradicional é um certificado zootécnico de pureza genética mercantilizável; a campanha o desloca para o campo afetivo ('pedigree de amor'). Da mesma forma, 'amor de raça' ganha a conotação coloquial de coragem, força, generosidade e lealdade sincera ('ter garra/raça'), valorizando o animal adotado perante a sociedade."
      },
      {
        id: "c",
        text: "uma exigência burocrática legal indispensável para que qualquer cidadão possa adotar um animal de rua.",
        isCorrect: false,
        distractorRationale: "O pedigree não é exigido para adoção pública; a campanha defende a adoção irrestrita de animais sem pedigree."
      },
      {
        id: "d",
        text: "a superioridade moral dos cães importados de países europeus sobre a fauna brasileira nativa.",
        isCorrect: false,
        distractorRationale: "O cartaz valoriza os vira-latas acolhidos nos abrigos nacionais contra o modismo de compras caras."
      },
      {
        id: "e",
        text: "uma receita culinária balanceada recomendada por veterinários para animais idosos.",
        isCorrect: false,
        distractorRationale: "O anúncio é de sensibilização para acolhimento de animais e não de venda de rações alimentares."
      }
    ],
    detailedExplanation: {
      summary: "A campanha subverte termos zootécnicos elitistas ('pedigree' e 'raça'), transformando-os em metáforas de lealdade, afeto puro e acolhimento solidário.",
      stepByStep: [
        "1. Significado original de Pedigree: certificado de pureza de linhagem para comercialização com lucro.",
        "2. Ressignificação metafórica: 'pedigree de amor' = qualidade máxima de afeto e gratidão.",
        "3. Polissemia de 'raça': raça biológica vs. raça como fibra moral, garra e lealdade ('amor de raça').",
        "4. Resultado persuasivo: desconstrução do estigma contra vira-latas e incentivo à adoção responsável."
      ],
      coreConcept: "Polissemia e ressignificação de conceitos na publicidade: subversão de jargões mercadológicos para causas cívicas.",
      trapWarning: "No ENEM, atente para trocadilhos que invertem o sentido de palavras do cotidiano para criar empatia social!"
    },
    commonTraps: ["Entender 'pedigree' apenas no sentido zootécnico literal sem captar a metáfora afetiva."],
    tags: ["Linguagens", "Publicidade", "Adoção de Animais", "Polissemia", "Metáfora", "Bem-Estar Animal"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PUB-025",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Publicidade e Semiótica",
    subtopic: "A Ética da Privacidade e a Publicidade Hipersegmentada",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na era das plataformas digitais e do capitalismo de vigilância (Shoshana Zuboff), os dados comportamentais gerados por curtidas, buscas na web, geolocalização e tempo de visualização de tela são processados por inteligência artificial para construir perfis psicológicos preditivos ultraprecisos dos usuários. Esses perfis alimentam a publicidade hipersegmentada (*microtargeting*), capaz de disparar gatilhos emocionais customizados em tempo real.",
      source: "AUTORIDADE NACIONAL DE PROTEÇÃO DE DADOS (ANPD). Guia Orientativo de Proteção de Dados e Publicidade Comportamental. Brasília, 2023."
    },
    prompt: "Sob a perspectiva ética e dos direitos fundamentais da cidadania, a principal preocupação levantada pela expansão desregulada da publicidade comportamental hipersegmentada reside no risco de",
    options: [
      {
        id: "a",
        text: "redução do tempo de vida útil dos aparelhos celulares devido ao calor de processamento.",
        isCorrect: false,
        distractorRationale: "O problema central é a violação de privacidade e manipulação psicológica, não aquecimento de circuitos de bateria."
      },
      {
        id: "b",
        text: "manipulação algorítmica imperceptível de vulnerabilidades emocionais e psicológicas dos cidadãos, enfraquecendo a autonomia de escolha nas decisões de consumo e no debate político democrático.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A publicidade comportamental hipersegmentada não se limita a oferecer produtos convenientes; ela monitora padrões ocultos de ansiedade, insegurança, hábitos e preferências políticas do indivíduo (capitalismo de vigilância). Ao explorar fraquezas emocionais mapeadas em tempo real com anúncios personalizados invisíveis para o restante da sociedade, essa prática atenta contra a Lei Geral de Proteção de Dados (LGPD), compromete o livre-arbítrio do consumidor e ameaça a lisura de processos eleitorais democráticos por meio de bolhas de desinformação sob medida."
      },
      {
        id: "c",
        text: "desaparecimento total da linguagem escrita em favor de sinais de fumaça pré-históricos.",
        isCorrect: false,
        distractorRationale: "A era digital hiperacelerou a produção de textos e algoritmos computacionais."
      },
      {
        id: "d",
        text: "queda generalizada nas vendas de produtos e quebra de todas as redes varejistas do mundo.",
        isCorrect: false,
        distractorRationale: "A publicidade direcionada aumenta exponencialmente as vendas e o lucro das grandes corporações tecnológicas."
      },
      {
        id: "e",
        text: "obrigação de todos os cidadãos em programarem seus próprios navegadores de internet em código binário.",
        isCorrect: false,
        distractorRationale: "A coleta de dados é automatizada e invisível para o usuário comum leigo."
      }
    ],
    detailedExplanation: {
      summary: "A publicidade hipersegmentada rastreia dados íntimos para manipular vulnerabilidades emocionais, comprometendo a autonomia do consumidor e a democracia.",
      stepByStep: [
        "1. Rastreamento massivo: cookies, buscas, curtidas e geolocalização coletam a pegada digital do usuário.",
        "2. Perfilamento algorítmico: identificação de momentos de carência, ansiedade, impulsividade ou viés político.",
        "3. Disparo sob medida: anúncios personalizados que atingem os pontos fracos emocionais do sujeito.",
        "4. Dilema ético: perda da autonomia de decisão, bolhas de filtro ideológicas e violação da privacidade (LGPD)."
      ],
      coreConcept: "Capitalismo de vigilância (Zuboff), publicidade comportamental e proteção de dados pessoais (LGPD).",
      trapWarning: "A LGPD e o debate sobre privacidade digital e algoritmos são pautas de primeiríssima importância no ENEM, servindo para questões de Linguagens e temas de Redação!"
    },
    commonTraps: ["Achar que a coleta de dados de navegação serve apenas para 'ajudar' o consumidor com anúncios úteis."],
    tags: ["Linguagens", "Publicidade", "Algoritmos", "LGPD", "Capitalismo de Vigilância", "Privacidade", "Cidadania Digital"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
