/**
 * LIVRO DIDÁTICO DIGITAL: Física Mecânica e Dinâmica de Energia
 * Área: Ciências da Natureza e suas Tecnologias (Física)
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_NATUREZA_MECANICA_ENERGIA = {
  id: "livro-natureza-mecanica-energia",
  area: "natureza",
  title: "Física Mecânica: Dinâmica, Trabalho e Conservação de Energia",
  subtitle: "Dos princípios newtonianos aos sistemas de conversão e conservação de energia",
  estimatedReadingTimeMinutes: 65,
  badge: "Livro Essencial • Mecânica Clássica",
  coverColor: "from-blue-950 to-indigo-900",
  prerequisites: [
    "Noções básicas de álgebra, equações de 1º e 2º grau e interpretação de gráficos cartesianos",
    "Compreensão de grandezas vetoriais fundamentais e conversões de unidades no Sistema Internacional (SI)"
  ],
  learningObjectives: [
    "Interpretar gráficos de movimento retilíneo uniforme e variado calculando áreas e inclinações",
    "Aplicar as três Leis de Newton a corpos em equilíbrio e em aceleração em planos inclinados com atrito",
    "Calcular trabalho de forças constantes e variáveis e determinar potência mecânica útil e rendimento",
    "Dominar o Princípio da Conservação da Energia Mecânica em sistemas com e sem forças dissipativas",
    "Analisar colisões mecânicas através do Teorema do Impulso e aplicar à segurança de impactos veiculares"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "Cinemática Escalar: Movimentos e Interpretação Gráfica",
      targetSkill: "H20, H21 — Interpretar gráficos de espaço, velocidade e aceleração em função do tempo",
      practiceModuleId: "natureza/mecanica",
      deepContent: `
A Cinemática descreve o movimento dos corpos no espaço e no tempo sem se preocupar imediatamente com as causas (forças) que o originam.

1. Grandezas Escalares Fundamentais:
• Posição e Deslocamento: Δs = s_final - s_inicial.
• Velocidade Média: vm = Δs / Δt.
  - Conversão essencial de unidades: Para passar de km/h para m/s, divide-se por 3,6. Para passar de m/s para km/h, multiplica-se por 3,6.
• Aceleração Escalar Média: am = Δv / Δt (unidade no SI: m/s²).

2. Movimento Retilíneo Uniforme (MRU):
• Aceleração nula (a = 0) e velocidade constante (v = constante ≠ 0).
• Função Horária da Posição: s(t) = s₀ + v · t (função afim do 1º grau).
• Propriedades Gráficas no MRU:
  - Gráfico s × t: Reta inclinada cuja inclinação (tangente) representa a velocidade escalar do móvel.
  - Gráfico v × t: Reta horizontal paralela ao eixo do tempo. A área sob a reta entre t₁ e t₂ é numericamente igual ao deslocamento escalar (Área = Δs).

3. Movimento Retilíneo Uniformemente Variado (MRUV):
• Aceleração constante e diferente de zero (a = constante ≠ 0).
• Equações Matemáticas do MRUV:
  1. Função da Velocidade: v(t) = v₀ + a · t (reta de 1º grau).
  2. Função da Posição: s(t) = s₀ + v₀ · t + (a · t²) / 2 (parábola de 2º grau).
  3. Equação de Torricelli (sem o tempo): v² = v₀² + 2 · a · Δs.
• Propriedades Gráficas no MRUV:
  - Gráfico v × t: Reta inclinada cuja declividade é a aceleração escalar (a = tg θ). A área sob a reta representa o deslocamento (Área = Δs).
  - Gráfico s × t: Parábola. Concavidade para cima indica aceleração positiva (a > 0); concavidade para baixo indica aceleração negativa (a < 0).

4. Queda Livre e Lançamento Vertical:
Casos particulares de MRUV na superfície da Terra com aceleração vertical dirigida para baixo (gravidade g ≈ 9,8 m/s² ou 10 m/s² adotada nas provas do ENEM). No ponto mais alto da trajetória de um lançamento vertical, a velocidade escalar instantânea é nula (v = 0), mas a aceleração da gravidade continua atuando com intensidade máxima.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Aplicação da Equação de Torricelli",
          enunciado: "Um automóvel que trafega em uma avenida a 72 km/h avista um obstáculo à sua frente e freia bruscamente com desaceleração constante de 5 m/s² até parar completamente. Qual é a distância mínima percorrida pelo veículo durante o processo de frenagem?",
          stepByStep: [
            "Passo 1: Converta as unidades para o Sistema Internacional (SI):",
            "v₀ = 72 km/h ÷ 3,6 = 20 m/s.",
            "v_final = 0 (o veículo para completamente).",
            "Aceleração de frenagem: a = -5 m/s².",
            "Passo 2: Como o enunciado não informa o intervalo de tempo de frenagem, utilize a Equação de Torricelli:",
            "v² = v₀² + 2 · a · Δs",
            "Passo 3: Substitua os dados numéricos:",
            "0² = (20)² + 2 · (-5) · Δs",
            "0 = 400 - 10 · Δs",
            "10 · Δs = 400  ⇒  Δs = 40 metros."
          ],
          gabarito: "A distância mínima de frenagem é de 40 metros."
        }
      ],
      realWorldApplications: [
        "Cálculo de distância segura entre veículos em rodovias e tempo de reação de motoristas no trânsito.",
        "Dimensionamento de radares eletrônicos e lombadas eletrônicas para controle de velocidade média urbana.",
        "Análise de telemetria de carros esportivos e desempenho de atletas em corridas de atletismo de 100 metros rasos."
      ],
      commonMisconceptions: [
        "Esquecer de converter a velocidade de km/h para m/s antes de aplicar nas fórmulas da aceleração em m/s².",
        "Achar que no ponto mais alto do lançamento vertical a aceleração é zero (a velocidade é zero, mas a aceleração da gravidade continua valendo g).",
        "Confundir velocidade instantânea com velocidade média."
      ],
      quickReviewPoints: [
        "MRU: v = cte, a = 0, s = s₀ + v·t; área no gráfico v×t é o deslocamento.",
        "MRUV: a = cte ≠ 0; v = v₀ + a·t | s = s₀ + v₀·t + (a·t²)/2 | v² = v₀² + 2·a·Δs.",
        "Conversão padrão: m/s × 3,6 = km/h.",
        "Torricelli é a ferramenta ideal quando o enunciado não fornece nem pede o tempo."
      ]
    },
    {
      chapterNumber: 2,
      title: "As Leis de Newton e Forças no Cotidiano",
      targetSkill: "H20, H21 — Aplicar os princípios fundamentais da dinâmica a sistemas de forças",
      practiceModuleId: "natureza/mecanica",
      deepContent: `
A Dinâmica investiga as forças que produzem, modificam ou sustentam o estado de repouso ou de movimento dos corpos materiais.

1. As Três Leis de Newton:
• 1ª Lei de Newton (Princípio da Inércia):
  - Todo corpo permanece em seu estado de repouso ou de movimento retilíneo uniforme (MRU), a menos que seja compelido a mudar esse estado por forças resultantes externas aplicadas sobre ele.
  - A massa do corpo é a medida quantitativa de sua inércia (quanto maior a massa, maior a resistência a alterações de velocidade).
• 2ª Lei de Newton (Princípio Fundamental da Dinâmica):
  - A força resultante aplicada sobre um corpo de massa constante é diretamente proporcional à aceleração adquirida por ele e possui a mesma direção e sentido:
    F_resultante = m · a (unidade no SI: Newton = kg · m/s²).
• 3ª Lei de Newton (Princípio da Ação e Reação):
  - Para toda força de ação exercida por um corpo A sobre um corpo B, existe uma força de reação de mesma intensidade, mesma direção e sentido oposto exercida pelo corpo B sobre o corpo A.
  - Propriedades cruciais do par ação-reação:
    1. Atuam SEMPRE em corpos DISTINTOS (portanto, ação e reação NUNCA se anulam mutuamente!).
    2. Possuem a mesma natureza física (ambas de contato ou ambas de campo).

2. Principais Forças Mecânicas:
• Força Peso: P = m · g (força atrativa gravitacional vertical para baixo exercida pela Terra).
• Força Normal (N): Força de sustentação e contato perpendicular à superfície sobre a qual o corpo se apoia.
• Força de Tração (T): Força exercida através de cordas, cabos ou fios esticados.
• Força Elástica (Lei de Hooke): F_elástica = k · x (força restauradora proporcional à deformação x da mola).
• Força de Atrito (Fat): Atua paralelamente às superfícies de contato e sempre em oposição à tendência de deslizamento relativo entre as superfícies:
  - Atrito Estático: Atua quando NÃO há deslizamento relativo. Seu valor varia de zero até um valor máximo: Fat_máx = μe · N.
  - Atrito Cinético (ou Dinâmico): Atua quando HÁ deslizamento efetivo entre as superfícies: Fat_cin = μc · N (sendo μc < μe).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O Bloco no Plano Inclinado",
          enunciado: "Um bloco de massa m = 10 kg repousa sobre um plano inclinado liso (sem atrito) que forma um ângulo θ = 30° com a horizontal. Adotando g = 10 m/s², sen 30° = 0,5 e cos 30° = 0,87, determine a aceleração adquirida pelo bloco ao ser abandonado livremente.",
          stepByStep: [
            "Passo 1: Decomponha a força peso nas direções paralela e perpendicular ao plano inclinado:",
            "Componente perpendicular: Py = P · cos θ = m · g · cos θ.",
            "Componente tangencial ao plano (força motora de descida): Px = P · sen θ = m · g · sen θ.",
            "Passo 2: Como não há atrito e a normal equilibra Py (N = Py), a única força resultante no sentido do movimento é Px:",
            "F_resultante = Px",
            "Passo 3: Aplique a 2ª Lei de Newton: F_resultante = m · a:",
            "m · a = m · g · sen θ",
            "Passo 4: Note que a massa m cancela dos dois lados da equação:",
            "a = g · sen θ = 10 · 0,5 = 5 m/s²."
          ],
          gabarito: "O bloco desce com aceleração constante de 5 m/s²."
        }
      ],
      realWorldApplications: [
        "Ação do cinto de segurança e encosto de cabeça automotivo como proteção inercial contra desacelerações e colisões traseiras.",
        "Projeto de solados de calçados esportivos e pneus automotivos com ranhuras para maximizar o coeficiente de atrito estático em pista molhada.",
        "Operação de elevadores de edifícios e cálculo da força aparente sobre passageiros durante subidas e descidas aceleradas."
      ],
      commonMisconceptions: [
        "Dizer que a força normal é a reação da força peso (o peso é par ação-reação com a atração exercida pelo corpo no centro da Terra; a normal é par com a compressão exercida na superfície).",
        "Achar que o atrito sempre atrapalha o movimento (o atrito é a força motora essencial que permite que os seres humanos caminhem e que automóveis acelerem na pista).",
        "Acreditar que ação e reação se anulam (elas atuam em corpos diferentes, logo não podem se anular no mesmo corpo)."
      ],
      quickReviewPoints: [
        "1ª Lei (Inércia): repouso ou MRU se F_res = 0.",
        "2ª Lei: F_res = m·a.",
        "3ª Lei: ação e reação em corpos distintos, mesma intensidade e sentidos opostos.",
        "Atrito estático impede o deslizamento (Fat_máx = μe·N); atrito cinético atua no deslizamento (Fat_cin = μc·N)."
      ]
    },
    {
      chapterNumber: 3,
      title: "Trabalho Mecânico, Potência e Rendimento",
      targetSkill: "H20, H21 — Quantificar a transferência de energia por forças e calcular potência útil",
      practiceModuleId: "natureza/mecanica",
      deepContent: `
O Trabalho mecânico mede a quantidade de energia transferida a um corpo pela ação de uma força ao longo de um deslocamento.

1. Trabalho de uma Força Constante:
Para uma força F constante que atua sobre um corpo durante um deslocamento d formando um ângulo θ com a direção do movimento:
• Fórmula: W = F · d · cos θ (unidade no SI: Joule = N · m).
• Classificação do Trabalho pelo Ângulo θ:
  - Trabalho Motor (0° ≤ θ < 90°): cos θ > 0. A força favorece o movimento, injetando energia cinética no corpo (W > 0).
  - Trabalho Resistente (90° < θ ≤ 180°): cos θ < 0. A força se opõe ao movimento, retirando energia do corpo (ex: trabalho da força de atrito, onde θ = 180° e cos 180° = -1, gerando W_atrito = -Fat · d).
  - Trabalho Nulo (θ = 90°): cos 90° = 0. Forças perpendiculares ao deslocamento NÃO realizam trabalho mecânico (ex: a força normal e o peso em deslocamento horizontal).

2. Trabalho de Força Variável:
Quando a força varia em função da posição (como na força elástica F = k·x), o trabalho não pode ser calculado por fórmula direta simples. Ele é determinado numericamente pela ÁREA sob o gráfico F × d.
• Trabalho da Força Elástica: W_elástico = (k · x²) / 2.

3. Teorema da Energia Cinética (TEC):
"O trabalho da força resultante que atua sobre um corpo entre dois pontos é igual à variação da sua energia cinética."
• Fórmula: W_resultante = ΔEc = Ec_final - Ec_inicial = (m · v_final² / 2) - (m · v_inicial² / 2).

4. Potência Mecânica e Rendimento:
• Potência Média: Mede a rapidez com que o trabalho é realizado ou a energia é transferida por unidade de tempo:
  Pot = W / Δt = F · vm (unidade no SI: Watt = Joule / segundo).
• Rendimento de Máquinas (η): Nenhuma máquina real possui eficiência de 100%. Parte da potência total consumida é dissipada sob a forma de calor:
  Potência Total = Potência Útil + Potência Dissipada.
  Rendimento: η = Potência Útil / Potência Total (adimensional, geralmente expresso em porcentagem %).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Potência Útil de um Motor de Guindaste",
          enunciado: "Um guindaste elétrico eleva uma carga de concreto de massa m = 600 kg a uma altura de 20 metros em um tempo de 30 segundos, com velocidade constante. Adote g = 10 m/s². Determine o trabalho realizado pelo guindaste e a potência mecânica útil desenvolvida pelo motor.",
          stepByStep: [
            "Passo 1: Calcule o trabalho para elevar a carga com velocidade constante:",
            "A força exercida pelo cabo equilibra o peso da carga: F = P = m · g = 600 · 10 = 6000 N.",
            "Trabalho: W = F · h = 6000 N · 20 m = 120.000 Joules (120 kJ).",
            "Passo 2: Calcule a potência útil:",
            "Pot_útil = W / Δt = 120.000 J / 30 s = 4.000 Watts = 4 kW."
          ],
          gabarito: "Trabalho = 120.000 J (120 kJ) e Potência útil = 4.000 W (4 kW)."
        }
      ],
      realWorldApplications: [
        "Cálculo de consumo energético de eletrodomésticos e etiquetagem Procel de eficiência energética em motores.",
        "Potência de usinas hidrelétricas obtida pela vazão volumétrica de água em quedas de represas.",
        "Desempenho aerodinâmico de veículos para reduzir o trabalho resistente do arrasto do ar."
      ],
      commonMisconceptions: [
        "Achar que segurar um peso imóvel de 50 kg parado no ar durante 10 minutos realiza trabalho mecânico físico (se o deslocamento d = 0, o trabalho mecânico da física é RIGOROSAMENTE ZERO).",
        "Confundir Joule (energia) com Watt (potência = energia por unidade de tempo).",
        "Acreditar que o trabalho de forças perpendiculares (como a força centrípeta em trajetórias circulares) pode alterar a velocidade escalar do móvel (a força centrípeta tem trabalho nulo)."
      ],
      quickReviewPoints: [
        "W = F·d·cos θ; se θ = 90°, W = 0.",
        "Força de atrito realiza trabalho resistente negativo (retira energia): W_fat = -Fat·d.",
        "Teorema da Energia Cinética: W_res = ΔEc = (m·v²)/2 - (m·v₀²)/2.",
        "Potência: Pot = W / Δt = F·v  (unidade: Watt = J/s).",
        "Rendimento: η = Pot_útil / Pot_total."
      ]
    },
    {
      chapterNumber: 4,
      title: "Conservação da Energia Mecânica",
      targetSkill: "H20, H21 — Analisar transformações de energia mecânica em sistemas conservativos e dissipativos",
      practiceModuleId: "natureza/mecanica",
      deepContent: `
O Princípio da Conservação da Energia é um dos pilares mais fundamentais e universais de toda a Física: "A energia não pode ser criada nem destruída; apenas transformada de uma modalidade em outra."

1. Modalidades de Energia Mecânica (EM):
• Energia Cinética (Ec): Associada ao movimento dos corpos com velocidade v:
  Ec = (m · v²) / 2.
• Energia Potencial Gravitacional (Epg): Energia armazenada pela posição em relação a um referencial de altura h no campo gravitacional:
  Epg = m · g · h.
• Energia Potencial Elástica (Epe): Energia armazenada na deformação x de um corpo elástico com constante k:
  Epe = (k · x²) / 2.
• Energia Mecânica Total: EM = Ec + Epg + Epe.

2. Sistemas Mecânicos Conservativos:
Em um sistema conservativo, atuam exclusivamente forças conservativas (força peso, força gravitacional e força elástica). Não há atrito nem resistência do ar.
• Princípio de Conservação: A Energia Mecânica total permanece RIGOROSAMENTE CONSTANTE em todos os pontos da trajetória:
  EM_inicial = EM_final  ⇒  Ec_i + Ep_i = Ec_f + Ep_f.
• Exemplo clássico da Montanha-Russa:
  - No ponto mais alto em repouso: toda a energia é Potencial (Ec = 0; Ep é máxima).
  - Ao descer até o ponto mais baixo: a energia potencial é integralmente convertida em Cinética (Ep = 0; Ec e velocidade são máximas).

3. Sistemas Mecânicos Dissipativos:
Em sistemas reais com forças de atrito ou resistência do ar (forças dissipativas), parte da energia mecânica é degradada e convertida em energia térmica (calor), energia acústica (som) ou deformação permanente.
• Balanço Energético:
  EM_final = EM_inicial - |W_dissipado|  OU  W_forças_dissipativas = EM_final - EM_inicial = ΔEM.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O Carrinho na Montanha-Russa sem Atrito",
          enunciado: "Um carrinho de montanha-russa de massa m parte do repouso do ponto A situado a uma altura hA = 20 metros em relação ao solo. Desprezando qualquer tipo de atrito e adotando g = 10 m/s², calcule a velocidade escalar do carrinho ao passar pelo ponto B situado a uma altura hB = 7,2 metros.",
          stepByStep: [
            "Passo 1: Estabeleça o princípio de conservação da energia mecânica (sistema conservativo):",
            "EM(ponto A) = EM(ponto B)",
            "Passo 2: Escreva as energias no ponto A (parte do repouso, vA = 0):",
            "EM_A = Ec_A + Epg_A = 0 + m · g · hA = m · 10 · 20 = 200 · m.",
            "Passo 3: Escreva as energias no ponto B (possui altura hB e velocidade vB):",
            "EM_B = (m · vB² / 2) + m · g · hB = (m · vB² / 2) + m · 10 · 7,2 = (m · vB² / 2) + 72 · m.",
            "Passo 4: Iguale as energias e cancele a massa m em todos os termos:",
            "200 · m = (m · vB² / 2) + 72 · m",
            "200 = (vB² / 2) + 72",
            "vB² / 2 = 200 - 72 = 128",
            "vB² = 256  ⇒  vB = √256 = 16 m/s."
          ],
          gabarito: "A velocidade no ponto B é de 16 m/s (aproximadamente 57,6 km/h)."
        }
      ],
      realWorldApplications: [
        "Dimensionamento de usinas hidrelétricas (conversão de energia potencial da represa em cinética na turbina e elétrica no gerador).",
        "Funcionamento de amortecedores de veículos e molas de esteiras ergométricas.",
        "Cálculo de frenagem regenerativa em carros elétricos (onde a energia cinética de frenagem é convertida de volta em energia química na bateria)."
      ],
      commonMisconceptions: [
        "Achar que a conservação da energia mecânica depende da massa do corpo (no exemplo da montanha-russa sem atrito, a massa cancela e a velocidade final depende apenas da diferença de altura).",
        "Acreditar que atrito 'destrói' energia (a energia não é destruída; ela é dissipada em calor e distribuída no ambiente de forma de menor utilidade mecânica).",
        "Esquecer de elevar a velocidade ao quadrado na fórmula da energia cinética."
      ],
      quickReviewPoints: [
        "Ec = (m·v²)/2  |  Epg = m·g·h  |  Epe = (k·x²)/2.",
        "Sistema conservativo: EM_inicial = EM_final.",
        "A velocidade em queda livre a partir do repouso independe da massa: v = √(2·g·h).",
        "Sistema dissipativo: EM_final = EM_inicial - Energia dissipada (calor)."
      ]
    },
    {
      chapterNumber: 5,
      title: "Quantidade de Movimento, Impulso e Colisões",
      targetSkill: "H20, H21 — Analisar colisões mecânicas, conservação do momento e dispositivos de segurança veicular",
      practiceModuleId: "natureza/mecanica",
      deepContent: `
A dinâmica de choques e impactos estuda as grandezas vetoriais que descrevem a transferência de movimento e as interações instantâneas de alta força.

1. Quantidade de Movimento (Momento Linear):
Grandeza vetorial que quantifica a 'inércia de movimento' de um corpo:
• Fórmula: Q = m · v (unidade no SI: kg · m/s).
• Possui a mesma direção e o mesmo sentido do vetor velocidade v.

2. Impulso de uma Força (I):
Grandeza vetorial que mede o efeito acumulado de uma força F aplicada durante um intervalo de tempo Δt:
• Fórmula para força constante: I = F · Δt (unidade no SI: N · s = kg · m/s).
• Teorema do Impulso: O impulso da força resultante é igual à variação da quantidade de movimento do corpo:
  I_resultante = ΔQ = Q_final - Q_inicial = m · v_final - m · v_inicial.

3. O Princípio de Segurança dos Airbags e Zonas de Deformação:
Em uma colisão veicular, a variação da quantidade de movimento do passageiro (ΔQ) para ir da velocidade de tráfego até o repouso é um valor fixo determinado pela sua massa e velocidade inicial:
• Como I = F_média · Δt = ΔQ (constante):
  F_média = ΔQ / Δt.
• O airbag, os cintos com pré-tensionador e a frente deformável do automóvel aumentam significativamente o tempo de desaceleração (Δt).
• Ao aumentar o tempo de impacto Δt por um fator de 5 a 10 vezes, a força média de impacto F_média sobre os órgãos e ossos do passageiro é reduzida proporcionalmente na mesma proporção, salvando vidas de traumas fatais.

4. Conservação da Quantidade de Movimento em Sistemas Isolados:
Em qualquer sistema livre de forças externas resultantes (sistema mecanicamente isolado), a quantidade de movimento total vetorial antes do choque é IGUAL à quantidade de movimento total vetorial após o choque:
• Fórmula: Q_total(antes) = Q_total(depois).
• Tipos de Colisão Mecânica:
  1. Perfeitamente Elástica: Conserva a quantidade de movimento e conserva integralmente a energia cinética total (Ec_antes = Ec_depois). Os corpos se chocam e se separam sem deformação permanente.
  2. Inelástica: Conserva a quantidade de movimento, mas dissipa a máxima quantidade de energia cinética possível sob a forma de deformação e calor. Os corpos saem GRUDADOS com a mesma velocidade final comum após o choque (v₁' = v₂' = v_comum).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Colisão Inelástica de Dois Veículos",
          enunciado: "Um caminhão de massa M = 3000 kg que trafega a 20 m/s colide na traseira de um carro de passeio de massa m = 1000 kg que estava parado no sinal vermelho. Imediatamente após a colisão, os dois veículos engatam seus para-choques e seguem juntos na mesma direção. Desprezando o atrito durante a colisão instantânea, determine a velocidade comum do conjunto logo após o impacto.",
          stepByStep: [
            "Passo 1: Como o sistema é isolado de forças externas no instante do choque, a quantidade de movimento total se conserva:",
            "Q_antes = Q_depois",
            "Passo 2: Calcule a quantidade de movimento antes da colisão:",
            "Q_antes = (M · v_caminhão) + (m · v_carro) = (3000 · 20) + (1000 · 0) = 60.000 kg·m/s.",
            "Passo 3: Escreva a quantidade de movimento após a colisão (os veículos movem-se grudados com velocidade comum vc):",
            "Q_depois = (M + m) · vc = (3000 + 1000) · vc = 4000 · vc.",
            "Passo 4: Iguale e isole a velocidade comum vc:",
            "4000 · vc = 60.000  ⇒  vc = 60.000 / 4000 = 15 m/s."
          ],
          gabarito: "A velocidade comum do conjunto após a colisão inelástica é de 15 m/s (54 km/h)."
        }
      ],
      realWorldApplications: [
        "Engenharia de segurança veicular e testes de crash-test com bonecos antropomórficos.",
        "Propulsão de foguetes espaciais no vácuo baseada na conservação da quantidade de movimento (expulsão de gases em altíssima velocidade para trás impulsiona o foguete para a frente).",
        "Equipamentos de proteção individual (capacetes de ciclistas e motociclistas com isopor expandido para aumentar o tempo de impacto no crânio)."
      ],
      commonMisconceptions: [
        "Achar que em colisões inelásticas a quantidade de movimento não se conserva (a quantidade de movimento se conserva SEMPRE em sistemas isolados; o que não se conserva é a energia cinética).",
        "Acreditar que o airbag amortece o impacto por ser 'macio como um travesseiro de penas' (o airbag funciona dilatando o tempo de parada Δt para diminuir a força sobre o corpo).",
        "Ignorar a natureza vetorial da quantidade de movimento ao somar velocidades com sentidos opostos."
      ],
      quickReviewPoints: [
        "Q = m·v  (vetorial, mesma direção e sentido de v).",
        "Teorema do Impulso: I = F·Δt = ΔQ = m·v_final - m·v_inicial.",
        "Segurança veicular: Maior Δt de colisão = Menor força de impacto F_média.",
        "Sistema isolado: Q_antes = Q_depois.",
        "Colisão perfeitamente inelástica: corpos saem juntos grudados com máxima perda de energia cinética."
      ]
    }
  ]
};
