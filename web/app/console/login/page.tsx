"use client";

import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("ops@launchpad.demo");
  const [password, setPassword] = useState("LaunchPad2026!");
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
    if (!res.ok) {
      setErr("Invalid login — run npm run db:seed");
      return;
    }
    window.location.href = "/console";
  }

  return (
    <form onSubmit={submit} className="mx-auto mt-24 max-w-md rounded-2xl border bg-white p-8 shadow-sm">
      <h1 className="text-xl font-semibold">GTM console</h1>
      <p className="text-sm text-slate-500">ops@launchpad.demo / LaunchPad2026!</p>
      <input className="mt-4 w-full rounded-lg border px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="mt-2 w-full rounded-lg border px-3 py-2" value={password} onChange={(e) => setPassword(e.target.value)} />
      {err && <p className="mt-2 text-sm text-red-600">{err}</p>}
      <button className="mt-4 w-full rounded-full bg-violet-600 py-2 text-white">Sign in</button>
    </form>
  );
}
