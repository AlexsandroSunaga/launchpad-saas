import { NextResponse } from "next/server";

const DEMO_PRODUCTS = [
  { id: "prod_launch", name: "LaunchPad Pro", price_cents: 2900, interval: "month" },
  { id: "prod_team", name: "LaunchPad Team", price_cents: 9900, interval: "month" },
  { id: "prod_ent", name: "LaunchPad Enterprise", price_cents: 0, interval: "custom" },
];

export async function GET() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (key) {
    try {
      const stripe = await import("stripe").then((m) => new m.default(key));
      const prices = await stripe.prices.list({ active: true, limit: 12, expand: ["data.product"] });
      return NextResponse.json({
        provider: "stripe",
        items: prices.data.map((p) => ({
          id: p.id,
          name: (p.product as { name?: string })?.name ?? "Product",
          price_cents: p.unit_amount ?? 0,
          interval: p.recurring?.interval ?? "one_time",
        })),
      });
    } catch (e) {
      return NextResponse.json({ provider: "stripe", error: String(e), items: DEMO_PRODUCTS });
    }
  }
  return NextResponse.json({ provider: "demo", items: DEMO_PRODUCTS });
}
