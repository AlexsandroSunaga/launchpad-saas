import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const token = req.headers.get("x-admin-token");
  if (token !== process.env.ADMIN_TOKEN) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  const leads = await prisma.waitlistLead.findMany({
    orderBy: { createdAt: "desc" },
    take: 500,
  });
  return Response.json({ leads, total: leads.length });
}
