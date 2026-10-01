/**
 * Missões Narrativas — Florianópolis
 */

export const MISSIONS_FLORIANOPOLIS = [
  {
    id: "missao-floripa-1",
    cityId: "florianopolis",
    title: "O Enigma dos Cabos da Hercílio Luz",
    description: "Rajadas de vento sul atingem a Baía Norte. A estrutura pênsil centenária da Ponte Hercílio Luz necessita de calibração imediata nas barras de olhal e tirantes de suspensão.",
    icon: "🌉",
    difficulty: "Difícil",
    estimatedTime: 20, // minutos
    rewards: {
      xp: 650,
      milhas: 320,
      reais: 300,
      item: "Elo de Aço da Hercílio Luz"
    },
    questionQuery: {
      area: "natureza",
      topic: "Mecânica",
      count: 5
    },
    narrative: {
      start: "O vento minuano e a maresia fustigam a clássica ponte pênsil inaugurada em 1926. Os acelerômetros estruturais apontam oscilações perigosas nos cabos de sustentação. Engenheiros da ilha clamam por seus cálculos de estática dos corpos rígidos, forças de tração e momentos fletores.",
      success: "Perfeito equilíbrio estático! As tensões foram distribuídas rigorosamente e a oscilação foi amortecida, garantindo que o cartão-postal catarinense continue firme por mais um século.",
      failure: "Ressonância estrutural perigosa! Os vetores de força e tração foram mal decompostos, obrigando a defesa civil a isolar a pista. É hora de recalcular as leis de Newton!"
    }
  },
  {
    id: "missao-floripa-2",
    cityId: "florianopolis",
    title: "Inovação no Sapiens Parque",
    description: "Uma startup de inteligência ecológica em Canasvieiras precisa projetar o rendimento e a expansão de servidores verdes com base em métricas de eficiência percentual e dispersão.",
    icon: "💻",
    difficulty: "Médio",
    estimatedTime: 15,
    rewards: {
      xp: 480,
      milhas: 220,
      reais: 150,
      item: "Chip Quântico de Silício"
    },
    questionQuery: {
      area: "matematica",
      topic: "Porcentagem",
      count: 4
    },
    narrative: {
      start: "O Sapiens Parque está efervescente. Empreendedores de biotecnologia buscam investidores, mas precisam comprovar que o consumo energético de seus servidores caiu proporcionalmente ao ganho de tráfego. Você deve auditar as taxas de variação e descontos operacionais da fintech verde.",
      success: "Métricas validadas com rigor impecável! O percentual de economia energética convenceu o fundo internacional, alavancando a tecnologia sustentável da Ilha do Silício.",
      failure: "Erros nas porcentagens encadeadas arruinaram a apresentação para os investidores de risco. Revise aumentos e descontos sucessivos antes da próxima rodada!"
    }
  }
];
