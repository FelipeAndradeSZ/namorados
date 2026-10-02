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
  },
  {
    id: "NAT-GEN-011",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Segunda Lei de Mendel (Di-hibridismo)",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em ervilhas (Pisum sativum), a cor da semente é condicionada por um par de alelos: amarelo (V, dominante) e verde (v, recessivo). A textura da casca é condicionada por outro par de alelos independentes: lisa (R, dominante) e rugosa (r, recessivo). Uma planta di-híbrida (heterozigota para ambos os caracteres, VvRr) foi autofecundada, produzindo 320 descendentes na geração F2.",
      source: "Genética Clássica Mendeliana"
    },
    prompt: "Com base no princípio da segregação independente, a quantidade teoricamente esperada de sementes verdes e rugosas entre esses 320 descendentes é de:",
    options: [
      { id: "a", text: "20 sementes", isCorrect: true, distractorRationale: null },
      { id: "b", text: "60 sementes", isCorrect: false, distractorRationale: "Essa proporção (3/16 = 60) corresponde a sementes verdes e lisas ou amarelas e rugosas (fenótipos recombinantes)." },
      { id: "c", text: "80 sementes", isCorrect: false, distractorRationale: "O estudante calculou 1/4 da produção total (320 / 4 = 80), considerando apenas um dos caracteres recessivos isolado." },
      { id: "d", text: "160 sementes", isCorrect: false, distractorRationale: "O estudante calculou a proporção de 50% como se fosse um retrocruzamento." },
      { id: "e", text: "180 sementes", isCorrect: false, distractorRationale: "Essa proporção (9/16 = 180) corresponde ao fenótipo duplo dominante (amarelas e lisas)." }
    ],
    detailedExplanation: {
      summary: "Na autofecundação de um di-híbrido (VvRr x VvRr) com genes em cromossomos diferentes, a proporção fenotípica mendeliana clássica é 9:3:3:1.",
      stepByStep: [
        "Passo 1: Identificar a proporção fenotípica esperada na F2:\n- 9/16 Amarela e Lisa (V_R_)\n- 3/16 Amarela e Rugosa (V_rr)\n- 3/16 Verde e Lisa (vvR_)\n- 1/16 Verde e Rugosa (vvrr).",
        "Passo 2: Calcular a probabilidade do fenótipo duplo recessivo (verde e rugosa):\nP(verde e rugosa) = P(vv) × P(rr) = (1/4) × (1/4) = 1/16.",
        "Passo 3: Multiplicar a probabilidade pela população total de descendentes:\nDescendentes = (1/16) × 320 = 20 sementes."
      ],
      coreConcept: "Segunda Lei de Mendel (Segregação Independente de Fatores) e proporção 9:3:3:1.",
      trapWarning: "Calcular 1/4 (80) por avaliar apenas um dos genes recessivos, esquecendo que para ser verde E rugosa a semente deve ser duplamente homozigota recessiva (vvrr)."
    },
    commonTraps: ["confundir_mono_com_di_hibridismo", "esquecer_de_multiplicar_as_probabilidades_independentes"],
    tags: ["mendel", "di_hibridismo", "segregacao_independente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-012",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Ligação Gênica (Linkage) e Taxa de Recombinação",
    difficulty: 4,
    estimatedTimeSeconds: 200,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em drosófilas (Drosophila melanogaster), dois pares de genes alelos (A/a e B/b) estão localizados no mesmo cromossomo autossômico (ligação gênica / linkage). Um cruzamento-teste entre uma fêmea di-heterozigota em conformação cis (AB/ab) e um macho duplo recessivo (ab/ab) gerou 1.000 descendentes com os seguintes resultados:\n\n• Fenótipo AB: 420 indivíduos\n• Fenótipo ab: 420 indivíduos\n• Fenótipo Ab: 80 indivíduos\n• Fenótipo aB: 80 indivíduos",
      source: "Genética Thomas Hunt Morgan"
    },
    prompt: "Com base nesses dados experimentais, a distância entre os locos gênicos A e B e a frequência de permutação (crossing-over) são, respectivamente:",
    options: [
      { id: "a", text: "8 centimorgans (cM) e 8%", isCorrect: false, distractorRationale: "O estudante considerou a frequência de apenas uma das classes de recombinantes (80 / 1000 = 8%)." },
      { id: "b", text: "16 centimorgans (cM) e 16%", isCorrect: true, distractorRationale: null },
      { id: "c", text: "42 centimorgans (cM) e 42%", isCorrect: false, distractorRationale: "O estudante considerou a proporção de uma das classes parentais em vez dos recombinantes." },
      { id: "d", text: "50 centimorgans (cM) e 50%", isCorrect: false, distractorRationale: "Essa seria a frequência teórica para segregação independente clássica (2ª Lei de Mendel)." },
      { id: "e", text: "84 centimorgans (cM) e 84%", isCorrect: false, distractorRationale: "O estudante somou as classes parentais (840 / 1000 = 84%)." }
    ],
    detailedExplanation: {
      summary: "A distância no mapa genético é igual à taxa total de recombinação (soma de todos os gametas recombinantes dividida pelo total de descendentes), expressa em morganídeos ou centimorgans.",
      stepByStep: [
        "Passo 1: Identificar as classes fenotípicas:\n- Classes parentais (mais frequentes, que preservam o cromossomo original): AB (420) e ab (420) -> total 840 indivíduos (84%).\n- Classes recombinantes (menos frequentes, resultantes de crossing-over durante a prófase I da meiose): Ab (80) e aB (80) -> total 160 indivíduos (16%).",
        "Passo 2: Calcular a taxa de recombinação (FR):\nFR = (Recombinantes / Total) × 100 = (160 / 1000) × 100 = 16%.",
        "Passo 3: Converter para distância genética: 1% de recombinação = 1 morganídeo = 1 centimorgan (cM) = 1 unidade de recombinação (UR).",
        "Passo 4: Logo, a distância é de 16 cM."
      ],
      coreConcept: "Mapeamento genético, ligação gênica (linkage) e taxa de crossing-over.",
      trapWarning: "Dividir apenas 80 por 1000 (8%), esquecendo que o crossing-over gera duas classes de recombinantes simétricas que devem ser somadas."
    },
    commonTraps: ["esquecer_de_somar_ambos_os_recombinantes", "confundir_parentais_com_recombinantes"],
    tags: ["linkage", "crossing_over", "distancia_genica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-013",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Epistasia Recessiva",
    difficulty: 3,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A cor da pelagem em cães labradores é determinada pela interação epistática de dois pares de genes independentes. O gene B determina a cor do pigmento: o alelo dominante 'B' produz pelagem preta, enquanto o recessivo 'b' produz pelagem marrom (chocolate). O gene E atua de forma epistática na deposição do pigmento na haste do pelo: na presença de pelo menos um alelo 'E', o pigmento é depositado normalmente; porém, a condição homozigota recessiva 'ee' impede a deposição de pigmento, resultando em pelagem dourada (amarela), independentemente dos alelos no loco B.",
      source: "Genética Veterinária e Médica"
    },
    prompt: "Ao cruzar dois cães pretos duplo-heterozigotos (BbEe × BbEe), a proporção fenotípica esperada na ninhada é de:",
    options: [
      { id: "a", text: "9 pretos : 3 marrons : 4 dourados", isCorrect: true, distractorRationale: null },
      { id: "b", text: "9 pretos : 3 marrons : 3 dourados : 1 branco", isCorrect: false, distractorRationale: "Essa proporção supõe 4 fenótipos distintos (9:3:3:1 da 2ª Lei sem interação epistática)." },
      { id: "c", text: "12 pretos : 3 marrons : 1 dourado", isCorrect: false, distractorRationale: "Essa proporção (12:3:1) é característica de epistasia dominante, e não recessiva." },
      { id: "d", text: "9 pretos : 7 dourados", isCorrect: false, distractorRationale: "Essa proporção (9:7) é típica de genes duplicados complementares." },
      { id: "e", text: "15 pretos : 1 dourado", isCorrect: false, distractorRationale: "Essa proporção (15:1) decorre de genes duplicados redundantes." }
    ],
    detailedExplanation: {
      summary: "Na epistasia recessiva, o genótipo homozigoto recessivo do gene epistático (ee) mascara a expressão do gene hipostático, fundindo as classes 3/16 e 1/16 em uma única classe de 4/16.",
      stepByStep: [
        "Passo 1: Determinar as 16 combinações do di-hibridismo clássico (BbEe × BbEe):\n- 9 B_E_ : Pretos (produzem melanina preta e depositam no pelo);\n- 3 bbE_ : Marrons / Chocolate (produzem melanina marrom e depositam no pelo);\n- 3 B_ee : Dourados (produzem melanina preta, mas não depositam devido ao ee);\n- 1 bbee : Dourados (produzem melanina marrom, mas não depositam devido ao ee).",
        "Passo 2: Agrupar as classes bloqueadas pelo alelo epistático recessivo 'ee':\nTotal dourados = 3 B_ee + 1 bbee = 4 dourados.",
        "Passo 3: Consolidar a proporção fenotípica final:\n9 Pretos : 3 Marrons : 4 Dourados."
      ],
      coreConcept: "Interação gênica não alélica por epistasia recessiva (modificação da proporção mendeliana 9:3:3:1 para 9:3:4).",
      trapWarning: "Tratar como segregação independente padrão de 9:3:3:1 sem considerar a fusão dos genótipos B_ee e bbee sob o fenótipo dourado."
    },
    commonTraps: ["confundir_epistasia_recessiva_com_dominante", "ignorar_a_fusao_das_classes_recessivas"],
    tags: ["epistasia", "labradores", "interacao_genica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-014",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Herança Quantitativa (Poligenia)",
    difficulty: 4,
    estimatedTimeSeconds: 190,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A altura em determinada espécie vegetal de interesse agronômico é um caráter contínuo governado por 3 pares de genes alelos (A/a, B/b, C/c) com segregação independente e efeito cumulativo e aditivo. A planta com fenótipo mínimo (duplo-recessiva para todos os locos, aabbcc) mede 60 cm de altura, enquanto a planta com genótipo máximo (AABBCC) atinge 120 cm de altura.",
      source: "Melhoramento Genético Vegetal"
    },
    prompt: "Sabendo que cada alelo efetivo (maiúsculo) contribui igualmente para o acréscimo de estatura da planta, qual é a altura esperada para um indivíduo com o genótipo AaBbCc?",
    options: [
      { id: "a", text: "70 cm", isCorrect: false, distractorRationale: "O estudante calculou o acréscimo referente a apenas um único alelo dominante." },
      { id: "b", text: "80 cm", isCorrect: false, distractorRationale: "O estudante considerou que havia apenas 2 pares de genes (4 alelos no total)." },
      { id: "c", text: "90 cm", isCorrect: true, distractorRationale: null },
      { id: "d", text: "100 cm", isCorrect: false, distractorRationale: "O estudante calculou o valor para 4 alelos efetivos em vez de 3." },
      { id: "e", text: "110 cm", isCorrect: false, distractorRationale: "O estudante supôs que a heterozigose confere quase a altura máxima." }
    ],
    detailedExplanation: {
      summary: "Na herança quantitativa aditiva, a contribuição de cada alelo efetivo é dada pela amplitude fenotípica total dividida pelo número total de alelos aditivos envolvidos.",
      stepByStep: [
        "Passo 1: Calcular a amplitude de variação total: Altura Máxima - Altura Mínima = 120 cm - 60 cm = 60 cm.",
        "Passo 2: Contar o número de alelos efetivos no genótipo máximo:\nSão 3 pares de genes = 6 alelos no total (AABBCC possui 6 alelos maiúsculos).",
        "Passo 3: Determinar a contribuição de cada alelo efetivo:\nContribuição por alelo = 60 cm / 6 alelos = 10 cm por alelo efetivo.",
        "Passo 4: Contar a quantidade de alelos efetivos no genótipo AaBbCc:\nPossui 1 'A', 1 'B' e 1 'C' = exatamente 3 alelos efetivos.",
        "Passo 5: Calcular a altura final:\nAltura = Altura Mínima (base) + (3 alelos × 10 cm) = 60 cm + 30 cm = 90 cm."
      ],
      coreConcept: "Herança quantitativa (poligênica) aditiva e curva normal de distribuição de fenótipos.",
      trapWarning: "Dividir a amplitude pelo número de pares de genes (3) em vez do número total de alelos (6), dobrando incorretamente a contribuição de cada gene."
    },
    commonTraps: ["dividir_pelo_numero_de_pares_em_vez_de_alelos", "esquecer_de_somar_o_fenotipo_minimo_base"],
    tags: ["poligenia", "heranca_quantitativa", "alelos_aditivos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-015",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Genética",
    subtopic: "Herança Ligada ao Sexo (Daltonismo)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O daltonismo para as cores verde e vermelha é uma anomalia visual condicionada por um alelo recessivo d localizado na região não homóloga do cromossomo X (herança ligada ao cromossomo X). Um homem com visão normal casou-se com uma mulher fenotipicamente normal, cujo pai era daltônico.",
      source: "Genética Médica Humana"
    },
    prompt: "Qual é a probabilidade de que a primeira criança desse casal seja um menino daltônico?",
    options: [
      { id: "a", text: "50%", isCorrect: false, distractorRationale: "Essa é a probabilidade condicional de ser daltônico dado que a criança é do sexo masculino (P(daltônico | menino)), e não a probabilidade global de nascer um menino daltônico." },
      { id: "b", text: "25%", isCorrect: true, distractorRationale: null },
      { id: "c", text: "12,5%", isCorrect: false, distractorRationale: "O estudante multiplicou por 1/2 mais uma vez por confusão de gerações." },
      { id: "d", text: "0%", isCorrect: false, distractorRationale: "O estudante supôs que filhas ou netas nunca transmitem o gene recessivo se forem normais." },
      { id: "e", text: "100%", isCorrect: false, distractorRationale: "Supôs dominância da característica recessiva." }
    ],
    detailedExplanation: {
      summary: "A probabilidade solicitada é a conjunção simultânea entre o sexo da criança (menino = XY) e a herança do alelo recessivo materno (X^d).",
      stepByStep: [
        "Passo 1: Determinar os genótipos dos genitores:\n- Homem com visão normal: X^D Y.\n- Mulher normal filha de pai daltônico (X^d Y): como ela recebeu obrigatoriamente o cromossomo X^d de seu pai e X^D da mãe, ela é heterozigota portadora: X^D X^d.",
        "Passo 2: Construir o quadro de descendentes do cruzamento (X^D Y × X^D X^d):\n• X^D X^D: menina com visão normal (25%)\n• X^D X^d: menina com visão normal portadora (25%)\n• X^D Y: menino com visão normal (25%)\n• X^d Y: menino daltônico (25%).",
        "Passo 3: A pergunta indaga: 'probabilidade de que a primeira criança seja um menino daltônico':\nP(menino daltônico) = 1 em 4 descendentes possíveis = 25%."
      ],
      coreConcept: "Herança recessiva ligada ao cromossomo X e probabilidade simultânea de sexo e fenótipo.",
      trapWarning: "Diferença crucial do ENEM: se o enunciado perguntasse 'sabendo que nasceu um menino, qual a probabilidade de ser daltônico?', a resposta seria 50%. Como pergunta 'qual a probabilidade de ser um menino daltônico', é 25%."
    },
    commonTraps: ["confundir_probabilidade_global_com_condicional_ao_sexo"],
    tags: ["daltonismo", "heranca_ligada_ao_sexo", "cromossomo_x"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-016",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Genética",
    subtopic: "Engenharia Genética e DNA Recombinante",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Historicamente, pessoas com diabetes mellitus dependiam de insulina purificada a partir do pâncreas de porcos e bois, o que frequentemente provocava reações alérgicas. A partir do final dos anos 1970, a biotecnologia viabilizou a síntese de insulina humana idêntica à biológica por meio de bactérias Escherichia coli geneticamente modificadas pela técnica do DNA recombinante.",
      source: "Biotecnologia Médica / OMS"
    },
    prompt: "Para inserir o gene da pró-insulina humana no plasmídeo bacteriano e viabilizar a expressão da proteína recombinante, são indispensáveis, respectivamente, as enzimas de:",
    options: [
      { id: "a", text: "DNA polimerase (para quebrar os anéis de DNA) e helicase (para colar os fragmentos).", isCorrect: false, distractorRationale: "DNA polimerase sintetiza fitas novas e helicase desenrola a dupla hélice na replicação celular, sem função de corte sítio-específico." },
      { id: "b", text: "transcriptase reversa (para digerir o plasmídeo) e RNA polimerase (para selar as extremidades).", isCorrect: false, distractorRationale: "Transcriptase reversa converte RNA em cDNA, não cortando plasmídeos bacterianos." },
      { id: "c", text: "endonuclease de restrição (para clivar em sítios específicos) e DNA ligase (para unir as ligações fosfodiéster).", isCorrect: true, distractorRationale: null },
      { id: "d", text: "topoisomerase (para duplicar o gene) e protease (para estabilizar o plasmídeo recombinante).", isCorrect: false, distractorRationale: "Proteases hidrolisam proteínas, o que destruiria os fatores enzimáticos de transcrição." },
      { id: "e", text: "peptidase (para cortar nucleotídeos) e ribonuclease (para ligar os códons).", isCorrect: false, distractorRationale: "Peptidases agem em cadeias de aminoácidos, não em ácidos nucleicos." }
    ],
    detailedExplanation: {
      summary: "A tecnologia do DNA recombinante depende classicamente de endonucleases de restrição ('tesouras moleculares') para cortar sequências palindrômicas específicas e da DNA ligase ('cola molecular') para selar a cadeia de fosfodiéster.",
      stepByStep: [
        "Passo 1: As enzimas de restrição (endonucleases) reconhecem sequências palindrômicas específicas de DNA tanto no gene de interesse quanto no plasmídeo vetor, gerando extremidades coesivas complementares ('sticky ends').",
        "Passo 2: Os fragmentos de DNA humano e do plasmídeo bacteriano cortados com a mesma enzima hibridizam-se pelas pontes de hidrogênio entre as bases complementares.",
        "Passo 3: A enzima DNA ligase catalisa a formação das ligações covalentes fosfodiéster entre os esqueletos de desoxirribose e fosfato, consolidando a molécula quimérica de DNA recombinante.",
        "Passo 4: Como o código genético é universal, os ribossomos da bactéria traduzem os códons humanos exatamente nos mesmos aminoácidos da insulina humana funcional."
      ],
      coreConcept: "Tecnologia do DNA recombinante, enzimas de restrição, DNA ligase e universalidade do código genético.",
      trapWarning: "Confundir enzimas do ciclo celular endógeno (como helicase e DNA polimerase) com as ferramentas moleculares da biotecnologia (restrição e ligação)."
    },
    commonTraps: ["confundir_enzimas_de_restricao_com_polimerases", "esquecer_da_dna_ligase"],
    tags: ["dna_recombinante", "insulina", "biotecnologia_enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-017",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Genética",
    subtopic: "Eletroforese em Gel e Identificação por DNA Fingerprint",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A técnica de impressão digital de DNA (DNA fingerprint) baseia-se na análise de regiões não codificantes do genoma que contêm repetições curtas em tandem (microssatélites / STRs). Após amplificação por PCR, os fragmentos de DNA com cargas negativas são submetidos à eletroforese em gel de agarose sob um campo elétrico constante, migrando do polo negativo (cátodo) em direção ao polo positivo (ânodo).",
      source: "Genética Forense e Perícia Criminal"
    },
    prompt: "No processo de corrida eletroforética no gel de agarose, o critério físico determinante que dita a velocidade de migração e a posição final das bandas de DNA ao longo do gel é:",
    options: [
      { id: "a", text: "o tamanho molecular dos fragmentos, pois as moléculas menores encontram menor resistência mecânica na malha do gel e migram mais rapidamente.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a quantidade de carga elétrica líquida, uma vez que fragmentos maiores atraem mais íons positivos e migram para o cátodo.", isCorrect: false, distractorRationale: "O DNA tem razão carga/massa praticamente constante devido aos grupos fosfato ionizados; todos migram para o ânodo positivo." },
      { id: "c", text: "o teor de pares guanina-citosina, que tornam a molécula mais pesada e bloqueiam seu deslocamento nas canaletas.", isCorrect: false, distractorRationale: "O teor GC afeta temperatura de desnaturação térmica, mas não a mobilidade eletroforética primária." },
      { id: "d", text: "o ponto isoelétrico dos aminoácidos que compõem os nucleotídeos da cadeia polinucleotídica.", isCorrect: false, distractorRationale: "Ácidos nucleicos são compostos por nucleotídeos e grupos fosfato, não possuindo aminoácidos em sua composição química." },
      { id: "e", text: "o sentido de rotação da dupla hélice em torno das histonas nucleossomais no interior do gel.", isCorrect: false, distractorRationale: "As amostras analisadas por PCR são fragmentos lineares livres desprovidos de proteínas histonas." }
    ],
    detailedExplanation: {
      summary: "Na eletroforese de DNA em gel de agarose, a malha de polímeros atua como uma peneira molecular: fragmentos menores passam pelos poros com menor atrito e chegam mais longe.",
      stepByStep: [
        "Passo 1: Carga elétrica do DNA: O esqueleto de açúcar-fosfato confere uma carga elétrica uniformemente negativa (PO4^3-) proporcional à extensão da molécula.",
        "Passo 2: Comportamento sob campo elétrico: Todas as moléculas de DNA são repelidas pelo polo negativo (cátodo) e atraídas pelo polo positivo (ânodo).",
        "Passo 3: Efeito de peneiramento da matriz de agarose: Fragmentos com menor número de pares de bases (menor tamanho/peso) serpenteiam pelos poros do gel com maior facilidade, percorrendo distâncias maiores no mesmo intervalo de tempo.",
        "Passo 4: As bandas mais próximas da borda positiva inferior representam os fragmentos menores de DNA."
      ],
      coreConcept: "Eletroforese em gel, separação por massa/tamanho molecular e perícia forense.",
      trapWarning: "Achar que fragmentos maiores migram mais rápido por possuírem maior carga negativa absoluta (a relação carga/massa é constante, logo a força motriz líquida depende do arrasto estérico)."
    },
    commonTraps: ["achar_que_maiores_correm_mais", "confundir_anodo_positivo_com_catodo"],
    tags: ["eletroforese", "dna_fingerprint", "biotecnologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-018",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Genética",
    subtopic: "Edição Gênica com CRISPR-Cas9",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O sistema CRISPR-Cas9, derivado de um mecanismo de defesa adaptativo de bactérias contra infecções por bacteriófagos, revolucionou a biologia molecular ao permitir a edição precisa de genomas de células eucarióticas vivas. O complexo ribonucleoproteico é formado por uma enzima endonuclease (Cas9) associada a uma molécula de RNA guia sintético (sgRNA).",
      source: "Prêmio Nobel de Química 2020 (Doudna & Charpentier)"
    },
    prompt: "A alta precisão e especificidade do sistema CRISPR-Cas9 para clivar exatamente o gene-alvo desejado sem cortar regiões aleatórias do DNA é conferida fundamentalmente:",
    options: [
      { id: "a", text: "pela atividade intrínseca da proteína Cas9 em reconhecer sequências de mais de 500 pares de bases sem auxílio de nucleotídeos.", isCorrect: false, distractorRationale: "A enzima Cas9 é apenas a executora catalítica do corte de dupla fita; ela não possui capacidade de reconhecimento de sequências longas sem o RNA guia." },
      { id: "b", text: "pelo pareamento complementar de bases nitrogenadas entre a sequência programada do RNA guia e o filamento-alvo do DNA genômico.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "pela identificação de proteínas histonas acetiladas que circundam exclusivamente os genes mutados nas células somáticas.", isCorrect: false, distractorRationale: "O CRISPR atua diretamente na fita primária de nucleotídeos do DNA, independentemente de modificações epigenéticas em histonas." },
      { id: "d", text: "pelo uso de anticorpos monoclonais acoplados à endonuclease que realizam o direcionamento antigênico da clivagem.", isCorrect: false, distractorRationale: "O sistema CRISPR não utiliza anticorpos, mas sim o pareamento clássico Watson-Crick de ácidos nucleicos." },
      { id: "e", text: "pela incorporação de transcriptase reversa viral que converte o genoma celular em fitas simples antes do corte.", isCorrect: false, distractorRationale: "O Cas9 padrão cliva DNA de dupla fita diretamente sem intervenção de transcriptase reversa." }
    ],
    detailedExplanation: {
      summary: "A especificidade cirúrgica do CRISPR-Cas9 decorre do pareamento de bases Watson-Crick entre a molécula programável de RNA guia (sgRNA) e o trecho complementar de DNA genômico.",
      stepByStep: [
        "Passo 1: O pesquisador desenha em laboratório uma sequência de cerca de 20 nucleotídeos no RNA guia (sgRNA) complementar ao gene que se deseja editar.",
        "Passo 2: O complexo Cas9/sgRNA varre o genoma celular até localizar o motivo adjacente ao protoespaçador (PAM).",
        "Passo 3: A sequência do RNA guia hibridiza com alta fidelidade por pontes de hidrogênio (A-U, C-G) com a fita complementar do DNA.",
        "Passo 4: Somente após esse pareamento preciso de 20 nucleotídeos a enzima Cas9 é ativada para realizar a quebra de dupla fita (DSB), permitindo o silenciamento gênico ou inserção de alelos terapêuticos."
      ],
      coreConcept: "Mecanismo molecular do CRISPR-Cas9 e complementaridade de bases como chave de reconhecimento genômico.",
      trapWarning: "Achar que a proteína Cas9 decide onde cortar por 'afinidade proteica', quando na verdade ela apenas executa o comando determinado pela sequência de nucleotídeos do RNA guia."
    },
    commonTraps: ["atribuir_o_reconhecimento_a_proteina_cas9_e_nao_ao_rna_guia"],
    tags: ["crispr_cas9", "edicao_genica", "biotecnologia_medica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-019",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Genética",
    subtopic: "Terapia Gênica e Vetores Virais",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Imunodeficiência Combinada Grave ligada ao cromossomo X (SCID-X1), conhecida popularmente como a síndrome dos 'bebês da bolha', é uma doença monogênica fatal na infância causada por mutações no gene IL2RG. Em ensaios clínicos bem-sucedidos de terapia gênica ex vivo, células-tronco hematopoiéticas (CD34+) foram coletadas da medula óssea dos pacientes, receberam a cópia correta do gene por meio de vetores virais modificados e foram reimplantadas no paciente.",
      source: "Revista Nature Medicine / Ensaios Clínicos"
    },
    prompt: "A principal justificativa biológica para a utilização de vírus geneticamente desarmados (como retrovírus ou lentivírus modificados) como veículos de transporte (vetores) na terapia gênica reside em sua capacidade natural de:",
    options: [
      { id: "a", text: "sintetizar grandes estoques de anticorpos contra patógenos oportunistas no organismo do paciente.", isCorrect: false, distractorRationale: "Vírus não produzem anticorpos; anticorpos são sintetizados exclusivamente por plasmócitos (linfócitos B) do sistema imune." },
      { id: "b", text: "infectar as células hospedeiras com alta eficácia e integrar seu material genético diretamente ao genoma da célula hospedeira.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "induzir apoptose seletiva nas células doentes sem alterar as células saudáveis vizinhas.", isCorrect: false, distractorRationale: "O objetivo da terapia gênica em SCID não é destruir as células do sangue, mas corrigi-las para que sobrevivam." },
      { id: "d", text: "substituir integralmente a atividade do núcleo celular eucariótico através da liberação de seus próprios ribossomos.", isCorrect: false, distractorRationale: "Vírus são acelulares e desprovidos de ribossomos próprios." },
      { id: "e", text: "neutralizar o sistema imunológico para que o paciente não rejeite o transplante autólogo.", isCorrect: false, distractorRationale: "Na terapia ex vivo as células são autólogas (do próprio paciente), não havendo rejeição imune de aloenxerto." }
    ],
    detailedExplanation: {
      summary: "Vetores virais na terapia gênica exploram a biologia evolutiva dos vírus de invadir células hospedeiras e transferir genes funcionais para o núcleo ou integrá-los aos cromossomos com altíssima eficiência.",
      stepByStep: [
        "Passo 1: Compreender o papel do vetor na terapia gênica: Moléculas de DNA isoladas não penetram a membrana plasmática das células-alvo em quantidade suficiente.",
        "Passo 2: Vírus modificados têm seus genes de replicação patogênica deletados (tornando-se incapazes de causar a doença viral original).",
        "Passo 3: No lugar dos genes virais virulentos, insere-se a sequência terapêutica normal do gene humano (como o IL2RG funcional).",
        "Passo 4: O vírus utiliza suas glicoproteínas de envelope para se ligar aos receptores celulares, fundir-se à membrana e entregar o gene funcional diretamente ao maquinário celular do paciente."
      ],
      coreConcept: "Uso de vetores virais como transportadores de genes terapêuticos e terapia gênica somática.",
      trapWarning: "Achar que o vírus combate a doença diretamente, esquecendo que ele atua meramente como um 'veículo de entrega' (vetor) do gene saudável."
    },
    commonTraps: ["confundir_vetor_viral_com_agente_terapeutico_antiviral"],
    tags: ["terapia_genica", "vetores_virais", "medicina_biotecnologica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-GEN-020",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Genética",
    subtopic: "Clonagem Terapêutica e Células-Tronco Induzidas (iPS)",
    difficulty: 3,
    estimatedTimeSeconds: 170,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A medicina regenerativa busca curar doenças degenerativas substituindo tecidos lesionados (como neurônios no Mal de Parkinson ou cardiomiócitos em infartos). Duas das abordagens mais promissoras são a clonagem terapêutica (Transferência Nuclear de Células Somáticas - SCNT) e a tecnologia de Células-Tronco Pluripotentes Induzidas (células iPS, desenvolvidas por Shinya Yamanaka).",
      source: "Biotecnologia e Medicina Regenerativa"
    },
    prompt: "Uma vantagem bioética e técnica fundamental que distingue o método das células iPS em relação à clonagem terapêutica tradicional é:",
    options: [
      { id: "a", text: "a dispensa do uso e da destruição de embriões humanos, uma vez que as células iPS são geradas pela reprogramação genética direta de células adultas já diferenciadas (como fibroblastos da pele).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a capacidade exclusiva das células iPS de formarem novos organismos completos idênticos em útero de gestação de substituição.", isCorrect: false, distractorRationale: "Isso caracterizaria clonagem reprodutiva, algo expressamente proibido e não pretendido com células iPS." },
      { id: "c", text: "o fato de as células iPS serem totipotentes e permitirem a síntese de anexos embrionários fora do organismo.", isCorrect: false, distractorRationale: "Células iPS são pluripotentes (capazes de diferenciar-se nas 3 linhagens germinativas), mas não totipotentes como o zigoto." },
      { id: "d", text: "a total imunidade das células iPS contra o desenvolvimento de tumores ou teratomas após o transplante.", isCorrect: false, distractorRationale: "Células iPS possuem risco de oncogênese (formação de teratomas) se não forem totalmente diferenciadas antes do implante." },
      { id: "e", text: "a dependência obrigatória de ovócitos doados para promover o choque eletroquímico de desdiferenciação nuclear.", isCorrect: false, distractorRationale: "A necessidade de ovócitos é um limitador da clonagem terapêutica (SCNT), não das células iPS." }
    ],
    detailedExplanation: {
      summary: "A tecnologia das iPS contorna os dilemas éticos da clonagem terapêutica porque não requer a criação e subsequente destruição de embriões no estágio de blastocisto, utilizando apenas a reprogramação por fatores de transcrição (Oct4, Sox2, Klf4 e c-Myc).",
      stepByStep: [
        "Passo 1: Clonagem terapêutica (SCNT): Requer retirar o núcleo de um óvulo doado, inserir o núcleo da célula do paciente, induzir o desenvolvimento até blastocisto e destruir a massa celular interna para extrair células-tronco embrionárias.",
        "Passo 2: Dilema ético: Envolve o uso de óvulos humanos e a destruição de embriões humanos pré-implantacionais.",
        "Passo 3: Descoberta das células iPS: Yamanaka demonstrou que basta introduzir 4 fatores de transcrição em uma célula somática adulta (como da pele do próprio paciente) para fazê-la 'rejuvenescer' ao estado de pluripotência.",
        "Passo 4: Conclusão: As células iPS oferecem pluripotência autóloga personalizada com zero destruição de embriões e sem necessidade de doadoras de óvulos."
      ],
      coreConcept: "Diferenciação entre clonagem terapêutica e células-tronco pluripotentes induzidas (iPS), e implicações bioéticas.",
      trapWarning: "Classificar as células iPS como totipotentes. Elas são pluripotentes, pois originam qualquer tecido do corpo adulto, mas não formam a placenta (trofoblasto)."
    },
    commonTraps: ["confundir_pluripotente_com_totipotente", "achar_que_ips_usa_ovocitos_ou_destroi_embrioes"],
    tags: ["celulas_tronco", "ips", "bioetica", "medicina_regenerativa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

