/**
 * Content Engine — Carrega questões sob demanda via dynamic import.
 * 
 * Responsabilidades:
 * - Importar módulos de questões lazily (sem carregar tudo de uma vez)
 * - Manter cache dos módulos já carregados
 * - Fornecer APIs de filtragem (por área, cidade, skill, dificuldade)
 * - Contagem de questões disponíveis sem carregar conteúdo
 * 
 * O Content Engine NUNCA modifica questões — é read-only.
 */

import { QUESTION_MODULES, CONTENT_METADATA } from "../content/registry";

class ContentEngine {
  constructor() {
    /** @type {Map<string, Array>} Cache de módulos já carregados */
    this.loadedModules = new Map();

    /** @type {Map<string, object>} Índice rápido: questionId → questão */
    this.questionIndex = new Map();

    /** @type {boolean} Se todos os módulos foram carregados */
    this.fullyLoaded = false;
  }

  /**
   * Carrega um módulo de questões específico e armazena no cache.
   * @param {string} modulePath - ex: "matematica/porcentagem"
   * @returns {Promise<Array>} Array de questões do módulo
   */
  async loadModule(modulePath) {
    if (this.loadedModules.has(modulePath)) {
      return this.loadedModules.get(modulePath);
    }

    const loader = QUESTION_MODULES[modulePath];
    if (!loader) {
      console.warn(`[ContentEngine] Módulo não encontrado: ${modulePath}`);
      return [];
    }

    try {
      const mod = await loader();
      // Encontra o primeiro export que é um array (convenção: QUESTIONS_XXXX)
      const questions = Object.values(mod).find(Array.isArray) || [];

      this.loadedModules.set(modulePath, questions);

      // Indexar questões por ID
      for (const q of questions) {
        if (q.id) {
          this.questionIndex.set(q.id, q);
        }
      }

      return questions;
    } catch (err) {
      console.error(`[ContentEngine] Erro ao carregar ${modulePath}:`, err);
      return [];
    }
  }

  /**
   * Carrega TODOS os módulos registrados (usa com cautela).
   * Útil para simulados que precisam de questões de todas as áreas.
   */
  async loadAll() {
    if (this.fullyLoaded) return;

    const paths = Object.keys(QUESTION_MODULES);
    await Promise.all(paths.map((p) => this.loadModule(p)));
    this.fullyLoaded = true;
  }

  /**
   * Carrega questões de uma área específica.
   * @param {string} area - "matematica" | "linguagens" | "humanas" | "natureza" | "redacao"
   * @param {object} [filters] - Filtros opcionais
   * @param {number} [filters.difficulty] - Filtrar por dificuldade
   * @param {number} [filters.skill] - Filtrar por habilidade
   * @param {number} [filters.competence] - Filtrar por competência
   * @returns {Promise<Array>} Questões filtradas
   */
  async getQuestionsForArea(area, filters = {}) {
    const modulePaths = Object.keys(QUESTION_MODULES).filter((p) =>
      p.startsWith(`${area}/`)
    );

    const allQuestions = [];
    for (const path of modulePaths) {
      const qs = await this.loadModule(path);
      allQuestions.push(...qs);
    }

    return this._applyFilters(allQuestions, filters);
  }

  /**
   * Obtém questões por habilidade específica do ENEM.
   * @param {string} area
   * @param {number} competence
   * @param {number} skill
   * @returns {Promise<Array>}
   */
  async getQuestionsForSkill(area, competence, skill) {
    return this.getQuestionsForArea(area, { competence, skill });
  }

  /**
   * Busca uma questão pelo ID.
   * @param {string} questionId
   * @returns {Promise<object|null>}
   */
  async getQuestionById(questionId) {
    if (this.questionIndex.has(questionId)) {
      return this.questionIndex.get(questionId);
    }

    await this.loadAll();
    return this.questionIndex.get(questionId) || null;
  }

  /**
   * Obtém uma amostra aleatória de questões com filtros.
   * @param {number} count - Quantidade desejada
   * @param {object} [filters] - Filtros opcionais
   * @param {string} [filters.area] - Filtrar por área
   * @param {number} [filters.difficulty] - Filtrar por dificuldade
   * @param {Set<string>} [filters.excludeIds] - IDs a excluir (já vistos)
   * @returns {Promise<Array>}
   */
  async getRandomQuestions(count, filters = {}) {
    let pool;
    if (filters.area) {
      pool = await this.getQuestionsForArea(filters.area, filters);
    } else {
      await this.loadAll();
      pool = [...this.questionIndex.values()];
      pool = this._applyFilters(pool, filters);
    }

    // Excluir questões já vistas
    if (filters.excludeIds && filters.excludeIds.size > 0) {
      pool = pool.filter((q) => !filters.excludeIds.has(q.id));
    }

    // Fisher-Yates shuffle e fatiar
    const shuffled = [...pool];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, count);
  }

  /**
   * Contagem total de questões registradas (sem carregar conteúdo).
   * Após loadAll(), retorna a contagem exata.
   */
  getTotalQuestionCount() {
    if (this.fullyLoaded) {
      return this.questionIndex.size;
    }
    return CONTENT_METADATA.totalQuestionModules * 15; // Estimativa ~15 questões/módulo
  }

  /**
   * Lista áreas disponíveis.
   */
  getAvailableAreas() {
    return CONTENT_METADATA.areas;
  }

  /**
   * Aplica filtros opcionais a uma lista de questões.
   * @private
   */
  _applyFilters(questions, filters) {
    let result = questions;

    if (filters.difficulty != null) {
      result = result.filter((q) => q.difficulty === filters.difficulty);
    }
    if (filters.skill != null) {
      result = result.filter((q) => q.skill === filters.skill);
    }
    if (filters.competence != null) {
      result = result.filter((q) => q.competence === filters.competence);
    }
    if (filters.topic) {
      result = result.filter((q) => q.topic === filters.topic);
    }
    if (filters.maxDifficulty != null) {
      result = result.filter((q) => q.difficulty <= filters.maxDifficulty);
    }
    if (filters.minDifficulty != null) {
      result = result.filter((q) => q.difficulty >= filters.minDifficulty);
    }
    if (filters.status) {
      result = result.filter((q) => q.status === filters.status);
    }

    return result;
  }
}

// Singleton: uma instância compartilhada por toda a aplicação
export const contentEngine = new ContentEngine();
