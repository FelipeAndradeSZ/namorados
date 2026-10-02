/**
 * Banco de Questões ENEM — Ciências Humanas e suas Tecnologias
 * Módulo: Iluminismo, Revoluções Burguesas e Pensamento Liberal
 * 
 * 25 Questões Inéditas Rigorosamente Alinhadas à Matriz do INEP
 * Validação: 5 alternativas (a-e), 1 correta, justificativa para cada distrator,
 * resolução pedagógica passo a passo e foco nos pilares da TRI.
 * ZERO termos de viagem.
 */

export const QUESTIONS_ILUMINISMO_REVOLUCOES_BURGUESAS = [
  {
    id: "HUM-ILU-001",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "Crítica Iluminista aos Privilégios Estamentais do Antigo Regime",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No século XVIII europeu, a sociedade do Antigo Regime organizava-se em uma rígida estrutura estamental de ordens hereditárias: o Primeiro Estado (clero) e o Segundo Estado (nobreza) detinham isenções tributárias quase totais, monopolizavam os altos cargos militares e administrativos e julgavam seus pares em tribunais especiais. Todo o peso da arrecadação fiscal recaía sobre o Terceiro Estado, composto por camponeses, artesãos e a ascendente burguesia comercial e financeira.",
      source: "História Moderna e as Raízes da Cidadania Ocidental"
    },
    prompt: "A crítica dos filósofos iluministas a essa ordenação societária tradicional fundamentava-se na defesa de que:",
    options: [
      { id: "a", text: "todos os seres humanos nascem dotados de razão e direitos naturais inalienáveis, devendo ser considerados juridicamente iguais perante a lei civil do Estado.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o clero católico deveria assumir o controle total dos três poderes republicanos para garantir a moralidade pública.", isCorrect: false, distractorRationale: "Os iluministas combatiam o monopólio eclesial e defendiam o laicismo e a separação entre Estado e Igreja." },
      { id: "c", text: "os camponeses deveriam ser excluídos de qualquer proteção legal devido à sua falta de instrução formal.", isCorrect: false, distractorRationale: "O Iluminismo propunha a extensão universal da educação laica e da dignidade humana a todos os estratos." },
      { id: "d", text: "a nobreza de sangue possuía legitimidade biológica e divina superior para ditar as normas jurídicas sem intervenção popular.", isCorrect: false, distractorRationale: "O direito divino dos reis e a hierarquia biológica de sangue eram os alvos principais combatidos pelas Luzes." },
      { id: "e", text: "o comércio e as manufaturas deveriam ser extintos para que a sociedade retornasse à subsistência feudal pura.", isCorrect: false, distractorRationale: "A burguesia iluminista valorizava o progresso técnico, o comércio livre e a ciência aplicada." }
    ],
    detailedExplanation: {
      summary: "O Iluminismo fundou a concepção moderna de igualdade civil. Contra a sociedade estamental de privilégios de nascimento herdados e isenções parasitárias da nobreza e do clero, os filósofos ilustrados argumentavam que, sendo dotados de razão natural, todos os homens possuem direitos fundamentais inatos (vida, liberdade, propriedade) e devem ser julgados pela mesma lei civil, destruindo a legitimidade dos tribunais de exceção nobiliárquicos.",
      stepByStep: [
        "1. Identificar a estrutura do Antigo Regime: Sociedade estamental dividida em três estados com privilégios de nascimento.",
        "2. Identificar a contradição social: Terceiro Estado sustentava os tributos enquanto Primeiro e Segundo Estados tinham isenções.",
        "3. Localizar a resposta iluminista: Razão, direitos naturais e igualdade jurídica (isonomia).",
        "4. Relacionar com o legado ocidental: Declaração dos direitos e superação do absolutismo.",
        "5. Concluir que a igualdade civil perante a lei é o núcleo da crítica ilustrada."
      ],
      coreConcept: "A isonomia jurídica (todos iguais perante a lei) foi a grande bandeira burguesa iluminista contra a desigualdade jurídica estamental do Antigo Regime.",
      trapWarning: "Cuidado: a igualdade pregada pela burguesia iluminista era uma igualdade JURÍDICA perante a lei, e não igualdade econômica e material."
    },
    commonTraps: ["Confundir igualdade jurídica civil burguesa com socialismo ou igualdade material de renda"],
    tags: ["antigo-regime", "iluminismo", "estamentos", "igualdade-juridica", "filosofia"]
  },
  {
    id: "HUM-ILU-002",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "Montesquieu e a Tripartição dos Poderes",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "“Para que não se possa abusar do poder, é preciso que, pela disposição das coisas, o poder freie o poder. Tudo estaria perdido se o mesmo homem, ou o mesmo corpo dos principais, ou dos nobres, ou do povo, exercesse estes três poderes: o de fazer leis, o de executar as resoluções públicas e o de julgar os crimes ou as divergências dos indivíduos.”\n(MONTESQUIEU. Do Espírito das Leis, 1748).",
      source: "MONTESQUIEU. Do Espírito das Leis. São Paulo: Martins Fontes, 2000"
    },
    prompt: "A teoria política da separação e autonomia dos poderes formulada por Montesquieu tem como finalidade primordial:",
    options: [
      { id: "a", text: "impedir a concentração absolutista de autoridade e a tirania arbitrária por meio do equilíbrio recíproco e fiscalização mútua entre os órgãos do Estado.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "subordinar o Poder Judiciário à vontade soberana do monarca absolutista para acelerar sentenças criminais.", isCorrect: false, distractorRationale: "Montesquieu defende exatamente a independência total do Judiciário em relação ao Executivo monárquico." },
      { id: "c", text: "garantir que apenas os membros hereditários da alta nobreza possam legislar e aplicar penalidades cívicas.", isCorrect: false, distractorRationale: "A teoria visa evitar o monopólio aristocrático ou pessoal de qualquer classe sobre a totalidade do poder." },
      { id: "d", text: "eliminar a necessidade de leis escritas em favor do livre julgamento moral e religioso de cada magistrado.", isCorrect: false, distractorRationale: "O Espírito das Leis preconiza a supremacia das leis racionais, objetivas e codificadas." },
      { id: "e", text: "instituir a anarquia como forma definitiva de desregulamentação das relações econômicas da Europa.", isCorrect: false, distractorRationale: "Montesquieu propõe um Estado constitucional estruturado com freios e contrapesos, e não o anarquismo." }
    ],
    detailedExplanation: {
      summary: "Montesquieu formulou o princípio dos 'freios e contrapesos' (checks and balances): ao cindir as prerrogativas estatais em Executivo, Legislativo e Judiciário, autônomos e harmônicos entre si, impede-se que um único indivíduo ou grupo concentre poder absoluto e descambe para a tirania despótica. A fiscalização recíproca entre os três poderes é a salvaguarda da liberdade política do cidadão.",
      stepByStep: [
        "1. Ler atentamente o excerto de Montesquieu: 'é preciso que o poder freie o poder'.",
        "2. Identificar a denúncia central: A concentração dos três ramos da autoridade nas mãos de uma só pessoa gera tirania.",
        "3. Identificar os três poderes: Executivo (administrar), Legislativo (elaborar leis) e Judiciário (julgar litígios).",
        "4. Reconhecer a função do sistema de freios e contrapesos: Limitar o poder com o próprio poder para resguardar a liberdade dos governados.",
        "5. Concluir que a alternativa correta é a (a)."
      ],
      coreConcept: "A tripartição dos poderes de Montesquieu visa descentralizar a autoridade e criar freios mútuos para barrar o arbítrio tirânico e garantir liberdades constitucionais.",
      trapWarning: "A tripartição não busca isolar os poderes em trincheiras inimigas, mas criar equilíbrio dinâmico e fiscalização mútua."
    },
    commonTraps: ["Achar que Montesquieu defendia que o Executivo tivesse a palavra final sobre o Judiciário"],
    tags: ["Montesquieu", "triparticao-poderes", "freios-e-contrapesos", "antigo-regime", "politica"]
  },
  {
    id: "HUM-ILU-003",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "Rousseau e o Contrato Social: Vontade Geral e Soberania Popular",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "“A soberania não pode ser representada pela mesma razão por que não pode ser alienada; ela consiste essencialmente na vontade geral e a vontade não se representa de modo algum: ou é ela mesma ou é outra; não há meio-termo. Os deputados do povo não são, pois, nem podem ser seus representantes; não passam de seus comissários, nada podendo concluir definitivamente.”\n(ROUSSEAU, Jean-Jacques. Do Contrato Social, 1762).",
      source: "ROUSSEAU, J.-J. Do Contrato Social. São Paulo: Abril Cultural, 1978"
    },
    prompt: "A concepção de Rousseau expressa no texto rompe com as teorias liberais clássicas de representação parlamentar ao defender que:",
    options: [
      { id: "a", text: "o poder soberano emana diretamente do povo reunido e é inalienável, devendo os delegados públicos submeter-se estritamente à deliberação da vontade geral coletiva.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "os parlamentares eleitos adquirem procuração irrestrita para ignorar os anseios populares durante a vigência de seus mandatos.", isCorrect: false, distractorRationale: "Rousseau afirma categoricamente que os deputados não são representantes soberanos, mas meros comissários sem poder conclusivo." },
      { id: "c", text: "a vontade geral é a simples soma aritmética dos interesses egoístas e privados dos membros da elite aristocrática.", isCorrect: false, distractorRationale: "Rousseau diferencia a 'vontade de todos' (soma de interesses particulares egoístas) da 'vontade geral' (orientada ao bem comum coletivo)." },
      { id: "d", text: "o governo legítimo deve ser confiado a um monarca absolutista vitalício por ser o único capaz de encarnar a vontade nacional.", isCorrect: false, distractorRationale: "Rousseau é um teórico republicano radical que condena a alienação da soberania a qualquer rei ou déspota." },
      { id: "e", text: "as decisões políticas devem ser transferidas para os comitês das corporações de ofício medievais.", isCorrect: false, distractorRationale: "Rousseau defende o corpo cívico de cidadãos reunidos em praça pública, e não guildas feudais de privilégios." }
    ],
    detailedExplanation: {
      summary: "Jean-Jacques Rousseau é o formulador da democracia participativa radical e da soberania popular inalienável. Para ele, a soberania reside no povo e não pode ser delegada ou vendida para deputados profissionais. A 'Vontade Geral' não é uma mera contagem de votos corporativos individuais, mas a orientação ética da comunidade em direção ao bem comum. Portanto, governantes e parlamentares são meros funcionários transitórios a serviço do corpo de cidadãos.",
      stepByStep: [
        "1. Analisar as teses centrais do texto: 'A soberania não pode ser alienada nem representada'.",
        "2. Identificar a função dos delegados: Meros comissários executivos, sem autonomia de decidir por conta própria.",
        "3. Conceituar Vontade Geral: Expressão do interesse público coletivo inalienável.",
        "4. Diferenciar de Locke/Hobbes: Para Rousseau, a soberania nunca sai das mãos do povo.",
        "5. Concluir que a soberania emana da deliberação coletiva soberana inalienável."
      ],
      coreConcept: "Para Rousseau, a soberania é indivisível e inalienável: o povo é o único soberano legítimo, e os governantes são apenas comissários subordinados à Vontade Geral.",
      trapWarning: "Não confunda a 'Vontade Geral' de Rousseau (busca do bem comum) com a 'vontade de todos' (mera soma de interesses particulares e egoístas)."
    },
    commonTraps: ["Achar que Rousseau defendia que o parlamento pudesse legislar sem prestar contas aos cidadãos"],
    tags: ["Rousseau", "Contrato-Social", "Vontade-Geral", "soberania-popular", "democracia"]
  },
  {
    id: "HUM-ILU-004",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A Enciclopédia de Diderot e d'Alembert e a Laicização do Saber",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Entre 1751 e 1772, Denis Diderot e Jean le Rond d’Alembert coordenaram a monumental publicação da 'Enciclopédia, ou Dicionário Razoado das Ciências, das Artes e dos Ofícios'. Com 28 volumes e colaborações de Voltaire, Rousseau e Montesquieu, a obra causou furor e foi repetidamente censurada pela Coroa francesa e pela Igreja Católica, que a incluiu no 'Index Librorum Prohibitorum'.",
      source: "A Aventura da Enciclopédia e as Luzes Europeias"
    },
    prompt: "O impacto revolucionário da Enciclopédia no Século das Luzes residiu em seu empenho em:",
    options: [
      { id: "a", text: "sistematizar e democratizar o conhecimento sob bases empíricas e laicas, combatendo a superstição, o dogmatismo religioso e o monopólio clerical do saber.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "provar teologicamente que os reis absolutistas recebiam seus poderes por graça divina direta dos apóstolos.", isCorrect: false, distractorRationale: "A Enciclopédia questionava a revelação dogmática e defendia a ciência experimental laica e a razão crítica." },
      { id: "c", text: "restringir o acesso aos avanços científicos aos mosteiros e clausuras das ordens religiosas medievais.", isCorrect: false, distractorRationale: "O objetivo explícito dos enciclopedistas era retirar o saber das abadias e colocá-lo a serviço do público laico." },
      { id: "d", text: "combater o trabalho manual e desqualificar o ofício dos artesãos perante as belas-artes aristocráticas.", isCorrect: false, distractorRationale: "A Enciclopédia valorizou os ofícios manuais como nunca antes, dedicando pranchas técnicas ilustradas às oficinas artesanais." },
      { id: "e", text: "exigir a queima de todos os livros impressos anteriores ao século XVIII em fogueiras públicas.", isCorrect: false, distractorRationale: "A obra foi um esforço de resgate acumulativo e síntese de toda a história do pensamento científico." }
    ],
    detailedExplanation: {
      summary: "A 'Enciclopédia' foi a maior arma de propaganda filosófica do Iluminismo. Ao compilar todo o conhecimento humano acumulado — desde as ciências naturais e filosofia até técnicas artesanais de metalurgia e tecelagem — a obra substituiu o dogma teológico e a autoridade tradicional da Igreja pela observação empírica, razão crítica e utilidade social do progresso técnico, desencadeando a laicização da cultura ocidental.",
      stepByStep: [
        "1. Identificar a obra: Enciclopédia de Diderot e d'Alembert (século XVIII).",
        "2. Identificar os adversários: Monarquia absolutista e Igreja Católica (Index de livros proibidos).",
        "3. Reconhecer o princípio orientador: Razão crítica, empirismo científico, laicidade e valorização dos ofícios técnicos.",
        "4. Analisar a recepção: Instrumento de formação da opinião pública burguesa esclarecida.",
        "5. Concluir que a democratização do conhecimento racional laico foi o objetivo revolucionário do projeto."
      ],
      coreConcept: "A Enciclopédia organizou o saber fora da tutela da Igreja e da Monarquia, promovendo a autonomia da razão, a liberdade de pensamento e o progresso técnico.",
      trapWarning: "Observe que a Enciclopédia dedicou volumes inteiros aos 'ofícios mecânicos', rompendo com o desprezo aristocrático pelo trabalho manual."
    },
    commonTraps: ["Achar que a Enciclopédia era uma publicação oficial financiada pela Igreja para catequização"],
    tags: ["Enciclopedia", "Diderot", "laicismo", "razao", "iluminismo"]
  },
  {
    id: "HUM-ILU-005",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "Liberalismo Econômico Clássico: Adam Smith e a Mão Invisível",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "“Não é da benevolência do açougueiro, do cervejeiro ou do padeiro que esperamos nosso jantar, mas da consideração que eles têm pelo seu próprio interesse. Não nos dirigimos à sua humanidade, mas ao seu amor-próprio, e nunca lhes falamos de nossas necessidades, mas das vantagens deles.”\n(SMITH, Adam. A Riqueza das Nações, 1776).",
      source: "SMITH, Adam. A Riqueza das Nações. São Paulo: Nova Cultural, 1996"
    },
    prompt: "Ao fundar a teoria do liberalismo econômico clássico, Adam Smith sustentava que o enriquecimento das nações resulta da:",
    options: [
      { id: "a", text: "livre concorrência e busca individual de interesses em mercados desregulamentados, em que a divisão do trabalho e a iniciativa privada promovem espontaneamente a prosperidade coletiva.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "fixação rigorosa de preços e tabelamento de salários pela burocracia do Estado absolutista mercantilista.", isCorrect: false, distractorRationale: "Adam Smith combatia frontalmente o intervencionismo e os monopólios do mercantilismo absolutista." },
      { id: "c", text: "proibição das trocas mercantis privadas para que o rei redistribua toda a produção camponesa.", isCorrect: false, distractorRationale: "O liberalismo defende a garantia irrestrita da propriedade privada e a livre troca mercantil." },
      { id: "d", text: "acumulação exclusiva de ouro e prata nos cofres régios por meio do fechamento alfandegário total.", isCorrect: false, distractorRationale: "Essa é a definição do metalismo mercantilista, doutrina que Smith refutou ao provar que a verdadeira riqueza é o trabalho produtivo." },
      { id: "e", text: "extinção das indústrias para que todo o valor econômico emane unicamente da pesca artesanal.", isCorrect: false, distractorRationale: "Smith elogiou a manufatura e a divisão do trabalho fabril como os maiores multiplicadores da produtividade." }
    ],
    detailedExplanation: {
      summary: "Em 'A Riqueza das Nações', Adam Smith formula as bases do liberalismo econômico: a verdadeira riqueza de um país decorre da capacidade do trabalho humano produtivo e de sua especialização (divisão do trabalho), e não do mero acúmulo de metais preciosos (mercantilismo). Pela metáfora da 'mão invisível', a busca individual pelo interesse pessoal em um ambiente de livre mercado e concorrência acaba, por via reflexa, promovendo a eficiência e o bem-estar da sociedade como um todo, exigindo que o Estado não intervenha na economia (laissez-faire).",
      stepByStep: [
        "1. Analisar o fragmento de Adam Smith: O padeiro produz pão não por caridade, mas pelo interesse legítimo de lucro.",
        "2. Identificar a teoria: Liberalismo econômico clássico.",
        "3. Reconhecer o mecanismo: A livre iniciativa individual mediada pelo mercado coordena a oferta e a demanda ('mão invisível').",
        "4. Contrastar com o mercantilismo: Smith critica monopólios régios, protecionismo e taxas aduaneiras abusivas.",
        "5. Concluir que a livre concorrência e a divisão do trabalho são as fontes da riqueza para Smith."
      ],
      coreConcept: "Adam Smith revolucionou a economia política ao demonstrar que o trabalho produtivo e o livre mercado sem entraves mercantilistas geram prosperidade coletiva.",
      trapWarning: "Smith defendia o livre mercado, mas não a ausência total de Estado: ele atribuía ao poder público a segurança nacional, a justiça e a infraestrutura básica necessária ao comércio."
    },
    commonTraps: ["Confundir liberalismo clássico com metalismo mercantilista"],
    tags: ["Adam-Smith", "liberalismo-economico", "mao-invisivel", "divisao-trabalho", "mercantilismo"]
  },
  {
    id: "HUM-ILU-006",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "Despotismo Esclarecido e Reformas Pombalinas",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na segunda metade do século XVIII, monarcas absolutos de países economicamente periféricos da Europa (como Portugal, Prússia, Rússia e Áustria) adotaram medidas inspiradas nas ideias dos filósofos ilustrados sem, contudo, abrir mão do absolutismo político. Em Portugal, o Marquês de Pombal (ministro de D. José I) impulsionou reformas na administração colonial brasileira: transferiu a capital de Salvador para o Rio de Janeiro (1763), extinguiu as capitanias hereditárias remanescentes, expulsou os jesuítas (1759) e estabeleceu a derrama fiscal para cobrança do quinto do ouro.",
      source: "O Império Luso-Brasileiro e as Reformas Ilustradas"
    },
    prompt: "O fenômeno do Despotismo Esclarecido em Portugal evidenciou uma estratégia política de:",
    options: [
      { id: "a", text: "modernizar a economia e a administração burocrática estatal com apoio de ideias racionais, visando fortalecer o poder régio e maximizar a exploração fiscal da colônia sem conceder liberdade política.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "democratizar a monarquia lusa concedendo voto universal e imediata emancipação política ao Brasil.", isCorrect: false, distractorRationale: "O Despotismo Esclarecido preservou o absolutismo e apertou os laços do pacto colonial mercantil." },
      { id: "c", text: "subordinar a Coroa portuguesa às diretrizes teológicas da Companhia de Jesus.", isCorrect: false, distractorRationale: "Pombal entrou em choque frontal com a Igreja e expulsou os jesuítas de Portugal e de todas as colônias." },
      { id: "d", text: "declarar o fim da escravidão nas minas e lavouras brasileiras por princípios de fraternidade cósmica.", isCorrect: false, distractorRationale: "A ordem escravocrata colonial permaneceu a base intacta e intocada do modelo econômico pombalino." },
      { id: "e", text: "renunciar a todas as taxas sobre o ouro para desestimular o povoamento do interior mineiro.", isCorrect: false, distractorRationale: "Pombal intensificou a cobrança tributária e instituiu a odiada derrama de 100 arrobas de ouro anuais." }
    ],
    detailedExplanation: {
      summary: "O Despotismo Esclarecido foi uma fórmula contraditória: 'tudo para o povo, mas nada pelo povo'. Monarcas e ministros absolutistas (como o Marquês de Pombal) apropriaram-se de preceitos iluministas (racionalização administrativa, laicização do ensino, estímulo a manufaturas) exclusivamente para modernizar a máquina de arrecadação do Estado absolutista e competir com a Inglaterra, sem nenhuma abertura democrática real. No Brasil colonial, isso se traduziu em arrocho fiscal sobre a mineração e conflitos que culminaram na Inconfidência Mineira.",
      stepByStep: [
        "1. Definir Despotismo Esclarecido: Apropriação seletiva da racionalidade iluminista por governantes absolutistas.",
        "2. Identificar as medidas de Pombal: Expulsão dos jesuítas, transferência da capital para o Rio (proximidade das minas), criação de companhias de comércio e cobrança da derrama.",
        "3. Analisar a contradição: Uso de métodos racionais modernos para preservar a essência do absolutismo e do pacto colonial.",
        "4. Relacionar com as consequências no Brasil: Descontentamento da elite colonial das Gerais e embrião da Inconfidência Mineira de 1789.",
        "5. Concluir que o objetivo era o fortalecimento da autoridade régia e da arrecadação colonial."
      ],
      coreConcept: "O Despotismo Esclarecido buscou modernizar a administração burocrática e a economia para fortalecer o Estado absolutista, e não para promover liberdades democráticas populares.",
      trapWarning: "Cuidado: Pombal expulsou os jesuítas para laicizar a educação e submeter a Igreja à autoridade da Coroa (regalismo), e não por tolerância religiosa."
    },
    commonTraps: ["Achar que o Despotismo Esclarecido acabou com o absolutismo monárquico"],
    tags: ["despotismo-esclarecido", "Pombal", "Brasil-Colonia", "ouro", "absolutismo"]
  },
  {
    id: "HUM-ILU-007",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A Revolução Gloriosa (1688) e a Monarquia Parlamentar Inglesa",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1689, como desfecho da Revolução Gloriosa que depôs Jaime II, o Parlamento britânico aprovou a Declaração de Direitos (Bill of Rights), assinada por Guilherme de Orange. O documento determinava expressamente: 'É ilegal o pretendido poder da autoridade régia de suspender leis ou a execução de leis sem o consentimento do Parlamento; é ilegal a cobrança de impostos para a Coroa sem outorga do Parlamento; as eleições dos membros do Parlamento devem ser livres'.",
      source: "A Revolução Inglesa e a Fundação do Parlamentarismo Moderno"
    },
    prompt: "A assinatura da Bill of Rights de 1689 representou um marco histórico na Europa por ter:",
    options: [
      { id: "a", text: "instituído a monarquia parlamentarista constitucional, na qual o poder do monarca foi juridicamente subordinado à soberania e deliberação das leis pelo Parlamento.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "restaurado o absolutismo de direito divino sob a tutela teocrática da Igreja Anglicana.", isCorrect: false, distractorRationale: "O documento enterrou para sempre o absolutismo na Grã-Bretanha, transferindo a primazia do poder para o Parlamento." },
      { id: "c", text: "proclamado a República dos Niveladores com sufrágio universal de camponeses e mulheres.", isCorrect: false, distractorRationale: "A monarquia foi mantida de forma constitucional e o Parlamento era controlado pela nobreza agrária (gentry) e burguesia mercantil." },
      { id: "d", text: "transferido a Coroa britânica para os reis católicos da dinastia Bourbon da França.", isCorrect: false, distractorRationale: "A revolução estabeleceu que o monarca inglês não poderia ser católico." },
      { id: "e", text: "abolido todos os tributos sobre produtos industriais para decretar a falência do comércio ultramarino.", isCorrect: false, distractorRationale: "O documento apenas condicionava a cobrança de tributos ao aval prévio dos parlamentares." }
    ],
    detailedExplanation: {
      summary: "A Revolução Gloriosa (1688) e a 'Bill of Rights' (1689) selaram o fim do absolutismo na Inglaterra quase um século antes da Revolução Francesa. Nasceu aí o célebre princípio 'o Rei reina, mas o Parlamento governa'. Ao subordinar o rei à lei votada pelo Parlamento e conferir segurança jurídica à propriedade privada, a burguesia e a aristocracia britânicas criaram o ecossistema institucional e econômico que possibilitou a eclosão da Primeira Revolução Industrial.",
      stepByStep: [
        "1. Analisar o conteúdo da Bill of Rights (1689): O rei não pode criar leis nem impostos sem o Parlamento.",
        "2. Identificar a forma de governo resultante: Monarquia Parlamentar Constitucional.",
        "3. Reconhecer os agentes sociais beneficiados: Burguesia mercantil e a 'gentry' (nobreza proprietária de terras).",
        "4. Relacionar com as transformações econômicas: Segurança jurídica e limites ao monarca abrem caminho para o capitalismo industrial britânico.",
        "5. Concluir que a limitação jurídica do poder régio é o marco histórico inaugural do documento."
      ],
      coreConcept: "A Revolução Gloriosa fundou a Monarquia Parlamentar inglesa, sepultando o absolutismo e estabelecendo a supremacia constitucional da lei sobre a vontade do rei.",
      trapWarning: "Embora revolucionária contra o rei, a Revolução Gloriosa não era democrática nem popular: o voto continuou censitário baseado em renda e terra."
    },
    commonTraps: ["Achar que a Bill of Rights inglesa instituiu o voto universal de toda a população"],
    tags: ["Revolucao-Gloriosa", "Bill-of-Rights", "Inglaterra", "parlamentarismo", "absolutismo"]
  },
  {
    id: "HUM-ILU-008",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "Independência dos EUA (1776) e Contradições da Cidadania Liberal",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "“Consideramos estas verdades como evidentes por si mesmas, que todos os homens são criados iguais, dotados pelo Criador de certos direitos inalienáveis, entre os quais estão a vida, a liberdade e a busca da felicidade; que, para assegurar esses direitos, governos são instituídos entre os homens, derivando seus justos poderes do consentimento dos governados.”\n(DECLARAÇÃO DE INDEPENDÊNCIA DOS ESTADOS UNIDOS DA AMÉRICA, 4 de julho de 1776).",
      source: "CARVALHO, Marcus J. M. A Revolução Americana. São Paulo: Atual, 1995"
    },
    prompt: "Embora fundamentada nas teses do iluminismo e do jusnaturalismo de John Locke, a nova ordem republicana instituída pela independência norte-americana caracterizou-se pela contradição histórica de ter:",
    options: [
      { id: "a", text: "preservado a escravidão de milhões de negros de origem africana nas plantations do Sul e despojado os povos indígenas de suas terras ancestrais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "concedido imediato direito de voto a todas as mulheres e pessoas escravizadas em eleições federais.", isCorrect: false, distractorRationale: "O sufrágio manteve-se restrito e censitário, excluindo completamente mulheres, negros e indígenas." },
      { id: "c", text: "mantido a subordinação fiscal e militar vitalícia das 13 colônias perante a Coroa britânica.", isCorrect: false, distractorRationale: "A independência rompeu em definitivo o vínculo colonial com o Império Britânico." },
      { id: "d", text: "estabelecido uma ditadura comunista coletivista de controle estatal de todas as fazendas de algodão.", isCorrect: false, distractorRationale: "Os EUA consolidaram o modelo capitalista liberal baseado na propriedade privada irrestrita." },
      { id: "e", text: "abolido o comércio internacional em prol de uma economia de trocas pré-monetárias isoladas.", isCorrect: false, distractorRationale: "A nação recém-independente inseriu-se vorazmente no comércio exterior transatlântico." }
    ],
    detailedExplanation: {
      summary: "A Declaração de Independência de 1776 é uma aplicação direta das teses liberais de John Locke (direitos naturais e consentimento dos governados). Contudo, essa retórica universalista de 'todos os homens são criados iguais' continha uma fratura estrutural: foi forjada por uma elite de homens brancos e proprietários que manteve a escravidão de centenas de milhares de negros, negou a cidadania às mulheres e promoveu a expansão militar agressiva sobre as terras dos povos originários indígenas.",
      stepByStep: [
        "1. Analisar os princípios enunciados no texto de 1776: Igualdade inata, direitos inalienáveis (vida, liberdade, busca da felicidade).",
        "2. Identificar as matrizes teóricas: O iluminismo e o contratualismo liberal de John Locke.",
        "3. Confrontar a retórica com a realidade social pós-1776: A continuidade da escravidão nas fazendas sulistas por quase mais um século.",
        "4. Identificar os sujeitos excluídos: Pessoas escravizadas negras, mulheres e indígenas.",
        "5. Concluir que a preservação do cativeiro negro e espoliação indígena constitui a contradição fundamental do liberalismo fundacional norte-americano."
      ],
      coreConcept: "A Revolução Americana operou um liberalismo de elites: universal na retórica dos direitos naturais, mas profundamente excludente e escravocrata na prática social.",
      trapWarning: "Thomas Jefferson, redator da Declaração, era ele próprio proprietário de centenas de escravizados, evidenciando o limite de classe e raça da cidadania burguesa setecentista."
    },
    commonTraps: ["Achar que a Independência dos EUA aboliu a escravidão em 1776"],
    tags: ["Independencia-EUA", "Locke", "iluminismo", "escravidao", "contradicao-liberal"]
  },
  {
    id: "HUM-ILU-009",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A Declaração dos Direitos do Homem e do Cidadão (França, 1789)",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "“Art. 1º. Os homens nascem e são livres e iguais em direitos. As distinções sociais só podem fundar-se na utilidade comum.\nArt. 2º. O fim de toda associação política é a conservação dos direitos naturais e imprescritíveis do homem. Esses direitos são a liberdade, a propriedade, a segurança e a resistência à opressão.\nArt. 6º. A lei é a expressão da vontade geral. Todos os cidadãos têm o direito de concorrer, pessoalmente ou através de seus representantes, para a sua formação.”\n(DECLARAÇÃO DOS DIREITOS DO HOMEM E DO CIDADÃO, França, 26 de agosto de 1789).",
      source: "VOVELLE, Michel. A Revolução Francesa. São Paulo: Unesp, 2012"
    },
    prompt: "Promulgada pela Assembleia Nacional Constituinte no início da Revolução Francesa, essa Declaração estabeleceu as bases do mundo contemporâneo ao consagrar o princípio do(a):",
    options: [
      { id: "a", text: "Estado de Direito laico e liberal, no qual a lei emana da soberania cívica e garante a isonomia jurídica universal contra o privilégio aristocrático.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "direito divino dos reis absolutistas em suspender as garantias individuais em tempos de colheita escassa.", isCorrect: false, distractorRationale: "O texto afirma expressamente que a soberania reside na nação e na lei como vontade geral, sepultando o direito divino." },
      { id: "c", text: "restauração do tribunal da Santa Inquisição para vigiar os limites da livre manifestação filosófica.", isCorrect: false, distractorRationale: "A Declaração consagrou a liberdade de consciência e opinião religiosa (Art. 10)." },
      { id: "d", text: "abolição da propriedade privada individual e socialização coercitiva de todos os bens materiais.", isCorrect: false, distractorRationale: "O Art. 2º e o Art. 17 colocam a propriedade privada como um direito sagrado, natural e inviolável da ordem burguesa." },
      { id: "e", text: "manutenção dos títulos de nobreza como critério único para o exercício da magistratura e altas patentes militares.", isCorrect: false, distractorRationale: "O Art. 1º e 6º extinguem a distinção de nascimento, abrindo todos os cargos ao mérito individual." }
    ],
    detailedExplanation: {
      summary: "A Declaração de 1789 é a certidão de nascimento da cidadania moderna ocidental. Ela consolidou o tripé do Iluminismo burguês: liberdade individual, igualdade jurídica perante a lei (isonomia) e inviolabilidade da propriedade privada. Derrubou os pilares feudais da sociedade estamental, declarando que o governo existe para resguardar os direitos naturais e que a legitimidade do poder provém do consentimento e da soberania da nação.",
      stepByStep: [
        "1. Analisar os artigos do documento de 1789: Igualdade de nascimento, direitos naturais (vida, liberdade, propriedade, segurança, resistência à tirania).",
        "2. Identificar a fonte da soberania: A lei como expressão da vontade geral (influência rousseauísta).",
        "3. Confrontar com o Antigo Regime: Desmantelamento dos privilégios de sangue da nobreza e do clero.",
        "4. Reconhecer o papel da propriedade: Considerada direito natural inalienável (cunho burguês).",
        "5. Concluir que o documento consagra o Estado de Direito liberal e a igualdade civil."
      ],
      coreConcept: "A Declaração de 1789 instituiu a igualdade civil formal e os direitos civis e políticos inalienáveis como fundamento de qualquer Estado legítimo.",
      trapWarning: "Lembre-se: 'liberdade, igualdade e fraternidade' não significava extinção da propriedade privada; a burguesia revolucionária considerava a propriedade privada um direito inegociável."
    },
    commonTraps: ["Achar que a Revolução Francesa aboliu a propriedade privada"],
    tags: ["Declaracao-1789", "Revolucao-Francesa", "isonomia", "Estado-de-Direito", "cidadania"]
  },
  {
    id: "HUM-ILU-010",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "Olympe de Gouges e a Luta pelos Direitos da Mulher na Revolução Francesa",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "“A mulher nasce livre e tem os mesmos direitos que o homem. As distinções sociais só podem ser baseadas no interesse comum.\nSe a mulher tem o direito de subir ao cadafalso, ela deve ter igualmente o de subir à tribuna, desde que suas manifestações não perturbem a ordem pública estabelecida pela lei.”\n(GOUGES, Olympe de. Declaração dos Direitos da Mulher e da Cidadã, setembro de 1791).",
      source: "HUNT, Lynn. A Invenção dos Direitos Humanos: uma história. São Paulo: Companhia das Letras, 2009"
    },
    prompt: "Ao redigir a Declaração de 1791, a dramaturga e ativista Olympe de Gouges explicitou o limite da Revolução Francesa ao denunciar que:",
    options: [
      { id: "a", text: "o universalismo apregoado pelos revolucionários homens era androcêntrico, excluindo as mulheres da cidadania política ativa e da igualdade de direitos civis.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "as mulheres deveriam ser proibidas de participar de debates cívicos para evitar que fossem condenadas à guilhotina.", isCorrect: false, distractorRationale: "Olympe defendia justamente que as mulheres deveriam ocupar a tribuna política tanto quanto podiam ser punidas na guilhotina." },
      { id: "c", text: "a monarquia absolutista era preferível à república por historicamente conceder direito de voto integral às camponesas.", isCorrect: false, distractorRationale: "No absolutismo ninguém votava; a ativista exigia a radicalização democrática da República para incluir as mulheres." },
      { id: "d", text: "os direitos da mulher deveriam subordinar-se aos decretos papais promulgados pelo clero refratário.", isCorrect: false, distractorRationale: "O texto de Olympe é laico e iluminista, fundado na razão natural." },
      { id: "e", text: "o código civil revolucionário já contemplava plenamente a igualdade salarial e o divórcio sem necessidade de novos manifestos.", isCorrect: false, distractorRationale: "As mulheres continuavam tuteladas e sem direitos políticos, motivo pelo qual ela redigiu o manifesto." }
    ],
    detailedExplanation: {
      summary: "A 'Declaração dos Direitos do Homem e do Cidadão' de 1789 utilizava o termo 'homem' não em sentido neutro abstrato, mas no sentido biológico e social estrito do sexo masculino: as mulheres francesas foram excluídas do direito de voto, da candidatura e de clubes políticos. Olympe de Gouges ousou espelhar o documento de 1789 para demonstrar a hipocrisia dos patriarcas da Revolução. Por sua coragem e militância, foi condenada à guilhotina pelos jacobinos em 1793.",
      stepByStep: [
        "1. Ler a famosa máxima de Olympe de Gouges: 'Se a mulher tem o direito de subir ao cadafalso, tem o direito de subir à tribuna'.",
        "2. Identificar a tese: Se a mulher é considerada cidadã para ser julgada e executada pela lei, deve sê-lo para legislar e governar.",
        "3. Reconhecer a crítica histórica: Os homens revolucionários burgueses universalizaram direitos apenas para si mesmos (androcentrismo).",
        "4. Relacionar com a evolução da cidadania: Pioneirismo do feminismo político moderno na luta por sufrágio e autonomia jurídica.",
        "5. Concluir que a denúncia do caráter androcêntrico e excludente da Revolução fundamenta a obra de Olympe."
      ],
      coreConcept: "Olympe de Gouges expôs o androcentrismo da Revolução Francesa, demonstrando que a universalidade dos 'Direitos do Homem' ocultava a opressão e exclusão deliberada das mulheres.",
      trapWarning: "Atenção: o fechamento dos clubes políticos femininos e a guilhotina contra militantes mulheres como Olympe provam o machismo transversal a girondinos e jacobinos."
    },
    commonTraps: ["Achar que a Declaração de 1789 concedeu direitos civis iguais a homens e mulheres"],
    tags: ["Olympe-de-Gouges", "feminismo", "Revolucao-Francesa", "cidadania", "androcentrismo"]
  },
  {
    id: "HUM-ILU-011",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A Revolução do Haiti (1791-1804) e o Iluminismo Negro Radical",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1791, na próspera colônia francesa de Saint-Domingue (maior produtora mundial de açúcar e café da época), eclodiu uma colossal rebelião de escravizados liderada por nomes como Toussaint Louverture e Jean-Jacques Dessalines. Apropriando-se da retórica iluminista de liberdade e igualdade oriunda de Paris, os insurgentes negros derrotaram exércitos britânicos, espanhóis e as tropas imperiais de Napoleão Bonaparte, fundando em 1804 a República do Haiti.",
      source: "JAMES, C. L. R. Os Jacobinos Negros: Toussaint Louverture e a Revolução de São Domingos. São Paulo: Boitempo, 2010"
    },
    prompt: "A Revolução Haitiana diferenciou-se radicalmente das demais revoluções burguesas da Era das Revoluções porque:",
    options: [
      { id: "a", text: "articulou a luta anticolonial de independência à abolição imediata da escravidão pelas mãos dos próprios cativos, estabelecendo a primeira república negra governada por ex-escravizados nas Américas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "preservou o cativeiro dos trabalhadores rurais para manter o fornecimento de açúcar aos mercados metropolitanos.", isCorrect: false, distractorRationale: "O Haiti destruiu a escravidão pela raiz; esse foi o coração da revolta." },
      { id: "c", text: "foi conduzida pacificamente por fazendeiros brancos franceses em comum acordo com Napoleão Bonaparte.", isCorrect: false, distractorRationale: "Foi uma guerra revolucionária popular travada contra a aristocracia branca escravocrata e contra Napoleão, que tentou restaurar a escravidão." },
      { id: "d", text: "submeteu o território caribenho à administração colonial britânica com o retorno do tráfico negreiro.", isCorrect: false, distractorRationale: "O exército de ex-escravizados derrotou a intervenção britânica e expulsou invasores colonialistas." },
      { id: "e", text: "inspirou as elites escravistas do Brasil a abolirem espontaneamente o cativeiro em Minas Gerais e no Vale do Paraíba.", isCorrect: false, distractorRationale: "Pelo contrário: o Haiti provocou o 'haitianismo', isto é, pânico e terror entre as elites brasileiras escravistas, que endureceram a repressão aos negros." }
    ],
    detailedExplanation: {
      summary: "A Revolução do Haiti foi a mais radical e profunda das revoluções da Era Moderna. Enquanto a França revolucionária titubeava em abolir a escravidão em suas colônias e os EUA mantinham o cativeiro, os escravizados haitianos radicalizaram a promessa iluminista de liberdade universal: realizaram a independência contra a maior potência militar do mundo e extinguiram a escravidão com suas próprias forças armadas populares (os 'Jacobinos Negros'). O Haiti tornou-se um farol de liberdade negra e o maior pesadelo das elites escravistas das Américas.",
      stepByStep: [
        "1. Identificar o local e protagonistas: Saint-Domingue (Haiti), liderada por escravizados negros (Toussaint Louverture).",
        "2. Identificar os objetivos conjugados: Libertação dos cativos + Independência colonial antieuropeia.",
        "3. Comparar com França e EUA: Enquanto as elites brancas excluíram os negros, o Haiti universalizou de fato a liberdade humana.",
        "4. Analisar o impacto geopolítico: Nascimento da primeira república negra livre e o pânico do 'haitianismo' nas Américas.",
        "5. Concluir que a simbiose entre abolição do cativeiro e soberania anticolonial confere singularidade à Revolução Haitiana."
      ],
      coreConcept: "O Haiti levou o Iluminismo às suas últimas consequências lógicas: destruiu o colonialismo e a escravidão simultaneamente através da insurreição armada negra.",
      trapWarning: "No Brasil do século XIX, a palavra 'haitianismo' significava o pavor que a elite imperial tinha de que a população negra escravizada brasileira fizesse uma revolução armada como a do Haiti."
    },
    commonTraps: ["Achar que a abolição no Haiti foi uma concessão graciosa do governo de Napoleão"],
    tags: ["Revolucao-do-Haiti", "Toussaint-Louverture", "Jacobinos-Negros", "abolicionismo", "antirracismo"]
  },
  {
    id: "HUM-ILU-012",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "As Fases da Revolução Francesa: Girondinos versus Jacobinos",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a Convenção Nacional da Revolução Francesa (1792-1795), duas facções políticas burguesas disputaram a liderança da nação:\n• Os Girondinos: sentavam-se à direita, representavam a alta burguesia comercial e marítima, defendiam o liberalismo econômico irrestrito e a moderação das reformas sociais.\n• Os Jacobinos (Montanha): sentavam-se à esquerda no plenário, liderados por Maximilien Robespierre e apoiados pelas massas populares urbanas de Paris (os sans-culottes), defendendo o tabelamento de preços de alimentos essenciais (Lei do Máximo Geral), a abolição da escravidão nas colônias e o sufrágio universal masculino.",
      source: "SOBOUL, Albert. A Revolução Francesa. Rio de Janeiro: Difel, 1985"
    },
    prompt: "O período da Convenção Jacobina caracterizou-se pela radicalização democrático-popular e pela política do Terror de Estado, cuja justificativa interna era a necessidade de:",
    options: [
      { id: "a", text: "defender a República em armas contra a invasão de potências absolutistas estrangeiras coligadas e esmagar a contrarrevolução aristocrática interna.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "restabelecer os privilégios fiscais e as prerrogativas jurídicas da nobreza feudal decaída.", isCorrect: false, distractorRationale: "Os jacobinos guilhotinaram nobres e confiscaram suas propriedades para proteger a República." },
      { id: "c", text: "entregar a soberania da França à Santa Aliança de monarcas russos e austríacos.", isCorrect: false, distractorRationale: "A Santa Aliança foi criada em 1815 após a derrota napoleônica para combater o jacobinismo e a revolução." },
      { id: "d", text: "privatizar as terras comunais para doá-las aos mercadores marítimos britânicos.", isCorrect: false, distractorRationale: "Os jacobinos distribuíram terras confiscadas de nobres foragidos aos camponeses franceses." },
      { id: "e", text: "instituir o catolicismo romano como religião compulsória e exclusiva do território francês.", isCorrect: false, distractorRationale: "Os jacobinos implementaram o laicismo radical e o Culto da Razão e do Ser Supremo." }
    ],
    detailedExplanation: {
      summary: "A fase jacobina (1793-1794), liderada pelo Comitê de Salvação Pública de Robespierre, foi a mais radical da Revolução. Pressionados pela aliança com os 'sans-culottes', aprovaram avanços sociais inéditos: sufrágio universal, Lei do Máximo (congelamento de preços do pão), reforma agrária de terras emigradas e abolição do cativeiro negro colonial. Ao mesmo tempo, justificavam o Comitê de Salvação Pública e o Tribunal Revolucionário (Terror) como medidas imperativas de exceção para combater a traição monárquica interna e a invasão de exércitos absolutistas (Áustria, Prússia, Inglaterra).",
      stepByStep: [
        "1. Identificar as duas forças: Girondinos (alta burguesia moderada) vs Jacobinos (pequena burguesia radical + sans-culottes).",
        "2. Listar as medidas jacobinas populares: Fim da escravidão nas colônias, tabelamento do pão, sufrágio universal masculino.",
        "3. Explicar o contexto do Terror: A República estava sitiada por invasões estrangeiras e motins monarquistas (Guerra da Vendeia).",
        "4. Analisar a contradição jacobina: Defesa intransigente da virtude republicana combinada à violência estatal da guilhotina.",
        "5. Concluir que a salvação nacional perante a invasão absolutista e contrarrevolução justificava o governo revolucionário de exceção."
      ],
      coreConcept: "A Convenção Jacobina uniu o ápice das conquistas sociais populares (abolição colonial, controle de preços, sufrágio amplo) ao autoritarismo repressivo do Terror contra inimigos da República.",
      trapWarning: "A divisão espacial no plenário da Convenção (Jacobinos à esquerda, Girondinos à direita, Planície/Pântano ao centro) é a origem histórica dos termos políticos contemporâneos de 'esquerda' e 'direita'."
    },
    commonTraps: ["Achar que os girondinos apoiavam o tabelamento do preço do pão para beneficiar os pobres"],
    tags: ["Revolucao-Francesa", "Jacobinos", "Girondinos", "sans-culottes", "Robespierre"]
  },
  {
    id: "HUM-ILU-013",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "Voltaire e a Defesa da Liberdade de Expressão e Tolerância",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "“Não concordo com uma só palavra do que dizes, mas defenderei até a morte o teu direito de dizê-la.”\n(Apócrifo atribuído ao pensamento de VOLTAIRE, célebre pela obra 'Tratado sobre a Tolerância', 1763).\n\nNo século XVIII, o filósofo francês Voltaire celebrizou-se pela luta intransigente contra o fanatismo religioso, o preconceito da Igreja Católica e a censura monárquica, notabilizando-se pela intervenção pública no Caso Calas (comerciante protestante executado injustamente sob tortura em decorrência de perseguição de autoridades clericais).",
      source: "VOLTAIRE. Tratado sobre a Tolerância. São Paulo: Martins Fontes, 2000"
    },
    prompt: "A pregação de Voltaire em favor da tolerância e da liberdade de pensamento e expressão fundamenta-se no postulado de que:",
    options: [
      { id: "a", text: "o fanatismo dogmático e a censura eclesiástica e estatal aniquilam a convivência civilizada, devendo a razão livre e o respeito ao contraditório prevalecer na esfera pública.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "todas as religiões devem ser compulsoriamente banidas por decreto de segurança nacional.", isCorrect: false, distractorRationale: "Voltaire era deísta (acreditava em um Deus criador concebido pela razão) e defendia a livre coexistência pacífica de todos os cultos." },
      { id: "c", text: "a verdade filosófica absoluta só pode ser encontrada nos tratados da Escolástica medieval.", isCorrect: false, distractorRationale: "Voltaire zombava do dogmatismo escolástico e da intolerância clerical." },
      { id: "d", text: "o Estado tem o direito soberano de executar dissidentes políticos para preservar a fé dos governantes.", isCorrect: false, distractorRationale: "O combate à violência e aos suplícios estatais motivados por perseguição religiosa foi a razão de vida de Voltaire." },
      { id: "e", text: "a liberdade de expressão deve ser concedida unicamente a membros que possuem títulos nobiliárquicos hereditários.", isCorrect: false, distractorRationale: "A liberdade de manifestação do pensamento é um direito intrínseco a todos os seres humanos racionais." }
    ],
    detailedExplanation: {
      summary: "Voltaire foi o maior apóstolo da TOLERÂNCIA RELIGIOSA e da LIBERDADE DE PENSAMENTO das Luzes. Combatendo o fanatismo eclesial (seu famoso lema era 'Écrasez l'infâme' — Esmagai a infame superstição!), ele demonstrou que sociedades tolerantes, que respeitam a diversidade de opiniões e a liberdade de expressão, são mais pacíficas, prósperas e civilizadas do que sociedades marcadas pela caça às bruxas e julgamentos inquisitoriais.",
      stepByStep: [
        "1. Analisar a postura de Voltaire: Ataque furioso ao fanatismo religioso e à intolerância judicial (Caso Calas).",
        "2. Identificar a defesa central: Tolerância civil, pluralidade de ideias, liberdade de manifestação e crítica da autoridade.",
        "3. Conceituar o deísmo voltairiano: Crença racional em Deus sem necessidade de ritos clericais supersticiosos.",
        "4. Relacionar com o mundo contemporâneo: Princípio fundamental da liberdade de imprensa e dos direitos humanos constitucionais.",
        "5. Concluir que a vitória da razão sobre o dogmatismo arbitrário resume a mensagem do autor."
      ],
      coreConcept: "A tolerância religiosa e a liberdade de expressão de Voltaire são alicerces indissociáveis da convivência democrática plural e do laicismo moderno.",
      trapWarning: "Voltaire não era ateu militante nem comunista: era um burguês letrado deísta, defensor da propriedade privada e de reformas liberais da monarquia."
    },
    commonTraps: ["Confundir o combate de Voltaire à intolerância clerical com o ateísmo materialista radical"],
    tags: ["Voltaire", "tolerancia", "liberdade-expressao", "laicismo", "Caso-Calas"]
  },
  {
    id: "HUM-ILU-014",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "John Locke e o Direito de Resistência à Tirania",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "“Sendo os homens por natureza todos livres, iguais e independentes, ninguém pode ser expulso de sua propriedade e submetido ao poder político de outrem sem dar seu próprio consentimento. Mas, se por uma longa série de abusos e usurpações o governo desviar-se desses fins, o povo tem o direito de dissolver esse governo e instituir um novo poder para sua segurança.”\n(LOCKE, John. Segundo Tratado sobre o Governo Civil, 1690).",
      source: "LOCKE, John. Segundo Tratado sobre o Governo Civil. São Paulo: Abril Cultural, 1978"
    },
    prompt: "O princípio político formulado por John Locke no excerto, que exerceu influência decisiva sobre as Revoluções Burguesas, é o:",
    options: [
      { id: "a", text: "direito legítimo de rebelião e resistência à tirania, segundo o qual os cidadãos podem depor governantes que violam os direitos naturais e quebram o contrato social.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "dever de subserviência cega ao soberano, mesmo que este confisque propriedades e decrete execuções sumárias.", isCorrect: false, distractorRationale: "Essa visão de submissão irrestrita aproxima-se do Leviatã de Hobbes, e é expressamente combatida por Locke." },
      { id: "c", text: "reconhecimento do direito divino hereditário conferido pela Santa Sé apostólica aos governantes ingleses.", isCorrect: false, distractorRationale: "Locke rejeita a legitimidade divina do poder defendida por teóricos como Robert Filmer." },
      { id: "d", text: "estímulo a revoltas anarquistas permanentes para dissolver qualquer forma de autoridade ou lei escrita.", isCorrect: false, distractorRationale: "Locke defende o Estado de leis; a revolta só é cabível como último recurso para restaurar a ordem constitucional quebrada pelo tirano." },
      { id: "e", text: "monopólio da propriedade da terra exercido pela Coroa em favor de monastérios beneditinos.", isCorrect: false, distractorRationale: "Locke é o teórico por excelência da propriedade privada individual fruto do trabalho." }
    ],
    detailedExplanation: {
      summary: "John Locke, pai do liberalismo político, formulou o 'Direito de Resistência' (ou direito de rebelião): os homens saem do Estado de Natureza e firmam o Contrato Social com a missão exclusiva de proteger seus direitos naturais inatos (vida, liberdade e propriedade). Se o governante abusa do poder, usurpa bens e age como tirano, ele quebra o pacto. Nessas circunstâncias, o povo tem o direito e o dever moral de se rebelar, dissolver o governo tirânico e fundar nova ordem legítima.",
      stepByStep: [
        "1. Analisar as premissas lockeanas: Os homens são livres e iguais por natureza e o governo decorre do consentimento.",
        "2. Identificar o papel do Estado: Proteger vida, liberdade e propriedade.",
        "3. Analisar a cláusula de ruptura: 'Se por longa série de abusos o governo desviar-se desses fins...'.",
        "4. Reconhecer a conclusão política: O povo tem o direito de dissolver o poder e derrubar o tirano (Direito de Resistência).",
        "5. Concluir que esse princípio legitimou a Revolução Gloriosa (1688), a Independência dos EUA (1776) e a Revolução Francesa (1789)."
      ],
      coreConcept: "Para Locke, a autoridade do governante é condicional: violar os direitos naturais do povo legitima a revolta armada e a deposição do tirano.",
      trapWarning: "Diferencie Locke de Hobbes: para Hobbes o soberano é irrevogável; para Locke o governo pode ser destituído se não cumprir o contrato."
    },
    commonTraps: ["Confundir a teoria contratualista liberal de Locke com o absolutismo absolutista de Hobbes"],
    tags: ["John-Locke", "direito-de-resistencia", "direitos-naturais", "liberalismo-politico", "contratualismo"]
  },
  {
    id: "HUM-ILU-015",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A Fisiocracia e a Crítica à Acumulação Mercantilista",
    difficulty: 4,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No século XVIII, antes da sistematização de Adam Smith, um grupo de pensadores franceses conhecidos como fisiocratas (liderados por François Quesnay e Vincent de Gournay) formulou a primeira escola econômica do pensamento ilustrado. Criadores da célebre máxima 'Laissez faire, laissez passer, le monde va de lui-même' ('Deixai fazer, deixai passar, o mundo gira por si mesmo'), os fisiocratas combatiam o intervencionismo mercantilista da monarquia francesa de Luís XV.",
      source: "História das Teorias Econômicas e as Raízes do Liberalismo"
    },
    prompt: "Em contraposição à teoria mercantilista que valorizava a balança comercial favorável e o metalismo, a Fisiocracia defendia que:",
    options: [
      { id: "a", text: "a agricultura e as atividades ligadas à terra constituem a única fonte autêntica de riqueza nova geradora de excedente (produto líquido), devendo a economia operar segundo as leis naturais sem entraves estatais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a indústria manufatureira têxtil é a única capaz de multiplicar o valor sem consumir insumos biológicos.", isCorrect: false, distractorRationale: "Os fisiocratas consideravam a indústria e o comércio como classes 'estéreis', que apenas transformavam matéria, mas não criavam riqueza nova do nada." },
      { id: "c", text: "o acúmulo de barras de ouro guardadas em cofres reais é a medida definitiva do poder civilizatório de um povo.", isCorrect: false, distractorRationale: "Isso é o metalismo mercantilista, a principal tese refutada pelos fisiocratas." },
      { id: "d", text: "o comércio de produtos coloniais deveria ser monopólio exclusivo de guildas corporativas de artesãos.", isCorrect: false, distractorRationale: "Os fisiocratas defendiam a extinção total de monopólios, corporações de ofício e tarifas alfandegárias internas." },
      { id: "e", text: "o governo deveria proibir a exportação de grãos e cereais para forçar o consumo compulsório na corte real.", isCorrect: false, distractorRationale: "Eles defendiam o 'laissez passer', a liberdade irrestrita de circulação e comércio de grãos." }
    ],
    detailedExplanation: {
      summary: "A Fisiocracia (etimologicamente 'governo da natureza') afirmava que a economia segue leis naturais imutáveis. Quesnay argumentava no 'Quadro Econômico' que apenas a terra (agricultura e pecuária) é verdadeiramente fértil e capaz de gerar um 'produto líquido' (riqueza líquida multiplicada pela natureza). A indústria e o comércio eram vistos como 'classes estéreis' que apenas combinavam e transportavam o que a terra produzia. Portanto, taxar o comércio e criar monopólios era um erro: o Estado devia deixar a economia fluir livremente ('laissez-faire').",
      stepByStep: [
        "1. Identificar o lema da Fisiocracia: 'Laissez faire, laissez passer' (Liberdade de produção e comércio).",
        "2. Identificar a tese central de Quesnay: A agricultura/terra é a única atividade que gera riqueza nova (produto líquido).",
        "3. Analisar a crítica aos fisiocratas: Consideravam manufaturas e bancos classes 'estéreis' (transformadoras, não criadoras).",
        "4. Comparar com o mercantilismo: Rejeição ao protecionismo, ao monopólio estatal e à fixação artificial de preços.",
        "5. Concluir que a terra como fonte primordial de riqueza sob leis naturais é o núcleo da Fisiocracia."
      ],
      coreConcept: "A Fisiocracia foi a precursora do liberalismo econômico ao postular o 'laissez-faire' e apontar que a riqueza real provém da natureza e da produção, não do entesouramento metálico.",
      trapWarning: "Cuidado: Adam Smith concordava com os fisiocratas quanto ao livre comércio ('laissez-faire'), mas discordava deles quanto à riqueza: para Smith, a riqueza não vinha só da terra, mas do TRABALHO em geral (incluindo a indústria)."
    },
    commonTraps: ["Achar que a Fisiocracia considerava o comércio marítimo a principal fonte de riqueza"],
    tags: ["fisiocracia", "laissez-faire", "Quesnay", "terra", "mercantilismo"]
  },
  {
    id: "HUM-ILU-016",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A Queda da Bastilha e o Protagonismo dos Sans-Culottes",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 14 de julho de 1789, em Paris, a população trabalhadora e pequenos artesãos (que mais tarde seriam denominados sans-culottes), enfurecidos pela alta vertiginosa no preço do pão e pela concentração de tropas mercenárias monárquicas ao redor da cidade, marcharam em direção à fortaleza medieval da Bastilha. Após intensos tiroteios, os populares tomaram o edifício militar, executaram seu governador e iniciaram a demolição manual de suas muralhas de pedra.",
      source: "HOBSBAWM, Eric. A Era das Revoluções (1789-1848). São Paulo: Paz e Terra, 2014"
    },
    prompt: "Mais do que um armazém de pólvora e munições militares, a tomada e destruição da Bastilha pelo povo parisiense adquiriu uma carga simbólica colossal por representar o(a):",
    options: [
      { id: "a", text: "desmoronamento material e simbólico do absolutismo tirânico e a entrada irreversível das massas populares no processo revolucionário.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "rendição incondicional dos camponeses franceses à autoridade restaurada de Luís XVI.", isCorrect: false, distractorRationale: "O episódio marcou exatamente a perda do controle monárquico e o triunfo da revolução popular." },
      { id: "c", text: "vitória diplomática de Napoleão Bonaparte na conquista militar da península Ibérica.", isCorrect: false, distractorRationale: "Em 1789 Napoleão era um jovem oficial desconhecido na Córsega; o evento é civil e parisiense." },
      { id: "d", text: "fim da propriedade privada dos imóveis urbanos na cidade de Paris.", isCorrect: false, distractorRationale: "A tomada da Bastilha visava derrubar a fortaleza do rei e armar a milícia cidadã, não expropriar imóveis privados." },
      { id: "e", text: "associação pacífica entre a alta nobreza e o clero católico para financiar a queima de armas.", isCorrect: false, distractorRationale: "A nobreza entrou em pânico com o evento, iniciando o movimento de fuga aristocrática para o exterior ('emigrados')." }
    ],
    detailedExplanation: {
      summary: "A Bastilha era a mais temida prisão política do absolutismo monárquico francês: ali os reis encarcerevam dissidentes por simples ordens reais secretas (lettres de cachet), sem direito a advogado ou julgamento. Derrubar a Bastilha tijolo por tijolo foi a consumação da morte do Antigo Regime. O evento transformou a Assembleia Nacional em um poder supremo fático e consagrou o 14 de julho como o dia nacional da fundação da cidadania francesa.",
      stepByStep: [
        "1. Analisar a função histórica da Bastilha: Fortaleza medieval usada como prisão arbitrária do absolutismo dos Bourbons.",
        "2. Identificar os sujeitos históricos: Povo comum de Paris (trabalhadores, artesãos, sans-culottes).",
        "3. Decodificar o sentido simbólico: A destruição física do símbolo máximo do poder tirânico arbitrário.",
        "4. Analisar o efeito político: Impede o golpe militar que o rei planejava contra a Assembleia Nacional Constituinte.",
        "5. Concluir que a queda da Bastilha representa o colapso simbólico do absolutismo e a força revolucionária popular."
      ],
      coreConcept: "A Tomada da Bastilha foi o momento em que a revolução das palavras dos deputados burgueses encontrou a força armada das massas populares nas ruas.",
      trapWarning: "Havia apenas 7 prisioneiros na Bastilha quando ela foi tomada; a sua relevância nunca foi quantitativa, mas monumentalmente simbólica e estratégica (pólvora)."
    },
    commonTraps: ["Achar que a Bastilha era apenas uma prisão comum sem relevância política ou simbólica"],
    tags: ["Bastilha", "Revolucao-Francesa", "sans-culottes", "absolutismo", "14-de-julho"]
  },
  {
    id: "HUM-ILU-017",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A Reação Termidoriana e a Ascensão de Napoleão (18 Brumário)",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em julho de 1794 (mês de Termidor no calendário revolucionário), um golpe de Estado derrubou Robespierre e executou os líderes jacobinos na guilhotina. A alta burguesia girondina reassumiu o controle do poder na França, revogou a Lei do Máximo dos preços, restabeleceu o voto censitário baseado em renda e instituiu o Diretório (1795-1799). No entanto, acossado pela inflação, revoltas monarquistas e conspirações radicais, o Diretório apoiou o golpe do 18 de Brumário de 1799, que entregou o comando do país ao jovem e prestigiado general Napoleão Bonaparte.",
      source: "LEFEBVRE, Georges. O 18 de Brumário de Napoleão Bonaparte. São Paulo: Paz e Terra, 1989"
    },
    prompt: "A ascensão de Napoleão Bonaparte ao poder no 18 de Brumário representou para a burguesia francesa a garantia de:",
    options: [
      { id: "a", text: "estabilidade política e ordem institucional por meio da centralização militar, consolidando as conquistas jurídicas burguesas e afastando o risco tanto do retorno feudal quanto da radicalização popular.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "restauração completa dos privilégios hereditários dos nobres com a coroação de Luís XVIII.", isCorrect: false, distractorRationale: "Napoleão preservou a extinção dos estamentos feudais e confirmou a posse burguesa das terras confiscadas da nobreza." },
      { id: "c", text: "extinção do Exército nacional francês e transferência das decisões para sovietes de trabalhadores agrícolas.", isCorrect: false, distractorRationale: "Napoleão fortaleceu a hierarquia militar e reprimiu qualquer organização autônoma de operários." },
      { id: "d", text: "adesão incondicional aos tratados de livre-comércio com a marinha mercantil da Inglaterra.", isCorrect: false, distractorRationale: "Napoleão declarou o Bloqueio Continental justamente para tentar sufocar o comércio industrial britânico." },
      { id: "e", text: "devolução imediata das colônias caribenhas para a administração colonial espanhola.", isCorrect: false, distractorRationale: "Napoleão defendeu com unhas e dentes o império colonial francês, até ser derrotado no Haiti e vender a Luisiana aos EUA." }
    ],
    detailedExplanation: {
      summary: "O 18 de Brumário encerra a fase tumultuada da Revolução Francesa. A burguesia francesa temia duas ameaças: à direita, a volta dos monarquistas absolutistas que revogariam a posse das terras e títulos burgueses; à esquerda, o retorno do jacobinismo radical e dos sans-culottes com tabelamento de preços e agitação social. Napoleão personificou a 'espada protetora da burguesia': instituiu o Código Civil Napoleônico (1804), protegeu a propriedade privada, laicizou o Estado e consolidou o capitalismo francês sob um punho autoritário e glorioso.",
      stepByStep: [
        "1. Contextualizar o Diretório: Crise de legitimidade, corrupção, ameaça monarquista e ameaça jacobina.",
        "2. Identificar a solução encontrada pela alta burguesia: Aliança com o prestígio das forças armadas.",
        "3. Analisar a figura de Napoleão: General vitorioso, garantidor da lei, da ordem e da propriedade.",
        "4. Reconhecer a consolidação burguesa: O Código Civil de 1804 (igualdade perante a lei, proteção da propriedade privada, laicidade).",
        "5. Concluir que a burguesia garantiu a estabilização de suas conquistas materiais afastando extremos políticos."
      ],
      coreConcept: "Napoleão fechou o ciclo revolucionário canalizando as energias francesas para fora (guerras de expansão) enquanto institucionalizava por dentro as conquistas do capitalismo burguês.",
      trapWarning: "Embora Napoleão tenha se autocoroado imperador em 1804, ele NÃO restaurou o Antigo Regime feudal; ele governou como um monarca burguês moderno."
    },
    commonTraps: ["Achar que o 18 de Brumário restaurou o absolutismo dos nobres do Antigo Regime"],
    tags: ["18-de-Brumario", "Napoleao", "Diretorio", "burguesia", "Codigo-Civil"]
  },
  {
    id: "HUM-ILU-018",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A Inconfidência Mineira (1789) e as Luzes na América Portuguesa",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1789, em Vila Rica (atual Ouro Preto), intelectuais, padres, mineradores e militares da elite colonial capitaneados por figuras como Cláudio Manuel da Costa, Tomás Antônio Gonzaga e o alferes Joaquim José da Silva Xavier (Tiradentes) organizaram a Conjuração Mineira. Influenciados pelos escritos de Voltaire, Montesquieu e pela recente Independência dos Estados Unidos de 1776, os revoltosos planejavam sublevar a capitania no dia da decretação da derrama pelo governador Visconde de Barbacena.",
      source: "MAXWELL, Kenneth. A Devassa da Devassa: a Inconfidência Mineira, Brasil e Portugal 1750-1808. São Paulo: Paz e Terra, 2010"
    },
    prompt: "Em relação ao projeto político e às limitações sociais da Conjuração Mineira de 1789, é correto afirmar que os inconfidentes propunham:",
    options: [
      { id: "a", text: "a proclamação de uma República em Minas Gerais com universidade e incentivo a manufaturas, mas mantiveram divergências e omissões quanto à abolição da escravidão devido ao caráter proprietário da maioria dos conjurados.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a libertação imediata e incondicional de todos os escravizados do Brasil e a divisão de terras com os quilombolas.", isCorrect: false, distractorRationale: "A Inconfidência Mineira foi um movimento elitista que não adotou a abolição universal da escravidão por temer prejuízos aos grandes fazendeiros e mineradores." },
      { id: "c", text: "a anexação perpétua da capitania de Minas Gerais ao Império Britânico em troca de auxílio militar da marinha inglesa.", isCorrect: false, distractorRationale: "O projeto visava à fundação de uma República independente com capital em São João del-Rei, sem tutela britânica." },
      { id: "d", text: "a entrega da administração política colonial às ordens jesuíticas expulsas pelo Marquês de Pombal.", isCorrect: false, distractorRationale: "Os conjurados eram devedores da Fazenda Real e inspiravam-se nas Luzes laicas, não no jesuitismo." },
      { id: "e", text: "a manutenção do quinto e da derrama fiscal para custear a construção de igrejas barrocas em Ouro Preto.", isCorrect: false, distractorRationale: "A derrama era exatamente o estopim contra o qual os inconfidentes se revoltaram para perdoar suas dívidas com a Coroa." }
    ],
    detailedExplanation: {
      summary: "A Inconfidência Mineira foi um movimento de elite (homens letrados, proprietários de terras, escravizados e lavras que acumulavam pesadas dívidas tributárias com a Coroa portuguesa). Inspirados no iluminismo e no modelo da república norte-americana de 1776, propunham a independência de Minas Gerais, criação de uma universidade em Vila Rica, serviço militar obrigatório e perdão das dívidas tributárias. Por serem proprietários de escravizados, a questão do cativeiro gerou divergências insolúveis e o projeto não assumiu a bandeira da abolição geral da escravidão.",
      stepByStep: [
        "1. Identificar o perfil social dos conjurados: Elite letrada e mineradora com altas dívidas fiscais.",
        "2. Identificar as influências teóricas: Iluminismo francês e Independência dos EUA (1776).",
        "3. Analisar o projeto político: República independente, universidade, liberdade para manufaturas.",
        "4. Analisar a limitação estrutural da elite: Omissão sobre a abolição da escravidão, da qual a elite dependia diretamente.",
        "5. Concluir que a proposta era republicana e elitista, sem abraçar a emancipação da população escravizada negra."
      ],
      coreConcept: "A Inconfidência Mineira espelhava o liberalismo excludente norte-americano: queria república e fim da tirania fiscal metropolitana, mas preservava a posse de escravizados.",
      trapWarning: "Compare com a Conjuração Baiana (1798): a Baiana foi popular, liderada por alfaiates e soldados negros, e exigia a abolição imediata da escravidão; a Mineira (1789) foi elitista e não aboliu a escravidão."
    },
    commonTraps: ["Achar que a Inconfidência Mineira foi uma rebelião popular com projeto de libertar todos os escravizados"],
    tags: ["Inconfidencia-Mineira", "Tiradentes", "1789", "iluminismo", "Brasil-Colonia"]
  },
  {
    id: "HUM-ILU-019",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A Conjuração Baiana (1798) e o Iluminismo Popular dos Alfaiates",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em agosto de 1798, panfletos manuscritos apareceram afixados em locais públicos e portas de igrejas de Salvador conclamando o povo:\n“Animai-vos, povo bahiense, que está por chegar o tempo feliz da nossa liberdade: o tempo em que seremos todos irmãos, o tempo em que seremos todos iguais! Não haverá mais distinção entre homens brancos, pardos e pretos; seremos todos governados por um governo livre e soberano!”.\nOrganizado por alfaiates, soldados de baixa patente, forros e escravizados (como Lucas Dantas, Manuel Faustino, Luís Gonzaga das Virgens e João de Deus), o levante defendia a proclamação da República da Bahia.",
      source: "TAVARES, Luís Henrique Dias. Da Sedição de 1798 à Revolta dos Búzios. São Paulo: Unesp, 2003"
    },
    prompt: "A Conjuração Baiana de 1798 (ou Revolta dos Alfaiates/Búzios) distinguiu-se de outros movimentos anticoloniais da época por ter:",
    options: [
      { id: "a", text: "combinado a luta pela independência colonial à defesa radical da igualdade racial, abolição imediata da escravidão e melhoria das condições materiais das classes populares.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "sido organizada exclusivamente pela nobreza latifundiária de senhores de engenho do Recôncavo baiano.", isCorrect: false, distractorRationale: "Embora alguns letrados como Cipriano Barata apoiassem as Luzes, a força viva e as lideranças condenadas à morte eram artesãos, negros e soldados humildes." },
      { id: "c", text: "proposto a restauração do pacto colonial mercantilista com a Coroa portuguesa em troca de isenção de impostos.", isCorrect: false, distractorRationale: "O movimento propunha a ruptura total e a proclamação de uma República soberana na Bahia." },
      { id: "d", text: "rejeitado qualquer contato com ideias revolucionárias francesas em obediência às bulas papais.", isCorrect: false, distractorRationale: "A Conjuração Baiana foi profundamente influenciada pela fase jacobina da Revolução Francesa e pela Revolução do Haiti." },
      { id: "e", text: "defendido a transferência imediata do trono de Lisboa para a cidade de Salvador com a preservação do cativeiro.", isCorrect: false, distractorRationale: "A abolição dos escravizados e a igualdade racial eram os pilares do manifesto dos alfaiates." }
    ],
    detailedExplanation: {
      summary: "A Conjuração Baiana de 1798 (Revolta dos Búzios) foi o mais avançado e popular movimento anticolonial do Brasil setecentista. Diferente da Inconfidência Mineira, a Baiana foi protagonizada por negros, mulatos, alfaiates e soldados rasos. Influenciada pelo jacobinismo francês e pelas notícias do Haiti, exigia a fundação de uma República democrática, abertura dos portos, aumento do soldo dos soldados e — fundamentalmente — a abolição da escravidão e o fim do preconceito de cor, o que provocou a execução e esquartejamento de seus quatro líderes negros pela Coroa.",
      stepByStep: [
        "1. Analisar os panfletos de 1798: 'Não haverá mais distinção entre homens brancos, pardos e pretos'.",
        "2. Identificar a composição social: Povo pobre urbano, artesãos, soldados rasos e ex-cativos.",
        "3. Identificar o projeto: República, abolição universal da escravidão, igualdade racial e livre comércio.",
        "4. Contrastar com 1789 em Minas: Minas foi elitista e tímida sobre escravidão; Bahia foi popular, antirracista e abolicionista.",
        "5. Concluir que a junção de independência, república e fim do cativeiro singulariza o levante baiano."
      ],
      coreConcept: "A Conjuração Baiana de 1798 expressou a apropriação popular das ideias iluministas, traduzidas na exigência de abolição imediata da escravidão e igualdade racial substantiva.",
      trapWarning: "Atenção ao contraste: a Conjuração Mineira (1789) teve apenas um enforcado (Tiradentes); a Conjuração Baiana (1798) teve quatro líderes populares negros executados e esquartejados pelas autoridades coloniais."
    },
    commonTraps: ["Confundir a Inconfidência Mineira (elitista) com a Conjuração Baiana (popular e abolicionista)"],
    tags: ["Conjuracao-Baiana", "Revolta-dos-Alfaiates", "Revolta-dos-Buzios", "abolicionismo", "antirracismo"]
  },
  {
    id: "HUM-ILU-020",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A secularização e a separação entre Estado e Religião",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No período anterior às revoluções burguesas, a legitimação do poder político repousava no princípio do 'Direito Divino dos Reis', formulado por teóricos absolutistas como Jacques Bossuet: o soberano era visto como vigário de Deus na Terra, prestando contas exclusivamente ao Criador. O Iluminismo operou uma profunda ruptura com esse paradigma ao consolidar o processo de secularização da política.",
      source: "CHÂTELET, François. História das Ideias Políticas. Rio de Janeiro: Zahar, 2000"
    },
    prompt: "O princípio da laicidade e secularização do Estado concebido pelas Luzes estabelece que a autoridade política:",
    options: [
      { id: "a", text: "origina-se de um contrato racional entre cidadãos soberanos e deve atuar de forma neutra em relação às confissões religiosas, garantindo a liberdade de crença sem adotar credo oficial.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "deve ser legitimada por rituais de sagração executados pelo Sumo Pontífice da Igreja Católica de Roma.", isCorrect: false, distractorRationale: "O Iluminismo rompe precisamente com a tutela eclesiástica sobre a validação do poder secular temporal." },
      { id: "c", text: "tem o dever constitucional de perseguir e banir todos os fiéis que professam crenças religiosas privadas.", isCorrect: false, distractorRationale: "Laicidade não significa antirreligiosidade persecutória; garante a coexistência tolerante de todas as crenças e dos não crentes." },
      { id: "d", text: "só adquire validade legal quando referendada por oráculos e profecias sagradas registradas em concílios clericais.", isCorrect: false, distractorRationale: "A laicidade baseia a autoridade no texto constitucional positivo e na vontade geral, e não em oráculos." },
      { id: "e", text: "deve fundir as funções do Poder Executivo e das ordens monásticas em um único órgão administrativo.", isCorrect: false, distractorRationale: "O princípio iluminista preconiza a estrita separação entre as esferas pública estatal e eclesiástica." }
    ],
    detailedExplanation: {
      summary: "A secularização do Estado moderno emancipa a política da tutela teológica. Enquanto no Antigo Regime o Estado e a Igreja formavam uma simbiose de controle social e legitimação monárquica divina, o Iluminismo fundou o Estado Laico: a soberania emana dos cidadãos (contrato social) e a lei deve ser formulada pela razão pública. A religião passa a pertencer ao âmbito da liberdade de consciência individual privada, garantindo que o Estado seja neutro e trate todos os cidadãos com igualdade jurídica, independentemente de suas fés.",
      stepByStep: [
        "1. Identificar o ponto de partida: Teoria do direito divino dos reis (Bossuet / Bodin).",
        "2. Identificar a ruptura iluminista: Contratualismo laico (Locke, Rousseau, Voltaire).",
        "3. Conceituar Estado Laico: Separação entre Estado e Igreja; neutralidade confessional do poder público.",
        "4. Reconhecer a salvaguarda da cidadania: Liberdade de crença, culto e descrença garantidas pela Constituição.",
        "5. Concluir que a legitimidade secular emana do pacto cívico racional entre os cidadãos."
      ],
      coreConcept: "A laicidade do Estado garante que as leis e políticas públicas sejam formuladas com base na razão pública e no debate democrático, e não em dogmas religiosos particulares.",
      trapWarning: "Estado Laico NÃO é sinônimo de Estado Ateu: o Estado Laico protege a liberdade religiosa de todos e assegura a convivência harmônica das confissões."
    },
    commonTraps: ["Confundir Estado laico (neutro e garantidor de liberdade religiosa) com Estado ateu (persecutório da religião)"],
    tags: ["Estado-Laico", "secularizacao", "direito-divino", "laicidade", "iluminismo"]
  },
  {
    id: "HUM-ILU-021",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "Immanuel Kant e o Conceito de Esclarecimento (Aufklärung)",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "“O Esclarecimento (Aufklärung) é a saída do ser humano de sua menoridade, da qual ele próprio é culpado. A menoridade é a incapacidade de fazer uso de seu entendimento sem a direção de outro indivíduo. O homem é o próprio culpado dessa menoridade se sua causa não reside na falta de entendimento, mas na falta de decisão e de coragem de fazer uso de si mesmo sem a direção de outrem. Sapere aude! Tem a coragem de fazer uso de teu próprio entendimento! Tal é o lema do Esclarecimento.”\n(KANT, Immanuel. Resposta à pergunta: O que é o Esclarecimento?, 1784).",
      source: "KANT, Immanuel. Textos Seletos. Petrópolis: Vozes, 1985"
    },
    prompt: "Para o filósofo iluminista Immanuel Kant, a superação da 'menoridade' intelectual exige do indivíduo a:",
    options: [
      { id: "a", text: "conquista da autonomia crítica da razão, recusando a tutela cômoda de autoridades dogmáticas e assumindo a responsabilidade de pensar por si mesmo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "submissão voluntária às diretrizes infalíveis ditadas por teólogos e confessores espirituais.", isCorrect: false, distractorRationale: "Kant critica duramente a tutela passiva que terceiriza o pensamento para livros sagrados, padres ou governantes." },
      { id: "c", text: "acumulação irrefletida de dados empíricos sem qualquer reflexão ética ou moral sobre os fins humanos.", isCorrect: false, distractorRationale: "A Aufklärung é um ato de coragem ética e emancipação do juízo crítico, não mero acúmulo de dados." },
      { id: "d", text: "abdicação dos direitos civis em benefício da tranquilidade proporcionada pela censura estatal preventiva.", isCorrect: false, distractorRationale: "A menoridade kantiana é precisamente a paralisia cômoda de quem aceita a tutela da censura." },
      { id: "e", text: "obediência irrestrita a preconceitos ancestrais transmitidos por linhagens nobres hereditárias.", isCorrect: false, distractorRationale: "Kant preconiza o rompimento com preconceitos e dogmas herdados através da ousadia de pensar." }
    ],
    detailedExplanation: {
      summary: "No célebre opúsculo de 1784, Kant sintetiza o espírito ético do Iluminismo. A 'menoridade' não é fraqueza biológica, mas covardia e comodismo social de quem prefere que outros pensem por si (o médico dita a dieta, o pastor dita a moral, o governante dita a política). O lema 'Sapere aude!' (Ousa saber!) convoca o ser humano a alcançar a AUTONOMIA: ter a coragem de exercer o pensamento crítico independente, assumindo a responsabilidade pelas próprias decisões no espaço público.",
      stepByStep: [
        "1. Analisar a definição de 'menoridade': Incapacidade de pensar sem ser guiado por outrem.",
        "2. Identificar a causa da menoridade para Kant: Falta de coragem e preguiça, e não deficiência intelectual.",
        "3. Decodificar o lema 'Sapere aude!': 'Ousa saber! Ousa pensar por ti mesmo!'.",
        "4. Compreender a meta do Esclarecimento: Emancipação do indivíduo através da autonomia racional crítica.",
        "5. Concluir que a recusa da tutela cega de autoridades externas constitui a saída da menoridade."
      ],
      coreConcept: "A Aufklärung kantiana é o projeto de emancipação do sujeito pela conquista da autonomia racional: pensar com a própria cabeça contra qualquer tutela autoritária.",
      trapWarning: "Kant distingue o 'uso privado da razão' (onde o funcionário público deve cumprir suas obrigações funcionais) do 'uso público da razão' (onde qualquer cidadão ilustrado tem o dever de expressar sua crítica livre à sociedade inteira)."
    },
    commonTraps: ["Achar que a menoridade kantiana é falta de inteligência inata e não uma postura de comodismo moral"],
    tags: ["Kant", "Aufklarung", "Esclarecimento", "Sapere-aude", "autonomia"]
  },
  {
    id: "HUM-ILU-022",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A 'Festa da Federação' e os Símbolos Cívicos da Revolução Francesa",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a Revolução Francesa, a cultura política foi radicalmente ressignificada através de novos símbolos e rituais coletivos: o barrete frígio (gorro vermelho dos escravos libertos na Antiguidade), a figura feminina de Marianne corporificando a República, a adoção do hino patriótico 'A Marselhesa', a criação da bandeira tricolor (azul, branca e vermelha) e o estabelecimento de um novo calendário revolucionário cujos meses foram renomeados a partir dos ciclos da natureza (Brumário, Termidor, Germinal, Floreal).",
      source: "OZOUF, Mona. A Festa Revolucionária (1789-1799). São Paulo: Queiroz, 1988"
    },
    prompt: "A criação dessa vasta parafernália simbólica e do novo calendário laico pela Revolução Francesa tinha como objetivo pedagógico e político:",
    options: [
      { id: "a", text: "desconstruir a memória da monarquia e da Igreja Católica, forjando uma nova identidade cívica nacional baseada nos valores republicanos da cidadania laica.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "homenagear os imperadores romanos antigos que defenderam o direito divino das realezas feudais.", isCorrect: false, distractorRationale: "Os símbolos revolucionários apropriavam-se da república romana e grega para negar o feudalismo medieval." },
      { id: "c", text: "facilitar a catequização de camponeses franceses por missionários jesuítas no interior da França.", isCorrect: false, distractorRationale: "O calendário revolucionário foi criado expressamente para apagar os dias santos e o calendário gregoriano cristão." },
      { id: "d", text: "promover o esquecimento das conquistas populares da Tomada da Bastilha e da Queda da Bastilha.", isCorrect: false, distractorRationale: "Os ritos comemoravam e eternizavam a vitória do povo contra a monarquia absolutista." },
      { id: "e", text: "uniformizar os uniformes de marinheiros britânicos que patrulhavam os litorais da Europa nórdica.", isCorrect: false, distractorRationale: "Trata-se da produção simbólica revolucionária francesa, sem relação com a marinha inglesa." }
    ],
    detailedExplanation: {
      summary: "A historiadora Mona Ozouf demonstra que a Revolução Francesa compreendeu que não bastava mudar as leis e instituições; era imperativo transformar o imaginário social e os corações dos cidadãos. O calendário revolucionário rompeu com o tempo cristão da Igreja (eliminando domingos e dias de santos) para instituir o tempo da razão e das estações da terra. A iconografia (barrete frígio, Marianne, cocar tricolor) forneceu símbolos visuais de pertencimento à nação soberana em substituição aos retratos sagrados dos reis.",
      stepByStep: [
        "1. Listar os novos símbolos criados: Barrete frígio, Marianne, Marselhesa, bandeira tricolor, novo calendário.",
        "2. Identificar a tradição combatida: Os santos católicos, a realeza absolutista dos Bourbons e o tempo medieval.",
        "3. Compreender a função da pedagogia cívica: Forjar um 'homem novo' republicano comprometido com a nação e a pátria laica.",
        "4. Relacionar com a antropologia política: A substituição dos ritos religiosos tradicionais por ritos cívicos de adoração à liberdade.",
        "5. Concluir que a construção de uma nova identidade cívica nacional laica era o objetivo dos símbolos."
      ],
      coreConcept: "A criação de novos símbolos e de um calendário próprio foi a estratégia revolucionária para secularizar o tempo e a cultura, construindo a identidade republicana dos cidadãos.",
      trapWarning: "O barrete frígio vermelho não é invenção francesa: era o chapéu usado pelos libertos de Roma antiga, reapropriado para simbolizar a libertação da escravidão do absolutismo."
    },
    commonTraps: ["Achar que o novo calendário foi apenas um capricho meteorológico sem intenção de laicização política"],
    tags: ["simbologia-revolucionaria", "Marianne", "calendario-revolucionario", "laicismo", "pedagogia-civica"]
  },
  {
    id: "HUM-ILU-023",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A Crítica Iluminista à Tortura: Cesare Beccaria e o Direito Penal",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "“A tortura é o meio mais seguro de absolver os criminosos robustos e de condenar os inocentes fracos. É um absurdo pretender que a dor física seja o crisol da verdade... Uma pena só pode ser justa quando necessária para impedir novos delitos e advertir os demais concidadãos a não cometerem iguais infrações.”\n(BECCARIA, Cesare. Dos Delitos e das Penas, 1764).",
      source: "BECCARIA, Cesare. Dos Delitos e das Penas. São Paulo: Martin Claret, 2003"
    },
    prompt: "A obra de Cesare Beccaria representou uma revolução nas ciências jurídicas ao formular as bases do Direito Penal moderno, sustentando que:",
    options: [
      { id: "a", text: "as penas devem ser proporcionais aos delitos e desprovidas de crueldade e tortura, visando à prevenção do crime e à reeducação e não à vingança sádica do soberano.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o uso da tortura judicial em praça pública é indispensável para extirpar demônios das almas dos réus.", isCorrect: false, distractorRationale: "Beccaria combateu radicalmente a tortura, provando que ela arranca confissões falsas pelo excesso de dor." },
      { id: "c", text: "a gravidade do castigo deve depender estritamente da árvore genealógica nobiliárquica da vítima.", isCorrect: false, distractorRationale: "O autor defendia a isonomia e a universalidade da lei penal para todas as classes sem privilégios estamentais." },
      { id: "d", text: "a pena de morte deve ser aplicada sumariamente a qualquer cidadão que expresse divergência filosófica.", isCorrect: false, distractorRationale: "Beccaria foi um dos primeiros pensadores do mundo a defender a abolição da pena de morte." },
      { id: "e", text: "as sentenças judiciais devem ser mantidas em segredo de Estado para evitar que a população conheça as leis.", isCorrect: false, distractorRationale: "O Iluminismo penal preconizava a publicidade e clareza das leis e dos julgamentos para todos." }
    ],
    detailedExplanation: {
      summary: "Em 'Dos Delitos e das Penas' (1764), o iluminista milanês Cesare Beccaria demoliu o sistema penal inquisitorial e sádico do Antigo Regime (onde suplícios, esquartejamentos e fogueiras eram espetáculos públicos da ira do rei). Beccaria introduziu os princípios do Direito Penal garantista contemporâneo: princípio da legalidade ('não há crime sem lei anterior que o defina'), proporcionalidade da pena ao dano causado, condenação absoluta da tortura e defesa do caráter preventivo e pedagógico das punições.",
      stepByStep: [
        "1. Analisar a crítica de Beccaria à tortura: Ela não revela a verdade; apenas condena o fraco inocente que não suporta a dor.",
        "2. Identificar a função da pena: Prevenção de novos delitos e defesa da sociedade, não vingança ou crueldade.",
        "3. Reconhecer os pilares do Iluminismo penal: Isonomia, proporcionalidade, publicidade processual e humanização das penas.",
        "4. Relacionar com o legado civilizatório: Abolição da tortura e limitação do poder punitivo do Estado.",
        "5. Concluir que a proporcionalidade da pena e a rejeição da crueldade sádica definem a tese de Beccaria."
      ],
      coreConcept: "Cesare Beccaria humanizou o direito criminal, substituindo os suplícios medievais pela proporcionalidade legal, extinção da tortura e devido processo legal.",
      trapWarning: "Lembre-se: para o Iluminismo, a certeza da punição prevista em lei é muito mais eficaz para coibir crimes do que a atrocidade do castigo físico."
    },
    commonTraps: ["Achar que Beccaria defendia penas mais brutais para intimidar criminosos"],
    tags: ["Beccaria", "direito-penal", "tortura", "humanizacao", "iluminismo"]
  },
  {
    id: "HUM-ILU-024",
    area: "humanas",
    competence: 3,
    skill: 11,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "A Revolução Puritana e o Julgamento de Carlos I (1649)",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em janeiro de 1649, no desfecho da Guerra Civil Inglesa (Revolução Puritana), o rei absolutista Carlos I Stuart foi levado a julgamento público em Londres perante o Tribunal do Parlamento. Declarado 'tirano, traidor, assassino e inimigo público da comunidade inglesa' por desrespeitar as leis e ordenar o massacre de cidadãos, o monarca foi condenado à morte e decapitado em praça pública diante de milhares de súditos atônitos.",
      source: "HILL, Christopher. O Eleito de Deus: Oliver Cromwell e a Revolução Inglesa. São Paulo: Companhia das Letras, 1990"
    },
    prompt: "A decapitação pública do rei Carlos I Stuart pelo Parlamento inglês em 1649 constituiu um precedente revolucionário na história do Ocidente porque:",
    options: [
      { id: "a", text: "afirmou pela primeira vez na prática política que os governantes estão sujeitos às leis do país e podem ser julgados e destituídos por traição contra o próprio povo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "comprovou a invulnerabilidade mística do corpo dos reis absolutistas consagrada pela sagração régia.", isCorrect: false, distractorRationale: "A decapitação física do rei desmitificou brutalmente o dogma do direito divino e a inviolabilidade corporal do monarca." },
      { id: "c", text: "provocou a invasão militar imediata da Inglaterra por tropas imperiais otomanas.", isCorrect: false, distractorRationale: "O Império Otomano não interveio militarmente na guerra civil britânica." },
      { id: "d", text: "transferiu a soberania britânica para o papa de Roma, restaurando o catolicismo tridentino.", isCorrect: false, distractorRationale: "O movimento vitorioso era puritano (calvinista radical), visceralmente anticatólico." },
      { id: "e", text: "estabeleceu a monarquia absolutista hereditária da dinastia Habsburgo na Grã-Bretanha.", isCorrect: false, distractorRationale: "O evento aboliu a monarquia e inaugurou a República de Oliver Cromwell (Commonwealth)." }
    ],
    detailedExplanation: {
      summary: "A execução de Carlos I em 1649 foi o choque político do século XVII. Pela primeira vez na história ocidental, um rei com pretensão de governar por direito divino foi formalmente julgado por traição, condenado pelo Parlamento de seu povo e decapitado publicamente. O ato quebrou para sempre a aura sagrada e intocável dos monarcas: se o rei pode ser julgado e perder a cabeça pela lei dos homens, o poder reside na comunidade política e nas leis, e não em uma divindade distante.",
      stepByStep: [
        "1. Analisar o ineditismo do ato: Julgamento público de um rei em tribunal com base na acusação de traição ao próprio povo.",
        "2. Identificar a ruptura teórica: Destruição prática da teoria do direito divino dos reis de Bossuet.",
        "3. Reconhecer o princípio instaurado: A supremacia da lei e da soberania do povo sobre a figura do governante.",
        "4. Relacionar com o ciclo revolucionário inglês: Abre caminho para a República de Cromwell e a futura Monarquia Parlamentar de 1689.",
        "5. Concluir que a sujeição dos governantes às leis representa o precedente histórico decisivo."
      ],
      coreConcept: "A Revolução Puritana provou na prática que nenhum rei está acima da lei ou da vida de seus cidadãos, pavimentando o constitucionalismo moderno.",
      trapWarning: "Carlos I tentou alegar no julgamento que nenhuma corte na Terra tinha autoridade para julgá-lo porque ele devia satisfações apenas a Deus; o tribunal respondeu julgando-o e cortando sua cabeça."
    },
    commonTraps: ["Achar que a Revolução Francesa foi a primeira a julgar e decapitar um rei absolutista (a Inglaterra fez isso 144 anos antes com Carlos I)"],
    tags: ["Revolucao-Puritana", "Carlos-I", "Inglaterra", "absolutismo", "direito-divino"]
  },
  {
    id: "HUM-ILU-025",
    area: "humanas",
    competence: 3,
    skill: 12,
    topic: "Iluminismo e Modernidade Política",
    subtopic: "O Legado Iluminista e a Declaração Universal dos Direitos Humanos de 1948",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "“Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade.”\n(DECLARAÇÃO UNIVERSAL DOS DIREITOS HUMANOS, ONU, Artigo 1º, 10 de dezembro de 1948).",
      source: "ORGANIZAÇÃO DAS NAÇÕES UNIDAS. Declaração Universal dos Direitos Humanos, 1948"
    },
    prompt: "Redigida no rescaldo da barbárie da Segunda Guerra Mundial e do Holocausto, a Declaração Universal de 1948 dialoga diretamente com as matrizes teóricas do Iluminismo do século XVIII ao reafirmar:",
    options: [
      { id: "a", text: "a dignidade intrínseca e a universalidade dos direitos naturais inatos de todo ser humano, fundados na razão e superiores à soberania arbitrária de qualquer Estado.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a legitimidade de governos autoritários em suspender liberdades fundamentais com base na pureza étnica de suas populações.", isCorrect: false, distractorRationale: "A DUDH foi criada precisamente para banir o racismo e o nazifascismo que devastaram a humanidade." },
      { id: "c", text: "a superioridade moral dos impérios coloniais europeus sobre as populações da África e da Ásia.", isCorrect: false, distractorRationale: "O documento foi a principal alavanca jurídica internacional para os processos de descolonização afro-asiática." },
      { id: "d", text: "a obrigatoriedade de todas as nações adotarem o catolicismo como religião oficial única.", isCorrect: false, distractorRationale: "A DUDH garante a liberdade universal de pensamento, consciência e religião (Artigo 18)." },
      { id: "e", text: "o retorno compulsório ao sistema mercantilista de monopólios régios do Antigo Regime.", isCorrect: false, distractorRationale: "O texto consagra os direitos civis, políticos, sociais e econômicos modernos, nada tendo a ver com o mercantilismo feudal." }
    ],
    detailedExplanation: {
      summary: "A Declaração Universal dos Direitos Humanos (DUDH) de 1948 é o herdeiro direto e universalizado do Iluminismo (Locke, Rousseau, Voltaire, Kant) e da Declaração Francesa de 1789. O Artigo 1º recupera a convicção de que os direitos não são favores outorgados pelo Estado nem privilégios de determinadas nações ou raças: são atributos inerentes à própria condição humana em virtude de sua racionalidade e dignidade inalienável.",
      stepByStep: [
        "1. Analisar o Artigo 1º da DUDH de 1948: 'Todos os seres humanos nascem livres e iguais em dignidade e em direitos'.",
        "2. Identificar a raiz filosófica: O jusnaturalismo iluminista e o imperativo categórico da dignidade humana de Kant.",
        "3. Identificar o contexto de 1948: Superação dos horrores totalitários do nazismo, campos de extermínio e Segunda Guerra Mundial.",
        "4. Reconhecer a universalidade: Nenhum Estado soberano tem o direito de violar os direitos humanos de seus cidadãos.",
        "5. Concluir que a DUDH representa a consagração contemporânea e universal do projeto ético das Luzes."
      ],
      coreConcept: "A DUDH de 1948 universalizou a herança iluminista, proclamando que a dignidade humana e os direitos fundamentais precedem e limitam qualquer soberania estatal.",
      trapWarning: "A DUDH de 1948 avançou em relação ao Iluminismo burguês clássico ao incorporar não apenas direitos civis e políticos (liberdade), mas também direitos sociais, econômicos e culturais (trabalho, saúde, educação)."
    },
    commonTraps: ["Achar que a DUDH de 1948 é apenas um tratado militar e não a consagração moral do humanismo iluminista"],
    tags: ["DUDH-1948", "direitos-humanos", "ONU", "iluminismo", "dignidade-humana"]
  }
];
