/**
 * LIVRO DIDÁTICO DIGITAL: Fundamentos de Razão, Proporção e Matemática Financeira
 * Área: Matemática e suas Tecnologias
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_MATEMATICA_FUNDAMENTOS = {
  id: "livro-matematica-fundamentos",
  area: "matematica",
  title: "Fundamentos de Razão, Proporção e Finanças",
  subtitle: "A base de maior peso na pontuação da TRI do ENEM",
  estimatedReadingTimeMinutes: 50,
  badge: "Livro Essencial • Ouro da TRI",
  coverColor: "from-sky-950 to-cyan-900",
  prerequisites: [
    "Operações com frações e decimais",
    "Regra dos sinais e potenciação básica",
    "Conversão de unidades de medida (comprimento, área, volume e capacidade)"
  ],
  learningObjectives: [
    "Dominar razões entre grandezas de mesma e de diferentes naturezas (velocidade, densidade, escala)",
    "Aplicar corretamente as relações de escalas lineares, superficiais e volumétricas",
    "Resolver divisões diretamente e inversamente proporcionais sem recorrer a métodos de tentativa e erro",
    "Executar com precisão regras de três compostas analisando o sentido de variação das grandezas",
    "Identificar armadilhas de parcelamento 'sem juros' e calcular taxas reais de juros em operações financeiras"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "Razões, Grandezas e Escalas: Linear, Superficial e Volumétrica",
      targetSkill: "H11, H12 — Interpretar e utilizar escalas cartográficas e modelos tridimensionais",
      practiceModuleId: "matematica/razao-proporcao",
      deepContent: `
Razão é o quociente entre duas grandezas a e b (com b ≠ 0), expresso por a/b ou a:b.

1. Razões Especiais de Alta Recorrência:
• Velocidade Média: V_m = Δs / Δt (km/h para m/s: divide por 3,6; m/s para km/h: multiplica por 3,6).
• Densidade Demográfica: D_d = População / Área territorial (habitantes/km²).
• Densidade de um Corpo: d = Massa / Volume (g/cm³ ou kg/m³; água pura: 1 g/cm³ = 1.000 kg/m³ = 1 kg/L).
• Consumo Médio de Combustível: C = Distância / Volume (km/L).

2. Teoria Geral das Escalas Cartográficas:
A escala linear (E) expressa a razão de semelhança entre a medida no desenho (d) e a medida real correspondente (R), expressas NA MESMA UNIDADE DE MEDIDA:
E = d / R = 1 : K.
Se a escala é 1:50.000, 1 cm no mapa equivale a 50.000 cm reais (= 500 metros = 0,5 km).

3. As Três Dimensões da Escala (Crucial no ENEM!):
• Escala Linear (Comprimento, Perímetro, Raio):
  Razão = E = 1 / K.
• Escala Superficial (Área, Terreno, Polígono):
  Razão de Áreas = E² = (1 / K)² = 1 / K².
  Se o mapa dobra as medidas lineares, a área é multiplicada por 4!
• Escala Volumétrica (Volume, Capacidade, Tanque, Reservatório):
  Razão de Volumes = E³ = (1 / K)³ = 1 / K³.
  Se uma maquete está na escala 1:100, o volume real é 100³ = 1.000.000 de vezes maior que o da maquete!
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 1: Escala Volumétrica em Maquete de Tanque Hospitalar",
          enunciado: "Em uma maquete arquitetônica confeccionada na escala linear 1:50, o reservatório de oxigênio líquido tem volume de 40 cm³. Qual é o volume real desse reservatório, expresso em litros?",
          stepByStep: [
            "Passo 1: Entenda a relação entre escalas lineares e volumétricas:",
            "Escala linear = 1 / 50  ⇒  Escala volumétrica = (1 / 50)³ = 1 / 125.000.",
            "Passo 2: Calcule o volume real em cm³:",
            "V_real = 40 cm³ · 125.000 = 5.000.000 cm³.",
            "Passo 3: Converta cm³ para decímetros cúbicos (litros):",
            "1 L = 1 dm³ = 1.000 cm³.",
            "V_real = 5.000.000 / 1.000 = 5.000 Litros."
          ],
          gabarito: "5.000 Litros."
        }
      ],
      realWorldApplications: [
        "Projeção de plantas baixas e cartas topográficas de bacias hidrográficas.",
        "Modelagem de protótipos em túneis de vento na indústria automobilística e aeroespacial.",
        "Dimensionamento de doses de medicamentos em função da massa corporal ou superfície corpórea."
      ],
      commonMisconceptions: [
        "Multiplicar volumes ou áreas diretamente pela escala linear (ERRO CLÁSSICO: fazer 40 · 50 = 2.000 em vez de elevar ao cubo).",
        "Esquecer de converter as unidades para a mesma base antes de calcular a escala (ex: 2 cm para 1 km exige converter 1 km em 100.000 cm).",
        "Confundir escala grande (denominador pequeno, muito detalhe, ex: 1:100) com escala pequena (denominador grande, visão geral, ex: 1:1.000.000)."
      ],
      quickReviewPoints: [
        "Escala Linear: d / R = 1 / K.",
        "Escala de Áreas: Área_mapa / Área_real = 1 / K².",
        "Escala de Volumes: Vol_maquete / Vol_real = 1 / K³.",
        "1 m³ = 1.000 L | 1 L = 1 dm³ = 1.000 cm³."
      ]
    },
    {
      chapterNumber: 2,
      title: "Divisão Proporcional e Regra de Três Composta",
      targetSkill: "H11, H12 — Resolver problemas de proporcionalidade direta e inversa",
      practiceModuleId: "matematica/razao-proporcao",
      deepContent: `
A proporcionalidade é a espinha dorsal de mais de 25% das questões de matemática do ENEM.

1. Grandezas Diretamente Proporcionais (GDP):
Duas grandezas X e Y são GDP quando a razão entre elas é constante:
Y / X = k  ⇒  Y = k · X.
Se uma grandeza dobra, a outra também dobra.

2. Grandezas Inversamente Proporcionais (GIP):
Duas grandezas X e Y são GIP quando o produto entre elas é constante:
X · Y = k  ⇒  Y = k / X.
Se uma grandeza dobra, a outra cai pela metade.
Exemplos clássicos de GIP:
- Velocidade e tempo para percorrer uma mesma distância fixa.
- Número de operários e dias para concluir a mesma obra.
- Vazão de torneiras e tempo para encher uma mesma cisterna.

3. Divisão em Partes Inversamente Proporcionais:
Dividir N inversamente proporcional a a, b e c equivale a dividir N DIRETAMENTE proporcional aos inversos: 1/a, 1/b e 1/c.
Passo a passo com constante de proporcionalidade k:
x = k/a; y = k/b; z = k/c.
Some as partes: k/a + k/b + k/c = N.
Determine k e depois calcule cada cota.

4. Regra de Três Composta sem Setas Confusas:
Método dos Processos e Produtos:
Em qualquer problema de produção, identifique:
• O PROCESSO (agentes, máquinas, horas/dia, dias, eficiência);
• O PRODUTO (o objetivo final produzido: peças, metros de tecido, frascos, buracos cavados).
Relação fundamental:
(Processo₁) / (Produto₁) = (Processo₂) / (Produto₂).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Regra de Três Composta na Produção de Vacinas",
          enunciado: "Uma linha automatizada com 6 máquinas envasa 18.000 ampolas de vacina operando 8 horas por dia durante 5 dias. Devido a uma campanha emergencial, 2 novas máquinas idênticas foram adicionadas e a jornada diária subiu para 10 horas. Quantas ampolas serão envasadas em 6 dias?",
          stepByStep: [
            "Passo 1: Identifique os fatores do Processo e do Produto:",
            "Situação 1: Processo = 6 máquinas · 8 h/dia · 5 dias = 240 horas-máquina. Produto = 18.000 ampolas.",
            "Situação 2: Máquinas = 6 + 2 = 8. Processo = 8 máquinas · 10 h/dia · 6 dias = 480 horas-máquina. Produto = X ampolas.",
            "Passo 2: Aplique a igualdade: Processo₁ / Produto₁ = Processo₂ / Produto₂:",
            "240 / 18.000 = 480 / X",
            "Passo 3: Note que 480 é o dobro exato de 240 (480 / 240 = 2):",
            "X = 18.000 · 2 = 36.000 ampolas."
          ],
          gabarito: "36.000 ampolas."
        }
      ],
      realWorldApplications: [
        "Escalonamento de equipes e turnos em pronto-socorros e centros cirúrgicos.",
        "Dimensionamento de linhas de transmissão e bombas de irrigação agrícola.",
        "Distribuição de lucros societários proporcionalmente ao capital e tempo de investimento."
      ],
      commonMisconceptions: [
        "Inverter o sentido de grandezas diretas ou errar a análise de quem é direta e quem é inversa.",
        "Esquecer de somar máquinas adicionais (ler 'mais 2' e usar apenas 2 em vez de 6 + 2 = 8).",
        "Dividir inversamente fazendo regra de três direta invertida sem calcular o inverso correto (1/a)."
      ],
      quickReviewPoints: [
        "Diretas: razão constante (Y/X = k). Gráfico é reta que passa pela origem.",
        "Inversas: produto constante (X·Y = k). Gráfico é hipérbole equilátera.",
        "Método Processo/Produto: (Agentes · Tempo) / Resultado = constante."
      ]
    },
    {
      chapterNumber: 3,
      title: "Porcentagem e Variações Acumuladas",
      targetSkill: "H13, H14 — Calcular e interpretar porcentagens e taxas relativas",
      practiceModuleId: "matematica/porcentagem",
      deepContent: `
A porcentagem nada mais é do que uma fração de denominador 100: p% = p / 100.

1. Operações com Fator Multiplicativo (Acelere seu tempo no ENEM!):
Nunca calcule a porcentagem separadamente para depois somar ou subtrair; use o multiplicador direto:
• Aumento de i%: Multiplica por (1 + i).
  Ex: Aumento de 15% em R$ 80: 80 · 1,15 = R$ 92.
• Redução de i%: Multiplica por (1 - i).
  Ex: Desconto de 25% em R$ 200: 200 · 0,75 = R$ 150.

2. Aumentos e Descontos Sucessivos:
Para calcular variações sucessivas acumuladas, multiplique os fatores individuais:
F_total = F₁ · F₂ · F₃ ...
Exemplo: Um produto sobe 10% em janeiro e 20% em fevereiro.
F_total = (1 + 0,10) · (1 + 0,20) = 1,10 · 1,20 = 1,32.
Aumento real acumulado = 32% (e NUNCA 10% + 20% = 30%).

3. O Efeito do 'Desconto que Anula o Aumento':
Se um produto sobe 25%, quanto de desconto é necessário para retornar ao preço original?
Preço inicial = 100. Após aumento de 25% = 125.
Para voltar a 100, precisamos descontar R$ 25 de R$ 125:
Taxa de desconto = 25 / 125 = 1/5 = 20%!
Regra de ouro: Um desconto de mesma porcentagem nunca anula um aumento anterior.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Variação Real de Mensalidades",
          enunciado: "Uma faculdade privada reajustou sua mensalidade em 10% no primeiro semestre e em 5% no segundo semestre do mesmo ano. Em relação ao valor praticado no ano anterior, qual foi o aumento percentual real acumulado da mensalidade ao final do ano?",
          stepByStep: [
            "Passo 1: Escreva os fatores multiplicativos de cada aumento:",
            "Fator 1 (10%): F₁ = 1 + 0,10 = 1,10.",
            "Fator 2 (5%): F₂ = 1 + 0,05 = 1,05.",
            "Passo 2: Calcule o fator acumulado multiplicando-os:",
            "F_total = 1,10 · 1,05 = 1,155.",
            "Passo 3: Converta o fator total em taxa percentual:",
            "Taxa = F_total - 1 = 1,155 - 1 = 0,155 = 15,5%."
          ],
          gabarito: "15,5% de aumento acumulado."
        }
      ],
      realWorldApplications: [
        "Cálculo de alíquotas de impostos (ICMS, IPI, PIS/Cofins) sobre mercadorias.",
        "Análise de taxas de eficácia e redução de risco relativo em ensaios clínicos médicos.",
        "Índices de inflação acumulada anual (IPCA, INPC) no mercado consumidor."
      ],
      commonMisconceptions: [
        "Somar taxas percentuais sucessivas (10% + 5% = 15% em vez de 15,5%).",
        "Achar que baixar 20% após subir 20% deixa o preço no mesmo valor (fica 4% menor: 1,20 · 0,80 = 0,96).",
        "Confundir 'pontos percentuais' com 'porcentagem' (subir de 10% para 15% é um aumento de 5 pontos percentuais, mas de 50% em termos relativos!)."
      ],
      quickReviewPoints: [
        "Aumento: multiplica por (1 + i).",
        "Desconto: multiplica por (1 - i).",
        "Variações sucessivas: multiplique os fatores, nunca some as porcentagens.",
        "Pontos percentuais é a diferença simples entre taxas; variação percentual é a razão relativa."
      ]
    },
    {
      chapterNumber: 4,
      title: "Matemática Financeira: Juros, Inflação e Decisões de Compra",
      targetSkill: "H13, H14 — Avaliar propostas de financiamento e investimentos cotidianos",
      practiceModuleId: "matematica/financeira",
      deepContent: `
A matemática financeira analisa o valor do dinheiro ao longo do tempo.

1. Juros Simples:
O rendimento incide apenas sobre o capital originário:
J = C · i · t  |  M = C + J = C · (1 + i · t).
O montante cresce segundo uma progressão aritmética (PA) / função afim linear.

2. Juros Compostos ('Juros sobre Juros'):
O rendimento de cada período é incorporado ao capital para o cálculo do período seguinte:
M = C · (1 + i)^t.
O montante cresce segundo uma progressão geométrica (PG) / função exponencial.
Atenção: A taxa 'i' e o tempo 't' devem estar obrigatoriamente NA MESMA UNIDADE TEMPORAL (ex: taxa mensal com tempo em meses; taxa anual com tempo em anos).

3. Decisão Financeira no ENEM: À Vista vs. A Prazo:
Quando uma loja anuncia: 'R$ 100 à vista com 10% de desconto OU em duas vezes de R$ 50 sem juros (sendo R$ 50 de entrada)':
- Valor à vista real: R$ 90.
- Valor pago na entrada: R$ 50.
- Saldo financiado de fato: 90 - 50 = R$ 40!
- Valor pago após 30 dias: R$ 50.
- Juros pagos em 30 dias: 50 - 40 = R$ 10 sobre o saldo devedor de R$ 40.
- Taxa mensal real de juros: i = 10 / 40 = 25% ao mês!
Esse cálculo é o modelo exato cobrado nas questões do ENEM.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Taxa Real Embutida no Parcelamento",
          enunciado: "Um estetoscópio digital custa R$ 800,00 à vista. A loja oferece a opção de pagamento em duas parcelas iguais de R$ 400,00, sendo a primeira paga no ato da compra e a segunda paga 30 dias após. Se o comprador optar pelo pagamento à vista, obtém 5% de desconto. Qual é a taxa mensal de juros cobrada na opção parcelada em relação ao valor com desconto à vista?",
          stepByStep: [
            "Passo 1: Calcule o preço à vista com desconto de 5%:",
            "Desconto de 5%: 800 · 0,05 = R$ 40,00.",
            "Preço à vista real: 800 - 40 = R$ 760,00.",
            "Passo 2: Analise o que ocorre no parcelamento:",
            "No ato da compra, o cliente paga R$ 400,00 de entrada.",
            "Saldo que ficou devendo para pagar no mês seguinte:",
            "Saldo devedor = 760 - 400 = R$ 360,00.",
            "Passo 3: Após 30 dias, o cliente paga R$ 400,00 para liquidar a dívida de R$ 360,00:",
            "Juros cobrados = 400 - 360 = R$ 40,00.",
            "Passo 4: Calcule a taxa de juros sobre o saldo devedor financiado:",
            "Taxa = Juros / Saldo Devedor = 40 / 360 = 1 / 9 ≈ 0,1111 = 11,11% ao mês."
          ],
          gabarito: "Aproximadamente 11,11% ao mês."
        }
      ],
      realWorldApplications: [
        "Simulação de financiamentos habitacionais (Tabela SAC e Tabela Price).",
        "Planejamento de aposentadoria e previdência complementar.",
        "Análise de rentabilidade real de títulos públicos atrelados à inflação (Tesouro IPCA+)."
      ],
      commonMisconceptions: [
        "Achar que comprar parcelado 'sem juros' com entrada é gratuito quando existe desconto à vista.",
        "Calcular a taxa dividindo os juros pelo valor total da compra em vez de dividir pelo saldo realmente financiado.",
        "Não compatibilizar a unidade da taxa com a do tempo (usar taxa mensal com tempo em anos sem conversão)."
      ],
      quickReviewPoints: [
        "Juros Simples: J = C · i · t (linear).",
        "Juros Compostos: M = C · (1 + i)^t (exponencial).",
        "Saldo financiado = Preço à vista real - Entrada.",
        "Taxa real de juros = Juros pagos na parcela / Saldo financiado."
      ]
    }
  ]
};
