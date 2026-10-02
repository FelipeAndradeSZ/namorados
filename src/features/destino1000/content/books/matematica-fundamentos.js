/**
 * LIVRO DIDÁTICO DIGITAL: Fundamentos de Razão, Proporção, Finanças e Aritmética da TRI
 * Área: Matemática e suas Tecnologias
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 2.0.0 (Edição de Alta Densidade Didática 2026 - Padrão Medicina)
 * Regra Estrita: ZERO termos de deslocamento turístico.
 * Foco Pedagógico: Escalas lineares, superficiais e volumétricas; grandezas diretas e inversas;
 * fatores multiplicativos percentuais; matemática financeira real; notação científica e dosimetria clínica.
 */

export const LIVRO_MATEMATICA_FUNDAMENTOS = {
  id: "livro-matematica-fundamentos",
  area: "matematica",
  title: "Fundamentos de Razão, Proporção, Finanças e Aritmética da TRI",
  subtitle: "O alicerce de alta coerência pedagógica que define as maiores notas na TRI do ENEM",
  estimatedReadingTimeMinutes: 95,
  badge: "Livro Essencial • Base de Ouro da TRI",
  coverColor: "from-sky-950 to-cyan-900",
  prerequisites: [
    "Operações elementares com frações e números decimais",
    "Potenciação e propriedades básicas de expoentes",
    "Conversão de unidades fundamentais do Sistema Internacional"
  ],
  learningObjectives: [
    "Deduzir e aplicar escalas cartográficas nas dimensões linear (E), superficial (E²) e volumétrica (E³)",
    "Distinguir grandezas direta e inversamente proporcionais e dominar a partilha proporcional de recursos",
    "Calcular variações percentuais acumuladas e desmistificar a diferença entre pontos percentuais e taxa relativa",
    "Desmascarar a armadilha do parcelamento com juros embutidos e calcular o custo efetivo de operações financeiras",
    "Executar análise dimensional e cálculos de dosimetria clínica e vazão de infusão intravenosa no modelo ENEM"
  ],
  chapters: [
    {
      id: "cap-mat-fund-01",
      chapterNumber: 1,
      title: "Razões, Proporções e Escalas Multidimensionais: Linear, Superficial e Volumétrica",
      subtitle: "Da planta baixa ao dimensionamento de reservatórios clínicos sem erros de conversão",
      estimatedMinutes: 20,
      learningObjectives: [
        "Compreender a definição formal de razão e escala como fator de homotetia geométrica",
        "Deduzir o comportamento quadrático para áreas e cúbico para volumes em figuras semelhantes",
        "Executar conversões seguras entre centímetros cúbicos, decímetros cúbicos (litros) e metros cúbicos"
      ],
      targetSkills: [
        "H11 - Utilizar a noção de escalas na leitura de representações gráficas da realidade",
        "H12 - Identificar representações algébricas que expressem a relação entre grandezas em diferentes dimensões"
      ],
      deepContent: `
# 1. O Conceito Fundamental de Razão e a Escala Cartográfica

Uma **razão** é o quociente entre duas grandezas $a$ e $b$ (com $b \\neq 0$), expresso por $\\frac{a}{b}$ ou $a : b$. Quando comparamos grandezas de mesma natureza (como distâncias), a razão é um número adimensional puro.

A **escala linear** ($E$) é a razão de semelhança entre a medida em uma representação gráfica ($d$) e a correspondente medida real no mundo físico ($R$):

$$ E = \\frac{d}{R} = \\frac{1}{K} $$

> [!CAUTION]
> **A Regra de Ouro da Mesma Unidade de Medida:**
> Para calcular ou aplicar a escala, as duas medidas devem estar **obrigatoriamente na mesma unidade**. Se uma maquete representa um hospital com $4\\text{ cm}$ e o edifício real mede $20\\text{ metros}$, você deve primeiro converter $20\\text{ m} = 2.000\\text{ cm}$:
> $$ E = \\frac{4\\text{ cm}}{2.000\\text{ cm}} = \\frac{1}{500} \\quad (1 : 500) $$
> O denominador $500$ indica que o mundo real é $500$ vezes maior que a representação em cada dimensão linear.

---

# 2. A Dedução das Três Dimensões da Escala (Linear, Superficial e Volumétrica)

O erro mais comum na prova de Matemática do ENEM consiste em usar a escala linear para calcular áreas ou volumes. Geometricamente, figuras semelhantes preservam proporções que dependem da dimensão do espaço:

### A. Dimensão 1 — Escala Linear (Comprimentos, Perímetros, Diâmetros, Alturas):
Se a escala linear é $E = \\frac{1}{K}$:

$$ \\frac{\\text{Comprimento no Desenho}}{\\text{Comprimento Real}} = \\frac{1}{K} $$

### B. Dimensão 2 — Escala Superficial (Áreas de Terrenos, Paredes, Seções Transversais):
Uma área é o produto de duas dimensões lineares perpendiculares ($L_1 \\times L_2$). Cada dimensão é escalada por $\\frac{1}{K}$:

$$ \\frac{\\text{Área no Desenho}}{\\text{Área Real}} = \\left(\\frac{1}{K}\\right)^2 = \\frac{1}{K^2} $$

*Exemplo*: Se a escala é $1:100$, uma área no mapa de $1\\text{ cm}^2$ representa na realidade:
$$ 1\\text{ cm}^2 \\times 100^2 = 10.000\\text{ cm}^2 = 1\\text{ m}^2 $$

### C. Dimensão 3 — Escala Volumétrica (Capacidade, Reservatórios, Corpos Tridimensionais):
Um volume é o produto de três dimensões lineares ($L_1 \\times L_2 \\times L_3$). Logo, a razão volumétrica é o cubo da escala linear:

$$ \\frac{\\text{Volume na Maquete}}{\\text{Volume Real}} = \\left(\\frac{1}{K}\\right)^3 = \\frac{1}{K^3} $$

*Exemplo*: Se a maquete de uma câmara hiperbárica está na escala $1:20$, o volume real é $20^3 = 8.000$ vezes maior que o volume da maquete!

---

# 3. Conversões de Volume e Capacidade sem Hesitação

Na prova de ciências e matemática, a equivalência entre unidades de volume métricas e unidades de capacidade (litros) deve ser automática:

$$ 1\\text{ m}^3 = 1.000\\text{ dm}^3 = 1.000\\text{ Litros} $$
$$ 1\\text{ dm}^3 = 1\\text{ Litro} = 1.000\\text{ cm}^3 = 1.000\\text{ mL} $$
$$ 1\\text{ cm}^3 = 1\\text{ mL} $$
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 1: Escala Volumétrica em Tanque de Oxigênio Hospitalar",
          enunciado: "Em uma maquete arquitetônica confeccionada na escala linear 1:40, um cilindro que representa o tanque central de oxigênio de um complexo hospitalar possui volume interno de 25 cm³. Sabendo que 1 litro equivale a 1 dm³, determine o volume real total desse reservatório expresso em litros.",
          stepByStep: [
            "Passo 1: Estabelecer a relação entre a escala linear e a escala volumétrica:",
            "Escala linear: E = 1/40.",
            "Escala volumétrica: E_vol = (1/40)³ = 1 / 64.000.",
            "Passo 2: Calcular o volume real em centímetros cúbicos (cm³):",
            "V_real = 25 cm³ · 64.000 = 1.600.000 cm³.",
            "Passo 3: Converter cm³ para decímetros cúbicos (litros):",
            "Como 1 Litro = 1 dm³ = 1.000 cm³:",
            "V_real = 1.600.000 / 1.000 = 1.600 Litros."
          ],
          gabarito: "1.600 Litros.",
          comentarioTRI: "Distratores típicos incluirão 25 · 40 = 1.000 L (usar escala linear) ou 25 · 1.600 = 40.000 L (elevar apenas ao quadrado). A resposta correta exige elevar ao cubo."
        }
      ],
      activeRecallChecklist: [
        "Qual é a relação matemática entre a escala de comprimentos e a escala de superfícies?",
        "Se uma maquete está na escala 1:50, por qual fator multiplicamos o volume da maquete para obter o volume real?",
        "Quantos centímetros cúbicos (cm³) cabem exatamente em 1 litro?"
      ]
    },
    {
      id: "cap-mat-fund-02",
      chapterNumber: 2,
      title: "Grandezas Proporcionais e o Método do Processo versus Produto",
      subtitle: "Divisão direta e inversa sem equações confusas e resolução de regras de três compostas",
      estimatedMinutes: 20,
      learningObjectives: [
        "Identificar grandezas diretamente e inversamente proporcionais por meio de suas invariantes algébricas",
        "Resolver problemas de divisão em partes inversamente proporcionais utilizando a constante k",
        "Aplicar a técnica do 'Processo e Produto' em regras de três compostas eliminando setas ambíguas"
      ],
      targetSkills: [
        "H11 - Identificar a relação de dependência entre grandezas",
        "H12 - Resolver situações-problema que envolvam a partilha proporcional de recursos"
      ],
      deepContent: `
# 1. A Invariante Algébrica da Proporcionalidade

Duas grandezas não são proporcionais apenas porque "quando uma sobe, a outra sobe". Essa é uma intuição errada que derruba candidatos no ENEM (por exemplo, a altura de uma pessoa cresce com a idade, mas não é proporcional à idade!). A proporcionalidade exige uma relação funcional estrita:

### A. Grandezas Diretamente Proporcionais (GDP)
Duas grandezas $X$ e $Y$ são diretamente proporcionais se, e somente se, a sua **razão** for constante:

$$ \\frac{Y}{X} = k \\iff Y = k \\cdot X $$

* O gráfico de duas grandezas diretamente proporcionais é uma **reta que passa obrigatoriamente pela origem** $(0, 0)$.
* Se $X$ dobra, $Y$ dobra; se $X$ é reduzido a um terço, $Y$ cai a um terço.

### B. Grandezas Inversamente Proporcionais (GIP)
Duas grandezas $X$ e $Y$ são inversamente proporcionais se, e somente se, o seu **produto** for constante:

$$ X \\cdot Y = k \\iff Y = \\frac{k}{X} $$

* O gráfico de duas grandezas inversamente proporcionais é uma **hipérbole equilátera**.
* Se $X$ dobra, $Y$ divide por dois; se $X$ triplica, $Y$ cai para um terço.

---

# 2. O Algoritmo da Divisão Inversamente Proporcional

Dividir uma quantidade total $N$ em partes inversamente proporcionais aos números $a, b, c$ equivale rigorosamente a dividir $N$ em partes **diretamente proporcionais aos inversos** $\\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c}$.

### Método da Constante $k$:
1. As cotas procuradas serão: $x = \\frac{k}{a}$, $y = \\frac{k}{b}$, $z = \\frac{k}{c}$.
2. A soma das cotas deve igualar o total:
   $$ \\frac{k}{a} + \\frac{k}{b} + \\frac{k}{c} = N $$
3. Encontra-se o valor de $k$ e calcula-se cada parte isoladamente.

---

# 3. Regra de Três Composta: O Método do Processo e Produto

Esqueça o método tradicional de desenhar setas para cima e para baixo, que frequentemente gera confusão mental em provas sob estresse de tempo. Em qualquer problema envolvendo equipes, produção ou serviços, divida os fatores em dois grupos conceituais:

1. **O PROCESSO:** Tudo o que trabalha para realizar a tarefa (trabalhadores, máquinas, horas por dia, dias de operação, eficiência, potência).
2. **O PRODUTO:** O resultado material ou objetivo final produzido (peças fabricadas, metros construídos, pacientes atendidos, área desmatada, ampolas envasadas).

> [!IMPORTANT]
> **A Lei Universal de Conservação do Trabalho:**
> A razão entre todo o esforço do Processo e o Produto final alcançado permanece constante em qualquer situação:
> 
> $$ \\frac{\\text{Processo}_1}{\\text{Produto}_1} = \\frac{\\text{Processo}_2}{\\text{Produto}_2} $$
> 
> $$ \\frac{\\text{Agentes}_1 \\cdot \\text{Tempo}_1}{\\text{Resultado}_1} = \\frac{\\text{Agentes}_2 \\cdot \\text{Tempo}_2}{\\text{Resultado}_2} $$
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 2: Método Processo/Produto em Campanha de Triagem Clínica",
          enunciado: "Uma equipe de 8 enfermeiros, trabalhando 6 horas por dia, realiza a triagem de 720 pacientes em 5 dias de campanha. Visando acelerar o atendimento em uma situação emergencial, foram contratados mais 4 enfermeiros com a mesma capacitação, e a jornada de toda a equipe passou para 8 horas por dia. Quantos pacientes serão triados em 4 dias de operação?",
          stepByStep: [
            "Passo 1: Separar o Processo e o Produto na Situação 1:",
            "Processo 1: 8 enfermeiros · 6 h/dia · 5 dias = 240 horas-enfermeiro.",
            "Produto 1: 720 pacientes triados.",
            "Passo 2: Separar o Processo e o Produto na Situação 2:",
            "Enfermeiros totais: 8 + 4 = 12 enfermeiros.",
            "Processo 2: 12 enfermeiros · 8 h/dia · 4 dias = 384 horas-enfermeiro.",
            "Produto 2: X pacientes triados.",
            "Passo 3: Aplicar a relação universal Processo / Produto:",
            "240 / 720 = 384 / X.",
            "Note que 720 / 240 = 3 (cada hora-enfermeiro tria exatamente 3 pacientes!).",
            "Logo: X = 384 · 3 = 1.152 pacientes."
          ],
          gabarito: "1.152 pacientes.",
          comentarioTRI: "Com este método, elimina-se qualquer risco de inverter grandezas e a resolução consome menos de 90 segundos."
        }
      ],
      activeRecallChecklist: [
        "Qual é a característica gráfica de duas grandezas diretamente proporcionais?",
        "Como expressar que duas variáveis X e Y são inversamente proporcionais?",
        "Qual é a fórmula direta do método Processo/Produto para regras de três compostas?"
      ]
    },
    {
      id: "cap-mat-fund-03",
      chapterNumber: 3,
      title: "Aritmética de Porcentagens, Fatores Multiplicativos e Variações Acumuladas",
      subtitle: "Aceleração de cálculo mental, descontos sucessivos e a diferença entre pontos percentuais e variação relativa",
      estimatedMinutes: 18,
      learningObjectives: [
        "Dominar o cálculo com fatores de multiplicação (1 + i) e (1 - i) sem operações intermediárias",
        "Calcular a taxa real acumulada de variações sucessivas e entender por que porcentagens não se somam",
        "Diferenciar com precisão a variação em pontos percentuais da variação percentual relativa"
      ],
      targetSkills: [
        "H13 - Avaliar propostas de intervenção na realidade utilizando porcentagens",
        "H14 - Interpretar informações de natureza quantitativa expressas em índices percentuais"
      ],
      deepContent: `
# 1. Operando com Fatores de Multiplicação

Calcular uma porcentagem calculando a parte para depois somar ou subtrair é a principal causa de lentidão na prova de Matemática. Para alta performance, utilize o **fator multiplicador direto**:

* Para aplicar um **Aumento de $i\\%$**: multiplique diretamente pelo fator $(1 + i)$.
  * Aumento de $12\\% \\longrightarrow \\times 1,12$
  * Aumento de $5\\% \\longrightarrow \\times 1,05$
  * Aumento de $70\\% \\longrightarrow \\times 1,70$
* Para aplicar um **Desconto de $i\\%$**: multiplique diretamente pelo fator $(1 - i)$.
  * Desconto de $15\\% \\longrightarrow \\times 0,85$
  * Desconto de $30\\% \\longrightarrow \\times 0,70$
  * Desconto de $8\\% \\longrightarrow \\times 0,92$

---

# 2. Variações Sucessivas: Por que Porcentagens NUNCA se Somam

Quando um valor sofre reajustes percentuais em cascata, a base de cálculo se altera a cada etapa. Portanto, o fator acumulado final é o **produto dos fatores multiplicadores individuais**:

$$ F_{\\text{acumulado}} = F_1 \\cdot F_2 \\cdot F_3 \\dots $$

> [!NOTE]
> **O Paradoxo do Aumento seguido de Redução de mesma Taxa:**
> Se um insumo hospitalar sofre um aumento de $20\\%$ e, no mês seguinte, recebe um desconto de $20\\%$, o preço final **não volta ao valor inicial**!
> $$ F_{\\text{final}} = (1 + 0,20) \\cdot (1 - 0,20) = 1,20 \\cdot 0,80 = 0,96 $$
> O valor final ficou $4\\%$ menor do que o original ($1 - 0,96 = 0,04 = 4\\%$ de perda).

---

# 3. Pontos Percentuais versus Variação Percentual Relativa

Esta é uma das distinções conceituais mais recorrentes e cobradas no ENEM:

* **Pontos Percentuais (p.p.):** É a diferença aritmética simples entre duas porcentagens:
  $$\\Delta_{\\text{p.p.}} = \\text{Taxa}_2 - \\text{Taxa}_1$$
* **Variação Percentual Relativa (\\%):** É a razão de crescimento em relação ao valor de referência original:
  $$\\text{Variação Relativa} = \\frac{\\text{Taxa}_2 - \\text{Taxa}_1}{\\text{Taxa}_1} \\times 100\\%$$

*Exemplo Clínico*: A taxa de adesão a um protocolo de imunização subiu de $20\\%$ da população para $25\\%$.
* O aumento foi de **$5$ pontos percentuais** ($25 - 20 = 5$).
* No entanto, em termos relativos, o aumento foi de **$25\\%$** (pois $\\frac{25 - 20}{20} = \\frac{5}{20} = 0,25$).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 3: Variação em Pontos Percentuais vs Variação Relativa",
          enunciado: "Em um estudo sobre eficácia vacinal, a taxa de letalidade de uma doença em determinado grupo etário caiu de 8% para 2% após a introdução da nova vacina. A redução observada na letalidade, expressa respectivamente em pontos percentuais e em variação percentual relativa, foi de:",
          stepByStep: [
            "Passo 1: Calcular a diferença em pontos percentuais:",
            "Diferença = 8% - 2% = 6 pontos percentuais (p.p.).",
            "Passo 2: Calcular a redução percentual relativa em relação à taxa inicial (8%):",
            "Redução relativa = (Taxa inicial - Taxa final) / Taxa inicial",
            "Redução relativa = (8 - 2) / 8 = 6 / 8 = 3 / 4 = 0,75 = 75%.",
            "Conclusão: Houve uma queda de 6 pontos percentuais e uma redução relativa de 75% na mortalidade."
          ],
          gabarito: "6 pontos percentuais e 75% de redução relativa.",
          comentarioTRI: "Distratores típicos inverterão os números ou afirmarão que a queda foi de apenas 6%, gerando armadilha de interpretação para quem não domina a diferença conceitual."
        }
      ],
      activeRecallChecklist: [
        "Qual é o fator multiplicador equivalente a um aumento de 18% seguido de um desconto de 10%?",
        "Por que um aumento de 20% seguido de um desconto de 20% resulta em perda de 4%?",
        "Qual é a diferença entre uma elevação de 10 pontos percentuais e um aumento de 10%?"
      ]
    },
    {
      id: "cap-mat-fund-04",
      chapterNumber: 4,
      title: "Matemática Financeira e a Desconstrução do 'Parcelamento sem Juros'",
      subtitle: "Juros simples como função afim, juros compostos como função exponencial e o custo efetivo real",
      estimatedMinutes: 20,
      learningObjectives: [
        "Modelar juros simples como progressão aritmética linear e juros compostos como progressão geométrica exponencial",
        "Calcular a taxa de juros real embutida em compras parceladas com entrada",
        "Comparar opções de pagamento à vista com desconto versus financiamentos a prazo"
      ],
      targetSkills: [
        "H13 - Avaliar propostas de compras e investimentos com base no valor do dinheiro no tempo",
        "H14 - Resolver problemas financeiros envolvendo juros e montantes"
      ],
      deepContent: `
# 1. O Valor do Dinheiro no Tempo: Simples versus Compostos

O princípio fundamental da matemática financeira estabelece que um real hoje vale mais do que um real amanhã, devido ao custo de oportunidade do capital e à inflação.

### A. Juros Simples (Crescimento Linear)
O rendimento de cada período incide exclusivamente sobre o capital inicial ($C$):

$$ J = C \\cdot i \\cdot t \\qquad \\Longrightarrow \\qquad M = C + J = C \\cdot (1 + i \\cdot t) $$

* **Natureza Algébrica**: É uma **função afim** de taxa constante $a = C \\cdot i$. O montante cresce em **Progressão Aritmética (PA)**.

### B. Juros Compostos (Crescimento Exponencial — "Juros sobre Juros")
Ao final de cada período, os juros auferidos são capitalizados (incorporados ao saldo), rendendo juros nos períodos seguintes:

$$ M = C \\cdot (1 + i)^t $$

* **Natureza Algébrica**: É uma **função exponencial**. O montante cresce em **Progressão Geométrica (PG)**.

---

# 2. A Grande Armadilha do ENEM: O "Parcelado em 2x sem Juros com Entrada"

Lojas e fornecedores costumam anunciar: *"Produto por R$ 200 à vista com 10% de desconto OU em duas vezes de R$ 100 sem juros (sendo R$ 100 de entrada e R$ 100 em 30 dias)"*.

O consumidor desatento supõe que a segunda opção não cobra juros. A análise matemática financeira rigorosa prova o oposto:

1. **Preço Real da Mercadoria:**
   À vista com $10\\%$ de desconto: $200 - 20 = \\text{R\\$ } 180$.
2. **O que Acontece no Ato da Compra:**
   O cliente paga $\\text{R\\$ } 100$ de entrada.
3. **Saldo Efetivamente Financiado pela Loja:**
   $$\\text{Saldo Devedor} = \\text{Preço à Vista} - \\text{Entrada} = 180 - 100 = \\text{R\\$ } 80$$
4. **O que Acontece Após 30 Dias:**
   O cliente paga a segunda parcela de $\\text{R\\$ } 100$ para liquidar a dívida de $\\text{R\\$ } 80$.
5. **Juros Cobrados em 30 Dias:**
   $$J = 100 - 80 = \\text{R\\$ } 20$$
6. **A Taxa Real Mensal de Juros:**
   $$i = \\frac{\\text{Juros}}{\\text{Saldo Devedor}} = \\frac{20}{80} = \\frac{1}{4} = 25\\% \\text{ ao mês!}$$

> [!CAUTION]
> **A Falácia do Denominador Falso:**
> O erro que o INEP espera que você cometa é dividir os $\\text{R\\$ } 20$ pelo total da compra ($20/200 = 10\\%$) ou pela parcela ($20/100 = 20\\%$). Os juros devem ser calculados **sempre e exclusivamente sobre o saldo financiado** ($20/80 = 25\\%$).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 4: Cálculo da Taxa Real em Equipamento Clínico",
          enunciado: "Um aparelho médico de ultrassonografia portátil custa R$ 12.000,00 à vista. Para incentivar as vendas, o fabricante oferece a opção de pagamento em duas parcelas iguais de R$ 6.000,00: a primeira paga no ato da compra e a segunda paga após 30 dias. Para pagamentos integrais à vista, a empresa concede 10% de desconto sobre o valor de tabela. Qual é a taxa mensal de juros que o comprador assume caso opte pelo parcelamento?",
          stepByStep: [
            "Passo 1: Determinar o valor real à vista com o desconto:",
            "Desconto de 10%: 12.000 · 0,10 = R$ 1.200,00.",
            "Preço à vista real: 12.000 - 1.200 = R$ 10.800,00.",
            "Passo 2: Analisar a entrada e o saldo financiado:",
            "Entrada paga no ato: R$ 6.000,00.",
            "Saldo que ficou devendo para o mês seguinte: 10.800 - 6.000 = R$ 4.800,00.",
            "Passo 3: Analisar a segunda parcela de R$ 6.000,00 paga após 30 dias:",
            "Juros cobrados sobre o saldo: 6.000 - 4.800 = R$ 1.200,00.",
            "Passo 4: Calcular a taxa de juros sobre o saldo devedor:",
            "i = 1.200 / 4.800 = 1 / 4 = 0,25 = 25% ao mês."
          ],
          gabarito: "25% ao mês.",
          comentarioTRI: "Padrão de ouro de matemática financeira no ENEM. Saber calcular sobre o saldo devedor garante a pontuação máxima no item."
        }
      ],
      activeRecallChecklist: [
        "Qual tipo de progressão matemática governa os juros simples e os juros compostos?",
        "Qual é a fórmula do montante em juros compostos?",
        "Por que a taxa de juros em compras parceladas com entrada deve ser calculada sobre o saldo financiado e não sobre o preço total?"
      ]
    },
    {
      id: "cap-mat-fund-05",
      chapterNumber: 5,
      title: "Análise Dimensional, Notação Científica e Dosimetria Clínica",
      subtitle: "Potências de base 10, prefixos do SI e o cálculo rigoroso de infusão e gotejamento",
      estimatedMinutes: 19,
      learningObjectives: [
        "Escrever e operar números em notação científica padronizada sem desvios de ordem de grandeza",
        "Memorizar e converter os principais prefixos multiplicadores do Sistema Internacional (micro a giga)",
        "Deduzir a fórmula clássica de infusão intravenosa de gotejamento em gotas/min e microgotas/min"
      ],
      targetSkills: [
        "H11 - Reconhecer ordens de grandeza e realizar estimativas quantitativas",
        "H12 - Utilizar a notação científica e a análise dimensional na resolução de problemas práticos"
      ],
      deepContent: `
# 1. Notação Científica Padronizada

A **notação científica** permite expressar grandezas astronômicas ou submicroscópicas em uma estrutura normalizada:

$$ N = a \\times 10^k \\qquad \\text{onde} \\quad 1 \\le |a| < 10 \\quad \\text{e} \\quad k \\in \\mathbb{Z} $$

* $a$ é a **mantissa** (ou coeficiente), que deve ser maior ou igual a 1 e estritamente menor que 10.
* $k$ é a **ordem de grandeza** (expoente inteiro).

### Operações com Notação Científica:
* **Multiplicação:** Multiplicam-se as mantissas e somam-se os expoentes:
  $$(2 \\times 10^4) \\cdot (3 \\times 10^6) = 6 \\times 10^{10}$$
* **Divisão:** Dividem-se as mantissas e subtraem-se os expoentes:
  $$\\frac{8 \\times 10^8}{2 \\times 10^3} = 4 \\times 10^5$$

---

# 2. A Escala de Prefixos do Sistema Internacional (SI)

Na medicina e nas ciências biológicas, as dosagens e diâmetros celulares utilizam prefixos normalizados:

| Prefixo | Símbolo | Fator Multiplicador | Exemplo Clínico / Biomédico |
| :--- | :--- | :--- | :--- |
| **Giga** | $\\text{G}$ | $10^9$ ($1.000.000.000$) | Frequência de ondas em ressonância magnética |
| **Mega** | $\\text{M}$ | $10^6$ ($1.000.000$) | Carga viral em unidades por mL |
| **Quilo** | $\\text{k}$ | $10^3$ ($1.000$) | Quilograma (massa corporal do paciente) |
| **Mili** | $\\text{m}$ | $10^{-3}$ ($0,001$) | Miligrama (dose de fármaco), mililitro |
| **Micro** | $\\mu$ | $10^{-6}$ ($0,000001$) | Diâmetro de hemácias ($\\sim 7\\,\\mu\\text{m}$), micrograma |
| **Nano** | $\\text{n}$ | $10^{-9}$ ($0,000000001$) | Diâmetro de vírus ($\\sim 100\\,\\text{nm}$), nanotecnologia |

---

# 3. Dosimetria Clínica e Cálculo de Infusão de Soluções (Gotejamento)

No ENEM e na prática médica, a administração intravenosa de soros exige precisão absoluta de vazão:

### As Relações Físicas Fundamentais:
* **1 mL de solução aquosa** corresponde a exatamente **20 gotas normais** (macrogotas).
* **1 gota normal** corresponde a exatamente **3 microgotas**.
* Logo, **1 mL de solução** corresponde a **60 microgotas**.

### Dedução da Fórmula de Gotejamento em Gotas por Minuto ($G$):
Se um volume $V$ (em mL) deve ser infundido durante um tempo $T$ (em horas):
1. O tempo em minutos é $T_{\\text{min}} = T \\times 60$.
2. O número total de gotas é $V_{\\text{gotas}} = V \\times 20$.
3. A vazão em gotas por minuto é:

$$ G = \\frac{V \\times 20}{T \\times 60} = \\frac{V}{3 \\cdot T} $$

$$ \\text{Gotas/minuto} = \\frac{V\\,(\\text{mL})}{3 \\cdot T\\,(\\text{horas})} \\qquad \\qquad \\text{Microgotas/minuto} = \\frac{V\\,(\\text{mL})}{T\\,(\\text{horas})} $$
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 5: Cálculo de Gotejamento de Soro Fisiológico Hospitalar",
          enunciado: "Uma prescrição pediátrica determina a infusão intravenosa contínua de um frasco com 750 mL de solução fisiológica a 0,9% ao longo de um período ininterrupto de 10 horas. Para regular corretamente o equipo gravitacional tradicional, quantas gotas por minuto o profissional deve programar?",
          stepByStep: [
            "Passo 1: Identificar os parâmetros da prescrição:",
            "Volume: V = 750 mL.",
            "Tempo: T = 10 horas.",
            "Passo 2: Aplicar a fórmula deduzida de gotejamento (gotas/min):",
            "G = V / (3 · T)",
            "G = 750 / (3 · 10) = 750 / 30",
            "Passo 3: Simplificar a fração:",
            "G = 25 gotas por minuto.",
            "Passo 4: Verificação por microgotas:",
            "Se fosse em microgotas: Microgotas/min = V / T = 750 / 10 = 75 microgotas/min (exatamente 25 · 3 = 75)."
          ],
          gabarito: "25 gotas por minuto.",
          comentarioTRI: "Questão clássica interdisciplinar de Matemática e Enfermagem/Medicina recorrente no ENEM."
        }
      ],
      activeRecallChecklist: [
        "Quais são as condições obrigatórias para a mantissa na notação científica?",
        "Qual é o fator multiplicador do prefixo micro (μ)?",
        "Por que a fórmula de gotejamento em gotas por minuto possui o número 3 no denominador?"
      ]
    }
  ]
};
