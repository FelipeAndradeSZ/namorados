/**
 * LIVRO DIDÁTICO DIGITAL: Funções e Modelagem Algébrica no ENEM
 * Área: Matemática e suas Tecnologias
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_MATEMATICA_FUNCOES = {
  id: "livro-matematica-funcoes",
  area: "matematica",
  title: "Funções e Modelagem Algébrica",
  subtitle: "Do comportamento linear aos fenômenos exponenciais no ENEM",
  estimatedReadingTimeMinutes: 55,
  badge: "Apostila Completa • Álgebra",
  coverColor: "from-sky-950 to-blue-900",
  prerequisites: [
    "Operações fundamentais com números reais",
    "Equações e sistemas lineares de 1º grau",
    "Plano cartesiano e coordenadas (x, y)",
    "Propriedades básicas de potenciação e radiciação"
  ],
  learningObjectives: [
    "Compreender o conceito formal de função como relação unívoca de dependência entre variáveis",
    "Dominar a taxa de variação média e o coeficiente angular da função afim",
    "Modelar problemas de otimização (máximos e mínimos) através do vértice da parábola",
    "Analisar situações de crescimento e decaimento exponencial em contextos biológicos e financeiros",
    "Interpretar e resolver fenômenos em escala logarítmica (pH, intensidade sonora e escala Richter)"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "Função Afim: Taxa de Variação e Modelagem de Custos",
      targetSkill: "H19, H21 — Modelar e resolver problemas envolvendo funções do 1º grau",
      practiceModuleId: "matematica/funcoes",
      deepContent: `
A função afim é a representação matemática do comportamento com taxa de variação constante. 
Formalmente, é toda função f: ℝ → ℝ dada pela lei algébrica:
f(x) = a·x + b, com a, b ∈ ℝ e a ≠ 0.

1. Significado dos Coeficientes:
• Coeficiente angular (a): Representa a TAXA DE VARIAÇÃO (declividade da reta). É a razão entre a variação de y e a variação de x:
  a = Δy / Δx = (y₂ - y₁) / (x₂ - x₁).
  Se a > 0: a função é estritamente crescente.
  Se a < 0: a função é estritamente decrescente.
  Se a = 0: a função é constante (f(x) = b), reta paralela ao eixo das abscissas.

• Coeficiente linear (b): Representa o PONTO DE INTERSEÇÃO COM O EIXO Y (ordenada de corte), onde x = 0.
  Em problemas aplicados, 'b' quase sempre representa o CUSTO FIXO, o valor inicial ou a taxa de partida.

2. A Raiz ou Zero da Função:
O valor de x para o qual f(x) = 0:
a·x + b = 0  ⇒  x = -b / a.
Geometricamente, é o ponto (-b/a, 0) onde a reta intercepta o eixo das abscissas.

3. Modelagem Econômica de Produção e Custos:
Em economia e logística, modela-se o Custo Total (C) como:
C(q) = Custo Variável + Custo Fixo = (Custo Unitário · q) + Custo Fixo.
A Receita Total (R) em regime de preço fixo: R(q) = Preço · q.
O Ponto de Equilíbrio (Break-Even Point) ocorre quando Receita = Custo Total:
Preço · q = Custo Unitário · q + Custo Fixo.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 1: Análise Comparativa de Serviços Laboratoriais",
          enunciado: "Um laboratório de análises clínicas analisa duas propostas para o aluguel de um espectrômetro automatizado:\n• Empresa A: taxa fixa mensal de R$ 1.200,00 mais R$ 4,00 por amostra processada.\n• Empresa B: taxa fixa mensal de R$ 600,00 mais R$ 7,00 por amostra processada.\nA partir de quantas amostras mensais a proposta da Empresa A torna-se mais vantajosa que a da Empresa B?",
          stepByStep: [
            "Passo 1: Escreva as leis de formação do custo de cada empresa em função do número de amostras (x):",
            "C_A(x) = 4x + 1200",
            "C_B(x) = 7x + 600",
            "Passo 2: Monte a inequação que expressa a Empresa A sendo mais vantajosa (custo menor que B):",
            "C_A(x) < C_B(x)  ⇒  4x + 1200 < 7x + 600",
            "Passo 3: Isole a variável x:",
            "1200 - 600 < 7x - 4x  ⇒  600 < 3x  ⇒  3x > 600  ⇒  x > 200.",
            "Conclusão: Para exatamente 200 amostras o custo é idêntico (R$ 2.000). A partir de 201 amostras processadas no mês, a Empresa A torna-se mais econômica."
          ],
          gabarito: "A partir de 201 amostras processadas."
        },
        {
          title: "Exemplo Resolvido 2: Interpretação de Gráficos e Coeficiente Angular",
          enunciado: "O nível de água de um reservatório cilíndrico de 50.000 litros diminui linearmente devido a uma vazão constante. Às 8h da manhã o volume era de 42.000 L e, às 14h do mesmo dia, o volume era de 30.000 L. Mantendo-se essa taxa de esvaziamento, a que horas o reservatório estará completamente vazio?",
          stepByStep: [
            "Passo 1: Calcule a taxa de variação (vazão horária):",
            "Intervalo de tempo: 14h - 8h = 6 horas.",
            "Variação de volume: 30.000 L - 42.000 L = -12.000 L.",
            "Taxa de variação: a = -12.000 / 6 = -2.000 L/h (o reservatório perde 2.000 L por hora).",
            "Passo 2: Modele o volume restante V(t) após t horas a partir das 14h:",
            "V(t) = 30.000 - 2.000·t",
            "Passo 3: Determine o instante em que V(t) = 0:",
            "0 = 30.000 - 2.000·t  ⇒  2.000·t = 30.000  ⇒  t = 15 horas.",
            "Passo 4: Some as 15 horas ao horário de referência (14h):",
            "14h + 15h = 29h = 5h da manhã do dia seguinte."
          ],
          gabarito: "Às 5h da manhã do dia subsequente."
        }
      ],
      realWorldApplications: [
        "Planos de telefonia e serviços de nuvem com franquia fixa mais cobrança por gigabyte excedente.",
        "Tarifação de energia elétrica e abastecimento de água (taxa mínima de disponibilidade + consumo medido).",
        "Calibração de sensores biomédicos onde a resposta elétrica em milivolts varia linearmente com a concentração da substância analisada."
      ],
      commonMisconceptions: [
        "Achar que taxa de variação é calculada apenas subtraindo os valores, sem dividir pelo intervalo de tempo (Δx).",
        "Confundir a raiz da função (onde y = 0) com o coeficiente linear (onde x = 0).",
        "Assumir proporcionalidade direta em toda função afim: a função f(x) = ax + b só é diretamente proporcional se b = 0 (função linear)."
      ],
      quickReviewPoints: [
        "f(x) = ax + b: reta no plano cartesiano.",
        "a = Δy / Δx: define a inclinação e o sentido de crescimento.",
        "b: ponto onde a reta cruza o eixo vertical (ordenada de corte).",
        "Raiz: x = -b/a (ponto onde cruza o eixo horizontal)."
      ]
    },
    {
      chapterNumber: 2,
      title: "Função Quadrática: Parábola, Vértice e Otimização no ENEM",
      targetSkill: "H21, H22 — Resolver problemas que envolvem pontos de máximo e mínimo de funções quadráticas",
      practiceModuleId: "matematica/funcoes",
      deepContent: `
A função quadrática (ou do 2º grau) é a lei que descreve grandezas cuja taxa de variação varia linearmente com a variável independente.
Lei geral: f(x) = a·x² + b·x + c, com a, b, c ∈ ℝ e a ≠ 0.

1. A Parábola e a Concavidade:
O gráfico de uma função quadrática é uma PARÁBOLA com eixo de simetria vertical.
• Se a > 0: concavidade voltada para CIMA (formato de 'U'). A função possui um ponto de MÍNIMO global.
• Se a < 0: concavidade voltada para BAIXO (formato de '∩'). A função possui um ponto de MÁXIMO global.

2. O Vértice da Parábola V(x_v, y_v):
O vértice é o ponto mais crítico e cobrado nas provas do ENEM.
• Abscissa do vértice: x_v = -b / (2a). Representa o valor da variável de entrada que produz o resultado ótimo (ex: o preço unitário que maximiza a receita, ou a quantidade de operários necessária).
• Ordenada do vértice: y_v = -Δ / (4a) = f(x_v), onde Δ = b² - 4ac. Representa o VALOR ÓTIMO propriamente dito (a receita máxima em reais, a altura máxima atingida pelo projétil).

3. Raízes e o Discriminante (Δ):
x = (-b ± √Δ) / (2a)
• Se Δ > 0: a parábola intercepta o eixo x em dois pontos distintos (x₁ e x₂).
• Se Δ = 0: a parábola tangencia o eixo x em um único ponto (x₁ = x₂ = -b/(2a)).
• Se Δ < 0: a parábola não intercepta o eixo x (fica inteiramente acima ou abaixo do eixo).

4. Eixo de Simetria:
A reta vertical x = x_v é o eixo de simetria da parábola.
Propriedade fundamental: Se f(x₁) = f(x₂), então o x_v é o ponto médio aritmético exato entre x₁ e x₂:
x_v = (x₁ + x₂) / 2.
Essa relação permite encontrar o ponto ótimo no ENEM sem calcular a fórmula de Bhaskara quando as raízes forem fáceis de identificar.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Otimização de Receita e Preço de Ingressos",
          enunciado: "Um centro acadêmico de Medicina organiza um congresso com capacidade para 1.000 pessoas. Se cobrar R$ 80,00 por ingresso, 400 estudantes participam. Para cada redução de R$ 2,00 no preço do ingresso, outros 20 estudantes se inscrevem. Qual deve ser o preço do ingresso para que o centro acadêmico obtenha a arrecadação máxima?",
          stepByStep: [
            "Passo 1: Defina a variável 'n' como o número de descontos de R$ 2,00 concedidos.",
            "Preço por ingresso: P(n) = 80 - 2n",
            "Quantidade de participantes: Q(n) = 400 + 20n",
            "Passo 2: Escreva a função da Receita Total R(n) = P(n) · Q(n):",
            "R(n) = (80 - 2n) · (400 + 20n)",
            "R(n) = 32.000 + 1.600n - 800n - 40n²",
            "R(n) = -40n² + 800n + 32.000",
            "Passo 3: Identifique os coeficientes: a = -40, b = 800, c = 32.000. Como a < 0, a parábola tem ponto de máximo.",
            "Passo 4: Calcule n_v (número ótimo de descontos):",
            "n_v = -b / (2a) = -800 / (2 · (-40)) = -800 / (-80) = 10 descontos.",
            "Passo 5: Calcule o preço ótimo do ingresso P(10):",
            "P = 80 - 2·(10) = 80 - 20 = R$ 60,00.",
            "Para verificar: a quantidade será Q = 400 + 20(10) = 600 inscritos, gerando receita máxima de 600 · 60 = R$ 36.000,00 (superior aos R$ 32.000 iniciais)."
          ],
          gabarito: "R$ 60,00 por ingresso."
        }
      ],
      realWorldApplications: [
        "Trajetórias parabólicas em lançamentos de projéteis e balística sob aceleração da gravidade.",
        "Engenharia de antenas parabólicas e refletores ópticos com foco concentrador.",
        "Modelagem de lucro máximo e custo mínimo em gestão industrial e farmacêutica."
      ],
      commonMisconceptions: [
        "Confundir o que a questão pede: o valor de x que produz o máximo (x_v) versus o valor máximo atingido (y_v).",
        "Achar que parábola com a > 0 tem valor máximo; parábola com concavidade para cima tem valor MÍNIMO.",
        "Esquecer o sinal negativo na fórmula do vértice: x_v = -b / (2a)."
      ],
      quickReviewPoints: [
        "f(x) = ax² + bx + c: curva em forma de parábola.",
        "a > 0 → Mínimo | a < 0 → Máximo.",
        "x_v = -b / (2a): o 'quando' ou 'quanto' gera o extremo.",
        "y_v = -Δ / (4a): o extremo em si (máximo ou mínimo)."
      ]
    },
    {
      chapterNumber: 3,
      title: "Função Exponencial: Crescimento Acelerado e Decaimento Radioativo",
      targetSkill: "H21, H22 — Analisar fenômenos que envolvem crescimento e decaimento exponencial",
      practiceModuleId: "matematica/funcoes",
      deepContent: `
A função exponencial modela processos em que a taxa de variação é proporcional à quantidade atual presente.
Lei geral: f(x) = a^x ou f(x) = c·a^(k·x), com base a > 0 e a ≠ 1.

1. Propriedades Estruturais da Função Exponencial:
• Se a > 1: a função é estritamente CRESCENTE. À medida que x aumenta, f(x) dispara rapidamente (crescimento geométrico).
• Se 0 < a < 1: a função é estritamente DECRESCENTE. À medida que x aumenta, f(x) aproxima-se assintoticamente de zero.
• O gráfico nunca toca o eixo x (a menos que haja translação vertical f(x) = a^x + d); o eixo x é uma assíntota horizontal.
• O ponto (0, 1) pertence a toda função elementar f(x) = a^x, pois a⁰ = 1.

2. Modelo Geral de Crescimento Populacional / Bacteriano:
N(t) = N₀ · (1 + r)^t  ou  N(t) = N₀ · 2^(t / T_d)
onde:
- N₀ é a população inicial;
- r é a taxa de crescimento por período;
- T_d é o tempo de duplicação (tempo necessário para a quantidade dobrar de valor).

3. Decaimento Radioativo e Meia-Vida (T_1/2):
A meia-vida (ou período de semidesintegração) é o tempo necessário para que metade dos átomos radioativos de uma amostra se desintegrem:
M(t) = M₀ · (1/2)^(t / T_1/2) = M₀ · 2^(-t / T_1/2)
Após 'n' meias-vidas completas: M = M₀ / (2^n).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Decaimento de Radiofármaco em Medicina Nuclear",
          enunciado: "O Tecnécio-99m é um radioisótopo amplamente utilizado em diagnósticos cintilográficos cerebrais e cardíacos. Sua meia-vida é de 6 horas. Um hospital universitário recebe um frasco calibrado com atividade radioativa inicial de 64 mCi (milicuries). Após exatamente 30 horas da entrega, qual será a atividade radioativa remanescente desse radiofármaco?",
          stepByStep: [
            "Passo 1: Identifique a meia-vida e o tempo decorrido:",
            "T_1/2 = 6 horas; t = 30 horas.",
            "Passo 2: Calcule o número 'n' de meias-vidas decorridas:",
            "n = t / T_1/2 = 30 / 6 = 5 meias-vidas completas.",
            "Passo 3: Aplique a fórmula do decaimento:",
            "M(t) = M₀ / (2^n) = 64 / (2⁵) = 64 / 32 = 2 mCi.",
            "Conclusão: Restam 2 mCi de atividade radioativa na amostra."
          ],
          gabarito: "2 mCi (milicuries)."
        }
      ],
      realWorldApplications: [
        "Datação geológica e arqueológica por Carbono-14 (meia-vida de ~5.730 anos).",
        "Farmacocinética e meia-vida plasmática de antibióticos e anestésicos no organismo humano.",
        "Cálculo de juros compostos em aplicações financeiras de longo prazo."
      ],
      commonMisconceptions: [
        "Confundir função exponencial f(x) = a^x com função potência f(x) = x^a (ex: 2^x ≠ x²).",
        "Achar que após duas meias-vidas a substância desaparece completamente (em 2 meias-vidas resta 1/4 = 25%, e não 0%).",
        "Aplicar modelos lineares para fenômenos de propagação viral ou bacteriana."
      ],
      quickReviewPoints: [
        "f(x) = a^x: variável no expoente.",
        "a > 1: cresce exponencialmente | 0 < a < 1: decai para zero.",
        "Meia-vida: a cada período T, a quantidade cai pela metade: M = M₀ / 2^n."
      ]
    },
    {
      chapterNumber: 4,
      title: "Logaritmos: Escalas Não-Lineares no ENEM",
      targetSkill: "H21, H22 — Utilizar funções logarítmicas na resolução de problemas científicos e tecnológicos",
      practiceModuleId: "matematica/funcoes",
      deepContent: `
O logaritmo é a operação inversa da exponenciação.
Definição formal: log_a(b) = x  ⇔  a^x = b
(com base a > 0, a ≠ 1 e logaritmando b > 0).

1. Propriedades Operatórias Fundamentais:
• Logaritmo do Produto: log_a(M · N) = log_a(M) + log_a(N)
• Logaritmo do Quociente: log_a(M / N) = log_a(M) - log_a(N)
• Logaritmo da Potência: log_a(M^k) = k · log_a(M) ('regra do tombo')
• Mudança de Base: log_a(b) = log_c(b) / log_c(a)

2. Por que o ENEM adora Logaritmos?
Em fenômenos reais, certas grandezas variam em ordens de grandeza colossais (de 1 para 1.000.000.000), o que tornaria gráficos lineares completamente ilegíveis. O logaritmo 'comprime' essa escala exponencial em uma reta gerenciável.

3. As Três Escalas Clássicas do ENEM:
• Potencial Hidrogeniônico (pH): pH = -log₁₀[H⁺].
  Cada redução de 1 unidade no pH significa que a concentração de íons H⁺ aumentou 10 VEZES (o meio ficou 10 vezes mais ácido).
• Intensidade Sonora em Decibéis (dB): N = 10 · log₁₀(I / I₀), onde I₀ = 10⁻¹² W/m² (limiar da audição).
  Um aumento de 10 dB significa multiplicar a intensidade física da onda por 10; um aumento de 20 dB multiplica por 100!
• Escala Richter (Magnitude Sísmica): M = (2/3) · log₁₀(E / E₀).
  Um terremoto de magnitude 7 libera cerca de 31,6 vezes mais energia que um de magnitude 6, e cerca de 1.000 vezes mais energia que um de magnitude 5!
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Comparação de Acidez e pH em Soluções",
          enunciado: "O suco gástrico humano normal em repouso possui pH em torno de 2,0. Durante uma gastrite severa, a concentração de íons hidrogênio [H⁺] no estômago subiu e o pH medido foi de 1,0. Quantas vezes a concentração molar de íons H⁺ da solução ácida tornou-se superior em relação à condição inicial?",
          stepByStep: [
            "Passo 1: Aplique a definição de pH: pH = -log₁₀[H⁺]  ⇒  [H⁺] = 10^(-pH).",
            "Condição inicial: [H⁺]₁ = 10^(-2) = 0,01 mol/L.",
            "Condição de crise: [H⁺]₂ = 10^(-1) = 0,10 mol/L.",
            "Passo 2: Calcule a razão entre as concentrações:",
            "[H⁺]₂ / [H⁺]₁ = 10^(-1) / 10^(-2) = 10^(-1 - (-2)) = 10¹ = 10.",
            "Conclusão: A concentração de íons hidrogênio aumentou exatamente 10 vezes."
          ],
          gabarito: "10 vezes superior."
        }
      ],
      realWorldApplications: [
        "Determinação do pH em análises de fluidos biológicos (sangue normal: 7,35 a 7,45).",
        "Medição de ruído ocupacional e poluição sonora em ambientes hospitalares e urbanos.",
        "Sismologia e medição de energia liberada em falhas geológicas."
      ],
      commonMisconceptions: [
        "Confundir log(A + B) com log(A) + log(B) (ERRO GRAVE! A propriedade é log(A · B) = log(A) + log(B)).",
        "Esquecer a condição de existência: logaritmando deve ser estritamente POSITIVO (> 0).",
        "Achar que pH 1 é o dobro de ácido de pH 2 (pH 1 é DEZ vezes mais ácido que pH 2)."
      ],
      quickReviewPoints: [
        "log_a(b) = x ⇔ a^x = b.",
        "log(A · B) = log A + log B | log(A / B) = log A - log B.",
        "log(A^k) = k · log A.",
        "Cada 1 unidade em escala log de base 10 multiplica a grandeza real por 10."
      ]
    }
  ]
};
