import { u as useLang } from './router-uGOhsvVw.mjs';
import { u as useBlocks, a as useRows, S as SiteLayout, P as PageHero } from './SiteLayout-Bz5Z1dGy.mjs';
import { R as Reveal } from './Reveal-0DjsODsP.mjs';
import { S as SignupForm } from './SignupForm-BoKy1dr9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Sun } from 'lucide-react';
import 'react';
import '@tanstack/react-router';
import '@tanstack/react-query';
import 'sonner';
import '@radix-ui/react-dialog';
import 'clsx';
import 'tailwind-merge';
import 'zod';

function Volunteer() {
  const b = useBlocks();
  const { t } = useLang();
  const { data: needs = [] } = useRows("volunteer_needs");
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx(PageHero, {
    kicker: t("Volunteers always welcome", "Voluntarios siempre bienvenidos"),
    title: t("Come and make them smile", "Ven y hazlos sonre\xEDr"),
    sub: b("volunteer_intro")
  }), /* @__PURE__ */ jsxs("section", {
    className: "mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2",
    children: [/* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", {
        className: "text-3xl font-semibold text-primary",
        children: t("Opportunities", "Oportunidades")
      }),
      /* @__PURE__ */ jsx("div", {
        className: "mt-6 grid gap-4",
        children: needs.filter((n) => n.visible).map((n, i) => /* @__PURE__ */ jsx(Reveal, {
          delay: i * 80,
          children: /* @__PURE__ */ jsxs("div", {
            className: "rounded-2xl border-l-4 border-accent bg-card p-6 shadow-sm",
            children: [/* @__PURE__ */ jsx("h3", {
              className: "text-xl font-semibold",
              children: t(n.title_en, n.title_es)
            }), /* @__PURE__ */ jsx("p", {
              className: "mt-1 text-muted-foreground",
              children: t(n.desc_en, n.desc_es)
            })]
          })
        }, n.id))
      }),
      /* @__PURE__ */ jsxs("div", {
        className: "mt-8 flex items-center gap-3 text-lg italic text-primary",
        children: [
          /* @__PURE__ */ jsx(Sun, { className: "h-6 w-6 text-accent" }),
          " ",
          b("volunteer_tagline")
        ]
      })
    ] }), /* @__PURE__ */ jsxs(Reveal, {
      delay: 100,
      children: [/* @__PURE__ */ jsx("h2", {
        className: "mb-6 text-3xl font-semibold text-primary",
        children: t("Sign up", "Inscr\xEDbete")
      }), /* @__PURE__ */ jsx(SignupForm, { kind: "volunteer" })]
    })]
  })] });
}

export { Volunteer as component };
//# sourceMappingURL=volunteer-AOCBRIpR.mjs.map
