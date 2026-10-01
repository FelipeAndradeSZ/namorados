import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Sparkles, Timer, X } from "lucide-react";

/**
 * Modal exibido ao clicar no Presente 3D
 * Apresenta a contagem regressiva para a próxima surpresa e a mensagem especial.
 */
export function PresentModal({ data, onClose }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (!data?.countdownTarget) return;

    const calculateTime = () => {
      const target = new Date(data.countdownTarget).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [data?.countdownTarget]);

  if (!data) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 25 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 25 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-rose-300/30 bg-gradient-to-b from-[#251022]/95 to-[#160a16]/95 p-6 sm:p-8 text-white shadow-[0_25px_80px_rgba(244,63,94,0.15)] backdrop-blur-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botão Fechar */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-full border border-rose-200/20 bg-white/5 text-rose-200 hover:bg-rose-200/15 hover:text-white transition"
            aria-label="Fechar surpresa"
          >
            <X size={18} />
          </button>

          {/* Cabeçalho */}
          <div className="flex items-center gap-3 mb-6">
            <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30">
              <Gift size={24} />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-rose-100">
                {data.title}
              </h3>
              <p className="text-xs text-rose-200/60">{data.subtitle}</p>
            </div>
          </div>

          {/* Destaque / Chamada */}
          <div className="rounded-2xl border border-rose-200/20 bg-rose-500/15 p-4 text-center mb-6">
            <p className="text-xs font-semibold tracking-wider text-rose-200 uppercase flex items-center justify-center gap-1.5 mb-1">
              <Sparkles size={14} className="text-amber-300" />
              {data.highlightMessage}
            </p>
          </div>

          {/* Contagem Regressiva */}
          <div className="mb-6">
            <div className="flex items-center gap-1.5 text-xs text-rose-200/70 mb-2 justify-center">
              <Timer size={14} />
              <span>Contagem para o embarque</span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              {[
                { label: "Dias", value: timeLeft.days },
                { label: "Horas", value: timeLeft.hours },
                { label: "Min", value: timeLeft.minutes },
                { label: "Seg", value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/5 p-2 sm:p-3"
                >
                  <span className="font-display block text-xl sm:text-2xl font-bold text-rose-100">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] text-rose-200/50 uppercase">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Mensagem Secreta */}
          <div className="rounded-2xl border border-white/10 bg-[#120713]/80 p-4 text-xs sm:text-sm leading-relaxed text-rose-50/90 mb-4">
            <p>{data.secretMessage}</p>
          </div>

          {/* Rodapé / Nota */}
          {data.extraNote && (
            <p className="text-center text-[11px] text-rose-300/60 italic flex items-center justify-center gap-1">
              <Heart size={12} fill="currentColor" />
              {data.extraNote}
            </p>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
