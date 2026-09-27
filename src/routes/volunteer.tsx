import { createFileRoute } from "@tanstack/react-router";
import { Sun } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { SignupForm } from "@/components/SignupForm";
import { useBlocks, useRows } from "@/lib/cms";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Breath of Life PDC" },
      {
        name: "description",
        content:
          "Volunteer with Breath of Life in Playa del Carmen: pack despensas, run garden sales, support holiday celebrations.",
      },
      { property: "og:title", content: "Volunteer — Breath of Life PDC" },
      {
        property: "og:description",
        content: "Volunteers always welcome. Sign up to join our weekly team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://breathoflifepdc.org/volunteer" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breathoflifepdc.org/volunteer" }],
  }),
  component: Volunteer,
});

function Volunteer() {
  const b = useBlocks();
  const { t } = useLang();
  const { data: needs = [] } = useRows<any>("volunteer_needs");
  return (
    <SiteLayout>
      <PageHero
        kicker={t("Volunteers always welcome", "Voluntarios siempre bienvenidos")}
        title={t("Come and make them smile", "Ven y hazlos sonreír")}
        sub={b("volunteer_intro")}
      />
      <Reveal>
        <img
          src="/volunteers.jpg"
          alt={t("Our volunteer team", "Nuestro equipo de voluntarios")}
          className="w-full rounded-[2rem] object-cover shadow-2xl mb-12"
        />
      </Reveal>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-primary">
            {t("Opportunities", "Oportunidades")}
          </h2>
          <div className="mt-6 grid gap-4">
            {needs
              .filter((n) => n.visible)
              .map((n, i) => (
                <Reveal key={n.id} delay={i * 80}>
                  <div className="rounded-2xl border-l-4 border-accent bg-card p-6 shadow-sm">
                    <h3 className="text-xl font-semibold">{t(n.title_en, n.title_es)}</h3>
                    <p className="mt-1 text-muted-foreground">{t(n.desc_en, n.desc_es)}</p>
                  </div>
                </Reveal>
              ))}
          </div>
          <div className="mt-8 flex items-center gap-3 text-lg italic text-primary">
            <Sun className="h-6 w-6 text-accent" /> {b("volunteer_tagline")}
          </div>
        </div>
        <Reveal delay={100}>
          <h2 className="mb-6 text-3xl font-semibold text-primary">{t("Sign up", "Inscríbete")}</h2>
          <SignupForm kind="volunteer" />
        </Reveal>
      </section>
    </SiteLayout>
  );
}
