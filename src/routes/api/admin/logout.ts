import { createAPIFileRoute } from "@tanstack/react-router";

const SESSION_COOKIE = "bol_admin_session";

export const APIRoute = createAPIFileRoute("/api/admin/logout")({
  POST: async () => {
    const response = Response.json({ success: true });
    response.headers.set("Set-Cookie", `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`);
    return response;
  },
});