export const QUESTIONS_VANGUARDAS_ARTES = [
  {
    id: "LIN-ART-001",
    area: "linguagens",
    competence: 4,
    skill: 12,
    topic: "Artes e Vanguardas",
    subtopic: "Vanguardas Europeias: O Dadaísmo e a Desconstrução da Arte",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1917, Marcel Duchamp enviou para uma exposição em Nova York um mictório comum de porcelana virado de cabeça para baixo, assinado com o pseudônimo 'R. Mutt 1917' e intitulado 'A Fonte'. A obra inaugurou o conceito de 'ready-made'.",
      source: "ENEM Artes Visuais"
    },
    prompt: "Com esse gesto vanguardista, o objetivo primordial do artista não era exibir habilidade técnica manual ou beleza canônica, mas sim:",
    options: [
      { id: "a", text: "Questionar o próprio estatuto do que é considerado arte, desvinculando-a da técnica artesanal e deslocando o valor estético para a ideia e o conceito propostos pelo artista.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Defender o retorno imediato aos padrões renascentistas de proporção áurea e mimese realista da natureza.", isCorrect: false, distractorRationale: "Duchamp é o ápice da ruptura com o classicismo e o Renascimento." },
      { id: "c", text: "Promover a comercialização em massa de artigos de encanamento sanitário nas galerias de arte burguesas.", isCorrect: false, distractorRationale: "A intenção era crítica e anti-mercantilista, não comercial." },
      { id: "d", text: "Ilustrar a velocidade das máquinas modernas e o heroísmo belicista pregado pelo Futurismo italiano.", isCorrect: false, distractorRationale: "Isso define o Futurismo de Marinetti, não o Dadaísmo iconoclasta de Duchamp." },
      { id: "e", text: "Copiar com extrema perfeição visual as obras esculpidas em mármore na Grécia Antiga.", isCorrect: false, distractorRationale: "O mictório era um objeto industrial pré-fabricado, não uma escultura clássica." }
    ],
    detailedExplanation: {
      summary: "O Dadaísmo e os ready-mades de Duchamp inauguraram a arte conceitual, onde a atitude e o questionamento filosófico sobre 'o que é arte' importam mais do que a técnica de pintura ou escultura.",
      stepByStep: [
        "Ready-made: apropriação de um objeto cotidiano industrial retirado de seu contexto utilitário e inserido em um espaço artístico com uma nova ideia.",
        "A arte deixa de ser apenas habilidade visual ('arte retiniana') e passa a ser reflexão intelectual e crítica institucional."
      ],
      coreConcept: "Dadaísmo, Ready-Made e a Emergência da Arte Conceitual",
      trapWarning: "No ENEM, obras de arte contemporâneas e de vanguarda sempre exigem interpretação da INTENÇÃO crítica, nunca julgamento de gosto pessoal ('bonito' ou 'feio')."
    },
    commonTraps: ["julgar a obra por critérios de beleza tradicional"],
    tags: ["vanguardas", "dadaismo", "duchamp", "arte conceitual"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-ART-002",
    area: "linguagens",
    competence: 4,
    skill: 14,
    topic: "Artes e Vanguardas",
    subtopic: "Modernismo Brasileiro e o Manifesto Antropófago",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "'Só a Antropofagia nos une. Socialmente. Economicamente. Filosoficamente. Única lei do mundo. (...) Tupi or not tupi that is the question. (...) Nunca fomos catequizados. Fizemos foi Carnaval.' — Oswald de Andrade, Manifesto Antropófago (1928).",
      source: "Revista de Antropofagia, 1928"
    },
    prompt: "A metáfora da 'Antropofagia' formulada pelo modernista Oswald de Andrade propunha para a cultura e a arte brasileira:",
    options: [
      { id: "a", text: "A deglutição crítica das influências culturais e estéticas estrangeiras para transformá-las e recriá-las em uma arte autenticamente brasileira, livre de subserviência colonial.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "O isolamento cultural total do Brasil, proibindo qualquer contato com vanguardas ou línguas estrangeiras.", isCorrect: false, distractorRationale: "A Antropofagia não rejeita o estrangeiro; ela o DEVORA e processa." },
      { id: "c", text: "A cópia literal dos manifestos literários parisienses sem nenhuma alteração temática nacional.", isCorrect: false, distractorRationale: "Oswald lutava justamente contra a cópia submissa do modelo europeu." },
      { id: "d", text: "A valorização exclusiva do período barroco colonial português como ápice estético nacional.", isCorrect: false, distractorRationale: "O Modernismo rompeu radicalmente com a solenidade e o academicismo colonial." },
      { id: "e", text: "O incentivo à prática literal de canibalismo como protesto político contra o governo paulista.", isCorrect: false, distractorRationale: "A antropofagia de Oswald é estritamente uma metáfora filosófica e artística." }
    ],
    detailedExplanation: {
      summary: "Oswald de Andrade utilizou o ritual antropofágico dos índios tupinambás (comer o inimigo valente para absorver suas virtudes) como metáfora cultural para a identidade brasileira.",
      stepByStep: [
        "Ato antropofágico cultural: devorar a técnica e a vanguarda europeia, combiná-la com o elemento indígena, negro e popular, e produzir uma arte original e genuinamente brasileira.",
        "Paródia com Shakespeare: 'Tupi or not tupi' sintetiza a união entre a erudição ocidental e a raiz nativa brasileira."
      ],
      coreConcept: "Movimento Antropofágico e a Construção da Identidade Nacional no Modernismo",
      trapWarning: "Lembre-se: Antropofagia NÃO é ufanismo cego nem xenofobia; é apropriação crítica e híbrida."
    },
    commonTraps: ["confundir antropofagia com isolacionismo cultural"],
    tags: ["modernismo", "antropofagia", "oswald de andrade", "literatura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
