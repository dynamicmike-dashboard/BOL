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
		en: "Of course, cash donations are always very gratefully received and can go a long way to helping our local community as we may even be able to arrange discounts on food and necessities when paying by cash.",
		es: "Por supuesto, las donaciones en efectivo siempre son muy bien recibidas y pueden ayudar mucho a nuestra comunidad local, ya que incluso podemos conseguir descuentos en alimentos y necesidades al pagar en efectivo."
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
		body_en: `<section class="relative overflow-hidden">
  <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
    <div>
      <p class="animate-fade-up text-sm font-semibold uppercase tracking-widest text-accent">Caring in Action</p>
      <h1 class="animate-fade-up mt-4 text-5xl font-semibold leading-[1.05] text-primary md:text-7xl" style="animation-delay: 80ms;">Breath of Life PDC</h1>
      <p class="animate-fade-up mt-6 max-w-xl text-lg text-muted-foreground" style="animation-delay: 160ms;">Helping less-fortunate families in Playa del Carmen through food, support and community. Donate, volunteer or drop off items.</p>
      <div class="animate-fade-up mt-8 flex flex-wrap gap-3" style="animation-delay: 240ms">
        <a href="/donate" class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg> Donate</a>
        <a href="/volunteer" class="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">Volunteer <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
    <div class="relative animate-fade-up" style="animation-delay: 200ms">
      <div class="absolute -inset-4 -z-10 rotate-3 rounded-[2.5rem] bg-accent/25" />
      <div class="absolute -inset-4 -z-10 -rotate-2 rounded-[2.5rem] bg-sky/25" />
      <img src="/hero.jpg" alt="Volunteers sharing groceries with families" width="1600" height="1008" class="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl" />
    </div>
  </div>
</section>

<section class="bg-primary text-primary-foreground">
  <div class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 md:grid-cols-4">
    <div class="text-center"><div class="font-display text-4xl font-semibold md:text-5xl">500+</div><div class="mt-1 text-sm uppercase tracking-wider opacity-75">Families helped monthly</div></div>
    <div class="text-center"><div class="font-display text-4xl font-semibold md:text-5xl">50+</div><div class="mt-1 text-sm uppercase tracking-wider opacity-75">Volunteers</div></div>
    <div class="text-center"><div class="font-display text-4xl font-semibold md:text-5xl">10+</div><div class="mt-1 text-sm uppercase tracking-wider opacity-75">Years serving</div></div>
    <div class="text-center"><div class="font-display text-4xl font-semibold md:text-5xl">100%</div><div class="mt-1 text-sm uppercase tracking-wider opacity-75">Community funded</div></div>
  </div>
</section>

<section class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 md:grid-cols-2">
  <Reveal>
    <img src="/packing.jpg" alt="Volunteers packing food boxes" loading="lazy" width="1200" height="912" class="rounded-[2rem] object-cover shadow-xl" />
  </Reveal>
  <Reveal delay={120}>
    <h2 class="text-4xl font-semibold text-primary md:text-5xl">Our Mission</h2>
    <p class="mt-4 text-lg text-muted-foreground">To provide food, dignity and community to families in need across Playa del Carmen.</p>
    <p class="mt-4 text-muted-foreground">What started as a small outreach has grown into a weekly lifeline for hundreds. Every despensa packed carries not just food, but hope.</p>
    <a href="/values" class="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:gap-3 transition-all">Our values & beliefs <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
  </Reveal>
</section>

<section class="bg-sand/60 py-24">
  <div class="mx-auto max-w-7xl px-4">
    <Reveal><h2 class="text-center text-4xl font-semibold text-primary">Community programs</h2></Reveal>
    <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Reveal delay={0}><div class="h-full rounded-2xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display font-semibold text-primary">1</div><p class="font-medium">Weekly food packs</p></div></Reveal>
      <Reveal delay={80}><div class="h-full rounded-2xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display font-semibold text-primary">2</div><p class="font-medium">Community garden</p></div></Reveal>
      <Reveal delay={160}><div class="h-full rounded-2xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display font-semibold text-primary">3</div><p class="font-medium">Holiday celebrations</p></div></Reveal>
      <Reveal delay={240}><div class="h-full rounded-2xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display font-semibold text-primary">4</div><p class="font-medium">Kids' activities</p></div></Reveal>
    </div>
  </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-24">
  <div class="grid gap-6 md:grid-cols-3">
    <Reveal delay={0}><a href="/help" class="group block h-full rounded-3xl border bg-card p-8 transition hover:border-accent hover:shadow-xl"><svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0v6v0M12 21l3-3m0 0l-3-3m3 3H3"/></svg><h3 class="mt-4 text-2xl font-semibold text-primary">How you can help</h3><p class="mt-2 text-muted-foreground">Food, clothes, holiday gifts and sponsoring a family.</p></a></Reveal>
    <Reveal delay={100}><a href="/volunteer" class="group block h-full rounded-3xl border bg-card p-8 transition hover:border-accent hover:shadow-xl"><svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg><h3 class="mt-4 text-2xl font-semibold text-primary">Volunteer</h3><p class="mt-2 text-muted-foreground">Give your time — join our weekly team.</p></a></Reveal>
    <Reveal delay={200}><a href="/drop-off" class="group block h-full rounded-3xl border bg-card p-8 transition hover:border-accent hover:shadow-xl"><svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg><h3 class="mt-4 text-2xl font-semibold text-primary">Drop-off points</h3><p class="mt-2 text-muted-foreground">Find a business near you accepting donations.</p></a></Reveal>
  </div>
</section>`,
		body_es: `<section class="relative overflow-hidden">
  <div class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
    <div>
      <p class="animate-fade-up text-sm font-semibold uppercase tracking-widest text-accent">Cuidado en Acción</p>
      <h1 class="animate-fade-up mt-4 text-5xl font-semibold leading-[1.05] text-primary md:text-7xl" style="animation-delay: 80ms;">Aliento de Vida PDC</h1>
      <p class="animate-fade-up mt-6 max-w-xl text-lg text-muted-foreground" style="animation-delay: 160ms;">Ayudando a familias menos afortunadas en Playa del Carmen con alimentos, apoyo y comunidad. Dona, sé voluntario o entrega artículos.</p>
      <div class="animate-fade-up mt-8 flex flex-wrap gap-3" style="animation-delay: 240ms">
        <a href="/donate" class="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5"><svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg> Donar</a>
        <a href="/volunteer" class="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">Sé voluntario <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
      </div>
    </div>
    <div class="relative animate-fade-up" style="animation-delay: 200ms">
      <div class="absolute -inset-4 -z-10 rotate-3 rounded-[2.5rem] bg-accent/25" />
      <div class="absolute -inset-4 -z-10 -rotate-2 rounded-[2.5rem] bg-sky/25" />
      <img src="/hero.jpg" alt="Voluntarios entregando despensas a familias" width="1600" height="1008" class="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl" />
    </div>
  </div>
</section>

<section class="bg-primary text-primary-foreground">
  <div class="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 md:grid-cols-4">
    <div class="text-center"><div class="font-display text-4xl font-semibold md:text-5xl">500+</div><div class="mt-1 text-sm uppercase tracking-wider opacity-75">Familias ayudadas mensualmente</div></div>
    <div class="text-center"><div class="font-display text-4xl font-semibold md:text-5xl">50+</div><div class="mt-1 text-sm uppercase tracking-wider opacity-75">Voluntarios</div></div>
    <div class="text-center"><div class="font-display text-4xl font-semibold md:text-5xl">10+</div><div class="mt-1 text-sm uppercase tracking-wider opacity-75">Años sirviendo</div></div>
    <div class="text-center"><div class="font-display text-4xl font-semibold md:text-5xl">100%</div><div class="mt-1 text-sm uppercase tracking-wider opacity-75">Financiado por la comunidad</div></div>
  </div>
</section>

<section class="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 md:grid-cols-2">
  <Reveal>
    <img src="/packing.jpg" alt="Voluntarios armando despensas" loading="lazy" width="1200" height="912" class="rounded-[2rem] object-cover shadow-xl" />
  </Reveal>
  <Reveal delay={120}>
    <h2 class="text-4xl font-semibold text-primary md:text-5xl">Nuestra Misión</h2>
    <p class="mt-4 text-lg text-muted-foreground">Proveer alimentos, dignidad y comunidad a familias necesitadas en Playa del Carmen.</p>
    <p class="mt-4 text-muted-foreground">Lo que comenzó como una pequeña ayuda ha crecido hasta ser un salvavidas semanal para cientos. Cada despensa lleva no solo alimentos, sino esperanza.</p>
    <a href="/values" class="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:gap-3 transition-all">Nuestros valores y creencias <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></a>
  </Reveal>
</section>

<section class="bg-sand/60 py-24">
  <div class="mx-auto max-w-7xl px-4">
    <Reveal><h2 class="text-center text-4xl font-semibold text-primary">Programas comunitarios</h2></Reveal>
    <div class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Reveal delay={0}><div class="h-full rounded-2xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display font-semibold text-primary">1</div><p class="font-medium">Despensas semanales</p></div></Reveal>
      <Reveal delay={80}><div class="h-full rounded-2xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display font-semibold text-primary">2</div><p class="font-medium">Huerto comunitario</p></div></Reveal>
      <Reveal delay={160}><div class="h-full rounded-2xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display font-semibold text-primary">3</div><p class="font-medium">Celebraciones navideñas</p></div></Reveal>
      <Reveal delay={240}><div class="h-full rounded-2xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display font-semibold text-primary">4</div><p class="font-medium">Actividades para niños</p></div></Reveal>
    </div>
  </div>
</section>

<section class="mx-auto max-w-7xl px-4 py-24">
  <div class="grid gap-6 md:grid-cols-3">
    <Reveal delay={0}><a href="/help" class="group block h-full rounded-3xl border bg-card p-8 transition hover:border-accent hover:shadow-xl"><svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0v6v0M12 21l3-3m0 0l-3-3m3 3H3"/></svg><h3 class="mt-4 text-2xl font-semibold text-primary">Cómo puedes ayudar</h3><p class="mt-2 text-muted-foreground">Alimentos, ropa, regalos navideños y apadrinar una familia.</p></a></Reveal>
    <Reveal delay={100}><a href="/volunteer" class="group block h-full rounded-3xl border bg-card p-8 transition hover:border-accent hover:shadow-xl"><svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg><h3 class="mt-4 text-2xl font-semibold text-primary">Voluntariado</h3><p class="mt-2 text-muted-foreground">Dona tu tiempo — únete a nuestro equipo semanal.</p></a></Reveal>
    <Reveal delay={200}><a href="/drop-off" class="group block h-full rounded-3xl border bg-card p-8 transition hover:border-accent hover:shadow-xl"><svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg><h3 class="mt-4 text-2xl font-semibold text-primary">Puntos de entrega</h3><p class="mt-2 text-muted-foreground">Encuentra un negocio cerca que recibe donativos.</p></a></Reveal>
  </div>
</section>`,
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
		body_en: `<div class="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2">
  <div class="h-full rounded-3xl border bg-card p-8">
    <svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Mission</h2>
    <p class="mt-3 text-muted-foreground">To serve our community with love, providing food and support to those who need it most.</p>
  </div>
  <div class="h-full rounded-3xl border bg-card p-8">
    <svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Vision</h2>
    <p class="mt-3 text-muted-foreground">A Playa del Carmen where no family goes hungry and everyone feels valued.</p>
  </div>
  <div class="h-full rounded-3xl border bg-card p-8">
    <svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Objective</h2>
    <p class="mt-3 text-muted-foreground">Distribute weekly food packs, run community programs, and create spaces of belonging.</p>
  </div>
  <div class="h-full rounded-3xl border bg-card p-8">
    <svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19.5A7 7 0 1115.5 6 7 7 0 114 19.5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12H4m16 0H4m16 0H4m16 0H4"/></svg>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Our Faith</h2>
    <p class="mt-3 text-muted-foreground">We are a non-denominational Christian ministry. Our faith motivates our service, but we serve everyone regardless of belief.</p>
  </div>
</div>
<div class="mx-auto max-w-4xl px-4">
  <div class="rounded-3xl bg-primary p-10 text-primary-foreground">
    <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v1.5M7 21h1.5v-.5M21 12h-2.4m0 0l-3-3m3 3l3-3M3.345 12.24l1.16-1.16a5 5 0 017.072 0l4.718 4.718M9.255 12.76l1.16 1.16a5 5 0 01-7.072 0l-4.718-4.718"/></svg>
    <h2 class="mt-4 text-3xl font-semibold">The meaning of our logo</h2>
    <div class="mt-6 flex gap-3">
      <span class="h-10 w-10 rounded-full bg-accent" />
      <span class="h-10 w-10 rounded-full bg-secondary-foreground ring-2 ring-primary-foreground/30" />
      <span class="h-10 w-10 rounded-full bg-sky" />
    </div>
    <p class="mt-6 text-lg opacity-90">The three circles represent the Trinity — Father, Son, and Holy Spirit — and our three pillars: Faith, Service, Community. The colors reflect creation (green), sacrifice (red), and heaven (blue).</p>
    <p class="mt-4 italic opacity-80">At Breath of Life, we believe that service and love are the reflection of true faith in action.</p>
  </div>
</div>`,
		body_es: `<div class="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2">
  <div class="h-full rounded-3xl border bg-card p-8">
    <svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Nuestra Misión</h2>
    <p class="mt-3 text-muted-foreground">Servir a nuestra comunidad con amor, proveyendo alimentos y apoyo a quienes más lo necesitan.</p>
  </div>
  <div class="h-full rounded-3xl border bg-card p-8">
    <svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Nuestra Visión</h2>
    <p class="mt-3 text-muted-foreground">Una Playa del Carmen donde ninguna familia pase hambre y todos se sientan valorados.</p>
  </div>
  <div class="h-full rounded-3xl border bg-card p-8">
    <svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Nuestro Objetivo</h2>
    <p class="mt-3 text-muted-foreground">Distribuir despensas semanales, ejecutar programas comunitarios y crear espacios de pertenencia.</p>
  </div>
  <div class="h-full rounded-3xl border bg-card p-8">
    <svg class="h-8 w-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19.5A7 7 0 1115.5 6 7 7 0 114 19.5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12H4m16 0H4m16 0H4m16 0H4"/></svg>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Nuestra Fe</h2>
    <p class="mt-3 text-muted-foreground">Somos un ministerio cristiano no denominacional. Nuestra fe motiva nuestro servicio, pero servimos a todos sin importar sus creencias.</p>
  </div>
</div>
<div class="mx-auto max-w-4xl px-4">
  <div class="rounded-3xl bg-primary p-10 text-primary-foreground">
    <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v1.5M7 21h1.5v-.5M21 12h-2.4m0 0l-3-3m3 3l3-3M3.345 12.24l1.16-1.16a5 5 0 017.072 0l4.718 4.718M9.255 12.76l1.16 1.16a5 5 0 01-7.072 0l-4.718-4.718"/></svg>
    <h2 class="mt-4 text-3xl font-semibold">El significado de nuestro logo</h2>
    <div class="mt-6 flex gap-3">
      <span class="h-10 w-10 rounded-full bg-accent" />
      <span class="h-10 w-10 rounded-full bg-secondary-foreground ring-2 ring-primary-foreground/30" />
      <span class="h-10 w-10 rounded-full bg-sky" />
    </div>
    <p class="mt-6 text-lg opacity-90">Los tres círculos representan la Trinidad — Padre, Hijo y Espíritu Santo — y nuestros tres pilares: Fe, Servicio, Comunidad. Los colores reflejan la creación (verde), el sacrificio (rojo) y el cielo (azul).</p>
    <p class="mt-4 italic opacity-80">En Breath of Life, creemos que el servicio y el amor son el reflejo de la verdadera fe en acción.</p>
  </div>
</div>`,
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
		body_en: `<section class="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2">
  <div class="h-full rounded-3xl border bg-card p-8 transition hover:shadow-lg">
    <div class="inline-flex rounded-2xl bg-secondary p-3">
      <svg class="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7l8 4"/></svg>
    </div>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Contributions</h2>
    <p class="mt-3 text-muted-foreground">Rice, beans, oil, pasta, canned goods, fresh produce when available.</p>
  </div>
  <div class="h-full rounded-3xl border bg-card p-8 transition hover:shadow-lg">
    <div class="inline-flex rounded-2xl bg-secondary p-3">
      <svg class="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
    </div>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Food for weekly care packages</h2>
    <p class="mt-3 text-muted-foreground">Rice, beans, oil, pasta, canned goods, fresh produce when available.</p>
  </div>
  <div class="h-full rounded-3xl border bg-card p-8 transition hover:shadow-lg">
    <div class="inline-flex rounded-2xl bg-secondary p-3">
      <svg class="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 114 0v13m0 0l4-4m-4 4l-4-4"/></svg>
    </div>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Holiday gift donations</h2>
    <p class="mt-3 text-muted-foreground">New toys for children ages 0-12. We also need wrapping paper and tape.</p>
  </div>
  <div class="h-full rounded-3xl border bg-card p-8 transition hover:shadow-lg">
    <div class="inline-flex rounded-2xl bg-secondary p-3">
      <svg class="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22H5a2 2 0 01-2-2v-2M15 19h6a2 2 0 002-2V7a2 2 0 00-2-2h-2"/></svg>
    </div>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Sponsor a Family</h2>
    <p class="mt-3 text-muted-foreground">$50/month provides a weekly despensa for a family of four. You'll receive updates and photos.</p>
  </div>
</section>
<section class="mx-auto max-w-6xl px-4">
  <div class="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-br from-primary to-accent p-10 text-primary-foreground md:flex-row md:items-center md:justify-between">
    <div class="flex gap-4">
      <svg class="h-10 w-10 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V3a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h3m6-3a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
      <div>
        <h2 class="text-3xl font-semibold">Christmas & Día de Reyes</h2>
        <p class="mt-2 max-w-2xl opacity-90">Host a toy drive at your business or meeting, or donate refreshments for our celebrations. We provide a collection box, signage and a list of needs.</p>
      </div>
    </div>
    <a href="/contact" class="rounded-full bg-background px-6 py-3 font-semibold text-primary">Get in touch</a>
  </div>
</section>`,
		body_es: `<section class="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2">
  <div class="h-full rounded-3xl border bg-card p-8 transition hover:shadow-lg">
    <div class="inline-flex rounded-2xl bg-secondary p-3">
      <svg class="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7l8 4"/></svg>
    </div>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Aportaciones</h2>
    <p class="mt-3 text-muted-foreground">Arroz, frijoles, aceite, pasta, enlatados, productos frescos cuando hay.</p>
  </div>
  <div class="h-full rounded-3xl border bg-card p-8 transition hover:shadow-lg">
    <div class="inline-flex rounded-2xl bg-secondary p-3">
      <svg class="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
    </div>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Alimentos para despensas semanales</h2>
    <p class="mt-3 text-muted-foreground">Arroz, frijoles, aceite, pasta, enlatados, productos frescos cuando hay.</p>
  </div>
  <div class="h-full rounded-3xl border bg-card p-8 transition hover:shadow-lg">
    <div class="inline-flex rounded-2xl bg-secondary p-3">
      <svg class="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 114 0v13m0 0l4-4m-4 4l-4-4"/></svg>
    </div>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Regalos de Navidad y Día de Reyes</h2>
    <p class="mt-3 text-muted-foreground">Juguetes nuevos para niños de 0-12 años. También necesitamos papel de regalo y cinta.</p>
  </div>
  <div class="h-full rounded-3xl border bg-card p-8 transition hover:shadow-lg">
    <div class="inline-flex rounded-2xl bg-secondary p-3">
      <svg class="h-7 w-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22H5a2 2 0 01-2-2v-2M15 19h6a2 2 0 002-2V7a2 2 0 00-2-2h-2"/></svg>
    </div>
    <h2 class="mt-4 text-2xl font-semibold text-primary">Apadrina una Familia</h2>
    <p class="mt-3 text-muted-foreground">$50/mes provee una despensa semanal para una familia de cuatro. Recibirás actualizaciones y fotos.</p>
  </div>
</section>
<section class="mx-auto max-w-6xl px-4">
  <div class="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-br from-primary to-accent p-10 text-primary-foreground md:flex-row md:items-center md:justify-between">
    <div class="flex gap-4">
      <svg class="h-10 w-10 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V3a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h3m6-3a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
      <div>
        <h2 class="text-3xl font-semibold">Navidad y Día de Reyes</h2>
        <p class="mt-2 max-w-2xl opacity-90">Organiza una colecta de juguetes en tu negocio o reunión, o dona refrigerios para nuestras celebraciones. Nosotros damos la caja, señalización y lista de necesidades.</p>
      </div>
    </div>
    <a href="/contact" class="rounded-full bg-background px-6 py-3 font-semibold text-primary">Contáctanos</a>
  </div>
</section>`,
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
		body_en: `<section class="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
  <div>
    <h2 class="text-3xl font-semibold text-primary">Opportunities</h2>
    <div class="mt-6 grid gap-4">
      <div class="rounded-2xl border-l-4 border-accent bg-card p-6 shadow-sm">
        <h3 class="text-xl font-semibold">Food Packing</h3>
        <p class="mt-1 text-muted-foreground">Help assemble weekly despensas every Tuesday morning.</p>
      </div>
      <div class="rounded-2xl border-l-4 border-accent bg-card p-6 shadow-sm">
        <h3 class="text-xl font-semibold">Garden Sales</h3>
        <p class="mt-1 text-muted-foreground">Run the weekend plant/veggie sale to raise funds.</p>
      </div>
      <div class="rounded-2xl border-l-4 border-accent bg-card p-6 shadow-sm">
        <h3 class="text-xl font-semibold">Event Support</h3>
        <p class="mt-1 text-muted-foreground">Help with holiday celebrations, kids' activities, and community gatherings.</p>
      </div>
    </div>
    <div class="mt-8 flex items-center gap-3 text-lg italic text-primary">
      <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
      Every hour you give helps a family eat.
    </div>
  </div>
  <div class="lg:col-span-1">
    <h2 class="mb-6 text-3xl font-semibold text-primary">Sign up</h2>
    <div class="grid gap-4 rounded-3xl border bg-card p-8 shadow-sm">
      <input placeholder="Your name" className="rounded-lg border bg-background px-3 py-2 text-sm" />
      <input type="email" placeholder="Email" className="rounded-lg border bg-background px-3 py-2 text-sm" />
      <input placeholder="WhatsApp / phone" className="rounded-lg border bg-background px-3 py-2 text-sm" />
      <textarea placeholder="How would you like to help? Availability?" rows={4} className="rounded-lg border bg-background px-3 py-2 text-sm" />
      <button className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">Sign me up</button>
    </div>
  </div>
</section>`,
		body_es: `<section class="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
  <div>
    <h2 class="text-3xl font-semibold text-primary">Oportunidades</h2>
    <div class="mt-6 grid gap-4">
      <div class="rounded-2xl border-l-4 border-accent bg-card p-6 shadow-sm">
        <h3 class="text-xl font-semibold">Empaque de Alimentos</h3>
        <p class="mt-1 text-muted-foreground">Ayuda a armar despensas semanales cada martes por la mañana.</p>
      </div>
      <div class="rounded-2xl border-l-4 border-accent bg-card p-6 shadow-sm">
        <h3 class="text-xl font-semibold">Ventas de Huerto</h3>
        <p class="mt-1 text-muted-foreground">Organiza la venta de plantas/verduras del fin de semana para recaudar fondos.</p>
      </div>
      <div class="rounded-2xl border-l-4 border-accent bg-card p-6 shadow-sm">
        <h3 class="text-xl font-semibold">Apoyo en Eventos</h3>
        <p class="mt-1 text-muted-foreground">Ayuda en celebraciones navideñas, actividades para niños y reuniones comunitarias.</p>
      </div>
    </div>
    <div class="mt-8 flex items-center gap-3 text-lg italic text-primary">
      <svg class="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
      Cada hora que das ayuda a una familia a comer.
    </div>
  </div>
  <div class="lg:col-span-1">
    <h2 class="mb-6 text-3xl font-semibold text-primary">Inscríbete</h2>
    <div class="grid gap-4 rounded-3xl border bg-card p-8 shadow-sm">
      <input placeholder="Tu nombre" class="rounded-lg border bg-background px-3 py-2 text-sm" />
      <input type="email" placeholder="Correo electrónico" class="rounded-lg border bg-background px-3 py-2 text-sm" />
      <input placeholder="WhatsApp / teléfono" class="rounded-lg border bg-background px-3 py-2 text-sm" />
      <textarea placeholder="¿Cómo te gustaría ayudar? ¿Disponibilidad?" rows="4" class="rounded-lg border bg-background px-3 py-2 text-sm" />
      <button class="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">Inscribirme</button>
    </div>
  </div>
</section>`,
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
		body_en: `<section class="mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-5">
  <div class="grid content-start gap-3 lg:col-span-2">
    <div class="rounded-2xl border bg-card p-5 shadow-sm">
      <h3 class="text-lg font-semibold text-primary">Roma Spaghetti</h3>
      <p class="mt-1 flex gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
        Calle 34, entre 5ta y 10ma Av
      </p>
      <p class="mt-1 flex gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        Mon-Sat 12pm-10pm
      </p>
      <p class="mt-1 flex gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 011.21.502l1.13 2.257a11.042 11.042 0 005.516-5.516l-2.257-1.13a1 1 0 01-.502-1.21l-4.493-1.498A1 1 0 0119 17H6a2 2 0 01-2-2V7a2 2 0 012-2h3.28"/></svg>
        +52 984 111 2222
      </p>
      <a href="https://maps.google.com/?q=Roma+Spaghetti+Playa+del+Carmen" target="_blank" rel="noreferrer" class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
        Directions
      </a>
    </div>
    <div class="rounded-2xl border bg-card p-5 shadow-sm">
      <h3 class="text-lg font-semibold text-primary">Pueblito Escondido Calle 38</h3>
      <p class="mt-1 flex gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
        Calle 38, entre 5ta y 10ma Av
      </p>
      <p class="mt-1 flex gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        Daily 8am-10pm
      </p>
      <p class="mt-1 flex gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 011.21.502l1.13 2.257a11.042 11.042 0 005.516 5.516l1.13 2.257a1 1 0 011.21.502l4.493 1.498a1 1 0 011.21.502l1.13 2.257a11.042 11.042 0 005.516-5.516l-2.257-1.13a1 1 0 01-.502-1.21l-4.493-1.498A1 1 0 0119 17H6a2 2 0 01-2-2V7a2 2 0 012-2h3.28"/></svg>
        +52 984 333 4444
      </p>
      <a href="https://maps.google.com/?q=Pueblito+Escondido+Calle+38+Playa+del+Carmen" target="_blank" rel="noreferrer" class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
        Directions
      </a>
    </div>
  </div>
  <div class="lg:col-span-3">
    <div class="sticky top-24 overflow-hidden rounded-3xl border shadow-xl">
      <iframe
        class="h-[420px] w-full lg:h-[600px]"
        loading="lazy"
        src="https://maps.google.com/maps?q=Roma+Spaghetti+Playa+del+Carmen&z=15&output=embed"
      />
    </div>
  </div>
</section>`,
		body_es: `<section class="mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-5">
  <div class="grid content-start gap-3 lg:col-span-2">
    <div class="rounded-2xl border bg-card p-5 shadow-sm">
      <h3 class="text-lg font-semibold text-primary">Roma Spaghetti</h3>
      <p class="mt-1 flex gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
        Calle 34, entre 5ta y 10ma Av
      </p>
      <p class="mt-1 flex gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        Lun-Sáb 12pm-10pm
      </p>
      <p class="mt-1 flex gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 011.21.502l4.493 1.498a1 1 0 011.21.502l1.13 2.257a11.042 11.042 0 005.516-5.516l-2.257-1.13a1 1 0 01-.502-1.21l-4.493-1.498A1 1 0 0119 17H6a2 2 0 01-2-2V7a2 2 0 012-2h3.28"/></svg>
        +52 984 111 2222
      </p>
      <a href="https://maps.google.com/?q=Roma+Spaghetti+Playa+del+Carmen" target="_blank" rel="noreferrer" class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
        Cómo llegar
      </a>
    </div>
    <div class="rounded-2xl border bg-card p-5 shadow-sm">
      <h3 class="text-lg font-semibold text-primary">Pueblito Escondido Calle 38</h3>
      <p class="mt-1 flex gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
        Calle 38, entre 5ta y 10ma Av
      </p>
      <p class="mt-1 flex gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        Diario 8am-10pm
      </p>
      <p class="mt-1 flex gap-2 text-sm text-muted-foreground">
        <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 011.21.502l4.493 1.498a1 1 0 011.21.502l1.13 2.257a11.042 11.042 0 005.516-5.516l-2.257-1.13a1 1 0 01-.502-1.21l-4.493-1.498A1 1 0 0119 17H6a2 2 0 01-2-2V7a2 2 0 012-2h3.28"/></svg>
        +52 984 333 4444
      </p>
      <a href="https://maps.google.com/?q=Pueblito+Escondido+Calle+38+Playa+del+Carmen" target="_blank" rel="noreferrer" class="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
        Cómo llegar
      </a>
    </div>
  </div>
  <div class="lg:col-span-3">
    <div class="sticky top-24 overflow-hidden rounded-3xl border shadow-xl">
      <iframe
        class="h-[420px] w-full lg:h-[600px]"
        loading="lazy"
        src="https://maps.google.com/maps?q=Roma+Spaghetti+Playa+del+Carmen&z=15&output=embed"
      />
    </div>
  </div>
</section>`,
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
		body_en: `<section class="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2">
  <div class="flex h-full flex-col gap-5 rounded-3xl border bg-card p-8 sm:flex-row">
    <div class="flex-1">
      <svg class="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
      <h2 class="mt-3 text-2xl font-semibold text-primary">Stripe</h2>
      <p class="mt-2 whitespace-pre-line text-muted-foreground">Secure via Stripe. One-time or monthly.</p>
      <a href="https://buy.stripe.com/00g7sy5O9aJRgdafYY" target="_blank" rel="noreferrer" class="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">Donate now <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>
    </div>
    <img alt="QR" loading="lazy" width="140" height="140" class="h-36 w-36 self-center rounded-xl border bg-card p-2" src="/QR-stripe-donate.webp" />
  </div>
  <div class="flex h-full flex-col gap-5 rounded-3xl border bg-card p-8 sm:flex-row">
    <div class="flex-1">
      <svg class="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
      <h2 class="mt-3 text-2xl font-semibold text-primary">PayPal</h2>
      <p class="mt-2 whitespace-pre-line text-muted-foreground">USA & Canada tax-deductible receipts available.<br>axansolustra@gmail.com</p>
      <a href="https://paypal.me/axansolustra" target="_blank" rel="noreferrer" class="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">Donate now <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>
    </div>
    <img alt="QR" loading="lazy" width="140" height="140" class="h-36 w-36 self-center rounded-xl border bg-card p-2" src="/QR-USA-and-Canada-Tax-Purposes.webp" />
  </div>
  <div class="flex h-full flex-col gap-5 rounded-3xl border bg-card p-8 sm:flex-row">
    <div class="flex-1">
      <svg class="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-.895 3-3 2m0 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2-.895-2-3-2m0-8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-.895 3-3 2"/></svg>
      <h2 class="mt-3 text-2xl font-semibold text-primary">OXXO</h2>
      <p class="mt-2 whitespace-pre-line text-muted-foreground">Pay cash at any OXXO in Mexico. Reference: BOL</p>
    </div>
    <img alt="QR" loading="lazy" width="140" height="140" class="h-36 w-36 self-center rounded-xl border bg-card p-2" src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=OXXO+payment+reference+BOL" />
  </div>
  <div class="flex h-full flex-col gap-5 rounded-3xl border bg-card p-8 sm:flex-row">
    <div class="flex-1">
      <svg class="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-.895 3-3 2m0 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2-.895-2-3-2m0-8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-.895 3-3 2"/></svg>
      <h2 class="mt-3 text-2xl font-semibold text-primary">Banco Azteca</h2>
      <p class="mt-2 whitespace-pre-line text-muted-foreground">Michele Avila Mendoza<br>Card: 4027 6661 1819 3043<br>CLABE: 127694013013508192</p>
    </div>
    <img alt="QR" loading="lazy" width="140" height="140" class="h-36 w-36 self-center rounded-xl border bg-card p-2" src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=Banco+Azteca+CLABE+127694013013508192" />
  </div>
  <div class="flex h-full flex-col gap-5 rounded-3xl border bg-card p-8 sm:flex-row">
    <div class="flex-1">
      <svg class="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-.895 3-3 2m0 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2-.895-2-3-2m0-8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-.895 3-3 2"/></svg>
      <h2 class="mt-3 text-2xl font-semibold text-primary">Mercado Pago W</h2>
      <p class="mt-2 whitespace-pre-line text-muted-foreground">Michele Avila Mendoza<br>CLABE: 722969010176925651</p>
    </div>
    <img alt="QR" loading="lazy" width="140" height="140" class="h-36 w-36 self-center rounded-xl border bg-card p-2" src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=Mercado+Pago+W+CLABE+722969010176925651" />
  </div>
</section>
<p class="mx-auto max-w-3xl px-4 text-center font-semibold text-primary mt-8">PLEASE REMEMBER TO REFERENCE YOUR DONATION AS BOL.<br>We accept cash donations at any of the drop off locations as well.</p>`,
		body_es: `<section class="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2">
  <div class="flex h-full flex-col gap-5 rounded-3xl border bg-card p-8 sm:flex-row">
    <div class="flex-1">
      <svg class="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
      <h2 class="mt-3 text-2xl font-semibold text-primary">Stripe</h2>
      <p class="mt-2 whitespace-pre-line text-muted-foreground">Seguro via Stripe. Único o mensual.</p>
      <a href="https://buy.stripe.com/00g7sy5O9aJRgdafYY" target="_blank" rel="noreferrer" class="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">Donar ahora <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>
    </div>
    <img alt="QR" loading="lazy" width="140" height="140" class="h-36 w-36 self-center rounded-xl border bg-card p-2" src="/QR-stripe-donate.webp" />
  </div>
  <div class="flex h-full flex-col gap-5 rounded-3xl border bg-card p-8 sm:flex-row">
    <div class="flex-1">
      <svg class="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
      <h2 class="mt-3 text-2xl font-semibold text-primary">PayPal</h2>
      <p class="mt-2 whitespace-pre-line text-muted-foreground">Recibos deducibles de impuestos en USA y Canadá disponibles.<br>axansolustra@gmail.com</p>
      <a href="https://paypal.me/axansolustra" target="_blank" rel="noreferrer" class="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">Donar ahora <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg></a>
    </div>
    <img alt="QR" loading="lazy" width="140" height="140" class="h-36 w-36 self-center rounded-xl border bg-card p-2" src="/QR-USA-and-Canada-Tax-Purposes.webp" />
  </div>
  <div class="flex h-full flex-col gap-5 rounded-3xl border bg-card p-8 sm:flex-row">
    <div class="flex-1">
      <svg class="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-.895 3-3 2m0 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2-.895-2-3-2m0-8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-.895 3-3 2"/></svg>
      <h2 class="mt-3 text-2xl font-semibold text-primary">OXXO</h2>
      <p class="mt-2 whitespace-pre-line text-muted-foreground">Paga en efectivo en cualquier OXXO en México. Referencia: BOL</p>
    </div>
    <img alt="QR" loading="lazy" width="140" height="140" class="h-36 w-36 self-center rounded-xl border bg-card p-2" src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=OXXO+payment+reference+BOL" />
  </div>
  <div class="flex h-full flex-col gap-5 rounded-3xl border bg-card p-8 sm:flex-row">
    <div class="flex-1">
      <svg class="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-.895 3-3 2m0 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2-.895-2-3-2m0-8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-.895 3-3 2"/></svg>
      <h2 class="mt-3 text-2xl font-semibold text-primary">Banco Azteca</h2>
      <p class="mt-2 whitespace-pre-line text-muted-foreground">Michele Avila Mendoza<br>Tarjeta: 4027 6661 1819 3043<br>CLABE: 127694013013508192</p>
    </div>
    <img alt="QR" loading="lazy" width="140" height="140" class="h-36 w-36 self-center rounded-xl border bg-card p-2" src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=Banco+Azteca+CLABE+127694013013508192" />
  </div>
  <div class="flex h-full flex-col gap-5 rounded-3xl border bg-card p-8 sm:flex-row">
    <div class="flex-1">
      <svg class="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-.895 3-3 2m0 8c1.657 0 3 .895 3 2s-1.343 2-3 2-3-.895-3-2-.895-2-3-2m0-8c-1.657 0-3-.895-3-2s1.343-2 3-2 3 .895 3 2-.895 3-3 2"/></svg>
      <h2 class="mt-3 text-2xl font-semibold text-primary">Mercado Pago W</h2>
      <p class="mt-2 whitespace-pre-line text-muted-foreground">Michele Avila Mendoza<br>CLABE: 722969010176925651</p>
    </div>
    <img alt="QR" loading="lazy" width="140" height="140" class="h-36 w-36 self-center rounded-xl border bg-card p-2" src="https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=Mercado+Pago+W+CLABE+722969010176925651" />
  </div>
</section>
<p class="mx-auto max-w-3xl px-4 text-center font-semibold text-primary mt-8">PLEASE REMEMBER TO REFERENCE YOUR DONATION AS BOL.<br>We accept cash donations at any of the drop off locations as well.</p>`,
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
		body_en: `<section class="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
  <div class="grid content-start gap-3">
    <a href="mailto:BreathOfLifePDC@gmail.com" target="_blank" rel="noreferrer" class="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md">
      <span class="rounded-full bg-secondary p-3"><svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></span>
      <span class="font-medium">BreathOfLifePDC@gmail.com</span>
    </a>
    <a href="https://wa.me/529841234567" target="_blank" rel="noreferrer" class="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md">
      <span class="rounded-full bg-secondary p-3"><svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 011.21.502l1.13 2.257a11.042 11.042 0 005.516 5.516l1.13 2.257a1 1 0 011.21.502l4.493 1.498a1 1 0 011.21.502l1.13 2.257a11.042 11.042 0 005.516-5.516l-2.257-1.13a1 1 0 01-.502-1.21l-4.493-1.498A1 1 0 0119 17H6a2 2 0 01-2-2V7a2 2 0 012-2h3.28"/></svg></span>
      <span class="font-medium">WhatsApp: +52 984 123 4567</span>
    </a>
    <a href="https://chat.whatsapp.com/GROUP_LINK" target="_blank" rel="noreferrer" class="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md">
      <span class="rounded-full bg-secondary p-3"><svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></span>
      <span class="font-medium">Join our WhatsApp group</span>
    </a>
    <a href="https://facebook.com/breathoflifepdc" target="_blank" rel="noreferrer" class="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md">
      <span class="rounded-full bg-secondary p-3"><svg class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.447 0 12.073c0 5.988 4.388 10.952 10.125 11.854v-8.385H7.078v-3.47h3.046V9.43c0-3.007 1.792-4.667 4.533-4.667 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.791v8.385C19.612 21.952 24 16.988 24 12.073z"/></svg></span>
      <span class="font-medium">Facebook</span>
    </a>
    <a href="https://instagram.com/breathoflifeadv" target="_blank" rel="noreferrer" class="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md">
      <span class="rounded-full bg-secondary p-3"><svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x="2" y="2" width="20" height="20" rx="5.5"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></span>
      <span class="font-medium">Instagram</span>
    </a>
    <a href="https://www.youtube.com/@BreathOfLifePDC" target="_blank" rel="noreferrer" class="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md">
      <span class="rounded-full bg-secondary p-3"><svg class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.166 3.166 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.537a3.166 3.166 0 00-2.122 2.136C1.953 5.695 1.5 8.017 1.5 12s.453 6.305 1.126 8.308a3.166 3.166 0 002.122 2.136C5.495 21.455 12 21.455 12 21.455s7.505 0 9.377-.537a3.166 3.166 0 002.122-2.136C22.547 18.305 23 15.983 23 12s-.453-6.305-1.126-8.308z"/></svg></span>
      <span class="font-medium">YouTube</span>
    </a>
  </div>
  <div class="mt-2 flex items-center gap-4 p-5 text-muted-foreground">
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
    Playa del Carmen, Quintana Roo, Mexico
  </div>
  <div class="lg:col-span-1">
    <form class="grid gap-4 rounded-3xl border bg-card p-8 shadow-sm">
      <input placeholder="Your name" class="rounded-lg border bg-background px-3 py-2 text-sm" />
      <input type="email" placeholder="Email" class="rounded-lg border bg-background px-3 py-2 text-sm" />
      <input placeholder="WhatsApp / phone" class="rounded-lg border bg-background px-3 py-2 text-sm" />
      <textarea placeholder="Your message" rows={4} class="rounded-lg border bg-background px-3 py-2 text-sm" />
      <button class="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">Send message</button>
    </form>
  </div>
</section>`,
		body_es: `<section class="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
  <div class="grid content-start gap-3">
    <a href="mailto:BreathOfLifePDC@gmail.com" target="_blank" rel="noreferrer" class="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md">
      <span class="rounded-full bg-secondary p-3"><svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></span>
      <span class="font-medium">BreathOfLifePDC@gmail.com</span>
    </a>
    <a href="https://wa.me/529841234567" target="_blank" rel="noreferrer" class="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md">
      <span class="rounded-full bg-secondary p-3"><svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 011.21.502l1.13 2.257a11.042 11.042 0 005.516 5.516l1.13 2.257a1 1 0 011.21.502l4.493 1.498a1 1 0 011.21.502l1.13 2.257a11.042 11.042 0 005.516-5.516l-2.257-1.13a1 1 0 01-.502-1.21l-4.493-1.498A1 1 0 0119 17H6a2 2 0 01-2-2V7a2 2 0 012-2h3.28"/></svg></span>
      <span class="font-medium">WhatsApp: +52 984 123 4567</span>
    </a>
    <a href="https://chat.whatsapp.com/GROUP_LINK" target="_blank" rel="noreferrer" class="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md">
      <span class="rounded-full bg-secondary p-3"><svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></span>
      <span class="font-medium">Únete a nuestro grupo de WhatsApp</span>
    </a>
    <a href="https://facebook.com/breathoflifepdc" target="_blank" rel="noreferrer" class="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md">
      <span class="rounded-full bg-secondary p-3"><svg class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.447 0 12.073c0 5.988 4.388 10.952 10.125 11.854v-8.385H7.078v-3.47h3.046V9.43c0-3.007 1.792-4.667 4.533-4.667 1.313 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.791v8.385C19.612 21.952 24 16.988 24 12.073z"/></svg></span>
      <span class="font-medium">Facebook</span>
    </a>
    <a href="https://instagram.com/breathoflifeadv" target="_blank" rel="noreferrer" class="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md">
      <span class="rounded-full bg-secondary p-3"><svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x="2" y="2" width="20" height="20" rx="5.5"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></span>
      <span class="font-medium">Instagram</span>
    </a>
    <a href="https://www.youtube.com/@BreathOfLifePDC" target="_blank" rel="noreferrer" class="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md">
      <span class="rounded-full bg-secondary p-3"><svg class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.166 3.166 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.537a3.166 3.166 0 00-2.122 2.136C1.953 5.695 1.5 8.017 1.5 12s.453 6.305 1.126 8.308a3.166 3.166 0 002.122 2.136C5.495 21.455 12 21.455 12 21.455s7.505 0 9.377-.537a3.166 3.166 0 002.122-2.136C22.547 18.305 23 15.983 23 12s-.453-6.305-1.126-8.308z"/></svg></span>
      <span class="font-medium">YouTube</span>
    </a>
  </div>
  <div class="mt-2 flex items-center gap-4 p-5 text-muted-foreground">
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
    Playa del Carmen, Quintana Roo, México
  </div>
  <div class="lg:col-span-1">
    <form class="grid gap-4 rounded-3xl border bg-card p-8 shadow-sm">
      <input placeholder="Tu nombre" class="rounded-lg border bg-background px-3 py-2 text-sm" />
      <input type="email" placeholder="Correo electrónico" class="rounded-lg border bg-background px-3 py-2 text-sm" />
      <input placeholder="WhatsApp / teléfono" class="rounded-lg border bg-background px-3 py-2 text-sm" />
      <textarea placeholder="Tu mensaje" rows="4" class="rounded-lg border bg-background px-3 py-2 text-sm" />
      <button class="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">Enviar mensaje</button>
    </form>
  </div>
</section>`,
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
		image: "/about.jpg",
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
		image: "/team.jpg",
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
		name_en: "Stripe Donations",
		name_es: "Stripe Donations",
		details_en: "Stripe Donations",
		details_es: "Donaciones Stripe",
		link: "https://buy.stripe.com/00g7sy5O9aJRgdafYY",
		qr: "/QR-stripe-donate.png",
		image: "",
		visible: true,
		sort_order: 1
	},
	{
		id: "2",
		name_en: "USA & Canada Tax-Deductible",
		name_es: "Deducible de Impuestos USA y Canadá",
		details_en: "USA & Canada tax-deductible - receipt available.",
		details_es: "Deducible de impuestos en USA y Canadá - recibo disponible.",
		link: "https://www.paypal.com/ncp/payment/5DS8TXGHLDVL2",
		qr: "/QR-USA-and-Canada-Tax-Purposes.png",
		image: "",
		visible: true,
		sort_order: 2
	},
	{
		id: "3",
		name_en: "OXXO or Mexican Bank",
		name_es: "OXXO o Banco Mexicano",
		details_en: "Pay cash at any OXXO in Mexico. Reference: BOL\nOXXO or Mexican Bank: Banco Azteca (Michele Avila Mendoza, Card: 4027 6661 1819 3043, CLABE: 127694013013508192)\nMercado Pago W (CLABE: 722969010176925651)",
		details_es: "Paga en efectivo en cualquier OXXO en México. Referencia: BOL\nOXXO o Banco Mexicano: Banco Azteca (Michele Avila Mendoza, Tarjeta: 4027 6661 1819 3043, CLABE: 127694013013508192)\nMercado Pago W (CLABE: 722969010176925651)",
		link: "",
		qr: "",
		image: "",
		visible: true,
		sort_order: 3
	},
	{
		id: "4",
		name_en: "PAYPAL",
		name_es: "PAYPAL",
		details_en: "PAYPAL: axansolustra@gmail.com",
		details_es: "PAYPAL: axansolustra@gmail.com",
		link: "https://paypal.me/axansolustra",
		qr: "",
		image: "",
		visible: true,
		sort_order: 4
	}
];
//#endregion
export { pages as a, useLang as c, pagePath as i, donationMethods as n, volunteerNeeds as o, dropoffs as r, LangProvider as s, contentBlocks as t };
