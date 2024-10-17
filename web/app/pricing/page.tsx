const tiers = [
  { name: "Starter", price: "$29", features: ["Waitlist API", "Blog MDX-ready", "Email capture"] },
  { name: "Growth", price: "$79", features: ["A/B hero variants", "Analytics hooks", "Priority support"] },
  { name: "Scale", price: "Custom", features: ["SSO docs", "Multi-region", "SLA"] },
];

export default function Pricing() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-semibold text-center">Pricing</h1>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-2xl border border-violet-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="mt-2 text-3xl font-bold text-violet-600">{t.price}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-600">
              {t.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
