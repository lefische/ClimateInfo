import type { DataTable } from '../../data/types';

/** Zugängliche, horizontal scrollbare Datentabelle. */
export function DataTableView({ table }: { table: DataTable }) {
  return (
    <figure className="mt-6">
      <div
        className="overflow-x-auto rounded-xl border border-slate-700"
        tabIndex={0}
        role="region"
        aria-label={`Tabelle: ${table.caption}`}
      >
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <caption className="border-b border-slate-700 bg-slate-800/60 px-4 py-3 text-left font-semibold text-slate-100">
            {table.caption}
          </caption>
          <thead>
            <tr className="bg-slate-800/40">
              {table.headers.map((header) => (
                <th key={header} scope="col" className="px-4 py-3 font-semibold text-slate-200">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row[0]} className="border-t border-slate-800 odd:bg-slate-900/40">
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" className="px-4 py-3 font-medium text-slate-100">
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className="px-4 py-3 leading-relaxed text-slate-300">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && <figcaption className="mt-3 text-sm leading-relaxed text-slate-400">{table.note}</figcaption>}
    </figure>
  );
}
