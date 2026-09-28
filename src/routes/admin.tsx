import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, LogOut, Eye, EyeOff, Pencil, Trash2, Plus, Save, X, Image, Copy } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { contentBlocks, pages, dropoffs, volunteerNeeds, donationMethods } from "@/lib/cms";
import { SiteLayout } from "@/components/SiteLayout";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "boladmin2024";

const contentBlocksArray = Object.entries(contentBlocks || {}).map(([key, val]) => ({ key, ...val }));

const getDefaultItem = (type: string) => {
  switch (type) {
    case "blocks": return { key: "", en: "", es: "" };
    case "pages": return { id: `page-${Date.now()}`, slug: "", label_en: "", label_es: "", title_en: "", title_es: "", body_en: "", body_es: "", image: "", sort_order: 0, visible: true, is_system: false };
    case "dropoffs": return { id: `dropoff-${Date.now()}`, name: "", address: "", hours_en: "", hours_es: "", phone: "", map_url: "", image: "", sort_order: 0, visible: true };
    case "volunteer": return { id: `volunteer-${Date.now()}`, title_en: "", title_es: "", desc_en: "", desc_es: "", image: "", sort_order: 0, visible: true };
    case "donations": return { id: `donation-${Date.now()}`, name_en: "", name_es: "", details_en: "", details_es: "", link: "", image: "", sort_order: 0, visible: true };
    default: return {};
  }
};

function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLang();
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!authed) {
    return (
      <SiteLayout>
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="w-full max-w-md rounded-3xl border bg-card p-8 shadow-lg">
            <h1 className="text-center text-2xl font-semibold text-primary mb-6">{t("Admin Login", "Acceso Admin")}</h1>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin()} placeholder={t("Password", "Contraseña")} className="w-full rounded-lg border bg-background px-4 py-3 pr-12 text-lg" />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">{showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}</button>
            </div>
            <button onClick={handleLogin} className="mt-4 w-full rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">{t("Login", "Entrar")}</button>
          </div>
        </div>
      </SiteLayout>
    );
    function handleLogin() { if (password === ADMIN_PASSWORD) setAuthed(true); else alert(t("Incorrect password", "Contraseña incorrecta")); }
  }

  return (
    <SiteLayout>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-primary">{t("Admin Panel", "Panel de Admin")}</h1>
        <button onClick={() => setAuthed(false)} className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium transition hover:bg-accent"><LogOut className="h-4 w-4" /> {t("Logout", "Salir")}</button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AdminSection title={t("Content Blocks", "Bloques de Contenido")} icon={Image} initialItems={Object.entries(contentBlocks || {}).map(([key, val]) => ({ key, ...val }))} type="blocks" />
        <AdminSection title={t("Pages", "Páginas")} icon={Pencil} initialItems={pages || []} type="pages" />
        <AdminSection title={t("Drop-off Points", "Puntos de Entrega")} icon={Image} initialItems={dropoffs || []} type="dropoffs" />
        <AdminSection title={t("Volunteer Needs", "Necesidades de Voluntariado")} icon={Pencil} initialItems={volunteerNeeds || []} type="volunteer" />
        <AdminSection title={t("Donation Methods", "Métodos de Donación")} icon={Image} initialItems={donationMethods || []} type="donations" />
      </div>
    </SiteLayout>
  );
}

function AdminSection({ title, icon: Icon, initialItems, type }: { title: string; icon: React.ComponentType<{ className?: string }>; initialItems: any[]; type: string }) {
  const { t } = useLang();
  const [editingKey, setEditingKey] = useState<string | null>(null);
  const [editData, setEditData] = useState<any>(null);
  const [newItemDefaults, setNewItemDefaults] = useState<any>(null);
  const [items, setItems] = useState<any[]>(initialItems);

  const getDefaultItem = (type: string) => {
    switch (type) {
      case "blocks": return { key: "", en: "", es: "" };
      case "pages": return { id: `page-${Date.now()}`, slug: "", label_en: "", label_es: "", title_en: "", title_es: "", body_en: "", body_es: "", image: "", sort_order: 0, visible: true, is_system: false };
      case "dropoffs": return { id: `dropoff-${Date.now()}`, name: "", address: "", hours_en: "", hours_es: "", phone: "", map_url: "", image: "", sort_order: 0, visible: true };
      case "volunteer": return { id: `volunteer-${Date.now()}`, title_en: "", title_es: "", desc_en: "", desc_es: "", image: "", sort_order: 0, visible: true };
      case "donations": return { id: `donation-${Date.now()}`, name_en: "", name_es: "", details_en: "", details_es: "", link: "", image: "", sort_order: 0, visible: true };
      default: return {};
    }
  };

  const startEdit = (item: any) => {
    setEditData({ ...item });
    setEditingKey(item.key || item.id);
  };

  const startNew = () => {
    const def = getDefaultItem(type);
    setNewItemDefaults(def);
    setEditData({ ...def });
    setEditingKey("new");
  };

  const startClone = (item: any) => {
    const cloned = { ...item, id: `${item.id || item.key}-copy-${Date.now()}`, slug: item.slug ? `${item.slug}-copy` : undefined };
    setEditData(cloned);
    setEditingKey(cloned.key || cloned.id);
  };

  const handleSave = (updated: any) => {
    console.log(`${type} save:`, updated);
    alert(`${title} saved: ${JSON.stringify(updated)}`);
    if (editingKey === "new") {
      setItems(prev => [...prev, updated]);
    }
    setEditingKey(null);
    setEditData(null);
    setNewItemDefaults(null);
  };

  const handleCancel = () => {
    setEditingKey(null);
    setEditData(null);
    setNewItemDefaults(null);
  };

  const renderFields = (data: any, isNew: boolean) => {
    const TextArea = ({ value, onChange, placeholder, rows = 6 }: any) => (
      <div className="space-y-1">
        <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
        <p className="text-xs text-muted-foreground">HTML allowed (e.g., <code><strong>bold</strong></code>, <code><a href="...">link</a></code>)</p>
      </div>
    );

    const ImageInput = ({ value, onChange, placeholder }: any) => (
      <div className="space-y-1">
        <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-lg border bg-background px-3 py-2 text-sm" />
        {value && <img src={value} alt="Preview" className="max-w-xs h-auto rounded border" />}
      </div>
    );

    const update = (field: string, value: any) => setEditData(d => ({ ...d, [field]: value }));

    switch (type) {
      case "blocks":
        return (
          <div className="grid gap-2">
            <input value={data.key || ""} onChange={(e) => update("key", e.target.value)} placeholder="key (e.g., hero_title)" className="rounded-lg border bg-background px-3 py-2 text-sm font-mono" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">EN</span></label>
            <textarea value={data.en || ""} onChange={(e) => update("en", e.target.value)} placeholder="English content (HTML allowed)" rows={4} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">ES</span></label>
            <textarea value={data.es || ""} onChange={(e) => update("es", e.target.value)} placeholder="Spanish content (HTML allowed)" rows={4} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
          </div>
        );
      case "pages":
        return (
          <div className="grid gap-2">
            <input value={data.slug || ""} onChange={(e) => update("slug", e.target.value)} placeholder="slug (e.g., about, team)" className="rounded-lg border bg-background px-3 py-2 text-sm font-mono" />
            <input value={data.label_en || ""} onChange={(e) => update("label_en", e.target.value)} placeholder="Menu Label EN" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.label_es || ""} onChange={(e) => update("label_es", e.target.value)} placeholder="Menu Label ES" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.title_en || ""} onChange={(e) => update("title_en", e.target.value)} placeholder="Page Title EN" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.title_es || ""} onChange={(e) => update("title_es", e.target.value)} placeholder="Page Title ES" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.image || ""} onChange={(e) => update("image", e.target.value)} placeholder="Image URL (optional)" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">Body EN</span></label>
            <textarea value={data.body_en || ""} onChange={(e) => update("body_en", e.target.value)} placeholder="Page content EN (HTML allowed)" rows={8} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">Body ES</span></label>
            <textarea value={data.body_es || ""} onChange={(e) => update("body_es", e.target.value)} placeholder="Page content ES (HTML allowed)" rows={8} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <div className="grid gap-2 sm:grid-cols-2">
              <input value={data.sort_order ?? 0} onChange={(e) => update("sort_order", parseInt(e.target.value) || 0)} type="number" placeholder="Sort order" className="rounded-lg border bg-background px-3 py-2 text-sm" />
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={data.visible ?? true} onChange={(e) => update("visible", e.target.checked)} /> {t("Visible in menu", "Visible en menú")}</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={data.is_system ?? false} onChange={(e) => update("is_system", e.target.checked)} /> {t("System page (can't delete)", "Página del sistema (no eliminable)")}</label>
            </div>
          </div>
        );
      case "dropoffs":
        return (
          <div className="grid gap-2">
            <input value={data.name || ""} onChange={(e) => update("name", e.target.value)} placeholder="Location name" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.address || ""} onChange={(e) => update("address", e.target.value)} placeholder="Full address" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.hours_en || ""} onChange={(e) => update("hours_en", e.target.value)} placeholder="Hours EN" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.hours_es || ""} onChange={(e) => update("hours_es", e.target.value)} placeholder="Hours ES" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.phone || ""} onChange={(e) => update("phone", e.target.value)} placeholder="Phone" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.map_url || ""} onChange={(e) => update("map_url", e.target.value)} placeholder="Google Maps URL" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.image || ""} onChange={(e) => update("image", e.target.value)} placeholder="Image URL (optional)" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <div className="grid gap-2 sm:grid-cols-2">
              <input value={data.sort_order ?? 0} onChange={(e) => update("sort_order", parseInt(e.target.value) || 0)} type="number" placeholder="Sort order" className="rounded-lg border bg-background px-3 py-2 text-sm" />
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={data.visible ?? true} onChange={(e) => update("visible", e.target.checked)} /> {t("Visible", "Visible")}</label>
            </div>
          </div>
        );
      case "volunteer":
        return (
          <div className="grid gap-2">
            <input value={data.title_en || ""} onChange={(e) => update("title_en", e.target.value)} placeholder="Title EN" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.title_es || ""} onChange={(e) => update("title_es", e.target.value)} placeholder="Title ES" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.image || ""} onChange={(e) => update("image", e.target.value)} placeholder="Image URL (optional)" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">Desc EN</span></label>
            <textarea value={data.desc_en || ""} onChange={(e) => update("desc_en", e.target.value)} placeholder="Description EN (HTML allowed)" rows={4} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">Desc ES</span></label>
            <textarea value={data.desc_es || ""} onChange={(e) => update("desc_es", e.target.value)} placeholder="Description ES (HTML allowed)" rows={4} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <div className="grid gap-2 sm:grid-cols-2">
              <input value={data.sort_order ?? 0} onChange={(e) => update("sort_order", parseInt(e.target.value) || 0)} type="number" placeholder="Sort order" className="rounded-lg border bg-background px-3 py-2 text-sm" />
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={data.visible ?? true} onChange={(e) => update("visible", e.target.checked)} /> {t("Visible", "Visible")}</label>
            </div>
          </div>
        );
      case "donations":
        return (
          <div className="grid gap-2">
            <input value={data.name_en || ""} onChange={(e) => update("name_en", e.target.value)} placeholder="Name EN" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.name_es || ""} onChange={(e) => update("name_es", e.target.value)} placeholder="Name ES" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.image || ""} onChange={(e) => update("image", e.target.value)} placeholder="Image/QR Code URL (optional)" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">Details EN</span></label>
            <textarea value={data.details_en || ""} onChange={(e) => update("details_en", e.target.value)} placeholder="Details EN (HTML allowed)" rows={4} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">Details ES</span></label>
            <textarea value={data.details_es || ""} onChange={(e) => update("details_es", e.target.value)} placeholder="Details ES (HTML allowed)" rows={4} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <input value={data.link || ""} onChange={(e) => update("link", e.target.value)} placeholder="Donation link (Stripe, PayPal, etc.)" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <div className="grid gap-2 sm:grid-cols-2">
              <input value={data.sort_order ?? 0} onChange={(e) => update("sort_order", parseInt(e.target.value) || 0)} type="number" placeholder="Sort order" className="rounded-lg border bg-background px-3 py-2 text-sm" />
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={data.visible ?? true} onChange={(e) => update("visible", e.target.checked)} /> {t("Visible", "Visible")}</label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-primary"><Icon className="h-5 w-5" /> {title}</h2>
        <button onClick={startNew} className="rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent"><Plus className="h-4 w-4" /></button>
      </div>
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {items.map((item) => (
          <AdminItem key={item.key || item.id} item={item} type={type} editingKey={editingKey} editData={editData} setEditData={setEditData} onEdit={startEdit} onClone={startClone} onSave={handleSave} onCancel={handleCancel} onDelete={() => { if (confirm(t("Delete this item?", "¿Eliminar este elemento?"))) { console.log(`${type} delete:`, item.key || item.id); alert(`${title} deleted: ${item.key || item.id}`); } }} />
        ))}
        {editingKey === "new" && (
          <AdminItem item={newItemDefaults} type={type} editingKey="new" editData={editData} setEditData={setEditData} onEdit={() => {}} onSave={(updated) => { console.log(`${type} create:`, updated); alert(`${title} created: ${JSON.stringify(updated)}`); setEditingKey(null); setEditData(null); setNewItemDefaults(null); }} onCancel={() => { setEditingKey(null); setEditData(null); setNewItemDefaults(null); }} onDelete={() => {}} />
        )}
      </div>
    </div>
  );
}

function AdminItem({ item, type, editingKey, editData, setEditData, onEdit, onClone, onSave, onCancel, onDelete }: { item: any; type: string; editingKey: string | null; editData: any; setEditData: (updater: (prev: any) => any) => void; onEdit: (item: any) => void; onClone: (item: any) => void; onSave: (updated: any) => void; onCancel: () => void; onDelete: () => void }) {
  const { t } = useLang();
  const itemKey = item.key || item.id;
  const isEditing = editingKey === itemKey || (editingKey === "new" && item.id === editData?.id);
  const data = isEditing ? editData : item;

  const update = (field: string, value: any) => setEditData(d => ({ ...d, [field]: value }));

  const renderFields = () => {
    const TextArea = ({ value, onChange, placeholder, rows = 6 }: any) => (
      <div className="space-y-1">
        <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
        <p className="text-xs text-muted-foreground">HTML allowed (e.g., <code><strong>bold</strong></code>, <code><a href="...">link</a></code>)</p>
      </div>
    );

    const ImageInput = ({ value, onChange, placeholder }: any) => (
      <div className="space-y-1">
        <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-lg border bg-background px-3 py-2 text-sm" />
        {value && <img src={value} alt="Preview" className="max-w-xs h-auto rounded border" />}
      </div>
    );

    const update = (field: string, value: any) => setEditData(d => ({ ...d, [field]: value }));

    switch (type) {
      case "blocks":
        return (
          <div className="grid gap-2">
            <input value={data.key || ""} onChange={(e) => update("key", e.target.value)} placeholder="key (e.g., hero_title)" className="rounded-lg border bg-background px-3 py-2 text-sm font-mono" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">EN</span></label>
            <textarea value={data.en || ""} onChange={(e) => update("en", e.target.value)} placeholder="English content (HTML allowed)" rows={4} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">ES</span></label>
            <textarea value={data.es || ""} onChange={(e) => update("es", e.target.value)} placeholder="Spanish content (HTML allowed)" rows={4} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
          </div>
        );
      case "pages":
        return (
          <div className="grid gap-2">
            <input value={data.slug || ""} onChange={(e) => update("slug", e.target.value)} placeholder="slug (e.g., about, team)" className="rounded-lg border bg-background px-3 py-2 text-sm font-mono" />
            <input value={data.label_en || ""} onChange={(e) => update("label_en", e.target.value)} placeholder="Menu Label EN" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.label_es || ""} onChange={(e) => update("label_es", e.target.value)} placeholder="Menu Label ES" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.title_en || ""} onChange={(e) => update("title_en", e.target.value)} placeholder="Page Title EN" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.title_es || ""} onChange={(e) => update("title_es", e.target.value)} placeholder="Page Title ES" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.image || ""} onChange={(e) => update("image", e.target.value)} placeholder="Image URL (optional)" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">Body EN</span></label>
            <textarea value={data.body_en || ""} onChange={(e) => update("body_en", e.target.value)} placeholder="Page content EN (HTML allowed)" rows={8} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">Body ES</span></label>
            <textarea value={data.body_es || ""} onChange={(e) => update("body_es", e.target.value)} placeholder="Page content ES (HTML allowed)" rows={8} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <div className="grid gap-2 sm:grid-cols-2">
              <input value={data.sort_order ?? 0} onChange={(e) => update("sort_order", parseInt(e.target.value) || 0)} type="number" placeholder="Sort order" className="rounded-lg border bg-background px-3 py-2 text-sm" />
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={data.visible ?? true} onChange={(e) => update("visible", e.target.checked)} /> {t("Visible in menu", "Visible en menú")}</label>
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={data.is_system ?? false} onChange={(e) => update("is_system", e.target.checked)} /> {t("System page (can't delete)", "Página del sistema (no eliminable)")}</label>
            </div>
          </div>
        );
      case "dropoffs":
        return (
          <div className="grid gap-2">
            <input value={data.name || ""} onChange={(e) => update("name", e.target.value)} placeholder="Location name" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.address || ""} onChange={(e) => update("address", e.target.value)} placeholder="Full address" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.hours_en || ""} onChange={(e) => update("hours_en", e.target.value)} placeholder="Hours EN" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.hours_es || ""} onChange={(e) => update("hours_es", e.target.value)} placeholder="Hours ES" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.phone || ""} onChange={(e) => update("phone", e.target.value)} placeholder="Phone" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.map_url || ""} onChange={(e) => update("map_url", e.target.value)} placeholder="Google Maps URL" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.image || ""} onChange={(e) => update("image", e.target.value)} placeholder="Image URL (optional)" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <div className="grid gap-2 sm:grid-cols-2">
              <input value={data.sort_order ?? 0} onChange={(e) => update("sort_order", parseInt(e.target.value) || 0)} type="number" placeholder="Sort order" className="rounded-lg border bg-background px-3 py-2 text-sm" />
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={data.visible ?? true} onChange={(e) => update("visible", e.target.checked)} /> {t("Visible", "Visible")}</label>
            </div>
          </div>
        );
      case "volunteer":
        return (
          <div className="grid gap-2">
            <input value={data.title_en || ""} onChange={(e) => update("title_en", e.target.value)} placeholder="Title EN" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.title_es || ""} onChange={(e) => update("title_es", e.target.value)} placeholder="Title ES" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.image || ""} onChange={(e) => update("image", e.target.value)} placeholder="Image URL (optional)" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">Desc EN</span></label>
            <textarea value={data.desc_en || ""} onChange={(e) => update("desc_en", e.target.value)} placeholder="Description EN (HTML allowed)" rows={4} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">Desc ES</span></label>
            <textarea value={data.desc_es || ""} onChange={(e) => update("desc_es", e.target.value)} placeholder="Description ES (HTML allowed)" rows={4} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <div className="grid gap-2 sm:grid-cols-2">
              <input value={data.sort_order ?? 0} onChange={(e) => update("sort_order", parseInt(e.target.value) || 0)} type="number" placeholder="Sort order" className="rounded-lg border bg-background px-3 py-2 text-sm" />
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={data.visible ?? true} onChange={(e) => update("visible", e.target.checked)} /> {t("Visible", "Visible")}</label>
            </div>
          </div>
        );
      case "donations":
        return (
          <div className="grid gap-2">
            <input value={data.name_en || ""} onChange={(e) => update("name_en", e.target.value)} placeholder="Name EN" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.name_es || ""} onChange={(e) => update("name_es", e.target.value)} placeholder="Name ES" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <input value={data.image || ""} onChange={(e) => update("image", e.target.value)} placeholder="Image/QR Code URL (optional)" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">Details EN</span></label>
            <textarea value={data.details_en || ""} onChange={(e) => update("details_en", e.target.value)} placeholder="Details EN (HTML allowed)" rows={4} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <label className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-20 font-mono text-xs">Details ES</span></label>
            <textarea value={data.details_es || ""} onChange={(e) => update("details_es", e.target.value)} placeholder="Details ES (HTML allowed)" rows={4} className="w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs" />
            <input value={data.link || ""} onChange={(e) => update("link", e.target.value)} placeholder="Donation link (Stripe, PayPal, etc.)" className="rounded-lg border bg-background px-3 py-2 text-sm" />
            <div className="grid gap-2 sm:grid-cols-2">
              <input value={data.sort_order ?? 0} onChange={(e) => update("sort_order", parseInt(e.target.value) || 0)} type="number" placeholder="Sort order" className="rounded-lg border bg-background px-3 py-2 text-sm" />
              <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={data.visible ?? true} onChange={(e) => update("visible", e.target.checked)} /> {t("Visible", "Visible")}</label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (isEditing) {
    return (
      <div className="rounded-xl border bg-secondary p-4 space-y-3">
        {renderFields()}
        <div className="flex gap-2">
          <button onClick={() => onSave(editData)} className="flex-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"><Save className="h-4 w-4 mr-1" /> {t("Save", "Guardar")}</button>
          <button onClick={onCancel} className="flex-1 rounded-full border px-4 py-2 text-sm"><X className="h-4 w-4 mx-auto" /> {t("Cancel", "Cancelar")}</button>
        </div>
      </div>
    );
  }

  const displayTitle = data.key || data.title_en || data.name || data.slug || data.label_en || item.id || "New";

  return (
    <div className="flex items-start justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition">
      <div className="flex items-start gap-3 min-w-0">
        {data.image && <img src={data.image} alt="" className="h-12 w-12 shrink-0 rounded-lg object-cover border" />}
        <div className="flex-1 min-w-0">
          <p className="font-medium text-primary truncate">{data.label_en || data.title_en || data.name || data.key || item.id || "New"}</p>
          {data.en && <p className="text-xs text-muted-foreground truncate">{data.en}</p>}
          {data.es && <p className="text-xs text-muted-foreground truncate">{data.es}</p>}
          {data.title_en && <p className="text-xs text-muted-foreground truncate">{data.title_en}</p>}
          {data.name && <p className="text-xs text-muted-foreground truncate">{data.name}</p>}
          {data.address && <p className="text-xs text-muted-foreground truncate">{data.address}</p>}
          {data.hours_en && <p className="text-xs text-muted-foreground truncate">{data.hours_en}</p>}
          {data.details_en && <p className="text-xs text-muted-foreground truncate line-clamp-1">{data.details_en}</p>}
          {data.desc_en && <p className="text-xs text-muted-foreground truncate line-clamp-1">{data.desc_en}</p>}
          {data.label_en && <p className="text-xs text-muted-foreground truncate">{data.label_en}</p>}
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button onClick={() => onClone(item)} className="p-1.5 hover:bg-blue-100 rounded text-blue-600" title="Clone"><Copy className="h-4 w-4" /></button>
        <button onClick={() => onEdit(item)} className="p-1.5 hover:bg-accent rounded" title="Edit"><Pencil className="h-4 w-4" /></button>
        <button onClick={onDelete} className="p-1.5 hover:bg-red-100 rounded text-red-600" title="Delete"><Trash2 className="h-4 w-4" /></button>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/admin")({ component: AdminPanelLayout });
