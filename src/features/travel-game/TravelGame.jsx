import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles,
  ArrowLeft,
  Pause,
  Play,
  Shield,
  Zap,
  Award,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import {
  GAME_STAGES,
  CHARACTERS,
  ITEM_TYPES,
  OBSTACLE_TYPES,
  INITIAL_LIVES,
  TOTAL_FLIGHT_DISTANCE,
  BASE_FLIGHT_SPEED,
} from "./constants";
import { gameAudio } from "./audioEngine";
import { loveStory } from "../../config/loveStory";

export default function TravelGame({ onBack }) {
  const canvasRef = useRef(null);

  // Estados React da UI
  const [gameState, setGameState] = useState("MENU"); // 'MENU', 'PLAYING', 'PAUSED', 'GAME_OVER', 'VICTORY'
  const [selectedChar, setSelectedChar] = useState(CHARACTERS[0]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(INITIAL_LIVES);
  const [progress, setProgress] = useState(0); // 0 a 100
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    try {
      const saved = localStorage.getItem("namorados_game_high_score");
      return saved ? parseInt(saved, 10) : 0;
    } catch {
      return 0;
    }
  });
  const [isMuted, setIsMuted] = useState(false);
  const [activeTurbo, setActiveTurbo] = useState(false);
  const [activeShield, setActiveShield] = useState(false);

  // Refs de controle de física e loop de alta performance
  const stateRef = useRef({
    distance: 0,
    score: 0,
    lives: INITIAL_LIVES,
    plane: {
      x: 120,
      y: 200,
      targetY: 200,
      targetX: 120,
      vy: 0,
      angle: 0,
      width: 58,
      height: 32,
      invulnerableUntil: 0,
    },
    keys: {
      up: false,
      down: false,
      left: false,
      right: false,
      boost: false,
    },
    touchSteer: null,
    items: [],
    obstacles: [],
    particles: [],
    confetti: [],
    clouds: [],
    cityLights: [],
    oceanWaves: [],
    turboUntil: 0,
    shieldUntil: 0,
    lastFrameTime: 0,
    nextSpawnDistance: 120,
    nextCloudSpawn: 0,
  });

  const saveHighScore = useCallback((newScore) => {
    try {
      const currentBest = parseInt(localStorage.getItem("namorados_game_high_score") || "0", 10);
      if (newScore > currentBest) {
        localStorage.setItem("namorados_game_high_score", String(newScore));
        setHighScore(newScore);
      }
    } catch {
      // Ignora restrições de localStorage em navegação privada
    }
  }, []);

  // Alternar mudo
  const handleToggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const next = !prev;
      gameAudio.setMuted(next);
      return next;
    });
  }, []);

  // Iniciar partida
  const handleStartGame = useCallback(() => {
    gameAudio.init();
    gameAudio.startEngineHum();
    const st = stateRef.current;
    st.distance = 0;
    st.score = 0;
    st.lives = INITIAL_LIVES;
    st.plane.y = 220;
    st.plane.targetY = 220;
    st.plane.targetX = 120;
    st.plane.x = 120;
    st.plane.invulnerableUntil = 0;
    st.items = [];
    st.obstacles = [];
    st.particles = [];
    st.confetti = [];
    st.turboUntil = 0;
    st.shieldUntil = 0;
    st.lastFrameTime = performance.now();
    st.nextSpawnDistance = 150;

    // Inicializar nuvens decorativas
    st.clouds = Array.from({ length: 6 }, (_, i) => ({
      x: (i * 200) + Math.random() * 80,
      y: 40 + Math.random() * 260,
      radius: 35 + Math.random() * 45,
      speed: 0.6 + Math.random() * 0.5,
      opacity: 0.35 + Math.random() * 0.35,
    }));

    // Inicializar luzes de cidade para o skyline
    st.cityLights = Array.from({ length: 24 }, (_, i) => ({
      x: i * 45,
      height: 40 + (i % 5) * 22 + Math.random() * 30,
      windowColor: Math.random() > 0.4 ? "#fef08a" : "#fda4af",
    }));

    setScore(0);
    setLives(INITIAL_LIVES);
    setProgress(0);
    setCurrentStageIndex(0);
    setActiveTurbo(false);
    setActiveShield(false);
    setGameState("PLAYING");
  }, []);

  // Reiniciar partida
  const handleRestart = () => {
    handleStartGame();
  };

  // Controles de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameState !== "PLAYING") {
        if (e.key === "Escape" && gameState === "PAUSED") {
          setGameState("PLAYING");
        }
        return;
      }

      if (e.key === "Escape" || e.key === "p" || e.key === "P") {
        setGameState("PAUSED");
        return;
      }

      const keys = stateRef.current.keys;
      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") keys.up = true;
      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") keys.down = true;
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keys.left = true;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keys.right = true;
      if (e.key === " " || e.key === "Shift") keys.boost = true;
    };

    const handleKeyUp = (e) => {
      const keys = stateRef.current.keys;
      if (e.key === "ArrowUp" || e.key === "w" || e.key === "W") keys.up = false;
      if (e.key === "ArrowDown" || e.key === "s" || e.key === "S") keys.down = false;
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") keys.left = false;
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") keys.right = false;
      if (e.key === " " || e.key === "Shift") keys.boost = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameState]);

  // Controles de toque/mouse direto no canvas
  const handleCanvasPointerDown = (e) => {
    if (gameState !== "PLAYING") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clientY = e.clientY ?? e.touches?.[0]?.clientY;
    if (clientY !== undefined) {
      const relY = ((clientY - rect.top) / rect.height) * canvas.height;
      stateRef.current.plane.targetY = Math.max(40, Math.min(canvas.height - 60, relY));
      stateRef.current.touchSteer = true;
    }
  };

  const handleCanvasPointerMove = (e) => {
    if (gameState !== "PLAYING" || !stateRef.current.touchSteer) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const clientY = e.clientY ?? e.touches?.[0]?.clientY;
    if (clientY !== undefined) {
      const relY = ((clientY - rect.top) / rect.height) * canvas.height;
      stateRef.current.plane.targetY = Math.max(40, Math.min(canvas.height - 60, relY));
    }
  };

  const handleCanvasPointerUp = () => {
    stateRef.current.touchSteer = false;
  };

  // Botões na tela (Mobile Touch Controls)
  const handleTouchUpPress = (pressed) => {
    stateRef.current.keys.up = pressed;
  };
  const handleTouchDownPress = (pressed) => {
    stateRef.current.keys.down = pressed;
  };
  const handleTouchBoostPress = (pressed) => {
    stateRef.current.keys.boost = pressed;
  };

  // Motor principal do Canvas e Loop do Jogo
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    // Ajuste de DPI
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.parentElement?.clientWidth || window.innerWidth;
      const height = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Loop
    const loop = (now) => {
      const st = stateRef.current;
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const dt = Math.min((now - st.lastFrameTime) / 1000, 0.1);
      st.lastFrameTime = now;

      if (gameState === "PLAYING") {
        // --- 1. ATUALIZAÇÃO DE FÍSICA & ESTADOS ---
        const isTurbo = st.turboUntil > now || st.keys.boost;
        const isShield = st.shieldUntil > now;
        const speedMultiplier = (isTurbo ? 1.7 : 1.0) * (selectedChar.id === "felipe" && isTurbo ? 1.15 : 1.0);
        const flightSpeed = BASE_FLIGHT_SPEED * speedMultiplier;

        // Atualizar distância e progresso
        st.distance += flightSpeed * 60 * dt;
        const currentProg = Math.min(100, (st.distance / TOTAL_FLIGHT_DISTANCE) * 100);

        // Atualizar stage atual (RAO -> CGH -> VIX)
        let activeIdx = 0;
        if (currentProg >= 70) activeIdx = 2;
        else if (currentProg >= 35) activeIdx = 1;

        // Movimento do avião
        const planeSpeedY = 320 * dt;
        if (st.keys.up) st.plane.y -= planeSpeedY;
        if (st.keys.down) st.plane.y += planeSpeedY;

        // Se usar controle por toque / mouse direto
        if (st.touchSteer) {
          const dy = st.plane.targetY - st.plane.y;
          st.plane.y += dy * 0.15;
        }

        // Limites de altitude da tela
        const minY = 50;
        const maxY = h - 70;
        st.plane.y = Math.max(minY, Math.min(maxY, st.plane.y));

        // Ângulo de inclinação suave baseado no movimento vertical
        const targetAngle = st.keys.up ? -0.22 : st.keys.down ? 0.22 : 0;
        st.plane.angle += (targetAngle - st.plane.angle) * 0.2;

        // Partículas da turbina (coraçõezinhos e fumaça)
        if (Math.random() < (isTurbo ? 0.9 : 0.45)) {
          st.particles.push({
            x: st.plane.x - 22,
            y: st.plane.y + 4 + (Math.random() - 0.5) * 6,
            vx: -2.5 - Math.random() * 2,
            vy: (Math.random() - 0.5) * 1.5,
            size: isTurbo ? 5 + Math.random() * 4 : 3 + Math.random() * 3,
            color: isTurbo ? "#fb7185" : "#fda4af",
            alpha: 0.8,
            isHeart: Math.random() > 0.4,
          });
        }

        // Spawn de nuvens de fundo
        st.clouds.forEach((cloud) => {
          cloud.x -= cloud.speed * (flightSpeed * 0.6);
          if (cloud.x < -120) {
            cloud.x = w + 80 + Math.random() * 100;
            cloud.y = 40 + Math.random() * (h * 0.6);
          }
        });

        // Spawn procedural de itens e obstáculos conforme distância percorrida
        if (st.distance >= st.nextSpawnDistance && currentProg < 98) {
          st.nextSpawnDistance = st.distance + 140 + Math.random() * 90;
          const spawnY = 70 + Math.random() * (h - 150);

          // 65% chance de item positivo, 35% chance de obstáculo
          if (Math.random() < 0.68) {
            // Selecionar item temático da fase
            let chosenItem = ITEM_TYPES.HEART;
            const r = Math.random();
            if (activeIdx === 2 && r > 0.5) {
              chosenItem = ITEM_TYPES.MOQUECA;
            } else if (activeIdx === 2 && r > 0.25) {
              chosenItem = ITEM_TYPES.SHELL;
            } else if (r > 0.75) {
              chosenItem = ITEM_TYPES.COFFEE;
            } else if (r > 0.55) {
              chosenItem = ITEM_TYPES.SHIELD;
            } else if (r > 0.35) {
              chosenItem = ITEM_TYPES.LETTER;
            }

            st.items.push({
              ...chosenItem,
              x: w + 40,
              y: spawnY,
              bobOffset: Math.random() * Math.PI * 2,
            });
          } else {
            // Obstáculo temático
            let chosenObstacle;
            if (activeIdx === 0) {
              chosenObstacle = Math.random() > 0.5 ? OBSTACLE_TYPES.BALLOON : OBSTACLE_TYPES.CLOUD;
            } else if (activeIdx === 1) {
              chosenObstacle = Math.random() > 0.5 ? OBSTACLE_TYPES.TURBULENCE : OBSTACLE_TYPES.CLOUD;
            } else {
              chosenObstacle = Math.random() > 0.5 ? OBSTACLE_TYPES.BIRD : OBSTACLE_TYPES.TURBULENCE;
            }

            st.obstacles.push({
              ...chosenObstacle,
              x: w + 50,
              y: spawnY,
              baseY: spawnY,
              waveOffset: Math.random() * Math.PI * 2,
            });
          }
        }

        // Atualizar Itens & Colisão
        for (let i = st.items.length - 1; i >= 0; i--) {
          const item = st.items[i];
          item.x -= flightSpeed * 2.2;
          item.y += Math.sin(now * 0.005 + item.bobOffset) * 0.6;

          // Efeito imã do turbo (suga itens próximos)
          if (isTurbo) {
            const dx = st.plane.x - item.x;
            const dy = st.plane.y - item.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 220) {
              item.x += dx * 0.09;
              item.y += dy * 0.09;
            }
          }

          // Checar colisão com o avião
          const hitDist = Math.hypot(item.x - st.plane.x, item.y - st.plane.y);
          if (hitDist < 42) {
            // Coletou o item!
            st.score += item.score;
            setScore(st.score);

            // Sons e Efeitos
            if (item.id === "HEART") {
              gameAudio.playHeart();
              if (st.lives < 3 && Math.random() > 0.7) {
                st.lives = Math.min(3, st.lives + 1);
                setLives(st.lives);
              }
            } else if (item.id === "COFFEE") {
              gameAudio.playTurbo();
              const boostDur = 5000 * (selectedChar.id === "felipe" ? 1.3 : 1.0);
              st.turboUntil = now + boostDur;
              setActiveTurbo(true);
            } else if (item.id === "SHIELD") {
              gameAudio.playShield();
              const shieldDur = 6000 * (selectedChar.id === "beatriz" ? 1.5 : 1.0);
              st.shieldUntil = now + shieldDur;
              setActiveShield(true);
            } else if (item.id === "MOQUECA" || item.id === "LETTER" || item.id === "SHELL") {
              gameAudio.playSpecial();
            }

            // Partículas de explosão de brilho
            for (let p = 0; p < 10; p++) {
              st.particles.push({
                x: item.x,
                y: item.y,
                vx: (Math.random() - 0.5) * 5,
                vy: (Math.random() - 0.5) * 5,
                size: 3 + Math.random() * 4,
                color: item.color,
                alpha: 1,
                isHeart: true,
              });
            }

            st.items.splice(i, 1);
            continue;
          }

          // Remover itens fora da tela
          if (item.x < -60) {
            st.items.splice(i, 1);
          }
        }

        // Atualizar Obstáculos & Colisão
        for (let i = st.obstacles.length - 1; i >= 0; i--) {
          const obs = st.obstacles[i];
          obs.x -= flightSpeed * 2.4;
          obs.y = obs.baseY + Math.sin(now * 0.004 + obs.waveOffset) * 20;

          // Checar colisão
          const hitDist = Math.hypot(obs.x - st.plane.x, obs.y - st.plane.y);
          if (hitDist < 38) {
            if (isShield) {
              // Escudo absorve o impacto!
              gameAudio.playShield();
              st.shieldUntil = 0; // consome o escudo
              setActiveShield(false);
              for (let p = 0; p < 12; p++) {
                st.particles.push({
                  x: obs.x,
                  y: obs.y,
                  vx: (Math.random() - 0.5) * 6,
                  vy: (Math.random() - 0.5) * 6,
                  size: 4 + Math.random() * 4,
                  color: "#38bdf8",
                  alpha: 1,
                  isHeart: false,
                });
              }
              st.obstacles.splice(i, 1);
              continue;
            } else if (now > st.plane.invulnerableUntil) {
              // Tomou dano
              gameAudio.playHit();
              st.lives -= 1;
              setLives(st.lives);
              st.plane.invulnerableUntil = now + 1800; // 1.8s invulnerável piscando

              // Partículas de faísca
              for (let p = 0; p < 12; p++) {
                st.particles.push({
                  x: st.plane.x,
                  y: st.plane.y,
                  vx: (Math.random() - 0.5) * 7,
                  vy: (Math.random() - 0.5) * 7,
                  size: 4,
                  color: "#ef4444",
                  alpha: 1,
                  isHeart: false,
                });
              }

              // Checar Game Over
              if (st.lives <= 0) {
                gameAudio.stopEngineHum();
                gameAudio.playGameOver();
                saveHighScore(st.score);
                setGameState("GAME_OVER");
                break;
              }
            }
          }

          if (obs.x < -70) {
            st.obstacles.splice(i, 1);
          }
        }

        // Checar Vitória ao atingir 100% (Vitória - ES)
        if (currentProg >= 100) {
          gameAudio.stopEngineHum();
          gameAudio.playWin();
          saveHighScore(st.score + 1000); // bônus de pouso perfeito!
          setScore((s) => s + 1000);
          setGameState("VICTORY");

          // Disparar confetes celebratórios
          for (let c = 0; c < 120; c++) {
            st.confetti.push({
              x: Math.random() * w,
              y: -20 - Math.random() * 150,
              vx: (Math.random() - 0.5) * 3,
              vy: 2 + Math.random() * 4,
              color: ["#f43f5e", "#ec4899", "#fb7185", "#fde047", "#38bdf8", "#a855f7"][
                Math.floor(Math.random() * 6)
              ],
              size: 6 + Math.random() * 6,
              rotation: Math.random() * 360,
              rotSpeed: (Math.random() - 0.5) * 8,
            });
          }
        }

        // Sincronizar estado React a cada 4 frames para fluidez da UI
        if (Math.floor(now) % 4 === 0) {
          setProgress(Math.round(currentProg));
          setCurrentStageIndex(activeIdx);
          setActiveTurbo(isTurbo);
          setActiveShield(isShield);
        }
      }

      // --- 2. RENDERIZAÇÃO GRÁFICA NO CANVAS ---
      ctx.clearRect(0, 0, w, h);

      // A. Gradiente de Céu Conforme o Estágio Atual
      const currentStage = GAME_STAGES[currentStageIndex] || GAME_STAGES[0];
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
      skyGrad.addColorStop(0, currentStage.skyGradient[0]);
      skyGrad.addColorStop(0.35, currentStage.skyGradient[1]);
      skyGrad.addColorStop(0.7, currentStage.skyGradient[2]);
      skyGrad.addColorStop(1, currentStage.skyGradient[3]);
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h);

      // B. Camada de Fundo Dinâmica (Parallax)
      if (currentStageIndex === 0) {
        // Fase 1: Interior de SP / Colinas suaves ao pôr do sol
        ctx.fillStyle = "rgba(45, 18, 28, 0.4)";
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 50) {
          const hillY = h - 65 - Math.sin((x + st.distance * 0.1) * 0.005) * 35;
          ctx.lineTo(x, hillY);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fill();
      } else if (currentStageIndex === 1) {
        // Fase 2: São Paulo / Skyline noturno de prédios iluminados
        ctx.fillStyle = "#121424";
        st.cityLights.forEach((bld, idx) => {
          const bldX = ((bld.x - st.distance * 0.35) % (w + 120)) - 60;
          ctx.fillRect(bldX, h - bld.height - 20, 36, bld.height + 20);
          // Janelinhas piscantes
          ctx.fillStyle = bld.windowColor;
          ctx.fillRect(bldX + 6, h - bld.height + 6, 8, 8);
          ctx.fillRect(bldX + 20, h - bld.height + 6, 8, 8);
          if (idx % 2 === 0) {
            ctx.fillRect(bldX + 6, h - bld.height + 22, 8, 8);
          }
          ctx.fillStyle = "#121424";
        });
      } else {
        // Fase 3: Vitória / Oceano e Silhueta do Convento da Penha & Terceira Ponte
        ctx.fillStyle = "rgba(16, 78, 110, 0.45)";
        ctx.beginPath();
        ctx.moveTo(0, h);
        for (let x = 0; x <= w; x += 40) {
          const waveY = h - 45 - Math.sin((x + st.distance * 0.4) * 0.02) * 12;
          ctx.lineTo(x, waveY);
        }
        ctx.lineTo(w, h);
        ctx.closePath();
        ctx.fill();

        // Silhueta do Morro do Convento da Penha no horizonte
        const conventoX = ((600 - st.distance * 0.15) % (w + 400)) - 100;
        ctx.fillStyle = "rgba(10, 40, 55, 0.7)";
        ctx.beginPath();
        ctx.arc(conventoX, h - 30, 90, Math.PI, 0);
        ctx.fill();
        // Luzinha do Convento
        ctx.fillStyle = "#fef08a";
        ctx.fillRect(conventoX - 4, h - 120, 8, 8);
      }

      // C. Nuvens Flutuantes
      st.clouds.forEach((c) => {
        ctx.fillStyle = currentStage.cloudsColor;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.arc(c.x + c.radius * 0.65, c.y - c.radius * 0.25, c.radius * 0.75, 0, Math.PI * 2);
        ctx.arc(c.x - c.radius * 0.65, c.y - c.radius * 0.15, c.radius * 0.65, 0, Math.PI * 2);
        ctx.fill();
      });

      // D. Renderizar Itens Flutuantes
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      st.items.forEach((item) => {
        // Halo brilhante em volta do item
        ctx.fillStyle = `${item.color}33`;
        ctx.beginPath();
        ctx.arc(item.x, item.y, item.size * 0.85, 0, Math.PI * 2);
        ctx.fill();

        // Desenhar emoji/símbolo do item
        ctx.font = `${item.size}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
        ctx.fillText(item.symbol, item.x, item.y);
      });

      // E. Renderizar Obstáculos
      st.obstacles.forEach((obs) => {
        ctx.font = `${obs.size}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
        ctx.fillText(obs.symbol, obs.x, obs.y);
      });

      // F. Renderizar Partículas
      for (let i = st.particles.length - 1; i >= 0; i--) {
        const p = st.particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.025;

        if (p.alpha <= 0) {
          st.particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        if (p.isHeart) {
          ctx.font = `${p.size * 2}px sans-serif`;
          ctx.fillText("♥", p.x, p.y);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      // G. Renderizar Avião dos Namorados ✈️
      const p = st.plane;
      const isInvulnerable = now < p.invulnerableUntil;
      const isBlinking = isInvulnerable && Math.floor(now / 100) % 2 === 0;

      if (!isBlinking) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        // Se escudo ativo, aura protetora
        if (now < st.shieldUntil) {
          ctx.strokeStyle = "rgba(56, 189, 248, 0.85)";
          ctx.fillStyle = "rgba(56, 189, 248, 0.18)";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(4, 0, 36, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Brilho pulsante
          ctx.font = "14px sans-serif";
          ctx.fillText("🛡️", 4, -40);
        }

        // Fuselagem do avião (estilo cartoon elegante branco e ouro-rosa)
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.ellipse(6, 0, 32, 12, 0, 0, Math.PI * 2);
        ctx.fill();

        // Detalhe listra rosa lateral
        ctx.fillStyle = selectedChar.color;
        ctx.beginPath();
        ctx.ellipse(4, 3, 24, 4, 0, 0, Math.PI * 2);
        ctx.fill();

        // Asa
        ctx.fillStyle = "#f1f5f9";
        ctx.beginPath();
        ctx.moveTo(-6, 2);
        ctx.lineTo(-14, 22);
        ctx.lineTo(2, 20);
        ctx.lineTo(6, 2);
        ctx.closePath();
        ctx.fill();

        // Cauda do avião (estabilizador vertical) com Coração
        ctx.fillStyle = selectedChar.color;
        ctx.beginPath();
        ctx.moveTo(-22, -2);
        ctx.lineTo(-32, -18);
        ctx.lineTo(-24, -18);
        ctx.lineTo(-14, -2);
        ctx.closePath();
        ctx.fill();

        // Janelinhas e Cabine
        ctx.fillStyle = "#38bdf8";
        ctx.beginPath();
        ctx.arc(20, -3, 5, 0, Math.PI * 2);
        ctx.fill();

        // Avatar do Piloto na Cabine
        ctx.font = "16px sans-serif";
        ctx.fillText(selectedChar.avatar, 20, -12);

        // Luz de navegação na ponta da asa
        ctx.fillStyle = "#fb7185";
        ctx.beginPath();
        ctx.arc(-14, 22, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // H. Confetes de Vitória
      if (gameState === "VICTORY") {
        st.confetti.forEach((c) => {
          c.x += c.vx;
          c.y += c.vy;
          c.rotation += c.rotSpeed;

          ctx.save();
          ctx.translate(c.x, c.y);
          ctx.rotate((c.rotation * Math.PI) / 180);
          ctx.fillStyle = c.color;
          ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size * 0.6);
          ctx.restore();
        });
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [gameState, selectedChar, currentStageIndex, saveHighScore]);

  // Limpeza de áudio ao sair da tela
  useEffect(() => {
    return () => {
      gameAudio.stopEngineHum();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#0b0c1e] text-white select-none overflow-hidden font-sans">
      {/* HUD SUPERIOR (Apenas durante o jogo ou pausado) */}
      {(gameState === "PLAYING" || gameState === "PAUSED") && (
        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between p-3 sm:p-5 pointer-events-none">
          {/* Lado Esquerdo: Vidas & Pontos */}
          <div className="flex items-center gap-3 sm:gap-4 pointer-events-auto">
            {/* Vidas */}
            <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-[#160a16]/80 px-3 py-1.5 backdrop-blur-md">
              {Array.from({ length: INITIAL_LIVES }).map((_, i) => (
                <Heart
                  key={i}
                  size={18}
                  className={`transition-transform duration-300 ${
                    i < lives
                      ? "text-rose-400 fill-rose-500 scale-100 animate-pulse"
                      : "text-white/20 fill-none scale-90"
                  }`}
                />
              ))}
            </div>

            {/* Milhas / Score */}
            <div className="rounded-full border border-white/10 bg-[#160a16]/80 px-4 py-1.5 backdrop-blur-md">
              <span className="text-[10px] uppercase tracking-widest text-rose-200/60 block">
                Milhas de Amor
              </span>
              <span className="font-display text-base sm:text-lg font-bold text-rose-100 tracking-wider">
                {score.toLocaleString()} mi
              </span>
            </div>

            {/* Badges de Power-ups Ativos */}
            <div className="hidden sm:flex items-center gap-2">
              {activeTurbo && (
                <span className="flex items-center gap-1 rounded-full border border-amber-400/40 bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-200 animate-bounce">
                  <Zap size={14} /> Turbo Ativo!
                </span>
              )}
              {activeShield && (
                <span className="flex items-center gap-1 rounded-full border border-sky-400/40 bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-200">
                  <Shield size={14} /> Escudo
                </span>
              )}
            </div>
          </div>

          {/* Centro: Barra de Progresso do Voo (RAO -> CGH -> VIX) */}
          <div className="hidden md:flex flex-col items-center w-72 lg:w-96 pointer-events-auto">
            <div className="flex justify-between w-full text-[11px] font-semibold tracking-wider text-rose-200/80 mb-1">
              <span className={currentStageIndex === 0 ? "text-rose-300 font-bold" : ""}>
                🛫 RAO (Ribeirão)
              </span>
              <span className={currentStageIndex === 1 ? "text-rose-300 font-bold" : ""}>
                🏙️ CGH (SP)
              </span>
              <span className={currentStageIndex === 2 ? "text-rose-300 font-bold" : ""}>
                🌴 VIX (Vitória)
              </span>
            </div>
            <div className="relative w-full h-3 rounded-full bg-white/10 overflow-hidden border border-white/15">
              <motion.div
                className="h-full bg-gradient-to-r from-rose-500 via-pink-400 to-amber-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Lado Direito: Pausar, Som e Fechar */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={handleToggleMute}
              className="grid size-10 place-items-center rounded-full border border-white/10 bg-[#160a16]/80 text-rose-200 backdrop-blur-md hover:bg-rose-500/20 cursor-pointer"
              title={isMuted ? "Ativar som" : "Mutar som"}
            >
              {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>

            <button
              onClick={() => setGameState((st) => (st === "PLAYING" ? "PAUSED" : "PLAYING"))}
              className="grid size-10 place-items-center rounded-full border border-white/10 bg-[#160a16]/80 text-rose-200 backdrop-blur-md hover:bg-rose-500/20 cursor-pointer"
              title="Pausar jogo"
            >
              {gameState === "PAUSED" ? <Play size={17} /> : <Pause size={17} />}
            </button>

            <button
              onClick={() => {
                gameAudio.stopEngineHum();
                onBack();
              }}
              className="grid size-10 place-items-center rounded-full border border-white/10 bg-[#160a16]/80 text-rose-200 backdrop-blur-md hover:bg-rose-500/20 cursor-pointer"
              title="Voltar ao site"
            >
              <ArrowLeft size={17} />
            </button>
          </div>
        </header>
      )}

      {/* ÁREA INTERATIVA DO CANVAS */}
      <div
        className="relative flex-1 w-full h-full cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={handleCanvasPointerDown}
        onPointerMove={handleCanvasPointerMove}
        onPointerUp={handleCanvasPointerUp}
        onTouchStart={handleCanvasPointerDown}
        onTouchMove={handleCanvasPointerMove}
        onTouchEnd={handleCanvasPointerUp}
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        {/* CONTROLES TOUCH PARA DISPOSITIVOS MÓVEIS */}
        {gameState === "PLAYING" && (
          <div className="sm:hidden absolute inset-x-0 bottom-4 px-4 flex justify-between items-end pointer-events-none z-30">
            {/* Botões de Direção Vertical */}
            <div className="flex flex-col gap-2 pointer-events-auto">
              <button
                type="button"
                onPointerDown={() => handleTouchUpPress(true)}
                onPointerUp={() => handleTouchUpPress(false)}
                onTouchStart={() => handleTouchUpPress(true)}
                onTouchEnd={() => handleTouchUpPress(false)}
                className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-[#160a16]/80 text-white backdrop-blur-lg active:scale-90 active:bg-rose-500/40"
              >
                <ChevronUp size={28} />
              </button>
              <button
                type="button"
                onPointerDown={() => handleTouchDownPress(true)}
                onPointerUp={() => handleTouchDownPress(false)}
                onTouchStart={() => handleTouchDownPress(true)}
                onTouchEnd={() => handleTouchDownPress(false)}
                className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-[#160a16]/80 text-white backdrop-blur-lg active:scale-90 active:bg-rose-500/40"
              >
                <ChevronDown size={28} />
              </button>
            </div>

            {/* Botão de Turbo */}
            <div className="pointer-events-auto">
              <button
                type="button"
                onPointerDown={() => handleTouchBoostPress(true)}
                onPointerUp={() => handleTouchBoostPress(false)}
                onTouchStart={() => handleTouchBoostPress(true)}
                onTouchEnd={() => handleTouchBoostPress(false)}
                className="grid size-16 place-items-center rounded-full border border-amber-400/50 bg-gradient-to-tr from-amber-500 to-rose-500 text-white shadow-lg shadow-amber-500/30 active:scale-95"
              >
                <Zap size={28} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* OVERLAYS / TELAS DE MENU, PAUSA, DERROTA E VITÓRIA */}
      <AnimatePresence>
        {/* TELA INICIAL (MENU) */}
        {gameState === "MENU" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-[#0d0914]/90 p-4 backdrop-blur-xl overflow-y-auto"
          >
            <div className="max-w-lg w-full rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8 shadow-2xl backdrop-blur-2xl text-center my-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-300/20 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold text-rose-300 uppercase tracking-widest mb-4">
                <Sparkles size={14} /> Expedição a Bordo
              </div>

              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Rumo a Vitória ✈️🌴
              </h1>
              <p className="text-sm text-rose-100/70 mb-6 leading-relaxed">
                Decole de Ribeirão Preto, faça a conexão em Congonhas e pouse no nosso paraíso em Vitória.
                Colete corações, cafés e moquecas capixabas enquanto desvia das tempestades!
              </p>

              {/* Seleção de Piloto */}
              <div className="mb-6 text-left">
                <span className="text-[11px] font-semibold text-rose-200/60 uppercase tracking-widest block mb-2 text-center">
                  Escolha quem vai pilotar:
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {CHARACTERS.map((char) => {
                    const isSelected = selectedChar.id === char.id;
                    return (
                      <button
                        key={char.id}
                        type="button"
                        onClick={() => setSelectedChar(char)}
                        className={`flex flex-col items-center p-3 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? "border-rose-400 bg-rose-500/20 shadow-[0_0_20px_rgba(244,63,94,0.3)] scale-[1.02]"
                            : "border-white/10 bg-white/5 hover:border-white/20"
                        }`}
                      >
                        <span className="text-3xl mb-1">{char.avatar}</span>
                        <span className="font-display font-semibold text-sm text-white">
                          {char.name}
                        </span>
                        <span className="text-[10px] text-rose-200/70 text-center mt-1">
                          {char.perkText}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Recorde Atual */}
              {highScore > 0 && (
                <div className="flex items-center justify-center gap-2 text-xs text-rose-200/60 mb-6 bg-white/5 py-2 rounded-xl">
                  <Award size={14} className="text-amber-300" />
                  <span>Seu Melhor Voo: <strong className="text-rose-100">{highScore.toLocaleString()} milhas</strong></span>
                </div>
              )}

              {/* Botões de Ação */}
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={handleStartGame}
                  className="w-full rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 py-4 text-base font-bold text-white shadow-xl shadow-rose-500/25 transition-all hover:scale-102 hover:shadow-rose-500/40 cursor-pointer"
                >
                  Decolar Agora! 🛫
                </button>

                <button
                  type="button"
                  onClick={onBack}
                  className="w-full rounded-full border border-white/10 bg-white/5 py-3 text-xs font-semibold text-rose-200/80 transition-all hover:bg-white/10 cursor-pointer"
                >
                  Voltar para o Nosso Site 💖
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* TELA DE PAUSA */}
        {gameState === "PAUSED" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-[#0d0914]/85 backdrop-blur-md p-4"
          >
            <div className="max-w-sm w-full rounded-3xl border border-white/10 bg-[#160a16]/90 p-6 text-center shadow-2xl">
              <h2 className="font-display text-2xl font-bold text-white mb-2">Voo em Espera ⏸️</h2>
              <p className="text-xs text-rose-200/70 mb-6">
                Descansando um instante antes do próximo trecho.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => setGameState("PLAYING")}
                  className="w-full rounded-full bg-rose-500 py-3 text-sm font-bold text-white hover:bg-rose-600 transition cursor-pointer"
                >
                  Continuar Viagem ✈️
                </button>
                <button
                  onClick={handleRestart}
                  className="w-full rounded-full border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-rose-200 hover:bg-white/10 transition cursor-pointer"
                >
                  Recomeçar Voo 🔄
                </button>
                <button
                  onClick={() => {
                    gameAudio.stopEngineHum();
                    onBack();
                  }}
                  className="w-full text-xs text-rose-200/50 hover:text-rose-200 py-2 cursor-pointer"
                >
                  Sair do Jogo
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* TELA DE GAME OVER */}
        {gameState === "GAME_OVER" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-[#0d0914]/90 backdrop-blur-xl p-4"
          >
            <div className="max-w-md w-full rounded-[2.5rem] border border-rose-500/20 bg-[#160a16]/95 p-6 sm:p-8 text-center shadow-2xl">
              <span className="text-5xl block mb-3">⛈️</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Turbulência no Caminho!
              </h2>
              <p className="text-sm text-rose-200/70 mb-6">
                Nosso avião teve que fazer um pouso não programado. Mas o amor nunca desiste da viagem!
              </p>
              <div className="bg-white/5 rounded-2xl p-4 mb-6 text-left">
                <div className="flex justify-between text-xs text-rose-200/60 mb-1">
                  <span>Distância Percorrida:</span>
                  <span className="font-semibold text-rose-100">{progress}% do trajeto</span>
                </div>
                <div className="flex justify-between text-xs text-rose-200/60">
                  <span>Milhas Acumuladas:</span>
                  <span className="font-semibold text-rose-100">{score.toLocaleString()} mi</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleRestart}
                  className="w-full rounded-full bg-gradient-to-r from-rose-500 to-pink-500 py-3.5 text-sm font-bold text-white shadow-lg hover:scale-102 transition cursor-pointer"
                >
                  Tentar Novamente 🛫
                </button>
                <button
                  onClick={onBack}
                  className="w-full rounded-full border border-white/10 bg-white/5 py-3 text-xs font-semibold text-rose-200 hover:bg-white/10 transition cursor-pointer"
                >
                  Voltar ao Nosso Universo 💖
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* TELA DE VITÓRIA (POUSO EM VITÓRIA!) */}
        {gameState === "VICTORY" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 flex items-center justify-center bg-[#0b101e]/95 backdrop-blur-2xl p-4 overflow-y-auto"
          >
            <div className="max-w-lg w-full rounded-[2.5rem] border border-amber-300/30 bg-gradient-to-b from-[#1b1938]/90 to-[#101b2a]/95 p-6 sm:p-8 text-center shadow-[0_0_60px_rgba(251,191,36,0.2)] my-auto">
              <span className="text-5xl block mb-2 animate-bounce">🛬🌴</span>

              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-400/10 px-3.5 py-1 text-xs font-semibold text-amber-200 uppercase tracking-widest mb-3">
                <Sparkles size={13} /> Pouso com Sucesso!
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Bem-vindos a Vitória!
              </h2>

              <p className="text-xs sm:text-sm text-rose-100/75 mb-6">
                Parabéns, Comandante {selectedChar.name}! Você conduziu nossa viagem com maestria pelas nuvens e nos trouxe até a praia de Camburi e a Ilha do Boi!
              </p>

              {/* Cartão Dourado de Embarque / Certificado de Voo */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:p-5 text-left mb-6 relative overflow-hidden backdrop-blur-lg">
                <div className="flex justify-between items-center border-b border-dashed border-white/10 pb-3 mb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-rose-200/50 block">Passageiros</span>
                    <span className="font-display text-base font-bold text-white">{loveStory.coupleName}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-widest text-rose-200/50 block">Destino</span>
                    <span className="font-display text-base font-bold text-rose-200">Vitória - ES 🏖️</span>
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs mb-3 text-rose-100/80">
                  <span>Milhas Finais de Amor:</span>
                  <span className="font-bold text-amber-300 text-sm">{score.toLocaleString()} mi</span>
                </div>

                {/* Mensagem Secreta de Vitória */}
                <div className="rounded-xl border border-rose-300/20 bg-rose-500/10 p-3 text-center">
                  <p className="text-xs italic text-rose-100/90 leading-relaxed">
                    &ldquo;Assim como esse voo perfeito, desviar de qualquer tempestade é fácil quando estou ao seu lado. O melhor destino da minha vida é você, meu momor. Te amo infinito!&rdquo;
                  </p>
                </div>
              </div>

              {/* Botões */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleRestart}
                  className="flex-1 rounded-full border border-white/15 bg-white/10 py-3.5 text-xs font-bold text-white hover:bg-white/15 transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw size={15} /> Jogar Novamente
                </button>
                <button
                  type="button"
                  onClick={onBack}
                  className="flex-1 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 py-3.5 text-xs font-bold text-white shadow-lg hover:scale-102 transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <Heart size={15} fill="currentColor" /> Voltar ao Site
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
