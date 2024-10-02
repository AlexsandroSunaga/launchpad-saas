"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => { fetch("/api/console/content").then((r) => r.json()).then(setRows); }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Content blocks (CMS)</h1>
      <ul className="mt-6 space-y-2">{rows.map((r) => <li key={r.id} className="rounded-lg border bg-white p-4"><span className="font-mono text-violet-600">{r.slug}</span> — {r.title} <span className="text-slate-500">({r.status})</span></li>)}</ul>
    </div>
  );
}
