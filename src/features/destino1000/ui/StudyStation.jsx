import { useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  BookOpen, 
  Lightbulb, 
  ArrowRight, 
  Clock
} from "lucide-react";
import { CONFIDENCE_LEVELS, ERROR_CATEGORIES } from "../learning/learningEngine";
import { destinoAudio } from "../core/soundEngine";

export function StudyStation({ 
  question, 
  onAnswerSubmit, 
  onNextQuestion, 
  isLastQuestion = false 
}) {
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [confidence, setConfidence] = useState("media");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectedErrorCategory, setSelectedErrorCategory] = useState(null);
  const [hasReflected, setHasReflected] = useState(false);

  if (!question) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center text-rose-200">
        <Sparkles size={40} className="text-rose-400 mb-3 animate-bounce" />
        <h3 className="font-display text-2xl text-white">Todas as missões desta expedição foram concluídas!</h3>
        <p className="mt-2 text-sm text-rose-200/70 max-w-md">
          Excelente trabalho! Você revisou seus pontos e acumulou milhas para viajar para o próximo destino no mapa do Brasil.
        </p>
      </div>
    );
  }

  const selectedOption = question.options.find(o => o.id === selectedOptionId);
  const isCorrect = selectedOption?.isCorrect;

  const handleSelectOption = (optId) => {
    if (hasSubmitted) return;
    destinoAudio.playClick();
    setSelectedOptionId(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || hasSubmitted) return;
    setHasSubmitted(true);

    if (isCorrect) {
      destinoAudio.playSuccess();
    } else {
      destinoAudio.playReflect();
    }

    onAnswerSubmit?.({
      questionId: question.id,
      selectedOptionId,
      isCorrect,
      confidence,
      errorCategory: null
    });
  };

  const handleSelectErrorCategory = (catId) => {
    setSelectedErrorCategory(catId);
    setHasReflected(true);
    destinoAudio.playStamp();
    
    // Notifica o motor que o erro foi refletido (recompensa metacognitiva)
    onAnswerSubmit?.({
      questionId: question.id,
      selectedOptionId,
      isCorrect: false,
      confidence,
      errorCategory: catId,
      reflected: true
    });
  };

  const handleNext = () => {
    setSelectedOptionId(null);
    setConfidence("media");
    setHasSubmitted(false);
    setSelectedErrorCategory(null);
    setHasReflected(false);
    onNextQuestion?.();
  };

  return (
    <div className="mx-auto max-w-4xl px-3 py-6 sm:px-6">
      
      {/* Header com Metadados da Questão */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="rounded-lg bg-rose-500/20 px-2.5 py-1 text-xs font-bold text-rose-300 border border-rose-500/30 uppercase tracking-wider">
            {question.area}
          </span>
          <span className="text-xs text-rose-100/60 font-medium">
            Habilidade {question.skill} • {question.topic}
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-rose-200/50">
          <span className="flex items-center gap-1">
            <Clock size={13} /> {question.estimatedTimeSeconds || 150}s
          </span>
          <span className="flex items-center gap-1">
            Dificuldade: {"★".repeat(question.difficulty)}{"☆".repeat(5 - question.difficulty)}
          </span>
        </div>
      </div>

      {/* Cartão de Contexto e Texto de Apoio */}
      {question.context?.supportText && (
        <div className="mb-5 rounded-2xl border border-white/10 bg-[#160d19]/80 p-4 sm:p-5 shadow-lg backdrop-blur-md">
          <div className="mb-2 flex items-center gap-2 text-[0.65rem] font-semibold tracking-widest text-rose-300/80 uppercase">
            <BookOpen size={13} />
            <span>Texto de Apoio / Contexto</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-rose-50/90 whitespace-pre-line font-serif italic">
            "{question.context.supportText}"
          </p>
          {question.context.source && (
            <p className="mt-2 text-right text-[0.65rem] text-rose-200/50">
              — {question.context.source}
            </p>
          )}
        </div>
      )}

      {/* Enunciado Principal */}
      <div className="mb-6">
        <h2 className="text-base sm:text-lg font-medium leading-relaxed text-white">
          {question.prompt}
        </h2>
      </div>

      {/* Alternativas */}
      <div className="flex flex-col gap-3 mb-6">
        {question.options.map((opt) => {
          const isSelected = selectedOptionId === opt.id;
          let btnStyle = "border-white/10 bg-white/[0.03] text-rose-50 hover:bg-white/[0.07] hover:border-rose-300/30";

          if (hasSubmitted) {
            if (opt.isCorrect) {
              btnStyle = "border-emerald-500/80 bg-emerald-500/20 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.2)]";
            } else if (isSelected && !opt.isCorrect) {
              btnStyle = "border-rose-500/80 bg-rose-500/20 text-rose-100 shadow-[0_0_20px_rgba(244,63,94,0.2)]";
            } else {
              btnStyle = "opacity-40 border-white/5 bg-transparent text-rose-100/40";
            }
          } else if (isSelected) {
            btnStyle = "border-rose-400 bg-rose-400/20 text-white shadow-[0_0_20px_rgba(251,113,133,0.25)]";
          }

          return (
            <motion.button
              key={opt.id}
              type="button"
              onClick={() => handleSelectOption(opt.id)}
              disabled={hasSubmitted}
              whileTap={!hasSubmitted ? { scale: 0.99 } : {}}
              className={`flex items-start gap-3.5 rounded-2xl border p-4 text-left transition-all cursor-pointer ${btnStyle}`}
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
              {hasSubmitted && opt.isCorrect && (
                <CheckCircle2 size={20} className="text-emerald-400 shrink-0 mt-0.5" />
              )}
              {hasSubmitted && isSelected && !opt.isCorrect && (
                <XCircle size={20} className="text-rose-400 shrink-0 mt-0.5" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Barra de Ação Pré-Envio: Seletor de Confiança + Botão Responder */}
      {!hasSubmitted ? (
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

          <button
            type="button"
            onClick={handleSubmitAnswer}
            disabled={!selectedOptionId}
            className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rose-500/25 transition-all hover:scale-105 active:scale-95 disabled:opacity-40 disabled:hover:scale-100 cursor-pointer"
          >
            Confirmar Resposta
          </button>
        </div>
      ) : (
        /* Seção Pós-Envio: Feedback Pedagógico & Explicação Detalhada */
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
                    <h3 className="font-display text-xl text-white">Não foi dessa vez, mas faz parte do aprendizado! 💡</h3>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
                  {isCorrect ? "+50 XP • +30 Milhas" : "+20 XP pela tentativa"}
                </span>
              </div>
            </div>

            {/* Se errou: Taxonomia Socrática de Erro */}
            {!isCorrect && !hasReflected && (
              <div className="mt-4 border-t border-rose-500/20 pt-4">
                <p className="text-xs font-semibold text-rose-200 mb-2.5">
                  🧠 Onde você sente que o caminho se perdeu? (Identificar seu erro rende +30 XP):
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
              <span>Resolução Pedagógica e Conceito-Chave</span>
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
              {question.detailedExplanation.summary}
            </p>
            <ul className="flex flex-col gap-1.5 text-xs text-rose-200/80 list-disc list-inside mb-4">
              {question.detailedExplanation.stepByStep.map((step, idx) => (
                <li key={idx} className="leading-relaxed">{step}</li>
              ))}
            </ul>

            <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3 text-xs text-rose-300/80">
              <strong>Conceito Central:</strong> {question.detailedExplanation.coreConcept}
            </div>
          </div>

          {/* Botão de Avanço */}
          <div className="flex justify-end pt-2">
            <button
              type="button"
              onClick={handleNext}
              className="flex items-center gap-2 rounded-xl bg-rose-200 px-6 py-3 text-sm font-bold text-[#2a1020] shadow-xl hover:bg-rose-100 transition cursor-pointer"
            >
              <span>{isLastQuestion ? "Finalizar Expedição" : "Próxima Questão"}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      )}

    </div>
  );
}
