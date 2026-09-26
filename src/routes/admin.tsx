import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowUp, ArrowDown, Trash2, Plus, Save, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useRows, pagePath } from "@/lib/cms";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/admin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "Admin — Breath of Life PDC" },
      { name: "description", content: "Manage site content." },
      { property: "og:title", content: "Admin — Breath of Life PDC" },
      { property: "og:description", content: "Admin area." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Admin,
});

type Field = { key: string; label: string; type?: "text" | "textarea" };
const db = (t: string) => supabase.from(t as any) as any;

function Admin() {
  const nav = useNavigate();
  const qc = useQueryClient();
  const [state, setState] = useState<"loading" | "denied" | "ok">("loading");

  useEffect(() => {
    (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        nav({ to: "/auth" });
        return;
      }
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin");
      setState(data?.length ? "ok" : "denied");
    })();
  }, [nav]);

  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    nav({ to: "/auth", replace: true });
  }

  if (state === "loading")
    return <div className="p-10 text-center text-muted-foreground">Loading…</div>;
  if (state === "denied")
    return (
      <div className="p-10 text-center">
        <p>This account does not have admin access.</p>
        <button onClick={signOut} className="mt-4 underline">
          Sign out
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-muted">
      <header className="flex items-center justify-between border-b bg-card px-6 py-4">
        <h1 className="text-xl font-semibold text-primary">Breath of Life · Admin</h1>
        <div className="flex gap-4 text-sm">
          <Link to="/" className="underline">
            View site
          </Link>
          <button onClick={signOut} className="flex items-center gap-1">
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-6xl p-6">
        <Tabs defaultValue="pages">
          <TabsList className="flex h-auto flex-wrap">
            <TabsTrigger value="pages">Navigation & Pages</TabsTrigger>
            <TabsTrigger value="content">Section copy</TabsTrigger>
            <TabsTrigger value="dropoffs">Drop-off points</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer needs</TabsTrigger>
            <TabsTrigger value="donations">Donation methods</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="pages">
            <PagesEditor />
          </TabsContent>
          <TabsContent value="content">
            <ContentEditor />
          </TabsContent>
          <TabsContent value="dropoffs">
            <ListEditor
              table="dropoffs"
              titleKey="name"
              blank={{ name: "New location" }}
              fields={[
                { key: "name", label: "Name" },
                { key: "address", label: "Address" },
                { key: "phone", label: "Phone" },
                { key: "map_url", label: "Google Maps link" },
                { key: "hours_en", label: "Hours (EN)" },
                { key: "hours_es", label: "Horario (ES)" },
              ]}
            />
          </TabsContent>
          <TabsContent value="volunteer">
            <ListEditor
              table="volunteer_needs"
              titleKey="title_en"
              blank={{ title_en: "New need", title_es: "Nueva necesidad" }}
              fields={[
                { key: "title_en", label: "Title (EN)" },
                { key: "title_es", label: "Título (ES)" },
                { key: "desc_en", label: "Description (EN)", type: "textarea" },
                { key: "desc_es", label: "Descripción (ES)", type: "textarea" },
              ]}
            />
          </TabsContent>
          <TabsContent value="donations">
            <ListEditor
              table="donation_methods"
              titleKey="title_en"
              blank={{ title_en: "New method", title_es: "Nuevo método" }}
              fields={[
                { key: "title_en", label: "Title (EN)" },
                { key: "title_es", label: "Título (ES)" },
                { key: "details_en", label: "Details (EN)", type: "textarea" },
                { key: "details_es", label: "Detalles (ES)", type: "textarea" },
                { key: "link", label: "Payment link (also generates QR code)" },
              ]}
            />
          </TabsContent>
          <TabsContent value="messages">
            <Messages />
          </TabsContent>
          <TabsContent value="settings">
            <Settings />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function FieldInput({
  f,
  value,
  onChange,
}: {
  f: Field;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="grid gap-1 text-sm">
      <span className="font-medium text-muted-foreground">{f.label}</span>
      {f.type === "textarea" ? (
        <Textarea rows={3} value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <Input value={value ?? ""} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}

function ListEditor({
  table,
  fields,
  titleKey,
  blank,
  extra,
}: {
  table: string;
  fields: Field[];
  titleKey: string;
  blank: Record<string, any>;
  extra?: (row: any) => React.ReactNode;
}) {
  const qc = useQueryClient();
  const { data = [] } = useRows<any>(table);
  const [edits, setEdits] = useState<Record<string, any>>({});
  const refresh = () => qc.invalidateQueries({ queryKey: [table] });
  const run = async (p: PromiseLike<{ error: any }>, ok?: string) => {
    const { error } = await p;
    if (error) toast.error(error.message);
    else {
      if (ok) toast.success(ok);
      refresh();
    }
  };
  const move = async (i: number, dir: -1 | 1) => {
    const a = data[i],
      b = data[i + dir];
    if (!b) return;
    await db(table).update({ sort_order: b.sort_order }).eq("id", a.id);
    await run(
      db(table)
        .update({ sort_order: a.sort_order === b.sort_order ? a.sort_order + dir : a.sort_order })
        .eq("id", b.id),
    );
  };
  const add = () =>
    run(db(table).insert({ ...blank, sort_order: (data.at(-1)?.sort_order ?? 0) + 1 }), "Added");

  return (
    <div className="mt-4 space-y-4">
      {data.map((row, i) => {
        const e = { ...row, ...(edits[row.id] ?? {}) };
        const set = (k: string, v: any) =>
          setEdits((s) => ({ ...s, [row.id]: { ...(s[row.id] ?? {}), [k]: v } }));
        return (
          <div key={row.id} className="rounded-2xl border bg-card p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-semibold">
                {e[titleKey]}
                {row.is_system && (
                  <span className="ml-2 rounded bg-secondary px-2 py-0.5 text-xs">built-in</span>
                )}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Visible</span>
                <Switch
                  checked={row.visible}
                  onCheckedChange={(v) => run(db(table).update({ visible: v }).eq("id", row.id))}
                />
                <button
                  onClick={() => move(i, -1)}
                  className="rounded p-1.5 hover:bg-muted"
                  aria-label="Move up"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
                <button
                  onClick={() => move(i, 1)}
                  className="rounded p-1.5 hover:bg-muted"
                  aria-label="Move down"
                >
                  <ArrowDown className="h-4 w-4" />
                </button>
                {!row.is_system && (
                  <button
                    onClick={() =>
                      confirm("Delete?") && run(db(table).delete().eq("id", row.id), "Deleted")
                    }
                    className="rounded p-1.5 text-destructive hover:bg-muted"
                    aria-label="Delete"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {fields
                .filter((f) => !(row.is_system && f.key === "slug"))
                .map((f) => (
                  <FieldInput key={f.key} f={f} value={e[f.key]} onChange={(v) => set(f.key, v)} />
                ))}
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{extra?.(row)}</span>
              {edits[row.id] && (
                <button
                  onClick={async () => {
                    await run(db(table).update(edits[row.id]).eq("id", row.id), "Saved");
                    setEdits((s) => {
                      const n = { ...s };
                      delete n[row.id];
                      return n;
                    });
                  }}
                  className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
                >
                  <Save className="h-4 w-4" />
                  Save
                </button>
              )}
            </div>
          </div>
        );
      })}
      <button
        onClick={add}
        className="inline-flex items-center gap-2 rounded-full border-2 border-dashed px-5 py-2.5 font-medium hover:border-primary"
      >
        <Plus className="h-4 w-4" />
        Add
      </button>
    </div>
  );
}

function PagesEditor() {
  return (
    <>
      <p className="mt-4 text-sm text-muted-foreground">
        Reorder, rename or hide menu items. Built-in pages keep their layout; new pages appear at
        /p/your-slug with the title and body you write.
      </p>
      <ListEditor
        table="pages"
        titleKey="label_en"
        blank={{
          slug: `page-${Date.now().toString(36)}`,
          label_en: "New page",
          label_es: "Nueva página",
        }}
        extra={(r) => pagePath(r)}
        fields={[
          { key: "label_en", label: "Menu label (EN)" },
          { key: "label_es", label: "Etiqueta menú (ES)" },
          { key: "slug", label: "URL slug" },
          { key: "title_en", label: "Page title (EN, custom pages)" },
          { key: "title_es", label: "Título (ES, páginas nuevas)" },
          { key: "body_en", label: "Body (EN, custom pages)", type: "textarea" },
          { key: "body_es", label: "Contenido (ES, páginas nuevas)", type: "textarea" },
        ]}
      />
    </>
  );
}

function ContentEditor() {
  const qc = useQueryClient();
  const { data = [] } = useRows<any>("content_blocks");
  const [edits, setEdits] = useState<Record<string, any>>({});
  const save = async (key: string) => {
    const { error } = await db("content_blocks").update(edits[key]).eq("key", key);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Saved");
    qc.invalidateQueries({ queryKey: ["content_blocks"] });
    setEdits((s) => {
      const n = { ...s };
      delete n[key];
      return n;
    });
  };
  return (
    <div className="mt-4 space-y-4">
      <p className="text-sm text-muted-foreground">
        Tip: lists (programs) and stats use "|" to separate items, e.g. "2020|Founded".
      </p>
      {data
        .filter((r) => r.key !== "notify_email")
        .map((r) => {
          const e = { ...r, ...(edits[r.key] ?? {}) };
          const set = (k: string, v: string) =>
            setEdits((s) => ({ ...s, [r.key]: { ...(s[r.key] ?? {}), [k]: v } }));
          return (
            <div key={r.key} className="rounded-2xl border bg-card p-5">
              <div className="mb-3 flex items-center justify-between">
                <code className="text-sm font-semibold text-primary">
                  {r.key.replace(/_/g, " ")}
                </code>
                {edits[r.key] && (
                  <button
                    onClick={() => save(r.key)}
                    className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground"
                  >
                    <Save className="h-4 w-4" />
                    Save
                  </button>
                )}
              </div>
              <div className="grid gap-3 md:grid-cols-2">
                <FieldInput
                  f={{ key: "value_en", label: "English", type: "textarea" }}
                  value={e.value_en}
                  onChange={(v) => set("value_en", v)}
                />
                <FieldInput
                  f={{ key: "value_es", label: "Español", type: "textarea" }}
                  value={e.value_es}
                  onChange={(v) => set("value_es", v)}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}

function Messages() {
  const qc = useQueryClient();
  const { data = [] } = useRows<any>("messages");
  const [filter, setFilter] = useState<"all" | "contact" | "volunteer">("all");
  const [openId, setOpenId] = useState<string | null>(null);
  const sorted = [...data]
    .filter((m) => filter === "all" || m.kind === filter)
    .sort((a, b) => b.created_at.localeCompare(a.created_at));
  const refresh = () => qc.invalidateQueries({ queryKey: ["messages"] });
  const setStatus = async (id: string, status: string) => {
    const { error } = await db("messages").update({ status }).eq("id", id);
    if (error) toast.error(error.message);
    else refresh();
  };
  const remove = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    const { error } = await db("messages").delete().eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Deleted");
      refresh();
    }
  };
  const badge: Record<string, string> = {
    new: "bg-accent text-accent-foreground",
    seen: "bg-secondary",
    actioned: "bg-muted text-muted-foreground",
  };
  const newCount = data.filter((m) => (m.status ?? "new") === "new").length;
  return (
    <div className="mt-4 space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {(["all", "contact", "volunteer"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm capitalize ${filter === f ? "bg-primary text-primary-foreground" : "border bg-card"}`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-sm text-muted-foreground">{newCount} new</span>
      </div>
      {sorted.length === 0 && <p className="text-muted-foreground">No messages yet.</p>}
      {sorted.map((m) => {
        const status = m.status ?? "new";
        const open = openId === m.id;
        return (
          <div
            key={m.id}
            className={`rounded-2xl border bg-card p-4 sm:p-5 ${status === "new" ? "border-accent" : ""}`}
          >
            <button
              className="flex w-full flex-wrap items-center gap-2 text-left"
              onClick={() => {
                setOpenId(open ? null : m.id);
                if (!open && status === "new") setStatus(m.id, "seen");
              }}
            >
              <span className="rounded bg-secondary px-2 py-0.5 text-xs uppercase">{m.kind}</span>
              <span className={`rounded px-2 py-0.5 text-xs uppercase ${badge[status]}`}>
                {status}
              </span>
              <strong className="break-all">{m.name}</strong>
              <span className="ml-auto text-xs text-muted-foreground">
                {new Date(m.created_at).toLocaleString()}
              </span>
            </button>
            {open && (
              <div className="mt-3 space-y-3">
                <p className="break-all text-sm">
                  <a href={`mailto:${m.email}`} className="underline">
                    {m.email}
                  </a>
                  {m.phone && ` · ${m.phone}`}
                </p>
                <p className="whitespace-pre-line text-muted-foreground">
                  {m.message || "(no message)"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {status !== "actioned" ? (
                    <button
                      onClick={() => setStatus(m.id, "actioned")}
                      className="rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground"
                    >
                      Mark actioned
                    </button>
                  ) : (
                    <button
                      onClick={() => setStatus(m.id, "seen")}
                      className="rounded-full border px-4 py-1.5 text-sm"
                    >
                      Reopen
                    </button>
                  )}
                  {status !== "new" && (
                    <button
                      onClick={() => setStatus(m.id, "new")}
                      className="rounded-full border px-4 py-1.5 text-sm"
                    >
                      Mark unread
                    </button>
                  )}
                  <button
                    onClick={() => remove(m.id)}
                    className="inline-flex items-center gap-1 rounded-full border px-4 py-1.5 text-sm text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Settings() {
  const qc = useQueryClient();
  const { data = [] } = useRows<any>("content_blocks");
  const cur = data.find((r) => r.key === "notify_email")?.value_en ?? "";
  const [val, setVal] = useState<string | null>(null);
  const save = async () => {
    const v = (val ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      toast.error("Enter a valid email");
      return;
    }
    const { error } = await db("content_blocks").upsert({
      key: "notify_email",
      value_en: v,
      value_es: v,
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Saved");
    setVal(null);
    qc.invalidateQueries({ queryKey: ["content_blocks"] });
  };
  return (
    <div className="mt-4 max-w-xl rounded-2xl border bg-card p-5">
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Notification email</span>
        <span className="text-muted-foreground">
          Contact and volunteer form submissions are sent to this address.
        </span>
        <Input type="email" value={val ?? cur} onChange={(e) => setVal(e.target.value)} />
      </label>
      {val !== null && (
        <button
          onClick={save}
          className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
        >
          <Save className="h-4 w-4" />
          Save
        </button>
      )}
    </div>
  );
}
