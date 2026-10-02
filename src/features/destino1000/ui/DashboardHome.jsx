import { useMemo } from "react";
import {
  GraduationCap,
  Flame,
  Target,
  BookOpen,
  Brain,
  AlertTriangle,
  RotateCcw,
  Zap,
  PenTool,
  BarChart3,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  Calendar,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";
import { ENEM_AREAS } from "../content/curriculum";
import { estimateTRIScore, getDailyRecommendation } from "../learning/learningEngine";
import { getLevelInfo } from "../core/gameState";

/**
 * DashboardHome — Tela principal da plataforma de estudos.
 * Mostra resumo diário, recomendação inteligente, progresso por área,
 * e acesso rápido a todos os modos de estudo.
 */
export function DashboardHome({
  playerState = {},
  onNavigateToArea,
  onStartQuickSession,
  onStartReviewSession,
  onStartErrorSession,
  onStartSimulado,
  onGoToRedacao,
  onGoToAnalytics,
  onGoToAreas,
  onGoToBiblioteca,
}) {
  const {
    profile = {},
    masteryMatrix = {},
    history = [],
    errorNotebook = [],
  } = playerState;

  // Dados derivados
  const levelInfo = getLevelInfo(profile.currentXP);
  const recommendation = getDailyRecommendation(playerState);

  const today = new Date().toISOString().split("T")[0];
  const dueReviewsCount = (history || []).filter(
    (h) => h.reviewSchedule && h.reviewSchedule.nextReviewDate <= today
  ).length;
  const errorCount = (errorNotebook || []).length;

  // TRI scores para cada área
  const triScores = useMemo(() => ({
    matematica: estimateTRIScore(history, "matematica"),
    natureza: estimateTRIScore(history, "natureza"),
    humanas: estimateTRIScore(history, "humanas"),
    linguagens: estimateTRIScore(history, "linguagens"),
  }), [history]);

  const mediaTRI = Math.round(
    (triScores.matematica.estimatedScore +
      triScores.natureza.estimatedScore +
      triScores.humanas.estimatedScore +
      triScores.linguagens.estimatedScore +
      (masteryMatrix.redacao ? masteryMatrix.redacao * 10 : 800)) / 5
  );

  // Questões respondidas hoje
  const todayAttempts = (history || []).filter((h) => {
    const attemptDate = new Date(h.timestamp).toISOString().split("T")[0];
    return attemptDate === today;
  });
  const todayCorrect = todayAttempts.filter((h) => h.isCorrect).length;

  // Meta diária baseada no nível
  const dailyGoal = levelInfo.level >= 10 ? 30 : levelInfo.level >= 5 ? 20 : 10;
  const dailyProgress = Math.min(100, Math.round((todayAttempts.length / dailyGoal) * 100));

  // Saudação baseada na hora do dia
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  // Área mais fraca (para destaque visual)
  const weakestArea = Object.entries(triScores)
    .sort((a, b) => a[1].estimatedScore - b[1].estimatedScore)[0];

  const AREA_COLORS = {
    matematica: { accent: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/30", badge: "bg-sky-500/20 text-sky-300" },
    natureza: { accent: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", badge: "bg-emerald-500/20 text-emerald-300" },
    humanas: { accent: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", badge: "bg-amber-500/20 text-amber-300" },
    linguagens: { accent: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30", badge: "bg-pink-500/20 text-pink-300" },
    redacao: { accent: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30", badge: "bg-rose-500/20 text-rose-300" },
  };

  return (
    <div className="mx-auto max-w-6xl px-3 py-5 sm:px-6 space-y-6">

      {/* ═══ SAUDAÇÃO E RESUMO DIÁRIO ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a0d1f] via-[#160b17] to-[#120a16] p-5 sm:p-7 shadow-2xl relative overflow-hidden"
      >
        {/* Decoração de fundo */}
        <div className="absolute -top-10 -right-10 size-40 rounded-full bg-rose-500/5 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 size-32 rounded-full bg-sky-500/5 blur-3xl" />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <div>
              <p className="text-xs font-bold text-rose-300 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                <Calendar size={13} />
                <span>{new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}</span>
              </p>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {getGreeting()}, {profile.name || "Estudante"}! 💪
              </h1>
              <p className="text-sm text-rose-200/60 mt-1">
                {todayAttempts.length === 0
                  ? "Pronta para mais um dia de preparação rumo à Medicina? Bora!"
                  : `Hoje você já resolveu ${todayAttempts.length} questões${todayCorrect > 0 ? ` e acertou ${todayCorrect}` : ""}. Continue!`
                }
              </p>
            </div>

            {/* Nota Projetada */}
            <div className="flex items-center gap-3 rounded-2xl border border-rose-500/20 bg-rose-500/10 px-5 py-3 shrink-0">
              <TrendingUp size={20} className="text-rose-400" />
              <div className="text-center">
                <span className="text-xs text-rose-300 font-bold block">Nota Projetada</span>
                <span className="text-2xl font-display font-black text-white">{mediaTRI}</span>
                <span className="text-xs text-rose-200/60 block">pts ENEM</span>
              </div>
            </div>
          </div>

          {/* Métricas rápidas em linha */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-center">
              <Flame size={18} className="text-amber-400 mx-auto mb-1" />
              <span className="text-lg font-bold text-white block">{profile.streakDays || 1}d</span>
              <span className="text-[0.6rem] text-amber-200/70 uppercase tracking-wider font-semibold">Sequência</span>
            </div>
            <div className="rounded-xl border border-sky-500/20 bg-sky-500/10 p-3 text-center">
              <BookOpen size={18} className="text-sky-400 mx-auto mb-1" />
              <span className="text-lg font-bold text-white block">{profile.totalQuestionsSolved || 0}</span>
              <span className="text-[0.6rem] text-sky-200/70 uppercase tracking-wider font-semibold">Questões</span>
            </div>
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-center">
              <CheckCircle2 size={18} className="text-emerald-400 mx-auto mb-1" />
              <span className="text-lg font-bold text-white block">
                {profile.totalQuestionsSolved > 0
                  ? Math.round(((profile.totalQuestionsCorrect || 0) / profile.totalQuestionsSolved) * 100)
                  : 0}%
              </span>
              <span className="text-[0.6rem] text-emerald-200/70 uppercase tracking-wider font-semibold">Acerto</span>
            </div>
            <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-3 text-center">
              <Sparkles size={18} className="text-purple-400 mx-auto mb-1" />
              <span className="text-lg font-bold text-white block">Nv {levelInfo.level}</span>
              <span className="text-[0.6rem] text-purple-200/70 uppercase tracking-wider font-semibold">{profile.currentXP || 0} XP</span>
            </div>
          </div>

          {/* Barra de progresso diário */}
          <div className="mt-4 rounded-xl bg-white/5 border border-white/10 p-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-rose-200/80 flex items-center gap-1">
                <Target size={13} />
                Meta Diária: {todayAttempts.length}/{dailyGoal} questões
              </span>
              <span className="text-xs font-bold text-rose-300">{dailyProgress}%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-rose-400 to-pink-500"
                initial={{ width: 0 }}
                animate={{ width: `${dailyProgress}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ═══ AÇÕES RÁPIDAS DE ESTUDO ═══ */}
      <div>
        <h2 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
          <Zap size={16} className="text-amber-400" />
          <span>Começar a Estudar</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

          {/* Recomendação Inteligente */}
          <motion.button
            type="button"
            onClick={() => onNavigateToArea?.(recommendation.recommendedArea)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-500/15 to-pink-500/10 p-4 text-left hover:bg-rose-500/20 hover:border-rose-400 transition cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute top-2 right-2">
              <span className="rounded-full bg-rose-500 px-2 py-0.5 text-[0.55rem] font-bold text-white uppercase">
                IA Recomenda
              </span>
            </div>
            <Brain size={20} className="text-rose-400 mb-2" />
            <h3 className="font-bold text-white text-sm mb-1">Estudo Prioritário</h3>
            <p className="text-[0.65rem] text-rose-200/60 leading-relaxed mb-2">
              {recommendation.reason}
            </p>
            <span className="text-xs font-bold text-rose-300 group-hover:translate-x-1 transition inline-flex items-center gap-1">
              Começar Agora <ChevronRight size={14} />
            </span>
          </motion.button>

          {/* Revisão Espaçada */}
          <motion.button
            type="button"
            onClick={onStartReviewSession}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-sky-500/20 bg-sky-950/20 p-4 text-left hover:bg-sky-500/10 hover:border-sky-400 transition cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <RotateCcw size={20} className="text-sky-400" />
              <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[0.6rem] font-bold text-sky-200">
                {dueReviewsCount > 0 ? `${dueReviewsCount} pendentes` : "Em dia ✅"}
              </span>
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Revisão do Dia</h3>
            <p className="text-[0.65rem] text-rose-200/60 leading-relaxed mb-2">
              Consolidação na curva de esquecimento (SM-2).
            </p>
            <span className="text-xs font-bold text-sky-300 group-hover:translate-x-1 transition inline-flex items-center gap-1">
              Iniciar Revisão <ChevronRight size={14} />
            </span>
          </motion.button>

          {/* Caderno de Erros */}
          <motion.button
            type="button"
            onClick={onStartErrorSession}
            disabled={errorCount === 0}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-amber-500/20 bg-amber-950/20 p-4 text-left hover:bg-amber-500/10 hover:border-amber-400 transition cursor-pointer group disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle size={20} className="text-amber-400" />
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[0.6rem] font-bold text-amber-200">
                {errorCount} {errorCount === 1 ? "erro" : "erros"}
              </span>
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Superar Erros</h3>
            <p className="text-[0.65rem] text-rose-200/60 leading-relaxed mb-2">
              Refaça questões erradas até dominar completamente.
            </p>
            <span className="text-xs font-bold text-amber-300 group-hover:translate-x-1 transition inline-flex items-center gap-1">
              {errorCount > 0 ? "Treinar Erros" : "Nenhum erro"} <ChevronRight size={14} />
            </span>
          </motion.button>

          {/* Treino Rápido */}
          <motion.button
            type="button"
            onClick={() => onStartQuickSession?.(10)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="rounded-2xl border border-purple-500/20 bg-purple-950/20 p-4 text-left hover:bg-purple-500/10 hover:border-purple-400 transition cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <Zap size={20} className="text-purple-400" />
              <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-[0.6rem] font-bold text-purple-200">
                10 min
              </span>
            </div>
            <h3 className="font-bold text-white text-sm mb-1">Tenho 10 Minutos</h3>
            <p className="text-[0.65rem] text-rose-200/60 leading-relaxed mb-2">
              Sessão rápida de 4-5 questões interdisciplinares.
            </p>
            <span className="text-xs font-bold text-purple-300 group-hover:translate-x-1 transition inline-flex items-center gap-1">
              Iniciar Sprint <ChevronRight size={14} />
            </span>
          </motion.button>
        </div>
      </div>

      {/* ═══ PROGRESSO POR ÁREA DO ENEM ═══ */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <BarChart3 size={16} className="text-sky-400" />
            <span>Suas Notas Projetadas (TRI)</span>
          </h2>
          <button
            type="button"
            onClick={onGoToAnalytics}
            className="text-xs font-bold text-rose-300 hover:text-white transition cursor-pointer flex items-center gap-1"
          >
            Ver detalhes <ChevronRight size={13} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {Object.entries(triScores).map(([areaKey, tri]) => {
            const areaInfo = ENEM_AREAS[areaKey];
            const colors = AREA_COLORS[areaKey];
            const isWeakest = weakestArea[0] === areaKey;
            const mastery = masteryMatrix[areaKey] || 50;

            return (
              <motion.button
                key={areaKey}
                type="button"
                onClick={() => onNavigateToArea?.(areaKey)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className={`rounded-2xl border ${colors.border} ${colors.bg} p-4 text-left hover:scale-[1.02] transition cursor-pointer group relative`}
              >
                {isWeakest && (
                  <div className="absolute -top-1.5 -right-1.5">
                    <span className="rounded-full bg-amber-500 px-1.5 py-0.5 text-[0.5rem] font-bold text-amber-950 uppercase animate-pulse">
                      Foco
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-bold uppercase tracking-wider ${colors.accent}`}>
                    {areaInfo?.shortName}
                  </span>
                  <span className={`rounded-lg px-2 py-0.5 text-[0.6rem] font-bold ${colors.badge}`}>
                    {mastery}% domínio
                  </span>
                </div>

                <div className="text-center mb-3">
                  <span className="text-3xl font-display font-black text-white block">
                    {tri.estimatedScore}
                  </span>
                  <span className="text-[0.6rem] text-rose-200/50">pontos TRI</span>
                </div>

                {/* Barra de domínio */}
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mb-2">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      mastery >= 70 ? "bg-emerald-400" : mastery >= 50 ? "bg-amber-400" : "bg-rose-400"
                    }`}
                    style={{ width: `${mastery}%` }}
                  />
                </div>

                <span className="text-[0.6rem] text-rose-200/50 flex items-center justify-between">
                  <span>{tri.totalAnswered} questões</span>
                  <span className="group-hover:translate-x-1 transition inline-flex items-center gap-0.5 font-bold">
                    Estudar <ChevronRight size={10} />
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ═══ SIMULADOS E REDAÇÃO ═══ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

        {/* Simulados */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a0d1f] to-[#120a16] p-5 shadow-xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <Target size={18} className="text-rose-400" />
            <h3 className="font-bold text-white text-sm">Simulados ENEM</h3>
          </div>
          <p className="text-[0.65rem] text-rose-200/60 mb-4 leading-relaxed">
            Treine sob pressão de tempo real, com mix interdisciplinar e análise TRI.
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => onStartSimulado?.(10)}
              className="rounded-xl bg-white/5 border border-white/10 py-2.5 text-center text-xs font-bold text-white hover:bg-rose-500/15 hover:border-rose-500/30 transition cursor-pointer"
            >
              <span className="block text-base">10</span>
              <span className="text-[0.55rem] text-rose-200/50">questões</span>
            </button>
            <button
              type="button"
              onClick={() => onStartSimulado?.(20)}
              className="rounded-xl bg-white/5 border border-white/10 py-2.5 text-center text-xs font-bold text-white hover:bg-sky-500/15 hover:border-sky-500/30 transition cursor-pointer"
            >
              <span className="block text-base">20</span>
              <span className="text-[0.55rem] text-rose-200/50">questões</span>
            </button>
            <button
              type="button"
              onClick={() => onStartSimulado?.(45)}
              className="rounded-xl bg-rose-500/10 border border-rose-500/30 py-2.5 text-center text-xs font-bold text-white hover:bg-rose-500/20 transition cursor-pointer relative"
            >
              <span className="block text-base">45</span>
              <span className="text-[0.55rem] text-rose-200/50">oficial</span>
            </button>
          </div>
        </motion.div>

        {/* Redação */}
        <motion.button
          type="button"
          onClick={onGoToRedacao}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-950/30 to-pink-950/10 p-5 shadow-xl text-left hover:bg-rose-500/10 hover:border-rose-400 transition cursor-pointer group"
        >
          <div className="flex items-center gap-2 mb-3">
            <PenTool size={18} className="text-rose-400" />
            <h3 className="font-bold text-white text-sm">Redação Nota 1000</h3>
          </div>
          <p className="text-[0.65rem] text-rose-200/60 mb-4 leading-relaxed">
            Laboratório completo: estrutura do texto, repertórios socioculturais, proposta de intervenção e avaliação por competência.
          </p>
          <span className="text-xs font-bold text-rose-300 group-hover:translate-x-1 transition inline-flex items-center gap-1">
            Abrir Laboratório <ChevronRight size={14} />
          </span>
        </motion.button>
      </div>

      {/* ═══ BIBLIOTECA DIDÁTICA (APOSTILAS COMPLETAS) ═══ */}
      <motion.button
        type="button"
        onClick={onGoToBiblioteca}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38 }}
        className="w-full rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-orange-950/20 to-slate-900/60 p-4 hover:bg-amber-950/60 hover:border-amber-400/60 transition cursor-pointer flex items-center justify-between group shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <BookOpen size={22} />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-white text-sm">Biblioteca Didática: 7 Apostilas Completas</h3>
              <span className="px-1.5 py-0.5 rounded text-[0.6rem] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Padrão Medicina
              </span>
            </div>
            <p className="text-[0.65rem] text-slate-300 mt-0.5">
              Livros aprofundados de Funções, Eletrodinâmica, Ecologia, Brasil Contemporâneo, Argumentação e Redação 1000.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-xs font-bold text-amber-300 group-hover:translate-x-1 transition">
          <span>Abrir Biblioteca</span>
          <ChevronRight size={18} />
        </div>
      </motion.button>

      {/* ═══ EXPLORAR TODAS AS ÁREAS ═══ */}
      <motion.button
        type="button"
        onClick={onGoToAreas}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] hover:border-white/20 transition cursor-pointer flex items-center justify-between group"
      >
        <div className="flex items-center gap-3">
          <GraduationCap size={22} className="text-rose-300" />
          <div className="text-left">
            <h3 className="font-bold text-white text-sm">Explorar Todas as Áreas e Módulos</h3>
            <p className="text-[0.65rem] text-rose-200/60 mt-0.5">
              Escolha uma matéria, leia a teoria completa e pratique questões comentadas
            </p>
          </div>
        </div>
        <ChevronRight size={18} className="text-rose-300 group-hover:translate-x-1 transition" />
      </motion.button>

      {/* ═══ BILHETE DO FELIPE ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="rounded-2xl border border-rose-500/15 bg-gradient-to-r from-rose-950/20 via-pink-950/10 to-purple-950/20 p-5 text-center"
      >
        <p className="font-serif italic text-sm text-rose-100/80 leading-relaxed max-w-xl mx-auto">
          "Cada questão que você resolve com foco e atenção é um passo a menos entre o seu quarto de estudos e a faculdade de Medicina. Tenho um orgulho infinito de você!" ❤️
        </p>
        <span className="block text-[0.6rem] font-bold text-rose-300/60 mt-2 uppercase tracking-widest">
          — Felipe
        </span>
      </motion.div>

    </div>
  );
}
