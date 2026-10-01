import { motion } from "framer-motion";
import { 
  Award, 
  Clock, 
  Brain, 
  RotateCcw, 
  ArrowRight
} from "lucide-react";
import { estimateTRIScore } from "../learning/learningEngine";
import { ENEM_AREAS } from "../content/curriculum";

export function SessionReportModal({
  sessionQuestions = [],
  sessionAttempts = [],
  sessionType = "estudo",
  totalTimeSeconds = 0,
  onClose,
  onRetryErrors
}) {
  const total = sessionQuestions.length;
  const attemptsMap = new Map(sessionAttempts.map(a => [a.questionId, a]));
  
  const correctCount = sessionQuestions.filter(q => attemptsMap.get(q.id)?.isCorrect).length;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  // Cálculo da estimativa TRI da sessão
  const simulatedHistory = sessionQuestions.map(q => {
    const att = attemptsMap.get(q.id);
    return {
      questionId: q.id,
      area: q.area,
      difficulty: q.difficulty || 3,
      isCorrect: !!att?.isCorrect
    };
  });

  // Calculamos a TRI para a área predominante ou média
  const triEstimate = estimateTRIScore(simulatedHistory);

  // Tempo médio por questão
  const avgTimePerQuestion = total > 0 ? Math.round(totalTimeSeconds / total) : 150;
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins}m ${rem < 10 ? "0" : ""}${rem}s`;
  };

  // Desempenho por área presente na sessão
  const areaBreakdown = {};
  sessionQuestions.forEach(q => {
    if (!areaBreakdown[q.area]) {
      areaBreakdown[q.area] = { total: 0, correct: 0 };
    }
    areaBreakdown[q.area].total += 1;
    if (attemptsMap.get(q.id)?.isCorrect) {
      areaBreakdown[q.area].correct += 1;
    }
  });

  const wrongQuestions = sessionQuestions.filter(q => !attemptsMap.get(q.id)?.isCorrect);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="rounded-3xl border border-rose-500/30 bg-[#160b18] p-6 sm:p-8 shadow-2xl backdrop-blur-xl"
      >
        
        {/* Header do Relatório */}
        <div className="text-center mb-6">
          <div className="mx-auto mb-3 grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30">
            <Award size={32} />
          </div>

          <span className="text-xs font-bold tracking-widest text-rose-300 uppercase">
            {sessionType === "simulado" ? "Diagnóstico do Simulado ENEM" : "Sessão de Estudos Finalizada"}
          </span>
          <h1 className="font-display text-2xl sm:text-3xl text-white font-bold mt-1">
            {accuracy >= 80 ? "Desempenho de Alta Performance! 🩺" : "Excelente Prática Concluída! 💡"}
          </h1>
          <p className="text-xs sm:text-sm text-rose-200/70 mt-1 max-w-md mx-auto">
            {accuracy >= 80 
              ? "Sua coerência pedagógica está alinhada ao corte de Medicina. Continue com essa consistência!"
              : "Cada erro identificado hoje é um ponto a mais garantido no dia oficial da prova."}
          </p>
        </div>

        {/* Grid de Métricas Chave */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-3 text-center">
            <span className="text-2xl font-bold text-emerald-400 block">{correctCount}/{total}</span>
            <span className="text-[0.65rem] text-emerald-200/70 uppercase font-semibold">Acertos ({accuracy}%)</span>
          </div>

          <div className="rounded-2xl border border-sky-500/30 bg-sky-950/20 p-3 text-center">
            <span className="text-2xl font-bold text-sky-400 block">{triEstimate.estimatedScore}</span>
            <span className="text-[0.65rem] text-sky-200/70 uppercase font-semibold">Nota TRI Estimada</span>
          </div>

          <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-3 text-center">
            <span className="text-2xl font-bold text-amber-400 block">{formatTime(avgTimePerQuestion)}</span>
            <span className="text-[0.65rem] text-amber-200/70 uppercase font-semibold">Tempo Médio / Questão</span>
          </div>

          <div className="rounded-2xl border border-purple-500/30 bg-purple-950/20 p-3 text-center">
            <span className="text-2xl font-bold text-purple-400 block">+{correctCount * 50 + (total - correctCount) * 20}</span>
            <span className="text-[0.65rem] text-purple-200/70 uppercase font-semibold">XP Acadêmico</span>
          </div>

        </div>

        {/* Diagnóstico da TRI e Coerência */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 mb-6">
          <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Brain size={16} className="text-sky-400" />
              <span>Análise de Coerência da TRI (Padrão INEP)</span>
            </span>
            <span className="rounded-full bg-sky-500/20 border border-sky-500/30 px-2.5 py-0.5 text-[0.65rem] font-bold text-sky-300">
              {triEstimate.coherenceLevel}
            </span>
          </div>

          <p className="text-xs text-rose-100/80 leading-relaxed mb-4">
            {triEstimate.easyAccuracy >= 75
              ? "✅ Coerência Positiva: Você garantiu a pontuação nas questões fáceis e médias. No ENEM, isso garante que a TRI atribua valor máximo às suas questões difíceis acertadas."
              : "⚠️ Atenção à Base: Errar questões fáceis e acertar difíceis reduz a nota da TRI (o algoritmo interpreta como chute). Foque em consolidar os conceitos fundamentais antes das questões avançadas."}
          </p>

          {/* Quebra por Área */}
          <div className="space-y-2.5">
            {Object.entries(areaBreakdown).map(([areaKey, data]) => {
              const areaAcc = Math.round((data.correct / data.total) * 100);
              const areaInfo = ENEM_AREAS[areaKey] || { name: areaKey };
              return (
                <div key={areaKey} className="text-xs">
                  <div className="flex justify-between mb-1">
                    <span className="text-rose-200/80 font-medium">{areaInfo.name}</span>
                    <span className="text-white font-bold">{data.correct}/{data.total} ({areaAcc}%)</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${areaAcc >= 70 ? "bg-emerald-400" : areaAcc >= 50 ? "bg-amber-400" : "bg-rose-400"}`} 
                      style={{ width: `${areaAcc}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ritmo de Prova (Pacing) */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 mb-6 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-rose-200/80">
            <Clock size={16} className="text-amber-400 shrink-0" />
            <span>
              Meta ENEM: <strong>3 min (180s)</strong> por questão. Seu tempo médio foi de <strong>{avgTimePerQuestion}s</strong>.
            </span>
          </div>
          <span className={`px-2 py-0.5 rounded-lg font-bold shrink-0 ${
            avgTimePerQuestion <= 180 ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"
          }`}>
            {avgTimePerQuestion <= 180 ? "Ritmo Ideal ✅" : "Acelerar um pouco ⏱️"}
          </span>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          {wrongQuestions.length > 0 && onRetryErrors && (
            <button
              type="button"
              onClick={() => onRetryErrors(wrongQuestions)}
              className="flex items-center justify-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/20 px-5 py-3 text-sm font-bold text-amber-200 hover:bg-amber-500 hover:text-amber-950 transition cursor-pointer"
            >
              <RotateCcw size={16} />
              <span>Treinar os {wrongQuestions.length} Erros Desta Sessão</span>
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rose-500/30 hover:scale-105 transition cursor-pointer"
          >
            <span>Continuar Meus Estudos</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </motion.div>
    </div>
  );
}
