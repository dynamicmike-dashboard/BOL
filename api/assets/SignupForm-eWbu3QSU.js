import { n as useLang } from "./i18n-BoG3AB_M.js";
import { o as cn } from "./Reveal-DRFMNMt8.js";
import * as React from "react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { z } from "zod";
//#region src/components/ui/input.tsx
var Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ jsx("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
//#region src/components/ui/textarea.tsx
var Textarea = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
//#region src/components/SignupForm.tsx
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
		await new Promise((r) => setTimeout(r, 1e3));
		setBusy(false);
		setDone(true);
		console.log(`${kind} signup:`, parsed.data);
	}
	if (done) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-3xl bg-secondary p-10 text-center",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "text-2xl font-semibold text-primary",
			children: t("Thank you!", "¡Gracias!")
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
				placeholder: t("Email", "Correo electrónico")
			}),
			/* @__PURE__ */ jsx(Input, {
				name: "phone",
				maxLength: 40,
				placeholder: t("WhatsApp / phone", "WhatsApp / teléfono")
			}),
			/* @__PURE__ */ jsx(Textarea, {
				name: "message",
				maxLength: 2e3,
				rows: 4,
				placeholder: kind === "volunteer" ? t("How would you like to help? Availability?", "¿Cómo te gustaría ayudar? ¿Disponibilidad?") : t("Your message", "Tu mensaje")
			}),
			/* @__PURE__ */ jsx("button", {
				disabled: busy,
				className: "rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50",
				children: busy ? "…" : kind === "volunteer" ? t("Sign me up", "Inscribirme") : t("Send message", "Enviar mensaje")
			})
		]
	});
}
//#endregion
export { SignupForm as t };
