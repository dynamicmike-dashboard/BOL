import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { pages } from "@/lib/cms";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Breath of Life PDC" },
      { name: "description", content: "Meet our dedicated volunteers who make Breath of Life PDC possible." },
      { property: "og:title", content: "Our Team — Breath of Life PDC" },
      { property: "og:description", content: "Meet our dedicated volunteers who make Breath of Life PDC possible." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://breathoflifepdc.org/team" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breathoflifepdc.org/team" }],
  }),
  component: Team,
});

function Team() {
  const { t } = useLang();
  const page = pages.find((p) => p.slug === "team" && !p.is_system && p.visible);

  return (
    <SiteLayout>
      <PageHero title={t("Our Team", "Nuestro Equipo")} />
      <Reveal>
        <img
          src="/team.jpg"
          alt={t("Our volunteer team", "Nuestro equipo de voluntarios")}
          className="w-full rounded-[2rem] object-cover shadow-2xl mb-12"
        />
      </Reveal>
      <article className="mx-auto max-w-3xl whitespace-pre-line px-4 py-16 text-lg leading-relaxed text-foreground/85">
        <p>Our work is made possible by dedicated volunteers who pack despensas, run events, and build community every week.</p>
      </article>
    </SiteLayout>
  );
}