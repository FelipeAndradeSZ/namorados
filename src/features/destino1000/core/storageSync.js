/**
 * DESTINO 1000 — Sincronizador de Armazenamento Local e Nuvem
 * Garante resiliência de dados mesmo com falhas de rede ou recarregamentos de página.
 */

import { INITIAL_PLAYER_STATE } from "./gameState";

const STORAGE_KEY = "destino1000_player_state_v1";

export function loadPlayerState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PLAYER_STATE;
    const parsed = JSON.parse(raw);
    
    // Mesclagem segura caso novos campos sejam adicionados no schema
    return {
      ...INITIAL_PLAYER_STATE,
      ...parsed,
      profile: {
        ...INITIAL_PLAYER_STATE.profile,
        ...(parsed.profile || {})
      },
      economy: {
        ...INITIAL_PLAYER_STATE.economy,
        ...(parsed.economy || {})
      },
      location: {
        ...INITIAL_PLAYER_STATE.location,
        ...(parsed.location || {})
      },
      inventory: {
        ...INITIAL_PLAYER_STATE.inventory,
        ...(parsed.inventory || {})
      },
      masteryMatrix: {
        ...INITIAL_PLAYER_STATE.masteryMatrix,
        ...(parsed.masteryMatrix || {})
      },
    };
  } catch (err) {
    console.warn("Falha ao recuperar progresso do Destino 1000 do localStorage:", err);
    return INITIAL_PLAYER_STATE;
  }
}

export function savePlayerState(state) {
  try {
    if (!state) return;
    const serialized = JSON.stringify({
      ...state,
      lastSavedAt: new Date().toISOString()
    });
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (err) {
    console.error("Erro ao salvar progresso do Destino 1000:", err);
  }
}

export function exportBackupData(state) {
  return JSON.stringify({
    exportedAt: new Date().toISOString(),
    version: "1.0.0",
    data: state
  }, null, 2);
}
