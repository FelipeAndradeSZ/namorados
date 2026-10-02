/**
 * LIVRO DIDÁTICO DIGITAL: Estatística, Análise Combinatória e Probabilidade
 * Área: Matemática e suas Tecnologias
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_MATEMATICA_ESTATISTICA_PROBABILIDADE = {
  id: "livro-matematica-estatistica-probabilidade",
  area: "matematica",
  title: "Estatística, Análise Combinatória e Probabilidade",
  subtitle: "Tratamento da informação, medidas de tendência, contagem e modelagem estocástica",
  estimatedReadingTimeMinutes: 65,
  badge: "Livro Essencial • Estatística e Probabilidade",
  coverColor: "from-amber-950 to-yellow-900",
  prerequisites: [
    "Operações fundamentais com frações, números decimais e porcentagem",
    "Noções básicas de conjuntos numéricos e interpretação de tabelas e gráficos cartesianos"
  ],
  learningObjectives: [
    "Calcular e interpretar média aritmética simples, média ponderada, mediana e moda em dados agrupados e não agrupados",
    "Analisar medidas de dispersão (variância e desvio padrão) para julgar a regularidade e homogeneidade de conjuntos de dados",
    "Dominar o Princípio Fundamental da Contagem e discernir quando utilizar permutações, arranjos ou combinações",
    "Calcular probabilidades clássicas de Laplace, probabilidade da união e eventos complementares",
    "Aplicar probabilidade condicional e diagramas em árvore na análise de testes diagnósticos de saúde pública"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "Estatística Descritiva: Média, Mediana e Moda",
      targetSkill: "H27, H28 — Interpretar dados estatísticos representados em tabelas e gráficos e calcular medidas centrais",
      practiceModuleId: "matematica/estatistica",
      deepContent: `
A Estatística Descritiva resume e interpreta grandes volumes de dados numéricos por meio de Medidas de Tendência Central, que indicam o valor típico ou representativo de uma distribuição.

1. As Três Medidas Centrais Fundamentais:
• Média Aritmética Simples (X̄):
  - É a soma de todos os valores observados dividida pelo número total de elementos:
    X̄ = (x₁ + x₂ + ... + xn) / n.
  - Sensibilidade a Outliers: A média é fortemente distorcida por valores discrepantes extremos (ex: a inclusão de um bilionário em uma sala de aula eleva a renda média do grupo sem que nenhum aluno tenha ficado rico).
• Média Aritmética Ponderada:
  - Utilizada quando cada elemento possui um peso (ou frequência absoluta fi) de importância:
    X̄p = (x₁·p₁ + x₂·p₂ + ... + xn·pn) / (p₁ + p₂ + ... + pn).
• Mediana (Md):
  - É o valor que ocupa a posição central exata do conjunto de dados após todos os elementos serem organizados em ordem estritamente crescente ou decrescente (o 'Rol' ordenado).
  - A mediana divide o conjunto em duas metades com 50% dos dados abaixo dela e 50% acima dela.
  - Regra de cálculo da Mediana:
    * Se o número de termos n for ÍMPAR: a mediana é o elemento do meio na posição: Pos = (n + 1) / 2.
    * Se o número de termos n for PAR: não há termo central único. A mediana é a média aritmética simples dos dois termos centrais nas posições (n / 2) e (n / 2 + 1).
  - Imunidade a Outliers: A mediana é uma medida robusta que NÃO sofre distorção por valores aberrantes nos extremos.
• Moda (Mo):
  - É o valor que aparece com a maior frequência absoluta (o número que mais se repete na amostra).
  - Um conjunto pode ser amodal (nenhum número se repete), unimodal (uma única moda), bimodal (duas modas) ou multimodal.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Cálculo da Mediana com Número Par de Dados",
          enunciado: "As notas obtidas por oito estudantes em uma avaliação de biologia foram: 6,0; 8,5; 4,0; 7,0; 9,0; 5,5; 7,0; 8,0. Determine a média aritmética e a mediana das notas dessa amostra.",
          stepByStep: [
            "Passo 1: Calcule a média aritmética simples:",
            "Soma = 6,0 + 8,5 + 4,0 + 7,0 + 9,0 + 5,5 + 7,0 + 8,0 = 55,0.",
            "Média = 55,0 / 8 = 6,875.",
            "Passo 2: Ordene os dados em ordem crescente (Construção obrigatória do ROL):",
            "Rol ordenado: [4,0 ; 5,5 ; 6,0 ; 7,0 ; 7,0 ; 8,0 ; 8,5 ; 9,0].",
            "Passo 3: Como o número de dados é par (n = 8), encontre as posições dos dois termos centrais:",
            "Posição 1: 8 / 2 = 4ª posição (nota 7,0).",
            "Posição 2: (8 / 2) + 1 = 5ª posição (nota 7,0).",
            "Passo 4: Calcule a média dos dois termos centrais:",
            "Mediana = (7,0 + 7,0) / 2 = 7,0."
          ],
          gabarito: "Média = 6,875 e Mediana = 7,0."
        }
      ],
      realWorldApplications: [
        "Divulgação de renda mediana no Brasil pelo IBGE para retratar o padrão de vida real sem as distorções causadas pela concentração no topo.",
        "Cálculo da nota de corte e notas finais ponderadas no Sistema de Seleção Unificada (SiSU) com pesos por área de conhecimento.",
        "Controle de qualidade industrial em linhas de envase de medicamentos em laboratórios farmacêuticos."
      ],
      commonMisconceptions: [
        "Calcular a mediana sem antes colocar a lista de números em ordem crescente (esquecer o Rol é o erro mais frequente do ENEM!).",
        "Confundir média simples com média ponderada ao esquecer de somar os pesos no denominador.",
        "Achar que todo conjunto numérico possui moda (se todos os números aparecerem apenas uma vez, o conjunto é amodal)."
      ],
      quickReviewPoints: [
        "Média: sensível a valores extremos discrepantes (outliers).",
        "Mediana: elemento central do Rol ordenado (imune a outliers).",
        "n ímpar: termo central único; n par: média dos dois termos centrais.",
        "Moda: valor mais frequente da distribuição."
      ]
    },
    {
      chapterNumber: 2,
      title: "Medidas de Dispersão e Regularidade de Desempenho",
      targetSkill: "H28, H29 — Avaliar a variabilidade de conjuntos de dados e julgar a consistência de desempenhos",
      practiceModuleId: "matematica/estatistica",
      deepContent: `
Duas distribuições podem possuir exatamente a mesma média aritmética e, no entanto, apresentarem comportamentos práticos completamente distintos. Para mensurar o grau de espalhamento ou homogeneidade dos dados em torno do centro, utilizam-se as Medidas de Dispersão.

1. Amplitude Total (A):
• É a diferença entre o maior valor (valor máximo) e o menor valor (valor mínimo) observado:
  A = x_máx - x_mín.
• Medida simples, mas muito rudimentar por considerar apenas os extremos e ignorar a distribuição interna dos valores.

2. Variância (s² ou σ²):
• É a média aritmética dos quadrados dos desvios de cada valor individual em relação à média do conjunto:
  Variância = [(x₁ - X̄)² + (x₂ - X̄)² + ... + (xn - X̄)²] / n.
• Como os desvios são elevados ao quadrado, a unidade da variância fica ao quadrado da unidade original dos dados (ex: metros quadrados, pontos ao quadrado), o que dificulta a interpretação física direta.

3. Desvio Padrão (s ou σ):
• É a raiz quadrada positiva da variância:
  Desvio Padrão = √(Variância).
• Vantagem fundamental: Possui exatamente a mesma unidade de medida dos dados originais e da média!

4. O Critério de Regularidade no ENEM:
No ENEM, questões recorrentes solicitam ao estudante escolher entre vários candidatos, atletas, máquinas ou fornecedores que empataram na mesma média:
• Quanto MENOR o Desvio Padrão (ou menor a variância):
  - Os dados estão mais próximos e concentrados ao redor da média.
  - O conjunto é mais HOMOGÊNEO e UNIFORME.
  - O candidato é mais REGULAR e CONSISTENTE.
• Quanto MAIOR o Desvio Padrão:
  - Os dados estão mais dispersos e espalhados.
  - O conjunto é mais HETEROGÊNEO e INSTÁVEL.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O Desempate pelo Desvio Padrão",
          enunciado: "Dois atiradores, A e B, empataram com a mesma pontuação média de 80 pontos em cinco rodadas de disparos. As pontuações obtidas foram:\nAtirador A: [80, 80, 80, 80, 80]\nAtirador B: [60, 70, 80, 90, 100]\nQual dos dois atiradores deve ser selecionado pelo critério da regularidade e qual é o desvio padrão de cada um?",
          stepByStep: [
            "Passo 1: Calcule os desvios e a variância do Atirador A:",
            "Para A, todos os valores são rigorosamente iguais à média (80).",
            "Desvios: (80 - 80) = 0 para todos os tiros.",
            "Variância(A) = 0  ⇒  Desvio Padrão(A) = √0 = 0.",
            "Passo 2: Calcule os desvios e a variância do Atirador B:",
            "Desvios em relação à média 80: (60-80)=-20, (70-80)=-10, (80-80)=0, (90-80)=10, (100-80)=20.",
            "Quadrados dos desvios: (-20)² = 400, (-10)² = 100, (0)² = 0, (10)² = 100, (20)² = 400.",
            "Soma dos quadrados = 400 + 100 + 0 + 100 + 400 = 1000.",
            "Variância(B) = 1000 / 5 = 200.",
            "Desvio Padrão(B) = √200 ≈ 14,14 pontos.",
            "Passo 3: Aplique a regra pedagógica de decisão:",
            "O Atirador A possui desvio padrão nulo (σA = 0 < σB), sendo perfeitamente regular e homogêneo."
          ],
          gabarito: "O Atirador A deve ser escolhido, pois seu desvio padrão é zero (máxima regularidade)."
        }
      ],
      realWorldApplications: [
        "Avaliação de risco em carteiras de investimentos financeiros (ativos com maior volatilidade/desvio padrão apresentam maior risco).",
        "Seleção de estudantes bolsistas e atletas profissionais pelo critério de constância de resultados.",
        "Calibração de sensores e balanças de precisão laboratoriais."
      ],
      commonMisconceptions: [
        "Achar que o candidato com maior desvio padrão é o mais regular (o mais regular é SEMPRE o de MENOR desvio padrão).",
        "Esquecer de elevar as diferenças ao quadrado na variância (se somar os desvios simples sem elevar ao quadrado, a soma dá sempre zero!).",
        "Confundir variância com desvio padrão: o desvio padrão é a raiz da variância."
      ],
      quickReviewPoints: [
        "Amplitude = Máximo - Mínimo.",
        "Variância = média dos quadrados dos desvios.",
        "Desvio Padrão = raiz quadrada da variância.",
        "Regra de Ouro do ENEM: Menor desvio padrão = Maior regularidade e homogeneidade."
      ]
    },
    {
      chapterNumber: 3,
      title: "Análise Combinatória: Contagem, Arranjos e Combinações",
      targetSkill: "H2, H3 — Resolver problemas de contagem aplicando agrupamentos ordenados e não ordenados",
      practiceModuleId: "matematica/probabilidade",
      deepContent: `
A Análise Combinatória desenvolve métodos formais para quantificar o número de possibilidades de agrupamento ou ocorrência de eventos sem a necessidade de enumerar exaustivamente cada um dos casos.

1. Princípio Fundamental da Contagem (PFC ou Princípio Multiplicativo):
Se uma decisão D₁ pode ser tomada de 'm' maneiras distintas e, para cada uma delas, uma decisão independente subsequente D₂ pode ser tomada de 'n' maneiras distintas, o número total de maneiras de tomar as decisões em sequência é dado pelo produto:
• Total de possibilidades = m · n.

2. Fatorial (n!):
• Definição: n! = n · (n - 1) · (n - 2) · ... · 3 · 2 · 1 (para n pertencente aos números naturais).
• Casos convencionados: 0! = 1  e  1! = 1.

3. A Pergunta de Ouro da Combinatória: "A ordem dos elementos importa?"
Para distinguir qual fórmula usar, faça sempre a pergunta: "Se eu trocar a ordem dos elementos escolhidos, o grupo formado muda ou continua sendo o mesmo grupo?"

• CASO 1: A ordem dos elementos IMPORTA!
  (Mudar a ordem gera um agrupamento novo: ex: senhas de banco, pódios de corrida 1º/2º/3º lugares, cargos de presidente e vice, placas de trânsito).
  - Permutação Simples (Pn): Usa TODOS os n elementos do conjunto:
    Pn = n!.
  - Permutação com Repetição: Pn^(a, b) = n! / (a! · b!) (ex: anagramas da palavra ARARA, que possui 3 'A' e 2 'R').
  - Arranjo Simples (An,p): Escolhe p elementos dentre n disponíveis (com p < n):
    An,p = n! / (n - p)!.

• CASO 2: A ordem dos elementos NÃO IMPORTA!
  (Mudar a ordem NÃO gera um grupo novo; é a mesma equipe, salada de frutas ou comissão: ex: escolher uma comissão de 3 estudantes para representar a turma).
  - Combinação Simples (Cn,p):
    Cn,p = n! / [p! · (n - p)!].
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Comissão versus Pódio de Cargos",
          enunciado: "Em um grupo com 10 profissionais de saúde, de quantas maneiras distintas é possível:\na) Formar uma comissão com 3 membros para um plantão hospitalar?\nb) Eleger uma diretoria composta por 1 Diretor Geral, 1 Diretor Clínico e 1 Tesoureiro?",
          stepByStep: [
            "Passo 1: Analise o item (a) - Comissão de 3 membros:",
            "Pergunta: Se escolhermos {Ana, Bruno, Carlos} ou {Carlos, Ana, Bruno}, a comissão muda? Não! É a mesma equipe.",
            "Logo, a ordem NÃO importa: utilize Combinação de 10 elementos tomados 3 a 3.",
            "C₁₀,₃ = 10! / [3! · (10 - 3)!] = (10 · 9 · 8 · 7!) / [ (3 · 2 · 1) · 7! ] = (10 · 9 · 8) / 6 = 720 / 6 = 120 maneiras.",
            "Passo 2: Analise o item (b) - Diretoria com cargos distintos:",
            "Pergunta: Se Ana for Diretora Geral e Bruno for Tesoureiro, é o mesmo que Bruno ser Diretor Geral e Ana ser Tesoureira? Não! Os cargos são diferentes.",
            "Logo, a ordem IMPORTA: utilize Arranjo de 10 elementos tomados 3 a 3 (ou o PFC direto):",
            "Diretor (10 opções) · Diretor Clínico (9 opções) · Tesoureiro (8 opções) = 10 · 9 · 8 = 720 maneiras."
          ],
          gabarito: "a) 120 comissões possíveis (Combinação); b) 720 diretorias possíveis (Arranjo/PFC)."
        }
      ],
      realWorldApplications: [
        "Geração de chaves criptográficas de segurança digital em protocolos de internet e autenticação de senhas.",
        "Dimensionamento de placas do padrão Mercosul e números de telefone com dígitos fixos.",
        "Genética mendeliana e cálculo de combinações alélicas na formação de gametas e cruzamentos biológicos."
      ],
      commonMisconceptions: [
        "Usar combinação para problemas onde os elementos ocupam cargos ou funções hierárquicas diferentes (se os cargos são distintos, a ordem importa!).",
        "Esquecer de descontar repetições em anagramas de palavras que contêm letras repetidas.",
        "Achar que 0! é igual a zero (por definição matemática formal e combinatória, 0! = 1)."
      ],
      quickReviewPoints: [
        "Princípio Fundamental da Contagem: multiplique o número de opções de cada etapa.",
        "Ordem IMPORTA (cargos, senhas, pódio): Arranjo ou Permutação.",
        "Ordem NÃO importa (comissões, grupos, saladas): Combinação: C(n,p) = n! / [p!·(n-p)!].",
        "Permutação com repetição: divida pelo fatorial das letras repetidas."
      ]
    },
    {
      chapterNumber: 4,
      title: "Teoria das Probabilidades: Do Espaço Amostral aos Eventos Sucessivos",
      targetSkill: "H28, H29 — Calcular a probabilidade de eventos simples, compostos e mutuamente exclusivos",
      practiceModuleId: "matematica/probabilidade",
      deepContent: `
A Teoria das Probabilidades modela o acaso e quantifica numericamente a incerteza de experimentos aleatórios (experimentos que, repetidos sob condições idênticas, produzem resultados imprevisíveis).

1. Conceitos Fundamentais:
• Espaço Amostral (S ou Ω): Conjunto de todos os resultados possíveis do experimento aleatório.
• Evento (E): Qualquer subconjunto do espaço amostral (E ⊆ S).
• Definição Clássica de Laplace para Espaços Equiprováveis:
  P(E) = n(E) / n(S) = (Número de casos favoráveis) / (Número de casos possíveis totais).
  - A probabilidade é sempre um número real no intervalo: 0 ≤ P(E) ≤ 1 (ou 0% ≤ P(E) ≤ 100%).
  - Evento Impossível: P = 0 (0%).
  - Evento Certo: P = 1 (100%).

2. Evento Complementar (E'):
O evento complementar E' representa a não ocorrência do evento E.
• Fórmula fundamental: P(E) + P(E') = 1  ⇒  P(E') = 1 - P(E).
• Estratégia de ouro para o ENEM: Sempre que o enunciado perguntar a probabilidade de ocorrer "pelo menos um", é infinitamente mais rápido calcular:
  P(pelo menos um) = 1 - P(nenhum).

3. Probabilidade da União de Dois Eventos (Regra do OU):
Para dois eventos A e B pertencentes ao mesmo espaço amostral:
• Fórmula: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).
  - Subtrai-se a interseção P(A ∩ B) para não contar os elementos comuns duas vezes!
• Se os eventos forem Mutuamente Exclusivos (não podem ocorrer juntos, A ∩ B = ∅):
  P(A ∪ B) = P(A) + P(B).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: A Estratégia do 'Pelo Menos Um'",
          enunciado: "Uma moeda comum não viciada é lançada consecutivamente 4 vezes. Qual é a probabilidade de sair a face 'cara' pelo menos uma vez nos quatro lançamentos?",
          stepByStep: [
            "Passo 1: Reconheça o gatilho da expressão 'pelo menos uma vez':",
            "Calcular todos os casos favoráveis (1 cara, 2 caras, 3 caras ou 4 caras) exigiria somar quatro cálculos distintos.",
            "Utilize a estratégia do evento complementar: P(pelo menos uma cara) = 1 - P(nenhuma cara).",
            "Passo 2: Obter 'nenhuma cara' significa obter 'coroa' em todos os 4 lançamentos:",
            "A probabilidade de sair coroa em um lançamento é 1/2.",
            "P(nenhuma cara) = (1/2) · (1/2) · (1/2) · (1/2) = 1/16.",
            "Passo 3: Aplique a fórmula do complementar:",
            "P(pelo menos uma cara) = 1 - (1/16) = (16/16) - (1/16) = 15/16.",
            "Em porcentagem: (15 / 16) · 100 = 93,75%."
          ],
          gabarito: "A probabilidade é 15/16 (ou 93,75%)."
        }
      ],
      realWorldApplications: [
        "Cálculo de prêmios de seguro de vida e automóvel através de tabelas atuariais de sinistralidade.",
        "Probabilidade de falha em sistemas redundantes de energia de hospitais com múltiplos geradores de backup.",
        "Genética de populações e estimativa de probabilidade de herança de doenças autossômicas recessivas em aconselhamento genético familiar."
      ],
      commonMisconceptions: [
        "Esquecer de subtrair a interseção P(A ∩ B) ao calcular a probabilidade da união de eventos não disjuntos.",
        "Achar que probabilidade pode resultar em número negativo ou maior do que 1.",
        "Acreditar na 'falácia do jogador': achar que, se uma moeda deu 5 coroas seguidas, o próximo lançamento 'tem mais chance' de ser cara (em experimentos independentes, a moeda não tem memória!)."
      ],
      quickReviewPoints: [
        "P(E) = favoráveis / possíveis  (sempre entre 0 e 1).",
        "Regra do OU: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
        "Pelo menos um = 1 - P(nenhum).",
        "Lançamentos independentes preservam as probabilidades individuais intactas."
      ]
    },
    {
      chapterNumber: 5,
      title: "Probabilidade Condicional e Modelagem de Decisões Reais",
      targetSkill: "H28, H29 — Analisar probabilidade condicional, independência de eventos e testes diagnósticos",
      practiceModuleId: "matematica/probabilidade",
      deepContent: `
A Probabilidade Condicional analisa como a informação prévia de que um evento B já ocorreu altera a probabilidade da ocorrência de outro evento A, ao restringir o espaço amostral original.

1. Definição de Probabilidade Condicional:
A probabilidade de ocorrer o evento A, sabendo-se que o evento B já ocorreu (lê-se "P de A dado B"):
• Fórmula: P(A | B) = P(A ∩ B) / P(B)  (com P(B) > 0).
• Na prática: O espaço amostral encolhe de S para apenas o subconjunto B!

2. Regra da Multiplicação (Regra do E):
• P(A ∩ B) = P(B) · P(A | B)  OU  P(A ∩ B) = P(A) · P(B | A).
• Eventos Independentes: Dois eventos são independentes quando a ocorrência de um não altera em nada a chance do outro ocorrer (isto é, P(A | B) = P(A)). Nesse caso específico:
  P(A ∩ B) = P(A) · P(B).

3. Testes Diagnósticos na Saúde e o Paradoxo dos Falsos Positivos:
Na medicina, nenhum teste diagnóstico é 100% perfeito:
• Sensibilidade: Capacidade do teste dar positivo quando o paciente REALMENTE tem a doença (verdadeiro positivo).
• Especificidade: Capacidade do teste dar negativo quando o paciente é REALMENTE saudável (verdadeiro negativo).
• O Teorema de Bayes e a Prevalência:
  - Quando uma doença é muito rara na população geral (baixa prevalência, ex: 0,1%), a maioria esmagadora das pessoas que recebem resultado positivo em uma triagem populacional de rotina é, na verdade, de FALSOS POSITIVOS!
  - Isso ocorre porque 1% de falso positivo aplicado a 99,9% de pessoas saudáveis gera numericamente mais indivíduos positivos do que os raros doentes reais.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O Paradoxo do Teste Diagnóstico Positivo",
          enunciado: "Em uma população de 10.000 pessoas, sabe-se que 100 estão infectadas por um vírus raro (prevalência de 1%). Um teste diagnóstico possui sensibilidade de 90% (detecta 90% dos doentes) e taxa de falso positivo de 10% (dá positivo para 10% dos saudáveis). Se uma pessoa aleatória fez o teste e o resultado foi POSITIVO, qual é a probabilidade real de ela estar de fato infectada?",
          stepByStep: [
            "Passo 1: Construa a tabela de frequências para os 10.000 indivíduos:",
            "- Doentes reais: 1% de 10.000 = 100 pessoas.",
            "- Pessoas saudáveis: 10.000 - 100 = 9.900 pessoas.",
            "Passo 2: Calcule quem testará positivo:",
            "- Dentre os 100 doentes, o teste acerta 90%: 0,90 · 100 = 90 verdadeiros positivos.",
            "- Dentre os 9.900 saudáveis, o teste erra em 10%: 0,10 · 9.900 = 990 falsos positivos.",
            "Passo 3: Calcule o total de testes positivos emitidos no laboratório:",
            "Total de positivos = 90 (doentes reais) + 990 (saudáveis enganados) = 1.080 positivos.",
            "Passo 4: Aplique a probabilidade condicional P(Doente | Teste Positivo):",
            "Casos favoráveis (doentes com teste positivo) = 90.",
            "Casos possíveis (todas as pessoas com teste positivo) = 1.080.",
            "P = 90 / 1.080 = 1 / 12 ≈ 0,0833 (apenas 8,33%!)."
          ],
          gabarito: "A probabilidade real de a pessoa estar infectada após o resultado positivo é de apenas 8,33% (cerca de 1 chance em 12)."
        }
      ],
      realWorldApplications: [
        "Interpretação médica de exames laboratoriais de triagem pré-natal e testes rápidos em campanhas de saúde pública.",
        "Algoritmos de detecção de spam e fraudes em compras de cartão de crédito.",
        "Avaliação de risco de crédito por agências financeiras e inteligência de dados securitários."
      ],
      commonMisconceptions: [
        "Achar que um teste com 90% de eficácia garante que quem testou positivo tem 90% de chance de estar doente (a probabilidade real depende criticamente da raridade/prevalência da doença na população!).",
        "Confundir P(A | B) com P(B | A): a probabilidade de ter febre dado que se tem gripe é altíssima; a probabilidade de ter gripe dado que se tem febre é muito menor.",
        "Multiplicar probabilidades de eventos dependentes sem atualizar a condição do segundo evento."
      ],
      quickReviewPoints: [
        "P(A | B) = P(A ∩ B) / P(B) — o espaço amostral restringe-se ao conjunto B.",
        "Regra do E: P(A ∩ B) = P(A) · P(B) somente se os eventos forem independentes.",
        "Em doenças raras, falsos positivos numéricos superam verdadeiros positivos em triagens de massa.",
        "Tabelas de contingência 2x2 facilitam a resolução visual de probabilidade condicional."
      ]
    }
  ]
};
