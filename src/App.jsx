import { AnimatePresence, motion } from "framer-motion";
import { AppShell } from "./components/layout/AppShell";
import { LoveIntro } from "./components/intro/LoveIntro";
import { Navigation } from "./components/layout/Navigation";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { LoveMarquee } from "./components/motion/LoveMarquee";
import { FinalSection } from "./sections/FinalSection";
import { FutureSection } from "./sections/FutureSection";
import { TripSection } from "./sections/TripSection";
import { TripPlannerSection } from "./sections/TripPlannerSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { LetterSection } from "./sections/LetterSection";
import { TimelineSection } from "./sections/TimelineSection";
import { useExperience } from "./context/useExperience";

function App() {
  const { hasEntered } = useExperience();

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <LoveIntro key="intro" />
        ) : (
          <motion.div
            key="experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <ScrollProgress />
            <Navigation />
            <main className="relative z-10">
              <HeroSection />
              <LoveMarquee />
              <TimelineSection />
              <GallerySection />
              <LetterSection />
              <FutureSection />
              <TripSection />
              <TripPlannerSection />
              <FinalSection />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </AppShell>
  );
}

export default App;
