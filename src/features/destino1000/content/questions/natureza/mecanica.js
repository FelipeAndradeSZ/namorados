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
      supportText: "O sistema de transporte por teleférico de uma estação de pesquisa meteorológica em área montanhosa transporta cabines com instrumentos e técnicos sustentadas por cabos de aço. A cabine sobe em linha reta com velocidade constante após ter vencido a inércia inicial da partida.",
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
  },
  {
    id: "NAT-MEC-011",
    area: "natureza",
    competence: 6,
    skill: 20,
    topic: "Mecânica",
    subtopic: "Conservação da Energia Mecânica",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema de esteiras gravitacionais de um centro de distribuição farmacêutica hospitalar, um carrinho com medicamentos de massa total 40 kg parte do repouso do topo de uma rampa suave a uma altura vertical de 5,0 metros em relação ao piso plano horizontal. Despreze quaisquer forças de atrito ou resistência do ar durante o trajeto e adote a aceleração da gravidade g = 10 m/s².",
      source: "ENEM / Energia Mecânica e Sistemas Conservativos"
    },
    prompt: "A velocidade escalar alcançada pelo carrinho ao atingir a base plana inferior da rampa é de:",
    options: [
      { id: "a", text: "10 m/s", isCorrect: true, distractorRationale: null },
      { id: "b", text: "20 m/s", isCorrect: false, distractorRationale: "Esqueceu de extrair a raiz quadrada na relação v = √(2gh), calculando v = 2gh / 5." },
      { id: "c", text: "14 m/s", isCorrect: false, distractorRationale: "Calculou com base em 200 sob a raiz quadrada por erro aritmético." },
      { id: "d", text: "5 m/s", isCorrect: false, distractorRationale: "Dividiu a altura pela metade e igualou à velocidade." },
      { id: "e", text: "25 m/s", isCorrect: false, distractorRationale: "Multiplicou a aceleração da gravidade pela metade da altura." }
    ],
    detailedExplanation: {
      summary: "Em um sistema conservativo sem forças dissipativas, a energia mecânica total se conserva: E_mec(topo) = E_mec(base).",
      stepByStep: [
        "No topo da rampa: o carrinho parte do repouso (v₀ = 0), logo possui apenas energia potencial gravitacional: E_p = m · g · h.",
        "Na base da rampa: a altura é nula (h = 0), logo toda a energia foi convertida em energia cinética: E_c = (1/2) · m · v².",
        "Igualando as energias: m · g · h = (1/2) · m · v².",
        "Cancelando a massa m em ambos os lados: g · h = v² / 2  =>  v² = 2 · g · h.",
        "Substituindo os valores: v² = 2 × 10 m/s² × 5,0 m = 100 m²/s².",
        "Calculando a velocidade: v = √100 = 10 m/s."
      ],
      coreConcept: "Conservação da Energia Mecânica (Transformação de Gravitacional em Cinética)",
      trapWarning: "Observe que a velocidade final não depende da massa do carrinho nem da inclinação da rampa, apenas da altura vertical h!"
    },
    commonTraps: ["esquecer de tirar a raiz quadrada de 2gh", "achar que a massa de 40 kg altera a velocidade final"],
    tags: ["energia mecanica", "energia cinetica", "energia potencial", "conservacao da energia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-012",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Mecânica",
    subtopic: "Atrito Estático e Cinético em Superfície Horizontal",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para deslocar um gerador de emergência de massa 100 kg sobre o piso de concreto horizontal de uma unidade básica de saúde, a equipe de apoio técnico aplica forças horizontais. O contato entre a base do equipamento e o solo apresenta coeficiente de atrito estático μ_e = 0,50 e coeficiente de atrito cinético μ_c = 0,40. Adote g = 10 m/s².",
      source: "ENEM / Leis de Newton e Forças de Atrito"
    },
    prompt: "A intensidade da força horizontal mínima necessária para tirar o gerador do repouso e a intensidade da força para mantê-lo deslizando em movimento retilíneo uniforme (velocidade constante) são, respectivamente:",
    options: [
      { id: "a", text: "500 N e 400 N", isCorrect: true, distractorRationale: null },
      { id: "b", text: "400 N e 500 N", isCorrect: false, distractorRationale: "Inverteu os coeficientes de atrito (o atrito estático máximo é sempre maior que o cinético)." },
      { id: "c", text: "500 N e 500 N", isCorrect: false, distractorRationale: "Assumiu que a força para manter o movimento é idêntica à força necessária para rompimento da inércia estática." },
      { id: "d", text: "1 000 N e 400 N", isCorrect: false, distractorRationale: "Confundiu a força normal (peso de 1 000 N) com a força de atrito estático." },
      { id: "e", text: "50 N e 40 N", isCorrect: false, distractorRationale: "Esqueceu de multiplicar a massa pela aceleração da gravidade g." }
    ],
    detailedExplanation: {
      summary: "A força de atrito estático máxima (F_at,e = μ_e · N) determina a força para iniciar o movimento; o atrito cinético (F_at,c = μ_c · N) equilibra a força motora na velocidade constante.",
      stepByStep: [
        "Força Normal de apoio no plano horizontal: N = Peso = m · g = 100 kg × 10 m/s² = 1 000 N.",
        "Força mínima para iniciar o movimento (destacar da inércia): deve superar o atrito estático máximo: F_início = F_at,e = μ_e · N = 0,50 × 1 000 N = 500 N.",
        "Força para manter o corpo em MRU (velocidade constante, aceleração nula): a força resultante deve ser zero, logo a força motora equilibra o atrito cinético: F_manter = F_at,c = μ_c · N = 0,40 × 1 000 N = 400 N."
      ],
      coreConcept: "Atrito Estático Máximo vs. Atrito Cinético e Primeira Lei de Newton",
      trapWarning: "O atrito estático máximo é sempre superior ao cinético (μ_e > μ_c): é mais difícil começar a empurrar do que manter empurrando!"
    },
    commonTraps: ["achar que μ_c e maior que μ_e", "usar 100 kg diretamente sem multiplicar por g = 10"],
    tags: ["atrito estatico", "atrito cinetico", "leis de newton", "dinamica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-013",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Mecânica",
    subtopic: "Teorema do Impulso e Segurança Veicular (Airbag)",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Os airbags e as zonas de deformação estrutural programada da carroceria são inovações da engenharia de tráfego que reduziram dramaticamente a mortalidade em colisões frontais. Em um teste de impacto balístico veicular, um motorista de 70 kg sofre desaceleração abrupta, passando de 20 m/s (72 km/h) ao repouso completo (0 m/s). O Teorema do Impulso estabelece que I = F_média · Δt = ΔQ, onde ΔQ é a variação da quantidade de movimento do ocupante.",
      source: "ENEM / Física Aplicada e Segurança no Trânsito"
    },
    prompt: "A atuação do airbag reduz a gravidade dos traumas torácicos e cranianos do passageiro porque:",
    options: [
      { id: "a", text: "prolonga o tempo de frenagem (Δt) durante a desaceleração do corpo, diminuindo a intensidade da força média de impacto para uma mesma variação de quantidade de movimento.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "reduz a zero a variação da quantidade de movimento do corpo ao anular a massa inercial do passageiro.", isCorrect: false, distractorRationale: "A variação de quantidade de movimento (ΔQ = m·Δv) é rigorosamente fixa pela velocidade e massa do motorista." },
      { id: "c", text: "converte toda a energia mecânica do veículo em energia gravitacional estática instantânea.", isCorrect: false, distractorRationale: "A energia é dissipada em deformação térmica e mecânica, sem ganho de energia gravitacional." },
      { id: "d", text: "acelera o passageiro para trás antes da colisão, neutralizando a inércia da cabeça.", isCorrect: false, distractorRationale: "O airbag não puxa o motorista para trás; ele atua como uma barreira deformável inflável que amortece o avanço do corpo." },
      { id: "e", text: "aumenta a taxa de aceleração sobre os órgãos internos para acelerar a ejeção do passageiro.", isCorrect: false, distractorRationale: "Acelerações elevadas causam ruptura de artérias e lesões fatais; a meta é exatamente DIMINUIR a aceleração." }
    ],
    detailedExplanation: {
      summary: "O airbag aumenta o tempo de contato (Δt), reduzindo a força média (F = ΔQ / Δt) suportada pelo organismo para um mesmo impulso.",
      stepByStep: [
        "A variação da quantidade de movimento do passageiro é constante: ΔQ = m · (v_final - v_inicial) = 70 × (0 - 20) = -1 400 kg·m/s.",
        "Pelo Teorema do Impulso: I = F_média · Δt = ΔQ  =>  F_média = |ΔQ| / Δt.",
        "Se o motorista atinge o volante rígido, a colisão dura milésimos de segundo (ex: Δt = 0,01 s), gerando força colossal: F_média = 1 400 / 0,01 = 140 000 N (letal).",
        "Ao colidir contra a bolsa do airbag inflada que se esvazia progressivamente, o tempo de frenagem é aumentado dez vezes (ex: Δt = 0,10 s), reduzindo a força média para 14 000 N (suportável com cinto de segurança)."
      ],
      coreConcept: "Teorema do Impulso (I = F·Δt = ΔQ) e Mecanismos de Amortecimento",
      trapWarning: "Lembre-se: o airbag NÃO diminui o impulso total (pois a parada é a mesma); ele diminui a FORÇA MÉDIA ao aumentar o TEMPO de impacto!"
    },
    commonTraps: ["achar que o airbag anula o impulso total", "confundir diminuicao de forca com reducao da variacao de velocidade"],
    tags: ["teorema do impulso", "quantidade de movimento", "airbag", "seguranca veicular", "forca media"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-014",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Mecânica",
    subtopic: "Hidrostática: Princípio de Arquimedes e Empuxo",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para monitorar o nível de água potável em uma cisterna hospitalar de emergência, instala-se um sensor mecânico acoplado a uma boia esférica selada de volume total V = 0,020 m³ e massa total 6,0 kg. A boia flutua em equilíbrio estável na superfície da água doce (densidade da água d = 1 000 kg/m³ e aceleração da gravidade g = 10 m/s²).",
      source: "ENEM / Hidrostática e Princípio de Arquimedes"
    },
    prompt: "A fração percentual do volume total da boia que permanece submersa na água durante o equilíbrio estático de flutuação é igual a:",
    options: [
      { id: "a", text: "30%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "70%", isCorrect: false, distractorRationale: "Calculou a fração do volume que fica emersa (fora da água), em vez da submersa." },
      { id: "c", text: "60%", isCorrect: false, distractorRationale: "Confundiu a massa de 6,0 kg diretamente com 60% sem calcular a razão com a capacidade volumétrica." },
      { id: "d", text: "50%", isCorrect: false, distractorRationale: "Assumiu flutuação na metade exata do volume por intuição geométrica." },
      { id: "e", text: "20%", isCorrect: false, distractorRationale: "Errou a divisão fracionária dividindo 6 por 30." }
    ],
    detailedExplanation: {
      summary: "Na flutuação em equilíbrio hidrostático, o Empuxo é numericamente igual ao Peso do corpo (E = P), onde E = d_líquido · V_submerso · g.",
      stepByStep: [
        "Peso da boia: P = m · g = 6,0 kg × 10 m/s² = 60 N.",
        "Condição de flutuação em equilíbrio: Empuxo = Peso.",
        "Fórmula do empuxo de Arquimedes: E = d_água · V_submerso · g.",
        "Igualando: 1 000 kg/m³ × V_submerso × 10 m/s² = 60 N.",
        "10 000 · V_submerso = 60  =>  V_submerso = 60 / 10 000 = 0,006 m³.",
        "Fração percentual submersa: Fração = (V_submerso / V_total) = 0,006 m³ / 0,020 m³ = 6 / 20 = 3 / 10 = 0,30 = 30%."
      ],
      coreConcept: "Princípio de Arquimedes, Empuxo e Condição de Flutuação",
      trapWarning: "Na flutuação, a fração submersa de um corpo homogêneo é simplesmente a razão entre a densidade média do corpo e a densidade do líquido (d_corpo / d_líquido)!"
    },
    commonTraps: ["inverter volume emerso e volume submerso", "esquecer de converter a razao em porcentagem"],
    tags: ["hidrostatica", "empuxo", "arquimedes", "flutuacao", "densidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-015",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Mecânica",
    subtopic: "Hidrostática: Princípio de Pascal e Prensa Hidráulica",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma maca de centro cirúrgico hospitalar equipada com regulagem hidráulica de altura, a elevação do leito é acionada por um pedal que funciona com base no Princípio de Pascal. O pistão menor acoplado ao pedal possui área de seção transversal A₁ = 10 cm², enquanto o pistão maior que sustenta o leito com o paciente possui área A₂ = 250 cm².",
      source: "ENEM / Hidrostática e Transmissão de Pressão em Fluidos"
    },
    prompt: "Para elevar um leito cuja massa total combinada com o paciente é de 150 kg (peso P = 1 500 N), a intensidade da força mínima perpendicular que o profissional de saúde deve aplicar no pedal do pistão menor é de:",
    options: [
      { id: "a", text: "60 N", isCorrect: true, distractorRationale: null },
      { id: "b", text: "150 N", isCorrect: false, distractorRationale: "Dividiu o peso diretamente pela área do pistão menor." },
      { id: "c", text: "300 N", isCorrect: false, distractorRationale: "Errou a razão das áreas considerando proporção de 5 para 1." },
      { id: "d", text: "25 N", isCorrect: false, distractorRationale: "Inverteu a multiplicação na proporção hidráulica." },
      { id: "e", text: "600 N", isCorrect: false, distractorRationale: "Errou por um fator 10 no produto cruzado." }
    ],
    detailedExplanation: {
      summary: "Pelo Princípio de Pascal, a pressão aplicada em um fluido incompressível confinado transmite-se integralmente a todos os pontos: F₁ / A₁ = F₂ / A₂.",
      stepByStep: [
        "Relação fundamental da prensa hidráulica: Pressão 1 = Pressão 2  =>  F₁ / A₁ = F₂ / A₂.",
        "Identificação das variáveis: Força resistente no leito F₂ = 1 500 N; Área maior A₂ = 250 cm²; Área menor A₁ = 10 cm².",
        "Substituição na igualdade: F₁ / 10 cm² = 1 500 N / 250 cm².",
        "Cálculo da pressão: 1 500 / 250 = 6 N/cm².",
        "Cálculo da força motora F₁: F₁ = 6 N/cm² × 10 cm² = 60 N.",
        "Vantagem mecânica: o dispositivo multiplica a força em 25 vezes (250 / 10 = 25), permitindo que uma força de apenas 60 N (equivalente a 6 kg) levante 150 kg."
      ],
      coreConcept: "Princípio de Pascal, Prensa Hidráulica e Multiplicação de Força",
      trapWarning: "A força é multiplicada na proporção das áreas, mas o deslocamento do pedal é 25 vezes maior do que a subida do leito (conservação do trabalho)!"
    },
    commonTraps: ["esquecer de igualar as pressoes F1/A1 = F2/A2", "inverter as areas maior e menor"],
    tags: ["principio de pascal", "prensa hidraulica", "hidrostatica", "vantagem mecanica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-016",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Mecânica",
    subtopic: "Movimento Circular Uniforme e Aceleração Centrípeta",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No laboratório de hematologia de um hemocentro, uma centrífuga de alta rotação é empregada para acelerar a sedimentação celular e separar eritrócitos e plaquetas do plasma líquido. Os tubos de ensaio giram em movimento circular uniforme com raio de trajetória R = 0,10 m (10 cm) em relação ao eixo central, operando a uma frequência estável de 60 rotações por segundo (f = 60 Hz). Adote a aproximação π ≈ 3,0.",
      source: "ENEM / Cinemática Circular e Dinâmica Centrípeta"
    },
    prompt: "A aceleração centrípeta gerada sobre as hemácias na extremidade dos tubos de ensaio é de:",
    options: [
      { id: "a", text: "12 960 m/s²", isCorrect: true, distractorRationale: null },
      { id: "b", text: "2 160 m/s²", isCorrect: false, distractorRationale: "Calculou a velocidade escalar linear (v = ω · R) sem elevar a velocidade ao quadrado na aceleração centrípeta." },
      { id: "c", text: "360 m/s²", isCorrect: false, distractorRationale: "Confundiu a velocidade angular em radianos por segundo (ω = 360 rad/s) com a aceleração centrípeta." },
      { id: "d", text: "6 480 m/s²", isCorrect: false, distractorRationale: "Esqueceu o fator 2 na fórmula da velocidade angular (usou ω = π·f)." },
      { id: "e", text: "3 600 m/s²", isCorrect: false, distractorRationale: "Multiplicou a frequência pela gravidade g e raio." }
    ],
    detailedExplanation: {
      summary: "A aceleração centrípeta no movimento circular uniforme é dada por a_c = ω² · R, onde a velocidade angular é ω = 2·π·f.",
      stepByStep: [
        "Velocidade angular: ω = 2 · π · f = 2 × 3,0 × 60 Hz = 360 rad/s.",
        "Aceleração centrípeta: a_c = ω² · R.",
        "Cálculo do quadrado de ω: 360² = 129 600 rad²/s².",
        "Multiplicação pelo raio R = 0,10 m: a_c = 129 600 × 0,10 = 12 960 m/s².",
        "Nota científica: isso corresponde a aproximadamente 1 300 vezes a aceleração da gravidade terrestre (1 300 g), explicando por que a sedimentação ocorre em minutos."
      ],
      coreConcept: "Aceleração Centrípeta no Movimento Circular Uniforme (a_c = ω²·R = v²/R)",
      trapWarning: "Lembre-se de converter o raio para metros (10 cm = 0,10 m) antes de aplicar na fórmula com a frequência em Hz!"
    },
    commonTraps: ["usar raio em centimetros obtendo valor cem vezes maior", "esquecer de elevar a velocidade angular ao quadrado"],
    tags: ["movimento circular", "aceleracao centripeta", "centrifuga", "frequencia e periodo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-017",
    area: "natureza",
    competence: 6,
    skill: 20,
    topic: "Mecânica",
    subtopic: "Potência Mecânica e Rendimento de Máquinas",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O elevador de suprimentos de um hospital geral precisa elevar uma carga de insumos de massa m = 400 kg até uma altura vertical de 15 metros em um intervalo de tempo de 20 segundos, mantendo velocidade escalar constante. O motor elétrico que traciona o cabo consome da rede elétrica uma potência total de 4 000 W. Considere a gravidade local g = 10 m/s².",
      source: "ENEM / Trabalho, Potência Mecânica e Rendimento"
    },
    prompt: "A potência mecânica útil desenvolvida pelo motor na elevação dos suprimentos e o rendimento mecânico (η) dessa operação são, respectivamente:",
    options: [
      { id: "a", text: "3 000 W e 75%", isCorrect: true, distractorRationale: null },
      { id: "b", text: "4 000 W e 100%", isCorrect: false, distractorRationale: "Assumiu motor ideal sem perdas por atrito ou calor, violando a Segunda Lei da Termodinâmica." },
      { id: "c", text: "2 000 W e 50%", isCorrect: false, distractorRationale: "Errou o cálculo do trabalho útil considerando altura de 10 metros." },
      { id: "d", text: "3 000 W e 60%", isCorrect: false, distractorRationale: "Dividiu a potência útil por 5 000 W em vez de 4 000 W." },
      { id: "e", text: "1 500 W e 37,5%", isCorrect: false, distractorRationale: "Dividiu a potência útil pela metade." }
    ],
    detailedExplanation: {
      summary: "A potência útil é o trabalho contra a gravidade dividido pelo tempo (P_útil = m·g·h / Δt); o rendimento é a razão entre a potência útil e a potência total consumida (η = P_útil / P_total).",
      stepByStep: [
        "Trabalho mecânico útil realizado contra a força peso: W = m · g · h = 400 kg × 10 m/s² × 15 m = 60 000 Joules.",
        "Potência mecânica útil desenvolvida: P_útil = W / Δt = 60 000 J / 20 s = 3 000 Watts (J/s).",
        "Potência total consumida da rede: P_total = 4 000 W.",
        "Cálculo do rendimento mecânico: η = P_útil / P_total = 3 000 W / 4 000 W = 3 / 4 = 0,75 = 75%."
      ],
      coreConcept: "Potência Mecânica Média e Eficiência Energética de Motores",
      trapWarning: "Potência total é o que a máquina consome; potência útil é o que realiza trabalho efetivo. O rendimento é sempre menor que 100% nas máquinas reais!"
    },
    commonTraps: ["confundir potencia consumida com potencia util", "esquecer de converter a fracao de rendimento em porcentagem"],
    tags: ["potencia mecanica", "rendimento", "trabalho da forca peso", "energia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-018",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Mecânica",
    subtopic: "Hidrostática: Teorema de Stevin e Pressão Arterial",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na prática clínica, a pressão arterial humana é aferida com o manguito posicionado no braço, rigorosamente no mesmo nível horizontal do coração. Se a medição for realizada com o paciente na posição ereta (em pé) e o manguito for colocado na artéria tibial da perna, a uma profundidade vertical de 1,20 m abaixo do coração, o valor medido será significativamente maior em virtude da coluna de sangue acumulada. Considere a densidade média do sangue d = 1 050 kg/m³, g = 10 m/s² e a equivalência aproximada 1 mmHg ≈ 133 Pa.",
      source: "ENEM / Hidrostática Aplicada à Biofísica e Medicina"
    },
    prompt: "Pelo Teorema Fundamental da Hidrostática (Lei de Stevin: ΔP = d · g · Δh), o acréscimo hidrostático de pressão registrado na artéria da perna em relação ao nível do coração, expresso em mmHg, é de aproximadamente:",
    options: [
      { id: "a", text: "95 mmHg", isCorrect: true, distractorRationale: null },
      { id: "b", text: "126 mmHg", isCorrect: false, distractorRationale: "Dividiu a pressão em Pascals por 100 em vez de converter usando a constante 133 Pa/mmHg." },
      { id: "c", text: "50 mmHg", isCorrect: false, distractorRationale: "Assumiu altura vertical de apenas 0,60 m." },
      { id: "d", text: "133 mmHg", isCorrect: false, distractorRationale: "Confundiu o acréscimo de pressão com a constante de conversão barométrica." },
      { id: "e", text: "20 mmHg", isCorrect: false, distractorRationale: "Subestimou o peso específico da coluna líquida sanguínea." }
    ],
    detailedExplanation: {
      summary: "O Teorema de Stevin estabelece que a diferença de pressão entre dois pontos de um mesmo fluido homogêneo em repouso é ΔP = d · g · Δh.",
      stepByStep: [
        "Cálculo da variação de pressão hidrostática em Pascals (N/m²):",
        "ΔP = d_sangue · g · Δh = 1 050 kg/m³ × 10 m/s² × 1,20 m = 12 600 Pa.",
        "Conversão para milímetros de mercúrio (1 mmHg ≈ 133 Pa):",
        "ΔP (em mmHg) = 12 600 Pa / 133 Pa/mmHg ≈ 94,74 mmHg ≈ 95 mmHg.",
        "Implicação clínica: se a pressão no coração for de 120/80 mmHg, a pressão na artéria do pé de um homem em pé atinge cerca de 215/175 mmHg, demonstrando a necessidade de válvulas venosas e bomba muscular da panturrilha para o retorno venoso!"
      ],
      coreConcept: "Teorema de Stevin, Pressão Hidrostática e Fisiologia Cardiovascular",
      trapWarning: "Lembre-se: em Pascals a unidade é N/m²; para obter mmHg, divida o valor em Pascals por 133!"
    },
    commonTraps: ["esquecer de converter Pascals para mmHg", "desconsiderar a aceleracao da gravidade no calculo de Stevin"],
    tags: ["teorema de stevin", "hidrostatica", "pressao arterial", "biofisica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-019",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Mecânica",
    subtopic: "Conservação da Quantidade de Movimento em Colisão Inelástica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na pista de acesso aos ambulatórios de um complexo de saúde, uma van de suprimentos de massa m₁ = 2 500 kg trafega em linha reta a 12 m/s e colide na traseira de um carrinho de bagagem hospitalar de massa m₂ = 500 kg que se encontrava inicialmente em repouso sobre o asfalto. Imediatamente após a colisão, os dois veículos engatam-se mecanicamente e passam a se mover juntos na mesma direção e sentido (colisão perfeitamente inelástica).",
      source: "ENEM / Colisões Mecânicas e Conservação de Movimento"
    },
    prompt: "A velocidade escalar do conjunto acoplado imediatamente após o choque e a quantidade de energia cinética dissipada na colisão foram, respectivamente:",
    options: [
      { id: "a", text: "10 m/s e 30 000 J", isCorrect: true, distractorRationale: null },
      { id: "b", text: "12 m/s e 0 J", isCorrect: false, distractorRationale: "Tratou como colisão perfeitamente elástica na qual a velocidade e a energia cinética seriam integralmente conservadas." },
      { id: "c", text: "8 m/s e 60 000 J", isCorrect: false, distractorRationale: "Errou o cálculo da conservação da quantidade de movimento." },
      { id: "d", text: "10 m/s e 150 000 J", isCorrect: false, distractorRationale: "Confundiu a energia cinética final restante com a energia cinética dissipada." },
      { id: "e", text: "6 m/s e 90 000 J", isCorrect: false, distractorRationale: "Dividiu a velocidade inicial pela metade por estimativa arbitrária." }
    ],
    detailedExplanation: {
      summary: "Em qualquer colisão isolada, a quantidade de movimento total se conserva (Q_antes = Q_depois); na colisão perfeitamente inelástica, há a máxima perda de energia cinética em deformação e calor.",
      stepByStep: [
        "Quantidade de movimento inicial: Q_antes = m₁ · v₁ + m₂ · v₂ = 2 500 × 12 + 500 × 0 = 30 000 kg·m/s.",
        "Quantidade de movimento final (massa acoplada): Q_depois = (m₁ + m₂) · V_final = (2 500 + 500) · V_final = 3 000 · V_final.",
        "Igualando pela conservação do momento: 3 000 · V_final = 30 000  =>  V_final = 10 m/s.",
        "Energia cinética inicial: E_c,antes = (1/2) · 2 500 · 12² = 1 250 × 144 = 180 000 Joules.",
        "Energia cinética final: E_c,depois = (1/2) · 3 000 · 10² = 1 500 × 100 = 150 000 Joules.",
        "Energia cinética dissipada na deformação plástica: ΔE = 180 000 J - 150 000 J = 30 000 Joules."
      ],
      coreConcept: "Colisão Perfeitamente Inelástica e Balanço de Energia Cinética",
      trapWarning: "Em colisões inelásticas, a quantidade de movimento SEMPRE se conserva, mas a energia cinética NUNCA se conserva (parte vira calor e amassamento dos veículos)!"
    },
    commonTraps: ["achar que energia cinetica se conserva em colisao inelastica", "confundir energia final com energia perdida"],
    tags: ["colisao inelastica", "quantidade de movimento", "energia cinetica", "dinamica impulsiva"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-020",
    area: "natureza",
    competence: 4,
    skill: 14,
    topic: "Mecânica",
    subtopic: "Cinemática Vetorial: Lançamento Oblíquo no Vácuo",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma simulação de lançamento de cápsulas de suprimentos de socorro médico em terrenos acidentados, um canhão pneumático posicionado no solo plano dispara um projétil com velocidade inicial de módulo v₀ = 50 m/s, sob um ângulo de inclinação de 30° em relação à linha horizontal do solo. Despreze a resistência do ar e adote g = 10 m/s², sen 30° = 0,50 e cos 30° ≈ 0,87.",
      source: "ENEM / Lançamento de Projéteis e Cinemática Vetorial"
    },
    prompt: "A altura máxima vertical (H_máx) alcançada pela cápsula e o tempo total de voo (T_voo) até o impacto com o solo plano são, respectivamente:",
    options: [
      { id: "a", text: "31,25 m e 5,0 s", isCorrect: true, distractorRationale: null },
      { id: "b", text: "62,50 m e 2,5 s", isCorrect: false, distractorRationale: "Esqueceu o fator 2 no denominador da fórmula da altura máxima e utilizou apenas o tempo de subida." },
      { id: "c", text: "125,0 m e 10,0 s", isCorrect: false, distractorRationale: "Utilizou a velocidade total de 50 m/s no eixo vertical sem multiplicar por sen 30°." },
      { id: "d", text: "31,25 m e 2,5 s", isCorrect: false, distractorRationale: "Calculou a altura correta, mas informou apenas o tempo de subida até o vértice em vez do tempo total de voo." },
      { id: "e", text: "25,00 m e 5,0 s", isCorrect: false, distractorRationale: "Errou a potenciação na fórmula de Torricelli vertical." }
    ],
    detailedExplanation: {
      summary: "O lançamento oblíquo decompõe-se em Movimento Uniforme (MRU) na horizontal e Movimento Uniformemente Variado (MRUV) na vertical.",
      stepByStep: [
        "Decomposição da velocidade inicial nos eixos cartesianos:",
        "Eixo Vertical (Y): v₀y = v₀ · sen 30° = 50 m/s × 0,50 = 25 m/s.",
        "Eixo Horizontal (X): v₀x = v₀ · cos 30° = 50 m/s × 0,87 = 43,5 m/s.",
        "Tempo de subida até a altura máxima (onde v_y = 0): v_y = v₀y - g · t_subida  =>  0 = 25 - 10 · t_subida  =>  t_subida = 2,5 s.",
        "Tempo total de voo em solo nivelado: T_voo = 2 · t_subida = 2 × 2,5 s = 5,0 segundos.",
        "Altura máxima por Torricelli vertical: v_y² = v₀y² - 2 · g · H_máx  =>  0 = 25² - 2 × 10 × H_máx.",
        "625 = 20 · H_máx  =>  H_máx = 625 / 20 = 31,25 metros."
      ],
      coreConcept: "Lançamento Oblíquo no Vácuo e Princípio da Independência dos Movimentos de Galileu",
      trapWarning: "Cuidado: o tempo total de voo até o solo é o DOBRO do tempo de subida (subida + descida simétricas em solo plano)!"
    },
    commonTraps: ["usar o tempo de subida como tempo total de voo", "esquecer de decompor a velocidade no eixo vertical"],
    tags: ["lancamento obliquo", "cinematica vetorial", "altura maxima", "tempo de voo", "galileu"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-021",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Mecânica",
    subtopic: "Potência Mecânica, Rendimento e Força Motora",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma central de suprimentos hospitalares, um guincho elétrico industrial é utilizado para içar verticalmente um palete de medicamentos com massa total m = 400 kg. O conjunto sobe com velocidade constante de 1,5 m/s em movimento retilíneo uniforme. Devido ao atrito mecânico nas engrenagens e às perdas elétricas nos enrolamentos do motor, o rendimento eletromecânico global do sistema é de eta = 75%. Adote g = 10 m/s².",
      source: "Mecânica Aplicada e Eficiência Energética"
    },
    prompt: "A potência elétrica total consumida da rede elétrica pelo motor desse guincho durante a elevação uniforme é de:",
    options: [
      { id: "a", text: "8,0 kW", isCorrect: true, distractorRationale: null },
      { id: "b", text: "6,0 kW", isCorrect: false, distractorRationale: "Calculou a potência mecânica útil (P_util = F × v = 6,0 kW), mas esqueceu de dividir pelo rendimento de 75% para obter a potência total consumida." },
      { id: "c", text: "4,5 kW", isCorrect: false, distractorRationale: "Multiplicou a potência útil por 0,75 em vez de dividir (6,0 × 0,75 = 4,5 kW)." },
      { id: "d", text: "10,0 kW", isCorrect: false, distractorRationale: "Estimou o rendimento como sendo 60% por equívoco aritmético." },
      { id: "e", text: "2,0 kW", isCorrect: false, distractorRationale: "Subtraiu 4 kW da potência útil sem embasamento físico." }
    ],
    detailedExplanation: {
      summary: "Com velocidade constante, a força motora equilibra o peso: F = P = m × g = 400 × 10 = 4 000 N. A potência mecânica útil é P_util = F × v = 4 000 × 1,5 = 6 000 W = 6,0 kW. Sendo o rendimento eta = 0,75: P_total = P_util / eta = 6 000 / 0,75 = 8 000 W = 8,0 kW.",
      stepByStep: [
        "1. Condição de equilíbrio dinâmico (velocidade constante): Força resultante nula -> Força do cabo F = Peso do palete P.",
        "2. Cálculo da força peso: P = m × g = 400 kg × 10 m/s² = 4 000 N.",
        "3. Potência mecânica útil realizada pelo guincho: P_util = F × v = 4 000 N × 1,5 m/s = 6 000 Watts = 6,0 kW.",
        "4. Definição de rendimento eletromecânico: eta = P_util / P_total -> P_total = P_util / eta.",
        "5. Cálculo da potência total absorvida da rede: P_total = 6,0 kW / 0,75 = 8,0 kW.",
        "6. Interpretação física: o motor retira 8,0 kW da rede, entrega 6,0 kW de potência útil para erguer a carga e dissipa 2,0 kW em forma de calor (efeito Joule e atrito)."
      ],
      coreConcept: "Potência Mecânica P = F × v e Relação de Rendimento eta = P_util / P_total",
      trapWarning: "Lembre-se sempre: a potência TOTAL consumida pela máquina é sempre MAIOR que a potência útil! Para achar a potência total, divide-se a útil pelo rendimento (número decimal menor que 1)."
    },
    commonTraps: [
      "Parar na potência útil (6 kW) esquecendo que o motor consome mais energia devido às perdas",
      "Multiplicar pelo rendimento (6 × 0,75 = 4,5 kW) achando que a potência de entrada seria menor que a de saída"
    ],
    tags: ["potencia-mecanica", "rendimento", "energia", "leis-de-newton", "fisica-aplicada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-022",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Mecânica",
    subtopic: "Hidrostática: Princípio de Pascal e Prensa Hidráulica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma oficina especializada na manutenção de veículos de resgate e ambulâncias, utiliza-se um elevador hidráulico automotivo baseado no Princípio de Pascal. O sistema consiste em dois pistões cilíndricos comunicantes preenchidos com óleo incompressível: o pistão menor possui área de seção transversal A1 = 20 cm² e o pistão maior, que sustenta o chassi do veículo, possui área A2 = 500 cm².",
      source: "Mecânica dos Fluidos e Sistemas Hidráulicos"
    },
    prompt: "Ao aplicar uma força vertical descendente de módulo F1 = 300 N sobre o pistão menor, a força vertical ascendente transmitida ao pistão maior e a relação entre os deslocamentos verticais dos pistões (d1 / d2) são, respectivamente:",
    options: [
      { id: "a", text: "7 500 N e 25", isCorrect: true, distractorRationale: null },
      { id: "b", text: "7 500 N e 1/25", isCorrect: false, distractorRationale: "Inverteu a razão de deslocamento dos êmbolos (o pistão menor desloca-se 25 vezes mais que o maior)." },
      { id: "c", text: "300 N e 1", isCorrect: false, distractorRationale: "Tratou como se não houvesse multiplicação de força mecânica hidrostática." },
      { id: "d", text: "6 000 N e 20", isCorrect: false, distractorRationale: "Errou a razão entre as áreas dos pistões (500 / 20 = 25, não 20)." },
      { id: "e", text: "15 000 N e 50", isCorrect: false, distractorRationale: "Multiplicou a razão de áreas por 2 arbitrariamente." }
    ],
    detailedExplanation: {
      summary: "Pelo Princípio de Pascal, a variação de pressão é transmitida integralmente a todos os pontos do fluido: Delta P1 = Delta P2 -> F1 / A1 = F2 / A2. Assim: F2 = F1 × (A2 / A1) = 300 × (500 / 20) = 300 × 25 = 7 500 N. Pela conservação de volume ou de trabalho mecânico (W1 = W2 -> F1 × d1 = F2 × d2), a razão de deslocamento d1 / d2 = F2 / F1 = 7 500 / 300 = 25.",
      stepByStep: [
        "1. Princípio de Pascal: a pressão exercida pelo êmbolo menor propaga-se uniformemente por todo o líquido incompressível.",
        "2. Igualdade de pressões: P1 = P2 -> F1 / A1 = F2 / A2.",
        "3. Razão de amplificação de força: F2 = 300 N × (500 cm² / 20 cm²) = 300 × 25 = 7 500 N.",
        "4. Conservação da energia mecânica (trabalho de entrada = trabalho de saída): W1 = W2 -> F1 × d1 = F2 × d2.",
        "5. Relação de deslocamentos: d1 / d2 = F2 / F1 = 7 500 / 300 = 25.",
        "6. Conclusão física: o sistema multiplica a força por 25 vezes, mas exige que o operador empurre o pistão menor por uma distância 25 vezes maior (ganho de força sem criação mágica de energia)."
      ],
      coreConcept: "Princípio de Pascal e Conservação do Trabalho: Multiplicação Hidrostática de Força",
      trapWarning: "Prensa hidráulica multiplica força, mas NUNCA multiplica energia ou trabalho mecânico! O trabalho realizado no êmbolo de entrada é rigorosamente igual ao do êmbolo de saída."
    },
    commonTraps: [
      "Achar que a prensa hidráulica realiza mais trabalho do que recebe",
      "Errar a simplificação 500 / 20 = 25"
    ],
    tags: ["principio-de-pascal", "prensa-hidraulica", "hidrostatica", "conservacao-de-trabalho"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-023",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Mecânica",
    subtopic: "Dinâmica do Movimento Circular e Atrito Estático em Curvas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma via urbana plana e horizontal sem inclinação de pista (sem sobrelevação), uma viatura de socorro precisa realizar uma curva circular de raio constante R = 50 metros. O coeficiente de atrito estático entre os pneus de borracha do veículo e o asfalto seco é mi_e = 0,80. Considere a aceleração da gravidade local g = 10 m/s².",
      source: "Dinâmica Veicular e Segurança Viária"
    },
    prompt: "Para efetuar a curva com segurança sem sofrer derrapagem lateral para fora da pista, a velocidade máxima que a viatura pode atingir é de:",
    options: [
      { id: "a", text: "20 m/s (72 km/h)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "40 m/s (144 km/h)", isCorrect: false, distractorRationale: "Esqueceu de extrair a raiz quadrada ao isolar v na equação da força centrípeta (v² = 400 -> marcou 40 m/s em vez de 20 m/s)." },
      { id: "c", text: "15 m/s (54 km/h)", isCorrect: false, distractorRationale: "Subtraiu a gravidade do raio antes de multiplicar." },
      { id: "d", text: "25 m/s (90 km/h)", isCorrect: false, distractorRationale: "Calculou para mi = 1,25 por inversão do coeficiente." },
      { id: "e", text: "10 m/s (36 km/h)", isCorrect: false, distractorRationale: "Dividiu a velocidade correta por 2 por margem de segurança arbitrária." }
    ],
    detailedExplanation: {
      summary: "Em pista horizontal plana, a força de atrito estático lateral atua como a única resultante centrípeta que mantém o carro na trajetória circular: F_cp = F_at,max -> m × v² / R = mi_e × N = mi_e × m × g. Cancelando a massa: v = √(mi_e × g × R) = √(0,80 × 10 × 50) = √400 = 20 m/s (72 km/h).",
      stepByStep: [
        "1. Identificar as forças que atuam no plano da curva: no eixo vertical Normal = Peso (N = m × g); no eixo horizontal radial a força de atrito estático aponta para o centro da curva.",
        "2. A força resultante centrípeta necessária para curvar é: F_cp = m × v² / R.",
        "3. No limite iminente de derrapagem lateral, o atrito atinge o valor estático máximo: F_at = mi_e × N = mi_e × m × g.",
        "4. Igualando as expressões: m × v² / R = mi_e × m × g.",
        "5. Note que a massa m cancela-se em ambos os membros (a velocidade limite de derrapagem independe da massa do automóvel!).",
        "6. Isolando a velocidade: v² = mi_e × g × R = 0,80 × 10 × 50 = 400.",
        "7. Extraindo a raiz quadrada: v_max = √400 = 20 m/s.",
        "8. Conversão para km/h: 20 × 3,6 = 72 km/h."
      ],
      coreConcept: "Movimento Circular: Força de Atrito Estático como Resultante Centrípeta",
      trapWarning: "A massa do veículo não importa! Uma moto leve e um caminhão pesado derraparão exatamente na mesma velocidade máxima se possuírem pneus com o mesmo coeficiente de atrito."
    },
    commonTraps: [
      "Esquecer de tirar a raiz quadrada de 400 (marcar 40 m/s)",
      "Achar que veículos mais pesados conseguem fazer a curva mais rápido porque a massa seguraria o carro"
    ],
    tags: ["forca-centripeta", "atrito-estatico", "movimento-circular", "dinamica", "seguranca-viaria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-024",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Mecânica",
    subtopic: "Teorema do Impulso e Dispositivos de Segurança Passiva",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em testes de colisão frontal realizados pela indústria automobilística, avalia-se a eficiência de dispositivos de segurança veicular como o airbag e as zonas de deformação programada do capô. Em um impacto contra um obstáculo rígido, a velocidade inicial do passageiro cai até o repouso completo, sofrendo uma variação prefixada de quantidade de movimento (Delta p) determinada pela sua massa e velocidade de tráfego.",
      source: "Biomecânica do Trauma e Engenharia de Segurança Automotiva"
    },
    prompt: "Pelo Teorema do Impulso (I = Delta p = F_media × Delta t), a presença do airbag reduz a gravidade das lesões cranianas e torácicas do passageiro porque:",
    options: [
      { id: "a", text: "aumenta o tempo de duração da desaceleração mecânica (Delta t), reduzindo drasticamente o módulo da força média de impacto exercida sobre o corpo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "reduz a zero a quantidade de movimento do passageiro antes mesmo de o veículo tocar a barreira.", isCorrect: false, distractorRationale: "O airbag só atua durante a colisão física real; ele não desacelera o corpo antes do evento do choque." },
      { id: "c", text: "elimina a inércia biológica do passageiro convertendo toda a matéria dos ossos em energia luminosa.", isCorrect: false, distractorRationale: "A inércia é propriedade intrínseca da massa que não pode ser anulada nem convertida em luz." },
      { id: "d", text: "diminui o tempo de parada para menos de 1 milissegundo, aumentando a rigidez estrutural.", isCorrect: false, distractorRationale: "Diminuir o tempo de parada aumentaria a força média (F = Delta p / Delta t), tornando a colisão fatal." },
      { id: "e", text: "absorve a força gravitacional da Terra impedindo que o corpo pese sobre o assento.", isCorrect: false, distractorRationale: "O airbag protege contra o impacto frontal horizontal, sem alterar a força peso vertical terrestre." }
    ],
    detailedExplanation: {
      summary: "Pelo Teorema do Impulso: Impulso = F_media × Delta t = Delta p. Como a variação do momento linear Delta p = m × (0 - v0) é fixa para uma dada velocidade, a força média é inversamente proporcional ao tempo de interação: F_media = Delta p / Delta t. Ao amortecer a colisão, o airbag prolonga o intervalo de frenagem Delta t, o que derruba a intensidade da força média F_media, preservando órgãos e estruturas ósseas.",
      stepByStep: [
        "1. Teorema do Impulso: I = Delta p = F_media × Delta t.",
        "2. Em uma desaceleração de v0 até 0, o Delta p é uma constante inevitável (mesma massa, mesma velocidade inicial).",
        "3. Sem airbag (impacto direto contra volante rígido): a frenagem ocorre em tempo extremamente diminuto (Delta t ínfimo -> força F colossal, provocando fraturas e lesões encefálicas).",
        "4. Com airbag (bolsa de gás que deforma progressivamente): o intervalo de desaceleração Delta t é ampliado significativamente.",
        "5. Como F_media = Delta p / Delta t, com maior Delta t a força média sobre o tórax e cabeça do indivíduo cai para patamares suportáveis pela fisiologia humana."
      ],
      coreConcept: "Teorema do Impulso: I = F_media × Delta t = Delta p e Redução da Força por Ampliação do Tempo",
      trapWarning: "Lembre-se: o airbag NÃO diminui a variação de velocidade nem o Delta p total do passageiro (ele vai parar de qualquer jeito). O que o airbag faz é DISTRIBUIR esse mesmo Delta p ao longo de mais tempo, diminuindo a força instantânea!"
    },
    commonTraps: [
      "Achar que o airbag diminui a variação de quantidade de movimento (Delta p é o mesmo)",
      "Supor que o airbag funciona parando o passageiro mais rápido (ele para MAIS DEVAGAR)"
    ],
    tags: ["teorema-do-impulso", "quantidade-de-movimento", "airbag", "biomecanica", "leis-de-newton"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-MEC-025",
    area: "natureza",
    competence: 5,
    skill: 17,
    topic: "Mecânica",
    subtopic: "Estática do Corpo Rígido: Equilíbrio de Rotação e Torque",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "calculation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma simulação mecânica de elevação de cargas, uma barra rígida e homogênea de comprimento total L = 2,0 metros e peso próprio P_barra = 100 N está apoiada horizontalmente sobre um ponto de apoio fixo (fulcro triangular) localizado a 0,5 metros de sua extremidade esquerda A. Na ponta esquerda A, encontra-se suspensa verticalmente uma caixa de suprimentos de peso P_caixa.",
      source: "Estática dos Sólidos e Equilíbrio Rotacional"
    },
    prompt: "Para que a barra permaneça em equilíbrio estático perfeitamente horizontal sem tombar, o peso P_caixa pendurado na extremidade A deve ser igual a:",
    options: [
      { id: "a", text: "100 N", isCorrect: true, distractorRationale: null },
      { id: "b", text: "50 N", isCorrect: false, distractorRationale: "Esqueceu que a distância do centro de gravidade da barra até o ponto de apoio é de 0,5 metros." },
      { id: "c", text: "200 N", isCorrect: false, distractorRationale: "Multiplicou pelo comprimento total da barra em vez da distância ao fulcro." },
      { id: "d", text: "300 N", isCorrect: false, distractorRationale: "Posicionou o peso da barra na extremidade oposta em vez do centro de massa." },
      { id: "e", text: "150 N", isCorrect: false, distractorRationale: "Somou as distâncias de forma incorreta no balanço de torque." }
    ],
    detailedExplanation: {
      summary: "Para uma barra homogênea de 2,0 m, o centro de gravidade (CG) localiza-se em seu ponto médio, a 1,0 m da extremidade A. Como o fulcro está a 0,5 m de A, a distância do CG ao fulcro é d_CG = 1,0 - 0,5 = 0,5 m. Condição de equilíbrio de torques em relação ao fulcro: Torque_caixa = Torque_barra -> P_caixa × 0,5 = P_barra × 0,5 -> P_caixa = P_barra = 100 N.",
      stepByStep: [
        "1. Identificar a posição do ponto de apoio (fulcro): dist(A, Fulcro) = 0,5 m.",
        "2. Identificar a posição do peso da barra: como a barra é HOMOGÊNEA de comprimento L = 2,0 m, seu peso atua exatamente no centro geométrico (CG), a 1,0 m de A.",
        "3. Calcular o braço de alavanca do peso da barra em relação ao fulcro: d_barra = 1,0 m - 0,5 m = 0,5 m (à direita do fulcro).",
        "4. Braço de alavanca da caixa suspensa na extremidade A: d_caixa = 0,5 m (à esquerda do fulcro).",
        "5. Equação do equilíbrio rotacional (somatório dos torques nulo em torno do fulcro):",
        "   Torque no sentido horário = Torque no sentido anti-horário",
        "   P_barra × d_barra = P_caixa × d_caixa",
        "   100 N × 0,5 m = P_caixa × 0,5 m.",
        "6. Isolando P_caixa: P_caixa = (100 × 0,5) / 0,5 = 100 N."
      ],
      coreConcept: "Estática do Corpo Rígido: Torque = Força × Braço de Alavanca e Ponto de Aplicação do Peso Próprio",
      trapWarning: "Lembre-se: o peso da barra homogênea atua SEMPRE no seu ponto médio (centro de gravidade)! Nunca coloque o peso da barra nas extremidades."
    },
    commonTraps: [
      "Colocar o peso da barra na extremidade direita em vez de no ponto médio",
      "Errar o braço de alavanca da barra em relação ao ponto de apoio"
    ],
    tags: ["estatica", "torque", "equilibrio-rotacional", "alavanca", "centro-de-massa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];

