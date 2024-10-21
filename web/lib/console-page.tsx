"use client";

import { useEffect, useState } from "react";

export function ConsoleListPage({ title, endpoint, columns }: { title: string; endpoint: string; columns: string[] }) {
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => {
    fetch(endpoint).then((r) => r.json()).then(setRows);
  }, [endpoint]);
  return (
    <div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <table className="mt-6 w-full rounded-xl border bg-white text-sm">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((c) => (
              <th key={c} className="px-4 py-2 text-left">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(rows) &&
            rows.map((r, i) => (
              <tr key={r.id ?? i} className="border-t">
                {columns.map((c) => (
                  <td key={c} className="px-4 py-2">{String(r[c.toLowerCase()] ?? r[c] ?? "")}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
