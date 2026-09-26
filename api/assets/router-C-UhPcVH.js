import { s as LangProvider, t as contentBlocks } from "./content-DwV4PCU2.js";
import { t as Route$9 } from "./p._slug-BcPqzyqk.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
//#region src/components/ui/sonner.tsx
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ jsx(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
//#endregion
//#region src/styles.css?url
var styles_default = "/assets/styles-BltGjTJQ.css";
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Breath of Life PDC — Caring in Action" },
			{
				name: "description",
				content: "Community charity helping families in Playa del Carmen, Mexico."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:site_name",
				content: "Breath of Life PDC"
			},
			{
				name: "theme-color",
				content: "#1a5c4a"
			},
			{
				name: "apple-mobile-web-app-capable",
				content: "yes"
			},
			{
				name: "apple-mobile-web-app-status-bar-style",
				content: "default"
			},
			{
				name: "apple-mobile-web-app-title",
				content: "Breath of Life"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "NGO",
				name: "Breath of Life PDC",
				alternateName: "Aliento de Vida",
				url: "https://breathoflifepdc.org",
				email: "BreathOfLifePDC@gmail.com",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Playa del Carmen",
					addressRegion: "Quintana Roo",
					addressCountry: "MX"
				},
				sameAs: [
					"https://breathoflifepdc.org/",
					"https://facebook.com/breathoflifepdc",
					"https://instagram.com/breathoflifeadv",
					"https://www.youtube.com/@BreathOfLifePDC"
				]
			})
		}],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "manifest",
				href: "/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/icons/icon-192x192.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs(LangProvider, { children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Toaster$1, {})] })
	});
}
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$7 = () => import("./routes-CBD3mYkm.js");
var Route$7 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Breath of Life PDC — Caring in Action in Playa del Carmen" },
			{
				name: "description",
				content: "Helping less-fortunate families in Playa del Carmen through food, support and community. Donate, volunteer or drop off items."
			},
			{
				property: "og:title",
				content: "Breath of Life PDC — Caring in Action"
			},
			{
				property: "og:description",
				content: "Helping less-fortunate families in Playa del Carmen. Donate, volunteer or drop off items."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://breathoflifepdc.org/"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://breathoflifepdc.org/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/admin.tsx
var $$splitComponentImporter$6 = () => import("./admin-D9jR4e1i.js");
Object.entries(contentBlocks).map(([key, val]) => ({
	key,
	...val
}));
var Route$6 = createFileRoute("/admin")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$5 = () => import("./contact-Bvknp5a1.js");
var Route$5 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Us — Breath of Life PDC" },
			{
				name: "description",
				content: "Get in touch with Breath of Life PDC by email, WhatsApp, Messenger or social media."
			},
			{
				property: "og:title",
				content: "Contact Us — Breath of Life PDC"
			},
			{
				property: "og:description",
				content: "Reach Breath of Life PDC in Playa del Carmen."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://breathoflifepdc.org/contact"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://breathoflifepdc.org/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/donate.tsx
var $$splitComponentImporter$4 = () => import("./donate-CWmkqRm-.js");
var Route$4 = createFileRoute("/donate")({
	head: () => ({
		meta: [
			{ title: "Donate — Breath of Life PDC" },
			{
				name: "description",
				content: "Donate by Stripe, PayPal (USA & Canada tax purposes), OXXO or Mexican bank transfer. Reference your donation as BOL."
			},
			{
				property: "og:title",
				content: "Donate — Breath of Life PDC"
			},
			{
				property: "og:description",
				content: "Every peso helps families in Playa del Carmen. Stripe, PayPal, OXXO and bank transfer."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://breathoflifepdc.org/donate"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://breathoflifepdc.org/donate"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/drop-off.tsx
var $$splitComponentImporter$3 = () => import("./drop-off-DJWXJJfA.js");
var Route$3 = createFileRoute("/drop-off")({
	head: () => ({
		meta: [
			{ title: "Drop-Off Points — Breath of Life PDC" },
			{
				name: "description",
				content: "Businesses across Playa del Carmen accepting donations for Breath of Life, with addresses and map directions."
			},
			{
				property: "og:title",
				content: "Drop-Off Points — Breath of Life PDC"
			},
			{
				property: "og:description",
				content: "Find a drop-off point near you in Playa del Carmen."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://breathoflifepdc.org/drop-off"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://breathoflifepdc.org/drop-off"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/help.tsx
var $$splitComponentImporter$2 = () => import("./help-C5nRo9RD.js");
var Route$2 = createFileRoute("/help")({
	head: () => ({
		meta: [
			{ title: "How You Can Help — Breath of Life PDC" },
			{
				name: "description",
				content: "Contribute items, food care packages, holiday gifts, or sponsor a family in Playa del Carmen."
			},
			{
				property: "og:title",
				content: "How You Can Help — Breath of Life PDC"
			},
			{
				property: "og:description",
				content: "Contributions, holiday gift donations and Sponsor a Family."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://breathoflifepdc.org/help"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://breathoflifepdc.org/help"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/values.tsx
var $$splitComponentImporter$1 = () => import("./values-C1h31d1P.js");
var Route$1 = createFileRoute("/values")({
	head: () => ({
		meta: [
			{ title: "Values & Beliefs — Breath of Life PDC" },
			{
				name: "description",
				content: "Our mission, vision, objective and faith: a non-denominational Christian ministry of social action in Playa del Carmen."
			},
			{
				property: "og:title",
				content: "Values & Beliefs — Breath of Life PDC"
			},
			{
				property: "og:description",
				content: "Mission, vision, objective and faith behind Breath of Life – Caring in Action."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://breathoflifepdc.org/values"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://breathoflifepdc.org/values"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/volunteer.tsx
var $$splitComponentImporter = () => import("./volunteer-CYKRyrVi.js");
var Route = createFileRoute("/volunteer")({
	head: () => ({
		meta: [
			{ title: "Volunteer — Breath of Life PDC" },
			{
				name: "description",
				content: "Volunteer with Breath of Life in Playa del Carmen: pack despensas, run garden sales, support holiday celebrations."
			},
			{
				property: "og:title",
				content: "Volunteer — Breath of Life PDC"
			},
			{
				property: "og:description",
				content: "Volunteers always welcome. Sign up to join our weekly team."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: "https://breathoflifepdc.org/volunteer"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "canonical",
			href: "https://breathoflifepdc.org/volunteer"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$7.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AdminRoute: Route$6.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => Route$8
	}),
	ContactRoute: Route$5.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$8
	}),
	DonateRoute: Route$4.update({
		id: "/donate",
		path: "/donate",
		getParentRoute: () => Route$8
	}),
	DropOffRoute: Route$3.update({
		id: "/drop-off",
		path: "/drop-off",
		getParentRoute: () => Route$8
	}),
	HelpRoute: Route$2.update({
		id: "/help",
		path: "/help",
		getParentRoute: () => Route$8
	}),
	ValuesRoute: Route$1.update({
		id: "/values",
		path: "/values",
		getParentRoute: () => Route$8
	}),
	VolunteerRoute: Route.update({
		id: "/volunteer",
		path: "/volunteer",
		getParentRoute: () => Route$8
	}),
	PSlugRoute: Route$9.update({
		id: "/p/$slug",
		path: "/p/$slug",
		getParentRoute: () => Route$8
	})
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
