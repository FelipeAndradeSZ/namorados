/**
 * LIVRO DIDÁTICO DIGITAL: Ecologia, Biomas e Desequilíbrios Ambientais
 * Área: Ciências da Natureza e suas Tecnologias (Biologia)
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_NATUREZA_ECOLOGIA = {
  id: "livro-natureza-ecologia",
  area: "natureza",
  title: "Ecologia, Biomas e Dinâmica Ambiental",
  subtitle: "O tema com maior incidência histórica em toda a prova de Ciências da Natureza",
  estimatedReadingTimeMinutes: 55,
  badge: "Livro Essencial • Top 1 do ENEM",
  coverColor: "from-emerald-950 to-green-900",
  prerequisites: [
    "Conceitos de autotrofia (fotossíntese/quimiossíntese) e heterotrofia (respiração/fermentação)",
    "Níveis de organização em biologia: organismo, população, comunidade, ecossistema e biosfera"
  ],
  learningObjectives: [
    "Diferenciar o fluxo unidirecional de energia dos ciclos biogeoquímicos da matéria",
    "Dominar todas as etapas microbiológicas do ciclo do nitrogênio",
    "Classificar e interpretar relações ecológicas intraespecíficas e interespecíficas",
    "Compreender a dinâmica dos biomas brasileiros e suas adaptações botânicas",
    "Analisar as causas e consequências de desequilíbrios antrópicos como eutrofização e biomagnificação"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "Fluxo de Energia e Ciclos Biogeoquímicos",
      targetSkill: "H5, H8 — Analisar fluxos energéticos e ciclos biogeoquímicos em ecossistemas",
      practiceModuleId: "natureza/ecologia",
      deepContent: `
A vida na Terra depende do equilíbrio entre a entrada contínua de energia e a reciclagem perpétua de átomos.

1. Fluxo de Energia nos Níveis Tróficos:
• Fonte Primária: A radiação solar é capturada pelos produtores (autótrofos fotossintetizantes) e convertida em energia química (glicose).
• Fluxo UNIDIRECIONAL e DECRESCENTE: Ao contrário da matéria, a energia NÃO se recicla. A cada passagem de nível trófico (produtor → consumidor primário → secundário → terciário), cerca de 90% da energia útil é dissipada na forma de calor metabólico e trabalho celular. Apenas cerca de 10% é transferida ao nível seguinte (regra dos 10%).
• Pirâmides Ecológicas:
  - Pirâmide de Energia: NUNCA PODE SER INVERTIDA (a base de produtores sempre contém a maior quantidade total de calorias).
  - Pirâmide de Biomassa e de Números: Podem ser invertidas em casos particulares (ex: fitoplâncton marinho com ciclo reprodutivo ultra-rápido sustentando zooplâncton mais pesado; ou uma única árvore alimentando milhares de lagartas).

2. Ciclo do Nitrogênio (O mais cobrado no ENEM!):
O N₂ atmosférico (78% do ar) é inerte e não pode ser assimilado diretamente por plantas e animais. Seu ciclo depende de bactérias especializadas:
1. Fixação Biológica: N₂ gasoso é convertido em amônia (NH₃ / NH₄⁺) por bactérias fixadoras de vida livre (Azotobacter, cianobactérias) ou mutualistas radiculares (Rhizobium em leguminosas como soja e feijão).
2. Nitrificação (Processo em 2 etapas estritamente aeróbico):
   a) Nitrosação: Nitrosomonas oxidam amônia a nitrito: 2 NH₃ + 3 O₂ → 2 NO₂⁻ + 2 H⁺ + 2 H₂O.
   b) Nitratação: Nitrobacter oxidam nitrito a nitrato: 2 NO₂⁻ + O₂ → 2 NO₃⁻ (o nitrato é a forma prioritariamente absorvida pelas raízes vegetais).
3. Assimilação: As plantas usam NO₃⁻ para sintetizar aminoácidos, proteínas e ácidos nucleicos (DNA/RNA).
4. Desnitrificação: Em ambientes anóxicos/alagados, bactérias desnitrificantes (Pseudomonas denitrificans) convertem nitrato de volta a gás N₂, fechando o ciclo.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Adubação Verde e Rotação de Culturas",
          enunciado: "Agricultores sustentáveis costumam alternar o cultivo de gramíneas (como milho) com leguminosas (como feijão e tremoço), técnica conhecida como rotação de culturas. Em alguns casos, a biomassa da leguminosa é incorporada diretamente ao solo ('adubação verde'). Qual é a base biológica que torna essa prática altamente eficaz para enriquecer o solo sem uso de fertilizantes nitrogenados sintéticos?",
          stepByStep: [
            "Passo 1: Identifique a associação mutualística nas leguminosas:",
            "As raízes das leguminosas possuem nódulos colonizados por bactérias simbióticas do gênero Rhizobium.",
            "Passo 2: Explique o papel fisiológico da bactéria:",
            "Essas bactérias expressam a enzima nitrogenase, que quebra a tripla ligação do N₂ atmosférico e o transforma em compostos amoniacais.",
            "Passo 3: Conecte à nutrição do solo:",
            "Em troca, a planta fornece carboidratos produzidos na fotossíntese para as bactérias.",
            "Quando a leguminosa é podada ou enterrada, a decomposição de seus tecidos ricos em nitrogênio libera nitratos orgânicos no solo, fertilizando a safra subsequente de milho."
          ],
          gabarito: "Fixação biológica de nitrogênio por bactérias Rhizobium mutualistas nas raízes das leguminosas."
        }
      ],
      realWorldApplications: [
        "Inoculação biológica de sementes de soja com biofertilizantes bacterianos, economizando bilhões de dólares em adubos químicos.",
        "Tratamento de efluentes industriais com biodigestores e etapas de desnitrificação biológica.",
        "Manejo de pastagens consorciadas com leguminosas forrageiras."
      ],
      commonMisconceptions: [
        "Achar que animais podem assimilar nitrogênio pela respiração direta do ar (animais só adquirem nitrogênio orgânico ingerindo proteínas na alimentação).",
        "Confundir nitrito (NO₂⁻, tóxico) com nitrato (NO₃⁻, nutriente vegetal).",
        "Achar que pirâmide de energia pode ser invertida (leis da termodinâmica impedem a base de ter menos energia que o topo)."
      ],
      quickReviewPoints: [
        "Energia: fluxo unidirecional e decrescente (~10% passa para o nível seguinte).",
        "Matéria: fluxo cíclico reciclado por decompositores.",
        "Ciclo do N: Fixação (Rhizobium) → Nitrosação (Nitrosomonas) → Nitratação (Nitrobacter) → Desnitrificação (Pseudomonas).",
        "Pirâmide de energia NUNCA é invertida."
      ]
    },
    {
      chapterNumber: 2,
      title: "Relações Ecológicas e Dinâmica de Populações",
      targetSkill: "H8 — Analisar interações biológicas e controle biológico de pragas",
      practiceModuleId: "natureza/ecologia",
      deepContent: `
Nenhum ser vivo habita um ecossistema isoladamente. As interações biológicas são classificadas quanto aos benefícios ou prejuízos aos participantes.

1. Classificação das Relações Ecológicas:
• Intraespecíficas (mesma espécie):
  - Harmônicas (+/+):
    * Sociedade: Indivíduos anatomicamente separados com divisão organizada de trabalho e castas (abelhas, formigas, cupins).
    * Colônia: Indivíduos unidos fisicamente com dependência anatômica estrutural (corais, caravela-portuguesa).
  - Desarmônicas (+/- ou -/-):
    * Competição intraespecífica: Disputa por parceiros sexuais, território e alimento (fator regulador da densidade populacional).
    * Canibalismo: Indivíduo mata e consome outro da mesma espécie.

• Interespecíficas (espécies diferentes):
  - Harmônicas (+/+ ou +/0):
    * Mutualismo (+/+ obrigatório): Interdependência vital indispensável para a sobrevivência (líquens = fungo + alga; micorrizas = fungo + raízes).
    * Protocooperação (+/+ facultativo): Ambas se beneficiam, mas podem viver separadas (pássaro-palito e crocodilo; anêmona e peixe-palhaço).
    * Comensalismo (+/0): Uma espécie se beneficia dos restos alimentares sem prejudicar a outra (tubarão e rêmora).
    * Inquilinismo / Epifitismo (+/0): Uma espécie utiliza outra como suporte mecânico em busca de luz sem parasitá-la (orquídeas e bromélias sobre troncos de árvores).
  - Desarmônicas (+/-):
    * Predatismo (+/-): Um predador caça, mata e devora a presa de espécie distinta.
    * Parasitismo (+/-): O parasita obtém nutrientes do hospedeiro vivo, geralmente sem intenção de matá-lo de imediato (tênia, lombriga, carrapato).
    * Amensalismo / Antibiose (0/-): Uma espécie inibe ou mata o desenvolvimento de outra liberando substâncias químicas (fungo Penicillium inibindo bactérias; maré vermelha).
    * Competição interespecífica (-/-): Ambas perdem energia disputando o mesmo nicho ecológico.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Controle Biológico de Pragas no ENEM",
          enunciado: "Para conter a proliferação da broca-da-cana sem utilizar inseticidas organofosforados que contaminam lençóis freáticos, usinas de bioenergia liberam vespas parasitoides da espécie Cotesia flavipes. As vespas fêmeas depositam seus ovos dentro das lagartas da broca, cujas larvas consomem a praga por dentro até matá-la. Qual é a relação ecológica explorada nessa técnica agrícola sustentável?",
          stepByStep: [
            "Passo 1: Analise a interação entre a vespa e a lagarta:",
            "São duas espécies distintas (relação interespecífica).",
            "A vespa obtém benefício para suas larvas (+).",
            "A lagarta é consumida e morre sem poder se reproduzir (-).",
            "Passo 2: Especifique a natureza da relação:",
            "Trata-se de um parasitoide (parasitismo que invariavelmente culmina na morte do hospedeiro).",
            "No contexto agronômico, essa estratégia chama-se Controle Biológico de Pragas, muito valorizada no ENEM por substituir defensivos químicos poluentes."
          ],
          gabarito: "Parasitismo / Controle Biológico."
        }
      ],
      realWorldApplications: [
        "Uso de joaninhas para predação de pulgões em agricultura orgânica.",
        "Tratamento de infecções bacterianas com bacteriófagos (vírus predadores de bactérias).",
        "Manejo de florestas e preservação de insetos polinizadores (mutualismo planta-abelha indispensável para a fruticultura)."
      ],
      commonMisconceptions: [
        "Confundir mutualismo (obrigatório para sobrevivência) com protocooperação (facultativo).",
        "Achar que epífitas (orquídeas e bromélias) são parasitas que sugam a seiva da árvore hospedeira (elas apenas usam o galho como apoio mecânico; não tiram seiva da planta!).",
        "Confundir colônia (ligação física anatômica) com sociedade (indivíduos livres cooperando)."
      ],
      quickReviewPoints: [
        "Mutualismo: +/+ obrigatório.",
        "Protocooperação: +/+ facultativo.",
        "Epifitismo / Inquilinismo: +/0 mecânico (NÃO é parasita!).",
        "Amensalismo: 0/- (fungo e antibiótico, maré vermelha)."
      ]
    },
    {
      chapterNumber: 3,
      title: "Biomas Brasileiros e Adaptações Botânicas",
      targetSkill: "H8, H28 — Compreender características morfofisiológicas dos biomas nacionais",
      practiceModuleId: "natureza/ecologia",
      deepContent: `
O Brasil possui seis grandes biomas continentais, cada um moldado por fatores climáticos e geomorfológicos singulares.

1. Cerrado (A Savana Brasileira):
• Clima: Tropical típico com duas estações bem marcadas: verão quente e chuvoso, inverno seco prolongado.
• Solo: Ácido, profundo, muito antigo e rico em alumínio e ferro (latossolos intemperizados).
• Adaptações Botânicas:
  - Troncos tortuosos e casca grossa suberosa (isolante térmico contra o fogo natural).
  - Raízes pivotantes profundas (que descem até 15 metros para alcançar o lençol freático no inverno — 'floresta invertida').
  - Folhas coriáceas (grossas) para evitar perda de água.
  - O fogo periódico e natural é um agente ecológico de quebra de dormência de sementes e floração.
• Ameaça: Expansão desenfreada de monoculturas de grãos no Matopiba.

2. Caatinga (O Sertão Semiárido):
• Clima: Semiárido com chuvas escassas, irregulares e alta taxa de evapotranspiração.
• Adaptações Botânicas (Xeromorfismo Estrito):
  - Cactos (cactáceas): folhas reduzidas a espinhos (evita perda de água por transpiração e defende contra herbivoria); caule verde fotossintetizante e clorofilado (cladódio) acumulador de água (parênquima aquífero).
  - Queda sazonal de folhas (caducifólia) no período seco para diminuir a superfície de evaporação.
  - Raízes superficiais e espalhadas para captar orvalho e chuvas rápidas passageiras.

3. Amazônia (Floresta Pluvial Equatorial):
• Clima: Equatorial úmido, quente e com alta pluviosidade o ano inteiro.
• Solo: Paradoxalmente POBRE e arenoso em nutrientes minerais profundos.
• O 'Paradoxo do Solo Amazônico': A floresta exuberante se sustenta pela serrapilheira (camada de folhas, frutos e galhos mortos que caem no chão e são decompostos vertiginosamente por fungos e bactérias graças ao calor e umidade, sendo reabsorvidos imediatamente pelas raízes com micorrizas). Se a floresta for desmatada, o solo torna-se estéril rapidamente por lixiviação.

4. Mata Atlântica (Floresta Tropical Úmida Costeira):
• Relevo: 'Mares de morros' e escarpas litorâneas expostas aos ventos úmidos do oceano (chuvas orográficas).
• Biodiversidade: Considerada um dos hotspots mundiais mais ameaçados (resta menos de 12% da área original, em fragmentos dispersos).
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O Papel Ecológico do Fogo no Cerrado",
          enunciado: "Diversas espécies arbóreas e gramíneas do Cerrado brasileiro exibem floração e dispersão de sementes estimuladas logo após a passagem de queimadas sazonais. Qual característica morfológica protege os meristemas apicais e o câmbio vascular dessas plantas durante o fogo rápido de superfície?",
          stepByStep: [
            "Passo 1: Lembre da estrutura anatômica externa do caule das plantas do Cerrado:",
            "As plantas do Cerrado possuem uma camada extremamente espessa de súber (cortiça/casca morta cheia de células com suberina e ar em seu interior).",
            "Passo 2: Conecte à propriedade física do súber:",
            "O súber atua como um excelente isolante térmico de baixa condutividade calórica.",
            "Passo 3: Conclua sobre a proteção celular:",
            "A chama superficial consome a palha seca rapidamente (temperatura dura poucos minutos), e o calor não consegue penetrar até o câmbio vascular e os tecidos vivos internos, preservando a capacidade de rebrotar assim que as primeiras chuvas retornam."
          ],
          gabarito: "Casca espessa com abundante tecido suberoso de isolamento térmico."
        }
      ],
      realWorldApplications: [
        "Manejo Integrado do Fogo (MIF) por brigadistas em parques nacionais para prevenir incêndios catastróficos.",
        "Zoneamento ecológico-econômico e recuperação de nascentes degradadas no Cerrado.",
        "Criação de corredores ecológicos na Mata Atlântica para diminuir o efeito de borda e conectar populações isoladas."
      ],
      commonMisconceptions: [
        "Achar que o solo da Amazônia é riquíssimo em minerais (o solo é pobre; a riqueza está na serrapilheira e na ciclagem rápida de nutrientes).",
        "Achar que toda queimada no Cerrado é fruto de crime humano (existe fogo natural gerado por raios no final da seca, ao qual o bioma é evolutivamente adaptado).",
        "Achar que a Caatinga é um deserto sem vida (é a savana semiárida com maior biodiversidade e riqueza de endemismo do planeta)."
      ],
      quickReviewPoints: [
        "Cerrado: troncos tortuosos, casca grossa (súber isolante), raízes profundas, 'berço das águas'.",
        "Caatinga: xerófitas, folhas em espinhos, caules acumuladores de água (cactos), caducifólias.",
        "Amazônia: solo pobre sustentado por ciclagem rápida da serrapilheira.",
        "Mata Atlântica: hotspot de biodiversidade ameaçado, alta taxa de endemismo."
      ]
    },
    {
      chapterNumber: 4,
      title: "Desequilíbrios Ambientais: Eutrofização e Biomagnificação",
      targetSkill: "H8, H29 — Avaliar impactos ambientais de poluentes químicos e esgotos",
      practiceModuleId: "natureza/ecologia",
      deepContent: `
O ENEM cobra com extrema frequência a cadeia de eventos de degradação provocada pela atividade humana em ecossistemas aquáticos e terrestres.

1. Eutrofização Artificial (Passo a Passo Obrigatório):
Ocorre pelo despejo excessivo de nutrientes inorgânicos (nitrogênio e fósforo) provenientes de esgoto doméstico não tratado ou fertilizantes agrícolas lavados pelas chuvas:
Etapa 1: Aporte massivo de nitratos e fosfatos em rios, lagos ou represas.
Etapa 2: Explosão populacional de algas fitoplanctônicas e cianobactérias na superfície (floração ou 'bloom'), formando uma camada verde/escura opaca.
Etapa 3: Bloqueio da luz solar: a luz não penetra na coluna d'água.
Etapa 4: Morte da vegetação aquática submersa (que não consegue mais realizar fotossíntese).
Etapa 5: Proliferação explosiva de bactérias decompositoras aeróbicas para degradar a montanha de biomassa vegetal morta.
Etapa 6: CONSUMO EXTREMO DE OXIGÊNIO DISSOLVIDO (a Demanda Bioquímica de Oxigênio - DBO dispara e o nível de O₂ cai próximo a zero).
Etapa 7: Morte por asfixia em massa de peixes, crustáceos e animais aquáticos aeróbicos.
Etapa 8: Predomínio final de bactérias anaeróbicas, liberando gases tóxicos e fétidos (gás sulfídrico - H₂S e metano - CH₄).

2. Bioacumulação vs. Biomagnificação Trófica:
• Bioacumulação: Ocorre em UM INDIVÍDUO ao longo de sua vida. O organismo absorve poluentes não biodegradáveis (geralmente lipossolúveis, como mercúrio, chumbo, agrotóxicos organoclorados como DDT e microplásticos) em taxa mais rápida do que sua capacidade hepática de excretá-los.
• Biomagnificação Trófica (Magnificação Trófica): Ocorre AO LONGO DE TODA A CADEIA ALIMENTAR. Como o poluente não é degradado e não é excretado, sua CONCENTRAÇÃO POR UNIDADE DE MASSA AUMENTA a cada nível trófico.
Consequência no ENEM:
Produtor (fitoplâncton: 0,04 ppm) → Consumidor primário (zooplâncton: 0,2 ppm) → Peixe pequeno (2 ppm) → Peixe predador (20 ppm) → SER HUMANO / GAIVOTA / TOPO DA CADEIA (200 ppm!).
Regra de ouro: O predador de topo SEMPRE acumula a concentração mais letal de poluentes bioacumulativos.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: Contaminação por Mercúrio em Garimpos Fluviais",
          enunciado: "O garimpo ilegal na bacia amazônica despeja toneladas de mercúrio metálico nos leitos fluviais. O mercúrio é convertido por bactérias bentônicas em metilmercúrio, composto altamente lipossolúvel. Uma comunidade ribeirinha consome quatro tipos de organismos aquáticos: macrófitas (produtores), caracóis herbívoros (consumidores primários), pequenos lambaris (consumidores secundários) e grandes tucunarés piscívoros (consumidores terciários). Em qual dessas espécies será detectada a maior concentração de metilmercúrio por grama de tecido biológico?",
          stepByStep: [
            "Passo 1: Identifique a cadeia trófica:",
            "Macrófita (Produtor) → Caracol (Consumidor 1º) → Lambari (Consumidor 2º) → Tucunaré (Consumidor 3º).",
            "Passo 2: Reconheça o fenômeno ecológico:",
            "O metilmercúrio é lipossolúvel e não biodegradável, sofrendo biomagnificação trófica ao longo dos níveis alimentares.",
            "Passo 3: Aplique a regra da biomagnificação:",
            "A cada nível trófico, o predador ingere centenas de presas ao longo da vida e retém o poluente acumulado de todas elas.",
            "Portanto, o tucunaré (predador de topo da cadeia descrita) exibirá a concentração mais elevada e perigosa de metilmercúrio."
          ],
          gabarito: "Tucunarés piscívoros (consumidores terciários)."
        }
      ],
      realWorldApplications: [
        "Monitoramento da qualidade da água potável através da medição de DBO (Demanda Bioquímica de Oxigênio).",
        "Regulamentação e proibição do DDT pela Convenção de Estocolmo sobre Poluentes Orgânicos Persistentes.",
        "Tratamento terciário de esgoto com remoção biológica de fosfatos e nitratos para salvar represas urbanas."
      ],
      commonMisconceptions: [
        "Achar que na eutrofização a proliferação inicial de algas produz muito oxigênio para os peixes (o bloom cobre a superfície e a decomposição posterior ZERA o oxigênio dissolvido).",
        "Confundir biomagnificação com bioacumulação (bioacumulação é no organismo; biomagnificação é ao longo da cadeia alimentar).",
        "Achar que o produtor tem a maior concentração de poluente (o produtor tem a MENOR concentração; o topo tem a MAIOR)."
      ],
      quickReviewPoints: [
        "Eutrofização: Excesso de N e P → Bloom de algas → Bloqueio de luz → Decomposição aeróbica consome O₂ → Morte de peixes por asfixia.",
        "Biomagnificação: Poluentes não biodegradáveis acumulam-se em concentração máxima no TOPO da cadeia trófica.",
        "DBO alta indica água poluída com muita matéria orgânica sendo decomposta."
      ]
    }
  ]
};
