import { t as createServerFn } from "./createServerFn-CIHAFgYl.js";
import { t as createServerRpc } from "./createServerRpc-B90ckaqP.js";
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
//#region src/routes/admin/api/-data.ts?tss-serverfn-split
var memoryStore = {
	pages: [...defaultAdminData.pages],
	contentBlocks: defaultAdminData.contentBlocks || {},
	dropoffs: [...defaultAdminData.dropoffs],
	volunteerNeeds: [...defaultAdminData.volunteerNeeds],
	donationMethods: [...defaultAdminData.donationMethods]
};
async function readAllData() {
	return {
		pages: memoryStore.pages,
		contentBlocks: memoryStore.contentBlocks,
		dropoffs: memoryStore.dropoffs,
		volunteerNeeds: memoryStore.volunteerNeeds,
		donationMethods: memoryStore.donationMethods
	};
}
var getAdminData_createServerFn_handler = createServerRpc({
	id: "b0b8b2be351870244a581a8efed98c6b0e628af6b3afcdc5fa831b3ae2dcc49d",
	name: "getAdminData",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => getAdminData.__executeServer(opts));
var getAdminData = createServerFn({ method: "POST" }).handler(getAdminData_createServerFn_handler, async () => {
	return await readAllData();
});
var savePage_createServerFn_handler = createServerRpc({
	id: "6059f4dc4de011915d8f7b16764dbff715fd960ebb393137b1749c109b070e9d",
	name: "savePage",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => savePage.__executeServer(opts));
var savePage = createServerFn({ method: "POST" }).validator((data) => data).handler(savePage_createServerFn_handler, async ({ data }) => {
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
	id: "6bce540237ad05a4ea4a4682337db933a364a96c2f06105f4e78d9b76e3e9eca",
	name: "deletePage",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => deletePage.__executeServer(opts));
var deletePage = createServerFn({ method: "POST" }).validator((data) => data).handler(deletePage_createServerFn_handler, async ({ data }) => {
	memoryStore.pages = memoryStore.pages.filter((p) => p.id !== data.id);
	return { success: true };
});
var clonePage_createServerFn_handler = createServerRpc({
	id: "83ff7045031dd0e75ec1a322b984e567d3eaf08cccfb19d2cb2c1b443ffac3f1",
	name: "clonePage",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => clonePage.__executeServer(opts));
var clonePage = createServerFn({ method: "POST" }).validator((data) => data).handler(clonePage_createServerFn_handler, async ({ data }) => {
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
	id: "0c2854bc0c9b9fdecf9a4af9eab030cc12d9568b605ef4af44852a10b978e589",
	name: "saveDropoff",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => saveDropoff.__executeServer(opts));
var saveDropoff = createServerFn({ method: "POST" }).validator((data) => data).handler(saveDropoff_createServerFn_handler, async ({ data }) => {
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
	id: "49dfafc46eced9a27cf144cd032810191854453a7b269e16eb653f506ba1639a",
	name: "cloneDropoff",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => cloneDropoff.__executeServer(opts));
var cloneDropoff = createServerFn({ method: "POST" }).validator((data) => data).handler(cloneDropoff_createServerFn_handler, async ({ data }) => {
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
	id: "37cdb77c55360fecae60b9343e42596713de6b1b30672dbee94f204ed52f7b7c",
	name: "saveVolunteerNeed",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => saveVolunteerNeed.__executeServer(opts));
var saveVolunteerNeed = createServerFn({ method: "POST" }).validator((data) => data).handler(saveVolunteerNeed_createServerFn_handler, async ({ data }) => {
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
	id: "7a7715332195fd94a16c63e9aa22a23863add98c7fac6ac774717c4201bf6ad2",
	name: "cloneVolunteerNeed",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => cloneVolunteerNeed.__executeServer(opts));
var cloneVolunteerNeed = createServerFn({ method: "POST" }).validator((data) => data).handler(cloneVolunteerNeed_createServerFn_handler, async ({ data }) => {
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
	id: "0629826eae4a9d9afa59bc5748f0c7fbab4c53a03764d317e09c2536384b0e85",
	name: "saveDonationMethod",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => saveDonationMethod.__executeServer(opts));
var saveDonationMethod = createServerFn({ method: "POST" }).validator((data) => data).handler(saveDonationMethod_createServerFn_handler, async ({ data }) => {
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
	id: "774b36648f3e0c69bf135b61015ff44af6758e714befff27b4716f18a2a771d3",
	name: "cloneDonationMethod",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => cloneDonationMethod.__executeServer(opts));
var cloneDonationMethod = createServerFn({ method: "POST" }).validator((data) => data).handler(cloneDonationMethod_createServerFn_handler, async ({ data }) => {
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
	id: "db61efa1bc4f1f06bb4001da8ee3cc1c00d467979441ad8c8884a878f35b9300",
	name: "deleteDropoff",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => deleteDropoff.__executeServer(opts));
var deleteDropoff = createServerFn({ method: "POST" }).validator((data) => data).handler(deleteDropoff_createServerFn_handler, async ({ data }) => {
	memoryStore.dropoffs = memoryStore.dropoffs.filter((d) => d.id !== data.id);
	return { success: true };
});
var deleteVolunteerNeed_createServerFn_handler = createServerRpc({
	id: "917e76a54e8687fe1946d9ef3870e11c3d324c8463bba0a27310e31f95b13632",
	name: "deleteVolunteerNeed",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => deleteVolunteerNeed.__executeServer(opts));
var deleteVolunteerNeed = createServerFn({ method: "POST" }).validator((data) => data).handler(deleteVolunteerNeed_createServerFn_handler, async ({ data }) => {
	memoryStore.volunteerNeeds = memoryStore.volunteerNeeds.filter((n) => n.id !== data.id);
	return { success: true };
});
var deleteDonationMethod_createServerFn_handler = createServerRpc({
	id: "ade39a45f847434c362e906eb82a2e4327cdda9d55882108cdb8f0ce55dc5568",
	name: "deleteDonationMethod",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => deleteDonationMethod.__executeServer(opts));
var deleteDonationMethod = createServerFn({ method: "POST" }).validator((data) => data).handler(deleteDonationMethod_createServerFn_handler, async ({ data }) => {
	memoryStore.donationMethods = memoryStore.donationMethods.filter((m) => m.id !== data.id);
	return { success: true };
});
var saveContentBlock_createServerFn_handler = createServerRpc({
	id: "6dde606e2d1ffa2769ec96b8599e430b54d13760c0c036cc8bca135f74a0ad0c",
	name: "saveContentBlock",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => saveContentBlock.__executeServer(opts));
var saveContentBlock = createServerFn({ method: "POST" }).validator((data) => data).handler(saveContentBlock_createServerFn_handler, async ({ data }) => {
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
	id: "287e40dd68e489db51129b9c49a7d596e0dbc63e6fd4fca99df71e180520a8f7",
	name: "deleteContentBlock",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => deleteContentBlock.__executeServer(opts));
var deleteContentBlock = createServerFn({ method: "POST" }).validator((data) => data).handler(deleteContentBlock_createServerFn_handler, async ({ data }) => {
	delete memoryStore.contentBlocks[data.key];
	return { success: true };
});
var reorderItems_createServerFn_handler = createServerRpc({
	id: "b103cc8f2de81b4531c7798f0a563c0dd12ea24c7dab08c094976eda398d9dce",
	name: "reorderItems",
	filename: "src/routes/admin/api/-data.ts"
}, (opts) => reorderItems.__executeServer(opts));
var reorderItems = createServerFn({ method: "POST" }).validator((data) => data).handler(reorderItems_createServerFn_handler, async ({ data }) => {
	memoryStore[data.type] = data.items;
	return { success: true };
});
//#endregion
export { cloneDonationMethod_createServerFn_handler, cloneDropoff_createServerFn_handler, clonePage_createServerFn_handler, cloneVolunteerNeed_createServerFn_handler, deleteContentBlock_createServerFn_handler, deleteDonationMethod_createServerFn_handler, deleteDropoff_createServerFn_handler, deletePage_createServerFn_handler, deleteVolunteerNeed_createServerFn_handler, getAdminData_createServerFn_handler, reorderItems_createServerFn_handler, saveContentBlock_createServerFn_handler, saveDonationMethod_createServerFn_handler, saveDropoff_createServerFn_handler, savePage_createServerFn_handler, saveVolunteerNeed_createServerFn_handler };
