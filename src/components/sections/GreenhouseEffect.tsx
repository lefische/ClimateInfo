import { useState } from 'react';
import { greenhouse } from '../../data/content';
import { DeepDive } from '../ui/DeepDive';
import { Section } from '../ui/Section';
import { SummaryBox } from '../ui/SummaryBox';
import { toneClasses } from '../ui/tones';
import { GreenhouseDiagram } from './GreenhouseDiagram';

export function GreenhouseEffect() {
  const [enhanced, setEnhanced] = useState(false);

  return (
    <Section id="treibhauseffekt" index="02" title={greenhouse.title} intro={greenhouse.intro}>
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <SummaryBox summary={greenhouse.summary} />

        <figure className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4 sm:p-6">
          <div role="group" aria-label="Diagramm-Ansicht wählen" className="mb-4 flex flex-wrap gap-2">
            {greenhouse.comparison.map((item) => {
              const active = (item.id === 'anthropogenic') === enhanced;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setEnhanced(item.id === 'anthropogenic')}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? item.tone === 'amber'
                        ? 'border-amber-300 bg-amber-300 text-slate-950'
                        : 'border-teal-300 bg-teal-300 text-slate-950'
                      : 'border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white'
                  }`}
                >
                  {item.id === 'natural' ? 'Natürlich' : 'Mit menschlichem Zusatz'}
                </button>
              );
            })}
          </div>
          <GreenhouseDiagram enhanced={enhanced} />
          <figcaption className="mt-4 text-sm text-slate-400">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-0.5 w-5 bg-amber-300" aria-hidden="true" />
                Sonnenlicht
              </li>
              <li className="flex items-center gap-2">
                <span className="h-0.5 w-5 bg-orange-400" aria-hidden="true" />
                Wärmestrahlung (entweicht oder wird zurückgehalten)
              </li>
            </ul>
            <p className="mt-2">Schematische Darstellung, nicht maßstabsgetreu.</p>
          </figcaption>
        </figure>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {greenhouse.comparison.map((item) => {
          const tone = toneClasses[item.tone];
          return (
            <article key={item.id} className={`rounded-2xl border ${tone.border} ${tone.bg} p-6`}>
              <h3 className={`text-lg font-semibold ${tone.text}`}>{item.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-300">{item.text}</p>
            </article>
          );
        })}
      </div>

      <DeepDive content={greenhouse.deepDive} />
    </Section>
  );
}
