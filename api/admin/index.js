const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.VITE_ADMIN_PASSWORD || "boladmin2024";
const SESSION_COOKIE = "bol_admin_session";
const SESSION_VALUE = "authenticated";

function setSessionCookie() {
  return `${SESSION_COOKIE}=${SESSION_VALUE}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`;
}

function clearSessionCookie() {
  return `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
}

function hasValidSession(req) {
  const cookieHeader = req.headers.get("cookie") || "";
  return cookieHeader.includes(`${SESSION_COOKIE}=${SESSION_VALUE}`);
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", req.headers.get("origin") || "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const url = new URL(req.url, `https://${req.headers.get("host")}`);
  const pathname = url.pathname;

  if (pathname === "/api/admin/verify") {
    const valid = hasValidSession(req);
    return res.status(200).json({ valid });
  }

  if (pathname === "/api/admin/login") {
    const body = await req.json();
    if (body.password === ADMIN_PASSWORD) {
      res.setHeader("Set-Cookie", `${SESSION_COOKIE}=${SESSION_VALUE}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=86400`);
      return res.status(200).json({ success: true });
    }
    return res.status(401).json({ success: false, error: "Invalid password" });
  }

  if (pathname === "/api/admin/logout") {
    res.setHeader("Set-Cookie", `${SESSION_COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`);
    return res.status(200).json({ success: true });
  }

  return res.status(404).json({ error: "Not found" });
}