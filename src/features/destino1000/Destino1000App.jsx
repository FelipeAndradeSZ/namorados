import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Compass, 
  BookOpen, 
  PenTool, 
  Bookmark, 
  BarChart3, 
  Zap,
  RotateCcw
} from "lucide-react";

import { HUD } from "./ui/HUD";
import { MapExplorer } from "./ui/MapExplorer";
import { StudyStation } from "./ui/StudyStation";
import { RedacaoLab } from "./ui/RedacaoLab";
import { InventoryView } from "./ui/InventoryView";
import { AnalyticsDashboard } from "./ui/AnalyticsDashboard";

import { BRAZIL_CITIES } from "./content/citiesData";
import { INITIAL_QUESTIONS } from "./content/initialQuestions";
import { loadPlayerState, savePlayerState } from "./core/storageSync";
import { rewardStudyAction } from "./core/gameState";
import { 
  calculateNextReview, 
  updateSkillMastery, 
  buildQuickSession 
} from "./learning/learningEngine";
import { destinoAudio } from "./core/soundEngine";

export default function Destino1000App({ onBack }) {
  const [playerState, setPlayerState] = useState(() => loadPlayerState());
  const [activeTab, setActiveTab] = useState("viagem"); // 'viagem' | 'estudo' | 'redacao' | 'mochila' | 'evolucao'
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [activeSessionQuestions, setActiveSessionQuestions] = useState(INITIAL_QUESTIONS);
  const [isMuted, setIsMuted] = useState(false);

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
  const handleSelectCityForStudy = (cityId) => {
    // Filtra questões prioritárias para a cidade ou temas afins
    const cityQuestions = INITIAL_QUESTIONS.filter(q => q.cityId === cityId);
    const questionsToRun = cityQuestions.length > 0 ? cityQuestions : INITIAL_QUESTIONS;
    
    setActiveSessionQuestions(questionsToRun);
    setActiveQuestionIndex(0);
    setActiveTab("estudo");
  };

  // Modo "Tenho 10 Minutos"
  const handleQuickSession = (minutes = 10) => {
    destinoAudio.playClick();
    const quickPool = buildQuickSession(minutes, INITIAL_QUESTIONS, playerState.history);
    setActiveSessionQuestions(quickPool);
    setActiveQuestionIndex(0);
    setActiveTab("estudo");
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
  const handleAnswerSubmit = ({ questionId, selectedOptionId, isCorrect, confidence, errorCategory, reflected }) => {
    const question = INITIAL_QUESTIONS.find(q => q.id === questionId);
    if (!question) return;

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
      const previousSchedule = prev.history.find(h => h.questionId === questionId)?.reviewSchedule;
      const nextSchedule = calculateNextReview(previousSchedule, isCorrect, confidence);

      // 3. Atualizar domínio da área
      const currentAreaMastery = prev.masteryMatrix[question.area] || 50;
      const newAreaMastery = updateSkillMastery(currentAreaMastery, isCorrect, question.difficulty, confidence);

      // 4. Registrar no histórico
      const attempt = {
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
        history: [...(rewarded.history || []), attempt]
      };
    });
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

      {/* Atalhos Rápidos no Sub-header (Modo 10 Minutos & Recomendação) */}
      <div className="flex items-center justify-between border-b border-white/5 bg-[#120a16]/60 px-4 py-1.5 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[0.65rem] text-rose-300 font-semibold uppercase tracking-wider hidden sm:inline">
            Modos de Estudo:
          </span>
          <button
            type="button"
            onClick={() => handleQuickSession(10)}
            className="flex items-center gap-1 rounded-lg bg-rose-500/15 border border-rose-500/30 px-2 py-0.5 text-[0.65rem] font-bold text-rose-200 hover:bg-rose-500/25 transition cursor-pointer"
          >
            <Zap size={11} className="text-rose-400" />
            <span>⚡ Tenho 10 Minutos</span>
          </button>
          <button
            type="button"
            onClick={() => handleSelectCityForStudy(activeCity.id)}
            className="flex items-center gap-1 rounded-lg bg-sky-500/15 border border-sky-500/30 px-2 py-0.5 text-[0.65rem] font-bold text-sky-200 hover:bg-sky-500/25 transition cursor-pointer"
          >
            <RotateCcw size={11} className="text-sky-400" />
            <span>Revisão do Dia</span>
          </button>
        </div>

        <div className="text-[0.65rem] text-rose-200/50 hidden md:block">
          ENEM 2026 • Medicina no Horizonte 🩺
        </div>
      </div>

      {/* Área Central Rolável */}
      <main className="flex-1 overflow-y-auto pb-24 pt-2">
        <AnimatePresence mode="wait">
          {activeTab === "viagem" && (
            <motion.div
              key="viagem"
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
            >
              <StudyStation 
                question={currentQuestion}
                onAnswerSubmit={handleAnswerSubmit}
                onNextQuestion={() => {
                  if (activeQuestionIndex < activeSessionQuestions.length - 1) {
                    setActiveQuestionIndex(prev => prev + 1);
                  } else {
                    setActiveTab("viagem");
                  }
                }}
                isLastQuestion={activeQuestionIndex >= activeSessionQuestions.length - 1}
              />
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
              <AnalyticsDashboard playerState={playerState} />
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
            onClick={() => { destinoAudio.playClick(); setActiveTab("viagem"); }}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition cursor-pointer ${
              activeTab === "viagem" ? "text-rose-400 font-bold scale-105" : "text-rose-200/50 hover:text-rose-200"
            }`}
          >
            <Compass size={20} />
            <span className="text-[0.65rem]">Viagem</span>
          </button>

          <button
            type="button"
            onClick={() => { destinoAudio.playClick(); setActiveTab("estudo"); }}
            className={`flex flex-col items-center gap-1 rounded-xl p-2 transition cursor-pointer ${
              activeTab === "estudo" ? "text-rose-400 font-bold scale-105" : "text-rose-200/50 hover:text-rose-200"
            }`}
          >
            <BookOpen size={20} />
            <span className="text-[0.65rem]">Estudo</span>
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
