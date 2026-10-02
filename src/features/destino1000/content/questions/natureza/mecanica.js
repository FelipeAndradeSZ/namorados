export const QUESTIONS_MECANICA = [
  {
    id: "NAT-MEC-001",
    area: "natureza",
    competence: 1,
    skill: 1,
    topic: "Mecânica",
    subtopic: "Cinemática",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema de Metrô de São Paulo, os trens frequentemente operam com acelerações e desacelerações constantes para garantir eficiência e conforto. Um trem da Linha 3-Vermelha parte do repouso na Estação Sé em direção à Estação Pedro II. A distância entre as duas estações é de aproximadamente 800 metros. O trem acelera uniformemente a 1,0 m/s² até atingir a velocidade máxima de 20 m/s, mantém essa velocidade por um tempo e depois desacelera uniformemente a -1,0 m/s² até parar na estação seguinte.",
      source: "Original"
    },
    prompt: "Considerando o perfil de movimento do trem descrito, o tempo total de percurso entre a Estação Sé e a Estação Pedro II é de:",
    options: [
      { id: "a", text: "40 segundos.", isCorrect: false, distractorRationale: "Esse é apenas o tempo somado de aceleração (20s) e desaceleração (20s). Ignora a fase de velocidade constante." },
      { id: "b", text: "50 segundos.", isCorrect: false, distractorRationale: "Erro de cálculo na distância percorrida nos trechos MRUV." },
      { id: "c", text: "60 segundos.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "80 segundos.", isCorrect: false, distractorRationale: "Esse seria o tempo se a velocidade média de todo o trajeto fosse 10 m/s (800/10), mas o trem tem um trecho a 20 m/s." },
      { id: "e", text: "100 segundos.", isCorrect: false, distractorRationale: "Erro comum dividindo a distância por algo errado ou considerando MRU o tempo todo a 8 m/s." }
    ],
    detailedExplanation: {
      summary: "O movimento é dividido em três etapas: aceleração, velocidade constante e desaceleração. A soma dos tempos dessas etapas dá o tempo total.",
      stepByStep: [
        "Passo 1: Aceleração (MRUV). v = v0 + at => 20 = 0 + 1.t1 => t1 = 20 s. Distância d1 = (v+v0)/2 * t1 = (20/2)*20 = 200 m.",
        "Passo 2: Desaceleração (MRUV). É simétrica: de 20 m/s a 0 a -1 m/s². t3 = 20 s. d3 = 200 m.",
        "Passo 3: Trecho de velocidade constante (MRU). A distância restante é d2 = 800 - 200 - 200 = 400 m.",
        "Passo 4: Tempo no MRU. d2 = v * t2 => 400 = 20 * t2 => t2 = 20 s.",
        "Passo 5: Tempo total = t1 + t2 + t3 = 20 + 20 + 20 = 60 s."
      ],
      coreConcept: "Cinemática com MRU e MRUV compostos",
      trapWarning: "Esquecer de subtrair a distância das fases de aceleração/desaceleração da distância total."
    },
    commonTraps: ["Achar que o percurso inteiro foi acelerado", "Esquecer a distância da aceleração"],
    tags: ["cinematica", "mruv", "graficos v-t"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-002",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Mecânica",
    subtopic: "Dinâmica",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O teleférico de uma serra turística transporta cabines de passageiros sustentadas por cabos de aço. Imagine a cabine lotada de passageiros, subindo em linha reta com velocidade constante após ter vencido a inércia inicial da partida.",
      source: "Inspirada em ENEM"
    },
    prompt: "Durante a subida, enquanto a cabine se move em linha reta com velocidade escalar constante, a relação entre as forças que atuam nela (peso total P e força de tração T dos cabos, desprezando a resistência do ar) é explicada por qual princípio da Física?",
    options: [
      { id: "a", text: "A tração T deve ser estritamente maior que o peso total P na direção do movimento para manter a subida.", isCorrect: false, distractorRationale: "Como a velocidade é constante, a força resultante deve ser nula (T = componente de P paralela ao cabo)." },
      { id: "b", text: "A resultante das forças sobre a cabine é nula, em concordância com a Primeira Lei de Newton (Inércia).", isCorrect: true, distractorRationale: null },
      { id: "c", text: "O trabalho realizado pela força peso é positivo, uma vez que a cabine está ganhando altura.", isCorrect: false, distractorRationale: "O trabalho da força peso na subida é negativo (o peso aponta para baixo e o deslocamento para cima)." },
      { id: "d", text: "A força de tração forma um par de ação e reação com o peso da cabine, anulando-se mutuamente.", isCorrect: false, distractorRationale: "Ação e reação nunca atuam no mesmo corpo (terceira lei)." },
      { id: "e", text: "A energia cinética da cabine aumenta continuamente, justificando o consumo de energia elétrica.", isCorrect: false, distractorRationale: "A velocidade é constante, logo a energia cinética é constante. O que aumenta é a energia potencial gravitacional." }
    ],
    detailedExplanation: {
      summary: "Movimento retilíneo uniforme (velocidade constante e linha reta) significa que a aceleração é zero, logo, a força resultante é nula (1ª Lei de Newton).",
      stepByStep: [
        "Passo 1: Identificar a característica do movimento: subida em linha reta com velocidade constante (MRU).",
        "Passo 2: Primeira Lei de Newton (Inércia): um corpo em repouso ou em MRU possui força resultante nula (F_res = 0).",
        "Passo 3: A força motora equilibra exatamente as componentes resistentes."
      ],
      coreConcept: "Primeira Lei de Newton (Inércia) e Equilíbrio Dinâmico",
      trapWarning: "É intuitivo achar que para manter movimento para cima é preciso força maior que o peso, mas isso só ocorre se houver ACELERAÇÃO."
    },
    commonTraps: ["Achar que velocidade requer força resultante", "Confundir forças de ação e reação no mesmo corpo"],
    tags: ["leis de newton", "dinamica", "equilibrio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-003",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Mecânica",
    subtopic: "Conservação de Energia",
    difficulty: 4,
    estimatedTimeSeconds: 180,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um atleta desce uma pista esportiva em formato de U (halfpipe). Ele parte do repouso na borda da pista, a 3,2 metros de altura em relação ao ponto mais baixo. Considere a massa do atleta com seus equipamentos igual a 70 kg e a aceleração da gravidade g = 10 m/s².",
      source: "Original"
    },
    prompt: "Desprezando as forças dissipativas (atrito e resistência do ar), a velocidade do atleta ao passar pelo ponto mais baixo da pista e o trabalho realizado pela força peso desde o início da descida até esse ponto são, respectivamente:",
    options: [
      { id: "a", text: "8 m/s e 2240 Joules.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "8 m/s e -2240 Joules.", isCorrect: false, distractorRationale: "O trabalho do peso na descida é motor (positivo), não resistente." },
      { id: "c", text: "4 m/s e 2240 Joules.", isCorrect: false, distractorRationale: "Erro na extração da raiz quadrada da energia cinética (v = raiz(2gh) = raiz(64) = 8, não 4)." },
      { id: "d", text: "16 m/s e 1120 Joules.", isCorrect: false, distractorRationale: "Esquecimento da raiz quadrada e erro no cálculo do trabalho." },
      { id: "e", text: "8 m/s e 0 Joules.", isCorrect: false, distractorRationale: "O trabalho da força peso na descida é mgh, não é nulo." }
    ],
    detailedExplanation: {
      summary: "Toda a energia potencial gravitacional inicial transforma-se em energia cinética no ponto mais baixo.",
      stepByStep: [
        "Passo 1: Calcular o trabalho do Peso (Wp): Wp = +m·g·h = 70 · 10 · 3,2 = 2240 J.",
        "Passo 2: Conservação da energia mecânica: Ep_inicial = Ec_final.",
        "Passo 3: m·g·h = (m·v²)/2 => g·h = v²/2 => 10 · 3,2 = v²/2 => v² = 64.",
        "Passo 4: v = √64 = 8 m/s."
      ],
      coreConcept: "Conservação da Energia Mecânica e Trabalho da Força Peso",
      trapWarning: "Errar o sinal do trabalho da força peso (positivo na descida) ou errar a matemática da energia cinética."
    },
    commonTraps: ["Esquecer a raiz na velocidade", "Sinal do trabalho do peso"],
    tags: ["energia", "conservacao", "trabalho"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-004",
    area: "natureza",
    competence: 4,
    skill: 16,
    topic: "Mecânica",
    subtopic: "Potência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma pequena usina hidrelétrica modelo, a água cai de uma altura vertical de 20 metros. A vazão de água que passa pelas turbinas geradoras é de 50.000 litros por segundo. Considere a densidade da água 1 kg/L, g = 10 m/s² e que as turbinas possuem uma eficiência de 80% na conversão de energia mecânica em energia elétrica.",
      source: "Inspirada em ENEM"
    },
    prompt: "Qual é a potência elétrica gerada por essa usina modelo em Megawatts (MW)?",
    options: [
      { id: "a", text: "8 MW", isCorrect: true, distractorRationale: null },
      { id: "b", text: "10 MW", isCorrect: false, distractorRationale: "Essa seria a potência total disponível na queda (potência mecânica bruta), ignorando a eficiência de 80%." },
      { id: "c", text: "80 MW", isCorrect: false, distractorRationale: "Erro de ordem de grandeza ao converter W para MW." },
      { id: "d", text: "12,5 MW", isCorrect: false, distractorRationale: "Dividiu a potência mecânica por 0,8 em vez de multiplicar." },
      { id: "e", text: "100 MW", isCorrect: false, distractorRationale: "Erro de cálculo múltiplo." }
    ],
    detailedExplanation: {
      summary: "A potência elétrica gerada depende da energia potencial gravitacional da água por segundo (potência mecânica total) multiplicada pela eficiência da usina.",
      stepByStep: [
        "Passo 1: Vazão de massa: 50.000 L/s = 50.000 kg/s.",
        "Passo 2: Potência mecânica total: P_mec = (m/t) · g · h = 50.000 · 10 · 20 = 10.000.000 W = 10 MW.",
        "Passo 3: Potência elétrica útil: P_ele = 0,80 · 10 MW = 8 MW."
      ],
      coreConcept: "Potência, Energia Potencial e Rendimento (Eficiência)",
      trapWarning: "Esquecer de aplicar a eficiência (rendimento) e marcar a potência total disponível."
    },
    commonTraps: ["Ignorar o rendimento de 80%", "Errar a conversão para Megawatts (10^6 W)"],
    tags: ["potencia", "hidreletrica", "rendimento", "energia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-005",
    area: "natureza",
    competence: 4,
    skill: 13,
    topic: "Mecânica",
    subtopic: "Dinâmica e Atrito",
    difficulty: 4,
    estimatedTimeSeconds: 200,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na descida de uma serra rodoviária íngreme, os motoristas utilizam o 'freio motor' para evitar o superaquecimento das pastilhas de freio. Considere um carro de 1000 kg descendo um trecho reto da serra com inclinação de 30° em relação à horizontal, mantendo velocidade constante. (Dados: sen 30° = 0,5; cos 30° = 0,86; g = 10 m/s²).",
      source: "Original"
    },
    prompt: "Para que o carro de 1000 kg desça a serra com velocidade constante, a soma das forças de atrito (pneus com o asfalto) e resistência do ar, além do freio motor, deve exercer uma força contrária ao movimento com magnitude igual a:",
    options: [
      { id: "a", text: "5.000 N", isCorrect: true, distractorRationale: null },
      { id: "b", text: "8.600 N", isCorrect: false, distractorRationale: "Calculou a componente Normal do peso (P · cos 30°) em vez da componente paralela ao plano (P · sen 30°)." },
      { id: "c", text: "10.000 N", isCorrect: false, distractorRationale: "Usou a força peso total (m · g), ignorando a inclinação do plano." },
      { id: "d", text: "4.300 N", isCorrect: false, distractorRationale: "Cálculo incorreto das componentes do peso." },
      { id: "e", text: "0 N", isCorrect: false, distractorRationale: "Confundiu velocidade constante com ausência total de forças." }
    ],
    detailedExplanation: {
      summary: "Para manter velocidade constante num plano inclinado, a força resistente total deve anular exatamente a componente do peso paralela ao plano (Px).",
      stepByStep: [
        "Passo 1: Velocidade constante significa aceleração zero (Primeira Lei de Newton: F_res = 0).",
        "Passo 2: A força peso atua na vertical para baixo: P = m · g = 1000 · 10 = 10.000 N.",
        "Passo 3: A componente do peso que impulsiona o carro rampa abaixo é Px = P · sen(30°) = 10.000 · 0,5 = 5.000 N.",
        "Passo 4: Portanto, para anular Px e manter o movimento uniforme, as forças de retenção contrárias devem somar exatamente 5.000 N."
      ],
      coreConcept: "Plano Inclinado e Primeira Lei de Newton (Equilíbrio dinâmico)",
      trapWarning: "Usar cosseno no lugar de seno para calcular a componente que causa a descida ao longo do plano inclinado."
    },
    commonTraps: ["Confundir Px com Py (seno x cosseno)", "Não perceber que v constante = resultante nula"],
    tags: ["dinamica", "plano inclinado", "atrito"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-006",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Mecânica",
    subtopic: "Hidrostática: Princípio de Arquimedes e Empuxo",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um bloco de gelo de formato cúbico flutua em equilíbrio estático em água do mar. A densidade do gelo é d_gelo = 0,92 g/cm³ e a densidade da água do mar é d_agua = 1,02 g/cm³.",
      source: "ENEM Hidrostática e Fenômenos Naturais"
    },
    prompt: "Com base no Princípio de Arquimedes, a fração aproximada do volume total do bloco de gelo que permanece submersa sob a linha d'água é de:",
    options: [
      { id: "a", text: "Aproximadamente 90% (0,90 do volume total).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Aproximadamente 10% (0,10 do volume total).", isCorrect: false, distractorRationale: "Essa é a fração que fica EMERSA (visível para fora da água)." },
      { id: "c", text: "Exatamente 50% (metade submersa).", isCorrect: false, distractorRationale: "Para estar metade submerso, a densidade do gelo teria que ser exatamente a metade da água (0,51 g/cm³)." },
      { id: "d", text: "100% (totalmente no fundo).", isCorrect: false, distractorRationale: "O gelo afundaria se sua densidade fosse maior que a da água, o que não ocorre." },
      { id: "e", text: "Aproximadamente 8% (0,08 do volume total).", isCorrect: false, distractorRationale: "Subtraiu 1,02 de 0,92 sem efetuar a divisão das densidades." }
    ],
    detailedExplanation: {
      summary: "Em corpos flutuantes em equilíbrio, o Peso iguala o Empuxo (P = E). Disso decorre que a fração submersa (V_sub / V_total) é rigorosamente igual à razão entre a densidade do corpo e a densidade do líquido.",
      stepByStep: [
        "Condição de flutuação: Peso = Empuxo.",
        "m · g = d_líquido · V_submerso · g.",
        "d_corpo · V_total · g = d_líquido · V_submerso · g.",
        "Fração submersa: V_submerso / V_total = d_corpo / d_líquido.",
        "Substituindo os valores: V_sub / V_total = 0,92 / 1,02 ≈ 0,902 = 90,2%."
      ],
      coreConcept: "Princípio de Arquimedes: Empuxo, Flutuação e Fração de Volume Submerso",
      trapWarning: "Atenção ao enunciado: a questão pediu a fração SUBMERSA (90%) e não a parte emersa visível (10%)."
    },
    commonTraps: [
      "Inverter a fração submersa com a fração emersa",
      "Esquecer que a fração submersa independe da aceleração da gravidade"
    ],
    tags: ["hidrostatica", "empuxo", "arquimedes", "flutuacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-007",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Mecânica",
    subtopic: "Hidrostática: Teorema de Stevin e Pressão Hidrostática",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma represa de usina hidrelétrica, a barragem de concreto deve suportar a pressão exercida pela coluna de água. Um mergulhador realiza inspeção técnica na estrutura da barragem a uma profundidade h = 30 metros abaixo da superfície da represa. Considere a densidade da água doce d = 1000 kg/m³, a gravidade local g = 10 m/s² e a pressão atmosférica na superfície P_atm = 1,0 · 10⁵ Pa (1 atm).",
      source: "ENEM Hidrostática e Engenharia"
    },
    prompt: "Com base no Teorema de Stevin, a pressão absoluta total suportada pelo corpo do mergulhador a essa profundidade de 30 metros é igual a:",
    options: [
      { id: "a", text: "4,0 · 10⁵ Pa (4 atm)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "3,0 · 10⁵ Pa (3 atm)", isCorrect: false, distractorRationale: "Essa é apenas a pressão efetiva hidrostática da coluna de água (d·g·h), esquecendo de somar a pressão atmosférica da superfície." },
      { id: "c", text: "1,0 · 10⁵ Pa (1 atm)", isCorrect: false, distractorRationale: "Essa é apenas a pressão atmosférica na superfície." },
      { id: "d", text: "3,1 · 10⁵ Pa", isCorrect: false, distractorRationale: "Somou incorretamente as ordens de grandeza das potências de dez." },
      { id: "e", text: "30 · 10⁵ Pa (30 atm)", isCorrect: false, distractorRationale: "Achou que cada metro de profundidade aumentasse 1 atm (na verdade, cada 10 metros de água aumentam 1 atm)." }
    ],
    detailedExplanation: {
      summary: "Pelo Teorema Fundamental da Hidrostática (Stevin), a pressão absoluta em um ponto submerso é a soma da pressão atmosférica com a pressão da coluna de líquido: P_total = P_atm + d·g·h.",
      stepByStep: [
        "Pressão da coluna de água: P_hidro = d · g · h = 1000 · 10 · 30 = 300.000 Pa = 3,0 · 10⁵ Pa.",
        "Pressão absoluta total: P_total = P_atm + P_hidro = 1,0 · 10⁵ + 3,0 · 10⁵ = 4,0 · 10⁵ Pa.",
        "Em atmosferas: 4,0 · 10⁵ Pa / 1,0 · 10⁵ Pa/atm = 4 atm.",
        "Regra prática: a cada 10 metros de água doce, a pressão aumenta em aproximadamente 1 atm."
      ],
      coreConcept: "Teorema de Stevin: Pressão Manométrica vs Pressão Absoluta",
      trapWarning: "No ENEM, observe sempre se o comando pede 'pressão absoluta' (soma com P_atm) ou 'pressão manométrica/hidrostática' (apenas d·g·h)."
    },
    commonTraps: [
      "Esquecer de somar a pressão atmosférica ao calcular a pressão absoluta",
      "Errar a conversão entre Pascal (N/m²) e atmosferas (atm)"
    ],
    tags: ["teorema-de-stevin", "pressao-hidrostatica", "pressao-absoluta", "mergulho"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-008",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Mecânica",
    subtopic: "Teorema do Impulso e Segurança Automotiva (Airbags)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Dispositivos de segurança automotiva como cintos retráteis, airbags e zonas de deformação programada na lataria foram projetados para salvar vidas em colisões frontais severas. Durante um choque mecânico, o corpo do condutor deve desacelerar do valor da velocidade inicial até o repouso absoluto.",
      source: "ENEM Física e Segurança no Trânsito"
    },
    prompt: "Com base no Teorema do Impulso (I = F_média · Δt = ΔQ), a eficácia protetora do airbag ao inflar rapidamente reside no fato de ele:",
    options: [
      { id: "a", text: "aumentar o tempo de contato (Δt) durante a desaceleração do corpo, reduzindo consideravelmente a intensidade da força média de impacto transmitida aos ossos e órgãos vitais do motorista.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "reduzir a variação da quantidade de movimento (ΔQ) total do motorista para zero.", isCorrect: false, distractorRationale: "A variação da quantidade de movimento é a mesma (de m·v até zero), o que muda é o tempo e a força." },
      { id: "c", text: "fazer o corpo do motorista acelerar para trás com velocidade duas vezes maior que a do veículo.", isCorrect: false, distractorRationale: "O airbag amortece e desacelera o corpo, não o lança violentamente para trás." },
      { id: "d", text: "anular a gravidade no interior do habitáculo durante a colisão.", isCorrect: false, distractorRationale: "O airbag não altera a aceleração gravitacional terrestre." },
      { id: "e", text: "diminuir o tempo de parada para menos de um milissegundo.", isCorrect: false, distractorRationale: "Se o tempo diminuísse, a força média aumentaria drasticamente, causando lesões fatais." }
    ],
    detailedExplanation: {
      summary: "Pelo Teorema do Impulso, a variação da quantidade de movimento (ΔQ = m·v_final - m·v_inicial) é fixa para dada colisão. Como I = F_média · Δt = ΔQ, a força média é inversamente proporcional ao tempo de impacto (F_média = ΔQ / Δt).",
      stepByStep: [
        "A massa e a velocidade inicial são determinadas pelo carro antes da colisão.",
        "Logo, a variação da quantidade de movimento (ΔQ) necessária para parar o corpo é constante.",
        "Ao bater no volante rígido, o tempo de frenagem é minúsculo (Δt muito pequeno) -> a força de impacto F_média é gigantesca e fatal.",
        "Com o airbag (e cinto elástico), o corpo amortece e desacelera ao longo de um intervalo de tempo maior (Δt maior) -> a força média sobre o tórax e cabeça diminui drasticamente, evitando traumatismos."
      ],
      coreConcept: "Teorema do Impulso, Tempo de Interação e Redução da Força Média de Impacto",
      trapWarning: "No ENEM, qualquer dispositivo de amortecimento (airbag, colchão de salto com vara, tênis com mola) funciona pelo mesmo princípio: AUMENTAR O TEMPO para DIMINUIR A FORÇA MÉDIA."
    },
    commonTraps: [
      "Achar que o airbag diminui a variação da quantidade de movimento",
      "Achar que o airbag encurta o tempo da batida em vez de prolongá-lo"
    ],
    tags: ["teorema-do-impulso", "quantidade-de-movimento", "airbag", "seguranca"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-009",
    area: "natureza",
    competence: 4,
    skill: 15,
    topic: "Mecânica",
    subtopic: "Gravitação Universal e Leis de Kepler",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Satélites artificiais de monitoramento ambiental do INPE (como a série CBERS e o Amazônia 1) orbitam a Terra em trajetórias circulares e elípticas para registrar focos de calor e desmatamento. As Leis de Kepler e a Lei da Gravitação Universal de Newton descrevem com precisão a mecânica orbital desses corpos celestes em torno do centro de massa da Terra.",
      source: "ENEM Astrofísica e Satélites Brasileiros"
    },
    prompt: "Em uma órbita elíptica em torno da Terra, quando o satélite move-se do afélio (ponto mais distante) em direção ao periélio (ponto mais próximo), sua velocidade orbital escalar e a intensidade da força gravitacional atuante sobre ele:",
    options: [
      { id: "a", text: "ambas aumentam continuamente, atingindo seus valores máximos no periélio.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ambas diminuem continuamente, atingindo seus valores mínimos no periélio.", isCorrect: false, distractorRationale: "Pela 2ª Lei de Kepler (lei das áreas) e por Newton (F = G·M·m/r²), menor distância acarreta MAIOR força e MAIOR velocidade." },
      { id: "c", text: "a velocidade permanece rigorosamente constante, mas a força gravitacional dobra.", isCorrect: false, distractorRationale: "Em órbitas elípticas a velocidade escalar varia, sendo máxima no periélio e mínima no afélio." },
      { id: "d", text: "a força gravitacional anula-se completamente no periélio.", isCorrect: false, distractorRationale: "A força gravitacional é inversamente proporcional ao quadrado da distância, atingindo o máximo na menor distância." },
      { id: "e", text: "a velocidade diminui devido ao atrito com o vácuo espacial.", isCorrect: false, distractorRationale: "O vácuo espacial não oferece resistência por atrito de fluido." }
    ],
    detailedExplanation: {
      summary: "Pela Lei da Gravitação de Newton, F = G·M·m / r². Quanto menor a distância r (periélio), maior é a atração gravitacional. Pela Segunda Lei de Kepler (Lei das Áreas), a velocidade orbital é máxima no periélio e mínima no afélio.",
      stepByStep: [
        "Distância r no periélio é mínima -> Força gravitacional F_g = G·M·m / r² é MÁXIMA.",
        "Conservação da energia mecânica: Ep = -G·M·m / r é mais negativa (menor energia potencial), logo a energia cinética Ec = m·v²/2 deve ser MÁXIMA para conservar a energia mecânica total.",
        "Segunda Lei de Kepler: o raio vetor varre áreas iguais em tempos iguais -> para varrer a mesma área com raio menor, o arco percorrido deve ser maior, exigindo maior velocidade."
      ],
      coreConcept: "Gravitação Universal, Leis de Kepler e Conservação da Energia Mecânica Orbital",
      trapWarning: "Lembre-se da dica mnemônica: PERIÉLIO = PERTO = RÁPIDO; AFÉLIO = AFASTADO = LENTO."
    },
    commonTraps: [
      "Achar que em órbita elíptica a velocidade do satélite é constante",
      "Inverter os conceitos de afélio e periélio"
    ],
    tags: ["gravitacao", "leis-de-kepler", "perielio-afelio", "satelites"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-010",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Mecânica",
    subtopic: "Estática do Ponto Material e Torque de Alavancas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "contextualized",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para trocar um pneu furado de um automóvel, uma motorista utiliza uma chave de roda em formato de L com comprimento de braço de alavanca de 40 cm (0,40 m). Para soltar um parafuso travado que exige um torque (momento de força) mínimo de 120 N·m, a motorista apoia todo o seu peso perpendicularmente na extremidade da chave.",
      source: "ENEM Estática e Máquinas Simples"
    },
    prompt: "Considerando a aceleração da gravidade g = 10 m/s², a massa corporal mínima da motorista para que ela consiga desapertar o parafuso aplicando seu próprio peso na ponta da chave é de:",
    options: [
      { id: "a", text: "30 kg", isCorrect: true, distractorRationale: null },
      { id: "b", text: "48 kg", isCorrect: false, distractorRationale: "Multiplicou 120 por 0,40 sem aplicar a relação do torque (F = τ / d)." },
      { id: "c", text: "12 kg", isCorrect: false, distractorRationale: "Erro de cálculo na divisão do momento pelo braço de alavanca." },
      { id: "d", text: "75 kg", isCorrect: false, distractorRationale: "Inverteu os valores na divisão da força pelo peso." },
      { id: "e", text: "300 kg", isCorrect: false, distractorRationale: "Esqueceu de converter a força peso (300 N) em massa dividindo pela gravidade (g = 10 m/s²)." }
    ],
    detailedExplanation: {
      summary: "O torque ou momento de uma força perpendicular é dado pelo produto da força aplicada pelo braço de alavanca: τ = F · d. A força mínima necessária é o peso da pessoa (P = m·g).",
      stepByStep: [
        "Torque exigido: τ = 120 N·m.",
        "Braço de alavanca: d = 40 cm = 0,40 m.",
        "Cálculo da força perpendicular mínima: τ = F · d → F = τ / d = 120 / 0,40 = 300 N.",
        "Como a força aplicada é o próprio peso da motorista (P = m · g):",
        "300 = m · 10 → m = 300 / 10 = 30 kg."
      ],
      coreConcept: "Torque (Momento de uma Força) e Princípio das Alavancas",
      trapWarning: "Cuidado: a força necessária é 300 Newtons, mas o comando perguntou a MASSA da motorista em quilogramas (30 kg)."
    },
    commonTraps: [
      "Esquecer de converter centímetros (40 cm) para metros (0,40 m)",
      "Confundir a força em Newtons (300 N) com a massa em quilogramas (30 kg)"
    ],
    tags: ["estatica", "torque", "momento-de-forca", "alavancas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
