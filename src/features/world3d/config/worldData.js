/**
 * ============================================================================
 * CONFIGURAÇÃO DO MUNDO 3D - "MUNDO DE RECORDAÇÕES"
 * ============================================================================
 * Posições, escalas e rotações calibradas com precisão milimétrica para a
 * geometria real de cada modelo 3D e da ilha flutuante.
 * ============================================================================
 */

import photo1 from "../../../assets/photos/1.jpeg";
import photo2 from "../../../assets/photos/2.jpeg";
import photo3 from "../../../assets/photos/3.jpeg";
import photo4 from "../../../assets/photos/4.jpeg";
import photo5 from "../../../assets/photos/5.jpeg";

const BASE_URL = import.meta.env.BASE_URL || "/";
const cleanBase = BASE_URL.endsWith("/") ? BASE_URL : `${BASE_URL}/`;
export const getModelPath = (filename) => `${cleanBase}models/${filename}`;

export const world3DConfig = {
  // --------------------------------------------------------------------------
  // CENÁRIO BASE: ILHA FLUTUANTE CENTRAL
  // --------------------------------------------------------------------------
  island: {
    modelPath: getModelPath("Low poly floating islands.glb"),
    position: [5.044, 0.018, -4.203],
    scale: 0.01,
    rotation: [0, 0, 0],
  },

  // --------------------------------------------------------------------------
  // OBJETOS INTERATIVOS (CLICÁVEIS)
  // --------------------------------------------------------------------------
  interactiveObjects: {
    // 1. CÂMERA INSTANTÂNEA -> Platô Frontal da Ilha Esquerda
    camera: {
      id: "camera",
      name: "Nossas Primeiras Memórias",
      label: "Álbum de Fotos 📷",
      modelPath: getModelPath("Instant Camera.glb"),
      position: [-5.2, -1.48, -0.4],
      scale: 1.8,
      rotation: [0, 0.8, 0],
      modal: {
        title: "O Começo de Tudo 📸",
        subtitle: "Como o nosso amor começou a ser registrado...",
        description:
          "Cada clique desses guarda o início do nosso namoro, o brilho no olhar das primeiras conversas e a certeza de que estávamos começando a melhor história da minha vida.",
        photos: [
          {
            url: photo5,
            caption: "O primeiro capítulo do nosso encontro",
          },
          {
            url: photo4,
            caption: "Aquele dia inesquecível no boliche",
          },
          {
            url: photo3,
            caption: "O dia em que te pedi em namoro",
          },
          {
            url: photo1,
            caption: "Sorrisos que iluminam o meu mundo",
          },
          {
            url: photo2,
            caption: "Nosso primeiro Dia dos Namorados e casados",
          },
        ],
      },
    },

    // 2. CARTA DE AMOR -> Platô Central Verdejante da Ilha Esquerda
    letter: {
      id: "letter",
      name: "Carta para Meu Amor",
      label: "Carta de Amor 💌",
      modelPath: getModelPath("Posted Letter.glb"),
      position: [-1.6, 2.55, 3.2],
      scale: 0.45,
      rotation: [0, -0.4, 0],
      modal: {
        title: "Para a Mulher da Minha Vida ❤️",
        date: "Eternamente Nós",
        paragraphs: [
          "Meu amor,",
          "Se este mundo 3D fosse infinito, ainda assim não caberia todo o amor, orgulho e carinho que sinto por você todos os dias.",
          "Estar ao seu lado faz qualquer dia comum parecer mágico. Você é a minha parceira, a minha melhor amiga, minha esposa e o meu porto seguro.",
          "Obrigado por cada abraço, cada risada e por construir comigo esse universo só nosso. Jamais se esqueça: eu acredito em você, nos seus sonhos e na mulher incrível e brilhante que você é.",
          "Te amo mais do que as palavras conseguem expressar!",
        ],
        signature: "Com todo meu amor, Felipe.",
      },
    },

    // 3. PRESENTE SURPRESA -> Platô Gramado Plano da Ilha Direita
    present: {
      id: "present",
      name: "Surpresa Especial",
      label: "Abrir Presente 🎁",
      modelPath: getModelPath("Present.glb"),
      position: [3.2, -1.28, 4.6],
      scale: 0.85,
      rotation: [0, 0.4, 0],
      modal: {
        title: "Um Presente do Coração 🎁",
        subtitle: "Uma promessa para o nosso futuro",
        highlightMessage: "Nossa próxima grande viagem juntos está chegando!",
        countdownTarget: "2026-12-14T12:25:00-03:00",
        secretMessage:
          "Prepare as malas, meu amor! Nossos momentos em Vitória serão inesquecíveis. Mas lembre-se: o meu maior e melhor presente de todos os dias é simplesmente ter você na minha vida.",
        extraNote: "Spoiler: Muitas surpresas ainda virão ao longo do caminho! ✨",
      },
    },
  },

  // --------------------------------------------------------------------------
  // ELEMENTOS DECORATIVOS (Árvores, Bancos, Cristais e Chocolates)
  // --------------------------------------------------------------------------
  decorations: [
    // --- Árvores Rosa (Pink Tree) ---
    {
      id: "tree-left-center",
      modelPath: getModelPath("Pink Tree.glb"),
      position: [-2.0, 2.40, 4.0], // Plantada no platô central da esquerda
      scale: 0.012,
      rotation: [0, 0.5, 0],
    },
    {
      id: "tree-right-island",
      modelPath: getModelPath("Pink Tree.glb"),
      position: [4.2, -1.55, 5.2], // Plantada na ilha da direita
      scale: 0.011,
      rotation: [0, -1.2, 0],
    },
    {
      id: "tree-left-back",
      modelPath: getModelPath("Pink Tree.glb"),
      position: [-6.0, -0.48, -1.0], // Platô traseiro da esquerda
      scale: 0.012,
      rotation: [0, 1.8, 0],
    },

    // --- Bancos de Parque (Park Bench) ---
    {
      id: "bench-left",
      modelPath: getModelPath("Park Bench.glb"),
      position: [-4.6, -1.35, -1.2], // Na esplanada da esquerda
      scale: 1.1,
      rotation: [0, 0.8, 0],
    },
    {
      id: "bench-right",
      modelPath: getModelPath("Park Bench.glb"),
      position: [2.4, -1.00, 4.4], // Na ilha da direita perto do presente
      scale: 1.0,
      rotation: [0, -2.1, 0],
    },

    // --- Cristais Mágicos (Crystal Crystals) ---
    {
      id: "crystal-left-rock",
      modelPath: getModelPath("Crystal Crystals.glb"),
      position: [-2.8, 2.05, -3.2], // Na base da montanha rochosa da esquerda
      scale: 0.065,
      rotation: [0, 0.3, 0],
    },
    {
      id: "crystal-right-rock",
      modelPath: getModelPath("Crystal Crystals.glb"),
      position: [5.6, 2.15, 3.4], // No topo das rochas da ilha direita
      scale: 0.06,
      rotation: [0, -0.8, 0],
    },

    // --- Chocolates de Coração (Heart Chocolates) ---
    {
      id: "choco-left",
      modelPath: getModelPath("Heart Chocolates.glb"),
      position: [-4.2, -1.55, -0.8], // Perto do banco e câmera da esquerda
      scale: 0.18,
      rotation: [0, 0.3, 0],
    },
    {
      id: "choco-right",
      modelPath: getModelPath("Heart Chocolates.glb"),
      position: [2.8, -1.05, 4.3], // Perto do banco da direita
      scale: 0.16,
      rotation: [0, -0.6, 0],
    },
  ],
};
