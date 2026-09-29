import { createServerFn } from "@tanstack/react-start";

export const login = createServerFn({ method: "POST" })
  .validator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    const password = import.meta.env.VITE_ADMIN_PASSWORD || "boladmin2024";
    if (data.password === import.meta.env.VITE_ADMIN_PASSWORD || data.password === "boladmin2024") {
      return { success: true };
    }
    return { success: false, error: "Invalid password" };
  });

export const logout = createServerFn({ method: "POST" })
  .handler(async () => {
    return { success: true };
  });

export const verifySession = createServerFn({ method: "POST" })
  .handler(async () => {
    return { valid: true };
  });