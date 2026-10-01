import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Compass, Heart, Loader2, Sparkles } from "lucide-react";
import { IslandScene } from "./components/IslandScene";
import { CameraModal } from "./components/CameraModal";
import { LetterModal } from "./components/LetterModal";
import { PresentModal } from "./components/PresentModal";
import { world3DConfig } from "./config/worldData";

/**
 * Componente de Carregamento para o Suspense do Canvas 3D
 */
function Loader3D() {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#100810]/90 backdrop-blur-xl">
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="grid size-16 place-items-center rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 text-white shadow-2xl shadow-rose-500/40"
      >
        <Heart size={28} fill="currentColor" />
      </motion.div>
      <h3 className="font-display mt-6 text-2xl font-bold text-rose-100">
        Criando o Nosso Mundo 3D...
      </h3>
      <p className="mt-2 text-xs text-rose-200/60 flex items-center gap-2">
        <Loader2 size={14} className="animate-spin text-rose-300" />
        Carregando ilha, recordações e carinho
      </p>
    </div>
  );
}

/**
 * Componente Principal: Mundo de Recordações 3D
 * - Canvas 3D interativo com suporte a mouse (Desktop) e toque (Mobile)
 * - OrbitControls com rotação suave e limites de câmera
 * - Modais sobrepostos ativados pelo clique nos modelos 3D
 * - Totalmente isolado do restante do site
 */
export function Mundo3D({ onBack }) {
  // Estado para controlar qual modal está aberto: 'camera' | 'letter' | 'present' | null
  const [activeModal, setActiveModal] = useState(null);

  const { interactiveObjects } = world3DConfig;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-gradient-to-b from-[#180917] via-[#100612] to-[#080208] select-none">
      {/* ================================================================== */}
      {/* 1. BARRA SUPERIOR DE NAVEGAÇÃO E INSTRUÇÕES (OVERLAY 2D) */}
      {/* ================================================================== */}
      <header className="fixed top-0 inset-x-0 z-40 p-4 sm:p-6 pointer-events-none">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          {/* Botão de Voltar para a Página Principal */}
          <motion.button
            type="button"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onBack}
            className="pointer-events-auto flex items-center gap-2.5 rounded-full border border-rose-300/20 bg-[#1e0d1d]/75 px-4 py-2.5 text-xs font-semibold text-rose-100 shadow-xl backdrop-blur-xl transition hover:border-rose-300/40 hover:bg-rose-500/20 active:scale-95"
          >
            <ArrowLeft size={16} />
            <span>Voltar ao Universo</span>
          </motion.button>

          {/* Tag de identificação */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-medium text-rose-200/80 backdrop-blur-md"
          >
            <Sparkles size={13} className="text-rose-300" />
            <span>Mundo de Recordações 3D</span>
          </motion.div>
        </div>
      </header>

      {/* ================================================================== */}
      {/* 2. DICA DE INTERATIVIDADE NO RODAPÉ */}
      {/* ================================================================== */}
      <footer className="fixed bottom-5 inset-x-0 z-40 pointer-events-none flex justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center gap-2 rounded-full border border-rose-300/20 bg-[#160815]/85 px-5 py-2.5 text-xs text-rose-100 shadow-2xl backdrop-blur-xl"
        >
          <Compass size={15} className="text-rose-300 animate-spin" style={{ animationDuration: "12s" }} />
          <span>Arraste para explorar o cenário • Toque nos itens com tags para abrir recordações</span>
        </motion.div>
      </footer>

      {/* ================================================================== */}
      {/* 3. CANVAS 3D (REACT THREE FIBER) */}
      {/* ================================================================== */}
      <Suspense fallback={<Loader3D />}>
        <Canvas
          camera={{ position: [0, 6, 16], fov: 45 }}
          gl={{ antialias: true }}
          className="h-full w-full cursor-grab active:cursor-grabbing"
        >
          {/* Cor de fundo do espaço 3D */}
          <color attach="background" args={["#100612"]} />

          {/* Fundo Estrelado Romântico */}
          <Stars
            radius={80}
            depth={40}
            count={2500}
            factor={3.5}
            saturation={0.5}
            fade
            speed={0.8}
          />

          {/* Controles de Câmera (Órbita, Toque e Zoom) */}
          <OrbitControls
            target={[-0.5, 0.5, 1.5]}
            enableDamping
            dampingFactor={0.05}
            minDistance={4}
            maxDistance={22}
            maxPolarAngle={Math.PI / 2.1} // Evita que a câmera passe por baixo da ilha
            minPolarAngle={Math.PI / 6}   // Evita visão totalmente reta de cima
            autoRotate={true}
            autoRotateSpeed={0.35}
          />

          {/* Cena com a Ilha e os Modelos 3D */}
          <IslandScene onSelectObject={(id) => setActiveModal(id)} />
        </Canvas>
      </Suspense>

      {/* ================================================================== */}
      {/* 4. MODAIS INTERATIVOS (HTML/CSS SOBREPOSTOS AO CANVAS) */}
      {/* ================================================================== */}
      <AnimatePresence>
        {activeModal === "camera" && (
          <CameraModal
            data={interactiveObjects.camera.modal}
            onClose={() => setActiveModal(null)}
          />
        )}

        {activeModal === "letter" && (
          <LetterModal
            data={interactiveObjects.letter.modal}
            onClose={() => setActiveModal(null)}
          />
        )}

        {activeModal === "present" && (
          <PresentModal
            data={interactiveObjects.present.modal}
            onClose={() => setActiveModal(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
export default Mundo3D;
