import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const phrases = Array.from({ length: 8 }, () => "Eu te amo infinitamente");

export function LoveMarquee() {
  const items = [...phrases, ...phrases];

  return (
    <div className="love-marquee relative z-10 overflow-hidden border-y border-white/[0.07] bg-white/[0.025] py-4 backdrop-blur-xl">
      <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#100810] to-transparent" />
      <span className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#100810] to-transparent" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex w-max items-center"
        aria-hidden="true"
      >
        {items.map((phrase, index) => (
          <span
            key={`${phrase}-${index}`}
            className="flex shrink-0 items-center gap-7 px-7"
          >
            <span className="font-display text-xl italic text-rose-100/65 sm:text-2xl">
              {phrase}
            </span>
            {index % 2 === 0 ? (
              <Heart size={11} className="text-rose-300/55" fill="currentColor" />
            ) : (
              <Sparkles size={12} className="text-rose-300/55" />
            )}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
