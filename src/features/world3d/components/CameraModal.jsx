import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, Sparkles, X } from "lucide-react";

/**
 * Modal exibido ao clicar na Câmera Instantânea 3D
 * Contém um carrossel / galeria de fotos com legenda sobre o início do namoro.
 */
export function CameraModal({ data, onClose }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && data?.photos?.length > 1) {
        setCurrentIdx((prev) => (prev - 1 + data.photos.length) % data.photos.length);
      }
      if (e.key === "ArrowRight" && data?.photos?.length > 1) {
        setCurrentIdx((prev) => (prev + 1) % data.photos.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, data?.photos?.length]);

  if (!data) return null;

  const currentPhoto = data.photos[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % data.photos.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + data.photos.length) % data.photos.length);
  };

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
          initial={{ scale: 0.88, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-rose-200/20 bg-[#190c18]/95 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.7)] text-white backdrop-blur-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Botão Fechar */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 grid size-9 place-items-center rounded-full border border-rose-200/20 bg-white/5 text-rose-200 hover:bg-rose-200/15 hover:text-white transition"
            aria-label="Fechar modal"
          >
            <X size={18} />
          </button>

          {/* Cabeçalho */}
          <div className="flex items-center gap-3 mb-4">
            <div className="grid size-10 place-items-center rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 text-white shadow-lg shadow-rose-500/25">
              <Camera size={20} />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-rose-100">
                {data.title}
              </h3>
              <p className="text-xs text-rose-200/60">{data.subtitle}</p>
            </div>
          </div>

          {/* Descrição curta */}
          <p className="text-xs sm:text-sm text-rose-100/80 leading-relaxed mb-4 bg-rose-500/10 border border-rose-300/10 p-3 rounded-2xl">
            {data.description}
          </p>

          {/* Moldura da Foto Estilo Polaroid / Recordação */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#120811] p-3 shadow-inner">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/40">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIdx}
                  src={currentPhoto.url}
                  alt={currentPhoto.caption}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Botões de Navegação da Foto */}
              {data.photos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 grid size-8 place-items-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-rose-500/80 transition"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 grid size-8 place-items-center rounded-full bg-black/60 text-white backdrop-blur hover:bg-rose-500/80 transition"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>

            {/* Legenda da Foto */}
            <div className="mt-3 flex items-center justify-between text-xs text-rose-100/90 px-1">
              <span className="flex items-center gap-1.5 font-medium">
                <Sparkles size={13} className="text-rose-300" />
                {currentPhoto.caption}
              </span>
              <span className="text-[11px] text-rose-200/50">
                {currentIdx + 1} / {data.photos.length}
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
