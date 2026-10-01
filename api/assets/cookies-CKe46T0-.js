import { deleteCookie, getCookie, setCookie } from "vinxi/http";
//#region src/lib/admin/cookies.ts
var SESSION_COOKIE_NAME = "bol_admin_session";
var SESSION_VALUE = "authenticated";
var SESSION_DURATION = 604800;
function setSessionCookie() {
	setCookie(SESSION_COOKIE_NAME, SESSION_VALUE, {
		httpOnly: true,
		secure: true,
		sameSite: "lax",
		maxAge: SESSION_DURATION,
		path: "/"
	});
}
function clearSessionCookie() {
	deleteCookie(SESSION_COOKIE_NAME, { path: "/" });
}
function getSessionCookie() {
	return getCookie(SESSION_COOKIE_NAME);
}
function checkAuthServer() {
	return getSessionCookie() === SESSION_VALUE;
}
//#endregion
export { clearSessionCookie as n, setSessionCookie as r, checkAuthServer as t };
