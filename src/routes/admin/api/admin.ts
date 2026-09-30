import { createServerFn } from "@tanstack/react-start";

const SESSION_COOKIE = "bol_admin_session";
const SESSION_VALUE = "authenticated";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.VITE_ADMIN_PASSWORD || "boladmin2024";

function setCookieHeader() {
  return `${SESSION_COOKIE}=${SESSION_VALUE}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`;
}

function clearCookieHeader() {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

export const login = createServerFn({ method: "POST" })
  .validator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    if (data.password === ADMIN_PASSWORD) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { 
          "Content-Type": "application/json",
          "Set-Cookie": setCookieHeader()
        }
      });
    }
    return Response.json({ success: false, error: "Invalid password" }, { status: 401 });
  });

export const logout = createServerFn({ method: "POST" })
  .handler(async () => {
    return new Response(JSON.stringify({ success: true }), {
      headers: { 
        "Content-Type": "application/json",
        "Set-Cookie": clearCookieHeader()
      }
    });
  });

export const verifySession = createServerFn({ method: "POST" })
  .handler(async ({ context }) => {
    const cookieHeader = context.request.headers.get("cookie") || "";
    const hasSession = cookieHeader.includes(`${SESSION_COOKIE}=${SESSION_VALUE}`);
    return { valid: hasSession };
  });