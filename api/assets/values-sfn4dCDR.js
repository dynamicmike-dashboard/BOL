import { c as useLang } from "./content-DaWn0LjI.js";
import { n as SiteLayout, o as useBlocks, t as PageHero } from "./SiteLayout-BJC3Ateo.js";
import { t as Reveal } from "./Reveal-ChwqGR6y.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { BookOpen, Eye, Palette, Sparkles, Target } from "lucide-react";
//#region src/routes/values.tsx?tsr-split=component
function Values() {
	const b = useBlocks();
	const { t } = useLang();
	const items = [
		{
			icon: Target,
			en: "Mission",
			es: "Nuestra Misión",
			k: "value_mission"
		},
		{
			icon: Eye,
			en: "Vision",
			es: "Nuestra Visión",
			k: "value_vision"
		},
		{
			icon: Sparkles,
			en: "Objective",
			es: "Nuestro Objetivo",
			k: "value_objective"
		},
		{
			icon: BookOpen,
			en: "Our Faith",
			es: "Nuestra Fe",
			k: "value_faith"
		}
	];
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			kicker: "#BreathOfLife #AlientoDeVida",
			title: t("Foundational Values & Beliefs", "Valores y creencias fundamentales"),
			sub: b("values_intro")
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2",
			children: items.map((it, i) => /* @__PURE__ */ jsx(Reveal, {
				delay: i * 80,
				children: /* @__PURE__ */ jsxs("div", {
					className: "h-full rounded-3xl border bg-card p-8",
					children: [
						/* @__PURE__ */ jsx(it.icon, { className: "h-8 w-8 text-accent" }),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 text-2xl font-semibold text-primary",
							children: t(it.en, it.es)
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-muted-foreground",
							children: b(it.k)
						})
					]
				})
			}, it.k))
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-4xl px-4",
			children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
				className: "rounded-3xl bg-primary p-10 text-primary-foreground",
				children: [
					/* @__PURE__ */ jsx(Palette, { className: "h-8 w-8" }),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-3xl font-semibold",
						children: t("The meaning of our logo", "El significado de nuestro logo")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-6 flex gap-3",
						children: [
							/* @__PURE__ */ jsx("span", { className: "h-10 w-10 rounded-full bg-accent" }),
							/* @__PURE__ */ jsx("span", { className: "h-10 w-10 rounded-full bg-secondary-foreground ring-2 ring-primary-foreground/30" }),
							/* @__PURE__ */ jsx("span", { className: "h-10 w-10 rounded-full bg-sky" })
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-lg opacity-90",
						children: b("value_logo")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 italic opacity-80",
						children: t("At Breath of Life, we believe that service and love are the reflection of true faith in action.", "En Breath of Life, creemos que el servicio y el amor son el reflejo de la verdadera fe en acción.")
					})
				]
			}) })
		})
	] });
}
//#endregion
export { Values as component };
