"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => { fetch("/api/console/campaigns").then((r) => r.json()).then(setRows); }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Campaign portfolio</h1>
      <table className="mt-6 w-full rounded-xl border bg-white text-sm">
        <thead className="bg-slate-50"><tr><th className="p-3">Name</th><th>Channel</th><th>Budget</th><th>Conv.</th><th>Status</th></tr></thead>
        <tbody>{rows.map((r) => <tr key={r.id} className="border-t"><td className="p-3">{r.name}</td><td>{r.channel}</td><td>${r.budgetUsd}</td><td>{r.conversions}</td><td>{r.status}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
