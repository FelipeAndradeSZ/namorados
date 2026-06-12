import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, Pause, Sparkles, X } from "lucide-react";
import { loveStory } from "../../config/loveStory";
import { useExperience } from "../../context/useExperience";

const links = [
  { href: "#historia", label: "Nossa história" },
  { href: "#momentos", label: "Momentos" },
  { href: "#carta", label: "Carta" },
  { href: "#futuro", label: "Nosso futuro" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { effectsEnabled, toggleEffects } = useExperience();

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-[70] px-4 pt-4 sm:px-8 sm:pt-6"
      >
        <nav className="nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#140b14]/55 px-3 py-3 shadow-2xl shadow-black/10 backdrop-blur-2xl sm:px-6">
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="Voltar ao início"
          >
            <motion.span
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-rose-300 to-rose-500 text-[#2b0d1c] shadow-lg shadow-rose-500/20"
            >
              <Heart size={15} fill="currentColor" />
            </motion.span>
            <span className="font-display hidden text-lg tracking-wide text-rose-50 min-[350px]:inline">
              {loveStory.initials}
            </span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-xs font-medium tracking-[0.14em] text-rose-50/55 uppercase transition-colors hover:text-rose-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleEffects}
              className="interactive-orb grid size-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-rose-100/65 transition hover:border-rose-200/25 hover:bg-rose-200/10 hover:text-rose-100"
              aria-label={
                effectsEnabled ? "Pausar efeitos visuais" : "Ativar efeitos visuais"
              }
              title={
                effectsEnabled ? "Pausar efeitos visuais" : "Ativar efeitos visuais"
              }
            >
              {effectsEnabled ? <Pause size={15} /> : <Sparkles size={16} />}
            </button>

            <a
              href="#carta"
              className="nav-heart-cta hidden rounded-full border border-rose-200/20 bg-rose-200/10 px-5 py-2.5 text-xs font-semibold tracking-wide text-rose-50 transition hover:border-rose-200/40 hover:bg-rose-200/15 lg:block"
            >
              Abrir meu coração
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="grid size-10 place-items-center rounded-full border border-white/10 bg-white/5 md:hidden"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-[#100810]/95 px-8 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="font-display text-4xl text-rose-50"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
