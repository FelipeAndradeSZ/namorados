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
    context: {
      supportText: "O morro do Borel, na Tijuca, foi palco de uma iniciativa inovadora. Moradores locais criaram um jornal comunitário para dar voz às demandas da comunidade, noticiando desde problemas de infraestrutura até eventos culturais promovidos pelos próprios moradores. O veículo tornou-se um importante instrumento de mobilização e valorização da identidade local.",
      source: "Original"
    },
    prompt: "Considerando a função social dos gêneros jornalísticos, o jornal comunitário criado no morro do Borel cumpre o papel principal de:",
    options: [
      { id: "a", text: "divulgar os potenciais paisagísticos da comunidade para atrair investimentos externos.", isCorrect: false, distractorRationale: "O foco do jornal é comunitário interno, voltado aos moradores locais e não à publicidade externa." },
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
    commonTraps: ["Confundir a função do jornal comunitário com marketing externo ou classificados comerciais."],
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
    context: {
      supportText: "Sempre que passo pelo calçadão de Copacabana, observo o mesmo vendedor de mate. Ele equilibra seus galões com uma maestria que desafia as leis da física e da biologia humana. Hoje, sob um sol de rachar, ele não apenas vendia sua bebida gelada, mas também distribuía sorrisos e conselhos aos transeuntes apressados. Ali percebi que a verdadeira essência carioca não está apenas nas praias, mas nesses personagens anônimos que tecem a alma da cidade.",
      source: "Original"
    },
    prompt: "O texto lido possui características marcantes de qual gênero textual e por qual motivo?",
    options: [
      { id: "a", text: "Notícia, pois relata fatos objetivos e atuais sobre a venda de mate em Copacabana.", isCorrect: false, distractorRationale: "O texto tem forte carga subjetiva e não foca na objetividade do jornalismo." },
      { id: "b", text: "Editorial, já que expressa a opinião de um jornal sobre o comércio ambulante.", isCorrect: false, distractorRationale: "É uma narrativa pessoal, não representa a posição de uma instituição jornalística." },
      { id: "c", text: "Crônica, pois parte de uma observação do cotidiano para construir uma reflexão subjetiva.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "Artigo de opinião, dado que seu foco é argumentar contra a informalidade no trabalho.", isCorrect: false, distractorRationale: "Não há tese contra ou a favor da informalidade, apenas uma observação poética do cotidiano." },
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
  },
  {
    id: "LIN-INT-006",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Interpretação de Texto",
    subtopic: "Intertextualidade e Paródia",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Poema original (Gonçalves Dias, Canção do Exílio, 1843):\n'Minha terra tem palmeiras, / Onde canta o Sabiá; / As aves, que aqui gorjeiam, / Não gorjeiam como lá.'\n\nReleitura modernista (Oswald de Andrade, Canto de Regresso à Pátria, 1924):\n'Minha terra tem palmares / Onde gorjeia o mar / Os passarinhos daqui / Não cantam como os de lá.'",
      source: "Oswald de Andrade, Pau-Brasil (1924)."
    },
    prompt: "Ao substituir 'palmeiras' por 'palmares' e subverter a sintaxe da célebre estrofe romântica de Gonçalves Dias, o poema modernista constrói um efeito intertextual que:",
    options: [
      { id: "a", text: "ressignifica a memória histórica nacional por meio de uma paródia crítica que evoca a resistência negra quilombola.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "reafirma o ufanismo idealizador do Romantismo oitocentista sobre a exuberância inalterada da flora brasileira.", isCorrect: false, distractorRationale: "Oswald rompe com o ufanismo idealizado do Romantismo em vez de reafirmá-lo." },
      { id: "c", text: "demonstra desconhecimento deliberado da métrica poética para ridicularizar as formas eruditas em língua portuguesa.", isCorrect: false, distractorRationale: "A alteração não é fruto de ignorância técnica, mas de projeto estético modernista consciente." },
      { id: "d", text: "reproduz uma paráfrase literal sem qualquer intenção de diálogo com o contexto histórico-social.", isCorrect: false, distractorRationale: "A mudança de 'palmeiras' para 'palmares' altera profundamente a carga semântica e política do poema." },
      { id: "e", text: "anula o sentimento de pertencimento ao Brasil em prol da exaltação exclusiva da cultura europeia.", isCorrect: false, distractorRationale: "O Modernismo pau-brasil busca raízes nacionais populares e críticas, contra a subserviência cultural à Europa." }
    ],
    detailedExplanation: {
      summary: "A substituição de 'palmeiras' por 'palmares' converte o louvor passivo à natureza em evocação da luta histórica contra a escravidão.",
      stepByStep: [
        "A Canção do Exílio de Gonçalves Dias é o ápice do nacionalismo ufanista e idílico da 1ª Geração Romântica.",
        "Oswald de Andrade utiliza a paródia modernista: apropria-se da estrutura rítmica consagrada para desestabilizar seu sentido oficial.",
        "Ao introduzir 'palmares', desloca o foco da natureza decorativa para o maior símbolo de resistência à opressão escravista da história do Brasil."
      ],
      coreConcept: "Intertextualidade Paródica e Ruptura Modernista",
      trapWarning: "Paródia subverte o sentido original (crítica/humor); paráfrase confirma o sentido original com outras palavras."
    },
    commonTraps: ["confundir paródia com paráfrase", "ignorar o peso histórico do vocábulo 'palmares'"],
    tags: ["intertextualidade", "parodia", "modernismo", "romantismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-007",
    area: "linguagens",
    competence: 6,
    skill: 18,
    topic: "Interpretação de Texto",
    subtopic: "Pressupostos e Subentendidos",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma reportagem de divulgação científica sobre avanços da oncologia, o articulista afirma:\n'Com o novo protocolo de imunoterapia de precisão, até mesmo os pacientes que não respondiam aos tratamentos convencionais voltaram a apresentar remissão tumoral prolongada.'",
      source: "Revista Ciência & Saúde Contemporânea (adaptado)."
    },
    prompt: "A partir da análise dos operadores linguísticos empregados no enunciado, identifica-se como informação pressuposta que:",
    options: [
      { id: "a", text: "os pacientes citados já haviam sido submetidos a terapias tradicionais que se mostraram ineficazes no passado.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o novo protocolo imunoterápico cura definitivamente 100% de todos os tipos de câncer conhecidos.", isCorrect: false, distractorRationale: "Extrapolação abusiva; o texto fala em remissão prolongada para um grupo específico." },
      { id: "c", text: "nenhum paciente com câncer recebia qualquer assistência médica antes da descoberta do protocolo.", isCorrect: false, distractorRationale: "O texto menciona que tratamentos convencionais existiam e eram aplicados." },
      { id: "d", text: "as quimioterapias convencionais foram permanentemente proibidas pela agência reguladora de saúde.", isCorrect: false, distractorRationale: "O texto não afirma nem sugere a proibição das terapias tradicionais." },
      { id: "e", text: "a imunoterapia de precisão apresenta custos financeiros inacessíveis aos sistemas públicos de saúde.", isCorrect: false, distractorRationale: "Não há menção orçamentária ou econômica no trecho analisado." }
    ],
    detailedExplanation: {
      summary: "O operador inclusivo 'até mesmo' e a locução 'voltaram a apresentar' trazem o pressuposto de histórico prévio de falha terapêutica.",
      stepByStep: [
        "A expressão 'pacientes que não respondiam aos tratamentos convencionais' pressupõe que tais pacientes tentaram essas terapias.",
        "O verbo aspectual 'voltaram a apresentar' pressupõe que anteriormente havia ocorrido uma interrupção na resposta clínica positiva.",
        "Pressupostos são dados indubitáveis que ficam marcados gramaticalmente no texto, diferentemente de meras inferências vagas."
      ],
      coreConcept: "Marcadores Linguísticos de Pressuposição",
      trapWarning: "Cuidado com extrapolações generalistas ('cura 100%'): a interpretação no ENEM exige fidelidade estrita aos limites semânticos do enunciado."
    },
    commonTraps: ["extrapolação textual indevida", "ignorar operadores aspectuais e de inclusão"],
    tags: ["pressupostos", "subentendidos", "operadores discursivos", "semantica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-008",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Interpretação de Texto",
    subtopic: "Polissemia e Duplo Sentido",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma campanha institucional de combate ao descarte irregular de pilhas e baterias, um cartaz apresenta a imagem de pilhas jogadas em um leito de rio assoreado com o seguinte slogan:\n'Cuidado com a sua carga: a natureza não tem como recarregar.'",
      source: "Campanha Ambiental de Conscientização Sanitária."
    },
    prompt: "O recurso expressivo determinante para a eficácia persuasiva da mensagem publicitária baseia-se na:",
    options: [
      { id: "a", text: "polissemia dos termos 'carga' e 'recarregar', articulando a eletricidade física dos objetos à responsabilidade moral e ecológica humana.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "utilização exclusiva de termos técnicos da física quântica inacessíveis ao público leigo em geral.", isCorrect: false, distractorRationale: "O vocabulário é comum e direto, sem jargões herméticos de física quântica." },
      { id: "c", text: "construção de uma narrativa ficcional extensa em prosa romântica clássica para comover o leitor.", isCorrect: false, distractorRationale: "Trata-se de um slogan publicitário sintético, e não de um romance literário extenso." },
      { id: "d", text: "substituição da norma culta da língua por gírias regionais restritas a uma única faixa etária.", isCorrect: false, distractorRationale: "O texto segue o padrão formal da língua portuguesa aplicável a campanhas institucionais amplas." },
      { id: "e", text: "omissão intencional do sujeito da oração para dificultar a compreensão do propósito ecológico da peça.", isCorrect: false, distractorRationale: "A peça tem propósito claro e objetivo pedagógico imediato." }
    ],
    detailedExplanation: {
      summary: "A polissemia explora múltiplos sentidos das palavras para criar camadas reflexivas entre o objeto (pilha) e o meio ambiente.",
      stepByStep: [
        "'Carga' refere-se tanto à energia elétrica da bateria quanto ao peso da responsabilidade ética do consumidor.",
        "'Recarregar' refere-se ao reabastecimento de energia e à capacidade de resiliência e regeneração dos ecossistemas biológicos.",
        "O jogo polissêmico produz economia de palavras e alto impacto reflexivo, estratégia típica do gênero anúncio publicitário."
      ],
      coreConcept: "Polissemia e Estratégia Argumentativa na Publicidade",
      trapWarning: "Polissemia não é ambiguidade viciosa: na publicidade, o duplo sentido é intencional e amplia a força da argumentação."
    },
    commonTraps: ["confundir polissemia expressiva com ambiguidade defeituosa", "não identificar os dois sentidos simultâneos"],
    tags: ["polissemia", "publicidade", "duplo sentido", "meio ambiente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-009",
    area: "linguagens",
    competence: 6,
    skill: 19,
    topic: "Interpretação de Texto",
    subtopic: "Ironia e Quebra de Expectativa",
    difficulty: 4,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Texto de crônica de humor contemporâneo:\n'Vivemos em um tempo maravilhoso. Hoje posso conversar instantaneamente com alguém situado no outro lado do hemisfério terrestre sobre o teorema de Fermat enquanto ignoro categoricamente a pessoa sentada à minha frente na mesa do café há quarenta minutos.'",
      source: "Antologia de Crônicas da Era Digital (adaptado)."
    },
    prompt: "O efeito de humor e a crítica social presentes no trecho da crônica são construídos prioritariamente por meio de:",
    options: [
      { id: "a", text: "uma ironia provocada pelo contraste entre o elogio aparente à hiperconexão tecnológica e a denúncia do distanciamento nas relações presenciais.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "uma descrição científica neutra e objetiva dos protocolos digitais de telecomunicações móveis.", isCorrect: false, distractorRationale: "O texto é subjetivo, reflexivo e irônico, longe de um artigo técnico de telecomunicações." },
      { id: "c", text: "uma exaltação entusiástica e acrítica dos benefícios causados pelas telas nos momentos de refeição compartilhada.", isCorrect: false, distractorRationale: "A crônica critica o isolamento social causado pelo uso excessivo das telas." },
      { id: "d", text: "uma condenação enfática ao estudo de teoremas matemáticos em ambientes sociais coletivos.", isCorrect: false, distractorRationale: "O teorema de Fermat é mero recurso retórico hiperbólico para ilustrar a sofisticação da conexão remota." },
      { id: "e", text: "um pedido formal de auxílio financeiro para aquisição de novos aparelhos celulares inteligentes.", isCorrect: false, distractorRationale: "Sem qualquer relação com a função textual da crônica." }
    ],
    detailedExplanation: {
      summary: "A crônica utiliza a ironia da quebra de expectativa para denunciar a solidão hiperconectada da era digital.",
      stepByStep: [
        "O autor inicia qualificando nossa era como 'tempo maravilhoso' (afirmação que gera expectativa de celebração).",
        "Em seguida, contrasta a capacidade de interagir com as antípodas com a incapacidade de manter diálogo com quem está ao lado.",
        "Esse choque de realidades desmascara a contradição da hiperconectividade virtual diante da desconexão interpessoal concreta."
      ],
      coreConcept: "A Ironia como Instrumento de Crítica Social na Crônica",
      trapWarning: "Na ironia, o enunciador não quer dizer literalmente o que enuncia ('tempo maravilhoso'); o sentido real exige interpretação do contraste discursivo."
    },
    commonTraps: ["leitura literal da ironia", "ignorar a quebra de expectativa provocada pelo contraste"],
    tags: ["ironia", "cronica", "tecnologia", "quebra de expectativa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-010",
    area: "linguagens",
    competence: 6,
    skill: 18,
    topic: "Interpretação de Texto",
    subtopic: "Pontuação Expressiva e Recursos Gráficos",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em uma resenha crítica literária, o autor escreve sobre um romance recém-lançado:\n'O livro pretende retratar a complexidade das angústias juvenis com uma linguagem 'genuína' e 'revolucionária' — mas entrega apenas um punhado de clichês embalados para consumo rápido nas redes sociais.'",
      source: "Suplemento Literário Dominical (adaptado)."
    },
    prompt: "No fragmento apresentado, o emprego das aspas nas palavras 'genuína' e 'revolucionária' cumpre a função estilística e argumentativa de:",
    options: [
      { id: "a", text: "assinalar distanciamento irônico do resenhista em relação aos adjetivos atribuídos à obra pelo marketing editorial.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "indicar que os termos foram redigidos em um idioma estrangeiro arcaico sem tradução para o português.", isCorrect: false, distractorRationale: "Ambos os termos são vocábulos vernáculos perfeitamente integrados ao léxico da língua portuguesa." },
      { id: "c", text: "expressar adesão irrestrita e elogio fervoroso do crítico à genialidade estética do romance analisado.", isCorrect: false, distractorRationale: "O contexto 'mas entrega apenas um punhado de clichês' comprova o teor abertamente negativo e cético da crítica." },
      { id: "d", text: "corrigir um desvio gramatical ortográfico previamente cometido na primeira impressão da obra.", isCorrect: false, distractorRationale: "Aspas não desempenham função ortográfica corretiva nesse gênero textual." },
      { id: "e", text: "delimitar uma citação bíblica fundamental para a tese espiritual desenvolvida na resenha.", isCorrect: false, distractorRationale: "As palavras não constituem citações de passagens bíblicas sagradas." }
    ],
    detailedExplanation: {
      summary: "As aspas de distanciamento modalizam o enunciado, indicando que as palavras pertencem a outrem e que o autor discorda de sua aplicação.",
      stepByStep: [
        "Além de indicar transcrição textual direta, as aspas funcionam discursivamente para introduzir ironia ou distanciamento crítico.",
        "O resenhista coloca 'genuína' e 'revolucionária' entre aspas para sinalizar que essas são as promessas do livro/editora, com as quais ele não compactua.",
        "A oração adversativa subsequente ('mas entrega apenas um punhado de clichês') ratifica o valor pejorativo e irônico conferido pelo recurso gráfico."
      ],
      coreConcept: "Aspas de Distanciamento e Modalização Enunciativa",
      trapWarning: "Aspas não servem apenas para citações; no ENEM, a modalização irônica por aspas é uma das questões mais recorrentes de Linguagens."
    },
    commonTraps: ["considerar aspas apenas como citação literal neutra", "desconsiderar a pista dada pela conjunção adversativa 'mas'"],
    tags: ["pontuacao", "aspas", "modalizacao", "ironia", "resenha"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-011",
    area: "linguagens",
    competence: 6,
    skill: 18,
    topic: "Interpretação de Texto",
    subtopic: "Implícitos do Texto: Pressupostos e Subentendidos",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o seguinte título de uma reportagem econômica sobre os índices de inflação divulgados pelo Banco Central:\n\n'O país finalmente voltou a registrar desaceleração sustentada nos preços dos alimentos da cesta básica.'",
      source: "Caderno de Economia e Conjuntura"
    },
    prompt: "No plano discursivo, a presença dos marcadores linguísticos 'finalmente' e 'voltou a registrar' introduz no enunciado a pressuposição de que:",
    options: [
      { id: "a", text: "os preços dos alimentos jamais haviam experimentado períodos de estabilidade ou queda na história econômica recente do país.", isCorrect: false, distractorRationale: "O verbo 'voltou a' indica que a desaceleração já ocorreu no passado e agora se repete, contradizendo a ideia de que 'jamais' ocorrera." },
      { id: "b", text: "a desaceleração era um evento aguardado há considerável tempo após um período prévio de alta ininterrupta de preços.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "o Banco Central cessará em definitivo qualquer intervenção monetária sobre as taxas de juros futuros.", isCorrect: false, distractorRationale: "Extrapolação sem qualquer respaldo semântico nos marcadores linguísticos analisados." },
      { id: "d", text: "a população de baixa renda foi a única beneficiária dos novos índices apresentados no relatório.", isCorrect: false, distractorRationale: "O enunciado não delimita classes sociais específicas; trata do índice macroeconômico agregado." },
      { id: "e", text: "o processo inflacionário foi integralmente extinto em todos os setores da economia nacional.", isCorrect: false, distractorRationale: "O texto fala estritamente de 'desaceleração' (ritmo de crescimento menor) e não de extinção da inflação ou deflação geral." }
    ],
    detailedExplanation: {
      summary: "Pressupostos são informações implícitas ancoradas em marcas linguísticas explícitas na superfície textual (como verbos iterativos e advérbios modais).",
      stepByStep: [
        "Passo 1: Analisar o advérbio 'finalmente': denota que a ocorrência era intensamente esperada ou demandou uma espera prolongada e desgastante.",
        "Passo 2: Analisar a locução aspectual iterativa 'voltou a': indica que o fenômeno já existia em momento pretérito, foi interrompido e agora retornou.",
        "Passo 3: Conectar os dois marcadores semânticos: a desaceleração já aconteceu no passado, passou por um intervalo de aumento de preços e seu retorno era urgentemente aguardado.",
        "Passo 4: Portanto, a opção correta expressa precisamente essa pressuposição discursiva."
      ],
      coreConcept: "Diferenciação entre pressuposto (inscrito linguisticamente no léxico) e subentendido (dedução pragmática do contexto).",
      trapWarning: "Ignorar marcas linguísticas gramaticais e buscar interpretações baseadas apenas na opinião geral sobre a inflação."
    },
    commonTraps: ["confundir_desaceleracao_com_queda_absoluta_ou_extincao", "ignorar_o_aspecto_verbal_iterativo"],
    tags: ["pressuposto", "implicitos", "operadores_discursivos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-012",
    area: "linguagens",
    competence: 5,
    skill: 16,
    topic: "Interpretação de Texto",
    subtopic: "Intertextualidade Crítica e Paródia",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Texto I (Gonçalves Dias, Canção do Exílio, 1843):\n'Minha terra tem palmeiras,\nOnde canta o Sabiá;\nAs aves, que aqui gorjeiam,\nNão gorjeiam como lá.'\n\nTexto II (Carlos Drummond de Andrade, Nova Canção do Exílio, 1945):\n'Um sabiá\nna palmeira, longe.\nEstas aves cantam\num outro canto.\nO céu cintila\nsobre flores úmidas.\nVoam nuvens\ncomo se fossem asas.\nOnde estás, terra amiga?'",
      source: "Antologia Poética do Modernismo"
    },
    prompt: "Ao dialogar intertextualmente com o poema romântico de Gonçalves Dias, o texto de Drummond constrói um efeito de sentido que se caracteriza por:",
    options: [
      { id: "a", text: "reiterar o ufanismo ingênuo da primeira geração romântica através da exaltação das riquezas da flora nativa.", isCorrect: false, distractorRationale: "O poema de Drummond é marcado por tom melancólico, reticente e cético, oposto ao ufanismo nacionalista romântico." },
      { id: "b", text: "reinterpretar a imagem da pátria sob uma perspectiva de desilusão e distanciamento crítico típico do Modernismo.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "plagiar a métrica redondilha maior de Gonçalves Dias sem apresentar inovações estilísticas relevantes.", isCorrect: false, distractorRationale: "A intertextualidade poética modernista é uma apropriação consciente e estética, jamais plágio; além disso, emprega versos livres e concisão." },
      { id: "d", text: "ridicularizar a fauna brasileira ao insinuar a inexpressividade do canto das aves nativas.", isCorrect: false, distractorRationale: "O poema não busca zombar da natureza, mas expressar a solidão e o desencanto com a própria condição humana e política." },
      { id: "e", text: "defender o retorno imediato da monarquia brasileira como solução para a crise de representação social.", isCorrect: false, distractorRationale: "Extrapolação descabida sem relação com o lirismo drummondiano." }
    ],
    detailedExplanation: {
      summary: "A intertextualidade entre Drummond e Gonçalves Dias desconstrói o nacionalismo idílico do Romantismo por meio da sobriedade e do ceticismo da poesia de 30.",
      stepByStep: [
        "Passo 1: Reconhecer o Texto I como o marco fundador do Romantismo ufanista brasileiro, onde a pátria distante é idealizada como um paraíso sem defeitos.",
        "Passo 2: Analisar a releitura de Drummond no Texto II: o sabiá está 'longe', as aves 'cantam um outro canto' e a pergunta final ('Onde estás, terra amiga?') revela perda de referências e sentimento de inadequação.",
        "Passo 3: Identificar a função intertextual: não é repetição passiva (paráfrase ingênua), mas uma reavaliação crítica e nostálgica do sentimento de pertencimento pátrio sob as tensões históricas do século XX.",
        "Passo 4: Concluir que se trata de uma perspectiva de distanciamento e desilusão perante a idealização original."
      ],
      coreConcept: "Intertextualidade paródica e crítica no Modernismo brasileiro frente aos cânones do Romantismo.",
      trapWarning: "Confundir intertextualidade com cópia ou plágio; no ENEM, o diálogo entre textos é sempre analisado como recurso de renovação e tensão estética."
    },
    commonTraps: ["confundir_intertextualidade_com_plagio", "ignorar_a_ruptura_tonal_do_modernismo"],
    tags: ["intertextualidade", "drummond", "romantismo_vs_modernismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-013",
    area: "linguagens",
    competence: 5,
    skill: 15,
    topic: "Interpretação de Texto",
    subtopic: "Polifonia e Discurso Indireto Livre",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o fragmento extraído do romance Vidas Secas, de Graciliano Ramos:\n\n'Fabiano sentia-se satisfeito com a sua profissão de vaqueiro. Conhecia as reses como gente, sabia onde a água brotava nas estiagens. Olhou as mãos calejadas, os pés cascudos. Era um bicho, sim senhor. Mas que bicho valente! Tinha direito de viver naquelas brenhas, resistindo como raiz de pau de ferro.'",
      source: "Graciliano Ramos, Vidas Secas (1938)"
    },
    prompt: "No excerto lido, o emprego do recurso estilístico do discurso indireto livre tem como efeito de sentido:",
    options: [
      { id: "a", text: "isolar completamente a voz do narrador culto, impedindo que o leitor tenha acesso à psicologia íntima do sertanejo.", isCorrect: false, distractorRationale: "O discurso indireto livre faz exatamente o inverso: funde a voz do narrador ao íntimo do personagem." },
      { id: "b", text: "reproduzir as falas dos personagens exclusivamente entre aspas e travessões em linguagem coloquial documental.", isCorrect: false, distractorRationale: "Essa descrição corresponde ao discurso direto tradicional, e não ao indireto livre, que dispensa pontuações de diálogo." },
      { id: "c", text: "fundir a voz do narrador em terceira pessoa aos pensamentos e sentimentos do personagem, criando uma intimidade psicológica dramática.", isCorrect: true, distractorRationale: null },
      { id: "d", text: "afirmar que Fabiano desprezava seu trabalho e planejava abandonar o sertão imediatamente para viver na capital.", isCorrect: false, distractorRationale: "O texto afirma explicitamente que ele 'sentia-se satisfeito' e 'tinha direito de viver naquelas brenhas'." },
      { id: "e", text: "denunciar a ineficiência técnica do vaqueiro na condução do gado durante o período das secas.", isCorrect: false, distractorRationale: "O texto valoriza sua perícia ('Conhecia as reses como gente, sabia onde a água brotava')." }
    ],
    detailedExplanation: {
      summary: "O discurso indireto livre mescla a narração em terceira pessoa com o fluxo de consciência e as exclamações próprias do personagem ('Era um bicho, sim senhor. Mas que bicho valente!').",
      stepByStep: [
        "Passo 1: Notar a ausência de verbos de elocução (disse, pensou) e de pontuação de diálogo (dois-pontos, travessões).",
        "Passo 2: Observar as expressões tipicamente orais do personagem inseridas na prosa do narrador: 'sim senhor', 'Mas que bicho valente!'.",
        "Passo 3: Identificar que o narrador onisciente 'empresta' sua voz para verbalizar as emoções e a autoimagem de Fabiano.",
        "Passo 4: Esse procedimento caracteriza o discurso indireto livre, conferindo profundidade psicológica e empatia ao drama da vulnerabilidade humana."
      ],
      coreConcept: "Tipos de discurso narrativo: direto, indireto e indireto livre como recurso de polifonia.",
      trapWarning: "Achar que quando não há aspas nem travessões o texto é apenas a opinião neutra do narrador distante."
    },
    commonTraps: ["confundir_discurso_indireto_livre_com_direto", "achar_que_narrador_esta_apenas_descrevendo_de_fora"],
    tags: ["discurso_indireto_livre", "vidas_secas", "graciliano_ramos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-014",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Interpretação de Texto",
    subtopic: "Operadores Argumentativos e Conexão de Sentido",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a estrutura sintática de um período formulado em um editorial sobre sustentabilidade e transição energética:\n\n'O país possui a matriz elétrica mais limpa do hemisfério ocidental; não obstante, continua subsidiando a queima de combustíveis fósseis em termelétricas ineficientes durante períodos de estiagem.'",
      source: "Editorial de Meio Ambiente e Energia"
    },
    prompt: "A locução conjuntiva 'não obstante' estabelece entre as duas orações do período uma relação de sentido de:",
    options: [
      { id: "a", text: "conclusão, confirmando que os subsídios aos combustíveis fósseis são decorrência lógica e necessária de uma matriz hidrelétrica limpa.", isCorrect: false, distractorRationale: "Os subsídios contradizem a política limpa; não são uma decorrência natural esperada." },
      { id: "b", text: "concessão/adversidade, ressaltando o contraste entre a vantagem ambiental existente e uma prática governamental incoerente com esse potencial.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "temporalidade, indicando que a transição limpa ocorrerá apenas após o término definitivo de todas as secas.", isCorrect: false, distractorRationale: "A locução não expressa passagem de tempo ou sucessão cronológica." },
      { id: "d", text: "causa, justificando que a matriz é limpa justamente em função da ampliação das usinas termelétricas a carvão.", isCorrect: false, distractorRationale: "Inversão lógica total: queimar fóssil não é causa de matriz limpa." },
      { id: "e", text: "conformidade, demonstrando que o plano energético segue estritamente os acordos internacionais do clima.", isCorrect: false, distractorRationale: "A expressão sublinha uma oposição crítica e não uma conformidade de diretrizes." }
    ],
    detailedExplanation: {
      summary: "A locução 'não obstante' possui valor adversativo ou concessivo, introduzindo uma ideia que se opõe ou quebra a expectativa gerada pela oração antecedente.",
      stepByStep: [
        "Passo 1: Analisar a primeira asserção: 'O país possui a matriz elétrica mais limpa' (aspecto altamente positivo e sustentável).",
        "Passo 2: Observar a expectativa lógica criada: espera-se que o país priorize investimentos exclusivamente renováveis.",
        "Passo 3: Analisar a segunda asserção: 'continua subsidiando a queima de combustíveis fósseis' (ação contraditória com a diretriz ecológica).",
        "Passo 4: A locução 'não obstante' equivale a 'apesar disso', 'contudo', 'no entanto', marcando a quebra de expectativa e contraste argumentativo."
      ],
      coreConcept: "Coesão sequencial e operadores argumentativos de oposição e concessão (não obstante, contudo, conquanto).",
      trapWarning: "Confundir 'não obstante' com locução conclusiva ('portanto') ou conformativa ('consoante')."
    },
    commonTraps: ["desconhecer_o_sentido_da_locucao_nao_obstante", "confundir_adversidade_com_conclusao"],
    tags: ["operadores_argumentativos", "coesao_textual", "adversidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-015",
    area: "linguagens",
    competence: 6,
    skill: 19,
    topic: "Interpretação de Texto",
    subtopic: "Linguagem Não Verbal e Multimodalidade",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um cartaz de utilidade pública contra o sedentarismo e o uso excessivo de telas por crianças, visualiza-se a ilustração de um menino sentado em uma poltrona, cujas pernas fundem-se gradualmente à madeira do móvel, transformando-se em raízes grossas e estáticas que penetram no assoalho. Ao fundo, uma janela aberta exibe um parque iluminado pelo sol com pipas e bicicletas. A legenda curta na parte inferior afirma: 'A infância não foi feita para criar raízes. Desconecte.'",
      source: "Campanha de Saúde da Criança e do Adolescente"
    },
    prompt: "A metáfora visual das pernas da criança transformadas em raízes no chão cumpre a função persuasiva de:",
    options: [
      { id: "a", text: "enfatizar o profundo contato e a integração harmônica da criança com a natureza orgânica dentro de casa.", isCorrect: false, distractorRationale: "A fusão à poltrona denota paralisia e artificialismo, não integração ecológica com a natureza viva lá fora." },
      { id: "b", text: "alertar sobre a imobilidade física prejudicial induzida pela passividade diante das telas digitais em contraste com o dinamismo do mundo real.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "estimular o aprendizado precoce de botânica e plantio de hortas domésticas em ambientes urbanos.", isCorrect: false, distractorRationale: "Interpretação literal ingênua do símbolo botânico da raiz." },
      { id: "d", text: "comprovar cientificamente que o uso de computadores retarda o crescimento esquelético de membros inferiores.", isCorrect: false, distractorRationale: "Trata-se de uma metáfora artística de alerta e não de um diagnóstico biológico de deformação óssea." },
      { id: "e", text: "recomendar que as crianças realizem brincadeiras preferencialmente sentadas para evitar fraturas.", isCorrect: false, distractorRationale: "O cartaz prega exatamente o oposto: incentiva a movimentação ativa ao ar livre." }
    ],
    detailedExplanation: {
      summary: "Em textos multimodais, a imagem não apenas ilustra o texto verbal, mas constrói metáforas conceituais que materializam a crítica ao comportamento passivo.",
      stepByStep: [
        "Passo 1: Analisar os elementos icônicos: pernas virando raízes conectadas à poltrona = imobilidade forçada, aprisionamento e fixidez.",
        "Passo 2: Analisar o plano de fundo: parque ensolarado, pipas e bicicletas = liberdade, movimento corporal, socialização ativa.",
        "Passo 3: Integrar a legenda verbal: 'A infância não foi feita para criar raízes. Desconecte.'",
        "Passo 4: A conjunção entre a raiz física e o imperativo 'desconecte' sinaliza que o tempo excessivo nas telas imobiliza as crianças, privando-as das experiências vitais do desenvolvimento motor."
      ],
      coreConcept: "Leitura multimodal, metáfora visual e interpretação de campanhas sociais no ENEM.",
      trapWarning: "Fazer uma leitura literal do elemento imagético (achar que o cartaz trata de botânica ou doenças biológicas que transformam pernas em raízes)."
    },
    commonTraps: ["leitura_literal_de_metafora_visual", "desconsiderar_o_contraste_com_o_fundo"],
    tags: ["multimodalidade", "metafora_visual", "campanha_publicitaria"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-016",
    area: "linguagens",
    competence: 5,
    skill: 17,
    topic: "Interpretação de Texto",
    subtopic: "Crônica Urbana e Ironia Social",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o seguinte trecho de uma crônica contemporânea sobre a vida nos grandes centros urbanos:\n\n'Entramos no elevador do condomínio comercial. Seis pessoas. Ninguém se conhece, ninguém se olha. Todos sacam instantaneamente seus aparelhos celulares e passam a dedilhar telas iluminadas com ar de urgência corporativa. É uma solenidade comovente: a tecnologia nos salvou do terrível perigo de ter que trocar um 'bom dia' com outro ser humano.'",
      source: "Crônica de Costumes Contemporâneos"
    },
    prompt: "O efeito de humor e de crítica do texto constrói-se fundamentalmente por meio do recurso da ironia, que se evidencia quando o cronista:",
    options: [
      { id: "a", text: "afirma com seriedade científica que os celulares causam dependência neurológica em ambientes fechados.", isCorrect: false, distractorRationale: "O texto não se ancora em jargão neurológico; trata de uma observação de convivência social e humorística." },
      { id: "b", text: "qualifica como 'terrível perigo' uma atitude simples de cortesia social (dar bom dia), invertendo o valor real da situação.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "elogia a eficiência e a alta produtividade dos executivos que não perdem tempo nos elevadores.", isCorrect: false, distractorRationale: "O cronista zomba do 'ar de urgência', mostrando que muitas vezes as pessoas fingem ocupação para evitar contato." },
      { id: "d", text: "reivindica a proibição imediata de aparelhos celulares em áreas comuns de edifícios.", isCorrect: false, distractorRationale: "A crônica não tem finalidade regulatória ou legislativa." },
      { id: "e", text: "demonstra revolta agressiva contra a arquitetura dos edifícios comerciais de alta densidade.", isCorrect: false, distractorRationale: "O tom do cronista é espirituoso, irônico e reflexivo, e não de revolta furiosa contra a arquitetura." }
    ],
    detailedExplanation: {
      summary: "A ironia consiste em afirmar o contrário do que se pensa ou conferir peso desmedido a algo banal para evidenciar o absurdo do comportamento humano.",
      stepByStep: [
        "Passo 1: Identificar a contradição central: trocar um cumprimento amigável ('bom dia') é uma convenção social elementar e inofensiva.",
        "Passo 2: Analisar a formulação do narrador: 'nos salvou do terrível perigo de ter que trocar um bom dia'.",
        "Passo 3: O autor classifica o bom dia como uma ameaça terrível para ressaltar como a fobia social e o isolamento digital tornaram o contato humano algo evitado a todo custo.",
        "Passo 4: Essa inversão semântica e hiperbólica caracteriza a ironia refinada da crônica de costumes."
      ],
      coreConcept: "A ironia como instrumento de crítica comportamental e desnaturalização do cotidiano.",
      trapWarning: "Interpretar 'terrível perigo' ao pé da letra, acreditando que o autor realmente considera dar bom dia algo arriscado."
    },
    commonTraps: ["leitura_literal_da_ironia", "ignorar_o_tom_critico_da_cronica"],
    tags: ["ironia", "cronica", "critica_social", "tecnologia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-017",
    area: "linguagens",
    competence: 9,
    skill: 28,
    topic: "Interpretação de Texto",
    subtopic: "Cultura Digital, Hipertexto e Leitura Não Linear",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Diferentemente do texto impresso clássico, estruturado sobre um fluxo contínuo e sequencial de linhas e páginas, o hipertexto em plataformas digitais organiza-se em nós conectivos e links de navegação dinâmica. O leitor não é mais um receptor passivo conduzido pelo fio narrativo unilinear do autor; ele toma decisões a cada clique, bifurca o percurso, aprofunda verbetes enciclopédicos ou salta para novos conteúdos audiovisuais, atuando como coautor de sua própria trajetória de leitura.",
      source: "Pierre Lévy, Cibercultura / Teoria da Hipertextualidade"
    },
    prompt: "De acordo com o texto analítico, a principal transformação cognitiva e estrutural introduzida pelo hipertexto digital na relação entre o leitor e a informação consiste na:",
    options: [
      { id: "a", text: "manutenção obrigatória da ordem cronológica concebida pelo escritor original para evitar equívocos de interpretação.", isCorrect: false, distractorRationale: "O hipertexto é exatamente caracterizado pela superação e quebra da ordem unilinear prescrita." },
      { id: "b", text: "autonomia do leitor para estruturar itinerários não lineares de aprendizagem, alternando múltiplos percursos e conexões semânticas.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "impossibilidade definitiva de construir conhecimento consistente em ambientes que disponham de links virtuais.", isCorrect: false, distractorRationale: "O texto não invalida a aprendizagem virtual; apresenta seu potencial de dinamismo e coautoria." },
      { id: "d", text: "substituição total da linguagem verbal alfabética por ícones visuais exclusivos e sonoplásticos.", isCorrect: false, distractorRationale: "O hipertexto continua fundamentado primariamente em textos e verbetes, agora interconectados por links." },
      { id: "e", text: "redução drástica da capacidade de intervenção do usuário no processo de seleção das fontes consultadas.", isCorrect: false, distractorRationale: "A capacidade de seleção é ampliada ao máximo, já que o leitor escolhe ativamente cada nó da navegação." }
    ],
    detailedExplanation: {
      summary: "O hipertexto redefine a recepção textual ao substituir a linearidade estrita pela navegação em rede ('hiperlinks'), concedendo protagonismo e percursos personalizados ao leitor.",
      stepByStep: [
        "Passo 1: Contrastar o modelo analógico (impresso: linear, sequencial, página por página) com o modelo hipertextual (digital: modular, em nós de rede, links de acesso imediato).",
        "Passo 2: Identificar a posição do usuário no hipertexto: ele decide os caminhos ('toma decisões a cada clique, bifurca o percurso'), configurando uma navegação multilinear e descentralizada.",
        "Passo 3: Essa autonomia transforma o leitor em agente ativo e formulador de seu próprio roteiro de conhecimento.",
        "Passo 4: A opção 'b' resume com precisão a essência da hipertextualidade defendida na teoria da comunicação contemporânea."
      ],
      coreConcept: "Hipertexto, letramento digital e autonomia de leitura multilinear.",
      trapWarning: "Ver o hipertexto apenas como 'distração' ou achar que todo texto digital abole as palavras escritas."
    },
    commonTraps: ["confundir_hipertexto_com_ausencia_de_texto_escrito", "ignorar_o_conceito_de_nao_linearidade"],
    tags: ["hipertexto", "letramento_digital", "leitura_nao_linear"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-018",
    area: "linguagens",
    competence: 6,
    skill: 18,
    topic: "Interpretação de Texto",
    subtopic: "Metáforas Conceituais na Divulgação Científica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um artigo de divulgação científica sobre imunologia médica, o pesquisador escreve:\n\n'Quando o organismo é desafiado por um patógeno agressivo, nosso sistema imune não envia apenas sentinelas isoladas: ele desencadeia uma verdadeira 'tempestade de citocinas'. Essa enxurrada química sinalizadora age como uma sirene de incêndio em escala celular, convocando um exército de macrófagos e neutrófilos para conter a brecha na muralha dos tecidos antes que o invasor colonize os órgãos vitais.'",
      source: "Revista Ciência & Sociedade"
    },
    prompt: "No texto de divulgação científica, o emprego reiterado de vocábulos do campo semântico militar e bélico ('sentinelas', 'exército', 'muralha', 'invasor') cumpre a função didática de:",
    options: [
      { id: "a", text: "provar que o corpo humano é geneticamente programado para a hostilidade bélica e para a violência entre espécies.", isCorrect: false, distractorRationale: "Interpretação distorcida que confunde a metáfora explicativa com uma apologia ou natureza bélica humana." },
      { id: "b", text: "tornar compreensível para o público leigo um complexo mecanismo biológico microscópico por meio de analogias com conceitos cotidianos de defesa e ataque.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "substituir integralmente os termos médicos verdadeiros por gírias informais desprovidas de valor pedagógico.", isCorrect: false, distractorRationale: "O texto mantém os termos técnicos corretos ('citocinas', 'macrófagos', 'neutrófilos') integrados às analogias estruturantes." },
      { id: "d", text: "exigir dos leitores conhecimentos aprofundados sobre táticas de infantaria naval militar do século XIX.", isCorrect: false, distractorRationale: "O artigo é de divulgação para o público leigo; a analogia serve para facilitar, não para exigir histórico bélico." },
      { id: "e", text: "criticar o gasto excessivo do Ministério da Defesa em pesquisas voltadas à produção de armas biológicas.", isCorrect: false, distractorRationale: "O tema do texto é puramente fisiológico/imunológico e não discute orçamentos militares governamentais." }
    ],
    detailedExplanation: {
      summary: "A metáfora conceitual na divulgação científica traduz processos biológicos abstratos ou invisíveis a olho nu em esquemas cognitivos familiares e intuitivos (Defesa Imune = Guerra/Defesa de Fortaleza).",
      stepByStep: [
        "Passo 1: Reconhecer o gênero textual: divulgação científica destinada à mediação entre o saber acadêmico especializado e o leitor comum.",
        "Passo 2: Identificar a metáfora conceitual clássica: O SISTEMA IMUNE É UMA FORTALEZA EM GUERRA (patógeno = invasor; pele/mucosa = muralha; leucócitos = exército/sentinelas; inflamação = sirene).",
        "Passo 3: Compreender o papel pedagógico: a metáfora não distorce o conteúdo biológico, mas ancora termos densos (citocinas, macrófagos) em uma narrativa compreensível e memorável.",
        "Passo 4: A alternativa 'b' explicita com rigor essa transposição didática."
      ],
      coreConcept: "Metáfora conceitual (Lakoff & Johnson) e recursos didáticos em textos de divulgação científica.",
      trapWarning: "Achar que metáforas desvalorizam o texto científico; no ENEM, o uso de analogias é visto como uma competência discursiva essencial para a democratização da ciência."
    },
    commonTraps: ["leitura_literal_da_guerra", "desqualificar_a_funcao_pedagogica_da_analogia"],
    tags: ["divulgacao_cientifica", "metafora_conceitual", "recursos_didaticos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-019",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Interpretação de Texto",
    subtopic: "Variação Linguística e Preconceito Linguístico",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a reflexão de Marcos Bagno em Preconceito Linguístico:\n\n'A língua é como um rio: ela não para, muda de curso, ganha novos afluentes e molda sua paisagem. Pretender que todos falem e escrevam o tempo todo de acordo com a norma-padrão dos gramáticos do século XIX é como tentar conter as águas de um rio caudaloso com as mãos. Não existe falar 'certo' ou 'errado' sob o ponto de vista da ciência linguística: existem variedades adequadas ou inadequadas aos diferentes contextos sociais e comunicativos.'",
      source: "Marcos Bagno, Preconceito Linguístico: o que é, como se faz (adaptado)"
    },
    prompt: "Com base na perspectiva sociolinguística expressa pelo autor, o princípio fundamental que orienta o uso da linguagem em sociedade é o da:",
    options: [
      { id: "a", text: "imutabilidade estrutural do idioma, que deve ser preservado rigorosamente contra qualquer interferência de fala popular.", isCorrect: false, distractorRationale: "O texto compara a língua a um rio que 'não para e muda de curso', afirmando a constante mutabilidade do idioma." },
      { id: "b", text: "adequação comunicativa às exigências do contexto de interação, superando o julgamento preconceituoso de 'erro' absoluto na fala espontânea.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "supremacia da escrita literária clássica como modelo único a ser imposto em todas as conversas do cotidiano familiar.", isCorrect: false, distractorRationale: "O autor critica veementemente a imposição da norma arcaica sobre os usos cotidianos vivos da língua." },
      { id: "d", text: "eliminação compulsória do ensino da norma-padrão nas escolas públicas para nivelar os dialetos regionais.", isCorrect: false, distractorRationale: "A linguística não defende extinguir a norma-padrão, mas ensiná-la como uma ferramenta social a mais sem desvalorizar as demais variedades." },
      { id: "e", text: "condenação de neologismos gerados pela internet por corromperem a integridade etimológica das palavras.", isCorrect: false, distractorRationale: "A sociolinguística acolhe a inovação lexical como parte natural da evolução dinâmica da língua." }
    ],
    detailedExplanation: {
      summary: "A sociolinguística moderna substitui a dicotomia normativa 'certo vs errado' pelo paradigma funcional da 'adequação contextual'.",
      stepByStep: [
        "Passo 1: Compreender a crítica ao purismo: a língua viva é dinâmica, histórica e heterogênea.",
        "Passo 2: Reconhecer a distinção entre erro formal e adequação pragmática: o que se considera 'desvio' na norma culta escrita é, em muitos contextos orais populares, uma regra perfeitamente sistematizada de variação.",
        "Passo 3: Identificar a proposta pedagógica do autor: saber utilizar a norma culta quando a situação formal exigir (como numa redação do ENEM ou entrevista de emprego), mas respeitar as variedades regionais e informais nos ambientes compatíveis.",
        "Passo 4: Concluir que a alternativa 'b' sintetiza o conceito científico de adequação comunicativa."
      ],
      coreConcept: "Variação linguística, combate ao preconceito linguístico e adequação discursiva segundo a sociolinguística.",
      trapWarning: "Achar que combater o preconceito linguístico significa dizer que não se deve aprender a norma culta na escola. O domínio da norma é cidadania; o erro é estigmatizar quem não teve acesso a ela."
    },
    commonTraps: ["confundir_combate_ao_preconceito_com_abandono_da_norma_padrao"],
    tags: ["variacao_linguistica", "preconceito_linguistico", "sociolinguistica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-020",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Interpretação de Texto",
    subtopic: "Discurso Institucional e Carta Aberta",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o seguinte trecho de uma carta aberta assinada pela Sociedade Brasileira para o Progresso da Ciência (SBPC) endereçada às autoridades federais:\n\n'Diante dos sucessivos contingenciamentos orçamentários que asfixiam os programas de bolsas de pós-graduação e a manutenção de laboratórios estratégicos, os signatários deste documento vêm a público manifestar profunda consternação e alertar: desmantelar a ciência nacional não é uma economia de gastos; é hipotecar o futuro da soberania tecnológica e da saúde pública de nossa população.'",
      source: "Manifesto Público SBPC"
    },
    prompt: "Considerando as convenções e a intencionalidade discursiva do gênero textual 'carta aberta', o texto utiliza a primeira pessoa do plural ('vêm a público manifestar', 'nossa população') com o objetivo de:",
    options: [
      { id: "a", text: "ocultar a identidade dos pesquisadores para protegê-los de retaliações jurídicas e financeiras imediatas.", isCorrect: false, distractorRationale: "O texto é assinado pela entidade e seus membros ('signatários'), com autoria declarada abertamente." },
      { id: "b", text: "conferir legitimidade coletiva à denúncia e engajar a sociedade civil como coparticipante da urgência do apelo político.", isCorrect: true, distractorRationale: null },
      { id: "c", text: "confessar o desinteresse dos cientistas em buscar financiamento junto a empresas privadas da indústria farmacêutica.", isCorrect: false, distractorRationale: "O manifesto reivindica verbas públicas soberanas de pesquisa, sem relação com desinteresse corporativo." },
      { id: "d", text: "limitar a circulação do documento exclusivamente aos gabinetes fechados do Poder Legislativo.", isCorrect: false, distractorRationale: "O gênero 'carta aberta' é por definição publicado na imprensa e redes para ampla visibilidade popular." },
      { id: "e", text: "adotar um tom de conversa informal e descontraída próprio das cartas íntimas de correspondência familiar.", isCorrect: false, distractorRationale: "O registro é altamente formal, grave e institucional, condizente com um manifesto público oficial." }
    ],
    detailedExplanation: {
      summary: "A carta aberta é um gênero discursivo de protesto público em que a primeira pessoa do plural corporifica uma coletividade mobilizada para sensibilizar tanto o destinatário oficial quanto a opinião pública.",
      stepByStep: [
        "Passo 1: Reconhecer as características da Carta Aberta: destinatário nominal (autoridades), mas leitor real múltiplo (a sociedade civil em geral).",
        "Passo 2: Analisar a estratégia enunciativa da primeira pessoa do plural ('nós/vêm a público'): confere autoridade corporativa, peso moral e representatividade unificada de uma classe.",
        "Passo 3: Ao incluir 'nossa população', o texto convoca o cidadão comum a perceber que a perda científica impactará sua própria saúde e qualidade de vida.",
        "Passo 4: Portanto, o objetivo é construir engajamento coletivo e conferir máxima gravidade política à denúncia pública."
      ],
      coreConcept: "Gênero textual Carta Aberta, estratégias de enunciação coletiva e mobilização pública no ENEM.",
      trapWarning: "Confundir carta aberta com carta pessoal ou carta de reclamação individual restrita."
    },
    commonTraps: ["confundir_carta_aberta_com_carta_pessoal", "ignorar_a_intencionalidade_coletiva_do_genero"],
    tags: ["carta_aberta", "generos_textuais", "discurso_coletivo", "argumentacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "LIN-INT-021",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Interpretação Textual",
    subtopic: "Linguagem Multimodal, Charge e Ironia Visual",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição de uma charge contemporânea:\nEm um primeiro plano, uma imensa fila de pessoas acampa do lado de fora de uma loja iluminada para comprar o lançamento de um smartphone com bateria de maior duração. Em segundo plano, no chão ao lado da calçada, uma pilha de caixas de aparelhos eletrônicos comprados no ano anterior é jogada diretamente em uma caçamba de entulho. Um dos compradores na fila olha para a caçamba e comenta no celular com entusiasmo: 'Esse novo modelo é revolucionário, dura quase seis meses a mais sem travar!'.",
      source: "Cartunistas Contemporâneos e Crítica da Cultura do Consumo."
    },
    prompt: "O efeito de humor crítico e a ironia construídos pela charge decorrem do contraste entre:",
    options: [
      { id: "a", text: "o fascínio cego dos consumidores por pequenas inovações técnicas efêmeras e a rapidez com que descartam produtos em perfeito estado, evidenciando o fenômeno da obsolescência programada e o desperdício socioambiental.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a perfeição mecânica absoluta de todos os aparelhos eletrônicos modernos que nunca quebram ou sofrem desgaste.", isCorrect: false, distractorRationale: "A charge ironiza justamente o descarte precoce e a curta vida útil dos aparelhos." },
      { id: "c", text: "o baixo preço dos eletrônicos que faz com que todos os cidadãos comprem dezenas de aparelhos no mesmo dia.", isCorrect: false, distractorRationale: "O foco não é a acessibilidade financeira, mas a compulsão ao consumo induzida pelo marketing." },
      { id: "d", text: "a recusa obstinada da população em utilizar tecnologias digitais de comunicação.", isCorrect: false, distractorRationale: "Os personagens estão sofregamente acampados para adquirir o novo modelo, e não recusando-o." },
      { id: "e", text: "a eficiência total das cidades na reciclagem de 100% de todo o lixo eletrônico gerado.", isCorrect: false, distractorRationale: "A caçamba de entulho a céu aberto revela descarte inadequado e impacto ambiental negativo." }
    ],
    detailedExplanation: {
      summary: "A charge utiliza a linguagem multimodal (texto verbal e linguagem visual) para denunciar o consumismo desenfreado. O contraste entre a empolgação da fila e a caçamba cheia de aparelhos novos expõe o absurdo ecológico da obsolescência perceptiva.",
      stepByStep: [
        "1. Elemento verbal: A fala do personagem celebra que o novo aparelho 'dura seis meses a mais sem travar' como algo revolucionário.",
        "2. Elemento não verbal: A caçamba de entulho com modelos recém-comprados demonstra que a troca constante é artificialmente estimulada.",
        "3. Ironia: A discrepância entre a expectativa grandiosa do consumidor e a futilidade da mudança funcional dos aparelhos.",
        "4. Tema central: Obsolescência programada e sociedade de hiperconsumo, temas recorrentes na prova de Linguagens do ENEM."
      ],
      coreConcept: "Linguagem Multimodal, Charge e Ironia Crítica no ENEM",
      trapWarning: "No ENEM: A charge nunca existe apenas para 'fazer rir'; o riso é uma ferramenta de desnaturalização crítica de comportamentos sociais alienados."
    },
    commonTraps: [
      "Focar apenas no texto verbal e esquecer de analisar o cenário visual da caçamba de lixo",
      "Interpretar a charge de modo literal, perdendo o sentido irônico do cartunista"
    ],
    tags: ["charge", "linguagem-multimodal", "ironia", "obsolescencia-programada", "consumismo"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-INT-022",
    area: "linguagens",
    competence: 7,
    skill: 22,
    topic: "Interpretação Textual",
    subtopic: "Infográficos Estatísticos e Transição Demográfica",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a síntese dos dados apresentados em um infográfico temático divulgado pelo Instituto Brasileiro de Geografia e Estatística (IBGE):\n• 1980: Base da pirâmide larga (jovens de 0 a 14 anos representavam 38,2% da população); topo estreito (idosos com 65 anos ou mais representavam apenas 4,0%).\n• 2010: Alargamento do corpo intermediário da pirâmide (população em idade ativa correspondia a 67,5%).\n• 2022 (Censo): Encolhimento expressivo da base (crianças e jovens representam 19,8%) e expansão do topo (idosos atingem 10,9% do total, com taxa de envelhecimento acelerada).",
      source: "IBGE. Censo Demográfico: Panorama da Transição Demográfica no Brasil."
    },
    prompt: "A leitura articulada das informações contidas no infográfico permite inferir que a transformação na estrutura etária brasileira exige prioritariamente a reformulação de políticas públicas voltadas para:",
    options: [
      { id: "a", text: "o fortalecimento da rede de seguridade social, adequação do sistema previdenciário e expansão da atenção primária e gerontológica na saúde pública, diante da elevação expressiva da expectativa de vida aliada à queda da taxa de fecundidade.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "o fechamento compulsório de todas as universidades públicas devido ao esvaziamento irreversível da população adulta.", isCorrect: false, distractorRationale: "A população adulta em idade produtiva continua maciça e exige qualificação tecnológica contínua." },
      { id: "c", text: "a proibição de vacinação de recém-nascidos para conter o crescimento demográfico descontrolado.", isCorrect: false, distractorRationale: "O problema demográfico apontado é justamente a queda da natalidade e o envelhecimento, e vacinação é direito basilar." },
      { id: "d", text: "o estímulo exclusivo à construção de creches em detrimento de qualquer investimento em leitos hospitalares.", isCorrect: false, distractorRationale: "Com menos crianças nascendo e mais idosos adoecendo, a demanda médica hospitalar e gerontológica cresce exponencialmente." },
      { id: "e", text: "a redução imediata do orçamento destinado ao tratamento de doenças crônico-degenerativas na terceira idade.", isCorrect: false, distractorRationale: "O envelhecimento populacional requer ampliação, e não redução, dos recursos para doenças crônicas." }
    ],
    detailedExplanation: {
      summary: "A transição demográfica brasileira é marcada pela queda abrupta da taxa de fecundidade e pelo aumento da longevidade. O infográfico traduz essa dinâmica: com a pirâmide etária retangularizada/invertida, o país enfrenta o desafio do envelhecimento antes mesmo de enriquecer plenamente.",
      stepByStep: [
        "1. Leitura dos dados temporais: Redução de jovens (38,2% -> 19,8%) e mais que duplicação de idosos (4,0% -> 10,9%).",
        "2. Causa sociodemográfica: Urbanização, inserção feminina no mercado de trabalho, métodos contraceptivos e avanços na medicina preventiva e saneamento.",
        "3. Consequências socioeconômicas: Razão de dependência de idosos aumenta, exigindo sustentabilidade do sistema de previdência e ampliação dos cuidados geriátricos no SUS.",
        "4. Inferência textual: A opção 'a' sintetiza com precisão o impacto das tendências estatísticas nas políticas públicas."
      ],
      coreConcept: "Interpretação de Infográficos Estatísticos e Transição Demográfica",
      trapWarning: "No ENEM: Em questões com infográficos, não busque apenas o número isolado; o ENEM cobra a capacidade de inferir tendências sociais e impactos em políticas públicas a partir dos gráficos."
    },
    commonTraps: [
      "Ler apenas os dados brutos sem correlacioná-los com as demandas sociais correspondentes",
      "Achar que o Brasil continua sendo um país estritamente jovem como era no século XX"
    ],
    tags: ["infografico", "ibge", "transicao-demografica", "envelhecimento", "politicas-publicas"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-INT-023",
    area: "linguagens",
    competence: 7,
    skill: 23,
    topic: "Interpretação Textual",
    subtopic: "Pressupostos e Subentendidos em Editorial Jornalístico",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Leia o seguinte excerto de um editorial jornalístico:\n\n'A recente proliferação de ferramentas generativas no cotidiano produtivo reabre o debate sobre a automação do trabalho intelectual. Ao contrário do que previam os entusiastas deslumbrados, a tecnologia não veio simplesmente para libertar os trabalhadores do fardo das tarefas mecânicas e enfadonhas; ela ameaça converter o próprio ato criativo em um processo padronizado e precarizado. Se a sociedade continuar tratando esses avanços como um destino tecnológico inexorável em vez de uma escolha política e regulatória, correrá o risco de celebrar a eficiência do algoritmo enquanto assiste à erosão silenciosa da dignidade do trabalho humano.'",
      source: "Editorial Jornalístico Contemporâneo sobre Trabalho e Tecnologia."
    },
    prompt: "No texto, a oração 'Se a sociedade continuar tratando esses avanços como um destino tecnológico inexorável em vez de uma escolha política e regulatória' carrega o pressuposto implícito de que:",
    options: [
      { id: "a", text: "o desenvolvimento e a implantação das tecnologias não são processos autônomos ou naturais fora do controle humano, mas sim frutos de decisões institucionais e econômicas que podem e devem ser reguladas pela coletividade.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a sociedade já baniu por completo o uso de computadores e algoritmos em todas as repartições públicas.", isCorrect: false, distractorRationale: "O texto discute exatamente a rápida proliferação das ferramentas no mercado de trabalho." },
      { id: "c", text: "a inteligência artificial possui sentimentos morais e deve ser julgada criminalmente por tribunais trabalhistas.", isCorrect: false, distractorRationale: "O editorial não personifica a IA com sentimentos humanos; foca nas escolhas políticas humanas de regulação." },
      { id: "d", text: "qualquer inovação tecnológica conduz automaticamente à extinção da espécie humana sem alternativa de sobrevivência.", isCorrect: false, distractorRationale: "O tom é de alerta regulatório e ético, não de fatalismo apocalíptico." },
      { id: "e", text: "os entusiastas da tecnologia detêm a posse legítima de todas as normas jurídicas do país.", isCorrect: false, distractorRationale: "O autor critica justamente a ingenuidade dos tecnoutopistas." }
    ],
    detailedExplanation: {
      summary: "Pressupostos linguísticos são informações implícitas decorrentes do sentido de certas palavras (como a oposição 'inexorável' vs 'escolha política'). O autor refuta o determinismo tecnológico cego: a tecnologia decorre de escolhas políticas e sociais sujeitas à regulação democrática.",
      stepByStep: [
        "1. Identificação do marcador discursivo: 'em vez de uma escolha política e regulatória'.",
        "2. Análise do pressuposto: Dizer que a sociedade deve tratar algo como escolha política pressupõe que as ferramentas tecnológicas são construções sociais moldáveis pelo Direito e pela cidadania, e não forças cósmicas imutáveis.",
        "3. Crítica ao determinismo: O autor desconstroi o clichê de que 'a tecnologia é um caminho sem volta que não se pode deter ou regrar'.",
        "4. Conclusão: A questão avalia a capacidade de identificar os valores e axiomas ideológicos que sustentam a argumentação do editorialista."
      ],
      coreConcept: "Identificação de Pressupostos, Subentendidos e Determinismo Tecnológico",
      trapWarning: "No ENEM: Pressuposto é o que está posto pela própria gramática do enunciado (marcado textualmente); subentendido depende do contexto compartilhado com o leitor."
    },
    commonTraps: [
      "Interpretar a crítica do editorial como ludismo ou rejeição cega à ciência",
      "Não perceber a distinção entre determinismo tecnológico (inexorável) e agência política coletiva"
    ],
    tags: ["editorial", "pressupostos", "inteligencia-artificial", "trabalho", "argumentacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-INT-024",
    area: "linguagens",
    competence: 7,
    skill: 21,
    topic: "Interpretação Textual",
    subtopic: "Intertextualidade e Ressignificação de Expressões Populares",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Observe o slogan e a imagem de uma campanha publicitária veiculada pelo Ministério da Saúde em redes sociais e painéis urbanos:\n\nImagem: O braço de um jovem estendido confortavelmente em uma poltrona de hemocentro, enquanto uma bolsa de coleta de sangue é preenchida lentamente. Ao fundo, uma criança sorridente segura um desenho colorido com um coração.\nTexto verbal em destaque: 'No dia a dia, muita gente diz que dá o sangue pelo que ama. Mas já pensou em dar o sangue por quem você nem conhece? Doe sangue. Salve vidas.'",
      source: "Ministério da Saúde. Campanha Nacional de Doação de Sangue."
    },
    prompt: "O recurso expressivo central que confere força persuasiva à campanha publicitária consiste na:",
    options: [
      { id: "a", text: "ressignificação intertextual de uma expressão metafórica popular ('dar o sangue'), contrapondo o sentido figurado de esforço árduo ao sentido literal de solidariedade biomédica que salva vidas.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "ameaça punitiva direta de sanções judiciais àqueles cidadãos que se recusarem a comparecer aos hemocentros.", isCorrect: false, distractorRationale: "A campanha não adota tom coercitivo ou punitivo; apela à empatia e à solidariedade voluntária." },
      { id: "c", text: "desqualificação agressiva da linguagem popular, exigindo que os leitores utilizem apenas vocabulário erudito latino.", isCorrect: false, distractorRationale: "A campanha valoriza a expressão popular cotidiana para aproximar o anúncio do interlocutor." },
      { id: "d", text: "proibição da doação de sangue para familiares ou pessoas conhecidas do doador.", isCorrect: false, distractorRationale: "O texto incentiva a doação universal desinteressada, sem proibir a doação direcionada." },
      { id: "e", text: "reprodução de um jargão médico hermético que impede a compreensão por parte de leitores comuns.", isCorrect: false, distractorRationale: "A linguagem é simples, direta e altamente acessível ao público geral." }
    ],
    detailedExplanation: {
      summary: "A eficácia comunicativa do anúncio baseia-se no jogo polissêmico entre o sentido conotativo da expressão 'dar o sangue' (esforçar-se ao máximo no trabalho ou estudos) e o sentido denotativo concreto do ato médico de doação hemoderivada em prol de um desconhecido.",
      stepByStep: [
        "1. Expressão popular de base: 'Dar o sangue' é metáfora cristalizada no uso cotidiano brasileiro para denotar dedicação extrema.",
        "2. Quebra de expectativa: A pergunta retórica ('Mas já pensou em dar o sangue por quem você nem conhece?') desloca a expressão para o plano literal da agulha e da bolsa coletora.",
        "3. Função conativa/apelativa: O imperativo final ('Doe sangue. Salve vidas') canaliza a reflexão ética em uma atitude cidadã concreta.",
        "4. Conclusão: A intertextualidade com o saber popular é estratégia de alto rendimento no ENEM para campanhas de interesse social."
      ],
      coreConcept: "Intertextualidade, Polissemia e Ressignificação Semântica em Campanhas Públicas",
      trapWarning: "No ENEM: Preste atenção no deslocamento de sentido: expressões figuradas do senso comum ganham potência extraordinária quando o publicitário as remete ao seu sentido literal originário."
    },
    commonTraps: [
      "Achar que a campanha critica quem usa expressões populares",
      "Não perceber o contraste entre o sentido figurado (esforço) e o sentido literal (doação biológica)"
    ],
    tags: ["intertextualidade", "campanha-publicitaria", "polissemia", "doacao-de-sangue", "persuasao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-INT-025",
    area: "linguagens",
    competence: 7,
    skill: 24,
    topic: "Interpretação Textual",
    subtopic: "Crônica Contemporânea e Reflexão sobre a Aceleração do Cotidiano",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Leia o excerto da crônica a seguir:\n\n'Reparo que agora ouvimos mensagens de áudio na velocidade duas vezes. Assistimos a vídeos pulando introduções, lemos notícias em manchetes telegráficas de três linhas e nos impacientamos se a página da internet demora quatro segundos para carregar. Temos a estranha sensação de que estamos ganhando tempo, acumulando preciosos minutos como moedas em um cofrinho imaginário. Mas ao final do dia, quando finalmente apagamos a luz da cabeceira, somos assaltados por uma exaustão oca: para onde foi todo o tempo que economizamos com tanta pressa? Talvez a urgência com que devoramos os minutos esteja apenas nos devorando por dentro.'",
      source: "Crônica Literária Brasileira Contemporânea."
    },
    prompt: "Na construção dos sentidos da crônica, a indagação final do narrador e a metáfora de 'devorar os minutos' expressam uma reflexão crítica sobre:",
    options: [
      { id: "a", text: "o paradoxo da aceleração temporal na vida hiperconectada, na qual o anseio obsessivo por produtividade e velocidade gera desumanização, ansiedade e um vazio existencial reflexivo.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "a superioridade inquestionável dos relógios digitais sobre os antigos relógios de corda manuais.", isCorrect: false, distractorRationale: "O texto não discute modelos de relógios, mas sim a experiência subjetiva do tempo na sociedade moderna." },
      { id: "c", text: "a recomendação aos leitores para que acelerem ainda mais a velocidade dos áudios para triplicar a produção diária.", isCorrect: false, distractorRationale: "O cronista problematiza essa aceleração, vendo nela uma armadilha desgastante." },
      { id: "d", text: "a comemoração entusiasta do fim de todos os momentos de silêncio e repouso na vida privada.", isCorrect: false, distractorRationale: "O cronista lamenta a perda do tempo contemplativo e a chegada de uma 'exaustão oca'." },
      { id: "e", text: "a necessidade de abolir completamente o uso da energia elétrica e das luzes de cabeceira nas cidades.", isCorrect: false, distractorRationale: "A luz de cabeceira é apenas um detalhe descritivo de ambientação cotidiana noturna." }
    ],
    detailedExplanation: {
      summary: "O gênero crônica toma um detalhe minúsculo do cotidiano (ouvir áudios em 2x) para filosofar sobre uma questão civilizacional profunda: a mercantilização do tempo e a sociedade do cansaço (Byung-Chul Han / Zygmunt Bauman).",
      stepByStep: [
        "1. Ponto de partida empírico: Hábitos modernos de aceleração (áudio acelerado, vídeos pulados, pressa digital).",
        "2. Metáfora monetária: 'acumulando preciosos minutos como moedas num cofrinho' retrata a visão utilitarista do tempo como mercadoria.",
        "3. Quebra e paradoxo: 'exaustão oca' ao deitar revela que economizar tempo acelerando a vida não produz bem-estar nem realização.",
        "4. Desfecho reflexivo: A aceleração contínua consome o próprio indivíduo, roubando-lhe a capacidade de viver o presente com significado.",
        "5. Conclusão: A crônica convida à desaceleração e à preservação da interioridade humana."
      ],
      coreConcept: "A Crônica Literária como Exercício Crítico da Subjetividade e do Tempo",
      trapWarning: "No ENEM: A crônica não é notícia; ela parte de um fato cotidiano banal para construir uma reflexão lírica, existencial e filosófica sobre a condição humana."
    },
    commonTraps: [
      "Achar que o cronista está ensinando técnicas de produtividade pessoal",
      "Ignorar a ambiguidade irônica da pergunta retórica final"
    ],
    tags: ["cronica", "cotidiano", "aceleracao-temporal", "modernidade-liquida", "reflexao-existencial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];



