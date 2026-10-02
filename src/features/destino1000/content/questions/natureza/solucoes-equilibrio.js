/**
 * Banco de Questões ENEM — Ciências da Natureza
 * Módulo: Soluções, Equilíbrio Químico e Físico-Química
 * 
 * 25 Questões Inéditas Rigorosamente Alinhadas à Matriz do INEP
 * Validação: 5 alternativas, 1 correta, justificativa para cada distrator,
 * resolução pedagógica passo a passo e foco nos pilares da TRI.
 * ZERO termos de viagem.
 */

export const QUESTIONS_SOLUCOES_EQUILIBRIO = [
  {
    id: "NAT-SOL-001",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Sistema Tampão Sanguíneo e Desvios de Le Chatelier na Fisiologia",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O pH do sangue humano arterial é mantido estritamente na faixa fisiológica de 7,35 a 7,45 pelo sistema tampão ácido carbônico / bicarbonato, governado pelos equilíbrios interligados:\n\nCO2 (dissolvido) + H2O (l) ⇌ H2CO3 (aq) ⇌ H+ (aq) + HCO3- (aq)\n\nEm situações de crise aguda de ansiedade com hiperventilação pulmonar (respiração rápida e ofegante), o paciente elimina CO2 gasoso em taxa muito superior à produção metabólica celular.",
      source: "Fisiologia Humana e Equilíbrio Ácido-Base Clínico"
    },
    prompt: "De acordo com o Princípio de Le Chatelier, a hiperventilação pulmonar rápida e a consequente eliminação excessiva de CO2 causam:",
    options: [
      { id: "a", text: "deslocamento do equilíbrio para a esquerda (no sentido de repor o CO2 consumido), reduzindo a concentração de íons H+ livres no plasma e provocando um quadro de alcalose respiratória (elevação do pH sanguíneo).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "deslocamento do equilíbrio para a direita, aumentando a concentração de H+ e provocando acidose metabólica grave.", isCorrect: false, distractorRationale: "Retirar CO2 do lado esquerdo desloca o sistema para a esquerda, consumindo H+ e aumentando o pH, nunca gerando acidose." },
      { id: "c", text: "precipitação imediata de cloreto de sódio sólido nos alvéolos pulmonares por quebra de osmose.", isCorrect: false, distractorRationale: "O tampão carbônico não precipita NaCl nos alvéolos; o efeito fisiológico primário é a alteração de pH plasmático." },
      { id: "d", text: "aumento espontâneo da temperatura corporal para mais de 45 °C devido à queima de oxigênio.", isCorrect: false, distractorRationale: "Hiperventilação afeta a concentração de CO2/pH, não eleva termodinamicamente a temperatura corporal a 45 °C." },
      { id: "e", text: "bloqueio permanente e irreversível da hemoglobina pela formação de cianeto de potássio.", isCorrect: false, distractorRationale: "CO2 não se transforma em cianeto de potássio na respiração humana." }
    ],
    detailedExplanation: {
      summary: "Princípio de Le Chatelier no corpo humano: CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3-. Se o indivíduo hiperventila, ele 'sopra fora' o CO2. Reduzindo [CO2], o sistema se desloca para a ESQUERDA para repor o CO2 perdido. Ao se deslocar para a esquerda, consome H+. Menos H+ significa pH MAIS ALTO (alcalose respiratória). Por isso, respirar dentro de um saco de papel (reinalando CO2) ajuda a normalizar o pH!",
      stepByStep: [
        "1. Perturbação: Remoção contínua de CO2 pelos pulmões ([CO2] diminui).",
        "2. Resposta de Le Chatelier: O sistema se desloca para o lado onde houve o decréscimo (para a ESQUERDA).",
        "3. Consequência nos produtos: Os íons H+ e HCO3- reagem e são consumidos para formar CO2 e H2O.",
        "4. Impacto no pH: Se [H+] cai, o pH = -log[H+] SOBE (> 7,45).",
        "5. Diagnóstico clínico: Alcalose respiratória.",
        "6. Conclusão: A alternativa (a) descreve com exatidão a resposta físico-química e médica."
      ],
      coreConcept: "Princípio de Le Chatelier e Tampão Bicarbonato no Sangue",
      trapWarning: "No ENEM: Hiperventilação pulmonar = perda de CO2 = [H+] cai = pH sobe = Alcalose! Hipoventilação (prender a respiração / asfixia) = acúmulo de CO2 = [H+] sobe = pH cai = Acidose!"
    },
    commonTraps: [
      "Achar que perder CO2 torna o sangue ácido (na verdade torna o sangue básico/alcalino)",
      "Inverter o sentido do deslocamento do equilíbrio quando uma substância é removida"
    ],
    tags: ["equilibrio-quimico", "le-chatelier", "tampao-sanguineo", "ph", "medicina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-002",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Cálculo de pH e pOH de Soluções Ácidas e Básicas Fortes",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um técnico de laboratório de controle de qualidade preparou uma solução aquosa de ácido clorídrico (HCl), um ácido forte que sofre ionização total em água (grau de ionização α = 100%). A concentração da solução preparada foi de 0,001 mol/L (1 · 10^-3 mol/L) a 25 °C.",
      source: "Química Analítica Quantitativa e Físico-Química"
    },
    prompt: "Sabendo que o produto iônico da água a 25 °C é Kw = 1 · 10^-14 e considerando a ionização completa do HCl, os valores do pH e do pOH dessa solução são, respectivamente:",
    options: [
      { id: "a", text: "pH = 3 e pOH = 11.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "pH = 11 e pOH = 3.", isCorrect: false, distractorRationale: "Inversão dos valores; como o meio é ácido por HCl, o pH deve ser menor que 7 (pH = 3)." },
      { id: "c", text: "pH = 1 e pOH = 13.", isCorrect: false, distractorRationale: "pH = 1 corresponderia a uma concentração de 0,1 mol/L (10^-1 mol/L), e não 0,001 mol/L." },
      { id: "d", text: "pH = 7 e pOH = 7.", isCorrect: false, distractorRationale: "pH = 7 representaria água pura neutra a 25 °C, e não uma solução de ácido clorídrico forte." },
      { id: "e", text: "pH = 0 e pOH = 14.", isCorrect: false, distractorRationale: "pH = 0 corresponderia a [H+] = 1 mol/L." }
    ],
    detailedExplanation: {
      summary: "Para ácidos monopróticos fortes com 100% de ionização: HCl -> H+ + Cl-. Se [HCl] = 10^-3 mol/L, então [H+] = 10^-3 mol/L. Pela definição: pH = -log[H+] = -log(10^-3) = 3. Como pH + pOH = 14 a 25 °C, pOH = 14 - 3 = 11.",
      stepByStep: [
        "1. Equação de ionização: HCl (aq) -> H+ (aq) + Cl- (aq).",
        "2. Proporção estequiométrica: 1 mol de HCl gera 1 mol de H+.",
        "3. Concentração de hidrogênio: [H+] = 0,001 = 1 · 10^-3 mol/L.",
        "4. Cálculo do pH: pH = -log[H+] = -log(10^-3) = -(-3) = 3.",
        "5. Relação com pOH a 25 °C: pH + pOH = 14 ⟹ pOH = 14 - 3 = 11.",
        "6. Conclusão: pH = 3 e pOH = 11. Alternativa (a) correta."
      ],
      coreConcept: "Cálculo de pH e pOH e a Relação pH + pOH = 14",
      trapWarning: "No ENEM: Cada unidade que o pH DIMINUI representa uma solução 10 VEZES MAIS ÁCIDA! Do pH 5 para o pH 3, a acidez aumenta 100 vezes (10²), pois a escala é logarítmica de base 10!"
    },
    commonTraps: [
      "Achar que pH 3 é 3 vezes mais ácido que pH 4 (é 10 vezes mais ácido)",
      "Confundir pH com pOH ao analisar soluções ácidas"
    ],
    tags: ["ph", "poh", "acido-forte", "logaritmo", "fisico-quimica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-003",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Diluição de Soluções: C1·V1 = C2·V2 e Aplicação Farmacêutica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No preparo de medicamentos em uma farmácia hospitalar, um profissional necessita preparar 500 mL de uma solução aquosa antisséptica de glicose na concentração de 0,2 mol/L. No estoque, está disponível apenas uma solução concentrada padrão de glicose a 2,0 mol/L.",
      source: "Cálculos Farmacêuticos e Tecnologia de Soluções Hospitalares"
    },
    prompt: "O volume da solução concentrada de glicose de estoque (2,0 mol/L) que deve ser medido e o volume de água destilada que deve ser adicionado para preparar a solução desejada são, respectivamente:",
    options: [
      { id: "a", text: "50 mL da solução concentrada e 450 mL de água destilada.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "100 mL da solução concentrada e 400 mL de água destilada.", isCorrect: false, distractorRationale: "100 mL de solução 2,0 mol/L em 500 mL resultaria em concentração de 0,4 mol/L, o dobro da desejada." },
      { id: "c", text: "25 mL da solução concentrada e 475 mL de água destilada.", isCorrect: false, distractorRationale: "25 mL resultaria em 0,1 mol/L, a metade da concentração requerida." },
      { id: "d", text: "250 mL da solução concentrada e 250 mL de água destilada.", isCorrect: false, distractorRationale: "Diluição 1:1 reduziria a concentração para 1,0 mol/L." },
      { id: "e", text: "500 mL da solução concentrada sem nenhuma adição de água.", isCorrect: false, distractorRationale: "Manteria a concentração em 2,0 mol/L, 10 vezes mais concentrada que o prescrito." }
    ],
    detailedExplanation: {
      summary: "Na diluição, a quantidade de matéria do soluto (número de mols n) permanece constante antes e depois da adição de água: n1 = n2 ⟹ C1 · V1 = C2 · V2. Aplicando os dados: 2,0 · V1 = 0,2 · 500 ⟹ V1 = 50 mL. O volume de água a adicionar é Vad = Vfinal - Vinicial = 500 - 50 = 450 mL.",
      stepByStep: [
        "1. Identificação das variáveis: C1 = 2,0 mol/L; V1 = ?; C2 = 0,2 mol/L; V2 = 500 mL.",
        "2. Fórmula fundamental da diluição: C1 · V1 = C2 · V2.",
        "3. Cálculo do volume inicial de estoque: 2,0 · V1 = 0,2 · 500 ⟹ 2,0 · V1 = 100 ⟹ V1 = 100 / 2 = 50 mL.",
        "4. Cálculo da água destilada adicionada: V2 = V1 + Vágua ⟹ 500 = 50 + Vágua ⟹ Vágua = 450 mL.",
        "5. Conclusão: Devem-se retirar 50 mL da solução concentrada e completar com 450 mL de água destilada. Alternativa (a) correta."
      ],
      coreConcept: "Diluição de Soluções e a Conservação da Massa do Soluto (C1·V1 = C2·V2)",
      trapWarning: "No ENEM: Fique atento ao que a questão pergunta! Ela quer 'o volume final' (500 mL) ou 'o volume de água ADICIONADO' (450 mL)? Muitos candidatos erram por desatenção na leitura do enunciado!"
    },
    commonTraps: [
      "Confundir volume final com volume de água que deve ser adicionado",
      "Errar as unidades (misturar mL com L sem manter a coerência dimensional)"
    ],
    tags: ["diluicao", "solucoes", "concentracao-molar", "calculo-quimico", "farmacia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-004",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Princípio de Le Chatelier: Efeito da Temperatura e Pressão no Processo Haber-Bosch",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A síntese industrial da amônia pelo processo Haber-Bosch é uma das reações químicas mais cruciais para a produção de fertilizantes agrícolas mundiais, representada pela equação em equilíbrio:\n\nN2 (g) + 3 H2 (g) ⇌ 2 NH3 (g)      ΔH = -92,4 kJ/mol (Reação exotérmica)\n\nEm uma planta industrial de síntese química, os engenheiros buscam ajustar continuamente as variáveis operacionais para maximizar o rendimento na produção de NH3.",
      source: "Termodinâmica e Cinética das Reações Industriais"
    },
    prompt: "Com base no Princípio de Le Chatelier, as condições de pressão e temperatura que favorecem termodinamicamente o maior rendimento na formação de amônia (deslocamento para a direita) são:",
    options: [
      { id: "a", text: "alta pressão e baixa temperatura.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "baixa pressão e alta temperatura.", isCorrect: false, distractorRationale: "Baixa pressão desloca para o lado de maior volume gasoso (esquerda); alta temperatura favorece o sentido endotérmico (esquerda)." },
      { id: "c", text: "baixa pressão e baixa temperatura.", isCorrect: false, distractorRationale: "Baixa pressão desfavorece o lado da amônia (que tem apenas 2 mols de gás contra 4 mols nos reagentes)." },
      { id: "d", text: "alta pressão e alta temperatura extrema.", isCorrect: false, distractorRationale: "Alta temperatura desloca a reação para a esquerda porque a reação direta é exotérmica (ΔH < 0)." },
      { id: "e", text: "pressão atmosférica nula com ausência de catalisadores em vácuo absoluto.", isCorrect: false, distractorRationale: "Vácuo com pressão nula expande os gases e impede colisões efetivas entre reagentes." }
    ],
    detailedExplanation: {
      summary: "Análise de Le Chatelier: 1) Pressão: Reagentes = 1 mol N2 + 3 mols H2 = 4 mols de gás. Produtos = 2 mols NH3. Aumentar a pressão desloca para o MENOR volume gasoso (lado direito, 2 mols). 2) Temperatura: Reação direta é exotérmica (ΔH < 0, libera calor). Para favorecer a formação de calor/produto, deve-se RESFRIAR o sistema (baixa temperatura). Portanto: Alta pressão e baixa temperatura.",
      stepByStep: [
        "1. Efeito da Pressão: 4 mols de gás (reagentes) ⇌ 2 mols de gás (produtos). Aumento de pressão desloca para o lado de MENOR número de mols de gás -> DIREITA.",
        "2. Efeito da Temperatura: ΔH = -92,4 kJ/mol (exotérmica no sentido direto). Diminuição da temperatura desloca no sentido que produz calor (exotérmico) -> DIREITA.",
        "3. Conclusão: Alta pressão e baixa temperatura favorecem o rendimento máximo de amônia.",
        "4. Nota industrial: Na prática, usa-se temperatura moderada (~450 °C) como compromisso cinético para a reação não ficar excessivamente lenta. Mas termodinamicamente, baixa temperatura maximiza o rendimento. Alternativa (a) correta."
      ],
      coreConcept: "Le Chatelier: Volume Gasoso e Efeito Térmico em Reações Reversíveis",
      trapWarning: "No ENEM: Grave a regra de ouro: AUMENTAR PRESSÃO = DESLOCA PARA O LADO COM MENOS MOLS DE GÁS! AUMENTAR TEMPERATURA = DESLOCA PARA O LADO ENDOTÉRMICO (que consome calor)!"
    },
    commonTraps: [
      "Contar mols de sólidos ou líquidos no cálculo do volume gasoso (apenas substâncias no estado gasoso contam!)",
      "Confundir o efeito cinético (catalisador acelera a velocidade mas NÃO desloca o equilíbrio) com Le Chatelier"
    ],
    tags: ["haber-bosch", "le-chatelier", "equilibrio-quimico", "pressao", "temperatura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-005",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Concentração em Quantidade de Matéria (Molaridade) e Solução Salina Fisiológica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O soro fisiológico comercial padrão utilizado para hidratação venosa e assepsia é uma solução aquosa isotônica de cloreto de sódio (NaCl) a 0,9% em massa (título m/v), o que corresponde a 9,0 gramas de NaCl dissolvidos em 1,0 litro de solução aquosa.\nConsidere as massas molares atômicas: Na = 23 g/mol; Cl = 35,5 g/mol.",
      source: "Farmacotécnica Hospitalar e Soluções Parenterais"
    },
    prompt: "A concentração em quantidade de matéria (molaridade) aproximada do cloreto de sódio no soro fisiológico hospitalar é de:",
    options: [
      { id: "a", text: "0,154 mol/L (aproximadamente 0,15 mol/L).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "0,900 mol/L.", isCorrect: false, distractorRationale: "0,9 é a porcentagem em massa (0,9%), e não a quantidade de matéria em mols por litro." },
      { id: "c", text: "0,030 mol/L.", isCorrect: false, distractorRationale: "Cálculo obtido por erro ao dividir a massa molar de forma invertida." },
      { id: "d", text: "1,540 mol/L.", isCorrect: false, distractorRationale: "Erro de ordem de grandeza de fator 10 (hipertônica severa letal se injetada em veia)." },
      { id: "e", text: "58,500 mol/L.", isCorrect: false, distractorRationale: "58,5 g/mol é a massa molar do cloreto de sódio, não a molaridade da solução." }
    ],
    detailedExplanation: {
      summary: "Massa molar do NaCl = 23 + 35,5 = 58,5 g/mol. Se em 1 L temos m = 9,0 g de NaCl: n = m / MM = 9,0 / 58,5 ≈ 0,1538 mol. Portanto, M = n / V = 0,154 mol / 1 L = 0,154 mol/L.",
      stepByStep: [
        "1. Cálculo da massa molar do NaCl: MM = 23 + 35,5 = 58,5 g/mol.",
        "2. Identificação da massa de soluto em 1 L: m = 9,0 g.",
        "3. Cálculo do número de mols (n): n = m / MM = 9,0 g / 58,5 g/mol ≈ 0,1538 mol.",
        "4. Cálculo da molaridade (M): M = n / V = 0,1538 mol / 1,0 L ≈ 0,154 mol/L.",
        "5. Conclusão: A concentração molar fisiológica é de ~0,154 mol/L. Alternativa (a) correta."
      ],
      coreConcept: "Concentração Molar (M = m / (MM · V)) e Soluções Fisiológicas",
      trapWarning: "No ENEM: Soro fisiológico 0,9% (0,154 mol/L de NaCl) tem osmolaridade de ~0,308 Osm/L (pois se dissocia em Na+ e Cl-), perfeitamente isotônica com os glóbulos vermelhos do sangue humano!"
    },
    commonTraps: [
      "Confundir título em porcentagem (0,9%) com concentração em mol/L",
      "Esquecer de somar as massas atômicas para achar a massa molar do sal"
    ],
    tags: ["solucoes", "molaridade", "soro-fisiologico", "nacl", "medicina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-006",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Hidrólise Salina e Determinação do Caráter Ácido, Básico ou Neutro",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao dissolver três sais inorgânicos puros em recipientes contendo água destilada neutra (pH = 7,0 a 25 °C), um estudante mediu o pH das soluções aquosas resultantes com um peagômetro calibrado:\n• Sal 1: Cloreto de amônio (NH4Cl);\n• Sal 2: Bicarbonato de sódio (NaHCO3);\n• Sal 3: Cloreto de sódio (NaCl).",
      source: "Equilíbrio Iônico em Solução Aquosa e Hidrólise de Sais"
    },
    prompt: "Com base na teoria da hidrólise salina (força relativa dos ácidos e bases de origem), as soluções aquosas dos sais 1, 2 e 3 apresentarão, respectivamente, caráter:",
    options: [
      { id: "a", text: "ácido (pH < 7), básico (pH > 7) e neutro (pH = 7).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "básico, ácido e neutro.", isCorrect: false, distractorRationale: "NH4Cl deriva de base fraca (NH4OH) e ácido forte (HCl), gerando solução ácida, e não básica." },
      { id: "c", text: "neutro, neutro e neutro para todos os três sais.", isCorrect: false, distractorRationale: "Nem todo sal gera solução neutra; sais com cátions ou ânions fracos sofrem hidrólise salina pronunciada." },
      { id: "d", text: "ácido, ácido e básico.", isCorrect: false, distractorRationale: "NaHCO3 gera meio básico (usado como antiácido estomacal) e NaCl é neutro." },
      { id: "e", text: "fortemente oxidante com pH negativo em todas as amostras.", isCorrect: false, distractorRationale: "Distrator sem sentido químico para soluções salinas comuns de laboratório." }
    ],
    detailedExplanation: {
      summary: "Regra infalível de hidrólise salina para o ENEM: O sal 'puxa' o lado FORTE da sua origem! 1) NH4Cl: veio de NH4OH (base fraca) + HCl (ácido forte) -> Ácido (pH < 7); 2) NaHCO3: veio de NaOH (base forte) + H2CO3 (ácido fraco) -> Básico (pH > 7); 3) NaCl: veio de NaOH (base forte) + HCl (ácido forte) -> Neutro (pH = 7).",
      stepByStep: [
        "1. Sal 1 (NH4Cl): NH4+ reage com água: NH4+ + H2O ⇌ NH3 + H3O+ (libera H3O+, meio ÁCIDO).",
        "2. Sal 2 (NaHCO3): HCO3- reage com água: HCO3- + H2O ⇌ H2CO3 + OH- (hidrólise básica prevalece sobre a ionização, meio BÁSICO).",
        "3. Sal 3 (NaCl): Na+ e Cl- derivam de eletrólitos fortes e não sofrem hidrólise apreciável (meio NEUTRO).",
        "4. Conclusão: Ácido, básico e neutro. Alternativa (a) correta."
      ],
      coreConcept: "Hidrólise Salina e a Força Relativa de Ácidos e Bases",
      trapWarning: "No ENEM: Lembre-se do bicarbonato de sódio (NaHCO3): ele é consumido como antiácido estomacal exatamente porque sofre hidrólise básica e neutraliza o excesso de HCl do suco gástrico!"
    },
    commonTraps: [
      "Achar que todo sal dissolvido em água mantém o pH em 7,0",
      "Inverter o sal derivado de ácido forte e base fraca"
    ],
    tags: ["hidrolise-salina", "equilibrio-ionico", "ph", "bicarbonato", "quimica-analitica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-007",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Produto de Solubilidade (Kps) e Formação de Precipitados",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O sulfato de bário (BaSO4) é utilizado na medicina radiológica como contraste radiopaco para exames de raios X do trato digestivo. Embora os íons bário livres (Ba²⁺) sejam altamente tóxicos para o organismo humano, a administração oral de BaSO4 é segura devido à sua insolubilidade extrema em água, com produto de solubilidade Kps = 1,0 · 10^-10 a 25 °C:\n\nBaSO4 (s) ⇌ Ba²⁺ (aq) + SO4²⁻ (aq)",
      source: "Toxicologia Clínica e Equilíbrio de Precipitação Farmacêutica"
    },
    prompt: "A concentração máxima de íons bário livres (Ba²⁺) em equilíbrio em uma solução aquosa saturada de BaSO4 puro a 25 °C é de:",
    options: [
      { id: "a", text: "1,0 · 10^-5 mol/L.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1,0 · 10^-10 mol/L.", isCorrect: false, distractorRationale: "1,0 · 10^-10 é o valor do Kps (produto das concentrações: S²), e não a concentração de Ba²⁺ (S)." },
      { id: "c", text: "1,0 · 10^-2 mol/L.", isCorrect: false, distractorRationale: "Valor decorrente de erro matemático ao extrair a raiz quadrada de 10^-10." },
      { id: "d", text: "2,0 · 10^-5 mol/L.", isCorrect: false, distractorRationale: "A estequiometria do sal 1:1 não possui coeficiente 2 na solubilidade molar." },
      { id: "e", text: "0,5 mol/L.", isCorrect: false, distractorRationale: "Concentração perigosamente tóxica que causaria óbito imediato ao paciente." }
    ],
    detailedExplanation: {
      summary: "BaSO4 (s) ⇌ Ba²⁺ (aq) + SO4²⁻ (aq). Na dissolução de S mols de BaSO4, formam-se S mols de Ba²⁺ e S mols de SO4²⁻. Kps = [Ba²⁺] · [SO4²⁻] = S · S = S². Logo: S² = 1,0 · 10^-10 ⟹ S = √(1,0 · 10^-10) = 1,0 · 10^-5 mol/L.",
      stepByStep: [
        "1. Equação do equilíbrio de solubilidade: BaSO4 (s) ⇌ Ba²⁺ (aq) + SO4²⁻ (aq).",
        "2. Expressão do Kps: Kps = [Ba²⁺] · [SO4²⁻].",
        "3. Relação estequiométrica (1:1): Se [Ba²⁺] = S, então [SO4²⁻] = S.",
        "4. Equação: Kps = S² = 1,0 · 10^-10.",
        "5. Cálculo de S: S = √(1,0 · 10^-10) = 1,0 · 10^-5 mol/L.",
        "6. Conclusão: A concentração de Ba²⁺ livre na água é de apenas 0,00001 mol/L, o que garante a segurança do contraste radiológico. Alternativa (a) correta."
      ],
      coreConcept: "Constante do Produto de Solubilidade (Kps = S²) para Sais Binários",
      trapWarning: "No ENEM: Se houver efeito do íon comum (por exemplo, se adicionar sulfato de sódio Na2SO4), o equilíbrio se desloca para a esquerda e a concentração de Ba²⁺ diminui AINDA MAIS, tornando o contraste mais seguro!"
    },
    commonTraps: [
      "Confundir o Kps com a solubilidade molar S",
      "Errar a radiciação de potências de 10 (raiz de 10^-10 é 10^-5, e não 10^-2 ou 10^-10)"
    ],
    tags: ["kps", "solubilidade", "contraste-radiologico", "bario", "precipitacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-008",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Curvas de Solubilidade: Soluções Saturadas, Insaturadas e Supersaturadas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O coeficiente de solubilidade do nitrato de potássio (KNO3) em água a 20 °C é de 30 g de KNO3 por 100 g de água, e a 60 °C é de 110 g de KNO3 por 100 g de água. Um químico preparou uma solução dissolvendo 80 g de KNO3 em 100 g de água mantida a 60 °C sob agitação constante até dissolução límpida completa. Em seguida, a solução foi resfriada lentamente e sem perturbação mecânica até atingir o equilíbrio térmico a 20 °C.",
      source: "Físico-Química: Termodinâmica de Misturas e Cristalização Fracionada"
    },
    prompt: "Ao término do resfriamento a 20 °C, caso ocorra a precipitação normal do soluto em excesso, a massa de KNO3 que se depositará no fundo do recipiente como corpo de chão (precipitado) será de:",
    options: [
      { id: "a", text: "50 g.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "30 g.", isCorrect: false, distractorRationale: "30 g é a massa de KNO3 que permanece dissolvida na solução saturada a 20 °C, e não a massa precipitada." },
      { id: "c", text: "80 g.", isCorrect: false, distractorRationale: "80 g é a massa total de soluto que foi colocada inicialmente no frasco." },
      { id: "d", text: "110 g.", isCorrect: false, distractorRationale: "110 g é a solubilidade máxima a 60 °C." },
      { id: "e", text: "0 g (nenhuma precipitação).", isCorrect: false, distractorRationale: "A 20 °C a água suporta apenas 30 g; os 50 g restantes precipitam obrigatoriamente." }
    ],
    detailedExplanation: {
      summary: "Massa adicionada = 80 g de KNO3 em 100 g de H2O. A 60 °C: a água suportaria até 110 g (solução insaturada com 80 g). Ao resfriar para 20 °C: 100 g de água só conseguem manter dissolvidos 30 g de KNO3 (solução saturada). O excesso precipita: m_precipitado = 80 g - 30 g = 50 g.",
      stepByStep: [
        "1. Estado inicial a 60 °C: 80 g de KNO3 em 100 g de água -> totalmente dissolvido (capacidade máxima era 110 g).",
        "2. Coeficiente de solubilidade a 20 °C: Máximo de 30 g de KNO3 dissolvido por 100 g de água.",
        "3. Massa que permanece em solução: 30 g de KNO3.",
        "4. Cálculo do precipitado (corpo de fundo): Massa inicial - Massa dissolvida = 80 g - 30 g = 50 g.",
        "5. Conclusão: Precipitam exatamente 50 g de KNO3. Alternativa (a) correta."
      ],
      coreConcept: "Coeficiente de Solubilidade e Cálculo do Corpo de Chão em Resfriamento",
      trapWarning: "No ENEM: Se o enunciado falar que a solução foi resfriada lentamente e NÃO precipitou (sistema instável), ela é chamada de SUPERSATURADA! Se precipitou, o líquido sobrenadante é SEMPRE uma solução SATURADA!"
    },
    commonTraps: [
      "Confundir massa de precipitado com massa que permaneceu dissolvida na água",
      "Esquecer de verificar a quantidade de água no recipiente (se fossem 200 g de água, os cálculos dobrariam!)"
    ],
    tags: ["solubilidade", "curva-de-solubilidade", "precipitado", "corpo-de-fundo", "cristalizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-009",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Partes por Milhão (ppm) e Contaminação Ambiental por Metais Pesados",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A legislação do Conselho Nacional do Meio Ambiente (CONAMA) estipula que a concentração máxima permitida de íons chumbo (Pb²⁺) em corpos hídricos de água doce destinados ao consumo humano é de 0,01 mg/L (o que equivale a 0,01 ppm em solução aquosa diluída). Uma amostra de 500 mL de água coletada próxima a um depósito de rejeitos industriais continha 0,02 mg de íons Pb²⁺ dissolvidos.",
      source: "Química Ambiental e Toxicologia dos Recursos Hídricos"
    },
    prompt: "Com base nas normas ambientais, a concentração de chumbo na amostra analisada e sua adequação aos limites do CONAMA são:",
    options: [
      { id: "a", text: "0,04 mg/L (0,04 ppm), estando a água contaminada e imprópria para o consumo humano por exceder o limite legal em quatro vezes.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "0,01 mg/L, estando a água rigorosamente no limite exato da conformidade sanitária.", isCorrect: false, distractorRationale: "0,02 mg em 500 mL (0,5 L) corresponde a 0,04 mg/L, ultrapassando os 0,01 mg/L do limite." },
      { id: "c", text: "0,02 mg/L, estando a água plenamente potável e recomendada para crianças.", isCorrect: false, distractorRationale: "0,02 mg estava em 500 mL, e não em 1 litro de água." },
      { id: "d", text: "0,004 mg/L, estando o teor de chumbo dez vezes abaixo da concentração de detecção analítica.", isCorrect: false, distractorRationale: "Erro de cálculo ao multiplicar em vez de dividir pelo volume em litros." },
      { id: "e", text: "40,0 mg/L, gerando vaporização tóxica instantânea em temperatura ambiente.", isCorrect: false, distractorRationale: "Erro crasso de conversão de unidades entre miligramas e litros." }
    ],
    detailedExplanation: {
      summary: "1 ppm em solução aquosa equivale a 1 mg de soluto por 1 L de água (pois 1 L de água tem massa de 1.000.000 mg = 1 kg). Se em 500 mL (0,5 L) há 0,02 mg de Pb²⁺: Concentração = 0,02 mg / 0,5 L = 0,04 mg/L = 0,04 ppm. Como o limite do CONAMA é 0,01 mg/L, a amostra tem 4 vezes mais chumbo que o permitido, sendo imprópria para consumo.",
      stepByStep: [
        "1. Relação fundamental de ppm: 1 ppm = 1 mg de soluto / 1 L de solução aquosa diluída.",
        "2. Dados do problema: massa de Pb = 0,02 mg; volume = 500 mL = 0,5 L.",
        "3. Cálculo da concentração real: C = 0,02 mg / 0,5 L = 0,04 mg/L = 0,04 ppm.",
        "4. Comparação com a norma legal: Limite CONAMA = 0,01 mg/L. 0,04 mg/L > 0,01 mg/L (4 vezes maior).",
        "5. Conclusão: Água contaminada e imprópria para o consumo humano. Alternativa (a) correta."
      ],
      coreConcept: "Concentração em Partes por Milhão (ppm = mg/L) e Padrões de Potabilidade",
      trapWarning: "No ENEM: Guarde a conversão mágica: em soluções aquosas aquosas diluídas, 1 ppm = 1 mg/L e 1 ppb = 1 µg/L!"
    },
    commonTraps: [
      "Esquecer de converter 500 mL para 0,5 L ao calcular a concentração por litro",
      "Não saber que 1 mg/L em água equivale diretamente a 1 ppm"
    ],
    tags: ["ppm", "partes-por-milhao", "poluicao-da-agua", "chumbo", "conama"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-010",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Titulação Ácido-Base e Ponto de Equivalência Estequiométrico",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para determinar a concentração de ácido acético (CH3COOH) no vinagre comercial, um analista químico titulou uma alíquota de 20,0 mL de vinagre diluído com uma solução padronizada de hidróxido de sódio (NaOH) a 0,10 mol/L. A reação de neutralização é dada por:\n\nCH3COOH (aq) + NaOH (aq) ⇌ CH3COONa (aq) + H2O (l)\n\nO ponto de viragem da fenolftaleína (ponto de equivalência) foi atingido exatamente com o consumo de 30,0 mL da solução titulante de NaOH.",
      source: "Química Analítica Clássica e Métodos Volumétricos de Neutralização"
    },
    prompt: "A concentração em quantidade de matéria (mol/L) de ácido acético presente na alíquota analisada de vinagre é de:",
    options: [
      { id: "a", text: "0,15 mol/L.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "0,10 mol/L.", isCorrect: false, distractorRationale: "0,10 mol/L é a concentração da base titulante de NaOH, e não do ácido acético." },
      { id: "c", text: "0,06 mol/L.", isCorrect: false, distractorRationale: "Erro decorrente de inversão dos volumes na proporção da titulação (20/30 · 0,1)." },
      { id: "d", text: "0,30 mol/L.", isCorrect: false, distractorRationale: "Erro ao multiplicar pelo volume da base sem dividir pelo volume do ácido." },
      { id: "e", text: "1,50 mol/L.", isCorrect: false, distractorRationale: "Erro de ordem de grandeza de fator 10." }
    ],
    detailedExplanation: {
      summary: "Na reação 1:1 entre CH3COOH e NaOH: n_ácido = n_base ⟹ M_ácido · V_ácido = M_base · V_base. M_ácido · 20,0 mL = 0,10 mol/L · 30,0 mL ⟹ M_ácido · 20 = 3,0 ⟹ M_ácido = 3,0 / 20 = 0,15 mol/L.",
      stepByStep: [
        "1. Estequiometria da reação: 1 mol de ácido acético reage com 1 mol de NaOH.",
        "2. Mols de NaOH consumidos: n_base = M_base · V_base = 0,10 mol/L · 0,030 L = 0,0030 mol.",
        "3. Igualdade estequiométrica: n_ácido = n_base = 0,0030 mol de CH3COOH.",
        "4. Cálculo da concentração do ácido: M_ácido = n_ácido / V_ácido = 0,0030 mol / 0,020 L = 0,15 mol/L.",
        "5. Conclusão: A concentração de ácido acético é de 0,15 mol/L. Alternativa (a) correta."
      ],
      coreConcept: "Titulação Ácido-Base e Ponto de Equivalência (M_a · V_a = M_b · V_b)",
      trapWarning: "No ENEM: Se o ácido for diprótico (ex: ácido sulfúrico, H2SO4), 1 mol do ácido consome 2 mols de NaOH! Sempre confira a estequiometria da reação antes de aplicar a fórmula!"
    },
    commonTraps: [
      "Aplicar Ma·Va = Mb·Vb mecanicamente sem checar a proporção de H+ e OH- da reação",
      "Errar a divisão decimal de 3 por 20"
    ],
    tags: ["titulacao", "acido-base", "vinagre", "acido-acetico", "volumetria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-011",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Constante de Equilíbrio Kc e Expressão da Lei de Ação das Massas",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a reação química heterogênea de decomposição térmica do calcário industrial em forno cerâmico:\n\nCaCO3 (s) ⇌ CaO (s) + CO2 (g)\n\nNa formulação da constante de equilíbrio químico em termos de concentrações molares (Kc), a Lei de Ação das Massas de Guldberg e Waage estabelece regras estritas para a inclusão das substâncias participantes.",
      source: "Termodinâmica Química e Equilíbrios Heterogêneos"
    },
    prompt: "A expressão correta da constante de equilíbrio Kc para a reação de decomposição térmica do carbonato de cálcio é:",
    options: [
      { id: "a", text: "Kc = [CO2].", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Kc = [CaO] · [CO2] / [CaCO3].", isCorrect: false, distractorRationale: "Sólidos puros possuem atividade unitária (concentração constante) e não entram na expressão da constante Kc." },
      { id: "c", text: "Kc = [CaCO3] / ([CaO] · [CO2]).", isCorrect: false, distractorRationale: "Inverte reagentes e produtos e inclui erroneamente as substâncias sólidas." },
      { id: "d", text: "Kc = [CO2] / [CaCO3].", isCorrect: false, distractorRationale: "Inclui erroneamente o reagente sólido CaCO3 no denominador." },
      { id: "e", text: "Kc = 1 / [CO2].", isCorrect: false, distractorRationale: "O CO2 é produto gasoso e deve ficar no numerador, e não no denominador." }
    ],
    detailedExplanation: {
      summary: "Regra clássica do equilíbrio heterogêneo: SÓLIDOS PUROS e LÍQUIDOS PUROS (como solvente H2O em reações aquosas) NÃO ENTRAM NA EXPRESSÃO DE Kc nem Kp! As concentrações de sólidos puros são constantes (iguais à densidade dividida pela massa molar). Portanto, para CaCO3 (s) ⇌ CaO (s) + CO2 (g), a única espécie com concentração variável é o gás CO2: Kc = [CO2] (e Kp = P_CO2).",
      stepByStep: [
        "1. Identificação dos estados físicos: CaCO3 é sólido (s); CaO é sólido (s); CO2 é gás (g).",
        "2. Regra de inclusão em Kc: Apenas gases e espécies aquosas (aq) participam da constante.",
        "3. Produtos no numerador: [CO2]. Sólido CaO (s) é omitido (= 1).",
        "4. Reagentes no denominador: Sólido CaCO3 (s) é omitido (= 1).",
        "5. Expressão final: Kc = [CO2]. Alternativa (a) correta."
      ],
      coreConcept: "Equilíbrios Heterogêneos e a Omissão de Sólidos e Líquidos Puros em Kc",
      trapWarning: "No ENEM: Se vir um '(s)' na equação química, corte-o imediatamente ao montar a fórmula de Kc e Kp! Ele NUNCA entra na constante!"
    },
    commonTraps: [
      "Colocar sólidos na fração do Kc",
      "Inverter a fração colocando reagentes sobre produtos"
    ],
    tags: ["constante-kc", "equilibrio-heterogeneo", "calcario", "lei-acao-das-massas", "fisico-quimica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-012",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Efeito do Íon Comum e Recuo de Ionização de Ácidos Fracos",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere uma solução aquosa de ácido acético (CH3COOH, vinagre), um ácido fraco cujo equilíbrio de ionização é:\n\nCH3COOH (aq) ⇌ CH3COO⁻ (aq) + H⁺ (aq)      Ka = 1,8 · 10^-5\n\nA um frasco contendo essa solução, um estudante adiciona alguns cristais solúveis de acetato de sódio (CH3COONa), sal que se dissocia 100% em água liberando cátions Na⁺ e ânions acetato (CH3COO⁻).",
      source: "Equilíbrio Químico em Soluções Aquosas e Efeito do Íon Comum"
    },
    prompt: "A adição do sal acetato de sódio à solução de ácido acético provoca, no equilíbrio de ionização do ácido:",
    options: [
      { id: "a", text: "deslocamento do equilíbrio para a esquerda (recuo da ionização) devido ao aumento da concentração do íon comum CH3COO⁻, reduzindo a concentração de H⁺ e aumentando o pH da solução.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "deslocamento para a direita, aumentando a acidez da solução e diminuindo o pH para valores negativos.", isCorrect: false, distractorRationale: "Adicionar produto (CH3COO-) desloca o equilíbrio para o lado oposto (esquerda), consumindo H+." },
      { id: "c", text: "aumento espontâneo do valor numérico da constante de ionização Ka em dez mil vezes.", isCorrect: false, distractorRationale: "A constante de equilíbrio Ka depende UNICAMENTE da temperatura; adição de solutos não altera o valor de Ka." },
      { id: "d", text: "precipitação explosiva de sódio metálico com liberação violenta de gás hidrogênio.", isCorrect: false, distractorRationale: "Íons Na+ em água são estáveis e solvatados, não formando sódio metálico elementar." },
      { id: "e", text: "neutralização total da água com quebra das ligações covalentes de hidrogênio-oxigênio.", isCorrect: false, distractorRationale: "Distrator infundado sem relação com equilíbrios fracos." }
    ],
    detailedExplanation: {
      summary: "O Efeito do Íon Comum é uma aplicação direta de Le Chatelier: se temos o equilíbrio CH3COOH ⇌ CH3COO- + H+ e adicionamos acetato de sódio (que joga muito CH3COO- na solução), estamos AUMENTANDO um produto. Para se reequilibrar, o sistema se desloca para a ESQUERDA (reagentes), consumindo H+. Menos H+ significa menor grau de ionização do ácido e aumento do pH.",
      stepByStep: [
        "1. Equilíbrio inicial: CH3COOH (aq) ⇌ CH3COO- (aq) + H+ (aq).",
        "2. Adição do sal: CH3COONa (s) -> Na+ (aq) + CH3COO- (aq) (dissociação total).",
        "3. Perturbação: O ânion acetato é o ÍON COMUM; sua concentração dispara.",
        "4. Resposta do sistema: Desloca para a ESQUERDA para consumir o excesso de acetato.",
        "5. Consequência: Consome H+ -> [H+] diminui -> pH SOBE (meio menos ácido).",
        "6. Conclusão: A alternativa (a) reflete com precisão o efeito do íon comum."
      ],
      coreConcept: "Efeito do Íon Comum e Deslocamento para a Esquerda em Ácidos Fracos",
      trapWarning: "No ENEM: A constante de equilíbrio Ka ou Kc SÓ MUDA COM A TEMPERATURA! Nem íon comum, nem catalisador, nem pressão alteram o valor numérico de Ka!"
    },
    commonTraps: [
      "Achar que adicionar o sal muda o valor de Ka (Ka só varia com a temperatura)",
      "Inverter o deslocamento achando que mais acetato faria o ácido ionizar mais"
    ],
    tags: ["ion-comum", "le-chatelier", "acido-acetico", "equilibrio-ionico", "ph"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-013",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Soluções Tampão: Capacidade de Amortecimento contra Variações de pH",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em processos biotecnológicos de cultura de células e fabricação de vacinas, a manutenção do pH do meio em faixas ultraestreitas é crucial para a integridade conformacional das enzimas e proteínas virais. Para isso, utilizam-se soluções tampão preparadas em laboratório.",
      source: "Biotecnologia Farmacêutica e Meios de Cultura Celular"
    },
    prompt: "Uma solução tampão clássica caracteriza-se essencialmente pela sua capacidade de resistir a variações bruscas de pH quando se adicionam pequenas quantidades de ácidos fortes ou bases fortes, sendo quimicamente constituída por:",
    options: [
      { id: "a", text: "uma mistura em equilíbrio de um ácido fraco com o seu sal conjugado (base fraca), ou de uma base fraca com o seu sal conjugado (ácido fraco).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "uma mistura equimolar de ácido clorídrico concentrado e ácido sulfúrico fumante.", isCorrect: false, distractorRationale: "Mistura de ácidos fortes não forma solução tampão; geraria acidez extrema e violenta variação de pH." },
      { id: "c", text: "água destilada desprovida de quaisquer eletrólitos ou sais minerais dissolvidos.", isCorrect: false, distractorRationale: "Água pura não tem capacidade tamponante; uma única gota de ácido forte altera drasticamente seu pH de 7 para 3." },
      { id: "d", text: "hidróxido de sódio puro com grânulos de metal alcalino sem água.", isCorrect: false, distractorRationale: "Bases fortes isoladas não tamponam pH." },
      { id: "e", text: "solução de sacarose a 50% em óleo mineral estéril.", isCorrect: false, distractorRationale: "Açúcares em óleo não ionizam nem formam equilíbrios ácido-base tampão." }
    ],
    detailedExplanation: {
      summary: "Uma solução tampão precisa de DOIS componentes: uma reserva ácida para neutralizar bases adicionadas (o ácido fraco HA) e uma reserva básica para neutralizar ácidos adicionados (o ânion conjugado A-). Se adicionar H+, o A- consome; se adicionar OH-, o HA consome. Assim o pH quase não muda!",
      stepByStep: [
        "1. Composição do tampão ácido: Ácido fraco (ex: CH3COOH) + Sal com a base conjugada (ex: CH3COONa).",
        "2. Composição do tampão básico: Base fraca (ex: NH3/NH4OH) + Sal com o ácido conjugado (ex: NH4Cl).",
        "3. Ação tamponante contra ácido: H+ adicionado reage com A- formando HA não ionizado.",
        "4. Ação tamponante contra base: OH- adicionado reage com HA formando A- e água.",
        "5. Conclusão: A alternativa (a) define a constituição química de uma solução tampão."
      ],
      coreConcept: "Definição e Mecanismo de Ação de uma Solução Tampão",
      trapWarning: "No ENEM: Ácido forte com base forte (ex: HCl + NaOH) NUNCA forma tampão! Tampão exige obrigatoriamente componente FRACO em equilíbrio com sua espécie conjugada!"
    },
    commonTraps: [
      "Achar que água pura é um tampão por ter pH 7",
      "Achar que misturar dois ácidos fortes cria efeito tampão"
    ],
    tags: ["solucao-tampao", "acido-fraco", "base-conjugada", "biotecnologia", "enzimas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-014",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Equilíbrio do Carbonato e Acidificação dos Oceanos por Emissões de CO2",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A queima massiva de combustíveis fósseis tem elevado a concentração atmosférica de CO2 para além de 420 ppm. Cerca de um terço desse gás é absorvido pelos oceanos, desencadeando a cadeia de reações químicas:\n\nCO2 (g) ⇌ CO2 (aq)\nCO2 (aq) + H2O (l) ⇌ H2CO3 (aq) ⇌ H⁺ (aq) + HCO3⁻ (aq)\nH⁺ (aq) + CO3²⁻ (aq) ⇌ HCO3⁻ (aq)\n\nEsse fenômeno, conhecido como 'acidificação dos oceanos', compromete gravemente a sobrevivência de corais e moluscos calcificadores que necessitam de íons carbonato (CO3²⁻) para sintetizar suas carapaças de carbonato de cálcio (CaCO3).",
      source: "Oceanografia Química e Impactos das Mudanças Climáticas Globais"
    },
    prompt: "De acordo com os equilíbrios químicos apresentados, a acidificação dos oceanos prejudica a formação das carapaças dos organismos marinhos calcificadores porque:",
    options: [
      { id: "a", text: "o excesso de íons H⁺ livres gerados pela dissociação do ácido carbônico reage com os íons carbonato (CO3²⁻), convertendo-os em bicarbonato (HCO3⁻) e reduzindo a disponibilidade de carbonato livre necessário para a precipitação de CaCO3.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o CO2 dissolve o ferro dos navios e transforma a água do mar em uma solução de ácido clorídrico concentrado.", isCorrect: false, distractorRationale: "O ácido gerado é o ácido carbônico fraco (H2CO3), não ácido clorídrico mineral." },
      { id: "c", text: "os corais passam a utilizar cloreto de sódio em vez de cálcio para construir seus esqueletos ósseos.", isCorrect: false, distractorRationale: "Esqueletos de corais são de CaCO3 (calcita/aragonita), e cloreto de sódio é solúvel na água." },
      { id: "d", text: "o aumento de CO2 atmosférico congela a superfície oceânica mesmo na linha do equador.", isCorrect: false, distractorRationale: "O CO2 é gás de efeito estufa que promove aquecimento, não congelamento equatorial." },
      { id: "e", text: "os íons H⁺ transformam o cálcio aquoso em gás hélio radioativo.", isCorrect: false, distractorRationale: "Reações químicas ordinárias não alteram núcleos atômicos nem realizam transmutação nuclear." }
    ],
    detailedExplanation: {
      summary: "A química da acidificação oceânica no ENEM é direta: Mais CO2 na atmosfera -> mais CO2 dissolvido na água -> mais ácido carbônico H2CO3 -> mais H+ livre (pH cai). O H+ em excesso reage com o carbonato livre: H+ + CO3²- -> HCO3-. Com MENOS carbonato (CO3²-) livre, os corais não conseguem fazer a reação de biocalcificação: Ca²⁺ + CO3²⁻ ⇌ CaCO3 (s). E os corais existentes começam a se dissolver!",
      stepByStep: [
        "1. Dissolução de CO2: CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3- (liberação de H+).",
        "2. Sequestro do carbonato: O H+ reage com o CO3²- da água marinha formando bicarbonato (HCO3-).",
        "3. Déficit de carbonato: A concentração de CO3²- despenca no oceano.",
        "4. Impacto biológico: O produto [Ca²+] · [CO3²-] fica abaixo do Kps do CaCO3, dissolvendo corais e conchas.",
        "5. Conclusão: A alternativa (a) descreve com rigor os equilíbrios químicos de biogeoquímica marinha."
      ],
      coreConcept: "Acidificação Oceânica: Sequestro de Íons Carbonato por H+",
      trapWarning: "No ENEM: A acidificação dos oceanos NÃO significa que a água do mar virou ácido sulfúrico com pH 2! Significa que o pH básico do mar caiu de ~8,2 para ~8,1 (ficou menos básico, mais ácido que antes), o que já é suficiente para devastar recifes de corais!"
    },
    commonTraps: [
      "Achar que acidificação significa que a água do mar ficou com pH menor que 7",
      "Não perceber a reação entre H+ e o ânion carbonato (CO3²-)"
    ],
    tags: ["acidificacao-dos-oceanos", "carbonato-de-calcio", "corais", "equilibrio-quimico", "meio-ambiente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-015",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Mistura de Soluções com Reação Química e Reagente Limitante",
    difficulty: 4,
    estimatedTimeSeconds: 170,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma aula prática de química geral, misturaram-se 100 mL de uma solução aquosa de hidróxido de sódio (NaOH) a 0,20 mol/L com 100 mL de uma solução aquosa de ácido clorídrico (HCl) a 0,10 mol/L a 25 °C:\n\nNaOH (aq) + HCl (aq) -> NaCl (aq) + H2O (l)",
      source: "Estequiometria de Soluções e Reações de Neutralização Parcial"
    },
    prompt: "Considerando que os volumes das soluções são aditivos (volume final = 200 mL), a concentração de íons OH⁻ remanescentes em excesso na solução final e o pH resultante a 25 °C são, respectivamente:",
    options: [
      { id: "a", text: "[OH⁻] = 0,05 mol/L e pH = 12,7.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "[OH⁻] = 0,10 mol/L e pH = 13,0.", isCorrect: false, distractorRationale: "0,10 mol/L seria a concentração se não houvesse neutralização de metade da base pelo HCl ou se o volume não tivesse dobrado para 200 mL." },
      { id: "c", text: "[OH⁻] = 0,01 mol/L e pH = 7,0.", isCorrect: false, distractorRationale: "Como a base está em excesso estequiométrico, a solução é fortemente básica (pH > 7), e não neutra." },
      { id: "d", text: "[OH⁻] = 0,20 mol/L e pH = 14,0.", isCorrect: false, distractorRationale: "Ignora o consumo estequiométrico de base pelo ácido e a diluição dos volumes." },
      { id: "e", text: "[OH⁻] = 0 mol/L e pH = 1,0.", isCorrect: false, distractorRationale: "pH 1 indicaria excesso de ácido clorídrico, mas quem está em excesso é a base NaOH." }
    ],
    detailedExplanation: {
      summary: "Mols de NaOH: n_base = 0,20 mol/L · 0,10 L = 0,020 mol. Mols de HCl: n_ácido = 0,10 mol/L · 0,10 L = 0,010 mol. O HCl é o reagente limitante e neutraliza 0,010 mol de NaOH. Sobram em excesso: 0,020 - 0,010 = 0,010 mol de NaOH em V_total = 100 + 100 = 200 mL (0,20 L). Concentração de OH-: [OH-] = 0,010 mol / 0,20 L = 0,050 mol/L = 5 · 10^-2 mol/L. pOH = -log(5 · 10^-2) = 2 - log 5 = 2 - 0,7 = 1,3. Logo: pH = 14 - 1,3 = 12,7.",
      stepByStep: [
        "1. Quantidade de NaOH inicial: n_NaOH = 0,20 mol/L · 0,10 L = 0,020 mol.",
        "2. Quantidade de HCl inicial: n_HCl = 0,10 mol/L · 0,10 L = 0,010 mol.",
        "3. Neutralização (1:1): 0,010 mol de HCl reage com 0,010 mol de NaOH.",
        "4. Excesso de NaOH: 0,020 - 0,010 = 0,010 mol de NaOH não reagido.",
        "5. Volume final total: 100 mL + 100 mL = 200 mL = 0,20 L.",
        "6. Concentração de OH- no equilíbrio: [OH-] = 0,010 mol / 0,20 L = 0,050 mol/L.",
        "7. Cálculo de pOH e pH: pOH = -log(0,05) = -log(5 · 10^-2) = 2 - 0,7 = 1,3 ⟹ pH = 14 - 1,3 = 12,7.",
        "8. Conclusão: [OH-] = 0,05 mol/L e pH = 12,7. Alternativa (a) correta."
      ],
      coreConcept: "Mistura de Soluções com Neutralização Parcial e Cálculo de pH",
      trapWarning: "No ENEM: Não se esqueça de SOMAR OS VOLUMES ao final da mistura! O excesso de soluto agora está dissolvido no volume TOTAL (100 + 100 = 200 mL)!"
    },
    commonTraps: [
      "Esquecer de somar os volumes das duas soluções para achar a nova concentração",
      "Calcular o pOH e esquecer de subtrair de 14 para achar o pH da solução básica"
    ],
    tags: ["mistura-de-solucoes", "reagente-limitante", "ph", "poh", "neutralizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-016",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Grau de Ionização e Lei da Diluição de Ostwald para Eletrólitos Fracos",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A Lei da Diluição de Wilhelm Ostwald relaciona a constante de ionização de um ácido fraco monoprótico (Ka) com sua concentração molar inicial (M) e seu grau de ionização (α):\n\nKa = (M · α²) / (1 - α)\n\nPara eletrólitos muito fracos, nos quais o grau de ionização é inferior a 5% (α < 0,05), a expressão simplifica-se com excelente aproximação para Ka ≈ M · α².",
      source: "Físico-Química: Teoria dos Eletrólitos e Condutimetria"
    },
    prompt: "Um ácido monoprótico fraco HA possui constante de ionização Ka = 1,0 · 10^-5 a 25 °C. Em uma solução aquosa desse ácido na concentração de 0,10 mol/L, o grau de ionização α e a concentração de íons H⁺ são, respectivamente:",
    options: [
      { id: "a", text: "α = 0,01 (1%) e [H⁺] = 1,0 · 10^-3 mol/L (pH = 3).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "α = 0,10 (10%) e [H⁺] = 1,0 · 10^-2 mol/L (pH = 2).", isCorrect: false, distractorRationale: "Com α = 10%, a simplificação de Ostwald não se aplicaria e Ka seria 10^-3, e não 10^-5." },
      { id: "c", text: "α = 1,00 (100%) e [H⁺] = 0,10 mol/L (pH = 1).", isCorrect: false, distractorRationale: "100% corresponderia a um ácido forte como HCl, e não a um ácido fraco com Ka = 10^-5." },
      { id: "d", text: "α = 0,0001 (0,01%) e [H⁺] = 1,0 · 10^-6 mol/L (pH = 6).", isCorrect: false, distractorRationale: "Erro de cálculo ao extrair a raiz quadrada de Ka / M." },
      { id: "e", text: "α = 0 e [H⁺] = 0 mol/L (pH = 14).", isCorrect: false, distractorRationale: "Todo ácido fraco ioniza em alguma fração mensurável, não tendo ionização estritamente nula." }
    ],
    detailedExplanation: {
      summary: "Pela aproximação de Ostwald: Ka = M · α² ⟹ α² = Ka / M = (1,0 · 10^-5) / 0,10 = 1,0 · 10^-4 ⟹ α = √(1,0 · 10^-4) = 1,0 · 10^-2 = 0,01 (1%). A concentração de H+ é: [H+] = M · α = 0,10 · 0,01 = 1,0 · 10^-3 mol/L. Logo, pH = 3.",
      stepByStep: [
        "1. Dados: Ka = 1,0 · 10^-5; M = 0,10 mol/L = 10^-1 mol/L.",
        "2. Fórmula simplificada de Ostwald: α² = Ka / M.",
        "3. Cálculo de α²: α² = 10^-5 / 10^-1 = 10^-4.",
        "4. Cálculo de α: α = √(10^-4) = 10^-2 = 0,01 = 1% (confirma que α < 5%, hipótese válida).",
        "5. Cálculo de [H+]: [H+] = M · α = 10^-1 · 10^-2 = 10^-3 mol/L (pH = 3).",
        "6. Conclusão: α = 1% e [H+] = 10^-3 mol/L. Alternativa (a) correta."
      ],
      coreConcept: "Lei da Diluição de Ostwald: Ka = M · α² e [H+] = M · α",
      trapWarning: "No ENEM: Diluir um ácido fraco (adicionar água) AUMENTA o seu grau de ionização (α sobe), embora a concentração de H+ caia e o pH suba!"
    },
    commonTraps: [
      "Achar que diluir o ácido fraco diminui seu grau de ionização (na verdade a diluição aumenta α)",
      "Esquecer de tirar a raiz quadrada de α²"
    ],
    tags: ["lei-de-ostwald", "grau-de-ionizacao", "acido-fraco", "constante-ka", "equilibrio-ionico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-017",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Relação entre Constantes Kc e Kp em Equilíbrios Gasosos",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Para reações químicas envolvendo substâncias gasosas em equilíbrio, o sistema pode ser descrito tanto pela constante de equilíbrio expressa em concentrações molares (Kc) quanto pela constante expressa em pressões parciais (Kp). A relação matemática termodinâmica entre as duas constantes é dada por:\n\nKp = Kc · (R · T)^Δn\n\nonde R é a constante universal dos gases, T é a temperatura absoluta em kelvins e Δn é a variação na quantidade de matéria de espécies gasosas (Δn = n_produtos(g) - n_reagentes(g)).",
      source: "Termodinâmica Química Clássica"
    },
    prompt: "Dentre as reações em fase gasosa apresentadas abaixo, aquela na qual o valor numérico de Kp é RIGOROSAMENTE IGUAL a Kc (Kp = Kc) em qualquer temperatura absoluta T é:",
    options: [
      { id: "a", text: "H2 (g) + I2 (g) ⇌ 2 HI (g)", isCorrect: true, distractorRationale: null },
      { id: "b", text: "N2 (g) + 3 H2 (g) ⇌ 2 NH3 (g)", isCorrect: false, distractorRationale: "Δn = 2 - (1 + 3) = -2 ≠ 0; Kp = Kc · (RT)^(-2) ≠ Kc." },
      { id: "c", text: "2 SO2 (g) + O2 (g) ⇌ 2 SO3 (g)", isCorrect: false, distractorRationale: "Δn = 2 - (2 + 1) = -1 ≠ 0; Kp = Kc · (RT)^(-1) ≠ Kc." },
      { id: "d", text: "PCl5 (g) ⇌ PCl3 (g) + Cl2 (g)", isCorrect: false, distractorRationale: "Δn = (1 + 1) - 1 = +1 ≠ 0; Kp = Kc · (RT)^(+1) ≠ Kc." },
      { id: "e", text: "2 H2 (g) + O2 (g) ⇌ 2 H2O (g)", isCorrect: false, distractorRationale: "Δn = 2 - (2 + 1) = -1 ≠ 0; Kp ≠ Kc." }
    ],
    detailedExplanation: {
      summary: "Para que Kp = Kc, é obrigatório que o fator (R · T)^Δn seja igual a 1. Como qualquer número diferente de zero elevado a zero é igual a 1, isso ocorre EXCLUSIVAMENTE quando Δn = 0 (ou seja, o número de mols de gás nos reagentes é idêntico ao dos produtos!). Na reação H2 (g) + I2 (g) ⇌ 2 HI (g), temos 2 mols de gás nos reagentes e 2 mols nos produtos: Δn = 2 - 2 = 0 ⟹ Kp = Kc · (RT)⁰ = Kc · 1 = Kc.",
      stepByStep: [
        "1. Condição matemática: Kp = Kc ⟺ (RT)^Δn = 1 ⟺ Δn = 0.",
        "2. Análise de (a): H2(g) [1] + I2(g) [1] ⇌ 2 HI(g) [2] ⟹ Δn = 2 - (1 + 1) = 0. Kp = Kc!",
        "3. Análise de (b): Δn = 2 - 4 = -2.",
        "4. Análise de (c): Δn = 2 - 3 = -1.",
        "5. Análise de (d): Δn = 2 - 1 = +1.",
        "6. Conclusão: Apenas na reação (a) a variação de mols gasosos é nula, tornando Kp = Kc."
      ],
      coreConcept: "Relação Kp = Kc · (RT)^Δn e a Condição Δn = 0",
      trapWarning: "No ENEM: Quando Δn = 0 (mesmo número de mols de gás em ambos os lados), uma alteração na pressão total do recipiente NÃO DESLOCA O EQUILÍBRIO químico!"
    },
    commonTraps: [
      "Achar que Kp e Kc são sempre diferentes em reações gasosas",
      "Esquecer que o expoente Δn conta apenas os coeficientes de substâncias no estado gasoso"
    ],
    tags: ["kp", "kc", "gases", "termodinamica-quimica", "equilibrio-gasoso"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-018",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "A Quimiorrecepção de Oxigênio pela Hemoglobina e Intoxicação por CO",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema circulatório humano, a proteína hemoglobina (Hb) liga-se reversivelmente ao oxigênio molecular nos alvéolos pulmonares formando oxiemoglobina (HbO2):\n\nHb (aq) + O2 (g) ⇌ HbO2 (aq)      Kc1\n\nNo entanto, o monóxido de carbono (CO) — gás inodoro e incolor liberado na combustão incompleta de combustíveis em aquecedores a gás defeituosos e motores a combustão — também se liga ao mesmo sítio ativo de ferro da hemoglobina formando carboxiemoglobina (HbCO):\n\nHb (aq) + CO (g) ⇌ HbCO (aq)      Kc2\n\nEstudos bioquímicos demonstram que a afinidade da hemoglobina pelo CO é cerca de 250 vezes maior que pelo O2 (Kc2 >> Kc1).",
      source: "Bioquímica Médica e Toxicologia Ocupacional de Gases"
    },
    prompt: "Do ponto de vista do equilíbrio químico e da fisiologia humana, a extrema toxicidade e a letalidade do monóxido de carbono decorrem do fato de que:",
    options: [
      { id: "a", text: "devido à sua elevadíssima constante de equilíbrio (Kc2 >> Kc1), o CO desloca o oxigênio do sítio de ligação e sequestra irreversivelmente as moléculas de hemoglobina, impedindo o transporte de O2 para os tecidos e provocando asfixia química celular.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o CO decompõe os pulmões em ácido fluorídrico gasoso que corrói os brônquios instantaneamente.", isCorrect: false, distractorRationale: "O monóxido de carbono não contém flúor e não sintetiza ácido fluorídrico." },
      { id: "c", text: "o CO precipita os ossos do tórax na forma de gesso de sulfato de cálcio.", isCorrect: false, distractorRationale: "O monóxido de carbono atua na hemoglobina do sangue, sem efeito de precipitação óssea torácica." },
      { id: "d", text: "a hemoglobina transforma o CO em glicose pura provocando hiperglicemia diabética fatal.", isCorrect: false, distractorRationale: "CO não é metabolizado em carboidratos pelo eritrócito." },
      { id: "e", text: "o monóxido de carbono resfria o sangue até transformá-lo em gelo no interior do coração.", isCorrect: false, distractorRationale: "Distrator estapafúrdio sem base fisiológica." }
    ],
    detailedExplanation: {
      summary: "Competição de equilíbrios: O2 e CO disputam o mesmo átomo de Fe²⁺ do grupo heme da hemoglobina. Como a constante de equilíbrio Kc para o CO é ~250 vezes maior, mesmo uma fração minúscula de CO no ar inalado (0,1%) é capaz de converter a maior parte da hemoglobina em HbCO (carboxiemoglobina). Sem sítios livres para transportar O2, as mitocôndrias entram em anóxia e o indivíduo falece por asfixia celular.",
      stepByStep: [
        "1. Disputa pelo sítio ativo: Hb + O2 ⇌ HbO2 vs Hb + CO ⇌ HbCO.",
        "2. Termodinâmica: Kc do CO é 250 vezes superior ao Kc do O2.",
        "3. Consequência: O equilíbrio do CO prevalece esmagadoramente e bloqueia o transporte de oxigênio.",
        "4. Tratamento médico de emergência: Câmara hiperbárica com O2 a 100% sob alta pressão para deslocar o equilíbrio de volta a favor da oxiemoglobina por Le Chatelier!",
        "5. Conclusão: A alternativa (a) reflete com clareza o mecanismo bioquímico da intoxicação."
      ],
      coreConcept: "Competição de Equilíbrios Químicos: O2 vs CO na Hemoglobina",
      trapWarning: "No ENEM: CO (monóxido de carbono, 1 oxigênio) é o veneno asfixiante que se liga à hemoglobina! CO2 (dióxido de carbono, 2 oxigênios) é o gás normal da respiração que regula o pH sanguíneo!"
    },
    commonTraps: [
      "Confundir monóxido de carbono (CO) com gás carbônico (CO2)",
      "Achar que o monóxido de carbono destrói os pulmões fisicamente (ele bloqueia o transporte de O2 no sangue)"
    ],
    tags: ["monoxido-de-carbono", "hemoglobina", "equilibrio-quimico", "asfixia-quimica", "medicina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-019",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Condutividade Elétrica de Soluções Eletrolíticas e Não Eletrolíticas",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um experimento de condutividade elétrica com circuito fechado contendo uma lâmpada e dois eletrodos de platina imersos em béqueres, testaram-se quatro líquidos a 25 °C:\n• Líquido 1: Água destilada pura;\n• Líquido 2: Solução aquosa de sacarose (C12H22O11, açúcar comum);\n• Líquido 3: Solução aquosa de cloreto de sódio (NaCl, sal de cozinha);\n• Líquido 4: Solução aquosa de ácido clorídrico (HCl).",
      source: "Eletroquímica e Teoria da Dissociação Eletrolítica de Arrhenius"
    },
    prompt: "A lâmpada do circuito acendeu com brilho intenso EXCLUSIVAMENTE nos líquidos:",
    options: [
      { id: "a", text: "3 e 4 (soluções eletrolíticas que contêm alta densidade de íons livres com mobilidade elétrica em meio aquoso decorrentes da dissociação iônica do NaCl e da ionização do HCl).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "1 e 2, pois a água pura e o açúcar são condutores metálicos perfeitos de elétrons livres.", isCorrect: false, distractorRationale: "Água pura é péssima condutora e sacarose é substância molecular não eletrolítica que não forma íons." },
      { id: "c", text: "2 e 3 exclusivamente, pois substâncias doces e salgadas conduzem prótons nucleares.", isCorrect: false, distractorRationale: "Açúcar não conduz corrente elétrica em solução aquosa; não há condução de prótons nucleares." },
      { id: "d", text: "1, 2, 3 e 4 com o mesmo brilho idêntico em todos os recipientes.", isCorrect: false, distractorRationale: "Apenas soluções com íons móveis livres conduzem corrente elétrica de forma apreciável." },
      { id: "e", text: "nenhum dos líquidos, pois a condução elétrica é fisicamente impossível no estado aquoso.", isCorrect: false, distractorRationale: "Soluções iônicas conduzem eletricidade com eficiência clássica comprovada desde Arrhenius." }
    ],
    detailedExplanation: {
      summary: "Para uma solução conduzir eletricidade, ela necessita de CARGAS LIVRES COM MOBILIDADE (íons móveis): 1) Água pura: quase não ioniza (Kw = 10^-14), lâmpada apagada; 2) Sacarose: composto molecular que apenas se dissolve (solvatação), sem formar íons (não eletrolítica, lâmpada apagada); 3) NaCl: composto iônico que sofre DISSOCIAÇÃO gerando Na+ e Cl- (lâmpada acende); 4) HCl: composto molecular que sofre IONIZAÇÃO gerando H+ e Cl- (lâmpada acende).",
      stepByStep: [
        "1. Requisito para corrente em soluções: íons livres com mobilidade.",
        "2. Açúcar (sacarose): solução molecular neutra -> não conduz.",
        "3. Sal (NaCl): dissociação iônica -> conduz fortemente.",
        "4. Ácido forte (HCl): ionização total -> conduz fortemente.",
        "5. Conclusão: Apenas 3 e 4 acendem a lâmpada. Alternativa (a) correta."
      ],
      coreConcept: "Condutibilidade Elétrica em Soluções: Eletrólitos vs Não Eletrólitos",
      trapWarning: "No ENEM: Água pura é má condutora de eletricidade! Quando alguém leva choque na banheira ou piscina, é porque a água contém SAIS DISSOLVIDOS (cloretos, carbonatos, suor) que fornecem os íons condutores!"
    },
    commonTraps: [
      "Achar que solução de açúcar conduz eletricidade",
      "Confundir condução eletrônica (metais com elétrons livres) com condução iônica (soluções com íons livres)"
    ],
    tags: ["condutividade", "eletrolitos", "dissociacao-ionica", "ionizacao", "arrhenius"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-020",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Equilíbrio Químico e Catalisadores: O Papel na Cinética vs Termodinâmica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em processos industriais e em vias metabólicas biológicas mediadas por enzimas, o uso de catalisadores é indispensável para viabilizar reações em velocidades compatíveis com a vida ou com a rentabilidade econômica.",
      source: "Cinética Química e Catálise Enzimática"
    },
    prompt: "Em relação a um sistema químico reversível em equilíbrio, a adição de um catalisador adequado:",
    options: [
      { id: "a", text: "reduz a energia de ativação de ambos os sentidos da reação (direta e inversa) de forma idêntica, acelerando a velocidade para se atingir o estado de equilíbrio, sem alterar a posição do equilíbrio químico, o rendimento dos produtos ou o valor de Kc.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "desloca o equilíbrio fortemente para a direita, aumentando em 100% o rendimento final dos produtos.", isCorrect: false, distractorRationale: "Catalisadores NÃO deslocam o equilíbrio e NÃO alteram o rendimento final dos produtos." },
      { id: "c", text: "aumenta o valor numérico da constante de equilíbrio Kc por elevar a entalpia de ligação.", isCorrect: false, distractorRationale: "O valor de Kc depende exclusivamente da temperatura e é inalterado por catalisadores." },
      { id: "d", text: "fornece calor contínuo para transformar reações endotérmicas em reações exotérmicas.", isCorrect: false, distractorRationale: "Catalisador não altera a variação de entalpia (ΔH) da reação química." },
      { id: "e", text: "consome-se integralmente na primeira etapa sem ser regenerado ao término do ciclo.", isCorrect: false, distractorRationale: "Por definição clássica, o catalisador é integralmente regenerado ao final da reação." }
    ],
    detailedExplanation: {
      summary: "Regra clássica do ENEM: CATALISADOR NÃO FAZ MILAGRE TERMODINÂMICO! Ele é como um 'atalho na montanha': reduz a energia de ativação e faz o sistema chegar ao equilíbrio mais rápido. Mas ele NÃO muda a composição do equilíbrio, NÃO aumenta o rendimento e NÃO muda o valor de Kc ou Kp!",
      stepByStep: [
        "1. Papel do catalisador: Criar um caminho reacional alternativo com menor energia de ativação (Eat).",
        "2. Acelera ambos os sentidos: Aumenta a velocidade v1 (direta) e v2 (inversa) exatamente na mesma proporção.",
        "3. Termodinâmica intocada: ΔH (entalpia) e Kc (constante de equilíbrio) permanecem rigorosamente os mesmos.",
        "4. Conclusão: A alternativa (a) reflete com perfeição o dogma físico-químico da catálise."
      ],
      coreConcept: "Ação de Catalisadores em Sistemas em Equilíbrio",
      trapWarning: "No ENEM: Se uma questão perguntar 'o que fazer para aumentar o RENDIMENTO de amônia?', catalisador NUNCA é a resposta! Catalisador aumenta a VELOCIDADE, não o rendimento!"
    },
    commonTraps: [
      "Achar que catalisador aumenta a quantidade final de produto obtido",
      "Achar que catalisador altera o Kc da reação"
    ],
    tags: ["catalisador", "cinetica-quimica", "energia-de-ativacao", "equilibrio-quimico", "enzimas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-021",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Propriedades Coligativas: Osmometria e Pressão Osmótica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Hemácias humanas saudáveis foram colocadas em três tubos de ensaio contendo diferentes soluções aquosas a 37 °C:\n• Tubo 1: Solução aquosa de NaCl a 0,9% (soro fisiológico isotônico);\n• Tubo 2: Água destilada pura (meio hipotônico);\n• Tubo 3: Solução aquosa concentrada de NaCl a 5,0% (meio hipertônico).",
      source: "Propriedades Coligativas e Fisiologia da Membrana Celular"
    },
    prompt: "Após alguns minutos de incubação, as hemácias nos tubos 2 e 3 sofrerão, respectivamente, os seguintes fenômenos osmóticos:",
    options: [
      { id: "a", text: "lise celular por hemólise (inchaço e rompimento da membrana pela entrada excessiva de água por osmose) no Tubo 2, e crenação celular (murchamento por desidratação osmótica de água para o meio externo) no Tubo 3.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "crenação no Tubo 2 e hemólise no Tubo 3.", isCorrect: false, distractorRationale: "Inversão dos fenômenos; água destilada é meio hipotônico, fazendo a água ENTRAR na célula e rompê-la." },
      { id: "c", text: "divisão celular acelerada por mitose em ambos os tubos.", isCorrect: false, distractorRationale: "Hemácias de mamíferos são anucleadas e desprovidas de centríolos, incapazes de realizar mitose." },
      { id: "d", text: "síntese de parede celular vegetal celulósica no Tubo 2 para resistir à pressão.", isCorrect: false, distractorRationale: "Células animais não possuem genes para síntese de parede celular celulósica." },
      { id: "e", text: "congelamento cristalino do citoplasma com formação de pedras nos dois tubos.", isCorrect: false, distractorRationale: "O teste foi realizado a 37 °C, temperatura biológica sem congelamento." }
    ],
    detailedExplanation: {
      summary: "A osmose é o fluxo espontâneo de solvente (água) do meio MENOS concentrado (hipotônico) para o MAIS concentrado (hipertônico). No Tubo 2 (água pura): o meio é hipotônico em relação ao citoplasma da hemácia. A água entra maciçamente; como a célula animal não tem parede rígida, ela incha até arrebentar (hemólise/lise celular). No Tubo 3 (NaCl 5%): o meio é hipertônico. A hemácia perde água para o meio e murcha (crenação).",
      stepByStep: [
        "1. Princípio da osmose: a água se move do hipo para o hiper.",
        "2. Tubo 1 (isotônico): fluxo de entrada igual ao de saída -> hemácia estável.",
        "3. Tubo 2 (água destilada = hipotônico): água entra na hemácia -> inchaço e lise/hemólise.",
        "4. Tubo 3 (NaCl 5% = hipertônico): água sai da hemácia -> desidratação e crenação/murchamento.",
        "5. Conclusão: A alternativa (a) descreve com exatidão a resposta biológica e coligativa."
      ],
      coreConcept: "Osmose, Pressão Osmótica e Comportamento de Células Animais",
      trapWarning: "No ENEM: Célula vegetal colocada em água pura NÃO arrebenta (não sofre lise)! Ela fica TURGIDA porque a PAREDE CELULAR celulósica resiste à pressão de turgor!"
    },
    commonTraps: [
      "Inverter o sentido do fluxo osmótico da água",
      "Esquecer que célula animal rompe em meio hipotônico enquanto célula vegetal resiste pela parede"
    ],
    tags: ["osmose", "propriedades-coligativas", "hemolise", "crenacao", "biofisica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-022",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "Tonoscopia, Ebulioscopia e Crioscopia no Cotidiano",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em regiões de clima temperado e frio com invernos rigorosos, é procedimento padrão adicionar etilenoglicol (um soluto não volátil) à água dos radiadores de motores automotivos. A mesma mistura aquosa é capaz de evitar o congelamento da água no inverno a temperaturas de -15 °C e prevenir a fervura do motor no calor do verão em trânsito intenso.",
      source: "Físico-Química e Propriedades Coligativas de Soluções Reais"
    },
    prompt: "O efeito protetor duplo do etilenoglicol no radiador fundamenta-se nos princípios coligativos da:",
    options: [
      { id: "a", text: "crioscopia (abaixamento da temperatura de congelamento do solvente no inverno) e ebulioscopia (elevação da temperatura de ebulição do solvente no verão), decorrentes da presença das partículas de soluto não volátil dissolvidas na água.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "sublimação acelerada da água que impede a existência de líquidos no interior do motor.", isCorrect: false, distractorRationale: "O motor depende de fluido líquido para refrigerar o bloco; não há sublimação em radiadores." },
      { id: "c", text: "reação nuclear fria que transforma átomos de etileno em chumbo termoisolante.", isCorrect: false, distractorRationale: "Distrator pseudocientífico absurdo." },
      { id: "d", text: "tonoscopia invertida que aumenta a pressão máxima de vapor do solvente para 100 atmosferas.", isCorrect: false, distractorRationale: "A tonoscopia diminui (abaixa) a pressão de vapor do líquido com a adição de soluto não volátil." },
      { id: "e", text: "destruição imediata de todas as moléculas de oxigênio do ar atmosférico por catálise ácida.", isCorrect: false, distractorRationale: "O radiador é um circuito fechado de arrefecimento sem relação com destruição de oxigênio atmosférico." }
    ],
    detailedExplanation: {
      summary: "As 4 propriedades coligativas dependem APENAS do número de partículas de soluto dissolvidas: 1) Tonoscopia: ABAIXA a pressão de vapor; 2) Ebulioscopia: ELEVA a temperatura de ebulição (a água ferve acima de 100 °C, evitando que o motor ferva no verão); 3) Crioscopia: ABAIXA a temperatura de congelamento (a água congela abaixo de 0 °C, evitando que a água congele e quebre o radiador no inverno); 4) Osmometria: ELEVA a pressão osmótica.",
      stepByStep: [
        "1. Adição de soluto não volátil (etilenoglicol): dificulta a organização das moléculas de água.",
        "2. No inverno: Dificulta a cristalização em gelo -> temperatura de fusão cai para -15 °C (Crioscopia).",
        "3. No verão: Dificulta a vaporização das moléculas -> temperatura de ebulição sobe para 110 °C (Ebulioscopia).",
        "4. Conclusão: A alternativa (a) cita e correlaciona corretamente crioscopia e ebulioscopia."
      ],
      coreConcept: "Crioscopia e Ebulioscopia: O Papel de Solutos Não Voláteis",
      trapWarning: "No ENEM: Colocar sal na água do cozimento do macarrão: ELEVA o ponto de ebulição (a água ferve um pouco acima de 100 °C e cozinha mais rápido). Jogar sal no gelo na rua em países frios: ABAIXA o ponto de fusão e derrete a neve!"
    },
    commonTraps: [
      "Confundir crioscopia (abaixa o ponto de congelamento) com ebulioscopia (aumenta o ponto de fervura)",
      "Achar que propriedades coligativas dependem da natureza química do soluto (dependem apenas do NÚMERO de partículas)"
    ],
    tags: ["propriedades-coligativas", "crioscopia", "ebulioscopia", "etilenoglicol", "radiador"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-023",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "O Fator de van 't Hoff (i) e a Diferença entre Eletrólitos e Não Eletrólitos",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O efeito coligativo produzido por uma solução aquosa depende do número total de partículas de soluto dispersas. Jacobus Henricus van 't Hoff introduziu o fator de correção i para eletrólitos:\n\ni = 1 + α · (q - 1)\n\nonde α é o grau de dissociação/ionização e q é o número de íons liberados por fórmula de soluto.",
      source: "Termodinâmica de Soluções Eletrolíticas e Coeficiente de van 't Hoff"
    },
    prompt: "Considere soluções aquosas 0,10 mol/L de glicose (C6H12O6, não eletrolítica) e 0,10 mol/L de cloreto de cálcio (CaCl2, sal com dissociação iônica total α = 100%). A comparação entre os efeitos de abaixamento crioscópico (ΔTc) produzidos por essas duas soluções revela que:",
    options: [
      { id: "a", text: "a solução de CaCl2 provocará um abaixamento crioscópico três vezes maior que a de glicose (ΔTc_CaCl2 ≈ 3 · ΔTc_glicose), pois cada unidade fórmula de CaCl2 se dissocia em 3 íons (1 Ca²⁺ e 2 Cl⁻), gerando 0,30 mol/L de partículas dispersas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ambas as soluções provocarão exatamente o mesmo abaixamento na temperatura de congelamento por terem a mesma molaridade inicial de 0,10 mol/L.", isCorrect: false, distractorRationale: "Eletrólitos se dissociam em múltiplos íons, aumentando o número total de partículas dispersas e multiplicando o efeito coligativo." },
      { id: "c", text: "a solução de glicose provocará o dobro do efeito crioscópico por possuir 24 átomos em sua molécula.", isCorrect: false, distractorRationale: "Moléculas de glicose não se fragmentam em átomos individuais em água; a molécula de glicose atua como uma única partícula coligativa (i = 1)." },
      { id: "d", text: "a solução de CaCl2 não causará nenhum efeito coligativo por precipitar na forma de pedra calcária.", isCorrect: false, distractorRationale: "CaCl2 é sal altamente solúvel e higroscópico em água." },
      { id: "e", text: "a solução de glicose ferverá instantaneamente a 0 °C em virtude de sua densidade atômica.", isCorrect: false, distractorRationale: "Distrator sem fundamento na termodinâmica de soluções." }
    ],
    detailedExplanation: {
      summary: "Para a glicose (não eletrolito): não dissocia (i = 1). Partículas = 0,10 mol/L. Para o CaCl2: CaCl2 -> Ca²⁺ + 2 Cl⁻. q = 3 íons. Com α = 100%: i = 1 + 1 · (3 - 1) = 3. Partículas efetivas = 3 · 0,10 = 0,30 mol/L. Como as propriedades coligativas dependem do número de partículas, o efeito do CaCl2 é 3 VEZES MAIOR que o da glicose!",
      stepByStep: [
        "1. Glicose: soluto molecular. Cada mol de glicose dissolvido gera 1 mol de partículas (i = 1). Partículas = 0,10 mol/L.",
        "2. CaCl2: CaCl2 (s) -> Ca²⁺ (aq) + 2 Cl⁻ (aq). 1 fórmula gera 3 íons (q = 3).",
        "3. Fator de van 't Hoff: i = 3 com 100% de dissociação.",
        "4. Partículas efetivas de CaCl2: 0,10 mol/L · 3 = 0,30 mol/L de íons dispersos.",
        "5. Comparação de efeito: 0,30 / 0,10 = 3 vezes maior para o CaCl2.",
        "6. Conclusão: Alternativa (a) reflete com precisão o cálculo do fator de van 't Hoff."
      ],
      coreConcept: "Fator de van 't Hoff (i) e a Multiplicação dos Efeitos Coligativos em Sais",
      trapWarning: "No ENEM: Se uma questão pedir para comparar quem ferve mais alto ou quem congela mais baixo entre NaCl (i=2), CaCl2 (i=3), AlCl3 (i=4) e Glicose (i=1) em mesma concentração molar, MULTIPLIQUE a molaridade pelo número de íons (fator i)! Quem tiver mais partículas totais causa o maior efeito coligativo!"
    },
    commonTraps: [
      "Esquecer que sais se dissociam em íons e contam cada íon como partícula independente",
      "Achar que o número de átomos de uma molécula não ionizável multiplica o efeito coligativo"
    ],
    tags: ["fator-van-t-hoff", "propriedades-coligativas", "dissociacao", "crioscopia", "ebulioscopia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-024",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "A Quimiorregulação da Formação de Estalactites e Estalagmites em Cavernas Calcárias",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A formação de cavernas cársticas e de suas deslumbrantes formações rochosas (estalactites no teto e estalagmites no chão) é governada pelo equilíbrio reversível entre o carbonato de cálcio insolúvel e o bicarbonato de cálcio solúvel:\n\nCaCO3 (s) + H2O (l) + CO2 (aq) ⇌ Ca(HCO3)2 (aq)\n\nÁguas pluviais que atravessam solos ricos em matéria orgânica em decomposição acumulam altas concentrações de CO2 dissolvido e dissolvem a rocha calcária subterrânea formando galerias. Quando essa água goteja no teto de uma caverna aberta, a pressão parcial de CO2 no ar da caverna é muito menor que a da água da rocha, fazendo com que o CO2 evapore e se desprenda da gota para a atmosfera.",
      source: "Geoquímica de Ambientes Cársticos e Geomorfologia"
    },
    prompt: "De acordo com o Princípio de Le Chatelier, o desprendimento e perda de CO2 da gota de água ao cair no ar da caverna provoca:",
    options: [
      { id: "a", text: "o deslocamento do equilíbrio químico para a esquerda, forçando a precipitação e deposição do carbonato de cálcio insolúvel (CaCO3), o que dá origem ao crescimento milenar das estalactites e estalagmites.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a aceleração da dissolução do calcário até a destruição e colapso total da caverna.", isCorrect: false, distractorRationale: "A perda de CO2 desloca para a esquerda, precipitando rocha sólida, e não dissolvendo." },
      { id: "c", text: "a transformação de todo o cálcio em ferro metálico de alto teor magnético.", isCorrect: false, distractorRationale: "Reação físico-química de equilíbrio iônico sem transmutação de elementos químicos." },
      { id: "d", text: "o deslocamento do equilíbrio para a direita por consumo forçado de água potável.", isCorrect: false, distractorRationale: "A perda de CO2 consome produto da esquerda e desloca para a esquerda para repor o CO2." },
      { id: "e", text: "a cristalização instantânea de diamantes de carbono puro nas paredes da caverna.", isCorrect: false, distractorRationale: "Diamantes exigem pressões e temperaturas colossais no manto terrestre, não equilíbrios de cavernas frias." }
    ],
    detailedExplanation: {
      summary: "Equilíbrio: CaCO3 (s) + H2O + CO2 (aq) ⇌ Ca(HCO3)2 (aq). 1) No subsolo sob alta pressão de CO2: a reação vai para a DIREITA (dissolve a rocha e escava a caverna). 2) Na gota que pinga no teto: o CO2 sai da água e vai para o ar da caverna ([CO2] diminui). 3) Le Chatelier: o sistema se desloca para a ESQUERDA para repor o CO2. Ao ir para a esquerda, forma CaCO3 SÓLIDO (precipita)! Uma gota após outra, ao longo de séculos, nascem estalactites e estalagmites.",
      stepByStep: [
        "1. Reação: CaCO3 (s) [calcário insolúvel] + H2O + CO2 (aq) ⇌ Ca(HCO3)2 (aq) [solúvel].",
        "2. Fato no teto da caverna: O CO2 gasoso escapa da gota de água para o ar.",
        "3. Aplicação de Le Chatelier: Como [CO2] cai, o equilíbrio se desloca para a ESQUERDA.",
        "4. Resultado físico: O carbonato de cálcio (CaCO3) insolúvel precipita no teto e no chão.",
        "5. Conclusão: A alternativa (a) explica magistralmente a geologia química das estalactites."
      ],
      coreConcept: "Le Chatelier na Formação de Espeleotemas em Cavernas Cársticas",
      trapWarning: "No ENEM: Esse equilíbrio é clássico interdisciplinar de Química com Geografia (relevo cárstico)! Reação para a direita = formação de cavernas e dolinas; Reação para a esquerda = formação de estalactites e estalagmites!"
    },
    commonTraps: [
      "Inverter o sentido do deslocamento quando o CO2 escapa",
      "Confundir estalactite (que desce do teto) com estalagmite (que sobe do chão)"
    ],
    tags: ["estalactites", "le-chatelier", "relevo-carstico", "carbonato-de-calcio", "geologia-quimica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "NAT-SOL-025",
    area: "natureza",
    competence: 7,
    skill: 24,
    topic: "Equilíbrio Químico e Soluções",
    subtopic: "A Cinética da Corrosão e a Proteção Catódica por Metal de Sacrifício",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Estruturas metálicas de aço (compostas predominantemente por ferro) imersas em água salobra ou enterradas no solo úmido sofrem rápida corrosão eletroquímica pela reação espontânea de oxidação:\n\nFe (s) -> Fe²⁺ (aq) + 2 e⁻      E°_oxidação = +0,44 V\n\nPara proteger o casco de embarcações, dutos subterrâneos e plataformas petrolíferas marinhas contra a ferrugem, técnicos fixam placas de zinco ou magnésio conectadas eletricamente ao ferro (método conhecido como proteção catódica por metal de sacrifício).\nConsidere os potenciais padrão de oxidação a 25 °C:\n• Mg -> Mg²⁺ + 2 e⁻      E°_ox = +2,37 V\n• Zn -> Zn²⁺ + 2 e⁻      E°_ox = +0,76 V\n• Fe -> Fe²⁺ + 2 e⁻      E°_ox = +0,44 V\n• Cu -> Cu²⁺ + 2 e⁻      E°_ox = -0,34 V",
      source: "Eletroquímica da Corrosão e Métodos de Proteção Industrial"
    },
    prompt: "O uso de blocos de zinco ou magnésio protege eficazmente a estrutura de ferro contra a corrosão porque esses metais:",
    options: [
      { id: "a", text: "possuem maior potencial de oxidação (menor potencial de redução) do que o ferro, oxidando-se preferencialmente no lugar da estrutura de aço e fornecendo elétrons contínuos para manter o ferro na forma metálica reduzida protegida (cátodo).", isCorrect: true, distractorRationale: null },
      { id: "b", text: "possuem menor potencial de oxidação que o ferro, forçando o ferro a oxidar-se em velocidade dez vezes maior.", isCorrect: false, distractorRationale: "Metais com menor potencial de oxidação (como cobre) ACELERARIAM a corrosão do ferro em vez de protegê-lo." },
      { id: "c", text: "revestem o ferro com uma camada impenetrável de diamante artificial de carbono sintético.", isCorrect: false, distractorRationale: "Proteção catódica atua por via eletroquímica com placas de sacrifício, sem envolver diamante sintético." },
      { id: "d", text: "absorvem todos os elétrons do ferro e os transformam em prótons radioativos.", isCorrect: false, distractorRationale: "O metal de sacrifício DOA elétrons para o ferro, não realiza reações nucleares de transmutação." },
      { id: "e", text: "aquecem a água do oceano a 100 °C impedindo a dissolução do oxigênio molecular.", isCorrect: false, distractorRationale: "Distrator sem sentido físico em estruturas navais submersas." }
    ],
    detailedExplanation: {
      summary: "Metal de sacrifício = quem tem MAIOR POTENCIAL DE OXIDAÇÃO (mais facilidade de perder elétrons). O zinco (E°ox = +0,76 V) e o magnésio (E°ox = +2,37 V) oxidam com muito mais facilidade do que o ferro (E°ox = +0,44 V). Conectados eletricamente, eles atuam como ÂNODO (se corroem e se desgastam no lugar do ferro), enquanto a estrutura de ferro atua como CÁTODO (permanece intacta). Periodicamente, basta trocar as placas de zinco gastas!",
      stepByStep: [
        "1. Conceito: Proteção catódica com ânodo de sacrifício.",
        "2. Critério termodinâmico: O metal protetor DEVE ter potencial de oxidação MAIOR que o metal protegido.",
        "3. Comparação: E°ox(Mg: +2,37V) > E°ox(Zn: +0,76V) > E°ox(Fe: +0,44V).",
        "4. Fluxo de elétrons: O zinco/magnésio perde elétrons e se dissolve (oxidação), protegendo o ferro de oxidar.",
        "5. Conclusão: A alternativa (a) conceitua perfeitamente a proteção catódica."
      ],
      coreConcept: "Proteção Catódica por Ânodo de Sacrifício e Potenciais de Oxidação",
      trapWarning: "No ENEM: Cuidado! Se você conectar COBRE (E°ox = -0,34 V) no ferro, o ferro vai enferrujar MUITO MAIS RÁPIDO! O metal de sacrifício tem que ter potencial de oxidação MAIOR que o ferro (Zinco ou Magnésio)!"
    },
    commonTraps: [
      "Confundir potencial de oxidação com potencial de redução (quem tem maior potencial de oxidação tem menor potencial de redução)",
      "Achar que qualquer metal pode servir de metal de sacrifício para o ferro (o cobre ou chumbo acelerariam a corrosão)"
    ],
    tags: ["corrosao", "metal-de-sacrificio", "protecao-catodica", "eletroquimica", "potenciais-padrao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
