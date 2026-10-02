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
  },
  {
    id: "NAT-ECO-011",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Ecologia",
    subtopic: "Ciclo do Nitrogênio e Adubação Verde",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A prática agrícola da 'adubação verde' consiste no cultivo consorciado ou na rotação de culturas com plantas da família das leguminosas (como a soja, o feijão e a crotalária). Pequenos nódulos presentes nas raízes dessas plantas abrigam colônias de bactérias do gênero Rhizobium, estabelecendo uma relação mutualística crucial para a ciclagem de nutrientes no solo.",
      source: "EMBRAPA Meio Ambiente"
    },
    prompt: "O emprego de leguminosas na adubação verde proporciona sustentabilidade agrícola e diminui custos produtivos porque:",
    options: [
      { id: "a", text: "permite a incorporação direta de nitrogênio atmosférico (N2) em compostos nitrogenados orgânicos utilizáveis pelas plantas, reduzindo a necessidade de fertilizantes sintéticos industriais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "acelera a desnitrificação do solo, convertendo nitrato tóxico em gás nitrogênio livre para oxigenar as raízes.", isCorrect: false, distractorRationale: "A desnitrificação perde nitrogênio do solo para a atmosfera, o oposto do benefício desejado para a lavoura." },
      { id: "c", text: "provoca a lixiviação acelerada de fósforo e potássio para os lençóis freáticos mais profundos.", isCorrect: false, distractorRationale: "A lixiviação empobrece o solo e polui águas subterrâneas; a adubação verde visa proteger o solo." },
      { id: "d", text: "inibe a atividade de bactérias nitrificantes através da liberação de compostos aromáticos antissépticos.", isCorrect: false, distractorRationale: "Bactérias nitrificantes (Nitrosomonas e Nitrobacter) são fundamentais para gerar nitrato, forma preferencialmente absorvida pelas raízes." },
      { id: "e", text: "substitui a necessidade de água durante o ciclo de crescimento das culturas agrícolas comerciais.", isCorrect: false, distractorRationale: "Nenhuma adubação verde substitui a dependência hídrica dos vegetais." }
    ],
    detailedExplanation: {
      summary: "A simbiose entre leguminosas e bactérias Rhizobium realiza a biofixação do N2 do ar, transformando-o em amônia e aminoácidos, enriquecendo o solo naturalmente sem os custos energéticos do processo Haber-Bosch.",
      stepByStep: [
        "Passo 1: Reconhecer que o N2 atmosférico possui ligação tripla covalente estável, não assimilável diretamente pela imensa maioria dos seres vivos.",
        "Passo 2: As bactérias fixadoras (Rhizobium) possuem o complexo enzimático nitrogenase, capaz de romper essa ligação e gerar amônia (NH3/NH4+).",
        "Passo 3: A planta fornece carboidratos da fotossíntese à bactéria, e a bactéria fornece compostos nitrogenados à planta.",
        "Passo 4: Ao morrer ou ser ceifada, a biomassa leguminosa decompõe-se, liberando nitrogênio para a cultura sucessora."
      ],
      coreConcept: "Biofixação de Nitrogênio e Mutualismo Rhizobium-Leguminosas",
      trapWarning: "Cuidado: Quem fixa o N2 é a bactéria nos nódulos radiculares, e não a planta sozinha por suas folhas!"
    },
    commonTraps: [
      "Achar que as folhas das plantas absorvem nitrogênio gasoso diretamente pelos estômatos",
      "Confundir fixação com desnitrificação"
    ],
    tags: ["ciclos-biogeoquimicos", "nitrogenio", "agricultura-sustentavel", "mutualismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-012",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Ecologia",
    subtopic: "Inversão Térmica e Poluição Atmosférica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nas madrugadas frias de inverno em grandes metrópoles cercadas por relevo acidentado, como São Paulo e Santiago, o solo perde calor rapidamente por irradiação térmica. Uma camada de ar frio e denso se instala próxima à superfície, sobreposta por uma camada de ar quente menos denso. Esse fenômeno meteorológico impede a convecção natural e a dispersão dos poluentes emitidos por veículos e fábricas.",
      source: "CETESB Monitoramento do Ar"
    },
    prompt: "O aumento acentuado de internações hospitalares por afecções respiratórias durante episódios de inversão térmica decorre:",
    options: [
      { id: "a", text: "da retenção de material particulado e gases tóxicos na camada basal de ar frio inalável pela população, impedidos de subir pelas correntes térmicas ascendentes.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "do colapso imediato da camada de ozônio sobre as grandes cidades durante o período noturno.", isCorrect: false, distractorRationale: "A camada de ozônio fica na estratosfera e é degradada por CFCs, não pela dinâmica local da inversão térmica." },
      { id: "c", text: "do aumento vertiginoso da umidade relativa do ar, que dilui excessivamente o oxigênio atmosférico.", isCorrect: false, distractorRationale: "O inverno no Sudeste é tipicamente seco, e o oxigênio não sofre diluição prejudicial à respiração." },
      { id: "d", text: "da aceleração das correntes de vento que dispersam os poluentes exclusivamente para as regiões litorâneas.", isCorrect: false, distractorRationale: "A inversão térmica caracteriza-se pela estabilidade atmosférica e ausência de dispersão." },
      { id: "e", text: "da conversão fotoquímica de gás carbônico em monóxido de carbono pela ausência de radiação solar.", isCorrect: false, distractorRationale: "CO é gerado por queima incompleta de combustíveis fósseis, não por essa reação." }
    ],
    detailedExplanation: {
      summary: "Na atmosfera padrão, o ar mais quente fica embaixo e sobe (convecção). Na inversão térmica, o ar frio (mais denso) fica preso rente ao solo sob ar quente, aprisionando fuligem, SO2 e NOx na zona de respiração humana.",
      stepByStep: [
        "Passo 1: Lembrar que o ar aquecido se expande, fica menos denso e sobe, promovendo a convecção que limpa a cidade.",
        "Passo 2: No inverno, resfriamento rápido do solo -> ar rente ao chão fica mais frio que a camada logo acima.",
        "Passo 3: Ar frio não sobe espontaneamente através de ar quente -> tampa térmica invisível.",
        "Passo 4: Poluentes acumulados causam bronquite, asma e crises respiratórias na população."
      ],
      coreConcept: "Inversão Térmica, Estabilidade da Troposfera e Saúde Pública",
      trapWarning: "A inversão térmica é um fenômeno METEOROLÓGICO natural; ela se torna um problema ambiental grave quando ocorre em cidades altamente poluídas."
    },
    commonTraps: [
      "Achar que a inversão térmica é um gás emitido por fábricas",
      "Confundir inversão térmica com efeito estufa ou chuva ácida"
    ],
    tags: ["poluicao-atmosferica", "inversao-termica", "saude-publica", "climatologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-013",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Ecologia",
    subtopic: "Biomagnificação Trófica e Poluição por Metais Pesados",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na bacia do Rio Tapajós, o garimpo clandestino utiliza mercúrio líquido para amalgamar o ouro particulado. Resíduos desse metal pesado são lançados nos rios, onde bactérias anaeróbicas convertem o mercúrio inorgânico em metilmercúrio, uma molécula lipossolúvel e altamente neurotóxica. Estudos epidemiológicos comprovaram concentrações perigosamente altas de metilmercúrio no leite materno de populações ribeirinhas e indígenas.",
      source: "Fundação Oswaldo Cruz (Fiocruz)"
    },
    prompt: "A elevada concentração de metilmercúrio verificada nos ribeirinhos em relação à água do rio decorre do processo de:",
    options: [
      { id: "a", text: "biomagnificação trófica, no qual substâncias lipossolúveis não biodegradáveis acumulam-se progressivamente ao longo dos níveis tróficos da cadeia alimentar.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "eutrofização acelerada, decorrente da proliferação de macrófitas aquáticas que sintetizam mercúrio.", isCorrect: false, distractorRationale: "Vegetais não sintetizam metais pesados; metais são elementos químicos inorgânicos." },
      { id: "c", text: "lixiviação superficial, que transporta o mercúrio exclusivamente pelos poros das folhas das árvores ribeirinhas.", isCorrect: false, distractorRationale: "A contaminação humana ocorre pela ingestão de peixes carnívoros no topo da cadeia trófica aquática." },
      { id: "d", text: "amodulação homeostática, na qual peixes herbívoros metabolizam o metal para produzir ATP.", isCorrect: false, distractorRationale: "Metais pesados inibem enzimas e lesam tecidos nervosos, não geram ATP." },
      { id: "e", text: "sucessão ecológica secundária, que seleciona espécies vegetais produtoras de mercúrio quelado.", isCorrect: false, distractorRationale: "Sucessão é substituição de comunidades ao longo do tempo, não acúmulo de toxinas." }
    ],
    detailedExplanation: {
      summary: "A biomagnificação trófica (ou magnificação trófica) ocorre quando um composto tóxico lipossolúvel não biodegradável acumula-se em concentrações crescentes a cada nível trófico sucessivo, atingindo teores máximos nos carnívoros de topo e humanos.",
      stepByStep: [
        "Passo 1: Distinguir bioacumulação (no indivíduo durante sua vida) de biomagnificação trófica (ao longo da cadeia alimentar).",
        "Passo 2: Fitoplâncton absorve traços -> Zooplâncton come muito fitoplâncton -> Peixes carnívoros comem milhares de peixes menores.",
        "Passo 3: Humanos ribeirinhos alimentam-se de peixes piscívoros (tucunaré, pirarucu) -> recebem a maior dose de metilmercúrio.",
        "Passo 4: O composto atravessa a barreira hematoencefálica e placentária, causando neuropatias e malformações congênitas."
      ],
      coreConcept: "Biomagnificação Trófica e Metais Pesados",
      trapWarning: "No fluxo de energia, a quantidade de energia DIMINUI ao longo da cadeia. Na biomagnificação, a concentração do poluente AUMENTA ao longo da cadeia."
    },
    commonTraps: [
      "Achar que o primeiro nível trófico tem a maior concentração de poluente",
      "Confundir diminuição do fluxo energético com comportamento dos poluentes cumulativos"
    ],
    tags: ["poluicao", "metais-pesados", "biomagnificacao", "cadeia-alimentar", "amazonia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-014",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Ecologia",
    subtopic: "Dinâmica Populacional e Capacidade de Carga",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O gráfico de crescimento de uma população biológica em ambiente natural geralmente exibe uma curva sigmoide (curva logística ou em formato de 'S'). Inicialmente, a população cresce lentamente (fase de adaptação), acelera em taxa exponencial (fase logarítmica) e, por fim, estabiliza oscilando em torno de uma linha assintótica horizontal.",
      source: "Ecologia de Populações - Begon, Townsend & Harper"
    },
    prompt: "A estabilização do tamanho populacional observada na porção superior da curva logística decorre:",
    options: [
      { id: "a", text: "da ação da resistência ambiental (escassez de alimento, predação, parasitismo e competição), que equilibra a taxa de natalidade com a de mortalidade no limite da capacidade de suporte do habitat.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "do esgotamento genético completo da população, que impede a ocorrência de mitoses celulares.", isCorrect: false, distractorRationale: "A capacidade reprodutiva celular permanece ativa; a mortalidade ou emigração aumenta por restrições ecológicas." },
      { id: "c", text: "da suspensão total do potencial biótico por mutações deletérias compulsórias induzidas pelo estresse térmico.", isCorrect: false, distractorRationale: "O potencial biótico é uma característica intrínseca teórica da espécie, não anulada por mutações compulsórias." },
      { id: "d", text: "da eliminação de todos os nichos ecológicos compartilhados entre machos e fêmeas da mesma espécie.", isCorrect: false, distractorRationale: "Membros da mesma espécie compartilham essencialmente o mesmo nicho fundamental." },
      { id: "e", text: "do aumento exponencial da área territorial do ecossistema para comportar os novos descendentes.", isCorrect: false, distractorRationale: "O ecossistema tem área finita; por isso há capacidade de carga limite (K)." }
    ],
    detailedExplanation: {
      summary: "O crescimento logístico reflete o embate entre o potencial biótico (capacidade reprodutiva máxima teórica) e a resistência ambiental. A população se estabiliza na capacidade de carga K (carrying capacity).",
      stepByStep: [
        "1. Potencial Biótico: curva em J exponencial pura (crescimento descontrolado sem limitações).",
        "2. Resistência Ambiental: conjunto de fatores bióticos e abióticos que freiam o crescimento desmedido (competição intraespecífica, doenças, espaço, alimento).",
        "3. Capacidade de Suporte (K): número máximo de indivíduos que aquele ambiente consegue sustentar a longo prazo sem degradar a base de recursos.",
        "4. No equilíbrio dinâmico: Natalidade + Imigração ≈ Mortalidade + Emigração."
      ],
      coreConcept: "Curva Logística de Crescimento e Capacidade de Suporte (K)",
      trapWarning: "Cuidado: A população não para de nascer! O que acontece é que o número de mortes empata com o de nascimentos."
    },
    commonTraps: [
      "Achar que na fase de estabilização nenhum novo indivíduo nasce",
      "Confundir potencial biótico com capacidade de carga"
    ],
    tags: ["populacoes", "capacidade-carga", "resistencia-ambiental", "curva-sigmoide"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-015",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Ecologia",
    subtopic: "Sucessão Ecológica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Após uma erupção vulcânica na ilha de Krakatoa, o fluxo de lava cobriu o solo, esterilizando a superfície e formando uma rocha nua. Ao longo de décadas, biólogos documentaram a colonização progressiva do local: primeiro por líquens e musgos, seguidos por pteridófitas e gramíneas, até o estabelecimento de arbustos e, finalmente, de uma floresta densa tropical.",
      source: "Histórico Ecológico de Krakatoa"
    },
    prompt: "Durante a transição da comunidade pioneira (ecese) para a comunidade clímax, observa-se que a:",
    options: [
      { id: "a", text: "biomassa total acumulada e a biodiversidade de espécies aumentam consideravelmente, enquanto a taxa de fotossíntese líquida (produção primária líquida) tende a aproximar-se de zero no clímax.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "produção primária líquida torna-se máxima no clímax, porque as árvores adultas param de respirar.", isCorrect: false, distractorRationale: "Árvores adultas respiram continuamente; no clímax, praticamente toda a matéria produzida é consumida na respiração da comunidade (PPL ≈ 0)." },
      { id: "c", text: "resiliência do ecossistema diminui drasticamente, tornando o clímax altamente vulnerável a qualquer chuva fraca.", isCorrect: false, distractorRationale: "Pelo contrário, o clímax possui altíssima homeostase e estabilidade diante de perturbações normais." },
      { id: "d", text: "complexidade das teias alimentares regride, concentrando a alimentação em apenas duas espécies de consumidores primários.", isCorrect: false, distractorRationale: "A complexidade das teias alimentares atinge seu auge no clímax." },
      { id: "e", text: "sucessão observada classifica-se como secundária por ter ocorrido sobre fragmentos de solo fértil pré-existente.", isCorrect: false, distractorRationale: "Sobre rocha nua ou lava recém-resfriada, sem solo prévio, trata-se de sucessão ecológica PRIMÁRIA." }
    ],
    detailedExplanation: {
      summary: "Na sucessão primária (ecese -> seras -> clímax): Biomassa, biodiversidade e nichos aumentam. Na comunidade clímax, a Produção Primária Bruta (PPB) se iguala à Respiração Comunitária Total (R), resultando em PPL = PPB - R ≈ 0.",
      stepByStep: [
        "1. Identificar o tipo: lava nua sem solo residual = Sucessão Primária.",
        "2. Pioneiras (ecese): líquens desgastam a rocha quimicamente formando o solo inicial.",
        "3. Intermediárias (seras): gramíneas e arbustos aumentam a retenção de umidade e matéria orgânica.",
        "4. Clímax: máxima estabilidade e biodiversidade, teias alimentares complexas.",
        "5. Balanço energético do clímax: tudo que a floresta fotossintetiza é consumido por ela e sua imensa fauna/flora associada (PPB ≈ R)."
      ],
      coreConcept: "Sucessão Ecológica Primária e Balanço Energético no Clímax",
      trapWarning: "No ENEM: Por que a floresta amazônica não é o 'pulmão do mundo'? Porque florestas em clímax consomem quase todo o oxigênio que produzem (PPL ≈ 0)."
    },
    commonTraps: [
      "Achar que florestas em clímax produzem toneladas de oxigênio excedente para a atmosfera",
      "Confundir sucessão primária (sem solo prévio) com secundária (queimadas, pastos abandonados)"
    ],
    tags: ["sucessao-ecologica", "climax", "biomassa", "produtividade-primaria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-016",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Ecologia",
    subtopic: "Adaptações Xeromórficas da Caatinga",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Caatinga é o único bioma com distribuição restrita ao território brasileiro, caracterizado por chuvas irregulares e longos períodos de estiagem severa. Espécies emblemáticas da flora, como o mandacaru (Cereus jamacaru) e o juazeiro (Ziziphus joazeiro), desenvolveram adaptações morfológicas e fisiológicas notáveis para resistir à seca.",
      source: "Embrapa Semiárido"
    },
    prompt: "Dentre as estratégias adaptativas das plantas da Caatinga que minimizam a perda de água por transpiração sem interromper o sustento da planta, destaca-se:",
    options: [
      { id: "a", text: "a presença de folhas modificadas em espinhos associada a caules verdes suculentos e fotossintetizantes, além de cutícula cerosa impermeabilizante espessa.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o desenvolvimento de folhas com grande área foliar laminar e finas cutículas hidrofílicas voltadas para o sol do meio-dia.", isCorrect: false, distractorRationale: "Folhas largas aumentam a evapotranspiração, levando à dessecação imediata em clima semiárido." },
      { id: "c", text: "a abertura permanente dos estômatos ao longo do dia mais quente para resfriar as gemas apicais.", isCorrect: false, distractorRationale: "Abrir estômatos ao meio-dia secaria a planta em poucas horas." },
      { id: "d", text: "a eliminação do caule vascular e absorção de orvalho exclusivamente por raízes aéreas tuberosas.", isCorrect: false, distractorRationale: "Cactáceas possuem caules vasculares suculentos muito desenvolvidos para armazenamento de água (parênquima aquífero)." },
      { id: "e", text: "a ausência completa de raízes profundas, limitando a absorção aos primeiros milímetros de areia.", isCorrect: false, distractorRationale: "Muitas espécies da Caatinga possuem raízes pivotantes profundas para alcançar o lençol freático." }
    ],
    detailedExplanation: {
      summary: "As cactáceas e xerófitas da Caatinga reduzem folhas a espinhos para diminuir a superfície de transpiração. O caule assume a função fotossintetizante e armazena água (parênquima aquífero).",
      stepByStep: [
        "1. Adaptações xeromórficas: redução da superfície foliar (folhas caducifólias ou modificadas em espinhos).",
        "2. Parênquima aquífero: tecido de reserva hídrica no caule carnoso (suculência).",
        "3. Cutícula espessa (cutina e ceras): barreira impermeável à difusão de vapor de água.",
        "4. Fisiologia CAM (Crassulacean Acid Metabolism): abertura estomática preferencial à noite para fixar CO2 com mínima perda d'água."
      ],
      coreConcept: "Adaptações Xeromórficas e Fisiologia Vegetal na Caatinga",
      trapWarning: "Espinhos em cactos são folhas modificadas! O caule é a parte verde gorda que faz fotossíntese."
    },
    commonTraps: [
      "Pensar que espinhos de cactos são ramos ou caules modificados (esses seriam acúleos ou ramos caulinares)",
      "Achar que plantas da Caatinga não fazem fotossíntese no período seco"
    ],
    tags: ["caatinga", "biomas-brasileiros", "xerofitismo", "adaptacoes-vegetais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-017",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Ecologia",
    subtopic: "Pirâmides Ecológicas e Inversão Marinha",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em ecossistemas pelágicos marinhos, biólogos mediram a biomassa instantânea de produtores e consumidores primários em um determinado dia. Para surpresa de quem analisa modelos terrestres, a massa de zooplâncton encontrada superou significativamente a massa de fitoplâncton registrada no momento da amostragem, configurando uma pirâmide de biomassa invertida.",
      source: "Fundamentos de Ecologia Marinha"
    },
    prompt: "A sustentabilidade desse ecossistema com uma pirâmide de biomassa instantânea invertida é garantida porque o fitoplâncton possui:",
    options: [
      { id: "a", text: "uma taxa de reprodução extraordinariamente rápida e altíssima velocidade de renovação (turnover), mantendo a produtividade contínua apesar da baixa biomassa instantânea.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "tamanho corporal gigante comparável ao das baleias, compensando a menor densidade numérica.", isCorrect: false, distractorRationale: "Fitoplâncton é composto por algas microscópicas unicelulares e cianobactérias." },
      { id: "c", text: "capacidade de alimentar-se heterotroficamente de zooplâncton durante a noite.", isCorrect: false, distractorRationale: "Fitoplâncton é produtor autotrófico fotossintetizante." },
      { id: "d", text: "uma pirâmide de energia também invertida, gerando mais energia útil à medida que sobe nos níveis tróficos.", isCorrect: false, distractorRationale: "A pirâmide de energia NUNCA pode ser invertida, devido à 2ª Lei da Termodinâmica." },
      { id: "e", text: "longevidade celular de séculos, permanecendo vivo sem necessidade de divisão celular.", isCorrect: false, distractorRationale: "O tempo de geração do fitoplâncton é de horas a poucos dias." }
    ],
    detailedExplanation: {
      summary: "A pirâmide de biomassa marinha pode ser invertida instantaneamente porque o fitoplâncton se reproduz e se divide em ritmo frenético (alto turnover). No entanto, a pirâmide de ENERGIA nunca se inverte.",
      stepByStep: [
        "1. Biomassa instantânea = peso seco de matéria orgânica presente em um único instante no tempo.",
        "2. Como o fitoplâncton é devorado rapidamente pelo zooplâncton, sua biomassa instantânea medida na água parece pequena.",
        "3. Contudo, em 24 a 48 horas ele dobra ou triplica sua população, gerando um fluxo de energia monumental ao longo do tempo.",
        "4. Regra de Ouro da TRI do ENEM: Pirâmide de ENERGIA nunca é invertida; pirâmide de NÚMEROS e de BIOMASSA podem ser invertidas."
      ],
      coreConcept: "Pirâmides de Biomassa e a Impossibilidade da Inversão Energética",
      trapWarning: "Se a prova perguntar se existe pirâmide de ENERGIA invertida em algum ecossistema da Terra, a resposta é JAMAIS."
    },
    commonTraps: [
      "Acreditar que a pirâmide de energia pode se inverter no mar",
      "Ignorar o conceito ecológico de taxa de renovação (turnover)"
    ],
    tags: ["piramides-ecologicas", "fitoplancton", "zooplancton", "fluxo-energia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-018",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Ecologia",
    subtopic: "Controle Biológico de Pragas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A lagarta-do-cartucho (Spodoptera frugiperda) é uma das principais pragas da cultura do milho no Brasil. O uso contínuo de inseticidas químicos sintéticos de amplo espectro gerou resistência genética na praga e provocou a mortandade de predadores naturais e polinizadores (como abelhas). Como alternativa ecológica, produtores passaram a liberar na lavoura minúsculas vespas parasitoides da espécie Trichogramma pretiosum.",
      source: "EMBRAPA Milho e Sorgo"
    },
    prompt: "A vantagem ecológica preponderante do controle biológico com a vespa Trichogramma em comparação aos defensivos químicos tradicionais reside na:",
    options: [
      { id: "a", text: "alta especificidade da relação ecológica, que combate a praga sem deixar resíduos tóxicos no alimento nem exterminar insetos benéficos e polinizadores nativos.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "eliminação de todas as espécies de insetos e aves da região para garantir exclusividade ao milharal.", isCorrect: false, distractorRationale: "O objetivo ecológico nunca é erradicar toda a fauna local, mas manter a população da praga abaixo do limiar de dano econômico." },
      { id: "c", text: "capacidade das vespas de fotossintetizarem e fornecerem glicose extra às raízes do milho.", isCorrect: false, distractorRationale: "Vespas são insetos (artrópodes), seres heterótrofos que não realizam fotossíntese." },
      { id: "d", text: "indução imediata de chuvas ácidas localizadas que dissolvem as lagartas na espiga.", isCorrect: false, distractorRationale: "Chuva ácida é poluição atmosférica prejudicial à agricultura." },
      { id: "e", text: "geração de novas linhagens de plantas de milho sem necessidade de sementes.", isCorrect: false, distractorRationale: "O parasitismo de ovos da lagarta não altera a genética ou reprodução da planta hospedeira." }
    ],
    detailedExplanation: {
      summary: "O controle biológico fundamenta-se nas relações ecológicas naturais (parasitismo ou predação). As fêmeas de Trichogramma depositam seus ovos dentro dos ovos da lagarta, impedindo que ela nasça, sem poluir a água ou matar abelhas.",
      stepByStep: [
        "1. Desvantagens do agrotóxico químico: bioacumulação, seleção de indivíduos resistentes, destruição de inimigos naturais e polinizadores.",
        "2. Mecanismo do controle biológico com Trichogramma: parasitoidismo específico de postura.",
        "3. Larvas da vespa consomem o embrião da lagarta por dentro -> nasce uma nova vespa no lugar da praga.",
        "4. Resultado: equilíbrio ecológico sem resíduos na água, no solo ou na espiga comercializada."
      ],
      coreConcept: "Controle Biológico de Pragas e Parasitoidismo",
      trapWarning: "No controle biológico, o objetivo não é 'extinguir' a praga 100%, mas manter sua densidade populacional abaixo do nível de prejuízo econômico."
    },
    commonTraps: [
      "Achar que controle biológico contamina o alimento",
      "Confundir relação de predação com parasitoidismo ou mutualismo"
    ],
    tags: ["controle-biologico", "parasitoidismo", "agricultura-sustentavel", "resistencia-inseticidas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-019",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Ecologia",
    subtopic: "Espécies Exóticas Invasoras",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Originário do Sudeste Asiático, o mexilhão-dourado (Limnoperna fortunei) foi introduzido acidentalmente na Bacia do Rio da Prata na década de 1990 através da água de lastro de navios cargueiros. Desde então, espalhou-se rapidamente pelos rios Paraná e Paraguai, encrustando-se em tubulações de usinas hidrelétricas, turbinas, cascos de embarcações e sobrecarregando espécies de bivalves nativos.",
      source: "IBAMA Espécies Exóticas Invasoras"
    },
    prompt: "O sucesso da invasão e a rápida expansão demográfica do mexilhão-dourado nos rios brasileiros são explicados principalmente pela:",
    options: [
      { id: "a", text: "ausência de predadores naturais adaptados e de parasitas reguladores no novo ecossistema, combinada com alta taxa reprodutiva e elevada plasticidade fenotípica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "capacidade exclusiva de realizar respiração anaeróbica produzindo oxigênio molecular na água.", isCorrect: false, distractorRationale: "Moluscos não produzem oxigênio; são consumidores dependentes de oxigênio dissolvido." },
      { id: "c", text: "simbiose mutualística obrigatória estabelecida com todas as espécies de peixes predadores da bacia.", isCorrect: false, distractorRationale: "O mexilhão-dourado compete com espécies nativas e não estabelece mutualismo protetor com peixes." },
      { id: "d", text: "resistência absoluta à dessecação, conseguindo voar entre bacias hidrográficas desconectadas.", isCorrect: false, distractorRationale: "Bivalves aquáticos não voam; sua dispersão passiva é favorecida pelo transporte náutico humano." },
      { id: "e", text: "imediata conversão das espécies nativas de moluscos em clones genéticos do mexilhão invasor.", isCorrect: false, distractorRationale: "A competição biológica não causa hibridação ou clonagem interespecífica com grupos nativos distintos." }
    ],
    detailedExplanation: {
      summary: "Espécies exóticas invasoras proliferam descontroladamente pela falta de inimigos naturais (predadores, parasitas ou patógenos específicos) e pela sobreposição de nichos com espécies nativas vulneráveis.",
      stepByStep: [
        "1. Água de lastro: principal vetor global de transporte transoceânico de organismos aquáticos exóticos.",
        "2. Espécie invasora: chega ao novo ambiente com nicho desocupado ou compete agressivamente por substrato e alimento filtrante.",
        "3. Sem predadores especializados locais -> curva de crescimento populacional explosiva.",
        "4. Consequências: entupimento de filtros em hidrelétricas (prejuízo econômico milionário) e sufocamento de moluscos nativos (prejuízo à biodiversidade)."
      ],
      coreConcept: "Bioinvasão e Dinâmica de Espécies Exóticas Invasoras",
      trapWarning: "Toda espécie exótica é invasora? NÃO! Ela só é chamada de INVASORA quando se estabelece, prolifera descontroladamente e causa danos ecológicos ou econômicos."
    },
    commonTraps: [
      "Achar que toda espécie exótica introduzida causa colapso ecológico automático",
      "Ignorar a importância da água de lastro como vetor de introdução"
    ],
    tags: ["especies-invasoras", "biodiversidade", "mexilhao-dourado", "agua-de-lastro"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ECO-020",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Ecologia",
    subtopic: "Acidificação dos Oceanos e Mudanças Climáticas",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A queima massiva de combustíveis fósseis elevou as concentrações atmosféricas globais de CO2. Cerca de 30% desse dióxido de carbono adicional é absorvido pelas águas superficiais dos oceanos, reagindo com a água: CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3-. O aumento da concentração de íons H+ diminui o pH marinho e reage com íons carbonato (CO3^2-), formando bicarbonato.",
      source: "Painel Intergovernamental sobre Mudanças Climáticas (IPCC)"
    },
    prompt: "O impacto ecológico mais severo da acidificação oceânica sobre a biodiversidade marinha consiste na:",
    options: [
      { id: "a", text: "dificuldade de calcificação e dissolução de exoesqueletos e conchas de carbonato de cálcio (CaCO3) em corais construtores de recifes, moluscos e plâncton calcário.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "elevação desmedida da salinidade dos oceanos, que transforma toda a água salgada em salmoura tóxica.", isCorrect: false, distractorRationale: "O pH cai ligeiramente (mais ácido), mas a salinidade média dos oceanos não sofre aumento drástico por essa reação." },
      { id: "c", text: "conversão de todos os peixes cartilaginosos em peixes ósseos por desidratação celular.", isCorrect: false, distractorRationale: "A classe dos Chondrichthyes (tubarões e raias) não muda de filogenia por acidificação aquática." },
      { id: "d", text: "extinção instantânea de todas as plantas terrestres devido à falta de chuva ácida nos continentes.", isCorrect: false, distractorRationale: "A acidificação marinha ocorre nas águas oceânicas e não interrompe a fotossíntese da flora continental." },
      { id: "e", text: "proliferação exclusiva de mamíferos marinhos com cascos de sílica cristalina.", isCorrect: false, distractorRationale: "Mamíferos marinhos (baleias, focas) não produzem exoesqueletos silicosos." }
    ],
    detailedExplanation: {
      summary: "O excesso de íons H+ sequestra o carbonato (CO3^2-), transformando-o em bicarbonato (HCO3-). Sem carbonato livre, corais e moluscos não conseguem precipitar CaCO3 para construir suas conchas e esqueletos, levando ao colapso dos recifes coralíneos.",
      stepByStep: [
        "1. CO2 atmosférico se dissolve na água e forma ácido carbônico (H2CO3).",
        "2. O ácido se dissocia liberando prótons H+ (o pH diminui).",
        "3. Os prótons H+ livres atacam os íons carbonato livres: H+ + CO3^2- -> HCO3-.",
        "4. Como o carbonato fica escasso, a taxa de dissolução de conchas e esqueletos de CaCO3 supera a taxa de precipitação.",
        "5. Resultado: branqueamento e esfarelamento de recifes de corais, berçários de mais de 25% da biodiversidade marinha do planeta."
      ],
      coreConcept: "Acidificação dos Oceanos e Calcificação Marinha",
      trapWarning: "No ENEM: Branqueamento de corais pode ser térmico (perda das zooxantelas pelo aquecimento global) OU químico estrutural (acidificação oceânica)."
    },
    commonTraps: [
      "Achar que o oceano fica ácido como vinagre (o pH cai de ~8,2 para ~8,0, mas isso representa um aumento de ~30% na concentração de H+ em escala logarítmica)",
      "Confundir branqueamento de corais com maré vermelha"
    ],
    tags: ["acidificacao-oceanos", "efeito-estufa", "recifes-corais", "quimica-ambiental"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

