import { useState, useMemo } from "react";
import { 
  BookOpen, 
  Search, 
  Clock, 
  ArrowLeft, 
  CheckCircle2, 
  Zap, 
  Sparkles, 
  ChevronRight, 
  BookMarked, 
  GraduationCap, 
  Layers, 
  ArrowRight, 
  AlertTriangle, 
  Lightbulb, 
  CheckSquare,
  Target,
  Activity,
  List,
  Bookmark,
  Sun,
  Moon,
  Type
} from "lucide-react";
import { ALL_ENEM_BOOKS, BOOKS_BY_AREA } from "../content/books/index";
import { RichMarkdownReader, extractHeadings } from "./RichMarkdownReader";

export function BibliotecaHub({ onStartTopicSession, onBackToHub }) {
  const [selectedArea, setSelectedArea] = useState("todas");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeBook, setActiveBook] = useState(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [fontSize, setFontSize] = useState(() => {
    try {
      return localStorage.getItem("destino1000_font_size") || "normal";
    } catch {
      return "normal";
    }
  }); // 'sm' | 'normal' | 'large'
  const [fontFamily, setFontFamily] = useState(() => {
    try {
      return localStorage.getItem("destino1000_font_family") || "sans";
    } catch {
      return "sans";
    }
  }); // 'sans' | 'serif'
  const [readingTheme, setReadingTheme] = useState(() => {
    try {
      return localStorage.getItem("destino1000_reading_theme") || "slate";
    } catch {
      return "slate";
    }
  }); // 'slate' | 'sepia'
  const [showToc, setShowToc] = useState(false);
  const [completedChapters, setCompletedChapters] = useState(() => {
    try {
      const saved = localStorage.getItem("destino1000_completed_chapters");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const getAreaLabel = (book) => {
    if (book.areaLabel) return book.areaLabel;
    const a = book.area || book.areaId;
    if (a === "matematica") return "Matemática e suas Tecnologias";
    if (a === "natureza") return "Ciências da Natureza";
    if (a === "humanas") return "Ciências Humanas";
    if (a === "linguagens") return "Linguagens e Códigos";
    if (a === "redacao") return "Redação ENEM Nota 1000";
    return "Material Didático ENEM";
  };

  const getBookArea = (book) => book.area || book.areaId || "geral";

  // Salvar conclusão de leitura
  const handleToggleChapterComplete = (chapterKey) => {
    setCompletedChapters((prev) => {
      const updated = { ...prev, [chapterKey]: !prev[chapterKey] };
      try {
        localStorage.setItem("destino1000_completed_chapters", JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // Filtragem de livros
  const filteredBooks = useMemo(() => {
    let list = selectedArea === "todas" ? ALL_ENEM_BOOKS : (BOOKS_BY_AREA[selectedArea] || []);
    if (!searchQuery.trim()) return list;

    const query = searchQuery.toLowerCase();
    return list.filter((b) => {
      const titleMatch = b.title.toLowerCase().includes(query);
      const subMatch = b.subtitle?.toLowerCase().includes(query) || false;
      const chapterMatch = b.chapters.some((c) => 
        c.title.toLowerCase().includes(query) || 
        (c.summary && c.summary.toLowerCase().includes(query)) ||
        (c.deepContent && c.deepContent.toLowerCase().includes(query)) ||
        (c.content && c.content.toLowerCase().includes(query))
      );
      return titleMatch || subMatch || chapterMatch;
    });
  }, [selectedArea, searchQuery]);

  const currentChapter = activeBook ? activeBook.chapters[activeChapterIndex] : null;

  const handleOpenBook = (book, chapterIdx = 0) => {
    setActiveBook(book);
    setActiveChapterIndex(chapterIdx);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNextChapter = () => {
    if (activeBook && activeChapterIndex < activeBook.chapters.length - 1) {
      setActiveChapterIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevChapter = () => {
    if (activeBook && activeChapterIndex > 0) {
      setActiveChapterIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Se estiver lendo um livro
  if (activeBook && currentChapter) {
    const chapterNum = currentChapter.number || currentChapter.chapterNumber || (activeChapterIndex + 1);
    const chapterId = currentChapter.id || `${activeBook.id}-cap-${chapterNum}`;
    const isCompleted = !!completedChapters[chapterId];
    const readingTime = currentChapter.readingTimeMin || Math.round((activeBook.estimatedReadingTimeMinutes || activeBook.estimatedReadTimeMinutes || 48) / activeBook.chapters.length);

    // Normalização universal do texto principal do capítulo
    const mainText = currentChapter.deepContent || currentChapter.content || "";

    // Agregação universal de exemplos resolvidos (singular ou plural)
    const allWorkedExamples = [
      ...(Array.isArray(currentChapter.workedExamples) ? currentChapter.workedExamples : []),
      ...(currentChapter.workedExample ? [currentChapter.workedExample] : [])
    ];

    // Agregação de aplicações práticas e no mundo real
    const allApplications = [
      ...(Array.isArray(currentChapter.realWorldApplications) ? currentChapter.realWorldApplications : []),
      ...(typeof currentChapter.realWorldApplication === "string" ? [currentChapter.realWorldApplication] : [])
    ];

    // Agregação de armadilhas e equívocos frequentes
    const allTraps = [
      ...(Array.isArray(currentChapter.commonTraps) ? currentChapter.commonTraps : []),
      ...(Array.isArray(currentChapter.commonMisconceptions) ? currentChapter.commonMisconceptions : [])
    ];

    // Agregação de checklist de domínio e retenção
    const allChecklist = [
      ...(Array.isArray(currentChapter.retentionChecklist) ? currentChapter.retentionChecklist : []),
      ...(Array.isArray(currentChapter.quickReviewPoints) ? currentChapter.quickReviewPoints : [])
    ];

    const isSepia = readingTheme === "sepia";
    const headings = useMemo(() => extractHeadings(mainText), [mainText]);

    const handleCycleFontSize = () => {
      setFontSize((curr) => {
        const next = curr === "sm" ? "normal" : curr === "normal" ? "large" : "sm";
        try { localStorage.setItem("destino1000_font_size", next); } catch (e) {}
        return next;
      });
    };

    const handleToggleFontFamily = () => {
      setFontFamily((curr) => {
        const next = curr === "sans" ? "serif" : "sans";
        try { localStorage.setItem("destino1000_font_family", next); } catch (e) {}
        return next;
      });
    };

    const handleToggleReadingTheme = () => {
      setReadingTheme((curr) => {
        const next = curr === "slate" ? "sepia" : "slate";
        try { localStorage.setItem("destino1000_reading_theme", next); } catch (e) {}
        return next;
      });
    };

    return (
      <div className={`min-h-screen transition-colors duration-200 pb-24 ${
        isSepia ? "bg-[#181411] text-[#e8e0d5]" : "bg-slate-950 text-slate-100"
      }`}>
        {/* Barra superior de leitura */}
        <header className={`sticky top-0 z-30 backdrop-blur-md border-b px-4 py-3 transition-colors ${
          isSepia 
            ? "bg-[#1f1914]/90 border-[#3d3126]" 
            : "bg-slate-900/90 border-slate-800"
        }`}>
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
            <button
              onClick={() => setActiveBook(null)}
              className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors px-3 py-1.5 rounded-lg border cursor-pointer ${
                isSepia
                  ? "bg-[#29221a] hover:bg-[#342b21] text-[#e8e0d5] border-[#44372b]"
                  : "bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Estante</span>
            </button>

            <div className="text-center truncate flex-1 hidden md:block">
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {getAreaLabel(activeBook)} • Cap. {chapterNum} de {activeBook.chapters.length}
              </span>
              <p className="text-sm font-bold truncate">{currentChapter.title}</p>
            </div>

            {/* Ferramentas de Leitura & Conforto Visual */}
            <div className="flex items-center gap-1.5">
              {headings.length > 0 && (
                <button
                  onClick={() => setShowToc((v) => !v)}
                  className={`text-xs font-semibold px-2.5 py-1.5 rounded border transition-colors flex items-center gap-1 cursor-pointer ${
                    showToc
                      ? "bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-xs"
                      : isSepia
                      ? "bg-[#29221a] text-[#e8e0d5] border-[#44372b] hover:border-amber-500/60"
                      : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                  }`}
                  title="Sumário de tópicos do capítulo"
                >
                  <List className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Índice ({headings.length})</span>
                </button>
              )}

              <button
                onClick={handleToggleFontFamily}
                className={`text-xs font-semibold px-2.5 py-1.5 rounded border transition-colors flex items-center gap-1 cursor-pointer ${
                  fontFamily === "serif"
                    ? "bg-amber-950/60 text-amber-300 border-amber-700 font-serif"
                    : isSepia
                    ? "bg-[#29221a] text-[#e8e0d5] border-[#44372b]"
                    : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                }`}
                title={fontFamily === "serif" ? "Fonte Serifada Ativa (Editorial)" : "Fonte Moderna (Sans-serif)"}
              >
                <Type className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{fontFamily === "serif" ? "Serif" : "Sans"}</span>
              </button>

              <button
                onClick={handleToggleReadingTheme}
                className={`text-xs font-semibold px-2.5 py-1.5 rounded border transition-colors flex items-center gap-1 cursor-pointer ${
                  isSepia
                    ? "bg-[#33271d] text-amber-200 border-[#533f2e]"
                    : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                }`}
                title={isSepia ? "Tema Sépia Ativo (Conforto Papel)" : "Tema Escuro Noturno Ativo"}
              >
                {isSepia ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-sky-300" />}
                <span className="hidden sm:inline">{isSepia ? "Sépia" : "Escuro"}</span>
              </button>

              <button
                onClick={handleCycleFontSize}
                className={`text-xs font-semibold px-2.5 py-1.5 rounded border transition-colors cursor-pointer ${
                  isSepia
                    ? "bg-[#29221a] text-[#e8e0d5] border-[#44372b]"
                    : "bg-slate-800 border-slate-700 text-slate-300 hover:text-white"
                }`}
                title="Ajustar tamanho da fonte (Pequeno, Normal, Grande)"
              >
                {fontSize === "sm" ? "A-" : fontSize === "large" ? "A+" : "A"}
              </button>

              <button
                onClick={() => handleToggleChapterComplete(chapterId)}
                className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                  isCompleted
                    ? "bg-emerald-950/80 border-emerald-600 text-emerald-300"
                    : isSepia
                    ? "bg-[#29221a] border-[#44372b] text-[#dfd7cc] hover:border-slate-500"
                    : "bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-500"
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${isCompleted ? "text-emerald-400" : "text-slate-400"}`} />
                <span className="hidden sm:inline">{isCompleted ? "Concluído" : "Lido"}</span>
              </button>
            </div>
          </div>

          {/* Gaveta / Dropdown do Sumário (TOC) */}
          {showToc && headings.length > 0 && (
            <div className={`max-w-4xl mx-auto mt-3 p-4 rounded-2xl border shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150 ${
              isSepia 
                ? "bg-[#211a14]/95 border-[#423425] text-[#e8e0d5]" 
                : "bg-slate-900/95 border-slate-800 text-slate-200"
            }`}>
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5" /> Sumário do Capítulo ({headings.length} tópicos)
                </span>
                <button 
                  onClick={() => setShowToc(false)}
                  className="text-xs text-slate-400 hover:text-white cursor-pointer px-2 py-0.5 rounded hover:bg-slate-800/50"
                >
                  Fechar
                </button>
              </div>
              <div className="max-h-64 overflow-y-auto space-y-1 text-xs pr-1">
                {headings.map((h, hIdx) => (
                  <button
                    key={hIdx}
                    onClick={() => {
                      setShowToc(false);
                      const el = document.getElementById(h.id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`w-full text-left py-1.5 px-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer ${
                      h.level === 1 
                        ? "font-bold text-white hover:bg-amber-500/10 hover:text-amber-300" 
                        : h.level === 2 
                        ? "pl-4 text-slate-300 hover:bg-slate-800/60 hover:text-white" 
                        : "pl-6 text-slate-400 hover:bg-slate-800/40"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 flex-shrink-0" />
                    <span className="truncate">{h.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </header>

        {/* Conteúdo do Capítulo */}
        <main className="max-w-3xl mx-auto px-4 pt-6">
          {/* Breadcrumb & Metadados */}
          <div className={`mb-6 pb-6 border-b ${isSepia ? "border-[#3d3126]" : "border-slate-800"}`}>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <span className={`px-2 py-0.5 rounded border font-semibold text-amber-300 ${
                isSepia ? "bg-[#29221a] border-[#44372b]" : "bg-slate-800 border-slate-700"
              }`}>
                {activeBook.title}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                ~{readingTime} min de leitura
              </span>
              {currentChapter.targetSkill && (
                <>
                  <span>•</span>
                  <span className="text-sky-400 font-medium truncate max-w-xs">{currentChapter.targetSkill}</span>
                </>
              )}
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {currentChapter.title}
            </h1>
            {currentChapter.subtitle && (
              <p className={`text-sm sm:text-base font-medium mb-3 ${isSepia ? "text-[#c2b6a6]" : "text-slate-400"}`}>
                {currentChapter.subtitle}
              </p>
            )}
            {currentChapter.summary && (
              <p className={`text-sm sm:text-base leading-relaxed p-3.5 rounded-xl border ${
                isSepia 
                  ? "bg-[#211a14] border-[#3d3126] text-[#dfd7cc]" 
                  : "bg-slate-900/60 border-slate-800 text-slate-300"
              }`}>
                💡 <span className="font-semibold text-white">Visão Geral:</span> {currentChapter.summary}
              </p>
            )}

            {/* Habilidades Alvo em Chips */}
            {Array.isArray(currentChapter.targetSkills) && currentChapter.targetSkills.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {currentChapter.targetSkills.map((sk, sIdx) => (
                  <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-sky-950/50 border border-sky-800/40 text-sky-300 text-xs">
                    {sk}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Navegador rápido de capítulos (Chips horizontais) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar text-xs">
            {activeBook.chapters.map((chap, idx) => {
              const active = idx === activeChapterIndex;
              const cNum = chap.number || chap.chapterNumber || (idx + 1);
              const cId = chap.id || `${activeBook.id}-cap-${cNum}`;
              const completed = !!completedChapters[cId];
              return (
                <button
                  key={cId}
                  onClick={() => handleOpenBook(activeBook, idx)}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full border transition-all flex items-center gap-1.5 cursor-pointer ${
                    active
                      ? "bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md shadow-amber-500/20"
                      : completed
                      ? "bg-emerald-950/40 text-emerald-300 border-emerald-800 hover:border-emerald-600"
                      : isSepia
                      ? "bg-[#251f18] text-[#c2b6a6] border-[#3d3126] hover:text-white"
                      : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  <span>Cap. {cNum}</span>
                  {completed && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                </button>
              );
            })}
          </div>

          {/* Objetivos de Aprendizagem do Capítulo */}
          {Array.isArray(currentChapter.learningObjectives) && currentChapter.learningObjectives.length > 0 && (
            <div className={`mb-8 p-4 sm:p-5 rounded-2xl border shadow-md ${
              isSepia 
                ? "bg-[#221b15] border-[#3d3126]" 
                : "bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border-slate-800"
            }`}>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                <Target className="w-4 h-4 text-amber-400" />
                <span>Objetivos de Domínio deste Capítulo</span>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {currentChapter.learningObjectives.map((obj, oIdx) => (
                  <li key={oIdx} className={`flex items-start gap-2 p-2.5 rounded-xl border ${
                    isSepia 
                      ? "bg-[#1d1712] border-[#382b20] text-[#dfd7cc]" 
                      : "bg-slate-950/60 border-slate-800/80"
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Corpo do Conteúdo do Capítulo */}
          <article className="space-y-8">
            {/* Se o capítulo estiver estruturado em 'sections' */}
            {currentChapter.sections && currentChapter.sections.length > 0 && (
              <div className="space-y-8">
                {currentChapter.sections.map((sec, sIdx) => (
                  <div key={sIdx} className="space-y-4">
                    <h2 className="text-xl font-bold text-amber-300 flex items-center gap-2 border-b border-slate-800/80 pb-2">
                      <BookMarked className="w-5 h-5 text-amber-400 flex-shrink-0" />
                      <span>{sec.heading}</span>
                    </h2>

                    <RichMarkdownReader 
                      content={sec.content} 
                      fontSize={fontSize} 
                      fontFamily={fontFamily} 
                      theme={readingTheme} 
                    />

                    {sec.didacticBox && (
                      <div className="my-5 p-4 rounded-xl bg-gradient-to-r from-amber-950/50 via-amber-900/30 to-slate-900 border border-amber-600/50 shadow-inner">
                        <div className="flex items-center gap-2 text-amber-300 font-bold text-sm mb-1">
                          <Sparkles className="w-4 h-4 text-amber-400" />
                          <span>{sec.didacticBox.title}</span>
                        </div>
                        <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                          {sec.didacticBox.body}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Conteúdo contínuo enriquecido (deepContent ou content) */}
            {mainText && (
              <div className="space-y-6">
                <RichMarkdownReader 
                  content={mainText} 
                  fontSize={fontSize} 
                  fontFamily={fontFamily} 
                  theme={readingTheme} 
                />
              </div>
            )}

            {/* Exemplos Resolvidos e Modelados Modelo ENEM */}
            {allWorkedExamples.length > 0 && (
              <div className="space-y-6 my-10">
                <div className="flex items-center gap-2 text-indigo-300 font-extrabold text-base border-b border-indigo-900/60 pb-2.5">
                  <Lightbulb className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>Exemplos Resolvidos e Modelados • Padrão ENEM</span>
                </div>
                {allWorkedExamples.map((ex, exIdx) => {
                  const problem = ex.enunciado || ex.problem;
                  const steps = Array.isArray(ex.stepByStep) 
                    ? ex.stepByStep 
                    : ex.stepByStep 
                    ? [ex.stepByStep] 
                    : ex.resolution 
                    ? [ex.resolution] 
                    : [];
                  const answer = ex.gabarito || ex.answer;
                  const insight = ex.keyInsight;

                  return (
                    <div key={exIdx} className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 border border-indigo-700/60 shadow-xl space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                          {ex.title || `Exemplo Resolvido ${exIdx + 1}`}
                        </span>
                      </div>

                      {problem && (
                        <div className="bg-slate-950/90 p-4 rounded-xl border border-indigo-900/50 text-sm text-slate-200">
                          <strong className="text-amber-300 block mb-1.5 flex items-center gap-1.5">
                            <span>Enunciado Modelo:</span>
                          </strong>
                          <div className="whitespace-pre-line leading-relaxed">{problem}</div>
                        </div>
                      )}

                      {steps.length > 0 && (
                        <div className="bg-indigo-950/30 p-4 rounded-xl border border-indigo-800/40 text-sm text-indigo-100 space-y-2">
                          <strong className="text-emerald-400 block mb-1">
                            Resolução Passo a Passo:
                          </strong>
                          {steps.map((st, sIdx) => (
                            <div key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{st}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {answer && (
                        <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/50 text-xs sm:text-sm text-emerald-200">
                          <strong className="text-emerald-300">Gabarito Comentado:</strong> {answer}
                        </div>
                      )}

                      {insight && (
                        <div className="text-xs sm:text-sm text-amber-300 bg-amber-950/40 p-3 rounded-xl border border-amber-800/50">
                          ⚡ <strong className="text-amber-200">Pulo do Gato (TRI):</strong> {insight}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Aplicações Práticas, Saúde e Tecnologia */}
            {allApplications.length > 0 && (
              <div className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-sky-950/30 to-slate-900 border border-cyan-800/50 shadow-md">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm mb-3">
                  <Activity className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Aplicações no Mundo Real, Saúde e Tecnologia</span>
                </div>
                <ul className="space-y-2.5">
                  {allApplications.map((app, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-cyan-100/90 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Armadilhas Mais Frequentes e Pegadinhas da Banca */}
            {allTraps.length > 0 && (
              <div className="my-8 p-5 sm:p-6 rounded-2xl bg-rose-950/30 border border-rose-800/60 shadow-md">
                <div className="flex items-center gap-2 text-rose-300 font-bold text-sm mb-3">
                  <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>Armadilhas Mais Frequentes e Pegadinhas da Banca</span>
                </div>
                <ul className="space-y-2.5">
                  {allTraps.map((trap, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-rose-100/90 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                      <span>{trap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Checklist de Domínio e Retenção Ativa */}
            {allChecklist.length > 0 && (
              <div className="my-8 p-5 sm:p-6 rounded-2xl bg-emerald-950/30 border border-emerald-800/60 shadow-md">
                <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm mb-3">
                  <CheckSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Checklist de Domínio e Retenção Ativa</span>
                </div>
                <ul className="space-y-2.5">
                  {allChecklist.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          {/* Card Decisivo: Da Teoria para a Ação / Questões ENEM */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 border border-indigo-700/60 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-xl border border-indigo-500/40">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Fixação Imediata do Conhecimento
                </span>
                <h3 className="text-lg font-extrabold text-white mt-0.5 mb-1.5">
                  Consolidar este Capítulo com Questões Oficiais do ENEM
                </h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  Estudos cognitivos comprovam que praticar ativamente logo após a teoria consolida as sinapses e evita a perda de retenção. Pratique agora o módulo com 10 questões comentadas.
                </p>
                
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => {
                      if (onStartTopicSession) {
                        const mId = currentChapter.practiceModuleId || "matematica/funcoes";
                        const modulePath = mId.includes("/") ? mId : `${getBookArea(activeBook)}/${mId}`;
                        onStartTopicSession(modulePath, currentChapter.title);
                      }
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-102 active:scale-98 cursor-pointer"
                  >
                    <Zap className="w-4 h-4 text-amber-300" />
                    <span>Praticar Questões deste Tema</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleToggleChapterComplete(chapterId)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold transition-colors cursor-pointer"
                  >
                    <CheckCircle2 className={`w-4 h-4 ${isCompleted ? "text-emerald-400" : "text-slate-400"}`} />
                    <span>{isCompleted ? "Capítulo Concluído!" : "Marcar como Estudado"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navegação entre capítulos */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between gap-4">
            <button
              onClick={handlePrevChapter}
              disabled={activeChapterIndex === 0}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                activeChapterIndex === 0
                  ? "opacity-40 cursor-not-allowed border-slate-800 text-slate-600"
                  : "bg-slate-900 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Capítulo Anterior</span>
            </button>

            <span className="text-xs text-slate-500 font-medium">
              {activeChapterIndex + 1} de {activeBook.chapters.length}
            </span>

            <button
              onClick={handleNextChapter}
              disabled={activeChapterIndex === activeBook.chapters.length - 1}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition-all cursor-pointer ${
                activeChapterIndex === activeBook.chapters.length - 1
                  ? "opacity-40 cursor-not-allowed border-slate-800 text-slate-600"
                  : "bg-amber-600 border-amber-500 text-slate-950 font-bold hover:bg-amber-500 shadow-md shadow-amber-600/20"
              }`}
            >
              <span>Próximo Capítulo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>
    );
  }

  // Visualização da Estante (Catálogo de Livros Didáticos)
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-24 px-4 pt-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Cabeçalho da Biblioteca */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Biblioteca Didática Destino 1000 • Padrão Medicina</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Apostilas e Livros Teóricos Completos
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Material pedagógico aprofundado, sem resumos rasos. Fórmulas, contextualizações e pontes diretas para questões oficiais.
            </p>
          </div>

          {onBackToHub && (
            <button
              onClick={onBackToHub}
              className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-850 text-sm font-semibold cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Início</span>
            </button>
          )}
        </div>

        {/* Barra de Filtros e Busca */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Seletor de Áreas */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {[
              { id: "todas", label: "Todas as Áreas" },
              { id: "matematica", label: "Matemática" },
              { id: "natureza", label: "Ciências da Natureza" },
              { id: "humanas", label: "Ciências Humanas" },
              { id: "linguagens", label: "Linguagens" },
              { id: "redacao", label: "Redação 1000" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedArea(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                  selectedArea === tab.id
                    ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/10"
                    : "bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Campo de Busca */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar livro, conceito ou capítulo..."
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Grade de Livros Didáticos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => {
            const completedCount = book.chapters.filter((c, idx) => {
              const cNum = c.number || c.chapterNumber || (idx + 1);
              const cId = c.id || `${book.id}-cap-${cNum}`;
              return !!completedChapters[cId];
            }).length;
            const progressPct = Math.round((completedCount / book.chapters.length) * 100);
            const coverGrad = book.coverGradient || book.coverColor || "from-slate-900 to-indigo-950";
            const readTime = book.estimatedReadingTimeMinutes || book.estimatedReadTimeMinutes || 50;

            return (
              <div
                key={book.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 overflow-hidden shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950"
              >
                {/* Faixa Gradiente da Capa */}
                <div className={`h-24 bg-gradient-to-r ${coverGrad} p-4 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-black/40 text-white backdrop-blur-sm border border-white/10 tracking-widest">
                      {getAreaLabel(book)}
                    </span>
                    <span className="text-[10px] font-bold text-white/90 bg-black/30 px-2 py-0.5 rounded">
                      {book.edition || book.badge || "Edição 2026"}
                    </span>
                  </div>
                  <div className="relative z-10 flex items-center gap-2 text-white/90 text-xs font-semibold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>{book.chapters.length} Capítulos Completos</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5" />
                    <span>~{readTime} min</span>
                  </div>
                </div>

                {/* Corpo do Card */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-extrabold text-white text-base leading-snug group-hover:text-amber-300 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {book.subtitle}
                    </p>
                  </div>

                  {/* Lista de Capítulos (Preview) */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      Índice do Livro:
                    </div>
                    {book.chapters.map((chap, cIdx) => {
                      const cNum = chap.number || chap.chapterNumber || (cIdx + 1);
                      const cId = chap.id || `${book.id}-cap-${cNum}`;
                      const isDone = !!completedChapters[cId];
                      return (
                        <button
                          key={cId}
                          onClick={() => handleOpenBook(book, cIdx)}
                          className="w-full text-left flex items-center justify-between text-xs py-1 px-2 rounded-lg hover:bg-slate-800/80 text-slate-300 group/chap transition-colors cursor-pointer"
                        >
                          <span className="truncate flex-1 pr-2">
                            <span className="text-amber-400/80 font-bold mr-1">{cNum}.</span>
                            {chap.title}
                          </span>
                          {isDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover/chap:text-amber-400 flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Barra de Progresso do Livro */}
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Progresso do Livro</span>
                      <span className="font-bold text-amber-400">{progressPct}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>

                    <button
                      onClick={() => handleOpenBook(book, 0)}
                      className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all border border-slate-700 hover:border-amber-400 cursor-pointer"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{progressPct > 0 ? "Continuar Leitura" : "Iniciar Estudo do Livro"}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-300">Nenhuma apostila encontrada</h3>
            <p className="text-sm text-slate-500 mt-1">
              Tente buscar por outro termo ou selecione &ldquo;Todas as Áreas&rdquo;.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
