import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, ExternalLink } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { useBlocks, useRows } from "@/lib/cms";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Breath of Life PDC" },
      {
        name: "description",
        content:
          "Donate by Stripe, PayPal (USA & Canada tax-deductible), OXXO, Banco Azteca, Mercado Pago W. Reference your donation as BOL.",
      },
      { property: "og:title", content: "Donate — Breath of Life PDC" },
      {
        property: "og:description",
        content:
          "Donate via Stripe, PayPal (tax-deductible), OXXO, Banco Azteca, Mercado Pago W. Every peso helps families in Playa del Carmen.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://breathoflifepdc.org/donate" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breathoflifepdc.org/donate" }],
  }),
  component: Donate,
});

function Donate() {
  const b = useBlocks();
  const { t } = useLang();
  const { data = [] } = useRows<any>("donation_methods");
  return (
    <SiteLayout>
      <PageHero title={t("Donations", "Donativos")} sub={b("donate_intro")} />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-20 md:grid-cols-2">
        {data
          .filter((d) => d.visible)
          .map((d, i) => (
            <Reveal key={d.id} delay={i * 80}>
              <div className="flex h-full flex-col gap-5 rounded-3xl border bg-card p-8 sm:flex-row">
                <div className="flex-1">
                  <CreditCard className="h-7 w-7 text-accent" />
                  <h2 className="mt-3 text-2xl font-semibold text-primary">
                    {t(d.title_en, d.title_es)}
                  </h2>
                  <p className="mt-2 whitespace-pre-line text-muted-foreground">
                    {t(d.details_en, d.details_es)}
                  </p>
                  {d.link && (
                    <a
                      href={d.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground"
                    >
                      {t("Donate now", "Donar ahora")} <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                {d.qr && (
                  <img
                    alt="QR"
                    loading="lazy"
                    width={140}
                    height={140}
                    className="h-36 w-36 self-center rounded-xl border bg-card p-2"
                    src={d.qr.startsWith('/') ? d.qr : `https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(d.link)}`}
                  />
                )}
              </div>
            </Reveal>
          ))}
      </section>
      <p className="mx-auto max-w-3xl px-4 text-center font-semibold text-primary">
        {t(
          "Please remember to reference your donation as BOL.",
          "Por favor recuerda usar la referencia BOL.",
        )}
      </p>
    </SiteLayout>
  );
}
