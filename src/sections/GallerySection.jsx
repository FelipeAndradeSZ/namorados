import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { loveStory } from "../config/loveStory";
import { SectionHeading } from "../components/ui/SectionHeading";

const cardLayouts = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedMoment = selectedIndex !== null ? loveStory.gallery[selectedIndex] : null;

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((curr) => (curr !== null ? (curr > 0 ? curr - 1 : loveStory.gallery.length - 1) : null));
  }, []);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    setSelectedIndex((curr) => (curr !== null ? (curr < loveStory.gallery.length - 1 ? curr + 1 : 0) : null));
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") handlePrev();
      if (event.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <section
      id="momentos"
      className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[70rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-800/10 blur-[140px]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Nossa coleção de instantes"
          title="Momentos que eu guardaria para sempre."
          description="Cada foto é uma pequena máquina do tempo. Toque em uma lembrança para chegar mais perto."
          align="center"
        />

        <div className="mt-16 grid auto-rows-[18rem] gap-4 md:grid-cols-3 md:auto-rows-[16rem]">
          {loveStory.gallery.map((moment, index) => (
            <motion.button
              type="button"
              key={moment.title}
              onClick={() => setSelectedIndex(index)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              whileHover={{ y: -8, scale: 1.008 }}
              className={`immersive-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#21121e] text-left shadow-2xl ${cardLayouts[index] || "md:col-span-1 md:row-span-1"}`}
            >
              <img
                src={moment.image}
                alt={moment.title}
                loading="lazy"
                style={{ objectPosition: moment.position }}
                className="absolute inset-0 h-full w-full object-cover brightness-[0.88] saturate-[0.9] transition duration-700 group-hover:scale-110 group-hover:brightness-100 group-hover:saturate-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160b14] via-[#160b14]/20 to-transparent" />
              <div className="absolute inset-0 bg-rose-900/10 mix-blend-color" />
              <span className="gallery-card-shine pointer-events-none absolute inset-0" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="mb-2 text-[0.6rem] font-semibold tracking-[0.2em] text-rose-100/55 uppercase">
                    {moment.date}
                  </p>
                  <h3 className="font-display text-3xl text-white">
                    {moment.title}
                  </h3>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 bg-black/15 text-white backdrop-blur-xl transition group-hover:rotate-45 group-hover:bg-rose-100 group-hover:text-[#2a1020]">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMoment ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Foto: ${selectedMoment.title}`}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[90] grid place-items-center bg-[#0c060b]/90 p-4 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.92, rotateX: 6 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, y: 20, scale: 0.96, rotateX: 3 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              onClick={(event) => event.stopPropagation()}
              className="immersive-card relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-[#1a0e18] shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
            >
              {/* Botão Fechar */}
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-4 top-4 z-30 grid size-11 place-items-center rounded-full border border-white/15 bg-black/40 text-white backdrop-blur-xl hover:bg-rose-500/80 transition"
                aria-label="Fechar imagem"
              >
                <X size={18} />
              </button>

              {/* Botões de Navegação Anterior / Próxima */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 grid size-10 sm:size-12 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-rose-500/80 active:scale-95"
                aria-label="Foto anterior"
                title="Foto anterior (Seta esquerda)"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 grid size-10 sm:size-12 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-xl transition hover:scale-110 hover:bg-rose-500/80 active:scale-95"
                aria-label="Próxima foto"
                title="Próxima foto (Seta direita)"
              >
                <ChevronRight size={22} />
              </button>

              <div className="grid md:grid-cols-[1.35fr_0.65fr]">
                <div className="relative overflow-hidden bg-black/30">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedIndex}
                      src={selectedMoment.image}
                      alt={selectedMoment.title}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3 }}
                      style={{ objectPosition: selectedMoment.position }}
                      className="h-[45vh] w-full object-cover md:h-[70vh]"
                    />
                  </AnimatePresence>
                </div>

                <div className="flex flex-col justify-between p-7 sm:p-10">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-rose-300/60 uppercase">
                        {selectedMoment.date}
                      </p>
                      <span className="text-[0.65rem] font-medium tracking-wider text-rose-200/40">
                        {selectedIndex + 1} / {loveStory.gallery.length}
                      </span>
                    </div>
                    <h3 className="font-display mt-4 text-3xl text-white sm:text-4xl">
                      {selectedMoment.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-rose-50/55">
                      {selectedMoment.caption}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-rose-100/40">
                    <span>Use as setas do teclado (← / →)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
