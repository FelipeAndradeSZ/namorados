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

  // Selecionar cidade para iniciar expedição de estudos
  // Iniciar sessão focada em um módulo / tópico específico
  const handleStartTopicSession = async (modulePath) => {
    destinoAudio.playClick();
    setIsLoading(true);

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

  // Modo Simulado
  const handleSimuladoSession = async (count = 10) => {
    destinoAudio.playClick();
    setIsLoading(true);
    
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

    let attemptToSave = null;

    setPlayerState(prev => {
      // 1. Recompensa de XP
      let xp = isCorrect ? 50 : 20;
      let milhas = isCorrect ? 35 : 10;
      let reais = isCorrect ? 15 : 5;

      if (reflected) {
        // Bônus pedagógico por reflexão metacognitiva do erro
        xp += 30;
      }

      const rewarded = rewardStudyAction(prev, { xp, milhas, reais });

      // 2. Cálculo do SM-2
      const previousSchedule = prev.history?.find(h => h.questionId === questionId)?.reviewSchedule;
      const nextSchedule = calculateNextReview(previousSchedule, isCorrect, confidence);

      // 3. Atualizar domínio da área
      const currentAreaMastery = prev.masteryMatrix?.[question.area] || 50;
      const newAreaMastery = updateSkillMastery(currentAreaMastery, isCorrect, question.difficulty, confidence);

      // 4. Construir tentativa
      attemptToSave = {
        id: `${Date.now()}-${questionId}`,
        questionId,
        selectedOptionId,
        area: question.area,
        skill: question.skill,
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
        // O histórico em playerState pode ser mantido pequeno (apenas recentes), 
        // mas para retrocompatibilidade, mantemos aqui por enquanto.
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
                onStartTopicSession={handleStartTopicSession}
                onGoToRedacao={() => setActiveTab("redacao")}
                onStartQuickSession={handleQuickSession}
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
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-[50vh] text-rose-300">
                  <div className="w-8 h-8 border-4 border-rose-500/30 border-t-rose-500 rounded-full animate-spin mb-4" />
                  <p className="text-sm">Carregando conteúdo e questões do ENEM...</p>
                </div>
              ) : currentQuestion ? (
                <StudyStation 
                  key={currentQuestion.id}
                  question={currentQuestion}
                  onAnswerSubmit={handleAnswerSubmit}
                  onNextQuestion={() => {
                    if (activeQuestionIndex < activeSessionQuestions.length - 1) {
                      setActiveQuestionIndex(prev => prev + 1);
                    } else {
                      setActiveTab("areas");
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
