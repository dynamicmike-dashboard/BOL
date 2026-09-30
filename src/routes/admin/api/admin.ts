import { createServerFn } from "@tanstack/react-start";

const SESSION_COOKIE = "bol_admin_session";
const SESSION_VALUE = "authenticated";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.VITE_ADMIN_PASSWORD || "boladmin2024";

export const login = createServerFn({ method: "POST" })
  .validator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    if (data.password === ADMIN_PASSWORD) {
      return { success: true };
    }
    return { success: false, error: "Invalid password" };
  });

export const logout = createServerFn({ method: "POST" })
  .handler(async () => {
    return { success: true };
  });

export const verifySession = createServerFn({ method: "POST" })
  .handler(async ({ context }) => {
    // Check for session cookie in request headers
    const cookieHeader = context.request.headers.get("cookie") || "";
    const hasSession = cookieHeader.includes(`${SESSION_COOKIE}=${SESSION_VALUE}`);
    return { valid: hasSession };
  });