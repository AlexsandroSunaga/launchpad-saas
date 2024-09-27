import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const signature = req.headers.get("stripe-signature");
  const body = await req.text();
  if (process.env.STRIPE_WEBHOOK_SECRET && !signature) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }
  // Demo: accept event payload; wire to Prisma subscription updates in production.
  let type = "unknown";
  try {
    type = JSON.parse(body).type ?? type;
  } catch {
    /* raw body */
  }
  return NextResponse.json({ received: true, type, bytes: body.length });
}
