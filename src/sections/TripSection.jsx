import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Heart, Ticket } from "lucide-react";
import { loveStory } from "../config/loveStory";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TripCountdown } from "../features/trip-countdown/TripCountdown";
import { FlightMap } from "../features/trip-countdown/FlightMap";

function formatTime(isoDate) {
  const d = new Date(isoDate);
  return d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

function formatDate(isoDate) {
  const d = new Date(isoDate);
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export function TripSection() {
  const [activeFlight, setActiveFlight] = useState("ida");
  
  const currentFlight = activeFlight === "ida" ? loveStory.trip : loveStory.returnTrip;

  return (
    <section
      id="viagem"
      className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[32rem] w-[65rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-700/[0.06] blur-[140px]" />

      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Próxima aventura"
          title="Vitória nos espera."
          description="Cada dia que passa é um dia a menos para a nossa próxima viagem juntos. Mal posso esperar para viver isso com você."
          align="center"
        />

        {/* Boarding Pass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <div className="immersive-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/10 backdrop-blur-xl">
            <span className="card-sheen pointer-events-none absolute inset-0 z-20" />

            {/* Top bar — booking code & badge */}
            <div className="flex items-center justify-between border-b border-dashed border-white/10 px-6 py-4 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-full bg-rose-300/10 text-rose-200">
                  <Ticket size={16} />
                </span>
                <div>
                  <p className="text-[0.6rem] font-semibold tracking-[0.2em] text-rose-200/50 uppercase">
                    Reserva
                  </p>
                  <p className="font-display text-lg tracking-wider text-white">
                    {currentFlight.bookingCode}
                  </p>
                </div>
              </div>
              
              {/* Ida / Volta Tab Selector */}
              <div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/5 rounded-full p-0.5">
                <button
                  onClick={() => setActiveFlight("ida")}
                  className={`rounded-full px-3 py-1 text-[0.6rem] font-semibold tracking-[0.1em] uppercase transition-all cursor-pointer ${
                    activeFlight === "ida"
                      ? "bg-rose-200 text-[#2a1020]"
                      : "text-rose-100/60 hover:text-rose-100"
                  }`}
                >
                  Ida
                </button>
                <button
                  onClick={() => setActiveFlight("volta")}
                  className={`rounded-full px-3 py-1 text-[0.6rem] font-semibold tracking-[0.1em] uppercase transition-all cursor-pointer ${
                    activeFlight === "volta"
                      ? "bg-rose-200 text-[#2a1020]"
                      : "text-rose-100/60 hover:text-rose-100"
                  }`}
                >
                  Volta
                </button>
              </div>
            </div>

            {/* Interactive flight map */}
            <FlightMap direction={activeFlight} />

            {/* Flight details — origin & destination */}
            <div className="relative border-t border-dashed border-white/10 px-6 py-6 sm:px-8 sm:py-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                {/* Origin */}
                <div className="text-left">
                  <p className="text-[0.55rem] font-semibold tracking-[0.2em] text-rose-200/40 uppercase">
                    Origem
                  </p>
                  <p className="font-display mt-1 text-3xl text-white sm:text-4xl">
                    {currentFlight.origin.code}
                  </p>
                  <p className="mt-1 text-sm font-medium text-rose-100/60">
                    {currentFlight.origin.city}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-rose-200/45">
                    <Clock size={12} />
                    <span className="text-xs tabular-nums">
                      {formatTime(currentFlight.departure)} · {formatDate(currentFlight.departure)}
                    </span>
                  </div>
                </div>

                {/* Destination */}
                <div className="text-right">
                  <p className="text-[0.55rem] font-semibold tracking-[0.2em] text-rose-200/40 uppercase">
                    Destino
                  </p>
                  <p className="font-display mt-1 text-3xl text-white sm:text-4xl">
                    {currentFlight.destination.code}
                  </p>
                  <p className="mt-1 text-sm font-medium text-rose-100/60">
                    {currentFlight.destination.city}
                  </p>
                  <div className="mt-2 flex items-center justify-end gap-1.5 text-rose-200/45">
                    <Clock size={12} />
                    <span className="text-xs tabular-nums">
                      {formatTime(currentFlight.arrival)} · {formatDate(currentFlight.arrival)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Passenger line */}
              <div className="mt-6 flex items-center justify-center gap-2 rounded-full border border-rose-100/10 bg-rose-100/[0.04] px-5 py-3">
                <MapPin size={13} className="text-rose-300/60" />
                <span className="text-xs font-medium text-rose-100/50">
                  Passageiros
                </span>
                <span className="font-display text-sm text-rose-50">
                  {loveStory.coupleName}
                </span>
              </div>
            </div>

            {/* Countdown section */}
            <div className="border-t border-dashed border-white/10 px-6 py-6 sm:px-8 sm:py-8">
              <TripCountdown departureDate={currentFlight.departure} />
            </div>
          </div>
        </motion.div>

        {/* Bottom motivational banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-3 rounded-full border border-rose-100/10 bg-rose-100/[0.04] px-6 py-4 text-center text-sm text-rose-100/55 backdrop-blur-xl"
        >
          <Heart
            size={14}
            className="shrink-0 text-rose-300"
            fill="currentColor"
          />
          {loveStory.trip.message}
        </motion.div>
      </div>
    </section>
  );
}
