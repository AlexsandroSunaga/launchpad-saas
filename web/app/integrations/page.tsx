export default function IntegrationsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Integrations</h1>
      <p className="mt-4 text-slate-600">Connect LaunchPad to your stack — demo list for hiring portfolios.</p>
      <ul className="mt-8 space-y-2 text-sm text-slate-700">
        {["HubSpot", "Segment", "Stripe Billing", "Slack alerts", "Google Analytics 4"].map((i) => (
          <li key={i} className="rounded-lg border border-violet-100 px-4 py-3">{i}</li>
        ))}
      </ul>
    </main>
  );
}
