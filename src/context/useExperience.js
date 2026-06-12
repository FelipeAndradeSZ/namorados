import { useContext } from "react";
import { ExperienceContext } from "./experience-context";

export function useExperience() {
  const context = useContext(ExperienceContext);

  if (!context) {
    throw new Error("useExperience deve ser usado dentro de ExperienceProvider.");
  }

  return context;
}
