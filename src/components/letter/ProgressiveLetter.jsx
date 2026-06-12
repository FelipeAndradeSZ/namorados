import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { loveStory } from "../../config/loveStory";

const charactersPerTick = 3;
const typingInterval = 18;

export function ProgressiveLetter() {
  const paragraphs = loveStory.letter.paragraphs;
  const segments = useMemo(
    () => [loveStory.letter.salutation, ...paragraphs],
    [paragraphs],
  );
  const fullTextLength = useMemo(
    () => segments.reduce((total, segment) => total + segment.length, 0),
    [segments],
  );
  const paragraphRanges = useMemo(
    () =>
      segments.map((paragraph, index) => {
        const start = segments
          .slice(0, index)
          .reduce((total, item) => total + item.length, 0);

        return {
        paragraph,
          start,
          end: start + paragraph.length,
        };
      }),
    [segments],
  );
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    if (visibleCharacters >= fullTextLength) return undefined;

    const intervalId = window.setInterval(() => {
      setVisibleCharacters((current) =>
        Math.min(current + charactersPerTick, fullTextLength),
      );
    }, typingInterval);

    return () => window.clearInterval(intervalId);
  }, [fullTextLength, visibleCharacters]);

  return (
    <div>
      <div
        className="space-y-6 text-base leading-8 text-[#4b283a] sm:text-lg sm:leading-9"
        aria-live="off"
      >
        {paragraphRanges.map(({ paragraph, start, end }, index) => {
          const visibleParagraph = paragraph.slice(
            0,
            Math.max(0, Math.min(paragraph.length, visibleCharacters - start)),
          );

          if (!visibleParagraph) return null;

          return (
            <p
              key={paragraph}
              className={index === 0 ? "letter-salutation" : ""}
            >
              {visibleParagraph}
              {visibleCharacters >= start &&
              visibleCharacters < end &&
              visibleCharacters < fullTextLength ? (
                <span className="letter-caret" aria-hidden="true" />
              ) : null}
            </p>
          );
        })}

        {visibleCharacters >= fullTextLength ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="letter-signature pt-4"
          >
            {loveStory.letter.signature}
          </motion.p>
        ) : null}
      </div>

      {visibleCharacters < fullTextLength ? (
        <button
          type="button"
          onClick={() => setVisibleCharacters(fullTextLength)}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#7b415b]/15 bg-[#7b415b]/5 px-5 py-3 text-xs font-semibold tracking-wide text-[#7b415b] transition hover:bg-[#7b415b]/10"
        >
          <Eye size={15} />
          Mostrar carta completa
        </button>
      ) : null}

      <div className="sr-only">
        {segments.join(" ")} {loveStory.letter.signature}
      </div>
    </div>
  );
}
