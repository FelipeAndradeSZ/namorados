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
