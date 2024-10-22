import { cookies } from "next/headers";
import { SESSION_COOKIE } from "./auth";

export async function requireSession() {
  const jar = await cookies();
  const email = jar.get(SESSION_COOKIE)?.value;
  if (!email) return null;
  return email;
}
