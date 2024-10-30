import { PrismaClient } from "@prisma/client";
import { createHash } from "crypto";

const prisma = new PrismaClient();

function hash(pw: string) {
  return createHash("sha256").update(pw).digest("hex");
}

async function main() {
  await prisma.user.upsert({
    where: { email: "ops@launchpad.demo" },
    update: {},
    create: { email: "ops@launchpad.demo", passwordHash: hash("LaunchPad2026!"), role: "admin" },
  });

  const campaigns = [
    { name: "Product Hunt launch", channel: "community", budgetUsd: 2500, conversions: 412 },
    { name: "LinkedIn ABM", channel: "paid_social", budgetUsd: 8000, conversions: 89 },
    { name: "SEO pillar pages", channel: "organic", budgetUsd: 1200, conversions: 156 },
  ];
  for (const c of campaigns) {
    await prisma.campaign.create({ data: c });
  }

  const blocks = [
    { slug: "homepage-hero", title: "Hero — revenue narrative", status: "published" },
    { slug: "pricing-faq", title: "Pricing FAQ block", status: "published" },
    { slug: "security-page", title: "Security trust center", status: "review" },
  ];
  for (const b of blocks) await prisma.contentBlock.create({ data: b });

  await prisma.experiment.createMany({
    data: [
      { name: "Hero CTA copy", variantA: "Start free trial", variantB: "Book a demo", status: "running" },
      { name: "Pricing anchor", variantA: "$49 seat", variantB: "$59 seat", winner: "A", status: "completed" },
    ],
  });

  await prisma.planTier.createMany({
    data: [
      { code: "starter", name: "Starter", priceMonthly: 49, seats: 5 },
      { code: "growth", name: "Growth", priceMonthly: 149, seats: 25 },
      { code: "enterprise", name: "Enterprise", priceMonthly: 0, seats: 999 },
    ],
  });

  await prisma.teamMember.createMany({
    data: [
      { name: "Alex Kim", email: "alex@launchpad.demo", team: "Growth", role: "Head of marketing" },
      { name: "Sam Ortiz", email: "sam@launchpad.demo", team: "Product", role: "PMM" },
      { name: "Jordan Lee", email: "jordan@launchpad.demo", team: "RevOps", role: "Analytics lead" },
    ],
  });

  await prisma.waitlistLead.createMany({
    data: [
      { email: "founder@startup.demo", source: "hero", campaign: "launch" },
      { email: "cto@scaleup.demo", source: "pricing", campaign: "linkedin" },
    ],
  });

  await prisma.auditEvent.create({ data: { actor: "system", action: "seed.complete", target: "demo-tenant" } });
}

main().finally(() => prisma.$disconnect());
