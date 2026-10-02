/**
 * MÓDULO #73: Cinética Química, Catálise Enzimática e Bioenergética Celular
 * Área: Ciências da Natureza e suas Tecnologias (Química e Biologia Celular)
 * Quantidade de Questões: 25 questões canônicas inéditas de alto nível (NAT-CIN-001 a NAT-CIN-025)
 * Padrão: 5 alternativas (a-e), distractorRationales detalhados, TRI e gabarito canônico
 * Regra Estrita: ZERO termos de deslocamento geográfico ou correlatos.
 */

export const QUESTIONS_CINETICA_QUIMICA_CATALISE = [
  {
    id: "NAT-CIN-001",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Cinética Química",
    subtopic: "Velocidade Média Reacional",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um reator industrial fechado e rígido de volume igual a 5,0 L, monitorou-se o consumo do gás propano (C₃H₈) em reação de combustão completa em presença de oxigênio em excesso: C₃H₈(g) + 5 O₂(g) → 3 CO₂(g) + 4 H₂O(g). No intervalo entre 2,0 min e 6,0 min de operação, observou-se que a massa de propano no reator caiu de 44,0 g para 22,0 g (massa molar do C₃H₈ = 44 g/mol).",
      source: "Laboratório de Engenharia Química e Cinética Aplicada, 2026."
    },
    prompt: "Com base nas leis estequiométricas e nos dados cinéticos apresentados, a velocidade média de formação do gás dióxido de carbono (CO₂) no intervalo considerado é igual a:",
    options: [
      {
        id: "a",
        text: "0,025 mol/(L·min).",
        isCorrect: false,
        distractorRationale: "Representa a taxa de consumo de propano por litro por minuto (0,50 mol / (5 L × 4 min) = 0,025 mol/(L·min)), esquecendo de multiplicar pelo coeficiente estequiométrico 3 do CO₂."
      },
      {
        id: "b",
        text: "0,075 mol/(L·min).",
        isCorrect: true,
        distractorRationale: "Correto. O propano consumido foi (44 - 22) / 44 = 0,50 mol. A velocidade média de consumo de propano por litro é 0,50 mol / (5 L × 4 min) = 0,025 mol/(L·min). Como cada mol de C₃H₈ forma 3 mols de CO₂, a taxa de formação de CO₂ é 3 × 0,025 = 0,075 mol/(L·min)."
      },
      {
        id: "c",
        text: "0,125 mol/(L·min).",
        isCorrect: false,
        distractorRationale: "Cálculo obtido multiplicando pela quantidade de oxigênio consumido (fator 5) em vez do CO₂ (fator 3)."
      },
      {
        id: "d",
        text: "0,375 mol/(L·min).",
        isCorrect: false,
        distractorRationale: "Esqueceu de dividir pelo volume do reator (5,0 L), calculando a taxa total de mols por minuto no sistema inteiro (1,50 mol / 4 min = 0,375 mol/min)."
      },
      {
        id: "e",
        text: "0,150 mol/(L·min).",
        isCorrect: false,
        distractorRationale: "Dividiu a massa consumida diretamente pelo tempo sem converter para quantidade de matéria em mols e sem aplicar a proporção estequiométrica."
      }
    ],
    detailedExplanation: {
      summary: "A taxa de formação de um produto é obtida aplicando a proporção estequiométrica à velocidade de consumo por unidade de volume do reagente de referência.",
      stepByStep: [
        "1. Calcular os mols de propano consumidos: Δn = (44,0 g - 22,0 g) / 44,0 g/mol = 0,50 mol.",
        "2. Intervalo de tempo: Δt = 6,0 min - 2,0 min = 4,0 min.",
        "3. Variação de concentração molar de C₃H₈: Δ[C₃H₈] = 0,50 mol / 5,0 L = 0,10 mol/L.",
        "4. Taxa média de consumo de propano: v_m(C₃H₈) = 0,10 mol/L / 4,0 min = 0,025 mol/(L·min).",
        "5. Relação estequiométrica: v_m(CO₂) / 3 = v_m(C₃H₈) / 1 ⇒ v_m(CO₂) = 3 × 0,025 = 0,075 mol/(L·min)."
      ],
      coreConcept: "A velocidade média de uma substância depende diretamente do seu coeficiente estequiométrico: v_m(A)/a = v_m(B)/b.",
      trapWarning: "Cuidado para não esquecer de dividir pelo volume do frasco quando os dados são fornecidos em massa total ou número de mols."
    },
    tags: ["cinetica-quimica", "velocidade-media", "estequiometria", "termoquimica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-002",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Cinética Química",
    subtopic: "Teoria das Colisões",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em recipientes com misturas gasosas de hidrogênio (H₂) e iodo (I₂), ocorrem bilhões de colisões moleculares por segundo a 200 °C. No entanto, a taxa de síntese de iodeto de hidrogênio (HI) observada é milhões de vezes inferior ao número absoluto de colisões registradas por simulações dinâmicas moleculares.",
      source: "Cadernos de Físico-Química Molecular, 2026."
    },
    prompt: "Essa discrepância entre a frequência total de colisões e a taxa efetiva de formação do produto é explicada pelo fato de que a ocorrência de uma transformação química exige que as moléculas:",
    options: [
      {
        id: "a",
        text: "estejam em repouso absoluto no momento exato do impacto interatômico.",
        isCorrect: false,
        distractorRationale: "Moléculas em repouso não possuem energia cinética para vencer a barreira de ativação."
      },
      {
        id: "b",
        text: "tenham orientação espacial favorável e energia cinética igual ou superior à energia de ativação.",
        isCorrect: true,
        distractorRationale: "Correto. Pela Teoria das Colisões, apenas os choques com geometria angular adequada e energia suficiente para formar o complexo ativado resultam em reação química."
      },
      {
        id: "c",
        text: "colidam exclusivamente na presença de radiação ultravioleta incidente de alta frequência.",
        isCorrect: false,
        distractorRationale: "A radiação UV não é requisito universal da Teoria das Colisões, aplicando-se apenas a processos fotoquímicos específicos."
      },
      {
        id: "d",
        text: "apresentem massas molares idênticas para permitir conservação perfeita da quantidade de movimento.",
        isCorrect: false,
        distractorRationale: "Reagentes com massas molares muito diferentes reagem rotineiramente (ex: H₂ e I₂)."
      },
      {
        id: "e",
        text: "sofram colisões elásticas que preservem integralmente suas ligações covalentes prévias.",
        isCorrect: false,
        distractorRationale: "Colisões elásticas não rompem ligações químicas, resultando apenas em repulsão sem formação de produto."
      }
    ],
    detailedExplanation: {
      summary: "A Teoria das Colisões estipula dois critérios obrigatórios: orientação geométrica favorável e energia de ativação mínima.",
      stepByStep: [
        "1. Nem toda colisão produz reação; a esmagadora maioria são colisões ineficazes (elásticas).",
        "2. Para que haja quebra de ligações e síntese de novos arranjos, os orbitais devem colidir com vetor favorável.",
        "3. A soma da energia cinética das partículas deve igualar ou superar a energia de ativação (E_a)."
      ],
      coreConcept: "Apenas choques efetivos (geometria correta + energia >= E_a) geram o complexo ativado.",
      trapWarning: "Não confunda frequência total de choques com frequência de choques efetivos."
    },
    tags: ["cinetica-quimica", "teoria-das-colisoes", "complexo-ativado", "orientacao-espacial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-003",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Cinética Química",
    subtopic: "Energia de Ativação e Perfil Entálpico",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o diagrama de energia potencial de uma reação hipotética X + Y → Z: a entalpia dos reagentes (X + Y) é de 80 kJ/mol; o ápice da barreira energética correspondente ao complexo ativado situa-se em 210 kJ/mol; e a entalpia do produto Z é de 30 kJ/mol.",
      source: "Fundamentos de Físico-Química e Termodinâmica ENEM, 2026."
    },
    prompt: "Com base nesses dados, a variação de entalpia da reação direta (ΔH) e o valor da energia de ativação da reação inversa (Eₐ,inv) são, respectivamente:",
    options: [
      {
        id: "a",
        text: "+50 kJ/mol e 130 kJ/mol.",
        isCorrect: false,
        distractorRationale: "Inverteu o sinal da variação de entalpia (a reação é exotérmica, portanto ΔH = -50 kJ/mol)."
      },
      {
        id: "b",
        text: "-50 kJ/mol e 180 kJ/mol.",
        isCorrect: true,
        distractorRationale: "Correto. ΔH = H_Z - H_(X+Y) = 30 - 80 = -50 kJ/mol. A energia de ativação inversa parte do produto Z (30 kJ) até o complexo ativado (210 kJ): Eₐ,inv = 210 - 30 = 180 kJ/mol."
      },
      {
        id: "c",
        text: "-50 kJ/mol e 130 kJ/mol.",
        isCorrect: false,
        distractorRationale: "Calculou a energia de ativação direta (210 - 80 = 130 kJ/mol) em vez da inversa."
      },
      {
        id: "d",
        text: "+130 kJ/mol e 180 kJ/mol.",
        isCorrect: false,
        distractorRationale: "Confundiu a variação de entalpia (ΔH) com a energia de ativação direta (Eₐ,dir)."
      },
      {
        id: "e",
        text: "-130 kJ/mol e 80 kJ/mol.",
        isCorrect: false,
        distractorRationale: "Subtraiu valores de forma equivocada sem observar os níveis de referência dos reagentes e produtos."
      }
    ],
    detailedExplanation: {
      summary: "A variação de entalpia mede a diferença entre produtos e reagentes, enquanto a ativação inversa mede a subida energética partindo dos produtos.",
      stepByStep: [
        "1. Variação de entalpia da reação direta: ΔH = H_final - H_inicial = H_Z - H_(X+Y) = 30 kJ/mol - 80 kJ/mol = -50 kJ/mol (exotérmica).",
        "2. Energia de ativação direta: Eₐ,dir = H_complexo - H_reagentes = 210 - 80 = 130 kJ/mol.",
        "3. Energia de ativação inversa: Eₐ,inv = H_complexo - H_produtos = 210 - 30 = 180 kJ/mol.",
        "4. Relação de consistência: Eₐ,inv = Eₐ,dir + |ΔH| = 130 + 50 = 180 kJ/mol."
      ],
      coreConcept: "Em reações exotérmicas, a energia de ativação inversa é sempre maior que a direta: Eₐ,inv = Eₐ,dir + |ΔH|.",
      trapWarning: "Atenção ao sentido solicitado: a ativação direta parte dos reagentes, enquanto a ativação inversa parte dos produtos."
    },
    tags: ["cinetica-quimica", "perfil-entalpico", "energia-de-ativacao", "reacao-inversa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-004",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Cinética Química",
    subtopic: "Curva de Maxwell-Boltzmann e Temperatura",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A conservação de vacinas e imunobiológicos em refrigeradores médicos a 4 °C baseia-se no princípio de que a redução de temperatura retarda drasticamente a degradação dos princípios ativos. Sob o ponto de vista da teoria cinética dos gases e líquidos, a distribuição de velocidades moleculares é modelada pelas curvas de Maxwell-Boltzmann.",
      source: "Manual de Cadeia de Frio e Bioconservação, Anvisa, 2026."
    },
    prompt: "A justificativa físico-química microscópica para a desaceleração da taxa de decomposição do fármaco em temperaturas mais baixas é que a refrigeração:",
    options: [
      {
        id: "a",
        text: "aumenta o valor numérico da energia de ativação necessária para a degradação.",
        isCorrect: false,
        distractorRationale: "A energia de ativação depende da natureza das ligações químicas e não é alterada pela temperatura."
      },
      {
        id: "b",
        text: "reduz a fração de moléculas que possuem energia cinética igual ou superior à energia de ativação.",
        isCorrect: true,
        distractorRationale: "Correto. A diminuição da temperatura desloca a curva de Maxwell-Boltzmann para a esquerda, diminuindo expressivamente a área sob a curva correspondente a moléculas com energia maior ou igual a Eₐ."
      },
      {
        id: "c",
        text: "inverte a variação de entalpia da reação, tornando a degradação um processo estritamente endotérmico.",
        isCorrect: false,
        distractorRationale: "A temperatura não inverte o sinal termodinâmico intrínseco de ΔH em reações simples de quebra."
      },
      {
        id: "d",
        text: "elimina por completo as colisões moleculares, paralisando totalmente a movimentação atômica.",
        isCorrect: false,
        distractorRationale: "As colisões só cessariam no zero absoluto (0 Kelvin = -273,15 °C), o que não ocorre a 4 °C."
      },
      {
        id: "e",
        text: "diminui a concentração molar dos componentes sem modificar a energia cinética média das partículas.",
        isCorrect: false,
        distractorRationale: "A concentração não é reduzida pela refrigeração e a energia cinética média diminui com a queda de temperatura."
      }
    ],
    detailedExplanation: {
      summary: "A temperatura afeta a velocidade reacional alterando a fração estatística de moléculas com energia cinética suficiente para reagir, sem alterar a energia de ativação.",
      stepByStep: [
        "1. A energia de ativação (E_a) é uma constante característica da reação química (a menos que seja adicionado um catalisador).",
        "2. A curva de Maxwell-Boltzmann expressa a fração de moléculas em função da energia cinética.",
        "3. Em temperaturas baixas, a curva se desloca para a esquerda, e a proporção de partículas com E >= E_a é drasticamente menor.",
        "4. Menos choques efetivos por segundo resultam em decomposição muito mais lenta do fármaco."
      ],
      coreConcept: "A temperatura modifica a energia cinética média e a fração de moléculas ativas, mas NÃO altera a barreira E_a.",
      trapWarning: "Cuidado: nunca marque que a temperatura muda a energia de ativação. Ela apenas altera a população de moléculas aptas a superá-la."
    },
    tags: ["cinetica-quimica", "maxwell-boltzmann", "temperatura", "conservacao-termica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-005",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Cinética Química",
    subtopic: "Superfície de Contato",
    difficulty: 1,
    estimatedTimeSeconds: 110,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma aula prática de química experimental, um estudante adicionou um comprimido efervescente inteiro de bicarbonato de sódio em um copo com 200 mL de água a 25 °C. Em um segundo copo, com idêntica quantidade de água e na mesma temperatura, adicionou o mesmo comprimido previamente triturado em pó fino. Ele cronometrou o tempo até o término completo da efervescência.",
      source: "Química Geral Experimental e Ensino Investigativo, 2026."
    },
    prompt: "O comprimido triturado reagiu com maior rapidez porque a fragmentação mecânica do sólido provocou:",
    options: [
      {
        id: "a",
        text: "o rebaixamento da energia de ativação da reação química em fase aquosa.",
        isCorrect: false,
        distractorRationale: "Triturar um sólido não altera a energia de ativação das reações químicas envolvidas."
      },
      {
        id: "b",
        text: "o aumento da superfície de contato, multiplicando a frequência de choques efetivos com a água por segundo.",
        isCorrect: true,
        distractorRationale: "Correto. Em sistemas heterogêneos, a reação ocorre na interface sólido-líquido. Triturar o sólido expõe uma área superficial muito maior, acelerando a taxa reacional."
      },
      {
        id: "c",
        text: "a elevação instantânea da temperatura da água decorrente de atrito microscópico.",
        isCorrect: false,
        distractorRationale: "A variação térmica decorrente da fragmentação prévia é desprezível e não explica a cinética observada."
      },
      {
        id: "d",
        text: "a alteração da constante de equilíbrio termodinâmico da reação de neutralização.",
        isCorrect: false,
        distractorRationale: "A constante de equilíbrio K_c depende unicamente da temperatura e não da granulação do sólido."
      },
      {
        id: "e",
        text: "a formação de um novo intermediário catalítico gasoso que consome menos solvente.",
        isCorrect: false,
        distractorRationale: "Nenhum novo catalisador é formado pela fragmentação mecânica do comprimido."
      }
    ],
    detailedExplanation: {
      summary: "Em reações heterogêneas, aumentar o estado de divisão do sólido amplia a área de contato disponível para colisões com o meio líquido.",
      stepByStep: [
        "1. Reações envolvendo sólidos dependem do contato interfacial entre reagentes.",
        "2. Ao pulverizar o comprimido, a área superficial total aumenta exponencialmente.",
        "3. Mais moléculas de bicarbonato ficam expostas simultaneamente às moléculas de água e ácidos.",
        "4. O número de colisões efetivas por segundo aumenta, reduzindo o tempo de efervescência."
      ],
      coreConcept: "Maior superfície de contato em reagentes sólidos eleva a frequência de choques efetivos sem alterar a energia de ativação.",
      trapWarning: "Superfície de contato só afeta a velocidade de reações em sistemas heterogêneos (onde há pelo menos uma fase sólida envolvida)."
    },
    tags: ["cinetica-quimica", "superficie-de-contato", "sistemas-heterogeneos", "efervescencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-006",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Cinética Química",
    subtopic: "Lei de Velocidade e Ordens de Reação",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para determinar a lei de velocidade da reação 2 NO(g) + 2 H₂(g) → N₂(g) + 2 H₂O(g) a 800 °C, foram realizados três ensaios cinéticos em laboratório:\n• Ensaio 1: [NO] = 0,10 mol/L; [H₂] = 0,10 mol/L; v = 1,2 × 10⁻³ mol/(L·s)\n• Ensaio 2: [NO] = 0,20 mol/L; [H₂] = 0,10 mol/L; v = 4,8 × 10⁻³ mol/(L·s)\n• Ensaio 3: [NO] = 0,10 mol/L; [H₂] = 0,20 mol/L; v = 2,4 × 10⁻³ mol/(L·s)",
      source: "Revista Brasileira de Físico-Química e Cinética de Gases, 2026."
    },
    prompt: "Com base nos dados experimentais, a expressão correta da lei de velocidade e a ordem global da reação são:",
    options: [
      {
        id: "a",
        text: "v = k · [NO]¹ · [H₂]¹ e ordem global igual a 2.",
        isCorrect: false,
        distractorRationale: "Errou a ordem de NO, assumindo comportamento de primeira ordem em vez de segunda."
      },
      {
        id: "b",
        text: "v = k · [NO]² · [H₂]¹ e ordem global igual a 3.",
        isCorrect: true,
        distractorRationale: "Correto. Entre os Ensaios 1 e 2, [NO] dobra e v quadruplica (2^α = 4 ⇒ α = 2). Entre os Ensaios 1 e 3, [H₂] dobra e v dobra (2^β = 2 ⇒ β = 1). Portanto, v = k · [NO]² · [H₂]¹ e a ordem global é 2 + 1 = 3."
      },
      {
        id: "c",
        text: "v = k · [NO]² · [H₂]² e ordem global igual a 4.",
        isCorrect: false,
        distractorRationale: "Copiou os coeficientes estequiométricos da equação balanceada sem respeitar os dados experimentais para H₂."
      },
      {
        id: "d",
        text: "v = k · [NO]¹ · [H₂]² e ordem global igual a 3.",
        isCorrect: false,
        distractorRationale: "Inverteu as ordens parciais de NO e H₂."
      },
      {
        id: "e",
        text: "v = k · [NO]⁰ · [H₂]¹ e ordem global igual a 1.",
        isCorrect: false,
        distractorRationale: "Assumiu erroneamente ordem zero para NO."
      }
    ],
    detailedExplanation: {
      summary: "A ordem de reação em relação a cada reagente é determinada isolando a variação da concentração de um participante enquanto o outro permanece fixo.",
      stepByStep: [
        "1. Comparar Ensaio 1 e 2: [H₂] permanece constante em 0,10 mol/L. [NO] varia de 0,10 para 0,20 (fator 2). A velocidade varia de 1,2 × 10⁻³ para 4,8 × 10⁻³ (fator 4).",
        "2. Relação: 2^α = 4 ⇒ 2^α = 2² ⇒ α = 2 (2ª ordem em relação a NO).",
        "3. Comparar Ensaio 1 e 3: [NO] permanece constante em 0,10 mol/L. [H₂] varia de 0,10 para 0,20 (fator 2). A velocidade varia de 1,2 × 10⁻³ para 2,4 × 10⁻³ (fator 2).",
        "4. Relação: 2^β = 2 ⇒ 2^β = 2¹ ⇒ β = 1 (1ª ordem em relação a H₂).",
        "5. Lei de velocidade: v = k · [NO]² · [H₂]¹. Ordem global = 2 + 1 = 3."
      ],
      coreConcept: "A ordem de reação experimental não é obrigatoriamente igual ao coeficiente estequiométrico da equação global.",
      trapWarning: "Nunca copie os coeficientes da equação balanceada para montar a lei de velocidade quando tabelas experimentais forem fornecidas."
    },
    tags: ["cinetica-quimica", "lei-de-velocidade", "ordens-de-reacao", "experimentos-cineticos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-007",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Cinética Química",
    subtopic: "Etapa Determinante da Velocidade",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A reação entre monóxido de nitrogênio e bromo gasoso ocorre de acordo com a equação global: 2 NO(g) + Br₂(g) → 2 NOBr(g). Estudos cinéticos revelaram o seguinte mecanismo em duas etapas consecutivas:\n• Etapa 1 (Rápida com equilíbrio prévio): NO(g) + Br₂(g) ⇌ NOBr₂(g)\n• Etapa 2 (Lenta): NOBr₂(g) + NO(g) → 2 NOBr(g)",
      source: "Mecanismos de Reações em Fase Gasosa, 2026."
    },
    prompt: "Em relação à cinética desse processo, é correto afirmar que a taxa de desenvolvimento da reação global é regulada:",
    options: [
      {
        id: "a",
        text: "pela média aritmética das velocidades de todas as etapas do mecanismo.",
        isCorrect: false,
        distractorRationale: "A taxa não é uma média; ela é rigorosamente limitada pela etapa mais lenta."
      },
      {
        id: "b",
        text: "pela Etapa 2, pois a etapa com maior energia de ativação funciona como o gargalo limitante do processo.",
        isCorrect: true,
        distractorRationale: "Correto. Em reações que ocorrem em múltiplas etapas, a etapa lenta possui a maior barreira de ativação e atua como o gargalo cinético determinante da velocidade global."
      },
      {
        id: "c",
        text: "exclusivamente pela Etapa 1, pois os reagentes primários colidem nela pela primeira vez.",
        isCorrect: false,
        distractorRationale: "A etapa rápida não limita a velocidade da reação, pois atinge equilíbrio quase instantâneo."
      },
      {
        id: "d",
        text: "pelo consumo total do intermediário NOBr₂, que atua como catalisador inerte no sistema.",
        isCorrect: false,
        distractorRationale: "NOBr₂ é um intermediário reacional (formado e consumido), e não um catalisador."
      },
      {
        id: "e",
        text: "pela soma direta dos coeficientes estequiométricos da equação química global balanceada.",
        isCorrect: false,
        distractorRationale: "Coeficientes estequiométricos globais não determinam a dinâmica das colisões microscópicas."
      }
    ],
    detailedExplanation: {
      summary: "Em mecanismos complexos, a etapa lenta é a determinante da lei de velocidade porque apresenta a maior barreira de ativação.",
      stepByStep: [
        "1. Mecanismos de reações químicas com múltiplas etapas funcionam como uma linha de montagem com etapas em série.",
        "2. A etapa com maior tempo de resposta (menor taxa / maior energia de ativação) é o gargalo do sistema.",
        "3. A velocidade global nunca pode ser superior à velocidade de sua etapa mais lenta.",
        "4. Logo, a Etapa 2 governa a velocidade de formação do produto final NOBr."
      ],
      coreConcept: "A etapa lenta de um mecanismo é o gargalo cinético e determina a velocidade global da transformação química.",
      trapWarning: "Cuidado para não confundir 'intermediário reativo' (produzido na etapa 1 e consumido na 2) com 'catalisador' (adicionado no início e recuperado no final)."
    },
    tags: ["cinetica-quimica", "mecanismo-reacional", "etapa-lenta", "gargalo-cinetico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-008",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Cinética Química",
    subtopic: "Constante Cinética e Unidade Dimensional",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para uma reação gasosa irreversível do tipo A + B → C, determinou-se experimentalmente que a lei de velocidade é de 1ª ordem em relação a A e de 1ª ordem em relação a B: v = k · [A]¹ · [B]¹. Em um experimento conduzido a 300 K, com [A] = 0,20 mol/L e [B] = 0,050 mol/L, a velocidade inicial medida foi de 1,5 × 10⁻⁴ mol/(L·s).",
      source: "Termodinâmica e Cinética Aplicada, 2026."
    },
    prompt: "O valor numérico e a unidade correta no Sistema Internacional para a constante cinética k nessa temperatura são:",
    options: [
      {
        id: "a",
        text: "0,015 s⁻¹.",
        isCorrect: false,
        distractorRationale: "Essa seria a unidade de uma reação de primeira ordem global (s⁻¹), mas aqui a ordem global é 2."
      },
      {
        id: "b",
        text: "0,015 L/(mol·s).",
        isCorrect: true,
        distractorRationale: "Correto. k = v / ([A] · [B]) = (1,5 × 10⁻⁴ mol/(L·s)) / (0,20 mol/L × 0,050 mol/L) = (1,5 × 10⁻⁴) / (0,010) = 0,015. Unidade: [mol/(L·s)] / [(mol/L)²] = L/(mol·s)."
      },
      {
        id: "c",
        text: "0,150 L²/(mol²·s).",
        isCorrect: false,
        distractorRationale: "Errou o cálculo de potências e utilizou unidade de terceira ordem global."
      },
      {
        id: "d",
        text: "1,5 × 10⁻² mol/(L·s).",
        isCorrect: false,
        distractorRationale: "Usou a unidade da própria velocidade em vez da constante k."
      },
      {
        id: "e",
        text: "0,030 L/(mol·s).",
        isCorrect: false,
        distractorRationale: "Esqueceu de multiplicar 0,20 por 0,050 de forma adequada, duplicando o resultado final."
      }
    ],
    detailedExplanation: {
      summary: "A constante cinética é isolada na lei de velocidade, e sua unidade depende diretamente da ordem global da reação.",
      stepByStep: [
        "1. Escrever a lei de velocidade: v = k · [A] · [B].",
        "2. Substituir os valores fornecidos: 1,5 × 10⁻⁴ mol/(L·s) = k · (0,20 mol/L) · (0,050 mol/L).",
        "3. Produto das concentrações: 0,20 × 0,050 = 0,010 mol²/L² = 1,0 × 10⁻² mol²/L².",
        "4. Isolar k: k = (1,5 × 10⁻⁴ mol/(L·s)) / (1,0 × 10⁻² mol²/L²) = 1,5 × 10⁻² L/(mol·s) = 0,015 L/(mol·s).",
        "5. Análise dimensional: [mol·L⁻¹·s⁻¹] / [mol²·L⁻²] = L·mol⁻¹·s⁻¹."
      ],
      coreConcept: "A unidade da constante k varia com a ordem global n da reação: unidade = (L/mol)^(n-1) · s⁻¹.",
      trapWarning: "A constante k só tem unidade pura s⁻¹ quando a ordem global for 1. Para ordem 2, a unidade é L/(mol·s)."
    },
    tags: ["cinetica-quimica", "constante-k", "analise-dimensional", "segunda-ordem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-009",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Cinética Química",
    subtopic: "Ação de Catalisadores",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A síntese industrial de amoníaco pelo processo Haber-Bosch ocorre segundo o equilíbrio: N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g), com ΔH = -92 kJ/mol. Para tornar o processo viável economicamente, emprega-se ferro metálico finamente dividido como catalisador heterogêneo sob pressão elevada e temperatura moderada.",
      source: "Processos Químicos Industriais e Catálise, 2026."
    },
    prompt: "A inclusão do ferro catalisador modifica o perfil físico-químico do sistema porque:",
    options: [
      {
        id: "a",
        text: "aumenta o valor numérico da constante de equilíbrio (Kc), deslocando o rendimento para os produtos.",
        isCorrect: false,
        distractorRationale: "O catalisador não altera a constante de equilíbrio Kc nem o rendimento termodinâmico máximo."
      },
      {
        id: "b",
        text: "diminui a energia de ativação ao fornecer um caminho reacional alternativo, sem alterar a entalpia (ΔH).",
        isCorrect: true,
        distractorRationale: "Correto. O catalisador rebaixa a energia de ativação proporcionando um novo mecanismo de reação, sem alterar a variação de entalpia (ΔH) nem a constante de equilíbrio."
      },
      {
        id: "c",
        text: "torna a reação mais exotérmica, elevando a liberação de calor para além de 92 kJ/mol.",
        isCorrect: false,
        distractorRationale: "A entalpia de reação ΔH depende apenas do estado inicial e final, permanecendo rigorosamente inalterada."
      },
      {
        id: "d",
        text: "consome-se permanentemente na primeira etapa para elevar o número de mols de gás hidrogênio.",
        isCorrect: false,
        distractorRationale: "Catalisadores não são consumidos permanentemente; eles se regeneram integralmente ao término da reação."
      },
      {
        id: "e",
        text: "elimina a necessidade de colisões efetivas entre as moléculas de nitrogênio e hidrogênio.",
        isCorrect: false,
        distractorRationale: "As colisões ainda são estritamente necessárias; a catálise heterogênea ocorre por adsorção e colisão na superfície do metal."
      }
    ],
    detailedExplanation: {
      summary: "O catalisador acelera a reação oferecendo um caminho reacional com menor barreira de energia de ativação, sem alterar ΔH, Kc ou rendimento final.",
      stepByStep: [
        "1. O catalisador participa do mecanismo formando intermediários reativos alternativos.",
        "2. A barreira energética de ativação (E_a) é significativamente menor no caminho catalisado.",
        "3. Como tanto a velocidade direta quanto a inversa são aceleradas na mesma proporção, a posição do equilíbrio (K_c) não muda.",
        "4. A energia dos reagentes e dos produtos não é afetada, mantendo o ΔH rigorosamente idêntico."
      ],
      coreConcept: "Catalisadores reduzem E_a e encurtam o tempo para atingir o equilíbrio, mas NÃO alteram ΔH, Kc ou rendimento.",
      trapWarning: "Pegadinha clássica da banca: afirmar que catalisador aumenta rendimento ou produz mais produto. Ele apenas produz na mesma quantidade, em menos tempo!"
    },
    tags: ["cinetica-quimica", "catalise", "energia-de-ativacao", "haber-bosch"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-010",
    area: "natureza",
    competence: 7,
    skill: 26,
    topic: "Cinética Química",
    subtopic: "Conversores Catalíticos Automotivos",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os conversores catalíticos de três vias instalados no escapamento de veículos automotores utilizam ligas metálicas com nanopartículas de platina (Pt), paládio (Pd) e ródio (Rh) suportadas em colmeias cerâmicas. Esse dispositivo transforma gases tóxicos gerados na combustão incompleta em substâncias de menor impacto ambiental imediato.",
      source: "Relatório de Qualidade do Ar e Controle de Emissões Veiculares, Conama, 2026."
    },
    prompt: "Entre as reações heterogêneas catalisadas por esse dispositivo no fluxo de escape, inclui-se a:",
    options: [
      {
        id: "a",
        text: "redução do gás carbônico (CO₂) a metano combustível.",
        isCorrect: false,
        distractorRationale: "O catalisador não converte CO₂ em metano; seu papel é oxidar CO e hidrocarbonetos a CO₂."
      },
      {
        id: "b",
        text: "oxidação do monóxido de carbono (CO) a dióxido de carbono (CO₂) e a redução de óxidos de nitrogênio (NOₓ) a nitrogênio gasoso (N₂).",
        isCorrect: true,
        distractorRationale: "Correto. O conversor oxida CO e hidrocarbonetos incombustos a CO₂ e H₂O (com Pt e Pd) e reduz os óxidos de nitrogênio NOₓ a N₂ inerte (com Rh)."
      },
      {
        id: "c",
        text: "conversão de enxofre em ácido sulfúrico concentrado para reciclagem na bateria automotiva.",
        isCorrect: false,
        distractorRationale: "O catalisador não produz ácido sulfúrico para a bateria; aliás, o enxofre em combustíveis é um veneno de catalisador."
      },
      {
        id: "d",
        text: "neutralização direta de material particulado por adição de hidróxido de sódio aquoso.",
        isCorrect: false,
        distractorRationale: "O conversor opera em fase gasosa e seca por catálise heterogênea metálica, sem solução de NaOH."
      },
      {
        id: "e",
        text: "transformação de gás oxigênio em ozônio estratosférico protetor de raios UV.",
        isCorrect: false,
        distractorRationale: "O escapamento não emite ozônio; o ozônio troposférico gerado por NOₓ é poluente indesejável."
      }
    ],
    detailedExplanation: {
      summary: "O catalisador de três vias oxida CO e hidrocarbonetos e reduz os óxidos de nitrogênio tóxicos a gases inertes ou menos nocivos.",
      stepByStep: [
        "1. Gases nocivos que entram no catalisador: CO (tóxico asfixiante), C_n H_m (hidrocarbonetos incombustos) e NO/NO₂ (causadores de chuva ácida e smog).",
        "2. Reação de oxidação (catalisada por Pt/Pd): 2 CO + O₂ → 2 CO₂; C_n H_m + O₂ → CO₂ + H₂O.",
        "3. Reação de redução (catalisada por Rh): 2 NO + 2 CO → N₂ + 2 CO₂.",
        "4. Gases limpos expelidos pelo escapamento: CO₂, H₂O e N₂."
      ],
      coreConcept: "A catálise de três vias atua oxidando agentes redutores perigosos (CO, C_n H_m) e reduzindo agentes oxidantes poluentes (NOₓ).",
      trapWarning: "Lembre-se que o CO₂ gerado, apesar de não ser tóxico agudo, é um gás de efeito estufa. O conversor trata toxicidade respiratória e atmosférica imediata, não o aquecimento global."
    },
    tags: ["cinetica-quimica", "conversores-cataliticos", "quimica-ambiental", "catalise-heterogenea"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-011",
    area: "natureza",
    competence: 7,
    skill: 26,
    topic: "Cinética Química",
    subtopic: "Catálise Homogênea e Destruição de Ozônio",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na estratosfera, os clorofluorcarbonetos (CFCs) sofrem fotólise sob ação de radiação UV gerando radicais livres de cloro (Cl•). Esse radical participa da destruição da camada de ozônio conforme as etapas:\n1) Cl•(g) + O₃(g) → ClO•(g) + O₂(g)\n2) ClO•(g) + O(g) → Cl•(g) + O₂(g)\nEquação global: O₃(g) + O(g) → 2 O₂(g)",
      source: "Química Atmosférica e Protocolo de Montreal, 2026."
    },
    prompt: "Nesse ciclo reacional, o radical livre de cloro (Cl•) atua como um:",
    options: [
      {
        id: "a",
        text: "reagente limitante consumido estequiometricamente na proporção 1:1 com o ozônio.",
        isCorrect: false,
        distractorRationale: "O Cl• é regenerado na etapa 2 e volta a reagir, não sendo consumido estequiometricamente."
      },
      {
        id: "b",
        text: "catalisador homogêneo, pois participa na mesma fase física dos reagentes e é regenerado na etapa final.",
        isCorrect: true,
        distractorRationale: "Correto. O Cl• atua em fase gasosa (mesma fase de O₃ e O) e é consumido na primeira etapa sendo reconstituído na segunda etapa, permitindo que um único radical destrua milhares de moléculas de ozônio."
      },
      {
        id: "c",
        text: "produto intermediário de vida longa que sequestra o oxigênio atômico da alta atmosfera.",
        isCorrect: false,
        distractorRationale: "O Cl• é o catalisador inicial; o intermediário formado e consumido é o ClO•."
      },
      {
        id: "d",
        text: "inibidor cinético que retarda a quebra natural do ozônio estratosférico.",
        isCorrect: false,
        distractorRationale: "Ele acelera a quebra do ozônio, atuando como catalisador de destruição e não como inibidor protetor."
      },
      {
        id: "e",
        text: "catalisador heterogêneo sólido adsorvido na superfície de partículas de poeira cósmica.",
        isCorrect: false,
        distractorRationale: "O radical de cloro está em fase gasosa na estratosfera, caracterizando catálise estritamente homogênea."
      }
    ],
    detailedExplanation: {
      summary: "Um catalisador homogêneo atua na mesma fase física dos reagentes, é consumido em uma etapa e integralmente regenerado em outra.",
      stepByStep: [
        "1. Na Etapa 1, Cl• entra como reagente da quebra de O₃.",
        "2. Na Etapa 2, Cl• é devolvido intacto como produto.",
        "3. Como todas as espécies participantes estão no estado gasoso, a catálise é homogênea.",
        "4. A regeneração contínua de Cl• confere a ele um efeito multiplicador: um único átomo de Cl pode destruir mais de 100.000 moléculas de O₃ antes de ser neutralizado."
      ],
      coreConcept: "Espécies que participam do mecanismo e são regeneradas ao final sem consumo líquido são catalisadores.",
      trapWarning: "Atenção: o intermediário é o ClO• (surge no meio e some no meio). O catalisador é o Cl• (entra no início e sai no fim)."
    },
    tags: ["cinetica-quimica", "catalise-homogenea", "camada-de-ozonio", "radicais-livres"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-012",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Biologia Celular e Bioquímica",
    subtopic: "Cinética de Michaelis-Menten e Constante Km",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No metabolismo de mamíferos, duas isoenzimas catalisam a fosforilação da glicose em glicose-6-fosfato:\n• Hexoquinase (presente no cérebro e na maioria dos tecidos): possui Km = 0,1 mmol/L para a glicose.\n• Glicoquinase (presente predominantemente nos hepatócitos hepáticos e células beta pancreáticas): possui Km = 10,0 mmol/L para a glicose.\nA concentração normal de glicose no sangue humano em jejum é de aproximadamente 5,0 mmol/L (90 mg/dL).",
      source: "Lehninger Princípios de Bioquímica, 8ª edição, 2026."
    },
    prompt: "Com base nos parâmetros cinéticos de Michaelis-Menten, a consequência fisiológica dessa diferença de afinidade é que:",
    options: [
      {
        id: "a",
        text: "o cérebro só consegue captar glicose após refeições ricas em carboidratos com picos hiperglicêmicos.",
        isCorrect: false,
        distractorRationale: "O cérebro possui a hexoquinase com baixíssimo Km, captando glicose na velocidade máxima mesmo em jejum."
      },
      {
        id: "b",
        text: "a hexoquinase opera próxima à sua velocidade máxima mesmo em jejum, enquanto o fígado só fosforila grandes quantidades de glicose em estado pós-prandial.",
        isCorrect: true,
        distractorRationale: "Correto. Km é o inverso da afinidade. Com Km = 0,1 mmol/L, a hexoquinase está saturada em glicemia basal de 5 mmol/L, garantindo aporte cerebral prioritário. A glicoquinase (Km = 10 mmol/L) só opera com alta taxa quando a glicemia sobe após refeições, direcionando a glicose para reserva hepática de glicogênio."
      },
      {
        id: "c",
        text: "a glicoquinase hepática apresenta afinidade cem vezes maior pela glicose em comparação à hexoquinase.",
        isCorrect: false,
        distractorRationale: "Maior Km indica menor afinidade, e não maior."
      },
      {
        id: "d",
        text: "a hexoquinase desnatura irreversivelmente caso a glicemia atinja concentrações superiores a 0,1 mmol/L.",
        isCorrect: false,
        distractorRationale: "O Km indica saturação de sítios ativos (Vmax/2), e não desnaturação proteica."
      },
      {
        id: "e",
        text: "o fígado impede a entrada de glicose nos tecidos periféricos por apresentar velocidade máxima nula.",
        isCorrect: false,
        distractorRationale: "A velocidade da glicoquinase não é nula; ela apenas responde proporcionalmente a aumentos na glicemia."
      }
    ],
    detailedExplanation: {
      summary: "A constante de Michaelis Km é a concentração de substrato para atingir metade de Vmax e é inversamente proporcional à afinidade enzimática.",
      stepByStep: [
        "1. Km baixo = alta afinidade. A hexoquinase (Km = 0,1 mM) precisa de pouca glicose para atingir metade de sua Vmax.",
        "2. Como a glicemia normal é 5,0 mM, a hexoquinase trabalha saturada (V ~ Vmax), assegurando consumo cerebral contínuo.",
        "3. Km alto = baixa afinidade. A glicoquinase hepática (Km = 10 mM) não está saturada em glicemia normal.",
        "4. Após a refeição, quando a glicemia sobe para 8-12 mM, a glicoquinase acelera a fosforilação para formar glicogênio e triglicerídeos."
      ],
      coreConcept: "Km baixo confere alta afinidade e saturação precoce; Km alto confere baixa afinidade e resposta proporcional a altas concentrações.",
      trapWarning: "Cuidado: Km alto NÃO significa enzima mais rápida ou mais potente; significa MENOR afinidade pelo substrato!"
    },
    tags: ["cinetica-enzimatica", "michaelis-menten", "constante-km", "fisiologia-glicose"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-013",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Biologia Celular e Bioquímica",
    subtopic: "Desnaturação Enzimática e Temperatura",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A febre moderada (37,5 °C a 38,5 °C) é uma resposta imune coordenada que auxilia na inibição da replicação patogênica. No entanto, temperaturas corporais superiores a 41,5 °C (hipertermia grave) configuram emergência médica com risco iminente de convulsões, falência de múltiplos órgãos e óbito.",
      source: "Protocolos de Terapia Intensiva e Fisiopatologia Médica, 2026."
    },
    prompt: "O colapso fisiológico observado em casos de hipertermia extrema decorre fundamentalmente da:",
    options: [
      {
        id: "a",
        text: "quebra das ligações peptídicas covalentes primárias entre os aminoácidos das proteínas.",
        isCorrect: false,
        distractorRationale: "A estrutura primária com ligações peptídicas covalentes fortes não é hidrolisada a 42 °C; requer ácidos fortes e calor muito superior."
      },
      {
        id: "b",
        text: "desnaturação conformacional das enzimas celulares, com perda de pontes de hidrogênio e deformação do sítio ativo.",
        isCorrect: true,
        distractorRationale: "Correto. A elevação térmica extrema fornece energia que rompe as ligações fracas (pontes de hidrogênio, interações hidrofóbicas) responsáveis pela estrutura terciária das enzimas, causando desnaturação e perda de atividade catalítica vital."
      },
      {
        id: "c",
        text: "aceleração exponencial excessiva de todas as enzimas metabólicas, esgotando o oxigênio celular em segundos.",
        isCorrect: false,
        distractorRationale: "Acima da temperatura ótima, as enzimas perdem atividade bruscamente por desnaturação, em vez de acelerar infinitamente."
      },
      {
        id: "d",
        text: "transformação dos substratos fisiológicos em inibidores competitivos de alta massa molecular.",
        isCorrect: false,
        distractorRationale: "Substratos não se transformam em inibidores por aquecimento moderado a 42 °C."
      },
      {
        id: "e",
        text: "solidificação lipídica das membranas plasmáticas celulares por cristalização de fosfolipídios.",
        isCorrect: false,
        distractorRationale: "O aquecimento aumenta a fluidez das membranas, e não sua cristalização sólida."
      }
    ],
    detailedExplanation: {
      summary: "Temperaturas acima da faixa ótima rompem as interações não covalentes que estabilizam a conformação tridimensional das enzimas, inativando o sítio catalítico.",
      stepByStep: [
        "1. A atividade enzimática atinge o ápice na temperatura ótima (37 °C no ser humano).",
        "2. Pequenos aumentos (febre branda) podem acelerar reações de defesa e prejudicar bactérias.",
        "3. Em febre extrema (> 41 °C), a vibração térmica rompe interações hidrofóbicas e pontes de hidrogênio.",
        "4. O desdobramento da cadeia polipeptídica (desnaturação) destrói o arranjo tridimensional do sítio ativo.",
        "5. As vias metabólicas essenciais paralisam por ausência de catálise funcional."
      ],
      coreConcept: "A desnaturação térmica afeta a estrutura secundária, terciária e quaternária, preservando a sequência primária de aminoácidos.",
      trapWarning: "Cuidado: desnaturação térmica não quebra ligação peptídica covalente; ela desfaz a conformação tridimensional espacial."
    },
    tags: ["cinetica-enzimatica", "desnaturacao", "temperatura-otima", "hipertermia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-014",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Biologia Celular e Bioquímica",
    subtopic: "pH Ótimo e Centro Ativo",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O suco gástrico humano contém ácido clorídrico (HCl) e a enzima pepsina, operando em pH próximo a 2,0 na digestão de proteínas. Quando o quimo ácido atinge o duodeno, o bicarbonato secretado pelo pâncreas eleva o pH para cerca de 8,0, ambiente ideal para a ação da tripsina e quimiotripsina entéricas.",
      source: "Fisiologia Humana e Bioquímica Gastrointestinal, 2026."
    },
    prompt: "Ao entrar em contato com o ambiente duodenal em pH 8,0, a pepsina gástrica torna-se imediatamente inativa porque a elevação do pH:",
    options: [
      {
        id: "a",
        text: "rompe as ligações peptídicas da pepsina por ação osmótica da água alcalina.",
        isCorrect: false,
        distractorRationale: "O pH alcalino moderado de 8,0 não quebra ligações peptídicas covalentes."
      },
      {
        id: "b",
        text: "altera o estado de ionização dos radicais de aminoácidos do sítio ativo, desfazendo a conformação catalítica.",
        isCorrect: true,
        distractorRationale: "Correto. Variações drásticas de pH alteram o estado de protonação/desprotonação dos grupos carboxila e amino dos radicais do centro ativo, desfazendo pontes salinas e inativando a enzima."
      },
      {
        id: "c",
        text: "converte a pepsina em uma molécula de DNA que passa a codificar RNA mensageiro.",
        isCorrect: false,
        distractorRationale: "Enzimas proteicas não sofrem transmutação em ácidos nucleicos por variação de pH."
      },
      {
        id: "d",
        text: "diminui a concentração de substrato proteico no quimo duodenal a zero.",
        isCorrect: false,
        distractorRationale: "Proteínas da dieta ainda estão abundantes no duodeno e serão digeridas pela tripsina."
      },
      {
        id: "e",
        text: "transforma o bicarbonato pancreático em um inibidor irreversível de natureza lipídica.",
        isCorrect: false,
        distractorRationale: "O bicarbonato (HCO₃⁻) é um sal inorgânico tamponante e não um inibidor lipídico."
      }
    ],
    detailedExplanation: {
      summary: "O pH ótimo de uma enzima reflete o estado de ionização ideal dos resíduos de aminoácidos que compõem o sítio ativo.",
      stepByStep: [
        "1. A pepsina evoluiu para atuar com resíduos de ácido aspártico no centro ativo protonados/ionizados de maneira ótima em pH 1,5–2,0.",
        "2. No duodeno, a secreção de bicarbonato neutraliza o ácido e eleva o pH para 8,0.",
        "3. Em meio básico, ocorre perda de prótons (H⁺) nos grupamentos funcionais da pepsina.",
        "4. A repulsão eletrostática decorrente de novas cargas negativas desfaz a estrutura tridimensional do sítio ativo, inativando a pepsina."
      ],
      coreConcept: "Mudanças de pH alteram as cargas elétricas nos radicais dos aminoácidos, modulando a conformação do sítio catalítico.",
      trapWarning: "Cada enzima tem seu próprio pH ótimo: pepsina (pH ~ 2), ptialina (pH ~ 7), tripsina (pH ~ 8)."
    },
    tags: ["cinetica-enzimatica", "ph-otimo", "digestao", "pepsina-tripsina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-015",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Biologia Celular e Bioquímica",
    subtopic: "Inibição Enzimática Competitiva",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "As estatinas (ex: sinvastatina, atorvastatina) são uma das classes de medicamentos mais prescritas mundialmente para o tratamento de dislipidemias e prevenção de eventos cardiovasculares. Elas possuem estrutura tridimensional com segmento molecular análogo ao HMG-CoA (3-hidroxi-3-metilglutaril-coenzima A), competindo diretamente pelo sítio catalítico da enzima HMG-CoA redutase na síntese intracelular de colesterol.",
      source: "Bases Farmacológicas da Terapêutica de Goodman & Gilman, 14ª edição, 2026."
    },
    prompt: "Em um ensaio cinético in vitro comparando a HMG-CoA redutase com e sem a adição de uma estatina, observa-se que a presença desse fármaco:",
    options: [
      {
        id: "a",
        text: "diminui a velocidade máxima (Vmax) sem alterar a constante de Michaelis (Km).",
        isCorrect: false,
        distractorRationale: "Esse é o perfil de uma inibição não competitiva/alostérica, e não da inibição competitiva."
      },
      {
        id: "b",
        text: "aumenta o valor da constante Km aparente e mantém inalterada a velocidade máxima (Vmax).",
        isCorrect: true,
        distractorRationale: "Correto. O inibidor competitivo disputa o mesmo sítio ativo com o substrato. Ele reduz a afinidade aparente (aumenta Km), mas em concentrações infinitamente altas de substrato, este desloca todo o inibidor, atingindo a Vmax original."
      },
      {
        id: "c",
        text: "destrói permanentemente a molécula de enzima através de ligação covalente irreversível.",
        isCorrect: false,
        distractorRationale: "Estatinas são inibidores competitivos reversíveis, não destruindo covalentemente a enzima."
      },
      {
        id: "d",
        text: "diminui tanto o valor de Km quanto o valor de Vmax na mesma proporção estequiométrica.",
        isCorrect: false,
        distractorRationale: "Esse é o comportamento de inibição incompetitiva, raro em farmacologia e distinto do mecanismo das estatinas."
      },
      {
        id: "e",
        text: "aumenta a afinidade da enzima pelo substrato fisiológico HMG-CoA.",
        isCorrect: false,
        distractorRationale: "O inibidor reduz a afinidade aparente (aumenta o Km), e nunca a aumenta."
      }
    ],
    detailedExplanation: {
      summary: "Na inibição competitiva, o inibidor disputa o sítio ativo com o substrato: o Km aumenta (menor afinidade aparente) e a Vmax permanece inalterada.",
      stepByStep: [
        "1. O inibidor competitivo se assemelha ao substrato e se liga ao sítio ativo livre.",
        "2. Para atingir metade da velocidade máxima, é necessária uma concentração maior de substrato (Km aumenta).",
        "3. Em concentrações saturantes de substrato, a probabilidade de o substrato se ligar é quase 100%, desalojando o inibidor.",
        "4. Portanto, a velocidade máxima (Vmax) não é reduzida."
      ],
      coreConcept: "Inibição competitiva: Km aumenta, Vmax não muda. Pode ser revertida adicionando excesso de substrato.",
      trapWarning: "Lembre-se: aumentar o Km significa diminuir a afinidade aparente da enzima pelo substrato."
    },
    tags: ["cinetica-enzimatica", "inibicao-competitiva", "farmacologia", "estatinas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-016",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Biologia Celular e Bioquímica",
    subtopic: "Inibição Não Competitiva e Alostérica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A contaminação por íons de chumbo (Pb²⁺), frequente no saturnismo ocupacional, inativa enzimas cruciais da biossíntese da hemoglobina, como a ácido δ-aminolevulínico desidratase (ALAD). O chumbo liga-se a grupos sulfidrila (-SH) de cisteínas localizadas fora do sítio catalítico ativo, provocando distorção na conformação da enzima mesmo quando o substrato está ligado.",
      source: "Toxicologia Médica e Fisiopatologia Ocupacional, 2026."
    },
    prompt: "O mecanismo cinético de inibição exercido pelo chumbo é classificado como:",
    options: [
      {
        id: "a",
        text: "competitivo, pois pode ser completamente neutralizado administrando altas doses do substrato fisiológico.",
        isCorrect: false,
        distractorRationale: "O chumbo não se liga ao sítio ativo e o excesso de substrato não consegue reverter a inibição."
      },
      {
        id: "b",
        text: "não competitivo (alostérico), caracterizado pela redução da velocidade máxima (Vmax) e manutenção do valor de Km.",
        isCorrect: true,
        distractorRationale: "Correto. O inibidor não competitivo liga-se a um sítio diferente (alostérico), inativando a capacidade catalítica das enzimas atingidas. Isso reduz a quantidade de enzima funcional (diminui Vmax), enquanto a afinidade das enzimas remanescentes pelo substrato não se altera (Km constante)."
      },
      {
        id: "c",
        text: "competitivo, provocando aumento de Vmax e redução proporcional do Km.",
        isCorrect: false,
        distractorRationale: "A inibição competitiva não altera a Vmax."
      },
      {
        id: "d",
        text: "catalítico homogêneo, acelerando a quebra precoce das moléculas de hemoglobina circulantes.",
        isCorrect: false,
        distractorRationale: "O chumbo inibe a enzima, bloqueando a síntese de heme, em vez de atuar como catalisador acelerador."
      },
      {
        id: "e",
        text: "ativador alostérico que expande o volume do eritrócito para compensar a hipóxia.",
        isCorrect: false,
        distractorRationale: "O chumbo é um inibidor tóxico, e não um ativador fisiológico."
      }
    ],
    detailedExplanation: {
      summary: "Na inibição não competitiva, o inibidor liga-se a um sítio alostérico distinto do sítio ativo, diminuindo Vmax sem afetar Km.",
      stepByStep: [
        "1. O chumbo liga-se a resíduos fora do sítio ativo (sítio alostérico/regulador).",
        "2. A enzima com chumbo ligado pode até acolher o substrato, mas não consegue realizar a catálise química.",
        "3. Como uma fração das enzimas torna-se inoperante, o teto de velocidade máxima (Vmax) cai.",
        "4. A adição de mais substrato é inútil para recuperar a Vmax, pois o chumbo não compete pelo mesmo bolsão físico."
      ],
      coreConcept: "Inibição não competitiva: Vmax diminui, Km permanece inalterado. Não é superada por excesso de substrato.",
      trapWarning: "Diferencie: inibição competitiva mexe no Km (empurra para a direita); inibição não competitiva mexe na Vmax (achata para baixo)."
    },
    tags: ["cinetica-enzimatica", "inibicao-nao-competitiva", "toxicologia", "metais-pesados"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-017",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Biologia Celular e Bioquímica",
    subtopic: "Aplicação Clínica da Inibição Competitiva",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A ingestão acidental ou intencional de metanol (álcool metílico, CH₃OH) contido em solventes adulterados é altamente tóxica. O metanol em si possui baixa toxicidade direta, mas é oxidado no fígado pela enzima álcool desidrogenase (ADH) em formaldeído e posteriormente em ácido fórmico, compostos que causam acidose metabólica fulminante e lesão irreparável ao nervo óptico (cegueira). O protocolo médico padrão de urgência inclui a infusão intravenosa controlada de etanol (CH₃CH₂OH) ou fomepizol.",
      source: "Emergências Toxicológicas e Terapêutica Intensiva, 2026."
    },
    prompt: "O fundamento farmacológico para o uso do etanol como antídoto na intoxicação por metanol é que o etanol atua como um:",
    options: [
      {
        id: "a",
        text: "inibidor alostérico que destrói o gene que codifica a síntese hepática da álcool desidrogenase.",
        isCorrect: false,
        distractorRationale: "O etanol não atua no genoma ou na expressão gênica em nível agudo de pronto-socorro."
      },
      {
        id: "b",
        text: "inibidor competitivo com afinidade muito maior pela álcool desidrogenase, saturando a enzima e permitindo a excreção renal do metanol inalterado.",
        isCorrect: true,
        distractorRationale: "Correto. A enzima ADH possui afinidade pelo etanol cerca de 10 a 20 vezes superior à que possui pelo metanol (Km muito menor para etanol). O etanol ocupa preferencialmente o sítio ativo da ADH, impedindo a oxidação do metanol em ácido fórmico tóxico, o que dá tempo para que o metanol seja eliminado pelos rins e hemodiálise."
      },
      {
        id: "c",
        text: "agente alcalinizante que se combina com o ácido fórmico formando sal neutro insolúvel.",
        isCorrect: false,
        distractorRationale: "O etanol é um álcool neutro e não atua como base neutralizadora de ácido fórmico."
      },
      {
        id: "d",
        text: "catalisador que acelera a conversão imediata do metanol em glicose e água.",
        isCorrect: false,
        distractorRationale: "O organismo não converte metanol em glicose."
      },
      {
        id: "e",
        text: "desnaturante proteico que induz a precipitação irreversível de todas as enzimas hepáticas.",
        isCorrect: false,
        distractorRationale: "O etanol em doses terapêuticas não induz desnaturação ou necrose em massa das enzimas hepáticas."
      }
    ],
    detailedExplanation: {
      summary: "O etanol atua como substrato preferencial / inibidor competitivo da ADH em relação ao metanol devido à sua maior afinidade enzimática.",
      stepByStep: [
        "1. O perigo do metanol decorre de seus metabólitos tóxicos: formaldeído e ácido fórmico.",
        "2. A álcool desidrogenase (ADH) metaboliza tanto o etanol quanto o metanol.",
        "3. Como o Km da ADH para o etanol é muito menor do que para o metanol, a enzima tem afinidade muito maior pelo etanol.",
        "4. Ao infundir etanol, seus sítios ativos ficam quase 100% ocupados metabolizando etanol em acetaldeído.",
        "5. O metanol fica impedido de reagir e é eliminado inalterado pelos rins e pulmões sem lesar o nervo óptico."
      ],
      coreConcept: "A inibição competitiva com substrato de maior afinidade impede a conversão metabólica de um precursor em toxinas letais.",
      trapWarning: "Cuidado: o etanol não destrói o metanol; ele simplesmente 'toma a frente' na fila do sítio ativo da enzima."
    },
    tags: ["cinetica-enzimatica", "inibicao-competitiva", "toxicologia", "metanol-etanol"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-018",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Cinética Química",
    subtopic: "Pressão em Sistemas Gasosos",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um cilindro com êmbolo móvel mantido a temperatura constante de 300 °C, realiza-se a síntese gasosa: 2 NO₂(g) → 2 NO(g) + O₂(g). O operador do sistema empurra subitamente o pistão, reduzindo o volume do compartimento à metade de seu valor original.",
      source: "Cinética e Dinâmica de Gases em Reatores Fechados, 2026."
    },
    prompt: "Considerando que a reação é de 2ª ordem global (v = k · [NO₂]²), a velocidade da transformação no instante imediatamente após a compressão:",
    options: [
      {
        id: "a",
        text: "permanece inalterada, pois a temperatura e a constante k não foram modificadas.",
        isCorrect: false,
        distractorRationale: "Embora a constante k seja idêntica, a concentração molar aumentou com a compressão, alterando a velocidade."
      },
      {
        id: "b",
        text: "quadruplica em relação ao valor inicial.",
        isCorrect: true,
        distractorRationale: "Correto. Reduzir o volume à metade (V' = V/2) duplica a concentração molar do gás ([NO₂]' = 2 · [NO₂]). Como a lei de velocidade é de 2ª ordem (v ∝ [NO₂]²), a nova velocidade é v' = k · (2 · [NO₂])² = 4 · k · [NO₂]² = 4 · v."
      },
      {
        id: "c",
        text: "reduz-se à metade devido à compressão molecular.",
        isCorrect: false,
        distractorRationale: "A concentração aumenta, portanto a velocidade obrigatoriamente aumenta e não diminui."
      },
      {
        id: "d",
        text: "duplica em relação ao valor inicial.",
        isCorrect: false,
        distractorRationale: "A velocidade duplicaria apenas se a reação fosse de 1ª ordem global (2¹ = 2). Como é de 2ª ordem, 2² = 4."
      },
      {
        id: "e",
        text: "aumenta oito vezes em decorrência do número de mols de produtos.",
        isCorrect: false,
        distractorRationale: "Calculou incorretamente 2³ = 8, confundindo com reação de 3ª ordem."
      }
    ],
    detailedExplanation: {
      summary: "Reduzir o volume de um gás duplica sua concentração molar; em reações de 2ª ordem, a velocidade quadruplica.",
      stepByStep: [
        "1. Concentração molar inicial: [NO₂] = n / V.",
        "2. Novo volume: V' = V / 2.",
        "3. Nova concentração molar: [NO₂]' = n / (V / 2) = 2 · (n / V) = 2 · [NO₂].",
        "4. Aplicar na lei de velocidade: v' = k · ([NO₂]')² = k · (2 · [NO₂])² = 4 · k · [NO₂]².",
        "5. Conclusão: a velocidade instantânea quadruplica (fator 4)."
      ],
      coreConcept: "A compressão de um gás eleva a concentração molar, multiplicando a frequência de choques efetivos segundo os expoentes da lei de velocidade.",
      trapWarning: "Cuidado: temperatura constante mantém o 'k' constante, mas NÃO impede a alteração de 'v' se as concentrações variarem!"
    },
    tags: ["cinetica-quimica", "pressao-gasosa", "lei-de-velocidade", "segunda-ordem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-019",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Cinética Química",
    subtopic: "Reações de Ordem Zero e Farmacocinética",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Diferentemente da maioria dos fármacos cuja depuração plasmática segue cinética de 1ª ordem (eliminação fracionária constante por tempo), o etanol em concentrações sociais comuns e elevadas (> 0,2 g/L no sangue) exibe cinética de eliminação de ordem zero. Um indivíduo metaboliza o álcool a uma taxa praticamente constante de aproximadamente 0,15 g/L por hora, independentemente de seu nível plasmático inicial.",
      source: "Manual de Farmacologia Clínica e Toxicologia Forense, 2026."
    },
    prompt: "O fenômeno cinético responsável por manter a velocidade de metabolização constante (ordem zero) em níveis elevados de álcool é a:",
    options: [
      {
        id: "a",
        text: "saturação completa dos sítios ativos das enzimas álcool desidrogenase hepáticas pelo excesso de substrato.",
        isCorrect: true,
        distractorRationale: "Correto. Quando a concentração de substrato é muito superior ao Km ([S] >> Km), 100% dos sítios ativos enzimáticos estão permanentemente ocupados (saturação). A enzima opera em sua velocidade máxima (Vmax), e a adição de mais substrato não altera a taxa de metabolização (v = k · [S]⁰ = k = Vmax)."
      },
      {
        id: "b",
        text: "ausência total de energia de ativação na via metabólica de conversão de etanol em acetaldeído.",
        isCorrect: false,
        distractorRationale: "Todas as reações biológicas possuem energia de ativação superada pela ação catalítica."
      },
      {
        id: "c",
        text: "eliminação direta do etanol pelos poros da epiderme sem qualquer processamento hepático.",
        isCorrect: false,
        distractorRationale: "Mais de 90% do etanol é metabolizado no fígado por oxidação enzimática."
      },
      {
        id: "d",
        text: "inversão da rota metabólica com síntese contínua de etanol a partir de gorduras viscerais.",
        isCorrect: false,
        distractorRationale: "O corpo humano não sintetiza etanol a partir de lipídios em condições fisiológicas normais."
      },
      {
        id: "e",
        text: "inativação térmica permanente das mitocôndrias provocada pela liberação de calor metabólico.",
        isCorrect: false,
        distractorRationale: "O consumo moderado/alto de etanol não causa inativação térmica de todas as mitocôndrias."
      }
    ],
    detailedExplanation: {
      summary: "Cinética de ordem zero ocorre em reações catalisadas ou enzimáticas quando os sítios ativos estão 100% saturados pelo substrato em excesso.",
      stepByStep: [
        "1. Pela equação de Michaelis-Menten: V = (Vmax · [S]) / (Km + [S]).",
        "2. Quando [S] >> Km, o termo Km no denominador torna-se desprezível em relação a [S].",
        "3. Simplificando: V = (Vmax · [S]) / [S] = Vmax.",
        "4. A velocidade torna-se constante e independente da concentração de substrato ([S]⁰).",
        "5. É por isso que o fígado elimina uma quantidade fixa em gramas de álcool por hora, independentemente do volume ingerido."
      ],
      coreConcept: "Ordem zero expressa velocidade fixa e independente da concentração, característica de sistemas com catalisador/enzima totalmente saturados.",
      trapWarning: "Em ordem 1, a meia-vida é constante; em ordem zero, a taxa absoluta eliminada por hora é constante."
    },
    tags: ["cinetica-quimica", "ordem-zero", "farmacocinetica", "saturacao-enzimatica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-020",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Biologia Celular e Bioquímica",
    subtopic: "Bioenergética e Acoplamento com ATP",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A síntese intracelular de glutamina a partir de glutamato e amônia é um processo endergônico desfavorável termodinamicamente: Glutamato + NH₃ → Glutamina + H₂O (ΔG°' = +14,2 kJ/mol). Para viabilizar essa síntese vital, a célula acopla a reação à hidrólise exergônica de ATP em ADP e fosfato inorgânico (Pi): ATP + H₂O → ADP + Pi (ΔG°' = -30,5 kJ/mol).",
      source: "Bioenergética Celular e Termodinâmica Biológica, 2026."
    },
    prompt: "O saldo termodinâmico de variação de energia livre padrão (ΔG°'_global) da reação celular acoplada e a justificativa para sua espontaneidade são:",
    options: [
      {
        id: "a",
        text: "-16,3 kJ/mol; o processo é espontâneo porque o saldo de energia livre do sistema acoplado é negativo.",
        isCorrect: true,
        distractorRationale: "Correto. ΔG°'_global = ΔG°'₁ + ΔG°'₂ = (+14,2 kJ/mol) + (-30,5 kJ/mol) = -16,3 kJ/mol. Como ΔG < 0, a reação global acoplada é exergônica e ocorre espontaneamente sob o ponto de vista termodinâmico."
      },
      {
        id: "b",
        text: "+44,7 kJ/mol; o processo só ocorre se houver adição de calor extremo por queima de glicogênio.",
        isCorrect: false,
        distractorRationale: "Somou os módulos de forma errada (+14,2 + 30,5 = +44,7), o que violaria o papel energético exergônico do ATP."
      },
      {
        id: "c",
        text: "0 kJ/mol; as duas reações anulam-se completamente, mantendo o sistema em equilíbrio estático permanente.",
        isCorrect: false,
        distractorRationale: "Os valores energéticos não são idênticos em módulo, deixando um saldo favorável líquido negativo."
      },
      {
        id: "d",
        text: "+16,3 kJ/mol; o processo é não espontâneo porque a quebra de ATP consome mais energia do que a gerada.",
        isCorrect: false,
        distractorRationale: "A hidrólise de ATP libera energia (sinal negativo, -30,5 kJ/mol), e não consome."
      },
      {
        id: "e",
        text: "-30,5 kJ/mol; a síntese de glutamina não consome nenhuma fração da energia desprendida pelo ATP.",
        isCorrect: false,
        distractorRationale: "Ignorou o custo termodinâmico positivo (+14,2 kJ/mol) da reação de síntese da glutamina."
      }
    ],
    detailedExplanation: {
      summary: "O acoplamento termodinâmico viabiliza reações endergônicas (ΔG > 0) somando-as à quebra exergônica do ATP (ΔG < 0) para obter saldo negativo.",
      stepByStep: [
        "1. Reação 1: Glutamato + NH₃ → Glutamina + H₂O (ΔG₁ = +14,2 kJ/mol).",
        "2. Reação 2: ATP + H₂O → ADP + Pi (ΔG₂ = -30,5 kJ/mol).",
        "3. Reação global: Glutamato + NH₃ + ATP → Glutamina + ADP + Pi.",
        "4. Variação global de energia livre: ΔG_global = ΔG₁ + ΔG₂ = +14,2 + (-30,5) = -16,3 kJ/mol.",
        "5. Como ΔG_global < 0, a transformação é termodinamicamente favorável e espontânea."
      ],
      coreConcept: "A termodinâmica do ATP permite que rotas anabólicas desfavoráveis ocorram porque o saldo global integrado tem ΔG < 0.",
      trapWarning: "Atenção aos sinais: reações que absorvem energia livre têm ΔG positivo; reações que liberam têm ΔG negativo."
    },
    tags: ["bioenergetica", "acoplamento-energetico", "hidrolise-de-atp", "termodinamica-celular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-021",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Biologia Celular e Bioquímica",
    subtopic: "Teoria Quimiosmótica e Força Próton-Motriz",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A teoria quimiosmótica, formulada pelo bioquímico Peter Mitchell (Prêmio Nobel de Química de 1978), revolucionou a compreensão da síntese mitocondrial de ATP. Mitchell demonstrou que o transporte de elétrons na cadeia respiratória bombeia prótons (H⁺) através da membrana interna da mitocôndria, estabelecendo uma força próton-motriz acoplada à enzima ATP-sintase.",
      source: "Mecanismos Bioenergéticos da Fosforilação Oxidativa, 2026."
    },
    prompt: "De acordo com esse modelo, o fluxo direto que impulsiona a rotação mecânica da subunidade catalítica da ATP-sintase para formar ATP a partir de ADP e Pi é:",
    options: [
      {
        id: "a",
        text: "o refluxo espontâneo de prótons (H⁺) do espaço intermembranas de volta para a matriz mitocondrial a favor do gradiente eletroquímico.",
        isCorrect: true,
        distractorRationale: "Correto. O bombeamento gera acúmulo de H⁺ e cargas positivas no espaço intermembranas. A ATP-sintase funciona como canal condutor que permite o retorno de H⁺ para a matriz a favor do gradiente elétrico e de concentração, utilizando a energia potencial liberada para sintetizar ATP."
      },
      {
        id: "b",
        text: "a passagem ativa de elétrons de alta energia através do canal central da ATP-sintase diretamente para a glicose.",
        isCorrect: false,
        distractorRationale: "Elétrons não atravessam a ATP-sintase; quem flui através dela são prótons (H⁺)."
      },
      {
        id: "c",
        text: "a quebra contínua de água em gás oxigênio no interior da matriz mitocondrial.",
        isCorrect: false,
        distractorRationale: "A formação de água ocorre pela redução do O₂ no complexo IV, e não sua quebra."
      },
      {
        id: "d",
        text: "o bombeamento de íons sódio (Na⁺) contra o gradiente através da membrana mitocondrial externa.",
        isCorrect: false,
        distractorRationale: "A força próton-motriz mitocondrial é baseada em H⁺, não em Na⁺."
      },
      {
        id: "e",
        text: "o transporte passivo de dióxido de carbono dissolvido na corrente sanguínea para o citosol.",
        isCorrect: false,
        distractorRationale: "O CO₂ é produto de descarte do ciclo de Krebs e não impulsiona a rotação da ATP-sintase."
      }
    ],
    detailedExplanation: {
      summary: "A ATP-sintase converte a energia eletroquímica do gradiente de prótons (H⁺) entre o espaço intermembranas e a matriz em energia mecânica rotatória para fosforilar o ADP.",
      stepByStep: [
        "1. Os complexos I, III e IV bombeiam prótons da matriz para o espaço intermembranas.",
        "2. Cria-se um gradiente de pH (espaço intermembranas mais ácido) e de voltagem (positivo fora).",
        "3. Como a membrana lipídica interna é impermeável a íons, os prótons só retornam pelo canal F₀ da ATP-sintase.",
        "4. O refluxo a favor do gradiente aciona o rotor molecular F₀, que induz alterações conformacionais no domínio catalítico F₁.",
        "5. O domínio F₁ une ADP + Pi gerando ATP."
      ],
      coreConcept: "A fosforilação oxidativa é acoplada por quimiosmose: transporte de elétrons gera gradiente de H⁺, cujo refluxo sintetiza ATP.",
      trapWarning: "O fluxo de H⁺ que gera ATP ocorre do espaço intermembranas PARA a matriz, e não o inverso!"
    },
    tags: ["bioenergetica", "quimiosmose", "atp-sintase", "mitocondria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-022",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Biologia Celular e Bioquímica",
    subtopic: "Desacoplamento Mitocondrial e Termogênese",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O tecido adiposo marrom é rico em mitocôndrias cuja membrana interna expressa a proteína transmembrana termogenina (UCP-1). Essa proteína atua como um canal condutor alternativo de prótons (H⁺), desviando o fluxo que passaria pela ATP-sintase. De forma trágica e análoga, o composto sintético lipofílico 2,4-dinitrofenol (DNP), vendido ilegalmente no passado como 'emagrecedor milagroso', transporta prótons através da bicamada lipídica mitocondrial.",
      source: "Manual de Fisiologia e Farmacologia Celular, 2026."
    },
    prompt: "Em um organismo exposto a um agente desacoplador como a termogenina ou o DNP, as alterações observadas na taxa de consumo de oxigênio (O₂), na produção de ATP e na temperatura corporal são, respectivamente:",
    options: [
      {
        id: "a",
        text: "consumo de O₂ nulo, produção de ATP máxima e queda acentuada da temperatura corporal.",
        isCorrect: false,
        distractorRationale: "O consumo de O₂ não zera; pelo contrário, aumenta para tentar compensar o déficit energético."
      },
      {
        id: "b",
        text: "consumo de O₂ aumentado, produção de ATP reduzida e elevação da liberação de calor térmico.",
        isCorrect: true,
        distractorRationale: "Correto. O desacoplador dissipa o gradiente de H⁺ em calor, sem passar pela ATP-sintase (produção de ATP cai drasticamente). A célula acelera o ciclo de Krebs e a cadeia respiratória numa tentativa fútil de restabelecer o ATP, disparando o consumo de O₂ e gerando calor excessivo (termogênese fisiológica na gordura marrom ou hipertermia fatal pelo DNP)."
      },
      {
        id: "c",
        text: "consumo de O₂ constante, produção de ATP inalterada e paralisação do ciclo de Krebs.",
        isCorrect: false,
        distractorRationale: "A produção de ATP é profundamente diminuída pelo desacoplamento quimiosmótico."
      },
      {
        id: "d",
        text: "consumo de O₂ reduzido, produção de ATP aumentada e congelamento dos tecidos periféricos.",
        isCorrect: false,
        distractorRationale: "A produção de ATP diminui e a temperatura corporal sobe, sem congelamento tecidual."
      },
      {
        id: "e",
        text: "consumo de O₂ duplicado, produção de ATP quadruplicada e síntese acelerada de glicogênio.",
        isCorrect: false,
        distractorRationale: "Sem força próton-motriz na ATP-sintase, a síntese de ATP desaba, não havendo quadruplicação."
      }
    ],
    detailedExplanation: {
      summary: "Desacopladores permitem o refluxo de prótons sem gerar ATP, dissipando a força próton-motriz como calor e elevando o consumo de O₂.",
      stepByStep: [
        "1. O canal desacoplador 'curto-circuita' o gradiente de H⁺.",
        "2. Os prótons retornam à matriz sem girar o rotor da ATP-sintase.",
        "3. Como o gradiente não mais resiste ao bombeamento, a cadeia de elétrons funciona em velocidade máxima consumindo muito mais O₂.",
        "4. A energia potencial do gradiente é convertida integralmente em calor (ΔH).",
        "5. Consequência: queima acelerada de substratos, déficit de ATP e forte elevação de temperatura."
      ],
      coreConcept: "Desacopladores dissociam o consumo de oxigênio da síntese de ATP, convertendo o gradiente eletroquímico em calor.",
      trapWarning: "Cuidado: inibidores da cadeia respiratória (como o cianeto) bloqueiam o consumo de O₂; já os DESACOPLADORES (como DNP e UCP-1) AUMENTAM o consumo de O₂!"
    },
    tags: ["bioenergetica", "desacopladores", "termogenese", "mitocondria-dnp"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-023",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Biologia Celular e Bioquímica",
    subtopic: "Balanço Energético e Fermentação Lática",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em atletas submetidos a tiros intensos de corrida de curta distância (100 m), as fibras musculares esqueléticas esgotam o suprimento local de oxigênio em segundos, recorrendo à fermentação lática para manter a geração imediata de ATP. Sabe-se que a oxidação aeróbia completa de 1 mol de glicose produz cerca de 32 mols de ATP, enquanto a fermentação anaeróbia produz apenas 2 mols de ATP por mol de glicose consumido.",
      source: "Fisiologia do Exercício e Bioenergética Muscular, 2026."
    },
    prompt: "Para gerar a mesma quantidade de ATP que uma fibra muscular obtém pela respiração aeróbia completa de 10 mols de glicose, a fibra em regime de fermentação lática deverá consumir uma quantidade de glicose igual a:",
    options: [
      {
        id: "a",
        text: "20 mols.",
        isCorrect: false,
        distractorRationale: "Multiplicou por 2 simplesmente, sem considerar que o rendimento aeróbio é de 32 ATP por glicose."
      },
      {
        id: "b",
        text: "80 mols.",
        isCorrect: false,
        distractorRationale: "Errou a proporção estequiométrica de rendimento de ATP."
      },
      {
        id: "c",
        text: "160 mols.",
        isCorrect: true,
        distractorRationale: "Correto. 10 mols de glicose em via aeróbia geram: 10 × 32 = 320 mols de ATP. Como a fermentação lática rende apenas 2 mols de ATP por mol de glicose, para obter 320 mols de ATP são necessários: 320 / 2 = 160 mols de glicose (uma taxa 16 vezes superior de consumo de combustível)."
      },
      {
        id: "d",
        text: "320 mols.",
        isCorrect: false,
        distractorRationale: "Esse seria o total de mols de ATP gerados, e não o número de mols de glicose requeridos pela via fermentativa."
      },
      {
        id: "e",
        text: "16 mols.",
        isCorrect: false,
        distractorRationale: "Esqueceu de multiplicar pelos 10 mols de glicose originais, calculando a razão unitária 32/2 = 16."
      }
    ],
    detailedExplanation: {
      summary: "A fermentação lática possui rendimento energético dezesseis vezes menor do que a respiração aeróbia completa.",
      stepByStep: [
        "1. ATP produzido por 10 mols de glicose na via aeróbia: 10 × 32 ATP = 320 mols de ATP.",
        "2. Rendimento por mol de glicose na fermentação lática: 2 mols de ATP.",
        "3. Quantidade de glicose necessária na fermentação: n = 320 mols de ATP / (2 mols de ATP / mol de glicose) = 160 mols de glicose.",
        "4. Conclusão: a célula precisa consumir 160 mols de glicose anaerobiamente para igualar o trabalho de 10 mols em presença de oxigênio."
      ],
      coreConcept: "A rota anaeróbia compensa seu baixo rendimento por molécula de glicose acelerando drasticamente o fluxo de consumo de carboidratos.",
      trapWarning: "Atenção: a pergunta pede o número de mols de GLICOSE necessários na fermentação, não o número de ATP produzido."
    },
    tags: ["bioenergetica", "fermentacao-latica", "respiracao-celular", "rendimento-atp"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-024",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Biologia Celular e Bioquímica",
    subtopic: "Efeito Warburg e Metabolismo Tumoral",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na década de 1920, Otto Warburg observou que a maioria das células neoplásicas (cancerosas) malignas consome glicose em taxas até 200 vezes superiores às dos tecidos normais adjacentes, convertendo a maior parte do piruvato em lactato, mesmo na presença de oxigênio abundante (glicólise aeróbia). Esse fenômeno, conhecido como Efeito Warburg, é a base da tomografia por emissão de pósitrons (PET scan) utilizando o radiofármaco 18F-FDG (fluorodesoxiglicose).",
      source: "Oncologia Molecular e Diagnóstico por Imagem Nuclear, 2026."
    },
    prompt: "O hiperconsumo de análogos de glicose pelas células tumorais no exame de PET scan é clinicamente detectado como uma área de hipercaptação porque essas células necessitam:",
    options: [
      {
        id: "a",
        text: "compensar o baixo rendimento de ATP por molécula de glicose na glicólise através de um influxo massivo de açúcar.",
        isCorrect: true,
        distractorRationale: "Correto. Ao priorizarem a fermentação/glicólise aeróbia em vez da fosforilação oxidativa completa, as células tumorais geram apenas 2 ATP por glicose. Para sustentar sua rápida proliferação e síntese de biomassa, expressam alta densidade de transportadores GLUT-1 e consomem glicose vorazmente, acumulando o marcador 18F-FDG."
      },
      {
        id: "b",
        text: "armazenar glicose na forma de amido cristalino intracelular para impedir a apoptose mediada por linfócitos T.",
        isCorrect: false,
        distractorRationale: "Células animais não sintetizam amido vegetal."
      },
      {
        id: "c",
        text: "inibir a circulação sanguínea periférica através da liberação maciça de gás oxigênio puro.",
        isCorrect: false,
        distractorRationale: "Tumores estimulam angiogênese (novos vasos) e não liberam oxigênio gasoso."
      },
      {
        id: "d",
        text: "sintetizar ácido clorídrico no estroma para dissolver os ossos vizinhos.",
        isCorrect: false,
        distractorRationale: "O ácido gerado pelo metabolismo anaeróbio é o ácido lático (lactato), não ácido clorídrico."
      },
      {
        id: "e",
        text: "eliminar o oxigênio celular para paralisar totalmente a síntese de proteínas e ácidos nucleicos.",
        isCorrect: false,
        distractorRationale: "Células cancerosas continuam proliferando e precisam sintetizar intensamente proteínas e DNA."
      }
    ],
    detailedExplanation: {
      summary: "O Efeito Warburg envolve glicólise aeróbia com baixo rendimento de ATP por glicose, demandando um influxo massivo de glicose para manter a viabilidade celular.",
      stepByStep: [
        "1. Células neoplásicas reprogramam seu metabolismo para a glicólise aeróbia.",
        "2. A quebra parcial em lactato gera apenas 2 ATP por glicose (vs 32 na mitocôndria).",
        "3. Para obter a energia e os intermediários de carbono necessários para duplicação celular, expressam transportadores de glicose (GLUT) em altíssima densidade.",
        "4. No PET scan, a fluorodesoxiglicose (18F-FDG) é internalizada e fosforilada, ficando retida nas células neoplásicas.",
        "5. O sinal radioativo concentrado evidencia as metástases e massas tumorais primárias."
      ],
      coreConcept: "O baixo rendimento energético da glicólise aeróbia exige captação acelerada de glicose, base diagnóstica do PET-FDG.",
      trapWarning: "O Efeito Warburg ocorre MESMO NA PRESENÇA de oxigênio abundante (daí o nome 'glicólise aeróbia')."
    },
    tags: ["bioenergetica", "efeito-warburg", "metabolismo-tumoral", "pet-scan"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-CIN-025",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Cinética Química",
    subtopic: "Farmacocinética de Primeira Ordem e Meia-Vida",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "problem-solving",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A eliminação plasmática de um antibiótico betalactâmico em um paciente adulto com função renal preservada obedece a uma cinética de 1ª ordem, com tempo de meia-vida biológica (t₁/₂) de 3,0 horas. Após a infusão intravenosa rápida em dose única, a concentração plasmática inicial medida no tempo t = 0 foi de 80,0 mg/L.",
      source: "Farmacocinética Clínica e Monitoramento Terapêutico de Antimicrobianos, 2026."
    },
    prompt: "A concentração plasmática residual desse antibiótico no organismo do paciente decorridas exatamente 12,0 horas após a administração da dose é de:",
    options: [
      {
        id: "a",
        text: "20,0 mg/L.",
        isCorrect: false,
        distractorRationale: "Corresponde à concentração após apenas 2 meias-vidas (6 horas), quando restam 25% da dose."
      },
      {
        id: "b",
        text: "10,0 mg/L.",
        isCorrect: false,
        distractorRationale: "Corresponde à concentração após 3 meias-vidas (9 horas), quando restam 12,5% da dose."
      },
      {
        id: "c",
        text: "5,0 mg/L.",
        isCorrect: true,
        distractorRationale: "Correto. O número de meias-vidas decorridas em 12,0 horas é n = 12,0 / 3,0 = 4 meias-vidas. A concentração residual é dada por C(t) = C₀ / 2ⁿ = 80,0 / 2⁴ = 80,0 / 16 = 5,0 mg/L."
      },
      {
        id: "d",
        text: "2,5 mg/L.",
        isCorrect: false,
        distractorRationale: "Corresponde à concentração após 5 meias-vidas (15 horas)."
      },
      {
        id: "e",
        text: "0,0 mg/L.",
        isCorrect: false,
        distractorRationale: "Em cinéticas de primeira ordem com decaimento exponencial, a concentração assintótica aproxima-se de zero, mas não zera em apenas 4 meias-vidas."
      }
    ],
    detailedExplanation: {
      summary: "Em cinéticas de decaimento de primeira ordem, a cada intervalo igual a uma meia-vida a concentração residual cai pela metade: C(t) = C₀ / 2ⁿ.",
      stepByStep: [
        "1. Tempo decorrido: t = 12,0 horas.",
        "2. Tempo de meia-vida: t₁/₂ = 3,0 horas.",
        "3. Número de meias-vidas transcorridas: n = 12,0 / 3,0 = 4 meias-vidas.",
        "4. Cálculo sucessivo:",
        "   - Inicial (0 h): 80,0 mg/L",
        "   - Após 1ª meia-vida (3 h): 40,0 mg/L",
        "   - Após 2ª meia-vida (6 h): 20,0 mg/L",
        "   - Após 3ª meia-vida (9 h): 10,0 mg/L",
        "   - Após 4ª meia-vida (12 h): 5,0 mg/L.",
        "5. Pela fórmula direta: C = 80,0 / (2⁴) = 80,0 / 16 = 5,0 mg/L."
      ],
      coreConcept: "A meia-vida em cinéticas de 1ª ordem é independente da concentração inicial e obedece à equação C = C₀ · (1/2)^n.",
      trapWarning: "Cuidado para não confundir tempo total com número de meias-vidas. Divida sempre o tempo total pelo tempo de uma meia-vida."
    },
    tags: ["cinetica-quimica", "primeira-ordem", "meia-vida", "farmacocinetica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
