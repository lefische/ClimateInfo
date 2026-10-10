import { useState } from 'react';
import { CircleCheck, CircleHelp, RotateCcw } from 'lucide-react';
import { useMode } from '../../context/ModeContext';
import type { Myth } from '../../data/types';
import { SourceChips } from '../ui/SourceChips';

const faceBase =
  'col-start-1 row-start-1 flex flex-col rounded-2xl border p-6 sm:p-7 backface-hidden';
// Unsichtbare Seite wird nach der Drehung aus Tab-Reihenfolge und Screenreader entfernt.
const hiddenFace = 'invisible [transition:visibility_0s_linear_400ms]';
const shownFace = 'visible';

/** Karte mit Wendeeffekt: Vorderseite Mythos, Rückseite Fakten. */
export function MythCard({ myth, index }: { myth: Myth; index: number }) {
  const { mode } = useMode();
  const [flipped, setFlipped] = useState(false);
  const headingId = `mythos-${myth.id}`;

  return (
    <article aria-labelledby={headingId} className="perspective-[1400px]">
      <div
        className={`grid h-full transform-3d transition-transform duration-500 ease-out motion-reduce:transition-none ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Vorderseite: Mythos */}
        <div className={`${faceBase} border-orange-400/30 bg-slate-900 ${flipped ? hiddenFace : shownFace}`}>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-orange-300">
            <CircleHelp className="h-4 w-4" aria-hidden="true" />
            Mythos {index + 1}
          </p>
          <h3 id={headingId} className="mt-4 text-2xl font-bold leading-snug text-white">
            „{myth.myth}“
          </h3>
          <button
            type="button"
            aria-expanded={flipped}
            onClick={() => setFlipped(true)}
            className="mt-auto self-start rounded-full bg-orange-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-orange-200"
          >
            Faktencheck ansehen
          </button>
        </div>

        {/* Rückseite: Fakten */}
        <div
          className={`${faceBase} rotate-y-180 border-emerald-400/30 bg-slate-900 ${flipped ? shownFace : hiddenFace}`}
        >
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-300">
            <CircleCheck className="h-4 w-4" aria-hidden="true" />
            Fakt
          </p>
          <p className="mt-4 text-lg font-semibold leading-snug text-white">{myth.verdict}</p>
          <p className="mt-3 leading-relaxed text-slate-300">{myth.fact}</p>
          {mode === 'detail' && (
            <>
              <ul className="mt-4 space-y-2">
                {myth.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <SourceChips ids={myth.sources} />
              </div>
            </>
          )}
          <button
            type="button"
            onClick={() => setFlipped(false)}
            className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-slate-600 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-emerald-300/60 hover:text-white"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Zurück zum Mythos
          </button>
        </div>
      </div>
    </article>
  );
}
