# Klima verstehen

Eine responsive Single-Page-App, die den Klimawandel didaktisch aufbereitet: kompakt für Einsteiger, mit fundierten „Deep Dives“ für Interessierte.

**Stack:** Vite · React 18 · TypeScript · Tailwind CSS v4 · lucide-react

```bash
npm install
npm run dev       # Entwicklungsserver
npm run build     # Typecheck + Produktions-Build nach dist/
npm run preview   # Build lokal ansehen
```

## Didaktisches Muster (Progressive Disclosure)

- Globaler Umschalter **Kompakt / Im Detail** in der Navigation (`ModeContext`).
- Jede Sektion hat eine leicht verständliche Zusammenfassung (`SummaryBox`) und einen aufklappbaren Deep Dive (`DeepDive`) mit Erklärungen, Tabellen und Quellenverweisen.
- Im Modus „Im Detail“ sind alle Deep Dives ausgeklappt und zusätzliche Details (Spannbreiten, Mechanismen, Belege) sichtbar. Einzelne Deep Dives lassen sich weiterhin manuell umschalten.

## Struktur

```
src/
├── data/
│   ├── types.ts          # Typdefinitionen für alle Inhalte
│   └── content.ts        # Alle Texte, Zahlen, Tabellen und Quellen
├── context/ModeContext.tsx
├── components/
│   ├── Navbar.tsx, ModeToggle.tsx, Footer.tsx
│   ├── ui/               # Section, SummaryBox, DeepDive, DataTableView, SourceChips, Icon, tones
│   └── sections/         # Hero, GreenhouseEffect, Causes, TippingPoints, Myths, Solutions (+ Diagramme)
└── App.tsx
```

Inhalte werden ausschließlich in `src/data/content.ts` gepflegt. Quellen werden dort zentral definiert und per ID referenziert; der Footer listet sie mit Ankern (`#quelle-<id>`).

## Barrierefreiheit

Semantische Landmarks und Überschriftenhierarchie, Skip-Link, sichtbare Fokuszustände, Tabs nach WAI-ARIA-Pattern (Pfeiltasten, Home/End), `aria-expanded`/`aria-pressed` für Umschalter, Textalternativen für Grafiken, Live-Region für die Kaskaden-Simulation und Rücksicht auf `prefers-reduced-motion`.
