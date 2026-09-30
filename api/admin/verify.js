const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.VITE_ADMIN_PASSWORD || "boladmin2024";
const SESSION_COOKIE = "bol_admin_session";
const SESSION_VALUE = "authenticated";

function hasValidSession(request) {
  const cookieHeader = request.headers.get("cookie") || "";
  return cookieHeader.includes(`${SESSION_COOKIE}=${SESSION_VALUE}`);
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", req.headers.get("origin") || "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const valid = hasValidSession(req);
  return res.status(200).json({ valid });
}