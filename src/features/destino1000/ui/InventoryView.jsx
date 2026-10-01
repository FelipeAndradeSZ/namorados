import { Sparkles, Bookmark, BookOpen } from "lucide-react";

export function InventoryView({ playerState }) {
  const { inventory = {}, location = {} } = playerState;
  const { postaisColecionados = [], lembrancas = [], repertoriosAnotados = [] } = inventory;
  const { visitedCities = [] } = location;

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
        
        {/* Álbum de Postais e Colecionáveis */}
        <div className="rounded-3xl border border-white/10 bg-[#140b14]/90 p-5 sm:p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={18} className="text-amber-400" />
              <h3 className="font-display text-lg text-white">Postais & Lembranças</h3>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {postaisColecionados.map((postal, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
                  <span className="text-2xl block mb-1">🏛️</span>
                  <strong className="text-xs text-white block capitalize">{postal.replace(/-/g, ' ')}</strong>
                  <span className="text-[0.65rem] text-rose-300/70">Postal Exclusivo</span>
                </div>
              ))}

              {lembrancas.map((lembranca, idx) => (
                <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
                  <span className="text-2xl block mb-1">🎁</span>
                  <strong className="text-xs text-white block">{lembranca}</strong>
                  <span className="text-[0.65rem] text-rose-300/70">Item Raro</span>
                </div>
              ))}
            </div>

            {postaisColecionados.length === 0 && lembrancas.length === 0 && (
              <p className="text-xs text-rose-200/60 leading-relaxed py-4 text-center">
                A mochila ainda está leve. Continue explorando as cidades e completando missões para encontrar itens raros!
              </p>
            )}
          </div>

          <div className="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-center text-[0.65rem] text-rose-200/40">
            {visitedCities.length} de 15 Cidades Visitadas
          </div>
        </div>

        {/* Repertório Sociocultural (Redação) */}
        <div className="rounded-3xl border border-white/10 bg-[#160a16] p-5 sm:p-6 shadow-xl flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-rose-400" />
            <h3 className="font-display text-lg text-white">Diário de Bordo (Repertórios)</h3>
          </div>

          <p className="text-xs text-rose-200/60 leading-relaxed mb-4">
            Anotações de ouro coletadas durante a viagem para brilhar na Redação do ENEM.
          </p>

          <div className="flex flex-col gap-3 flex-1">
            {repertoriosAnotados.map((rep) => (
              <div 
                key={rep.id}
                className="rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-950/30 to-pink-950/20 p-4 shadow-sm"
              >
                <div className="flex items-center justify-between text-[0.65rem] text-rose-300 font-semibold mb-1">
                  <span>{rep.area}</span>
                </div>
                <strong className="text-sm text-white block mb-1">{rep.autor}</strong>
                <p className="text-xs sm:text-sm text-rose-50/90 leading-relaxed font-serif italic">
                  "{rep.conceito}"
                </p>
              </div>
            ))}

            {repertoriosAnotados.length === 0 && (
              <div className="text-center text-white/40 text-sm py-4">
                Diário em branco.
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
