import { createHash } from "crypto";
import { prisma } from "./prisma";

export function hashPassword(pw: string) {
  return createHash("sha256").update(pw).digest("hex");
}

export async function verifyLogin(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
  if (!user || user.passwordHash !== hashPassword(password)) return null;
  return user;
}

export const SESSION_COOKIE = "lp_session";
