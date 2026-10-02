import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  BookOpen, 
  Lightbulb, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  RotateCcw,
  FileText,
  Calculator,
  ChevronLeft,
  ChevronRight,
  EyeOff
} from "lucide-react";
import { CONFIDENCE_LEVELS, ERROR_CATEGORIES } from "../learning/learningEngine";
import { destinoAudio } from "../core/soundEngine";
import { getTheoryForModule } from "../content/theoryData";

export function StudyStation({ 
  questions = [],
  question, 
  questionIndex = 0,
  totalQuestions = 1,
  attempts = [],
  sessionType = "estudo",
  timeRemainingSeconds = null,
  onAnswerSubmit, 
  onNextQuestion, 
  onPrevQuestion,
  onSelectQuestionIndex,
  onFinishSession,
  onBackToMenu
}) {
  const currentQ = question || questions[questionIndex];

  // Alternativa selecionada para a questão atual
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [confidence, setConfidence] = useState("media");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectedErrorCategory, setSelectedErrorCategory] = useState(null);
  const [hasReflected, setHasReflected] = useState(false);

  // Modo de visualização: "question" (padrão) ou "theory" (estudar teoria antes/durante)
  const [activeTab, setActiveTab] = useState("question");

  // Alternativas eliminadas / riscadas pelo aluno (estratégia ENEM)
  const [eliminatedOptions, setEliminatedOptions] = useState({});

  // Tentativa anterior já registrada nesta sessão (se voltou para uma questão já respondida)
  const currentAttempt = useMemo(() => {
    if (!currentQ) return null;
    return attempts.find(a => a.questionId === currentQ.id);
  }, [attempts, currentQ]);

  // Se já tinha sido respondida nesta sessão, sincroniza estado de exibição
  const isAlreadyAnswered = Boolean(currentAttempt);
  const effectiveSelectedOptionId = hasSubmitted 
    ? selectedOptionId 
    : isAlreadyAnswered 
      ? currentAttempt.selectedOptionId 
      : selectedOptionId;
  const isEffectiveSubmitted = hasSubmitted || isAlreadyAnswered;

  const formatCountdown = (secs) => {
    if (secs == null) return null;
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}:${rem < 10 ? "0" : ""}${rem}`;
  };

  // Teoria correspondente ao tema da questão
  const theory = useMemo(() => {
    if (!currentQ) return null;
    // Tenta encontrar pelo formato "area/topico"
    const topicSlug = currentQ.topic
      ? currentQ.topic.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")
      : "";
    const modulePath = `${currentQ.area}/${topicSlug}`;
    return getTheoryForModule(modulePath);
  }, [currentQ]);

  if (!currentQ) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-rose-200">
        <Sparkles size={40} className="text-rose-400 mb-3 animate-bounce" />
        <h3 className="font-display text-2xl text-white">Sessão de Estudos Concluída com Sucesso! 🎓</h3>
        <p className="mt-2 text-sm text-rose-200/70 max-w-md">
          Excelente dedicação! Todos os conceitos deste bloco foram trabalhados e suas métricas foram atualizadas no seu plano rumo à nota 800+ em Medicina.
        </p>
        <button
          type="button"
          onClick={onFinishSession || onBackToMenu}
          className="mt-6 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 font-bold text-white shadow-lg cursor-pointer"
        >
          Ver Relatório Pedagógico ➔
        </button>
      </div>
    );
  }

  const selectedOption = currentQ.options.find(o => o.id === effectiveSelectedOptionId);
  const isCorrect = isAlreadyAnswered 
    ? currentAttempt.isCorrect 
    : selectedOption?.isCorrect;

  const currentEliminatedForQ = eliminatedOptions[currentQ.id] || [];

  const handleSelectOption = (optId) => {
    if (isEffectiveSubmitted) return;
    destinoAudio.playClick();
    setSelectedOptionId(optId);
  };

  const handleToggleEliminate = (e, optId) => {
    e.stopPropagation();
    destinoAudio.playClick();
    setEliminatedOptions(prev => {
      const currentList = prev[currentQ.id] || [];
      const isEliminated = currentList.includes(optId);
      const newList = isEliminated
        ? currentList.filter(id => id !== optId)
        : [...currentList, optId];
      return { ...prev, [currentQ.id]: newList };
    });
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isEffectiveSubmitted) return;
    setHasSubmitted(true);

    const willBeCorrect = currentQ.options.find(o => o.id === selectedOptionId)?.isCorrect;

    if (willBeCorrect) {
      destinoAudio.playSuccess();
    } else {
      destinoAudio.playReflect();
    }

    onAnswerSubmit?.({
      questionId: currentQ.id,
      selectedOptionId,
      isCorrect: willBeCorrect,
      confidence,
      errorCategory: null
    });
  };

  const handleSelectErrorCategory = (catId) => {
    setSelectedErrorCategory(catId);
    setHasReflected(true);
    destinoAudio.playStamp();
    
    onAnswerSubmit?.({
      questionId: currentQ.id,
      selectedOptionId: effectiveSelectedOptionId,
      isCorrect: false,
      confidence,
      errorCategory: catId,
      reflected: true
    });
  };

  const handleResetForPractice = () => {
    setSelectedOptionId(null);
    setConfidence("media");
    setHasSubmitted(false);
    setSelectedErrorCategory(null);
    setHasReflected(false);
  };

  const handleNavigateQuestion = (idx) => {
    setSelectedOptionId(null);
    setConfidence("media");
    setHasSubmitted(false);
    setSelectedErrorCategory(null);
    setHasReflected(false);
    setActiveTab("question");
    if (idx === questionIndex + 1 && onNextQuestion) {
      onNextQuestion();
    } else if (idx === questionIndex - 1 && onPrevQuestion) {
      onPrevQuestion();
    } else if (onSelectQuestionIndex) {
      onSelectQuestionIndex(idx);
    }
  };

  const isLastQuestion = questionIndex >= totalQuestions - 1;
  const isFirstQuestion = questionIndex === 0;

  return (
    <div className="mx-auto max-w-4xl px-3 py-4 sm:px-6">
      
      {/* ═══ BARRA SUPERIOR DE CONTROLE E NAVEGAÇÃO ═══ */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          {onBackToMenu && (
            <button
              type="button"
              onClick={onBackToMenu}
              className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-rose-200 hover:bg-white/10 transition cursor-pointer"
              title="Voltar ao início"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Sair</span>
            </button>
          )}

          <span className="rounded-lg bg-rose-500/20 px-2.5 py-1 text-xs font-bold text-rose-300 border border-rose-500/30 uppercase tracking-wider">
            {currentQ.area}
          </span>

          {sessionType === "simulado" && (
            <span className="rounded-lg bg-rose-500/20 px-2 py-0.5 text-[0.65rem] font-bold text-rose-300 border border-rose-500/30">
              Simulado Oficial
            </span>
          )}
          {sessionType === "revisao" && (
            <span className="rounded-lg bg-sky-500/20 px-2 py-0.5 text-[0.65rem] font-bold text-sky-300 border border-sky-500/30">
              Revisão Espaçada
            </span>
          )}
          {sessionType === "erro" && (
            <span className="rounded-lg bg-amber-500/20 px-2 py-0.5 text-[0.65rem] font-bold text-amber-300 border border-amber-500/30">
              Caderno de Erros
            </span>
          )}

          <span className="text-xs text-rose-100/60 font-medium hidden md:inline truncate max-w-[200px]">
            H{currentQ.skill} • {currentQ.topic}
          </span>
        </div>

        {/* Cronômetro e Dificuldade */}
        <div className="flex items-center gap-2.5 text-xs">
          {timeRemainingSeconds != null ? (
            <span className={`flex items-center gap-1 rounded-xl px-2.5 py-1 font-mono font-bold border ${
              timeRemainingSeconds < 300 
                ? "bg-rose-500/20 border-rose-500/40 text-rose-300 animate-pulse" 
                : "bg-amber-500/20 border-amber-500/30 text-amber-200"
            }`}>
              <Clock size={13} />
              <span>{formatCountdown(timeRemainingSeconds)}</span>
            </span>
          ) : (
            <span className="flex items-center gap-1 text-rose-200/50">
              <Clock size={13} /> {currentQ.estimatedTimeSeconds || 150}s
            </span>
          )}

          <span className="text-rose-200/50 hidden sm:inline">
            {"★".repeat(currentQ.difficulty || 3)}{"☆".repeat(5 - (currentQ.difficulty || 3))}
          </span>

          {/* Botão de Finalizar Sessão */}
          {onFinishSession && (
            <button
              type="button"
              onClick={onFinishSession}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-rose-200 hover:bg-rose-500/20 hover:text-white transition cursor-pointer"
            >
              Finalizar
            </button>
          )}
        </div>
      </div>

      {/* ═══ NAVEGADOR RÁPIDO DE QUESTÕES (CHIPS 1, 2, 3...) ═══ */}
      <div className="mb-4 rounded-2xl border border-white/10 bg-white/[0.02] p-2.5">
        <div className="flex items-center justify-between text-xs text-rose-200/60 font-semibold mb-2 px-1">
          <span>Questão {questionIndex + 1} de {totalQuestions}</span>
          <span>{attempts.length}/{totalQuestions} respondidas</span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {Array.from({ length: totalQuestions }).map((_, idx) => {
            const isCurrent = idx === questionIndex;
            const qTarget = questions[idx];
            const att = qTarget ? attempts.find(a => a.questionId === qTarget.id) : null;

            let chipStyle = "bg-white/5 border-white/10 text-white/50 hover:bg-white/10";
            if (isCurrent) {
              chipStyle = "border-rose-400 bg-rose-500/30 text-white font-bold ring-2 ring-rose-400/50 shadow-lg";
            } else if (att) {
              chipStyle = att.isCorrect 
                ? "border-emerald-500/50 bg-emerald-500/20 text-emerald-300 font-bold" 
                : "border-rose-500/50 bg-rose-500/20 text-rose-300 font-bold";
            }

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleNavigateQuestion(idx)}
                className={`flex size-8 shrink-0 items-center justify-center rounded-xl border text-xs transition cursor-pointer ${chipStyle}`}
                title={`Ir para questão ${idx + 1}`}
              >
                {att ? (
                  att.isCorrect ? "✓" : "✗"
                ) : (
                  idx + 1
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ═══ ABAS: QUESTÃO vs. TEORIA & FÓRMULAS ═══ */}
      <div className="mb-5 flex rounded-2xl border border-white/10 bg-white/5 p-1">
        <button
          type="button"
          onClick={() => setActiveTab("question")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold transition cursor-pointer ${
            activeTab === "question"
              ? "bg-rose-500 text-white shadow-md shadow-rose-500/20"
              : "text-rose-200/60 hover:text-white"
          }`}
        >
          <FileText size={14} />
          <span>Enunciado da Questão</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("theory")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2 text-xs font-bold transition cursor-pointer ${
            activeTab === "theory"
              ? "bg-sky-500 text-sky-950 shadow-md shadow-sky-500/20"
              : "text-rose-200/60 hover:text-white"
          }`}
        >
          <Lightbulb size={14} />
          <span>📖 Resumo Teórico & Fórmulas</span>
        </button>
      </div>

      <AnimatePresence mode="wait">

        {/* ═══ VISUALIZAÇÃO DE TEORIA DO TEMA ═══ */}
        {activeTab === "theory" && (
          <motion.div
            key="theory-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-4 mb-6"
          >
            {/* Banner Teórico */}
            <div className="rounded-2xl border border-sky-500/30 bg-sky-950/20 p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-300">
                  {theory?.areaName || currentQ.area} • {currentQ.topic}
                </span>
                <span className="text-xs text-amber-300 font-semibold">
                  🔥 {theory?.enemRelevance || "Frequente no ENEM"}
                </span>
              </div>
              <h2 className="text-lg font-bold text-white mb-2">
                {theory?.topic || currentQ.topic}
              </h2>
              <p className="text-xs sm:text-sm text-sky-100/80 leading-relaxed">
                {theory?.overview || currentQ.detailedExplanation?.coreConcept}
              </p>
            </div>

            {/* Conceito Central e Armadilha */}
            <div className="rounded-2xl border border-white/10 bg-[#140b17] p-5">
              <h3 className="font-bold text-sm text-white mb-2 flex items-center gap-2">
                <Lightbulb size={16} className="text-amber-400" />
                <span>O Que Você Precisa Saber para Esta Questão</span>
              </h3>
              <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed">
                {currentQ.detailedExplanation?.coreConcept}
              </p>

              {currentQ.detailedExplanation?.trapWarning && (
                <div className="mt-3 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-xs text-amber-200">
                  <strong>⚠️ Atenção à Pegadinha do INEP:</strong>
                  <p className="mt-1">{currentQ.detailedExplanation.trapWarning}</p>
                </div>
              )}
            </div>

            {/* Fórmulas e Regras (se houver no módulo de teoria) */}
            {theory?.formulasAndRules && theory.formulasAndRules.length > 0 && (
              <div className="rounded-2xl border border-sky-500/20 bg-sky-950/20 p-5">
                <h3 className="font-bold text-sm text-sky-300 mb-2 flex items-center gap-2">
                  <Calculator size={16} />
                  <span>Fórmulas e Relações Fundamentais</span>
                </h3>
                <ul className="space-y-1.5 text-xs text-sky-100 font-mono">
                  {theory.formulasAndRules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-sky-400">⚡</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              type="button"
              onClick={() => setActiveTab("question")}
              className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-rose-500/25 hover:scale-[1.01] transition cursor-pointer"
            >
              Entendido! Voltar para a Questão ➔
            </button>
          </motion.div>
        )}

        {/* ═══ VISUALIZAÇÃO DA QUESTÃO ═══ */}
        {activeTab === "question" && (
          <motion.div
            key="question-tab"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col"
          >
            {/* Texto de Apoio / Contexto ENEM */}
            {currentQ.context?.supportText && (
              <div className="mb-5 rounded-2xl border border-white/10 bg-[#160d19]/80 p-4 sm:p-5 shadow-lg backdrop-blur-md">
                <div className="mb-2 flex items-center justify-between text-[0.65rem] font-semibold tracking-widest text-rose-300/80 uppercase">
                  <span className="flex items-center gap-1.5">
                    <BookOpen size={13} />
                    <span>Texto de Apoio</span>
                  </span>
                  {currentQ.context?.source && (
                    <span className="text-rose-200/40 truncate max-w-[250px]">
                      Fonte: {currentQ.context.source}
                    </span>
                  )}
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-rose-50/90 whitespace-pre-line font-serif italic">
                  "{currentQ.context.supportText}"
                </p>
              </div>
            )}

            {/* Comando da Questão (Prompt) */}
            <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
              <h2 className="text-base sm:text-lg font-medium leading-relaxed text-white">
                {currentQ.prompt}
              </h2>
            </div>

            {/* Alternativas A, B, C, D, E */}
            <div className="flex flex-col gap-3 mb-6">
              {currentQ.options.map((opt) => {
                const isSelected = effectiveSelectedOptionId === opt.id;
                const isEliminated = currentEliminatedForQ.includes(opt.id);

                let btnStyle = "border-white/10 bg-white/[0.03] text-rose-50 hover:bg-white/[0.07] hover:border-rose-300/30";

                if (isEffectiveSubmitted) {
                  if (opt.isCorrect) {
                    btnStyle = "border-emerald-500/80 bg-emerald-500/20 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.2)]";
                  } else if (isSelected && !opt.isCorrect) {
                    btnStyle = "border-rose-500/80 bg-rose-500/20 text-rose-100 shadow-[0_0_20px_rgba(244,63,94,0.2)]";
                  } else {
                    btnStyle = "opacity-40 border-white/5 bg-transparent text-rose-100/40";
                  }
                } else if (isEliminated) {
                  btnStyle = "opacity-35 border-white/5 bg-black/20 text-rose-200/40 line-through";
                } else if (isSelected) {
                  btnStyle = "border-rose-400 bg-rose-400/20 text-white shadow-[0_0_20px_rgba(251,113,133,0.25)]";
                }

                return (
                  <motion.div
                    key={opt.id}
                    className="relative flex items-center gap-2 group"
                  >
                    <button
                      type="button"
                      onClick={() => handleSelectOption(opt.id)}
                      disabled={isEffectiveSubmitted}
                      className={`flex flex-1 items-start gap-3.5 rounded-2xl border p-4 text-left transition-all cursor-pointer ${btnStyle}`}
                    >
                      <span className={`grid size-7 shrink-0 place-items-center rounded-xl text-xs font-bold border ${
                        isSelected 
                          ? "bg-rose-400 text-[#2a1020] border-rose-300" 
                          : "bg-white/5 border-white/15 text-rose-200"
                      }`}>
                        {opt.id}
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed pt-0.5 flex-1">
                        {opt.text}
                      </span>
                      {isEffectiveSubmitted && opt.isCorrect && (
                        <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      {isEffectiveSubmitted && isSelected && !opt.isCorrect && (
                        <XCircle size={20} className="text-rose-400 shrink-0 mt-0.5" />
                      )}
                    </button>

                    {/* Botão de Eliminar Alternativa (Rabiscar) */}
                    {!isEffectiveSubmitted && (
                      <button
                        type="button"
                        onClick={(e) => handleToggleEliminate(e, opt.id)}
                        className={`size-8 rounded-xl border grid place-items-center transition cursor-pointer ${
                          isEliminated 
                            ? "bg-amber-500/20 border-amber-500/40 text-amber-300" 
                            : "bg-white/5 border-white/10 text-white/30 hover:text-white hover:bg-white/10"
                        }`}
                        title={isEliminated ? "Restaurar alternativa" : "Eliminar alternativa (descartar)"}
                      >
                        <EyeOff size={14} />
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* ═══ BARRA DE CONFIRMAÇÃO PRÉ-ENVIO ═══ */}
            {!isEffectiveSubmitted ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#160a16]/80 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-rose-200/70 font-medium">Sua Confiança:</span>
                  <div className="flex gap-1.5">
                    {Object.values(CONFIDENCE_LEVELS).map((lvl) => (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setConfidence(lvl.id)}
                        className={`rounded-xl px-2.5 py-1 text-xs font-semibold transition cursor-pointer ${
                          confidence === lvl.id
                            ? "bg-rose-400 text-[#2a1020] shadow-md shadow-rose-400/20"
                            : "border border-white/10 bg-white/5 text-rose-200/60 hover:text-white"
                        }`}
                      >
                        {lvl.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex w-full sm:w-auto items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (!isLastQuestion) {
                        handleNavigateQuestion(questionIndex + 1);
                      } else {
                        onFinishSession?.();
                      }
                    }}
                    className="w-full sm:w-auto rounded-xl border border-white/10 bg-transparent px-4 py-3 text-sm font-bold text-white/50 hover:bg-white/5 hover:text-white transition cursor-pointer"
                  >
                    Pular
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmitAnswer}
                    disabled={!selectedOptionId}
                    className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rose-500/25 transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 cursor-pointer"
                  >
                    Confirmar Resposta
                  </button>
                </div>
              </div>
            ) : (
              /* ═══ FEEDBACK PEDAGÓGICO PÓS-ENVIO ═══ */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-4"
              >
                {/* Banner de Resultado */}
                <div className={`rounded-2xl border p-5 ${
                  isCorrect 
                    ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-100" 
                    : "border-rose-500/40 bg-rose-950/40 text-rose-100"
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 size={24} className="text-emerald-400" />
                          <h3 className="font-display text-xl text-white">Resposta Perfeita! ✅</h3>
                        </>
                      ) : (
                        <>
                          <XCircle size={24} className="text-rose-400" />
                          <h3 className="font-display text-xl text-white">Não foi dessa vez, mas você está aprendendo! 💡</h3>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
                        {isCorrect ? "+50 XP • Alta Retenção" : "+20 XP pela tentativa"}
                      </span>
                    </div>
                  </div>

                  {/* Se errou: Taxonomia Socrática de Erro */}
                  {!isCorrect && !hasReflected && (
                    <div className="mt-4 border-t border-rose-500/20 pt-4">
                      <p className="text-xs font-semibold text-rose-200 mb-2.5">
                        🧠 Onde você sente que o caminho se perdeu? (Classificar seu erro rende +30 XP de metacognição):
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {Object.values(ERROR_CATEGORIES).map((cat) => (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => handleSelectErrorCategory(cat.id)}
                            className="rounded-xl border border-white/10 bg-white/5 p-2 text-left text-xs text-rose-100 hover:bg-rose-500/20 hover:border-rose-400 transition cursor-pointer"
                          >
                            <span className="font-bold block">{cat.label}</span>
                            <span className="text-[0.65rem] text-rose-200/60 leading-tight block mt-0.5">{cat.tip}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mensagem após reflexão do erro */}
                  {!isCorrect && hasReflected && (
                    <div className="mt-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-2.5 text-xs text-emerald-200 flex items-center justify-between">
                      <span>✨ <strong>Excelente metacognição:</strong> Erro classificado como <em>{ERROR_CATEGORIES[selectedErrorCategory]?.label}</em>. (+30 XP concedido)</span>
                    </div>
                  )}
                </div>

                {/* Análise dos Distratores e Resolução Completa */}
                <div className="rounded-2xl border border-white/10 bg-[#140a16] p-5">
                  <h4 className="flex items-center gap-2 font-display text-lg text-white mb-3">
                    <Lightbulb size={18} className="text-amber-400" />
                    <span>Resolução Pedagógica e Passo a Passo</span>
                  </h4>

                  {/* Análise da alternativa que o aluno marcou (se errou) */}
                  {!isCorrect && selectedOption && (
                    <div className="mb-4 rounded-xl border border-rose-500/20 bg-rose-500/10 p-3 text-xs text-rose-200">
                      <strong>Por que a alternativa {selectedOption.id} é incorreta?</strong>
                      <p className="mt-1 text-rose-100/80">{selectedOption.distractorRationale}</p>
                    </div>
                  )}

                  {/* Resumo e Passo a Passo */}
                  <p className="text-sm font-semibold text-rose-100 mb-2">
                    {currentQ.detailedExplanation.summary}
                  </p>
                  <ul className="flex flex-col gap-1.5 text-xs text-rose-200/80 list-disc list-inside mb-4">
                    {currentQ.detailedExplanation.stepByStep.map((step, idx) => (
                      <li key={idx} className="leading-relaxed">{step}</li>
                    ))}
                  </ul>

                  <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3 text-xs text-rose-300/80">
                    <strong>Conceito Central:</strong> {currentQ.detailedExplanation.coreConcept}
                  </div>
                </div>

                {/* Botões de Ação Pós-Envio */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleResetForPractice}
                    className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-rose-200 hover:bg-white/10 transition cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Tentar Novamente</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {!isFirstQuestion && (
                      <button
                        type="button"
                        onClick={() => handleNavigateQuestion(questionIndex - 1)}
                        className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition cursor-pointer"
                      >
                        <ChevronLeft size={16} />
                        <span>Anterior</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        if (!isLastQuestion) {
                          handleNavigateQuestion(questionIndex + 1);
                        } else {
                          onFinishSession?.();
                        }
                      }}
                      className="flex items-center gap-2 rounded-xl bg-rose-200 px-6 py-2.5 text-sm font-bold text-[#2a1020] shadow-xl hover:bg-rose-100 transition cursor-pointer"
                    >
                      <span>{isLastQuestion ? "Finalizar Bloco de Estudos 🎓" : "Próxima Questão"}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

              </motion.div>
            )}

            {/* ═══ NAVEGAÇÃO ANTERIOR/PRÓXIMA CASO NÃO TENHA ENVIADO ═══ */}
            {!isEffectiveSubmitted && (
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-white/5 text-xs text-rose-200/50">
                <button
                  type="button"
                  onClick={() => !isFirstQuestion && handleNavigateQuestion(questionIndex - 1)}
                  disabled={isFirstQuestion}
                  className="flex items-center gap-1 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronLeft size={16} />
                  <span>Questão Anterior</span>
                </button>

                <button
                  type="button"
                  onClick={() => !isLastQuestion && handleNavigateQuestion(questionIndex + 1)}
                  disabled={isLastQuestion}
                  className="flex items-center gap-1 hover:text-white transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>Próxima Questão</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            )}

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}
