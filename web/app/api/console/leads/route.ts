import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";

export async function GET() {
  if (!(await requireSession())) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const leads = await prisma.waitlistLead.findMany({ orderBy: { createdAt: "desc" } });
  return Response.json({ leads });
}
