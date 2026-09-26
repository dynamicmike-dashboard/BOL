import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, Facebook, Instagram, Youtube, MessageCircle, Globe } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { pagePath, usePages, useBlocks } from "@/lib/cms";
import { WhatsAppButton, LegalLinks } from "@/components/SiteExtras";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Breath of Life PDC"
      className={`shrink-0 object-contain ${className}`}
    />
  );
}
export const SOCIAL = {
  website: "https://breathoflifepdc.org/",
  facebook: "https://facebook.com/breathoflifepdc",
  instagram: "https://instagram.com/breathoflifeadv",
  youtube: "https://www.youtube.com/@BreathOfLifePDC",
  messenger: "https://m.me/breathoflifepdc",
};
export const socialLinks = (t: (en: string, es: string) => string) => [
  { href: SOCIAL.website, Icon: Globe, label: t("Website", "Sitio web") },
  { href: SOCIAL.facebook, Icon: Facebook, label: "Facebook" },
  {
    href: SOCIAL.messenger,
    Icon: MessageCircle,
    label: t("Facebook Messenger", "Messenger de Facebook"),
  },
  { href: SOCIAL.instagram, Icon: Instagram, label: "Instagram" },
  { href: SOCIAL.youtube, Icon: Youtube, label: "YouTube" },
];

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex rounded-full border bg-card p-0.5 text-xs font-semibold">
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-3 py-1.5 transition-colors ${lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        >
          {l === "en" ? "English" : "Español"}
        </button>
      ))}
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const { t } = useLang();
  const b = useBlocks();
  const { data: pages = [] } = usePages();
  const nav = pages.filter((p) => p.visible);
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="flex items-center gap-2" aria-label="Breath of Life PDC home">
            <LogoMark className="h-12 w-12 sm:h-14 sm:w-14" />
            <span className="hidden whitespace-nowrap font-display text-lg font-semibold sm:inline">
              Breath of Life
            </span>
          </Link>
          <nav className="hidden items-center gap-0.5 xl:flex">
            {nav.map((p) => (
              <a
                key={p.id}
                href={pagePath(p)}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
              >
                {t(p.label_en, p.label_es)}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LangToggle />
            <button
              className="rounded-full p-2 xl:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t px-4 py-3 xl:hidden">
            {nav.map((p) => (
              <a
                key={p.id}
                href={pagePath(p)}
                className="rounded-lg px-3 py-2 font-medium hover:bg-secondary"
              >
                {t(p.label_en, p.label_es)}
              </a>
            ))}
          </nav>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="mt-24 bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3">
          <div>
            <LogoMark className="mb-4 h-24 w-24 rounded bg-primary-foreground" />
            <h3 className="text-2xl">Breath of Life PDC</h3>
            <p className="mt-2 opacity-80">{b("contact_address")}</p>
          </div>
          <div className="opacity-80">
            <p>
              {t(
                "Special recognition to our many volunteers and supporters.",
                "Un reconocimiento especial a nuestros voluntarios y simpatizantes.",
              )}
            </p>
            <p className="mt-2">
              {t("Website sponsored by", "Sitio patrocinado por")}{" "}
              <a
                className="underline"
                href="https://playaexpats.com"
                target="_blank"
                rel="noreferrer"
              >
                PlayaExpats.com
              </a>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {socialLinks(t).map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="rounded-full bg-primary-foreground/10 p-3 transition hover:bg-primary-foreground/20"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-2 border-t border-primary-foreground/10 px-4 py-4 pb-20 text-center text-sm opacity-80 sm:pb-4">
          <LegalLinks />
          <p>© {new Date().getFullYear()} Breath of Life PDC</p>
        </div>
      </footer>
      <WhatsAppButton />
    </div>
  );
}

export function PageHero({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden bg-secondary">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-float" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-64 w-64 rounded-full bg-sky/30 blur-3xl animate-float" />
      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center md:py-28">
        {kicker && (
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-accent">
            {kicker}
          </p>
        )}
        <h1 className="animate-fade-up mt-3 text-4xl font-semibold text-primary md:text-6xl">
          {title}
        </h1>
        {sub && (
          <p
            className="animate-fade-up mx-auto mt-5 max-w-2xl text-lg text-muted-foreground"
            style={{ animationDelay: "120ms" }}
          >
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
