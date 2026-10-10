import { Lightbulb } from 'lucide-react';
import type { Summary } from '../../data/types';

/** Kompakt-Ebene: kurze Infobox in Alltagssprache. */
export function SummaryBox({ summary, label = 'Kurz erklärt' }: { summary: Summary; label?: string }) {
  return (
    <aside
      aria-label={label}
      className="rounded-2xl border border-teal-400/25 bg-gradient-to-br from-teal-400/10 to-slate-900/40 p-6 sm:p-8"
    >
      <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-300">
        <Lightbulb className="h-4 w-4" aria-hidden="true" />
        {label}
      </p>
      <p className="text-lg leading-relaxed text-slate-100 sm:text-xl">{summary.lead}</p>
      <ul className="mt-5 space-y-3">
        {summary.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3 leading-relaxed text-slate-300">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" aria-hidden="true" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
