import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

/**
 * Componente de Explosão de Corações (Heart Burst)
 * - Dispara corações flutuantes ao clicar no botão "Enviar Amor" ou em qualquer elemento interativo
 * - Salva a contagem de toques de carinho em localStorage para o casal
 */
export function HeartBurst() {
  const [hearts, setHearts] = useState([]);
  const [heartCount, setHeartCount] = useState(() => {
    return parseInt(localStorage.getItem("namorados-heart-count") || "120", 10);
  });

  const sendLove = useCallback((e) => {
    const rect = e?.currentTarget?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 60;
    const y = rect ? rect.top : window.innerHeight - 80;

    const newHearts = Array.from({ length: 7 }, (_, i) => ({
      id: `${Date.now()}-${i}-${Math.random()}`,
      x: x + (Math.random() - 0.5) * 60,
      y: y + (Math.random() - 0.5) * 20,
      size: 16 + Math.random() * 20,
      driftX: (Math.random() - 0.5) * 120,
      rotate: (Math.random() - 0.5) * 60,
      duration: 1.2 + Math.random() * 0.8,
      color: ["#fb7185", "#f43f5e", "#fda4af", "#ec4899", "#f472b6"][Math.floor(Math.random() * 5)]
    }));

    setHearts((prev) => [...prev.slice(-30), ...newHearts]);
    setHeartCount((prev) => {
      const next = prev + 1;
      localStorage.setItem("namorados-heart-count", String(next));
      return next;
    });
  }, []);

  // Remove corações antigos após animação
  useEffect(() => {
    if (hearts.length === 0) return;
    const timer = setTimeout(() => {
      setHearts((prev) => prev.slice(7));
    }, 2000);
    return () => clearTimeout(timer);
  }, [hearts]);

  return (
    <>
      {/* Botão Flutuante de Enviar Carinho */}
      <div className="fixed bottom-6 right-6 z-[60] select-none">
        <motion.button
          type="button"
          onClick={sendLove}
          whileTap={{ scale: 0.88 }}
          whileHover={{ scale: 1.08 }}
          className="group flex items-center gap-2 rounded-full border border-rose-300/30 bg-gradient-to-r from-rose-500/25 to-pink-500/25 px-4 py-2.5 text-xs font-semibold text-rose-100 shadow-[0_4px_25px_rgba(244,63,94,0.3)] backdrop-blur-xl transition-all cursor-pointer hover:border-rose-300 hover:bg-rose-500/40"
          title="Toque para enviar amor"
        >
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-rose-300"
          >
            <Heart size={16} fill="currentColor" />
          </motion.span>
          <span>{heartCount}</span>
        </motion.button>
      </div>

      {/* Partículas de Corações Flutuantes */}
      <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
        <AnimatePresence>
          {hearts.map((h) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 1, scale: 0.4, x: h.x, y: h.y }}
              animate={{
                opacity: 0,
                scale: [0.6, 1.3, 1],
                x: h.x + h.driftX,
                y: h.y - 180,
                rotate: h.rotate
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: h.duration, ease: "easeOut" }}
              style={{ position: "fixed", color: h.color }}
            >
              <Heart size={h.size} fill="currentColor" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
