import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { useBlocks, useRows } from "@/lib/cms";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/drop-off")({
  head: () => ({
    meta: [
      { title: "Drop-Off Points — Breath of Life PDC" },
      {
        name: "description",
        content:
          "Businesses across Playa del Carmen accepting donations for Breath of Life, with addresses and map directions.",
      },
      { property: "og:title", content: "Drop-Off Points — Breath of Life PDC" },
      {
        property: "og:description",
        content: "Find a drop-off point near you in Playa del Carmen.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://breathoflifepdc.org/drop-off" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breathoflifepdc.org/drop-off" }],
  }),
  component: DropOff,
});

const q = (d: any) => encodeURIComponent(`${d.name}, ${d.address}, Playa del Carmen, Quintana Roo`);

function DropOff() {
  const b = useBlocks();
  const { t } = useLang();
  const { data = [] } = useRows<any>("dropoffs");
  const list = data.filter((d) => d.visible);
  const [sel, setSel] = useState(0);
  const active = list[sel];
  return (
    <SiteLayout>
      <PageHero title={t("Drop-Off Points", "Puntos de entrega")} sub={b("dropoff_intro")} />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 lg:grid-cols-5">
        <div className="grid content-start gap-3 lg:col-span-2">
          {list.map((d, i) => (
            <Reveal key={d.id} delay={i * 50}>
              <button
                onClick={() => setSel(i)}
                className={`w-full rounded-2xl border p-5 text-left transition ${i === sel ? "border-accent bg-secondary shadow-md" : "bg-card hover:border-accent/50"}`}
              >
                <h3 className="text-lg font-semibold text-primary">{d.name}</h3>
                <p className="mt-1 flex gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" />
                  {d.address}
                </p>
                {t(d.hours_en, d.hours_es) && (
                  <p className="mt-1 flex gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 shrink-0" />
                    {t(d.hours_en, d.hours_es)}
                  </p>
                )}
                {d.phone && (
                  <p className="mt-1 flex gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 shrink-0" />
                    {d.phone}
                  </p>
                )}
                <a
                  href={d.map_url || `https://www.google.com/maps/search/?api=1&query=${q(d)}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent"
                >
                  <Navigation className="h-4 w-4" />
                  {t("Directions", "Cómo llegar")}
                </a>
              </button>
            </Reveal>
          ))}
        </div>
        <div className="lg:col-span-3">
          <div className="sticky top-24 overflow-hidden rounded-3xl border shadow-xl">
            {active && (
              <iframe
                key={active.id}
                title={active.name}
                className="h-[420px] w-full lg:h-[600px]"
                loading="lazy"
                src={`https://maps.google.com/maps?q=${q(active)}&z=15&output=embed`}
              />
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
