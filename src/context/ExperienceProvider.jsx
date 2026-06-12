import { useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import { ExperienceContext } from "./experience-context";

export function ExperienceProvider({ children }) {
  const [hasEntered, setHasEntered] = useState(false);
  const [effectsEnabled, setEffectsEnabled] = useState(true);

  const value = useMemo(
    () => ({
      hasEntered,
      effectsEnabled,
      enterExperience: () => setHasEntered(true),
      resetExperience: () => setHasEntered(false),
      toggleEffects: () => setEffectsEnabled((current) => !current),
    }),
    [effectsEnabled, hasEntered],
  );

  return (
    <ExperienceContext.Provider value={value}>
      <MotionConfig
        reducedMotion={effectsEnabled ? "never" : "always"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </MotionConfig>
    </ExperienceContext.Provider>
  );
}
