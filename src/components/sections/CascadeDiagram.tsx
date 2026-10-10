import { useId } from 'react';
import type { CascadeLink, TippingElement } from '../../data/types';

/** Positionen der Knoten im Ring (im Uhrzeigersinn entlang der Kaskade). */
const positions: Record<string, { x: number; y: number }> = {
  greenland: { x: 140, y: 70 },
  amoc: { x: 460, y: 70 },
  amazon: { x: 460, y: 290 },
  permafrost: { x: 140, y: 290 },
};

const NODE_W = 170;
const NODE_H = 56;

/** Stufe 0 = gekippt, 1–3 = Risiko erhöht (abnehmend), undefined = unberührt. */
const levelStyles = [
  { fill: '#f59e0b', fillOpacity: 0.35, stroke: '#fcd34d', text: '#fff7ed', status: 'gekippt' },
  { fill: '#f97316', fillOpacity: 0.22, stroke: '#fb923c', text: '#ffedd5', status: 'Risiko stark erhöht' },
  { fill: '#f97316', fillOpacity: 0.12, stroke: '#fdba74', text: '#ffedd5', status: 'Risiko erhöht' },
  { fill: '#f97316', fillOpacity: 0.06, stroke: '#fed7aa', text: '#fff7ed', status: 'Risiko leicht erhöht' },
];

function edgePoints(from: { x: number; y: number }, to: { x: number; y: number }) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const pad = 10;
  if (Math.abs(dx) > Math.abs(dy)) {
    const s = Math.sign(dx);
    return { x1: from.x + s * (NODE_W / 2 + pad), y1: from.y, x2: to.x - s * (NODE_W / 2 + pad), y2: to.y };
  }
  const s = Math.sign(dy);
  return { x1: from.x, y1: from.y + s * (NODE_H / 2 + pad), x2: to.x, y2: to.y - s * (NODE_H / 2 + pad) };
}

interface CascadeDiagramProps {
  elements: TippingElement[];
  links: CascadeLink[];
  levels: Map<string, number>;
}

export function CascadeDiagram({ elements, links, levels }: CascadeDiagramProps) {
  const uid = useId().replace(/:/g, '');
  const idle = levels.size === 0;

  return (
    <svg viewBox="0 0 600 360" className="h-auto w-full" aria-hidden="true" focusable="false">
      <defs>
        <marker id={`arrow-dim-${uid}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#64748b" />
        </marker>
        <marker id={`arrow-hot-${uid}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#fb923c" />
        </marker>
      </defs>

      {/* Zentrum: globale Erwärmung als gemeinsamer Treiber */}
      <circle cx="300" cy="180" r="62" fill="#f59e0b" fillOpacity={idle ? 0.06 : 0.14} stroke="#f59e0b" strokeOpacity="0.4" strokeDasharray="4 6" />
      <text x="300" y="175" textAnchor="middle" fontSize="14" fontWeight="600" fill="#fde68a">
        Globale
      </text>
      <text x="300" y="194" textAnchor="middle" fontSize="14" fontWeight="600" fill="#fde68a">
        Erwärmung
      </text>

      {links.map((link) => {
        const from = positions[link.from];
        const to = positions[link.to];
        if (!from || !to) return null;
        const { x1, y1, x2, y2 } = edgePoints(from, to);
        const fromLevel = levels.get(link.from);
        const hot = fromLevel !== undefined && fromLevel < 3 && levels.has(link.to);
        const horizontal = y1 === y2;
        const lx = (x1 + x2) / 2 + (horizontal ? 0 : x1 > 300 ? 12 : -12);
        const ly = (y1 + y2) / 2 + (horizontal ? (y1 < 180 ? -12 : 22) : 4);
        return (
          <g key={`${link.from}-${link.to}`}>
            <line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={hot ? '#fb923c' : '#64748b'}
              strokeWidth={hot ? 3.5 : 2}
              strokeDasharray={hot ? undefined : '6 6'}
              markerEnd={`url(#arrow-${hot ? 'hot' : 'dim'}-${uid})`}
              style={{ transition: 'stroke 300ms ease, stroke-width 300ms ease' }}
            />
            <text
              x={lx}
              y={ly}
              fontSize="12"
              textAnchor={horizontal ? 'middle' : x1 > 300 ? 'start' : 'end'}
              fill={hot ? '#fed7aa' : '#94a3b8'}
            >
              {link.label}
            </text>
          </g>
        );
      })}

      {elements.map((el) => {
        const pos = positions[el.id];
        if (!pos) return null;
        const level = levels.get(el.id);
        const style = level !== undefined ? levelStyles[level] : undefined;
        return (
          <g key={el.id} style={{ transition: 'all 300ms ease' }}>
            <rect
              x={pos.x - NODE_W / 2}
              y={pos.y - NODE_H / 2}
              width={NODE_W}
              height={NODE_H}
              rx="14"
              fill={style?.fill ?? '#0f172a'}
              fillOpacity={style?.fillOpacity ?? 1}
              stroke={style?.stroke ?? '#475569'}
              strokeWidth={level === 0 ? 3 : 2}
            />
            <text x={pos.x} y={pos.y - (style ? 4 : -5)} textAnchor="middle" fontSize="15" fontWeight="700" fill={style?.text ?? '#e2e8f0'}>
              {el.shortName}
            </text>
            {style && (
              <text x={pos.x} y={pos.y + 15} textAnchor="middle" fontSize="11" fill={style.text} opacity="0.9">
                {style.status}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
