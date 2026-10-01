import { useCallback, useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import { ExperienceContext } from "./experience-context";

export function ExperienceProvider({ children }) {
  const [hasEntered, setHasEntered] = useState(false);
  const [effectsEnabled, setEffectsEnabled] = useState(true);
  const [isGameOpen, setIsGameOpen] = useState(false);

  const enterExperience = useCallback(() => setHasEntered(true), []);
  const resetExperience = useCallback(() => setHasEntered(false), []);
  const toggleEffects = useCallback(() => setEffectsEnabled((current) => !current), []);
  const openGame = useCallback(() => setIsGameOpen(true), []);
  const closeGame = useCallback(() => setIsGameOpen(false), []);

  const value = useMemo(
    () => ({
      hasEntered,
      effectsEnabled,
      isGameOpen,
      enterExperience,
      resetExperience,
      toggleEffects,
      openGame,
      closeGame,
    }),
    [
      effectsEnabled,
      hasEntered,
      isGameOpen,
      enterExperience,
      resetExperience,
      toggleEffects,
      openGame,
      closeGame,
    ],
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
