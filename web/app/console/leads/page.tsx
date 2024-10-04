"use client";

import { useEffect, useState } from "react";

export default function LeadsPage() {
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => {
    fetch("/api/console/leads").then((r) => r.json()).then((d) => setRows(d.leads ?? []));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Waitlist & inbound</h1>
      <table className="mt-6 w-full rounded-xl border bg-white text-sm">
        <thead className="bg-slate-50"><tr><th className="p-3 text-left">Email</th><th>Source</th><th>Campaign</th></tr></thead>
        <tbody>
          {rows.map((r: any) => (
            <tr key={r.id} className="border-t"><td className="p-3">{r.email}</td><td className="text-center">{r.source}</td><td className="text-center">{r.campaign}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
