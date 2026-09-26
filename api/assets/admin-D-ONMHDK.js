import { a as pages, c as useLang, n as donationMethods, o as volunteerNeeds, r as dropoffs, t as contentBlocks } from "./content-D8tR5CpZ.js";
import { n as SiteLayout } from "./SiteLayout-Bo61osag.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Copy, Eye, EyeOff, Image, LogOut, Pencil, Plus, Save, Trash2, X } from "lucide-react";
//#region src/routes/admin.tsx?tsr-split=component
var ADMIN_PASSWORD = "boladmin2024";
Object.entries(contentBlocks).map(([key, val]) => ({
	key,
	...val
}));
function AdminPanelLayout({ children }) {
	const { t } = useLang();
	const [authed, setAuthed] = useState(false);
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	if (!authed) {
		return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsx("div", {
			className: "flex min-h-[60vh] items-center justify-center px-4",
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-full max-w-md rounded-3xl border bg-card p-8 shadow-lg",
				children: [
					/* @__PURE__ */ jsx("h1", {
						className: "text-center text-2xl font-semibold text-primary mb-6",
						children: t("Admin Login", "Acceso Admin")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "relative",
						children: [/* @__PURE__ */ jsx("input", {
							type: showPassword ? "text" : "password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							onKeyDown: (e) => e.key === "Enter" && handleLogin(),
							placeholder: t("Password", "Contraseña"),
							className: "w-full rounded-lg border bg-background px-4 py-3 pr-12 text-lg"
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => setShowPassword(!showPassword),
							className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
							children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: handleLogin,
						className: "mt-4 w-full rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90",
						children: t("Login", "Entrar")
					})
				]
			})
		}) });
		function handleLogin() {
			if (password === ADMIN_PASSWORD) setAuthed(true);
			else alert(t("Incorrect password", "Contraseña incorrecta"));
		}
	}
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsxs("div", {
		className: "mb-4 flex items-center justify-between",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-2xl font-semibold text-primary",
			children: t("Admin Panel", "Panel de Admin")
		}), /* @__PURE__ */ jsxs("button", {
			onClick: () => setAuthed(false),
			className: "flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium transition hover:bg-accent",
			children: [
				/* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4" }),
				" ",
				t("Logout", "Salir")
			]
		})]
	}), /* @__PURE__ */ jsxs("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			/* @__PURE__ */ jsx(AdminSection, {
				title: t("Content Blocks", "Bloques de Contenido"),
				icon: Image,
				items: Object.entries(contentBlocks).map(([key, val]) => ({
					key,
					...val
				})),
				type: "blocks"
			}),
			/* @__PURE__ */ jsx(AdminSection, {
				title: t("Pages", "Páginas"),
				icon: Pencil,
				items: pages,
				type: "pages"
			}),
			/* @__PURE__ */ jsx(AdminSection, {
				title: t("Drop-off Points", "Puntos de Entrega"),
				icon: Image,
				items: dropoffs,
				type: "dropoffs"
			}),
			/* @__PURE__ */ jsx(AdminSection, {
				title: t("Volunteer Needs", "Necesidades de Voluntariado"),
				icon: Pencil,
				items: volunteerNeeds,
				type: "volunteer"
			}),
			/* @__PURE__ */ jsx(AdminSection, {
				title: t("Donation Methods", "Métodos de Donación"),
				icon: Image,
				items: donationMethods,
				type: "donations"
			})
		]
	})] });
}
function AdminSection({ title, icon: Icon, items, type }) {
	const { t } = useLang();
	const [editingKey, setEditingKey] = useState(null);
	const [editData, setEditData] = useState(null);
	const [newItemDefaults, setNewItemDefaults] = useState(null);
	const getDefaultItem = (type) => {
		switch (type) {
			case "blocks": return {
				key: "",
				en: "",
				es: ""
			};
			case "pages": return {
				id: `page-${Date.now()}`,
				slug: "",
				label_en: "",
				label_es: "",
				title_en: "",
				title_es: "",
				body_en: "",
				body_es: "",
				image: "",
				sort_order: 0,
				visible: true,
				is_system: false
			};
			case "dropoffs": return {
				id: `dropoff-${Date.now()}`,
				name: "",
				address: "",
				hours_en: "",
				hours_es: "",
				phone: "",
				map_url: "",
				image: "",
				sort_order: 0,
				visible: true
			};
			case "volunteer": return {
				id: `volunteer-${Date.now()}`,
				title_en: "",
				title_es: "",
				desc_en: "",
				desc_es: "",
				image: "",
				sort_order: 0,
				visible: true
			};
			case "donations": return {
				id: `donation-${Date.now()}`,
				name_en: "",
				name_es: "",
				details_en: "",
				details_es: "",
				link: "",
				image: "",
				sort_order: 0,
				visible: true
			};
			default: return {};
		}
	};
	const startEdit = (item) => {
		setEditData({ ...item });
		setEditingKey(item.key || item.id);
	};
	const startNew = () => {
		const def = getDefaultItem(type);
		setNewItemDefaults(def);
		setEditData({ ...def });
		setEditingKey("new");
	};
	const startClone = (item) => {
		const cloned = {
			...item,
			id: `${item.id || item.key}-copy-${Date.now()}`,
			slug: item.slug ? `${item.slug}-copy` : void 0
		};
		setEditData(cloned);
		setEditingKey(cloned.key || cloned.id);
	};
	const handleSave = (updated) => {
		console.log(`${type} save:`, updated);
		alert(`${title} saved: ${JSON.stringify(updated)}`);
		setEditingKey(null);
		setEditData(null);
		setNewItemDefaults(null);
	};
	const handleCancel = () => {
		setEditingKey(null);
		setEditData(null);
		setNewItemDefaults(null);
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border bg-card p-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between mb-4",
			children: [/* @__PURE__ */ jsxs("h2", {
				className: "flex items-center gap-2 text-lg font-semibold text-primary",
				children: [
					/* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }),
					" ",
					title
				]
			}), /* @__PURE__ */ jsx("button", {
				onClick: startNew,
				className: "rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent",
				children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-3 max-h-[500px] overflow-y-auto",
			children: [items.map((item) => /* @__PURE__ */ jsx(AdminItem, {
				item,
				type,
				editingKey,
				editData,
				setEditData,
				onEdit: startEdit,
				onClone: startClone,
				onSave: handleSave,
				onCancel: handleCancel,
				onDelete: () => {
					if (confirm(t("Delete this item?", "¿Eliminar este elemento?"))) {
						console.log(`${type} delete:`, item.key || item.id);
						alert(`${title} deleted: ${item.key || item.id}`);
					}
				}
			}, item.key || item.id)), editingKey === "new" && /* @__PURE__ */ jsx(AdminItem, {
				item: newItemDefaults,
				type,
				editingKey: "new",
				editData,
				setEditData,
				onEdit: () => {},
				onSave: (updated) => {
					console.log(`${type} create:`, updated);
					alert(`${title} created: ${JSON.stringify(updated)}`);
					setEditingKey(null);
					setEditData(null);
					setNewItemDefaults(null);
				},
				onCancel: () => {
					setEditingKey(null);
					setEditData(null);
					setNewItemDefaults(null);
				},
				onDelete: () => {}
			})]
		})]
	});
}
function AdminItem({ item, type, editingKey, editData, setEditData, onEdit, onClone, onSave, onCancel, onDelete }) {
	const { t } = useLang();
	const isEditing = editingKey === (item.key || item.id) || editingKey === "new" && item.id === editData?.id;
	const data = isEditing ? editData : item;
	const renderFields = () => {
		const update = (field, value) => setEditData((d) => ({
			...d,
			[field]: value
		}));
		switch (type) {
			case "blocks": return /* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ jsx("input", {
						value: data.key || "",
						onChange: (e) => update("key", e.target.value),
						placeholder: "key (e.g., hero_title)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm font-mono"
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "EN"
						})
					}),
					/* @__PURE__ */ jsx("textarea", {
						value: data.en || "",
						onChange: (e) => update("en", e.target.value),
						placeholder: "English content (HTML allowed)",
						rows: 4,
						className: "w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs"
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "ES"
						})
					}),
					/* @__PURE__ */ jsx("textarea", {
						value: data.es || "",
						onChange: (e) => update("es", e.target.value),
						placeholder: "Spanish content (HTML allowed)",
						rows: 4,
						className: "w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs"
					})
				]
			});
			case "pages": return /* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ jsx("input", {
						value: data.slug || "",
						onChange: (e) => update("slug", e.target.value),
						placeholder: "slug (e.g., about, team)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm font-mono"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.label_en || "",
						onChange: (e) => update("label_en", e.target.value),
						placeholder: "Menu Label EN",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.label_es || "",
						onChange: (e) => update("label_es", e.target.value),
						placeholder: "Menu Label ES",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.title_en || "",
						onChange: (e) => update("title_en", e.target.value),
						placeholder: "Page Title EN",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.title_es || "",
						onChange: (e) => update("title_es", e.target.value),
						placeholder: "Page Title ES",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.image || "",
						onChange: (e) => update("image", e.target.value),
						placeholder: "Image URL (optional)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "Body EN"
						})
					}),
					/* @__PURE__ */ jsx("textarea", {
						value: data.body_en || "",
						onChange: (e) => update("body_en", e.target.value),
						placeholder: "Page content EN (HTML allowed)",
						rows: 8,
						className: "w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs"
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "Body ES"
						})
					}),
					/* @__PURE__ */ jsx("textarea", {
						value: data.body_es || "",
						onChange: (e) => update("body_es", e.target.value),
						placeholder: "Page content ES (HTML allowed)",
						rows: 8,
						className: "w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ jsx("input", {
								value: data.sort_order ?? 0,
								onChange: (e) => update("sort_order", parseInt(e.target.value) || 0),
								type: "number",
								placeholder: "Sort order",
								className: "rounded-lg border bg-background px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ jsx("input", {
										type: "checkbox",
										checked: data.visible ?? true,
										onChange: (e) => update("visible", e.target.checked)
									}),
									" ",
									t("Visible in menu", "Visible en menú")
								]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "flex items-center gap-2 text-sm",
								children: [
									/* @__PURE__ */ jsx("input", {
										type: "checkbox",
										checked: data.is_system ?? false,
										onChange: (e) => update("is_system", e.target.checked)
									}),
									" ",
									t("System page (can't delete)", "Página del sistema (no eliminable)")
								]
							})
						]
					})
				]
			});
			case "dropoffs": return /* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ jsx("input", {
						value: data.name || "",
						onChange: (e) => update("name", e.target.value),
						placeholder: "Location name",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.address || "",
						onChange: (e) => update("address", e.target.value),
						placeholder: "Full address",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.hours_en || "",
						onChange: (e) => update("hours_en", e.target.value),
						placeholder: "Hours EN",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.hours_es || "",
						onChange: (e) => update("hours_es", e.target.value),
						placeholder: "Hours ES",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.phone || "",
						onChange: (e) => update("phone", e.target.value),
						placeholder: "Phone",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.map_url || "",
						onChange: (e) => update("map_url", e.target.value),
						placeholder: "Google Maps URL",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.image || "",
						onChange: (e) => update("image", e.target.value),
						placeholder: "Image URL (optional)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsx("input", {
							value: data.sort_order ?? 0,
							onChange: (e) => update("sort_order", parseInt(e.target.value) || 0),
							type: "number",
							placeholder: "Sort order",
							className: "rounded-lg border bg-background px-3 py-2 text-sm"
						}), /* @__PURE__ */ jsxs("label", {
							className: "flex items-center gap-2 text-sm",
							children: [
								/* @__PURE__ */ jsx("input", {
									type: "checkbox",
									checked: data.visible ?? true,
									onChange: (e) => update("visible", e.target.checked)
								}),
								" ",
								t("Visible", "Visible")
							]
						})]
					})
				]
			});
			case "volunteer": return /* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ jsx("input", {
						value: data.title_en || "",
						onChange: (e) => update("title_en", e.target.value),
						placeholder: "Title EN",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.title_es || "",
						onChange: (e) => update("title_es", e.target.value),
						placeholder: "Title ES",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.image || "",
						onChange: (e) => update("image", e.target.value),
						placeholder: "Image URL (optional)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "Desc EN"
						})
					}),
					/* @__PURE__ */ jsx("textarea", {
						value: data.desc_en || "",
						onChange: (e) => update("desc_en", e.target.value),
						placeholder: "Description EN (HTML allowed)",
						rows: 4,
						className: "w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs"
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "Desc ES"
						})
					}),
					/* @__PURE__ */ jsx("textarea", {
						value: data.desc_es || "",
						onChange: (e) => update("desc_es", e.target.value),
						placeholder: "Description ES (HTML allowed)",
						rows: 4,
						className: "w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsx("input", {
							value: data.sort_order ?? 0,
							onChange: (e) => update("sort_order", parseInt(e.target.value) || 0),
							type: "number",
							placeholder: "Sort order",
							className: "rounded-lg border bg-background px-3 py-2 text-sm"
						}), /* @__PURE__ */ jsxs("label", {
							className: "flex items-center gap-2 text-sm",
							children: [
								/* @__PURE__ */ jsx("input", {
									type: "checkbox",
									checked: data.visible ?? true,
									onChange: (e) => update("visible", e.target.checked)
								}),
								" ",
								t("Visible", "Visible")
							]
						})]
					})
				]
			});
			case "donations": return /* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ jsx("input", {
						value: data.name_en || "",
						onChange: (e) => update("name_en", e.target.value),
						placeholder: "Name EN",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.name_es || "",
						onChange: (e) => update("name_es", e.target.value),
						placeholder: "Name ES",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.image || "",
						onChange: (e) => update("image", e.target.value),
						placeholder: "Image/QR Code URL (optional)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "Details EN"
						})
					}),
					/* @__PURE__ */ jsx("textarea", {
						value: data.details_en || "",
						onChange: (e) => update("details_en", e.target.value),
						placeholder: "Details EN (HTML allowed)",
						rows: 4,
						className: "w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs"
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "Details ES"
						})
					}),
					/* @__PURE__ */ jsx("textarea", {
						value: data.details_es || "",
						onChange: (e) => update("details_es", e.target.value),
						placeholder: "Details ES (HTML allowed)",
						rows: 4,
						className: "w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.link || "",
						onChange: (e) => update("link", e.target.value),
						placeholder: "Donation link (Stripe, PayPal, etc.)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsx("input", {
							value: data.sort_order ?? 0,
							onChange: (e) => update("sort_order", parseInt(e.target.value) || 0),
							type: "number",
							placeholder: "Sort order",
							className: "rounded-lg border bg-background px-3 py-2 text-sm"
						}), /* @__PURE__ */ jsxs("label", {
							className: "flex items-center gap-2 text-sm",
							children: [
								/* @__PURE__ */ jsx("input", {
									type: "checkbox",
									checked: data.visible ?? true,
									onChange: (e) => update("visible", e.target.checked)
								}),
								" ",
								t("Visible", "Visible")
							]
						})]
					})
				]
			});
			default: return null;
		}
	};
	if (isEditing) return /* @__PURE__ */ jsxs("div", {
		className: "rounded-xl border bg-secondary p-4 space-y-3",
		children: [renderFields(), /* @__PURE__ */ jsxs("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ jsxs("button", {
				onClick: () => onSave(editData),
				className: "flex-1 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
				children: [
					/* @__PURE__ */ jsx(Save, { className: "h-4 w-4 mr-1" }),
					" ",
					t("Save", "Guardar")
				]
			}), /* @__PURE__ */ jsxs("button", {
				onClick: onCancel,
				className: "flex-1 rounded-full border px-4 py-2 text-sm",
				children: [
					/* @__PURE__ */ jsx(X, { className: "h-4 w-4 mx-auto" }),
					" ",
					t("Cancel", "Cancelar")
				]
			})]
		})]
	});
	data.key || data.title_en || data.name || data.slug || data.label_en || item.id;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex items-start justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-start gap-3 min-w-0",
			children: [data.image && /* @__PURE__ */ jsx("img", {
				src: data.image,
				alt: "",
				className: "h-12 w-12 shrink-0 rounded-lg object-cover border"
			}), /* @__PURE__ */ jsxs("div", {
				className: "flex-1 min-w-0",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "font-medium text-primary truncate",
						children: data.label_en || data.title_en || data.name || data.key || item.id || "New"
					}),
					data.en && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground truncate",
						children: data.en
					}),
					data.es && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground truncate",
						children: data.es
					}),
					data.title_en && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground truncate",
						children: data.title_en
					}),
					data.name && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground truncate",
						children: data.name
					}),
					data.address && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground truncate",
						children: data.address
					}),
					data.hours_en && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground truncate",
						children: data.hours_en
					}),
					data.details_en && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground truncate line-clamp-1",
						children: data.details_en
					}),
					data.desc_en && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground truncate line-clamp-1",
						children: data.desc_en
					}),
					data.label_en && /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground truncate",
						children: data.label_en
					})
				]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex items-center gap-1",
			children: [
				/* @__PURE__ */ jsx("button", {
					onClick: () => onClone(item),
					className: "p-1.5 hover:bg-blue-100 rounded text-blue-600",
					title: "Clone",
					children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => onEdit(item),
					className: "p-1.5 hover:bg-accent rounded",
					title: "Edit",
					children: /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: onDelete,
					className: "p-1.5 hover:bg-red-100 rounded text-red-600",
					title: "Delete",
					children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
				})
			]
		})]
	});
}
//#endregion
export { AdminPanelLayout as component };
