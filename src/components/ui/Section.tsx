import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
}

/** Einheitlicher Sektionsrahmen mit nummerierter Überschrift. */
export function Section({ id, index, title, intro, children, className = '' }: SectionProps) {
  const headingId = `${id}-titel`;
  return (
    <section id={id} aria-labelledby={headingId} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="mb-10 max-w-3xl">
          <p className="mb-3 font-mono text-sm font-medium tracking-widest text-amber-300/90">{index}</p>
          <h2 id={headingId} className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lg leading-relaxed text-slate-300">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
