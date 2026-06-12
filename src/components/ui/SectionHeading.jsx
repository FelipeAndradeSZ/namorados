import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const isCentered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`section-heading relative ${
        isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }`}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${
          isCentered ? "justify-center" : ""
        }`}
      >
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="h-px w-8 origin-right bg-gradient-to-r from-transparent to-rose-300/65"
        />
        <p className="text-xs font-semibold tracking-[0.3em] text-rose-300/70 uppercase">
          {eyebrow}
        </p>
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="h-px w-8 origin-left bg-gradient-to-r from-rose-300/65 to-transparent"
        />
      </div>

      <div className="overflow-hidden pb-2">
        <motion.h2
          initial={{ y: "105%", rotate: 1.5 }}
          whileInView={{ y: 0, rotate: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl leading-[1.05] text-balance text-white sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h2>
      </div>
      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className={`mt-6 text-base leading-8 text-rose-50/55 sm:text-lg ${
            isCentered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
