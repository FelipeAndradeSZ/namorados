import { useState, useMemo } from "react";
import { 
  PenTool, 
  Copy, 
  Sparkles, 
  Check, 
  Award,
  BookOpen,
  FileEdit,
  Lightbulb,
  FileText
} from "lucide-react";
import { destinoAudio } from "../core/soundEngine";

const TEMAS_REDACAO = [
  {
    id: "tema-saude-vacinas",
    eixo: "Saúde Pública",
    titulo: "O combate à desinformação e a garantia da cobertura vacinal no Brasil contemporâneo",
    anoOuTipo: "Inédito • Alta Probabilidade",
    textosMotivadores: [
      {
        titulo: "Texto I — O Histórico de Sucesso e a Queda Recente",
        fonte: "Ministério da Saúde / Fiocruz",
        conteudo: "Criado em 1973, o Programa Nacional de Imunizações (PNI) brasileiro tornou-se referência global ao erradicar a varíola e a poliomielite. Contudo, na última década, as taxas de cobertura vacinal infantil caíram de mais de 95% para menos de 75% em vacinas essenciais como tríplice viral e BCG, impulsionadas pela proliferação de boatos digitais e falsa sensação de segurança."
      },
      {
        titulo: "Texto II — O Impacto das Redes Sociais na Saúde",
        fonte: "Organização Mundial da Saúde (OMS)",
        conteudo: "A hesitação vacinal foi classificada pela OMS como uma das dez maiores ameaças à saúde global. O algoritmo de plataformas digitais que privilegia o engajamento emocional frequentemente amplifica conteúdos conspiratórios sobre supostos efeitos colaterais, sobrepondo-se ao consenso científico e às evidências clínicas."
      },
      {
        titulo: "Texto III — Dados e Desigualdade de Acesso",
        fonte: "DataSUS, 2024",
        conteudo: "A queda nas coberturas vacinais não decorre exclusivamente da desinformação: barreiras como o horário de funcionamento das Unidades Básicas de Saúde (UBS), dificuldades logísticas em áreas rurais e periféricas e a precarização das equipes de Saúde da Família também influenciam decisivamente na não adesão das famílias."
      }
    ],
    proposta: "A partir da leitura dos textos motivadores e com base nos conhecimentos construídos ao longo de sua formação, redija um texto dissertativo-argumentativo em modalidade escrita formal da língua portuguesa sobre o tema, apresentando proposta de intervenção que respeite os direitos humanos."
  },
  {
    id: "tema-trabalho-cuidado",
    eixo: "Cidadania e Gênero",
    titulo: "Invisibilidade e registro do trabalho de cuidado realizado pela mulher no Brasil",
    anoOuTipo: "Oficial ENEM 2023",
    textosMotivadores: [
      {
        titulo: "Texto I — A Economia do Cuidado",
        fonte: "IBGE / PNAD Contínua",
        conteudo: "As mulheres brasileiras dedicam, em média, 21,4 horas semanais a afazeres domésticos e cuidados de pessoas (crianças, idosos e enfermos), quase o dobro do tempo dedicado pelos homens (11 horas). Esse trabalho não remunerado sustenta a reprodução social, mas permanece economicamente desvalorizado."
      },
      {
        titulo: "Texto II — Cidadania e Vulnerabilidade",
        fonte: "Relatório OIT (Organização Internacional do Trabalho)",
        conteudo: "A sobrecarga do trabalho de cuidado recai desproporcionalmente sobre mulheres negras e periféricas, que acumulam duplas ou triplas jornadas de trabalho informal sem proteção previdenciária e com remunerações historicamente rebaixadas."
      }
    ],
    proposta: "Redija um texto dissertativo-argumentativo apresentando proposta de intervenção para valorizar e compartilhar socialmente o trabalho de cuidado no país."
  },
  {
    id: "tema-ia-trabalho",
    eixo: "Tecnologia e Ética",
    titulo: "Os desafios éticos da inteligência artificial e os impactos sobre o mercado de trabalho brasileiro",
    anoOuTipo: "Inédito • Alta Probabilidade",
    textosMotivadores: [
      {
        titulo: "Texto I — Revolução Tecnológica e Automação",
        fonte: "Fórum Econômico Mundial (WEF)",
        conteudo: "A rápida difusão de sistemas de inteligência artificial generativa tende a automatizar não apenas tarefas operacionais repetitivas, mas também funções intelectuais de média e alta complexidade, gerando incertezas sobre o futuro do emprego e a renda dos trabalhadores."
      },
      {
        titulo: "Texto II — O Abismo Digital no Sul Global",
        fonte: "UNESCO, 2024",
        conteudo: "Enquanto as grandes corporações tecnológicas concentram as patentes e os centros de processamento de dados nos países do Norte Global, os países em desenvolvimento enfrentam o risco de se tornarem meros consumidores dependentes e fornecedores de dados brutos sem soberania digital."
      }
    ],
    proposta: "Elabore proposta de intervenção sobre a regulação ética e a qualificação dos trabalhadores frente à expansão da IA no Brasil."
  },
  {
    id: "tema-povos-tradicionais",
    eixo: "Cultura e Direitos Humanos",
    titulo: "Desafios para a valorização de comunidades e povos tradicionais no Brasil",
    anoOuTipo: "Oficial ENEM 2022",
    textosMotivadores: [
      {
        titulo: "Texto I — A Diversidade Sociocultural",
        fonte: "Artigo 231 da CF/88 e Decreto Federal nº 6.040/2007",
        conteudo: "Povos indígenas, quilombolas, ribeirinhos, marisqueiras e seringueiros detêm saberes ancestrais vitais para a conservação da biodiversidade. No entanto, essas populações frequentemente sofrem com a grilagem de terras, conflitos agrários e a invisibilidade em políticas públicas de saneamento, educação e saúde."
      }
    ],
    proposta: "Redija um texto dissertativo-argumentativo propondo medidas de proteção territorial e valorização cultural dos povos tradicionais."
  }
];

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

const MODELO_NOTA_1000 = {
  tema: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil",
  paragrafos: [
    {
      tipo: "Introdução",
      texto: "Na clássica obra 'O Cidadão de Papel', o jornalista Gilberto Dimenstein afirma que os direitos previstos na legislação brasileira muitas vezes não passam de formalismos inalcançáveis para grande parcela da população. Fora da teoria, tal distopia concretiza-se na realidade dos milhões de brasileiros desprovidos de certidão de nascimento, o que lhes nega a própria condição de cidadãos. Nesse cenário, constata-se a permanência desse quadro perverso tanto pela negligência governamental crônica quanto pelo desconhecimento popular acerca da gratuidade do registro.",
      analise: "Apresenta repertório legitimado (Dimenstein), contextualiza o tema e finaliza com a tese antecipando dois argumentos (negligência governamental e desinformação popular)."
    },
    {
      tipo: "Desenvolvimento 1 (D1)",
      texto: "Em primeiro plano, cabe destacar a omissão estatal como vetor basilar da manutenção da invisibilidade civil. Segundo o filósofo John Locke, o Estado estabelece um contrato social com os indivíduos para resguardar seus direitos inalienáveis. Contudo, quando cartórios civis encontram-se geograficamente distantes em regiões periféricas e rurais, o poder público rompe esse pacto primordial. Assim, a escassez de mutirões itinerantes e a burocracia excessiva empurram indivíduos vulneráveis para a margem da sociedade, inviabilizando até mesmo o acesso ao SUS e a programas de transferência de renda.",
      analise: "Inicia com conectivo interparágrafo ('Em primeiro plano'), traz repertório de base contratualista (John Locke) e aprofunda as consequências concretas da omissão do poder público."
    },
    {
      tipo: "Desenvolvimento 2 (D2)",
      texto: "Ademais, a falta de informação generalizada potencializa essa exclusão institucionalizada. Conforme alertava o educador Paulo Freire, quando a educação não liberta, o sonho do oprimido é ser opressor; de modo análogo, quando a população desconhece a Lei Federal nº 9.534/1997 — que garante a gratuidade da primeira via da certidão —, ela se abstém de reivindicar seus direitos civis por temor de custos financeiros. Desse modo, consolida-se uma barreira simbólica que perpetua a invisibilidade geracional em famílias de extrema pobreza.",
      analise: "Usa conectivo continuativo ('Ademais'), legitima com Paulo Freire e fundamenta com a lei federal de gratuidade do registro civil."
    },
    {
      tipo: "Conclusão / Proposta de Intervenção (C5)",
      texto: "Portanto, medidas são urgentes para erradicar a carência documental no país. Para tanto, cabe ao Ministério dos Direitos Humanos e da Cidadania, em parceria com os cartórios estaduais, implementar o programa nacional 'Cidadão Registrado', por meio do envio de unidades móveis fluviais e terrestres aos rincões e periferias brasileiras, munidas de tecnologia digital para expedição gratuita e imediata de certidões. Essa medida deve ser amplamente divulgada em campanhas nas mídias sociais e rádio comunitária, a fim de assegurar que nenhum brasileiro permaneça invisibilizado e que a Constituição Federal supere, em definitivo, a barreira do papel.",
      analise: "Apresenta todos os 5 elementos da Competência 5: Agente (Ministério dos Direitos Humanos), Ação (implementar o programa 'Cidadão Registrado'), Meio/Modo (por meio de unidades móveis fluviais e terrestres), Efeito (a fim de assegurar que nenhum brasileiro permaneça invisibilizado) e Detalhamento (munidas de tecnologia digital...)."
    }
  ]
};

const AGENTES_EXEMPLOS = [
  "O Ministério da Educação (MEC)",
  "O Ministério da Saúde",
  "O Ministério dos Direitos Humanos e da Cidadania",
  "O Poder Legislativo Federal",
  "As secretarias municipais e estaduais de Assistência Social",
  "Os veículos de comunicação de massa e mídias públicas",
  "As organizações da sociedade civil (ONGs)"
];

export function RedacaoLab() {
  const [activeTab, setActiveTab] = useState("simulator"); // 'simulator' | 'temas' | 'c5-builder' | 'repertoire' | 'modelo1000'
  const [selectedTemaId, setSelectedTemaId] = useState(TEMAS_REDACAO[0].id);
  const [copiedId, setCopiedId] = useState(null);

  // Estados do Construtor da Competência 5
  const [agente, setAgente] = useState("");
  const [acao, setAcao] = useState("");
  const [meio, setMeio] = useState("");
  const [efeito, setEfeito] = useState("");
  const [detalhamento, setDetalhamento] = useState("");

  // Estados do Simulador de Escrita
  const [essayText, setEssayText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const currentTema = useMemo(() => {
    return TEMAS_REDACAO.find(t => t.id === selectedTemaId) || TEMAS_REDACAO[0];
  }, [selectedTemaId]);

  const handleCopyRepertoire = (rep) => {
    destinoAudio.playClick();
    const textToCopy = `"${rep.autor}" — ${rep.obra}: ${rep.ideia} (Sugestão de uso: ${rep.conectivoSugerido})`;
    navigator.clipboard?.writeText(textToCopy);
    setCopiedId(rep.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Avaliação dos 5 elementos da Competência 5
  const c5Score = [
    Boolean(agente.trim().length > 3),
    Boolean(acao.trim().length > 5),
    Boolean(meio.trim().length > 5),
    Boolean(efeito.trim().length > 5),
    Boolean(detalhamento.trim().length > 5),
  ].filter(Boolean).length * 40;

  // Métricas do Simulador de Texto
  const wordsCount = essayText.trim() ? essayText.trim().split(/\s+/).length : 0;
  const estimatedLines = Math.max(0, Math.round(wordsCount / 10));

  // Diagnóstico das Competências com análise heurística do texto
  const handleAnalyzeEssay = () => {
    destinoAudio.playClick();
    setIsAnalyzing(true);

    setTimeout(() => {
      // C1: Norma Padrão e Extensão de Parágrafos
      const paragraphs = essayText.split(/\n+/).filter(p => p.trim().length > 20);
      let c1Score = 120;
      if (paragraphs.length >= 4 && wordsCount >= 250) c1Score = 160;
      if (wordsCount >= 320 && paragraphs.length === 4) c1Score = 200;

      // C2: Tema e Repertório Legitimado
      const hasRepertoire = /(constitui[çc]|bauman|habermas|foucault|hobbes|freire|locke|krenak|dimenstein|obra|fil[oó]sofo|artigo|ibge|oms)/i.test(essayText);
      let c2Score = 120;
      if (hasRepertoire && wordsCount > 200) c2Score = 160;
      if (hasRepertoire && wordsCount >= 300) c2Score = 200;

      // C3: Projeto de Texto e Tese
      let c3Score = 120;
      if (paragraphs.length === 4) c3Score = 160;
      if (paragraphs.length === 4 && wordsCount >= 320) c3Score = 200;

      // C4: Coesão Inter e Intraparágrafos
      const hasC4Conectivos = /(em primeiro|al[eé]m disso|ademais|outrossim|nesse sentido|portanto|dessarte|desse modo)/i.test(essayText);
      let c4Score = 120;
      if (hasC4Conectivos) c4Score = 160;
      if (hasC4Conectivos && paragraphs.length >= 4) c4Score = 200;

      // C5: Proposta de Intervenção
      const hasC5Agente = /(minist[eé]rio|governo|secretaria|escola|sociedade civil|ongs|poder p[uú]blico)/i.test(essayText);
      const hasC5Meio = /(por meio de|mediante|atrav[eé]s de|com o intuito|a fim de)/i.test(essayText);
      let c5ScoreEst = 80;
      if (hasC5Agente || hasC5Meio) c5ScoreEst = 120;
      if (hasC5Agente && hasC5Meio) c5ScoreEst = 160;
      if (hasC5Agente && hasC5Meio && wordsCount >= 300) c5ScoreEst = 200;

      const totalEstimated = c1Score + c2Score + c3Score + c4Score + c5ScoreEst;

      setAnalysisResult({
        totalEstimated,
        c1: c1Score,
        c2: c2Score,
        c3: c3Score,
        c4: c4Score,
        c5: c5ScoreEst,
        paragraphsCount: paragraphs.length,
        feedback: totalEstimated >= 900 
          ? "Excelente domínio da estrutura dissertativa-argumentativa! Repertório bem articulado com a tese e proposta de intervenção robusta."
          : totalEstimated >= 760
            ? "Bom texto! Para romper a barreira dos 900+, fortaleça o detalhamento dos 5 elementos na C5 e garanta 2 conectivos interparágrafos explícitos."
            : "Continue praticando! Estruture o texto em exatamente 4 parágrafos e inclua repertórios socioculturais legitimados com citações completas."
      });

      setIsAnalyzing(false);
      destinoAudio.playSuccess();
    }, 600);
  };

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-6 space-y-6">
      
      {/* ═══ TÍTULO E ABAS DO LABORATÓRIO ═══ */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-bold tracking-widest text-rose-400 uppercase flex items-center gap-1.5">
            <PenTool size={14} />
            <span>Redação ENEM Nota 1000 • Prática Contínua</span>
          </span>
          <h1 className="font-display text-2xl sm:text-3xl text-white font-bold mt-1">
            Laboratório de Escrita Dissertativa
          </h1>
        </div>

        {/* Abas Superiores */}
        <div className="flex flex-wrap rounded-2xl border border-white/10 bg-[#160a16] p-1 gap-1">
          {[
            { id: "simulator", label: "Editor de Texto" },
            { id: "temas", label: "Banco de Temas" },
            { id: "c5-builder", label: "Construtor C5" },
            { id: "repertoire", label: "Repertórios C2" },
            { id: "modelo1000", label: "Modelo Nota 1000" },
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => { destinoAudio.playClick(); setActiveTab(tab.id); }}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                activeTab === tab.id
                  ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                  : "text-rose-200/60 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* ABA 1: EDITOR DE TEXTO & DIAGNÓSTICO DAS 5 COMPETÊNCIAS */}
      {/* ───────────────────────────────────────────────────────────── */}
      {activeTab === "simulator" && (
        <div className="grid gap-6 lg:grid-cols-12">
          
          {/* Editor (8 colunas) */}
          <div className="lg:col-span-8 flex flex-col rounded-3xl border border-white/10 bg-[#140b14]/90 p-5 sm:p-6 shadow-xl">
            
            {/* Seletor de Tema Ativo */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold text-rose-300 uppercase tracking-wider">
                  Tema Selecionado ({currentTema.anoOuTipo}):
                </label>
                <button
                  type="button"
                  onClick={() => setActiveTab("temas")}
                  className="text-xs text-rose-400 hover:text-white underline cursor-pointer"
                >
                  Trocar tema ➔
                </button>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm font-semibold text-white">
                "{currentTema.titulo}"
              </div>
            </div>

            {/* Contador de Linhas e Palavras */}
            <div className="flex items-center justify-between text-xs text-rose-200/70 mb-2 border-b border-white/5 pb-2">
              <span className="flex items-center gap-1 font-semibold">
                <FileEdit size={14} className="text-rose-400" />
                <span>Folha Oficial de Redação (30 linhas)</span>
              </span>
              <div className="flex items-center gap-3">
                <span>Palavras: <strong className="text-white">{wordsCount}</strong></span>
                <span>Linhas Estimadas: <strong className={estimatedLines >= 25 && estimatedLines <= 30 ? "text-emerald-400" : "text-amber-400"}>{estimatedLines} / 30</strong></span>
              </div>
            </div>

            {/* Caixa de Texto */}
            <textarea
              rows={18}
              value={essayText}
              onChange={(e) => setEssayText(e.target.value)}
              placeholder="Digite aqui sua redação completa com Introdução, D1, D2 e Proposta de Intervenção...&#10;&#10;Dica: Para garantir nota 900+, estruture o texto em exatamente 4 parágrafos e use conectivos interparágrafos explícitos."
              className="w-full flex-1 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm font-serif leading-relaxed text-white placeholder-white/20 focus:border-rose-400 focus:outline-none resize-none"
            />

            {/* Botão de Avaliação Automatizada */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-[0.65rem] text-rose-200/50">
                O corretor inteligente avalia estrutura, repertórios e os 5 elementos da intervenção.
              </span>
              <button
                type="button"
                onClick={handleAnalyzeEssay}
                disabled={wordsCount < 30 || isAnalyzing}
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 px-6 py-2.5 text-xs font-bold text-white shadow-lg shadow-rose-500/25 hover:scale-105 active:scale-95 disabled:opacity-40 transition cursor-pointer"
              >
                <Sparkles size={14} />
                <span>{isAnalyzing ? "Analisando..." : "Avaliar Minha Redação 🤖"}</span>
              </button>
            </div>
          </div>

          {/* Painel Lateral com Análise das Competências (4 colunas) */}
          <div className="lg:col-span-4 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#160a16] p-5 shadow-xl space-y-4">
            <div>
              <h2 className="font-display text-base font-bold text-white mb-1 flex items-center gap-2">
                <Award size={18} className="text-rose-400" />
                <span>Diagnóstico das 5 Competências</span>
              </h2>

              {analysisResult ? (
                <div className="space-y-3 mt-3">
                  <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-3 text-center">
                    <span className="text-[0.65rem] font-bold text-rose-300 uppercase">Nota Estimada</span>
                    <span className="text-3xl font-display font-black text-white block my-0.5">
                      {analysisResult.totalEstimated} / 1000
                    </span>
                    <span className="text-[0.6rem] text-rose-200/60 leading-tight block">
                      {analysisResult.feedback}
                    </span>
                  </div>

                  {/* Competências C1 a C5 */}
                  <div className="space-y-1.5 text-xs">
                    {[
                      { label: "C1 (Norma Culta)", score: analysisResult.c1 },
                      { label: "C2 (Tema e Repertório)", score: analysisResult.c2 },
                      { label: "C3 (Projeto de Texto)", score: analysisResult.c3 },
                      { label: "C4 (Coesão e Conectivos)", score: analysisResult.c4 },
                      { label: "C5 (Intervenção Social)", score: analysisResult.c5 },
                    ].map((comp, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-xl border border-white/5 bg-white/[0.02]">
                        <span className="text-rose-100">{comp.label}:</span>
                        <strong className="text-white font-mono">{comp.score} pts</strong>
                      </div>
                    ))}
                  </div>

                  <p className="text-[0.6rem] text-rose-200/40 text-center leading-relaxed pt-1">
                    * Estimativa automatizada com base em critérios de estrutura sintática e repertórios. Não substitui a banca oficial do INEP.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border border-white/5 bg-white/[0.01] p-6 text-center text-xs text-rose-200/60 mt-4 space-y-2">
                  <BookOpen size={28} className="text-rose-400/50 mx-auto" />
                  <p>Escreva sua redação na caixa ao lado e clique em "Avaliar Minha Redação" para receber nota detalhada por competência.</p>
                </div>
              )}
            </div>

            {/* Dica de Ouro */}
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-3.5 text-xs text-amber-200">
              <strong className="flex items-center gap-1 mb-1">
                <Lightbulb size={14} className="text-amber-400" />
                <span>Regra de Ouro da Redação ENEM:</span>
              </strong>
              <p className="text-[0.7rem] text-amber-100/80 leading-relaxed">
                Cada um dos 5 elementos da Competência 5 vale exatamente 40 pontos. Faltar o detalhamento custa 40 pontos imediatos.
              </p>
            </div>
          </div>

        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* ABA 2: BANCO AMPLO DE TEMAS COM TEXTOS MOTIVADORES */}
      {/* ───────────────────────────────────────────────────────────── */}
      {activeTab === "temas" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <FileText size={18} className="text-rose-400" />
              <span>Propostas Oficiais e Temas Inéditos Selecionados</span>
            </h2>
            <span className="text-xs text-rose-200/60">{TEMAS_REDACAO.length} propostas completas</span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {TEMAS_REDACAO.map(tema => (
              <div
                key={tema.id}
                className={`rounded-3xl border p-5 sm:p-6 transition flex flex-col justify-between ${
                  selectedTemaId === tema.id
                    ? "border-rose-400 bg-[#190a18] ring-1 ring-rose-400/40"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="rounded-lg bg-rose-500/20 px-2.5 py-0.5 text-[0.65rem] font-bold text-rose-300 border border-rose-500/30 uppercase">
                      {tema.eixo}
                    </span>
                    <span className="text-xs text-amber-300 font-bold">
                      {tema.anoOuTipo}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-white mb-3">
                    "{tema.titulo}"
                  </h3>

                  {/* Textos Motivadores Resumidos */}
                  <div className="space-y-2 mb-4">
                    {tema.textosMotivadores.map((tm, idx) => (
                      <div key={idx} className="rounded-xl border border-white/5 bg-black/20 p-2.5 text-xs">
                        <strong className="text-rose-200 block text-[0.7rem]">{tm.titulo}</strong>
                        <p className="text-rose-100/70 text-[0.65rem] mt-0.5 line-clamp-2">{tm.conteudo}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    destinoAudio.playClick();
                    setSelectedTemaId(tema.id);
                    setActiveTab("simulator");
                  }}
                  className="w-full rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 py-2.5 text-xs font-bold text-white shadow-lg shadow-rose-500/20 hover:scale-[1.01] transition cursor-pointer"
                >
                  Escrever Redação Deste Tema ➔
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* ABA 3: CONSTRUTOR DA COMPETÊNCIA 5 (200 PONTOS) */}
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
                placeholder="Ex: deve implementar o programa de caravanas da imunização..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-rose-100/30 focus:border-rose-400 focus:outline-none"
              />
            </div>

            {/* 3. MEIO/MODO */}
            <div>
              <label className="text-xs font-semibold text-rose-200 flex items-center justify-between mb-1">
                <span>3. Meio ou Modo (COMO fará?)</span>
                {meio.trim().length > 5 && <Check size={14} className="text-emerald-400" />}
              </label>
              <input
                type="text"
                value={meio}
                onChange={(e) => setMeio(e.target.value)}
                placeholder="Ex: por intermédio de vans equipadas nas escolas e praças públicas..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-rose-100/30 focus:border-rose-400 focus:outline-none"
              />
            </div>

            {/* 4. EFEITO/FINALIDADE */}
            <div>
              <label className="text-xs font-semibold text-rose-200 flex items-center justify-between mb-1">
                <span>4. Efeito ou Finalidade (PARA QUE fará?)</span>
                {efeito.trim().length > 5 && <Check size={14} className="text-emerald-400" />}
              </label>
              <input
                type="text"
                value={efeito}
                onChange={(e) => setEfeito(e.target.value)}
                placeholder="Ex: a fim de elevar a cobertura vacinal para os 95% preconizados pela OMS..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-rose-100/30 focus:border-rose-400 focus:outline-none"
              />
            </div>

            {/* 5. DETALHAMENTO */}
            <div>
              <label className="text-xs font-semibold text-rose-200 flex items-center justify-between mb-1">
                <span>5. Detalhamento (Um detalhe a mais em qualquer elemento)</span>
                {detalhamento.trim().length > 5 && <Check size={14} className="text-emerald-400" />}
              </label>
              <input
                type="text"
                value={detalhamento}
                onChange={(e) => setDetalhamento(e.target.value)}
                placeholder="Ex: garantindo atendimento em horários estendidos nos finais de semana..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder-rose-100/30 focus:border-rose-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Visualizador do Parágrafo Conclusivo Montado */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#160a16] p-5 sm:p-6 shadow-xl">
            <div>
              <span className="text-[0.65rem] font-bold tracking-widest text-rose-300 uppercase block mb-1">
                Resultado em Tempo Real
              </span>
              <h3 className="font-display text-base font-bold text-white mb-3">
                Parágrafo Conclusivo Formatado
              </h3>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-xs font-serif leading-relaxed text-rose-50/90 whitespace-pre-line min-h-[160px]">
                {agente || acao || meio || efeito || detalhamento ? (
                  `Portanto, medidas são urgentes para mitigar essa problemática. Cabe a(o) ${agente || "[Agente]"}, ${acao || "[Ação]"}, ${meio || "[Meio/Modo]"}, ${efeito || "[Efeito]"}, ${detalhamento || "[Detalhamento]"}.`
                ) : (
                  <span className="text-rose-200/40 italic">
                    Preencha os campos ao lado para ver o parágrafo de conclusão se montar automaticamente segundo a grade de correção oficial do ENEM...
                  </span>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                const textToCopy = `Portanto, medidas são urgentes para mitigar essa problemática. Cabe a(o) ${agente}, ${acao}, ${meio}, ${efeito}, ${detalhamento}.`;
                navigator.clipboard?.writeText(textToCopy);
                destinoAudio.playStamp();
              }}
              disabled={c5Score < 160}
              className="mt-4 w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 py-3 text-xs font-bold text-white shadow-lg shadow-rose-500/25 disabled:opacity-40 transition cursor-pointer"
            >
              <Copy size={14} />
              <span>Copiar Parágrafo Conclusivo</span>
            </button>
          </div>

        </div>
      )}

      {/* ───────────────────────────────────────────────────────────── */}
      {/* ABA 4: REPERTÓRIOS SOCIOCULTURAIS C2 */}
      {/* ───────────────────────────────────────────────────────────── */}
      {activeTab === "repertoire" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REPERTORIOS.map((rep) => (
            <div
              key={rep.id}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 shadow-lg flex flex-col justify-between hover:bg-white/[0.04] transition"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded-lg bg-rose-500/20 px-2 py-0.5 text-[0.65rem] font-bold text-rose-300 border border-rose-500/30">
                    {rep.autor}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyRepertoire(rep)}
                    className="flex items-center gap-1 text-[0.65rem] text-rose-200/60 hover:text-white transition cursor-pointer"
                  >
                    {copiedId === rep.id ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedId === rep.id ? "Copiado!" : "Copiar"}</span>
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
      {/* ABA 5: MODELO NOTA 1000 ANATÔMICO COMENTADO */}
      {/* ───────────────────────────────────────────────────────────── */}
      {activeTab === "modelo1000" && (
        <div className="rounded-3xl border border-white/10 bg-[#120a16] p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="border-b border-white/10 pb-4">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-1">
              Anatomia de um Texto de Excelência
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
              Redação Nota 1000 Oficial Desconstruída
            </h2>
            <p className="text-xs text-rose-200/60 mt-1">
              Tema: "{MODELO_NOTA_1000.tema}"
            </p>
          </div>

          <div className="space-y-4">
            {MODELO_NOTA_1000.paragrafos.map((parag, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3">
                <span className="rounded-lg bg-rose-500/20 px-2.5 py-1 text-xs font-bold text-rose-300 border border-rose-500/30">
                  {parag.tipo}
                </span>
                <p className="text-sm font-serif leading-relaxed text-rose-50/90 whitespace-pre-line pl-2 border-l-2 border-rose-500/40">
                  {parag.texto}
                </p>
                <div className="rounded-xl bg-sky-950/20 border border-sky-500/20 p-3 text-xs text-sky-200">
                  💡 <strong>Análise Estrutural:</strong> {parag.analise}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
