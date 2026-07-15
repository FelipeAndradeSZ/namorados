import { motion } from "framer-motion";
import { useTripCountdown } from "./useTripCountdown";

const units = [
  { key: "days", label: "dias" },
  { key: "hours", label: "horas" },
  { key: "minutes", label: "min" },
  { key: "seconds", label: "seg" },
];

function CountdownUnit({ value, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.08 }}
      className="group relative min-w-0 rounded-2xl border border-white/10 bg-white/[0.045] p-3 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.09] sm:p-4"
    >
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-rose-200/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="font-display block text-2xl tabular-nums text-white sm:text-3xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 block text-[0.48rem] font-medium tracking-[0.08em] text-rose-100/50 uppercase sm:text-[0.65rem] sm:tracking-[0.14em]">
        {label}
      </span>
    </motion.div>
  );
}

export function TripCountdown({ departureDate }) {
  const countdown = useTripCountdown(departureDate);

  if (!countdown.isValid) {
    return (
      <p className="text-sm text-rose-200">
        Defina uma data válida para a viagem.
      </p>
    );
  }

  if (countdown.isPast) {
    return (
      <div className="rounded-2xl border border-rose-300/20 bg-rose-300/10 px-6 py-4 text-center">
        <p className="font-display text-2xl text-rose-100">Boa viagem! ✈️💕</p>
        <p className="mt-1 text-sm text-rose-100/60">
          A aventura já começou!
        </p>
      </div>
    );
  }

  return (
    <section aria-label="Contagem regressiva para a viagem">
      <p className="mb-3 px-2 text-center text-xs font-semibold tracking-[0.22em] text-rose-200/60 uppercase">
        Contagem regressiva
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((unit, index) => (
          <CountdownUnit
            key={unit.key}
            value={countdown[unit.key]}
            label={unit.label}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
