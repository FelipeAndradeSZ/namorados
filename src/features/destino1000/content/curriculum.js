/**
 * Matriz de Referência Oficial do ENEM
 * Organização Curricular: Área -> Competência -> Habilidades
 */

export const ENEM_AREAS = {
  matematica: {
    id: "matematica",
    name: "Matemática e suas Tecnologias",
    shortName: "Matemática",
    color: "#38bdf8", // Sky blue
    icon: "Calculator",
    description: "Conhecimentos numéricos, geométricos, de estatística e probabilidade, algébricos e funções.",
    competencies: [
      { id: 1, title: "Números e Operações", skills: [1, 2, 3, 4, 5] },
      { id: 2, title: "Geometria e Espaço", skills: [6, 7, 8, 9] },
      { id: 3, title: "Grandezas e Medidas", skills: [10, 11, 12, 13, 14] },
      { id: 4, title: "Variação de Grandezas e Proporcionalidade", skills: [15, 16, 17, 18] },
      { id: 5, title: "Álgebra e Funções", skills: [19, 20, 21, 22, 23] },
      { id: 6, title: "Gráficos, Tabelas e Estatística", skills: [24, 25, 26] },
      { id: 7, title: "Probabilidade e Contagem", skills: [27, 28, 29, 30] },
    ]
  },
  linguagens: {
    id: "linguagens",
    name: "Linguagens, Códigos e suas Tecnologias",
    shortName: "Linguagens",
    color: "#ec4899", // Pink
    icon: "BookOpen",
    description: "Língua Portuguesa, Literatura, Artes, Educação Física, Tecnologias da Informação e Língua Estrangeira.",
    competencies: [
      { id: 1, title: "Linguagem e Comunicação", skills: [1, 2, 3, 4] },
      { id: 2, title: "Língua Estrangeira Moderna", skills: [5, 6, 7, 8] },
      { id: 3, title: "Linguagem Corporal e Saúde", skills: [9, 10, 11] },
      { id: 4, title: "Arte e Expressão Cultural", skills: [12, 13, 14] },
      { id: 5, title: "Literatura e Patrimônio Cultural", skills: [15, 16, 17] },
      { id: 6, title: "Mídia, Texto e Sociedade", skills: [18, 19, 20] },
      { id: 7, title: "Opinião, Argumentação e Discurso", skills: [21, 22, 23, 24] },
      { id: 8, title: "Recursos da Língua e Efeitos de Sentido", skills: [25, 26, 27] },
      { id: 9, title: "Tecnologias da Comunicação", skills: [28, 29, 30] },
    ]
  },
  humanas: {
    id: "humanas",
    name: "Ciências Humanas e suas Tecnologias",
    shortName: "Humanas",
    color: "#f59e0b", // Amber
    icon: "Globe",
    description: "História, Geografia, Filosofia e Sociologia.",
    competencies: [
      { id: 1, title: "Cultura, Identidade e Diversidade", skills: [1, 2, 3, 4, 5] },
      { id: 2, title: "Transformação do Espaço Geográfico", skills: [6, 7, 8, 9, 10] },
      { id: 3, title: "Instituições Sociais e Políticas", skills: [11, 12, 13, 14, 15] },
      { id: 4, title: "Lutas Sociais, Direitos e Cidadania", skills: [16, 17, 18, 19, 20] },
      { id: 5, title: "Trabalho, Técnica e Globalização", skills: [21, 22, 23, 24, 25] },
      { id: 6, title: "Sociedade, Natureza e Sustentabilidade", skills: [26, 27, 28, 29, 30] },
    ]
  },
  natureza: {
    id: "natureza",
    name: "Ciências da Natureza e suas Tecnologias",
    shortName: "Natureza",
    color: "#10b981", // Emerald
    icon: "Atom",
    description: "Física, Química e Biologia contextualizadas com fenômenos naturais e tecnológicos.",
    competencies: [
      { id: 1, title: "Ciência, Tecnologia e Vida Diária", skills: [1, 2, 3, 4] },
      { id: 2, title: "Biologia e Ecossistemas", skills: [5, 6, 7] },
      { id: 3, title: "Matéria, Transformações Químicas e Energia", skills: [8, 9, 10, 11, 12] },
      { id: 4, title: "Movimento, Forças e Gravitação", skills: [13, 14, 15, 16] },
      { id: 5, title: "Termodinâmica, Ondas e Eletromagnetismo", skills: [17, 18, 19, 20] },
      { id: 6, title: "Recursos Naturais e Impacto Ambiental", skills: [21, 22, 23] },
      { id: 7, title: "Genética, Evolução e Saúde Humana", skills: [24, 25, 26, 27, 28, 29, 30] },
    ]
  },
  redacao: {
    id: "redacao",
    name: "Redação Dissertativo-Argumentativa",
    shortName: "Redação",
    color: "#f43f5e", // Rose
    icon: "PenTool",
    description: "Texto dissertativo-argumentativo avaliado em 5 competências fundamentais (0 a 1000 pontos).",
    competencies: [
      { id: 1, title: "C1: Domínio da Norma Padrão", description: "Gramática, ortografia, pontuação, crase e sintaxe de concordância/regência." },
      { id: 2, title: "C2: Compreensão do Tema e Repertório", description: "Aplicação de conceitos de várias áreas do conhecimento com repertório legítimo e produtivo." },
      { id: 3, title: "C3: Seleção e Organização de Argumentos", description: "Projeto de texto estratégico, coerência de tese e relação de causa-consequência." },
      { id: 4, title: "C4: Mecanismos Linguísticos e Coesão", description: "Conectivos interparágrafos e intraparágrafos sem repetições viciosas." },
      { id: 5, title: "C5: Proposta de Intervenção Detalhada", description: "Os 5 elementos: Agente + Ação + Meio/Modo + Efeito + Detalhamento." },
    ]
  }
};

/**
 * Principais habilidades de alta recorrência estatística no ENEM
 */
export const HIGH_FREQUENCY_SKILLS = {
  matematica: [
    { code: "H1", name: "Leitura de gráficos e tabelas", priority: "alta" },
    { code: "H3", name: "Matemática financeira e porcentagem", priority: "crítica" },
    { code: "H11", name: "Cálculo de áreas e volumes geométricos", priority: "alta" },
    { code: "H16", name: "Regra de três e escalas cartográficas", priority: "crítica" },
    { code: "H19", name: "Funções afins e quadráticas em contextos reais", priority: "alta" },
    { code: "H28", name: "Probabilidade simples e condicional", priority: "alta" },
  ],
  linguagens: [
    { code: "H18", name: "Identificação da tese e objetivo comunicativo", priority: "crítica" },
    { code: "H21", name: "Reconhecimento de recursos de persuasão e ironia", priority: "alta" },
    { code: "H25", name: "Efeitos de sentido através de pontuação e escolhas lexicais", priority: "alta" },
    { code: "H15", name: "Vanguardas europeias e Modernismo brasileiro", priority: "alta" },
  ],
  humanas: [
    { code: "H2", name: "Patrimônio histórico e memória social", priority: "alta" },
    { code: "H6", name: "Dinâmica urbana, demografia e segregação socioespacial", priority: "crítica" },
    { code: "H8", name: "Biomas brasileiros e impactos ambientais antrópicos", priority: "crítica" },
    { code: "H11", name: "Cidadania, Constituição de 1988 e Direitos Humanos", priority: "alta" },
    { code: "H23", name: "Revoluções Industriais e modelos de produção (Taylorismo/Fordismo)", priority: "alta" },
  ],
  natureza: [
    { code: "H5", name: "Ecologia: ciclos biogeoquímicos e relações ecológicas", priority: "crítica" },
    { code: "H10", name: "Estequiometria, soluções e cálculo de rendimento", priority: "alta" },
    { code: "H14", name: "Mecânica: conservação de energia e trabalho", priority: "alta" },
    { code: "H17", name: "Eletrodinâmica: circuitos elétricos e potência", priority: "crítica" },
    { code: "H25", name: "Genética, DNA, biotecnologia e imunização", priority: "alta" },
  ]
};
