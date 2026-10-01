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
  // "matematica/funcoes": () => import("./questions/matematica/funcoes.js"),
  // "matematica/probabilidade": () => import("./questions/matematica/probabilidade.js"),
  // "matematica/financeira": () => import("./questions/matematica/financeira.js"),
  // "matematica/razao-proporcao": () => import("./questions/matematica/razao-proporcao.js"),

  // ── Linguagens ──
  "linguagens/interpretacao": () => import("./questions/linguagens/interpretacao.js"),
  "linguagens/literatura": () => import("./questions/linguagens/literatura.js"),
  "linguagens/generos": () => import("./questions/linguagens/generos.js"),
  "linguagens/argumentacao": () => import("./questions/linguagens/argumentacao.js"),
  // "linguagens/recursos-linguisticos": () => import("./questions/linguagens/recursos-linguisticos.js"),

  // ── Ciências Humanas ──
  "humanas/brasil-colonial": () => import("./questions/humanas/brasil-colonial.js"),
  // "humanas/brasil-republica": () => import("./questions/humanas/brasil-republica.js"),
  "humanas/geografia-urbana": () => import("./questions/humanas/geografia-urbana.js"),
  // "humanas/sociologia-filosofia": () => import("./questions/humanas/sociologia-filosofia.js"),
  // "humanas/meio-ambiente": () => import("./questions/humanas/meio-ambiente.js"),

  // ── Ciências da Natureza ──
  "natureza/ecologia": () => import("./questions/natureza/ecologia.js"),
  "natureza/mecanica": () => import("./questions/natureza/mecanica.js"),
  // "natureza/estequiometria": () => import("./questions/natureza/estequiometria.js"),
  // "natureza/genetica": () => import("./questions/natureza/genetica.js"),
  // "natureza/eletricidade": () => import("./questions/natureza/eletricidade.js"),
  // "natureza/termoquimica": () => import("./questions/natureza/termoquimica.js"),

  // ── Redação ──
  // "redacao/competencia5": () => import("./questions/redacao/competencia5.js"),
  // "redacao/repertorios": () => import("./questions/redacao/repertorios.js"),
  // "redacao/temas": () => import("./questions/redacao/temas.js"),
};

// ─────────────────────────────────────────────
// CIDADES — Organizadas por região
// ─────────────────────────────────────────────

export const CITY_MODULES = {
  // sudeste: () => import("./cities/sudeste.js"),
  // nordeste: () => import("./cities/nordeste.js"),
  // norte: () => import("./cities/norte.js"),
  // "centro-oeste": () => import("./cities/centro-oeste.js"),
  // sul: () => import("./cities/sul.js"),
};

// ─────────────────────────────────────────────
// MISSÕES — Por cidade
// ─────────────────────────────────────────────

export const MISSION_MODULES = {
  vitoria: () => import("./missions/vitoria.js"),
  "sao-paulo": () => import("./missions/sao-paulo.js"),
  // "rio-de-janeiro": () => import("./missions/rio-de-janeiro.js"),
  // brasilia: () => import("./missions/brasilia.js"),
  // salvador: () => import("./missions/salvador.js"),
  // manaus: () => import("./missions/manaus.js"),
};

// ─────────────────────────────────────────────
// EVENTOS ALEATÓRIOS
// ─────────────────────────────────────────────

// export const EVENT_MODULE = () => import("./events/random-events.js");

// ─────────────────────────────────────────────
// METADADOS ESTÁTICOS (contagens para UI sem carregar tudo)
// ─────────────────────────────────────────────

export const CONTENT_METADATA = {
  totalQuestionModules: Object.keys(QUESTION_MODULES).length,
  totalCityRegions: Object.keys(CITY_MODULES).length,
  areas: ["matematica", "linguagens", "humanas", "natureza", "redacao"],
  version: "2.0.0",
  lastUpdated: "2026-10-01",
};
