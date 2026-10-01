import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, 
  BookOpen, 
  PenTool, 
  Bookmark, 
  BarChart3
} from "lucide-react";

import { HUD } from "./ui/HUD";
import { MapExplorer } from "./ui/MapExplorer";
import { StudyStation } from "./ui/StudyStation";
import { RedacaoLab } from "./ui/RedacaoLab";
import { InventoryView } from "./ui/InventoryView";
import { AnalyticsDashboard } from "./ui/AnalyticsDashboard";
import { StudyDashboard } from "./ui/StudyDashboard";
import { Home } from "lucide-react";

import { BRAZIL_CITIES } from "./content/citiesData";
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
  const [activeTab, setActiveTab] = useState("inicio"); // 'inicio' | 'trilha' | 'estudo' | 'redacao' | 'mochila' | 'evolucao'
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [activeSessionQuestions, setActiveSessionQuestions] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Cidade ativa
  const activeCity = BRAZIL_CITIES.find(c => c.id === playerState.location.currentCityId) || BRAZIL_CITIES[0];

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
  const handleSelectCityForStudy = async (cityId, mission = null) => {
    setIsLoading(true);
    
    let questionsToRun = [];

    if (mission && mission.questionQuery) {
      questionsToRun = await contentEngine.getRandomQuestions(mission.questionQuery.count || 5, {
        area: mission.questionQuery.area,
        topic: mission.questionQuery.topic
      });
    }

    if (questionsToRun.length === 0) {
      const cityQuestions = await contentEngine.getQuestionsForCity(cityId);
      questionsToRun = cityQuestions;
    }
    
    // Se a cidade ainda não tiver questões, pega um mix aleatório
    if (questionsToRun.length === 0) {
      questionsToRun = await contentEngine.getRandomQuestions(10);
    }
    
    setActiveSessionQuestions(questionsToRun);
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
       // Se faltar questão inédita, repete algumas
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

  // Viagem entre capitais
  const handleTravelToCity = (destinationCityId, { costReais = 0, costMiles = 0 }) => {
    setPlayerState(prev => {
      const visited = prev.location.visitedCities.includes(destinationCityId)
        ? prev.location.visitedCities
        : [...prev.location.visitedCities, destinationCityId];

      return {
        ...prev,
        economy: {
          ...prev.economy,
          saldoReais: Math.max(0, prev.economy.saldoReais - costReais),
          milhas: Math.max(0, prev.economy.milhas - costMiles),
        },
        location: {
          ...prev.location,
          currentCityId: destinationCityId,
          visitedCities: visited
        }
      };
    });
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
        activeCity={activeCity}
        onBack={onBack}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
      />

      {/* Área Central Rolável */}
      <main className="flex-1 overflow-y-auto pb-24 pt-2">
        <AnimatePresence mode="wait">
          {activeTab === "inicio" && (
            <motion.div
              key="inicio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <StudyDashboard 
                playerState={playerState}
                onStartQuickSession={handleQuickSession}
                onStartSimulado={handleSimuladoSession}
                onGoToTrilha={() => setActiveTab("trilha")}
              />
            </motion.div>
          )}

          {activeTab === "trilha" && (
            <motion.div
              key="trilha"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <MapExplorer 
                playerState={playerState}
                onSelectCityForStudy={handleSelectCityForStudy}
                onTravelToCity={handleTravelToCity}
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
                  <p className="text-sm">Carregando expedição...</p>
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
                      setActiveTab("inicio");
                    }
                  }}
                  isLastQuestion={activeQuestionIndex >= activeSessionQuestions.length - 1}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-[50vh] text-white/50 px-6 text-center">
                  <p className="mb-4">Não há questões disponíveis nesta expedição ainda.</p>
                  <button 
                    onClick={() => setActiveTab("inicio")}
                    className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
                  >
                    Voltar para o Mapa
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

          {activeTab === "mochila" && (
            <motion.div
              key="mochila"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <InventoryView playerState={playerState} />
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

      {/* Barra Inferior de Navegação (Bottom Navigation Bar) - Mobile-First */}
      <nav 
        aria-label="Navegação do Jogo Destino 1000"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#100810]/95 px-3 py-2 backdrop-blur-2xl"
      >
        <div className="mx-auto flex max-w-lg items-center justify-around">
          
          <button
            type="button"
            onClick={() => { destinoAudio.playClick(); setActiveTab("inicio"); }}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition cursor-pointer ${
              activeTab === "inicio" ? "text-rose-400 font-bold scale-105" : "text-rose-200/50 hover:text-rose-200"
            }`}
          >
            <Home size={20} />
            <span className="text-[0.65rem]">Início</span>
          </button>

          <button
            type="button"
            onClick={() => { destinoAudio.playClick(); setActiveTab("trilha"); }}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition cursor-pointer ${
              activeTab === "trilha" ? "text-rose-400 font-bold scale-105" : "text-rose-200/50 hover:text-rose-200"
            }`}
          >
            <Compass size={20} />
            <span className="text-[0.65rem]">Trilha</span>
          </button>

          <button
            type="button"
            onClick={() => { destinoAudio.playClick(); setActiveTab("estudo"); }}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition cursor-pointer ${
              activeTab === "estudo" ? "text-rose-400 font-bold scale-105" : "text-rose-200/50 hover:text-rose-200"
            }`}
          >
            <BookOpen size={20} />
            <span className="text-[0.65rem]">Sessão</span>
          </button>

          <button
            type="button"
            onClick={() => { destinoAudio.playClick(); setActiveTab("redacao"); }}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition cursor-pointer ${
              activeTab === "redacao" ? "text-rose-400 font-bold scale-105" : "text-rose-200/50 hover:text-rose-200"
            }`}
          >
            <PenTool size={20} />
            <span className="text-[0.65rem]">Redação</span>
          </button>

          <button
            type="button"
            onClick={() => { destinoAudio.playClick(); setActiveTab("mochila"); }}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition cursor-pointer ${
              activeTab === "mochila" ? "text-rose-400 font-bold scale-105" : "text-rose-200/50 hover:text-rose-200"
            }`}
          >
            <Bookmark size={20} />
            <span className="text-[0.65rem]">Mochila</span>
          </button>

          <button
            type="button"
            onClick={() => { destinoAudio.playClick(); setActiveTab("evolucao"); }}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition cursor-pointer ${
              activeTab === "evolucao" ? "text-rose-400 font-bold scale-105" : "text-rose-200/50 hover:text-rose-200"
            }`}
          >
            <BarChart3 size={20} />
            <span className="text-[0.65rem]">Evolução</span>
          </button>

        </div>
      </nav>

    </div>
  );
}
