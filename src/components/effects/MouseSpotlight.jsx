import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useExperience } from "../../context/useExperience";

export function MouseSpotlight() {
  const { effectsEnabled } = useExperience();
  const pointerX = useMotionValue(-600);
  const pointerY = useMotionValue(-600);
  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 24, mass: 0.4 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 24, mass: 0.4 });
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${smoothX}px ${smoothY}px, rgba(251, 207, 232, 0.12), rgba(244, 114, 182, 0.035) 42%, transparent 72%)`;

  useEffect(() => {
    if (!effectsEnabled || window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [effectsEnabled, pointerX, pointerY]);

  if (!effectsEnabled) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] hidden mix-blend-screen md:block"
      style={{ background: spotlight }}
      aria-hidden="true"
    />
  );
}
