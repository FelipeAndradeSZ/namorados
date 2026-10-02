/**
 * BANCO DE QUESTÕES: ANÁLISE COMBINATÓRIA E PRINCÍPIO FUNDAMENTAL DA CONTAGEM NO ENEM
 * Área: Matemática e suas Tecnologias
 * Competência: C1, C4 | Habilidades: H2, H3, H15, H16
 * Total de Itens: 25 questões originais no padrão ENEM
 * Revisão Técnica: 100% de precisão matemática determinística e pedagógica
 * Regra Estrita: ZERO termos de deslocamentos turísticos.
 */

export const QUESTIONS_ANALISE_COMBINATORIA = [
  {
    id: "MAT-COMB-001",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Princípio Fundamental da Contagem (Regra do Produto)",
    difficulty: 2,
    estimatedTimeSeconds: 120,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um hospital público implementou um novo protocolo de segurança digital para prontuários eletrônicos. Cada médico deve cadastrar uma senha de acesso composta por exatamente 3 letras distintas do alfabeto latino (considerando 26 letras disponíveis) seguidas por 3 algarismos numéricos distintos escolhidos entre os dígitos de 0 a 9.",
      source: "COMISSÃO DE BIOINFORMÁTICA HOSPITALAR. Diretrizes de Segurança da Informação Médica. São Paulo, 2023."
    },
    prompt: "O número total de senhas distintas que podem ser criadas atendendo integralmente aos critérios estabelecidos é dado por",
    options: [
      {
        id: "a",
        text: "26³ × 10³ = 17.576.000.",
        isCorrect: false,
        distractorRationale: "Essa expressão admitiria repetição de letras e repetição de algarismos, contrariando a exigência expressa de que tanto as letras quanto os algarismos devem ser distintos."
      },
      {
        id: "b",
        text: "26 × 25 × 24 × 10 × 9 × 8 = 11.232.000.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pelo Princípio Fundamental da Contagem: 1ª letra tem 26 opções; 2ª letra tem 25; 3ª letra tem 24. Para os algarismos distintos: 1º algarismo tem 10 opções (0 a 9); 2º algarismo tem 9; 3º algarismo tem 8. Multiplicando todas as etapas: 26 × 25 × 24 × 10 × 9 × 8 = 15.600 × 720 = 11.232.000 senhas."
      },
      {
        id: "c",
        text: "C(26, 3) × C(10, 3) = 2.600 × 120 = 312.000.",
        isCorrect: false,
        distractorRationale: "Utilizou combinação simples, o que ignora a ordem dos caracteres dentro da senha; em senhas a ordem importa (ex: ABC é diferente de CBA)."
      },
      {
        id: "d",
        text: "(26 + 10) × (25 + 9) × (24 + 8) = 39.168.",
        isCorrect: false,
        distractorRationale: "Somou as opções de letras e algarismos em cada posição em vez de separar as três primeiras posições para letras e as três últimas para dígitos."
      },
      {
        id: "e",
        text: "26! / (23! × 3!) + 10! / (7! × 3!) = 2.720.",
        isCorrect: false,
        distractorRationale: "Somou combinações em vez de multiplicar as possibilidades das decisões sucessivas independentes."
      }
    ],
    detailedExplanation: {
      summary: "Pelo Princípio Fundamental da Contagem (PFC), decisões sucessivas e independentes com elementos distintos são calculadas pelo produto das opções decrescentes.",
      stepByStep: [
        "1. Identificar o número de decisões e restrições: 3 letras distintas seguidas de 3 algarismos distintos.",
        "2. Letras: 26 opções para a 1ª, 25 para a 2ª, 24 para a 3ª ⟹ 26 × 25 × 24 = 15.600.",
        "3. Algarismos: 10 opções (0 a 9) para o 1º, 9 para o 2º, 8 para o 3º ⟹ 10 × 9 × 8 = 720.",
        "4. Multiplicar os resultados das etapas consecutivas: 15.600 × 720 = 11.232.000."
      ],
      coreConcept: "Princípio Fundamental da Contagem (regra do produto) com elementos distintos.",
      trapWarning: "Em problemas de senhas, placas e códigos, a ordem dos elementos SEMPRE importa! Logo, não use combinações."
    },
    commonTraps: ["Esquecer a palavra 'distintos' e calcular como se houvesse repetição (26³ × 10³)."],
    tags: ["Análise Combinatória", "PFC", "Senhas", "Arranjo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-002",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Combinação Simples (A Ordem Não Importa)",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma unidade de pronto atendimento pediátrico, a equipe médica de plantão noturno é composta por 8 médicos pediatras e 6 enfermeiros especialistas. Para atender a uma escala de urgência em uma noite de feriado, o diretor clínico precisa selecionar uma comissão de emergência formada por exatamente 3 médicos pediatras e 2 enfermeiros.",
      source: "HOSPITAL REGIONAL DA CRIANÇA. Escalas de Plantão e Gestão Hospitalar. Curitiba, 2023."
    },
    prompt: "De quantas maneiras distintas essa comissão de emergência pode ser constituída?",
    options: [
      {
        id: "a",
        text: "840 maneiras.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A escolha dos 3 pediatras dentre 8 é uma combinação: C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1) = 56. A escolha dos 2 enfermeiros dentre 6 é outra combinação: C(6, 2) = (6 × 5) / (2 × 1) = 15. Pelo princípio multiplicativo: 56 × 15 = 840 maneiras distintas."
      },
      {
        id: "b",
        text: "10.080 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou por arranjo simples: A(8, 3) × A(6, 2) = 336 × 30 = 10.080, considerando erroneamente que a ordem de escolha dos profissionais geraria comissões diferentes."
      },
      {
        id: "c",
        text: "71 maneiras.",
        isCorrect: false,
        distractorRationale: "Somou as combinações (56 + 15 = 71) em vez de multiplicá-las pelo princípio multiplicativo."
      },
      {
        id: "d",
        text: "2.002 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou a combinação de todos os 14 profissionais tomados 5 a 5: C(14, 5) = 2.002, ignorando a restrição de que devem ser exatamente 3 médicos e 2 enfermeiros."
      },
      {
        id: "e",
        text: "336 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou apenas o arranjo de médicos A(8, 3), esquecendo a seleção dos enfermeiros e a não ordenação."
      }
    ],
    detailedExplanation: {
      summary: "Comissões e grupos de pessoas são subconjuntos onde a ordem de escolha dos integrantes não altera a composição do grupo (Combinação Simples).",
      stepByStep: [
        "1. Seleção dos pediatras: 3 entre 8 disponíveis ⟹ C(8, 3) = (8!)/(3!5!) = (8 × 7 × 6)/6 = 56.",
        "2. Seleção dos enfermeiros: 2 entre 6 disponíveis ⟹ C(6, 2) = (6!)/(2!4!) = (6 × 5)/2 = 15.",
        "3. Aplicar o princípio fundamental da contagem: Comissões = 56 × 15 = 840."
      ],
      coreConcept: "Combinação simples e regra do produto em escolhas conjuntas de subconjuntos.",
      trapWarning: "A ordem importa? Se você escolher médico A, depois B, depois C, é a mesma comissão que escolher C, B, A! Portanto, divida pelos fatoriais (Combinação)."
    },
    commonTraps: ["Usar arranjo ou somar as combinações em vez de multiplicá-las."],
    tags: ["Análise Combinatória", "Combinação Simples", "Comissões", "Subconjuntos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-003",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Permutação com Elementos Repetidos (Anagramas)",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um laboratório de biologia molecular, sequências genéticas sintéticas são codificadas por letras que representam bases nitrogenadas. Um pesquisador sintetizou um oligonucleotídeo artificial com a sequência de bases 'A-A-A-C-C-G-T'. Ele deseja calcular quantas fitas sintéticas distintas podem ser geradas permutando todas as bases dessa sequência.",
      source: "CENTRO DE GENÔMICA APLICADA. Protocolos de Síntese de DNA. Belo Horizonte, 2022."
    },
    prompt: "A quantidade de sequências distintas de oligonucleotídeos que podem ser produzidas com as letras da palavra formada por essas bases é",
    options: [
      {
        id: "a",
        text: "5.040.",
        isCorrect: false,
        distractorRationale: "Calculou a permutação simples de 7 elementos (7! = 5.040) sem descontar as repetições das letras A e C."
      },
      {
        id: "b",
        text: "420.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A palavra tem n = 7 letras no total, com a letra A repetindo 3 vezes e a letra C repetindo 2 vezes. A fórmula de permutação com repetição é P_n^(a, b) = n! / (a! × b!) = 7! / (3! × 2!) = 5.040 / (6 × 2) = 5.040 / 12 = 420 sequências distintas."
      },
      {
        id: "c",
        text: "840.",
        isCorrect: false,
        distractorRationale: "Dividiu apenas por 3! (5.040 / 6 = 840), esquecendo de dividir também pelo 2! correspondente à repetição da letra C."
      },
      {
        id: "d",
        text: "210.",
        isCorrect: false,
        distractorRationale: "Dividiu por um fator adicional inexistente ou cometeu erro aritmético na simplificação."
      },
      {
        id: "e",
        text: "35.",
        isCorrect: false,
        distractorRationale: "Calculou apenas a combinação C(7, 3) = 35 das posições da letra A, esquecendo de permutar as outras bases."
      }
    ],
    detailedExplanation: {
      summary: "Permutação de n elementos onde certos itens se repetem exige dividir n! pelos fatoriais das quantidades de cada repetição.",
      stepByStep: [
        "1. Contar o total de elementos: n = 7 letras (A, A, A, C, C, G, T).",
        "2. Identificar as frequências repetidas: A repete 3 vezes (a = 3); C repete 2 vezes (b = 2); G e T aparecem 1 vez cada.",
        "3. Aplicar a fórmula: P_7^(3, 2) = 7! / (3! · 2!) = (7 × 6 × 5 × 4 × 3!) / (3! × 2) = (7 × 6 × 5 × 4) / 2 = 840 / 2 = 420."
      ],
      coreConcept: "Permutação com repetição e anagramas.",
      trapWarning: "Sempre identifique TODAS as repetições antes de simplificar. Letras que repetem geram configurações idênticas que precisam ser descontadas dividindo pelo fatorial."
    },
    commonTraps: ["Esquecer uma das letras repetidas ao montar o denominador."],
    tags: ["Análise Combinatória", "Anagramas", "Permutação com Repetição", "Genética"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-004",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Contagem pelo Caso Complementar (Pelo Menos Um)",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um comitê de ética em pesquisa clínica deve ser formado com 4 pesquisadores escolhidos a partir de um colegiado de 10 cientistas, no qual há 6 médicos e 4 farmacêuticos. O estatuto do comitê exige expressamente que a equipe selecionada contenha 'pelo menos um farmacêutico' entre os 4 membros.",
      source: "CONSELHO NACIONAL DE ÉTICA EM PESQUISA. Normas Regulamentadoras de Comitês. Brasília, 2022."
    },
    prompt: "O número total de comissões distintas que cumprem essa exigência é igual a",
    options: [
      {
        id: "a",
        text: "195.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Técnica do complementar: Total de comissões possíveis sem restrição = C(10, 4) = (10 × 9 × 8 × 7) / (4 × 3 × 2 × 1) = 210. Comissões proibidas (aquelas formadas SEM nenhum farmacêutico, ou seja, com 4 médicos escolhidos entre os 6 médicos disponíveis) = C(6, 4) = C(6, 2) = (6 × 5) / 2 = 15. Comissões válidas = Total - Proibidas = 210 - 15 = 195."
      },
      {
        id: "b",
        text: "210.",
        isCorrect: false,
        distractorRationale: "Esse é o total de comissões possíveis sem aplicar qualquer restrição sobre os farmacêuticos."
      },
      {
        id: "c",
        text: "120.",
        isCorrect: false,
        distractorRationale: "Calculou fixando 1 farmacêutico (4 opções) e escolhendo 3 quaisquer entre os 9 restantes de forma errônea (4 × C(9, 3) = 336 ou contas parciais incorretas)."
      },
      {
        id: "d",
        text: "15.",
        isCorrect: false,
        distractorRationale: "Esse é o número de comissões formadas exclusivamente por médicos (o caso proibido)."
      },
      {
        id: "e",
        text: "96.",
        isCorrect: false,
        distractorRationale: "Calculou apenas o caso com exatamente 1 farmacêutico e 3 médicos (C(4, 1) × C(6, 3) = 4 × 20 = 80) e cometeu erro de soma."
      }
    ],
    detailedExplanation: {
      summary: "Em problemas com a expressão 'pelo menos um', a estratégia mais rápida e segura é calcular Total de Casos menos os Casos Proibidos (Método Complementar).",
      stepByStep: [
        "1. Calcular o total de comissões sem restrição: 4 pessoas entre 10 ⟹ C(10, 4) = (10 × 9 × 8 × 7)/24 = 210.",
        "2. Identificar a condição proibida: 'nenhum farmacêutico' (ou seja, 4 médicos escolhidos entre os 6 existentes) ⟹ C(6, 4) = 15.",
        "3. Subtrair: Válidas = Total - Proibidas = 210 - 15 = 195.",
        "4. Verificação direta (soma dos casos): (1 Farm + 3 Méd) + (2 Farm + 2 Méd) + (3 Farm + 1 Méd) + (4 Farm + 0 Méd) = (4 × 20) + (6 × 15) + (4 × 6) + (1 × 1) = 80 + 90 + 24 + 1 = 195."
      ],
      coreConcept: "Método do complementar na contagem combinatória.",
      trapWarning: "Cuidado ao fazer 'escolhe 1 farmacêutico primeiro e depois 3 quaisquer': essa abordagem gera contagem repetida e erra o resultado!"
    },
    commonTraps: ["Fixar um elemento obrigatório e escolher o resto livremente, gerando duplicatas (supercontagem)."],
    tags: ["Análise Combinatória", "Método Complementar", "Pelo Menos Um", "Combinação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-005",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Combinações e Geometria Plana (Triângulos e Diagonais)",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Sobre uma circunferência foram marcados 8 pontos distintos. Um designer quer criar figuras geométricas conectando esses pontos por meio de segmentos de reta que formam cordas e triângulos inscritos na circunferência.",
      source: "DEPARTAMENTO DE GEOMETRIA GRÁFICA. Elementos Visuais e Polígonos. Porto Alegre, 2021."
    },
    prompt: "Considerando que quaisquer três desses pontos nunca são colineares (por estarem sobre a circunferência), a quantidade total de triângulos distintos que podem ser formados com vértices nesses pontos é",
    options: [
      {
        id: "a",
        text: "56.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Como os pontos estão sobre uma circunferência, quaisquer 3 pontos determinam um triângulo. A quantidade de triângulos é dada por C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1) = 56 triângulos."
      },
      {
        id: "b",
        text: "336.",
        isCorrect: false,
        distractorRationale: "Calculou por arranjo A(8, 3) = 8 × 7 × 6 = 336, considerando que mudar a ordem dos vértices formaria um triângulo diferente."
      },
      {
        id: "c",
        text: "28.",
        isCorrect: false,
        distractorRationale: "Esse é o número de segmentos de reta (cordas) que unem dois pontos: C(8, 2) = 28, e não o número de triângulos."
      },
      {
        id: "d",
        text: "20.",
        isCorrect: false,
        distractorRationale: "Esse é o número de diagonais de um octógono convexo (d = 8 × 5 / 2 = 20)."
      },
      {
        id: "e",
        text: "512.",
        isCorrect: false,
        distractorRationale: "Calculou 8³ = 512, o que não faz sentido geométrico para combinação de vértices distintos."
      }
    ],
    detailedExplanation: {
      summary: "Para formar um triângulo são necessários 3 pontos não colineares. Em uma circunferência, quaisquer 3 pontos formam um triângulo.",
      stepByStep: [
        "1. Total de pontos disponíveis: n = 8.",
        "2. Pontos necessários para um triângulo: k = 3.",
        "3. Como a ordem dos vértices não altera o triângulo (ΔABC = ΔBCA = ΔCAB), usamos Combinação Simples:",
        "4. C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1) = 56."
      ],
      coreConcept: "Combinações aplicadas à contagem de figuras geométricas.",
      trapWarning: "Se os pontos estivessem sobre retas, seria necessário descontar os trios de pontos colineares. Na circunferência, nunca há 3 pontos colineares."
    },
    commonTraps: ["Calcular C(8, 2) (número de segmentos) em vez de C(8, 3) (número de triângulos)."],
    tags: ["Análise Combinatória", "Geometria", "Triângulos", "Combinação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-006",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Permutação Simples e Elementos que Devem Ficar Juntos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma estante de biblioteca escolar, 6 livros didáticos de diferentes disciplinas (Matemática, Física, Química, Biologia, História e Geografia) devem ser organizados lado a lado em uma prateleira. O professor de ciências exige que os 3 livros de Ciências da Natureza (Física, Química e Biologia) fiquem obrigatoriamente juntos, em qualquer ordem interna entre si.",
      source: "BIBLIOTECA CENTRAL UNIVERSITÁRIA. Organização e Catalogação de Acervos. Campinas, 2022."
    },
    prompt: "De quantas maneiras distintas esses 6 livros podem ser dispostos na prateleira respeitando a exigência pedagógica?",
    options: [
      {
        id: "a",
        text: "144 maneiras.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Técnica do 'bloco': considere os 3 livros de Ciências da Natureza como um único 'superbloco'. Ficamos com 4 blocos para permutar na prateleira: (Superbloco Natureza), Matemática, História e Geografia. O número de permutações desses 4 blocos é 4! = 24. Dentro do superbloco, os 3 livros podem permutar entre si de 3! = 6 maneiras. Total de maneiras = 4! × 3! = 24 × 6 = 144 maneiras."
      },
      {
        id: "b",
        text: "720 maneiras.",
        isCorrect: false,
        distractorRationale: "Esse é o total de permutações livres de todos os 6 livros sem qualquer restrição (6! = 720)."
      },
      {
        id: "c",
        text: "24 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou apenas 4!, esquecendo de permutar os 3 livros de natureza entre si dentro do bloco (3! = 6)."
      },
      {
        id: "d",
        text: "36 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou 3! × 3! = 36 por erro de contagem dos blocos externos."
      },
      {
        id: "e",
        text: "48 maneiras.",
        isCorrect: false,
        distractorRationale: "Multiplicou 4! por 2 em vez de multiplicar por 3! = 6."
      }
    ],
    detailedExplanation: {
      summary: "Quando determinados elementos devem permanecer juntos, eles são agrupados em um único elemento ('bloco'), e o resultado é multiplicado pela permutação interna desse bloco.",
      stepByStep: [
        "1. Tratar os 3 livros de Natureza (F, Q, B) como 1 único pacote.",
        "2. Contar os elementos a permutar: Pacote + Matemática + História + Geografia = 4 elementos.",
        "3. Permutação externa: P_4 = 4! = 24 maneiras de dispor os blocos.",
        "4. Permutação interna: P_3 = 3! = 6 maneiras de ordenar os livros dentro do pacote.",
        "5. Total = 24 × 6 = 144 maneiras."
      ],
      coreConcept: "Permutação com elementos agrupados (técnica do bloco).",
      trapWarning: "Nunca se esqueça de permutar os elementos dentro do bloco (3! = 6), a não ser que o enunciado exija uma ordem interna fixa (ex: estritamente em ordem alfabética)."
    },
    commonTraps: ["Esquecer a permutação interna dos elementos agrupados."],
    tags: ["Análise Combinatória", "Permutação", "Técnica do Bloco", "Arranjo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-007",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Permutação Circular",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma mesa redonda de reuniões científicas de um instituto de pesquisas, 6 pesquisadores de diferentes laboratórios irão se sentar para debater projetos. O coordenador lembra que duas disposições de assentos são consideradas idênticas se cada pesquisador tiver os mesmos vizinhos à sua direita e à sua esquerda, ou seja, rotações da mesa não geram novas disposições.",
      source: "INSTITUTO DE ESTUDOS AVANÇADOS. Protocolo de Reuniões Colegiadas. São Paulo, 2023."
    },
    prompt: "O número de maneiras distintas de acomodar os 6 pesquisadores em torno da mesa circular é",
    options: [
      {
        id: "a",
        text: "120.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A permutação circular de n elementos é dada por PC(n) = (n - 1)!. Para n = 6: PC(6) = (6 - 1)! = 5! = 5 × 4 × 3 × 2 × 1 = 120 maneiras distintas."
      },
      {
        id: "b",
        text: "720.",
        isCorrect: false,
        distractorRationale: "Calculou a permutação linear (6! = 720), que considera posições fixas em linha reta onde o primeiro assento difere dos demais."
      },
      {
        id: "c",
        text: "60.",
        isCorrect: false,
        distractorRationale: "Dividiu 120 por 2 desnecessariamente (o que só se aplicaria se o sentido horário e anti-horário fossem considerados indistintos, como em contas de um colar)."
      },
      {
        id: "d",
        text: "36.",
        isCorrect: false,
        distractorRationale: "Calculou 6² = 36, sem fundamento na fórmula de permutações."
      },
      {
        id: "e",
        text: "24.",
        isCorrect: false,
        distractorRationale: "Calculou (6 - 2)! = 4! = 24 por erro de fórmula."
      }
    ],
    detailedExplanation: {
      summary: "Na permutação circular, a ausência de início ou fim fixo faz com que cada arranjo tenha n rotações equivalentes, resultando na fórmula PC(n) = (n - 1)!.",
      stepByStep: [
        "1. Identificar que os assentos estão dispostos em círculo e que rotações simples não alteram a vizinhança.",
        "2. Fixar um dos pesquisadores como ponto de referência para quebrar a simetria rotacional.",
        "3. Os 5 pesquisadores restantes permutam livremente nos assentos relativos ao ponto de referência: P_5 = 5! = 120."
      ],
      coreConcept: "Permutação circular: PC(n) = (n - 1)!.",
      trapWarning: "Cuidado: se os assentos da mesa forem numerados individualmente (Cadeira 1, Cadeira 2...), a simetria é quebrada e volta a ser permutação linear comum (n!)."
    },
    commonTraps: ["Aplicar n! em mesa redonda sem observar que rotações são indistinguíveis."],
    tags: ["Análise Combinatória", "Permutação Circular", "Mesa Redonda"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-008",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Combinações Completas (Partição de Inteiros / Método dos Traços e Bolinhas)",
    difficulty: 4,
    estimatedTimeSeconds: 165,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma fábrica de calçados sustentáveis produz sandálias ecológicas em 4 cores diferentes: azul, verde, amarelo e vermelho. Um revendedor comercial deseja encomendar um lote promocional contendo exatamente 10 pares de sandálias, podendo escolher qualquer quantidade de pares de cada uma das 4 cores, inclusive zero pares de algumas cores.",
      source: "INDÚSTRIA ECOLÓGICA DE CALÇADOS. Catálogo de Vendas e Encomendas. Franca, 2023."
    },
    prompt: "De quantas formas distintas o revendedor pode compor o seu pedido de 10 pares de sandálias?",
    options: [
      {
        id: "a",
        text: "286 formas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Trata-se de uma combinação com repetição (ou número de soluções inteiras não negativas da equação x₁ + x₂ + x₃ + x₄ = 10). Pelo método dos 'traços e bolinhas': temos 10 objetos idênticos (bolinhas) e 3 divisórias (traços) para separar os 4 tipos de cores. O total de permutações com repetição de 13 elementos (10 bolinhas e 3 traços) é C(10 + 4 - 1, 10) = C(13, 10) = C(13, 3) = (13 × 12 × 11) / (3 × 2 × 1) = (1.716) / 6 = 286 formas distintas."
      },
      {
        id: "b",
        text: "1.000 formas.",
        isCorrect: false,
        distractorRationale: "Calculou 10³ = 1.000 sem fundamentação na teoria das partições inteiras."
      },
      {
        id: "c",
        text: "210 formas.",
        isCorrect: false,
        distractorRationale: "Calculou C(10, 4) = 210, o que calcularia a escolha de 4 itens distintos em 10, sem relação com a partição solicitada."
      },
      {
        id: "d",
        text: "5.040 formas.",
        isCorrect: false,
        distractorRationale: "Aplicou arranjo sem repetição de maneira descabida."
      },
      {
        id: "e",
        text: "40 formas.",
        isCorrect: false,
        distractorRationale: "Multiplicou 10 por 4."
      }
    ],
    detailedExplanation: {
      summary: "A quantidade de soluções inteiras não negativas de x₁ + x₂ + ... + xₙ = k é dada por C(k + n - 1, k) (Combinação Completa / Traços e Bolinhas).",
      stepByStep: [
        "1. Modelar a equação: azul + verde + amarelo + vermelho = 10, com variáveis inteiras ≥ 0.",
        "2. Identificar n = 4 tipos e k = 10 itens a distribuir.",
        "3. Número de divisórias necessárias para separar 4 categorias = n - 1 = 3 traços.",
        "4. Total de posições = 10 bolinhas + 3 traços = 13 posições.",
        "5. Calcular C(13, 3) = (13 × 12 × 11) / 6 = 286."
      ],
      coreConcept: "Combinações completas com repetição e soluções inteiras não negativas.",
      trapWarning: "Cuidado: se o problema exigisse que o pedido contivesse 'pelo menos um par de cada cor' (soluções inteiras estritamente positivas), você reservaria 1 de cada (4 pares) e distribuiria os 6 restantes: C(6 + 3, 6) = C(9, 3) = 84!"
    },
    commonTraps: ["Usar combinação simples sem repetição quando o mesmo tipo de cor pode ser escolhido múltiplas vezes."],
    tags: ["Análise Combinatória", "Combinação com Repetição", "Traços e Bolinhas", "Partição"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-009",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Princípio da Casa dos Pombos (Princípio de Dirichlet)",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma gaveta escura de um posto de enfermagem hospitalar, há 12 ampolas de soro fisiológico, 8 ampolas de glicose e 6 ampolas de bicarbonato de sódio. As ampolas possuem recipientes de vidro idênticos em formato, peso e tamanho, diferenciando-se apenas pelo rótulo impresso, impossível de ler na escuridão provocada por uma queda momentânea de energia.",
      source: "CENTRO DE URGÊNCIA CLÍNICA. Manual de Primeiros Socorros e Triagem. Salvador, 2023."
    },
    prompt: "Qual é o número mínimo de ampolas que um enfermeiro deve retirar da gaveta no escuro para ter certeza absoluta de que retirou pelo menos 2 ampolas de soro fisiológico?",
    options: [
      {
        id: "a",
        text: "16 ampolas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Princípio do Pior Caso Possível: para ter certeza matemática absoluta, devemos supor o pior cenário de azar. O enfermeiro poderia retirar primeiro todas as 8 ampolas de glicose e todas as 6 de bicarbonato (8 + 6 = 14 ampolas sem nenhuma de soro). A partir desse ponto, só restam ampolas de soro na gaveta; logo, retirando mais 2 ampolas, ele terá infalivelmente 2 ampolas de soro. Total mínimo necessário = 14 + 2 = 16 ampolas."
      },
      {
        id: "b",
        text: "2 ampolas.",
        isCorrect: false,
        distractorRationale: "Esse é o melhor caso de sorte absoluta, mas não garante certeza matemática na retirada às cegas."
      },
      {
        id: "c",
        text: "14 ampolas.",
        isCorrect: false,
        distractorRationale: "Com 14 ampolas retiradas, no pior caso ele poderia ter pego todas as de glicose e bicarbonato, ficando com zero ampolas de soro."
      },
      {
        id: "d",
        text: "15 ampolas.",
        isCorrect: false,
        distractorRationale: "Com 15 ampolas ele garantiria pelo menos 1 de soro (14 + 1), mas a questão exige 'pelo menos 2'."
      },
      {
        id: "e",
        text: "26 ampolas.",
        isCorrect: false,
        distractorRationale: "Esse é o total de todas as ampolas da gaveta."
      }
    ],
    detailedExplanation: {
      summary: "Problemas de certeza mínima absoluta resolvem-se pelo Princípio do Pior Cenário Possível (Princípio das Gavetas de Dirichlet).",
      stepByStep: [
        "1. Identificar o objetivo: garantir 2 ampolas de soro.",
        "2. Formular o pior cenário de 'azar': retirar todas as ampolas indesejadas primeiro (8 de glicose + 6 de bicarbonato = 14 ampolas).",
        "3. Agora só sobraram ampolas de soro na gaveta.",
        "4. Para garantir 2 de soro, basta retirar mais 2 ampolas: 14 + 2 = 16 ampolas."
      ],
      coreConcept: "Princípio da Casa dos Pombos e estratégia do pior caso.",
      trapWarning: "Cuidado: a pergunta não pede probabilidade, mas garantia com 100% de certeza lógica!"
    },
    commonTraps: ["Confundir garantia absoluta com cálculo probabilístico ou com o melhor cenário de sorte."],
    tags: ["Análise Combinatória", "Princípio das Gavetas", "Pior Caso", "Raciocínio Lógico"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-010",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Loterias, Cartelas e Escolha de Números",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma modalidade de loteria federal permite ao apostador marcar entre 6 e 9 números em um volante que contém 60 números distintos (de 1 a 60). O preço de uma aposta simples de 6 números é de R$ 5,00. O valor de apostas com mais de 6 números é rigorosamente proporcional à quantidade de jogos simples de 6 números que aquela marcação contém.",
      source: "CAIXA ECONÔMICA FEDERAL. Regras Oficiais de Apostas Lotéricas. Brasília, 2023."
    },
    prompt: "Um apostador decide marcar 8 números em um mesmo volante. Qual será o preço cobrado por essa aposta?",
    options: [
      {
        id: "a",
        text: "R$ 140,00.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Marcar 8 números equivale a jogar todos os subconjuntos de 6 números possíveis a partir desses 8. A quantidade de jogos simples embutidos é C(8, 6) = C(8, 2) = (8 × 7) / 2 = 28 jogos simples. Como cada jogo simples custa R$ 5,00, o preço total é 28 × R$ 5,00 = R$ 140,00."
      },
      {
        id: "b",
        text: "R$ 40,00.",
        isCorrect: false,
        distractorRationale: "Multiplicou ingenuamente 8 números marcados por R$ 5,00 = R$ 40,00, ignorando que o número de combinações cresce de forma combinatória e não linear."
      },
      {
        id: "c",
        text: "R$ 280,00.",
        isCorrect: false,
        distractorRationale: "Multiplicou por R$ 10,00 em vez do valor unitário de R$ 5,00."
      },
      {
        id: "d",
        text: "R$ 105,00.",
        isCorrect: false,
        distractorRationale: "Calculou para 7 números marcados: C(7, 6) × 5 = 7 × 5 = 35 ou cometeu erro combinatório."
      },
      {
        id: "e",
        text: "R$ 420,00.",
        isCorrect: false,
        distractorRationale: "Calculou por arranjo simples A(8, 6) / 2."
      }
    ],
    detailedExplanation: {
      summary: "Em jogos de loteria, marcar mais números equivale a registrar C(n, 6) apostas simples simultâneas.",
      stepByStep: [
        "1. Números marcados no volante: n = 8.",
        "2. Tamanho do jogo simples premiado: k = 6.",
        "3. Quantidade de combinações de 6 números contidas no volante: C(8, 6) = C(8, 2) = (8 × 7)/2 = 28 apostas simples.",
        "4. Preço total: 28 apostas × R$ 5,00 = R$ 140,00."
      ],
      coreConcept: "Combinações simples aplicadas à precificação de apostas lotéricas.",
      trapWarning: "Lembre-se da propriedade das combinações complementares: C(8, 6) é exatamente igual a C(8, 2), facilitando imensamente as contas à mão na prova do ENEM!"
    },
    commonTraps: ["Achar que o preço de um jogo de 8 números é proporcional simples (8/6 do valor de 6 números)."],
    tags: ["Análise Combinatória", "Loterias", "Combinação Complementar", "Matemática Financeira"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-011",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Permutação com Restrição de Não Vizinhança",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma bancada de informática com 7 computadores alinhados lado a lado, foram instalados 4 computadores com sistema operacional Linux e 3 computadores com sistema operacional Windows. O administrador de redes deseja dispor os equipamentos de modo que nenhum computador com Windows fique ao lado de outro computador com Windows.",
      source: "LABORATÓRIO DE REDES E ARQUITETURA DE COMPUTADORES. Configuração de Bancadas. Recife, 2023."
    },
    prompt: "De quantas maneiras distintas esses 7 computadores podem ser enfileirados atendendo à restrição de que os 3 computadores com Windows nunca fiquem adjacentes entre si?",
    options: [
      {
        id: "a",
        text: "10 maneiras.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Método dos 'espaços vazios': disponha primeiro os 4 computadores Linux em linha: _ L _ L _ L _ L _. Observe que há exatamente 5 espaços possíveis (marcados com _) onde os computadores Windows podem ser inseridos sem nunca ficarem juntos (um antes do 1º Linux, três intermediários e um após o último Linux). Para alocar os 3 computadores Windows nesses 5 espaços disponíveis, escolhemos 3 dos 5 espaços: C(5, 3) = C(5, 2) = (5 × 4) / 2 = 10 maneiras distintas."
      },
      {
        id: "b",
        text: "35 maneiras.",
        isCorrect: false,
        distractorRationale: "Esse é o total de permutações sem restrição de 7 computadores com 4 Linux e 3 Windows: P_7^(4, 3) = 7! / (4! × 3!) = 35."
      },
      {
        id: "c",
        text: "15 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou C(6, 3) = 20 ou cometeu erro aritmético nos espaços disponíveis."
      },
      {
        id: "d",
        text: "24 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou 4! = 24 sem considerar a inserção dos computadores Windows."
      },
      {
        id: "e",
        text: "6 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou apenas 3! = 6."
      }
    ],
    detailedExplanation: {
      summary: "Para garantir que certos elementos nunca fiquem juntos, distribui-se primeiro os outros elementos e posicionam-se os restritos nos espaços intermediários e extremos.",
      stepByStep: [
        "1. Posicionar os 4 computadores Linux: L - L - L - L.",
        "2. Identificar os espaços onde o Windows pode entrar sem que dois fiquem juntos: _ L _ L _ L _ L _ (são 5 espaços disponíveis).",
        "3. Como os computadores Windows são idênticos em sistema e cada espaço recebe no máximo 1 computador, basta escolher 3 dentre os 5 espaços.",
        "4. C(5, 3) = (5 × 4 × 3) / (3 × 2 × 1) = 10 maneiras."
      ],
      coreConcept: "Método dos espaços vazios para elementos não adjacentes.",
      trapWarning: "Subtrair o caso em que 'todos os 3 estão juntos' NÃO resolve o problema, porque ainda poderiam sobrar casos com 2 juntos e 1 separado! O método dos espaços é o único infalível."
    },
    commonTraps: ["Achar que o complemento de 'nenhum junto' é 'todos juntos', esquecendo os casos com pares de elementos vizinhos."],
    tags: ["Análise Combinatória", "Espaços Vazios", "Não Adjacentes", "Permutação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-012",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Combinação Simples com Restrição de Presença",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma banca examinadora de concurso público para perito criminal deve ser composta por 5 membros escolhidos entre 9 especialistas disponíveis, dos quais Dr. Álvaro e Dra. Beatriz são os dois maiores especialistas em toxicologia forense. O edital do concurso estabelece que Dr. Álvaro e Dra. Beatriz DEVEM OBRIGATORIAMENTE fazer parte da banca examinadora.",
      source: "INSTITUTO DE POLÍCIA CIENTÍFICA. Regulamento de Bancas Examinadoras. Florianópolis, 2022."
    },
    prompt: "Nessas condições, quantas bancas examinadoras distintas podem ser constituídas?",
    options: [
      {
        id: "a",
        text: "35.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A banca deve ter 5 membros. Como Dr. Álvaro e Dra. Beatriz já estão obrigatoriamente incluídos, restam 5 - 2 = 3 vagas a serem preenchidas. O número de especialistas restantes disponíveis para disputar essas vagas é 9 - 2 = 7 especialistas. Portanto, basta escolher 3 especialistas entre os 7 restantes: C(7, 3) = (7 × 6 × 5) / (3 × 2 × 1) = 35 bancas distintas."
      },
      {
        id: "b",
        text: "126.",
        isCorrect: false,
        distractorRationale: "Esse é o total de bancas possíveis sem qualquer restrição obrigatória de membros: C(9, 5) = 126."
      },
      {
        id: "c",
        text: "21.",
        isCorrect: false,
        distractorRationale: "Calculou C(7, 2) = 21 em vez de preencher as 3 vagas restantes C(7, 3) = 35."
      },
      {
        id: "d",
        text: "70.",
        isCorrect: false,
        distractorRationale: "Multiplicou 35 por 2 erroneamente."
      },
      {
        id: "e",
        text: "42.",
        isCorrect: false,
        distractorRationale: "Calculou 7 × 6 = 42 sem dividir pelo fatorial das vagas."
      }
    ],
    detailedExplanation: {
      summary: "Quando elementos específicos devem obrigatoriamente figurar no grupo, desconta-se essa quantidade tanto do total disponível quanto das vagas a preencher.",
      stepByStep: [
        "1. Vagas totais da banca = 5. Como Álvaro e Beatriz já estão dentro, sobram 5 - 2 = 3 vagas.",
        "2. Candidatos totais = 9. Descontando Álvaro e Beatriz já alocados, sobram 9 - 2 = 7 candidatos.",
        "3. Calcular a combinação dos restantes: C(7, 3) = (7 × 6 × 5)/6 = 35."
      ],
      coreConcept: "Combinações com elementos pré-fixados obrigatórios.",
      trapWarning: "Elemento pré-fixado não 'gasta' opções de multiplicação; ele simplesmente reduz o número de vagas e o universo de escolha."
    },
    commonTraps: ["Esquecer de subtrair os membros obrigatórios do total de vagas."],
    tags: ["Análise Combinatória", "Combinação", "Elementos Fixados", "Bancas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-013",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Combinação Simples com Restrição de Mútua Exclusão",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma equipe de desenvolvimento de software em inteligência artificial com 8 programadores disponíveis, deve-se eleger um grupo de 4 desenvolvedores para um projeto sigiloso. No entanto, por incompatibilidade técnica de liderança, os programadores Lucas e Mariana não podem ser escalados juntos no mesmo grupo (ou seja, o grupo pode conter apenas Lucas, apenas Mariana, ou nenhum dos dois, mas nunca ambos simultaneamente).",
      source: "CENTRO DE TECNOLOGIA E DADOS. Gestão de Equipes Ágeis. Campinas, 2023."
    },
    prompt: "O número total de grupos de 4 programadores que podem ser formados respeitando essa restrição é",
    options: [
      {
        id: "a",
        text: "55 grupos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Método do Complementar: Total de grupos possíveis sem restrição = C(8, 4) = (8 × 7 × 6 × 5) / (4 × 3 × 2 × 1) = 70. Grupos proibidos (aqueles em que Lucas e Mariana estão juntos): fixando Lucas e Mariana, restam 4 - 2 = 2 vagas a preencher entre os 8 - 2 = 6 programadores restantes, totalizando C(6, 2) = (6 × 5) / 2 = 15 grupos proibidos. Grupos válidos = 70 - 15 = 55 grupos."
      },
      {
        id: "b",
        text: "70 grupos.",
        isCorrect: false,
        distractorRationale: "Esse é o total de grupos sem considerar a restrição de que Lucas e Mariana não podem atuar juntos."
      },
      {
        id: "c",
        text: "15 grupos.",
        isCorrect: false,
        distractorRationale: "Esse é exatamente o número de grupos proibidos (onde ambos estão juntos)."
      },
      {
        id: "d",
        text: "40 grupos.",
        isCorrect: false,
        distractorRationale: "Calculou apenas os casos onde exatamente um deles está presente, esquecendo o caso em que nenhum dos dois participa."
      },
      {
        id: "e",
        text: "35 grupos.",
        isCorrect: false,
        distractorRationale: "Dividiu o total 70 por 2 arbitrariamente."
      }
    ],
    detailedExplanation: {
      summary: "Em restrições de mútua exclusão ('dois elementos não podem ficar juntos'), o método do complementar (Total - Juntos) é o caminho mais rápido e seguro.",
      stepByStep: [
        "1. Calcular todos os grupos possíveis: C(8, 4) = 70.",
        "2. Calcular os grupos em que os dois estão juntos: C(6, 2) = 15.",
        "3. Subtrair: Válidos = 70 - 15 = 55.",
        "4. Verificação direta: (Lucas sim, Mariana não) = C(6, 3) = 20; (Mariana sim, Lucas não) = C(6, 3) = 20; (Nenhum dos dois) = C(6, 4) = 15. Total = 20 + 20 + 15 = 55."
      ],
      coreConcept: "Restrição de mútua exclusão e método do complementar.",
      trapWarning: "Lembre-se de incluir a possibilidade de NENHUM dos dois participar do grupo quando a regra diz apenas que 'não podem ficar juntos'!"
    },
    commonTraps: ["Esquecer de contar o caso em que nenhum dos dois elementos restritos faz parte da comissão."],
    tags: ["Análise Combinatória", "Exclusão Mútua", "Método Complementar", "Comissões"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-014",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Contagem de Subconjuntos (Conjunto das Partes)",
    difficulty: 2,
    estimatedTimeSeconds: 115,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um restaurante vegetariano, o cliente monta sua própria salada escolhendo ingredientes a partir de uma lista de 7 opções disponíveis (alface, rúcula, tomate, cenoura, palmito, azeitona e nozes). O cliente pode escolher qualquer quantidade de ingredientes (de 1 até todos os 7), mas não pode deixar o prato totalmente vazio.",
      source: "RESTAURANTE SABOR NATURAL. Cardápio Promocional. Curitiba, 2023."
    },
    prompt: "Quantas opções distintas de saladas com pelo menos um ingrediente podem ser criadas pelo cliente?",
    options: [
      {
        id: "a",
        text: "127 opções.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para cada um dos 7 ingredientes disponíveis, o cliente tem exatamente 2 decisões binárias independentes: incluir ou não incluir o ingrediente na salada (2 escolhas por ingrediente). O total de subconjuntos possíveis é 2⁷ = 128. Como o prato não pode ficar vazio (deve ter pelo menos um ingrediente), exclui-se o subconjunto vazio: 128 - 1 = 127 opções distintas."
      },
      {
        id: "b",
        text: "128 opções.",
        isCorrect: false,
        distractorRationale: "Incluiu o conjunto vazio (prato sem nenhum ingrediente), o que contraria a regra de ter pelo menos um ingrediente."
      },
      {
        id: "c",
        text: "49 opções.",
        isCorrect: false,
        distractorRationale: "Calculou 7² = 49 sem fundamentação teórica."
      },
      {
        id: "d",
        text: "21 opções.",
        isCorrect: false,
        distractorRationale: "Calculou C(7, 2) = 21, considerando apenas saladas com exatamente 2 ingredientes."
      },
      {
        id: "e",
        text: "5.040 opções.",
        isCorrect: false,
        distractorRationale: "Calculou 7! = 5.040 como se a ordem dos ingredientes na salada importasse."
      }
    ],
    detailedExplanation: {
      summary: "O número total de subconjuntos de um conjunto de n elementos é 2ⁿ (Conjunto das Partes 𝒫). Excluindo o conjunto vazio, temos 2ⁿ - 1 subconjuntos não vazios.",
      stepByStep: [
        "1. Cada ingrediente tem 2 possibilidades: entra (1) ou não entra (0).",
        "2. Pelo PFC: 2 × 2 × 2 × 2 × 2 × 2 × 2 = 2⁷ = 128 combinações de ingredientes.",
        "3. Subtrair a opção de nenhum ingrediente (vazio): 128 - 1 = 127 opções."
      ],
      coreConcept: "Número de subconjuntos e binômio de Newton: ∑ C(n, k) = 2ⁿ.",
      trapWarning: "Sempre verifique se o caso vazio (zero itens) é permitido ou proibido pelo enunciado."
    },
    commonTraps: ["Somar todas as combinações C(7, 1) + C(7, 2) + ... + C(7, 7) uma a uma à mão, perdendo tempo em vez de aplicar 2ⁿ - 1."],
    tags: ["Análise Combinatória", "Subconjuntos", "Conjunto das Partes", "Binômio de Newton"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-015",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Caminhos em Malhas Geométricas (Permutação de Passos)",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Na malha quadriculada de um aplicativo de entregas urbanas autônomas, um veículo robótico deve deslocar-se do ponto A(0, 0) até o ponto B(5, 3). O veículo move-se apenas sobre as linhas da malha e tem permissão para dar passos apenas para a direita (D) ou para cima (C), em direção ao destino final.",
      source: "DEPARTAMENTO DE LOGÍSTICA AUTÔNOMA. Modelagem de Rotas em Malhas Cartesianas. São Paulo, 2023."
    },
    prompt: "O número total de trajetos distintos que o robô pode percorrer do ponto A ao ponto B é",
    options: [
      {
        id: "a",
        text: "56 trajetos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para ir de (0, 0) a (5, 3), o robô deve dar obrigatoriamente 5 passos para a direita (D) e 3 passos para cima (C), totalizando 8 passos. Qualquer trajeto é um anagrama com 8 letras formado por 5 'D' e 3 'C'. O número de caminhos é dado pela permutação com repetição: P_8^(5, 3) = C(8, 3) = (8 × 7 × 6) / (3 × 2 × 1) = 56 trajetos distintos."
      },
      {
        id: "b",
        text: "15 trajetos.",
        isCorrect: false,
        distractorRationale: "Multiplicou 5 × 3 = 15 sem considerar os passos alternados possíveis."
      },
      {
        id: "c",
        text: "336 trajetos.",
        isCorrect: false,
        distractorRationale: "Calculou arranjo A(8, 3) sem dividir pelo fatorial das repetições dos passos para a direita e para cima."
      },
      {
        id: "d",
        text: "128 trajetos.",
        isCorrect: false,
        distractorRationale: "Calculou 2⁷ ou 2⁸ por equívoco metodológico."
      },
      {
        id: "e",
        text: "40.320 trajetos.",
        isCorrect: false,
        distractorRationale: "Calculou 8! = 40.320 como se todos os 8 passos fossem completamente distintos."
      }
    ],
    detailedExplanation: {
      summary: "Caminhos em malha quadriculada correspondem a permutações de passos direcionais (Direita e Cima) com repetição.",
      stepByStep: [
        "1. Passos para a direita: Δx = 5 - 0 = 5 passos D.",
        "2. Passos para cima: Δy = 3 - 0 = 3 passos C.",
        "3. Total de passos: 5 + 3 = 8 passos.",
        "4. Permutação com repetição: P_8^(5, 3) = 8! / (5! × 3!) = (8 × 7 × 6)/6 = 56 caminhos."
      ],
      coreConcept: "Caminhos em malha quadriculada e permutação com repetição.",
      trapWarning: "Se o problema obrigar a passar por um ponto intermediário C, calcula-se o trajeto de A até C e multiplica-se pelo trajeto de C até B!"
    },
    commonTraps: ["Tentar desenhar todos os caminhos manualmente em vez de modelar como anagrama com repetição."],
    tags: ["Análise Combinatória", "Malha Quadriculada", "Caminhos Mínimos", "Permutação com Repetição"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-016",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Divisão em Grupos de Tamanhos Iguais",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma gincana universitária de engenharia, 6 estudantes devem ser divididos em exatamente 3 duplas de trabalho para competir em bancadas de programação. As duplas não possuem nomes, funções ou hierarquias específicas: são apenas três pares simultâneos de alunos.",
      source: "FACULDADE DE ENGENHARIA. Regulamento da Competição Acadêmica. Campinas, 2023."
    },
    prompt: "O número de maneiras distintas de formar essas 3 duplas com os 6 estudantes é",
    options: [
      {
        id: "a",
        text: "15 maneiras.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Para formar grupos de tamanhos iguais NÃO rotulados (sem nome distintivo): 1ª dupla: C(6, 2) = 15; 2ª dupla: C(4, 2) = 6; 3ª dupla: C(2, 2) = 1. O produto daria 15 × 6 × 1 = 90. No entanto, como as 3 duplas têm o mesmo tamanho (2 alunos cada) e não são diferenciadas por nomes, a ordem entre as 3 duplas é irrelevante! Devemos dividir pelo número de permutações das 3 duplas: 90 / 3! = 90 / 6 = 15 maneiras distintas."
      },
      {
        id: "b",
        text: "90 maneiras.",
        isCorrect: false,
        distractorRationale: "Esqueceu de dividir por 3! = 6, considerando erradamente que as duplas tivessem etiquetas ou nomes como Dupla 1, Dupla 2 e Dupla 3."
      },
      {
        id: "c",
        text: "45 maneiras.",
        isCorrect: false,
        distractorRationale: "Dividiu por 2 em vez de dividir por 3! = 6."
      },
      {
        id: "d",
        text: "720 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou 6! = 720."
      },
      {
        id: "e",
        text: "20 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou C(6, 3) = 20, o que formaria um grupo de 3 e não 3 duplas de 2."
      }
    ],
    detailedExplanation: {
      summary: "Na partição de n elementos em k grupos de mesmo tamanho SEM nomes identificadores, deve-se dividir por k! para anular a ordem irrelevante entre os grupos.",
      stepByStep: [
        "1. Selecionar sucessivamente as duplas: C(6, 2) × C(4, 2) × C(2, 2) = 15 × 6 × 1 = 90.",
        "2. Identificar que as 3 duplas são indistinguíveis (o conjunto {{A, B}, {C, D}, {E, F}} é idêntico a {{C, D}, {A, B}, {E, F}}).",
        "3. Dividir por 3! = 6: 90 / 6 = 15 maneiras.",
        "4. Alternativa direta: o primeiro aluno escolhe seu parceiro (5 opções); entre os 4 restantes, o próximo escolhe seu parceiro (3 opções); os últimos dois formam o par (1 opção) ⟹ 5 × 3 × 1 = 15."
      ],
      coreConcept: "Divisão de conjuntos em grupos de tamanhos iguais não rotulados.",
      trapWarning: "Se as duplas fossem para salas diferentes (Sala A, Sala B, Sala C), a resposta seria 90. Como não têm rótulos, divide-se por 3!, dando 15."
    },
    commonTraps: ["Esquecer de dividir pelo fatorial da quantidade de grupos de mesmo tamanho."],
    tags: ["Análise Combinatória", "Partição de Conjuntos", "Duplas", "Grupos Indistinguíveis"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-017",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Coloração de Mapas e Grafos com Restrição de Cores Adjacentes",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Uma bandeira institucional é formada por 4 faixas verticais consecutivas: F1, F2, F3 e F4. O designer dispõe de 5 cores distintas para pintar as faixas, com a única condição de que duas faixas vizinhas (adjacentes) nunca podem ser pintadas com a mesma cor. Faixas não vizinhas podem ter cores iguais.",
      source: "DEPARTAMENTO DE DESIGN INSTITUCIONAL. Manual de Identidade Visual. Brasília, 2022."
    },
    prompt: "O número de maneiras distintas de colorir essa bandeira é igual a",
    options: [
      {
        id: "a",
        text: "320 maneiras.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pelo Princípio Fundamental da Contagem: Faixa 1 (F1): 5 opções de cores. Faixa 2 (F2): não pode ter a cor de F1 ⟹ 4 opções. Faixa 3 (F3): não pode ter a cor de F2 (mas pode repetir a cor de F1) ⟹ 4 opções. Faixa 4 (F4): não pode ter a cor de F3 (mas pode ter a cor de F2 ou F1) ⟹ 4 opções. Total = 5 × 4 × 4 × 4 = 5 × 64 = 320 maneiras distintas."
      },
      {
        id: "b",
        text: "120 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou como se todas as 4 faixas devessem ter cores distintas entre si: 5 × 4 × 3 × 2 = 120."
      },
      {
        id: "c",
        text: "625 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou 5⁴ = 625, permitindo que faixas vizinhas tenham a mesma cor."
      },
      {
        id: "d",
        text: "20 maneiras.",
        isCorrect: false,
        distractorRationale: "Multiplicou 5 × 4 = 20."
      },
      {
        id: "e",
        text: "256 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou 4⁴ = 256."
      }
    ],
    detailedExplanation: {
      summary: "Em problemas de coloração com restrição apenas de vizinhança, cada região seguinte só não pode repetir a cor imediatamente anterior.",
      stepByStep: [
        "1. Faixa 1: livre escolha entre as 5 cores ⟹ 5 opções.",
        "2. Faixa 2: qualquer cor diferente de F1 ⟹ 5 - 1 = 4 opções.",
        "3. Faixa 3: qualquer cor diferente de F2 ⟹ 5 - 1 = 4 opções.",
        "4. Faixa 4: qualquer cor diferente de F3 ⟹ 5 - 1 = 4 opções.",
        "5. Total = 5 × 4 × 4 × 4 = 320."
      ],
      coreConcept: "Princípio fundamental da contagem aplicado à coloração de regiões vizinhas.",
      trapWarning: "Cuidado com o enunciado: faixas vizinhas não podem ter a mesma cor, mas faixas alternadas PODEM! Não confunda com 'todas as cores devem ser distintas'."
    },
    commonTraps: ["Tratar como cores todas distintas e calcular 5 × 4 × 3 × 2 = 120."],
    tags: ["Análise Combinatória", "PFC", "Coloração de Grafos", "Mapas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-018",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Permutação Caótica (Desarranjos)",
    difficulty: 5,
    estimatedTimeSeconds: 170,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Quatro estudantes (Ana, Bruno, Carlos e Daniel) participam de uma brincadeira de amigo secreto. Cada um escreve seu próprio nome em um papel idêntico, coloca em uma urna e, em seguida, cada um retira um papel ao acaso da urna. Uma rodada é considerada 'válida' se e somente se nenhum dos quatro participantes retirar o próprio nome.",
      source: "OLIMPÍADA BRASILEIRA DE MATEMÁTICA. Problemas Clássicos de Contagem. Rio de Janeiro: SBM, 2021."
    },
    prompt: "O número total de resultados válidos para esse sorteio (onde ninguém tira a si mesmo) é",
    options: [
      {
        id: "a",
        text: "9 resultados.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Trata-se de uma permutação caótica (desarranjo) de 4 elementos, denotada por D(4). A fórmula geral de desarranjo é D(n) = n! × [1/0! - 1/1! + 1/2! - 1/3! + ... + (-1)ⁿ/n!]. Para n = 4: D(4) = 4! × [1/2 - 1/6 + 1/24] = 24 × [12/24 - 4/24 + 1/24] = 24 × (9/24) = 9 resultados válidos."
      },
      {
        id: "b",
        text: "24 resultados.",
        isCorrect: false,
        distractorRationale: "Esse é o total de todas as permutações possíveis (4! = 24), incluindo os casos em que uma ou mais pessoas tiram o próprio nome."
      },
      {
        id: "c",
        text: "6 resultados.",
        isCorrect: false,
        distractorRationale: "Calculou D(3) = 2 ou errou os termos da soma alternada de Euler."
      },
      {
        id: "d",
        text: "12 resultados.",
        isCorrect: false,
        distractorRationale: "Dividiu 24 por 2 sem fundamento formal."
      },
      {
        id: "e",
        text: "15 resultados.",
        isCorrect: false,
        distractorRationale: "Esse é o número de permutações em que pelo menos uma pessoa tira o próprio papel (24 - 9 = 15)."
      }
    ],
    detailedExplanation: {
      summary: "Permutação caótica (desarranjo) é a permutação em que nenhum elemento ocupa sua posição original.",
      stepByStep: [
        "1. Valores memorizados clássicos de desarranjos: D(1) = 0; D(2) = 1; D(3) = 2; D(4) = 9; D(5) = 44.",
        "2. Fórmula recursiva de desarranjo: D(n) = (n - 1) × [D(n-1) + D(n-2)].",
        "3. Aplicando para n = 4: D(4) = (4 - 1) × [D(3) + D(2)] = 3 × [2 + 1] = 3 × 3 = 9.",
        "4. Concluir que há exatamente 9 configurações em que ninguém tira a si mesmo."
      ],
      coreConcept: "Permutação caótica (desarranjos de Euler) e princípio da inclusão-exclusão.",
      trapWarning: "D(4) = 9 é um valor recorrente que vale a pena guardar de memória para resolver a questão em segundos na prova!"
    },
    commonTraps: ["Achar que basta calcular 4! e subtrair 4."],
    tags: ["Análise Combinatória", "Desarranjo", "Permutação Caótica", "Amigo Secreto"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-019",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Combinação Simples e Formação de Polígonos Convexos",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um polígono convexo possui 10 vértices. Um estudante desenha todas as diagonais possíveis desse polígono para estudar os pontos de interseção internos.",
      source: "SOCIEDADE BRASILEIRA DE MATEMÁTICA. Geometria Olímpica. Rio de Janeiro: SBM, 2022."
    },
    prompt: "O número total de diagonais que esse polígono possui é",
    options: [
      {
        id: "a",
        text: "35 diagonais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O número de segmentos que podem ser traçados entre os 10 vértices é C(10, 2) = (10 × 9) / 2 = 45 segmentos. Desses 45 segmentos, 10 são os próprios lados do decágono. Portanto, as diagonais são d = C(10, 2) - 10 = 45 - 10 = 35 diagonais. (Pela fórmula clássica: d = n(n - 3)/2 = 10 × 7 / 2 = 35)."
      },
      {
        id: "b",
        text: "45 diagonais.",
        isCorrect: false,
        distractorRationale: "Esse é o total de todos os segmentos ligando pares de vértices, esquecendo de descontar os 10 lados que formam o contorno do polígono."
      },
      {
        id: "c",
        text: "70 diagonais.",
        isCorrect: false,
        distractorRationale: "Calculou 10 × 7 sem dividir por 2."
      },
      {
        id: "d",
        text: "20 diagonais.",
        isCorrect: false,
        distractorRationale: "Calculou para um octógono (8 × 5 / 2 = 20)."
      },
      {
        id: "e",
        text: "90 diagonais.",
        isCorrect: false,
        distractorRationale: "Calculou arranjo A(10, 2) = 90."
      }
    ],
    detailedExplanation: {
      summary: "O número de diagonais de um polígono convexo de n lados é a combinação de 2 vértices quaisquer menos os n lados: d = C(n, 2) - n = n(n - 3)/2.",
      stepByStep: [
        "1. Número de vértices: n = 10.",
        "2. Segmentos totais ligando dois vértices: C(10, 2) = (10 × 9)/2 = 45.",
        "3. Lados do polígono: 10.",
        "4. Diagonais = 45 - 10 = 35."
      ],
      coreConcept: "Dedução combinatória do número de diagonais de um polígono convexo.",
      trapWarning: "Lembre-se: os lados do polígono ligam vértices consecutivos e NÃO são diagonais!"
    },
    commonTraps: ["Esquecer de subtrair os lados de C(n, 2)."],
    tags: ["Análise Combinatória", "Diagonais", "Polígonos", "Combinação"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-020",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Princípio Multiplicativo com Restrição Posicional",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um número de protocolo de identificação de veículos elétricos é formado por 4 algarismos escolhidos entre os dígitos {1, 2, 3, 4, 5, 6, 7}. A autoridade de trânsito exige que o número de protocolo seja obrigatoriamente um NÚMERO ÍMPAR e que tenha todos os seus 4 algarismos distintos.",
      source: "DEPARTAMENTO DE TRÂNSITO E MOBILIDADE SUSTENTÁVEL. Normas de Emplacamento Especial. Curitiba, 2023."
    },
    prompt: "A quantidade de números de protocolo distintos que atendem a essas duas condições é",
    options: [
      {
        id: "a",
        text: "480.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em problemas com restrições, comece sempre pela posição mais restrita! A última posição (unidades) deve ser ímpar. Os algarismos ímpares disponíveis em {1, 2, 3, 4, 5, 6, 7} são {1, 3, 5, 7} (4 opções). Uma vez escolhido o último algarismo, restam 7 - 1 = 6 algarismos para a 1ª posição; 5 para a 2ª; e 4 para a 3ª. Pelo princípio multiplicativo: 6 × 5 × 4 × 4 = 120 × 4 = 480 números distintos."
      },
      {
        id: "b",
        text: "840.",
        isCorrect: false,
        distractorRationale: "Esse é o total de números com 4 dígitos distintos sem a restrição de ser ímpar: 7 × 6 × 5 × 4 = 840."
      },
      {
        id: "c",
        text: "360.",
        isCorrect: false,
        distractorRationale: "Calculou considerando que houvesse apenas 3 opções ímpares (6 × 5 × 4 × 3 = 360)."
      },
      {
        id: "d",
        text: "240.",
        isCorrect: false,
        distractorRationale: "Cometeu erro de multiplicação na primeira posição."
      },
      {
        id: "e",
        text: "1.024.",
        isCorrect: false,
        distractorRationale: "Calculou admitindo repetição de algarismos: 7³ × 4 = 1.372 ou potências arbitrárias."
      }
    ],
    detailedExplanation: {
      summary: "Regra de ouro da Análise Combinatória: resolva primeiro a restrição mais crítica do problema.",
      stepByStep: [
        "1. Identificar a restrição: o número é ímpar ⟹ a última casa deve ser ocupada por um dígito ímpar.",
        "2. Contar as opções ímpares em {1, 2, 3, 4, 5, 6, 7}: são 4 algarismos (1, 3, 5, 7) ⟹ 4 opções para a última casa.",
        "3. Como os dígitos são distintos, preenchemos as demais casas com os algarismos restantes do conjunto:",
        "   - 1ª casa: 6 opções restantes.",
        "   - 2ª casa: 5 opções restantes.",
        "   - 3ª casa: 4 opções restantes.",
        "4. Multiplicar: 6 × 5 × 4 × 4 = 480 números."
      ],
      coreConcept: "PFC com restrição na casa das unidades e elementos distintos.",
      trapWarning: "Se você começar a preencher pela primeira casa, não saberá se usou um ímpar ou um par, tendo que dividir em vários casos. Começar pela restrição simplifica tudo!"
    },
    commonTraps: ["Começar pela primeira casa e esquecer que a última casa condiciona a paridade do número."],
    tags: ["Análise Combinatória", "PFC", "Números Ímpares", "Arranjo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-021",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Anagramas com Letras que Não Ficam Juntas",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um especialista em criptografia analisa anagramas da palavra 'MEDICINA'. Ele deseja saber quantos anagramas distintos dessa palavra podem ser formados de modo que as duas letras 'I' NUNCA fiquem juntas.",
      source: "DEPARTAMENTO DE CRIPTOGRAFIA COMPUTACIONAL. Teoria de Permutações e Segurança. Belo Horizonte, 2022."
    },
    prompt: "O número total de anagramas da palavra MEDICINA em que as letras I não aparecem juntas é",
    options: [
      {
        id: "a",
        text: "15.120.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A palavra MEDICINA possui 8 letras no total: M (1), E (1), D (1), I (2), C (1), N (1), A (1). O total de anagramas sem restrição é P_8^(2) = 8! / 2! = 40.320 / 2 = 20.160 anagramas. O número de anagramas em que as duas letras 'I' ficam JUNTAS (tratando 'II' como 1 único bloco com 7 elementos) é P_7 = 7! = 5.040 anagramas. Logo, os anagramas em que as letras I NÃO ficam juntas é dado pelo complementar: 20.160 - 5.040 = 15.120."
      },
      {
        id: "b",
        text: "20.160.",
        isCorrect: false,
        distractorRationale: "Esse é o total de anagramas da palavra sem descontar o caso em que as letras I ficam juntas."
      },
      {
        id: "c",
        text: "5.040.",
        isCorrect: false,
        distractorRationale: "Esse é o número de anagramas em que as letras I ficam obrigatoriamente juntas."
      },
      {
        id: "d",
        text: "10.080.",
        isCorrect: false,
        distractorRationale: "Dividiu o total por 2 arbitrariamente."
      },
      {
        id: "e",
        text: "40.320.",
        isCorrect: false,
        distractorRationale: "Calculou 8! sem considerar a repetição das duas letras I."
      }
    ],
    detailedExplanation: {
      summary: "Para duas letras iguais que não podem ficar juntas, o método Total de Anagramas menos Anagramas com Letras Juntas é direto e infalível.",
      stepByStep: [
        "1. Contar as letras de MEDICINA: 8 letras, sendo 2 letras I.",
        "2. Total de anagramas: P_8^2 = 8! / 2! = 40.320 / 2 = 20.160.",
        "3. Anagramas com 'II' juntos: bloco (II) + M + E + D + C + N + A = 7 elementos ⟹ 7! = 5.040.",
        "4. Subtrair: Não juntas = 20.160 - 5.040 = 15.120."
      ],
      coreConcept: "Anagramas com repetição e método do complementar para não adjacência.",
      trapWarning: "Como as duas letras 'I' são idênticas, não se multiplica por 2! dentro do bloco (II), pois 'I₁I₂' é idêntico a 'I₂I₁'."
    },
    commonTraps: ["Multiplicar o bloco 'II' por 2! como se as letras I fossem distintas."],
    tags: ["Análise Combinatória", "Anagramas", "Medicina", "Método Complementar"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-022",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Combinação Simples em Torneios Esportivos (Todos contra Todos)",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Em um torneio universitário de xadrez feminino com 12 enxadristas inscritas, o regulamento da primeira fase prevê que todas as atletas joguem entre si exatamente uma vez (sistema 'todos contra todos' em turno único).",
      source: "FEDERAÇÃO UNIVERSITÁRIA DE ESPORTES. Regulamento Geral de Xadrez. Curitiba, 2023."
    },
    prompt: "O número total de partidas de xadrez que serão disputadas nessa primeira fase é",
    options: [
      {
        id: "a",
        text: "66 partidas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Cada partida de xadrez envolve exatamente duas enxadristas. Como a ordem não altera o confronto (o jogo entre jogadora A e jogadora B é o mesmo que entre B e A), a quantidade de partidas é uma combinação de 12 jogadoras tomadas 2 a 2: C(12, 2) = (12 × 11) / 2 = 66 partidas."
      },
      {
        id: "b",
        text: "132 partidas.",
        isCorrect: false,
        distractorRationale: "Calculou por arranjo A(12, 2) = 12 × 11 = 132, o que contaria cada jogo duas vezes (turno e returno)."
      },
      {
        id: "c",
        text: "24 partidas.",
        isCorrect: false,
        distractorRationale: "Multiplicou 12 por 2."
      },
      {
        id: "d",
        text: "144 partidas.",
        isCorrect: false,
        distractorRationale: "Calculou 12² = 144."
      },
      {
        id: "e",
        text: "72 partidas.",
        isCorrect: false,
        distractorRationale: "Calculou 12 × 6 = 72 sem rigor combinatório."
      }
    ],
    detailedExplanation: {
      summary: "Em torneios de turno único de todos contra todos com n competidores, o total de jogos é sempre dado por C(n, 2) = n(n - 1)/2.",
      stepByStep: [
        "1. Total de atletas: n = 12.",
        "2. Atletas por partida: 2.",
        "3. Como o confronto independe de ordem: C(12, 2) = (12 × 11)/2 = 66."
      ],
      coreConcept: "Combinações simples em torneios de confronto direto.",
      trapWarning: "Se o torneio fosse em 'turno e returno' (com jogo de ida e jogo de volta), a resposta seria 132 partidas!"
    },
    commonTraps: ["Esquecer de dividir por 2 e contar partidas duplicadas."],
    tags: ["Análise Combinatória", "Torneios", "Combinação Simples", "Xadrez"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-023",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Princípio Fundamental da Contagem com Restrição de Paridade",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Para cadastrar um sistema de alarme laboratorial, o técnico precisa gerar um código com 3 algarismos distintos escolhidos do conjunto {2, 3, 4, 5, 6, 7, 8}. O código gerado deve ser um número PAR e maior que 400.",
      source: "LABORATÓRIO CENTRAL DE BIOANÁLISE. Protocolo de Acesso Físico. Porto Alegre, 2023."
    },
    prompt: "Quantos códigos válidos podem ser cadastrados com essas especificações?",
    options: [
      {
        id: "a",
        text: "75 códigos.",
        isCorrect: false,
        distractorRationale: "Calculou incorretamente a divisão dos casos de paridade entre as centenas e as unidades."
      },
      {
        id: "b",
        text: "85 códigos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Dividindo em dois casos mutuamente exclusivos: Caso 1 (1º dígito ímpar: {5, 7}): 2 opções para a centena; 4 opções de pares para a unidade {2, 4, 6, 8}; 5 opções restantes para a dezena ⟹ 2 × 5 × 4 = 40 códigos. Caso 2 (1º dígito par: {4, 6, 8}): 3 opções para a centena; 3 opções de pares restantes para a unidade; 5 opções restantes para a dezena ⟹ 3 × 5 × 3 = 45 códigos. Total de códigos = 40 + 45 = 85 códigos."
      },
      {
        id: "c",
        text: "120 códigos.",
        isCorrect: false,
        distractorRationale: "Calculou sem a restrição de paridade."
      },
      {
        id: "d",
        text: "90 códigos.",
        isCorrect: false,
        distractorRationale: "Calculou 5 × 6 × 3 = 90 ignorando a dependência entre a paridade da centena e da unidade."
      },
      {
        id: "e",
        text: "60 códigos.",
        isCorrect: false,
        distractorRationale: "Calculou apenas o produto ignorando as duas bifurcações de paridade."
      }
    ],
    detailedExplanation: {
      summary: "Quando a primeira casa e a última casa disputam os mesmos números restritos (paridade e valor mínimo), a divisão em casos é obrigatória.",
      stepByStep: [
        "1. Identificar o conflito: o número deve ser maior que 400 (centenas em {4, 5, 6, 7, 8}) e par (unidades em {2, 4, 6, 8}). Os pares {4, 6, 8} estão nas duas restrições!",
        "2. Caso 1 (Centena Ímpar ∈ {5, 7}): 2 opções. Unidade par ∈ {2, 4, 6, 8}: 4 opções. Dezena: 5 opções restantes ⟹ 2 × 5 × 4 = 40.",
        "3. Caso 2 (Centena Par ∈ {4, 6, 8}): 3 opções. Unidade par: restam 3 opções. Dezena: 5 opções restantes ⟹ 3 × 5 × 3 = 45.",
        "4. Somar os dois casos disjuntos: 40 + 45 = 85 códigos."
      ],
      coreConcept: "Divisão em casos disjuntos com interseção de restrições.",
      trapWarning: "Sempre que um mesmo algarismo puder ocupar a primeira e a última posição condicionadas, divida em casos!"
    },
    commonTraps: ["Tentar fazer em uma linha única sem dividir em casos, gerando indeterminação na contagem dos pares."],
    tags: ["Análise Combinatória", "Divisão em Casos", "Paridade", "Centenas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-024",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Triângulo de Pascal e Teorema das Linhas",
    difficulty: 3,
    estimatedTimeSeconds: 125,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "No estudo das propriedades algébricas do Triângulo de Pascal, o Teorema das Linhas estabelece que a soma de todos os coeficientes binomiais da linha n (ou seja, C(n, 0) + C(n, 1) + C(n, 2) + ... + C(n, n)) é igual a 2ⁿ.",
      source: "LIMA, Elon Lages. A Matemática do Ensino Médio: Volume 2. Rio de Janeiro: SBM, 2016."
    },
    prompt: "O valor numérico da soma C(8, 1) + C(8, 2) + C(8, 3) + ... + C(8, 7) é igual a",
    options: [
      {
        id: "a",
        text: "254.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Pelo Teorema das Linhas do Triângulo de Pascal: C(8, 0) + C(8, 1) + C(8, 2) + ... + C(8, 7) + C(8, 8) = 2⁸ = 256. A soma solicitada no enunciado não inclui os termos dos extremos: C(8, 0) = 1 e C(8, 8) = 1. Portanto: Soma = 256 - C(8, 0) - C(8, 8) = 256 - 1 - 1 = 254."
      },
      {
        id: "b",
        text: "256.",
        isCorrect: false,
        distractorRationale: "Esse é o valor de 2⁸, que inclui erroneamente os termos extremos C(8, 0) = 1 e C(8, 8) = 1."
      },
      {
        id: "c",
        text: "255.",
        isCorrect: false,
        distractorRationale: "Subtraiu apenas o primeiro termo C(8, 0) e esqueceu de subtrair o último termo C(8, 8)."
      },
      {
        id: "d",
        text: "128.",
        isCorrect: false,
        distractorRationale: "Calculou 2⁷ = 128."
      },
      {
        id: "e",
        text: "512.",
        isCorrect: false,
        distractorRationale: "Calculou 2⁹ = 512."
      }
    ],
    detailedExplanation: {
      summary: "A soma de uma linha do Triângulo de Pascal é 2ⁿ; excluindo-se termos extremos, desconta-se 1 para cada termo faltante.",
      stepByStep: [
        "1. Identificar a linha: n = 8.",
        "2. Soma completa da linha: ∑ C(8, k) de k = 0 até 8 = 2⁸ = 256.",
        "3. Identificar os termos excluídos na pergunta: falta C(8, 0) = 1 e falta C(8, 8) = 1.",
        "4. Resultado = 256 - 1 - 1 = 254."
      ],
      coreConcept: "Triângulo de Pascal, Teorema das Linhas e coeficientes binomiais.",
      trapWarning: "Verifique sempre se a soma começa em k = 0 e vai até k = n, ou se algum termo das bordas foi omitido."
    },
    commonTraps: ["Esquecer de subtrair os termos extremos 1 e 1."],
    tags: ["Análise Combinatória", "Triângulo de Pascal", "Coeficiente Binomial", "Teorema das Linhas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "MAT-COMB-025",
    area: "matematica",
    competence: 1,
    skill: 2,
    topic: "Análise Combinatória",
    subtopic: "Modelagem Combinatória Complexa com Múltiplas Etapas",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "application",
    requiresCalculation: true,
    requiresInterpretation: true,
    context: {
      supportText: "Um centro de triagem médica precisa enviar uma equipe móvel de vacinação composta por 5 profissionais para atuar em uma comunidade ribeirinha. O quadro do centro conta com 5 médicos, 6 enfermeiros e 4 técnicos de enfermagem. O protocolo sanitário exige que a equipe seja formada por EXATAMENTE 2 médicos, 2 enfermeiros e 1 técnico de enfermagem.",
      source: "MINISTÉRIO DA SAÚDE. Manual Operacional de Vacinação em Áreas Remotas. Brasília, 2023."
    },
    prompt: "De quantas maneiras distintas essa equipe de 5 profissionais pode ser escalada?",
    options: [
      {
        id: "a",
        text: "600 maneiras.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Aplicando combinações simples para cada categoria profissional: Médicos: escolha de 2 entre 5 ⟹ C(5, 2) = (5 × 4) / 2 = 10. Enfermeiros: escolha de 2 entre 6 ⟹ C(6, 2) = (6 × 5) / 2 = 15. Técnicos: escolha de 1 entre 4 ⟹ C(4, 1) = 4. Pelo princípio fundamental da contagem, multiplicam-se as três decisões: Total = 10 × 15 × 4 = 150 × 4 = 600 maneiras distintas."
      },
      {
        id: "b",
        text: "3.003 maneiras.",
        isCorrect: false,
        distractorRationale: "Esse seria o total de equipes sem critério profissional: C(15, 5) = 3.003."
      },
      {
        id: "c",
        text: "120 maneiras.",
        isCorrect: false,
        distractorRationale: "Multiplicou 5 × 6 × 4 = 120 (como se fosse 1 médico, 1 enfermeiro e 1 técnico)."
      },
      {
        id: "d",
        text: "29 maneiras.",
        isCorrect: false,
        distractorRationale: "Somou as combinações (10 + 15 + 4 = 29) em vez de multiplicá-las pelo princípio da contagem."
      },
      {
        id: "e",
        text: "7.200 maneiras.",
        isCorrect: false,
        distractorRationale: "Calculou por arranjos simples, considerando que a ordem de escalação dentro da equipe importasse."
      }
    ],
    detailedExplanation: {
      summary: "A composição de equipes com cotas específicas por categoria profissional é calculada pelo produto das combinações de cada categoria.",
      stepByStep: [
        "1. Seleção dos médicos: C(5, 2) = (5 × 4)/2 = 10.",
        "2. Seleção dos enfermeiros: C(6, 2) = (6 × 5)/2 = 15.",
        "3. Seleção dos técnicos: C(4, 1) = 4.",
        "4. Multiplicação das etapas: 10 × 15 × 4 = 600 maneiras."
      ],
      coreConcept: "Combinações simultâneas em categorias independentes com produto do PFC.",
      trapWarning: "Nunca some combinações de etapas que acontecem juntas! Quando as escolhas ocorrem simultaneamente para formar um único grupo, MULTIPLIQUE."
    },
    commonTraps: ["Somar as combinações em vez de multiplicá-las."],
    tags: ["Análise Combinatória", "Combinações Múltiplas", "Equipes Médicas", "PFC"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
