/**
 * LIVRO DIDÁTICO DIGITAL: Língua Portuguesa, Semiótica e Variação Linguística
 * Área: Linguagens, Códigos e suas Tecnologias (Língua Portuguesa)
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 */

export const LIVRO_LINGUAGENS_GRAMATICA_VARIACAO = {
  id: "livro-linguagens-gramatica-variacao",
  area: "linguagens",
  title: "Língua Portuguesa, Semiótica e Variação Linguística",
  subtitle: "Sociolinguística, coesão textual, semântica e funções da linguagem no padrão ENEM",
  estimatedReadingTimeMinutes: 70,
  badge: "Livro Essencial • Língua Portuguesa",
  coverColor: "from-pink-950 to-rose-900",
  chapters: [
    {
      id: "cap-1-variacao-linguistica",
      chapterNumber: 1,
      title: "Variação Linguística e Preconceito Linguístico no ENEM",
      subtitle: "Adequação comunicativa, variantes de prestígio e estigmatização social",
      readTimeMinutes: 15,
      learningObjectives: [
        "Compreender a língua como um sistema heterogêneo, vivo e dinâmico em constante transformação.",
        "Diferenciar as variações diatópica (geográfica), diastrática (social), diafásica (estilística) e diacrônica (histórica).",
        "Superar a dicotomia purista 'certo versus errado' pelo critério sociolinguístico da adequação discursiva à situação de fala."
      ],
      targetSkills: ["H24 - Reconhecer no texto marcas de variação linguística", "H25 - Identificar a motivação de variações linguísticas"],
      content: `
### 1. A Língua como Organismo Vivo e Heterogêneo

O ENEM não avalia a Língua Portuguesa sob uma perspectiva prescritiva ou gramatiqueira punitiva, mas sob a ótica da **Sociolinguística** (William Labov, Marcos Bagno, Dino Preti). A língua não é um bloco de mármore imutável; é um sistema dinâmico de recursos verbais compartilhado por falantes reais em situações concretas de interação.

Nenhuma variedade linguística é inerentemente superior, mais lógica ou mais bela do que outra. A norma culta padrão não possui superioridade intrínseca do ponto de vista linguístico: ela é uma convenção histórica das classes sociais hegemônicas que detêm poder econômico e político.

### 2. A Tipologia das Variações Linguísticas

As variedades da língua organizam-se em quatro eixos fundamentais:

1. **Variação Diatópica (Geográfica ou Regional)**:
   - Diferenças de vocabulário, prosódia (sotaque) e sintaxe entre regiões geográficas.
   - *Exemplos*: mandioca / aipim / macaxeira; bergamota / mexerica / tangerina; guri / piá / moleque.

2. **Variação Diastrática (Social ou Sociocultural)**:
   - Diferenças ligadas ao grupo social, faixa etária, gênero, escolaridade ou classe socioeconômica.
   - Inclui o linguajar de tribos urbanas, jargões profissionais (médicos, advogados, operários) e o falar da periferia.

3. **Variação Diafásica (Situacional ou Estilística)**:
   - Variação motivada pelo **grau de formalidade** do contexto comunicativo.
   - O mesmo falante culto altera seu registro conforme a situação: linguagem formal em uma entrevista de emprego ou audiência jurídica; linguagem informal e coloquial em uma roda de conversa com amigos ou mensagem instantânea.

4. **Variação Diacrônica (Histórica ou Temporal)**:
   - Transformações que a língua sofre ao longo do tempo.
   - *Exemplo clássico*: *Vossa Mercê* ⟹ *Vossemecê* ⟹ *Vosmecê* ⟹ *Você* ⟹ *Cê*. Palavras arcaicas como *botica* (farmácia) e alterações ortográficas.

### 3. O Preconceito Linguístico e a Adequação Discursiva

O linguista Marcos Bagno (*Preconceito Linguístico: O que é, como se faz*, 1999) demonstra que o preconceito linguístico é, na verdade, uma forma disfarçada de **preconceito social**: estigmatiza-se o modo de falar das populações pobres, rurais ou marginalizadas para justificar sua exclusão dos espaços de poder.

No ENEM, o conceito-chave substitutivo da regra 'certo/errado' é o da **ADEQUAÇÃO COMUNICATIVA**:
- Um texto deve ser julgado pela sua adequação ao interlocutor, ao suporte, ao gênero textual e à esfera de circulação social.
- Usar gírias pesadas em um relatório formal para a diretoria é *inadequado*.
- Falar com erudição pomposa com uma criança pequena em uma brincadeira de quintal é igualmente *inadequado*.
      `,
      workedExample: {
        scenario: "Como responder a uma questão do ENEM que apresenta um poema caipira ou letra de rap com 'nós vai' ou 'as coisa'?",
        resolution: "Jamais marque alternativas que classifiquem o texto como 'erro gramatical grosseiro', 'degradação da língua' ou 'linguagem inculta a ser eliminada'. A alternativa correta apontará para a expressividade estética, valorização da identidade cultural regional ou marca identitária comunitária."
      },
      realWorldApplication: "Entender variação linguística evita práticas discriminatórias em entrevistas de emprego, garante inclusão escolar e democratiza o acesso aos serviços públicos e jurídicos.",
      commonMisconceptions: [
        "Achar que Sociolinguística prega que 'vale tudo e não precisa ensinar gramática': a escola deve sim ensinar a norma culta de prestígio, não como a única correta, mas como uma ferramenta de empoderamento cidadão para acesso ao mercado e à universidade.",
        "Confundir variação regional com 'erro de concordância': falar com construções populares obedece a regras gramaticais internas consistentes de variedades não padrão."
      ],
      quickReview: [
        "Diatópica = Espaço geográfico / Regionalismo.",
        "Diastrática = Grupo social / Idade / Escolaridade / Jargão.",
        "Diafásica = Contexto da situação (Formal vs. Informal).",
        "Diacrônica = Tempo histórico (Vossa Mercê -> Você)."
      ]
    },
    {
      id: "cap-2-coesao-argumentacao",
      chapterNumber: 2,
      title: "Coesão Textual e Operadores Argumentativos",
      subtitle: "Mecanismos de anáfora, catáfora, conectivos e progressão temática",
      readTimeMinutes: 14,
      learningObjectives: [
        "Dominar os mecanismos de coesão referencial (substituição, elipse, hiperonímia) e sequencial.",
        "Identificar os operadores argumentativos e seu papel orientador no texto dissertativo (Koch e Marcuschi).",
        "Evitar truncamentos sintáticos, redundâncias e ambiguidades na escrita da Redação Nota 1000."
      ],
      targetSkills: ["H26 - Identificar a função de recursos coesivos", "H27 - Analisar a força argumentativa de conectores"],
      content: `
### 1. Coesão Referencial vs. Coesão Sequencial

A coesão textual é a amarração explícita na superfície do texto que garante fluidez e clareza às ideias (Ingedore Koch, *A Coesão Textual*, 1989):

1. **Coesão Referencial**: Ocorre quando um termo remete a outro elemento do texto:
   - **Anáfora**: Retomada de um termo já mencionado anteriormente no texto. (*Exemplo*: 'O Ministério da Saúde publicou novos dados. O **órgão** [hiperônimo anafórico] alertou para os riscos...').
   - **Catáfora**: Antecipação de um termo que ainda será enunciado. (*Exemplo*: 'A verdade é **esta**: a desigualdade social no país precisa ser combatida urgentemente').
   - **Elipse**: Omissão intencional de um termo facilmente recuperável pelo contexto, evitando repetições enfadonhas. (*Exemplo*: 'Os parlamentares votaram a proposta; [eles] aprovaram o projeto sem ressalvas').
   - **Hiperônimo e Hipônimo**: Uso de palavras de sentido mais amplo (hiperônimo: *veículo*, *instituição*, *doença*) para retomar palavras de sentido restrito (hipônimo: *carro*, *ministério*, *dengue*).

2. **Coesão Sequencial**: Responsável por fazer o texto progredir no tempo e no raciocínio por meio de conectivos e marcadores temporais e discursivos.

### 2. Os Operadores Argumentativos e a Orientação Discursiva

Conforme demonstrado por Oswald Ducrot e Ingedore Koch, os conectivos não são apenas 'pontes' neutras; eles possuem uma força argumentativa que direciona a interpretação do leitor para uma determinada conclusão:

| Operador Argumentativo | Relação Semântica | Exemplos Típicos |
|---|---|---|
| **Adição** | Soma de argumentos de mesma orientação | além disso, ademais, outrossim, não só... como também |
| **Oposição / Concessão** | Quebra de expectativa ou contraste | contudo, todavia, no entanto, embora, conquanto, malgrado |
| **Causa / Motivo** | Justificativa do argumento anterior | visto que, porquanto, já que, uma vez que, dado que |
| **Consequência / Efeito** | Desfecho lógico inevitável | portanto, destarte, logo, por conseguinte, de modo que |
| **Conformidade** | Citação de repertório e autoridade | consoante, conforme, segundo, em consonância com |
| **Condição** | Hipótese restritiva | contanto que, desde que, caso, a menos que |

### 3. A Aplicação na Redação do ENEM (Competência 4)

Na avaliação da Competência 4 da Redação do ENEM (200 pontos), a banca exige expressamente:
- **Presença de operadores interparágrafos**: É obrigatório iniciar pelo menos dois parágrafos de desenvolvimento/conclusão com conectivos interparágrafos autênticos (*Ademais*, *Outrossim*, *Portanto*, *Nesse cenário*).
- **Diversidade de conectores**: Não repita exaustivamente *além disso* ou *porém*.
- **Conectivos intraparágrafos**: Amarração coesiva entre os períodos dentro de cada parágrafo.
      `,
      workedExample: {
        scenario: "Diferença entre o operador coordenativo adversativo 'mas' e o subordinativo concessivo 'embora'.",
        resolution: "O 'mas' introduz o argumento que tem MAIOR FORÇA e define a conclusão: 'Ele estudou muito, mas não passou' (conclusão: não passou). O 'embora' introduz o argumento mais fraco: 'Embora não tenha passado, ele estudou muito' (conclusão: estudou muito e tem mérito)."
      },
      realWorldApplication: "O domínio da coesão é fundamental na redação de contratos, petições jurídicas, relatórios de auditoria e no jornalismo investigativo para evitar ambiguidades perigosas.",
      commonMisconceptions: [
        "Usar 'onde' para qualquer coisa que não seja lugar físico: 'No filme onde mostra...' (ERRADO! Onde só se refere a lugar físico concreto; use 'em que', 'no qual').",
        "Achar que 'contudo' e 'portanto' são sinônimos: 'contudo' indica oposição/adversidade; 'portanto' indica conclusão."
      ],
      quickReview: [
        "Anáfora = Olha para trás (retoma o que já foi dito).",
        "Catáfora = Olha para a frente (apresenta o que virá).",
        "Operadores Argumentativos = Direcionam a tese para a conclusão desejada."
      ]
    },
    {
      id: "cap-3-semantica-sentido",
      chapterNumber: 3,
      title: "Semântica, Polissemia, Ambiguidade e Sentido Figurado",
      subtitle: "Denotação vs. conotação, homonímia, paronímia e recursos estilísticos de persuasão",
      readTimeMinutes: 14,
      learningObjectives: [
        "Distinguir com precisão denotação (sentido literal/dicionarizado) de conotação (sentido figurado).",
        "Identificar a polissemia e a ambiguidade intencional (propaganda, humor, poesia) versus vício de linguagem.",
        "Compreender as relações léxicas de homonímia e paronímia mais cobradas nas provas de Linguagens."
      ],
      targetSkills: ["H18 - Identificar o efeito de sentido de figuras e palavras", "H19 - Analisar a função da linguagem conotativa"],
      content: `
### 1. Denotação versus Conotação

O sentido de uma palavra não é fixo; depende do contexto pragmático de enunciação:

- **Sentido Denotativo (Literal)**: Uso da palavra em seu sentido básico, objetivo, unívoco, de dicionário. É a linguagem predominante nos textos científicos, jurídicos, jornalísticos informativos e manuais técnicos.
  - *Exemplo*: 'O cirurgião realizou um transplante de **coração** com sucesso'.

- **Sentido Conotativo (Figurado)**: Uso expressivo, subjetivo, metafórico e polissêmico da palavra, atribuindo-lhe novos significados e cargas emocionais. Predomina na poesia, crônica literária, publicidade e canções populares.
  - *Exemplo*: 'Ela tem um **coração** de pedra; não se abalou com a notícia'.

### 2. Polissemia vs. Ambiguidade

- **Polissemia**: É a multiplicidade de sentidos que uma única palavra pode assumir dependendo do contexto.
  - *Exemplo da palavra 'linha'*: linha de costura, linha telefônica, linha de pensamento, linha de metrô, linha do horizonte.

- **Ambiguidade**: Ocorre quando um enunciado gera duplicidade de interpretação:
  - **Ambiguidade como Vício de Linguagem (Anfibologia)**: Gera confusão prejudicial à clareza. (*Exemplo*: 'O policial prendeu o ladrão em sua casa' — na casa de quem? Do policial ou do ladrão?).
  - **Ambiguidade como Recurso Expressivo Intencional**: Muito comum em anúncios publicitários, tirinhas humorísticas (Mafalda, Armandinho, Hagar) e charges políticas para provocar reflexão irônica ou riso.

### 3. Relações Léxicas Fundamentais

- **Homônimos Homófonos**: Mesmo som, grafias e sentidos diferentes:
  - *Cessão* (ato de ceder) vs. *Sessão* (reunião, exibição de filme) vs. *Seção/Secção* (divisão, setor de loja).
- **Homônimos Homógrafos**: Mesma grafia, sons ou classes gramaticais diferentes:
  - *O almoço* (substantivo, som fechado) vs. *Eu almoço* (verbo, som aberto).
- **Parônimos**: Palavras muito parecidas na grafia e na pronúncia, mas com sentidos distintos:
  - *Emergir* (vir à tona) vs. *Imergir* (mergulhar);
  - *Flagrante* (no ato) vs. *Fragrante* (perfumado);
  - *Descriminar* (tirar o crime, inocentar) vs. *Discriminar* (diferenciar, segregar).
      `,
      workedExample: {
        scenario: "Como o ENEM explora tirinhas da Mafalda com ambiguidades de duplo sentido?",
        resolution: "Geralmente, um personagem utiliza uma palavra em sentido denotativo estrito e o outro a interpreta em sentido metafórico ou sociopolítico, gerando o choque semântico que fundamenta a crítica social da tirinha."
      },
      realWorldApplication: "A precisão semântica é essencial na redação de leis, bulas de medicamentos e contratos para evitar interpretações dúbias e litígios jurídicos onerosos.",
      commonMisconceptions: [
        "Confundir 'ao encontro de' (estar de acordo, convergir) com 'de encontro a' (bater de frente, chocar-se, opor-se).",
        "Achar que toda ambiguidade é um defeito: na publicidade e na literatura, a ambiguidade planejada é um recurso estético refinado de persuasão."
      ],
      quickReview: [
        "Denotação = D de Dicionário (literal e direto).",
        "Conotação = C de Criatividade (figurado e poético).",
        "Descriminar = Tirar o crime. Discriminar = Excluir/segregar."
      ]
    },
    {
      id: "cap-4-funcoes-da-linguagem",
      chapterNumber: 4,
      title: "As Seis Funções da Linguagem na Comunicação Contemporânea",
      subtitle: "O modelo de Roman Jakobson aplicado a publicidades, jornalismo, poesia e mídias",
      readTimeMinutes: 14,
      learningObjectives: [
        "Identificar os 6 fatores da comunicação de Roman Jakobson (emissor, receptor, mensagem, canal, código e referente).",
        "Reconhecer as 6 funções da linguagem correspondentes e sua intencionalidade discursiva no ENEM.",
        "Analisar textos híbridos da internet, campanhas governamentais de vacinação e cartazes publicitários."
      ],
      targetSkills: ["H21 - Reconhecer as funções da linguagem em textos", "H22 - Avaliar a eficácia de recursos expressivos"],
      content: `
### 1. O Circuito da Comunicação de Roman Jakobson

O linguista russo Roman Jakobson (*Linguística e Comunicação*, 1960) estabeleceu que todo ato de comunicação humana envolve seis elementos interconectados. Conforme a ênfase dada a um desses fatores, manifesta-se uma função de linguagem predominante:

\`\`\`
                     REFERENTE (Função Referencial)
                                    ↓
EMISSOR  —————>  MENSAGEM (Função Poética)  —————>  RECEPTOR
(Emotiva)                           ↓                          (Conativa)
                      CANAL (Função Fática)
                                    ↓
                     CÓDIGO (Função Metalinguística)
\`\`\`

### 2. O Mapeamento das 6 Funções no ENEM

#### 1. Função Emotiva (ou Expressiva)
- **Foco**: No **EMISSOR** (quem fala).
- **Marcas**: Verbos e pronomes em 1ª pessoa (*eu*, *meu*), pontos de exclamação, interjeições e forte carga de subjetividade emocional.
- **Gêneros**: Diários íntimos, autobiografias, cartas pessoais, relatos de experiência confessional.

#### 2. Função Conativa (ou Apelativa)
- **Foco**: No **RECEPTOR** (com quem se fala).
- **Marcas**: Verbos no imperativo (*compre*, *faça*, *vacine-se*, *participe*), vocativos (*Você*, *Cidadão*), pronomes de 2ª pessoa.
- **Gêneros**: Peças publicitárias, anúncios eleitorais, campanhas comunitárias de conscientização, discursos religiosos e de autoajuda.

#### 3. Função Referencial (ou Denotativa/Informativa)
- **Foco**: No **REFERENTE** (o assunto ou contexto).
- **Marcas**: Linguagem objetiva, impessoalidade (verbos em 3ª pessoa), clareza denotativa, dados estatísticos e fatos comprováveis.
- **Gêneros**: Notícias jornalísticas, artigos científicos, livros didáticos, relatórios técnicos.

#### 4. Função Metalinguística
- **Foco**: No **CÓDIGO** (a própria língua ou meio de expressão explicando a si mesmo).
- **Marcas**: Uso do código para falar do próprio código.
- **Gêneros**: Dicionários, gramáticas, filmes sobre a arte de fazer cinema, poemas sobre o ato de escrever poesia (como Drummond em *Catar Feijão* de João Cabral).

#### 5. Função Fática
- **Foco**: No **CANAL** de contato (testar, abrir, manter ou encerrar a conexão comunicativa).
- **Marcas**: Expressões de checagem (*alô?*, *está me ouvindo?*, *né?*, *entende?*, *bom dia*).
- **Gêneros**: Conversas ao telefone, cumprimentos de elevador, início de programas de rádio.

#### 6. Função Poética
- **Foco**: Na **MENSAGEM** em si (seu arranjo formal, ritmo, métrica, rimas, sonoridade e impacto estético).
- **Marcas**: Figuras de linguagem, jogos de palavras, sonoridade e quebra da linearidade comum.
- **Gêneros**: Poemas, letras de música, provérbios populares e slogans publicitários criativos.
      `,
      workedExample: {
        scenario: "Campanha do Ministério da Saúde com os dizeres: 'Vacine seu filho contra o sarampo. A proteção é um ato de amor!'. Qual a função da linguagem?",
        resolution: "A função predominante é a Conativa (ou Apelativa), pois foca no receptor (os pais) por meio do verbo no modo imperativo ('Vacine') e da persuasão direta para induzir a uma mudança concreta de comportamento social."
      },
      realWorldApplication: "Profissionais de marketing, jornalismo e comunicação corporativa utilizam o domínio das funções da linguagem para desenhar campanhas de engajamento e combater desinformação.",
      commonMisconceptions: [
        "Achar que um texto só tem uma função única e pura: os textos reais são híbridos e combinam várias funções simultaneamente. O que as bancas de concurso e do ENEM exigem é a identificação da função PREDOMINANTE (a intenção principal).",
        "Confundir função Poética com poesia exclusivamente: um slogan publicitário em prosa pode ter função poética se explorar aliterações ou trocadilhos sonoros."
      ],
      quickReview: [
        "Emotiva = 1ª pessoa e sentimentos do Emissor.",
        "Conativa = Imperativo e persuasão do Receptor.",
        "Referencial = Fatos objetivos e informação neutra.",
        "Metalinguística = O código explicando o próprio código.",
        "Fática = Testar o canal (Alô? Entendeu?).",
        "Poética = O trabalho estético na forma da mensagem."
      ]
    },
    {
      id: "cap-5-sintaxe-crase-redacao",
      chapterNumber: 5,
      title: "Sintaxe Aplicada à Produção Textual e Redação Nota 1000",
      subtitle: "Concordância, regência verbal, crase e paralelismo sintático no padrão formal",
      readTimeMinutes: 13,
      learningObjectives: [
        "Dominar o emprego correto da crase (casos obrigatórios, proibidos e facultativos) na Redação do ENEM.",
        "Aplicar a concordância verbal e nominal padrão evitando truncamentos e desvios avaliados na Competência 1.",
        "Compreender a regência dos verbos de maior incidência no exame (assistir, visar, aspirar, implicar)."
      ],
      targetSkills: ["H26 - Avaliar a adequação de regras gramaticais", "H27 - Empregar recursos sintáticos com precisão"],
      content: `
### 1. O Mecanismo da Crase: A + A = À

A crase não é um acento sonoro; é a **fusão (contração)** da preposição *a* (exigida por um termo regente) com o artigo feminino *a* (que acompanha um substantivo feminino determinado) ou com pronomes demonstrativos (*àquele*, *àquela*, *àquilo*):

$$\\text{Preposição } a + \\text{Artigo } a = à$$

#### Casos Proibidos de Crase (Ouro do ENEM):
1. **Antes de palavras masculinas**: *andar a pé*, *pagar a prazo*, *passeio a cavalo*.
2. **Antes de verbos no infinitivo**: *disposto a lutar*, *começou a crescer*, *a partir de*.
3. **Antes de pronomes de tratamento e indefinidos**: *pediu a ela*, *referiu-se a todos*, *disse a Vossa Senhoria* (exceções: *à senhora*, *à dona*).
4. **Com o 'a' no singular diante de palavra no plural**: *dirigiu-se a pessoas desconhecidas* (sem crase; se fosse *às pessoas*, haveria crase).
5. **Entre palavras repetidas**: *frente a frente*, *dia a dia*, *gota a gota*.

#### Casos Facultativos de Crase:
1. Antes de **nomes próprios femininos**: *entregou o livro a Maria* ou *à Maria*.
2. Antes de **pronomes possessivos femininos no singular**: *referiu-se a sua irmã* ou *à sua irmã*.
3. Depois da preposição **até**: *caminhou até a praia* ou *até à praia*.

### 2. Regência Verbal no ENEM

Muitos verbos mudam de significado e de exigência preposicional dependendo da regência:

- **Assistir**:
  - No sentido de *ver/presenciar*: Transitivo Indireto (exige preposição *a*). (*Exemplo*: 'O jovem assistiu **ao** debate sobre educação').
  - No sentido de *ajudar/prestar assistência*: Transitivo Direto. (*Exemplo*: 'O médico assistiu **o** paciente').

- **Aspirar**:
  - No sentido de *respirar/inalar*: Transitivo Direto. (*Exemplo*: 'Aspirou **o** ar puro da serra').
  - No sentido de *desejar/almejar*: Transitivo Indireto. (*Exemplo*: 'Ela aspira **ao** cargo de pesquisadora').

- **Visar**:
  - No sentido de *mirar/assinar*: Transitivo Direto. (*Exemplo*: 'O juiz visou **o** passaporte').
  - No sentido de *ter como objetivo*: Transitivo Indireto. (*Exemplo*: 'A lei visa **à** redução da violência').

- **Implicar**:
  - No sentido de *acarretar/trazer como consequência*: Transitivo Direto (NÃO admite 'em'!). (*Exemplo*: 'A desatenção implica **prejuízos** graves' — e NÃO 'implica em prejuízos').

### 3. Paralelismo Sintático na Redação

O paralelismo sintático exige que elementos coordenados mantenham a mesma estrutura gramatical:
- *Inadequado*: 'A reforma visa a melhorar a infraestrutura e à capacitação de professores'.
- *Adequado (paralelo)*: 'A reforma visa **à melhoria** da infraestrutura e **à capacitação** de professores' (dois substantivos com crase) OU 'visa **a melhorar** e **a capacitar**' (dois verbos no infinitivo).
      `,
      workedExample: {
        scenario: "Teste prático da crase: substituir por uma palavra masculina correspondente.",
        resolution: "Se antes da palavra feminina você estiver em dúvida sobre o uso da crase, troque-a mentalmente por uma palavra masculina equivalente: se virar 'AO', há crase ('à'); se virar apenas 'O' ou 'A', não há crase! Exemplo: 'Foi [a/à] escola' -> 'Foi AO colégio'. Virou AO, logo leva crase: 'Foi à escola'."
      },
      realWorldApplication: "O domínio da Competência 1 na Redação do ENEM exige precisão cirúrgica no emprego da crase e da regência, sendo o diferencial que separa notas 160 de notas 200.",
      commonMisconceptions: [
        "Colocar crase antes de 'partir': 'a partir de hoje' NUNCA tem crase, pois 'partir' é verbo!",
        "Escrever 'implica em': na norma culta, implicar com sentido de acarretar não exige preposição 'em'."
      ],
      quickReview: [
        "Regra da troca: Trocou por masculino e virou AO? Crase no feminino: À!",
        "Antes de verbo, palavra masculina ou pronome indefinido: Crase proibida!",
        "Assistir (ver) e Aspirar (desejar) pedem preposição A."
      ]
    }
  ]
};
