/**
 * Banco Central de Teoria e Conteúdo Aprofundado para o ENEM
 * Estruturado com base na Matriz de Referência do INEP, critérios de correção da TRI
 * e métodos validados de aprendizagem (Scaffolding, Priming e Active Recall).
 */

export const THEORY_CONTENT = {
  // ═══════════════════════════════════════════════════════════════
  // CIÊNCIAS DA NATUREZA
  // ═══════════════════════════════════════════════════════════════
  "natureza/ecologia": {
    topic: "Ecologia e Dinâmica Ambiental",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Top 1 mais cobrado no ENEM (representa ~30% das questões de Biologia)",
    highFrequencySkills: ["H5 - Ciclos biogeoquímicos", "H8 - Impactos ambientais antrópicos"],
    overview: "A Ecologia no ENEM não cobra decoreba de nomes científicos; ela cobra a compreensão sistêmica dos fluxos de matéria e energia, interações biológicas e como a ação antrópica altera o equilíbrio ecológico.",
    keyConcepts: [
      {
        title: "Fluxo de Energia e Ciclos da Matéria",
        content: "A energia em um ecossistema é UNIDIRECIONAL e DECRESCENTE ao longo dos níveis tróficos (regra dos 10%: cerca de 90% da energia é perdida na forma de calor e metabolismo em cada nível). A matéria, por outro lado, é CÍCLICA (reciclada por fungos e bactérias decompositores)."
      },
      {
        title: "Bioacumulação vs. Biomagnificação Trófica",
        content: "Bioacumulação ocorre no indivíduo ao longo do tempo. Biomagnificação ocorre ao longo da cadeia: substâncias não biodegradáveis e lipossolúveis (DDT, mercúrio, microplásticos) acumulam-se em MAIOR CONCENTRAÇÃO nos níveis tróficos mais altos (ex: predadores de topo/humanos)."
      },
      {
        title: "Ciclo do Nitrogênio (Muito Cobrado)",
        content: "1. Fixação: N2 gasoso convertido em amônia (NH3/NH4+) por bactérias (Rhizobium em leguminosas, cianobactérias).\n2. Nitrosação: Nitrosomonas oxidam amônia em nitrito (NO2-).\n3. Nitratação: Nitrobacter oxidam nitrito em nitrato (NO3-), forma absorvível pelas plantas.\n4. Desnitrificação: Pseudomonas devolvem N2 para a atmosfera em solos anóxicos."
      },
      {
        title: "Eutrofização Artificial",
        content: "Esgoto/fertilizantes com N e P na água → proliferação rápida de algas superficiais (bloom) → bloqueio da luz solar → morte da vegetação submersa → explosão de bactérias decompositoras aeróbicas → CONSUMO TOTAL DE O2 DISSOLVIDO → asfixia e morte de peixes e organismos aeróbicos → proliferação de anaeróbicos (liberação de H2S com odor fétido)."
      }
    ],
    formulasAndRules: [
      "Eficiência Ecológica: E = (Energia assimilada no nível N / Energia assimilada no nível N-1) * 100 (~10%)",
      "Pirâmides Ecológicas: Números e Biomassa podem ser INVERTIDAS (ex: parasitas em hospedeiro, fitoplâncton/zooplâncton marinho). Pirâmide de ENERGIA NUNCA É INVERTIDA."
    ],
    enemTraps: [
      "Confundir bioacumulação com biomagnificação: o ENEM sempre pergunta quem sofre mais com contaminação por mercúrio. Resposta: SEMPRE o topo da cadeia trófica.",
      "Achar que algas produzem menos oxigênio que a Amazônia: as algas (fitoplâncton) são os verdadeiros pulmões do planeta porque consomem muito menos do que produzem."
    ],
    mnemonics: "Ciclo do Nitrogênio: 'FI-NI-DES' (Fixação, Nitrificação [Nitrosação + Nitratação], Desnitrificação)."
  },

  "natureza/eletricidade": {
    topic: "Eletrodinâmica e Circuitos",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Cai todo ano (2 a 4 questões de Física). Foco em consumo elétrico residencial e circuitos.",
    highFrequencySkills: ["H17 - Circuitos e potência elétrica", "H18 - Uso racional de energia"],
    overview: "O ENEM foca quase que exclusivamente em aplicações práticas cotidianas: contas de luz, disjuntores, chuveiros, lâmpadas em série/paralelo e segurança elétrica (choque, aterramento).",
    keyConcepts: [
      {
        title: "Potência e Consumo Residencial",
        content: "A energia elétrica consumida é dada por E = P · Δt. Na conta de energia, mede-se em quilowatt-hora (kWh). Para converter W para kW, divida por 1000. O tempo deve estar em horas."
      },
      {
        title: "Chuveiro Elétrico (Verão vs. Inverno)",
        content: "Em P = U² / R (com U constante, 127V ou 220V): para AQUECER MAIS (inverno), precisamos de MAIOR potência (P ↑). Para P subir, a resistência deve DIMINUIR (R ↓). Portanto, no inverno o resistor do chuveiro é MAIS CURTO."
      },
      {
        title: "Circuitos Série vs. Paralelo",
        content: "Residências são ligadas em PARALELO para que: 1) Todos os aparelhos recebam a mesma tensão U (127V ou 220V); 2) O funcionamento de um aparelho seja independente dos outros. Em paralelo, quanto mais aparelhos ligados, MENOR a resistência equivalente e MAIOR a corrente total (risco de sobrecarga/desarme de disjuntor)."
      },
      {
        title: "Disjuntores e Fusíveis",
        content: "São dispositivos de PROTEÇÃO contra sobrecorrente térmico-magnética. Devem ser instalados SEMPRE em SÉRIE com a fase (nunca no neutro nem em paralelo), para interromper todo o circuito caso a corrente limite seja ultrapassada."
      }
    ],
    formulasAndRules: [
      "1ª Lei de Ohm: U = R · i",
      "Potência Elétrica: P = U · i  |  P = R · i²  |  P = U² / R",
      "Consumo de Energia: E (kWh) = [P (W) · Δt (h)] / 1000",
      "Custo da Energia: Custo = E (kWh) · Tarifa (R$/kWh)",
      "Associação Série: Req = R1 + R2 + ... | Mesma corrente (i), tensões somam.",
      "Associação Paralelo: 1/Req = 1/R1 + 1/R2 + ... | Mesma ddp (U), correntes somam."
    ],
    enemTraps: [
      "Confundir inverno com resistência maior no chuveiro. Mais quente = mais potência = RESISTÊNCIA MENOR.",
      "Achar que disjuntor economiza energia: disjuntor apenas protege contra curto-circuito e sobrecorrente.",
      "Esquecer de converter minutos em horas ao calcular kWh de um banho de 15 minutos (15 min = 0,25 h)."
    ],
    mnemonics: "Fórmulas de Potência: 'P = PUI', 'P = RIR ao quadrado (R·i²)', 'P = U² sobre R'."
  },

  "natureza/estequiometria": {
    topic: "Estequiometria e Cálculo Químico",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Presença garantida. O diferencial dos alunos 800+ em Natureza.",
    highFrequencySkills: ["H10 - Relações quantitativas em reações", "H11 - Rendimento e pureza"],
    overview: "Cálculo estequiométrico no ENEM exige 4 etapas fixas: balanceamento da equação, conversão para mols ou gramas, identificação de reagente limitante/pureza, e aplicação do rendimento no produto final.",
    keyConcepts: [
      {
        title: "As 4 Etapas Infalíveis",
        content: "1. Escrever e balancear a reação (Macho: Metais, Ametais, Carbono, Hidrogênio, Oxigênio).\n2. Linha teórica: colocar os coeficientes estequiométricos em mols ou massas molares.\n3. Linha do problema: posicionar os dados fornecidos e a incógnita X na mesma unidade das colunas.\n4. Ajustes: Pureza (aplica-se no reagente no início) e Rendimento (aplica-se no produto no final)."
      },
      {
        title: "Reagente Limitante e em Excesso",
        content: "Quando o enunciado der quantidades de DOIS reagentes, um deles está sobrando. Divida a quantidade dada de cada um pelo seu coeficiente estequiométrico: o menor valor é o reagente LIMITANTE. Todos os cálculos de produto devem ser feitos a partir dele."
      },
      {
        title: "Pureza vs. Rendimento",
        content: "Pureza (P%): Se 100g de calcário tem 80% de CaCO3, apenas 80g reagem! O resto é impureza inerte.\nRendimento (R%): Se a reação rende 75%, calcule a massa teórica do produto (100%) e multiplique por 0,75."
      }
    ],
    formulasAndRules: [
      "Número de mols: n = m / MM (massa / massa molar)",
      "Volume molar nas CNTP (0°C, 1 atm): 1 mol de gás = 22,4 L",
      "Constante de Avogadro: 1 mol = 6,02 · 10²³ entidades",
      "Concentração Molar: M = n / V (mol/L) = m / (MM · V)"
    ],
    enemTraps: [
      "Esquecer de balancear a equação antes de calcular (o erro mais fatal).",
      "Calcular produto usando reagente em excesso em vez do reagente limitante.",
      "Aplicar rendimento antes de calcular o produto: calcule o produto a 100% e só no final aplique o rendimento real."
    ],
    mnemonics: "Ordem de balanceamento: Regra do MACHO (Metal, Ametal, Carbono, Hidrogênio, Oxigênio)."
  },

  "natureza/genetica": {
    topic: "Genética, DNA e Biotecnologia",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Altíssima frequência. Foco em biotecnologia (CRISPR, transgênicos), heredogramas e herança ligada ao sexo.",
    highFrequencySkills: ["H25 - Biotecnologia e engenharia genética", "H26 - Leis mendelianas e saúde humana"],
    overview: "O ENEM raramente cobra cálculos complexos de 3ª lei; o foco é interpretar heredogramas, entender terapia gênica, clonagem, células-tronco, PCR, teste de DNA (eletroforese) e imunobiológicos.",
    keyConcepts: [
      {
        title: "Interpretação de Heredogramas",
        content: "Procura-se o padrão revelador: PAIS IGUAIS COM FILHO DIFERENTE. Se pais normais têm um filho afetado, o gene do traço é RECESSIVO (pais são heterozigotos Aa, filho é aa). Se pais afetados têm filho normal, o traço é DOMINANTE."
      },
      {
        title: "Transgênico vs. Cisgênico vs. Clone",
        content: "Transgênico: organismo geneticamente modificado que recebeu gene de OUTRA ESPÉCIE (ex: milho Bt com gene de bactéria). Cisgênico: gene da mesma espécie. Clone: cópia genética idêntica obtida por transferência do núcleo de uma célula somática para um óvulo anucleado."
      },
      {
        title: "Eletroforese (Teste de Paternidade / DNA)",
        content: "Bandas de DNA migram no gel por carga elétrica (DNA tem carga negativa devido aos grupos fosfato, migrando para o polo positivo). O filho DEVE ter cada uma de suas bandas presentes na mãe OU no pai biológico."
      },
      {
        title: "Vacina vs. Soro",
        content: "Vacina: Imunização ATIVA (preventiva). Contém antígeno atenuado/morto ou RNA mensageiro → induz o corpo a produzir anticorpos próprios e CÉLULAS DE MEMÓRIA.\nSoro: Imunização PASSIVA (curativa/emergência). Contém ANTICORPOS PRONTOS (antiveneno, antitetânico) → efeito imediato, NÃO deixa memória imunitária."
      }
    ],
    formulasAndRules: [
      "1ª Lei de Mendel: Aa x Aa → Proporção genotípica 1 AA : 2 Aa : 1 aa | Fenotípica 3 dominantes : 1 recessivo",
      "Herança Ligada ao Sexo (Cromossomo X): Daltonismo e Hemofilia são recessivas ligadas ao X. Homens (XªY) manifestam a doença com apenas um alelo recessivo da mãe."
    ],
    enemTraps: [
      "Achar que vacina cura doença ativa (vacina é preventiva; para curar toxinas ativas usa-se SORO com anticorpos prontos).",
      "Achar que clonagem e transgenia são a mesma coisa: o clone não tem DNA de outra espécie inserido."
    ],
    mnemonics: "Herança: 'Casal igual com filho diferente = o diferente é recessivo e os pais são heterozigotos'."
  },

  "natureza/mecanica": {
    topic: "Mecânica: Energia, Trabalho e Newton",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Base de Física. Conservação de energia e colisões aparecem todo ano.",
    highFrequencySkills: ["H14 - Conservação de energia mecânica", "H15 - Forças e movimento"],
    overview: "A Física do ENEM valoriza princípios de conservação: energia não se cria nem se perde, transforma-se. Questões clássicas envolvem montanha-russa, frenagem de carros, colisões e planos inclinados.",
    keyConcepts: [
      {
        title: "Conservação da Energia Mecânica",
        content: "Na ausência de forças dissipativas (atrito/resistência do ar): Emec_inicial = Emec_final. A energia potencial gravitacional (mgh) se transforma em cinética (mv²/2) e elástica (kx²/2). Se houver atrito: E_mec_final = E_mec_inicial - |Trabalho do Atrito|."
      },
      {
        title: "Teorema do Trabalho e Energia Cinética",
        content: "O trabalho da força resultante que atua sobre um corpo é IGUAL à variação da sua energia cinética: W_total = ΔEc = (m·v²_final / 2) - (m·v²_inicial / 2)."
      },
      {
        title: "Impulso e Quantidade de Movimento",
        content: "Impulso: I = F · Δt. Teorema do Impulso: I = ΔQ = m·v_f - m·v_i. Aplicação clássica: AIRBAG e ZONAS DE DEFORMAÇÃO aumentam o tempo de impacto (Δt ↑), diminuindo drasticamente a força média (F ↓) exercida sobre o passageiro, já que o impulso necessário para pará-lo é o mesmo."
      }
    ],
    formulasAndRules: [
      "Energia Cinética: Ec = (m · v²) / 2",
      "Energia Potencial Gravitacional: Epg = m · g · h",
      "Energia Potencial Elástica: Epe = (k · x²) / 2",
      "Quantidade de Movimento: Q = m · v (vetorial)",
      "2ª Lei de Newton: Fr = m · a"
    ],
    enemTraps: [
      "Esquecer que a velocidade na energia cinética está ao quadrado: se a velocidade dobra, a energia e a distância de frenagem QUADRUPLICAM (x4).",
      "Confundir força de ação e reação: ação e reação atuam em CORPOS DIFERENTES e por isso NUNCA se anulam."
    ],
    mnemonics: "Airbag: 'Aumenta o tempo para diminuir a pancada (F = ΔQ / Δt)'."
  },

  "natureza/termoquimica": {
    topic: "Termoquímica e Cinética Química",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Entalpia de combustão, biocombustíveis e catalisadores caem com extrema regularidade.",
    highFrequencySkills: ["H20 - Transformações de energia química", "H21 - Velocidade e catalisadores"],
    overview: "O ENEM adora comparar poder calorífico de combustíveis (etanol vs. gasolina vs. biogás) e analisar como catalisadores atuam aumentando a velocidade de reações biológicas e industriais.",
    keyConcepts: [
      {
        title: "Reações Exotérmicas vs. Endotérmicas",
        content: "Exotérmica: Libera calor (ΔH < 0). Os produtos têm menor energia que os reagentes (Hp < Hr). Ex: combustão, queima de fósforo.\nEndotérmica: Absorve calor (ΔH > 0). Os produtos têm maior energia que os reagentes (Hp > Hr). Ex: fotossíntese, fusão do gelo."
      },
      {
        title: "Lei de Hess",
        content: "A variação de entalpia de uma reação depende apenas dos estados inicial e final, não do caminho percorrido. Ao manipular as equações parciais: 1) Inverter a equação → inverter o sinal do ΔH; 2) Multiplicar/dividir coeficientes → multiplicar/dividir o ΔH pelo mesmo número."
      },
      {
        title: "Papel do Catalisador",
        content: "O catalisador ACELERA a reação porque CRIA UM NOVO CAMINHO de MENOR ENERGIA DE ATIVAÇÃO. Crucial no ENEM: o catalisador NÃO altera o ΔH (entalpia inicial e final continuam idênticas) e NÃO altera o rendimento ou equilíbrio da reação!"
      }
    ],
    formulasAndRules: [
      "Variação de Entalpia: ΔH = H_produtos - H_reagentes",
      "Energia de Ligação: ΔH = Σ(Quebra de Ligações nos Reagentes, endotérmica +) + Σ(Formação de Ligações nos Produtos, exotérmica -)",
      "Poder Calorífico Específico: Calor liberado por grama de combustível (kJ/g)"
    ],
    enemTraps: [
      "Afirmar que catalisador aumenta o rendimento ou muda o ΔH da reação (FALSO: ele só diminui a energia de ativação e tempo).",
      "Errar o sinal da quebra/formação de ligações: quebrar ligação ABSORVE energia (+), formar ligação LIBERA energia (-)."
    ],
  },

  "natureza/ondulatoria": {
    topic: "Ondulatória, Acústica e Óptica",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Top 3 de Física no ENEM. Foco em fenômenos ondulatórios, qualidades do som e efeito Doppler.",
    highFrequencySkills: ["H17 - Equação fundamental da onda", "H18 - Fenômenos ondulatórios"],
    overview: "Ondas transportam energia sem transportar matéria. O ENEM cobra o reconhecimento de difração, refração, interferência, polarização e a acústica do cotidiano.",
    keyConcepts: [
      {
        title: "Equação Fundamental (v = λ · f)",
        content: "A velocidade da onda depende do MEIO de propagação. A frequência (f) depende exclusivamente da FONTE emissora e NUNCA muda ao trocar de meio (na refração, a frequência permanece constante; se a velocidade muda, o comprimento de onda λ varia proporcionalmente)."
      },
      {
        title: "Fenômenos Ondulatórios Decisivos",
        content: "• Difração: Capacidade de contornar obstáculos (intensa quando λ ≈ tamanho do obstáculo).\n• Polarização: Filtrar uma única direção de oscilação (ocorre APENAS em ondas transversais; o som no ar NÃO polariza).\n• Ressonância: Sistema recebe energia em sua frequência natural, aumentando a amplitude das oscilações."
      },
      {
        title: "Qualidades Fisiológicas do Som",
        content: "• Altura: Frequência (Alta frequência = Som Agudo / Baixa frequência = Som Grave).\n• Intensidade: Amplitude / Volume / Energia (Forte vs. Fraco).\n• Timbre: Formato da onda / Harmônicos (Permite distinguir dois instrumentos tocando a mesma nota)."
      }
    ],
    formulasAndRules: [
      "Equação Fundamental: v = λ · f",
      "Período e Frequência: T = 1 / f  |  f = 1 / T",
      "Efeito Doppler: Aproximação → frequência aparente maior (mais agudo). Afastamento → frequência menor (mais grave)."
    ],
    enemTraps: [
      "Dizer que som alto é som barulhento (Som alto = som AGUDO).",
      "Afirmar que a frequência muda na refração (a frequência NUNCA muda na refração, só velocidade e comprimento)."
    ],
    mnemonics: "Acústica: 'Altura é Agudo/Grave, Intensidade é Forte/Fraco, Timbre é a Identidade'."
  },

  "natureza/quimica-organica": {
    topic: "Química Orgânica: Funções, Isomeria e Sabões",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Presente em todas as edições do ENEM (3 a 5 questões de Química).",
    highFrequencySkills: ["H24 - Funções oxigenadas e nitrogenadas", "H25 - Propriedades físicas e polaridade"],
    overview: "Identificação rápida de funções orgânicas, forças intermoleculares, ação tensoativa de sabões e detergentes, e isomeria óptica com carbono quiral.",
    keyConcepts: [
      {
        title: "Polaridade e Solubilidade (Semelhante dissolve Semelhante)",
        content: "• Hidrocarbonetos: Estritamente apolares (interações de London fracas, insolúveis em água, solúveis em lipídios/óleos).\n• Álcoois e Ácidos Carboxílicos: Polares com ligações de hidrogênio (cadeias curtas são miscíveis em água; à medida que a cadeia carbônica cresce, a parte apolar predomina)."
      },
      {
        title: "Sabões, Tensoativos e Micelas",
        content: "Moléculas anfifílicas: cauda apolar (lipofílica) interage com a gordura; cabeça polar/iônica (hidrofílica) interage com a água. Formam micelas e reduzem a tensão superficial da água, permitindo a limpeza."
      },
      {
        title: "Isomeria Óptica e Carbono Quiral",
        content: "Carbono assimétrico (sp³) ligado a 4 grupos distintos entre si. Desvia o plano da luz polarizada. 2ⁿ isômeros opticamente ativos."
      }
    ],
    formulasAndRules: [
      "Regra do Carbono Quiral: C* com 4 ligantes diferentes (A ≠ B ≠ D ≠ E).",
      "Saponificação: Éster de triglicerídeo + Base Forte (NaOH) → Sabão (Sal de ácido graxo) + Glicerol."
    ],
    enemTraps: [
      "Confundir álcool com fenol: -OH no anel benzênico é FENOL. -OH em carbono saturado é ÁLCOOL.",
      "Achar que tensoativo aumenta a tensão superficial da água (ele DIMINUI a tensão superficial)."
    ],
    mnemonics: "Funções: 'Oxigênio entre carbonos é Éter; Carbonila com oxigênio entre carbonos é Éster'."
  },

  // ═══════════════════════════════════════════════════════════════
  // MATEMÁTICA E SUAS TECNOLOGIAS
  // ═══════════════════════════════════════════════════════════════
  "matematica/porcentagem": {
    topic: "Porcentagem e Matemática Financeira",
    area: "matematica",
    areaName: "Matemática",
    enemRelevance: "Top 2 conteúdo mais cobrado em Matemática (5 a 8 questões todo ano). Base da TRI.",
    highFrequencySkills: ["H3 - Cálculos com porcentagem e acréscimos", "H4 - Avaliação de propostas financeiras"],
    overview: "Questões consideradas fáceis e médias pela TRI. Errar essas questões destrói a nota de Matemática (que pode passar de 950 pontos). Domínio do fator multiplicador é obrigatório.",
    keyConcepts: [
      {
        title: "Fatores Multiplicadores (Aumentos e Descontos)",
        content: "Nunca calcule em 3 regras de três separadas. Use o Fator Multiplicador:\n• Aumento de i%: Multiplica por (1 + i). Ex: aumento de 15% → x 1,15.\n• Desconto de i%: Multiplica por (1 - i). Ex: desconto de 20% → x 0,80."
      },
      {
        title: "Aumentos e Descontos Sucessivos",
        content: "Aumentos NÃO se somam! Um aumento de 20% seguido de outro de 20% resulta em: 1,20 · 1,20 = 1,44 (aumento real de 44%, e não 40%). Da mesma forma, desconto de 20% seguido de 20%: 0,80 · 0,80 = 0,64 (desconto real de 36%)."
      },
      {
        title: "Lucro sobre Custo vs. Lucro sobre Venda",
        content: "Lucro = Venda - Custo.\n• Lucro sobre CUSTO: L% = (Lucro / Custo) · 100\n• Lucro sobre VENDA: L% = (Lucro / Venda) · 100\nO ENEM sempre especifica a base no enunciado."
      }
    ],
    formulasAndRules: [
      "Fator de Aumento: F = 1 + (i / 100)",
      "Fator de Redução: F = 1 - (i / 100)",
      "Juros Simples: J = C · i · t  |  Montante M = C + J",
      "Juros Compostos: M = C · (1 + i)^t"
    ],
    enemTraps: [
      "Somar porcentagens sucessivas (erro mais comum dos candidatos).",
      "Confundir taxa de juros ao mês com ao ano sem fazer a devida conversão temporal."
    ],
    mnemonics: "Aumento é Mais (+), Desconto é Menos (-), Sucessivo é Produto (Multiplicação de Fatores)."
  },

  "matematica/estatistica": {
    topic: "Estatística: Médias, Mediana e Desvio-Padrão",
    area: "matematica",
    areaName: "Matemática",
    enemRelevance: "Absolutamente certa na prova (4 a 6 questões todo ano). Questões fáceis e médias essenciais para TRI alta.",
    highFrequencySkills: ["H27 - Cálculo de medidas de tendência central", "H28 - Análise de dispersão e variabilidade"],
    overview: "Média aritmética, média ponderada, mediana e moda. O ENEM também cobra a interpretação do desvio-padrão como medida de regularidade e homogeneidade de atletas/produtos.",
    keyConcepts: [
      {
        title: "Mediana (O Ponto Central do Rol)",
        content: "Para calcular a mediana, o primeiro passo OBRIGATÓRIO é ordenar os dados em ordem crescente (ROL).\n• Se N for ímpar: a mediana é o termo central exato, na posição (N + 1) / 2.\n• Se N for par: a mediana é a MÉDIA ARITMÉTICA dos dois termos centrais, nas posições N/2 e (N/2 + 1)."
      },
      {
        title: "Moda",
        content: "O valor (ou valores) que aparece com MAIOR frequência no conjunto de dados. Pode ser amodal (nenhum repete), bimodal (dois valores empatados) ou multimodal."
      },
      {
        title: "Desvio-Padrão e Variância (Regularidade)",
        content: "O ENEM raramente pede o cálculo numérico do desvio-padrão. Ele pede a INTERPRETAÇÃO: quanto MENOR o desvio-padrão (ou variância), MAIS REGULAR, HOMOGÊNEO e estável é o conjunto de dados (ex: o jogador de basquete mais regular é aquele com menor desvio-padrão nas pontuações)."
      }
    ],
    formulasAndRules: [
      "Média Aritmética Simples: x̄ = (x1 + x2 + ... + xn) / n",
      "Média Ponderada: x̄p = (x1·p1 + x2·p2 + ... + xn·pn) / (p1 + p2 + ... + pn)",
      "Propriedade da Mediana: 50% dos dados estão abaixo dela e 50% estão acima dela."
    ],
    enemTraps: [
      "Calcular a mediana sem organizar os dados em ordem crescente (Rol).",
      "Achar que o candidato mais regular é aquele com maior desvio-padrão (o mais regular tem o MENOR desvio)."
    ],
    mnemonics: "Mediana: 'ROL primeiro, centro depois. Se for par, faz a média dos dois do meio'."
  },

  "matematica/geometria": {
    topic: "Geometria Espacial e Plana",
    area: "matematica",
    areaName: "Matemática",
    enemRelevance: "Área gigantesca no ENEM (6 a 9 questões). Projeção ortogonal e cálculo de volumes de cilindros/prismas caem SEMPRE.",
    highFrequencySkills: ["H7 - Projeção ortogonal e visão tridimensional", "H11 - Áreas de figuras planas", "H12 - Volumes de sólidos"],
    overview: "O ENEM valoriza a visão tridimensional (projeções ortogonais de sombras e caminhos em cubos) e problemas práticos de armazenamento: caixas d'água cilíndricas, latas, embalagens, pavers e pisos.",
    keyConcepts: [
      {
        title: "Projeção Ortogonal",
        content: "É a sombra de um objeto sobre um plano perpendicular aos raios de luz. Se você tem um trajeto em uma espiral subindo um cilindro, a projeção sobre a base é uma CIRCUNFERÊNCIA; sobre a parede vertical é uma senóide ou zigue-zague."
      },
      {
        title: "Volume de Prismas e Cilindros",
        content: "Sólidos com duas bases paralelas e congruentes: Volume = Área da Base · Altura (V = Ab · h). Para cilindro de raio r: V = π · r² · h."
      },
      {
        title: "Volume de Pirâmides e Cones",
        content: "Sólidos pontiagudos (com vértice único): Volume = (Área da Base · Altura) / 3. Para cone: V = (π · r² · h) / 3."
      },
      {
        title: "Razão de Semelhança (Escala Linear vs. Área vs. Volume)",
        content: "Se a razão linear entre duas figuras semelhantes for k:\n• A razão entre suas áreas é k².\n• A razão entre seus volumes é k³.\nEx: se uma maquete está na escala 1:100, o volume real é 100³ = 1.000.000 de vezes maior!"
      }
    ],
    formulasAndRules: [
      "Área do Círculo: A = π · r²  |  Comprimento: C = 2 · π · r",
      "Área do Triângulo Equilátero: A = (L² · √3) / 4  |  Altura h = (L · √3) / 2",
      "Volume do Cilindro: V = π · r² · h",
      "Volume da Esfera: V = (4/3) · π · r³",
      "Conversão Vital de Unidades: 1 m³ = 1.000 L  |  1 dm³ = 1 L  |  1 cm³ = 1 mL"
    ],
    enemTraps: [
      "Esquecer de elevar a escala ao cubo ao converter volumes de maquetes.",
      "Usar o diâmetro no lugar do raio na fórmula do volume do cilindro (o raio é metade do diâmetro).",
      "Errar a conversão de m³ para litros: lembre-se que 1 metro cúbico equivale a MIL litros."
    ],
    mnemonics: "Sólidos com ponta (Cone/Pirâmide): 'Tem bico? Divide por 3!'."
  },

  "matematica/funcoes": {
    topic: "Funções Afins e Quadráticas",
    area: "matematica",
    areaName: "Matemática",
    enemRelevance: "Interpretação de gráficos e pontos de máximo/mínimo (lucro máximo, trajetória de projéteis).",
    highFrequencySkills: ["H19 - Funções afins e taxas constantes", "H20 - Funções quadráticas e pontos extremos"],
    overview: "O ENEM adora modelos de custo: Custo fixo + Custo variável (Função Afim: y = ax + b). Na função quadrática, o foco é quase sempre encontrar o X do vértice (quantidade ótima) ou Y do vértice (lucro máximo).",
    keyConcepts: [
      {
        title: "Função Afim (y = ax + b)",
        content: "• Coeficiente 'a' (taxa de variação/angular): a = Δy / Δx. Indica se a reta sobe (a > 0) ou desce (a < 0).\n• Coeficiente 'b' (termo constante/linear): onde a reta corta o eixo Y (x = 0). Representa o valor fixo inicial (ex: bandeirada do táxi, taxa de instalação)."
      },
      {
        title: "Função Quadrática e o Vértice",
        content: "Se a < 0, a parábola tem concavidade para baixo e possui ponto de MÁXIMO.\n• Xv = -b / (2a): responde a 'QUAL A QUANTIDADE' necessária para atingir o máximo/mínimo.\n• Yv = -Δ / (4a): responde a 'QUAL O VALOR MÁXIMO' alcançado (lucro máximo, altura máxima)."
      }
    ],
    formulasAndRules: [
      "Equação Afim: f(x) = ax + b",
      "Vértice da Parábola: Xv = -b / (2a)  |  Yv = -Δ / (4a) = -(b² - 4ac) / (4a)",
      "Forma alternativa para Yv: calcular f(Xv) substituindo o Xv direto na função."
    ],
    enemTraps: [
      "Confundir Xv com Yv: se a pergunta quer o 'número de peças para lucro máximo', é Xv. Se quer 'o lucro máximo em reais', é Yv.",
      "Achar que toda função com curva é do 2º grau: atente para enunciados que descrevem variações percentuais constantes (exponencial)."
    ],
    mnemonics: "Vértice: 'X do vértice é o caminho (-b/2a), Y do vértice é o destino alcançado'."
  },

  "matematica/probabilidade": {
    topic: "Probabilidade e Análise Combinatória",
    area: "matematica",
    areaName: "Matemática",
    enemRelevance: "Presença garantida todo ano (3 a 5 questões). Questões de média a alta dificuldade.",
    highFrequencySkills: ["H28 - Cálculo de probabilidade em eventos reais", "H29 - Princípios de contagem e arranjos"],
    overview: "A probabilidade clássica é o número de casos favoráveis dividido pelo número de casos possíveis. O ENEM foca em probabilidade condicional, eventos sucessivos e quando a ordem dos elementos importa (arranjo) ou não importa (combinação).",
    keyConcepts: [
      {
        title: "A Pergunta de Ouro da Combinatória",
        content: "'A ORDEM IMPORTA?'\n• Se mudar a ordem dos elementos gera um resultado DIFERENTE (ex: senha de banco, pódio, presidente e vice): A ORDEM IMPORTA → use o Princípio Fundamental da Contagem (PFC) ou Arranjo.\n• Se mudar a ordem gera o MESMO grupo (ex: comissão de pessoas, salada de frutas, sorteio de duplas): A ORDEM NÃO IMPORTA → use COMBINAÇÃO (divide pelo fatorial das trocas)."
      },
      {
        title: "Regra do 'E' (Multiplicação) vs. Regra do 'OU' (Soma)",
        content: "• Ocorrência do evento A E do evento B simultaneamente: MULTIPLICA as probabilidades: P(A ∩ B) = P(A) · P(B).\n• Ocorrência do evento A OU do evento B: SOMA as probabilidades: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)."
      },
      {
        title: "Probabilidade Condicional",
        content: "P(A|B) é a probabilidade de A ocorrer sabendo que B JÁ OCORREU. O espaço amostral é REDUZIDO para os casos do evento B."
      }
    ],
    formulasAndRules: [
      "Probabilidade Clássica: P = Casos Favoráveis / Casos Possíveis",
      "Evento Complementar: P(não A) = 1 - P(A)  (Use sempre que a questão disser 'pelo menos um')",
      "Combinação Simples: C(n, p) = n! / [p! · (n - p)!]"
    ],
    enemTraps: [
      "Não subtrair a interseção na regra do 'OU' (contar elementos duas vezes).",
      "Esquecer de reduzir o espaço amostral em sorteios SEM REPOSIÇÃO."
    ],
    mnemonics: "Probabilidade do 'pelo menos um': 'Calcule a chance de NENHUM acontecer e subtraia de 1 (1 - P(nenhum))'."
  },

  "matematica/razao-proporcao": {
    topic: "Razão, Proporção e Escala",
    area: "matematica",
    areaName: "Matemática",
    enemRelevance: "O conteúdo mais cobrado em toda a prova de Matemática do ENEM (8 a 12 questões).",
    highFrequencySkills: ["H15 - Relações de proporcionalidade", "H16 - Escalas cartográficas e modelos"],
    overview: "Regra de três composta, proporcionalidade direta e inversa, grandezas densidade demográfica, velocidade média, vazão de torneiras e escalas de mapas.",
    keyConcepts: [
      {
        title: "Grandezas Diretas vs. Inversamente Proporcionais",
        content: "• Diretas: Se uma grandeza DOBRA, a outra DOBRA (razão constante: y / x = k). Ex: quantidade de pães e custo total.\n• Inversas: Se uma grandeza DOBRA, a outra CAI PELA METADE (produto constante: x · y = k). Ex: velocidade média e tempo de viagem; número de operários e dias para concluir a obra."
      },
      {
        title: "Escala Cartográfica (E = d / D)",
        content: "A escala é SEMPRE uma razão na mesma unidade (geralmente centímetros):\nEscala = Distância no Mapa (d) / Distância Real (D).\nEx: Escala 1:50.000 significa que 1 cm no mapa equivale a 50.000 cm reais (500 metros ou 0,5 km)."
      }
    ],
    formulasAndRules: [
      "Escala Linear: E = d / D",
      "Escala de Áreas: (E)² = Área no Mapa / Área Real",
      "Escala de Volumes: (E)³ = Volume na Maquete / Volume Real",
      "Conversão Rápida: De cm para metros (divida por 100) | De cm para km (divida por 100.000)"
    ],
    enemTraps: [
      "Misturar metros e centímetros na escala sem converter para a mesma unidade.",
      "Esquecer de elevar a escala ao quadrado em questões de área de plantas de apartamentos."
    ],
  },

  "matematica/trigonometria": {
    topic: "Trigonometria e Funções Periódicas",
    area: "matematica",
    areaName: "Matemática",
    enemRelevance: "Aplicações práticas em topografia, alturas inacessíveis e fenômenos periódicos (marés, temperatura).",
    highFrequencySkills: ["H8 - Resolução de triângulos retângulos", "H20 - Modelagem com funções periódicas"],
    overview: "O ENEM utiliza a trigonometria para problemas de medição no mundo real (teodolitos, sombras, declividade de rampas) e para modelar grandezas cíclicas que se repetem ao longo do tempo.",
    keyConcepts: [
      {
        title: "Razões no Triângulo Retângulo (SO-CAH-TOA)",
        content: "• Seno = Cateto Oposto / Hipotenusa\n• Cosseno = Cateto Adjacente / Hipotenusa\n• Tangente = Cateto Oposto / Cateto Adjacente\nÂngulos Notáveis (30°, 45°, 60°): sen 30° = 1/2; cos 30° = √3/2; tg 30° = √3/3; sen 45° = cos 45° = √2/2; tg 45° = 1; sen 60° = √3/2; cos 60° = 1/2; tg 60° = √3."
      },
      {
        title: "Funções Periódicas (f(x) = A + B · sen(C·x + D))",
        content: "• A (Termo Médio / Eixo Central): Linha média em torno da qual a curva oscila.\n• B (Amplitude): Metade da distância entre o valor máximo e o mínimo.\n• Valor Máximo = A + |B|  |  Valor Mínimo = A - |B|.\n• Período: P = 2π / |C| (intervalo de tempo para completar um ciclo completo)."
      }
    ],
    formulasAndRules: [
      "Relação Fundamental: sen²(θ) + cos²(θ) = 1",
      "Período de Seno e Cosseno: P = 2π / C"
    ],
    enemTraps: [
      "Esquecer de somar a altura do observador ou teodolito ao calcular a altura de um prédio ou torre.",
      "Confundir a amplitude (B) com a altura total (máximo - mínimo = 2B)."
    ],
    mnemonics: "Trigonometria: 'SO-CAH-TOA' (Seno = Op/Hip, Cosseno = Adj/Hip, Tangente = Op/Adj)."
  },

  // ═══════════════════════════════════════════════════════════════
  // CIÊNCIAS HUMANAS
  // ═══════════════════════════════════════════════════════════════
  "humanas/brasil-colonial": {
    topic: "Brasil Colônia: Economia, Escravidão e Conflitos",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Cai com alta frequência. O ENEM foca na estrutura social escravocrata, patrimonialismo e resistência quilombola.",
    highFrequencySkills: ["H1 - Identidade e diversidade cultural", "H2 - Patrimônio e memória"],
    overview: "A colonização portuguesa vista sob a ótica da exploração metropolitana (Pacto Colonial / Exclusivo Metropolitano), baseada no tripé: Latifúndio, Monocultura e Mão de Obra Escravizada (Plantation).",
    keyConcepts: [
      {
        title: "O Sistema de Plantation e Sociedade Açucareira",
        content: "Sociedade patriarcal, rural, estratificada e escravista centrada na Casa-Grande e no Engenho de açúcar no Nordeste. A Igreja Católica legitimava a ordem hierárquica."
      },
      {
        title: "Resistência Negra e Quilombos",
        content: "O escravizado nunca foi agente passivo. As formas de resistência incluíam: fugas individuais e coletivas, formação de quilombos (Palmares como maior exemplo), manutenção de tradições religiosas (sincretismo), capoeira, suicídios e negociações de brecha camponesa."
      },
      {
        title: "O Ciclo do Ouro e a Urbanização no Século XVIII",
        content: "A mineração em Minas Gerais deslocou o eixo econômico para o Sudeste (transferência da capital de Salvador para o Rio de Janeiro em 1763), criou uma classe média urbana e propiciou o florescimento do Barroco Mineiro (Aleijadinho)."
      }
    ],
    formulasAndRules: [
      "Tripé Colonial: Monocultura de exportação + Latifúndio + Escravidão",
      "Pacto Colonial: A colônia só pode comprar e vender para sua metrópole (protecionismo mercantilista)."
    ],
    enemTraps: [
      "Retratar o indígena ou negro como passivo diante da dominação colonial.",
      "Afirmar que o ciclo do ouro criou uma sociedade igualitária (a base continuava sendo rigidamente escravocrata)."
    ],
    mnemonics: "Plantation: 'MEL' (Monocultura, Escravidão, Latifúndio)."
  },

  "humanas/brasil-republica": {
    topic: "Brasil República e Ditadura Militar",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Tema histórico mais cobrado no ENEM. Foco em Era Vargas, Cidadania e Golpe de 1964.",
    highFrequencySkills: ["H11 - Cidadania e direitos humanos", "H15 - Lutas sociais e rupturas democráticas"],
    overview: "Da República Velha (coronelismo e voto de cabresto) à Era Vargas (trabalhismo e industrialização) até a Ditadura Civil-Militar (AI-5, censura, milagre econômico) e a Redemocratização com a CF/88.",
    keyConcepts: [
      {
        title: "República Oligárquica (1889-1930)",
        content: "Dominada pelas oligarquias cafeeiras (política do café com leite entre SP e MG). Mecanismos de controle: Coronelismo, clientelismo e 'Voto de Cabresto' viabilizado pelo voto aberto/não secreto."
      },
      {
        title: "A Era Vargas (1930-1945 e 1951-1954)",
        content: "Modernização conservadora: criação da CLT, industrialização de base (CSN, Vale, Petrobras), centralização estatal e populismo (Vargas como 'pai dos pobres e mãe dos ricos')."
      },
      {
        title: "Ditadura Militar (1964-1985) e o AI-5",
        content: "Regime autoritário justificado pela Doutrina de Segurança Nacional. O Ato Institucional nº 5 (1968) decretou o fechamento do Congresso, cassação de mandatos, censura prévia à imprensa e artes, e suspensão do habeas corpus para crimes políticos."
      },
      {
        title: "Redemocratização e a Constituição Cidadã (1988)",
        content: "Movimento das 'Diretas Já' (1984). A CF/88 consolidou direitos fundamentais, previdência social, criação do SUS e demarcação de terras indígenas."
      }
    ],
    formulasAndRules: [
      "Voto de Cabresto: Voto aberto + Coerção física/econômica do coronel local.",
      "Constituição de 1988: Conhecida como 'Constituição Cidadã' por Ulysses Guimarães pelo foco inédito em direitos e garantias fundamentais."
    ],
    enemTraps: [
      "Considerar as leis trabalhistas de Vargas como pura benevolência (foram concessões para conter o avanço do movimento operário e sindicatos comunistas).",
      "Dizer que a Marcha dos 100 Mil e as Diretas Já conseguiram aprovar de imediato a eleição direta de 1985 (a emenda Dante de Oliveira foi derrotada no Congresso, e a eleição de Tancredo foi indireta)."
    ],
    mnemonics: "Fases de Vargas: 'Pro-Cons-Es' (Governo Provisório 30-34, Constitucional 34-37, Estado Novo 37-45)."
  },

  "humanas/geografia-urbana": {
    topic: "Geografia Urbana, Demografia e Espaço",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Metropolização, segregação socioespacial e mobilidade urbana caem todo ano.",
    highFrequencySkills: ["H6 - Dinâmica do espaço urbano", "H7 - Relação campo-cidade"],
    overview: "A urbanização brasileira acelerada e desordenada na segunda metade do século XX gerou metrópoles com macrocefalia urbana, favelização, gentrificação e movimentos pendulares diários.",
    keyConcepts: [
      {
        title: "Conurbação e Regiões Metropolitanas",
        content: "Conurbação: união física/espacial da mancha urbana de duas ou mais cidades vizinhas devido ao seu crescimento horizontal. Quando uma metrópole polariza e integra várias cidades conurbadas, forma-se uma Região Metropolitana."
      },
      {
        title: "Segregação Socioespacial e Gentrificação",
        content: "Gentrificação: processo de intervenção urbanística em bairros periféricos ou degradados que atrai investimentos privados, valoriza o solo e expulsa a população de baixa renda tradicional (especulação imobiliária)."
      },
      {
        title: "Mobilidade e Migração Pendular",
        content: "Movimento diário de ir e vir da população que mora na 'cidade-dormitório' (periferia) e trabalha no polo central da metrópole, sobrecarregando transporte público sobre trilhos e rodovias."
      }
    ],
    formulasAndRules: [
      "Taxa de Urbanização: (População Urbana / População Total) · 100 (No Brasil > 85%)",
      "Macrocefalia Urbana: Concentração desmedida de população e atividades econômicas em poucas cidades grandes."
    ],
    enemTraps: [
      "Confundir migração pendular com êxodo rural: a pendular é DIÁRIA e de ida e volta, enquanto o êxodo rural é a mudança definitiva do campo para a cidade.",
      "Achar que gentrificação beneficia a todos (ela marginaliza as populações mais vulneráveis)."
    ],
    mnemonics: "Pendular: 'Como um pêndulo de relógio, vai de manhã e volta de noite'."
  },

  "humanas/sociologia-filosofia": {
    topic: "Sociologia e Filosofia Contemporânea",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Essencial tanto na prova de Humanas quanto como repertório nota 1000 na Redação.",
    highFrequencySkills: ["H11 - Cidadania e instituições", "H12 - Teoria social e poder"],
    overview: "Os grandes pensadores da modernidade e contemporaneidade: Durkheim, Weber, Marx, Foucault, Bauman, Habermas e Hannah Arendt analisando poder, consumo, instituições e a esfera pública.",
    keyConcepts: [
      {
        title: "Zygmunt Bauman e a Modernidade Líquida",
        content: "A sociedade contemporânea perdeu a solidez de suas instituições tradicionais. Relações humanas, empregos e valores tornaram-se fluidos, descartáveis, instantâneos e mercantilizados."
      },
      {
        title: "Michel Foucault: Biopoder e Sociedade Disciplinar",
        content: "O poder não está apenas no Estado, mas disseminado em micropoderes e instituições disciplinares (escolas, hospitais, prisões). Biopolítica: gestão estatal da vida, corpos e populações."
      },
      {
        title: "Jürgen Habermas: Ação Comunicativa",
        content: "A razão deve ser emancipatória e dialógica. A democracia se fortalece quando indivíduos livres participam do debate público livre de coerção em busca de consensos racionais."
      },
      {
        title: "Hannah Arendt: Banalidade do Mal",
        content: "O mal não é praticado apenas por monstros sádicos, mas por pessoas comuns que abdicam da capacidade de pensar criticamente e se tornam meras cumpridoras burocráticas de ordens (análise do julgamento de Eichmann)."
      }
    ],
    formulasAndRules: [
      "Os Clássicos da Sociologia: Durkheim (Fato Social / Coerção / Anomia), Weber (Ação Social / Tipos Ideais / Racionalização), Marx (Materialismo Histórico / Luta de Classes / Mais-Valia)."
    ],
    enemTraps: [
      "Afirmar que Foucault localiza o poder apenas na figura do Presidente ou ditador (para Foucault, o poder é capilarizado e circula em todas as relações sociais).",
      "Confundir ação social weberiana com fato social durkheimiano."
    ],
  },

  "humanas/geopolitica": {
    topic: "Geopolítica, Globalização e Refugiados",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Nova DIT, blocos econômicos, migrações forçadas e conflitos geopolíticos por recursos.",
    highFrequencySkills: ["H23 - A Nova Divisão Internacional do Trabalho", "H18 - Direitos humanos e migrações"],
    overview: "A globalização econômica e técnica integra os mercados financeiros e fragmenta as cadeias produtivas, ao mesmo tempo em que aprofunda desigualdades globais e crises humanitárias de refugiados.",
    keyConcepts: [
      {
        title: "A Nova DIT e a Fábrica Global",
        content: "A produção de mercadorias complexas é fatiada globalmente: design e inovação nos países centrais; extração mineral e montagem intensiva em mão de obra nos países periféricos e emergentes (Sul Global)."
      },
      {
        title: "Refugiados vs. Migrantes Econômicos",
        content: "• Migrante Econômico: Deslocamento voluntário por motivos de trabalho e renda.\n• Refugiado (Convenção de 1951): Deslocamento forçado por fundado temor de perseguição (política, religiosa, étnica) ou conflito armado generalizado. Protegido pelo princípio de não devolução (non-refoulement)."
      }
    ],
    formulasAndRules: [
      "Tripé da Globalização Contemporânea: Meios de transporte rápidos (conteinerização) + Tecnologias da Informação (Internet/satélites) + Desregulamentação financeira transnacional."
    ],
    enemTraps: [
      "Confundir refugiado com migrante ilegal comum.",
      "Achar que globalização eliminou fronteiras físicas (ela abriu fronteiras para mercadorias e capitais, mas fechou e ergueu muros contra pessoas vulneráveis)."
    ],
    mnemonics: "DIT: 'Tradicional trocava Matéria-Prima por Manufatura; Nova DIT fatia a fábrica pelo planeta inteiro'."
  },

  // ═══════════════════════════════════════════════════════════════
  // LINGUAGENS E CÓDIGOS
  // ═══════════════════════════════════════════════════════════════
  "linguagens/interpretacao": {
    topic: "Interpretação e Compreensão Textual",
    area: "linguagens",
    areaName: "Linguagens",
    enemRelevance: "Mais de 60% de toda a prova de Linguagens. Foco na finalidade comunicativa e efeitos de sentido.",
    highFrequencySkills: ["H18 - Tese e objetivo comunicativo", "H19 - Informações implícitas"],
    overview: "Interpretar no ENEM não é opinar. É identificar a tese defendida pelo autor, o público-alvo, a intencionalidade discursiva e distinguir fatos de opiniões expressas no texto.",
    keyConcepts: [
      {
        title: "Compreensão vs. Interpretação",
        content: "• Compreensão: O que o texto DIZ explicitamente ('Segundo o texto...', 'De acordo com o autor...'). Basta localizar a informação na superfície textual.\n• Interpretação: O que o texto PERMITE DEDUZIR ('Infere-se que...', 'O objetivo do texto é...'). Exige leitura nas entrelinhas articulada ao contexto sociocultural."
      },
      {
        title: "Identificação da Tese e Objetivo do Autor",
        content: "Todo texto dissertativo ou de opinião tem uma TESE (ideia central que o autor quer que você aceite). Pergunte-se: 'Qual é o posicionamento que o autor defende e quer me convencer?'."
      },
      {
        title: "Pressupostos e Subentendidos",
        content: "• Pressuposto: Informação implícita marcada por pistas linguísticas gramaticais (ex: 'Beatriz DEIXOU DE estudar' pressupõe que antes ela estudava).\n• Subentendido: Informação implícita que depende exclusivamente da interpretação do contexto pelo leitor."
      }
    ],
    formulasAndRules: [
      "A Regra da Não Extrapolação: Nunca marque uma alternativa que traz um fato verdadeiro no mundo real, mas que NÃO tem qualquer amparo no texto fornecido pela questão."
    ],
    enemTraps: [
      "Extrapolação: Marcar a alternativa porque você concorda com ela politicamente ou moralmente, ignorando o que o texto diz.",
      "Redução: Marcar uma alternativa que foca em um detalhe secundário e esquece a tese principal do texto."
    ],
    mnemonics: "Análise Textual: 'Leia primeiro o comando da questão antes de ler o texto de apoio para já buscar a resposta com foco direcionado'."
  },

  "linguagens/literatura": {
    topic: "Literatura: Modernismo e Escolas Literárias",
    area: "linguagens",
    areaName: "Linguagens",
    enemRelevance: "Modernismo brasileiro domina absolutamente a prova (Fase Heroica, Fase de 30 e Concretismo).",
    highFrequencySkills: ["H15 - Modernismo de 22 e ruptura estética", "H16 - Literatura e identidade nacional"],
    overview: "O ENEM analisa textos literários como reflexo da sociedade de sua época. Os autores mais recorrentes são Machado de Assis, Oswald de Andrade, Manuel Bandeira, Carlos Drummond de Andrade, Graciliano Ramos e Clarice Lispector.",
    keyConcepts: [
      {
        title: "Modernismo - 1ª Fase (1922-1930) - 'Fase Heroica / Destruição'",
        content: "Semana de Arte Moderna de 1922. Ruptura radical com o academicismo parnasiano. Características: verso livre, linguagem coloquial brasileira, humor, paródia, nacionalismo crítico (Antropofagia de Oswald de Andrade: 'deglutir' a cultura europeia e recriá-la brasileira)."
      },
      {
        title: "Modernismo - 2ª Fase (1930-1945) - 'Geração de 30 / Engajamento'",
        content: "Prosa regionalista e poética existencial/social. Denúncia da miséria, seca e coronelismo no Nordeste (Vidas Secas de Graciliano Ramos). Na poesia: Drummond ('E agora, José?'), Cecília Meireles e Vinicius de Moraes com reflexões sobre o homem na Segunda Guerra Mundial."
      },
      {
        title: "Realismo Machadiano (Final do Século XIX)",
        content: "Machado de Assis desconstrói o romantismo idealizado. Crítica ácida e irônica à hipocrisia da elite burguesa e escravocrata do Rio de Janeiro. Narrador em primeira pessoa não confiável (ex: Bentinho em Dom Casmurro)."
      }
    ],
    formulasAndRules: [
      "Manifesto Antropófago (Oswald): 'Tupi or not tupi, that is the question'. Apropriação crítica da cultura estrangeira."
    ],
    enemTraps: [
      "Confundir o nacionalismo ufanista do Romantismo (idealização do índio e da pátria perfeita) com o nacionalismo crítico do Modernismo (que expõe as contradições brasileiras)."
    ],
  },

  "linguagens/vanguardas-artes": {
    topic: "Artes Visuais e Vanguardas Europeias",
    area: "linguagens",
    areaName: "Linguagens",
    enemRelevance: "Ruptura estética, arte contemporânea, Semana de 22 e funções da arte.",
    highFrequencySkills: ["H12 - Artes visuais e patrimônio", "H14 - Relações entre arte e sociedade"],
    overview: "As vanguardas europeias do início do século XX (Futurismo, Cubismo, Dadaísmo, Surrealismo, Expressionismo) romperam com a representação figurativa tradicional e abriram caminho para a arte conceitual e o Modernismo brasileiro.",
    keyConcepts: [
      {
        title: "As Principais Vanguardas e suas Marcas",
        content: "• Futurismo (Marinetti): Culto à velocidade, máquinas, tecnologia e rompimento violento com o passado.\n• Cubismo (Picasso): Geometrização das formas e sobreposição de múltiplos ângulos visuais simultâneos em um único plano.\n• Dadaísmo (Duchamp): Anti-arte, nonsense, ironia iconoclasta e os 'ready-mades' (a ideia vale mais do que a técnica manual).\n• Surrealismo (Dalí, Magritte): Exploração do inconsciente, do sonho e da livre associação psíquica (influência de Freud).\n• Expressionismo (Munch): Deformação da realidade para expressar angústias e sentimentos humanos profundos."
      },
      {
        title: "Semana de Arte Moderna (1922) e Antropofagia",
        content: "Artistas brasileiros absorveram as técnicas das vanguardas para 'deglutir' as influências externas e produzir uma arte autenticamente nacional (Tarsila do Amaral com o 'Abaporu', Anita Malfatti, Oswald de Andrade, Mário de Andrade)."
      }
    ],
    formulasAndRules: [
      "Princípio da Arte Conceitual: O valor artístico reside no conceito/intenção crítica formulada pelo artista, e não na habilidade técnica de reprodução mimetizada da realidade."
    ],
    enemTraps: [
      "Julgar obras de arte contemporâneas por critérios clássicos de beleza ou proporção renascentista.",
      "Achar que o Dadaísmo defendia regras ou técnicas acadêmicas."
    ],
    mnemonics: "Vanguardas: 'FU-CU-DA-SU-EX' (Futurismo-Velocidade, Cubismo-Geometria, Dadaísmo-Nonsense/Ready-Made, Surrealismo-Inconsciente, Expressionismo-Angústia)."
  },

  // ═══════════════════════════════════════════════════════════════
  // REDAÇÃO DISSERTATIVO-ARGUMENTATIVA
  // ═══════════════════════════════════════════════════════════════
  "redacao/estrutura-padrao": {
    topic: "Estrutura Padrão Ouro da Redação Nota 1000",
    area: "redacao",
    areaName: "Redação",
    enemRelevance: "A única prova do ENEM que vale 1000 pontos isolados. Nota de corte de Medicina exige 920+.",
    highFrequencySkills: ["C1 - Norma culta", "C2 - Repertório", "C3 - Projeto de texto", "C4 - Coesão", "C5 - Intervenção"],
    overview: "A redação do ENEM possui um esqueleto fixo de 4 parágrafos (1 Introdução, 2 Desenvolvimentos, 1 Conclusão) totalizando cerca de 28 a 30 linhas com conectivos interparágrafos obrigatórios.",
    keyConcepts: [
      {
        title: "Parágrafo 1: Introdução (6 a 7 linhas)",
        content: "1. Gancho / Repertório Sociocultural de contextualização (filme, filósofo, alusão histórica ou CF/88).\n2. Conexão com o Tema oficial da prova.\n3. Apresentação da TESE com dois argumentos antecipados (Argumento 1 que será o D1 e Argumento 2 que será o D2)."
      },
      {
        title: "Parágrafos 2 e 3: Desenvolvimentos (7 a 8 linhas cada)",
        content: "Estrutura do D1 e D2:\n• Tópico Frasal: Afirmação clara do argumento.\n• Repertório de Legitimação: Dados, citação indireta de sociólogo ou fato histórico.\n• Produtividade / Argumentação Autoral: Explicar POR QUE aquilo gera o problema e quais são os impactos sociais reais.\n• Fechamento Crítico: Conclusão do parágrafo."
      },
      {
        title: "Parágrafo 4: Proposta de Intervenção (7 a 8 linhas)",
        content: "A intervenção (Competência 5) DEVE responder rigorosamente aos 5 elementos avaliados pela banca:\n1. AGENTE: Quem executará a medida? (ex: Ministério da Saúde, Ministério da Educação).\n2. AÇÃO: O que será feito? (ex: criar campanhas permanentes, reformar diretrizes curriculares).\n3. MODO/MEIO: Como será feito? (iniciando com 'por meio de...', 'mediante...').\n4. EFEITO/FINALIDADE: Para que serve? (iniciando com 'a fim de...', 'com o fito de...').\n5. DETALHAMENTO: Uma informação adicional sobre o agente, ação ou meio (ex: 'órgão responsável pela gestão do SUS')."
      }
    ],
    formulasAndRules: [
      "Conectivos de Início de Parágrafo OBRIGATÓRIOS (C4):\n• D1: 'Nesse contexto, cabe pontuar que...', 'Em primeira análise...'\n• D2: 'Ademais...', 'Outrossim...', 'Em segundo plano...'\n• Conclusão: 'Portanto...', 'Infere-se, dessarte, que...'",
      "Os 5 Elementos da C5: Agente + Ação + Modo/Meio + Efeito + Detalhamento (Cada um vale 40 pontos = 200 pontos no total)."
    ],
    enemTraps: [
      "Usar 'o governo' ou 'a sociedade' como agente vago sem detalhamento (perde pontos na C5). Use pastas ministeriais específicas.",
      "Repertório ilegítimo ou improdutivo: jogar uma frase de Bauman e não relacionar palavra por palavra com o tema da redação.",
      "Ferir os Direitos Humanos na proposta de intervenção: zera sumariamente a Competência 5."
    ],
    mnemonics: "Fórmula da C5: 'QUEM faz, O QUE faz, COMO faz, PRA QUE faz, e um DETALHE a mais'."
  },

  "natureza/citologia": {
    topic: "Citologia e Metabolismo Energético",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Altíssima frequência no ENEM e prova de Medicina (Cadeia respiratória, fotossíntese e organelas).",
    highFrequencySkills: ["H13 - Organização celular e biomembranas", "H14 - Fluxos energéticos celulares", "H15 - Divisão e ciclo celular"],
    overview: "A citologia no ENEM foca no funcionamento integrado da célula viva: como ela obtém energia (ATP), sintetiza e exporta substâncias, mantém o equilíbrio osmótico e se reproduz ou morre de forma orquestrada.",
    keyConcepts: [
      {
        title: "Metabolismo Energético: Respiração Celular vs. Fermentação",
        content: "1. Glicólise (Citosol): Glicose → 2 Piruvatos + 2 NADH + 2 ATP líquidos (Anaeróbica).\n2. Ciclo de Krebs (Matriz Mitocondrial): Descarboxilação e geração de NADH, FADH2 e 2 ATPs.\n3. Cadeia Transportadora de Elétrons (Cristas Mitocondriais): Elétrons bombeiam prótons H+ para o espaço intermembranas. O refluxo de H+ pela ATP Sintase produz ~28 ATPs. O oxigênio (O2) é o aceptor final de elétrons, formando água.\nFermentação: Em hipóxia, o piruvato vira lactato ou etanol exclusivamente para reoxidar NADH em NAD+ e não travar a glicólise."
      },
      {
        title: "Fotossíntese: Fase Clara e Fase Escura",
        content: "• Fase Fotoquímica (Tilacoides): Fotólise da água libera O2 (TODO o oxigênio liberado vem da água!) e produz ATP e NADPH.\n• Fase Enzimática / Ciclo de Calvin (Estroma): Fixação do CO2 atmosférico pela enzima Rubisco para sintetizar glicose."
      },
      {
        title: "Membrana e Osmose",
        content: "A água se move por osmose do meio HIPOTÔNICO (menos concentrado) para o meio HIPERTÔNICO (mais concentrado).\n• Célula animal em meio hipotônico: incha até estourar (hemólise/plasmoptise).\n• Célula vegetal em meio hipotônico: ganha água, mas NÃO estoura devido à parede celular (fica túrgida)."
      },
      {
        title: "Teoria Endossimbiótica (Lynn Margulis)",
        content: "Mitocôndrias e cloroplastos evoluíram de bactérias ancestrais fagocitadas: possuem DNA circular próprio, ribossomos 70S, dupla membrana e autoduplicação independente por fissão binária."
      }
    ],
    formulasAndRules: [
      "Respiração Aeróbica Global: C6H12O6 + 6 O2 → 6 CO2 + 6 H2O + ~30-32 ATP",
      "Fotossíntese Global: 6 CO2 + 12 H2O + Luz → C6H12O6 + 6 H2O + 6 O2",
      "Fases da Mitose: Prófase → Metáfase (placa equatorial) → Anáfase (separação das cromátides) → Telófase"
    ],
    enemTraps: [
      "Achar que o O2 liberado na fotossíntese vem do CO2 (vem 100% da quebra da água!).",
      "Achar que a fermentação gera dezenas de ATPs (ela só serve para regenerar o NAD+ da glicólise).",
      "Esquecer que células vegetais realizam mitocôndrias e respiração celular 24 horas por dia (além de fotossíntese durante o dia)."
    ],
    mnemonics: "Fases da Mitose: 'PRO METO A ANA NO TELO' (Prófase, Metáfase, Anáfase, Telófase)."
  },

  "natureza/eletroquimica": {
    topic: "Eletroquímica e Pilhas",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Presença certa no ENEM. Foco em pilhas, eletrólise industrial, baterias e proteção contra corrosão.",
    highFrequencySkills: ["H18 - Processos eletroquímicos e energia", "H19 - Transformações químicas e sustentabilidade"],
    overview: "Estudo da interconversão entre energia química e energia elétrica. Compreende processos espontâneos (pilhas galvânicas, ΔEº > 0) e não espontâneos forçados por gerador externo (eletrólise, ΔEº < 0).",
    keyConcepts: [
      {
        title: "Pilhas Galvânicas e Mnemônico CRAO",
        content: "• CÁTODO: Ocorre REDUÇÃO (+ polo positivo da pilha). Atrai cátions e ganha massa.\n• ÂNODO: Ocorre OXIDAÇÃO (- polo negativo da pilha). Corrói e perde massa.\n• Elétrons: fluem SEMPRE do Ânodo para o Cátodo pelo fio metálico condutor externo.\n• Ponte Salina: conduz íons em solução para neutralizar cargas e fechar o circuito (NUNCA conduz elétrons)."
      },
      {
        title: "Potencial Padrão e Espontaneidade",
        content: "ΔEº = Eº(redução maior) - Eº(redução menor). Se ΔEº > 0, o processo é ESPONTÂNEO (pilha). Se ΔEº < 0, é NÃO ESPONTÂNEO (exige eletrólise).\nNota: Eº é propriedade intensiva; NÃO multiplique o valor de Eº ao balancear a equação!"
      },
      {
        title: "Metal de Sacrifício e Proteção Catódica",
        content: "Para proteger o ferro (Fe) da corrosão, conecta-se a ele um metal com MENOR potencial de redução (maior facilidade de oxidar, como Mg ou Zn). O metal de sacrifício se corrói preferencialmente, mantendo o ferro reduzido e intacto."
      },
      {
        title: "Eletrólise Aquosa de Salmoura (NaCl)",
        content: "No cátodo: H+ descarrega antes do Na+ da família 1A, formando H2(g) e OH-. No ânodo: Cl- descarrega antes de OH-, formando Cl2(g). Em solução restam Na+ e OH- (soda cáustica NaOH)."
      }
    ],
    formulasAndRules: [
      "Força Eletromotriz: ΔEº = Eºredução(cátodo) - Eºredução(ânodo)",
      "Carga Elétrica: Q = i · t (Q em Coulombs, i em Amperes, t em segundos)",
      "Constante de Faraday: 1 mol de e⁻ = 96 500 C"
    ],
    enemTraps: [
      "Achar que elétrons circulam pela ponte salina (apenas íons circulam pela solução aquosa!).",
      "Multiplicar o potencial Eº pelos coeficientes estequiométricos da reação global.",
      "Achar que Na metálico pode ser obtido em eletrólise aquosa (o H+ da água descarrega na frente)."
    ],
    mnemonics: "Pilha: CRAO (Cátodo Reduz, Ânodo Oxida). Quem tem Maior Eº REDUZ, quem tem Menor Eº OXIDA."
  },

  "natureza/termologia": {
    topic: "Termologia, Calorimetria e Dilatação",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Muito cobrado em Física: trocas de calor, brisas costeiras, panela de pressão e garrafa térmica.",
    highFrequencySkills: ["H17 - Fenômenos térmicos no cotidiano", "H18 - Uso eficiente e balanço térmico"],
    overview: "Compreensão do calor como energia térmica em trânsito devido à diferença de temperatura, suas formas de propagação (condução, convecção e radiação) e os efeitos de aquecimento e mudança de estado físico.",
    keyConcepts: [
      {
        title: "Calor Sensível vs. Calor Latente",
        content: "• Calor Sensível (Q = m·c·ΔT): Altera a temperatura sem mudar de fase.\n• Calor Latente (Q = m·L): Altera a fase física mantendo a temperatura constante durante a transição em substâncias puras (platô térmico)."
      },
      {
        title: "Mecanismos de Transferência Térmica",
        content: "• Condução: Exige contato direto em sólidos molécula a molécula.\n• Convecção: Exclusiva de fluidos (líquidos e gases) por correntes ascendentes de ar quente menos denso e descendentes de ar frio mais denso.\n• Radiação: Ondas eletromagnéticas (infravermelho) que se propagam inclusive no vácuo."
      },
      {
        title: "Garrafa Térmica (Frasco de Dewar)",
        content: "• Vácuo entre paredes duplas: impede Condução e Convecção.\n• Paredes espelhadas: refletem a radiação infravermelha de volta.\n• Tampa plástica vedante: impede convecção e perda por evaporação."
      },
      {
        title: "Comportamento Anômalo da Água",
        content: "A água atinge densidade MÁXIMA a 4 °C. Abaixo de 4 °C ela se expande devido às pontes de hidrogênio abertas. Por isso o gelo flutua e lagos congelam apenas na superfície, preservando a vida aquática no fundo a 4 °C."
      }
    ],
    formulasAndRules: [
      "Calor Sensível: Q = m · c · ΔT",
      "Calor Latente: Q = m · L",
      "Equilíbrio Térmico: ΣQ = 0 (Qcedido + Qrecebido = 0)",
      "Dilatação Linear: ΔL = L0 · α · ΔT",
      "Primeira Lei da Termodinâmica: ΔU = Q - W (onde W = P · ΔV)"
    ],
    enemTraps: [
      "Confundir calor com temperatura (temperatura é a medida microscópica da agitação; calor é a energia em trânsito).",
      "Achar que roupas de lã 'esquentam': a lã é um isolante térmico que apenas retarda a perda de calor do corpo para o ambiente.",
      "Fazer média simples de temperatura em misturas quando as massas de água forem desiguais."
    ],
    mnemonics: "Fórmulas de Calor: 'Que macete' (Q = m·c·ΔT) e 'Que moleza' (Q = m·L)."
  },

  "matematica/geometria-analitica": {
    topic: "Geometria Analítica e Cônicas",
    area: "matematica",
    areaName: "Matemática",
    enemRelevance: "Cai regularmente associada a mapas, antenas, radares e otimização de rotas logísticas.",
    highFrequencySkills: ["H8 - Coordenadas cartesianas no plano", "H21 - Modelagem algébrico-geométrica"],
    overview: "A geometria analítica unifica a álgebra e a geometria euclidiana através do plano cartesiano, permitindo calcular distâncias, posições relativas e áreas de figuras através de coordenadas numéricas.",
    keyConcepts: [
      {
        title: "Distância Entre Dois Pontos e Ponto Médio",
        content: "• Distância: d = √[(xB - xA)² + (yB - yA)²] (aplicação direta de Pitágoras).\n• Ponto Médio M: xM = (xA + xB) / 2 e yM = (yA + yB) / 2.\n• Baricentro G do triângulo: xG = (xA + xB + xC) / 3 e yG = (yA + yB + yC) / 3."
      },
      {
        title: "Equação da Reta e Posições Relativas",
        content: "• Equação Reduzida: y = mx + n (onde m = coeficiente angular = Δy/Δx; n = ponto onde corta o eixo y).\n• Retas Paralelas: possuem coeficientes angulares idênticos (m1 = m2).\n• Retas Perpendiculares: m1 · m2 = -1 (ou m2 = -1 / m1)."
      },
      {
        title: "Equação da Circunferência",
        content: "Forma Reduzida: (x - a)² + (y - b)² = R² (onde C(a, b) é o centro e R é o raio).\nPara saber se um ponto P está dentro, na borda ou fora: substitua as coordenadas. Se < R² (dentro); se = R² (na borda); se > R² (fora)."
      },
      {
        title: "Distância de Ponto à Reta",
        content: "d = |A·x0 + B·y0 + C| / √(A² + B²) (a reta deve estar na forma geral Ax + By + C = 0)."
      }
    ],
    formulasAndRules: [
      "Distância entre pontos: d² = (Δx)² + (Δy)²",
      "Equação ponto-declive da reta: y - y0 = m · (x - x0)",
      "Área do triângulo por coordenadas: Área = (1/2) · |Determinante das Coordenadas|"
    ],
    enemTraps: [
      "Esquecer de trocar o sinal das coordenadas ao extrair o centro da circunferência da equação (x - a)² + (y - b)² = R².",
      "Esquecer de extrair a raiz quadrada de R² para encontrar o raio da circunferência.",
      "Confundir coeficiente angular (m = Δy / Δx) fazendo Δx / Δy."
    ],
    mnemonics: "Equação da Reta: 'Yo-Yo Mi-Xo-Xo' (y - y0 = m · (x - x0))."
  },

  "humanas/cidadania-direitos": {
    topic: "Cidadania, Direitos e Movimentos Sociais",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Tema transversal de máxima pontuação no ENEM e pilar essencial para nota 900+ na Redação.",
    highFrequencySkills: ["H23 - Cidadania e movimentos sociais", "H24 - Legislação, Estado e Direitos Humanos"],
    overview: "Analisa a conquista histórica dos direitos fundamentais civis, políticos e sociais no Brasil, o papel da Constituição de 1988 e os desafios contemporâneos da cidadania real frente às desigualdades estruturais.",
    keyConcepts: [
      {
        title: "Gerações dos Direitos (T. H. Marshall e Bobbio)",
        content: "• 1ª Dimensão (Liberdade): Direitos Civis e Políticos. Exigem abstenção estatal (liberdades negativas).\n• 2ª Dimensão (Igualdade): Direitos Sociais, Econômicos e Culturais (Saúde, Educação, Trabalho). Exigem prestação positiva do Estado.\n• 3ª Dimensão (Fraternidade): Direitos Difusos e Coletivos (Meio ambiente ecologicamente equilibrado, paz mundial)."
      },
      {
        title: "Constituição Cidadã de 1988 e o SUS",
        content: "O Artigo 196 consagrou: 'A saúde é direito de todos e dever do Estado'. Rompeu com o INAMPS (que atendia só quem tinha carteira assinada), universalizando o acesso com os pilares de Universalidade, Equidade e Integralidade."
      },
      {
        title: "O Cidadão de Papel (Gilberto Dimenstein)",
        content: "Denuncia o abismo entre a 'cidadania formal' (garantida no texto das leis) e a 'cidadania real' (a precariedade vivida nas periferias sem saneamento, segurança ou saúde de qualidade)."
      },
      {
        title: "Artigo 231 e Direitos Originários Indígenas",
        content: "Reconhece aos povos originários sua identidade cultural permanente e direitos originários sobre as terras tradicionais. A demarcação pela União tem natureza declaratória (reconhece posse pré-existente ao próprio Estado)."
      }
    ],
    formulasAndRules: [
      "Artigo 5º da CF/88: Todos são iguais perante a lei, sem distinção de qualquer natureza.",
      "Artigo 196: A saúde é direito de todos e dever do Estado.",
      "Artigo 227: Prioridade absoluta aos direitos da criança e do adolescente."
    ],
    enemTraps: [
      "Achar que ações afirmativas (cotas) ferem o princípio da isonomia: o STF julgou que garantem a igualdade material.",
      "Confundir plebiscito (consulta PRÉVIA) com referendo (aprovação POSTERIOR pelo povo).",
      "Achar que o SUS é centralizado em Brasília: ele é tripartite descentralizado."
    ],
    mnemonics: "Pilares Doutrinários do SUS: 'U-E-I' (Universalidade, Equidade, Integralidade)."
  },

  "humanas/era-vargas-populismo": {
    topic: "Era Vargas, Legislação Trabalhista e Populismo",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Altíssima frequência no ENEM (CLT, Estado Novo, DIP, industrialização e populismo de JK).",
    highFrequencySkills: ["H11 - Cidadania e direitos no Brasil", "H13 - Estado e poder político"],
    overview: "A Era Vargas (1930-1945) transformou o Brasil de agrário-exportador em urbano-industrial, introduzindo direitos trabalhistas atrelados ao controle sindical corporativista e forte propaganda estatal.",
    keyConcepts: [
      {
        title: "Revolução de 1930 e Fim da República Oligárquica",
        content: "Ruptura com a política do café com leite. Getúlio Vargas assume criando o Ministério do Trabalho e centralizando o poder político nos interventores federais."
      },
      {
        title: "Estado Novo (1937-1945): Ditadura e Corporativismo",
        content: "Outorga da Constituição 'Polaca'. Criação do DIP (Departamento de Imprensa e Propaganda) para censura e culto à personalidade do presidente como 'Pai dos Pobres'. A CLT (1943) unifica os direitos sindicais, mas submete os sindicatos ao Ministério do Trabalho (peleguismo)."
      },
      {
        title: "Industrialização de Base e Nacionalismo",
        content: "Criação da CSN (Companhia Siderúrgica Nacional), Vale do Rio Doce e Fábrica Nacional de Motores durante a 2ª Guerra Mundial, aproveitando a diplomacia pendular com os EUA."
      },
      {
        title: "O Nacional-Desenvolvimentismo de JK (1956-1961)",
        content: "Plano de Metas ('50 anos em 5'): abertura ao capital internacional (indústria automobilística), construção de Brasília, rodoviarismo e início do endividamento inflacionário."
      }
    ],
    formulasAndRules: [
      "Trifeta Trabalhista Varguista: Carteira de Trabalho (1932) + Salário Mínimo (1940) + CLT (1943).",
      "Corporativismo: Harmonização forçada entre capital e trabalho sob a tutela do Estado."
    ],
    enemTraps: [
      "Achar que os direitos da CLT se estendiam aos trabalhadores rurais na Era Vargas (o Estatuto do Trabalhador Rural só veio em 1963).",
      "Confundir a industrialização por substituição de importações (Vargas) com a abertura ao capital multinacional (JK)."
    ],
    mnemonics: "Fases de Vargas: 'P-C-E' (Provisório 30-34, Constitucional 34-37, Estado Novo 37-45)."
  },

  "humanas/geografia-fisica-clima": {
    topic: "Climatologia, Relevo e Domínios Morfoclimáticos",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Tema clássico do ENEM (Aziz Ab'Sáber, massas de ar, bacias hidrográficas e biomas).",
    highFrequencySkills: ["H26 - Dinâmica da natureza", "H27 - Impactos socioambientais"],
    overview: "O ENEM cobra a integração sistêmica entre relevo, dinâmica atmosférica (massas de ar) e cobertura vegetal, além do manejo sustentável dos solos e recursos hídricos.",
    keyConcepts: [
      {
        title: "Domínios Morfoclimáticos de Aziz Ab'Sáber",
        content: "Amazonas (terras baixas florestadas equatoriais), Cerrado (chapadoes, solos ácidos laterizados, savana), Caatinga (depressões semiáridas com pediplanação e rios intermitentes), Mares de Morros (planalto atlântico florestado mamelonar), Araucárias (planalto meridional subtropical) e Pradarias (coxilhas dos pampas gaúchos)."
      },
      {
        title: "Massas de Ar que Atuam no Brasil",
        content: "• mEc (Equatorial Continental): Única massa continental úmida do mundo (evapotranspiração amazônica: rios voadores).\n• mPa (Polar Atlântica): Traz frentes frias, geadas no Sul e friagem na Amazônia ocidental.\n• mTa (Tropical Atlântica): Chuvas orográficas na Serra do Mar."
      },
      {
        title: "Solos e Degradação Antrópica",
        content: "• Laterização: Acúmulo de ferro e alumínio (crosta ferruginosa) em solos de clima tropical alternado.\n• Lixiviação: Lavagem dos nutrientes solúveis pela água da chuva em florestas tropicais.\n• Voçorocamento: Erosão linear severa que atinge o lençol freático em encostas desmatadas."
      }
    ],
    formulasAndRules: [
      "Chuva Orográfica: Vento úmido sobe a montanha (barlavento - chove) e desce seco (sotavento - estiagem).",
      "Curvas de Nível e Terraceamento: Técnicas agrícolas indispensáveis contra a erosão laminar em declives."
    ],
    enemTraps: [
      "Achar que o solo da Floresta Amazônica é naturalmente fértil: a fertilidade depende da serrapilheira reciclada rapidamente.",
      "Confundir arenização (processo natural do RS em solos arenosos) com desertificação (degradação antrópica no semiárido da Caatinga)."
    ],
    mnemonics: "Massas de Ar Quentes e Úmidas: 'E-T-A' (Equatorial Atlântica, Equatorial Continental, Tropical Atlântica)."
  },

  "linguagens/funcoes-linguagem": {
    topic: "As 6 Funções da Linguagem de Roman Jakobson",
    area: "linguagens",
    areaName: "Linguagens e Códigos",
    enemRelevance: "Top 1 mais recorrente em Língua Portuguesa no ENEM (anúncios, poemas, dicionários e crônicas).",
    highFrequencySkills: ["H26 - Efeitos de sentido de recursos verbais", "H27 - Função social dos textos"],
    overview: "Cada ato de comunicação enfatiza um dos 6 elementos do circuito comunicativo (emissor, receptor, mensagem, canal, código ou contexto).",
    keyConcepts: [
      {
        title: "Função Emotiva / Expressiva (Foco no Emissor)",
        content: "Centrada na 1ª pessoa ('eu/nós'). Expressa sentimentos, opiniões subjetivas, exclamações e marcas de pontuação emotiva (poesias confessionais, diários, cartas)."
      },
      {
        title: "Função Conativa / Apelativa (Foco no Receptor)",
        content: "Centrada na 2ª pessoa ('você/tu'). Uso de verbos no imperativo, vocativos e apelos diretos para persuadir, orientar ou ordenar (propagandas, discursos políticos, sermões)."
      },
      {
        title: "Função Metalinguística (Foco no Código)",
        content: "O código explica o próprio código: a palavra explicando a palavra, a poesia falando sobre o ato de fazer poesia, a pintura retratando o pintor pintando (dicionários, gramáticas, poemas sobre versos)."
      },
      {
        title: "Função Fática (Foco no Canal de Contato)",
        content: "Tem como objetivo testar, iniciar, prolongar ou interromper o canal de comunicação: 'Alô?', 'Oi, tudo bem?', 'Entende?', 'Veja bem...'"
      },
      {
        title: "Função Referencial / Denotativa (Foco no Contexto)",
        content: "Centrada na informação objetiva, factual e impessoal (3ª pessoa). Linguagem denotativa sem ambiguidades (notícias jornalísticas, textos científicos, relatórios técnicos)."
      },
      {
        title: "Função Poética (Foco na Mensagem)",
        content: "Cuidado estético com a forma, ritmo, rimas, figuras de linguagem, jogos de palavras e sonoridade. Presente em poemas, slogans publicitários marcantes e prosa lírica."
      }
    ],
    formulasAndRules: [
      "Circuito de Jakobson: Emissor (Emotiva) → Receptor (Conativa) | Código (Metalinguística) | Canal (Fática) | Contexto (Referencial) | Mensagem (Poética)."
    ],
    enemTraps: [
      "Textos publicitários misturam Função Conativa (imperativo) com Poética (trocadilhos/rima) e Referencial (dados): identifique qual a questão perguntou especificamente.",
      "Confundir metalinguagem com intertextualidade: metalinguagem fala do código em si."
    ],
    mnemonics: "Lembre-se: 'E-R-C-P-F-M' (Emissor, Receptor, Código, Poesia, Fática, Mensagem)."
  },

  "linguagens/figuras-linguagem": {
    topic: "Figuras de Linguagem e Expressividade Semântica",
    area: "linguagens",
    areaName: "Linguagens e Códigos",
    enemRelevance: "Cai todo ano no ENEM em músicas de MPB, tirinhas (Mafalda, Armandinho), charges e poemas modernistas.",
    highFrequencySkills: ["H15 - Recursos estilísticos na arte", "H26 - Sentido conotativo e polissemia"],
    overview: "As figuras de linguagem enriquecem a expressividade ao desviar do sentido literal (denotativo) para criar múltiplos sentidos conotativos.",
    keyConcepts: [
      {
        title: "Figuras de Palavras: Metáfora vs. Metonímia",
        content: "• Metáfora: Comparação implícita sem conectivo ('O amor é fogo').\n• Metonímia: Substituição por proximidade real (o autor pela obra: 'ler Machado'; o continente pelo conteúdo: 'beber um copo'; a parte pelo todo: 'muitos braços no campo')."
      },
      {
        title: "Figuras de Pensamento: Antítese vs. Paradoxo",
        content: "• Antítese: Aproximação de ideias opostas possíveis no mesmo plano ('O dia e a noite se alternam').\n• Paradoxo / Oxímoro: Fusão de ideias opostas inconciliáveis que desafiam a lógica ('Amor é ferida que dói e não se sente', 'Um silêncio ensurdecedor')."
      },
      {
        title: "Ironia, Eufemismo e Hipérbole",
        content: "• Ironia: Afirmar o contrário do que se pensa para criticar ou ridicularizar.\n• Eufemismo: Suavização de ideia desagradável ou trágica ('Ele partiu para o plano espiritual').\n• Hipérbole: Exagero intencional ('Chorei rios de lágrimas')."
      },
      {
        title: "Prosopopeia (Personificação) e Sinestesia",
        content: "• Prosopopeia: Atribuição de qualidades humanas a seres inanimados ('A lua chorou de saudade').\n• Sinestesia: Mistura de sentidos humanos diferentes ('Um som doce e aveludado' = audição + paladar + tato)."
      }
    ],
    formulasAndRules: [
      "Comparação Explícita: 'Você é COMO uma flor'.\nMetáfora Implícita: 'Você É uma flor'.",
      "Pleonasmo Literário: Repetição expressiva para reforçar ('Chorar um pranto amargo')."
    ],
    enemTraps: [
      "Confundir Antítese (ideias opostas coexistentes) com Paradoxo (ideias opostas contraditórias simultâneas).",
      "Nas tirinhas, a ironia quase sempre está na quebra de expectativa entre fala e imagem."
    ],
    mnemonics: "A-P-E-H (Antítese = Opostos; Paradoxo = Impossível; Eufemismo = Suave; Hipérbole = Exagero)."
  },

  // ═══════════════════════════════════════════════════════════════
  // MATEMÁTICA FINANCEIRA
  // ═══════════════════════════════════════════════════════════════
  "matematica/financeira": {
    topic: "Matemática Financeira e Juros",
    area: "matematica",
    areaName: "Matemática e suas Tecnologias",
    enemRelevance: "Alta recorrência (2 a 4 questões por prova). Ouro da TRI por contextualizar o cotidiano financeiro.",
    highFrequencySkills: ["H13 - Avaliar propostas de financiamento e investimentos", "H14 - Resolver problemas com acréscimos e descontos"],
    overview: "A prova do ENEM privilegia tomadas de decisão financeiras racionais: comparar compra à vista com desconto versus parcelamento, identificar taxas embutidas e calcular montantes em juros simples e compostos.",
    keyConcepts: [
      {
        title: "Juros Simples vs. Juros Compostos",
        content: "• Juros Simples: A taxa incide SEMPRE sobre o capital inicial (crescimento LINEAR/PA): J = C · i · t e M = C + J = C · (1 + i · t).\n• Juros Compostos: A taxa incide sobre o montante acumulado do período anterior ('juros sobre juros', crescimento EXPONENCIAL/PG): M = C · (1 + i)^t."
      },
      {
        title: "A Venda Parcelada 'Sem Juros' (Armadilha Real)",
        content: "Se uma loja oferece um produto por R$ 100 à vista OU 2 vezes de R$ 50 (sendo R$ 50 de entrada e R$ 50 após 30 dias), ela NÃO está vendendo sem juros. O cliente financiou apenas R$ 50 (100 - 50 da entrada) e pagou R$ 50 depois, logo a taxa é 0% nesse caso. Mas se à vista tiver 10% de desconto (R$ 90 à vista): financiou R$ 40 (90 - 50) e pagou R$ 50 depois! Taxa real = 10 / 40 = 25% ao mês!"
      },
      {
        title: "Aumentos e Descontos Sucessivos",
        content: "Nunca some ou subtraia porcentagens sucessivas! Use fatores multiplicativos: Fator de aumento = (1 + i); Fator de desconto = (1 - i). Um aumento de 20% seguido de aumento de 30% resulta em 1,20 · 1,30 = 1,56 (aumento real de 56%, e NÃO de 50%)."
      },
      {
        title: "Inflação e Taxa Real de Juros (Equação de Fisher)",
        content: "A taxa aparente (nominal) inclui a inflação. A taxa real é o verdadeiro ganho de poder de compra: (1 + i_aparente) = (1 + i_real) · (1 + taxa_inflação). Se uma aplicação rende 10% mas a inflação foi de 10%, o rendimento real é ZERO."
      }
    ],
    formulasAndRules: [
      "Juros Simples: J = C · i · t  |  M = C · (1 + i · t)",
      "Juros Compostos: M = C · (1 + i)^t  |  J = M - C",
      "Fator Multiplicativo de Aumento: F = 1 + i",
      "Fator Multiplicativo de Redução: F = 1 - i",
      "Variação Percentual: Δ% = [(Valor Final - Valor Inicial) / Valor Inicial] · 100"
    ],
    enemTraps: [
      "Somar descontos sucessivos (dois descontos de 10% NÃO equivalem a 20%, mas sim a 1 - 0,90 · 0,90 = 19%).",
      "No parcelamento com entrada, esquecer de abater o valor da entrada do saldo devedor principal antes de calcular a taxa de juros da parcela seguinte."
    ],
    mnemonics: "J-C-I-T ('Jesus Cristo Ilumina Todos' para J = C · i · t)."
  },

  // ═══════════════════════════════════════════════════════════════
  // LINGUAGENS: GÊNEROS TEXTUAIS
  // ═══════════════════════════════════════════════════════════════
  "linguagens/generos": {
    topic: "Gêneros Textuais e Esferas de Circulação",
    area: "linguagens",
    areaName: "Linguagens, Códigos e suas Tecnologias",
    enemRelevance: "Crítica (mais de 15 questões por prova). O ENEM é uma prova essencialmente pautada em gêneros discursivos.",
    highFrequencySkills: ["H21 - Reconhecer funções da linguagem e gêneros", "H22 - Identificar marcas linguísticas de circulação social"],
    overview: "Gêneros textuais são padrões comunicativos sociocomunicativos estáveis que realizam propósitos específicos em determinadas esferas sociais (jornalística, acadêmica, literária, cotidiana, publicitária, jurídica).",
    keyConcepts: [
      {
        title: "Gênero Textual vs. Tipo Textual",
        content: "• Tipos Textuais: Conjunto finito de estruturas sequenciais básicas (Narrativo, Descritivo, Dissertativo-Argumentativo, Expositivo, Injuntivo/Instrucional).\n• Gêneros Textuais: Infinitos e dinâmicos, definidos pela função social e contexto (notícia, editorial, receita de bolo, meme, artigo científico, bula de remédio, manifesto)."
      },
      {
        title: "Esfera Jornalística e Informação vs. Opinião",
        content: "• Notícia / Reportagem: Predomínio do tipo expositivo-narrativo, foco na apuração de fatos, terceira pessoa, busca de imparcialidade (embora haja enquadramento ideológico).\n• Editorial: Foco na opinião institucional coletiva do veículo de comunicação, sem assinatura individual, verbo no presente, forte carga argumentativa.\n• Artigo de Opinião: Assinado por um articulista, defende tese pessoal com recursos persuasivos e de autoria explícita."
      },
      {
        title: "Gêneros Digitais e Hibridismo Contemporâneo",
        content: "A internet criou gêneros multissemióticos que fundem texto verbal, imagens, sons e hiperlinks (memes, postagens em fóruns, threads, infográficos interativos, podcasts). O ENEM frequentemente analisa a função social e a circulação desses novos suportes na formação da cidadania."
      }
    ],
    formulasAndRules: [
      "Injuntivo/Instrucional: Verbos no imperativo ou infinitivo ('misture', 'leia', 'tome').",
      "Dissertativo-Argumentativo: Tese + argumentos fundamentados + proposta de reflexão ou solução.",
      "Narrativo: Enredo, personagens, tempo, espaço e narrador (1ª ou 3ª pessoa)."
    ],
    enemTraps: [
      "Classificar um editorial como 'texto neutro e puramente informativo'. O editorial SEMPRE defende um posicionamento ideológico da empresa jornalística.",
      "Confundir crônica (literária, reflexiva, parte de um detalhe cotidiano) com notícia (factual, imediata e documental)."
    ],
    mnemonics: "Tipos são 5: 'NA-DE-DIS-EX-IN' (Narrativo, Descritivo, Dissertativo, Expositivo, Injuntivo)."
  },

  // ═══════════════════════════════════════════════════════════════
  // LINGUAGENS: ARGUMENTAÇÃO
  // ═══════════════════════════════════════════════════════════════
  "linguagens/argumentacao": {
    topic: "Argumentação e Recursos Persuasivos",
    area: "linguagens",
    areaName: "Linguagens, Códigos e suas Tecnologias",
    enemRelevance: "Alta frequência (essencial tanto para questões objetivas quanto para atingir nota 900+ na Redação).",
    highFrequencySkills: ["H19 - Analisar estratégias de persuasão", "H20 - Reconhecer pontos de vista e teses confrontadas"],
    overview: "A argumentação busca convencer ou persuadir o interlocutor a aderir a uma tese. No ENEM, avalia-se a capacidade de identificar a tese central, as estratégias de sustentação e os recursos de contra-argumentação.",
    keyConcepts: [
      {
        title: "Tipos de Argumentos",
        content: "• Argumento de Autoridade: Citação de especialistas, instituições consagradas (OMS, IBGE) ou filósofos legitimados.\n• Argumento por Comprovação: Dados estatísticos, pesquisas científicas empíricas e documentos históricos.\n• Argumento de Causa e Consequência: Relação lógica demonstrando os desdobramentos necessários de um evento.\n• Argumento por Exemplificação: Fatos concretos notórios que ilustram a veracidade da tese."
      },
      {
        title: "Contra-argumentação e Refutação",
        content: "Consiste em antecipar a possível objeção do leitor para, em seguida, desconstruí-la ou enfraquecê-la mediante evidências mais robustas. Costuma ser introduzida por conectivos concessivos ('embora', 'conquanto', 'ainda que') e arrematada por fortes conectivos adversativos ('no entanto', 'todavia', 'contudo')."
      },
      {
        title: "Falácias Lógicas mais Comuns",
        content: "• Ad Hominem: Atacar o indivíduo que enuncia em vez de refutar seus argumentos lógicos.\n• Falsa Causa (Post hoc ergo propter hoc): Presumir que, porque B ocorreu após A, A foi a causa direta de B.\n• Generalização Apressada: Concluir uma regra universal a partir de uma amostra minúscula e insuficiente."
      }
    ],
    formulasAndRules: [
      "Estrutura da Argumentação: Tese (Opinião) + Premissas (Justificativas) + Evidências (Dados) = Conclusão",
      "Operadores de Reforço Argumentativo: 'Sobretudo', 'inclusive', 'principalmente', 'não apenas... mas também'."
    ],
    enemTraps: [
      "Confundir o argumento citado como contraponto com a tese principal defendida pelo próprio autor.",
      "Confundir fato (dado objetivo comprovável) com opinião (julgamento de valor subjetivo do enunciador)."
    ],
    mnemonics: "A-C-C-E (Autoridade, Comprovação, Causa-efeito, Exemplificação)."
  },

  // ═══════════════════════════════════════════════════════════════
  // LINGUAGENS: RECURSOS LINGUÍSTICOS E VARIAÇÃO
  // ═══════════════════════════════════════════════════════════════
  "linguagens/recursos-linguisticos": {
    topic: "Recursos da Língua e Variação Linguística",
    area: "linguagens",
    areaName: "Linguagens, Códigos e suas Tecnologias",
    enemRelevance: "Média-Alta. O ENEM não cobra decoreba gramatical de nomenclatura; cobra a gramática em função do sentido do texto.",
    highFrequencySkills: ["H25 - Empregar mecanismos de coesão", "H26 - Avaliar efeitos de sentido provocados por escolhas linguísticas", "H27 - Respeitar a diversidade das variedades linguísticas"],
    overview: "Este tópico articula a gramática aplicada (coesão, operadores, regência e crase) à sociolinguística (combate ao preconceito linguístico e valorização das variedades regionais e sociais).",
    keyConcepts: [
      {
        title: "Coesão Referencial: Anáfora vs. Catáfora",
        content: "• Anáfora: Retomada de um termo já citado no texto por meio de pronomes, sinônimos ou hiperônimos ('Machado publicou Dom Casmurro. O autor carioca...').\n• Catáfora: Antecipação de um termo que ainda será explicitado ('O segredo é este: estudar com constância')."
      },
      {
        title: "Operadores Argumentativos (Conectivos)",
        content: "• Oposição/Adversidade: Mas, porém, contudo, todavia, no entanto (o argumento após o 'mas' é o mais forte).\n• Concessão: Embora, ainda que, conquanto, apesar de que (admite um fato sem que ele mude a conclusão principal).\n• Conclusão: Portanto, logo, destarte, dessarte, por conseguinte.\n• Explicação/Causa: Pois (antes do verbo), porque, já que, visto que."
      },
      {
        title: "Variação Linguística e Preconceito Linguístico",
        content: "A língua varia no tempo (histórica/diacrônica), no espaço geográfico (regional/diatópica), entre grupos sociais e classes (sociocultural/diastrática) e no grau de formalidade da situação (diafásica). Para o ENEM e a linguística moderna, NÃO EXISTE variante certa ou errada em termos biológicos; existem variantes ADEQUADAS ou INADEQUADAS à situação comunicativa."
      },
      {
        title: "Crase na Prática",
        content: "Fusão da preposição 'a' com o artigo 'a' ou demonstrativo 'aquele'. Regra prática: substitua a palavra feminina por uma masculina correspondente; se virar 'ao', tem crase! (Ex: 'Vou à escola' → 'Vou ao colégio' → TEM CRASE). Nunca ocorre crase antes de verbo, palavra masculina e artigo indefinido (um/uma)."
      }
    ],
    formulasAndRules: [
      "Teste da Crase: Palavra feminina → Palavra masculina equivalente. Se resultar 'ao', usa-se acento grave (`à`).",
      "Variação Diatópica: Regional (sotaques e termos regionais como 'mandioca', 'macaxeira', 'aipim').",
      "Variação Diastrática: Social (gírias de grupos profissionais, classes sociais ou faixas etárias)."
    ],
    enemTraps: [
      "Julgar expressões populares regionais como 'erros gramaticais'. No ENEM, a resposta correta valoriza a adequação cultural e a eficácia comunicativa.",
      "Confundir a função de 'pois' antes do verbo (explicativo/causal) com 'pois' entre vírgulas após o verbo (conclusivo)."
    ],
    mnemonics: "Regra do 'Ao': 'Se vou a e volto da, crase há. Se vou a e volto de, crase pra quê?'"
  },

  // ═══════════════════════════════════════════════════════════════
  // CIÊNCIAS HUMANAS: MEIO AMBIENTE
  // ═══════════════════════════════════════════════════════════════
  "humanas/meio-ambiente": {
    topic: "Biomas Brasileiros e Impactos Antrópicos",
    area: "humanas",
    areaName: "Ciências Humanas e suas Tecnologias",
    enemRelevance: "Alta frequência (3 a 5 questões por prova). Integração profunda entre Geografia Física, Geopolítica e Ecologia.",
    highFrequencySkills: ["H26 - Analisar impactos de matrizes energéticas", "H28 - Avaliar apropriação dos recursos naturais e sustentabilidade"],
    overview: "O ENEM aborda as questões socioambientais a partir dos conflitos pelo uso dos recursos: desmatamento na Amazônia e no Cerrado, desertificação no Semiárido, crise hídrica e a geopolítica climática dos acordos internacionais.",
    keyConcepts: [
      {
        title: "Cerrado: A 'Caixa-d'Água' Ameaçada",
        content: "Possui solos profundos e vegetação com raízes pivotantes extensas que alimentam lençóis freáticos e as cabeceiras de 8 grandes bacias hidrográficas (incluindo São Francisco, Prata e Tocantins). O avanço da fronteira agrícola da soja e pecuária no Matopiba causa desmatamento acelerado e compactação do solo, comprometendo o abastecimento hídrico nacional."
      },
      {
        title: "Amazônia e os 'Rios Voadores'",
        content: "A exuberante floresta amazônica evapotranspira bilhões de litros de água por dia. Essas massas de ar úmidas encontram a barreira da Cordilheira dos Andes e são defletidas em direção ao Centro-Oeste, Sudeste e Sul do Brasil, regulando o regime de chuvas que sustenta a agricultura e os reservatórios das hidrelétricas."
      },
      {
        title: "Mata Atlântica e Hotspots de Biodiversidade",
        content: "Conceito de Norman Myers: área com alta taxa de espécies endêmicas (que só existem ali) e que já perdeu mais de 70% de sua cobertura original. No Brasil, Mata Atlântica (resta menos de 12%) e Cerrado são classificados como hotspots globais prioritários para conservação."
      },
      {
        title: "Caatinga e Desertificação",
        content: "Único bioma exclusivamente brasileiro, com vegetação xerófila adaptada ao estresse hídrico. A superexploração de lenha para olarias, o sobrepastoreio caprino e técnicas inadequadas de irrigação provocam a salinização do solo e núcleos graves de desertificação (como em Gilbués/PI e Irauçuba/CE)."
      },
      {
        title: "Matriz Elétrica Brasileira vs. Matriz Energética",
        content: "• Matriz Elétrica (apenas eletricidade): Mais de 80% renovável (hidrelétrica, eólica, biomassa e solar).\n• Matriz Energética (inclui combustíveis de transportes e indústrias): Cerca de 47% renovável, dependente de derivados de petróleo e gás fóssil.\nEm períodos de seca severa, o acionamento emergencial de usinas termelétricas encarece as tarifas (bandeiras) e eleva as emissões de carbono."
      }
    ],
    formulasAndRules: [
      "Hotspot de Biodiversidade: Pelo menos 1.500 plantas vasculares endêmicas + Perda antrópica > 70% da vegetação nativa.",
      "Equilíbrio Hidrológico: Desmatamento → Menos evapotranspiração → Menor infiltração subterrânea → Mais escoamento superficial → Assoreamento e enchentes."
    ],
    enemTraps: [
      "Achar que a Amazônia é o maior emissor de gases do efeito estufa por indústrias. No Brasil, o principal vetor de emissões é a Mudança no Uso da Terra (queimadas e desmatamento ilegal para pecuária e grãos).",
      "Confundir arenização (processo eólico em solos arenosos no RS) com desertificação (processo antrópico/climático severo em zonas semiáridas)."
    ],
    mnemonics: "Hotspots do Brasil: 'MA-CE' (Mata Atlântica e Cerrado)."
  },

  "natureza/evolucao": {
    topic: "Evolução Biológica e Neodarwinismo",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Top mais cobrado em Biologia (especialmente resistência bacteriana e especiação).",
    highFrequencySkills: ["H15 - Mecanismos de evolução e adaptação", "H16 - Genética de populações"],
    overview: "A Teoria Sintética da Evolução unifica a Seleção Natural de Darwin com a Genética Mendeliana e a Biologia Molecular. A variabilidade surge por mutação ao acaso e recombinação gênica; a seleção natural atua como filtro direcional favorecendo o sucesso reprodutivo diferencial.",
    keyConcepts: [
      {
        title: "Seleção Natural vs Lamarquismo",
        content: "Lamarck postulava que o meio cria a necessidade e induz mutações orientadas (uso e desuso + herança dos caracteres adquiridos). No Neodarwinismo, a variação pré-existe ao acaso na população; o meio ambiental atua selecionando os fenótipos mais aptos a deixar descendentes férteis."
      },
      {
        title: "Resistência a Antibióticos e Pesticidas",
        content: "O antibiótico ou pesticida NÃO induz a mutação de resistência! As bactérias resistentes já existiam previamente em frequência minúscula na colônia. O medicamento elimina as sensíveis (seleção direcional) e permite a proliferação desimpedida das linhagens resistentes."
      },
      {
        title: "Especiação Alopátrica e Simpátrica",
        content: "Alopátrica: Barreira geográfica física divide a população -> acúmulo independente de mutações e pressões seletivas -> ISOLAMENTO REPRODUTIVO definitivo. Simpátrica: Ocorre no mesmo território geográfico (frequente em plantas por poliploidia 3n, 4n, 6n)."
      },
      {
        title: "Homologia vs Analogia",
        content: "Homologia (Irradiação Adaptativa): mesma origem embrionária e ancestralidade comum com funções divergentes (braço humano, pata do cavalo, asa do morcego). Analogia (Convergência Evolutiva): origens embrionárias distintas com formas semelhantes por pressões ambientais análogas (tubarão e golfinho; asa da ave e asa do inseto)."
      }
    ],
    formulasAndRules: [
      "Equilíbrio de Hardy-Weinberg: p + q = 1  |  p² + 2pq + q² = 1 (p = alelo A, q = alelo a; 2pq = heterozigotos).",
      "Número de meias-vidas de isótopo: k = tempo_total / meia-vida  ⟹  m = m0 / 2^k."
    ],
    enemTraps: [
      "Nunca marque alternativas que digam que 'o ser vivo se adaptou para sobreviver' (visão teleológica lamarquista). O correto é 'sobreviveu porque já era adaptado'.",
      "Não confunda homem descendente do macaco: a ciência afirma ancestral comum compartilhado, e não descendência direta de primatas atuais."
    ],
    mnemonics: "Fontes de Variabilidade: 'Mutações criam; Meiose e Sexo embaralham; Seleção Natural filtra'."
  },

  "natureza/solucoes-equilibrio": {
    topic: "Equilíbrio Químico e Soluções",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Pilar obrigatório em Química (Le Chatelier, pH e Tampão Sanguíneo caem todo ano).",
    highFrequencySkills: ["H24 - Equilíbrios em solução aquosa", "H25 - Controle de pH e soluções"],
    overview: "Estudo dos sistemas reversíveis, perturbações pelo Princípio de Le Chatelier, cálculo de pH/pOH, reações de neutralização, diluição e propriedades coligativas.",
    keyConcepts: [
      {
        title: "Princípio de Le Chatelier",
        content: "Quando um equilíbrio sofre perturbação externa, o sistema se desloca no sentido de anular essa perturbação: • Aumentar [reagente] desloca para a DIREITA; • Aumentar pressão desloca para o MENOR volume gasoso; • Aumentar temperatura desloca no sentido ENDOTÉRMICO (ΔH > 0)."
      },
      {
        title: "Tampão Sanguíneo e Alcalose/Acidose",
        content: "CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3-. Hiperventilação elimina CO2 -> equilíbrio desloca para a ESQUERDA -> consome H+ -> pH sobe (Alcalose respiratória). Hipoventilação retém CO2 -> desloca para a DIREITA -> gera H+ -> pH cai (Acidose respiratória)."
      },
      {
        title: "Diluição e Mistura de Soluções",
        content: "Diluição conserva a massa de soluto: C1 · V1 = C2 · V2. Na titulação ácido-base estequiométrica: n_H+ = n_OH- ⟹ M_ácido · V_ácido · (nº de H+) = M_base · V_base · (nº de OH-)."
      },
      {
        title: "Hidrólise Salina",
        content: "O sal herda o lado FORTE dos reagentes de origem: Sal de ácido forte + base fraca = Ácido (pH < 7, ex: NH4Cl). Sal de ácido fraco + base forte = Básico (pH > 7, ex: NaHCO3). Sal de ácido forte + base forte = Neutro (pH = 7, ex: NaCl)."
      }
    ],
    formulasAndRules: [
      "Concentração em Quantidade de Matéria: M = n / V = m / (MM · V).",
      "Escala de pH: pH = -log[H+]  |  pOH = -log[OH-]  |  pH + pOH = 14 (a 25 °C).",
      "Produto de Solubilidade: Kps = [A+]^a · [B-]^b (sólidos não entram na fórmula).",
      "Diluição: C1 · V1 = C2 · V2."
    ],
    enemTraps: [
      "Catalisador NÃO desloca equilíbrio químico nem aumenta rendimento de produtos; apenas encurta o tempo para atingir o equilíbrio!",
      "Sólidos puros e líquidos puros NÃO entram na expressão de Kc nem Kp."
    ],
    mnemonics: "Le Chatelier Térmico: 'Esquentou? Corre pro Endotérmico! Esfriou? Vai pro Exotérmico!'."
  },

  "matematica/progressoes": {
    topic: "Progressões Aritméticas e Geométricas (PA e PG)",
    area: "matematica",
    areaName: "Matemática",
    enemRelevance: "Tema transversal de alta pontuação na TRI (modelagem linear e exponencial).",
    highFrequencySkills: ["H15 - Reconhecer padrões em sequências", "H16 - Modelagem algébrica de PA e PG"],
    overview: "Compreensão de sequências numéricas recursivas: Progressão Aritmética (variação aditiva constante / função afim) e Progressão Geométrica (variação multiplicativa constante / função exponencial).",
    keyConcepts: [
      {
        title: "Progressão Aritmética (PA)",
        content: "Termo geral: an = a1 + (n - 1) · r. A razão r é constante (r = an - an-1). Soma dos termos: Sn = [(a1 + an) · n] / 2. Aplicação: fileiras de cadeiras, degraus de escada, planos de treino linear, amortização SAC."
      },
      {
        title: "Progressão Geométrica (PG)",
        content: "Termo geral: an = a1 · q^(n - 1). A razão q é o quociente entre termos sucessivos (q = an / an-1). Soma de PG finita: Sn = a1 · (q^n - 1) / (q - 1). Aplicação: proliferação celular, contágio viral, juros compostos, decaimento radioativo."
      },
      {
        title: "Soma de PG Infinita Convergente",
        content: "Para progressões geométricas decrescentes onde a razão satisfaz |q| < 1 (como 1/2, 1/3, 0,1), a soma de infinitos termos converge para um valor finito exato: S∞ = a1 / (1 - q). Aplicação: fractais, saltos amortecidos de bola de borracha, dízimas periódicas."
      },
      {
        title: "Interpolação de Termos",
        content: "Inserir k termos entre dois extremos a1 e an cria uma sequência com n = k + 2 termos e (k + 1) intervalos (vãos). A razão é: r = (an - a1) / (k + 1)."
      }
    ],
    formulasAndRules: [
      "PA: an = a1 + (n - 1) · r  |  Sn = [(a1 + an) · n] / 2.",
      "PG: an = a1 · q^(n - 1)  |  Sn = a1 · (q^n - 1) / (q - 1)  |  S∞ = a1 / (1 - q) para |q| < 1.",
      "Média Aritmética (PA de 3 termos): b = (a + c) / 2  |  Média Geométrica (PG de 3 termos): b² = a · c."
    ],
    enemTraps: [
      "Não confunda (n - 1) com n no termo geral da PA e PG: do 1º ao 20º termo são 19 razões!",
      "Ao interpolar k postes ou mudas de árvores, divida por (k + 1) vãos, não por k!"
    ],
    mnemonics: "PA soma (linha reta); PG multiplica (curva exponencial que explode)."
  },
  "linguagens/variacao-linguistica": {
    topic: "Variação Linguística e Preconceito",
    area: "linguagens",
    areaName: "Linguagens e Códigos",
    enemRelevance: "Top 1 Absoluto em Linguagens: mais de 4 questões por prova sobre adequação, dialetos e sociolinguística.",
    highFrequencySkills: [
      "H28 - Reconhecer a função e o valor social das variedades linguísticas",
      "H29 - Identificar preconceitos e juízos de valor linguísticos",
      "H30 - Analisar a adequação do registro ao contexto comunicativo"
    ],
    overview: "A sociolinguística comprova que nenhuma língua viva é estática ou homogênea. As línguas variam no espaço geográfico (diatópica), no tempo histórico (diacrônica), nos estratos sociais e faixas etárias (diastrática) e nas situações de formalidade (diafásica). O preconceito linguístico é um preconceito social mascarado que desvaloriza formas faladas por grupos historicamente subordinados.",
    keyConcepts: [
      {
        title: "Variação Diatópica (Regional)",
        content: "Diferenças de vocabulário, sintaxe e pronúncia (sotaque) condicionadas pela geografia territorial (ex: dialetos caipira, mineiro, gaúcho, nordestino, amazônico)."
      },
      {
        title: "Variação Diacrônica (Histórica)",
        content: "Transformações morfológicas e fonéticas sofridas pela língua ao longo dos séculos (ex: 'Vossa Mercê' -> 'vossemecê' -> 'você' -> 'cê')."
      },
      {
        title: "Variação Diastrática (Social)",
        content: "Marcas linguísticas associadas à classe socioeconômica, escolaridade, geração/idade (gírias juvenis) e grupos de pertencimento comunitário."
      },
      {
        title: "Variação Diafásica (Situacional/Estilística)",
        content: "Níveis de registro que oscilam entre o padrão formal monitorado e o coloquial espontâneo conforme os interlocutores e o ambiente social."
      },
      {
        title: "Adequação Linguística vs. 'Certo e Errado'",
        content: "A sociolinguística substitui o binômio punitivo 'certo vs errado' pela adequação do registro ao contexto de comunicação (a metáfora do guarda-roupa de Marcos Bagno)."
      },
      {
        title: "Sistematicidade da Fala Popular",
        content: "A concordância em 'Os menino foi' obedece à regra lógica de marcação de plural no primeiro constituinte determinante, operando economia articulatória sem prejuízo do sentido."
      }
    ],
    formulasAndRules: [
      "Regra de Ouro: Não existe variedade linguística superior ou inferior em si; toda variante é legítima e atende à sua comunidade.",
      "Padrão Escrito Formal: A redação do ENEM exige a norma padrão culta com concordância explícita e pronomes monitorados.",
      "Adequação Pragmática: Falar difícil em um almoço de família é tão inadequado quanto usar gírias de bate-papo em uma audiência judiciária solene."
    ],
    enemTraps: [
      "Alternativas preconceituosas que afirmam que uma forma popular decorre de 'preguiça', 'ignorância' ou 'corrupção da língua' SEMPRE são incorretas no ENEM!",
      "Não confunda variação diatópica (região geográfica) com diafásica (nível de formalidade da situação)."
    ],
    mnemonics: "Diatópica = Topografia/Região | Diacrônica = Cronômetro/Tempo | Diastrática = Estrato Social/Classe | Diafásica = Fase/Situação."
  },
  "linguagens/artes-visuais-musica": {
    topic: "Artes Visuais, Música Brasileira e Expressões Culturais",
    area: "linguagens",
    areaName: "Linguagens e Códigos",
    enemRelevance: "Relevância Crítica: análise de manifestações plásticas, patrimônio imaterial, movimentos musicais e artes cênicas.",
    highFrequencySkills: [
      "H12 - Reconhecer diferentes funções da arte e do trabalho da produção artística",
      "H13 - Analisar o diálogo entre arte, sociedade e momento histórico",
      "H14 - Valorizar o patrimônio cultural brasileiro material e imaterial"
    ],
    overview: "A arte brasileira é um campo de permanente diálogo entre tradição, modernidade, denúncia social e afirmação identitária. Das matrizes afro-indígenas e do Barroco colonial às vanguardas da Tropicália, Cinema Novo, Grafite urbano e Hip-Hop periférico, a criação estética opera como potente vetor de intervenção cívica e reflexão ética.",
    keyConcepts: [
      {
        title: "A MPB e a Resistência à Censura",
        content: "O uso de metáforas, duplos sentidos e alegorias por Chico Buarque, Elis Regina e Gilberto Gil para criticar a ditadura militar e o AI-5 sem ser barrado pela censura prévia governamental."
      },
      {
        title: "A Tropicália e a Antropofagia Sonora (1967-1968)",
        content: "Deglutição de elementos da vanguarda pop internacional (guitarras elétricas) fundidos a ritmos folclóricos tradicionais (baião, berimbau, samba) contra o purismo ingênuo."
      },
      {
        title: "Arte Urbana: Grafite vs. Pichação",
        content: "A legitimação do grafite figurativo como bem cultural e atração de mercado versus a criminalização da pichação tipográfica como grito insurgente das periferias."
      },
      {
        title: "Teatro do Oprimido de Augusto Boal",
        content: "O conceito de 'espect-ator', que sobe ao palco para propor soluções e ensaiar a superação real de opressões sociais cotidianas, transformando o teatro em ação cívica."
      },
      {
        title: "Patrimônio Cultural Imaterial",
        content: "Saberes, celebrações e formas de expressão vivas (Cordel, Capoeira, Frevo, Bumba Meu Boi) protegidas pelo IPHAN e pela Unesco como patrimônio identitário."
      },
      {
        title: "Arte Contemporânea e Participação",
        content: "Ruptura com o pedestal e com o quadro tradicional (Lygia Clark, Hélio Oiticica e Cildo Meireles), transformando o espectador em participante ativo da obra."
      }
    ],
    formulasAndRules: [
      "Princípio Estético: Na arte contemporânea, o conceito, o processo e a participação física do espectador superam a mera perfeição técnica do objeto inanimado.",
      "Patrimônio Imaterial: Não é a pedra de um monumento; é o saber vivo transmitido de geração a geração no corpo e na memória da comunidade."
    ],
    enemTraps: [
      "Não julgue manifestações artísticas populares ou contemporâneas sob o filtro de 'belo clássico renascentista'; o ENEM avalia o conceito, a função social e a potência crítica da obra!",
      "A capoeira e o samba já foram tipificados como crimes no Código Penal republicano; o status de patrimônio é fruto de luta e resistência histórica contra o racismo de Estado."
    ],
    mnemonics: "A Tropicália deglute o mundo com berimbau e guitarra; o Teatro do Oprimido ensaia no palco a coragem da vida real."
  },
  "humanas/historia-geral": {
    topic: "História Geral: Antiguidade a Revoluções Modernas",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Relevância Alta: Antiguidade Clássica, Feudalismo, Renascimento, Revoluções Burguesas, Imperialismo e Conflitos do Século XX.",
    highFrequencySkills: [
      "H11 - Identificar registros sobre a cidadania e a participação política em diferentes sociedades",
      "H12 - Analisar o papel da religião, ciência e ideologia em formações históricas",
      "H13 - Analisar as contradições do desenvolvimento econômico e lutas sociais"
    ],
    overview: "A História Geral estuda a evolução das relações de poder, trabalho, cidadania e pensamento no Ocidente. Da democracia direta excludente de Atenas e das lutas agrárias da plebe em Roma, passando pela servidão feudal e o Renascimento, até as revoluções burguesas (1789), o maquinismo fabril do século XIX e os horrores dos totalitarismos e guerras mundiais do século XX.",
    keyConcepts: [
      {
        title: "Atenas e a Cidadania Excludente",
        content: "Isonomia e isegoria diretas na Ágora sustentadas no trabalho de escravizados e excluindo categoricamente mulheres e estrangeiros residentes (metecos)."
      },
      {
        title: "República Romana e Luta de Classes",
        content: "Patrícios oligarcas latifundiários versus a plebe empobrecida; as reformas agrárias propostas e frustradas dos tribunos da plebe Tibério e Caio Graco."
      },
      {
        title: "Feudalismo Medieval",
        content: "Vassalagem (pacto militar de honra recíproca entre nobres livres) versus Servidão (sujeição camponesa à terra com pagamento de corveia, talha e banalidades)."
      },
      {
        title: "Renascimento e Humanismo",
        content: "Antropocentrismo e racionalismo empírico (Da Vinci, Galileu) rompendo com o princípio dogmático escolástico de autoridade teológica."
      },
      {
        title: "Reforma Protestante e Mercantilismo",
        content: "Lutero (justificação pela fé), Calvino (predestinação e ascese do trabalho analisada por Weber) e o absolutismo de direito divino (Bossuet) alicerçado no metalismo e protecionismo comercial."
      },
      {
        title: "A Dupla Revolução (Hobsbawm)",
        content: "A Revolução Francesa (1789: fim dos privilégios estamentais e igualdade civil perante a lei) e a Revolução Industrial inglesa (maquinismo, proletariado, ludismo e cartismo)."
      },
      {
        title: "Imperialismo do Século XIX e Partilha da África",
        content: "A Conferência de Berlim de 1885 recortando fronteiras artificiais com o pretexto racista do 'fardo do homem branco' e do darwinismo social."
      },
      {
        title: "O Século XX: Guerras e Totalitarismos",
        content: "A carnificina das trincheiras na Primeira Guerra; a Revolução Russa de 1917 ('Pão, Paz e Terra'); a Crise de 1929 e o New Deal keynesiano; a engenharia do extermínio totalitário nazista e o Julgamento de Nuremberg."
      }
    ],
    formulasAndRules: [
      "Regra Histórica: Nenhum sistema político do passado universalizava direitos: a cidadania moderna universal de 1948 é uma conquista árdua forjada contra séculos de exclusão.",
      "Equação da Revolução Francesa: Queda da Bastilha + Declaração de 1789 = Fim dos privilégios hereditários de nascimento do Clero e da Nobreza."
    ],
    enemTraps: [
      "Cuidado para não anacronizar: a democracia ateniense não era representativa nem elegia deputados; era direta por assembleia de cidadãos presentes!",
      "Não confunda escravidão clássica com servidão feudal: o servo não era vendido individualmente no mercado, mas estava preso à gleba com obrigações tributárias senhoriais."
    ],
    mnemonics: "Atenas vota na praça mas exclui a maioria; a França derruba o sangue nobre em nome da lei igualitária."
  },

  "natureza/fisiologia-humana": {
    topic: "Fisiologia Humana e Imunologia",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Assunto mais recorrente de Biologia Médica no ENEM (Vacina vs. Soro, Néfrons/ADH, Insulina/Glucagon e Sistema Cardiovascular).",
    highFrequencySkills: ["H14 - Mecanismos de regulação e defesa do corpo humano", "H15 - Homeostase e processos biológicos em situações clínicas"],
    overview: "Estudo integrado do funcionamento dos sistemas orgânicos humanos, mecanismos de retroalimentação homeostática (feedback negativo), controle endócrino e respostas imunológicas inata e adaptativa.",
    keyConcepts: [
      {
        title: "Imunização Ativa vs. Passiva (Vacinas vs. Soros)",
        content: "Vacina = Imunização Ativa (antígenos atenuados/inativados ou RNAm; induz síntese própria de anticorpos e diferenciação de linfócitos de memória; efeito preventivo e duradouro). Soro = Imunização Passiva (anticorpos prontos policlonais heterólogos; efeito curativo emergencial e rápido para envenenamento e tétano agudo; sem formação de memória imunológica duradoura)."
      },
      {
        title: "Excreção e Osmorregulação Renal (Néfron e ADH)",
        content: "Filtração glomerular no corpúsculo de Malpighi (impermeável a proteínas como albumina). Reabsorção ativa de 100% da glicose no túbulo contorcido proximal (via cotransporte SGLT2). ADH (vasopressina, da neuro-hipófise) insere aquaporinas nos ductos coletores aumentando reabsorção de água e concentrando a urina. Aldosterona (córtex da adrenal) reabsorve Na+ e secreta K+."
      },
      {
        title: "Homeostase Glicêmica Pancreática",
        content: "Ilhotas de Langerhans: Células beta secretam INSULINA (anabólica, hipoglicemiante, promove captação de glicose via GLUT4 e glicogênese hepática/muscular). Células alfa secretam GLUCAGON (catabólico, hiperglicemiante, ativa glicogenólise e gliconeogênese no fígado). No Diabetes Mellitus descompensado, a glicosúria provoca diurese osmótica (poliúria e polidipsia)."
      },
      {
        title: "Ciclo Cardíaco e Circulação de Gases",
        content: "Coração com 4 cavidades e circulação dupla e completa. Sístole ventricular fecha valvas atrioventriculares (tricúspide e mitral = 1ª bulha cardíaca 'tum') e ejeta sangue na aorta e tronco pulmonar. Transporte de CO2: ~70% como íon bicarbonato (HCO3-) dissolvido no plasma catalisado pela anidrase carbônica eritrocitária. Efeito Bohr: acidose tecidual reduz a afinidade da hemoglobina por O2, facilitando sua liberação."
      }
    ],
    formulasAndRules: [
      "Equação do Tampão Respiratório: CO2 + H2O ⇌ H2CO3 ⇌ H+ + HCO3- (hiperventilação expira CO2 e eleva o pH sanguíneo).",
      "Pressão Arterial: PA = Débito Cardíaco (DC) × Resistência Vascular Periférica (RVP).",
      "Potencial de Ação: Despolarização = Influxo de Na+; Repolarização = Efluxo de K+; Repouso mantido pela Na+/K+-ATPase."
    ],
    enemTraps: [
      "Bile NÃO possui enzimas digestivas! Sua função é exclusivamente físico-química tensoativa: emulsificar gotículas lipídicas para ampliar a área da lipase pancreática.",
      "Linfócitos T NÃO sintetizam anticorpos. Apenas plasmócitos (linfócitos B ativados) produzem imunoglobulinas.",
      "O principal estímulo fisiológico para a ventilação é o excesso de CO2 no sangue detectado pelo bulbo (acidose), e NÃO a falta de oxigênio."
    ],
    mnemonics: "Vacina ativa memória da vacaria; Soro salva na emergência do veneno sem memória futura."
  },

  "natureza/fisica-moderna": {
    topic: "Física Moderna, Radiações e Energia Nuclear",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Competência 6 (H20, H21, H22): Frequência crescente com foco em tecnologias do cotidiano, biofísica médica (PET-scan, radioterapia, cintilografia), matrizes limpas (fotovoltaica e fusão) e radioproteção.",
    highFrequencySkills: ["H20 - Caracterizar causas ou efeitos de movimentos de partículas subatômicas", "H21 - Avaliar processos de geração de energia nuclear e renovável", "H22 - Compreender a interação da radiação ionizante com a matéria e tecidos vivos"],
    overview: "A Física Moderna no ENEM privilegia a compreensão fenomenológica e aplicada: o efeito fotoelétrico em células fotovoltaicas, a dualidade onda-partícula em microscopia eletrônica de alta resolução, o espectro eletromagnético e o limiar de ionização biológica, as leis de decaimento nuclear e as vantagens ecológicas da transição para novas matrizes energéticas.",
    keyConcepts: [
      {
        title: "Efeito Fotoelétrico e Fótons de Einstein",
        content: "A luz é absorvida e emitida em pacotes discretos (fótons) de energia E = h · f. Para ejetar um elétron do metal, o fóton individual deve possuir energia superior à função trabalho do material (h · f ≥ W). Aumentar a intensidade da fonte luminosa apenas aumenta a taxa de fótons por segundo (corrente elétrica), mas NÃO altera a velocidade máxima dos fotoelétrons nem permite ejeção abaixo da frequência de corte."
      },
      {
        title: "Dualidade Onda-Partícula e Microscopia Eletrônica",
        content: "Pela relação de de Broglie (λ = h / p), qualquer partícula material com momento linear exibe propriedades ondulatórias. Elétrons acelerados por alta voltagem possuem comprimentos de onda picométricos (milhares de vezes menores que os da luz visível), contornando o limite de difração óptica e permitindo que o microscópio eletrônico atinja resolução atômica."
      },
      {
        title: "Radiações Ionizantes vs. Não-Ionizantes e Decaimento",
        content: "Radiações ionizantes (raios X e gama) possuem energia fotônica suficiente (> 10-12 eV) para arrancar elétrons e quebrar ligações de DNA. Emissões nucleares: • Alfa (α): núcleos de hélio (+2e, 4u), altíssimo poder de ionização, mas barradas por folha de papel. • Beta (β): elétrons ou pósitrons nucleares, alcance intermediário (barradas por alumínio). • Gama (γ): ondas eletromagnéticas puras, máximo poder de penetração (exigem blindagem espessa de chumbo ou concreto)."
      },
      {
        title: "Fissão, Fusão e Aplicações Biomédicas",
        content: "• Fissão Nuclear: quebra de núcleos de U-235 por nêutrons térmicos controlada por barras de cádmio/boro. • Fusão Nuclear: união de Deutério e Trítio gerando Hélio e energia limpa sem resíduos de alta atividade (reatores Tokamak). • Medicina Nuclear: radiofármacos de meia-vida curta (Tecnécio-99m) e Tomografia por Emissão de Pósitrons (PET-Scan), na qual a aniquilação pósitron-elétron gera dois fótons gama colineares a 180° para mapeamento oncológico."
      }
    ],
    formulasAndRules: [
      "Energia do Fóton: E = h · f = (h · c) / λ.",
      "Efeito Fotoelétrico: E_cin_max = h · f - W = e · V_corte.",
      "Comprimento de de Broglie: λ = h / (m · v).",
      "Equivalência Massa-Energia de Einstein: E = m · c².",
      "Decaimento por Meia-Vida: A(t) = A₀ / 2^n, com n = tempo / meia-vida.",
      "Atenuação Exponencial em Blindagem: I = I₀ / 2^k, com k = espessura / CSA."
    ],
    enemTraps: [
      "Achar que aumentar a intensidade (brilho) de uma luz com frequência abaixo do corte fará o metal ejetar elétrons: a ejeção depende da energia individual de cada fóton (frequência) e não do volume de luz!",
      "Confundir irradiação com contaminação: alimentos esterilizados por raios gama de Cobalto-60 NÃO se tornam radioativos; apenas foram expostos temporariamente à energia ionizante.",
      "Achar que ondas de celular (5G) ou micro-ondas são ionizantes: ambas pertencem à faixa não-ionizante e não possuem energia para quebrar DNA diretamente."
    ],
    mnemonics: "Alfa ioniza e para no papel; Gama atravessa até o chapéu; no fotoelétrico a frequência dá a força e o brilho só multiplica a moça."
  },

  "matematica/geometria-plana": {
    topic: "Geometria Plana e Polígonos",
    area: "matematica",
    areaName: "Matemática",
    enemRelevance: "Competência 2 do ENEM: Áreas de figuras planas, Teorema de Pitágoras e Semelhança de Triângulos caem em pelo menos 6 a 8 questões anualmente.",
    highFrequencySkills: ["H6 - Identificar características de polígonos", "H7 - Calcular áreas de superfícies planas", "H8 - Resolver problemas envolvendo relações métricas e trigonometria"],
    overview: "Cálculo de perímetros e áreas de polígonos e círculos, propriedades métricas no triângulo retângulo, semelhança geométrica e razões proporcionais lineares e quadráticas em contextos cotidianos.",
    keyConcepts: [
      {
        title: "Fórmulas Fundamentais de Áreas",
        content: "Triângulo: A = (b · h)/2 | Triângulo Equilátero: A = (L²√3)/4 | Triângulo com Ângulo: A = (a · b · sen θ)/2 | Trapézio: A = [(B + b) · h]/2 | Losango: A = (D · d)/2 | Círculo: A = π · R² | Coroa Circular: A = π · (R² - r²)."
      },
      {
        title: "Teorema de Pitágoras e Relações Métricas",
        content: "Em triângulos retângulos: a² = b² + c² (hipotenusa 'a'). Relações métricas com projeções m e n: h² = m · n (altura ao quadrado é a média geométrica das projeções); a · h = b · c; b² = a · m; c² = a · n. Ternos pitagóricos famosos para memorizar: 3-4-5, 5-12-13, 8-15-17 e 7-24-25."
      },
      {
        title: "Semelhança e Razões Lineares vs. Áreas",
        content: "Se a razão de semelhança linear entre duas figuras é k, então a razão entre seus perímetros é k, e a razão entre suas áreas é k²! Exemplo: se uma maquete está na escala 1:100 (k = 1/100), a área real é multiplicada por 100² = 10.000."
      },
      {
        title: "Polígonos Regulares e Pavimentação",
        content: "Soma dos ângulos internos: S_i = (n - 2) · 180°. Ângulo interno: a_i = S_i / n. Ângulo externo: a_e = 360° / n. Número de diagonais: d = [n · (n - 3)] / 2. Apenas triângulos equiláteros (60°), quadrados (90°) e hexágonos regulares (120°) ladrilham o plano sozinhos porque seus ângulos são divisores exatos de 360°."
      }
    ],
    formulasAndRules: [
      "Comprimento da Circunferência: C = 2 · π · R.",
      "Área do Hexágono Regular: A = 6 × (L²√3 / 4) = 3L²√3 / 2.",
      "Fórmula de Heron: A = √[p(p - a)(p - b)(p - c)], onde p = (a + b + c)/2.",
      "Base Média do Trapézio: B_m = (Base maior + Base menor) / 2."
    ],
    enemTraps: [
      "Nunca esqueça de elevar a escala linear ao quadrado quando calcular áreas reais: 1 cm : 200 m linear equivale a 1 cm² : 40.000 m² de área!",
      "Não confunda coroa circular π(R² - r²) com π(R - r)². (30² - 20² = 500 ≠ 10² = 100).",
      "No paralelogramo, a área é simplesmente base × altura perpendicular, SEM dividir por 2."
    ],
    mnemonics: "Trapézio soma as bases e parte ao meio; Pitágoras quadra os catetos pro topo inteiro."
  },

  "humanas/brasil-imperio": {
    topic: "Brasil Império (Primeiro Reinado, Regências e Segundo Reinado)",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Eixo estrutural da História do Brasil (Constituição de 1824, Período Regencial, Café, Lei de Terras de 1850 e Abolição).",
    highFrequencySkills: ["H11 - Compreender a formação do Estado Nacional brasileiro", "H12 - Analisar as contradições políticas e institucionais do Império", "H13 - Avaliar o impacto das transformações socioeconômicas e do cativeiro"],
    overview: "Análise da construção do Estado monárquico brasileiro, do conflito entre centralismo e federalismo, da manutenção da ordem latifundiária e escravocrata, e dos processos que levaram à crise da monarquia e à Proclamação da República.",
    keyConcepts: [
      {
        title: "Primeiro Reinado e Carta de 1824",
        content: "D. Pedro I dissolveu a Constituinte de 1823 ('Noite da Agonia') e outorgou a Constituição de 1824. Quatro poderes com primazia do Poder Moderador (privativo do Imperador, sagrado e inviolável). Voto censitário e indireto. Padroado e beneplácito subordinavam a Igreja. Reações liberais: Confederação do Equador (1824, Frei Caneca). Guerra da Cisplatina e crise econômica levaram à abdicação em 7 de abril de 1831."
      },
      {
        title: "Período Regencial (1831–1840): Avanço e Regresso",
        content: "Criação da Guarda Nacional (1831) entregou poder militar aos latifundiários ('coronéis'). Ato Adicional de 1834 descentralizou poder criando Assembleias Provinciais. Eclosão de revoltas provinciais: Cabanagem (Pará, massas populares ribeirinhas), Revolta dos Malês (Bahia, 1835, escravizados islâmicos letrados), Farroupilha (RS, estancieiros criadores de gado e charque), Balaiada (MA). O Golpe da Maioridade (1840) antecipou o reinado de D. Pedro II aos 14 anos para restaurar a ordem."
      },
      {
        title: "Segundo Reinado: Café e a Lei de Terras de 1850",
        content: "Sistema de 'Parlamentarismo às Avessas': o Imperador escolhia o Primeiro-Ministro pelo Poder Moderador, alternando Liberais ('Luzias') e Conservadores ('Saquaremas'). Marcha do café: Vale do Paraíba (escravista arcaico, solo esgotado) para o Oeste Paulista (terra roxa, ferrovias, imigração italiana pelo colonato). Em setembro de 1850: Lei Eusébio de Queirós extinguiu o tráfico transatlântico e a Lei de Terras nº 601 transformou a terra em mercadoria cara por compra, impedindo o acesso à posse por ex-escravizados e imigrantes."
      },
      {
        title: "Crise do Trono e Proclamação da República (1889)",
        content: "A Guerra do Paraguai (1864–1870) politizou o Exército Brasileiro, que adotou o positivismo (Benjamin Constant) e passou a rejeitar a monarquia. A tríplice crise: 1. Questão Religiosa (prisão de bispos em 1872); 2. Questão Militar (conflito entre oficiais e políticos civis); 3. Questão Abolicionista: após a Lei Áurea (1888) sem indenização, os latifundiários do Vale do Paraíba abandonaram a monarquia ('republicanos de última hora'). Em 15 de novembro de 1889, Deodoro da Fonseca e os militares proclamaram a República."
      }
    ],
    formulasAndRules: [
      "Sequência Gradualista das Leis Abolicionistas: 1850 (Eusébio de Queirós) ⟹ 1871 (Ventre Livre) ⟹ 1885 (Sexagenários) ⟹ 1888 (Lei Áurea).",
      "Poder Moderador = Quarto poder discricionário que nomeava ministros e dissolvia a Câmara sem prestar contas a ninguém.",
      "Lei de Terras de 1850 = Fim da posse gratuita; terra pública só se adquire com pagamento em dinheiro à vista."
    ],
    enemTraps: [
      "A Constituição de 1824 foi OUTORGADA (imposta) por D. Pedro I, e não promulgada por assembleia eleita.",
      "A Lei do Ventre Livre não libertava a criança imediatamente para viver com autonomia: o fazendeiro podia explorar seu trabalho até os 21 anos!",
      "A Proclamação da República em 1889 não contou com ampla participação popular: foi um golpe militar articulado com a oligarquia cafeeira ('o povo assistiu bestializado')."
    ],
    mnemonics: "Avanço liberal descentralizou nas regências; o café marchou pro oeste e o Exército derrubou a Coroa em 89."
  },

  "linguagens/coesao-coerencia": {
    topic: "Coesão, Coerência e Conectivos",
    area: "linguagens",
    areaName: "Linguagens e Códigos",
    enemRelevance: "Pilar da Competência 7 de Linguagens e da Competência 4 da Redação do ENEM (200 pontos obrigatórios de operadores interparágrafos).",
    highFrequencySkills: ["H26 - Identificar recursos de coesão textual", "H27 - Analisar a força argumentativa de conectores"],
    overview: "Estudo sistemático dos recursos de amarração superficial (coesão referencial e sequencial) e de unidade de sentido profunda (coerência global, não contradição e intencionalidade discursiva).",
    keyConcepts: [
      {
        title: "Coesão Referencial: Anáfora, Catáfora e Hiperonímia",
        content: "Anáfora = retomada de termo já expresso no texto (ex: pronome 'ele', 'isso', elipse ou hiperônimo como 'o órgão' para retomar o Ministério). Catáfora = antecipação de um termo a ser esclarecido (ex: 'o dilema é este: agir ou omitir-se'). Encapsulamento = síntese de oração inteira em um único substantivo avaliativo (ex: 'Essa postura inaceitável')."
      },
      {
        title: "Operadores Argumentativos e Orientação Discursiva",
        content: "Os conectivos direcionam a interpretação do leitor: • Oposição/Quebra de expectativa: contudo, todavia, no entanto. • Concessão (admite ressalva sem anular o fato): embora, conquanto, ainda que. • Causa (motivo originário): visto que, já que, dado que, porquanto. • Conclusão (efeito/decorrência lógica): portanto, logo, por conseguinte, destarte. • Adição enfática: não só... como também, ademais, outrossim."
      },
      {
        title: "Coerência Textual e Não Contradição",
        content: "A coerência é a harmonia de sentido global construída na interação entre autor, texto e leitor (Koch e Travaglia). Exige respeito ao princípio da não contradição, continuidade temática, progressão linear de ideias e adequação ao conhecimento de mundo compartilhado. Quebras de coerência podem ser usadas intencionalmente na literatura e na publicidade para criar humor e ironia."
      },
      {
        title: "Crase e Paralelismo Sintático no Padrão Formal",
        content: "Crase = fusão da preposição 'a' com artigo feminino 'a' (A + A = À). Proibida antes de verbos ('a partir de'), palavras masculinas e pronomes indefinidos. Facultativa antes de nomes femininos, possessivos femininos singulares e após 'até'. Paralelismo sintático exige que termos coordenados compartilhem a mesma estrutura gramatical (ex: 'visa à melhoria e à expansão', e não 'visa a melhorar e à expansão')."
      }
    ],
    formulasAndRules: [
      "Operadores Interparágrafos da Redação: D1 = 'A princípio,' / 'Em primeiro plano,'; D2 = 'Ademais,' / 'Outrossim,'; Conclusão = 'Portanto,' / 'Destarte,'.",
      "Regra do Onde: 'Onde' só se refere a lugar físico palpável (ex: a cidade onde moro). Para abstrações temporais ou conceituais, use 'em que' ou 'no qual'.",
      "À medida que = Proporção gradual; Na medida em que = Causa ('já que'). A forma 'à medida em que' é considerada incorreta pela norma padrão."
    ],
    enemTraps: [
      "Não confunda 'porquanto' (causa/porque) com 'conquanto' (concessão/embora) nem com 'portanto' (conclusão/logo).",
      "Nunca use crase antes de verbo no infinitivo nem antes de palavras masculinas ('andar a cavalo', 'pagar a prazo').",
      "Não use 'onde' para retomar 'sociedade', 'livro', 'época' ou 'situação' na sua redação dissertativa."
    ],
    mnemonics: "Anáfora olha pra trás, catáfora anuncia a vez; o conectivo amarra a tese com clareza e sensatez."
  },

  "matematica/exponencial-logaritmos": {
    topic: "Funções Exponenciais e Logaritmos",
    area: "matematica",
    areaName: "Matemática",
    enemRelevance: "Competência 5 do ENEM: Aplicações de crescimento bacteriano, decaimento radioativo, Escala Richter, decibéis e pH.",
    highFrequencySkills: ["H19 - Identificar representações de funções exponenciais e logarítmicas", "H21 - Modelar fenômenos de variação exponencial", "H22 - Utilizar logaritmos para linearizar grandezas e resolver equações"],
    overview: "Estudo das funções exponenciais e suas inversas logarítmicas, propriedades operatórias, mudança de base e modelagem de fenômenos de crescimento e decaimento acelerados.",
    keyConcepts: [
      {
        title: "Função Exponencial e Meia-Vida",
        content: "Crescimento contínuo: P(t) = P_0 · (1 + i)^t ou P(t) = P_0 · 2^(t/T_dup). Decaimento radioativo: M(t) = M_0 · (1/2)^(t/T_meia_vida) = M_0 / (2^k). A cada ciclo de meia-vida decorrido, a massa remanescente divide-se por 2. Base a > 1 gera curva crescente; 0 < a < 1 gera curva decrescente assintótica ao eixo x."
      },
      {
        title: "Definição e Propriedades dos Logaritmos",
        content: "log_b(a) = x ⟺ b^x = a (com a > 0, b > 0, b ≠ 1). Propriedades operatórias fundamentais: • Produto: log(a · b) = log a + log b; • Quociente: log(a / b) = log a - log b; • Potência (regra do tombo): log(a^k) = k · log a; • Raiz: log(ⁿ√a) = (1/n) · log a; • Mudança de base: log_b(a) = log_c(a) / log_c(b)."
      },
      {
        title: "Escalas Científicas e Modelagem no ENEM",
        content: "• Escala Richter (magnitude de sismos): M = (2/3) · log10(E / E_0) — a variação de 2 pontos na magnitude significa energia 1.000 vezes maior (10³). • Nível sonoro (decibéis): β = 10 · log10(I / I_0) — cada acréscimo de 10 dB multiplica a intensidade por 10. • Escala de pH: pH = -log10[H+] — se [H+] = 2 · 10⁻³, pH = 3 - log(2)."
      },
      {
        title: "Equações Exponenciais e Mudança de Variável",
        content: "Para equações do tipo a^(2x) + b · a^x + c = 0, adota-se a variável auxiliar y = a^x (com y > 0 obrigatório), recaindo em equação do 2º grau. Em inequações, atente para a base: se 0 < a < 1, inverta a desigualdade (ex: (1/2)^x > (1/2)³ ⟹ x < 3)."
      }
    ],
    formulasAndRules: [
      "Decaimento por Meia-Vida: M = M_0 / (2^k), com k = tempo / meia-vida.",
      "Técnica do log(5): log(5) = log(10 / 2) = log(10) - log(2) = 1 - log(2).",
      "Mudança de Base: log_b(a) = log10(a) / log10(b).",
      "Resolução Exponencial: a^t = b ⟹ t = log(b) / log(a)."
    ],
    enemTraps: [
      "Condição de existência do logaritmo: o argumento deve ser estritamente positivo (x > 0). Raízes que gerem logaritmo de número negativo ou de zero devem ser descartadas!",
      "Em inequações exponenciais, inverter o sinal se a base for menor que 1 ou se multiplicar/dividir por número negativo.",
      "O produto das raízes auxiliares y1 · y2 não é o produto das raízes x1 · x2, mas sim a^(x1 + x2)!"
    ],
    mnemonics: "Se o expoente tá no alto, o logaritmo tomba ele pro chão; produto vira soma e fração vira subtração."
  },

  "matematica/analise-combinatoria": {
    topic: "Análise Combinatória e Técnicas de Contagem",
    area: "matematica",
    areaName: "Matemática",
    enemRelevance: "Competência 1 e 4 (H2, H3, H15, H16): Presença constante em problemas práticos de formação de equipes, senhas, cardápios e combinações.",
    highFrequencySkills: ["H2 - Identificar padrões de agrupamento e contagem", "H15 - Aplicar o princípio multiplicativo e aditivo", "H16 - Resolver problemas envolvendo arranjos, permutações e combinações"],
    overview: "A Análise Combinatória no ENEM avalia a capacidade de raciocínio dedutivo para contar possibilidades sem listar exaustivamente todos os casos. O domínio central exige diferenciar se a ordem dos elementos altera o agrupamento (Arranjos/Permutações) ou se apenas a natureza dos elementos importa (Combinações), aplicando o Princípio Multiplicativo, método dos blocos e raciocínio complementar.",
    keyConcepts: [
      {
        title: "Princípio Fundamental da Contagem (PFC)",
        content: "Se uma decisão é tomada em etapas sucessivas e independentes, o total de possibilidades é o produto das opções de cada etapa: N = n1 · n2 · ... · nk. Em problemas com restrições (ex: dígitos distintos ou posições restritas), inicie sempre a resolução pela etapa que impõe mais restrições."
      },
      {
        title: "Arranjos vs. Combinações (A Ordem Importa?)",
        content: "• A ordem importa? SIM ⟹ Arranjo / Permutação. Ex: pódios, senhas bancárias, placas, anagramas. Fórmula: A(n, p) = n! / (n - p)!. • A ordem importa? NÃO ⟹ Combinação Simples. Ex: comissões, equipes de plantão, escolha de matérias, subconjuntos. Fórmula: C(n, p) = n! / [p! · (n - p)!]. A divisão por p! corrige e anula as permutações internas fictícias entre os mesmos elementos."
      },
      {
        title: "Permutações com Repetição e Trajetos em Malha",
        content: "Quando há elementos repetidos, divide-se o fatorial total pelo fatorial de cada repetição: P_n^(a, b) = n! / (a! · b!). Aplicação clássica: anagramas de palavras com letras repetidas e deslocamentos em malhas quadriculadas de ruas (onde cada trajeto é uma sequência de n passos para a direita e m passos para cima)."
      },
      {
        title: "Método do Bloco e Princípio do Complementar",
        content: "• Elementos que devem ficar juntos: trate-os provisoriamente como um único bloco. Calcule a permutação externa do bloco com os demais itens e multiplique pelas permutações internas dos elementos dentro do bloco. • Método do Complementar: Quando o problema pede 'pelo menos um', 'no mínimo um' ou restrições complexas de negação: Casos Válidos = Total Irrestrito - Casos Desfavoráveis."
      }
    ],
    formulasAndRules: [
      "PFC: N = n1 · n2 · n3 · ... · nk.",
      "Combinação Simples: C(n, p) = n! / [p! · (n - p)!].",
      "Permutação Simples: P_n = n!.",
      "Permutação com Repetição: P_n^(k1, k2) = n! / (k1! · k2!).",
      "Método do Complementar: Casos Válidos = Total - Proibidos.",
      "Regra do E vs. OU: 'E' = multiplicar etapas simultâneas; 'OU' = somar cenários alternativos disjuntos."
    ],
    enemTraps: [
      "Confundir comissão com fila ordenada: em equipes de trabalho onde todos exercem a mesma função, a ordem de escolha NÃO importa, exigindo Combinação e não Arranjo.",
      "Esquecer a permutação interna do bloco: se 3 elementos andam juntos em bloco, lembre-se de multiplicar por 3! = 6 ao final.",
      "Somar combinações em vez de multiplicá-las quando as escolhas de grupos distintos ocorrem simultaneamente para compor uma única equipe."
    ],
    mnemonics: "A ordem muda o grupo? Se SIM, permuta e arranja; se NÃO, divide por p! e combina com ganho!"
  },

  "linguagens/ingles-instrumental": {
    topic: "Língua Estrangeira: Inglês Instrumental",
    area: "linguagens",
    areaName: "Linguagens e Códigos",
    enemRelevance: "Competência 2 da Matriz do ENEM (H5 a H8): 5 questões garantidas na abertura da prova de Linguagens.",
    highFrequencySkills: ["H5 - Identificar marcas linguísticas de intenção discursiva", "H6 - Utilizar conhecimentos de língua estrangeira para acesso à informação", "H7 - Relacionar termos e vocabulário ao contexto sociocultural", "H8 - Reconhecer valores e produções culturais em língua estrangeira"],
    overview: "O ENEM não avalia regras gramaticais isoladas em língua estrangeira, mas a capacidade leitora crítica (leitura instrumental). Os textos exploram divulgação científica, campanhas de saúde pública, tirinhas e charges com ironia e reivindicações sociais globais.",
    keyConcepts: [
      {
        title: "Estratégias de Leitura: Skimming vs. Scanning",
        content: "• Skimming: leitura rápida e panorâmica para apreender a ideia central, o gênero textual, a tese do autor e o público-alvo (leia primeiro o título, subtítulo e primeira/última frase dos parágrafos). • Scanning: varredura visual cirúrgica para localizar dados pontuais solicitados no enunciado (datas, percentuais, nomes próprios ou termos técnicos)."
      },
      {
        title: "Falsos Cognatos Recorrentes (False Friends)",
        content: "Palavras com grafia semelhante ao português, mas com significado distinto: • Actually = na realidade / de fato (não atualmente); • Pretend = fingir (não pretender; pretender é 'intend'); • Notice = perceber / notar / aviso (não notícia); • Realize = dar-se conta / perceber (não apenas realizar); • Push = empurrar (não puxar; puxar é 'pull'); • Novel = romance literário (não novela televisiva); • Resume = retomar / reiniciar (não resumir); • Fabric = tecido / fibra (não fábrica; fábrica é 'factory')."
      },
      {
        title: "Conectivos Argumentativos e Discursivos",
        content: "Marcadores de contraste e ressalva: However (no entanto), Although / Even though (embora), Despite / In spite of (apesar de), Whereas / While (enquanto que / ao passo que). Marcadores de adição e progressão: Furthermore / Moreover / In addition (além disso). Marcadores de conclusão: Therefore / Thus / Hence (portanto). Marcadores de condição: Unless (a não ser que / a menos que)."
      },
      {
        title: "Verbos Modais e Ponto de Vista do Autor",
        content: "• Should / Ought to: conselho, recomendação de saúde ou dever ético. • May / Might / Could: possibilidade, hipótese cautelosa em artigos acadêmicos. • Must / Have to: obrigação estrita ou dedução lógica irrefutável. • Must not: proibição categórica."
      }
    ],
    formulasAndRules: [
      "Ordem Estratégica: No ENEM, LEIA SEMPRE O ENUNCIADO E AS ALTERNATIVAS EM PORTUGUÊS ANTES DE LER O TEXTO EM INGLÊS. O enunciado já revela o tema central e o que você deve buscar.",
      "Regra do 'Despite': 'Despite' e 'In spite of' são seguidos de substantivo ou verbo com -ing, nunca de oração com verbo conjugado direto (ex: 'Despite the crisis, we succeeded').",
      "Prefixos e Sufixos: -less indica ausência (homeless, careless), -ful indica plenitude (hopeful, helpful), mis- indica erro/equívoco (misunderstand, mislead)."
    ],
    enemTraps: [
      "Cuidado com a alternativa que traduz o falso cognato pelo sentido literal falso (ex: traduzir 'pretend' como ter a intenção de algo em vez de fingir).",
      "Em tirinhas ou charges (cartoons), a chave interpretativa está na quebra de expectativa entre o texto verbal e a expressão fisionômica das personagens.",
      "Não selecione a alternativa apenas porque ela repetiu uma palavra idêntica do texto: distratores adoram copiar palavras soltas fora do contexto para atrair quem faz leitura ingênua."
    ],
    mnemonics: "Enunciado primeiro clareia a visão; 'actually' é de fato, 'pretend' é encenação."
  },

  "humanas/afro-indigena": {
    topic: "História e Cultura Afro-Brasileira e Indígena",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Obrigatório pelas Leis 10.639/03 e 11.645/08. Presente em múltiplas questões das Competências 1, 3 e 5 e repertório de elite para a Redação.",
    highFrequencySkills: ["H11 - Reconhecer identidades e diversidade cultural", "H14 - Comparar o significado de normas jurídicas e direitos de cidadania", "H15 - Avaliar ações de grupos sociais e lutas por emancipação"],
    overview: "Estudo crítico das cosmologias originárias, territorialidade, marcos jurídicos (Art. 231 e Art. 68 do ADCT), pensadores negros fundamentais (Lélia Gonzalez, Abdias do Nascimento, Sueli Carneiro, Florestan Fernandes) e patrimônio cultural imaterial de matriz afro-brasileira.",
    keyConcepts: [
      {
        title: "Cosmologias Indígenas e Crítica Ecológica (Krenak e Kopenawa)",
        content: "Ailton Krenak desconstrói a ilusão ocidental de separação entre humanidade e natureza, propondo o parentesco com montanhas e rios para 'adiar o fim do mundo'. Davi Kopenawa ('A Queda do Céu') alerta para a ecologia xamânica yanomami: a devastação florestal pelo garimpo rompe o equilíbrio mantido pelos xapiri, ameaçando a sobrevivência de todos os povos."
      },
      {
        title: "Artigo 231 da CF/88 e Direitos Originários Indígenas",
        content: "A Constituição de 1988 rompeu com a tutela assimilacionista e reconheceu o 'indigenato' — direito originário (anterior à formação do Estado) à posse permanente e ao usufruto exclusivo das terras tradicionalmente ocupadas pela União. Em 2023, o STF julgou inconstitucional a tese do Marco Temporal (RE 1017365), reafirmando que o esbulho renitente e a violência pretérita não invalidam o direito territorial indígena."
      },
      {
        title: "Amefricanidade e Interseccionalidade (Lélia Gonzalez e Sueli Carneiro)",
        content: "Lélia Gonzalez articulou de maneira precursora as dimensões de raça, classe e gênero, cunhando o conceito de 'Amefricanidade' e a valorização do 'pretuguês'. Sueli Carneiro teorizou a urgência de 'enegrecer o feminismo', evidenciando que o mito da fragilidade feminina ignorou a mulher negra, submetida ao cativeiro, ao trabalho doméstico e à violência estrutural."
      },
      {
        title: "Territórios Quilombolas e Patrimônio Imaterial",
        content: "O Artigo 68 do ADCT e o Decreto 4.887/2003 fundamentam a titulação quilombola na autoatribuição (autoidentificação) e trajetória ancestral compartilhada. Manifestações como a Capoeira (patrimônio imaterial pela UNESCO) e o Cais do Valongo (sítio de memória sensível da diáspora) marcam a transição da criminalização e apagamento colonial para a afirmação do direito à memória."
      }
    ],
    formulasAndRules: [
      "Equação da Interseccionalidade: Raça + Gênero + Classe = Formas específicas e entrelaçadas de vulnerabilidade socioeconômica.",
      "Terras Indígenas (CF/88, Art. 231): São bens públicos da União, inalienáveis e indisponíveis; os indígenas detêm a posse permanente e o usufruto exclusivo.",
      "Critério Quilombola: Autoatribuição identitária e posse ancestral coletiva (Convenção 169 da OIT e Decreto 4.887/2003)."
    ],
    enemTraps: [
      "Cuidado com o mito da democracia racial: o ENEM rejeita categoricamente qualquer tese de miscigenação harmônica sem conflito.",
      "Terras indígenas NÃO são propriedade privada particular e não podem ser vendidas ou desmembradas no mercado.",
      "Não confunda a abolição jurídica de 1888 com cidadania plena: Florestan Fernandes demonstrou que a abolição foi inconclusa e marginalizou deliberadamente a população negra."
    ],
    mnemonics: "Krenak adia o fim, Lélia cruza a opressão; o indigenato é originário e garante a posse do chão."
  },

  "linguagens/espanhol-instrumental": {
    topic: "Língua Estrangeira: Espanhol Instrumental",
    area: "linguagens",
    areaName: "Linguagens e Códigos",
    enemRelevance: "Competência 2 do ENEM (H5 a H8): 5 questões com alto índice de pegadinhas baseadas em falsos cognatos e conectores.",
    highFrequencySkills: ["H5 - Identificar intenções comunicativas e ironia", "H6 - Acessar informações em textos de imprensa e divulgação científica", "H7 - Reconhecer heterossemânticos, heterotônicos e heterogenéricos", "H8 - Interpretar manifestações literárias e charges hispano-americanas"],
    overview: "Leitura instrumental focada em textos jornalísticos, de divulgação científica, tirinhas críticas (Quino/Maitena) e literatura latino-americana (García Márquez, Galeano, Neruda), com domínio das armadilhas da proximidade entre português e espanhol.",
    keyConcepts: [
      {
        title: "Heterossemânticos Críticos (Falsos Amigos)",
        content: "Palavras de grafia semelhante mas significados completamente distintos: • Exquisito = delicioso, saboroso (não esquisito); • Apellido = sobrenome (apelido é 'apodo'); • Embarazada = grávida (envergonhada é 'avergonzada'); • Rato = momento, instante (roedor é 'ratón'); • Propina = gorjeta legal de atendimento (suborno é 'soborno' ou 'coima'); • Berro = agrião (verdura comestível); • Cuello = pescoço; • Rodilla = joelho (cotovelo é 'codo'); • Taller = oficina mecânica ou estúdio de arte; • Borrador = apagador de lousa ou rascunho; • Cola = fila de pessoas."
      },
      {
        title: "Artigo Neutro LO vs. Artigo Masculino EL",
        content: "O artigo neutro 'LO' NUNCA acompanha substantivos! Une-se exclusivamente a adjetivos e advérbios para substantivar conceitos abstratos (ex: 'lo importante', 'lo difícil' = aquilo que é importante, a parte difícil). O artigo definido masculino que acompanha substantivos é unicamente 'EL' (el libro, el hombre)."
      },
      {
        title: "Conectores e Operadores Argumentativos",
        content: "• Oposição/Contraste: Sin embargo / No obstante (no entanto, contudo), Pero (mas). • Concessão: Aunque / A pesar de que (embora, ainda que). • Conclusão: Por lo tanto / Por consiguiente (portanto, logo). • Adição: Además / Incluso (além disso, inclusive). • Condição: A no ser que / Siempre que."
      },
      {
        title: "Heterogenéricos e Heterotônicos",
        content: "Heterogenéricos mudam de gênero: em espanhol são femininos 'la leche', 'la sangre', 'la sal', 'la miel', 'la nariz' (masculinos em português); são masculinos 'el color', 'el dolor', 'el árbol' (femininos em português). Heterotônicos mudam de sílaba tônica: limite (li-MI-te no espanhol vs. LÍ-mi-te no português), nivel (ni-VEL vs. NÍ-vel), cerebro (ce-RE-bro vs. CÉ-re-bro)."
      }
    ],
    formulasAndRules: [
      "Regra do LO: LO + adjetivo = conceito abstrato. Nunca escreva nem marque 'lo menino' ou 'lo problema'. Substantivo masculino leva EL (el problema).",
      "Leitura do Enunciado Primeiro: Leia o comando e as cinco opções em português antes do texto em espanhol para captar o foco da questão.",
      "Tilde Diacrítica: Diferencia monossílabos homônimos: él (ele) vs. el (o); tú (você) vs. tu (teu); sí (sim) vs. si (se); té (chá) vs. te (te)."
    ],
    enemTraps: [
      "Cuidado com a alternativa que traduz 'apellido' por apelido ou 'exquisito' por esquisito/bizarro.",
      "Em tirinhas da Mafalda e de Maitena, o humor nasce da quebra de expectativa entre o texto verbal e a opressão das rotinas cotidianas.",
      "Não confunda 'propina' (gorjeta legítima a garçons) com crime de corrupção."
    ],
    mnemonics: "Apellido é sobrenome, apodo é apelido; exquisito é saboroso e LO nunca anda com substantivo vestido."
  },

  "humanas/geografia-agraria": {
    topic: "Geografia Agrária, Agronegócio e Questão Fundiária",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Cai todo ano (2 a 4 questões no primeiro dia). Tema central para a prova de Humanas e repertório indispensável para a Redação.",
    highFrequencySkills: ["H6 - Interpretar a estrutura fundiária e índices de desigualdade no campo", "H7 - Analisar impactos de inovações tecnológicas agrícolas", "H17 - Avaliar as relações de trabalho no campo e conflitos pela posse da terra", "H18 - Compreender a função social da terra e políticas públicas agroalimentares"],
    overview: "Estudo crítico da formação histórica do latifúndio no Brasil (Lei de Terras de 1850), modernização conservadora na ditadura militar, dinâmica da fronteira agrícola (MATOPIBA), contradição entre agronegócio de exportação e agricultura familiar, conflitos fundiários e transição agroecológica.",
    keyConcepts: [
      {
        title: "Estrutura Fundiária e Índice de Gini da Terra",
        content: "O Brasil possui uma das estruturas fundiárias mais concentradas do mundo (Índice de Gini fundiário > 0,85). Menos de 1% dos estabelecimentos agrícolas monopolizam quase metade de toda a área agricultável do país, herança secular das sesmarias coloniais, da escravidão e da Lei de Terras nº 601 de 1850 (que transformou a terra pública em mercadoria acessível apenas por compra com dinheiro à vista)."
      },
      {
        title: "Modernização Conservadora e Revolução Verde",
        content: "A partir dos anos 1960 e 1970, o Estado militar injetou crédito rural subsidiado (SNCR) e tecnologia (tratores, adubos químicos solúveis, agrotóxicos e sementes híbridas da Revolução Verde) sem alterar a propriedade da terra. O modelo modernizou as máquinas, mas conservou a desigualdade arcaica, provocando desemprego em massa de meeiros e parceiros e acelerando o êxodo rural desordenado rumo às periferias das metrópoles."
      },
      {
        title: "Agronegócio de Exportação vs. Agricultura Familiar",
        content: "O agronegócio patronal é altamente mecanizado, gera poucos empregos diretos e foca em commodities para a balança comercial (soja, milho, cana, carne bovina), controlado por multinacionais químicas e tradings globais (Cargill, Bunge). Em contraste, a agricultura familiar responde por ~70% dos alimentos frescos da mesa brasileira (mandioca, feijão, leite, legumes) e emprega mais de 67% da mão de obra rural, sendo apoiada pelo PRONAF, PAA e PNAE (30% da merenda escolar)."
      },
      {
        title: "Fronteira Agrícola, MATOPIBA e Conflitos Fundiários",
        content: "A expansão da soja sobre os chapadões do MATOPIBA (Maranhão, Tocantins, Piauí e Bahia) e o Arco do Desmatamento amazônico compromete a recarga dos aquíferos do Cerrado ('caixa d'água do Brasil'). Práticas de grilagem de terras públicas devolutas e pistoleirismo geram violência crônica contra posseiros e povos tradicionais (geraizeiros, vazanteiros, quebradeiras de coco babaçu com a Lei do Babaçu Livre). O Artigo 186 da CF/88 exige a função social da terra contra o latifúndio improdutivo."
      }
    ],
    formulasAndRules: [
      "Função Social da Propriedade (CF/88, Art. 186): Produtividade econômica + Respeito ao meio ambiente + Observância trabalhista + Bem-estar coletivo.",
      "Lei do Babaçu Livre: Garante o acesso comum de mulheres extrativistas aos babaçuais nativos, vedando derrubadas e agrotóxicos mesmo em terras privadas.",
      "PNAE (Lei 11.947/09): No mínimo 30% da verba federal da merenda escolar deve comprar alimentos da agricultura familiar e assentamentos."
    ],
    enemTraps: [
      "O agronegócio de exportação NÃO é o produtor da cesta básica do brasileiro; ele produz commodities para ração animal externa e biocombustíveis.",
      "A Lei de Terras de 1850 não visava democratizar a terra; foi criada para impedir o acesso à terra por libertos e imigrantes pobres.",
      "Trabalho escravo contemporâneo (CP, art. 149) não exige correntes físicas; caracteriza-se por condições degradantes, servidão por dívida e jornada exaustiva."
    ],
    mnemonics: "A máquina modernizou, a terra concentrou; o familiar põe comida e o Gini disparou."
  },

  "humanas/filosofia-teoria-conhecimento": {
    topic: "Filosofia, Ética e Teoria do Conhecimento",
    area: "humanas",
    areaName: "Ciências Humanas",
    enemRelevance: "Competência 1 e 4 (H1, H2, H16, H17, H18): Presença garantida no ENEM (3 a 4 questões anuais) e principal alicerce de repertório sociocultural legítimo para a Redação Nota 1000.",
    highFrequencySkills: ["H1 - Interpretar o papel da reflexão filosófica na cidadania", "H16 - Diferenciar matrizes epistemológicas (racionalismo, empirismo, criticismo)", "H17 - Aplicar teorias éticas a dilemas da contemporaneidade", "H18 - Valorizar a dignidade da pessoa humana e os direitos fundamentais"],
    overview: "Mapeamento sistemático da história do pensamento filosófico ocidental: a ruptura pré-socrática do mito pelo logos, Sócrates e a maiêutica, o idealismo de Platão, a ética das virtudes de Aristóteles, o estoicismo helenístico, a harmonia fé/razão tomista, a teoria do conhecimento moderna (Descartes, Locke, Hume, Kant), o realismo político (Maquiavel, Hobbes, Rousseau) e a reflexão contemporânea (Nietzsche, Arendt, Foucault, Bauman, Jonas, Han e Rawls).",
    keyConcepts: [
      {
        title: "Sócrates, Platão e o Idealismo",
        content: "Sócrates rompe com os sofistas combatendo o relativismo retórico: por meio da ironia (desconstrução de preconceitos) e da maiêutica (parto das ideias pela razão), busca essências universais. Platão formula o dualismo: o Mundo Sensível é o reino das sombras e das opiniões mutáveis (doxa); o Mundo Inteligível das Ideias é o reino do conhecimento verdadeiro (episteme), culminando na Ideia do Bem."
      },
      {
        title: "Aristóteles e a Ética da Mediania",
        content: "Para Aristóteles, a virtude ética (areté) não é inata nem puramente teórica, mas adquirida pelo hábito e pela sabedoria prática (phrónesis). A virtude situa-se no 'justo meio' (mesótis) entre dois extremos viciosos (um por falta e outro por excesso), como a coragem entre a covardia e a temeridade, orientando o animal político à felicidade plena (eudaimonia)."
      },
      {
        title: "Racionalismo, Empirismo e o Criticismo Kantiano",
        content: "• Descartes (Racionalismo): a dúvida metódica atinge a certeza indubitável do sujeito pensante (Cogito, ergo sum). • Locke e Hume (Empirismo): a mente é uma tábula rasa suprida pela experiência; Hume demonstra que a causalidade é uma crença gerada pelo hábito psicológico. • Kant (Criticismo): sintetiza ambas as correntes e funda a ética do Imperativo Categórico, exigindo máxima universalizável e respeito absoluto à dignidade humana (a pessoa como fim, nunca como meio)."
      },
      {
        title: "Poder, Banalidade do Mal e Dilemas Contemporâneos",
        content: "• Maquiavel: autonomia da política em relação à moral religiosa tradicional (virtù vs. fortuna). • Hannah Arendt: a 'banalidade do mal' decorre da renúncia ao pensamento crítico em burocracias alienadas. • Foucault: a sociedade disciplinar e o panóptico produzem 'corpos dóceis'. • Hans Jonas: Princípio Responsabilidade e a proteção ecológica das gerações futuras. • Byung-Chul Han: a sociedade do desempenho converte o trabalhador em autoexplorador voluntário de si mesmo."
      }
    ],
    formulasAndRules: [
      "Método Socrático: Ironia (destruição de falsas certezas) + Maiêutica (parto racional de conceitos).",
      "Ética Aristotélica: Virtude = Justo Meio entre Excesso e Deficiência (Mesótis).",
      "Imperativo Categórico Kantiano: 'Age apenas segundo uma máxima tal que possas ao mesmo tempo querer que ela se torne lei universal'.",
      "Dicotomia do Controle Estoica: Foque no que depende de você (pensamentos/virtude); aceite com serenidade o que independe de você.",
      "Justiça como Equidade (Rawls): Véu de ignorância garante imparcialidade; o Princípio da Diferença maximiza o benefício aos mais vulneráveis."
    ],
    enemTraps: [
      "Não confunda Sócrates com sofistas: sofistas cobravam e ensinavam relativismo convincente; Sócrates dialogava de graça em busca da verdade universal.",
      "A dúvida metódica cartesiana NÃO é ceticismo definitivo; é uma ferramenta cirúrgica para encontrar a rocha da primeira certeza indubitável.",
      "Na ética kantiana, o cálculo de consequências não tem valor moral: uma boa intenção baseada no dever é o que define o ato moral, diferentemente do utilitarismo."
    ],
    mnemonics: "Sócrates dialoga com maiêutica na praça; Descartes pensa e existe com graça; Kant universaliza o dever sem trapaça!"
  },

  "linguagens/publicidade-semiotica": {
    topic: "Publicidade, Propaganda e Semiótica Visual",
    area: "linguagens",
    areaName: "Linguagens e Códigos",
    enemRelevance: "Competência 7 (H21, H22, H23, H24): Uma das competências de maior incidência no primeiro domingo do ENEM (~15% a 20% das questões), cobrando análise multimodal de campanhas sociais, charges, cartazes e persuasão.",
    highFrequencySkills: ["H21 - Reconhecer em textos publicitários as funções da linguagem e os recursos persuasivos", "H22 - Relacionar recursos visuais, tipográficos e verbais em textos multimodais", "H23 - Avaliar os efeitos de sentido provocados por recursos gráficos e quebras de expectativa", "H24 - Reconhecer o papel social e ético da publicidade e seus limites legais"],
    overview: "Estudo crítico das estratégias de comunicação persuasiva: a distinção entre publicidade comercial (venda mercadológica) e propaganda/publicidade institucional (adesão cívica a causas de saúde, trânsito e direitos humanos), a retórica clássica (Ethos, Pathos e Logos), a semiótica de Roland Barthes (ancoragem da imagem pelo texto), a expressividade da tipografia, a função conativa e poética de slogans, a intertextualidade paródica e a ética contra o greenwashing e a publicidade infantil abusiva.",
    keyConcepts: [
      {
        title: "Publicidade Comercial vs. Campanhas Institucionais",
        content: "• Publicidade Comercial: orientada para o mercado de consumo, estimulando a aquisição de bens e serviços por meio do valor-signo e da associação a estilos de vida desejáveis. • Propaganda / Publicidade Institucional: promovida pelo Estado ou ONGs visando a transformação de comportamentos sociais danosos e a promoção de saúde pública, cidadania e direitos humanos (vacinação, doação de sangue, trânsito seguro, combate à violência doméstica)."
      },
      {
        title: "Multimodalidade e o Tripé Retórico (Ethos, Pathos, Logos)",
        content: "A persuasão opera pela convergência de modos semióticos (verbal + visual + tipográfico). Na retórica clássica: • Logos fundamenta-se em argumentos lógicos, gráficos estatísticos e fatos objetivos; • Ethos ancora-se na autoridade moral, científica e reputação da instituição emissora; • Pathos apela aos sentimentos de empatia, solidariedade, medo ou culpa do receptor para mobilizá-lo à ação."
      },
      {
        title: "Ancoragem Texto-Imagem (Barthes) e Semiótica Tipográfica",
        content: "Para Roland Barthes, imagens isoladas possuem significados flutuantes e polissêmicos. O texto verbal realiza a função essencial de ANCORAGEM: fixa o sentido pretendido e guia a interpretação do leitor. Paralelamente, a tipografia (tamanho, peso bold, caixa alta, textura de concreto ou linhas trêmulas) atua como recurso visual expressivo autônomo com carga semântica conotativa."
      },
      {
        title: "Slogans, Humor Paródico e Desconstrução Crítica",
        content: "• Slogans combinam função conativa (imperativos direcionados ao receptor) e função poética (ritmo cadenciado e rimas internas que facilitam a fixação mnemônica). • Paródias e Intertextualidade apropriam-se da cultura pop para gerar empatia e memorização rápida. • Em charges e cartazes críticos, a quebra de expectativa e a desproporção visual denunciam contradições socioeconômicas e desmascaram práticas como o greenwashing."
      }
    ],
    formulasAndRules: [
      "Ancoragem Semiótica (Roland Barthes): O texto verbal ancora e fecha a cadeia polissêmica flutuante da imagem visual.",
      "Função Conativa/Apelativa: Verbos no imperativo ('Doe sangue', 'Denuncie', 'Use camisinha') e pronomes de 2ª pessoa focados no receptor.",
      "Função Poética em Slogans: Rima e musicalidade que operam como fixadores mnemônicos no cérebro do público.",
      "Regulação Ética (CDC e CONAR): Proibição da publicidade enganosa, abusiva e do assédio mercantil direto a crianças hipervulneráveis."
    ],
    enemTraps: [
      "Não confunda anúncio institucional cívico com anúncio comercial: o institucional vende uma ATITUDE cidadã, não um produto lucrativo.",
      "Em charges, preste atenção à contradição entre a fala e o desenho: quase sempre a imagem desmente ironicamente o que a personagem diz!",
      "Atenção ao greenwashing: selos autoatribuídos e folhas verdes no rótulo são estratégias visuais que muitas vezes ocultam poluição industrial real."
    ],
    mnemonics: "A imagem flutua, a palavra ancora; o imperativo convoca e a rima decora!"
  },

  "matematica/sistemas-equacoes": {
    topic: "Álgebra, Equações e Sistemas Lineares",
    area: "matematica",
    areaName: "Matemática e suas Tecnologias",
    enemRelevance: "Competência 5 (H19, H20, H21, H22): Essencial na modelagem algébrica do cotidiano, problemas de produção, ponto de equilíbrio, torneiras/vazão e balanceamento de misturas (~10% a 15% da prova).",
    highFrequencySkills: [
      "H19 - Identificar representações algébricas que expressem relações entre grandezas",
      "H20 - Interpretar gráficos e tabelas para modelar equações e sistemas",
      "H21 - Resolver situações-problema cuja modelagem envolva equações do 1º ou 2º grau e sistemas lineares",
      "H22 - Utilizar conhecimentos algébricos para tomar decisões financeiras ou logísticas ótimas"
    ],
    overview: "A álgebra no ENEM não se limita ao cálculo mecânico: o exame exige a capacidade de traduzir enunciados verbais em modelos matemáticos (equações do 1º e 2º grau, inequações, sistemas lineares 2x2 e 3x3) e interpretar geometricamente as soluções (interseção de retas e parábolas, ponto de equilíbrio e regiões de viabilidade).",
    keyConcepts: [
      {
        title: "Tradução de Enunciados para Modelos Algébricos",
        content: "O passo mais crítico na prova: definir claramente o que cada incógnita representa (ex: x = número de unidades do tipo A, y = número de unidades do tipo B). Identificar palavras-chave: 'o dobro de x somado a y' (2x + y), 'no mínimo' (≥), 'no máximo' (≤), 'exceder em' (x - y = k)."
      },
      {
        title: "Resolução de Sistemas 2x2: Adição vs. Substituição vs. Cramer",
        content: "• Método da Adição: ideal quando coeficientes são simétricos ou facilmente multiplicáveis por constantes para eliminar uma variável.\n• Método da Substituição: eficiente quando uma variável possui coeficiente 1 ou -1.\n• Regra de Cramer: x = Dx / D, y = Dy / D. Se D ≠ 0, o sistema é Possível e Determinado (SPD, retas concorrentes). Se D = 0 e Dx = Dy = 0, é Possível e Indeterminado (SPI, retas coincidentes). Se D = 0 e ao menos um Dx, Dy ≠ 0, é Impossível (SI, retas paralelas distintas)."
      },
      {
        title: "Problemas Clássicos: Misturas, Torneiras e Ponto de Equilíbrio",
        content: "• Problemas de Torneiras/Trabalho Conjunto: a soma das taxas unitárias de trabalho por unidade de tempo é 1/t_total = 1/t_1 + 1/t_2.\n• Problemas de Misturas e Concentrações: C_1·V_1 + C_2·V_2 = C_final·(V_1 + V_2).\n• Ponto de Equilíbrio (Break-even): Custo Total C(x) = C_fixo + C_var·x igual à Receita Total R(x) = p·x. O lucro começa quando R(x) > C(x)."
      },
      {
        title: "Equações do 2º Grau e Vértice da Parábola",
        content: "ax² + bx + c = 0 com Δ = b² - 4ac. As raízes representam interceptos com o eixo x. As coordenadas do vértice V(x_v, y_v) com x_v = -b/(2a) e y_v = -Δ/(4a) determinam o ponto de máximo (se a < 0) ou mínimo (se a > 0), cruciais em problemas de lucro máximo ou trajetória balística."
      }
    ],
    formulasAndRules: [
      "Taxa de Trabalho Conjunto: 1/T = 1/t₁ + 1/t₂ (tempo para encher reservatório ou concluir obra juntos).",
      "Classificação de Sistemas: D ≠ 0 (SPD, 1 solução); D = 0 e Dx = Dy = 0 (SPI, infinitas soluções); D = 0 e (Dx ≠ 0 ou Dy ≠ 0) (SI, sem solução).",
      "Ponto de Nivelamento (Break-even): R(x) = C(x) ⟹ x = C_fixo / (Preço unitário - Custo variável unitário).",
      "Vértice de Parábola: x_v = -b / (2a) (valor que maximiza/minimiza); y_v = -Δ / (4a) (valor máximo/mínimo atingido)."
    ],
    enemTraps: [
      "Confundir a pergunta do vértice: o ENEM frequentemente pede 'quantas unidades devem ser vendidas' (x_v) e o aluno calcula 'o lucro máximo obtido' (y_v), ou vice-versa!",
      "Em problemas de torneiras com ralo: a vazão do ralo deve ser SUBTRAÍDA da soma das vazões das torneiras: 1/T = 1/t₁ + 1/t₂ - 1/t_ralo.",
      "Não conferir as unidades de tempo: misturar minutos e horas na mesma equação sem conversão prévia."
    ],
    mnemonics: "Trabalho soma o inverso da hora; no vértice, -b sobre 2a não demora; no ralo esvazia e subtrai sem demora!"
  },

  "natureza/bioquimica-metabolismo": {
    topic: "Bioquímica Celular, Bioenergética e Metabolismo",
    area: "natureza",
    areaName: "Ciências da Natureza",
    enemRelevance: "Competência 4 e 5 (H14, H15, H16, H17): Tema de altíssima cobrança no ENEM e diferencial absoluto para Medicina (respiração celular, fotossíntese, cinética enzimática e avitaminoses).",
    highFrequencySkills: [
      "H14 - Identificar padrões em processos biológicos e bioenergéticos celulares",
      "H15 - Interpretar modelos e experimentos metabólicos em condições aeróbicas e anaeróbicas",
      "H16 - Avaliar impactos nutricionais, carências vitamínicas e homeostase fisiológica",
      "H17 - Relacionar estrutura e função de biomoléculas com adaptações evolutivas e processos industriais"
    ],
    overview: "A bioenergética estuda como as células capturam, transformam e utilizam energia livre. No ENEM, o foco está na compreensão integrada das vias metabólicas: a oxidação da glicose (glicólise, ciclo de Krebs e fosforilação oxidativa mitocondrial), a conversão luminosa na fotossíntese (fase clara e ciclo de Calvin), a fermentação como via de regeneração de NAD⁺, a cinética enzimática (efeito de pH, temperatura e inibidores) e o papel biológico de vitaminas e macronutrientes.",
    keyConcepts: [
      {
        title: "Respiração Celular Aeróbica vs. Fermentações",
        content: "• Glicólise (citosol): cliva glicose (6C) em 2 piruvatos (3C), rendendo líquido 2 ATP e 2 NADH.\n• Fermentação: processo anaeróbico cuja função primária é REGENERAR NAD⁺ a partir do NADH para manter a glicólise funcionando (láctica: piruvato vira lactato; alcoólica: piruvato vira acetaldeído + CO₂ e depois etanol).\n• Ciclo de Krebs (matriz mitocondrial): por glicose (2 voltas), gera 6 NADH, 2 FADH₂, 2 GTP/ATP e libera 4 CO₂.\n• Fosforilação Oxidativa (cristas mitocondriais): os elétrons passam pelos complexos I a IV, bombeando H⁺ para o espaço intermembranas; a força motriz protônica move a ATP sintase gerando ~26-28 ATPs. O O₂ é o ACEPTOR FINAL de elétrons, formando água metabólica (H₂O)."
      },
      {
        title: "Fotossíntese: Fase Clara e Ciclo de Calvin",
        content: "• Fase Fotoquímica (tilacoides): a luz excita clorofilas. Na fotólise da água (reação de Hill), a água doa elétrons e libera O₂ para a atmosfera (todo o O₂ vem da H₂O!). Gera ATP (fotofosforilação) e NADPH.\n• Fase Química / Ciclo de Calvin (estroma): a enzima Rubisco fixa o CO₂ atmosférico em ribulose-1,5-bisfosfato (RuBP). Com consumo de ATP e NADPH da fase clara, produz trioses que sintetizam glicose e amido."
      },
      {
        title: "Cinética Enzimática e Inibição",
        content: "• Enzimas reduzem a energia de ativação sem alterar o ΔG da reação.\n• Km reflete a afinidade: menor Km = maior afinidade pelo substrato.\n• Inibição Competitiva: inibidor disputa o sítio ativo; Vmax inalterada com excesso de substrato, mas Km aumenta.\n• Inibição Não Competitiva / Alostérica: inibidor liga-se fora do sítio ativo; diminui Vmax, mantendo Km inalterado."
      },
      {
        title: "Principais Avitaminoses no ENEM",
        content: "• Vitamina C (ácido ascórbico): hidrossolúvel, cofator na síntese de colágeno. Carência = Escorbuto (sangramentos e fragilidade capilar).\n• Vitamina D (calciferol): lipossolúvel, sintetizada na pele sob radiação UVB, estimula absorção intestinal de cálcio. Carência = Raquitismo (crianças) e Osteomalácia (adultos).\n• Vitamina A (retinol): lipossolúvel, componente da rodopsina nos bastonetes. Carência = Hemeralopia (cegueira noturna) e Xeroftalmia.\n• Vitamina B1 (tiamina): cofator da piruvato desidrogenase. Carência = Beribéri."
      }
    ],
    formulasAndRules: [
      "Balanço da Fotólise da Água: 2 H₂O + luz ⟹ 4 H⁺ + 4 e⁻ + O₂ (o oxigênio atmosférico provém 100% da água).",
      "Equação Global da Respiração: C₆H₁₂O₆ + 6 O₂ ⟹ 6 CO₂ + 6 H₂O + ~30-32 ATP.",
      "Cinética de Michaelis-Menten: Km = concentração de substrato [S] na qual V = Vmax / 2.",
      "Adaptação CAM vs C4: CAM separa TEMPORALMENTE (noite fixa malato, dia faz Calvin); C4 separa ESPACIALMENTE (mesofilo fixa, bainha de Kranz faz Calvin)."
    ],
    enemTraps: [
      "O oxigênio liberado na fotossíntese NÃO vem do CO₂! Vem exclusivamente da molécula de H₂O quebrada na fase clara.",
      "O gás carbônico eliminado na respiração NÃO vem do O₂ inalado! Vem das descarboxilações da glicose e do ciclo de Krebs. O O₂ inalado vira água!",
      "A fermentação em si NÃO gera ATP adicional; ela apenas regenera o NAD⁺ para que a glicólise citoplasmática não seja interrompida.",
      "Glicogênio muscular NÃO serve para manter a glicemia do sangue, pois o músculo não possui a enzima glicose-6-fosfatase."
    ],
    mnemonics: "A água dá o O₂ pro ar; a glicose dá o CO₂ pra expirar; e o aceptor final é o O₂ que faz a água brotar!"
  },

  "matematica/aritmetica-divisibilidade": {
    topic: "Aritmética Básica, Notação Científica e MDC/MMC",
    area: "matematica",
    areaName: "Matemática e suas Tecnologias",
    enemRelevance: "Competência 1 (H1, H2, H3, H4, H5): O pilar mais importante da TRI no ENEM (~20% a 25% da prova). Questões fáceis e médias cujo acerto é obrigatório para notas superiores a 800+ em Matemática.",
    highFrequencySkills: [
      "H1 - Reconhecer características do sistema de numeração decimal e ordens de grandeza",
      "H2 - Utilizar a notação científica e realizar conversões com múltiplos e submúltiplos do SI",
      "H3 - Resolver situações-problema envolvendo o cálculo do MDC (partições máximas) e do MMC (coincidências periódicas)",
      "H4 - Avaliar a razoabilidade de estimativas e ordens de grandeza em contextos reais",
      "H5 - Aplicar critérios de divisibilidade e aritmética modular na resolução de problemas cotidianos"
    ],
    overview: "Aritmética Elementar no ENEM avalia o domínio prático dos números reais: operações fundamentais sem calculadora, dízimas periódicas e frações geratrizes, fatoração de inteiros, propriedades do MDC e MMC, notação científica, conversão entre escalas métricas (micro, nano, pico, quilo, mega, giga) e a lógica de calendários e ciclos periódicos.",
    keyConcepts: [
      {
        title: "MDC vs. MMC: O Segredo de Identificação",
        content: "• MDC (Máximo Divisor Comum): surge quando o problema exige DIVIDIR, REPARTIR ou CORTAR grandezas em pedaços do MAIOR tamanho possível, sem sobras e sem misturar categorias (ex: caixas de remédios, cortes de barras metálicas ou tecidos).\n• MMC (Mínimo Múltiplo Comum): surge quando o problema envolve COINCIDÊNCIA DE EVENTOS PERIÓDICOS no tempo futuro (ex: plantões médicos que coincidem a cada 4, 6 e 10 dias; semáforos, cometas ou engrenagens acopladas)."
      },
      {
        title: "Propriedade Fundamental de Dois Números",
        content: "Para quaisquer dois números inteiros positivos A e B: MDC(A, B) × MMC(A, B) = A × B. Essa propriedade permite calcular rapidamente um dos números conhecendo o outro e seus divisores/múltiplos comuns."
      },
      {
        title: "Notação Científica e Ordem de Grandeza",
        content: "• Notação Científica: expressa na forma N = k × 10ⁿ, onde 1 ≤ |k| < 10 e n ∈ ℤ.\n• Ordem de Grandeza: avalia a potência de 10 mais próxima. Regra canônica: se a mantissa k < √10 (≈ 3,162), a ordem de grandeza é 10ⁿ; se k ≥ √10, a ordem de grandeza é 10ⁿ⁺¹."
      },
      {
        title: "Aritmética Modular e Ciclos de Calendário",
        content: "Fenômenos com período T repetem seu estado inicial a cada T unidades. Para saber o estado após N unidades de tempo, calcula-se o resto R da divisão euclidiana de N por T: N = q·T + R. O estado futuro é exatamente o estado inicial avançado em R posições (ex: dias da semana usam T = 7; horas do relógio usam T = 24 ou 12)."
      }
    ],
    formulasAndRules: [
      "Fórmula do Número de Divisores: Se N = p₁ᵃ · p₂ᵇ · p₃ᶜ, então o total de divisores positivos é D(N) = (a + 1)(b + 1)(c + 1).",
      "Produto MDC e MMC: MDC(A, B) · MMC(A, B) = A · B (válido estritamente para dois números).",
      "Trabalho Conjunto / Torneiras: 1/T_total = 1/t₁ + 1/t₂ (o tempo combinado é sempre menor que o menor tempo individual).",
      "Critério da Ordem de Grandeza: k · 10ⁿ ⟹ se k < 3,16, ordem = 10ⁿ; se k ≥ 3,16, ordem = 10ⁿ⁺¹."
    ],
    enemTraps: [
      "Não confunda a capacidade da caixa (o MDC) com a quantidade total de caixas (soma dos quocientes dos lotes pelo MDC)!",
      "Cuidado com o critério da raiz de 10 (3,16): 2,5 × 10¹³ tem ordem de grandeza 10¹³, e NÃO 10¹⁴!",
      "Na conversão de horas decimais: 2,4 horas NÃO são 2 horas e 40 minutos! Multiplique 0,4 por 60 minutos para obter 2 horas e 24 minutos.",
      "Na divisão de potências de 10 com expoentes negativos: 10⁻⁶ / 10⁻⁹ = 10^(-6 - (-9)) = 10³ = 1 000."
    ],
    mnemonics: "MDC reparte no maior sem sobrar; MMC espera a periodicidade encontrar; e 0,4 hora é 24 minutos pra não vacilar!"
  }
};

/**
 * Retorna o resumo teórico completo de um tópico ou módulo.
 */
export function getTheoryForModule(modulePath) {
  if (THEORY_CONTENT[modulePath]) {
    return THEORY_CONTENT[modulePath];
  }

  // Fallback genérico inteligente baseado na área e tópico
  const [area, topic] = modulePath.split("/");
  return {
    topic: topic ? topic.replace("-", " ").toUpperCase() : "Conteúdo Geral",
    area: area || "natureza",
    areaName: area ? area.charAt(0).toUpperCase() + area.slice(1) : "Estudo",
    enemRelevance: "Relevância comprovada na Matriz de Referência do ENEM.",
    highFrequencySkills: ["Habilidades correlacionadas da Matriz INEP"],
    overview: `Estudo aprofundado do tema ${topic || "escolhido"}, com foco nas competências e habilidades cobradas pelo ENEM.`,
    keyConcepts: [
      {
        title: "Conceito Central do Módulo",
        content: "Este módulo aborda os fundamentos teóricos e aplicações práticas mais frequentes nas edições recentes do exame nacional."
      }
    ],
    formulasAndRules: [
      "Revise os conceitos fundamentais antes de iniciar a resolução das questões."
    ],
    enemTraps: [
      "Atenção aos distratores comuns elaborados pela banca do INEP para este padrão de questão."
    ],
    mnemonics: "Pratique a recuperação ativa logo após a leitura teórica."
  };
}
