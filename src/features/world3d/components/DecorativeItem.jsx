import { useMemo } from "react";
import { useGLTF } from "@react-three/drei";

/**
 * Componente para Elementos Decorativos 3D
 * Reutiliza e clona os modelos (Pink Tree, Park Bench, Cristais, Chocolates)
 * garantindo alta performance sem conflitos de instância no Three.js.
 */
export function DecorativeItem({
  modelPath,
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}) {
  const { scene } = useGLTF(modelPath);

  // Clona a cena para permitir múltiplas instâncias no mesmo cenário
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  return (
    <primitive
      object={clonedScene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}
