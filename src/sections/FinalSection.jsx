import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import { loveStory } from "../config/loveStory";

export function FinalSection() {
  return (
    <footer className="relative overflow-hidden px-5 pb-8 pt-24 sm:px-8 sm:pt-32">
      <div className="absolute left-1/2 top-1/2 -z-10 size-[35rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-[120px]" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="final-card immersive-card mx-auto max-w-6xl rounded-[2.5rem] border border-white/10 bg-white/[0.045] px-6 py-20 text-center shadow-2xl backdrop-blur-2xl sm:px-10 sm:py-28"
      >
        <div className="relative mx-auto grid size-24 place-items-center">
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-rose-200/15"
          />
          <motion.span
            animate={{ scale: [0.8, 1.7], opacity: [0.32, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-4 rounded-full border border-rose-300/50"
          />
          <motion.span
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="relative grid size-16 place-items-center rounded-full bg-rose-300/10 text-rose-200 shadow-[0_0_45px_rgba(251,113,133,0.15)]"
          >
            <Heart size={25} fill="currentColor" />
          </motion.span>
        </div>
        <p className="mt-7 text-xs font-semibold tracking-[0.28em] text-rose-300/55 uppercase">
          Para hoje e para todos os amanhãs
        </p>
        <h2 className="font-display mx-auto mt-5 max-w-4xl text-5xl leading-[0.98] text-white sm:text-7xl lg:text-8xl">
          O meu lugar favorito sempre será
          <span className="hero-shimmer block bg-gradient-to-r from-rose-200 via-white to-pink-300 bg-clip-text italic text-transparent">
            ao seu lado.
          </span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-rose-50/50">
          Este site termina aqui. A nossa história, felizmente, não.
        </p>
        <a
          href="#inicio"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-rose-100/15 bg-rose-100/[0.07] px-6 py-4 text-sm font-semibold text-rose-50 transition hover:-translate-y-1 hover:bg-rose-100 hover:text-[#2a1020]"
        >
          Viver tudo outra vez
          <ArrowUp size={17} />
        </a>
      </motion.div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-3 px-2 text-center text-[0.65rem] tracking-[0.16em] text-rose-100/30 uppercase sm:flex-row sm:text-left">
        <span>{loveStory.initials} · Nosso universo particular</span>
        <span>Feito com amor e um pouco de magia</span>
      </div>
    </footer>
  );
}
