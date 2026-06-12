import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, Heart, Sparkles } from "lucide-react";
import { loveStory } from "../config/loveStory";
import { LoveCounter } from "../features/love-counter/LoveCounter";

const entrance = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export function HeroSection() {
  const sectionRef = useRef(null);
  const rotateXValue = useMotionValue(0);
  const rotateYValue = useMotionValue(0);
  const rotateX = useSpring(rotateXValue, { stiffness: 120, damping: 18 });
  const rotateY = useSpring(rotateYValue, { stiffness: 120, damping: 18 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.78], [1, 0]);

  const handlePointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    rotateYValue.set(x * 9);
    rotateXValue.set(y * -9);
  };

  const resetTilt = () => {
    rotateXValue.set(0);
    rotateYValue.set(0);
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-svh px-5 pb-12 pt-32 sm:px-8 sm:pb-16 lg:pt-36"
    >
      <div className="pointer-events-none absolute left-1/2 top-[18%] -z-10 size-[38rem] -translate-x-1/2 rounded-full border border-rose-100/[0.06] sm:size-[52rem]" />
      <div className="pointer-events-none absolute left-1/2 top-[18%] -z-10 size-[26rem] -translate-x-1/2 rounded-full border border-rose-100/[0.05] sm:size-[38rem]" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <motion.div
            style={{ y: contentY, opacity }}
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.11 }}
            className="relative z-10"
          >
            <motion.div
              variants={entrance}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-rose-100/15 bg-rose-100/[0.07] px-4 py-2 text-[0.65rem] font-semibold tracking-[0.22em] text-rose-100/75 uppercase backdrop-blur-xl sm:text-xs"
            >
              <motion.span
                animate={{ rotate: [0, 12, -8, 0], scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              >
                <Sparkles size={14} />
              </motion.span>
              {loveStory.hero.eyebrow}
            </motion.div>

            <motion.p
              variants={entrance}
              className="mb-4 text-sm font-medium tracking-[0.28em] text-rose-300/60 uppercase"
            >
              {loveStory.coupleName}
            </motion.p>

            <motion.h1
              variants={entrance}
              className="hero-title font-display max-w-4xl text-[clamp(2.8rem,7.3vw,7.3rem)] leading-[0.9] tracking-[-0.045em] text-white"
            >
              <span className="block">{loveStory.hero.title}</span>
              <span className="hero-shimmer mt-2 block bg-gradient-to-r from-rose-200 via-white to-rose-400 bg-clip-text pb-3 italic text-transparent">
                {loveStory.hero.highlight}
              </span>
            </motion.h1>

            <motion.p
              variants={entrance}
              className="mt-6 max-w-xl text-base leading-8 text-rose-50/58 sm:text-lg"
            >
              {loveStory.hero.description}
            </motion.p>

            <motion.div
              variants={entrance}
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <a
                href="#historia"
                className="hero-cta group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-rose-100 px-6 py-4 text-sm font-semibold text-[#2a1020] shadow-[0_16px_60px_rgba(251,113,133,0.22)] transition-transform hover:-translate-y-1"
              >
                <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-rose-300 to-pink-200 transition-transform duration-500 group-hover:translate-y-0" />
                <span className="relative">Entrar no nosso universo</span>
                <ArrowDown
                  className="relative transition-transform group-hover:translate-y-1"
                  size={17}
                />
              </a>
              <span className="flex items-center gap-2 text-xs text-rose-100/45">
                <Heart size={14} fill="currentColor" />
                Feito com amor para meu momor
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: visualY, opacity }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="hero-visual relative mx-auto h-[27rem] w-full max-w-[24rem] sm:h-[32rem] sm:max-w-[28rem] lg:h-[35rem] lg:max-w-[31rem]"
          >
            <div className="absolute inset-8 rounded-full border border-rose-100/10" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-rose-100/10"
            >
              <span className="absolute left-1/2 top-0 grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-rose-100/20 bg-[#281320] text-rose-200 shadow-xl">
                <Heart size={15} fill="currentColor" />
              </span>
            </motion.div>

            <motion.div
              onPointerMove={handlePointerMove}
              onPointerLeave={resetTilt}
              style={{
                rotateX,
                rotateY,
                transformPerspective: 1200,
                transformStyle: "preserve-3d",
              }}
              className="absolute left-[12%] top-[7%] h-[76%] w-[65%] rotate-[-4deg] overflow-hidden rounded-[2rem] border border-white/15 bg-[#21121e] p-2.5 shadow-[0_40px_100px_rgba(0,0,0,0.45)] sm:p-3"
            >
              <img
                src={loveStory.hero.image}
                alt="Felipe e Beatriz juntos"
                fetchPriority="high"
                style={{ objectPosition: loveStory.hero.imagePosition }}
                className="h-full w-full rounded-[1.5rem] object-cover saturate-[0.9]"
              />
              <div className="absolute inset-2.5 rounded-[1.5rem] bg-gradient-to-t from-[#1b0b16]/85 via-transparent to-rose-100/5 sm:inset-3" />
              <div className="absolute bottom-7 left-7 right-7 sm:bottom-8 sm:left-8 sm:right-8">
                <p className="font-display text-3xl text-white">Nós.</p>
                <p className="mt-1 text-[0.6rem] tracking-[0.18em] text-rose-100/65 uppercase sm:text-xs">
                  meu lugar favorito é ao seu lado
                </p>
              </div>
              <span className="photo-glint pointer-events-none absolute inset-0" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0], rotate: [5, 2, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-[27%] hidden w-40 rounded-2xl border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-2xl sm:block lg:w-44"
            >
              <p className="font-display text-4xl text-rose-100">∞</p>
              <p className="mt-2 text-sm leading-6 text-rose-50/65">
                Planos, sonhos e uma vida toda ao seu lado.
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 9, 0], rotate: [-4, -2, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[6%] left-0 rounded-2xl border border-rose-200/15 bg-[#2c1626]/85 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-5 sm:py-4"
            >
              <p className="text-[0.55rem] font-semibold tracking-[0.2em] text-rose-200/55 uppercase sm:text-[0.65rem]">
                Minha certeza
              </p>
              <p className="font-display mt-1 text-xl text-white sm:text-2xl">
                Sempre você.
              </p>
            </motion.div>

            <motion.span
              animate={{ y: [0, -16, 0], scale: [1, 1.18, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute right-[9%] top-[5%] grid size-9 place-items-center rounded-full border border-rose-100/15 bg-rose-300/10 text-rose-200 backdrop-blur-xl"
            >
              <Sparkles size={14} />
            </motion.span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="relative z-20 mt-8 sm:mt-10 lg:mt-4"
        >
          <div className="counter-glow rounded-[1.6rem] border border-white/10 bg-[#1a0e18]/70 p-3 shadow-2xl backdrop-blur-2xl sm:p-4">
            <LoveCounter startDate={loveStory.relationshipStart} compact />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
