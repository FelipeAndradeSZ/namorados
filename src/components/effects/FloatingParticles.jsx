import { useMemo } from "react";
import { motion } from "framer-motion";
import { useExperience } from "../../context/useExperience";

function seededValue(seed) {
  const value = Math.sin(seed * 999) * 10000;
  return value - Math.floor(value);
}

export function FloatingParticles({ count = 24 }) {
  const { effectsEnabled } = useExperience();

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        left: `${seededValue(index + 1) * 100}%`,
        top: `${30 + seededValue(index + 8) * 80}%`,
        size: 5 + seededValue(index + 16) * 9,
        duration: 12 + seededValue(index + 24) * 14,
        delay: seededValue(index + 32) * -18,
        drift: (seededValue(index + 40) - 0.5) * 80,
        opacity: 0.12 + seededValue(index + 48) * 0.3,
        kind: index % 4 === 0 ? "heart" : "star",
      })),
    [count],
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className={
            particle.kind === "heart"
              ? "absolute text-rose-200"
              : "absolute rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.65)]"
          }
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.kind === "heart" ? "auto" : particle.size,
            height: particle.kind === "heart" ? "auto" : particle.size,
            fontSize: particle.size * 1.5,
            opacity: particle.opacity,
          }}
          initial={false}
          animate={
            !effectsEnabled
              ? { opacity: particle.opacity }
              : {
                  y: [0, -900],
                  x: [0, particle.drift, 0],
                  rotate: particle.kind === "heart" ? [0, 18, -12, 0] : 0,
                  opacity: [0, particle.opacity, particle.opacity, 0],
                }
          }
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {particle.kind === "heart" ? "♥" : null}
        </motion.span>
      ))}
    </div>
  );
}
