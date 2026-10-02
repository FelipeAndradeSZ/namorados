/**
 * LIVRO DIDÁTICO DIGITAL: Funções e Modelagem Algébrica no ENEM
 * Área: Matemática e suas Tecnologias
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 2.0.0 (Edição de Alta Densidade Didática 2026)
 * Regra Estrita: ZERO termos de deslocamento turístico. Foco em modelagem algébrica,
 * taxa de variação constante, otimização quadrática, fenômenos exponenciais,
 * logaritmos e escalas não-lineares com aplicações clínicas e biomédicas.
 */

export const LIVRO_MATEMATICA_FUNCOES = {
  id: "livro-matematica-funcoes",
  area: "matematica",
  title: "Funções e Modelagem Algébrica",
  subtitle: "Do comportamento linear aos fenômenos exponenciais e logarítmicos no ENEM",
  estimatedReadingTimeMinutes: 90,
  badge: "Livro Essencial • Álgebra & Modelagem",
  coverColor: "from-sky-950 to-blue-900",
  prerequisites: [
    "Operações fundamentais com números reais e frações algébricas",
    "Equações e sistemas lineares de 1º e 2º graus",
    "Plano cartesiano ortogonal e interpretação de coordenadas (x, y)",
    "Propriedades operatórias de potenciação e radiciação"
  ],
  learningObjectives: [
    "Compreender a definição formal de função como relação unívoca de dependência entre variáveis reais",
    "Dominar a taxa de variação média e a interpretação geométrica do coeficiente angular na função afim",
    "Diferenciar com precisão proporcionalidade direta de funções afins com termo independente não-nulo",
    "Modelar problemas de otimização de máximos e mínimos através do vértice da parábola no padrão ENEM",
    "Analisar o comportamento assintótico de funções exponenciais em decaimento radioativo e farmacocinética",
    "Manipular escalas logarítmicas (pH sanguíneo, escala Richter e bioacústica) e suas propriedades operatórias"
  ],
  chapters: [
    {
      id: "cap-1-funcao-afim-variacao-linear",
      chapterNumber: 1,
      title: "Função Afim: A Geometria da Variação Constante e a Modelagem Linear",
      subtitle: "Coeficiente angular, ordenada na origem e a armadilha da proporcionalidade no ENEM",
      estimatedMinutes: 20,
      learningObjectives: [
        "Deduzir a taxa de variação como declividade da reta f(x) = ax + b",
        "Distinguir funções estritamente proporcionais (lineares) de funções afins com custo fixo",
        "Extrair a equação da reta a partir de gráficos do ENEM em menos de um minuto"
      ],
      targetSkills: [
        "H19 - Identificar a representação algébrica de padrões e regularidades",
        "H21 - Modelar e resolver problemas envolvendo funções do 1º grau"
      ],
      deepContent: `
# 1. A Natureza da Variação Constante

A função afim (ou polinomial do 1º grau) é o modelo matemático canônico para descrever qualquer grandeza cuja **taxa de variação é rigorosamente constante** ao longo de todo o domínio.

Formalmente, é qualquer função $f: \\mathbb{R} \\to \\mathbb{R}$ expressa pela lei algébrica:

$$ f(x) = a \\cdot x + b \\quad (a, b \\in \\mathbb{R}, \\; a \\neq 0) $$

O gráfico de uma função afim no plano cartesiano é sempre uma **reta oblíqua** não vertical.

---

# 2. O Significado Físico e Geométrico dos Coeficientes

* **Coeficiente Angular ($a$)**: Representa a **taxa de variação** da função, correspondente à inclinação da reta em relação ao eixo horizontal das abscissas:

$$ a = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1} = \\tan(\\theta) $$

Se $a > 0$, a função é **estritamente crescente** (a reta sobe para a direita).
Se $a < 0$, a função é **estritamente decrescente** (a reta desce para a direita).
Se $a = 0$, a função degenera em uma **função constante** $f(x) = b$ (reta perfeitamente horizontal, paralela ao eixo $x$).

* **Coeficiente Linear ($b$)**: Representa o ponto de contato direto com o eixo vertical das ordenadas, ou seja, o par ordenado $(0, b)$. Em problemas reais contextualizados pelo ENEM, $b$ simboliza quase invariavelmente o **valor inicial**, o **custo fixo de partida** ou a **taxa básica de disponibilidade**.

* **A Raiz ou Zero da Função**: O valor de $x$ para o qual a função se anula ($f(x) = 0$):

$$ a \\cdot x + b = 0 \\implies x = -\\frac{b}{a} $$

Geometricamente, é o ponto exato $\\left(-\\frac{b}{a}, 0\\right)$ onde a reta intercepta o eixo das abscissas.

---

# 3. A Grande Armadilha TRI: Função Afim vs Proporcionalidade Direta

> [!CAUTION]
> **Nem Toda Reta é Diretamente Proporcional!**
> Duas grandezas $x$ e $y$ só são **diretamente proporcionais** se a razão entre elas for constante: $\\frac{y}{x} = k \\implies y = k \\cdot x$.
> * Se $b = 0$, temos uma **função linear** ($f(x) = ax$), que passa pela origem $(0, 0)$ e representa proporcionalidade direta perfeita. Se dobrarmos $x$, $y$ dobra.
> * Se $b \\neq 0$, temos uma **função afim geral** ($f(x) = ax + b$). O gráfico NÃO passa pela origem! Se dobrarmos $x$, $y$ **NÃO** dobra! 
> A banca do ENEM frequentemente coloca alternativas calculadas por simples "Regra de Três" em problemas com taxa fixa ($b > 0$), atraindo os candidatos para distratores de pontuação TRI baixa.

---

# 4. Aplicação Médica: Cinética de Eliminação de Ordem Zero

Em farmacologia, quando as vias enzimáticas hepáticas de metabolização de uma substância estão completamente saturadas (como ocorre com doses moderadas a altas de etanol ou aspirina), o organismo elimina o fármaco a uma **taxa constante em miligramas por hora** (cinética de ordem zero), independentemente da concentração plasmática:

$$ C(t) = C_0 - k_0 \\cdot t $$

onde $C_0$ é a concentração inicial, $k_0$ é a taxa de depuração hepática fixa e $t$ é o tempo decorrido em horas. O tempo necessário para a depuração total é exatamente a raiz da função afim: $t_{\\text{limpeza}} = \\frac{C_0}{k_0}$.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 1: Decodificação Rápida de Equação da Reta no Gráfico",
          enunciado: "Um gráfico cartesiano no ENEM mostra o volume de oxigênio restante em um cilindro hospitalar em função do tempo de uso em horas. A reta cruza o eixo vertical no ponto (0; 1.200) e o eixo horizontal no ponto (8; 0). Qual é a lei algébrica que descreve o volume V(t) em litros após t horas de uso, e qual é o consumo de oxigênio por hora?",
          stepByStep: [
            "Passo 1: Identificar o coeficiente linear b diretamente do gráfico: A reta corta o eixo vertical em (0; 1.200), logo b = 1.200 L (capacidade inicial).",
            "Passo 2: Calcular o coeficiente angular a usando os dois pontos (0; 1.200) e (8; 0):",
            "a = ΔV / Δt = (0 - 1.200) / (8 - 0) = -1.200 / 8 = -150 L/h.",
            "Passo 3: Escrever a função afim: V(t) = -150·t + 1.200 (para 0 ≤ t ≤ 8).",
            "Conclusão: O consumo horário (taxa de variação negativa) é de 150 litros por hora."
          ],
          gabarito: "V(t) = -150t + 1200; consumo de 150 L/h."
        }
      ],
      commonTraps: [
        "Usar regra de três direta para prever valores de grandezas que possuem valor inicial b não-nulo.",
        "Inverter a ordem da divisão da taxa de variação calculando Δx / Δy em vez de Δy / Δx."
      ],
      retentionChecklist: [
        "O que geometricamente o coeficiente angular 'a' e o coeficiente linear 'b' representam em um gráfico?",
        "Qual é a condição para que uma reta no plano represente proporcionalidade direta estrita?",
        "Como calcular a taxa de variação média a partir de dois pontos conhecidos (x1, y1) e (x2, y2)?"
      ]
    },
    {
      id: "cap-2-funcao-quadratica-otimizacao",
      chapterNumber: 2,
      title: "Função Quadrática: Parábola, Vértice e Otimização Extrema",
      subtitle: "Máximos e mínimos, dedução do vértice e geometria da parábola no ENEM",
      estimatedMinutes: 22,
      learningObjectives: [
        "Compreender a concavidade e o eixo de simetria vertical da parábola",
        "Deduzir as coordenadas do vértice V(xv, yv) e distinguir 'quando ocorre o ótimo' de 'qual é o valor ótimo'",
        "Resolver problemas de otimização de receita, lucro e áreas máximas com restrições lineares"
      ],
      targetSkills: [
        "H21 - Modelar e resolver problemas envolvendo funções do 2º grau",
        "H22 - Resolver problemas que envolvam pontos de máximo ou mínimo"
      ],
      deepContent: `
# 1. A Estrutura da Função Quadrática

A função quadrática (polinomial do 2º grau) descreve fenômenos nos quais a própria taxa de variação varia de maneira linear com a variável independente.

Sua lei algébrica canônica é:

$$ f(x) = a \\cdot x^2 + b \\cdot x + c \\quad (a, b, c \\in \\mathbb{R}, \\; a \\neq 0) $$

O gráfico correspondente é uma **parábola** cujo eixo de simetria é rigorosamente vertical e paralelo ao eixo das ordenadas.

---

# 2. O Papel Estrutural dos Coeficientes

* **Coeficiente $a$ (Concavidade e Abertura)**:
  * Se $a > 0$: a parábola tem concavidade voltada para **CIMA** (formato $\\cup$). A função decresce até o vértice e depois cresce, possuindo um **PONTO DE MÍNIMO ABSOLUTO**.
  * Se $a < 0$: a parábola tem concavidade voltada para **BAIXO** (formato $\\cap$). A função cresce até o vértice e depois decresce, possuindo um **PONTO DE MÁXIMO ABSOLUTO**.
* **Coeficiente $b$ (Sentido de Cruzamento do Eixo $y$)**:
  * Indica a inclinação da reta tangente à parábola no instante em que ela corta o eixo vertical: se $b > 0$, a parábola cruza o eixo $y$ subindo; se $b < 0$, cruza descendo; se $b = 0$, o vértice está exatamente sobre o eixo $y$.
* **Coeficiente $c$ (Ponto de Interseção)**:
  * Representa o corte no eixo $y$: $f(0) = c$, correspondendo ao par $(0, c)$.

---

# 3. O Vértice da Parábola e a Dedução Algébrica

O vértice $V(x_v, y_v)$ é o ponto mais crítico e recorrente no ENEM. Ele pode ser deduzido completando quadrados na forma canônica:

$$ f(x) = a \\left(x + \\frac{b}{2a}\\right)^2 - \\frac{\\Delta}{4a} \\quad (\\text{onde } \\Delta = b^2 - 4ac) $$

Como o termo ao quadrado $\\left(x + \\frac{b}{2a}\\right)^2$ é sempre maior ou igual a zero para qualquer $x \\in \\mathbb{R}$, o valor extremo (mínimo se $a > 0$, máximo se $a < 0$) ocorre exatamente quando esse termo se anula:

$$ x + \\frac{b}{2a} = 0 \\implies x_v = -\\frac{b}{2a} $$

Substituindo $x_v$ na função, obtemos a ordenada extrema:

$$ y_v = f(x_v) = -\\frac{\\Delta}{4a} $$

> [!IMPORTANT]
> **A Distinção Fundamental no ENEM: $x_v$ vs $y_v$**:
> * Perguntas como *"quantos produtos vender"*, *"qual o preço do ingresso"*, *"em que instante t"* pedem a **abscissa do vértice ($x_v$)** — a variável de controle que produz o resultado ótimo.
> * Perguntas como *"qual é a receita máxima"*, *"qual é a altura máxima atingida"*, *"qual o lucro máximo obtido"* pedem a **ordenada do vértice ($y_v$)** — o valor ótimo propriamente dito.

---

# 4. Propriedade de Simetria das Raízes

A reta vertical $x = x_v$ é o **eixo de simetria** da parábola. Consequentemente, para quaisquer dois pontos que possuem a mesma imagem ($f(x_1) = f(x_2)$), o $x_v$ é o **ponto médio exato** entre eles:

$$ x_v = \\frac{x_1 + x_2}{2} $$

Se a parábola possui raízes reais conhecidas $x_1$ e $x_2$, você não precisa calcular a fórmula $-b/(2a)$: basta fazer a média aritmética das duas raízes!
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 2: Maximização de Receita em Campanha de Vacinação",
          enunciado: "Um laboratório farmacêutico planeja vender lotes de doses vacinais a clínicas privadas. Se cobrar R$ 120,00 por dose, consegue vender 500 doses por semana. Uma pesquisa de mercado aponta que para cada desconto de R$ 5,00 no preço da dose, a demanda semanal aumenta em 50 doses. Qual deve ser o preço cobrado por dose para maximizar a receita semanal?",
          stepByStep: [
            "Passo 1: Definir a variável x como o número de abatimentos de R$ 5,00 concedidos:",
            "Preço por dose: P(x) = 120 - 5x.",
            "Quantidade de doses vendidas: Q(x) = 500 + 50x.",
            "Passo 2: Montar a função da Receita Semanal R(x) = P(x) · Q(x):",
            "R(x) = (120 - 5x)(500 + 50x) = 60.000 + 6.000x - 2.500x - 250x²",
            "R(x) = -250x² + 3.500x + 60.000.",
            "Passo 3: Identificar os coeficientes: a = -250 (a < 0, logo há ponto de máximo) e b = 3.500.",
            "Passo 4: Calcular o número ótimo de abatimentos x_v:",
            "x_v = -b / (2a) = -3.500 / (2 · (-250)) = -3.500 / (-500) = 7 abatimentos.",
            "Passo 5: Calcular o preço ótimo da dose correspondente a x = 7:",
            "Preço ótimo = 120 - 5·(7) = 120 - 35 = R$ 85,00 por dose.",
            "Verificação: A quantidade vendida será 500 + 50(7) = 850 doses, gerando receita de 850 · 85 = R$ 72.250,00 (superior aos R$ 60.000 originais)."
          ],
          gabarito: "R$ 85,00 por dose."
        }
      ],
      commonTraps: [
        "Calcular x_v e marcar como resposta quando a questão solicitava o valor máximo y_v.",
        "Esquecer de subtrair o desconto do preço original, respondendo apenas o número de abatimentos x_v (7 em vez de R$ 85,00)."
      ],
      retentionChecklist: [
        "Como a concavidade da parábola determina se a função possui ponto de máximo ou de mínimo?",
        "Qual é a interpretação prática de xv versus yv em problemas de economia e física?",
        "Como usar a simetria das raízes para achar o vértice sem calcular Bhaskara?"
      ]
    },
    {
      id: "cap-3-funcao-exponencial-farmacocinetica",
      chapterNumber: 3,
      title: "Função Exponencial: Crescimento Acelerado e Decaimento Radioativo",
      subtitle: "A taxa proporcional à quantidade presente, meia-vida e modelagem biológica",
      estimatedMinutes: 20,
      learningObjectives: [
        "Compreender a definição de função exponencial e a condição de existência da base",
        "Modelar crescimento bacteriano e replicação celular via tempo de duplicação",
        "Dominar a equação de decaimento radioativo e farmacocinético por meia-vida"
      ],
      targetSkills: [
        "H21 - Modelar e resolver problemas envolvendo funções exponenciais",
        "H22 - Analisar fenômenos que envolvem crescimento e decaimento exponencial"
      ],
      deepContent: `
# 1. A Essência do Comportamento Exponencial

Enquanto na função afim a variável cresce por **adição de quantias fixas**, na função exponencial ela varia por **multiplicação repetida**. A taxa de variação instantânea de uma grandeza é diretamente proporcional à própria quantidade existente no momento.

A função exponencial elementar tem a forma:

$$ f(x) = a^x \\quad (a > 0, \\; a \\neq 1) $$

* **Se $a > 1$**: a função é **estritamente crescente**. O crescimento é explosivo (progressão geométrica no contínuo).
* **Se $0 < a < 1$**: a função é **estritamente decrescente**. A curva aproxima-se assintoticamente de zero sem jamais tocar o eixo horizontal (o eixo $x$ é uma assíntota horizontal).
* **O Ponto Notável $(0, 1)$**: Pertence a toda função elementar $f(x) = a^x$, pois $a^0 = 1$.

---

# 2. O Modelo Canônico de Meia-Vida ($T_{1/2}$)

Em Medicina Nuclear e Farmacocinética de Ordem Um, a **meia-vida** (ou período de semidesintegração) é o tempo necessário para que exatamente **metade da quantidade remanescente** de uma substância se desintegre ou seja eliminada do plasma sanguíneo.

Após $t$ unidades de tempo, o número de meias-vidas decorridas é $n = \\frac{t}{T_{1/2}}$. A quantidade restante $M(t)$ é dada por:

$$ M(t) = M_0 \\cdot \\left(\\frac{1}{2}\\right)^{\\frac{t}{T_{1/2}}} = \\frac{M_0}{2^n} $$

| Meias-Vidas Decorridas ($n$) | Fração Restante ($M / M_0$) | Porcentagem Remanescente | Quantidade Eliminada / Decaída |
| :--- | :--- | :--- | :--- |
| **0** | $1$ | $100\\%$ | $0\\%$ |
| **1** | $1/2$ | $50\\%$ | $50\\%$ |
| **2** | $1/4$ | $25\\%$ | $75\\%$ |
| **3** | $1/8$ | $12,5\\%$ | $87,5\\%$ |
| **4** | $1/16$ | $6,25\\%$ | $93,75\\%$ |
| **5** | $1/32$ | $3,125\\%$ | $96,875\\%$ |

> [!NOTE]
> **A Regra das 5 Meias-Vidas na Clínica Médica**: Em farmacologia clínica, considera-se que um fármaco administrado em dose única está virtualmente eliminado do organismo após aproximadamente 5 meias-vidas completas, quando resta menos de $3,1\\%$ da concentração original.

---

# 3. Modelagem de Crescimento Populacional e Duplicação ($T_d$)

Se uma população bacteriana em cultura in vitro dobra de tamanho a cada período fixo $T_d$, a população $N(t)$ a partir de um inóculo inicial $N_0$ segue:

$$ N(t) = N_0 \\cdot 2^{\\frac{t}{T_d}} $$
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 3: Decaimento de Radioisótopo em Diagnóstico Oncológico",
          enunciado: "O Flúor-18 é um radioisótopo emissor de pósitrons utilizado em exames de tomografia por emissão de pósitrons (PET-CT). Sua meia-vida física é de 110 minutos. Um centro de medicina nuclear sintetizou uma dose com atividade de 320 MBq (megabecquerels). Devido a um atraso no preparo do paciente, o radiofármaco só pôde ser injetado 5 horas e 30 minutos após a síntese. Qual era a atividade radioativa remanescente no momento da injeção?",
          stepByStep: [
            "Passo 1: Converter todo o tempo decorrido para minutos:",
            "5 horas e 30 minutos = (5 · 60) + 30 = 300 + 30 = 330 minutos.",
            "Passo 2: Calcular o número n de meias-vidas decorridas:",
            "n = t / T_1/2 = 330 / 110 = 3 meias-vidas completas.",
            "Passo 3: Aplicar a equação de decaimento:",
            "M(t) = M_0 / (2^n) = 320 / (2³) = 320 / 8 = 40 MBq.",
            "Conclusão: Restam 40 MBq de atividade na amostra injetada."
          ],
          gabarito: "40 MBq."
        }
      ],
      commonTraps: [
        "Achar que após duas meias-vidas a substância foi completamente eliminada (em 2 meias-vidas resta 25%, não 0%).",
        "Confundir unidades de tempo, misturando horas e minutos sem realizar a conversão preliminar."
      ],
      retentionChecklist: [
        "Qual é a forma algébrica da função de decaimento por meia-vida?",
        "Qual é a porcentagem remanescente de uma substância radioativa após 4 meias-vidas?",
        "Por que o gráfico de uma função exponencial nunca toca o eixo horizontal?"
      ]
    },
    {
      id: "cap-4-logaritmos-escalas-nao-lineares",
      chapterNumber: 4,
      title: "Logaritmos e Escalas Não-Lineares: pH, Decibéis e Richter",
      subtitle: "A compressão de ordens de magnitude e as propriedades operatórias no ENEM",
      estimatedMinutes: 20,
      learningObjectives: [
        "Compreender o logaritmo como o expoente que recupera a base",
        "Manipular com fluidez as propriedades de produto, quociente e potência ('regra do tombo')",
        "Resolver problemas envolvendo pH sanguíneo, escala Richter e nível de pressão sonora em decibéis"
      ],
      targetSkills: [
        "H21 - Utilizar funções logarítmicas na resolução de problemas práticos",
        "H22 - Interpretar dados expressos em escalas não-lineares"
      ],
      deepContent: `
# 1. A Necessidade das Escalas Logarítmicas

Na natureza, certos fenômenos variam em intervalos astronômicos de grandezas físicas:
* A concentração molar de íons hidrogênio $[H^+]$ varia de $10^{-1}$ até $10^{-14}$ mol/L.
* A intensidade da onda sonora audível varia de $10^{-12}$ W/m² (farfalhar de uma folha) até $10^2$ W/m² (sirene industrial de alta potência), uma variação de 14 ordens de magnitude ($10^{14}$ vezes).

Representar essas grandezas em uma escala métrica linear tornaria os gráficos absolutamente ilegíveis: os menores valores ficariam indistinguíveis de zero. A função logarítmica atua como um **compressor de escala**, transformando multiplicações por 10 em incrementos lineares de 1 unidade.

---

# 2. Definição Formal e Propriedades Operatórias

O logaritmo na base $a$ de um número $b$ é o expoente $x$ ao qual se deve elevar $a$ para obter $b$:

$$ \\log_a(b) = x \\iff a^x = b \\quad (a > 0, \\; a \\neq 1, \\; b > 0) $$

### As Quatro Propriedades Indispensáveis:

* **Logaritmo do Produto**: $\\log_a(M \\cdot N) = \\log_a(M) + \\log_a(N)$
* **Logaritmo do Quociente**: $\\log_a\\left(\\frac{M}{N}\\right) = \\log_a(M) - \\log_a(N)$
* **Logaritmo da Potência (Regra do Tombo)**: $\\log_a(M^k) = k \\cdot \\log_a(M)$
* **Mudança de Base**: $\\log_a(b) = \\frac{\\log_c(b)}{\\log_c(a)}$

---

# 3. As Três Escalas Canônicas do ENEM

### A. Potencial Hidrogeniônico (pH) na Bioquímica
$$ \\text{pH} = -\\log_{10}[H^+] \\implies [H^+] = 10^{-\\text{pH}} $$
* Cada redução de **1 unidade no pH** significa que a concentração de íons $H^+$ aumentou **10 vezes** (o meio ficou 10 vezes mais ácido).
* Uma variação de pH de 7 para 4 representa um aumento de $[H^+]$ de $10^3 = 1.000$ vezes!

### B. Nível de Intensidade Sonora em Decibéis (dB)
$$ N = 10 \\cdot \\log_{10}\\left(\\frac{I}{I_0}\\right) $$
onde $I_0 = 10^{-12}$ W/m² é o limiar de audibilidade humana.
* Um acréscimo de **10 dB** decuplica ($\\times 10$) a intensidade física da onda sonora.
* Um acréscimo de **20 dB** multiplica a intensidade por $10^2 = 100$ vezes!

### C. Magnitude Sísmica na Escala Richter
$$ M = \\frac{2}{3} \\log_{10}\\left(\\frac{E}{E_0}\\right) $$
onde $E$ é a energia liberada pelo terremoto.
* Cada acréscimo de 1 unidade na magnitude Richter multiplica a energia liberada por $10^{1,5} = \\sqrt{1.000} \\approx 31,6$ vezes.
* Uma diferença de 2 graus de magnitude ($M_2 - M_1 = 2$) significa que o abalo liberou $10^3 = 1.000$ vezes mais energia mecânica!
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 4: Comparação de Ruído Hospitalar em Decibéis",
          enunciado: "Em uma enfermaria silenciosa, o nível sonoro medido foi de 40 dB. Em uma sala de máquinas anexa com geradores elétricos, o nível sonoro registrado foi de 70 dB. Quantas vezes a intensidade física da onda sonora (em W/m²) na sala de máquinas é superior à intensidade sonora na enfermaria?",
          stepByStep: [
            "Passo 1: Escrever a expressão da diferença em decibéis:",
            "ΔN = N₂ - N₁ = 70 - 40 = 30 dB.",
            "Passo 2: Aplicar a fórmula do nível sonoro: ΔN = 10 · log₁₀(I₂ / I₁).",
            "30 = 10 · log₁₀(I₂ / I₁)  ⇒  log₁₀(I₂ / I₁) = 3.",
            "Passo 3: Aplicar a definição de logaritmo:",
            "I₂ / I₁ = 10³ = 1.000.",
            "Conclusão: A intensidade física na sala de máquinas é 1.000 vezes superior à da enfermaria."
          ],
          gabarito: "1.000 vezes superior."
        }
      ],
      commonTraps: [
        "Confundir log(A + B) com log A + log B (ERRO GRAVE: a propriedade válida é log(A · B) = log A + log B).",
        "Achar que 70 dB é menos do que o dobro de 40 dB (em termos físicos lineares, 70 dB é MIL vezes mais intenso que 40 dB)."
      ],
      retentionChecklist: [
        "Qual é a regra operatória de logaritmo da potência (regra do tombo)?",
        "Por que uma variação de 1 unidade de pH representa uma variação de 10 vezes na concentração de íons hidrogênio?",
        "Qual a relação entre acréscimo de decibéis e multiplicação da intensidade física sonora?"
      ]
    },
    {
      id: "cap-5-analise-grafica-modelagem-comparativa",
      chapterNumber: 5,
      title: "Análise Gráfica, Taxas de Variação e Modelagem Comparativa",
      subtitle: "Critérios de escolha de modelos e decodificação de curvas no padrão ENEM",
      estimatedMinutes: 18,
      learningObjectives: [
        "Identificar o tipo de função (afim, quadrática ou exponencial) a partir do formato da curva e do padrão de variação",
        "Calcular a taxa média de variação entre dois pontos em gráficos não-lineares",
        "Resolver problemas de cruzamento de curvas e pontos de equilíbrio no ENEM"
      ],
      targetSkills: [
        "H19 - Identificar a representação algébrica de padrões e regularidades",
        "H20 - Interpretar gráficos e tabelas que descrevem relações funcionais"
      ],
      deepContent: `
# 1. O Guia Rápido de Decodificação Gráfica no ENEM

Diante de um gráfico desconhecido na prova de Matemática ou Ciências da Natureza, a identificação imediata do modelo funcional apoia-se em critérios visuais universais:

| Modelo Funcional | Expressão Algébrica Geral | Formato Visual da Curva | Comportamento da Taxa de Variação ($\\Delta y / \\Delta x$) |
| :--- | :--- | :--- | :--- |
| **Linear / Afim** | $f(x) = ax + b$ | Reta oblíqua | Rigorosamente constante ao longo de todo o intervalo |
| **Quadrático** | $f(x) = ax^2 + bx + c$ | Parábola com simetria vertical | Aumenta ou diminui linearmente; possui ponto de inversão no vértice |
| **Exponencial** | $f(x) = a^x$ ou $c \\cdot a^{kx}$ | Curva em 'J' com crescimento explosivo ou assíntota em $y=0$ | Aumenta proporcionalmente ao próprio valor de $y$ |
| **Logarítmico** | $f(x) = \\log_a(x)$ | Curva que cresce rápido inicialmente e depois desacelera | Diminui continuamente à medida que $x$ se afasta da origem |

---

# 2. Taxa Média de Variação em Curvas Não-Lineares

Mesmo para funções cujos gráficos não são retas, o ENEM frequentemente cobra a **taxa média de variação** em um intervalo $[x_1, x_2]$, que corresponde geometricamente à declividade da **reta secante** que conecta os dois pontos:

$$ \\text{TMV} = \\frac{f(x_2) - f(x_1)}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x} $$

* *Exemplo Clínico*: A velocidade média de proliferação bacteriana em um antibiograma entre a 2ª e a 6ª hora de cultivo é a taxa média de variação do número de colônias dividido pelas 4 horas decorridas.

---

# 3. Interseção de Curvas e Decisões Econômicas

Quando dois modelos funcionais $f(x)$ e $g(x)$ representam custos de fornecedores concorrentes ou processos alternativos, o ponto de interseção ($f(x^*) = g(x^*)$) define o **ponto de equivalência**:
* Para $x < x^*$, uma das opções é mais econômica.
* Para $x > x^*$, a outra opção torna-se superior.

Resolver essa igualdade e analisar o comportamento relativo das curvas é uma das habilidades mais valorizadas na Matriz de Referência do INEP (Competência 5).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 5: Comparação de Custos Laboratoriais e Ponto de Equilíbrio",
          enunciado: "Um laboratório de bioquímica analisa duas máquinas automatizadas para dosagem de hemoglobina glicada:\n• Máquina 1: Custo fixo mensal de R$ 1.800,00 mais R$ 3,00 por teste processado.\n• Máquina 2: Custo fixo mensal de R$ 600,00 mais R$ 7,00 por teste processado.\nA partir de quantos testes mensais a Máquina 1 torna-se mais econômica que a Máquina 2?",
          stepByStep: [
            "Passo 1: Escrever as funções de custo mensal:",
            "C₁(x) = 3x + 1.800",
            "C₂(x) = 7x + 600",
            "Passo 2: Determinar o ponto de equivalência onde C₁(x) = C₂(x):",
            "3x + 1.800 = 7x + 600  ⇒  1.800 - 600 = 7x - 3x  ⇒  1.200 = 4x  ⇒  x = 300 testes.",
            "Passo 3: Analisar a inequação C₁(x) < C₂(x):",
            "3x + 1.800 < 7x + 600  ⇒  4x > 1.200  ⇒  x > 300.",
            "Conclusão: Para exatamente 300 testes o custo é idêntico (R$ 2.700,00). A partir de 301 testes no mês, a Máquina 1 torna-se mais vantajosa."
          ],
          gabarito: "A partir de 301 testes."
        }
      ],
      commonTraps: [
        "Achar que a opção com menor custo fixo é sempre a mais vantajosa para qualquer volume de produção.",
        "Calcular a taxa média de variação invertendo numerador e denominador (Δx / Δy)."
      ],
      retentionChecklist: [
        "Como diferenciar visualmente o gráfico de uma função quadrática de uma função exponencial?",
        "Qual é o significado geométrico da taxa média de variação em uma curva?",
        "Como encontrar o ponto de transição de vantagem entre duas funções lineares de custos concorrentes?"
      ]
    }
  ]
};
