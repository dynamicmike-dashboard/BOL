import { n as useLang } from "./i18n-BoG3AB_M.js";
import { t as Route } from "./p._slug-BFHAZP9T.js";
import { n as SiteLayout, s as usePages, t as PageHero } from "./SiteLayout-BwEnPDRr.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/p.$slug.tsx?tsr-split=component
function CustomPage() {
	const { slug } = Route.useParams();
	const { t } = useLang();
	const { data, isLoading } = usePages();
	const page = data?.find((p) => p.slug === slug && !p.is_system && p.visible);
	return /* @__PURE__ */ jsx(SiteLayout, { children: isLoading ? /* @__PURE__ */ jsx("div", { className: "py-40" }) : page ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, { title: t(page.title_en || page.label_en, page.title_es || page.label_es) }), /* @__PURE__ */ jsx("article", {
		className: "mx-auto max-w-3xl whitespace-pre-line px-4 py-16 text-lg leading-relaxed text-foreground/85",
		children: t(page.body_en, page.body_es)
	})] }) : /* @__PURE__ */ jsx(PageHero, { title: t("Page not found", "Página no encontrada") }) });
}
//#endregion
export { CustomPage as component };
