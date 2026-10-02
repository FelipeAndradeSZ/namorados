/**
 * BANCO DE QUESTÕES ENEM: Estratégias Argumentativas, Recursos Persuasivos e Falácias Lógicas
 * Área: Linguagens, Códigos e suas Tecnologias
 * Disciplina: Língua Portuguesa, Análise do Discurso e Argumentação
 * Quantidade: 25 Questões Inéditas de Alta Fidelidade ENEM (LIN-PER-001 a LIN-PER-025)
 * Regra Estrita: ZERO termos de deslocamento turístico. Foco em operadores discursivos, falácias, retórica e persuasão.
 */

export const QUESTIONS_ESTRATEGIAS_ARGUMENTATIVAS = [
  {
    id: "LIN-PER-001",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia do Ataque Pessoal (Argumentum ad Hominem)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um debate público veiculado em rede nacional sobre a aprovação de uma nova diretriz clínica para vacinação infantil, um dos debatedores pronunciou a seguinte declaração:\n'Não devemos levar em consideração as estatísticas epidemiológicas apresentadas pelo Doutor Marcos. Todos nesta bancada sabem que ele é um profissional vaidoso, que já trocou de filiação partidária duas vezes e que possui um temperamento excessivamente conflituoso.'",
      source: "Debates Contemporâneos sobre Comunicação em Saúde Pública, 2026."
    },
    prompt: "Na construção da argumentação, a estratégia utilizada pelo debatedor configura uma falácia lógica classificada como 'argumentum ad hominem' porque",
    options: [
      {
        id: "a",
        text: "sustenta a tese em um raciocínio circular em que a conclusão reafirma a premissa inicial com outras palavras.",
        isCorrect: false,
        distractorRationale: "Essa seria a definição de petição de princípio (circularidade), não de ataque pessoal."
      },
      {
        id: "b",
        text: "desqualifica o valor dos dados científicos atacando o caráter pessoal e a conduta moral do interlocutor, em vez de refutar a evidência empírica apresentada.",
        isCorrect: true,
        distractorRationale: "Correto. O 'ad hominem' ocorre precisamente quando o debatedor desvia o foco do mérito da tese ou da validade dos dados para desqualificar o indivíduo que os enuncia, cometendo um vício argumentativo que não invalida os dados epidemiológicos."
      },
      {
        id: "c",
        text: "apresenta uma simplificação grosseira de um dilema complexo como se houvesse apenas duas alternativas excludentes.",
        isCorrect: false,
        distractorRationale: "Essa é a falácia do falso dilema ou falsa dicotomia."
      },
      {
        id: "d",
        text: "estabelece uma falsa relação de causa e efeito a partir de uma mera sucessão cronológica entre dois fatos independentes.",
        isCorrect: false,
        distractorRationale: "Essa é a falácia da falsa causa (post hoc ergo propter hoc)."
      },
      {
        id: "e",
        text: "extrapola indevidamente uma conclusão geral a partir de uma amostra numérica isolada e irrelevante.",
        isCorrect: false,
        distractorRationale: "Essa é a falácia da generalização apressada."
      }
    ],
    detailedExplanation: {
      summary: "A falácia ad hominem substitui o debate racional dos argumentos e evidências pelo ataque pessoal à integridade, temperamento ou biografia do enunciador.",
      stepByStep: [
        "1. Analisar o texto: O locutor descarta as estatísticas epidemiológicas alegando que o médico é vaidoso e mudou de partido.",
        "2. Identificar a falha lógica: Vaidade ou posicionamento político não alteram a precisão matemática ou a evidência científica dos dados epidemiológicos.",
        "3. Classificar o recurso: O ataque é dirigido ao indivíduo (ad hominem), e não à validade da proposição científica."
      ],
      coreConcept: "A validade de uma evidência independe das virtudes morais ou defeitos de quem a profere; atacar a pessoa para refutar sua tese é um vício argumentativo.",
      trapWarning: "O ENEM frequentemente traz falácias em artigos de opinião e debates para testar se o aluno sabe discernir entre ataque à pessoa e refutação de tese."
    },
    tags: ["argumentacao", "falacias-logicas", "ad-hominem", "retorica", "saude-publica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-002",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "Operadores Argumentativos de Oposição: Adversidade vs. Concessão",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Texto I:\n'A telemedicina ampliou substancialmente o acesso de populações ribeirinhas e remotas a especialistas de saúde, contudo persistiram gargalos na conectividade digital que limitaram sua resolutividade total.'\n\nTexto II:\n'Embora tenham persistido gargalos na conectividade digital que limitaram sua resolutividade total, a telemedicina ampliou substancialmente o acesso de populações ribeirinhas e remotas a especialistas de saúde.'",
      source: "Anais Brasileiros de Saúde Coletiva e Inovação Tecnológica, 2026."
    },
    prompt: "Embora os Textos I e II utilizem os mesmos fatos factuais, o emprego dos conectivos 'contudo' (no Texto I) e 'embora' (no Texto II) orienta discursivamente o leitor para conclusões opostas porque",
    options: [
      {
        id: "a",
        text: "no Texto I, o operador concessivo atribui força máxima ao avanço tecnológico, enquanto no Texto II a adversativa anula o benefício.",
        isCorrect: false,
        distractorRationale: "'Contudo' é adversativo, e não concessivo. A classificação foi invertida na alternativa."
      },
      {
        id: "b",
        text: "a conjunção adversativa ('contudo') no Texto I confere peso argumentativo predominante aos gargalos e limitações, ao passo que a subordinativa concessiva ('embora') no Texto II subordina a limitação e faz prevalecer o sucesso da ampliação do acesso.",
        isCorrect: true,
        distractorRationale: "Correto: Na teoria da argumentação na língua (Ducrot), a oração introduzida por conjunção adversativa ('mas', 'contudo') carrega a orientação argumentativa final do período (o foco recai nos gargalos). Em contrapartida, a oração concessiva ('embora', 'ainda que') introduz um argumento vencido, fazendo com que a oração principal ('a telemedicina ampliou...') seja a tese vencedora e orientadora."
      },
      {
        id: "c",
        text: "ambos os conectivos desempenham idêntica função sintática de coordenação sindética explicativa sem alterar a ênfase discursiva.",
        isCorrect: false,
        distractorRationale: "Nenhum deles é explicativo; um é coordenativo adversativo e o outro subordinativo concessivo."
      },
      {
        id: "d",
        text: "o Texto II estabelece uma relação de causa e consequência necessária, eliminando o contraste semântico original.",
        isCorrect: false,
        distractorRationale: "O contraste semântico permanece, porém com hierarquia argumentativa invertida."
      },
      {
        id: "e",
        text: "no Texto I há modalização de incerteza gerada por 'contudo', ao passo que no Texto II a conjunção 'embora' denota certeza absoluta.",
        isCorrect: false,
        distractorRationale: "Nenhum dos conectivos atua primariamente como modalizador de dúvida/certeza epistêmica; tratam-se de operadores de oposição/contra-expectativa."
      }
    ],
    detailedExplanation: {
      summary: "Na oposição adversativa (mas/contudo), o argumento que vence é o que vem introduzido pelo conectivo; na concessiva (embora/conquanto), o argumento que vem com o conectivo é o argumento subordinado (derrotado).",
      stepByStep: [
        "1. Identificar o conectivo em I: 'contudo' introduz os gargalos de conectividade. Portanto, a conclusão discursiva orienta para as falhas.",
        "2. Identificar o conectivo em II: 'embora' introduz os gargalos de conectividade. Portanto, esses gargalos são concedidos (reconhecidos, mas superados pela oração principal).",
        "3. Concluir: O Texto I enfatiza a deficiência, enquanto o Texto II enfatiza o impacto positivo da telemedicina."
      ],
      coreConcept: "A adversidade encerra o argumento vencedor do enunciado; a concessão reconhece um contraponto apenas para fortalecer a tese principal.",
      trapWarning: "Cuidado: Muitos alunos acham que 'mas' e 'embora' são sinônimos perfeitos; eles têm o mesmo valor de oposição, mas invertem a hierarquia argumentativa do período."
    },
    tags: ["conectivos", "operadores-argumentativos", "adversativa", "concessiva", "lingua-portuguesa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-003",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia do Espantalho (Straw Man)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Cientista A:\n'Propomos a regulamentação do uso profilático de antibióticos na pecuária intensiva, visando conter a aceleração da resistência antimicrobiana em bactérias zoonóticas de relevância clínica humana.'\n\nRepresentante B:\n'A proposta do Cientista A é um atentado irresponsável contra a segurança alimentar do país! Ele deseja simplesmente banir toda e qualquer medicação aos animais do campo, deixando o gado morrer desassistido de infecções dolorosas para destruir deliberadamente a produção nacional de alimentos.'",
      source: "Seminário Nacional sobre Sanidade e Biotecnologia Agropecuária, 2026."
    },
    prompt: "A réplica do Representante B caracteriza-se pela falácia do espantalho (straw man) ao",
    options: [
      {
        id: "a",
        text: "apresentar um encadeamento causal no qual uma pequena concessão inicial leva inevitavelmente a um desastre final catastrófico sem respaldo factual.",
        isCorrect: false,
        distractorRationale: "Essa é a descrição da falácia da ladeira escorregadia (slippery slope)."
      },
      {
        id: "b",
        text: "distorcer, exagerar e caricaturar a proposta moderada do oponente, criando uma versão extremada e indefensável para atacá-la com facilidade.",
        isCorrect: true,
        distractorRationale: "Correto. O cientista propôs 'regulamentar o uso profilático', mas o interlocutor transformou isso em 'banir todo medicamento e deixar o gado morrer desassistido'. Essa construção de um 'boneco de palha' (espantalho) facilmente refutável é o traço clássico dessa falácia."
      },
      {
        id: "c",
        text: "apelar para o sentimento de pena e comiseração do público em favor dos animais do campo para desviar a atenção do debate técnico.",
        isCorrect: false,
        distractorRationale: "Embora mencione 'infecções dolorosas', o mecanismo central não é o apelo à misericórdia (ad misericordiam), mas sim a adulteração deliberada da tese do oponente."
      },
      {
        id: "d",
        text: "invocar a opinião de uma autoridade não reconhecida para chancelar a tese defendida.",
        isCorrect: false,
        distractorRationale: "Não houve citação de autoridade no trecho."
      },
      {
        id: "e",
        text: "afirmar que a tese do oponente é verdadeira simplesmente porque ninguém conseguiu provar o contrário até o presente momento.",
        isCorrect: false,
        distractorRationale: "Essa seria a falácia do apelo à ignorância (argumentum ad ignorantiam)."
      }
    ],
    detailedExplanation: {
      summary: "A falácia do espantalho consiste em deformar e radicalizar a posição do interlocutor para combater uma versão fictícia e frágil que nunca foi defendida.",
      stepByStep: [
        "1. Identificar a tese original: Regulamentar uso profilático de antibióticos na pecuária.",
        "2. Identificar a réplica: Acusa o autor de querer banir todos os remédios e deixar animais morrerem desassistidos.",
        "3. Concluir: O debatedor construiu uma versão falsa e grotesca (o espantalho) para refutá-la triunfalmente."
      ],
      coreConcept: "Refutar um espantalho não refuta o argumento real: na boa argumentação, refuta-se a tese em sua formulação mais rigorosa.",
      trapWarning: "Fique atento a verbos extremados como 'quer banir tudo', 'quer destruir', 'é contra o progresso', que tipificam distorções caricaturais."
    },
    tags: ["retorica", "falacias", "espantalho", "discurso-publico", "interpretacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-004",
    area: "linguagens",
    competence: 7,
    skill: 24,
    topic: "Argumentação e Retórica",
    subtopic: "Modalização Discursiva e Atitude Epistêmica",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Analise os dois enunciados extraídos de relatórios científicos sobre mudanças climáticas e vetores de arboviroses:\n\nEnunciado 1: 'O aumento das temperaturas médias certamente provocará a disseminação irreversível do Aedes aegypti para latitudes polares nas próximas três semanas.'\n\nEnunciado 2: 'Os modelos computacionais sugerem que a elevação térmica global pode favorecer a expansão geográfica do vetor para regiões subtropicais outrora temperadas, demandando vigilância entomológica contínua.'",
      source: "Revista Brasileira de Epidemiologia e Modelagem Ecológica, 2026."
    },
    prompt: "Do ponto de vista da argumentação científica e da credibilidade do discurso, o Enunciado 2 demonstra maior rigor e aceitabilidade acadêmica porque emprega marcas de modalização discursiva que",
    options: [
      {
        id: "a",
        text: "eliminam qualquer vestígio de rigor metodológico, demonstrando fraqueza e hesitação retórica perante o leitor leigo.",
        isCorrect: false,
        distractorRationale: "A modalização não indica fraqueza, mas precisão epistêmica e respeito aos limites da evidência empírica."
      },
      {
        id: "b",
        text: "calibram a força da asserção ('sugerem', 'pode favorecer') em consonância com a natureza probabilística dos modelos preditivos, evitando certezas categóricas inverossímeis.",
        isCorrect: true,
        distractorRationale: "Correto: A ciência avança por hipóteses probabilísticas e evidências condicionais. O uso de modalizadores epistêmicos de probabilidade ('sugerem', 'pode favorecer') expressa prudência metodológica e confere legitimidade ao discurso científico, ao contrário do Enunciado 1, que faz predições hiperbólicas e absurdas com certezas absolutas ('certamente', 'irreversível', 'três semanas')."
      },
      {
        id: "c",
        text: "substituem o raciocínio lógico por um apelo emocional voltado a comover a comunidade de pesquisadores.",
        isCorrect: false,
        distractorRationale: "O texto não tem apelo emocional; é eminentemente técnico e descritivo."
      },
      {
        id: "d",
        text: "invertem a ordem direta da oração com o propósito de dificultar o entendimento por parte da autoridade sanitária.",
        isCorrect: false,
        distractorRationale: "A ordem e clareza sintática mantêm-se regulares; o que varia é o grau de engajamento epistêmico do locutor."
      },
      {
        id: "e",
        text: "utilizam figuras de pensamento como o paradoxo e a antítese para neutralizar as previsões dos modelos.",
        isCorrect: false,
        distractorRationale: "Não há paradoxos ou antíteses estruturando o período."
      }
    ],
    detailedExplanation: {
      summary: "A modalização discursiva expressa a atitude do locutor em relação ao que diz. No texto científico, modalizadores de probabilidade conferem precisão e responsabilidade enunciativa.",
      stepByStep: [
        "1. No Enunciado 1: Usa asserção absoluta ('certamente provocará') para predições inverossímeis em prazo irreal (três semanas).",
        "2. No Enunciado 2: Usa modalizadores prudentes ('sugerem', 'pode favorecer') que espelham o caráter probabilístico da epidemiologia.",
        "3. Concluir: A modalização atenua a certeza dogmática e fortalece a fidedignidade científica do texto."
      ],
      coreConcept: "Modalizadores epistêmicos (talvez, sugere-se, é provável) são indispensáveis no texto acadêmico para evitar generalizações dogmáticas infundadas.",
      trapWarning: "Não confunda modalização de cautela com falta de convicção ou ignorância: a prudência científica é um critério de excelência avaliado no ENEM."
    },
    tags: ["modalizacao", "discurso-cientifico", "analise-do-discurso", "retorica", "epidemiologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-005",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia da Falsa Causa (Post Hoc Ergo Propter Hoc)",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma publicação com grande engajamento em redes sociais, um influenciador digital divulgou o seguinte relato pessoal:\n'Passei três semanas consumindo extrato concentrado de casca de jabuticaba todos os dias em jejum. Logo em seguida, meu exame de sangue revelou que meu colesterol total baixou 45 pontos! Portanto, está definitivamente provado pela ciência da minha experiência que o extrato de jabuticaba é a cura biológica definitiva da dislipidemia, superando qualquer medicamento alopático prescrito por cardiologistas.'",
      source: "Comunicação Científica e Desinformação em Redes Sociais, 2026."
    },
    prompt: "O raciocínio argumentativo construído no relato é falacioso sob a perspectiva do método científico porque",
    options: [
      {
        id: "a",
        text: "equipara uma mera sucessão temporal ('tomei o extrato e depois o colesterol baixou') a uma relação causal necessária, desconsiderando variáveis de confusão e a ausência de grupo controle.",
        isCorrect: true,
        distractorRationale: "Correto. Trata-se da falácia 'post hoc ergo propter hoc' (depois disso, logo por causa disso). A sucessão cronológica entre dois eventos não comprova nexo de causalidade. A redução do colesterol pode ter ocorrido por alterações alimentares, exercícios físicos, flutuação biológica ou regressão à média, o que exige ensaios clínicos randomizados duplo-cegos para validação."
      },
      {
        id: "b",
        text: "apoia-se no consenso unânime de todas as sociedades médicas internacionais para impor uma verdade dogmática.",
        isCorrect: false,
        distractorRationale: "O autor não cita sociedades médicas; pelo contrário, rejeita a medicina alopática."
      },
      {
        id: "c",
        text: "comete uma contradição lógica interna ao afirmar que a substância possui propriedades tóxicas e benéficas simultaneamente.",
        isCorrect: false,
        distractorRationale: "Não há menção a toxicidade no depoimento."
      },
      {
        id: "d",
        text: "apresenta um silogismo categórico perfeito que decorre necessariamente das premissas aristotélicas.",
        isCorrect: false,
        distractorRationale: "O argumento é uma falácia empírica informal, longe de um silogismo válido."
      },
      {
        id: "e",
        text: "desqualifica a jabuticaba com base em critérios de pureza estética e botânica.",
        isCorrect: false,
        distractorRationale: "O autor exalta a jabuticaba em vez de desqualificá-la."
      }
    ],
    detailedExplanation: {
      summary: "Correlação temporal não implica causalidade. Assumir que B foi causado por A apenas porque B ocorreu após A é a falácia da falsa causa (post hoc ergo propter hoc).",
      stepByStep: [
        "1. O influenciador relata: Tomou jabuticaba (evento A); colesterol caiu (evento B).",
        "2. Conclusão dele: Logo, a jabuticaba foi a causa biológica direta e absoluta da redução.",
        "3. Falha lógica: O tempo decorrido não isola variáveis biológicas nem constitui ensaio clínico controlado."
      ],
      coreConcept: "A causalidade científica requer controle de variáveis, significância estatística e mecanismo plausível, e jamais apenas relatos anedóticos cronológicos.",
      trapWarning: "Depoimentos individuais ('comigo funcionou') são relatos anedóticos, o nível mais baixo de evidência na pirâmide científica de saúde."
    },
    tags: ["metodo-cientifico", "falacias", "falsa-causa", "desinformacao", "saude"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-006",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "Estratégia Argumentativa por Exemplificação e Casos Paradigmáticos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Para defender a necessidade de políticas públicas estruturantes de saneamento básico em periferias urbanas, o autor de um ensaio escreve:\n'O impacto da ausência de redes coletoras de esgoto não é uma abstração estatística; ele tem rosto e biografia. Em 2024, no bairro de Alagados, a jovem Laura, de apenas 7 anos, perdeu 42 dias de aulas escolares e precisou ser internada duas vezes por surtos de giardíase e hepatite A contraídos nas poças de efluentes a céu aberto que circundam a porta de sua casa. Quando o Estado nega o encanamento, ele confisca a infância e a escolarização de milhares de cidadãos como Laura.'",
      source: "Cadernos de Direitos Sociais e Urbanismo Crítico, 2026."
    },
    prompt: "No fragmento apresentado, o recurso à história particular da menina Laura cumpre a função argumentativa de",
    options: [
      {
        id: "a",
        text: "desviar o debate dos impactos coletivos do saneamento, restringindo o problema a uma tragédia de âmbito exclusivamente doméstico.",
        isCorrect: false,
        distractorRationale: "O autor não restringe o problema ao lar; ele usa o caso de Laura explicitamente como representante de 'milhares de cidadãos'."
      },
      {
        id: "b",
        text: "corporificar a tese em um exemplo paradigmático concreto, humanizando os dados quantitativos e amplificando a força persuasiva por meio da empatia ética.",
        isCorrect: true,
        distractorRationale: "Correto: A estratégia de exemplificação por caso concreto (ou caso paradigmático) serve para materializar conceitos abstratos ('ausência de redes coletoras') na experiência vívida de um sujeito real ('a jovem Laura'). Isso conecta a demonstração racional (logos) à comoção moral/ética (pathos), potencializando o poder de convencimento da tese geral."
      },
      {
        id: "c",
        text: "apresentar um contra-argumento destinado a refutar a responsabilidade do poder público na infraestrutura urbana.",
        isCorrect: false,
        distractorRationale: "O texto afirma explicitamente que o Estado confisca a infância quando nega o encanamento."
      },
      {
        id: "d",
        text: "comprovar matematicamente que 100% dos casos de evasão escolar no país decorrem de infecções parasitárias.",
        isCorrect: false,
        distractorRationale: "O texto não faz afirmações matemáticas absolutas de totalidade nacional."
      },
      {
        id: "e",
        text: "funcionar como argumento de autoridade jurídica formal extraído da Constituição Federal.",
        isCorrect: false,
        distractorRationale: "O caso de Laura é um exemplo fático/narrativo humanizado, e não uma citação jurídica formal de autoridade."
      }
    ],
    detailedExplanation: {
      summary: "A exemplificação humaniza o argumento: colocar um indivíduo com nome, idade e dores reais como símbolo de uma questão coletiva converte números frios em apelo ético urgente.",
      stepByStep: [
        "1. Analisar a transição: O autor diz que o problema 'não é uma abstração; tem rosto e biografia'.",
        "2. Narrar o caso: Detalha o sofrimento de Laura (internações, perda de aulas por água contaminada).",
        "3. Universalizar: Conclui que Laura representa milhares na mesma situação, cobrando ação do Estado.",
        "4. Concluir: A função é dar concretude, apelo ético e humanização à tese central."
      ],
      coreConcept: "A exemplificação narrativa (ilustração paradigmática) articula logos e pathos, dando concretude a teses sociológicas abstratas.",
      trapWarning: "Na redação nota 1000 do ENEM, balancear dados estatísticos com ilustrações concretas confere grande densidade ao Projeto de Texto."
    },
    tags: ["argumentacao", "recursos-persuasivos", "exemplificacao", "direitos-sociais", "redacao-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-007",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia do Falso Dilema (Falsa Dicotomia)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um editorial que discute investimentos públicos em saúde e controle fiscal, lê-se o seguinte trecho:\n'Diante do atual cenário orçamentário, a sociedade brasileira é colocada perante uma encruzilhada inexorável: ou aceitamos o desmonte programado de leitos hospitalares do SUS para equilibrar as contas públicas, ou mergulharemos em uma espiral de hiperinflação incontrolável que destruirá o poder de compra de todos os trabalhadores. Não há uma terceira via possível.'",
      source: "Folha dos Mercados e Opinião Econômica, 2026."
    },
    prompt: "A estrutura argumentativa do editorial incorre na falácia do falso dilema (falsa dicotomia) porque",
    options: [
      {
        id: "a",
        text: "ataca diretamente a índole moral e as intenções dos gestores do Ministério da Fazenda.",
        isCorrect: false,
        distractorRationale: "Não há ataque à honra ou moral dos gestores (não é ad hominem)."
      },
      {
        id: "b",
        text: "reduz artificialmente um problema macroeconômico multifacetado a apenas duas alternativas extremas e excludentes, ocultando outras soluções viáveis como reforma tributária ou combate à sonegação fiscal.",
        isCorrect: true,
        distractorRationale: "Correto. O falso dilema consiste em coagir o interlocutor a escolher entre duas alternativas desastrosas ('ou destrói o SUS ou o país quebra em hiperinflação'), ignorando que a realidade comporta múltiplas alternativas viáveis (taxação de grandes patrimônios, corte de privilégios corporativos, revisão de renúncias fiscais, auditoria de gastos, etc.)."
      },
      {
        id: "c",
        text: "utiliza premissas verdadeiras para atingir uma conclusão dedutivamente irrefutável.",
        isCorrect: false,
        distractorRationale: "O argumento é falacioso justamente por excluir as premissas intermediárias reais."
      },
      {
        id: "d",
        text: "baseia-se na sabedoria popular e no senso comum para dispensar dados estatísticos.",
        isCorrect: false,
        distractorRationale: "O texto usa linguagem formal de economia de mercado, não ditados populares."
      },
      {
        id: "e",
        text: "confunde causa com efeito na evolução histórica da inflação brasileira.",
        isCorrect: false,
        distractorRationale: "A falha lógica reside no binarismo forçado das opções, e não na inversão de causalidade cronológica."
      }
    ],
    detailedExplanation: {
      summary: "O falso dilema polariza a discussão em 'tudo ou nada', suprimindo opções intermediárias ou soluções alternativas para forçar o leitor a aceitar uma medida impopular.",
      stepByStep: [
        "1. Analisar as opções dadas: 1) Destruir o SUS; 2) Quebrar o país com hiperinflação.",
        "2. Identificar a afirmação coercitiva: 'Não há uma terceira via possível.'",
        "3. Avaliar a realidade: Há dezenas de alternativas fiscais e tributárias que não exigem fechar leitos do SUS.",
        "4. Concluir: O autor cometeu a falácia da falsa dicotomia."
      ],
      coreConcept: "A complexidade dos problemas públicos raramente é binária; desconfie de discursos que colocam o debate em termos de 'ou X ou o apocalipse'.",
      trapWarning: "No ENEM, termos como 'ou isto ou aquilo', 'a única saída', 'inexorável escolha' são fortes indícios de falsos dilemas retóricos."
    },
    tags: ["falacias", "falso-dilema", "editorial", "economia-politica", "interpretacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-008",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Argumentação e Retórica",
    subtopic: "Argumento de Autoridade e Seus Limites Epistêmicos",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma coluna de revista de grande circulação, um laureado físico nuclear aposentado publicou um artigo afirmando categoricamente que os protocolos de transplante de medula óssea utilizados nos centros de oncologia brasileiros estão equivocados e deveriam ser substituídos por sessões de alinhamento quântico de frequências celulares.\nO colunista abriu o artigo com a frase: 'Como ganhador de menções honrosas e prestigiado físico teórico que decifrou equações de partículas atômicas, tenho a autoridade final para determinar quais tratamentos oncológicos realmente funcionam no corpo humano.'",
      source: "Reflexões sobre a Filosofia da Ciência e Autoridade Médica, 2026."
    },
    prompt: "Sob a ótica da teoria da argumentação, o apelo à autoridade (argumentum ad verecundiam) empregado pelo colunista revela-se ilegítimo porque",
    options: [
      {
        id: "a",
        text: "o autor não possui qualquer titulação acadêmica em nenhuma área do conhecimento reconhecida pelo Ministério da Educação.",
        isCorrect: false,
        distractorRationale: "O autor possui titulação e prestígio, mas na área de física nuclear, não em medicina ou oncologia celular."
      },
      {
        id: "b",
        text: "transpõe indevidamente o prestígio científico obtido em um campo do saber (física nuclear) para emitir pareceres categóricos em outra disciplina altamente especializada (oncologia médica), sem respaldo metodológico e clínico correspondente.",
        isCorrect: true,
        distractorRationale: "Correto: A falácia do apelo à autoridade espúria/incompetente ocorre quando se utiliza o renome de alguém em determinado campo (Física) para validar teses em uma área completamente distinta (Medicina Oncológica), onde o sujeito não possui especialização clínica nem apresenta dados de ensaios clínicos controlados."
      },
      {
        id: "c",
        text: "a física quântica é uma teoria obsoleta rejeitada unanimemente por todas as universidades contemporâneas.",
        isCorrect: false,
        distractorRationale: "A física quântica é um ramo consolidado e moderno da física; a distorção está na sua aplicação indevida como 'cura quântica' oncológica."
      },
      {
        id: "d",
        text: "a medicina moderna não aceita o uso de argumentos de autoridade em nenhuma circunstância acadêmica.",
        isCorrect: false,
        distractorRationale: "A medicina respeita autoridades científicas legítimas (consensos de sociedades médicas, revisões sistemáticas Cochrane), desde que baseadas em evidências empíricas."
      },
      {
        id: "e",
        text: "o colunista utilizou palavras de baixo calão para agredir a comunidade médica hospitalar.",
        isCorrect: false,
        distractorRationale: "Não houve uso de palavras de baixo calão no texto."
      }
    ],
    detailedExplanation: {
      summary: "O argumento de autoridade legítimo exige que o especialista citado possua competência comprovada no campo exato da discussão e que sua tese seja respaldada por evidências.",
      stepByStep: [
        "1. Identificar o enunciador: Físico nuclear renomado.",
        "2. Identificar a matéria tratada: Protocolos de transplante de medula óssea em oncologia.",
        "3. Constatar o deslocamento: A expertise em física subatômica não confere competência clínica para prescrever terapias oncológicas.",
        "4. Concluir: Trata-se de apelo à autoridade fora de seu domínio (ad verecundiam impróprio)."
      ],
      coreConcept: "A autoridade científica não é transferível de um campo do saber para outro; títulos em Física ou Engenharia não validam palpites em Bioquímica Médica.",
      trapWarning: "No ENEM, atente-se para textos de pseudociência que usam termos da física ('quântico', 'vibracional') para justificar terapias sem comprovação biológica."
    },
    tags: ["argumento-de-autoridade", "falacias", "ad-verecundiam", "epistemologia", "medicina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-009",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "Estratégia de Causa e Consequência em Textos Dissertativos",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O sedentarismo crônico infantil não surge no vácuo; ele decorre diretamente da verticalização desordenada dos centros urbanos e da supressão de praças e áreas verdes públicas de lazer seguro. Sem calçadas acessíveis ou parques próximos para a prática de jogos corporais, as crianças são compulsoriamente confinadas aos limites estreitos dos apartamentos e ao entretenimento passivo das telas digitais. Como resultado inescapável desse aprisionamento espacial, o país assiste a uma escalada sem precedentes nos índices de obesidade infantil precoce, hipertensão juvenil e diabetes tipo 2 em faixas etárias abaixo dos 12 anos.",
      source: "Boletim de Saúde Pública e Pediatria Social, 2026."
    },
    prompt: "A progressão temática do parágrafo é estruturada pelo recurso argumentativo de causa e consequência. Nesse esquema lógico, a obesidade infantil precoce é apresentada como",
    options: [
      {
        id: "a",
        text: "a causa originária que provocou o desmonte das áreas verdes e a verticalização das cidades.",
        isCorrect: false,
        distractorRationale: "A obesidade é o efeito final, e não a causa da verticalização urbana."
      },
      {
        id: "b",
        text: "o desfecho patológico decorrente de uma cadeia causal que se inicia na escassez de infraestrutura urbana pública de convivência e lazer.",
        isCorrect: true,
        distractorRationale: "Correto: O texto constrói um encadeamento causal nítido: Causa primária (falta de praças e verticalização urbana desordenada) → Causa intermediária (confinamento em apartamentos e uso excessivo de telas) → Consequência terminal (aumento de obesidade, hipertensão e diabetes em crianças)."
      },
      {
        id: "c",
        text: "uma premissa hipotética rejeitada pelo autor como estatisticamente irrelevante.",
        isCorrect: false,
        distractorRationale: "O autor trata o fato como uma realidade alarmante ('escalada sem precedentes'), e não como hipótese rejeitada."
      },
      {
        id: "d",
        text: "um contraponto concessivo utilizado para justificar a expansão dos condomínios fechados.",
        isCorrect: false,
        distractorRationale: "Não há relação de concessão, mas de efeito direto."
      },
      {
        id: "e",
        text: "uma analogia figurada desprovida de nexo com o espaço geográfico das cidades.",
        isCorrect: false,
        distractorRationale: "A relação é causal concreta e fundamentada na urbanização, não uma mera metáfora estética."
      }
    ],
    detailedExplanation: {
      summary: "O encadeamento de causa e efeito estabelece nexos lógicos demonstrativos: demonstrar como um problema estrutural macroeconômico/urbano gera consequências clínicas graves na vida das pessoas.",
      stepByStep: [
        "1. Identificar o ponto de partida causal: Verticalização desordenada e supressão de praças públicas.",
        "2. Identificar o elo mediador: Confinamento domiciliar das crianças e uso de telas digitais.",
        "3. Identificar o desfecho: Obesidade, hipertensão e diabetes infantil.",
        "4. Concluir: A obesidade é a consequência terminal da cadeia de causas urbanísticas."
      ],
      coreConcept: "A relação causa-consequência é um dos pilares mais valorizados na Competência 3 da Redação do ENEM para comprovar autoria e projeto de texto.",
      trapWarning: "Cuidado para não inverter a ordem causal: o sedentarismo e as doenças são frutos da estrutura do meio urbano, e não o inverso."
    },
    tags: ["argumentacao", "causa-e-efeito", "saude-publica", "urbanismo", "redacao-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-010",
    area: "linguagens",
    competence: 7,
    skill: 24,
    topic: "Argumentação e Retórica",
    subtopic: "Polifonia, Enunciação e Marcas de Distanciamento (Aspas)",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma reportagem investigativa sobre o mercado ilegal de suplementos milagrosos, o jornalista escreve:\n'O laboratório clandestino vendia cápsulas de farinha e corante afirmando que se tratava de uma \"terapia revolucionária de rejuvenescimento mitocondrial\". O fabricante garantiu aos compradores ingênuos que a fórmula continha compostos \"100% naturais e cientificamente blindados contra o envelhecimento\", cobrando valores exorbitantes por um frasco inócuo.'",
      source: "Jornalismo Científico e Regulação Sanitária, 2026."
    },
    prompt: "No texto, o uso das aspas nas expressões 'terapia revolucionária de rejuvenescimento mitocondrial' e '100% naturais e cientificamente blindados contra o envelhecimento' funciona como recurso argumentativo para",
    options: [
      {
        id: "a",
        text: "indicar que o jornalista endossa plenamente a eficácia das substâncias comercializadas pelo fabricante.",
        isCorrect: false,
        distractorRationale: "O repórter denuncia o produto como clandestino e inócuo; ele rejeita categoricamente as alegações."
      },
      {
        id: "b",
        text: "marcar uma polifonia enunciativa de distanciamento crítico, assinalando que as alegações pertencem à voz do fabricante fraudulento e que o autor se isenta de sua veracidade com tom irônico.",
        isCorrect: true,
        distractorRationale: "Correto: Na análise do discurso (Ducrot e Maingueneau), as aspas de distanciamento ou modalizadoras sinalizam que o locutor traz para o seu texto a voz de outrem (polifonia), recusando-se a assumir a responsabilidade pela verdade daquelas palavras e denunciando implicitamente seu caráter falacioso ou publicitário."
      },
      {
        id: "c",
        text: "cumprir uma regra gramatical estrita que exige aspas para qualquer vocábulo polissilábico de origem latina.",
        isCorrect: false,
        distractorRationale: "Não existe essa regra na norma culta da língua portuguesa."
      },
      {
        id: "d",
        text: "destacar conceitos médicos consagrados em compêndios internacionais de biogerontologia.",
        isCorrect: false,
        distractorRationale: "As expressões são jargões de marketing enganoso de um laboratório clandestino, e não conceitos consagrados."
      },
      {
        id: "e",
        text: "sinalizar que o repórter esqueceu o significado dos termos e solicita a ajuda do leitor para compreendê-los.",
        isCorrect: false,
        distractorRationale: "Essa interpretação é absurda e desprovida de sentido retórico."
      }
    ],
    detailedExplanation: {
      summary: "As aspas de distanciamento enunciativo mostram que o autor está citando termos de outra voz (o charlatão) sem avalizá-los, expressando desconfiança e ironia.",
      stepByStep: [
        "1. Analisar o contexto: Cápsulas de farinha e corante vendidas a preços exorbitantes por laboratório ilegal.",
        "2. Identificar as aspas: Estão nos slogans mirabolantes do fabricante.",
        "3. Avaliar a intenção do repórter: Destacar a propaganda enganosa para expor a fraude.",
        "4. Concluir: O recurso marca polifonia e distanciamento crítico do locutor."
      ],
      coreConcept: "Aspas não servem apenas para citações textuais neutras: na argumentação, são ferramentas poderosas de ironia, distanciamento e crítica ideológica.",
      trapWarning: "Cuidado: Nunca confunda aspas de validação bibliográfica com aspas de refutação irônica; o contexto discursivo é o guia soberano."
    },
    tags: ["polifonia", "aspas", "distanciamento-enunciativo", "ironia", "analise-do-discurso"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-011",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia da Generalização Apressada (Secundum Quid)",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante uma mesa-redonda sobre eficácia farmacológica de antidepressivos inibidores seletivos de recaptação de serotonina (ISRS), um debatedor declarou:\n'Os ensaios clínicos com milhares de voluntários são completamente dispensáveis para avaliar a sertralina. Eu tomei esse medicamento por três dias no ano passado e sofri com náuseas terríveis, enquanto meu primo tomou e continuou desanimado. Portanto, afirmo categoricamente que a sertralina é um remédio inútil que não serve para nenhum paciente com transtorno depressivo maior.'",
      source: "Mesa-Redonda sobre Psiquiatria Baseada em Evidências, 2026."
    },
    prompt: "O argumento do debatedor incorre na falácia da generalização apressada porque",
    options: [
      {
        id: "a",
        text: "utiliza premissas verdadeiras verificadas em uma amostra estatisticamente representativa de toda a população nacional.",
        isCorrect: false,
        distractorRationale: "O autor usou uma amostra minúscula de apenas duas pessoas (ele e o primo), nada representativa."
      },
      {
        id: "b",
        text: "infere uma regra universal e categórica sobre a ineficácia do fármaco a partir de uma amostra empírica insignificante, casuística e atípica de apenas dois indivíduos.",
        isCorrect: true,
        distractorRationale: "Correto: A falácia da generalização apressada (secundum quid) consiste em extrapolar uma conclusão universal ('não serve para nenhum paciente no mundo') a partir de evidências anedóticas ou de uma amostra quantitativamente irrisória (dois casos individuais observados por três dias, quando o efeito antidepressivo demora semanas para se consolidar biologicamente)."
      },
      {
        id: "c",
        text: "apresenta um argumento baseado exclusivamente na autoridade dos maiores neurocientistas contemporâneos.",
        isCorrect: false,
        distractorRationale: "O debatedor despreza explicitamente os ensaios científicos, baseando-se apenas em sua vivência."
      },
      {
        id: "d",
        text: "sustenta sua posição no princípio lógico do terceiro excluído de Aristóteles.",
        isCorrect: false,
        distractorRationale: "Não há relação com o princípio formal do terceiro excluído."
      },
      {
        id: "e",
        text: "comete uma agressão física contra o interlocutor durante a sessão presencial.",
        isCorrect: false,
        distractorRationale: "Não houve agressão física no debate."
      }
    ],
    detailedExplanation: {
      summary: "A generalização apressada formula uma regra universal a partir de poucos exemplos não representativos, ignorando a variabilidade estatística e biológica.",
      stepByStep: [
        "1. Identificar a amostra: Duas pessoas (o próprio locutor e o primo).",
        "2. Identificar a conclusão extrapolada: 'O remédio é inútil para TODOS os pacientes depressivos.'",
        "3. Comparar com o método científico: Ensaios clínicos exigem milhares de pacientes com grupo controle para tirar conclusões.",
        "4. Concluir: Trata-se da clássica falácia da generalização apressada."
      ],
      coreConcept: "Experiências pessoais isoladas jamais possuem valor estatístico suficiente para justificar leis científicas gerais.",
      trapWarning: "No ENEM, fique alerta para generalizações que usam pronomes e advérbios totalizantes como 'todos', 'nenhum', 'sempre', 'nunca' a partir de casos individuais."
    },
    tags: ["generalizacao-apressada", "falacias", "metodologia", "farmacologia", "retorica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-012",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Argumentação e Retórica",
    subtopic: "Operadores de Argumentação em Escala: Até, Mesmo, Inclusive",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha contra o etarismo no mercado de trabalho médico e acadêmico, o cartaz exibe a seguinte mensagem:\n'A discriminação por idade atinge cirurgiões veteranos, pesquisadores seniores e até mesmo laureados internacionais de medicina que ainda produzem no auge de sua clareza intelectual. O talento humano não caduca com as primaveras.'",
      source: "Conselho Federal de Medicina e Direitos Humanos, 2026."
    },
    prompt: "No texto da campanha, a locução adverbial 'até mesmo' funciona como um operador argumentativo que cumpre o papel de",
    options: [
      {
        id: "a",
        text: "introduzir o elemento mais forte e inesperado em uma escala argumentativa gradativa, evidenciando a gravidade e o alcance irrestrito da discriminação etária.",
        isCorrect: true,
        distractorRationale: "Correto: Conforme a semântica argumentativa de Ducrot, operadores de escala como 'até', 'mesmo' ou 'inclusive' assinalam o argumento no topo da força persuasiva da escala. Se a discriminação atinge 'até mesmo' os cientistas mais prestigiados e premiados do planeta, conclui-se com força máxima que ninguém está a salvo da prática nociva."
      },
      {
        id: "b",
        text: "restringir a discriminação exclusivamente àqueles profissionais que conquistaram prêmios internacionais.",
        isCorrect: false,
        distractorRationale: "O operador não restringe, mas amplia a escala; antes dele são citados cirurgiões veteranos e pesquisadores seniores."
      },
      {
        id: "c",
        text: "sinalizar uma concessão que anula a necessidade de combater o preconceito contra os médicos mais jovens.",
        isCorrect: false,
        distractorRationale: "Não há concessão nem anulação do combate ao preconceito."
      },
      {
        id: "d",
        text: "expressar uma dúvida metódica quanto à existência real do etarismo na sociedade contemporânea.",
        isCorrect: false,
        distractorRationale: "O texto afirma a discriminação como fato indiscutível e grave."
      },
      {
        id: "e",
        text: "estabelecer uma relação de oposição adversativa idêntica à da conjunção 'contudo'.",
        isCorrect: false,
        distractorRationale: "'Até mesmo' é um operador de inclusão e gradação no topo da escala, não um conectivo de adversidade."
      }
    ],
    detailedExplanation: {
      summary: "Operadores escalares (até, até mesmo, inclusive) situam o argumento no ponto culminante da evidência persuasiva, mostrando que o fenômeno atinge inclusive os casos mais protegidos.",
      stepByStep: [
        "1. Observar a progressão: cirurgiões veteranos → pesquisadores seniores → 'até mesmo' laureados internacionais.",
        "2. Identificar a função de 'até mesmo': Introduz o ápice da escala de prestígio.",
        "3. Concluir: Se atinge até os indivíduos mais condecorados, a denúncia ganha peso máximo e indiscutível."
      ],
      coreConcept: "Operadores como 'até mesmo' servem para arrematar uma gradação ascendente, tornando a tese inatacável pelo leitor.",
      trapWarning: "Atenção: Operadores argumentativos não apenas conectam orações; eles orientam o leitor quanto ao peso relativo de cada informação."
    },
    tags: ["operadores-argumentativos", "escala-argumentativa", "retorica", "linguagem", "discurso"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-013",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia da Petição de Princípio (Petitio Principii / Raciocínio Circular)",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma audiência pública sobre a eficácia de determinado programa de triagem genética, um gestor defendeu sua continuidade com a seguinte declaração:\n'O programa de triagem genética da nossa instituição é comprovadamente o mais infalível e benéfico de todo o país. Sabemos que ele é totalmente infalível e benéfico porque nenhuma outra instituição consegue atingir o grau de perfeição e utilidade que o nosso programa possui.'",
      source: "Audiência da Comissão de Bioética e Avaliação em Saúde, 2026."
    },
    prompt: "A falha lógica que compromete a solidez argumentativa da fala do gestor é classificada como petição de princípio (raciocínio circular) porque",
    options: [
      {
        id: "a",
        text: "o locutor ataca pessoalmente os representantes das outras instituições concorrentes.",
        isCorrect: false,
        distractorRationale: "O locutor não agride moralmente ninguém (não é ad hominem)."
      },
      {
        id: "b",
        text: "a premissa que supostamente deveria provar a tese limita-se a reafirmar a própria conclusão que estava sob julgamento, sem apresentar evidências externas independentes.",
        isCorrect: true,
        distractorRationale: "Correto: A petição de princípio (circulus in probando) ocorre quando aquilo que precisa ser provado (que o programa é benéfico e infalível) já é assumido como premissa na justificativa ('porque nenhum atinge essa perfeição e utilidade'). O argumento gira em falso sem trazer dados de sobrevida, custos, sensibilidade de teste ou auditorias externas."
      },
      {
        id: "c",
        text: "o gestor demonstra hesitação ao usar modalizadores de probabilidade que enfraquecem sua assertividade.",
        isCorrect: false,
        distractorRationale: "O gestor foi categórico e arrogante em sua afirmação, sem qualquer hesitação."
      },
      {
        id: "d",
        text: "o argumento baseia-se na compaixão popular para ocultar desvios financeiros.",
        isCorrect: false,
        distractorRationale: "Não houve apelo à emoção ou comiseração."
      },
      {
        id: "e",
        text: "a conclusão decorre necessariamente de axiomas matemáticos rigorosamente demonstrados.",
        isCorrect: false,
        distractorRationale: "O argumento é falacioso e circular, longe de uma demonstração axiológica."
      }
    ],
    detailedExplanation: {
      summary: "Na petição de princípio, a conclusão é justificada por ela mesma disfarçada de premissa. Provar X dizendo que X é verdadeiro porque X é excelente é um círculo vicioso vazio.",
      stepByStep: [
        "1. Tese a provar: O programa é infalível e benéfico.",
        "2. Justificativa dada: Porque nenhum programa atinge esse grau de perfeição e utilidade.",
        "3. Identificar o vício: Perfeição/utilidade é sinônimo de infalível/benéfico. O argumento não saiu do lugar.",
        "4. Concluir: Trata-se de uma petição de princípio (circularidade)."
      ],
      coreConcept: "A boa argumentação exige que a evidência seja externa e independente daquilo que se quer demonstrar.",
      trapWarning: "Na redação do ENEM, cuidado para não cair em tautologias do tipo: 'A violência urbana é ruim porque faz mal aos cidadãos das cidades'."
    },
    tags: ["peticao-de-principio", "falacias", "raciocinio-circular", "bioetica", "retorica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-014",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "Argumentação por Analogia e Seus Limites Estruturais",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma conferência sobre bioética e inteligência artificial na medicina de precisão, um pesquisador utilizou a seguinte analogia:\n'Assim como o piloto automático em uma aeronave moderna realiza cálculos balísticos contínuos, corrige a rota em turbulências e aterrissa com estabilidade, mas sob a fiscalização atenta e decisão soberana do comandante humano na cabine, os algoritmos diagnósticos de ressonância magnética devem operar como sistemas copilotos que processam terabytes de imagens, cabendo exclusivamente ao médico radiologista humano a palavra final e a assinatura do laudo clínico.'",
      source: "Seminário Internacional de Ética Algorítmica e Inteligência Médica, 2026."
    },
    prompt: "A eficácia persuasiva do argumento por analogia reside no fato de que o locutor",
    options: [
      {
        id: "a",
        text: "transfere as relações de confiabilidade e subordinação já bem estabelecidas em um domínio técnico conhecido (aviação comercial) para esclarecer e defender a regulação de uma tecnologia emergente em outro campo (medicina diagnóstica).",
        isCorrect: true,
        distractorRationale: "Correto: O argumento por analogia apoia-se em uma correspondência estrutural de relações (A está para B assim como C está para D). Ao comparar o algoritmo ao piloto automático e o médico ao comandante da cabine, o autor facilita a aceitação de sua tese: automação avançada combinada com supervisão humana soberana é segura e necessária."
      },
      {
        id: "b",
        text: "comprova matematicamente que o índice de erros de um software radiológico é idêntico à taxa de acidentes de jatos comerciais.",
        isCorrect: false,
        distractorRationale: "A analogia estabelece relações conceituais e éticas, e não identidades numéricas de sinistros."
      },
      {
        id: "c",
        text: "substitui a deliberação médica por sensores barométricos e de altitude.",
        isCorrect: false,
        distractorRationale: "O texto não defende instrumentos de aviação na medicina, mas usa a relação hierárquica como modelo ético."
      },
      {
        id: "d",
        text: "incorre na falácia do espantalho ao ridicularizar o trabalho dos engenheiros de inteligência artificial.",
        isCorrect: false,
        distractorRationale: "O autor não ridiculariza ninguém; elogia os sistemas como processadores de terabytes."
      },
      {
        id: "e",
        text: "afirma que os médicos devem obter licença de voo comercial para assinar laudos hospitalares.",
        isCorrect: false,
        distractorRationale: "Interpretação literal absurda de uma figura retórica analógica."
      }
    ],
    detailedExplanation: {
      summary: "A analogia argumentativa transporta a legitimidade e a clareza de um sistema já consolidado na sociedade para balizar a regulação de um fenômeno novo e controverso.",
      stepByStep: [
        "1. Domínio fonte: Piloto automático na aviação auxilia, mas o piloto humano mantém o comando final.",
        "2. Domínio alvo: Algoritmo de IA na medicina processa imagens, mas o médico tem o laudo soberano.",
        "3. Função retórica: Tornar evidente que a supervisão humana garante segurança ética em sistemas autônomos.",
        "4. Concluir: Trata-se de um uso virtuoso do argumento por analogia."
      ],
      coreConcept: "Uma boa analogia apoia-se em similaridades estruturais essenciais e não em identidades superficiais.",
      trapWarning: "No ENEM, cuidado com falsas analogias: uma analogia torna-se falaciosa quando os pontos de divergência entre os dois casos são maiores que as semelhanças."
    },
    tags: ["analogia", "argumentacao", "inteligencia-artificial", "bioetica", "retorica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-015",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia da Ladeira Escorregadia (Slippery Slope / Efeito Bola de Neve)",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma sessão de conselho universitário que debatia a permissão para que estudantes utilizassem ferramentas de processamento de texto com inteligência artificial para correção ortográfica básica de monografias, um conselheiro se manifestou:\n'Se permitirmos que os alunos usem softwares para conferir a pontuação e concordância de seus textos hoje, amanhã eles não lerão mais nenhum livro. Em dois anos, todos os trabalhos acadêmicos serão escritos 100% por robôs sem intervenção humana. Em cinco anos, os próprios professores serão sumariamente demitidos e as universidades fecharão as portas, mergulhando toda a civilização em uma nova era de trevas analfabetas e selvageria intelectual. Portanto, devemos proibir qualquer corretor de vírgulas digital!'",
      source: "Debates Acadêmicos sobre Tecnologia e Educação Superior, 2026."
    },
    prompt: "O discurso do conselheiro articula uma falácia da ladeira escorregadia (slippery slope) porque",
    options: [
      {
        id: "a",
        text: "apresenta dados demográficos que comprovam a diminuição do número de universitários no país.",
        isCorrect: false,
        distractorRationale: "O texto não apresenta dados demográficos empíricos."
      },
      {
        id: "b",
        text: "constrói uma cadeia de eventos catastróficos encadeados de forma determinista e inevitável a partir de uma concessão moderada inicial, sem apresentar evidências plausíveis para os elos intermediários.",
        isCorrect: true,
        distractorRationale: "Correto: A ladeira escorregadia assume que permitir um primeiro passo inócuo ou moderado (corretor ortográfico digital) desencadeará fatalmente uma sequência incontrolável de desgraças sucessivas culminando no apocalipse cultural (fim das universidades e trevas analfabetas), ignorando a possibilidade de regulação e controle ético em cada etapa."
      },
      {
        id: "c",
        text: "sustenta a argumentação no prestígio de linguistas clássicos da gramática normativa.",
        isCorrect: false,
        distractorRationale: "O orador não cita nenhum linguista ou gramático de renome."
      },
      {
        id: "d",
        text: "utiliza o método dialético hegeliano para sintetizar teses contraditórias.",
        isCorrect: false,
        distractorRationale: "O discurso é uma hipérbole alarmista desprovida de dialética hegeliana."
      },
      {
        id: "e",
        text: "desqualifica o caráter dos alunos acusando-os de enriquecimento ilícito.",
        isCorrect: false,
        distractorRationale: "Não houve acusação de enriquecimento ilícito."
      }
    ],
    detailedExplanation: {
      summary: "A ladeira escorregadia exagera as consequências futuras de uma decisão moderada, alegando que o primeiro passo levará inescapavelmente ao colapso total.",
      stepByStep: [
        "1. Ponto de partida: Permitir correção ortográfica digital de textos.",
        "2. Encadeamento apocalíptico: Ninguém mais lê → robôs escrevem tudo → professores demitidos → fim das universidades → era de trevas.",
        "3. Falha lógica: Cada elo depende de saltos especulativos infundados.",
        "4. Concluir: Trata-se da típica falácia da ladeira escorregadia."
      ],
      coreConcept: "A advertência contra riscos reais é legítima, mas afirmar determinismo apocalíptico inevitável sem respaldo empírico é falacioso.",
      trapWarning: "No debate público, identifique a ladeira escorregadia quando o autor usa o padrão: 'se aceitarmos A hoje, amanhã acontecerá Z (o pior desastre imaginável)'."
    },
    tags: ["ladeira-escorregadia", "falacias", "retorica", "educacao", "tecnologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-016",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "Estratégia de Contra-Argumentação e Refutação Antecipada",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um artigo defendendo a obrigatoriedade da rotulagem frontal de advertência com octógonos pretos para alimentos com alto teor de sódio e gorduras saturadas, a sanitarista escreve:\n'Poderiam os setores da indústria de ultraprocessados alegar que tais selos alarmistas cerceiam a autonomia individual de escolha do consumidor no supermercado. No entanto, tal objeção não se sustenta: a verdadeira liberdade de escolha pressupõe informação clara e compreensível, algo historicamente inviabilizado pelas letras minúsculas e tabelas crípticas impressas no verso dos pacotes. O selo frontal não proíbe a compra; ele apenas ilumina o conteúdo para que o cidadão decida conscientemente o que ingere.'",
      source: "Revista de Políticas Públicas e Nutrição Baseada em Evidências, 2026."
    },
    prompt: "No excerto, a estratégia retórica empregada pela sanitarista fundamenta-se na técnica da contra-argumentação (ou prolepse), que se caracteriza por",
    options: [
      {
        id: "a",
        text: "conceder razão total aos adversários corporativos e desistir da implementação dos octógonos pretos.",
        isCorrect: false,
        distractorRationale: "A autora não concede razão aos adversários; pelo contrário, desmantela o argumento deles."
      },
      {
        id: "b",
        text: "antecipar a provável objeção do oponente ('cerceamento da autonomia') para refutá-la de antemão com bases conceituais sólidas ('liberdade exige informação clara'), blindando o texto contra contra-ataques.",
        isCorrect: true,
        distractorRationale: "Correto: A refutação antecipada (prolepse ou antecipação de objeção) é uma das estratégias mais sofisticadas da dissertação argumentativa: o autor traz para o seu próprio texto a tese do oponente apenas para demonstrar sua inconsistência, fortalecendo a autoridade e a solidez do projeto de texto."
      },
      {
        id: "c",
        text: "desviar a discussão nutricional para um ataque pessoal ao presidente de uma fábrica alimentícia específica.",
        isCorrect: false,
        distractorRationale: "Não há ataque ad hominem nem personalista no texto."
      },
      {
        id: "d",
        text: "utilizar um operador concessivo que transfere o peso da argumentação para os interesses industriais.",
        isCorrect: false,
        distractorRationale: "O operador adversativo ('No entanto') redireciona o peso para a tese sanitária da autora."
      },
      {
        id: "e",
        text: "afirmar que tabelas nutricionais impressas no verso são ilegais e devem ser suprimidas por completo.",
        isCorrect: false,
        distractorRationale: "A autora critica a falta de clareza das tabelas crípticas, mas defende o selo frontal complementar."
      }
    ],
    detailedExplanation: {
      summary: "A contra-argumentação antecipada desarma os oponentes: ao reconhecer o contraponto antes que ele seja proferido e refutá-lo imediatamente, o autor demonstra domínio completo do debate.",
      stepByStep: [
        "1. Antecipação da objeção: A indústria dirá que o selo fere a liberdade de escolha do consumidor.",
        "2. Quebra da objeção: A verdadeira liberdade de escolha só existe se o consumidor compreender o que compra.",
        "3. Reafirmação da tese: O selo frontal garante essa compreensão sem proibir nada.",
        "4. Concluir: A autora realizou uma contra-argumentação exemplar."
      ],
      coreConcept: "A antecipação de contra-argumentos é altamente recomendada na Competência 3 da Redação do ENEM por demonstrar consistência do projeto de texto.",
      trapWarning: "Cuidado: Ao antecipar uma objeção, você DEVE refutá-la logo em seguida com conectivo adversativo forte (no entanto, contudo, todavia); esquecer de refutar fortalece o lado contrário!"
    },
    tags: ["contra-argumentacao", "prolepse", "refutacao", "saude-publica", "redacao-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-017",
    area: "linguagens",
    competence: 7,
    skill: 24,
    topic: "Argumentação e Retórica",
    subtopic: "Intertextualidade Explícita vs. Implícita e Efeitos de Sentido",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma crônica contemporânea sobre a desinformação em massa na era digital e o isolamento em bolhas de redes sociais, o autor escreve:\n'Fechados em seus algoritmos como em uma caverna escura, os internautas contemplam apenas sombras projetadas nas telas brilhantes de seus celulares e juram de pés juntos que aquelas silhuetas trêmulas são a única verdade do cosmos. Se alguém tenta puxá-los para fora, para a luz ofuscante dos fatos científicos, é repelido aos gritos como um traidor da comunidade.'",
      source: "Crônicas do Século Hiperconectado, 2026."
    },
    prompt: "O fragmento constrói seu poder argumentativo por meio de uma intertextualidade implícita que dialoga diretamente com",
    options: [
      {
        id: "a",
        text: "o Mito da Caverna de Platão, transpondo a metáfora da ilusão das sombras versus a verdade da luz para criticar a alienação dos usuários nas bolhas digitais.",
        isCorrect: true,
        distractorRationale: "Correto: Trata-se de uma intertextualidade implícita (alusão filosófica) à célebre alegoria da caverna de Platão (A República). As correntes e a caverna tornam-se as bolhas algorítmicas, as sombras nas paredes são as fake news nas telas de smartphones, e a resistência a sair para a luz do sol representa a negação da ciência objetiva."
      },
      {
        id: "b",
        text: "o romance naturalista 'O Cortiço' de Aluísio Azevedo, enfatizando o determinismo biológico do meio sobre os hábitos de higiene.",
        isCorrect: false,
        distractorRationale: "O foco não é a tese zoliana/naturalista de cortiço ou zoomorfização, mas a ilusão das sombras e da luz platônica."
      },
      {
        id: "c",
        text: "o poema épico 'Os Lusíadas' de Luís de Camões, narrando viagens marítimas perigosas em mares tempestuosos.",
        isCorrect: false,
        distractorRationale: "Não há elementos épicos de navegação camoniana no texto."
      },
      {
        id: "d",
        text: "a obra teatral 'O Auto da Barca do Inferno' de Gil Vicente, julgando os pecados capitais de figuras da nobreza medieval.",
        isCorrect: false,
        distractorRationale: "O texto não aborda julgamentos morais religiosos do teatro vicentino."
      },
      {
        id: "e",
        text: "o Manifesto Antropofágico de Oswald de Andrade, defendendo a deglutição estética das técnicas estrangeiras.",
        isCorrect: false,
        distractorRationale: "Não há vocabulário ou temática antropofágica modernista de 1928."
      }
    ],
    detailedExplanation: {
      summary: "A alusão intertextual ao Mito da Caverna de Platão resgata um clássico do pensamento ocidental para desvelar a alienação e o autoengano nas redes sociais modernas.",
      stepByStep: [
        "1. Identificar os elementos metafóricos: Caverna escura, sombras projetadas, telas, luz ofuscante dos fatos, rejeição de quem quer libertar os prisioneiros.",
        "2. Identificar a matriz filosófica: Livro VII de A República de Platão (Alegoria da Caverna).",
        "3. Analisar a transposição: Os prisioneiros são os internautas presos em bolhas de algoritmos.",
        "4. Concluir: Trata-se de uma intertextualidade implícita altamente persuasiva e densa."
      ],
      coreConcept: "A intertextualidade implícita enriquece a argumentação ao convocar repertórios culturais universais sem necessidade de citações nominais literais.",
      trapWarning: "No ENEM, alusões clássicas (Platão, Aristóteles, Shakespeare, Machado de Assis) são frequentes em crônicas e artigos de opinião para julgar temas modernos."
    },
    tags: ["intertextualidade", "mito-da-caverna", "platao", "filosofia", "redes-sociais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-018",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia do Apelo à Tradição (Argumentum ad Antiquitatem)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma reunião de cúpula de um hospital tradicional, debatia-se a substituição do prontuário médico em papel manuscrito por um sistema integrado de prontuário eletrônico interoperável com certificação digital. Um cirurgião veterano manifestou sua contrariedade:\n'Há mais de noventa anos este hospital opera preenchendo fichas clínicas em papel com caneta-tinteiro. Nossos fundadores sempre fizeram dessa maneira, e assim salvamos milhares de vidas ao longo de quase um século. Se esse método foi utilizado durante gerações sem nunca ser alterado, é a prova irrefutável de que ele é o melhor método possível e que qualquer sistema digital é desnecessário e prejudicial.'",
      source: "Gestão em Saúde e Inovação Hospitalar, 2026."
    },
    prompt: "O cirurgião constrói sua defesa com base na falácia do apelo à tradição (argumentum ad antiquitatem) ao",
    options: [
      {
        id: "a",
        text: "pressupor que uma prática é necessariamente correta, superior ou insubstituível unicamente pelo fato de ser antiga e repetida há muitas gerações, sem avaliar sua eficácia frente a novas tecnologias.",
        isCorrect: true,
        distractorRationale: "Correto: A falácia do apelo à tradição (ad antiquitatem) sustenta que a longevidade temporal de um hábito valida sua superioridade técnica. O fato de algo ser feito há 90 anos não significa que seja imune a erros de legibilidade, perdas de fichas ou ineficiência quando comparado à interoperabilidade digital contemporânea."
      },
      {
        id: "b",
        text: "apresentar um estudo quantitativo demonstrando o aumento de infecções hospitalares associado a computadores.",
        isCorrect: false,
        distractorRationale: "O autor não apresenta nenhum estudo empírico."
      },
      {
        id: "c",
        text: "atacar a reputação profissional dos desenvolvedores do software hospitalar.",
        isCorrect: false,
        distractorRationale: "Não houve ataque ad hominem aos desenvolvedores."
      },
      {
        id: "d",
        text: "provar que o papel manuscrito possui maior criptografia matemática que bancos de dados modernos.",
        isCorrect: false,
        distractorRationale: "O cirurgião não discute criptografia matemática."
      },
      {
        id: "e",
        text: "invocar uma autoridade reconhecida na área de cibersegurança internacional.",
        isCorrect: false,
        distractorRationale: "Ele invoca apenas a tradição dos fundadores da instituição."
      }
    ],
    detailedExplanation: {
      summary: "A antiguidade de um hábito não é prova de sua excelência técnica. Justificar que algo deve continuar porque 'sempre foi feito assim' é o núcleo do argumento ad antiquitatem.",
      stepByStep: [
        "1. Identificar o fundamento da tese: 'Há 90 anos sempre fizemos assim'.",
        "2. Identificar a conclusão do médico: Logo, este é o melhor método e não deve mudar.",
        "3. Revelar o erro lógico: O tempo decorrido não mede a eficiência operacional nem a segurança do paciente em comparação a prontuários eletrônicos.",
        "4. Concluir: Apelo ilegítimo à tradição."
      ],
      coreConcept: "A tradição tem valor cultural e afetivo, mas não constitui prova técnica de eficácia médica ou administrativa.",
      trapWarning: "Desconfie de argumentos em debates institucionais que usam 'sempre foi feito assim' ou 'é a tradição dos fundadores' para barrar melhorias fundamentadas em evidências."
    },
    tags: ["apelo-a-tradicao", "falacias", "gestao-hospitalar", "inovacao", "retorica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-019",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Argumentação e Retórica",
    subtopic: "Recursos de Ironia e Antífrase na Crítica Social",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma coluna de humor ácido e crítica política sobre o corte de verbas para a pesquisa científica e bolsas de pós-graduação, o autor escreve:\n'Brilhante decisão dos nossos governantes! Nada como cortar verbas de laboratórios de virologia e pagar bolsas miseráveis aos nossos jovens cientistas para acelerar o desenvolvimento nacional. Certamente, privar os laboratórios de reagentes químicos básicos e obrigar nossos melhores doutores a emigrar para o exterior é o caminho mais seguro e genial para transformar o Brasil em uma superpotência biotecnológica do século XXI. Parabéns aos envolvidos pela visão de futuro!'",
      source: "Revista de Sátira e Crítica Social, 2026."
    },
    prompt: "No texto, o efeito persuasivo da crítica política é construído principalmente pela figura da ironia (antífrase), que consiste em",
    options: [
      {
        id: "a",
        text: "exaltar de modo literal e sincero a competência administrativa do Ministério da Ciência e Tecnologia.",
        isCorrect: false,
        distractorRationale: "O autor não está elogiando de modo sincero; ele quer expressar exatamente o oposto."
      },
      {
        id: "b",
        text: "afirmar formalmente o oposto daquilo que se deseja comunicar ('brilhante decisão', 'visão de futuro'), fazendo com que o leitor atento perceba a incongruência e decodifique a reprovação contundente das medidas adotadas.",
        isCorrect: true,
        distractorRationale: "Correto: A ironia em sua modalidade de antífrase consiste em dizer o contrário do que se pensa para evidenciar o absurdo da situação. Ao classificar os cortes destrutivos na ciência como 'brilhante decisão' e 'caminho genial', o enunciador gera um contraste flagrante entre a literalidade das palavras elogiosas e a desolação fática dos cortes, desmoralizando a política pública."
      },
      {
        id: "c",
        text: "empregar termos técnicos de virologia molecular para confundir os leitores desavisados.",
        isCorrect: false,
        distractorRationale: "O vocabulário é acessível e voltado ao público amplo, sem termos ultraespecíficos herméticos."
      },
      {
        id: "d",
        text: "construir uma apologia fervorosa da fuga de cérebros como estratégia diplomática oficial.",
        isCorrect: false,
        distractorRationale: "A fuga de cérebros é denunciada como uma tragédia nacional gerada pelo desmonte das bolsas."
      },
      {
        id: "e",
        text: "utilizar a eufemização para suavizar a dor dos pesquisadores prejudicados pelos cortes.",
        isCorrect: false,
        distractorRationale: "Não há eufemismo (suavização); há sarcasmo e hipérbole crítica."
      }
    ],
    detailedExplanation: {
      summary: "A ironia diz o oposto do que se pensa para fazer sobressair o disparate da realidade retratada: elogiar com exagero aquilo que é deplorável desmonta o discurso oficial.",
      stepByStep: [
        "1. Literalidade: 'Brilhante decisão', 'caminho genial', 'parabéns pela visão de futuro'.",
        "2. Realidade exposta: Corte de bolsas, laboratórios sem reagentes, expulsão de cientistas para fora do país.",
        "3. Incongruência: Nenhum país se torna potência destruindo sua própria ciência.",
        "4. Concluir: O contraste revela a antífrase irônica como arma de protesto político."
      ],
      coreConcept: "A ironia é polifônica por excelência: ela sobrepõe a voz aparente do bajulador à voz profunda do crítico indignado.",
      trapWarning: "No ENEM, interpretar textos irônicos ao pé da letra é uma das armadilhas mais punidas pela TRI em Linguagens."
    },
    tags: ["ironia", "antifrase", "satira", "politica-cientifica", "figuras-de-linguagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-020",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "Conectivos Consecutivos e Conclusivos na Articulação Textual",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A adesão rigorosa aos protocolos de assepsia cirúrgica reduziu a incidência de infecções do sítio operatório em 78% dos hospitais monitorados. Ademais, o monitoramento contínuo da resistência bacteriana permitiu o uso racional de antibióticos de amplo espectro. ______________, a comissão de controle hospitalar homologou a diretriz como padrão assistencial obrigatório para todas as unidades cirúrgicas do estado.",
      source: "Manual de Boas Práticas Cirúrgicas e Controle de Infecção, 2026."
    },
    prompt: "Para que o período mantenha a coerência argumentativa e explicite a relação lógica adequada de encerramento dedutivo entre os dados precedentes e a decisão da comissão, a lacuna deve ser preenchida por",
    options: [
      {
        id: "a",
        text: "Embora,",
        isCorrect: false,
        distractorRationale: "'Embora' introduz concessão e subordinada adverbial, incompatível com o fechamento conclusivo do período."
      },
      {
        id: "b",
        text: "Contudo,",
        isCorrect: false,
        distractorRationale: "'Contudo' introduz adversidade e oposição, mas as premissas corroboram e apoiam a decisão da comissão."
      },
      {
        id: "c",
        text: "Por conseguinte,",
        isCorrect: true,
        distractorRationale: "Correto: A locução conjuntiva 'Por conseguinte' (ou 'Portanto', 'Logo', 'Em decorrência disso') possui valor semântico conclusivo/consecutivo, articulando as premissas de sucesso dos protocolos à decisão final que decorre logicamente delas como coroamento do raciocínio."
      },
      {
        id: "d",
        text: "A fim de que,",
        isCorrect: false,
        distractorRationale: "'A fim de que' expressa finalidade com verbo no subjuntivo, não conclusão de fatos já consumados."
      },
      {
        id: "e",
        text: "À medida que,",
        isCorrect: false,
        distractorRationale: "'À medida que' denota proporção concomitante, e não conclusão lógica dedutiva."
      }
    ],
    detailedExplanation: {
      summary: "Conectivos conclusivos (portanto, por conseguinte, dessarte) selam a consequência inevitável que emana das evidências anteriormente expostas.",
      stepByStep: [
        "1. Analisar as orações anteriores: Infecções caíram 78% (fato positivo 1) e uso de antibióticos tornou-se racional (fato positivo 2).",
        "2. Analisar a oração da lacuna: A comissão aprovou a diretriz como padrão obrigatório.",
        "3. Identificar o nexo: A aprovação é a consequência/conclusão natural dos sucessos anteriores.",
        "4. Selecionar o conectivo: 'Por conseguinte' expressa com precisão a relação conclusiva."
      ],
      coreConcept: "A coesão conclusiva é fundamental no início do parágrafo de proposta de intervenção (D3/D4 ou Conclusão) da Redação do ENEM.",
      trapWarning: "Nunca use conectivos adversativos (porém, contudo) quando a ideia subsequente for uma consequência positiva e coerente da anterior."
    },
    tags: ["coesao", "conectivos", "conclusivos", "articulacao-textual", "redacao-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-021",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia do Apelo à Emoção (Argumentum ad Passiones)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma audiência regulatória sobre a proibição de um aditivo alimentar tóxico já comprovadamente associado ao aumento de mutagênese celular em animais de laboratório, o advogado da fabricante discursou em tom lacrimoso:\n'Senhores conselheiros, pensem nos nossos operários! Se vocês aprovarem o banimento desta substância química, dezenas de operários da fábrica perderão seus empregos às vésperas do Natal. Vossas Excelências querem mesmo ser os responsáveis por fazer criancinhas chorarem de fome ao verem seus pais desempregados sem ter um prato de comida na noite natalina? Pensem no sofrimento dessas famílias antes de assinar qualquer parecer técnico!'",
      source: "Tribunais Administrativos e Regulação Sanitária, 2026."
    },
    prompt: "A intervenção do advogado apoia-se na falácia do apelo à emoção (argumentum ad misericordiam) na medida em que",
    options: [
      {
        id: "a",
        text: "apresenta laudos toxicológicos conclusivos comprovando a inocuidade biológica do aditivo.",
        isCorrect: false,
        distractorRationale: "O advogado não apresenta nenhum laudo biológico de inocuidade."
      },
      {
        id: "b",
        text: "desloca a discussão dos riscos oncológicos e toxicológicos da substância para a comoção emocional em torno do drama social do desemprego, chantageando afetivamente os julgadores para paralisar a decisão técnica.",
        isCorrect: true,
        distractorRationale: "Correto: A falácia do apelo à piedade (ad misericordiam/ad passiones) tenta vencer a deliberação racional apelando ao sentimento de culpa, compaixão ou medo dos interlocutores ('criancinhas chorando no Natal'), em vez de comprovar a segurança científica ou refutar a toxicidade mutagênica do composto químico."
      },
      {
        id: "c",
        text: "propõe uma mediação pacífica baseada em indenizações financeiras às famílias afetadas por intoxicação alimentar.",
        isCorrect: false,
        distractorRationale: "O advogado não propõe indenizações aos intoxicados."
      },
      {
        id: "d",
        text: "apoia-se na jurisprudência consagrada da Organização Mundial da Saúde.",
        isCorrect: false,
        distractorRationale: "Ele não menciona a OMS nem jurisprudência sanitária."
      },
      {
        id: "e",
        text: "demonstra a ausência de nexo causal entre o aditivo e as neoplasias por meio de um ensaio duplo-cego.",
        isCorrect: false,
        distractorRationale: "Não há menção a ensaio duplo-cego na fala apelativa do advogado."
      }
    ],
    detailedExplanation: {
      summary: "O apelo à piedade substitui o debate racional e técnico pelo apelo a sentimentos de culpa ou comiseração, chantageando os julgadores para evitar a fiscalização.",
      stepByStep: [
        "1. Tema técnico da sessão: Toxicidade e mutagênese celular de um aditivo químico alimentar.",
        "2. Argumento do advogado: Criancinhas chorando de fome no Natal por causa de pais desempregados.",
        "3. Falha lógica: A dor social do desemprego é real, mas não anula a toxicidade química do aditivo para toda a população consumidora.",
        "4. Concluir: Trata-se de chantagem emocional falaciosa (ad misericordiam)."
      ],
      coreConcept: "Decisões regulatórias de saúde pública devem pautar-se pela segurança coletiva e na evidência toxicológica, e não em comoções circunstanciais.",
      trapWarning: "No ENEM, cuidado com textos em que a comoção melodramática encobre a ausência deliberada de evidências materiais."
    },
    tags: ["apelo-a-emocao", "falacias", "ad-misericordiam", "regulacao-sanitaria", "retorica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-022",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia da Evidência Anedótica vs. Inferência Populacional",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um fórum de internet sobre prevenção cardiovascular e longevidade, um usuário comentou:\n'Não acredito em nada do que os cardiologistas falam sobre os malefícios do tabagismo e do consumo excessivo de gorduras saturadas. Meu avô fumou três maços de cigarro de palha por dia e comia toucinho frito em todas as refeições, e faleceu lúcido aos 98 anos atropelado por uma charrete. Em compensação, conheci um maratonista vegetariano que teve um infarto aos 28 anos. Logo, fica evidente que fumar e comer toucinho faz viver quase cem anos, e praticar esportes mata cedo.'",
      source: "Estudos de Letramento Científico e Epidemiologia Social, 2026."
    },
    prompt: "O comentário do usuário comete a falácia da evidência anedótica porque",
    options: [
      {
        id: "a",
        text: "utiliza dois casos biográficos atípicos e extremos para invalidar leis epidemiológicas populacionais consolidadas em milhões de observações estatísticas.",
        isCorrect: true,
        distractorRationale: "Correto: A falácia da evidência anedótica ocorre quando uma narrativa pessoal isolada (o avô que fumava e viveu 98 anos) é usada como se tivesse mais autoridade epistêmica do que estudos de coorte de grande escala que comprovam que o tabagismo reduz a expectativa de vida em média em 10 anos. O fato de existirem exceções genéticas ou eventos raros não invalida o risco estatístico populacional."
      },
      {
        id: "b",
        text: "apresenta um silogismo disjuntivo cujas premissas contradizem os axiomas da geometria euclidiana.",
        isCorrect: false,
        distractorRationale: "Não há relação com geometria euclidiana."
      },
      {
        id: "c",
        text: "utiliza argumentos de autoridade retirados das maiores revistas de cardiologia do mundo.",
        isCorrect: false,
        distractorRationale: "O autor rejeita expressamente os cardiologistas e revistas científicas."
      },
      {
        id: "d",
        text: "recorre à figura de linguagem da prosopopeia ao personificar o toucinho frito.",
        isCorrect: false,
        distractorRationale: "Não há prosopopeia ou personificação no relato."
      },
      {
        id: "e",
        text: "defende uma hipótese comprovada pela moderna medicina ortomolecular.",
        isCorrect: false,
        distractorRationale: "Fumar três maços de cigarro ao dia comprovadamente causa neoplasias e eventos ateroscleróticos graves."
      }
    ],
    detailedExplanation: {
      summary: "Histórias pessoais (anedotas) são vulneráveis a viés de sobrevivência e flutuações estocásticas: uma exceção não destrói uma lei estatística de risco relativo.",
      stepByStep: [
        "1. Caso do avô: Fumou e viveu 98 anos (exceção biológica / viés de sobrevivência).",
        "2. Caso do maratonista: Jovem que infartou (evento cardiovascular raro / possível anomalia congênita).",
        "3. Conclusão dele: Fumar faz viver muito e esportes matam cedo.",
        "4. Concluir: O internauta ignorou a bioestatística populacional e cometeu a falácia anedótica."
      ],
      coreConcept: "A epidemiologia opera com riscos relativos populacionais: fumar não garante morte imediata de todos, mas eleva em mais de 20 vezes a chance de câncer de pulmão.",
      trapWarning: "No ENEM, essa questão é clássica na interface entre Linguagens e Ciências da Natureza: aprender a separar o relato anedótico do dado epidemiológico consistente."
    },
    tags: ["evidencia-anedotica", "falacias", "epidemiologia", "metodo-cientifico", "interpretacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-023",
    area: "linguagens",
    competence: 7,
    skill: 24,
    topic: "Argumentação e Retórica",
    subtopic: "Operadores Discursivos de Reformulação e Retificação",
    difficulty: 2,
    estimatedTimeSeconds: 125,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma palestra sobre saúde planetária e transição energética sustentável, a conferencista afirmou:\n'A substituição de usinas termelétricas a carvão por matrizes eólicas e solares não representa apenas uma vitória na redução das emissões de gases de efeito estufa; ou melhor, ela consubstancia a única estratégia viável para conter o colapso dos ecossistemas hídricos continentais que sustentam a agricultura familiar.'",
      source: "Conferência Brasileira de Transição Energética e Clima, 2026."
    },
    prompt: "No enunciado da conferencista, o operador discursivo 'ou melhor' cumpre a função de",
    options: [
      {
        id: "a",
        text: "retificar e intensificar a asserção anterior, elevando o status da transição energética de mero benefício desejável para imperativo de sobrevivência ecológico.",
        isCorrect: true,
        distractorRationale: "Correto: O operador de reformulação e retificação 'ou melhor' (assim como 'isto é', 'mais precisamente', 'aliás') serve para corrigir ou aprimorar o que foi dito, não para anular, mas para intensificar e conferir precisão máxima à força argumentativa do enunciado anterior."
      },
      {
        id: "b",
        text: "anular completamente a importância da energia solar, defendendo a reativação das termelétricas a carvão.",
        isCorrect: false,
        distractorRationale: "A conferencista exalta a energia limpa e rejeita o carvão mineral."
      },
      {
        id: "c",
        text: "introduzir uma oração subordinada adverbial temporal de concomitância estrita.",
        isCorrect: false,
        distractorRationale: "'Ou melhor' não é conectivo temporal."
      },
      {
        id: "d",
        text: "demonstrar que a agricultura familiar é a responsável direta pela destruição dos ecossistemas hídricos.",
        isCorrect: false,
        distractorRationale: "O texto afirma que os ecossistemas sustentam a agricultura familiar, sendo imprescindíveis para ela."
      },
      {
        id: "e",
        text: "marcar uma hesitação involuntária que invalida o raciocínio ecológico apresentado.",
        isCorrect: false,
        distractorRationale: "A reformulação é um procedimento consciente de refinamento retórico e ênfase argumentativa."
      }
    ],
    detailedExplanation: {
      summary: "Operadores retificadores (ou melhor, mais exatamente, aliás) corrigem a formulação anterior para torná-la mais forte, precisa e impactante para o auditório.",
      stepByStep: [
        "1. Primeira formulação: A transição energética é uma vitória na redução de emissões.",
        "2. Intervenção do operador: 'ou melhor' introduz a segunda formulação.",
        "3. Formulação retificada: Ela é a ÚNICA estratégia viável para evitar o colapso hídrico.",
        "4. Concluir: A reformulação elevou a urgência do argumento ao seu grau máximo."
      ],
      coreConcept: "A autocorreção oratória é uma técnica clássica da retórica para demonstrar rigor de pensamento e clareza de prioridades.",
      trapWarning: "Não confunda retificação argumentativa com contradição: o autor não muda de lado, ele apenas aprimora a mira do argumento."
    },
    tags: ["operadores-discursivos", "reformulacao", "retificacao", "retorica", "meio-ambiente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-024",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Argumentação e Retórica",
    subtopic: "Falácia da Falsa Equivalência (Two Wrongs Make a Right / Tu Quoque)",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Durante uma sabatina, um gestor de saúde pública foi questionado por auditores independentes a respeito de contratos milionários de compra de respiradores superfaturados e sem entrega comprovada realizados durante a sua gestão. Em resposta, ele declarou:\n'Vocês não têm o direito moral de me questionar sobre essas compras de respiradores! O secretário de saúde do estado vizinho também cometeu irregularidades gravíssimas na aquisição de vacinas e ninguém o criticou com tanta veemência. Como o estado vizinho também errou, as minhas decisões contratuais são perfeitamente legítimas e devem ser encerradas sem qualquer auditoria técnica.'",
      source: "Sabatina de Controle Social e Probidade Administrativa, 2026."
    },
    prompt: "A linha argumentativa sustentada pelo gestor incorre na falácia do 'tu quoque' (você também errou / dois erros fazem um acerto) porque",
    options: [
      {
        id: "a",
        text: "apresenta dados contábeis auditados pelo Tribunal de Contas da União demonstrando sua estrita inocência.",
        isCorrect: false,
        distractorRationale: "O gestor não apresenta relatórios contábeis, apenas tenta desviar o foco da acusação."
      },
      {
        id: "b",
        text: "tenta justificar ou absolver sua própria conduta ilícita alegando que outra pessoa cometeu uma infração semelhante, em vez de prestar contas objetivas dos contratos sob sua responsabilidade.",
        isCorrect: true,
        distractorRationale: "Correto: A falácia 'tu quoque' (variante do ad hominem) consiste em tentar invalidar uma acusação ou justificar uma falta pessoal apontando que o acusador ou terceiros também cometeram erros similares. A existência de irregularidades no estado vizinho não torna legítimo o superfaturamento dos respiradores no estado do gestor."
      },
      {
        id: "c",
        text: "invoca o princípio da presunção de inocência estabelecido pela Carta Magna.",
        isCorrect: false,
        distractorRationale: "Ele não invoca o texto constitucional, mas apenas o erro alheio como escudo protetor."
      },
      {
        id: "d",
        text: "utiliza o método socrático de perguntas e respostas para refutar os auditores.",
        isCorrect: false,
        distractorRationale: "Não há maiêutica socrática na declaração evasiva do gestor."
      },
      {
        id: "e",
        text: "sustenta a tese em estudos epidemiológicos comparativos entre os dois estados.",
        isCorrect: false,
        distractorRationale: "Não houve citação de estudos de saúde coletiva."
      }
    ],
    detailedExplanation: {
      summary: "O erro alheio não transforma o seu erro em virtude. Apontar que o vizinho também descumpriu a lei é uma manobra evasiva clássica da falácia tu quoque.",
      stepByStep: [
        "1. Acusação: Respiradores superfaturados e não entregues.",
        "2. Defesa apresentada: O estado vizinho também cometeu fraudes na compra de vacinas.",
        "3. Conclusão do gestor: Logo, minhas compras são legítimas e não devem ser auditadas.",
        "4. Revelar o erro lógico: Dois erros não fazem um acerto; um crime não legitima outro crime.",
        "5. Concluir: Trata-se da falácia 'tu quoque'."
      ],
      coreConcept: "A prestação de contas pública exige demonstração documental de conformidade técnica própria, independentemente da conduta de terceiros.",
      trapWarning: "No debate eleitoral e político, aponte imediatamente o 'tu quoque' quando um debatedor rebate denúncias com: 'mas o partido de vocês fez igual ou pior no passado'."
    },
    tags: ["tu-quoque", "falacias", "etica-publica", "gestao-em-saude", "retorica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-PER-025",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Argumentação e Retórica",
    subtopic: "A Força Conclusiva do Padrão Ouro Dissertativo no ENEM",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o parágrafo conclusivo de uma redação nota 1000 sobre o enfrentamento da mortalidade materna em comunidades vulneráveis:\n'Infere-se, portanto, que a maternidade segura não pode permanecer como um privilégio geográfico e econômico. Para tanto, cabe ao Ministério da Saúde, em parceria interfederativa com as secretarias estaduais e municipais, implementar caravanas ginecológicas permanentes e equipar as Unidades Básicas de Saúde de áreas ribeirinhas e periféricas com ultrassonografia portátil e triagem pré-natal ágil. Essa medida deve ser efetivada mediante o remanejamento orçamentário de emendas parlamentares da saúde, a fim de assegurar o diagnóstico precoce de eclâmpsia e pré-eclâmpsia. Dessa forma, desconstruir-se-á a herança de abandono obstétrico e o Brasil consolidará a equidade preconizada pela Constituição cidadã de 1988.'",
      source: "Banco de Redações Nota 1000 — Edição Canônica, 2026."
    },
    prompt: "O parágrafo atinge a excelência argumentativa preconizada pela Matriz de Referência do ENEM (Competência 5) porque articula de maneira indissociável",
    options: [
      {
        id: "a",
        text: "um conjunto de cinco elementos estruturais completos (agente, ação, meio/modo, efeito/finalidade e detalhamento), retomando a tese inicial e fechando o projeto de texto de modo propositivo e viável.",
        isCorrect: true,
        distractorRationale: "Correto: A proposta de intervenção padrão ouro preenche perfeitamente os 5 elementos da Competência 5:\n1. Agente: 'Ministério da Saúde, em parceria interfederativa com as secretarias estaduais e municipais' (com detalhamento de parceria);\n2. Ação: 'implementar caravanas ginecológicas permanentes e equipar as UBSs com ultrassonografia portátil e triagem pré-natal ágil';\n3. Meio/Modo: 'mediante o remanejamento orçamentário de emendas parlamentares da saúde';\n4. Efeito/Finalidade: 'a fim de assegurar o diagnóstico precoce de eclâmpsia e pré-eclâmpsia';\n5. Detalhamento/Desfecho: 'Dessa forma, desconstruir-se-á a herança de abandono obstétrico e o Brasil consolidará a equidade preconizada pela Constituição cidadã de 1988'."
      },
      {
        id: "b",
        text: "uma oração lírica focada no sofrimento individual das gestantes sem indicar nenhuma instituição pública responsável.",
        isCorrect: false,
        distractorRationale: "A redação é dissertativa-argumentativa objetiva e indica claramente o Ministério da Saúde e as Secretarias como agentes."
      },
      {
        id: "c",
        text: "a sugestão de que os próprios cidadãos comprem seus equipamentos médicos sem intervenção estatal.",
        isCorrect: false,
        distractorRationale: "A proposta é pública e articulada entre esferas federativas do SUS."
      },
      {
        id: "d",
        text: "uma advertência punitiva que prevê a cassação do registro de todos os médicos do país.",
        isCorrect: false,
        distractorRationale: "A proposta é construtiva e estrutural, sem teor punitivo persecutório."
      },
      {
        id: "e",
        text: "a eliminação de conectivos conclusivos para tornar o texto mais poético e fragmentado.",
        isCorrect: false,
        distractorRationale: "O texto emprega conectivos com precisão exemplar ('Infere-se, portanto', 'Para tanto', 'Dessa forma')."
      }
    ],
    detailedExplanation: {
      summary: "A Competência 5 da redação do ENEM exige proposta de intervenção completa com 5 elementos obrigatórios: Agente, Ação, Meio/Modo, Finalidade e Detalhamento, articulados ao projeto de texto.",
      stepByStep: [
        "1. Agente: Quem fará? Ministério da Saúde em parceria com secretarias.",
        "2. Ação: O que fará? Implementar caravanas e equipar UBS com ultrassom portátil.",
        "3. Meio/Modo: Como fará? Mediante remanejamento de emendas parlamentares.",
        "4. Finalidade: Para que fará? A fim de diagnosticar precocemente a pré-eclâmpsia.",
        "5. Detalhamento: Efeito final cidadão com retomada da Constituição de 1988.",
        "6. Concluir: Cumpre 100% da nota 1000 no ENEM."
      ],
      coreConcept: "Os 5 elementos da intervenção garantem 200 pontos na Competência 5 e amarram o fechamento do Projeto de Texto da Competência 3.",
      trapWarning: "Propostas vagas como 'é preciso que o governo conscientize as pessoas' zeram ou pontuam no nível 1 na C5: o ENEM exige agentes concretos e modos executáveis!"
    },
    tags: ["redacao-enem", "competencia5", "proposta-de-intervencao", "padrao-ouro", "saude-materna"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
