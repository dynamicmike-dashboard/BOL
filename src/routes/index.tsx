import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, HandHeart, Users, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { useBlocks } from "@/lib/cms";
import { useLang } from "@/lib/i18n";
import hero from "@/assets/hero.jpg";
import packing from "@/assets/packing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Breath of Life PDC — Caring in Action in Playa del Carmen" },
      {
        name: "description",
        content:
          "Helping less-fortunate families in Playa del Carmen through food, support and community. Donate, volunteer or drop off items.",
      },
      { property: "og:title", content: "Breath of Life PDC — Caring in Action" },
      {
        property: "og:description",
        content:
          "Helping less-fortunate families in Playa del Carmen. Donate, volunteer or drop off items.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://breathoflifepdc.org/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breathoflifepdc.org/" }],
  }),
  component: Home,
});

function Home() {
  const b = useBlocks();
  const { t } = useLang();
  const stats = [1, 2, 3, 4].map((i) => b(`stat_${i}`, "|").split("|"));
  const programs = b("programs").split("|").filter(Boolean);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="animate-fade-up text-sm font-semibold uppercase tracking-widest text-accent">
              {b("hero_kicker")}
            </p>
            <h1
              className="animate-fade-up mt-4 text-5xl font-semibold leading-[1.05] text-primary md:text-7xl"
              style={{ animationDelay: "80ms" }}
            >
              {b("hero_title")}
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-xl text-lg text-muted-foreground"
              style={{ animationDelay: "160ms" }}
            >
              {b("hero_sub")}
            </p>
            <div
              className="animate-fade-up mt-8 flex flex-wrap gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5"
              >
                <Heart className="h-4 w-4" /> {t("Donate", "Donar")}
              </Link>
              <Link
                to="/volunteer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                {t("Volunteer", "Sé voluntario")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="absolute -inset-4 -z-10 rotate-3 rounded-[2.5rem] bg-accent/25" />
            <div className="absolute -inset-4 -z-10 -rotate-2 rounded-[2.5rem] bg-sky/25" />
            <img
              src={hero}
              alt={t(
                "Volunteers sharing groceries with families",
                "Voluntarios entregando despensas a familias",
              )}
              width={1600}
              height={1008}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 md:grid-cols-4">
          {stats.map(([n, l], i) => (
            <Reveal key={i} delay={i * 100} className="text-center">
              <div className="font-display text-4xl font-semibold md:text-5xl">{n}</div>
              <div className="mt-1 text-sm uppercase tracking-wider opacity-75">{l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 md:grid-cols-2">
        <Reveal>
          <img
            src={packing}
            alt={t("Volunteers packing food boxes", "Voluntarios armando despensas")}
            loading="lazy"
            width={1200}
            height={912}
            className="rounded-[2rem] object-cover shadow-xl"
          />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="text-4xl font-semibold text-primary md:text-5xl">{b("mission_title")}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{b("mission_body")}</p>
          <p className="mt-4 text-muted-foreground">{b("story_body")}</p>
          <Link
            to="/values"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:gap-3 transition-all"
          >
            {t("Our values & beliefs", "Nuestros valores y creencias")}{" "}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      <section className="bg-sand/60 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <Reveal>
            <h2 className="text-center text-4xl font-semibold text-primary">
              {t("Community programs", "Programas comunitarios")}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <Reveal key={i} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary font-display font-semibold text-primary">
                    {i + 1}
                  </div>
                  <p className="font-medium">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              to: "/help" as const,
              icon: HandHeart,
              en: "How you can help",
              es: "Cómo puedes ayudar",
              den: "Food, clothes, holiday gifts and sponsoring a family.",
              des: "Alimentos, ropa, regalos navideños y apadrinar una familia.",
            },
            {
              to: "/volunteer" as const,
              icon: Users,
              en: "Volunteer",
              es: "Voluntariado",
              den: "Give your time — join our weekly team.",
              des: "Dona tu tiempo — únete a nuestro equipo semanal.",
            },
            {
              to: "/drop-off" as const,
              icon: Heart,
              en: "Drop-off points",
              es: "Puntos de entrega",
              den: "Find a business near you accepting donations.",
              des: "Encuentra un negocio cerca que recibe donativos.",
            },
          ].map((c, i) => (
            <Reveal key={c.to} delay={i * 100}>
              <Link
                to={c.to}
                className="group block h-full rounded-3xl border bg-card p-8 transition hover:border-accent hover:shadow-xl"
              >
                <c.icon className="h-8 w-8 text-accent transition group-hover:scale-110" />
                <h3 className="mt-4 text-2xl font-semibold text-primary">{t(c.en, c.es)}</h3>
                <p className="mt-2 text-muted-foreground">{t(c.den, c.des)}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
