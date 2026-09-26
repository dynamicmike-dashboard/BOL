import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { usePages } from "@/lib/cms";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/p/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — Breath of Life PDC` },
      { name: "description", content: "Breath of Life PDC community page." },
      { property: "og:title", content: `${params.slug} — Breath of Life PDC` },
      { property: "og:description", content: "Breath of Life PDC community page." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `https://breathoflifepdc.org/p/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `https://breathoflifepdc.org/p/${params.slug}` }],
  }),
  component: CustomPage,
});

function CustomPage() {
  const { slug } = Route.useParams();
  const { t } = useLang();
  const { data, isLoading } = usePages();
  const page = data?.find((p) => p.slug === slug && !p.is_system && p.visible);
  return (
    <SiteLayout>
      {isLoading ? (
        <div className="py-40" />
      ) : page ? (
        <>
          <PageHero title={t(page.title_en || page.label_en, page.title_es || page.label_es)} />
          <article className="mx-auto max-w-3xl whitespace-pre-line px-4 py-16 text-lg leading-relaxed text-foreground/85">
            {t(page.body_en, page.body_es)}
          </article>
        </>
      ) : (
        <PageHero title={t("Page not found", "Página no encontrada")} />
      )}
    </SiteLayout>
  );
}
