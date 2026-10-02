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
  "matematica/analise-combinatoria": () => import("./questions/matematica/analise-combinatoria.js"),
  "matematica/sistemas-equacoes": () => import("./questions/matematica/sistemas-equacoes.js"),
  "matematica/aritmetica-divisibilidade": () => import("./questions/matematica/aritmetica-divisibilidade.js"),
  "matematica/matrizes-tabelas": () => import("./questions/matematica/matrizes-tabelas.js"),
  "matematica/circunferencia-conicas": () => import("./questions/matematica/circunferencia-conicas.js"),
  "matematica/geometria-espacial-metrica": () => import("./questions/matematica/geometria-espacial-metrica.js"),
  "matematica/estatistica-dispersao-desvio-padrao": () => import("./questions/matematica/estatistica-dispersao-desvio-padrao.js"),

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
  "linguagens/publicidade-semiotica": () => import("./questions/linguagens/publicidade-semiotica.js"),
  "linguagens/literatura-contemporanea-cancao": () => import("./questions/linguagens/literatura-contemporanea-cancao.js"),
  "linguagens/generos-digitais-hipertexto": () => import("./questions/linguagens/generos-digitais-hipertexto.js"),
  "linguagens/teoria-literaria-poetica": () => import("./questions/linguagens/teoria-literaria-poetica.js"),
  "linguagens/semiotica-multimodal-charges": () => import("./questions/linguagens/semiotica-multimodal-charges.js"),
  "linguagens/estrategias-argumentativas-persuasao": () => import("./questions/linguagens/estrategias-argumentativas-persuasao.js"),

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
  "humanas/filosofia-teoria-conhecimento": () => import("./questions/humanas/filosofia-teoria-conhecimento.js"),
  "humanas/trabalho-globalizacao-cultura": () => import("./questions/humanas/trabalho-globalizacao-cultura.js"),
  "humanas/filosofia-politica-poder": () => import("./questions/humanas/filosofia-politica-poder.js"),
  "humanas/geografia-urbana-segregacao": () => import("./questions/humanas/geografia-urbana-segregacao.js"),
  "humanas/iluminismo-revolucoes-burguesas": () => import("./questions/humanas/iluminismo-revolucoes-burguesas.js"),
  "humanas/republica-oligarquica-revoltas": () => import("./questions/humanas/republica-oligarquica-revoltas.js"),

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
  "natureza/fisica-moderna": () => import("./questions/natureza/fisica-moderna.js"),
  "natureza/bioquimica-metabolismo": () => import("./questions/natureza/bioquimica-metabolismo.js"),
  "natureza/optica-geometrica-ondas": () => import("./questions/natureza/optica-geometrica-ondas.js"),
  "natureza/equilibrio-acido-base-tampao": () => import("./questions/natureza/equilibrio-acido-base-tampao.js"),
  "natureza/cinetica-quimica-catalise": () => import("./questions/natureza/cinetica-quimica-catalise.js"),
  "natureza/fisiologia-renal-hemodinamica": () => import("./questions/natureza/fisiologia-renal-hemodinamica.js"),

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
