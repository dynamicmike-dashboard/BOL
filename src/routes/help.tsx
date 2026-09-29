import { createFileRoute } from "@tanstack/react-router";
import { Package, ShoppingBasket, Gift, Home as HomeIcon, TreePine } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { useBlocks } from "@/lib/cms";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/help")({
  head: () => ({
    meta: [
      { title: "How You Can Help — Breath of Life PDC" },
      { name: "description", content: "Contribute items, food care packages, holiday gifts, or sponsor a family in Playa del Carmen." },
      { property: "og:title", content: "How You Can Help — Breath of Life PDC" },
      { property: "og:description", content: "Contributions, holiday gift donations and Sponsor a Family." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://breathoflifepdc.org/help" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breathoflifepdc.org/help" }],
  }),
  component: Help,
});

function Help() {
  const b = useBlocks();
  const { t } = useLang();
  const cards = [
    { icon: Package, en: "Food for weekly care packages", es: "Alimentos para despensas semanales", k: "help_food" },
    { icon: ShoppingBasket, en: "Christmas & Día de Reyes", es: "Navidad y Día de Reyes", k: "help_gifts" },
    { icon: Gift, en: "Sponsor a Family", es: "Apadrina una Familia", k: "help_sponsor" },
  ];
  return (
    <SiteLayout>
      <PageHero title={t("How You Can Help", "Cómo puedes ayudar")} sub={b("help_intro")} />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.k} delay={i * 80}>
            <div className="h-full rounded-3xl border bg-card p-8 transition hover:shadow-lg">
              <div className="inline-flex rounded-2xl bg-secondary p-3">
                <c.icon className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-primary">{t(c.en, c.es)}</h2>
              <p className="mt-3 text-muted-foreground">{b(c.k)}</p>
            </div>
          </Reveal>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-br from-primary to-accent p-10 text-primary-foreground md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <TreePine className="h-10 w-10 shrink-0" />
              <div>
                <h2 className="text-3xl font-semibold">
                  {t("Christmas & Día de Reyes", "Navidad y Día de Reyes")}
                </h2>
                <p className="mt-2 max-w-2xl opacity-90">
                  {t(
                    "Host a toy drive at your business or meeting, or donate refreshments for our celebrations. We provide a collection box, signage and a list of needs.",
                    "Organiza una colecta de juguetes en tu negocio o reunión, o dona refrigerios para nuestras celebraciones. Nosotros damos la caja, señalización y lista de necesidades."
                  )}
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="rounded-full bg-background px-6 py-3 font-semibold text-primary"
            >
              {t("Get in touch", "Contáctanos")}
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}