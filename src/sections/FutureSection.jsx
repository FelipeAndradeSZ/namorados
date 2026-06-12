import { motion } from "framer-motion";
import { GraduationCap, Heart, House, Plane, Sparkles } from "lucide-react";
import { loveStory } from "../config/loveStory";
import { SectionHeading } from "../components/ui/SectionHeading";

const iconMap = {
  graduation: GraduationCap,
  plane: Plane,
  home: House,
};

export function FutureSection() {
  return (
    <section
      id="futuro"
      className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[65rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-700/[0.08] blur-[140px]" />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tudo que ainda nos espera"
          title="Nossos próximos sonhos."
          description="Não quero apenas imaginar o futuro com você. Quero estar presente em cada conquista, viagem, mudança e pequeno dia comum que ainda vamos viver."
          align="center"
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {loveStory.future.map((dream, index) => {
            const Icon = iconMap[dream.icon];

            return (
              <motion.article
                key={dream.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.008 }}
                className="immersive-card group relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl shadow-black/10 backdrop-blur-xl sm:p-9"
              >
                <span className="card-sheen pointer-events-none absolute inset-0 z-20" />
                <div className="absolute -right-16 -top-16 size-52 rounded-full border border-rose-100/[0.06] transition-transform duration-700 group-hover:scale-125" />
                <div className="absolute -right-8 -top-8 size-32 rounded-full border border-rose-100/[0.08] transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute -left-20 bottom-[-7rem] size-52 rounded-full bg-rose-500/0 blur-[70px] transition-colors duration-700 group-hover:bg-rose-500/10" />

                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    delay: index * 0.55,
                    ease: "easeInOut",
                  }}
                  className="relative grid size-16 place-items-center rounded-2xl border border-rose-200/15 bg-rose-200/[0.09] text-rose-200 shadow-[0_12px_35px_rgba(251,113,133,0.1)]"
                >
                  <Icon size={27} />
                </motion.span>

                <div className="relative mt-20">
                  <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-rose-300/60 uppercase">
                    {dream.eyebrow}
                  </p>
                  <h3 className="font-display mt-4 text-3xl leading-tight text-white sm:text-4xl">
                    {dream.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-rose-50/52 sm:text-base">
                    {dream.description}
                  </p>
                </div>

                <motion.span
                  animate={{ rotate: [0, 12, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.8,
                  }}
                  className="absolute bottom-7 right-7 text-rose-300/35"
                >
                  {index === 2 ? (
                    <Heart size={18} fill="currentColor" />
                  ) : (
                    <Sparkles size={18} />
                  )}
                </motion.span>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 rounded-full border border-rose-100/10 bg-rose-100/[0.04] px-6 py-4 text-center text-sm text-rose-100/55 backdrop-blur-xl"
        >
          <Heart size={14} className="shrink-0 text-rose-300" fill="currentColor" />
          No mesmo barco, sonhando os mesmos sonhos.
        </motion.div>
      </div>
    </section>
  );
}
