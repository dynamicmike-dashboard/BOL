import { createAPIFileRoute } from "@tanstack/react-router";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.VITE_ADMIN_PASSWORD || "boladmin2024";
const SESSION_COOKIE = "bol_admin_session";
const SESSION_VALUE = "authenticated";

export const APIRoute = createAPIFileRoute("/api/admin/login")({
  POST: async ({ request }) => {
    const body = await request.json();
    if (body.password === ADMIN_PASSWORD) {
      const response = Response.json({ success: true });
      response.headers.set("Set-Cookie", `${SESSION_COOKIE}=${SESSION_VALUE}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`);
      return response;
    }
    return Response.json({ success: false, error: "Invalid password" }, { status: 401 });
  },
});