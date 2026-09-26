import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Lock, LogOut, Eye, EyeOff, Pencil, Trash2, Plus, Save, X, Image, ArrowUpDown } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { contentBlocks, pages, dropoffs, volunteerNeeds, donationMethods, type PageRow } from "@/lib/cms";
import { WhatsAppButton, LegalLinks } from "@/components/SiteExtras";
import { SiteLayout } from "@/components/SiteLayout";

const ADMIN_PASSWORD = "boladmin2024";

function AdminLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLang();
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  if (!authed) {
    return (
      <SiteLayout>
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="w-full max-w-md rounded-3xl border bg-card p-8 shadow-lg">
            <h1 className="text-center text-2xl font-semibold text-primary mb-6">
              {t("Admin Login", "Acceso Admin")}
            </h1>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder={t("Password", "Contraseña")}
                className="w-full rounded-lg border bg-background px-4 py-3 pr-12 text-lg"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            <button
              onClick={handleLogin}
              className="mt-4 w-full rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
              {t("Login", "Entrar")}
            </button>
          </div>
        </div>
      </SiteLayout>
    );

    function handleLogin() {
      if (password === ADMIN_PASSWORD) {
        setAuthed(true);
      } else {
        alert(t("Incorrect password", "Contraseña incorrecta"));
      }
    }
  }

  return (
    <SiteLayout>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-primary">{t("Admin Panel", "Panel de Admin")}</h1>
        <button
          onClick={() => setAuthed(false)}
          className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium transition hover:bg-accent"
        >
          <LogOut className="h-4 w-4" />
          {t("Logout", "Salir")}
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AdminSection title={t("Content Blocks", "Bloques de Contenido")} icon={Image} items={Object.entries(contentBlocks)} type="blocks" />
        <AdminSection title={t("Pages", "Páginas")} icon={Pencil} items={pages} type="pages" />
        <AdminSection title={t("Drop-off Points", "Puntos de Entrega")} icon={Image} items={dropoffs} type="dropoffs" />
        <AdminSection title={t("Volunteer Needs", "Necesidades de Voluntariado")} icon={Pencil} items={volunteerNeeds} type="volunteer" />
        <AdminSection title={t("Donation Methods", "Métodos de Donación")} icon={Image} items={donationMethods} type="donations" />
      </div>
    </SiteLayout>
  );
}

function AdminSection({
  title,
  icon: Icon,
  items,
  type,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: any[];
  type: string;
}) {
  const { t } = useLang();
  const [editing, setEditing] = useState<string | null>(null);
  const [editData, setEditData] = useState<any>(null);

  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
          <Icon className="h-5 w-5" />
          {title}
        </h2>
        <button
          onClick={() => setEditing("new")}
          className="rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {items.map((item) => (
          <AdminItem
            key={item.key || item.id}
            item={item}
            type={type}
            editing={editing}
            editData={editData}
            onEdit={(item) => {
              setEditData({ ...item });
              setEditing(item.key || item.id);
            }}
            onSave={(updated) => {
              console.log(`${type} save:`, updated);
              alert(`${title} saved: ${JSON.stringify(updated)}`);
              setEditing(null);
              setEditData(null);
            }}
            onCancel={() => {
              setEditing(null);
              setEditData(null);
            }}
            onDelete={() => {
              if (confirm(t("Delete this item?", "¿Eliminar este elemento?"))) {
                console.log(`${type} delete:`, item.key || item.id);
                alert(`${title} deleted: ${item.key || item.id}`);
              }
            }}
          />
        ))}
        {editing === "new" && (
          <AdminItem
            item={{}}
            type={type}
            editing="new"
            editData={editData}
            onEdit={() => {}}
            onSave={(updated) => {
              console.log(`${type} create:`, updated);
              alert(`${title} created: ${JSON.stringify(updated)}`);
              setEditing(null);
              setEditData(null);
            }}
            onCancel={() => {
              setEditing(null);
              setEditData(null);
            }}
            onDelete={() => {}}
          />
        )}
      </div>
    </div>
  );
}

function AdminItem({
  item,
  type,
  editing,
  editData,
  onEdit,
  onSave,
  onCancel,
  onDelete,
}: {
  item: any;
  type: string;
  editing: string | null;
  editData: any;
  onEdit: (item: any) => void;
  onSave: (updated: any) => void;
  onCancel: () => void;
  onDelete: () => void;
}) {
  const { t } = useLang();
  const isEditing = editing === (item.key || item.id);
  const data = isEditing ? editData : item;

  const renderFields = () => {
    switch (type) {
      case "blocks":
        return (
          <div className="grid gap-2">
            <input
              value={data.key || ""}
              onChange={(e) => setEditData({ ...data, key: e.target.value })}
              placeholder="key"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.en || ""}
              onChange={(e) => setEditData({ ...data, en: e.target.value })}
              placeholder="English"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.es || ""}
              onChange={(e) => setEditData({ ...data, es: e.target.value })}
              placeholder="Español"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
          </div>
        );
      case "pages":
        return (
          <div className="grid gap-2">
            <input
              value={data.slug || ""}
              onChange={(e) => setEditData({ ...data, slug: e.target.value })}
              placeholder="slug"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.label_en || ""}
              onChange={(e) => setEditData({ ...data, label_en: e.target.value })}
              placeholder="Label EN"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.label_es || ""}
              onChange={(e) => setEditData({ ...data, label_es: e.target.value })}
              placeholder="Label ES"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.title_en || ""}
              onChange={(e) => setEditData({ ...data, title_en: e.target.value })}
              placeholder="Title EN"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.title_es || ""}
              onChange={(e) => setEditData({ ...data, title_es: e.target.value })}
              placeholder="Title ES"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <textarea
              value={data.body_en || ""}
              onChange={(e) => setEditData({ ...data, body_en: e.target.value })}
              placeholder="Body EN"
              rows={3}
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <textarea
              value={data.body_es || ""}
              onChange={(e) => setEditData({ ...data, body_es: e.target.value })}
              placeholder="Body ES"
              rows={3}
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={data.visible ?? true}
                onChange={(e) => setEditData({ ...data, visible: e.target.checked })}
              />
              {t("Visible", "Visible")}
            </label>
          </div>
        );
      case "dropoffs":
        return (
          <div className="grid gap-2">
            <input
              value={data.name || ""}
              onChange={(e) => setEditData({ ...data, name: e.target.value })}
              placeholder="Name"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.address || ""}
              onChange={(e) => setEditData({ ...data, address: e.target.value })}
              placeholder="Address"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.hours_en || ""}
              onChange={(e) => setEditData({ ...data, hours_en: e.target.value })}
              placeholder="Hours EN"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.hours_es || ""}
              onChange={(e) => setEditData({ ...data, hours_es: e.target.value })}
              placeholder="Hours ES"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.phone || ""}
              onChange={(e) => setEditData({ ...data, phone: e.target.value })}
              placeholder="Phone"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.map_url || ""}
              onChange={(e) => setEditData({ ...data, map_url: e.target.value })}
              placeholder="Map URL"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={data.visible ?? true}
                onChange={(e) => setEditData({ ...data, visible: e.target.checked })}
              />
              {t("Visible", "Visible")}
            </label>
          </div>
        );
      case "volunteer":
        return (
          <div className="grid gap-2">
            <input
              value={data.title_en || ""}
              onChange={(e) => setEditData({ ...data, title_en: e.target.value })}
              placeholder="Title EN"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.title_es || ""}
              onChange={(e) => setEditData({ ...data, title_es: e.target.value })}
              placeholder="Title ES"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.desc_en || ""}
              onChange={(e) => setEditData({ ...data, desc_en: e.target.value })}
              placeholder="Description EN"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.desc_es || ""}
              onChange={(e) => setEditData({ ...data, desc_es: e.target.value })}
              placeholder="Description ES"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={data.visible ?? true}
                onChange={(e) => setEditData({ ...data, visible: e.target.checked })}
              />
              {t("Visible", "Visible")}
            </label>
          </div>
        );
      case "donations":
        return (
          <div className="grid gap-2">
            <input
              value={data.name_en || ""}
              onChange={(e) => setEditData({ ...data, name_en: e.target.value })}
              placeholder="Name EN"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.name_es || ""}
              onChange={(e) => setEditData({ ...data, name_es: e.target.value })}
              placeholder="Name ES"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.details_en || ""}
              onChange={(e) => setEditData({ ...data, details_en: e.target.value })}
              placeholder="Details EN"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.details_es || ""}
              onChange={(e) => setEditData({ ...data, details_es: e.target.value })}
              placeholder="Details ES"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <input
              value={data.link || ""}
              onChange={(e) => setEditData({ ...data, link: e.target.value })}
              placeholder="Link"
              className="rounded-lg border bg-background px-3 py-2 text-sm"
            />
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={data.visible ?? true}
                onChange={(e) => setEditData({ ...data, visible: e.target.checked })}
              />
              {t("Visible", "Visible")}
            </label>
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
          <button
            onClick={() => onSave(data)}
            className="flex-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            <Save className="h-4 w-4 mr-1" /> {t("Save", "Guardar")}
          </button>
          <button
            onClick={onCancel}
            className="flex-1 rounded-full border px-4 py-2 text-sm"
          >
            <X className="h-4 w-4 mx-auto" /> {t("Cancel", "Cancelar")}
          </button>
        </div>
      </div>
    );
  }

  const displayTitle = data.key || data.title_en || data.name || data.slug || data.label_en || item.id || "New";

  return (
    <div className="flex items-start justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition">
      <div className="flex-1 min-w-0">
        <p className="font-medium text-primary truncate">{displayTitle}</p>
        {data.en && <p className="text-xs text-muted-foreground truncate">{data.en}</p>}
        {data.es && <p className="text-xs text-muted-foreground truncate">{data.es}</p>}
        {data.title_en && <p className="text-xs text-muted-foreground truncate">{data.title_en}</p>}
        {data.name && <p className="text-xs text-muted-foreground truncate">{data.name}</p>}
        {data.address && <p className="text-xs text-muted-foreground truncate">{data.address}</p>}
        {data.hours_en && <p className="text-xs text-muted-foreground truncate">{data.hours_en}</p>}
      </div>
      <div className="flex items-center gap-1">
        <button onClick={() => onEdit(item)} className="p-1.5 hover:bg-accent rounded" title={t("Edit", "Editar")}>
          <Pencil className="h-4 w-4" />
        </button>
        <button onClick={onDelete} className="p-1.5 hover:bg-red-100 rounded text-red-600" title={t("Delete", "Eliminar")}>
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/admin")({
  component: AdminLayout,
});