import { BookOpenText, Layers } from 'lucide-react';
import { useMode } from '../context/ModeContext';
import type { Mode } from '../data/types';

const options: { value: Mode; label: string; icon: typeof Layers; hint: string }[] = [
  { value: 'compact', label: 'Kompakt', icon: Layers, hint: 'Nur Zusammenfassungen anzeigen' },
  { value: 'detail', label: 'Im Detail', icon: BookOpenText, hint: 'Alle Deep Dives ausklappen' },
];

/** Globaler Umschalter zwischen Kompakt- und Detail-Ansicht. */
export function ModeToggle() {
  const { mode, setMode } = useMode();
  return (
    <div role="group" aria-label="Darstellungsmodus" className="inline-flex rounded-full border border-slate-700 bg-slate-900 p-1">
      {options.map(({ value, label, icon: OptionIcon, hint }) => {
        const active = mode === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={active}
            title={hint}
            onClick={() => setMode(value)}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors sm:px-4 ${
              active ? 'bg-teal-400 text-slate-950 shadow' : 'text-slate-300 hover:text-white'
            }`}
          >
            <OptionIcon className="h-4 w-4" aria-hidden="true" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
