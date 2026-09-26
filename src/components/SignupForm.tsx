import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "@/lib/i18n";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40),
  message: z.string().trim().max(2000),
});

export function SignupForm({ kind }: { kind: "contact" | "volunteer" }) {
  const { t } = useLang();
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(fd);
    if (!parsed.success) {
      toast.error(t("Please check your name and email.", "Revisa tu nombre y correo."));
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("messages").insert({ ...parsed.data, kind });
    setBusy(false);
    if (error) {
      toast.error(
        t("Something went wrong. Please try again.", "Algo salió mal. Intenta de nuevo."),
      );
      return;
    }
    setDone(true);
  }

  if (done)
    return (
      <div className="rounded-3xl bg-secondary p-10 text-center">
        <h3 className="text-2xl font-semibold text-primary">{t("Thank you!", "¡Gracias!")}</h3>
        <p className="mt-2 text-muted-foreground">
          {t("We'll be in touch soon.", "Nos pondremos en contacto pronto.")}
        </p>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border bg-card p-8 shadow-sm">
      <Input name="name" required maxLength={100} placeholder={t("Your name", "Tu nombre")} />
      <Input
        name="email"
        type="email"
        required
        maxLength={255}
        placeholder={t("Email", "Correo electrónico")}
      />
      <Input
        name="phone"
        maxLength={40}
        placeholder={t("WhatsApp / phone", "WhatsApp / teléfono")}
      />
      <Textarea
        name="message"
        maxLength={2000}
        rows={4}
        placeholder={
          kind === "volunteer"
            ? t(
                "How would you like to help? Availability?",
                "¿Cómo te gustaría ayudar? ¿Disponibilidad?",
              )
            : t("Your message", "Tu mensaje")
        }
      />
      <button
        disabled={busy}
        className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
      >
        {busy
          ? "…"
          : kind === "volunteer"
            ? t("Sign me up", "Inscribirme")
            : t("Send message", "Enviar mensaje")}
      </button>
    </form>
  );
}
