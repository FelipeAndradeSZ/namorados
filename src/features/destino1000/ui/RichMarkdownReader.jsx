import React from "react";
import { 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  Lightbulb, 
  BookOpen, 
  Info,
  ChevronRight,
  Code
} from "lucide-react";

/**
 * RichMarkdownReader
 * Renderizador de alta qualidade pedagógica para conteúdos de livros didáticos.
 * Transforma Markdown bruto em hierarquia visual elegante, com caixas temáticas,
 * tabelas responsivas, destaques de conceitos e tipografia legível para estudo intensivo.
 */
export function RichMarkdownReader({ content = "", fontSize = "normal", className = "" }) {
  if (!content || typeof content !== "string") {
    return null;
  }

  // Parsear texto com negrito, itálico, código inline e links
  const renderInlineFormatted = (text) => {
    if (!text) return null;

    // Tokens para processar tags inline
    // Suporta: **negrito**, *itálico*, `código/fórmula`
    const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
    const parts = text.split(regex);

    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const inner = part.slice(2, -2);
        return (
          <strong key={idx} className="font-bold text-amber-200 tracking-wide">
            {inner}
          </strong>
        );
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        const inner = part.slice(1, -1);
        return (
          <em key={idx} className="italic text-slate-300">
            {inner}
          </em>
        );
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        const inner = part.slice(1, -1);
        return (
          <code
            key={idx}
            className="px-1.5 py-0.5 rounded bg-slate-800 text-sky-300 font-mono text-xs border border-slate-700/80 shadow-xs inline-block"
          >
            {inner}
          </code>
        );
      }
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    });
  };

  // Parser de blocos de alto nível
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // 1. Linhas vazias
    if (!line) {
      i++;
      continue;
    }

    // 2. Divisor horizontal (--- ou ***)
    if (line === "---" || line === "***" || line === "___") {
      blocks.push({ type: "divider" });
      i++;
      continue;
    }

    // 3. Bloco de código / fórmula (```)
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length && lines[i].trim().startsWith("```")) {
        i++; // pular ``` de fechamento
      }
      blocks.push({
        type: "code",
        lang,
        content: codeLines.join("\n")
      });
      continue;
    }

    // 4. Cabeçalhos (#, ##, ###, ####)
    if (line.startsWith("#")) {
      const match = line.match(/^(#{1,4})\s+(.+)$/);
      if (match) {
        blocks.push({
          type: "heading",
          level: match[1].length,
          text: match[2].trim()
        });
        i++;
        continue;
      }
    }

    // 5. Citações e Caixas Didáticas (> ...)
    if (line.startsWith(">")) {
      const quoteLines = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({
        type: "blockquote",
        content: quoteLines.join("\n")
      });
      continue;
    }

    // 6. Tabelas Markdown (| col1 | col2 |)
    if (line.startsWith("|") && line.endsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      // Validar se tem pelo menos 2 linhas (cabeçalho + divisor ou cabeçalho + dados)
      if (tableLines.length >= 2) {
        const headerRow = tableLines[0]
          .split("|")
          .map((c) => c.trim())
          .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);

        const isDivider = (rowStr) => /^[|\s-:]+$/.test(rowStr);
        let startDataIdx = 1;
        if (tableLines.length > 1 && isDivider(tableLines[1])) {
          startDataIdx = 2;
        }

        const dataRows = tableLines.slice(startDataIdx).map((rowStr) =>
          rowStr
            .split("|")
            .map((c) => c.trim())
            .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1)
        );

        blocks.push({
          type: "table",
          headers: headerRow,
          rows: dataRows
        });
        continue;
      }
    }

    // 7. Listas Não Ordenadas (- ou * ou •)
    if (/^[-*•]\s+/.test(line)) {
      const listItems = [];
      while (i < lines.length && /^[-*•]\s+/.test(lines[i].trim())) {
        listItems.push(lines[i].trim().replace(/^[-*•]\s+/, ""));
        i++;
      }
      blocks.push({
        type: "unordered-list",
        items: listItems
      });
      continue;
    }

    // 8. Listas Ordenadas (1. ou 1) )
    if (/^\d+[.)]\s+/.test(line)) {
      const listItems = [];
      while (i < lines.length && /^\d+[.)]\s+/.test(lines[i].trim())) {
        const itemText = lines[i].trim().replace(/^\d+[.)]\s+/, "");
        listItems.push(itemText);
        i++;
      }
      blocks.push({
        type: "ordered-list",
        items: listItems
      });
      continue;
    }

    // 9. Parágrafo comum (acumula linhas consecutivas)
    const pLines = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith(">") &&
      !lines[i].trim().startsWith("```") &&
      !/^[-*•]\s+/.test(lines[i].trim()) &&
      !/^\d+[.)]\s+/.test(lines[i].trim()) &&
      !(lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) &&
      lines[i].trim() !== "---"
    ) {
      pLines.push(lines[i].trim());
      i++;
    }

    if (pLines.length > 0) {
      blocks.push({
        type: "paragraph",
        text: pLines.join(" ")
      });
    }
  }

  // Identificador de estilo de blockquote
  const getBlockquoteTheme = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("dica tri") || lower.includes("pulo do gato") || lower.includes("estratégia tri")) {
      return {
        bg: "bg-gradient-to-r from-amber-950/40 via-amber-900/20 to-slate-900/60",
        border: "border-amber-500/70",
        text: "text-amber-200",
        title: "Dica Estratégica TRI",
        icon: <Zap className="w-5 h-5 text-amber-400 flex-shrink-0" />
      };
    }
    if (
      lower.includes("atenção") ||
      lower.includes("cuidado") ||
      lower.includes("armadilha") ||
      lower.includes("pegadinha") ||
      lower.includes("alerta") ||
      lower.includes("erro clássico")
    ) {
      return {
        bg: "bg-gradient-to-r from-rose-950/40 via-rose-900/20 to-slate-900/60",
        border: "border-rose-500/70",
        text: "text-rose-200",
        title: "Ponto Crítico • Armadilha da Banca",
        icon: <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0" />
      };
    }
    if (lower.includes("exemplo") || lower.includes("aplicação") || lower.includes("prática") || lower.includes("caso clínico")) {
      return {
        bg: "bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-slate-900/60",
        border: "border-emerald-500/70",
        text: "text-emerald-200",
        title: "Aplicação e Caso Prático",
        icon: <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
      };
    }
    if (lower.includes("conceito") || lower.includes("definição") || lower.includes("fundamento") || lower.includes("importante")) {
      return {
        bg: "bg-gradient-to-r from-indigo-950/40 via-indigo-900/20 to-slate-900/60",
        border: "border-indigo-500/70",
        text: "text-indigo-200",
        title: "Fundamento Teórico Essencial",
        icon: <Lightbulb className="w-5 h-5 text-indigo-400 flex-shrink-0" />
      };
    }
    return {
      bg: "bg-slate-900/70",
      border: "border-slate-700",
      text: "text-slate-300",
      title: "Nota Didática",
      icon: <Info className="w-5 h-5 text-slate-400 flex-shrink-0" />
    };
  };

  const textClass = fontSize === "large" ? "text-lg leading-relaxed" : "text-base leading-relaxed";

  return (
    <div className={`space-y-6 ${textClass} text-slate-200 ${className}`}>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "heading": {
            if (block.level === 1) {
              return (
                <div key={idx} className="pt-6 pb-2 border-b border-amber-500/30">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
                    {renderInlineFormatted(block.text)}
                  </h1>
                </div>
              );
            }
            if (block.level === 2) {
              return (
                <div key={idx} className="pt-6 pb-1 border-b border-slate-800">
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-6 rounded-full bg-amber-500 inline-block" />
                    <span>{renderInlineFormatted(block.text)}</span>
                  </h2>
                </div>
              );
            }
            if (block.level === 3) {
              return (
                <h3
                  key={idx}
                  className="pt-4 text-lg sm:text-xl font-bold text-amber-300 flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                  <span>{renderInlineFormatted(block.text)}</span>
                </h3>
              );
            }
            return (
              <h4 key={idx} className="pt-2 text-base font-semibold text-slate-300">
                {renderInlineFormatted(block.text)}
              </h4>
            );
          }

          case "paragraph": {
            return (
              <p key={idx} className="text-slate-200 font-normal">
                {renderInlineFormatted(block.text)}
              </p>
            );
          }

          case "blockquote": {
            const theme = getBlockquoteTheme(block.content);
            return (
              <div
                key={idx}
                className={`my-5 p-4 sm:p-5 rounded-2xl border ${theme.border} ${theme.bg} shadow-lg backdrop-blur-xs`}
              >
                <div className="flex items-center gap-2.5 mb-2 font-bold text-sm">
                  {theme.icon}
                  <span className={theme.text}>{theme.title}</span>
                </div>
                <div className="text-slate-100 text-sm sm:text-base leading-relaxed pl-7">
                  {renderInlineFormatted(block.content)}
                </div>
              </div>
            );
          }

          case "unordered-list": {
            return (
              <ul key={idx} className="space-y-2.5 my-3 pl-2">
                {block.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0 shadow-xs shadow-amber-400/50" />
                    <span className="flex-1 text-slate-200">
                      {renderInlineFormatted(item)}
                    </span>
                  </li>
                ))}
              </ul>
            );
          }

          case "ordered-list": {
            return (
              <ol key={idx} className="space-y-3 my-3 pl-1">
                {block.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold flex items-center justify-center mt-0.5">
                      {iIdx + 1}
                    </span>
                    <span className="flex-1 text-slate-200">
                      {renderInlineFormatted(item)}
                    </span>
                  </li>
                ))}
              </ol>
            );
          }

          case "table": {
            return (
              <div
                key={idx}
                className="my-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl"
              >
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800/90 border-b border-slate-700 text-amber-300 font-bold">
                      {block.headers.map((h, hIdx) => (
                        <th key={hIdx} className="px-4 py-3">
                          {renderInlineFormatted(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/70 text-slate-200">
                    {block.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={
                          rIdx % 2 === 0
                            ? "bg-slate-950/40 hover:bg-slate-800/30 transition-colors"
                            : "bg-slate-900/30 hover:bg-slate-800/30 transition-colors"
                        }
                      >
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-4 py-3 align-top leading-relaxed">
                            {renderInlineFormatted(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          case "code": {
            return (
              <div
                key={idx}
                className="my-5 rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-xl"
              >
                <div className="bg-slate-900 px-4 py-2 flex items-center justify-between text-xs text-slate-400 border-b border-slate-800">
                  <span className="flex items-center gap-2 font-mono">
                    <Code className="w-3.5 h-3.5 text-amber-400" />
                    {block.lang || "fórmula / modelo"}
                  </span>
                </div>
                <pre className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-sky-200 leading-relaxed bg-slate-950/90">
                  <code>{block.content}</code>
                </pre>
              </div>
            );
          }

          case "divider": {
            return (
              <div key={idx} className="py-4">
                <hr className="border-t border-slate-800" />
              </div>
            );
          }

          default:
            return null;
        }
      })}
    </div>
  );
}
