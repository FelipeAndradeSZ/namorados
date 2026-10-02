/**
 * LIVRO DIDÁTICO DIGITAL: Eletrodinâmica, Circuitos e Energia no ENEM
 * Área: Ciências da Natureza e suas Tecnologias (Física)
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_NATUREZA_ELETRODINAMICA = {
  id: "livro-natureza-eletrodinamica",
  area: "natureza",
  title: "Eletrodinâmica e Eficiência Energética",
  subtitle: "Circuitos elétricos cotidianos e cálculo de consumo sob a ótica do ENEM",
  estimatedReadingTimeMinutes: 50,
  badge: "Livro Essencial • Física Aplicada",
  coverColor: "from-amber-950 to-yellow-900",
  prerequisites: [
    "Conceitos de carga elétrica elementar e estrutura atômica",
    "Trabalho mecânico, conservação de energia e potência",
    "Álgebra básica para resolução de equações e frações equivalentes"
  ],
  learningObjectives: [
    "Diferenciar corrente contínua de alternada e compreender o movimento ordenado de elétrons livres",
    "Calcular resistências elétricas através da 1ª e 2ª Leis de Ohm",
    "Dominar a análise de circuitos em série, paralelo e mistos em instalações domésticas",
    "Calcular potência elétrica, energia consumida em quilowatt-hora (kWh) e o custo financeiro em contas de luz",
    "Compreender os dispositivos de proteção elétrica (disjuntores, fusíveis e aterramento com fio terra)"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "Corrente Elétrica, Tensão e Resistores (Leis de Ohm)",
      targetSkill: "H17, H18 — Identificar parâmetros elétricos e dimensionar condutores",
      practiceModuleId: "natureza/eletricidade",
      deepContent: `
A eletrodinâmica estuda as cargas elétricas em movimento ordenado.

1. Corrente Elétrica (i):
É a taxa temporal de passagem de carga líquida através da secção transversal de um condutor:
i = |Δq| / Δt, onde Δq = n · e
(n é o número de elétrons e e = 1,6 · 10⁻¹⁹ C é a carga elementar).
No Sistema Internacional (SI), a corrente é medida em ampères (A = C/s).
Sentido da corrente:
- Sentido real: fluxo de elétrons livres do polo negativo para o polo positivo.
- Sentido convencional (adotado na física e no ENEM): fluxo de cargas positivas hipotéticas do polo positivo para o polo negativo (do maior para o menor potencial).

2. Tensão Elétrica ou Diferença de Potencial (U ou V):
É a energia por unidade de carga fornecida pelo gerador:
U = Trabalho / Carga (medido em volts, V = J/C).
É a 'pressão elétrica' que impulsiona as cargas através do circuito.

3. 1ª Lei de Ohm (Resistência Elétrica):
Um resistor é dito ôhmico se sua resistência R for constante independentemente da tensão aplicada:
U = R · i  ⇒  R = U / i (medido em ohms, Ω = V/A).
Graficamente, o resistor ôhmico apresenta uma reta passando pela origem no plano U × i.

4. 2ª Lei de Ohm (Fatores Geométricos do Condutor):
A resistência de um fio depende do material (resistividade ρ), comprimento (L) e área da secção transversal (A):
R = ρ · (L / A).
- Fio mais longo (L ↑): maior resistência (mais colisões dos elétrons).
- Fio mais grosso / maior bitola (A ↑): menor resistência (mais espaço para os elétrons passarem).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Dimensionamento de Fio e 2ª Lei de Ohm",
          enunciado: "Um chuveiro elétrico de alta potência está instalado no final de uma fiação de cobre de 20 metros de comprimento e secção transversal de 2,5 mm². O eletricista recomenda substituir a fiação antiga por outra de mesmo material e mesmo comprimento, mas com secção de 10,0 mm². Em relação à resistência elétrica do cabo original, o que acontecerá com a resistência elétrica do novo condutor?",
          stepByStep: [
            "Passo 1: Escreva a 2ª Lei de Ohm para cada cabo: R = ρ · (L / A).",
            "Cabo original: R₁ = ρ · L / 2,5.",
            "Cabo novo: R₂ = ρ · L / 10,0.",
            "Passo 2: Calcule a razão entre as resistências:",
            "R₂ / R₁ = (ρ · L / 10,0) / (ρ · L / 2,5) = 2,5 / 10,0 = 1/4 = 0,25.",
            "Conclusão: A resistência elétrica do novo fio será reduzida a 1/4 (25%) do valor original.",
            "Importância prática: Menor resistência nos cabos significa menor perda de energia por Efeito Joule na fiação embutida nas paredes, evitando superaquecimento e incêndios."
          ],
          gabarito: "A resistência elétrica será reduzida a 1/4 (cairá 75%)."
        }
      ],
      realWorldApplications: [
        "Dimensionamento de cabos elétricos residenciais conforme a norma NBR 5410.",
        "Sensores de temperatura tipo termistor (onde a resistência varia com o calor).",
        "Potenciômetros e reostatos usados em dimmers de iluminação e controles de volume de som."
      ],
      commonMisconceptions: [
        "Achar que corrente elétrica é gasta ou consumida ao passar por um resistor (a corrente que entra é rigorosamente IGUAL à que sai; o que se consome é ENERGIA potencial elétrica).",
        "Confundir velocidade dos elétrons livres (que é lenta, milímetros por segundo) com a velocidade do sinal eletromagnético (que é próxima à da luz).",
        "Achar que fios mais finos aguentam mais corrente elétrica (fios finos têm maior resistência e aquecem perigosamente)."
      ],
      quickReviewPoints: [
        "i = Δq / Δt = n·e / Δt (Ampères).",
        "U = R · i (1ª Lei de Ohm).",
        "R = ρ · L / A (2ª Lei de Ohm: comprimento aumenta R, grossura diminui R)."
      ]
    },
    {
      chapterNumber: 2,
      title: "Circuitos em Série e Paralelo: O Segredo das Casas Brasileiras",
      targetSkill: "H17 — Analisar circuitos elétricos aplicados em residências",
      practiceModuleId: "natureza/eletricidade",
      deepContent: `
A forma como os componentes são associados determina como a tensão e a corrente se distribuem.

1. Associação em Série:
Os resistores são ligados sequencialmente no mesmo ramo único.
• Corrente Elétrica (i): É RIGOROSAMENTE A MESMA em todos os resistores: i_total = i₁ = i₂ = i₃.
• Tensão Elétrica (U): Divide-se entre os resistores: U_total = U₁ + U₂ + U₃.
• Resistência Equivalente (R_eq): É a soma direta das resistências:
  R_eq = R₁ + R₂ + R₃ + ...
  (R_eq é sempre maior do que o maior resistor individual).
Desvantagem fatal: Se um componente queimar ou for desligado, o circuito é interrompido por completo (ex: lâmpadas antigas de árvore de Natal).

2. Associação em Paralelo:
Os resistores são ligados entre os mesmos dois nós elétricos (mesmos terminais).
• Tensão Elétrica (U): É RIGOROSAMENTE A MESMA em todos os ramos: U_total = U₁ = U₂ = U₃ (ex: 127V ou 220V em todas as tomadas).
• Corrente Elétrica (i): Divide-se entre os ramos: i_total = i₁ + i₂ + i₃.
  O ramo de menor resistência conduz a MAIOR corrente elétrica!
• Resistência Equivalente (R_eq):
  1 / R_eq = 1 / R₁ + 1 / R₂ + 1 / R₃ + ...
  (R_eq é sempre menor do que o menor resistor individual do circuito).
Para 2 resistores em paralelo: R_eq = (R₁ · R₂) / (R₁ + R₂).
Para 'n' resistores IDÊNTICOS de valor R em paralelo: R_eq = R / n.

3. Por que todas as residências são ligadas em PARALELO?
1ª Razão: Independência operacional — desligar a televisão não desliga a geladeira.
2ª Razão: Tensão padronizada — todos os eletrodomésticos foram projetados para funcionar sob a mesma ddp nominal (127V ou 220V).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Associação de Lâmpadas em Paralelo",
          enunciado: "Em uma residência alimentada por 120 V, estão ligadas em paralelo três lâmpadas incandescentes: L₁ (60 Ω), L₂ (30 Ω) e L₃ (20 Ω). Determine a resistência equivalente do circuito e a corrente total drenada da rede.",
          stepByStep: [
            "Passo 1: Calcule a resistência equivalente em paralelo:",
            "1 / R_eq = 1/60 + 1/30 + 1/20.",
            "MMC entre 60, 30 e 20 é 60.",
            "1 / R_eq = (1 + 2 + 3) / 60 = 6 / 60 = 1 / 10.",
            "Invertendo ambos os lados: R_eq = 10 Ω.",
            "Passo 2: Calcule a corrente elétrica total usando U = R_eq · i_total:",
            "120 = 10 · i_total  ⇒  i_total = 120 / 10 = 12 A.",
            "Verificação por ramos individuais:",
            "i₁ = 120 / 60 = 2 A | i₂ = 120 / 30 = 4 A | i₃ = 120 / 20 = 6 A.",
            "Soma: 2 + 4 + 6 = 12 A (conservação da carga comprovada!)."
          ],
          gabarito: "R_eq = 10 Ω e Corrente Total = 12 A."
        }
      ],
      realWorldApplications: [
        "Instalações elétricas prediais e residenciais.",
        "Faróis automotivos (ligados em paralelo para que a queima de uma lâmpada não apague o outro farol à noite).",
        "Baterias em série (para somar voltagem) vs. em paralelo (para somar capacidade de carga em Ah)."
      ],
      commonMisconceptions: [
        "Achar que ligar mais aparelhos em paralelo aumenta a resistência total (ao contrário: cada aparelho a mais abre um novo caminho, DIMINUINDO a R_eq e AUMENTANDO a corrente total!).",
        "Somar os valores de resistores em paralelo como se fossem em série.",
        "Achar que em paralelo a corrente se divide igualmente quando as resistências são diferentes (ramos com menor R recebem maior corrente)."
      ],
      quickReviewPoints: [
        "Série: mesma corrente (i constante); R_eq = R₁ + R₂.",
        "Paralelo: mesma tensão (U constante); 1/R_eq = 1/R₁ + 1/R₂.",
        "Dois em paralelo: R_eq = (R₁ · R₂) / (R₁ + R₂).",
        "Mais aparelhos em paralelo = Menor R_eq = Maior corrente puxada da rede."
      ]
    },
    {
      chapterNumber: 3,
      title: "Potência Elétrica, Efeito Joule e a Conta de Luz",
      targetSkill: "H17, H18 — Dimensionar consumo e avaliar eficiência energética de aparelhos",
      practiceModuleId: "natureza/eletricidade",
      deepContent: `
Potência elétrica é a rapidez com que a energia elétrica é convertida em outra forma de energia (calor, luz, movimento).

1. Fórmulas Fundamentais de Potência:
• Forma Geral: P = U · i (Potência = Tensão vezes Corrente). Unidade: watt (W = J/s).
• Em resistores ôhmicos (combinando com U = R·i):
  P = R · i²  (útil para circuitos em SÉRIE onde a corrente i é constante).
  P = U² / R  (útil para circuitos em PARALELO e residências onde a tensão U é constante).

2. O Paradoxo do Chuveiro Elétrico (Cai SEMPRE no ENEM!):
Um chuveiro elétrico opera sob tensão residencial fixa (U constante, ex: 220 V).
Pela fórmula P = U² / R:
- Para ESQUENTAR MAIS (posição Inverno): precisamos de MAIOR potência térmica (P ↑).
  Como U é constante, para P subir, a resistência deve DIMINUIR (R ↓)!
  Por isso, no inverno a chave seleciona um resistor MAIS CURTO (menor comprimento L ⇒ menor R ⇒ maior P).
- Para ESQUENTAR MENOS (posição Verão): precisamos de MENOR potência (P ↓).
  A chave seleciona o resistor COMPLETO/MAIS LONGO (maior R ⇒ menor P).

3. Cálculo do Consumo de Energia Elétrica (Conta de Luz):
Energia = Potência · Tempo:
E (kWh) = [Potência (W) · Tempo (horas)] / 1.000.
Custo Total em Reais:
Custo (R$) = E (kWh) · Tarifa cobrada pela concessionária (R$/kWh).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Impacto do Chuveiro Elétrico na Conta Mensal",
          enunciado: "Em uma casa com 4 moradores, cada pessoa toma um banho diário de 15 minutos em um chuveiro elétrico de potência 5.500 W ligado na posição 'Inverno'. Sabendo que o custo do kWh cobrado pela distribuidora é de R$ 0,80 (incluindo tributos), qual é o custo mensal (30 dias) gerado exclusivamente pelos banhos dessa família?",
          stepByStep: [
            "Passo 1: Calcule o tempo diário total de uso do chuveiro:",
            "4 pessoas · 15 minutos = 60 minutos = 1 hora por dia.",
            "Passo 2: Calcule a energia elétrica consumida por dia em kWh:",
            "E_dia = (5.500 W · 1 h) / 1.000 = 5,5 kWh por dia.",
            "Passo 3: Calcule o consumo mensal em 30 dias:",
            "E_mes = 5,5 kWh/dia · 30 dias = 165 kWh no mês.",
            "Passo 4: Calcule o custo em reais:",
            "Custo = 165 kWh · R$ 0,80 = R$ 132,00."
          ],
          gabarito: "R$ 132,00 por mês."
        }
      ],
      realWorldApplications: [
        "Selo Procel de economia de energia e eficiência de refrigeradores e condicionadores de ar.",
        "Dimensionamento de placas solares fotovoltaicas para geração distribuída.",
        "Gerenciamento de consumo em horários de ponta e bandeiras tarifárias (verde, amarela, vermelha)."
      ],
      commonMisconceptions: [
        "Achar que no inverno a resistência do chuveiro é maior para esquentar mais (ERRO GRAVE! A resistência é MENOR para aumentar a corrente e a potência).",
        "Esquecer de converter minutos em horas ao calcular energia em kWh.",
        "Confundir quilowatt (kW, unidade de potência) com quilowatt-hora (kWh, unidade de energia)."
      ],
      quickReviewPoints: [
        "P = U · i = R · i² = U² / R.",
        "Residência (U constante): Menor R = Maior Potência (aquece mais).",
        "Consumo: E(kWh) = [P(W) · Δt(h)] / 1000.",
        "Custo: kWh · Tarifa(R$/kWh)."
      ]
    },
    {
      chapterNumber: 4,
      title: "Segurança Elétrica: Disjuntores, Fio Terra e Choques",
      targetSkill: "H17, H18 — Identificar riscos elétricos e mecanismos de proteção do circuito",
      practiceModuleId: "natureza/eletricidade",
      deepContent: `
A eletricidade é fundamental, mas impõe riscos severos de incêndio e eletrocussão caso não haja dispositivos adequados de proteção.

1. Efeito Fisiológico da Corrente Elétrica (Choque Elétrico):
O dano biológico depende da INTENSIDADE da corrente (i) que atravessa o corpo e do seu trajeto:
- Até 1 mA: limiar de sensação (apenas formigamento).
- De 10 mA a 20 mA: perda de controle muscular (a pessoa 'gruda' no condutor por contração tetânica).
- Acima de 70 mA a 100 mA através do tórax: Fibrilação Ventricular (o coração perde o ritmo coordenado de bombeamento, levando à parada cardíaca em poucos minutos).

2. Disjuntores e Fusíveis (Proteção do Circuito):
São dispositivos de proteção contra SOBRECORRENTE e CURTO-CIRCUITO:
• Fusível: Possui um filamento metálico de baixo ponto de fusão que se funde (queima) por efeito Joule quando a corrente ultrapassa o limite calibrado. É descartável.
• Disjuntor: Dispositivo eletromecânico e termomagnético reutilizável que desarma abrindo o circuito quando detecta sobrecorrente térmica ou magnética.
Regra de ouro de instalação: Disjuntores e fusíveis devem ser instalados SEMPRE em SÉRIE com o condutor FASE (nunca no neutro). Se instalados no neutro, mesmo desarmados, a fase permaneceria energizada no aparelho, expondo o usuário a choque mortal.

3. O Fio Terra e o Condutor de Proteção (PE):
Muitos aparelhos possuem carcaça metálica (máquina de lavar, micro-ondas, computador).
Se um fio fase desencapado tocar a carcaça metálica e o aparelho NÃO estiver aterrado:
- O usuário que tocar na carcaça funcionará como condutor até o chão e levará um choque violento.
Se o aparelho ESTIVER ATERRADO com Fio Terra (fio verde/amarelo conectado a uma haste de cobre fincada no solo):
- O fio terra possui resistência elétrica baixíssima (muito menor que a resistência da pele humana, que é de milhares de ohms).
- A corrente de fuga fluirá prioritariamente pelo fio terra até o solo, criando uma corrente alta que desarma o disjuntor instantaneamente e protege a vida do usuário!
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Dimensionamento Correto de Disjuntor",
          enunciado: "Um circuito residencial exclusivo para tomadas da cozinha (tensão de 127 V) alimenta simultaneamente um forno de micro-ondas (1.270 W), uma cafeteira elétrica (635 W) e uma torradeira (635 W). Um eletricista dispõe de disjuntores comerciais de 10 A, 15 A, 20 A, 25 A e 30 A. Qual é o disjuntor de menor capacidade que deve ser escolhido para permitir o funcionamento simultâneo dos três aparelhos sem desarmes indevidos?",
          stepByStep: [
            "Passo 1: Calcule a potência total requerida quando todos os aparelhos estão ligados simultaneamente:",
            "P_total = 1.270 + 635 + 635 = 2.540 W.",
            "Passo 2: Calcule a corrente total drenada sob tensão U = 127 V usando P = U · i:",
            "2.540 = 127 · i_total  ⇒  i_total = 2.540 / 127 = 20 A.",
            "Passo 3: Analise a escolha do disjuntor:",
            "Um disjuntor de 20 A operaria no limiar exato, desarmando com pequenas oscilações de pico.",
            "O disjuntor padrão imediatamente superior que permite o funcionamento contínuo com margem de segurança é o de 25 A (desde que a fiação suporte 25 A com segurança)."
          ],
          gabarito: "Disjuntor de 25 A."
        }
      ],
      realWorldApplications: [
        "Dispositivos DR (Diferencial Residual) que salvam vidas ao detectar fugas de corrente de apenas 30 mA.",
        "Tomadas do padrão brasileiro de 3 pinos (fase, neutro e pino central de terra).",
        "Para-raios prediais (Sistema de Proteção contra Descargas Atmosféricas - SPDA)."
      ],
      commonMisconceptions: [
        "Achar que o fio terra serve para 'economizar energia' (sua única função é SEGURANÇA humana e proteção contra queima de circuitos).",
        "Instalar disjuntor no fio neutro em vez de instalar na fase.",
        "Aumentar o valor do disjuntor sem trocar a fiação fina (se a fiação for fina e o disjuntor for forte demais, o fio derrete na parede e o disjuntor não desarma, provocando incêndio)."
      ],
      quickReviewPoints: [
        "Choque elétrico: o que mata é a intensidade da corrente (i) pelo coração.",
        "Disjuntores e fusíveis: instalados sempre em SÉRIE com a FASE.",
        "Fio terra: oferece caminho de resistência quase nula para desviar a corrente de carcaças metálicas ao solo.",
        "Disjuntor protege os fios contra sobreaquecimento; DR protege as pessoas contra choques."
      ]
    }
  ]
};
