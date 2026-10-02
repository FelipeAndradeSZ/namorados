/**
 * Content Registry — Índice central de todos os módulos de conteúdo do DESTINO 1000.
 * 
 * Para adicionar novas questões:
 * 1. Crie um arquivo em /content/questions/AREA/TEMA.js
 * 2. Exporte um array constante com as questões (ex: export const QUESTIONS_PORCENTAGEM = [...])
 * 3. Registre o módulo aqui no objeto QUESTION_MODULES
 * 4. O Content Engine carregará automaticamente sob demanda
 * 
 * NÃO É NECESSÁRIO alterar nenhum componente React ou engine.
 */

// ─────────────────────────────────────────────
// QUESTÕES — Lazy-loaded por área/tema
// ─────────────────────────────────────────────

export const QUESTION_MODULES = {
  // ── Matemática ──
  "matematica/porcentagem": () => import("./questions/matematica/porcentagem.js"),
  "matematica/estatistica": () => import("./questions/matematica/estatistica.js"),
  "matematica/geometria": () => import("./questions/matematica/geometria.js"),
  "matematica/funcoes": () => import("./questions/matematica/funcoes.js"),
  "matematica/probabilidade": () => import("./questions/matematica/probabilidade.js"),
  "matematica/financeira": () => import("./questions/matematica/financeira.js"),
  "matematica/razao-proporcao": () => import("./questions/matematica/razao-proporcao.js"),
  "matematica/trigonometria": () => import("./questions/matematica/trigonometria.js"),
  "matematica/geometria-analitica": () => import("./questions/matematica/geometria-analitica.js"),
  "matematica/progressoes": () => import("./questions/matematica/progressoes.js"),
  "matematica/geometria-plana": () => import("./questions/matematica/geometria-plana.js"),
  "matematica/exponencial-logaritmos": () => import("./questions/matematica/exponencial-logaritmos.js"),

  // ── Linguagens ──
  "linguagens/interpretacao": () => import("./questions/linguagens/interpretacao.js"),
  "linguagens/literatura": () => import("./questions/linguagens/literatura.js"),
  "linguagens/generos": () => import("./questions/linguagens/generos.js"),
  "linguagens/argumentacao": () => import("./questions/linguagens/argumentacao.js"),
  "linguagens/recursos-linguisticos": () => import("./questions/linguagens/recursos-linguisticos.js"),
  "linguagens/vanguardas-artes": () => import("./questions/linguagens/vanguardas-artes.js"),
  "linguagens/funcoes-linguagem": () => import("./questions/linguagens/funcoes-linguagem.js"),
  "linguagens/figuras-linguagem": () => import("./questions/linguagens/figuras-linguagem.js"),
  "linguagens/variacao-linguistica": () => import("./questions/linguagens/variacao-linguistica.js"),
  "linguagens/artes-visuais-musica": () => import("./questions/linguagens/artes-visuais-musica.js"),
  "linguagens/coesao-coerencia": () => import("./questions/linguagens/coesao-coerencia.js"),
  "linguagens/ingles-instrumental": () => import("./questions/linguagens/ingles-instrumental.js"),
  "linguagens/espanhol-instrumental": () => import("./questions/linguagens/espanhol-instrumental.js"),

  // ── Ciências Humanas ──
  "humanas/brasil-colonial": () => import("./questions/humanas/brasil-colonial.js"),
  "humanas/brasil-republica": () => import("./questions/humanas/brasil-republica.js"),
  "humanas/geografia-urbana": () => import("./questions/humanas/geografia-urbana.js"),
  "humanas/sociologia-filosofia": () => import("./questions/humanas/sociologia-filosofia.js"),
  "humanas/meio-ambiente": () => import("./questions/humanas/meio-ambiente.js"),
  "humanas/geopolitica": () => import("./questions/humanas/geopolitica.js"),
  "humanas/cidadania-direitos": () => import("./questions/humanas/cidadania-direitos.js"),
  "humanas/era-vargas-populismo": () => import("./questions/humanas/era-vargas-populismo.js"),
  "humanas/geografia-fisica-clima": () => import("./questions/humanas/geografia-fisica-clima.js"),
  "humanas/historia-geral": () => import("./questions/humanas/historia-geral.js"),
  "humanas/brasil-imperio": () => import("./questions/humanas/brasil-imperio.js"),
  "humanas/afro-indigena": () => import("./questions/humanas/afro-indigena.js"),
  "humanas/geografia-agraria": () => import("./questions/humanas/geografia-agraria.js"),

  // ── Ciências da Natureza ──
  "natureza/ecologia": () => import("./questions/natureza/ecologia.js"),
  "natureza/mecanica": () => import("./questions/natureza/mecanica.js"),
  "natureza/estequiometria": () => import("./questions/natureza/estequiometria.js"),
  "natureza/genetica": () => import("./questions/natureza/genetica.js"),
  "natureza/eletricidade": () => import("./questions/natureza/eletricidade.js"),
  "natureza/termoquimica": () => import("./questions/natureza/termoquimica.js"),
  "natureza/ondulatoria": () => import("./questions/natureza/ondulatoria.js"),
  "natureza/quimica-organica": () => import("./questions/natureza/quimica-organica.js"),
  "natureza/citologia": () => import("./questions/natureza/citologia.js"),
  "natureza/eletroquimica": () => import("./questions/natureza/eletroquimica.js"),
  "natureza/termologia": () => import("./questions/natureza/termologia.js"),
  "natureza/evolucao": () => import("./questions/natureza/evolucao.js"),
  "natureza/solucoes-equilibrio": () => import("./questions/natureza/solucoes-equilibrio.js"),
  "natureza/fisiologia-humana": () => import("./questions/natureza/fisiologia-humana.js"),

  // ── Redação ──
  // "redacao/competencia5": () => import("./questions/redacao/competencia5.js"),
  // "redacao/repertorios": () => import("./questions/redacao/repertorios.js"),
  // "redacao/temas": () => import("./questions/redacao/temas.js"),
};

// ─────────────────────────────────────────────
// METADADOS ESTÁTICOS (contagens para UI sem carregar tudo)
// ─────────────────────────────────────────────

export const CONTENT_METADATA = {
  totalQuestionModules: Object.keys(QUESTION_MODULES).length,
  areas: ["matematica", "linguagens", "humanas", "natureza", "redacao"],
  version: "3.0.0",
  lastUpdated: "2026-10-01",
};
