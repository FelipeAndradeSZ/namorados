import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.035,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 18, filter: "blur(7px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export function RevealText({ text, className = "" }) {
  const words = text.split(" ");

  return (
    <motion.p
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.65 }}
      aria-label={text}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          variants={wordAnimation}
          aria-hidden="true"
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </motion.p>
  );
}
