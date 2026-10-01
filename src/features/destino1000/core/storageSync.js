/**
 * DESTINO 1000 — Sincronizador de Armazenamento Local e Nuvem
 * 100% Focado em Aprendizagem Acadêmica do ENEM
 */

import { INITIAL_PLAYER_STATE } from "./gameState";

const STORAGE_KEY = "destino1000_academic_state_v2";

export function loadPlayerState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PLAYER_STATE;
    const parsed = JSON.parse(raw);
    
    return {
      ...INITIAL_PLAYER_STATE,
      ...parsed,
      profile: {
        ...INITIAL_PLAYER_STATE.profile,
        ...(parsed.profile || {})
      },
      masteryMatrix: {
        ...INITIAL_PLAYER_STATE.masteryMatrix,
        ...(parsed.masteryMatrix || {})
      },
      errorNotebook: parsed.errorNotebook || [],
      spacedRepetitionQueue: parsed.spacedRepetitionQueue || [],
      repertoriosAnotados: parsed.repertoriosAnotados || INITIAL_PLAYER_STATE.repertoriosAnotados,
      history: parsed.history || [],
      simuladosHistory: parsed.simuladosHistory || []
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
    version: "2.0.0",
    data: state
  }, null, 2);
}
