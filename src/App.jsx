import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppShell } from "./components/layout/AppShell";
import { LoveIntro } from "./components/intro/LoveIntro";
import { Navigation } from "./components/layout/Navigation";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { LoveMarquee } from "./components/motion/LoveMarquee";
import { FinalSection } from "./sections/FinalSection";
import { FutureSection } from "./sections/FutureSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { LetterSection } from "./sections/LetterSection";
import { TimelineSection } from "./sections/TimelineSection";
import { useExperience } from "./context/useExperience";
import { MusicPlayer } from "./components/audio/MusicPlayer";
import { HeartBurst } from "./components/effects/HeartBurst";

// PERF-02: Lazy-load heavy sections so Leaflet (~150kB) and Firebase (~560kB)
// do not block the initial page load or inflate the entry bundle.
const TripSection = lazy(() =>
  import("./sections/TripSection").then((m) => ({ default: m.TripSection }))
);
const TripPlannerSection = lazy(() =>
  import("./sections/TripPlannerSection").then((m) => ({ default: m.TripPlannerSection }))
);
const Destino1000App = lazy(() => import("./features/destino1000/Destino1000App"));

function App() {
  const { hasEntered, isGameOpen, closeGame } = useExperience();

  return (
    <AppShell>
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <LoveIntro key="intro" />
        ) : isGameOpen ? (
          <motion.div
            key="destino-1000"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 overflow-hidden bg-[#0b0c1e]"
          >
            <Suspense
              fallback={
                <div className="flex h-full w-full flex-col items-center justify-center bg-[#0b0c1e] text-rose-200">
                  <div className="size-10 animate-spin rounded-full border-2 border-rose-300 border-t-transparent mb-4" />
                  <p className="font-display text-lg">Decolando no Destino 1000... ✈️</p>
                </div>
              }
            >
              <Destino1000App onBack={closeGame} />
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
              <Suspense
                fallback={
                  <div className="flex min-h-[300px] items-center justify-center">
                    <div className="size-8 animate-spin rounded-full border-2 border-rose-400/40 border-t-rose-400" />
                  </div>
                }
              >
                <TripSection />
              </Suspense>
              <Suspense
                fallback={
                  <div className="flex min-h-[300px] items-center justify-center">
                    <div className="size-8 animate-spin rounded-full border-2 border-rose-400/40 border-t-rose-400" />
                  </div>
                }
              >
                <TripPlannerSection />
              </Suspense>
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
