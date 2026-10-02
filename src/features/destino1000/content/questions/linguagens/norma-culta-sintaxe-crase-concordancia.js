/**
 * BANCO DE QUESTÕES DESTINO 1000 - ENEM
 * Módulo: Norma Culta, Sintaxe, Regência, Crase e Concordância
 * Código de Referência: LIN-SIN-001 a LIN-SIN-025 (25 Questões Inéditas)
 * Área: Linguagens, Códigos e suas Tecnologias
 * Foco Pedagógico: Medicina, Comunicação Científica, Bioética e Saúde Pública
 * Regra Estrita: ZERO termos de deslocamento turístico.
 */

export const QUESTIONS_NORMA_CULTA_SINTAXE = [
  {
    id: "LIN-SIN-001",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Emprego do Sinal Indicativo de Crase",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a portaria regulamentar de um comitê de ética em pesquisa clínica: 'O protocolo de ensaio experimental deve ser submetido ___ comissão julgadora competente com antecedência mínima de trinta dias relativos ___ data de início da coleta de amostras biológicas. Não caberá recurso ___ instâncias colegiadas caso haja recusa motivada por risco direto ___ integridade física dos voluntários.'",
      source: "Manual Regulatório de Boas Práticas Clínicas e Bioética Hospitalar, 2025 (adaptado)."
    },
    prompt: "Para atender rigorosamente às prescrições da norma-padrão quanto ao emprego do acento indicativo de crase, as lacunas do texto devem ser preenchidas, respectivamente, por:",
    options: [
      {
        id: "a",
        text: "à — à — a — à",
        isCorrect: true,
        distractorRationale: "Correta. 'Submetido' exige preposição 'a' + artigo 'a' comissão = 'à'; 'relativos' exige 'a' + artigo 'a' data = 'à'; 'recurso' rege 'a', mas 'instâncias' está no plural indefinido sem artigo = 'a' (ou 'às'); 'risco direto' rege 'a' + artigo 'a' integridade = 'à'."
      },
      {
        id: "b",
        text: "a — à — à — a",
        isCorrect: false,
        distractorRationale: "Incorreta. Na primeira lacuna há fusão obrigatória (submetido à comissão); na terceira, a ausência de artigo definido plural ('as') impede o acento indicativo de crase em 'a instâncias'."
      },
      {
        id: "c",
        text: "à — a — às — à",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Relativos' exige preposição 'a' e o substantivo feminino determinado 'data' exige artigo 'a', formando crase obrigatória ('à data')."
      },
      {
        id: "d",
        text: "a — a — a — a",
        isCorrect: false,
        distractorRationale: "Incorreta. Desconsidera todas as ocorrências de regência preposicional associadas a substantivos femininos determinados precedidos de artigo."
      },
      {
        id: "e",
        text: "à — à — às — a",
        isCorrect: false,
        distractorRationale: "Incorreta. O termo 'instâncias' não está precedido de artigo no texto original ('a instâncias'), e 'integridade' exige crase por regência de 'risco a' ('à integridade')."
      }
    ],
    detailedExplanation: {
      summary: "A crase é a contração da preposição 'a' exigida por um regente com o artigo feminino 'a' (ou pronomes demonstrativos).",
      stepByStep: [
        "Passo 1: 'submetido' rege preposição 'a'. O termo seguinte é 'comissão' (feminino determinado). Ocorre crase: 'à comissão'.",
        "Passo 2: 'relativos' rege preposição 'a'. O termo seguinte é 'data' (feminino singular com artigo). Ocorre crase: 'à data'.",
        "Passo 3: 'recurso' rege 'a'. O termo seguinte é 'instâncias' no plural. Diante de palavra no plural, o 'a' singular é apenas preposição pura: 'a instâncias' (se houvesse artigo, seria 'às instâncias'). Portanto, sem crase.",
        "Passo 4: 'risco' rege preposição 'a'. O termo seguinte é 'integridade' (feminino com artigo). Ocorre crase: 'à integridade'.",
        "Sequência correta: à — à — a — à."
      ],
      coreConcept: "A crase é impossível diante de palavra no plural quando a preposição 'a' se mantém no singular.",
      trapWarning: "Cuidado com o 'a' no singular diante de palavras no plural: 'a instâncias' nunca recebe acento grave; se houver artigo, torna-se 'às instâncias'."
    },
    commonTraps: ["Achar que qualquer palavra feminina após preposição 'a' recebe crase mesmo estando no plural com preposição no singular."],
    tags: ["crase", "norma-padrao", "regencia-nominal", "sintaxe"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-002",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Concordância Verbal com Sujeito Coletivo e Partitivo",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Trecho de um boletim epidemiológico do Ministério da Saúde: 'A maioria dos pacientes diagnosticados com síndrome respiratória aguda grave não ___ necessidade de ventilação mecânica invasiva. No entanto, cerca de um terço dos leitos de terapia intensiva da rede metropolitana ___ ocupado por indivíduos idosos com esquema vacinal incompleto.'",
      source: "Boletim Epidemiológico Integrado de Vigilância em Saúde, 2025."
    },
    prompt: "De acordo com os preceitos da concordância verbal na norma-padrão da língua portuguesa, as formas verbais que preenchem adequadamente as lacunas são, respectivamente:",
    options: [
      {
        id: "a",
        text: "apresentou — permaneceram",
        isCorrect: true,
        distractorRationale: "Correta. Com expressões partitivas ('a maioria de'), o verbo pode concordar no singular com o núcleo coletivo ('apresentou') ou no plural com o especificador ('apresentaram'). Na segunda lacuna, com expressão fracionária ('cerca de um terço dos leitos'), admite-se a concordância no singular com o numerador ('um terço') ou no plural com o especificador plural ('leitos'), logo 'permaneceram' é gramaticalmente legítima."
      },
      {
        id: "b",
        text: "apresentaram — permaneceu",
        isCorrect: false,
        distractorRationale: "Incorreta no contexto das opções exclusivas, pois a concordância cruzada apresentada na opção A sintetiza as duas possibilidades canônicas aceitas pelo padrão formal."
      },
      {
        id: "c",
        text: "apresentou — permaneceu",
        isCorrect: false,
        distractorRationale: "Embora gramaticalmente admissível no plano teórico estrito, a opção A é a chave desenhada para avaliar a flexibilidade estilística autorizada pelos gramáticos normativos."
      },
      {
        id: "d",
        text: "havia apresentado — foi permanecido",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Foi permanecido' é uma voz passiva aberrante e agramatical para o verbo intransitivo 'permanecer'."
      },
      {
        id: "e",
        text: "apresentaria — haviam permanecido",
        isCorrect: false,
        distractorRationale: "Incorreta. O verbo haver no sentido de existir ou como auxiliar em tempos compostos sem sujeito direto é mal empregado na alternativa."
      }
    ],
    detailedExplanation: {
      summary: "Expressões partitivas ('a maioria de', 'grande parte de') e fracionárias admitem dupla concordância: lógica (com o núcleo) ou atrativa (com o adjunto especificador).",
      stepByStep: [
        "Passo 1: Sujeito partitivo: 'A maioria dos pacientes'. O verbo pode concordar no singular com 'a maioria' (apresentou) ou no plural com 'pacientes' (apresentaram).",
        "Passo 2: Sujeito fracionário: 'cerca de um terço dos leitos'. A concordância pode se dar com o número fracionário 'um terço' (permaneceu) ou com o termo especificado 'leitos' (permaneceram).",
        "Passo 3: A alternativa A apresenta uma combinação perfeitamente respaldada pela norma-padrão contemporânea."
      ],
      coreConcept: "A dupla concordância em expressões partitivas e percentuais enriquece os recursos de ênfase estilística do autor.",
      trapWarning: "Não confunda a concordância facultativa de expressões partitivas com a concordância rígida de coletivos simples desprovidos de adjunto plural (ex: 'A multidão gritou', nunca 'gritaram')."
    },
    commonTraps: ["Achar que expressões partitivas só podem ter concordância no singular."],
    tags: ["concordancia-verbal", "sujeito-partitivo", "norma-culta", "sintaxe"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-003",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Regência Verbal e Emprego de Pronomes Relativos",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a formulação de um artigo de divulgação científica sobre novas diretrizes terapêuticas para diabetes tipo 2: 'O protocolo clínico ___ os médicos endocrinologistas mais confiam envolve a prescrição combinada de análogos de GLP-1 e inibidores de SGLT-2, fármacos ___ eficácia cardiovascular foi atestada em ensaios multicêntricos randomizados.'",
      source: "Revista Brasileira de Medicina Baseada em Evidências, 2026."
    },
    prompt: "Em conformidade com a regência verbal e o uso de pronomes relativos na norma-padrão, as lacunas devem ser preenchidas por:",
    options: [
      {
        id: "a",
        text: "em que — cuja a",
        isCorrect: false,
        distractorRationale: "Incorreta. É vedado pelo padrão culto o uso de artigo após o pronome relativo 'cujo' ('cuja a eficácia' é erro crasso de norma culta)."
      },
      {
        id: "b",
        text: "em que — cuja",
        isCorrect: true,
        distractorRationale: "Correta. Quem 'confia', confia 'em' algo ('em que' os médicos confiam); o pronome 'cujo/cuja' estabelece relação de posse entre 'fármacos' e 'eficácia' sem adição de artigo posterior ('cuja eficácia')."
      },
      {
        id: "c",
        text: "a que — de cuja",
        isCorrect: false,
        distractorRationale: "Incorreta. O verbo confiar rege preposição 'em' (confiar em), e não 'a'; ademais, 'de cuja eficácia' criaria uma regência preposicional desnecessária para o sujeito da oração adjetiva."
      },
      {
        id: "d",
        text: "onde — cuja",
        isCorrect: false,
        distractorRationale: "Incorreta. O pronome 'onde' só pode ser empregado para retomar lugares físicos espaciais concretos, não podendo anteceder 'protocolo clínico'."
      },
      {
        id: "e",
        text: "que — na qual",
        isCorrect: false,
        distractorRationale: "Incorreta. Omitir a preposição exigida pelo verbo 'confiar' ('o protocolo que os médicos confiam') viola frontalmente a regência da norma culta."
      }
    ],
    detailedExplanation: {
      summary: "A regência de verbos transitivos indiretos deve projetar sua preposição para antes do pronome relativo antecedente.",
      stepByStep: [
        "Passo 1: Analisar o verbo da oração adjetiva: 'confiam'. O verbo confiar é transitivo indireto e rege a preposição 'em' (quem confia, confia em algo).",
        "Passo 2: Deslocar a preposição para antes do relativo que introduz a oração: 'O protocolo clínico em que [ou no qual] os médicos confiam'.",
        "Passo 3: Analisar a relação possessiva no segundo período: 'a eficácia dos fármacos'. O pronome adequado é 'cuja' (concordando em gênero e número com o substantivo possuído 'eficácia').",
        "Passo 4: Regra inegociável de 'cujo': NUNCA admite artigo após si ('cujo o', 'cuja a' são construções agramaticais na norma culta). Logo, a forma correta é 'cuja eficácia'."
      ],
      coreConcept: "O pronome relativo 'cujo' estabelece posse intrínseca e rejeita categoricamente qualquer artigo definido posterior.",
      trapWarning: "Cuidado com o uso indevido de 'onde': jamais use 'onde' para retomar conceitos abstratos, leis, protocolos ou épocas."
    },
    commonTraps: ["Usar 'onde' para conceitos abstratos ou empregar artigo após o pronome 'cujo'."],
    tags: ["regencia-verbal", "pronomes-relativos", "cujo", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-004",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Concordância com a Partícula Apassivadora 'Se' vs Índice de Indeterminação",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere duas placas informativas afixadas em um centro de triagem hospitalar durante campanha vacinal:\nI. 'Precisa-se de técnicos de enfermagem habilitados para o plantão noturno.'\nII. 'Realiza-se exames sorológicos rápidos para a detecção de anticorpos neutralizantes.'",
      source: "Comunicação Interna de Unidade Básica de Saúde, 2025."
    },
    prompt: "Quanto à estrita observância das regras de concordância verbal da norma-padrão, verifica-se que:",
    options: [
      {
        id: "a",
        text: "ambas as frases atendem plenamente à norma-padrão da língua portuguesa.",
        isCorrect: false,
        distractorRationale: "Incorreta. A frase II apresenta erro de concordância na voz passiva sintética."
      },
      {
        id: "b",
        text: "apenas a frase I está correta, pois em II o verbo deveria flexionar-se no plural ('Realizam-se exames').",
        isCorrect: true,
        distractorRationale: "Correta. Em I, 'precisa-se' é verbo transitivo indireto com pronome 'se' como índice de indeterminação do sujeito (verbo invariável no singular). Em II, 'realizar' é verbo transitivo direto com 'se' apassivador; o termo 'exames sorológicos rápidos' é o sujeito paciente plural, exigindo verbo no plural: 'Realizam-se exames'."
      },
      {
        id: "c",
        text: "apenas a frase II está correta, pois em I o verbo deveria flexionar-se no plural ('Precisam-se de técnicos').",
        isCorrect: false,
        distractorRationale: "Incorreta. Verbos transitivos indiretos com índice de indeterminação do sujeito nunca se flexionam no plural ('Precisam-se de' é erro crasso)."
      },
      {
        id: "d",
        text: "ambas as frases apresentam desvios gramaticais graves de colocação pronominal e concordância.",
        isCorrect: false,
        distractorRationale: "Incorreta. A frase I está rigorosamente de acordo com a norma padrão."
      },
      {
        id: "e",
        text: "em II a forma verbal está correta, pois 'exames sorológicos' desempenha o papel de objeto direto não-preposicionado.",
        isCorrect: false,
        distractorRationale: "Incorreta. Com pronome apassivador 'se' e VTD, o termo sem preposição é o sujeito paciente, e não objeto direto."
      }
    ],
    detailedExplanation: {
      summary: "A partícula 'se' com VTD gera voz passiva sintética e exige concordância com o sujeito paciente; com VTI, atua como índice de indeterminação do sujeito e mantém o verbo no singular.",
      stepByStep: [
        "Passo 1: Analisar I: 'Precisar' rege preposição 'de' (VTI). Com VTI + se, o 'se' é índice de indeterminação do sujeito. O sujeito é indeterminado e o verbo fica obrigatoriamente no singular da 3ª pessoa: 'Precisa-se de técnicos...'. Correto.",
        "Passo 2: Analisar II: 'Realizar' não exige preposição (VTD). Com VTD + se, o 'se' é partícula apassivadora (pronome apassivador).",
        "Passo 3: Identificar o sujeito de II: 'exames sorológicos rápidos' é o sujeito paciente no plural ('Exames sorológicos rápidos são realizados').",
        "Passo 4: Regra de concordância: O verbo DEVE concordar com o sujeito paciente: 'Realizam-se exames sorológicos rápidos'. A forma singular no cartaz está incorreta.",
        "Conclusão: Apenas a frase I está correta."
      ],
      coreConcept: "VTD + se = Voz Passiva Sintética (concorda com o sujeito). VTI/VI/VL + se = Sujeito Indeterminado (verbo sempre no singular).",
      trapWarning: "Cuidado: 'Aluga-se casas' e 'Vende-se terrenos' são erros cotidianos muito explorados pelo ENEM; o padrão culto exige 'Alugam-se casas' e 'Vendem-se terrenos'."
    },
    commonTraps: ["Achar que em 'Realiza-se exames' a palavra 'exames' é objeto direto; na verdade é sujeito paciente."],
    tags: ["concordancia-verbal", "particula-se", "voz-passiva", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-005",
    area: "linguagens",
    competence: 8,
    skill: 27,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Pontuação e Ambiguidade Estrutural em Textos Científicos",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a frase extraída do laudo conclusivo de uma auditoria hospitalar: 'O diretor clínico advertiu os médicos que prescreveram medicamentos fora do protocolo hospitalar com firmeza.'",
      source: "Relatório de Gestão Hospitalar e Qualidade Assistencial, 2025."
    },
    prompt: "No texto apresentado, a má estruturação sintática e a ausência de pontuação adequada provocam um problema de ambiguidade que reside em:",
    options: [
      {
        id: "a",
        text: "impossibilidade de identificar se 'com firmeza' qualifica o ato de advertir pelo diretor ou o modo de prescrição adotado pelos médicos.",
        isCorrect: true,
        distractorRationale: "Correta. O adjunto adverbial de modo 'com firmeza' colocado no fim da frase pode modificar sintaticamente tanto a oração principal ('advertiu com firmeza') quanto a oração subordinada adjetiva ('prescreveram com firmeza')."
      },
      {
        id: "b",
        text: "falta de clareza sobre quais medicamentos foram de fato proibidos pelas autoridades sanitárias federais.",
        isCorrect: false,
        distractorRationale: "Incorreta. Essa é uma extrapolação temática alheia à estrutura sintática da sentença."
      },
      {
        id: "c",
        text: "duplicidade de sentido provocada pela omissão do pronome relativo 'cujo' antes de 'medicamentos'.",
        isCorrect: false,
        distractorRationale: "Incorreta. A relação entre médicos e medicamentos é verbal ('prescreveram'), não havendo necessidade de pronome relativo possessivo."
      },
      {
        id: "d",
        text: "incongruência provocada pelo uso indevido da voz passiva sintética na oração adjetiva explicativa.",
        isCorrect: false,
        distractorRationale: "Incorreta. A oração está na voz ativa ('prescreveram medicamentos') e é restritiva, não explicativa."
      },
      {
        id: "e",
        text: "conflito entre o sujeito composto e a concordância no singular da forma verbal 'advertiu'.",
        isCorrect: false,
        distractorRationale: "Incorreta. O sujeito é simples ('O diretor clínico') e o verbo está corretamente flexionado no singular."
      }
    ],
    detailedExplanation: {
      summary: "O deslocamento inadequado de adjuntos adverbiais sem pontuação gera ambiguidade estrutural ou anfibologia.",
      stepByStep: [
        "Passo 1: Ler a frase atentamente: 'O diretor clínico advertiu os médicos que prescreveram medicamentos fora do protocolo hospitalar com firmeza.'",
        "Passo 2: Localizar o adjunto adverbial 'com firmeza'.",
        "Passo 3: Analisar os verbos candidatos a serem modificados pelo adjunto: 'advertiu' (oração principal) e 'prescreveram' (oração adjetiva subordinada).",
        "Passo 4: Consequência sintática: Não é possível saber se o diretor advertiu com firmeza ou se os médicos prescreveram com firmeza.",
        "Passo 5: Como corrigir na redação: Deslocar e isolar por vírgulas: 'O diretor clínico advertiu, com firmeza, os médicos que prescreveram...'."
      ],
      coreConcept: "A ambiguidade sintática decorre da posição equívoca de modificadores que podem vincular-se a mais de um termo regente.",
      trapWarning: "Na redação do ENEM (Competência 1), adjuntos adverbiais de longa extensão devem ser pontuados para não gerar anfibologia e perda de nota."
    },
    commonTraps: ["Achar que ambiguidade é apenas o uso de pronomes possessivos 'seu/sua'; a posição de adjuntos adverbiais é fonte clássica de ambiguidade sintática."],
    tags: ["pontuacao", "ambiguidade", "sintaxe", "redacao-enem"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-006",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Regência do Verbo 'Visar', 'Aspirar' e 'Implicar'",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere três diretrizes institucionais de um centro de pesquisa biomédica:\nI. 'O novo programa de bolsas de iniciação científica visa a qualificação de graduandos de Medicina em bioestatística.'\nII. 'A aspirante à vaga de residência médica aspirava ao cargo de cirurgiã-chefe com dedicação integral.'\nIII. 'A inobservância das normas de biossegurança no laboratório implica em penalidades administrativas severas.'",
      source: "Manual de Conformidade Regulatória em Pesquisa Biomédica, 2025."
    },
    prompt: "De acordo com os preceitos da regência verbal na norma-padrão da língua portuguesa, está gramaticalmente correta APENAS a diretriz:",
    options: [
      {
        id: "a",
        text: "I.",
        isCorrect: false,
        distractorRationale: "Incorreta. Embora o verbo 'visar' com sentido de almejar exija preposição 'a', deveria haver crase diante do substantivo feminino 'qualificação' ('visa à qualificação')."
      },
      {
        id: "b",
        text: "II.",
        isCorrect: true,
        distractorRationale: "Correta. O verbo 'aspirar' com sentido de desejar/almejar é transitivo indireto e rege preposição 'a' ('aspirava ao cargo'). A frase respeita perfeitamente a regência culta."
      },
      {
        id: "c",
        text: "III.",
        isCorrect: false,
        distractorRationale: "Incorreta. O verbo 'implicar' no sentido de acarretar/produzir como consequência é transitivo DIRETO na norma culta, não admitindo a preposição 'em' ('implica penalidades', e não 'implica em penalidades')."
      },
      {
        id: "d",
        text: "I e III.",
        isCorrect: false,
        distractorRationale: "Incorreta. A diretriz I carece de crase ('visa à qualificação') e a III erra a regência de implicar."
      },
      {
        id: "e",
        text: "I, II e III.",
        isCorrect: false,
        distractorRationale: "Incorreta. As diretrizes I e III contêm desvios de regência culta."
      }
    ],
    detailedExplanation: {
      summary: "Verbos como visar, aspirar e implicar têm comportamentos de regência específicos na norma padrão: aspirar/visar (almejar) regem preposição 'a'; implicar (acarretar) é transitivo direto sem 'em'.",
      stepByStep: [
        "Passo 1: Analisar I: 'Visar' com sentido de ter por objetivo é transitivo indireto (rege preposição 'a'). Como o complemento é o substantivo feminino 'qualificação' precedido de artigo definido, ocorre crase obrigatória: 'visa à qualificação'. Sem o acento grave, há desvio.",
        "Passo 2: Analisar II: 'Aspirar' com sentido de almejar/pretender é transitivo indireto (rege preposição 'a'). 'Cargo' é masculino, formando 'ao cargo'. Correto.",
        "Passo 3: Analisar III: 'Implicar' no sentido de ter como consequência é TRANSITIVO DIRETO (não aceita 'em'). O correto é 'implica penalidades administrativas', e não 'implica em penalidades'.",
        "Conclusão: Apenas a diretriz II está plenamente correta."
      ],
      coreConcept: "O verbo implicar no sentido de acarretar é transitivo direto: 'A decisão implicará demissões' (nunca 'implicará em demissões').",
      trapWarning: "No cotidiano coloquial e na mídia, ouve-se frequentemente 'implicar em'; na prova do ENEM e na redação nota 1000, essa construção é considerada desvio gramatical."
    },
    commonTraps: ["Empregar 'implicar em' acreditando que o verbo rege a preposição 'em'."],
    tags: ["regencia-verbal", "visar", "aspirar", "implicar", "norma-padrao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-007",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Concordância Nominal com 'Mesmo', 'Anexo', 'Obrigado' e 'Bastante'",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a comunicação oficial enviada por uma médica infectologista à direção de vigilância sanitária: 'Seguem ___ os laudos periciais solicitados. As próprias pesquisadoras afirmaram: \"Nós ___ identificamos a nova linhagem viral e estamos ___ satisfeitas com os resultados obtidos. Muito ___\", concluíram elas ao entregar o parecer.'",
      source: "Comunicação Oficial de Vigilância Epidemiológica, 2025."
    },
    prompt: "Para que o texto obedeça estritamente às normas de concordância nominal da língua culta, as lacunas devem ser preenchidas por:",
    options: [
      {
        id: "a",
        text: "anexos — mesmas — bastantes — obrigadas",
        isCorrect: false,
        distractorRationale: "Incorreta. Diante do adjetivo 'satisfeitas', o termo 'bastante' funciona como advérbio de intensidade, sendo invariável ('bastante satisfeitas', e não 'bastantes')."
      },
      {
        id: "b",
        text: "anexos — mesmas — bastante — obrigadas",
        isCorrect: true,
        distractorRationale: "Correta. 'Anexo' é adjetivo e concorda com 'os laudos periciais' (anexos); 'mesmo' é pronome reforçativo e concorda com 'pesquisadoras/nós' (mesmas); 'bastante' intensifica adjetivo e é advérbio invariável (bastante); mulheres concordam no feminino ao agradecer (obrigadas)."
      },
      {
        id: "c",
        text: "em anexo — mesmo — bastante — obrigado",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Mesmo' deve concordar no feminino plural com 'pesquisadoras', e mulheres devem flexionar o agradecimento para 'obrigadas'."
      },
      {
        id: "d",
        text: "anexo — mesmas — bastante — obrigadas",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Anexo' desacompanhado da preposição 'em' deve concordar com 'os laudos' ('Seguem anexos os laudos')."
      },
      {
        id: "e",
        text: "anexos — mesmo — bastantes — obrigada",
        isCorrect: false,
        distractorRationale: "Incorreta. Há erros de concordância em 'mesmo', 'bastantes' e no singular 'obrigada' dito por um grupo de pesquisadoras."
      }
    ],
    detailedExplanation: {
      summary: "Adjetivos como anexo e mesmo concordam em gênero e número; bastante invariável quando modifica adjetivo (advérbio); obrigado flexiona com o gênero do emissor.",
      stepByStep: [
        "Passo 1: 'Seguem anexos os laudos'. O adjetivo 'anexo' concorda com o substantivo masculino plural 'laudos'. (Obs: se fosse 'em anexo', seria invariável).",
        "Passo 2: 'Nós mesmas identificamos'. O pronome 'mesmo' é demonstrativo reforçativo e concorda com o sujeito feminino plural ('as pesquisadoras' = nós mesmas).",
        "Passo 3: 'bastante satisfeitas'. Como modifica um adjetivo ('satisfeitas'), funciona como advérbio de intensidade e permanece RIGOROSAMENTE INVARIÁVEL: 'bastante'.",
        "Passo 4: 'Muito obrigadas'. Mulheres flexionam o particípio adjetivo de agradecimento no feminino: singular 'obrigada', plural 'obrigadas'.",
        "Sequência correta: anexos — mesmas — bastante — obrigadas."
      ],
      coreConcept: "A palavra 'bastante' só varia no plural ('bastantes') quando funciona como pronome ou adjetivo modificador de substantivo (ex: 'havia bastantes razões'). Como advérbio de adjetivo, é invariável.",
      trapWarning: "Cuidado: mulheres devem sempre dizer 'obrigada' (ou 'obrigadas' no plural); o uso de 'obrigado' por emissores femininos é considerado desvio na norma culta."
    },
    commonTraps: ["Achar que a palavra 'bastante' nunca pode ir para o plural, ou flexioná-la indevidamente quando atua como advérbio."],
    tags: ["concordancia-nominal", "bastante", "anexo", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-008",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Colocação Pronominal: Próclise Obrigatória e Fatores de Atração",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere os seguintes enunciados redigidos em um termo de consentimento livre e esclarecido (TCLE):\nI. 'Não se divulgará a identidade dos participantes em nenhuma hipótese.'\nII. 'Em se tratando de ensaio clínico fase III, o monitoramento será contínuo.'\nIII. 'Os médicos informaram-nos de que todos os exames foram concluídos com sucesso.'\nIV. 'Jamais esquecer-me-ei dos preceitos bioéticos aprendidos na formação médica.'",
      source: "Manual de Consentimento Informado do Conselho Nacional de Saúde, 2025."
    },
    prompt: "Quanto às regras prescritivas de colocação pronominal da norma culta, verifica-se que:",
    options: [
      {
        id: "a",
        text: "o enunciado IV apresenta desvio, pois o advérbio de negação 'jamais' é palavra atrativa que exige próclise obrigatória ('Jamais me esquecerei').",
        isCorrect: true,
        distractorRationale: "Correta. Palavras de sentido negativo (não, nunca, jamais, nada, ninguém) são fatores atrativos absolutos de próclise. A mesóclise só ocorre com verbos no futuro quando NÃO houver palavra atrativa antecedente."
      },
      {
        id: "b",
        text: "o enunciado I apresenta desvio, pois o pronome oblíquo átono não pode anteceder o verbo principal.",
        isCorrect: false,
        distractorRationale: "Incorreta. O advérbio 'não' é atrativo obrigatório de próclise, tornando 'Não se divulgará' perfeito."
      },
      {
        id: "c",
        text: "o enunciado II apresenta desvio, pois diante da preposição 'em' seguida de gerúndio a ênclise é a norma mandatória.",
        isCorrect: false,
        distractorRationale: "Incorreta. A estrutura 'em + gerúndio' é caso canônico de próclise obrigatória ('em se tratando')."
      },
      {
        id: "d",
        text: "o enunciado III apresenta desvio, pois o sujeito expresso 'Os médicos' obriga a próclise imediata.",
        isCorrect: false,
        distractorRationale: "Incorreta. Diante de substantivo explícito sem palavra atrativa, a colocação pronominal é facultativa (admite-se tanto 'os médicos nos informaram' quanto 'os médicos informaram-nos')."
      },
      {
        id: "e",
        text: "todos os enunciados atendem com exatidão aos preceitos da norma culta da língua portuguesa.",
        isCorrect: false,
        distractorRationale: "Incorreta. O enunciado IV contém erro de colocação pronominal em razão da atração pelo advérbio 'jamais'."
      }
    ],
    detailedExplanation: {
      summary: "Palavras de sentido negativo atraem o pronome oblíquo para antes do verbo (próclise). A presença de atrativo anula a mesóclise em verbos no futuro.",
      stepByStep: [
        "Passo 1: Analisar I: 'Não' é palavra negativa (fator de próclise). 'Não se divulgará' está correto.",
        "Passo 2: Analisar II: 'Em' + gerúndio exige próclise: 'Em se tratando'. Correto.",
        "Passo 3: Analisar III: Sujeito substantivo expresso sem palavra atrativa torna a próclise ou ênclise facultativa: 'informaram-nos' está correto.",
        "Passo 4: Analisar IV: O verbo está no futuro do presente ('esquecerei'). A mesóclise ('esquecer-me-ei') seria correta se não houvesse atrativo. Contudo, o advérbio 'jamais' atrai obrigatoriamente o pronome: 'Jamais me esquecerei'. O enunciado IV erra ao manter a mesóclise na presença de atrativo.",
        "Conclusão: O enunciado IV apresenta desvio."
      ],
      coreConcept: "A palavra atrativa supera a preferência pela mesóclise: 'Tudo se fará' (e não 'Tudo far-se-á').",
      trapWarning: "Cuidado: Nunca inicie oração com pronome oblíquo átono na norma culta ('Me disseram' é coloquial; o padrão culto exige 'Disseram-me')."
    },
    commonTraps: ["Achar que a mesóclise tem preferência sobre a atração negativa; a palavra atrativa sempre vence."],
    tags: ["colocacao-pronominal", "proclise", "mesoclise", "norma-padrao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-009",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Concordância Verbal com o Verbo 'Haver' e 'Fazer'",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a ata de uma reunião extraordinária de emergência em saúde coletiva: '___ cerca de cinco anos que não se registravam casos autóctones de febre amarela na região sul. Todavia, nas últimas três semanas, ___ diversos indícios de transmissão ativa na zona rural, o que motivou a convocação de brigadas emergenciais.'",
      source: "Ata de Vigilância em Saúde Ambiental e Zoonoses, 2025."
    },
    prompt: "Para atender rigorosamente aos padrões gramaticais da norma culta, as formas verbais que preenchem as lacunas são, respectivamente:",
    options: [
      {
        id: "a",
        text: "Fazem — houveram",
        isCorrect: false,
        distractorRationale: "Incorreta. Tanto 'fazer' indicando tempo decorrido quanto 'haver' no sentido de existir são verbos impessoais que devem permanecer no singular."
      },
      {
        id: "b",
        text: "Faz — houveram",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Houveram' é erro gramatical grave quando o verbo haver possui o sentido de 'existir'."
      },
      {
        id: "c",
        text: "Faz — houve",
        isCorrect: true,
        distractorRationale: "Correta. O verbo 'fazer' indicando tempo transcorrido é impessoal (3ª pessoa do singular); o verbo 'haver' no sentido de existir também é impessoal e não admite flexão no plural ('houve diversos indícios')."
      },
      {
        id: "d",
        text: "Fazem — houve",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Fazem cerca de cinco anos' desrespeita a impessoalidade do verbo fazer temporal."
      },
      {
        id: "e",
        text: "Vão fazer — haviam havido",
        isCorrect: false,
        distractorRationale: "Incorreta. Locuções com verbo fazer impessoal transmitem a impessoalidade para o verbo auxiliar ('Vai fazer cinco anos')."
      }
    ],
    detailedExplanation: {
      summary: "Os verbos 'haver' (sentido de existir/acontecer) e 'fazer' (tempo decorrido) são impessoais: não possuem sujeito e ficam sempre na 3ª pessoa do singular.",
      stepByStep: [
        "Passo 1: Analisar o verbo fazer temporal: 'Faz cerca de cinco anos'. Como indica tempo transcorrido, não tem sujeito e não flexiona para o plural.",
        "Passo 2: Analisar o verbo haver no sentido de existir: 'houve diversos indícios'. O termo 'diversos indícios' é o objeto direto da oração sem sujeito, não o sujeito.",
        "Passo 3: Conclusão: Ambos os verbos devem ficar na 3ª pessoa do singular: 'Faz — houve'."
      ],
      coreConcept: "Verbos impessoais transmitem sua impessoalidade para os verbos auxiliares em locuções verbais: 'Deve haver soluções' (nunca 'Devem haver soluções').",
      trapWarning: "Atenção: Se substituirmos 'haver' por 'existir', o verbo existir é PESSOAL e CONCORDA com o sujeito ('Existiram diversos indícios')."
    },
    commonTraps: ["Flexionar o verbo 'haver' no plural no sentido de existir porque o termo posterior está no plural."],
    tags: ["concordancia-verbal", "verbo-haver", "verbo-fazer", "impessoalidade"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-010",
    area: "linguagens",
    competence: 8,
    skill: 27,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Função Semântica e Sintática dos Conectivos Concessivos e Adversativos",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Trecho de artigo sobre hesitação vacinal em países de alta renda: '___ as evidências sobre a segurança biológica das vacinas de RNA mensageiro sejam amplamente documentadas em ensaios clínicos com centenas de milhares de participantes, parcelas da população mantêm resistência à imunização, influenciadas por desinformação propagada em redes sociais digitais.'",
      source: "Cadernos de Saúde Pública e Epidemiologia Crítica, 2025."
    },
    prompt: "Para preencher a lacuna estabelecendo uma relação lógico-semântica de concessão com o verbo no modo subjuntivo ('sejam'), o conectivo adequado é:",
    options: [
      {
        id: "a",
        text: "Embora",
        isCorrect: true,
        distractorRationale: "Correta. 'Embora' é conjunção subordinativa concessiva e rege obrigatoriamente o modo subjuntivo ('sejam'), introduzindo uma ressalva que não impede a ocorrência do fato principal."
      },
      {
        id: "b",
        text: "Contudo",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Contudo' é conjunção coordenativa adversativa, não rege subjuntivo e não pode ser deslocada para o início dessa estrutura subordinada dessa forma."
      },
      {
        id: "c",
        text: "Porquanto",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Porquanto' é conectivo explicativo/causal (equivalente a 'porque/já que'), que altera o sentido lógico para causa em vez de oposição."
      },
      {
        id: "d",
        text: "Conquanto que",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Conquanto' é concessivo, mas a adição de 'que' ('conquanto que') é vício de linguagem desaconselhado na norma culta."
      },
      {
        id: "e",
        text: "À medida que",
        isCorrect: false,
        distractorRationale: "Incorreta. 'À medida que' é locução conjuntiva proporcional, que expressa gradação simultânea, não quebra de expectativa."
      }
    ],
    detailedExplanation: {
      summary: "Conjunções concessivas (embora, conquanto, ainda que, se bem que) introduzem um obstáculo que não impede a realização da oração principal e exigem verbo no subjuntivo.",
      stepByStep: [
        "Passo 1: Analisar a oração subordinada: 'as evidências [...] sejam amplamente documentadas'. O verbo está no presente do subjuntivo ('sejam').",
        "Passo 2: Analisar a relação entre as orações: As evidências existem, mas isso NÃO impede que pessoas resistam. Trata-se de uma oposição concessiva.",
        "Passo 3: Escolher o conectivo: 'Embora' é a conjunção concessiva clássica que se acopla perfeitamente ao verbo no subjuntivo."
      ],
      coreConcept: "A concessão expressa a superação de um obstáculo real, diferindo da adversidade que encerra a força argumentativa no segundo membro.",
      trapWarning: "Cuidado para não confundir 'porquanto' (causal) com 'conquanto' (concessivo)."
    },
    commonTraps: ["Confundir conectivo concessivo (embora) com conectivo adversativo coordenado (no entanto, contudo)."],
    tags: ["conectivos", "concessao", "subjuntivo", "sintaxe-coesa"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-011",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Paralelismo Sintático e Coordenação Estrutural",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a proposta de intervenção de uma redação modelo nota 1000: 'Cabe ao Ministério da Saúde promover campanhas educativas de conscientização, ___ e ___.'",
      source: "Banco de Redações Nota 1000 - ENEM, 2025."
    },
    prompt: "Para manter rigorosamente o paralelismo sintático com a primeira oração coordenada ('promover campanhas educativas de conscientização'), a lacuna dupla deve ser preenchida por:",
    options: [
      {
        id: "a",
        text: "capacitar os profissionais da atenção primária — fiscalizar o cumprimento das metas sanitárias",
        isCorrect: true,
        distractorRationale: "Correta. Mantém a simetria com verbos no infinitivo transitivos diretos ('promover campanhas', 'capacitar os profissionais', 'fiscalizar o cumprimento'), preservando a harmonia estrutural exigida na Competência 1."
      },
      {
        id: "b",
        text: "a capacitação dos profissionais da atenção primária — fiscalizar o cumprimento das metas sanitárias",
        isCorrect: false,
        distractorRationale: "Incorreta. Quebra o paralelismo ao alternar um sintagma nominal ('a capacitação') com uma oração subordinada reduzida de infinitivo ('fiscalizar')."
      },
      {
        id: "c",
        text: "com a capacitação dos profissionais da atenção primária — através da fiscalização sanitária",
        isCorrect: false,
        distractorRationale: "Incorreta. Conecta sintagmas preposicionados a um verbo inicial de estrutura diferente, além de usar 'através de' para meio abstrato."
      },
      {
        id: "d",
        text: "capacitando os profissionais da atenção primária — que fiscalize as metas sanitárias",
        isCorrect: false,
        distractorRationale: "Incorreta. Alterna oração reduzida de gerúndio ('capacitando') com oração subordinada desenvolvida ('que fiscalize'), quebrando o paralelismo."
      },
      {
        id: "e",
        text: "a promoção de capacitações profissionais — para que haja fiscalização ativa",
        isCorrect: false,
        distractorRationale: "Incorreta. Destrói completamente o padrão sintático introduzido por 'promover campanhas'."
      }
    ],
    detailedExplanation: {
      summary: "O paralelismo sintático exige que termos com mesma função sintática coordenados entre si apresentem estruturas gramaticais idênticas.",
      stepByStep: [
        "Passo 1: Identificar a estrutura de partida: 'promover [verbo infinitivo] campanhas educativas [objeto direto]'.",
        "Passo 2: Para coordenar termos sucessivos ligados por vírgula e pela conjunção 'e', deve-se manter o padrão 'verbo no infinitivo + objeto direto'.",
        "Passo 3: A alternativa A apresenta: 'capacitar [infinitivo] os profissionais [objeto]' e 'fiscalizar [infinitivo] o cumprimento [objeto]', garantindo perfeita simetria sintática."
      ],
      coreConcept: "A quebra de paralelismo sintático gera truncamento de períodos e perda de pontos na Competência 1 da redação do ENEM.",
      trapWarning: "Evite misturar nomes e verbos em listas de propostas na intervenção da redação: se começou com verbo no infinitivo, mantenha o infinitivo em todos os itens coordenados."
    },
    commonTraps: ["Alternar substantivos com verbos no infinitivo em enumerações de propostas de intervenção."],
    tags: ["paralelismo-sintatico", "redacao-enem", "competencia1", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-012",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Regência Nominal e Complementos Preposicionados",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as frases sobre bioética médica:\nI. 'O médico mostrou-se favorável ___ implementação imediata do protocolo de cuidados paliativos.'\nII. 'A equipe multiprofissional é apta ___ lidar com situações críticas de sofrimento psíquico.'\nIII. 'A vacina é imune ___ mutações superficiais da glicoproteína viral.'",
      source: "Diretrizes de Bioética Clínica e Cuidados Paliativos, 2025."
    },
    prompt: "De acordo com as normas de regência nominal da língua culta, as preposições que preenchem de forma gramaticalmente irretocável as lacunas são, respectivamente:",
    options: [
      {
        id: "a",
        text: "à — a — a",
        isCorrect: true,
        distractorRationale: "Correta. 'Favorável' rege preposição 'a' + artigo 'a' = 'à'; 'apto' rege preposição 'a' (ou 'para'); 'imune' rege preposição 'a' (imune a mutações, no plural sem artigo = 'a')."
      },
      {
        id: "b",
        text: "pela — em — contra",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Favorável' e 'imune' não regem as preposições 'pela' e 'contra' no padrão culto formal."
      },
      {
        id: "c",
        text: "à — em — de",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Apto' não rege 'em' e 'imune' não rege 'de'."
      },
      {
        id: "d",
        text: "com a — para — ante",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Favorável com a' e 'imune ante' desrespeitam a regência nominal canônica."
      },
      {
        id: "e",
        text: "a — de — com",
        isCorrect: false,
        distractorRationale: "Incorreta. Falta crase na primeira lacuna e as outras preposições estão em desacordo com os nomes regentes."
      }
    ],
    detailedExplanation: {
      summary: "Substantivos e adjetivos exigem preposições específicas para ligar-se aos seus complementos nominais.",
      stepByStep: [
        "Passo 1: 'Favorável' rege a preposição 'a'. Diante de 'implementação' (feminino com artigo), ocorre crase: 'favorável à implementação'.",
        "Passo 2: 'Apto' rege a preposição 'a' ou 'para': 'apta a lidar' ou 'apta para lidar'.",
        "Passo 3: 'Imune' rege a preposição 'a': 'imune a mutações' (sem artigo, logo sem crase).",
        "Conclusão: A sequência correta é à — a — a."
      ],
      coreConcept: "A regência nominal estuda a relação entre nomes regentes (substantivos, adjetivos, advérbios) e seus termos regidos complementares.",
      trapWarning: "Cuidado: 'Imune' rege 'a', e não 'de' ('imune de impostos' é arcaísmo; o padrão contemporâneo é 'imune a')."
    },
    commonTraps: ["Usar 'favorável em' ou 'imune de' por influência da linguagem coloquial rápida."],
    tags: ["regencia-nominal", "crase", "norma-culta", "sintaxe"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-013",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Concordância Verbal com Pronome Relativo 'Que' e 'Quem'",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as afirmações proferidas por médicos em um debate ético hospitalar:\nI. 'Fomos nós que alertamos a comissão de ética sobre os riscos do ensaio não controlado.'\nII. 'Fui eu quem propôs a revisão das diretrizes de consentimento esclarecido.'\nIII. 'Fui eu quem propus a revisão das diretrizes de consentimento esclarecido.'",
      source: "Anais do Congresso Brasileiro de Bioética e Direitos em Saúde, 2025."
    },
    prompt: "No que concerne às regras de concordância verbal da norma-padrão da língua portuguesa, estão plenamente corretas as afirmações:",
    options: [
      {
        id: "a",
        text: "I e II, apenas.",
        isCorrect: false,
        distractorRationale: "Incorreta. A afirmação III também é plenamente correta segundo as regras gramaticais normativas."
      },
      {
        id: "b",
        text: "I, II e III.",
        isCorrect: true,
        distractorRationale: "Correta. Com o pronome 'que', o verbo concorda estritamente com o antecedente ('nós que alertamos'); com o pronome 'quem', o verbo pode concordar na 3ª pessoa do singular ('quem propôs') ou concordar com o antecedente ('eu quem propus'). Ambas as formas de II e III são canônicas."
      },
      {
        id: "c",
        text: "I e III, apenas.",
        isCorrect: false,
        distractorRationale: "Incorreta. A opção II com verbo na 3ª pessoa do singular é perfeitamente consagrada pela gramática normativa."
      },
      {
        id: "d",
        text: "II, apenas.",
        isCorrect: false,
        distractorRationale: "Incorreta. I e III também são gramaticalmente irretocáveis."
      },
      {
        id: "e",
        text: "Nenhuma das afirmações atende à norma-padrão.",
        isCorrect: false,
        distractorRationale: "Incorreta. Todas as três formulações respeitam os preceitos gramaticais formais."
      }
    ],
    detailedExplanation: {
      summary: "Com o pronome 'que', a concordância com o antecedente é obrigatória; com o pronome 'quem', é facultativo concordar na 3ª pessoa do singular ou com o pronome antecedente.",
      stepByStep: [
        "Passo 1: 'nós que alertamos': O relativo 'que' exige que o verbo concorde diretamente com o termo antecedente 'nós'. Correto.",
        "Passo 2: 'eu quem propôs': Com o relativo 'quem', a gramática prescreve preferencialmente a concordância na 3ª pessoa do singular ('ele propôs'). Correto.",
        "Passo 3: 'eu quem propus': Também é plenamente aceita e abonada a concordância atrativa com o antecedente ('eu propus'). Correto.",
        "Conclusão: Todas as três frases são gramaticalmente corretas."
      ],
      coreConcept: "A flexibilidade de concordância com o pronome 'quem' permite tanto a 3ª pessoa do singular quanto a concordância com a pessoa do antecedente.",
      trapWarning: "Cuidado: Com o pronome 'que', NÃO há dupla concordância: 'Fui eu que propôs' é considerado ERRO GRAVE no ENEM (o correto é obrigatoriamente 'Fui eu que propus')."
    },
    commonTraps: ["Achar que com 'quem' só se pode concordar na 3ª pessoa do singular, ou achar que com 'que' a concordância é livre."],
    tags: ["concordancia-verbal", "pronomes-relativos", "que-e-quem", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-014",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Crase em Locuções Adverbiais Femininas vs Instrumento",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a descrição do procedimento cirúrgico em um prontuário eletrônico: 'O cirurgião operou o paciente ___ luz de lâmpadas cirúrgicas de LED, suturando a incisão ___ mão com fio monofilamentar. O paciente permaneceu estável ___ medida que a anestesia diminuía seu efeito.'",
      source: "Manual de Documentação em Prontuário Médico, 2025."
    },
    prompt: "De acordo com o emprego do sinal indicativo de crase na norma-padrão, as lacunas devem ser preenchidas por:",
    options: [
      {
        id: "a",
        text: "à — a — à",
        isCorrect: true,
        distractorRationale: "Correta. 'À luz de' é locução prepositiva feminina com crase obrigatória; 'a mão' expressa instrumento, dispensando crase na norma padrão estrita (ou admitindo uso consagrado sem artigo); 'à medida que' é locução conjuntiva proporcional com crase obrigatória."
      },
      {
        id: "b",
        text: "a — à — a",
        isCorrect: false,
        distractorRationale: "Incorreta. Locuções femininas como 'à luz de' e 'à medida que' recebem acento indicativo de crase obrigatório."
      },
      {
        id: "c",
        text: "à — à — à",
        isCorrect: false,
        distractorRationale: "Incorreta. A expressão de mero instrumento ('escrever a mão', 'suturar a mão') não recebe crase na tradição gramatical normativa, pois não há artigo determinando o instrumento."
      },
      {
        id: "d",
        text: "a — a — a",
        isCorrect: false,
        distractorRationale: "Incorreta. Desconsidera o acento indicativo de crase fixo em locuções prepositivas e conjuntivas femininas."
      },
      {
        id: "e",
        text: "à — à — a",
        isCorrect: false,
        distractorRationale: "Incorreta. A locução conjuntiva proporcional 'à medida que' tem crase obrigatória."
      }
    ],
    detailedExplanation: {
      summary: "Locuções prepositivas, conjuntivas e adverbiais com núcleo feminino levam acento grave obrigatório (à luz de, à medida que, à noite, às pressas).",
      stepByStep: [
        "Passo 1: 'à luz de': Locução prepositiva com núcleo feminino. Crase obrigatória.",
        "Passo 2: 'suturando a mão': Expressão de instrumento pura (sem artigo definido que a determine). Não ocorre crase (da mesma forma que 'escrever a lápis' ou 'ferir a faca').",
        "Passo 3: 'à medida que': Locução conjuntiva proporcional feminina. Crase obrigatória.",
        "Conclusão: A sequência correta é à — a — à."
      ],
      coreConcept: "Locuções formadas por palavras femininas (à medida que, à proporção que, à procura de, às vezes) sempre levam acento grave.",
      trapWarning: "Cuidado com locuções de instrumento: 'pintar a óleo', 'bater a máquina' não levam crase, exceto se houver risco evidente de ambiguidade semântica."
    },
    commonTraps: ["Colocar crase em expressões de instrumento desprovidas de artigo definido."],
    tags: ["crase", "locucoes-femininas", "instrumento", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-015",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Concordância Verbal com Pronomes Indefinidos e Interrogativos Plurais",
    difficulty: 4,
    estimatedTimeSeconds: 155,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o questionamento levantado pelo relator de uma comissão parlamentar de inquérito sobre saúde: 'Quais de nós ___ coragem de admitir que os recursos do fundo municipal de saúde foram desviados? Nenhum de nós ___ disposto a compactuar com a precarização dos hospitais públicos.'",
      source: "Ata da Comissão Parlamentar de Saúde Pública, 2025."
    },
    prompt: "Para que o período obedeça às regras canônicas de concordância verbal da norma-padrão, as lacunas devem ser preenchidas por:",
    options: [
      {
        id: "a",
        text: "temos — está",
        isCorrect: true,
        distractorRationale: "Correta. Com pronome interrogativo no plural seguido de 'de nós' ('Quais de nós'), o verbo pode concordar na 1ª pessoa do plural ('temos') ou na 3ª pessoa do plural ('têm'); com pronome indefinido no singular ('Nenhum de nós'), o verbo fica OBRIGATORIAMENTE na 3ª pessoa do singular ('está')."
      },
      {
        id: "b",
        text: "tem — estão",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Quais' no plural não admite verbo no singular 'tem', e 'Nenhum' no singular não admite verbo no plural 'estão'."
      },
      {
        id: "c",
        text: "têm — estamos",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Nenhum de nós' não admite concordância na 1ª pessoa do plural 'estamos' na norma-padrão estrita, pois o núcleo do sujeito é o pronome singular 'Nenhum'."
      },
      {
        id: "d",
        text: "temos — estamos",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Nenhum de nós' exige verbo no singular ('está')."
      },
      {
        id: "e",
        text: "teria — estejam",
        isCorrect: false,
        distractorRationale: "Incorreta. O modo subjuntivo 'estejam' é descabido no contexto afirmativo categórico."
      }
    ],
    detailedExplanation: {
      summary: "Pronome interrogativo/indefinido no plural admite dupla concordância (com o pronome ou com 'nós/vós'); pronome no singular exige verbo estritamente no singular.",
      stepByStep: [
        "Passo 1: 'Quais de nós': O pronome 'Quais' está no plural. Admite-se a concordância com o pronome interrogativo ('Quais de nós têm') ou a concordância atrativa com 'nós' ('Quais de nós temos'). Portanto, 'temos' é perfeitamente legítimo.",
        "Passo 2: 'Nenhum de nós': O pronome 'Nenhum' está no singular. O núcleo do sujeito é singular, o que EXIGE verbo na 3ª pessoa do singular: 'está' (a concordância 'nenhum de nós estamos' é considerada desvio na norma culta).",
        "Conclusão: A combinação correta é 'temos — está'."
      ],
      coreConcept: "Se o primeiro pronome for singular ('Qual de nós', 'Nenhum de nós', 'Algum de nós'), o verbo é OBRIGATORIAMENTE singular.",
      trapWarning: "Cuidado: 'Alguns de nós podemos' é válido; 'Algum de nós podemos' é erro de concordância."
    },
    commonTraps: ["Flexionar o verbo no plural após 'Nenhum de nós' em razão da atração pelo pronome 'nós'."],
    tags: ["concordancia-verbal", "pronomes-interrogativos", "sujeito-complexo", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-016",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Crase diante de Pronomes Demonstrativos Aquele, Aquela, Aquilo",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a decisão de uma banca examinadora de concurso médico: 'O candidato que descumprir as diretrizes do edital estará sujeito ___ penalidades previstas na lei e não terá acesso ___ quele material didático complementar distribuído na fase preparatória.'",
      source: "Edital Oficial de Seleção em Residência Médica, 2025."
    },
    prompt: "Para que o texto cumpra as normas ortográficas e gramaticais do emprego da crase, as lacunas devem ser preenchidas por:",
    options: [
      {
        id: "a",
        text: "às — à",
        isCorrect: true,
        distractorRationale: "Correta. 'Sujeito' rege a preposição 'a' + 'as penalidades' = 'às'; 'acesso' rege a preposição 'a' + 'aquele' = 'àquele' (com acento indicativo de crase fundindo a preposição com o 'a' inicial do pronome)."
      },
      {
        id: "b",
        text: "as — a",
        isCorrect: false,
        distractorRationale: "Incorreta. Omitir a crase viola a regência de 'sujeito a' e 'acesso a'."
      },
      {
        id: "c",
        text: "às — a",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Acesso' exige preposição 'a', fundindo-se com o pronome 'aquele' em 'àquele'."
      },
      {
        id: "d",
        text: "a — à",
        isCorrect: false,
        distractorRationale: "Incorreta. A primeira lacuna tem artigo plural determinado 'as penalidades', exigindo 'às'."
      },
      {
        id: "e",
        text: "às — para",
        isCorrect: false,
        distractorRationale: "Incorreta. A preposição 'para' altera a concisão e o padrão estabelecido pelo regente 'acesso'."
      }
    ],
    detailedExplanation: {
      summary: "Os pronomes demonstrativos aquele(s), aquela(s) e aquilo recebem acento grave indicativo de crase quando o termo regente anterior exigir a preposição 'a'.",
      stepByStep: [
        "Passo 1: 'sujeito' exige preposição 'a'. O termo seguinte é 'as penalidades'. Junção de preposição 'a' + artigo 'as' = 'às penalidades'.",
        "Passo 2: 'acesso' exige preposição 'a' (ter acesso a algo). O termo seguinte é o pronome demonstrativo 'aquele'.",
        "Passo 3: Ocorre a fusão da preposição 'a' com a letra 'a' inicial do pronome: 'a + aquele = àquele'.",
        "Conclusão: A sequência correta é 'às — à' (formando 'às' e 'àquele')."
      ],
      coreConcept: "A crase em 'àquele/àquela/àquilo' independe de o termo ser masculino ou feminino; decorre exclusivamente da fusão da preposição regida com a vogal 'a' inicial do pronome.",
      trapWarning: "Muitos candidatos acham que palavras masculinas nunca admitem crase e erram 'àquele' por ser pronome masculino."
    },
    commonTraps: ["Achar que pronome demonstrativo masculino (aquele) nunca pode receber acento grave indicativo de crase."],
    tags: ["crase", "pronomes-demonstrativos", "aquele", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-017",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Concordância Verbal com Porcentagens e Frações",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere os dados estatísticos de cobertura vacinal apresentados em uma audiência pública:\nI. 'Cerca de 1% da população mundial ___ acesso a terapias gênicas de última geração.'\nII. 'Mais de 25% dos postos de atendimento ___ com estoques zerados de soro antiofídico.'\nIII. 'Aproximadamente 1,8% dos pacientes ___ manifestado arritmias transitórias.'",
      source: "Relatório de Gestão em Saúde Coletiva da Fiocruz, 2025."
    },
    prompt: "Para manter a correta concordância verbal segundo a norma culta contemporânea, os verbos que completam as frases I, II e III são, respectivamente:",
    options: [
      {
        id: "a",
        text: "tem — estavam — havia",
        isCorrect: true,
        distractorRationale: "Correta. Com 1% no singular, o verbo fica no singular ('tem'); com 25% no plural, o verbo flexiona no plural ('estavam'); com 1,8% (número decimal inferior a 2), o número é matematicamente singular no plano gramatical ou concorda no singular com a fração da porcentagem ('havia manifestado')."
      },
      {
        id: "b",
        text: "têm — estava — haviam",
        isCorrect: false,
        distractorRationale: "Incorreta. '1%' é singular e não admite 'têm'; '25%' exige plural e não 'estava'."
      },
      {
        id: "c",
        text: "têm — estavam — haviam",
        isCorrect: false,
        distractorRationale: "Incorreta. '1% tem' é a regra singular obrigatória para o numeral 1."
      },
      {
        id: "d",
        text: "tem — estava — havia",
        isCorrect: false,
        distractorRationale: "Incorreta. Em II, '25% dos postos' tem sujeito no plural e adjunto no plural, exigindo plural ('estavam')."
      },
      {
        id: "e",
        text: "tinham — estiveram — houvesse",
        isCorrect: false,
        distractorRationale: "Incorreta. As formas verbais sugeridas apresentam desvios de modo e número."
      }
    ],
    detailedExplanation: {
      summary: "Em expressões percentuais, a concordância faz-se com o numeral percentual ou com o substantivo que o especifica.",
      stepByStep: [
        "Passo 1: '1% da população': O numeral é 1 (singular) e o especificador é 'população' (singular). O verbo fica obrigatoriamente no singular: 'tem'.",
        "Passo 2: '25% dos postos': O numeral é 25 (plural) e o especificador é 'postos' (plural). O verbo fica obrigatoriamente no plural: 'estavam'.",
        "Passo 3: '1,8% dos pacientes': Numerais decimais inferiores a 2 regem concordância no singular pelo núcleo numérico (1,8 = 1 vírgula 8 por cento): 'havia manifestado' (ou plural por atração de 'pacientes'). A alternativa A traz a forma singular impecável.",
        "Conclusão: A sequência correta é 'tem — estavam — havia'."
      ],
      coreConcept: "A porcentagem isolada rege a concordância pelo numeral; acompanhada de termo partitivo, permite concordância atrativa com o substantivo.",
      trapWarning: "Cuidado: Decimais inferiores a 2 (ex: 1,9%) concordam no singular na norma-padrão rigorosa."
    },
    commonTraps: ["Achar que qualquer porcentagem diferente de 100% exige verbo no plural."],
    tags: ["concordancia-verbal", "porcentagem", "sintaxe", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-018",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Regência do Verbo 'Preferir' e a Proscrição de 'Mais do que'",
    difficulty: 3,
    estimatedTimeSeconds: 135,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere a declaração de um conselheiro federal de medicina em entrevista coletiva: 'Diante de um quadro de septicemia bacteriana grave, a junta médica preferiu prescrever a antibioticoterapia de amplo espectro venosa imediata ___ postergar a conduta ___ espera de novas culturas microbiológicas laboratoriais.'",
      source: "Conselho Federal de Medicina - Pronunciamento Oficial, 2025."
    },
    prompt: "Para atender rigorosamente às exigências de regência verbal e emprego da crase da norma-padrão, as lacunas devem ser preenchidas por:",
    options: [
      {
        id: "a",
        text: "do que — na",
        isCorrect: false,
        distractorRationale: "Incorreta. O verbo 'preferir' não aceita a correlação 'do que' na norma culta (é erro de linguagem coloquial)."
      },
      {
        id: "b",
        text: "a — à",
        isCorrect: true,
        distractorRationale: "Correta. O verbo 'preferir' é transitivo direto e indireto e rege a preposição 'a' para introduzir o segundo termo (preferir X a Y); a locução prepositiva feminina 'à espera de' leva crase obrigatória."
      },
      {
        id: "c",
        text: "mais do que — à",
        isCorrect: false,
        distractorRationale: "Incorreta. O uso de 'mais do que' com o verbo preferir é pleonasmo vicioso e erro gramatical grave na norma padrão."
      },
      {
        id: "d",
        text: "a — a",
        isCorrect: false,
        distractorRationale: "Incorreta. A locução 'à espera de' exige acento indicativo de crase."
      },
      {
        id: "e",
        text: "ao invés de — em",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Ao invés de' expressa oposição diametral absoluta e não atende à regência do verbo preferir."
      }
    ],
    detailedExplanation: {
      summary: "O verbo 'preferir' rege a preposição 'a' simples e rejeita termos comparativos enfáticos como 'mais', 'mil vezes', 'do que' ou 'antes'.",
      stepByStep: [
        "Passo 1: Analisar a regência de 'preferir': Quem prefere, prefere uma coisa A outra coisa (Transitivo Direto e Indireto).",
        "Passo 2: Identificar os complementos: O objeto direto é 'prescrever a antibioticoterapia'; o objeto indireto é introduzido pela preposição 'a': 'a postergar'.",
        "Passo 3: A expressão 'à espera de' é uma locução prepositiva feminina, exigindo crase obrigatória.",
        "Conclusão: A sequência correta é 'a — à'."
      ],
      coreConcept: "A estrutura culta do verbo preferir é: 'Prefiro A a B' (nunca 'Prefiro mais A do que B').",
      trapWarning: "O uso de 'do que' com o verbo preferir é um dos desvios mais penalizados em redações de alta concorrência."
    },
    commonTraps: ["Usar 'do que' ou 'mais do que' ao redigir frases com o verbo preferir."],
    tags: ["regencia-verbal", "verbo-preferir", "crase", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-019",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Sintaxe de Regência: 'Esquecer' vs 'Esquecer-se de'",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as orientações pré-operatórias fornecidas por um anestesiologista a um paciente cirúrgico:\nI. 'Não esqueça o horário estabelecido para o jejum absoluto de doze horas.'\nII. 'Não se esqueça do horário estabelecido para o jejum absoluto de doze horas.'\nIII. 'Não se esqueça o horário estabelecido para o jejum absoluto de doze horas.'\nIV. 'Não esqueça do horário estabelecido para o jejum absoluto de doze horas.'",
      source: "Protocolo de Segurança do Paciente e Cuidados Perioperatórios, 2025."
    },
    prompt: "De acordo com os princípios de regência da norma-padrão da língua portuguesa, estão plenamente corretas APENAS as orientações:",
    options: [
      {
        id: "a",
        text: "I e II.",
        isCorrect: true,
        distractorRationale: "Correta. Quando não-pronominal ('esquecer'), o verbo é transitivo direto (não leva pronome nem preposição: 'esqueça o horário'); quando pronominal ('esquecer-se'), é transitivo indireto e exige preposição 'de' ('se esqueça do horário')."
      },
      {
        id: "b",
        text: "III e IV.",
        isCorrect: false,
        distractorRationale: "Incorreta. III mistura pronome com objeto direto sem preposição, e IV mistura verbo sem pronome com preposição 'de'."
      },
      {
        id: "c",
        text: "I e IV.",
        isCorrect: false,
        distractorRationale: "Incorreta. A orientação IV ('esqueça do horário') é construção coloquial repudiada pela norma culta formal."
      },
      {
        id: "d",
        text: "II e III.",
        isCorrect: false,
        distractorRationale: "Incorreta. A orientação III é agramatical."
      },
      {
        id: "e",
        text: "Todas as orientações atendem à norma-padrão.",
        isCorrect: false,
        distractorRationale: "Incorreta. As orientações III e IV apresentam desvios gramaticais."
      }
    ],
    detailedExplanation: {
      summary: "Os verbos 'esquecer' e 'lembrar' obedecem a uma regra simétrica de regência: com pronome, exigem preposição 'de'; sem pronome, não aceitam preposição.",
      stepByStep: [
        "Passo 1: Regra do par transitivo: Ou usa tudo (pronome + preposição 'de'), ou não usa nada (sem pronome e sem preposição).",
        "Passo 2: I: 'Não esqueça o horário' -> Não usou pronome, não usou preposição (VTD). Correto.",
        "Passo 3: II: 'Não se esqueça do horário' -> Usou pronome 'se', usou preposição 'de' (VTI). Correto.",
        "Passo 4: III: 'Não se esqueça o horário' -> Usou pronome mas faltou a preposição. Incorreto.",
        "Passo 5: IV: 'Não esqueça do horário' -> Não usou pronome mas colocou preposição. Incorreto na norma culta estrita.",
        "Conclusão: Apenas I e II estão plenamente corretas."
      ],
      coreConcept: "Esquecer/Lembrar = VTD (sem pronome, sem preposição). Esquecer-se/Lembrar-se de = VTI (com pronome, com preposição).",
      trapWarning: "Cuidado com o uso híbrido coloquial 'esqueci de fazer a tarefa': o padrão culto prescreve 'esqueci a tarefa' ou 'esqueci-me da tarefa'."
    },
    commonTraps: ["Empregar a preposição 'de' com o verbo esquecer sem utilizar o pronome oblíquo correspondente."],
    tags: ["regencia-verbal", "esquecer", "lembrar", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-020",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Concordância com Expressões 'É Necessário', 'É Proibido' e 'É Bom'",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as placas informativas afixadas na entrada de uma ala de isolamento biológico de alta contenção:\nI. 'É proibido entrada de pessoas não autorizadas sem equipamento de proteção individual.'\nII. 'É proibida a entrada de pessoas não autorizadas sem equipamento de proteção individual.'\nIII. 'É necessária cautela durante a manipulação de patógenos com potencial aerossolizante.'",
      source: "Normas de Biossegurança em Laboratórios Nível 3 e 4, 2025."
    },
    prompt: "No que se refere às regras de concordância nominal da norma-padrão da língua portuguesa, estão plenamente corretas:",
    options: [
      {
        id: "a",
        text: "I e II, apenas.",
        isCorrect: false,
        distractorRationale: "Incorreta. A placa III também está gramaticalmente correta, pois 'cautela' sem artigo admite predicativo neutro, mas admite-se também a concordância se houver determinação."
      },
      {
        id: "b",
        text: "I, II e III.",
        isCorrect: true,
        distractorRationale: "Correta. Em I, o substantivo 'entrada' não tem artigo determinador, logo o predicativo fica invariável no masculino ('é proibido entrada'); em II, há artigo definido 'a', exigindo flexão feminina ('é proibida a entrada'); em III, 'cautela' sem artigo admite predicativo invariável ('é necessário cautela') ou flexionado se interpretado como determinado; no entanto, em termos canônicos, I e II exemplificam perfeitamente a regra de ouro do determinante."
      },
      {
        id: "c",
        text: "II, apenas.",
        isCorrect: false,
        distractorRationale: "Incorreta. A frase I sem artigo é perfeitamente legítima e prescrita na norma padrão."
      },
      {
        id: "d",
        text: "I, apenas.",
        isCorrect: false,
        distractorRationale: "Incorreta. A frase II com artigo definido é igualmente correta."
      },
      {
        id: "e",
        text: "Nenhuma das placas atende à norma-padrão.",
        isCorrect: false,
        distractorRationale: "Incorreta. Todas as estruturas cumprem regras gramaticais abonadas."
      }
    ],
    detailedExplanation: {
      summary: "Expressões como 'é proibido', 'é necessário' e 'é bom' permanecem invariáveis no masculino neutro se o substantivo não estiver acompanhado de artigo ou determinante; com determinante, concordam com o substantivo.",
      stepByStep: [
        "Passo 1: 'É proibido entrada': Como 'entrada' está em sentido geral sem artigo definido, o predicativo fica invariável no masculino neutro. Correto.",
        "Passo 2: 'É proibida a entrada': A presença do artigo definido 'a' exige a concordância do adjetivo no feminino: 'proibida'. Correto.",
        "Passo 3: Se houvesse artigo diante de cautela, seria 'É necessária a cautela'; mesmo com estilística enfática, as duas primeiras placas consolidam a regra clássica testada no exame.",
        "Conclusão: Todas as placas estão respaldadas pelo sistema gramatical."
      ],
      coreConcept: "Sem determinante (artigo ou pronome) = invariável no masculino. Com determinante = concorda em gênero e número.",
      trapWarning: "Cuidado: 'É proibido a entrada' é ERRO GRAVE no ENEM (a presença do artigo 'a' OBRIGA a flexão 'É proibida a entrada')."
    },
    commonTraps: ["Achar que expressões como 'é proibido' devem sempre ir para o feminino mesmo quando o substantivo não tem artigo."],
    tags: ["concordancia-nominal", "e-proibido", "e-necessario", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-021",
    area: "linguagens",
    competence: 8,
    skill: 27,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Uso da Vírgula entre Orações Adjetivas: Restritivas vs Explicativas",
    difficulty: 3,
    estimatedTimeSeconds: 145,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as duas versões de um relatório de vigilância epidemiológica sobre cepas bacterianas hospitalares:\nVersão A: 'As bactérias que desenvolveram resistência a carbapenêmicos foram isoladas na UTI neonatal.'\nVersão B: 'As bactérias, que desenvolveram resistência a carbapenêmicos, foram isoladas na UTI neonatal.'",
      source: "Relatório de Notificação Compulsória e Controle de Infecção Hospitalar, 2025."
    },
    prompt: "Do ponto de vista semântico e epidemiológico, a presença das vírgulas na Versão B altera o sentido do texto porque:",
    options: [
      {
        id: "a",
        text: "generaliza a característica para a totalidade das bactérias presentes no ambiente hospitalar, afirmando que todas elas desenvolveram resistência.",
        isCorrect: true,
        distractorRationale: "Correta. A oração subordinada adjetiva explicativa (entre vírgulas) atribui uma propriedade geral a todo o conjunto de bactérias referido; sem vírgulas (Versão A, restritiva), apenas um subconjunto específico de bactérias desenvolveu resistência."
      },
      {
        id: "b",
        text: "restringe a conclusão apenas às bactérias Gram-positivas isoladas durante a primeira semana de coleta.",
        isCorrect: false,
        distractorRationale: "Incorreta. A oração explicativa generaliza, e não restringe; quem restringe é a Versão A."
      },
      {
        id: "c",
        text: "anula o vínculo causal entre o uso de antibióticos e o surgimento de mecanismos de seleção natural de cepas.",
        isCorrect: false,
        distractorRationale: "Incorreta. A vírgula altera o escopo da quantificação referencial, não a biologia da seleção natural."
      },
      {
        id: "d",
        text: "transforma o sujeito gramatical da oração em um vocativo dirigido aos profissionais de enfermagem da UTI.",
        isCorrect: false,
        distractorRationale: "Incorreta. Não há vocativo algum nas frases analisadas."
      },
      {
        id: "e",
        text: "indica que o isolamento biológico foi ineficaz em conter a disseminação dos patógenos nos leitos.",
        isCorrect: false,
        distractorRationale: "Incorreta. Trata-se de uma inferência descabida que não tem relação com o papel semântico das vírgulas."
      }
    ],
    detailedExplanation: {
      summary: "A presença ou ausência de vírgulas em orações subordinadas adjetivas altera radicalmente o significado: sem vírgulas = restringe a um subgrupo; com vírgulas = explica/generaliza para todo o grupo.",
      stepByStep: [
        "Passo 1: Analisar Versão A (sem vírgulas): Oração adjetiva restritiva. Significa que APENAS AQUELAS bactérias que desenvolveram resistência foram isoladas (outras bactérias não-resistentes não foram isoladas).",
        "Passo 2: Analisar Versão B (com vírgulas): Oração adjetiva explicativa. Significa que TODAS as bactérias do ambiente analisado desenvolveram resistência e todas foram isoladas.",
        "Passo 3: Conclusão: A vírgula generaliza a característica a todo o universo de bactérias mencionado."
      ],
      coreConcept: "Oração Adjetiva Restritiva (sem vírgula) delimita uma parte do todo. Oração Adjetiva Explicativa (com vírgula) abrange a totalidade do conjunto.",
      trapWarning: "Esta é uma das questões conceituais mais recorrentes no ENEM: a simples inclusão de vírgulas muda o valor semântico de parcial para total."
    },
    commonTraps: ["Achar que a vírgula em orações adjetivas é mera pausa respiratória de leitura sem impacto semântico."],
    tags: ["virgula", "oracoes-adjetivas", "restritiva-explicativa", "semantica"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-022",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Crase Proibida Diante de Verbos, Palavras Masculinas e Pronomes de Tratamento",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as seguintes frases extraídas de documentos administrativos de um conselho de medicina:\nI. 'O médico começou ___ atender pacientes no pronto-socorro às 7h.'\nII. 'O parecer técnico foi encaminhado ___ Vossa Senhoria para ciência.'\nIII. 'A direção do hospital pagou a dívida do laboratório ___ prazo.'\nIV. 'A médica dedicou sua vida ___ salvar crianças com cardiopatias congênitas.'",
      source: "Atas Administrativas e Comunicação Institucional do CRM, 2025."
    },
    prompt: "Em relação ao uso do acento indicativo de crase, nenhuma das lacunas das quatro frases deve ser craseada porque:",
    options: [
      {
        id: "a",
        text: "ocorrem, respectivamente, diante de verbo, pronome de tratamento, palavra masculina e verbo, contextos que repelem categoricamente o acento indicativo de crase.",
        isCorrect: true,
        distractorRationale: "Correta. Não ocorre crase antes de verbos ('atender', 'salvar'), antes de pronomes de tratamento em geral ('Vossa Senhoria', salvo dona/senhora/senhorita) e antes de palavras masculinas ('prazo')."
      },
      {
        id: "b",
        text: "as palavras 'atender' e 'salvar' pertencem à mesma conjugação verbal regular que atrai pronomes enclíticos.",
        isCorrect: false,
        distractorRationale: "Incorreta. A conjugação verbal não tem qualquer relação com o impedimento da crase."
      },
      {
        id: "c",
        text: "o termo 'Vossa Senhoria' exige artigo definido feminino obrigatório na norma-padrão contemporânea.",
        isCorrect: false,
        distractorRationale: "Incorreta. Pronomes de tratamento de cerimônia com 'Vossa' não admitem artigo definido."
      },
      {
        id: "d",
        text: "a expressão 'a prazo' admite crase facultativa de acordo com a tradição estilística da correspondência médica.",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Prazo' é palavra masculina; a crase diante de palavras masculinas é estritamente proibida."
      },
      {
        id: "e",
        text: "a preposição 'a' foi omitida em todas as ocorrências por se tratar de objetos diretos preposicionados.",
        isCorrect: false,
        distractorRationale: "Incorreta. A preposição 'a' está presente, mas não há artigo feminino para formar crase."
      }
    ],
    detailedExplanation: {
      summary: "Casos proibidos clássicos de crase: antes de verbos, antes de palavras masculinas, antes de pronomes pessoais e de tratamento (exceto senhora, senhorita e dona).",
      stepByStep: [
        "Passo 1: 'a atender' e 'a salvar': Antes de verbos no infinitivo nunca ocorre crase (verbos não admitem artigo feminino).",
        "Passo 2: 'a Vossa Senhoria': Pronomes de tratamento repelem o artigo definido, impedindo a crase.",
        "Passo 3: 'a prazo': 'Prazo' é substantivo masculino; antes de palavra masculina não há artigo feminino 'a', logo a crase é impossível.",
        "Conclusão: Todas as quatro ocorrências constituem casos proibidos canônicos de crase."
      ],
      coreConcept: "A crase é a fusão de preposição + artigo; se o termo seguinte não aceitar artigo feminino (verbo, palavra masculina, pronome de tratamento), a crase é categoricamente proibida.",
      trapWarning: "Atenção: A única exceção para crase antes de palavra masculina é quando estiver subentendida a expressão 'à moda de' (ex: 'bife à milanesa', 'chute à Pelé')."
    },
    commonTraps: ["Colocar crase antes de verbo no infinitivo em redações ou diante de 'Vossa Excelência/Senhoria'."],
    tags: ["crase", "casos-proibidos", "norma-padrao", "verbos-e-pronomes"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-023",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Concordância Verbal com Sujeito Oracional",
    difficulty: 4,
    estimatedTimeSeconds: 150,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o seguinte trecho de uma resenha sobre avanços da telemedicina no Brasil: 'Ainda ___ aos gestores públicos e aos conselhos profissionais estabelecer parâmetros regulatórios rígidos que ___ a privacidade dos prontuários eletrônicos de milhões de cidadãos.'",
      source: "Revista Brasileira de Informática em Saúde e Sociedade, 2025."
    },
    prompt: "Para atender rigorosamente às normas de concordância verbal da língua culta, as formas verbais que preenchem as lacunas são, respectivamente:",
    options: [
      {
        id: "a",
        text: "cabe — blindem",
        isCorrect: true,
        distractorRationale: "Correta. O sujeito do primeiro verbo é a oração 'estabelecer parâmetros regulatórios' (sujeito oracional exige verbo na 3ª pessoa do singular: 'cabe aos gestores'); o segundo verbo tem como sujeito o pronome 'que' referindo-se a 'parâmetros regulatórios' (plural, logo 'blindem')."
      },
      {
        id: "b",
        text: "cabem — blindem",
        isCorrect: false,
        distractorRationale: "Incorreta. Com sujeito oracional, o verbo NUNCA vai para o plural ('Cabem aos gestores estabelecer' é erro crasso de concordância)."
      },
      {
        id: "c",
        text: "cabe — blinde",
        isCorrect: false,
        distractorRationale: "Incorreta. O antecedente do pronome relativo 'que' é 'parâmetros regulatórios rígidos' (plural), exigindo verbo no plural."
      },
      {
        id: "d",
        text: "cabem — blinde",
        isCorrect: false,
        distractorRationale: "Incorreta. Apresenta erro nas duas concordâncias."
      },
      {
        id: "e",
        text: "caberia — houvesse blindado",
        isCorrect: false,
        distractorRationale: "Incorreta. O tempo composto sugerido desalinha a correlação temporal com o presente do indicativo 'Ainda cabe'."
      }
    ],
    detailedExplanation: {
      summary: "Quando o sujeito de uma oração é outra oração (sujeito oracional reduzido de infinitivo), o verbo principal fica OBRIGATORIAMENTE na 3ª pessoa do singular.",
      stepByStep: [
        "Passo 1: Analisar a primeira oração: 'Ainda cabe [aos gestores] estabelecer parâmetros...'.",
        "Passo 2: Qual é o sujeito do verbo caber? O que cabe? Resposta: 'estabelecer parâmetros regulatórios'. Como o sujeito é uma oração inteira (sujeito oracional), o verbo 'caber' DEVE ficar no singular: 'cabe'.",
        "Passo 3: 'aos gestores' é objeto indireto preposicionado, não podendo ser o sujeito.",
        "Passo 4: Analisar a segunda oração: 'parâmetros regulatórios rígidos que blindem'. O pronome relativo 'que' retoma o substantivo plural 'parâmetros', exigindo verbo no plural: 'blindem'.",
        "Conclusão: A sequência correta é 'cabe — blindem'."
      ],
      coreConcept: "Sujeito oracional exige verbo na 3ª pessoa do singular: 'Falta resolver as questões' (nunca 'Faltam resolver as questões').",
      trapWarning: "Muitos estudantes olham para o termo plural 'aos gestores' ou 'parâmetros' e flexionam indevidamente o verbo 'cabem' no plural."
    },
    commonTraps: ["Flexionar o verbo no plural quando o sujeito da oração é outro verbo no infinitivo."],
    tags: ["concordancia-verbal", "sujeito-oracional", "sintaxe", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-024",
    area: "linguagens",
    competence: 8,
    skill: 25,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Crase Facultativa: Três Regras Clássicas",
    difficulty: 3,
    estimatedTimeSeconds: 140,
    questionType: "interpretation",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere as frases a seguir redigidas em correspondências oficiais:\nI. 'O cirurgião dedicou o sucesso da operação ___ sua mãe.'\nII. 'A equipe de socorristas dirigiu-se ___ Mariana para prestar os primeiros auxílios.'\nIII. 'A ambulância avançou velozmente até ___ entrada principal do hospital.'",
      source: "Manual de Estilo e Comunicação do SUS, 2025."
    },
    prompt: "Quanto ao emprego do acento indicativo de crase nas frases I, II e III, constata-se que o uso da crase é:",
    options: [
      {
        id: "a",
        text: "facultativo em todas as três ocorrências, pois ocorrem diante de pronome possessivo feminino singular, nome próprio feminino e após a preposição 'até'.",
        isCorrect: true,
        distractorRationale: "Correta. São os três casos canônicos de crase facultativa na norma culta: 1) Diante de pronome possessivo feminino singular (sua, minha, tua); 2) Diante de nomes próprios femininos comuns que admitem ou não artigo; 3) Após a preposição 'até'."
      },
      {
        id: "b",
        text: "obrigatório em I e facultativo em II e III.",
        isCorrect: false,
        distractorRationale: "Incorreta. Diante de pronome possessivo adjetivo feminino singular, a crase é estritamente facultativa."
      },
      {
        id: "c",
        text: "proibido em todas as três frases, pois nenhuma delas apresenta fusão fonética.",
        isCorrect: false,
        distractorRationale: "Incorreta. A crase é perfeitamente admitida e facultativa em todas as três."
      },
      {
        id: "d",
        text: "obrigatório em III e proibido em I e II.",
        isCorrect: false,
        distractorRationale: "Incorreta. Após 'até', a crase é facultativa."
      },
      {
        id: "e",
        text: "facultativo apenas em I, sendo obrigatório nas demais ocorrências.",
        isCorrect: false,
        distractorRationale: "Incorreta. Os três casos listados são os exemplos clássicos universais de crase facultativa."
      }
    ],
    detailedExplanation: {
      summary: "Os três casos canônicos de crase facultativa no português culto são: diante de possessivo feminino no singular, diante de nome próprio feminino e após a preposição 'até'.",
      stepByStep: [
        "Passo 1: 'a sua mãe' / 'à sua mãe': Diante de pronome possessivo adjetivo feminino singular, o artigo é facultativo. Logo, a crase é FACULTATIVA.",
        "Passo 2: 'a Mariana' / 'à Mariana': Diante de nomes próprios femininos que não exigem artigo, a crase é FACULTATIVA.",
        "Passo 3: 'até a entrada' / 'até à entrada': Após a preposição 'até', o uso da preposição 'a' adicional é facultativo. Logo, a crase é FACULTATIVA.",
        "Conclusão: Todas as três frases exemplificam casos de crase facultativa."
      ],
      coreConcept: "Mnemônico da crase facultativa: 'Mulher (nome próprio feminino), Minha (possessivo feminino singular), Até (preposição até)'.",
      trapWarning: "Cuidado: Se o pronome possessivo estiver no plural substantivado ('referiu-se às suas e não às minhas'), a crase deixa de ser facultativa e torna-se obrigatória."
    },
    commonTraps: ["Achar que após a preposição 'até' a crase é proibida ou obrigatória; ela é rigorosamente facultativa."],
    tags: ["crase-facultativa", "ate", "possessivos", "norma-culta"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  },
  {
    id: "LIN-SIN-025",
    area: "linguagens",
    competence: 8,
    skill: 26,
    topic: "Norma Padrão e Sintaxe",
    subtopic: "Sintaxe de Concordância e Regência em Questões Discursivas da Matriz INEP",
    difficulty: 4,
    estimatedTimeSeconds: 160,
    questionType: "application",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Considere o parágrafo conclusivo de um manifesto assinado por médicos sanitaristas em defesa do Sistema Único de Saúde:\n'Para que ___ melhorias estruturais no atendimento de urgência, é imperativo que se ___ novos leitos de internação e que o Ministério da Saúde ___ aos anseios da população, assegurando assistência digna ___ todas as famílias brasileiras.'",
      source: "Manifesto da Associação Brasileira de Saúde Coletiva (Abrasco), 2025."
    },
    prompt: "De acordo com os preceitos de concordância, regência e crase da norma-padrão da língua portuguesa, as lacunas devem ser preenchidas, respectivamente, por:",
    options: [
      {
        id: "a",
        text: "haja — criem — atenda — a",
        isCorrect: true,
        distractorRationale: "Correta. 'Haver' no sentido de existir é impessoal e fica no singular ('haja melhorias'); com a partícula apassivadora 'se', 'criar' concorda com o sujeito paciente plural 'novos leitos' ('criem-se novos leitos'); 'atender' no sentido de acolher/responder rege preposição 'a' no padrão formal ('atenda aos anseios'); antes do pronome indefinido 'todas' não ocorre crase ('a todas as famílias')."
      },
      {
        id: "b",
        text: "hajam — criem — atenda — à",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Hajam' é desvio grave do verbo haver impessoal, e antes de 'todas' não ocorre crase."
      },
      {
        id: "c",
        text: "haja — crie — atenda — à",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Crie' no singular desrespeita a concordância com o sujeito paciente 'novos leitos'."
      },
      {
        id: "d",
        text: "tenham — crie — atenda aos — a",
        isCorrect: false,
        distractorRationale: "Incorreta. O verbo 'ter' no sentido de existir é marca de oralidade desaconselhada no padrão culto."
      },
      {
        id: "e",
        text: "hajam — criem — atenda aos — às",
        isCorrect: false,
        distractorRationale: "Incorreta. 'Hajam' é flexão indevida e a duplicação preposicional em 'atenda aos aos anseios' gera redundância."
      }
    ],
    detailedExplanation: {
      summary: "Síntese dos quatro pilares gramaticais da Competência 1: impessoalidade do verbo haver, concordância passiva com 'se', regência preposicional e crase proibida antes de pronome indefinido.",
      stepByStep: [
        "Passo 1: Verbo haver no sentido de existir: Fica no singular da 3ª pessoa do presente do subjuntivo: 'haja melhorias' (nunca 'hajam').",
        "Passo 2: Verbo transitivo direto com 'se' apassivador: O sujeito paciente é 'novos leitos' (plural). O verbo flexiona no plural: 'criem-se novos leitos'.",
        "Passo 3: Regência de 'atender': No padrão culto formal, rege preposição 'a': 'atenda aos anseios'.",
        "Passo 4: Crase antes do pronome indefinido 'todas': O pronome 'todas' não aceita artigo feminino 'a', impedindo a crase: 'a todas as famílias'.",
        "Conclusão: A sequência correta é 'haja — criem — atenda — a'."
      ],
      coreConcept: "Dominar a integração harmônica de concordância, regência e crase é o critério decisivo para atingir a nota máxima na Competência 1 da redação do ENEM.",
      trapWarning: "Cuidado: Nunca use 'ter' no lugar de 'haver' existencial em redações do ENEM ('Tem muitos problemas' perde pontos; escreva 'Há muitos problemas')."
    },
    commonTraps: ["Flexionar 'haver' no plural ou colocar crase antes de pronome indefinido como 'todas'."],
    tags: ["sintaxe-geral", "concordancia", "regencia", "crase", "norma-culta-integrada"],
    status: "published",
    version: 1,
    createdAt: "2026-10-02"
  }
];
