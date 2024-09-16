"use client";

import { useState } from "react";

type Lead = { id: number; email: string; source: string; createdAt: string };

export default function AdminLeadsPage() {
  const [token, setToken] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState("");

  async function load() {
    setError("");
    const res = await fetch("/api/admin/leads", { headers: { "x-admin-token": token } });
    if (!res.ok) {
      setError("Invalid admin token (set ADMIN_TOKEN in .env)");
      return;
    }
    const data = await res.json();
    setLeads(data.leads);
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold">Waitlist admin</h1>
      <p className="mt-2 text-sm text-slate-600">Product ops view — Prisma-backed leads from marketing site.</p>
      <div className="mt-6 flex gap-2">
        <input
          type="password"
          placeholder="Admin token"
          className="flex-1 rounded-lg border px-3 py-2"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button onClick={load} className="rounded-lg bg-violet-600 px-4 py-2 text-white">Load</button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
      <ul className="mt-8 space-y-2 text-sm">
        {leads.map((l) => (
          <li key={l.id} className="flex justify-between border-b py-2">
            <span>{l.email}</span>
            <span className="text-slate-500">{l.source}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
