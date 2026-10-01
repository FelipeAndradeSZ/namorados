/**
 * DESTINO 1000 — Banco Curado de Questões Contextualizadas ENEM
 * Rigor pedagógico: Enunciados contextualizados, distratores com análise cognitiva
 * e resolução detalhada passo a passo.
 */

export const INITIAL_QUESTIONS = [
  // ==========================================
  // 1. MATEMÁTICA E SUAS TECNOLOGIAS
  // ==========================================
  {
    id: "MAT-FIN-SP01",
    area: "matematica",
    competence: 1,
    skill: 3,
    topic: "Matemática Financeira",
    subtopic: "Aumentos e Descontos Sucessivos",
    difficulty: 3,
    cityId: "sao-paulo",
    context: {
      locationId: "b3-bolsa",
      supportText: "Durante o planejamento de hospedagem em São Paulo para um congresso médico, uma estudante verificou que uma diária de R$ 300,00 sofreu um acréscimo de 20% devido à alta temporada de eventos. Para clientes cadastrados no programa de fidelidade do hotel, era concedido um desconto de 20% aplicado diretamente sobre o novo valor reajustado.",
      source: "Contextualização Baseada na Habilidade 3 da Matriz do ENEM"
    },
    prompt: "Após o acréscimo de 20% seguido do desconto promocional de 20%, o valor final pago pela estudante por essa diária foi de:",
    options: [
      {
        id: "A",
        text: "R$ 300,00",
        isCorrect: false,
        distractorRationale: "Erro clássico de aditividade ingênua (+20% - 20% = 0%). O desconto de 20% incide sobre uma base maior (R$ 360,00), não sobre o valor original."
      },
      {
        id: "B",
        text: "R$ 288,00",
        isCorrect: true,
        distractorRationale: "Correto! R$ 300 × 1,20 = R$ 360. Em seguida, R$ 360 × 0,80 = R$ 288,00."
      },
      {
        id: "C",
        text: "R$ 312,00",
        isCorrect: false,
        distractorRationale: "Inversão na conta: aplicou o desconto primeiro e depois somou os 20% incorretamente."
      },
      {
        id: "D",
        text: "R$ 270,00",
        isCorrect: false,
        distractorRationale: "Confundiu a taxa de variação de 4% com uma dedução de 10% direta."
      },
      {
        id: "E",
        text: "R$ 240,00",
        isCorrect: false,
        distractorRationale: "Subtraiu 20% do valor inicial duas vezes em vez de calcular percentuais sucessivos."
      }
    ],
    detailedExplanation: {
      summary: "Aumentos e descontos sucessivos de mesma taxa percentual SEMPRE resultam em decréscimo final líquido.",
      stepByStep: [
        "1. Valor inicial: V0 = R$ 300,00.",
        "2. Acréscimo de 20%: Fator de aumento = (1 + 0,20) = 1,20. Novo valor = 300 × 1,20 = R$ 360,00.",
        "3. Desconto de 20% sobre o novo valor: Fator de desconto = (1 - 0,20) = 0,80.",
        "4. Valor final: V_final = 360 × 0,80 = R$ 288,00.",
        "5. Fator acumulado direto: 1,20 × 0,80 = 0,96 (ou seja, houve uma redução real de 4% em relação ao preço inicial: 300 × 0,96 = 288)."
      ],
      coreConcept: "Multiplicação de fatores multiplicativos: (1 + i1) * (1 - i2). Nunca some nem subtraia porcentagens com bases distintas!",
      trapWarning: "Cuidado com o viés psicológico de achar que +x% e -x% se anulam."
    },
    estimatedTimeSeconds: 120,
    tags: ["matematica-financeira", "porcentagem", "fatores-multiplicativos"]
  },
  {
    id: "MAT-GEO-BSB02",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria Espacial",
    subtopic: "Volumes e Projeção Ortogonal",
    difficulty: 3,
    cityId: "brasilia",
    context: {
      locationId: "catedral-brasilia",
      supportText: "Ao visitar os monumentos cívicos em Brasília, uma estudante deparou-se com uma estrutura cilíndrica de reserva de água com raio de base medindo 4 metros e altura de 10 metros. A companhia de saneamento pretende substituir esse reservatório por um novo reservatório também cilíndrico, com o dobro do raio da base, mantendo o mesmo volume total.",
      source: "Adaptado de padrões de Geometria Espacial do ENEM"
    },
    prompt: "Para que o novo reservatório tenha exatamente a mesma capacidade volumétrica do reservatório original, sua altura deverá ser de:",
    options: [
      {
        id: "A",
        text: "20 metros",
        isCorrect: false,
        distractorRationale: "Dobrou a altura em vez de reduzi-la, ignorando que o aumento do raio já quadruplica o volume."
      },
      {
        id: "B",
        text: "5 metros",
        isCorrect: false,
        distractorRationale: "Dividiu a altura por 2, esquecendo que na fórmula do volume do cilindro o raio é elevado ao quadrado."
      },
      {
        id: "C",
        text: "2,5 metros",
        isCorrect: true,
        distractorRationale: "Correto! Como o raio dobrou (fator 2), a área da base quadruplica (2² = 4). Para manter o mesmo volume, a altura deve ser dividida por 4 (10 / 4 = 2,5 m)."
      },
      {
        id: "D",
        text: "1,25 metros",
        isCorrect: false,
        distractorRationale: "Dividiu por 8 (2³), confundindo a escala de cilindro com o escalonamento isotrópico de sólidos tridimensionais semelhantes."
      },
      {
        id: "E",
        text: "10 metros",
        isCorrect: false,
        distractorRationale: "Manteve a mesma altura, o que aumentaria a capacidade volumétrica em quatro vezes."
      }
    ],
    detailedExplanation: {
      summary: "Volume do cilindro depende quadraticamente do raio e linearmente da altura: V = π·r²·h.",
      stepByStep: [
        "1. Volume inicial: V1 = π · (4)² · 10 = π · 16 · 10 = 160π m³.",
        "2. Novo raio: r2 = 2 · 4 = 8 m. Nova área da base = π · (8)² = 64π m².",
        "3. Igualando os volumes: V2 = V1 => 64π · h2 = 160π.",
        "4. Simplificando π: h2 = 160 / 64 = 2,5 metros.",
        "5. Raciocínio por proporcionalidade: duplicar uma dimensão na base quadruplica a área da base; logo, a altura deve ser reduzida à quarta parte."
      ],
      coreConcept: "Relação de proporcionalidade quadrática entre área e raio em superfícies circulares.",
      trapWarning: "Não confunda proporção linear (1D) com quadrática (2D) e cúbica (3D)."
    },
    estimatedTimeSeconds: 150,
    tags: ["geometria-espacial", "cilindro", "proporcionalidade"]
  },

  // ==========================================
  // 2. LINGUAGENS, CÓDIGOS E SUAS TECNOLOGIAS
  // ==========================================
  {
    id: "LIN-MOD-SP03",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Literatura Brasileira",
    subtopic: "Primeira Fase do Modernismo (1922-1930)",
    difficulty: 3,
    cityId: "sao-paulo",
    context: {
      locationId: "teatro-municipal",
      supportText: "Oswald de Andrade, no 'Manifesto Antropófago' (1928), proclama:\n\n'Só me interessa o que não é meu. Lei do homem. Lei do antropófago.\nContra as sublimações antagônicas trazidas nas caravelas.\nSó a Antropofagia nos une. Socialmente. Economicamente. Filosoficamente.\nTupi or not tupi, that is the question.'",
      source: "Revista de Antropofagia, Ano 1, n. 1, maio de 1928."
    },
    prompt: "A célebre paráfrase shakespeareana 'Tupi or not tupi, that is the question', expressa o cerne do projeto estético e cultural antropofágico modernista, que consistia em:",
    options: [
      {
        id: "A",
        text: "Rejeitar integralmente toda a cultura europeia ocidental em favor de um retorno ingênuo e exclusivo ao modo de vida pré-cabralino.",
        isCorrect: false,
        distractorRationale: "O Modernismo antropofágico não propunha rejeição total, mas sim assimilação crítica ('deglutição')."
      },
      {
        id: "B",
        text: "Deglutir e assimilar criticamente as influências estrangeiras, refundindo-as na matriz identitária brasileira para produzir uma arte original e autônoma.",
        isCorrect: true,
        distractorRationale: "Correto! A metáfora antropofágica propõe devorar a técnica e a cultura externa para transformá-las em matéria-prima de uma nova identidade nacional."
      },
      {
        id: "C",
        text: "Copiar com fidelidade os modelos literários do teatro elisabetano inglês para legitimar a arte nacional perante os críticos de Paris e Londres.",
        isCorrect: false,
        distractorRationale: "Copiar seria oposto ao Modernismo, que combatia ferrenhamente o beletrismo e a subserviência colonial."
      },
      {
        id: "D",
        text: "Substituir a língua portuguesa oficial por vocábulos da família tupi-guarani em todos os documentos e publicações do país.",
        isCorrect: false,
        distractorRationale: "Confusão entre a pesquisa lírica de linguagem coloquial e um falso projeto linguístico literal de substituição idiomática."
      },
      {
        id: "E",
        text: "Exaltar o nacionalismo ufanista romântico do século XIX, restabelecendo o índio idealizado como herói clássico nos moldes de José de Alencar.",
        isCorrect: false,
        distractorRationale: "Os modernistas parodiavam e criticavam a visão romântica idealizada do índio, adotando tom irônico e carnavalesco."
      }
    ],
    detailedExplanation: {
      summary: "A Antropofagia de Oswald de Andrade propõe a deglutição da cultura do colonizador para ressignificá-la a partir da realidade brasileira.",
      stepByStep: [
        "1. Contexto: Semana de Arte Moderna de 1922 e a Revista de Antropofagia (1928).",
        "2. A frase 'Tupi or not tupi' funde o canibalismo ritual dos Tupinambás com a fala existencial de Hamlet ('To be or not to be').",
        "3. Ao misturar o indígena brasileiro com o ícone máximo do cânone britânico, Oswald demonstra na prática a digestão cultural antropofágica.",
        "4. A arte brasileira não deve nem imitar cegamente o estrangeiro, nem se isolar num nativismo ingênuo: deve devorar o outro para nutrir a própria originalidade."
      ],
      coreConcept: "Metáfora da Antropofagia cultural modernista: devoração crítica do estrangeiro.",
      trapWarning: "Cuidado com alternativas radicais que usem 'rejeitar integralmente' ou 'retorno ingênuo ao passado'."
    },
    estimatedTimeSeconds: 130,
    tags: ["modernismo", "antropofagia", "literatura", "oswald-de-andrade"]
  },

  // ==========================================
  // 3. CIÊNCIAS HUMANAS E SUAS TECNOLOGIAS
  // ==========================================
  {
    id: "HUM-GEO-VIX04",
    area: "humanas",
    competence: 6,
    skill: 26,
    topic: "Geografia e Meio Ambiente",
    subtopic: "Ecossistemas Costeiros e Manguezais",
    difficulty: 3,
    cityId: "vitoria",
    context: {
      locationId: "praia-camburi",
      supportText: "A Baía de Vitória abriga um dos maiores manguezais em área urbana do Brasil. Trata-se de um ecossistema de transição entre o ambiente terrestre e o marinho, caracterizado por solo inconsolidado, salinidade variável e vegetação halófita dotada de pneumatóforos (raízes respiratórias).",
      source: "Atlas das Áreas Protegidas do Espírito Santo / IEMA"
    },
    prompt: "Do ponto de vista ecológico e socioeconômico para as cidades litorâneas, a principal importância dos manguezais reside no fato de funcionarem como:",
    options: [
      {
        id: "A",
        text: "Barreiras impermeáveis que evitam completamente o fenômeno natural das marés oceânicas.",
        isCorrect: false,
        distractorRationale: "O manguezal não impede as marés; ele convive com a pulsação diária das marés altas e baixas."
      },
      {
        id: "B",
        text: "Berçários biológicos para diversas espécies marinhas e zonas amortecedoras contra a erosão costeira provocada por ressacas.",
        isCorrect: true,
        distractorRationale: "Correto! As raízes entrelaçadas do mangue retêm sedimentos, protegem a costa de ressacas e abrigam larvas de crustáceos e peixes comerciais."
      },
      {
        id: "C",
        text: "Locais adequados para a drenagem urbana e aterro de resíduos sólidos industriais devido à acidez do solo.",
        isCorrect: false,
        distractorRationale: "Aterros e lixo em manguezais constituem crimes ambientais graves que degradam o bioma."
      },
      {
        id: "D",
        text: "Solos de elevada fertilidade química propícios à monocultura de grãos em larga escala para exportação.",
        isCorrect: false,
        distractorRationale: "O solo do mangue é lodoso, salino e anóxico, totalmente inadequado para agricultura de grãos."
      },
      {
        id: "E",
        text: "Áreas desprovidas de microrganismos decompositores devido à elevada concentração de cloreto de sódio nas águas estuarinas.",
        isCorrect: false,
        distractorRationale: "Pelo contrário: o manguezal é riquíssimo em bactérias decompositoras adaptadas, que formam a base da cadeia alimentar estuarina."
      }
    ],
    detailedExplanation: {
      summary: "Manguezais são berçários naturais da vida marinha e fundamentais para a proteção física do litoral contra erosão.",
      stepByStep: [
        "1. Definição: Ecossistema litorâneo estuarino com encontro de água doce e salgada.",
        "2. Função Biológica: Berçário reprodutivo para caranguejos, siris, peixes e moluscos.",
        "3. Função Física: As raízes escoras e pneumatóforos dissipam a energia das ondas oceânicas e fixam os sedimentos lodosos, evitando que a orla costeira seja engolida pela erosão.",
        "4. Função Climática: Alta capacidade de estocagem de carbono azul (carbon sink)."
      ],
      coreConcept: "Serviços ecossistêmicos dos manguezais: retenção de sedimentos, berçário reprodutivo e filtro biológico.",
      trapWarning: "Lembre-se de que o mangue é um ecossistema com proteção legal permanente pela legislação ambiental brasileira (APP)."
    },
    estimatedTimeSeconds: 110,
    tags: ["geografia", "manguezal", "ecossistemas-litoraneos", "espirito-santo"]
  },

  // ==========================================
  // 4. CIÊNCIAS DA NATUREZA E SUAS TECNOLOGIAS
  // ==========================================
  {
    id: "NAT-BIO-AM05",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Ecologia",
    subtopic: "Ciclos Biogeoquímicos e Rios Voadores",
    difficulty: 3,
    cityId: "manaus",
    context: {
      locationId: "torre-atto",
      supportText: "Dados coletados pela Torre de Observação da Amazônia (ATTO), nas proximidades de Manaus, demonstram que uma única árvore de grande porte da floresta tropical pode bombear mais de 1.000 litros de água por dia para a atmosfera na forma de vapor d'água invisível. Esse fenômeno colossal de evapotranspiração alimenta as correntes de umidade conhecidas como 'Rios Voadores'.",
      source: "Instituto Nacional de Pesquisas da Amazônia (INPA)."
    },
    prompt: "A destruição da cobertura vegetal contínua na Amazônia compromete o fluxo dos Rios Voadores e produz como consequência direta nas regiões Centro-Oeste e Sudeste do Brasil:",
    options: [
      {
        id: "A",
        text: "Aumento descontrolado da taxa pluviométrica invernal no semiárido nordestino.",
        isCorrect: false,
        distractorRationale: "Os rios voadores se direcionam para o Centro-Oeste/Sudeste e bacia do Prata, não promovendo aumento de chuvas no semiárido."
      },
      {
        id: "B",
        text: "Redução no volume de chuvas, com potencial esvaziamento de reservatórios hídricos e prejuízos às safras agrícolas.",
        isCorrect: true,
        distractorRationale: "Correto! Os ventos alísios carregam a umidade amazônica barrada pelos Andes em direção ao Centro-Oeste e Sudeste; sem árvores, o transporte de vapor colapsa, provocando estiagens severas."
      },
      {
        id: "C",
        text: "Acidificação imediata dos aquíferos subterrâneos pela ausência de taninos nas folhas caídas.",
        isCorrect: false,
        distractorRationale: "Invenção sem fundamento biogeoquímico para a dinâmica de águas profundas no Sudeste."
      },
      {
        id: "D",
        text: "Inversão térmica permanente sobre a Cordilheira dos Andes com extinção das geleiras tropicais.",
        isCorrect: false,
        distractorRationale: "Inversão térmica é fenômeno local de estagnação de ar frio, não gerado à distância por essa dinâmica."
      },
      {
        id: "E",
        text: "Resfriamento térmico generalizado da superfície do Oceano Atlântico equatorial.",
        isCorrect: false,
        distractorRationale: "A diminuição da floresta tende a elevar as temperaturas locais e alterar o balanço de calor, sem resfriar o Atlântico."
      }
    ],
    detailedExplanation: {
      summary: "A evapotranspiração da floresta amazônica é o motor hídrico que irriga as lavouras e abastece os reservatórios do Sudeste brasileiro.",
      stepByStep: [
        "1. Os ventos alísios trazem umidade do Oceano Atlântico tropical em direção à Amazônia.",
        "2. A densa cobertura vegetal promove intensa evapotranspiração através dos estômatos foliares, recarregando a atmosfera com bilhões de toneladas de vapor.",
        "3. Ao encontrar a barreira física da Cordilheira dos Andes a oeste, essa massa de ar úmido é defletida para o sul e sudeste do continente.",
        "4. O desmatamento quebra essa bomba de umidade biótica, gerando secas prolongadas no Centro-Sul brasileiro, impactando geração hidrelétrica e agricultura."
      ],
      coreConcept: "Evapotranspiração florestal e teleconexões climáticas continentais (Rios Voadores).",
      trapWarning: "O desmatamento na Amazônia não tem impacto apenas local; afeta o ciclo das chuvas de todo o continente sul-americano."
    },
    estimatedTimeSeconds: 120,
    tags: ["ecologia", "amazonia", "rios-voadores", "clima"]
  },

  // ==========================================
  // 5. REDAÇÃO — COMPETÊNCIA 5 (PROPOSTA)
  // ==========================================
  {
    id: "RED-COMP5-01",
    area: "redacao",
    competence: 5,
    skill: 5,
    topic: "Proposta de Intervenção",
    subtopic: "Os 5 Elementos Obrigatórios da Grade do INEP",
    difficulty: 4,
    cityId: "vitoria",
    context: {
      locationId: "convento-penha",
      supportText: "Considere o seguinte trecho de proposta de intervenção elaborado por um candidato:\n\n'Portanto, medidas são urgentes para combater o preconceito linguístico. Para tanto, o Ministério da Educação (MEC) deve promover campanhas pedagógicas em escolas e redes sociais, por meio de videoaulas e cartilhas didáticas, a fim de conscientizar os estudantes sobre a legitimidade das variações regionais do português, desmistificando o falso conceito de erro linguístico.'",
      source: "Manual Oficial de Redação do ENEM / Guia do Participante INEP"
    },
    prompt: "Analisando o período acima à luz da Grade Oficial de Correção da Competência 5 do ENEM, constata-se que a proposta:",
    options: [
      {
        id: "A",
        text: "É incompleta, pois não apresentou o Agente Social responsável pela ação interventiva.",
        isCorrect: false,
        distractorRationale: "O agente social está claramente explicitado: 'o Ministério da Educação (MEC)'."
      },
      {
        id: "B",
        text: "Contém todos os 5 elementos válidos: Agente, Ação, Meio/Modo, Efeito e Detalhamento, alcançando os 200 pontos integrais na Competência 5.",
        isCorrect: true,
        distractorRationale: "Correto! Agente: MEC; Ação: promover campanhas; Meio/Modo: por meio de videoaulas e cartilhas; Efeito: a fim de conscientizar; Detalhamento: 'desmistificando o falso conceito de erro linguístico' (detalhou o efeito)."
      },
      {
        id: "C",
        text: "Zera a competência por desrespeitar os Direitos Humanos universais ao propor censura aos dialetos.",
        isCorrect: false,
        distractorRationale: "A proposta faz o oposto: valoriza a diversidade e defende os direitos linguísticos."
      },
      {
        id: "D",
        text: "Apresenta apenas a Ação e o Efeito, omitindo o Meio ou Modo de execução da intervenção.",
        isCorrect: false,
        distractorRationale: "O meio/modo está presente com o conectivo típico: 'por meio de videoaulas e cartilhas didáticas'."
      },
      {
        id: "E",
        text: "É inválida porque o Ministério da Educação não tem competência institucional para atuar em redes sociais.",
        isCorrect: false,
        distractorRationale: "Ministérios públicos realizam rotineiramente campanhas educativas nos meios digitais."
      }
    ],
    detailedExplanation: {
      summary: "A nota 200 na C5 do ENEM exige cinco elementos completos e articulados.",
      stepByStep: [
        "1. AGENTE: 'o Ministério da Educação (MEC)' -> Quem executa?",
        "2. AÇÃO: 'deve promover campanhas pedagógicas em escolas e redes sociais' -> O que será feito?",
        "3. MEIO / MODO: 'por meio de videoaulas e cartilhas didáticas' -> Como será feito?",
        "4. EFEITO / FINALIDADE: 'a fim de conscientizar os estudantes sobre a legitimidade das variações regionais do português' -> Para que será feito?",
        "5. DETALHAMENTO: 'desmistificando o falso conceito de erro linguístico' -> Explicação acessória que aprofunda e detalha a finalidade."
      ],
      coreConcept: "A regra de ouro da C5: Agente + Ação + Modo + Finalidade + Detalhamento de um dos elementos.",
      trapWarning: "Muitos candidatos perdem 40 pontos na C5 por esquecer de detalhar um dos 4 elementos principais com uma oração explicativa ou exemplo concreto."
    },
    estimatedTimeSeconds: 140,
    tags: ["redacao", "competencia-5", "proposta-de-intervencao", "inep"]
  }
];
