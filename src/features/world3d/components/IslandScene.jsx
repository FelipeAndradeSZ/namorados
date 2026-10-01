import { useGLTF, Sparkles } from "@react-three/drei";
import { world3DConfig } from "../config/worldData";
import { InteractiveItem } from "./InteractiveItem";
import { DecorativeItem } from "./DecorativeItem";

/**
 * Cena Principal 3D da Ilha dos Namorados
 * - Carrega a ilha flutuante central
 * - Renderiza os 3 itens interativos (Câmera, Carta, Presente)
 * - Renderiza todos os itens decorativos espalhados pela ilha
 * - Inclui iluminação atmosférica e partículas mágicas (Sparkles)
 */
export function IslandScene({ onSelectObject }) {
  // Carrega o modelo da ilha central
  const { scene: islandScene } = useGLTF(world3DConfig.island.modelPath);
  const { interactiveObjects, decorations, island } = world3DConfig;

  return (
    <group>
      {/* ================================================================== */}
      {/* ILUMINAÇÃO DA CENA */}
      {/* ================================================================== */}
      {/* Luz ambiente natural e brilhante */}
      <ambientLight intensity={1.6} color="#ffe4e6" />

      {/* Luz principal (Sol / Luar romântico) */}
      <directionalLight
        position={[10, 18, 12]}
        intensity={2.2}
        color="#ffffff"
      />

      {/* Luz de preenchimento suave lateral */}
      <directionalLight
        position={[-10, 10, -10]}
        intensity={1.2}
        color="#f472b6"
      />

      {/* Ponto de luz aconchegante no centro */}
      <pointLight position={[0, 4, 0]} intensity={2.0} color="#fda4af" distance={15} />

      {/* ================================================================== */}
      {/* PARTÍCULAS MÁGICAS / BRILHOS AO REDOR DA ILHA */}
      {/* ================================================================== */}
      <Sparkles
        count={70}
        scale={10}
        size={3}
        speed={0.4}
        color="#f43f5e"
        opacity={0.7}
      />
      <Sparkles
        count={50}
        scale={8}
        size={2.5}
        speed={0.3}
        color="#fef08a"
        opacity={0.6}
      />

      {/* ================================================================== */}
      {/* 1. ILHA FLUTUANTE CENTRAL */}
      {/* ================================================================== */}
      <primitive
        object={islandScene}
        position={island.position}
        scale={island.scale}
        rotation={island.rotation}
      />

      {/* ================================================================== */}
      {/* 2. OBJETOS INTERATIVOS (CLICÁVEIS) */}
      {/* ================================================================== */}
      {/* Câmera Instantânea */}
      <InteractiveItem
        modelPath={interactiveObjects.camera.modelPath}
        position={interactiveObjects.camera.position}
        scale={interactiveObjects.camera.scale}
        rotation={interactiveObjects.camera.rotation}
        label={interactiveObjects.camera.label}
        onClick={() => onSelectObject("camera")}
      />

      {/* Carta de Amor */}
      <InteractiveItem
        modelPath={interactiveObjects.letter.modelPath}
        position={interactiveObjects.letter.position}
        scale={interactiveObjects.letter.scale}
        rotation={interactiveObjects.letter.rotation}
        label={interactiveObjects.letter.label}
        onClick={() => onSelectObject("letter")}
      />

      {/* Presente com Surpresa */}
      <InteractiveItem
        modelPath={interactiveObjects.present.modelPath}
        position={interactiveObjects.present.position}
        scale={interactiveObjects.present.scale}
        rotation={interactiveObjects.present.rotation}
        label={interactiveObjects.present.label}
        onClick={() => onSelectObject("present")}
      />

      {/* ================================================================== */}
      {/* 3. ELEMENTOS DECORATIVOS ESPALHADOS */}
      {/* ================================================================== */}
      {decorations.map((item) => (
        <DecorativeItem
          key={item.id}
          modelPath={item.modelPath}
          position={item.position}
          scale={item.scale}
          rotation={item.rotation}
        />
      ))}
    </group>
  );
}
