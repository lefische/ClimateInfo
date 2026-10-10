import { useState } from 'react';
import { Globe2, Menu, X } from 'lucide-react';
import { navItems } from '../data/content';
import { ModeToggle } from './ModeToggle';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/85 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70">
      <nav aria-label="Hauptnavigation" className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2 font-bold text-white">
          <Globe2 className="h-6 w-6 text-teal-300" aria-hidden="true" />
          <span className="hidden sm:inline">Klima verstehen</span>
        </a>

        <ul className="ml-6 hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <button
            type="button"
            className="rounded-md p-2 text-slate-300 hover:bg-slate-800 hover:text-white lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            <span className="sr-only">{menuOpen ? 'Menü schließen' : 'Menü öffnen'}</span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul id="mobile-menu" className="border-t border-slate-800 px-4 py-3 lg:hidden">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2.5 text-slate-200 hover:bg-slate-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
