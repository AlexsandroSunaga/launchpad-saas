import Link from "next/link";
import "./globals.css";

export const metadata = { title: "LaunchPad — Ship your SaaS story" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
          <span className="font-semibold text-violet-700">LaunchPad</span>
          <nav className="flex gap-6 text-sm text-slate-600">
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/changelog">Changelog</Link>
          </nav>
        </header>
        {children}
        <footer className="mt-20 border-t border-violet-100 py-10 text-center text-sm text-slate-500">
          <Link href="/legal/privacy" className="hover:text-violet-700">Privacy</Link>
          {" · "}
          <Link href="/legal/terms" className="hover:text-violet-700">Terms</Link>
          {" · "}
          <Link href="/console/login" className="hover:text-violet-700">GTM console</Link>
          <p className="mt-2">© {new Date().getFullYear()} LaunchPad</p>
        </footer>
      </body>
    </html>
  );
}
