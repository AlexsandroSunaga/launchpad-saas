import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";

export async function GET() {
  if (!(await requireSession())) return Response.json({ error: "Unauthorized" }, { status: 401 });
  return Response.json(await prisma.contentBlock.findMany({ orderBy: { updatedAt: "desc" } }));
}
