/**
 * LIVRO DIDÁTICO DIGITAL: Geometria Plana, Áreas e Trigonometria no ENEM
 * Área: Matemática e suas Tecnologias
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 * Regra Estrita: ZERO termos de deslocamentos turísticos.
 */

export const LIVRO_MATEMATICA_GEOMETRIA_PLANA_TRIGONOMETRIA = {
  id: "livro-matematica-geometria-plana-trigonometria",
  area: "matematica",
  title: "Geometria Plana, Áreas e Trigonometria no ENEM",
  subtitle: "Triângulos, polígonos regulares, cálculo de áreas, semelhança e razões trigonométricas aplicadas",
  estimatedReadingTimeMinutes: 60,
  badge: "Livro Essencial • Geometria e Trigonometria",
  coverColor: "from-cyan-950 to-blue-900",
  prerequisites: [
    "Aritmética básica, proporções e potenciação/radiciação",
    "Equações polinomiais do primeiro e do segundo grau",
    "Conceitos elementares de retas paralelas cortadas por transversal"
  ],
  learningObjectives: [
    "Dominar o Teorema de Pitágoras e as relações métricas fundamentais no triângulo retângulo",
    "Calcular áreas de superfícies planas (triângulos, quadriláteros, polígonos regulares e figuras circulares)",
    "Aplicar semelhança de triângulos e a relação entre escala linear (k) e escala superficial (k²)",
    "Compreender a condição geométrica de ladrilhamento do plano por polígonos regulares",
    "Resolver problemas práticos com as leis dos senos e dos cossenos e modelar fenômenos periódicos por funções trigonométricas"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "Triângulos e Relações Métricas no Triângulo Retângulo",
      targetSkill: "H7, H8 — Resolver situações-problema que envolvam relações métricas entre figuras geométricas planas",
      practiceModuleId: "matematica/geometria-plana",
      deepContent: `
A Geometria Plana repousa sobre as propriedades intrínsecas dos triângulos, o polígono mais rígido e estável da natureza.

1. Classificação e Condição de Existência:
• Condição de Existência (Desigualdade Triangular): para que três segmentos a, b e c formem um triângulo, a medida de qualquer lado deve ser estritamente menor que a soma dos outros dois e maior que o módulo da diferença:
  |b - c| < a < b + c.
• Classificação quanto aos lados: equilátero (3 lados congruentes), isósceles (2 lados congruentes e ângulos da base iguais), escaleno (3 lados distintos).
• Classificação quanto aos ângulos: acutângulo (3 ângulos agudos < 90°), retângulo (1 ângulo reto = 90°), obtusângulo (1 ângulo obtuso > 90°).
• Soma dos ângulos internos: sempre igual a 180° no plano euclidiano (S_i = 180°).

2. Pontos Notáveis do Triângulo:
• Baricentro (G): encontro das três medianas. É o centro de gravidade do triângulo. Divide cada mediana na razão 2:1 a partir do vértice (AG = 2 · GM).
• Incentro (I): encontro das três bissetrizes internas. É o centro da circunferência inscrita (tangente interior aos 3 lados).
• Circuncentro (O): encontro das três mediatrizes dos lados. É o centro da circunferência circunscrita (passa pelos 3 vértices). No triângulo retângulo, o circuncentro coincide com o ponto médio da hipotenusa!
• Ortocentro (H): encontro das três alturas (ou seus prolongamentos).

3. Relações Métricas no Triângulo Retângulo:
Considere um triângulo retângulo com hipotenusa 'a', catetos 'b' e 'c', altura relativa à hipotenusa 'h', e projeções dos catetos 'm' (projeção de b) e 'n' (projeção de c), de modo que m + n = a:
• Teorema de Pitágoras: a² = b² + c².
• Produto hipotenusa-altura: a · h = b · c.
• Quadrado dos catetos: b² = a · m e c² = a · n.
• Altura relativa e projeções: h² = m · n.
• Ternos pitagóricos primitivos fundamentais: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17) e seus múltiplos inteiros.
`,
      workedExamples: [
        {
          problem: "Um poste vertical de iluminação pública de 12 metros de altura está instalado em um terreno plano. Um cabo de aço de sustentação foi fixado do topo do poste até uma estaca cravada no solo a 9 metros de distância da base do poste. Para reforçar a estrutura, instalou-se uma barra transversal perpendicular ao cabo que parte da base do poste até o cabo. Determine: (a) o comprimento total do cabo de sustentação; (b) a altura relativa da barra transversal.",
          solution: "Passo 1: O triângulo formado pelo poste, solo e cabo é retângulo. Os catetos medem c = 12 m e b = 9 m.\nPasso 2: Pelo Teorema de Pitágoras, a² = 12² + 9² = 144 + 81 = 225 ⟹ a = √225 = 15 m (múltiplo do terno 3-4-5 com fator 3).\nPasso 3: A barra transversal perpendicular ao cabo partindo do vértice reto corresponde exatamente à altura relativa à hipotenusa h.\nPasso 4: Aplicando a relação a · h = b · c:\n15 · h = 9 · 12 ⟹ 15h = 108 ⟹ h = 108 / 15 = 7,2 metros.\nResposta: O cabo mede 15 m e a barra mede 7,2 m."
        },
        {
          problem: "Uma rampa de acessibilidade tem perfil de triângulo retângulo com comprimento de rampa igual a 13 metros e desnível vertical de 5 metros. Um suporte vertical intermediário é colocado a uma distância da extremidade inferior correspondente à projeção do cateto horizontal sobre a rampa. Calcule a extensão horizontal da base da rampa e a projeção desse cateto.",
          solution: "Passo 1: Hipotenusa a = 13 m, cateto vertical c = 5 m. Pelo Teorema de Pitágoras: a² = b² + c² ⟹ 13² = b² + 5² ⟹ 169 - 25 = b² ⟹ b² = 144 ⟹ b = 12 m (extensão horizontal da base).\nPasso 2: Para achar a projeção m do cateto b sobre a hipotenusa a, usamos a relação métrica b² = a · m:\n144 = 13 · m ⟹ m = 144 / 13 ≈ 11,08 metros.\nResposta: A base mede 12 metros e a projeção mede aproximadamente 11,08 metros."
        }
      ],
      realWorldApplications: [
        "Engenharia estrutural: treliças de pontes e telhados utilizam triângulos porque é a única forma poligonal indeformável sob tensões de tração e compressão.",
        "Topografia e agrimensura: determinação de desníveis e distâncias inacessíveis por meio de triangulação geodésica."
      ],
      commonMisconceptions: [
        "Achar que em qualquer triângulo a altura divide a base ao meio: isso só ocorre em triângulos isósceles e equiláteros quando a altura parte do vértice comum.",
        "Confundir medianas (que dividem o lado oposto em duas metades) com bissetrizes (que dividem o ângulo em duas metades iguais)."
      ],
      quickReview: [
        "Condição de existência: |b - c| < a < b + c.",
        "Pitágoras: a² = b² + c²; Altura relativa: a · h = b · c e h² = m · n.",
        "Baricentro divide a mediana na proporção 2:1 a partir do vértice."
      ]
    },
    {
      chapterNumber: 2,
      title: "Semelhança de Figuras Planas e Relação entre Escalas (k e k²)",
      targetSkill: "H11, H12 — Interpretar e utilizar a proporcionalidade e razões de semelhança linear e superficial",
      practiceModuleId: "matematica/geometria-plana",
      deepContent: `
A semelhança de figuras geométricas é um dos tópicos mais frequentes e com maior índice de pegadinhas na prova de Matemática do ENEM.

1. Critérios de Semelhança de Triângulos:
Dois triângulos são semelhantes (ΔABC ~ ΔA'B'C') se, e somente se, seus ângulos correspondentes são congruentes e seus lados homólogos (opostos a ângulos congruentes) são proporcionais:
• Caso Ângulo-Ângulo (AA): se dois ângulos de um triângulo são congruentes a dois ângulos de outro, os triângulos são semelhantes.
• Caso Lado-Ângulo-Lado (LAL): se dois lados são proporcionais e o ângulo entre eles é congruente.
• Caso Lado-Lado-Lado (LLL): se os três pares de lados homólogos são proporcionais.
• Teorema Fundamental da Proporcionalidade: uma reta paralela a um dos lados de um triângulo que intercepta os outros dois lados determina um novo triângulo semelhante ao original.

2. Teorema de Tales:
Se um feixe de retas paralelas é cortado por duas retas transversais, os segmentos determinados sobre a primeira transversal são proporcionais aos segmentos correspondentes determinados sobre a segunda transversal:
  AB / BC = A'B' / B'C'.

3. A Relação Crucial de Escalas: Linear (k), Superficial (k²) e Volumétrica (k³):
Se a razão de semelhança linear entre duas figuras planas é k:
• Comprimentos homólogos (lados, alturas, perímetros, raios): L₁ / L₂ = k.
• Áreas de figuras semelhantes: A₁ / A₂ = k².
• Atenção máxima à pegadinha do ENEM: se você dobra todas as dimensões lineares de um lote ou mapa (fator linear k = 2), a sua área não dobra; ela é multiplicada por 2² = 4! Se a escala de uma planta baixa é 1:100 (k = 1/100), cada 1 cm² desenhado no papel representa (100)² = 10.000 cm² = 1 m² na realidade.
`,
      workedExamples: [
        {
          problem: "Um arquiteto projetou uma praça circular cuja área real é de 1.800 m². Na maquete arquitetônica da praça, construída na escala de redução 1:300, qual será a área ocupada pela representação dessa praça em centímetros quadrados?",
          solution: "Passo 1: A escala linear da maquete é k = 1 / 300.\nPasso 2: A razão entre as áreas é dada pelo quadrado da escala linear: k² = (1 / 300)² = 1 / 90.000.\nPasso 3: A área real da praça é A_real = 1.800 m². Convertendo para cm²:\n1 m² = 10.000 cm² ⟹ 1.800 m² = 1.800 · 10.000 = 18.000.000 cm².\nPasso 4: Calculando a área na maquete A_maq = A_real · k²:\nA_maq = 18.000.000 / 90.000 = 1.800 / 9 = 200 cm².\nResposta: A representação na maquete ocupará 200 cm²."
        },
        {
          problem: "Para estimar a altura de um edifício residencial sem aparelhos sofisticados, um estudante de 1,80 m de altura posicionou-se a 20 metros da base do prédio e observou que a sua própria sombra projetada no solo media 2,40 metros, terminando exatamente no mesmo ponto em que terminava a sombra projetada pelo topo do edifício. Qual é a altura do edifício?",
          solution: "Passo 1: Os raios solares incidem paralelamente, formando triângulos retângulos semelhantes entre o objeto e sua sombra.\nPasso 2: O estudante tem altura h = 1,80 m e sombra s = 2,40 m. O prédio tem altura H e sua sombra total é S = 20 m + 2,40 m = 22,40 m.\nPasso 3: Estabelecendo a proporção de semelhança:\nH / h = S / s ⟹ H / 1,80 = 22,40 / 2,40.\nPasso 4: Simplificando a razão 22,40 / 2,40 = 224 / 24 = 28 / 3:\nH = 1,80 · (28 / 3) = 0,60 · 28 = 16,80 metros.\nResposta: A altura do edifício é de 16,8 metros."
        }
      ],
      realWorldApplications: [
        "Cartografia e mapas: conversão de áreas medidas em fotos aéreas ou mapas para hectares e metros quadrados reais.",
        "Modelagem de protótipos industriais: ensaios em túneis de vento onde modelos em escala reduzida exigem correções quadráticas e cúbicas de forças de sustentação e arrasto."
      ],
      commonMisconceptions: [
        "Esquecer de elevar a escala linear ao quadrado ao calcular áreas em maquetes e mapas.",
        "Somar incorretamente o comprimento da sombra do objeto com a distância até o observador quando as sombras se sobrepõem."
      ],
      quickReview: [
        "Semelhança exige ângulos congruentes e lados proporcionais.",
        "Comprimentos variam com k; Áreas variam com k²; Volumes variam com k³.",
        "1 m² = 10.000 cm² = 100 dm²."
      ]
    },
    {
      chapterNumber: 3,
      title: "Polígonos Regulares, Ângulos e Ladrilhamento do Plano",
      targetSkill: "H6 — Identificar propriedades e relações geométricas entre polígonos regulares",
      practiceModuleId: "matematica/geometria-plana",
      deepContent: `
Polígonos regulares possuem todos os lados congruentes (equiláteros) e todos os ângulos internos congruentes (equiângulos).

1. Propriedades Angulares de Polígonos de n Lados:
• Número de diagonais de um polígono convexo: d = [n · (n - 3)] / 2.
• Soma dos ângulos internos: S_i = (n - 2) · 180°.
• Ângulo interno de um polígono regular: a_i = S_i / n = [(n - 2) · 180°] / n.
• Soma dos ângulos externos de qualquer polígono convexo: S_e = 360° (constante universal, independente de n!).
• Ângulo externo de um polígono regular: a_e = 360° / n.
• Relação elementar em cada vértice: a_i + a_e = 180°.

2. Tabela de Ângulos Internos Notáveis:
• Triângulo equilátero (n = 3): a_i = 60°.
• Quadrado (n = 4): a_i = 90°.
• Pentágono regular (n = 5): a_i = [(5-2)·180]/5 = 540°/5 = 108°.
• Hexágono regular (n = 6): a_i = [(6-2)·180]/6 = 720°/6 = 120°.
• Octógono regular (n = 8): a_i = [(8-2)·180]/8 = 1080°/8 = 135°.
• Dodecágono regular (n = 12): a_i = [(12-2)·180]/12 = 1800°/12 = 150°.

3. Teorema do Ladrilhamento (Pavimentação Regular do Plano):
Um dos temas conceituais mais belos e cobrados no ENEM: quando é possível cobrir uma superfície plana com peças idênticas de um único polígono regular sem deixar folgas, frestas ou sobreposições?
• Condição matemática: a soma dos ângulos internos dos polígonos que convergem em torno de um mesmo vértice comum deve somar exatamente 360°:
  k · a_i = 360°, onde k é um número inteiro positivo.
• Consequência: apenas polígonos regulares cujo ângulo interno é divisor exato de 360° podem ladrilhar o plano sozinhos:
  - Triângulo equilátero: a_i = 60° (360° / 60° = 6 peças por vértice).
  - Quadrado: a_i = 90° (360° / 90° = 4 peças por vértice).
  - Hexágono regular: a_i = 120° (360° / 120° = 3 peças por vértice).
• Pentágonos regulares NÃO ladrilham o plano sozinhos porque 360° / 108° = 3,33 (não é inteiro!). É por essa razão físico-matemática que os favos de mel das abelhas são hexagonais: o hexágono ladrilha o plano e, pelo Teorema Isoperimétrico, é a forma que maximiza a área com o menor perímetro de cera!
`,
      workedExamples: [
        {
          problem: "Uma cerâmica industrial projeta revestimentos para pisos residenciais. O designer deseja saber se é possível criar uma pavimentação periódica perfeita combinando octógonos regulares de lado L com quadrados de mesmo lado L. Verifique matematicamente se a junção em cada vértice permite cobrir o piso sem frestas ou sobreposições.",
          solution: "Passo 1: Ângulo interno do quadrado (n = 4): a_i(quadrado) = 90°.\nPasso 2: Ângulo interno do octógono regular (n = 8):\na_i(octógono) = [(8 - 2) · 180°] / 8 = 1.080° / 8 = 135°.\nPasso 3: Verificando a soma dos ângulos em torno de um vértice compartilhado por 2 octógonos e 1 quadrado:\nS = 135° + 135° + 90° = 270° + 90° = 360°.\nPasso 4: Como a soma totaliza rigorosamente 360°, a combinação é perfeitamente estável e não deixa nenhuma folga.\nResposta: Sim, é perfeitamente possível e consagra o clássico ladrilhamento semirregular arquimediano (4.8.8)."
        },
        {
          problem: "Um polígono convexo possui a soma de seus ângulos internos igual a 1.440°. Determine: (a) o número de lados desse polígono; (b) a quantidade total de diagonais que podem ser traçadas a partir de todos os seus vértices.",
          solution: "Passo 1: Pela fórmula da soma dos ângulos internos: S_i = (n - 2) · 180°.\n1.440° = (n - 2) · 180° ⟹ n - 2 = 1.440 / 180 = 8 ⟹ n = 10 lados (Decágono).\nPasso 2: O número total de diagonais é dado por d = [n · (n - 3)] / 2:\nd = [10 · (10 - 3)] / 2 = [10 · 7] / 2 = 70 / 2 = 35 diagonais.\nResposta: O polígono tem 10 lados e possui 35 diagonais."
        }
      ],
      realWorldApplications: [
        "Biologia evolutiva: arquitetura dos favos de mel nas colmeias (otimização de área com mínimo gasto de cera pela geometria hexagonal).",
        "Engenharia de materiais e nanotecnologia: estrutura cristalina do grafeno, arranjo bidimensional monoatômico de carbono em rede hexagonal ultra-resistente."
      ],
      commonMisconceptions: [
        "Supor que qualquer polígono esteticamente simétrico (como o pentágono regular) consegue fechar o plano sem deixar buracos.",
        "Confundir o número total de diagonais d = n(n-3)/2 com o número de diagonais que partem de um único vértice, que é apenas (n - 3)."
      ],
      quickReview: [
        "Soma interna: S_i = (n - 2) · 180°; Soma externa: S_e = 360° sempre.",
        "Diagonais: d = n(n - 3) / 2.",
        "Apenas triângulos equiláteros, quadrados e hexágonos regulares ladrilham o plano sozinhos."
      ]
    },
    {
      chapterNumber: 4,
      title: "Áreas de Figuras Planas e Regiões Circulares",
      targetSkill: "H7, H8 — Calcular áreas de superfícies poligonais e circulares em problemas contextualizados",
      practiceModuleId: "matematica/geometria-plana",
      deepContent: `
O cálculo de áreas é o carro-chefe da Geometria no ENEM, correspondendo frequentemente ao dimensionamento de pisos, plantios agrícolas, painéis solares e tecidos industriais.

1. Fórmulas de Áreas de Triângulos:
• Fórmula básica: A = (base · altura) / 2.
• Triângulo Equilátero de lado L: A = (L²√3) / 4.
• Fórmula Trigonométrica (quando se conhecem dois lados e o ângulo entre eles): A = (a · b · sen θ) / 2.
• Fórmula de Heron (quando se conhecem os três lados a, b, c):
  A = √[p · (p - a) · (p - b) · (p - c)], onde p = (a + b + c) / 2 é o semiperímetro.
• Em função do raio inscrito r: A = p · r.
• Em função do raio circunscrito R: A = (a · b · c) / (4R).

2. Áreas de Quadriláteros Notáveis:
• Retângulo: A = base · altura.
• Quadrado: A = L² = (diagonal²) / 2.
• Paralelogramo: A = base · altura = a · b · sen θ.
• Trapézio: A = [(Base Maior + Base menor) · altura] / 2.
• Losango: A = (Diagonal Maior · diagonal menor) / 2.

3. Áreas de Polígonos Regulares:
• Qualquer polígono regular pode ser decomposto em n triângulos isósceles que convergem no centro:
  A = semiperímetro · apótema (A = p · a_p).
• Hexágono Regular de lado L: é formado por 6 triângulos equiláteros idênticos:
  A = 6 · [(L²√3) / 4] = (3L²√3) / 2.

4. Círculo e Regiões Circulares:
• Comprimento da circunferência: C = 2πr.
• Área do Círculo: A = π · r².
• Setor Circular (fatia de pizza de ângulo central α em graus):
  A_setor = (α / 360°) · πr² ou A_setor = (L_arco · r) / 2.
• Coroa Circular (entre dois círculos concêntricos de raios R e r):
  A_coroa = π · (R² - r²).
• Segmento Circular: área do setor menos a área do triângulo central:
  A_seg = A_setor - A_triângulo = (α/360°)·πr² - (r² · sen α)/2.
`,
      workedExamples: [
        {
          problem: "Um agricultor familiar possui uma horta em formato de trapézio retângulo cujas bases medem 30 metros e 18 metros, e a altura mede 16 metros. Ele planeja cobrir toda a superfície da horta com adubo orgânico na proporção de 2,5 kg por metro quadrado. Se cada saca de adubo contém 40 kg, qual é a quantidade mínima de sacas que ele precisará adquirir?",
          solution: "Passo 1: Calcular a área da horta trapezoidal:\nA = [(Base Maior + Base menor) · h] / 2 = [(30 + 18) · 16] / 2 = [48 · 16] / 2 = 48 · 8 = 384 m².\nPasso 2: Calcular a massa total de adubo necessária:\nMassa = 384 m² · 2,5 kg/m² = 960 kg de adubo.\nPasso 3: Determinar o número de sacas:\nNº de sacas = 960 / 40 = 24 sacas exatas.\nResposta: O agricultor precisará de no mínimo 24 sacas de adubo."
        },
        {
          problem: "Em uma praça pública, um canteiro central circular de raio R = 6 metros possui um chafariz no centro de raio r = 2 metros. A região entre a borda do chafariz e a borda da praça será gramada com placas de grama que custam R$ 15,00 o metro quadrado. Adotando π = 3,14, qual será o custo total da grama para cobrir essa região?",
          solution: "Passo 1: A região a ser gramada é uma coroa circular de raio maior R = 6 m e raio menor r = 2 m.\nPasso 2: A área da coroa circular é A = π · (R² - r²):\nA = 3,14 · (6² - 2²) = 3,14 · (36 - 4) = 3,14 · 32 = 100,48 m².\nPasso 3: Calculando o custo financeiro:\nCusto = 100,48 m² · R$ 15,00/m² = R$ 1.507,20.\nResposta: O custo total para gramar a coroa circular será de R$ 1.507,20."
        }
      ],
      realWorldApplications: [
        "Agricultura de precisão: dimensionamento de pivôs centrais de irrigação por setores circulares e cálculo de produtividade por hectare.",
        "Energia fotovoltaica: cálculo da área útil de telhados para acomodação de módulos solares fotovoltaicos retangulares."
      ],
      commonMisconceptions: [
        "Calcular a coroa circular fazendo π(R - r)² em vez de π(R² - r²): lembre-se que (R - r)² ≠ R² - r²!",
        "Esquecer de converter todas as medidas lineares para a mesma unidade antes de calcular a área (por exemplo, misturar metros com centímetros)."
      ],
      quickReview: [
        "Triângulo equilátero: A = (L²√3) / 4; Hexágono: A = (3L²√3) / 2.",
        "Círculo: A = πr²; Setor: (α/360°)·πr²; Coroa: π(R² - r²).",
        "Trapézio: [(B + b)·h]/2; Losango: (D·d)/2."
      ]
    },
    {
      chapterNumber: 5,
      title: "Trigonometria e Modelagem de Fenômenos Periódicos",
      targetSkill: "H19, H20, H21 — Utilizar razões trigonométricas e modelar funções periódicas em contextos reais",
      practiceModuleId: "matematica/trigonometria",
      deepContent: `
A Trigonometria estuda as relações entre as medidas angulares e lineares, expandindo-se do triângulo retângulo para o ciclo trigonométrico e a análise de ondas e ciclos naturais.

1. Razões Trigonométricas no Triângulo Retângulo:
Para um ângulo agudo θ em triângulo retângulo:
• Seno: sen θ = Cateto Oposto / Hipotenusa.
• Cosseno: cos θ = Cateto Adjacente / Hipotenusa.
• Tangente: tg θ = Cateto Oposto / Cateto Adjacente = sen θ / cos θ.
• Valores dos ângulos notáveis (30°, 45°, 60°):
  - sen 30° = 1/2; sen 45° = √2/2; sen 60° = √3/2.
  - cos 30° = √3/2; cos 45° = √2/2; cos 60° = 1/2.
  - tg 30° = √3/3; tg 45° = 1; tg 60° = √3.

2. Leis dos Triângulos Quaisquer (Oblíquos):
• Lei dos Senos: em qualquer triângulo ABC circunscrito a uma circunferência de raio R:
  a / sen Â = b / sen B̂ = c / sen Ĉ = 2R.
• Lei dos Cossenos: o quadrado de um lado é igual à soma dos quadrados dos outros dois menos o dobro do produto deles pelo cosseno do ângulo entre eles:
  a² = b² + c² - 2 · b · c · cos Â.
• Dica de identificação no ENEM: use a Lei dos Senos quando o problema fornecer 2 ângulos e 1 lado; use a Lei dos Cossenos quando o problema fornecer 2 lados e o ângulo entre eles (ou os 3 lados para achar um ângulo).

3. Funções Trigonométricas Periódicas e Modelagem no ENEM:
Muitos fenômenos físicos e biológicos são cíclicos: oscilação de marés oceânicas, temperatura média ao longo do ano, luminosidade diária e pressão arterial sistólica/diastólica.
• Forma canônica geral: f(t) = A + B · sen(C · t + D) ou f(t) = A + B · cos(C · t + D).
• Significado dos parâmetros:
  - A (Eixo Médio / Linha de Base): valor central em torno do qual a função oscila: A = (Y_máx + Y_mín) / 2.
  - |B| (Amplitude): a distância do eixo médio até os picos: |B| = (Y_máx - Y_mín) / 2.
  - C (Frequência Angular / Pulsação): determina o Período T da oscilação pela relação fundamental:
    Período T = 2π / |C| ⟹ C = 2π / T.
  - D (Deslocamento Horizontal / Fase): translada a curva no tempo.
• Imagem da função: Im = [A - |B|, A + |B|]. O valor máximo é A + |B| e o valor mínimo é A - |B|.
`,
      workedExamples: [
        {
          problem: "A altura da maré H (em metros) em determinado porto marítimo comercial é modelada ao longo das 24 horas de um dia pela função H(t) = 4 + 2 · cos[(π · t) / 6], em que t representa o tempo decorrido em horas a partir da meia-noite (0 ≤ t ≤ 24). Determine: (a) a altura máxima e a altura mínima atingidas pela maré; (b) o período completo entre duas marés altas consecutivas.",
          solution: "Passo 1: A função é da forma H(t) = A + B · cos(C · t), com A = 4, B = 2 e C = π/6.\nPasso 2: A função cosseno varia estritamente no intervalo [-1, 1].\n- Altura Máxima (quando cos = +1): H_máx = 4 + 2 · (1) = 6 metros.\n- Altura Mínima (quando cos = -1): H_mín = 4 + 2 · (-1) = 2 metros.\nPasso 3: O período T é dado por T = 2π / C:\nT = 2π / (π / 6) = 2π · (6 / π) = 12 horas.\nResposta: A maré varia entre 2 m e 6 m, com período de 12 horas."
        },
        {
          problem: "Em um terreno triangular, dois lados adjacentes medem 10 metros e 16 metros, e formam entre si um ângulo de 60°. Para cercar o terceiro lado com arame, qual é o comprimento exato desse terceiro lado? (Dado: cos 60° = 1/2).",
          solution: "Passo 1: Temos dois lados conhecidos (b = 10 m, c = 16 m) e o ângulo formado entre eles (Â = 60°). Aplicamos a Lei dos Cossenos:\na² = b² + c² - 2bc · cos 60°.\nPasso 2: Substituindo os valores:\na² = 10² + 16² - 2 · 10 · 16 · (1/2)\na² = 100 + 256 - 160 = 356 - 160 = 196.\nPasso 3: Extraindo a raiz quadrada: a = √196 = 14 metros.\nResposta: O terceiro lado mede exatamente 14 metros."
        }
      ],
      realWorldApplications: [
        "Cardiologia e medicina: análise do traçado de eletrocardiograma (ECG) e modelagem de ciclos cardíacos.",
        "Oceanografia e hidrologia: previsão das tábuas de marés oceânicas e dimensionamento de calados portuários."
      ],
      commonMisconceptions: [
        "Esquecer o sinal negativo na Lei dos Cossenos: a² = b² + c² - 2bc cos Â (e não + 2bc cos Â).",
        "Confundir o Período T com o coeficiente C: Período é T = 2π / C, logo quanto maior C, menor e mais rápida é a oscilação!"
      ],
      quickReview: [
        "Triângulo retângulo: sen = O/H, cos = A/H, tg = O/A.",
        "Lei dos Senos: a/sen Â = b/sen B̂ = 2R; Lei dos Cossenos: a² = b² + c² - 2bc cos Â.",
        "Modelo periódico: f(t) = A + B sen(Ct); Período T = 2π/C; Média A; Amplitude |B|."
      ]
    }
  ]
};
