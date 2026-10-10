import { useMemo, useState } from 'react';
import { Clock, RotateCcw, Thermometer, TriangleAlert } from 'lucide-react';
import { useMode } from '../../context/ModeContext';
import { tipping } from '../../data/content';
import { DeepDive } from '../ui/DeepDive';
import { Icon } from '../ui/Icon';
import { Section } from '../ui/Section';
import { SummaryBox } from '../ui/SummaryBox';
import { toneClasses } from '../ui/tones';
import { CascadeDiagram } from './CascadeDiagram';

const byId = new Map(tipping.elements.map((el) => [el.id, el]));

/** Folgt den Kaskaden-Verbindungen ab dem Auslöser und vergibt Stufen. */
function computeChain(triggerId: string | null) {
  const levels = new Map<string, number>();
  const steps: { from: string; to: string; effect: string }[] = [];
  if (!triggerId) return { levels, steps };
  levels.set(triggerId, 0);
  let current = triggerId;
  for (let level = 1; level < tipping.elements.length; level++) {
    const link = tipping.cascade.find((l) => l.from === current);
    if (!link || levels.has(link.to)) break;
    levels.set(link.to, level);
    steps.push(link);
    current = link.to;
  }
  return { levels, steps };
}

export function TippingPoints() {
  const { mode } = useMode();
  const [trigger, setTrigger] = useState<string | null>(null);
  const { levels, steps } = useMemo(() => computeChain(trigger), [trigger]);

  return (
    <Section id="kippelemente" index="04" title={tipping.title} intro={tipping.intro}>
      <SummaryBox summary={tipping.summary} />

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tipping.elements.map((el) => {
          const tone = toneClasses[el.tone];
          return (
            <li key={el.id} className={`flex flex-col rounded-2xl border ${tone.border} bg-slate-900/70 p-6`}>
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${tone.bg} ${tone.text}`}>
                <Icon name={el.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold leading-snug text-white">{el.name}</h3>
              <p className="mt-2 leading-relaxed text-slate-300">{el.summary}</p>
              <dl className="mt-auto space-y-2 pt-5 text-sm">
                <div className="flex items-start gap-2">
                  <Thermometer className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                  <dt className="sr-only">Kippschwelle</dt>
                  <dd className="text-slate-200">
                    Schwelle {el.threshold}
                    {mode === 'detail' && <span className="block text-slate-400">Spanne: {el.thresholdRange}</span>}
                  </dd>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
                  <dt className="sr-only">Zeitskala</dt>
                  <dd className="text-slate-300">{el.timescale}</dd>
                </div>
                <div className="flex items-start gap-2">
                  <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" aria-hidden="true" />
                  <dt className="sr-only">Folge</dt>
                  <dd className="text-slate-300">{el.impact}</dd>
                </div>
              </dl>
              {mode === 'detail' && (
                <p className="mt-4 border-t border-slate-700/70 pt-4 text-sm leading-relaxed text-slate-400">
                  <span className="font-semibold text-slate-300">Mechanismus: </span>
                  {el.mechanism}
                </p>
              )}
            </li>
          );
        })}
      </ul>

      {/* Kaskaden-Simulation */}
      <div className="mt-12 rounded-2xl border border-orange-400/25 bg-gradient-to-br from-orange-500/10 to-slate-900/60 p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-white">Der Dominoeffekt</h3>
        <p className="mt-2 max-w-3xl leading-relaxed text-slate-300">
          Kippt ein Element, steigen die Risiken für die nächsten. Wähle ein Kippelement und sieh, wie sich die
          Kaskade fortpflanzen kann.
        </p>

        <div role="group" aria-label="Kippelement auslösen" className="mt-5 flex flex-wrap gap-2">
          {tipping.elements.map((el) => (
            <button
              key={el.id}
              type="button"
              aria-pressed={trigger === el.id}
              onClick={() => setTrigger(el.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                trigger === el.id
                  ? 'border-amber-300 bg-amber-300 text-slate-950'
                  : 'border-slate-600 text-slate-200 hover:border-amber-300/60 hover:text-white'
              }`}
            >
              {el.shortName} kippt
            </button>
          ))}
          {trigger && (
            <button
              type="button"
              onClick={() => setTrigger(null)}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-slate-300 hover:text-white"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Zurücksetzen
            </button>
          )}
        </div>

        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[3fr_2fr]">
          <CascadeDiagram elements={tipping.elements} links={tipping.cascade} levels={levels} />

          <div aria-live="polite">
            {trigger ? (
              <ol className="space-y-4">
                <li className="rounded-xl border border-amber-300/40 bg-amber-400/10 p-4">
                  <p className="font-semibold text-amber-200">{byId.get(trigger)?.name} kippt.</p>
                </li>
                {steps.map((step, i) => (
                  <li
                    key={`${step.from}-${step.to}`}
                    className="rounded-xl border border-slate-700 bg-slate-900/70 p-4 motion-safe:animate-[fadeIn_400ms_ease-out_both]"
                    style={{ animationDelay: `${(i + 1) * 150}ms` }}
                  >
                    <p className="font-semibold text-orange-200">
                      {i + 1}. → {byId.get(step.to)?.shortName}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{step.effect}</p>
                  </li>
                ))}
              </ol>
            ) : (
              <p className="rounded-xl border border-dashed border-slate-600 p-6 leading-relaxed text-slate-400">
                Noch nichts gekippt. Wähle oben ein Kippelement aus, um die Kaskade zu starten.
              </p>
            )}
          </div>
        </div>
      </div>

      <DeepDive content={tipping.deepDive} />
    </Section>
  );
}
