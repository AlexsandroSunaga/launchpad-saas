"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => { fetch("/api/console/plans").then((r) => r.json()).then(setRows); }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Pricing & packaging</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">{rows.map((r) => <div key={r.id} className="rounded-xl border bg-white p-5"><p className="font-mono text-violet-600">{r.code}</p><p className="text-lg font-medium">{r.name}</p><p className="mt-2">${r.priceMonthly}/mo · {r.seats} seats</p></div>)}</div>
    </div>
  );
}
