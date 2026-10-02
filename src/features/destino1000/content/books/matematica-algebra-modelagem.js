/**
 * LIVRO DIDÁTICO DIGITAL: Álgebra, Modelagem Linear e Funções Exponenciais e Logarítmicas
 * Área: Matemática e suas Tecnologias
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Edição Canônica 2026)
 * Regra Estrita: ZERO termos de deslocamentos turísticos. Foco em modelagem científica,
 * progressões, escalas logarítmicas, meia-vida, finanças e sistemas lineares.
 */

export const LIVRO_MATEMATICA_ALGEBRA_MODELAGEM = {
  id: "livro-matematica-algebra-modelagem",
  area: "matematica",
  title: "Álgebra, Modelagem Linear e Funções Exponenciais e Logarítmicas",
  subtitle: "Progressões, equações, sistemas lineares, matemática financeira e escalas exponenciais e logarítmicas no ENEM",
  estimatedReadingTimeMinutes: 80,
  badge: "Livro Essencial • TRI Alta & Modelagem",
  coverColor: "from-sky-950 to-blue-900",
  prerequisites: [
    "Operações fundamentais da aritmética com números reais e potenciação",
    "Conceito básico de variável, incógnita e representação gráfica no plano cartesiano"
  ],
  learningObjectives: [
    "Dominar a tradução de situações-problema cotidianas em equações e funções algébricas de 1º e 2º graus",
    "Diferenciar progressões aritméticas (PA: taxa de variação constante aditiva) de geométricas (PG: taxa de variação constante multiplicativa)",
    "Aplicar modelos exponenciais no cálculo de decaimento radioativo (meia-vida), proliferação bacteriana e resfriamento térmico",
    "Dominar as propriedades operatórias dos logaritmos e sua aplicação em escalas científicas (Escala Richter, pH e Decibéis acústicos)",
    "Analisar comparativamente propostas de pagamento à vista com desconto versus parcelamento com juros compostos"
  ],
  chapters: [
    {
      id: "cap-1-modelagem-algebrica-equacoes",
      chapterNumber: 1,
      title: "Modelagem Algébrica e Equações: A Tradução da Realidade em Linguagem Matemática",
      subtitle: "Identificação de variáveis, formulação de modelos polinomiais e resolução de sistemas lineares",
      readTimeMinutes: 16,
      learningObjectives: [
        "Traduzir enunciados em prosa para a linguagem simbólica algébrica formal.",
        "Identificar grandezas diretamente e inversamente proporcionais em modelos lineares f(x) = ax + b.",
        "Resolver e interpretar geometricamente sistemas lineares 2x2 como intersecção de retas no plano."
      ],
      targetSkills: [
        "H19 - Identificar a representação algébrica que expressa a relação entre grandezas",
        "H20 - Interpretar gráfico cartesiano que represente relações entre grandezas",
        "H21 - Resolver situação-problema cuja modelagem envolva conhecimentos algébricos"
      ],
      content: `
### 1. O Que É Modelagem Algébrica?

O ENEM raramente cobra álgebra pura e descontextualizada (como "calcule o valor de x"). O cerne da avaliação em Matemática é a **competência de modelagem**: a capacidade de ler um fenômeno concreto do cotidiano (produção fabril, custos de telefonia, dosagem farmacológica, consumo de água residencial), identificar as grandezas fundamentais e expressar a relação entre elas por meio de uma equação ou função matemática.

Toda modelagem algébrica rigorosa segue quatro etapas cognitivas:
1. **Nomeação das Variáveis**: Definir explicitamente o que cada letra representa e em qual unidade de medida ela está expressa (ex: $x$ = número de horas de trabalho; $C(x)$ = custo total em reais).
2. **Identificação da Parte Fixa e da Parte Variável**: Em modelos de 1º grau ($y = ax + b$), o coeficiente linear $b$ representa o **valor inicial fixo** (tarifa básica, custo de partida), enquanto o coeficiente angular $a$ representa a **taxa de variação unitária** (preço por hora, custo por quilograma).
3. **Estruturação da Equação**: Igualar as grandezas de acordo com as restrições e metas do problema.
4. **Interpretação e Verificação das Unidades**: Checar se o resultado numérico faz sentido físico ou financeiro (ex: quantidades discretas de peças não podem ser números negativos ou fracionários).

---

### 2. Funções Afins e o Significado dos Coeficientes

A função polinomial do 1º grau possui a forma canônica:
$$f(x) = ax + b \quad (a \neq 0)$$

* **Coeficiente Angular ($a$)**:  
  Representa a taxa de variação média constante:
  $$a = \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}$$
  - Se $a > 0$: a função é estritamente crescente.
  - Se $a < 0$: a função é decrescente (ex: esvaziamento de uma caixa d'água com vazamento).
  - No gráfico, $a$ determina a inclinação da reta em relação ao eixo horizontal.
* **Coeficiente Linear ($b$)**:  
  Representa o ponto exato onde a reta intersecta o eixo das ordenadas ($y$), ou seja, o valor de $y$ quando $x = 0$ ($f(0) = b$).
* **Raiz ou Zero da Função ($x_0$)**:  
  É o ponto onde a reta cruza o eixo das abscissas ($x$), indicando quando a grandeza se anula:
  $$ax + b = 0 \implies x_0 = -\frac{b}{a}$$

---

### 3. Sistemas Lineares 2x2 e a Interpretação Geométrica

Quando duas grandezas dependem simultaneamente de duas condições lineares, monta-se um sistema linear:
$$\begin{cases} a_1 x + b_1 y = c_1 \\ a_2 x + b_2 y = c_2 \end{cases}$$

No plano cartesiano, cada equação de 1º grau a duas variáveis representa uma **reta**:
1. **Sistema Possível e Determinado (SPD)**: As duas retas são **concorrentes** e se cruzam em um único ponto $(x^*, y^*)$, que é a solução única do sistema (ocorre quando $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$).
2. **Sistema Possível e Indeterminado (SPI)**: As duas retas são **coincidentes** (uma sobre a outra), possuindo infinitos pontos comuns (ocorre quando $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$).
3. **Sistema Impossível (SI)**: As duas retas são **paralelas distintas**, nunca se interceptando, inexistindo qualquer solução real (ocorre quando $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Comparação de Planos de Telefonia Móvel",
          context: "Uma operadora oferece o Plano Alfa: taxa fixa de R$ 30,00 mais R$ 0,50 por gigabyte de internet adicional. O Plano Beta não cobra taxa fixa, mas custa R$ 1,25 por gigabyte consumido.",
          questionFocus: "A partir de quantos gigabytes consumidos no mês o Plano Alfa torna-se financeiramente mais vantajoso do que o Plano Beta?",
          resolution: "Passo 1: Modelar as funções de custo:\nC_Alfa(x) = 30 + 0,50x\nC_Beta(x) = 1,25x\nPasso 2: Encontrar o ponto de indiferença financeira (C_Alfa = C_Beta):\n30 + 0,50x = 1,25x \implies 0,75x = 30 \implies x = 30 / 0,75 = 40 GB.\nPasso 3: Concluir que para um consumo estritamente superior a 40 GB mensais, o Plano Alfa é mais barato."
        }
      ],
      quickReview: [
        "Modelo Linear: f(x) = ax + b, onde 'a' é a taxa de variação e 'b' é o valor inicial fixo.",
        "Taxa de Variação Constante: caracterizada pelo gráfico em linha reta.",
        "Intersecção Gráfica: a solução de um sistema linear SPD é o ponto de encontro das retas.",
        "Ponto de Equilíbrio: momento em que dois planos de custos alternativos empatam."
      ]
    },
    {
      id: "cap-2-progressoes-aritmeticas-geometricas",
      chapterNumber: 2,
      title: "Progressões Aritméticas e Geométricas: Modelagem Discreta de Padrões e Ciclos",
      subtitle: "Termo geral, propriedades, interpolação e soma dos termos de sequências lineares e exponenciais",
      readTimeMinutes: 17,
      learningObjectives: [
        "Identificar o comportamento de uma Progressão Aritmética (PA) como crescimento linear discreto.",
        "Calcular termos quaisquer e somas finitas de PA aplicando o Termo Geral e a fórmula de Gauss.",
        "Reconhecer Progressões Geométricas (PG) como crescimento exponencial discreto e aplicar a soma infinita convergente."
      ],
      targetSkills: [
        "H19 - Identificar representações algébricas que expressem padrões numéricos em sequências",
        "H21 - Resolver situações-problema envolvendo o cálculo de parcelas, juros e ciclos periódicos"
      ],
      content: `
### 1. Progressão Aritmética (PA): Crescimento Linear Discreto

Uma sequência numérica $(a_1, a_2, a_3, \dots, a_n)$ é classificada como **Progressão Aritmética** quando a diferença entre qualquer termo (a partir do segundo) e seu antecessor imediato é sempre constante. Essa constante é denominada **razão ($r$)**:
$$r = a_{n} - a_{n-1}$$

* **Termo Geral da PA**:
  Para avançar do primeiro termo $a_1$ até o enésimo termo $a_n$, somam-se $(n - 1)$ razões:
  $$a_n = a_1 + (n - 1) \cdot r$$
  De forma mais ampla, conhecendo um termo qualquer $a_k$:
  $$a_n = a_k + (n - k) \cdot r$$

* **Propriedade Fundamental**:
  Em toda PA finita, qualquer termo intermediário é a **média aritmética** de seus vizinhos imediatos:
  $$a_n = \frac{a_{n-1} + a_{n+1}}{2}$$
  Além disso, a soma de dois termos equidistantes dos extremos é igual à soma dos próprios extremos:
  $$a_1 + a_n = a_2 + a_{n-1} = a_3 + a_{n-2} = \dots$$

* **Soma dos $n$ Primeiros Termos da PA (Fórmula de Gauss)**:
  $$S_n = \frac{(a_1 + a_n) \cdot n}{2}$$

---

### 2. Progressão Geométrica (PG): Crescimento Exponencial Discreto

Uma sequência $(g_1, g_2, g_3, \dots, g_n)$ é uma **Progressão Geométrica** quando o quociente entre qualquer termo (a partir do segundo) e seu antecessor imediato é constante. Essa razão multiplicativa é representada por **$q$**:
$$q = \frac{g_n}{g_{n-1}}$$

* **Termo Geral da PG**:
  $$g_n = g_1 \cdot q^{n-1}$$
  De forma ampla, relacionando a partir do termo $g_k$:
  $$g_n = g_k \cdot q^{n - k}$$

* **Soma dos Termos de uma PG Finita**:
  $$S_n = \frac{g_1 \cdot (q^n - 1)}{q - 1} \quad (q \neq 1)$$

* **Soma dos Infinitos Termos de uma PG Decrescente Convergente**:
  Quando a razão da PG está estritamente contida no intervalo aberto $-1 < q < 1$, as potências $q^n$ aproximam-se de zero conforme $n$ cresce indefinidamente. A soma de infinitos termos atinge um limite finito estável:
  $$S_\infty = \frac{g_1}{1 - q} \quad (|q| < 1)$$
  *Exemplo clássico*: Frações geratrizes de dízimas periódicas (ex: $0,333\dots = \frac{3}{10} + \frac{3}{100} + \dots = \frac{3/10}{1 - 1/10} = \frac{3/10}{9/10} = \frac{1}{3}$) e amortecimento de oscilações mecânicas em pêndulos e molas.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Acúmulo de Resíduos e Soma de PA",
          context: "Um programa municipal de reciclagem recolheu 12 toneladas de plástico no primeiro mês de operação. A cada mês seguinte, a coleta aumentou em uma quantidade fixa constante de 3 toneladas.",
          questionFocus: "Qual foi a quantidade total de plástico recolhida ao final de 24 meses de programa?",
          resolution: "Passo 1: Identificar os dados da PA:\na_1 = 12 t, r = 3 t, n = 24 meses.\nPasso 2: Calcular o termo final a_24:\na_24 = a_1 + (24 - 1) * r = 12 + 23 * 3 = 12 + 69 = 81 toneladas.\nPasso 3: Aplicar a soma de Gauss:\nS_24 = [(a_1 + a_24) * n] / 2 = [(12 + 81) * 24] / 2 = (93 * 24) / 2 = 93 * 12 = 1.116 toneladas."
        }
      ],
      quickReview: [
        "PA: soma constante da razão 'r' a cada passo. Crescimento linear discreto.",
        "Termo Geral PA: a_n = a_1 + (n - 1) * r.",
        "Soma da PA: S_n = [(a_1 + a_n) * n] / 2.",
        "PG: multiplicação constante da razão 'q' a cada passo. Crescimento exponencial discreto.",
        "Soma Infinita de PG Convergente: S_inf = g_1 / (1 - q), válida apenas se |q| < 1."
      ]
    },
    {
      id: "cap-3-funcoes-exponenciais-meia-vida",
      chapterNumber: 3,
      title: "Funções Exponenciais: Fenômenos de Multiplicação Contínua e Meia-Vida",
      subtitle: "Modelagem de crescimento bacteriano, decaimento radioativo e juros compostos contínuos",
      readTimeMinutes: 16,
      learningObjectives: [
        "Compreender a definição e as propriedades da função exponencial f(x) = a^x com base a > 0 e a ≠ 1.",
        "Modelar fenômenos de crescimento e decrescimento acelerado a partir de equações exponenciais.",
        "Dominar o conceito de meia-vida radioativa e sua resolução direta sem necessidade de fórmulas complexas."
      ],
      targetSkills: [
        "H19 - Identificar representações algébricas que expressem crescimento e decaimento exponencial",
        "H21 - Resolver situações-problema envolvendo radioatividade, biologia e juros compostos"
      ],
      content: `
### 1. A Função Exponencial e Suas Propriedades

Uma função é dita **exponencial** quando a variável independente $x$ figura no **expoente** de uma base real constante e positiva:
$$f(x) = k \cdot a^x \quad (a > 0 \text{ e } a \neq 1)$$

* **Se $a > 1$**: A função é estritamente **crescente**. A taxa de crescimento absoluto acelera à medida que $x$ aumenta (crescimento exponencial explosivo).
* **Se $0 < a < 1$**: A função é estritamente **decrescente**. O valor aproxima-se assintoticamente de zero sem jamais tocá-lo (decaimento exponencial).
* **Propriedade Gráfica Notável**:
  A curva exponencial nunca corta o eixo horizontal $x$ se $k > 0$, mantendo o eixo $x$ ($y = 0$) como sua assíntota horizontal.

---

### 2. A Lei do Decaimento Radioativo e a Meia-Vida ($t_{1/2}$)

No ENEM, questões sobre isótopos radioativos (Carbono-14 em arqueologia, Iodo-131 em medicina tireoidiana, Césio-137 em radioproteção) baseiam-se na lei exponencial da **meia-vida** (período de semidesintegração):

> **Meia-Vida ($T_{1/2}$)**: É o intervalo de tempo necessário para que metade dos núcleos instáveis de uma amostra radioativa sofra desintegração, reduzindo a massa ativa original a exatamente $50\%$.

A equação fundamental que rege a massa remanescente $M(t)$ após um tempo $t$ decorrido é dada por:
$$M(t) = M_0 \cdot \left(\frac{1}{2}\right)^{\frac{t}{T_{1/2}}}$$
onde:
* $M_0$ = massa inicial no instante $t = 0$.
* $t$ = tempo total decorrido.
* $T_{1/2}$ = meia-vida do radioisótopo (na mesma unidade temporal de $t$).
* O quociente $n = \frac{t}{T_{1/2}}$ expressa o **número exato de meias-vidas transcorridas**.

#### Método das Divisões Sucessivas por 2
Para a esmagadora maioria das questões do ENEM onde o tempo total é um múltiplo inteiro da meia-vida, não é necessário usar logaritmos; basta montar a escada sucessiva de divisões por 2:
$$M_0 \to \frac{M_0}{2} \to \frac{M_0}{4} \to \frac{M_0}{8} \to \frac{M_0}{16} \to \frac{M_0}{32}$$
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Datação Arqueológica por Carbono-14",
          context: "Em uma escavação arqueológica, um fóssil vegetal de madeira apresentou apenas 12,5% da concentração original de Carbono-14 encontrada em plantas vivas da mesma espécie. Sabe-se que a meia-vida do Carbono-14 é de aproximadamente 5.730 anos.",
          questionFocus: "Qual é a idade aproximada do fóssil vegetal descoberto?",
          resolution: "Passo 1: Calcular quantas meias-vidas se passaram até restar 12,5%:\n100% -> 50% (1 meia-vida) -> 25% (2 meias-vidas) -> 12,5% (3 meias-vidas).\nPasso 2: Como transcorreram exatamente 3 meias-vidas inteiras:\nIdade = 3 * 5.730 anos = 17.190 anos."
        }
      ],
      quickReview: [
        "Função Exponencial: f(x) = k * a^x. Base a > 1 cresce; base 0 < a < 1 decresce.",
        "Variável no expoente: multiplicações sucessivas aceleram o processo.",
        "Meia-vida: tempo para a massa cair pela metade.",
        "Após 'n' meias-vidas, a fração restante é (1/2)^n da quantidade inicial."
      ]
    },
    {
      id: "cap-4-logaritmos-escalas-cientificas",
      chapterNumber: 4,
      title: "Logaritmos e Escalas Científicas: Richter, Decibéis e Potencial Hidrogeniônico",
      subtitle: "A compressão de grandezas de amplitude gigantesca através da escala logarítmica",
      readTimeMinutes: 16,
      learningObjectives: [
        "Compreender a definição de logaritmo como expoente inverso da potenciação: log_b(a) = c ⟺ b^c = a.",
        "Dominar as três propriedades operatórias fundamentais: log do produto, log do quociente e log da potência.",
        "Aplicar logaritmos no cálculo da magnitude de terremotos (Richter), intensidade sonora (dB) e acidez química (pH)."
      ],
      targetSkills: [
        "H19 - Identificar representações algébricas que envolvam transformações logarítmicas",
        "H21 - Resolver situações-problema em contextos científicos que utilizem escalas logarítmicas"
      ],
      content: `
### 1. Definição e Propriedades Fundamentais dos Logaritmos

O logaritmo é a operação inversa da exponenciação. Perguntar quanto vale $\log_b(a)$ é exatamente o mesmo que perguntar: *"A qual expoente devo elevar a base $b$ para obter o logaritmando $a$?"*
$$\log_b(a) = c \iff b^c = a \quad (a > 0, b > 0 \text{ e } b \neq 1)$$

Quando a base não é explicitada, convenciona-se que a base é **dez** ($\log a = \log_{10} a$).

#### As Três Propriedades Operatórias Indispensáveis
1. **Logaritmo do Produto**:  
   Transforma multiplicação em soma de logaritmos:
   $$\log_b(x \cdot y) = \log_b(x) + \log_b(y)$$
2. **Logaritmo do Quociente**:  
   Transforma divisão em subtração de logaritmos:
   $$\log_b\left(\frac{x}{y}\right) = \log_b(x) - \log_b(y)$$
3. **Logaritmo da Potência (Regra do Tombo)**:  
   O expoente do logaritmando "tomba" para a frente multiplicando o logaritmo:
   $$\log_b(x^k) = k \cdot \log_b(x)$$

#### Mudança de Base
$$\log_b(a) = \frac{\log_c(a)}{\log_c(b)}$$

---

### 2. Por Que a Ciência Usa Escalas Logarítmicas?

Na natureza, certos fenômenos variam em intervalos de grandezas absurdamente díspares, abrangendo fatores de $10^1$ a $10^{15}$. Se utilizássemos uma régua linear comum para representá-los, os valores menores ficariam esmagados e imperceptíveis na escala.

A escala logarítmica opera uma **compressão de amplitude**: cada acréscimo de 1 unidade na escala equivale a **multiplicar por 10 (ou mais)** a grandeza física subjacente.

#### As Três Escalas Clássicas do ENEM:
* **Escala Richter (Magnitude Sísmica)**:  
  A magnitude $M$ relaciona-se com a energia liberada $E$ (em Joules) por:
  $$\log E = 4,8 + 1,5 \cdot M$$
  *Atenção*: Uma diferença de $\Delta M = 1$ na escala não significa que o terremoto é "um pouco mais forte"; significa que a energia liberada é multiplicada por $10^{1,5} \approx 31,6$ vezes! Um terremoto de magnitude 7 libera cerca de 1.000 vezes mais energia do que um de magnitude 5!
* **Potencial Hidrogeniônico (pH)**:  
  Mede a acidez de uma solução aquosa a partir da concentração molar de íons hidrônio $[H^+]$:
  $$\text{pH} = -\log [H^+] = \log \left(\frac{1}{[H^+]}\right)$$
  Uma solução com pH = 3 possui concentração de prótons $[H^+] = 10^{-3} \text{ mol/L}$, sendo **100 vezes mais ácida** do que uma solução com pH = 5 ($[H^+] = 10^{-5} \text{ mol/L}$).
* **Nível de Intensidade Sonora ($\beta$ em Decibéis — dB)**:  
  $$\beta = 10 \cdot \log \left(\frac{I}{I_0}\right)$$
  onde $I_0 = 10^{-12} \text{ W/m}^2$ é o limiar de audibilidade humana.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Comparação de Acidez pelo pH",
          context: "O suco gástrico humano possui pH médio igual a 2. Um refrigerante comum possui pH igual a 4.",
          questionFocus: "Quantas vezes a concentração de íons H⁺ no suco gástrico é maior do que a do refrigerante?",
          resolution: "Passo 1: Aplicar a definição de pH:\nNo suco gástrico: pH = 2 \implies [H⁺]_suco = 10⁻² mol/L.\nNo refrigerante: pH = 4 \implies [H⁺]_refri = 10⁻⁴ mol/L.\nPasso 2: Dividir as concentrações para obter a razão:\nRazão = [H⁺]_suco / [H⁺]_refri = 10⁻² / 10⁻⁴ = 10^(-2 - (-4)) = 10² = 100 vezes.\nConclusão: O suco gástrico é exatamente 100 vezes mais ácido."
        }
      ],
      quickReview: [
        "Definição: log_b(a) = c ⟺ b^c = a.",
        "Propriedades: log(x * y) = log x + log y | log(x / y) = log x - log y | log(x^k) = k * log x.",
        "Escala Logarítmica: comprime amplitudes gigantescas.",
        "Cada variação de 1 unidade de pH equivale a fator de 10 na concentração de H⁺.",
        "Na escala Richter, aumentar 2 unidades na magnitude multiplica a energia por 1.000 (10^(1,5*2) = 10^3)."
      ]
    },
    {
      id: "cap-5-matematica-financeira-decisao",
      chapterNumber: 5,
      title: "Matemática Financeira e Tomada de Decisão: Juros, Descontos e Amortizações",
      subtitle: "Juros simples versus compostos, taxas efetivas e a armadilha do parcelamento sem juros aparentes",
      readTimeMinutes: 15,
      learningObjectives: [
        "Diferenciar o regime de capitalização simples (crescimento linear) do regime de capitalização composta (crescimento exponencial).",
        "Calcular montante, juros e valor presente aplicando as fórmulas fundamentais.",
        "Identificar os 'juros embutidos' em propagandas comerciais de compras a prazo com parcelas fixas."
      ],
      targetSkills: [
        "H19 - Reconhecer as fórmulas e funções que modelam juros e investimentos financeiros",
        "H21 - Resolver situações-problema envolvendo planejamento financeiro, inflação e crédito"
      ],
      content: `
### 1. Juros Simples versus Juros Compostos

A matemática financeira no ENEM é focada no consumo consciente, na análise crítica de créditos bancários e na detecção de armadilhas comerciais.

#### Regime de Juros Simples (Crescimento Linear — PA)
No regime simples, os juros são calculados **sempre e exclusivamente sobre o Capital Inicial ($C$)**. O rendimento não é incorporado ao saldo devedor para gerar novos juros (não há juros sobre juros):
$$J = C \cdot i \cdot t$$
$$M = C + J = C \cdot (1 + i \cdot t)$$
*O gráfico do Montante em função do tempo é uma **linha reta** (comportamento de função afim e PA).*

#### Regime de Juros Compostos (Crescimento Exponencial — PG)
No regime composto (praticado universalmente pelo sistema financeiro em empréstimos, cartões de crédito e investimentos), os juros gerados ao final de cada período são somados ao capital, formando uma nova base de cálculo para o período seguinte (**capitalização contínua ou juros sobre juros**):
$$M = C \cdot (1 + i)^t$$
$$J = M - C$$
*O gráfico do Montante em função do tempo é uma **curva exponencial ascendente**.*

*Atenção à compatibilidade*: A taxa de juros $i$ e o tempo $t$ devem estar expressos obrigatoriamente na **mesma unidade temporal** (se a taxa for mensal, o tempo deve estar em meses; se a taxa for anual, o tempo deve estar em anos). A taxa $i$ deve entrar no cálculo em sua forma decimal (ex: $2\% = 0,02$).

---

### 2. A Armadilha dos "Juros Embutidos" no Parcelamento

Uma das questões mais frequentes da Matriz do ENEM consiste em desmascarar a propaganda de "venda parcelada sem juros":

* **Cenário Clássico**:  
  Uma loja oferece uma mercadoria por R$ 1.000,00 à vista com $10\%$ de desconto, ou em duas parcelas de R$ 500,00 (uma de entrada no ato da compra e outra 30 dias depois), anunciando "sem juros".
* **Desconstrução Matemática**:
  - O verdadeiro valor da mercadoria à vista é: $1.000 - 10\% = \text{R\$} \ 900,00$.
  - O cliente paga a primeira parcela de entrada no ato: R$ 500,00.
  - Portanto, o valor que o cliente realmente financiou da loja foi apenas: $900 - 500 = \text{R\$} \ 400,00$.
  - No mês seguinte, o cliente paga R$ 500,00 para quitar uma dívida de R$ 400,00.
  - O juro cobrado foi de: $500 - 400 = \text{R\$} \ 100,00$.
  - A taxa real de juros mensal foi:
    $$i = \frac{J}{\text{Saldo Financiado}} = \frac{100}{400} = 0,25 = 25\% \text{ ao mês!}$$
  Uma taxa exorbitante de $25\%$ ao mês estava camuflada pelo slogan sedutor de "parcelamento sem acréscimo"!
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Desconto à Vista vs. Parcelamento",
          context: "Um eletrodoméstico custa R$ 600,00 à vista. A loja permite pagar em duas parcelas iguais de R$ 300,00: a primeira como entrada no ato da compra e a segunda após um mês. Caso o cliente pague à vista, tem direito a 5% de desconto.",
          questionFocus: "Qual é a taxa mensal de juros efetiva embutida na opção de parcelamento?",
          resolution: "Passo 1: Determinar o preço real à vista:\nPreço à vista = 600 - 5% de 600 = 600 - 30 = R$ 570,00.\nPasso 2: Subtrair a entrada paga no ato:\nSaldo devedor financiado = 570 - 300 = R$ 270,00.\nPasso 3: No mês seguinte, paga-se R$ 300,00 para quitar uma dívida de R$ 270,00:\nJuros = 300 - 270 = R$ 30,00.\nPasso 4: Calcular a taxa efetiva:\ni = 30 / 270 = 1 / 9 ≈ 0,1111 = 11,11% ao mês."
        }
      ],
      quickReview: [
        "Juros Simples: J = C * i * t (juros fixos sobre capital inicial; reta/PA).",
        "Juros Compostos: M = C * (1 + i)^t (juros sobre juros; curva exponencial/PG).",
        "Sempre compatibilize as unidades da taxa 'i' e do tempo 't'.",
        "Taxa real no parcelamento: calcule os juros sempre em relação ao saldo efetivamente financiado (Preço com desconto - Entrada)."
      ]
    }
  ]
};
