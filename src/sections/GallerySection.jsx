import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
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
  const [selectedMoment, setSelectedMoment] = useState(null);

  useEffect(() => {
    if (!selectedMoment) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedMoment(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedMoment]);

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
              onClick={() => setSelectedMoment(moment)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              whileHover={{ y: -8, scale: 1.008 }}
              className={`immersive-card group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#21121e] text-left shadow-2xl ${cardLayouts[index]}`}
            >
              <img
                src={moment.image}
                alt=""
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
            onClick={() => setSelectedMoment(null)}
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
              <button
                type="button"
                onClick={() => setSelectedMoment(null)}
                className="absolute right-4 top-4 z-10 grid size-11 place-items-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl"
                aria-label="Fechar imagem"
              >
                <X size={18} />
              </button>
              <div className="grid md:grid-cols-[1.35fr_0.65fr]">
                <img
                  src={selectedMoment.image}
                  alt={selectedMoment.title}
                  style={{ objectPosition: selectedMoment.position }}
                  className="h-[45vh] w-full object-cover md:h-[70vh]"
                />
                <div className="flex flex-col justify-end p-7 sm:p-10">
                  <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-rose-300/60 uppercase">
                    {selectedMoment.date}
                  </p>
                  <h3 className="font-display mt-4 text-4xl text-white sm:text-5xl">
                    {selectedMoment.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-rose-50/55">
                    {selectedMoment.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
