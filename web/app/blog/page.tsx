const posts = [
  { title: "Designing a waitlist that converts", date: "2026-02-01" },
  { title: "Changelog discipline for early SaaS", date: "2026-01-15" },
];

export default function Blog() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Blog</h1>
      <ul className="mt-8 space-y-6">
        {posts.map((p) => (
          <li key={p.title} className="border-b border-violet-100 pb-4">
            <p className="text-xs text-slate-500">{p.date}</p>
            <p className="text-lg font-medium">{p.title}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
