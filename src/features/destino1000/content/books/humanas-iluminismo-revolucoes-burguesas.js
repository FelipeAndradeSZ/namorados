/**
 * LIVRO DIDÁTICO DIGITAL: O Século das Luzes, Revoluções Burguesas e Cidadania Moderna
 * Área: Ciências Humanas e suas Tecnologias (História Geral e Filosofia Política)
 * Autor: Equipe Pedagógica Destino 1000
 * Versão: 1.0.0 (Edição Canônica 2026)
 * Regra Estrita: ZERO menções a deslocamentos ou terminologias correlatas.
 * Foco integral: Iluminismo, liberalismo clássico, revoluções burguesas, Haiti e cidadania moderna.
 */

export const LIVRO_HUMANAS_ILUMINISMO_REVOLUCOES = {
  id: "livro-humanas-iluminismo-revolucoes",
  area: "humanas",
  title: "O Século das Luzes, Revoluções Burguesas e Cidadania Moderna",
  subtitle: "Das críticas ao Antigo Regime e contratualismo à Revolução Francesa, Haiti e a fundação dos direitos humanos",
  estimatedReadingTimeMinutes: 90,
  badge: "Livro Essencial • História Geral, Filosofia & Redação",
  coverColor: "from-amber-950 to-orange-950",
  chapters: [
    {
      id: "cap-1-crise-antigo-regime-luzes",
      chapterNumber: 1,
      title: "A Crise do Antigo Regime e a Aurora das Luzes",
      subtitle: "A ordem estamental, o absolutismo monárquico e a revolução epistemológica da razão",
      readTimeMinutes: 18,
      learningObjectives: [
        "Compreender a estrutura social, política e econômica do Antigo Regime europeu no século XVIII.",
        "Analisar as raízes filosóficas e científicas da Ilustração (René Descartes, Isaac Newton e Francis Bacon).",
        "Avaliar o impacto revolucionário da Enciclopédia de Diderot e d'Alembert na laicização e circulação do saber."
      ],
      targetSkills: [
        "H11 - Identificar registros sobre o papel das técnicas e das tecnologias na organização do trabalho e da sociedade",
        "H12 - Analisar o papel da justiça como instituição na conformação dos direitos de cidadania",
        "H14 - Comparar diferentes pontos de vista presentes em documentos históricos sobre a fundação do Estado moderno"
      ],
      content: `
### 1. A Anatomia do Antigo Regime Europeu

Entre os séculos XVI e XVIII, a Europa Ocidental esteve sob a hegemonia do chamado **Antigo Regime** (*Ancien Régime*), uma formação histórica caracterizada por três pilares interligados:

1. **Estrutura Social Estamental de Ordens Hereditárias**:
   * **Primeiro Estado (Clero)**: Cerca de 1% da população. Detinha vastas extensões de terra, cobrava o dízimo eclesiástico obrigatório e desfrutava de isenção total de impostos régios diretos.
   * **Segundo Estado (Nobreza)**: Cerca de 2% da população. Dividida entre a nobreza de espada (linhagens tradicionais) e nobreza de toga (burgueses enriquecidos que compravam títulos). Monopolizava as altas patentes militares, a magistratura e os cargos da corte, vivendo de pensões régias e direitos feudais sobre os camponeses.
   * **Terceiro Estado (Povo e Burguesia)**: Mais de 97% da população. Heterogêneo e sem privilégios jurídicos, englobava camponeses submetidos à servidão residual, servos da gleba, artesãos urbanos, diaristas (*sans-culottes*) e a heterogênea burguesia (comerciantes, industriais, banqueiros, médicos e juristas). Era a única ordem produtiva e sustentava financeiramente o Estado através de pesada carga tributária.

2. **Absolutismo Monárquico de Direito Divino**:
   * Concentração dos poderes executivo, legislativo e judicial nas mãos do monarca sagrado.
   * Teóricos fundamentais: **Jacques Bossuet** (*A Política Tirada da Sagrada Escritura*), que pregava que o rei é o representante de Deus na Terra e rebelar-se contra ele é sacrilégio; e **Jean Bodin**, teórico da soberania real indivisível.
   * Prerrogativas arbitrárias: o rei emitia as temidas *lettres de cachet* (ordens secretas de prisão sem julgamento nem direito a defesa) e manipulava a justiça através de tribunais de exceção.

3. **Mercantilismo Intervencionista e Monopolista**:
   * Balança comercial favorável, protecionismo alfandegário, metalismo (acúmulo de ouro e prata nos cofres da Coroa) e exclusivismo colonial (Pacto Colonial).
   * Monopólios régios concedidos a companhias privilegiadas e rígida regulamentação das corporações de ofício medievais, que asfixiavam a livre concorrência da burguesia manufatureira.

---

### 2. A Aurora da Razão: O Século XVIII

O **Iluminismo** (também denominado *Ilustração*, *Século das Luzes*, *Aufklärung* ou *Enlightenment*) foi o movimento intelectual, filosófico e cultural que varreu a Europa no século XVIII. Sua premissa básica era de que a **Razão Humana** (*Luz*) é o único instrumento soberano capaz de dissipar as *Trevas* do obscurantismo, do fanatismo religioso, da superstição e da tirania absolutista.

#### Os Precursores Científicos do Século XVII
* **René Descartes (1596–1650)**: Instituiu o racionalismo moderno através da dúvida metódica e do primado do pensamento reflexivo (*Cogito, ergo sum* — "Penso, logo existo").
* **Isaac Newton (1643–1727)**: Com os *Principia Mathematica*, provou que o Universo é regido por leis mecânicas universais, matemáticas e imutáveis (gravitação universal). Se a natureza física obedece a leis racionais, os iluministas concluíram que a sociedade e a política também deveriam ser reorganizadas de acordo com leis racionais e justas.
* **Francis Bacon (1561–1626)**: Desenvolveu o método empírico indutivo baseado na experimentação e observação dos fatos, sintetizado no aforismo "Saber é poder".

---

### 3. A Enciclopédia: O Monumento das Luzes

Entre 1751 e 1772, o filósofo **Denis Diderot** e o matemático **Jean le Rond d’Alembert** capitanearam a publicação da *Encyclopédie, ou Dictionnaire Raisonné des Sciences, des Arts et des Métiers* (28 volumes, 71.818 artigos e milhares de gravuras técnicas).

* **Objetivo Declarado**: Reunir todo o saber humano acumulado nas ciências, letras, artes e técnicas para torná-lo acessível à razão do público letrado.
* **Ousadia Revolucionária**:
  1. **Laicização do Saber**: Substituiu o princípio da autoridade bíblica e da teologia escolástica pelo método científico experimental e crítica racional.
  2. **Valorização dos Ofícios Mecânicos**: Pela primeira vez na história ocidental, o trabalho dos artesãos, ferreiros, tecelões e relojoeiros foi descrito com rigor científico e ilustrações minuciosas, rompendo com o preconceito aristocrático feudal contra o trabalho manual.
  3. **Arma de Combate Ideológico**: Sob verbetes aparentemente neutros, os enciclopedistas inseriam ácidas críticas ao despotismo monárquico, à tortura inquisitorial e à corrupção eclesial. A obra foi proibida pela Coroa francesa e inscrita no *Index Librorum Prohibitorum* do Vaticano em 1759, mas continuou circulando clandestinamente e moldou a consciência dos líderes da Revolução Francesa.
      `
    },
    {
      id: "cap-2-filosofia-politica-ilustrada",
      chapterNumber: 2,
      title: "Filosofia Política Ilustrada: Estado, Leis e Liberdade",
      subtitle: "Locke, Montesquieu, Voltaire, Rousseau e Kant: os arquitetos conceituais do Estado de Direito",
      readTimeMinutes: 20,
      learningObjectives: [
        "Distinguir as vertentes contratualistas e liberais de John Locke, Montesquieu, Voltaire e Rousseau.",
        "Analisar o princípio dos freios e contrapesos na separação dos poderes.",
        "Compreender o conceito kantiano de Aufklärung e a soberania popular inalienável da Vontade Geral."
      ],
      targetSkills: [
        "H12 - Analisar o papel da justiça como instituição na conformação dos direitos de cidadania",
        "H14 - Comparar diferentes pontos de vista presentes em documentos históricos sobre o Estado moderno",
        "H21 - Avaliar o impacto das teorias ilustradas na organização constitucional contemporânea"
      ],
      content: `
### 1. John Locke e a Matriz do Liberalismo Político

O filósofo inglês **John Locke** (1632–1704), em seus *Dois Tratados sobre o Governo Civil* (1690), estabeleceu o alicerce do **jusnaturalismo liberal**:

* **O Estado de Natureza**: Diferente de Thomas Hobbes (para quem o homem natural vivia em estado de guerra permanente), Locke via o estado de natureza como um estágio de relativa paz e liberdade guiado pela lei natural da razão.
* **Direitos Naturais Inalienáveis**: Todo indivíduo nasce com direitos inatos que nenhum governante pode revogar: a **Vida**, a **Liberdade** e a **Propriedade Privada** (esta última legitimada pelo trabalho humano que transforma os recursos da natureza).
* **O Contrato Social e o Consentimento**: Para superar a incerteza e a falta de juízes imparciais na garantia desses direitos, os indivíduos unem-se em sociedade e instituem o Estado civil por mútuo consentimento. O governante atua como um magistrado fiduciário com poder estritamente limitado.
* **O Direito de Resistência à Tirania**: Se o governo quebrar o contrato social e usurpar a propriedade, a vida ou a liberdade dos cidadãos, ele transforma-se em tirano. Nesse momento, o povo tem o legítimo direito de desobedecer, pegar em armas, dissolver o governo despótico e restabelecer a ordem constitucional justa.

---

### 2. Montesquieu e a Tripartição de Poderes

Em *Do Espírito das Leis* (1748), **Charles-Louis de Secondat, Barão de Montesquieu** (1689–1755), formulou a célebre teoria da divisão e equilíbrio dos poderes:

* **O Diagnóstico da Corrupção**: "É uma experiência eterna que todo homem que tem poder é levado a abusar dele; ele vai até onde encontra limites."
* **O Princípio dos Freios e Contrapesos (*Checks and Balances*)**: Para que a autoridade não degenere em tirania arbitrária, "é preciso que o poder freie o poder". A soberania estatal deve ser desmembrada em três esferas autônomas e harmônicas:
  1. **Poder Executivo**: Administra o Estado, conduz as relações exteriores e aplica as leis.
  2. **Poder Legislativo**: Representa o povo e os corpos intermediários, elaborando, revisando e revogando leis gerais.
  3. **Poder Judiciário**: Aplica as leis imparcialmente aos litígios concretos e pune crimes, devendo ser estritamente independente do poder régio.
* **Impacto Institucional**: Inspirou diretamente a Constituição dos Estados Unidos de 1787, a Constituição Francesa de 1791 e o Artigo 2º da Constituição Brasileira de 1988 ("São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário").

---

### 3. Voltaire: Liberdade de Expressão e Tolerância Religiosa

**François-Marie Arouet, dito Voltaire** (1694–1778), foi a voz mais combativa contra o fanatismo religioso e a censura institucional:

* **Combate à "Infame"**: Seu lema era *Écrasez l'infâme!* ("Esmagai a infame!"), referindo-se à intolerância, ao dogmatismo cego e às perseguições sangrentas perpetradas pela Igreja Católica aliada ao absolutismo.
* **O *Tratado sobre a Tolerância* (1763)**: Escrito após o bárbaro linchamento judicial de Jean Calas (comerciante protestante torturado e executado em Toulouse sob falsa acusação de matar o filho para impedi-lo de se converter ao catolicismo). Voltaire provou a inocência póstuma de Calas e demonstrou que a intolerância religiosa é irracional, cruel e destrói o tecido cívico das nações.
* **Defesa da Esfera Pública Laica**: Embora fosse deísta (acreditava em um "Grande Relojoeiro" do cosmos apreensível pela razão, sem dogmas clericais), defendia a liberdade irrestrita de culto e manifestação de ideias. A famosa máxima atribuída ao seu espírito sintetiza essa postura: *"Posso não concordar com uma palavra do que dizes, mas defenderei até a morte o teu direito de dizê-la"*.

---

### 4. Rousseau: A Soberania Popular e a Vontade Geral

**Jean-Jacques Rousseau** (1712–1778), natural de Genebra, representa a ala mais democrática e radical do Iluminismo:

* **Crítica à Desigualdade Social**: No *Discurso sobre a Origem e os Fundamentos da Desigualdade entre os Homens* (1755), Rousseau aponta o surgimento da propriedade privada como a raiz de todos os males e crimes da história humana: *"O verdadeiro fundador da sociedade civil foi o primeiro que, tendo cercado um terreno, lembrou-se de dizer 'isto é meu' e encontrou pessoas simples o bastante para acreditar nele"*.
* **O *Contrato Social* (1762)**: Como não é possível retornar ao estado de pureza da natureza (*mito do bom selvagem*), a solução é refundar a sociedade política sobre bases legítimas através de um pacto republicano igualitário.
* **A Vontade Geral (*Volonté Générale*)**: Não é a simples soma egoísta de vontades particulares (*vontade de todos*), mas a deliberação ética da coletividade orientada ao **bem comum**.
* **Soberania Inalienável**: A soberania pertence exclusiva e diretamente ao povo reunido. Ela não pode ser representada nem alienada. Deputados são meros "comissários" temporários sem poder conclusivo. Foi o esteio ideológico da fase jacobina da Revolução Francesa.

---

### 5. Immanuel Kant e o Esclarecimento (*Aufklärung*)

No ensaio *Resposta à Pergunta: O que é o Esclarecimento?* (1784), o filósofo alemão **Immanuel Kant** (1724–1804) sintetizou o propósito moral da Ilustração:

* **Definição de Esclarecimento**: É a **saída do ser humano de sua menoridade intelectual**, da qual ele próprio é culpado.
* **O Que é a Menoridade?**: É a incapacidade de pensar por si mesmo sem a tutela e direção de autoridades externas (o livro que pensa por mim, o sacerdote que substitui minha consciência ética, o médico que dita meus hábitos). A causa não é a falta de inteligência, mas a covardia e a preguiça social de pensar por conta própria.
* **O Lema das Luzes**: ***Sapere aude!*** ("Ousa saber! Tem a coragem de fazer uso do teu próprio entendimento!").
      `
    },
    {
      id: "cap-3-economia-politica-fisiocracia-smith",
      chapterNumber: 3,
      title: "A Economia Política das Luzes: Fisiocracia e Liberalismo Clássico",
      subtitle: "A superação do mercantilismo, a ordem natural do laissez-faire e a teoria da riqueza em Adam Smith",
      readTimeMinutes: 16,
      learningObjectives: [
        "Compreender a crítica ilustrada às barreiras corporativas e monopólios do mercantilismo.",
        "Analisar as teses da Fisiocracia francesa de Quesnay e Gournay.",
        "Dominar os conceitos centrais do liberalismo clássico de Adam Smith (divisão do trabalho, valor e mão invisível).",
        "Avaliar as reformas do Despotismo Esclarecido e sua aplicação na América Portuguesa pelo Marquês de Pombal."
      ],
      targetSkills: [
        "H11 - Identificar registros sobre a organização do trabalho e a produção econômica",
        "H14 - Comparar teorias econômicas divergentes sobre a intervenção estatal no mercado"
      ],
      content: `
### 1. A Crítica Ilustrada ao Mercantilismo

Durante o Antigo Regime, o pensamento econômico hegemônico era o **Mercantilismo**:
* Acreditava-se que a riqueza mundial era uma quantidade fixa e que uma nação só enriquecia drenando recursos de suas rivais (*jogo de soma zero*).
* A riqueza era aferida pela quantidade física de metais preciosos estocados nos cofres do rei (*metalismo / bulionismo*).
* O Estado absolutista mantinha pesada intervenção: proibia a importação de manufaturados, concedia monopólios régios a cortesãos e mantinha corporações de ofício que limitavam a inovação tecnológica e barravam o livre ingresso de novos produtores no mercado.

Os filósofos ilustrados denunciaram essa política como irracional, corrupta e geradora de escassez artificial.

---

### 2. A Fisiocracia: O Governo da Natureza

Na França de meados do século XVIII, médicos e pensadores liderados por **François Quesnay** (1694–1774) fundaram a **Fisiocracia** (literalmente, "governo da natureza"), considerada a primeira escola científica do pensamento econômico:

* **O *Quadro Econômico* (1758)**: Quesnay, que era médico da corte, comparou a circulação da riqueza na economia à circulação do sangue no corpo humano: quando desimpedida, mantém o organismo saudável; quando travada por intervenções artificiais, gera tromboses e doenças.
* **A Terra como Única Fonte de Riqueza Real**: Para os fisiocratas, apenas a agricultura, a pecuária e a mineração produzem **riqueza líquida nova** (*produto líquido*), pois uma semente plantada na terra multiplica-se espontaneamente pela ação das forças naturais.
* **A Indústria e o Comércio como "Classes Estéreis"**: Eles sustentavam que manufaturas e mercadores não geravam riqueza original; apenas transformavam ou transportavam materiais que a terra já havia produzido.
* **O Princípio do *Laissez-Faire***: Criado por Vincent de Gournay: *"Laissez faire, laissez passer, le monde va de lui-même"* ("Deixai fazer, deixai passar, o mundo gira por si mesmo"). Defendiam a abolição dos monopólios, das alfândegas internas e dos tabelamentos de preços de cereais.

---

### 3. Adam Smith e o Liberalismo Econômico Clássico

Em 1776, na Escócia, o filósofo **Adam Smith** (1723–1790) publicou sua obra-prima: *Uma Investigação sobre a Natureza e as Causas da Riqueza das Nações*, fundando o **Liberalismo Econômico Clássico**:

#### A Origem da Riqueza: O Trabalho Humano Produtivo
Smith refutou tanto o mercantilismo quanto a fisiocracia. A verdadeira riqueza de um povo não reside no ouro acumulado nem exclusivamente na agricultura, mas na **capacidade de trabalho humano produtivo** aplicado à transformação dos bens.

#### A Divisão Social do Trabalho
Smith ilustrou a multiplicação da riqueza através de seu célebre exemplo da **fábrica de alfinetes**:
* Um artesão isolado, executando manualmente todas as 18 etapas necessárias para fazer um alfinete, produziria no máximo 20 alfinetes por dia.
* Em uma manufatura onde o trabalho é dividido e especializado (um puxa o arame, outro endireita, outro corta, outro afia a ponta), 10 operários produziam mais de **48.000 alfinetes por dia**!
* A divisão do trabalho gera aumento da destreza do operário, economia de tempo e incentivo à mecanização tecnológica.

#### O Interesse Próprio e a "Mão Invisível" do Mercado
Smith argumenta que os indivíduos não produzem bens por altruísmo, mas por seu interesse legítimo em obter lucro:
> *"Não é da benevolência do açougueiro, do cervejeiro ou do padeiro que esperamos nosso jantar, mas da consideração que eles têm pelo seu próprio interesse."* (A Riqueza das Nações, Livro I)

Em um ambiente de **livre concorrência** sem privilégios estatais:
* O produtor é obrigado a oferecer mercadorias de boa qualidade ao menor preço possível para atrair consumidores.
* Sem necessidade de planejamento burocrático centralizado, o mercado funciona como se fosse guiado por uma **"mão invisível"** (*invisible hand*), coordenando espontaneamente a oferta e a demanda e convertendo a busca individual por ganhos privados em benefício coletivo para toda a sociedade.

#### O Papel Mínimo do Estado
Para Adam Smith, o Estado liberal deve abster-se de controlar preços, produzir mercadorias ou conceder monopólios. Contudo, Smith **não era anarquista**: atribuía ao Estado três funções indispensáveis e insubstituíveis:
1. **Defesa Nacional**: Proteger a sociedade contra invasões externas.
2. **Justiça Exata**: Proteger cada cidadão contra a injustiça e opressão de outros indivíduos e garantir o cumprimento de contratos privados e da propriedade.
3. **Obras Públicas e Infraestrutura**: Construir e manter estradas, canais, portos e educação básica primária, empreendimentos que nenhum indivíduo privado teria lucro em financiar sozinho, mas que são indispensáveis ao comércio de toda a nação.

---

### 4. O Despotismo Esclarecido e as Reformas Pombalinas

Diante do prestígio avassalador das ideias ilustradas, monarcas absolutos de Estados atrasados da Europa implementaram o chamado **Despotismo Esclarecido**: conciliavam a modernização administrativa, técnica e fiscal ilustrada com a preservação integral da autocracia absolutista. Exemplos: Frederico II da Prússia ("o primeiro servidor do Estado"), Catarina II da Rússia e José II da Áustria.

#### A Aplicação no Império Português: Marquês de Pombal (1750–1777)
Sob o reinado de D. José I, Sebastião José de Carvalho e Melo (**Marquês de Pombal**) empreendeu reformas ilustradas visando diminuir a dependência econômica portuguesa em relação à Inglaterra:
* **Expulsão dos Jesuítas (1759)**: Pombal estatizou o ensino na metrópole e nas colônias (*aulas régias*), quebrando o monopólio clerical da Companhia de Jesus sobre a educação e subjugando a Igreja à autoridade da Coroa (*regalismo*).
* **Transferência da Capital (1763)**: Mudou a sede do governo colonial de Salvador para o **Rio de Janeiro**, aproximando o comando político da zona de escoamento do ouro das Minas Gerais e das disputas platinas no Sul.
* **Extinção das Capitanias Hereditárias Remanescentes**: Centralizou a administração colonial na burocracia estatal régia.
* **Arrocho Fiscal e a Derrama**: Para combater a queda na produção de ouro e manter a arrecadação mínima de 100 arrobas anuais, Pombal criou as Casas de Fundição e instituiu a derrama (cobrança forçada de tributos atrasados sobre toda a população da comarca), plantando o descontentamento que eclodiria na Inconfidência Mineira em 1789.
      `
    },
    {
      id: "cap-4-revolucoes-burguesas-ocidente",
      chapterNumber: 4,
      title: "O Ciclo das Revoluções Burguesas no Ocidente (1688, 1776, 1789)",
      subtitle: "Da Revolução Gloriosa britânica e independência americana à derrocada do Antigo Regime na França",
      readTimeMinutes: 20,
      learningObjectives: [
        "Compreender a Revolução Inglesa do século XVII como precursora da limitação constitucional do absolutismo.",
        "Analisar o processo de Independência das 13 Colônias (EUA) e sua apropriação do pensamento lockeano.",
        "Dominar a periodização, agentes sociais e conflitos da Revolução Francesa (1789–1799)."
      ],
      targetSkills: [
        "H12 - Analisar o papel da justiça como instituição na conformação dos direitos de cidadania",
        "H13 - Analisar a atuação dos movimentos sociais que contribuíram para mudanças políticas",
        "H14 - Comparar diferentes pontos de vista presentes em documentos históricos"
      ],
      content: `
### 1. A Revolução Inglesa e a Fundação do Parlamentarismo (1640–1689)

Quase um século antes das revoluções americana e francesa, a Inglaterra vivenciou o primeiro grande ciclo revolucionário burguês da Europa moderna:

1. **A Revolução Puritana e a Guerra Civil (1640–1649)**:
   * Conflito entre a Coroa dos Stuart (Carlos I, defensor do absolutismo monárquico e da cobrança de impostos sem aval do Parlamento) e os parlamentares burgueses puritanos liderados por Oliver Cromwell.
   * **Julgamento e Execução de Carlos I (1649)**: Pela primeira vez na história ocidental, um rei com pretensão de governar por direito divino foi formalmente julgado por traição contra seu próprio povo e decapitado em praça pública, quebrando a aura de invulnerabilidade sagrada dos monarcas.
   * **A República de Cromwell (*Commonwealth*, 1649–1658)**: Cromwell decretou os **Atos de Navegação (1651)**, determinando que mercadorias que entrassem na Inglaterra só poderiam ser transportadas por navios ingleses ou dos próprios países produtores. Essa medida sufocou a marinha holandesa e transformou a Grã-Bretanha na "Senhora dos Mares".

2. **A Revolução Gloriosa e a *Bill of Rights* (1688–1689)**:
   * Diante da tentativa do rei Jaime II de restaurar o absolutismo católico, a burguesia e a nobreza de terras (*gentry*) uniram-se para depô-lo sem derramamento de sangue, coroando o protestante Guilherme de Orange.
   * **A Declaração de Direitos (*Bill of Rights*, 1689)**:
     * O monarca foi constitucionalmente subordinado à lei votada pelo Parlamento.
     * Proibiu-se o rei de cobrar impostos ou manter exércitos sem aprovação parlamentar.
     * Consagrou-se a liberdade de eleição dos deputados e a soberania da lei.
     * **Resultado Histórico**: Nasceu a monarquia parlamentarista britânica (*"O rei reina, mas o parlamento governa"*), conferindo segurança jurídica aos contratos e à propriedade privada, o que permitiu à Inglaterra ser pioneira mundial na Primeira Revolução Industrial.

---

### 2. A Independência dos Estados Unidos (1776)

Após a Guerra dos Sete Anos (1756–1763), a Grã-Bretanha tentou recuperar suas finanças impondo pesados tributos sobre as 13 Colônias da América do Norte (Lei do Açúcar, Lei do Selo, Atos Townshend e Lei do Chá).

* **A Reação Colonial**: Os colonos rebelaram-se sob o lema liberal lockeano: *"No taxation without representation"* ("Nenhum imposto sem representação parlamentar"). O descontentamento culminou na Festa do Chá de Boston (*Boston Tea Party*, 1773) e na edição das Leis Intoleráveis pela Coroa britânica.
* **A Declaração de Independência (4 de julho de 1776)**:
   Redigida por Thomas Jefferson com apoio de Benjamin Franklin e John Adams, o documento foi a primeira aplicação política prática dos ideais iluministas de John Locke:
   > *"Consideramos estas verdades como evidentes por si mesmas, que todos os homens são criados iguais, dotados pelo Criador de certos direitos inalienáveis, entre os quais estão a vida, a liberdade e a busca da felicidade; que, para assegurar esses direitos, governos são instituídos entre os homens, derivando seus justos poderes do consentimento dos governados."*
* **A Constituição de 1787**: Consagrou a República federativa presidencialista inspirada na tripartição de poderes de Montesquieu.
* **A Contradição Estrutural**: A república dos "homens livres e iguais" foi forjada pela elite proprietária branca que preservou integralmente a **escravidão negra** no Sul e conduziu o massacre sistemático e a expropriação das terras dos **povos indígenas**.

---

### 3. A Revolução Francesa (1789–1799)

Considerada por Eric Hobsbawm o marco divisor que inaugura a História Contemporânea, a Revolução Francesa desferiu o golpe de misericórdia no Antigo Regime feudal na Europa.

#### Fases Canônicas da Revolução:
1. **A Assembleia Nacional Constituinte e a Monarquia Constitucional (1789–1792)**:
   * **14 de Julho de 1789**: A tomada e demolição da fortaleza da Bastilha pelas massas populares de Paris (*sans-culottes*) assinalou a queda simbólica do absolutismo.
   * **A Noite de 4 de Agosto de 1789**: A Assembleia decreta a extinção formal de todos os direitos e privilégios feudais da nobreza sobre a terra.
   * **26 de Agosto de 1789**: Proclamação da **Declaração dos Direitos do Homem e do Cidadão**: consagrou a liberdade individual, a isonomia jurídica civil perante a lei e a inviolabilidade da propriedade privada como direito sagrado burguês.
   * **Constituição de 1791**: Instituiu a monarquia constitucional com sufrágio censitário (baseado na riqueza), mantendo a maioria do povo afastada das decisões eleitorais.

2. **A Convenção Nacional e o Terror Jacobino (1792–1794)**:
   * Diante da traição de Luís XVI (que tentou fugir para liderar exércitos estrangeiros contra a revolução), a monarquia foi abolida e a República proclamada em 1792. O rei foi guilhotinado em janeiro de 1793.
   * **Conflito no Plenário**:
     * **Girondinos**: Alta burguesia comercial e liberal moderada, sentavam-se à direita do plenário, opunham-se a medidas que ferissem o livre comércio.
     * **Jacobinos (Montanha)**: Pequena e média burguesia radical aliada aos *sans-culottes*, sentavam-se à esquerda no plenário, liderados por Robespierre, Danton e Saint-Just.
   * **O Governo Jacobino e a Ditadura da Virtude**:
     * Para conter invasões absolutistas estrangeiras (Áustria, Prússia, Inglaterra) e revoltas monarquistas internas (Guerra da Vendeia), o Comitê de Salvação Pública instaurou o **Terror Revolucionário** (mais de 16.000 pessoas executadas na guilhotina pelo Tribunal Revolucionário).
     * **Avanços Sociais Populares Inéditos**: Aprovação da Constituição democrática do Ano I (1793) com sufrágio universal masculino; **Lei do Máximo Geral** (tabelamento dos preços de alimentos essenciais e salários); partilha de terras comunais confiscadas dos nobres emigrados; e a **abolição definitiva da escravidão nas colônias francesas** em 1794.

3. **A Reação Termidoriana e o Diretório (1794–1799)**:
   * Em julho de 1794 (mês de Termidor), a alta burguesia girondina desferiu um golpe contra Robespierre, que foi preso e guilhotinado.
   * O Diretório restabeleceu o voto censitário, revogou a Lei do Máximo (provocando hiperinflação e miséria popular) e reprimiu motins populares (*Terror Branco*).
   * Fragilizado por crises econômicas e ameaças militares monarquistas, o Diretório apoiou o general **Napoleão Bonaparte**, que tomou o poder no **Golpe do 18 de Brumário** (novembro de 1799), consolidando a ordem burguesa através da centralização estatal e do Código Civil de 1804.
      `
    },
    {
      id: "cap-5-vozes-insurgentes-limites-cidadania",
      chapterNumber: 5,
      title: "Vozes Insurgentes e os Limites da Cidadania Liberal",
      subtitle: "Olympe de Gouges, a Revolução do Haiti, Inconfidência Mineira vs Conjuração Baiana e a DUDH de 1948",
      readTimeMinutes: 16,
      learningObjectives: [
        "Analisar o caráter androcêntrico da cidadania liberal através do pioneirismo de Olympe de Gouges.",
        "Compreender a singularidade histórica da Revolução do Haiti e os Jacobinos Negros.",
        "Confrontar o liberalismo elitista da Inconfidência Mineira (1789) com o caráter popular e antirracista da Conjuração Baiana (1798).",
        "Avaliar a herança iluminista na formulação da Declaração Universal dos Direitos Humanos de 1948."
      ],
      targetSkills: [
        "H12 - Analisar o papel da justiça como instituição na conformação dos direitos de cidadania",
        "H13 - Analisar a atuação dos movimentos sociais que contribuíram para mudanças políticas",
        "H15 - Avaliar criticamente o alcance das declarações de direitos humanos em diferentes épocas históricas"
      ],
      content: `
### 1. Olympe de Gouges e o Androcentrismo das Luzes

A "Declaração dos Direitos do Homem e do Cidadão" de 1789 proclamava a igualdade universal, mas na prática foi redigida por homens e para homens: as mulheres francesas foram excluídas do direito de voto, impedidas de ocupar cargos públicos e viram seus clubes cívicos fechados pela Convenção.

Em setembro de 1791, a dramaturga e panfletária **Olympe de Gouges** (1748–1793) publicou a **Declaração dos Direitos da Mulher e da Cidadã**:
* Espelhando artigo por artigo o texto de 1789, Gouges substituiu o vocábulo exclusivo "homem" por "mulher":
  > *"Art. 1º. A mulher nasce livre e tem os mesmos direitos que o homem. As distinções sociais só podem ser baseadas na utilidade comum."*
  > *"Art. 10. Se a mulher tem o direito de subir ao cadafalso [guilhotina], ela deve ter igualmente o direito de subir à tribuna [parlamento]."*
* **Significado Histórico**: Expôs a hipocrisia e a contradição do patriarcado burguês revolucionário. Por sua militância política combativa e por questionar os excessos de Robespierre, Olympe de Gouges foi condenada à morte e guilhotinada em novembro de 1793, tornando-se uma mártir fundacional do feminismo político moderno.

---

### 2. A Revolução do Haiti (1791–1804): A Liberdade em Armas Negras

Na colônia caribenha francesa de Saint-Domingue (atual Haiti), maior entreposto produtor de açúcar do mundo sustentado pelo suplício de mais de 450.000 escravizados negros africanos, eclodiu em agosto de 1791 a maior insurreição de cativos da história da humanidade.

* **Os "Jacobinos Negros"**: Liderados por **Toussaint Louverture** e **Jean-Jacques Dessalines**, os escravizados apropriaram-se das palavras de ordem revolucionárias de Paris (*Liberdade, Igualdade, Fraternidade*) e levaram-nas às últimas consequências lógicas: exigiram a destruição total da escravidão.
* **Guerra Anticolonial e Antirracista**:
  * Os insurgentes negros derrotaram sucessivas expedições militares de tropas espanholas e britânicas.
  * Quando Napoleão Bonaparte restabeleceu a escravidão nas colônias francesas em 1802 e enviou uma armada militar colossal comandada pelo general Leclerc para esmagar os rebeldes, o exército popular haitiano aniquilou as forças imperiais napoleônicas na lendária Batalha de Vertières (1803).
* **1º de Janeiro de 1804**: Proclamação da Independência da **República do Haiti** — a primeira república governada por negros e a primeira nação das Américas a abolir a escravidão com suas próprias forças populares.
* **O Impacto do "Haitianismo"**: A vitória haitiana abalou os alicerces do sistema colonial escravocrata transatlântico. Em países como o Brasil e os Estados Unidos, a elite senhorial foi tomada pelo pânico do *"haitianismo"* — o medo de que as massas escravizadas brasileiras se rebelassem em armas e tomassem o poder, motivando o endurecimento da repressão policial e legal contra negros e forros ao longo de todo o século XIX.

---

### 3. As Luzes no Brasil Colonial: Mineira (1789) vs Baiana (1798)

O Iluminismo e as revoluções do Atlântico reverberaram intensamente na América Portuguesa, gerando dois movimentos emancipacionistas com perfis sociais diametralmente opostos:

| Critério de Comparação | Inconfidência Mineira (1789) | Conjuração Baiana / Alfaiates / Búzios (1798) |
| :--- | :--- | :--- |
| **Composição Social** | **Elite colonial letrada**: magistrados, poetas árcades, padres, militares de alta patente e mineradores devedores da Fazenda Real. | **Classes populares urbanas**: alfaiates, soldados rasos, artesãos, negros forros e pessoas escravizadas. |
| **Inspiração Direta** | Iluminismo moderado francês e a Independência dos EUA (1776). | Fase jacobina radical da Revolução Francesa e a Revolução do Haiti (1791). |
| **Projeto Político** | República em Minas Gerais com capital em São João del-Rei, perdão das dívidas tributárias da derrama e criação de universidade em Vila Rica. | República democrática da Bahia, abertura total dos portos ao livre comércio e aumento do soldo dos soldados. |
| **A Questão da Escravidão** | **Não defendia a abolição universal da escravidão**: a maioria dos conjurados era proprietária de escravizados e temia perder seu patrimônio; houve omissão e hesitação no projeto. | **Defendia a abolição imediata e irrestrita da escravidão** e o combate aberto ao preconceito racial (*"Não haverá mais distinção entre homens brancos, pardos e pretos"*). |
| **Desfecho e Repressão** | Movimento delatado por Joaquim Silvério dos Reis antes de eclodir. Julgamento da Devassa: degredo na África para os ricos; **apenas Tiradentes (alferes pobre) foi enforcado e esquartejado em 1792**. | Movimento reprimido após panfletagem nas portas de Salvador. **Quatro líderes populares negros foram enforcados e esquartejados na Praça da Piedade em 1799** (Lucas Dantas, Manuel Faustino, Luís Gonzaga das Virgens e João de Deus). |

---

### 4. O Legado Contemporâneo: A DUDH de 1948

A trajetória histórica iniciada pelas Luzes no século XVIII culminou, no rescaldo da Segunda Guerra Mundial e dos horrores dos campos de concentração nazistas, na aprovação da **Declaração Universal dos Direitos Humanos (DUDH)** pela Assembleia Geral da ONU em 10 de dezembro de 1948.

* **Artigo 1º**: *"Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade."*
* **A Conquista da Universalidade Plena**: Ao contrário dos documentos setecentistas (que excluíam mulheres, negros e trabalhadores sem terra), a DUDH de 1948 consagrou a dignidade humana como um valor universal indisponível, que independe de nacionalidade, raça, sexo, religião ou patrimônio econômico, constituindo a pedra angular do Direito Internacional e das cláusulas pétreas da Constituição Brasileira de 1988.
      `
    }
  ]
};
