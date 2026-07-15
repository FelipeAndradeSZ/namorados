import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ClipboardList, Calendar } from "lucide-react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TripChecklist } from "../features/trip-checklist/TripChecklist";
import { TripItinerary } from "../features/trip-itinerary/TripItinerary";
import { useChecklist } from "../hooks/useChecklist";
import { useItinerary } from "../hooks/useItinerary";

export function TripPlannerSection() {
  const [activeTab, setActiveTab] = useState("checklist");
  const [currentUser, setCurrentUser] = useState(() => {
    return localStorage.getItem("namorados-active-user") || "F";
  });

  const { 
    items, 
    loading: checklistLoading, 
    addItem, 
    toggleItem, 
    deleteItem 
  } = useChecklist();

  const {
    days,
    activities,
    loading: itineraryLoading,
    updateDayTitle,
    addActivity,
    updateActivity,
    deleteActivity
  } = useItinerary();

  useEffect(() => {
    localStorage.setItem("namorados-active-user", currentUser);
  }, [currentUser]);

  return (
    <section
      id="planejamento"
      className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[65rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-700/[0.04] blur-[140px]" />

      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Nosso Planejamento"
          title="Preparando cada detalhe."
          description="Aqui nós organizamos nossas malas, preparamos os documentos e montamos a nossa programação especial para os dias em Vitória. Tudo salvo em tempo real."
          align="center"
        />

        {/* User Identity Selector */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <p className="text-[0.65rem] font-semibold tracking-wider text-rose-100/40 uppercase">
            Quem está planejando agora?
          </p>
          <div className="relative flex rounded-xl border border-white/5 bg-white/[0.02] p-1.5 shadow-2xl">
            <button
              onClick={() => setCurrentUser("F")}
              className={`relative rounded-lg px-6 py-2.5 text-xs font-bold transition-all ${
                currentUser === "F" ? "text-[#2a1020]" : "text-rose-100/60"
              }`}
            >
              {currentUser === "F" && (
                <motion.span
                  layoutId="active-user-pill"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-rose-200 to-rose-300"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Felipe 🩷</span>
            </button>
            <button
              onClick={() => setCurrentUser("B")}
              className={`relative rounded-lg px-6 py-2.5 text-xs font-bold transition-all ${
                currentUser === "B" ? "text-[#2a1020]" : "text-rose-100/60"
              }`}
            >
              {currentUser === "B" && (
                <motion.span
                  layoutId="active-user-pill"
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-rose-200 to-rose-300"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">Beatriz 🩵</span>
            </button>
          </div>
        </div>

        {/* Tab Switcher (Checklist vs. Roteiro) */}
        <div className="mt-10 flex justify-center border-b border-white/5 pb-px">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("checklist")}
              className={`relative flex items-center gap-2 pb-4 text-sm font-semibold tracking-wider transition-all ${
                activeTab === "checklist" ? "text-rose-200" : "text-rose-100/40"
              }`}
            >
              <ClipboardList size={16} />
              <span>Checklist</span>
              {activeTab === "checklist" && (
                <motion.span
                  layoutId="active-planner-tab"
                  className="absolute bottom-0 inset-x-0 h-0.5 bg-rose-300"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("itinerary")}
              className={`relative flex items-center gap-2 pb-4 text-sm font-semibold tracking-wider transition-all ${
                activeTab === "itinerary" ? "text-rose-200" : "text-rose-100/40"
              }`}
            >
              <Calendar size={16} />
              <span>Roteiro Dia-a-Dia</span>
              {activeTab === "itinerary" && (
                <motion.span
                  layoutId="active-planner-tab"
                  className="absolute bottom-0 inset-x-0 h-0.5 bg-rose-300"
                />
              )}
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {activeTab === "checklist" ? (
              <motion.div
                key="checklist-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                <TripChecklist
                  items={items}
                  loading={checklistLoading}
                  addItem={addItem}
                  toggleItem={toggleItem}
                  deleteItem={deleteItem}
                  currentUser={currentUser}
                />
              </motion.div>
            ) : (
              <motion.div
                key="itinerary-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
              >
                <TripItinerary
                  days={days}
                  activities={activities}
                  loading={itineraryLoading}
                  updateDayTitle={updateDayTitle}
                  addActivity={addActivity}
                  updateActivity={updateActivity}
                  deleteActivity={deleteActivity}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mt-12 flex max-w-3xl items-center justify-center gap-3 rounded-full border border-rose-100/10 bg-rose-100/[0.04] px-6 py-4 text-center text-sm text-rose-100/55 backdrop-blur-xl"
        >
          <Heart
            size={14}
            className="shrink-0 text-rose-300"
            fill="currentColor"
          />
          <span>Cada detalhe planejado com muito amor por nós dois.</span>
        </motion.div>
      </div>
    </section>
  );
}
