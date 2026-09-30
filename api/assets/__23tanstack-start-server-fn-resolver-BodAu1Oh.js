//#region \0%23tanstack-start-server-fn-resolver
var manifest = {
	"05ac065228ffdcf8af3b595cb5aa48ab76bf6c0e4d92e031da7a9c3400de5e7f": {
		functionName: "getAdminData_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"06599b02ab1f4371a4ad433565e2edf35de698a0c13abd21d6a471aaa19f869b": {
		functionName: "deleteDropoff_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"0ba68a1ae6347e4ad9f8cb674713e308d335594fa67c1d795b0689fe55f0c561": {
		functionName: "saveContentBlock_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"30e45abe73369dd639d3119b99491073fc21f9f3fd32e41eb4f38ec1990312b9": {
		functionName: "deleteVolunteerNeed_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"38d7698100eb70f69b80044492544267f232c9dff7716653d014e18b869cd3bb": {
		functionName: "verifySession_createServerFn_handler",
		importer: () => import("./-admin-Dybiao9R.js")
	},
	"3baa6ae7e2959da9aca8ea82da3b1e6a940f4e7add8a9e5d2b030141b6d89447": {
		functionName: "deleteContentBlock_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"529b8e6fc92c5355195ecab3628f61f01738067d17dbad1c895357f868a1cba2": {
		functionName: "clonePage_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"6b51ea22ff7b60fcb10129a3ae5977ac95cca4aa3ec1c91c9d80935ba006f7e2": {
		functionName: "deleteDonationMethod_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"76a9ec85891535c3fa202bd72af8c8ddc9a10810f0397d8d2cb8340c28f1fd22": {
		functionName: "savePage_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"79624fbf912d7428221066183a67e6ca9548a29a4df8016c501f7b4572eeaae1": {
		functionName: "saveVolunteerNeed_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"7d1d6bc346157cddfec0a8b98a15687dd5d8190adaa39aa41c9291d45f1c7f3c": {
		functionName: "saveDropoff_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"9d1e4bd4a3869cf8a3159ece1de719835132c0655e6beba90c69e88fd108b8e6": {
		functionName: "saveDonationMethod_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"a0151e90d420f97163a18ec54dd980e7b2a3244e31db45c7e58a65783a9224b8": {
		functionName: "logout_createServerFn_handler",
		importer: () => import("./-admin-Dybiao9R.js")
	},
	"b1408e05156a6dde99db46bd11831ac1d9c05106ddb7fd275852d53da50edc9b": {
		functionName: "login_createServerFn_handler",
		importer: () => import("./-admin-Dybiao9R.js")
	},
	"b9977391c91ef62b153d74e1cccc3f78d69c0be5fb95db823c0645e9c5137fed": {
		functionName: "cloneDonationMethod_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"d1b5a476a69ddcdc8941608d62d1a85511e1dc3e5e7c80fcae36ded61b2ab544": {
		functionName: "cloneVolunteerNeed_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"e66bc6a21c304ee83c5679aedaa108590e06e3b1e4086caed4ab131f42572ae8": {
		functionName: "reorderItems_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"e6e74fda0be965b01ccecd18138e7d2c969609a1ff0827097ffb6b86269da6ba": {
		functionName: "cloneDropoff_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
	},
	"eddc5ffa61e175b9e096617f0ef32091ddd55192210d66cfc150f1ff32875cd4": {
		functionName: "deletePage_createServerFn_handler",
		importer: () => import("./data-CfXvBHCM.js")
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
