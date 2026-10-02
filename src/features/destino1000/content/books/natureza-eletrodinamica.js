/**
 * LIVRO DIDÁTICO DIGITAL: Eletrodinâmica, Circuitos e Bioeletricidade Médica
 * Área: Ciências da Natureza e suas Tecnologias (Física)
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 2.0.0 (Edição de Alta Densidade Didática 2026 - Padrão Medicina)
 * Regra Estrita: ZERO termos de deslocamento turístico.
 * Foco Pedagógico: Leis de Ohm, topologia de circuitos, efeito Joule, dimensionamento energético,
 * dispositivos DR e aterramento, biopotenciais de membrana e física de desfibriladores cardíacos.
 */

export const LIVRO_NATUREZA_ELETRODINAMICA = {
  id: "livro-natureza-eletrodinamica",
  area: "natureza",
  title: "Eletrodinâmica, Circuitos e Bioeletricidade Médica",
  subtitle: "Das leis de Ohm e redes elétricas domiciliares à fisiopatologia do choque e tecnologia de desfibrilação",
  estimatedReadingTimeMinutes: 95,
  badge: "Livro Essencial • Física Médica & Eletrodinâmica",
  coverColor: "from-amber-950 to-yellow-900",
  prerequisites: [
    "Conceitos de carga elementar e conservação de energia",
    "Trabalho mecânico, potência e calorimetria básica",
    "Álgebra para resolução de sistemas lineares e frações equivalentes"
  ],
  learningObjectives: [
    "Diferenciar corrente contínua e alternada e calcular resistências elétricas pelas 1ª e 2ª Leis de Ohm",
    "Analisar associações de resistores em série, paralelo e mistas aplicando conservação de carga e energia",
    "Calcular potência elétrica, energia em quilowatt-hora (kWh) e dimensionar a potência de chuveiros e aquecedores",
    "Compreender a física da proteção elétrica: disjuntores termomagnéticos, aterramento e dispositivos DR",
    "Modelar a membrana celular como capacitor biológico e calcular a energia de descarga de desfibriladores cardíacos"
  ],
  chapters: [
    {
      id: "cap-nat-eletro-01",
      chapterNumber: 1,
      title: "Corrente Elétrica, Tensão, Resistores e as Duas Leis de Ohm",
      subtitle: "Do movimento microscópico de elétrons ao dimensionamento geométrico de condutores",
      estimatedMinutes: 20,
      learningObjectives: [
        "Compreender o conceito físico de corrente elétrica e distinguir o sentido real do sentido convencional",
        "Aplicar a Primeira Lei de Ohm e caracterizar o comportamento de condutores ôhmicos e não ôhmicos",
        "Deduzir a Segunda Lei de Ohm e calcular variações de resistência com comprimento, bitola e resistividade"
      ],
      targetSkills: [
        "H17 - Reconhecer os fatores que determinam a corrente e a resistência elétrica em condutores",
        "H18 - Dimensionar condutores elétricos adequados a diferentes aplicações tecnológicas"
      ],
      deepContent: `
# 1. A Natureza da Corrente Elétrica e a Diferença de Potencial

A **corrente elétrica** ($i$) é o movimento ordenado de portadores de carga elétrica impulsionado pela presença de um campo elétrico no interior de um condutor.

A intensidade média de corrente expressa a taxa temporal de fluxo de carga líquida que atravessa a secção transversal do condutor:

$$ i = \\frac{|\\Delta q|}{\\Delta t} = \\frac{n \\cdot e}{\\Delta t} $$

* $\\Delta q$: Carga total transportada (em Coulombs, $\\text{C}$).
* $n$: Número de portadores de carga (elétrons livres nos metais).
* $e = 1,6 \\times 10^{-19}\\text{ C}$: Carga elétrica elementar.
* Unidade no Sistema Internacional: **Ampère** ($1\\text{ A} = 1\\text{ C/s}$).

> [!NOTE]
> **Sentido Real versus Sentido Convencional:**
> * **Sentido Real (Físico):** Em condutores metálicos, apenas os elétrons livres se deslocam, movendo-se do polo de menor potencial (negativo) para o de maior potencial (positivo).
> * **Sentido Convencional (Adotado na Física e no ENEM):** Definido historicamente antes da descoberta do elétron como o sentido em que cargas positivas hipotéticas se moveriam — **do maior potencial (positivo) para o menor potencial (negativo)**. Toda a análise de circuitos e regras de malha do ENEM utiliza o sentido convencional.

---

# 2. A Primeira Lei de Ohm e a Resistência Elétrica

A **diferença de potencial elétrico** (tensão ou ddp, $U$) representa a energia potencial fornecida pelo gerador por unidade de carga ($1\\text{ Volt} = 1\\text{ J/C}$). Ao atravessar a rede cristalina do metal, os elétrons colidem com os núcleos atômicos vibrantes, sofrendo oposição ao seu movimento. Essa oposição é quantificada pela **resistência elétrica** ($R$):

$$ U = R \\cdot i \\qquad \\Longrightarrow \\qquad R = \\frac{U}{i} $$

* A unidade no SI é o **Ohm** ($1\\,\\Omega = 1\\text{ V/A}$).
* **Condutor Ôhmico:** É aquele cuja resistência $R$ permanece estritamente constante para uma dada temperatura, independentemente da tensão aplicada. Seu gráfico $U \\times i$ é uma **reta que passa pela origem**, cuja inclinação representa a resistência: $\\tan\\theta = R$.
* **Condutor Não-Ôhmico:** A resistência varia com a tensão ou a corrente (ex.: filamento de tungstênio de lâmpadas incandescentes, cuja resistência cresce drasticamente quando o filamento se aquece).

---

# 3. A Segunda Lei de Ohm e a Geometria dos Condutores

A resistência de um fio condutor cilíndrico homogêneo depende exclusivamente de sua constituição material e de sua geometria:

$$ R = \\rho \\cdot \\frac{L}{A} $$

* $\\rho$ (rô): **Resistividade elétrica** do material (em $\\Omega \\cdot \\text{m}$), propriedade intrínseca da substância que mede sua oposição intrínseca ao fluxo de elétrons. O cobre e a prata possuem baixíssima resistividade; o tungstênio e as ligas de níquel-cromo (nicromo) têm alta resistividade.
* $L$: **Comprimento** do condutor. Quanto mais longo o condutor ($L \\uparrow$), maior o número de colisões e **maior a resistência** ($R \\uparrow$).
* $A$: **Área da secção transversal** (bitola/grossura). Quanto mais grosso o fio ($A \\uparrow$), maior o espaço disponível para o fluxo de cargas e **menor a resistência** ($R \\downarrow$).

> [!CAUTION]
> **A Armadilha do Raio ou Diâmetro ao Quadrado:**
> Como a secção transversal de um fio condutor é circular, sua área é $A = \\pi \\cdot r^2 = \\pi \\cdot \\left(\\frac{D}{2}\\right)^2$.
> Se o diâmetro ou raio de um fio for **duplicado**, sua área quadruplica ($A \\times 4$), o que significa que sua resistência elétrica será **reduzida a um quarto** ($R / 4$)!
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 1: Substituição de Condutores e 2ª Lei de Ohm",
          enunciado: "Um equipamento hospitalar de hemodiálise opera a 30 metros do quadro elétrico através de condutores de cobre de 2,0 mm² de área de secção. Para reduzir quedas de tensão na linha, a equipe de engenharia clínica decide substituir os cabos por novos fios de cobre de mesmo comprimento, porém com 8,0 mm² de secção. Em relação à resistência elétrica dos cabos originais, qual será a nova resistência dos cabos instalados?",
          stepByStep: [
            "Passo 1: Escrever a expressão da Segunda Lei de Ohm para cada cabo:",
            "R₁ = ρ · L / A₁ = ρ · L / 2,0.",
            "R₂ = ρ · L / A₂ = ρ · L / 8,0.",
            "Passo 2: Calcular a razão entre a nova resistência e a original:",
            "R₂ / R₁ = (ρ · L / 8,0) / (ρ · L / 2,0) = 2,0 / 8,0 = 1/4 = 0,25.",
            "Conclusão: A resistência elétrica dos novos cabos será exatamente 25% (um quarto) da original, o que reduz em 75% as perdas térmicas por efeito Joule na tubulação."
          ],
          gabarito: "A nova resistência é igual a 1/4 (25%) da resistência original.",
          comentarioTRI: "Item clássico de aplicação direta da 2ª Lei de Ohm no ENEM, com alta taxa de acerto entre os candidatos bem preparados."
        }
      ],
      activeRecallChecklist: [
        "Qual é o sentido convencional adotado para a corrente elétrica em circuitos?",
        "O que caracteriza formalmente um resistor como ôhmico?",
        "O que acontece com a resistência elétrica de um condutor cilíndrico quando seu raio é triplicado mantendo o comprimento?"
      ]
    },
    {
      id: "cap-nat-eletro-02",
      chapterNumber: 2,
      title: "Topologia de Circuitos Elétricos: Série, Paralelo e Leis de Kirchhoff",
      subtitle: "Por que as redes residenciais são em paralelo e como analisar circuitos complexos",
      estimatedMinutes: 20,
      learningObjectives: [
        "Calcular resistências equivalentes em associações em série, paralelo e mistas",
        "Explicar por que circuitos residenciais e hospitalares são operados em paralelo",
        "Aplicar a Lei dos Nós e a Lei das Malhas de Kirchhoff para circuitos com múltiplos ramos"
      ],
      targetSkills: [
        "H17 - Analisar o funcionamento de circuitos elétricos cotidianos",
        "H18 - Utilizar leis de conservação de carga e energia na resolução de circuitos"
      ],
      deepContent: `
# 1. Associação de Resistores em Série: O Caminho Único

Em uma associação em série, os resistores são dispostos sequencialmente em um **ramo único**, de modo que as cargas não possuem trajetos alternativos:

$$ i_{\\text{total}} = i_1 = i_2 = i_3 = \\dots $$

* **Tensão Total (Conservação da Energia):** A tensão da fonte é a soma das quedas de potencial em cada resistor:
  $$ U_{\\text{total}} = U_1 + U_2 + U_3 + \\dots $$
* **Resistência Equivalente ($R_{\\text{eq}}$):**
  $$ R_{\\text{eq}} = R_1 + R_2 + R_3 + \\dots $$
  * A resistência equivalente em série é **sempre estritamente maior** do que o maior resistor individual.
  * *Ponto vulnerável:* Se um único elemento queimar ou for desconectado, o circuito é completamente interrompido e todos os demais aparelhos apagam.

---

# 2. Associação de Resistores em Paralelo: A Independência dos Ramos

Na associação em paralelo, todos os resistores estão conectados aos **mesmos dois nós elétricos**. Consequentemente, todos os ramos estão submetidos à **mesma diferença de potencial**:

$$ U_{\\text{total}} = U_1 = U_2 = U_3 = \\dots $$

* **Corrente Total (Conservação da Carga / Lei dos Nós):** A corrente total fornecida pela rede é a soma das correntes que percorrem cada ramo:
  $$ i_{\\text{total}} = i_1 + i_2 + i_3 + \\dots $$
* **Resistência Equivalente ($R_{\\text{eq}}$):**
  $$ \\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\dots $$
  * A resistência equivalente em paralelo é **sempre estritamente menor** do que o menor resistor individual do circuito!
  * **Fórmula para dois resistores em paralelo:**
    $$ R_{\\text{eq}} = \\frac{R_1 \\cdot R_2}{R_1 + R_2} $$
  * **Fórmula para $n$ resistores idênticos de valor $R$ em paralelo:**
    $$ R_{\\text{eq}} = \\frac{R}{n} $$

> [!IMPORTANT]
> **Por que Toda Rede Predial e Hospitalar é Ligada em Paralelo?**
> 1. **Independência Operacional:** Desligar uma lâmpada ou um monitor cardíaco não interrompe o funcionamento dos outros aparelhos conectados às demais tomadas.
> 2. **Tensão Padronizada:** Todos os aparelhos recebem rigorosamente a mesma tensão nominal especificada pelo fabricante ($127\\text{ V}$ ou $220\\text{ V}$).

---

# 3. As Leis de Gustav Kirchhoff

Para circuitos com múltiplas fontes ou malhas entrelaçadas, aplicam-se duas leis universais:

### 1ª Lei de Kirchhoff (Lei dos Nós — Conservação da Carga):
A soma de todas as correntes que entram em um nó é igual à soma das correntes que saem desse nó:
$$ \\sum i_{\\text{entra}} = \\sum i_{\\text{sai}} $$

### 2ª Lei de Kirchhoff (Lei das Malhas — Conservação da Energia):
Ao percorrer qualquer malha fechada de um circuito em um sentido definido, a soma algébrica de todas as variações de potencial elétrico é nula:
$$ \\sum \\Delta U_{\\text{malha}} = 0 $$
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 2: Associação Mista de Lâmpadas no ENEM",
          enunciado: "Um circuito alimentado por uma bateria ideal de 24 V possui três resistores: R₁ = 12 Ω em série com um bloco em paralelo formado por R₂ = 20 Ω e R₃ = 20 Ω. Determine a corrente total que sai da bateria e a diferença de potencial sobre o resistor R₁.",
          stepByStep: [
            "Passo 1: Calcular a resistência equivalente do bloco em paralelo (R₂ // R₃):",
            "Como são dois resistores idênticos de 20 Ω:",
            "R_par = 20 / 2 = 10 Ω.",
            "Passo 2: Calcular a resistência equivalente total do circuito (R₁ em série com R_par):",
            "R_eq = R₁ + R_par = 12 + 10 = 22 Ω.",
            "Passo 3: Calcular a corrente total do circuito:",
            "U = R_eq · i_total  ⇒  24 = 22 · i_total  ⇒  i_total = 24 / 22 = 12 / 11 ≈ 1,09 A.",
            "Passo 4: Calcular a queda de potencial sobre R₁:",
            "U₁ = R₁ · i_total = 12 · (12 / 11) = 144 / 11 ≈ 13,09 V."
          ],
          gabarito: "i_total = 12/11 A e U₁ = 144/11 V.",
          comentarioTRI: "Compreender a redução progressiva de blocos paralelos para séries é o método mais seguro no ENEM."
        }
      ],
      activeRecallChecklist: [
        "Qual grandeza permanece constante em todos os elementos de uma associação em série? E em paralelo?",
        "O que acontece com a resistência equivalente total de uma casa quando mais aparelhos são ligados simultaneamente em tomadas paralelas?",
        "Qual princípio de conservação da física sustenta a Primeira Lei de Kirchhoff?"
      ]
    },
    {
      id: "cap-nat-eletro-03",
      chapterNumber: 3,
      title: "Potência Elétrica, Efeito Joule e Gestão do Consumo Energético",
      subtitle: "A termodinâmica dos circuitos, o paradoxo do chuveiro elétrico e o cálculo da conta de luz",
      estimatedMinutes: 20,
      learningObjectives: [
        "Deduzir e aplicar as três formulações clássicas da potência elétrica em resistores",
        "Resolver o clássico paradoxo da chave 'inverno/verão' de chuveiros elétricos sem errar o raciocínio",
        "Calcular consumo de energia em quilowatt-hora (kWh) e estimar custos financeiros mensais"
      ],
      targetSkills: [
        "H17 - Relacionar potência, corrente e tensão em aparelhos eletrodomésticos",
        "H18 - Avaliar a eficiência energética e o impacto ambiental de equipamentos de aquecimento"
      ],
      deepContent: `
# 1. As Três Formulações da Potência Elétrica

A **potência elétrica** ($P$) quantifica a rapidez com que a energia elétrica é convertida em outra forma de energia (calor, trabalho mecânico, ondas eletromagnéticas). No SI, a potência é medida em **Watts** ($1\\text{ W} = 1\\text{ J/s}$).

### 1. Forma Geral Universal (Válida para qualquer aparelho):
$$ P = U \\cdot i $$

### 2. Forma Específica para Resistores (Efeito Joule):
Combinando $P = U \\cdot i$ com a 1ª Lei de Ohm ($U = R \\cdot i$ e $i = \\frac{U}{R}$), obtemos duas equações vitais:

$$ P = R \\cdot i^2 \\qquad \\text{(Ideal para circuitos em SÉRIE, onde } i \\text{ é constante)} $$

$$ P = \\frac{U^2}{R} \\qquad \\text{(Ideal para instalações residenciais em PARALELO, onde } U \\text{ é constante)} $$

---

# 2. O Paradoxo do Chuveiro Elétrico (A Questão Campeã do ENEM)

Quase todas as edições do ENEM trazem uma questão sobre a chave seletora de chuveiros ou aquecedores elétricos. Como o chuveiro está conectado a uma tomada residencial cuja **tensão é fixa** ($U = 220\\text{ V}$ ou $127\\text{ V}$), devemos usar obrigatoriamente a equação:

$$ P = \\frac{U^2}{R} $$

| Posição da Chave | Comprimento do Fio | Resistência Elétrica | Potência Térmica Dissipada |
| :--- | :--- | :--- | :--- |
| **Inverno (Esquenta mais)** | Fio mais curto ($L$ menor ↓) | Resistência menor ($R$ menor ↓) | Potência maior ($P$ maior ↑ = $U^2/R$) |
| **Verão (Esquenta menos)** | Fio mais longo ($L$ maior ↑) | Resistência maior ($R$ maior ↑) | Potência menor ($P$ menor ↓ = $U^2/R$) |

> [!CAUTION]
> **A Armadilha do Senso Comum:**
> O senso comum imagina: *"Para esquentar mais no inverno, o chuveiro deve ter mais resistência"*. **FALSO!** Quanto menor a resistência elétrica, maior será a corrente puxada da rede e maior será a potência térmica dissipada por efeito Joule.

---

# 3. O Cálculo de Consumo na Conta de Luz: O Quilowatt-Hora (kWh)

A energia elétrica consumida é o produto da potência pelo tempo de utilização:

$$ E = P \\cdot \\Delta t $$

Como o Joule ($1\\text{ J} = 1\\text{ W} \\cdot 1\\text{ s}$) é uma unidade muito diminuta para fins comerciais, as concessionárias utilizam o **quilowatt-hora** ($\\text{kWh}$):

$$ 1\\text{ kWh} = 1.000\\text{ W} \\times 3.600\\text{ s} = 3,6 \\times 10^6\\text{ Joules} = 3,6\\text{ MJ} $$

### O Algoritmo de Cálculo do Custo Mensal:
1. Calcule a energia em $\\text{kWh}$:
   $$ E\\,(\\text{kWh}) = \\frac{\\text{Potência}\\,(\\text{W}) \\times \\text{Horas/dia} \\times \\text{Dias}}{1.000} $$
2. Multiplique pelo valor da tarifa (em $\\text{R\\$/kWh}$):
   $$ \\text{Custo Total} = E\\,(\\text{kWh}) \\times \\text{Tarifa} $$
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 3: Cálculo do Consumo de Ar-Condicionado em UTI",
          enunciado: "Em uma unidade de terapia intensiva pediátrica, um sistema de climatização hospitalar com potência nominal de 3.500 W opera ininterruptamente 24 horas por dia durante um mês de 30 dias. Se a tarifa de energia local é de R$ 0,70 por kWh (já inclusos impostos), determine o consumo mensal de energia em kWh e o custo financeiro gerado pelo equipamento.",
          stepByStep: [
            "Passo 1: Calcular o tempo total de operação no mês:",
            "Δt = 24 horas/dia · 30 dias = 720 horas.",
            "Passo 2: Calcular a energia em kWh:",
            "E = (3.500 W · 720 h) / 1.000",
            "E = 3,5 kW · 720 h = 2.520 kWh.",
            "Passo 3: Calcular o custo financeiro total:",
            "Custo = 2.520 kWh · R$ 0,70 = R$ 1.764,00."
          ],
          gabarito: "2.520 kWh consumidos e custo de R$ 1.764,00.",
          comentarioTRI: "Itens de dimensionamento de consumo exigem atenção na conversão de Watts para quilowatts dividindo por 1.000."
        }
      ],
      activeRecallChecklist: [
        "Qual fórmula de potência é a mais indicada para analisar redes residenciais e por quê?",
        "Para que um chuveiro esquente mais a água, o que a chave seletora faz com o comprimento da resistência?",
        "Quantos Joules correspondem exatamente a 1 quilowatt-hora (kWh)?"
      ]
    },
    {
      id: "cap-nat-eletro-04",
      chapterNumber: 4,
      title: "Segurança Elétrica: Disjuntores, Fio Terra e Dispositivos DR",
      subtitle: "Fisiopatologia do choque elétrico, mecanismos de corte por sobrecorrente e proteção à vida humana",
      estimatedMinutes: 19,
      learningObjectives: [
        "Descrever as consequências fisiológicas da corrente elétrica no corpo humano de acordo com a intensidade",
        "Diferenciar o papel de fusíveis e disjuntores da função desempenhada pelo Fio Terra e pelo dispositivo DR",
        "Explicar por que interruptores e disjuntores devem ser instalados obrigatoriamente no condutor fase"
      ],
      targetSkills: [
        "H17 - Avaliar os riscos elétricos associados ao uso de aparelhos e propor medidas preventivas",
        "H18 - Analisar o princípio de funcionamento de dispositivos de proteção de circuitos"
      ],
      deepContent: `
# 1. A Fisiopatologia do Choque Elétrico

O choque elétrico ocorre quando o corpo humano passa a fazer parte de um circuito condutor fechado, estabelecendo uma corrente elétrica entre dois pontos de contato.

> [!IMPORTANT]
> **O que Determina a Gravidade do Choque?**
> Ao contrário do mito popular de que "o que mata é a voltagem", a gravidade biológica do choque depende primariamente da **intensidade da corrente ($i$)**, do **trajeto pelo corpo** (se cruza o miocárdio torácico) e do **tempo de exposição**:

| Corrente Elétrica ($i$) | Efeito Fisiológico no Corpo Humano |
| :--- | :--- |
| **Até $1\\text{ mA}$** | Limiar de percepção sensorial (apenas formigamento sutil). |
| **$1\\text{ mA}$ a $10\\text{ mA}$** | Contração muscular reflexa involuntária (choque perceptível). |
| **$10\\text{ mA}$ a $20\\text{ mA}$** | **Limiar de Largada (Tetanização Muscular):** Os músculos flexores contraem-se involuntariamente impedindo a pessoa de soltar o condutor energizado ("grudar"). |
| **$20\\text{ mA}$ a $75\\text{ mA}$** | Paralisia dos músculos respiratórios (asfixia e parada respiratória aguda). |
| **$75\\text{ mA}$ a $100\\text{ mA}$** | **Fibrilação Ventricular:** Descoordenação elétrica do miocárdio, levando à parada cardíaca e morte em poucos minutos sem desfibrilação precoce. |

---

# 2. Disjuntores e Fusíveis: A Proteção dos Fios contra Sobrecorrente

Fusíveis e disjuntores são dispositivos de proteção instalados **em série com o condutor Fase** para proteger a **fiação do imóvel** contra aquecimento excessivo e incêndios:
* **Fusível:** Contém um elo metálico com baixo ponto de fusão que se funde (queima) por efeito Joule quando a corrente ultrapassa a corrente nominal de projeto. É descartável.
* **Disjuntor Termomagnético:** Dispositivo reutilizável com dupla atuação:
  * *Disparador Térmico (Bimetal):* Atua em sobrecargas lentas e contínuas (ex.: muitos aparelhos ligados ao mesmo tempo).
  * *Disparador Magnético (Bobina):* Atua instantaneamente em **curto-circuitos** (correntes de milhares de ampères).

> [!CAUTION]
> **Por que o Disjuntor DEVE ser Instalado na FASE (e NUNCA no Neutro)?**
> Se o disjuntor for colocado no condutor neutro, quando ele desarmar, a Fase continuará energizada dentro do equipamento! Um usuário que toque na carcaça metálica enquanto pisa no solo sofrerá choque fatal mesmo com o disjuntor desarmado.

---

# 3. O Fio Terra e o Dispositivo DR (Diferencial Residual)

* **Fio Terra (Condutor de Proteção - PE):** Fio de baixa resistência conectado a hastes metálicas no solo. Conecta-se às carcaças metálicas de eletrodomésticos. Se houver uma falha interna de isolamento, a corrente de fuga é drenada para a terra em vez de atravessar o corpo do usuário.
* **Dispositivo DR (Diferencial Residual):** É o verdadeiro salvador de vidas. Ele mede continuamente se a corrente que entra pela Fase é rigorosamente igual à corrente que retorna pelo Neutro ($i_{\\text{Fase}} = i_{\\text{Neutro}}$). Se houver uma diferença mínima de **$30\\text{ mA}$** (que indica fuga através de uma pessoa levando choque), o DR desarma em milissegundos, interrompendo o choque antes da fibrilação ventricular.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 4: Dimensionamento Seguro de Disjuntor Residencial",
          enunciado: "Um circuito de tomadas exclusivas da lavanderia (tensão U = 127 V) alimenta simultaneamente uma lavadora de roupas (1.000 W) e uma secadora de roupas (1.540 W). Os cabos elétricos instalados possuem bitola de 4,0 mm², suportando com segurança uma corrente máxima contínua de 28 A. Qual disjuntor comercial padronizado (10 A, 15 A, 20 A, 25 A ou 30 A) deve ser selecionado para proteger os fios e permitir o funcionamento simultâneo?",
          stepByStep: [
            "Passo 1: Calcular a potência total simultânea:",
            "P_total = 1.000 + 1.540 = 2.540 W.",
            "Passo 2: Calcular a corrente de operação do circuito usando P = U · i:",
            "2.540 = 127 · i_op  ⇒  i_op = 2.540 / 127 = 20 A.",
            "Passo 3: Analisar a faixa de proteção segura do disjuntor:",
            "O disjuntor deve ser maior que a corrente operacional (i_op > 20 A) para não desarmar indevidamente, e menor ou igual à capacidade dos cabos (i_fio ≤ 28 A) para protegê-los de incêndio:",
            "20 A < i_disjuntor ≤ 28 A.",
            "O valor padronizado comercial que atende perfeitamente ao intervalo é o disjuntor de 25 A."
          ],
          gabarito: "Disjuntor de 25 A.",
          comentarioTRI: "Se o candidato escolhesse 30 A, os fios poderiam queimar antes do disjuntor desarmar; se escolhesse 20 A, desarmaria a qualquer pico momentâneo."
        }
      ],
      activeRecallChecklist: [
        "Qual é a faixa de corrente elétrica que provoca a tetanização muscular e impede a vítima de soltar o condutor?",
        "Qual é a diferença funcional primordial entre um disjuntor comum e um dispositivo Diferencial Residual (DR)?",
        "Por que nunca se deve substituir um disjuntor que desarma por outro de maior corrente sem trocar a bitola da fiação?"
      ]
    },
    {
      id: "cap-nat-eletro-05",
      chapterNumber: 5,
      title: "Bioeletricidade Celular, Capacitância e Tecnologia de Desfibrilação",
      subtitle: "A membrana celular como capacitor biológico e a física da ressuscitação cardiopulmonar no ENEM",
      estimatedMinutes: 20,
      learningObjectives: [
        "Modelar a bicamada lipídica da membrana plasmática celular como um capacitor elétrico de placas paralelas",
        "Calcular a energia eletrostática armazenada em capacitores e sua aplicação em desfibriladores cardíacos",
        "Compreender a física da prevenção de macrochoques e microchoques em ambientes de terapia intensiva"
      ],
      targetSkills: [
        "H17 - Analisar fenômenos bioelétricos com base nos princípios da física eletrostática e eletrodinâmica",
        "H18 - Compreender os princípios físicos de equipamentos eletromédicos de suporte à vida"
      ],
      deepContent: `
# 1. A Membrana Celular como um Capacitor Biológico

Nas células excitáveis humanas (neurônios e cardiomiócitos), a bicamada lipídica atua como um dielétrico isolante de espessura nanométrica ($d \\approx 7\\text{ nm}$), separando duas soluções condutoras ricas em íons: o citoplasma intracelular e o fluido intersticial extracelular.

Essa configuração física constitui um **capacitor de placas paralelas**:

$$ C = \\frac{\\varepsilon \\cdot A}{d} $$

* Como a espessura $d$ da membrana é extremamente fina ($10^{-9}\\text{ m}$), a capacitância por unidade de área é extraordinariamente alta (cerca de $1\\,\\mu\\text{F/cm}^2$).
* O potencial de repouso da membrana (mantido ativamente pela bomba de $\\text{Na}^+/\\text{K}^+$-ATPase) é de aproximadamente $V_{\\text{repouso}} \\approx -70\\text{ mV}$.
* O campo elétrico através dessa membrana microscópica atinge intensidades monumentais:
  $$ E = \\frac{|V|}{d} = \\frac{70 \\times 10^{-3}\\text{ V}}{7 \\times 10^{-9}\\text{ m}} = 10^7\\text{ V/m!} $$
  (Uma intensidade de campo comparável à que provoca descargas elétricas na atmosfera!).

---

# 2. Desfibriladores Cardíacos: A Física da Descarga Capacitiva

Em episódios de fibrilação ventricular, as células do miocárdio perdem a sincronicidade mecânica, tremulando caoticamente sem conseguir ejetar sangue. O desfibrilador elétrico aplica um choque de alta energia para **despolarizar simultaneamente todas as células cardíacas**, permitindo que o nó sinoatrial reassuma o comando do ritmo sinusal normal.

### A Energia Eletrostática Armazenada no Capacitor ($E_{\\text{cap}}$):
O desfibrilador carrega um banco de capacitores sob alta tensão ($U \\approx 2.000\\text{ a } 5.000\\text{ V}$) e descarrega essa energia no tórax do paciente em uma fração de milissegundos:

$$ E = \\frac{C \\cdot U^2}{2} = \\frac{Q \\cdot U}{2} = \\frac{Q^2}{2C} $$

* $E$: Energia elétrica armazenada (medida em **Joules**, $\\text{J}$). As diretrizes de ressuscitação cardíaca utilizam choques de $150\\text{ a } 360\\text{ J}$.
* $C$: Capacitância do equipamento (medida em **Farads**, $\\text{F}$).
* $U$: Diferença de potencial de carga aplicada às pás metálicas.

---

# 3. Macrochoque versus Microchoque em Pacientes Hospitalizados

Na medicina intensiva, a física da segurança elétrica diferencia dois cenários clínicos:

* **Macrochoque:** Choque com corrente que penetra através da pele íntegra. Como a pele seca apresenta alta resistência ($10.000\\text{ a } 100.000\\,\\Omega$), são necessárias correntes da ordem de dezenas de miliampères para gerar fibrilação.
* **Microchoque:** Choque em pacientes com cateteres intracardíacos, marca-passos invasivos ou eletrodos em contato direto com o miocárdio. Nesse caso, a resistência da pele é contornada! Uma corrente diminuta de apenas **$10\\,\\mu\\text{A}$ ($0,01\\text{ mA}$)** aplicada diretamente no coração é suficiente para induzir fibrilação ventricular fatal. Por isso, centros cirúrgicos utilizam transformadores de isolamento galvânico (sistemas IT médico).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 5: Cálculo da Energia de Choque de um Desfibrilador",
          enunciado: "Um desfibrilador bifásico utilizado em parada cardiorrespiratória possui um capacitor de capacitância C = 40 μF. Durante a preparação para o choque, o circuito interno carrega o capacitor até uma diferença de potencial de 3.000 V. Determine a energia eletrostática armazenada no capacitor pronta para ser liberada no tórax do paciente.",
          stepByStep: [
            "Passo 1: Identificar os parâmetros do capacitor:",
            "C = 40 μF = 40 · 10⁻⁶ F.",
            "U = 3.000 V = 3 · 10³ V.",
            "Passo 2: Aplicar a equação da energia eletrostática armazenada:",
            "E = (C · U²) / 2",
            "Passo 3: Efetuar os cálculos algébricos:",
            "U² = (3 · 10³)² = 9 · 10⁶ V².",
            "E = (40 · 10⁻⁶ · 9 · 10⁶) / 2",
            "Como 10⁻⁶ · 10⁶ = 1:",
            "E = (40 · 9) / 2 = 360 / 2 = 180 Joules."
          ],
          gabarito: "180 Joules.",
          comentarioTRI: "Questão clássica de biofísica aplicada que o ENEM adora formular relacionando capacitores com socorro médico."
        }
      ],
      activeRecallChecklist: [
        "Qual estrutura da célula eucariótica se comporta fisicamente como o dielétrico de um capacitor de placas paralelas?",
        "Qual é a fórmula da energia eletrostática armazenada em um capacitor carregado?",
        "Por que uma corrente de apenas 10 microampères pode ser letal em um microchoque cardíaco?"
      ]
    }
  ]
};
