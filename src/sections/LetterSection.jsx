import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, MailOpen, X } from "lucide-react";
import { ProgressiveLetter } from "../components/letter/ProgressiveLetter";
import { SectionHeading } from "../components/ui/SectionHeading";

function AnimatedHeart() {
  return (
    <motion.div
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      className="relative mx-auto grid size-24 place-items-center"
      aria-hidden="true"
    >
      <motion.span
        animate={{ scale: [0.8, 1.7], opacity: [0.35, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-3 rounded-full border border-rose-300"
      />
      <Heart
        size={54}
        className="relative text-rose-400 drop-shadow-[0_8px_18px_rgba(244,63,94,0.25)]"
        fill="currentColor"
      />
    </motion.div>
  );
}

export function LetterSection() {
  const [isOpen, setIsOpen] = useState(
    () => new URLSearchParams(window.location.search).get("letter") === "open",
  );
  const closeButtonRef = useRef(null);

  const closeLetter = useCallback(() => {
    setIsOpen(false);

    const url = new URL(window.location.href);
    if (url.searchParams.has("letter")) {
      url.searchParams.delete("letter");
      window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const closeOnEscape = (event) => {
      if (event.key === "Escape") closeLetter();
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [closeLetter, isOpen]);

  return (
    <section id="carta" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="O coração deste lugar"
          title="É dificil as vezes colocar em palavras o tanto que sinto por ti."
          description=""
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          className="immersive-card relative mx-auto mt-16 max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] px-5 py-16 shadow-[0_40px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-10 sm:py-20"
        >
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(251,207,232,0.22),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(244,63,94,0.14),transparent_32%)]" />
          <span className="card-sheen pointer-events-none absolute inset-0 z-20" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="envelope-scene group mx-auto block w-full max-w-[30rem] py-16"
              aria-label="Abrir carta para Beatriz"
            >
              <div className="envelope">
                <div className="envelope-back" />
                <div className="envelope-letter">
                  <span>Para Beatriz, meu amor</span>
                  <Heart size={24} fill="currentColor" />
                </div>
                <div className="envelope-front-left" />
                <div className="envelope-front-right" />
                <div className="envelope-front-bottom" />
                <div className="envelope-flap" />
                <span className="envelope-seal">
                  <Heart size={20} fill="currentColor" />
                </span>
              </div>
            </button>

            <div className="relative text-center lg:text-left">
              <p className="text-xs font-semibold tracking-[0.25em] text-rose-300/55 uppercase">
                Correspondência confidencial
              </p>
              <h3 className="font-display mt-4 text-4xl leading-tight text-white sm:text-5xl">
                Uma carta que espera pelo seu toque.
              </h3>
              <p className="mt-5 text-base leading-8 text-rose-50/50">
                Sem pressa. Algumas palavras merecem ser descobertas devagar,
                como quem abre um presente guardado há muito tempo.
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-rose-100 px-6 py-4 text-sm font-semibold text-[#2a1020] shadow-xl shadow-rose-500/15 transition hover:-translate-y-1 hover:bg-white"
              >
                <MailOpen size={18} />
                Abrir minha carta
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLetter}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#0c060b]/94 p-4 py-8 backdrop-blur-xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Carta de amor para Beatriz"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLetter}
              className="fixed right-4 top-4 z-[110] grid size-12 place-items-center rounded-full border border-white/15 bg-[#24121f]/90 text-white shadow-xl backdrop-blur-xl transition hover:scale-105 hover:bg-rose-100 hover:text-[#4b283a] sm:right-7 sm:top-7"
              aria-label="Fechar carta"
            >
              <X size={20} />
            </button>

            <motion.article
              initial={{ opacity: 0, y: 70, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 130, damping: 22 }}
              onClick={(event) => event.stopPropagation()}
              className="letter-paper relative mx-auto w-full max-w-3xl rounded-sm bg-[#fffaf5] px-6 pb-16 pt-10 text-[#4b283a] shadow-[0_50px_160px_rgba(0,0,0,0.65)] sm:px-14 sm:pb-20"
            >
              <AnimatedHeart />
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px flex-1 bg-[#7b415b]/15" />
                <Heart size={14} className="text-rose-400" fill="currentColor" />
                <span className="h-px flex-1 bg-[#7b415b]/15" />
              </div>
              <ProgressiveLetter />
            </motion.article>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
