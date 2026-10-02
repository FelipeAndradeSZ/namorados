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
  }
];

