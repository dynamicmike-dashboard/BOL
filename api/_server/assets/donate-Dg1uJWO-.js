import { n as useLang } from "./i18n-BoG3AB_M.js";
import { n as PageHero, o as useBlocks, r as SiteLayout, s as useRows, t as Reveal } from "./Reveal-DN9OHuQy.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { CreditCard, ExternalLink } from "lucide-react";
//#region src/routes/donate.tsx?tsr-split=component
function Donate() {
	const b = useBlocks();
	const { t } = useLang();
	const { data = [] } = useRows("donation_methods");
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx(PageHero, {
			title: t("Donations", "Donativos"),
			sub: b("donate_intro")
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2",
			children: data.filter((d) => d.visible).map((d, i) => /* @__PURE__ */ jsx(Reveal, {
				delay: i * 80,
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex h-full flex-col gap-5 rounded-3xl border bg-card p-8 sm:flex-row",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ jsx(CreditCard, { className: "h-7 w-7 text-accent" }),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-3 text-2xl font-semibold text-primary",
								children: t(d.title_en, d.title_es)
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 whitespace-pre-line text-muted-foreground",
								children: t(d.details_en, d.details_es)
							}),
							d.link && /* @__PURE__ */ jsxs("a", {
								href: d.link,
								target: "_blank",
								rel: "noreferrer",
								className: "mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground",
								children: [
									t("Donate now", "Donar ahora"),
									" ",
									/* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
								]
							})
						]
					}), d.qr && /* @__PURE__ */ jsx("img", {
						alt: "QR",
						loading: "lazy",
						width: 140,
						height: 140,
						className: "h-36 w-36 self-center rounded-xl border bg-card p-2",
						src: d.qr.startsWith("/") ? d.qr : `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(d.link)}`
					})]
				})
			}, d.id))
		}),
		/* @__PURE__ */ jsx("p", {
			className: "mx-auto max-w-3xl px-4 text-center font-semibold text-primary",
			children: t("Please remember to reference your donation as BOL.", "Por favor recuerda usar la referencia BOL.")
		})
	] });
}
//#endregion
export { Donate as component };
