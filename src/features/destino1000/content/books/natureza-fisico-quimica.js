/**
 * LIVRO DIDÁTICO DIGITAL: Físico-Química: Energia, Equilíbrio e Transformações da Matéria
 * Área: Ciências da Natureza e suas Tecnologias (Química)
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_NATUREZA_FISICO_QUIMICA = {
  id: "livro-natureza-fisico-quimica",
  area: "natureza",
  title: "Físico-Química: Energia, Equilíbrio e Eletroquímica",
  subtitle: "Termodinâmica química, cinética de reações, equilíbrio dinâmico e sistemas eletroquímicos",
  estimatedReadingTimeMinutes: 65,
  badge: "Livro Essencial • Físico-Química",
  coverColor: "from-cyan-950 to-blue-900",
  prerequisites: [
    "Noções básicas de tabela periódica, ligações químicas e fórmulas moleculares",
    "Compreensão de cálculos estequiométricos fundamentais e conversão de unidades (mol, grama, litro)"
  ],
  learningObjectives: [
    "Dominar o cálculo de entalpia por Lei de Hess, calor de formação e energia de ligação",
    "Compreender a cinética química, energia de ativação, teoria das colisões e ação de catalisadores",
    "Analisar o equilíbrio químico homogêneo e heterogêneo pelo Princípio de Le Chatelier",
    "Dominar cálculos de pH, pOH e equilíbrio iônico da água e soluções tampão",
    "Diferenciar células galvânicas (pilhas espontâneas) de células eletrolíticas (eletrólise forçada)"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "Termoquímica: Calor, Entalpia e Espontaneidade de Reações",
      targetSkill: "H24, H25 — Analisar trocas energéticas em reações químicas e aplicações industriais",
      practiceModuleId: "natureza/termoquimica",
      deepContent: `
A Termoquímica estuda a transferência de calor associada às reações químicas e transformações de estado físico da matéria.

1. Classificação Termoquímica:
• Processos Exotérmicos: Liberam calor para a vizinhança. A entalpia final dos produtos é menor do que a entalpia inicial dos reagentes (ΔH < 0). A temperatura do sistema ou do meio ao redor aumenta (ex: queima de combustíveis, respiração celular, condensação da água).
• Processos Endotérmicos: Absorvem calor da vizinhança. A entalpia dos produtos é maior que a dos reagentes (ΔH > 0). Ocorrem com resfriamento do meio circundante (ex: fotossíntese vegetal, fusão do gelo, ebulição da água).

2. Métodos de Cálculo da Variação de Entalpia (ΔH):
Existem três métodos principais cobrados no ENEM:
1. Pela Entalpia Padrão de Formação (ΔH°f):
   - Entalpia de substância simples no estado padrão e forma alotrópica mais estável é por convenção ZERO (ex: O₂ gás = 0, C grafite = 0; mas O₃ ozônio ≠ 0, C diamante ≠ 0).
   - Fórmula: ΔH = Σ(ΔH°f produtos) - Σ(ΔH°f reagentes).
2. Pela Lei de Hess (Estado Inicial e Final):
   - A variação de entalpia depende exclusivamente do estado inicial e do estado final, independentemente do caminho ou das etapas intermediárias percorridas.
   - Regras operacionais:
     * Se inverter uma reação intermediária, inverte-se o sinal do seu ΔH.
     * Se multiplicar ou dividir os coeficientes de uma equação por um fator k, multiplica-se ou divide-se o ΔH pelo mesmo fator k.
3. Pela Energia de Ligação:
   - Quebra de ligações químicas é sempre um processo ENDOTÉRMICO (absorve energia, sinal +).
   - Formação de novas ligações químicas é sempre um processo EXOTÉRMICO (libera energia, sinal -).
   - Fórmula: ΔH = Σ(Energia das ligações rompidas nos reagentes) - Σ(Energia das ligações formadas nos produtos).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Aplicação da Lei de Hess",
          enunciado: "Dadas as equações termoquímicas:\n1) C(grafite) + O₂(g) → CO₂(g)   ΔH₁ = -393,5 kJ/mol\n2) CO(g) + 1/2 O₂(g) → CO₂(g)   ΔH₂ = -283,0 kJ/mol\nCalcule o calor de formação do monóxido de carbono gasoso: C(grafite) + 1/2 O₂(g) → CO(g).",
          stepByStep: [
            "Passo 1: Identifique a equação global almejada: C(grafite) + 1/2 O₂(g) → CO(g).",
            "Passo 2: Mantenha a reação (1) com C(grafite) nos reagentes: C(grafite) + O₂(g) → CO₂(g) [ΔH = -393,5 kJ].",
            "Passo 3: Inverta a reação (2) para colocar CO(g) nos produtos: CO₂(g) → CO(g) + 1/2 O₂(g) [ΔH = +283,0 kJ].",
            "Passo 4: Some algebricamente as duas equações e simplifique os termos comuns (CO₂ cancela, e 1 O₂ - 1/2 O₂ = 1/2 O₂):",
            "Equação resultante: C(grafite) + 1/2 O₂(g) → CO(g).",
            "Passo 5: Some as entalpias: ΔH = -393,5 + 283,0 = -110,5 kJ/mol."
          ],
          gabarito: "ΔH = -110,5 kJ/mol (reação exotérmica de formação do CO)."
        }
      ],
      realWorldApplications: [
        "Comparação do poder calorífico de biocombustíveis (etanol, biogás) versus combustíveis fósseis (gasolina, diesel).",
        "Desenvolvimento de bolsas térmicas instantâneas de emergência (compressas de nitrato de amônio para resfriamento endotérmico ou cloreto de cálcio para aquecimento exotérmico).",
        "Eficiência energética de fornos industriais siderúrgicos na produção de ferro gusa."
      ],
      commonMisconceptions: [
        "Achar que quebrar ligação química libera energia (quebrar ligação ABSORVE energia; é a formação de ligações mais estáveis nos produtos que libera energia).",
        "Esquecer de multiplicar o valor de ΔH pelo coeficiente estequiométrico da substância balanceada.",
        "Considerar que substâncias simples em formas alotrópicas menos estáveis (como diamante ou fósforo branco) têm entalpia padrão zero."
      ],
      quickReviewPoints: [
        "Exotérmico: ΔH < 0, libera calor, produtos mais estáveis com menor energia.",
        "Endotérmico: ΔH > 0, absorve calor do ambiente.",
        "Lei de Hess: ΔH total = soma dos ΔH das etapas intermediárias manipuladas.",
        "Energia de ligação: Romper = absorve (+) | Formar = libera (-)."
      ]
    },
    {
      chapterNumber: 2,
      title: "Cinética Química: Teoria das Colisões e Velocidade de Reação",
      targetSkill: "H24, H25 — Identificar fatores que alteram a velocidade de reações químicas e ação catalítica",
      practiceModuleId: "natureza/termoquimica",
      deepContent: `
A Cinética Química investiga a rapidez com que reagentes são consumidos e produtos são formados, bem como as etapas microscópicas do mecanismo reacional.

1. Teoria das Colisões e Condições para Reação:
Para que uma reação ocorra entre partículas de reagentes, são necessárias três condições simultâneas:
1. Contato físico e choque entre as moléculas reagentes.
2. Orientação espacial geométrica favorável no instante do choque.
3. Energia cinética igual ou superior à Energia de Ativação (Ea) para formar o Complexo Ativado (estado transitório de máxima energia e instabilidade).

2. Fatores que Alteram a Velocidade da Reação:
• Temperatura: Eleva a energia cinética média das partículas, aumentando a frequência de choques e, principalmente, a fração de moléculas que possuem energia superior à Ea (aumenta exponencialmente a velocidade).
• Concentração dos Reagentes (ou Pressão em gases): Maior número de partículas por unidade de volume amplia a probabilidade de choques efetivos por segundo.
• Superfície de Contato: Crucial em sistemas heterogêneos sólido-gás ou sólido-líquido. Quanto mais triturado ou pulverizado o sólido, maior a área exposta para choques (ex: aspirina efervescente em pó dissolve mais rápido que em comprimido inteiro).
• Catalisadores: Substâncias que aceleram a velocidade da reação criando um caminho alternativo com menor Energia de Ativação (Ea).
  - O catalisador participa das etapas intermediárias, mas é regenerado intacto ao final da reação.
  - NÃO altera a entalpia da reação (ΔH permanece constante).
  - NÃO desloca a posição do equilíbrio químico nem altera o rendimento final; apenas faz o sistema atingir o equilíbrio mais rapidamente.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O Gráfico do Catalisador",
          enunciado: "Em um gráfico de energia potencial em função do caminho da reação, uma reação exotérmica apresenta uma barreira de energia de 80 kJ/mol. Ao se adicionar um catalisador adequado, essa barreira cai para 45 kJ/mol. Qual é o efeito do catalisador sobre o ΔH da reação e sobre a velocidade da transformação?",
          stepByStep: [
            "Passo 1: Lembre-se do papel termodinâmico do catalisador:",
            "O catalisador atua exclusivamente na cinética, diminuindo a barreira de Energia de Ativação (Ea de 80 cai para 45 kJ/mol).",
            "Passo 2: Analise o ΔH:",
            "A entalpia dos reagentes e a entalpia dos produtos permanecem rigorosamente inalteradas. Logo, ΔH = Hprodutos - Hreagentes não se altera.",
            "Passo 3: Conclua o efeito sobre a velocidade:",
            "Com uma barreira energética menor, uma porcentagem muito maior de colisões entre partículas torna-se eficaz por segundo, aumentando significativamente a velocidade da reação."
          ],
          gabarito: "O ΔH permanece inalterado e a velocidade da reação aumenta devido à redução da energia de ativação."
        }
      ],
      realWorldApplications: [
        "Conservação de alimentos perecíveis em geladeiras e freezers (redução de temperatura diminuindo a velocidade de proliferação bacteriana e oxidação).",
        "Conversores catalíticos em escapamentos automotivos (metais como platina e paládio catalisando a conversão de CO tóxico e NOx em CO₂ e N₂ inócuos).",
        "Ação enzimática no metabolismo humano (enzimas como catalisadores biológicos que viabilizam reações vitais a 36,5 °C)."
      ],
      commonMisconceptions: [
        "Achar que o catalisador aumenta o rendimento final da reação (ele apenas acelera a velocidade para atingir o mesmo rendimento de equilíbrio).",
        "Acreditar que o catalisador altera o ΔH (a diferença energética entre reagentes e produtos permanece estritamente a mesma).",
        "Confundir complexo ativado com produto intermediário (o complexo ativado é uma configuração efêmera de energia máxima no topo da barreira energética)."
      ],
      quickReviewPoints: [
        "Choque efetivo requer geometria favorável + energia >= Ea.",
        "Fatores de aceleração: maior temperatura, maior concentração, maior superfície de contato.",
        "Catalisador: reduz a Energia de Ativação (Ea); não altera o ΔH nem o equilíbrio final.",
        "Enzimas: catalisadores proteicos biológicos altamente específicos."
      ]
    },
    {
      chapterNumber: 3,
      title: "Equilíbrio Químico e o Princípio de Le Chatelier",
      targetSkill: "H24, H25 — Prever o comportamento de sistemas químicos em equilíbrio sob perturbações externas",
      practiceModuleId: "natureza/solucoes-equilibrio",
      deepContent: `
Reações reversíveis atingem o Equilíbrio Químico dinâmico quando a velocidade da reação direta iguala a velocidade da reação inversa (vdireta = vinversa), momento em que as concentrações molares de todas as espécies químicas participantes tornam-se constantes no tempo.

1. A Constante de Equilíbrio (Kc e Kp):
Para a reação genérica: aA + bB ⇌ cC + dD:
• Constante em Termos de Concentração: Kc = [C]^c · [D]^d / ([A]^a · [B]^b).
  - Regra essencial: Substâncias no estado sólido puro e líquidos puros (como água líquida quando atua como solvente abundante) NÃO entram na expressão de Kc, pois suas concentrações ativas são constantes unitárias.
• A constante Kc depende EXCLUSIVAMENTE da Temperatura.

2. O Princípio de Le Chatelier:
"Quando uma perturbação externa (tensão) é aplicada a um sistema em equilíbrio, o sistema desloca-se no sentido que tende a anular ou minimizar o efeito dessa perturbação."
• Efeito da Concentração:
  - Adicionar uma espécie: desloca no sentido de consumir essa espécie (lado oposto).
  - Remover uma espécie: desloca no sentido de repor essa espécie (mesmo lado).
• Efeito da Pressão (para equilíbrios gasosos):
  - Aumento da pressão total: desloca no sentido de MENOR volume gasoso (menor soma de coeficientes de gases).
  - Diminuição da pressão total: desloca no sentido de MAIOR volume gasoso.
  - Se a soma dos coeficientes gasosos for idêntica nos dois lados, a pressão não altera o equilíbrio.
• Efeito da Temperatura:
  - Aumento da temperatura: favorece o sentido ENDOTÉRMICO (absorve calor adicionado).
  - Diminuição da temperatura: favorece o sentido EXOTÉRMICO (libera calor compensatório).
• Efeito de Catalisador:
  - NÃO desloca o equilíbrio! Acelera igualmente a reação direta e a inversa.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Síntese de Haber-Bosch da Amônia",
          enunciado: "A síntese da amônia ocorre pela equação equilibrada: N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g)   ΔH = -92 kJ/mol. Quais modificações de pressão e temperatura maximizam a produção de amônia no reator industrial?",
          stepByStep: [
            "Passo 1: Analise o efeito da pressão pelo volume molar dos gases:",
            "Reagentes: 1 mol N₂ + 3 mol H₂ = 4 volumes gasosos. Produtos: 2 mol NH₃ = 2 volumes gasosos.",
            "Para deslocar para a direita (produzir mais amônia), deve-se elevar a pressão, deslocando para o menor volume (4 vol -> 2 vol).",
            "Passo 2: Analise o efeito da temperatura pelo sinal de ΔH:",
            "O sentido direto é exotérmico (ΔH < 0). Para favorecer o sentido direto, deve-se diminuir a temperatura.",
            "Passo 3: Ponderação industrial real (compromisso cinético-termodinâmico):",
            "Embora temperaturas baixas favoreçam termodinamicamente o rendimento, elas tornam a reação excessivamente lenta. Por isso a indústria opera em temperatura moderada (~450 °C) com catalisador de ferro sob alta pressão (~200 atm)."
          ],
          gabarito: "Alta pressão e baixa temperatura (teoricamente) deslocam o equilíbrio no sentido de formação da amônia."
        }
      ],
      realWorldApplications: [
        "Processo de Haber-Bosch na síntese de fertilizantes nitrogenados que viabilizam a produção agrícola global.",
        "Adaptação biológica humana a grandes altitudes (produção compensatória de hemoglobina pelo deslocamento do equilíbrio de transporte de O₂).",
        "Controle de gaseificação em refrigerantes engarrafados sob alta pressão de CO₂."
      ],
      commonMisconceptions: [
        "Achar que no equilíbrio as concentrações de reagentes e produtos são iguais (elas são CONSTANTES, não necessariamente iguais).",
        "Incluir sólidos na expressão da lei de ação das massas de Kc (sólidos não entram na fórmula).",
        "Achar que aumentar a temperatura sempre aumenta o rendimento de produtos (se a reação direta for exotérmica, aumentar a temperatura diminui o rendimento de produtos!)."
      ],
      quickReviewPoints: [
        "Equilíbrio: velocidade direta = velocidade inversa; concentrações constantes.",
        "Kc depende apenas da temperatura.",
        "Pressão alta desloca para menor volume de gás.",
        "Aumento de temperatura favorece o sentido endotérmico.",
        "Catalisador não altera o estado de equilíbrio."
      ]
    },
    {
      chapterNumber: 4,
      title: "Equilíbrio Iônico: pH, pOH, Hidrólise Salina e Solução Tampão",
      targetSkill: "H24, H25 — Calcular e analisar acidez, basicidade e sistemas de amortecimento em soluções",
      practiceModuleId: "natureza/solucoes-equilibrio",
      deepContent: `
O equilíbrio iônico estuda substâncias que sofrem dissociação ou ionização em meio aquoso, sendo a água o solvente por excelência.

1. Autoionização da Água e o Produto Iônico (Kw):
2 H₂O(l) ⇌ H₃O⁺(aq) + OH⁻(aq).
A 25 °C, o produto iônico da água é constante: Kw = [H⁺] · [OH⁻] = 1,0 · 10⁻¹⁴.
• Em água pura neutra: [H⁺] = [OH⁻] = 1,0 · 10⁻⁷ mol/L.

2. Escala Logarítmica de pH e pOH:
• Definição: pH = -log[H⁺]  e  pOH = -log[OH⁻].
• Relação fundamental a 25 °C: pH + pOH = 14.
  - Meio Ácido: [H⁺] > 10⁻⁷ mol/L  ⇒  pH < 7 (pOH > 7).
  - Meio Neutro: [H⁺] = 10⁻⁷ mol/L  ⇒  pH = 7 (pOH = 7).
  - Meio Básico / Alcalino: [H⁺] < 10⁻⁷ mol/L  ⇒  pH > 7 (pOH < 7).
• Propriedade logarítmica: A cada variação de 1 unidade na escala de pH, a concentração molar de íons H⁺ varia por um fator de 10 vezes (ex: pH 4 é 100 vezes mais ácido que pH 6).

3. Força de Ácidos e Bases:
• Ácido Forte: Grau de ionização α ≈ 100% (ex: HCl, HBr, HI, HNO₃, H₂SO₄). A concentração de [H⁺] é igual à concentração molar do ácido monoácido.
• Ácido Fraco: Grau de ionização α < 5% (ex: ácido acético CH₃COOH, ácido carbônico H₂CO₃). Mantém equilíbrio com constante Ka = [H⁺] · [A⁻] / [HA].

4. Soluções Tampão (Buffer):
Soluções que resistem a variações bruscas de pH quando se adicionam pequenas quantidades de ácidos fortes ou bases fortes.
• Composição clássica: Ácido fraco + seu sal de base forte (ex: CH₃COOH + CH₃COONa) OU Base fraca + seu sal de ácido forte (ex: NH₄OH + NH₄Cl).
• O Tampão Biológico do Sangue Humano: O sangue humano mantém pH rigidamente em torno de 7,35 a 7,45 pelo sistema tampão ácido carbônico / bicarbonato: CO₂(aq) + H₂O(l) ⇌ H₂CO₃(aq) ⇌ H⁺(aq) + HCO₃⁻(aq).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Variação de pH em Diluição Decimais",
          enunciado: "Uma solução aquosa de ácido clorídrico (HCl) de concentração 0,01 mol/L tem seu volume decuplicado (multiplicado por 10) pela adição de água destilada. Qual é o pH inicial e o pH final da solução a 25 °C?",
          stepByStep: [
            "Passo 1: Calcule o pH inicial:",
            "HCl é ácido forte monoácido completamente ionizado. [H⁺]inicial = 0,01 mol/L = 10⁻² mol/L.",
            "pHinicial = -log(10⁻²) = 2.",
            "Passo 2: Calcule a concentração após diluir 10 vezes:",
            "Cfinal = Cinicial / 10 = 0,01 / 10 = 0,001 mol/L = 10⁻³ mol/L.",
            "Passo 3: Calcule o pH final:",
            "pHfinal = -log(10⁻³) = 3.",
            "Conclusão: Ao diluir uma solução ácida em 10 vezes, o pH aumenta em 1 unidade aproximando-se da neutralidade."
          ],
          gabarito: "pH inicial = 2 e pH final = 3."
        }
      ],
      realWorldApplications: [
        "Mecanismos homeostáticos de alcalose e acidose respiratória e metabólica no sangue de pacientes em UTI.",
        "Tratamento de água em estações de saneamento (ETA) com correção de pH para floculação de hidróxido de alumínio.",
        "Calagem de solos agrícolas para neutralizar a acidez do solo e precipitar íons tóxicos de alumínio."
      ],
      commonMisconceptions: [
        "Achar que pH 0 significa ausência de acidez (pH 0 representa uma solução extremamente ácida com [H⁺] = 1 mol/L).",
        "Acreditar que adicionar água pura destilada pode transformar um ácido em solução básica (a diluição infinita apenas aproxima o pH de 7 a 25 °C).",
        "Confundir acidez com concentração absoluta (um ácido fraco concentrado pode ter pH mais alto que um ácido forte diluído)."
      ],
      quickReviewPoints: [
        "Kw = [H⁺] · [OH⁻] = 10⁻¹⁴ a 25 °C.",
        "pH = -log[H⁺]  |  pH + pOH = 14.",
        "Escala logarítmica: variação de 1 unidade = fator de 10x na concentração de H⁺.",
        "Tampão: mistura de ácido/base fraca com seu sal conjugado que resiste a variações de pH."
      ]
    },
    {
      chapterNumber: 5,
      title: "Eletroquímica: Pilhas Galvânicas, Potenciais e Eletrólise",
      targetSkill: "H24, H25 — Compreender processos redox, geração de corrente em pilhas e eletrólise industrial",
      practiceModuleId: "natureza/eletroquimica",
      deepContent: `
A Eletroquímica investiga a interconversão entre energia química e energia elétrica por meio de reações de oxirredução (transferência de elétrons).

1. Reações de Oxirredução (Redox):
• Oxidação: Perda de elétrons. O número de oxidação (Nox) aumenta. A espécie que oxida é o Agente Redutor.
• Redução: Ganho de elétrons. O Nox diminui. A espécie que reduz é o Agente Oxidante.
• Mnemônico universal: "Quem Dá elétrons Oxida e é Redutor; Quem Recebe Reduz e é Oxidante".

2. Células Galvânicas (Pilhas):
Transformam energia química espontânea em energia elétrica (ΔE° > 0 e ΔG < 0).
• Componentes fundamentais (ex: Pilha de Daniell: Zn/Zn²⁺ // Cu²⁺/Cu):
  - Ânodo (Pólo Negativo): Ocorre a OXIDAÇÃO. O eletrodo é corroído (perde massa), liberando elétrons para o circuito externo e cátions para a solução.
  - Cátodo (Pólo Positivo): Ocorre a REDUÇÃO. Cátions da solução recebem elétrons e depositam metal sobre o eletrodo (ganha massa).
  - Fluxo de elétrons: Sempre flui do Ânodo para o Cátodo pelo fio condutor externo (A -> C).
  - Ponte Salina: Mantém a neutralidade elétrica das cubas fechando o circuito iônico (ânions migram para o ânodo; cátions migram para o cátodo).
• Cálculo da Força Eletromotriz (fem ou ΔE°):
  - ΔE° = E°redução(maior) - E°redução(menor)  OU  ΔE° = E°redução(cátodo) - E°redução(ânodo).
  - Reação espontânea requer imperativamente: ΔE° > 0.

3. Corrosão e Proteção Catódica (Metal de Sacrifício):
• O ferro metálico enferruja espontaneamente em presença de água e oxigênio: Fe → Fe²⁺ + 2 e⁻.
• Para proteger estruturas de aço (cascos de navios, oleodutos subterrâneos), acopla-se a elas um Metal de Sacrifício com menor potencial de redução (maior potencial de oxidação) que o ferro, como o Zinco (galvanização) ou Magnésio. O metal de sacrifício corrói-se preferencialmente, doando elétrons e mantendo o ferro intacto.

4. Células Eletrolíticas (Eletrólise):
Processo NÃO espontâneo no qual energia elétrica de uma fonte externa (gerador/bateria) é utilizada para forçar uma reação química endotérmica (ΔE° < 0).
• Inversão de pólos:
  - Ânodo: continua ocorrendo oxidação, mas agora está conectado ao pólo POSITIVO do gerador.
  - Cátodo: continua ocorrendo redução, mas agora está conectado ao pólo NEGATIVO do gerador.
• Eletrólise Ígnea: Realizada com o composto iônico fundido a quente, sem água (ex: obtenção industrial do alumínio metálico a partir da bauxita fundida).
• Eletrólise Aquosa: Realizada com solução salina. Há competição de descarga no cátodo (cátion do sal vs. H⁺ da água) e no ânodo (ânion do sal vs. OH⁻ da água).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Cálculo da ddp na Pilha de Daniell",
          enunciado: "Dados os potenciais padrão de redução:\nZn²⁺(aq) + 2 e⁻ → Zn(s)   E° = -0,76 V\nCu²⁺(aq) + 2 e⁻ → Cu(s)   E° = +0,34 V\nDetermine qual espécie oxida, qual reduz, o fluxo de elétrons e a diferença de potencial padrão (ΔE°) da pilha.",
          stepByStep: [
            "Passo 1: Compare os potenciais padrão de redução:",
            "O cobre tem maior potencial de redução (+0,34 V > -0,76 V). Logo, Cu²⁺ vai REDUZIR (Cátodo, polo positivo).",
            "O zinco tem menor potencial de redução (-0,76 V). Logo, Zn(s) vai OXIDAR (Ânodo, polo negativo).",
            "Passo 2: Determine o fluxo de elétrons:",
            "Os elétrons saem do polo onde ocorre oxidação (ânodo de zinco) e viajam pelo fio condutor em direção ao cátodo de cobre.",
            "Passo 3: Calcule a ddp (ΔE°):",
            "ΔE° = E°redução(maior) - E°redução(menor) = (+0,34 V) - (-0,76 V) = +0,34 + 0,76 = +1,10 V."
          ],
          gabarito: "ΔE° = +1,10 V. O Zn oxida no ânodo, o Cu²⁺ reduz no cátodo e os elétrons fluem do zinco para o cobre."
        }
      ],
      realWorldApplications: [
        "Tecnologia de baterias recarregáveis de íons de lítio em veículos elétricos e smartphones.",
        "Proteção de tubulações de gás e estruturas submarinas de plataformas de petróleo com ânodos de sacrifício de magnésio.",
        "Galvanoplastia industrial (douração, cromagem e niquelação de joias e ferramentas para evitar oxidação)."
      ],
      commonMisconceptions: [
        "Achar que na eletrólise a redução ocorre no ânodo (tanto na pilha quanto na eletrólise, REDUÇÃO é SEMPRE no CÁTODO e OXIDAÇÃO é SEMPRE no ÂNODO; o que inverte são os sinais dos pólos positivo/negativo).",
        "Acreditar que elétrons circulam pela ponte salina (elétrons circulam apenas pelo fio condutor metálico externo; na ponte salina circulam apenas íons).",
        "Confundir o metal de sacrifício: ele deve ter MAIOR tendência de oxidar (menor E° de redução) do que o metal protegido."
      ],
      quickReviewPoints: [
        "Ânodo: oxida, perde elétrons, sofre corrosão de massa.",
        "Cátodo: reduz, recebe elétrons, sofre deposição de massa.",
        "Mnemônico vogal/consoante: Ânodo = Oxidação (vogais) | Cátodo = Redução (consoantes).",
        "Pilha: química -> elétrica (espontânea, ΔE° > 0).",
        "Eletrólise: elétrica -> química (forçada, ΔE° < 0)."
      ]
    }
  ]
};
