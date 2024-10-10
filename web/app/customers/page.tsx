export default function CustomersPage() {
  const logos = ["Northwind SaaS", "Helio Labs", "Papertrail", "Vertex GTM", "Launch Guild"];
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Customers</h1>
      <p className="mt-3 text-slate-600">Representative logos for portfolio storytelling.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {logos.map((l) => (
          <div key={l} className="rounded-xl border border-violet-100 bg-white p-6 text-center font-medium text-slate-700 shadow-sm">{l}</div>
        ))}
      </div>
    </main>
  );
}
