import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import { loveStory } from "../config/loveStory";
import { SectionHeading } from "../components/ui/SectionHeading";

export function TimelineSection() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 70%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      id="historia"
      className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-200/15 to-transparent" />
      <div className="absolute left-[-15rem] top-[35%] -z-10 size-[35rem] rounded-full bg-rose-700/[0.07] blur-[120px]" />
      <div className="absolute right-[-15rem] top-[65%] -z-10 size-[35rem] rounded-full bg-pink-700/[0.06] blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Nossa história"
          title="De um match improvável ao nosso para sempre."
          description="Ela procurava amizade. Eu já quase não responderia. Entre um filme, uma pista de boliche, flores, distância e reencontros, a vida encontrou um jeito bonito de nos trazer até aqui."
        />

        <div ref={timelineRef} className="relative mt-20 sm:mt-28">
          <div className="absolute bottom-0 left-[1.35rem] top-0 w-px bg-white/10 md:left-1/2" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-[1.35rem] top-0 w-px origin-top bg-gradient-to-b from-rose-300 via-pink-400 to-rose-100 md:left-1/2"
          />

          <div className="space-y-12 md:space-y-8">
            {loveStory.timeline.map((moment, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={`${moment.date}-${moment.title}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative grid md:grid-cols-2"
                >
                  <div
                    className={`ml-16 md:ml-0 ${
                      isLeft
                        ? "md:col-start-1 md:pr-16"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -8, scale: 1.008 }}
                      transition={{ type: "spring", stiffness: 240, damping: 22 }}
                      className={`immersive-card group relative overflow-hidden rounded-[1.8rem] border shadow-2xl shadow-black/15 backdrop-blur-xl ${
                        moment.current
                          ? "border-rose-200/25 bg-rose-200/[0.08]"
                          : moment.accent
                            ? "border-rose-200/15 bg-white/[0.065]"
                            : "border-white/10 bg-white/[0.045]"
                      }`}
                    >
                      <span className="card-sheen pointer-events-none absolute inset-0 z-20" />
                      <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-6 py-5 sm:px-8">
                        <span className="flex items-center gap-2 rounded-full border border-rose-100/10 bg-rose-100/[0.05] px-3 py-2 text-[0.58rem] font-semibold tracking-[0.18em] text-rose-100/65 uppercase">
                          {moment.current ? (
                            <Sparkles size={11} />
                          ) : (
                            <Heart size={10} fill="currentColor" />
                          )}
                          {moment.tag}
                        </span>
                        <span className="font-display text-2xl text-rose-100/15">
                          {moment.number}
                        </span>
                      </div>

                      <div className="relative p-6 sm:p-8">
                        <span className="absolute -right-2 -top-10 font-display text-[7rem] leading-none text-white/[0.035] transition-colors group-hover:text-rose-200/[0.07]">
                          {moment.number}
                        </span>
                        <p className="relative text-[0.65rem] font-semibold tracking-[0.23em] text-rose-300/65 uppercase">
                          {moment.date}
                        </p>
                        <h3 className="font-display relative mt-4 text-3xl leading-tight text-white sm:text-4xl">
                          {moment.title}
                        </h3>
                        <p className="relative mt-4 text-sm leading-7 text-rose-50/55 sm:text-base">
                          {moment.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute left-[1.35rem] top-12 -translate-x-1/2 md:left-1/2">
                    {moment.current ? (
                      <motion.span
                        animate={{ scale: [0.75, 1.65], opacity: [0.4, 0] }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        className="absolute inset-0 rounded-full border border-rose-300/55"
                      />
                    ) : null}
                    <motion.span
                      whileInView={{ scale: [0.7, 1.15, 1] }}
                      viewport={{ once: true }}
                      className={`grid size-11 place-items-center rounded-full border text-rose-100 shadow-[0_0_35px_rgba(251,113,133,0.18)] ${
                        moment.current
                          ? "border-rose-100/40 bg-rose-400/30"
                          : "border-rose-200/25 bg-[#24101f]"
                      }`}
                    >
                      {moment.number === "∞" ? (
                        <span className="font-display text-xl">∞</span>
                      ) : (
                        <span className="text-[0.65rem] font-bold tracking-wider">
                          {moment.number}
                        </span>
                      )}
                    </motion.span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
