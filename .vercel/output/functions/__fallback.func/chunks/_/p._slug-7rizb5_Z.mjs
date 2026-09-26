import { R as Route, u as useLang } from './router-uGOhsvVw.mjs';
import { b as usePages, S as SiteLayout, P as PageHero } from './SiteLayout-Bz5Z1dGy.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import 'react';
import '@tanstack/react-router';
import '@tanstack/react-query';
import 'sonner';
import 'lucide-react';
import '@radix-ui/react-dialog';
import 'clsx';
import 'tailwind-merge';

function CustomPage() {
  const { slug } = Route.useParams();
  const { t } = useLang();
  const { data} = usePages();
  const page = data == null ? void 0 : data.find((p) => p.slug === slug && !p.is_system && p.visible);
  return /* @__PURE__ */ jsx(SiteLayout, { children: page ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(PageHero, { title: t(page.title_en || page.label_en, page.title_es || page.label_es) }), /* @__PURE__ */ jsx("article", {
    className: "mx-auto max-w-3xl whitespace-pre-line px-4 py-16 text-lg leading-relaxed text-foreground/85",
    children: t(page.body_en, page.body_es)
  })] }) : /* @__PURE__ */ jsx(PageHero, { title: t("Page not found", "P\xE1gina no encontrada") }) });
}

export { CustomPage as component };
//# sourceMappingURL=p._slug-7rizb5_Z.mjs.map
