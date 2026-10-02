export const QUESTIONS_ECOLOGIA = [
  {
    id: "NAT-ECO-001",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Ecologia",
    subtopic: "Biomas Brasileiros",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O Encontro das Águas, em Manaus, é um fenômeno natural onde as águas escuras do Rio Negro e as águas barrentas do Rio Solimões correm lado a lado sem se misturar por quilômetros. Essa separação é mantida por diferenças de temperatura, densidade e velocidade da correnteza. O Rio Negro é rico em ácidos húmicos provenientes da decomposição de matéria orgânica, enquanto o Solimões carrega grande quantidade de sedimentos dos Andes.",
      source: "Inspirada em ENEM"
    },
    prompt: "As características descritas das águas dos rios Negro e Solimões afetam diretamente a produtividade primária e a biodiversidade local. A menor produtividade primária das águas do Rio Negro, comparada à do Rio Solimões, é explicada principalmente pela:",
    options: [
      { id: "a", text: "alta concentração de sedimentos andinos que bloqueia a luz.", isCorrect: false, distractorRationale: "O Rio Solimões, e não o Negro, tem alta concentração de sedimentos andinos." },
      { id: "b", text: "baixa penetração de luz devido à coloração escura, limitando a fotossíntese.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "maior temperatura das águas do Rio Negro, que desnatura enzimas fotossintéticas.", isCorrect: false, distractorRationale: "A diferença de temperatura não é suficiente para desnaturar enzimas, e a temperatura não é o fator limitante primário da fotossíntese aqui." },
      { id: "d", text: "presença de ácidos húmicos que atuam como fertilizantes inibitórios.", isCorrect: false, distractorRationale: "Ácidos húmicos não são fertilizantes inibitórios, apenas alteram o pH e a cor." },
      { id: "e", text: "maior velocidade da correnteza, que impede a fixação do fitoplâncton.", isCorrect: false, distractorRationale: "O Rio Negro tem menor velocidade que o Solimões." }
    ],
    detailedExplanation: {
      summary: "A coloração escura do Rio Negro impede a penetração de luz, limitando a fotossíntese do fitoplâncton.",
      stepByStep: [
        "Passo 1: Identificar a base da cadeia alimentar aquática (fitoplâncton), que depende de luz para a fotossíntese (produtividade primária).",
        "Passo 2: Relacionar a cor escura do Rio Negro, devido aos ácidos húmicos, com a atenuação da luz na coluna d'água.",
        "Passo 3: Concluir que menos luz significa menos fotossíntese, resultando em menor produtividade primária em comparação com as águas do Solimões."
      ],
      coreConcept: "Produtividade Primária e Fatores Limitantes na Fotossíntese",
      trapWarning: "Confundir as características dos rios (ex: sedimentos do Solimões vs cor do Negro)."
    },
    commonTraps: ["Confusão de rios", "Ignorar fator limitante da luz"],
    tags: ["biomas", "amazonia", "hidrografia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-002",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Ecologia",
    subtopic: "Poluição Ambiental",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Praia de Camburi, em Vitória, frequentemente monitora a qualidade de suas águas devido a despejos irregulares de esgoto doméstico e efluentes industriais, incluindo o problema do pó preto (material particulado). O esgoto não tratado despejado no mar altera significativamente a dinâmica ecológica local.",
      source: "Original"
    },
    prompt: "O despejo contínuo e excessivo de esgoto doméstico nas águas costeiras de Camburi pode desencadear um processo ecológico conhecido como eutrofização. A consequência direta e mais crítica desse processo para a fauna aquática local é a:",
    options: [
      { id: "a", text: "mortalidade de peixes devido à redução drástica do oxigênio dissolvido na água.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "bioacumulação de metais pesados nos tecidos dos predadores de topo.", isCorrect: false, distractorRationale: "Bioacumulação/Magnificação trófica ocorre com poluentes persistentes (metais pesados, agrotóxicos), não necessariamente pelo esgoto doméstico, rico em matéria orgânica." },
      { id: "c", text: "proliferação excessiva de corais devido ao excesso de nutrientes.", isCorrect: false, distractorRationale: "O excesso de nutrientes (eutrofização) prejudica os corais ao promover crescimento de algas que os sufocam." },
      { id: "d", text: "diminuição da temperatura da água, alterando os ciclos reprodutivos.", isCorrect: false, distractorRationale: "O despejo de esgoto não diminui significativamente a temperatura do mar aberto." },
      { id: "e", text: "redução do material particulado (pó preto) na coluna d'água.", isCorrect: false, distractorRationale: "O esgoto aumenta o material particulado (matéria orgânica), não o reduz." }
    ],
    detailedExplanation: {
      summary: "A eutrofização causa a proliferação de bactérias aeróbias que consomem o oxigênio da água para decompor a matéria orgânica, matando a fauna aquática por asfixia.",
      stepByStep: [
        "Passo 1: Entender que o esgoto doméstico é rico em matéria orgânica e nutrientes (nitrogênio e fósforo).",
        "Passo 2: O excesso de nutrientes causa a proliferação de algas (floração) na superfície, bloqueando a luz.",
        "Passo 3: A morte dessas algas e a presença de matéria orgânica do esgoto promovem a explosão populacional de bactérias decompositoras aeróbias.",
        "Passo 4: As bactérias consomem quase todo o oxigênio dissolvido, levando a fauna aquática à morte por asfixia."
      ],
      coreConcept: "Eutrofização e Demanda Bioquímica de Oxigênio (DBO)",
      trapWarning: "Confundir eutrofização (excesso de nutrientes/matéria orgânica) com magnificação trófica (acúmulo de toxinas)."
    },
    commonTraps: ["Confundir com magnificação trófica", "Achar que mais nutrientes sempre = vida saudável"],
    tags: ["poluicao", "eutrofizacao", "impacto ambiental"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-003",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Ecologia",
    subtopic: "Cadeias Alimentares",
    difficulty: 4,
    estimatedTimeSeconds: 210,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Próximo ao Farol da Barra, em Salvador, um estudo analisou a concentração de um poluente persistente (um tipo de microplástico contaminado) na seguinte cadeia alimentar marinha: Fitoplâncton → Zooplâncton → Sardinha → Atum → Tubarão. A transferência de energia entre os níveis tróficos segue a regra dos 10%, mas os poluentes persistentes comportam-se de forma diferente.",
      source: "Inspirada em ENEM"
    },
    prompt: "Considerando a dinâmica de energia e de poluentes persistentes nas cadeias alimentares, se a população de fitoplâncton armazenar 10.000 kcal de energia, e sabendo que ocorre o fenômeno de magnificação trófica com o microplástico, a quantidade de energia disponível para os tubarões e a concentração do poluente em seus tecidos serão, respectivamente:",
    options: [
      { id: "a", text: "1 kcal; menor que no fitoplâncton.", isCorrect: false, distractorRationale: "A energia está correta (10.000 -> 1.000 -> 100 -> 10 -> 1), mas a concentração do poluente será a maior, e não a menor." },
      { id: "b", text: "10 kcal; igual à do fitoplâncton.", isCorrect: false, distractorRationale: "Erro no cálculo dos níveis tróficos (seria 1 kcal) e na dinâmica do poluente, que se acumula." },
      { id: "c", text: "1 kcal; a maior de toda a cadeia alimentar.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "0,1 kcal; a maior de toda a cadeia alimentar.", isCorrect: false, distractorRationale: "Erro na contagem dos níveis: Fitoplâncton(10k) -> Zooplâncton(1k) -> Sardinha(100) -> Atum(10) -> Tubarão(1)." },
      { id: "e", text: "1.000 kcal; menor que na sardinha.", isCorrect: false, distractorRationale: "O tubarão recebe a menor energia de todos e tem a maior concentração de poluente." }
    ],
    detailedExplanation: {
      summary: "A energia diminui a cada nível trófico (cerca de 10% é repassado), enquanto poluentes persistentes se acumulam (magnificação trófica), sendo maiores nos predadores de topo.",
      stepByStep: [
        "Passo 1: Calcular a energia: Fitoplâncton (10.000 kcal) -> Zooplâncton (1.000 kcal) -> Sardinha (100 kcal) -> Atum (10 kcal) -> Tubarão (1 kcal).",
        "Passo 2: Poluentes não biodegradáveis acumulam-se progressivamente ao longo da cadeia (magnificação trófica / bioacumulação). O topo da cadeia (Tubarão) tem a maior concentração."
      ],
      coreConcept: "Fluxo de Energia e Magnificação Trófica",
      trapWarning: "Cuidado: a energia flui de forma decrescente unidirecional, enquanto os poluentes persistentes acumulam-se de forma crescente."
    },
    commonTraps: ["Errar o cálculo dos 10%", "Confundir o fluxo de energia com acúmulo de matéria poluente"],
    tags: ["cadeia alimentar", "magnificacao trofica", "energia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-004",
    area: "natureza",
    competence: 6,
    skill: 23,
    topic: "Ecologia",
    subtopic: "Desmatamento e Mudanças Climáticas",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Torre ATTO (Amazon Tall Tower Observatory), construída no meio da floresta amazônica a 150 km de Manaus, monitora as interações entre a floresta e a atmosfera. Seus sensores medem a concentração de gases de efeito estufa e a emissão de compostos orgânicos voláteis (VOCs). Observa-se que o avanço do desmatamento na região altera as chuvas locais e até mesmo de outras regiões do país, através dos chamados 'rios voadores'.",
      source: "Original"
    },
    prompt: "A redução das chuvas nas regiões Centro-Oeste e Sudeste do Brasil, causada pelo desmatamento na Amazônia, está diretamente relacionada ao comprometimento de qual processo ecofisiológico e físico, respectivamente?",
    options: [
      { id: "a", text: "Evapotranspiração das árvores e circulação de massas de ar.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Gutação foliar e condensação de rios subterrâneos.", isCorrect: false, distractorRationale: "Gutação é a perda de água líquida; não é a responsável pelos grandes volumes de vapor dos rios voadores." },
      { id: "c", text: "Respiração celular e precipitação convectiva.", isCorrect: false, distractorRationale: "A evapotranspiração é o principal motor que lança vapor de água para a atmosfera em larga escala." },
      { id: "d", text: "Fotossíntese e efeito estufa.", isCorrect: false, distractorRationale: "A fotossíntese retira CO2 e a redução dela agrava o efeito estufa, mas a pergunta foca na origem da umidade (chuvas)." },
      { id: "e", text: "Decomposição da serrapilheira e inversão térmica.", isCorrect: false, distractorRationale: "Decomposição não é a principal fonte de umidade; inversão térmica é fenômeno de retenção de ar frio." }
    ],
    detailedExplanation: {
      summary: "As árvores da Amazônia lançam imensas quantidades de água na atmosfera via evapotranspiração. Os ventos transportam essa umidade ('rios voadores') para o centro-sul do Brasil.",
      stepByStep: [
        "As raízes profundas absorvem água do solo e as folhas a liberam em forma de vapor pela evapotranspiração.",
        "Esse vapor forma enormes massas úmidas na troposfera ('rios voadores').",
        "A barreira dos Andes desvia esses fluxos úmidos em direção ao Centro-Oeste e Sudeste do Brasil, gerando chuvas abundantes.",
        "O desmatamento destrói essa bomba biótica, agravando secas e crises hídricas nas bacias do Sudeste."
      ],
      coreConcept: "Ciclo da Água, Evapotranspiração e Rios Voadores",
      trapWarning: "Achar que a umidade da Amazônia fica restrita à região Norte."
    },
    commonTraps: ["Confundir transpiração com gutação ou respiração", "Desconhecer o conceito de rios voadores"],
    tags: ["amazonia", "clima", "desmatamento", "ciclo da agua"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-005",
    area: "natureza",
    competence: 2,
    skill: 7,
    topic: "Ecologia",
    subtopic: "Ciclos Biogeoquímicos",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em áreas urbanas densas e com vegetação esparsa, como em algumas encostas históricas durante fortes chuvas, a lixiviação do solo é intensa. Em um projeto de recuperação ambiental de encostas, utilizou-se o plantio de leguminosas (como o feijão-guandu) associadas a certas bactérias para melhorar rapidamente a fertilidade química do solo empobrecido, sem o uso de adubos industriais sintéticos.",
      source: "Inspirada em ENEM"
    },
    prompt: "O sucesso das leguminosas na recuperação da fertilidade de solos empobrecidos ocorre graças a uma simbiose com bactérias do gênero Rhizobium. O principal papel ecológico dessas bactérias no ciclo biogeoquímico em questão é:",
    options: [
      { id: "a", text: "fixar o gás carbônico atmosférico, transformando-o em matéria orgânica no solo.", isCorrect: false, distractorRationale: "As plantas fazem a fixação de carbono (fotossíntese), não as bactérias Rhizobium no contexto radicular." },
      { id: "b", text: "realizar a desnitrificação, devolvendo nitrogênio livre para a atmosfera e arejando o solo.", isCorrect: false, distractorRationale: "As bactérias desnitrificantes (ex: Pseudomonas) fazem isso, o que empobrece o solo em nitrogênio disponível." },
      { id: "c", text: "converter o gás nitrogênio atmosférico (N2) em amônia (NH3), que as plantas conseguem assimilar.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "decompor a matéria orgânica morta em nitratos, acelerando a reciclagem de fósforo.", isCorrect: false, distractorRationale: "A amonificação é feita por decompositores, e nitrato não recicla fósforo." },
      { id: "e", text: "absorver os íons tóxicos lixiviados das chuvas, realizando fitorremediação associada.", isCorrect: false, distractorRationale: "O Rhizobium atua especificamente na fixação biológica do nitrogênio." }
    ],
    detailedExplanation: {
      summary: "Bactérias Rhizobium vivem em nódulos nas raízes de leguminosas e realizam a fixação biológica do nitrogênio, convertendo N2 do ar em amônia, fertilizando o solo.",
      stepByStep: [
        "Plantio de leguminosas para recuperar solo empobrecido: aponta para o Ciclo do Nitrogênio.",
        "Relação simbiótica mutualística entre raízes de leguminosas e bactérias Rhizobium.",
        "Rhizobium fixa o nitrogênio gasoso (N2) do ar atmosférico e o transforma em amônia (NH3/NH4+), que é absorvida pela planta.",
        "Após a queda de folhas ou cultivo verde, o solo enriquece-se em compostos nitrogenados orgânicos."
      ],
      coreConcept: "Ciclo do Nitrogênio e Fixação Biológica por Rhizobium",
      trapWarning: "Confundir as etapas do ciclo do nitrogênio: Fixação (Rhizobium) -> Nitrosação (Nitrosomonas) -> Nitratação (Nitrobacter) -> Desnitrificação (Pseudomonas)."
    },
    commonTraps: ["Confundir Rhizobium com bactérias nitrificantes", "Achar que a planta absorve N2 gasoso diretamente pelas folhas"],
    tags: ["ciclos", "nitrogenio", "solo", "simbiose"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-006",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Ecologia",
    subtopic: "Pirâmides Ecológicas e Leis da Termodinâmica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "As pirâmides ecológicas representam graficamente a estrutura trófica de um ecossistema em três modalidades: de números, de biomassa e de energia. Enquanto pirâmides de números e de biomassa podem apresentar conformação invertida (com base mais estreita que os níveis superiores em circunstâncias ecológicas específicas), a pirâmide de energia é estritamente unidirecional e direta.",
      source: "ODUM, Eugene. Fundamentos de Ecologia."
    },
    prompt: "A impossibilidade teórica e prática de uma pirâmide de energia ser invertida em qualquer ecossistema da Terra decorre diretamente:",
    options: [
      { id: "a", text: "da Segunda Lei da Termodinâmica, segundo a qual as transferências energéticas são imperfeitas, ocorrendo perda inevitável de energia na forma de calor metabólico dissipado a cada nível trófico.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "da destruição contínua de matéria inorgânica pelos organismos decompositores no solo.", isCorrect: false, distractorRationale: "A matéria não é destruída, ela é reciclada ciclicamente (conservação da massa de Lavoisier)." },
      { id: "c", text: "do fato de os carnívoros de topo realizarem quimiossíntese para produzir energia adicional.", isCorrect: false, distractorRationale: "Carnívoros são heterótrofos estritos e não realizam quimiossíntese." },
      { id: "d", text: "da capacidade ilimitada dos herbívoros de converter 100% da biomassa vegetal consumida em músculos sem perdas respiratórias.", isCorrect: false, distractorRationale: "A eficiência ecológica é baixa (cerca de 10%), a maior parte é perdida em calor e fezes." },
      { id: "e", text: "da gravidade terrestre que atrai as calorias para o fundo dos oceanos.", isCorrect: false, distractorRationale: "Conceito absurdo: calorias são unidades de energia de ligação química, não caem por gravidade mecânica." }
    ],
    detailedExplanation: {
      summary: "A energia flui de forma unidirecional e decrescente através dos níveis tróficos. A Segunda Lei da Termodinâmica estabelece que em qualquer transformação energética há aumento de entropia e dissipação de calor.",
      stepByStep: [
        "Produtores captam energia solar e fixam em ligações químicas (Produtividade Primária Bruta).",
        "Parte é gasta na própria respiração celular do vegetal (R).",
        "O herbívoro consome a Produtividade Primária Líquida, mas gasta a maior parte em respiração, locomoção e homeotermia (calor dissipado).",
        "Apenas cerca de 10% da energia acumulada é transferida ao nível trófico seguinte, impedindo que um nível superior contenha mais energia que o nível que o sustenta."
      ],
      coreConcept: "Fluxo Unidirecional de Energia e a Segunda Lei da Termodinâmica na Ecologia",
      trapWarning: "No ENEM, guarde: PIRÂMIDE DE ENERGIA NUNCA É INVERTIDA. Pirâmide de biomassa PODE ser invertida no mar (fitoplâncton x zooplâncton)."
    },
    commonTraps: [
      "Confundir pirâmide de biomassa marinha invertida com pirâmide de energia",
      "Achar que a energia se recicla no ecossistema (matéria se recicla; energia dissipa-se)"
    ],
    tags: ["piramides-ecologicas", "termodinamica", "fluxo-de-energia", "niveis-troficos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-007",
    area: "natureza",
    competence: 2,
    skill: 7,
    topic: "Ecologia",
    subtopic: "Relações Ecológicas e Dinâmica Populacional",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No estudo das interações biológicas em uma reserva florestal, pesquisadores observaram três fenômenos: 1) O fungo Penicillium secreta penicilina no solo, substância que inibe a multiplicação de colônias bacterianas ao seu redor sem que o fungo tire proveito direto das bactérias mortas; 2) Orquídeas e bromélias fixam-se no tronco de árvores frondosas para captar mais luz solar na copa da mata, sem retirar seiva ou prejudicar a árvore hospedeira; 3) Líquens formados pela íntima associação entre fungos e algas microscópicas habitam rochas nuas, onde nenhum dos dois conseguiria sobreviver isoladamente.",
      source: "ENEM Relações Ecológicas Interespecíficas"
    },
    prompt: "As relações ecológicas descritas em 1, 2 e 3 classificam-se, respectivamente, como:",
    options: [
      { id: "a", text: "Amensalismo (ou Antibiose), Epifitismo (Comensalismo) e Mutualismo obrigatório.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Predatismo, Parasitismo e Protocooperação.", isCorrect: false, distractorRationale: "O fungo não consome a bactéria como presa; a orquídea não suga seiva (não é parasita); o líquen é mutualismo obrigatório." },
      { id: "c", text: "Competição interespecífica, Inquilinismo e Canibalismo.", isCorrect: false, distractorRationale: "Canibalismo é relação intraespecífica onde indivíduos devoram membros da mesma espécie, o que não ocorre em líquens." },
      { id: "d", text: "Comensalismo, Amensalismo e Parasitismo social.", isCorrect: false, distractorRationale: "Inverteu a ordem de amensalismo e comensalismo." },
      { id: "e", text: "Mutualismo, Predatismo e Fitoalexia.", isCorrect: false, distractorRationale: "Orquídeas não são predadoras de árvores." }
    ],
    detailedExplanation: {
      summary: "As relações ecológicas podem ser harmônicas (+/+, +/0) ou desarmônicas (+/-, -/0, -/-).",
      stepByStep: [
        "1) Amensalismo/Antibiose (-/0): uma espécie inibe ou prejudica outra sem obter benefício direto (fungo Penicillium inibindo bactérias; maré vermelha).",
        "2) Epifitismo/Inquilinismo (+/0): forma de comensalismo em que a planta epífita obtém suporte físico para luz sem causar dano ou retirar seiva do hospedeiro.",
        "3) Mutualismo (+/+): associação biológica íntima e permanente indispensável à sobrevivência de ambas as espécies envolvidas (líquens, micorrizas, bactérias no rúmen)."
      ],
      coreConcept: "Classificação das Relações Ecológicas Interespecíficas: Amensalismo, Comensalismo e Mutualismo",
      trapWarning: "Cuidado: Epífita (orquídea) NÃO É PARASITA (ela não suga seiva); a planta parasita é o cipó-chumbo ou a erva-de-passarinho."
    },
    commonTraps: [
      "Confundir orquídea epífita com planta parasita",
      "Não associar a produção de antibióticos por fungos ao amensalismo"
    ],
    tags: ["relacoes-ecologicas", "amensalismo", "epifitismo", "mutualismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-008",
    area: "natureza",
    competence: 2,
    skill: 7,
    topic: "Ecologia",
    subtopic: "Sucessão Ecológica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Após a erupção de um vulcão submarino, formou-se uma nova ilha constituída exclusivamente por rocha basáltica estéril e desprovida de solo orgânico. Ao longo de dois séculos, biólogos acompanharam a colonização do local: inicialmente surgiram líquens e musgos (ecese), seguidos por gramíneas e pequenos arbustos (seres), até o estabelecimento de uma densa floresta tropical costeira em equilíbrio dinâmico (clímax).",
      source: "ENEM Dinâmica de Ecossistemas"
    },
    prompt: "Durante o processo de sucessão ecológica primária descrito, até que se atinja a comunidade clímax, observa-se que:",
    options: [
      { id: "a", text: "a biomassa total e a biodiversidade aumentam, as teias tróficas tornam-se mais complexas e a razão entre a fotossíntese bruta e a respiração total (P/R) aproxima-se de 1.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a taxa de respiração total torna-se zero no clímax, pois os vegetais param de gastar energia metabólica.", isCorrect: false, distractorRationale: "No clímax a respiração total é altíssima e consome quase toda a matéria produzida (P ≈ R)." },
      { id: "c", text: "a biodiversidade diminui continuamente, restando apenas uma única espécie dominante de árvore.", isCorrect: false, distractorRationale: "A biodiversidade cresce e atinge seu valor máximo no clímax." },
      { id: "d", text: "o solo torna-se progressivamente mais raso, pedregoso e impermeável.", isCorrect: false, distractorRationale: "A decomposição de serrapilheira e intemperismo criam um solo cada vez mais profundo e rico em húmus." },
      { id: "e", text: "a sucessão é dita secundária porque começou em solo rochoso sem sementes prévias.", isCorrect: false, distractorRationale: "Sucessão em área estéril sem vida prévia é classificada como PRIMÁRIA." }
    ],
    detailedExplanation: {
      summary: "A sucessão ecológica primária é a colonização gradual de substratos virgens estéreis. A comunidade progride da ecese para os estágios serais até a maturidade ecológica do clímax.",
      stepByStep: [
        "Ecese (pioneiras): líquens degradam a rocha com ácidos orgânicos e formam a primeira camada de solo.",
        "Tendências da sucessão: aumento contínuo da biomassa, da complexidade das teias alimentares, da reciclagem de nutrientes e dos nichos ecológicos.",
        "Balanço energético: na fase pioneira e seral, a Produção Primária Bruta é muito maior que a Respiração (P > R, acumulando biomassa).",
        "Comunidade Clímax: estabilidade dinâmica onde a Produção iguala o Consumo Respiratório (P/R ≈ 1; Produção Líquida aproxima-se de zero)."
      ],
      coreConcept: "Sucessão Ecológica Primária vs Secundária e Equilíbrio da Comunidade Clímax",
      trapWarning: "No ENEM, a pegadinha clássica é afirmar que na floresta clímax (como a Amazônia) sobra oxigênio para o resto do mundo. A floresta madura consome quase todo o O2 que produz em sua própria respiração (P/R ≈ 1)!"
    },
    commonTraps: [
      "Achar que a comunidade clímax acumula biomassa indefinidamente",
      "Confundir sucessão primária (rocha nua) com secundária (área queimada ou desmatada)"
    ],
    tags: ["sucessao-ecologica", "comunidade-climax", "biomassa", "respiracao-fotossintese"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-009",
    area: "natureza",
    competence: 6,
    skill: 23,
    topic: "Ecologia",
    subtopic: "Gases de Efeito Estufa e Potencial de Aquecimento Global",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No debate sobre as mudanças climáticas antropogênicas, compara-se frequentemente o dióxido de carbono (CO₂) e o gás metano (CH₄). Embora o CO₂ seja emitido em volumes muito maiores pela queima de combustíveis fósseis e desmatamento, o metano — oriundo da fermentação entérica de bovinos na pecuária, da rizicultura irrigada e de aterros sanitários — possui um Potencial de Aquecimento Global (GWP) cerca de 28 vezes superior ao do CO₂ em uma escala de 100 anos.",
      source: "IPCC, Painel Intergovernamental sobre Mudanças Climáticas, 6º Relatório de Avaliação."
    },
    prompt: "A alta capacidade do gás metano de agravar o efeito estufa na atmosfera deve-se primordialmente ao fato de sua estrutura molecular:",
    options: [
      { id: "a", text: "possuir ligações covalentes que vibram e absorvem intensamente a radiação infravermelha térmica emitida pela superfície da Terra, impedindo que esse calor escape para o espaço sideral.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "destruir a camada de ozônio na troposfera por meio de reações fotoquímicas com cloro.", isCorrect: false, distractorRationale: "Destruição da camada de ozônio estratosférico é causada por CFCs (clorofluorcarbonetos), não por metano." },
      { id: "c", text: "bloquear a passagem da luz solar visível em direção ao solo, provocando aquecimento por atrito mecânico.", isCorrect: false, distractorRationale: "O metano é transparente à luz visível que entra; ele retém a radiação infravermelha que sai." },
      { id: "d", text: "transformar o oxigênio atmosférico em monóxido de carbono tóxico de forma espontânea.", isCorrect: false, distractorRationale: "O metano é oxidado a CO2 e H2O na atmosfera, sem transformar O2 em CO espontaneamente." },
      { id: "e", text: "resfriar as camadas superiores da estratosfera criando nevoeiros glaciais permanentes.", isCorrect: false, distractorRationale: "O efeito térmico global é de aquecimento troposférico, e não de nevoeiro glacial." }
    ],
    detailedExplanation: {
      summary: "O efeito estufa ocorre porque a superfície da Terra absorve radiação solar visível e reemite radiação infravermelha térmica. Gases como CO₂ e CH₄ absorvem essas ondas de calor e as reemitem de volta para a superfície.",
      stepByStep: [
        "A radiação solar de ondas curtas (luz visível/UV) atravessa os gases da atmosfera e aquece o solo oceânico e terrestre.",
        "A Terra aquecida emite radiação de ondas longas (infravermelho térmico).",
        "Moléculas com três ou mais átomos (CO₂, CH₄, N₂O, H₂O) absorvem o infravermelho e sofrem vibrações moleculares, retendo energia térmica na troposfera.",
        "O metano possui maior eficiência de absorção de infravermelho por molécula do que o CO₂, tornando o controle das emissões da agropecuária e lixões vital para conter o aquecimento no curto prazo."
      ],
      coreConcept: "Mecanismo Biofísico do Efeito Estufa e Potencial de Aquecimento do Metano (CH₄)",
      trapWarning: "No ENEM, NÃO confunda Efeito Estufa (retenção de calor infravermelho por CO2/metano) com Buraco na Camada de Ozônio (destruição de O3 por CFCs que filtram raios UV)."
    },
    commonTraps: [
      "Misturar efeito estufa com destruição da camada de ozônio",
      "Achar que o efeito estufa natural é prejudicial (ele é vital para a vida; o problema é seu agravamento antrópico)"
    ],
    tags: ["efeito-estufa", "metano", "ipcc", "infravermelho", "aquecimento-global"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-010",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Ecologia",
    subtopic: "Fragmentação de Habitats e Corredores Ecológicos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A expansão agropecuária e a malha rodoviária no Cerrado e na Mata Atlântica transformaram florestas contínuas em fragmentos florestais isolados ('ilhas de mata'). Esse isolamento afeta desproporcionalmente mamíferos de grande porte com ampla área de vida, como a onça-pintada (Panthera onca) e a anta (Tapirus terrestris), aumentando a endogamia e o risco de atropelamentos em rodovias.",
      source: "ENEM Biologia da Conservação"
    },
    prompt: "Para mitigar os impactos da fragmentação sobre essas espécies sem inviabilizar as atividades econômicas no entorno, a medida de manejo da paisagem ecologicamente mais recomendada é:",
    options: [
      { id: "a", text: "a implantação de corredores ecológicos que conectem os fragmentos florestais isolados, facilitando o fluxo gênico e a dispersão dos animais entre as manchas de habitat.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o confinamento permanente de todos os predadores em zoológicos urbanos municipais.", isCorrect: false, distractorRationale: "O cativeiro não preserva a integridade funcional dos ecossistemas naturais nem a evolução biológica silvestre." },
      { id: "c", text: "a introdução maciça de espécies exóticas invasoras para competir por alimento com as espécies nativas.", isCorrect: false, distractorRationale: "Espécies exóticas agravam a extinção da fauna nativa, constituindo a segunda maior causa de perda de biodiversidade." },
      { id: "d", text: "o corte raso da vegetação remanescente para evitar que os animais se escondam perto das rodovias.", isCorrect: false, distractorRationale: "Isso destruiria o restante do habitat, levando à extinção total da fauna." },
      { id: "e", text: "a aplicação de pesticidas químicos em toda a extensão da reserva para eliminar insetos polinizadores.", isCorrect: false, distractorRationale: "Eliminar polinizadores colapsaria a reprodução vegetal da floresta." }
    ],
    detailedExplanation: {
      summary: "A fragmentação de habitats reduz o tamanho efetivo populacional e gera o 'efeito de borda'. Os corredores ecológicos restabelecem a conectividade entre manchas florestais, assegurando a viabilidade genética a longo prazo.",
      stepByStep: [
        "Problema da fragmentação: isolamento reprodutivo -> cruzamentos consanguíneos (endogamia) -> perda de variabilidade genética e manifestação de alelos deletérios.",
        "Efeito de borda: aumento da temperatura, dessecação e invasão de gramíneas nas margens do fragmento florestal.",
        "Solução: Corredores ecológicos (faixas de vegetação nativa conectando fragmentos) aliados a passagens de fauna suspensas ou subterrâneas sob rodovias.",
        "Benefício: permite o fluxo gênico, a dispersão de sementes e o acesso a novos territórios de caça."
      ],
      coreConcept: "Fragmentação de Habitats, Efeito de Borda e Corredores Ecológicos",
      trapWarning: "No ENEM, associou fragmentação florestal e isolamento de espécies a solução de conservação -> CORREDORES ECOLÓGICOS."
    },
    commonTraps: [
      "Achar que fragmentos pequenos isolados são suficientes para sustentar predadores de topo",
      "Ignorar o papel do fluxo gênico na conservação das espécies ameaçadas"
    ],
    tags: ["conservacao", "fragmentacao-habitat", "corredores-ecologicos", "biodiversidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
