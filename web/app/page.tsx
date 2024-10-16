import { WaitlistForm } from "@/components/WaitlistForm";
import { Check, Sparkles, Zap } from "lucide-react";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20">
      <section className="py-16 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-600">SaaS launch kit</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
          Turn your roadmap into a <span className="text-violet-600">revenue-ready</span> landing experience.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
          LaunchPad is a production-style marketing site: pricing tiers, social proof, FAQ, blog, changelog, and a
          real waitlist API — the same surfaces investors and customers expect before they ever see your app login.
        </p>
        <div className="mx-auto mt-10 max-w-xl">
          <WaitlistForm />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {[
          { icon: Zap, title: "Performance first", body: "Optimized layout, lazy media hooks, and semantic HTML for SEO." },
          { icon: Sparkles, title: "Motion with purpose", body: "Framer Motion ready — subtle depth without hurting LCP." },
          { icon: Check, title: "Conversion paths", body: "Primary CTA, secondary demo link, and trust metrics above the fold." },
        ].map((f) => (
          <div key={f.title} className="rounded-2xl border border-violet-100 bg-white p-6 shadow-sm">
            <f.icon className="h-8 w-8 text-violet-600" />
            <h2 className="mt-4 font-semibold">{f.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{f.body}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
