import { useId, useState } from 'react';
import { ChevronDown, Microscope } from 'lucide-react';
import { useMode } from '../../context/ModeContext';
import type { DeepDiveContent } from '../../data/types';
import { DataTableView } from './DataTableView';
import { SourceChips } from './SourceChips';

/**
 * Aufklappbarer Vertiefungsbereich. Folgt dem globalen Modus
 * („Im Detail“ = ausgeklappt), lässt sich aber einzeln umschalten.
 */
export function DeepDive({ content }: { content: DeepDiveContent }) {
  const { mode } = useMode();
  const [open, setOpen] = useState(mode === 'detail');
  const [syncedMode, setSyncedMode] = useState(mode);
  const panelId = useId();

  // Bei Wechsel des globalen Modus lokalen Zustand zurücksetzen.
  if (syncedMode !== mode) {
    setSyncedMode(mode);
    setOpen(mode === 'detail');
  }

  return (
    <div className="mt-8 rounded-2xl border border-slate-700/80 bg-slate-900/60">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center gap-4 rounded-2xl px-6 py-5 text-left transition-colors hover:bg-slate-800/50 sm:px-8"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 text-amber-300">
            <Microscope className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex-1">
            <span className="block text-xs font-semibold uppercase tracking-wider text-amber-300/90">Deep Dive</span>
            <span className="block text-lg font-semibold text-white">{content.title}</span>
          </span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div id={panelId} hidden={!open} className="border-t border-slate-700/80 px-6 pt-6 pb-8 sm:px-8">
        {open && (
          <div className="animate-[fadeIn_250ms_ease-out] motion-reduce:animate-none">
            <div className="max-w-3xl space-y-4">
              {content.paragraphs.map((p) => (
                <p key={p} className="leading-relaxed text-slate-300">
                  {p}
                </p>
              ))}
            </div>
            {content.facts && (
              <dl className="mt-6 grid gap-3 sm:grid-cols-2">
                {content.facts.map((f) => (
                  <div key={f.label} className="rounded-xl bg-slate-800/50 p-4">
                    <dt className="text-sm text-slate-400">{f.label}</dt>
                    <dd className="mt-1 font-semibold text-slate-100">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {content.table && <DataTableView table={content.table} />}
            <div className="mt-6">
              <SourceChips ids={content.sources} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
