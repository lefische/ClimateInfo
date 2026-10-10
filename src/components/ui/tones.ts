import type { Tone } from '../../data/types';

/**
 * Statische Klassen pro Farbton, damit Tailwind sie beim Build findet.
 * amber/copper = Erwärmung, teal/emerald = Lösungen, sky = Wasser & Eis.
 */
export const toneClasses: Record<Tone, { text: string; bg: string; border: string; ring: string }> = {
  amber: { text: 'text-amber-300', bg: 'bg-amber-400/10', border: 'border-amber-400/30', ring: 'ring-amber-400/60' },
  copper: { text: 'text-orange-300', bg: 'bg-orange-500/10', border: 'border-orange-400/30', ring: 'ring-orange-400/60' },
  teal: { text: 'text-teal-300', bg: 'bg-teal-400/10', border: 'border-teal-400/30', ring: 'ring-teal-400/60' },
  emerald: { text: 'text-emerald-300', bg: 'bg-emerald-400/10', border: 'border-emerald-400/30', ring: 'ring-emerald-400/60' },
  sky: { text: 'text-sky-300', bg: 'bg-sky-400/10', border: 'border-sky-400/30', ring: 'ring-sky-400/60' },
  slate: { text: 'text-slate-200', bg: 'bg-slate-700/30', border: 'border-slate-600', ring: 'ring-slate-400/60' },
};
