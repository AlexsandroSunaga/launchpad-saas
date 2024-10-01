"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [rows, setRows] = useState<any[]>([]);
  useEffect(() => { fetch("/api/console/audit").then((r) => r.json()).then(setRows); }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Audit trail</h1>
      <pre className="mt-6 max-h-[70vh] overflow-auto rounded-xl border bg-white p-4 text-xs">{JSON.stringify(rows, null, 2)}</pre>
    </div>
  );
}
