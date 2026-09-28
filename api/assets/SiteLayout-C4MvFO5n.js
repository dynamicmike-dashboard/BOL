import { a as pages, c as useLang, i as pagePath, n as donationMethods, o as volunteerNeeds, r as dropoffs, t as contentBlocks } from "./content-DaWn0LjI.js";
import * as React from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Facebook, Globe, Instagram, Menu, MessageCircle, X, Youtube } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/lib/cms.ts
function createStaticQuery(data) {
	return {
		data,
		isLoading: false,
		error: null,
		isError: false,
		isSuccess: true
	};
}
function useRows(table) {
	return createStaticQuery({
		content_blocks: Object.entries(contentBlocks || {}).map(([key, val]) => ({
			key,
			...val
		})),
		pages: pages || [],
		dropoffs: dropoffs || [],
		volunteer_needs: volunteerNeeds || [],
		donation_methods: donationMethods || [],
		messages: []
	}[table] ?? []);
}
function usePages() {
	return useRows("pages");
}
function useBlocks() {
	const { t } = useLang();
	const map = new Map(Object.entries(contentBlocks || {}).map(([key, val]) => [key, val]));
	return (key, fallback = "") => {
		const r = map.get(key);
		return r ? t(r.en, r.es) : fallback;
	};
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
//#region src/components/SiteExtras.tsx
var WHATSAPP_GROUP = "https://chat.whatsapp.com/KBWFahrhjwG9mMLusEiz4G?s=cl&p=a&mlu=4&ilr=4";
function WhatsAppButton() {
	const { t } = useLang();
	const label = t("Join our WhatsApp", "Únete a nuestro WhatsApp");
	return /* @__PURE__ */ jsxs("a", {
		href: WHATSAPP_GROUP,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": label,
		className: "fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-accent px-4 py-3 font-semibold text-accent-foreground shadow-lg transition hover:scale-105 sm:bottom-6 sm:right-6",
		children: [/* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" }), /* @__PURE__ */ jsx("span", {
			className: "hidden sm:inline",
			children: label
		})]
	});
}
var LEGAL = [
	{
		title: ["Privacy Policy", "Política de privacidad"],
		body: ["Breath of Life PDC respects your privacy. When you contact us or sign up to volunteer, we collect only the information you provide (name, email, phone and message) and use it solely to respond to you and coordinate our charitable activities. We never sell or share your personal information with third parties. You may ask us to delete your information at any time by contacting BreathOfLifePDC@gmail.com.", "Breath of Life PDC respeta tu privacidad. Cuando nos contactas o te inscribes como voluntario, solo recopilamos la información que nos proporcionas (nombre, correo, teléfono y mensaje) y la usamos únicamente para responderte y coordinar nuestras actividades benéficas. Nunca vendemos ni compartimos tus datos personales con terceros. Puedes solicitar que eliminemos tu información en cualquier momento escribiendo a BreathOfLifePDC@gmail.com."]
	},
	{
		title: ["Disclaimer", "Aviso legal"],
		body: ["The information on this website is provided in good faith for general information about Breath of Life PDC and its community programs. While we strive to keep it accurate and up to date, we make no guarantees about its completeness. Links to external websites are provided for convenience; we are not responsible for their content.", "La información de este sitio se ofrece de buena fe como información general sobre Breath of Life PDC y sus programas comunitarios. Aunque procuramos mantenerla precisa y actualizada, no garantizamos que esté completa. Los enlaces a sitios externos se ofrecen por conveniencia; no somos responsables de su contenido."]
	},
	{
		title: ["Tax & Donation Disclaimer", "Aviso fiscal y de donaciones"],
		body: ["Donations are used to support families in need in Playa del Carmen. Tax deductibility depends on the donation channel and your country of residence: only donations made through the partner organizations listed on our Donate page may be tax deductible in the USA or Canada. Donations made directly in Mexico may not be tax deductible. Please consult your tax advisor. All donations are final and non-refundable.", "Las donaciones se usan para apoyar a familias necesitadas en Playa del Carmen. La deducibilidad fiscal depende del canal de donación y de tu país de residencia: solo las donaciones hechas a través de las organizaciones aliadas indicadas en nuestra página de Donaciones pueden ser deducibles en EE. UU. o Canadá. Las donaciones hechas directamente en México podrían no ser deducibles. Consulta a tu asesor fiscal. Todas las donaciones son definitivas y no reembolsables."]
	}
];
function LegalLinks() {
	const { t } = useLang();
	const [open, setOpen] = useState(null);
	const cur = open !== null ? LEGAL[open] : null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "flex flex-wrap justify-center gap-x-4 gap-y-2",
		children: LEGAL.map((l, i) => /* @__PURE__ */ jsx("button", {
			onClick: () => setOpen(i),
			className: "underline hover:opacity-100",
			children: t(...l.title)
		}, i))
	}), /* @__PURE__ */ jsx(Dialog, {
		open: open !== null,
		onOpenChange: (o) => !o && setOpen(null),
		children: /* @__PURE__ */ jsx(DialogContent, {
			className: "max-h-[85vh] max-w-[92vw] overflow-y-auto sm:max-w-lg",
			children: cur && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: t(...cur.title) }) }), /* @__PURE__ */ jsx("p", {
				className: "leading-relaxed text-muted-foreground",
				children: t(...cur.body)
			})] })
		})
	})] });
}
//#endregion
//#region src/components/SiteLayout.tsx
function LogoMark({ className = "h-10 w-10" }) {
	return /* @__PURE__ */ jsx("img", {
		src: "/logo.png",
		alt: "Breath of Life PDC",
		className: `shrink-0 object-contain ${className}`
	});
}
var SOCIAL = {
	website: "https://breathoflifepdc.org/",
	facebook: "https://facebook.com/breathoflifepdc",
	instagram: "https://instagram.com/breathoflifeadv",
	youtube: "https://www.youtube.com/@BreathOfLifePDC",
	messenger: "https://m.me/breathoflifepdc"
};
var socialLinks = (t) => [
	{
		href: SOCIAL.website,
		Icon: Globe,
		label: t("Website", "Sitio web")
	},
	{
		href: SOCIAL.facebook,
		Icon: Facebook,
		label: "Facebook"
	},
	{
		href: SOCIAL.messenger,
		Icon: MessageCircle,
		label: t("Facebook Messenger", "Messenger de Facebook")
	},
	{
		href: SOCIAL.instagram,
		Icon: Instagram,
		label: "Instagram"
	},
	{
		href: SOCIAL.youtube,
		Icon: Youtube,
		label: "YouTube"
	}
];
function LangToggle() {
	const { lang, setLang } = useLang();
	return /* @__PURE__ */ jsx("div", {
		className: "flex rounded-full border bg-card p-0.5 text-xs font-semibold",
		children: ["en", "es"].map((l) => /* @__PURE__ */ jsx("button", {
			onClick: () => setLang(l),
			"aria-pressed": lang === l,
			className: `rounded-full px-3 py-1.5 transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`,
			children: l === "en" ? "English" : "Español"
		}, l))
	});
}
function SiteLayout({ children }) {
	const { t } = useLang();
	const b = useBlocks();
	const { data: pages = [] } = usePages();
	const nav = pages.filter((p) => p.visible);
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "sticky top-0 z-40 border-b bg-background/85 backdrop-blur",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3",
					children: [
						/* @__PURE__ */ jsxs(Link, {
							to: "/",
							className: "flex items-center gap-2",
							"aria-label": "Breath of Life PDC home",
							children: [/* @__PURE__ */ jsx(LogoMark, { className: "h-12 w-12 sm:h-14 sm:w-14" }), /* @__PURE__ */ jsx("span", {
								className: "hidden whitespace-nowrap font-display text-lg font-semibold sm:inline",
								children: "Breath of Life"
							})]
						}),
						/* @__PURE__ */ jsx("nav", {
							className: "hidden items-center gap-0.5 xl:flex",
							children: nav.map((p) => /* @__PURE__ */ jsx("a", {
								href: pagePath(p),
								className: "whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground",
								children: t(p.label_en, p.label_es)
							}, p.id))
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx(LangToggle, {}), /* @__PURE__ */ jsx("button", {
								className: "rounded-full p-2 xl:hidden",
								onClick: () => setOpen(!open),
								"aria-label": "Menu",
								children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
							})]
						})
					]
				}), open && /* @__PURE__ */ jsx("nav", {
					className: "flex flex-col gap-1 border-t px-4 py-3 xl:hidden",
					children: nav.map((p) => /* @__PURE__ */ jsx("a", {
						href: pagePath(p),
						className: "rounded-lg px-3 py-2 font-medium hover:bg-secondary",
						children: t(p.label_en, p.label_es)
					}, p.id))
				})]
			}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ jsxs("footer", {
				className: "mt-24 bg-primary text-primary-foreground",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3",
					children: [
						/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx(LogoMark, { className: "mb-4 h-24 w-24 rounded bg-primary-foreground" }),
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl",
								children: "Breath of Life PDC"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 opacity-80",
								children: b("contact_address")
							})
						] }),
						/* @__PURE__ */ jsxs("div", {
							className: "opacity-80",
							children: [/* @__PURE__ */ jsx("p", { children: t("Special recognition to our many volunteers and supporters.", "Un reconocimiento especial a nuestros voluntarios y simpatizantes.") }), /* @__PURE__ */ jsxs("p", {
								className: "mt-2",
								children: [
									t("Website sponsored by", "Sitio patrocinado por"),
									" ",
									/* @__PURE__ */ jsx("a", {
										className: "underline",
										href: "https://playaexpats.com",
										target: "_blank",
										rel: "noreferrer",
										children: "PlayaExpats.com"
									})
								]
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-3 md:justify-end",
							children: socialLinks(t).map(({ href, Icon, label }) => /* @__PURE__ */ jsx("a", {
								href,
								target: "_blank",
								rel: "noreferrer",
								"aria-label": label,
								title: label,
								className: "rounded-full bg-primary-foreground/10 p-3 transition hover:bg-primary-foreground/20",
								children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
							}, href))
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "space-y-2 border-t border-primary-foreground/10 px-4 py-4 pb-20 text-center text-sm opacity-80 sm:pb-4",
					children: [/* @__PURE__ */ jsx(LegalLinks, {}), /* @__PURE__ */ jsxs("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Breath of Life PDC"
					] })]
				})]
			}),
			/* @__PURE__ */ jsx(WhatsAppButton, {})
		]
	});
}
function PageHero({ kicker, title, sub }) {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden bg-secondary",
		children: [
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-float" }),
			/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-sky/30 blur-3xl animate-float" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto max-w-5xl px-4 py-20 text-center md:py-28",
				children: [
					kicker && /* @__PURE__ */ jsx("p", {
						className: "animate-fade-up text-sm font-semibold uppercase tracking-widest text-accent",
						children: kicker
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "animate-fade-up mt-3 text-4xl font-semibold text-primary md:text-6xl",
						children: title
					}),
					sub && /* @__PURE__ */ jsx("p", {
						className: "animate-fade-up mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
						style: { animationDelay: "120ms" },
						children: sub
					})
				]
			})
		]
	});
}
//#endregion
export { cn as a, useRows as c, WHATSAPP_GROUP as i, SiteLayout as n, useBlocks as o, socialLinks as r, usePages as s, PageHero as t };
