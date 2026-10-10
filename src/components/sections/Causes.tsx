import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowRight, Info } from 'lucide-react';
import { useMode } from '../../context/ModeContext';
import { causes } from '../../data/content';
import { DeepDive } from '../ui/DeepDive';
import { Icon } from '../ui/Icon';
import { Section } from '../ui/Section';
import { SummaryBox } from '../ui/SummaryBox';

/** Warme Abstufungen für die Sektoren (vom größten zum kleinsten). */
const segmentColors = ['bg-amber-400', 'bg-orange-400', 'bg-amber-600', 'bg-orange-600', 'bg-amber-200'];

export function Causes() {
  const { mode } = useMode();
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { sectors } = causes;
  const active = sectors[activeIndex];

  // Tastaturbedienung nach WAI-ARIA Tabs-Pattern
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const last = sectors.length - 1;
    const keyMap: Record<string, number> = {
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowDown: activeIndex === last ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      ArrowUp: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    };
    const next = keyMap[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <Section id="ursachen" index="03" title={causes.title} intro={causes.intro} className="bg-slate-900/40">
      <SummaryBox summary={causes.summary} />

      {/* Anteile als gestapelter Balken */}
      <div className="mt-10" aria-hidden="true">
        <div className="flex h-4 w-full overflow-hidden rounded-full bg-slate-800">
          {sectors.map((s, i) => (
            <button
              key={s.id}
              type="button"
              tabIndex={-1}
              onClick={() => setActiveIndex(i)}
              style={{ width: `${s.share}%` }}
              className={`${segmentColors[i]} h-full transition-opacity ${i === activeIndex ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
            />
          ))}
        </div>
        <p className="mt-2 text-sm text-slate-400">Anteil an den globalen Treibhausgasemissionen 2019</p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[19rem_1fr]">
        <div
          role="tablist"
          aria-label="Emissions-Sektoren"
          aria-orientation="vertical"
          className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {sectors.map((s, i) => {
            const selected = i === activeIndex;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`panel-${s.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveIndex(i)}
                onKeyDown={onKeyDown}
                className={`flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
                  selected
                    ? 'border-amber-300/60 bg-amber-400/10 text-white'
                    : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-white'
                }`}
              >
                <span className={`h-3 w-3 shrink-0 rounded-full ${segmentColors[i]}`} aria-hidden="true" />
                <Icon name={s.icon} className="h-5 w-5 shrink-0" />
                <span className="font-medium whitespace-nowrap">{s.name}</span>
                <span className="ml-auto pl-2 font-mono text-sm whitespace-nowrap text-slate-400">{s.share} %</span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          tabIndex={0}
          className="rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6 sm:p-8"
        >
          <div key={active.id} className="animate-[fadeIn_250ms_ease-out] motion-reduce:animate-none">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                <Icon name={active.icon} className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-white">{active.name}</h3>
                <p className="text-slate-400">
                  <span className="text-3xl font-extrabold text-amber-300">{active.share} %</span> der globalen Emissionen
                </p>
              </div>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-slate-200">{active.summary}</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-300/90">Typische Quellen</h4>
                <ul className="mt-3 space-y-2">
                  {active.examples.map((ex) => (
                    <li key={ex} className="flex gap-2 leading-relaxed text-slate-300">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" aria-hidden="true" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Hebel</h4>
                <ul className="mt-3 space-y-2">
                  {active.levers.map((lever) => (
                    <li key={lever} className="flex gap-2 leading-relaxed text-slate-300">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                      {lever}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {mode === 'detail' && (
              <p className="mt-6 flex gap-3 rounded-xl bg-slate-800/60 p-4 leading-relaxed text-slate-300">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-slate-100">Gut zu wissen: </strong>
                  {active.detail}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

      <DeepDive content={causes.deepDive} />
    </Section>
  );
}
