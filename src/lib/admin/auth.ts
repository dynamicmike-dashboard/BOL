"use server";

import { createServerFn } from "@tanstack/react-start";
import { setSessionCookie, clearSessionCookie, getSessionCookie, checkAuthServer } from "./cookies";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "boladmin2026";

export const login = createServerFn({ method: "POST" })
  .validator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    if (data.password === ADMIN_PASSWORD) {
      setSessionCookie();
      return { success: true };
    }
    return { success: false, error: "Incorrect password" };
  });

export const verifySession = createServerFn({ method: "POST" })
  .handler(async () => {
    const isValid = checkAuthServer();
    return { valid: isValid };
  });

export const logout = createServerFn({ method: "POST" })
  .handler(async () => {
    clearSessionCookie();
    return { success: true };
  });

export { checkAuthServer };