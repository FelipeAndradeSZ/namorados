/**
 * IndexedDB Storage — Armazenamento de alto volume para o DESTINO 1000.
 * 
 * Usado para:
 * - Histórico completo de tentativas (potencialmente milhares)
 * - Cache de questões carregadas (para acesso offline)
 * 
 * O localStorage continua sendo usado para o estado leve do jogador
 * (perfil, economia, localização). Apenas dados volumosos vão para IndexedDB.
 */

const DB_NAME = "destino1000";
const DB_VERSION = 1;

const STORES = {
  ATTEMPTS: "attempts",       // Histórico de tentativas de questões
  QUESTION_CACHE: "questionCache", // Cache local de questões carregadas
};

/**
 * Abre (ou cria) o banco IndexedDB.
 * @returns {Promise<IDBDatabase>}
 */
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Store de tentativas
      if (!db.objectStoreNames.contains(STORES.ATTEMPTS)) {
        const attemptStore = db.createObjectStore(STORES.ATTEMPTS, {
          keyPath: "id",
        });
        attemptStore.createIndex("questionId", "questionId", { unique: false });
        attemptStore.createIndex("area", "area", { unique: false });
        attemptStore.createIndex("timestamp", "timestamp", { unique: false });
        attemptStore.createIndex("isCorrect", "isCorrect", { unique: false });
      }

      // Store de cache de questões
      if (!db.objectStoreNames.contains(STORES.QUESTION_CACHE)) {
        db.createObjectStore(STORES.QUESTION_CACHE, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Wrapper genérico para operações de escrita no IndexedDB.
 */
async function writeToStore(storeName, data) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    store.put(data);
    tx.oncomplete = () => {
      db.close();
      resolve();
    };
    tx.onerror = () => {
      db.close();
      reject(tx.error);
    };
  });
}

/**
 * Wrapper genérico para leitura de todos os registros de uma store.
 */
async function readAllFromStore(storeName) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const request = store.getAll();
    request.onsuccess = () => {
      db.close();
      resolve(request.result);
    };
    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}

/**
 * Leitura por índice com filtro.
 */
async function readByIndex(storeName, indexName, value) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const index = store.index(indexName);
    const request = index.getAll(value);
    request.onsuccess = () => {
      db.close();
      resolve(request.result);
    };
    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}

/**
 * Contagem de registros em uma store.
 */
async function countInStore(storeName) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const request = store.count();
    request.onsuccess = () => {
      db.close();
      resolve(request.result);
    };
    request.onerror = () => {
      db.close();
      reject(request.error);
    };
  });
}

// ─────────────────────────────────────────────
// API PÚBLICA — Tentativas
// ─────────────────────────────────────────────

/**
 * Salva uma tentativa de questão no IndexedDB.
 * @param {object} attempt - { id, questionId, area, skill, isCorrect, confidence, errorCategory, timestamp, reviewSchedule }
 */
export async function saveAttempt(attempt) {
  try {
    await writeToStore(STORES.ATTEMPTS, attempt);
  } catch (err) {
    console.error("[IndexedDB] Erro ao salvar tentativa:", err);
    // Fallback silencioso — não interrompe o fluxo do jogo
  }
}

/**
 * Obtém todo o histórico de tentativas.
 * @returns {Promise<Array>}
 */
export async function getAllAttempts() {
  try {
    return await readAllFromStore(STORES.ATTEMPTS);
  } catch {
    return [];
  }
}

/**
 * Obtém tentativas filtradas por área.
 * @param {string} area
 * @returns {Promise<Array>}
 */
export async function getAttemptsByArea(area) {
  try {
    return await readByIndex(STORES.ATTEMPTS, "area", area);
  } catch {
    return [];
  }
}

/**
 * Obtém tentativas de uma questão específica.
 * @param {string} questionId
 * @returns {Promise<Array>}
 */
export async function getAttemptsByQuestion(questionId) {
  try {
    return await readByIndex(STORES.ATTEMPTS, "questionId", questionId);
  } catch {
    return [];
  }
}

/**
 * Conta o total de tentativas registradas.
 * @returns {Promise<number>}
 */
export async function getAttemptCount() {
  try {
    return await countInStore(STORES.ATTEMPTS);
  } catch {
    return 0;
  }
}

/**
 * Obtém as últimas N tentativas (para o dashboard).
 * @param {number} n
 * @returns {Promise<Array>}
 */
export async function getRecentAttempts(n = 50) {
  try {
    const all = await readAllFromStore(STORES.ATTEMPTS);
    // Ordena por timestamp decrescente e pega os últimos N
    return all.sort((a, b) => b.timestamp - a.timestamp).slice(0, n);
  } catch {
    return [];
  }
}

/**
 * Obtém estatísticas agregadas por área.
 * @returns {Promise<object>} { matematica: { total, correct, accuracy }, ... }
 */
export async function getStatsByArea() {
  try {
    const all = await readAllFromStore(STORES.ATTEMPTS);
    const stats = {};

    for (const att of all) {
      if (!stats[att.area]) {
        stats[att.area] = { total: 0, correct: 0, accuracy: 0 };
      }
      stats[att.area].total++;
      if (att.isCorrect) stats[att.area].correct++;
    }

    for (const area of Object.keys(stats)) {
      stats[area].accuracy =
        stats[area].total > 0
          ? Math.round((stats[area].correct / stats[area].total) * 100)
          : 0;
    }

    return stats;
  } catch {
    return {};
  }
}
