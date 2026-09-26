import { n as useLang } from "./i18n-BoG3AB_M.js";
import { d as dropoffs, f as pages, l as contentBlocks, n as SiteLayout, p as volunteerNeeds, u as donationMethods } from "./SiteLayout-BwEnPDRr.js";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { Copy, Eye, EyeOff, Image, LogOut, Pencil, Plus, Save, Trash2, X } from "lucide-react";
//#region src/routes/admin.tsx?tsr-split=component
var ADMIN_PASSWORD = "boladmin2024";
var contentBlocksArray = Object.entries(contentBlocks).map(([key, val]) => ({
	key,
	...val
}));
function AdminLayout({ children }) {
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
			children: [/* @__PURE__ */ jsx(LogOut, { className: "h-4 w-4" }), t("Logout", "Salir")]
		})]
	}), /* @__PURE__ */ jsxs("div", {
		className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
		children: [
			/* @__PURE__ */ jsx(AdminSection, {
				title: t("Content Blocks", "Bloques de Contenido"),
				icon: Image,
				items: contentBlocksArray,
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
	const [editing, setEditing] = useState(null);
	const [editData, setEditData] = useState(null);
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
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border bg-card p-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between mb-4",
			children: [/* @__PURE__ */ jsxs("h2", {
				className: "flex items-center gap-2 text-lg font-semibold text-primary",
				children: [/* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }), title]
			}), /* @__PURE__ */ jsx("button", {
				onClick: () => {
					setEditData(getDefaultItem(type));
					setEditing("new");
				},
				className: "rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent",
				children: /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" })
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-3 max-h-[500px] overflow-y-auto",
			children: [items.map((item) => /* @__PURE__ */ jsx(AdminItem, {
				item,
				type,
				editing,
				editData,
				onEdit: (item) => {
					setEditData({ ...item });
					setEditing(item.key || item.id);
				},
				onClone: (item) => {
					const cloned = {
						...item,
						id: `${item.id || item.key}-copy-${Date.now()}`,
						slug: item.slug ? `${item.slug}-copy` : void 0
					};
					setEditData(cloned);
					setEditing(cloned.key || cloned.id);
				},
				onSave: (updated) => {
					console.log(`${type} save:`, updated);
					alert(`${title} saved: ${JSON.stringify(updated)}`);
					setEditing(null);
					setEditData(null);
				},
				onCancel: () => {
					setEditing(null);
					setEditData(null);
				},
				onDelete: () => {
					if (confirm(t("Delete this item?", "¿Eliminar este elemento?"))) {
						console.log(`${type} delete:`, item.key || item.id);
						alert(`${title} deleted: ${item.key || item.id}`);
					}
				}
			}, item.key || item.id)), editing === "new" && /* @__PURE__ */ jsx(AdminItem, {
				item: getDefaultItem(type),
				type,
				editing: "new",
				editData,
				onEdit: () => {},
				onSave: (updated) => {
					console.log(`${type} create:`, updated);
					alert(`${title} created: ${JSON.stringify(updated)}`);
					setEditing(null);
					setEditData(null);
				},
				onCancel: () => {
					setEditing(null);
					setEditData(null);
				},
				onDelete: () => {}
			})]
		})]
	});
}
function AdminItem({ item, type, editing, editData, onEdit, onClone, onSave, onCancel, onDelete }) {
	const { t } = useLang();
	const itemKey = item.key || item.id;
	const isEditing = editing === itemKey || editing === "new" && itemKey === editData?.id;
	const data = isEditing ? editData : item;
	const renderFields = () => {
		const TextArea = ({ value, onChange, placeholder, rows = 6, ...props }) => /* @__PURE__ */ jsxs("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ jsx("textarea", {
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder,
				rows,
				className: "w-full rounded-lg border bg-background px-3 py-2 text-sm font-mono text-xs",
				...props
			}), /* @__PURE__ */ jsxs("p", {
				className: "text-xs text-muted-foreground",
				children: [
					"HTML allowed (e.g., ",
					/* @__PURE__ */ jsx("code", { children: /* @__PURE__ */ jsx("strong", { children: "bold" }) }),
					", ",
					/* @__PURE__ */ jsx("code", { children: /* @__PURE__ */ jsx("a", {
						href: "...",
						children: "link"
					}) }),
					")"
				]
			})]
		});
		const ImageInput = ({ value, onChange, placeholder }) => /* @__PURE__ */ jsxs("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ jsx("input", {
				value,
				onChange: (e) => onChange(e.target.value),
				placeholder,
				className: "w-full rounded-lg border bg-background px-3 py-2 text-sm"
			}), value && /* @__PURE__ */ jsx("img", {
				src: value,
				alt: "Preview",
				className: "max-w-xs h-auto rounded border"
			})]
		});
		switch (type) {
			case "blocks": return /* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ jsx("input", {
						value: data.key || "",
						onChange: (e) => setEditData({
							...data,
							key: e.target.value
						}),
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
					/* @__PURE__ */ jsx(TextArea, {
						value: data.en || "",
						onChange: (v) => setEditData({
							...data,
							en: v
						}),
						placeholder: "English content (HTML allowed)",
						rows: 4
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "ES"
						})
					}),
					/* @__PURE__ */ jsx(TextArea, {
						value: data.es || "",
						onChange: (v) => setEditData({
							...data,
							es: v
						}),
						placeholder: "Spanish content (HTML allowed)",
						rows: 4
					})
				]
			});
			case "pages": return /* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ jsx("input", {
						value: data.slug || "",
						onChange: (e) => setEditData({
							...data,
							slug: e.target.value
						}),
						placeholder: "slug (e.g., about, team)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm font-mono"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.label_en || "",
						onChange: (e) => setEditData({
							...data,
							label_en: e.target.value
						}),
						placeholder: "Menu Label EN (e.g., About Us)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.label_es || "",
						onChange: (e) => setEditData({
							...data,
							label_es: e.target.value
						}),
						placeholder: "Menu Label ES (e.g., Sobre Nosotros)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.title_en || "",
						onChange: (e) => setEditData({
							...data,
							title_en: e.target.value
						}),
						placeholder: "Page Title EN",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.title_es || "",
						onChange: (e) => setEditData({
							...data,
							title_es: e.target.value
						}),
						placeholder: "Page Title ES",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx(ImageInput, {
						value: data.image || "",
						onChange: (v) => setEditData({
							...data,
							image: v
						}),
						placeholder: "Image URL (optional)"
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "Body EN"
						})
					}),
					/* @__PURE__ */ jsx(TextArea, {
						value: data.body_en || "",
						onChange: (v) => setEditData({
							...data,
							body_en: v
						}),
						placeholder: "Page content EN (HTML allowed)",
						rows: 8
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono textxs",
							children: "Body ES"
						})
					}),
					/* @__PURE__ */ jsx(TextArea, {
						value: data.body_es || "",
						onChange: (v) => setEditData({
							...data,
							body_es: v
						}),
						placeholder: "Page content ES (HTML allowed)",
						rows: 8
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ jsx("input", {
								value: data.sort_order ?? 0,
								onChange: (e) => setEditData({
									...data,
									sort_order: parseInt(e.target.value) || 0
								}),
								type: "number",
								placeholder: "Sort order",
								className: "rounded-lg border bg-background px-3 py-2 text-sm"
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ jsx("input", {
									type: "checkbox",
									checked: data.visible ?? true,
									onChange: (e) => setEditData({
										...data,
										visible: e.target.checked
									})
								}), t("Visible in menu", "Visible en menú")]
							}),
							/* @__PURE__ */ jsxs("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ jsx("input", {
									type: "checkbox",
									checked: data.is_system ?? false,
									onChange: (e) => setEditData({
										...data,
										is_system: e.target.checked
									})
								}), t("System page (can't delete)", "Página del sistema (no eliminable)")]
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
						onChange: (e) => setEditData({
							...data,
							name: e.target.value
						}),
						placeholder: "Location name",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.address || "",
						onChange: (e) => setEditData({
							...data,
							address: e.target.value
						}),
						placeholder: "Full address",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.hours_en || "",
						onChange: (e) => setEditData({
							...data,
							hours_en: e.target.value
						}),
						placeholder: "Hours EN (e.g., Mon-Fri 9am-5pm)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.hours_es || "",
						onChange: (e) => setEditData({
							...data,
							hours_es: e.target.value
						}),
						placeholder: "Hours ES (e.g., Lun-Vie 9am-5pm)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.phone || "",
						onChange: (e) => setEditData({
							...data,
							phone: e.target.value
						}),
						placeholder: "Phone",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.map_url || "",
						onChange: (e) => setEditData({
							...data,
							map_url: e.target.value
						}),
						placeholder: "Google Maps URL",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx(ImageInput, {
						value: data.image || "",
						onChange: (v) => setEditData({
							...data,
							image: v
						}),
						placeholder: "Image URL (optional)"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsx("input", {
							value: data.sort_order ?? 0,
							onChange: (e) => setEditData({
								...data,
								sort_order: parseInt(e.target.value) || 0
							}),
							type: "number",
							placeholder: "Sort order",
							className: "rounded-lg border bg-background px-3 py-2 text-sm"
						}), /* @__PURE__ */ jsxs("label", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ jsx("input", {
								type: "checkbox",
								checked: data.visible ?? true,
								onChange: (e) => setEditData({
									...data,
									visible: e.target.checked
								})
							}), t("Visible", "Visible")]
						})]
					})
				]
			});
			case "volunteer": return /* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ jsx("input", {
						value: data.title_en || "",
						onChange: (e) => setEditData({
							...data,
							title_en: e.target.value
						}),
						placeholder: "Title EN",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.title_es || "",
						onChange: (e) => setEditData({
							...data,
							title_es: e.target.value
						}),
						placeholder: "Title ES",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx(ImageInput, {
						value: data.image || "",
						onChange: (v) => setEditData({
							...data,
							image: v
						}),
						placeholder: "Image URL (optional)"
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "Desc EN"
						})
					}),
					/* @__PURE__ */ jsx(TextArea, {
						value: data.desc_en || "",
						onChange: (v) => setEditData({
							...data,
							desc_en: v
						}),
						placeholder: "Description EN (HTML allowed)",
						rows: 4
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "Desc ES"
						})
					}),
					/* @__PURE__ */ jsx(TextArea, {
						value: data.desc_es || "",
						onChange: (v) => setEditData({
							...data,
							desc_es: v
						}),
						placeholder: "Description ES (HTML allowed)",
						rows: 4
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsx("input", {
							value: data.sort_order ?? 0,
							onChange: (e) => setEditData({
								...data,
								sort_order: parseInt(e.target.value) || 0
							}),
							type: "number",
							placeholder: "Sort order",
							className: "rounded-lg border bg-background px-3 py-2 text-sm"
						}), /* @__PURE__ */ jsxs("label", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ jsx("input", {
								type: "checkbox",
								checked: data.visible ?? true,
								onChange: (e) => setEditData({
									...data,
									visible: e.target.checked
								})
							}), t("Visible", "Visible")]
						})]
					})
				]
			});
			case "donations": return /* @__PURE__ */ jsxs("div", {
				className: "grid gap-2",
				children: [
					/* @__PURE__ */ jsx("input", {
						value: data.name_en || "",
						onChange: (e) => setEditData({
							...data,
							name_en: e.target.value
						}),
						placeholder: "Name EN",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.name_es || "",
						onChange: (e) => setEditData({
							...data,
							name_es: e.target.value
						}),
						placeholder: "Name ES",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsx(ImageInput, {
						value: data.image || "",
						onChange: (v) => setEditData({
							...data,
							image: v
						}),
						placeholder: "Image/QR Code URL (optional)"
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "Details EN"
						})
					}),
					/* @__PURE__ */ jsx(TextArea, {
						value: data.details_en || "",
						onChange: (v) => setEditData({
							...data,
							details_en: v
						}),
						placeholder: "Details EN (HTML allowed)",
						rows: 4
					}),
					/* @__PURE__ */ jsx("label", {
						className: "flex items-center gap-2 text-sm text-muted-foreground",
						children: /* @__PURE__ */ jsx("span", {
							className: "w-20 font-mono text-xs",
							children: "Details ES"
						})
					}),
					/* @__PURE__ */ jsx(TextArea, {
						value: data.details_es || "",
						onChange: (v) => setEditData({
							...data,
							details_es: v
						}),
						placeholder: "Details ES (HTML allowed)",
						rows: 4
					}),
					/* @__PURE__ */ jsx("input", {
						value: data.link || "",
						onChange: (e) => setEditData({
							...data,
							link: e.target.value
						}),
						placeholder: "Donation link (e.g., Stripe, PayPal)",
						className: "rounded-lg border bg-background px-3 py-2 text-sm"
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-2 sm:grid-cols-2",
						children: [/* @__PURE__ */ jsx("input", {
							value: data.sort_order ?? 0,
							onChange: (e) => setEditData({
								...data,
								sort_order: parseInt(e.target.value) || 0
							}),
							type: "number",
							placeholder: "Sort order",
							className: "rounded-lg border bg-background px-3 py-2 text-sm"
						}), /* @__PURE__ */ jsxs("label", {
							className: "flex items-center gap-2 text-sm",
							children: [/* @__PURE__ */ jsx("input", {
								type: "checkbox",
								checked: data.visible ?? true,
								onChange: (e) => setEditData({
									...data,
									visible: e.target.checked
								})
							}), t("Visible", "Visible")]
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
				onClick: () => onSave(data),
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
	const displayTitle = data.key || data.title_en || data.name || data.slug || data.label_en || item.id || "New";
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
						children: displayTitle
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
					title: t("Clone", "Clonar"),
					children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: () => onEdit(item),
					className: "p-1.5 hover:bg-accent rounded",
					title: t("Edit", "Editar"),
					children: /* @__PURE__ */ jsx(Pencil, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ jsx("button", {
					onClick: onDelete,
					className: "p-1.5 hover:bg-red-100 rounded text-red-600",
					title: t("Delete", "Eliminar"),
					children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
				})
			]
		})]
	});
}
//#endregion
export { AdminLayout as component };
