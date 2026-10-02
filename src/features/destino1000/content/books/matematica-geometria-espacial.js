/**
 * LIVRO DIDÁTICO DIGITAL: Geometria Espacial Métrica e Projeções Ortogonais no ENEM
 * Área: Matemática e suas Tecnologias
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_MATEMATICA_GEOMETRIA_ESPACIAL = {
  id: "livro-matematica-geometria-espacial",
  area: "matematica",
  title: "Geometria Espacial Métrica e Vistas Ortogonais",
  subtitle: "Cálculo de volumes, áreas e raciocínio visual tridimensional no ENEM",
  estimatedReadingTimeMinutes: 55,
  badge: "Livro Essencial • Geometria Espacial",
  coverColor: "from-blue-950 to-indigo-900",
  prerequisites: [
    "Geometria plana: áreas de triângulos, retângulos, círculos e hexágonos",
    "Teorema de Pitágoras e relações métricas no triângulo retângulo",
    "Razões, proporções e semelhança geométrica de figuras planas"
  ],
  learningObjectives: [
    "Dominar o cálculo de volumes e áreas totais de prismas, cilindros, pirâmides e cones",
    "Efetuar conversões diretas de unidades métricas de volume e capacidade (m³, dm³, cm³ e litros)",
    "Calcular seções planas e volumes de esferas e troncos de sólidos",
    "Desenvolver acuidade visual espacial para identificar projeções ortogonais e vistas (H8 e H9 da matriz do ENEM)",
    "Resolver problemas aplicados de dimensionamento de caixas d'água, reservatórios e embalagens comerciais"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "Poliedros, Prismas e Cilindros: Volumes e Capacidade",
      targetSkill: "H8, H9 — Calcular volumes e áreas de sólidos retos e efetuar conversões de medidas",
      practiceModuleId: "matematica/geometria",
      deepContent: `
A Geometria Espacial estuda as formas e medidas no espaço tridimensional ℝ³.

1. Poliedros Convexos e Relação de Euler:
• Poliedro: sólido delimitado por faces poligonais planas cujas arestas são lados comuns de duas faces.
• Teorema de Euler: para todo poliedro convexo vale a relação:
  V - A + F = 2 (Vértices - Arestas + Faces = 2).
• Soma dos ângulos de todas as faces: S = (V - 2) · 360°.

2. Prismas Retos:
• Um prisma é reto quando as arestas laterais são perpendiculares aos planos das bases paralelas congruentes.
• Área Lateral: A_L = Perímetro da Base · h.
• Área Total: A_T = A_L + 2 · A_Base.
• Volume: V = A_Base · h.
• Casos Especiais Recorrentes no ENEM:
  - Paralelepípedo Retângulo (dimensões a, b, c):
    - Volume: V = a · b · c.
    - Área Total: A_T = 2(ab + ac + bc).
    - Diagonal interna: D = √(a² + b² + c²).
  - Cubo (aresta a):
    - Volume: V = a³.
    - Área Total: A_T = 6a².
    - Diagonal interna: D = a√3.
  - Prisma Triangular Regular (base triângulo equilátero de lado L):
    - A_Base = (L²√3) / 4.
    - Volume: V = [(L²√3) / 4] · h.
  - Prisma Hexagonal Regular (base hexágono regular de lado L):
    - A_Base = 6 · [(L²√3) / 4] = (3L²√3) / 2.

3. Cilindro Reto (Cilindro de Revolução):
• Gerado pela rotação completa de um retângulo de lados r e h em torno de um de seus eixos.
• Área da Base: A_Base = π · r².
• Área Lateral: planificada é um retângulo de dimensões (2πr) por h: A_L = 2π · r · h.
• Área Total: A_T = 2πr · h + 2(πr²) = 2πr(h + r).
• Volume: V = A_Base · h = π · r² · h.
• Cilindro Equilátero: cilindro cuja altura é rigorosamente igual ao diâmetro da base (h = 2r).

4. Conversão Crítica de Unidades de Capacidade (Ouro do ENEM):
• 1 m³ = 1.000 dm³ = 1.000 Litros (L).
• 1 dm³ = 1 Litro (L) = 1.000 mililitros (mL).
• 1 cm³ = 1 mililitro (mL) = 10⁻³ Litros.
• Erro fatal frequente: esquecer que elevar unidades de comprimento ao cubo multiplica o fator de conversão por 10³ (1 m = 100 cm  ⇒  1 m³ = 100³ cm³ = 1.000.000 cm³).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 1: Dimensionamento de Reservatório Cilíndrico e Vazão",
          enunciado: "Um hospital projeta um reservatório cilíndrico reto de água para suprir sua ala de hemodiálise. O reservatório tem raio interno da base r = 2,0 m e altura útil h = 5,0 m. Adote π ≈ 3,14. Determine o volume total em metros cúbicos e a capacidade máxima de armazenamento em litros desse reservatório.",
          stepByStep: [
            "Passo 1: Calcular a área da base circular:",
            "A_base = π · r² = 3,14 · (2,0)² = 3,14 · 4,0 = 12,56 m².",
            "Passo 2: Calcular o volume em metros cúbicos:",
            "V = A_base · h = 12,56 · 5,0 = 62,8 m³.",
            "Passo 3: Converter metros cúbicos para litros:",
            "Sabendo que 1 m³ = 1.000 Litros:",
            "Capacidade = 62,8 · 1.000 = 62.800 Litros.",
            "Conclusão: o reservatório comporta 62.800 litros de água potável."
          ],
          gabarito: "62,8 m³ (ou 62.800 Litros)."
        }
      ],
      realWorldApplications: [
        "Dimensionamento de caixas d'água residenciais e cisternas de captação de água da chuva no semiárido.",
        "Embalagens industriais de sucos e leites (formato Tetra Pak) otimizando a relação entre área de papelão e volume interno.",
        "Cálculo de dosagem de medicamentos em frascos cilíndricos e seringas graduadas milimétricas."
      ],
      commonMisconceptions: [
        "Esquecer de elevar o raio ao quadrado na fórmula do volume do cilindro (V = π·r²·h).",
        "Achar que 1 m³ é igual a 100 litros (1 m³ é rigorosamente 1.000 litros)."
      ],
      quickReviewPoints: [
        "Euler: V - A + F = 2.",
        "Prisma: V = A_Base · h.",
        "Cilindro: V = π · r² · h.",
        "1 m³ = 1.000 Litros; 1 dm³ = 1 Litro; 1 cm³ = 1 mL.",
        "Diagonal do paralelepípedo: D = √(a² + b² + c²)."
      ]
    },
    {
      chapterNumber: 2,
      title: "Pirâmides e Cones: Vértices e Fração de Volume",
      targetSkill: "H8, H9 — Relacionar sólidos pontiagudos com prismas e calcular áreas laterais",
      practiceModuleId: "matematica/geometria",
      deepContent: `
Tanto pirâmides quanto cones são sólidos que convergem suas geratrizes ou arestas para um único ponto superior: o vértice.
Essa convergência geométrica faz com que seu volume seja exatamente um terço (1/3) do volume do prisma ou cilindro de mesma base e mesma altura!

1. Pirâmide Regular:
• A base é um polígono regular e a projeção ortogonal do vértice coincide exatamente com o centro da base.
• Relações Métricas no Triângulo Retângulo Interno:
  - h: altura da pirâmide.
  - m: apótema da base (distância do centro da base ao ponto médio do lado).
  - g (ou a_p): apótema da pirâmide (altura da face lateral triangular).
  - Teorema de Pitágoras no triângulo característico: g² = h² + m².
• Área Total: A_T = A_Base + A_Lateral (onde A_Lateral é a soma das áreas dos triângulos isósceles laterais).
• Volume: V = (1/3) · A_Base · h.
• Tetraedro Regular: pirâmide triangular formada por 4 triângulos equiláteros congruentes de aresta 'a':
  - Altura: h = a√(6) / 3.
  - Área Total: A_T = 4 · [(a²√3) / 4] = a²√3.
  - Volume: V = (a³√2) / 12.

2. Cone Circular Reto:
• Formado pela rotação de um triângulo retângulo em torno de um de seus catetos.
• Relação Pitagórica Fundamental da Geratriz:
  - g² = h² + r², onde g é a geratriz, h é a altura e r é o raio da base circular.
• Planificação da Superfície Lateral:
  - A superfície lateral aberta é um SETOR CIRCULAR de raio g e comprimento de arco igual ao perímetro da base (2πr).
  - Ângulo central do setor em radianos: θ = 2π · (r / g).
  - Área Lateral: A_L = π · r · g.
• Área Total: A_T = A_Base + A_L = πr² + πrg = πr(g + r).
• Volume: V = (1/3) · π · r² · h.
• Cone Equilátero: cone cuja secção meridiana é um triângulo equilátero, de modo que g = 2r e h = r√3.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 2: Cálculo de Volume de Silo em Formato Cônico",
          enunciado: "Um produtor rural armazena grãos de soja em um silo cônico de base circular com diâmetro de 6,0 m e altura de 4,0 m. Adotando π ≈ 3, o volume útil de grãos suportado por esse silo em metros cúbicos e a medida de sua geratriz g valem, respectivamente:",
          stepByStep: [
            "Passo 1: Determinar o raio da base circular:",
            "Diâmetro = 6,0 m  ⇒  Raio r = 6,0 / 2 = 3,0 m.",
            "Passo 2: Calcular a geratriz g por Pitágoras no triângulo retângulo (r, h, g):",
            "g² = r² + h² = (3,0)² + (4,0)² = 9 + 16 = 25.",
            "g = √25 = 5,0 m (triângulo pitagórico 3-4-5).",
            "Passo 3: Calcular o volume cônico:",
            "V = (1/3) · π · r² · h.",
            "Substituindo π = 3, r = 3 e h = 4:",
            "V = (1/3) · 3 · (3)² · 4 = 1 · 9 · 4 = 36 m³.",
            "Conclusão: o volume é de 36 m³ e a geratriz mede 5,0 m."
          ],
          gabarito: "36 m³ e geratriz de 5,0 m."
        }
      ],
      realWorldApplications: [
        "Cálculo de volume de pilhas de minério e areia estocadas ao ar livre que assumem conformação cônica natural devido ao ângulo de repouso.",
        "Casquinhas de sorvete, funis de laboratório químico e chapéus festivos cônicos.",
        "Telhados e cúpulas piramidais de igrejas e monumentos arquitetônicos."
      ],
      commonMisconceptions: [
        "Esquecer de dividir por 3 no cálculo de volume de pirâmides e cones (lembrar: se tem ponta, divide por 3!).",
        "Confundir o raio com o diâmetro da base circular."
      ],
      quickReviewPoints: [
        "Pirâmides e Cones têm volume V = (1/3) · A_Base · h.",
        "Cone: geratriz g² = h² + r².",
        "Área lateral do cone: A_L = π · r · g.",
        "Tetraedro regular: 4 faces de triângulos equiláteros."
      ]
    },
    {
      chapterNumber: 3,
      title: "A Esfera, Seções Planas e Troncos de Sólidos",
      targetSkill: "H8, H9 — Analisar sólidos de revolução esféricos e cortes secantes",
      practiceModuleId: "matematica/geometria",
      deepContent: `
A esfera é o sólido de simetria máxima no espaço, definido como o conjunto de todos os pontos distantes no máximo R de um centro fixo.

1. Fórmulas Fundamentais da Esfera:
• Área da Superfície Esférica:
  A = 4 · π · R².
  (Curiosidade visual: a área da esfera equivale exatamente à área de 4 círculos máximos de mesmo raio!).
• Volume da Esfera:
  V = (4/3) · π · R³.
• Fuso e Cunha Esférica:
  - Fuso esférico: porção da superfície da casca esférica delimitada por dois meridianos (área proporcional ao ângulo diedro α).
  - Cunha esférica: sólido delimitado como uma 'fatia de melancia' (volume proporcional ao ângulo diedro α):
    V_cunha = [(4/3)πR³ · α] / 360°.

2. Seção Plana de uma Esfera:
• Toda seção plana obtida pelo corte de uma esfera por um plano secante a uma distância d do centro é rigorosamente um CÍRCULO de raio menor r.
• Relação Métrica Fundamental de Pitágoras na Seção:
  R² = d² + r², onde:
  - R: raio da esfera.
  - d: distância do centro da esfera ao plano secante (0 ≤ d < R).
  - r: raio do círculo da seção obtida.
• Se d = 0: o plano passa pelo centro da esfera, gerando o Círculo Máximo (r = R).

3. Troncos de Sólidos (Cortes Paralelos à Base):
• Quando se corta uma pirâmide ou cone por um plano paralelo à base a uma distância h do vértice:
  - Obtém-se um sólido menor semelhante no topo e um TRONCO embaixo.
  - Razão de semelhança linear (k): k = h_pequeno / H_grande = r / R.
  - Razão entre áreas: (A_pequena / A_grande) = k².
  - Razão entre volumes: (V_pequeno / V_grande) = k³.
• Volume do Tronco de Cone ou Pirâmide:
  V_tronco = (h_tronco / 3) · [A_B + √(A_B · A_b) + A_b],
  onde A_B é a área da base maior e A_b é a área da base menor.
  - Para tronco de cone com raios R e r:
    V_tronco = (π · h / 3) · (R² + R·r + r²).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 3: Cálculo de Seção Plana Esférica",
          enunciado: "Uma esfera metálica maciça de raio R = 10 cm é seccionada por uma serra de fita em um plano que dista d = 6 cm de seu centro. Calcule o raio r do círculo seccionado e a área dessa seção circular em cm² (use π ≈ 3,14).",
          stepByStep: [
            "Passo 1: Aplicar o Teorema de Pitágoras que relaciona o raio da esfera, a distância ao plano e o raio da seção:",
            "R² = d² + r².",
            "Passo 2: Substituir os valores fornecidos:",
            "(10)² = (6)² + r²  ⇒  100 = 36 + r².",
            "r² = 100 - 36 = 64  ⇒  r = √64 = 8 cm.",
            "Passo 3: Calcular a área da seção circular plana obtida:",
            "A_seção = π · r² = 3,14 · (8)² = 3,14 · 64 = 200,96 cm².",
            "Conclusão: o raio do círculo de corte é 8 cm e sua área é 200,96 cm²."
          ],
          gabarito: "Raio r = 8 cm e área = 200,96 cm²."
        }
      ],
      realWorldApplications: [
        "Cálculo de capacidade volumétrica de reservatórios e caminhões-tanque esféricos para armazenamento de gás GLP sob alta pressão.",
        "Modelagem da Terra como esfera geodésica simplificada para cálculo de coordenadas de latitude e círculos polares.",
        "Dimensionamento de baldes industriais, bacias cônicas e formas de bolo com formato de tronco de cone."
      ],
      commonMisconceptions: [
        "Confundir a fórmula da área da superfície esférica (4πR²) com a fórmula do volume (4/3 πR³).",
        "Achar que ao duplicar as dimensões de um sólido seu volume apenas dobra: se as dimensões lineares dobram (k = 2), o volume multiplica-se por 2³ = 8 vezes!"
      ],
      quickReviewPoints: [
        "Esfera: Área = 4πR² e Volume = (4/3)πR³.",
        "Seção plana esférica: R² = d² + r² (Pitágoras).",
        "Razão entre volumes de sólidos semelhantes: V₁ / V₂ = k³.",
        "Volume de balde/tronco de cone: V = (πh/3)(R² + Rr + r²)."
      ]
    },
    {
      chapterNumber: 4,
      title: "Vistas Ortogonais, Perspectivas e Projeções Espaciais no ENEM",
      targetSkill: "H8, H9 — Interpretar representações bidimensionais de objetos tridimensionais",
      practiceModuleId: "matematica/geometria",
      deepContent: `
As questões de Vistas Ortogonais e Projeções Geométricas constituem um dos tópicos mais frequentes e com maior índice de acerto da prova de Matemática do ENEM (habilidades H8 e H9 da Matriz de Referência).

1. O Conceito de Projeção Ortogonal:
• Projeção Ortogonal de um Ponto: é o ponto P' obtido pela interseção da reta que passa por P e é perpendicular (faz ângulo de 90°) ao plano de projeção α.
• Projeção Ortogonal de um Segmento de Reta:
  - Se o segmento for paralelo ao plano: sua projeção tem o mesmo comprimento.
  - Se for oblíquo: sua projeção é um segmento mais curto (comprimento = L · cos θ).
  - Se for perpendicular ao plano: sua projeção ortogonal reduz-se a um ÚNICO PONTO.
• Projeção de Trajetórias (Itinerários Espaciais no ENEM):
  - Um ponto que se desloca ao longo da superfície lateral de um cilindro em trajetória espiral helicoidal projeta-se sobre o plano da base como uma CIRCUNFERÊNCIA (ou arco de circunferência).
  - Sobre um plano lateral vertical, a hélice projeta-se como uma oscilação senoidal/cossenoidal (zigue-zague contínuo).

2. O Sistema Mongeano e as Três Vistas Principais:
Na engenharia e no desenho técnico, um objeto tridimensional é plenamente caracterizado por três vistas ortogonais:
• Vista Frontal (ou Elevação): o observador olha o objeto exatamente de frente no plano vertical.
• Vista Superior (ou Planta Baixa): o observador olha o objeto rigorosamente de cima para baixo no plano horizontal.
• Vista Lateral Esquerda (ou Perfil): o observador olha o objeto a partir da sua lateral esquerda.

3. Raciocínio de Linhas Ocultas e Arestas Invisíveis:
• Arestas visíveis ao observador: traçadas com linha contínua cheia.
• Arestas existentes no interior ou na face traseira do sólido: traçadas com linha tracejada pontilhada.
• No ENEM, questões clássicas envolvem blocos formados por cubos empilhados:
  - Contar quantos cubos faltam para completar um paralelepípedo maior.
  - Determinar a silhueta da sombra projetada no chão ao meio-dia (raios solares paralelos verticais vindos do infinito: projeção ortogonal exata da vista superior).
  - Determinar a sombra projetada por uma lâmpada pontual (projeção cônica com ampliação proporcional à distância).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido 4: Projeção de Trajetória Espiral em Cilindro",
          enunciado: "Uma formiga sobe pela superfície lateral externa de uma lata de refrigerante em formato de cilindro circular reto. Ela parte de um ponto na borda inferior da base e sobe dando exatamente duas voltas completas contínuas em torno da lata até alcançar a borda superior. Qual é a figura geométrica correspondente à projeção ortogonal da trajetória da formiga sobre o plano horizontal da base da lata?",
          stepByStep: [
            "Passo 1: Compreender o movimento espacial tridimensional:",
            "A formiga realiza um movimento composto: sobe verticalmente em z enquanto gira em torno do eixo central nos eixos x e y (hélice cilíndrica).",
            "Passo 2: Entender a projeção ortogonal sobre o plano da base:",
            "Projetar ortogonalmente sobre o plano horizontal significa 'anular' a coordenada de altura z (olhar estritamente de cima).",
            "Passo 3: Analisar as coordenadas horizontais:",
            "Como a formiga caminha sempre pela casca cilíndrica externa, a distância do ponto ao eixo central é constantemente igual ao raio r do cilindro.",
            "Ao dar duas voltas completas ao redor da lata, suas posições projetadas percorrem duas vezes todos os pontos situados à distância r do centro.",
            "Passo 4: Conclusão:",
            "A figura resultante sobre o plano da base é uma única CIRCUNFERÊNCIA de raio r (percorrida duas vezes).",
            "Se fosse a projeção da lata inteira seria um círculo; a trajetória da linha é apenas a circunferência da borda."
          ],
          gabarito: "Uma circunferência congruente à base do cilindro."
        }
      ],
      realWorldApplications: [
        "Plantas baixas de arquitetura e cortes estruturais utilizados por engenheiros na construção civil.",
        "Modelagem tridimensional computacional (CAD/BIM) para impressão 3D de próteses ortopédicas.",
        "Navegação por radares aéreos e satélites que projetam mapas bidimensionais a partir de relevos terrestres montanhosos."
      ],
      commonMisconceptions: [
        "Confundir a vista superior com a vista frontal do sólido.",
        "Achar que a projeção de uma linha curva tridimensional é sempre uma linha curva (uma reta perpendicular ao plano projeta-se como um simples ponto)."
      ],
      quickReviewPoints: [
        "Projeção ortogonal faz ângulo reto (90°) com o plano.",
        "Segmento perpendicular ao plano projeta-se como um ponto.",
        "Vista superior = olhar de cima para baixo (planta baixa).",
        "Vista frontal = olhar reto de frente.",
        "Hélice cilíndrica projeta-se na base como uma circunferência."
      ]
    }
  ]
};
