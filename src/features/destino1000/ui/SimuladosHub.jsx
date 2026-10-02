import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Clock, 
  Award, 
  RotateCcw, 
  Play, 
  AlertTriangle, 
  CheckCircle2, 
  BarChart3, 
  ChevronRight,
  Trash2
} from "lucide-react";
import { SIMULADO_MODALITIES, loadActiveSimulado, clearActiveSimulado } from "../core/simuladoEngine";
import { destinoAudio } from "../core/soundEngine";

export function SimuladosHub({ 
  playerState, 
  onStartSimulado, 
  onResumeActiveSimulado, 
  onViewHistoricResult 
}) {
  const [activeSession, setActiveSession] = useState(() => loadActiveSimulado());

  const handleDiscardActive = () => {
    destinoAudio.playClick();
    clearActiveSimulado();
    setActiveSession(null);
  };

  const simuladosHistory = playerState.simuladosHistory || [];

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 space-y-7">
      
      {/* ═══ CABEÇALHO DO HUB DE SIMULADOS ═══ */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <span className="text-xs font-bold tracking-widest text-rose-400 uppercase flex items-center gap-1.5">
            <Target size={14} />
            <span>Condicionamento Real de Prova • Padrão INEP</span>
          </span>
          <h1 className="font-display text-2xl sm:text-3xl text-white font-bold mt-1">
            Simulados Oficiais ENEM
          </h1>
          <p className="text-xs sm:text-sm text-rose-200/60 mt-1 max-w-2xl leading-relaxed">
            Treinar com cadernos completos de 90 questões sob pressão de tempo real é o diferencial comprovado para atingir notas 800+ em Medicina.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-xs">
          <Award size={16} className="text-rose-400" />
          <span className="text-rose-200">Simulados Feitos:</span>
          <strong className="text-white text-sm font-black">{simuladosHistory.length}</strong>
        </div>
      </div>

      {/* ═══ BANNER DE SESSÃO RECUPERADA (CRASH RECOVERY) ═══ */}
      {activeSession && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-transparent p-5 sm:p-6 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="size-11 rounded-2xl bg-amber-500/20 border border-amber-500/40 grid place-items-center text-amber-300 shrink-0">
                <AlertTriangle size={22} />
              </div>
              <div>
                <span className="text-[0.65rem] font-bold text-amber-300 uppercase tracking-wider block">
                  Simulado em Andamento Detectado
                </span>
                <h3 className="font-display text-lg font-bold text-white mt-0.5">
                  {activeSession.modalityName}
                </h3>
                <p className="text-xs text-amber-100/80 mt-1">
                  Questão {(activeSession.currentIndex || 0) + 1} de {activeSession.totalQuestions} • {Object.keys(activeSession.answers || {}).length} respondidas • {Math.round((activeSession.timeRemainingSeconds || 0) / 60)} min restantes.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleDiscardActive}
                className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs text-rose-200/70 hover:text-rose-200 hover:bg-white/10 transition cursor-pointer"
                title="Descartar tentativa"
              >
                <Trash2 size={14} />
                <span>Descartar</span>
              </button>

              <button
                type="button"
                onClick={() => onResumeActiveSimulado(activeSession)}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 px-5 py-2.5 text-xs font-bold text-amber-950 shadow-lg shadow-amber-500/25 hover:scale-105 transition cursor-pointer"
              >
                <Play size={14} fill="currentColor" />
                <span>Continuar Prova ➔</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* ═══ 1. SIMULADOS DE 90 QUESTÕES (OFICIAL ENEM) ═══ */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Award size={18} className="text-rose-400" />
            <span>Simulados Oficiais de 90 Questões</span>
          </h2>
          <span className="text-xs text-rose-200/60 font-medium">Cadernos Completos • 4h30 a 5h</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Dia 1 Oficial */}
          <div className="rounded-3xl border border-rose-500/30 bg-gradient-to-br from-rose-950/30 to-pink-950/10 p-5 sm:p-6 flex flex-col justify-between hover:border-rose-400 transition group relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="rounded-full bg-rose-500/20 border border-rose-500/40 px-2.5 py-0.5 text-[0.65rem] font-bold text-rose-300 uppercase">
                {SIMULADO_MODALITIES["dia1-90"].badge}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-300 mb-2">
                <Clock size={13} />
                <span>5 horas (300 min)</span>
              </div>

              <h3 className="font-display text-lg font-bold text-white group-hover:text-rose-200 transition">
                {SIMULADO_MODALITIES["dia1-90"].name}
              </h3>

              <p className="text-xs text-rose-200/70 mt-2 leading-relaxed">
                {SIMULADO_MODALITIES["dia1-90"].description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onStartSimulado("dia1-90")}
              className="mt-5 w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 py-3 text-xs font-bold text-white shadow-lg shadow-rose-500/25 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
            >
              <Play size={14} fill="currentColor" />
              <span>Iniciar Dia 1 (90q)</span>
            </button>
          </div>

          {/* Dia 2 Oficial */}
          <div className="rounded-3xl border border-sky-500/30 bg-gradient-to-br from-sky-950/30 to-blue-950/10 p-5 sm:p-6 flex flex-col justify-between hover:border-sky-400 transition group relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="rounded-full bg-sky-500/20 border border-sky-500/40 px-2.5 py-0.5 text-[0.65rem] font-bold text-sky-300 uppercase">
                {SIMULADO_MODALITIES["dia2-90"].badge}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 mb-2">
                <Clock size={13} />
                <span>4h30 (270 min)</span>
              </div>

              <h3 className="font-display text-lg font-bold text-white group-hover:text-sky-200 transition">
                {SIMULADO_MODALITIES["dia2-90"].name}
              </h3>

              <p className="text-xs text-rose-200/70 mt-2 leading-relaxed">
                {SIMULADO_MODALITIES["dia2-90"].description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onStartSimulado("dia2-90")}
              className="mt-5 w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 py-3 text-xs font-bold text-sky-950 shadow-lg shadow-sky-500/25 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
            >
              <Play size={14} fill="currentColor" />
              <span>Iniciar Dia 2 (90q)</span>
            </button>
          </div>

          {/* Geral Integrado */}
          <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-950/30 to-pink-950/10 p-5 sm:p-6 flex flex-col justify-between hover:border-purple-400 transition group relative overflow-hidden">
            <div className="absolute top-3 right-3">
              <span className="rounded-full bg-purple-500/20 border border-purple-500/40 px-2.5 py-0.5 text-[0.65rem] font-bold text-purple-300 uppercase">
                {SIMULADO_MODALITIES["geral-90"].badge}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-300 mb-2">
                <Clock size={13} />
                <span>5 horas (300 min)</span>
              </div>

              <h3 className="font-display text-lg font-bold text-white group-hover:text-purple-200 transition">
                {SIMULADO_MODALITIES["geral-90"].name}
              </h3>

              <p className="text-xs text-rose-200/70 mt-2 leading-relaxed">
                {SIMULADO_MODALITIES["geral-90"].description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onStartSimulado("geral-90")}
              className="mt-5 w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 py-3 text-xs font-bold text-white shadow-lg shadow-purple-500/25 hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
            >
              <Play size={14} fill="currentColor" />
              <span>Iniciar Geral (90q)</span>
            </button>
          </div>

        </div>
      </div>

      {/* ═══ 2. CADERNOS COMPLETOS POR ÁREA (45 QUESTÕES) ═══ */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <BarChart3 size={18} className="text-sky-400" />
            <span>Cadernos Completos por Área (45 Questões • 2h30)</span>
          </h2>
          <span className="text-xs text-rose-200/60 font-medium">Foco em Disciplina Específica</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          
          {/* Natureza */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-4 flex flex-col justify-between">
            <div>
              <span className="text-[0.65rem] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                Ciências da Natureza
              </span>
              <h4 className="font-bold text-white text-base">Caderno Natureza</h4>
              <p className="text-[0.65rem] text-rose-200/60 mt-1">
                45 questões de Biologia, Física e Química com cálculo e interpretação.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onStartSimulado("natureza-45")}
              className="mt-4 w-full rounded-xl bg-emerald-500/20 border border-emerald-500/30 hover:bg-emerald-500 hover:text-emerald-950 py-2 text-xs font-bold text-emerald-300 transition cursor-pointer"
            >
              Iniciar Caderno (45q) ➔
            </button>
          </div>

          {/* Matemática */}
          <div className="rounded-2xl border border-sky-500/20 bg-sky-950/20 p-4 flex flex-col justify-between">
            <div>
              <span className="text-[0.65rem] font-bold text-sky-400 uppercase tracking-wider block mb-1">
                Matemática
              </span>
              <h4 className="font-bold text-white text-base">Caderno Matemática</h4>
              <p className="text-[0.65rem] text-rose-200/60 mt-1">
                45 questões cobrindo todas as competências algébricas e geométricas.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onStartSimulado("matematica-45")}
              className="mt-4 w-full rounded-xl bg-sky-500/20 border border-sky-500/30 hover:bg-sky-500 hover:text-sky-950 py-2 text-xs font-bold text-sky-300 transition cursor-pointer"
            >
              Iniciar Caderno (45q) ➔
            </button>
          </div>

          {/* Humanas */}
          <div className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-4 flex flex-col justify-between">
            <div>
              <span className="text-[0.65rem] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                Ciências Humanas
              </span>
              <h4 className="font-bold text-white text-base">Caderno Humanas</h4>
              <p className="text-[0.65rem] text-rose-200/60 mt-1">
                45 questões de História, Geografia, Filosofia e Sociologia crítica.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onStartSimulado("humanas-45")}
              className="mt-4 w-full rounded-xl bg-amber-500/20 border border-amber-500/30 hover:bg-amber-500 hover:text-amber-950 py-2 text-xs font-bold text-amber-300 transition cursor-pointer"
            >
              Iniciar Caderno (45q) ➔
            </button>
          </div>

          {/* Linguagens */}
          <div className="rounded-2xl border border-pink-500/20 bg-pink-950/20 p-4 flex flex-col justify-between">
            <div>
              <span className="text-[0.65rem] font-bold text-pink-400 uppercase tracking-wider block mb-1">
                Linguagens e Códigos
              </span>
              <h4 className="font-bold text-white text-base">Caderno Linguagens</h4>
              <p className="text-[0.65rem] text-rose-200/60 mt-1">
                45 questões com textos clássicos, poesias, artes e gêneros discursivos.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onStartSimulado("linguagens-45")}
              className="mt-4 w-full rounded-xl bg-pink-500/20 border border-pink-500/30 hover:bg-pink-500 hover:text-pink-950 py-2 text-xs font-bold text-pink-300 transition cursor-pointer"
            >
              Iniciar Caderno (45q) ➔
            </button>
          </div>

        </div>
      </div>

      {/* ═══ 3. TREINOS RÁPIDOS DE RITMO (20Q E 10Q) ═══ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex items-center justify-between">
          <div>
            <span className="text-[0.65rem] font-bold text-rose-300 uppercase block">Treino de Ritmo • 60 min</span>
            <h4 className="font-bold text-white text-base mt-0.5">Simulado Intermediário (20q)</h4>
            <p className="text-xs text-rose-200/60 mt-0.5">Mix rápido com 5 questões de cada área para gestão de tempo.</p>
          </div>
          <button
            type="button"
            onClick={() => onStartSimulado("treino-20")}
            className="rounded-xl bg-rose-500/20 border border-rose-500/30 px-4 py-2.5 text-xs font-bold text-rose-200 hover:bg-rose-500 hover:text-white transition cursor-pointer shrink-0"
          >
            Iniciar (20q) ➔
          </button>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 flex items-center justify-between">
          <div>
            <span className="text-[0.65rem] font-bold text-amber-300 uppercase block">Aquecimento • 30 min</span>
            <h4 className="font-bold text-white text-base mt-0.5">Mini-Simulado de Aquecimento (10q)</h4>
            <p className="text-xs text-rose-200/60 mt-0.5">Sprint diário com 10 questões rápidas interdisciplinares.</p>
          </div>
          <button
            type="button"
            onClick={() => onStartSimulado("aquecimento-10")}
            className="rounded-xl bg-amber-500/20 border border-amber-500/30 px-4 py-2.5 text-xs font-bold text-amber-200 hover:bg-amber-500 hover:text-amber-950 transition cursor-pointer shrink-0"
          >
            Iniciar (10q) ➔
          </button>
        </div>
      </div>

      {/* ═══ 4. HISTÓRICO DE SIMULADOS ANTERIORES ═══ */}
      <div className="rounded-3xl border border-white/10 bg-[#120a16] p-5 sm:p-7 shadow-xl">
        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
          <div>
            <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
              <RotateCcw size={18} className="text-rose-400" />
              <span>Histórico de Simulados Realizados</span>
            </h3>
            <p className="text-xs text-rose-200/60 mt-0.5">
              Acompanhe a evolução da sua nota TRI prova a prova rumo à aprovação.
            </p>
          </div>
          <span className="text-xs font-bold text-rose-300">
            {simuladosHistory.length} registros
          </span>
        </div>

        {simuladosHistory.length === 0 ? (
          <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-8 text-center text-xs text-rose-200/60">
            <CheckCircle2 size={32} className="text-rose-400/40 mx-auto mb-2" />
            <p className="font-medium text-white/80">Nenhum simulado finalizado ainda.</p>
            <p className="mt-1">Escolha uma das modalidades acima de 90 questões ou cadernos de área para gerar seu primeiro diagnóstico oficial!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {simuladosHistory.slice().reverse().map((sim, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:bg-white/[0.04] transition"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-white">
                      {sim.modalityName}
                    </span>
                    <span className="rounded-full bg-rose-500/20 px-2 py-0.2 text-[0.6rem] font-bold text-rose-300">
                      {sim.overallAccuracy}% acertos
                    </span>
                  </div>
                  <span className="text-[0.65rem] text-rose-200/50">
                    {new Date(sim.completedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })} • {sim.totalCorrect}/{sim.totalQuestions} questões
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-[0.6rem] text-rose-200/50 block">Nota TRI</span>
                    <strong className="text-xl font-display font-black text-white">
                      {sim.overallTRIScore} pts
                    </strong>
                  </div>

                  {onViewHistoricResult && (
                    <button
                      type="button"
                      onClick={() => onViewHistoricResult(sim)}
                      className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-white hover:bg-white/15 transition cursor-pointer flex items-center gap-1"
                    >
                      <span>Ver Relatório</span>
                      <ChevronRight size={14} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
