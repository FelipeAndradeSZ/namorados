/**
 * LIVRO DIDÁTICO DIGITAL: Ondulatória, Acústica e Óptica no ENEM
 * Área: Ciências da Natureza e suas Tecnologias (Física)
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_NATUREZA_ONDULATORIA_OPTICA = {
  id: "livro-natureza-ondulatoria-optica",
  area: "natureza",
  title: "Ondulatória, Acústica e Óptica",
  subtitle: "Propagação de ondas, fenômenos ondulatórios, qualidades do som e óptica da visão",
  estimatedReadingTimeMinutes: 65,
  badge: "Livro Essencial • Ondulatória e Óptica",
  coverColor: "from-violet-950 to-purple-900",
  prerequisites: [
    "Noções fundamentais de cinemática escalar (velocidade, tempo e frequência)",
    "Compreensão de funções trigonométricas básicas (seno e cosseno) e geometria euclidiana plana"
  ],
  learningObjectives: [
    "Dominar a Equação Fundamental da Ondulatória (V = λ·f) e sua invariância em meios homogêneos",
    "Diferenciar com precisão os fenômenos ondulatórios: reflexão, refração, difração, interferência, polarização e ressonância",
    "Compreender as qualidades fisiológicas do som (altura, intensidade e timbre) e o Efeito Doppler sonoro",
    "Aplicar as leis da reflexão e refração a espelhos esféricos e prismas ópticos",
    "Analisar o funcionamento do olho humano e o uso de lentes corretivas para miopia, hipermetropia e presbiopia"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "Natureza das Ondas e a Equação Fundamental (V = λ · f)",
      targetSkill: "H20, H21 — Caracterizar grandezas periódicas em ondas mecânicas e eletromagnéticas",
      practiceModuleId: "natureza/ondulatoria",
      deepContent: `
Uma onda é uma perturbação que se propaga através do espaço ou de um meio material transportando exclusivamente ENERGIA e QUANTIDADE DE MOVIMENTO, sem transportar matéria.

1. Classificação das Ondas:
• Quanto à Natureza:
  - Ondas Mecânicas: Exigem obrigatoriamente um meio material (sólido, líquido ou gasoso) para se propagar; NÃO se propagam no vácuo (ex: som, ondas no mar, ondas em cordas de violão).
  - Ondas Eletromagnéticas: Perturbações periódicas oscilantes de campos elétricos e magnéticos perpendiculares entre si. Propagam-se no vácuo com velocidade máxima c ≈ 3 · 10⁸ m/s e também em meios materiais transparentes (ex: luz visível, ondas de rádio, micro-ondas, raios X, radiação ultravioleta e infravermelha).
• Quanto à Direção de Vibração:
  - Ondas Transversais: A direção de vibração é PERPENDICULAR à direção de propagação da onda (ex: ondas eletromagnéticas, onda em uma corda tensionada). Podem ser polarizadas.
  - Ondas Longitudinais: A direção de vibração é PARALELA à direção de propagação da onda (ex: ondas sonoras em fluidos como o ar ou a água). NÃO podem ser polarizadas.

2. Grandezas Físicas da Onda Periódica:
• Comprimento de Onda (λ - lambda): Distância física entre duas cristas consecutivas, dois vales consecutivos ou um ciclo espacial completo (unidade no SI: metro).
• Período (T): Tempo necessário para que um ciclo completo ou oscilação se complete (unidade no SI: segundo).
• Frequência (f): Número de oscilações completas por unidade de tempo:
  f = 1 / T  (unidade no SI: Hertz = s⁻¹).
  - A frequência é uma CARACTERÍSTICA INTRÍNSECA DA FONTE EMISSORA. Quando uma onda muda de meio (refração), sua frequência permanece RIGOROSAMENTE CONSTANTE!
• Velocidade de Propagação (v): Determinada EXCLUSIVAMENTE pelo MEIO de propagação:
  v = λ / T = λ · f.
  - Se a onda passar para outro meio com velocidade diferente, a frequência f se mantém fixa, e o comprimento de onda λ varia proporcionalmente à velocidade!
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Mudança de Meio e Invariância da Frequência",
          enunciado: "Uma estação de rádio emite ondas eletromagnéticas com frequência de 100 MHz (1 · 10⁸ Hz). No ar, a velocidade da luz é c = 3 · 10⁸ m/s. Ao penetrar em uma lente de vidro cujo índice de refração faz a velocidade cair para 2 · 10⁸ m/s, quais são os comprimentos de onda da radiação no ar e no vidro, respectivamente?",
          stepByStep: [
            "Passo 1: Calcule o comprimento de onda no ar utilizando a Equação Fundamental: v = λ · f:",
            "λ_ar = v_ar / f = (3 · 10⁸ m/s) / (1 · 10⁸ Hz) = 3 metros.",
            "Passo 2: Reconheça a invariância da frequência:",
            "Ao refratar para o vidro, a frequência f da fonte NÃO muda: f = 1 · 10⁸ Hz.",
            "Passo 3: Calcule o novo comprimento de onda no vidro com a nova velocidade v_vidro = 2 · 10⁸ m/s:",
            "λ_vidro = v_vidro / f = (2 · 10⁸ m/s) / (1 · 10⁸ Hz) = 2 metros.",
            "Conclusão: Como a velocidade caiu em um terço, o comprimento de onda encurtou na mesma proporção mantendo a frequência inalterada."
          ],
          gabarito: "λ no ar = 3 metros; λ no vidro = 2 metros."
        }
      ],
      realWorldApplications: [
        "Transmissão de telecomunicações por fibra óptica e faixas de frequência Wi-Fi (2,4 GHz e 5 GHz).",
        "Sistemas de ultrassonografia médica obstétrica e ecocardiografia baseados na reflexão de ondas sonoras mecânicas de alta frequência.",
        "Sintonização de instrumentos musicais em orquestras a partir do diapasão padrão lá de 440 Hz."
      ],
      commonMisconceptions: [
        "Achar que o som se propaga no vácuo cósmico como nos filmes de ficção científica (o som é mecânico e precisa de matéria para existir; no vácuo há silêncio absoluto).",
        "Acreditar que a frequência de uma onda varia quando ela passa do ar para a água (a frequência depende apenas da fonte; é o comprimento de onda λ e a velocidade v que variam).",
        "Confundir onda transversal com onda longitudinal (o som no ar é puramente longitudinal)."
      ],
      quickReviewPoints: [
        "Onda transporta energia e quantidade de movimento, NUNCA matéria.",
        "V = λ · f  |  f = 1 / T.",
        "Velocidade depende do meio; frequência depende exclusivamente da fonte emissora.",
        "Ondas eletromagnéticas propagam-se no vácuo; ondas sonoras mecânicas necessitam de meio material."
      ]
    },
    {
      chapterNumber: 2,
      title: "Fenômenos Ondulatórios: Do Eco à Polarização",
      targetSkill: "H20, H21 — Reconhecer e diferenciar fenômenos ondulatórios em situações cotidianas e tecnológicas",
      practiceModuleId: "natureza/ondulatoria",
      deepContent: `
O comportamento das ondas diante de obstáculos, fronteiras entre meios e superposições é governado por fenômenos ondulatórios universais.

1. Os Principais Fenômenos Ondulatórios:
• Reflexão:
  - A onda atinge uma superfície que separa dois meios e retorna ao meio original.
  - Velocidade, frequência e comprimento de onda NÃO se alteram (v, f e λ constantes).
  - Em cordas: se a extremidade for FIXA, a onda reflete com INVERSÃO DE FASE (180°); se a extremidade for LIVRE, reflete SEM inversão de fase.
• Refração:
  - A onda atravessa a fronteira e passa a se propagar em um segundo meio diferente.
  - A velocidade v e o comprimento de onda λ sofrem alteração; a frequência f permanece CONSTANTE.
• Difração:
  - Capacidade da onda de contornar obstáculos ou atravessar fendas cuja abertura tenha dimensões da mesma ordem de grandeza do seu comprimento de onda (abertura d ≈ λ).
  - Explicação cotidiana: É possível ouvir a voz de alguém conversando no cômodo ao lado mesmo com a porta entreaberta porque o som (λ ≈ 1 metro) tem o tamanho da porta e sofre intensa difração, enquanto a luz visível (λ ≈ 10⁻⁷ m) tem comprimento ínfimo e projeta sombras retilíneas.
• Interferência:
  - Superposição de duas ou mais ondas no mesmo ponto do espaço:
    * Construtiva: Crista encontra crista (ou vale encontra vale) em fase; as amplitudes se somam gerando reforço de intensidade.
    * Destrutiva: Crista encontra vale em oposição de fase; as amplitudes se subtraem, podendo anular o sinal momentaneamente (princípio dos fones com cancelamento ativo de ruído).
• Polarização:
  - Seleção de uma única direção de oscilação para o campo elétrico de uma onda transversal através de um filtro polarizador (polaróide).
  - REGRA DE OURO DO ENEM: A polarização é EXCLUSIVA de ONDAS TRANSVERSAIS! Ondas longitudinais (como o som no ar) JAMAIS podem ser polarizadas.
• Ressonância:
  - Ocorre quando um sistema oscilatório é excitado por uma força periódica externa cuja frequência coincide com uma das frequências naturais de vibração do próprio sistema.
  - Consequência: Absorção máxima de energia e aumento contínuo e dramático da amplitude de oscilação (ex: ponte de Tacoma Narrows oscilando com o vento, taça de cristal quebrando com a voz de um soprano, forno de micro-ondas aquecendo a água pela frequência de ressonância molecular).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O Princípio dos Fones com Cancelamento de Ruído",
          enunciado: "Fones de ouvido modernos com cancelamento ativo de ruído possuem microfones externos que captam os ruídos do ambiente externo e geram um sinal sonoro emitido pelos alto-falantes internos para anular o barulho incômodo. Qual é o fenômeno ondulatório empregado e qual a condição de fase da onda gerada pelo fone?",
          stepByStep: [
            "Passo 1: Identifique a intenção do dispositivo:",
            "O objetivo é anular ou atenuar o ruído externo indesejado no canal auditivo do usuário.",
            "Passo 2: Reconheça o fenômeno de superposição de ondas:",
            "Para anular a amplitude sonora de uma onda incidente, deve-se gerar uma segunda onda de mesma frequência e mesma amplitude, porém defasada de 180° (em oposição de fase).",
            "Passo 3: Conclua a natureza do processo:",
            "Ao se sobreporem a crista do ruído externo com o vale do sinal emitido pelo circuito eletrônico do fone, ocorre INTERFERÊNCIA DESTRUTIVA, resultando em amplitude sonora líquida próxima de zero."
          ],
          gabarito: "Interferência destrutiva gerada pela emissão de ondas sonoras em oposição de fase (180° de defasagem)."
        }
      ],
      realWorldApplications: [
        "Óculos de sol polarizados que eliminam o reflexo incômodo da luz refletida em superfícies horizontais de lagos e asfalto.",
        "Tecnologia militar antirradar 'Stealth' em navios com materiais absorventes por interferência destrutiva.",
        "Ressonância Magnética Nuclear (RMN) utilizada em exames de imagem em hospitais para mapear tecidos orgânicos moles."
      ],
      commonMisconceptions: [
        "Achar que o som pode ser polarizado (o som é onda longitudinal; apenas ondas transversais sofrem polarização).",
        "Confundir difração com refração (difração é contornar obstáculo ou passar por fenda; refração é mudar de meio com alteração de velocidade).",
        "Achar que a ressonância necessita de uma força bruta gigantesca (uma força suave aplicada no ritmo exato da frequência própria de vibração basta para acumular amplitude catastrófica)."
      ],
      quickReviewPoints: [
        "Reflexão: bate e volta no mesmo meio; v, f e λ inalterados.",
        "Refração: muda de meio; v e λ variam; f constante.",
        "Difração: contorna obstáculos; mais intensa quando fenda d ≈ λ.",
        "Interferência: superposição construtiva (soma) ou destrutiva (anulação).",
        "Polarização: seleciona plano de vibração; exclusiva de ondas transversais.",
        "Ressonância: frequência externa = frequência própria -> amplitude máxima."
      ]
    },
    {
      chapterNumber: 3,
      title: "Acústica: Qualidades Fisiológicas do Som e Efeito Doppler",
      targetSkill: "H20, H21 — Distinguir propriedades perceptivas do som e calcular o deslocamento Doppler",
      practiceModuleId: "natureza/ondulatoria",
      deepContent: `
A Acústica é o ramo da física ondulatória que estuda a produção, propagação e percepção biológica das ondas sonoras. O ouvido humano saudável percebe frequências na faixa audível de 20 Hz a 20.000 Hz (20 kHz). Abaixo de 20 Hz situam-se os infrassons; acima de 20 kHz, os ultrassons.

1. As Três Qualidades Fisiológicas do Som:
O ouvido humano decodifica três características físicas independentes do estímulo sonoro:
• Altura (Grave vs. Agudo):
  - Determinada EXCLUSIVAMENTE pela FREQUÊNCIA (f) da onda sonora.
  - Sons Graves (Baixos): Baixa frequência (ex: voz de baixo, contrabaixo, bumbo de bateria).
  - Sons Agudos (Altos): Alta frequência (ex: voz de soprano, flauta transversal, violino fino).
  - Atenção ao vocabulário: "Falar alto" na física significa falar agudo, e não com volume forte!
• Intensidade (Forte vs. Fraco / Volume):
  - Determinada pela AMPLITUDE da onda e pela quantidade de energia transportada por unidade de área e tempo.
  - Som Forte: Grande amplitude de vibração (onda com alta crista; alto volume).
  - Som Fraco: Pequena amplitude de vibração (baixo volume).
  - Nível Sonoro em Decibéis (dB): Medido em escala logarítmica: β = 10 · log(I / I₀), onde I₀ = 10⁻¹² W/m² é o limiar de audibilidade humana. Um acréscimo de 10 dB multiplica a intensidade sonora real por 10 vezes; um acréscimo de 20 dB multiplica por 100 vezes!
• Timbre:
  - Permite distinguir dois sons de mesma frequência fundamental (mesma altura) e mesma amplitude (mesma intensidade) emitidos por instrumentos musicais diferentes (ex: distinguir a nota Lá de 440 Hz tocada por um piano da mesma nota Lá tocada por um violino).
  - Físico: O timbre depende da FORMA DA ONDA e da composição de harmônicos superiores que acompanham a frequência fundamental.

2. O Efeito Doppler Sonoro:
É a aparente alteração da frequência (e da altura percebida) de uma onda observada por um receptor em virtude do movimento relativo de aproximação ou afastamento entre a fonte emissora e o observador.
• Na APROXIMAÇÃO relativa:
  - As frentes de onda são comprimidas espacialmente no sentido do movimento.
  - O observador intercepta mais cristas de onda por segundo.
  - Frequência aparente percebida é MAIOR que a frequência real emitida (f_aparente > f_fonte).
  - O som é percebido mais AGUDO!
• No AFASTAMENTO relativo:
  - As frentes de onda se distendem espacialmente.
  - O observador intercepta menos cristas de onda por segundo.
  - Frequência aparente percebida é MENOR que a frequência real emitida (f_aparente < f_fonte).
  - O som é percebido mais GRAVE!
• Exemplo clássico: A sirene de uma ambulância de emergência soa aguda enquanto se aproxima de um pedestre e torna-se subitamente grave assim que passa e se afasta dele na rua.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: A Escala Logarítmica dos Decibéis",
          enunciado: "O ruído de uma conversa normal em uma sala de aula possui nível sonoro de 60 dB. Uma britadeira operando em uma obra na calçada emite som com nível sonoro de 90 dB. Quantas vezes a intensidade física da onda sonora (em W/m²) da britadeira é maior do que a intensidade da conversa em sala?",
          stepByStep: [
            "Passo 1: Lembre-se da definição da escala decibel: β = 10 · log(I / I₀):",
            "A diferença de nível sonoro é: Δβ = 90 dB - 60 dB = 30 dB.",
            "Passo 2: Analise a propriedade logarítmica da escala:",
            "Cada acréscimo de 10 dB corresponde à multiplicação da intensidade física por um fator de 10 (10¹ = 10).",
            "Para uma diferença de 30 dB, temos 3 saltos de 10 dB:",
            "Fator de ampliação = 10^(Δβ / 10) = 10^(30 / 10) = 10³ = 1000 vezes.",
            "Passo 3: Conclua a proporção física:",
            "A intensidade da onda sonora da britadeira é 1.000 vezes maior que a da conversa humana."
          ],
          gabarito: "A intensidade física da britadeira é 1.000 vezes maior."
        }
      ],
      realWorldApplications: [
        "Radares de velocidade em avenidas que calculam a velocidade de veículos pelo desvio Doppler de micro-ondas refletidas na carroceria.",
        "Exames médicos de ultrassonografia com Doppler para medir a velocidade do fluxo sanguíneo em artérias e detectar tromboses.",
        "Normas regulamentadoras de medicina do trabalho (NR-15) que estipulam limites de exposição a decibéis para prevenir perda auditiva induzida por ruído (PAIR)."
      ],
      commonMisconceptions: [
        "Confundir 'som alto' com 'som de volume forte' (na física, som alto = agudo/alta frequência; som forte = alta amplitude/volume).",
        "Achar que o Efeito Doppler altera a frequência emitida pela sirene da ambulância (a fonte continua emitindo a mesma frequência real; é a frequência PERCEBIDA pelo ouvinte que muda devido ao movimento relativo).",
        "Acreditar que 80 dB é o dobro de 40 dB em intensidade (como a escala é logarítmica, 80 dB é 10.000 vezes mais intenso que 40 dB!)."
      ],
      quickReviewPoints: [
        "Altura: depende da frequência (grave = baixa f; agudo = alta f).",
        "Intensidade: depende da amplitude (fraco = baixa amp; forte = alta amp).",
        "Timbre: forma da onda e harmônicos (distingue instrumentos na mesma nota).",
        "Doppler aproximação: som mais agudo (f_aparente > f_real).",
        "Doppler afastamento: som mais grave (f_aparente < f_real)."
      ]
    },
    {
      chapterNumber: 4,
      title: "Óptica Geométrica: Reflexão, Espelhos e a Equação de Gauss",
      targetSkill: "H20, H21 — Aplicar as leis da reflexão e a equação de Gauss na formação de imagens",
      practiceModuleId: "natureza/ondulatoria",
      deepContent: `
A Óptica Geométrica estuda a propagação da luz baseando-se no modelo de raios luminosos retilíneos em meios homogêneos e transparentes.

1. Princípios da Óptica Geométrica:
• Propagação Retilínea: Em meios homogêneos e isotrópicos, a luz propaga-se em linha reta (explica sombras, penumbras e eclipses solares e lunares).
• Independência dos Raios Luminosos: O cruzamento de feixes luminosos não altera a trajetória ou propriedades de nenhum deles.
• Reversibilidade da Trajetória: O caminho seguido pela luz independe do sentido de propagação.

2. Leis da Reflexão da Luz:
1ª Lei: O raio incidente, o raio refletido e a reta normal à superfície no ponto de incidência são COPLANARES (pertencem ao mesmo plano).
2ª Lei: O ângulo de incidência é rigorosamente IGUAL ao ângulo de reflexão em relação à reta normal: i = r.

3. Espelho Plano:
• Imagem formada: SEMPRE Virtual, Direita, de Mesmo Tamanho do objeto e Simétrica (a distância do objeto ao espelho p é igual à distância da imagem ao espelho p': p = p').
• Enantiomorfismo: Inversão lateral da imagem (a mão direita do observador parece a mão esquerda da sua imagem no espelho).

4. Espelhos Esféricos de Gauss:
Condições de nitidez de Gauss: pequeno ângulo de abertura (menor que 10°) e raios paraxiais (próximos do eixo principal).
• Espelho Côncavo: Superfície refletora interna. Foco real positivo (f > 0). Pode formar imagens reais (invertidas) ou imagens virtuais (direitas e ampliadas quando o objeto está entre o foco e o vértice, como no espelho de maquiagem ou odontológico).
• Espelho Convexo: Superfície refletora externa. Foco virtual negativo (f < 0).
  - FORMAÇÃO ÚNICA DE IMAGEM: Para QUALQUER posição do objeto real diante de um espelho convexo, a imagem é SEMPRE:
    Virtual, Direita, Menor e situada entre o Vértice e o Foco!
  - Vantagem: Proporciona campo visual ampliado (utilizado em retrovisores de ônibus e espelhos de segurança de saídas de garagens e corredores de supermercados).
• Equação dos Pontos Conjugados de Gauss:
  1 / f = 1 / p + 1 / p'
• Aumento Linear Transversal (A):
  A = i / o = - p' / p.
  - Convenções de sinais: f > 0 (côncavo), f < 0 (convexo); p' > 0 (imagem real invertida), p' < 0 (imagem virtual direita).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Imagem em Espelho Côncavo",
          enunciado: "Um objeto luminoso de altura o = 5 cm é posicionado sobre o eixo principal de um espelho côncavo a uma distância de p = 30 cm do seu vértice. O raio de curvatura do espelho é R = 40 cm. Calcule a distância focal, a posição da imagem (p') e a altura da imagem (i).",
          stepByStep: [
            "Passo 1: Calcule a distância focal do espelho côncavo:",
            "A distância focal é a metade do raio de curvatura: f = R / 2 = 40 / 2 = 20 cm (positivo por ser côncavo).",
            "Passo 2: Aplique a Equação de Gauss: 1/f = 1/p + 1/p':",
            "1/20 = 1/30 + 1/p'",
            "1/p' = 1/20 - 1/30 = (3 - 2) / 60 = 1/60",
            "p' = +60 cm.",
            "Como p' > 0, a imagem é REAL e se forma a 60 cm na frente do espelho.",
            "Passo 3: Calcule a altura da imagem utilizando o aumento linear A = i/o = -p'/p:",
            "i / 5 = -(60) / 30",
            "i / 5 = -2  ⇒  i = -10 cm.",
            "O sinal negativo indica que a imagem é INVERTIDA, com altura de 10 cm (duas vezes maior que o objeto)."
          ],
          gabarito: "Distância da imagem p' = 60 cm (imagem real); altura i = -10 cm (imagem invertida e ampliada)."
        }
      ],
      realWorldApplications: [
        "Espelhos convexos em corredores de hospitais, ônibus e saídas de garagens para ampliar o campo de visão e evitar colisões.",
        "Espelhos côncavos em telescópios refletores astronômicos e refletores de faróis veiculares (lâmpada no foco emitindo feixe paralelo).",
        "Espelhos odontológicos de aumento para inspeção detalhada de dentes em clínicas de odontologia."
      ],
      commonMisconceptions: [
        "Achar que espelho convexo pode formar imagem real (o espelho convexo para objeto real forma EXCLUSIVAMENTE imagem virtual, direita e menor).",
        "Esquecer que o foco é metade do raio de curvatura (f = R / 2).",
        "Confundir imagem invertida com imagem virtual (toda imagem real projetável em anteparo é invertida; toda imagem virtual é direita)."
      ],
      quickReviewPoints: [
        "Espelho plano: imagem virtual, direita, mesmo tamanho, simétrica (p = p').",
        "Espelho convexo: imagem sempre VIRTUAL, DIREITA e MENOR; amplo campo de visão.",
        "Espelho côncavo: foco real; objeto entre F e V gera imagem virtual, direita e maior.",
        "Gauss: 1/f = 1/p + 1/p'  |  A = i/o = -p'/p."
      ]
    },
    {
      chapterNumber: 5,
      title: "Refração, Lentes Esféricas e a Óptica da Visão Humana",
      targetSkill: "H20, H21 — Analisar o desvio da luz na refração e prescrever a correção óptica de ametropias oculares",
      practiceModuleId: "natureza/ondulatoria",
      deepContent: `
A Refração é a mudança na velocidade de propagação da luz ao passar obliquamente de um meio transparente para outro de densidade óptica distinta, gerando desvio angular na trajetória.

1. Índice de Refração Absoluto (n):
Mede a resistência que o meio impõe à propagação da luz em relação ao vácuo:
• Fórmula: n = c / v (adimensional, sendo sempre n ≥ 1).
  - Quanto maior o índice de refração n, MENOR é a velocidade v da luz naquele meio ('meio mais refringente').

2. Leis da Refração e Lei de Snell-Descartes:
• 1ª Lei: O raio incidente, o raio refratado e a normal são coplanares.
• 2ª Lei (Snell-Descartes): n₁ · sen(θ₁) = n₂ · sen(θ₂).
  - Ao passar do meio menos refringente para o mais refringente (n₁ < n₂): a velocidade diminui e o raio APROXIMA-SE da normal (θ₁ > θ₂).
  - Ao passar do meio mais refringente para o menos refringente (n₁ > n₂): a velocidade aumenta e o raio AFASTA-SE da normal.

3. Reflexão Total da Luz e Ângulo Limite (L):
Ocorre quando a luz tenta passar do meio MAIS refringente para o MENOS refringente com ângulo de incidência superior ao Ângulo Limite:
• Condições obrigatórias:
  1. A luz deve viajar do meio de MAIOR n para o de MENOR n (n_maior -> n_menor).
  2. O ângulo de incidência deve ser maior que o ângulo limite: i > L, onde sen(L) = n_menor / n_maior.
• Aplicações vitais: Fibra óptica médica em endoscopias e transmissões de internet de altíssima velocidade por reflexão interna total no núcleo de sílica.

4. Lentes Delgadas e Ametropias da Visão Humana:
O olho humano funciona como uma câmera escura com lente convergente biológica flexível (a córnea e o cristalino) projetando imagens REAIS e INVERTIDAS sobre a retina.
• Miopia (Olho Longo):
  - A imagem de objetos distantes se forma ANTES da retina (na frente da retina).
  - O indivíduo enxerga mal de longe.
  - Correção: Lente DIVERGENTE (bordas grossas, vergência/grau negativo), que atrasa o cruzamento dos raios jogando o foco exatamente sobre a retina.
• Hipermetropia (Olho Curto):
  - A imagem de objetos próximos se formaria teoricamente ATRÁS da retina.
  - O indivíduo enxerga mal de perto.
  - Correção: Lente CONVERGENTE (bordas finas, vergência/grau positivo), que antecipa o cruzamento dos raios sobre a retina.
• Presbiopia ('Vista Cansada'):
  - Perda de elasticidade do cristalino e enfraquecimento dos músculos ciliares pelo envelhecimento natural. Dificuldade de acomodação para perto. Corrigida com lentes convergentes ou multifocais.
• Vergência da Lente (Grau):
  V = 1 / f (unidade: dioptria ou grau, com a distância focal f em metros).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Cálculo da Vergência para Miopia",
          enunciado: "Um médico oftalmologista examina um paciente com miopia severa cujo ponto remoto (distância máxima de visão nítida sem lentes) é de apenas 50 centímetros (0,5 metro). Qual deve ser a distância focal e a vergência (grau) da lente divergente receitada para que o paciente consiga enxergar nitidamente objetos situados no infinito?",
          stepByStep: [
            "Passo 1: Entenda a função da lente para o míope:",
            "Para um objeto no infinito (p = ∞, logo 1/p = 0), a lente corretiva deve formar uma imagem virtual na posição do ponto remoto do olho: p' = -0,5 metro (negativo por ser virtual).",
            "Passo 2: Aplique a Equação de Gauss: 1/f = 1/p + 1/p':",
            "1/f = 0 + (1 / -0,5)  ⇒  f = -0,5 metro.",
            "Passo 3: Calcule a Vergência da lente em dioptrias (V = 1 / f):",
            "V = 1 / (-0,5 m) = -2,0 dioptrias (graus).",
            "Conclusão: O sinal negativo confirma que a lente necessária é DIVERGENTE, com -2,0 graus."
          ],
          gabarito: "Distância focal f = -0,5 m e Vergência V = -2,0 dioptrias (lente divergente)."
        }
      ],
      realWorldApplications: [
        "Fibras ópticas em exames de colonoscopia e laparoscopia hospitalar e cabeamento submarino intercontinental de dados.",
        "Cirurgia refrativa a laser (LASIK) para remodelagem da curvatura da córnea e eliminação de miopia.",
        "Miragens no asfalto quente em dias de verão decorrentes da refração contínua em camadas de ar com gradiente térmico."
      ],
      commonMisconceptions: [
        "Confundir a lente do míope com a do hipermetrope: Míope usa lente DIVERGENTE (grau negativo); hipermetrope usa CONVERGENTE (grau positivo).",
        "Achar que a reflexão total pode ocorrer quando a luz passa do ar para o vidro (a reflexão total SÓ ocorre do meio mais refringente para o menos refringente: do vidro para o ar).",
        "Esquecer de converter a distância focal de centímetros para metros ao calcular a vergência V em dioptrias."
      ],
      quickReviewPoints: [
        "Índice de refração: n = c / v  |  Snell: n₁·sen θ₁ = n₂·sen θ₂.",
        "Reflexão total: do maior n para o menor n, com ângulo de incidência i > L.",
        "Olho normal (emétrope): imagem real e invertida formada sobre a retina.",
        "Miopia: foco antes da retina -> lente DIVERGENTE (grau negativo).",
        "Hipermetropia: foco após a retina -> lente CONVERGENTE (grau positivo).",
        "Vergência: V = 1 / f (em metros; unidade: dioptria)."
      ]
    }
  ]
};
