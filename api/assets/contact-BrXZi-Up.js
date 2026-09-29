import { n as useLang } from "./i18n-BoG3AB_M.js";
import { a as WHATSAPP_GROUP, i as socialLinks, n as PageHero, r as SiteLayout, s as useBlocks, t as Reveal } from "./Reveal-DRFMNMt8.js";
import { t as SignupForm } from "./SignupForm-eWbu3QSU.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function Contact() {
	const b = useBlocks();
	const { t } = useLang();
	const email = b("contact_email");
	const wa = b("contact_whatsapp").replace(/\D/g, "");
	const links = [
		email && {
			href: `mailto:${email}`,
			icon: Mail,
			label: email
		},
		wa && {
			href: `https://wa.me/${wa}`,
			icon: Phone,
			label: "WhatsApp"
		},
		{
			href: WHATSAPP_GROUP,
			icon: MessageCircle,
			label: t("Join our WhatsApp group", "Únete a nuestro grupo de WhatsApp")
		},
		...socialLinks(t).map((s) => ({
			href: s.href,
			icon: s.Icon,
			label: s.label
		}))
	].filter(Boolean);
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, { title: t("Connect with us", "Conecta con nosotros") }), /* @__PURE__ */ jsxs("section", {
		className: "mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid content-start gap-3",
			children: [links.map((l, i) => /* @__PURE__ */ jsx(Reveal, {
				delay: i * 60,
				children: /* @__PURE__ */ jsxs("a", {
					href: l.href,
					target: "_blank",
					rel: "noreferrer",
					className: "flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md",
					children: [/* @__PURE__ */ jsx("span", {
						className: "rounded-full bg-secondary p-3",
						children: /* @__PURE__ */ jsx(l.icon, { className: "h-5 w-5 text-primary" })
					}), /* @__PURE__ */ jsx("span", {
						className: "font-medium",
						children: l.label
					})]
				})
			}, l.href)), /* @__PURE__ */ jsxs("div", {
				className: "mt-2 flex items-center gap-4 p-5 text-muted-foreground",
				children: [/* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }), b("contact_address")]
			})]
		}), /* @__PURE__ */ jsx(Reveal, {
			delay: 100,
			children: /* @__PURE__ */ jsx(SignupForm, { kind: "contact" })
		})]
	})] });
}
//#endregion
export { Contact as component };
