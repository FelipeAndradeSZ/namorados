import { BarChart3, Brain } from "lucide-react";
import { ENEM_AREAS } from "../content/curriculum";

export function AnalyticsDashboard({ playerState, onStartSimulado }) {
  const { masteryMatrix = {}, profile, history = [] } = playerState;

  const totalAttempts = history.length;
  const correctCount = history.filter(h => h.isCorrect).length;
  const overallAccuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 75;

  return (
    <div className="mx-auto max-w-5xl px-3 py-6 sm:px-6">
      
      {/* Título */}
      <div className="mb-6 border-b border-white/10 pb-4">
        <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase flex items-center gap-1.5">
          <BarChart3 size={14} />
          <span>Diagnóstico Pedagógico & Evolução</span>
        </span>
        <h2 className="font-display text-2xl sm:text-3xl text-white mt-1">
          Seu Progresso Rumo à Aprovação
        </h2>
      </div>

      {/* Cards de Métricas Principais */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="rounded-2xl border border-white/10 bg-[#160a16] p-4 text-center">
          <span className="text-2xl font-bold text-rose-300 block">{profile.streakDays} dias</span>
          <span className="text-[0.65rem] text-rose-200/60 uppercase">Sequência Ativa 🔥</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#160a16] p-4 text-center">
          <span className="text-2xl font-bold text-sky-300 block">{totalAttempts}</span>
          <span className="text-[0.65rem] text-rose-200/60 uppercase">Questões Praticadas 📚</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#160a16] p-4 text-center">
          <span className="text-2xl font-bold text-emerald-300 block">{overallAccuracy}%</span>
          <span className="text-[0.65rem] text-rose-200/60 uppercase">Índice de Acertos 🎯</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#160a16] p-4 text-center">
          <span className="text-2xl font-bold text-amber-300 block">{playerState.economy.milhas}</span>
          <span className="text-[0.65rem] text-rose-200/60 uppercase">Milhas de Aprendizagem ✈️</span>
        </div>
      </div>

      {/* Barras de Domínio por Área do ENEM */}
      <div className="rounded-3xl border border-white/10 bg-[#140b14]/90 p-5 sm:p-6 shadow-xl mb-6">
        <h3 className="font-display text-lg text-white mb-4 flex items-center gap-2">
          <Brain size={18} className="text-rose-400" />
          <span>Matriz de Domínio Estimado (Interno)</span>
        </h3>

        <div className="flex flex-col gap-4">
          {Object.entries(ENEM_AREAS).map(([areaKey, areaData]) => {
            const score = masteryMatrix[areaKey] || 50;

            return (
              <div key={areaKey} className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span 
                      className="size-2.5 rounded-full" 
                      style={{ backgroundColor: areaData.color }} 
                    />
                    <strong className="text-white">{areaData.name}</strong>
                  </div>
                  <span className="font-bold text-rose-200">{score}%</span>
                </div>

                <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ 
                      width: `${score}%`,
                      backgroundColor: areaData.color 
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-4 text-[0.65rem] text-rose-200/50 text-center">
          *Estimativa pedagógica interna calculada pelo algoritmo adaptativo com base na dificuldade e confiança.
        </p>
      </div>

      {/* Testes de Fogo */}
      <div className="rounded-3xl border border-rose-500/20 bg-gradient-to-br from-[#1b0a18] to-[#120a16] p-5 sm:p-6 shadow-xl mb-6">
        <h3 className="font-display text-lg text-white mb-4 flex items-center gap-2">
          <span className="text-xl">🔥</span>
          <span>Testes de Fogo (Simulados)</span>
        </h3>
        
        <p className="text-sm text-white/70 mb-5 leading-relaxed">
          Os simulados misturam questões de todas as áreas. Prepare seu ambiente, pegue uma água e concentre-se.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => onStartSimulado && onStartSimulado(10)}
            className="flex-1 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-rose-500/10 hover:border-rose-500/30 transition flex flex-col items-center justify-center gap-2"
          >
            <span className="text-xl font-bold text-rose-300">10 Questões</span>
            <span className="text-xs text-white/50 text-center">Tiro rápido. Avaliação ágil para manter a mente aquecida. (~30 min)</span>
          </button>

          <button
            onClick={() => onStartSimulado && onStartSimulado(45)}
            className="flex-1 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-rose-500/10 hover:border-rose-500/30 transition flex flex-col items-center justify-center gap-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-purple-500/5 pointer-events-none" />
            <span className="text-xl font-bold text-rose-300">45 Questões</span>
            <span className="text-xs text-white/50 text-center">Foco e resistência. Simula uma área inteira do ENEM. (~2 horas)</span>
          </button>
        </div>
      </div>

      {/* Mensagem Motivacional e Apoio */}
      <div className="rounded-2xl border border-rose-500/20 bg-gradient-to-r from-rose-950/20 via-pink-950/10 to-purple-950/20 p-5 text-center">
        <p className="font-serif italic text-sm text-rose-100/90 leading-relaxed max-w-xl mx-auto">
          "Cada esforço silencioso que você faz hoje está construindo a médica brilhante, humana e competente que você será amanhã. Continue firme, passo a passo!" ❤️
        </p>
        <span className="block text-[0.65rem] font-bold text-rose-300 mt-2 uppercase tracking-widest">
          — Com todo o meu amor, Felipe
        </span>
      </div>

    </div>
  );
}
