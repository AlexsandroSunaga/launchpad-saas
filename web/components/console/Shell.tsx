import Link from "next/link";
import { BarChart3, FlaskConical, LayoutDashboard, Megaphone, PenLine, Shield, Users, Wallet } from "lucide-react";

const nav = [
  { href: "/console", label: "Command", icon: LayoutDashboard },
  { href: "/console/leads", label: "Waitlist & CRM", icon: Users },
  { href: "/console/campaigns", label: "Campaigns", icon: Megaphone },
  { href: "/console/content", label: "Content CMS", icon: PenLine },
  { href: "/console/experiments", label: "Experiments", icon: FlaskConical },
  { href: "/console/plans", label: "Pricing ops", icon: Wallet },
  { href: "/console/team", label: "GTM team", icon: BarChart3 },
  { href: "/console/audit", label: "Audit", icon: Shield },
];

export function ConsoleShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="hidden w-64 border-r border-slate-200 bg-white p-4 md:block">
        <p className="px-2 font-semibold text-violet-700">LaunchPad Ops</p>
        <p className="px-2 text-xs text-slate-500">GTM & product marketing</p>
        <nav className="mt-6 space-y-1 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="flex items-center gap-2 rounded-lg px-2 py-2 text-slate-600 hover:bg-violet-50 hover:text-violet-800">
              <n.icon className="h-4 w-4" /> {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="mt-8 block px-2 text-xs text-slate-400">← Marketing site</Link>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
