/**
 * Missões Narrativas — Recife & Olinda
 */

export const MISSIONS_RECIFE = [
  {
    id: "missao-recife-1",
    cityId: "recife",
    title: "Sombras de Maurício de Nassau",
    description: "No Alto da Sé e nas fortificações históricas do Recife Antigo, documentos do período holandês e da Insurreição Pernambucana de 1645 foram resgatados. Decifre a conjuntura política e econômica do Brasil Colonial.",
    icon: "🏰",
    difficulty: "Médio",
    estimatedTime: 15, // minutos
    rewards: {
      xp: 520,
      milhas: 260,
      reais: 160,
      item: "Moeda Holandesa Obsidional de 1646"
    },
    questionQuery: {
      area: "humanas",
      topic: "Brasil Colonial",
      count: 4
    },
    narrative: {
      start: "Olhando as pontes sobre os rios Capibaribe e Beberibe, um historiador da Fundação Joaquim Nabuco examina contratos da Companhia das Índias Ocidentais (WIC). O conflito entre colonos luso-brasileiros e a administração batava de Maurício de Nassau exige uma análise rigorosa do ciclo do açúcar e da cobrança de dívidas.",
      success: "Análise histórica magistral! Você desvendou as contradições entre a tolerância religiosa nassoviana, a exploração escravista nos engenhos e o nativismo que culminou na Batalha dos Guararapes.",
      failure: "As datas e motivações econômicas da expulsão dos holandeses ficaram confusas na sua explanação. Revise a União Ibérica e a economia açucareira!"
    }
  },
  {
    id: "missao-recife-2",
    cityId: "recife",
    title: "Antenas na Lama: O Manifesto Manguebeat",
    description: "No Marco Zero, entre o pulsar dos tambores de maracatu e a vanguarda do Porto Digital, analise as estratégias argumentativas e metafóricas dos manifestos da contracultura pernambucana.",
    icon: "🦀",
    difficulty: "Fácil",
    estimatedTime: 12,
    rewards: {
      xp: 400,
      milhas: 200,
      reais: 90,
      item: "Chapéu de Palha Manguebeat"
    },
    questionQuery: {
      area: "linguagens",
      topic: "Argumentação",
      count: 3
    },
    narrative: {
      start: "O estuário do Recife respira maré e tecnologia. Um coletivo de comunicadores debate no Marco Zero a força persuasiva do manifesto 'Caranguejos com Cérebro' de Fred Zero Quatro e Chico Science. Você é desafiado a dissecar os recursos retóricos, a tese central e os contra-argumentos da obra.",
      success: "Ritmo argumentativo afiado! Você decodificou a fusão entre crítica social urbana, conectividade global e raízes culturais com precisão cirúrgica de linguagens.",
      failure: "Você se perdeu nas metáforas do manguezal e não identificou os conectivos e a tese central do texto. Muita atenção aos operadores argumentativos!"
    }
  }
];
