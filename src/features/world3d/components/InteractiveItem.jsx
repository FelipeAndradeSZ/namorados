import { useState, useRef } from "react";
import { useGLTF, Float, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Componente para Objetos 3D Interativos (Câmera, Carta, Presente)
 * - Suporta animação de flutuação (Float)
 * - Efeito de hover suave (scale + cursor pointer)
 * - Tag/Badge HTML flutuante acima do objeto para guiar o clique
 * - Evento de clique que dispara a abertura do Modal
 */
export function InteractiveItem({
  modelPath,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
  label = "Clique aqui",
  onClick,
}) {
  const { scene } = useGLTF(modelPath);
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Animação de escala suave durante o hover com zero alocações de memória por frame
  useFrame((_, delta) => {
    if (groupRef.current) {
      const targetScale = hovered ? scale * 1.18 : scale;
      const currentScale = groupRef.current.scale.x;
      const newScale = THREE.MathUtils.lerp(currentScale, targetScale, delta * 8);
      groupRef.current.scale.setScalar(newScale);
    }
  });

  return (
    <group position={position} rotation={rotation}>
      {/* Badge/Etiqueta Flutuante indicando interatividade */}
      <Html
        position={[0, 0.55, 0]}
        center
        distanceFactor={9}
        zIndexRange={[100, 0]}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          className={`pointer-events-auto cursor-pointer whitespace-nowrap rounded-full border border-rose-300/40 bg-[#1f0d1d]/90 px-3 py-1 text-[11px] font-semibold text-rose-100 shadow-[0_4px_20px_rgba(244,63,94,0.4)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-rose-300 hover:bg-rose-500/80 ${
            hovered ? "scale-110 bg-rose-500 text-white" : ""
          }`}
        >
          {label}
        </button>
      </Html>

      {/* Objeto 3D com Flutuação */}
      <Float
        speed={hovered ? 3.0 : 1.8}
        rotationIntensity={0.2}
        floatIntensity={0.25}
        floatingRange={[0, 0.08]}
      >
        <group
          ref={groupRef}
          scale={scale}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.();
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = "auto";
          }}
        >
          <primitive object={scene.clone()} />
        </group>
      </Float>
    </group>
  );
}
