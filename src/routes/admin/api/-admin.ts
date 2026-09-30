import { createServerFn } from "@tanstack/react-start";

export const login = createServerFn({ method: "POST" })
  .validator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    const expectedPassword = process.env.ADMIN_PASSWORD || process.env.VITE_ADMIN_PASSWORD || "boladmin2024";
    if (data.password === expectedPassword) {
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