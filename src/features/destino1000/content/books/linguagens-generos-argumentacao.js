// Livro Didático 06: Linguagens, Códigos e suas Tecnologias - Gêneros Textuais, Análise do Discurso e Argumentação
export const BOOK_LINGUAGENS_GENEROS_ARGUMENTACAO = {
  id: 'livro-lin-generos-argumentacao',
  areaId: 'linguagens',
  areaLabel: 'Linguagens e Códigos',
  title: 'Dominando Gêneros Textuais e a Engenharia da Argumentação no ENEM',
  subtitle: 'Da tipologia textual às estratégias discursivas: leitura crítica, intencionalidade e recursos estilísticos',
  author: 'Prof. Coordenador de Linguagens - Destino 1000',
  edition: '2ª Edição Revisada (2026/2027)',
  coverGradient: 'from-amber-600 via-orange-600 to-rose-700',
  targetExam: 'ENEM (Competências 1, 3, 7 e 8 da Matriz do INEP)',
  estimatedReadTimeMinutes: 50,
  chapters: [
    {
      id: 'cap-lin-01',
      number: 1,
      title: 'Tipologia Textual vs. Gênero Textual: A Fronteira Teórica Essencial',
      practiceModuleId: 'generos',
      readingTimeMin: 12,
      summary: 'Diferenciação precisa entre sequências tipológicas (fechadas e formais) e gêneros discursivos (abertos, fluidos e situados socialmente), com análise de hibridismo no ENEM.',
      sections: [
        {
          heading: '1. O Conceito de Tipologia Textual (Sequências Linguísticas)',
          content: `No ENEM, uma das armadilhas conceituais mais frequentes é a confusão entre **tipo textual** e **gênero textual**. Bakhtin e Marcuschi estabeleceram distinções fundamentais que o INEP cobra rigorosamente:

* **Tipos Textuais (ou Modos de Organização do Discurso):**
  Constituem uma categoria finita e de natureza estritamente linguística/estrutural (geralmente cinco ou seis tipos reconhecidos):
  1. **Narrativo:** Caracterizado por sucessão cronológica de eventos transformadores de estado, presença de narrador, personagens, tempo e espaço. Tempos verbais predominantes: Pretérito Perfeito e Imperfeito do Indicativo.
  2. **Descritivo:** Retrato de aspectos estáticos ou simultâneos (objetos, paisagens, estados psicológicos) através de adjetivação rica, verbos de ligação e ausência de progressão temporal linear.
  3. **Dissertativo-Expositivo:** Apresentação neutra, didática ou conceitual de um tema ou fenômeno, sem pretensão explícita de persuasão ou defesa apaixonada de tese (ex.: verbetes enciclopédicos, manuais didáticos, relatórios descritivos).
  4. **Dissertativo-Argumentativo:** Estruturação lógica voltada à defesa irrefutável de uma tese (ponto de vista), sustentada por operadores argumentativos, relações de causa-consequência e dados comprobatórios.
  5. **Injuntivo / Instrucional:** Caracterizado por direcionamento de conduta, presença de verbos no imperativo, no infinitivo com valor prescritivo ou locuções modais de dever/obrigação (ex.: bulas, receitas, editais, regulamentos).
  6. **Dialogal / Conversacional:** Estrutura baseada na alternância de turnos de fala (diálogos teatrais, transcrições de entrevistas).`,
          didacticBox: {
            title: 'Princípio Inegociável de Marcuschi para o ENEM',
            body: 'Enquanto os tipos textuais são teóricos, formais e contáveis nos dedos de uma mão, os gêneros textuais são infinitos, históricos, dinâmicos e inseparáveis da situação de comunicação.'
          }
        },
        {
          heading: '2. O Gênero Textual como Ação Social e Discursiva',
          content: `Para Mikhail Bakhtin, os gêneros são formas relativamente estáveis de enunciados produzidos pelas diversas esferas da atividade humana. Eles respondem a:
* **Quem fala?** (Locutor / Posição de sujeito).
* **Para quem fala?** (Interlocutor presumido e horizonte de recepção).
* **Com qual finalidade comunicativa?** (Objetivo social: denunciar, entreter, ensinar, cobrar, vender).
* **Em qual suporte/veículo?** (Feed de rede social, jornal impresso, cartaz em posto de saúde, revista acadêmica).

**Hibridismo de Gêneros:** O ENEM privilegia textos contemporâneos que misturam gêneros ou subvertem expectativas funcionais (ex.: um anúncio publicitário disfarçado de charge política; um poema estruturado sob a forma visual de receita médica; uma postagem de Instagram que articula microconto literário e manifesto feminista). A questão do ENEM perguntará invariavelmente: *"O recurso a essa estrutura mista confere ao texto o efeito de..."* ou *"A finalidade comunicativa predominante revela-se na..."*`
        },
        {
          heading: '3. Exemplos Resolvidos e Comentados Modelo ENEM',
          content: `**Questão Analisada:**
Texto I: Uma bula farmacêutica que utiliza versos rimados e linguagem lírica para instruir sobre o combate à solidão na terceira idade.
*Pergunta típica:* Ao adotar traços líricos em um suporte tradicionalmente prescritivo, o autor busca:
*A) Invalidar o rigor científico das orientações sanitárias.*
*B) Humanizar a comunicação e sensibilizar o leitor por meio do estranhamento estético.* (Gabarito Correto)
*C) Reduzir o público-alvo a especialistas em crítica poética.*
*D) Substituir tratamentos médicos por contemplação artística.*
*E) Criticar a linguagem excessivamente técnica das indústrias de medicamentos.*

*Comentário pedagógico:* O aluno treinado identifica que o gênero híbrido opera pela quebra de expectativa funcional. O efeito pretendido é a sensibilização (estranhamento positivo), mantendo a intencionalidade de cuidado e saúde.`
        }
      ]
    },
    {
      id: 'cap-lin-02',
      number: 2,
      title: 'O Discurso Jornalístico e Opinativo: Notícia, Reportagem, Editorial e Artigo',
      practiceModuleId: 'interpretacao',
      readingTimeMin: 14,
      summary: 'Desmontando a ilusão de neutralidade na imprensa. Como o ENEM cobra a distinção entre relato de fatos e posicionamento institucional ou autoral.',
      sections: [
        {
          heading: '1. A Pirâmide Discursiva da Esfera Jornalística',
          content: `A imprensa não é um espelho neutro da realidade, mas uma instância de mediação social que seleciona, recorta e enquadra os fatos. O ENEM explora essa dimensão exigindo a leitura atenta de modalizadores discursivos:

| Gênero Jornalístico | Autoria / Voz | Finalidade Principal | Presença de Opinião |
| :--- | :--- | :--- | :--- |
| **Notícia** | Repórter / Redação (impessoal) | Informar fato imediato e recente (*lead*: o quê, quem, quando, onde, como, por quê) | Implícita (seleção lexical, adjetivação sutil, recorte de fontes) |
| **Reportagem** | Jornalista investigativo (assinado) | Aprofundar causa, histórico, repercussão e pluralidade de perspectivas sobre um tema | Moderada a reflexiva (enquadramento e cotejo de dados) |
| **Editorial** | O Veículo de Comunicação (impessoal, voz institucional do jornal) | Expressar formalmente a posição político-institucional da empresa jornalística | Total e explícita (tese institucional firme e justificada) |
| **Artigo de Opinião** | Articulista convidado / Especialista externo | Defender tese pessoal, com argumentação autoral assinada e estilo próprio | Total e nominalmente assumida pelo autor assinante |
| **Crônica Jornalística** | Cronista | Refletir poeticamente, ironicamente ou filosoficamente sobre o cotidiano | Estética e reflexiva, oscilando entre literatura e jornalismo |`
        },
        {
          heading: '2. Modalizadores Discursivos e Marcas de Subjetividade',
          content: `Mesmo em notícias que aparentam ser 100% "objetivas", vestígios lexicais e gramaticais revelam a posição ideológica do locutor:
* **Adjetivos e advérbios axiológicos:** *"O projeto foi aprovado após tumultuada sessão"* vs. *"O projeto foi aprovado após caloroso debate democrático"*. O primeiro sugere desordem; o segundo, vitalidade cívica.
* **Verbos de dizer (dicendi):** Dizer que um entrevistado *"afirmou"*, *"revelou"*, *"alegou"* ou *"insinuou"*. O verbo *"alegou"* lança dúvida sobre a veracidade do depoimento; *"revelou"* confere status de verdade irrefutável anteriormente oculta.
* **Voz Passiva com omissão do agente da passiva:** *"Trabalhadores foram demitidos"* esconde quem demitiu (a direção da empresa), reduzindo a responsabilidade corporativa na manchete.`
        }
      ]
    },
    {
      id: 'cap-lin-03',
      number: 3,
      title: 'A Engenharia da Argumentação: Estruturas Lógicas, Tipos de Argumentos e Falácias',
      practiceModuleId: 'argumentacao',
      readingTimeMin: 13,
      summary: 'Como sustentar uma tese sólida e identificar falácias e manobras persuasivas nos textos de apoio do ENEM e na prova de redação.',
      sections: [
        {
          heading: '1. O que Constitui uma Tese e suas Estruturas de Sustentação',
          content: `Argumentar é o ato de convencer ou persuadir um auditório mediante o oferecimento de razões aceitáveis. O modelo clássico de Stephen Toulmin elucida como as proposições se organizam:
* **Tese (Claim):** A afirmação central ou ponto de vista defendido.
* **Dado / Fato (Data):** O fundamento empírico que serve de base imediata.
* **Garantia (Warrant):** O princípio de legitimação que conecta o dado à conclusão.
* **Apoio (Backing):** A autoridade, dado estatístico, teoria científica ou base jurídica que legitima a garantia.

**Tipos Clássicos de Argumentos Cobrados no ENEM:**
1. **Argumento de Autoridade:** Invocação de pensador, cientista, instituição consagrada (Fiocruz, OMS, IBGE, filósofos clássicos) para lastrear a tese.
2. **Argumento por Evidência / Dados Concretos:** Utilização de estatísticas, levantamentos demográficos e medições empíricas incontestáveis.
3. **Argumento por Relação de Causa e Consequência:** Demonstração lógica de que o fenômeno X decorre inevitavelmente da condição Y, permitindo prever desdobramentos futuros.
4. **Argumento por Comparação / Analogia:** Confronto entre situações análogas em países, momentos históricos ou contextos sociais diferentes.
5. **Argumento por Redução ao Absurdo (Ad Absurdum):** Admissão temporária da tese do adversário para demonstrar que sua consequência lógica final é insustentável ou contraditória.`
        },
        {
          heading: '2. Falácias Argumentativas Frequentes no Exame',
          content: `* **Ad Hominem:** Ataque à pessoa do debatedor em vez de confrontar o mérito de seu argumento.
* **Falácia do Espantalho:** Distorção proposital da posição do oponente para torná-la fácil de refutar.
* **Generalização Apressada:** Conclusão categórica universal extraída a partir de uma amostragem ínfima ou anedótica.
* **Falsa Causalidade (Post hoc ergo propter hoc):** Supor que, porque o evento B aconteceu cronologicamente depois do evento A, A é necessariamente a causa de B.
* **Apelo à Tradição / Apelo à Emoção:** Justificar uma prática exclusivamente porque "sempre foi feita assim" ou apelar desmedidamente para sentimentos de compaixão/ira sem suporte racional.`
        }
      ]
    },
    {
      id: 'cap-lin-04',
      number: 4,
      title: 'Mecanismos de Coesão, Operadores Argumentativos e Variação Linguística',
      practiceModuleId: 'recursos-linguisticos',
      readingTimeMin: 11,
      summary: 'Operadores de oposição, concessão, causa, conclusão e conformidade. O fenômeno sociolinguístico do preconceito linguístico e a adequação contextual no ENEM.',
      sections: [
        {
          heading: '1. O Papel Estratégico dos Operadores Argumentativos (Ducrot)',
          content: `Conectivos não são simples cola gramatical entre frases; são **vetores de direcionamento argumentativo** (Oswald Ducrot). Eles determinam para onde o raciocínio do leitor deve convergir:

* **Operadores que contrapõem argumentos orientados para conclusões contrárias:**
  - *Adversativos:* *mas, porém, contudo, todavia, no entanto, entretanto*. **Atenção:** O argumento após a conjunção adversativa tem força argumentativa preponderante.
  - *Concessivos:* *embora, ainda que, mesmo que, conquanto, a despeito de, posto que*. O argumento introduzido pela oração concessiva é enfraquecido em favor da oração principal.
* **Operadores que somam argumentos a favor de uma mesma conclusão:**
  - *e, além disso, não apenas... mas também, outrossim, ademais*.
* **Operadores que introduzem o argumento mais forte de uma escala (argumento decisivo):**
  - *inclusive, até mesmo, e até*.
* **Operadores que introduzem uma justificativa ou explicação:**
  - *pois (anteposto ao verbo), porque, já que, visto que, dado que*.
* **Operadores conclusivos:**
  - *portanto, logo, por conseguinte, dessarte, por isso, pois (posposto ao verbo)*.`
        },
        {
          heading: '2. Sociolinguística e Variação Linguística no ENEM',
          content: `O ENEM nunca considera uma variante linguística popular como "errada" ou "inferior". Para a linguística moderna (Marcos Bagno, Ataliba de Castilho):
* Toda variante dialetal possui lógica interna coerente, sintaxe estruturada e funcionalidade comunicativa plena.
* O conceito de **erro gramatical** é substituído pelo conceito de **adequação situacional**: o registro formal é exigido em documentos públicos, artigos e vestibulares; registros informais, gírias e dialetos regionais são legítimos e riquíssimos em seus contextos comunitários e artísticos.
* As questões do ENEM cobram a identificação dos fatores de variação: **diatópica** (geográfica/regional), **diacrônica** (temporal/histórica), **diastrática** (social/geracional/nível de escolaridade) e **diafásica** (estilística/formalidade do contexto).`
        }
      ]
    }
  ]
};
