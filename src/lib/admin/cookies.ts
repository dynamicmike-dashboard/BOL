"use server";

import { getCookie, setCookie, deleteCookie } from "vinxi/http";

const SESSION_COOKIE_NAME = "bol_admin_session";
const SESSION_VALUE = "authenticated";
const SESSION_DURATION = 7 * 24 * 60 * 60; // 7 days in seconds

export function setSessionCookie() {
  setCookie(SESSION_COOKIE_NAME, SESSION_VALUE, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: SESSION_DURATION,
    path: "/",
  });
}

export function clearSessionCookie() {
  deleteCookie(SESSION_COOKIE_NAME, { path: "/" });
}

export function getSessionCookie(): string | undefined {
  return getCookie(SESSION_COOKIE_NAME);
}

export function checkAuthServer(): boolean {
  const sessionValue = getSessionCookie();
  return sessionValue === SESSION_VALUE;
}