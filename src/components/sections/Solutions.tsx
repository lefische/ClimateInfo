import { Plus } from 'lucide-react';
import { solutions } from '../../data/content';
import { DeepDive } from '../ui/DeepDive';
import { Icon } from '../ui/Icon';
import { Section } from '../ui/Section';
import { SummaryBox } from '../ui/SummaryBox';

const columnStyles = {
  system: { border: 'border-teal-400/30', iconBg: 'bg-teal-400/15 text-teal-300', accent: 'text-teal-300', chip: 'bg-teal-400/10 text-teal-200' },
  individual: { border: 'border-emerald-400/30', iconBg: 'bg-emerald-400/15 text-emerald-300', accent: 'text-emerald-300', chip: 'bg-emerald-400/10 text-emerald-200' },
} as const;

export function Solutions() {
  const [system, individual] = solutions.columns;
  return (
    <Section id="loesungen" index="06" title={solutions.title} intro={solutions.intro}>
      <SummaryBox summary={solutions.summary} />

      <div className="relative mt-10 grid gap-6 lg:grid-cols-2 lg:gap-10">
        {[system, individual].map((col) => {
          const style = columnStyles[col.id];
          return (
            <article key={col.id} aria-labelledby={`loesung-${col.id}`} className={`rounded-2xl border ${style.border} bg-slate-900/70 p-6 sm:p-8`}>
              <header className="flex items-center gap-4">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${style.iconBg}`}>
                  <Icon name={col.icon} className="h-6 w-6" />
                </span>
                <div>
                  <p className={`text-sm font-semibold uppercase tracking-wider ${style.accent}`}>{col.subtitle}</p>
                  <h3 id={`loesung-${col.id}`} className="text-2xl font-bold text-white">
                    {col.title}
                  </h3>
                </div>
              </header>
              <ul className="mt-6 divide-y divide-slate-800">
                {col.levers.map((lever) => (
                  <li key={lever.title} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h4 className="font-semibold text-slate-100">{lever.title}</h4>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${style.chip}`}>{lever.impact}</span>
                    </div>
                    <p className="mt-1 leading-relaxed text-slate-400">{lever.description}</p>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}

        {/* Verbindendes Symbol zwischen den Spalten */}
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-slate-300 lg:flex"
        >
          <Plus className="h-5 w-5" />
        </span>
      </div>

      <p className="mt-8 rounded-2xl border border-slate-700/80 bg-slate-900/50 p-6 text-center text-lg leading-relaxed text-slate-200">
        Kein Entweder-oder: <span className="font-semibold text-teal-300">Gute Rahmenbedingungen</span> machen klimafreundliches
        Verhalten einfach, und <span className="font-semibold text-emerald-300">engagierte Menschen</span> schaffen die Mehrheiten
        für bessere Rahmenbedingungen.
      </p>

      <DeepDive content={solutions.deepDive} />
    </Section>
  );
}
