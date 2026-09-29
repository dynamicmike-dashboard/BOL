import { c as useLang } from "./content-k_way1tE.js";
import { n as SiteLayout, o as useBlocks, s as useRows, t as PageHero } from "./SiteLayout-CCHOXgut.js";
import { t as Reveal } from "./Reveal-B-Ixe9e3.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
//#region src/routes/drop-off.tsx?tsr-split=component
var q = (d) => encodeURIComponent(`${d.name}, ${d.address}, Playa del Carmen, Quintana Roo`);
function DropOff() {
	const b = useBlocks();
	const { t } = useLang();
	const { data = [] } = useRows("dropoffs");
	const list = data.filter((d) => d.visible);
	const [sel, setSel] = useState(0);
	const active = list[sel];
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
		title: t("Drop-Off Points", "Puntos de entrega"),
		sub: b("dropoff_intro")
	}), /* @__PURE__ */ jsxs("section", {
		className: "mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-5",
		children: [/* @__PURE__ */ jsx("div", {
			className: "grid content-start gap-3 lg:col-span-2",
			children: list.map((d, i) => /* @__PURE__ */ jsx(Reveal, {
				delay: i * 50,
				children: /* @__PURE__ */ jsxs("button", {
					onClick: () => setSel(i),
					className: `w-full rounded-2xl border p-5 text-left transition ${i === sel ? "border-accent bg-secondary shadow-md" : "bg-card hover:border-accent/50"}`,
					children: [
						/* @__PURE__ */ jsx("h3", {
							className: "text-lg font-semibold text-primary",
							children: d.name
						}),
						/* @__PURE__ */ jsxs("p", {
							className: "mt-1 flex gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 shrink-0" }), d.address]
						}),
						t(d.hours_en, d.hours_es) && /* @__PURE__ */ jsxs("p", {
							className: "mt-1 flex gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 shrink-0" }), t(d.hours_en, d.hours_es)]
						}),
						d.phone && /* @__PURE__ */ jsxs("p", {
							className: "mt-1 flex gap-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 shrink-0" }), d.phone]
						}),
						/* @__PURE__ */ jsxs("a", {
							href: d.map_url || `https://www.google.com/maps/search/?api=1&query=${q(d)}`,
							target: "_blank",
							rel: "noreferrer",
							onClick: (e) => e.stopPropagation(),
							className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent",
							children: [/* @__PURE__ */ jsx(Navigation, { className: "h-4 w-4" }), t("Directions", "Cómo llegar")]
						})
					]
				})
			}, d.id))
		}), /* @__PURE__ */ jsx("div", {
			className: "lg:col-span-3",
			children: /* @__PURE__ */ jsx("div", {
				className: "sticky top-24 overflow-hidden rounded-3xl border shadow-xl",
				children: active && /* @__PURE__ */ jsx("iframe", {
					title: active.name,
					className: "h-[420px] w-full lg:h-[600px]",
					loading: "lazy",
					src: `https://maps.google.com/maps?q=${q(active)}&z=15&output=embed`
				}, active.id)
			})
		})]
	})] });
}
//#endregion
export { DropOff as component };
