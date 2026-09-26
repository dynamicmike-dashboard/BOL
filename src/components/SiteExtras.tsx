import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLang } from "@/lib/i18n";

export const WHATSAPP_GROUP =
  "https://chat.whatsapp.com/KBWFahrhjwG9mMLusEiz4G?s=cl&p=a&mlu=4&ilr=4";

export function WhatsAppButton() {
  const { t } = useLang();
  const label = t("Join our WhatsApp", "Únete a nuestro WhatsApp");
  return (
    <a
      href={WHATSAPP_GROUP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-accent px-4 py-3 font-semibold text-accent-foreground shadow-lg transition hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

type Legal = { title: [string, string]; body: [string, string] };
const LEGAL: Legal[] = [
  {
    title: ["Privacy Policy", "Política de privacidad"],
    body: [
      "Breath of Life PDC respects your privacy. When you contact us or sign up to volunteer, we collect only the information you provide (name, email, phone and message) and use it solely to respond to you and coordinate our charitable activities. We never sell or share your personal information with third parties. You may ask us to delete your information at any time by contacting BreathOfLifePDC@gmail.com.",
      "Breath of Life PDC respeta tu privacidad. Cuando nos contactas o te inscribes como voluntario, solo recopilamos la información que nos proporcionas (nombre, correo, teléfono y mensaje) y la usamos únicamente para responderte y coordinar nuestras actividades benéficas. Nunca vendemos ni compartimos tus datos personales con terceros. Puedes solicitar que eliminemos tu información en cualquier momento escribiendo a BreathOfLifePDC@gmail.com.",
    ],
  },
  {
    title: ["Disclaimer", "Aviso legal"],
    body: [
      "The information on this website is provided in good faith for general information about Breath of Life PDC and its community programs. While we strive to keep it accurate and up to date, we make no guarantees about its completeness. Links to external websites are provided for convenience; we are not responsible for their content.",
      "La información de este sitio se ofrece de buena fe como información general sobre Breath of Life PDC y sus programas comunitarios. Aunque procuramos mantenerla precisa y actualizada, no garantizamos que esté completa. Los enlaces a sitios externos se ofrecen por conveniencia; no somos responsables de su contenido.",
    ],
  },
  {
    title: ["Tax & Donation Disclaimer", "Aviso fiscal y de donaciones"],
    body: [
      "Donations are used to support families in need in Playa del Carmen. Tax deductibility depends on the donation channel and your country of residence: only donations made through the partner organizations listed on our Donate page may be tax deductible in the USA or Canada. Donations made directly in Mexico may not be tax deductible. Please consult your tax advisor. All donations are final and non-refundable.",
      "Las donaciones se usan para apoyar a familias necesitadas en Playa del Carmen. La deducibilidad fiscal depende del canal de donación y de tu país de residencia: solo las donaciones hechas a través de las organizaciones aliadas indicadas en nuestra página de Donaciones pueden ser deducibles en EE. UU. o Canadá. Las donaciones hechas directamente en México podrían no ser deducibles. Consulta a tu asesor fiscal. Todas las donaciones son definitivas y no reembolsables.",
    ],
  },
];

export function LegalLinks() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const cur = open !== null ? LEGAL[open] : null;
  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        {LEGAL.map((l, i) => (
          <button key={i} onClick={() => setOpen(i)} className="underline hover:opacity-100">
            {t(...l.title)}
          </button>
        ))}
      </div>
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-h-[85vh] max-w-[92vw] overflow-y-auto sm:max-w-lg">
          {cur && (
            <>
              <DialogHeader>
                <DialogTitle>{t(...cur.title)}</DialogTitle>
              </DialogHeader>
              <p className="leading-relaxed text-muted-foreground">{t(...cur.body)}</p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
