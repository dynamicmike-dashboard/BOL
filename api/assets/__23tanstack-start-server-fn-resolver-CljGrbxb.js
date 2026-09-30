//#region \0%23tanstack-start-server-fn-resolver
var manifest = {
	"0629826eae4a9d9afa59bc5748f0c7fbab4c53a03764d317e09c2536384b0e85": {
		functionName: "saveDonationMethod_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"0c2854bc0c9b9fdecf9a4af9eab030cc12d9568b605ef4af44852a10b978e589": {
		functionName: "saveDropoff_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"287e40dd68e489db51129b9c49a7d596e0dbc63e6fd4fca99df71e180520a8f7": {
		functionName: "deleteContentBlock_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"37cdb77c55360fecae60b9343e42596713de6b1b30672dbee94f204ed52f7b7c": {
		functionName: "saveVolunteerNeed_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"38d7698100eb70f69b80044492544267f232c9dff7716653d014e18b869cd3bb": {
		functionName: "verifySession_createServerFn_handler",
		importer: () => import("./-admin-Dybiao9R.js")
	},
	"49dfafc46eced9a27cf144cd032810191854453a7b269e16eb653f506ba1639a": {
		functionName: "cloneDropoff_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"6059f4dc4de011915d8f7b16764dbff715fd960ebb393137b1749c109b070e9d": {
		functionName: "savePage_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"6bce540237ad05a4ea4a4682337db933a364a96c2f06105f4e78d9b76e3e9eca": {
		functionName: "deletePage_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"6dde606e2d1ffa2769ec96b8599e430b54d13760c0c036cc8bca135f74a0ad0c": {
		functionName: "saveContentBlock_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"774b36648f3e0c69bf135b61015ff44af6758e714befff27b4716f18a2a771d3": {
		functionName: "cloneDonationMethod_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"7a7715332195fd94a16c63e9aa22a23863add98c7fac6ac774717c4201bf6ad2": {
		functionName: "cloneVolunteerNeed_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"83ff7045031dd0e75ec1a322b984e567d3eaf08cccfb19d2cb2c1b443ffac3f1": {
		functionName: "clonePage_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"917e76a54e8687fe1946d9ef3870e11c3d324c8463bba0a27310e31f95b13632": {
		functionName: "deleteVolunteerNeed_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"a0151e90d420f97163a18ec54dd980e7b2a3244e31db45c7e58a65783a9224b8": {
		functionName: "logout_createServerFn_handler",
		importer: () => import("./-admin-Dybiao9R.js")
	},
	"ade39a45f847434c362e906eb82a2e4327cdda9d55882108cdb8f0ce55dc5568": {
		functionName: "deleteDonationMethod_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"b0b8b2be351870244a581a8efed98c6b0e628af6b3afcdc5fa831b3ae2dcc49d": {
		functionName: "getAdminData_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"b103cc8f2de81b4531c7798f0a563c0dd12ea24c7dab08c094976eda398d9dce": {
		functionName: "reorderItems_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	},
	"b1408e05156a6dde99db46bd11831ac1d9c05106ddb7fd275852d53da50edc9b": {
		functionName: "login_createServerFn_handler",
		importer: () => import("./-admin-Dybiao9R.js")
	},
	"db61efa1bc4f1f06bb4001da8ee3cc1c00d467979441ad8c8884a878f35b9300": {
		functionName: "deleteDropoff_createServerFn_handler",
		importer: () => import("./-data-CZKqfnxy.js")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
