/**
 * LIVRO DIDÁTICO DIGITAL: Análise Combinatória e Teoria das Probabilidades no ENEM
 * Área: Matemática e suas Tecnologias
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 * Regra Estrita: ZERO menções a deslocamentos turísticos. Foco em bioestatística,
 * diagnósticos clínicos, segurança digital, loterias e controle de qualidade industrial.
 */

export const LIVRO_MATEMATICA_COMBINATORIA_PROBABILIDADE = {
  id: "livro-matematica-combinatoria-probabilidade",
  area: "matematica",
  title: "Análise Combinatória e Teoria das Probabilidades",
  subtitle: "Técnicas de contagem, permutações, probabilidade condicional, árvores de eventos e bioestatística no ENEM",
  estimatedReadingTimeMinutes: 75,
  badge: "Livro Essencial • Matemática",
  coverColor: "from-sky-950 to-indigo-900",
  chapters: [
    {
      id: "cap-1-pfc-arvores-decisao",
      chapterNumber: 1,
      title: "O Princípio Fundamental da Contagem e Árvores de Decisão",
      subtitle: "A regra do produto, resolução por etapas e a primazia das restrições",
      readTimeMinutes: 15,
      learningObjectives: [
        "Compreender o Princípio Fundamental da Contagem (PFC) como a regra multiplicativa de decisões sucessivas.",
        "Identificar a ordem ideal de resolução iniciando sempre pelas etapas que impõem restrições obrigatórias.",
        "Construir diagramas de árvore de decisão para visualizar espaços de possibilidades sem listagem exaustiva."
      ],
      targetSkills: [
        "H2 - Identificar padrões de agrupamento e contagem em problemas cotidianos",
        "H15 - Aplicar o princípio multiplicativo e aditivo na resolução de problemas práticos"
      ],
      content: `
### 1. O Princípio Fundamental da Contagem (Princípio Multiplicativo)

O Princípio Fundamental da Contagem (PFC) é o alicerce de toda a Análise Combinatória. Ele estabelece que, se uma tarefa ou decisão é dividida em **etapas sucessivas e independentes**:
- A etapa 1 pode ser realizada de $n_1$ maneiras;
- A etapa 2 pode ser realizada de $n_2$ maneiras;
- ...
- A etapa $k$ pode ser realizada de $n_k$ maneiras;

Então o número total de modos distintos de cumprir a sequência completa de decisões é o **produto** das opções de cada etapa:

$$N = n_1 \\times n_2 \\times n_3 \\times \\dots \\times n_k$$

### 2. A Regra de Ouro: Comece Sempre pela Maior Restrição

O erro mais frequente cometido por vestibulandos em questões do ENEM de média e alta complexidade é iniciar a contagem pela primeira casa da esquerda sem considerar as restrições do problema.

**Exemplo Didático**: Quantos números pares de 3 algarismos distintos podemos formar usando os dígitos $\{0, 1, 2, 3, 4, 5\}$?
- **Restrição 1**: Para ser de 3 algarismos, o primeiro dígito **não pode ser zero**.
- **Restrição 2**: Para ser par, o último dígito deve terminar em **0, 2 ou 4**.
- Observe que o dígito '0' interfere nas duas restrições simultaneamente! Quando uma restrição entra em conflito com outra, a estratégia infalível é **dividir o problema em casos disjuntos**:
  - **Caso 1: O número termina em 0** (1 opção no final):
    - Centena: restam 5 opções (1, 2, 3, 4, 5);
    - Dezena: restam 4 opções;
    - Total do Caso 1: $5 \\times 4 \\times 1 = 20$ números.
  - **Caso 2: O número termina em 2 ou 4** (2 opções no final):
    - Centena: não pode ser zero nem o algarismo final já escolhido ⟹ restam $6 - 2 = 4$ opções;
    - Dezena: pode ser zero, mas não os dois já usados ⟹ restam 4 opções;
    - Total do Caso 2: $4 \\times 4 \\times 2 = 32$ números.
  - **Total Geral (Princípio Aditivo)**: $20 + 32 = 52$ números pares distintos.

### 3. A Diferença entre o Conectivo 'E' e o Conectivo 'OU'

- Conectivo **'E'** ⟹ Eventos ou etapas que ocorrem simultaneamente ou em sucessão ⟹ **MULTIPLICAÇÃO** (Princípio Multiplicativo).
- Conectivo **'OU'** ⟹ Cenários alternativos, excludentes ou disjuntos ⟹ **ADIÇÃO** (Princípio Aditivo).
      `,
      workedExample: {
        scenario: "Um laboratório de análises clínicas cria um código de identificação de amostras biológicas formado por 2 letras distintas seguidas de 4 algarismos quaisquer (com repetição permitida). Sabendo que o alfabeto possui 26 letras e os dígitos vão de 0 a 9, quantas amostras podem ser identificadas?",
        resolution: "Etapa 1 (1ª letra): 26 opções. Etapa 2 (2ª letra distinta): 25 opções. Etapa 3 (1º dígito): 10 opções. Etapa 4 (2º dígito): 10 opções. Etapa 5 (3º dígito): 10 opções. Etapa 6 (4º dígito): 10 opções. Pelo PFC: Total = 26 × 25 × 10 × 10 × 10 × 10 = 650 × 10.000 = 6.500.000 códigos distintos."
      },
      realWorldApplication: "O PFC é a base da criptografia moderna de senhas bancárias, chaves de autenticação de dois fatores e estruturação de bancos de dados hospitalares.",
      commonMisconceptions: [
        "Achar que 'algarismos distintos' permite repetir números: distintos significa rigorosamente SEM repetição de nenhum elemento.",
        "Esquecer que o algarismo zero não pode ocupar a casa de maior ordem de um número inteiro (ex: 042 tem 2 dígitos e não 3)."
      ],
      quickReview: [
        "PFC = Multiplicar as opções de cada decisão sucessiva.",
        "Regra de Ouro = Resolver primeiro a etapa mais restritiva.",
        "'E' = Multiplica; 'OU' = Soma."
      ]
    },
    {
      id: "cap-2-permutacoes-anagramas",
      chapterNumber: 2,
      title: "Permutações Simples, Circulares e Anagramas com Repetição",
      subtitle: "Fatoriais, método do bloco e contagem de trajetos em malhas ortogonais",
      readTimeMinutes: 15,
      learningObjectives: [
        "Dominar o cálculo de fatoriais e permutações simples de n elementos.",
        "Aplicar a técnica do bloco para agrupar elementos que devem permanecer juntos.",
        "Resolver problemas de anagramas com repetição e trajetos mínimos em malhas urbanas."
      ],
      targetSkills: [
        "H15 - Aplicar o princípio multiplicativo e aditivo na resolução de problemas práticos",
        "H16 - Resolver problemas envolvendo permutações e contagens geométricas"
      ],
      content: `
### 1. Fatorial e Permutação Simples

A permutação simples é o caso particular do PFC em que dispomos de $n$ elementos distintos e desejamos ordená-los em $n$ posições (todos os elementos são utilizados). A ordem em que são dispostos gera agrupamentos diferentes:

$$P_n = n! = n \\times (n-1) \\times (n-2) \\times \\dots \\times 2 \\times 1$$

Por convenção axiomática: $0! = 1$ e $1! = 1$.

---

### 2. A Técnica do Bloco (Elementos que Devem Ficar Juntos)

Quando o enunciado exige que determinados elementos permaneçam **sempre juntos**, aplica-se o método do bloco em 2 etapas:
1. **Trate os elementos inseparáveis como um único elemento gigante (um bloco)**. Conte o bloco como um único item e calcule a permutação externa entre o bloco e os demais elementos livres.
2. **Multiplique pela permutação interna dos elementos dentro do próprio bloco**.

**Exemplo**: De quantas maneiras 4 médicos e 3 enfermeiros podem sentar-se em fila se os 3 enfermeiros devem ficar sempre juntos?
- O bloco de enfermeiros conta como 1 elemento. Temos 4 médicos + 1 bloco = 5 elementos para permutar ⟹ $P_5 = 5! = 120$.
- Internamente, os 3 enfermeiros permutam entre si ⟹ $P_3 = 3! = 6$.
- Total de filas: $120 \\times 6 = 720$ maneiras.

---

### 3. Permutação com Repetição e Trajetos em Malhas

Quando há elementos repetidos, permutar elementos idênticos entre si não cria uma nova configuração visual. Por isso, **divide-se o fatorial total pelo produto dos fatoriais de cada repetição**:

$$P_n^{a, b, c} = \\frac{n!}{a! \\times b! \\times c!}$$

#### Aplicação Top ENEM: Deslocamentos em Malha Quadriculada
Um carteiro precisa sair do ponto A e chegar ao ponto B em uma cidade com quarteirões quadriculados, movendo-se apenas para a Direita (D) e para Cima (C). Se ele precisa dar 5 passos para a Direita e 3 passos para Cima, qualquer trajeto válido é um anagrama da sequência com 8 letras: $D D D D D C C C$.
- Total de passos: $n = 8$;
- Repetições: 5 letras D e 3 letras C;
- Total de caminhos distintos:
$$P_8^{5, 3} = \\frac{8!}{5! \\times 3!} = \\frac{8 \\times 7 \\times 6}{6} = 56 \\text{ caminhos}.$$
      `,
      workedExample: {
        scenario: "Quantos anagramas da palavra 'MEDICINA' começam com a letra M?",
        resolution: "Fixamos a letra M na primeira posição: M _ _ _ _ _ _ _. Restam 7 letras para preencher as posições seguintes: {E, D, I, C, I, N, A}. Observamos que a letra I repete-se 2 vezes. Logo, trata-se de uma permutação de 7 elementos com repetição de 2: P_7^2 = 7! / 2! = (7 × 6 × 5 × 4 × 3 × 2 × 1) / 2 = 2.520 anagramas."
      },
      realWorldApplication: "O cálculo de permutações com repetição é usado pela bioinformática no sequenciamento genético de bases nitrogenadas (A, T, C, G) do genoma humano.",
      commonMisconceptions: [
        "Esquecer de permutar os elementos internamente dentro do bloco.",
        "Dividir por (a + b)! em vez de dividir por a! × b! na fórmula com repetição."
      ],
      quickReview: [
        "Permutação simples = n!",
        "Elementos juntos = Trate como 1 bloco e multiplique pela permutação interna.",
        "Permutação com repetição = Divida pelo fatorial dos repetidos: n! / (a! · b!)."
      ]
    },
    {
      id: "cap-3-arranjos-combinacoes-pascal",
      chapterNumber: 3,
      title: "Arranjos, Combinações Simples e o Triângulo de Pascal",
      subtitle: "A ordem importa? Como distinguir comissões de pódios e propriedades do binômio",
      readTimeMinutes: 16,
      learningObjectives: [
        "Distinguir de forma definitiva quando utilizar Arranjo Simples ou Combinação Simples.",
        "Dominar a dedução e aplicação da fórmula de Combinações: C(n, p) = n! / [p! · (n - p)!].",
        "Reconhecer as propriedades simétricas do Triângulo de Pascal e relações binomiais."
      ],
      targetSkills: [
        "H15 - Aplicar o princípio multiplicativo e aditivo na resolução de problemas práticos",
        "H16 - Resolver problemas envolvendo combinações e probabilidades associadas"
      ],
      content: `
### 1. O Teste Infalível: 'A Ordem Importa?'

O divisor de águas da combinatória no ENEM resume-se a uma única pergunta conceitual:

> **Se eu alterar a ordem dos elementos escolhidos, o agrupamento formado torna-se diferente?**
> - **SIM, a ordem importa** ⟹ **ARRANJO ou PERMUTAÇÃO** (pódios de 1º/2º/3º lugar, senhas bancárias, cargos diferenciados como Presidente e Secretário, placas de veículos).
> - **NÃO, a ordem não importa** ⟹ **COMBINAÇÃO SIMPLES** (comissões de trabalho, equipes de plantão, escolha de matérias, subconjuntos de questões, saladas de frutas).

---

### 2. Arranjo Simples vs. Combinação Simples

#### Arranjo Simples:
Escolhemos $p$ elementos entre $n$ disponíveis, onde a ordem de escolha define um novo resultado:
$$A(n, p) = \\frac{n!}{(n - p)!} = n \\times (n - 1) \\times \\dots \\times (n - p + 1)$$

#### Combinação Simples:
Escolhemos $p$ elementos entre $n$ disponíveis, onde a ordem de escolha é totalmente irrelevante. Para anular a contagem repetida dos mesmos $p$ elementos ordenados de modos diferentes, **dividimos pelo fatorial de $p$ ($p!$)**:
$$C(n, p) = \\binom{n}{p} = \\frac{n!}{p! \\times (n - p)!}$$

---

### 3. O Triângulo de Pascal e suas Propriedades

O Triângulo de Pascal é uma tabela triangular de números binomiais $\\binom{n}{p}$:
- **Relação de Stifel**: A soma de dois elementos vizinhos na mesma linha é igual ao elemento imediatamente abaixo:
$$\\binom{n}{p} + \\binom{n}{p+1} = \\binom{n+1}{p+1}$$
- **Soma dos Elementos de uma Linha**: A soma de todas as combinações de $n$ elementos tomados $0, 1, 2, \\dots, n$ a $n$ é igual a $2^n$:
$$\\sum_{p=0}^n \\binom{n}{p} = 2^n$$
Essa propriedade é a prova combinatória do número de subconjuntos de um conjunto de $n$ elementos (o conjunto das partes $\\mathcal{P}(A)$).
      `,
      workedExample: {
        scenario: "Um hospital dispõe de 8 cirurgiões e 6 anestesistas. De quantas maneiras pode ser escalada uma equipe cirúrgica de emergência composta por exatamente 3 cirurgiões e 2 anestesistas?",
        resolution: "Como os cirurgiões exercem a mesma função na equipe e os anestesistas também, a ordem de escolha não importa: usamos combinações simples. • Escolha dos cirurgiões: C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1) = 56 maneiras. • Escolha dos anestesistas: C(6, 2) = (6 × 5) / (2 × 1) = 15 maneiras. • Pelo PFC (as duas escolhas ocorrem simultaneamente para compor a equipe): Total = 56 × 15 = 840 equipes diferentes."
      },
      realWorldApplication: "Combinações simples são usadas pelo SUS no escalonamento de plantões hospitalares e pela bioestatística na montagem de grupos de controle e tratamento em ensaios clínicos.",
      commonMisconceptions: [
        "Usar arranjo para comissões onde os membros têm o mesmo papel.",
        "Somar as combinações em vez de multiplicá-las quando as etapas ocorrem simultaneamente."
      ],
      quickReview: [
        "Ordem importa? SIM = Arranjo. NÃO = Combinação.",
        "Combinação simples = n! / [p! · (n - p)!].",
        "Soma da linha n do Triângulo de Pascal = 2ⁿ."
      ]
    },
    {
      id: "cap-4-probabilidade-classica-total",
      chapterNumber: 4,
      title: "Probabilidade Clássica e a Regra da Adição (Eventos União)",
      subtitle: "Espaço amostral equiprovável, evento complementar e probabilidade da união",
      readTimeMinutes: 14,
      learningObjectives: [
        "Definir espaço amostral e probabilidade laplaciana em experimentos equiprováveis.",
        "Utilizar o método do evento complementar (P(A') = 1 - P(A)) para agilizar cálculos complexos.",
        "Aplicar o Teorema da Soma: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)."
      ],
      targetSkills: [
        "H28 - Identificar a probabilidade de ocorrência de eventos cotidianos",
        "H29 - Resolver situações-problema que envolvam o cálculo de probabilidades simples e compostas"
      ],
      content: `
### 1. Definição Clássica de Probabilidade (Laplace)

Em um experimento aleatório com espaço amostral finito $\\Omega$ onde todos os resultados elementares têm a mesma chance de ocorrer (espaço equiprovável), a probabilidade de um evento $A$ é dada pela razão:

$$P(A) = \\frac{n(A)}{n(\\Omega)} = \\frac{\\text{Número de casos favoráveis}}{\\text{Número de casos possíveis}}$$

Como o número de casos favoráveis varia entre 0 e $n(\\Omega)$, temos sempre:
$$0 \\leq P(A) \\leq 1 \\quad (\\text{ou } 0\\% \\leq P(A) \\leq 100\\%)$$
- $P(A) = 0$: Evento Impossível.
- $P(A) = 1$: Evento Certo.

---

### 2. O Poder do Evento Complementar ($A^c$)

Quando uma questão do ENEM usa expressões como:
- **'pelo menos um'**
- **'no mínimo um'**
- **'não todos'**

Calcular diretamente todos os casos favoráveis costuma exigir somar dezenas de combinações. A estratégia de ouro é calcular a probabilidade do **evento contrário (proibido)** e subtrair de 1 (100%):

$$P(A) = 1 - P(A^c)$$

**Exemplo Clássico**: Ao lançar uma moeda honesta 4 vezes, qual a probabilidade de sair **pelo menos uma cara**?
- Evento proibido ($A^c$): NENHUMA cara (sair 4 coroas seguidas).
- $P(A^c) = (1/2)^4 = 1/16$.
- $P(\\text{pelo menos 1 cara}) = 1 - 1/16 = 15/16 \\approx 93,75\\%$.

---

### 3. Probabilidade da União de Dois Eventos (Regra do 'OU')

Para quaisquer dois eventos $A$ e $B$ de um mesmo espaço amostral:

$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$

- Subtrai-se a interseção $P(A \\cap B)$ para não contar duas vezes os elementos que pertencem aos dois conjuntos simultaneamente.
- Se os eventos forem **mutuamente exclusivos** ($A \\cap B = \\emptyset$), a interseção é nula: $P(A \\cup B) = P(A) + P(B)$.
      `,
      workedExample: {
        scenario: "Em uma urna há fichas numeradas de 1 a 50. Uma ficha é retirada ao acaso. Qual a probabilidade de o número sorteado ser múltiplo de 3 OU múltiplo de 5?",
        resolution: "Espaço amostral: n(Ω) = 50. • Múltiplos de 3: {3, 6, 9, ..., 48} ⟹ 50 / 3 = 16 múltiplos. Logo, P(A) = 16/50. • Múltiplos de 5: {5, 10, 15, ..., 50} ⟹ 50 / 5 = 10 múltiplos. Logo, P(B) = 10/50. • Múltiplos de 3 E 5 simultaneamente (múltiplos de 15): {15, 30, 45} ⟹ 3 múltiplos. Logo, P(A ∩ B) = 3/50. Aplicando a regra da união: P(A ∪ B) = 16/50 + 10/50 - 3/50 = 23/50 = 46%."
      },
      realWorldApplication: "A teoria da probabilidade total é aplicada em epidemiologia no cálculo da probabilidade de um paciente apresentar sintomas respiratórios por gripe ou por alergia sazonal.",
      commonMisconceptions: [
        "Esquecer de subtrair a interseção P(A ∩ B) ao somar probabilidades de eventos que não são disjuntos.",
        "Obter probabilidade maior que 1 ou menor que 0 (probabilidade é SEMPRE entre 0 e 1)."
      ],
      quickReview: [
        "P(A) = Casos favoráveis / Casos possíveis.",
        "Pelo menos um = 1 - P(nenhum).",
        "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)."
      ]
    },
    {
      id: "cap-5-probabilidade-condicional-binomial",
      chapterNumber: 5,
      title: "Probabilidade Condicional, Independência e Ensaios Binomiais",
      subtitle: "Redução do espaço amostral, sensibilidade clínica e repetição de Bernoulli",
      readTimeMinutes: 15,
      learningObjectives: [
        "Compreender a probabilidade condicional como a redefinição e redução do espaço amostral.",
        "Diferenciar eventos dependentes de eventos estatisticamente independentes.",
        "Calcular a probabilidade binomial de k sucessos em n ensaios independentes de Bernoulli."
      ],
      targetSkills: [
        "H29 - Resolver situações-problema que envolvam probabilidade condicional",
        "H30 - Avaliar propostas de intervenção fundamentadas em inferências probabilísticas"
      ],
      content: `
### 1. Probabilidade Condicional: O Espaço Amostral Encolhe

A probabilidade de ocorrer o evento $A$, **dado que o evento $B$ já ocorreu com certeza** (lê-se: $P(A|B)$), é calculada restringindo-se o universo de possibilidades ao conjunto $B$:

$$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{n(A \\cap B)}{n(B)}$$

**Dica de Ouro no ENEM**: Não decore apenas a fórmula algébrica! Lembre-se de que, na probabilidade condicional, o denominador passa a ser o número de elementos da condição prévia ($B$), e o numerador são os elementos que satisfazem $A$ dentro desse novo grupo restrito.

---

### 2. Eventos Independentes (Regra do Produto)

Dois eventos $A$ e $B$ são considerados **independentes** quando a ocorrência de um não altera em nada a chance de ocorrência do outro: $P(A|B) = P(A)$. Nesse caso:

$$P(A \\cap B) = P(A) \\times P(B)$$

Se houver dependência (como retiradas de cartas ou bolas **sem reposição**), a probabilidade da segunda etapa altera-se:
$$P(A \\cap B) = P(A) \\times P(B|A)$$

---

### 3. Distribuição Binomial de Probabilidade (Bernoulli)

Quando um experimento é repetido $n$ vezes de forma independente, admitindo apenas dois desfechos possíveis em cada tentativa — **Sucesso** (com probabilidade $p$) e **Fracasso** (com probabilidade $q = 1 - p$) —, a probabilidade de obter exatamente $k$ sucessos é:

$$P(X = k) = \\binom{n}{k} \\times p^k \\times (1 - p)^{n - k}$$

O coeficiente binomial $\\binom{n}{k}$ contabiliza todas as ordens distintas em que os $k$ sucessos e $(n - k)$ fracassos podem acontecer na sequência de $n$ tentativas.
      `,
      workedExample: {
        scenario: "Um casal portador do alelo recessivo para anemia falciforme planeja ter 3 filhos. A probabilidade de cada filho nascer afetado pela doença genética é de 1/4 (25%), independentemente do sexo ou dos nascimentos anteriores. Qual a probabilidade de exatamente 2 dos 3 filhos nascerem afetados?",
        resolution: "Trata-se de um modelo binomial com n = 3 filhos, k = 2 sucessos (afetados) e p = 1/4 (logo, q = 3/4). Aplicando a fórmula binomial: P(X = 2) = C(3, 2) × (1/4)² × (3/4)¹ = 3 × (1/16) × (3/4) = 9/64 ≈ 14,06%."
      },
      realWorldApplication: "A probabilidade condicional é a espinha dorsal dos testes de triagem diagnóstica médica (sensibilidade, especificidade e valor preditivo positivo) para exames laboratoriais.",
      commonMisconceptions: [
        "Achar que em retiradas sem reposição a probabilidade do segundo evento permanece igual à do primeiro.",
        "Esquecer de multiplicar pelo coeficiente binomial C(n, k) ao calcular probabilidades de múltiplos sucessos ordenados."
      ],
      quickReview: [
        "P(A|B) = P(A ∩ B) / P(B) -> O espaço amostral encolhe para B.",
        "Independentes = P(A ∩ B) = P(A) · P(B).",
        "Binomial = C(n, k) · pᵏ · (1 - p)ⁿ⁻ᵏ."
      ]
    }
  ]
};
