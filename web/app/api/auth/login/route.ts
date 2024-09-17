import { cookies } from "next/headers";
import { verifyLogin, SESSION_COOKIE } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = await verifyLogin(String(email ?? ""), String(password ?? ""));
  if (!user) return Response.json({ error: "Invalid credentials" }, { status: 401 });
  const jar = await cookies();
  jar.set(SESSION_COOKIE, user.email, { httpOnly: true, path: "/", maxAge: 60 * 60 * 12 });
  return Response.json({ email: user.email, role: user.role });
}
