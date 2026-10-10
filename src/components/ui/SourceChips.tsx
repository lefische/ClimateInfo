import { BookOpen } from 'lucide-react';
import { sources } from '../../data/content';

const byId = new Map(sources.map((s) => [s.id, s]));

/** Verweise auf Einträge im Quellenverzeichnis im Footer. */
export function SourceChips({ ids }: { ids: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <span className="flex items-center gap-1.5 text-slate-400">
        <BookOpen className="h-4 w-4" aria-hidden="true" />
        Quellen:
      </span>
      <ul className="flex flex-wrap gap-2">
        {ids.map((id) => {
          const source = byId.get(id);
          if (!source) return null;
          return (
            <li key={id}>
              <a
                href={`#quelle-${id}`}
                className="inline-block rounded-full border border-slate-600 px-3 py-1 text-slate-300 transition-colors hover:border-amber-300/60 hover:text-amber-200"
              >
                {source.short}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
