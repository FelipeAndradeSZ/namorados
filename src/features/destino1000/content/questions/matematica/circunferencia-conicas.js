/**
 * BANCO DE QUESTÕES ENEM: Circunferência, Posições Relativas e Cônicas na Geometria Analítica
 * Área: Matemática e suas Tecnologias
 * Disciplina: Matemática (Geometria Analítica e Modelagem Espacial)
 * Quantidade: 25 Questões Inéditas de Alta Fidelidade ENEM (MAT-CIR-001 a MAT-CIR-025)
 * Regra Estrita: ZERO termos de deslocamento turístico. Foco em telecomunicações, radares, sismologia, óptica astronômica e engenharia.
 */

export const QUESTIONS_CIRCUNFERENCIA_CONICAS = [
  {
    id: "MAT-CIR-001",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Equação Reduzida da Circunferência e Cobertura de Sinal Celular",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma operadora de telefonia móvel instalou uma torre transmissora de sinal 5G no ponto central de um distrito industrial. No plano cartesiano da prefeitura, com eixos graduados em quilômetros, a torre está localizada nas coordenadas $C(4, -1)$ e emite sinal eletromagnético com raio de alcance uniforme de $R = 5\\text{ km}$. Uma unidade fabril está localizada no ponto $P(7, 3)$.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar: Geometria Analítica. São Paulo: Atual, 2019."
    },
    prompt: "Com base na equação da circunferência que delimita a fronteira do sinal, a distância euclidiana da fábrica até a torre e a condição de cobertura celular dessa unidade são, respectivamente,",
    options: [
      {
        id: "a",
        text: "5 km, situando-se exatamente sobre a linha limite de alcance do sinal.",
        isCorrect: true,
        distractorRationale: "Correto: A distância d entre a fábrica P(7, 3) e o centro da torre C(4, -1) é dada por d = √[(7 - 4)² + (3 - (-1))²] = √[3² + 4²] = √[9 + 16] = √25 = 5 km. Como a distância é rigorosamente igual ao raio R = 5 km, o ponto satisfaz a equação da circunferência (x - 4)² + (y + 1)² = 25 e localiza-se exatamente sobre a fronteira de cobertura."
      },
      {
        id: "b",
        text: "7 km, situando-se fora da zona de alcance do sinal da torre.",
        isCorrect: false,
        distractorRationale: "Soma diretamente as coordenadas ou calcula 3 + 4 = 7 sem extrair a raiz da soma dos quadrados."
      },
      {
        id: "c",
        text: "4 km, situando-se confortavelmente no interior da área de cobertura.",
        isCorrect: false,
        distractorRationale: "Estima 4 km por confusão com a diferença entre as ordenadas (3 - (-1) = 4)."
      },
      {
        id: "d",
        text: "25 km, situando-se muito além do alcance da antena.",
        isCorrect: false,
        distractorRationale: "Esquece de extrair a raiz quadrada de d² = 25, confundindo a distância linear com o quadrado da distância."
      },
      {
        id: "e",
        text: "√7 km, situando-se no interior da área de cobertura.",
        isCorrect: false,
        distractorRationale: "Subtrai os quadrados em vez de somar: 16 - 9 = 7, obtendo √7."
      }
    ],
    detailedExplanation: {
      summary: "A distância entre C(4, -1) e P(7, 3) é d = √[(7-4)² + (3+1)²] = 5 km, exatamente igual ao raio R = 5 km, ficando na fronteira de alcance.",
      stepByStep: [
        "1. Identificar o centro C(a, b) = (4, -1) e o raio R = 5.",
        "2. Equação da circunferência de alcance: (x - 4)² + (y + 1)² = 5² = 25.",
        "3. Calcular a distância do ponto P(7, 3) ao centro: d² = (7 - 4)² + (3 - (-1))² = 3² + 4² = 9 + 16 = 25.",
        "4. Extrair a raiz: d = √25 = 5 km.",
        "5. Como d = R = 5 km, o ponto está exatamente na fronteira da área circular de cobertura."
      ],
      coreConcept: "A equação da circunferência (x - a)² + (y - b)² = R² define os pontos a uma distância constante R do centro (a, b).",
      trapWarning: "Cuidado com o jogo de sinais ao calcular y - b: como b = -1, temos 3 - (-1) = 3 + 1 = 4."
    },
    commonTraps: [
      "Errar a regra de sinais: subtrair 3 - 1 = 2 em vez de 3 - (-1) = 4.",
      "Confundir d² com d e achar que a distância é 25 km."
    ],
    tags: ["Matemática", "Geometria Analítica", "Circunferência", "Distância entre Pontos", "Raio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-002",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria",
    subtopic: "Equação Geral da Circunferência e Reconhecimento de Centro e Raio",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema de monitoramento meteorológico por radar Doppler de uma bacia hidrográfica, a área de varredura de tempestades severas foi modelada no plano pela equação geral $x^2 + y^2 - 8x + 6y - 11 = 0$, em que as medidas estão expressas em dezenas de quilômetros.",
      source: "DANTE, L. R. Matemática: Contexto e Aplicações. São Paulo: Ática, 2020."
    },
    prompt: "O centro de monitoramento do radar e o raio de varredura dessa tempestade são dados, respectivamente, por",
    options: [
      {
        id: "a",
        text: "C(-8, 6) e R = 11 dezenas de km.",
        isCorrect: false,
        distractorRationale: "Utiliza os coeficientes lineares diretamente sem dividir por -2 e sem completar quadrados."
      },
      {
        id: "b",
        text: "C(4, -3) e R = 6 dezenas de km.",
        isCorrect: true,
        distractorRationale: "Correto: Completando quadrados na equação geral x² - 8x + y² + 6y = 11: (x - 4)² - 16 + (y + 3)² - 9 = 11 => (x - 4)² + (y + 3)² = 11 + 16 + 9 = 36. Como R² = 36, o raio é R = √36 = 6 dezenas de km e o centro é C(4, -3)."
      },
      {
        id: "c",
        text: "C(-4, 3) e R = 6 dezenas de km.",
        isCorrect: false,
        distractorRationale: "Inverte os sinais das coordenadas do centro C(a, b)."
      },
      {
        id: "d",
        text: "C(4, -3) e R = 36 dezenas de km.",
        isCorrect: false,
        distractorRationale: "Confunde R² = 36 com o raio R, esquecendo de extrair a raiz quadrada."
      },
      {
        id: "e",
        text: "C(8, -6) e R = √11 dezenas de km.",
        isCorrect: false,
        distractorRationale: "Divide de forma invertida e supõe que o termo independente é o quadrado do raio."
      }
    ],
    detailedExplanation: {
      summary: "Pela técnica de completar quadrados, x² - 8x + y² + 6y = 11 torna-se (x - 4)² + (y + 3)² = 36, resultando em centro C(4, -3) e raio R = 6.",
      stepByStep: [
        "1. Agrupar os termos em x e y: (x² - 8x) + (y² + 6y) = 11.",
        "2. Completar quadrado em x: x² - 8x = (x - 4)² - 16.",
        "3. Completar quadrado em y: y² + 6y = (y + 3)² - 9.",
        "4. Somar os termos independentes do lado direito: (x - 4)² + (y + 3)² = 11 + 16 + 9 = 36.",
        "5. Identificar centro: a = 4, b = -3 => C(4, -3).",
        "6. Identificar raio: R² = 36 => R = 6 dezenas de quilômetros."
      ],
      coreConcept: "A equação geral x² + y² - 2ax - 2by + c = 0 possui centro (a, b) = (-coef_x / 2, -coef_y / 2) e raio R = √(a² + b² - c).",
      trapWarning: "Lembre-se de dividir os coeficientes lineares por -2 para encontrar as coordenadas do centro."
    },
    commonTraps: [
      "Esquecer de trocar o sinal ao extrair as coordenadas do centro a partir dos coeficientes lineares.",
      "Esquecer de somar os quadrados (16 + 9) ao termo independente 11."
    ],
    tags: ["Matemática", "Geometria Analítica", "Equação Geral", "Completar Quadrados", "Circunferência"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-003",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Posições Relativas entre Reta e Circunferência e Tangência",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma esteira automatizada de uma fábrica de embalagens, uma polia motriz circular tem perfil definido pela equação $x^2 + y^2 = 25$. Uma correia plana de transmissão esticada desloca-se tangenciando a polia ao longo da reta de equação $3x + 4y - k = 0$, onde $k$ é uma constante real positiva correspondente ao alinhamento mecânico da guia.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar: Geometria Analítica. Atual, 2019."
    },
    prompt: "Para que a correia seja perfeitamente tangente à polia motriz, o valor da constante $k$ deve ser igual a",
    options: [
      {
        id: "a",
        text: "15.",
        isCorrect: false,
        distractorRationale: "Multiplica o raio por 3 sem considerar o módulo da distância ponto-reta."
      },
      {
        id: "b",
        text: "20.",
        isCorrect: false,
        distractorRationale: "Multiplica o raio por 4 sem considerar a hipotenusa dos coeficientes."
      },
      {
        id: "c",
        text: "25.",
        isCorrect: true,
        distractorRationale: "Correto: A polia tem centro na origem C(0, 0) e raio R = √25 = 5. Para que uma reta Ax + By + C = 0 seja tangente à circunferência, a distância do centro à reta deve ser igual ao raio: d = |A*0 + B*0 - k| / √(A² + B²) = R. Logo: |-k| / √(3² + 4²) = 5 => k / √(9 + 16) = 5 => k / 5 = 5 => k = 25."
      },
      {
        id: "d",
        text: "50.",
        isCorrect: false,
        distractorRationale: "Dobra o valor correto por confusão com o diâmetro da polia."
      },
      {
        id: "e",
        text: "10.",
        isCorrect: false,
        distractorRationale: "Soma 3 + 4 + 3 = 10 arbitrariamente."
      }
    ],
    detailedExplanation: {
      summary: "A reta é tangente à circunferência se a distância do centro C(0, 0) à reta 3x + 4y - k = 0 for igual ao raio R = 5: d = |-k| / √(3² + 4²) = 5 => k = 25.",
      stepByStep: [
        "1. Identificar o centro da circunferência C(0, 0) e o raio R = √25 = 5.",
        "2. Aplicar a fórmula da distância de um ponto (x0, y0) à reta Ax + By + C = 0: d = |A*x0 + B*y0 + C| / √(A² + B²).",
        "3. Substituir C(0, 0) e os coeficientes da reta A = 3, B = 4, C = -k: d = |3(0) + 4(0) - k| / √(3² + 4²).",
        "4. Simplificar: d = |-k| / 5 = k / 5 (pois k > 0).",
        "5. Impor a condição de tangência d = R: k / 5 = 5 => k = 25."
      ],
      coreConcept: "Uma reta é tangente a uma circunferência se e somente se a distância do centro da circunferência à reta for rigorosamente igual ao raio (d = R).",
      trapWarning: "Não esqueça de calcular o denominador √(A² + B²) da fórmula da distância ponto-reta."
    },
    commonTraps: [
      "Esquecer de dividir pela norma do vetor normal √(3² + 4²) = 5.",
      "Confundir a condição de tangência (d = R) com a de secância (d < R)."
    ],
    tags: ["Matemática", "Geometria Analítica", "Tangência", "Distância Ponto-Reta", "Circunferência"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-004",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Sismologia e Triangulação de Epicentro por Circunferências",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Após a ocorrência de um abalo sísmico, duas estações sismológicas terrestres, $E_1$ e $E_2$, registraram os tempos de chegada das ondas P e S para estimar a distância até o epicentro do tremor. Em um sistema de coordenadas cartesianas com escala em centenas de quilômetros, a estação $E_1$ está em $(0, 0)$ e detectou que o tremor ocorreu a uma distância de $R_1 = 5$ ($x^2 + y^2 = 25$). A estação $E_2$ está localizada em $(6, 0)$ e calculou a distância ao tremor em $R_2 = 5$ ($(x - 6)^2 + y^2 = 25$). Sabe-se que o epicentro ocorreu em uma falha geológica localizada no semiplano norte ($y > 0$).",
      source: "PRESS, F. et al. Para Entender a Terra. Porto Alegre: Bookman, 2018."
    },
    prompt: "As coordenadas exatas $(x, y)$ do epicentro desse abalo sísmico correspondem ao ponto",
    options: [
      {
        id: "a",
        text: "(3, 4).",
        isCorrect: true,
        distractorRationale: "Correto: Igualando as equações das duas circunferências: x² + y² = 25 e (x - 6)² + y² = 25. Subtraindo as duas equações: x² - [(x - 6)²] = 0 => x² - (x² - 12x + 36) = 0 => 12x - 36 = 0 => 12x = 36 => x = 3. Substituindo x = 3 na primeira equação: 3² + y² = 25 => 9 + y² = 25 => y² = 16 => y = +4 (pois y > 0). O epicentro está em (3, 4)."
      },
      {
        id: "b",
        text: "(3, -4).",
        isCorrect: false,
        distractorRationale: "Ignora a restrição explícita de que o epicentro ocorreu no semiplano norte (y > 0)."
      },
      {
        id: "c",
        text: "(4, 3).",
        isCorrect: false,
        distractorRationale: "Inverte as coordenadas da abscissa x e da ordenada y."
      },
      {
        id: "d",
        text: "(2, 5).",
        isCorrect: false,
        distractorRationale: "Não satisfaz a equação da circunferência: 2² + 5² = 4 + 25 = 29 ≠ 25."
      },
      {
        id: "e",
        text: "(3, 3).",
        isCorrect: false,
        distractorRationale: "Supõe que as coordenadas do ponto seriam iguais: 3² + 3² = 18 ≠ 25."
      }
    ],
    detailedExplanation: {
      summary: "A intersecção das circunferências x² + y² = 25 e (x - 6)² + y² = 25 com y > 0 fornece x = 3 e y = 4, ponto (3, 4).",
      stepByStep: [
        "1. Montar o sistema com as duas equações: x² + y² = 25 e x² - 12x + 36 + y² = 25.",
        "2. Como x² + y² = 25, substituir na segunda: 25 - 12x + 36 = 25 => -12x + 36 = 0 => x = 3.",
        "3. Substituir x = 3 na primeira equação: 3² + y² = 25 => 9 + y² = 25 => y² = 16.",
        "4. Como o enunciado restringe ao semiplano norte (y > 0), temos y = +4.",
        "5. As coordenadas do epicentro são (3, 4)."
      ],
      coreConcept: "A triangulação sismológica baseia-se na intersecção de circunferências cujos raios são as distâncias epicentrais.",
      trapWarning: "Fique atento às condições de contorno do enunciado (como y > 0) para selecionar a raiz correta de y² = 16."
    },
    commonTraps: [
      "Inverter a ordem das coordenadas (x, y) para (4, 3).",
      "Esquecer a restrição y > 0 e marcar a ordenada negativa."
    ],
    tags: ["Matemática", "Geometria Analítica", "Intersecção de Circunferências", "Sismologia", "Sistemas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-005",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria",
    subtopic: "Elipse: Elementos Geométricos e Órbitas Planetárias",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A Primeira Lei de Kepler afirma que os planetas descrevem órbitas elípticas em torno do Sol, que ocupa um dos focos da elipse. A órbita de um asteroide monitorado por observatórios astronômicos é modelada no plano cartesiano (em unidades astronômicas, UA) pela equação $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$.",
      source: "TIPLER, P. A.; MOSCA, G. Física. Rio de Janeiro: LTC, 2019."
    },
    prompt: "Com base na equação da elipse, o comprimento do eixo maior, o comprimento do eixo menor e a distância focal entre os dois focos dessa órbita medem, respectivamente,",
    options: [
      {
        id: "a",
        text: "5 UA, 3 UA e 4 UA.",
        isCorrect: false,
        distractorRationale: "Indica os semieixos a = 5, b = 3 e semidistância focal c = 4, esquecendo de multiplicar por 2 para obter os eixos completos."
      },
      {
        id: "b",
        text: "10 UA, 6 UA e 8 UA.",
        isCorrect: true,
        distractorRationale: "Correto: Na equação reduzida da elipse x²/a² + y²/b² = 1, temos a² = 25 => a = 5 (semieixo maior) e b² = 9 => b = 3 (semieixo menor). Logo, o eixo maior mede 2a = 10 UA e o menor mede 2b = 6 UA. Pela relação fundamental da elipse a² = b² + c²: 25 = 9 + c² => c² = 16 => c = 4 (semidistância focal). A distância focal total entre os dois focos F1 e F2 é 2c = 8 UA."
      },
      {
        id: "c",
        text: "25 UA, 9 UA e 16 UA.",
        isCorrect: false,
        distractorRationale: "Utiliza os quadrados dos parâmetros (a², b², c²) em vez dos comprimentos lineares."
      },
      {
        id: "d",
        text: "10 UA, 6 UA e 4 UA.",
        isCorrect: false,
        distractorRationale: "Esquece de multiplicar a semidistância focal c = 4 por 2."
      },
      {
        id: "e",
        text: "8 UA, 6 UA e 10 UA.",
        isCorrect: false,
        distractorRationale: "Confunde o eixo maior com a distância focal."
      }
    ],
    detailedExplanation: {
      summary: "Com a² = 25 e b² = 9, temos a = 5, b = 3 e c = √(25 - 9) = 4. O eixo maior é 2a = 10, o menor é 2b = 6 e a distância focal é 2c = 8.",
      stepByStep: [
        "1. Identificar os parâmetros da equação reduzida x²/a² + y²/b² = 1: a² = 25 => a = 5 e b² = 9 => b = 3.",
        "2. Calcular os eixos: Eixo maior = 2a = 2(5) = 10 UA; Eixo menor = 2b = 2(3) = 6 UA.",
        "3. Aplicar a relação pitagórica da elipse: a² = b² + c² => 25 = 9 + c² => c² = 16 => c = 4 UA.",
        "4. Calcular a distância focal total: 2c = 2(4) = 8 UA."
      ],
      coreConcept: "Na elipse, o eixo maior é 2a, o menor é 2b, a distância focal é 2c e vale a relação a² = b² + c².",
      trapWarning: "Cuidado: 'semieixo' refere-se a 'a' ou 'b', enquanto 'eixo completo' mede 2a ou 2b."
    },
    commonTraps: [
      "Responder os valores dos semieixos (5, 3, 4) em vez dos eixos completos (10, 6, 8).",
      "Errar a relação fundamental da elipse usando c² = a² + b² (que é da hipérbole)."
    ],
    tags: ["Matemática", "Geometria Analítica", "Elipse", "Cônicas", "Leis de Kepler"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-006",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria",
    subtopic: "Excentricidade da Elipse e Achatamento Orbital",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A excentricidade ($e$) de uma elipse é uma grandeza adimensional definida pela razão entre a semidistância focal ($c$) e o semieixo maior ($a$): $e = \\frac{c}{a}$, com $0 \\le e < 1$. Quanto mais próxima de 0 é a excentricidade, mais a elipse se assemelha a uma circunferência perfeita; quanto mais próxima de 1, mais achatada e alongada ela é. A órbita de um satélite de observação ambiental possui semieixo maior $a = 20\\text{ mil km}$ e semieixo menor $b = 16\\text{ mil km}$.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar. Atual, 2019."
    },
    prompt: "A excentricidade da elipse orbital desse satélite é igual a",
    options: [
      {
        id: "a",
        text: "0,80.",
        isCorrect: false,
        distractorRationale: "Calcula a razão b / a = 16 / 20 = 0,80, confundindo a excentricidade com a razão entre semieixos."
      },
      {
        id: "b",
        text: "0,60.",
        isCorrect: true,
        distractorRationale: "Correto: Pela relação fundamental da elipse a² = b² + c²: 20² = 16² + c² => 400 = 256 + c² => c² = 144 => c = 12 mil km. A excentricidade é e = c / a = 12 / 20 = 0,60."
      },
      {
        id: "c",
        text: "0,75.",
        isCorrect: false,
        distractorRationale: "Calcula a razão c / b = 12 / 16 = 0,75 em vez de c / a."
      },
      {
        id: "d",
        text: "0,36.",
        isCorrect: false,
        distractorRationale: "Eleva a excentricidade ao quadrado: 0,60² = 0,36."
      },
      {
        id: "e",
        text: "0,25.",
        isCorrect: false,
        distractorRationale: "Divide (20 - 16) por 16 = 4 / 16 = 0,25."
      }
    ],
    detailedExplanation: {
      summary: "Com a = 20 e b = 16, c = √(20² - 16²) = 12. A excentricidade é e = c / a = 12 / 20 = 0,60.",
      stepByStep: [
        "1. Identificar dados: a = 20 e b = 16.",
        "2. Calcular a semidistância focal c: a² = b² + c² => 20² = 16² + c² => 400 = 256 + c².",
        "3. Isolar c²: c² = 144 => c = 12.",
        "4. Aplicar a definição de excentricidade: e = c / a = 12 / 20 = 0,60."
      ],
      coreConcept: "A excentricidade da elipse é e = c / a, medindo seu grau de afastamento da forma circular.",
      trapWarning: "A excentricidade é c/a, e NÃO b/a. É necessário calcular c antes de obter a excentricidade."
    },
    commonTraps: [
      "Calcular b / a em vez de c / a.",
      "Dividir c por b em vez de c por a."
    ],
    tags: ["Matemática", "Geometria Analítica", "Elipse", "Excentricidade", "Cônicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-007",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Parábola: Propriedade Reflexiva e Foco de Antena Parabólica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "As antenas parabólicas de telecomunicações e radiotelescópios utilizam a propriedade geométrica da parábola: todos os feixes de ondas eletromagnéticas paralelos ao seu eixo de simetria refletem na superfície e convergem rigorosamente para o foco da parábola. Em um projeto de telecomunicações, o perfil transversal de um refletor parabólico com vértice na origem $(0, 0)$ e eixo de simetria sobre o eixo $y$ é dado pela equação $x^2 = 16y$, onde as medidas estão em decímetros.",
      source: "DANTE, L. R. Matemática: Contexto e Aplicações. Ática, 2020."
    },
    prompt: "Para captar o sinal com a máxima intensidade possível, o receptor LNB da antena deve ser instalado exatamente no foco da parábola, cujas coordenadas são",
    options: [
      {
        id: "a",
        text: "(0, 4).",
        isCorrect: true,
        distractorRationale: "Correto: A equação canônica da parábola com vértice na origem e concavidade voltada para cima é x² = 4py, onde p é a distância do vértice ao foco. Comparando x² = 16y com x² = 4py, temos 4p = 16 => p = 4 dm. Como o foco está sobre o eixo y positivo, suas coordenadas são F(0, p) = (0, 4)."
      },
      {
        id: "b",
        text: "(4, 0).",
        isCorrect: false,
        distractorRationale: "Posiciona o foco sobre o eixo x em vez do eixo y de simetria."
      },
      {
        id: "c",
        text: "(0, 8).",
        isCorrect: false,
        distractorRationale: "Divide 16 por 2 em vez de dividir por 4."
      },
      {
        id: "d",
        text: "(0, 16).",
        isCorrect: false,
        distractorRationale: "Usa diretamente o coeficiente 16 como a coordenada do foco."
      },
      {
        id: "e",
        text: "(0, 2).",
        isCorrect: false,
        distractorRationale: "Divide 16 por 8 arbitrariamente."
      }
    ],
    detailedExplanation: {
      summary: "Na parábola x² = 4py, comparando com x² = 16y temos 4p = 16 => p = 4. O foco é F(0, 4).",
      stepByStep: [
        "1. Identificar a forma canônica da parábola vertical com vértice na origem: x² = 4py.",
        "2. Igualar o coeficiente dado à forma canônica: 4p = 16.",
        "3. Isolar o parâmetro p: p = 16 / 4 = 4 dm.",
        "4. Como a parábola tem eixo de simetria vertical x = 0 e concavidade para cima, o foco tem coordenadas F(0, p) = (0, 4)."
      ],
      coreConcept: "A equação canônica x² = 4py possui foco F(0, p) e reta diretriz y = -p.",
      trapWarning: "Lembre-se de que o coeficiente de y na equação canônica é 4p, e não 2p."
    },
    commonTraps: [
      "Dividir o coeficiente por 2 em vez de 4 ao calcular o parâmetro focal p.",
      "Trocar a ordem das coordenadas colocando o foco no eixo x: (4, 0)."
    ],
    tags: ["Matemática", "Geometria Analítica", "Parábola", "Foco", "Antena Parabólica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-008",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Inequação da Circunferência e Região de Segurança Industrial",
    difficulty: 2,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma central termelétrica, uma área circular de isolamento ao redor de uma caldeira de alta pressão foi estabelecida segundo a inequação cartesiana $(x - 2)^2 + (y - 5)^2 \\le 100$, com distâncias medidas em metros. Por normas técnicas de segurança do trabalho, somente operadores com vestimenta térmica pressurizada podem permanecer no interior dessa região perigosa delimitada.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar. Atual, 2019."
    },
    prompt: "Um técnico sem vestimenta especial está posicionado no posto de monitoramento $M(8, 13)$. Em relação à área de isolamento de segurança, o técnico encontra-se",
    options: [
      {
        id: "a",
        text: "dentro da área restrita, a 5 metros do centro da caldeira.",
        isCorrect: false,
        distractorRationale: "Calcula a distância incorretamente por erro aritmético."
      },
      {
        id: "b",
        text: "exatamente sobre a linha limítrofe de segurança da caldeira.",
        isCorrect: true,
        distractorRationale: "Correto: Substituindo as coordenadas de M(8, 13) na expressão (x - 2)² + (y - 5)²: (8 - 2)² + (13 - 5)² = 6² + 8² = 36 + 64 = 100. Como o valor é rigorosamente igual a 100 (ou seja, d = √100 = 10 m = R), o técnico está posicionado exatamente sobre a fronteira circular de isolamento."
      },
      {
        id: "c",
        text: "fora da área restrita, a uma distância de 14 metros do centro.",
        isCorrect: false,
        distractorRationale: "Soma 6 + 8 = 14 metros sem calcular a hipotenusa pitagórica."
      },
      {
        id: "d",
        text: "dentro da área restrita, a 8 metros do centro da caldeira.",
        isCorrect: false,
        distractorRationale: "Usa apenas a diferença das ordenadas (13 - 5 = 8)."
      },
      {
        id: "e",
        text: "fora da área restrita, a 100 metros do centro da caldeira.",
        isCorrect: false,
        distractorRationale: "Confunde R² = 100 com o raio linear da circunferência de isolamento."
      }
    ],
    detailedExplanation: {
      summary: "Substituindo (8, 13), temos (8 - 2)² + (13 - 5)² = 6² + 8² = 100. Como d² = R² = 100, o ponto está na linha limítrofe.",
      stepByStep: [
        "1. Identificar o centro da caldeira C(2, 5) e o raio de isolamento R = √100 = 10 metros.",
        "2. Calcular a distância do técnico M(8, 13) ao centro: d² = (8 - 2)² + (13 - 5)² = 6² + 8² = 36 + 64 = 100.",
        "3. Como d² = 100 = R², d = 10 metros.",
        "4. A igualdade indica que o ponto pertence à circunferência fronteiriça da inequação."
      ],
      coreConcept: "Pontos com d < R são interiores; d = R estão na fronteira; d > R são exteriores à circunferência.",
      trapWarning: "Cuidado para não somar as diferenças 6 + 8 = 14; a distância euclidiana é pitagórica: √(6² + 8²) = 10."
    },
    commonTraps: [
      "Somar as diferenças lineares em vez de calcular a raiz dos quadrados.",
      "Achar que R = 100 metros."
    ],
    tags: ["Matemática", "Geometria Analítica", "Inequação da Circunferência", "Região do Plano", "Distância"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-009",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Hipérbole e Navegação Hiperbólica (LORAN)",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Sistemas de posicionamento por radionavegação hiperbólica determinam a localização de uma embarcação através da diferença constante entre os tempos de recepção de sinais de rádio sincronizados emitidos por duas estações fixas (focos $F_1$ e $F_2$). Por definição geométrica, a hipérbole é o lugar geométrico dos pontos do plano cuja diferença absoluta das distâncias a dois pontos fixos é constante: $|d(P, F_1) - d(P, F_2)| = 2a$. Em um setor costeiro, a rota é modelada pela equação $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$, com medidas em quilômetros.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar. Atual, 2019."
    },
    prompt: "A distância focal entre as duas estações transmissoras ($2c$) e a distância entre os dois vértices da hipérbole ($2a$) medem, respectivamente,",
    options: [
      {
        id: "a",
        text: "10 km e 8 km.",
        isCorrect: true,
        distractorRationale: "Correto: Na equação da hipérbole x²/a² - y²/b² = 1, temos a² = 16 => a = 4 km e b² = 9 => b = 3 km. A distância entre os vértices é 2a = 2(4) = 8 km. Pela relação fundamental da hipérbole c² = a² + b²: c² = 16 + 9 = 25 => c = 5 km. Portanto, a distância focal total é 2c = 2(5) = 10 km."
      },
      {
        id: "b",
        text: "8 km e 6 km.",
        isCorrect: false,
        distractorRationale: "Confunde a distância focal 2c com 2b = 6 km."
      },
      {
        id: "c",
        text: "5 km e 4 km.",
        isCorrect: false,
        distractorRationale: "Apresenta a semidistância focal c = 5 e o semieixo real a = 4, não as distâncias totais."
      },
      {
        id: "d",
        text: "25 km e 16 km.",
        isCorrect: false,
        distractorRationale: "Usa os quadrados dos coeficientes (c² e a²)."
      },
      {
        id: "e",
        text: "14 km e 8 km.",
        isCorrect: false,
        distractorRationale: "Soma 9 + 5 = 14 arbitrariamente."
      }
    ],
    detailedExplanation: {
      summary: "Na hipérbole x²/16 - y²/9 = 1, temos a = 4, b = 3 e c² = a² + b² = 25 => c = 5. Assim, 2c = 10 km e 2a = 8 km.",
      stepByStep: [
        "1. Identificar parâmetros da hipérbole: a² = 16 => a = 4; b² = 9 => b = 3.",
        "2. Calcular a distância entre os vértices reais: 2a = 2 * 4 = 8 km.",
        "3. Aplicar a relação pitagórica da hipérbole: c² = a² + b² = 16 + 9 = 25.",
        "4. Isolar c: c = √25 = 5 km.",
        "5. Calcular a distância focal entre as duas estações: 2c = 2 * 5 = 10 km."
      ],
      coreConcept: "Na hipérbole, vale a relação c² = a² + b² (ao contrário da elipse, onde a² = b² + c²).",
      trapWarning: "Cuidado com o sinal na relação fundamental: na hipérbole c é a hipotenusa (c² = a² + b²); na elipse a é a hipotenusa (a² = b² + c²)."
    },
    commonTraps: [
      "Usar a relação da elipse (a² = b² + c²) para a hipérbole.",
      "Esquecer de multiplicar por 2 ao fornecer as distâncias totais entre vértices e focos."
    ],
    tags: ["Matemática", "Geometria Analítica", "Hipérbole", "Cônicas", "Navegação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-010",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Circunferências Concéntricas e Área de Coroa Circular",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No projeto paisagístico e drenante de uma praça pública urbana, duas tubulações de irrigação definem duas circunferências concêntricas no plano cartesiano: a interna de equação $x^2 + y^2 = 36$ e a externa de equação $x^2 + y^2 = 100$, onde as coordenadas são dadas em metros. O espaço compreendido entre essas duas circunferências formará uma coroa circular pavimentada com piso permeável intertravado.",
      source: "DANTE, L. R. Matemática: Contexto e Aplicações. Ática, 2020."
    },
    prompt: "Adotando $\\\\pi = 3,14$, a área superficial da coroa circular a ser pavimentada é igual a",
    options: [
      {
        id: "a",
        text: "200,96 m².",
        isCorrect: true,
        distractorRationale: "Correto: A área da coroa circular é dada por A = π(R² - r²). Da equação da circunferência externa, R² = 100; da interna, r² = 36. Logo: A = π(100 - 36) = π * 64 = 3,14 * 64 = 200,96 m²."
      },
      {
        id: "b",
        text: "64,00 m².",
        isCorrect: false,
        distractorRationale: "Calcula a diferença R² - r² = 64, mas esquece de multiplicar pelo valor de π."
      },
      {
        id: "c",
        text: "314,00 m².",
        isCorrect: false,
        distractorRationale: "Calcula apenas a área do círculo externo (3,14 * 100 = 314)."
      },
      {
        id: "d",
        text: "113,04 m².",
        isCorrect: false,
        distractorRationale: "Calcula apenas a área do círculo interno (3,14 * 36 = 113,04)."
      },
      {
        id: "e",
        text: "50,24 m².",
        isCorrect: false,
        distractorRationale: "Subtrai os raios R - r = 10 - 6 = 4 e calcula π * 4² = 3,14 * 16 = 50,24 m² (erro clássico)."
      }
    ],
    detailedExplanation: {
      summary: "A área da coroa circular é A = π(R² - r²) = 3,14 * (100 - 36) = 3,14 * 64 = 200,96 m².",
      stepByStep: [
        "1. Identificar R² = 100 e r² = 36 a partir das equações dadas.",
        "2. Fórmula da área da coroa circular: A = π * R² - π * r² = π * (R² - r²).",
        "3. Calcular a diferença dos quadrados: 100 - 36 = 64 m².",
        "4. Multiplicar por π = 3,14: 64 * 3,14 = 200,96 m²."
      ],
      coreConcept: "A área da coroa circular é π(R² - r²), e NÃO π(R - r)².",
      trapWarning: "Cuidado: π(R² - r²) ≠ π(R - r)². Subtrair os raios antes de elevar ao quadrado é um dos erros mais frequentes no ENEM."
    },
    commonTraps: [
      "Calcular π(R - r)² em vez de π(R² - r²).",
      "Esquecer de multiplicar por π."
    ],
    tags: ["Matemática", "Geometria Analítica", "Coroa Circular", "Áreas", "Circunferência"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-011",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Posições Relativas entre Duas Circunferências",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um sistema de engrenagens de um moinho industrial, duas rodas dentadas circulares têm seus perímetros modelados no plano pelas equações $\\lambda_1: (x - 1)^2 + (y - 2)^2 = 16$ e $\\lambda_2: (x - 7)^2 + (y - 10)^2 = 36$, com medidas em decímetros.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar. Atual, 2019."
    },
    prompt: "Com base na distância entre os centros e nas medidas dos raios dessas duas circunferências, elas são classificadas como",
    options: [
      {
        id: "a",
        text: "tangentes externas, tocando-se em exatamente um ponto.",
        isCorrect: true,
        distractorRationale: "Correto: Centro C1(1, 2) com raio R1 = √16 = 4 dm; Centro C2(7, 10) com raio R2 = √36 = 6 dm. A distância entre os centros é d = √[(7 - 1)² + (10 - 2)²] = √[6² + 8²] = √100 = 10 dm. A soma dos raios é R1 + R2 = 4 + 6 = 10 dm. Como a distância d é exatamente igual à soma dos raios (d = R1 + R2), as duas circunferências são tangentes externas."
      },
      {
        id: "b",
        text: "secantes, interceptando-se em dois pontos distintos.",
        isCorrect: false,
        distractorRationale: "Secância exigiria |R1 - R2| < d < R1 + R2, o que não ocorre pois d = R1 + R2."
      },
      {
        id: "c",
        text: "externas sem intersecção, com folga entre si.",
        isCorrect: false,
        distractorRationale: "Exigiria d > R1 + R2 (d > 10)."
      },
      {
        id: "d",
        text: "tangentes internas, com uma no interior da outra.",
        isCorrect: false,
        distractorRationale: "Tangência interna exigiria d = |R2 - R1| = 6 - 4 = 2 dm."
      },
      {
        id: "e",
        text: "concêntricas, compartilhando o mesmo centro.",
        isCorrect: false,
        distractorRationale: "Os centros C1(1, 2) e C2(7, 10) são distintos."
      }
    ],
    detailedExplanation: {
      summary: "Com C1(1, 2), R1 = 4 e C2(7, 10), R2 = 6, a distância entre centros é d = 10 dm. Como d = R1 + R2 = 4 + 6 = 10, são tangentes externas.",
      stepByStep: [
        "1. Identificar centros e raios: C1(1, 2), R1 = 4; C2(7, 10), R2 = 6.",
        "2. Calcular a distância entre os centros: d = √[(7 - 1)² + (10 - 2)²] = √(36 + 64) = √100 = 10 dm.",
        "3. Comparar d com a soma dos raios: R1 + R2 = 4 + 6 = 10 dm.",
        "4. Como d = R1 + R2, as circunferências são tangentes externamente."
      ],
      coreConcept: "Duas circunferências são tangentes externas quando a distância entre seus centros é igual à soma dos raios (d = R1 + R2).",
      trapWarning: "Lembre-se de extrair a raiz quadrada dos termos à direita para obter os raios (√16 = 4 e √36 = 6)."
    },
    commonTraps: [
      "Usar 16 e 36 como raios em vez de 4 e 6.",
      "Confundir condição de tangência externa (d = R1 + R2) com tangência interna (d = |R1 - R2|)."
    ],
    tags: ["Matemática", "Geometria Analítica", "Posições Relativas", "Circunferências", "Tangência"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-012",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria",
    subtopic: "Comprimento da Corda Determinada por Reta Secante",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma tubulação subterrânea de drenagem pluvial tem seção transversal circular modelada por $x^2 + y^2 = 25$, com medidas em decímetros. Durante uma vistoria técnica de rotina, detectou-se uma haste metálica de sustentação retilínea que atravessa o interior do duto seguindo a trajetória da reta de equação $x = 3$.",
      source: "DANTE, L. R. Matemática: Contexto e Aplicações. Ática, 2020."
    },
    prompt: "O comprimento total da corda formada pela haste no interior do duto é igual a",
    options: [
      {
        id: "a",
        text: "4 dm.",
        isCorrect: false,
        distractorRationale: "Calcula apenas a meia-corda (y = 4), esquecendo que o comprimento total é 2y."
      },
      {
        id: "b",
        text: "8 dm.",
        isCorrect: true,
        distractorRationale: "Correto: Substituindo x = 3 na equação da circunferência x² + y² = 25: 3² + y² = 25 => 9 + y² = 25 => y² = 16 => y = ±4. Os pontos de intersecção são P1(3, 4) e P2(3, -4). A distância entre eles (comprimento da corda) é |4 - (-4)| = 8 dm. Alternativamente, pelo teorema de Pitágoras no triângulo retângulo formado pelo centro, meio da corda e extremidade: R² = d² + (L/2)² => 5² = 3² + (L/2)² => L/2 = 4 => L = 8 dm."
      },
      {
        id: "c",
        text: "6 dm.",
        isCorrect: false,
        distractorRationale: "Dobra a distância do centro à reta (2 * 3 = 6)."
      },
      {
        id: "d",
        text: "10 dm.",
        isCorrect: false,
        distractorRationale: "Assume o diâmetro da circunferência (2R = 10)."
      },
      {
        id: "e",
        text: "5 dm.",
        isCorrect: false,
        distractorRationale: "Assume o raio da circunferência."
      }
    ],
    detailedExplanation: {
      summary: "Com x = 3 e x² + y² = 25, temos y = ±4. A corda vai de (3, -4) a (3, 4), medindo 8 dm.",
      stepByStep: [
        "1. Substituir a equação da reta x = 3 na da circunferência: 3² + y² = 25.",
        "2. Resolver para y: y² = 25 - 9 = 16 => y = ±4.",
        "3. Os pontos de corte são (3, 4) e (3, -4).",
        "4. Como a reta é vertical, a distância entre os pontos é a diferença das ordenadas: 4 - (-4) = 8 dm."
      ],
      coreConcept: "O comprimento de uma corda L interceptada por uma reta a uma distância d do centro em uma circunferência de raio R é L = 2√(R² - d²).",
      trapWarning: "Cuidado: a raiz y = 4 fornece apenas a metade da corda; o comprimento total é 2 * 4 = 8."
    },
    commonTraps: [
      "Esquecer de dobrar o valor da meia-corda.",
      "Confundir a corda com o raio ou diâmetro da circunferência."
    ],
    tags: ["Matemática", "Geometria Analítica", "Corda", "Reta Secante", "Circunferência"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-013",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Reta Tangente em um Ponto Conhecido da Circunferência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema de coordenadas de um jogo de simulação de física, uma partícula em movimento circular uniforme sobre a trajetória $x^2 + y^2 = 25$ solta-se instantaneamente no ponto $P(3, 4)$ e passa a se mover em linha reta ao longo da reta tangente à trajetória naquele ponto, conservando sua velocidade vetorial tangencial.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar. Atual, 2019."
    },
    prompt: "A equação geral da reta tangente que descreve a trajetória retilínea da partícula é dada por",
    options: [
      {
        id: "a",
        text: "3x + 4y - 25 = 0.",
        isCorrect: true,
        distractorRationale: "Correto: Para a circunferência x² + y² = R² com centro na origem, a reta tangente no ponto P(x0, y0) é dada diretamente pela regra do desdobramento: x0 * x + y0 * y = R². Substituindo x0 = 3, y0 = 4 e R² = 25: 3x + 4y = 25 => 3x + 4y - 25 = 0. Alternativamente, o raio OP tem coeficiente angular m_raio = 4/3. Como a tangente é perpendicular ao raio, m_tg = -3/4. Aplicando y - 4 = -3/4(x - 3) => 4y - 16 = -3x + 9 => 3x + 4y - 25 = 0."
      },
      {
        id: "b",
        text: "4x + 3y - 25 = 0.",
        isCorrect: false,
        distractorRationale: "Inverte as coordenadas de x e y na equação da tangente."
      },
      {
        id: "c",
        text: "3x - 4y + 7 = 0.",
        isCorrect: false,
        distractorRationale: "Erra os sinais e o termo independente."
      },
      {
        id: "d",
        text: "4x - 3y = 0.",
        isCorrect: false,
        distractorRationale: "Essa é a equação da reta normal (raio), perpendicular à tangente e passando pela origem."
      },
      {
        id: "e",
        text: "3x + 4y + 25 = 0.",
        isCorrect: false,
        distractorRationale: "Erra o sinal do termo independente (+25 em vez de -25)."
      }
    ],
    detailedExplanation: {
      summary: "A reta tangente a x² + y² = 25 no ponto (3, 4) tem equação 3x + 4y - 25 = 0.",
      stepByStep: [
        "1. Método do Desdobramento: para x² + y² = R² e ponto P(x0, y0) pertencente à circunferência, a reta tangente é x0*x + y0*y = R².",
        "2. Substituir x0 = 3, y0 = 4 e R² = 25: 3x + 4y = 25.",
        "3. Passar para a forma geral: 3x + 4y - 25 = 0.",
        "4. Verificação por perpendicularismo: coeficiente angular do raio é 4/3; da tangente é -3/4. y - 4 = -3/4(x - 3) confirma 3x + 4y - 25 = 0."
      ],
      coreConcept: "A reta tangente à circunferência é sempre perpendicular ao raio no ponto de contato.",
      trapWarning: "Cuidado: a reta perpendicular à tangente que passa pela origem é a reta do raio (4x - 3y = 0)."
    },
    commonTraps: [
      "Inverter os coeficientes de x e y.",
      "Errar o sinal de perpendicularidade m1 * m2 = -1."
    ],
    tags: ["Matemática", "Geometria Analítica", "Reta Tangente", "Perpendicularismo", "Circunferência"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-014",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria",
    subtopic: "Equação da Parábola com Vértice Fora da Origem",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "O arco estrutural de uma ponte rodoviária possui perfil parabólico com vértice no ponto mais alto $V(0, 10)$ e eixo de simetria vertical coincidente com o eixo $y$. As duas extremidades da base do arco apoiam-se no solo ($y = 0$) nos pontos $(-10, 0)$ e $(10, 0)$, com medidas expressas em metros.",
      source: "DANTE, L. R. Matemática: Contexto e Aplicações. Ática, 2020."
    },
    prompt: "A equação que modela a altura $y$ da estrutura da ponte em função da posição horizontal $x$ é dada por",
    options: [
      {
        id: "a",
        text: "y = -0,10x² + 10.",
        isCorrect: true,
        distractorRationale: "Correto: A parábola simétrica com vértice em (0, 10) tem a forma y = ax² + 10. Substituindo a raiz (10, 0): 0 = a(10)² + 10 => 100a = -10 => a = -10/100 = -0,10. Logo, y = -0,10x² + 10."
      },
      {
        id: "b",
        text: "y = -x² + 10.",
        isCorrect: false,
        distractorRationale: "Supõe a = -1, o que faria o arco tocar o solo em x = ±√10 ≈ ±3,16 m, e não em x = ±10 m."
      },
      {
        id: "c",
        text: "y = 0,10x² + 10.",
        isCorrect: false,
        distractorRationale: "Atribui coeficiente positivo, gerando concavidade para cima (o que não formaria um arco de ponte)."
      },
      {
        id: "d",
        text: "y = -0,01x² + 10.",
        isCorrect: false,
        distractorRationale: "Erra a divisão decimal por 100."
      },
      {
        id: "e",
        text: "y = -0,50x² + 10.",
        isCorrect: false,
        distractorRationale: "Divide 10 por 20 arbitrariamente."
      }
    ],
    detailedExplanation: {
      summary: "Com vértice V(0, 10) e raiz em (10, 0), temos 0 = a(10²) + 10 => a = -0,10. Assim, y = -0,10x² + 10.",
      stepByStep: [
        "1. Escrever a forma da parábola com vértice no eixo y: y = ax² + y_v.",
        "2. Como y_v = 10, temos y = ax² + 10.",
        "3. Impor a passagem pelo apoio no solo (10, 0): 0 = a(10)² + 10.",
        "4. 100a + 10 = 0 => 100a = -10 => a = -0,10.",
        "5. Concluir a equação do arco: y = -0,10x² + 10."
      ],
      coreConcept: "A modelagem de arcos parabólicos utiliza a forma canônica da função quadrática y = a(x - x_v)² + y_v.",
      trapWarning: "Arco de ponte possui concavidade para baixo, exigindo coeficiente quadrático estritamente negativo (a < 0)."
    },
    commonTraps: [
      "Esquecer o sinal negativo para a concavidade voltada para baixo.",
      "Errar a simplificação de -10/100 como -0,01 em vez de -0,10."
    ],
    tags: ["Matemática", "Geometria Analítica", "Parábola", "Modelagem Quadrática", "Pontes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-015",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Equação da Reta Secante e Pontos de Intersecção com Circunferência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No traçado do sistema de monotrilho de um parque tecnológico, uma via retilínea é descrita pela equação $y = x + 1$. A via atravessa uma lagoa artificial circular cujo contorno é modelado no mapa por $x^2 + y^2 = 25$, com medidas em hectômetros.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar. Atual, 2019."
    },
    prompt: "Os dois pontos onde a via retilínea cruza a margem da lagoa possuem abscissas $x_1$ e $x_2$ iguais a",
    options: [
      {
        id: "a",
        text: "x₁ = 3 e x₂ = -4.",
        isCorrect: true,
        distractorRationale: "Correto: Substituindo y = x + 1 na circunferência x² + y² = 25: x² + (x + 1)² = 25 => x² + x² + 2x + 1 = 25 => 2x² + 2x - 24 = 0. Dividindo por 2: x² + x - 12 = 0. Por soma e produto: soma = -1 e produto = -12 => raízes x = 3 e x = -4."
      },
      {
        id: "b",
        text: "x₁ = 4 e x₂ = -3.",
        isCorrect: false,
        distractorRationale: "Inverte os sinais das raízes da equação quadrática."
      },
      {
        id: "c",
        text: "x₁ = 5 e x₂ = -5.",
        isCorrect: false,
        distractorRationale: "Assume os pontos sobre os eixos coordenados ignorando a equação da reta y = x + 1."
      },
      {
        id: "d",
        text: "x₁ = 2 e x₂ = -6.",
        isCorrect: false,
        distractorRationale: "Erra a fatoração de x² + x - 12 = 0."
      },
      {
        id: "e",
        text: "x₁ = 1 e x₂ = -12.",
        isCorrect: false,
        distractorRationale: "Usa os coeficientes da equação em vez das raízes."
      }
    ],
    detailedExplanation: {
      summary: "Substituindo y = x + 1 em x² + y² = 25, obtemos 2x² + 2x - 24 = 0 => x² + x - 12 = 0, com raízes x = 3 e x = -4.",
      stepByStep: [
        "1. Montar a substituição algébrica: x² + (x + 1)² = 25.",
        "2. Desenvolver o quadrado da soma: x² + x² + 2x + 1 = 25.",
        "3. Reduzir termos semelhantes: 2x² + 2x - 24 = 0.",
        "4. Simplificar dividindo por 2: x² + x - 12 = 0.",
        "5. Fatorar: (x - 3)(x + 4) = 0 => x1 = 3 e x2 = -4."
      ],
      coreConcept: "A intersecção entre reta e circunferência resolve-se por substituição, gerando uma equação do 2º grau.",
      trapWarning: "Cuidado ao desenvolver (x + 1)²: o termo do meio 2x é indispensável."
    },
    commonTraps: [
      "Esquecer o termo misto 2x ao expandir o produto notável.",
      "Trocar os sinais das raízes ao resolver por soma e produto."
    ],
    tags: ["Matemática", "Geometria Analítica", "Intersecção", "Reta e Circunferência", "Equação Quadrática"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-016",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria",
    subtopic: "Equação da Circunferência que Passa por Três Pontos Não Colineares",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um levantamento topográfico municipal para a instalação de uma rotatória de trânsito, foram determinados três pontos de passagem obrigatória no plano cartesiano: $O(0, 0)$, $A(6, 0)$ e $B(0, 8)$, medidos em metros.",
      source: "DANTE, L. R. Matemática: Contexto e Aplicações. Ática, 2020."
    },
    prompt: "O raio da circunferência circunscrita a esse triângulo retângulo e as coordenadas de seu centro são, respectivamente,",
    options: [
      {
        id: "a",
        text: "R = 5 m e C(3, 4).",
        isCorrect: true,
        distractorRationale: "Correto: Como os pontos O(0, 0), A(6, 0) e B(0, 8) formam um triângulo retângulo com ângulo reto na origem O, a hipotenusa AB é o diâmetro da circunferência circunscrita. O comprimento da hipotenusa é L = √[(6 - 0)² + (0 - 8)²] = √(36 + 64) = √100 = 10 m. O raio é R = L / 2 = 5 m. O centro da circunferência é o ponto médio da hipotenusa AB: C = ((6 + 0)/2, (0 + 8)/2) = (3, 4)."
      },
      {
        id: "b",
        text: "R = 10 m e C(6, 8).",
        isCorrect: false,
        distractorRationale: "Confunde o diâmetro com o raio e usa as coordenadas do vértice em vez do ponto médio."
      },
      {
        id: "c",
        text: "R = 7 m e C(3, 4).",
        isCorrect: false,
        distractorRationale: "Soma (6 + 8)/2 = 7 m para o raio em vez de aplicar o teorema de Pitágoras."
      },
      {
        id: "d",
        text: "R = 5 m e C(4, 3).",
        isCorrect: false,
        distractorRationale: "Inverte as coordenadas da abscissa e ordenada do centro."
      },
      {
        id: "e",
        text: "R = 25 m e C(3, 4).",
        isCorrect: false,
        distractorRationale: "Confunde R² = 25 com o raio linear R."
      }
    ],
    detailedExplanation: {
      summary: "Em triângulos retângulos, o centro da circunferência circunscrita é o ponto médio da hipotenusa: C(3, 4) e raio R = 10/2 = 5 m.",
      stepByStep: [
        "1. Notar que o triângulo formado pelos eixos é retângulo em O(0, 0).",
        "2. Pelo teorema do ângulo inscrito, todo triângulo retângulo inscrito tem a hipotenusa como diâmetro.",
        "3. Comprimento da hipotenusa AB: √[6² + 8²] = √100 = 10 m.",
        "4. Raio da circunferência: R = 10 / 2 = 5 m.",
        "5. Centro: ponto médio de AB: x_c = (6 + 0)/2 = 3 e y_c = (0 + 8)/2 = 4 => C(3, 4)."
      ],
      coreConcept: "A hipotenusa de qualquer triângulo retângulo inscrito em uma circunferência é um diâmetro dessa circunferência.",
      trapWarning: "Lembre-se de que o centro é a média aritmética das coordenadas das extremidades da hipotenusa."
    },
    commonTraps: [
      "Calcular a média aritmética dos catetos (6 + 8)/2 em vez da hipotenusa.",
      "Confundir raio com diâmetro."
    ],
    tags: ["Matemática", "Geometria Analítica", "Triângulo Retângulo", "Circunferência Circunscrita", "Ponto Médio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-017",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Potência de Ponto em Relação a uma Circunferência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "A potência de um ponto exterior $P(x_0, y_0)$ em relação a uma circunferência $\\lambda: (x - a)^2 + (y - b)^2 = R^2$ é dada pelo valor escalar $Pot(P) = d^2 - R^2$, onde $d$ é a distância euclidiana de $P$ ao centro da circunferência. Geometricamente, a raiz quadrada da potência expressa exatamente o comprimento do segmento tangente $PT$ traçado de $P$ até o ponto de contato $T$ com a circunferência. Uma torre de observação está no ponto $P(10, 0)$ e uma área circular de preservação tem contorno dado por $x^2 + y^2 = 36$, com escala em quilômetros.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar. Atual, 2019."
    },
    prompt: "O comprimento do segmento de visada tangente que liga a torre ao ponto de tangência da área de preservação é de",
    options: [
      {
        id: "a",
        text: "8 km.",
        isCorrect: true,
        distractorRationale: "Correto: O centro é C(0, 0) e o raio é R = √36 = 6 km. A distância do ponto P(10, 0) ao centro é d = 10 km. Pelo Teorema de Pitágoras no triângulo retângulo PTC (onde o raio CT é perpendicular à tangente PT): d² = R² + PT² => 10² = 6² + PT² => 100 = 36 + PT² => PT² = 64 => PT = 8 km."
      },
      {
        id: "b",
        text: "4 km.",
        isCorrect: false,
        distractorRationale: "Subtrai 10 - 6 = 4 km, que é a menor distância do ponto à circunferência, não o segmento tangente."
      },
      {
        id: "c",
        text: "64 km.",
        isCorrect: false,
        distractorRationale: "Esquece de extrair a raiz quadrada de PT² = 64."
      },
      {
        id: "d",
        text: "12 km.",
        isCorrect: false,
        distractorRationale: "Soma 6 + 10 / 2 arbitrariamente."
      },
      {
        id: "e",
        text: "16 km.",
        isCorrect: false,
        distractorRationale: "Dobra a distância mínima 4 km."
      }
    ],
    detailedExplanation: {
      summary: "Pelo triângulo retângulo do raio, tangente e hipotenusa d, temos PT = √(d² - R²) = √(100 - 36) = √64 = 8 km.",
      stepByStep: [
        "1. Identificar o centro C(0, 0), raio R = 6 km e ponto exterior P(10, 0).",
        "2. Calcular a distância do ponto exterior ao centro: d = 10 km.",
        "3. Notar que o raio no ponto de tangência T é perpendicular ao segmento PT.",
        "4. Aplicar Pitágoras: PT² + R² = d² => PT² + 36 = 100.",
        "5. Resolver: PT² = 64 => PT = 8 km."
      ],
      coreConcept: "O segmento tangente traçado de um ponto exterior a uma circunferência é o cateto de um triângulo retângulo de hipotenusa d e outro cateto R.",
      trapWarning: "Cuidado: a menor distância linear de P à circunferência é d - R = 4 km; o segmento tangente é √(d² - R²) = 8 km."
    },
    commonTraps: [
      "Confundir o comprimento do segmento tangente com a distância mínima (d - R).",
      "Esquecer de extrair a raiz quadrada de 64."
    ],
    tags: ["Matemática", "Geometria Analítica", "Segmento Tangente", "Potência de Ponto", "Pitágoras"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-018",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria",
    subtopic: "Assíntotas da Hipérbole e Comportamento Assintótico",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em astrofísica de trajetórias de fuga gravitacional, sondas espaciais que realizam manobras de estilingue gravitacional não fechadas em torno de planetas massivos descrevem órbitas hiperbólicas. Conforme a sonda se afasta indefinidamente do corpo central, sua trajetória aproxima-se assintoticamente de duas retas concorrentes que passam pelo centro da hipérbole, denominadas assíntotas. Uma dessas trajetórias no plano tem equação $\\frac{x^2}{16} - \\frac{y^2}{25} = 1$.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar. Atual, 2019."
    },
    prompt: "As equações das duas retas assíntotas que delimitam as direções assintóticas dessa trajetória hiperbólica são",
    options: [
      {
        id: "a",
        text: "y = ± (5/4)x.",
        isCorrect: true,
        distractorRationale: "Correto: Para a hipérbole x²/a² - y²/b² = 1 com centro na origem, as equações das assíntotas são obtidas igualando a expressão a zero: x²/a² - y²/b² = 0 => y²/b² = x²/a² => y = ± (b/a)x. Com a² = 16 => a = 4 e b² = 25 => b = 5, as assíntotas são y = ± (5/4)x."
      },
      {
        id: "b",
        text: "y = ± (4/5)x.",
        isCorrect: false,
        distractorRationale: "Inverte os semieixos, calculando a/b em vez de b/a."
      },
      {
        id: "c",
        text: "y = ± (25/16)x.",
        isCorrect: false,
        distractorRationale: "Usa a razão dos quadrados b²/a² sem extrair as raízes."
      },
      {
        id: "d",
        text: "y = ± (16/25)x.",
        isCorrect: false,
        distractorRationale: "Usa a² / b² sem extrair raízes."
      },
      {
        id: "e",
        text: "y = ± x.",
        isCorrect: false,
        distractorRationale: "Assume hipérbole equilátera (onde a = b), o que não é o caso pois a = 4 e b = 5."
      }
    ],
    detailedExplanation: {
      summary: "As assíntotas de x²/a² - y²/b² = 1 são y = ±(b/a)x. Com a = 4 e b = 5, temos y = ±(5/4)x.",
      stepByStep: [
        "1. Identificar a = √16 = 4 e b = √25 = 5 na hipérbole horizontal.",
        "2. A equação das assíntotas é obtida fazendo o segundo membro igual a zero: x²/16 - y²/25 = 0.",
        "3. Isolar y²: y² = (25/16)x².",
        "4. Extrair a raiz quadrada: y = ± √(25/16) * x = ± (5/4)x."
      ],
      coreConcept: "As assíntotas de uma hipérbole horizontal x²/a² - y²/b² = 1 são retas que passam pelo centro com inclinações m = ± b/a.",
      trapWarning: "Cuidado com a inclinação: como y está dividido por b, isolar y gera o fator b/a, e não a/b."
    },
    commonTraps: [
      "Inverter a fração para 4/5.",
      "Esquecer de extrair a raiz quadrada de 25/16."
    ],
    tags: ["Matemática", "Geometria Analítica", "Hipérbole", "Assíntotas", "Cônicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-019",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Condição de Existência de uma Circunferência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na análise de estabilidade de um algoritmo computacional para detecção de anomalias circulares em imagens médicas tomográficas, uma equação quadrática nas variáveis $x$ e $y$ é parametrizada na forma $x^2 + y^2 - 6x + 4y + k = 0$.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar. Atual, 2019."
    },
    prompt: "Para que essa equação represente geometricamente uma circunferência real no plano cartesiano (e não um ponto ou um conjunto vazio), a constante real $k$ deve satisfazer a condição",
    options: [
      {
        id: "a",
        text: "k < 13.",
        isCorrect: true,
        distractorRationale: "Correto: Completando quadrados na equação geral: (x - 3)² - 9 + (y + 2)² - 4 + k = 0 => (x - 3)² + (y + 2)² = 13 - k. Para que a equação represente uma circunferência real de raio estritamente positivo (R > 0), o lado direito R² deve ser maior que zero: 13 - k > 0 => k < 13. (Se k = 13, representa apenas um ponto isolado; se k > 13, representa conjunto vazio)."
      },
      {
        id: "b",
        text: "k > 13.",
        isCorrect: false,
        distractorRationale: "Inverte a desigualdade, o que geraria R² < 0 (conjunto vazio no plano real)."
      },
      {
        id: "c",
        text: "k = 13.",
        isCorrect: false,
        distractorRationale: "Nesse caso o raio seria nulo (R = 0), degenerando a circunferência no ponto único (3, -2)."
      },
      {
        id: "d",
        text: "k < 25.",
        isCorrect: false,
        distractorRationale: "Calcula 6² - 4² ou outro valor por erro aritmético."
      },
      {
        id: "e",
        text: "k ≤ 0.",
        isCorrect: false,
        distractorRationale: "Supõe que o termo independente precise ser obrigatoriamente não positivo."
      }
    ],
    detailedExplanation: {
      summary: "Completando quadrados, R² = 3² + (-2)² - k = 13 - k. Para representar circunferência real, R² > 0 => k < 13.",
      stepByStep: [
        "1. Identificar coeficientes lineares: -2a = -6 => a = 3; -2b = 4 => b = -2.",
        "2. A relação para o raio é R² = a² + b² - k.",
        "3. Substituir valores: R² = 3² + (-2)² - k = 9 + 4 - k = 13 - k.",
        "4. Condição de existência de circunferência real: R² > 0.",
        "5. Impor: 13 - k > 0 => k < 13."
      ],
      coreConcept: "A equação geral x² + y² - 2ax - 2by + c = 0 representa uma circunferência se e somente se a² + b² - c > 0.",
      trapWarning: "Cuidado: se k = 13, a figura é um ponto degenerado (raio zero), e não uma circunferência."
    },
    commonTraps: [
      "Incluir a igualdade (k ≤ 13), esquecendo que raio zero não é circunferência.",
      "Inverter o sinal da desigualdade."
    ],
    tags: ["Matemática", "Geometria Analítica", "Condição de Existência", "Circunferência", "Raio"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-020",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria",
    subtopic: "Elipse Vertical com Focos no Eixo das Ordenadas",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No projeto arquitetônico de uma cúpula oval de um museu de ciências, a curvatura superior segue o formato de uma elipse vertical centrada na origem, com os focos alinhados sobre o eixo $y$. A equação que rege a seção transversal da cúpula é $\\frac{x^2}{36} + \\frac{y^2}{100} = 1$, onde as medidas estão em metros.",
      source: "DANTE, L. R. Matemática: Contexto e Aplicações. Ática, 2020."
    },
    prompt: "As coordenadas dos dois focos ($F_1$ e $F_2$) dessa elipse vertical são",
    options: [
      {
        id: "a",
        text: "F₁(0, -8) e F₂(0, 8).",
        isCorrect: true,
        distractorRationale: "Correto: Como o denominador sob y² (100) é maior que o sob x² (36), o eixo maior está sobre o eixo y (elipse vertical). Temos a² = 100 => a = 10 e b² = 36 => b = 6. Pela relação fundamental da elipse a² = b² + c²: 100 = 36 + c² => c² = 64 => c = 8 m. Como os focos localizam-se sobre o eixo y, suas coordenadas são (0, -c) e (0, c), ou seja, F1(0, -8) e F2(0, 8)."
      },
      {
        id: "b",
        text: "F₁(-8, 0) e F₂(8, 0).",
        isCorrect: false,
        distractorRationale: "Posiciona os focos sobre o eixo x, confundindo elipse vertical com elipse horizontal."
      },
      {
        id: "c",
        text: "F₁(0, -10) e F₂(0, 10).",
        isCorrect: false,
        distractorRationale: "Usa os vértices do eixo maior no lugar dos focos."
      },
      {
        id: "d",
        text: "F₁(-6, 0) e F₂(6, 0).",
        isCorrect: false,
        distractorRationale: "Usa os vértices do eixo menor no lugar dos focos."
      },
      {
        id: "e",
        text: "F₁(0, -64) e F₂(0, 64).",
        isCorrect: false,
        distractorRationale: "Esquece de extrair a raiz quadrada de c² = 64."
      }
    ],
    detailedExplanation: {
      summary: "Com a² = 100 sob y² e b² = 36 sob x², a elipse é vertical com a = 10 e b = 6. c = √(100 - 36) = 8. Focos em (0, ±8).",
      stepByStep: [
        "1. Identificar o maior denominador: 100 está sob y², logo a² = 100 e a elipse tem eixo maior vertical.",
        "2. Determinar parâmetros: a = 10 e b = √36 = 6.",
        "3. Calcular semidistância focal c: a² = b² + c² => 100 = 36 + c² => c² = 64 => c = 8.",
        "4. Como o eixo principal é vertical (eixo y), os focos têm abscissa nula: F1(0, -8) e F2(0, 8)."
      ],
      coreConcept: "Na elipse, o eixo focal coincide com o eixo coordenado do termo que possui o maior denominador.",
      trapWarning: "Sempre verifique se a elipse é horizontal ou vertical observando qual denominador é maior."
    },
    commonTraps: [
      "Colocar os focos no eixo x: (-8, 0) e (8, 0).",
      "Confundir as coordenadas dos focos com as dos vértices (0, ±10)."
    ],
    tags: ["Matemática", "Geometria Analítica", "Elipse Vertical", "Focos", "Cônicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-021",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Equação da Reta que Passa pelos Centros de Duas Circunferências",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um projeto de alinhamento de rotores mecânicos industriais, duas peças cilíndricas têm seções transversais com contornos representados por $\\lambda_1: (x - 2)^2 + (y - 3)^2 = 9$ e $\\lambda_2: (x - 6)^2 + (y - 11)^2 = 25$. Para instalar um eixo rígido de acoplamento direto, os engenheiros precisam traçar a reta que conecta simultaneamente os centros geométricos das duas peças.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar. Atual, 2019."
    },
    prompt: "O coeficiente angular ($m$) da reta que conecta os centros dessas duas circunferências é igual a",
    options: [
      {
        id: "a",
        text: "2,0.",
        isCorrect: true,
        distractorRationale: "Correto: Os centros das circunferências são C1(2, 3) e C2(6, 11). O coeficiente angular da reta que passa por C1 e C2 é m = (y2 - y1) / (x2 - x1) = (11 - 3) / (6 - 2) = 8 / 4 = 2,0."
      },
      {
        id: "b",
        text: "0,5.",
        isCorrect: false,
        distractorRationale: "Inverte a razão calculando Δx / Δy = 4 / 8 = 0,5."
      },
      {
        id: "c",
        text: "1,5.",
        isCorrect: false,
        distractorRationale: "Calcula 6 / 4 = 1,5 por erro na subtração das ordenadas."
      },
      {
        id: "d",
        text: "4,0.",
        isCorrect: false,
        distractorRationale: "Usa apenas o denominador Δx = 4."
      },
      {
        id: "e",
        text: "8,0.",
        isCorrect: false,
        distractorRationale: "Usa apenas o numerador Δy = 8."
      }
    ],
    detailedExplanation: {
      summary: "Com centros C1(2, 3) e C2(6, 11), a inclinação da reta dos centros é m = (11 - 3) / (6 - 2) = 8 / 4 = 2,0.",
      stepByStep: [
        "1. Identificar o centro de λ1: C1(2, 3).",
        "2. Identificar o centro de λ2: C2(6, 11).",
        "3. Aplicar a fórmula do coeficiente angular: m = Δy / Δx.",
        "4. Calcular: m = (11 - 3) / (6 - 2) = 8 / 4 = 2,0."
      ],
      coreConcept: "A reta dos centros de duas circunferências tem coeficiente angular m = (y2 - y1) / (x2 - x1).",
      trapWarning: "Lembre-se de que a inclinação é Δy / Δx e não Δx / Δy."
    },
    commonTraps: [
      "Inverter a fração calculando Δx / Δy.",
      "Errar os sinais das coordenadas dos centros."
    ],
    tags: ["Matemática", "Geometria Analítica", "Coeficiente Angular", "Centros", "Reta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-022",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Distância Mínima e Máxima de um Ponto a uma Circunferência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No planejamento de rotas de segurança de uma refinaria, uma estação de combate a incêndios está situada nas coordenadas $E(10, 10)$. O reservatório de água pressurizada é circular e seu perímetro é dado pela equação $(x - 2)^2 + (y - 4)^2 = 25$, com medidas expressas em dezenas de metros.",
      source: "DANTE, L. R. Matemática: Contexto e Aplicações. Ática, 2020."
    },
    prompt: "A menor distância euclidiana que separa a estação de combate a incêndios da borda desse reservatório circular é de",
    options: [
      {
        id: "a",
        text: "5 dezenas de metros.",
        isCorrect: true,
        distractorRationale: "Correto: O reservatório tem centro C(2, 4) e raio R = √25 = 5. A distância entre a estação E(10, 10) e o centro C é d = √[(10 - 2)² + (10 - 4)²] = √[8² + 6²] = √[64 + 36] = √100 = 10 dezenas de metros. A menor distância de um ponto exterior à borda de uma circunferência é dada por d_min = d - R = 10 - 5 = 5 dezenas de metros."
      },
      {
        id: "b",
        text: "10 dezenas de metros.",
        isCorrect: false,
        distractorRationale: "Calcula a distância até o centro, esquecendo de subtrair o raio do reservatório."
      },
      {
        id: "c",
        text: "15 dezenas de metros.",
        isCorrect: false,
        distractorRationale: "Calcula a maior distância até a borda oposta (d + R = 10 + 5 = 15)."
      },
      {
        id: "d",
        text: "25 dezenas de metros.",
        isCorrect: false,
        distractorRationale: "Confunde R² = 25 com a distância procurada."
      },
      {
        id: "e",
        text: "7 dezenas de metros.",
        isCorrect: false,
        distractorRationale: "Calcula a média aritmética entre 6 e 8."
      }
    ],
    detailedExplanation: {
      summary: "A distância de E(10, 10) ao centro C(2, 4) é d = 10. A distância mínima à borda é d - R = 10 - 5 = 5 dezenas de metros.",
      stepByStep: [
        "1. Identificar centro C(2, 4) e raio R = √25 = 5.",
        "2. Calcular a distância d do ponto E(10, 10) ao centro C: d = √[(10 - 2)² + (10 - 4)²] = √(64 + 36) = √100 = 10.",
        "3. A menor distância do ponto à circunferência é d_min = d - R.",
        "4. Substituir: d_min = 10 - 5 = 5 dezenas de metros.",
        "5. (A maior distância seria d_max = d + R = 10 + 5 = 15)."
      ],
      coreConcept: "A menor distância de um ponto exterior a uma circunferência é d - R; a maior distância é d + R.",
      trapWarning: "Não confunda a distância do ponto ao centro (d) com a distância até a borda (d - R)."
    },
    commonTraps: [
      "Responder a distância ao centro (10) em vez da distância à borda (5).",
      "Calcular d + R (15), que corresponde à distância máxima."
    ],
    tags: ["Matemática", "Geometria Analítica", "Distância Mínima", "Circunferência", "Pontos Notáveis"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-023",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria",
    subtopic: "Eixo Radical de Duas Circunferências Secantes",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um software de computação gráfica para modelagem de fusões geométricas, o eixo radical de duas circunferências não concêntricas é a reta formada pelo lugar geométrico dos pontos que possuem potências iguais em relação às duas circunferências. Quando duas circunferências são secantes, o eixo radical coincide exatamente com a reta suporte da corda comum que conecta os dois pontos de intersecção. Considere as circunferências $\\lambda_1: x^2 + y^2 - 4x - 6 = 0$ e $\\lambda_2: x^2 + y^2 - 2y - 6 = 0$.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar. Atual, 2019."
    },
    prompt: "A equação geral da reta que define o eixo radical dessas duas circunferências é dada por",
    options: [
      {
        id: "a",
        text: "2x - y = 0.",
        isCorrect: true,
        distractorRationale: "Correto: Subtraindo membro a membro as equações das duas circunferências: (x² + y² - 4x - 6) - (x² + y² - 2y - 6) = 0 => -4x + 2y = 0. Multiplicando toda a equação por -1/2: 2x - y = 0. Essa é a equação da reta suporte da corda comum (eixo radical)."
      },
      {
        id: "b",
        text: "4x + 2y - 12 = 0.",
        isCorrect: false,
        distractorRationale: "Soma as equações em vez de subtrair para eliminar os termos quadráticos."
      },
      {
        id: "c",
        text: "x + y = 0.",
        isCorrect: false,
        distractorRationale: "Erra a simplificação de -4x + 2y = 0."
      },
      {
        id: "d",
        text: "2x + y = 0.",
        isCorrect: false,
        distractorRationale: "Erra o sinal na subtração de -(-2y)."
      },
      {
        id: "e",
        text: "x - 2y = 0.",
        isCorrect: false,
        distractorRationale: "Inverte os coeficientes de x e y."
      }
    ],
    detailedExplanation: {
      summary: "Subtraindo λ1 de λ2, eliminamos os termos quadráticos: (-4x - 6) - (-2y - 6) = 0 => -4x + 2y = 0 => 2x - y = 0.",
      stepByStep: [
        "1. Escrever λ1: x² + y² - 4x - 6 = 0.",
        "2. Escrever λ2: x² + y² - 2y - 6 = 0.",
        "3. Subtrair λ1 - λ2: (x² - x²) + (y² - y²) - 4x - (-2y) - 6 - (-6) = 0.",
        "4. Simplificar: -4x + 2y = 0.",
        "5. Dividir por -2: 2x - y = 0."
      ],
      coreConcept: "A equação do eixo radical de duas circunferências obtém-se diretamente pela subtração de suas equações gerais.",
      trapWarning: "A subtração de duas equações de circunferências sempre elimina os termos x² e y², resultando em uma equação linear de reta."
    },
    commonTraps: [
      "Somar as equações mantendo termos quadráticos.",
      "Errar o jogo de sinais na subtração."
    ],
    tags: ["Matemática", "Geometria Analítica", "Eixo Radical", "Corda Comum", "Circunferências"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-024",
    area: "matematica",
    competence: 2,
    skill: 7,
    topic: "Geometria",
    subtopic: "Classificação Geral de Cônicas pela Equação Geral do 2º Grau",
    difficulty: 2,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na análise de curvas de nível em levantamentos altimétricos, as seções cônicas clássicas (circunferência, elipse, parábola e hipérbole) surgem como curvas de corte de cones retos por planos secantes com diferentes inclinações. No plano cartesiano, curvas da família $A x^2 + C y^2 + D x + E y + F = 0$ (sem termo misto $xy$) podem ser classificadas imediatamente a partir dos sinais e magnitudes dos coeficientes quadráticos $A$ e $C$.",
      source: "DANTE, L. R. Matemática: Contexto e Aplicações. Ática, 2020."
    },
    prompt: "Para que a equação represente geometricamente uma elipse não degenerada (com eixos de comprimentos desiguais), os coeficientes quadráticos $A$ e $C$ devem satisfazer a condição",
    options: [
      {
        id: "a",
        text: "terem sinais opostos (A · C < 0).",
        isCorrect: false,
        distractorRationale: "Sinais opostos caracterizam uma hipérbole."
      },
      {
        id: "b",
        text: "um deles ser igual a zero e o outro diferente de zero (A · C = 0 com A ≠ 0 ou C ≠ 0).",
        isCorrect: false,
        distractorRationale: "Caracteriza uma parábola."
      },
      {
        id: "c",
        text: "serem exatamente iguais e de mesmo sinal (A = C ≠ 0).",
        isCorrect: false,
        distractorRationale: "Caracteriza uma circunferência."
      },
      {
        id: "d",
        text: "terem o mesmo sinal, porém com magnitudes diferentes (A · C > 0 e A ≠ C).",
        isCorrect: true,
        distractorRationale: "Correto: Na equação Ax² + Cy² + Dx + Ey + F = 0, quando A e C possuem o mesmo sinal (A * C > 0) e magnitudes desiguais (A ≠ C), a curva é uma elipse com eixos maior e menor de comprimentos distintos. Se fossem iguais (A = C), seria uma circunferência."
      },
      {
        id: "e",
        text: "ambos serem nulos simultaneamente (A = C = 0).",
        isCorrect: false,
        distractorRationale: "Representa uma reta (equação do 1º grau)."
      }
    ],
    detailedExplanation: {
      summary: "Uma elipse tem coeficientes quadráticos do mesmo sinal mas valores numéricos distintos: A * C > 0 e A ≠ C.",
      stepByStep: [
        "1. Se A = C (mesmo sinal): circunferência.",
        "2. Se A e C têm o mesmo sinal mas A ≠ C: elipse.",
        "3. Se A e C têm sinais opostos (A * C < 0): hipérbole.",
        "4. Se um deles for zero: parábola.",
        "5. Portanto, elipse requer A * C > 0 e A ≠ C."
      ],
      coreConcept: "Classificação de cônicas: mesmo sinal e A ≠ C = elipse; mesmo sinal e A = C = circunferência; sinais opostos = hipérbole; um nulo = parábola.",
      trapWarning: "Não confunda a elipse (A * C > 0 e A ≠ C) com a circunferência (A = C)."
    },
    commonTraps: [
      "Confundir a elipse com a circunferência (onde A = C).",
      "Confundir com a hipérbole (onde A * C < 0)."
    ],
    tags: ["Matemática", "Geometria Analítica", "Cônicas", "Classificação", "Equação Geral"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-CIR-025",
    area: "matematica",
    competence: 2,
    skill: 8,
    topic: "Geometria",
    subtopic: "Translação de Cônicas e Identificação de Centro da Elipse",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No sistema de georreferenciamento de um projeto de irrigação por pivô central com suporte móvel assimétrico, a área de alcance da água foi mapeada pela equação da elipse transladada $4x^2 + 9y^2 - 16x + 54y + 61 = 0$, com distâncias medidas em decâmetros.",
      source: "IEZZI, G. Fundamentos de Matemática Elementar. Atual, 2019."
    },
    prompt: "O centro dessa elipse e a medida de seu semieixo maior ($a$) são, respectivamente,",
    options: [
      {
        id: "a",
        text: "C(2, -3) e a = 3 decâmetros.",
        isCorrect: true,
        distractorRationale: "Correto: Agrupando e completando quadrados: 4(x² - 4x) + 9(y² + 6y) = -61 => 4[(x - 2)² - 4] + 9[(y + 3)² - 9] = -61 => 4(x - 2)² - 16 + 9(y + 3)² - 81 = -61 => 4(x - 2)² + 9(y + 3)² = -61 + 16 + 81 = 36. Dividindo ambos os membros por 36: (x - 2)² / 9 + (y + 3)² / 4 = 1. O centro é C(2, -3). Como o maior denominador sob os termos quadráticos é 9, temos a² = 9 => a = 3 decâmetros (semieixo maior horizontal)."
      },
      {
        id: "b",
        text: "C(-2, 3) e a = 3 decâmetros.",
        isCorrect: false,
        distractorRationale: "Inverte os sinais das coordenadas do centro C(h, k)."
      },
      {
        id: "c",
        text: "C(2, -3) e a = 9 decâmetros.",
        isCorrect: false,
        distractorRationale: "Confunde o quadrado do semieixo a² = 9 com o semieixo linear a."
      },
      {
        id: "d",
        text: "C(4, -9) e a = 2 decâmetros.",
        isCorrect: false,
        distractorRationale: "Usa os coeficientes quadráticos no centro e indica o semieixo menor b = 2."
      },
      {
        id: "e",
        text: "C(2, -3) e a = 2 decâmetros.",
        isCorrect: false,
        distractorRationale: "Indica o semieixo menor b = 2 em vez do semieixo maior a."
      }
    ],
    detailedExplanation: {
      summary: "Completando quadrados, obtemos (x - 2)²/9 + (y + 3)²/4 = 1, resultando em centro C(2, -3) e semieixo maior a = √9 = 3 decâmetros.",
      stepByStep: [
        "1. Agrupar os termos: 4(x² - 4x) + 9(y² + 6y) = -61.",
        "2. Completar quadrados: 4[(x - 2)² - 4] + 9[(y + 3)² - 9] = -61.",
        "3. Desenvolver constantes: 4(x - 2)² - 16 + 9(y + 3)² - 81 = -61.",
        "4. Isolar: 4(x - 2)² + 9(y + 3)² = 36.",
        "5. Dividir por 36: (x - 2)² / 9 + (y + 3)² / 4 = 1.",
        "6. Identificar centro C(h, k) = (2, -3).",
        "7. O maior denominador é a² = 9 => a = 3 decâmetros."
      ],
      coreConcept: "A forma reduzida da elipse transladada é (x - h)²/a² + (y - k)²/b² = 1 com centro em (h, k).",
      trapWarning: "Cuidado: o semieixo maior é sempre a raiz do maior denominador (a = √9 = 3)."
    },
    commonTraps: [
      "Inverter os sinais das coordenadas do centro.",
      "Confundir o semieixo maior (a = 3) com o menor (b = 2)."
    ],
    tags: ["Matemática", "Geometria Analítica", "Elipse Transladada", "Completar Quadrados", "Semieixo Maior"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
