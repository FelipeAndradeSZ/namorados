import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  Bookmark, 
  ChevronLeft, 
  ChevronRight, 
  AlertTriangle, 
  X, 
  Grid3X3, 
  EyeOff, 
  ArrowLeft,
  Check
} from "lucide-react";
import { saveActiveSimulado, gradeSimulado } from "../core/simuladoEngine";
import { destinoAudio } from "../core/soundEngine";

export function SimuladoExamView({ 
  session, 
  onFinishSimulado, 
  onCancelSimulado 
}) {
  const [currentSession, setCurrentSession] = useState(session);
  const [currentIndex, setCurrentIndex] = useState(session.currentIndex || 0);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showConfirmFinish, setShowConfirmFinish] = useState(false);
  const [matrixFilter, setMatrixFilter] = useState("all"); // 'all' | 'answered' | 'unanswered' | 'flagged'

  const questions = useMemo(() => currentSession.questions || [], [currentSession.questions]);
  const currentQ = questions[currentIndex];
  const totalQuestions = questions.length;

  // Resposta da questão atual
  const currentAnswer = currentSession.answers[currentQ?.id];
  const isFlagged = (currentSession.flaggedQuestionIds || []).includes(currentQ?.id);
  const eliminatedForQ = (currentSession.eliminations?.[currentQ?.id] || []);

  // Entregar simulado e calcular resultado
  const handleDeliverExam = useCallback((sessionToGrade) => {
    const result = gradeSimulado(sessionToGrade);
    destinoAudio.playSuccess();
    onFinishSimulado?.(result);
  }, [onFinishSimulado]);

  // Timer regressivo
  useEffect(() => {
    if (currentSession.isCompleted) return;

    const timer = setInterval(() => {
      setCurrentSession(prev => {
        if (!prev || prev.isCompleted) return prev;
        const newTime = Math.max(0, (prev.timeRemainingSeconds || 0) - 1);

        if (newTime <= 0) {
          clearInterval(timer);
          destinoAudio.playReflect();
          handleDeliverExam(prev);
          return { ...prev, timeRemainingSeconds: 0 };
        }

        const updated = { ...prev, timeRemainingSeconds: newTime };
        // Auto-save a cada 10 segundos
        if (newTime % 10 === 0) {
          saveActiveSimulado(updated);
        }
        return updated;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentSession.isCompleted, handleDeliverExam]);

  // Formatação do relógio (HH:MM:SS)
  const formatTimer = (totalSeconds) => {
    if (totalSeconds == null) return "00:00:00";
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Selecionar alternativa
  const handleSelectOption = useCallback((optId) => {
    destinoAudio.playClick();
    const updatedAnswers = {
      ...currentSession.answers,
      [currentQ.id]: {
        selectedOptionId: optId,
        timestamp: Date.now()
      }
    };

    const updatedSession = {
      ...currentSession,
      answers: updatedAnswers,
      currentIndex
    };

    setCurrentSession(updatedSession);
    saveActiveSimulado(updatedSession);
  }, [currentSession, currentQ, currentIndex]);

  // Alternar marcação para revisão (Flag)
  const handleToggleFlag = useCallback(() => {
    destinoAudio.playClick();
    const flags = currentSession.flaggedQuestionIds || [];
    const newFlags = flags.includes(currentQ.id)
      ? flags.filter(id => id !== currentQ.id)
      : [...flags, currentQ.id];

    const updated = {
      ...currentSession,
      flaggedQuestionIds: newFlags
    };
    setCurrentSession(updated);
    saveActiveSimulado(updated);
  }, [currentSession, currentQ]);

  // Eliminar alternativa (descarte)
  const handleToggleEliminate = useCallback((e, optId) => {
    e.stopPropagation();
    destinoAudio.playClick();
    const currentList = currentSession.eliminations?.[currentQ.id] || [];
    const newList = currentList.includes(optId)
      ? currentList.filter(id => id !== optId)
      : [...currentList, optId];

    const updated = {
      ...currentSession,
      eliminations: {
        ...(currentSession.eliminations || {}),
        [currentQ.id]: newList
      }
    };
    setCurrentSession(updated);
    saveActiveSimulado(updated);
  }, [currentSession, currentQ]);

  // Navegar entre questões
  const handleJumpToQuestion = useCallback((idx) => {
    if (idx >= 0 && idx < totalQuestions) {
      setCurrentIndex(idx);
      setShowMatrix(false);
      const updated = { ...currentSession, currentIndex: idx };
      setCurrentSession(updated);
      saveActiveSimulado(updated);
    }
  }, [currentSession, totalQuestions]);

  // Contagens para status
  const answeredCount = Object.keys(currentSession.answers || {}).length;
  const unansweredCount = totalQuestions - answeredCount;
  const flaggedCount = (currentSession.flaggedQuestionIds || []).length;

  const isLowTime = (currentSession.timeRemainingSeconds || 0) < 900; // < 15 min

  const filteredMatrixIndices = useMemo(() => {
    return Array.from({ length: totalQuestions }).map((_, idx) => idx).filter(idx => {
      const q = questions[idx];
      const isAns = Boolean(currentSession.answers[q.id]?.selectedOptionId);
      const isFlg = (currentSession.flaggedQuestionIds || []).includes(q.id);

      if (matrixFilter === "answered") return isAns;
      if (matrixFilter === "unanswered") return !isAns;
      if (matrixFilter === "flagged") return isFlg;
      return true;
    });
  }, [totalQuestions, questions, currentSession, matrixFilter]);

  if (!currentQ) {
    return (
      <div className="flex h-screen flex-col items-center justify-center p-6 text-white text-center">
        <p className="mb-4">Nenhuma questão carregada para este simulado.</p>
        <button
          type="button"
          onClick={onCancelSimulado}
          className="rounded-xl bg-white/10 px-5 py-2.5 font-bold hover:bg-white/20 transition cursor-pointer"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-[#0b0c1e] text-white select-none font-sans overflow-hidden">
      
      {/* ═══ CABEÇALHO DA PROVA OFICIAL ═══ */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0e0a14]/95 px-3 py-2.5 backdrop-blur-xl sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          
          {/* Identificação da Prova e Questão */}
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => setShowConfirmFinish(true)}
              className="flex items-center gap-1 text-xs text-rose-300 hover:text-white transition cursor-pointer"
              title="Entregar ou sair do simulado"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Entregar</span>
            </button>

            <div className="min-w-0">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-rose-400 block truncate">
                {currentSession.modalityName}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-white text-base">
                  Questão {currentIndex + 1}
                </span>
                <span className="text-xs text-rose-200/50">
                  de {totalQuestions}
                </span>
                <span className="rounded-lg bg-rose-500/20 px-2 py-0.5 text-[0.65rem] font-bold text-rose-300 border border-rose-500/30 uppercase hidden md:inline">
                  {currentQ.area}
                </span>
              </div>
            </div>
          </div>

          {/* Cronômetro, Matriz e Ações Rápidas */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Cronômetro Oficial */}
            <div className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-sm font-black ${
              isLowTime 
                ? "border-rose-500/50 bg-rose-500/20 text-rose-300 animate-pulse" 
                : "border-amber-500/30 bg-amber-500/10 text-amber-200"
            }`}>
              <Clock size={15} />
              <span>{formatTimer(currentSession.timeRemainingSeconds)}</span>
            </div>

            {/* Botão Marcar para Revisão */}
            <button
              type="button"
              onClick={handleToggleFlag}
              className={`flex items-center gap-1 rounded-xl border px-2.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                isFlagged 
                  ? "border-amber-400 bg-amber-400/20 text-amber-300" 
                  : "border-white/10 bg-white/5 text-rose-200/60 hover:text-white hover:bg-white/10"
              }`}
              title={isFlagged ? "Questão marcada para revisão" : "Marcar questão para revisar depois"}
            >
              <Bookmark size={14} fill={isFlagged ? "currentColor" : "none"} />
              <span className="hidden md:inline">{isFlagged ? "Marcada" : "Marcar"}</span>
            </button>

            {/* Botão Ver Matriz 90q */}
            <button
              type="button"
              onClick={() => setShowMatrix(true)}
              className="flex items-center gap-1.5 rounded-xl border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs font-bold text-sky-200 hover:bg-sky-500/20 transition cursor-pointer"
              title="Abrir cartão de respostas e matriz de questões"
            >
              <Grid3X3 size={15} />
              <span className="hidden sm:inline">Gabarito ({answeredCount}/{totalQuestions})</span>
              <span className="sm:hidden">{answeredCount}/{totalQuestions}</span>
            </button>

            {/* Botão Entregar Simulado */}
            <button
              type="button"
              onClick={() => setShowConfirmFinish(true)}
              className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-3 sm:px-4 py-1.5 text-xs font-black text-white shadow-lg shadow-rose-500/25 hover:scale-105 transition cursor-pointer"
            >
              Finalizar
            </button>

          </div>
        </div>
      </header>

      {/* ═══ CORPO PRINCIPAL COM ROLAGEM ═══ */}
      <main className="flex-1 overflow-y-auto px-3 py-4 sm:px-6">
        <div className="mx-auto max-w-4xl space-y-5 pb-24">
          
          {/* Metadados da Questão */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-rose-200/60 border-b border-white/5 pb-2">
            <span className="font-semibold text-rose-300">
              {currentQ.topic} {currentQ.subtopic ? `• ${currentQ.subtopic}` : ""}
            </span>
            <span>Habilidade {currentQ.skill} • Matriz INEP</span>
          </div>

          {/* Texto de Apoio / Contexto Oficial */}
          {currentQ.context?.supportText && (
            <div className="rounded-2xl border border-white/10 bg-[#140b17] p-4 sm:p-6 shadow-xl leading-relaxed">
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-rose-300/70 block mb-2">
                Texto de Apoio {currentQ.context.source ? `(${currentQ.context.source})` : ""}
              </span>
              <p className="text-sm sm:text-base text-rose-50/90 whitespace-pre-line font-serif italic">
                "{currentQ.context.supportText}"
              </p>
            </div>
          )}

          {/* Enunciado / Comando da Questão */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
            <h2 className="text-base sm:text-lg font-medium leading-relaxed text-white">
              {currentQ.prompt}
            </h2>
          </div>

          {/* Alternativas A, B, C, D, E */}
          <div className="space-y-3">
            {currentQ.options.map((opt) => {
              const isSelected = currentAnswer?.selectedOptionId === opt.id;
              const isEliminated = eliminatedForQ.includes(opt.id);

              let btnStyle = "border-white/10 bg-white/[0.03] text-rose-50 hover:bg-white/[0.07] hover:border-rose-300/30";
              if (isEliminated) {
                btnStyle = "opacity-30 border-white/5 bg-black/20 text-rose-200/40 line-through";
              } else if (isSelected) {
                btnStyle = "border-rose-400 bg-rose-500/20 text-white ring-2 ring-rose-400/50 shadow-[0_0_20px_rgba(251,113,133,0.2)]";
              }

              return (
                <div key={opt.id} className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleSelectOption(opt.id)}
                    className={`flex flex-1 items-start gap-3.5 rounded-2xl border p-4 text-left transition-all cursor-pointer ${btnStyle}`}
                  >
                    <span className={`grid size-7 shrink-0 place-items-center rounded-xl text-xs font-bold border ${
                      isSelected 
                        ? "bg-rose-400 text-[#2a1020] border-rose-300" 
                        : "bg-white/5 border-white/15 text-rose-200"
                    }`}>
                      {opt.id.toUpperCase()}
                    </span>
                    <span className="text-sm sm:text-base leading-relaxed pt-0.5 flex-1">
                      {opt.text}
                    </span>
                    {isSelected && (
                      <Check size={18} className="text-rose-400 shrink-0 mt-0.5" />
                    )}
                  </button>

                  {/* Botão de Riscar / Eliminar Alternativa */}
                  <button
                    type="button"
                    onClick={(e) => handleToggleEliminate(e, opt.id)}
                    className={`size-9 rounded-xl border grid place-items-center transition cursor-pointer ${
                      isEliminated 
                        ? "bg-amber-500/20 border-amber-500/40 text-amber-300" 
                        : "bg-white/5 border-white/10 text-white/30 hover:text-white hover:bg-white/10"
                    }`}
                    title={isEliminated ? "Restaurar alternativa" : "Eliminar alternativa (descartar)"}
                  >
                    <EyeOff size={15} />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      {/* ═══ BARRA INFERIOR DE NAVEGAÇÃO ═══ */}
      <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#0e0a14]/95 px-3 py-3 backdrop-blur-2xl sm:px-6">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-3">
          
          <button
            type="button"
            onClick={() => handleJumpToQuestion(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={16} />
            <span>Anterior</span>
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-rose-200/60">
            <span>{answeredCount} de {totalQuestions} preenchidas</span>
            {flaggedCount > 0 && (
              <span className="text-amber-300 font-bold">• {flaggedCount} para revisão</span>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              if (currentIndex < totalQuestions - 1) {
                handleJumpToQuestion(currentIndex + 1);
              } else {
                setShowConfirmFinish(true);
              }
            }}
            className="flex items-center gap-1.5 rounded-xl bg-rose-200 px-5 py-2.5 text-xs font-bold text-[#2a1020] shadow-xl hover:bg-rose-100 transition cursor-pointer"
          >
            <span>{currentIndex < totalQuestions - 1 ? "Próxima" : "Entregar"}</span>
            <ChevronRight size={16} />
          </button>

        </div>
      </footer>

      {/* ═══ MODAL DRAWER: MATRIZ DE GABARITO (90 QUESTÕES) ═══ */}
      <AnimatePresence>
        {showMatrix && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-3xl rounded-3xl border border-white/15 bg-[#120a16] p-6 shadow-2xl flex flex-col max-h-[85vh]"
            >
              {/* Header do Drawer */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    Cartão-Resposta da Prova
                  </h3>
                  <p className="text-xs text-rose-200/60 mt-0.5">
                    Selecione qualquer questão para navegar diretamente até ela.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowMatrix(false)}
                  className="size-8 rounded-full bg-white/10 grid place-items-center text-white/70 hover:text-white transition cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Filtros da Matriz */}
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  { id: "all", label: `Todas (${totalQuestions})` },
                  { id: "answered", label: `Respondidas (${answeredCount})` },
                  { id: "unanswered", label: `Em Branco (${unansweredCount})` },
                  { id: "flagged", label: `Revisão (${flaggedCount})` },
                ].map(f => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setMatrixFilter(f.id)}
                    className={`rounded-xl px-3 py-1 text-xs font-semibold transition cursor-pointer ${
                      matrixFilter === f.id
                        ? "bg-rose-500 text-white"
                        : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Grid das Questões (1 a 90) */}
              <div className="flex-1 overflow-y-auto pr-1">
                <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-2">
                  {filteredMatrixIndices.map(idx => {
                    const q = questions[idx];
                    const ans = currentSession.answers[q.id];
                    const isAns = Boolean(ans?.selectedOptionId);
                    const isFlg = (currentSession.flaggedQuestionIds || []).includes(q.id);
                    const isCur = idx === currentIndex;

                    let btnColor = "bg-white/5 border-white/10 text-white/50";
                    if (isCur) {
                      btnColor = "border-rose-400 bg-rose-500/30 text-white font-bold ring-2 ring-rose-400";
                    } else if (isFlg) {
                      btnColor = "border-amber-400/80 bg-amber-400/20 text-amber-200 font-bold";
                    } else if (isAns) {
                      btnColor = "border-emerald-500/50 bg-emerald-500/20 text-emerald-200 font-bold";
                    }

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleJumpToQuestion(idx)}
                        className={`size-10 rounded-xl border flex flex-col items-center justify-center text-xs transition cursor-pointer relative ${btnColor}`}
                      >
                        <span>{idx + 1}</span>
                        {isAns && (
                          <span className="text-[0.55rem] font-black uppercase text-emerald-300">
                            {ans.selectedOptionId}
                          </span>
                        )}
                        {isFlg && (
                          <div className="absolute -top-1 -right-1 size-2.5 rounded-full bg-amber-400" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Rodapé com Legenda */}
              <div className="border-t border-white/10 pt-3 mt-4 flex flex-wrap items-center justify-between text-xs text-rose-200/60 gap-3">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-emerald-400" />
                    <span>Respondida</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-amber-400" />
                    <span>Marcada</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-white/20" />
                    <span>Em Branco</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowMatrix(false)}
                  className="rounded-xl bg-white/10 px-4 py-1.5 font-bold text-white hover:bg-white/20 transition cursor-pointer"
                >
                  Fechar
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ MODAL DE CONFIRMAÇÃO DE ENTREGA DEFINITIVA ═══ */}
      <AnimatePresence>
        {showConfirmFinish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md rounded-3xl border border-white/20 bg-[#160b17] p-6 shadow-2xl text-center"
            >
              <div className="size-12 rounded-2xl bg-rose-500/20 border border-rose-500/30 grid place-items-center text-rose-400 mx-auto mb-4">
                <AlertTriangle size={24} />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Deseja Entregar o Simulado?
              </h3>

              <p className="text-xs text-rose-200/70 mb-5 leading-relaxed">
                Confira o status das suas respostas antes de realizar a submissão final:
              </p>

              <div className="grid grid-cols-3 gap-2 mb-6 text-center">
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5">
                  <span className="text-lg font-bold text-emerald-300 block">{answeredCount}</span>
                  <span className="text-[0.6rem] text-emerald-200/70 uppercase">Preenchidas</span>
                </div>
                <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-2.5">
                  <span className="text-lg font-bold text-amber-300 block">{unansweredCount}</span>
                  <span className="text-[0.6rem] text-amber-200/70 uppercase">Em Branco</span>
                </div>
                <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-2.5">
                  <span className="text-lg font-bold text-purple-300 block">{flaggedCount}</span>
                  <span className="text-[0.6rem] text-purple-200/70 uppercase">Revisão</span>
                </div>
              </div>

              {unansweredCount > 0 && (
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-200 mb-6 text-left">
                  ⚠️ <strong>Atenção:</strong> Você ainda possui {unansweredCount} questões sem resposta. Questões em branco pontuam 0 na escala TRI.
                </div>
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowConfirmFinish(false)}
                  className="flex-1 rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-bold text-white hover:bg-white/10 transition cursor-pointer"
                >
                  Continuar Fazendo
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowConfirmFinish(false);
                    handleDeliverExam(currentSession);
                  }}
                  className="flex-1 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 py-3 text-xs font-bold text-white shadow-lg shadow-rose-500/30 hover:scale-105 transition cursor-pointer"
                >
                  Confirmar Entrega ➔
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
