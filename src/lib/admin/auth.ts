"use server";

import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie, deleteCookie } from "vinxi/http";
import { createHash } from "crypto";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "boladmin2024";
const SESSION_COOKIE_NAME = "bol_admin_session";
const SESSION_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

const ADMIN_PASSWORD_HASH = hashPassword(ADMIN_PASSWORD);

const adminSessions = new Map<string, { expiresAt: number }>();

export const login = createServerFn({ method: "POST" })
  .validator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    const hashedInput = createHash("sha256").update(data.password).digest("hex");
    if (hashedInput === ADMIN_PASSWORD_HASH) {
      const sessionToken = crypto.randomUUID();
      const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
      
      adminSessions.set(sessionToken, { expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000 });
      
      return { success: true, token: sessionToken };
    }
    return { success: false, error: "Invalid password" };
  });

export const verifySession = createServerFn({ method: "POST" })
  .handler(async () => {
    // In a real implementation, verify the session cookie
    return { valid: true };
  });

export const logout = createServerFn({ method: "POST" })
  .handler(async () => {
    return { success: true };
  });