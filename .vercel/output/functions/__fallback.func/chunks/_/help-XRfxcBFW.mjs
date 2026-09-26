import { u as useLang } from './router-uGOhsvVw.mjs';
import { u as useBlocks, S as SiteLayout, P as PageHero } from './SiteLayout-Bz5Z1dGy.mjs';
import { R as Reveal } from './Reveal-0DjsODsP.mjs';
import { Link } from '@tanstack/react-router';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Package, ShoppingBasket, Gift, Home, TreePine } from 'lucide-react';
import 'react';
import '@tanstack/react-query';
import 'sonner';
import '@radix-ui/react-dialog';
import 'clsx';
import 'tailwind-merge';

function Help() {
  const b = useBlocks();
  const { t } = useLang();
  const cards = [
    {
      icon: Package,
      en: "Contributions",
      es: "Aportaciones",
      k: "help_contributions"
    },
    {
      icon: ShoppingBasket,
      en: "Food for weekly care packages",
      es: "Alimentos para despensas semanales",
      k: "help_food"
    },
    {
      icon: Gift,
      en: "Holiday gift donations",
      es: "Regalos navide\xF1os",
      k: "help_gifts"
    },
    {
      icon: Home,
      en: "Sponsor a family",
      es: "Apadrina una familia",
      k: "help_sponsor"
    }
  ];
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(PageHero, {
      title: t("How You Can Help", "C\xF3mo puedes ayudar"),
      sub: b("mission_body")
    }),
    /* @__PURE__ */ jsx("section", {
      className: "mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2",
      children: cards.map((c, i) => /* @__PURE__ */ jsx(Reveal, {
        delay: i * 80,
        children: /* @__PURE__ */ jsxs("div", {
          className: "h-full rounded-3xl border bg-card p-8 transition hover:shadow-lg",
          children: [
            /* @__PURE__ */ jsx("div", {
              className: "inline-flex rounded-2xl bg-secondary p-3",
              children: /* @__PURE__ */ jsx(c.icon, { className: "h-7 w-7 text-primary" })
            }),
            /* @__PURE__ */ jsx("h2", {
              className: "mt-4 text-2xl font-semibold text-primary",
              children: t(c.en, c.es)
            }),
            /* @__PURE__ */ jsx("p", {
              className: "mt-3 text-muted-foreground",
              children: b(c.k)
            })
          ]
        })
      }, c.k))
    }),
    /* @__PURE__ */ jsx("section", {
      className: "mx-auto max-w-6xl px-4",
      children: /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", {
        className: "flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-br from-primary to-accent p-10 text-primary-foreground md:flex-row md:items-center md:justify-between",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex gap-4",
          children: [/* @__PURE__ */ jsx(TreePine, { className: "h-10 w-10 shrink-0" }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
            className: "text-3xl font-semibold",
            children: t("Christmas & D\xEDa de Reyes", "Navidad y D\xEDa de Reyes")
          }), /* @__PURE__ */ jsx("p", {
            className: "mt-2 max-w-2xl opacity-90",
            children: t("Host a toy drive at your business or meeting, or donate refreshments for our celebrations. We provide a collection box, signage and a list of needs.", "Organiza una colecta de juguetes en tu negocio o reuni\xF3n, o dona refrigerios para nuestras celebraciones. Nosotros damos la caja, se\xF1alizaci\xF3n y lista de necesidades.")
          })] })]
        }), /* @__PURE__ */ jsx(Link, {
          to: "/contact",
          className: "rounded-full bg-background px-6 py-3 font-semibold text-primary",
          children: t("Get in touch", "Cont\xE1ctanos")
        })]
      }) })
    })
  ] });
}

export { Help as component };
//# sourceMappingURL=help-XRfxcBFW.mjs.map
