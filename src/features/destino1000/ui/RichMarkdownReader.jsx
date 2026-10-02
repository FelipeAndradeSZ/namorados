import React from "react";
import { 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  Lightbulb, 
  BookOpen, 
  Info,
  ChevronRight,
  Code,
  Stethoscope,
  HelpCircle,
  Bookmark
} from "lucide-react";

/**
 * Utilitário exportado para extrair o sumário (TOC) de qualquer conteúdo markdown.
 */
export function extractHeadings(content = "") {
  if (!content || typeof content !== "string") return [];
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const headings = [];
  let index = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("#")) {
      const match = trimmed.match(/^(#{1,3})\s+(.+)$/);
      if (match) {
        index++;
        const level = match[1].length;
        const rawText = match[2].trim().replace(/\*\*/g, "").replace(/\*/g, "");
        const id = `section-${index}-${rawText.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30)}`;
        headings.push({ id, level, text: rawText });
      }
    }
  }
  return headings;
}

/**
 * RichMarkdownReader
 * Renderizador editorial de alta qualidade pedagógica para conteúdos de livros didáticos.
 * Suporta temas (midnight, sepia, clean), famílias tipográficas (sans, serif),
 * fórmulas matemáticas (inline e display $$), caixas didáticas temáticas, tabelas e listas de definições.
 */
export function RichMarkdownReader({ 
  content = "", 
  fontSize = "normal", 
  fontFamily = "sans", // 'sans' | 'serif'
  theme = "midnight",   // 'midnight' | 'sepia' | 'clean'
  className = "" 
}) {
  if (!content || typeof content !== "string") {
    return null;
  }

  const isSepia = theme === "sepia";

  // Parsear texto com negrito, itálico, código inline, fórmulas matemáticas e tags
  const renderInlineFormatted = (text) => {
    if (!text) return null;

    // Tokens para processar tags inline
    // Suporta: **negrito**, *itálico*, `código/fórmula`, $fórmula matemática$, \(fórmula\)
    const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\$[^$\n]+\$|\\\([^\)]+\\\))/g;
    const parts = text.split(regex);

    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const inner = part.slice(2, -2);
        return (
          <strong 
            key={idx} 
            className={`font-bold tracking-tight ${
              isSepia ? "text-[#fff8ee]" : "text-white"
            }`}
          >
            {inner}
          </strong>
        );
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        const inner = part.slice(1, -1);
        return (
          <em key={idx} className={`italic ${isSepia ? "text-[#d1c4b2]" : "text-slate-300"}`}>
            {inner}
          </em>
        );
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        const inner = part.slice(1, -1);
        return (
          <code
            key={idx}
            className={`px-1.5 py-0.5 rounded font-mono text-xs border shadow-xs inline-block ${
              isSepia 
                ? "bg-[#29221b] text-amber-200 border-[#3d3228]" 
                : "bg-slate-800 text-sky-300 border-slate-700/80"
            }`}
          >
            {inner}
          </code>
        );
      }
      if (part.startsWith("$") && part.endsWith("$")) {
        const inner = part.slice(1, -1);
        return (
          <span
            key={idx}
            className={`px-1.5 py-0.5 mx-0.5 rounded font-mono text-[0.9em] border inline-flex items-center shadow-xs font-semibold ${
              isSepia
                ? "bg-[#27211a] text-amber-100 border-[#40352a]"
                : "bg-sky-950/60 text-sky-200 border-sky-800/50"
            }`}
          >
            {inner}
          </span>
        );
      }
      if (part.startsWith("\\(") && part.endsWith("\\)")) {
        const inner = part.slice(2, -2);
        return (
          <span
            key={idx}
            className={`px-1.5 py-0.5 mx-0.5 rounded font-mono text-[0.9em] border inline-flex items-center shadow-xs font-semibold ${
              isSepia
                ? "bg-[#27211a] text-amber-100 border-[#40352a]"
                : "bg-sky-950/60 text-sky-200 border-sky-800/50"
            }`}
          >
            {inner}
          </span>
        );
      }
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    });
  };

  // Parser de blocos de alto nível
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;
  let headingCounter = 0;

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

    // 2.5 Display Math Block ($$ ... $$)
    if (line.startsWith("$$")) {
      const formulaLines = [];
      let singleLine = false;
      if (line.length > 2 && line.endsWith("$$")) {
        formulaLines.push(line.slice(2, -2).trim());
        singleLine = true;
        i++;
      } else {
        i++;
        while (i < lines.length && !lines[i].trim().endsWith("$$")) {
          formulaLines.push(lines[i]);
          i++;
        }
        if (i < lines.length && lines[i].trim().endsWith("$$")) {
          const last = lines[i].trim().replace(/\$\$$/, "");
          if (last) formulaLines.push(last);
          i++;
        }
      }
      blocks.push({
        type: "display-math",
        formula: formulaLines.join("\n").trim()
      });
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
        headingCounter++;
        const rawText = match[2].trim().replace(/\*\*/g, "").replace(/\*/g, "");
        const id = `section-${headingCounter}-${rawText.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 30)}`;
        blocks.push({
          type: "heading",
          level: match[1].length,
          text: match[2].trim(),
          id
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
      let fullQuote = quoteLines.join("\n");
      let alertType = null;
      const alertMatch = fullQuote.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION|CLINICAL|CASE|RECALL|SUMMARY)\]\s*/i);
      if (alertMatch) {
        alertType = alertMatch[1].toUpperCase();
        fullQuote = fullQuote.slice(alertMatch[0].length);
      }
      blocks.push({
        type: "blockquote",
        alertType,
        content: fullQuote
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
        const raw = lines[i];
        const indent = raw.search(/\S/);
        listItems.push({
          text: raw.trim().replace(/^[-*•]\s+/, ""),
          indent: indent >= 2 ? 1 : 0
        });
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
        const raw = lines[i];
        const indent = raw.search(/\S/);
        const itemText = raw.trim().replace(/^\d+[.)]\s+/, "");
        listItems.push({
          text: itemText,
          indent: indent >= 2 ? 1 : 0
        });
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
      !lines[i].trim().startsWith("$$") &&
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
  const getBlockquoteTheme = (text, alertType) => {
    if (alertType === "NOTE") {
      return {
        bg: isSepia ? "bg-[#212836]/60" : "bg-sky-950/30",
        border: "border-l-4 border-l-sky-400 border-sky-800/40",
        text: "text-sky-300",
        title: "Nota Didática • Contexto Fundamental",
        icon: <Info className="w-4 h-4 text-sky-400 flex-shrink-0" />
      };
    }
    if (alertType === "TIP") {
      return {
        bg: isSepia ? "bg-[#1f2d25]/60" : "bg-emerald-950/30",
        border: "border-l-4 border-l-emerald-400 border-emerald-800/40",
        text: "text-emerald-300",
        title: "Dica Estratégica TRI • Pulo do Gato",
        icon: <Zap className="w-4 h-4 text-emerald-400 flex-shrink-0" />
      };
    }
    if (alertType === "IMPORTANT") {
      return {
        bg: isSepia ? "bg-[#2b2518]/60" : "bg-amber-950/30",
        border: "border-l-4 border-l-amber-400 border-amber-800/40",
        text: "text-amber-300",
        title: "Conceito Chave • Domínio Obrigatório",
        icon: <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0" />
      };
    }
    if (alertType === "WARNING") {
      return {
        bg: isSepia ? "bg-[#2d1e21]/60" : "bg-rose-950/30",
        border: "border-l-4 border-l-rose-400 border-rose-800/40",
        text: "text-rose-300",
        title: "Ponto Crítico • Armadilha da Banca",
        icon: <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
      };
    }
    if (alertType === "CAUTION") {
      return {
        bg: isSepia ? "bg-[#331c1f]/60" : "bg-red-950/35",
        border: "border-l-4 border-l-red-500 border-red-800/50",
        text: "text-red-300",
        title: "Alerta de Distrator • Não Cometa este Erro",
        icon: <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0" />
      };
    }
    if (alertType === "CLINICAL" || alertType === "CASE") {
      return {
        bg: isSepia ? "bg-[#1c2928]/60" : "bg-teal-950/30",
        border: "border-l-4 border-l-teal-400 border-teal-800/40",
        text: "text-teal-300",
        title: "Aplicação Prática & Correlação Médica",
        icon: <Stethoscope className="w-4 h-4 text-teal-400 flex-shrink-0" />
      };
    }
    if (alertType === "RECALL" || alertType === "SUMMARY") {
      return {
        bg: isSepia ? "bg-[#251f2d]/60" : "bg-purple-950/30",
        border: "border-l-4 border-l-purple-400 border-purple-800/40",
        text: "text-purple-300",
        title: "Retenção Ativa • Teste de Consolidação",
        icon: <HelpCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
      };
    }

    const lower = text.toLowerCase();
    if (lower.includes("dica tri") || lower.includes("pulo do gato") || lower.includes("estratégia tri")) {
      return {
        bg: isSepia ? "bg-[#2b2518]/60" : "bg-amber-950/30",
        border: "border-l-4 border-l-amber-400 border-amber-800/40",
        text: "text-amber-300",
        title: "Dica Estratégica TRI",
        icon: <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
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
        bg: isSepia ? "bg-[#2d1e21]/60" : "bg-rose-950/30",
        border: "border-l-4 border-l-rose-400 border-rose-800/40",
        text: "text-rose-300",
        title: "Ponto Crítico • Armadilha da Banca",
        icon: <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
      };
    }
    if (lower.includes("exemplo") || lower.includes("aplicação") || lower.includes("prática") || lower.includes("caso clínico")) {
      return {
        bg: isSepia ? "bg-[#1f2d25]/60" : "bg-emerald-950/30",
        border: "border-l-4 border-l-emerald-400 border-emerald-800/40",
        text: "text-emerald-300",
        title: "Aplicação e Caso Prático",
        icon: <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
      };
    }
    return {
      bg: isSepia ? "bg-[#212836]/60" : "bg-slate-900/50",
      border: "border-l-4 border-l-slate-400 border-slate-700/60",
      text: "text-slate-300",
      title: "Nota Didática",
      icon: <Info className="w-4 h-4 text-slate-400 flex-shrink-0" />
    };
  };

  // Classes tipográficas dinâmicas baseadas em tamanho e família
  const sizeClass = 
    fontSize === "large" 
      ? "text-lg sm:text-[19px] leading-[1.85]" 
      : fontSize === "sm" 
      ? "text-sm sm:text-[15px] leading-[1.75]" 
      : "text-base sm:text-[17px] leading-[1.8]";

  const fontClass = fontFamily === "serif" ? "font-serif tracking-normal" : "font-sans";
  const bodyTextClass = isSepia ? "text-[#dfd7cc]" : "text-slate-200";

  return (
    <div className={`space-y-6 ${sizeClass} ${fontClass} ${bodyTextClass} ${className}`}>
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "heading": {
            if (block.level === 1) {
              return (
                <div key={idx} id={block.id} className="pt-8 pb-3 border-b border-amber-500/25 scroll-mt-24">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-3">
                    <span className="w-2.5 h-8 rounded-full bg-gradient-to-b from-amber-400 to-amber-600 inline-block flex-shrink-0" />
                    <span>{renderInlineFormatted(block.text)}</span>
                  </h1>
                </div>
              );
            }
            if (block.level === 2) {
              return (
                <div key={idx} id={block.id} className={`pt-7 pb-2 border-b scroll-mt-24 ${isSepia ? "border-[#3a3026]" : "border-slate-800"}`}>
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                    <span className="w-1.5 h-5 rounded-full bg-amber-400 inline-block flex-shrink-0" />
                    <span>{renderInlineFormatted(block.text)}</span>
                  </h2>
                </div>
              );
            }
            if (block.level === 3) {
              return (
                <h3
                  key={idx}
                  id={block.id}
                  className="pt-5 text-lg sm:text-xl font-bold text-amber-300 flex items-center gap-2 scroll-mt-24"
                >
                  <ChevronRight className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{renderInlineFormatted(block.text)}</span>
                </h3>
              );
            }
            return (
              <h4 key={idx} id={block.id} className="pt-3 text-base font-semibold text-slate-300 scroll-mt-24">
                {renderInlineFormatted(block.text)}
              </h4>
            );
          }

          case "paragraph": {
            return (
              <p key={idx} className="font-normal">
                {renderInlineFormatted(block.text)}
              </p>
            );
          }

          case "display-math": {
            return (
              <div 
                key={idx} 
                className={`my-6 p-4 sm:p-5 rounded-2xl border text-center overflow-x-auto shadow-md ${
                  isSepia 
                    ? "bg-[#251f18] border-[#423628] text-amber-100" 
                    : "bg-slate-900/80 border-slate-700/80 text-sky-100"
                }`}
              >
                <div className="font-mono text-base sm:text-lg tracking-wide py-1 select-all">
                  {renderInlineFormatted(block.formula)}
                </div>
              </div>
            );
          }

          case "blockquote": {
            const themeStyle = getBlockquoteTheme(block.content, block.alertType);
            const quoteParagraphs = block.content.split("\n").filter(Boolean);
            return (
              <div
                key={idx}
                className={`my-6 p-4 sm:p-5 rounded-xl border border-slate-800/60 ${themeStyle.border} ${themeStyle.bg} shadow-md`}
              >
                <div className="flex items-center gap-2 mb-2 font-bold text-xs sm:text-sm uppercase tracking-wider">
                  {themeStyle.icon}
                  <span className={themeStyle.text}>{themeStyle.title}</span>
                </div>
                <div className="text-sm sm:text-base leading-relaxed pl-6 space-y-2">
                  {quoteParagraphs.map((p, pIdx) => (
                    <p key={pIdx}>{renderInlineFormatted(p)}</p>
                  ))}
                </div>
              </div>
            );
          }

          case "unordered-list": {
            return (
              <ul key={idx} className="space-y-3 my-4 pl-1">
                {block.items.map((item, iIdx) => {
                  const itemText = typeof item === "string" ? item : item.text;
                  const isSub = typeof item === "object" && item.indent > 0;
                  
                  // Detecção de lista de definições (**Termo**: Descrição)
                  const defMatch = itemText.match(/^\*\*([^*]+)\*\*:\s*(.+)$/);

                  if (defMatch && !isSub) {
                    const term = defMatch[1];
                    const definition = defMatch[2];
                    return (
                      <li key={iIdx} className="flex items-start gap-3 my-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2.5 flex-shrink-0" />
                        <div className="flex-1">
                          <span className={`inline-block font-semibold px-2 py-0.5 mr-2 rounded text-xs border ${
                            isSepia 
                              ? "bg-[#29221a] text-amber-200 border-[#3d3226]" 
                              : "bg-slate-800 text-amber-300 border-slate-700"
                          }`}>
                            {term}
                          </span>
                          <span>{renderInlineFormatted(definition)}</span>
                        </div>
                      </li>
                    );
                  }

                  return (
                    <li
                      key={iIdx}
                      className={`flex items-start gap-2.5 ${
                        isSub ? "ml-6 border-l-2 border-slate-800/80 pl-3 py-0.5" : ""
                      }`}
                    >
                      <span
                        className={`rounded-full mt-2.5 flex-shrink-0 ${
                          isSub
                            ? "w-1.5 h-1.5 bg-slate-500"
                            : "w-2 h-2 bg-amber-400/90"
                        }`}
                      />
                      <span className="flex-1">
                        {renderInlineFormatted(itemText)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            );
          }

          case "ordered-list": {
            return (
              <ol key={idx} className="space-y-3.5 my-4 pl-1">
                {block.items.map((item, iIdx) => {
                  const itemText = typeof item === "string" ? item : item.text;
                  const isSub = typeof item === "object" && item.indent > 0;
                  return (
                    <li
                      key={iIdx}
                      className={`flex items-start gap-3 ${
                        isSub ? "ml-6 border-l-2 border-slate-800/80 pl-3 py-0.5" : ""
                      }`}
                    >
                      <span
                        className={`flex-shrink-0 rounded-md font-mono font-bold flex items-center justify-center mt-1 ${
                          isSub
                            ? "w-5 h-5 bg-slate-800 text-slate-300 text-[10px]"
                            : isSepia 
                            ? "w-6 h-6 bg-[#2a221b] border border-[#44372b] text-amber-300 text-xs"
                            : "w-6 h-6 bg-slate-800 border border-slate-700 text-amber-300 text-xs"
                        }`}
                      >
                        {iIdx + 1}
                      </span>
                      <span className="flex-1">
                        {renderInlineFormatted(itemText)}
                      </span>
                    </li>
                  );
                })}
              </ol>
            );
          }

          case "table": {
            return (
              <div
                key={idx}
                className={`my-6 overflow-x-auto rounded-2xl border shadow-xl ${
                  isSepia ? "border-[#3d3228] bg-[#1d1814]" : "border-slate-800 bg-slate-900/60"
                }`}
              >
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className={`border-b font-bold ${
                      isSepia 
                        ? "bg-[#27201b] border-[#3d3228] text-amber-200" 
                        : "bg-slate-800/90 border-slate-700 text-amber-300"
                    }`}>
                      {block.headers.map((h, hIdx) => (
                        <th key={hIdx} className="px-4 py-3">
                          {renderInlineFormatted(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${isSepia ? "divide-[#2e261f]" : "divide-slate-800/70"}`}>
                    {block.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className={
                          rIdx % 2 === 0
                            ? isSepia ? "bg-[#1d1814]" : "bg-slate-950/40"
                            : isSepia ? "bg-[#221c17]" : "bg-slate-900/30"
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
                    {block.lang || "modelo conceitual"}
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
                <hr className={`border-t ${isSepia ? "border-[#382e25]" : "border-slate-800"}`} />
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
