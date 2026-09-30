import { n as useLang } from "./i18n-BoG3AB_M.js";
import { o as useBlocks, r as SiteLayout, t as Reveal } from "./Reveal-DN9OHuQy.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, HandHeart, Heart, Users } from "lucide-react";
//#region src/assets/hero.jpg
var hero_default = "/assets/hero-L2Iy3Oxt.jpg";
//#endregion
//#region src/assets/packing.jpg
var packing_default = "/assets/packing-ygLRq_Pn.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	const b = useBlocks();
	const { t } = useLang();
	const stats = [
		1,
		2,
		3,
		4
	].map((i) => b(`stat_${i}`, "|").split("|"));
	const programs = b("programs").split("|").filter(Boolean);
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "relative overflow-hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "animate-fade-up text-sm font-semibold uppercase tracking-widest text-accent",
						children: b("hero_kicker")
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "animate-fade-up mt-4 text-5xl font-semibold leading-[1.05] text-primary md:text-7xl",
						style: { animationDelay: "80ms" },
						children: b("hero_title")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "animate-fade-up mt-6 max-w-xl text-lg text-muted-foreground",
						style: { animationDelay: "160ms" },
						children: b("hero_sub")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "animate-fade-up mt-8 flex flex-wrap gap-3",
						style: { animationDelay: "240ms" },
						children: [/* @__PURE__ */ jsxs(Link, {
							to: "/donate",
							className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5",
							children: [
								/* @__PURE__ */ jsx(Heart, { className: "h-4 w-4" }),
								" ",
								t("Donate", "Donar")
							]
						}), /* @__PURE__ */ jsxs(Link, {
							to: "/volunteer",
							className: "inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground",
							children: [
								t("Volunteer", "Sé voluntario"),
								" ",
								/* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
							]
						})]
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "relative animate-fade-up",
					style: { animationDelay: "200ms" },
					children: [
						/* @__PURE__ */ jsx("div", { className: "absolute -inset-4 -z-10 rotate-3 rounded-[2.5rem] bg-accent/25" }),
						/* @__PURE__ */ jsx("div", { className: "absolute -inset-4 -z-10 -rotate-2 rounded-[2.5rem] bg-sky/25" }),
						/* @__PURE__ */ jsx("img", {
							src: hero_default,
							alt: t("Volunteers sharing groceries with families", "Voluntarios entregando despensas a familias"),
							width: 1600,
							height: 1008,
							className: "aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-primary text-primary-foreground",
			children: /* @__PURE__ */ jsx("div", {
				className: "mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 md:grid-cols-4",
				children: stats.map(([n, l], i) => /* @__PURE__ */ jsxs(Reveal, {
					delay: i * 100,
					className: "text-center",
					children: [/* @__PURE__ */ jsx("div", {
						className: "font-display text-4xl font-semibold md:text-5xl",
						children: n
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-1 text-sm uppercase tracking-wider opacity-75",
						children: l
					})]
				}, i))
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 md:grid-cols-2",
			children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("img", {
				src: packing_default,
				alt: t("Volunteers packing food boxes", "Voluntarios armando despensas"),
				loading: "lazy",
				width: 1200,
				height: 912,
				className: "rounded-[2rem] object-cover shadow-xl"
			}) }), /* @__PURE__ */ jsxs(Reveal, {
				delay: 120,
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-4xl font-semibold text-primary md:text-5xl",
						children: b("mission_title")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-lg text-muted-foreground",
						children: b("mission_body")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-muted-foreground",
						children: b("story_body")
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/values",
						className: "mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:gap-3 transition-all",
						children: [
							t("Our values & beliefs", "Nuestros valores y creencias"),
							" ",
							/* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-sand/60 py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-7xl px-4",
				children: [/* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("h2", {
					className: "text-center text-4xl font-semibold text-primary",
					children: t("Community programs", "Programas comunitarios")
				}) }), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: programs.map((p, i) => /* @__PURE__ */ jsx(Reveal, {
						delay: i % 4 * 80,
						children: /* @__PURE__ */ jsxs("div", {
							className: "h-full rounded-2xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
							children: [/* @__PURE__ */ jsx("div", {
								className: "mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display font-semibold text-primary",
								children: i + 1
							}), /* @__PURE__ */ jsx("p", {
								className: "font-medium",
								children: p
							})]
						})
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-7xl px-4 py-24",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					{
						to: "/help",
						icon: HandHeart,
						en: "How you can help",
						es: "Cómo puedes ayudar",
						den: "Food, clothes, holiday gifts and sponsoring a family.",
						des: "Alimentos, ropa, regalos navideños y apadrinar una familia."
					},
					{
						to: "/volunteer",
						icon: Users,
						en: "Volunteer",
						es: "Voluntariado",
						den: "Give your time — join our weekly team.",
						des: "Dona tu tiempo — únete a nuestro equipo semanal."
					},
					{
						to: "/drop-off",
						icon: Heart,
						en: "Drop-off points",
						es: "Puntos de entrega",
						den: "Find a business near you accepting donations.",
						des: "Encuentra un negocio cerca que recibe donativos."
					}
				].map((c, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ jsxs(Link, {
						to: c.to,
						className: "group block h-full rounded-3xl border bg-card p-8 transition hover:border-accent hover:shadow-xl",
						children: [
							/* @__PURE__ */ jsx(c.icon, { className: "h-8 w-8 text-accent transition group-hover:scale-110" }),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-4 text-2xl font-semibold text-primary",
								children: t(c.en, c.es)
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-muted-foreground",
								children: t(c.den, c.des)
							})
						]
					})
				}, c.to))
			})
		})
	] });
}
//#endregion
export { Home as component };
