import { useState } from "react";
import { 
  PenTool, 
  Copy, 
  Sparkles, 
  Check, 
  Award,
  BookOpen,
  FileEdit,
  CheckCircle2
} from "lucide-react";
import { destinoAudio } from "../core/soundEngine";

const REPERTORIOS = [
  {
    id: "const-88",
    autor: "Constituição Federal de 1988",
    obra: "Artigo 6º — Direitos Sociais",
    ideia: "Garante como direitos fundamentais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte, o lazer e a segurança.",
    eixos: ["Saúde", "Cidadania", "Educação", "Direitos Básicos", "Segurança"],
    conectivoSugerido: "Nesse sentido, a Carta Magna de 1988 assegura no artigo 6º que..."
  },
  {
    id: "bauman",
    autor: "Zygmunt Bauman",
    obra: "Modernidade Líquida",
    ideia: "As relações humanas e institucionais na contemporaneidade tornaram-se fluidas, efêmeras e marcadas pelo individualismo e consumismo.",
    eixos: ["Tecnologia", "Relações Humanas", "Consumismo", "Solidão", "Saúde Mental"],
    conectivoSugerido: "Sob a ótica de Zygmunt Bauman em 'Modernidade Líquida'..."
  },
  {
    id: "habermas",
    autor: "Jürgen Habermas",
    obra: "Teoria da Ação Comunicativa",
    ideia: "A democracia e a cidadania plena exigem debate público aberto e dialógico, livre de coações ideológicas, desinformação e fake news.",
    eixos: ["Mídia", "Comunicação", "Democracia", "Internet", "Polarização"],
    conectivoSugerido: "Consoante a teoria da ação comunicativa de Jürgen Habermas..."
  },
  {
    id: "dimenstein",
    autor: "Gilberto Dimenstein",
    obra: "O Cidadão de Papel",
    ideia: "No Brasil, muitos direitos previstos nas leis existem apenas 'no papel', gerando cidadãos invisibilizados e segregados na vida real.",
    eixos: ["Desigualdade", "Minorias", "Infância", "Políticas Públicas", "Pobreza"],
    conectivoSugerido: "Em sua obra 'O Cidadão de Papel', Gilberto Dimenstein adverte que..."
  },
  {
    id: "foucault",
    autor: "Michel Foucault",
    obra: "Vigiar e Punir / Microfísica do Poder",
    ideia: "O poder não se restringe ao governo central, mas opera em micropoderes e estruturas disciplinares que moldam e controlam corpos.",
    eixos: ["Saúde Pública", "Sistema Prisional", "Escola", "Instituições"],
    conectivoSugerido: "De acordo com as reflexões de Michel Foucault em 'Vigiar e Punir'..."
  },
  {
    id: "hobbes",
    autor: "Thomas Hobbes",
    obra: "Leviatã",
    ideia: "O Estado deve assegurar a ordem social e a proteção mútua; sua ineficiência devolve a sociedade à instabilidade e vulnerabilidade.",
    eixos: ["Segurança", "Omissão Estatal", "Violência", "Cidadania"],
    conectivoSugerido: "Para Thomas Hobbes, cabe ao Estado zelar pela harmonia coletiva; contudo..."
  },
  {
    id: "paulo-freire",
    autor: "Paulo Freire",
    obra: "Pedagogia da Autonomia",
    ideia: "A educação não é mera transferência de conhecimento, mas conscientização crítica indispensável para a libertação humana.",
    eixos: ["Educação", "Transformação Social", "Inclusão", "Democracia"],
    conectivoSugerido: "Como pontuou o educador Paulo Freire em 'Pedagogia da Autonomia'..."
  },
  {
    id: "carolina-jesus",
    autor: "Carolina Maria de Jesus",
    obra: "Quarto de Despejo",
    ideia: "Retrato contundente da favelização, fome e indiferença social que empurram populações vulneráveis para as margens da sociedade.",
    eixos: ["Fome", "Desigualdade Racial", "Moradia", "Direitos Humanos"],
    conectivoSugerido: "Ilustrada por Carolina Maria de Jesus em 'Quarto de Despejo', a realidade de..."
  },
  {
    id: "krenak",
    autor: "Ailton Krenak",
    obra: "Ideias para Adiar o Fim do Mundo",
    ideia: "Critica a visão antropocêntrica e predatória da humanidade, que trata a natureza como recurso descartável a ser explorado.",
    eixos: ["Meio Ambiente", "Povos Indígenas", "Crise Climática", "Sustentabilidade"],
    conectivoSugerido: "À luz das ideias de Ailton Krenak para adiar o fim do mundo..."
  }
];

const AGENTES_EXEMPLOS = [
  "O Ministério da Educação (MEC)",
  "O Ministério da Saúde",
  "O Ministério dos Direitos Humanos",
  "O Poder Legislativo",
  "As secretarias municipais e estaduais",
  "Os veículos de comunicação de massa",
  "As organizações da sociedade civil (ONGs)"
];

export function RedacaoLab() {
  const [activeTab, setActiveTab] = useState("c5-builder");
  const [copiedId, setCopiedId] = useState(null);

  // Estados do Construtor da Competência 5
  const [agente, setAgente] = useState("");
  const [acao, setAcao] = useState("");
  const [meio, setMeio] = useState("");
  const [efeito, setEfeito] = useState("");
  const [detalhamento, setDetalhamento] = useState("");

  // Estados do Simulador de Escrita
  const [essayText, setEssayText] = useState("");
  const [themeTitle, setThemeTitle] = useState("O combate à desinformação em saúde pública no Brasil contemporâneo");

  const handleCopyRepertoire = (rep) => {
    destinoAudio.playClick();
    const textToCopy = `"${rep.autor}" — ${rep.obra}: ${rep.ideia} (Sugestão de uso: ${rep.conectivoSugerido})`;
    navigator.clipboard?.writeText(textToCopy);
    setCopiedId(rep.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Avaliação dos 5 elementos da Competência 5
  const isC5Complete = 
    agente.trim().length > 3 && 
    acao.trim().length > 5 && 
    meio.trim().length > 5 && 
    efeito.trim().length > 5 && 
    detalhamento.trim().length > 5;

  const c5Score = [
    Boolean(agente.trim().length > 3),
    Boolean(acao.trim().length > 5),
    Boolean(meio.trim().length > 5),
    Boolean(efeito.trim().length > 5),
    Boolean(detalhamento.trim().length > 5),
  ].filter(Boolean).length * 40;

  // Métricas do Simulador de Texto
  const wordsCount = essayText.trim() ? essayText.trim().split(/\s+/).length : 0;
  // Estimativa aproximada de linhas no padrão ENEM (~10 palavras/linha)
  const estimatedLines = Math.max(0, Math.round(wordsCount / 10));

  // Checklist automático de conectivos e critérios
  const hasIntroConectivo = /(nesse sentido|sob essa ótica|consoante|à luz|historicamente)/i.test(essayText);
  const hasD1Conectivo = /(em primeira análise|em primeiro plano|a princípio|em primeiro lugar)/i.test(essayText);
  const hasD2Conectivo = /(ademais|outrossim|além disso|em segundo plano|vale pontuar)/i.test(essayText);
  const hasConclusaoConectivo = /(portanto|infere-se|dessarte|desse modo|assim sendo)/i.test(essayText);

  return (
    <div className="mx-auto max-w-5xl px-3 py-6 sm:px-6">
      
      {/* Título & Navegação Interna */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-bold tracking-widest text-rose-400 uppercase flex items-center gap-1.5">
            <PenTool size={14} />
            <span>Oficina de Redação Nota 1000 • ENEM</span>
          </span>
          <h1 className="font-display text-2xl sm:text-3xl text-white font-bold mt-1">
            Laboratório de Escrita Dissertativa
          </h1>
        </div>

        <div className="flex rounded-xl border border-white/10 bg-[#160a16] p-1 gap-1">
          <button
            type="button"
            onClick={() => setActiveTab("c5-builder")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              activeTab === "c5-builder"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                : "text-rose-200/60 hover:text-white"
            }`}
          >
            Intervenção C5 (200 pts)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("repertoire")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              activeTab === "repertoire"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                : "text-rose-200/60 hover:text-white"
            }`}
          >
            Repertórios C2
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("simulator")}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
              activeTab === "simulator"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                : "text-rose-200/60 hover:text-white"
            }`}
          >
            Simulador de Texto
          </button>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* ABA 1: CONSTRUTOR C5 */}
      {/* ───────────────────────────────────────────────────────────── */}
      {activeTab === "c5-builder" && (
        <div className="grid gap-6 lg:grid-cols-12">
          
          <div className="lg:col-span-7 flex flex-col gap-3.5 rounded-3xl border border-white/10 bg-[#140b14]/90 p-5 sm:p-6 shadow-xl">
            <div className="flex items-center justify-between mb-1">
              <h2 className="font-display text-lg font-bold text-white">Os 5 Elementos da Competência 5</h2>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                c5Score === 200 ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-white/10 text-rose-200"
              }`}>
                {c5Score} / 200 pts
              </span>
            </div>

            {/* 1. AGENTE */}
            <div>
              <label className="text-xs font-semibold text-rose-200 flex items-center justify-between mb-1">
                <span>1. Agente Social (QUEM fará?)</span>
                {agente.trim().length > 3 && <Check size={14} className="text-emerald-400" />}
              </label>
              <input
                type="text"
                value={agente}
                onChange={(e) => setAgente(e.target.value)}
                placeholder="Ex: O Ministério da Saúde..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-rose-100/30 focus:border-rose-400 focus:outline-none"
              />
              <div className="mt-1 flex flex-wrap gap-1">
                {AGENTES_EXEMPLOS.slice(0, 3).map((ex, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setAgente(ex)}
                    className="text-[0.6rem] text-rose-300/80 bg-white/5 hover:bg-rose-500/20 px-2 py-0.5 rounded border border-white/5 transition cursor-pointer"
                  >
                    + {ex}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. AÇÃO */}
            <div>
              <label className="text-xs font-semibold text-rose-200 flex items-center justify-between mb-1">
                <span>2. Ação Interventiva (O QUE fará?)</span>
                {acao.trim().length > 5 && <Check size={14} className="text-emerald-400" />}
              </label>
              <input
                type="text"
                value={acao}
                onChange={(e) => setAcao(e.target.value)}
                placeholder="Ex: deve criar campanhas informativas e fiscalizar canais digitais..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-rose-100/30 focus:border-rose-400 focus:outline-none"
              />
            </div>

            {/* 3. MEIO / MODO */}
            <div>
              <label className="text-xs font-semibold text-rose-200 flex items-center justify-between mb-1">
                <span>3. Meio ou Modo (COMO fará?)</span>
                {meio.trim().length > 5 && <Check size={14} className="text-emerald-400" />}
              </label>
              <input
                type="text"
                value={meio}
                onChange={(e) => setMeio(e.target.value)}
                placeholder="Ex: por meio de parcerias com conselhos de medicina e plataformas de busca..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-rose-100/30 focus:border-rose-400 focus:outline-none"
              />
            </div>

            {/* 4. EFEITO / FINALIDADE */}
            <div>
              <label className="text-xs font-semibold text-rose-200 flex items-center justify-between mb-1">
                <span>4. Efeito ou Finalidade (PARA QUE fará?)</span>
                {efeito.trim().length > 5 && <Check size={14} className="text-emerald-400" />}
              </label>
              <input
                type="text"
                value={efeito}
                onChange={(e) => setEfeito(e.target.value)}
                placeholder="Ex: a fim de garantir a segurança sanitária e a adesão às vacinas..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-rose-100/30 focus:border-rose-400 focus:outline-none"
              />
            </div>

            {/* 5. DETALHAMENTO */}
            <div>
              <label className="text-xs font-semibold text-rose-200 flex items-center justify-between mb-1">
                <span>5. Detalhamento (Aprofundamento de um dos elementos)</span>
                {detalhamento.trim().length > 5 && <Check size={14} className="text-emerald-400" />}
              </label>
              <input
                type="text"
                value={detalhamento}
                onChange={(e) => setDetalhamento(e.target.value)}
                placeholder="Ex: órgão responsável pela formulação das políticas de saúde pública no Brasil..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-rose-100/30 focus:border-rose-400 focus:outline-none"
              />
            </div>

          </div>

          {/* Prévia do Parágrafo Conclusivo Montado */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#160a16] p-5 sm:p-6 shadow-xl">
            <div>
              <h2 className="font-display text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles size={18} className="text-rose-400" />
                <span>Texto Conclusivo Gerado</span>
              </h2>
              <p className="text-xs text-rose-200/60 mb-4">
                Veja como seus 5 elementos se conectam em um parágrafo dissertativo fluido:
              </p>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 font-serif text-sm leading-relaxed text-rose-50/90 italic">
                {agente || acao || meio || efeito || detalhamento ? (
                  <>
                    "Portanto, medidas são urgentes para mitigar esse impasse. Para tanto,{" "}
                    <strong className="text-rose-300 not-italic">{agente || "[Agente]"}</strong>{" "}
                    — <strong className="text-purple-300 not-italic">{detalhamento || "[Detalhamento]"}</strong> —,{" "}
                    deve <strong className="text-sky-300 not-italic">{acao || "[Ação]"}</strong>,{" "}
                    <strong className="text-emerald-300 not-italic">{meio || "[Meio/Modo]"}</strong>,{" "}
                    <strong className="text-amber-300 not-italic">{efeito || "[Efeito]"}</strong>."
                  </>
                ) : (
                  <span className="text-rose-200/30">
                    Preencha os campos ao lado para ver o parágrafo da proposta de intervenção montado em tempo real com conectivos padrão INEP.
                  </span>
                )}
              </div>
            </div>

            {isC5Complete && (
              <div className="mt-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 p-3 text-xs text-emerald-200 flex items-center gap-2">
                <Award size={18} className="text-emerald-400 shrink-0" />
                <span>Excelente, Bea! Proposta estruturada com os 5 elementos oficiais do INEP! Nota 200 garantida na C5. ❤️</span>
              </div>
            )}
          </div>

        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* ABA 2: REPERTÓRIOS SOCIOCULTURAIS C2 */}
      {/* ───────────────────────────────────────────────────────────── */}
      {activeTab === "repertoire" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REPERTORIOS.map((rep) => (
            <div
              key={rep.id}
              className="rounded-2xl border border-white/10 bg-[#160a16] p-5 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-rose-300">
                    {rep.autor}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyRepertoire(rep)}
                    className="flex items-center gap-1 rounded-lg bg-white/5 px-2 py-1 text-[0.65rem] text-rose-200 hover:bg-rose-500/20 transition cursor-pointer"
                    title="Copiar citação para anotações"
                  >
                    {copiedId === rep.id ? (
                      <>
                        <Check size={12} className="text-emerald-400" />
                        <span className="text-emerald-300">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>

                <h3 className="font-display font-semibold text-sm sm:text-base text-white mb-1.5">
                  {rep.obra}
                </h3>
                <p className="text-xs text-rose-100/80 leading-relaxed mb-3">
                  "{rep.ideia}"
                </p>

                <div className="rounded-lg bg-black/30 p-2 text-[0.65rem] text-rose-200/70 border border-white/5 font-mono mb-3">
                  {rep.conectivoSugerido}
                </div>
              </div>

              <div className="flex flex-wrap gap-1 border-t border-white/5 pt-2.5">
                {rep.eixos.map((eixo, i) => (
                  <span key={i} className="rounded bg-rose-500/10 px-2 py-0.5 text-[0.6rem] text-rose-300 border border-rose-500/20">
                    {eixo}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* ABA 3: SIMULADOR DE TEXTO COMPLETO */}
      {/* ───────────────────────────────────────────────────────────── */}
      {activeTab === "simulator" && (
        <div className="grid gap-6 lg:grid-cols-12">
          
          {/* Editor de Redação (8 colunas) */}
          <div className="lg:col-span-8 flex flex-col rounded-3xl border border-white/10 bg-[#140b14]/90 p-5 sm:p-6 shadow-xl">
            <div className="mb-4">
              <label className="text-xs font-bold text-rose-300 uppercase tracking-wider block mb-1">
                Tema em Treinamento:
              </label>
              <input
                type="text"
                value={themeTitle}
                onChange={(e) => setThemeTitle(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white font-semibold focus:border-rose-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-rose-200/70 mb-2 border-b border-white/5 pb-2">
              <span className="flex items-center gap-1 font-semibold">
                <FileEdit size={14} className="text-rose-400" />
                <span>Área de Redação (30 linhas ENEM)</span>
              </span>
              <div className="flex items-center gap-3">
                <span>Palavras: <strong className="text-white">{wordsCount}</strong></span>
                <span>Linhas Estimadas: <strong className={estimatedLines >= 25 && estimatedLines <= 30 ? "text-emerald-400" : "text-amber-400"}>{estimatedLines} / 30</strong></span>
              </div>
            </div>

            <textarea
              rows={16}
              value={essayText}
              onChange={(e) => setEssayText(e.target.value)}
              placeholder="Digite sua introdução, D1, D2 e proposta de intervenção aqui...&#10;&#10;Dica: Estruture em 4 parágrafos claros com conectivos entre eles."
              className="w-full flex-1 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm font-serif leading-relaxed text-white placeholder-white/20 focus:border-rose-400 focus:outline-none resize-none"
            />
          </div>

          {/* Checklist Pedagógico das 5 Competências (4 colunas) */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#160a16] p-5 shadow-xl">
            <div>
              <h2 className="font-display text-base font-bold text-white mb-1 flex items-center gap-2">
                <BookOpen size={16} className="text-rose-400" />
                <span>Checklist Nota 1000</span>
              </h2>
              <p className="text-[0.65rem] text-rose-200/60 mb-4">
                O corretor do ENEM busca estas marcas obrigatórias no seu texto:
              </p>

              <div className="space-y-3 text-xs">
                <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${hasIntroConectivo ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-200" : "bg-white/5 border-white/5 text-rose-200/60"}`}>
                  <CheckCircle2 size={16} className={hasIntroConectivo ? "text-emerald-400" : "text-white/20"} />
                  <span>Repertório/Gancho na Introdução</span>
                </div>

                <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${hasD1Conectivo ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-200" : "bg-white/5 border-white/5 text-rose-200/60"}`}>
                  <CheckCircle2 size={16} className={hasD1Conectivo ? "text-emerald-400" : "text-white/20"} />
                  <span>Conectivo Interparágrafo no D1</span>
                </div>

                <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${hasD2Conectivo ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-200" : "bg-white/5 border-white/5 text-rose-200/60"}`}>
                  <CheckCircle2 size={16} className={hasD2Conectivo ? "text-emerald-400" : "text-white/20"} />
                  <span>Conectivo de Continuação no D2</span>
                </div>

                <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${hasConclusaoConectivo ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-200" : "bg-white/5 border-white/5 text-rose-200/60"}`}>
                  <CheckCircle2 size={16} className={hasConclusaoConectivo ? "text-emerald-400" : "text-white/20"} />
                  <span>Conectivo Conclusivo (Portanto/Dessarte)</span>
                </div>

                <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${estimatedLines >= 25 && estimatedLines <= 30 ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-200" : "bg-white/5 border-white/5 text-rose-200/60"}`}>
                  <CheckCircle2 size={16} className={estimatedLines >= 25 && estimatedLines <= 30 ? "text-emerald-400" : "text-white/20"} />
                  <span>Tamanho Ideal de Texto (25 a 30 linhas)</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-center">
              <span className="text-[0.65rem] text-rose-300 font-semibold block">
                🎯 Meta Beatriz: 960+ no ENEM 2026
              </span>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
