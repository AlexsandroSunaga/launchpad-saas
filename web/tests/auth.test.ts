import { describe, expect, it, vi } from "vitest";

const { findUnique } = vi.hoisted(() => ({ findUnique: vi.fn() }));
vi.mock("../lib/prisma", () => ({ prisma: { user: { findUnique } } }));

import { hashPassword, SESSION_COOKIE, verifyLogin } from "../lib/auth";

describe("hashPassword", () => {
  it("is deterministic sha256 hex", () => {
    expect(hashPassword("LaunchPad2026!")).toBe(hashPassword("LaunchPad2026!"));
    expect(hashPassword("a")).toMatch(/^[0-9a-f]{64}$/);
    expect(hashPassword("a")).not.toBe(hashPassword("b"));
  });
  it("matches the known sha256 of 'abc'", () => {
    expect(hashPassword("abc")).toBe("ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
  });
});

describe("verifyLogin", () => {
  it("returns the user on a correct password and lower-cases the email", async () => {
    const user = { email: "ops@launchpad.demo", passwordHash: hashPassword("pw") };
    findUnique.mockResolvedValueOnce(user);
    expect(await verifyLogin("OPS@launchpad.demo", "pw")).toBe(user);
    expect(findUnique).toHaveBeenCalledWith({ where: { email: "ops@launchpad.demo" } });
  });
  it("returns null for a wrong password or unknown user", async () => {
    findUnique.mockResolvedValueOnce({ email: "x", passwordHash: hashPassword("pw") });
    expect(await verifyLogin("x", "nope")).toBeNull();
    findUnique.mockResolvedValueOnce(null);
    expect(await verifyLogin("none", "pw")).toBeNull();
  });
  it("exposes the session cookie name", () => {
    expect(SESSION_COOKIE).toBe("lp_session");
  });
});
