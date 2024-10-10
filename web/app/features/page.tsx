import { Check } from "lucide-react";

export default function FeaturesPage() {
  const items = [
    "Marketing site with pricing, blog, changelog",
    "Waitlist API with Prisma persistence",
    "GTM console: campaigns, content, experiments",
    "Plan tiers, team roster, audit trail",
    "Lead inbox and conversion metrics",
  ];
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Product features</h1>
      <ul className="mt-8 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-2 text-slate-600"><Check className="h-5 w-5 text-violet-600" />{i}</li>
        ))}
      </ul>
    </main>
  );
}
