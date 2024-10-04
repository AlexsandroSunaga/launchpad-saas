import { ConsoleShell } from "@/components/console/Shell";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <ConsoleShell>{children}</ConsoleShell>;
}
