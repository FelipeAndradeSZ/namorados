import { motion } from "framer-motion";
import { useLoveCounter } from "./useLoveCounter";

const units = [
  { key: "days", label: "dias" },
  { key: "hours", label: "horas" },
  { key: "minutes", label: "minutos" },
  { key: "seconds", label: "segundos" },
];

function CounterUnit({ value, label, index, compact }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.35 + index * 0.08 }}
      className={`group relative min-w-0 rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.09] ${
        compact ? "p-3 sm:p-4" : "p-4 sm:p-5"
      }`}
    >
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-rose-200/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span
        className={`font-display block tabular-nums text-white ${
          compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-4xl"
        }`}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span
        className={`mt-1 block font-medium text-rose-100/50 uppercase ${
          compact
            ? "text-[0.48rem] tracking-[0.08em] sm:text-[0.65rem] sm:tracking-[0.14em]"
            : "text-[0.65rem] tracking-[0.18em] sm:text-xs"
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}

export function LoveCounter({ startDate, compact = false }) {
  const elapsedTime = useLoveCounter(startDate);

  if (!elapsedTime.isValid) {
    return (
      <p className="text-sm text-rose-200">
        Defina uma data válida para iniciar o nosso contador.
      </p>
    );
  }

  return (
    <section
      aria-label="Tempo que estamos juntos"
      className={compact ? "grid items-center gap-3 lg:grid-cols-[auto_1fr]" : "max-w-3xl"}
    >
      <p
        className={`text-xs font-semibold tracking-[0.22em] text-rose-200/60 uppercase ${
          compact ? "px-2 text-center lg:max-w-24 lg:text-left" : "mb-4"
        }`}
      >
        Casados há
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((unit, index) => (
          <CounterUnit
            key={unit.key}
            value={elapsedTime[unit.key]}
            label={unit.label}
            index={index}
            compact={compact}
          />
        ))}
      </div>
    </section>
  );
}
