import { prisma } from "@/lib/prisma";

const WINDOW_MS = 60_000;
const MAX_PER_IP = 8;
const hits = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const row = hits.get(ip) ?? { count: 0, reset: now + WINDOW_MS };
  if (now > row.reset) {
    row.count = 0;
    row.reset = now + WINDOW_MS;
  }
  row.count += 1;
  hits.set(ip, row);
  return row.count <= MAX_PER_IP;
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") ?? "local";
  if (!rateLimit(ip)) {
    return Response.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json();
  const email = String(body.email ?? "").trim().toLowerCase();
  const source = String(body.source ?? "hero").slice(0, 64);
  if (!email || !email.includes("@")) {
    return Response.json({ error: "Valid email required" }, { status: 400 });
  }

  const existing = await prisma.waitlistLead.findUnique({ where: { email } });
  if (existing) {
    return Response.json({ ok: true, message: "Already on the list" });
  }

  await prisma.waitlistLead.create({ data: { email, source } });
  const position = await prisma.waitlistLead.count();
  return Response.json({ ok: true, position });
}
