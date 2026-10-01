import { Volume2, VolumeX, ArrowLeft } from "lucide-react";
import { getLevelInfo } from "../core/gameState";

export function HUD({ playerState, onBack, isMuted, onToggleMute }) {
  const levelInfo = getLevelInfo(playerState.profile.currentXP);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0e0a14]/90 px-3 py-2.5 backdrop-blur-xl sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-4">
        
        {/* Lado Esquerdo: Voltar & Perfil */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <button
            type="button"
            onClick={onBack}
            className="grid size-9 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/5 text-rose-200 hover:bg-rose-500/20 transition cursor-pointer"
            aria-label="Voltar para a página inicial"
            title="Sair do Destino 1000"
          >
            <ArrowLeft size={18} />
          </button>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-semibold text-white text-sm sm:text-base truncate">
                {playerState.profile.name}
              </span>
              <span className="rounded-full bg-rose-500/20 px-2 py-0.5 text-[0.65rem] font-bold text-rose-300 border border-rose-500/30">
                Nível {levelInfo.level}
              </span>
            </div>
            
            {/* Barra de XP */}
            <div className="mt-1 flex items-center gap-2">
              <div className="h-1.5 w-20 sm:w-28 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-rose-400 to-pink-500 rounded-full transition-all duration-500"
                  style={{ width: `${levelInfo.progressPercent}%` }}
                />
              </div>
              <span className="text-[0.6rem] text-rose-200/60 hidden sm:inline">
                {levelInfo.progressPercent}% para o próximo nível
              </span>
            </div>
          </div>
        </div>

        {/* Centro / Direita: Recursos de Estudo & Foco */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          
          {/* Badge de Meta */}
          <div className="hidden md:flex items-center gap-1.5 rounded-xl border border-rose-500/20 bg-rose-500/10 px-2.5 py-1 text-xs text-rose-200">
            <span>🩺</span>
            <span className="font-semibold">Meta: Medicina ENEM</span>
          </div>

          {/* Sequência de Estudo (Streak) */}
          <div 
            className="flex items-center gap-1 rounded-xl border border-amber-500/20 bg-amber-500/10 px-2 py-1 text-xs font-semibold text-amber-300"
            title="Sequência de dias consecutivos estudando"
          >
            <span>🔥</span>
            <span>{playerState.profile.streakDays}d</span>
          </div>

          {/* XP de Aprendizado */}
          <div 
            className="flex items-center gap-1 rounded-xl border border-sky-500/20 bg-sky-500/10 px-2 py-1 text-xs font-semibold text-sky-300"
            title="Pontos de experiência acumulados com estudos"
          >
            <span>⚡</span>
            <span>{playerState.profile.currentXP} XP</span>
          </div>

          {/* Áudio Mudo */}
          <button
            type="button"
            onClick={onToggleMute}
            className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/5 text-rose-200/70 hover:text-white transition cursor-pointer"
            aria-label={isMuted ? "Ativar som" : "Desativar som"}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
        </div>

      </div>
    </header>
  );
}
