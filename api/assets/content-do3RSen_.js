import { createContext, useContext, useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";
//#region src/lib/i18n.tsx
var LangContext = createContext({
	lang: "en",
	setLang: () => {},
	t: (en) => en
});
function LangProvider({ children }) {
	const [lang, setLangState] = useState("en");
	useEffect(() => {
		const saved = localStorage.getItem("bol-lang");
		if (saved === "en" || saved === "es") setLangState(saved);
	}, []);
	useEffect(() => {
		document.documentElement.lang = lang;
	}, [lang]);
	const setLang = (l) => {
		setLangState(l);
		localStorage.setItem("bol-lang", l);
	};
	const t = (en, es) => lang === "es" ? es || en : en || es;
	return /* @__PURE__ */ jsx(LangContext.Provider, {
		value: {
			lang,
			setLang,
			t
		},
		children
	});
}
var useLang = () => useContext(LangContext);
//#endregion
//#region src/lib/content.ts
var SYSTEM_PATHS = {
	home: "/",
	values: "/values",
	help: "/help",
	volunteer: "/volunteer",
	"drop-off": "/drop-off",
	donate: "/donate",
	contact: "/contact"
};
var pagePath = (p) => p.is_system ? SYSTEM_PATHS[p.slug] ?? "/" : `/p/${p.slug}`;
var contentBlocks = {
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
	},
	stat_1: {
		en: "500+|Families helped monthly",
		es: "500+|Familias ayudadas mensualmente"
	},
	stat_2: {
		en: "50+|Volunteers",
		es: "50+|Voluntarios"
	},
	stat_3: {
		en: "10+|Years serving",
		es: "10+|Años sirviendo"
	},
	stat_4: {
		en: "100%|Community funded",
		es: "100%|Financiado por la comunidad"
	},
	programs: {
		en: "Weekly food packs|Community garden|Holiday celebrations|Kids' activities",
		es: "Despensas semanales|Huerto comunitario|Celebraciones navideñas|Actividades para niños"
	},
	mission_title: {
		en: "Our Mission",
		es: "Nuestra Misión"
	},
	mission_body: {
		en: "To provide food, dignity and community to families in need across Playa del Carmen.",
		es: "Proveer alimentos, dignidad y comunidad a familias necesitadas en Playa del Carmen."
	},
	story_body: {
		en: "What started as a small outreach has grown into a weekly lifeline for hundreds. Every despensa packed carries not just food, but hope.",
		es: "Lo que comenzó como una pequeña ayuda ha crecido hasta ser un salvavidas semanal para cientos. Cada despensa lleva no solo alimentos, sino esperanza."
	},
	value_mission: {
		en: "To serve our community with love, providing food and support to those who need it most.",
		es: "Servir a nuestra comunidad con amor, proveyendo alimentos y apoyo a quienes más lo necesitan."
	},
	value_vision: {
		en: "A Playa del Carmen where no family goes hungry and everyone feels valued.",
		es: "Una Playa del Carmen donde ninguna familia pase hambre y todos se sientan valorados."
	},
	value_objective: {
		en: "Distribute weekly food packs, run community programs, and create spaces of belonging.",
		es: "Distribuir despensas semanales, ejecutar programas comunitarios y crear espacios de pertenencia."
	},
	value_faith: {
		en: "We are a non-denominational Christian ministry. Our faith motivates our service, but we serve everyone regardless of belief.",
		es: "Somos un ministerio cristiano no denominacional. Nuestra fe motiva nuestro servicio, pero servimos a todos sin importar sus creencias."
	},
	value_logo: {
		en: "The three circles represent the Trinity — Father, Son, and Holy Spirit — and our three pillars: Faith, Service, Community. The colors reflect creation (green), sacrifice (red), and heaven (blue).",
		es: "Los tres círculos representan la Trinidad — Padre, Hijo y Espíritu Santo — y nuestros tres pilares: Fe, Servicio, Comunidad. Los colores reflejan la creación (verde), el sacrificio (rojo) y el cielo (azul)."
	},
	values_intro: {
		en: "Everything we do flows from these foundational beliefs.",
		es: "Todo lo que hacemos fluye de estas creencias fundamentales."
	},
	volunteer_intro: {
		en: "Join our team of dedicated volunteers. No experience needed — just a willing heart.",
		es: "Únete a nuestro equipo de voluntarios dedicados. No se necesita experiencia — solo un corazón dispuesto."
	},
	volunteer_tagline: {
		en: "Every hour you give helps a family eat.",
		es: "Cada hora que das ayuda a una familia a comer."
	},
	help_food: {
		en: "Food for weekly care packages",
		es: "Alimentos para despensas semanales"
	},
	help_food_desc: {
		en: "Rice, beans, oil, pasta, canned goods, fresh produce when available.",
		es: "Arroz, frijoles, aceite, pasta, enlatados, productos frescos cuando hay."
	},
	help_gifts: {
		en: "Christmas & Día de Reyes gifts",
		es: "Regalos de Navidad y Día de Reyes"
	},
	help_gifts_desc: {
		en: "New toys for children ages 0-12. We also need wrapping paper and tape.",
		es: "Juguetes nuevos para niños de 0-12 años. También necesitamos papel de regalo y cinta."
	},
	help_sponsor: {
		en: "Sponsor a Family",
		es: "Apadrina una Familia"
	},
	help_sponsor_desc: {
		en: "$50/month provides a weekly despensa for a family of four. You'll receive updates and photos.",
		es: "$50/mes provee una despensa semanal para una familia de cuatro. Recibirás actualizaciones y fotos."
	},
	drop_off_intro: {
		en: "Local businesses accepting donations during business hours.",
		es: "Negocios locales aceptando donativos en horario comercial."
	},
	donate_intro: {
		en: "Every peso goes directly to food and programs. We're 100% volunteer-run.",
		es: "Cada peso va directamente a alimentos y programas. Somos 100% dirigidos por voluntarios."
	},
	donate_stripe: {
		en: "Credit/Debit Card (Stripe)",
		es: "Tarjeta de Crédito/Débito (Stripe)"
	},
	donate_paypal: {
		en: "PayPal (USA & Canada tax-deductible)",
		es: "PayPal (deducible de impuestos en USA y Canadá)"
	},
	donate_oxxo: {
		en: "OXXO (Mexico)",
		es: "OXXO (México)"
	},
	donate_bank: {
		en: "Mexican Bank Transfer",
		es: "Transferencia Bancaria Mexicana"
	},
	donate_bank_details: {
		en: "BBVA | Cuenta: 0123456789 | CLABE: 012180001234567890 | Ref: BOL",
		es: "BBVA | Cuenta: 0123456789 | CLABE: 012180001234567890 | Ref: BOL"
	},
	donate_ref_note: {
		en: "Please reference your donation as BOL.",
		es: "Por favor referencia tu donativo como BOL."
	},
	contact_intro: {
		en: "We'd love to hear from you. Reach out any way that works for you.",
		es: "Nos encantaría saber de ti. Contáctanos como prefieras."
	},
	contact_email: {
		en: "BreathOfLifePDC@gmail.com",
		es: "BreathOfLifePDC@gmail.com"
	},
	contact_phone: {
		en: "+52 984 123 4567",
		es: "+52 984 123 4567"
	},
	contact_whatsapp: {
		en: "WhatsApp Group",
		es: "Grupo de WhatsApp"
	},
	contact_address: {
		en: "Playa del Carmen, Quintana Roo, Mexico",
		es: "Playa del Carmen, Quintana Roo, México"
	},
	nav_home: {
		en: "Home",
		es: "Inicio"
	},
	nav_values: {
		en: "Values",
		es: "Valores"
	},
	nav_help: {
		en: "How to Help",
		es: "Cómo Ayudar"
	},
	nav_volunteer: {
		en: "Volunteer",
		es: "Voluntariado"
	},
	nav_dropoff: {
		en: "Drop-off",
		es: "Entrega"
	},
	nav_donate: {
		en: "Donate",
		es: "Donar"
	},
	nav_contact: {
		en: "Contact",
		es: "Contacto"
	},
	nav_admin: {
		en: "Admin",
		es: "Admin"
	},
	nav_login: {
		en: "Login",
		es: "Entrar"
	},
	nav_logout: {
		en: "Logout",
		es: "Salir"
	},
	donate_cta: {
		en: "Donate",
		es: "Donar"
	},
	volunteer_cta: {
		en: "Volunteer",
		es: "Voluntario"
	},
	learn_more: {
		en: "Learn more",
		es: "Saber más"
	},
	sign_up: {
		en: "Sign up",
		es: "Inscribirse"
	},
	get_directions: {
		en: "Directions",
		es: "Cómo llegar"
	},
	loading: {
		en: "Loading...",
		es: "Cargando..."
	},
	error_load: {
		en: "Failed to load",
		es: "Error al cargar"
	}
};
var pages = [
	{
		id: "home",
		slug: "home",
		label_en: "Home",
		label_es: "Inicio",
		title_en: "Breath of Life PDC — Caring in Action",
		title_es: "Aliento de Vida PDC — Cuidado en Acción",
		body_en: "",
		body_es: "",
		sort_order: 0,
		visible: true,
		is_system: true
	},
	{
		id: "values",
		slug: "values",
		label_en: "Values",
		label_es: "Valores",
		title_en: "Foundational Values & Beliefs",
		title_es: "Valores y creencias fundamentales",
		body_en: "",
		body_es: "",
		sort_order: 1,
		visible: true,
		is_system: true
	},
	{
		id: "help",
		slug: "help",
		label_en: "How to Help",
		label_es: "Cómo Ayudar",
		title_en: "How You Can Help",
		title_es: "Cómo Puedes Ayudar",
		body_en: "",
		body_es: "",
		sort_order: 2,
		visible: true,
		is_system: true
	},
	{
		id: "volunteer",
		slug: "volunteer",
		label_en: "Volunteer",
		label_es: "Voluntariado",
		title_en: "Volunteer",
		title_es: "Voluntariado",
		body_en: "",
		body_es: "",
		sort_order: 3,
		visible: true,
		is_system: true
	},
	{
		id: "drop-off",
		slug: "drop-off",
		label_en: "Drop-off",
		label_es: "Entrega",
		title_en: "Drop-Off Points",
		title_es: "Puntos de Entrega",
		body_en: "",
		body_es: "",
		sort_order: 4,
		visible: true,
		is_system: true
	},
	{
		id: "donate",
		slug: "donate",
		label_en: "Donate",
		label_es: "Donar",
		title_en: "Donate",
		title_es: "Donar",
		body_en: "",
		body_es: "",
		sort_order: 5,
		visible: true,
		is_system: true
	},
	{
		id: "contact",
		slug: "contact",
		label_en: "Contact",
		label_es: "Contacto",
		title_en: "Contact Us",
		title_es: "Contáctanos",
		body_en: "",
		body_es: "",
		sort_order: 6,
		visible: true,
		is_system: true
	},
	{
		id: "3",
		slug: "about",
		label_en: "About Us",
		label_es: "Sobre Nosotros",
		title_en: "About Breath of Life PDC",
		title_es: "Sobre Aliento de Vida PDC",
		body_en: "Breath of Life PDC is a community charity based in Playa del Carmen, Mexico. We provide weekly food packages (despensas) to families in need, run community programs, and create spaces of belonging.",
		body_es: "Aliento de Vida PDC es una organización comunitaria en Playa del Carmen, México. Proporcionamos paquetes semanales de alimentos (despensas) a familias necesitadas, ejecutamos programas comunitarios y creamos espacios de pertenencia.",
		sort_order: 7,
		visible: true,
		is_system: false
	},
	{
		id: "4",
		slug: "team",
		label_en: "Our Team",
		label_es: "Nuestro Equipo",
		title_en: "Meet Our Volunteers",
		title_es: "Conoce a Nuestros Voluntarios",
		body_en: "Our work is made possible by dedicated volunteers who pack despensas, run events, and build community every week.",
		body_es: "Nuestro trabajo es posible gracias a voluntarios dedicados que arman despensas, organizan eventos y construyen comunidad cada semana.",
		sort_order: 8,
		visible: true,
		is_system: false
	}
];
var dropoffs = [{
	id: "1",
	name: "Roma Spaghetti",
	address: "Calle 34, entre 5ta y 10ma Av",
	hours_en: "Mon-Sat 12pm-10pm",
	hours_es: "Lun-Sáb 12pm-10pm",
	phone: "+52 984 111 2222",
	map_url: "https://maps.google.com/?q=Roma+Spaghetti+Playa+del+Carmen",
	image: "",
	visible: true,
	sort_order: 1
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
}];
var volunteerNeeds = [
	{
		id: "1",
		title_en: "Food Packing",
		title_es: "Empaque de Alimentos",
		desc_en: "Help assemble weekly despensas every Tuesday morning.",
		desc_es: "Ayuda a armar despensas semanales cada martes por la mañana.",
		image: "",
		visible: true,
		sort_order: 1
	},
	{
		id: "2",
		title_en: "Garden Sales",
		title_es: "Ventas de Huerto",
		desc_en: "Run the weekend plant/veggie sale to raise funds.",
		desc_es: "Organiza la venta de plantas/verduras del fin de semana para recaudar fondos.",
		image: "",
		visible: true,
		sort_order: 2
	},
	{
		id: "3",
		title_en: "Event Support",
		title_es: "Apoyo en Eventos",
		desc_en: "Help with holiday celebrations, kids' activities, and community gatherings.",
		desc_es: "Ayuda en celebraciones navideñas, actividades para niños y reuniones comunitarias.",
		image: "",
		visible: true,
		sort_order: 3
	}
];
var donationMethods = [
	{
		id: "1",
		name_en: "Credit/Debit Card",
		name_es: "Tarjeta de Crédito/Débito",
		details_en: "Secure via Stripe. One-time or monthly.",
		details_es: "Seguro via Stripe. Único o mensual.",
		link: "https://donate.stripe.com/bol",
		qr: "https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=https://donate.stripe.com/bol",
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
		qr: "https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=https://paypal.me/BreathOfLifePDC",
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
		qr: "https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=OXXO+payment+reference+BOL",
		image: "",
		visible: true,
		sort_order: 3
	},
	{
		id: "4",
		name_en: "Bank Transfer (Mexico)",
		name_es: "Transferencia Bancaria (México)",
		details_en: "BBVA | Cuenta: 0123456789 | CLABE: 012180001234567890 | Ref: BOL",
		details_es: "BBVA | Cuenta: 0123456789 | CLABE: 012180001234567890 | Ref: BOL",
		link: "",
		qr: "https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=BBVA+transfer+reference+BOL",
		image: "",
		visible: true,
		sort_order: 4
	}
];
//#endregion
export { pages as a, useLang as c, pagePath as i, donationMethods as n, volunteerNeeds as o, dropoffs as r, LangProvider as s, contentBlocks as t };
