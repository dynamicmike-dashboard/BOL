import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteLayout, PageHero, socialLinks } from "@/components/SiteLayout";
import { WHATSAPP_GROUP } from "@/components/SiteExtras";
import { Reveal } from "@/components/Reveal";
import { SignupForm } from "@/components/SignupForm";
import { useBlocks } from "@/lib/cms";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Breath of Life PDC" },
      {
        name: "description",
        content:
          "Get in touch with Breath of Life PDC by email, WhatsApp, Messenger or social media.",
      },
      { property: "og:title", content: "Contact Us — Breath of Life PDC" },
      { property: "og:description", content: "Reach Breath of Life PDC in Playa del Carmen." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://breathoflifepdc.org/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://breathoflifepdc.org/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const b = useBlocks();
  const { t } = useLang();
  const email = b("contact_email");
  const wa = b("contact_whatsapp").replace(/\D/g, "");
  const links = [
    email && { href: `mailto:${email}`, icon: Mail, label: email },
    wa && { href: `https://wa.me/${wa}`, icon: Phone, label: "WhatsApp" },
    {
      href: WHATSAPP_GROUP,
      icon: MessageCircle,
      label: t("Join our WhatsApp group", "Únete a nuestro grupo de WhatsApp"),
    },
    ...socialLinks(t).map((s) => ({ href: s.href, icon: s.Icon, label: s.label })),
  ].filter(Boolean) as { href: string; icon: any; label: string }[];
  return (
    <SiteLayout>
      <PageHero title={t("Connect with us", "Conecta con nosotros")} />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
        <div className="grid content-start gap-3">
          {links.map((l, i) => (
            <Reveal key={l.href} delay={i * 60}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border bg-card p-5 transition hover:border-accent hover:shadow-md"
              >
                <span className="rounded-full bg-secondary p-3">
                  <l.icon className="h-5 w-5 text-primary" />
                </span>
                <span className="font-medium">{l.label}</span>
              </a>
            </Reveal>
          ))}
          <div className="mt-2 flex items-center gap-4 p-5 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            {b("contact_address")}
          </div>
        </div>
        <Reveal delay={100}>
          <SignupForm kind="contact" />
        </Reveal>
      </section>
    </SiteLayout>
  );
}
