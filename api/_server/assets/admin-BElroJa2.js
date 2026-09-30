import { t as createServerFn } from "./createServerFn-BpgqxZjr.js";
import { t as createServerRpc } from "./createServerRpc-D00VjMza.js";
//#region src/routes/admin/api/admin.ts?tss-serverfn-split
var SESSION_COOKIE = "bol_admin_session";
var SESSION_VALUE = "authenticated";
var ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.VITE_ADMIN_PASSWORD || "boladmin2024";
var login_createServerFn_handler = createServerRpc({
	id: "ed63d9a41f57df98771f928965740d88b13d47e5b47834e964547462a452a269",
	name: "login",
	filename: "src/routes/admin/api/admin.ts"
}, (opts) => login.__executeServer(opts));
var login = createServerFn({ method: "POST" }).validator((data) => data).handler(login_createServerFn_handler, async ({ data }) => {
	if (data.password === ADMIN_PASSWORD) return { success: true };
	return {
		success: false,
		error: "Invalid password"
	};
});
var logout_createServerFn_handler = createServerRpc({
	id: "d6fb8c37cae8e958b6341dd662290d188629aaa5989aa3aed151986a16ed113c",
	name: "logout",
	filename: "src/routes/admin/api/admin.ts"
}, (opts) => logout.__executeServer(opts));
var logout = createServerFn({ method: "POST" }).handler(logout_createServerFn_handler, async () => {
	return { success: true };
});
var verifySession_createServerFn_handler = createServerRpc({
	id: "11caa41d87e70be35b6eaf085761483ab740eeafd5fc10212e83d91502f8a315",
	name: "verifySession",
	filename: "src/routes/admin/api/admin.ts"
}, (opts) => verifySession.__executeServer(opts));
var verifySession = createServerFn({ method: "POST" }).handler(verifySession_createServerFn_handler, async ({ context }) => {
	return { valid: (context.request.headers.get("cookie") || "").includes(`${SESSION_COOKIE}=${SESSION_VALUE}`) };
});
//#endregion
export { login_createServerFn_handler, logout_createServerFn_handler, verifySession_createServerFn_handler };
