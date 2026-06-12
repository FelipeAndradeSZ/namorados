import { AuroraBackground } from "../effects/AuroraBackground";
import { FloatingParticles } from "../effects/FloatingParticles";
import { MouseSpotlight } from "../effects/MouseSpotlight";
import { ShootingStars } from "../effects/ShootingStars";
import { useExperience } from "../../context/useExperience";

export function AppShell({ children }) {
  const { effectsEnabled } = useExperience();

  return (
    <div
      className={`relative min-h-svh overflow-x-clip bg-[#100810] text-white ${
        effectsEnabled ? "" : "effects-paused"
      }`}
    >
      <AuroraBackground />
      <MouseSpotlight />
      <div className="noise-overlay pointer-events-none fixed inset-0 opacity-[0.035]" />
      <FloatingParticles />
      <ShootingStars />
      {children}
    </div>
  );
}
