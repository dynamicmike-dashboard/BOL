import { t as getServerFnById } from "./__23tanstack-start-server-fn-resolver-DDf9Eduz.js";
import { f as TSS_SERVER_FUNCTION, t as createServerFn } from "./createServerFn-BC8lqCPj.js";
//#region node_modules/@tanstack/start-server-core/dist/esm/createSsrRpc.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/lib/admin/auth.ts
var login = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("9dc9736037f2db74863fc34d4f56df45b501a31b18bb2411bd9d8932819664ee"));
createServerFn({ method: "POST" }).handler(createSsrRpc("243223d8db175c39335090af92837953b5f48afb83351e2ee5ad082d60df8995"));
var logout = createServerFn({ method: "POST" }).handler(createSsrRpc("7ce333408f072eb69a13374c2051a01782d2b122f5ab1e32cb88c4765e721128"));
//#endregion
export { logout as n, login as t };
