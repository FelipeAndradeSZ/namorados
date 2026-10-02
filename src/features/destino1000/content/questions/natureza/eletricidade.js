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
  },
  {
    id: "NAT-ELET-011",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletricidade",
    subtopic: "Chuveiro Elétrico e 2ª Lei de Ohm",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um chuveiro elétrico residencial opera sob tensão constante de 220 V e possui uma chave seletora com duas posições: 'Verão' e 'Inverno'. Para aquecer mais a água no inverno com a mesma vazão, o aparelho precisa dissipar maior potência elétrica na forma de calor.",
      source: "ENEM Física Aplicada"
    },
    prompt: "Para que o chuveiro dissipe maior potência térmica na posição 'Inverno', a chave seletora altera a resistência elétrica do filamento de modo que:",
    options: [
      { id: "a", text: "o comprimento útil do resistor seja reduzido, diminuindo sua resistência elétrica (R) e, consequentemente, aumentando a potência dissipada (P = U²/R).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o comprimento do resistor seja aumentado para elevar a resistência, pois resistências maiores sempre dissipam mais calor em qualquer circuito.", isCorrect: false, distractorRationale: "Como a tensão U é constante (220 V), P = U²/R: maior resistência resulta em MENOR potência dissipada." },
      { id: "c", text: "a área da seção reta do fio seja reduzida a zero para interromper temporariamente a passagem de elétrons.", isCorrect: false, distractorRationale: "Interromper a passagem de elétrons desliga o chuveiro (potência nula)." },
      { id: "d", text: "a voltagem fornecida pela tomada residencial aumente automaticamente para 440 V.", isCorrect: false, distractorRationale: "A tomada da concessionária fornece tensão fixa (220 V), o aparelho não altera a voltagem da rede." },
      { id: "e", text: "a resistividade do material aumente espontaneamente por resfriamento térmico dos condutores.", isCorrect: false, distractorRationale: "A resistividade depende da composição do material do resistor, mantendo-se constante." }
    ],
    detailedExplanation: {
      summary: "Sob tensão U fixa (rede residencial), a potência é inversamente proporcional à resistência elétrica: P = U² / R. No 'Inverno' (mais calor), precisamos de MAIOR potência -> MENOR resistência -> MENOR comprimento de fio (R = ρ·L/A).",
      stepByStep: [
        "1. Tensão constante: U = 220 V.",
        "2. Relação de potência: P = U² / R. Para aumentar P, deve-se diminuir R.",
        "3. Segunda Lei de Ohm: R = ρ · L / A. A resistência diminui quando o comprimento útil L diminui.",
        "4. Conclusão: a chave inverno seleciona um trecho mais curto da resistência, diminuindo R e aumentando P e a corrente i."
      ],
      coreConcept: "Potência Elétrica Sob DDP Constante e 2ª Lei de Ohm",
      trapWarning: "Cuidado: Muitos alunos memorizam P = R·i² e acham que maior R dá maior P. Mas em casas, a corrente i NÃO é constante! A grandeza constante é a tensão U (127 V ou 220 V). Logo, use SEMPRE P = U² / R."
    },
    commonTraps: [
      "Usar P = R·i² para tomada residencial e concluir erroneamente que maior resistência aquece mais",
      "Achar que o chuveiro altera a tensão da concessionária"
    ],
    tags: ["eletrodinamica", "chuveiro-eletrico", "potencia-eletrica", "leis-de-ohm"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-012",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletricidade",
    subtopic: "Associação de Resistores em Paralelo e Queima de Lâmpadas",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma residência padrão, três lâmpadas idênticas (L1, L2 e L3) estão instaladas em uma sala conectadas em paralelo a uma mesma rede elétrica de 127 V. Subitamente, o filamento da lâmpada L1 se rompe (queima), abrindo o seu ramo.",
      source: "Física dos Circuitos Residencias"
    },
    prompt: "Após a queima da lâmpada L1, o que ocorre com o funcionamento e com o brilho das lâmpadas L2 e L3 remanescentes?",
    options: [
      { id: "a", text: "Permanecem acesas com o mesmo brilho de antes, pois continuam submetidas à mesma diferença de potencial (127 V) da rede.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Apagam-se imediatamente, porque a corrente elétrica de todo o circuito é interrompida pela queima de L1.", isCorrect: false, distractorRationale: "Isso só ocorreria se estivessem associadas em série (como pisca-pisca de Natal antigo)." },
      { id: "c", text: "Passam a brilhar com o dobro da intensidade, pois dividem a corrente que passava por L1.", isCorrect: false, distractorRationale: "Em paralelo com fonte ideal, a corrente em cada ramo depende apenas de U/R daquele ramo, não mudando." },
      { id: "d", text: "Têm seus brilhos reduzidos pela metade devido ao aumento da resistência equivalente do circuito.", isCorrect: false, distractorRationale: "A resistência equivalente total aumenta e a corrente total da casa diminui, mas U e i em cada lâmpada individual continuam idênticos." },
      { id: "e", text: "Queimam simultaneamente em decorrência de um surto de sobretensão gerado pelo rompimento.", isCorrect: false, distractorRationale: "Circuitos paralelos proporcionam independência operacional completa entre os ramos." }
    ],
    detailedExplanation: {
      summary: "Em circuitos paralelos residenciais, cada ramo é independente. A tensão U em cada ramo continua 127 V, e a corrente i = U/R em cada lâmpada restante não se altera.",
      stepByStep: [
        "1. Associação em paralelo: todos os ramos estão ligados aos mesmos nós sob a mesma DDP (U = 127 V).",
        "2. Para a lâmpada L2: P₂ = U² / R. Como nem U nem R mudaram, a potência dissipada e o brilho continuam exatamente os mesmos.",
        "3. O mesmo vale para L3.",
        "4. O que muda no circuito geral: a corrente total que sai do disjuntor diminui (i_total = i₂ + i₃ em vez de i₁ + i₂ + i₃)."
      ],
      coreConcept: "Independência de Cargas em Associação em Paralelo",
      trapWarning: "No circuito paralelo, se uma lâmpada queima, as outras NÃO apagam nem mudam de brilho! É exatamente por isso que todas as casas usam ligação em paralelo."
    },
    commonTraps: [
      "Confundir comportamento do circuito série com circuito paralelo",
      "Achar que a corrente de uma lâmpada que queimou é 'empurrada' para as outras"
    ],
    tags: ["circuitos-paralelos", "lampadas", "associacao-resistores", "brilho"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-013",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletricidade",
    subtopic: "Dimensionamento de Disjuntores e Corrente Elétrica",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O circuito de tomadas de uma cozinha de 127 V possui ligados simultaneamente os seguintes aparelhos eletrodomésticos: um forno de micro-ondas de 1.270 W, uma air fryer de 1.905 W e uma geladeira de 254 W. Para proteger a fiação contra sobreaquecimento e princípio de incêndio, o circuito conta com um disjuntor termomagnético comercial (disponíveis nos valores nominais: 10 A, 15 A, 20 A, 25 A, 30 A e 40 A).",
      source: "ENEM Dimensionamento Elétrico Residencial"
    },
    prompt: "Para permitir o funcionamento simultâneo dos três aparelhos sem desarmes indesejados, mas garantindo a proteção mínima adequada da instalação, o disjuntor de menor valor nominal que deve ser instalado é o de:",
    options: [
      { id: "a", text: "30 A", isCorrect: true, distractorRationale: null },
      { id: "b", text: "20 A", isCorrect: false, distractorRationale: "20 A é insuficiente, pois a corrente total de pico é de 27 A, fazendo o disjuntor desarmar imediatamente." },
      { id: "c", text: "25 A", isCorrect: false, distractorRationale: "25 A também é inferior à corrente calculada de 27 A, desarmando o circuito." },
      { id: "d", text: "15 A", isCorrect: false, distractorRationale: "15 A mal suportaria apenas a air fryer (15 A sozinha)." },
      { id: "e", text: "40 A", isCorrect: false, distractorRationale: "Embora 40 A não desarme, a questão pede o MENOR valor nominal adequado; 40 A pode permitir que fios finos derretam antes do desarme." }
    ],
    detailedExplanation: {
      summary: "Soma das potências: P_total = 1270 + 1905 + 254 = 3429 W. Corrente total: i = P / U = 3429 / 127 = 27 A. O disjuntor comercial imediatamente superior a 27 A é o de 30 A.",
      stepByStep: [
        "1. Potência total = 1.270 W (micro-ondas) + 1.905 W (air fryer) + 254 W (geladeira) = 3.429 W.",
        "2. Tensão da rede: U = 127 V.",
        "3. Corrente total do circuito: i_total = P_total / U = 3.429 / 127 = 27 A.",
        "4. Como os disjuntores são padronizados (10, 15, 20, 25, 30, 40 A), para não desarmar com 27 A, precisamos escolher o valor logo acima: 30 A."
      ],
      coreConcept: "Dimensionamento de Disjuntores e Corrente Nominal (P = U·i)",
      trapWarning: "Sempre some as potências ou as correntes individuais: i1 = 10 A, i2 = 15 A, i3 = 2 A -> i_total = 27 A."
    },
    commonTraps: [
      "Calcular a corrente e esquecer de escolher o disjuntor comercial imediatamente superior",
      "Escolher 40 A sem ler que o enunciado pedia o 'menor valor nominal que permite o funcionamento'"
    ],
    tags: ["disjuntor", "corrente-eletrica", "potencia", "instalacoes-eletricas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-014",
    area: "natureza",
    competence: 5,
    skill: 19,
    topic: "Eletricidade",
    subtopic: "Transmissão em Alta Tensão e Efeito Joule",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A energia elétrica gerada em usinas hidrelétricas distantes (como Itaipu e Belo Monte) é transportada por milhares de quilômetros até os grandes centros consumidores através de linhas de transmissão que operam em altíssimas tensões (500 kV a 800 kV). Antes de chegar às residências, subestações abaixadoras reduzem a tensão para níveis seguros de distribuição.",
      source: "Operador Nacional do Sistema Elétrico (ONS)"
    },
    prompt: "A transmissão de energia elétrica a longas distâncias em alta tensão é adotada principalmente porque:",
    options: [
      { id: "a", text: "ao elevar a tensão (U) para uma mesma potência transmitida (P = U·i), a corrente elétrica (i) é drasticamente reduzida, minimizando as perdas de energia por calor nos cabos decorrentes do Efeito Joule (ΔP = R·i²).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "as resistências elétricas dos fios metálicos de transmissão se anulam quando submetidas a potenciais acima de 100 kV.", isCorrect: false, distractorRationale: "Resistência de fios condutores normais nunca se anula à temperatura ambiente; supercondutividade exige temperaturas criogênicas." },
      { id: "c", text: "a velocidade de propagação da corrente na rede ultrapassa a velocidade da luz no vácuo em altas voltagens.", isCorrect: false, distractorRationale: "Nada com massa ou informação se propaga mais rápido que a luz no vácuo." },
      { id: "d", text: "evita que aves e outros animais sofram descargas elétricas ao pousarem sobre os cabos desencapados.", isCorrect: false, distractorRationale: "Pousar em cabo único não dá choque porque não há DDP entre os pés do pássaro, independente da voltagem." },
      { id: "e", text: "permite o uso exclusivo de fios de plástico transparente como condutores nas torres de transmissão.", isCorrect: false, distractorRationale: "Plásticos são isolantes elétricos; os cabos são de alumínio com alma de aço." }
    ],
    detailedExplanation: {
      summary: "Potência transmitida: P = U·i. Para transmitir uma dada potência P, se U aumenta muito, a corrente i diminui na mesma proporção. Como a perda por calor nos fios é dada por ΔP_perda = R_fio · i², diminuir a corrente reduz as perdas ao quadrado!",
      stepByStep: [
        "1. Potência total que precisa ser entregue: P = U · i. Logo, i = P / U.",
        "2. Perda de potência por calor nos cabos da linha (Efeito Joule): P_perda = R_linha · i².",
        "3. Substituindo i: P_perda = R_linha · (P / U)² = R_linha · P² / U².",
        "4. Conclusão: a perda de energia nos cabos é inversamente proporcional ao QUADRADO da tensão (U²).",
        "5. Se multiplicarmos a tensão por 10, a perda por calor cai 100 vezes!"
      ],
      coreConcept: "Transmissão em Alta Tensão e Redução das Perdas Joule",
      trapWarning: "No ENEM, essa é uma das questões mais clássicas de física da energia: Transmitir em alta tensão serve para REDUZIR A CORRENTE e REDUZIR AS PERDAS POR EFEITO JOULE."
    },
    commonTraps: [
      "Achar que alta tensão é usada para a eletricidade se propagar mais rápido",
      "Confundir a tensão da linha com a queda de tensão sobre o fio"
    ],
    tags: ["linhas-transmissao", "alta-tensao", "efeito-joule", "transformadores"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-015",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletricidade",
    subtopic: "Ponte de Wheatstone e Sensores Piezorresistivos",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em balanças digitais de precisão e medidores de deformação estrutural em pontes, utiliza-se um circuito em Ponte de Wheatstone formado por quatro resistores (R1, R2, R3 e Rx) dispostos em losango e alimentados por uma fonte contínua. Um galvanômetro sensível conecta os vértices intermediários. Quando a ponte está em equilíbrio, a corrente no galvanômetro é rigorosamente zero.",
      source: "Instrumentação Eletrônica Biomédica"
    },
    prompt: "Em um ensaio de calibração onde R1 = 120 Ω, R2 = 360 Ω e R3 = 50 Ω, a ponte atinge o equilíbrio elétrico (corrente nula no galvanômetro). Sabendo que R1 está oposto a Rx no produto cruzado do circuito (R1 · Rx = R2 · R3), o valor da resistência do sensor Rx é:",
    options: [
      { id: "a", text: "150 Ω", isCorrect: true, distractorRationale: null },
      { id: "b", text: "50 Ω", isCorrect: false, distractorRationale: "Supôs igualdade direta com R3 sem resolver a equação cruzada." },
      { id: "c", text: "864 Ω", isCorrect: false, distractorRationale: "Multiplicou os valores errados na expressão." },
      { id: "d", text: "16,7 Ω", isCorrect: false, distractorRationale: "Inverteu a fração ao isolar a incógnita (R1 / (R2·R3))." },
      { id: "e", text: "530 Ω", isCorrect: false, distractorRationale: "Somou as resistências em vez de aplicar o produto cruzado da ponte." }
    ],
    detailedExplanation: {
      summary: "Na Ponte de Wheatstone em equilíbrio, o potencial nos terminais do galvanômetro é idêntico (V_B = V_D). A condição de equilíbrio é o produto cruzado dos resistores opostos: R1 · Rx = R2 · R3.",
      stepByStep: [
        "1. Condição de equilíbrio da ponte: R1 · Rx = R2 · R3.",
        "2. Dados do problema: R1 = 120 Ω, R2 = 360 Ω, R3 = 50 Ω.",
        "3. 120 · Rx = 360 · 50.",
        "4. Rx = (360 · 50) / 120 = 3 · 50 = 150 Ω."
      ],
      coreConcept: "Ponte de Wheatstone em Equilíbrio",
      trapWarning: "Lembre-se da simplificação: 360 dividido por 120 dá exatamente 3. 3 vezes 50 = 150 Ω. Sempre simplifique antes de multiplicar números grandes!"
    },
    commonTraps: [
      "Montar a igualdade somando resistências como se fosse circuito em série",
      "Errar a simplificação fracionária rápida"
    ],
    tags: ["ponte-wheatstone", "sensores", "circuitos-eletricos", "equilibrio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-016",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletricidade",
    subtopic: "Gerador Real e Força Eletromotriz",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A bateria de um automóvel possui força eletromotriz nominal E = 12,0 V e resistência interna r = 0,05 Ω. Quando o motorista dá a partida, o motor de arranque solicita uma corrente intensa de i = 80 A durante dois segundos.",
      source: "Original"
    },
    prompt: "Durante o acionamento do motor de arranque, qual é a diferença de potencial efetiva (tensão útil U) fornecida pela bateria aos terminais do sistema elétrico do veículo?",
    options: [
      { id: "a", text: "8,0 V", isCorrect: true, distractorRationale: null },
      { id: "b", text: "12,0 V", isCorrect: false, distractorRationale: "12,0 V seria a tensão se o gerador fosse ideal (r = 0) ou se estivesse em circuito aberto (i = 0)." },
      { id: "c", text: "4,0 V", isCorrect: false, distractorRationale: "4,0 V é a queda de tensão interna dissipada (r·i), e não a tensão útil nos terminais." },
      { id: "d", text: "16,0 V", isCorrect: false, distractorRationale: "Somou r·i em vez de subtrair, confundindo gerador com receptor elétrico (U = E + r·i)." },
      { id: "e", text: "0 V", isCorrect: false, distractorRationale: "0 V ocorreria apenas em situação de curto-circuito pleno (i_cc = E/r = 240 A)." }
    ],
    detailedExplanation: {
      summary: "Equação do gerador real: U = E - r·i. A queda de tensão interna é U_int = r·i = 0,05 · 80 = 4,0 V. Logo, a tensão útil restante é U = 12,0 - 4,0 = 8,0 V.",
      stepByStep: [
        "1. Identificar o dispositivo: Gerador real (fornece energia ao circuito).",
        "2. Equação característica do gerador: U = E - r·i.",
        "3. Queda de tensão por efeito Joule na resistência interna: r·i = 0,05 Ω · 80 A = 4,0 V.",
        "4. Tensão útil nos terminais: U = 12,0 V - 4,0 V = 8,0 V.",
        "5. Curiosidade prática: é por isso que os faróis do carro enfraquecem ligeiramente no instante exato da partida!"
      ],
      coreConcept: "Equação do Gerador Elétrico Real (U = E - r·i)",
      trapWarning: "Cuidado: Em gerador elétrico, a resistência interna SUBTRAI da fem (U = E - r·i). Em receptor elétrico (motor, bateria recarregando), ela SOMA à fcem (U = E' + r'·i)."
    },
    commonTraps: [
      "Esquecer da resistência interna da bateria",
      "Confundir a equação do gerador (sinal negativo) com a do receptor (sinal positivo)"
    ],
    tags: ["gerador-real", "forca-eletromotriz", "bateria", "resistencia-interna"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-017",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletricidade",
    subtopic: "Aparelhos de Medida: Voltímetro e Amperímetro",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em aulas experimentais de eletricidade, estudantes utilizam multímetros para aferir grandezas em circuitos. O manual técnico especifica que, em condições ideais de medição, o instrumento não deve perturbar as correntes e tensões originais do circuito sob análise.",
      source: "Laboratório de Física Experimental"
    },
    prompt: "Para medir a corrente que atravessa um resistor e a diferença de potencial sobre ele sem alterar o comportamento do circuito, as conexões e resistências internas dos medidores ideais devem ser:",
    options: [
      { id: "a", text: "amperímetro ligado em série com resistência interna nula (R_A = 0); voltímetro ligado em paralelo com resistência interna infinita (R_V = ∞).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "amperímetro ligado em paralelo com resistência interna infinita; voltímetro ligado em série com resistência nula.", isCorrect: false, distractorRationale: "Isso causaria curto-circuito com o voltímetro e impediria a corrente com o amperímetro." },
      { id: "c", text: "ambos ligados em série com resistências internas idênticas de 100 Ω.", isCorrect: false, distractorRationale: "Voltímetro em série bloquearia o circuito por sua alta resistência, alterando os valores." },
      { id: "d", text: "ambos ligados em paralelo com resistência interna nula.", isCorrect: false, distractorRationale: "Ligar um amperímetro de resistência nula em paralelo queima o aparelho ou desarma o disjuntor em curto-circuito." },
      { id: "e", text: "amperímetro ligado em série com resistência infinita para absorver toda a voltagem da pilha.", isCorrect: false, distractorRationale: "Amperímetro com resistência infinita cortaria a corrente a zero." }
    ],
    detailedExplanation: {
      summary: "Amperímetro mede corrente: deve ser ligado em SÉRIE e ter resistência NULA (R_A = 0) para não provocar queda de tensão. Voltímetro mede DDP: deve ser ligado em PARALELO e ter resistência INFINITA (R_V = ∞) para não desviar corrente.",
      stepByStep: [
        "1. Amperímetro: corrente precisa passar por dentro dele -> ligação em SÉRIE. Para não diminuir a corrente do circuito (ΔV = R_A · i = 0), sua resistência interna deve ser zero (R_A ≈ 0).",
        "2. Voltímetro: mede diferença de potencial entre dois pontos -> ligação em PARALELO. Para não roubar corrente do ramo medido (i_V = U / R_V = 0), sua resistência interna deve ser infinita (R_V ≈ ∞).",
        "3. Erro de laboratório perigoso: ligar amperímetro em paralelo provoca curto-circuito direto!"
      ],
      coreConcept: "Medidores Elétricos Ideais e Regras de Conexão",
      trapWarning: "Macete mnemônico: Amperímetro em Série (A-S); Voltímetro em Paralelo (V-P)."
    },
    commonTraps: [
      "Inverter o tipo de ligação (colocar voltímetro em série e amperímetro em paralelo)",
      "Achar que o amperímetro ideal tem resistência infinita"
    ],
    tags: ["amperimetro", "voltimetro", "medidas-eletricas", "curto-circuito"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-018",
    area: "natureza",
    competence: 5,
    skill: 19,
    topic: "Eletricidade",
    subtopic: "Eficiência Energética e Consumo (LED vs Incandescente)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma família substituiu 10 lâmpadas incandescentes antigas de 60 W cada por 10 lâmpadas de tecnologia LED que produzem o mesmo fluxo luminoso consumindo apenas 9 W cada. As lâmpadas ficam acesas, em média, durante 5 horas por dia ao longo de um mês de 30 dias. A tarifa cobrada pela distribuidora local de energia elétrica é de R$ 0,80 por kWh consumido.",
      source: "Eficiência Energética Procel/Eletrobras"
    },
    prompt: "A economia financeira mensal proporcionada exclusivamente pela substituição dessas 10 lâmpadas na fatura de energia será de:",
    options: [
      { id: "a", text: "R$ 61,20", isCorrect: true, distractorRationale: null },
      { id: "b", text: "R$ 72,00", isCorrect: false, distractorRationale: "Calculou o custo total das lâmpadas incandescentes antigas sem subtrair o custo das novas de LED." },
      { id: "c", text: "R$ 10,80", isCorrect: false, distractorRationale: "Calculou apenas o consumo das lâmpadas LED novas, e não a economia obtida." },
      { id: "d", text: "R$ 51,00", isCorrect: false, distractorRationale: "Esqueceu de multiplicar pelo número de dias do mês (30 dias) ou errou a potência economizada." },
      { id: "e", text: "R$ 612,00", isCorrect: false, distractorRationale: "Esqueceu de converter Watts para quilowatts (dividir por 1.000)." }
    ],
    detailedExplanation: {
      summary: "Potência economizada = 10 x (60 - 9) = 510 W = 0,51 kW. Energia economizada no mês: E = P · Δt = 0,51 kW · (5 h/dia · 30 dias) = 0,51 · 150 = 76,5 kWh. Economia financeira = 76,5 kWh · R$ 0,80 = R$ 61,20.",
      stepByStep: [
        "1. Potência economizada por lâmpada: 60 W - 9 W = 51 W.",
        "2. Potência total economizada com 10 lâmpadas: ΔP = 10 · 51 W = 510 W.",
        "3. Converter para quilowatts: ΔP = 510 / 1.000 = 0,51 kW.",
        "4. Tempo de funcionamento no mês: Δt = 5 h/dia · 30 dias = 150 horas.",
        "5. Energia elétrica economizada: ΔE = ΔP · Δt = 0,51 kW · 150 h = 76,5 kWh.",
        "6. Economia na conta: 76,5 kWh · R$ 0,80/kWh = R$ 61,20."
      ],
      coreConcept: "Cálculo de Energia Elétrica em kWh e Economia na Conta de Luz",
      trapWarning: "Cuidado clássico do ENEM: a conta de luz vem em kWh (quilowatt-hora), portanto SEMPRE divida a potência em Watts por 1.000 antes de multiplicar pelo tempo em horas!"
    },
    commonTraps: [
      "Esquecer de dividir por 1.000 para converter W em kW",
      "Calcular o gasto novo em vez da economia pedida"
    ],
    tags: ["consumo-energia", "kwh", "economia-energia", "lampada-led"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-019",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletricidade",
    subtopic: "Leis de Kirchhoff e Conservação de Energia",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma placa de circuito eletrônico, três condutores convergem para uma mesma junção (nó elétrico A). Sabe-se que pelo condutor 1 entra uma corrente de 4,5 A e pelo condutor 2 entra uma corrente de 2,3 A. Um terceiro condutor conecta o nó A a uma carga externa.",
      source: "Física dos Circuitos Elétricos"
    },
    prompt: "Com base no princípio da conservação da carga elétrica (Primeira Lei de Kirchhoff ou Lei dos Nós), o comportamento e o valor da corrente elétrica no condutor 3 são:",
    options: [
      { id: "a", text: "saída do nó A com intensidade de 6,8 A.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "entrada no nó A com intensidade de 6,8 A.", isCorrect: false, distractorRationale: "Se todas as correntes entrassem no nó, haveria acúmulo infinito espontâneo de cargas elétricas no ponto, violando a conservação de carga." },
      { id: "c", text: "saída do nó A com intensidade de 2,2 A.", isCorrect: false, distractorRationale: "Subtraiu 4,5 - 2,3 em vez de somar as correntes convergentes." },
      { id: "d", text: "corrente nula, porque o nó elétrico anula as cargas positivas e negativas.", isCorrect: false, distractorRationale: "Cargas em movimento não se anulam em um nó condutor comum." },
      { id: "e", text: "saída do nó A com intensidade de 10,35 A.", isCorrect: false, distractorRationale: "Multiplicou as correntes 4,5 x 2,3." }
    ],
    detailedExplanation: {
      summary: "A Lei dos Nós de Kirchhoff é a expressão direta da Conservação da Carga Elétrica: a soma de todas as correntes que entram em um nó é igual à soma das correntes que saem dele (Σ i_entra = Σ i_sai).",
      stepByStep: [
        "1. Identificar o nó: ponto de confluência de múltiplos ramos condutores.",
        "2. Correntes que entram: i1 = 4,5 A e i2 = 2,3 A -> Total entrando = 4,5 + 2,3 = 6,8 A.",
        "3. Princípio físico: a carga não pode ser criada nem destruída no nó (não há capacitância infinita nem acúmulo pontual).",
        "4. Logo, para conservar a carga: a corrente no condutor 3 DEVE SAIR do nó com intensidade i3 = 6,8 A."
      ],
      coreConcept: "Primeira Lei de Kirchhoff (Lei dos Nós) e Conservação da Carga",
      trapWarning: "Lembre-se: Lei dos Nós = Conservação da CARGA elétrica. Lei das Malhas = Conservação da ENERGIA elétrica."
    },
    commonTraps: [
      "Achar que correntes que entram podem apenas se anular",
      "Confundir a base física da Lei dos Nós (carga) com a da Lei das Malhas (energia)"
    ],
    tags: ["kirchhoff", "lei-dos-nos", "conservacao-carga", "circuitos-eletricos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-ELET-020",
    area: "natureza",
    competence: 5,
    skill: 18,
    topic: "Eletricidade",
    subtopic: "Segurança Elétrica, Choque e Dispositivo DR",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O choque elétrico ocorre quando o corpo humano se torna parte de um circuito condutor fechado. A gravidade dos efeitos fisiológicos depende da intensidade da corrente, do tempo de contato e do trajeto pelo corpo (como o trajeto mão-pé, que atravessa o miocárdio). Correntes a partir de 30 mA a 50 mA podem desencadear parada respiratória e fibrilação ventricular fatal. Por essa razão, normas técnicas de construção (NBR 5410) tornaram obrigatório o uso do Dispositivo Diferencial Residual (DR).",
      source: "ABNT NBR 5410 e Segurança em Eletricidade"
    },
    prompt: "O princípio físico de funcionamento do dispositivo DR na proteção da vida humana contra choques elétricos fundamenta-se na:",
    options: [
      { id: "a", text: "comparação contínua entre a corrente que entra pelo condutor fase e a que retorna pelo condutor neutro, desligando o circuito em frações de segundo se houver diferença superior a 30 mA (indicando corrente de fuga pelo corpo de uma pessoa para a terra).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "substituição total da corrente alternada da residência por eletricidade estática de polaridade nula.", isCorrect: false, distractorRationale: "O DR não converte o tipo de corrente elétrica da rede da concessionária." },
      { id: "c", text: "elevação instantânea da resistência do corpo humano para 10 milhões de ohms no momento do toque.", isCorrect: false, distractorRationale: "Nenhum aparelho externo altera biologicamente a resistência dos tecidos humanos." },
      { id: "d", text: "blindagem eletrostática magnética dos aparelhos que repele o contato dos dedos das pessoas.", isCorrect: false, distractorRationale: "A blindagem eletrostática (Gaiola de Faraday) impede campo interno em condutores, não evita toque físico em partes vivas." },
      { id: "e", text: "supressão exclusiva de sobrecargas de longa duração por fusão gradual de lâminas bimetálicas.", isCorrect: false, distractorRationale: "A função de proteção contra sobrecargas por lâmina bimetálica é do disjuntor termomagnético comum, não a função primordial de proteção a choques do DR." }
    ],
    detailedExplanation: {
      summary: "Em funcionamento normal: i_fase = i_neutro. Se uma pessoa toca o fio fase e a corrente foge pelo seu corpo para o chão (terra), a corrente no neutro fica menor. O transformador toroidal do DR detecta esse desequilíbrio e desarma o circuito em milissegundos, salvando a vida.",
      stepByStep: [
        "1. Em um circuito fechado normal sem fugas: a corrente que entra pelo fio fase retorna integralmente pelo fio neutro (i_fase - i_neutro = 0).",
        "2. Se uma pessoa toma um choque: parte da corrente escoa pelo seu corpo até o solo (terra). Logo: i_neutro = i_fase - i_choque.",
        "3. O DR mede a diferença (i_fase - i_neutro). Se essa diferença ultrapassar o limiar de segurança (geralmente 30 mA), o relé interno desliga tudo em menos de 0,04 segundos.",
        "4. Diferença crucial: Disjuntor comum protege os FIOS contra aquecimento/incêndio (desarma com 20 A, 30 A); o DR protege as PESSOAS contra choques fatais (desarma com míseros 0,03 A de fuga)."
      ],
      coreConcept: "Dispositivo Diferencial Residual (DR) e Proteção Contra Choques Elétricos",
      trapWarning: "No ENEM: Disjuntor comum NÃO protege contra choques! Um choque fatal de 50 mA não faz nem cócegas em um disjuntor de 20 A. Quem salva vidas contra choques é o DR."
    },
    commonTraps: [
      "Achar que disjuntor termomagnético comum protege pessoas contra choque elétrico",
      "Não saber que a corrente de fuga do DR é da ordem de miliamperes (30 mA)"
    ],
    tags: ["seguranca-eletrica", "dispositivo-dr", "choque-eletrico", "fibrilacao-ventricular"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

