import { useState, useEffect, createContext, useContext } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { createFileRoute, lazyRouteComponent, createRouter, createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts } from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';

var LangContext = createContext({
  lang: "en",
  setLang: () => {
  },
  t: (en) => en
});
function LangProvider({ children }) {
  const [lang, setLangState] = useState("en");
  useEffect(() => {
    const saved = localStorage.getItem("bol-lang");
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l) => {
    setLangState(l);
    localStorage.setItem("bol-lang", l);
  };
  const t = (en, es) => lang === "es" ? es || en : en || es;
  return /* @__PURE__ */ jsx(LangContext.Provider, {
    value: {
      lang,
      setLang,
      t
    },
    children
  });
}
var useLang = () => useContext(LangContext);

var $$splitComponentImporter$7 = () => import('./p._slug-7rizb5_Z.mjs');
var Route$8 = createFileRoute("/p/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} \u2014 Breath of Life PDC` },
      {
        name: "description",
        content: "Breath of Life PDC community page."
      },
      {
        property: "og:title",
        content: `${params.slug} \u2014 Breath of Life PDC`
      },
      {
        property: "og:description",
        content: "Breath of Life PDC community page."
      },
      {
        property: "og:type",
        content: "article"
      },
      {
        property: "og:url",
        content: `https://breathoflifepdc.org/p/${params.slug}`
      }
    ],
    links: [{
      rel: "canonical",
      href: `https://breathoflifepdc.org/p/${params.slug}`
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});

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
var styles_default = "/assets/styles-DMz6rnZp.css";
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
  useEffect(() => {
  }, [error]);
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
var Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      { title: "Breath of Life PDC \u2014 Caring in Action" },
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
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, {
    client: queryClient,
    children: /* @__PURE__ */ jsxs(LangProvider, { children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Toaster$1, {})] })
  });
}
var $$splitComponentImporter$6 = () => import('./routes-DW8EW3HL.mjs');
var Route$6 = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Breath of Life PDC \u2014 Caring in Action in Playa del Carmen" },
      {
        name: "description",
        content: "Helping less-fortunate families in Playa del Carmen through food, support and community. Donate, volunteer or drop off items."
      },
      {
        property: "og:title",
        content: "Breath of Life PDC \u2014 Caring in Action"
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
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import('./contact-CMF1a-7A.mjs');
var Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us \u2014 Breath of Life PDC" },
      {
        name: "description",
        content: "Get in touch with Breath of Life PDC by email, WhatsApp, Messenger or social media."
      },
      {
        property: "og:title",
        content: "Contact Us \u2014 Breath of Life PDC"
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
var $$splitComponentImporter$4 = () => import('./donate-C0A-DZ2Q.mjs');
var Route$4 = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate \u2014 Breath of Life PDC" },
      {
        name: "description",
        content: "Donate by Stripe, PayPal (USA & Canada tax purposes), OXXO or Mexican bank transfer. Reference your donation as BOL."
      },
      {
        property: "og:title",
        content: "Donate \u2014 Breath of Life PDC"
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
var $$splitComponentImporter$3 = () => import('./drop-off-BKmfwIFQ.mjs');
var Route$3 = createFileRoute("/drop-off")({
  head: () => ({
    meta: [
      { title: "Drop-Off Points \u2014 Breath of Life PDC" },
      {
        name: "description",
        content: "Businesses across Playa del Carmen accepting donations for Breath of Life, with addresses and map directions."
      },
      {
        property: "og:title",
        content: "Drop-Off Points \u2014 Breath of Life PDC"
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
var $$splitComponentImporter$2 = () => import('./help-XRfxcBFW.mjs');
var Route$2 = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "How You Can Help \u2014 Breath of Life PDC" },
      {
        name: "description",
        content: "Contribute items, food care packages, holiday gifts, or sponsor a family in Playa del Carmen."
      },
      {
        property: "og:title",
        content: "How You Can Help \u2014 Breath of Life PDC"
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
var $$splitComponentImporter$1 = () => import('./values-Bi6wIlDP.mjs');
var Route$1 = createFileRoute("/values")({
  head: () => ({
    meta: [
      { title: "Values & Beliefs \u2014 Breath of Life PDC" },
      {
        name: "description",
        content: "Our mission, vision, objective and faith: a non-denominational Christian ministry of social action in Playa del Carmen."
      },
      {
        property: "og:title",
        content: "Values & Beliefs \u2014 Breath of Life PDC"
      },
      {
        property: "og:description",
        content: "Mission, vision, objective and faith behind Breath of Life \u2013 Caring in Action."
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
var $$splitComponentImporter = () => import('./volunteer-AOCBRIpR.mjs');
var Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer \u2014 Breath of Life PDC" },
      {
        name: "description",
        content: "Volunteer with Breath of Life in Playa del Carmen: pack despensas, run garden sales, support holiday celebrations."
      },
      {
        property: "og:title",
        content: "Volunteer \u2014 Breath of Life PDC"
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
var rootRouteChildren = {
  IndexRoute: Route$6.update({
    id: "/",
    path: "/",
    getParentRoute: () => Route$7
  }),
  ContactRoute: Route$5.update({
    id: "/contact",
    path: "/contact",
    getParentRoute: () => Route$7
  }),
  DonateRoute: Route$4.update({
    id: "/donate",
    path: "/donate",
    getParentRoute: () => Route$7
  }),
  DropOffRoute: Route$3.update({
    id: "/drop-off",
    path: "/drop-off",
    getParentRoute: () => Route$7
  }),
  HelpRoute: Route$2.update({
    id: "/help",
    path: "/help",
    getParentRoute: () => Route$7
  }),
  ValuesRoute: Route$1.update({
    id: "/values",
    path: "/values",
    getParentRoute: () => Route$7
  }),
  VolunteerRoute: Route.update({
    id: "/volunteer",
    path: "/volunteer",
    getParentRoute: () => Route$7
  }),
  PSlugRoute: Route$8.update({
    id: "/p/$slug",
    path: "/p/$slug",
    getParentRoute: () => Route$7
  })
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
};

const routerUGOhsvVw = /*#__PURE__*/Object.freeze({
	__proto__: null,
	getRouter: getRouter
});

export { Route$8 as R, routerUGOhsvVw as r, useLang as u };
//# sourceMappingURL=router-uGOhsvVw.mjs.map
