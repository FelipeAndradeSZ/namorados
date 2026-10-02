/**
 * BANCO DE QUESTÕES ENEM: Óptica Geométrica, Refração e Lentes Esféricas
 * Área: Ciências da Natureza e suas Tecnologias
 * Disciplina: Física (Óptica Geométrica e Aplicações Biomédicas/Tecnológicas)
 * Quantidade: 25 Questões Inéditas de Alta Fidelidade ENEM (NAT-OPT-001 a NAT-OPT-025)
 * Regra Estrita: ZERO termos de deslocamento turístico.
 */

export const QUESTIONS_OPTICA_GEOMETRICA = [
  {
    id: "NAT-OPT-001",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Reflexão Total e Fibras Ópticas em Endoscopia",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em procedimentos médicos minimamente invasivos, como a videoendoscopia digestiva alta, feixes de luz são guiados pelo interior do corpo humano por meio de cabos flexíveis de fibra óptica. Cada filamento cilíndrico de fibra é composto por um núcleo central transparente de índice de refração $n_{\\text{núcleo}} = 1,60$ envolto por uma casca protetora de índice de refração $n_{\\text{casca}} = 1,28$. Para que os sinais luminosos não vazem pelas paredes laterais ao longo de curvaturas anatômicas, os raios de luz devem incidir na interface núcleo-casca com um ângulo superior ao ângulo limite de reflexão total.",
      source: "HALLIDAY, D.; RESNICK, R.; WALKER, J. Fundamentos de Física: Óptica e Física Moderna. Rio de Janeiro: LTC, 2021 (adaptado)."
    },
    prompt: "Para que ocorra a reflexão total na interface entre o núcleo e a casca desse cabo endoscópico, o seno do ângulo limite de incidência ($\\\\text{sen } \\\\theta_c$) deve ser igual a",
    options: [
      {
        id: "a",
        text: "0,64.",
        isCorrect: false,
        distractorRationale: "Calcula a razão ao quadrado ou divide 1,28 por 2 erroneamente."
      },
      {
        id: "b",
        text: "0,80.",
        isCorrect: true,
        distractorRationale: "Correto: Pela lei de Snell-Descartes aplicada à reflexão interna total, sen θc = n_menor / n_maior = n_casca / n_núcleo = 1,28 / 1,60 = 0,80. Como o raio passa do meio mais refringente para o menos refringente, reflexões completas ocorrem para qualquer ângulo de incidência maior que arcsen(0,80) ≈ 53,13°."
      },
      {
        id: "c",
        text: "1,25.",
        isCorrect: false,
        distractorRationale: "Inverte a fração (1,60 / 1,28 = 1,25), esquecendo que o seno de um ângulo real nunca pode exceder 1."
      },
      {
        id: "d",
        text: "0,50.",
        isCorrect: false,
        distractorRationale: "Supõe arbitrariamente um ângulo limite padrão de 30°, cujo seno é 0,5."
      },
      {
        id: "e",
        text: "0,92.",
        isCorrect: false,
        distractorRationale: "Realiza a subtração direta 1,60 - 1,28 = 0,32 e subtrai de 1, procedimento sem embasamento físico."
      }
    ],
    detailedExplanation: {
      summary: "A reflexão total ocorre quando a luz propaga-se do meio mais refringente para o menos refringente com ângulo de incidência superior ao ângulo limite θc, cujo seno é dado por n_menor / n_maior.",
      stepByStep: [
        "1. Identificar as condições necessárias para a reflexão total: a luz deve estar no meio de maior índice de refração (núcleo) e tentar passar para o meio de menor índice (casca).",
        "2. Aplicar a Lei de Snell no ângulo limite: n_núcleo * sen(θc) = n_casca * sen(90°).",
        "3. Como sen(90°) = 1, obtém-se: sen(θc) = n_casca / n_núcleo.",
        "4. Substituindo os valores fornecidos: sen(θc) = 1,28 / 1,60 = 128 / 160 = 4 / 5 = 0,80."
      ],
      coreConcept: "A reflexão total exige n1 > n2 e ângulo de incidência θ1 > θc, com sen(θc) = n_menor / n_maior.",
      trapWarning: "Cuidado para não inverter a razão na fórmula do ângulo limite. Como o seno não pode ser maior que 1, a divisão é sempre n_menor dividido por n_maior."
    },
    commonTraps: [
      "Inverter os índices de refração resultando em seno maior do que 1.",
      "Achar que a luz passa da casca para o núcleo e não o inverso."
    ],
    tags: ["Física", "Óptica", "Reflexão Total", "Fibra Óptica", "Lei de Snell"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-002",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Física",
    subtopic: "Lentes Corretivas e Ametropias Oculares: Miopia",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A miopia é uma anomalia visual na qual o globo ocular apresenta um diâmetro anteroposterior alongado ou a córnea possui curvatura excessiva. Em decorrência dessa conformação anatômica, a imagem de objetos posicionados no infinito é focalizada antes da retina. Um estudante diagnosticado com miopia possui seu ponto remoto localizado a uma distância de apenas 50 cm (0,50 m) de seus olhos, não conseguindo enxergar com nitidez nada situado além dessa distância sem o auxílio de lentes oftálmicas.",
      source: "OKUNO, E.; FRATIN, L. Desvendando a Física do Corpo Humano: Biomecânica e Óptica. São Paulo: Manole, 2020 (adaptado)."
    },
    prompt: "Para que o estudante possa focalizar com nitidez objetos situados no infinito, a lente corretiva receitada pelo oftalmologista deve ter convergência (grau ou vergência) igual a",
    options: [
      {
        id: "a",
        text: "-2,0 dioptrias.",
        isCorrect: true,
        distractorRationale: "Correto: A miopia é corrigida com lentes divergentes, cuja distância focal f tem sinal negativo. Para conjugar a imagem de um objeto no infinito (p = ∞) no ponto remoto do míope (p' = -0,50 m), temos 1/f = 1/p + 1/p' = 0 - 1/0,50 = -2,0 m^-1 (dioptrias)."
      },
      {
        id: "b",
        text: "+2,0 dioptrias.",
        isCorrect: false,
        distractorRationale: "Calcula a magnitude correta (2 dioptrias), mas confunde a lente divergente com convergente (+), o que agravaria a miopia."
      },
      {
        id: "c",
        text: "-0,50 dioptria.",
        isCorrect: false,
        distractorRationale: "Confunde a distância focal com a vergência, usando diretamente o valor de 50 cm."
      },
      {
        id: "d",
        text: "+0,50 dioptria.",
        isCorrect: false,
        distractorRationale: "Usa o valor de 50 cm com sinal positivo."
      },
      {
        id: "e",
        text: "-5,0 dioptrias.",
        isCorrect: false,
        distractorRationale: "Erro de conversão decimal ao dividir por 50 cm sem converter para metros."
      }
    ],
    detailedExplanation: {
      summary: "A lente corretiva para miopia é divergente (vergência negativa) e sua distância focal f deve ser igual ao oposto da distância do ponto remoto em metros: V = -1 / d_remoto.",
      stepByStep: [
        "1. Na miopia, a lente deve formar a imagem virtual de um objeto no infinito exatamente no ponto remoto do olho: p = ∞ e p' = -d_remoto = -0,50 m.",
        "2. Pela Equação de Gauss: 1/f = 1/p + 1/p' = 1/∞ - 1/0,50 = 0 - 2,0 = -2,0 m^-1.",
        "3. A vergência da lente é dada por V = 1/f = -2,0 dioptrias (graus).",
        "4. O sinal negativo confirma que a lente é divergente, afastando o foco da imagem para trás até atingir a retina."
      ],
      coreConcept: "A vergência V = 1/f em dioptrias requer f em metros. Lentes para miopia são divergentes (V < 0).",
      trapWarning: "Nunca esqueça de converter a distância de centímetros para metros antes de calcular a vergência (1 dioptria = 1 m^-1)."
    },
    commonTraps: [
      "Esquecer o sinal negativo das lentes divergentes na miopia.",
      "Não converter centímetros em metros ao calcular o inverso da distância focal."
    ],
    tags: ["Física", "Óptica", "Miopia", "Lentes Divergentes", "Vergência"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-003",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Lentes Corretivas e Hipermetropia",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A hipermetropia caracteriza-se pelo encurtamento do globo ocular em relação ao sistema refrativo, fazendo com que a imagem de objetos próximos seja conjugada atrás da retina. O olho padrão de um adulto jovem possui ponto próximo situado a 25 cm (0,25 m) de distância. Uma paciente hipermetrope, todavia, só consegue ler textos impressos sem esforço acomodativo excessivo se mantiver as páginas a uma distância mínima de 100 cm (1,0 m) dos olhos.",
      source: "TIPLER, P. A.; MOSCA, G. Física para Cientistas e Engenheiros: Eletricidade, Magnetismo e Óptica. Rio de Janeiro: LTC, 2019 (adaptado)."
    },
    prompt: "Para permitir que essa paciente realize a leitura confortável de livros mantidos à distância de leitura padrão (25 cm), a vergência da lente corretiva recomendada deve ser de",
    options: [
      {
        id: "a",
        text: "-3,0 dioptrias.",
        isCorrect: false,
        distractorRationale: "Calcula a magnitude correta de 3 dioptrias mas atribui sinal negativo (lente divergente), o que pioraria a hipermetropia."
      },
      {
        id: "b",
        text: "+3,0 dioptrias.",
        isCorrect: true,
        distractorRationale: "Correto: A hipermetropia exige lente convergente (sinal positivo). Para conjugar o objeto situado a p = 0,25 m em uma imagem virtual no ponto próximo da paciente p' = -1,0 m, aplicamos a equação de Gauss: V = 1/f = 1/p + 1/p' = 1/0,25 - 1/1,0 = 4,0 - 1,0 = +3,0 dioptrias."
      },
      {
        id: "c",
        text: "+4,0 dioptrias.",
        isCorrect: false,
        distractorRationale: "Considera apenas 1/p = 1/0,25 = 4,0, ignorando o termo do ponto próximo da paciente p' = -1,0 m."
      },
      {
        id: "d",
        text: "+1,0 dioptria.",
        isCorrect: false,
        distractorRationale: "Considera apenas o inverso da distância do ponto próximo da paciente (1/1,0 = 1,0)."
      },
      {
        id: "e",
        text: "+5,0 dioptrias.",
        isCorrect: false,
        distractorRationale: "Soma os inversos em vez de subtrair: 4,0 + 1,0 = 5,0 dioptrias."
      }
    ],
    detailedExplanation: {
      summary: "Na hipermetropia, a lente convergente adianta os raios luminosos. Para ler a 25 cm, ela forma uma imagem virtual no ponto próximo do paciente: V = 1/0,25 - 1/d_pp = +3,0 dioptrias.",
      stepByStep: [
        "1. Identificar a posição desejada do objeto: p = 25 cm = 0,25 m.",
        "2. Identificar a posição onde a imagem virtual deve ser projetada pela lente: p' = -100 cm = -1,0 m (sinal negativo porque a imagem é virtual).",
        "3. Aplicar a fórmula de vergência: V = 1/f = 1/p + 1/p'.",
        "4. Calcular: V = (1 / 0,25) + (1 / -1,0) = 4,0 - 1,0 = +3,0 dioptrias.",
        "5. O sinal positivo confirma que a lente é convergente."
      ],
      coreConcept: "A hipermetropia é corrigida com lentes convergentes (V > 0), reduzindo a distância focal do olho.",
      trapWarning: "A imagem conjugada pela lente de óculos é virtual (o olho olha através dela), logo sua abscissa p' na equação de Gauss é negativa."
    },
    commonTraps: [
      "Somar as distâncias em vez de utilizar o sinal negativo para a imagem virtual.",
      "Confundir lentes convergentes (hipermetropia) com divergentes (miopia)."
    ],
    tags: ["Física", "Óptica", "Hipermetropia", "Lentes Convergentes", "Vergência"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-004",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Lupa e Aumento Linear Transversal",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um laboratório de botânica e farmacologia, uma pesquisadora utiliza uma lente de vidro biconvexa de pequena distância focal como instrumento de aumento simples (lupa) para inspecionar os estômatos e tricomas na epiderme foliar de uma planta medicinal. Para observar a estrutura ampliada e na mesma orientação (direita), a pesquisadora posiciona a folha a uma distância do centro óptico da lente inferior à sua distância focal.",
      source: "SEARS, F. W.; ZEMANSKY, M. W. Física IV: Óptica e Física Moderna. São Paulo: Pearson, 2016."
    },
    prompt: "Nessa configuração de observação microscópica simples, a imagem da folha formada pela lente é classificada opticamente como",
    options: [
      {
        id: "a",
        text: "real, invertida e maior que o objeto.",
        isCorrect: false,
        distractorRationale: "Essa configuração ocorre quando o objeto está entre o foco principal e o ponto antiprincipal objeto de uma lente convergente (como em um projetor)."
      },
      {
        id: "b",
        text: "virtual, direita e menor que o objeto.",
        isCorrect: false,
        distractorRationale: "Essa é a característica exclusiva de imagens formadas por lentes divergentes ou espelhos convexos, não servindo como lupa de ampliação."
      },
      {
        id: "c",
        text: "virtual, direita e maior que o objeto.",
        isCorrect: true,
        distractorRationale: "Correto: Quando um objeto real é posicionado entre o foco principal objeto e o centro óptico de uma lente delgada convergente, os raios refratados divergem e seus prolongamentos formam uma imagem virtual, direita e ampliada no mesmo lado do objeto."
      },
      {
        id: "d",
        text: "real, direita e de mesmo tamanho.",
        isCorrect: false,
        distractorRationale: "Imagens reais formadas por uma única lente delgada são invariavelmente invertidas em relação ao objeto."
      },
      {
        id: "e",
        text: "virtual, invertida e maior que o objeto.",
        isCorrect: false,
        distractorRationale: "Uma imagem virtual produzida por lente esférica delgada mantém sempre a mesma orientação do objeto (é direita)."
      }
    ],
    detailedExplanation: {
      summary: "Na lupa (lente convergente com objeto entre o foco e o vértice), a imagem formada é virtual, direita e maior.",
      stepByStep: [
        "1. Lentes biconvexas no ar atuam como lentes convergentes.",
        "2. Quando o objeto está posicionado a uma distância menor que a distância focal (p < f), os raios emergentes se afastam.",
        "3. O cérebro humano prolonga esses raios refratados para trás, interceptando-se antes do objeto.",
        "4. Como a imagem é formada pelo prolongamento dos raios, ela é virtual; como está voltada para o mesmo semiplano, é direita; e sua altura é ampliada (aumento linear A > 1)."
      ],
      coreConcept: "A lupa produz imagem virtual, direita e maior quando o objeto situa-se entre o foco e o centro óptico.",
      trapWarning: "Imagens reais de uma única lente são sempre invertidas; imagens virtuais de uma única lente são sempre direitas."
    },
    commonTraps: [
      "Achar que toda lente convergente produz apenas imagens reais e invertidas.",
      "Confundir as características da lente convergente operando como lupa com as da lente divergente."
    ],
    tags: ["Física", "Óptica", "Lupa", "Lentes Convergentes", "Formação de Imagens"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-005",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Física",
    subtopic: "Equação de Gauss em Lentes de Projetores",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O projetor multimídia de um anfiteatro universitário utiliza uma lente objetiva delgada convergente de distância focal $f = 20\\text{ cm}$. Para apresentar gráficos de dados epidemiológicos a uma grande plateia, a tela de projeção plana foi instalada a uma distância de $420\\text{ cm}$ do centro óptico da lente do aparelho.",
      source: "HALLIDAY, D.; RESNICK, R.; WALKER, J. Fundamentos de Física: Óptica e Física Moderna. Rio de Janeiro: LTC, 2021 (adaptado)."
    },
    prompt: "Para que a imagem seja projetada com foco nítido sobre a tela, o microdisplay interno (objeto) deve ser posicionado a uma distância do centro óptico da lente igual a",
    options: [
      {
        id: "a",
        text: "15 cm.",
        isCorrect: false,
        distractorRationale: "Valor menor que a distância focal (20 cm), o que geraria imagem virtual e impediria a projeção em tela."
      },
      {
        id: "b",
        text: "21 cm.",
        isCorrect: true,
        distractorRationale: "Correto: Aplicando a equação de Gauss 1/f = 1/p + 1/p': 1/20 = 1/p + 1/420 => 1/p = 1/20 - 1/420 = (21 - 1)/420 = 20/420 = 1/21 => p = 21 cm. O slide fica imediatamente além do foco principal."
      },
      {
        id: "c",
        text: "25 cm.",
        isCorrect: false,
        distractorRationale: "Subtrai distâncias de forma arbitrária sem calcular os inversos de Gauss."
      },
      {
        id: "d",
        text: "40 cm.",
        isCorrect: false,
        distractorRationale: "Assume o ponto antiprincipal (2f = 40 cm), que projetaria a tela a apenas 40 cm."
      },
      {
        id: "e",
        text: "19 cm.",
        isCorrect: false,
        distractorRationale: "Soma 20 e 420 incorretamente ou subtrai 1 da distância focal."
      }
    ],
    detailedExplanation: {
      summary: "Pela equação dos pontos conjugados de Gauss 1/f = 1/p + 1/p', determinamos p = 21 cm com foco f = 20 cm e tela em p' = 420 cm.",
      stepByStep: [
        "1. Dados: f = +20 cm (convergente) e p' = +420 cm (imagem real projetada na tela).",
        "2. Equação de Gauss: 1/f = 1/p + 1/p'.",
        "3. Isolar 1/p: 1/p = 1/20 - 1/420.",
        "4. Encontrar denominador comum (420): 1/20 = 21/420.",
        "5. Subtrair: 1/p = 21/420 - 1/420 = 20/420 = 1/21.",
        "6. Inverter: p = 21 cm."
      ],
      coreConcept: "A equação de Gauss relaciona foco f, distância do objeto p e distância da imagem real p'.",
      trapWarning: "Imagens projetadas em telas são sempre reais, o que impõe p' > 0 e objeto situado além do foco (p > f)."
    },
    commonTraps: [
      "Subtrair as grandezas lineares diretamente sem calcular seus inversos.",
      "Errar o MMC entre 20 e 420."
    ],
    tags: ["Física", "Óptica", "Equação de Gauss", "Projeção", "Lentes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-006",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Lei de Snell-Descartes e Refração da Luz",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Durante a calibração de um sensor óptico para análise de pureza da glicerina em uma usina de biocombustíveis, um feixe de laser monocromático emitido no ar ($n_{\\text{ar}} = 1,00$) incide na superfície plana de uma cuba contendo glicerina pura ($n_{\\text{glicerina}} = 1,47$). O raio incidente forma um ângulo de incidência de $30^\\circ$ com a linha normal à superfície.",
      source: "NUSSENZVEIG, H. M. Curso de Física Básica: Óptica, Relatividade e Física Quântica. São Paulo: Edgard Blücher, 2018."
    },
    prompt: "Considerando $\\\\text{sen } 30^\\circ = 0,50$, o seno do ângulo de refração ($\\\\text{sen } \\\\theta_r$) do feixe no interior da glicerina vale aproximadamente",
    options: [
      {
        id: "a",
        text: "0,735.",
        isCorrect: false,
        distractorRationale: "Multiplica o seno pelo índice em vez de dividir: 0,50 * 1,47 = 0,735."
      },
      {
        id: "b",
        text: "0,340.",
        isCorrect: true,
        distractorRationale: "Correto: Pela lei de Snell-Descartes: n1 * sen(θ1) = n2 * sen(θ2) => 1,00 * 0,50 = 1,47 * sen(θr) => sen(θr) = 0,50 / 1,47 ≈ 0,340. Como a glicerina é mais refringente, o raio se aproxima da normal."
      },
      {
        id: "c",
        text: "0,500.",
        isCorrect: false,
        distractorRationale: "Assume que o ângulo não sofre desvio ao refratar."
      },
      {
        id: "d",
        text: "0,250.",
        isCorrect: false,
        distractorRationale: "Divide por 2 arbitrariamente."
      },
      {
        id: "e",
        text: "0,970.",
        isCorrect: false,
        distractorRationale: "Calcula a razão dos cossenos erroneamente."
      }
    ],
    detailedExplanation: {
      summary: "Pela Lei de Snell, n1 * sen(θ1) = n2 * sen(θ2). Ao passar para um meio mais refringente (glicerina), o ângulo com a normal diminui.",
      stepByStep: [
        "1. Identificar dados: n1 = 1,00; θ1 = 30° => sen(30°) = 0,50; n2 = 1,47.",
        "2. Aplicar a Lei de Snell: n1 * sen(θ1) = n2 * sen(θr).",
        "3. Substituir valores: 1,00 * 0,50 = 1,47 * sen(θr).",
        "4. Isolar sen(θr): sen(θr) = 0,50 / 1,47 ≈ 0,340."
      ],
      coreConcept: "A luz se aproxima da normal quando entra em um meio de maior índice de refração (n2 > n1 => θ2 < θ1).",
      trapWarning: "Lembre-se de que os ângulos da lei de Snell são sempre medidos em relação à reta normal, e não à superfície refletora."
    },
    commonTraps: [
      "Multiplicar o índice pelo seno em vez de dividir.",
      "Usar o ângulo com a superfície em vez do ângulo com a normal."
    ],
    tags: ["Física", "Óptica", "Lei de Snell", "Refração", "Índice de Refração"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-007",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Espelhos Convexos e Segurança Veicular",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os espelhos retrovisores externos do lado direito de muitos veículos e os espelhos de vigilância posicionados em esquinas de corredores hospitalares possuem formato esférico convexo. Na carcaça desses retrovisores, é comum a inscrição em inglês: 'Objects in mirror are closer than they appear' (Os objetos no espelho estão mais próximos do que parecem).",
      source: "TIPLER, P. A.; MOSCA, G. Física para Cientistas e Engenheiros. Rio de Janeiro: LTC, 2019."
    },
    prompt: "Essa advertência aos condutores e pedestres decorre do fato de que o espelho convexo produz uma imagem",
    options: [
      {
        id: "a",
        text: "virtual, invertida e ampliada, fazendo com que o objeto pareça menor.",
        isCorrect: false,
        distractorRationale: "Espelhos convexos nunca invertem imagens de objetos reais nem as ampliam."
      },
      {
        id: "b",
        text: "real, invertida e de dimensões reduzidas, reduzindo o campo visual.",
        isCorrect: false,
        distractorRationale: "A imagem no espelho retrovisor é virtual e o campo visual é ampliado, não reduzido."
      },
      {
        id: "c",
        text: "virtual, direita e de dimensões reduzidas, o que amplia o campo de visão mas altera a percepção de distância.",
        isCorrect: true,
        distractorRationale: "Correto: Para qualquer distância de um objeto real, o espelho convexo conjuga uma imagem virtual, direita e menor. Ao reduzir a imagem, o espelho abrange um ângulo visual maior (aumenta o campo visual), mas faz o cérebro associar o menor tamanho angular a uma distância maior do que a real."
      },
      {
        id: "d",
        text: "real, direita e ampliada, eliminando totalmente os pontos cegos.",
        isCorrect: false,
        distractorRationale: "Imagens reais de espelhos esféricos são invertidas e não existem imagens ampliadas no espelho convexo."
      },
      {
        id: "e",
        text: "virtual, invertida e com o dobro do campo visual do espelho plano.",
        isCorrect: false,
        distractorRationale: "A imagem é direita e não invertida."
      }
    ],
    detailedExplanation: {
      summary: "Espelhos convexos formam sempre imagens virtuais, direitas e menores para objetos reais, ampliando o campo de visão.",
      stepByStep: [
        "1. O foco de um espelho convexo é virtual (fica atrás da superfície refletora: f < 0).",
        "2. Para qualquer posição de um objeto real (p > 0), os raios divergem após a reflexão.",
        "3. Seus prolongamentos cruzam-se entre o vértice e o foco, formando uma imagem virtual, direita e reduzida.",
        "4. Como a imagem é menor, mais objetos cabem no espelho, ampliando o campo visual.",
        "5. Como o tamanho aparente diminui, o observador tem a ilusão de que o objeto está mais afastado do que realmente se encontra."
      ],
      coreConcept: "Espelhos convexos fornecem maior campo visual à custa da redução do tamanho da imagem (imagem virtual, direita e menor).",
      trapWarning: "Cuidado para não confundir o benefício (ampliação do campo de visão) com o efeito na imagem (redução das dimensões da imagem)."
    },
    commonTraps: [
      "Achar que o espelho convexo amplia os objetos porque amplia o campo de visão.",
      "Supor que a imagem pode ser real dependendo da distância."
    ],
    tags: ["Física", "Óptica", "Espelho Convexo", "Campo Visual", "Formação de Imagens"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-008",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Física",
    subtopic: "Espelhos Côncavos e Odontologia",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No exame clínico de cáries e microfissuras dentárias, cirurgiões-dentistas empregam um pequeno espelho côncavo fixado a uma haste metálica. Para obter uma visualização nítida, direta e magnificada da superfície oclusal de um dente molar, o dentista posiciona o espelho a apenas $1,5\\text{ cm}$ do dente. O raio de curvatura da superfície côncava do espelho mede $4,0\\text{ cm}$.",
      source: "SEARS, F. W.; ZEMANSKY, M. W. Física IV: Óptica e Física Moderna. São Paulo: Pearson, 2016."
    },
    prompt: "Com base nessas condições operatórias, o aumento linear transversal ($A$) proporcionado pelo espelho odontológico é igual a",
    options: [
      {
        id: "a",
        text: "+4,0.",
        isCorrect: true,
        distractorRationale: "Correto: O foco de um espelho esférico é a metade do raio de curvatura: f = R/2 = 4,0/2 = 2,0 cm. O aumento linear transversal é dado por A = f / (f - p) = 2,0 / (2,0 - 1,5) = 2,0 / 0,5 = +4,0. A imagem é 4 vezes maior, direita (sinal +) e virtual."
      },
      {
        id: "b",
        text: "-4,0.",
        isCorrect: false,
        distractorRationale: "Sinal negativo indicaria imagem invertida, o que desorientaria a inspeção clínica do dentista."
      },
      {
        id: "c",
        text: "+2,0.",
        isCorrect: false,
        distractorRationale: "Confunde o raio com a distância focal sem calcular a razão de aumento."
      },
      {
        id: "d",
        text: "+1,33.",
        isCorrect: false,
        distractorRationale: "Divide o raio pela distância do dente (4,0 / 1,5 = 2,67) ou calcula a razão incorreta."
      },
      {
        id: "e",
        text: "+0,25.",
        isCorrect: false,
        distractorRationale: "Inverte a fração de aumento (0,5 / 2,0 = 0,25), obtendo redução em vez de ampliação."
      }
    ],
    detailedExplanation: {
      summary: "Com f = R/2 = +2,0 cm e p = 1,5 cm, a fórmula direta do aumento transversal A = f / (f - p) resulta em A = +4,0.",
      stepByStep: [
        "1. Calcular a distância focal do espelho côncavo: f = R / 2 = 4,0 / 2 = +2,0 cm.",
        "2. Observar que o dente está entre o vértice e o foco (p = 1,5 cm < f = 2,0 cm), gerando imagem virtual e direita.",
        "3. Aplicar a fórmula de aumento: A = f / (f - p).",
        "4. Substituir valores: A = 2,0 / (2,0 - 1,5) = 2,0 / 0,5 = +4,0.",
        "5. Conclusão: a imagem do dente é direita, virtual e aumentada em 4 vezes."
      ],
      coreConcept: "A fórmula A = f / (f - p) calcula diretamente o aumento linear e o sentido da imagem.",
      trapWarning: "Lembre-se de que a distância focal de um espelho esférico de Gauss é sempre a metade do raio de curvatura (f = R/2)."
    },
    commonTraps: [
      "Usar o raio R no lugar do foco f na equação de Gauss.",
      "Errar o sinal do aumento linear transversal ao ignorar que imagens direitas têm A > 0."
    ],
    tags: ["Física", "Óptica", "Espelho Côncavo", "Aumento Linear", "Odontologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-009",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Dispersão da Luz e Formação do Arco-Íris",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O fenômeno do arco-íris primário é observado quando a luz solar branca incide sobre gotículas de chuva esféricas em suspensão na atmosfera. No interior de cada gota, ocorrem três etapas ópticas principais: a luz sofre refração ao entrar na gota, reflexão interna na parede posterior da gota e uma segunda refração ao emergir de volta para o ar. Devido à dependência do índice de refração da água com a frequência da radiação eletromagnética, a luz branca é decomposta nas cores do espectro visível.",
      source: "NUSSENZVEIG, H. M. Curso de Física Básica: Óptica. São Paulo: Blücher, 2018."
    },
    prompt: "A separação angular das diferentes cores no arco-íris ocorre porque, ao penetrar na gota de chuva,",
    options: [
      {
        id: "a",
        text: "todas as cores sofrem a mesma refração, mas a luz vermelha sofre reflexão total interna.",
        isCorrect: false,
        distractorRationale: "O desvio não é idêntico para todas as cores; a refração depende do comprimento de onda."
      },
      {
        id: "b",
        text: "a luz violeta possui maior frequência e maior índice de refração que a vermelha, sofrendo um desvio angular mais acentuado.",
        isCorrect: true,
        distractorRationale: "Correto: A dispersão cromática decorre de n(λ) depender da frequência. A luz violeta tem maior frequência (menor comprimento de onda no vácuo), propagando-se mais lentamente na água do que a luz vermelha. Por isso, a luz violeta apresenta maior índice de refração relativo e sofre maior desvio angular (refração mais acentuada)."
      },
      {
        id: "c",
        text: "a luz vermelha viaja mais devagar na água do que a violeta, refratando com menor ângulo com a normal.",
        isCorrect: false,
        distractorRationale: "Na água, a luz vermelha é mais veloz que a violeta (v = c/n, e n_vermelho < n_violeta)."
      },
      {
        id: "d",
        text: "o fenômeno da difração predomina sobre a refração em gotículas macroscópicas.",
        isCorrect: false,
        distractorRationale: "O arco-íris é um fenômeno clássico de óptica geométrica (refração e dispersão), não de difração."
      },
      {
        id: "e",
        text: "a luz sofre polarização total que anula a componente amarela da radiação solar.",
        isCorrect: false,
        distractorRationale: "A polarização parcial ocorre mas não anula componentes de cores do espectro visível."
      }
    ],
    detailedExplanation: {
      summary: "A dispersão luminosa na água ocorre porque o índice de refração aumenta com a frequência: n_violeta > n_vermelho. Assim, a luz violeta desvia mais do que a vermelha.",
      stepByStep: [
        "1. A luz solar é policromática (composta por todas as cores visíveis).",
        "2. A velocidade da luz na água varia conforme a frequência: v = c / n.",
        "3. A luz violeta possui maior frequência e menor velocidade na água, logo n_violeta > n_vermelho.",
        "4. Pela lei de Snell, maior índice de refração implica maior desvio em relação à direção incidente.",
        "5. Portanto, o feixe violeta sofre um desvio angular maior do que o feixe vermelho, separando espacialmente as cores."
      ],
      coreConcept: "Dispersão luminosa: em meios materiais dispersivos, comprimentos de onda menores (maior frequência) sofrem maior desvio.",
      trapWarning: "Cuidado com o arco-íris no céu: embora a luz violeta sofra maior desvio dentro de cada gota, o observador no solo vê a faixa vermelha no topo do arco-íris primário devido à geometria dos raios emergentes."
    },
    commonTraps: [
      "Achar que o índice de refração de um meio é rigorosamente constante para todas as cores da luz.",
      "Inverter as relações de velocidade da luz vermelha e violeta em meios materiais."
    ],
    tags: ["Física", "Óptica", "Dispersão", "Arco-Íris", "Refração Cromática"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-010",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Física",
    subtopic: "Miragens e Refração Atmosférica em Asfalto Aquecido",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em dias de forte insolação no verão brasileiro, condutores trafegando por rodovias pavimentadas frequentemente avistam à frente o que parece ser uma poça de água cintilante sobre o asfalto, refletindo o azul do céu e os automóveis distantes. Ao se aproximarem daquele ponto, constatam que a pista está perfeitamente seca. Esse fenômeno é uma miragem inferior.",
      source: "HALLIDAY, D.; RESNICK, R.; WALKER, J. Fundamentos de Física: Óptica. Rio de Janeiro: LTC, 2021."
    },
    prompt: "A explicação física rigorosa para a formação dessa miragem sobre o asfalto aquecido fundamenta-se",
    options: [
      {
        id: "a",
        text: "no aquecimento do ar junto ao solo, tornando-o menos denso e com menor índice de refração, o que curva continuamente os raios luminosos para cima.",
        isCorrect: true,
        distractorRationale: "Correto: O asfalto quente aquece a camada de ar imediatamente acima dele. O ar quente é menos denso e tem menor índice de refração do que o ar mais frio situado nas camadas superiores. Raios luminosos provenientes do céu passam de camadas de maior n para menor n, refratando com curvatura côncava para cima até sofrerem reflexão total e atingirem os olhos do observador, que enxerga o céu projetado no chão (ilusão de água)."
      },
      {
        id: "b",
        text: "na condensação instantânea da umidade relativa do ar devido ao calor extremo emitido pelo pavimento.",
        isCorrect: false,
        distractorRationale: "O calor extremo causa evaporação e reduz a umidade relativa local, jamais condensação."
      },
      {
        id: "c",
        text: "na absorção total das radiações ultravioleta pelas partículas de asfalto betuminoso.",
        isCorrect: false,
        distractorRationale: "A absorção térmica aquece o solo, mas não explica o desvio óptico dos raios visíveis do céu."
      },
      {
        id: "d",
        text: "no aumento da densidade do ar em contato com o asfalto quente, atuando como uma lente côncava convergente.",
        isCorrect: false,
        distractorRationale: "O ar aquecido se expande e sua densidade diminui, não aumenta."
      },
      {
        id: "e",
        text: "na polarização da luz azul por espalhamento Rayleigh gerado pela poeira da estrada.",
        isCorrect: false,
        distractorRationale: "O espalhamento Rayleigh explica a cor azul do céu, mas não a miragem e curvatura dos raios no asfalto."
      }
    ],
    detailedExplanation: {
      summary: "O gradiente térmico vertical do ar cria um gradiente de índice de refração: n_superior > n_inferior. Os raios de luz sofrem refração gradual e reflexão total perto do solo.",
      stepByStep: [
        "1. O asfalto absorve radiação solar e aquece por condução as camadas de ar rasantes.",
        "2. Ar aquecido se dilata, diminuindo sua densidade e seu índice de refração n.",
        "3. Em camadas mais altas, o ar é mais frio, logo mais denso e com índice de refração n maior.",
        "4. A luz proveniente do céu viaja do meio mais refringente para o menos refringente.",
        "5. Pela lei de Snell, os raios se afastam progressivamente da vertical até que o ângulo de incidência ultrapassa o ângulo limite, ocorrendo reflexão total e curvando o raio de volta para cima.",
        "6. O cérebro prolonga os raios em linha reta, projetando a imagem do céu sobre o pavimento."
      ],
      coreConcept: "A miragem inferior é causada pela variação contínua do índice de refração do ar com a temperatura.",
      trapWarning: "Lembre-se de que quanto mais quente o ar, menor é sua densidade e menor é seu índice de refração."
    },
    commonTraps: [
      "Achar que o ar quente é mais denso que o ar frio.",
      "Acreditar que a miragem é uma ilusão psicológica e não um fenômeno óptico físico real que pode inclusive ser fotografado."
    ],
    tags: ["Física", "Óptica", "Miragem", "Refração Atmosférica", "Reflexão Total"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-011",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Câmara Escura de Orifício e Princípio da Propagação Retilínea",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma aula prática de física do ensino médio, estudantes construíram uma câmara escura de orifício utilizando uma caixa de sapatos vedada contra a luz externa e com um pequeno orifício circular feito com alfinete em uma das extremidades. A profundidade da caixa (distância do orifício até a parede posterior com papel vegetal translúcido) mede $30\\text{ cm}$. Ao apontarem o orifício para uma árvore vertical de $6,0\\text{ metros}$ de altura localizada a uma distância frontal de $15\\text{ metros}$, projeta-se no papel vegetal uma imagem invertida.",
      source: "HECHT, E. Óptica. Lisboa: Fundação Calouste Gulbenkian, 2012."
    },
    prompt: "O tamanho da imagem da árvore projetada no papel vegetal no fundo da câmara escura é de",
    options: [
      {
        id: "a",
        text: "6,0 cm.",
        isCorrect: false,
        distractorRationale: "Multiplica ou divide sem converter as unidades de metro e centímetro adequadamente."
      },
      {
        id: "b",
        text: "12,0 cm.",
        isCorrect: true,
        distractorRationale: "Correto: Pela semelhança de triângulos fundamentada na propagação retilínea da luz: i / o = p' / p. Convertendo todas as distâncias para centímetros: altura do objeto o = 600 cm, distância do objeto p = 1500 cm, distância da imagem p' = 30 cm. Logo: i / 600 = 30 / 1500 => i = 600 * (1 / 50) = 12 cm."
      },
      {
        id: "c",
        text: "15,0 cm.",
        isCorrect: false,
        distractorRationale: "Supõe proporção direta igual à distância da câmara dividida por dois."
      },
      {
        id: "d",
        text: "24,0 cm.",
        isCorrect: false,
        distractorRationale: "Dobra o resultado por erro aritmético na simplificação de 600 / 50."
      },
      {
        id: "e",
        text: "3,0 cm.",
        isCorrect: false,
        distractorRationale: "Divide por 4 em vez de calcular a razão correta de semelhança geométrica."
      }
    ],
    detailedExplanation: {
      summary: "A câmara escura opera por semelhança de triângulos baseada na propagação retilínea da luz: i / o = p' / p.",
      stepByStep: [
        "1. Identificar grandezas: o = 6,0 m = 600 cm; p = 15 m = 1500 cm; p' = 30 cm.",
        "2. Aplicar a relação de semelhança: i / o = p' / p.",
        "3. Substituir valores: i / 600 = 30 / 1500.",
        "4. Simplificar a fração da direita: 30 / 1500 = 1 / 50.",
        "5. Isolar a altura da imagem: i = 600 / 50 = 12 cm.",
        "6. A imagem é real e invertida."
      ],
      coreConcept: "A relação de proporção geométrica i / o = p' / p é válida para a câmara escura e decorre da propagação retilínea da luz.",
      trapWarning: "Sempre converta todas as grandezas para a mesma unidade (metros ou centímetros) antes de efetuar os cálculos."
    },
    commonTraps: [
      "Misturar metros com centímetros sem conversão prévia.",
      "Achar que a imagem na câmara escura é virtual."
    ],
    tags: ["Física", "Óptica", "Câmara Escura", "Propagação Retilínea", "Geometria Óptica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-012",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Física",
    subtopic: "Lentes Esféricas Delgadas: Lentes Divergentes",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma lente divergente delgada possui vergência igual a $-5,0\\text{ dioptrias}$. Um objeto luminoso linear de $10\\text{ cm}$ de altura é colocado perpendicularmente ao eixo óptico principal da lente, a uma distância de $20\\text{ cm}$ do seu centro óptico.",
      source: "SEARS, F. W.; ZEMANSKY, M. W. Física IV. São Paulo: Pearson, 2016."
    },
    prompt: "A distância da imagem conjugada por essa lente em relação ao centro óptico e a sua respectiva altura são iguais a",
    options: [
      {
        id: "a",
        text: "10 cm (virtual) e altura de 5,0 cm.",
        isCorrect: true,
        distractorRationale: "Correto: A distância focal é f = 1/V = 1/(-5,0) = -0,20 m = -20 cm. Pela equação de Gauss: 1/f = 1/p + 1/p' => -1/20 = 1/20 + 1/p' => 1/p' = -2/20 = -1/10 => p' = -10 cm (imagem virtual a 10 cm da lente). O aumento linear transversal é A = -p'/p = -(-10)/20 = +0,5. Assim, a altura é i = A * o = 0,5 * 10 cm = 5,0 cm."
      },
      {
        id: "b",
        text: "20 cm (real) e altura de 10 cm.",
        isCorrect: false,
        distractorRationale: "Lentes divergentes não produzem imagens reais para objetos reais."
      },
      {
        id: "c",
        text: "10 cm (real) e altura de 2,5 cm.",
        isCorrect: false,
        distractorRationale: "Classifica erroneamente a imagem como real."
      },
      {
        id: "d",
        text: "5,0 cm (virtual) e altura de 2,5 cm.",
        isCorrect: false,
        distractorRationale: "Erra a soma dos inversos na equação de Gauss."
      },
      {
        id: "e",
        text: "15 cm (virtual) e altura de 7,5 cm.",
        isCorrect: false,
        distractorRationale: "Faz a média aritmética das grandezas em vez de aplicar Gauss."
      }
    ],
    detailedExplanation: {
      summary: "Com f = -20 cm e p = 20 cm, a equação de Gauss fornece p' = -10 cm e o aumento A = -p'/p = 0,5, gerando i = 5,0 cm.",
      stepByStep: [
        "1. Converter vergência para distância focal: f = 1 / V = 1 / (-5,0) = -0,20 m = -20 cm.",
        "2. Aplicar Gauss: 1/f = 1/p + 1/p' => -1/20 = 1/20 + 1/p'.",
        "3. Isolar 1/p': 1/p' = -1/20 - 1/20 = -2/20 = -1/10 cm^-1.",
        "4. Inverter: p' = -10 cm (sinal negativo indica imagem virtual, situada a 10 cm do centro óptico).",
        "5. Calcular o aumento transversal: A = -p' / p = -(-10) / 20 = +0,5.",
        "6. Determinar altura da imagem: i = A * o = 0,5 * 10 cm = 5,0 cm."
      ],
      coreConcept: "Lentes divergentes (f < 0) sempre produzem imagens virtuais, direitas e menores para objetos reais.",
      trapWarning: "Lembre-se de atribuir sinal negativo tanto à distância focal quanto à abscissa da imagem virtual."
    },
    commonTraps: [
      "Esquecer o sinal negativo de f para a lente divergente.",
      "Errar o sinal do aumento linear transversal A = -p'/p."
    ],
    tags: ["Física", "Óptica", "Lente Divergente", "Equação de Gauss", "Aumento Transversal"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-013",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Lâmina de Faces Paralelas e Desvio Lateral",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em aquários ornamentais e vitrines blindadas espessas, a luz sofre duas refrações sucessivas ao atravessar o vidro: uma na interface ar-vidro e outra na interface vidro-ar. Uma placa de vidro de faces planas e paralelas com espessura $e = 3,0\\text{ cm}$ e índice de refração $n = \\sqrt{3} \\approx 1,73$ está imersa no ar ($n_{\\text{ar}} = 1,0$). Um raio de luz monocromática incide na primeira face com ângulo de incidência $\\theta_1 = 60^\\circ$. Dados: $\\text{sen } 60^\\circ = \\frac{\\sqrt{3}}{2}$, $\\cos 60^\\circ = 0,50$, $\\text{sen } 30^\\circ = 0,50$ e $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$.",
      source: "TIPLER, P. A.; MOSCA, G. Física para Cientistas e Engenheiros. LTC, 2019."
    },
    prompt: "Ao emergir da segunda face de volta para o ar, o raio luminoso sai paralelo à sua direção original, sofrendo um desvio lateral ($d$) de magnitude igual a",
    options: [
      {
        id: "a",
        text: "1,0 cm.",
        isCorrect: false,
        distractorRationale: "Divide a espessura por 3 arbitrariamente."
      },
      {
        id: "b",
        text: "1,73 cm (ou √3 cm).",
        isCorrect: true,
        distractorRationale: "Correto: Pela lei de Snell na 1ª face: 1 * sen(60°) = √3 * sen(θ2) => √3/2 = √3 * sen(θ2) => sen(θ2) = 1/2 => θ2 = 30°. O desvio lateral d em uma lâmina de faces paralelas é dado por d = e * sen(θ1 - θ2) / cos(θ2). Como θ1 - θ2 = 60° - 30° = 30°, temos: d = 3,0 * sen(30°) / cos(30°) = 3,0 * (0,50) / (√3/2) = 3,0 / √3 = √3 cm ≈ 1,73 cm."
      },
      {
        id: "c",
        text: "3,0 cm.",
        isCorrect: false,
        distractorRationale: "Assume que o desvio lateral é igual à própria espessura da lâmina."
      },
      {
        id: "d",
        text: "0,5 cm.",
        isCorrect: false,
        distractorRationale: "Usa apenas o seno de 30° sem considerar a espessura e a projeção trigonométrica."
      },
      {
        id: "e",
        text: "2,0 cm.",
        isCorrect: false,
        distractorRationale: "Aproximação grosseira sem aplicar as relações trigonométricas exatas."
      }
    ],
    detailedExplanation: {
      summary: "O raio emergente de uma lâmina de faces paralelas é paralelo ao raio incidente, deslocado lateralmente por d = e * sen(θ1 - θ2) / cos(θ2) = √3 cm.",
      stepByStep: [
        "1. Aplicar Snell na 1ª refração: n_ar * sen(θ1) = n_vidro * sen(θ2).",
        "2. 1,0 * sen(60°) = √3 * sen(θ2) => √3/2 = √3 * sen(θ2) => sen(θ2) = 1/2 => θ2 = 30°.",
        "3. Como as faces são paralelas, o raio incide na 2ª face a 30° e emerge no ar a 60°, conservando o paralelismo angular com o raio incidente.",
        "4. A fórmula do desvio lateral é d = e * sen(θ1 - θ2) / cos(θ2).",
        "5. Calcular: θ1 - θ2 = 60° - 30° = 30°.",
        "6. d = 3,0 * sen(30°) / cos(30°) = 3,0 * tg(30°) = 3,0 * (1 / √3) = √3 cm ≈ 1,73 cm."
      ],
      coreConcept: "A lâmina de faces paralelas não desvia a direção angular do raio luminoso emergente, mas translada-o paralelamente de uma distância d.",
      trapWarning: "Não confunda desvio angular (que é nulo na lâmina de faces paralelas) com o desvio lateral linear d."
    },
    commonTraps: [
      "Achar que o raio emergente sofre desvio angular permanente em relação ao incidente.",
      "Errar a dedução trigonométrica do desvio lateral."
    ],
    tags: ["Física", "Óptica", "Lâmina de Faces Paralelas", "Desvio Lateral", "Lei de Snell"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-014",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Associação de Espelhos Planos e Multiplicação de Imagens",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em salões de cabeleireiro e camarins de teatro, utilizam-se sistemas ópticos compostos por dois espelhos planos verticais articulados que formam entre si um ângulo diedro $\\alpha$. Quando um cliente posiciona-se no plano bissetor desse ângulo, observa simultaneamente várias imagens de seu perfil refletidas pelos espelhos.",
      source: "ALONSO, M.; FINN, E. J. Física: Um Curso Universitário. São Paulo: Edgard Blücher, 2017."
    },
    prompt: "Se os dois espelhos planos formam entre si um ângulo de $\\\\alpha = 45^\\circ$, o número total de imagens observadas pelo cliente é igual a",
    options: [
      {
        id: "a",
        text: "8.",
        isCorrect: false,
        distractorRationale: "Calcula apenas 360° / 45° = 8, esquecendo de subtrair o próprio objeto real (-1)."
      },
      {
        id: "b",
        text: "7.",
        isCorrect: true,
        distractorRationale: "Correto: A fórmula consagrada para o número de imagens N em espelhos planos angulares é N = (360° / α) - 1. Para α = 45°: N = (360° / 45°) - 1 = 8 - 1 = 7 imagens."
      },
      {
        id: "c",
        text: "6.",
        isCorrect: false,
        distractorRationale: "Subtrai 2 em vez de 1 da divisão."
      },
      {
        id: "d",
        text: "9.",
        isCorrect: false,
        distractorRationale: "Soma 1 em vez de subtrair 1."
      },
      {
        id: "e",
        text: "4.",
        isCorrect: false,
        distractorRationale: "Divide 360° por 90° em vez do ângulo fornecido de 45°."
      }
    ],
    detailedExplanation: {
      summary: "O número de imagens N formadas pela associação de dois espelhos planos angulares é dado por N = (360° / α) - 1. Para α = 45°, N = 7.",
      stepByStep: [
        "1. Identificar o ângulo diedro: α = 45°.",
        "2. Aplicar a fórmula do número de imagens: N = (360° / α) - 1.",
        "3. Dividir: 360 / 45 = 8.",
        "4. Subtrair 1 (pois 1 das 8 regiões do círculo de reflexão é ocupada pelo próprio objeto): N = 8 - 1 = 7 imagens."
      ],
      coreConcept: "Em espelhos planos associados, N = (360° / α) - 1 quando 360°/α for par ou quando o objeto estiver no plano bissetor se for ímpar.",
      trapWarning: "Não esqueça de subtrair 1 na fórmula de imagens associadas; 360°/α representa o número total de setores, sendo um deles o próprio objeto."
    },
    commonTraps: [
      "Esquecer de subtrair 1 ao calcular o número de imagens.",
      "Errar a divisão de 360 por 45."
    ],
    tags: ["Física", "Óptica", "Espelhos Planos", "Associação de Espelhos", "Reflexão"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-015",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Translação e Rotação de Espelho Plano",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Galvanômetros de alta precisão e sensores de alinhamento óptico utilizam um pequeno espelho plano acoplado a um eixo giratório. Um feixe de laser fixo incide continuamente sobre o centro do espelho. Quando o sistema sofre uma rotação mecânica angular de $\\theta = 15^\\circ$ em torno de seu eixo, o feixe de luz refletido se desloca angularmente sobre uma régua milimetrada graduada.",
      source: "HALLIDAY, D.; RESNICK, R.; WALKER, J. Fundamentos de Física: Óptica. LTC, 2021."
    },
    prompt: "Quando o espelho plano sofre uma rotação de $15^\\circ$, o feixe de luz refletido sofre um desvio angular ($\\\\Delta \\\\Delta$) igual a",
    options: [
      {
        id: "a",
        text: "15°.",
        isCorrect: false,
        distractorRationale: "Acha que o raio refletido gira no mesmo ângulo que o espelho."
      },
      {
        id: "b",
        text: "30°.",
        isCorrect: true,
        distractorRationale: "Correto: Pela propriedade da rotação de espelhos planos com raio incidente fixo, a normal ao espelho gira de um ângulo θ, alterando simultaneamente o ângulo de incidência e o ângulo de reflexão. Assim, o raio refletido sofre um desvio angular Δ = 2 * θ = 2 * 15° = 30°."
      },
      {
        id: "c",
        text: "45°.",
        isCorrect: false,
        distractorRationale: "Multiplica o ângulo por 3 sem fundamentação geométrica."
      },
      {
        id: "d",
        text: "7,5°.",
        isCorrect: false,
        distractorRationale: "Divide o ângulo por 2 em vez de multiplicar."
      },
      {
        id: "e",
        text: "60°.",
        isCorrect: false,
        distractorRationale: "Multiplica por 4 por erro na relação de reflexão."
      }
    ],
    detailedExplanation: {
      summary: "Ao girar um espelho plano de um ângulo θ mantendo o raio incidente fixo, o raio refletido gira do dobro desse ângulo: Δ = 2θ = 30°.",
      stepByStep: [
        "1. Considerar o raio incidente com direção constante.",
        "2. Se o espelho sofre rotação de ângulo θ, a reta normal à superfície também gira de θ.",
        "3. O novo ângulo de incidência passa de i para (i + θ).",
        "4. Pela lei da reflexão, o novo ângulo de reflexão também passa a ser (i + θ).",
        "5. O desvio angular total do raio refletido é a soma das variações: Δ = (i + θ) - (i - θ) = 2θ.",
        "6. Para θ = 15°: Δ = 2 * 15° = 30°."
      ],
      coreConcept: "A rotação de um espelho plano por um ângulo θ duplica o desvio angular do raio refletido (Δ = 2θ).",
      trapWarning: "Cuidado: na translação de espelho a velocidade da imagem duplica (v_img = 2 * v_espelho), e na rotação o ângulo de reflexão também duplica (Δ = 2θ)."
    },
    commonTraps: [
      "Achar que o raio refletido gira do mesmo ângulo θ que o espelho.",
      "Dividir o ângulo por 2 achando que se trata de uma média."
    ],
    tags: ["Física", "Óptica", "Espelho Plano", "Rotação de Espelho", "Reflexão"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-016",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Dioptro Plano e Profundidade Aparente",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um biólogo marinho, observando verticalmente de fora d'água a partir de um trapiche fixo, avista um exemplar de peixe carnívoro nadando no fundo de uma lagoa de águas cristalinas com profundidade real de $h = 2,0\\text{ metros}$. Sabe-se que o índice de refração da água da lagoa é $n_{\\text{água}} = \\frac{4}{3} \\approx 1,33$ e o do ar é $n_{\\text{ar}} = 1,00$.",
      source: "HECHT, E. Óptica. Fundação Calouste Gulbenkian, 2012."
    },
    prompt: "Para o biólogo olhando de cima em incidência quase normal, a profundidade aparente ($h'$) em que o peixe aparenta estar posicionado abaixo da superfície da água é de",
    options: [
      {
        id: "a",
        text: "2,67 m.",
        isCorrect: false,
        distractorRationale: "Multiplica a profundidade real pelo índice (2,0 * 4/3), situação que ocorreria se o observador estivesse dentro da água olhando para fora."
      },
      {
        id: "b",
        text: "1,50 m.",
        isCorrect: true,
        distractorRationale: "Correto: Na aproximação paraxial do dioptro plano com observador no ar e objeto na água: h' / h = n_observador / n_objeto = n_ar / n_água = 1 / (4/3) = 3/4. Portanto, h' = 2,0 * (3/4) = 1,50 m. O peixe parece estar mais raso (mais próximo da superfície) do que realmente está."
      },
      {
        id: "c",
        text: "1,00 m.",
        isCorrect: false,
        distractorRationale: "Divide a profundidade por 2 arbitrariamente."
      },
      {
        id: "d",
        text: "0,75 m.",
        isCorrect: false,
        distractorRationale: "Calcula apenas a razão 3/4 sem multiplicar pela profundidade real de 2,0 m."
      },
      {
        id: "e",
        text: "2,00 m.",
        isCorrect: false,
        distractorRationale: "Ignora o efeito da refração luminosa na interface ar-água."
      }
    ],
    detailedExplanation: {
      summary: "Pela equação do dioptro plano paraxial h' / h = n_observador / n_objeto, a profundidade aparente é h' = 2,0 * (1 / (4/3)) = 1,50 m.",
      stepByStep: [
        "1. Identificar meios: objeto na água (n_objeto = 4/3) e observador no ar (n_observador = 1,0).",
        "2. Aplicar a fórmula do dioptro plano para incidência quase normal: h' / h = n_observador / n_objeto.",
        "3. Substituir valores: h' / 2,0 = 1,0 / (4/3) = 3/4 = 0,75.",
        "4. Multiplicar: h' = 2,0 * 0,75 = 1,50 m.",
        "5. O peixe parece estar 0,5 m mais próximo da superfície do que a sua posição real."
      ],
      coreConcept: "Objetos submersos observados a partir do ar parecem mais próximos da superfície devido à refração divergente dos raios emergentes.",
      trapWarning: "Cuidado com o referencial: se o observador está no ar (meio menos refringente), o objeto parece mais perto (h' < h); se o observador estivesse na água olhando para o ar, o objeto pareceria mais distante (h' > h)."
    },
    commonTraps: [
      "Inverter a razão dos índices de refração.",
      "Esquecer de multiplicar a razão pela profundidade real do reservatório."
    ],
    tags: ["Física", "Óptica", "Dioptro Plano", "Profundidade Aparente", "Refração"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-017",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Física",
    subtopic: "Equação dos Fabricantes de Lentes (Halley)",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma indústria óptica oftálmica de precisão, técnicos fabricam uma lente biconvexa simétrica de vidro crown cujo índice de refração é $n_{\\text{vidro}} = 1,50$, destinada a operar no ar ($n_{\\text{ar}} = 1,00$). Cada uma das duas faces convexas da lente foi lapidada com raio de curvatura igual a $R_1 = R_2 = 20\\text{ cm} = 0,20\\text{ m}$.",
      source: "SEARS, F. W.; ZEMANSKY, M. W. Física IV: Óptica. Pearson, 2016."
    },
    prompt: "A vergência ($V$) dessa lente convergente no ar, expressa em dioptrias, é igual a",
    options: [
      {
        id: "a",
        text: "+2,5 dioptrias.",
        isCorrect: false,
        distractorRationale: "Esquece de somar as curvaturas das duas faces (usa apenas 1/R em vez de 2/R)."
      },
      {
        id: "b",
        text: "+5,0 dioptrias.",
        isCorrect: true,
        distractorRationale: "Correto: Pela equação dos fabricantes de lentes: V = 1/f = (n_lente/n_meio - 1) * (1/R1 + 1/R2). Como a lente é biconvexa simétrica no ar: R1 = +0,20 m e R2 = +0,20 m. Logo: V = (1,50/1,00 - 1) * (1/0,20 + 1/0,20) = (0,50) * (5 + 5) = 0,50 * 10 = +5,0 dioptrias."
      },
      {
        id: "c",
        text: "+10,0 dioptrias.",
        isCorrect: false,
        distractorRationale: "Não multiplica pelo fator (n - 1) = 0,50."
      },
      {
        id: "d",
        text: "+1,25 dioptria.",
        isCorrect: false,
        distractorRationale: "Divide por 4 por erro no cálculo dos inversos dos raios em metros."
      },
      {
        id: "e",
        text: "-5,0 dioptrias.",
        isCorrect: false,
        distractorRationale: "Atribui sinal negativo de lente divergente a uma lente biconvexa mais refringente que o ar."
      }
    ],
    detailedExplanation: {
      summary: "Pela Equação dos Fabricantes de Lentes, V = (n - 1) * (1/R1 + 1/R2) = (1,5 - 1) * (5 + 5) = +5,0 dioptrias.",
      stepByStep: [
        "1. Converter raios para metros: R1 = 0,20 m; R2 = 0,20 m.",
        "2. Aplicar a fórmula de Halley para a lente biconvexa: 1/f = (n_lente / n_meio - 1) * (1/R1 + 1/R2).",
        "3. Substituir n_lente / n_meio = 1,50 / 1,00 = 1,50 => (n - 1) = 0,50.",
        "4. Calcular soma dos inversos: 1/0,20 + 1/0,20 = 5 + 5 = 10 m^-1.",
        "5. Multiplicar: V = 0,50 * 10 = +5,0 dioptrias."
      ],
      coreConcept: "A equação dos fabricantes de lentes relaciona os raios das faces e os índices de refração com a distância focal e vergência.",
      trapWarning: "Faces convexas têm raio de sinal positivo e faces côncavas têm raio de sinal negativo na convenção geométrica tradicional de Halley."
    },
    commonTraps: [
      "Esquecer de converter os raios de curvatura de centímetros para metros.",
      "Considerar apenas uma das faces da lente no somatório de curvaturas."
    ],
    tags: ["Física", "Óptica", "Fabricantes de Lentes", "Halley", "Vergência"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-018",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Física",
    subtopic: "Comportamento Óptico de Lente Submersa em Meio Mais Refringente",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Uma lente de vidro biconvexa ($n_{\\text{vidro}} = 1,50$), que atua rotineiramente como lente convergente quando imersa no ar ($n_{\\text{ar}} = 1,00$), é completamente submersa no interior de um tanque contendo sulfeto de carbono líquido transparente, cujo índice de refração absoluto é $n_{\\text{líquido}} = 1,63$. Um feixe de raios luminosos cilíndricos paralelos incide paralelamente ao eixo principal da lente submersa.",
      source: "TIPLER, P. A.; MOSCA, G. Física para Cientistas e Engenheiros. LTC, 2019."
    },
    prompt: "Ao atravessar a lente imersa no sulfeto de carbono, o feixe de luz",
    options: [
      {
        id: "a",
        text: "converge mais fortemente, encurtando sua distância focal.",
        isCorrect: false,
        distractorRationale: "Isso só ocorreria se o meio externo tivesse índice de refração menor que o do vidro."
      },
      {
        id: "b",
        text: "diverge, comportando-se como uma lente divergente.",
        isCorrect: true,
        distractorRationale: "Correto: Pela equação dos fabricantes de lentes, o fator de refração é (n_lente / n_meio - 1). Como n_vidro (1,50) < n_líquido (1,63), a razão n_lente / n_meio resulta em valor menor que 1, tornando o fator (n_lente / n_meio - 1) negativo. Por conseguinte, a lente biconvexa de bordos finos inverte seu comportamento óptico e passa a se comportar como uma lente divergente."
      },
      {
        id: "c",
        text: "sofre reflexão total instantânea na primeira face, sem penetrar no vidro.",
        isCorrect: false,
        distractorRationale: "O feixe incide perpendicularmente ao centro da face e n_líquido > n_vidro, permitindo a refração na entrada."
      },
      {
        id: "d",
        text: "propaga-se em linha reta sem qualquer desvio ou alteração de velocidade.",
        isCorrect: false,
        distractorRationale: "Só ocorreria se os índices fossem exatamente iguais (n_vidro = n_líquido)."
      },
      {
        id: "e",
        text: "polariza circularmente toda a radiação sem alterar o foco.",
        isCorrect: false,
        distractorRationale: "Conceito incorreto e sem relação com a refração paraxial da lente."
      }
    ],
    detailedExplanation: {
      summary: "Quando o meio circundante é mais refringente que o material da lente (n_meio > n_lente), a natureza óptica da lente inverte-se: lentes de bordos finos (biconvexas) tornam-se divergentes.",
      stepByStep: [
        "1. Analisar a geometria da lente: biconvexa possui bordos finos.",
        "2. No ar (n_ar = 1,00 < n_vidro = 1,50), ela é convergente.",
        "3. No sulfeto de carbono, n_meio = 1,63 > n_vidro = 1,50.",
        "4. Na equação de Halley: 1/f = (n_vidro / n_meio - 1) * (1/R1 + 1/R2).",
        "5. Como 1,50 / 1,63 < 1, o termo (n_vidro / n_meio - 1) < 0.",
        "6. Logo, 1/f < 0 (distância focal negativa), o que caracteriza comportamento divergente."
      ],
      coreConcept: "Se n_meio > n_lente, o comportamento óptico da lente inverte-se (convergente vira divergente e vice-versa).",
      trapWarning: "Nunca memorize que 'lente biconvexa é sempre convergente'. Ela só é convergente quando o meio externo for menos refringente que o material da lente."
    },
    commonTraps: [
      "Acreditar que o formato geométrico da lente define seu comportamento independentemente do meio de imersão.",
      "Achar que a luz não entra no vidro."
    ],
    tags: ["Física", "Óptica", "Lente Submersa", "Inversão de Comportamento", "Índice de Refração"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-019",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Acomodação Visual e Presbiopia (Vista Cansada)",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A partir dos 40 a 45 anos de idade, a maioria dos indivíduos experimenta perda progressiva da elasticidade da cápsula do cristalino e enfraquecimento gradativo dos músculos ciliares intraoculares. Com essa perda de flexibilidade anatômica, o olho humano perde a capacidade de acomodação para focalizar com nitidez objetos em distâncias próximas, exigindo que a pessoa afaste jornais e telas de celulares para conseguir ler. Esse quadro fisiológico é denominado presbiopia ou 'vista cansada'.",
      source: "GUYTON, A. C.; HALL, J. E. Tratado de Fisiologia Médica. Rio de Janeiro: Elsevier, 2021."
    },
    prompt: "Para compensar a insuficiência de poder acomodativo do cristalino na leitura de textos próximos, o presbipe deve utilizar óculos equipados com lentes",
    options: [
      {
        id: "a",
        text: "cilíndricas divergentes, para corrigir a assimetria corneal.",
        isCorrect: false,
        distractorRationale: "Lentes cilíndricas corrigem o astigmatismo, não a presbiopia pura."
      },
      {
        id: "b",
        text: "esféricas convergentes, que aumentam a convergência total do sistema ocular para objetos próximos.",
        isCorrect: true,
        distractorRationale: "Correto: Como o cristalino enrijecido não consegue aumentar sua curvatura para aproximar o foco à retina, o olho perde poder dióptrico de convergência. A lente convergente soma seu poder dióptrico ao do olho (+ dioptrias), convergindo os raios divergentes de objetos próximos e permitindo a formação da imagem na retina."
      },
      {
        id: "c",
        text: "esféricas divergentes, para projetar o ponto remoto até o infinito.",
        isCorrect: false,
        distractorRationale: "Lentes divergentes são empregadas na correção da miopia."
      },
      {
        id: "d",
        text: "prismáticas incolores, para desviar o eixo óptico binocular.",
        isCorrect: false,
        distractorRationale: "Lentes prismáticas são utilizadas para correção de estrabismo e diplopia."
      },
      {
        id: "e",
        text: "planas refletoras, que bloqueiam a radiação azul-violeta.",
        isCorrect: false,
        distractorRationale: "Filtros de luz azul aumentam o conforto térmico visual, mas não corrigem a ametropia dióptrica."
      }
    ],
    detailedExplanation: {
      summary: "A presbiopia é corrigida com lentes convergentes, que suprem a incapacidade do cristalino de aumentar sua convergência na visão de perto.",
      stepByStep: [
        "1. Na visão de perto, os raios chegam fortemente divergentes ao olho.",
        "2. Em um olho jovem, os músculos ciliares se contraem, permitindo ao cristalino tornar-se mais convexo (aumentar sua convergência).",
        "3. Na presbiopia, o enrijecimento do cristalino impede esse aumento da curvatura.",
        "4. A imagem de objetos próximos tenderia a formar-se atrás da retina.",
        "5. A lente oftálmica convergente (+D) fornece a vergência suplementar necessária para focar a imagem exatamente na retina."
      ],
      coreConcept: "A presbiopia afasta o ponto próximo do olho e é corrigida com lentes convergentes (efeito análogo à hipermetropia adquirida).",
      trapWarning: "Lembre-se de que a presbiopia é um distúrbio de acomodação (envelhecimento do cristalino), enquanto a hipermetropia clássica decorre de conformação axial curta do globo ocular."
    },
    commonTraps: [
      "Confundir a correção da presbiopia (lentes convergentes) com a de miopia (lentes divergentes).",
      "Associar presbiopia a lentes cilíndricas (que corrigem astigmatismo)."
    ],
    tags: ["Física", "Óptica", "Presbiopia", "Cristalino", "Lentes Convergentes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-020",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Física",
    subtopic: "Lentes em Contato e Justaposição de Vergências",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em sistemas ópticos compostos, como microscópios e teleobjetivas fotográficas acromáticas, costuma-se colar ou justapor duas lentes delgadas em contato direto para eliminar aberrações cromáticas e obter distâncias focais específicas. Um conjunto óptico é formado pela justaposição coaxial de uma lente delgada convergente $L_1$ de distância focal $f_1 = +25\\text{ cm} = +0,25\\text{ m}$ com uma lente delgada divergente $L_2$ de distância focal $f_2 = -50\\text{ cm} = -0,50\\text{ m}$.",
      source: "SEARS, F. W.; ZEMANSKY, M. W. Física IV: Óptica. Pearson, 2016."
    },
    prompt: "A vergência equivalente do sistema ($V_{\\\\text{eq}}$) e a distância focal equivalente ($f_{\\\\text{eq}}$) desse conjunto de lentes em contato valem, respectivamente,",
    options: [
      {
        id: "a",
        text: "+2,0 dioptrias e +0,50 m.",
        isCorrect: true,
        distractorRationale: "Correto: Para lentes justapostas em contato, as vergências se somam algebricamente: V_eq = V1 + V2. Temos V1 = 1/f1 = 1/0,25 = +4,0 dioptrias e V2 = 1/f2 = 1/(-0,50) = -2,0 dioptrias. Logo: V_eq = +4,0 + (-2,0) = +2,0 dioptrias. A distância focal equivalente é f_eq = 1 / V_eq = 1 / 2,0 = +0,50 m (+50 cm)."
      },
      {
        id: "b",
        text: "+6,0 dioptrias e +0,167 m.",
        isCorrect: false,
        distractorRationale: "Soma os módulos ignorando o sinal negativo da lente divergente (4,0 + 2,0 = 6,0)."
      },
      {
        id: "c",
        text: "-2,0 dioptrias e -0,50 m.",
        isCorrect: false,
        distractorRationale: "Inverte os sinais, considerando a lente divergente mais potente que a convergente."
      },
      {
        id: "d",
        text: "+1,0 dioptria e +1,00 m.",
        isCorrect: false,
        distractorRationale: "Subtrai as distâncias em centímetros (50 - 25 = 25) e divide incorretamente."
      },
      {
        id: "e",
        text: "+4,0 dioptrias e +0,25 m.",
        isCorrect: false,
        distractorRationale: "Desconsidera a presença da segunda lente do sistema."
      }
    ],
    detailedExplanation: {
      summary: "Para lentes em contato: V_eq = V1 + V2. Com V1 = +4,0 D e V2 = -2,0 D, V_eq = +2,0 D e f_eq = +0,50 m.",
      stepByStep: [
        "1. Calcular a vergência da lente 1: V1 = 1 / f1 = 1 / (+0,25 m) = +4,0 dioptrias.",
        "2. Calcular a vergência da lente 2: V2 = 1 / f2 = 1 / (-0,50 m) = -2,0 dioptrias.",
        "3. Somar as vergências para lentes justapostas: V_eq = V1 + V2 = +4,0 - 2,0 = +2,0 dioptrias.",
        "4. Calcular a distância focal equivalente: f_eq = 1 / V_eq = 1 / (+2,0) = +0,50 m (+50 cm).",
        "5. O sistema comporta-se globalmente como uma lente convergente de foco 50 cm."
      ],
      coreConcept: "A vergência equivalente de lentes justapostas é a soma algébrica das vergências individuais (V_eq = V1 + V2).",
      trapWarning: "Vergências somam-se algebricamente, mas distâncias focais NÃO se somam diretamente (1/f_eq = 1/f1 + 1/f2)."
    },
    commonTraps: [
      "Somar as distâncias focais diretamente (f_eq = f1 + f2).",
      "Ignorar o sinal negativo da vergência da lente divergente."
    ],
    tags: ["Física", "Óptica", "Lentes Justapostas", "Vergência Equivalente", "Lentes Delgadas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-021",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Prisma Óptico e Desvio Mínimo",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em espectrômetros de prisma utilizados para análise elementar de substâncias químicas, um feixe de luz monocromática incide simetricamente sobre um prisma equilátero de vidro (ângulo de abertura ou refringência $A = 60^\\circ$) imerso no ar ($n_{\\text{ar}} = 1,00$). Na condição de desvio mínimo, a trajetória do feixe no interior do prisma é rigorosamente paralela à base do prisma, de modo que os ângulos de refração em ambas as faces são iguais ($r_1 = r_2$). Dados: $\\text{sen } 30^\\circ = 0,50$; $\\text{sen } 45^\\circ = \\frac{\\sqrt{2}}{2} \\approx 0,707$; $\\text{sen } 60^\\circ = \\frac{\\sqrt{3}}{2} \\approx 0,866$.",
      source: "ALONSO, M.; FINN, E. J. Física. Blücher, 2017."
    },
    prompt: "Se o índice de refração do vidro desse prisma para essa radiação é $n = \\sqrt{2} \\approx 1,414$, o ângulo de incidência ($\\\\theta_1$) na primeira face para que ocorra o desvio mínimo deve ser igual a",
    options: [
      {
        id: "a",
        text: "30°.",
        isCorrect: false,
        distractorRationale: "Esse é o ângulo de refração interna r1, não o ângulo de incidência externa."
      },
      {
        id: "b",
        text: "45°.",
        isCorrect: true,
        distractorRationale: "Correto: No prisma simétrico, o ângulo de abertura é A = r1 + r2. Como r1 = r2 na condição de desvio mínimo, temos 2 * r1 = 60° => r1 = 30°. Pela Lei de Snell na 1ª face: n_ar * sen(θ1) = n_vidro * sen(r1) => 1,00 * sen(θ1) = √2 * sen(30°) = √2 * (1/2) = √2 / 2. Como sen(θ1) = √2 / 2, concluímos que θ1 = 45°."
      },
      {
        id: "c",
        text: "60°.",
        isCorrect: false,
        distractorRationale: "Assume que o ângulo de incidência é igual ao ângulo de refringência do prisma."
      },
      {
        id: "d",
        text: "90°.",
        isCorrect: false,
        distractorRationale: "Incidência rasante, o que geraria reflexão total na saída da segunda face."
      },
      {
        id: "e",
        text: "15°.",
        isCorrect: false,
        distractorRationale: "Subtrai 45° - 30° = 15° sem base na lei de Snell."
      }
    ],
    detailedExplanation: {
      summary: "Na condição de desvio mínimo, r1 = r2 = A/2 = 30°. Pela lei de Snell, sen(θ1) = n * sen(30°) = √2 * 0,5 = √2/2, logo θ1 = 45°.",
      stepByStep: [
        "1. A geometria do prisma estabelece que o ângulo de refringência é A = r1 + r2.",
        "2. No desvio mínimo, a simetria impõe r1 = r2.",
        "3. Logo, r1 = A / 2 = 60° / 2 = 30°.",
        "4. Aplicar Snell na interface ar-vidro: n_ar * sen(θ1) = n_prisma * sen(r1).",
        "5. Substituir valores: 1,00 * sen(θ1) = √2 * sen(30°) = √2 * (1/2) = √2 / 2.",
        "6. Como sen(θ1) = √2 / 2, o ângulo de incidência é θ1 = 45°."
      ],
      coreConcept: "No desvio mínimo de um prisma óptico, os raios propagam-se simetricamente, com r1 = r2 = A/2 e θ1 = θ2.",
      trapWarning: "Cuidado para não confundir o ângulo interno de refração r1 com o ângulo de incidência externo θ1."
    },
    commonTraps: [
      "Responder 30°, confundindo o ângulo de refração com o de incidência.",
      "Esquecer a relação A = r1 + r2 para prismas."
    ],
    tags: ["Física", "Óptica", "Prisma Óptico", "Desvio Mínimo", "Lei de Snell"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-022",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Velocidade da Luz em Meios Materiais",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A velocidade de propagação da luz no vácuo é uma constante universal de magnitude aproximada $c = 3,0 \\times 10^8\\text{ m/s}$. Ao penetrar em um meio material homogêneo e transparente, como um bloco de diamante lapidado com índice de refração absoluto $n = 2,40$, a velocidade de fase das ondas eletromagnéticas luminosas é sensivelmente reduzida pelas interações com os elétrons do retículo cristalino.",
      source: "TIPLER, P. A.; MOSCA, G. Física para Cientistas e Engenheiros. LTC, 2019."
    },
    prompt: "A velocidade de propagação da luz no interior desse cristal de diamante é igual a",
    options: [
      {
        id: "a",
        text: "7,2 × 10⁸ m/s.",
        isCorrect: false,
        distractorRationale: "Multiplica a velocidade da luz pelo índice (3,0 * 2,4), violando o postulado relativístico de que nenhuma onda eletromagnética viaja mais rápido que c."
      },
      {
        id: "b",
        text: "1,25 × 10⁸ m/s.",
        isCorrect: true,
        distractorRationale: "Correto: Por definição de índice de refração absoluto: n = c / v => v = c / n. Substituindo os valores dados: v = (3,0 * 10^8) / 2,40 = 1,25 * 10^8 m/s."
      },
      {
        id: "c",
        text: "2,40 × 10⁸ m/s.",
        isCorrect: false,
        distractorRationale: "Confunde o índice de refração com a própria velocidade da onda."
      },
      {
        id: "d",
        text: "0,80 × 10⁸ m/s.",
        isCorrect: false,
        distractorRationale: "Divide 2,40 por 3,0 em vez de 3,0 por 2,40."
      },
      {
        id: "e",
        text: "1,50 × 10⁸ m/s.",
        isCorrect: false,
        distractorRationale: "Usa o índice de refração padrão do vidro (1,50) em vez do índice do diamante (2,40)."
      }
    ],
    detailedExplanation: {
      summary: "Pela definição de índice de refração n = c / v, a velocidade da luz no diamante é v = (3,0 * 10^8) / 2,4 = 1,25 * 10^8 m/s.",
      stepByStep: [
        "1. Conhecer a fórmula do índice de refração absoluto: n = c / v.",
        "2. Isolar a velocidade no meio: v = c / n.",
        "3. Substituir valores: c = 3,0 * 10^8 m/s e n = 2,40.",
        "4. Dividir: 3,0 / 2,40 = 5 / 4 = 1,25.",
        "5. Concluir: v = 1,25 * 10^8 m/s."
      ],
      coreConcept: "A velocidade da luz em qualquer meio material transparente é sempre inferior à do vácuo: v = c / n (com n >= 1).",
      trapWarning: "A velocidade da luz nunca pode superar 3,0 * 10^8 m/s em nenhum meio real, o que elimina de imediato valores maiores que c."
    },
    commonTraps: [
      "Multiplicar c por n em vez de dividir.",
      "Inverter a ordem da divisão (n/c em vez de c/n)."
    ],
    tags: ["Física", "Óptica", "Índice de Refração", "Velocidade da Luz", "Refração"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-023",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Física",
    subtopic: "Astigmatismo e Superfícies Tóricas",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O astigmatismo é uma anomalia refrativa na qual a córnea (ou mais raramente o cristalino) apresenta curvatura assimétrica, assemelhando-se à superfície de uma bola de futebol americano em vez de uma calota esférica perfeitamente simétrica. Como consequência, o olho possui meridianos de refração com raios de curvatura distintos: por exemplo, um meridiano vertical mais curvo e um meridiano horizontal mais plano, focalizando a luz em duas linhas focais separadas no espaço.",
      source: "OKUNO, E.; FRATIN, L. Desvendando a Física do Corpo Humano. Manole, 2020."
    },
    prompt: "Para corrigir essa assimetria dióptrica e produzir um único ponto focal sobre a retina, a prescrição oftalmológica para o paciente com astigmatismo deve indicar lentes",
    options: [
      {
        id: "a",
        text: "esféricas convergentes puras de alta vergência.",
        isCorrect: false,
        distractorRationale: "Lentes esféricas possuem a mesma curvatura em todos os meridianos e não corrigem a assimetria focal."
      },
      {
        id: "b",
        text: "cilíndricas (ou tóricas), que possuem vergência diferenciada ao longo de eixos ortogonais específicos.",
        isCorrect: true,
        distractorRationale: "Correto: Lentes cilíndricas ou tóricas possuem curvaturas distintas em eixos ortogonais (um eixo de potência máxima e um eixo neutro), compensando exatamente a diferença de refração entre os meridianos corneanos e alinhando os focos em um único plano sobre a retina."
      },
      {
        id: "c",
        text: "biconvexas acromáticas simétricas.",
        isCorrect: false,
        distractorRationale: "Lentes biconvexas simétricas são esféricas e atuam igualmente em todos os meridianos."
      },
      {
        id: "d",
        text: "polaróides lineares com filtro infravermelho.",
        isCorrect: false,
        distractorRationale: "Filtros polaróides bloqueiam planos de oscilação do campo elétrico, mas não alteram a geometria focal da córnea."
      },
      {
        id: "e",
        text: "divergentes puras de dioptria negativa.",
        isCorrect: false,
        distractorRationale: "Lentes divergentes puras corrigem a miopia e não compensam a assimetria meridiana."
      }
    ],
    detailedExplanation: {
      summary: "O astigmatismo decorre de assimetria nos meridianos da córnea e é corrigido por lentes cilíndricas/tóricas orientadas em um eixo específico.",
      stepByStep: [
        "1. A córnea com astigmatismo possui meridianos principais com diferentes curvaturas e potências focais.",
        "2. Uma lente esférica comum aplica a mesma correção a todos os meridianos, mantendo o descompasso entre eles.",
        "3. Uma lente cilíndrica possui vergência ativa apenas em uma direção perpendicular ao seu eixo geométrico.",
        "4. Combinando a curvatura esférica e cilíndrica (lente tórica), equalizam-se os focos de todos os meridianos na retina."
      ],
      coreConcept: "Astigmatismo requer lente cilíndrica/tórica para compensar a assimetria angular dos meridianos ópticos.",
      trapWarning: "Lembre-se da correlação: Miopia = divergente; Hipermetropia = convergente; Presbiopia = convergente; Astigmatismo = cilíndrica/tórica."
    },
    commonTraps: [
      "Confundir astigmatismo com miopia.",
      "Achar que qualquer ametropia visual é corrigida por lentes esféricas simples."
    ],
    tags: ["Física", "Óptica", "Astigmatismo", "Lentes Cilíndricas", "Ametropias"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-024",
    area: "natureza",
    competence: 2,
    skill: 5,
    topic: "Física",
    subtopic: "Reflexão em Espelho Plano e Campo de Visão",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma atleta de $1,80\\text{ metro}$ de altura deseja fixar verticalmente em uma parede plana de seu quarto de vestir um espelho plano para conseguir se enxergar de corpo inteiro (da sola dos calçados ao topo da cabeça). Sabe-se que a linha dos olhos da atleta está situada a uma altura de $1,70\\text{ metro}$ em relação ao piso horizontal.",
      source: "HALLIDAY, D.; RESNICK, R.; WALKER, J. Fundamentos de Física: Óptica. LTC, 2021."
    },
    prompt: "Para que a atleta consiga visualizar todo o seu corpo refletido independentemente da distância em que se posicione em frente ao espelho, o comprimento vertical mínimo desse espelho deve ser de",
    options: [
      {
        id: "a",
        text: "1,80 m.",
        isCorrect: false,
        distractorRationale: "Acredita erroneamente que o espelho precisa ter o mesmo tamanho da pessoa."
      },
      {
        id: "b",
        text: "0,90 m.",
        isCorrect: true,
        distractorRationale: "Correto: Pela semelhança de triângulos na reflexão em espelho plano, a imagem é simétrica e situa-se à mesma distância do espelho que a pessoa (p' = p). Como a distância da pessoa à sua imagem é 2p e a distância da pessoa ao espelho é p, a semelhança geométrica impõe que o tamanho vertical mínimo do espelho seja exatamente a metade da altura total da pessoa: H_espelho = H_pessoa / 2 = 1,80 / 2 = 0,90 m."
      },
      {
        id: "c",
        text: "0,85 m.",
        isCorrect: false,
        distractorRationale: "Divide a altura dos olhos por 2 (1,70 / 2 = 0,85 m), que é a altura da borda inferior do espelho ao solo, não o tamanho total do espelho."
      },
      {
        id: "d",
        text: "1,20 m.",
        isCorrect: false,
        distractorRationale: "Estima dois terços da altura da pessoa sem aplicar a relação geométrica exata."
      },
      {
        id: "e",
        text: "0,60 m.",
        isCorrect: false,
        distractorRationale: "Divide a altura por 3 erroneamente."
      }
    ],
    detailedExplanation: {
      summary: "O tamanho mínimo do espelho plano vertical para visão de corpo inteiro é sempre metade da altura da pessoa: H_espelho = H / 2 = 0,90 m.",
      stepByStep: [
        "1. A imagem conjugada por um espelho plano é simétrica: distância do observador ao espelho = d, distância da imagem ao espelho = d.",
        "2. A distância total entre os olhos do observador e a sua imagem é 2d.",
        "3. Os raios que saem da cabeça e dos pés e atingem os olhos formam dois triângulos com o espelho.",
        "4. Pela semelhança de triângulos, o segmento de espelho interceptado corresponde à base média do triângulo maior.",
        "5. Portanto, tamanho do espelho = altura da pessoa / 2 = 1,80 / 2 = 0,90 m.",
        "6. Além disso, a borda inferior do espelho deve ficar a metade da altura dos olhos em relação ao chão (1,70 / 2 = 0,85 m)."
      ],
      coreConcept: "O comprimento vertical mínimo de um espelho plano para visão corporal completa é independente da distância e igual à metade da altura do observador.",
      trapWarning: "Cuidado para não confundir o comprimento vertical mínimo do espelho (H/2) com a altura de instalação da borda inferior em relação ao piso (h_olhos/2)."
    },
    commonTraps: [
      "Achar que o espelho precisa ter o mesmo tamanho da pessoa.",
      "Achar que se a pessoa se afastar do espelho precisará de um espelho menor ou maior."
    ],
    tags: ["Física", "Óptica", "Espelho Plano", "Campo Visual", "Semelhança de Triângulos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-OPT-025",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Física",
    subtopic: "Lentes de Fresnel e Faróis de Sinalização Costeira",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No século XIX, o físico e engenheiro francês Augustin-Jean Fresnel desenvolveu uma lente revolucionária para faróis marítimos de sinalização costeira. Em vez de utilizar uma gigantesca lente convexa de vidro maciço — inviável devido ao enorme peso e à alta absorção de luz pelo material espesso —, Fresnel dividiu a superfície curva contínua em anéis concêntricos prismáticos escalonados. Cada anel preserva a curvatura de refração original, mas com espessura de vidro drasticamente reduzida.",
      source: "HECHT, E. Óptica. Fundação Calouste Gulbenkian, 2012."
    },
    prompt: "A vantagem tecnológica determinante da lente de Fresnel que permitiu aumentar a visibilidade e o alcance luminoso dos faróis foi",
    options: [
      {
        id: "a",
        text: "eliminar completamente o fenômeno da refração através de espelhos refletores parabólicos internos.",
        isCorrect: false,
        distractorRationale: "A lente de Fresnel baseia-se fundamentalmente na refração através de prismas anelares, não na eliminação da refração."
      },
      {
        id: "b",
        text: "manter a capacidade dióptrica de focalização com massa extremamente reduzida e menor absorção de energia luminosa pelo vidro.",
        isCorrect: true,
        distractorRationale: "Correto: Como a refração ocorre exclusivamente na interface entre o ar e o vidro, o material interno da lente atua apenas como suporte e absorve luz. Ao escalonar a curvatura em anéis concêntricos finos, a lente de Fresnel conserva a mesma distância focal e poder convergente de uma lente volumosa comum, mas reduz drasticamente a espessura, o peso estrutural e as perdas luminosas por absorção interna no vidro."
      },
      {
        id: "c",
        text: "dispersar a luz branca em um espectro contínuo para sinalizar diferentes profundidades marinhas.",
        isCorrect: false,
        distractorRationale: "O farol precisa de feixes colimados e potentes, não de dispersão cromática."
      },
      {
        id: "d",
        text: "polarizar o feixe para que os navegadores consigam avistá-lo apenas com óculos polarizados.",
        isCorrect: false,
        distractorRationale: "A luz de faróis marítimos é não polarizada para que qualquer observador a olho nu consiga detectá-la."
      },
      {
        id: "e",
        text: "transformar a radiação luminosa visível em radiação de micro-ondas de maior alcance.",
        isCorrect: false,
        distractorRationale: "Lentes de vidro não alteram a frequência da luz incidida."
      }
    ],
    detailedExplanation: {
      summary: "A lente de Fresnel mantém o poder de refração da superfície curva escalonando-a em anéis concêntricos finos, reduzindo massa e absorção luminosa.",
      stepByStep: [
        "1. O desvio de um raio por refração ocorre exclusivamente na superfície fronteiriça de transição entre os meios.",
        "2. A matéria de vidro no interior de uma lente convexa espessa convencional serve apenas para preencher volume, mas adiciona peso excessivo e absorve parte da luz.",
        "3. Fresnel removeu o excesso de matéria interna, mantendo os anéis com o mesmo perfil angular de curvatura.",
        "4. Isso produz uma lente plana e delgada com a mesma potência focal de uma lente convencional massiva.",
        "5. O resultado foi um feixe luminoso colimado paralelo de altíssima intensidade e alcance para a segurança costeira."
      ],
      coreConcept: "A lente de Fresnel demonstra que o poder de focalização reside na curvatura da superfície refratora e não na espessura do bloco de vidro.",
      trapWarning: "A lente de Fresnel é uma lente refratora escalonada e não um espelho refletor parabólico."
    },
    commonTraps: [
      "Achar que a lente de Fresnel funciona por difração e não por refração geométrica.",
      "Acreditar que a espessura do vidro era necessária para manter o poder focal."
    ],
    tags: ["Física", "Óptica", "Lente de Fresnel", "Refração", "Tecnologia Óptica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
