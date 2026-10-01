import { useCallback, useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import { ExperienceContext } from "./experience-context";

export function ExperienceProvider({ children }) {
  const [hasEntered, setHasEntered] = useState(false);
  const [effectsEnabled, setEffectsEnabled] = useState(true);
  const [isWorld3DOpen, setIsWorld3DOpen] = useState(false);

  const enterExperience = useCallback(() => setHasEntered(true), []);
  const resetExperience = useCallback(() => setHasEntered(false), []);
  const toggleEffects = useCallback(() => setEffectsEnabled((current) => !current), []);
  const openWorld3D = useCallback(() => setIsWorld3DOpen(true), []);
  const closeWorld3D = useCallback(() => setIsWorld3DOpen(false), []);

  const value = useMemo(
    () => ({
      hasEntered,
      effectsEnabled,
      isWorld3DOpen,
      enterExperience,
      resetExperience,
      toggleEffects,
      openWorld3D,
      closeWorld3D,
    }),
    [
      effectsEnabled,
      hasEntered,
      isWorld3DOpen,
      enterExperience,
      resetExperience,
      toggleEffects,
      openWorld3D,
      closeWorld3D,
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
