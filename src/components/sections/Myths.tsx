import { useMode } from '../../context/ModeContext';
import { myths } from '../../data/content';
import { Section } from '../ui/Section';
import { MythCard } from './MythCard';

export function Myths() {
  const { mode } = useMode();
  return (
    <Section id="mythen" index="05" title={myths.title} intro={myths.intro} className="bg-slate-900/40">
      {mode === 'compact' && (
        <p className="-mt-4 mb-8 text-sm text-slate-400">
          Tipp: Im Modus „Im Detail“ zeigen die Rückseiten zusätzliche Belege und Quellen.
        </p>
      )}
      <div className="grid gap-6 md:grid-cols-3">
        {myths.items.map((myth, i) => (
          <MythCard key={myth.id} myth={myth} index={i} />
        ))}
      </div>
    </Section>
  );
}
