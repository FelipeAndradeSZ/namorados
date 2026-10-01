/**
 * Missões Narrativas — Fortaleza
 */

export const MISSIONS_FORTALEZA = [
  {
    id: "missao-fortaleza-1",
    cityId: "fortaleza",
    title: "O Voo do Dragão do Mar",
    description: "Em 1881, os jangadeiros de Fortaleza liderados por Francisco José do Nascimento (o Dragão do Mar) fecharam o porto ao tráfico interprovincial de escravizados. Interprete os discursos abolicionistas e a luta social cearense.",
    icon: "⛵",
    difficulty: "Médio",
    estimatedTime: 15, // minutos
    rewards: {
      xp: 480,
      milhas: 230,
      reais: 130,
      item: "Jangada Artesanal do Dragão do Mar"
    },
    questionQuery: {
      area: "linguagens",
      topic: "Interpretação",
      count: 4
    },
    narrative: {
      start: "No Centro Dragão do Mar de Arte e Cultura, diante da réplica da lendária jangada Libertadora, historiadores examinam os manifestos de 'O Libertador'. A corajosa recusa dos práticos do porto em embarcar escravizados em direção ao Sudeste cafeeiro exige apurada compreensão leitora dos testemunhos da época.",
      success: "Brilhante interpretação textual! Você compreendeu as nuances da tese emancipacionista e os motivos históricos que tornaram o Ceará pioneiro na abolição da escravidão em 1884.",
      failure: "A leitura não captou o tom combativo e a ironia do manifesto da Sociedade Cearense Libertadora. Pratique mais leitura crítica e inferência de sentidos!"
    }
  },
  {
    id: "missao-fortaleza-2",
    cityId: "fortaleza",
    title: "A Matemática das Rendas e Castanhas",
    description: "Nos labirintos de corredores do Mercado Central de Fortaleza, cooperativas de artesãos de rendas de bilro e produtores de castanha de caju precisam calcular margens de lucro, impostos e estatísticas de vendas sazonais.",
    icon: "🧺",
    difficulty: "Médio",
    estimatedTime: 15,
    rewards: {
      xp: 460,
      milhas: 210,
      reais: 180,
      item: "Toalha de Renda de Bilro Cearense"
    },
    questionQuery: {
      area: "matematica",
      topic: "Estatística",
      count: 4
    },
    narrative: {
      start: "O aroma de castanha torrada preenche o Mercado Central. As artesãs de bilro enfrentam uma planilha contábil confusa: oscilações de custos de insumos e descontos a atacadistas estão distorcendo a média e a mediana do lucro semanal. Elas confiam em você para organizar os indicadores.",
      success: "Equilíbrio contábil restabelecido! Seu domínio de médias ponderadas, medianas e desvios eliminou as distorções, permitindo que os artesãos valorizem seu trabalho manual e aumentem sua rentabilidade.",
      failure: "A média foi distorcida por valores atípicos (outliers) e as contas não fecharam. Os feirantes continuam com dúvidas sobre o lucro real. Revise medidas de tendência central!"
    }
  }
];
