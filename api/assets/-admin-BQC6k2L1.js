import { t as createServerFn } from "./createServerFn-BpgqxZjr.js";
import { t as createServerRpc } from "./createServerRpc-D00VjMza.js";
//#region src/routes/admin/api/-admin.ts?tss-serverfn-split
var SESSION_COOKIE = "bol_admin_session";
var SESSION_VALUE = "authenticated";
var ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || process.env.VITE_ADMIN_PASSWORD || "boladmin2024";
var login_createServerFn_handler = createServerRpc({
	id: "b1408e05156a6dde99db46bd11831ac1d9c05106ddb7fd275852d53da50edc9b",
	name: "login",
	filename: "src/routes/admin/api/-admin.ts"
}, (opts) => login.__executeServer(opts));
var login = createServerFn({ method: "POST" }).validator((data) => data).handler(login_createServerFn_handler, async ({ data }) => {
	if (data.password === ADMIN_PASSWORD) return { success: true };
	return {
		success: false,
		error: "Invalid password"
	};
});
var logout_createServerFn_handler = createServerRpc({
	id: "a0151e90d420f97163a18ec54dd980e7b2a3244e31db45c7e58a65783a9224b8",
	name: "logout",
	filename: "src/routes/admin/api/-admin.ts"
}, (opts) => logout.__executeServer(opts));
var logout = createServerFn({ method: "POST" }).handler(logout_createServerFn_handler, async () => {
	return { success: true };
});
var verifySession_createServerFn_handler = createServerRpc({
	id: "38d7698100eb70f69b80044492544267f232c9dff7716653d014e18b869cd3bb",
	name: "verifySession",
	filename: "src/routes/admin/api/-admin.ts"
}, (opts) => verifySession.__executeServer(opts));
var verifySession = createServerFn({ method: "POST" }).handler(verifySession_createServerFn_handler, async ({ context }) => {
	return { valid: (context.request.headers.get("cookie") || "").includes(`${SESSION_COOKIE}=${SESSION_VALUE}`) };
});
//#endregion
export { login_createServerFn_handler, logout_createServerFn_handler, verifySession_createServerFn_handler };
