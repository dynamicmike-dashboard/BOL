import { a as pages, c as useLang } from "./content-DaWn0LjI.js";
import { n as SiteLayout, t as PageHero } from "./SiteLayout-D4voKOcV.js";
import { t as Reveal } from "./Reveal-D54lAUX5.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
function About() {
	const { t } = useLang();
	pages.find((p) => p.slug === "about" && !p.is_system && p.visible);
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, { title: t("About Us", "Sobre Nosotros") }),
		/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("img", {
			src: "/about.jpg",
			alt: t("About Breath of Life PDC", "Sobre Aliento de Vida PDC"),
			className: "w-full rounded-[2rem] object-cover shadow-2xl mb-12"
		}) }),
		/* @__PURE__ */ jsx("article", {
			className: "mx-auto max-w-3xl whitespace-pre-line px-4 py-16 text-lg leading-relaxed text-foreground/85",
			children: /* @__PURE__ */ jsx("p", { children: "Breath of Life PDC is a community charity based in Playa del Carmen, Mexico. We provide weekly food packages (despensas) to families in need, run community programs, and create spaces of belonging." })
		})
	] });
}
//#endregion
export { About as component };
