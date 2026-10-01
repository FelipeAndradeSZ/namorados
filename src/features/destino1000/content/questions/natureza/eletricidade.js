export const QUESTIONS_ELETRICIDADE = [
  {
    id: "NAT-ELET-001",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Eletricidade",
    subtopic: "Circuitos Resisivos Básicos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma residência alimentada por uma tensão de 120 V, deseja-se ligar simultaneamente um aquecedor (1200 W), um televisor (240 W) e várias lâmpadas (60 W cada). O disjuntor de proteção do circuito desarma se a corrente total ultrapassar 20 A.",
      source: "Original"
    },
    prompt: "Qual é o número máximo de lâmpadas que podem ser ligadas simultaneamente junto ao aquecedor e ao televisor, sem que o disjuntor desarme?",
    options: [
      { id: "a", text: "16", isCorrect: true, distractorRationale: null },
      { id: "b", text: "20", isCorrect: false, distractorRationale: "Calculou a corrente máxima das lâmpadas isoladamente, sem subtrair os outros equipamentos" },
      { id: "c", text: "15", isCorrect: false, distractorRationale: "Fez a divisão e arredondou para baixo antes de subtrair o restante, ou errou a potência" },
      { id: "d", text: "24", isCorrect: false, distractorRationale: "Calculou o máximo de lâmpadas para toda a potência do circuito sem os outros" },
      { id: "e", text: "12", isCorrect: false, distractorRationale: "Erro no cálculo da corrente restante no circuito" }
    ],
    detailedExplanation: {
      summary: "Cálculo da corrente elétrica total em um circuito doméstico em paralelo e o dimensionamento de disjuntores (P = V.i).",
      stepByStep: [
        "1. Potência total máxima que o disjuntor suporta: P_max = U * i_max = 120 V * 20 A = 2400 W.",
        "2. Potência já ocupada pelo aquecedor e pelo televisor: P_ocup = 1200 W + 240 W = 1440 W.",
        "3. Potência restante para as lâmpadas: P_rest = 2400 W - 1440 W = 960 W.",
        "4. Como cada lâmpada consome 60 W: N_lampadas = 960 W / 60 W = 16 lâmpadas."
      ],
      coreConcept: "Potência Elétrica e Corrente Total em Circuitos Paralelos (P = V.i)",
      trapWarning: "Lembra que as instalações residenciais estão ligadas em paralelo, o que significa que a corrente total é a soma das correntes de cada aparelho ou que as potências podem ser somadas linearmente."
    },
    commonTraps: ["Achar que a instalação é em série", "Não somar as potências que já estão consumindo"],
    tags: ["fisica", "potencia", "instalacoes-eletricas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-002",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Eletricidade",
    subtopic: "Associação de Resistores",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na montagem de componentes de áudio em um automóvel, foi necessário obter uma resistência equivalente específica. O instalador possuía apenas resistores iguais, de 10 Ω cada. Para atingir a resistência de 15 Ω, ele precisou criar uma associação combinando circuitos em série e paralelo com a menor quantidade possível de resistores.",
      source: "Original"
    },
    prompt: "Qual associação descreve corretamente o que o instalador fez?",
    options: [
      { id: "a", text: "Dois resistores de 10 Ω em paralelo (5 Ω) associados em série com um resistor de 10 Ω.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Dois resistores em série (20 Ω) associados em paralelo com um resistor de 10 Ω.", isCorrect: false, distractorRationale: "20 || 10 = (20*10)/30 = 6,67 Ω, e não 15 Ω." },
      { id: "c", text: "Três resistores de 10 Ω em série (30 Ω) ligados em paralelo com um resistor.", isCorrect: false, distractorRationale: "R equivalente seria (30*10)/40 = 7,5 Ω." },
      { id: "d", text: "Três resistores associados totalmente em paralelo.", isCorrect: false, distractorRationale: "R equivalente seria 10/3 = 3,33 Ω." },
      { id: "e", text: "Dois conjuntos de dois resistores paralelos associados entre si.", isCorrect: false, distractorRationale: "Seria 5 Ω + 5 Ω = 10 Ω, ou 5 || 5 = 2,5 Ω." }
    ],
    detailedExplanation: {
      summary: "Determinação de esquema de associação mista para obter uma resistência equivalente pré-definida.",
      stepByStep: [
        "1. Queremos atingir 15 Ω partindo de resistores de 10 Ω.",
        "2. Como 15 Ω > 10 Ω, parte do circuito terá que ser em série com pelo menos um resistor de 10 Ω.",
        "3. Se colocarmos um resistor de 10 Ω, precisaremos adicionar mais 5 Ω na série.",
        "4. Para conseguir 5 Ω, podemos colocar dois resistores de 10 Ω em paralelo, pois (10 * 10) / (10 + 10) = 5 Ω.",
        "5. Conclusão: a associação mista é 1 resistor de 10 Ω em série com um bloco de 2 resistores de 10 Ω em paralelo. Total de 3 resistores."
      ],
      coreConcept: "Resistência Equivalente em Associação Mista",
      trapWarning: "Associações em paralelo reduzem a resistência, enquanto associações em série aumentam. Pense na diferença entre as frações."
    },
    commonTraps: ["Confundir série com paralelo no cálculo"],
    tags: ["fisica", "resistores", "associacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-003",
    area: "natureza",
    competence: 6,
    skill: 21,
    topic: "Eletricidade",
    subtopic: "Consumo de Energia",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O chuveiro elétrico de uma casa possui potência de 5400 W. Durante o inverno, quatro pessoas tomam um banho diário de 15 minutos cada nessa potência máxima. A concessionária de energia cobra R$ 0,80 por cada quilowatt-hora (kWh) consumido.",
      source: "Original"
    },
    prompt: "Ao final de um mês de 30 dias, qual será o custo apenas devido aos banhos tomados por essa família?",
    options: [
      { id: "a", text: "R$ 129,60", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 32,40", isCorrect: false, distractorRationale: "Calculou para apenas uma pessoa (não multiplicou por 4)" },
      { id: "c", text: "R$ 43,20", isCorrect: false, distractorRationale: "Errou a conversão de minutos para horas (usou 0,15h ou algo similar)" },
      { id: "d", text: "R$ 648,00", isCorrect: false, distractorRationale: "Multiplicou pela quantidade de minutos em vez de converter para horas" },
      { id: "e", text: "R$ 10,80", isCorrect: false, distractorRationale: "Calculou o custo de 1 dia e esqueceu de multiplicar por 30, ou outro erro grave de escala" }
    ],
    detailedExplanation: {
      summary: "Cálculo de consumo de energia mensal em quilowatt-hora e seu valor monetário (E = P.t).",
      stepByStep: [
        "1. O tempo de banho diário da família toda é de 4 pessoas * 15 minutos = 60 minutos = 1 hora por dia.",
        "2. O consumo de energia por dia (E) = Potência * tempo_diário = 5400 W * 1 h = 5400 Wh = 5,4 kWh diários.",
        "3. Em um mês de 30 dias, o consumo será: 5,4 kWh/dia * 30 dias = 162 kWh.",
        "4. O custo é dado pela energia consumida multiplicada pela tarifa: Custo = 162 kWh * R$ 0,80/kWh = R$ 129,60."
      ],
      coreConcept: "Cálculo de Energia Elétrica (kWh)",
      trapWarning: "Preste atenção na unidade kWh: a potência precisa estar em kW (dividir W por 1000) e o tempo obrigatoriamente em horas."
    },
    commonTraps: ["Esquecer de converter a potência de W para kW", "Esquecer a conversão de minutos para horas"],
    tags: ["fisica", "energia", "conta-de-luz"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-004",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Eletricidade",
    subtopic: "Curto-circuito e Fusíveis",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Os fusíveis são componentes de proteção em um circuito. Eles derretem ('queimam') caso a corrente elétrica que os atravessa seja superior a um valor nominal. Certo circuito contém uma fonte de 12 V e três resistores em paralelo: R1 = 4 Ω, R2 = 6 Ω e R3 = 12 Ω. Um fusível de 5 A está instalado no ramo principal do circuito (próximo à fonte).",
      source: "Original"
    },
    prompt: "O que acontecerá ao ligar o circuito à fonte?",
    options: [
      { id: "a", text: "O fusível queimará, pois a corrente total (6 A) excede seu limite de 5 A.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "O fusível não queimará, pois a corrente total é de 4 A.", isCorrect: false, distractorRationale: "Erro no cálculo da resistência equivalente e consequentemente da corrente." },
      { id: "c", text: "Apenas o resistor de 4 Ω deixará de funcionar, protegendo o circuito.", isCorrect: false, distractorRationale: "Fusível principal afeta o circuito todo, não um ramo paralelo específico." },
      { id: "d", text: "O fusível não queimará, pois a tensão de 12 V é menor que a resistência total, reduzindo a corrente.", isCorrect: false, distractorRationale: "Confusão conceitual entre os valores V e R e como influenciam I (Lei de Ohm)." },
      { id: "e", text: "O fusível queimará pois a corrente passa primeiro pelo resistor de 12 Ω, exigindo carga maior.", isCorrect: false, distractorRationale: "A corrente divide-se proporcionalmente nos paralelos, não há 'passar primeiro'." }
    ],
    detailedExplanation: {
      summary: "Cálculo da corrente total de um circuito e análise do comportamento de um fusível.",
      stepByStep: [
        "1. Os resistores estão em paralelo sob uma d.d.p. de 12 V.",
        "2. Podemos calcular a resistência equivalente ou as correntes separadamente e somar (mais fácil).",
        "3. Corrente de R1 = V / R1 = 12 / 4 = 3 A.",
        "4. Corrente de R2 = V / R2 = 12 / 6 = 2 A.",
        "5. Corrente de R3 = V / R3 = 12 / 12 = 1 A.",
        "6. Corrente Total = 3 + 2 + 1 = 6 A.",
        "7. A corrente de 6 A passa no ramo principal e atravessa o fusível. Como o limite do fusível é 5 A, ele irá se romper e desligará o circuito."
      ],
      coreConcept: "Leis de Kirchhoff (Nós) e Proteção de Circuitos",
      trapWarning: "Não compare a tensão diretamente com as correntes nominais, você precisa transformar tensão e resistência em corrente usando a Primeira Lei de Ohm."
    },
    commonTraps: ["Achar que apenas a menor corrente conta para o fusível"],
    tags: ["fisica", "fusivel", "lei-de-ohm"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-005",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Eletricidade",
    subtopic: "Instrumentos de Medida",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Para medir a diferença de potencial (tensão) e a corrente elétrica que passam por uma lâmpada específica em um circuito mais complexo, estudantes usaram um voltímetro e um amperímetro.",
      source: "Original"
    },
    prompt: "Como os instrumentos de medida (amperímetro e voltímetro, considerados ideais) devem ser conectados e quais são as características de suas resistências internas?",
    options: [
      { id: "a", text: "Amperímetro em série (resistência interna nula) e voltímetro em paralelo (resistência interna infinita).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Amperímetro em paralelo (resistência interna infinita) e voltímetro em série (resistência interna nula).", isCorrect: false, distractorRationale: "Inverteu tanto o modo de ligar quanto as resistências internas." },
      { id: "c", text: "Amperímetro e voltímetro ambos em série com a lâmpada, porém o voltímetro depois da lâmpada.", isCorrect: false, distractorRationale: "O voltímetro não deve ser ligado em série, senão ele bloqueia a corrente (por ter alta resistência)." },
      { id: "d", text: "Amperímetro em série (resistência interna infinita) e voltímetro em paralelo (resistência interna nula).", isCorrect: false, distractorRationale: "Ligou certo, mas inverteu os conceitos das resistências internas." },
      { id: "e", text: "Amperímetro em paralelo (resistência interna nula) e voltímetro em paralelo (resistência interna infinita).", isCorrect: false, distractorRationale: "Amperímetro em paralelo com resistência nula causa um curto-circuito perigoso." }
    ],
    detailedExplanation: {
      summary: "Regras de conexão e as resistências ideais para os equipamentos de medição elétrica.",
      stepByStep: [
        "1. O Amperímetro mede corrente elétrica, portanto a corrente daquele braço deve atravessá-lo. Ele deve ser instalado em *série*. Para não atrapalhar o circuito (não baixar a corrente original), sua resistência interna ideal deve ser a mais baixa possível (tendendo a zero).",
        "2. O Voltímetro mede diferença de potencial entre dois pontos, devendo ser colocado em *paralelo* com o componente a ser medido. Para não desviar a corrente do componente principal, ele precisa ter resistência altíssima (tendendo ao infinito)."
      ],
      coreConcept: "Medidas Elétricas: Amperímetros e Voltímetros",
      trapWarning: "Ligar um amperímetro ideal em paralelo vai causar um curto-circuito, e ligar um voltímetro ideal em série vai interromper o circuito, pois a corrente não vai conseguir fluir."
    },
    commonTraps: ["Confundir série com paralelo na instalação dos medidores"],
    tags: ["fisica", "instrumentos-medida", "circuitos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-006",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Eletricidade",
    subtopic: "Lâmpadas em Série e Paralelo",
    difficulty: 2,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na decoração de natal, fios com dezenas de lâmpadas piscam incessantemente. O proprietário repara que, ao remover ou queimar uma única lâmpada, o restante de todo o cordão continua funcionando e acendendo normalmente.",
      source: "Original"
    },
    prompt: "Com base nessa observação, pode-se afirmar que as lâmpadas do cordão estão associadas de que forma e o que ocorre com a tensão elétrica e corrente em cada lâmpada?",
    options: [
      { id: "a", text: "Estão associadas em paralelo, o que garante a mesma tensão elétrica entre os terminais de cada lâmpada independente das outras.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Estão associadas em série, mas o sistema tem fusíveis individuais que compensam a tensão.", isCorrect: false, distractorRationale: "Em série, a ruptura de uma tira a energia de todas. Fusível não compensaria." },
      { id: "c", text: "Estão em paralelo, de modo que a mesma corrente elétrica flua simultaneamente por todas as lâmpadas.", isCorrect: false, distractorRationale: "O paralelo divide a corrente (se forem diferentes lâmpadas) e mantem igual a tensão, mas a principal justificativa de manter o circuito ativo não é a corrente." },
      { id: "d", text: "Estão associadas em série, porque é o tipo de circuito que permite economia de energia em decorações.", isCorrect: false, distractorRationale: "Economia ou não, o fato narrado contradiz o funcionamento em série." },
      { id: "e", text: "Possuem sistema de ligação mista em que a tensão é nula e a resistência é maximizada.", isCorrect: false, distractorRationale: "Absurdo físico." }
    ],
    detailedExplanation: {
      summary: "Identificação do tipo de ligação através do princípio da independência do caminho de corrente.",
      stepByStep: [
        "1. O principal aspecto prático de um circuito em série é que, se um componente falhar (abrir), o circuito se rompe e nenhum componente subsequente recebe corrente.",
        "2. Se ao remover uma lâmpada, as demais continuam acesas, isso prova que existe um caminho independente de corrente elétrica para elas.",
        "3. Isso é a característica chave da associação em paralelo, onde cada ramo está submetido à mesma diferença de potencial da fonte."
      ],
      coreConcept: "Independência dos aparelhos em associação paralela",
      trapWarning: "Lâmpadas de pisca-pisca bem baratas costumavam ser em série, e se uma queimasse todas apagavam. Os pisca-piscas que não apagam todos quando queima uma lâmpada são projetados com circuitos em paralelo (ou possuem by-pass)."
    },
    commonTraps: ["Achar que as luzes natalinas estão sempre e somente em série"],
    tags: ["fisica", "pisca-pisca", "paralelo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-007",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Eletricidade",
    subtopic: "Potência em Resistores (Efeito Joule)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A chave seletora Verão/Inverno de um chuveiro elétrico altera o comprimento da resistência interna do aparelho. Sabe-se que, com a chave na posição Inverno, a água sai mais quente e o banho é mais confortável no frio.",
      source: "Original"
    },
    prompt: "Para que o chuveiro dissipe maior potência (esquente mais) mantendo a mesma tensão da rede (220 V), a resistência elétrica deve ser:",
    options: [
      { id: "a", text: "menor, o que se consegue utilizando um fio resistor mais curto.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "maior, o que se consegue utilizando um fio resistor mais longo.", isCorrect: false, distractorRationale: "Confundiu: resistência maior com mesma ddp gera *menor* corrente e *menor* potência (P = V²/R)." },
      { id: "c", text: "menor, o que se consegue utilizando um fio resistor mais longo.", isCorrect: false, distractorRationale: "A Segunda Lei de Ohm diz que maior comprimento implica maior resistência, não menor." },
      { id: "d", text: "maior, o que se consegue utilizando um fio resistor mais curto.", isCorrect: false, distractorRationale: "Fio mais curto dá menor resistência, e resistência maior não aquece mais." },
      { id: "e", text: "inalterada, dependendo apenas do aumento do fluxo de água pela pressão.", isCorrect: false, distractorRationale: "A mudança na temperatura na posição Inverno se deve especificamente à alteração na resistência e potência, não apenas à vazão." }
    ],
    detailedExplanation: {
      summary: "Interpretação conjunta da Lei de Ohm de Potência (P = V²/R) e da Segunda Lei de Ohm de dimensionamento (R = ρ*L/A) aplicadas a chuveiros.",
      stepByStep: [
        "1. Potência elétrica: A tensão (V) da casa é constante. Usamos P = V² / R. Assim, para ter mais potência (mais calor), é necessário ter *menor* resistência (R).",
        "2. Segunda Lei de Ohm: A resistência de um fio condutor é dada por R = ρ * (L / A). Para obter uma resistência menor, o fio (L) precisa ser mais curto.",
        "3. Conclusão: a posição Inverno liga o chuveiro com o fio resistor de comprimento menor, resultando em menor resistência e maior dissipação térmica."
      ],
      coreConcept: "Efeito Joule e 2ª Lei de Ohm (Resistividade e Comprimento)",
      trapWarning: "Cuidado com o senso comum: pode parecer que 'mais resistência gera mais calor', mas para tensão constante (como na tomada de casa), mais resistência restringe a passagem de corrente e, portanto, diminui a potência dissipada."
    },
    commonTraps: ["Achar que R maior gera maior calor na rede elétrica"],
    tags: ["fisica", "chuveiro", "efeito-joule"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-008",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Eletricidade",
    subtopic: "Geradores e Força Eletromotriz",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma pilha real possui uma força eletromotriz (fem) de 1,5 V e uma resistência interna de 0,5 Ω. Quando conectada a um circuito externo simples com uma lâmpada, verifica-se uma corrente elétrica de 1,0 A circulando no circuito.",
      source: "Original"
    },
    prompt: "Qual é a diferença de potencial (tensão útil) entregue pela pilha à lâmpada e a resistência da lâmpada, respectivamente?",
    options: [
      { id: "a", text: "1,0 V e 1,0 Ω", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1,5 V e 1,5 Ω", isCorrect: false, distractorRationale: "Não descontou a queda de tensão interna da pilha" },
      { id: "c", text: "1,0 V e 0,5 Ω", isCorrect: false, distractorRationale: "Achou a tensão certa, mas confundiu o cálculo da resistência da lâmpada com a resistência interna" },
      { id: "d", text: "2,0 V e 2,0 Ω", isCorrect: false, distractorRationale: "Somou a tensão interna ao invés de subtrair" },
      { id: "e", text: "1,5 V e 1,0 Ω", isCorrect: false, distractorRationale: "Tensão de circuito aberto, e não de circuito fechado real" }
    ],
    detailedExplanation: {
      summary: "Aplicação da equação do gerador (U = ε - r.i) para determinar a tensão nos terminais e o valor do componente resistivo externo.",
      stepByStep: [
        "1. Equação do gerador: a tensão real fornecida U é igual a fem (ε) menos a perda interna (r * i).",
        "2. U = 1,5 V - (0,5 Ω * 1,0 A) = 1,5 - 0,5 = 1,0 V. Essa é a tensão útil.",
        "3. A lâmpada, recebendo 1,0 V e sendo atravessada pela corrente de 1,0 A, obedece à Lei de Ohm: R = U / i.",
        "4. R_lampada = 1,0 V / 1,0 A = 1,0 Ω."
      ],
      coreConcept: "Equação do Gerador e Resistência Interna",
      trapWarning: "Lembre-se que em circuitos reais (pilhas não ideais), uma parte da energia é 'gasta' dentro do próprio gerador. A d.d.p útil U é sempre menor que a fem (ε) em funcionamento."
    },
    commonTraps: ["Usar V=1,5V diretamente na Lei de Ohm da Lâmpada", "Ignorar a resistência interna da pilha"],
    tags: ["fisica", "geradores", "pilha"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-009",
    area: "natureza",
    competence: 6,
    skill: 21,
    topic: "Eletricidade",
    subtopic: "Eficiência de Geradores",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um gerador eólico fornece energia ao ser girado pela ação do vento. Observou-se que de toda a potência recebida no eixo mecânico (10 kW), há perdas por calor nas bobinas (resistência interna do gerador) equivalente a 2 kW.",
      source: "Original"
    },
    prompt: "Sendo assim, o rendimento elétrico percentual do gerador é de:",
    options: [
      { id: "a", text: "80%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "20%", isCorrect: false, distractorRationale: "Calculou a proporção da potência dissipada/perdida" },
      { id: "c", text: "12%", isCorrect: false, distractorRationale: "Fez divisões confusas de grandezas irrelevantes" },
      { id: "d", text: "100%", isCorrect: false, distractorRationale: "Ignorou as perdas indicadas" },
      { id: "e", text: "83%", isCorrect: false, distractorRationale: "Fez a divisão de 10 por 12 (10+2)" }
    ],
    detailedExplanation: {
      summary: "Cálculo de rendimento energético: razão entre potência útil e potência total.",
      stepByStep: [
        "1. Potência total recebida pelo gerador = 10 kW.",
        "2. Potência perdida internamente em calor = 2 kW.",
        "3. Potência elétrica útil (que efetivamente vai para a rede) = P_total - P_perdida = 10 kW - 2 kW = 8 kW.",
        "4. Rendimento (η) = P_útil / P_total = 8 / 10 = 0,80.",
        "5. Em porcentagem: 0,80 * 100% = 80%."
      ],
      coreConcept: "Rendimento de Máquinas (Eficiência)",
      trapWarning: "Verifique sempre se a questão dá a 'potência útil' ou a 'potência dissipada' antes de fazer a divisão de rendimento."
    },
    commonTraps: ["Achar que 2 kW é a potência útil gerada", "Não subtrair as perdas para achar a energia elétrica de saída"],
    tags: ["fisica", "rendimento", "gerador"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-010",
    area: "natureza",
    competence: 2,
    skill: 6,
    topic: "Eletricidade",
    subtopic: "Capacitores",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Os desfibriladores cardíacos funcionam através da rápida descarga de um capacitor previamente carregado por uma fonte de alta tensão. Um desfibrilador possui um capacitor de capacitância C = 40 µF carregado sob uma diferença de potencial de 3.000 V.",
      source: "Original"
    },
    prompt: "Qual é a energia potencial elétrica armazenada no capacitor pronta para ser liberada durante o pulso e qual é a carga total acumulada, respectivamente?",
    options: [
      { id: "a", text: "180 J e 0,12 C", isCorrect: true, distractorRationale: null },
      { id: "b", text: "360 J e 0,12 C", isCorrect: false, distractorRationale: "Esqueceu de dividir a energia por 2 (E = CV² em vez de CV²/2)" },
      { id: "c", text: "180 J e 1,2 C", isCorrect: false, distractorRationale: "Errou as casas decimais na conversão do microfarad (µ = 10⁻⁶)" },
      { id: "d", text: "60 J e 0,04 C", isCorrect: false, distractorRationale: "Fórmulas usadas incorretamente (ex: E = V*C e não V²*C/2)" },
      { id: "e", text: "360 J e 1,2 C", isCorrect: false, distractorRationale: "Erros combinados de falta de fator 1/2 e erros de potências de 10" }
    ],
    detailedExplanation: {
      summary: "Determinação de Carga e Energia armazenada em um capacitor num cenário biomédico.",
      stepByStep: [
        "1. Capacitância C = 40 µF = 40 x 10⁻⁶ F. Tensão V = 3000 V = 3 x 10³ V.",
        "2. Carga Q = C * V = (40 x 10⁻⁶) * (3 x 10³) = 120 x 10⁻³ C = 0,12 C.",
        "3. Energia Armazenada E = (C * V²) / 2 = (40 x 10⁻⁶ * 9 x 10⁶) / 2.",
        "4. E = 360 / 2 = 180 Joules."
      ],
      coreConcept: "Capacitância e Energia Potencial Elétrica de um Capacitor",
      trapWarning: "Cuidado com os prefixos (micro = 10⁻⁶) e não esqueça a divisão por 2 no cálculo da energia do capacitor, similar à energia cinética (mv²/2)."
    },
    commonTraps: ["Esquecer a divisão por 2 na fórmula da energia", "Erro matemático com notação científica do prefixo micro (µ)"],
    tags: ["fisica", "capacitores", "desfibrilador"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
