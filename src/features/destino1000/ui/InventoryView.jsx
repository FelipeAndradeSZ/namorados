import { Heart, Sparkles, Bookmark } from "lucide-react";

export function InventoryView({ playerState }) {
  const { loveNotes = [] } = playerState;

  return (
    <div className="mx-auto max-w-5xl px-3 py-6 sm:px-6">
      
      {/* Título */}
      <div className="mb-6 border-b border-white/10 pb-4">
        <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase flex items-center gap-1.5">
          <Bookmark size={14} />
          <span>Inventário da Expedicionária</span>
        </span>
        <h2 className="font-display text-2xl sm:text-3xl text-white mt-1">
          Mochila de Viagem & Lembranças
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        
        {/* Cartas e Mensagens Especiais do Felipe */}
        <div className="rounded-3xl border border-white/10 bg-[#160a16] p-5 sm:p-6 shadow-xl flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Heart size={18} className="text-rose-400" fill="currentColor" />
            <h3 className="font-display text-lg text-white">Bilhetes de Carinho do Felipe ❤️</h3>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            {loveNotes.map((note) => (
              <div 
                key={note.id}
                className="rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-950/30 to-pink-950/20 p-4 shadow-sm"
              >
                <div className="flex items-center justify-between text-[0.65rem] text-rose-300 font-semibold mb-1">
                  <span>De: {note.sender}</span>
                  <span className="rounded bg-rose-500/20 px-2 py-0.5 text-rose-200">
                    Desbloqueado no Nível {note.unlockedAtLevel}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-rose-50/90 leading-relaxed font-serif italic mt-1.5">
                  "{note.message}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Álbum de Postais e Colecionáveis */}
        <div className="rounded-3xl border border-white/10 bg-[#140b14]/90 p-5 sm:p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-amber-400" />
              <h3 className="font-display text-lg text-white">Postais & Lembranças Coletadas</h3>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Postal de Vitória */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
                <span className="text-2xl block mb-1">🏛️</span>
                <strong className="text-xs text-white block">Convento da Penha</strong>
                <span className="text-[0.65rem] text-rose-300/70">Vitória - ES</span>
              </div>

              {/* Lembrança Camburi */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
                <span className="text-2xl block mb-1">🐚</span>
                <strong className="text-xs text-white block">Concha de Camburi</strong>
                <span className="text-[0.65rem] text-rose-300/70">Lembrança da Praia</span>
              </div>
            </div>

            <p className="text-xs text-rose-200/60 leading-relaxed">
              À medida que você viaja para cidades como São Paulo, Rio de Janeiro e Salvador, novos postais históricos e selos raros de expedição serão adicionados à sua mochila!
            </p>
          </div>

          <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center text-[0.65rem] text-rose-200/40">
            2 de 27 Lembranças Estaduais Desbloqueadas
          </div>
        </div>

      </div>

    </div>
  );
}
