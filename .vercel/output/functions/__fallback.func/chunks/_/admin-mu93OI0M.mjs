import { s as supabase } from './client-CKWpw7kM.mjs';
import { c as cn, p as pagePath, a as useRows } from './utils-D6tCW7pd.mjs';
import { I as Input } from './input-43J5deqP.mjs';
import { T as Textarea } from './textarea-B6JBQ6xo.mjs';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from '@tanstack/react-router';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { LogOut, Save, ArrowUp, ArrowDown, Trash2, Plus } from 'lucide-react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import '@supabase/supabase-js';
import './router-BMqEO7F2.mjs';
import 'clsx';
import 'tailwind-merge';

var Tabs = TabsPrimitive.Root;
var TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.List, {
  ref,
  className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
  ...props
}));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.Trigger, {
  ref,
  className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
  ...props
}));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(TabsPrimitive.Content, {
  ref,
  className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
  ...props
}));
TabsContent.displayName = TabsPrimitive.Content.displayName;
var Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SwitchPrimitives.Root, {
  className: cn("peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input", className),
  ...props,
  ref,
  children: /* @__PURE__ */ jsx(SwitchPrimitives.Thumb, { className: cn("pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0") })
}));
Switch.displayName = SwitchPrimitives.Root.displayName;
var db = (t) => supabase.from(t);
function Admin() {
  const nav = useNavigate();
  const qc = useQueryClient();
  const [state, setState] = useState("loading");
  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        nav({ to: "/auth" });
        return;
      }
      const { data } = await supabase.from("user_roles").select("role").eq("user_id", user.id).eq("role", "admin");
      setState((data == null ? void 0 : data.length) ? "ok" : "denied");
    })();
  }, [nav]);
  async function signOut() {
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    nav({
      to: "/auth",
      replace: true
    });
  }
  if (state === "loading") return /* @__PURE__ */ jsx("div", {
    className: "p-10 text-center text-muted-foreground",
    children: "Loading\u2026"
  });
  if (state === "denied") return /* @__PURE__ */ jsxs("div", {
    className: "p-10 text-center",
    children: [/* @__PURE__ */ jsx("p", { children: "This account does not have admin access." }), /* @__PURE__ */ jsx("button", {
      onClick: signOut,
      className: "mt-4 underline",
      children: "Sign out"
    })]
  });
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-muted",
    children: [/* @__PURE__ */ jsxs("header", {
      className: "flex items-center justify-between border-b bg-card px-6 py-4",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-xl font-semibold text-primary",
        children: "Breath of Life \xB7 Admin"
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex gap-4 text-sm",
        children: [/* @__PURE__ */ jsx(Link, {
          to: "/",
          className: "underline",
          children: "View site"
        }), /* @__PURE__ */ jsxs("button", {
          onClick: signOut,
          className: "flex items-center gap-1",
          children: [/* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4" }), "Sign out"]
        })]
      })]
    }), /* @__PURE__ */ jsx("main", {
      className: "mx-auto max-w-6xl p-6",
      children: /* @__PURE__ */ jsxs(Tabs, {
        defaultValue: "pages",
        children: [
          /* @__PURE__ */ jsxs(TabsList, {
            className: "flex h-auto flex-wrap",
            children: [
              /* @__PURE__ */ jsx(TabsTrigger, {
                value: "pages",
                children: "Navigation & Pages"
              }),
              /* @__PURE__ */ jsx(TabsTrigger, {
                value: "content",
                children: "Section copy"
              }),
              /* @__PURE__ */ jsx(TabsTrigger, {
                value: "dropoffs",
                children: "Drop-off points"
              }),
              /* @__PURE__ */ jsx(TabsTrigger, {
                value: "volunteer",
                children: "Volunteer needs"
              }),
              /* @__PURE__ */ jsx(TabsTrigger, {
                value: "donations",
                children: "Donation methods"
              }),
              /* @__PURE__ */ jsx(TabsTrigger, {
                value: "messages",
                children: "Messages"
              }),
              /* @__PURE__ */ jsx(TabsTrigger, {
                value: "settings",
                children: "Settings"
              })
            ]
          }),
          /* @__PURE__ */ jsx(TabsContent, {
            value: "pages",
            children: /* @__PURE__ */ jsx(PagesEditor, {})
          }),
          /* @__PURE__ */ jsx(TabsContent, {
            value: "content",
            children: /* @__PURE__ */ jsx(ContentEditor, {})
          }),
          /* @__PURE__ */ jsx(TabsContent, {
            value: "dropoffs",
            children: /* @__PURE__ */ jsx(ListEditor, {
              table: "dropoffs",
              titleKey: "name",
              blank: { name: "New location" },
              fields: [
                {
                  key: "name",
                  label: "Name"
                },
                {
                  key: "address",
                  label: "Address"
                },
                {
                  key: "phone",
                  label: "Phone"
                },
                {
                  key: "map_url",
                  label: "Google Maps link"
                },
                {
                  key: "hours_en",
                  label: "Hours (EN)"
                },
                {
                  key: "hours_es",
                  label: "Horario (ES)"
                }
              ]
            })
          }),
          /* @__PURE__ */ jsx(TabsContent, {
            value: "volunteer",
            children: /* @__PURE__ */ jsx(ListEditor, {
              table: "volunteer_needs",
              titleKey: "title_en",
              blank: {
                title_en: "New need",
                title_es: "Nueva necesidad"
              },
              fields: [
                {
                  key: "title_en",
                  label: "Title (EN)"
                },
                {
                  key: "title_es",
                  label: "T\xEDtulo (ES)"
                },
                {
                  key: "desc_en",
                  label: "Description (EN)",
                  type: "textarea"
                },
                {
                  key: "desc_es",
                  label: "Descripci\xF3n (ES)",
                  type: "textarea"
                }
              ]
            })
          }),
          /* @__PURE__ */ jsx(TabsContent, {
            value: "donations",
            children: /* @__PURE__ */ jsx(ListEditor, {
              table: "donation_methods",
              titleKey: "title_en",
              blank: {
                title_en: "New method",
                title_es: "Nuevo m\xE9todo"
              },
              fields: [
                {
                  key: "title_en",
                  label: "Title (EN)"
                },
                {
                  key: "title_es",
                  label: "T\xEDtulo (ES)"
                },
                {
                  key: "details_en",
                  label: "Details (EN)",
                  type: "textarea"
                },
                {
                  key: "details_es",
                  label: "Detalles (ES)",
                  type: "textarea"
                },
                {
                  key: "link",
                  label: "Payment link (also generates QR code)"
                }
              ]
            })
          }),
          /* @__PURE__ */ jsx(TabsContent, {
            value: "messages",
            children: /* @__PURE__ */ jsx(Messages, {})
          }),
          /* @__PURE__ */ jsx(TabsContent, {
            value: "settings",
            children: /* @__PURE__ */ jsx(Settings, {})
          })
        ]
      })
    })]
  });
}
function FieldInput({ f, value, onChange }) {
  return /* @__PURE__ */ jsxs("label", {
    className: "grid gap-1 text-sm",
    children: [/* @__PURE__ */ jsx("span", {
      className: "font-medium text-muted-foreground",
      children: f.label
    }), f.type === "textarea" ? /* @__PURE__ */ jsx(Textarea, {
      rows: 3,
      value: value != null ? value : "",
      onChange: (e) => onChange(e.target.value)
    }) : /* @__PURE__ */ jsx(Input, {
      value: value != null ? value : "",
      onChange: (e) => onChange(e.target.value)
    })]
  });
}
function ListEditor({ table, fields, titleKey, blank, extra }) {
  const qc = useQueryClient();
  const { data = [] } = useRows(table);
  const [edits, setEdits] = useState({});
  const refresh = () => qc.invalidateQueries({ queryKey: [table] });
  const run = async (p, ok) => {
    const { error } = await p;
    if (error) toast.error(error.message);
    else {
      if (ok) toast.success(ok);
      refresh();
    }
  };
  const move = async (i, dir) => {
    const a = data[i], b = data[i + dir];
    if (!b) return;
    await db(table).update({ sort_order: b.sort_order }).eq("id", a.id);
    await run(db(table).update({ sort_order: a.sort_order === b.sort_order ? a.sort_order + dir : a.sort_order }).eq("id", b.id));
  };
  const add = () => {
    var _a, _b;
    return run(db(table).insert({
      ...blank,
      sort_order: ((_b = (_a = data.at(-1)) == null ? void 0 : _a.sort_order) != null ? _b : 0) + 1
    }), "Added");
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "mt-4 space-y-4",
    children: [data.map((row, i) => {
      var _a;
      const e = {
        ...row,
        ...(_a = edits[row.id]) != null ? _a : {}
      };
      const set = (k, v) => setEdits((s) => {
        var _a2;
        return {
          ...s,
          [row.id]: {
            ...(_a2 = s[row.id]) != null ? _a2 : {},
            [k]: v
          }
        };
      });
      return /* @__PURE__ */ jsxs("div", {
        className: "rounded-2xl border bg-card p-5",
        children: [
          /* @__PURE__ */ jsxs("div", {
            className: "mb-4 flex flex-wrap items-center justify-between gap-3",
            children: [/* @__PURE__ */ jsxs("h3", {
              className: "font-semibold",
              children: [e[titleKey], row.is_system && /* @__PURE__ */ jsx("span", {
                className: "ml-2 rounded bg-secondary px-2 py-0.5 text-xs",
                children: "built-in"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx("span", {
                  className: "text-xs text-muted-foreground",
                  children: "Visible"
                }),
                /* @__PURE__ */ jsx(Switch, {
                  checked: row.visible,
                  onCheckedChange: (v) => run(db(table).update({ visible: v }).eq("id", row.id))
                }),
                /* @__PURE__ */ jsx("button", {
                  onClick: () => move(i, -1),
                  className: "rounded p-1.5 hover:bg-muted",
                  "aria-label": "Move up",
                  children: /* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4" })
                }),
                /* @__PURE__ */ jsx("button", {
                  onClick: () => move(i, 1),
                  className: "rounded p-1.5 hover:bg-muted",
                  "aria-label": "Move down",
                  children: /* @__PURE__ */ jsx(ArrowDown, { className: "h-4 w-4" })
                }),
                !row.is_system && /* @__PURE__ */ jsx("button", {
                  onClick: () => confirm("Delete?") && run(db(table).delete().eq("id", row.id), "Deleted"),
                  className: "rounded p-1.5 text-destructive hover:bg-muted",
                  "aria-label": "Delete",
                  children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
                })
              ]
            })]
          }),
          /* @__PURE__ */ jsx("div", {
            className: "grid gap-3 md:grid-cols-2",
            children: fields.filter((f) => !(row.is_system && f.key === "slug")).map((f) => /* @__PURE__ */ jsx(FieldInput, {
              f,
              value: e[f.key],
              onChange: (v) => set(f.key, v)
            }, f.key))
          }),
          /* @__PURE__ */ jsxs("div", {
            className: "mt-3 flex items-center justify-between",
            children: [/* @__PURE__ */ jsx("span", {
              className: "text-xs text-muted-foreground",
              children: extra == null ? void 0 : extra(row)
            }), edits[row.id] && /* @__PURE__ */ jsxs("button", {
              onClick: async () => {
                await run(db(table).update(edits[row.id]).eq("id", row.id), "Saved");
                setEdits((s) => {
                  const n = { ...s };
                  delete n[row.id];
                  return n;
                });
              },
              className: "inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
              children: [/* @__PURE__ */ jsx(Save, { className: "h-4 w-4" }), "Save"]
            })]
          })
        ]
      }, row.id);
    }), /* @__PURE__ */ jsxs("button", {
      onClick: add,
      className: "inline-flex items-center gap-2 rounded-full border-2 border-dashed px-5 py-2.5 font-medium hover:border-primary",
      children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), "Add"]
    })]
  });
}
function PagesEditor() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("p", {
    className: "mt-4 text-sm text-muted-foreground",
    children: "Reorder, rename or hide menu items. Built-in pages keep their layout; new pages appear at /p/your-slug with the title and body you write."
  }), /* @__PURE__ */ jsx(ListEditor, {
    table: "pages",
    titleKey: "label_en",
    blank: {
      slug: `page-${Date.now().toString(36)}`,
      label_en: "New page",
      label_es: "Nueva p\xE1gina"
    },
    extra: (r) => pagePath(r),
    fields: [
      {
        key: "label_en",
        label: "Menu label (EN)"
      },
      {
        key: "label_es",
        label: "Etiqueta men\xFA (ES)"
      },
      {
        key: "slug",
        label: "URL slug"
      },
      {
        key: "title_en",
        label: "Page title (EN, custom pages)"
      },
      {
        key: "title_es",
        label: "T\xEDtulo (ES, p\xE1ginas nuevas)"
      },
      {
        key: "body_en",
        label: "Body (EN, custom pages)",
        type: "textarea"
      },
      {
        key: "body_es",
        label: "Contenido (ES, p\xE1ginas nuevas)",
        type: "textarea"
      }
    ]
  })] });
}
function ContentEditor() {
  const qc = useQueryClient();
  const { data = [] } = useRows("content_blocks");
  const [edits, setEdits] = useState({});
  const save = async (key) => {
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
  return /* @__PURE__ */ jsxs("div", {
    className: "mt-4 space-y-4",
    children: [/* @__PURE__ */ jsx("p", {
      className: "text-sm text-muted-foreground",
      children: 'Tip: lists (programs) and stats use "|" to separate items, e.g. "2020|Founded".'
    }), data.filter((r) => r.key !== "notify_email").map((r) => {
      var _a;
      const e = {
        ...r,
        ...(_a = edits[r.key]) != null ? _a : {}
      };
      const set = (k, v) => setEdits((s) => {
        var _a2;
        return {
          ...s,
          [r.key]: {
            ...(_a2 = s[r.key]) != null ? _a2 : {},
            [k]: v
          }
        };
      });
      return /* @__PURE__ */ jsxs("div", {
        className: "rounded-2xl border bg-card p-5",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "mb-3 flex items-center justify-between",
          children: [/* @__PURE__ */ jsx("code", {
            className: "text-sm font-semibold text-primary",
            children: r.key.replace(/_/g, " ")
          }), edits[r.key] && /* @__PURE__ */ jsxs("button", {
            onClick: () => save(r.key),
            className: "inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground",
            children: [/* @__PURE__ */ jsx(Save, { className: "h-4 w-4" }), "Save"]
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "grid gap-3 md:grid-cols-2",
          children: [/* @__PURE__ */ jsx(FieldInput, {
            f: {
              key: "value_en",
              label: "English",
              type: "textarea"
            },
            value: e.value_en,
            onChange: (v) => set("value_en", v)
          }), /* @__PURE__ */ jsx(FieldInput, {
            f: {
              key: "value_es",
              label: "Espa\xF1ol",
              type: "textarea"
            },
            value: e.value_es,
            onChange: (v) => set("value_es", v)
          })]
        })]
      }, r.key);
    })]
  });
}
function Messages() {
  const qc = useQueryClient();
  const { data = [] } = useRows("messages");
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(null);
  const sorted = [...data].filter((m) => filter === "all" || m.kind === filter).sort((a, b) => b.created_at.localeCompare(a.created_at));
  const refresh = () => qc.invalidateQueries({ queryKey: ["messages"] });
  const setStatus = async (id, status) => {
    const { error } = await db("messages").update({ status }).eq("id", id);
    if (error) toast.error(error.message);
    else refresh();
  };
  const remove = async (id) => {
    if (!confirm("Delete this message?")) return;
    const { error } = await db("messages").delete().eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Deleted");
      refresh();
    }
  };
  const badge = {
    new: "bg-accent text-accent-foreground",
    seen: "bg-secondary",
    actioned: "bg-muted text-muted-foreground"
  };
  const newCount = data.filter((m) => {
    var _a;
    return ((_a = m.status) != null ? _a : "new") === "new";
  }).length;
  return /* @__PURE__ */ jsxs("div", {
    className: "mt-4 space-y-3",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "flex flex-wrap items-center gap-2",
        children: [[
          "all",
          "contact",
          "volunteer"
        ].map((f) => /* @__PURE__ */ jsx("button", {
          onClick: () => setFilter(f),
          className: `rounded-full px-4 py-1.5 text-sm capitalize ${filter === f ? "bg-primary text-primary-foreground" : "border bg-card"}`,
          children: f
        }, f)), /* @__PURE__ */ jsxs("span", {
          className: "ml-auto text-sm text-muted-foreground",
          children: [newCount, " new"]
        })]
      }),
      sorted.length === 0 && /* @__PURE__ */ jsx("p", {
        className: "text-muted-foreground",
        children: "No messages yet."
      }),
      sorted.map((m) => {
        var _a;
        const status = (_a = m.status) != null ? _a : "new";
        const open = openId === m.id;
        return /* @__PURE__ */ jsxs("div", {
          className: `rounded-2xl border bg-card p-4 sm:p-5 ${status === "new" ? "border-accent" : ""}`,
          children: [/* @__PURE__ */ jsxs("button", {
            className: "flex w-full flex-wrap items-center gap-2 text-left",
            onClick: () => {
              setOpenId(open ? null : m.id);
              if (!open && status === "new") setStatus(m.id, "seen");
            },
            children: [
              /* @__PURE__ */ jsx("span", {
                className: "rounded bg-secondary px-2 py-0.5 text-xs uppercase",
                children: m.kind
              }),
              /* @__PURE__ */ jsx("span", {
                className: `rounded px-2 py-0.5 text-xs uppercase ${badge[status]}`,
                children: status
              }),
              /* @__PURE__ */ jsx("strong", {
                className: "break-all",
                children: m.name
              }),
              /* @__PURE__ */ jsx("span", {
                className: "ml-auto text-xs text-muted-foreground",
                children: new Date(m.created_at).toLocaleString()
              })
            ]
          }), open && /* @__PURE__ */ jsxs("div", {
            className: "mt-3 space-y-3",
            children: [
              /* @__PURE__ */ jsxs("p", {
                className: "break-all text-sm",
                children: [/* @__PURE__ */ jsx("a", {
                  href: `mailto:${m.email}`,
                  className: "underline",
                  children: m.email
                }), m.phone && ` \xB7 ${m.phone}`]
              }),
              /* @__PURE__ */ jsx("p", {
                className: "whitespace-pre-line text-muted-foreground",
                children: m.message || "(no message)"
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "flex flex-wrap gap-2",
                children: [
                  status !== "actioned" ? /* @__PURE__ */ jsx("button", {
                    onClick: () => setStatus(m.id, "actioned"),
                    className: "rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground",
                    children: "Mark actioned"
                  }) : /* @__PURE__ */ jsx("button", {
                    onClick: () => setStatus(m.id, "seen"),
                    className: "rounded-full border px-4 py-1.5 text-sm",
                    children: "Reopen"
                  }),
                  status !== "new" && /* @__PURE__ */ jsx("button", {
                    onClick: () => setStatus(m.id, "new"),
                    className: "rounded-full border px-4 py-1.5 text-sm",
                    children: "Mark unread"
                  }),
                  /* @__PURE__ */ jsxs("button", {
                    onClick: () => remove(m.id),
                    className: "inline-flex items-center gap-1 rounded-full border px-4 py-1.5 text-sm text-destructive",
                    children: [/* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }), "Delete"]
                  })
                ]
              })
            ]
          })]
        }, m.id);
      })
    ]
  });
}
function Settings() {
  var _a, _b;
  const qc = useQueryClient();
  const { data = [] } = useRows("content_blocks");
  const cur = (_b = (_a = data.find((r) => r.key === "notify_email")) == null ? void 0 : _a.value_en) != null ? _b : "";
  const [val, setVal] = useState(null);
  const save = async () => {
    const v = (val != null ? val : "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
      toast.error("Enter a valid email");
      return;
    }
    const { error } = await db("content_blocks").upsert({
      key: "notify_email",
      value_en: v,
      value_es: v
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Saved");
    setVal(null);
    qc.invalidateQueries({ queryKey: ["content_blocks"] });
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "mt-4 max-w-xl rounded-2xl border bg-card p-5",
    children: [/* @__PURE__ */ jsxs("label", {
      className: "grid gap-1 text-sm",
      children: [
        /* @__PURE__ */ jsx("span", {
          className: "font-medium",
          children: "Notification email"
        }),
        /* @__PURE__ */ jsx("span", {
          className: "text-muted-foreground",
          children: "Contact and volunteer form submissions are sent to this address."
        }),
        /* @__PURE__ */ jsx(Input, {
          type: "email",
          value: val != null ? val : cur,
          onChange: (e) => setVal(e.target.value)
        })
      ]
    }), val !== null && /* @__PURE__ */ jsxs("button", {
      onClick: save,
      className: "mt-3 inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
      children: [/* @__PURE__ */ jsx(Save, { className: "h-4 w-4" }), "Save"]
    })]
  });
}

export { Admin as component };
//# sourceMappingURL=admin-mu93OI0M.mjs.map
