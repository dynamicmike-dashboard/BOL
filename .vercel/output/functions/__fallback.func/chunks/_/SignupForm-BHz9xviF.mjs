import { u as useLang } from './router-BMqEO7F2.mjs';
import { s as supabase } from './client-CKWpw7kM.mjs';
import { I as Input } from './input-43J5deqP.mjs';
import { T as Textarea } from './textarea-B6JBQ6xo.mjs';
import { useState } from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';
import { toast } from 'sonner';
import { z } from 'zod';

var schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(40),
  message: z.string().trim().max(2e3)
});
function SignupForm({ kind }) {
  const { t } = useLang();
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    const fd = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(fd);
    if (!parsed.success) {
      toast.error(t("Please check your name and email.", "Revisa tu nombre y correo."));
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("messages").insert({
      ...parsed.data,
      kind
    });
    setBusy(false);
    if (error) {
      toast.error(t("Something went wrong. Please try again.", "Algo sali\xF3 mal. Intenta de nuevo."));
      return;
    }
    setDone(true);
  }
  if (done) return /* @__PURE__ */ jsxs("div", {
    className: "rounded-3xl bg-secondary p-10 text-center",
    children: [/* @__PURE__ */ jsx("h3", {
      className: "text-2xl font-semibold text-primary",
      children: t("Thank you!", "\xA1Gracias!")
    }), /* @__PURE__ */ jsx("p", {
      className: "mt-2 text-muted-foreground",
      children: t("We'll be in touch soon.", "Nos pondremos en contacto pronto.")
    })]
  });
  return /* @__PURE__ */ jsxs("form", {
    onSubmit,
    className: "grid gap-4 rounded-3xl border bg-card p-8 shadow-sm",
    children: [
      /* @__PURE__ */ jsx(Input, {
        name: "name",
        required: true,
        maxLength: 100,
        placeholder: t("Your name", "Tu nombre")
      }),
      /* @__PURE__ */ jsx(Input, {
        name: "email",
        type: "email",
        required: true,
        maxLength: 255,
        placeholder: t("Email", "Correo electr\xF3nico")
      }),
      /* @__PURE__ */ jsx(Input, {
        name: "phone",
        maxLength: 40,
        placeholder: t("WhatsApp / phone", "WhatsApp / tel\xE9fono")
      }),
      /* @__PURE__ */ jsx(Textarea, {
        name: "message",
        maxLength: 2e3,
        rows: 4,
        placeholder: kind === "volunteer" ? t("How would you like to help? Availability?", "\xBFC\xF3mo te gustar\xEDa ayudar? \xBFDisponibilidad?") : t("Your message", "Tu mensaje")
      }),
      /* @__PURE__ */ jsx("button", {
        disabled: busy,
        className: "rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50",
        children: busy ? "\u2026" : kind === "volunteer" ? t("Sign me up", "Inscribirme") : t("Send message", "Enviar mensaje")
      })
    ]
  });
}

export { SignupForm as S };
//# sourceMappingURL=SignupForm-BHz9xviF.mjs.map
