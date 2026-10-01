import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, VolumeX, Pause, Sparkles } from "lucide-react";
import { useExperience } from "../../context/useExperience";
import { loveStory } from "../../config/loveStory";

/**
 * Player de Música Ambiente / Trilha Sonora Romântica
 * - Suporta arquivo de áudio via loveStory.soundtrack.url
 * - Fallback inteligente com sintetizador Web Audio API de acordes suaves (funciona 100% offline!)
 * - Pausa automaticamente ao entrar no Jogo da Viagem
 * - Respeita as políticas de autoplay dos navegadores (ativa no primeiro clique)
 */
export function MusicPlayer() {
  const { isGameOpen } = useExperience();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const audioRef = useRef(null);
  const synthCtxRef = useRef(null);
  const synthTimerRef = useRef(null);

  const track = loveStory.soundtrack || {
    title: "Nossa Trilha Sonora",
    artist: "Felipe & Beatriz",
    url: "",
  };

  // Sintetizador Web Audio API (acordes suaves e etéreos como música de caixa de música/piano)
  const startAmbientSynth = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      if (!synthCtxRef.current) {
        synthCtxRef.current = new AudioCtx();
      }
      const ctx = synthCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Escala pentatônica romântica suave (C, D, E, G, A em frequências quentes)
      const notes = [261.63, 329.63, 392.00, 440.00, 523.25, 659.25];
      let step = 0;

      const playChord = () => {
        if (!synthCtxRef.current || synthCtxRef.current.state !== "running") return;
        const now = ctx.currentTime;
        const note = notes[step % notes.length];
        step++;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(note, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(0.06, now + 0.4);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 3.4);
      };

      playChord();
      synthTimerRef.current = window.setInterval(playChord, 1800);
    } catch (e) {
      console.warn("Web Audio ambient synth não disponível:", e);
    }
  }, []);

  const stopAmbientSynth = useCallback(() => {
    if (synthTimerRef.current) {
      clearInterval(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (synthCtxRef.current && synthCtxRef.current.state === "running") {
      synthCtxRef.current.suspend();
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      stopAmbientSynth();
      setIsPlaying(false);
    } else {
      if (track.url && audioRef.current) {
        audioRef.current.play().catch(() => {
          // Se o arquivo falhar ou não existir, usa o sintetizador ambiente
          startAmbientSynth();
        });
      } else {
        startAmbientSynth();
      }
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  // Pausa música ao abrir o Jogo da Viagem
  useEffect(() => {
    if (isGameOpen && isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      stopAmbientSynth();
    } else if (!isGameOpen && isPlaying) {
      if (track.url && audioRef.current) {
        audioRef.current.play().catch(() => startAmbientSynth());
      } else {
        startAmbientSynth();
      }
    }
  }, [isGameOpen, isPlaying, track.url, startAmbientSynth, stopAmbientSynth]);

  useEffect(() => {
    return () => {
      stopAmbientSynth();
      if (synthCtxRef.current) {
        synthCtxRef.current.close().catch(() => {});
      }
    };
  }, [stopAmbientSynth]);

  return (
    <div className="fixed bottom-6 left-6 z-[60] select-none">
      {track.url && (
        <audio
          ref={audioRef}
          src={track.url}
          loop
          preload="none"
          muted={isMuted}
        />
      )}

      <motion.div
        layout
        className="flex items-center gap-2 rounded-full border border-white/10 bg-[#160a16]/85 p-1.5 shadow-2xl backdrop-blur-xl transition-all"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {/* Botão Principal Play/Pause */}
        <button
          type="button"
          onClick={togglePlay}
          className={`grid size-10 place-items-center rounded-full transition-all cursor-pointer ${
            isPlaying
              ? "bg-gradient-to-tr from-rose-500 to-pink-400 text-white shadow-lg shadow-rose-500/30"
              : "border border-white/10 bg-white/5 text-rose-200 hover:bg-rose-500/20"
          }`}
          aria-label={isPlaying ? "Pausar música" : "Tocar nossa música"}
          title={isPlaying ? "Pausar trilha sonora" : "Tocar trilha sonora"}
        >
          {isPlaying ? <Pause size={16} /> : <Music size={16} />}
        </button>

        {/* Informações da Música e Visualizer */}
        <AnimatePresence>
          {(expanded || isPlaying) && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-3 overflow-hidden px-2 whitespace-nowrap"
            >
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-rose-100 leading-tight flex items-center gap-1.5">
                  <Sparkles size={11} className="text-rose-300" />
                  {track.title}
                </span>
                <span className="text-[9px] text-rose-200/50 uppercase tracking-widest">
                  {isPlaying ? "Tocando agora..." : track.artist}
                </span>
              </div>

              {/* Ondas Sonoras Animadas */}
              {isPlaying && (
                <div className="flex items-end gap-0.5 h-4 px-1" aria-hidden="true">
                  {[0.3, 0.7, 0.4, 0.9, 0.5].map((delay, idx) => (
                    <motion.span
                      key={idx}
                      animate={{ height: ["4px", "14px", "6px", "12px", "4px"] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: delay * 0.4,
                        ease: "easeInOut"
                      }}
                      className="w-[2.5px] rounded-full bg-rose-400"
                    />
                  ))}
                </div>
              )}

              {/* Botão de Mute */}
              <button
                type="button"
                onClick={toggleMute}
                className="cursor-pointer text-rose-200/50 hover:text-rose-100 p-1 transition"
                aria-label={isMuted ? "Desmutar som" : "Mutar som"}
                title={isMuted ? "Ativar som" : "Silenciar"}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
