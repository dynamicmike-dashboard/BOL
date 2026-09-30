import { createAPIFileRoute } from "@tanstack/react-router";

// In-memory storage
const memoryStore = {
  pages: [
    { id: "page-1", slug: "team", label_en: "Our Team", label_es: "Nuestro Equipo", title_en: "Our Team", title_es: "Nuestro Equipo", body_en: "<p>Our team content...</p>", body_es: "<p>Contenido del equipo...</p>", image: "/team.jpg", sort_order: 1, visible: true, is_system: true },
    { id: "page-2", slug: "about", label_en: "About Us", label_es: "Sobre Nosotros", title_en: "About Us", title_es: "Sobre Nosotros", body_en: "About us content...", body_es: "Contenido sobre nosotros...", image: "/about.jpg", sort_order: 2, visible: true, is_system: false },
  ],
  contentBlocks: {
    hero_kicker: { en: "Caring in Action", es: "Cuidado en Acción" },
    hero_title: { en: "Breath of Life PDC", es: "Aliento de Vida PDC" },
    hero_sub: { en: "Helping less-fortunate families in Playa del Carmen through food, support and community.", es: "Ayudando a familias menos afortunadas en Playa del Carmen con alimentos, apoyo y comunidad." },
    help_intro: { en: "Every contribution makes a difference. Whether it's food, gifts, or sponsoring a family, your help changes lives.", es: "Cada contribución marca la diferencia. Ya sea alimentos, regalos o apadrinar una familia, tu ayuda cambia vidas." },
    help_food: { en: "Food for weekly care packages", es: "Alimentos para despensas semanales" },
    help_food_desc: { en: "Rice, beans, oil, pasta, canned goods, fresh produce when available.", es: "Arroz, frijoles, aceite, pasta, enlatados, productos frescos cuando hay." },
    help_gifts: { en: "Christmas & Día de Reyes gifts", es: "Regalos de Navidad y Día de Reyes" },
    help_gifts_desc: { en: "New toys for children ages 0-12. We also need wrapping paper and tape.", es: "Juguetes nuevos para niños de 0-12 años. También necesitamos papel de regalo y cinta." },
    help_sponsor: { en: "Sponsor a Family", es: "Apadrina una Familia" },
    help_sponsor_desc: { en: "$50/month provides a weekly despensa for a family of four. You'll receive updates and photos.", es: "$50/mes provee una despensa semanal para una familia de cuatro. Recibirás actualizaciones y fotos." },
  },
  dropoffs: [
    { id: "dropoff-1", name: "Roma Spaghetti", address: "Calle 34, entre 5ta y 10ma Av", hours_en: "Mon-Sat 12pm-10pm", hours_es: "Lun-Sáb 12pm-10pm", phone: "+52 984 111 2222", map_url: "https://maps.google.com/?q=Roma+Spaghetti+Playa+del+Carmen", image: "", sort_order: 1, visible: true },
    { id: "dropoff-2", name: "Pueblito Escondido Calle 38", address: "Calle 38, entre 5ta y 10ma Av", hours_en: "Daily 8am-10pm", hours_es: "Diario 8am-10pm", phone: "+52 984 333 4444", map_url: "https://maps.google.com/?q=Pueblito+Escondido+Calle+38+Playa+del+Carmen", image: "", sort_order: 2, visible: true },
  ],
  volunteerNeeds: [
    { id: "volunteer-1", title_en: "Food Packing", title_es: "Empaque de Alimentos", desc_en: "Help assemble weekly despensas every Tuesday morning.", desc_es: "Ayuda a armar despensas semanales cada martes por la mañana.", image: "", sort_order: 1, visible: true },
    { id: "volunteer-2", title_en: "Garden Sales", title_es: "Ventas de Huerto", desc_en: "Run the weekend plant/veggie sale to raise funds.", desc_es: "Organiza la venta de plantas/verduras del fin de semana para recaudar fondos.", image: "", sort_order: 2, visible: true },
  ],
  donationMethods: [
    { id: "donation-1", name_en: "Stripe", name_es: "Stripe", details_en: "Credit/Debit Card (Stripe). One-time or monthly.", details_es: "Tarjeta de Crédito/Débito (Stripe). Único o mensual.", link: "https://buy.stripe.com/00g7sy5O9aJRgdafYY", qr: "/QR-stripe-donate.webp", image: "", visible: true, sort_order: 1 },
    { id: "donation-2", name_en: "PayPal", name_es: "PayPal", details_en: "USA & Canada tax-deductible receipts available.", details_es: "Recibos deducibles de impuestos en USA y Canadá disponibles.", link: "https://paypal.me/BreathOfLifePDC", qr: "/QR-USA-and-Canada-Tax-Purposes.webp", image: "", visible: true, sort_order: 2 },
    { id: "donation-3", name_en: "OXXO", name_es: "OXXO", details_en: "Pay cash at any OXXO in Mexico. Reference: BOL", details_es: "Paga en efectivo en cualquier OXXO en México. Referencia: BOL", link: "", qr: "", image: "", visible: true, sort_order: 3 },
    { id: "donation-4", name_en: "Banco Azteca", name_es: "Banco Azteca", details_en: "Michele Avila Mendoza | Card: 4027 6661 1819 3043 | CLABE: 127694013013508192", details_es: "Michele Avila Mendoza | Tarjeta: 4027 6661 1819 3043 | CLABE: 127694013013508192", link: "", qr: "", image: "", visible: true, sort_order: 4 },
    { id: "donation-5", name_en: "Mercado Pago W", name_es: "Mercado Pago W", details_en: "Michele Avila Mendoza | CLABE: 722969010176925651", details_es: "Michele Avila Mendoza | CLABE: 722969010176925651", link: "", qr: "", image: "", visible: true, sort_order: 5 },
  ],
};

function readAllData() {
  return {
    pages: memoryStore.pages,
    contentBlocks: memoryStore.contentBlocks,
    dropoffs: memoryStore.dropoffs,
    volunteerNeeds: memoryStore.volunteerNeeds,
    donationMethods: memoryStore.donationMethods,
  };
}

export const APIRoute = createAPIFileRoute("/api/admin/data")({
  POST: async () => {
    return Response.json(readAllData());
  },
});