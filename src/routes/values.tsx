import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Sparkles, BookOpen, Palette } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { useBlocks } from "@/lib/cms";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/values")({
  head: () => ({
    meta: [
      { title: "Values & Beliefs — Breath of Life PDC" },
      {
        name: "description",
        content:
          "Our mission, vision, objective and faith: a non-denominational Christian ministry of social action in Playa del Carmen.",
      },
      { property: "og:title", content: "Values & Beliefs — Breath of Life PDC" },
      {
        property: "og:description",
        content: "Mission, vision, objective and faith behind Breath of Life – Caring in Action.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://breathoflifepdc.org/values" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breathoflifepdc.org/values" }],
  }),
  component: Values,
});

function Values() {
  const b = useBlocks();
  const { t } = useLang();
  const items = [
    { icon: Target, en: "Mission", es: "Nuestra Misión", k: "value_mission" },
    { icon: Eye, en: "Vision", es: "Nuestra Visión", k: "value_vision" },
    { icon: Sparkles, en: "Objective", es: "Nuestro Objetivo", k: "value_objective" },
    { icon: BookOpen, en: "Our Faith", es: "Nuestra Fe", k: "value_faith" },
  ];
  return (
    <SiteLayout>
      <PageHero
        kicker="#BreathOfLife #AlientoDeVida"
        title={t("Foundational Values & Beliefs", "Valores y creencias fundamentales")}
        sub={b("values_intro")}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.k} delay={i * 80}>
            <div className="h-full rounded-3xl border bg-card p-8">
              <it.icon className="h-8 w-8 text-accent" />
              <h2 className="mt-4 text-2xl font-semibold text-primary">{t(it.en, it.es)}</h2>
              <p className="mt-3 text-muted-foreground">{b(it.k)}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <section className="mx-auto max-w-4xl px-4">
        <Reveal>
          <div className="rounded-3xl bg-primary p-10 text-primary-foreground">
            <Palette className="h-8 w-8" />
            <h2 className="mt-4 text-3xl font-semibold">
              {t("The meaning of our logo", "El significado de nuestro logo")}
            </h2>
            <div className="mt-6 flex gap-3">
              <span className="h-10 w-10 rounded-full bg-accent" />
              <span className="h-10 w-10 rounded-full bg-secondary-foreground ring-2 ring-primary-foreground/30" />
              <span className="h-10 w-10 rounded-full bg-sky" />
            </div>
            <p className="mt-6 text-lg opacity-90">{b("value_logo")}</p>
            <p className="mt-4 italic opacity-80">
              {t(
                "At Breath of Life, we believe that service and love are the reflection of true faith in action.",
                "En Breath of Life, creemos que el servicio y el amor son el reflejo de la verdadera fe en acción.",
              )}
            </p>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
