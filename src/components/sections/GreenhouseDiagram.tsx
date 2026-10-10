import { useId } from 'react';

/**
 * Schematische Darstellung: Sonnenlicht trifft auf den Boden, Wärmestrahlung
 * wird von der Atmosphäre teilweise zurückgehalten. `enhanced` zeigt den
 * verstärkten (menschengemachten) Effekt mit dichterer Treibhausgasschicht.
 */
export function GreenhouseDiagram({ enhanced }: { enhanced: boolean }) {
  const uid = useId().replace(/:/g, '');
  const sunArrow = `sun-${uid}`;
  const heatArrow = `heat-${uid}`;
  const layerHeight = enhanced ? 64 : 36;
  const layerY = 70;
  const layerBottom = layerY + layerHeight;

  return (
    <svg
      viewBox="0 0 400 270"
      role="img"
      aria-labelledby={`gh-title-${uid}`}
      className="h-auto w-full"
    >
      <title id={`gh-title-${uid}`}>
        {enhanced
          ? 'Verstärkter Treibhauseffekt: Eine dichtere Treibhausgasschicht hält mehr Wärmestrahlung zurück, die Oberfläche erwärmt sich.'
          : 'Natürlicher Treibhauseffekt: Sonnenlicht erwärmt den Boden, ein Teil der Wärmestrahlung wird von der Atmosphäre zurückgehalten.'}
      </title>
      <defs>
        <marker id={sunArrow} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#fcd34d" />
        </marker>
        <marker id={heatArrow} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#fb923c" />
        </marker>
        <linearGradient id={`ground-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#115e59" />
          <stop offset="1" stopColor="#134e4a" />
        </linearGradient>
      </defs>

      {/* Weltraum */}
      <rect x="0" y="0" width="400" height="270" rx="16" fill="#0b1220" />

      {/* Treibhausgasschicht */}
      <rect
        x="0"
        y={layerY}
        width="400"
        height={layerHeight}
        fill={enhanced ? '#f59e0b' : '#2dd4bf'}
        opacity={enhanced ? 0.22 : 0.16}
        style={{ transition: 'all 400ms ease' }}
      />
      <text x="390" y={layerY + 16} textAnchor="end" fontSize="11" fill="#cbd5e1">
        Treibhausgase
      </text>

      {/* Sonne */}
      <circle cx="48" cy="36" r="20" fill="#fbbf24" />
      <circle cx="48" cy="36" r="28" fill="#fbbf24" opacity="0.2" />

      {/* Einfallendes Sonnenlicht */}
      <line x1="70" y1="52" x2="140" y2="222" stroke="#fcd34d" strokeWidth="3" markerEnd={`url(#${sunArrow})`} />
      <line x1="62" y1="62" x2="104" y2="222" stroke="#fcd34d" strokeWidth="3" markerEnd={`url(#${sunArrow})`} />

      {/* Wärmestrahlung: entweicht ins All */}
      <path
        d="M230 226 L240 200 L226 180 L240 160 L226 140 L240 120 L226 100 L240 80 L232 18"
        fill="none"
        stroke="#fb923c"
        strokeWidth={enhanced ? 1.5 : 3}
        strokeDasharray={enhanced ? '4 4' : undefined}
        markerEnd={`url(#${heatArrow})`}
      />
      <text x="248" y="30" fontSize="11" fill="#fed7aa">
        {enhanced ? 'weniger Wärme entweicht' : 'Wärme entweicht'}
      </text>

      {/* Wärmestrahlung: wird zurückgestrahlt */}
      <path
        d={`M290 226 L300 ${layerBottom + 10} L310 ${layerY + layerHeight / 2} L322 ${layerBottom + 10} L334 222`}
        fill="none"
        stroke="#fb923c"
        strokeWidth="3"
        markerEnd={`url(#${heatArrow})`}
      />
      {enhanced && (
        <path
          d={`M340 226 L350 ${layerBottom + 6} L360 ${layerY + layerHeight / 2 - 8} L372 ${layerBottom + 6} L382 222`}
          fill="none"
          stroke="#f97316"
          strokeWidth="3"
          markerEnd={`url(#${heatArrow})`}
        />
      )}

      {/* Boden */}
      <rect x="0" y="226" width="400" height="44" fill={`url(#ground-${uid})`} />
      <rect x="0" y="226" width="400" height="44" rx="0" fill={enhanced ? '#f59e0b' : 'transparent'} opacity="0.18" />
      <text x="16" y="254" fontSize="14" fontWeight="700" fill="#f8fafc">
        {enhanced ? 'Erde: wird wärmer ↑' : 'Erde: ≈ +15 °C'}
      </text>
    </svg>
  );
}
