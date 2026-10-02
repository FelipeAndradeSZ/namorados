/**
 * BANCO DE QUESTÕES DESTINO 1000
 * Módulo: Língua Estrangeira Moderna - Inglês Instrumental no ENEM
 * Área: Linguagens, Códigos e suas Tecnologias (Língua Inglesa)
 * Total: 25 Questões originais e contextualizadas padrão ENEM
 * Competência: C2 | Habilidades: H5, H6, H7, H8
 */

export const QUESTIONS_INGLES_INSTRUMENTAL = [
  {
    id: "LIN-ING-001",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Leitura Instrumental - Campanhas de Saúde Pública",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Sitting is the new smoking. Studies show that prolonged sedentary behavior increases the risk of cardiovascular disease, diabetes, and premature mortality, even among individuals who engage in regular exercise. Simple adjustments, such as taking short standing breaks every thirty minutes, can significantly mitigate these physiological hazards.\"",
      source: "World Health Organization (WHO). Public Health Alert Bulletin, 2024."
    },
    prompt: "A expressão metafórica 'Sitting is the new smoking' é utilizada na campanha de saúde pública para enfatizar que",
    options: [
      {
        id: "a",
        text: "o hábito sedentário crônico acarreta danos graves à saúde equivalentes aos prejuízos causados pelo tabagismo prolongado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A metáfora compara o sedentarismo moderno ao tabagismo ('the new smoking') para alertar sobre a gravidade dos riscos cardiovasculares e de mortalidade precoce decorrentes de passar horas sentado."
      },
      {
        id: "b",
        text: "a prática de fumar cigarros em locais de trabalho foi integralmente substituída pelo uso de cadeiras ergonômicas.",
        isCorrect: false,
        distractorRationale: "A frase não se refere à substituição literal de um hábito em escritórios, mas ao nível comparável de perigo à saúde."
      },
      {
        id: "c",
        text: "os exercícios físicos regulares neutralizam completamente qualquer impacto biológico negativo do sedentarismo diário.",
        isCorrect: false,
        distractorRationale: "O texto afirma explicitamente o oposto: 'even among individuals who engage in regular exercise' (mesmo entre aqueles que se exercitam)."
      },
      {
        id: "d",
        text: "as pausas curtas no trabalho aumentam a fadiga muscular e aceleram o desenvolvimento de diabetes.",
        isCorrect: false,
        distractorRationale: "O texto afirma que as pausas curtas em pé atenuam ('mitigate') os riscos fisiológicos."
      },
      {
        id: "e",
        text: "o consumo de tabaco em ambientes fechados foi considerado inofensivo por estudos epidemiológicos recentes.",
        isCorrect: false,
        distractorRationale: "O tabagismo continua sendo tomado como parâmetro consagrado de alta nocividade à saúde humana."
      }
    ],
    detailedExplanation: {
      summary: "A metáfora equipara o comportamento sedentário prolongado aos perigos do tabagismo para mobilizar a conscientização pública.",
      stepByStep: [
        "1. Leitura do trecho: 'Sitting is the new smoking' (Ficar sentado é o novo fumar).",
        "2. Identificação da estratégia retórica: O tabagismo é universalmente reconhecido como fator de risco letal.",
        "3. Ao rotular o sedentarismo como 'the new smoking', a OMS busca chocar o leitor e conscientizá-lo de que ficar inativo horas seguidas é tão nocivo quanto fumar.",
        "4. A alternativa a traduz com exatidão esse sentido analógico."
      ],
      coreConcept: "Inglês no ENEM: Foco em leitura instrumental, identificação de metáforas persuasivas e alcance de objetivos comunicativos em campanhas de conscientização.",
      trapWarning: "Atenção ao 'even among' (mesmo entre): o texto ressalta que até quem treina sofre prejuízos se passar o resto do dia sentado."
    },
    tags: ["linguagens", "ingles", "leitura-instrumental", "saude-publica", "metafora"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-002",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Conectivos Argumentativos - Relação de Contraste",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Artificial intelligence algorithms can process massive clinical datasets with unprecedented accuracy. However, they lack the empathetic understanding and ethical discernment required for compassionate patient care, highlighting the irreplaceable role of human healthcare professionals.\"",
      source: "Journal of Medical Ethics and Digital Technologies, 2023."
    },
    prompt: "No texto científico, o conectivo 'However' desempenha o papel discursivo de",
    options: [
      {
        id: "a",
        text: "introduzir uma limitação ética e humana fundamental que contrasta com a alta eficiência computacional da inteligência artificial.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'However' (no entanto, porém) é um operador adversativo que contrapõe a capacidade de processamento de dados da IA à sua incapacidade de discernimento ético e empatia humana."
      },
      {
        id: "b",
        text: "apresentar um exemplo prático de substituição total de médicos por robôs autônomos em cirurgias.",
        isCorrect: false,
        distractorRationale: "O texto defende a irrevogabilidade do médico humano ('irreplaceable role of human healthcare professionals')."
      },
      {
        id: "c",
        text: "reforçar a velocidade do processamento digital sem expressar qualquer ressalva ou oposição.",
        isCorrect: false,
        distractorRationale: "'However' marca estritamente oposição e ressalva, e não mera continuidade aditiva."
      },
      {
        id: "d",
        text: "concluir que o uso de algoritmos diagnósticos deve ser banido imediatamente dos hospitais.",
        isCorrect: false,
        distractorRationale: "O texto reconhece a precisão sem precedentes ('unprecedented accuracy') das ferramentas de IA."
      },
      {
        id: "e",
        text: "estabelecer uma relação de causalidade direta entre empatia médica e custos hospitalares.",
        isCorrect: false,
        distractorRationale: "Não há discussão sobre finanças ou custos na passagem."
      }
    ],
    detailedExplanation: {
      summary: "O conectivo 'however' introduz uma contraposição essencial entre capacidade técnica e julgamento moral.",
      stepByStep: [
        "1. Primeira oração: IA processa grandes volumes de dados com alta acurácia (ponto forte).",
        "2. Conectivo: 'However' (No entanto / Contudo).",
        "3. Segunda oração: Falta empatia e discernimento ético (ponto fraco).",
        "4. A função de 'however' é indicar oposição entre a competência analítica da máquina e a insubstituível dimensão humanizada do profissional de saúde."
      ],
      coreConcept: "Conectivos de Oposição em Inglês: however, nevertheless, nonetheless, yet, but, although, despite. São os mais cobrados na prova de Língua Estrangeira do ENEM.",
      trapWarning: "Lembre-se: 'however' pontua quebra de expectativa ou contraste, equivalente a 'contudo' e 'no entanto' em português."
    },
    tags: ["linguagens", "ingles", "conectivos", "however", "inteligencia-artificial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-003",
    area: "linguagens",
    competence: 2,
    skill: 5,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Tirinhas e Humor Crítico - Tecnologia e Solidão",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma tira satírica, dois jovens sentados lado a lado em um banco de praça olham fixamente para as telas de seus smartphones. Um deles digita freneticamente e comenta sem levantar os olhos: \"I have never felt so connected to the entire world!\", enquanto a tela exibe uma notificação com centenas de mensagens de pessoas anônimas em redes sociais.",
      source: "Cartum contemporâneo sobre mídias digitais e comportamento social, 2023."
    },
    prompt: "O efeito de humor e a crítica social da tirinha decorrem da contradição evidente entre a",
    options: [
      {
        id: "a",
        text: "ilusão de conexão global propiciada pelas redes sociais e o isolamento físico interpessoal concreto dos indivíduos na realidade imediata.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A sátira explora a ironia da personagem afirmar sentir-se 'mais conectada do que nunca ao mundo' enquanto ignora completamente o ser humano ao seu lado na praça."
      },
      {
        id: "b",
        text: "lentidão das conexões de fibra óptica modernas e a agilidade das cartas postais manuscritas.",
        isCorrect: false,
        distractorRationale: "A tirinha retrata conexões digitais hipervelozes, sem menção nostálgica a correspondência por cartas."
      },
      {
        id: "c",
        text: "proibição legal do uso de aparelhos celulares em espaços públicos urbanos.",
        isCorrect: false,
        distractorRationale: "Não há restrições legais ao uso de celulares retratadas na imagem."
      },
      {
        id: "d",
        text: "falta de habilidade motora dos adolescentes para digitar mensagens de texto com precisão.",
        isCorrect: false,
        distractorRationale: "O jovem digita freneticamente, revelando pleno domínio da tecnologia."
      },
      {
        id: "e",
        text: "necessidade imperiosa de aprender múltiplos idiomas para interagir em comunidades virtuais.",
        isCorrect: false,
        distractorRationale: "O foco da crítica reside no distanciamento afetivo presencial, e não em barreiras idiomáticas."
      }
    ],
    detailedExplanation: {
      summary: "A charge explora a ironia clássica da sociedade hiperconectada: hiperconectividade virtual versus isolamento presencial.",
      stepByStep: [
        "1. Linguagem verbal: 'I have never felt so connected to the entire world!' (Nunca me senti tão conectado ao mundo inteiro!).",
        "2. Linguagem não verbal: Dois jovens lado a lado que não se olham nem conversam pessoalmente.",
        "3. Conexão semântica: O choque entre o texto e a imagem produz ironia.",
        "4. A crítica problematiza o paradoxo da solidão digital contemporânea (tema recorrente do sociólogo Zygmunt Bauman)."
      ],
      coreConcept: "Textos Multissemióticos em Inglês: Interpretação conjunta de imagem, fala do personagem e contexto sociológico no padrão ENEM.",
      trapWarning: "No ENEM, as questões com cartuns em inglês exigem interpretar a relação entre o texto verbal e a linguagem visual/gestual."
    },
    tags: ["linguagens", "ingles", "cartum", "redes-sociais", "ironia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-004",
    area: "linguagens",
    competence: 2,
    skill: 6,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Falsos Cognatos (False Friends) e Vocabulário Contextual",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"The candidate claimed to have graduated from a prestigious medical school; actually, official records revealed that he had merely attended a two-week introductory workshop, pushing the board to launch an immediate investigation.\"",
      source: "Health Oversight Committee Press Release, 2024."
    },
    prompt: "No contexto do comunicado, a palavra 'actually' expressa o sentido de",
    options: [
      {
        id: "a",
        text: "'na realidade' ou 'de fato', contrastando a alegação falsa com o fato verídico comprovado pelos registros.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Actually' é um dos falsos cognatos mais conhecidos em língua inglesa: não significa 'atualmente' (que seria currently / nowadays), mas sim 'na verdade', 'de fato', 'realmente'."
      },
      {
        id: "b",
        text: "'atualmente', indicando a posição profissional contemporânea ocupada pelo médico.",
        isCorrect: false,
        distractorRationale: "Erro clássico de tradução literal por falso cognato. 'Atualmente' traduz-se por 'currently'."
      },
      {
        id: "c",
        text: "'provavelmente', denotando uma suspeita vaga que carece de comprovação documental.",
        isCorrect: false,
        distractorRationale: "'Actually' é afirmativo e categórico, e não modalizador de incerteza ('probably')."
      },
      {
        id: "d",
        text: "'antigamente', situando os registros acadêmicos no início do século passado.",
        isCorrect: false,
        distractorRationale: "'Antigamente' em inglês corresponde a 'formerly' ou 'in the past'."
      },
      {
        id: "e",
        text: "'rapidamente', enfatizando a celeridade com que a universidade enviou o diploma.",
        isCorrect: false,
        distractorRationale: "'Rapidamente' traduz-se por 'quickly' ou 'promptly'."
      }
    ],
    detailedExplanation: {
      summary: "'Actually' é falso amigo de 'atualmente': significa 'na realidade' ou 'de fato'.",
      stepByStep: [
        "1. O candidato afirmou ter se formado em escola médica de prestígio.",
        "2. A palavra 'actually' introduz a verdade revelada pelos documentos oficiais: ele apenas participou de um minicurso de duas semanas.",
        "3. Em inglês: 'Actually' = in fact, really (na verdade, de fato).",
        "4. A palavra que significa 'atualmente' em inglês é 'currently' ou 'nowadays'.",
        "5. Portanto, 'actually' contrapõe a alegação enganosa à verdade factual."
      ],
      coreConcept: "Falsos Cognatos no ENEM: Actually (na verdade / de fato); Currently (atualmente); Pretend (fingir); Intend (pretender); Notice (notar); Comprehend (compreender).",
      trapWarning: "Cuidado absoluto com 'actually'! Jamais traduza por 'atualmente'."
    },
    tags: ["linguagens", "ingles", "false-friends", "actually", "vocabulario"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-005",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Divulgação Científica e Emergência Climática",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Glaciers worldwide are shrinking at an accelerating pace. This unprecedented melting not only threatens the freshwater supply for millions of downstream residents who rely on seasonal runoff, but also accelerates global sea level rise, increasing the frequency of catastrophic coastal storm surges.\"",
      source: "Intergovernmental Panel on Climate Change (IPCC). Special Report on the Ocean and Cryosphere, 2023."
    },
    prompt: "De acordo com o relatório do IPCC, o derretimento acelerado das geleiras apresenta consequências graves porque",
    options: [
      {
        id: "a",
        text: "compromete o abastecimento de água potável para populações rio abaixo e eleva os riscos de inundações costeiras severas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O texto elenca duas ameaças diretas: ameaça ao suprimento de água doce ('freshwater supply') para comunidades que dependem do degelo sazonal e elevação do nível do mar com tempestades costeiras destrutivas ('storm surges')."
      },
      {
        id: "b",
        text: "aumenta os estoques de água subterrânea em áreas desérticas continentais.",
        isCorrect: false,
        distractorRationale: "O texto trata de água doce de rios superficiais montanhosos e nível do mar, sem menção a aquíferos desérticos."
      },
      {
        id: "c",
        text: "elimina completamente o risco de erosão marinha ao longo das praias tropicais.",
        isCorrect: false,
        distractorRationale: "A subida dos mares agrava drasticamente a erosão e inundações costeiras."
      },
      {
        id: "d",
        text: "estimula o surgimento de novas fontes de energia fóssil sob as calotas polares.",
        isCorrect: false,
        distractorRationale: "O foco do excerto é a crise ecológica e hídrica, sem apologia à exploração de combustíveis fósseis."
      },
      {
        id: "e",
        text: "restringe os prejuízos ambientais às espécies marinhas de águas profundas do Ártico.",
        isCorrect: false,
        distractorRationale: "O impacto afeta milhões de seres humanos residentes ('millions of downstream residents')."
      }
    ],
    detailedExplanation: {
      summary: "O texto alerta para o duplo impacto do degelo: escassez de água doce para consumo humano e inundações em áreas costeiras.",
      stepByStep: [
        "1. 'shrinking at an accelerating pace': encolhendo em ritmo acelerado.",
        "2. 'threatens freshwater supply for millions': ameaça o suprimento de água potável de milhões de pessoas que dependem do escoamento sazonal ('seasonal runoff').",
        "3. 'accelerates sea level rise': acelera a subida do nível do mar com tempestades costeiras catastróficas ('coastal storm surges').",
        "4. A alternativa a sintetiza precisamente os dois desdobramentos apontados pelo painel climático."
      ],
      coreConcept: "Leitura Instrumental de Textos Científicos: Identificação de causas e impactos ambientais diretos em publicações de órgãos internacionais.",
      trapWarning: "'Downstream' significa rio abaixo / foz / curso inferior de uma bacia hidrográfica."
    },
    tags: ["linguagens", "ingles", "clima", "ipcc", "meio-ambiente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-006",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Conectivos Argumentativos - Concessão com 'Despite'",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Despite substantial investments in agricultural biotechnology over the past two decades, chronic malnutrition and food insecurity continue to plague vulnerable communities across sub-Saharan Africa, proving that technological advances alone cannot solve structural problems rooted in poverty, conflict, and inequality.\"",
      source: "Food and Agriculture Organization (FAO). State of Food Security Report, 2024."
    },
    prompt: "A oração introduzida pela preposição 'Despite' estabelece uma relação discursiva que serve para evidenciar que",
    options: [
      {
        id: "a",
        text: "a inovação tecnológica agrícola, embora relevante, mostrou-se insuficiente para erradicar a fome sem o enfrentamento de fatores sociais e políticos estruturais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Despite' (apesar de) introduz uma relação de concessão: a despeito dos vultosos investimentos tecnológicos, a fome persiste porque suas raízes residem na pobreza e em conflitos sociais."
      },
      {
        id: "b",
        text: "o investimento financeiro em biotecnologia gerou o enriquecimento imediato de todos os camponeses do continente africano.",
        isCorrect: false,
        distractorRationale: "O texto denuncia a persistência crônica da fome e da miséria nas comunidades vulneráveis."
      },
      {
        id: "c",
        text: "as guerras regionais foram erradicadas graças ao aumento na produtividade de grãos transgênicos.",
        isCorrect: false,
        distractorRationale: "Os conflitos são apontados como entraves estruturais não solucionados pela tecnologia."
      },
      {
        id: "d",
        text: "os governos internacionais interromperam todas as verbas destinadas a pesquisas agropecuárias.",
        isCorrect: false,
        distractorRationale: "O texto afirma que houve investimentos expressivos ('substantial investments') nos últimos vinte anos."
      },
      {
        id: "e",
        text: "a biotecnologia é a causa primária do empobrecimento das comunidades tradicionais.",
        isCorrect: false,
        distractorRationale: "O texto não acusa a biotecnologia de causar pobreza, mas aponta sua insuficiência isolada perante problemas estruturais."
      }
    ],
    detailedExplanation: {
      summary: "'Despite' (apesar de) é uma preposição concessiva que admite um esforço ou investimento, demonstrando que o resultado esperado não foi atingido plenamente.",
      stepByStep: [
        "1. 'Despite substantial investments...': Apesar de investimentos substanciais...",
        "2. Fato principal: desnutrição crônica e insegurança alimentar persistem ('continue to plague').",
        "3. Tese do relatório da FAO: tecnologia sozinha ('advances alone') não resolve problemas cujas raízes são sociais e políticas (pobreza, guerras e desigualdade).",
        "4. A alternativa a expressa com clareza o valor concessivo e a conclusão sociopolítica do documento."
      ],
      coreConcept: "Concessão em Inglês: Despite e In spite of são seguidos de substantivo ou verbo no -ing, com sentido de 'apesar de / a despeito de'.",
      trapWarning: "Cuidado: 'Despite' NÃO usa 'of' (escreve-se 'Despite X' ou 'In spite of X')."
    },
    tags: ["linguagens", "ingles", "conectivos", "despite", "seguranca-alimentar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-007",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Poesia Moderna e Condição Humana",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nI took the one less traveled by,\nAnd that has made all the difference.\"",
      source: "FROST, Robert. The Road Not Taken. Mountain Interval, 1916."
    },
    prompt: "No célebre poema de Robert Frost, a bifurcação dos caminhos na floresta amarela atua como metáfora lírica representativa da",
    options: [
      {
        id: "a",
        text: "inevitabilidade das escolhas existenciais e a coragem de assumir trajetórias não convencionais na vida.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A imagem da encruzilhada ('two roads diverged') simboliza os dilemas morais e escolhas de vida; o eu lírico opta pelo caminho menos percorrido ('the one less traveled by'), o que definiu o curso singular de sua existência."
      },
      {
        id: "b",
        text: "falta de sinalização rodoviária em trilhas florestais da Nova Inglaterra no século XIX.",
        isCorrect: false,
        distractorRationale: "Interpretação excessivamente literal e prosaica que ignora a dimensão poética e filosófica da obra."
      },
      {
        id: "c",
        text: "obrigação moral de retornar ao ponto de partida sempre que surgirem dificuldades.",
        isCorrect: false,
        distractorRationale: "O poema trata da irreversibilidade das escolhas feitas no tempo, sem possibilidade de voltar atrás."
      },
      {
        id: "d",
        text: "destruição de biomas temperados causada pela abertura desenfreada de estradas comerciais.",
        isCorrect: false,
        distractorRationale: "O poema é lírico-existencial sobre o destino individual, sem foco em desmatamento ou infraestrutura."
      },
      {
        id: "e",
        text: "indecisão paralisante que impede o ser humano de desfrutar das belezas da natureza outonal.",
        isCorrect: false,
        distractorRationale: "O eu lírico reflete inicialmente ('long I stood'), mas toma uma decisão firme ('I took the one...')."
      }
    ],
    detailedExplanation: {
      summary: "Frost utiliza a bifurcação de caminhos para simbolizar as decisões éticas e existenciais que moldam a identidade humana.",
      stepByStep: [
        "1. O eu lírico depara-se com duas estradas divergentes no bosque de outono ('yellow wood').",
        "2. Lamenta não poder trilhar ambos os caminhos simultaneamente ('sorry I could not travel both').",
        "3. Decide tomar o caminho menos percorrido ('the one less traveled by').",
        "4. Conclui que essa escolha não conformista definiu sua vida ('And that has made all the difference').",
        "5. O poema é um clássico da literatura universal sobre o livre-arbítrio e as consequências das decisões tomadas."
      ],
      coreConcept: "Poesia em Língua Inglesa no ENEM: Identificação de símbolos universais (a estrada como vida, a bifurcação como escolha existencial).",
      trapWarning: "Evite leituras puramente literais em poemas: o bosque e os caminhos são metáforas para dilemas humanos profundos."
    },
    tags: ["linguagens", "ingles", "literatura", "poesia", "robert-frost"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-008",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Inclusão Social e Acessibilidade Digital",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Web accessibility is not an optional feature for website designers; it is a fundamental human right. When digital platforms incorporate screen-reader compatibility, adjustable contrast, and closed captioning, they dismantle invisible barriers, ensuring that individuals with sensory disabilities participate fully in civic life, education, and employment.\"",
      source: "World Wide Web Consortium (W3C). Web Accessibility Initiative Guidelines, 2023."
    },
    prompt: "De acordo com as diretrizes do W3C, a acessibilidade na internet deve ser compreendida primordialmente como",
    options: [
      {
        id: "a",
        text: "uma garantia de direitos humanos indispensável para assegurar a plena participação cidadã de pessoas com deficiência.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O texto afirma textualmente que a acessibilidade 'is a fundamental human right' e que ela derruba barreiras para permitir participação plena em cidadania, educação e trabalho."
      },
      {
        id: "b",
        text: "um recurso comercial facultativo voltado apenas para o aumento de vendas em lojas virtuais.",
        isCorrect: false,
        distractorRationale: "O texto assevera explicitamente que 'it is not an optional feature' (não é um recurso opcional)."
      },
      {
        id: "c",
        text: "uma ferramenta destinada com exclusividade a programadores e engenheiros de software.",
        isCorrect: false,
        distractorRationale: "O beneficiário central é o usuário comum com deficiências sensoriais e a sociedade civil como um todo."
      },
      {
        id: "d",
        text: "um protocolo restrito a transmissões de televisão analógica aberta.",
        isCorrect: false,
        distractorRationale: "O documento foca na web e plataformas digitais ('digital platforms')."
      },
      {
        id: "e",
        text: "um encargo dispensável que atrasa a navegação de usuários sem deficiência.",
        isCorrect: false,
        distractorRationale: "O texto defende a acessibilidade como imperativo ético universal positivo."
      }
    ],
    detailedExplanation: {
      summary: "A acessibilidade digital é afirmada como direito humano essencial para a cidadania plena.",
      stepByStep: [
        "1. Frase inicial enfática: 'Web accessibility is not an optional feature... it is a fundamental human right'.",
        "2. Recursos citados: leitores de tela ('screen-reader'), legendas ('closed captioning'), contraste ajustável.",
        "3. Finalidade: quebrar barreiras invisíveis ('dismantle invisible barriers') e garantir plena participação na educação, trabalho e vida cívica.",
        "4. A alternativa a corresponde perfeitamente à mensagem do texto."
      ],
      coreConcept: "Leitura de Textos Institucionais em Inglês: Compreensão do tom prescritivo e das noções de cidadania e inclusão social.",
      trapWarning: "Atenção ao termo 'dismantle': significa desmantelar, derrubar ou eliminar obstáculos."
    },
    tags: ["linguagens", "ingles", "acessibilidade", "direitos-humanos", "tecnologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-009",
    area: "linguagens",
    competence: 2,
    skill: 6,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Vocabulário Contextual e Polissemia - Verbo 'Overlook'",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"While the audit team thoroughly examined the company's financial records, they seemed to overlook subtle conflicts of interest among board members, an oversight that later exposed the firm to severe regulatory penalties.\"",
      source: "Corporate Governance Review, 2024."
    },
    prompt: "No contexto do relatório corporativo, o verbo 'overlook' e o substantivo correspondente 'oversight' indicam que a equipe de auditoria",
    options: [
      {
        id: "a",
        text: "deixou passar despercebida uma situação irregular de conflito de interesses, cometendo uma omissão ou descuido relevante.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O verbo 'to overlook' significa não notar, ignorar sem perceber ou fazer vista grossa; 'oversight' é a falha, omissão ou descuido involuntário que causou punições posteriores à empresa."
      },
      {
        id: "b",
        text: "investigou detalhadamente todas as contas bancárias dos membros da diretoria sem deixar dúvidas.",
        isCorrect: false,
        distractorRationale: "O texto aponta justamente uma falha na investigação desses conflitos de interesse."
      },
      {
        id: "c",
        text: "premiou os administradores pelo rigor ético demonstrado durante os exames fiscais.",
        isCorrect: false,
        distractorRationale: "A empresa sofreu sanções regulatórias severas ('severe regulatory penalties')."
      },
      {
        id: "d",
        text: "apoiou publicamente os conflitos de interesse para inflacionar o valor das ações.",
        isCorrect: false,
        distractorRationale: "Tratou-se de uma falha de fiscalização, não de apoio deliberado a fraudes."
      },
      {
        id: "e",
        text: "anulou todas as penalidades estatais através de recursos impetrados na suprema corte.",
        isCorrect: false,
        distractorRationale: "A negligência expôs a empresa a punições, e não à anulação delas."
      }
    ],
    detailedExplanation: {
      summary: "'To overlook' significa deixar passar sem notar / desconsiderar; 'oversight' é a falha decorrente dessa omissão.",
      stepByStep: [
        "1. Contexto: A auditoria olhou os livros financeiros, mas 'seemed to overlook' conflitos sutis de interesse.",
        "2. Como consequência dessa 'oversight' (lapso, falha, omissão), a empresa foi multada.",
        "3. Embora 'look' signifique olhar e 'over' signifique sobre, a palavra composta 'overlook' não significa 'olhar atentamente', mas sim 'olhar por cima e deixar escapar'.",
        "4. A alternativa a reflete a definição correta do termo no contexto de governança."
      ],
      coreConcept: "Polissemia e Phrasal Verbs em Inglês: Palavras com prefixos podem ter significados idiomáticos não óbvios (overlook = deixar passar batido).",
      trapWarning: "Cuidado: 'overlook' NÃO significa supervisionar com rigor; para supervisionar usa-se 'oversee' ou 'supervise'!"
    },
    tags: ["linguagens", "ingles", "vocabulario", "overlook", "governanca"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-010",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Gêneros Textuais - Anúncio de Conscientização Ambiental",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Fast fashion comes at a slow and devastating price. Every synthetic garment discarded after three wears will linger in landfills for up to two centuries, leaching microplastics and toxic dyes into our soil and aquifers. Choose durability. Wear your clothes until they become stories.\"",
      source: "Slogan de campanha internacional contra o consumo desenfreado de roupas descartáveis, 2023."
    },
    prompt: "O texto utiliza o jogo de palavras entre 'fast fashion' e 'slow and devastating price' com o objetivo de persuadir o leitor a",
    options: [
      {
        id: "a",
        text: "reavaliar seus hábitos de consumo de vestuário, priorizando peças duráveis e combatendo a cultura do descarte precoce de roupas sintéticas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O contraste contrapõe a pressa da moda descartável ('fast fashion') ao lento e duradouro impacto ecológico ('slow and devastating price'), estimulando a durabilidade e o uso prolongado das roupas."
      },
      {
        id: "b",
        text: "acelerar a produção fabril de peças de roupas sintéticas biodegradáveis para baratear o custo no varejo.",
        isCorrect: false,
        distractorRationale: "O texto critica a produção em massa e o descarte precoce, defendendo comprar menos e usar mais tempo."
      },
      {
        id: "c",
        text: "queimar imediatamente todas as roupas de tecido sintético para evitar o acúmulo de lixo em aterros.",
        isCorrect: false,
        distractorRationale: "Queimar tecidos sintéticos liberaria gases altamente tóxicos, conduta não recomendada pela campanha."
      },
      {
        id: "d",
        text: "doar roupas desgastadas exclusivamente a museus de história têxtil comunitários.",
        isCorrect: false,
        distractorRationale: "A frase 'until they become stories' é metafórica sobre memória e apego afetivo a roupas duráveis."
      },
      {
        id: "e",
        text: "comprar roupas novas a cada três semanas para movimentar a economia dos países em desenvolvimento.",
        isCorrect: false,
        distractorRationale: "O anúncio combate explicitamente o consumismo desmedido de descartar roupas após poucas utilizações."
      }
    ],
    detailedExplanation: {
      summary: "A campanha apela à responsabilidade ecológica individual contra a moda rápida e poluente.",
      stepByStep: [
        "1. 'Fast fashion': produção acelerada e barata de roupas de ciclo de vida curtíssimo.",
        "2. Antítese: o preço ambiental é lento ('slow') — roupas sintéticas demoram até dois séculos para se decompor em lixões ('landfills').",
        "3. Apelo imperativo final: 'Choose durability' (Escolha durabilidade); 'Wear your clothes until they become stories' (Use suas roupas até que se tornem histórias).",
        "4. A finalidade do anúncio é conscientizar o público para a sustentabilidade e consumo consciente."
      ],
      coreConcept: "Textos Publicitários e de Conscientização em Inglês: Jogos de antíteses (fast vs. slow) e imperativos de engajamento social.",
      trapWarning: "'Fast fashion' é um conceito sociológico e ambiental muito frequente nas provas contemporâneas do ENEM."
    },
    tags: ["linguagens", "ingles", "publicidade", "fast-fashion", "sustentabilidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-011",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Conectivos Argumentativos - Relação de Causa com 'Since'",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Since sleep deprivation severely undermines cognitive retention, emotional regulation, and immunological defense, university administrators must rethink rigorous scheduling and promote healthier sleep routines among undergraduate students.\"",
      source: "Higher Education Health Research Journal, 2024."
    },
    prompt: "Na frase inicial do trecho, a conjunção 'Since' é empregada com valor semântico de",
    options: [
      {
        id: "a",
        text: "causa ou justificativa ('já que', 'visto que'), fundamentando por que as universidades precisam rever seus horários acadêmicos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em inglês, 'since' pode ser marcador temporal ('desde') ou conjunção causal ('já que', 'visto que', 'dado que'). No texto, ele introduz os danos do sono insuficiente que justificam a ação administrativa."
      },
      {
        id: "b",
        text: "tempo pretérito contínuo ('desde 1950'), marcando o ano de fundação da instituição de ensino.",
        isCorrect: false,
        distractorRationale: "O 'since' aqui não acompanha marco temporal cronológico, mas uma oração causal completa."
      },
      {
        id: "c",
        text: "condição improvável ('a não ser que'), condicionando as notas escolares às horas de sono.",
        isCorrect: false,
        distractorRationale: "A relação é de causalidade demonstrada, não de hipótese condicional ('unless')."
      },
      {
        id: "d",
        text: "conclusão irrevogável ('portanto'), anunciando o desfecho das pesquisas em neurociência.",
        isCorrect: false,
        distractorRationale: "Conectivos conclusivos são therefore, thus, consequently."
      },
      {
        id: "e",
        text: "comparação quantitativa ('tanto quanto'), equiparando sono e imunidade biológica.",
        isCorrect: false,
        distractorRationale: "Comparação exigiria as... as."
      }
    ],
    detailedExplanation: {
      summary: "A palavra 'since' possui duplo sentido em inglês: temporal (desde) e causal (já que / visto que).",
      stepByStep: [
        "1. Analisa-se a oração: 'Since sleep deprivation severely undermines...'.",
        "2. Pergunta-se: por que os gestores devem repensar os horários?",
        "3. Resposta: Porque / Já que a privação de sono prejudica a cognição e a imunidade.",
        "4. Como introduz o motivo de um fato, 'since' atua como conjunção subordinativa causal.",
        "5. Equivale a 'Because', 'As' ou 'Given that'."
      ],
      coreConcept: "Polissemia de 'SINCE' em Inglês: 1. Temporal = 'desde' (I have studied since Monday). 2. Causal = 'já que / visto que' (Since it is raining, stay home).",
      trapWarning: "No ENEM, 'since' aparece frequentemente no início de frases exercendo função causal (já que / como)."
    },
    tags: ["linguagens", "ingles", "conectivos", "since", "causalidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-012",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Segurança Cibernética e Ética Digital",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"If a digital service is completely free, you are not the customer; you are the product being sold. Data harvesting business models monetize human attention by selling behavioral predictability to advertisers, quietly reshaping personal autonomy and democratic discourse.\"",
      source: "ZUBOFF, Shoshana. The Age of Surveillance Capitalism. PublicAffairs, 2019."
    },
    prompt: "O aforismo 'If a digital service is completely free, you are not the customer; you are the product' sintetiza a tese de que",
    options: [
      {
        id: "a",
        text: "a gratuidade aparente das grandes plataformas digitais é financiada pela coleta massiva e mercantilização dos dados comportamentais dos próprios usuários.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A professora Shoshana Zuboff explica que a ausência de cobrança monetária direta significa que o lucro vem da extração de dados e predição de comportamentos comercializados com anunciantes publicitários."
      },
      {
        id: "b",
        text: "as empresas de tecnologia operam em regime filantrópico para garantir acesso universal à internet.",
        isCorrect: false,
        distractorRationale: "O texto enfatiza que se trata de um modelo de negócios altamente lucrativo e monetizado ('monetize human attention')."
      },
      {
        id: "c",
        text: "os anúncios publicitários deixaram de existir com o advento das redes sociais corporativas.",
        isCorrect: false,
        distractorRationale: "A publicidade direcionada é justamente a compradora dos dados de previsibilidade de comportamento."
      },
      {
        id: "d",
        text: "o consumidor de tecnologia tem plena autonomia para decidir quais dados pessoais serão apagados dos servidores.",
        isCorrect: false,
        distractorRationale: "O texto alerta que a autonomia pessoal está sendo silenciosamente remodelada ('quietly reshaping personal autonomy')."
      },
      {
        id: "e",
        text: "os produtos manufaturados perderam todo o valor de mercado na economia contemporânea.",
        isCorrect: false,
        distractorRationale: "A discussão circunscreve-se ao modelo digital e à economia de vigilância."
      }
    ],
    detailedExplanation: {
      summary: "Na economia dos dados, a gratuidade dos serviços esconde a exploração e venda do comportamento dos usuários.",
      stepByStep: [
        "1. Premissa: Se o serviço é grátis, você não é o cliente, é o produto ('you are the product being sold').",
        "2. Mecanismo: 'Data harvesting' (colheita de dados) monetiza a atenção humana.",
        "3. Destinatário: Os dados preditivos são vendidos a anunciantes.",
        "4. Impacto: Ameaça à privacidade, autonomia individual e integridade democrática.",
        "5. A alternativa a sintetiza o argumento central do 'Capitalismo de Vigilância'."
      ],
      coreConcept: "Capitalismo de Vigilância e Economia da Atenção: Conteúdo sociológico e filosófico frequentemente selecionado pelo INEP em provas de Linguagens.",
      trapWarning: "'Harvesting' vem do verbo colher (colheita de dados pessoais)."
    },
    tags: ["linguagens", "ingles", "vigilancia-digital", "privacidade", "capitalismo-de-dados"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-013",
    area: "linguagens",
    competence: 2,
    skill: 6,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Vocabulário Contextual - O Termo 'Backlash'",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"The municipality's decision to convert several central car lanes into protected bicycle paths provoked a fierce public backlash from local merchant associations, who argued that reduced parking spaces would hurt retail sales.\"",
      source: "Urban Mobility and Public Policy Review, 2024."
    },
    prompt: "No relato sobre mobilidade urbana, a palavra 'backlash' indica que a medida governamental gerou",
    options: [
      {
        id: "a",
        text: "uma reação pública hostil, intensa e contrária por parte dos comerciantes locais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Backlash' significa uma forte reação adversa, represália popular ou contra-ataque da opinião pública diante de uma decisão política ou social ('fierce public backlash' = reação contrária feroz)."
      },
      {
        id: "b",
        text: "uma premiação internacional de arquitetura concedida à cidade.",
        isCorrect: false,
        distractorRationale: "O termo denota conflito e contestação negativa, não premiação honorífica."
      },
      {
        id: "c",
        text: "um recuo imediato e voluntário de todos os ciclistas das vias públicas.",
        isCorrect: false,
        distractorRationale: "A reação veio das associações de comerciantes ('merchant associations'), e não dos ciclistas."
      },
      {
        id: "d",
        text: "uma redução substancial na emissão de gases de efeito estufa nos subúrbios.",
        isCorrect: false,
        distractorRationale: "O texto relata a polêmica política local entre lojistas e a prefeitura, sem dados de emissões."
      },
      {
        id: "e",
        text: "uma ampliação espontânea do número de vagas de estacionamento gratuito.",
        isCorrect: false,
        distractorRationale: "Os comerciantes reclamaram justamente da perda de vagas ('reduced parking spaces')."
      }
    ],
    detailedExplanation: {
      summary: "'Backlash' é um substantivo que expressa forte retrocesso ou reação negativa veemente da sociedade civil.",
      stepByStep: [
        "1. Ação da prefeitura: transformar faixas de carros em ciclovias.",
        "2. Efeito: 'provoked a fierce public backlash from merchant associations'.",
        "3. Motivo da queixa: a redução de vagas de estacionamento prejudicaria as vendas do comércio.",
        "4. 'Backlash' = forte repercussão contrária / recuo / reação adversa violenta.",
        "5. A alternativa a traduz com rigor essa reação opositora."
      ],
      coreConcept: "Vocabulário de Atualidades Políticas e Sociais em Inglês: Backlash (reação negativa forte); Outcry (protesto barulhento); Breakthrough (avanço científico decisivo).",
      trapWarning: "'Backlash' aparece habitualmente em notícias sobre direitos civis, gênero e reformas urbanas."
    },
    tags: ["linguagens", "ingles", "vocabulario", "backlash", "mobilidade-urbana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-014",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Música e Crítica Social",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Come mothers and fathers throughout the land\nAnd don't criticize what you can't understand\nYour sons and your daughters are beyond your command\nYour old road is rapidly agin'\nPlease get out of the new one if you can't lend your hand\nFor the times they are a-changin'.\"",
      source: "DYLAN, Bob. The Times They Are A-Changin'. Columbia Records, 1964."
    },
    prompt: "Na canção de Bob Dylan, os versos dirigidos aos pais advertem que",
    options: [
      {
        id: "a",
        text: "as profundas transformações socioculturais impulsionadas pelas novas gerações são inevitáveis e exigem a superação de posturas conservadoras e autoritárias.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Dylan convoca a geração mais velha a não obstruir os novos tempos revolucionários ('get out of the new one if you can't lend your hand'), reconhecendo que a juventude não aceita mais a tutela cega de valores anacrônicos."
      },
      {
        id: "b",
        text: "os jovens devem se submeter passivamente à autoridade paterna para preservar a harmonia familiar.",
        isCorrect: false,
        distractorRationale: "O poema diz expressamente que os filhos 'estão além de vosso comando' ('beyond your command')."
      },
      {
        id: "c",
        text: "o envelhecimento biológico deve ser evitado por meio de práticas médicas inovadoras.",
        isCorrect: false,
        distractorRationale: "A frase 'Your old road is rapidly agin'' é metafórica sobre costumes e instituições ultrapassadas."
      },
      {
        id: "d",
        text: "as mães devem impedir que seus filhos participem de movimentos de contracultura.",
        isCorrect: false,
        distractorRationale: "Dylan conclama os pais a apoiarem ou não atrapalharem a marcha das mudanças sociais."
      },
      {
        id: "e",
        text: "a música tradicional folclórica norte-americana perdeu sua relevância artística.",
        isCorrect: false,
        distractorRationale: "O hino folk versa sobre ativismo cívico e conflito geracional, não sobre estilos musicais."
      }
    ],
    detailedExplanation: {
      summary: "Bob Dylan poetiza o conflito geracional da década de 1960 como uma força histórica irresistível de mudança.",
      stepByStep: [
        "1. Interlocutores convocados: 'mothers and fathers throughout the land'.",
        "2. Advertência: 'don't criticize what you can't understand' (não critiquem o que não compreendem).",
        "3. Constatação: 'Your sons and your daughters are beyond your command' (seus filhos escaparam ao vosso controle).",
        "4. Ultimato: 'get out of the new one if you can't lend your hand' (saiam do caminho se não puderem ajudar).",
        "5. O refrão profético 'the times they are a-changin'' consagrou a canção como hino dos direitos civis nos anos 60."
      ],
      coreConcept: "Música de Protesto em Língua Inglesa: Bob Dylan (Nobel de Literatura de 2016) como referência obrigatória na história cultural contemporânea.",
      trapWarning: "'Agin'' é a contração oral coloquial de 'aging' (envelhecendo)."
    },
    tags: ["linguagens", "ingles", "musica", "bob-dylan", "contracultura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-015",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Conectivos Argumentativos - Relação de Finalidade com 'In order to'",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"In order to curb the alarming spread of antimicrobial resistance, national health surveillance agencies must restrict over-the-counter antibiotic sales and mandate diagnostic tests prior to prescription.\"",
      source: "Global Antimicrobial Resistance Surveillance System (GLASS), 2024."
    },
    prompt: "No texto, a locução 'In order to' expressa a ideia de",
    options: [
      {
        id: "a",
        text: "finalidade ou propósito, indicando o objetivo pretendido com a adoção das medidas restritivas de venda de antibióticos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'In order to' traduz-se como 'a fim de', 'com o propósito de', 'para', introduzindo o objetivo final a ser alcançado pela política pública (conter a resistência antimicrobiana)."
      },
      {
        id: "b",
        text: "tempo cronológico, apontando a ordem sequencial das prescrições médicas.",
        isCorrect: false,
        distractorRationale: "Apesar da palavra 'order', a locução é uma conjunção de finalidade e não de ordenamento temporal."
      },
      {
        id: "c",
        text: "dúvida cética sobre a eficácia dos testes laboratoriais clínicos.",
        isCorrect: false,
        distractorRationale: "A recomendação é afirmativa e imperativa ('must restrict', 'mandate diagnostic tests')."
      },
      {
        id: "d",
        text: "concessão imprevista que autoriza a automedicação em casos leves.",
        isCorrect: false,
        distractorRationale: "O texto exige expressamente a proibição da venda sem receita médica."
      },
      {
        id: "e",
        text: "consequência involuntária de tratamentos hospitalares prolongados.",
        isCorrect: false,
        distractorRationale: "A locução introduz a meta almejada (propósito), não um efeito indesejado."
      }
    ],
    detailedExplanation: {
      summary: "'In order to' é a principal locução de finalidade em língua inglesa, equivalente a 'so as to' ou 'a fim de'.",
      stepByStep: [
        "1. 'In order to curb...': A fim de conter / frear a resistência antimicrobiana...",
        "2. O que se deve fazer? As agências devem restringir vendas de balcão ('over-the-counter') e exigir testes diagnósticos.",
        "3. 'In order to' + verbo no infinitivo indica a finalidade premeditada de uma ação governamental.",
        "4. A alternativa a identifica corretamente a relação semântica de propósito/finalidade."
      ],
      coreConcept: "Conectivos de Finalidade em Inglês: in order to, so as to, so that (+ oração com modal). Significam 'a fim de / para que'.",
      trapWarning: "'Over-the-counter' (OTC) significa remédio vendido diretamente no balcão sem necessidade de receita médica."
    },
    tags: ["linguagens", "ingles", "conectivos", "in-order-to", "saude-publica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-016",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Desinformação e 'Fake News' na Era Digital",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Falsehood diffuses significantly faster, deeper, and more broadly than the truth in all categories of information. While factual stories take six times longer to reach 1,500 people, sensationalist falsehoods trigger novelty, fear, and moral outrage, traits that algorithmic recommendation feeds heavily amplify to maximize engagement.\"",
      source: "Science Journal. The Spread of True and False News Online, 2018."
    },
    prompt: "De acordo com as conclusões da pesquisa publicada na revista Science, as notícias falsas se propagam mais rapidamente nas redes porque",
    options: [
      {
        id: "a",
        text: "apresentam apelo sensacionalista que desperta sentimentos de medo e indignação moral, sendo amplificadas pelos algoritmos de engajamento.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O texto esclarece que mentiras despertam novidade, medo e indignação moral ('novelty, fear, and moral outrage'), emoções primárias que os algoritmos de recomendação impulsionam para manter a atenção dos usuários."
      },
      {
        id: "b",
        text: "possuem redação erudita e fontes verificadas por agências independentes de checagem.",
        isCorrect: false,
        distractorRationale: "As histórias falsas apoiam-se no sensacionalismo e na desinformação, não em dados validados."
      },
      {
        id: "c",
        text: "são criadas e distribuídas exclusivamente por crianças em plataformas educacionais.",
        isCorrect: false,
        distractorRationale: "A difusão é sistêmica e abrange todas as categorias sociais e políticas."
      },
      {
        id: "d",
        text: "os algoritmos das redes sociais priorizam formalmente a verdade e a sobriedade jornalística.",
        isCorrect: false,
        distractorRationale: "O texto demonstra que a verdade demora seis vezes mais para circular do que as mentiras emocionais."
      },
      {
        id: "e",
        text: "o acesso à internet nos países desenvolvidos é restrito aos canais oficiais de televisão.",
        isCorrect: false,
        distractorRationale: "O estudo versa sobre a arquitetura aberta de compartilhamento de redes sociais."
      }
    ],
    detailedExplanation: {
      summary: "A mentira viraliza mais que a verdade devido ao gatilho emocional e ao desenho algorítmico voltado ao lucro da atenção.",
      stepByStep: [
        "1. Dado estatístico: 'factual stories take six times longer to reach 1,500 people' (fatos levam 6x mais tempo para circular).",
        "2. Gatilhos da mentira: 'novelty, fear, and moral outrage' (novidade, medo e ultraje moral).",
        "3. Papel dos algoritmos: 'feeds heavily amplify to maximize engagement' (amplificam fortemente para maximizar engajamento comercial).",
        "4. A alternativa a resume a mecânica psicossocial da desinformação na web."
      ],
      coreConcept: "Desinformação e Algoritmos: Tema interdisciplinar de altíssima probabilidade nas provas de Linguagens e Redação do ENEM.",
      trapWarning: "'Outrage' significa revolta, indignação ou escândalo."
    },
    tags: ["linguagens", "ingles", "desinformacao", "redes-sociais", "algoritmos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-017",
    area: "linguagens",
    competence: 2,
    skill: 6,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Falsos Cognatos - O Verbo 'Pretend'",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"We cannot pretend that biodiversity loss is an isolated ecological crisis with no repercussions on our food systems and economies. Acknowledging this interconnected fragility is the first step toward effective conservation diplomacy.\"",
      source: "United Nations Environment Programme (UNEP) Statement, 2024."
    },
    prompt: "Na declaração do PNUMA, a frase 'We cannot pretend that biodiversity loss is an isolated ecological crisis' deve ser traduzida no sentido de que",
    options: [
      {
        id: "a",
        text: "não podemos fingir ou simular que o declínio da biodiversidade seja uma crise isolada sem impacto econômico e alimentar.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'To pretend' é um falso cognato clássico: significa 'fingir', 'fazer de conta', 'simular' (enquanto 'pretender / ter intenção de' em inglês é 'to intend')."
      },
      {
        id: "b",
        text: "não temos a pretensão ou a intenção de proteger animais silvestres ameaçados de extinção.",
        isCorrect: false,
        distractorRationale: "Erro decorrente de confundir 'pretend' (fingir) com 'intend' (pretender)."
      },
      {
        id: "c",
        text: "podemos ignorar livremente os alertas da diplomacia ecológica sem qualquer consequência grave.",
        isCorrect: false,
        distractorRationale: "O texto defende a necessidade urgente de reconhecer a fragilidade compartilhada do ecossistema."
      },
      {
        id: "d",
        text: "é proibido pretender obter lucros com a conservação de florestas tropicais.",
        isCorrect: false,
        distractorRationale: "Interpretação incorreta do falso cognato e do sentido da sentença."
      },
      {
        id: "e",
        text: "as agências das Nações Unidas pretendem transferir o manejo ambiental para empresas privadas.",
        isCorrect: false,
        distractorRationale: "O comunicado apela à diplomacia estatal e à responsabilidade global das nações."
      }
    ],
    detailedExplanation: {
      summary: "'Pretend' significa fingir. O verbo correspondente a ter intenção/pretensão é 'intend'.",
      stepByStep: [
        "1. Verbo: 'We cannot pretend...' (Não podemos fingir...).",
        "2. Objeto: que a perda de biodiversidade seja uma crise isolada sem impacto nos alimentos e na economia.",
        "3. Em inglês:",
        "   - TO PRETEND = FINGIR / SIMULAR.",
        "   - TO INTEND = PRETENDER / TER A INTENÇÃO DE.",
        "4. A alternativa a traduz com precisão o sentido de rejeição à ilusão e ao fingimento."
      ],
      coreConcept: "Diferenciação Obrigatória: Pretend = Fingir. Intend = Pretender.",
      trapWarning: "Lembre-se: 'The boy pretended to be asleep' significa 'O menino fingiu que estava dormindo'."
    },
    tags: ["linguagens", "ingles", "false-friends", "pretend", "biodiversidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-018",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Direitos Civis e Liderança Histórica",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny. Whatever affects one directly, affects all indirectly.\"",
      source: "KING JR., Martin Luther. Letter from Birmingham Jail. 1963."
    },
    prompt: "No célebre trecho da carta redigida na prisão de Birmingham, Martin Luther King Jr. defende a tese ética da",
    options: [
      {
        id: "a",
        text: "interdependência universal dos seres humanos, na qual a violação dos direitos de um grupo repercute e ameaça a dignidade de toda a sociedade.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. King articula o conceito de 'network of mutuality' (rede de mutualidade) e destino compartilhado ('single garment of destiny'), afirmando categoricamente que a injustiça cometida em qualquer lugar é uma ameaça à justiça em todo o mundo."
      },
      {
        id: "b",
        text: "necessidade de punir exclusivamente os magistrados das cortes supremas estaduais.",
        isCorrect: false,
        distractorRationale: "O texto estabelece um princípio ético universal e coletivo, e não uma vingança contra juízes."
      },
      {
        id: "c",
        text: "impossibilidade de convivência pacífica entre cidadãos de diferentes crenças religiosas.",
        isCorrect: false,
        distractorRationale: "King Jr. é o patrono da resistência pacífica e da integração harmoniosa dos povos."
      },
      {
        id: "d",
        text: "superioridade moral dos habitantes do Sul dos Estados Unidos sobre as demais regiões do globo.",
        isCorrect: false,
        distractorRationale: "O trecho aponta que nenhuma localidade pode considerar-se isolada ou imune à injustiça alheia."
      },
      {
        id: "e",
        text: "reclusão carcerária perpétua como único instrumento legítimo para conter a criminalidade urbana.",
        isCorrect: false,
        distractorRationale: "A carta foi escrita por King na prisão enquanto ele próprio era vítima de detenção arbitrária por protestar contra a segregação racial."
      }
    ],
    detailedExplanation: {
      summary: "King fundamenta a solidariedade universal: a dignidade humana é una e indivisível.",
      stepByStep: [
        "1. Frase célebre: 'Injustice anywhere is a threat to justice everywhere' (Injustiça em qualquer lugar é uma ameaça à justiça em todo lugar).",
        "2. Metáfora: 'single garment of destiny' (uma única vestimenta de destino).",
        "3. Conclusão: 'Whatever affects one directly, affects all indirectly' (o que afeta um diretamente, afeta a todos indiretamente).",
        "4. A alternativa a sintetiza com perfeição o valor filosófico da fraternidade universal e dos direitos civis."
      ],
      coreConcept: "Textos Históricos de Liderança Civil em Inglês: Martin Luther King Jr., Nelson Mandela, Malala Yousafzai.",
      trapWarning: "'Inescapable' significa inescapável, inevitável; 'mutuality' significa reciprocidade, mutualidade."
    },
    tags: ["linguagens", "ingles", "direitos-civis", "martin-luther-king", "etica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-019",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Conectivos Argumentativos - Relação de Adição com 'Furthermore'",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Urban green spaces improve air quality by filtering particulate matter. Furthermore, clinical trials show that frequent exposure to municipal parks lowers cortisol levels and diminishes symptoms of anxiety among urban dwellers.\"",
      source: "Environmental Psychology and Public Health, 2024."
    },
    prompt: "O operador argumentativo 'Furthermore' é empregado no período para",
    options: [
      {
        id: "a",
        text: "adicionar um novo argumento favorável à arborização urbana, associando a melhora física do ar aos benefícios psicológicos e mentais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Furthermore' (além disso, ademais, além do mais) é um conector de adição enfática que soma os benefícios à saúde mental aos ganhos de purificação do ar previamente mencionados."
      },
      {
        id: "b",
        text: "restringir a visitação aos parques públicos exclusivamente a pacientes com diagnóstico de depressão.",
        isCorrect: false,
        distractorRationale: "O texto aborda a população urbana geral ('urban dwellers')."
      },
      {
        id: "c",
        text: "concluir que a poluição do ar foi totalmente erradicada pelas árvores das praças.",
        isCorrect: false,
        distractorRationale: "Não é um conector conclusivo, mas aditivo; e o texto fala em filtragem de partículas, não em milagre de erradicação total."
      },
      {
        id: "d",
        text: "contradizer a tese de que a natureza urbana exerce influência sobre a fisiologia humana.",
        isCorrect: false,
        distractorRationale: "O operador corrobora e fortalece a influência positiva da natureza sobre o corpo."
      },
      {
        id: "e",
        text: "estabelecer uma relação de oposição radical entre botânica e medicina preventiva.",
        isCorrect: false,
        distractorRationale: "A passagem une as duas áreas de forma harmoniosa e complementar."
      }
    ],
    detailedExplanation: {
      summary: "'Furthermore' adiciona uma evidência de mesma orientação argumentativa, correspondendo a 'além disso' ou 'outrossim'.",
      stepByStep: [
        "1. Argumento 1: Praças verdes melhoram a qualidade do ar (benefício ecológico e respiratório).",
        "2. Conector: 'Furthermore' (Além disso / Ademais).",
        "3. Argumento 2: Ensaios clínicos provam que o contato com parques reduz o estresse (cortisol) e ansiedade (benefício mental).",
        "4. A função discursiva de 'furthermore' é somar um segundo argumento convergente que fortalece a tese."
      ],
      coreConcept: "Conectivos de Adição em Inglês: furthermore, moreover, in addition, besides, additionally. Equivalem a 'além disso', 'ademais', 'outrossim'.",
      trapWarning: "'Furthermore' e 'moreover' são muito valorizados em textos acadêmicos e dissertativos formais."
    },
    tags: ["linguagens", "ingles", "conectivos", "furthermore", "saude-urbana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-020",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Patrimônio Cultural e Tradição Oral",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Indigenous oral storytelling is not mere folkloric entertainment; it functions as a sophisticated archive of ecological knowledge, cosmological philosophy, and communal memory, transmitting survival strategies across generations without the need for printed paper.\"",
      source: "UNESCO Courier. Preserving Intangible Cultural Heritage, 2023."
    },
    prompt: "De acordo com o documento da UNESCO, a contação de histórias tradicional dos povos originários deve ser reconhecida como",
    options: [
      {
        id: "a",
        text: "um sofisticado repositório vivo de saber ecológico, filosofia e memória coletiva essencial para a sobrevivência das comunidades.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O texto refuta a visão redutora de mero folclore ('not mere folkloric entertainment') e afirma que ela opera como um 'sophisticated archive' de conhecimento ambiental, cosmologia e memória comunitária."
      },
      {
        id: "b",
        text: "um entretenimento infantil ingênuo desprovido de rigor técnico e filosófico.",
        isCorrect: false,
        distractorRationale: "O texto combate exatamente essa visão preconceituosa e eurocêntrica."
      },
      {
        id: "c",
        text: "uma prática arcaica em vias de extinção que depende da substituição imediata por bibliotecas digitais em inglês.",
        isCorrect: false,
        distractorRationale: "A UNESCO defende a preservação e valorização autônoma da oralidade imaterial."
      },
      {
        id: "d",
        text: "um obstáculo ao aprendizado das ciências modernas nas escolas de aldeias.",
        isCorrect: false,
        distractorRationale: "A tradição oral é caracterizada como detentora de 'ecological knowledge' avançado."
      },
      {
        id: "e",
        text: "uma invenção comercial criada por editoras no século XXI para vender livros didáticos.",
        isCorrect: false,
        distractorRationale: "Trata-se de herança ancestral transmitida há milênios sem necessidade de papel impresso ('without the need for printed paper')."
      }
    ],
    detailedExplanation: {
      summary: "A oralidade indígena é um patrimônio vivo de preservação da memória e do conhecimento da biodiversidade.",
      stepByStep: [
        "1. Desconstrução: 'not mere folkloric entertainment' (não é mero entretenimento folclórico).",
        "2. Afirmação: 'sophisticated archive of ecological knowledge, cosmological philosophy, and communal memory'.",
        "3. Função biológica e social: transmite estratégias de sobrevivência ao longo das gerações.",
        "4. A alternativa a reflete a concepção antropológica contemporânea da UNESCO sobre patrimônio imaterial."
      ],
      coreConcept: "Patrimônio Imaterial e Diversidade Cultural no ENEM: Desconstrução do etnocentrismo através de textos internacionais de direitos culturais.",
      trapWarning: "'Communal memory' significa memória comunitária ou memória coletiva do grupo."
    },
    tags: ["linguagens", "ingles", "patrimonio-cultural", "oralidade", "unesco"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-021",
    area: "linguagens",
    competence: 2,
    skill: 6,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Expressões Idiomáticas - 'Tip of the Iceberg'",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"The recent high-profile arrests in the financial district represent merely the tip of the iceberg of a sprawling international offshore money-laundering network, investigators warned.\"",
      source: "International Consortium of Investigative Journalists (ICIJ), 2024."
    },
    prompt: "A expressão idiomática 'the tip of the iceberg' é utilizada pelos investigadores para comunicar que",
    options: [
      {
        id: "a",
        text: "as prisões divulgadas revelam apenas uma fração visível mínima de um esquema criminoso muito mais amplo e oculto.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A metáfora clássica da ponta do iceberg ('the tip of the iceberg') significa que a parte aparente ou descoberta é minúscula em comparação com a gigantesca massa oculta submersa (a vasta rede de lavagem de dinheiro)."
      },
      {
        id: "b",
        text: "os crimes financeiros ocorreram em regiões polares isoladas para driblar a fiscalização internacional.",
        isCorrect: false,
        distractorRationale: "Interpretação literal ingênua; a expressão é estritamente idiomática e figurada."
      },
      {
        id: "c",
        text: "todas as fraudes financeiras globais foram integralmente solucionadas com as detenções.",
        isCorrect: false,
        distractorRationale: "A expressão enfatiza justamente que quase todo o esquema continua intocado e oculto."
      },
      {
        id: "d",
        text: "o sistema bancário foi congelado por determinação dos tribunais de justiça locais.",
        isCorrect: false,
        distractorRationale: "Não há relação com congelamento físico de contas bancárias no sentido literal."
      },
      {
        id: "e",
        text: "os investigadores encerraram as operações policiais por falta de provas materiais.",
        isCorrect: false,
        distractorRationale: "Os investigadores alertaram que o trabalho está apenas começando diante da amplitude da rede."
      }
    ],
    detailedExplanation: {
      summary: "'The tip of the iceberg' refere-se à pequena parte perceptível de um problema imensamente maior.",
      stepByStep: [
        "1. Notícia: Prisões no distrito financeiro.",
        "2. Declaração: 'represent merely the tip of the iceberg...'.",
        "3. Em física, 90% da massa de um iceberg fica escondida sob a água.",
        "4. Na linguagem idiomática, expressa que o escândalo revelado é ínfimo diante da corrupção ainda oculta.",
        "5. A alternativa a descreve o significado exato da expressão."
      ],
      coreConcept: "Idioms em Inglês: Tip of the iceberg (ponta do iceberg); Piece of cake (algo muito fácil); Once in a blue moon (algo muito raro).",
      trapWarning: "Nunca traduza expressões idiomáticas ao pé da letra no ENEM!"
    },
    tags: ["linguagens", "ingles", "idioms", "tip-of-the-iceberg", "metafora"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-022",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Conectivos Argumentativos - Relação de Conclusão com 'Therefore'",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Epidemiological data unequivocally demonstrate that regular physical exercise improves immune response, reduces inflammation, and enhances neuroplasticity. Therefore, integrating active recreational spaces into urban master plans constitutes a high-yield preventive health investment.\"",
      source: "Urban Health and Preventive Medicine, 2024."
    },
    prompt: "No texto, a palavra 'Therefore' atua como recurso de coesão sequencial responsável por",
    options: [
      {
        id: "a",
        text: "apresentar uma conclusão ou consequência lógica a partir das evidências médicas apresentadas no período anterior.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Therefore' (portanto, por isso, por conseguinte) é uma conjunção conclusiva que encabeça a recomendação urbanística como desfecho inevitável dos dados epidemiológicos."
      },
      {
        id: "b",
        text: "desmentir as conclusões sobre a relação entre neuroplasticidade e imunidade.",
        isCorrect: false,
        distractorRationale: "O conectivo não refuta, mas apoia-se plenamente nos dados médicos para concluir."
      },
      {
        id: "c",
        text: "indicar que o investimento em espaços de lazer gera déficits orçamentários graves aos municípios.",
        isCorrect: false,
        distractorRationale: "O texto afirma o oposto: é um investimento de alto retorno preventivo ('high-yield preventive health investment')."
      },
      {
        id: "d",
        text: "introduzir uma oração concessiva que relativiza os benefícios biológicos da caminhada.",
        isCorrect: false,
        distractorRationale: "Concessão exigiria although, even though, whereas."
      },
      {
        id: "e",
        text: "comparar a velocidade de corrida de atletas urbanos e rurais.",
        isCorrect: false,
        distractorRationale: "Não há menção comparativa de desempenho esportivo individual."
      }
    ],
    detailedExplanation: {
      summary: "'Therefore' é o operador conclusivo por excelência em língua inglesa, equivalente a 'portanto' ou 'por conseguinte'.",
      stepByStep: [
        "1. Premissa médica: O exercício melhora imunidade e neuroplasticidade.",
        "2. Conector: 'Therefore' (Portanto / Por isso).",
        "3. Conclusão prática: Criar espaços verdes e de recreação em planos diretores é um investimento preventivo de alto retorno.",
        "4. A função sintático-discursiva é de dedução lógica e conclusão."
      ],
      coreConcept: "Conectivos de Conclusão em Inglês: therefore, thus, consequently, hence, as a result. Significam 'portanto', 'logo', 'por conseguinte'.",
      trapWarning: "'Therefore' é uma das palavras de transição mais comuns no ENEM e na escrita de artigos científicos."
    },
    tags: ["linguagens", "ingles", "conectivos", "therefore", "saude-coletiva"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-023",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Desperdício de Alimentos e Sustentabilidade",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Nearly one-third of all food produced globally for human consumption is lost or wasted each year. If food loss and waste were a country, it would be the third-largest emitter of greenhouse gases on the planet, trailing only China and the United States.\"",
      source: "World Resources Institute (WRI). Reducing Food Loss and Waste, 2023."
    },
    prompt: "A comparação hipotética que personifica o desperdício global de alimentos como se fosse um país tem a finalidade de",
    options: [
      {
        id: "a",
        text: "dimensionar o colossal impacto ambiental do desperdício de comida na emissão de gases do efeito estufa em escala planetária.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A analogia hipotética ('If food loss were a country...') choca e conscientiza o leitor ao demonstrar que o lixo orgânico descartado gera mais gases poluentes do que praticamente todas as nações do mundo, ficando atrás apenas das duas maiores superpotências."
      },
      {
        id: "b",
        text: "acusar a China e os Estados Unidos como os únicos responsáveis por toda a fome existente no planeta.",
        isCorrect: false,
        distractorRationale: "A menção aos dois países serve unicamente de parâmetro de comparação para o volume de emissões de carbono."
      },
      {
        id: "c",
        text: "propor a criação de uma nova república territorial formada exclusivamente por fazendeiros orgânicos.",
        isCorrect: false,
        distractorRationale: "A oração com 'If' é uma figura de linguagem hipotética (condicional irreal), não proposta geopolítica."
      },
      {
        id: "d",
        text: "comprovar que a produção de alimentos no mundo é insuficiente para alimentar a população atual.",
        isCorrect: false,
        distractorRationale: "O texto demonstra que a comida produzida seria mais do que suficiente, mas um terço é desperdiçado."
      },
      {
        id: "e",
        text: "incentivar os governos a incinerar alimentos que não forem comercializados nas feiras livres.",
        isCorrect: false,
        distractorRationale: "A incineração geraria ainda mais poluição, conduta combatida pelo relatório ecológico."
      }
    ],
    detailedExplanation: {
      summary: "A condicional hipotética ilustra dramaticamente a escala da pegada de carbono do desperdício alimentar.",
      stepByStep: [
        "1. Dado: 1/3 de toda a comida produzida no mundo é jogada fora ('lost or wasted').",
        "2. Recurso retórico: 'If food loss and waste were a country...' (Se o desperdício de comida fosse um país...).",
        "3. Posição no ranking: seria o 3º maior poluidor do mundo ('third-largest emitter of greenhouse gases'), perdendo apenas para China e EUA.",
        "4. A intenção do autor é traduzir toneladas abstratas de metano e CO2 em uma imagem geopolítica concreta de fácil apreensão pelo público leigo."
      ],
      coreConcept: "Uso de Condicionais Hipotéticas (Second Conditional) em Textos Argumentativos: If + Simple Past, would + verbo. Usado para criar cenários ilustrativos impactantes.",
      trapWarning: "'Trailing' significa ficando atrás de, vindo na esteira de."
    },
    tags: ["linguagens", "ingles", "desperdicio-de-alimentos", "gases-estufa", "metáfora-estatistica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-024",
    area: "linguagens",
    competence: 2,
    skill: 6,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Vocabulário Contextual - O Termo 'Reluctant'",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Despite undeniable evidence confirming that plastic particles cross the blood-brain barrier in laboratory trials, regulatory agencies remain reluctant to impose binding restrictions on chemical plasticizers, prioritizing short-term industrial convenience over precautionary public health.\"",
      source: "Environmental Toxicology and Pharmacology Review, 2024."
    },
    prompt: "No texto, o adjetivo 'reluctant' revela que as agências reguladoras demonstram uma postura de",
    options: [
      {
        id: "a",
        text: "hesitação e resistência em adotar proibições compulsórias contra os plastificantes químicos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Reluctant' significa relutante, hesitante, reticente, sem vontade de agir ('reluctant to impose binding restrictions' = hesitantes em impor restrições obrigatórias)."
      },
      {
        id: "b",
        text: "entusiasmo pioneiro na aplicação imediata do princípio da precaução sanitária.",
        isCorrect: false,
        distractorRationale: "O texto critica as agências justamente por colocarem a conveniência industrial acima da precaução médica."
      },
      {
        id: "c",
        text: "impossibilidade jurídica de atuar devido à falência financeira do Estado.",
        isCorrect: false,
        distractorRationale: "A postura é de hesitação deliberada, não de ausência de poderes de regulação."
      },
      {
        id: "d",
        text: "celeridade extrema na interdição de indústrias petroquímicas poluidoras.",
        isCorrect: false,
        distractorRationale: "'Reluctant' expressa lentidão, aversão e relutância em intervir."
      },
      {
        id: "e",
        text: "desconhecimento completo das pesquisas toxicológicas laboratoriais.",
        isCorrect: false,
        distractorRationale: "O texto afirma que as evidências laboratoriais são inegáveis ('undeniable evidence')."
      }
    ],
    detailedExplanation: {
      summary: "'Reluctant' qualifica quem reluta, hesita ou resiste a tomar uma atitude necessária.",
      stepByStep: [
        "1. Evidência: microplásticos atravessam a barreira hematoencefálica.",
        "2. Atitude das agências: 'remain reluctant to impose binding restrictions'.",
        "3. Em inglês: 'reluctant' = unwilling, hesitant (relutante, desinclinado a fazer algo).",
        "4. Motivo: priorizam a conveniência da indústria em detrimento da saúde preventiva.",
        "5. A alternativa a define com exatidão a atitude de hesitação e resistência."
      ],
      coreConcept: "Vocabulário Avaliativo (Adjetivos Modalizadores em Inglês): Reluctant (relutante); Binding (obrigatório / vinculante); Precautionary (preventivo / acautelatório).",
      trapWarning: "'Binding restrictions' significa restrições obrigatórias / vinculantes por lei."
    },
    tags: ["linguagens", "ingles", "vocabulario", "reluctant", "toxicologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ING-025",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira (Inglês)",
    subtopic: "Educação Emancipatória e Pensamento Crítico",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "\"Education either functions as an instrument which is used to facilitate integration of the younger generation into the logic of the present system and bring about conformity, or it becomes the practice of freedom, the means by which men and women deal critically and creatively with reality and discover how to participate in the transformation of their world.\"",
      source: "FREIRE, Paulo. Pedagogy of the Oppressed. Prefácio à edição em língua inglesa por Richard Shaull, Nova York: Continuum, 1970."
    },
    prompt: "No prefácio da obra de Paulo Freire publicado em inglês, o autor estabelece uma disjunção crítica entre dois modelos antagônicos de educação, caracterizados respectivamente como",
    options: [
      {
        id: "a",
        text: "um instrumento de adaptação conformista à ordem vigente versus uma prática de liberdade voltada à transformação crítica da realidade.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O texto utiliza a correlação 'either... or' para opor a educação bancária/domesticadora (que induz à conformidade no sistema) à educação libertadora (prática da liberdade que capacita sujeitos a transformarem ativamente seu mundo)."
      },
      {
        id: "b",
        text: "um sistema de exames conteudistas tradicionais versus o treinamento fabril para o mercado financeiro.",
        isCorrect: false,
        distractorRationale: "A disjunção proposta por Freire é de natureza política e filosófica, e não mera metodologia de provas escolares."
      },
      {
        id: "c",
        text: "uma formação clássica em línguas mortas versus o aprendizado de linguagens de programação de computadores.",
        isCorrect: false,
        distractorRationale: "Não há discussão sobre disciplinas específicas de currículo escolar no excerto."
      },
      {
        id: "d",
        text: "uma doutrinação dogmática estatal versus a privatização completa de todas as escolas do ensino básico.",
        isCorrect: false,
        distractorRationale: "Freire defende a pedagogia crítica emancipadora comunitária, sem apologia à privatização mercantil da educação."
      },
      {
        id: "e",
        text: "um modelo estritamente oral sem escrita versus a memorização passiva de livros enciclopédicos.",
        isCorrect: false,
        distractorRationale: "O núcleo do contraste reside no dilema Conformismo versus Liberdade Emancipatória."
      }
    ],
    detailedExplanation: {
      summary: "A estrutura disjuntiva 'either... or' expressa a oposição seminal de Paulo Freire entre domesticação e libertação.",
      stepByStep: [
        "1. Estrutura correlativa: 'Education either... or...' (A educação ou... ou...).",
        "2. Polo 1: Instrumento de integração e conformidade no sistema vigente ('bring about conformity').",
        "3. Polo 2: A prática da liberdade ('the practice of freedom') pela qual homens e mulheres lidam criticamente com a realidade e descobrem como transformá-la.",
        "4. A alternativa a sintetiza de forma impecável o pensamento do patrono da educação brasileira vertido para o inglês."
      ],
      coreConcept: "Pensadores Brasileiros em Publicações Internacionais no ENEM: Reconhecimento de conceitos de Paulo Freire, Milton Santos ou Boaventura de Sousa Santos em língua inglesa.",
      trapWarning: "'Either... or' é o operador correlativo de disjunção (ou... ou / uma coisa ou outra)."
    },
    tags: ["linguagens", "ingles", "paulo-freire", "pedagogia-do-oprimido", "filosofia-da-educacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
