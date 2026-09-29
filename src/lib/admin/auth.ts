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

export const verifyPassword = createServerFn({ method: "POST" })
  .validator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    const hashedInput = hashPassword(data.password);
    if (hashedInput === ADMIN_PASSWORD_HASH) {
      const sessionToken = crypto.randomUUID();
      const expiresAt = Date.now() + SESSION_DURATION;
      
      setCookie(SESSION_COOKIE_NAME, sessionToken, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: SESSION_DURATION / 1000,
        path: "/",
      });
      
      // Store session in memory (in production, use Redis or database)
      // For now, we'll store in a simple in-memory map
      adminSessions.set(sessionToken, { expiresAt });
      
      return { success: true };
    }
    
    return { success: false, error: "Invalid password" };
  });

const adminSessions = new Map<string, { expiresAt: number }>();

export const validateSession = createServerFn({ method: "POST" })
  .handler(async () => {
    const sessionToken = getCookie(SESSION_COOKIE_NAME);
    if (!sessionToken) return { valid: false };
    
    const session = adminSessions.get(sessionToken);
    if (!session || session.expiresAt < Date.now()) {
      adminSessions.delete(sessionToken);
      deleteCookie(SESSION_COOKIE_NAME);
      return { valid: false };
    }
    
    return { valid: true };
  });

export const logout = createServerFn({ method: "POST" })
  .handler(async () => {
    const sessionToken = getCookie(SESSION_COOKIE_NAME);
    if (sessionToken) {
      adminSessions.delete(sessionToken);
      deleteCookie(SESSION_COOKIE_NAME);
    }
    return { success: true };
  });

// Cleanup expired sessions periodically
setInterval(() => {
  const now = Date.now();
  for (const [token, session] of adminSessions.entries()) {
    if (session.expiresAt < Date.now()) {
      adminSessions.delete(token);
    }
  }
}, 60 * 60 * 1000); // Every hour