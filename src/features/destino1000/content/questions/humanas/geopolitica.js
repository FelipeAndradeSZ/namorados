export const QUESTIONS_GEOPOLITICA = [
  {
    id: "HUM-GEO-001",
    area: "humanas",
    competence: 5,
    skill: 23,
    topic: "Geopolítica e Globalização",
    subtopic: "A Nova Divisão Internacional do Trabalho (DIT)",
    difficulty: 3,
    estimatedTimeSeconds: 150,
    questionType: "conceptual",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "A cadeia global de valor de um smartphone moderno envolve o design e a programação desenvolvidos no Vale do Silício (EUA), componentes semicondutores e telas fabricados em Taiwan e na Coreia do Sul, montagem final em fábricas automatizadas na China e Vietnã, e matéria-prima (lítio e cobalto) extraída na América do Sul e na África.",
      source: "ENEM Geografia Econômica"
    },
    prompt: "Esse modelo de produção e distribuição reflete a Nova Divisão Internacional do Trabalho (DIT), caracterizada pela:",
    options: [
      { id: "a", text: "Fragmentação espacial da produção e dispersão das etapas produtivas com concentração das tomadas de decisão de alto valor agregado nas matrizes.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Autossuficiência industrial de cada país, eliminando o comércio internacional entre continentes.", isCorrect: false, distractorRationale: "O exemplo mostra exatamente o oposto: intensa interdependência global." },
      { id: "c", text: "Transferência igualitária de lucros e de tecnologia de ponta para os países extrativistas de minérios.", isCorrect: false, distractorRationale: "A DIT contemporânea perpetua a desigualdade entre produtores de commodities e donos de patentes." },
      { id: "d", text: "Substituição completa do trabalho humano em todos os continentes por sistemas manuais artesanais.", isCorrect: false, distractorRationale: "Absurdo evidente: o modelo usa alta tecnologia e manufatura fabril." },
      { id: "e", text: "Retração dos fluxos de capitais financeiros transnacionais e fechamento das fronteiras marítimas.", isCorrect: false, distractorRationale: "A globalização intensifica os fluxos de capitais e transportes marítimos conteinerizados." }
    ],
    detailedExplanation: {
      summary: "A Nova DIT baseia-se na fábrica global: empresas transnacionais dispersam as etapas de menor custo (manufatura/montagem) e concentram pesquisa, patentes e marketing nos países centrais.",
      stepByStep: [
        "DIT Tradicional: Metrópole (produtos manufaturados) vs. Colônia (matérias-primas).",
        "Nova DIT: Fragmentação global. Países em desenvolvimento fornecem mão de obra barata e incentivos fiscais para montagem de peças; países desenvolvidos mantêm o controle financeiro, design e patentes de alto valor agregado."
      ],
      coreConcept: "A Nova Divisão Internacional do Trabalho (DIT) e as Cadeias Globais de Valor",
      trapWarning: "Cuidado: a produção física se descentralizou, mas o capital e o comando tecnológico continuam altamente centralizados."
    },
    commonTraps: ["achar que globalização democratizou a posse das tecnologias"],
    tags: ["globalizacao", "dit", "geopolitica", "economia"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  },
  {
    id: "HUM-GEO-002",
    area: "humanas",
    competence: 4,
    skill: 18,
    topic: "Geopolítica e Globalização",
    subtopic: "Crise de Refugiados e Migrações Internacionais",
    difficulty: 3,
    estimatedTimeSeconds: 160,
    questionType: "contextualized",
    requiresCalculation: false,
    requiresInterpretation: true,
    context: {
      supportText: "Segundo o ACNUR (Alto Comissariado das Nações Unidas para Refugiados), o número de pessoas deslocadas à força no mundo ultrapassou a marca histórica de 110 milhões de indivíduos em 2023, impulsionado por guerras civis, perseguições étnico-religiosas e eventos climáticos extremos.",
      source: "Relatório Anual ACNUR"
    },
    prompt: "Diferente do imigrante econômico voluntário, o indivíduo classificado juridicamente pelo Direito Internacional como 'refugiado' é caracterizado por:",
    options: [
      { id: "a", text: "Haver deixado seu país de origem por fundado temor de perseguição (por motivos de raça, religião, nacionalidade, grupo social ou opinião política) ou por grave e generalizada violação de direitos humanos, sem poder retornar em segurança.", isCorrect: true, distractorRationale: null },
      { id: "b", text: "Ter mudado de país exclusivamente com visto de trabalho previamente aprovado por empresas multinacionais.", isCorrect: false, distractorRationale: "Isso caracteriza migração laboral qualificada com visto regular, não refúgio." },
      { id: "c", text: "Ser um turista que decide prolongar sua estadia após o vencimento do prazo consular de viagem.", isCorrect: false, distractorRationale: "Isso configura permanência irregular de turismo, não refúgio." },
      { id: "d", text: "Ser um cidadão com dupla nacionalidade que opta por pagar menos impostos em paraísos fiscais.", isCorrect: false, distractorRationale: "Isso é elisão fiscal internacional, nada tem a ver com proteção humanitária." },
      { id: "e", text: "Pessoa que viaja a estudo financiada por programas de intercâmbio governamentais.", isCorrect: false, distractorRationale: "Isso é intercâmbio acadêmico." }
    ],
    detailedExplanation: {
      summary: "A Convenção de Genebra de 1951 e a Declaração de Cartagena definem refúgio com base no fundado temor de perseguição e na incapacidade de proteção pelo Estado de origem.",
      stepByStep: [
        "Imigrante econômico: desloca-se voluntariamente em busca de melhores condições de vida/trabalho.",
        "Refugiado: desloca-se FORÇADAMENTE porque sua vida, integridade física ou liberdade estão sob risco iminente por guerra, perseguição ou colapso dos direitos humanos.",
        "Princípio do 'Non-refoulement': o país acolhedor não pode devolver o refugiado a um território onde sua vida corra perigo."
      ],
      coreConcept: "Conceito Jurídico e Humanitário de Refugiado vs. Imigrante Econômico",
      trapWarning: "No ENEM, não confunda migrante voluntário com refugiado forçado."
    },
    commonTraps: ["tratar refugiados como imigrantes econômicos comuns"],
    tags: ["refugiados", "direitos humanos", "geografia da populacao"],
    status: "published",
    version: 1,
    createdAt: "2026-10-01"
  }
];
