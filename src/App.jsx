import { lazy, Suspense } from "react";
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
import { MusicPlayer } from "./components/audio/MusicPlayer";
import { HeartBurst } from "./components/effects/HeartBurst";

const Mundo3D = lazy(() => import("./features/world3d/Mundo3D"));

function App() {
  const { hasEntered, isWorld3DOpen, closeWorld3D } = useExperience();

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <LoveIntro key="intro" />
        ) : isWorld3DOpen ? (
          <motion.div
            key="mundo-3d"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-50 overflow-hidden bg-[#100810]"
          >
            <Suspense
              fallback={
                <div className="flex h-full w-full flex-col items-center justify-center bg-[#100810] text-rose-200">
                  <div className="size-10 animate-spin rounded-full border-2 border-rose-300 border-t-transparent mb-4" />
                  <p className="font-display text-lg">Carregando Nosso Mundo 3D...</p>
                </div>
              }
            >
              <Mundo3D onBack={closeWorld3D} />
            </Suspense>
          </motion.div>
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
            <MusicPlayer />
            <HeartBurst />
          </motion.div>
        )}
      </AnimatePresence>
    </AppShell>
  );
}

export default App;
