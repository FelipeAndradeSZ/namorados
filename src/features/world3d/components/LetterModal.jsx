import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MailOpen, X } from "lucide-react";

/**
 * Modal exibido ao clicar na Carta de Amor 3D
 * Apresenta a carta romântica com tipografia suave e animação de fade-in.
 */
export function LetterModal({ data, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

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
          initial={{ scale: 0.88, opacity: 0, y: 25 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 25 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          className="relative max-h-[88vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-rose-200/25 bg-gradient-to-b from-[#220f20]/95 to-[#160a15]/95 p-6 sm:p-8 text-white shadow-[0_25px_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botão Fechar */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-10 grid size-9 place-items-center rounded-full border border-rose-200/20 bg-white/5 text-rose-200 hover:bg-rose-200/15 hover:text-white transition"
            aria-label="Fechar carta"
          >
            <X size={18} />
          </button>

          {/* Selo do Topo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="grid size-11 place-items-center rounded-full bg-gradient-to-tr from-rose-500 to-red-400 text-white shadow-lg shadow-rose-500/30">
              <MailOpen size={20} />
            </div>
            <div>
              <span className="text-[11px] font-semibold tracking-widest text-rose-300/70 uppercase">
                {data.date || "Mensagem do Coração"}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-rose-100">
                {data.title}
              </h3>
            </div>
          </div>

          {/* Divisória Decorativa */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-rose-200/25 to-transparent mb-6" />

          {/* Conteúdo da Carta */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-rose-50/85 font-light">
            {data.paragraphs?.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Assinatura */}
          <div className="mt-8 pt-5 border-t border-rose-200/15 flex items-center justify-between">
            <div className="flex items-center gap-2 text-rose-300">
              <Heart size={16} fill="currentColor" />
              <span className="text-xs tracking-wider uppercase opacity-80">Para Sempre</span>
            </div>
            <p className="font-display italic text-lg sm:text-xl text-rose-200">
              {data.signature}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
