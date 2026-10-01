import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PenTool, 
  BarChart3, 
  GraduationCap, 
  Target
} from "lucide-react";

import { HUD } from "./ui/HUD";
import { AreaStudyHub } from "./ui/AreaStudyHub";
import { StudyStation } from "./ui/StudyStation";
import { RedacaoLab } from "./ui/RedacaoLab";
import { AnalyticsDashboard } from "./ui/AnalyticsDashboard";
import { SessionReportModal } from "./ui/SessionReportModal";

import { contentEngine } from "./core/contentEngine";
import { saveAttempt } from "./core/indexedDB";
import { loadPlayerState, savePlayerState } from "./core/storageSync";
import { rewardStudyAction } from "./core/gameState";
import { 
  calculateNextReview, 
  updateSkillMastery
} from "./learning/learningEngine";
import { destinoAudio } from "./core/soundEngine";

export default function Destino1000App({ onBack }) {
  const [playerState, setPlayerState] = useState(() => loadPlayerState());
  const [activeTab, setActiveTab] = useState("areas"); // 'areas' | 'simulados' | 'estudo' | 'redacao' | 'evolucao'
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [activeSessionQuestions, setActiveSessionQuestions] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Estados de Sessão Acadêmica e Simulado Cronometrado
  const [sessionType, setSessionType] = useState("estudo"); // 'estudo' | 'simulado' | 'revisao' | 'erro' | 'rapido'
  const [sessionStartTime, setSessionStartTime] = useState(null);
  const [currentSessionAttempts, setCurrentSessionAttempts] = useState([]);
  const [completedSessionData, setCompletedSessionData] = useState(null);
  const [simuladoTimeRemaining, setSimuladoTimeRemaining] = useState(null);

  // Auto-save sempre que o estado mudar
  useEffect(() => {
    savePlayerState(playerState);
  }, [playerState]);

  // Limpeza de áudio ao sair da tela
  useEffect(() => {
    return () => {
      destinoAudio.cleanup();
    };
  }, []);

  const handleToggleMute = useCallback(() => {
    setIsMuted(prev => {
      const next = !prev;
      destinoAudio.setMuted(next);
      return next;
    });
  }, []);

  // Finalizar sessão acadêmica com relatório pedagógico
  const handleFinishSession = useCallback(() => {
    const totalTime = sessionStartTime ? Math.round((Date.now() - sessionStartTime) / 1000) : 180;
    setCompletedSessionData({
      questions: activeSessionQuestions,
      attempts: currentSessionAttempts,
      sessionType,
      totalTimeSeconds: totalTime
    });
  }, [sessionStartTime, activeSessionQuestions, currentSessionAttempts, sessionType]);

  // Cronômetro regressivo para o modo Simulado ENEM
  useEffect(() => {
    if (activeTab !== "estudo" || sessionType !== "simulado" || simuladoTimeRemaining == null || simuladoTimeRemaining <= 0) {
      return;
    }

    const timer = setInterval(() => {
      setSimuladoTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          destinoAudio.playReflect();
          handleFinishSession();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [activeTab, sessionType, simuladoTimeRemaining, handleFinishSession]);

  // Iniciar sessão focada em um módulo / tópico específico
  const handleStartTopicSession = async (modulePath) => {
    destinoAudio.playClick();
    setIsLoading(true);
    setSessionType("topico");
    setSessionStartTime(Date.now());
    setCurrentSessionAttempts([]);
    setCompletedSessionData(null);
    setSimuladoTimeRemaining(null);

    try {
      const questions = await contentEngine.loadModule(modulePath);
      if (questions && questions.length > 0) {
        setActiveSessionQuestions(questions);
      } else {
        // Fallback para perguntas da área
        const [area] = modulePath.split("/");
        const areaQs = await contentEngine.getQuestionsForArea(area);
        setActiveSessionQuestions(areaQs.slice(0, 10));
      }
    } catch (e) {
      console.error("Erro ao carregar módulo:", e);
      const fallback = await contentEngine.getRandomQuestions(10);
      setActiveSessionQuestions(fallback);
    }

    setActiveQuestionIndex(0);
    setActiveTab("estudo");
    setIsLoading(false);
  };

  // Modo "Tenho 10 Minutos"
  const handleQuickSession = async (minutes = 10) => {
    destinoAudio.playClick();
    setIsLoading(true);
    setSessionType("rapido");
    setSessionStartTime(Date.now());
    setCurrentSessionAttempts([]);
    setCompletedSessionData(null);
    setSimuladoTimeRemaining(minutes * 60);
    
    const count = Math.max(2, Math.floor(minutes / 2.5));
    const seenIds = new Set(playerState.history?.map(h => h.questionId) || []);
    
    let quickPool = await contentEngine.getRandomQuestions(count, { excludeIds: seenIds });
    
    if (quickPool.length < count) {
       const fallback = await contentEngine.getRandomQuestions(count);
       quickPool = fallback;
    }

    setActiveSessionQuestions(quickPool);
    setActiveQuestionIndex(0);
    setActiveTab("estudo");
    setIsLoading(false);
  };

  // Modo "Revisão do Dia" (SM-2)
  const handleStartReviewSession = async () => {
    destinoAudio.playClick();
    setIsLoading(true);
    setSessionType("revisao");
    setSessionStartTime(Date.now());
    setCurrentSessionAttempts([]);
    setCompletedSessionData(null);
    setSimuladoTimeRemaining(null);

    const today = new Date().toISOString().split("T")[0];
    const dueQuestionIds = (playerState.history || [])
      .filter(h => h.reviewSchedule && h.reviewSchedule.nextReviewDate <= today)
      .map(h => h.questionId);

    let reviewPool = [];
    for (const qid of dueQuestionIds) {
      const q = await contentEngine.getQuestionById(qid);
      if (q) reviewPool.push(q);
    }

    if (reviewPool.length === 0) {
      reviewPool = await contentEngine.getRandomQuestions(8);
    }

    setActiveSessionQuestions(reviewPool);
    setActiveQuestionIndex(0);
    setActiveTab("estudo");
    setIsLoading(false);
  };

  // Modo "Caderno de Erros" (Superar falhas)
  const handleStartErrorSession = async () => {
    destinoAudio.playClick();
    setIsLoading(true);
    setSessionType("erro");
    setSessionStartTime(Date.now());
    setCurrentSessionAttempts([]);
    setCompletedSessionData(null);
    setSimuladoTimeRemaining(null);

    const errIds = (playerState.errorNotebook || []).map(e => e.questionId);
    let errorPool = [];
    for (const qid of errIds) {
      const q = await contentEngine.getQuestionById(qid);
      if (q) errorPool.push(q);
    }

    if (errorPool.length === 0) {
      errorPool = await contentEngine.getRandomQuestions(5);
    }

    setActiveSessionQuestions(errorPool);
    setActiveQuestionIndex(0);
    setActiveTab("estudo");
    setIsLoading(false);
  };

  // Modo Simulado Oficial ENEM
  const handleSimuladoSession = async (count = 10) => {
    destinoAudio.playClick();
    setIsLoading(true);
    setSessionType("simulado");
    setSessionStartTime(Date.now());
    setCurrentSessionAttempts([]);
    setCompletedSessionData(null);
    setSimuladoTimeRemaining(count * 180); // 3 minutos por questão (padrão ENEM)
    
    const seenIds = new Set(playerState.history?.map(h => h.questionId) || []);
    
    let simuladoPool = await contentEngine.getRandomQuestions(count, { excludeIds: seenIds });
    
    if (simuladoPool.length < count) {
       const fallback = await contentEngine.getRandomQuestions(count);
       simuladoPool = fallback;
    }

    setActiveSessionQuestions(simuladoPool);
    setActiveQuestionIndex(0);
    setActiveTab("estudo");
    setIsLoading(false);
  };

  // Processar resposta da questão
  const handleAnswerSubmit = async ({ questionId, selectedOptionId, isCorrect, confidence, errorCategory, reflected }) => {
    const question = activeSessionQuestions.find(q => q.id === questionId);
    if (!question) return;

    // Registrar no histórico da sessão ativa atual
    setCurrentSessionAttempts(prev => [
      ...prev.filter(a => a.questionId !== questionId),
      { questionId, isCorrect, selectedOptionId }
    ]);

    let attemptToSave = null;

    setPlayerState(prev => {
      // 1. Recompensa de XP Acadêmico
      let xp = isCorrect ? 50 : 20;

      if (reflected) {
        // Bônus pedagógico por reflexão metacognitiva do erro
        xp += 30;
      }

      const rewarded = rewardStudyAction(prev, { xp, isCorrect });

      // 2. Cálculo do SM-2 (Repetição Espaçada)
      const previousSchedule = prev.history?.find(h => h.questionId === questionId)?.reviewSchedule;
      const nextSchedule = calculateNextReview(previousSchedule, isCorrect, confidence);

      // 3. Atualizar domínio da área
      const currentAreaMastery = prev.masteryMatrix?.[question.area] || 50;
      const newAreaMastery = updateSkillMastery(currentAreaMastery, isCorrect, question.difficulty, confidence);

      // 4. Caderno de Erros (Metacognição e Superação)
      let updatedErrorNotebook = [...(prev.errorNotebook || [])];
      if (!isCorrect) {
        const existingErrIdx = updatedErrorNotebook.findIndex(e => e.questionId === questionId);
        const errEntry = {
          questionId,
          area: question.area,
          topic: question.topic,
          skill: question.skill,
          errorCategory: errorCategory || "chute",
          date: new Date().toISOString(),
          attemptsCount: existingErrIdx >= 0 ? (updatedErrorNotebook[existingErrIdx].attemptsCount || 1) + 1 : 1
        };

        if (existingErrIdx >= 0) {
          updatedErrorNotebook[existingErrIdx] = errEntry;
        } else {
          updatedErrorNotebook = [errEntry, ...updatedErrorNotebook];
        }
      } else {
        // Se acertou, remove do caderno de erros
        updatedErrorNotebook = updatedErrorNotebook.filter(e => e.questionId !== questionId);
      }

      // 5. Construir tentativa
      attemptToSave = {
        id: `${Date.now()}-${questionId}`,
        questionId,
        selectedOptionId,
        area: question.area,
        topic: question.topic,
        skill: question.skill,
        difficulty: question.difficulty || 3,
        isCorrect,
        confidence,
        errorCategory,
        timestamp: Date.now(),
        reviewSchedule: nextSchedule
      };

      return {
        ...rewarded,
        masteryMatrix: {
          ...rewarded.masteryMatrix,
          [question.area]: newAreaMastery
        },
        errorNotebook: updatedErrorNotebook,
        history: [...(rewarded.history || []), attemptToSave]
      };
    });

    if (attemptToSave) {
      await saveAttempt(attemptToSave);
    }
  };

  const currentQuestion = activeSessionQuestions[activeQuestionIndex];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0b0c1e] text-white select-none overflow-hidden font-sans">
      
      {/* Top HUD */}
      <HUD 
        playerState={playerState} 
        onBack={onBack}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Área Central Rolável */}
      <main className="flex-1 overflow-y-auto pb-24 pt-2">
        <AnimatePresence mode="wait">
          {activeTab === "areas" && (
            <motion.div
              key="areas"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <AreaStudyHub 
                playerState={playerState}
                onStartTopicSession={handleStartTopicSession}
                onGoToRedacao={() => setActiveTab("redacao")}
                onStartQuickSession={handleQuickSession}
                onStartReviewSession={handleStartReviewSession}
                onStartErrorSession={handleStartErrorSession}
                onXpEarned={(xp) => {
                  setPlayerState(prev => rewardStudyAction(prev, { xp, isCorrect: true }));
                }}
              />
            </motion.div>
          )}

          {activeTab === "simulados" && (
            <motion.div
              key="simulados"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <AnalyticsDashboard 
                playerState={playerState} 
                onStartSimulado={handleSimuladoSession}
              />
            </motion.div>
          )}

          {activeTab === "estudo" && (
            <motion.div
              key="estudo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="h-full"
            >
              {completedSessionData ? (
                <SessionReportModal
                  sessionQuestions={completedSessionData.questions}
                  sessionAttempts={completedSessionData.attempts}
                  sessionType={completedSessionData.sessionType}
                  totalTimeSeconds={completedSessionData.totalTimeSeconds}
                  onClose={() => {
                    setCompletedSessionData(null);
                    setActiveTab("areas");
                  }}
                  onRetryErrors={(wrongQuestions) => {
                    setActiveSessionQuestions(wrongQuestions);
                    setActiveQuestionIndex(0);
                    setCurrentSessionAttempts([]);
                    setSessionStartTime(Date.now());
                    setSessionType("erro");
                    setCompletedSessionData(null);
                  }}
                />
              ) : isLoading ? (
                <div className="flex flex-col items-center justify-center h-[50vh] text-rose-300">
                  <div className="w-8 h-8 border-4 border-rose-500/30 border-t-rose-500 rounded-full animate-spin mb-4" />
                  <p className="text-sm">Carregando conteúdo e questões do ENEM...</p>
                </div>
              ) : currentQuestion ? (
                <StudyStation 
                  key={currentQuestion.id}
                  question={currentQuestion}
                  questionIndex={activeQuestionIndex}
                  totalQuestions={activeSessionQuestions.length}
                  sessionType={sessionType}
                  timeRemainingSeconds={simuladoTimeRemaining}
                  onAnswerSubmit={handleAnswerSubmit}
                  onNextQuestion={() => {
                    if (activeQuestionIndex < activeSessionQuestions.length - 1) {
                      setActiveQuestionIndex(prev => prev + 1);
                    } else {
                      handleFinishSession();
                    }
                  }}
                  isLastQuestion={activeQuestionIndex >= activeSessionQuestions.length - 1}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-[50vh] text-white/50 px-6 text-center">
                  <p className="mb-4">Não há questões disponíveis para este filtro no momento.</p>
                  <button 
                    onClick={() => setActiveTab("areas")}
                    className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition cursor-pointer text-white font-semibold"
                  >
                    Voltar para as Áreas do ENEM
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === "redacao" && (
            <motion.div
              key="redacao"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <RedacaoLab />
            </motion.div>
          )}

          {activeTab === "evolucao" && (
            <motion.div
              key="evolucao"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <AnalyticsDashboard 
                playerState={playerState} 
                onStartSimulado={handleSimuladoSession}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Barra Inferior de Navegação - Focada em Estudos do ENEM */}
      <nav 
        aria-label="Navegação da Plataforma ENEM"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#100810]/95 px-3 py-2 backdrop-blur-2xl"
      >
        <div className="mx-auto flex max-w-lg items-center justify-around">
          
          <button
            type="button"
            onClick={() => { destinoAudio.playClick(); setActiveTab("areas"); }}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition cursor-pointer ${
              activeTab === "areas" ? "text-rose-400 font-bold scale-105" : "text-rose-200/50 hover:text-rose-200"
            }`}
          >
            <GraduationCap size={20} />
            <span className="text-[0.65rem]">Áreas ENEM</span>
          </button>

          <button
            type="button"
            onClick={() => { destinoAudio.playClick(); setActiveTab("simulados"); }}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition cursor-pointer ${
              activeTab === "simulados" ? "text-rose-400 font-bold scale-105" : "text-rose-200/50 hover:text-rose-200"
            }`}
          >
            <Target size={20} />
            <span className="text-[0.65rem]">Simulados</span>
          </button>

          <button
            type="button"
            onClick={() => { destinoAudio.playClick(); setActiveTab("redacao"); }}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition cursor-pointer ${
              activeTab === "redacao" ? "text-rose-400 font-bold scale-105" : "text-rose-200/50 hover:text-rose-200"
            }`}
          >
            <PenTool size={20} />
            <span className="text-[0.65rem]">Redação 1000</span>
          </button>

          <button
            type="button"
            onClick={() => { destinoAudio.playClick(); setActiveTab("evolucao"); }}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition cursor-pointer ${
              activeTab === "evolucao" ? "text-rose-400 font-bold scale-105" : "text-rose-200/50 hover:text-rose-200"
            }`}
          >
            <BarChart3 size={20} />
            <span className="text-[0.65rem]">Desempenho</span>
          </button>

        </div>
      </nav>

    </div>
  );
}
