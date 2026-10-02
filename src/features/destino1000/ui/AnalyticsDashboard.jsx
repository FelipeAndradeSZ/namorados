import { useState } from "react";
import { 
  BarChart3, 
  Brain, 
  Target, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Flame, 
  BookOpen, 
  Award
} from "lucide-react";
import { ENEM_AREAS } from "../content/curriculum";
import { estimateTRIScore, analyzeErrorPatterns } from "../learning/learningEngine";

export function AnalyticsDashboard({ playerState, onStartSimulado }) {
  const { 
    masteryMatrix = {}, 
    profile = {}, 
    history = [], 
    errorNotebook = [] 
  } = playerState;

  const [selectedTRIArea, setSelectedTRIArea] = useState("matematica");

  const totalAttempts = history.length;
  const correctCount = history.filter(h => h.isCorrect).length;
  const overallAccuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;

  // Análise TRI para cada área
  const triMatematica = estimateTRIScore(history, "matematica");
  const triNatureza = estimateTRIScore(history, "natureza");
  const triHumanas = estimateTRIScore(history, "humanas");
  const triLinguagens = estimateTRIScore(history, "linguagens");

  const triScores = {
    matematica: triMatematica,
    natureza: triNatureza,
    humanas: triHumanas,
    linguagens: triLinguagens
  };

  const selectedTRI = triScores[selectedTRIArea] || triMatematica;

  // Média Geral Projetada
  const mediaTRI = Math.round(
    (triMatematica.estimatedScore + 
     triNatureza.estimatedScore + 
     triHumanas.estimatedScore + 
     triLinguagens.estimatedScore + 
     (masteryMatrix.redacao ? masteryMatrix.redacao * 10 : 800)) / 5
  );

  // Diagnóstico do Caderno de Erros
  const errorDiagnosis = analyzeErrorPatterns(errorNotebook);

  return (
    <div className="mx-auto max-w-5xl px-3 py-6 sm:px-6">
      
      {/* Título Principal */}
      <div className="mb-6 border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <span className="text-xs font-bold tracking-widest text-rose-400 uppercase flex items-center gap-1.5">
            <BarChart3 size={14} />
            <span>Diagnóstico Acadêmico & Projeção ENEM</span>
          </span>
          <h1 className="font-display text-2xl sm:text-3xl text-white font-bold mt-1">
            Painel de Evolução de {profile.name || "Beatriz"}
          </h1>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-xs">
          <Award size={16} className="text-rose-400" />
          <span className="text-rose-200">Média Geral Projetada:</span>
          <strong className="text-white text-sm font-black">{mediaTRI} pts</strong>
        </div>
      </div>

      {/* Cards de Métricas Principais (Zero Viagem) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-4 text-center">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
            <Flame size={18} />
            <span className="text-2xl font-bold">{profile.streakDays || 1}d</span>
          </div>
          <span className="text-[0.65rem] text-amber-200/70 uppercase tracking-wider font-semibold">
            Sequência de Estudos
          </span>
        </div>

        <div className="rounded-2xl border border-sky-500/20 bg-sky-950/20 p-4 text-center">
          <div className="flex items-center justify-center gap-1 text-sky-400 mb-1">
            <BookOpen size={18} />
            <span className="text-2xl font-bold">{totalAttempts}</span>
          </div>
          <span className="text-[0.65rem] text-sky-200/70 uppercase tracking-wider font-semibold">
            Questões Respondidas
          </span>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-4 text-center">
          <div className="flex items-center justify-center gap-1 text-emerald-400 mb-1">
            <CheckCircle2 size={18} />
            <span className="text-2xl font-bold">{overallAccuracy}%</span>
          </div>
          <span className="text-[0.65rem] text-emerald-200/70 uppercase tracking-wider font-semibold">
            Taxa de Acerto Geral
          </span>
        </div>

        <div className="rounded-2xl border border-purple-500/20 bg-purple-950/20 p-4 text-center">
          <div className="flex items-center justify-center gap-1 text-purple-400 mb-1">
            <Clock size={18} />
            <span className="text-2xl font-bold">{profile.totalMinutesStudied || 45} min</span>
          </div>
          <span className="text-[0.65rem] text-purple-200/70 uppercase tracking-wider font-semibold">
            Tempo Dedicado
          </span>
        </div>
      </div>

      {/* Projeção de Nota TRI (Teoria de Resposta ao Item) */}
      <div className="rounded-3xl border border-white/10 bg-[#140b17] p-5 sm:p-7 shadow-2xl mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 border-b border-white/10 pb-4">
          <div>
            <h2 className="font-display text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Brain size={20} className="text-sky-400" />
              <span>Simulador de Nota TRI (Padrão INEP)</span>
            </h2>
            <p className="text-xs text-rose-200/60 mt-0.5">
              A TRI não avalia apenas quantidade de acertos, mas a coerência entre questões fáceis, médias e difíceis.
            </p>
          </div>

          {/* Abas de Área para TRI */}
          <div className="flex gap-1 bg-white/5 p-1 rounded-xl">
            {["matematica", "natureza", "humanas", "linguagens"].map((areaKey) => (
              <button
                key={areaKey}
                type="button"
                onClick={() => setSelectedTRIArea(areaKey)}
                className={`rounded-lg px-2.5 py-1 text-xs font-bold transition cursor-pointer capitalize ${
                  selectedTRIArea === areaKey
                    ? "bg-sky-500 text-sky-950 shadow"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {areaKey.slice(0, 3)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="rounded-2xl border border-sky-500/30 bg-sky-950/20 p-5 text-center flex flex-col items-center justify-center">
            <span className="text-xs text-sky-300 font-bold uppercase tracking-wider">
              Nota Estimada em {ENEM_AREAS[selectedTRIArea]?.shortName}
            </span>
            <span className="text-4xl sm:text-5xl font-display font-black text-white my-2">
              {selectedTRI.estimatedScore}
            </span>
            <span className="rounded-full bg-sky-500/20 border border-sky-500/30 px-3 py-0.5 text-[0.65rem] font-bold text-sky-200">
              {selectedTRI.coherenceLevel}
            </span>
          </div>

          <div className="md:col-span-2 space-y-3">
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-emerald-300 font-semibold">Questões Fáceis (Base Obrigatória da TRI):</span>
                <span className="text-white font-bold">{selectedTRI.easyAccuracy}% de acerto</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${selectedTRI.easyAccuracy}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-amber-300 font-semibold">Questões Médias (Consolidação):</span>
                <span className="text-white font-bold">{selectedTRI.medAccuracy}% de acerto</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: `${selectedTRI.medAccuracy}%` }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-rose-300 font-semibold">Questões Difíceis (Diferencial 800+):</span>
                <span className="text-white font-bold">{selectedTRI.hardAccuracy}% de acerto</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-rose-400 rounded-full" style={{ width: `${selectedTRI.hardAccuracy}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Caderno de Erros & Metacognição */}
      <div className="rounded-3xl border border-amber-500/20 bg-[#160d16] p-5 sm:p-7 shadow-2xl mb-6">
        <h2 className="font-display text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
          <AlertTriangle size={20} className="text-amber-400" />
          <span>Caderno de Erros & Diagnóstico Metacognitivo</span>
        </h2>
        <p className="text-xs text-rose-200/60 mb-5 leading-relaxed">
          Mapeamento dos motivos de erro para transformar pontos fracos em acertos certos no dia da prova.
        </p>

        {errorDiagnosis.totalErrors > 0 ? (
          <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-4">
            <div className="flex items-center justify-between mb-2">
              <strong className="text-sm text-amber-200">
                Padrão Predominante de Erro: {errorDiagnosis.topCategoryLabel}
              </strong>
              <span className="text-xs font-bold text-amber-400">
                {errorDiagnosis.topCategoryPercent}% das falhas
              </span>
            </div>
            <p className="text-xs text-rose-100/80 leading-relaxed">
              💡 <strong>Orientação de Aprendizagem:</strong> {errorDiagnosis.remedyTip}
            </p>
          </div>
        ) : (
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center text-xs text-rose-200/60">
            <CheckCircle2 size={28} className="text-emerald-400 mx-auto mb-2" />
            <span>Nenhum erro pendente no momento! Continue resolvendo questões para calibrar o diagnóstico.</span>
          </div>
        )}
      </div>

      {/* Hub de Simulados Oficiais ENEM */}
      <div className="rounded-3xl border border-rose-500/20 bg-gradient-to-br from-[#1b0a18] to-[#120a16] p-5 sm:p-7 shadow-xl mb-6">
        <h2 className="font-display text-lg sm:text-xl font-bold text-white mb-2 flex items-center gap-2">
          <Target size={20} className="text-rose-400" />
          <span>Simulados & Treinos Cronometrados</span>
        </h2>
        <p className="text-xs sm:text-sm text-rose-200/70 mb-5 leading-relaxed">
          Treinar sob pressão de tempo e com mistura interdisciplinar de questões é a única forma de atingir velocidade de prova.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => onStartSimulado && onStartSimulado(10)}
            className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 hover:bg-rose-500/10 hover:border-rose-500/30 transition flex flex-col justify-between text-left cursor-pointer group"
          >
            <div>
              <span className="text-xs font-bold text-rose-300 uppercase tracking-wider block mb-1">
                ⚡ Aquecimento
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-rose-200 transition">
                Mini-Simulado (10q)
              </h3>
              <p className="text-xs text-rose-200/60 mt-1">
                Mix rápido interdisciplinar para manter o cérebro afiado. (~25 min)
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-rose-400 group-hover:translate-x-1 transition">
              Iniciar Simulado ➔
            </span>
          </button>

          <button
            type="button"
            onClick={() => onStartSimulado && onStartSimulado(20)}
            className="rounded-2xl bg-white/[0.03] border border-white/10 p-5 hover:bg-sky-500/10 hover:border-sky-500/30 transition flex flex-col justify-between text-left cursor-pointer group"
          >
            <div>
              <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block mb-1">
                🎯 Aprofundamento
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-sky-200 transition">
                Simulado Médio (20q)
              </h3>
              <p className="text-xs text-rose-200/60 mt-1">
                Excelente para testar velocidade e gestão de tempo intermediária. (~50 min)
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-sky-400 group-hover:translate-x-1 transition">
              Iniciar Simulado ➔
            </span>
          </button>

          <button
            type="button"
            onClick={() => onStartSimulado && onStartSimulado(45)}
            className="rounded-2xl bg-rose-500/10 border border-rose-500/40 p-5 hover:bg-rose-500/20 hover:border-rose-400 transition flex flex-col justify-between text-left cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute top-2 right-2">
              <span className="rounded-full bg-rose-500 px-2 py-0.5 text-[0.6rem] font-bold text-white uppercase">
                Oficial
              </span>
            </div>
            <div>
              <span className="text-xs font-bold text-rose-300 uppercase tracking-wider block mb-1">
                🏆 Prova Real
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-rose-200 transition">
                Caderno Completo (45q)
              </h3>
              <p className="text-xs text-rose-200/70 mt-1">
                Simulação fidedigna de um caderno de área do ENEM. Resistência máxima. (~2h30)
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-rose-300 group-hover:translate-x-1 transition">
              Iniciar Prova Oficial ➔
            </span>
          </button>
        </div>
      </div>

      {/* Bilhete de Incentivo do Felipe */}
      <div className="rounded-2xl border border-rose-500/20 bg-gradient-to-r from-rose-950/20 via-pink-950/10 to-purple-950/20 p-5 text-center">
        <p className="font-serif italic text-sm text-rose-100/90 leading-relaxed max-w-xl mx-auto">
          "Cada questão que você resolve com foco e atenção é um passo a menos entre o seu quarto de estudos e a faculdade de Medicina. Tenho um orgulho infinito de você!" ❤️
        </p>
        <span className="block text-[0.65rem] font-bold text-rose-300 mt-2 uppercase tracking-widest">
          — Com todo o meu amor e torcida, Felipe
        </span>
      </div>

    </div>
  );
}
