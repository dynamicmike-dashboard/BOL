import { t as createServerFn } from "./createServerFn-BC8lqCPj.js";
import { t as createServerRpc } from "./createServerRpc-DO5ESZkj.js";
import { n as clearSessionCookie, r as setSessionCookie, t as checkAuthServer } from "./cookies-CKe46T0-.js";
//#region src/lib/admin/auth.ts?tss-serverfn-split
var ADMIN_PASSWORD = "boladmin2026";
var login_createServerFn_handler = createServerRpc({
	id: "9dc9736037f2db74863fc34d4f56df45b501a31b18bb2411bd9d8932819664ee",
	name: "login",
	filename: "src/lib/admin/auth.ts"
}, (opts) => login.__executeServer(opts));
var login = createServerFn({ method: "POST" }).validator((data) => data).handler(login_createServerFn_handler, async ({ data }) => {
	if (data.password === ADMIN_PASSWORD) {
		setSessionCookie();
		return { success: true };
	}
	return {
		success: false,
		error: "Incorrect password"
	};
});
var verifySession_createServerFn_handler = createServerRpc({
	id: "243223d8db175c39335090af92837953b5f48afb83351e2ee5ad082d60df8995",
	name: "verifySession",
	filename: "src/lib/admin/auth.ts"
}, (opts) => verifySession.__executeServer(opts));
var verifySession = createServerFn({ method: "POST" }).handler(verifySession_createServerFn_handler, async () => {
	return { valid: checkAuthServer() };
});
var logout_createServerFn_handler = createServerRpc({
	id: "7ce333408f072eb69a13374c2051a01782d2b122f5ab1e32cb88c4765e721128",
	name: "logout",
	filename: "src/lib/admin/auth.ts"
}, (opts) => logout.__executeServer(opts));
var logout = createServerFn({ method: "POST" }).handler(logout_createServerFn_handler, async () => {
	clearSessionCookie();
	return { success: true };
});
//#endregion
export { login_createServerFn_handler, logout_createServerFn_handler, verifySession_createServerFn_handler };
