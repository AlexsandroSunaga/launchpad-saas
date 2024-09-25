import { prisma } from "@/lib/prisma";
import { requireSession } from "@/lib/session";

export async function GET() {
  if (!(await requireSession())) return Response.json({ error: "Unauthorized" }, { status: 401 });
  const [leads, campaigns, experiments, plans, team] = await Promise.all([
    prisma.waitlistLead.count(),
    prisma.campaign.count(),
    prisma.experiment.count({ where: { status: "running" } }),
    prisma.planTier.count({ where: { active: true } }),
    prisma.teamMember.count(),
  ]);
  const budget = await prisma.campaign.aggregate({ _sum: { budgetUsd: true, conversions: true } });
  return Response.json({
    waitlist: leads,
    campaigns,
    experiments_running: experiments,
    plan_tiers: plans,
    team_members: team,
    total_budget_usd: budget._sum.budgetUsd ?? 0,
    total_conversions: budget._sum.conversions ?? 0,
  });
}
