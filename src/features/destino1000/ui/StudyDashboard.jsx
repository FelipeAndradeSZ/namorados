import { Target, BookOpen, GraduationCap, Clock, Award } from "lucide-react";

export function StudyDashboard({ 
  playerState, 
  onStartQuickSession, 
  onStartSimulado, 
  onGoToTrilha 
}) {
  const { profile, masteryMatrix } = playerState;

  return (
    <div className="mx-auto max-w-5xl px-3 py-6 sm:px-6">
      
      {/* Saudação e Resumo */}
      <div className="mb-8 border-b border-white/10 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <span className="text-xs font-semibold tracking-widest text-emerald-400 uppercase flex items-center gap-1.5">
            <GraduationCap size={14} />
            <span>Painel de Estudos Principal</span>
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-white mt-1">
            Olá, {profile.name}! Pronta para treinar?
          </h2>
          <p className="text-sm text-white/60 mt-1">
            Seu foco atual é Medicina. Rumo aos 800+ e Redação Nota 1000.
          </p>
        </div>
        
        <div className="text-right">
          <span className="text-[0.7rem] uppercase tracking-wider text-rose-300 font-bold">Nível Atual</span>
          <div className="text-xl font-black text-white">{profile.level}</div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        
        {/* Painel Central: Ações de Estudo Imediatas */}
        <div className="md:col-span-8 flex flex-col gap-4">
          <h3 className="font-bold text-white mb-2 flex items-center gap-2">
            <Target size={18} className="text-rose-400" />
            O Que Fazer Agora
          </h3>

          {/* Card Principal: Trilha / Missão Atual */}
          <button 
            onClick={onGoToTrilha}
            className="w-full text-left rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-950/40 to-pink-900/20 p-5 sm:p-6 shadow-xl hover:border-rose-400/50 hover:bg-rose-900/30 transition group relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-32 h-32 bg-rose-500/10 blur-3xl rounded-full" />
            <div className="flex justify-between items-start mb-2">
              <span className="text-[0.65rem] uppercase tracking-widest text-rose-300 font-bold bg-rose-500/20 px-2 py-1 rounded">
                Recomendado
              </span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-1">Continuar Trilha de Estudos</h4>
            <p className="text-sm text-rose-100/70 max-w-sm mb-4">
              Siga o currículo gamificado. Resolva missões focadas, aprenda teoria na prática e avance pelas cidades do Brasil.
            </p>
            <span className="inline-flex items-center gap-2 text-rose-300 text-sm font-semibold group-hover:translate-x-1 transition-transform">
              Abrir Trilha <span aria-hidden="true">&rarr;</span>
            </span>
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {/* Card: Tiro Rápido */}
            <button 
              onClick={() => onStartQuickSession(10)}
              className="text-left rounded-xl border border-white/10 bg-[#160a16] p-4 sm:p-5 hover:border-emerald-500/30 hover:bg-emerald-950/20 transition group"
            >
              <div className="size-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Clock size={20} />
              </div>
              <h4 className="font-bold text-white mb-1">Tenho 10 Minutos</h4>
              <p className="text-xs text-white/50 leading-relaxed">
                Treino rápido com poucas questões mistas. Ideal para filas, ônibus ou aquecimento mental.
              </p>
            </button>

            {/* Card: Simulado */}
            <button 
              onClick={() => onStartSimulado(45)}
              className="text-left rounded-xl border border-white/10 bg-[#160a16] p-4 sm:p-5 hover:border-amber-500/30 hover:bg-amber-950/20 transition group"
            >
              <div className="size-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <BookOpen size={20} />
              </div>
              <h4 className="font-bold text-white mb-1">Simulado 45 Questões</h4>
              <p className="text-xs text-white/50 leading-relaxed">
                Prova de fogo. Simula um caderno inteiro do ENEM. Teste seu foco e resistência (+2h).
              </p>
            </button>
          </div>
        </div>

        {/* Painel Lateral: Status Resumido */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <h3 className="font-bold text-white mb-2 flex items-center gap-2">
            <Award size={18} className="text-sky-400" />
            Visão Geral
          </h3>

          <div className="rounded-2xl border border-white/10 bg-[#140b14] p-5 shadow-lg flex flex-col gap-5">
            <div>
              <span className="text-[0.65rem] text-white/50 uppercase tracking-wider block mb-1">Sequência Ativa</span>
              <div className="text-2xl font-black text-rose-400 flex items-center gap-2">
                🔥 {profile.streakDays} dias
              </div>
            </div>

            <div>
              <span className="text-[0.65rem] text-white/50 uppercase tracking-wider block mb-2">Desempenho por Área</span>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-300">Natureza</span>
                  <span className="text-xs text-white">{masteryMatrix.natureza || 50}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-sky-300">Matemática</span>
                  <span className="text-xs text-white">{masteryMatrix.matematica || 50}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-300">Humanas</span>
                  <span className="text-xs text-white">{masteryMatrix.humanas || 50}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-rose-300">Linguagens</span>
                  <span className="text-xs text-white">{masteryMatrix.linguagens || 50}%</span>
                </div>
              </div>
            </div>
            
          </div>

          <div className="rounded-xl border border-rose-500/20 bg-rose-950/20 p-4 text-center mt-auto">
             <p className="font-serif italic text-xs text-rose-200/80 leading-relaxed">
               "A genialidade é 1% inspiração e 99% transpiração. Continue treinando!"
             </p>
          </div>

        </div>

      </div>
    </div>
  );
}
