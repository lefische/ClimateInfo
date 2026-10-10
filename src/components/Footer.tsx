import { ExternalLink } from 'lucide-react';
import { footer, sources } from '../data/content';

export function Footer() {
  return (
    <footer id="quellen" aria-labelledby="quellen-titel" className="scroll-mt-20 border-t border-slate-800 bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 font-mono text-sm font-medium tracking-widest text-amber-300/90">07</p>
        <h2 id="quellen-titel" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {footer.title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">{footer.intro}</p>

        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {sources.map((source, i) => (
            <li
              key={source.id}
              id={`quelle-${source.id}`}
              className="scroll-mt-24 rounded-xl border border-slate-800 bg-slate-900/50 p-5 target:border-amber-300/60 target:bg-amber-400/5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                [{i + 1}] {source.short}
              </p>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-start gap-1.5 font-medium text-slate-100 underline decoration-slate-600 underline-offset-4 hover:text-teal-200 hover:decoration-teal-300"
              >
                <cite className="not-italic">{source.title}</cite>
                <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                <span className="sr-only">(öffnet in neuem Tab)</span>
              </a>
              <p className="mt-1 text-sm text-slate-400">
                {source.publisher}, {source.year}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-slate-400">{footer.note}</p>
        <p className="mt-6 text-sm text-slate-500">Klima verstehen · Ein Bildungsprojekt</p>
      </div>
    </footer>
  );
}
