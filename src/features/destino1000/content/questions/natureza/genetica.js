export const QUESTIONS_GENETICA = [
  {
    id: "NAT-GEN-001",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Primeira Lei de Mendel",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O albinismo é uma anomalia genética condicionada por um alelo recessivo 'a'. O alelo dominante 'A' condiciona pigmentação normal. Um casal com pigmentação normal, que já possui um filho albino, deseja ter um segundo filho.",
      source: "Original"
    },
    prompt: "Qual a probabilidade de essa segunda criança nascer com pigmentação normal?",
    options: [
      { id: "a", text: "75%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "25%", isCorrect: false, distractorRationale: "Probabilidade da criança ser albina, não normal" },
      { id: "c", text: "50%", isCorrect: false, distractorRationale: "Confundiu com cruzamento entre heterozigoto e recessivo" },
      { id: "d", text: "100%", isCorrect: false, distractorRationale: "Acreditou que genitores fenotipicamente normais só teriam filhos normais" },
      { id: "e", text: "33%", isCorrect: false, distractorRationale: "Confusão com a probabilidade condicional de portador" }
    ],
    detailedExplanation: {
      summary: "Cálculo probabilístico com base no heredograma para herança autossômica recessiva.",
      stepByStep: [
        "1. O casal tem pigmentação normal, logo ambos possuem o alelo 'A'.",
        "2. Como tiveram um filho albino ('aa'), obrigatoriamente ambos os pais são heterozigotos ('Aa').",
        "3. Cruzamento: Aa x Aa. Os descendentes podem ser: AA (25%), Aa (50%) ou aa (25%).",
        "4. Probabilidade de filho com pigmentação normal (A_) é a soma de AA e Aa, que é 75% ou 3/4."
      ],
      coreConcept: "1ª Lei de Mendel - Segregação de Fatores",
      trapWarning: "Lembrar de sempre deduzir o genótipo dos pais através dos filhos (se têm filho recessivo, pais que têm a característica dominante são heterozigotos)."
    },
    commonTraps: ["Confundir recessivo com dominante", "Errar o quadro de Punnett"],
    tags: ["biologia", "genetica", "mendel"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-002",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Grupos Sanguíneos (Sistema ABO)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma disputa de paternidade, o juiz solicitou a tipagem sanguínea (Sistema ABO) da criança, da mãe e do suposto pai. O resultado revelou que a mãe é do tipo O, a criança é do tipo A e o suposto pai é do tipo AB.",
      source: "Original"
    },
    prompt: "Com relação à possibilidade de paternidade, é correto afirmar que:",
    options: [
      { id: "a", text: "A paternidade é possível, pois o suposto pai pode ter doado o alelo I^A e a mãe o alelo i.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "A paternidade é impossível, pois pais AB não podem ter filhos do tipo A se a mãe for O.", isCorrect: false, distractorRationale: "Falso, pais AB doam I^A ou I^B. Com mãe 'ii', filhos serão tipo A ou B." },
      { id: "c", text: "A criança deveria ser obrigatoriamente do tipo O, igual à mãe.", isCorrect: false, distractorRationale: "Ignorou a contribuição genética do pai." },
      { id: "d", text: "A paternidade é possível, mas a criança seria obrigatoriamente do tipo AB.", isCorrect: false, distractorRationale: "Impossível a mãe O doar alelos dominantes." },
      { id: "e", text: "Falta o conhecimento do fator Rh para definir se a paternidade é possível.", isCorrect: false, distractorRationale: "O fator Rh é independente e não interfere na tipagem ABO da questão." }
    ],
    detailedExplanation: {
      summary: "Interpretação de herança de grupos sanguíneos no Sistema ABO em casos de exclusão de paternidade.",
      stepByStep: [
        "1. A mãe é tipo O, ou seja, tem genótipo 'ii' e doa o alelo 'i' para todos os filhos.",
        "2. A criança é tipo A. Como recebeu 'i' da mãe, seu genótipo é obrigatoriamente 'I^A i'.",
        "3. Isso exige que o pai tenha doado o alelo 'I^A'.",
        "4. O suposto pai é tipo AB ('I^A I^B'). Ele possui o alelo 'I^A', logo pode doá-lo para a criança.",
        "5. Conclusão: a paternidade não pode ser descartada (é possível)."
      ],
      coreConcept: "Polialelia e Codominância no Sistema ABO",
      trapWarning: "Lembrar que mãe tipo O ('ii') sempre fará com que o filho não tenha o genótipo homozigoto dominante para qualquer outro tipo."
    },
    commonTraps: ["Achar que casais ABxO geram filhos AB ou O"],
    tags: ["biologia", "sistema-abo", "paternidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-003",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Herança Ligada ao Sexo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O daltonismo (cegueira para cores) tem herança recessiva ligada ao cromossomo X. Uma mulher de visão normal, filha de um pai daltônico, casa-se com um homem de visão normal.",
      source: "Original"
    },
    prompt: "Qual a probabilidade de o casal ter um filho (sexo masculino) daltônico?",
    options: [
      { id: "a", text: "50%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "25%", isCorrect: false, distractorRationale: "Confundiu com a probabilidade em relação ao total de filhos" },
      { id: "c", text: "0%", isCorrect: false, distractorRationale: "Acreditou que pais normais só têm filhos normais" },
      { id: "d", text: "100%", isCorrect: false, distractorRationale: "Confundiu com o caso da mãe ser daltônica" },
      { id: "e", text: "75%", isCorrect: false, distractorRationale: "Cálculo errado baseando-se em autossômica dominante" }
    ],
    detailedExplanation: {
      summary: "Avaliação do heredograma com característica genética ligada ao sexo.",
      stepByStep: [
        "1. Pai da mulher é daltônico (X^d Y), logo ela recebeu o cromossomo X^d dele.",
        "2. Sendo a mulher de visão normal, ela é portadora: X^D X^d.",
        "3. O homem tem visão normal, então seu genótipo é X^D Y.",
        "4. A questão pede a probabilidade de um *filho homem* ser daltônico. Filhos homens recebem Y do pai e X da mãe.",
        "5. Há 50% de chance de receberem X^D (normais) e 50% de receberem X^d (daltônicos)."
      ],
      coreConcept: "Herança recessiva ligada ao cromossomo X",
      trapWarning: "Cuidado com o texto: 'probabilidade de o casal ter uma criança daltônica' é diferente de 'probabilidade de um filho menino ser daltônico'."
    },
    commonTraps: ["Confundir a probabilidade condicional pelo sexo (50%) com a geral (25%)"],
    tags: ["biologia", "daltonismo", "ligada-ao-sexo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-004",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Segunda Lei de Mendel",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na ervilha-de-cheiro, a cor amarela (V) domina sobre a verde (v), e o formato liso (R) domina sobre o rugoso (r). Em um cruzamento entre plantas diíbridas (VvRr x VvRr), avalia-se a proporção fenotípica da prole. Esses dois pares de alelos segregam independentemente.",
      source: "Original"
    },
    prompt: "Qual a probabilidade de nascer uma semente simultaneamente verde e lisa?",
    options: [
      { id: "a", text: "3/16", isCorrect: true, distractorRationale: null },
      { id: "b", text: "9/16", isCorrect: false, distractorRationale: "Probabilidade do duplo dominante (amarelo e liso)" },
      { id: "c", text: "1/16", isCorrect: false, distractorRationale: "Probabilidade do duplo recessivo (verde e rugoso)" },
      { id: "d", text: "6/16", isCorrect: false, distractorRationale: "Soma das classes mistas em vez de 3/16" },
      { id: "e", text: "1/4", isCorrect: false, distractorRationale: "Probabilidade calculada para uma única característica" }
    ],
    detailedExplanation: {
      summary: "Aplicação direta da segregação independente (2ª Lei de Mendel) em diíbridos.",
      stepByStep: [
        "1. Cruzamento: Vv x Vv gera 3/4 Amarela e 1/4 verde (vv).",
        "2. Cruzamento: Rr x Rr gera 3/4 Lisa (R_) e 1/4 rugosa (rr).",
        "3. Como há segregação independente, multiplicam-se as probabilidades.",
        "4. Probabilidade de verde (vv) E lisa (R_) = (1/4) * (3/4) = 3/16."
      ],
      coreConcept: "Segregação Independente - 2ª Lei de Mendel",
      trapWarning: "Lembre da regra do E (multiplicação de probabilidades isoladas) para segregação independente."
    },
    commonTraps: ["Achar que os genes estão ligados (Linkage)"],
    tags: ["biologia", "mendelismo", "probabilidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-005",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Epistasia e Interação Gênica",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A cor da pelagem de labradores é condicionada por dois pares de genes. O alelo B determina pelagem preta, e b, pelagem marrom (chocolate). O gene E (alelo e) epistático impede a deposição de pigmento, deixando o cão com pelagem dourada/amarela, independentemente de ser B_ ou bb.",
      source: "Original"
    },
    prompt: "Um casal de cães diíbridos (BbEe) foi cruzado. Qual é a proporção fenotípica esperada na ninhada (Preto : Marrom : Amarelo)?",
    options: [
      { id: "a", text: "9 : 3 : 4", isCorrect: true, distractorRationale: null },
      { id: "b", text: "9 : 3 : 3 : 1", isCorrect: false, distractorRationale: "Proporção de 2ª Lei sem epistasia" },
      { id: "c", text: "12 : 3 : 1", isCorrect: false, distractorRationale: "Proporção típica de epistasia dominante" },
      { id: "d", text: "9 : 7", isCorrect: false, distractorRationale: "Proporção de complementação gênica" },
      { id: "e", text: "13 : 3", isCorrect: false, distractorRationale: "Proporção de outro tipo raro de epistasia" }
    ],
    detailedExplanation: {
      summary: "Determinação de proporções em epistasia recessiva cruzando duplos heterozigotos.",
      stepByStep: [
        "1. Cruzamento BbEe x BbEe gera 16 combinações de 2ª lei.",
        "2. Indivíduos ee (epistático) serão sempre amarelos: B_ee (3/16) + bbee (1/16) = 4/16 amarelos.",
        "3. Indivíduos B_E_ manifestam o preto (dominante B): 9/16 pretos.",
        "4. Indivíduos bbE_ manifestam o marrom: 3/16 marrons.",
        "5. A proporção fica 9 Pretos : 3 Marrons : 4 Amarelos."
      ],
      coreConcept: "Epistasia Recessiva",
      trapWarning: "Observe qual alelo inibe a expressão dos demais. Na epistasia recessiva a inibição ocorre em homozigose (ee)."
    },
    commonTraps: ["Confundir epistasia recessiva (9:3:4) com epistasia dominante (12:3:1)"],
    tags: ["biologia", "epistasia", "labradores"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-006",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Alelos Letais",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em certa raça de camundongos, o alelo dominante K determina a coloração amarela do pelo e é letal em homozigose, matando os embriões. O alelo recessivo k determina coloração aguti. Dois camundongos amarelos são cruzados.",
      source: "Original"
    },
    prompt: "Qual a proporção fenotípica esperada entre os filhotes nascidos vivos?",
    options: [
      { id: "a", text: "2 amarelos : 1 aguti", isCorrect: true, distractorRationale: null },
      { id: "b", text: "3 amarelos : 1 aguti", isCorrect: false, distractorRationale: "Proporção clássica sem considerar letalidade" },
      { id: "c", text: "1 amarelo : 2 agutis", isCorrect: false, distractorRationale: "Inversão dos dominantes e recessivos viáveis" },
      { id: "d", text: "100% amarelos", isCorrect: false, distractorRationale: "Assumiu que amarelos eram homozigotos viáveis" },
      { id: "e", text: "1 aguti : 1 amarelo", isCorrect: false, distractorRationale: "Erro no cálculo do cruzamento de heterozigotos (Aa x Aa)" }
    ],
    detailedExplanation: {
      summary: "Interpretação de proporções genotípicas envolvendo alelos letais.",
      stepByStep: [
        "1. Os camundongos amarelos têm que ser heterozigotos (Kk), já que os homozigotos (KK) morrem antes do nascimento.",
        "2. O cruzamento Kk x Kk resulta genotipicamente em 1/4 KK, 2/4 Kk e 1/4 kk.",
        "3. Os indivíduos KK (1/4) não nascem vivos. Portanto, ficamos com as outras 3 partes (Kk e kk).",
        "4. Entre os sobreviventes, teremos 2 partes Kk (amarelos) e 1 parte kk (aguti).",
        "5. Portanto, a proporção entre os vivos é 2:1."
      ],
      coreConcept: "Alelos Letais Recessivos para a Sobrevivência (embora Dominantes para cor)",
      trapWarning: "Retire o indivíduo afetado pelo alelo letal do espaço amostral na probabilidade final."
    },
    commonTraps: ["Esquecer de excluir os natimortos do cálculo"],
    tags: ["biologia", "alelo-letal", "camundongos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-007",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Linkage (Ligação Gênica)",
    difficulty: 4,
    estimatedTimeSeconds: 200,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em drosófilas, os genes para cor do corpo e tamanho da asa estão localizados no mesmo cromossomo (ligação gênica) com uma distância de 20 unidades de recombinação (UR) entre si.",
      source: "Original"
    },
    prompt: "No cruzamento-teste de uma fêmea duplo-heterozigota em posição CIS (AB/ab) com um macho duplo-recessivo (ab/ab), qual será a proporção esperada de descendentes com genótipo Ab/ab?",
    options: [
      { id: "a", text: "10%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "20%", isCorrect: false, distractorRationale: "Confundiu a taxa total de permutação (20%) com a parcela de um dos recombinantes" },
      { id: "c", text: "40%", isCorrect: false, distractorRationale: "É a frequência de um genótipo parental" },
      { id: "d", text: "25%", isCorrect: false, distractorRationale: "Acreditou que ocorria segregação independente (Mendel)" },
      { id: "e", text: "80%", isCorrect: false, distractorRationale: "Soma dos gametas parentais" }
    ],
    detailedExplanation: {
      summary: "Cálculo da frequência de gametas recombinantes em linkage parcial (crossing-over).",
      stepByStep: [
        "1. A fêmea (AB/ab) formará 4 tipos de gametas.",
        "2. A taxa de permutação é 20% (distância em UR = percentagem de recombinação).",
        "3. Gametas recombinantes (Ab e aB) somarão 20%, logo, haverá 10% de Ab e 10% de aB.",
        "4. Gametas parentais (AB e ab) somarão 80%, sendo 40% AB e 40% ab.",
        "5. O macho ab/ab produz apenas gametas ab. Assim, o descendente Ab/ab provém da fecundação do gameta recombinante Ab da fêmea (10%)."
      ],
      coreConcept: "Ligação Gênica (Linkage) e Taxa de Recombinação",
      trapWarning: "Sempre dividir a taxa de crossing-over (UR) por 2 para encontrar a frequência individual de cada tipo de gameta recombinante."
    },
    commonTraps: ["Não dividir a taxa de recombinação (20%) pelos dois tipos recombinantes (10% cada)"],
    tags: ["biologia", "linkage", "crossing-over"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-008",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Genética de Populações",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O Princípio de Hardy-Weinberg descreve uma população teórica que não sofre ação de fatores evolutivos. Em uma população de 10.000 pessoas em equilíbrio genético, a frequência de indivíduos com característica recessiva (alelo b) é de 16%.",
      source: "Original"
    },
    prompt: "O número esperado de indivíduos portadores do gene (heterozigotos) nesta população é de:",
    options: [
      { id: "a", text: "4.800", isCorrect: true, distractorRationale: null },
      { id: "b", text: "3.600", isCorrect: false, distractorRationale: "Calculou incorretamente a soma ou as frequências (ex: 60% homozigotos dominantes)" },
      { id: "c", text: "1.600", isCorrect: false, distractorRationale: "É o número de indivíduos homozigotos recessivos, não heterozigotos" },
      { id: "d", text: "6.400", isCorrect: false, distractorRationale: "Misturou o homozigoto com a frequência do dominante" },
      { id: "e", text: "2.400", isCorrect: false, distractorRationale: "Errou a fórmula 2pq, multiplicando apenas p*q sem o fator 2" }
    ],
    detailedExplanation: {
      summary: "Aplicação do teorema de Hardy-Weinberg (p² + 2pq + q² = 1) para descobrir a frequência de heterozigotos.",
      stepByStep: [
        "1. A frequência do fenótipo recessivo (q²) é 16%, ou seja, 0,16.",
        "2. A frequência do alelo recessivo (q) é a raiz quadrada de 0,16 = 0,4.",
        "3. Como p + q = 1, a frequência do alelo dominante (p) é 1 - 0,4 = 0,6.",
        "4. A frequência dos heterozigotos é 2pq = 2 * 0,6 * 0,4 = 0,48 (48%).",
        "5. O número de indivíduos heterozigotos será 48% de 10.000 = 4.800."
      ],
      coreConcept: "Equilíbrio de Hardy-Weinberg",
      trapWarning: "Lembre-se de não confundir frequência fenotípica (q²) com a frequência alélica (q)."
    },
    commonTraps: ["Esquecer a fórmula 2pq e calcular apenas pq (0,24)", "Usar a porcentagem 16% diretamente como q"],
    tags: ["biologia", "hardy-weinberg", "populacoes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-009",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Herança Mitocondrial",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Neuropatia Óptica Hereditária de Leber (LHON) é uma doença causada por uma mutação no DNA mitocondrial. O cruzamento é analisado entre um homem afetado pela LHON e uma mulher normal (sem mutação no DNA mitocondrial).",
      source: "Original"
    },
    prompt: "Sobre os filhos desse casal, qual é o padrão de herança esperado para essa doença?",
    options: [
      { id: "a", text: "Nenhum filho será afetado, pois as mitocôndrias do zigoto são herdadas exclusivamente do gameta feminino.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Todos os filhos serão afetados, pois o alelo mutante vem do pai que expressa a doença.", isCorrect: false, distractorRationale: "Isso seria verdade na herança holândrica ou autossômica dominante no pai." },
      { id: "c", text: "Apenas as filhas serão afetadas, devido à ligação com o cromossomo X.", isCorrect: false, distractorRationale: "Herança mitocondrial não é herança ligada ao cromossomo X." },
      { id: "d", text: "A prole tem 50% de chance de ser afetada, de acordo com as leis mendelianas de recessividade.", isCorrect: false, distractorRationale: "O DNA mitocondrial não segue segregação mendeliana." },
      { id: "e", text: "Nenhum filho será afetado, pois as doenças mitocondriais se manifestam apenas se os dois pais forem portadores.", isCorrect: false, distractorRationale: "Misturou o conceito de herança autossômica recessiva com a mitocondrial." }
    ],
    detailedExplanation: {
      summary: "Interpretação de hereditariedade do DNA mitocondrial, que é exclusivamente materno.",
      stepByStep: [
        "1. As mitocôndrias do espermatozoide geralmente se encontram no flagelo e não entram no óvulo, ou são degradadas.",
        "2. Toda herança mitocondrial (DNA mitocondrial) em mamíferos provém exclusivamente da mãe.",
        "3. Como a mãe neste caso é normal (sem a mutação no DNA mitocondrial), nenhum óvulo terá as mitocôndrias mutantes.",
        "4. O pai afetado não transmite as suas mitocôndrias aos filhos.",
        "5. Conclusão: a prole, independentemente do sexo, não terá a doença."
      ],
      coreConcept: "Herança Mitocondrial (Herança Materna Extracromossômica)",
      trapWarning: "Pai afetado + Mãe normal = 0% filhos afetados. Mãe afetada + Pai normal = 100% filhos afetados."
    },
    commonTraps: ["Aplicar as Leis de Mendel", "Confundir com herança ligada ao X ou Y"],
    tags: ["biologia", "mitocondria", "DNA-extranuclear"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-010",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Grupos Sanguíneos (Sistema Rh)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A Eritroblastose Fetal (Doença Hemolítica do Recém-Nascido - DHRN) ocorre pela incompatibilidade do fator Rh entre a mãe e o feto. Uma mulher com sangue Rh- teve uma primeira criança Rh+ saudável. Não recebeu profilaxia, e agora está grávida de sua segunda criança, que o médico confirmou ter sangue Rh+.",
      source: "Original"
    },
    prompt: "Qual o mecanismo de ação envolvido nesse caso que pode levar a segunda criança a manifestar a eritroblastose fetal?",
    options: [
      { id: "a", text: "A mãe produziu anticorpos anti-Rh após o primeiro parto, os quais atravessam a placenta e destroem as hemácias do segundo filho Rh+.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "O feto da segunda gestação produz anticorpos anti-Rh que destroem as próprias hemácias circulantes em seu sangue.", isCorrect: false, distractorRationale: "O feto é quem possui os antígenos, ele não ataca a si mesmo; os anticorpos vêm da mãe." },
      { id: "c", text: "As hemácias da mãe passam para a circulação fetal através da placenta atacando o fígado do feto.", isCorrect: false, distractorRationale: "São os anticorpos da mãe (IgG) que passam para o feto, não as hemácias inteiras da mãe." },
      { id: "d", text: "O primeiro filho doou anticorpos residuais para a mãe, tornando-a alérgica a fetos com tipo de sangue positivo.", isCorrect: false, distractorRationale: "Anticorpos são produzidos pelo sistema imune materno como resposta, não 'doados' pela primeira criança." },
      { id: "e", text: "O alelo dominante R do pai suprime o fator imunológico materno causando deficiência no feto.", isCorrect: false, distractorRationale: "Uso de vocabulário incorreto. O fator R do pai não suprime imunidade da mãe." }
    ],
    detailedExplanation: {
      summary: "Compreensão do mecanismo imune por trás da Eritroblastose Fetal e a imunização materna (sensibilização).",
      stepByStep: [
        "1. Na primeira gestação, a mãe (Rh-) não tem anticorpos anti-Rh circulantes inicialmente.",
        "2. No momento do primeiro parto (filho Rh+), ocorre contato entre o sangue fetal e o materno.",
        "3. A mãe Rh- reconhece os antígenos Rh+ do primeiro filho e seu sistema imunológico é sensibilizado (memória imunológica), produzindo anticorpos IgG anti-Rh.",
        "4. Na segunda gestação com feto Rh+, esses anticorpos maternos já prontos (sendo menores/IgG) atravessam a placenta e atacam as hemácias do feto.",
        "5. O ataque gera intensa hemólise (destruição) no bebê, configurando a Eritroblastose Fetal."
      ],
      coreConcept: "Eritroblastose Fetal e Imunização Materna",
      trapWarning: "Sempre foque em *quem produz os anticorpos* (a mãe) e contra *quais células* eles agem (as hemácias do feto com Rh+)."
    },
    commonTraps: ["Achar que as hemácias da mãe destroem o feto", "Achar que anticorpos não cruzam a barreira placentária"],
    tags: ["biologia", "fator-Rh", "eritroblastose-fetal"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
