import { useMemo } from "react";
import { motion } from "framer-motion";
import { useExperience } from "../../context/useExperience";

const stars = [
  { top: "12%", left: "8%", delay: 1, duration: 2.8 },
  { top: "28%", left: "62%", delay: 6, duration: 3.2 },
  { top: "52%", left: "24%", delay: 10, duration: 2.5 },
  { top: "18%", left: "78%", delay: 14, duration: 3 },
  { top: "72%", left: "55%", delay: 18, duration: 2.7 },
];

export function ShootingStars() {
  const { effectsEnabled } = useExperience();
  const shootingStars = useMemo(() => stars, []);

  if (!effectsEnabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden="true"
    >
      {shootingStars.map((star, index) => (
        <motion.span
          key={`${star.top}-${star.left}`}
          className="shooting-star absolute h-px w-24"
          style={{ top: star.top, left: star.left }}
          initial={{ x: -180, y: -120, opacity: 0 }}
          animate={{
            x: [-180, 540],
            y: [-120, 360],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay + index,
            repeat: Infinity,
            repeatDelay: 16,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
