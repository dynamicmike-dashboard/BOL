import { t as createServerFn } from "./createServerFn-BpgqxZjr.js";
import { t as createServerRpc } from "./createServerRpc-D00VjMza.js";
import { t as checkAuthServer } from "./cookies-CKe46T0-.js";
//#region src/lib/admin/defaultData.ts
var defaultAdminData = {
	pages: [{
		id: "page-1",
		slug: "team",
		label_en: "Our Team",
		label_es: "Nuestro Equipo",
		title_en: "Our Team",
		title_es: "Nuestro Equipo",
		body_en: "<p>Our team content...</p>",
		body_es: "<p>Contenido del equipo...</p>",
		image: "/team.jpg",
		sort_order: 1,
		visible: true,
		is_system: true
	}, {
		id: "page-2",
		slug: "about",
		label_en: "About Us",
		label_es: "Sobre Nosotros",
		title_en: "About Us",
		title_es: "Sobre Nosotros",
		body_en: "About us content...",
		body_es: "Contenido sobre nosotros...",
		image: "/about.jpg",
		sort_order: 2,
		visible: true,
		is_system: false
	}],
	dropoffs: [{
		id: "dropoff-1",
		name: "Roma Spaghetti",
		address: "Calle 34, entre 5ta y 10ma Av",
		hours_en: "Mon-Sat 12pm-10pm",
		hours_es: "Lun-Sáb 12pm-10pm",
		phone: "+52 984 111 2222",
		map_url: "https://maps.google.com/?q=Roma+Spaghetti+Playa+del+Carmen",
		image: "",
		sort_order: 1,
		visible: true
	}, {
		id: "2",
		name: "Pueblito Escondido Calle 38",
		address: "Calle 38, entre 5ta y 10ma Av",
		hours_en: "Daily 8am-10pm",
		hours_es: "Diario 8am-10pm",
		phone: "+52 984 333 4444",
		map_url: "https://maps.google.com/?q=Pueblito+Escondido+Calle+38+Playa+del+Carmen",
		image: "",
		visible: true,
		sort_order: 2
	}],
	volunteerNeeds: [{
		id: "volunteer-1",
		title_en: "Food Packing",
		title_es: "Empaque de Alimentos",
		desc_en: "Help assemble weekly despensas every Tuesday morning.",
		desc_es: "Ayuda a armar despensas semanales cada martes por la mañana.",
		image: "",
		sort_order: 1,
		visible: true
	}, {
		id: "volunteer-2",
		title_en: "Garden Sales",
		title_es: "Ventas de Huerto",
		desc_en: "Run the weekend plant/veggie sale to raise funds.",
		desc_es: "Organiza la venta de plantas/verduras del fin de semana para recaudar fondos.",
		image: "",
		sort_order: 2,
		visible: true
	}],
	donationMethods: [
		{
			id: "1",
			name_en: "Stripe",
			name_es: "Stripe",
			details_en: "Credit/Debit Card (Stripe). One-time or monthly.",
			details_es: "Tarjeta de Crédito/Débito (Stripe). Único o mensual.",
			link: "https://buy.stripe.com/00g7sy5O9aJRgdafYY",
			qr: "/QR-stripe-donate.webp",
			image: "",
			visible: true,
			sort_order: 1
		},
		{
			id: "2",
			name_en: "PayPal",
			name_es: "PayPal",
			details_en: "USA & Canada tax-deductible receipts available.",
			details_es: "Recibos deducibles de impuestos en USA y Canadá disponibles.",
			link: "https://paypal.me/BreathOfLifePDC",
			qr: "/QR-USA-and-Canada-Tax-Purposes.webp",
			image: "",
			visible: true,
			sort_order: 2
		},
		{
			id: "3",
			name_en: "OXXO",
			name_es: "OXXO",
			details_en: "Pay cash at any OXXO in Mexico. Reference: BOL",
			details_es: "Paga en efectivo en cualquier OXXO en México. Referencia: BOL",
			link: "",
			qr: "",
			image: "",
			visible: true,
			sort_order: 3
		},
		{
			id: "4",
			name_en: "Banco Azteca",
			name_es: "Banco Azteca",
			details_en: "Michele Avila Mendoza | Card: 4027 6661 1819 3043 | CLABE: 127694013013508192",
			details_es: "Michele Avila Mendoza | Tarjeta: 4027 6661 1819 3043 | CLABE: 127694013013508192",
			link: "",
			qr: "",
			image: "",
			visible: true,
			sort_order: 4
		},
		{
			id: "5",
			name_en: "Mercado Pago W",
			name_es: "Mercado Pago W",
			details_en: "Michele Avila Mendoza | CLABE: 722969010176925651",
			details_es: "Michele Avila Mendoza | CLABE: 722969010176925651",
			link: "",
			qr: "",
			image: "",
			visible: true,
			sort_order: 5
		}
	],
	contentBlocks: { donate_intro: {
		en: "Monetary Donations: STRIPE: https://buy.stripe.com/00g7sy5O9aJRgdafYY | PAYPAL: axansolustra@gmail.com | OXXO or Mexican Bank: Banco Azteca (Michele Avila Mendoza, Card: 4027 6661 1819 3043, CLABE: 127694013013508192) | Mercado Pago W (CLABE: 722969010176925651). Reference: BOL. Cash accepted at drop-off locations.",
		es: "Donaciones Monetarias: STRIPE: https://buy.stripe.com/00g7sy5O9aJRgdafYY | PAYPAL: axansolustra@gmail.com | OXXO o Depósito Bancario Mexicano: Banco Azteca (Michele Avila Mendoza, Tarjeta: 4027 6661 1819 3043, CLABE: 127694013013508192) | Mercado Pago W (CLABE: 722969010176925651). Referencia: BOL. Aceptamos efectivo en puntos de entrega."
	} },
	pages: [{
		id: "page-1",
		slug: "team",
		label_en: "Our Team",
		label_es: "Nuestro Equipo",
		title_en: "Our Team",
		title_es: "Nuestro Equipo",
		body_en: "Our team content...",
		body_es: "Contenido del equipo...",
		image: "/team.jpg",
		sort_order: 1,
		visible: true,
		is_system: true
	}, {
		id: "page-2",
		slug: "about",
		label_en: "About Us",
		label_es: "Sobre Nosotros",
		title_en: "About Us",
		title_es: "Sobre Nosotros",
		body_en: "About us content...",
		body_es: "Contenido sobre nosotros...",
		image: "/about.jpg",
		sort_order: 2,
		visible: true,
		is_system: false
	}],
	contentBlocks: {
		hero_kicker: {
			en: "Caring in Action",
			es: "Cuidado en Acción"
		},
		hero_title: {
			en: "Breath of Life PDC",
			es: "Aliento de Vida PDC"
		},
		hero_sub: {
			en: "Helping less-fortunate families in Playa del Carmen through food, support and community.",
			es: "Ayudando a familias menos afortunadas en Playa del Carmen con alimentos, apoyo y comunidad."
		}
	}
};
//#endregion
//#region src/routes/admin/api/data.ts?tss-serverfn-split
function requireAuth() {
	if (!checkAuthServer()) throw new Error("Unauthorized");
}
var memoryStore = {
	pages: [...defaultAdminData.pages],
	contentBlocks: defaultAdminData.contentBlocks || {},
	dropoffs: [...defaultAdminData.dropoffs],
	volunteerNeeds: [...defaultAdminData.volunteerNeeds],
	donationMethods: [...defaultAdminData.donationMethods]
};
async function readAllData() {
	requireAuth();
	return {
		pages: memoryStore.pages,
		contentBlocks: memoryStore.contentBlocks,
		dropoffs: memoryStore.dropoffs,
		volunteerNeeds: memoryStore.volunteerNeeds,
		donationMethods: memoryStore.donationMethods
	};
}
var getAdminData_createServerFn_handler = createServerRpc({
	id: "05ac065228ffdcf8af3b595cb5aa48ab76bf6c0e4d92e031da7a9c3400de5e7f",
	name: "getAdminData",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => getAdminData.__executeServer(opts));
var getAdminData = createServerFn({ method: "POST" }).handler(getAdminData_createServerFn_handler, async () => {
	return await readAllData();
});
var savePage_createServerFn_handler = createServerRpc({
	id: "76a9ec85891535c3fa202bd72af8c8ddc9a10810f0397d8d2cb8340c28f1fd22",
	name: "savePage",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => savePage.__executeServer(opts));
var savePage = createServerFn({ method: "POST" }).validator((data) => data).handler(savePage_createServerFn_handler, async ({ data }) => {
	requireAuth();
	const pages = memoryStore.pages;
	const existingIndex = pages.findIndex((p) => p.id === data.page.id);
	if (data.page.id && existingIndex >= 0) pages[existingIndex] = data.page;
	else {
		data.page.id = `page-${Date.now()}`;
		pages.push(data.page);
	}
	return { success: true };
});
var deletePage_createServerFn_handler = createServerRpc({
	id: "eddc5ffa61e175b9e096617f0ef32091ddd55192210d66cfc150f1ff32875cd4",
	name: "deletePage",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => deletePage.__executeServer(opts));
var deletePage = createServerFn({ method: "POST" }).validator((data) => data).handler(deletePage_createServerFn_handler, async ({ data }) => {
	requireAuth();
	memoryStore.pages = memoryStore.pages.filter((p) => p.id !== data.id);
	return { success: true };
});
var clonePage_createServerFn_handler = createServerRpc({
	id: "529b8e6fc92c5355195ecab3628f61f01738067d17dbad1c895357f868a1cba2",
	name: "clonePage",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => clonePage.__executeServer(opts));
var clonePage = createServerFn({ method: "POST" }).validator((data) => data).handler(clonePage_createServerFn_handler, async ({ data }) => {
	requireAuth();
	const pages = memoryStore.pages;
	const page = pages.find((p) => p.id === data.id);
	if (!page) throw new Error("Page not found");
	const cloned = {
		...page,
		id: `page-${Date.now()}`,
		slug: `${data.slug}-copy`,
		title_en: `${data.title_en} (Copy)`,
		title_es: `${data.title_es} (Copia)`
	};
	pages.push(cloned);
	return {
		success: true,
		page: cloned
	};
});
var saveDropoff_createServerFn_handler = createServerRpc({
	id: "7d1d6bc346157cddfec0a8b98a15687dd5d8190adaa39aa41c9291d45f1c7f3c",
	name: "saveDropoff",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => saveDropoff.__executeServer(opts));
var saveDropoff = createServerFn({ method: "POST" }).validator((data) => data).handler(saveDropoff_createServerFn_handler, async ({ data }) => {
	requireAuth();
	const dropoffs = memoryStore.dropoffs;
	const existingIndex = dropoffs.findIndex((d) => d.id === data.dropoff.id);
	if (data.dropoff.id && existingIndex >= 0) dropoffs[existingIndex] = data.dropoff;
	else {
		data.dropoff.id = `dropoff-${Date.now()}`;
		dropoffs.push(data.dropoff);
	}
	return { success: true };
});
var cloneDropoff_createServerFn_handler = createServerRpc({
	id: "e6e74fda0be965b01ccecd18138e7d2c969609a1ff0827097ffb6b86269da6ba",
	name: "cloneDropoff",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => cloneDropoff.__executeServer(opts));
var cloneDropoff = createServerFn({ method: "POST" }).validator((data) => data).handler(cloneDropoff_createServerFn_handler, async ({ data }) => {
	requireAuth();
	const dropoffs = memoryStore.dropoffs;
	const dropoff = dropoffs.find((d) => d.id === data.id);
	if (!dropoff) throw new Error("Dropoff not found");
	const cloned = {
		...dropoff,
		id: `dropoff-${Date.now()}`,
		name: `${dropoff.name} (Copy)`
	};
	dropoffs.push(cloned);
	return {
		success: true,
		dropoff: cloned
	};
});
var saveVolunteerNeed_createServerFn_handler = createServerRpc({
	id: "79624fbf912d7428221066183a67e6ca9548a29a4df8016c501f7b4572eeaae1",
	name: "saveVolunteerNeed",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => saveVolunteerNeed.__executeServer(opts));
var saveVolunteerNeed = createServerFn({ method: "POST" }).validator((data) => data).handler(saveVolunteerNeed_createServerFn_handler, async ({ data }) => {
	requireAuth();
	const needs = memoryStore.volunteerNeeds;
	const existingIndex = needs.findIndex((n) => n.id === data.need.id);
	if (data.need.id && existingIndex >= 0) needs[existingIndex] = data.need;
	else {
		data.need.id = `volunteer-${Date.now()}`;
		needs.push(data.need);
	}
	return { success: true };
});
var cloneVolunteerNeed_createServerFn_handler = createServerRpc({
	id: "d1b5a476a69ddcdc8941608d62d1a85511e1dc3e5e7c80fcae36ded61b2ab544",
	name: "cloneVolunteerNeed",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => cloneVolunteerNeed.__executeServer(opts));
var cloneVolunteerNeed = createServerFn({ method: "POST" }).validator((data) => data).handler(cloneVolunteerNeed_createServerFn_handler, async ({ data }) => {
	requireAuth();
	const needs = memoryStore.volunteerNeeds;
	const need = needs.find((n) => n.id === data.id);
	if (!need) throw new Error("Volunteer need not found");
	const cloned = {
		...need,
		id: `volunteer-${Date.now()}`,
		title_en: `${need.title_en} (Copy)`,
		title_es: `${need.title_es} (Copia)`
	};
	needs.push(cloned);
	return {
		success: true,
		need: cloned
	};
});
var saveDonationMethod_createServerFn_handler = createServerRpc({
	id: "9d1e4bd4a3869cf8a3159ece1de719835132c0655e6beba90c69e88fd108b8e6",
	name: "saveDonationMethod",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => saveDonationMethod.__executeServer(opts));
var saveDonationMethod = createServerFn({ method: "POST" }).validator((data) => data).handler(saveDonationMethod_createServerFn_handler, async ({ data }) => {
	requireAuth();
	const methods = memoryStore.donationMethods;
	const existingIndex = methods.findIndex((m) => m.id === data.method.id);
	if (data.method.id && existingIndex >= 0) methods[existingIndex] = data.method;
	else {
		data.method.id = `donation-${Date.now()}`;
		methods.push(data.method);
	}
	return { success: true };
});
var cloneDonationMethod_createServerFn_handler = createServerRpc({
	id: "b9977391c91ef62b153d74e1cccc3f78d69c0be5fb95db823c0645e9c5137fed",
	name: "cloneDonationMethod",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => cloneDonationMethod.__executeServer(opts));
var cloneDonationMethod = createServerFn({ method: "POST" }).validator((data) => data).handler(cloneDonationMethod_createServerFn_handler, async ({ data }) => {
	requireAuth();
	const methods = memoryStore.donationMethods;
	const method = methods.find((m) => m.id === data.id);
	if (!method) throw new Error("Donation method not found");
	const cloned = {
		...method,
		id: `donation-${Date.now()}`,
		name_en: `${method.name_en} (Copy)`,
		name_es: `${method.name_es} (Copia)`
	};
	methods.push(cloned);
	return {
		success: true,
		method: cloned
	};
});
var deleteDropoff_createServerFn_handler = createServerRpc({
	id: "06599b02ab1f4371a4ad433565e2edf35de698a0c13abd21d6a471aaa19f869b",
	name: "deleteDropoff",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => deleteDropoff.__executeServer(opts));
var deleteDropoff = createServerFn({ method: "POST" }).validator((data) => data).handler(deleteDropoff_createServerFn_handler, async ({ data }) => {
	requireAuth();
	memoryStore.dropoffs = memoryStore.dropoffs.filter((d) => d.id !== data.id);
	return { success: true };
});
var deleteVolunteerNeed_createServerFn_handler = createServerRpc({
	id: "30e45abe73369dd639d3119b99491073fc21f9f3fd32e41eb4f38ec1990312b9",
	name: "deleteVolunteerNeed",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => deleteVolunteerNeed.__executeServer(opts));
var deleteVolunteerNeed = createServerFn({ method: "POST" }).validator((data) => data).handler(deleteVolunteerNeed_createServerFn_handler, async ({ data }) => {
	requireAuth();
	memoryStore.volunteerNeeds = memoryStore.volunteerNeeds.filter((n) => n.id !== data.id);
	return { success: true };
});
var deleteDonationMethod_createServerFn_handler = createServerRpc({
	id: "6b51ea22ff7b60fcb10129a3ae5977ac95cca4aa3ec1c91c9d80935ba006f7e2",
	name: "deleteDonationMethod",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => deleteDonationMethod.__executeServer(opts));
var deleteDonationMethod = createServerFn({ method: "POST" }).validator((data) => data).handler(deleteDonationMethod_createServerFn_handler, async ({ data }) => {
	requireAuth();
	memoryStore.donationMethods = memoryStore.donationMethods.filter((m) => m.id !== data.id);
	return { success: true };
});
var saveContentBlock_createServerFn_handler = createServerRpc({
	id: "0ba68a1ae6347e4ad9f8cb674713e308d335594fa67c1d795b0689fe55f0c561",
	name: "saveContentBlock",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => saveContentBlock.__executeServer(opts));
var saveContentBlock = createServerFn({ method: "POST" }).validator((data) => data).handler(saveContentBlock_createServerFn_handler, async ({ data }) => {
	requireAuth();
	const blocks = memoryStore.contentBlocks;
	const key = data.block.key;
	if (blocks[key]) blocks[key] = {
		...blocks[key],
		...data.block
	};
	else blocks[key] = data.block;
	return { success: true };
});
var deleteContentBlock_createServerFn_handler = createServerRpc({
	id: "3baa6ae7e2959da9aca8ea82da3b1e6a940f4e7add8a9e5d2b030141b6d89447",
	name: "deleteContentBlock",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => deleteContentBlock.__executeServer(opts));
var deleteContentBlock = createServerFn({ method: "POST" }).validator((data) => data).handler(deleteContentBlock_createServerFn_handler, async ({ data }) => {
	requireAuth();
	delete memoryStore.contentBlocks[data.key];
	return { success: true };
});
var reorderItems_createServerFn_handler = createServerRpc({
	id: "e66bc6a21c304ee83c5679aedaa108590e06e3b1e4086caed4ab131f42572ae8",
	name: "reorderItems",
	filename: "src/routes/admin/api/data.ts"
}, (opts) => reorderItems.__executeServer(opts));
var reorderItems = createServerFn({ method: "POST" }).validator((data) => data).handler(reorderItems_createServerFn_handler, async ({ data }) => {
	requireAuth();
	memoryStore[data.type] = data.items;
	return { success: true };
});
//#endregion
export { cloneDonationMethod_createServerFn_handler, cloneDropoff_createServerFn_handler, clonePage_createServerFn_handler, cloneVolunteerNeed_createServerFn_handler, deleteContentBlock_createServerFn_handler, deleteDonationMethod_createServerFn_handler, deleteDropoff_createServerFn_handler, deletePage_createServerFn_handler, deleteVolunteerNeed_createServerFn_handler, getAdminData_createServerFn_handler, reorderItems_createServerFn_handler, saveContentBlock_createServerFn_handler, saveDonationMethod_createServerFn_handler, saveDropoff_createServerFn_handler, savePage_createServerFn_handler, saveVolunteerNeed_createServerFn_handler };
