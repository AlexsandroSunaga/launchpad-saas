"use client";

import { useEffect, useState } from "react";

export default function Command() {
  const [d, setD] = useState<any>(null);
  useEffect(() => {
    fetch("/api/console/overview").then((r) => r.json()).then(setD);
  }, []);
  if (!d?.waitlist && d?.error) return <p className="text-red-600">Sign in at /console/login</p>;
  const cards = d
    ? [
        ["Waitlist", d.waitlist],
        ["Campaigns", d.campaigns],
        ["Experiments live", d.experiments_running],
        ["Plan tiers", d.plan_tiers],
        ["GTM team", d.team_members],
        ["Budget USD", d.total_budget_usd],
        ["Conversions", d.total_conversions],
      ]
    : [];
  return (
    <div>
      <h1 className="text-2xl font-semibold">Revenue marketing command</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(([l, v]) => (
          <div key={l} className="rounded-xl border bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-500">{l}</p>
            <p className="text-2xl font-semibold">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
