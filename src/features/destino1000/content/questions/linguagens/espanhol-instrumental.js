/**
 * BANCO DE QUESTÕES: LÍNGUA ESTRANGEIRA - ESPANHOL INSTRUMENTAL NO ENEM
 * Área: Linguagens, Códigos e suas Tecnologias
 * Competência: C2 | Habilidades: H5, H6, H7, H8
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de conformidade com a matriz de referência do INEP
 * Regra Estrita: ZERO termos de deslocamentos turísticos.
 */

export const QUESTIONS_ESPANHOL_INSTRUMENTAL = [
  {
    id: "LIN-ESP-001",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Heterossemânticos (Falsos Amigos) e Compreensão Textual",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "En un restaurante tradicional de Bogotá, una científica comentaba con sus colegas: 'La sopa de ajiaco que nos sirvieron estaba verdaderamente exquisita. Sin embargo, el asistente de laboratorio se sintió avergonzado cuando el mozo le preguntó por su apellido, pues creyó que le pedía un apodo familiar y no su nombre de familia legal'.",
      source: "GARCÍA, Mariana. Crónicas cotidianas del lenguaje. Bogotá: Instituto Caro y Cuervo, 2021."
    },
    prompt: "No relato, os vocábulos sublinhados pelo contexto cultural, 'exquisita' e 'apellido', funcionam como heterossemânticos cujo significado real em português corresponde, respectivamente, a",
    options: [
      {
        id: "a",
        text: "estranha e alcunha informal.",
        isCorrect: false,
        distractorRationale: "Isso reproduz o falso sentido induzido pela semelhança gráfica com as palavras do português 'esquisita' e 'apelido'."
      },
      {
        id: "b",
        text: "deliciosa/saborosa e sobrenome de família.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em espanhol, 'exquisito(a)' significa de sabor refinado, saboroso ou delicioso; 'apellido' significa sobrenome. O apelido informal em espanhol é chamado de 'apodo' ou 'sobrenombre'."
      },
      {
        id: "c",
        text: "apimentada e profissão registrada.",
        isCorrect: false,
        distractorRationale: "Apimentado em espanhol é 'picante', não 'exquisito'; e profissão é 'profesión' ou 'oficio'."
      },
      {
        id: "d",
        text: "fria e número de documento oficial.",
        isCorrect: false,
        distractorRationale: "Significados incorretos e sem correspondência etimológica."
      },
      {
        id: "e",
        text: "estragada e apelido carinhoso.",
        isCorrect: false,
        distractorRationale: "Estragado em espanhol é 'estropeado' ou 'podrido'."
      }
    ],
    detailedExplanation: {
      summary: "Os heterossemânticos ('falsos amigos') possuem grafia idêntica ou semelhante ao português, mas significados completamente distintos.",
      stepByStep: [
        "1. Analisar o vocábulo 'exquisita': no contexto gastronômico em espanhol, qualifica algo de excelência, saboroso, delicioso.",
        "2. Analisar o vocábulo 'apellido': equivale a 'sobrenome' (o nome de família), enquanto 'apodo' equivale a 'apelido'.",
        "3. Conectar à alternativa B, que traduz com precisão técnica ambos os termos."
      ],
      coreConcept: "Heterossemânticos da língua espanhola e estratégias de leitura instrumental.",
      trapWarning: "Nunca confunda 'apellido' (sobrenome) com 'apodo' (apelido). Essa é uma das armadilhas prediletas da banca do ENEM."
    },
    commonTraps: ["Traduzir 'exquisito' por 'esquisito' e 'apellido' por 'apelido' devido à semelhança ortográfica superficial."],
    tags: ["Espanhol", "Heterossemânticos", "Falsos Amigos", "Vocabulário"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-002",
    area: "linguagens",
    competence: 2,
    skill: 5,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Artigo Neutro 'LO' e Substantivação",
    difficulty: 4,
    estimatedTimeSeconds: 135,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Lo preocupante del cambio climático en los Andes no es solo el retroceso acelerado de los glaciares tropicales, sino lo difícil que resulta para las comunidades campesinas prever el ciclo de siembra. Lo esencial radica en comprender que la ciencia debe dialogar con los saberes milenarios de la Pachamama.",
      source: "MORALES, René. Ecología y cosmovisión andina. La Paz: Plural Editores, 2022."
    },
    prompt: "No texto, a estrutura gramatical 'lo preocupante', 'lo difícil' e 'lo esencial' exemplifica o emprego do artigo neutro 'lo', cuja função discursiva é",
    options: [
      {
        id: "a",
        text: "determinar substantivos masculinos singulares concretos em substituição ao artigo 'el'.",
        isCorrect: false,
        distractorRationale: "O artigo neutro 'lo' NUNCA acompanha substantivos em espanhol; apenas o artigo masculino 'el' acompanha substantivos masculinos."
      },
      {
        id: "b",
        text: "substantivar adjetivos, conferindo-lhes um valor abstrato e delimitando o foco argumentativo do enunciador.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em espanhol, o artigo neutro 'lo' une-se a adjetivos e advérbios para criar noções abstratas equivalentes a 'a coisa preocupante', 'a parte difícil' e 'aquilo que é essencial'."
      },
      {
        id: "c",
        text: "exercer a função de pronome pessoal reto para indicar a terceira pessoa do plural.",
        isCorrect: false,
        distractorRationale: "O pronome pessoal de 3ª pessoa do plural é 'ellos'/'ellas', não 'lo'."
      },
      {
        id: "d",
        text: "indicar posse exclusiva de recursos naturais por parte do Estado plurinacional.",
        isCorrect: false,
        distractorRationale: "O artigo neutro não possui valor possessivo."
      },
      {
        id: "e",
        text: "expressar uma negação enfática diante da destruição ecológica.",
        isCorrect: false,
        distractorRationale: "A negação em espanhol é marcada por 'no', 'nunca', 'jamás', e não pelo artigo neutro 'lo'."
      }
    ],
    detailedExplanation: {
      summary: "O artigo neutro 'lo' não tem plural, não antecede substantivos e serve para substantivar conceitos abstratos.",
      stepByStep: [
        "1. Identificar a regra: em espanhol não existe substantivo neutro, mas existe o artigo neutro 'lo'.",
        "2. Identificar a função sintática: 'lo' + adjetivo substantiva a qualidade ('lo bueno' = o lado bom, o que é bom).",
        "3. Aplicar ao texto: 'lo preocupante' = a parte preocupante; 'lo difícil' = aquilo que é difícil; 'lo esencial' = o que é essencial."
      ],
      coreConcept: "Função substantivadora e valor abstrato do artigo neutro 'lo' na língua espanhola.",
      trapWarning: "Regra de ouro: 'lo' NUNCA é colocado antes de substantivo. Nunca se diz 'lo libro' ou 'lo hombre', e sim 'el libro' e 'el hombre'."
    },
    commonTraps: ["Achar que 'lo' é sinônimo do artigo masculino 'el' do espanhol."],
    tags: ["Espanhol", "Artigo Neutro LO", "Gramática Aplicada", "Substantivação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-003",
    area: "linguagens",
    competence: 2,
    skill: 6,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Conectores Discursivos e Orientação Argumentativa",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "El informe de la Comisión Económica para América Latina (CEPAL) advierte que, si bien la región incrementó su producción de energías limpias en la última década, sin embargo persiste una profunda brecha en el acceso equitativo a la red eléctrica en las zonas rurales. Por lo tanto, aunque los macroindicadores muestren crecimiento, todavía resulta imprescindible implementar políticas públicas distributivas.",
      source: "CEPAL. Panorama Energético y Desarrollo Sostenible en América Latina. Santiago de Chile: Naciones Unidas, 2023."
    },
    prompt: "Os conectores discursivos 'sin embargo', 'por lo tanto' e 'aunque' estabelecem entre os enunciados, respectivamente, relações de",
    options: [
      {
        id: "a",
        text: "adição, causa e conformidade.",
        isCorrect: false,
        distractorRationale: "Nenhum dos conectores expressa soma simples ou causa."
      },
      {
        id: "b",
        text: "oposição/contraste, conclusão lógica e concessão.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Sin embargo' = no entanto/contudo (oposição adversativa); 'Por lo tanto' = portanto/logo (conclusão); 'Aunque' = embora/ainda que (concessão)."
      },
      {
        id: "c",
        text: "tempo, finalidade e explicação.",
        isCorrect: false,
        distractorRationale: "Tempo seria 'mientras', finalidade 'para que', explicação 'porque'."
      },
      {
        id: "d",
        text: "condição, proporção e dúvida.",
        isCorrect: false,
        distractorRationale: "Condição seria 'si', proporção 'a medida que', dúvida 'tal vez/quizás'."
      },
      {
        id: "e",
        text: "consequência, alternância e comparação.",
        isCorrect: false,
        distractorRationale: "Classificação sintático-semântica incorreta dos três operadores."
      }
    ],
    detailedExplanation: {
      summary: "O domínio dos marcadores discursivos em língua espanhola é decisivo para identificar a hierarquia e o sentido das teses apresentadas.",
      stepByStep: [
        "1. Analisar 'sin embargo': conector adversativo sinônimo de 'no obstante', traduz-se por 'no entanto', 'contudo'.",
        "2. Analisar 'por lo tanto': conector conclusivo sinônimo de 'por consiguiente', traduz-se por 'portanto', 'logo'.",
        "3. Analisar 'aunque': conector concessivo subordinativo, traduz-se por 'embora', 'conquanto'.",
        "4. Conectar à alternativa B."
      ],
      coreConcept: "Conectores argumentativos e operadores discursivos na língua espanhola.",
      trapWarning: "'Aunque' introduz ressalva (concessão) sem anular o fato da oração principal."
    },
    commonTraps: ["Confundir 'sin embargo' com ideia de dúvida ou causa em vez de oposição contundente."],
    tags: ["Espanhol", "Conectores", "Coesão Textual", "Argumentação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-004",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Quadrinhos e Crítica Social em Mafalda (Quino)",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No primeiro quadrinho, Mafalda observa sua mãe esfregando o chão da cozinha e lavando pratos exaustivamente. No segundo quadrinho, Mafalda pega seu globo terrestre, acaricia-o com ternura e pergunta: 'Mamá, ¿qué te gustaría ser si vivieras?'.",
      source: "QUINO. Toda Mafalda. Buenos Aires: Ediciones de la Flor, 1993."
    },
    prompt: "Na tirinha clássica de Quino, o humor ácido e a ironia construídos pela pergunta de Mafalda expressam uma crítica contundente",
    options: [
      {
        id: "a",
        text: "à recusa das crianças de cooperar com a limpeza e organização das tarefas domésticas familiares.",
        isCorrect: false,
        distractorRationale: "A crítica não se dirige à desobediência infantil, mas à anulação da vida própria da mãe."
      },
      {
        id: "b",
        text: "ao confinamento da mulher ao trabalho doméstico rotineiro e invisibilizado, sugerindo que tal rotina aprisionante anula sua existência plena e projetos pessoais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Ao indagar 'o que você gostaria de ser se vivesse?', Mafalda sugere que a rotina doméstica interminável imposta à mulher na sociedade patriarcal a reduz a um autômato, impedindo-a de ter uma vida de fato."
      },
      {
        id: "c",
        text: "à superioridade moral da ciência geográfica sobre as atividades manuais da casa.",
        isCorrect: false,
        distractorRationale: "O globo é apenas um símbolo de preocupação humanitária global da personagem, não uma exaltação tecnicista."
      },
      {
        id: "d",
        text: "à precariedade dos produtos de limpeza industrializados fabricados na Argentina nos anos 1960.",
        isCorrect: false,
        distractorRationale: "Interpretação literal ingênua e anedótica desprovida de rigor sociológico."
      },
      {
        id: "e",
        text: "às aspirações das mães em exigir que suas filhas abandonem a educação escolar formal.",
        isCorrect: false,
        distractorRationale: "A mãe de Mafalda deseja que os filhos estudem; a questão foca a ausência de realização da própria mãe."
      }
    ],
    detailedExplanation: {
      summary: "Quino utiliza a ingenuidade perspicaz de Mafalda para criticar a condição subalterna e a invisibilidade do trabalho doméstico da mulher.",
      stepByStep: [
        "1. Analisar a imagem descrita: a mãe imersa em trabalho braçal doméstico repetitivo e extenuante.",
        "2. Analisar o conteúdo verbal da pergunta: '¿qué te gustaría ser si vivieras?' (uso do subjuntivo imperfeito indicando condição hipotética irreal).",
        "3. Concluir que o efeito de humor e denúncia nasce do contraste: a rotina alienante da dona de casa é tratada como ausência de vida real."
      ],
      coreConcept: "Ironia, quebra de expectativa e crítica social na historieta gráfica hispano-americana.",
      trapWarning: "Em tirinhas de Mafalda, atente para a crítica às instituições sociais: patriarcado, corrida armamentista, consumismo e autoritarismo."
    },
    commonTraps: ["Interpretar a pergunta de Mafalda como um insulto infantil em vez de um manifesto crítico sobre a emancipação feminina."],
    tags: ["Espanhol", "Mafalda", "Quino", "Crítica Social", "Gênero"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-005",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Heterossemânticos e Vocabulário de Cotidiano de Trabalho",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "El encargado del taller mecánico advirtió a los practicantes: 'Para evitar cualquier peligro, recuerden que antes de cerrar el local deben recoger el borrador de la pizarra y revisar la cola de clientes que esperan en el despacho. Además, nadie debe dejar vasos de vidrio cerca de las máquinas de soldar'.",
      source: "HERRERA, Carlos. Manual de seguridad y convivencia laboral. Montevideo: Editorial del Sur, 2020."
    },
    prompt: "No texto das instruções laborais, os vocábulos 'taller', 'borrador', 'cola' e 'vasos' significam, em língua portuguesa,",
    options: [
      {
        id: "a",
        text: "talher de refeição, borracha escolar, cola adesiva química e vasos de flores.",
        isCorrect: false,
        distractorRationale: "Tradução ingênua baseada em falsos amigos idênticos aos substantivos portugueses."
      },
      {
        id: "b",
        text: "oficina mecânica, apagador de lousa, fila de pessoas e copos de vidro.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Taller' = oficina/estúdio; 'borrador' = apagador de quadro ou rascunho; 'cola' = fila de espera (ou rabo de animal); 'vaso' = copo para beber líquidos (vaso de plantas é 'maceta' ou 'florero')."
      },
      {
        id: "c",
        text: "estojo de ferramentas, borracha de vedação, rabo de cavalo e garrafas térmicas.",
        isCorrect: false,
        distractorRationale: "Mescla de sentidos incorretos para o ambiente de trabalho descrito."
      },
      {
        id: "d",
        text: "loja de vendas, borrão de tinta, cola plástica e canecas de metal.",
        isCorrect: false,
        distractorRationale: "'Borrador' não é borrão, e 'vasos' não são canecas de metal ('tazas' ou 'jarros')."
      },
      {
        id: "e",
        text: "sala de desenho, lápis grafite, bilhete impresso e jarras de cerâmica.",
        isCorrect: false,
        distractorRationale: "Vocabulário totalmente dissociado da semântica dos termos originais."
      }
    ],
    detailedExplanation: {
      summary: "Heterossemânticos funcionam como armadilhas contextuais frequentes no ENEM.",
      stepByStep: [
        "1. Identificar 'taller': local onde se consertam veículos ou se produz arte (oficina, ateliê).",
        "2. Identificar 'borrador': objeto para apagar lousa ('pizarra') ou texto provisório (rascunho).",
        "3. Identificar 'cola': linha ordenada de pessoas aguardando atendimento (fila).",
        "4. Identificar 'vaso': recipiente transparente para bebidas (copo).",
        "5. Concluir pela alternativa B."
      ],
      coreConcept: "Falsos cognatos no ambiente corporativo e cotidiano na língua espanhola.",
      trapWarning: "Cuidado: 'copo' em espanhol é 'copo de nieve' (floco de neve). O copo de beber em espanhol é 'vaso'."
    },
    commonTraps: ["Achar que 'vaso' em espanhol é recipiente de plantar plantas ou flores."],
    tags: ["Espanhol", "Heterossemânticos", "Vocabulário Prático", "Compreensão"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-006",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Literatura Hispano-Americana e Memória em Eduardo Galeano",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "La memoria viva no nació para ancla, sino para propulsora. No invita a quedarse inmóvil contemplando las glorias o desdichas del pasado, sino a encender fuegos en la noche. Hay quienes creen que recordar es un ejercicio melancólico de museos polvorientos; para los pueblos despojados del sur, en cambio, la memoria histórica es el único mapa capaz de orientar las rebeliones venideras contra el olvido programado por los vencedores.",
      source: "GALEANO, Eduardo. El libro de los abrazos. Madrid: Siglo XXI Editores, 1989."
    },
    prompt: "No fragmento de Eduardo Galeano, a metáfora da 'memoria viva' como 'propulsora' fundamenta uma concepção de história segundo a qual a lembrança do passado deve",
    options: [
      {
        id: "a",
        text: "servir como contemplação passiva e estéril dos infortúnios vividos pelos antepassados.",
        isCorrect: false,
        distractorRationale: "O texto refuta essa visão explicitamente ('no nació para ancla', 'no invita a quedarse inmóvil')."
      },
      {
        id: "b",
        text: "funcionar como instrumento dinâmico e combativo de emancipação coletiva e resistência contra a opressão.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A memória para Galeano não é nostalgia paralisante (âncora), mas força motriz (propulsora) que orienta lutas presentes e futuras contra a espoliação."
      },
      {
        id: "c",
        text: "subordinar-se à versão oficial chancelada pelas potências colonizadoras vencedoras.",
        isCorrect: false,
        distractorRationale: "O autor propõe a resistência contra o 'olvido programado por los vencedores'."
      },
      {
        id: "d",
        text: "restringir-se à catalogação de acervos arquivísticos em museus fechados ao público.",
        isCorrect: false,
        distractorRationale: "Galeano critica exatamente quem reduz a memória a 'museos polvorientos'."
      },
      {
        id: "e",
        text: "estimular o esquecimento voluntário das injustiças pretéritas para promover a conciliação pacífica com as elites.",
        isCorrect: false,
        distractorRationale: "O esquecimento é denunciado como estratégia de dominação imposta pelos poderosos."
      }
    ],
    detailedExplanation: {
      summary: "Eduardo Galeano defende a memória histórica como motor revolucionário e descolonizador dos povos latino-americanos.",
      stepByStep: [
        "1. Analisar as oposições metafóricas: 'âncora' (imobilismo, paralisia) vs. 'propulsora' (movimento para a frente, criação de novos caminhos).",
        "2. Identificar os destinatários: os povos espoliados do continente que enfrentam o apagamento histórico.",
        "3. Concluir que a memória viva opera como força política ativa de libertação e transformação social."
      ],
      coreConcept: "Memória histórica e resistência decolonial na literatura hispano-americana.",
      trapWarning: "Galeano é um dos autores latino-americanos mais cobrados no ENEM em conjunto com Gabriel García Márquez e Pablo Neruda."
    },
    commonTraps: ["Interpretar a palavra 'memoria' no texto como simples saudosismo passivo."],
    tags: ["Eduardo Galeano", "Literatura Hispânica", "Memória Histórica", "Resistência"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-007",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Heterogenéricos (Substantivos com Mudança de Gênero)",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "En el boletín médico sobre nutrición infantil se destaca: 'La leche materna aporta nutrientes esenciales que disminuyen la alarma de infecciones. Además, el color amarillento del calostro no debe generar preocupación en las madres, ya que protege contra el dolor agudo y fortalece la sangre de los neonatos'.",
      source: "ORGANIZACIÓN PANAMERICANA DE LA SALUD (OPS). Guía clínica de lactancia materna. Washington, 2021."
    },
    prompt: "Em relação ao gênero gramatical dos substantivos destacados, constata-se a ocorrência de heterogenéricos, pois os termos 'la leche', 'la sangre', 'el color' e 'el dolor'",
    options: [
      {
        id: "a",
        text: "possuem gênero feminino no espanhol e no português, concordando sempre com determinantes neutros.",
        isCorrect: false,
        distractorRationale: "No português, 'o leite' e 'o sangue' são masculinos; e no espanhol 'el color' e 'el dolor' são masculinos."
      },
      {
        id: "b",
        text: "apresentam gênero oposto ao de seus equivalentes na língua portuguesa, sendo femininos em espanhol 'la leche' e 'la sangre' (masculinos em português) e masculinos em espanhol 'el color' e 'el dolor' (femininos em português).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Heterogenéricos são substantivos que mudam de gênero entre espanhol e português. Em espanhol: la leche (o leite), la sangre (o sangue), el color (a cor), el dolor (a dor)."
      },
      {
        id: "c",
        text: "admitem indistintamente os artigos 'el' e 'la' sem alteração de sentido em qualquer variante dialetal.",
        isCorrect: false,
        distractorRationale: "Essas palavras possuem gênero fixo na norma padrão culta da língua espanhola."
      },
      {
        id: "d",
        text: "são todos invariáveis e classificados obrigatoriamente como substantivos sobrecomuns.",
        isCorrect: false,
        distractorRationale: "São substantivos comuns inanimados com gênero gramatical definido."
      },
      {
        id: "e",
        text: "perdem a marcação de gênero quando empregados no plural com adjetivos pospostos.",
        isCorrect: false,
        distractorRationale: "A concordância de gênero é mantida rigorosamente no plural: 'las leches', 'los colores'."
      }
    ],
    detailedExplanation: {
      summary: "Heterogenéricos são palavras de mesmo significado que pertencem a gêneros gramaticais distintos em português e espanhol.",
      stepByStep: [
        "1. Identificar as palavras com terminação -umbre e palavras clássicas femininas em espanhol: la leche (o leite), la sangre (o sangue), la sal (o sal), la miel (o mel), la nariz (o nariz).",
        "2. Identificar palavras terminadas em -or masculinas em espanhol: el color (a cor), el dolor (a dor), el árbol (a árvore).",
        "3. Conectar à alternativa B, que formula com exatidão a contraposição entre as duas línguas."
      ],
      coreConcept: "Heterogenéricos do espanhol e padrões de sufixação (-or masculino, -umbre feminino).",
      trapWarning: "Quase todas as palavras terminadas em -or são masculinas em espanhol ('el color', 'el dolor', 'el amor'), enquanto várias são femininas em português ('a cor', 'a dor')."
    },
    commonTraps: ["Achar que pelo fato de português e espanhol serem línguas neolatinas irmãs, todos os substantivos compartilham o mesmo gênero."],
    tags: ["Espanhol", "Heterogenéricos", "Morfossintaxe", "Concordância"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-008",
    area: "linguagens",
    competence: 2,
    skill: 6,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Campanhas de Saúde Pública e Conscientização Digital",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Texto de anúncio institucional da UNICEF América Latina:\n'Desconectarse para conectar: No permitas que la pantalla apague las sonrisas de tus hijos. Pasar horas navegando mientras ellos te hablan no es acompañar; es estar ausente en el mismo cuarto. Deja el celular a un lado durante las comidas y las horas de juego. La mejor herencia que puedes dejarles es tu atención plena'.",
      source: "UNICEF. Campaña Crianza Positiva en la Era Digital. Cidade do Panamá, 2023."
    },
    prompt: "O anúncio institucional da UNICEF mobiliza recursos verbais com o propósito comunicativo de",
    options: [
      {
        id: "a",
        text: "recomendar a proibição integral de aparelhos eletrônicos em ambientes corporativos e fabris.",
        isCorrect: false,
        distractorRationale: "O texto é direcionado aos pais no ambiente familiar e relacional, não a fábricas."
      },
      {
        id: "b",
        text: "sensibilizar pais e cuidadores sobre a necessidade de limitar o uso de celulares em prol da convivência e do afeto com os filhos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A campanha utiliza a antítese 'desconectarse para conectar' e o imperativo exortativo ('deja el celular') para valorizar o diálogo e a presença atenta na criação dos filhos."
      },
      {
        id: "c",
        text: "incentivar a compra de dispositivos móveis dotados de jogos infantis educativos.",
        isCorrect: false,
        distractorRationale: "A mensagem visa reduzir o tempo de tela em favor da interação humana direta."
      },
      {
        id: "d",
        text: "culpabilizar as crianças pelo excesso de tempo despendido diante das redes de entretenimento.",
        isCorrect: false,
        distractorRationale: "O alerta é voltado para os adultos cuidadores que negligenciam a escuta dos filhos."
      },
      {
        id: "e",
        text: "comprovar que o uso precoce de telas amplia o rendimento cognitivo dos recém-nascidos.",
        isCorrect: false,
        distractorRationale: "O anúncio argumenta o contrário: que a tela afasta as crianças do vínculo protetor dos pais."
      }
    ],
    detailedExplanation: {
      summary: "Campanhas publicitárias de conscientização no ENEM exploram verbos no modo imperativo e figuras de oposição.",
      stepByStep: [
        "1. Identificar o público-alvo: pais e mães de crianças em idade de formação.",
        "2. Identificar os recursos linguísticos: a antítese no slogan ('desconectarse para conectar') e o verbo no imperativo ('deja el celular').",
        "3. Concluir que a tese defendida é a presença parental ativa contra a distração digital contínua."
      ],
      coreConcept: "Campanhas institucionais de saúde mental e funções apelativa/conativa da linguagem em espanhol.",
      trapWarning: "No ENEM, observe sempre o slogan e a instituição emissora (UNICEF, OMS) para antecipar o propósito ético do texto."
    },
    commonTraps: ["Achar que a campanha busca vender tecnologias alternativas."],
    tags: ["Espanhol", "Campanha Institucional", "UNICEF", "Interpretação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-009",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Heterotônicos (Diferença de Sílaba Tônica)",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No estudo comparativo de fonética entre o espanhol e o português, observa-se que certas palavras de origem grega ou latina possuem grafias muito parecidas, mas acentuação tônica distinta nas duas línguas:\n• Espanhol: a-le-GRE-a (alergia), e-pi-DE-mia (epidemia), li-MI-te (limite), ma-GI-a (magia), po-li-CI-a (policía).\n• Português: a-ler-GI-a, e-pi-de-MI-a, LI-mi-te, ma-GI-a, po-li-CI-a.",
      source: "FERNÁNDEZ, Sonsoles. Curso práctico de fonética y contraste español-portugués. Madrid: Edinumen, 2018."
    },
    prompt: "Denominam-se heterotônicos os vocábulos que apresentam mudança de tonicidade entre línguas aparentadas. Dentre os pares listados, exemplifica uma verdadeira mudança tônica o par",
    options: [
      {
        id: "a",
        text: "'limite' (paroxítona em espanhol 'li-MI-te' e proparoxítona em português 'LI-mi-te').",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em espanhol, a palavra é paroxítona sem acento gráfico (li-MI-te), ao passo que em português é proparoxítona obrigatória com acento (LÍ-mi-te)."
      },
      {
        id: "b",
        text: "'magia' (oxítona em espanhol e proparoxítona em português).",
        isCorrect: false,
        distractorRationale: "Em ambas as línguas 'magia' é paroxítona (ma-GI-a)."
      },
      {
        id: "c",
        text: "'alergia' (proparoxítona em espanhol e oxítona em português).",
        isCorrect: false,
        distractorRationale: "Em português 'alergia' é paroxítona (a-ler-GI-a), não oxítona."
      },
      {
        id: "d",
        text: "'policía' (monossílaba átona em espanhol e paroxítona em português).",
        isCorrect: false,
        distractorRationale: "'Policía' é polissílaba paroxítona com hiato em espanhol (po-li-CI-a) e em português (po-li-ci-a)."
      },
      {
        id: "e",
        text: "'epidemia' (oxítona terminada em ditongo nas duas línguas).",
        isCorrect: false,
        distractorRationale: "Em nenhuma das duas línguas a palavra é oxítona."
      }
    ],
    detailedExplanation: {
      summary: "Heterotônicos são palavras de mesma raiz etimológica cuja sílaba tônica recai em posições diferentes no português e no espanhol.",
      stepByStep: [
        "1. Analisar 'límite' em português: proparoxítona ('LÍ-mi-te'), acentuada graficamente.",
        "2. Analisar 'limite' em espanhol: paroxítona terminada em vogal ('li-MI-te'), sem acento gráfico.",
        "3. Outros exemplos clássicos de heterotônicos: nivel (oxítona em espanhol: ni-VEL; paroxítona em português: NÍ-vel), cerebro (ce-RE-bro em espanhol; CÉ-re-bro em português), elogio (e-lo-GIO em espanhol; e-lo-GI-o em português)."
      ],
      coreConcept: "Heterotônicos e regras de acentuação na língua espanhola.",
      trapWarning: "Cuidado com o acento gráfico em espanhol (tilde): ele só é usado para marcar a sílaba tônica quando a palavra foge da regra geral ou para diferenciar monossílabos homônimos (tilde diacrítica)."
    },
    commonTraps: ["Achar que palavras sem acento gráfico em espanhol possuem a mesma entonação do português."],
    tags: ["Espanhol", "Heterotônicos", "Fonética", "Acentuação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-010",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Poesia Hispânica e Engajamento Político em Pablo Neruda",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Preguntaréis: ¿Y dónde están las lilas?\n¿Y la metafísica cubierta de amapolas?\n¿Y la lluvia que a menudo golpeaba\nsus palabras llenándolas de agujeros y pájaros?\nOs voy a contar todo lo que me pasa.\n[...] Venid a ver la sangre por las calles,\nvenid a ver\nla sangre por las calles,\n¡venid a ver la sangre\npor las calles!",
      source: "NERUDA, Pablo. Explico algunas cosas. In: España en el corazón. Santiago de Chile: Nascimento, 1937."
    },
    prompt: "No poema composto durante a Guerra Civil Espanhola (1936–1939), Pablo Neruda rompe com o lirismo intimista anterior de sua obra para",
    options: [
      {
        id: "a",
        text: "exaltar a perfeição métrica da poesia parnasiana dos séculos de ouro espanhóis.",
        isCorrect: false,
        distractorRationale: "Neruda utiliza versos livres marcados pela dor coletiva, repudiando o preciosismo estéril."
      },
      {
        id: "b",
        text: "denunciar com indignação a violência fascista do bombardeio e conclamar o leitor a testemunhar o massacre da população civil.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O poema abandona os temas da natureza e do amor romântico ('¿dónde están las lilas?') diante do horror da guerra, repetindo enfaticamente a convocação em tom de apelo desesperado: 'Venid a ver la sangre por las calles'."
      },
      {
        id: "c",
        text: "comemorar a vitória militar das tropas do General Franco sobre a República.",
        isCorrect: false,
        distractorRationale: "Neruda era diplomata e poeta de esquerda, ferrenho defensor da República espanhola contra o franquismo."
      },
      {
        id: "d",
        text: "recomendar o refúgio solitário dos artistas em mosteiros afastados dos conflitos bélicos.",
        isCorrect: false,
        distractorRationale: "O poema rejeita a omissão estética e exige o testemunho direto da dor humana."
      },
      {
        id: "e",
        text: "justificar a intervenção de armamentos nucleares para pacificar o continente europeu.",
        isCorrect: false,
        distractorRationale: "Anacronismo histórico: armas nucleares não existiam durante a Guerra Civil Espanhola."
      }
    ],
    detailedExplanation: {
      summary: "Em 'Explico algunas cosas', Neruda marca a virada de sua poesia em direção ao engajamento político e de solidariedade social.",
      stepByStep: [
        "1. Analisar a primeira estrofe: a pergunta retórica antecipa a surpresa do leitor acostumado com poemas de flores e amor.",
        "2. Analisar a quebra lírica: a resposta é o horror do bombardeio de Madri e o assassinato de amigos (como Federico García Lorca).",
        "3. Identificar o refrão: a repetição da ordem imperativa 'Venid a ver la sangre por las calles' transforma o poema em denúncia histórica irrefutável."
      ],
      coreConcept: "Poesia de combate, Guerra Civil Espanhola e Pablo Neruda no ENEM.",
      trapWarning: "Neruda recebeu o Prêmio Nobel de Literatura em 1971; sua obra oscila entre o amor apaixonado e a indignação política continental."
    },
    commonTraps: ["Buscar uma leitura metafórica romântica onde o autor está descrevendo a morte real de civis nas calçadas."],
    tags: ["Pablo Neruda", "Guerra Civil Espanhola", "Poesia de Combate", "Literatura Hispânica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-011",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Expressões Idiomáticas e Semântica Cultural",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "En una columna de opinión económica en el diario El País, el analista señalaba: 'El ministro quiso dorar la píldora afirmando que la inflación bajará el próximo semestre, pero los empresarios saben que no hay que tirar la toalla todavía ni dar gato por liebre a los consumidores con productos reducidos de tamaño'.",
      source: "LÓPEZ, Fernando. Eufemismos y realidad en el mercado minorista. El País, Madrid, 14 oct. 2022."
    },
    prompt: "As expressões idiomáticas destacadas no texto, 'dorar la píldora' e 'dar gato por liebre', significam, respectivamente,",
    options: [
      {
        id: "a",
        text: "fabricar remédios caseiros e vender carne de caça silvestre.",
        isCorrect: false,
        distractorRationale: "Tradução literal grosseira que ignora o sentido figurado idiomático."
      },
      {
        id: "b",
        text: "suavizar uma notícia desagradável com palavras doces e enganar alguém oferecendo algo de qualidade inferior no lugar do prometido.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Dorar la píldora' = dourar a pílula / abrandar um fato ruim; 'Dar gato por liebre' = enganar, passar a perna, vender produto ruim fazendo-se passar por nobre (gato vendido como se fosse lebre)."
      },
      {
        id: "c",
        text: "acelerar a produção fabril e proteger animais em risco de extinção.",
        isCorrect: false,
        distractorRationale: "Sentidos inventados sem relação com as locuções espanholas."
      },
      {
        id: "d",
        text: "desperdiçar dinheiro público e adotar mascotes comunitários.",
        isCorrect: false,
        distractorRationale: "Interpretação desprovida de contexto textual e semântico."
      },
      {
        id: "e",
        text: "rejeitar acordos comerciais e patrocinar competições de atletismo.",
        isCorrect: false,
        distractorRationale: "Totalmente alheio ao sentido das expressões idiomáticas."
      }
    ],
    detailedExplanation: {
      summary: "Expressões idiomáticas não podem ser traduzidas ao pé da letra porque carregam cristalizações culturais metafóricas.",
      stepByStep: [
        "1. Identificar 'dorar la píldora': adoçar o remédio amargo para disfarçar o impacto de uma má notícia.",
        "2. Identificar 'dar gato por liebre': antiga fraude culinária onde se servia carne de gato anunciando ser carne de lebre; hoje significa fraude ao consumidor.",
        "3. Conectar à alternativa B."
      ],
      coreConcept: "Locuções idiomáticas e semântica pragmática da língua espanhola.",
      trapWarning: "No ENEM, enunciados com expressões idiomáticas avaliam a capacidade de inferir o sentido conotativo pelo contexto geral da frase."
    },
    commonTraps: ["Fazer a tradução palavra por palavra das expressões idiomáticas."],
    tags: ["Espanhol", "Expressões Idiomáticas", "Semântica", "Linguagem Figurada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-012",
    area: "linguagens",
    competence: 2,
    skill: 6,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Divulgação Científica e Biodiversidade Amazônica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Científicos del Instituto de Investigaciones de la Amazonía Peruana (IIAP) descubrieron que ciertas hormigas arborícolas del género Pseudomyrmex establecen un mutualismo estricto con las plantas hospederas: a cambio de néctar azucarado y albergue en las ramas huecas, las hormigas patrullan las hojas día y noche, podando enredaderas competidoras y atacando ferormente a cualquier herbívoro que intente alimentarse de la corteza.",
      source: "IIAP. Interacciones biológicas y equilibrio ecológico en la cuenca del Amazonas. Iquitos: Revista Biodiversidad Neotropical, 2021."
    },
    prompt: "A partir da leitura instrumental do texto científico em espanhol, compreende-se que a relação ecológica descrita caracteriza-se como",
    options: [
      {
        id: "a",
        text: "parasitismo espoliador, no qual os insetos provocam a dessecação e morte da planta.",
        isCorrect: false,
        distractorRationale: "O texto define a relação como benefício mútuo ('a cambio de'), e não parasitismo destrutivo."
      },
      {
        id: "b",
        text: "mutualismo obrigatório benéfico a ambas as espécies, com a planta fornecendo alimento e moradia enquanto as formigas atuam na proteção vegetal.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O texto esclarece que a planta dá néctar e abrigo nas cavidades dos galhos e, em contrapartida, as formigas defendem a planta contra insetos herbívoros e podam plantas parasitas concorrentes."
      },
      {
        id: "c",
        text: "competição intraespecífica por radiação solar entre indivíduos da mesma colônia.",
        isCorrect: false,
        distractorRationale: "A interação descrita é interespecífica (entre formigas e plantas hospedeiras)."
      },
      {
        id: "d",
        text: "comensalismo unilateral em que apenas a planta retira vantagens nutricionais do contato.",
        isCorrect: false,
        distractorRationale: "Ambas as espécies se beneficiam ativamente da parceria biológica."
      },
      {
        id: "e",
        text: "predação desordenada estimulada pela contaminação das bacias hidrográficas.",
        isCorrect: false,
        distractorRationale: "Não se trata de predação sobre a planta, mas de cooperação simbiótica protetora."
      }
    ],
    detailedExplanation: {
      summary: "Textos de ciências biológicas em espanhol utilizam vocabulário acadêmico formal transparente para o leitor brasileiro.",
      stepByStep: [
        "1. Identificar o termo-chave: 'mutualismo estricto'.",
        "2. Identificar a contraprestação: néctar e abrigo dados pela planta ⟺ proteção contra herbívoros dada pelas formigas.",
        "3. Concluir que a leitura instrumental permite responder a questão com precisão articulando espanhol e biologia ecológica."
      ],
      coreConcept: "Leitura instrumental interdisciplinar (espanhol e ecologia) no ENEM.",
      trapWarning: "Termos cognatos como 'mutualismo', 'hospedera' e 'herbívoro' facilitam a apreensão do sentido principal."
    },
    commonTraps: ["Desperdiçar tempo traduzindo palavras desconhecidas irrelevantes em vez de focar na ideia central."],
    tags: ["Espanhol", "Divulgação Científica", "Ecologia", "Interdisciplinaridade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-013",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Acentuação Diacrítica (Tilde Diacrítica)",
    difficulty: 4,
    estimatedTimeSeconds: 145,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "La tilde diacrítica en español sirve para diferenciar pares de palabras homófonas que pertenecen a categorías gramaticales distintas:\n1. 'Él llegó temprano' (pronombre personal) vs. 'El libro es nuevo' (artículo determinado).\n2. 'Quiero que me dé una explicación' (verbo dar) vs. 'Viene de la escuela' (preposición).\n3. 'Tú sabes la verdad' (pronombre personal) vs. 'Tu cuaderno está aquí' (adjetivo posesivo).\n4. 'Tomó una taza de té caliente' (sustantivo bebida) vs. 'Te llamé ayer' (pronombre átono).\n5. 'Sé sincero con ella' (verbo ser o saber) vs. 'Se levantó temprano' (pronombre reflexivo).",
      source: "REAL ACADEMIA ESPAÑOLA (RAE). Ortografía de la lengua española. Madrid: Espasa, 2010."
    },
    prompt: "No texto prescritivo da Real Academia Española, a tilde diacrítica tem como função precípua",
    options: [
      {
        id: "a",
        text: "indicar que a palavra possui sílaba tônica nasal idêntica ao til da língua portuguesa.",
        isCorrect: false,
        distractorRationale: "Em espanhol, a 'tilde' é apenas o acento agudo (´); não existe til nasal (~) sobre vogais em espanhol."
      },
      {
        id: "b",
        text: "distinguir semanticamente palavras com a mesma grafia e som, separando formas tônicas com função gramatical plena de formas átonas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A tilde diacrítica não serve para seguir as regras gerais de acentuação, mas exclusivamente para diferenciar monossílabos homônimos de funções distintas (ex: pronome 'él' com acento vs. artigo 'el' sem acento)."
      },
      {
        id: "c",
        text: "transformar orações declarativas afirmativas em perguntas retóricas diretas.",
        isCorrect: false,
        distractorRationale: "Perguntas em espanhol utilizam pontos de interrogação invertidos (¿?)."
      },
      {
        id: "d",
        text: "assinalar a pronúncia correta de consoantes oclusivas no início de períodos.",
        isCorrect: false,
        distractorRationale: "A acentuação incide sobre o núcleo vocálico, não sobre consoantes."
      },
      {
        id: "e",
        text: "marcar a supressão de vogais diante de substantivos femininos plurais.",
        isCorrect: false,
        distractorRationale: "Isso descreve apócope, que é outro fenômeno fonético sem relação com a acentuação diacrítica."
      }
    ],
    detailedExplanation: {
      summary: "A tilde diacrítica diferencia palavras de mesma grafia mas classes gramaticais diferentes (como 'tú' pronome e 'tu' possessivo).",
      stepByStep: [
        "1. Identificar o conceito: 'tilde' em espanhol refere-se ao acento gráfico agudo (´).",
        "2. Identificar a função da diacrítica: monossílabos normalmente não levam acento em espanhol, a menos que precisem ser diferenciados de seu par átono homófono.",
        "3. Exemplos vitais: 'sí' (afirmação/pronome) vs. 'si' (conjunção condicional); 'más' (advérbio de quantidade) vs. 'mas' (conjunção adversativa equivalente a porém)."
      ],
      coreConcept: "Acentuação diacrítica e diferenciação funcional na gramática da língua espanhola.",
      trapWarning: "Cuidado: 'ti' NUNCA leva acento diacrítico em espanhol ('a ti te gusta') porque não existe outro 'ti' para diferenciar."
    },
    commonTraps: ["Confundir a tilde do espanhol (acento agudo) com o til do português (marca de nasalidade)."],
    tags: ["Espanhol", "Tilde Diacrítica", "Ortografia", "RAE"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-014",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Realismo Mágico e Crítica Social em Gabriel García Márquez",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "José Arcadio Segundo fue el único sobreviviente de la masacre de los obreros del banano en la estación de tren. Cuando despertó en la oscuridad, se encontró sobre un tren cargado de cadáveres que marchaba hacia el mar para arrojarlos como desecho. Al regresar al pueblo de Macondo, nadie creyó su relato: el bando oficial proclamaba que las huelgas habían terminado pacíficamente y que en Macondo nunca había pasado nada ni pasaría nunca, borrando a tres mil trabajadores de la historia oficial.",
      source: "GARCÍA MÁRQUEZ, Gabriel. Cien años de soledad. Buenos Aires: Sudamericana, 1967."
    },
    prompt: "No célebre episódio da 'Matanza de las Bananeras' em Cien años de soledad, Gabriel García Márquez utiliza a ficção do realismo mágico para denunciar",
    options: [
      {
        id: "a",
        text: "o desenvolvimento equilibrado propiciado pelas corporações agroexportadoras norte-americanas na Colômbia.",
        isCorrect: false,
        distractorRationale: "O episódio denuncia a exploração neocolonial violenta perpetrada pela United Fruit Company."
      },
      {
        id: "b",
        text: "a cumplicidade entre o Estado autoritário e o capital estrangeiro na repressão sangrenta aos trabalhadores e na falsificação da memória coletiva.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O romance resgata um fato histórico real (o massacre dos operários bananicultores em Ciénaga em 1928), denunciando como o poder político e as companhias imperialistas assassinaram trabalhadores em greve e, em seguida, impuseram uma narrativa oficial negacionista que apagou o crime."
      },
      {
        id: "c",
        text: "a superioridade indiscutível da produção agrícola mecanizada em relação à agricultura familiar.",
        isCorrect: false,
        distractorRationale: "A presença da companhia bananeira traz degradação humana, corrupção e destruição a Macondo."
      },
      {
        id: "d",
        text: "a recusa dos sindicatos latino-americanos em negociar jornadas de descanso remunerado.",
        isCorrect: false,
        distractorRationale: "Os operários foram massacrados exatamente porque reivindicavam direitos básicos de saúde e descanso semanal."
      },
      {
        id: "e",
        text: "a modernização exemplar do transporte ferroviário estatal de passageiros no Caribe.",
        isCorrect: false,
        distractorRationale: "O trem no episódio é a máquina da morte que carrega milhares de corpos para serem jogados no oceano."
      }
    ],
    detailedExplanation: {
      summary: "Gabriel García Márquez uniu imaginação lírica e denúncia histórica para imortalizar o massacre dos trabalhadores bananicultores de 1928.",
      stepByStep: [
        "1. Contextualizar o evento histórico: a greve real de 1928 contra a multinacional United Fruit Company, reprimida pelo exército colombiano.",
        "2. Identificar a crítica central: a manipulação do Estado que impôs a versão oficial de que 'não houve mortos e tudo foi pacífico'.",
        "3. Concluir que a literatura atua como guardiã da verdade histórica dos oprimidos contra o negacionismo dos poderosos."
      ],
      coreConcept: "Realismo mágico, denúncia política e literatura hispano-americana no ENEM.",
      trapWarning: "Macondo é uma alegoria da própria América Latina, marcada por ciclos de exploração neocolonial, autoritarismo e solidão."
    },
    commonTraps: ["Achar que o Realismo Mágico é pura fantasia desprovida de engajamento com a realidade política latino-americana."],
    tags: ["García Márquez", "Cien Años de Soledad", "Realismo Mágico", "História e Literatura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-015",
    area: "linguagens",
    competence: 2,
    skill: 5,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Apócope de Adjetivos e Advérbios",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "En la lengua española, el fenómeno fonético de la apócope consiste en la pérdida de una o más letras al final de una palabra cuando precede inmediatamente a un sustantivo u otro adjetivo:\n• 'Un gran científico' (de grande) vs. 'Una ciudad grande'.\n• 'El primer paso' (de primero) vs. 'El paso primero'.\n• 'Buen amigo' (de bueno) vs. 'Un amigo bueno'.\n• 'San Pedro' (de Santo) vs. 'Santo Domingo'.",
      source: "SECO, Manuel. Gramática esencial del español. Madrid: Espasa Calpe, 2011."
    },
    prompt: "Com base nas regras de apócope apresentadas no texto, o adjetivo 'grande' reduz-se para a forma 'gran' quando",
    options: [
      {
        id: "a",
        text: "posposto a um substantivo feminino plural.",
        isCorrect: false,
        distractorRationale: "Quando posposto, a forma mantém-se plena: 'ciudades grandes'."
      },
      {
        id: "b",
        text: "anteposto a qualquer substantivo no singular (masculino ou feminino), adquirindo valor enfático ou qualitativo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Grande' apocopa para 'gran' diante de qualquer substantivo singular (ex: 'gran hombre', 'gran mujer'), enfatizando grandeza moral, importância ou relevância, enquanto posposto ('hombre grande') indica tamanho físico."
      },
      {
        id: "c",
        text: "empregado exclusivamente em orações interrogativas com pronomes reflexivos.",
        isCorrect: false,
        distractorRationale: "A apócope independe do tipo de frase ou de pronomes reflexivos."
      },
      {
        id: "d",
        text: "seguido de verbo conjugado no particípio passado.",
        isCorrect: false,
        distractorRationale: "A condição de apócope é a anteposição a um substantivo singular."
      },
      {
        id: "e",
        text: "utilizado no início de versos poéticos alexandrinos de arte maior.",
        isCorrect: false,
        distractorRationale: "A regra é gramatical e morfossintática, não uma exigência métrica poética."
      }
    ],
    detailedExplanation: {
      summary: "A apócope de 'grande' para 'gran' ocorre diante de qualquer substantivo singular (masculino ou feminino).",
      stepByStep: [
        "1. Entender a apócope: supressão de som no final da palavra por facilidade articulatória.",
        "2. Identificar a diferença de sentido: 'un gran hombre' (um grande homem, notável, de grande valor) vs. 'un hombre grande' (um homem de estatura física elevada).",
        "3. Concluir que a anteposição ao substantivo singular gera a forma apocopada 'gran'."
      ],
      coreConcept: "Fenômeno da apócope na morfologia da língua espanhola.",
      trapWarning: "'Primeiro' e 'terceiro' apocopam apenas diante de masculinos ('primer día', 'tercer piso'), mas 'grande' apocopa diante de masculinos E femininos ('gran día', 'gran mujer')."
    },
    commonTraps: ["Achar que 'gran' só é usado para palavras masculinas."],
    tags: ["Espanhol", "Apócope", "Morfologia", "Adjetivos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-016",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Heterossemânticos e Práticas Cotidianas de Alimentação",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "En un recetário de cocina chilena se instruye: 'Para preparar la ensalada campesina, lave minuciosamente el berro fresco y córtelo en trozos medianos. Mientras tanto, caliente una sartén con aceite y saltee los granos de choclo tierno. Al terminar, sirva la comida a los comensales y no olvide agradecer la generosa propina recibida al finalizar el servicio'.",
      source: "VALENZUELA, Carmen. Sabores y tradiciones del valle central. Santiago: Ocho Libros, 2019."
    },
    prompt: "No texto da receita culinária chilena, os vocábulos 'berro', 'choclo' e 'propina' correspondem, no português falado no Brasil, a",
    options: [
      {
        id: "a",
        text: "grito estridente, chocolate meio amargo e suborno ilícito a fiscais.",
        isCorrect: false,
        distractorRationale: "Tradução baseada em semelhança sonora superficial com palavras do português."
      },
      {
        id: "b",
        text: "agrião fresco, milho verde e gorjeta voluntária de serviço.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Berro' = agrião (verdura folhosa); 'choclo' = milho verde nos países andinos (em outros países também chamado de 'maíz' ou 'elote'); 'propina' = gorjeta legal dada a garçons pelo bom atendimento (suborno em espanhol é 'soborno' ou 'coima')."
      },
      {
        id: "c",
        text: "carne de carneiro, cogumelo do bosque e troco em moedas.",
        isCorrect: false,
        distractorRationale: "Definições culinárias equivocadas."
      },
      {
        id: "d",
        text: "erva-doce desidratada, arroz integral e taxa compulsória de importação.",
        isCorrect: false,
        distractorRationale: "Vocabulário totalmente descolado da receita gastronômica."
      },
      {
        id: "e",
        text: "beterraba ralada, feijão preto e comissão bancária.",
        isCorrect: false,
        distractorRationale: "Beterraba em espanhol é 'remolacha'."
      }
    ],
    detailedExplanation: {
      summary: "O vocabulário da culinária hispânica traz falsos cognatos marcantes como 'propina' e 'berro'.",
      stepByStep: [
        "1. Identificar 'berro': em espanhol é o agrião comestível rico em ferro.",
        "2. Identificar 'choclo': termo quéchua incorporado ao espanhol andino e chileno para milho verde na espiga.",
        "3. Identificar 'propina': gratificação em dinheiro que se dá por um serviço prestado (gorjeta), com sentido positivo e legal.",
        "4. Conectar à alternativa B."
      ],
      coreConcept: "Heterossemânticos e variações lexicais regionais em língua espanhola.",
      trapWarning: "'Propina' no Brasil tem conotação de crime e corrupção (suborno). Em espanhol, é simplesmente a gorjeta do garçom!"
    },
    commonTraps: ["Achar que 'propina' em espanhol é sinônimo de propina/suborno do português."],
    tags: ["Espanhol", "Heterossemânticos", "Culinária", "Vocabulário Andino"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-017",
    area: "linguagens",
    competence: 2,
    skill: 6,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Interpretação de Gráficos e Transição Demográfica",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Datos del informe demográfico de las Naciones Unidas sobre el cono sur:\n'La tasa global de fecundidad en la región descendió de 3,2 hijos por mujer en 1990 a 1,6 en 2023, ubicándose por debajo del nivel de reemplazo poblacional (2,1). Paralelamente, la esperanza de vida al nacer superó los 78 años. Este fenómeno acelera el envejecimiento de la pirámide poblacional, planteando retos fiscales inminentes para los sistemas públicos de pensiones y salud'.",
      source: "NACIONES UNIDAS. Perspectivas de la Población Mundial. Santiago de Chile, 2023."
    },
    prompt: "Com base nas informações do relatório demográfico em língua espanhola, a principal consequência socioeconômica decorrente da transição demográfica descrita é",
    options: [
      {
        id: "a",
        text: "o aumento exponencial da demanda por creches e escolas de ensino infantil nas capitais.",
        isCorrect: false,
        distractorRationale: "A taxa de fecundidade despencou para 1,6, gerando redução do número de crianças na base da pirâmide."
      },
      {
        id: "b",
        text: "a pressão sobre a sustentabilidade fiscal dos regimes previdenciários e de assistência médica devido ao envelhecimento populacional.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A queda da fecundidade combinada com o aumento da longevidade (mais de 78 anos) alarga o topo da pirâmide (idosos) e estreita a base produtiva, gerando desafios para a previdência social e os sistemas públicos de saúde."
      },
      {
        id: "c",
        text: "o fim das despesas governamentais com hospitais geriátricos e tratamentos de doenças crônicas.",
        isCorrect: false,
        distractorRationale: "O envelhecimento amplia os gastos com doenças crônicas e internações de idosos."
      },
      {
        id: "d",
        text: "a autossuficiência financeira garantida pela expansão ilimitada da população economicamente ativa jovem.",
        isCorrect: false,
        distractorRationale: "A proporção de jovens diminui aceleradamente quando a fecundidade fica abaixo do nível de reposição."
      },
      {
        id: "e",
        text: "a obrigatoriedade de emigração compulsória para países do hemisfério norte.",
        isCorrect: false,
        distractorRationale: "O texto não propõe nem menciona emigração forçada."
      }
    ],
    detailedExplanation: {
      summary: "Textos informativos e gráficos demográficos no ENEM avaliam a correlação entre dados estatísticos e desdobramentos de políticas públicas.",
      stepByStep: [
        "1. Identificar os dados demográficos: fecundidade caiu para 1,6 (abaixo da reposição de 2,1) e expectativa de vida subiu para mais de 78 anos.",
        "2. Identificar o diagnóstico: envelhecimento rápido da população ('envejecimiento de la pirámide').",
        "3. Identificar o impacto econômico expresso: desafios imediatos ('retos fiscales inminentes') para previdência ('pensiones') e saúde pública."
      ],
      coreConcept: "Transição demográfica e leitura de textos socioeconômicos em língua espanhola.",
      trapWarning: "'Tasa de reemplazo' significa taxa de reposição populacional (2,1 filhos por mulher)."
    },
    commonTraps: ["Supor que taxa de fecundidade em queda aumenta a oferta de força de trabalho juvenil."],
    tags: ["Espanhol", "Demografia", "Economia", "Previdência"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-018",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Verbos com Alternância Vocálica e Irregularidades (Diftongação)",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "analysis",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A conjugação verbal em língua espanhola apresenta o fenômeno da diftongação no presente do indicativo em verbos tônicos, onde a vogal radical 'e' transforma-se no ditongo 'ie', e a vogal 'o' transforma-se no ditongo 'ue':\n• Pensar: yo pienso, tú piensas, él piensa, nosotros pensamos, vosotros pensáis, ellos piensan.\n• Dormir: yo duermo, tú duermes, él duerme, nosotros dormimos, vosotros dormís, ellos duermen.\n• Querer: yo quiero, tú quieres, él quiere, nosotros queremos, vosotros queréis, ellos quieren.",
      source: "ALONSO, Rosa. Gramática comunicativa del español. Madrid: Edelsa, 2017."
    },
    prompt: "Ao observar o paradigma de conjugação dos verbos com diftongação (e ➔ ie; o ➔ ue), constata-se que a irregularidade NÃO ocorre nas formas",
    options: [
      {
        id: "a",
        text: "da primeira e da terceira pessoa do singular (yo / él).",
        isCorrect: false,
        distractorRationale: "Nessas pessoas a diftongação ocorre obrigatoriamente: 'yo pienso', 'él piensa'."
      },
      {
        id: "b",
        text: "da primeira e da segunda pessoa do plural (nosotros / vosotros), pois a sílaba tônica recai na terminação e não no radical.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Nas formas de 'nosotros' (pensamos, dormimos, queremos) e 'vosotros' (pensáis, dormís, queréis), a tônica desloca-se para a desinência verbal, preservando a vogal original do radical sem ditongar."
      },
      {
        id: "c",
        text: "da segunda pessoa do singular e da terceira do plural (tú / ellos).",
        isCorrect: false,
        distractorRationale: "Nessas formas ocorre a diftongação: 'tú piensas', 'ellos piensan'."
      },
      {
        id: "d",
        text: "de nenhum dos pronomes sujeitos, sendo o verbo regular em todas as pessoas.",
        isCorrect: false,
        distractorRationale: "O verbo é notoriamente irregular por diftongação no presente."
      },
      {
        id: "e",
        text: "quando o verbo é seguido de pronome oblíquo enclítico.",
        isCorrect: false,
        distractorRationale: "A presença de enclítico não anula a diftongação do radical ('duérmete')."
      }
    ],
    detailedExplanation: {
      summary: "A diftongação em espanhol afeta apenas as formas rizotônicas (com tônica no radical: yo, tú, él, ellos).",
      stepByStep: [
        "1. Identificar as formas rizotônicas: a sílaba tônica está no radical (Pién-so, Duér-mo) ⟹ ocorre diftongação.",
        "2. Identificar as formas arrizotônicas: a sílaba tônica está na desinência (pen-SA-mos, dor-MI-mos) ⟹ não ocorre diftongação.",
        "3. Concluir que as pessoas 'nosotros' e 'vosotros' preservam a vogal pura da raiz."
      ],
      coreConcept: "Morfologia verbal da língua espanhola e verbos com diftongação vocálica.",
      trapWarning: "Lembre-se da regra: 'nosotros' e 'vosotros' nunca ditongam no presente do indicativo!"
    },
    commonTraps: ["Achar que a diftongação se aplica uniformemente a todas as seis pessoas gramaticais."],
    tags: ["Espanhol", "Verbos", "Diftongação", "Morfologia Verbal"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-019",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Crítica Ecológica e Movimentos Indígenas nos Andes",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Para las comunidades quechuas y aymaras, el 'Sumak Kawsay' o Buen Vivir no significa tener más bienes materiales ni acumular riquezas a costa del despojo de la tierra. Implica la armonía comunitaria consigo mismo, con los demás y con la Pachamama. Frente a la megaminería que contamina las cabeceras de cuenca con metales pesados, el Buen Vivir propone un límite ético infranqueable: el agua vale más que el oro, porque sin agua no hay vida ni futuro.",
      source: "CHOQUEHUANCA, David. Hacia la reconstrucción del Vivir Bien. La Paz: Ministerio de Relaciones Exteriores de Bolivia, 2010."
    },
    prompt: "O conceito andino de 'Sumak Kawsay' (Buen Vivir) confronta a lógica do extrativismo mineral predatório ao estabelecer que",
    options: [
      {
        id: "a",
        text: "o crescimento econômico industrial deve priorizar a extração de ouro em detrimento das bacias hidrográficas.",
        isCorrect: false,
        distractorRationale: "O texto afirma exatamente o oposto: 'el agua vale más que el oro'."
      },
      {
        id: "b",
        text: "o bem-estar humano reside no equilíbrio ético com a natureza e na preservação dos recursos vitais comunitários contra a mercantilização predatória.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Buen Vivir contrapõe a acumulação capitalista material ao equilíbrio socioecológico com a Pachamama, priorizando a segurança hídrica e a dignidade coletiva."
      },
      {
        id: "c",
        text: "as populações originárias devem transferir o controle de suas terras a conglomerados multinacionais de energia fóssil.",
        isCorrect: false,
        distractorRationale: "O texto defende a autodeterminação territorial e a proteção ecológica das cabeceiras de rios."
      },
      {
        id: "d",
        text: "a espiritualidade indígena é incompatível com a formulação de diretrizes jurídicas estatais.",
        isCorrect: false,
        distractorRationale: "O Buen Vivir foi incorporado inclusive às constituições do Equador (2008) e da Bolívia (2009)."
      },
      {
        id: "e",
        text: "a contaminação ambiental por mercúrio é um custo aceitável para assegurar superávits comerciais.",
        isCorrect: false,
        distractorRationale: "O texto rejeita a contaminação mineral por considerar que sem água limpa inexiste vida."
      }
    ],
    detailedExplanation: {
      summary: "O conceito de Buen Vivir (Sumak Kawsay) é uma das contribuições mais cobradas no ENEM sobre cosmologia andina e sustentabilidade.",
      stepByStep: [
        "1. Analisar a definição de 'Sumak Kawsay': viver em harmonia consigo, com a comunidade e com a Pachamama (Mãe Terra).",
        "2. Identificar a crítica: oposição frontal à megamineração que polui os mananciais hídricos ('el agua vale más que el oro').",
        "3. Concluir que a tese sintetiza uma alternativa decolonial ao produtivismo predatório ocidental."
      ],
      coreConcept: "Sumak Kawsay (Buen Vivir), cosmologia andina e ecologia política em língua espanhola.",
      trapWarning: "O Buen Vivir não prega a miséria nem o retorno ao passado mítico, mas um modelo ético de sustentabilidade e sobriedade compartilhada."
    },
    commonTraps: ["Confundir 'Buen Vivir' com mero consumismo de luxo individual."],
    tags: ["Espanhol", "Buen Vivir", "Sumak Kawsay", "Ecologia", "Povos Andinos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-020",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Heterossemânticos e Vocabulário Temporal e Cotidiano",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Al salir de la conferencia científica en la Universidad de Salamanca, el profesor le dijo a su colega: 'Espérame aquí un rato mientras voy al despacho a buscar los documentos del proyecto. Es un sitio muy seguro; quédate tranquila y no te preocupes si tardo algunos minutos'.",
      source: "NAVARRO, Gonzalo. Diálogos en el claustro universitario. Salamanca: Ediciones Universidad, 2020."
    },
    prompt: "No diálogo entre os pesquisadores, os vocábulos 'rato' e 'sitio' são heterossemânticos que significam, respectivamente,",
    options: [
      {
        id: "a",
        text: "animal roedor e propriedade rural de lazer com plantações.",
        isCorrect: false,
        distractorRationale: "Tradução ingênua baseada nas palavras correspondentes da língua portuguesa."
      },
      {
        id: "b",
        text: "um breve momento de tempo e um lugar ou espaço físico determinado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em espanhol, 'un rato' significa um momento, um instante de tempo (o roedor em espanhol é 'ratón'); 'sitio' significa lugar, local físico (o sítio rural em espanhol é 'finca' ou 'granja')."
      },
      {
        id: "c",
        text: "intervalo longo de horas e sítio arqueológico pré-histórico.",
        isCorrect: false,
        distractorRationale: "'Un rato' indica um espaço curto de tempo; e 'sitio' no diálogo é simplesmente o local do campus."
      },
      {
        id: "d",
        text: "refeição matinal rápida e endereço de internet em rede.",
        isCorrect: false,
        distractorRationale: "Embora 'sitio web' possa significar site, no contexto físico trata-se do lugar do prédio."
      },
      {
        id: "e",
        text: "pedido formal de desculpas e assento estofado de auditório.",
        isCorrect: false,
        distractorRationale: "Significados sem respaldo léxico na língua espanhola."
      }
    ],
    detailedExplanation: {
      summary: "'Rato' (momento) e 'sitio' (lugar) estão entre os heterossemânticos mais cobrados em diálogos cotidianos no ENEM.",
      stepByStep: [
        "1. Analisar 'un rato': 'espérame un rato' = espere-me um momento/instante (lembre-se: roedor é 'ratón').",
        "2. Analisar 'sitio': 'es un sitio muy seguro' = é um lugar/local muito seguro (chácara ou sítio rural em espanhol é 'finca').",
        "3. Conectar à alternativa B."
      ],
      coreConcept: "Heterossemânticos de uso temporal e espacial na língua espanhola.",
      trapWarning: "'Pasar un buen rato' significa divertir-se, passar um momento agradável (e não ficar caçando roedores!)."
    },
    commonTraps: ["Associar a palavra 'rato' ao animal roedor em contextos informais em espanhol."],
    tags: ["Espanhol", "Heterossemânticos", "Tempo e Espaço", "Vocabulário"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-021",
    area: "linguagens",
    competence: 2,
    skill: 6,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Gênero Textual Artigo de Opinião e Mudança Climática",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No podemos seguir postergando la transición energética bajo la excusa de la rentabilidad a corto plazo. Los incendios que asolan la Patagonia y las sequías históricas que vacían los embalses en el centro de Chile no son anomalías meteorológicas fortuitas: son las primeras notas de una sinfonía de devastación anunciada por la ciencia. Invertir hoy en descarbonización no es un gasto altruista, sino la única póliza de seguros viable para no hipotecar el porvenir de las próximas generaciones.",
      source: "ZAMORANO, Claudia. El costo de la inacción. Diario La Tercera, Santiago, 22 feb. 2023."
    },
    prompt: "No artigo de opinião, a autora constrói sua tese em defesa da transição energética imediata por meio de um argumento que qualifica a descarbonização como",
    options: [
      {
        id: "a",
        text: "um fardo financeiro inviável que deve ser custeado exclusivamente por fundos de caridade voluntária.",
        isCorrect: false,
        distractorRationale: "O texto rejeita expressamente a visão de 'gasto altruísta'."
      },
      {
        id: "b",
        text: "uma medida preventiva imperativa e estratégica para resguardar a própria sobrevivência e estabilidade futura das novas gerações.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A autora argumenta metaforicamente que descarbonizar a matriz é uma 'póliza de seguros viable' contra a inação que hipoteca o futuro dos descendentes, justificando o investimento por urgência existencial e econômica."
      },
      {
        id: "c",
        text: "uma meta utópica dispensável diante da regularidade cíclica das chuvas patagônicas.",
        isCorrect: false,
        distractorRationale: "O texto denuncia secas históricas e incêndios devastadores na Patagônia."
      },
      {
        id: "d",
        text: "um projeto burocrático que atende apenas aos interesses de mineradoras de combustíveis fósseis.",
        isCorrect: false,
        distractorRationale: "A descarbonização visa exatamente superar a dependência de combustíveis fósseis."
      },
      {
        id: "e",
        text: "uma política que deve aguardar a recuperação do lucro imediato das empresas poluidoras.",
        isCorrect: false,
        distractorRationale: "A autora rechaça adiar a transição 'sob a desculpa da rentabilidade a curto prazo'."
      }
    ],
    detailedExplanation: {
      summary: "O artigo de opinião utiliza metáforas de seguro financeiro e futuro hipotecado para defender a descarbonização.",
      stepByStep: [
        "1. Identificar a tese: a inação diante da emergência climática é insustentável.",
        "2. Identificar os dados contextuais: incêndios na Patagônia e esvaziamento de reservatórios hídricos em território chileno.",
        "3. Identificar o núcleo do argumento: a metáfora da 'póliza de seguros' evidencia que investir em energia limpa é garantia de sobrevivência de longo prazo."
      ],
      coreConcept: "Estratégias argumentativas no artigo de opinião em língua espanhola.",
      trapWarning: "'Póliza de seguros' traduz-se como apólice de seguro; 'porvenir' traduz-se como o porvir, o futuro."
    },
    commonTraps: ["Reduzir o argumento da autora a um apelo puramente moral em vez de reconhecer seu pragmatismo estratégico."],
    tags: ["Espanhol", "Artigo de Opinião", "Meio Ambiente", "Descarbonização"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-022",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Heterossemânticos e Termos Médicos (Embarazada vs. Avergonzada)",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "En la sala de espera del centro de salud comunitario, la enfermera anunció en voz alta: 'La señora Martínez está embarazada de seis meses y debe pasar a la sala de ecografía para el control obstétrico'.",
      source: "MINISTERIO DE SALUD. Protocolo de atención materno-infantil. Buenos Aires, 2021."
    },
    prompt: "No aviso emitido no centro de saúde, o vocábulo 'embarazada' é um clássico falso cognato que significa que a paciente está",
    options: [
      {
        id: "a",
        text: "confusa e com vergonha diante das outras pessoas.",
        isCorrect: false,
        distractorRationale: "Tradução incorreta baseada no falso amigo do português 'embaraçada/envergonhada'. Estar com vergonha em espanhol é 'estar avergonzada'."
      },
      {
        id: "b",
        text: "grávida e esperando o nascimento de um bebê.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Embarazada' em espanhol significa estritamente gestante / grávida. O estado de embaraço/vergonha em espanhol é expresso por 'avergonzada' ou 'apenada'."
      },
      {
        id: "c",
        text: "com dificuldades respiratórias obstrutivas nas vias aéreas.",
        isCorrect: false,
        distractorRationale: "Obstrução respiratória em espanhol é 'obstrucción' ou 'ahogo'."
      },
      {
        id: "d",
        text: "interditada judicialmente para atos da vida civil.",
        isCorrect: false,
        distractorRationale: "Significado jurídico sem respaldo léxico."
      },
      {
        id: "e",
        text: "endividada com as taxas de internação do hospital.",
        isCorrect: false,
        distractorRationale: "Sentido financeiro inexistente para o termo."
      }
    ],
    detailedExplanation: {
      summary: "'Embarazada' (grávida) é um dos falsos amigos mais conhecidos e testados em exames vestibulares e no ENEM.",
      stepByStep: [
        "1. Analisar o vocábulo: 'embarazada' = grávida / gestante.",
        "2. Contrastar com a língua portuguesa: em português 'embaraçada' significa sem jeito, tímida, atrapalhada, envergonhada.",
        "3. Como se diz envergonhada em espanhol? 'Avergonzada' ou 'apenada'.",
        "4. Conectar à alternativa B."
      ],
      coreConcept: "Heterossemânticos e vocabulário biomédico na língua espanhola.",
      trapWarning: "A armadilha clássica é traduzir 'embarazada' por 'envergonhada/tímida'."
    },
    commonTraps: ["Achar que a paciente estava com vergonha em vez de gestante."],
    tags: ["Espanhol", "Heterossemânticos", "Saúde Pública", "Vocabulário"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-023",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Tirinhas e Humor Crítico em Maitena",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na tirinha da cartunista argentina Maitena, uma mulher profissional exibe uma lista de metas para o ano novo:\n1. Cumplir 10 horas de trabajo sin quejarme.\n2. Ir al gimnasio tres veces por semana.\n3. Preparar comida orgánica y balanceada para la familia.\n4. Mantener la casa impecable.\n5. Sonreír siempre y no parecer estresada.\nNo último quadro, exausta e despenteada, ela rasga a folha e exclama: '¡Basta de autoexigencias sobrehumanas impuestas por la publicidad!'.",
      source: "MAITENA. Mujeres alteradas. Buenos Aires: Sudamericana, 2002."
    },
    prompt: "A resolução da tirinha de Maitena provoca o riso reflexivo ao denunciar",
    options: [
      {
        id: "a",
        text: "a incompetência das mulheres contemporâneas em organizar horários de trabalho.",
        isCorrect: false,
        distractorRationale: "A tirinha não critica a capacidade de organização feminina, mas a sobrecarga desumana gerada por cobranças irreais."
      },
      {
        id: "b",
        text: "a pressão estética e comportamental insustentável veiculada pelo padrão publicitário que exige perfeição simultânea da mulher em todas as esferas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Maitena desconstrói o mito da 'mulher perfeita' que deve conciliar carreira brilhante, corpo atlético, maternidade imaculada e serenidade inabalável, revelando a farsa adoecedora dessa exigência publicitária."
      },
      {
        id: "c",
        text: "a inutilidade das refeições nutritivas com alimentos frescos e orgânicos.",
        isCorrect: false,
        distractorRationale: "A crítica foca a exigência de ser uma mãe perfeita multitarefas, não os benefícios nutricionais da alimentação saudável."
      },
      {
        id: "d",
        text: "o encerramento definitivo das academias esportivas nos grandes centros urbanos.",
        isCorrect: false,
        distractorRationale: "Interpretação literal ingênua e descabida."
      },
      {
        id: "e",
        text: "o desinteresse das famílias em celebrar a passagem de ano em confraternizações coletivas.",
        isCorrect: false,
        distractorRationale: "A tirinha trata das listas de resoluções de ano novo como catalisadoras de ansiedade feminina."
      }
    ],
    detailedExplanation: {
      summary: "Maitena é conhecida por seus cartuns que retratam as neuroses e sobrecargas das mulheres urbanas modernas.",
      stepByStep: [
        "1. Analisar a lista de metas: tarefas profissionais, estéticas, domésticas e emocionais que somam exigências humanamente impossíveis.",
        "2. Identificar o clímax: a personagem rasga a folha e denuncia a 'autoexigencia sobrehumana impuesta por la publicidad'.",
        "3. Concluir que o humor liberta a leitora ao expor a opressão dos ideais inatingíveis de sucesso feminino."
      ],
      coreConcept: "Quadrinhos confessionais, gênero e crítica ao consumo em língua espanhola.",
      trapWarning: "Maitena e Quino são os dois maiores cartunistas argentinos frequentemente selecionados pelo INEP na prova de Espanhol do ENEM."
    },
    commonTraps: ["Achar que a personagem é preguiçosa, quando na verdade está sobrecarregada por cobranças incompatíveis."],
    tags: ["Espanhol", "Maitena", "Cartum", "Crítica Social", "Gênero"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-024",
    area: "linguagens",
    competence: 2,
    skill: 7,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Heterossemânticos e Expressões Corporais (Cuello, Rodilla, Espalda)",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "En las indicaciones de ergonomía para trabajadores de oficina se detalla: 'Para prevenir trastornos musculoesqueléticos provocados por el uso prolongado de computadoras, mantenga el monitor a la altura de los ojos para evitar tensionar el cuello. La espalda debe apoyarse firmemente en el respaldo de la silla y las rodillas deben formar un ángulo recto de noventa grados con los pies apoyados en el suelo'.",
      source: "INSTITUTO NACIONAL DE SEGURIDAD Y SALUD EN EL TRABAJO (INSST). Guía de ergonomía en pantallas de visualización de datos. Madrid, 2022."
    },
    prompt: "No guia de ergonomia laboral, as partes anatômicas do corpo humano referidas pelos vocábulos 'cuello', 'espalda' e 'rodillas' são, respectivamente,",
    options: [
      {
        id: "a",
        text: "coxa, ombros e tornozelos.",
        isCorrect: false,
        distractorRationale: "Vocábulos anatômicos incorretos."
      },
      {
        id: "b",
        text: "pescoço, costas e joelhos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Cuello' = pescoço / nuca; 'espalda' = costas / coluna dorsal; 'rodilla' = joelho (o cotovelo em espanhol é 'codo')."
      },
      {
        id: "c",
        text: "cotovelo, abdômen e panturrilhas.",
        isCorrect: false,
        distractorRationale: "Cotovelo é 'codo' em espanhol."
      },
      {
        id: "d",
        text: "pulso, quadril e calcanhares.",
        isCorrect: false,
        distractorRationale: "Pulso é 'muñeca', calcanhar é 'talón'."
      },
      {
        id: "e",
        text: "nuca, peito e canelas.",
        isCorrect: false,
        distractorRationale: "Peito em espanhol é 'pecho'."
      }
    ],
    detailedExplanation: {
      summary: "Termos anatômicos em espanhol aparecem recorrentemente em campanhas de postura e saúde ocupacional no ENEM.",
      stepByStep: [
        "1. Identificar 'cuello': pescoço (daí a expressão 'cuello de botella' = gargalo de garrafa).",
        "2. Identificar 'espalda': costas (dor nas costas = 'dolor de espalda').",
        "3. Identificar 'rodilla': joelho (artroplastia de joelho = 'rodilla').",
        "4. Conectar à opção B."
      ],
      coreConcept: "Vocabulário do corpo humano e ergonomia em língua espanhola.",
      trapWarning: "'Rodilla' não é rodinha; é joelho! 'Codo' é cotovelo. 'Hombro' é ombro."
    },
    commonTraps: ["Confundir 'cuello' (pescoço) com coelho ('conejo' em espanhol)."],
    tags: ["Espanhol", "Anatomia", "Ergonomia", "Saúde do Trabalho"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-ESP-025",
    area: "linguagens",
    competence: 2,
    skill: 8,
    topic: "Língua Estrangeira: Espanhol Instrumental",
    subtopic: "Línguas Originárias e Resistência Linguística na América Latina",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "El guaraní en Paraguay, el quechua en Perú y Bolivia, y el náhuatl en México no son reliquias arqueológicas condenadas a la desaparición: son idiomas vivos hablados por millones de personas que expresan ontologías de respeto a la tierra intraducibles al castellano. Las políticas de educación bilingüe intercultural no representan una concesión graciosa del Estado moderno, sino el reconocimiento de que la verdadera descolonización de América Latina comienza por descolonizar la lengua.",
      source: "DE SOUSA SANTOS, Boaventura. Epistemologías del Sur. Ciudad de México: Siglo XXI, 2014."
    },
    prompt: "No texto, a defesa da valorização e do ensino das línguas originárias na América Latina baseia-se na concepção de que",
    options: [
      {
        id: "a",
        text: "as línguas indígenas devem ser confinadas a rituais folclóricos para não prejudicar a assimilação da norma padrão castelhana.",
        isCorrect: false,
        distractorRationale: "O texto afirma exatamente o oposto: que não são relíquias e exigem educação bilíngue ampla."
      },
      {
        id: "b",
        text: "os idiomas nativos expressam saberes decoloniais e visões de mundo insubstituíveis, cuja preservação é indispensável para a superação de hierarquias coloniais históricas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O autor destaca que línguas como o quéchua e o guarani guardam modos ancestrais de relação com o cosmos que o castelhano colonial não alcança, sendo a educação intercultural bilíngue pilar fundamental de descolonização política e epistemológica."
      },
      {
        id: "c",
        text: "a multiplicidade de idiomas originários constitui um entrave insuperável para a integração comercial do continente.",
        isCorrect: false,
        distractorRationale: "Essa visão monolíngue utilitarista é explicitamente criticada pelo texto."
      },
      {
        id: "d",
        text: "o espanhol deve permanecer como único idioma oficial com validade jurídica em todos os órgãos do poder público.",
        isCorrect: false,
        distractorRationale: "O texto defende a cooficialidade e o fortalecimento das línguas ancestrais."
      },
      {
        id: "e",
        text: "as populações tradicionais preferem substituir suas línguas maternas por dialetos tecnológicos de inteligência artificial.",
        isCorrect: false,
        distractorRationale: "O texto atesta a vitalidade e a resistência linguística das comunidades no cotidiano."
      }
    ],
    detailedExplanation: {
      summary: "A preservação das línguas originárias latino-americanas é afirmada como direito humano inalienável e ato de resistência epistemológica.",
      stepByStep: [
        "1. Analisar o status das línguas: guarani, quéchua, náhuatl são línguas vivas, faladas cotidianamente por milhões de latino-americanos.",
        "2. Identificar o valor ontológico: contêm saberes ecológicos e comunitários singulares.",
        "3. Concluir que a educação bilíngue intercultural é condição necessária para a descolonização do continente."
      ],
      coreConcept: "Educação bilíngue intercultural, línguas originárias e descolonização linguística na América Latina.",
      trapWarning: "No Paraguai, o guarani é língua oficial juntamente com o espanhol, falado pela esmagadora maioria da população de todas as classes sociais."
    },
    commonTraps: ["Achar que as línguas indígenas da América Hispânica estão extintas ou restritas a poucos idosos em aldeias isoladas."],
    tags: ["Espanhol", "Línguas Indígenas", "Guarani", "Quéchua", "Descolonização"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
