export const QUESTIONS_INTERPRETACAO = [
  {
    id: "LIN-INT-001",
    area: "linguagens",
    competence: 6,
    skill: 18,
    topic: "Interpretação de Texto",
    subtopic: "Função social do texto",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "rio-de-janeiro",
    context: {
      supportText: "O morro do Borel, na Tijuca, foi palco de uma iniciativa inovadora. Moradores locais criaram um jornal comunitário para dar voz às demandas da comunidade, noticiando desde problemas de infraestrutura até eventos culturais promovidos pelos próprios moradores. O veículo tornou-se um importante instrumento de mobilização e valorização da identidade local.",
      source: "Original"
    },
    prompt: "Considerando a função social dos gêneros jornalísticos, o jornal comunitário criado no morro do Borel cumpre o papel principal de:",
    options: [
      { id: "a", text: "divulgar os pontos turísticos da comunidade para atrair investimentos externos.", isCorrect: false, distractorRationale: "O foco do jornal é interno, visando a comunidade e não o turismo." },
      { id: "b", text: "competir com os grandes meios de comunicação pela audiência na região.", isCorrect: false, distractorRationale: "O jornal comunitário não tem caráter competitivo comercial, mas social." },
      { id: "c", text: "fortalecer a coesão social e dar visibilidade às questões próprias da comunidade.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "promover exclusivamente a venda de produtos e serviços locais.", isCorrect: false, distractorRationale: "O jornal noticia problemas e eventos, não sendo apenas um classificado comercial." },
      { id: "e", text: "substituir as funções do poder público na resolução de problemas estruturais.", isCorrect: false, distractorRationale: "O jornal mobiliza e denuncia, mas não substitui a ação governamental." }
    ],
    detailedExplanation: {
      summary: "O jornal comunitário serve como ferramenta de representatividade.",
      stepByStep: ["1. Analisar o texto base que cita mobilização e valorização da identidade.", "2. Identificar que jornais comunitários focam nas necessidades e na voz dos moradores locais.", "3. Concluir que a principal função é fortalecer a comunidade e dar visibilidade às suas questões."],
      coreConcept: "Função social dos gêneros textuais e mídia alternativa.",
      trapWarning: "Cuidado para não confundir mídia comunitária com jornais de grande circulação ou com classificados comerciais."
    },
    commonTraps: ["Confundir a função do jornal comunitário com turismo ou comércio."],
    tags: ["interpretacao", "funcao-social", "jornalismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-002",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Gêneros Textuais",
    subtopic: "Campanha Publicitária",
    difficulty: 2,
    estimatedTimeSeconds: 90,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "sao-paulo",
    context: {
      supportText: "Uma campanha de trânsito espalhada pela cidade de São Paulo exibia a seguinte frase em grandes outdoors: 'No trânsito, a sua pressa não vale a vida de ninguém. Desacelere.' Acompanhava a frase a imagem de um relógio quebrado e um velocímetro em vermelho.",
      source: "Inspirada em campanhas de trânsito reais"
    },
    prompt: "O principal recurso argumentativo utilizado nesta campanha publicitária para convencer o leitor a mudar seu comportamento é:",
    options: [
      { id: "a", text: "a apelação para a autoridade dos órgãos de trânsito.", isCorrect: false, distractorRationale: "O texto não cita nenhum órgão ou autoridade diretamente, foca no aspecto humano." },
      { id: "b", text: "a oposição entre a pressa (tempo) e o valor inestimável da vida.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "o uso de dados estatísticos sobre acidentes de trânsito.", isCorrect: false, distractorRationale: "O texto não apresenta números ou estatísticas." },
      { id: "d", text: "a ameaça de multas severas para quem ultrapassar o limite de velocidade.", isCorrect: false, distractorRationale: "A campanha foca na vida e não nas punições legais (multas)." },
      { id: "e", text: "a promoção de veículos mais seguros e modernos.", isCorrect: false, distractorRationale: "A campanha não faz publicidade de carros, mas sim de conscientização no trânsito." }
    ],
    detailedExplanation: {
      summary: "A campanha usa a contraposição de valores para persuadir o motorista.",
      stepByStep: ["1. Ler a frase da campanha: 'sua pressa não vale a vida'.", "2. Notar que a pressa representa a pressa do dia a dia e a vida é o bem maior.", "3. A argumentação se baseia no contraste entre o valor do tempo e o valor da vida."],
      coreConcept: "Estratégias argumentativas em campanhas de conscientização.",
      trapWarning: "Ficar atento ao que está explicitamente no texto, não inferir multas ou leis que não foram mencionadas."
    },
    commonTraps: ["Achar que toda campanha de trânsito ameaça com multas."],
    tags: ["argumentacao", "campanha-publicitaria", "conscientizacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-003",
    area: "linguagens",
    competence: 1,
    skill: 1,
    topic: "Interpretação de Texto",
    subtopic: "Variedade linguística",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "text",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "salvador",
    context: {
      supportText: "— Ó paí, ó! Esse menino num tem jeito memo. Vive batendo perna lá pras bandas do Pelourinho até altas horas.\n— Deixe de agonia, mulher! Ele tá lá com a turma do Olodum, aprendendo percussão. Pior se tivesse fazendo besteira.\nO diálogo retrata a conversa entre duas mães sobre a rotina de seus filhos na capital baiana.",
      source: "Original"
    },
    prompt: "O trecho apresentado evidencia o uso da linguagem coloquial e marcas de variação linguística regional. O uso da expressão 'Ó paí, ó' e outras marcas no texto revelam que as falantes:",
    options: [
      { id: "a", text: "demonstram baixo grau de escolaridade devido ao uso incorreto do idioma.", isCorrect: false, distractorRationale: "A variação linguística não deve ser vista como 'uso incorreto', mas como adequação ao contexto." },
      { id: "b", text: "empregam uma linguagem culta adaptada à formalidade da situação.", isCorrect: false, distractorRationale: "A situação é informal e a linguagem não é culta." },
      { id: "c", text: "revelam sua identidade cultural e pertencimento a uma comunidade específica por meio de falares locais.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "buscam imitar o sotaque de outras regiões para facilitar a comunicação.", isCorrect: false, distractorRationale: "Trata-se de falares locais e não de imitação." },
      { id: "e", text: "utilizam gírias exclusivas de músicos profissionais do Pelourinho.", isCorrect: false, distractorRationale: "As expressões são de uso geral na região, não exclusivas de músicos." }
    ],
    detailedExplanation: {
      summary: "A variação linguística reflete a identidade cultural dos falantes.",
      stepByStep: ["1. Identificar as marcas regionais no diálogo (ex: 'Ó paí, ó').", "2. Compreender que a variação regional é uma marca de identidade e pertencimento, não de erro.", "3. Relacionar a linguagem utilizada com o contexto sociocultural de Salvador apresentado no texto."],
      coreConcept: "Variação linguística e identidade cultural.",
      trapWarning: "Evitar o preconceito linguístico ao analisar o uso da linguagem coloquial."
    },
    commonTraps: ["Preconceito linguístico, considerando a fala como errada."],
    tags: ["variacao-linguistica", "identidade-cultural", "oralidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-004",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Gêneros Textuais",
    subtopic: "Crônica",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "rio-de-janeiro",
    context: {
      supportText: "Sempre que passo pelo calçadão de Copacabana, observo o mesmo vendedor de mate. Ele equilibra seus galões com uma maestria que desafia as leis da física e da biologia humana. Hoje, sob um sol de rachar, ele não apenas vendia sua bebida gelada, mas também distribuía sorrisos e conselhos aos turistas apressados. Ali percebi que a verdadeira essência carioca não está apenas nas praias, mas nesses personagens anônimos que tecem a alma da cidade.",
      source: "Original"
    },
    prompt: "O texto lido possui características marcantes de qual gênero textual e por qual motivo?",
    options: [
      { id: "a", text: "Notícia, pois relata fatos objetivos e atuais sobre a venda de mate em Copacabana.", isCorrect: false, distractorRationale: "O texto tem forte carga subjetiva e não foca na objetividade do jornalismo." },
      { id: "b", text: "Editorial, já que expressa a opinião de um jornal sobre o comércio ambulante.", isCorrect: false, distractorRationale: "É uma narrativa pessoal, não representa a posição de uma instituição jornalística." },
      { id: "c", text: "Crônica, pois parte de uma observação do cotidiano para construir uma reflexão subjetiva.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "Artigo de opinião, visto que seu foco é argumentar contra a informalidade no trabalho.", isCorrect: false, distractorRationale: "Não há tese contra ou a favor da informalidade, apenas uma observação poética do cotidiano." },
      { id: "e", text: "Conto, por se tratar de uma narrativa longa com complexa rede de personagens.", isCorrect: false, distractorRationale: "É curto e sem complexidade narrativa típica de contos maiores." }
    ],
    detailedExplanation: {
      summary: "A crônica se caracteriza por reflexões a partir de cenas do dia a dia.",
      stepByStep: ["1. Analisar a temática: um vendedor de mate no calçadão (fato do cotidiano).", "2. Analisar o tom: pessoal, em primeira pessoa, reflexivo ('Ali percebi que...').", "3. Relacionar essas características ao gênero crônica, muito presente na tradição literária brasileira."],
      coreConcept: "Características do gênero textual crônica.",
      trapWarning: "Não confundir a reflexão pessoal da crônica com a argumentação estruturada do artigo de opinião."
    },
    commonTraps: ["Confundir com artigo de opinião por ter o ponto de vista do autor."],
    tags: ["generos-textuais", "cronica", "cotidiano"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-005",
    area: "linguagens",
    competence: 6,
    skill: 19,
    topic: "Interpretação de Texto",
    subtopic: "Estratégias de persuasão",
    difficulty: 4,
    estimatedTimeSeconds: 140,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    cityId: "sao-paulo",
    context: {
      supportText: "No metrô de São Paulo, um cartaz de incentivo à leitura afirma: 'Um livro aberto é um cérebro que fala; fechado, um amigo que espera; esquecido, uma alma que perdoa; destruído, um coração que chora.' (Provérbio Hindu). Logo abaixo, há um QR Code para download gratuito de e-books.",
      source: "Inspirada em campanhas de incentivo à leitura"
    },
    prompt: "O texto do cartaz utiliza uma figura de linguagem estrutural para criar seu efeito persuasivo e valorizar a leitura. Essa figura caracteriza-se pela:",
    options: [
      { id: "a", text: "omissão de termos facilmente subentendidos no contexto.", isCorrect: false, distractorRationale: "Embora haja elipse do verbo 'é', a estrutura principal é o paralelismo/metáfora." },
      { id: "b", text: "repetição de estruturas sintáticas e uso de metáforas personificadoras.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "utilização de ironia para criticar a falta de hábito de leitura.", isCorrect: false, distractorRationale: "Não há tom irônico, o tom é lírico e reflexivo." },
      { id: "d", text: "substituição da parte pelo todo ao referir-se aos livros.", isCorrect: false, distractorRationale: "A figura não é sinédoque/metonímia nesse sentido central, e sim personificação/metáfora estruturada em paralelo." },
      { id: "e", text: "exageração intencional para chocar o leitor sobre a destruição de livros.", isCorrect: false, distractorRationale: "O foco não é a hipérbole, mas a associação metafórica das condições do livro com sentimentos humanos." }
    ],
    detailedExplanation: {
      summary: "O cartaz usa paralelismo sintático e metáforas/personificações.",
      stepByStep: ["1. Analisar as frases: 'livro aberto é um cérebro...', 'fechado, um amigo...', etc.", "2. Identificar a repetição da estrutura (estado do livro -> correspondência humana).", "3. Notar que cérebro que fala, alma que perdoa, coração que chora são personificações e metáforas para persuadir pela emoção."],
      coreConcept: "Figuras de linguagem (paralelismo e personificação/metáfora) como estratégia persuasiva.",
      trapWarning: "Cuidado para não se fixar apenas na elipse (omissão do verbo 'é') e ignorar a estrutura rítmica e as metáforas que sustentam a persuasão."
    },
    commonTraps: ["Achar que o principal recurso é a elipse em vez das figuras de pensamento."],
    tags: ["figuras-de-linguagem", "persuasao", "leitura"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
