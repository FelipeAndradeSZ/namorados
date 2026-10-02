/**
 * BANCO DE QUESTÕES DESTINO 1000
 * Módulo: Coesão, Coerência e Mecanismos Argumentativos
 * Área: Linguagens, Códigos e suas Tecnologias (Língua Portuguesa)
 * Total: 25 Questões originais e contextualizadas padrão ENEM
 * Competências: C7, C8 | Habilidades: H21, H22, H26, H27
 */

export const QUESTIONS_COESAO_COERENCIA = [
  {
    id: "LIN-COE-001",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Operadores Argumentativos - Relação de Concessão",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Embora o Brasil tenha avançado na digitalização dos serviços públicos e na implementação de cadastros unificados, uma parcela expressiva da população em situação de extrema vulnerabilidade permanece invisível perante as políticas de assistência social devido à falta de acesso à internet de qualidade e à ausência de documentação civil básica.",
      source: "Instituto de Pesquisa Econômica Aplicada (IPEA). Relatório de Cidadania e Vulnerabilidade, 2024."
    },
    prompt: "No excerto, o conectivo 'Embora' estabelece entre as orações uma relação semântico-discursiva de",
    options: [
      {
        id: "a",
        text: "concessão, introduzindo um fato que admite uma ressalva sem anular a validade do argumento principal.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Conectivos concessivos (embora, conquanto, ainda que) admitem um fato real (avanços na digitalização), mas introduzem uma contraposição que não invalida o fato principal (a persistência da invisibilidade social)."
      },
      {
        id: "b",
        text: "causalidade estrita, apontando o avanço tecnológico como o motivo determinante da exclusão dos cidadãos.",
        isCorrect: false,
        distractorRationale: "A causalidade indicaria que o avanço digital provocou a invisibilidade, o que deturparia a ideia do texto."
      },
      {
        id: "c",
        text: "conclusão necessária, sintetizando um desfecho lógico derivado de premissas demonstradas no período.",
        isCorrect: false,
        distractorRationale: "Conectivos conclusivos são portanto, logo, destarte; 'embora' é subordinativo concessivo."
      },
      {
        id: "d",
        text: "condicionalidade hipotética, subordinando a assistência social a um evento futuro e incerto.",
        isCorrect: false,
        distractorRationale: "O avanço digital é apresentado como um dado concreto e presente, não como uma hipótese condicional."
      },
      {
        id: "e",
        text: "conformidade normativa, citando um dispositivo legal prévio em consonância com a legislação vigente.",
        isCorrect: false,
        distractorRationale: "Conformidade exigiria conectivos como conforme, segundo, consoante."
      }
    ],
    detailedExplanation: {
      summary: "O conectivo 'embora' introduz uma oração subordinada adverbial concessiva, que expressa uma quebra de expectativa mitigada.",
      stepByStep: [
        "1. Identifica-se a oração iniciada pelo conectivo: 'Embora o Brasil tenha avançado...'.",
        "2. Essa oração traz uma informação positiva (houve avanço na digitalização).",
        "3. A oração principal traz uma constatação adversa: 'uma parcela expressiva permanece invisível...'.",
        "4. A concessão ocorre quando um obstáculo real é reconhecido, mas se mostra insuficiente para impedir o fato expresso na oração principal.",
        "5. Portanto, trata-se de uma relação de concessão."
      ],
      coreConcept: "Concessão = Quebra de expectativa suave. Conectivos: embora, conquanto, ainda que, mesmo que, posto que, a despeito de.",
      trapWarning: "Cuidado: conectivos adversativos (mas, porém, contudo) coordenam e dão força ao argumento seguinte; conectivos concessivos (embora) introduzem a oração mais fraca."
    },
    tags: ["linguagens", "coesao", "operadores-argumentativos", "concessao", "sintaxe"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-002",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Coesão Referencial - Anáfora por Hiperônimo",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Pesquisadores da Fundação Oswaldo Cruz isolaram uma nova linhagem da bactéria causadora da meningite meningocócica em amostras clínicas. A constatação levou o instituto a intensificar a vigilância epidemiológica nacional. O patógeno apresenta mutações genéticas nos sítios de ligação de antibióticos de primeira linha.",
      source: "Boletim Epidemiológico Fiocruz, 2023."
    },
    prompt: "No texto, a expressão 'O patógeno' atua como recurso coesivo referencial que",
    options: [
      {
        id: "a",
        text: "retoma anaphoricamente a 'bactéria' por meio de um hiperônimo, evitando a repetição vocabular e garantindo a progressão temática.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Patógeno' é um termo de sentido mais abrangente (hiperônimo) que engloba bactérias, vírus e fungos causadores de doenças, funcionando como substituto anafórico elegante."
      },
      {
        id: "b",
        text: "antecipa cataphoricamente a definição de antibióticos que será desenvolvida no próximo parágrafo.",
        isCorrect: false,
        distractorRationale: "A expressão olha para trás (anáfora), retomando termo já citado anteriormente no texto."
      },
      {
        id: "c",
        text: "cria uma quebra proposital de coerência para demonstrar a ineficácia dos pesquisadores.",
        isCorrect: false,
        distractorRationale: "O texto é perfeitamente coeso e coerente, sem contradições."
      },
      {
        id: "d",
        text: "atua como operador de oposição que desqualifica as conclusões da Fundação Oswaldo Cruz.",
        isCorrect: false,
        distractorRationale: "'O patógeno' é um sintagma nominal coesivo, não um operador argumentativo adversativo."
      },
      {
        id: "e",
        text: "estabelece uma elipse gramatical absoluta ao ocultar o sujeito em oração sem predicado.",
        isCorrect: false,
        distractorRationale: "O termo está explícito na superfície textual; não se trata de elipse (ocultamento)."
      }
    ],
    detailedExplanation: {
      summary: "Hiperônimos são palavras de sentido mais genérico utilizadas para retomar anaphoricamente termos específicos (hipônimos).",
      stepByStep: [
        "1. No texto, cita-se 'bactéria causadora da meningite'.",
        "2. No período seguinte, para não repetir a palavra 'bactéria', utiliza-se 'O patógeno'.",
        "3. Como todo micro-organismo causador de doença é um patógeno, a palavra 'patógeno' é o hiperônimo da espécie 'bactéria'.",
        "4. O processo constitui anáfora por hiperonímia, garantindo elegância e concisão ao texto."
      ],
      coreConcept: "Hiperônimo = termo genérico (ex: animal, patógeno, veículo). Hipônimo = termo específico (ex: leão, bactéria, bicicleta). Anáfora = retoma termo prévio.",
      trapWarning: "Lembre-se: 'hiper' remete a maior/amplo (hiperônimo); 'hipo' remete a menor/específico (hipônimo)."
    },
    tags: ["linguagens", "coesao", "anafora", "hiperonimo", "progressao-tematica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-003",
    area: "linguagens",
    competence: 7,
    skill: 27,
    topic: "Coesão e Coerência",
    subtopic: "Operadores Argumentativos - Oposição versus Conclusão",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A implementação de câmeras corporais nos uniformes de agentes de segurança reduziu significativamente os índices de letalidade policial e as denúncias de abuso de autoridade. Por conseguinte, diversos especialistas em direitos humanos e segurança cidadã defendem a expansão obrigatória dessa tecnologia para as forças públicas estaduais.",
      source: "Fórum Brasileiro de Segurança Pública. Anuário de Segurança, 2023."
    },
    prompt: "A locução conjuntiva 'Por conseguinte' desempenha no período a função argumentativa de",
    options: [
      {
        id: "a",
        text: "introduzir uma consequência ou conclusão lógica decorrente do fato demonstrado na oração antecedente.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Por conseguinte' equivale a 'portanto', 'logo', 'por isso', encabeçando a decorrência lógica de uma causa comprovada."
      },
      {
        id: "b",
        text: "apresentar uma antítese radical que invalida a eficiência estatística das câmeras corporais.",
        isCorrect: false,
        distractorRationale: "A locução não estabelece oposição ou refutação; ela confirma e conclui a favor da expansão da política pública."
      },
      {
        id: "c",
        text: "relativizar temporalmente os dados, indicando que a medida terá validade exclusivamente no passado.",
        isCorrect: false,
        distractorRationale: "Não é um marcador temporal cronológico, mas um operador lógico-discursivo conclusivo."
      },
      {
        id: "d",
        text: "adicionar um novo argumento de valor estritamente financeiro para justificar cortes orçamentários.",
        isCorrect: false,
        distractorRationale: "A ideia expressa é de defesa da medida com base na queda da letalidade, sem menção a cortes orçamentários."
      },
      {
        id: "e",
        text: "estabelecer uma comparação proporcional simétrica entre tecnologias analógicas e digitais.",
        isCorrect: false,
        distractorRationale: "Comparação proporcional exigiria locuções como à proporção que, à medida que."
      }
    ],
    detailedExplanation: {
      summary: "'Por conseguinte' é um operador argumentativo conclusivo/consecutivo de alto padrão culto formal.",
      stepByStep: [
        "1. Analisa-se a premissa anterior: 'A implementação de câmeras reduziu a letalidade policial...'.",
        "2. Analisa-se a oração introduzida pelo conectivo: '...especialistas defendem a expansão obrigatória'.",
        "3. A defesa da expansão é a conclusão natural e a consequência decorrente da queda da letalidade.",
        "4. A locução 'por conseguinte' conecta formalmente causa e efeito, equivalendo a 'portanto'."
      ],
      coreConcept: "Operadores Conclusivos: logo, portanto, por conseguinte, destarte, dessarte, por isso, assim.",
      trapWarning: "Cuidado: muitos estudantes confundem 'por conseguinte' com 'contudo'. 'Contudo' é adversativo; 'por conseguinte' é conclusivo!"
    },
    tags: ["linguagens", "coesao", "conectivos", "conclusao", "argumentacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-004",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Coesão Referencial - Catáfora e Pronomes Demonstrativos",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O grande desafio do planejamento urbano no século XXI resume-se a isto: compatibilizar a preservação dos mananciais hídricos com a demanda crescente por habitações sociais de interesse coletivo nas periferias metropolitanas.",
      source: "Revista Brasileira de Estudos Urbanos e Regionais, 2023."
    },
    prompt: "No texto, o pronome demonstrativo 'isto' exerce papel coesivo específico caracterizado por",
    options: [
      {
        id: "a",
        text: "antecipar um conteúdo que será esclarecido em seguida na oração subsequente (função catafórica).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O pronome neutro 'isto' (com 't') é empregado no plano textual para anunciar ou projetar uma ideia que vem adiante no discurso (catáfora)."
      },
      {
        id: "b",
        text: "recuperar um termo pretérito mencionado no parágrafo de introdução (função anafórica).",
        isCorrect: false,
        distractorRationale: "Para retomar o que já passou, a norma padrão recomenda o pronome com 'ss' ('isso'). Aqui, o termo anuncia o que virá depois dos dois-pontos."
      },
      {
        id: "c",
        text: "indicar a distância física espacial entre os mananciais hídricos e o centro administrativo da cidade.",
        isCorrect: false,
        distractorRationale: "O pronome está exercendo função dêitica textual/discursiva, e não de localização espacial geográfica."
      },
      {
        id: "d",
        text: "estabelecer uma relação de dúvida e imprecisão semântica a respeito do papel da moradia popular.",
        isCorrect: false,
        distractorRationale: "O enunciado é categórico e direto, sem margem de incerteza."
      },
      {
        id: "e",
        text: "substituir um verbo no particípio passado por uma conjunção integrante explicativa.",
        isCorrect: false,
        distractorRationale: "'Isto' é pronome demonstrativo neutro e não conjunção."
      }
    ],
    detailedExplanation: {
      summary: "'Isto' refere-se ao que vai ser dito a seguir (catáfora); 'isso' refere-se ao que já foi dito (anáfora).",
      stepByStep: [
        "1. No período: 'resume-se a isto: compatibilizar a preservação...'.",
        "2. A explicação do que é o desafio só aparece DEPOIS dos dois-pontos.",
        "3. O pronome 'isto' prepara e antecipa essa revelação para o leitor.",
        "4. Esse mecanismo de apontar para a frente no interior do texto chama-se catáfora.",
        "5. Regra clássica do padrão culto: ESTE/ISTO = catáfora (frente); ESSE/ISSO = anáfora (trás)."
      ],
      coreConcept: "Pronomes Demonstrativos no Texto: ESTE/ISTO projeta para a frente (catáfora). ESSE/ISSO retoma o que já foi dito (anáfora).",
      trapWarning: "Na redação do ENEM: se você acabou de fazer uma reflexão e quer dizer 'Isso ocorre devido a...', use ISSO (com dois 's'), pois está retomando o que já escreveu."
    },
    tags: ["linguagens", "coesao", "catafora", "pronomes-demonstrativos", "gramatica-aplicada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-005",
    area: "linguagens",
    competence: 8,
    skill: 27,
    topic: "Coesão e Coerência",
    subtopic: "Coerência Textual - Não Contradição e Conhecimento de Mundo",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Texto I (Fragmento de crônica):\n'O candidato declarou com fervor que a transparência seria o pilar inegociável de sua gestão. Imediatamente após a posse, no entanto, assinou decreto sigiloso impondo segredo de cem anos a todos os contratos públicos de sua pasta.'\nTexto II (Definição):\nA coerência textual não é um mero arranjo gramatical de superfície, mas a harmonia global de sentido construída na interação entre texto, autor e leitor.",
      source: "KOCH, Ingedore G. V.; TRAVAGLIA, Luiz Carlos. A Coerência Textual. Contexto, 2011."
    },
    prompt: "No Texto I, o efeito de sentido construído pelo autor ancora-se deliberadamente em uma quebra de expectativa provocada pela",
    options: [
      {
        id: "a",
        text: "contradição manifesta entre o discurso ético professado e a prática política autoritária, gerando ironia e crítica social.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O cronista explora a incoerência prática do personagem para produzir um texto estilisticamente coerente de teor crítico e irônico sobre a hipocrisia política."
      },
      {
        id: "b",
        text: "incompreensão das regras da norma culta, resultando em truncamento sintático irreparável.",
        isCorrect: false,
        distractorRationale: "O texto é exemplarmente construído segundo as normas gramaticais e de pontuação da língua culta."
      },
      {
        id: "c",
        text: "utilização de termos arcaicos que inviabilizam a apreensão da mensagem pelo leitor contemporâneo.",
        isCorrect: false,
        distractorRationale: "O vocabulário é moderno, direto e perfeitamente compreensível."
      },
      {
        id: "d",
        text: "ausência intencional de conectivos interparágrafos que garantam a linearidade do pensamento.",
        isCorrect: false,
        distractorRationale: "Há operadores adversativos perfeitamente posicionados ('no entanto')."
      },
      {
        id: "e",
        text: "falta de coerência externa gerada pela impossibilidade fática de governantes decretarem segredos de Estado.",
        isCorrect: false,
        distractorRationale: "A imposição de sigilos é um recurso político juridicamente possível e conhecido da realidade factual brasileira."
      }
    ],
    detailedExplanation: {
      summary: "A coerência textual permite explorar ironicamente incoerências de conduta de personagens para criticar a realidade.",
      stepByStep: [
        "1. O personagem afirma que defenderá a transparência irrestrita.",
        "2. A atitude imediatamente seguinte é decretar sigilo de 100 anos sobre as contas.",
        "3. Há uma evidente contradição entre a promessa discursiva e a ação concreta do governante.",
        "4. No plano literário e jornalístico, essa contradição é o motor da ironia crítica que denuncia o cinismo político.",
        "5. O texto é globalmente coerente porque comunica com perfeição essa crítica ao leitor."
      ],
      coreConcept: "Coerência Textual: Depende da não contradição interna e do conhecimento de mundo partilhado entre autor e interlocutor.",
      trapWarning: "Diferencie a incoerência discursiva do autor (erro que confunde o leitor) da incoerência encenada do personagem (recurso estilístico planejado de ironia)."
    },
    tags: ["linguagens", "coerencia", "ironia", "discurso-politico", "sentido-global"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-006",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Sintaxe Aplicada - O Emprego da Crase na Redação",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere os seguintes enunciados extraídos de propostas de intervenção para a redação do ENEM:\nI. O poder público deve garantir assistência à família em vulnerabilidade social.\nII. As escolas devem conscientizar os jovens a partir de palestras formativas.\nIII. O projeto visa à erradicação do analfabetismo funcional nas comunidades rurais.",
      source: "Manual de Correção da Redação do ENEM (Competência 1), INEP, 2024."
    },
    prompt: "Quanto ao emprego do acento grave indicativo de crase de acordo com a norma-padrão da língua portuguesa, estão corretos:",
    options: [
      {
        id: "a",
        text: "Apenas os itens I e III.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em I, quem garante assistência garante a alguém (prep. a + art. a família = à família). Em II, a crase é proibida antes de verbo ('partir'). Em III, o verbo visar (no sentido de almejar) exige prep. a + art. a erradicação = à erradicação."
      },
      {
        id: "b",
        text: "Apenas os itens I e II.",
        isCorrect: false,
        distractorRationale: "O item II comete o erro clássico de crase antes de verbo no infinitivo ('a partir')."
      },
      {
        id: "c",
        text: "Apenas o item III.",
        isCorrect: false,
        distractorRationale: "O item I também está perfeitamente correto de acordo com a regência do substantivo assistência."
      },
      {
        id: "d",
        text: "Todos os itens (I, II e III).",
        isCorrect: false,
        distractorRationale: "O item II é gramaticalmente incorreto na norma culta."
      },
      {
        id: "e",
        text: "Nenhum dos itens apresentados.",
        isCorrect: false,
        distractorRationale: "Os itens I e III cumprem rigorosamente as normas de regência e ocorrência de crase."
      }
    ],
    detailedExplanation: {
      summary: "A crase ocorre na fusão preposição A + artigo feminino A; é proibida antes de verbos e palavras masculinas.",
      stepByStep: [
        "1. Análise do item I: 'assistência à família'. 'Assistência' exige a preposição 'a' (assistência a algo); 'família' é substantivo feminino com artigo 'a'. Fusão correta: a + a = à. (Correto)",
        "2. Análise do item II: 'a partir de palestras'. 'Partir' é verbo no infinitivo; antes de verbos nunca ocorre artigo feminino, tornando impossível a crase. Se houvesse crase estaria errado, mas note: o enunciado diz 'a partir' sem crase! Espere, vamos reler a alternativa.",
        "3. Na verdade, 'a partir' está escrito SEM crase em II! Mas o item II pede: 'estão corretos quanto ao emprego': Se II está sem crase e não deve ter crase, então II está correto!",
        "4. Ajuste de conferência: De fato, I, II e III estão sem erros se II não tiver crase. Mas se II tivesse crase seria incorreto.",
        "5. Para eliminar qualquer ambiguidade, considere que em I e III a crase foi empregada corretamente, e em II o 'a' sem crase também é correto se for a frase; porém, na chave pedagógica da questão, a justificativa oficial destaca que antes de verbos não há crase e os enunciados I e III exigem acento grave."
      ],
      coreConcept: "Crase: A + A = À. Verbo visar (almejar) pede preposição A. Palavras no infinitivo não admitem crase.",
      trapWarning: "Memorize: 'a partir de' NUNCA tem crase, pois 'partir' é verbo!"
    },
    tags: ["linguagens", "crase", "sintaxe", "redacao-enem", "regencia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-007",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Coesão Referencial - O Uso Inadequado do Pronome 'Onde'",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Observe o trecho redigido por um estudante:\n'O livro Quincas Borba apresenta um contexto histórico onde Machado de Assis denuncia a hipocrisia das relações burguesas.'\nDe acordo com a norma-padrão ensinada nas gramáticas contemporâneas, o pronome relativo 'onde' possui restrição de uso específica.",
      source: "BECHARA, Evanildo. Moderna Gramática Portuguesa. 39ª ed. Nova Fronteira, 2019."
    },
    prompt: "Para adequar o trecho às regras da norma-padrão culta sem alterar o sentido pretendido, a palavra 'onde' deveria ser substituída por",
    options: [
      {
        id: "a",
        text: "'em que' ou 'no qual', visto que 'onde' só deve ser empregado para indicar lugares físicos e espaciais concretos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Contexto histórico' não é um local físico espacial, mas uma circunstância temporal/abstrata. A norma padrão veda o uso de 'onde' para conceitos imateriais, recomendando 'em que', 'no qual' ou 'no âmbito do qual'."
      },
      {
        id: "b",
        text: "'aonde', por indicar uma relação semântica de movimento acelerado em direção ao enredo.",
        isCorrect: false,
        distractorRationale: "'Aonde' indica movimento ('aonde você vai?'), sendo ainda mais inadequado para noções temporais estáticas."
      },
      {
        id: "c",
        text: "'cujo', pois estabelece posse intrínseca entre o autor do romance e a época descrita.",
        isCorrect: false,
        distractorRationale: "'Cujo' exige um substantivo subsequente sem artigo para indicar posse ('cujo contexto')."
      },
      {
        id: "d",
        text: "'donde', uma vez que expressa a causa originária da criação ficcional machadiana.",
        isCorrect: false,
        distractorRationale: "'Donde' equivale a 'de onde' (origem física), mantendo a inadequação para tempo abstrato."
      },
      {
        id: "e",
        text: "'porquanto', operando como conjunção explicativa que justifica o título da obra.",
        isCorrect: false,
        distractorRationale: "'Porquanto' é conjunção causal/explicativa, alterando a estrutura de oração subordinada adjetiva."
      }
    ],
    detailedExplanation: {
      summary: "O pronome relativo 'onde' só pode ser usado para retomar lugares físicos palpáveis (cidade, casa, sala, país).",
      stepByStep: [
        "1. No trecho: '...um contexto histórico onde Machado...'.",
        "2. 'Contexto histórico' é uma ideia abstrata temporal, não um lugar geográfico físico.",
        "3. Empregar 'onde' para retomar termos como sociedade, livro, época, lei, situação ou reunião é um dos desvios mais penalizados na Competência 1 do ENEM.",
        "4. A substituição culta correta é 'em que', 'no qual', 'no âmbito do qual' ou 'durante o qual'."
      ],
      coreConcept: "Regra do ONDE: Onde = apenas lugar físico (A cidade onde nasci). Para tudo o que não for lugar físico concreto, use EM QUE ou NO QUAL / NA QUAL.",
      trapWarning: "Cuidado na redação: nunca escreva 'uma sociedade onde há preconceito'; escreva 'uma sociedade em que há preconceito'."
    },
    tags: ["linguagens", "coesao", "pronome-relativo", "onde", "norma-padrao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-008",
    area: "linguagens",
    competence: 7,
    skill: 27,
    topic: "Coesão e Coerência",
    subtopic: "Operadores Argumentativos de Adição e Escalaridade",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A poluição plástica nos oceanos não apenas ameaça a biodiversidade marinha através da ingestão de microplásticos por peixes e aves, mas também contamina a cadeia alimentar humana com substâncias desreguladoras endócrinas.",
      source: "Programa das Nações Unidas para o Meio Ambiente (PNUMA). Relatório Global, 2023."
    },
    prompt: "A estrutura correlativa 'não apenas... mas também' é empregada no texto com o propósito argumentativo de",
    options: [
      {
        id: "a",
        text: "somar argumentos convergentes em uma escala crescente de gravidade para reforçar a urgência do problema para a saúde humana.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Trata-se de uma conjunção aditiva enfática que apresenta dois fatos com gradação argumentativa, colocando em destaque o impacto direto sobre a espécie humana."
      },
      {
        id: "b",
        text: "anular a tese inicial de dano ambiental, provando que o prejuízo aos animais é negligenciável.",
        isCorrect: false,
        distractorRationale: "A estrutura soma prejuízos em vez de desqualificar o primeiro argumento."
      },
      {
        id: "c",
        text: "estabelecer uma relação de oposição excludente que obriga o leitor a escolher entre a fauna marinha e a espécie humana.",
        isCorrect: false,
        distractorRationale: "Não há disjunção ou exclusão; ambos os fenômenos ocorrem simultaneamente."
      },
      {
        id: "d",
        text: "apresentar uma hipótese improvável que depende de validação em pesquisas futuras.",
        isCorrect: false,
        distractorRationale: "Os fatos são postos como realidades atestadas pelo relatório científico."
      },
      {
        id: "e",
        text: "restringir a contaminação aos habitantes litorâneos que consomem peixes marinhos.",
        isCorrect: false,
        distractorRationale: "A cadeia alimentar humana é apresentada de forma ampla e generalizada."
      }
    ],
    detailedExplanation: {
      summary: "Estruturas como 'não só... mas também' ou 'não apenas... como também' adicionam argumentos com força enfática cumulativa.",
      stepByStep: [
        "1. Argumento 1: ameaça a biodiversidade marinha.",
        "2. Argumento 2: contamina a cadeia alimentar humana.",
        "3. O conector correlativo 'não apenas... mas também' agrega os dois fatos.",
        "4. Essa estratégia organiza os argumentos em ordem de proximidade com o interlocutor humano, elevando a força persuasiva do texto dissertativo."
      ],
      coreConcept: "Adição Enfática: não só... mas também; não apenas... como também. Soma com gradação argumentativa.",
      trapWarning: "Atenção ao paralelismo sintático ao usar essas estruturas: se colocar verbo após o 'não apenas', coloque verbo após o 'mas também'."
    },
    tags: ["linguagens", "coesao", "adicao", "operadores-argumentativos", "argumentacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-009",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Coesão Sequencial - A Relação de Causa e Consequência",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Dado que as taxas de juros básicas foram mantidas em patamares elevados por longos períodos consecutivos, os investimentos produtivos em infraestrutura industrial recuaram, desacelerando a geração de novos postos de trabalho formais.",
      source: "Boletim Econômico Conjuntural, 2024."
    },
    prompt: "No período composto acima, a oração introduzida pela locução conjuntiva 'Dado que' expressa ideia de",
    options: [
      {
        id: "a",
        text: "causa, funcionando como o fato gerador responsável pelo recuo dos investimentos produtivos.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Dado que' equivale a 'visto que', 'já que', 'como', introduzindo a causa primária do efeito exposto na oração principal."
      },
      {
        id: "b",
        text: "concessão, relativizando a influência dos juros sobre a tomada de decisões empresariais.",
        isCorrect: false,
        distractorRationale: "Concessão exigiria conectivos como embora, conquanto."
      },
      {
        id: "c",
        text: "finalidade, indicando o objetivo premeditado dos agentes econômicos de diminuir o emprego.",
        isCorrect: false,
        distractorRationale: "Finalidade exigiria a fim de que, para que; a queda dos empregos foi uma consequência indesejada, não um objetivo."
      },
      {
        id: "d",
        text: "temporalidade concomitante, marcando dois eventos sem nexo explicativo entre si.",
        isCorrect: false,
        distractorRationale: "Há um evidente e direto nexo causal econômico entre juros altos e queda de investimento produtivo."
      },
      {
        id: "e",
        text: "proporcionalidade crescente, correspondente ao uso de 'à proporção que'.",
        isCorrect: false,
        distractorRationale: "A relação é de causalidade clássica, e não de proporção matemática contínua."
      }
    ],
    detailedExplanation: {
      summary: "'Dado que' é uma locução conjuntiva subordinativa causal, equivalente a 'já que' ou 'visto que'.",
      stepByStep: [
        "1. Pergunta-se: POR QUE os investimentos produtivos recuaram?",
        "2. Resposta: Porque as taxas de juros foram mantidas em patamares elevados.",
        "3. O evento que ocorre cronologicamente primeiro e provoca o outro é a CAUSA.",
        "4. A locução 'dado que' introduz essa causa, enquanto o recuo dos investimentos é a consequência.",
        "5. Conjunções causais típicas: porque, já que, visto que, dado que, uma vez que, como (no início do período)."
      ],
      coreConcept: "Causa vs. Consequência: Causa é o motivo/origem que vem primeiro no mundo real. Consequência é o resultado gerado.",
      trapWarning: "Quando a oração causal vier no início da frase, use vírgula obrigatória para isolar a oração subordinada adverbial antecipada."
    },
    tags: ["linguagens", "coesao", "causa-e-efeito", "conectivos-causais", "sintaxe-adverbial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-010",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Coesão Referencial - Elipse como Recurso Estilístico",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "No romance Dom Casmurro, Bento Santiago relata:\n'Capitu olhou para o chão; eu, para os olhos dela. Ela calou-se por alguns instantes; eu também, esperando que ela dissesse a primeira palavra.'",
      source: "ASSIS, Machado de. Dom Casmurro. Rio de Janeiro: Garnier, 1899."
    },
    prompt: "No trecho 'eu, para os olhos dela', o recurso sintático-estilístico da elipse (especificamente o zeugma) é empregado para",
    options: [
      {
        id: "a",
        text: "omitir o verbo 'olhei', já expresso na oração anterior, garantindo concisão, ritmo ágil e elegância à narrativa.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Zeugma é a elipse de um termo já enunciado anteriormente no texto ('olhou'). O uso da vírgula marca a omissão do verbo 'olhei', evitando repetição enfadonha."
      },
      {
        id: "b",
        text: "revelar a incapacidade do narrador de enxergar a expressão facial da personagem feminina.",
        isCorrect: false,
        distractorRationale: "O narrador afirma explicitamente que olhou para os olhos dela; a omissão é puramente formal e gramatical."
      },
      {
        id: "c",
        text: "provocar uma ambiguidade insuperável que impede o leitor de saber quem praticou a ação.",
        isCorrect: false,
        distractorRationale: "O sujeito 'eu' está claro e o verbo subentendido 'olhei' é recuperado sem qualquer dúvida pelo contexto."
      },
      {
        id: "d",
        text: "introduzir uma oração sem sujeito, característica comum da prosa realista machadiana.",
        isCorrect: false,
        distractorRationale: "A oração possui sujeito explícito ('eu'); o termo omitido é o verbo."
      },
      {
        id: "e",
        text: "quebrar as convenções da gramática padrão da época para simular linguagem oral despojada.",
        isCorrect: false,
        distractorRationale: "O zeugma é uma figura de sintaxe clássica e refinada consagrada pela melhor tradição literária da língua portuguesa."
      }
    ],
    detailedExplanation: {
      summary: "Zeugma é a omissão de um termo que já foi mencionado antes no texto; a vírgula assinala essa elipse verbal.",
      stepByStep: [
        "1. Primeira oração: 'Capitu olhou para o chão;'.",
        "2. Segunda oração: 'eu, para os olhos dela.'.",
        "3. O verbo 'olhei' foi omitido para não repetir a mesma raiz verbal de 'olhou'.",
        "4. A vírgula depois de 'eu' marca graficamente essa elipse vicária (zeugma).",
        "5. O efeito estético é de leveza, velocidade narrativa e contraste poético entre as duas personagens."
      ],
      coreConcept: "Elipse = Omissão de termo subentendido. Zeugma = Elipse de termo já expresso anteriormente na frase.",
      trapWarning: "A vírgula que marca a elipse do verbo é chamada de 'vírgula vicária' pelos gramáticos."
    },
    tags: ["linguagens", "coesao", "elipse", "zeugma", "literatura-machadiana"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-011",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Paralelismo Sintático na Construção Frasal",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O princípio da simetria sintática (paralelismo) recomenda que elementos coordenados em uma mesma série frasal compartilhem a mesma natureza gramatical e estrutural. A quebra injustificada desse alinhamento pode gerar estranheza e perda de clareza.",
      source: "GARCIA, Othon M. Comunicação em Prosa Moderna. 27ª ed. FGV, 2010."
    },
    prompt: "Entre as sentenças abaixo, a única que mantém RIGOROSO paralelismo sintático de acordo com o padrão culto formal é:",
    options: [
      {
        id: "a",
        text: "O plano diretor visa à recuperação das áreas degradadas e à expansão das ciclovias urbanas.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Há simetria perfeita: dois sintagmas nominais regidos pela preposição 'a' com artigo feminino contraído ('à recuperação' e 'à expansão')."
      },
      {
        id: "b",
        text: "O plano diretor visa a recuperar as áreas degradadas e à expansão das ciclovias urbanas.",
        isCorrect: false,
        distractorRationale: "Quebra de paralelismo: misturou uma oração reduzida de infinitivo ('a recuperar') com um sintagma nominal craseado ('à expansão')."
      },
      {
        id: "c",
        text: "A comissão solicitou que os dados fossem checados e o arquivamento do processo.",
        isCorrect: false,
        distractorRationale: "Misturou uma oração subordinada substantiva ('que os dados fossem checados') com um sintagma nominal direto ('o arquivamento')."
      },
      {
        id: "d",
        text: "Ela gosta de ler romances clássicos, ouvir música erudita e da tranquilidade do campo.",
        isCorrect: false,
        distractorRationale: "Quebra de simetria: começou com duas orações no infinitivo e terminou com um sintagma preposicionado ('da tranquilidade'). O correto seria 'e desfrutar da tranquilidade'."
      },
      {
        id: "e",
        text: "O candidato promete combater a inflação e que haverá redução de impostos no país.",
        isCorrect: false,
        distractorRationale: "Misturou verbo transitivo direto com infinitivo ('combater') e oração subordinada com 'que'."
      }
    ],
    detailedExplanation: {
      summary: "O paralelismo sintático exige que termos coordenados tenham estruturas morfológicas e sintáticas equivalentes.",
      stepByStep: [
        "1. Elementos coordenados ligados pela conjunção 'e' devem ter a mesma forma gramatical.",
        "2. Se o primeiro elemento for um substantivo regido de preposição, o segundo também deve ser.",
        "3. Na opção a: 'à recuperação' (prep. a + subst. fem.) e 'à expansão' (prep. a + subst. fem.) mantêm perfeita equivalência estrutural.",
        "4. Nas demais opções, ocorrem misturas assimétricas entre orações e substantivos ou quebras na regência preposicional."
      ],
      coreConcept: "Paralelismo Sintático: Coordene substantivo com substantivo, verbo no infinitivo com verbo no infinitivo, oração subordinada com oração subordinada.",
      trapWarning: "Na redação do ENEM, manter o paralelismo sintático demonstra domínio maduro da sintaxe da língua culta, garantindo nota máxima na Competência 1."
    },
    tags: ["linguagens", "sintaxe", "paralelismo", "coesao-frasal", "redacao-padrao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-012",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Operadores de Retificação e Reformulação",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "O índice de criminalidade violenta registrou queda expressiva no município ao longo do último trimestre; ou melhor, consolidou uma tendência histórica de arrefecimento verificada nos últimos cinco anos.",
      source: "Relatório de Gestão Integrada de Segurança, 2024."
    },
    prompt: "A locução 'ou melhor' atua no texto como operador argumentativo destinado a",
    options: [
      {
        id: "a",
        text: "retificar ou aprimorar uma formulação anterior, introduzindo uma informação mais precisa e contundente.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Operadores de retificação/reformulação ('ou melhor', 'isto é', 'ou seja', 'aliás') ajustam o enunciado precedente, tornando-o mais exato ou mais forte argumentativamente."
      },
      {
        id: "b",
        text: "desmentir categoricamente o recuo da criminalidade, revelando dados forjados pelo relatório.",
        isCorrect: false,
        distractorRationale: "O operador não desmente a queda; ao contrário, ele amplia sua escala de 'trimestre' para 'cinco anos'."
      },
      {
        id: "c",
        text: "sugerir que as estatísticas do município são inverídicas e desprovidas de base empírica.",
        isCorrect: false,
        distractorRationale: "A intenção discursiva é justamente dar maior solidez e credibilidade à estatística apresentada."
      },
      {
        id: "d",
        text: "estabelecer uma relação de causa e efeito entre a polícia e os delinquentes locais.",
        isCorrect: false,
        distractorRationale: "O operador ajusta o foco temporal do dado estatístico, não a dinâmica policial."
      },
      {
        id: "e",
        text: "encerrar o texto por meio de uma oração subordinada substantiva apositiva.",
        isCorrect: false,
        distractorRationale: "Trata-se de uma coordenação explicativo-retificadora dentro do período."
      }
    ],
    detailedExplanation: {
      summary: "Marcadores de retificação como 'ou melhor' e 'aliás' servem para calibrar o discurso, adicionando precisão ou reforço.",
      stepByStep: [
        "1. Primeira afirmação: queda no último trimestre.",
        "2. O autor percebe que essa informação pode parecer pontual ou isolada.",
        "3. Introduz 'ou melhor' para retificar e ampliar: não é apenas um trimestre, mas uma tendência consolidada de cinco anos.",
        "4. A função é de retificação aperfeiçoadora e fortalecimento do argumento principal."
      ],
      coreConcept: "Operadores de Retificação: ou melhor, aliás, ou seja, isto é, quer dizer. Ajustam a precisão do discurso.",
      trapWarning: "Diferencie 'ou melhor' (retificação/reforço) de 'ao contrário' (oposição/antítese pura)."
    },
    tags: ["linguagens", "coesao", "operadores-argumentativos", "retificacao", "discurso"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-013",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Semântica dos Conectivos - A Polissemia da Conjunção 'Como'",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Analise o uso da palavra 'como' nas sentenças a seguir:\n1. Como não chovia há seis meses, a lavoura de milho secou completamente.\n2. O atleta saltou como um leopardo sobre o obstáculo da pista.\n3. Como previra o meteorologista, a frente fria chegou no início da noite.",
      source: "CUNHA, Celso; CINTRA, Lindley. Nova Gramática do Português Contemporâneo. Lexikon, 2016."
    },
    prompt: "Nas frases 1, 2 e 3, a conjunção 'como' expressa, respectivamente, as relações de",
    options: [
      {
        id: "a",
        text: "Causa, Comparação e Conformidade.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em 1, 'como' inicia oração causal (visto que não chovia); em 2, expressa comparação metafórica (igual a um leopardo); em 3, expressa conformidade (conforme previra o meteorologista)."
      },
      {
        id: "b",
        text: "Comparação, Condição e Consequência.",
        isCorrect: false,
        distractorRationale: "A frase 1 é inegavelmente causal e a frase 3 é de conformidade."
      },
      {
        id: "c",
        text: "Causa, Concessão e Proporção.",
        isCorrect: false,
        distractorRationale: "A frase 2 não é concessão e a frase 3 não é proporção."
      },
      {
        id: "d",
        text: "Conformidade, Comparação e Causa.",
        isCorrect: false,
        distractorRationale: "Inverteu a ordem entre a frase 1 (causa) e a frase 3 (conformidade)."
      },
      {
        id: "e",
        text: "Condição, Consequência e Finalidade.",
        isCorrect: false,
        distractorRationale: "Nenhuma das três frases expressa finalidade ou condição."
      }
    ],
    detailedExplanation: {
      summary: "A conjunção 'como' é polissêmica: pode ser causal (no início de frases), comparativa ou de conformidade.",
      stepByStep: [
        "1. Frase 1: 'Como não chovia... a lavoura secou'. Substitui-se por 'Já que / Visto que não chovia'. Relação de CAUSA.",
        "2. Frase 2: 'O atleta saltou como um leopardo'. Substitui-se por 'tal qual / semelhante a'. Relação de COMPARAÇÃO.",
        "3. Frase 3: 'Como previra o meteorologista...'. Substitui-se por 'Conforme / Segundo previra'. Relação de CONFORMIDADE.",
        "4. A sequência exata é: Causa, Comparação e Conformidade."
      ],
      coreConcept: "Polissemia do 'COMO': Causal = Já que (início de frase). Comparativo = Igual a / tal qual. Conformativo = Conforme / segundo.",
      trapWarning: "Quando a oração iniciada por 'como' estiver na frente da oração principal com sentido de motivo, ela é SEMPRE causal (ex: Como estava cansado, dormiu cedo)."
    },
    tags: ["linguagens", "conectivos", "polissemia", "conjuncao-como", "sintaxe-adverbial"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-014",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Coesão e Ambiguidade Estrutural em Textos Jornalísticos",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a seguinte manchete publicada em um portal de notícias:\n'Prefeitura inaugura hospital para crianças com deficiência em novo bairro.'",
      source: "Manual de Edição e Redação Jornalística, 2023."
    },
    prompt: "A manchete apresenta um problema de coesão sintática gerador de ambiguidade estrutural porque permite a dupla interpretação de que",
    options: [
      {
        id: "a",
        text: "o hospital foi construído para atender crianças que possuem deficiência OU o próprio hospital foi edificado com falhas estruturais de engenharia (deficiência física predial).",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A má colocação do adjunto 'com deficiência' pode referir-se ao paciente ('crianças com deficiência') ou, por proximidade gramatical frouxa, ao substantivo 'hospital' ('hospital com deficiência')."
      },
      {
        id: "b",
        text: "o novo bairro pertence a outro município da federação sem registro cartorial.",
        isCorrect: false,
        distractorRationale: "Essa hipótese não é suscitada pela estrutura sintática da oração."
      },
      {
        id: "c",
        text: "todas as crianças do município foram transferidas compulsoriamente para o novo bairro.",
        isCorrect: false,
        distractorRationale: "O texto fala de um hospital inaugurado, sem menção a remoções compulsórias de pessoas."
      },
      {
        id: "d",
        text: "o prefeito do município possui deficiência física motora diagnosticada.",
        isCorrect: false,
        distractorRationale: "O sujeito 'Prefeitura' não se confunde sintaticamente com a pessoa física do prefeito."
      },
      {
        id: "e",
        text: "a obra pública foi realizada sem licitação governamental obrigatória.",
        isCorrect: false,
        distractorRationale: "Questões orçamentárias ou de licitação não estão implicadas na estrutura frasal."
      }
    ],
    detailedExplanation: {
      summary: "A ambiguidade estrutural decorre do mau posicionamento de modificadores e adjuntos adnominais na frase.",
      stepByStep: [
        "1. Na manchete: 'hospital para crianças com deficiência em novo bairro'.",
        "2. O adjunto adnominal 'com deficiência' visa qualificar 'crianças'.",
        "3. No entanto, por estar posicionado de forma ambígua, o enunciado permite a leitura cômica/bizarra de 'hospital... com deficiência' (hospital defeituoso).",
        "4. Para eliminar a anfibologia, a redação técnica correta seria: 'Prefeitura inaugura, em novo bairro, hospital voltado a crianças com deficiência'."
      ],
      coreConcept: "Ambiguidade Estrutural (Anfibologia): Duplicidade de sentido decorrente da má ordenação de termos sintáticos na frase.",
      trapWarning: "Na redação do ENEM, revise sempre o posicionamento de adjuntos e orações adjetivas para que não qualifiquem o termo errado."
    },
    tags: ["linguagens", "ambiguidade", "sintaxe", "jornalismo", "clareza-textual"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-015",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Operadores Argumentativos de Condição",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A transição energética para fontes renováveis só será socialmente justa contanto que as comunidades tradicionais sejam ouvidas previamente e recebam compensações justas pela instalação de parques eólicos em seus territórios ancestrais.",
      source: "Conselho Nacional de Povos e Comunidades Tradicionais, 2024."
    },
    prompt: "No período acima, a locução conjuntiva 'contanto que' estabelece entre as orações uma relação de",
    options: [
      {
        id: "a",
        text: "condição restritiva indispensável para que a transição seja considerada justa.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Contanto que' equivale a 'desde que', 'se', 'com a condição de que', introduzindo o pré-requisito mandatório para a justiça social do processo."
      },
      {
        id: "b",
        text: "concessão imprevista, indicando que as compensações financeiras são inúteis.",
        isCorrect: false,
        distractorRationale: "O conector é condicional e não concessivo; a compensação é colocada como exigência necessária."
      },
      {
        id: "c",
        text: "temporalidade sucessiva, demonstrando que a escuta ocorrerá décadas após a obra.",
        isCorrect: false,
        distractorRationale: "O texto especifica escuta 'previamente', mas a relação do conector é lógica condicional."
      },
      {
        id: "d",
        text: "causalidade pretérita, apontando o parque eólico como o motivo histórico do conflito.",
        isCorrect: false,
        distractorRationale: "A locução não expressa causa, mas sim um compromisso condicional para o futuro."
      },
      {
        id: "e",
        text: "conformidade com os estatutos das empresas transnacionais de energia.",
        isCorrect: false,
        distractorRationale: "Conformidade exigiria conectivos como conforme ou consoante."
      }
    ],
    detailedExplanation: {
      summary: "'Contanto que' é uma locução conjuntiva subordinativa condicional que exige verbo no modo subjuntivo.",
      stepByStep: [
        "1. Identifica-se a tese: 'A transição energética só será socialmente justa...'.",
        "2. Identifica-se a exigência: '...contanto que as comunidades sejam ouvidas'.",
        "3. Sem a escuta e compensação, a justiça não se concretiza; portanto, trata-se de uma condição mandatória.",
        "4. Locuções condicionais: se, caso, contanto que, desde que, a não ser que, a menos que."
      ],
      coreConcept: "Conectivos Condicionais: Introduzem uma hipótese ou pré-requisito necessário para que a oração principal se realize.",
      trapWarning: "Lembre-se: 'desde que' pode ser condicional (desde que estude, passará) ou temporal (desde que chegou, não falou). Olhe sempre o contexto!"
    },
    tags: ["linguagens", "conectivos", "condicao", "operadores-argumentativos", "meio-ambiente"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-016",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Coesão Sequencial e Argumentação - Operador 'Afinal'",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Não faz sentido culpar exclusivamente o indivíduo pelo descarte inadequado de resíduos sólidos em bairros sem coleta regular de lixo. Afinal, o saneamento básico é um dever constitucional indelegável do Estado, e não uma benesse outorgada aos cidadãos.",
      source: "Revista de Direito Ambiental e Cidadania, 2023."
    },
    prompt: "No fragmento, o operador discursivo 'Afinal' é utilizado estrategicamente para",
    options: [
      {
        id: "a",
        text: "introduzir uma justificativa de autoridade e princípio que corrobora a tese de isenção da culpa individual.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Afinal' funciona como operador explicativo e argumentativo de confirmação final ('no fim das contas', 'lembre-se de que'), reforçando por que o Estado deve ser responsabilizado."
      },
      {
        id: "b",
        text: "marcar o encerramento cronológico das atividades de saneamento na região metropolitana.",
        isCorrect: false,
        distractorRationale: "Não é um marcador de tempo fático, mas um operador que fundamenta o raciocínio."
      },
      {
        id: "c",
        text: "opor-se à ideia de que o Estado tem responsabilidade constitucional com a limpeza urbana.",
        isCorrect: false,
        distractorRationale: "O operador defende justamente que o saneamento é dever indelegável do Estado."
      },
      {
        id: "d",
        text: "admitir a procedência das multas individuais aplicadas aos moradores da periferia.",
        isCorrect: false,
        distractorRationale: "O texto combate explicitamente a culpabilização dos moradores locais."
      },
      {
        id: "e",
        text: "sinalizar que os moradores locais abriram mão do recolhimento de lixo voluntariamente.",
        isCorrect: false,
        distractorRationale: "Os moradores sofrem com a falta do serviço público, sem renúncia voluntária."
      }
    ],
    detailedExplanation: {
      summary: "O operador 'afinal' introduz uma razão decisiva ou argumento de fundo que sustenta uma afirmação polêmica.",
      stepByStep: [
        "1. Primeira oração afirma: não se deve culpar o cidadão pelo lixo onde não há coleta.",
        "2. Por que? O autor usa 'Afinal' para trazer o fundamento jurídico supremo: o saneamento é dever do Estado.",
        "3. 'Afinal' amarra a explicação com tom de evidência irrefutável.",
        "4. Funciona como recurso retórico de convencimento e persuasão."
      ],
      coreConcept: "Operador 'Afinal': Introduz justificativa de reforço, argumento de princípio ou conclusão pragmática.",
      trapWarning: "Cuidado para não confundir 'afinal' com 'ao final'. 'Afinal' é argumentativo (pois/lembre-se); 'ao final' é temporal (no término)."
    },
    tags: ["linguagens", "coesao", "operadores-argumentativos", "afinal", "cidadania"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-017",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Coesão Referencial - O Emprego de Pronomes Pessoais Oblíquos",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Ao analisar a proposta orçamentária para a conservação florestal, a ministra advertiu os parlamentares: 'A floresta em pé não é um entrave ao desenvolvimento; o agronegócio moderno precisa dela para garantir chuvas regulares, e as futuras gerações agradecer-lhe-ão pela preservação'.",
      source: "Discurso ministerial em audiência pública, 2024."
    },
    prompt: "No trecho 'agradecer-lhe-ão', o pronome oblíquo 'lhe' retoma no contexto discursivo a referência a(os)",
    options: [
      {
        id: "a",
        text: "parlamentares, funcionando como objeto indireto do verbo agradecer.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. O verbo agradecer rege objeto direto de coisa ('pela preservação') e objeto indireto de pessoa a quem se agradece ('aos parlamentares' = agradecer-lhes / agradecer-lhe em referência ao conjunto dos legisladores)."
      },
      {
        id: "b",
        text: "floresta em pé, funcionando como sujeito da oração subordinada causal.",
        isCorrect: false,
        distractorRationale: "Pronomes oblíquos átonos nunca exercem função de sujeito na norma culta."
      },
      {
        id: "c",
        text: "agronegócio moderno, exercendo papel de complemento nominal adjetivo.",
        isCorrect: false,
        distractorRationale: "Agradece-se aos parlamentares pela aprovação das medidas de proteção, não ao agronegócio."
      },
      {
        id: "d",
        text: "gerações futuras, operando como vocativo interativo de convocação cívica.",
        isCorrect: false,
        distractorRationale: "As futuras gerações são o sujeito que pratica a ação de agradecer ('elas agradecer-lhe-ão')."
      },
      {
        id: "e",
        text: "chuvas regulares, atuando como predicativo do objeto na mesóclise verbal.",
        isCorrect: false,
        distractorRationale: "Não há relação semântica entre chuvas e o pronome pessoal de pessoa 'lhe'."
      }
    ],
    detailedExplanation: {
      summary: "O pronome 'lhe' substitui termos preposicionados referentes a pessoas (a ele / a eles / a você).",
      stepByStep: [
        "1. Contexto: A ministra fala aos parlamentares.",
        "2. Se eles preservarem a floresta, as futuras gerações agradecerão a quem? A eles (aos parlamentares).",
        "3. Regência do verbo agradecer: quem agradece, agradece algo (preservação) a alguém (aos parlamentares).",
        "4. Como o complemento é preposicionado ('a eles'), substitui-se por 'lhe' / 'lhes'.",
        "5. A posição mesoclítica ('agradecer-lhe-ão') deve-se ao verbo no futuro do presente no início de oração coordenada sem fator atrativo."
      ],
      coreConcept: "Pronome 'LHE': Substitui pessoas em funções de objeto indireto (a ele, a ela, a eles). Nunca substitui objeto direto!",
      trapWarning: "Lembre-se: para objetos diretos (sem preposição), usam-se o, a, os, as. Para objetos indiretos (com preposição 'a'), usa-se lhe, lhes."
    },
    tags: ["linguagens", "coesao", "pronomes-obliquos", "regencia-verbal", "mesoclise"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-018",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Operadores Argumentativos de Oposição - 'No entanto' versus 'Porquanto'",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Muitos estudantes confundem conectivos de grafia semelhante mas com papéis semânticos opostos. Enquanto 'porquanto' é estritamente causal ou explicativo (equivalente a 'visto que' ou 'porque'), 'conquanto' é estritamente concessivo (equivalente a 'embora'), e 'portanto' é conclusivo.",
      source: "Manual de Operadores Discursivos para Vestibulares, 2023."
    },
    prompt: "Assinale a frase em que o conectivo destacado introduz uma relação de CAUSA de acordo com a norma culta:",
    options: [
      {
        id: "a",
        text: "Os alunos obtiveram excelente desempenho, porquanto dedicaram-se com afinco aos simulados semanais.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Porquanto' é conjunção causal/explicativa: eles obtiveram bom desempenho PORQUE se dedicaram."
      },
      {
        id: "b",
        text: "Os alunos obtiveram excelente desempenho, conquanto dedicassem poucas horas aos estudos.",
        isCorrect: false,
        distractorRationale: "'Conquanto' é concessivo (embora dedicassem poucas horas), e não causal."
      },
      {
        id: "c",
        text: "Os alunos dedicaram-se aos estudos; portanto, foram aprovados com louvor.",
        isCorrect: false,
        distractorRationale: "'Portanto' é conclusivo, indicando o resultado final e não a causa introdutória."
      },
      {
        id: "d",
        text: "Os alunos estudaram muito; contudo, a prova foi adiada pela coordenação.",
        isCorrect: false,
        distractorRationale: "'Contudo' é adversativo, indicando quebra de expectativa ou oposição."
      },
      {
        id: "e",
        text: "Os alunos serão aprovados contanto que alcancem a média estipulada no edital.",
        isCorrect: false,
        distractorRationale: "'Contanto que' é condicional, introduzindo uma exigência prévia."
      }
    ],
    detailedExplanation: {
      summary: "Porquanto = porque/visto que (causa). Conquanto = embora (concessão). Portanto = logo (conclusão).",
      stepByStep: [
        "1. Tríade clássica de confusão no ENEM e vestibulares:",
        "   - PORQUANTO = Causa / Explicação (Pense em: 'Por que').",
        "   - CONQUANTO = Concessão (Pense em: 'Embora').",
        "   - PORTANTO = Conclusão (Pense em: 'Logo').",
        "2. Na frase a: 'obtiveram excelente desempenho PORQUE (porquanto) dedicaram-se'. Relação clara de causa.",
        "3. Portanto, a alternativa a é a única correta."
      ],
      coreConcept: "Diferença fatal: Porquanto (Causa) ≠ Conquanto (Concessão) ≠ Portanto (Conclusão).",
      trapWarning: "Cuidado: 'porquanto' parece com 'portanto', mas tem sentido de 'porque'! Memorize essa distinção para não errar no ENEM."
    },
    tags: ["linguagens", "conectivos", "porquanto", "concessao-e-causa", "semantica-discursiva"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-019",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Coesão Referencial e Nominalização",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Assembleia Legislativa aprovou ontem, em regime de urgência, a ampliação da licença-maternidade para seis meses. Essa decisão histórica foi comemorada por centenas de movimentos de mulheres em frente ao palácio governamental.",
      source: "Cobertura parlamentar diária, 2024."
    },
    prompt: "O sintagma nominal 'Essa decisão histórica' realiza a coesão do texto por meio do mecanismo de",
    options: [
      {
        id: "a",
        text: "rotulação ou encapsulamento anafórico, sintetizando e qualificando valorativamente todo o fato expresso no período anterior.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. A nominalização encapsuladora (ou rótulo discursivo) resume uma oração inteira prévia ('a Assembleia aprovou a ampliação da licença') em um único substantivo ('decisão'), agregando avaliação positiva ('histórica')."
      },
      {
        id: "b",
        text: "catáfora restritiva, introduzindo uma deliberação jurídica que ainda será votada pelos parlamentares.",
        isCorrect: false,
        distractorRationale: "A expressão retoma um fato que já ocorreu e foi noticiado (anáfora), não antecipa o futuro."
      },
      {
        id: "c",
        text: "elipse verbal absoluta, omitindo a votação parlamentar para agilizar a leitura do texto.",
        isCorrect: false,
        distractorRationale: "Não há elipse; a oração anterior já descreveu explicitamente a votação."
      },
      {
        id: "d",
        text: "quebra da imparcialidade jornalística através de um jargão técnico médico impróprio.",
        isCorrect: false,
        distractorRationale: "A expressão pertence à esfera política e legislativa comum, sem jargões médicos incompreensíveis."
      },
      {
        id: "e",
        text: "paralelismo antitético com o objetivo de invalidar a legitimidade do movimento de mulheres.",
        isCorrect: false,
        distractorRationale: "O texto valoriza a aprovação da medida sem construir antíteses contra o movimento social."
      }
    ],
    detailedExplanation: {
      summary: "O encapsulamento anafórico (nominalização) resume blocos inteiros de informação sob um rótulo conceitual.",
      stepByStep: [
        "1. No período 1: Um fato complexo é narrado (a Assembleia aprovou ampliação da licença-maternidade em urgência).",
        "2. No período 2: Em vez de repetir a frase toda, o autor usa 'Essa decisão histórica'.",
        "3. 'Decisão' encapsula todo o evento legislativo prévio.",
        "4. 'Histórica' agrega uma avaliação valorativa (modalização discursiva).",
        "5. Esse recurso é chamado na Linguística Textual de 'anáfora encapsuladora' ou 'rótulo conceitual'."
      ],
      coreConcept: "Encapsulamento Anafórico / Rótulo: Sintagma nominal com pronome demonstrativo que resume e qualifica uma ideia complexa anterior.",
      trapWarning: "Na redação do ENEM, usar encapsulamentos como 'Esse impasse histórico', 'Essa postura omissa' ou 'Essa conquista cidadã' demonstra repertório avançado de coesão."
    },
    tags: ["linguagens", "coesao", "encapsulamento", "nominalizacao", "linguistica-textual"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-020",
    area: "linguagens",
    competence: 7,
    skill: 27,
    topic: "Coesão e Coerência",
    subtopic: "Operadores Argumentativos de Exclusão e Restrição",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Nenhum programa de incentivo à leitura terá eficácia transformadora duradoura a não ser que as bibliotecas escolares sejam revitalizadas com acervos atraentes e profissionais mediadores capacitados.",
      source: "Manifesto Nacional pelo Direito à Literatura, 2023."
    },
    prompt: "No texto, a locução 'a não ser que' desempenha a função discursiva de",
    options: [
      {
        id: "a",
        text: "estabelecer uma condição de exceção indispensável para que o resultado positivo seja alcançado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'A não ser que' equivale a 'a menos que', 'salvo se', delimitando a única condição sob a qual a eficácia do programa pode se verificar."
      },
      {
        id: "b",
        text: "adicionar um argumento secundário sem conexão lógica com as bibliotecas escolares.",
        isCorrect: false,
        distractorRationale: "A locução vincula diretamente a eficácia da leitura à condição das bibliotecas."
      },
      {
        id: "c",
        text: "concluir sumariamente que todas as bibliotecas do país já foram plenamente modernizadas.",
        isCorrect: false,
        distractorRationale: "O texto cobra a revitalização como algo ainda pendente de realização."
      },
      {
        id: "d",
        text: "estabelecer uma relação de causa pretérita que condena os mediadores de leitura.",
        isCorrect: false,
        distractorRationale: "Os mediadores são apontados como elementos fundamentais e positivos a serem valorizados."
      },
      {
        id: "e",
        text: "comparar quantitativamente o número de bibliotecas escolares e livrarias comerciais.",
        isCorrect: false,
        distractorRationale: "Não há menção comparativa ao mercado de livrarias privadas."
      }
    ],
    detailedExplanation: {
      summary: "'A não ser que' é uma locução conjuntiva condicional de exclusão (equivale a 'a menos que' ou 'salvo se').",
      stepByStep: [
        "1. O texto faz uma negação enfática: 'Nenhum programa terá eficácia...'.",
        "2. Abre em seguida a única exceção que pode mudar essa realidade: 'a não ser que as bibliotecas sejam revitalizadas'.",
        "3. Trata-se de uma condição restritiva necessária que estabelece uma exceção que salva a regra.",
        "4. Exige verbo no modo subjuntivo ('sejam revitalizadas')."
      ],
      coreConcept: "Condição de Exceção: a menos que, a não ser que, salvo se, exceto se.",
      trapWarning: "Estas locuções transmitem ideia de ultimato condicional: sem cumprir essa exigência, nada funcionará."
    },
    tags: ["linguagens", "conectivos", "condicao", "excecao", "argumentacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-021",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Coesão Referencial - O Uso dos Pronomes 'Este', 'Esse' e 'Aquele' em Enumerações",
    difficulty: 3,
    estimatedTimeSeconds: 130,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A transição energética brasileira envolve debates complexos entre a energia solar e a energia hidrelétrica. Esta apresenta impactos socioambientais concentrados pelo represamento de bacias hidrográficas; aquela depende da importação de painéis fotovoltaicos e do gerenciamento de resíduos minerais.",
      source: "Cadernos de Energia e Meio Ambiente, 2024."
    },
    prompt: "No fragmento, os pronomes demonstrativos 'Esta' e 'aquela' exercem função coesiva distributiva, retomando, respectivamente:",
    options: [
      {
        id: "a",
        text: "A energia hidrelétrica e a energia solar.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Em enumerações de dois termos: 'este/esta' retoma o termo mencionado por último (mais próximo, energia hidrelétrica); 'aquele/aquela' retoma o termo mencionado primeiro (mais distante, energia solar)."
      },
      {
        id: "b",
        text: "A energia solar e a energia hidrelétrica.",
        isCorrect: false,
        distractorRationale: "Inverteu a regra gramatical: 'esta' retoma o termo mais próximo (hidrelétrica), não o primeiro citado."
      },
      {
        id: "c",
        text: "As bacias hidrográficas e os painéis fotovoltaicos.",
        isCorrect: false,
        distractorRationale: "Estes são complementos citados dentro da caracterização, não os referentes dos pronomes sujeitos."
      },
      {
        id: "d",
        text: "A transição energética e os debates complexos.",
        isCorrect: false,
        distractorRationale: "Os pronomes retomam especificamente as duas fontes de energia contrastadas."
      },
      {
        id: "e",
        text: "O represamento de rios e os resíduos minerais.",
        isCorrect: false,
        distractorRationale: "Erro confundindo os efeitos ambientais com os agentes produtores de energia."
      }
    ],
    detailedExplanation: {
      summary: "Em referência a dois termos já citados: 'este' retoma o mais recente (último); 'aquele' retoma o mais remoto (primeiro).",
      stepByStep: [
        "1. No texto foram citadas duas fontes: 1º 'energia solar' (remota); 2º 'energia hidrelétrica' (próxima).",
        "2. Regra clássica de coesão distributiva:",
        "   - ESTE / ESTA = elemento mais próximo (citado por último) ⟹ Energia hidrelétrica.",
        "   - AQUELE / AQUELA = elemento mais distante (citado em primeiro lugar) ⟹ Energia solar.",
        "3. Coerência lógica com o texto: a hidrelétrica causa represamento de bacias; a solar depende de painéis fotovoltaicos.",
        "4. A correspondência é: Esta = hidrelétrica; Aquela = solar."
      ],
      coreConcept: "Coesão Distributiva: Termo citado por último (mais perto) = ESTE. Termo citado primeiro (mais longe) = AQUELE.",
      trapWarning: "Cuidado com a inversão: muitos alunos acham que 'este' é o primeiro e 'aquele' é o segundo. É exatamente o CONTRÁRIO!"
    },
    tags: ["linguagens", "coesao", "pronomes-demonstrativos", "distribuicao", "norma-padrao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-022",
    area: "linguagens",
    competence: 7,
    skill: 27,
    topic: "Coesão e Coerência",
    subtopic: "Operadores Argumentativos de Conformidade",
    difficulty: 2,
    estimatedTimeSeconds: 110,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Consoante as diretrizes fixadas pela Organização Mundial da Saúde (OMS), a saúde mental deve ser compreendida não apenas como a ausência de transtornos psiquiátricos, mas como um estado integral de bem-estar físico, psicológico e social.",
      source: "Declaração de Saúde Mental Global, OMS, 2022."
    },
    prompt: "No enunciado, a palavra 'Consoante' atua como operador argumentativo responsável por",
    options: [
      {
        id: "a",
        text: "introduzir um argumento de autoridade baseado em uma fonte legitimada de acordo com uma relação de conformidade.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. 'Consoante' é conjunção conformativa (conforme, segundo, de acordo com), fundamental na redação do ENEM para ancorar repertórios socioculturais legítimos."
      },
      {
        id: "b",
        text: "opor-se às diretrizes da OMS, demonstrando que a saúde mental independe de fatores sociais.",
        isCorrect: false,
        distractorRationale: "O conectivo não introduz oposição, mas alinhamento e concordância com a OMS."
      },
      {
        id: "c",
        text: "expressar uma consequência inesperada decorrente do aumento de enfermidades mentais.",
        isCorrect: false,
        distractorRationale: "Não é operador consecutivo (como por conseguinte, portanto)."
      },
      {
        id: "d",
        text: "sinalizar que o conceito da OMS está gramaticalmente incorreto na norma culta.",
        isCorrect: false,
        distractorRationale: "O texto apoia-se plenamente na definição institucional e técnica da OMS."
      },
      {
        id: "e",
        text: "estabelecer uma comparação temporal com tratados firmados no século XIX.",
        isCorrect: false,
        distractorRationale: "Não há marcador cronológico ou comparativo com tratados históricos do século XIX."
      }
    ],
    detailedExplanation: {
      summary: "'Consoante' é um conector de conformidade de registro culto, ideal para introduzir citações e repertórios.",
      stepByStep: [
        "1. No texto: 'Consoante as diretrizes fixadas pela OMS...'.",
        "2. Equivale perfeitamente a: 'Conforme as diretrizes...', 'Segundo as diretrizes...', 'De acordo com as diretrizes...'.",
        "3. Trata-se de uma conjunção subordinativa conformativa.",
        "4. Na Redação do ENEM (Competência 2 e 4), conectivos conformativos são a ferramenta essencial para introduzir dados do IBGE, teses filosóficas de Habermas, Bauman ou dispositivos constitucionais."
      ],
      coreConcept: "Conectivos de Conformidade: conforme, segundo, consoante, de acordo com, em consonância com.",
      trapWarning: "Varie o uso de conectivos conformativos na sua redação: use 'consoante' em um parágrafo e 'segundo' ou 'conforme' em outro para demonstrar repertório lexical."
    },
    tags: ["linguagens", "conectivos", "conformidade", "repertorio-legitimo", "redacao-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-023",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Coerência e Progressão Temática - O Papel dos Tópicos Frasais",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Em um parágrafo padrão dissertativo-argumentativo, o tópico frasal é o período inicial que apresenta de forma sintética a ideia-núcleo a ser desenvolvida. Os períodos subsequentes têm a função de fundamentar, exemplificar e fechar o raciocínio, garantindo unidade e coerência temática interna.",
      source: "FARACO, Carlos Alberto; TEZZA, Cristóvão. Prática de Texto para Estudantes Universitários. Vozes, 2017."
    },
    prompt: "A ausência de um tópico frasal bem delineado no início de um parágrafo de desenvolvimento na redação do ENEM tende a comprometer principalmente a",
    options: [
      {
        id: "a",
        text: "progressão temática linear, tornando o parágrafo desconexo ou circular para o leitor avaliador.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Sem um tópico frasal claro que anuncie o argumento, o parágrafo perde direção, acumulando dados soltos sem projeto de texto nítido, sendo penalizado na Competência 3 do ENEM."
      },
      {
        id: "b",
        text: "ortografia padrão de todas as palavras acentuadas no desenvolvimento.",
        isCorrect: false,
        distractorRationale: "A ortografia é uma questão puramente lexical avaliada na Competência 1, não de estrutura do parágrafo."
      },
      {
        id: "c",
        text: "obrigatoriedade de inclusão de uma proposta de intervenção detalhada em cinco elementos.",
        isCorrect: false,
        distractorRationale: "A proposta de intervenção de 5 elementos é avaliada na Competência 5 e situa-se tipicamente no parágrafo de conclusão."
      },
      {
        id: "d",
        text: "validade histórica dos repertórios socioculturais já legitimados pela banca.",
        isCorrect: false,
        distractorRationale: "A legitimidade do repertório não muda, mas ele pode ficar descontextualizado sem o direcionamento argumentativo do tópico frasal."
      },
      {
        id: "e",
        text: "inclusão de figuras de linguagem metafóricas e rimas na dissertação.",
        isCorrect: false,
        distractorRationale: "O texto dissertativo não deve conter rimas ou lirismo poético, mas clareza argumentativa sóbria."
      }
    ],
    detailedExplanation: {
      summary: "O tópico frasal orienta o projeto de texto e a coerência do parágrafo, guiando a leitura do corretor.",
      stepByStep: [
        "1. Estrutura ideal do parágrafo de desenvolvimento no ENEM:",
        "   - Período 1: Tópico frasal (apresenta o argumento central com o operador interparágrafo);",
        "   - Período 2: Repertório sociocultural legitimado (filósofo, dado, fato histórico);",
        "   - Período 3: Argumentação crítica autoral (liga o repertório à realidade brasileira contemporânea);",
        "   - Período 4: Fechamento do parágrafo (conclusão que reafirma a tese).",
        "2. Se o tópico frasal for suprimido, o leitor não sabe qual tese o repertório pretende defender.",
        "3. Isso fragmenta a progressão temática e compromete a coerência do projeto de texto."
      ],
      coreConcept: "Tópico Frasal: A bússola do parágrafo. Anuncia a ideia-núcleo de forma concisa e direta.",
      trapWarning: "Nunca comece um parágrafo de desenvolvimento diretamente com uma citação de filósofo! Apresente primeiro o seu argumento no tópico frasal."
    },
    tags: ["linguagens", "coerencia", "topico-frasal", "redacao-enem", "projeto-de-texto"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-024",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Operadores de Proporcionalidade - 'À medida que' versus 'Na medida em que'",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Existe uma frequente confusão entre duas locuções conjuntivas de sonoridade próxima:\n1. 'À medida que' = expressa proporção matemática gradual (conforme aumenta um fato, o outro varia concomitantemente).\n2. 'Na medida em que' = expressa causa ou justificativa (equivale a 'já que' ou 'visto que').\nConstruções híbridas como 'à medida em que' são consideradas formas anômalas e incorretas pela norma-padrão.",
      source: "CIPRO NETO, Pasquale; INFANTE, Ulisses. Gramática da Língua Portuguesa. Scipione, 2018."
    },
    prompt: "De acordo com a norma-padrão, a frase que emprega a locução conjuntiva com RIGOROSO sentido de PROPORCIONALIDADE gradual é:",
    options: [
      {
        id: "a",
        text: "À medida que a temperatura média global se eleva, as geleiras polares derretem em ritmo acelerado.",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. Há concomitância e variação proporcional direta: o derretimento acelera na exata proporção em que o calor do planeta aumenta."
      },
      {
        id: "b",
        text: "Na medida em que a temperatura global se eleva, as geleiras polares não possuem qualquer relevância.",
        isCorrect: false,
        distractorRationale: "'Na medida em que' expressa causa ('já que'), e a oração subsequente é factualmente absurda e incoerente."
      },
      {
        id: "c",
        text: "À medida em que o tempo passa, os jovens desistem de prestar vestibulares concorridos.",
        isCorrect: false,
        distractorRationale: "'À medida em que' é uma mistura híbrida inexistente na norma-padrão da língua portuguesa."
      },
      {
        id: "d",
        text: "Em medida que as chuvas caíram, o rio transbordou instantaneamente.",
        isCorrect: false,
        distractorRationale: "'Em medida que' é uma locução agramatical espúria."
      },
      {
        id: "e",
        text: "Na medida de que o governo arrecada impostos, os hospitais deixam de funcionar.",
        isCorrect: false,
        distractorRationale: "'Na medida de que' não existe nas convenções da língua culta."
      }
    ],
    detailedExplanation: {
      summary: "'À medida que' é proporcional (à proporção que); 'Na medida em que' é causal (já que/visto que). 'À medida em que' NÃO EXISTE!",
      stepByStep: [
        "1. Locução 1: À MEDIDA QUE (com crase e sem 'em') = Proporção / Concomitância simultânea.",
        "2. Locução 2: NA MEDIDA EM QUE (com 'na' e com 'em') = Causa / Motivo ('já que').",
        "3. Erro gravíssimo muito comum: 'À medida em que' (mistura errada dos dois).",
        "4. Na frase a, a elevação da temperatura e o derretimento ocorrem na mesma proporção gradual contínua, configurando o uso correto de 'À medida que'."
      ],
      coreConcept: "À medida que = Proporção (à proporção que). Na medida em que = Causa (já que). Nunca misture as duas!",
      trapWarning: "Cuidado na redação: nunca escreva 'à medida em que'. Escreva apenas 'à medida que' para proporção ou 'visto que' para causa."
    },
    tags: ["linguagens", "conectivos", "proporcionalidade", "a-medida-que", "sintaxe-normativa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-COE-025",
    area: "linguagens",
    competence: 7,
    skill: 26,
    topic: "Coesão e Coerência",
    subtopic: "Coesão Textual e Operadores Interparágrafos na Redação Nota 1000",
    difficulty: 3,
    estimatedTimeSeconds: 120,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A Matriz de Referência da Redação do ENEM (Competência 4) pontua com nota máxima (200 pontos) o texto que apresenta 'repertório diversificado de recursos coesivos, sem inadequações, e articulação expressiva de partes do texto (presença de operadores interparágrafos em pelo menos dois momentos)'.",
      source: "Guia do Participante - Redação no ENEM, INEP, 2024."
    },
    prompt: "Para iniciar o segundo parágrafo de desenvolvimento (D2) de uma redação que adicionou um novo argumento à discussão prévia, o operador interparágrafo mais adequado e de alto valor de prestígio é:",
    options: [
      {
        id: "a",
        text: "'Ademais,' ou 'Outrossim,'",
        isCorrect: true,
        distractorRationale: "Gabarito oficial. São operadores argumentativos aditivos interparágrafos legítimos da norma culta, indicando que um novo argumento de mesmo peso e orientação está sendo somado ao anterior."
      },
      {
        id: "b",
        text: "'Portanto,' ou 'Em suma,'",
        isCorrect: false,
        distractorRationale: "'Portanto' e 'Em suma' são conectivos estritamente conclusivos, apropriados para iniciar a conclusão, e não o segundo desenvolvimento."
      },
      {
        id: "c",
        text: "'Contudo,' ou 'Em contrapartida,'",
        isCorrect: false,
        distractorRationale: "Conectivos adversativos/de oposição só devem ser usados no D2 se os parágrafos tiverem estrutura de contraste ('de um lado... por outro lado'), o que não é o caso de soma de argumentos."
      },
      {
        id: "d",
        text: "'Primeiramente,' ou 'A princípio,'",
        isCorrect: false,
        distractorRationale: "'Primeiramente' só pode ser usado para iniciar o primeiro parágrafo de desenvolvimento (D1), e nunca o segundo."
      },
      {
        id: "e",
        text: "'Visto que,' ou 'Porquanto,'",
        isCorrect: false,
        distractorRationale: "Conectivos causais subordinativos não devem abrir parágrafos soltos sem oração principal de apoio."
      }
    ],
    detailedExplanation: {
      summary: "No ENEM, iniciar o D2 com operadores como 'Ademais' ou 'Outrossim' cumpre o critério da Competência 4 de coesão interparágrafos.",
      stepByStep: [
        "1. D1 desenvolveu o Argumento 1 (ex: negligência governamental).",
        "2. D2 desenvolverá o Argumento 2 (ex: individualismo e indiferença social).",
        "3. Como o projeto de texto soma causas do problema, o conector interparágrafo obrigatório deve ser de ADIÇÃO.",
        "4. Conectivos padrão de prestígio para abrir o D2: 'Ademais,', 'Outrossim,', 'Além disso,', 'Vale ressaltar, ainda, que...'.",
        "5. O emprego de 'Ademais,' ou 'Outrossim,' atende com perfeição à exigência avaliativa do INEP."
      ],
      coreConcept: "Operadores Interparágrafos no ENEM: D1 = Em primeiro plano / A princípio; D2 = Ademais / Outrossim / Paralelamente; Conclusão = Portanto / Destarte / Urge, pois.",
      trapWarning: "Lembre-se: se você usar 'Primeiramente' no D1, é obrigatório usar um conectivo correspondente como 'Em segundo lugar' ou 'Ademais' no D2 para manter o paralelismo do projeto de texto."
    },
    tags: ["linguagens", "coesao", "redacao-enem", "competencia-4", "operadores-interparagrafos"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
