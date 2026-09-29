import { a as pages, c as useLang } from "./content-k_way1tE.js";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-CCHOXgut.js";
import { t as Reveal } from "./Reveal-B-Ixe9e3.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/team.tsx?tsr-split=component
function Team() {
	const { t } = useLang();
	const page = pages.find((p) => p.slug === "team" && !p.is_system && p.visible);
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, { title: t("Our Team", "Nuestro Equipo") }),
		/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("img", {
			src: "/team.jpg",
			alt: t("Our volunteer team", "Nuestro equipo de voluntarios"),
			className: "w-full rounded-[2rem] object-cover shadow-2xl mb-12"
		}) }),
		/* @__PURE__ */ jsx("article", {
			className: "mx-auto max-w-3xl whitespace-pre-line px-4 py-16 text-lg leading-relaxed text-foreground/85",
			children: t(page.body_en, page.body_es)
		})
	] });
}
//#endregion
export { Team as component };
