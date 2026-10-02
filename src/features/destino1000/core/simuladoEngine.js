/**
 * SIMULADO ENGINE — Motor Profissional de Provas e Simulados Oficiais ENEM
 * 
 * Suporta:
 * - Provas de 90 questões (Dia 1, Dia 2, Geral Integrado)
 * - Provas de Área (45 questões)
 * - Controle rigoroso de tempo oficial (5h para Dia 1, 4h30 para Dia 2)
 * - Auto-save e restauração de sessão em caso de queda de conexão/refresh
 * - Marcação de questões para revisão (Flag)
 * - Matriz de correção TRI com análise de coerência
 * - Histórico persistente de simulados
 */

import { contentEngine } from "./contentEngine";
import { estimateTRIScore } from "../learning/learningEngine";

export const SIMULADO_MODALITIES = {
  "dia1-90": {
    id: "dia1-90",
    name: "Dia 1 Oficial: Linguagens e Ciências Humanas",
    totalQuestions: 90,
    durationMinutes: 300, // 5 horas
    description: "45 questões de Linguagens + 45 questões de Ciências Humanas. Simulação exata do 1º domingo do ENEM.",
    badge: "Oficial • 90q",
    distribution: [
      { area: "linguagens", count: 45 },
      { area: "humanas", count: 45 }
    ]
  },
  "dia2-90": {
    id: "dia2-90",
    name: "Dia 2 Oficial: Matemática e Ciências da Natureza",
    totalQuestions: 90,
    durationMinutes: 270, // 4h30
    description: "45 questões de Matemática + 45 questões de Ciências da Natureza. Simulação exata do 2º domingo do ENEM.",
    badge: "Oficial • 90q",
    distribution: [
      { area: "matematica", count: 45 },
      { area: "natureza", count: 45 }
    ]
  },
  "geral-90": {
    id: "geral-90",
    name: "Simulado Geral Integrado (4 Áreas)",
    totalQuestions: 90,
    durationMinutes: 300,
    description: "Mix equilibrado de todas as 4 áreas do conhecimento do ENEM (23 Mat, 23 Nat, 22 Hum, 22 Lin).",
    badge: "Integrado • 90q",
    distribution: [
      { area: "matematica", count: 23 },
      { area: "natureza", count: 23 },
      { area: "humanas", count: 22 },
      { area: "linguagens", count: 22 }
    ]
  },
  "natureza-45": {
    id: "natureza-45",
    name: "Caderno Completo: Ciências da Natureza",
    totalQuestions: 45,
    durationMinutes: 150, // 2h30
    description: "45 questões de Biologia, Física e Química com alta densidade e interdisciplinaridade.",
    badge: "Área • 45q",
    distribution: [
      { area: "natureza", count: 45 }
    ]
  },
  "matematica-45": {
    id: "matematica-45",
    name: "Caderno Completo: Matemática e suas Tecnologias",
    totalQuestions: 45,
    durationMinutes: 150, // 2h30
    description: "45 questões de Aritmética, Álgebra, Geometria e Estatística no padrão INEP.",
    badge: "Área • 45q",
    distribution: [
      { area: "matematica", count: 45 }
    ]
  },
  "humanas-45": {
    id: "humanas-45",
    name: "Caderno Completo: Ciências Humanas",
    totalQuestions: 45,
    durationMinutes: 150,
    description: "45 questões de História, Geografia, Filosofia e Sociologia.",
    badge: "Área • 45q",
    distribution: [
      { area: "humanas", count: 45 }
    ]
  },
  "linguagens-45": {
    id: "linguagens-45",
    name: "Caderno Completo: Linguagens e Códigos",
    totalQuestions: 45,
    durationMinutes: 150,
    description: "45 questões de Interpretação Textual, Literatura, Artes e Recursos da Língua.",
    badge: "Área • 45q",
    distribution: [
      { area: "linguagens", count: 45 }
    ]
  },
  "treino-20": {
    id: "treino-20",
    name: "Simulado Intermediário de Velocidade",
    totalQuestions: 20,
    durationMinutes: 60, // 1h
    description: "20 questões mistas interdisciplinares para ritmo e gestão de tempo.",
    badge: "Treino • 20q",
    distribution: [
      { area: "matematica", count: 5 },
      { area: "natureza", count: 5 },
      { area: "humanas", count: 5 },
      { area: "linguagens", count: 5 }
    ]
  },
  "aquecimento-10": {
    id: "aquecimento-10",
    name: "Mini-Simulado de Aquecimento",
    totalQuestions: 10,
    durationMinutes: 30, // 30 min
    description: "10 questões rápidas para calibrar o foco diário.",
    badge: "Sprint • 10q",
    distribution: [
      { area: "matematica", count: 3 },
      { area: "natureza", count: 3 },
      { area: "humanas", count: 2 },
      { area: "linguagens", count: 2 }
    ]
  }
};

const ACTIVE_SIMULADO_STORAGE_KEY = "enem_active_simulado_session_v3";

/**
 * Cria e embaralha o caderno de questões para o simulado escolhido.
 */
export async function createSimulado(modalityId, options = {}) {
  const config = SIMULADO_MODALITIES[modalityId] || SIMULADO_MODALITIES["aquecimento-10"];
  const excludeIds = options.excludeIds || new Set();

  await contentEngine.loadAll();

  const selectedQuestions = [];

  for (const dist of config.distribution) {
    let pool = await contentEngine.getQuestionsForArea(dist.area);
    
    // Filtra questões já vistas se solicitado
    let candidates = pool.filter(q => !excludeIds.has(q.id));
    if (candidates.length < dist.count) {
      // Se a base exclusiva for menor que a meta, completa com as já vistas
      candidates = [...pool];
    }

    // Embaralha com Fisher-Yates
    const shuffled = [...candidates];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    selectedQuestions.push(...shuffled.slice(0, dist.count));
  }

  // Embaralha a ordem final das questões no simulado (interleaving) a não ser que seja Dia 1/Dia 2 onde áreas são blocos
  const finalQuestions = [...selectedQuestions];
  if (config.id.startsWith("geral-") || config.id.startsWith("treino-") || config.id.startsWith("aquecimento-")) {
    for (let i = finalQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [finalQuestions[i], finalQuestions[j]] = [finalQuestions[j], finalQuestions[i]];
    }
  }

  const simuladoSession = {
    id: `sim-${Date.now()}-${modalityId}`,
    modalityId: config.id,
    modalityName: config.name,
    totalQuestions: finalQuestions.length,
    durationMinutes: config.durationMinutes,
    timeRemainingSeconds: config.durationMinutes * 60,
    startTime: Date.now(),
    questions: finalQuestions,
    answers: {}, // questionId -> { selectedOptionId, confidence, timestamp }
    flaggedQuestionIds: [], // IDs marcadas para revisão
    eliminations: {}, // questionId -> [optIds eliminadas]
    currentIndex: 0,
    isCompleted: false,
    createdAt: new Date().toISOString()
  };

  saveActiveSimulado(simuladoSession);
  return simuladoSession;
}

/**
 * Salva o estado ativo do simulado no localStorage.
 */
export function saveActiveSimulado(session) {
  try {
    if (!session) return;
    localStorage.setItem(ACTIVE_SIMULADO_STORAGE_KEY, JSON.stringify({
      ...session,
      lastSavedAt: Date.now()
    }));
  } catch (err) {
    console.error("Falha ao salvar sessão ativa do simulado:", err);
  }
}

/**
 * Carrega sessão de simulado em andamento (se houver).
 */
export function loadActiveSimulado() {
  try {
    const raw = localStorage.getItem(ACTIVE_SIMULADO_STORAGE_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw);
    if (session && !session.isCompleted && session.questions?.length > 0) {
      return session;
    }
    return null;
  } catch (err) {
    console.error("Falha ao recuperar sessão do simulado:", err);
    return null;
  }
}

/**
 * Remove a sessão do simulado ativo (após entrega ou cancelamento).
 */
export function clearActiveSimulado() {
  try {
    localStorage.removeItem(ACTIVE_SIMULADO_STORAGE_KEY);
  } catch {
    // Silently ignore
  }
}

/**
 * Calcula o resultado detalhado com notas TRI, coerência e métricas por área.
 */
export function gradeSimulado(session) {
  const { questions = [], answers = {}, durationMinutes, timeRemainingSeconds } = session;

  const totalTimeUsedSeconds = Math.max(60, (durationMinutes * 60) - (timeRemainingSeconds || 0));
  const avgTimePerQuestion = questions.length > 0 ? Math.round(totalTimeUsedSeconds / questions.length) : 180;

  let totalCorrect = 0;
  const areaStats = {};
  const questionResults = [];

  questions.forEach((q, idx) => {
    const studentAns = answers[q.id];
    const correctOpt = q.options?.find(o => o.isCorrect);
    const isCorrect = studentAns && correctOpt && studentAns.selectedOptionId === correctOpt.id;

    if (isCorrect) totalCorrect++;

    // Agrupamento por área
    const area = q.area || "geral";
    if (!areaStats[area]) {
      areaStats[area] = {
        total: 0,
        correct: 0,
        historyForTRI: []
      };
    }

    areaStats[area].total += 1;
    if (isCorrect) areaStats[area].correct += 1;

    areaStats[area].historyForTRI.push({
      questionId: q.id,
      area: q.area,
      difficulty: q.difficulty || 3,
      isCorrect
    });

    questionResults.push({
      index: idx + 1,
      questionId: q.id,
      area: q.area,
      topic: q.topic,
      difficulty: q.difficulty || 3,
      userOptionId: studentAns?.selectedOptionId || null,
      correctOptionId: correctOpt?.id || null,
      isCorrect,
      isUnanswered: !studentAns?.selectedOptionId,
      confidence: studentAns?.confidence || null
    });
  });

  // Cálculo da TRI por área
  const triByArea = {};
  let weightedTriSum = 0;
  let areasCount = 0;

  for (const [area, data] of Object.entries(areaStats)) {
    const tri = estimateTRIScore(data.historyForTRI, area);
    triByArea[area] = {
      score: tri.estimatedScore,
      coherenceLevel: tri.coherenceLevel,
      accuracyPercent: Math.round((data.correct / (data.total || 1)) * 100),
      easyAccuracy: tri.easyAccuracy,
      medAccuracy: tri.medAccuracy,
      hardAccuracy: tri.hardAccuracy,
      totalQuestions: data.total,
      correctCount: data.correct
    };
    weightedTriSum += tri.estimatedScore;
    areasCount += 1;
  }

  const overallTRIScore = areasCount > 0 ? Math.round(weightedTriSum / areasCount) : 500;
  const overallAccuracy = questions.length > 0 ? Math.round((totalCorrect / questions.length) * 100) : 0;

  const result = {
    simuladoId: session.id,
    modalityId: session.modalityId,
    modalityName: session.modalityName,
    completedAt: new Date().toISOString(),
    totalQuestions: questions.length,
    totalAnswered: Object.keys(answers).length,
    totalCorrect,
    overallAccuracy,
    overallTRIScore,
    triByArea,
    totalTimeUsedSeconds,
    avgTimePerQuestion,
    questionResults,
    wrongQuestions: questions.filter(q => {
      const correctOpt = q.options?.find(o => o.isCorrect);
      return !answers[q.id] || answers[q.id].selectedOptionId !== correctOpt?.id;
    })
  };

  clearActiveSimulado();
  return result;
}
