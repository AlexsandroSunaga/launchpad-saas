"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setMsg(data.position ? `You are #${data.position} on the waitlist.` : data.message ?? data.error);
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        placeholder="you@company.com"
        className="flex-1 rounded-full border border-violet-200 px-5 py-3"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="rounded-full bg-violet-600 px-6 py-3 font-medium text-white hover:bg-violet-500">
        Join waitlist
      </button>
      {msg && <p className="text-sm text-violet-800 sm:col-span-2">{msg}</p>}
    </form>
  );
}
