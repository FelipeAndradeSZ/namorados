/**
 * LIVRO DIDÁTICO DIGITAL: Línguas Estrangeiras Modernas no ENEM (Inglês e Espanhol Instrumental)
 * Área: Linguagens, Códigos e suas Tecnologias
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Revisão Técnica 2026)
 * Regra Estrita: ZERO menções a deslocamentos turísticos. Foco exclusivo em leitura crítica,
 * divulgação científica, saúde coletiva, direitos humanos e cidadania global.
 */

export const LIVRO_LINGUAGENS_LINGUAS_ESTRANGEIRAS = {
  id: "livro-linguagens-linguas-estrangeiras",
  area: "linguagens",
  title: "Línguas Estrangeiras Modernas: Inglês e Espanhol Instrumental",
  subtitle: "Leitura instrumental, falsos cognatos, operadores argumentativos, multimodalidade e cidadania global",
  estimatedReadingTimeMinutes: 75,
  badge: "Livro Essencial • Línguas Estrangeiras",
  coverColor: "from-indigo-950 to-slate-900",
  chapters: [
    {
      id: "cap-1-leitura-instrumental",
      chapterNumber: 1,
      title: "Estratégias de Leitura Instrumental: Skimming, Scanning e Inferência",
      subtitle: "Apreensão do sentido global, busca seletiva de informações e decodificação contextual",
      readTimeMinutes: 15,
      learningObjectives: [
        "Compreender a leitura instrumental como metodologia ágil de compreensão textual para fins específicos.",
        "Dominar a aplicação conjunta das técnicas de Skimming (leitura panorâmica) e Scanning (busca de dados pontuais).",
        "Desenvolver inferência lexical a partir de pistas contextuais, morfologia e cognatos verdadeiros."
      ],
      targetSkills: [
        "H5 - Associar vocábulos e estruturas gramaticais ao tema central do texto",
        "H6 - Utilizar os conhecimentos em língua estrangeira moderna como meio de acesso a informações e outras culturas"
      ],
      content: `
### 1. A Natureza da Prova de Língua Estrangeira no ENEM

A prova de Língua Estrangeira Moderna (LEM) no ENEM é composta por **5 questões** (opção por Inglês ou Espanhol) inseridas na Competência de Área 2 da Matriz do INEP (Habilidades H5 a H8). 

Ao contrário de exames tradicionais de proficiência gramatical que exigem preenchimento de lacunas ou conjugação verbal isolada, o ENEM avalia a **leitura instrumental** (*reading for specific purposes*). O candidato precisa ler textos autênticos em língua estrangeira para:
1. Identificar o tema e a tese central;
2. Localizar informações específicas em relatórios e campanhas;
3. Reconhecer a função social do gênero textual;
4. Inferir o posicionamento ideológico, tom crítico ou proposta do autor.

### 2. A Tríade Metodológica: Skimming, Scanning e Pistas Contextuais

#### A) Skimming (Leitura Rápida e Panorâmica)
O *Skimming* consiste em percorrer os olhos velozmente sobre o texto sem se deter em cada palavra isolada, com o objetivo de capturar a ideia central (*gist*), o gênero e o tom geral.
- **Passo 1**: Leia atentamente o **título**, o **subtítulo** e a **fonte de publicação** (rodapé). A fonte (ex: *The Guardian*, *Science Daily*, *El País*, *OMS*) já revela a esfera discursiva (jornalística, acadêmica ou institucional).
- **Passo 2**: Leia a primeira frase (*topic sentence*) e a última frase do primeiro e do último parágrafo.
- **Passo 3**: Observe palavras em destaque gráfico (negrito, itálico, caixas de texto).

#### B) Scanning (Varredura Seletiva de Detalhes)
O *Scanning* é a técnica de busca dirigida: após ler o enunciado da questão e saber exatamente o que o examinador procura, o estudante varre o texto em busca de pistas específicas:
- Datas, anos e séculos;
- Números, porcentagens e valores estatísticos;
- Nomes de cientistas, instituições, leis ou tratados internacionais;
- Termos técnicos citados entre aspas.

#### C) Inferência Lexical por Pistas de Contexto
Quando se deparar com uma palavra desconhecida, **não interrompa a leitura nem entre em desespero**. Utilize três filtros dedutivos:
1. **Posição Sintática**: Trata-se de um substantivo (o quê?), um verbo (qual ação?), um adjetivo (qual qualidade?) ou um advérbio (como/quando?).
2. **Polaridade Semântica**: A frase tem tom positivo, negativo ou neutro? Conectivos ao redor indicam causa ou contraste?
3. **Morfologia Derivacional**: Prefixos como *un-*, *in-*, *dis-* (negação) ou sufixos como *-less* (ausência), *-able* (capacidade), *-mente* / *-ly* (modo) revelam o núcleo do significado.

### 3. Cognatos Verdadeiros vs. Risco de Projeção

Aproximadamente 40% a 50% do vocabulário formal do inglês e mais de 70% do espanhol compartilham raízes latinas com o português:
- *Inglês*: consequence (consequência), develop (desenvolver), population (população), evidence (evidência/prova), scientific (científico).
- *Espanhol*: desarrollo (desenvolvimento), sociedad (sociedade), derecho (direito), investigación (pesquisa), cambio (mudança).

O candidato inteligente apoia-se nesses cognatos verdadeiros para construir o mapa mental do texto, mantendo vigilância constante contra falsos amigos lexicais.
      `,
      workedExample: {
        scenario: "Enunciado do ENEM apresenta um trecho de artigo da Organização Mundial da Saúde sobre poluição atmosférica contendo a frase: 'The relentless surge in airborne particulate matter has triggered respiratory ailments in vulnerable demographics.' Como traduzir sem conhecer o adjetivo 'relentless'?",
        resolution: "Pelo contexto, 'particulate matter' (material particulado) 'has triggered respiratory ailments' (desencadeou doenças respiratórias). Logo, o 'surge' (aumento/surto) é contínuo e grave. 'Relentless' significa implacável, contínuo. Mesmo sem a tradução exata de 'relentless', o candidato identifica que o aumento da poluição provocou o agravo das doenças, resolvendo a questão com segurança."
      },
      realWorldApplication: "A leitura instrumental é a habilidade mais utilizada por médicos, biólogos e pesquisadores na vida profissional para ler artigos científicos internacionais atualizados antes mesmo de serem traduzidos.",
      commonMisconceptions: [
        "Achar que é necessário traduzir o texto mentalmente palavra por palavra: a tradução literal gasta tempo precioso e induz a erros sintáticos.",
        "Ler o texto inteiro sem ler o enunciado antes: leia SEMPRE o enunciado primeiro para saber qual informação exata você deve procurar via scanning."
      ],
      quickReview: [
        "Skimming = Leitura rápida para apreender tema geral e intenção do autor.",
        "Scanning = Varredura com olhos de falcão para achar dados pontuais (datas, números, nomes).",
        "Pistas Contextuais = Decodificar termos desconhecidos pela função e pelo tom da oração."
      ]
    },
    {
      id: "cap-2-falsos-cognatos-heterossemanticos",
      chapterNumber: 2,
      title: "Falsos Cognatos e Heterossemânticos: As Armadilhas da Semelhança",
      subtitle: "Desmistificando os 'false friends' no inglês e os vocábulos heterossemânticos no espanhol",
      readTimeMinutes: 16,
      learningObjectives: [
        "Reconhecer e neutralizar falsos cognatos em inglês e vocábulos heterossemânticos em espanhol.",
        "Compreender como a banca do ENEM constrói distratores atraentes explorando a semelhança gráfica enganosa.",
        "Fixar os 20 pares semânticos mais recorrentes em textos acadêmicos, informativos e literários do exame."
      ],
      targetSkills: [
        "H5 - Associar vocábulos e estruturas gramaticais ao tema central do texto",
        "H7 - Relacionar um texto em LEM às estruturas linguísticas, sua função e seu uso social"
      ],
      content: `
### 1. A Psicologia dos Distratores do ENEM

Os elaboradores de itens do INEP sabem que a mente do leitor sob pressão busca atalhos cognitivos imediatos. Quando uma palavra em língua estrangeira se parece com uma palavra do português, a tendência natural é projetar o significado em língua materna.

Quando essa projeção coincide, chamamos de **cognato verdadeiro**. Quando difere radicalmente, estamos diante de um **falso cognato** (*false friend*) em inglês ou um vocábulo **heterossemântico** em espanhol. Os distratores mais perigosos do ENEM são construídos utilizando exatamente a tradução literal errônea desses termos.

---

### 2. Os Falsos Cognatos Essenciais do Inglês no ENEM

| Palavra em Inglês | O que PARECE | O que REALMENTE SIGNIFICA | Como expressar o termo em inglês |
|---|---|---|---|
| **Actually** | Atualmente | Na verdade, de fato | Currently / Nowadays |
| **Pretend** | Pretender | Fingir, simular | Intend / Plan to |
| **Notice** | Notícia jornalística | Perceber, notar, aviso/comunicado | News / News report |
| **Realize** | Apenas realizar/fazer | Dar-se conta, perceber, conscientizar-se | Accomplish / Perform |
| **Push** | Puxar | Empurrar | Pull (que é puxar) |
| **Fabric** | Fábrica industrial | Tecido, fibra têxtil, estrutura social | Factory / Plant |
| **Novel** | Novela de TV | Romance literário, ou novidade/inédito | Soap opera |
| **Prejudice** | Prejuízo financeiro | Preconceito, discriminação social | Loss / Damage |
| **Resume** | Resumir | Retomar, reiniciar, currículo (*résumé*) | Summarize / Sum up |
| **Policy** | Polícia | Política pública, diretriz institucional | Police |
| **Physician** | Físico | Médico clínico | Physicist (físico teórico) |
| **Eventually** | Eventualmente (às vezes) | No final das contas, por fim, inevitavelmente | Occasionally / Sometimes |
| **Comprehensive**| Compreensivo (tolerante) | Abrangente, detalhado, exaustivo | Understanding / Tolerant |

---

### 3. Os Heterossemânticos Críticos do Espanhol no ENEM

Em Espanhol, as palavras que possuem escrita idêntica ou muito parecida ao português, mas com significado distinto, são chamadas de **heterossemânticas** (*falsos amigos*):

| Palavra em Espanhol | O que PARECE | O que REALMENTE SIGNIFICA | Termo correspondente em espanhol |
|---|---|---|---|
| **Apellido** | Apelido carinhoso | Sobrenome de família | Apodo / Sobrenombre |
| **Propina** | Suborno ilegal | Gorjeta de serviço | Soborno / Coima |
| **Cuello** | Coelho | Pescoço, gola de roupa | Conejo (coelho) |
| **Raro** | Escasso ou precioso | Estranho, esquisito, incomum | Escaso |
| **Largo** | Largo (amplo) | Comprido, longo no espaço ou tempo | Ancho (largo/amplo) |
| **Zurdo** | Surdo (auditivo) | Canhoto (mão esquerda) | Sordo (surdo) |
| **Exquisito** | Esquisito (estranho) | Delicioso, saboroso, refinado | Raro / Extraño |
| **Tasa** | Xícara de café | Taxa percentual, índice, alíquota | Taza (xícara com z) |
| **Vaso** | Vaso de planta | Copo de vidro para água/bebida | Florero / Maceta |
| **Escoba** | Escova de dente | Vassoura de limpeza doméstica | Cepillo (escova) |
| **Oficina** | Oficina mecânica | Escritório administrativo | Taller (oficina mecânica) |
| **Borrar** | Borrar/sujar | Apagar, deletar, eliminar registro | Manchar |
| **Embarazada** | Embaraçada (tímida) | Grávida, gestante | Avergonzada |

### 4. Estratégia de Neutralização de Armadilhas

Ao identificar uma palavra dessa lista em uma alternativa de questão:
1. Volte imediatamente ao texto e substitua a palavra pelo significado real.
2. Verifique se o autor está elogiando (ex: *un banquete exquisito* = banquete delicioso) ou criticando.
3. Se a alternativa do ENEM usar a palavra do português que tem a mesma sonoridade (ex: dizer que *prejudice* causou perda monetária ou que *oficina* conserta automóveis), **elimine-a na hora como distrator deliberado**.
      `,
      workedExample: {
        scenario: "Texto em espanhol relata: 'El informe socioeconómico destacó una reducción sustancial en la tasa de desempleo juvenil.' Uma das opções afirma: 'O documento analisou a quantidade de xícaras de café consumidas por jovens trabalhadores.'",
        resolution: "O distrator aproveita-se da confusão entre 'tasa' (com s = taxa/índice percentual) e 'taza' (com z = xícara). A leitura atenta do contexto socioeconômico e da semântica de taxa desmascara imediatamente a pegadinha."
      },
      realWorldApplication: "Evitar confusões com heterossemânticos e falsos amigos é crucial em tratados diplomáticos, bulas de medicamentos em países do Mercosul e reuniões de comércio exterior.",
      commonMisconceptions: [
        "Achar que espanhol é idêntico ao português e que basta 'ler rápido': o espanhol tem mais de 200 palavras heterossemânticas fundamentais que mudam o sentido completo de uma frase.",
        "Achar que 'actually' em inglês significa 'atualmente': 'actually' significa 'na verdade' ou 'realmente'; 'atualmente' é 'currently'."
      ],
      quickReview: [
        "Inglês: Actually = de fato; Pretend = fingir; Prejudice = preconceito; Novel = romance.",
        "Espanhol: Apellido = sobrenome; Propina = gorjeta; Largo = comprido; Exquisito = delicioso; Tasa = taxa/índice."
      ]
    },
    {
      id: "cap-3-operadores-discursivos-modais",
      chapterNumber: 3,
      title: "Conectivos Argumentativos e Verbos Modais: A Intenção do Autor",
      subtitle: "A chave para desvendar tom, ressalva, contraste e força ilocucionária no ENEM",
      readTimeMinutes: 15,
      learningObjectives: [
        "Identificar os operadores de oposição, concessão, causa e conclusão em inglês e espanhol.",
        "Compreender como os verbos modais revelam a postura epistêmica e a intenção do autor (certeza, hipótese, obrigação ou conselho).",
        "Resolver questões de ENEM que indagam sobre o tom discursivo (irônico, crítico, alarmista, conciliador)."
      ],
      targetSkills: [
        "H5 - Associar vocábulos e estruturas gramaticais ao tema central de um texto",
        "H7 - Relacionar um texto em LEM às estruturas linguísticas, sua função e seu uso social"
      ],
      content: `
### 1. Os Marcadores Argumentativos no Texto Opinativo

Textos do ENEM raramente são puramente descritivos; a esmagadora maioria veicula argumentos, debates éticos e dilemas civilizatórios. A espinha dorsal dessa argumentação reside nos **conectivos discursivos** (*discourse markers / conectores lógicos*).

Dominar esses conectores permite ao candidato antecipar se o autor vai concordar, rebater, somar evidências ou concluir seu raciocínio.

---

### 2. Quadro Comparativo de Conectivos Fundamentais

| Relação Lógica | Inglês | Espanhol | Efeito de Sentido no ENEM |
|---|---|---|---|
| **Oposição / Contraste** | However, Nonetheless, On the other hand, Whereas, While | Sin embargo, No obstante, En cambio, Por el contrario | Quebra de expectativa; introduz o contra-argumento ou a tese de maior peso do autor. |
| **Concessão (Apesar de)** | Although, Even though, Despite, In spite of | Aunque, A pesar de que, Si bien | Reconhece um fato contrário secundário sem invalidar a tese principal. |
| **Adição e Ênfase** | Furthermore, Moreover, In addition, Besides | Además, Asimismo, Por otra parte, Encima | Adiciona um novo argumento fortalecendo a linha de defesa. |
| **Causa e Explicação** | Because, Since, As, Due to, Owing to | Ya que, Puesto que, Dado que, A causa de | Apresenta a motivação ou a origem de um problema social ou biológico. |
| **Conclusão e Desfecho** | Therefore, Thus, Hence, Consequently | Por lo tanto, Por consiguiente, De ahí que | Sintetiza o raciocínio final ou indica uma proposta de intervenção. |

---

### 3. Verbos Modais e a Força Ilocucionária (Inglês)

Em inglês, os verbos modais (*modal auxiliary verbs*) não apenas expressam tempo, mas a **atitude do falante** em relação ao que é dito:

1. **Possibilidade Cautelosa e Hipótese Científica**:
   - *May / Might / Could*: Em artigos acadêmicos, os cientistas raramente afirmam certezas absolutas; usam modais de cautela (*hedging*):
   - *Exemplo*: *'The newly discovered compound might inhibit cellular senescence.'* (O composto pode/poderia inibir o envelhecimento celular — é uma hipótese promissora, não uma certeza consumada).
2. **Recomendação e Dever Ético**:
   - *Should / Ought to*: Utilizados em campanhas de saúde pública e editoriais:
   - *Exemplo*: *'Governments should invest in renewable energy grids.'* (Governos devem/deveriam investir — recomendação ética e política).
3. **Obrigação Inescapável ou Certeza Lógica Dedutiva**:
   - *Must / Have to*: Obrigação estrita ou certeza de alta convicção lógica.
   - *Exemplo de dedução*: *'The species has not been sighted in 50 years; it must be extinct.'* (Deve estar extinta — conclusão lógica inevitável).
4. **Capacidade e Habilidade**:
   - *Can / Be able to*: Capacidade física, técnica ou permissão social.

---

### 4. Perífrases Verbais e Modalidade no Espanhol

No espanhol, as perífrases de modalidade cumprem a mesma função estratégica:
- **Obrigação**: *Haber que + infinitivo* (obrigação impessoal: *'Hay que reducir las emisiones'* = É preciso reduzir as emissões); *Tener que + infinitivo* (obrigação pessoal direta: *'Tenemos que actuar'*).
- **Probabilidade / Dúvida**: *Deber de + infinitivo* (*'Debe de tener unos veinte años'* = Deve ter por volta de vinte anos — incerteza/estimativa).
- **Conselho**: *Deber + infinitivo* (*'Deberíamos proteger los ecosistemas'* = Deveríamos proteger os ecossistemas).

### 5. Identificando o Tom do Autor no ENEM

Muitas questões indagam: *"O tom predominante do texto é..."*
- **Crítico / Engajado**: Usa conectivos adversativos contra políticas vigentes e termos avaliativos negativos.
- **Irônico / Sarcástico**: Quebra de expectativa formal, hipérboles e figuras retóricas (comum em tirinhas e crônicas).
- **Propositivo / Construtivo**: Uso frequente de *should*, *deberíamos*, *we must*, apontando caminhos futuros.
- **Neutro / Informativo**: Predomínio da voz passiva, ausência de pronomes de primeira pessoa e dados numéricos objetivos.
      `,
      workedExample: {
        scenario: "Questão do ENEM apresenta trecho de ensaio sobre inteligência artificial com a frase: 'Although algorithms may optimize diagnostic speed, physicians must retain the final ethical verdict.' O que o conectivo 'Although' e o modal 'must' articulam?",
        resolution: "'Although' concede que a IA traz velocidade (aspecto secundário), enquanto 'must' impõe como obrigação imperativa que o médico humano tome a decisão ética final. A tese principal recai sobre a centralidade do discernimento humano na medicina."
      },
      realWorldApplication: "Entender a modulação de certeza e obrigação é vital na leitura de bulas farmacêuticas, protocolos cirúrgicos internacionais e relatórios da ONU sobre crise climática.",
      commonMisconceptions: [
        "Tratar 'Although' e 'Therefore' como equivalentes: 'Although' indica concessão (embora), enquanto 'Therefore' indica conclusão lógica (portanto).",
        "Achar que 'may' e 'must' expressam o mesmo grau de certeza: 'may' expressa mera possibilidade (50%), enquanto 'must' expressa necessidade ou dedução convicta (95%+)."
      ],
      quickReview: [
        "However / Sin embargo = Quebra de expectativa e contraste forte.",
        "Although / Aunque = Concessão (apesar de, embora).",
        "Therefore / Por lo tanto = Conclusão lógica.",
        "May / Might = Hipótese cautelosa; Should / Debería = Recomendação; Must / Hay que = Obrigação."
      ]
    },
    {
      id: "cap-4-multimodalidade-charges-campanhas",
      chapterNumber: 4,
      title: "Multimodalidade: Charges, Quadrinhos e Campanhas de Conscientização",
      subtitle: "A leitura combinada de semiótica visual, linguagem verbal, ironia e crítica social",
      readTimeMinutes: 14,
      learningObjectives: [
        "Analisar textos multimodais integrando semiótica visual (expressões, planos visuais, tipografia) e código verbal.",
        "Decodificar a ironia e a crítica institucional em tirinhas consagradas (Mafalda, Calvin and Hobbes, Gaturro).",
        "Interpretar cartazes institucionais e campanhas de saúde pública de circulação internacional."
      ],
      targetSkills: [
        "H5 - Associar vocábulos e estruturas gramaticais ao tema central de um texto",
        "H8 - Reconhecer a importância da produção cultural em língua estrangeira moderna como representação da diversidade cultural e linguística"
      ],
      content: `
### 1. O Conceito de Texto Multimodal no ENEM

No contexto comunicativo contemporâneo, os textos raramente utilizam apenas palavras escritas. A **multimodalidade** (Gunther Kress, Theo van Leeuwen) refere-se à convergência simultânea de dois ou mais modos semióticos para construir o significado:
1. **Modo Verbal**: Balões de fala, legendas, títulos, slogans, onomatopeias.
2. **Modo Não-Verbal / Visual**: Enquadramento, expressões fisionômicas, linguagem corporal, cores, sombras, contrastes, linhas de movimento.

No ENEM, cerca de **40% das questões de Língua Estrangeira** contêm elementos visuais: tirinhas cômico-filosóficas, charges políticas, infográficos de saúde pública ou cartazes publicitários de ONGs.

---

### 2. A Gramática das Tirinhas e a Quebra de Expectativa

Tirinhas célebres como as de **Mafalda** (do cartunista argentino Quino) ou **Calvin and Hobbes** (do americano Bill Watterson) estruturam-se pelo mecanismo da **quebra de expectativa** (*incongruity-resolution*):

- **Primeiro e Segundo Quadrinhos**: Estabelecem a premissa cotidiana, a aparente inocência infantil ou uma conversa prosaica.
- **Último Quadrinho**: Revela uma reflexão filosófica profunda, uma denúncia política contundente ou um contrassenso do mundo adulto.

#### Elementos Visuais Cruciais para o ENEM:
1. **Expressão Facial**: Olhos arregalados (espanto/desilusão), sobrancelhas franzidas (ceticismo/indignação), sorriso sarcástico (ironia).
2. **Tipografia e Balões**: Letras aumentadas ou em negrito indicam grito ou ênfase emocional; balões em forma de nuvem expressam pensamento íntimo não verbalizado; balões pontiagudos indicam berro ou transmissão de rádio/TV.
3. **Metalinguagem e Intertextualidade**: Mafalda olhando para o globo terrestre como um 'doente febril' ou Calvin conversando com seu tigre de pelúcia sobre a insanidade da poluição industrial.

---

### 3. Campanhas Institucionais e Cartazes de Saúde Pública

Cartazes de organizações globais (OMS/WHO, UNICEF, Anistia Internacional) operam com a função conativa/apelativa da linguagem:
- **Slogan Impactante**: Frase curta, memorável, com verbo no imperativo (*'Protect your health'*, *'Vacúnate a tiempo'*).
- **Apelo Visual Simbólico**: Uma árvore feita de pulmões humanos (campanha antitabagismo), uma torneira pingando moedas (campanha de conservação hídrica) ou uma mão aberta acolhendo uma semente.
- **Relação de Ancoragem**: A imagem atrai a atenção emocional e o texto verbal ancora e especifica a mensagem para evitar ambiguidades interpretativas.
      `,
      workedExample: {
        scenario: "Em uma tirinha de Quino, Mafalda aplica um termômetro no globo terrestre e diz: '¡Qué sopa de mundo!' A questão indaga sobre a crítica construída pela personagem.",
        resolution: "A sopa representa o elemento que Mafalda mais detesta na vida. Ao comparar a situação caótica do planeta com a sopa e medir sua temperatura com o termômetro, a personagem expressa seu descontentamento com os conflitos bélicos, a desigualdade e a crise sociopolítica global da humanidade."
      },
      realWorldApplication: "Decodificar multimodalidade é essencial para leitura crítica de campanhas de vacinação transnacionais, análise de publicidade enganosa e combate à desinformação nas redes sociais.",
      commonMisconceptions: [
        "Olhar apenas para a imagem e ignorar as palavras do balão: imagem e texto verbal são interdependentes; a resposta do ENEM exige a articulação de ambos.",
        "Considerar que tirinhas de jornal são piadas ingênuas para crianças: no ENEM, as tirinhas abordam geopolítica, alienação consumista, filosofia existencial e crítica institucional severa."
      ],
      quickReview: [
        "Multimodalidade = Texto verbal + Imagem visual atuando juntos.",
        "Tirinhas no ENEM = Quase sempre veiculam crítica social ou filosófica (Quino, Watterson).",
        "Quebra de Expectativa = O último quadrinho subverte o sentido inicial gerando ironia e reflexão."
      ]
    },
    {
      id: "cap-5-divulgacao-cientifica-critica-social",
      chapterNumber: 5,
      title: "Divulgação Científica e Crítica Social Global no ENEM",
      subtitle: "Grandes temas contemporâneos, gestão do tempo de prova e maximização da TRI",
      readTimeMinutes: 15,
      learningObjectives: [
        "Interpretar artigos de divulgação científica em inglês e espanhol das principais fontes internacionais.",
        "Mapear os grandes eixos temáticos recorrentes no exame: emergência climática, bioética, avanços da medicina e inclusão social.",
        "Aplicar uma estratégia de gestão do tempo (2 a 3 minutos por questão) para otimizar o rendimento geral da prova de Linguagens e Matemática."
      ],
      targetSkills: [
        "H6 - Utilizar os conhecimentos em língua estrangeira moderna como meio de acesso a informações e outras culturas",
        "H8 - Reconhecer a importância da produção cultural em língua estrangeira como representação da diversidade cultural e linguística"
      ],
      content: `
### 1. Os Eixos Temáticos Recorrentes da Prova de Língua Estrangeira

A banca do ENEM seleciona textos extraídos de fontes de prestígio global (*BBC, The New York Times, The Guardian, National Geographic, El País, Clarín, Revista UNAM, Science Daily*). Os textos orbitam cinco grandes eixos temáticos:

1. **Emergência Climática e Biodiversidade**:
   - Aquecimento global, transição para matrizes energéticas limpas, conservação de florestas tropicais, acidificação dos oceanos e proteção de polinizadores.
2. **Saúde Coletiva, Bioética e Neurociências**:
   - Resistência bacteriana a antibióticos, avanços em imunoterapia oncológica, impactos da privação de sono e saúde mental de jovens na era dos algoritmos.
3. **Sociedade Digital, Vigilância e Inteligência Artificial**:
   - Ética na automação, preconceito algorítmico (*algorithmic bias*), desinformação digital e proteção de dados pessoais.
4. **Cultura, Memória e Direitos Humanos**:
   - Valorização dos idiomas e saberes de povos originários nas Américas, luta contra o racismo estrutural, equidade de gênero e desafios de integração de refugiados climáticos e políticos.
5. **Expressões Artísticas e Poéticas de Resistência**:
   - Poemas, murais urbanos, músicas folclóricas e protestos poéticos denunciando injustiças históricas.

---

### 2. A Gestão do Tempo e o Impacto na Teoria de Resposta ao Item (TRI)

As 5 questões de Língua Estrangeira abrem o caderno de Linguagens no primeiro domingo do ENEM. A gestão correta dessa abertura define o sucesso de todo o exame:

- **Tempo Máximo Recomendado**: **12 a 15 minutos** para o bloco de 5 questões (média de 2,5 a 3 minutos por questão).
- **Evite Travar no Primeiro Texto**: Se encontrar um vocabulário hermético, aplique a técnica de scanning focando nas alternativas. As questões de língua estrangeira geralmente possuem enunciados em Língua Portuguesa que balizam com precisão o que deve ser encontrado.
- **Consistência na TRI**: As questões de LEM variam de fáceis (identificação direta da ideia central em anúncio) a médias/difíceis (interpretação de metáfora em poema ou ensaio científico denso). Garantir o acerto das fáceis estabiliza a nota de proficiência da TRI antes de avançar para os textos longos de Língua Portuguesa e História.

---

### 3. Roteiro Prático de Resolução em 4 Passos

Para qualquer questão de LEM no ENEM:
1. **Passo 1: Leia o Enunciado e as Alternativas em Português**:
   - Como o comando está em português, você já entra no texto em língua estrangeira sabendo o assunto exato e o que procurar.
2. **Passo 2: Verifique a Fonte e o Autor**:
   - Identifique a data, o país de origem e o gênero textual pelo rodapé.
3. **Passo 3: Aplique Skimming no Texto**:
   - Localize o parágrafo ou sentença onde o tema do enunciado é discutido.
4. **Passo 4: Elimine os Distratores de Falsa Amizade e Generalização**:
   - Descarte alternativas que trazem palavras de significado absoluto (*always, never, todos, nadie*) que não constam no texto original.
      `,
      workedExample: {
        scenario: "Texto em inglês da revista Nature debate vacinas de RNA mensageiro contra neoplasias. O enunciado indaga: 'O texto tem como objetivo principal informar o público sobre...'. Duas alternativas disputam a atenção: A) a cura definitiva e imediata de todos os tipos de câncer; B) o progresso promissor de ensaios clínicos com imunoterapias personalizadas.",
        resolution: "Alternativas que prometem 'cura definitiva e imediata de todas as doenças' extrapolam a cautela científica do texto acadêmico. A alternativa B é a correta porque retrata com fidelidade o tom de progresso cauteloso e promissor característico dos artigos de divulgação científica."
      },
      realWorldApplication: "Ler textos científicos em língua estrangeira permite acompanhar descobertas de ponta em saúde pública, epidemiologia e avanços tecnológicos na universidade e no mercado global.",
      commonMisconceptions: [
        "Achar que é necessário saber todas as palavras do texto para acertar a questão: o ENEM avalia a compreensão da ideia geral e a capacidade de encontrar informações relevantes, não o conhecimento de dicionário completo.",
        "Gastar mais de 25 minutos nas 5 questões de língua estrangeira: gastar tempo excessivo aqui compromete a resolução da redação e das questões de Ciências Humanas."
      ],
      quickReview: [
        "Fontes Globais = Nature, BBC, El País, National Geographic, WHO/OMS.",
        "Roteiro = Ler enunciado em português primeiro -> Rodapé -> Skimming/Scanning -> Eliminar distratores radicais.",
        "Meta de Tempo = 12 a 15 minutos para as 5 questões."
      ]
    }
  ]
};
