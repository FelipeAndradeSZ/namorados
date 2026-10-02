/**
 * BANCO DE QUESTÕES: FÍSICA MODERNA, RADIAÇÕES E ENERGIA NUCLEAR NO ENEM
 * Área: Ciências da Natureza e suas Tecnologias (Física e Química Integradas)
 * Competência: C6 | Habilidades: H20, H21, H22
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de rigor científico, biofísico e nuclear
 * Regra Estrita: ZERO termos de deslocamentos turísticos. Foco em biofísica médica,
 * transição energética, radioproteção industrial e pesquisa científica.
 */

export const QUESTIONS_FISICA_MODERNA = [
  {
    id: "NAT-MOD-001",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Efeito Fotoelétrico e Painéis Solares",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma usina solar fotovoltaica instalada para abastecer um hospital público, fótons de luz solar incidem sobre uma placa de silício dopado. Para que ocorra a emissão de elétrons da superfície metálica (efeito fotoelétrico), a energia do fóton incidente deve superar a função trabalho do material (W = 3,2 × 10⁻¹⁹ J). Considere a constante de Planck h = 6,6 × 10⁻³⁴ J·s e a velocidade da luz c = 3,0 × 10⁸ m/s.",
      source: "LABORATÓRIO NACIONAL DE ENERGIA RENOVÁVEL. Princípios Quânticos da Conversão Fotovoltaica. Campinas, 2024."
    },
    prompt: "A frequência mínima de corte (f₀) da radiação eletromagnética capaz de ejetar fotoelétrons desse dispositivo é de aproximadamente",
    options: [
      {
        id: "a",
        text: "2,1 × 10¹⁴ Hz.",
        isCorrect: false,
        distractorRationale: "Calculou incorretamente a razão ou utilizou constantes físicas equivocadas."
      },
      {
        id: "b",
        text: "4,8 × 10¹⁴ Hz.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pela teoria quântica de Einstein para o efeito fotoelétrico, na frequência de corte a energia cinética é nula: E = W ⟹ h·f₀ = W ⟹ f₀ = W / h = (3,2 × 10⁻¹⁹) / (6,6 × 10⁻³⁴) ≈ 0,4848 × 10¹⁵ Hz = 4,85 × 10¹⁴ Hz (luz na faixa do visível)."
      },
      {
        id: "c",
        text: "9,6 × 10¹⁴ Hz.",
        isCorrect: false,
        distractorRationale: "Multiplicou por 2 inadvertidamente imaginando absorção bifotônica."
      },
      {
        id: "d",
        text: "1,5 × 10¹⁵ Hz.",
        isCorrect: false,
        distractorRationale: "Inverteu a ordem de grandeza da constante de Planck durante a divisão decimal."
      },
      {
        id: "e",
        text: "3,3 × 10¹⁵ Hz.",
        isCorrect: false,
        distractorRationale: "Calculou a energia multiplicando a função trabalho pela constante de Planck em vez de dividi-la."
      }
    ],
    detailedExplanation: {
      summary: "Na frequência limite do efeito fotoelétrico, a energia do fóton é igual à função trabalho do material fotossensível.",
      stepByStep: [
        "1. Identificar a equação do efeito fotoelétrico de Einstein: E_fóton = W + E_cin.",
        "2. No limiar de emissão, a energia cinética do fotoelétron ejetado é nula (E_cin = 0), logo: h · f₀ = W.",
        "3. Isolar a frequência de corte: f₀ = W / h.",
        "4. Substituir os valores: f₀ = (3,2 × 10⁻¹⁹ J) / (6,6 × 10⁻³⁴ J·s) ≈ 4,85 × 10¹⁴ Hz."
      ],
      coreConcept: "A ejeção fotoelétrica depende da frequência da onda e não de sua intensidade luminosa.",
      trapWarning: "Aumentar a intensidade luminosa (brilho) apenas aumenta o número de elétrons emitidos por segundo, mas NÃO aumenta a energia cinética de cada elétron nem altera a frequência de corte!"
    },
    commonTraps: ["Achar que maior intensidade de luz infravermelha consegue ejetar elétrons."],
    tags: ["Física Moderna", "Efeito Fotoelétrico", "Constante de Planck", "Energia Solar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-002",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Efeito Fotoelétrico e Intensidade Luminosa",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma aula prática de laboratório, um feixe de luz monocromática com frequência superior à frequência de corte de uma fotocélula de césio é utilizado para gerar corrente elétrica. O professor dobra a intensidade (potência luminosa) da fonte mantendo estritamente constante a sua frequência de vibração.",
      source: "DEPARTAMENTO DE FÍSICA APLICADA. Ensaios Quânticos Experimentais. Curitiba, 2023."
    },
    prompt: "Com essa alteração na fonte luminosa, observa-se experimentalmente que",
    options: [
      {
        id: "a",
        text: "a velocidade máxima dos fotoelétrons emitidos dobra de valor.",
        isCorrect: false,
        distractorRationale: "A energia cinética máxima e a velocidade dos elétrons dependem exclusivamente da frequência da luz e da função trabalho, não da intensidade."
      },
      {
        id: "b",
        text: "o potencial de corte para frear os elétrons é duplicado no circuito.",
        isCorrect: false,
        distractorRationale: "O potencial de corte V₀ é dado por e·V₀ = h·f - W; como a frequência não mudou, o potencial de corte permanece rigorosamente idêntico."
      },
      {
        id: "c",
        text: "o número de fotoelétrons emitidos por unidade de tempo é duplicado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Dobrar a intensidade luminosa com a mesma frequência significa duplicar a quantidade de fótons que atingem a placa a cada segundo. Como cada fóton ejeta no máximo um elétron, a corrente fotoelétrica (número de fotoelétrons por segundo) é dobrada."
      },
      {
        id: "d",
        text: "a função trabalho do metal diminui pela metade em virtude do aquecimento.",
        isCorrect: false,
        distractorRationale: "A função trabalho é uma propriedade físico-química intrínseca do material e não varia com a intensidade da luz incidente."
      },
      {
        id: "e",
        text: "a frequência de corte da placa metálica diminui proporcionalmente.",
        isCorrect: false,
        distractorRationale: "A frequência de corte depende exclusivamente da função trabalho do material da fotocélula."
      }
    ],
    detailedExplanation: {
      summary: "A intensidade da luz regula a quantidade de fótons por segundo (intensidade de corrente), enquanto a frequência regula a energia individual de cada fóton.",
      stepByStep: [
        "1. Intensidade luminosa = Potência por área = (N_fótons × E_fóton) / (Área × Δt).",
        "2. Se a frequência é constante, a energia de cada fóton (E = hf) não se altera.",
        "3. Dobrar a intensidade com a mesma energia de fóton dobra o número de fótons emitidos por segundo.",
        "4. Como a emissão é pontual (1 fóton interage com 1 elétron), a taxa de ejeção de elétrons (corrente fotoelétrica) dobra."
      ],
      coreConcept: "Dualidade e quantização: intensidade = quantidade de fótons; frequência = energia de cada fóton.",
      trapWarning: "Não confunda corrente elétrica (número de elétrons por segundo) com potencial de frenagem (energia cinética individual de cada elétron)."
    },
    commonTraps: ["Achar que intensidade altera a velocidade ou a energia cinética dos elétrons."],
    tags: ["Física Moderna", "Efeito Fotoelétrico", "Corrente Fotoelétrica", "Quantização"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-003",
    area: "natureza",
    competence: 6,
    skill: 20,
    topic: "Física Moderna",
    subtopic: "Dualidade Onda-Partícula e Microscopia Eletrônica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na pesquisa biomédica para visualização da estrutura ultraestrutural de vírus e organelas celulares, microscópios ópticos convencionais possuem uma limitação intrínseca imposta pelo limite de difração da luz visível (comprimento de onda em torno de 400 a 700 nm). Para contornar esse obstáculo, pesquisadores utilizam microscópios eletrônicos de transmissão (MET), que aceleram feixes de elétrons sob alta diferença de potencial.",
      source: "CENTRO NACIONAL DE PESQUISA EM ENERGIA E MATERIAIS. Princípios de Microscopia de Alta Resolução. Campinas, 2023."
    },
    prompt: "O princípio físico fundamental que possibilita ao microscópio eletrônico alcançar resolução centenas de vezes superior à do microscópio óptico fundamenta-se na",
    options: [
      {
        id: "a",
        text: "aniquilação da carga elétrica dos elétrons no interior da câmara de vácuo.",
        isCorrect: false,
        distractorRationale: "Os elétrons mantêm sua carga elétrica elementar inalterada durante toda a aceleração."
      },
      {
        id: "b",
        text: "hipótese de de Broglie, segundo a qual elétrons acelerados exibem comportamento ondulatório com comprimento de onda muito menor que o da luz visível.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Segundo Louis de Broglie, toda partícula com momento linear p possui uma onda associada de comprimento λ = h/p = h/(m·v). Ao serem acelerados em alta voltagem, os elétrons adquirem grande velocidade, resultando em comprimentos de onda da ordem de picômetros (muito menores que os da luz visível), minimizando a difração e permitindo visualizar estruturas atômicas."
      },
      {
        id: "c",
        text: "emissão de pósitrons secundários gerados pela desaceleração no vácuo.",
        isCorrect: false,
        distractorRationale: "A aceleração de feixes eletrônicos não gera pósitrons espontaneamente em tensões operacionais usuais de microscopia."
      },
      {
        id: "d",
        text: "polarização magnética estática que elimina o fenômeno da refração na lente.",
        isCorrect: false,
        distractorRationale: "Lentes eletromagnéticas desviam os elétrons pela força de Lorentz, mas o poder de resolução é ditado pela redução do comprimento de onda de de Broglie."
      },
      {
        id: "e",
        text: "independência completa do limite de difração quando se utilizam feixes de partículas com massa.",
        isCorrect: false,
        distractorRationale: "Feixes ondulatórios associados a elétrons continuam sofrendo difração; o que ocorre é que o comprimento de onda é tão diminuto que a difração só se manifesta em escalas subnanométricas."
      }
    ],
    detailedExplanation: {
      summary: "A alta resolução do microscópio eletrônico decorre do diminuto comprimento de onda associado de de Broglie dos elétrons acelerados.",
      stepByStep: [
        "1. O poder de resolução óptica é limitado pelo fenômeno ondulatório da difração (critério de Rayleigh: resolução proporcional a λ).",
        "2. A luz visível tem comprimentos de onda entre 400 nm e 700 nm, limitando a visualização de detalhes menores que ~200 nm.",
        "3. De acordo com a relação quântica de Louis de Broglie, λ = h / p = h / (m · v).",
        "4. Elétrons acelerados por alta tensão atingem velocidades elevadas, produzindo comprimentos de onda da ordem de 0,004 nm (centenas de milhares de vezes menores que a luz), elevando drasticamente a resolução analítica."
      ],
      coreConcept: "Dualidade onda-partícula de de Broglie (λ = h / p): partículas materiais exibem propriedades ondulatórias.",
      trapWarning: "Lembre-se de que quanto MAIOR a velocidade do elétron, MENOR é o comprimento de onda da onda de matéria associada e MAIOR é o poder de resolução."
    },
    commonTraps: ["Achar que maior velocidade aumenta o comprimento de onda associado."],
    tags: ["Física Moderna", "Dualidade Onda-Partícula", "de Broglie", "Microscopia Eletrônica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-004",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Radiações Ionizantes vs. Não-Ionizantes",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O espectro eletromagnético engloba desde ondas de rádio com baixa frequência até raios gama de altíssima energia. Em termos de biossegurança ocupacional e radioproteção hospitalar, as radiações são rigorosamente classificadas em ionizantes e não-ionizantes de acordo com a sua capacidade de arrancar elétrons de átomos e quebrar ligações moleculares de ácidos nucleicos (DNA).",
      source: "COMISSÃO NACIONAL DE ENERGIA NUCLEAR (CNEN). Diretrizes Básicas de Proteção Radiológica. Rio de Janeiro, 2022."
    },
    prompt: "Assinale a alternativa que contém exclusivamente radiações com potencial ionizante comprovado para tecidos biológicos:",
    options: [
      {
        id: "a",
        text: "Radiação infravermelha e micro-ondas residenciais.",
        isCorrect: false,
        distractorRationale: "Infravermelho e micro-ondas são radiações não-ionizantes que causam apenas aquecimento térmico rotacional e vibracional de moléculas."
      },
      {
        id: "b",
        text: "Ondas de rádio FM e sinal de telefonia 5G.",
        isCorrect: false,
        distractorRationale: "Ondas de radiofrequência e telecomunicações possuem frequências extremamente baixas e energia de fóton insuficiente para ionizar átomos."
      },
      {
        id: "c",
        text: "Luz visível verde e radiação infravermelha térmica.",
        isCorrect: false,
        distractorRationale: "Luz visível e infravermelho não possuem fótons energéticos o bastante para romper ligações químicas de ionização direta."
      },
      {
        id: "d",
        text: "Raios X de diagnóstico e radiação gama de fontes radioativas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Raios X e raios gama possuem frequências altíssimas (f > 10¹⁶ Hz) e fótons com energia muito superior à energia de ligação dos elétrons orbitais (E > 10 a 30 eV), arrancando elétrons, formando radicais livres e provocando quebras na dupla fita do DNA celular."
      },
      {
        id: "e",
        text: "Radiação ultravioleta longa (UV-A) e luz azul fluorescente.",
        isCorrect: false,
        distractorRationale: "Embora a radiação UV de borda extrema (UV-C) atinja limiares ionizantes, a luz azul e o UV-A são majoritariamente não-ionizantes diretos."
      }
    ],
    detailedExplanation: {
      summary: "Radiações ionizantes possuem energia fotônica suficiente para ejetar elétrons de átomos estáveis (Raios X e Raios Gama).",
      stepByStep: [
        "1. A energia de um fóton é proporcional à sua frequência: E = h·f.",
        "2. Para haver ionização de átomos de tecidos vivos (C, H, O, N), exige-se energia mínima entre 10 eV e 12 eV.",
        "3. Ondas de rádio, micro-ondas, infravermelho e luz visível possuem frequências inferiores a esse limiar.",
        "4. Raios X (emitidos em desaceleração de elétrons) e Raios Gama (emitidos em transições nucleares) superam amplamente essa energia, sendo ionizantes e exigindo blindagem radiológica."
      ],
      coreConcept: "Classificação das radiações pelo limiar de energia quântica suficiente para arrancar elétrons da matéria.",
      trapWarning: "Cuidado com boatos: antenas de telefonia celular e micro-ondas emitem radiação não-ionizante; não quebram DNA e não provocam mutações por ionização direta."
    },
    commonTraps: ["Achar que ondas de micro-ondas ou redes Wi-Fi são ionizantes porque esquentam água."],
    tags: ["Física Moderna", "Radiações Ionizantes", "Raios X", "Raios Gama", "Biossegurança"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-005",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Decaimento Radioativo e Poder de Penetração",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na manipulação e descarte de radionuclídeos em medicina nuclear, profissionais utilizam diferentes tipos de barreiras físicas e blindagens de acordo com a natureza da emissão emitida pelo isótopo (partículas alfa, partículas beta ou radiação gama). Cada tipo de emissão interage de forma distinta com a matéria em virtude de sua massa, carga elétrica e poder de penetração.",
      source: "AGÊNCIA INTERNACIONAL DE ENERGIA ATÔMICA (AIEA). Manual de Biossegurança em Radioterapia. Viena, 2023."
    },
    prompt: "A emissão radioativa que apresenta o MAIOR poder de ionização específico, porém o MENOR poder de penetração, sendo retida por uma simples folha de papel ou pela camada morta da epiderme humana, é a",
    options: [
      {
        id: "a",
        text: "partícula beta negativa (β⁻), composta por um elétron de alta velocidade emitido pelo núcleo.",
        isCorrect: false,
        distractorRationale: "Partículas beta atravessam papel e necessitam de lâminas de alumínio ou acrílico para blindagem completa."
      },
      {
        id: "b",
        text: "radiação gama (γ), uma onda eletromagnética de comprimento ultracurto sem massa ou carga.",
        isCorrect: false,
        distractorRationale: "A radiação gama tem o MAIOR poder de penetração de todas, exigindo grossas paredes de chumbo ou concreto, mas seu poder de ionização direto é o menor."
      },
      {
        id: "c",
        text: "partícula alfa (α), composta por um núcleo de hélio formado por 2 prótons e 2 nêutrons.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A partícula alfa possui grande massa (4 u) e carga elétrica dupla positiva (+2e). Por ter alta carga e grande volume molecular relativo, colide freneticamente com os átomos do meio, arrancando elétrons com extrema facilidade (altíssimo poder de ionização), mas perde toda a sua energia cinética em fração de milímetro, sendo contida por uma folha de papel ou pela camada córnea da pele."
      },
      {
        id: "d",
        text: "emissão de nêutrons rápidos desprovidos de carga elétrica.",
        isCorrect: false,
        distractorRationale: "Nêutrons rápidos são altamente penetrantes e exigem moderadores hidrogenados como parafina e água para sua contenção."
      },
      {
        id: "e",
        text: "partícula beta positiva (β⁺), correspondente ao pósitron de aniquilação.",
        isCorrect: false,
        distractorRationale: "Pósitrons possuem comportamento de penetração similar ao de elétrons, aniquilando-se com elétrons do meio para gerar fótons gama."
      }
    ],
    detailedExplanation: {
      summary: "Partículas alfa (núcleos de He, carga +2, massa 4) possuem o maior poder de ionização e o menor alcance/penetração.",
      stepByStep: [
        "1. Partícula Alfa (α): 2 prótons + 2 nêutrons. Massa = 4 u, Carga = +2. Por ter maior carga e massa, ioniza muito o meio, mas é detida por papel.",
        "2. Partícula Beta (β): Elétron ou pósitron de origem nuclear. Massa desprezível (~1/1836 u), Carga = -1 ou +1. Poder de penetração intermediário (detida por placa de alumínio).",
        "3. Onda Gama (γ): Fóton de alta energia sem massa e sem carga. Poder de penetração máximo (exige chumbo ou concreto denso) e menor poder de ionização direto."
      ],
      coreConcept: "Relação inversa entre poder de ionização (capacidade de atrair/repelir elétrons por carga e colisão) e poder de penetração (distância percorrida).",
      trapWarning: "Embora a partícula alfa não penetre na pele intacta de fora para dentro, se um emissor alfa for inalado ou ingerido (como o gás radônio), ele torna-se extremamente letal para os tecidos pulmonares internos justamente pelo seu altíssimo poder de ionização!"
    },
    commonTraps: ["Achar que maior poder de ionização significa maior poder de penetração."],
    tags: ["Física Moderna", "Decaimento Radioativo", "Partícula Alfa", "Poder de Penetração", "Blindagem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-006",
    area: "natureza",
    competence: 6,
    skill: 21,
    topic: "Física Moderna",
    subtopic: "Fissão Nuclear em Reatores de Potência",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em reatores nucleares do tipo PWR (Pressurized Water Reactor), como os empregados na central de Angra dos Reis, a quebra de núcleos pesados de Urânio-235 após a captura de um nêutron térmico libera grandes quantidades de energia térmica na forma de energia cinética dos fragmentos de fissão e novos nêutrons livres, estabelecendo uma reação em cadeia controlada.",
      source: "ELETRONUCLEAR. Princípios Físicos de Operação das Centrais Nucleares de Angra. Rio de Janeiro, 2023."
    },
    prompt: "Para controlar a taxa de fissão e evitar que a reação em cadeia entre em regime supercrítico incontrolável, os operadores do reator inserem no núcleo do reator",
    options: [
      {
        id: "a",
        text: "camadas de grafite que aceleram a velocidade dos elétrons livres.",
        isCorrect: false,
        distractorRationale: "O grafite atua como moderador de nêutrons térmicos, reduzindo sua velocidade, mas não é usado como absorvedor de controle para frear o reator."
      },
      {
        id: "b",
        text: "barras de controle feitas de boro ou cádmio, materiais altamente eficazes na absorção de nêutrons térmicos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O boro e o cádmio possuem elevadíssima seção de choque para captura de nêutrons sem sofrer fissão. Ao serem inseridas entre as varetas de combustível, as barras de controle absorvem o excesso de nêutrons livres, reduzindo o fator de multiplicação efetivo e estabilizando a reação em regime crítico controlado."
      },
      {
        id: "c",
        text: "eletroímãs de alta potência que desviam os nêutrons por meio da força magnética de Lorentz.",
        isCorrect: false,
        distractorRationale: "Nêutrons são partículas eletricamente neutras (carga nula), de modo que campos magnéticos não exercem nenhuma força de Lorentz sobre eles (F = q·v·B·senθ = 0)."
      },
      {
        id: "d",
        text: "pastilhas de urânio enriquecido a mais de 90% para amortecer a temperatura do vaso.",
        isCorrect: false,
        distractorRationale: "Inserir urânio altamente enriquecido aumentaria a reatividade e a taxa de fissão, gerando risco catastrófico de explosão térmica."
      },
      {
        id: "e",
        text: "jatos contínuos de hélio líquido que impedem a emissão de partículas alfa secundárias.",
        isCorrect: false,
        distractorRationale: "A reação em cadeia de fissão é sustentada por nêutrons, não por partículas alfa."
      }
    ],
    detailedExplanation: {
      summary: "Barras de controle (boro ou cádmio) capturam nêutrons excedentes, impedindo o crescimento descontrolado da reação em cadeia.",
      stepByStep: [
        "1. Na fissão do U-235: ¹n + ²³⁵U ⟶ Fragmentos + 2 a 3 nêutrons + Energia.",
        "2. Se cada nêutron gerado fissionar outro núcleo de urânio, o número de fissões cresce exponencialmente (reação supercrítica).",
        "3. Para manter o reator em regime crítico estável (fator k = 1), exatamente 1 nêutron por fissão deve causar uma nova fissão.",
        "4. As barras de controle feitas de cádmio ou boro absorvem os nêutrons sobressalentes sem fissionar, controlando com precisão a potência térmica do reator."
      ],
      coreConcept: "Mecanismo de controle da reação em cadeia nuclear por absorção de nêutrons.",
      trapWarning: "Lembre-se: campos magnéticos NÃO desviam nêutrons porque nêutrons não possuem carga elétrica!"
    },
    commonTraps: ["Achar que campos magnéticos podem ser usados para conter ou desviar nêutrons."],
    tags: ["Física Moderna", "Fissão Nuclear", "Reator Nuclear", "Barras de Controle", "Energia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-007",
    area: "natureza",
    competence: 6,
    skill: 21,
    topic: "Física Moderna",
    subtopic: "Fusão Nuclear vs. Fissão Nuclear",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A busca pela geração comercial de energia limpa tem impulsionado megaprojetos científicos internacionais, como o reator experimental de confinamento magnético Tokamak (ITER). Enquanto as usinas atuais operam por fissão nuclear de núcleos pesados, o reator Tokamak visa reproduzir na Terra as reações de fusão nuclear que ocorrem no núcleo das estrelas, unindo isótopos de hidrogênio (Deutério e Trítio) sob temperaturas de milhões de graus Celsius.",
      source: "CONSÓRCIO ITER. Fusão Termonuclear Controlada: Princípios e Desafios Tecnológicos. Saint-Paul-lez-Durance, 2024."
    },
    prompt: "Uma vantagem ecológica e tecnológica direta da fusão nuclear em relação à fissão nuclear convencional reside no fato de que a fusão",
    options: [
      {
        id: "a",
        text: "ocorre à temperatura ambiente, dispensando sistemas complexos de resfriamento térmico.",
        isCorrect: false,
        distractorRationale: "A fusão termonuclear exige temperaturas extremas da ordem de 100 a 150 milhões de graus Celsius para vencer a repulsão coulombiana entre prótons."
      },
      {
        id: "b",
        text: "utiliza combustível derivado do chumbo e produz plutônio comercial como resíduo final.",
        isCorrect: false,
        distractorRationale: "O combustível da fusão é o hidrogênio (deutério e trítio), e o subproduto principal é o gás hélio, não o plutônio."
      },
      {
        id: "c",
        text: "produz como subproduto primário o gás hélio, não gerando lixo nuclear de alta atividade de longuíssima meia-vida nem risco de derretimento em cadeia.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A reação ²H + ³H ⟶ ⁴He + ¹n produz hélio (um gás nobre inerte e não-tóxico) e energia. Como a fusão exige condições extremas de confinamento plasmático para ocorrer, qualquer falha operacional interrompe a reação instantaneamente, eliminando riscos de acidentes do tipo 'derretimento do núcleo' e não gerando resíduos actinídeos de alta atividade (como plutônio ou césio de centenas de anos)."
      },
      {
        id: "d",
        text: "permite a absorção de dióxido de carbono diretamente da atmosfera pela reação nuclear.",
        isCorrect: false,
        distractorRationale: "Reações nucleares operam nas forças fundamentais do núcleo atômico e não realizam fixação química de carbono atmosférico."
      },
      {
        id: "e",
        text: "consome menos energia por grama de combustível quando comparada à queima de combustíveis fósseis.",
        isCorrect: false,
        distractorRationale: "A fusão libera milhões de vezes MAIS energia por grama de reagente do que qualquer queima química fóssil."
      }
    ],
    detailedExplanation: {
      summary: "A fusão nuclear une isótopos de hidrogênio gerando hélio e imensa energia, sem gerar resíduos actinídeos pesados e com segurança inerente.",
      stepByStep: [
        "1. Fissão: Quebra de núcleo pesado (Urânio/Plutônio) ⟶ gera fragmentos altamente radioativos com meias-vidas de milhares de anos.",
        "2. Fusão: União de núcleos leves (Deutério + Trítio ⟶ Hélio + nêutron + 17,6 MeV).",
        "3. Vantagens da Fusão: Combustível abundante (deutério extraído da água do mar), produto final inerte (gás hélio) e ausência de reação em cadeia descontrolada (o plasma apaga se houver perda de vácuo)."
      ],
      coreConcept: "Diferença fundamental entre fissão (quebra de pesados) e fusão (união de leves) e suas implicações ambientais.",
      trapWarning: "A fusão libera muito MAIS energia por unidade de massa do que a fissão nuclear convencional e não requer enriquecimento de urânio."
    },
    commonTraps: ["Achar que a fusão nuclear gera os mesmos resíduos perigosos que as usinas nucleares convencionais."],
    tags: ["Física Moderna", "Fusão Nuclear", "Tokamak", "Deutério", "Transição Energética"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-008",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Medicina Nuclear e Meia-Vida de Radiofármacos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em exames de cintilografia miocárdica e óssea, utiliza-se amplamente o radioisótopo Tecnécio-99 metaestável (⁹⁹ᵐTc), que emite radiação gama pura de baixa energia (140 keV) ideal para detecção por câmaras de cintilação. O ⁹⁹ᵐTc possui uma meia-vida física de exatamente 6 horas. Um hospital recebe um lote contendo uma atividade inicial de 800 MBq de ⁹⁹ᵐTc às 06h da manhã.",
      source: "SOCIEDADE BRASILEIRA DE BIOCIÊNCIAS NUCLEARES. Radiofarmácia e Diagnóstico por Imagem. São Paulo, 2023."
    },
    prompt: "Às 24h (meia-noite) do mesmo dia, a atividade residual desse lote de radiofármaco disponível para os procedimentos clínicos será de",
    options: [
      {
        id: "a",
        text: "200 MBq.",
        isCorrect: false,
        distractorRationale: "Calculou para 2 meias-vidas (12 horas decorridas) em vez de 3 meias-vidas (18 horas)."
      },
      {
        id: "b",
        text: "100 MBq.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O intervalo de tempo decorrido entre 06h e 24h é de 18 horas. O número de meias-vidas decorridas é n = 18 h / 6 h = 3 meias-vidas. A cada meia-vida, a atividade divide-se por 2: • Após 1ª meia-vida (12h): 800 / 2 = 400 MBq; • Após 2ª meia-vida (18h): 400 / 2 = 200 MBq; • Após 3ª meia-vida (24h): 200 / 2 = 100 MBq."
      },
      {
        id: "c",
        text: "50 MBq.",
        isCorrect: false,
        distractorRationale: "Calculou para 4 meias-vidas (24 horas decorridas) sem descontar o horário inicial das 06h."
      },
      {
        id: "d",
        text: "25 MBq.",
        isCorrect: false,
        distractorRationale: "Dividiu a atividade consecutivamente por 5 ciclos de meia-vida."
      },
      {
        id: "e",
        text: "400 MBq.",
        isCorrect: false,
        distractorRationale: "Calculou apenas 1 meia-vida (6 horas decorridas)."
      }
    ],
    detailedExplanation: {
      summary: "A atividade radioativa cai pela metade a cada período de semidesintegração (meia-vida). Em 18 horas (3 meias-vidas), divide-se por 8.",
      stepByStep: [
        "1. Calcular o tempo total decorrido: Δt = 24h - 06h = 18 horas.",
        "2. Determinar o número de meias-vidas (n): n = Δt / T_meia_vida = 18 h / 6 h = 3.",
        "3. Aplicar a lei do decaimento radioativo: A(t) = A₀ / 2ⁿ.",
        "4. A = 800 MBq / 2³ = 800 / 8 = 100 MBq."
      ],
      coreConcept: "Decaimento exponencial por meia-vida física: A = A₀ / (2^n).",
      trapWarning: "Fique atento ao horário de início! O enunciado disse das 06h às 24h (18 horas decorridas), e NÃO um dia inteiro (24 horas decorridas)."
    },
    commonTraps: ["Assumir que passaram 24 horas completas em vez de subtrair o horário de início (06h)."],
    tags: ["Física Moderna", "Medicina Nuclear", "Tecnécio-99m", "Meia-Vida", "Decaimento"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-009",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "PET-Scan e Aniquilação Pósitron-Elétron",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O exame de Tomografia por Emissão de Pósitrons (PET-Scan) é um marco no estadiamento oncológico. O paciente recebe uma injeção de ¹⁸F-FDG (análogo glicosado marcado com Flúor-18). Como células tumorais possuem metabolismo glicolítico acelerado (efeito Warburg), o traçador acumula-se nas lesões neoplásicas. O núcleo de Flúor-18 decai emitindo um pósitron (β⁺, a antipartícula do elétron). Poucos milímetros após sua emissão, o pósitron colide com um elétron do tecido biológico.",
      source: "INSTITUTO NACIONAL DO CÂNCER (INCA). Diagnóstico Molecular e Teranóstica em Oncologia. Rio de Janeiro, 2023."
    },
    prompt: "O fenômeno físico que decorre diretamente do encontro entre o pósitron e o elétron, permitindo que os detectores do equipamento mapeiem a localização exata do tumor, consiste na",
    options: [
      {
        id: "a",
        text: "fusão nuclear das duas partículas gerando um núcleo estável de hidrogênio.",
        isCorrect: false,
        distractorRationale: "Elétrons e pósitrons são léptons e não formam prótons ou núcleos atômicos de hidrogênio."
      },
      {
        id: "b",
        text: "aniquilação mútua matéria-antimatéria, convertendo toda a massa de repouso em dois fótons gama que se propagam em direções opostas (ângulo de 180°).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pela relação de equivalência massa-energia de Einstein (E = mc²), quando uma partícula encontra sua antipartícula (elétron + pósitron), ambas se aniquilam mutuamente. Para conservar o momento linear nulo inicial do sistema em repouso, a aniquilação produz exatamente dois fótons de radiação gama de 511 keV cada um, emitidos em direções diametralmente opostas (180°). Detectores dispostos em anel registram essa coincidência temporal, traçando a linha de resposta precisa do foco tumoral."
      },
      {
        id: "c",
        text: "emissão de raios catódicos de baixa velocidade freados pela membrana celular.",
        isCorrect: false,
        distractorRationale: "Raios catódicos são feixes de elétrons no vácuo; a colisão descrita emite radiação gama de alta energia."
      },
      {
        id: "d",
        text: "geração de uma onda sonora de ultrassom captada por sensores piezoelétricos.",
        isCorrect: false,
        distractorRationale: "O PET-Scan utiliza detectores de cintilação gama e não ondas mecânicas sonoras."
      },
      {
        id: "e",
        text: "transmutação do elétron em um nêutron térmico absorvido pelo núcleo celular.",
        isCorrect: false,
        distractorRationale: "A conservação de carga e de números bariônicos/leptônicos impede que elétron e pósitron virem um nêutron."
      }
    ],
    detailedExplanation: {
      summary: "No PET-Scan ocorre a aniquilação de matéria e antimatéria (elétron + pósitron), gerando dois fótons gama colineares em sentidos opostos (180°).",
      stepByStep: [
        "1. Flúor-18 sofre decaimento beta mais: ¹⁸F ⟶ ¹⁸O + e⁺ + ν_e.",
        "2. O pósitron (e⁺) encontra um elétron (e⁻) da vizinhança celular.",
        "3. Aniquilação matéria-antimatéria: e⁺ + e⁻ ⟶ 2 fótons γ.",
        "4. Conservação de energia e momento: cada fóton possui E = 511 keV (igual à energia de massa de repouso de cada partícula) e viajam em sentidos opostos (180°), viabilizando a reconstrução tomográfica 3D."
      ],
      coreConcept: "Aniquilação matéria-antimatéria e conservação de momento linear em sistemas quânticos.",
      trapWarning: "Lembre-se: os dois fótons gama saem a 180° um do outro justamente para conservar o momento linear total do sistema que era nulo antes da aniquilação!"
    },
    commonTraps: ["Confundir PET-Scan com raio X comum ou achar que o tumor emite luz visível."],
    tags: ["Física Moderna", "PET-Scan", "Antimatéria", "Pósitron", "Aniquilação", "Oncologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-010",
    area: "natureza",
    competence: 6,
    skill: 20,
    topic: "Física Moderna",
    subtopic: "Datação por Carbono-14 e Equilíbrio Biológico",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na alta atmosfera, raios cósmicos bombardeiam átomos de Nitrogênio-14 produzindo o isótopo radioativo Carbono-14 (¹⁴C), que é oxidado a ¹⁴CO₂ e incorporado pelos vegetais via fotossíntese. Enquanto um organismo vivo se alimenta e respira, a razão entre ¹⁴C e o estável ¹²C mantém-se constante em seus tecidos corporais. Com a morte, cessa a ingestão de carbono e o ¹⁴C acumulado desintegra-se com uma meia-vida de 5.730 anos.",
      source: "MUSEU NACIONAL DE ARQUEOLOGIA. Métodos Isotópicos de Cronologia Pré-Histórica. Rio de Janeiro, 2023."
    },
    prompt: "Uma amostra de carvão vegetal fossilizado encontrada em uma escavação funerária apresenta uma taxa de emissão de partículas beta correspondente a 12,5% (um oitavo) da taxa observada em vegetais vivos contemporâneos. A idade estimada desse artefato é de aproximadamente",
    options: [
      {
        id: "a",
        text: "5.730 anos.",
        isCorrect: false,
        distractorRationale: "Corresponderia a 50% da atividade inicial (apenas 1 meia-vida decorrida)."
      },
      {
        id: "b",
        text: "11.460 anos.",
        isCorrect: false,
        distractorRationale: "Corresponderia a 25% da atividade inicial (2 meias-vidas decorridas)."
      },
      {
        id: "c",
        text: "17.190 anos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A fração remanescente é 12,5% = 1/8 = (1/2)³. Portanto, decorreram exatamente 3 períodos de meia-vida do Carbono-14. Multiplicando pelo tempo de semidesintegração: Idade = 3 × 5.730 anos = 17.190 anos."
      },
      {
        id: "d",
        text: "22.920 anos.",
        isCorrect: false,
        distractorRationale: "Calculou para 4 meias-vidas (6,25% da atividade remanescente)."
      },
      {
        id: "e",
        text: "45.840 anos.",
        isCorrect: false,
        distractorRationale: "Multiplicou por 8 em vez de calcular 2³ = 8 (confundiu potência com produto linear)."
      }
    ],
    detailedExplanation: {
      summary: "Se a atividade remanescente é 12,5% (1/8), passaram-se 3 meias-vidas: 3 × 5.730 anos = 17.190 anos.",
      stepByStep: [
        "1. Identificar a fração remanescente: 12,5% = 12,5 / 100 = 1/8.",
        "2. Relacionar à potência de base 2: 1/8 = (1/2)³, logo n = 3 meias-vidas.",
        "3. Calcular o tempo decorrido: t = n × T_meia_vida.",
        "4. t = 3 × 5.730 anos = 17.190 anos."
      ],
      coreConcept: "Datação radiométrica fundamentada no decaimento exponencial de isótopos cosmogênicos.",
      trapWarning: "A datação por Carbono-14 só é precisa para fósseis e amostras orgânicas de até cerca de 50.000 anos; rochas e fósseis de milhões de anos exigem datação por Urânio-Chumbo ou Potássio-Argônio."
    },
    commonTraps: ["Achar que 12,5% corresponde a 8 meias-vidas."],
    tags: ["Física Moderna", "Carbono-14", "Datação Radiométrica", "Meia-Vida", "Arqueologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-011",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Raios X de Diagnóstico e Efeito Bremsstrahlung",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um tubo de raios X odontológico e hospitalar (tubo de Coolidge), elétrons são emitidos por efeito termoiônico em um filamento aquecido (cátodo) e acelerados por dezenas de milhares de volts contra um alvo metálico de tungstênio (ânodo). A interação dos elétrons rápidos com o campo elétrico dos núcleos atômicos do tungstênio desacelera bruscamente as partículas, gerando um espectro contínuo de radiação eletromagnética denominado radiação de freamento (*Bremsstrahlung*).",
      source: "COLÉGIO BRASILEIRO DE RADIOLOGIA. Física Radiológica e Diagnóstico Médico. São Paulo, 2023."
    },
    prompt: "De acordo com os princípios da eletrodinâmica clássica e da mecânica quântica, a emissão contínua de raios X por esse mecanismo decorre da",
    options: [
      {
        id: "a",
        text: "conversão de massa de prótons em energia durante o choque nuclear.",
        isCorrect: false,
        distractorRationale: "Não há quebra de prótons nem transmutação de núcleos na geração clássica de raios X por frenagem."
      },
      {
        id: "b",
        text: "desaceleração rápida de cargas elétricas livres, que emitem energia sob a forma de radiação eletromagnética proporcional à perda de sua energia cinética.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Toda carga elétrica acelerada (ou desacelerada) irradia ondas eletromagnéticas. Quando elétrons de alta energia cinética passam perto dos núcleos positivos de tungstênio, sofrem intensa aceleração centrípeta/deflexão colombiana e desaceleração, convertendo parte ou a totalidade de sua energia cinética em fótons de raios X (Bremsstrahlung). O comprimento de onda mínimo ocorre quando o elétron perde 100% de sua energia cinética em uma única colisão: h·f_max = e·V."
      },
      {
        id: "c",
        text: "aniquilação espontânea dos elétrons que colidem com os nêutrons do cátodo.",
        isCorrect: false,
        distractorRationale: "Elétrons não se aniquilam com nêutrons em tubos de raios X."
      },
      {
        id: "d",
        text: "emissão alfa provocada pela radioatividade natural instável do elemento tungstênio.",
        isCorrect: false,
        distractorRationale: "O tungstênio utilizado no ânodo é um metal estável e a emissão é puramente eletromagnética induzida por feixe elétrico externo."
      },
      {
        id: "e",
        text: "ressonância acústica gerada pela dilatação térmica do filamento incandescente.",
        isCorrect: false,
        distractorRationale: "Raios X são ondas eletromagnéticas de frequência ultra-alta, não ondas sonoras mecânicas."
      }
    ],
    detailedExplanation: {
      summary: "A radiação de freamento (Bremsstrahlung) ocorre quando elétrons de alta energia sofrem desaceleração brusca no campo elétrico do alvo metálico.",
      stepByStep: [
        "1. No tubo de raios X, elétrons acelerados por alta ddp ganham energia cinética: E_cin = e · V.",
        "2. Ao atingir o ânodo de tungstênio, sofrem desaceleração eletrostática intensa.",
        "3. Pelo eletromagnetismo, cargas desaceleradas emitem fótons de radiação eletromagnética.",
        "4. A perda de energia cinética do elétron vira a energia do fóton de raios X emitido: h·f = ΔE_cin."
      ],
      coreConcept: "Radiação de frenagem (Bremsstrahlung): cargas aceleradas emitem radiação eletromagnética.",
      trapWarning: "O espectro de raios X possui duas partes: o espectro contínuo (Bremsstrahlung) e os picos característicos (transições de camadas eletrônicas K, L após ejeção de elétrons internos)."
    },
    commonTraps: ["Confundir tubo de raios X (emissão provocada) com decaimento radioativo nuclear espontâneo."],
    tags: ["Física Moderna", "Raios X", "Bremsstrahlung", "Tubo de Coolidge", "Radiologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-012",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Transições Eletrônicas e Espectros Atômicos",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em espetáculos pirotécnicos autorizados em celebrações cívicas, a queima de pós químicos produz chamas de colorações vibrantes e características: sais de estrôncio produzem luz vermelha intensa, sais de bário produzem luz verde e sais de sódio emitem luz amarela brilhante. Fenômeno análogo ocorre nas lâmpadas de iluminação pública a vapor de sódio.",
      source: "SOCIEDADE BRASILEIRA DE QUÍMICA. Espectroscopia de Emissão Atômica e Ensaios de Chama. São Paulo, 2023."
    },
    prompt: "De acordo com o modelo atômico de Bohr, a emissão de luz colorida visível nesses compostos químicos é explicada pelo fato de que os elétrons dos átomos metálicos",
    options: [
      {
        id: "a",
        text: "absorvem calor, fundem seus núcleos atômicos e liberam partículas beta.",
        isCorrect: false,
        distractorRationale: "O ensaio de chama envolve apenas a eletrosfera; não há reações nucleares de fusão na queima pirotécnica."
      },
      {
        id: "b",
        text: "são arrancados definitivamente do átomo, gerando radiação de corpo negro contínua.",
        isCorrect: false,
        distractorRationale: "A luz de cor definida não é radiação térmica contínua de ionização, mas sim transição quântica entre níveis discretos."
      },
      {
        id: "c",
        text: "absorvem energia térmica e saltam para níveis mais externos e, ao retornarem para níveis de menor energia, emitem fótons com comprimentos de onda específicos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. No modelo de Bohr, a energia do elétron é quantizada em camadas orbitais. A chama fornece energia térmica para excitar os elétrons para órbitas mais energéticas. Ao decaírem espontaneamente para níveis fundamentais de menor energia, os elétrons liberam a diferença de energia exata na forma de um fóton luminoso de frequência f bem definida (E_fóton = E₂ - E₁ = h·f), cuja cor observada corresponde ao comprimento de onda da transição atômica típica do elemento."
      },
      {
        id: "d",
        text: "desaceleram no campo gravitacional da chama, transformando massa em fótons de rádio.",
        isCorrect: false,
        distractorRationale: "A força gravitacional atômica é insignificante perante as forças eletrostáticas de Coulomb."
      },
      {
        id: "e",
        text: "emitem radiação ao girar continuamente na mesma órbita estacionária de equilíbrio.",
        isCorrect: false,
        distractorRationale: "Nos postulados de Bohr, elétrons em órbitas estacionárias NÃO emitem radiação; a emissão ocorre exclusivamente na transição entre dois níveis diferentes."
      }
    ],
    detailedExplanation: {
      summary: "Na transição de um nível eletrônico de maior energia para um de menor energia, o átomo emite um fóton com frequência bem definida: ΔE = h·f.",
      stepByStep: [
        "1. Estado fundamental: elétrons na órbita de menor energia.",
        "2. Excitação: calor da chama fornece energia para o elétron saltar para uma órbita mais externa (mais energética).",
        "3. Desexcitação: o elétron retorna para o nível inferior.",
        "4. Emissão: a diferença de energia entre os dois níveis quânticos é emitida como fóton de luz visível: ΔE = E_inicial - E_final = h · f."
      ],
      coreConcept: "Quantização dos níveis atômicos no modelo de Bohr e espectroscopia de emissão.",
      trapWarning: "Lembre-se: o elétron ABSORVE energia para se afastar do núcleo e EMITE fóton de luz ao retornar mais perto do núcleo!"
    },
    commonTraps: ["Achar que a luz é emitida quando o elétron absorve a energia da chama."],
    tags: ["Física Moderna", "Modelo de Bohr", "Transições Eletrônicas", "Espectroscopia", "Ensaios de Chama"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-013",
    area: "natureza",
    competence: 6,
    skill: 20,
    topic: "Física Moderna",
    subtopic: "Equivalência Massa-Energia de Einstein",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na física nuclear, a massa de um núcleo atômico formado é sempre ligeiramente menor do que a soma das massas individuais dos prótons e nêutrons livres que o constituem. Essa diferença de massa, denominada defeito de massa (Δm), foi convertida em energia de ligação nuclear no momento da formação do núcleo, de acordo com a célebre relação de equivalência massa-energia de Albert Einstein: E = Δm · c² (onde c = 3,0 × 10⁸ m/s).",
      source: "DEPARTAMENTO DE ENGENHARIA NUCLEAR. Fundamentos de Física Quântica e Relatividade. Belo Horizonte, 2023."
    },
    prompt: "Se uma reação nuclear de fusão entre isótopos de hidrogênio apresenta um defeito de massa total de 2,0 × 10⁻⁵ kg (20 miligramas de massa convertida), a quantidade de energia útil liberada por essa reação corresponde a",
    options: [
      {
        id: "a",
        text: "6,0 × 10³ J.",
        isCorrect: false,
        distractorRationale: "Multiplicou a massa por c em vez de c² (esqueceu de elevar a velocidade da luz ao quadrado)."
      },
      {
        id: "b",
        text: "1,8 × 10¹² J.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Aplicando E = Δm · c²: E = (2,0 × 10⁻⁵ kg) × (3,0 × 10⁸ m/s)² = (2,0 × 10⁻⁵) × (9,0 × 10¹⁶) = 18 × 10¹¹ = 1,8 × 10¹² J (1,8 trilhão de Joules, energia comparável à queima de centenas de toneladas de óleo combustível)."
      },
      {
        id: "c",
        text: "3,6 × 10¹⁰ J.",
        isCorrect: false,
        distractorRationale: "Errou a potência da velocidade da luz ou calculou 2 × (3 × 10⁸)."
      },
      {
        id: "d",
        text: "9,0 × 10¹⁶ J.",
        isCorrect: false,
        distractorRationale: "Calculou a energia equivalente a 1 kg de matéria sem considerar a massa de 2,0 × 10⁻⁵ kg."
      },
      {
        id: "e",
        text: "1,8 × 10⁶ J.",
        isCorrect: false,
        distractorRationale: "Esqueceu as potências de dez positivas da velocidade ao quadrado."
      }
    ],
    detailedExplanation: {
      summary: "A energia de repouso liberada por aniquilação ou defeito de massa é dada por E = m·c².",
      stepByStep: [
        "1. Identificar os dados: Δm = 2,0 × 10⁻⁵ kg e c = 3,0 × 10⁸ m/s.",
        "2. Elevar c ao quadrado: c² = (3,0 × 10⁸)² = 9,0 × 10¹⁶ m²/s².",
        "3. Aplicar a fórmula de Einstein: E = Δm · c².",
        "4. E = (2,0 × 10⁻⁵) × (9,0 × 10¹⁶) = 18,0 × 10¹¹ J = 1,8 × 10¹² J."
      ],
      coreConcept: "Relação de equivalência massa-energia (E = mc²) em reações nucleares.",
      trapWarning: "Lembre-se sempre de elevar a velocidade da luz ao quadrado (c² = 9 × 10¹⁶) e garantir que a massa esteja em quilogramas (kg) no Sistema Internacional!"
    },
    commonTraps: ["Multiplicar m apenas por c em vez de c²."],
    tags: ["Física Moderna", "Relatividade", "Einstein", "E = mc²", "Defeito de Massa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-014",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Laser e Emissão Estimulada em Oftalmologia",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em cirurgias oftalmológicas refrativas para correção de miopia e astigmatismo (técnica LASIK), oftalmologistas utilizam o laser de excímero para remodelar a curvatura da córnea com precisão micrométrica. A sigla LASER (*Light Amplification by Stimulated Emission of Radiation*) resume o princípio quântico que diferencia a luz laser de fontes comuns como lâmpadas incandescentes ou LEDs.",
      source: "SOCIEDADE BRASILEIRA DE CIRURGIA REFRATIVA. Fundamentos Físicos dos Lasers Cirúrgicos. São Paulo, 2023."
    },
    prompt: "As características físicas que tornam o feixe laser tão concentrado e cirurgicamente preciso residem no fato de que sua radiação é",
    options: [
      {
        id: "a",
        text: "policromática, incoerente e altamente divergente no espaço.",
        isCorrect: false,
        distractorRationale: "Essas são exatamente as características da luz branca de lâmpadas comuns, opostas às do laser."
      },
      {
        id: "b",
        text: "monocromática (comprimento de onda único), coerente (mesma fase de onda) e altamente colimada (baixa divergência angular).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na emissão estimulada, um fóton incidente induz um elétron excitado a decair, emitindo um segundo fóton idêntico em frequência, fase, polarização e direção de propagação ao primeiro. Como resultado, o laser possui altíssima monocromaticidade (uma única frequência bem definida), coerência temporal e espacial (todas as cristas e vales viajam perfeitamente sincronizados) e baixa divergência (feixe estreito e colimado), permitindo focar enorme densidade de potência em pontos microscópicos."
      },
      {
        id: "c",
        text: "composta por partículas alfa de alta massa confinadas por um campo eletrostático.",
        isCorrect: false,
        distractorRationale: "O laser é composto por radiação eletromagnética (fótons luminosos) e não por partículas materiais alfa."
      },
      {
        id: "d",
        text: "emitida continuamente sem necessidade de fornecimento externo de energia para bombear os elétrons.",
        isCorrect: false,
        distractorRationale: "O laser exige um mecanismo de bombeamento óptico ou elétrico para manter a inversão de população."
      },
      {
        id: "e",
        text: "formada por ondas sonoras longitudinais de alta intensidade com propriedades refrativas.",
        isCorrect: false,
        distractorRationale: "O laser é radiação eletromagnética transversal, e não som longitudinal mecânico."
      }
    ],
    detailedExplanation: {
      summary: "A radiação laser é monocromática, coerente e colimada, resultante do processo quântico de emissão estimulada.",
      stepByStep: [
        "1. Inversão de população: mais átomos no estado excitado do que no fundamental por bombeamento de energia.",
        "2. Emissão estimulada: um fóton induz a desexcitação de um átomo, gerando um segundo fóton exatamente idêntico ao primeiro.",
        "3. Coerência: todos os fótons possuem mesma frequência, mesma direção e mesma fase oscilatória.",
        "4. Colimação: o feixe praticamente não se espalha angularmente, concentrando altíssima energia pontual."
      ],
      coreConcept: "Propriedades quânticas fundamentais da radiação laser: monocromática, coerente e colimada.",
      trapWarning: "Lâmpadas convencionais emitem luz incoerente e policromática por emissão espontânea; o laser emite luz coerente e monocromática por emissão estimulada."
    },
    commonTraps: ["Confundir luz coerente (laser) com luz branca difusa (lâmpada comum)."],
    tags: ["Física Moderna", "Laser", "Emissão Estimulada", "Coerência", "Medicina"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-015",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Sensores de Fumaça por Amerício-241",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Muitos detectores de fumaça residenciais e industriais utilizam uma diminuta fonte radioativa de Amerício-241 (²⁴¹Am). O ²⁴¹Am emite partículas alfa em uma câmara de ionização aberta para o ar ambiente. Essas partículas alfa ionizam as moléculas de oxigênio e nitrogênio do ar, gerando íons positivos e elétrons livres que são atraídos para eletrodos opostos, mantendo uma corrente elétrica contínua de baixa intensidade em repouso.",
      source: "ASSOCIAÇÃO BRASILEIRA DE NORMAS TÉCNICAS (ABNT). Sistemas de Detecção e Alarme de Incêndio. Rio de Janeiro, 2023."
    },
    prompt: "Quando partículas de fuligem e fumaça de um incêndio penetram na câmara do dispositivo, o alarme é acionado porque a fumaça",
    options: [
      {
        id: "a",
        text: "absorve as partículas alfa e recombina os íons do ar, provocando uma queda súbita na corrente elétrica que dispara o circuito.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. As partículas microscópicas de fuligem presentes na fumaça aderem aos íons do ar e absorvem as partículas alfa emitidas pelo Amerício. Como as partículas alfa têm baixo alcance, sua interação com a fumaça neutraliza a ionização, reduzindo drasticamente o fluxo de cargas entre os eletrodos. O circuito eletrônico detecta essa diminuição na corrente elétrica e dispara o alarme sonoro."
      },
      {
        id: "b",
        text: "induz a fissão nuclear dos núcleos de Amerício, gerando uma onda de choque que aciona um interruptor mecânico.",
        isCorrect: false,
        distractorRationale: "A fumaça não causa fissão nuclear no Amerício; trata-se de um processo puramente eletrostático e de blindagem de ionização."
      },
      {
        id: "c",
        text: "aumenta a condutividade elétrica do ar, provocando um curto-circuito de alta voltagem.",
        isCorrect: false,
        distractorRationale: "A fumaça causa redução da corrente elétrica (e não aumento), pois absorve íons e partículas alfa."
      },
      {
        id: "d",
        text: "transmuta o gás nitrogênio atmosférico em oxigênio radioativo por emissão gama.",
        isCorrect: false,
        distractorRationale: "Não ocorrem reações nucleares secundárias com a atmosfera provocadas pela fumaça."
      },
      {
        id: "e",
        text: "reflete os raios X emitidos pela câmara em direção a um sensor óptico externo.",
        isCorrect: false,
        distractorRationale: "O Amerício-241 opera primariamente por emissão de partículas alfa em câmara de ionização, e não por feixe de raios X ópticos."
      }
    ],
    detailedExplanation: {
      summary: "A presença de fumaça interrompe a ionização do ar produzida pelas partículas alfa, fazendo cair a corrente elétrica e acionando o alarme.",
      stepByStep: [
        "1. Sem fumaça: partículas alfa do Amerício-241 colidem com o ar ⟶ ar ionizado conduz corrente constante entre eletrodos.",
        "2. Com fumaça: fuligem entra na câmara ⟶ absorve partículas alfa e atrai os íons livres ⟶ neutraliza a condutividade.",
        "3. Queda na corrente: o circuito sensor detecta a interrupção da corrente elétrica mínima.",
        "4. Disparo: o microprocessador aciona a sirene de alarme de emergência."
      ],
      coreConcept: "Uso do alto poder de ionização de partículas alfa para manutenção e monitoramento de corrente elétrica em segurança industrial.",
      trapWarning: "O Amerício-241 dentro do sensor é completamente seguro para os moradores porque a carcaça de plástico retém 100% das partículas alfa, que não conseguem atravessar a caixa."
    },
    commonTraps: ["Achar que a fumaça queima o material radioativo ou que aumenta a corrente elétrica."],
    tags: ["Física Moderna", "Amerício-241", "Detector de Fumaça", "Partículas Alfa", "Ionização"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-016",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Blindagem Radiológica e Atenuação Exponencial",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em salas de radioterapia e de medicina nuclear onde se utilizam emissores gama de Cobalto-60, a proteção dos profissionais exige paredes com camadas de semiatenuação (CSA ou HVL - *Half-Value Layer*). A camada de semiatenuação é definida como a espessura de um determinado material (como chumbo ou concreto baritado) capaz de reduzir a intensidade de um feixe de fótons à metade do seu valor incidente: I(x) = I₀ / 2^(x / CSA).",
      source: "COMISSÃO NACIONAL DE ENERGIA NUCLEAR (CNEN). Norma CNEN NN 3.01: Diretrizes de Proteção Radiológica. Rio de Janeiro, 2023."
    },
    prompt: "Para um determinado feixe de radiação gama cuja camada de semiatenuação em chumbo é de exatamente 1,2 cm, a espessura mínima de blindagem de chumbo necessária para atenuar a intensidade da radiação a 6,25% (ou seja, reduzir em 16 vezes) do valor inicial é de",
    options: [
      {
        id: "a",
        text: "2,4 cm.",
        isCorrect: false,
        distractorRationale: "Espessura de 2 CSA reduz a intensidade para 25% (divide por 4)."
      },
      {
        id: "b",
        text: "3,6 cm.",
        isCorrect: false,
        distractorRationale: "Espessura de 3 CSA reduz a intensidade para 12,5% (divide por 8)."
      },
      {
        id: "c",
        text: "4,8 cm.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Reduzir a intensidade a 6,25% significa atenuar para 1/16 do valor original. Como 1/16 = (1/2)⁴, são necessárias exatamente 4 camadas de semiatenuação (4 CSA). Logo: Espessura total = 4 × 1,2 cm = 4,8 cm de chumbo."
      },
      {
        id: "d",
        text: "6,0 cm.",
        isCorrect: false,
        distractorRationale: "Calculou para 5 camadas de semiatenuação (redução para 3,125%)."
      },
      {
        id: "e",
        text: "9,6 cm.",
        isCorrect: false,
        distractorRationale: "Multiplicou por 8 em vez de 4 camadas."
      }
    ],
    detailedExplanation: {
      summary: "A intensidade diminui pela metade a cada camada de semiatenuação (CSA). Para reduzir para 1/16 (6,25%), são necessárias 4 camadas: 4 × 1,2 cm = 4,8 cm.",
      stepByStep: [
        "1. Identificar o fator de atenuação desejado: 6,25% = 1/16.",
        "2. Relacionar à base 2: 1/16 = (1/2)⁴, portanto n = 4 meias-camadas.",
        "3. Calcular a espessura total: x = n × CSA = 4 × 1,2 cm.",
        "4. x = 4,8 cm."
      ],
      coreConcept: "Atenuação exponencial da radiação gama na matéria por camadas de semiatenuação.",
      trapWarning: "Cuidado: camadas de semiatenuação reduzem pela metade (dividem por 2) a intensidade, não por subtração linear!"
    },
    commonTraps: ["Calcular 16 vezes como 16 camadas de chumbo."],
    tags: ["Física Moderna", "Radioproteção", "Blindagem", "Camada de Semiatenuação", "Raios Gama"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-017",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Efeito Estufa e Radiação de Corpo Negro",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A temperatura média da superfície terrestre é regulada pelo balanço radiativo entre a radiação solar incidente e a radiação térmica reemitida pelo planeta. Pela Lei do Deslocamento de Wien (λ_max · T = constante), a temperatura do corpo emissor determina o comprimento de onda predominante do seu espectro de emissão de corpo negro.",
      source: "PAINEL INTERGOVERNAMENTAL SOBRE MUDANÇAS CLIMÁTICAS (IPCC). Relatório de Avaliação do Balanço Radiativo Global. Genebra, 2023."
    },
    prompt: "O mecanismo físico que explica por que os gases de efeito estufa (como CO₂ e CH₄) retêm o calor na atmosfera terrestre fundamenta-se no fato de que esses gases são",
    options: [
      {
        id: "a",
        text: "transparentes à radiação solar de ondas curtas (luz visível), mas opacos e absorventes da radiação de ondas longas (infravermelho) emitida pela superfície terrestre aquecida.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Sol, com temperatura superficial de ~5.800 K, emite principalmente radiação de onda curta (luz visível e UV próximo), a qual atravessa a atmosfera com baixa absorção pelos gases estufa. Ao ser absorvida, aquece o solo da Terra (~288 K). Como a Terra é um corpo muito mais frio que o Sol, reemite energia em comprimentos de onda muito maiores, na faixa do infravermelho térmico (ondas longas). Moléculas de CO₂ e metano possuem modos vibracionais que absorvem fortemente essa radiação infravermelha, reemitindo-a de volta para a superfície e aquecendo a troposfera."
      },
      {
        id: "b",
        text: "opacos à luz solar visível, bloqueando totalmente a chegada de luz às florestas e oceanos.",
        isCorrect: false,
        distractorRationale: "Se os gases fossem opacos à luz visível, o planeta seria totalmente escuro à superfície e a fotossíntese não ocorreria."
      },
      {
        id: "c",
        text: "refletores perfeitos de radiação gama cosmogênica gerada na estratosfera.",
        isCorrect: false,
        distractorRationale: "O efeito estufa opera na faixa do infravermelho e da luz visível, não com raios gama."
      },
      {
        id: "d",
        text: "capazes de desacelerar fótons de luz solar, transformando-os em partículas com massa de repouso.",
        isCorrect: false,
        distractorRationale: "Fótons não possuem massa de repouso e não são desacelerados dessa maneira na atmosfera."
      },
      {
        id: "e",
        text: "absorventes exclusivos de ondas de rádio e micro-ondas térmicas de telecomunicações.",
        isCorrect: false,
        distractorRationale: "Gases estufa absorvem primariamente a faixa do infravermelho térmico reemitido pela Terra."
      }
    ],
    detailedExplanation: {
      summary: "Gases de efeito estufa deixam passar a luz visível solar (ondas curtas), mas absorvem a radiação infravermelha térmica (ondas longas) reemitida pela Terra.",
      stepByStep: [
        "1. Lei de Wien: Corpos muito quentes (Sol a 5800 K) emitem radiação com comprimento de onda curto (luz visível).",
        "2. A atmosfera é transparente a essa radiação solar, que atinge e aquece a superfície da Terra.",
        "3. A Terra fria (~290 K) emite radiação de corpo negro com comprimento de onda longo (infravermelho térmico).",
        "4. Gases como CO₂ e metano possuem frequências de ressonância molecular na faixa do infravermelho, absorvendo essa energia e reemitindo-a em todas as direções, retendo calor na atmosfera."
      ],
      coreConcept: "Balanço de radiação de corpo negro e física do efeito estufa (transparência a ondas curtas e absorção de ondas longas).",
      trapWarning: "A camada de ozônio (O₃) barra radiação ultravioleta na estratosfera; o efeito estufa (CO₂, CH₄, H₂O) retém radiação infravermelha na troposfera. Não confunda os dois fenômenos!"
    },
    commonTraps: ["Confundir o efeito estufa (infravermelho) com o buraco na camada de ozônio (ultravioleta)."],
    tags: ["Física Moderna", "Corpo Negro", "Efeito Estufa", "Lei de Wien", "Infravermelho", "Clima"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-018",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Irradiação de Alimentos para Esterilização",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na indústria agroalimentar, a irradiação de frutas, carnes e grãos com raios gama emitidos por fontes seladas de Cobalto-60 ou feixes de elétrons é uma técnica sanitária aprovada pela ANVISA e pela FAO para esterilização, inibição de brotamento e controle de parasitas e bactérias patogênicas como Salmonella e Escherichia coli.",
      source: "EMPRESA BRASILEIRA DE PESQUISA AGROPECUÁRIA (EMBRAPA). Tecnologia Nuclear na Conservação de Alimentos. Brasília, 2023."
    },
    prompt: "A respeito da segurança do consumidor que ingere alimentos processados por essa tecnologia nuclear, é cientificamente CORRETO afirmar que o alimento irradiado",
    options: [
      {
        id: "a",
        text: "torna-se radioativo e passa a emitir partículas alfa e gama nocivas a quem o consome.",
        isCorrect: false,
        distractorRationale: "Erro popular clássico: ser irradiado NÃO torna o corpo radioativo. O alimento apenas absorveu energia eletromagnética temporária que destruiu o DNA dos micro-organismos."
      },
      {
        id: "b",
        text: "apresenta redução microbiológica expressiva sem se tornar radioativo, pois a energia dos fótons utilizados não induz radioatividade nos núcleos dos átomos constituintes dos nutrientes.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Há uma diferença crucial na física nuclear entre IRRADIAÇÃO e CONTAMINAÇÃO RADIOATIVA. Na irradiação, o alimento é exposto transitoriamente à radiação ionizante (como passar por um raio X), a qual rompe as moléculas de DNA de fungos e bactérias sem entrar em contato material com a fonte selada. Como a energia dos fótons gama do Cobalto-60 (cerca de 1,17 e 1,33 MeV) está muito abaixo do limiar necessário para provocar transmutações nucleares (fotodesintegração, que exige mais de 10 a 15 MeV), nenhum átomo do alimento torna-se radioativo."
      },
      {
        id: "c",
        text: "sofre desintegração total de suas proteínas e vitaminas, perdendo qualquer valor nutricional residual.",
        isCorrect: false,
        distractorRationale: "As doses aplicadas são estritamente controladas para preservar as propriedades organolépticas e nutricionais dos alimentos."
      },
      {
        id: "d",
        text: "acumula partículas de chumbo tóxicas oriundas da câmara de esterilização.",
        isCorrect: false,
        distractorRationale: "O chumbo atua exclusivamente como blindagem externa das paredes da câmara e não entra em contato com os alimentos."
      },
      {
        id: "e",
        text: "deve ser armazenado em latas de concreto baritado por pelo menos dez anos antes do consumo público.",
        isCorrect: false,
        distractorRationale: "Alimentos irradiados podem ser consumidos imediatamente após o processo, pois não emitem radiação residual."
      }
    ],
    detailedExplanation: {
      summary: "Irradiação não é contaminação: o alimento exposto a raios gama tem bactérias eliminadas sem se tornar radioativo.",
      stepByStep: [
        "1. Irradiação: exposição à energia da radiação sem contato com o material radioativo (igual a tirar uma radiografia no dentista).",
        "2. Contaminação: presença indesejada de material radioativo sobre ou dentro do corpo/objeto.",
        "3. A energia dos fótons gama de Cobalto-60 não é suficiente para transmutar núcleos leves (C, H, O, N) em isótopos radioativos.",
        "4. O alimento tratado por radiação é seguro, estéril e livre de patógenos."
      ],
      coreConcept: "Diferenciação fundamental entre objeto irradiado (recebeu radiação) e objeto contaminado (contém partículas radioativas).",
      trapWarning: "Não caia na pegadinha da cultura popular: tomar um banho de sol não torna você um sol; receber radiação não torna o alimento radioativo!"
    },
    commonTraps: ["Achar que alimentos irradiados tornam-se radioativos."],
    tags: ["Física Moderna", "Irradiação de Alimentos", "Cobalto-60", "Biossegurança", "Contaminação vs Irradiação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-019",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Acidente Radiológico de Goiânia e Contaminação vs. Irradiação",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em setembro de 1987, ocorreu em Goiânia o maior acidente radiológico da história do Brasil, quando catadores de sucata violaram um cabeçote de teleterapia abandonado contendo Cloreto de Césio-137 (¹³⁷Cs). Atraídos pelo brilho azulado característico (luminescência associada à excitação do ar), moradores manusearam o pó radioativo com as mãos e o distribuíram a parentes e vizinhos.",
      source: "COMISSÃO NACIONAL DE ENERGIA NUCLEAR (CNEN). Relatório Oficial do Acidente Radiológico de Goiânia. Rio de Janeiro, 1988."
    },
    prompt: "Sob a ótica da física das radiações e da radioproteção médica, a gravidade e a rápida disseminação do desastre decorreram fundamentalmente do fato de que as vítimas sofreram",
    options: [
      {
        id: "a",
        text: "apenas irradiação externa passageira ao passarem perto do equipamento intacto.",
        isCorrect: false,
        distractorRationale: "O equipamento foi violado e o pó radioativo foi espalhado no ambiente e ingerido, caracterizando contaminação grave."
      },
      {
        id: "b",
        text: "tanto irradiação externa contínua (exposição à radiação gama penetrante emitida pelo isótopo) quanto contaminação radioativa direta (depósito e ingestão do sal solúvel de Césio na pele, roupas e organismos), espalhando material ativo para novas pessoas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. As vítimas sofreram simultaneamente: 1) Irradiação externa de corpo inteiro pela radiação gama penetrante do Césio-137 (causando síndrome aguda da radiação e queimaduras radiológicas); 2) Contaminação externa e interna, pois o sal de cloreto de césio era um pó solúvel e higroscópico que grudou nas mãos, roupas e alimentos, sendo metabolizado pelo organismo no lugar do potássio (K⁺) e incorporado a tecidos musculares, transformando as próprias superfícies e excreções das vítimas em fontes secundárias de radiação."
      },
      {
        id: "c",
        text: "intoxicação exclusivamente química pelo cloreto, visto que o césio não emite radiação ionizante.",
        isCorrect: false,
        distractorRationale: "O Césio-137 é altamente radioativo, emitindo partículas beta e radiação gama por decaimento do Bário-137m."
      },
      {
        id: "d",
        text: "fusão nuclear induzida pelo contato do sal com o oxigênio da água do solo.",
        isCorrect: false,
        distractorRationale: "Não há reação de fusão nuclear em temperatura e pressão ambientes com césio."
      },
      {
        id: "e",
        text: "emissão de raios cósmicos que aceleraram o decaimento de todos os metais da cidade.",
        isCorrect: false,
        distractorRationale: "Raios cósmicos são de origem astrofísica e não tiveram relação com o vazamento da fonte médica de teleterapia."
      }
    ],
    detailedExplanation: {
      summary: "Em Goiânia houve irradiação (exposição a raios gama) e contaminação (pó de césio aderido à pele, móveis e ingerido nos tecidos corporais).",
      stepByStep: [
        "1. Irradiação: energia gama que atravessou os corpos destruindo células e medula óssea.",
        "2. Contaminação: o pó físico de cloreto de césio impregnou mãos, roupas, poeira e alimentos.",
        "3. Incorporação biológica: por ser quimicamente análogo ao potássio, o césio foi absorvido pelas células musculares.",
        "4. Disseminação: objetos contaminados transportaram o material ativo para vários bairros de Goiânia."
      ],
      coreConcept: "Conceitos de irradiação externa vs. contaminação radioativa externa e interna.",
      trapWarning: "Quem sofre apenas irradiação NÃO transmite radiação para terceiros; quem sofre contaminação externa (pó na roupa) carrega o material e contamina outros ambientes!"
    },
    commonTraps: ["Achar que quem recebe irradiação fica 'contagiante' como uma doença viral."],
    tags: ["Física Moderna", "Césio-137", "Acidente de Goiânia", "Contaminação", "Radioproteção"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-020",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Aceleradores de Partículas e Luz Síncrotron (Sirius)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No interior do estado de São Paulo, o Centro Nacional de Pesquisa em Energia e Materiais (CNPEM) opera o Sirius, uma das fontes de luz síncrotron de 4ª geração mais avançadas do planeta. No anel de armazenamento ultra-alto-vácuo de centenas de metros de circunferência, feixes de elétrons são acelerados a velocidades ultra-relativísticas próximas à da luz (3 GeV) e defletidos por ímãs permanentes de alta precisão.",
      source: "LABORATÓRIO NACIONAL DE LUZ SÍNCROTRON (LNLS). O Projeto Sirius e a Pesquisa Biomédica Nacional. Campinas, 2024."
    },
    prompt: "O princípio eletrodinâmico que gera a luz síncrotron de altíssimo brilho no Sirius decorre do fato de que elétrons relativísticos",
    options: [
      {
        id: "a",
        text: "aniquilam-se em contato com fótons de luz visível gerando pósitrons frios.",
        isCorrect: false,
        distractorRationale: "Não há aniquilação destrutiva dos feixes de elétrons na geração síncrotron; os elétrons continuam circulando no anel."
      },
      {
        id: "b",
        text: "ao terem suas trajetórias curvadas por campos magnéticos defletores, sofrem aceleração centrípeta e emitem radiação eletromagnética extremamente concentrada e brilhante (raios X e ultravioleta).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. De acordo com a relatividade restrita e o eletromagnetismo clássico, quando elétrons que viajam a velocidades próximas à da luz sofrem aceleração centrípeta ao serem desviados em trajetórias curvas por ímãs dipolares e onduladores, eles emitem radiação eletromagnética confinada em um cone estreito na direção tangencial de seu movimento. Essa radiação síncrotron abrange desde o infravermelho até os raios X duros de alto brilho, permitindo determinar a estrutura tridimensional atômica de proteínas virais e novos fármacos."
      },
      {
        id: "c",
        text: "sofrem desaceleração eletrostática completa ao colidirem com água pesada no centro do acelerador.",
        isCorrect: false,
        distractorRationale: "Os elétrons circulam em vácuo extremo sem colidir com moderadores de água."
      },
      {
        id: "d",
        text: "fundem seus núcleos gerando partículas alfa e nêutrons térmicos.",
        isCorrect: false,
        distractorRationale: "Elétrons são léptons elementares pontuais e não possuem núcleos atômicos para fusão."
      },
      {
        id: "e",
        text: "emitem ondas sonoras em vácuo que se convertem em feixes luminosos por piezoeletricidade.",
        isCorrect: false,
        distractorRationale: "Ondas sonoras são mecânicas e não se propagam no vácuo."
      }
    ],
    detailedExplanation: {
      summary: "Cargas aceleradas radialmente em campos magnéticos a velocidades relativísticas emitem luz síncrotron tangencialmente à trajetória curva.",
      stepByStep: [
        "1. No acelerador Sirius, elétrons atingem 99,999999% da velocidade da luz.",
        "2. Ímãs curvam a trajetória dos elétrons, impondo aceleração centrípeta.",
        "3. Toda carga elétrica acelerada emite radiação eletromagnética.",
        "4. Pelo efeito relativístico, essa radiação é ejetada para a frente em um feixe ultraconcentrado de raios X de brilho sem precedentes, utilizado na cristalografia de macromoléculas biológicas."
      ],
      coreConcept: "Radiação síncrotron: emissão eletromagnética por partículas carregadas ultra-relativísticas sob aceleração centrípeta magnética.",
      trapWarning: "O Sirius não é uma usina geradora de eletricidade nem um reator de fissão nuclear; é um laboratório de luz síncrotron que funciona como um 'supermicroscópio' de raios X para biologia e materiais."
    },
    commonTraps: ["Confundir fonte de luz síncrotron com usina nuclear ou reator de fissão."],
    tags: ["Física Moderna", "Luz Síncrotron", "Sirius", "Eletrodinâmica Relativística", "Ciência Brasileira"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-021",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Princípio da Incerteza de Heisenberg",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No início do século XX, a superação do determinismo newtoniano pela mecânica quântica culminou na formulação do Princípio da Incerteza por Werner Heisenberg (1927). Em escala subatômica, a descrição do elétron como uma esfera rígida orbitando o núcleo em trajetórias planetárias perfeitamente previsíveis foi substituída pela noção probabilística de orbitais e densidade de nuvem eletrônica.",
      source: "DEPARTAMENTO DE TEORIA QUÂNTICA. A Transição Epistemológica da Mecânica Quântica. Porto Alegre, 2023."
    },
    prompt: "O Princípio da Incerteza de Heisenberg estabelece que, na escala de partículas subatômicas como o elétron, é fisicamente impossível determinar simultaneamente e com precisão arbitrária a sua",
    options: [
      {
        id: "a",
        text: "massa de repouso e a sua carga elétrica elementar.",
        isCorrect: false,
        distractorRationale: "Massa e carga são propriedades intrínsecas invariantes do elétron e podem ser conhecidas com altíssima precisão experimental."
      },
      {
        id: "b",
        text: "posição espacial e o seu momento linear (ou velocidade), de tal forma que Δx · Δp ≥ h / (4π).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O Princípio da Incerteza decorre da natureza ondulatória fundamental da matéria: quanto mais precisamente se restringe a posição espacial de uma partícula (menor Δx), maior torna-se a dispersão e incerteza no seu comprimento de onda e momento linear (maior Δp), sendo Δx·Δp ≥ ℏ/2 = h/(4π). Por essa razão, na mecânica ondulatória de Schrödinger não existem órbitas circulares definidas, mas sim orbitais atômicos (regiões espaciais de probabilidade de encontrar o elétron)."
      },
      {
        id: "c",
        text: "temperatura absoluta e o seu potencial gravitacional de atração com a Terra.",
        isCorrect: false,
        distractorRationale: "O princípio relaciona grandezas conjugadas quânticas (posição e momento; tempo e energia), não temperatura com gravidade."
      },
      {
        id: "d",
        text: "cor observada e a sua resistência elétrica interna no vácuo.",
        isCorrect: false,
        distractorRationale: "Elétrons individuais não possuem cor ou resistência interna."
      },
      {
        id: "e",
        text: "velocidade angular e a frequência da radiação cósmica de fundo.",
        isCorrect: false,
        distractorRationale: "A radiação cósmica de fundo é um fenômeno cosmológico não atrelado diretamente à incerteza cinemática orbital individual."
      }
    ],
    detailedExplanation: {
      summary: "O Princípio da Incerteza de Heisenberg (Δx · Δp ≥ h/4π) impõe que posição e momento linear não podem ser conhecidos simultaneamente com precisão absoluta.",
      stepByStep: [
        "1. Natureza quântica: partículas materiais possuem pacotes de ondas associados.",
        "2. Para localizar a partícula em um espaço exíguo (Δx pequeno), o pacote de onda deve ser estreito, o que exige a superposição de infinitas frequências e momentos diferentes (Δp grande).",
        "3. Consequência: não podemos prever a trajetória exata de um elétron ao redor do núcleo.",
        "4. Modelo Quântico: substituição da 'órbita' (trajetória definida) pelo conceito de 'orbital' (nuvem probabilística)."
      ],
      coreConcept: "Princípio da Incerteza de Heisenberg e a transição do determinismo clássico para a probabilidade quântica.",
      trapWarning: "O Princípio da Incerteza NÃO é uma falha de precisão dos aparelhos de medição do laboratório; é uma propriedade ontológica e intrínseca da natureza dual da matéria!"
    },
    commonTraps: ["Achar que a incerteza de Heisenberg é apenas uma limitação dos instrumentos tecnológicos atuais."],
    tags: ["Física Moderna", "Princípio da Incerteza", "Heisenberg", "Mecânica Quântica", "Orbitais"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-022",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Efeito Compton e Comportamento Corpuscular da Luz",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em 1923, Arthur Compton realizou um experimento histórico no qual fótons de raios X colidiram com elétrons fracamente ligados em um alvo de grafite. Após o choque, os fótons espalhados apresentaram um comprimento de onda ligeiramente MAIOR do que o comprimento de onda do feixe incidente (λ' > λ), e o elétron foi ejetado com alta velocidade.",
      source: "INSTITUTO DE FÍSICA TEÓRICA. O Efeito Compton e a Confirmação do Momento do Fóton. São Paulo, 2023."
    },
    prompt: "O aumento no comprimento de onda do fóton espalhado no Efeito Compton comprovou de forma irrefutável que a radiação eletromagnética",
    options: [
      {
        id: "a",
        text: "é uma onda longitudinal puramente mecânica que perde velocidade no choque.",
        isCorrect: false,
        distractorRationale: "Fótons viajam sempre na velocidade da luz c no vácuo e são ondas eletromagnéticas transversais."
      },
      {
        id: "b",
        text: "comporta-se como um projétil corpuscular dotado de momento linear, que transfere parte de sua energia para o elétron em uma colisão elástica relativística.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. No Efeito Compton, o fóton comporta-se como uma partícula pontual dotada de momento linear p = h/λ e energia E = h·f. Na colisão do fóton com o elétron, parte da energia cinética é transferida para o elétron. Com menor energia remanescente (E' < E), a frequência do fóton espalhado diminui (f' < f). Como c = λ·f, uma frequência menor implica obrigatoriamente um comprimento de onda maior (λ' > λ). O experimento consolidou a natureza corpuscular da luz prevista por Einstein."
      },
      {
        id: "c",
        text: "anula a constante de Planck quando colide com átomos de carbono.",
        isCorrect: false,
        distractorRationale: "A constante de Planck é uma constante universal fundamental da natureza e nunca se anula."
      },
      {
        id: "d",
        text: "adquire massa de repouso gravitacional ao colidir com a matéria sólida.",
        isCorrect: false,
        distractorRationale: "O fóton nunca adquire massa de repouso; sua massa de repouso é rigorosamente nula."
      },
      {
        id: "e",
        text: "deixa de se propagar em linha reta por ter sua carga elétrica invertida.",
        isCorrect: false,
        distractorRationale: "Fótons são eletricamente neutros em todas as situações físicas conhecidas."
      }
    ],
    detailedExplanation: {
      summary: "No Efeito Compton, o fóton colide como partícula e transfere energia para o elétron; com menor energia (E' < E), seu comprimento de onda aumenta (λ' > λ).",
      stepByStep: [
        "1. Colisão: Fóton incidente (E = hc/λ) colide com elétron em repouso.",
        "2. Transferência de energia: o elétron ganha energia cinética, logo o fóton perde energia (E' < E).",
        "3. Como E = hc/λ, a energia do fóton é inversamente proporcional a λ.",
        "4. Menor energia significa maior comprimento de onda: λ' > λ. Isso prova que a luz carrega momento linear p = h/λ e comporta-se como partícula."
      ],
      coreConcept: "Efeito Compton: confirmação experimental do momento linear e comportamento corpuscular do fóton.",
      trapWarning: "Lembre-se: Menor Energia do Fóton = Menor Frequência = MAIOR Comprimento de Onda!"
    },
    commonTraps: ["Achar que perder energia faz o comprimento de onda diminuir."],
    tags: ["Física Moderna", "Efeito Compton", "Momento do Fóton", "Dualidade Onda-Partícula", "Raios X"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-023",
    area: "natureza",
    competence: 6,
    skill: 21,
    topic: "Física Moderna",
    subtopic: "Resíduos Nucleares e Depósitos Geológicos Profundos",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na gestão do ciclo do combustível nuclear de usinas geradoras de eletricidade, o elemento combustível exaurido contém actinídeos menores e produtos de fissão altamente radioativos (como Césio-137, Estrôncio-90 e Plutônio-239). Para assegurar que esses rejeitos de alta atividade fiquem isolados da biosfera por dezenas de milhares de anos até que sua radioatividade caia a níveis equivalentes aos do minério natural de urânio, cientistas desenvolveram a tecnologia de vitrificação e confinamento em depósitos geológicos profundos.",
      source: "AGÊNCIA NACIONAL DE GERENCIAMENTO DE RESÍDUOS RADIOATIVOS. Repositórios Geológicos Profundos. Helsinque, 2023."
    },
    prompt: "A escolha de camadas geológicas estáveis a centenas de metros de profundidade em rochas ígneas graníticas ou argilosas visa impedir primariamente a",
    options: [
      {
        id: "a",
        text: "formação de ozônio radioativo na estratosfera planetária.",
        isCorrect: false,
        distractorRationale: "Rejeitos confinados em subsolo profundo não alcançam a estratosfera."
      },
      {
        id: "b",
        text: "contaminação de lençóis freáticos e corpos hídricos pela lixiviação e transporte de radionuclídeos por água subterrânea ao longo de milênios.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O principal vetor de escape e dispersão de radionuclídeos de um depósito subterrâneo para a cadeia alimentar humana é a água subterrânea (hidrogeologia). Se a água infiltrar e dissolver os resíduos (lixiviação), os isótopos radioativos podem ser transportados até aquíferos e rios. Por isso, utilizam-se cápsulas de cobre/aço seladas, matriz vítrea insolúvel (vitrificação), argila bentonítica impermeabilizante e formações rochosas graníticas impermeáveis e geologicamente inertes (sem abalos sísmicos)."
      },
      {
        id: "c",
        text: "atração gravitacional excessiva provocada pela massa concentrada do plutônio.",
        isCorrect: false,
        distractorRationale: "A atração gravitacional do combustível confinado é idêntica à de qualquer rocha de mesma massa e não gera anomalias gravitacionais."
      },
      {
        id: "d",
        text: "reação química espontânea dos resíduos nucleares com os campos magnéticos dos polos terrestres.",
        isCorrect: false,
        distractorRationale: "Campos magnéticos terrestres não reagem quimicamente com rochas vitrificadas."
      },
      {
        id: "e",
        text: "interferência eletrostática dos rejeitos no funcionamento de satélites orbitais.",
        isCorrect: false,
        distractorRationale: "Depósitos a 500 metros de profundidade não emitem nenhum campo capaz de afetar satélites espaciais."
      }
    ],
    detailedExplanation: {
      summary: "O isolamento em depósitos geológicos profundos impede que águas subterrâneas dissolvam e transportem os radioisótopos para lençóis freáticos e mananciais.",
      stepByStep: [
        "1. Rejeitos de alta atividade contêm isótopos com meias-vidas de centenas a milhares de anos (ex: Plutônio-239, T_1/2 = 24.100 anos).",
        "2. Vitrificação: os rejeitos líquidos são fundidos com vidro borossilicato transformando-se em blocos sólidos vítreos insolúveis.",
        "3. Barreiras de engenharia: blocos colocados em cilindros metálicos resistentes e envoltos em argila bentonita impermeável.",
        "4. Barreira natural geológica: rochas a 500 metros de profundidade sem circulação de água subterrânea garantem confinamento por milhares de anos."
      ],
      coreConcept: "Gestão de rejeitos radioativos de alta atividade e proteção de recursos hídricos subterrâneos.",
      trapWarning: "Rejeitos nucleares NÃO são lançados no espaço nem jogados nos oceanos; o padrão internacional de segurança máxima é o repositório geológico profundo permanente."
    },
    commonTraps: ["Achar que resíduos nucleares explodem sozinhos como bombas atômicas anos após o descarte."],
    tags: ["Física Moderna", "Resíduos Nucleares", "Lixo Atômico", "Depósito Geológico", "Meio Ambiente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-024",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Células Solares e a Junção p-n Fotovoltaica",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Na transição para matrizes elétricas descarbonizadas, a energia solar fotovoltaica destaca-se pela conversão direta da luz em eletricidade em semicondutores de silício. Para criar o campo elétrico interno permanente necessário para direcionar os elétrons ejetados pelos fótons de luz, o silício cristalino é dopado com pequenas frações de elementos químicos de diferentes valências, formando uma junção semicondutora p-n.",
      source: "INSTITUTO DE FÍSICA DOS SEMICONDUTORES. Mecanismos de Transporte de Carga em Junções p-n. São Carlos, 2023."
    },
    prompt: "Em uma célula fotovoltaica de silício, a corrente elétrica em corrente contínua (CC) é produzida quando os fótons da luz solar",
    options: [
      {
        id: "a",
        text: "aquecem a placa até o ponto de fusão do silício, evaporando elétrons livres para a atmosfera.",
        isCorrect: false,
        distractorRationale: "O painel solar opera em estado sólido à temperatura ambiente e não funciona por fusão térmica do semicondutor."
      },
      {
        id: "b",
        text: "excitam elétrons da banda de valência para a banda de condução, os quais são segregados pelo campo elétrico da junção p-n e fluem por um circuito externo.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Na física do estado sólido, fótons com energia superior ao gap de energia (*bandgap*) do silício (Eg ≈ 1,1 eV) colidem com elétrons presos na banda de valência, promovendo-os para a banda de condução e criando pares elétron-lacuna. O campo elétrico permanente intrínseco existente na interface da junção p-n empurra os elétrons livres para o lado tipo n e as lacunas para o lado tipo p, gerando uma diferença de potencial (tensão contínua) que força o fluxo ordenado de elétrons através do circuito elétrico externo conectado."
      },
      {
        id: "c",
        text: "provocam reações de fissão nuclear em cadeia nos núcleos de silício gerando corrente alternada.",
        isCorrect: false,
        distractorRationale: "Não ocorrem reações nucleares na célula solar; a interação é puramente eletroeletrônica quântica."
      },
      {
        id: "d",
        text: "anulam a resistência elétrica do material por efeito de supercondutividade em alta temperatura.",
        isCorrect: false,
        distractorRationale: "O silício não se torna supercondutor à temperatura operacional usual de um módulo solar."
      },
      {
        id: "e",
        text: "convertem-se diretamente em prótons positivos que circulam pela fiação de cobre.",
        isCorrect: false,
        distractorRationale: "A corrente elétrica em fios metálicos e circuitos fotovoltaicos é formada por fluxo de elétrons, não de prótons."
      }
    ],
    detailedExplanation: {
      summary: "Fótons com energia superior ao bandgap promovem elétrons para a banda de condução; o campo elétrico da junção p-n direciona esses elétrons para o circuito externo.",
      stepByStep: [
        "1. Silício possui um bandgap (salto de energia proibida) de ~1,1 eV entre a banda de valência e a banda de condução.",
        "2. Fótons da luz solar com E = hf ≥ 1,1 eV são absorvidos, promovendo elétrons para a banda de condução (livres para se mover) e deixando lacunas.",
        "3. A junção p-n estabelece uma barreira de potencial e um campo elétrico interno.",
        "4. Esse campo separa as cargas (elétrons para o lado n, lacunas para o p), criando ddp e corrente elétrica contínua no circuito externo."
      ],
      coreConcept: "Mecanismo quântico da conversão fotovoltaica: excitação banda a banda e separação por junção p-n.",
      trapWarning: "Painéis fotovoltaicos produzem corrente CONTÍNUA (CC). Para injetar na rede elétrica das residências, é indispensável o uso de um inversor de frequência para converter CC em corrente ALTERNADA (CA, 60 Hz)!"
    },
    commonTraps: ["Achar que a célula solar gera corrente alternada diretamente ou que funciona por calor."],
    tags: ["Física Moderna", "Energia Solar", "Junção p-n", "Semicondutores", "Bandgap"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "NAT-MOD-025",
    area: "natureza",
    competence: 6,
    skill: 22,
    topic: "Física Moderna",
    subtopic: "Dosímetros Termoluminescentes e Proteção Ocupacional",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Técnicos em radiologia, biomédicos e médicos intervencionistas que operam aparelhos de fluoroscopia e tomografia computadorizada devem obrigatoriamente usar sobre o jaleco um dosímetro individual de bolso durante toda a jornada de trabalho. Os dispositivos mais comuns utilizam cristais termoluminescentes (TLD) de fluoreto de lítio (LiF).",
      source: "SOCIEDADE BRASILEIRA DE PROTEÇÃO RADIOLÓGICA. Monitoramento Individual e Dosimetria Ocupacional. Rio de Janeiro, 2023."
    },
    prompt: "O princípio físico que permite ao dosímetro TLD mensurar com fidelidade a dose de radiação ionizante acumulada pelo profissional fundamenta-se no fato de que a radiação",
    options: [
      {
        id: "a",
        text: "destrói o cristal de lítio, e a perda de massa mecânica da pastilha é pesada em balança analítica.",
        isCorrect: false,
        distractorRationale: "O dosímetro não sofre desgaste de massa mensurável por balança mecânica."
      },
      {
        id: "b",
        text: "aprisiona elétrons excitados em armadilhas quânticas da rede cristalina e, ao ser aquecido no laboratório de leitura, o cristal emite luz proporcional à dose absorvida.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Quando a radiação ionizante incide sobre o cristal de LiF, elétrons são excitados para níveis superiores e ficam retidos em estados metaestáveis (armadilhas de defeito cristalino). Ao final do mês de monitoramento, o dosímetro é enviado para o laboratório e colocado em um leitor térmico. O aquecimento controlado fornece a energia térmica necessária para desarmadilhar os elétrons, que decaem para o estado fundamental emitindo luz visível (termoluminescência). Um tubo fotomultiplicador mede a intensidade luminosa total emitida, que é diretamente proporcional à dose de radiação ionizante absorvida pelo profissional."
      },
      {
        id: "c",
        text: "gera uma reação de fusão nuclear que altera a cor externa permanente do plástico do crachá.",
        isCorrect: false,
        distractorRationale: "Dosímetros não operam por fusão nuclear."
      },
      {
        id: "d",
        text: "conduz ondas de rádio em tempo real diretamente para o smartphone do supervisor de segurança.",
        isCorrect: false,
        distractorRationale: "O dosímetro TLD passivo padrão não possui antenas transmissoras nem bateria; a leitura é feita por aquecimento posterior em laboratório credenciado."
      },
      {
        id: "e",
        text: "neutraliza a gravidade interna do cristal em proporção ao número de raios gama incidentes.",
        isCorrect: false,
        distractorRationale: "Radiação eletromagnética ionizante não anula a atração gravitacional da matéria."
      }
    ],
    detailedExplanation: {
      summary: "A radiação aprisiona elétrons em armadilhas de defeito do cristal (LiF); o aquecimento em laboratório libera esses elétrons com emissão de luz proporcional à dose (termoluminescência).",
      stepByStep: [
        "1. Exposição: radiação ionizante excita elétrons no cristal de LiF.",
        "2. Armadilhamento: impurezas na rede cristalina retêm esses elétrons em níveis metaestáveis estáveis à temperatura ambiente.",
        "3. Leitura laboratorial: o cristal é aquecido sob condições controladas (termo-).",
        "4. Luminescência: os elétrons escapam das armadilhas e retornam ao estado fundamental emitindo fótons de luz visível.",
        "5. Quantificação: fotomultiplicadora quantifica a luz, calculando os milisieverts (mSv) absorvidos pelo trabalhador."
      ],
      coreConcept: "Termoluminescência: emissão estimulada termicamente de luz a partir de estados eletrônicos excitados prévios por radiação ionizante.",
      trapWarning: "O dosímetro individual TLD é estritamente pessoal e intransferível; não protege contra a radiação (quem protege é o avental de chumbo e a distância), apenas registra o histórico acumulado!"
    },
    commonTraps: ["Achar que o dosímetro serve como escudo protetor contra radiação."],
    tags: ["Física Moderna", "Dosimetria", "TLD", "Proteção Radiológica", "Medicina do Trabalho"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
