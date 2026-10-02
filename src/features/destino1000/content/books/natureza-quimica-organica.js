/**
 * LIVRO DIDÁTICO DIGITAL: Química Orgânica Fundamental e Reações no ENEM
 * Área: Ciências da Natureza e suas Tecnologias (Química)
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_NATUREZA_QUIMICA_ORGANICA = {
  id: "livro-natureza-quimica-organica",
  area: "natureza",
  title: "Química Orgânica Fundamental e Reações",
  subtitle: "Do comportamento do carbono aos biocombustíveis e polímeros no cotidiano",
  estimatedReadingTimeMinutes: 55,
  badge: "Livro Essencial • Química Orgânica",
  coverColor: "from-teal-950 to-emerald-900",
  prerequisites: [
    "Estrutura atômica, camadas eletrônicas e elétrons de valência",
    "Ligações covalentes e eletronegatividade de Pauling",
    "Geometria molecular e forças intermoleculares (dipolo-dipolo, pontes de hidrogênio e forças de London)"
  ],
  learningObjectives: [
    "Compreender a tetravalência do carbono e suas hibridizações sp³, sp² e sp",
    "Identificar e classificar as principais funções orgânicas oxigenadas e nitrogenadas",
    "Diferenciar isomeria plana constitucional de isomeria espacial geométrica e óptica",
    "Dominar as principais reações orgânicas cobradas no ENEM: esterificação, saponificação, polimerização e combustão",
    "Analisar o impacto socioambiental dos polímeros sintéticos e a importância dos biocombustíveis"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "O Átomo de Carbono e a Classificação de Cadeias Carbônicas",
      targetSkill: "H17, H18 — Reconhecer a estrutura e as propriedades moleculares dos compostos de carbono",
      practiceModuleId: "natureza/quimica-organica",
      deepContent: `
A Química Orgânica é o ramo da química que estuda os compostos formados pelo elemento carbono.
A base da química orgânica assenta-se nos postulados de Friedrich August Kekulé (1858):

1. Os Postulados Fundamentais de Kekulé:
• O carbono é rigorosamente tetravalente: possui 4 elétrons na camada de valência (distribuição 1s² 2s² 2p²) e realiza invariavelmente 4 ligações covalentes para atingir o octeto estável.
• As 4 valências do carbono são equivalentes entre si no espaço: não importa a posição em que um substituinte se liga, o composto resultante é idêntico.
• O carbono tem a propriedade única de formar cadeias: átomos de carbono podem ligar-se covalentemente entre si, formando cadeias estáveis curtas, longas, ramificadas e cíclicas.

2. Hibridização do Carbono e Geometria Molecular:
• Hibridização sp³: 
  - Ocorre quando o carbono faz 4 ligações simples (4 ligações sigma σ).
  - Geometria: Tetraédrica, com ângulos de ligação de aproximadamente 109°28'.
  - Exemplo: metano (CH₄), etano (C₂H₆).
• Hibridização sp²:
  - Ocorre quando o carbono faz 1 ligação dupla e 2 ligações simples (3 ligações sigma σ e 1 ligação pi π).
  - Geometria: Trigonal plana, com ângulos de ligação de aproximadamente 120°.
  - Exemplo: eteno (C₂H₄), anel benzênico.
• Hibridização sp:
  - Ocorre quando o carbono faz 1 ligação tripla e 1 simples, OU 2 ligações duplas acumuladas (2 ligações sigma σ e 2 ligações pi π).
  - Geometria: Linear, com ângulo de ligação de 180°.
  - Exemplo: etino (C₂H₂), dióxido de carbono (CO₂).

3. Classificação dos Átomos de Carbono na Cadeia:
• Primário: ligado diretamente a no máximo 1 outro átomo de carbono.
• Secundário: ligado diretamente a 2 outros átomos de carbono.
• Terciário: ligado diretamente a 3 outros átomos de carbono.
• Quaternário: ligado diretamente a 4 outros átomos de carbono.

4. Classificação das Cadeias Carbônicas:
• Quanto ao fechamento:
  - Aberta (acíclica ou alifática): possui extremidades livres.
  - Fechada (cíclica): os átomos de carbono fecham um ciclo ou anel.
• Quanto à presença de heteroátomos:
  - Homogênea: a cadeia principal é formada exclusivamente por carbonos ligados entre si.
  - Heterogênea: contém um heteroátomo (oxigênio, nitrogênio, enxofre ou fósforo) interposto ENTRE carbonos.
• Quanto à saturação:
  - Saturada: apresenta unicamente ligações simples (sigma) entre carbonos.
  - Insaturada: apresenta pelo menos uma ligação dupla ou tripla entre carbonos.
• Quanto à disposição:
  - Normal (linear): possui apenas duas extremidades, contendo carbonos primários e secundários.
  - Ramificada: possui mais de duas extremidades, contendo carbono terciário ou quaternário.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 1: Hibridização e Contagem de Ligações Sigma e Pi",
          enunciado: "Analise a molécula do propeno (CH₂=CH-CH₃). Determine a quantidade total de ligações sigma (σ), ligações pi (π) e as hibridizações de cada carbono da esquerda para a direita.",
          stepByStep: [
            "Passo 1: Escrever a fórmula estrutural plana expandida do propeno:",
            "H₂C=CH-CH₃ possui: duas ligações C-H no C1; uma ligação dupla C=C entre C1 e C2; uma ligação C-H no C2; uma ligação simples C-C entre C2 e C3; e três ligações C-H no C3.",
            "Passo 2: Contar as ligações sigma (todas as simples e a primeira de cada dupla):",
            "Ligações C-H: 2 + 1 + 3 = 6 ligações σ.",
            "Ligações C-C: 1 ligação σ na dupla e 1 ligação σ na simples = 2 ligações σ.",
            "Total de ligações sigma: 6 + 2 = 8 ligações σ.",
            "Passo 3: Contar as ligações pi:",
            "Há apenas uma ligação dupla C=C, que contém 1 ligação pi (π).",
            "Passo 4: Determinar as hibridizações:",
            "C1 (faz 1 dupla e 2 simples): hibridização sp².",
            "C2 (faz 1 dupla e 2 simples): hibridização sp².",
            "C3 (faz 4 simples): hibridização sp³."
          ],
          gabarito: "8 ligações sigma (σ), 1 ligação pi (π); hibridizações sp², sp² e sp³."
        }
      ],
      realWorldApplications: [
        "A planaridade dos carbonos sp² em anéis aromáticos permite o empilhamento de bases nitrogenadas no DNA.",
        "A rigidez espacial da hibridização determina a conformação tridimensional de enzimas e proteínas no metabolismo humano.",
        "A presença de heteroátomos de nitrogênio e oxigênio define os pontos reativos em fármacos e antibióticos."
      ],
      commonMisconceptions: [
        "Achar que carbono ligado a oxigênio por ligação dupla é insaturado: a insaturação na cadeia carbônica exige obrigatoriamente ligação dupla ou tripla ENTRE carbonos.",
        "Confundir átomo com hibridização sp² (trigonal plano) com sp (linear)."
      ],
      quickReviewPoints: [
        "Carbono é tetravalente (faz 4 ligações).",
        "sp³ = 4 ligações simples (tetraédrico, 109°28').",
        "sp² = 1 dupla e 2 simples (trigonal plano, 120°).",
        "sp = 1 tripla e 1 simples ou 2 duplas (linear, 180°).",
        "Heteroátomo DEVE estar posicionado ENTRE carbonos."
      ]
    },
    {
      chapterNumber: 2,
      title: "Funções Orgânicas Oxigenadas e Nitrogenadas",
      targetSkill: "H17, H18 — Identificar grupos funcionais e prever propriedades físico-químicas",
      practiceModuleId: "natureza/quimica-organica",
      deepContent: `
Os grupos funcionais determinam o comportamento químico e físico das substâncias orgânicas.

1. Principais Funções Oxigenadas:
• Álcool: grupo hidroxila (-OH) ligado a carbono saturado (sp³). Sufixo -ol (ex: etanol, CH₃CH₂OH).
• Enol: hidroxila (-OH) ligada diretamente a carbono insaturado com dupla ligação não aromática. Composto instável.
• Fenol: hidroxila (-OH) ligada diretamente a anel aromático (benzeno). Possui caráter ácido moderado.
• Aldeído: grupo carbonila terminal (C=O ligado a H). Sufixo -al (ex: metanal / formol, etanal).
• Cetona: grupo carbonila entre dois átomos de carbono. Sufixo -ona (ex: propanona / acetona).
• Ácido Carboxílico: grupo carboxila (-COOH), formado por carbonila + hidroxila no mesmo carbono terminal. Sufixo -oico (ex: ácido etanoico / ácido acético). Possui acentuado caráter ácido.
• Éster: derivado de ácido carboxílico onde o H da hidroxila é substituído por radical carbônico (-COO-R). Sufixo -oato de ...-ila (ex: etanoato de etila). São os aromas e essências de frutas.
• Éter: oxigênio como heteroátomo ligado a dois carbonos (R-O-R'). Sufixo -oxi (ex: metoxietano).

2. Principais Funções Nitrogenadas:
• Amina: derivada da amônia (NH₃) pela substituição de hidrogênios por radicais alquila ou arila. 
  - Primária: R-NH₂; Secundária: R-NH-R'; Terciária: R-N(R')-R''.
  - Propriedade marcante: caráter BÁSICO devido ao par de elétrons livres no nitrogênio (teoria de Lewis e Brønsted-Lowry).
• Amida: nitrogênio ligado diretamente a uma carbonila (-CO-NH₂ ou -CO-NH-R). É o grupo constituinte da ligação peptídica nas proteínas.
• Nitrila (Ciano): grupo funcional -C≡N ligado a cadeia carbônica.
• Nitrocomposto: grupo nitro (-NO₂) ligado a cadeia carbônica (ex: TNT - trinitrotolueno).

3. Relação Estrutura x Propriedades Físicas:
• Ponto de Ebulição (PE):
  - Depende da intensidade das forças intermoleculares e da massa molar.
  - Ácido Carboxílico > Álcool > Amina > Cetona/Aldeído > Éster/Éter > Hidrocarboneto (para massas molares similares).
  - Compostos com ligações de hidrogênio (ácidos, álcoois, aminas) têm PE muito mais elevados.
• Solubilidade em Água:
  - "Semelhante dissolve semelhante": compostos com parte polar capaz de formar pontes de hidrogênio (com até 3 ou 4 carbonos) são solúveis em água.
  - À medida que a cadeia carbônica apolar (lipofílica) cresce, a solubilidade em água diminui drasticamente e a solubilidade em gorduras aumenta.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 2: Comparação de Pontos de Ebulição e Forças Intermoleculares",
          enunciado: "Considere as substâncias etanol (CH₃CH₂OH, massa molar 46 g/mol) e metoximetano (éter dimetílico, CH₃OCH₃, massa molar 46 g/mol). Explique por que o etanol é líquido à temperatura ambiente (PE = 78 °C), enquanto o metoximetano é gasoso (PE = -24 °C), mesmo possuindo a mesma fórmula molecular C₂H₆O.",
          stepByStep: [
            "Passo 1: Identificar as funções orgânicas:",
            "Etanol é um álcool com hidrogênio ligado diretamente a oxigênio (-O-H).",
            "Metoximetano é um éter, com oxigênio ligado a dois carbonos (C-O-C), sem hidrogênio ligado diretamente ao oxigênio.",
            "Passo 2: Determinar as forças intermoleculares atuantes entre as moléculas de cada composto:",
            "No etanol líquido: ocorrem LIGAÇÕES DE HIDROGÊNIO intensas entre as hidroxilas das moléculas vizinhas.",
            "No metoximetano: ocorrem apenas interações do tipo DIPOLO PERMANENTE (dipolo-dipolo), consideravelmente mais fracas.",
            "Passo 3: Concluir sobre a energia térmica necessária para vaporização:",
            "Romper as ligações de hidrogênio do etanol exige muito mais energia térmica do que romper as forças dipolo-dipolo do éter, justificando a enorme diferença de 102 °C em seus pontos de ebulição."
          ],
          gabarito: "O etanol realiza ligações de hidrogênio intermoleculares, enquanto o éter realiza apenas dipolo-dipolo."
        }
      ],
      realWorldApplications: [
        "A polaridade mista de tensoativos e sabões permite solubilizar óleos e gorduras em água durante a higienização.",
        "O odor característico de peixe em degradação provém de aminas voláteis (trimetilamina), que podem ser neutralizadas com o ácido cítrico do limão.",
        "A solubilidade de fármacos: anti-inflamatórios lipofílicos atravessam membranas celulares lipídicas com muito mais facilidade."
      ],
      commonMisconceptions: [
        "Achar que éter realiza ligações de hidrogênio entre suas próprias moléculas (éteres só formam ligação de hidrogênio com a água, mas não entre si porque não têm H ligado a F, O ou N).",
        "Confundir a função amina (caráter básico) com a função amida (nitrogênio ligado a carbonila, praticamente neutra)."
      ],
      quickReviewPoints: [
        "Álcool: C-OH saturado. Fenol: anel aromático-OH. Ácido Carboxílico: -COOH.",
        "Amina: N ligado a carbonos (caráter básico). Amida: N ligado a C=O.",
        "Ponto de ebulição alto: presença de ligações de hidrogênio (ácidos e álcoois).",
        "Cadeia carbônica longa = predomínio do caráter apolar (lipofílico)."
      ]
    },
    {
      chapterNumber: 3,
      title: "Isomeria Plana, Geométrica e Óptica",
      targetSkill: "H17, H18 — Diferenciar isômeros e compreender a quiralidade de fármacos",
      practiceModuleId: "natureza/quimica-organica",
      deepContent: `
Isômeros são compostos distintos que apresentam a mesma fórmula molecular, mas diferem em suas estruturas ou disposições espaciais.

1. Isomeria Plana (Constitucional):
Diferenciam-se pela fórmula estrutural plana.
• Isomeria de Função: os isômeros pertencem a funções químicas distintas.
  - Álcool e Éter (ex: etanol e metoximetano, C₂H₆O).
  - Aldeído e Cetona (ex: propanal e propanona, C₃H₆O).
  - Ácido Carboxílico e Éster (ex: ácido propanoico e etanoato de metila, C₃H₆O₂).
• Isomeria de Cadeia: mesma função, mas tipo de cadeia diferente (normal vs ramificada, aberta vs fechada).
  - Exemplo: butano e metilpropano (C₄H₁₀).
• Isomeria de Posição: mesma função e mesma cadeia, mas difere na posição de uma insaturação, ramificação ou grupo funcional.
  - Exemplo: propan-1-ol e propan-2-ol.
• Isomeria de Compensação (Metameria): difere na posição do heteroátomo ao longo da cadeia.
  - Exemplo: metoxipropano e etoxietano.
• Tautomeria: caso especial de isomeria funcional dinâmica, em que os isômeros coexistem em equilíbrio químico.
  - Tautomeria ceto-enólica: aldeído/cetona em equilíbrio reversível com enol.

2. Isomeria Espacial Geométrica (Cis-Trans / E-Z):
Ocorre quando os átomos têm a mesma conectividade, mas orientações espaciais fixas diferentes devido à rigidez de rotação.
• Condições para ocorrência:
  1. Em compostos de cadeia aberta: presença de ligação dupla C=C onde cada um dos carbonos da dupla possui dois ligantes distintos entre si (R₁ ≠ R₂ e R₃ ≠ R₄).
  2. Em compostos cíclicos: pelo menos dois carbonos do anel com ligantes diferentes entre si.
• Isômero Cis: ligantes de maior massa do mesmo lado do plano imaginário.
• Isômero Trans: ligantes de maior massa em lados opostos do plano imaginário. Geralmente apresenta maior estabilidade e menor momento dipolar resultante.

3. Isomeria Óptica e Quiralidade:
• Carbono Quiral ou Assimétrico (C*): carbono sp³ ligado a quatro grupos ligantes inteiramente diferentes entre si (-a, -b, -c, -d, com a ≠ b ≠ c ≠ d).
• Enantiômeros: par de isômeros que são imagens especulares não sobreponíveis (como a mão direita e a mão esquerda).
  - Desviam o plano da luz polarizada em sentidos opostos com o mesmo ângulo:
    - Dextrogiro (d ou +): desvia para a direita.
    - Levogiro (l ou -): desvia para a esquerda.
  - Mistura Racêmica: mistura equimolar (50% dextrogiro + 50% levogiro) opticamente inativa por compensação externa.
• O Caso da Talidomida no ENEM:
  - Fármaco sedativo prescrito nos anos 1950: o enantiômero (R) era sedativo seguro; o enantiômero (S) era teratogênico (provocava má-formação congênita em fetos). Evidencia a relevância biológica crítica da quiralidade.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 3: Identificação de Carbono Quiral e Cálculo de Isômeros Ópticos",
          enunciado: "Determine o número de carbonos quirais e a quantidade máxima de isômeros opticamente ativos do aminoácido alanina: CH₃-CH(NH₂)-COOH.",
          stepByStep: [
            "Passo 1: Analisar cada átomo de carbono da cadeia da alanina:",
            "C1 (carboxila -COOH): carbono sp² com ligação dupla C=O (não pode ser quiral).",
            "C2 (carbono central): carbono sp³ ligado a 4 grupos distintos: -H, -CH₃, -NH₂ e -COOH.",
            "C3 (metila -CH₃): carbono sp³ ligado a 3 hidrogênios iguais (não é quiral).",
            "Passo 2: Contar os carbonos quirais:",
            "Há exatamente n = 1 carbono assimétrico (C2).",
            "Passo 3: Aplicar a regra de van 't Hoff para isômeros opticamente ativos (IOA):",
            "IOA = 2ⁿ = 2¹ = 2 isômeros opticamente ativos (um dextrogiro e um levogiro).",
            "Isômeros opticamente inativos (misturas racêmicas): IR = 2ⁿ⁻¹ = 2⁰ = 1 mistura racêmica."
          ],
          gabarito: "1 carbono quiral; 2 isômeros opticamente ativos (enantiômeros)."
        }
      ],
      realWorldApplications: [
        "A indústria farmacêutica sintetiza fármacos enantiomericamente puros para evitar efeitos colaterais graves.",
        "Gorduras trans industriais (hidrogenação parcial de óleos vegetais) elevam o colesterol LDL e aumentam o risco cardiovascular.",
        "Os receptores olfativos humanos diferenciam enantiômeros: o (R)-limoneno tem cheiro de laranja e o (S)-limoneno tem cheiro de pinho."
      ],
      commonMisconceptions: [
        "Achar que carbono sp² de dupla ligação pode ser quiral (carbono quiral precisa ser sp³ com 4 ligantes simples).",
        "Confundir isomeria de posição com metameria (metameria exige mudança de posição de HETEROÁTOMO no meio da cadeia)."
      ],
      quickReviewPoints: [
        "Isomeria de função: álcool/éter, aldeído/cetona, ácido/éster.",
        "Tautomeria: equilíbrio ceto-enólico dinâmico.",
        "Isomeria cis-trans: dupla ligação com ligantes diferentes em cada carbono.",
        "Isomeria óptica: presença de carbono quiral (C* com 4 grupos diferentes).",
        "Mistura racêmica: 50% dextrogiro + 50% levogiro (inativa)."
      ]
    },
    {
      chapterNumber: 4,
      title: "Polímeros, Biocombustíveis e Reações Orgânicas",
      targetSkill: "H17, H18, H19 — Avaliar síntese de materiais e impactos socioambientais",
      practiceModuleId: "natureza/quimica-organica",
      deepContent: `
As reações orgânicas formam os materiais fundamentais da civilização moderna e os processos biológicos de sustentabilidade energética.

1. Reação de Esterificação e Produção de Biodiesel:
• Esterificação de Fischer:
  Ácido Carboxílico + Álcool ⇌ Éster + Água (catálise ácida, H₂SO₄).
  É uma reação reversível que atinge equilíbrio químico.
• Transesterificação (Produção de Biodiesel):
  Triglicerídeo (óleo vegetal ou gordura animal) + 3 Álcool de cadeia curta (metanol ou etanol) 
  → 3 Ésteres de ácidos graxos (Biodiesel) + 1 Glicerol (Glicerina).
  - Vantagem ambiental: combustível renovável de ciclo fechado de carbono, com menor emissão de particulados e enxofre em comparação ao diesel fóssil.

2. Saponificação (Hidrólise Alcalina de Lipídios):
• Triglicerídeo + 3 NaOH (ou KOH) → 3 Sabões (sais de ácidos graxos) + Glicerol.
• Estrutura e ação tensoativa do sabão:
  - Cauda longa apolar hidrofóbica: interage com óleos e gorduras via forças de dispersão de London.
  - Cabeça polar iônica hidrofílica (-COO⁻ Na⁺): interage com a água por atração íon-dipolo.
  - Formação de micelas: as caudas apolares sequestram as partículas de gordura no interior esférico, permitindo sua emulsificação e arraste pela água.

3. Polímeros Sintéticos e Biopolímeros:
• Polímeros de Adição:
  - Formam-se pela quebra sucessiva de ligações pi (π) de monômeros insaturados.
  - Polietileno (PE): monômero eteno; sacolas e embalagens plásticas.
  - Polipropileno (PP): monômero propeno; para-choques e potes térmicos.
  - Policloreto de vinila (PVC): monômero cloroeteno; tubulações hidráulicas.
  - Teflon (PTFE - Politetrafluoretileno): monômero tetrafluoreteno; revestimento antiaderente termoestável.
• Polímeros de Condensação:
  - Formam-se pela união de monômeros com eliminação de moléculas pequenas (geralmente H₂O).
  - PET (Poliéster): ácido tereftálico + etilenoglicol; garrafas plásticas recicláveis.
  - Náilon (Poliamida): diácido carboxílico + diamina; tecidos sintéticos resistentes.
  - Proteínas: biopolímeros naturais formados pela condensação de aminoácidos via ligações peptídicas (amídicas).

4. O Desafio Ambiental dos Plásticos e a Reciclagem:
• Termoplásticos: amolecem ao calor e podem ser remodelados e reciclados mecanicamente (PE, PP, PET, PVC).
• Termofixos (Termorrígidos): não fundem ao aquecimento, degradando-se por pirólise; possuem ligações cruzadas e são de difícil reciclagem (baquelite, poliuretano vulcanizado).
• Microplásticos: fragmentação de polímeros no meio aquático que bioacumulam na cadeia trófica marinha.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 4: Equação de Transesterificação para Produção de Biodiesel",
          enunciado: "Uma usina de biocombustíveis utiliza trioleína (triglicerídeo formado pelo ácido oleico C₁₇H₃₃COOH e glicerol) reagindo com etanol anidro na presença de catalisador básico. Escreva a proporção estequiométrica molar entre triglicerídeo, etanol, éster etílico formado (biodiesel) e glicerol.",
          stepByStep: [
            "Passo 1: Reconhecer a estrutura do triglicerídeo:",
            "Um triglicerídeo possui 3 ligações éster ligadas à cadeia carbônica de 3 carbonos do glicerol.",
            "Passo 2: Determinar a quantidade de álcool necessária:",
            "Para romper as 3 ligações éster, são necessários 3 mols de etanol (CH₃CH₂OH) para cada 1 mol de triglicerídeo.",
            "Passo 3: Identificar os produtos gerados:",
            "Cada cadeia de ácido graxo une-se ao grupo etila, formando 3 mols de oleato de etila (biodiesel).",
            "A estrutura restante do glicerol recebe 3 hidroxilas, formando 1 mol de propan-1,2,3-triol (glicerol/glicerina).",
            "Passo 4: Proporção estequiométrica global:",
            "1 Triglicerídeo + 3 Etanol → 3 Biodiesel (oleato de etila) + 1 Glicerol."
          ],
          gabarito: "1 : 3 : 3 : 1 (1 mol de triglicerídeo + 3 mols de etanol → 3 mols de biodiesel + 1 mol de glicerol)."
        }
      ],
      realWorldApplications: [
        "A adição obrigatória de biodiesel ao diesel fóssil no Brasil reduz a emissão de óxidos de enxofre (SOx) causadores de chuva ácida.",
        "A reciclagem mecânica e química do PET (polietileno tereftalato) economiza matérias-primas petroquímicas não renováveis.",
        "Bioplásticos biodegradáveis (como PLA - poliácido lático obtido do amido de milho) decompõem-se por ação bacteriana em compostagem industrial."
      ],
      commonMisconceptions: [
        "Achar que biodiesel é o mesmo que óleo vegetal puro: queimar óleo vegetal direto em motores comuns gera resíduos de acroleína e trava os bicos injetores; o biodiesel exige a reação de transesterificação.",
        "Confundir polímero de adição (sem subproduto) com polímero de condensação (com liberação de água)."
      ],
      quickReviewPoints: [
        "Esterificação: Ácido + Álcool ⇌ Éster + Água.",
        "Biodiesel: Triglicerídeo + 3 Álcool → 3 Ésteres + Glicerol (transesterificação).",
        "Sabão: sal de ácido graxo com cauda apolar e cabeça polar (ação micelar).",
        "Termoplásticos são recicláveis; termofixos possuem ligações cruzadas e não fundem."
      ]
    }
  ]
};
