export type Mode = 'compact' | 'detail';

/** Eintrag im zentralen Quellenverzeichnis (wird im Footer gelistet). */
export interface Source {
  id: string;
  /** Kurzlabel für Zitations-Chips, z. B. „IPCC AR6 WGI“. */
  short: string;
  title: string;
  publisher: string;
  year: string;
  url: string;
}

export interface DataTable {
  caption: string;
  headers: string[];
  rows: string[][];
  note?: string;
}

/** Inhalt eines aufklappbaren „Deep Dive“-Bereichs. */
export interface DeepDiveContent {
  title: string;
  paragraphs: string[];
  /** Optionale Stichpunkte, z. B. Mechanismen oder Kennwerte. */
  facts?: { label: string; value: string }[];
  table?: DataTable;
  /** IDs aus dem Quellenverzeichnis. */
  sources: string[];
}

/** Leicht verständliche Zusammenfassung für den Kompakt-Modus. */
export interface Summary {
  lead: string;
  bullets: string[];
}

export type IconName =
  | 'thermometer'
  | 'cloud'
  | 'waves'
  | 'zap'
  | 'factory'
  | 'wheat'
  | 'car'
  | 'building'
  | 'snowflake'
  | 'mountain'
  | 'trees'
  | 'wind'
  | 'landmark'
  | 'user';

export type Tone = 'amber' | 'copper' | 'teal' | 'emerald' | 'sky' | 'slate';

export interface KeyFigure {
  id: string;
  value: string;
  unit?: string;
  label: string;
  context: string;
  icon: IconName;
  tone: Tone;
}

export interface Sector {
  id: string;
  name: string;
  share: number;
  icon: IconName;
  summary: string;
  examples: string[];
  levers: string[];
  detail: string;
}

export interface TippingElement {
  id: string;
  name: string;
  shortName: string;
  icon: IconName;
  tone: Tone;
  /** Geschätzte Kippschwelle der globalen Erwärmung. */
  threshold: string;
  thresholdRange: string;
  timescale: string;
  impact: string;
  summary: string;
  mechanism: string;
}

/** Eine Wechselwirkung zwischen zwei Kippelementen (Kaskade). */
export interface CascadeLink {
  from: string;
  to: string;
  /** Kurzlabel am Pfeil der Kaskaden-Grafik. */
  label: string;
  effect: string;
}

export interface Myth {
  id: string;
  myth: string;
  verdict: string;
  fact: string;
  points: string[];
  sources: string[];
}

export interface Lever {
  title: string;
  description: string;
  impact: string;
}

export interface SolutionColumn {
  id: 'system' | 'individual';
  title: string;
  subtitle: string;
  icon: IconName;
  levers: Lever[];
}
