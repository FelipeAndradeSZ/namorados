import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { loveStory } from "../../config/loveStory";
import { useExperience } from "../../context/useExperience";

const loadingDuration = 3200;

export function LoveIntro() {
  const { enterExperience } = useExperience();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startedAt = performance.now();
    let animationFrame;
    let completionTimer;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startedAt;
      const nextProgress = Math.min(100, Math.round((elapsed / loadingDuration) * 100));

      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrame = window.requestAnimationFrame(updateProgress);
        return;
      }

      completionTimer = window.setTimeout(enterExperience, 550);
    };

    animationFrame = window.requestAnimationFrame(updateProgress);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(completionTimer);
    };
  }, [enterExperience]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const fillY = 100 - progress;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(12px)",
        transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[200] grid place-items-center overflow-hidden bg-[#100810]"
    >
      <div className="intro-grid absolute inset-0 opacity-30" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute size-[28rem] rounded-full border border-dashed border-rose-200/10 sm:size-[38rem]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute size-[21rem] rounded-full border border-rose-100/[0.07] sm:size-[29rem]"
      />
      <div className="intro-aura absolute size-[22rem] rounded-full bg-rose-500/15 blur-[90px] sm:size-[30rem]" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex items-center gap-2 text-[0.62rem] font-semibold tracking-[0.32em] text-rose-200/55 uppercase sm:text-xs"
        >
          <Sparkles size={13} />
          Preparando nosso universo
          <Sparkles size={13} />
        </motion.div>

        <motion.div
          initial={{ scale: 0.72, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 110, damping: 14 }}
          className="relative size-40 sm:size-48"
        >
          <motion.span
            animate={{ scale: [0.82, 1.22], opacity: [0.4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute inset-5 rounded-full border border-rose-300/40"
          />
          <svg
            viewBox="0 0 120 110"
            className="relative size-full overflow-visible drop-shadow-[0_18px_45px_rgba(244,63,94,0.28)]"
            aria-label={`Carregando: ${progress}%`}
          >
            <defs>
              <linearGradient id="intro-heart-gradient" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#e11d48" />
                <stop offset="52%" stopColor="#fb7185" />
                <stop offset="100%" stopColor="#fecdd3" />
              </linearGradient>
              <clipPath id="heart-shape">
                <path d="M60 102C54 94 14 69 8 41C3 17 20 4 38 7C49 9 56 17 60 25C64 17 71 9 82 7C100 4 117 17 112 41C106 69 66 94 60 102Z" />
              </clipPath>
            </defs>
            <path
              d="M60 102C54 94 14 69 8 41C3 17 20 4 38 7C49 9 56 17 60 25C64 17 71 9 82 7C100 4 117 17 112 41C106 69 66 94 60 102Z"
              fill="rgba(255,255,255,0.035)"
              stroke="rgba(254,205,211,0.32)"
              strokeWidth="2"
            />
            <rect
              x="0"
              y={fillY * 1.1}
              width="120"
              height={110}
              fill="url(#intro-heart-gradient)"
              clipPath="url(#heart-shape)"
            />
            <path
              d="M60 102C54 94 14 69 8 41C3 17 20 4 38 7C49 9 56 17 60 25C64 17 71 9 82 7C100 4 117 17 112 41C106 69 66 94 60 102Z"
              fill="none"
              stroke="rgba(255,255,255,0.65)"
              strokeWidth="1.4"
            />
          </svg>
        </motion.div>

        <div className="mt-7 min-w-28">
          <p className="font-display text-4xl tabular-nums text-white sm:text-5xl">
            {String(progress).padStart(2, "0")}
            <span className="ml-1 text-xl text-rose-200/55">%</span>
          </p>
          <div className="mt-4 h-px w-full overflow-hidden bg-white/10">
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-rose-500 via-rose-200 to-white"
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="font-display mt-8 text-xl italic text-rose-50/65 sm:text-2xl"
        >
          {loveStory.initials} · para sempre nós dois
        </motion.p>
      </div>
    </motion.div>
  );
}
