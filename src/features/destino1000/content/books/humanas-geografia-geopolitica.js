/**
 * LIVRO DIDÁTICO DIGITAL: Geografia do Brasil e Geopolítica Mundial
 * Área: Ciências Humanas e suas Tecnologias (Geografia)
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_HUMANAS_GEOGRAFIA_GEOPOLITICA = {
  id: "livro-humanas-geografia-geopolitica",
  area: "humanas",
  title: "Geografia do Brasil e Geopolítica Mundial",
  subtitle: "Território, domínios de natureza, dinâmicas demográficas e o espaço global",
  estimatedReadingTimeMinutes: 60,
  badge: "Livro Essencial • Geografia e Geopolítica",
  coverColor: "from-emerald-950 to-teal-900",
  prerequisites: [
    "Noções básicas de coordenadas geográficas e escalas cartográficas",
    "Compreensão dos períodos históricos do século XX (Guerra Fria e descolonização)"
  ],
  learningObjectives: [
    "Identificar as características e os processos de degradação dos seis domínios morfoclimáticos brasileiros segundo Aziz Ab'Sáber",
    "Analisar as fases da transição demográfica brasileira, o bônus demográfico e o envelhecimento da população",
    "Compreender a produção do espaço urbano, segregação socioespacial, gentrificação e migrações pendulares",
    "Avaliar a estrutura fundiária concentrada, a modernização conservadora no campo e o avanço da fronteira agrícola",
    "Interpretar a Nova Ordem Mundial multipolar, a Divisão Internacional do Trabalho e o papel geopolítico dos BRICS"
  ],
  chapters: [
    {
      chapterNumber: 1,
      title: "Domínios Morfoclimáticos e Biogeografia do Brasil",
      targetSkill: "H26, H28, H29 — Avaliar a dinâmica dos ecossistemas e impactos da ação antrópica sobre o relevo e clima",
      practiceModuleId: "humanas/geografia-fisica-clima",
      deepContent: `
O geógrafo Aziz Nacib Ab'Sáber estabeleceu a classificação dos 'Domínios Morfoclimáticos do Brasil' integrando relevo, clima, hidrografia, solos e vegetação. Um domínio não é apenas um bioma botânico; é uma síntese paisagística de escala regional.

1. Os Seis Domínios Morfoclimáticos Brasileiros:
• Domínio Amazônico:
  - Relevo de terras baixas, depressões e planícies aluviais; clima equatorial úmido e quente com chuvas convectivas diárias.
  - Floresta latifoliada e perenifólia estratificada: Igapó (permanentemente inundada), Várzea (periodicamente inundada) e Terra Firme (nunca inunda, onde estão as grandes árvores como a castanheira).
  - Solo amazônico: Arenoso e pobre em minerais solúveis (lixiviado), nutrido por uma camada superficial de serrapilheira (ciclagem rápida de matéria orgânica).
• Domínio do Cerrado:
  - Planaltos e chapadões sedimentares centrais; clima tropical típico com duas estações bem definidas (verão chuvoso e inverno seco).
  - Vegetação caducifólia e savânica com troncos tortuosos, cascas grossas de cortiça e raízes profundas (freatófitas) para buscar o lençol freático.
  - Solos profundos, ácidos e ricos em ferro e alumínio (laterização e lixiviação). A correção com calcário (calagem) permitiu sua transformação no polo agrícola do país.
• Domínio dos Mares de Morros (Faixa Atlântica):
  - Planaltos cristalinos esculpidos em forma de meia-laranja ('mamelonização') ao longo da costa atlântica; clima tropical úmido e litorâneo.
  - Remanescentes de Mata Atlântica; área com o maior adensamento populacional do Brasil. Sujeito a graves movimentos de massa (deslizamentos de encostas e voçorocas) na época das chuvas de verão.
• Domínio da Caatinga:
  - Depressão sertaneja interplanáltica; clima semiárido com chuvas escassas e irregulares (polígono das secas).
  - Vegetação xerófila com cactos (mandacaru, xiquexique), arbustos espinhosos e perda de folhas na estiagem para evitar evapotranspiração.
  - Solos rasos e pedregosos com intemperismo físico predominante; risco grave de desertificação induzida por queimadas e superpastejo.
• Domínio das Araucárias (Mata dos Pinhais):
  - Planaltos meridionais do Sul do Brasil; clima subtropical com chuvas bem distribuídas e invernos frios.
  - Pinheiro-do-paraná (Araucaria angustifolia); solos férteis de terra roxa vulcânica (basalto da Formação Serra Geral). Sofreu devastação superior a 95% pela exploração madereira e expansão agropecuária.
• Domínio das Pradarias (Pampas ou Coxilhas):
  - Relevo ondulado e suave de colinas; clima subtropical; vegetação rasteira herbácea (gramíneas). Pecuária extensiva tradicional e lavouras de arroz/soja; sujeito ao processo de arenização do solo.

2. Faixas de Transição:
Entre os domínios situam-se faixas híbridas ricas em biodiversidade:
- O Pantanal Mato-Grossense: maior planície inundável do planeta.
- A Mata dos Cocais: transição entre a Amazônia e o Sertão nordestino, dominada pelas palmeiras de babaçu e carnaúba (economia do extrativismo vegetal feminino das quebradeiras de coco).
- O Agreste: faixa de transição entre a Zona da Mata úmida e o Sertão semiárido, barrado pelo Planalto da Borborema.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O Papel da Calagem na Ocupação do Cerrado",
          enunciado: "Historicamente considerado imprestável para a agricultura em larga escala, o Domínio do Cerrado transformou-se no principal polo de produção de grãos do Brasil a partir da década de 1970. Qual foi o principal gargalo pedológico superado pela biotecnologia agrícola e química de solos?",
          stepByStep: [
            "Passo 1: Identifique a característica química nativa dos solos do Cerrado (Latossolos):",
            "São solos altamente lixiviados, intemperizados e ácidos, com baixa fertilidade natural e presença excessiva de íons tóxicos de alumínio (Al³⁺).",
            "Passo 2: Explique a intervenção técnica realizada:",
            "A aplicação massiva de calcário moído (processo agronômico de calagem) neutralizou a acidez (elevando o pH do solo) e precipitou o alumínio tóxico, além de fornecer cálcio e magnésio para as plantas.",
            "Passo 3: Conclua a consequência produtiva:",
            "Aliada à correção com fertilizantes à base de fósforo e ao desenvolvimento de cultivares adaptadas pela EMBRAPA, a calagem viabilizou o plantio mecanizado intensivo de soja e milho nos chapadões planos."
          ],
          gabarito: "A acidez acentuada do solo e a toxidade do alumínio, neutralizadas pela prática da calagem (adição de calcário)."
        }
      ],
      realWorldApplications: [
        "Gestão de bacias hidrográficas e contenção de encostas urbanas para evitar tragédias climáticas em relevos de Mares de Morros.",
        "Projetos de restauração ecológica e combate à desertificação no Semiárido nordestino.",
        "Planejamento de zoneamento ecológico-econômico no bioma Cerrado para conter a supressão de vegetação nativa."
      ],
      commonMisconceptions: [
        "Achar que o solo da Floresta Amazônica é naturalmente fértil em profundidade (a fertilidade é mantida exclusivamente pela serrapilheira superficial; desmatar provoca rápida exaustão do solo arenoso).",
        "Confundir arenização com desertificação (arenização ocorre em clima úmido dos pampas por exposição de arenito frágil; desertificação ocorre em clima árido/semiárido/subúmido seco).",
        "Achar que o relevo brasileiro possui dobramentos modernos ativos (o relevo brasileiro é geologicamente antigo, cristalino-sedimentar estável, desgastado por erosão contínua)."
      ],
      quickReviewPoints: [
        "Ab'Sáber: síntese morfoclimática integrada (relevo, clima, solo, flora e hidrografia).",
        "Amazônico: terras baixas equatoriais úmidas; ciclagem por serrapilheira.",
        "Cerrado: chapadões com verões chuvosos e invernos secos; solos ácidos corrigidos por calagem.",
        "Mares de Morros: relevo mamelonar atlântico com Mata Atlântica e suscetibilidade a deslizamentos.",
        "Caatinga: depressão interplanáltica semiárida com plantas xerófitas e risco de desertificação."
      ]
    },
    {
      chapterNumber: 2,
      title: "Dinâmica Demográfica, Urbanização e Mobilidade Metropolitana",
      targetSkill: "H17, H18, H19 — Analisar indicadores demográficos, segregação socioespacial e dinâmicas urbanas",
      practiceModuleId: "humanas/geografia-urbana",
      deepContent: `
O espaço geográfico brasileiro sofreu uma reorganização radical ao longo do século XX: o país deixou de ser predominantemente rural e agrário para se tornar um país urbano, com mais de 87% da população vivendo em cidades.

1. A Transição Demográfica Brasileira:
A transição demográfica é a passagem de um regime tradicional (altas taxas de natalidade e de mortalidade) para um regime moderno (baixas taxas de natalidade e de mortalidade).
• Fase 1 (Até 1940): Natalidade e mortalidade muito altas; crescimento vegetativo lento e baixa expectativa de vida.
• Fase 2 (1940-1960): Queda brusca da mortalidade decorrente da urbanização, melhorias no saneamento básico e revolução dos antibióticos e vacinas. A natalidade permaneceu alta, gerando a "explosão demográfica" brasileira.
• Fase 3 (1960-2010): Despencamento da taxa de fecundidade (de 6,3 filhos por mulher em 1960 para menos de 1,6 em 2022). Motivos: entrada massiva das mulheres no mercado de trabalho formal, custo de vida elevado nas metrópoles, difusão de métodos contraceptivos e planejamento familiar.
• Fase 4 (Atual): Baixa natalidade e baixa mortalidade. O Brasil experimenta o fim do 'bônus demográfico' (fase em que a População em Idade Ativa - PIA supera a soma de dependentes jovens e idosos) e marcha para um acelerado envelhecimento populacional, impondo desafios estruturais à previdência social e ao sistema de saúde (SUS).

2. O Processo de Urbanização Brasileiro:
O processo caracterizou-se pela velocidade vertiginosa e pela ausência de planejamento estrutural, impulsionado pelo violento êxodo rural decorrente da industrialização sudestina e da mecanização agrícola no campo.
• Conceitos Fundamentais da Rede Urbana:
  - Urbanização: Crescimento percentual da população urbana em relação à rural.
  - Conurbação: Unificação física de duas ou mais manchas urbanas de municípios vizinhos que cresceram até se fundirem.
  - Região Metropolitana: Conjunto de municípios conurbados integrados socioeconomicamente a uma metrópole polo, demandando gestão pública compartilhada de serviços (transporte, saneamento, destinação de resíduos).
  - Macrocefalia Urbana: Concentração desmedida de população, serviços e capital em uma única cidade metropolitana principal em detrimento de cidades médias e pequenas.
  - Desmetropolização: Tendência recente de desconcentração industrial das grandes metrópoles tradicionais (como a RMSP) em direção a cidades médias do interior, atraídas por incentivos fiscais, custos operacionais menores e trânsito menos saturado.

3. Segregação Socioespacial e Mobilidade Urbana:
• Segregação Socioespacial: Fragmentação e divisão da cidade em áreas ricas com farta infraestrutura de saneamento, iluminação e transporte, em contraposição a periferias desprovidas de serviços essenciais e áreas de risco geológico (favelas e loteamentos clandestinos).
• Gentrificação: Processo de intervenção urbanística em bairros populares degradados que valoriza o solo urbano, encarece o custo de vida e expulsa a população originária de baixa renda para áreas mais distantes.
• Migração Pendular: Deslocamento diário e regular de trabalhadores e estudantes que residem em um município periférico ou dormitório e se deslocam até o centro econômico metropolitano para trabalhar ou estudar, retornando para casa à noite.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O Fim do Bônus Demográfico",
          enunciado: "O Censo Demográfico do IBGE revelou que a taxa de fecundidade brasileira caiu para níveis abaixo da taxa de reposição populacional (2,1 filhos por mulher). Quais são os impactos socioeconômicos diretos do encerramento da janela do 'bônus demográfico' no Brasil?",
          stepByStep: [
            "Passo 1: Entenda o que é o bônus demográfico:",
            "Período em que a proporção de cidadãos aptos a trabalhar e produzir riqueza (adultos em idade ativa) é superior à proporção de indivíduos dependentes (crianças e idosos).",
            "Passo 2: Analise o que ocorre com o fim desse bônus e o envelhecimento da pirâmide etária:",
            "A base da pirâmide etária encolhe (menos jovens entrando no mercado de trabalho), enquanto o topo alarga significativamente (maior quantidade de idosos aposentados que demandam cuidados de saúde e previdência).",
            "Passo 3: Identifique a pressão sobre as contas públicas e políticas estatais:",
            "Aumenta a razão de dependência demográfica, gerando déficits no custeio previdenciário e exigindo investimentos urgentes em geriatria, redes de cuidado e elevação da produtividade por trabalhador ativo."
          ],
          gabarito: "Aumento da razão de dependência de idosos, exigindo reformas fiscais/previdenciárias e políticas de elevação da produtividade e saúde geriátrica."
        }
      ],
      realWorldApplications: [
        "Planejamento de redes integradas de transporte público metropolitano sobre trilhos (trens e metrôs) para desafogar a mobilidade pendular.",
        "Políticas públicas de habitação de interesse social em vazios urbanos centrais para conter a expansão periférica desenfreada.",
        "Elaboração de reformas das regras da previdência social e capacitação profissional continuada de adultos seniores."
      ],
      commonMisconceptions: [
        "Achar que o Brasil ainda passa por uma explosão populacional com taxa de crescimento acelerada (o crescimento atual é baixíssimo e o país deve atingir seu ápice populacional e começar a encolher nas próximas décadas).",
        "Confundir migração pendular com migração definitiva ou sazonal (a pendular é um movimento diário de ir e voltar, sem fixação de residência no município de destino).",
        "Acreditar que a favelização decorre de escolha dos moradores, e não da lógica especulativa do mercado imobiliário que mercantiliza a terra urbana."
      ],
      quickReviewPoints: [
        "Fecundidade no Brasil despencou para ~1,6 filho por mulher; envelhecimento populacional acelerado.",
        "Fim do bônus demográfico eleva a razão de dependência previdenciária e hospitalar.",
        "Conurbação: junção física de manchas urbanas de municípios limítrofes.",
        "Migração pendular: deslocamento diário residência-trabalho em regiões metropolitanas.",
        "Gentrificação: elitização de espaços urbanos históricos que expulsa a população de menor renda."
      ]
    },
    {
      chapterNumber: 3,
      title: "Estrutura Fundiária, Fronteiras Agrícolas e o Agronegócio Brasileiro",
      targetSkill: "H17, H26 — Analisar a estrutura da posse da terra no Brasil e as contradições do campo",
      practiceModuleId: "humanas/meio-ambiente",
      deepContent: `
A questão agrária brasileira é historicamente marcada pela extrema concentração da propriedade da terra, conflitos fundiários violentos e pela coexistência tensa entre o agronegócio de exportação em grande escala e a agricultura familiar camponesa.

1. Raízes Históricas da Concentração Fundiária:
• O Regime de Sesmarias (1530-1822): Doação régia de extensos lotes de terras a fidalgos coloniais com capital e escravizados para cultivar monocultura de cana e café.
• A Lei de Terras de 1850 (Lei nº 601): Marco divisor na estrutura agrária brasileira. Estabeleceu que as terras públicas devolutas só poderiam ser adquiridas por meio de compra em dinheiro à vista, proibindo a posse por ocupação.
  - Efeito Estrutural: A lei foi aprovada no mesmo ano da proibição do tráfico negreiro (Lei Eusébio de Queirós) justamente para impedir que ex-escravizados libertos e imigrantes europeus pobres tivessem acesso à terra própria, forçando-os a vender sua força de trabalho como assalariados ou meeiros nas grandes fazendas das oligarquias rurais.
• Índice de Gini da Terra: Mede a desigualdade na posse do solo rural de 0 (distribuição perfeita) a 1 (concentração absoluta). No Brasil, o índice supera 0,85, figurando entre os mais concentrados do mundo: menos de 1% dos proprietários agrícolas controlam quase metade de toda a área rural cadastrada.

2. A Modernização Conservadora e a Revolução Verde:
A partir dos anos 1960 e 1970, durante a Ditadura Militar, o Estado impulsionou a modernização da agricultura brasileira por meio de créditos subsidiados pelo Sistema Nacional de Crédito Rural (SNCR), importação de tratores, agrotóxicos e sementes transgênicas híbridas.
• Por que 'Conservadora'? Porque modernizou a base técnica e biológica do campo (mecanização intensiva) sem alterar a estrutura arcaica e concentrada de propriedade da terra.
• Consequências Imediatas:
  - Destruição das relações tradicionais de trabalho rural (moradores, rendeiros, meeiros substituídos por trabalhadores temporários desprovidos de direitos estáveis — os 'boias-frias').
  - Intenso êxodo rural: expulsão de milhões de camponeses do campo para as periferias das metrópoles urbanas em busca de sobrevivência.

3. A Fronteira Agrícola e o Matopiba:
• O Deslocamento Geográfico: A lavoura comercial mecanizada expandiu-se do Sul/Sudeste para o Centro-Oeste nas décadas de 1970/1980 e, nas últimas duas décadas, avançou ferozmente em direção ao Cerrado nordestino na região conhecida pela sigla Matopiba (fronteiras confluentes do Maranhão, Tocantins, Piauí e Bahia).
• O Arco do Desmatamento: Avanço da fronteira agropecuária (pecuária extensiva de corte pioneira seguida pela monocultura intensiva da soja e milho) sobre as bordas meridionais e orientais da Floresta Amazônica nos estados de Rondônia, Mato Grosso e Pará.
• Conflitos no Campo: Disputa por terras envolvendo grileiros (falsificação documental de títulos de posse), madeireiros ilegais, fazendeiros empresariais contra comunidades tradicionais, posseiros, povos indígenas e quilombolas, gerando tensões monitoradas pela CPT (Comissão Pastoral da Terra).

4. Agronegócio vs. Agricultura Familiar:
• Agronegócio Patronal (Commodities): Produção em latifúndios monoculturais de grãos (soja, milho) e carnes voltada para a balança comercial externa (exportação), altamente tecnificada e com baixa geração de empregos por hectare.
• Agricultura Familiar: Responsável pela maior parte dos alimentos consumidos diariamente na mesa do cidadão brasileiro (hortaliças, feijão, mandioca, leite, pequenos animais), caracterizada por pequenas propriedades geridas pela própria família, maior intensidade de mão de obra e preservação agrobiodiversa.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: O Significado da Lei de Terras de 1850",
          enunciado: "Sancionada no mesmo ano em que se extinguiu o tráfico transatlântico de escravizados, a Lei de Terras de 1850 estabeleceu que as terras públicas do Império brasileiro só poderiam ser obtidas por compra em leilão público. Qual era o objetivo político e social prioritário das elites agrárias com essa medida?",
          stepByStep: [
            "Passo 1: Analise o contexto da mão de obra em 1850:",
            "Com o fim iminente do tráfico de escravizados, os grandes fazendeiros precisavam garantir uma massa contínua de trabalhadores dependentes para suas lavouras de café.",
            "Passo 2: Avalie o efeito da terra livre sobre os trabalhadores:",
            "Se qualquer imigrante ou ex-escravo pudesse simplesmente apossar-se de um lote de terra fértil devoluta para plantar seu sustento, ele se tornaria um produtor autônomo e não aceitaria trabalhar por baixos salários nas fazendas dos coronéis.",
            "Passo 3: Conclua a função da lei:",
            "Ao exigir pagamento à vista em dinheiro e titularização burocrática cara, a lei cerceou o acesso à terra para os mais pobres e garantiu mão de obra submissa para as grandes fazendas agroexportadoras."
          ],
          gabarito: "Impedir o acesso de imigrantes e trabalhadores pobres à posse de terras, mantendo-os como mão de obra assalariada dependente das oligarquias cafeeiras."
        }
      ],
      realWorldApplications: [
        "Debates legislativos sobre o Marco Temporal e a demarcação de terras indígenas e territórios quilombolas.",
        "Políticas de crédito rural direcionadas à agricultura familiar (como o PRONAF) para combate à insegurança alimentar nas cidades.",
        "Rastreabilidade ambiental de cadeias produtivas de soja e gado bovino para evitar sanções de mercados internacionais que combatem o desmatamento."
      ],
      commonMisconceptions: [
        "Achar que o agronegócio de grãos é o principal produtor da comida que abastece feiras e supermercados locais (a agricultura familiar responde pela maioria dos alimentos básicos de mesa).",
        "Achar que a modernização conservadora redistribuiu terras (ela concentrou ainda mais a terra ao expulsar pequenos posseiros que não podiam comprar maquinário pesado).",
        "Acreditar que grileiro é o pequeno posseiro que planta mandioca (grilagem é a falsificação criminosa de títulos de grandes extensões de terras públicas para apropriação privada ilícita)."
      ],
      quickReviewPoints: [
        "Lei de Terras de 1850: terra só por compra à vista; barrou o acesso dos libertos e imigrantes à propriedade.",
        "Índice de Gini rural > 0,85: extrema concentração fundiária no Brasil.",
        "Modernização Conservadora: alta tecnologia e maquinário sem reforma agrária; geração de êxodo rural e boias-frias.",
        "Matopiba: Cerrado nordestino consolidado como nova fronteira do agronegócio de grãos.",
        "Agricultura familiar: principal responsável pela produção do alimento da mesa dos brasileiros."
      ]
    },
    {
      chapterNumber: 4,
      title: "Geopolítica Global, Globalização e Nova Ordem Mundial",
      targetSkill: "H8, H9 — Avaliar a dinâmica geopolítica contemporânea, blocos regionais e a Divisão Internacional do Trabalho",
      practiceModuleId: "humanas/geopolitica",
      deepContent: `
O cenário internacional passou por profundas reconfigurações desde a derrocada da União Soviética em 1991, passando do modelo bipolar para uma Nova Ordem Mundial marcada pela globalização econômica, fragmentação regional e ascensão de novos polos de poder geopolítico.

1. Da Ordem Bipolar à Nova Ordem Multipolar:
• A Bipolaridade da Guerra Fria (1945-1991): Divisão ideológica e militar do planeta entre o bloco capitalista liderado pelos EUA (OTAN) e o bloco socialista sob comando da União Soviética (Pacto de Varsóvia), sob a ameaça da destruição mútua assegurada (corrida armamentista nuclear).
• A Transição e o 'Momento Unipolar' (Anos 1990): Com a queda do Muro de Berlim (1989) e a dissolução da URSS (1991), os EUA emergiram temporariamente como hiperpotência econômica, militar e cultural indiscutível.
• A Nova Ordem Multipolar / Unimultipolar (Século XXI):
  - Do ponto de vista militar: os Estados Unidos mantêm hegemonia com bases em todo o planeta e orçamento bélico superior à soma das nações seguintes.
  - Do ponto de vista econômico e geopolítico: a ordem é multipolar, com a consolidação da China como superpotência fabril e tecnológica, o peso regulatório da União Europeia, o ressurgimento militar-energético da Rússia e o protagonismo do bloco dos BRICS.

2. A Globalização e as Mutações da DIT (Divisão Internacional do Trabalho):
A globalização é a fase recente de integração do capitalismo transnacional impulsionada pela Terceira Revolução Industrial (Revolução Técnico-Científico-Informacional) e pela expansão da internet e de contêineres marítimos.
• As Etapas Históricas da DIT:
  1. DIT Clássica (Séculos XVI a XVIII): Metrópoles europeias exportavam manufaturas; colônias ultramarinas forneciam produtos primários (ouro, especiarias, açúcar) sob trabalho forçado.
  2. DIT Industrial (Séculos XIX ao meio do XX): Países industrializados exportavam máquinas e produtos industrializados; países periféricos exportavam matérias-primas e gêneros agrícolas.
  3. DIT Contemporânea (Século XXI): Fragmentação espacial da produção e cadeias globais de suprimentos. Países emergentes (como China, Vietnã, Índia, México e Brasil) industrializaram-se, recebendo fábricas de montagem e manufatura intensiva em mão de obra de empresas multinacionais, enquanto os países centrais (EUA, Alemanha, Japão) concentram a pesquisa de ponta, o desenvolvimento de patentes de inteligência artificial, o design de alta tecnologia e as sedes financeiras.

3. Blocos Econômicos Regionais:
Para competir na economia globalizada, os Estados uniram-se em blocos com diferentes graus de integração:
1. Zona de Livre Comércio: Redução ou eliminação de tarifas alfandegárias internas entre os membros (ex: USMCA - antigo NAFTA).
2. União Aduaneira: Livre comércio interno + adoção de uma Tarifa Externa Comum (TEC) para importações de países terceiros de fora do bloco (ex: Mercosul).
3. Mercado Comum: União aduaneira + livre circulação de mercadorias, serviços, capitais e pessoas (ex: União Europeia na fase da década de 1990).
4. União Econômica e Monetária: Mercado comum + harmonização de políticas fiscais e moeda única compartilhada com banco central regional (ex: Zona do Euro).

4. O Sul Global e os BRICS:
• O Papel dos BRICS: Inicialmente um acrônimo criado pelo banco Goldman Sachs em 2001 (Brasil, Rússia, Índia e China, com adesão posterior da África do Sul), tornou-se uma aliança política e econômica estratégica do Sul Global.
• Objetivos Centrais: Desdolarização parcial do comércio bilateral, criação de canais alternativos de financiamento ao FMI e ao Banco Mundial (como o Novo Banco de Desenvolvimento - NBD, o Banco dos BRICS com sede em Xangai) e defesa de uma ordem internacional mais representativa e menos eurocêntrica.
• Desafios Estruturais: Heterogeneidade ideológica dos membros, rivalidades geopolíticas internas (como as disputas fronteiriças entre Índia e China) e assimetrias de poder econômico frente ao gigantismo chinês.
      `,
      workedExamples: [
        {
          title: "Exemplo Resolvido: A Divisão Internacional do Trabalho na Cadeia do Smartphone",
          enunciado: "A produção de um telefone celular de última geração envolve componentes desenhados na Califórnia, semicondutores gravados em Taiwan, matérias-primas minerais extraídas na África e na América do Sul, e montagem final executada em fábricas no leste asiático. Como a DIT contemporânea se manifesta nessa cadeia de valor?",
          stepByStep: [
            "Passo 1: Identifique a fragmentação territorial do processo produtivo:",
            "Ao contrário do fordismo tradicional onde todas as etapas ocorriam na mesma fábrica do país central, a globalização desconcentrou territorialmente a linha de montagem em escala planetária.",
            "Passo 2: Analise onde fica retido o maior valor agregado:",
            "As etapas de pesquisa, desenvolvimento de software, design e controle de patentes retêm a maior fatia do valor financeiro da mercadoria e permanecem nos países desenvolvidos do Norte global.",
            "Passo 3: Avalie o papel dos países periféricos e manufatureiros:",
            "Países fornecedores de matéria-prima (lítio, cobalto) e montadoras asiáticas oferecem insumos e mão de obra barata, capturando fatias proporcionalmente muito menores do lucro total do produto final."
          ],
          gabarito: "Concentração das etapas imateriais de alto valor agregado (design, patentes, software) nos países centrais, e dispersão das etapas fabris e extrativistas na periferia global."
        }
      ],
      realWorldApplications: [
        "Debates sobre política externa e o posicionamento diplomático do Brasil nas cúpulas multilaterais dos BRICS e do G20.",
        "Vulnerabilidade das indústrias nacionais em crises de semicondutores e cadeias globais de suprimentos logísticos.",
        "Impactos de sanções econômicas, tarifas protecionistas e guerra comercial entre Estados Unidos e China sobre exportações agrícolas brasileiras."
      ],
      commonMisconceptions: [
        "Achar que o Mercosul é uma União Econômica e Monetária (o Mercosul é uma União Aduaneira imperfeita, sem moeda única e sem livre circulação plena de trabalhadores).",
        "Achar que a globalização promoveu uma homogeneização de renda igualitária no mundo (ela reduziu a pobreza extrema em algumas regiões industriais da Ásia, mas ampliou brutalmente a concentração interna de renda nos países).",
        "Acreditar que os BRICS formam uma aliança militar com tratado de defesa mútua (os BRICS são uma aliança de cooperação geopolítica e econômica, não uma aliança militar como a OTAN)."
      ],
      quickReviewPoints: [
        "Nova Ordem Mundial: ordem multipolar com hegemonia militar americana e multipolaridade econômica/política com protagonismo chinês.",
        "DIT contemporânea: fragmentação produtiva; patentes e design no Norte e montagem/manufatura nos países emergentes.",
        "Graus de integração em blocos: Área de Livre Comércio -> União Aduaneira -> Mercado Comum -> União Monetária.",
        "BRICS: articulação do Sul Global para contestar o unipolarismo financeiro e reformar o multilateralismo."
      ]
    }
  ]
};
