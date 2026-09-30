import { createAPIFileRoute } from "@tanstack/react-router";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.VITE_ADMIN_PASSWORD || "boladmin2024";
const SESSION_COOKIE = "bol_admin_session";
const SESSION_VALUE = "authenticated";

function hasValidSession(request: Request) {
  const cookieHeader = request.headers.get("cookie") || "";
  return cookieHeader.includes(`${SESSION_COOKIE}=${SESSION_VALUE}`);
}

export const APIRoute = createAPIFileRoute("/api/admin/verify")({
  POST: async ({ request }) => {
    return Response.json({ valid: hasValidSession(request) });
  },
});