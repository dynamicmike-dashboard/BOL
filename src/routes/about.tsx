import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { pages } from "@/lib/cms";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Breath of Life PDC" },
      { name: "description", content: "Learn about Breath of Life PDC, a community charity in Playa del Carmen, Mexico." },
      { property: "og:title", content: "About Us — Breath of Life PDC" },
      { property: "og:description", content: "Learn about Breath of Life PDC, a community charity in Playa del Carmen, Mexico." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://breathoflifepdc.org/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breathoflifepdc.org/about" }],
  }),
  component: About,
});

function About() {
  const { t } = useLang();
  const page = pages.find((p) => p.slug === "about" && !p.is_system && p.visible);

  return (
    <SiteLayout>
      <PageHero title={t("About Us", "Sobre Nosotros")} />
      <Reveal>
        <img
          src="/about.jpg"
          alt={t("About Breath of Life PDC", "Sobre Aliento de Vida PDC")}
          className="w-full rounded-[2rem] object-cover shadow-2xl mb-12"
        />
      </Reveal>
      <article className="mx-auto max-w-3xl whitespace-pre-line px-4 py-16 text-lg leading-relaxed text-foreground/85">
        {t(page.body_en, page.body_es)}
      </article>
    </SiteLayout>
  );
}