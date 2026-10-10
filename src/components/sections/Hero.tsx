import { ArrowDown } from 'lucide-react';
import { hero } from '../../data/content';
import { DeepDive } from '../ui/DeepDive';
import { Icon } from '../ui/Icon';
import { toneClasses } from '../ui/tones';

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-titel" className="relative overflow-hidden">
      {/* Dekorativer Wärmeverlauf */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(45,212,191,0.12),transparent_50%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 lg:px-8">
        <p className="mb-4 inline-flex rounded-full border border-amber-300/30 bg-amber-400/10 px-3 py-1 text-sm font-medium text-amber-200">
          {hero.eyebrow}
        </p>
        <h1 id="hero-titel" className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {hero.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">{hero.subline}</p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3" aria-label="Kennzahlen">
          {hero.figures.map((fig) => {
            const tone = toneClasses[fig.tone];
            return (
              <li key={fig.id} className={`rounded-2xl border ${tone.border} bg-slate-900/70 p-6 backdrop-blur`}>
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone.bg} ${tone.text}`}>
                  <Icon name={fig.icon} className="h-6 w-6" />
                </span>
                <p className="mt-5 flex items-baseline gap-1.5">
                  <span className={`text-5xl font-extrabold tracking-tight ${tone.text}`}>{fig.value}</span>
                  {fig.unit && <span className="text-xl font-semibold text-slate-300">{fig.unit}</span>}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{fig.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">{fig.context}</p>
              </li>
            );
          })}
        </ul>

        <DeepDive content={hero.deepDive} />

        <a
          href="#treibhauseffekt"
          className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white"
        >
          <ArrowDown className="h-4 w-4 motion-safe:animate-bounce" aria-hidden="true" />
          Weiter zum Treibhauseffekt
        </a>
      </div>
    </section>
  );
}
