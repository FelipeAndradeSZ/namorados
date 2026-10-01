import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Brain, 
  ArrowLeft, 
  RotateCw, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  Award,
  Zap,
  Lightbulb
} from "lucide-react";
import { THEORY_CONTENT } from "../content/theoryData";
import { destinoAudio } from "../core/soundEngine";

/**
 * Converte THEORY_CONTENT em uma pilha de Flashcards de Active Recall.
 */
function buildFlashcards(filterArea = null, filterModuleId = null) {
  const cards = [];

  const modules = Object.entries(THEORY_CONTENT).filter(([modId, data]) => {
    if (filterModuleId) return modId === filterModuleId;
    if (filterArea && filterArea !== "todas") return data.area === filterArea;
    return true;
  });

  modules.forEach(([modId, data]) => {
    // 1. Conceitos Chave
    (data.keyConcepts || []).forEach((kc, idx) => {
      cards.push({
        id: `${modId}-kc-${idx}`,
        topic: data.topic,
        area: data.area,
        areaName: data.areaName,
        category: "Conceito Fundamental",
        question: `Como funciona e qual a importância de: ${kc.title}?`,
        answer: kc.content,
        tip: "Tente recuperar com suas próprias palavras antes de virar o cartão.",
        badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30"
      });
    });

    // 2. Fórmulas e Regras
    (data.formulasAndRules || []).forEach((fr, idx) => {
      cards.push({
        id: `${modId}-fr-${idx}`,
        topic: data.topic,
        area: data.area,
        areaName: data.areaName,
        category: "Fórmula & Regra de Ouro",
        question: `Qual a fórmula ou princípio operacional central em: ${data.topic}?`,
        answer: fr,
        tip: "Foque nas unidades de medida e nas relações de proporcionalidade direta/inversa.",
        badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
      });
    });

    // 3. Pegadinhas do ENEM
    (data.enemTraps || []).forEach((trap, idx) => {
      cards.push({
        id: `${modId}-trap-${idx}`,
        topic: data.topic,
        area: data.area,
        areaName: data.areaName,
        category: "⚠️ Pegadinha Clássica do ENEM",
        question: `Qual o distrator mais frequente ou erro comum da banca em ${data.topic}?`,
        answer: trap,
        tip: "A TRI pune severamente quem cai nessas armadilhas conceituais!",
        badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30"
      });
    });

    // 4. Mnemônicos
    if (data.mnemonics) {
      cards.push({
        id: `${modId}-mne`,
        topic: data.topic,
        area: data.area,
        areaName: data.areaName,
        category: "💡 Mnemônico / Macete",
        question: `Qual o mnemônico acelerador para memorizar os tópicos de ${data.topic}?`,
        answer: data.mnemonics,
        tip: "Mnemônicos diminuem o tempo de resolução e reduzem a sobrecarga cognitiva na prova.",
        badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30"
      });
    }
  });

  // Embaralhar a pilha
  return cards.sort(() => Math.random() - 0.5);
}

export function FlashcardDeck({ 
  filterArea = null, 
  filterModuleId = null, 
  onClose,
  onXpEarned 
}) {
  const allCards = useMemo(() => buildFlashcards(filterArea, filterModuleId), [filterArea, filterModuleId]);
  const [deck, setDeck] = useState(allCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionStats, setSessionStats] = useState({ easy: 0, medium: 0, hard: 0, xp: 0 });
  const [isFinished, setIsFinished] = useState(false);

  const currentCard = deck[currentIndex];

  const handleFlip = () => {
    destinoAudio.playClick();
    setIsFlipped(prev => !prev);
  };

  const handleRate = (difficulty) => {
    destinoAudio.playClick();
    let earned = 10;
    if (difficulty === "facil") earned = 25;
    if (difficulty === "medio") earned = 15;

    const newStats = {
      ...sessionStats,
      [difficulty]: sessionStats[difficulty] + 1,
      xp: sessionStats.xp + earned
    };
    setSessionStats(newStats);
    onXpEarned?.(earned);

    if (difficulty === "facil") {
      destinoAudio.playSuccess();
    }

    // Se marcou difícil, re-insere o cartão mais adiante no deck para fixação imediata
    if (difficulty === "dificil" && deck.length > currentIndex + 2) {
      const cardToRepeat = { ...currentCard, id: `${currentCard.id}-retry` };
      setDeck(prev => [...prev, cardToRepeat]);
    }

    setIsFlipped(false);

    if (currentIndex < deck.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
      destinoAudio.playSuccess();
    }
  };

  const handleRestart = () => {
    destinoAudio.playClick();
    const fresh = buildFlashcards(filterArea, filterModuleId);
    setDeck(fresh);
    setCurrentIndex(0);
    setIsFlipped(false);
    setSessionStats({ easy: 0, medium: 0, hard: 0, xp: 0 });
    setIsFinished(false);
  };

  // Tela de Conclusão da Sessão de Flashcards
  if (isFinished || !currentCard) {
    return (
      <div className="mx-auto max-w-xl px-4 py-8 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="rounded-3xl border border-rose-500/30 bg-[#160a18] p-8 shadow-2xl backdrop-blur-xl"
        >
          <div className="mx-auto mb-4 grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-rose-500 to-pink-500 text-white shadow-lg shadow-rose-500/30">
            <Award size={32} />
          </div>

          <h2 className="font-display text-2xl font-bold text-white mb-2">
            Sessão de Active Recall Concluída! 🎓
          </h2>
          <p className="text-sm text-rose-200/70 mb-6">
            A recuperação ativa fortalece os caminhos neurais e garante que você acerte com rapidez na prova do ENEM.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-3">
              <span className="text-xl font-bold text-emerald-400 block">{sessionStats.easy}</span>
              <span className="text-[0.65rem] text-emerald-200/70 uppercase font-semibold">Fácil / Dominado</span>
            </div>
            <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-3">
              <span className="text-xl font-bold text-amber-400 block">{sessionStats.medium}</span>
              <span className="text-[0.65rem] text-amber-200/70 uppercase font-semibold">Médio / Em Fixação</span>
            </div>
            <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-3">
              <span className="text-xl font-bold text-rose-400 block">{sessionStats.hard}</span>
              <span className="text-[0.65rem] text-rose-200/70 uppercase font-semibold">Revisar Novamente</span>
            </div>
          </div>

          <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
            <span className="text-xs text-rose-200 font-semibold flex items-center gap-1.5">
              <Zap size={16} className="text-amber-400" />
              XP Acadêmico Conquistado:
            </span>
            <span className="text-sm font-black text-white">+{sessionStats.xp} XP</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={handleRestart}
              className="flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-bold text-white hover:bg-white/20 transition cursor-pointer"
            >
              <RotateCw size={16} />
              <span>Praticar Novamente</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rose-500/30 hover:scale-105 transition cursor-pointer"
            >
              <span>Voltar aos Estudos</span>
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const progressPercent = Math.round(((currentIndex) / deck.length) * 100);

  return (
    <div className="mx-auto max-w-2xl px-4 py-4 sm:py-6">
      
      {/* Top Bar com Navegação e Progresso */}
      <div className="mb-5 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-1.5 text-xs font-bold text-rose-300 hover:text-white transition cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Sair dos Flashcards</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold text-rose-200/70">
          <span>{currentIndex + 1} de {deck.length}</span>
          <div className="w-24 h-2 rounded-full bg-white/10 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-rose-500 to-pink-400 transition-all duration-300" 
              style={{ width: `${progressPercent}%` }} 
            />
          </div>
        </div>
      </div>

      {/* Cartão Interativo com Flip */}
      <div 
        onClick={handleFlip}
        className="perspective-1000 relative min-h-[360px] w-full cursor-pointer select-none"
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative size-full min-h-[360px] rounded-3xl border border-white/15 bg-gradient-to-br from-[#1c0d1e] to-[#120713] p-6 sm:p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between"
        >
          {/* FRENTE DO CARTÃO */}
          <div 
            style={{ backfaceVisibility: "hidden" }}
            className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-between ${isFlipped ? "pointer-events-none opacity-0" : "opacity-100"}`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`rounded-xl border px-3 py-1 text-xs font-bold ${currentCard.badgeColor}`}>
                  {currentCard.category}
                </span>
                <span className="text-xs text-rose-200/50 font-medium">
                  {currentCard.areaName}
                </span>
              </div>

              <span className="text-xs font-semibold uppercase tracking-wider text-rose-400/80 block mb-2">
                {currentCard.topic}
              </span>

              <h3 className="font-display text-lg sm:text-2xl text-white font-bold leading-relaxed mt-2">
                {currentCard.question}
              </h3>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
              <span className="text-xs text-rose-200/60 italic flex items-center gap-1.5">
                <Brain size={14} className="text-sky-400" />
                {currentCard.tip}
              </span>

              <button
                type="button"
                className="flex items-center gap-1.5 text-xs font-bold text-rose-300 hover:text-white transition"
              >
                <RotateCw size={14} />
                <span>Virar Cartão</span>
              </button>
            </div>
          </div>

          {/* VERSO DO CARTÃO (RESPOSTA / CONCEITO / FÓRMULA) */}
          <div 
            style={{ 
              transform: "rotateY(180deg)", 
              backfaceVisibility: "hidden" 
            }}
            className={`absolute inset-0 p-6 sm:p-8 flex flex-col justify-between ${!isFlipped ? "pointer-events-none opacity-0" : "opacity-100"}`}
          >
            <div className="overflow-y-auto max-h-[220px] pr-2">
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 size={16} />
                  <span>Conceito Consolidado</span>
                </span>
                <span className="text-xs text-rose-200/50">
                  {currentCard.topic}
                </span>
              </div>

              <div className="text-sm sm:text-base text-rose-50 leading-relaxed whitespace-pre-line font-medium">
                {currentCard.answer}
              </div>
            </div>

            <div className="mt-4 border-t border-white/10 pt-4 flex items-center justify-between text-xs text-rose-200/60">
              <span className="flex items-center gap-1">
                <Lightbulb size={13} className="text-amber-400" />
                Avalie sua retenção abaixo para ajustar o espaçamento.
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Barra de Avaliação de Recuperação Ativa (Apenas no Verso) */}
      <div className="mt-4">
        {isFlipped ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 gap-2.5"
          >
            <button
              type="button"
              onClick={() => handleRate("dificil")}
              className="flex flex-col items-center justify-center rounded-2xl border border-rose-500/30 bg-rose-950/30 p-3 hover:bg-rose-500/20 transition cursor-pointer"
            >
              <AlertCircle size={20} className="text-rose-400 mb-1" />
              <strong className="text-xs font-bold text-rose-200">Difícil</strong>
              <span className="text-[0.65rem] text-rose-300/60">Rever hoje</span>
            </button>

            <button
              type="button"
              onClick={() => handleRate("medio")}
              className="flex flex-col items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-950/30 p-3 hover:bg-amber-500/20 transition cursor-pointer"
            >
              <HelpCircle size={20} className="text-amber-400 mb-1" />
              <strong className="text-xs font-bold text-amber-200">Médio</strong>
              <span className="text-[0.65rem] text-amber-300/60">Rever amanhã</span>
            </button>

            <button
              type="button"
              onClick={() => handleRate("facil")}
              className="flex flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-950/30 p-3 hover:bg-emerald-500/20 transition cursor-pointer"
            >
              <CheckCircle2 size={20} className="text-emerald-400 mb-1" />
              <strong className="text-xs font-bold text-emerald-200">Fácil (+25 XP)</strong>
              <span className="text-[0.65rem] text-emerald-300/60">Dominado!</span>
            </button>
          </motion.div>
        ) : (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleFlip}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-xs font-bold text-rose-200 hover:bg-white/10 transition cursor-pointer"
            >
              <RotateCw size={14} />
              <span>Clique no cartão ou aqui para conferir a resposta</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
