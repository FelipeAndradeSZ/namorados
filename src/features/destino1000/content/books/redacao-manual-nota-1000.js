// Livro Didático 07: Redação ENEM Nota 1000 - Manual Avançado de Engenharia Textual
export const BOOK_REDACAO_MANUAL_NOTA_1000 = {
  id: 'livro-redacao-nota-1000',
  areaId: 'redacao',
  areaLabel: 'Redação ENEM',
  title: 'Engenharia da Redação Nota 1000: O Método Científico do Texto Dissertativo',
  subtitle: 'Guia definitivo de desconstrução da grade do INEP: Projeto de texto, repertórios legítimos e proposta de intervenção de 200 pontos',
  author: 'Banca Examinadora Pedagógica - Destino 1000',
  edition: 'Edição Especial Medicina 2026/2027',
  coverGradient: 'from-rose-600 via-pink-600 to-amber-600',
  targetExam: 'ENEM (Competências 1, 2, 3, 4 e 5 da Grade Oficial do INEP)',
  estimatedReadTimeMinutes: 65,
  chapters: [
    {
      id: 'cap-red-01',
      number: 1,
      title: 'A Arquitetura Padrão Ouro: Estrutura em 4 Parágrafos e Ritmo Textual',
      practiceModuleId: 'generos',
      readingTimeMin: 12,
      summary: 'A partição estrita de 30 linhas: Introdução (6-7 linhas), D1 (7-8 linhas), D2 (7-8 linhas) e Conclusão (7-8 linhas). Como gerenciar espaço e evitar truncamento ou prolixidade.',
      sections: [
        {
          heading: '1. O Macroplanejamento das 30 Linhas da Folha Definitiva',
          content: `Para alcançar nota 1000, o texto dissertativo-argumentativo não pode ser fruto de inspiração momentânea, mas de um projeto gráfico e textual milimetricamente ensaiado. A estrutura de **4 parágrafos** é estatisticamente a que mais atinge nota máxima nos relatórios oficiais do INEP:

* **Parágrafo 1 - Introdução (Linhas 1 a 7):**
  1. *Contextualização / Repertório de Entrada:* Alusão histórica, filosófica, sociológica ou literária.
  2. *Apresentação do Tema:* Vinculação explícita da contextualização com a frase temática completa da proposta.
  3. *Tese Bipartida:* Antecipação dos dois argumentos centrais (Argumento 1 que será o D1, Argumento 2 que será o D2).
* **Parágrafo 2 - Desenvolvimento 1 (Linhas 8 a 15):**
  1. *Tópico Frasal:* Afirmação categórica do Argumento 1 anunciado na tese.
  2. *Repertório de Legitimação / Fundo Teórico:* Citação ou conceito de autoridade validada (Sociólogo, filósofo, dados estatísticos).
  3. *Fundamentação Crítica (Juízo de Valor):* Explicação da relação entre o conceito e o problema no Brasil real (o "porquê").
  4. *Fechamento Crítico do Parágrafo:* Consequência imediata do problema.
* **Parágrafo 3 - Desenvolvimento 2 (Linhas 16 a 23):**
  1. *Conectivo Interparágrafo + Tópico Frasal 2:* *"Ademais...", "Outrossim...", "Paralelamente a esse cenário..."*.
  2. *Repertório de Legitimação 2:* Fator causal complementar (ex.: ineficiência legislativa, invisibilidade midiática, mercantilização social).
  3. *Aprofundamento Argumentativo:* Desconstrução do problema e impacto nos grupos vulneráveis.
  4. *Fechamento de Enlace:* Amarração preparando a necessidade de intervenção urgente.
* **Parágrafo 4 - Conclusão com Proposta de Intervenção (Linhas 24 a 30):**
  1. *Conectivo Conclusivo + Retomada Temática:* *"Portanto, urge mitigar tais entraves..."*.
  2. *Proposta de Intervenção Completa (5 Elementos Obrigatórios).*
  3. *Frase de Efeito Final (Fechamento Circular):* Retomada poética ou reflexiva da alusão inicial da Introdução.`
        }
      ]
    },
    {
      id: 'cap-red-02',
      number: 2,
      title: 'Projeto de Texto e Tese Irrefutável: A Chave da Competência 3',
      practiceModuleId: 'argumentacao',
      readingTimeMin: 14,
      summary: 'Como evitar lacunas argumentativas, tangenciamento temático e contradições lógicas. A técnica da tese por causas estruturadas.',
      sections: [
        {
          heading: '1. O que os Corretores Exigem na Competência 3',
          content: `A Competência 3 avalia: *"Selecionar, relacionar, organizar e interpretar informações, fatos, opiniões e argumentos em defesa de um ponto de vista"*.
A nota 200 é concedida **exclusivamente** a textos que apresentam:
* **Projeto de texto evidente:** O leitor percebe claramente que cada frase foi planejada antes de ser escrita.
* **Desenvolvimento consistente de todos os termos da tese:** Se na introdução você citou "negligência governamental" e "herança histórico-cultural", ambos precisam ser debatidos exaustivamente em D1 e D2, sem abandono de ideias.
* **Ausência de lacunas de raciocínio:** Quando o candidato afirma que algo "gera impactos negativos", mas não explica QUAIS impactos nem POR QUE eles ocorrem, comete uma grave lacuna argumentativa que derruba a nota para 120 ou 160.`
        },
        {
          heading: '2. A Técnica dos Eixos Temáticos de Causalidade',
          content: `Para formular teses robustas e aplicáveis a qualquer tema do ENEM, o método divide as causas dos problemas brasileiros em dois grandes eixos:
1. **Eixo Estrutural / Institucional (Macro):**
   - Inoperância ou morosidade estatal;
   - Descompasso entre a legislação formal (Constituição Cidadã) e a efetivação fática de direitos;
   - Subfinanciamento de políticas públicas e escassez de infraestrutura básica.
2. **Eixo Sociocultural / Simbólico (Micro/Coletivo):**
   - Naturalização histórica da desigualdade e da exclusão;
   - Individualismo moderno e esgarçamento dos laços de solidariedade (Modernidade Líquida);
   - Desinformação e propagação de estigmas e preconceitos na esfera pública.`
        }
      ]
    },
    {
      id: 'cap-red-03',
      number: 3,
      title: 'Repertório Sociocultural Produtivo e Legitimado: Competência 2',
      practiceModuleId: 'generos',
      readingTimeMin: 13,
      summary: 'Os três selos do INEP para repertório nota 200: Legitimado (área do saber), Pertinente (ao tema) e Produtivo (comentado criticamente no parágrafo).',
      sections: [
        {
          heading: '1. O Triângulo de Validação da Competência 2',
          content: `Muitos estudantes memorizam dezenas de citações e perdem pontos na C2 porque usam o repertório de forma "decorativa" ou solta. O INEP exige três critérios cumulativos:
* **1. Legitimidade:** O repertório deve provir de uma área consolidada do conhecimento humano: Filosofia, Sociologia, História, Geografia, Literatura, Biologia, Direito, Cinema/Artes ou Dados Estatísticos de órgãos oficiais.
* **2. Pertinência:** O repertório deve dialogar diretamente com o tema da redação. Citar frases genéricas como *"O homem é o lobo do homem"* sem relacionar especificamente à temática proposta é considerado não-pertinente.
* **3. Produtividade (O mais difícil!):** O repertório só é produtivo se o candidato **explicar com as próprias palavras** como a teoria se reflete na questão debatida. Citar e passar para o próximo período sem destrinchar a tese torna o repertório improdutivo (máximo 160 pontos na C2).`
        },
        {
          heading: '2. O "Banco de Ouro" de Repertórios Coringas de Alta Rentabilidade',
          content: `* **Constituição Federal de 1988 (Art. 6º e Art. 225):** Princípio da dignidade da pessoa humana e a garantia inviolável de direitos sociais (educação, saúde, trabalho, lazer, segurança, meio ambiente equilibrado).
* **Gilberto Dimenstein - "O Cidadão de Papel":** Denúncia do abismo entre a plenitude dos direitos garantidos pela lei no papel e a carência cruel vivida pelos cidadãos na realidade cotidiana.
* **Zygmunt Bauman - "Modernidade Líquida":** A fragilidade dos laços humanos, a mercantilização das relações e a individualização dos problemas coletivos na sociedade pós-moderna.
* **Hannah Arendt - "A Banalidade do Mal":** A desumanização e a apatia social decorrentes da aceitação passiva de violências e violações estruturais sem qualquer reflexão crítica.
* **Thomas Hobbes - "O Leviatã":** A quebra do pacto social quando o Estado deixa de garantir a segurança e a integridade material de seus membros.`
        }
      ]
    },
    {
      id: 'cap-red-04',
      number: 4,
      title: 'A Malha Coesiva e Conectivos Inter e Intraparágrafos: Competência 4',
      practiceModuleId: 'recursos-linguisticos',
      readingTimeMin: 12,
      summary: 'Como garantir 200 pontos na C4: Operadores interparágrafos obrigatórios em pelo menos dois começos de parágrafo, variedade de conjunções e paralelismo.',
      sections: [
        {
          heading: '1. As Regras Oficiais de Correção da Competência 4',
          content: `O manual de corretores do INEP exige para a nota máxima (200 pontos):
1. **Presença de conectivos INTERPARÁGRAFOS:** O D2 e a Conclusão DEVEM OBRIGATORIAMENTE ser iniciados por operadores argumentativos legítimos. Exemplos para D2: *"Ademais,"*, *"Outrossim,"*, *"Paralelamente a essa questão,"*. Exemplo para Conclusão: *"Portanto,"*, *"Dessarte,"*, *"Infere-se, pois,"*. (Iniciar parágrafo com "Em primeiro lugar" ou "No Brasil de hoje" não conta como conectivo interparágrafo!).
2. **Presença de conectivos INTRAPARÁGRAFOS:** Cada parágrafo deve conter pelo menos 2 a 3 conectivos no interior de seus períodos conectando orações.
3. **Inexistência de repetições lexicais abusivas:** Não repetir a mesma conjunção (ex.: usar "portanto" e "além disso" múltiplas vezes). Variar com sinônimos e anáforas pronominais.`
        }
      ]
    },
    {
      id: 'cap-red-05',
      number: 5,
      title: 'A Proposta de Intervenção Perfeita: Os 5 Elementos da Competência 5',
      practiceModuleId: 'generos',
      readingTimeMin: 14,
      summary: 'Gabaritando os 200 pontos da C5: Agente, Ação, Meio/Modo, Efeito e Detalhamento. Análise das fórmulas práticas à prova de erro da banca.',
      sections: [
        {
          heading: '1. O Algoritmo dos 5 Elementos Obrigatórios (40 Pontos Cada)',
          content: `A banca do ENEM avalia a proposta de intervenção de forma estritamente analítica. Cada elemento identificado soma 40 pontos na grade:

1. **AGENTE (Quem executa?):**
   - Órgão público competente e específico (Ministério da Educação, Ministério da Saúde, Poder Legislativo, Conselho Nacional de Justiça).
   - *Atenção:* Evitar agentes vagos como "o governo", "as pessoas", "a sociedade" ou "nós".
2. **AÇÃO (O que deve ser feito?):**
   - Verbo de ação no infinitivo indicando medida concreta e viável (ex.: *"deve instituir programas de formação continuada..."*, *"precisa criar centros regionais de triagem..."*).
   - *Atenção:* Evitar ações de mera conscientização ou verbos abstratos sem desdobramento.
3. **MEIO / MODO (Como será executado?):**
   - Introduzido pelas locuções: *"por meio de..."*, *"mediante..."*, *"através de..."*, *"com o fito de..."*.
   - Exemplo: *"...mediante a alocação de verbas do Fundo Nacional de Desenvolvimento da Educação e parcerias com autarquias estaduais..."*.
4. **EFEITO / FINALIDADE (Para que serve? / Qual o objetivo?):**
   - Introduzido por: *"a fim de que..."*, *"com o intuito de..."*, *"para que se possa..."*.
   - Exemplo: *"...a fim de desarticular o estigma histórico e garantir o pleno exercício da cidadania..."*.
5. **DETALHAMENTO (Aprofundamento ou explicação de um dos elementos):**
   - É a especificação minuciosa de um dos quatro elementos anteriores (geralmente do Meio ou da Ação).
   - Pode ser um exemplo prático (*", como oficinas itinerantes e palestras semanais ministradas por peritos,"*), uma justificativa explicativa ou um desdobramento direto.`
        },
        {
          heading: '2. O Modelo Padrão Ouro de Proposta Completa (200 Pontos Garantidos)',
          content: `*"Portanto, urge que o Ministério dos Direitos Humanos e da Cidadania [AGENTE], em articulação com as Secretarias Estaduais de Assistência Social, implemente centros integrados de acolhimento e suporte psicossocial [AÇÃO], mediante o remanejamento orçamentário e a contratação emergencial de equipes multidisciplinares [MEIO/MODO] — as quais devem contar com psicólogos, assistentes sociais e defensores públicos especializados [DETALHAMENTO DO MEIO/MODO] —, a fim de erradicar as barreiras de invisibilidade e assegurar a dignidade humana preconizada na Carta Magna [EFEITO]."*`
        }
      ]
    }
  ]
};
