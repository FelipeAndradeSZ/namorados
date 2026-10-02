import { useState } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  XCircle, 
  Brain, 
  RotateCcw, 
  ChevronDown, 
  ChevronUp, 
  BarChart3,
  Lightbulb
} from "lucide-react";
import { ENEM_AREAS } from "../content/curriculum";

export function SimuladoResultView({ 
  result, 
  onRetryErrors, 
  onClose 
}) {
  const [filterArea, setFilterArea] = useState("all");
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);

  const {
    modalityName,
    completedAt,
    totalQuestions,
    totalAnswered,
    totalCorrect,
    overallAccuracy,
    overallTRIScore,
    triByArea = {},
    totalTimeUsedSeconds,
    avgTimePerQuestion,
    questionResults = [],
    wrongQuestions = []
  } = result;

  const formatTime = (secs) => {
    const hrs = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const rem = secs % 60;
    if (hrs > 0) return `${hrs}h ${mins}m`;
    return `${mins}m ${rem}s`;
  };

  const filteredResults = questionResults.filter(q => {
    if (filterArea === "all") return true;
    if (filterArea === "wrong") return !q.isCorrect;
    return q.area === filterArea;
  });

  return (
    <div className="mx-auto max-w-5xl px-3 py-6 sm:px-6 space-y-6">
      
      {/* ═══ HEADER DO RELATÓRIO ═══ */}
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b0d1e] via-[#140a16] to-[#0e0711] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold text-rose-300 uppercase tracking-widest block mb-1">
              Relatório Oficial de Desempenho TRI
            </span>
            <h1 className="font-display text-2xl sm:text-3xl font-black text-white">
              {modalityName}
            </h1>
            <p className="text-xs text-rose-200/60 mt-1">
              Concluído em {new Date(completedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white hover:bg-white/10 transition cursor-pointer"
            >
              Voltar ao Início
            </button>
            {wrongQuestions.length > 0 && onRetryErrors && (
              <button
                type="button"
                onClick={() => onRetryErrors(wrongQuestions)}
                className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-5 py-2 text-xs font-bold text-white shadow-lg shadow-rose-500/30 hover:scale-105 transition cursor-pointer"
              >
                <RotateCcw size={14} />
                <span>Praticar {wrongQuestions.length} Erros ➔</span>
              </button>
            )}
          </div>
        </div>

        {/* Destaque da Nota TRI Projetada */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-center">
            <span className="text-[0.65rem] font-bold text-rose-300 uppercase tracking-wider block">
              Nota TRI Projetada
            </span>
            <span className="text-3xl sm:text-4xl font-display font-black text-white my-1 block">
              {overallTRIScore}
            </span>
            <span className="text-[0.6rem] text-rose-200/60">escala oficial ENEM</span>
          </div>

          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-center">
            <span className="text-[0.65rem] font-bold text-emerald-300 uppercase tracking-wider block">
              Acertos Totais
            </span>
            <span className="text-3xl sm:text-4xl font-display font-black text-emerald-300 my-1 block">
              {totalCorrect}/{totalQuestions}
            </span>
            <span className="text-[0.6rem] text-emerald-200/70">{overallAccuracy}% de aproveitamento</span>
          </div>

          <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-4 text-center">
            <span className="text-[0.65rem] font-bold text-sky-300 uppercase tracking-wider block">
              Tempo Total
            </span>
            <span className="text-2xl sm:text-3xl font-display font-black text-sky-200 my-1 block">
              {formatTime(totalTimeUsedSeconds)}
            </span>
            <span className="text-[0.6rem] text-sky-200/60">média: {Math.round(avgTimePerQuestion)}s / questão</span>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 text-center">
            <span className="text-[0.65rem] font-bold text-purple-300 uppercase tracking-wider block">
              Respondidas
            </span>
            <span className="text-2xl sm:text-3xl font-display font-black text-purple-200 my-1 block">
              {totalAnswered}/{totalQuestions}
            </span>
            <span className="text-[0.6rem] text-purple-200/60">
              {totalQuestions - totalAnswered} em branco
            </span>
          </div>
        </div>
      </div>

      {/* ═══ DESEMPENHO E NOTA TRI POR ÁREA DO ENEM ═══ */}
      <div>
        <h2 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <BarChart3 size={16} className="text-sky-400" />
          <span>Desempenho por Área de Conhecimento</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {Object.entries(triByArea).map(([areaKey, stat]) => {
            const areaInfo = ENEM_AREAS[areaKey];
            return (
              <div
                key={areaKey}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white capitalize">
                      {areaInfo?.shortName || areaKey}
                    </span>
                    <span className="text-[0.65rem] font-bold text-rose-300">
                      {stat.correctCount}/{stat.totalQuestions} acertos
                    </span>
                  </div>

                  <div className="text-center my-2">
                    <span className="text-3xl font-display font-black text-white">
                      {stat.score}
                    </span>
                    <span className="text-[0.6rem] text-rose-200/50 block">pontos TRI</span>
                  </div>

                  <div className="space-y-1.5 text-[0.65rem] mt-3">
                    <div className="flex justify-between text-emerald-300">
                      <span>Fáceis:</span>
                      <span className="font-bold">{stat.easyAccuracy}%</span>
                    </div>
                    <div className="flex justify-between text-amber-300">
                      <span>Médias:</span>
                      <span className="font-bold">{stat.medAccuracy}%</span>
                    </div>
                    <div className="flex justify-between text-rose-300">
                      <span>Difíceis:</span>
                      <span className="font-bold">{stat.hardAccuracy}%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 text-[0.6rem] text-rose-200/50 text-center">
                  {stat.coherenceLevel}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ═══ GABARITO OFICIAL COMPLETO ITEM POR ITEM ═══ */}
      <div className="rounded-3xl border border-white/10 bg-[#120a16] p-5 sm:p-7 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 border-b border-white/10 pb-4">
          <div>
            <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <Brain size={18} className="text-rose-400" />
              <span>Gabarito Oficial Comentado</span>
            </h3>
            <p className="text-xs text-rose-200/60 mt-0.5">
              Analise cada alternativa marcada e leia as resoluções pedagógicas do INEP.
            </p>
          </div>

          {/* Filtros da Lista */}
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => setFilterArea("all")}
              className={`rounded-xl px-3 py-1 text-xs font-semibold transition cursor-pointer ${
                filterArea === "all" ? "bg-rose-500 text-white" : "bg-white/5 text-white/60 hover:text-white"
              }`}
            >
              Todas ({totalQuestions})
            </button>
            <button
              type="button"
              onClick={() => setFilterArea("wrong")}
              className={`rounded-xl px-3 py-1 text-xs font-semibold transition cursor-pointer ${
                filterArea === "wrong" ? "bg-rose-500 text-white" : "bg-white/5 text-white/60 hover:text-white"
              }`}
            >
              Erros ({wrongQuestions.length})
            </button>
          </div>
        </div>

        {/* Tabela Interativa de Questões */}
        <div className="space-y-2.5">
          {filteredResults.map(qRes => {
            const isExpanded = expandedQuestionId === qRes.questionId;

            return (
              <div
                key={qRes.questionId}
                className={`rounded-2xl border transition ${
                  qRes.isCorrect 
                    ? "border-emerald-500/20 bg-emerald-950/10" 
                    : qRes.isUnanswered 
                      ? "border-white/5 bg-white/[0.01]" 
                      : "border-rose-500/20 bg-rose-950/10"
                }`}
              >
                <div 
                  onClick={() => setExpandedQuestionId(isExpanded ? null : qRes.questionId)}
                  className="flex items-center justify-between p-3.5 cursor-pointer hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-3">
                    <span className={`grid size-7 place-items-center rounded-xl text-xs font-bold border ${
                      qRes.isCorrect 
                        ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300" 
                        : "bg-rose-500/20 border-rose-500/40 text-rose-300"
                    }`}>
                      {qRes.index}
                    </span>

                    <div>
                      <span className="text-xs font-bold text-white block">
                        {qRes.topic}
                      </span>
                      <span className="text-[0.65rem] text-rose-200/50">
                        {qRes.area} • Dificuldade {qRes.difficulty}★
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right text-xs">
                      <span className="text-rose-200/50 text-[0.65rem] block">Sua resposta / Gabarito</span>
                      <span className="font-mono font-bold">
                        <span className={qRes.isCorrect ? "text-emerald-400" : "text-rose-400"}>
                          {qRes.userOptionId ? qRes.userOptionId.toUpperCase() : "—"}
                        </span>
                        {" / "}
                        <span className="text-emerald-300">
                          {qRes.correctOptionId ? qRes.correctOptionId.toUpperCase() : "—"}
                        </span>
                      </span>
                    </div>

                    {qRes.isCorrect ? (
                      <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    ) : (
                      <XCircle size={18} className="text-rose-400 shrink-0" />
                    )}

                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>

                {/* Bloco Expandido com Resolução */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t border-white/5 p-4 bg-black/20 text-xs text-rose-100/90 space-y-2"
                  >
                    <div className="flex items-center gap-1.5 text-amber-300 font-bold">
                      <Lightbulb size={14} />
                      <span>Resolução e Análise Pedagógica:</span>
                    </div>
                    <p className="leading-relaxed">
                      Para ver a resolução integral e refazer este item, utilize o botão "Praticar Erros" acima para carregar o caderno de prática deliberada.
                    </p>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
}
