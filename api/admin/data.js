// In-memory storage for admin data (resets on cold starts)
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
    // ... other content blocks
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

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", req.headers.get("origin") || "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const url = new URL(req.url, `https://${req.headers.get("host")}`);
  const pathname = url.pathname;

  try {
    if (pathname === "/api/admin/data") {
      const data = readAllData();
      return res.status(200).json(data);
    }

    if (pathname === "/api/admin/savePage") {
      const { page } = await req.json();
      const pages = memoryStore.pages;
      const idx = pages.findIndex(p => p.id === page.id);
      if (page.id && idx >= 0) pages[idx] = page;
      else { page.id = `page-${Date.now()}`; pages.push(page); }
      return res.status(200).json({ success: true });
    }

    if (pathname === "/api/admin/deletePage") {
      const { id } = await req.json();
      memoryStore.pages = memoryStore.pages.filter(p => p.id !== id);
      return res.status(200).json({ success: true });
    }

    if (pathname === "/api/admin/clonePage") {
      const { id, slug, title_en, title_es } = await req.json();
      const pages = memoryStore.pages;
      const page = pages.find(p => p.id === id);
      if (!page) return res.status(404).json({ error: "Page not found" });
      const cloned = { ...page, id: `page-${Date.now()}`, slug: `${slug}-copy`, title_en: `${title_en} (Copy)`, title_es: `${title_es} (Copia)` };
      pages.push(cloned);
      return res.status(200).json({ success: true, page: cloned });
    }

    if (pathname === "/api/admin/saveDropoff") {
      const { dropoff } = await req.json();
      const dropoffs = memoryStore.dropoffs;
      const idx = dropoffs.findIndex(d => d.id === dropoff.id);
      if (dropoff.id && idx >= 0) dropoffs[idx] = dropoff;
      else { dropoff.id = `dropoff-${Date.now()}`; dropoffs.push(dropoff); }
      return res.status(200).json({ success: true });
    }

    if (pathname === "/api/admin/deleteDropoff") {
      const { id } = await req.json();
      memoryStore.dropoffs = memoryStore.dropoffs.filter(d => d.id !== id);
      return res.status(200).json({ success: true });
    }

    if (pathname === "/api/admin/cloneDropoff") {
      const { id } = await req.json();
      const dropoffs = memoryStore.dropoffs;
      const dropoff = dropoffs.find(d => d.id === id);
      if (!dropoff) return res.status(404).json({ error: "Dropoff not found" });
      const cloned = { ...dropoff, id: `dropoff-${Date.now()}`, name: `${dropoff.name} (Copy)` };
      dropoffs.push(cloned);
      return res.status(200).json({ success: true, dropoff: cloned });
    }

    if (pathname === "/api/admin/saveVolunteerNeed") {
      const { need } = await req.json();
      const needs = memoryStore.volunteerNeeds;
      const idx = needs.findIndex(n => n.id === need.id);
      if (need.id && idx >= 0) needs[idx] = need;
      else { need.id = `volunteer-${Date.now()}`; needs.push(need); }
      return res.status(200).json({ success: true });
    }

    if (pathname === "/api/admin/deleteVolunteerNeed") {
      const { id } = await req.json();
      memoryStore.volunteerNeeds = memoryStore.volunteerNeeds.filter(n => n.id !== id);
      return res.status(200).json({ success: true });
    }

    if (pathname === "/api/admin/cloneVolunteerNeed") {
      const { id } = await req.json();
      const needs = memoryStore.volunteerNeeds;
      const need = needs.find(n => n.id === id);
      if (!need) return res.status(404).json({ error: "Volunteer need not found" });
      const cloned = { ...need, id: `volunteer-${Date.now()}`, title_en: `${need.title_en} (Copy)`, title_es: `${need.title_es} (Copia)` };
      needs.push(cloned);
      return res.status(200).json({ success: true, need: cloned });
    }

    if (pathname === "/api/admin/saveDonationMethod") {
      const { method } = await req.json();
      const methods = memoryStore.donationMethods;
      const idx = methods.findIndex(m => m.id === method.id);
      if (method.id && idx >= 0) methods[idx] = method;
      else { method.id = `donation-${Date.now()}`; methods.push(method); }
      return res.status(200).json({ success: true });
    }

    if (pathname === "/api/admin/deleteDonationMethod") {
      const { id } = await req.json();
      memoryStore.donationMethods = memoryStore.donationMethods.filter(m => m.id !== id);
      return res.status(200).json({ success: true });
    }

    if (pathname === "/api/admin/cloneDonationMethod") {
      const { id } = await req.json();
      const methods = memoryStore.donationMethods;
      const method = methods.find(m => m.id === id);
      if (!method) return res.status(404).json({ error: "Donation method not found" });
      const cloned = { ...method, id: `donation-${Date.now()}`, name_en: `${method.name_en} (Copy)`, name_es: `${method.name_es} (Copia)` };
      methods.push(cloned);
      return res.status(200).json({ success: true, method: cloned });
    }

    if (pathname === "/api/admin/saveContentBlock") {
      const { block } = await req.json();
      const blocks = memoryStore.contentBlocks;
      if (blocks[block.key]) blocks[block.key] = { ...blocks[block.key], ...block };
      else blocks[block.key] = block;
      return res.status(200).json({ success: true });
    }

    if (pathname === "/api/admin/deleteContentBlock") {
      const { key } = await req.json();
      delete memoryStore.contentBlocks[key];
      return res.status(200).json({ success: true });
    }

    if (pathname === "/api/admin/reorderItems") {
      const { type, items } = await req.json();
      memoryStore[type] = items;
      return res.status(200).json({ success: true });
    }

    return res.status(404).json({ error: "Not found" });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Internal server error" });
  }
}