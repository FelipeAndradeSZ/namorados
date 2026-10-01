/**
 * Missões Narrativas — Goiânia (GO)
 * Berço do Sertanejo: Memória Nuclear (Césio-137), Marcha para o Oeste e Polo Agroindustrial
 */

export const MISSIONS_GOIANIA = [
  {
    id: "missao-goiania-1",
    cityId: "goiania",
    title: "Protocolo 1987 no Memorial Césio-137",
    description: "Um antigo equipamento médico desativado gera suspeitas no setor Aeroporto. Aplique noções de decaimento radioativo, tempo de meia-vida e blindagem de radiação gama para conter o risco radiológico.",
    icon: "☢️",
    difficulty: "Difícil",
    estimatedTime: 20, // minutos
    rewards: {
      xp: 600,
      milhas: 290,
      reais: 130,
      item: "Contador Geiger Vintage Calibrado"
    },
    questionQuery: {
      area: "natureza",
      topic: "Mecânica",
      count: 5
    },
    narrative: {
      start: "O bipe ritmado do detector de radiação ressoa perto do Memorial Césio-137. Técnicos da Comissão Nacional de Energia Nuclear (CNEN) solicitam cálculos de emergência: qual é a atividade remanescente da amostra e que espessura de blindagem de chumbo neutraliza a radiação ionizante?",
      success: "Contenção perfeita! Seus cálculos sobre curvas de decaimento exponencial, emissões de partículas e proteção radiológica permitiram isolar a fonte com absoluta segurança para toda a população!",
      failure: "Os cálculos sobre a constante de desintegração radioativa falharam e o isolamento foi classificado como instável. A área precisou ser evacuada às pressas. Revise radioatividade, conservação de energia e física nuclear."
    }
  },
  {
    id: "missao-goiania-2",
    cityId: "goiania",
    title: "A Marcha para o Oeste na Praça Cívica",
    description: "Documentos históricos do Palácio das Esmeraldas revelam a estratégia geopolítica da Era Vargas para povoar o interior do país e a consolidação do traçado Art Déco da nova capital goiana.",
    icon: "🏛️",
    difficulty: "Médio",
    estimatedTime: 15, // minutos
    rewards: {
      xp: 450,
      milhas: 210,
      reais: 85,
      item: "Planta Original Art Déco de 1933"
    },
    questionQuery: {
      area: "humanas",
      topic: "Geografia Urbana",
      count: 4
    },
    narrative: {
      start: "Diante dos edifícios modernistas e Art Déco da Praça Cívica, um pesquisador do patrimônio histórico desenterra correspondências oficiais de Pedro Ludovico Teixeira e Getúlio Vargas de 1933 sobre a transferência da antiga capital (Goiás Velho) para Goiânia.",
      success: "Extraordinário! Você articulou com rigor historiográfico a política de interiorização do Brasil, as diretrizes urbanísticas de centros planejados e o papel de Goiânia na reorganização territorial do país!",
      failure: "Você confundiu as motivações políticas da Era Vargas com o contexto da transferência de Brasília anos depois. O laudo histórico perdeu a credibilidade acadêmica. Revise Brasil República e urbanização brasileira."
    }
  }
];
