import { useState } from "react";
import { 
  PenTool, 
  Copy, 
  Sparkles, 
  Check, 
  Award
} from "lucide-react";
import { destinoAudio } from "../core/soundEngine";

const REPERTORIOS = [
  {
    id: "const-88",
    autor: "Constituição Federal de 1988",
    obra: "Artigo 6º — Direitos Sociais",
    ideia: "Garante como direitos fundamentais a educação, a saúde, a alimentação, o trabalho, a moradia, o transporte e o lazer.",
    eixos: ["Saúde", "Cidadania", "Educação", "Direitos Básicos"],
    conectivoSugerido: "Nesse sentido, a Carta Magna de 1988 assegura que..."
  },
  {
    id: "bauman",
    autor: "Zygmunt Bauman",
    obra: "Modernidade Líquida",
    ideia: "As relações humanas e institucionais na contemporaneidade tornaram-se fluidas, efêmeras e marcadas pelo individualismo exacerbado.",
    eixos: ["Tecnologia", "Relações Humanas", "Consumismo", "Solidão"],
    conectivoSugerido: "Sob a ótica de Zygmunt Bauman em 'Modernidade Líquida'..."
  },
  {
    id: "habermas",
    autor: "Jürgen Habermas",
    obra: "Teoria da Ação Comunicativa",
    ideia: "A democracia e a cidadania plena exigem espaços públicos abertos para o diálogo racional livre de coações ideológicas e fake news.",
    eixos: ["Mídia", "Comunicação", "Democracia", "Internet"],
    conectivoSugerido: "Consoante a teoria da ação comunicativa de Jürgen Habermas..."
  },
  {
    id: "dimenstein",
    autor: "Gilberto Dimenstein",
    obra: "O Cidadão de Papel",
    ideia: "No Brasil, muitos direitos previstos nas leis existem apenas 'no papel', criando uma massa de cidadãos invisibilizados na prática.",
    eixos: ["Desigualdade", "Minorias", "Infância", "Políticas Públicas"],
    conectivoSugerido: "Em sua obra 'O Cidadão de Papel', Gilberto Dimenstein adverte que..."
  }
];

const AGENTES_EXEMPLOS = [
  "O Ministério da Educação (MEC)",
  "O Ministério da Saúde",
  "O Poder Legislativo",
  "As secretarias estaduais e municipais de educação",
  "Os veículos de comunicação de massa",
  "As organizações não governamentais (ONGs)"
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

  return (
    <div className="mx-auto max-w-5xl px-3 py-6 sm:px-6">
      
      {/* Título & Navegação Interna */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-semibold tracking-widest text-rose-400 uppercase flex items-center gap-1.5">
            <PenTool size={14} />
            <span>Oficina de Redação Nota 1000</span>
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-white mt-1">
            Laboratório de Escrita Estratégica
          </h2>
        </div>

        <div className="flex rounded-xl border border-white/10 bg-[#160a16] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("c5-builder")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
              activeTab === "c5-builder"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                : "text-rose-200/60 hover:text-white"
            }`}
          >
            Construtor C5 (Intervenção)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("repertoire")}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
              activeTab === "repertoire"
                ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                : "text-rose-200/60 hover:text-white"
            }`}
          >
            Banco de Repertório C2
          </button>
        </div>
      </div>

      {/* Conteúdo da Aba C5: Construtor de Proposta de Intervenção */}
      {activeTab === "c5-builder" ? (
        <div className="grid gap-6 lg:grid-cols-12">
          
          {/* Formulário dos 5 Elementos (7 colunas) */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 rounded-3xl border border-white/10 bg-[#140b14]/90 p-5 sm:p-6 shadow-xl">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-display text-lg text-white">Os 5 Elementos da Competência 5</h3>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                c5Score === 200 ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40" : "bg-white/10 text-rose-200"
              }`}>
                {c5Score} / 200 pts
              </span>
            </div>

            {/* 1. AGENTE */}
            <div>
              <label className="text-xs font-semibold text-rose-200 flex items-center justify-between mb-1">
                <span>1. Agente Social (Quem fará?)</span>
                {agente.trim().length > 3 && <Check size={14} className="text-emerald-400" />}
              </label>
              <input
                type="text"
                value={agente}
                onChange={(e) => setAgente(e.target.value)}
                placeholder="Ex: O Ministério da Educação (MEC)..."
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
                <span>2. Ação Interventiva (O que fará?)</span>
                {acao.trim().length > 5 && <Check size={14} className="text-emerald-400" />}
              </label>
              <input
                type="text"
                value={acao}
                onChange={(e) => setAcao(e.target.value)}
                placeholder="Ex: deve implementar oficinas pedagógicas de letramento digital..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-rose-100/30 focus:border-rose-400 focus:outline-none"
              />
            </div>

            {/* 3. MEIO / MODO */}
            <div>
              <label className="text-xs font-semibold text-rose-200 flex items-center justify-between mb-1">
                <span>3. Meio ou Modo (Como fará?)</span>
                {meio.trim().length > 5 && <Check size={14} className="text-emerald-400" />}
              </label>
              <input
                type="text"
                value={meio}
                onChange={(e) => setMeio(e.target.value)}
                placeholder="Ex: por intermédio de parcerias com universidades públicas..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-rose-100/30 focus:border-rose-400 focus:outline-none"
              />
            </div>

            {/* 4. EFEITO / FINALIDADE */}
            <div>
              <label className="text-xs font-semibold text-rose-200 flex items-center justify-between mb-1">
                <span>4. Efeito ou Finalidade (Para quê?)</span>
                {efeito.trim().length > 5 && <Check size={14} className="text-emerald-400" />}
              </label>
              <input
                type="text"
                value={efeito}
                onChange={(e) => setEfeito(e.target.value)}
                placeholder="Ex: com o intuito de democratizar o acesso crítico à informação..."
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
                placeholder="Ex: fornecendo materiais gratuitos e computadores aos polos periféricos..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-rose-100/30 focus:border-rose-400 focus:outline-none"
              />
            </div>

          </div>

          {/* Prévia do Parágrafo Conclusivo Montado (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#160a16] p-5 sm:p-6 shadow-xl">
            <div>
              <h3 className="font-display text-lg text-white mb-2 flex items-center gap-2">
                <Sparkles size={18} className="text-rose-400" />
                <span>Texto Conclusivo Gerado</span>
              </h3>
              <p className="text-xs text-rose-200/60 mb-4">
                Veja como seus 5 elementos se conectam em um parágrafo dissertativo fluido:
              </p>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 font-serif text-sm leading-relaxed text-rose-50/90 italic">
                {agente || acao || meio || efeito || detalhamento ? (
                  <>
                    "Portanto, medidas são urgentes para solucionar essa problemática. Para tanto,{" "}
                    <strong className="text-rose-300 not-italic">{agente || "[Agente]"}</strong>{" "}
                    deve <strong className="text-sky-300 not-italic">{acao || "[Ação]"}</strong>,{" "}
                    <strong className="text-emerald-300 not-italic">{meio || "[Meio/Modo]"}</strong>,{" "}
                    <strong className="text-amber-300 not-italic">{efeito || "[Efeito]"}</strong>,{" "}
                    <strong className="text-purple-300 not-italic">{detalhamento || "[Detalhamento]"}</strong>."
                  </>
                ) : (
                  <span className="text-rose-200/30">
                    Preencha os campos ao lado para ver o parágrafo da proposta de intervenção montado em tempo real com os conectivos adequados.
                  </span>
                )}
              </div>
            </div>

            {isC5Complete && (
              <div className="mt-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 p-3 text-xs text-emerald-200 flex items-center gap-2">
                <Award size={18} className="text-emerald-400 shrink-0" />
                <span>Parabéns, Bea! Proposta estruturada com todos os 5 critérios oficiais da grade de 200 pontos do INEP! 💖</span>
              </div>
            )}
          </div>

        </div>
      ) : (
        /* Conteúdo da Aba Repertório C2: Cartões de Citações e Filósofos */
        <div className="grid gap-4 sm:grid-cols-2">
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

                <h4 className="font-display text-base text-white mb-1.5">
                  {rep.obra}
                </h4>
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

    </div>
  );
}
