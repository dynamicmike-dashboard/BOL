import { t as getServerFnById } from "./__23tanstack-start-server-fn-resolver-sigCVFCS.js";
import { d as TSS_SERVER_FUNCTION, t as createServerFn } from "./createServerFn-BpgqxZjr.js";
import { n as useLang } from "./i18n-BoG3AB_M.js";
import { t as cn } from "./utils-C_uf36nf.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import * as React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Copy, Edit, Eye, EyeOff, FileText, Heart, Layers, MapPin, Plus, Trash2, Users } from "lucide-react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as LabelPrimitive from "@radix-ui/react-label";
//#region node_modules/@tanstack/start-server-core/dist/esm/createSsrRpc.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
//#endregion
//#region src/routes/admin/api/-admin.ts
var login = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("b1408e05156a6dde99db46bd11831ac1d9c05106ddb7fd275852d53da50edc9b"));
var logout = createServerFn({ method: "POST" }).handler(createSsrRpc("a0151e90d420f97163a18ec54dd980e7b2a3244e31db45c7e58a65783a9224b8"));
var verifySession = createServerFn({ method: "POST" }).handler(createSsrRpc("38d7698100eb70f69b80044492544267f232c9dff7716653d014e18b869cd3bb"));
//#endregion
//#region src/routes/admin/api/-data.ts
var getAdminData = createServerFn({ method: "POST" }).handler(createSsrRpc("b0b8b2be351870244a581a8efed98c6b0e628af6b3afcdc5fa831b3ae2dcc49d"));
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("6059f4dc4de011915d8f7b16764dbff715fd960ebb393137b1749c109b070e9d"));
var deletePage = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("6bce540237ad05a4ea4a4682337db933a364a96c2f06105f4e78d9b76e3e9eca"));
var clonePage = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("83ff7045031dd0e75ec1a322b984e567d3eaf08cccfb19d2cb2c1b443ffac3f1"));
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("0c2854bc0c9b9fdecf9a4af9eab030cc12d9568b605ef4af44852a10b978e589"));
var cloneDropoff = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("49dfafc46eced9a27cf144cd032810191854453a7b269e16eb653f506ba1639a"));
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("37cdb77c55360fecae60b9343e42596713de6b1b30672dbee94f204ed52f7b7c"));
var cloneVolunteerNeed = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("7a7715332195fd94a16c63e9aa22a23863add98c7fac6ac774717c4201bf6ad2"));
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("0629826eae4a9d9afa59bc5748f0c7fbab4c53a03764d317e09c2536384b0e85"));
var cloneDonationMethod = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("774b36648f3e0c69bf135b61015ff44af6758e714befff27b4716f18a2a771d3"));
var deleteDropoff = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("db61efa1bc4f1f06bb4001da8ee3cc1c00d467979441ad8c8884a878f35b9300"));
var deleteVolunteerNeed = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("917e76a54e8687fe1946d9ef3870e11c3d324c8463bba0a27310e31f95b13632"));
var deleteDonationMethod = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("ade39a45f847434c362e906eb82a2e4327cdda9d55882108cdb8f0ce55dc5568"));
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("6dde606e2d1ffa2769ec96b8599e430b54d13760c0c036cc8bca135f74a0ad0c"));
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("287e40dd68e489db51129b9c49a7d596e0dbc63e6fd4fca99df71e180520a8f7"));
createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("b103cc8f2de81b4531c7798f0a563c0dd12ea24c7dab08c094976eda398d9dce"));
//#endregion
//#region src/components/ui/tabs.tsx
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
//#endregion
//#region src/components/admin/AdminDashboard.tsx
function AdminPages({ pages, setPages, onPageChange }) {
	const { t } = useLang();
	const [showForm, setShowForm] = useState(false);
	const [editingPage, setEditingPage] = useState(null);
	const handleDelete = async (page) => {
		if (confirm("Delete this page?")) try {
			if ((await deletePage({ id: page.id })).success) {
				toast.success("Page deleted");
				window.location.reload();
			} else toast.error("Failed to delete page");
		} catch {
			toast.error("Failed to delete page");
		}
	};
	const handleClone = async (page) => {
		try {
			if ((await clonePage({
				id: page.id,
				slug: page.slug,
				title_en: page.title_en,
				title_es: page.title_es
			})).success) {
				toast.success("Page cloned");
				window.location.reload();
			} else toast.error("Failed to clone page");
		} catch {
			toast.error("Failed to clone page");
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border bg-card p-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between mb-4",
			children: [/* @__PURE__ */ jsxs("h2", {
				className: "flex items-center gap-2 text-lg font-semibold text-primary",
				children: [/* @__PURE__ */ jsx(FileText, { className: "h-5 w-5" }), "Pages"]
			}), /* @__PURE__ */ jsxs("button", {
				onClick: () => {
					setEditingPage(null);
					setShowForm(true);
				},
				className: "rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent",
				children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), "Add Page"]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-3 max-h-[500px] overflow-y-auto",
			children: [pages.map((page) => /* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-3 min-w-0",
					children: [page.image && /* @__PURE__ */ jsx("img", {
						src: page.image,
						alt: "",
						className: "h-12 w-12 shrink-0 rounded-lg object-cover border"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex-1 min-w-0",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "font-medium text-primary truncate",
								children: page.label_en || page.title_en || page.slug || "Untitled"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground truncate",
								children: t(page.label_en, page.label_es)
							}),
							page.title_en && /* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground truncate",
								children: page.title_en
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: () => {
								setEditingPage(page);
								setShowForm(true);
							},
							className: "p-1.5 hover:bg-accent rounded",
							title: "Edit",
							children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => handleClone(page),
							className: "p-1.5 hover:bg-blue-100 rounded text-blue-600",
							title: "Clone",
							children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => handleDelete(page),
							className: "p-1.5 hover:bg-red-100 rounded text-red-600",
							title: "Delete",
							children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
						})
					]
				})]
			}, page.id)), pages.length === 0 && /* @__PURE__ */ jsx("div", {
				className: "text-center py-8 text-muted-foreground",
				children: "No pages yet. Click \"Add Page\" to create one."
			})]
		})]
	});
}
function AdminDropoffs({ dropoffs, setDropoffs }) {
	const { t } = useLang();
	const [showForm, setShowForm] = useState(false);
	const [editing, setEditing] = useState(null);
	const handleClone = async (dropoff) => {
		try {
			if ((await cloneDropoff({ id: dropoff.id })).success) {
				toast.success("Drop-off cloned");
				window.location.reload();
			} else toast.error("Failed to clone");
		} catch {
			toast.error("Failed to clone");
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border bg-card p-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between mb-4",
			children: [/* @__PURE__ */ jsxs("h2", {
				className: "flex items-center gap-2 text-lg font-semibold text-primary",
				children: [/* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }), "Drop-off Points"]
			}), /* @__PURE__ */ jsxs("button", {
				onClick: () => {
					setEditing(null);
					setShowForm(true);
				},
				className: "rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent",
				children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), " Add Drop-off"]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-3 max-h-[500px] overflow-y-auto",
			children: [dropoffs.map((dropoff) => /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-medium text-primary truncate",
						children: dropoff.name
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground truncate",
						children: dropoff.address
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: () => {
								setEditing(dropoff);
								setShowForm(true);
							},
							className: "p-1.5 hover:bg-accent rounded",
							title: "Edit",
							children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => handleClone(dropoff),
							className: "p-1.5 hover:bg-blue-100 rounded text-blue-600",
							title: "Clone",
							children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: async () => {
								if (confirm("Delete?")) {
									if ((await deleteDropoff({ id: dropoff.id })).success) window.location.reload();
								}
							},
							className: "p-1.5 hover:bg-red-100 rounded text-red-600",
							title: "Delete",
							children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
						})
					]
				})]
			}, dropoff.id)), dropoffs.length === 0 && /* @__PURE__ */ jsx("div", {
				className: "text-center py-8 text-muted-foreground",
				children: "No drop-off points yet."
			})]
		})]
	});
}
function AdminVolunteers({ volunteers, setVolunteers }) {
	const { t } = useLang();
	const [showForm, setShowForm] = useState(false);
	const [editing, setEditing] = useState(null);
	const handleClone = async (volunteer) => {
		try {
			if ((await cloneVolunteerNeed({ id: volunteer.id })).success) {
				toast.success("Volunteer need cloned");
				window.location.reload();
			} else toast.error("Failed to clone");
		} catch {
			toast.error("Failed to clone");
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border bg-card p-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between mb-4",
			children: [/* @__PURE__ */ jsxs("h2", {
				className: "flex items-center gap-2 text-lg font-semibold text-primary",
				children: [/* @__PURE__ */ jsx(Users, { className: "h-5 w-5" }), "Volunteer Needs"]
			}), /* @__PURE__ */ jsxs("button", {
				onClick: () => {
					setEditing(null);
					setShowForm(true);
				},
				className: "rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent",
				children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), " Add Volunteer Need"]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-3 max-h-[500px] overflow-y-auto",
			children: [volunteers.map((volunteer) => /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-medium text-primary truncate",
						children: t(volunteer.title_en, volunteer.title_es)
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground truncate",
						children: t(volunteer.desc_en, volunteer.desc_es)
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: () => {
								setEditing(volunteer);
								setShowForm(true);
							},
							className: "p-1.5 hover:bg-accent rounded",
							title: "Edit",
							children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => handleClone(volunteer),
							className: "p-1.5 hover:bg-blue-100 rounded text-blue-600",
							title: "Clone",
							children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: async () => {
								if (confirm("Delete?")) {
									if ((await deleteVolunteerNeed({ id: volunteer.id })).success) window.location.reload();
								}
							},
							className: "p-1.5 hover:bg-red-100 rounded text-red-600",
							title: "Delete",
							children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
						})
					]
				})]
			}, volunteer.id)), volunteers.length === 0 && /* @__PURE__ */ jsx("div", {
				className: "text-center py-8 text-muted-foreground",
				children: "No volunteer needs yet."
			})]
		})]
	});
}
function AdminDonations({ donations, setDonations }) {
	const { t } = useLang();
	const [showForm, setShowForm] = useState(false);
	const [editing, setEditing] = useState(null);
	const handleClone = async (donation) => {
		try {
			if ((await cloneDonationMethod({ id: donation.id })).success) {
				toast.success("Donation method cloned");
				window.location.reload();
			} else toast.error("Failed to clone");
		} catch {
			toast.error("Failed to clone");
		}
	};
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border bg-card p-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between mb-4",
			children: [/* @__PURE__ */ jsxs("h2", {
				className: "flex items-center gap-2 text-lg font-semibold text-primary",
				children: [/* @__PURE__ */ jsx(Heart, { className: "h-5 w-5" }), "Donation Methods"]
			}), /* @__PURE__ */ jsxs("button", {
				onClick: () => {
					setEditing(null);
					setShowForm(true);
				},
				className: "rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent",
				children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), " Add Method"]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-3 max-h-[500px] overflow-y-auto",
			children: [donations.map((donation) => /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-medium text-primary truncate",
						children: t(donation.name_en, donation.name_es)
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xs text-muted-foreground truncate",
						children: t(donation.details_en, donation.details_es)
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ jsx("button", {
							onClick: () => {
								setEditing(donation);
								setShowForm(true);
							},
							className: "p-1.5 hover:bg-accent rounded",
							title: "Edit",
							children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => handleClone(donation),
							className: "p-1.5 hover:bg-blue-100 rounded text-blue-600",
							title: "Clone",
							children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: async () => {
								if (confirm("Delete?")) {
									if ((await deleteDonationMethod({ id: donation.id })).success) window.location.reload();
								}
							},
							className: "p-1.5 hover:bg-red-100 rounded text-red-600",
							title: "Delete",
							children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
						})
					]
				})]
			}, donation.id)), donations.length === 0 && /* @__PURE__ */ jsx("div", {
				className: "text-center py-8 text-muted-foreground",
				children: "No donation methods yet."
			})]
		})]
	});
}
function AdminBlocks({ blocks, setBlocks }) {
	const { t } = useLang();
	const [showForm, setShowForm] = useState(false);
	const [editing, setEditing] = useState(null);
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border bg-card p-6",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between mb-4",
			children: [/* @__PURE__ */ jsxs("h2", {
				className: "flex items-center gap-2 text-lg font-semibold text-primary",
				children: [/* @__PURE__ */ jsx(Layers, { className: "h-5 w-5" }), "Content Blocks"]
			}), /* @__PURE__ */ jsxs("button", {
				onClick: () => {
					setEditing(null);
					setShowForm(true);
				},
				className: "rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent",
				children: [/* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }), " Add Block"]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "space-y-3 max-h-[500px] overflow-y-auto",
			children: [blocks.map((block) => /* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex-1 min-w-0",
					children: [/* @__PURE__ */ jsx("p", {
						className: "font-medium text-primary truncate",
						children: block.key
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-xs text-muted-foreground truncate",
						children: [block.content_en?.substring(0, 60), "..."]
					})]
				}), /* @__PURE__ */ jsx("button", {
					onClick: () => {
						setEditing(block);
						setShowForm(true);
					},
					className: "p-1.5 hover:bg-accent rounded",
					title: "Edit",
					children: /* @__PURE__ */ jsx(Edit, { className: "h-4 w-4" })
				})]
			}, block.id)), blocks.length === 0 && /* @__PURE__ */ jsx("div", {
				className: "text-center py-8 text-muted-foreground",
				children: "No content blocks yet."
			})]
		})]
	});
}
function AdminDashboard() {
	const { t } = useLang();
	const [activeTab, setActiveTab] = useState("pages");
	const [pages, setPages] = useState([]);
	const [dropoffs, setDropoffs] = useState([]);
	const [volunteers, setVolunteers] = useState([]);
	const [donations, setDonations] = useState([]);
	const [blocks, setBlocks] = useState([]);
	useEffect(() => {
		const loadData = async () => {
			try {
				const data = await getAdminData();
				if (data.pages) setPages(data.pages);
				if (data.dropoffs) setDropoffs(data.dropoffs);
				if (data.volunteerNeeds) setVolunteers(data.volunteerNeeds);
				if (data.donationMethods) setDonations(data.donationMethods);
				if (data.contentBlocks) {
					const blocksArray = Object.entries(data.contentBlocks).map(([key, value]) => ({
						id: key,
						key,
						content_en: value.en || value.content_en || "",
						content_es: value.es || value.content_es || ""
					}));
					setBlocks(blocksArray);
				}
			} catch {}
		};
		loadData();
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ jsx("header", {
			className: "sticky top-0 z-40 border-b bg-background/95 backdrop-blur",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container mx-auto flex h-16 items-center justify-between gap-4 px-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-4",
					children: /* @__PURE__ */ jsx("h1", {
						className: "text-xl font-semibold text-primary",
						children: "Admin Panel"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("a", {
						href: "/",
						className: "text-sm text-muted-foreground hover:text-foreground",
						children: "← View Site"
					}), /* @__PURE__ */ jsx("button", {
						onClick: () => {
							document.cookie = "bol_admin_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
							window.location.href = "/admin";
						},
						className: "rounded-full border bg-background px-4 py-2 text-sm font-medium transition hover:bg-accent",
						children: "Logout"
					})]
				})]
			})
		}), /* @__PURE__ */ jsx("main", {
			className: "container mx-auto py-6 px-4 max-w-7xl",
			children: /* @__PURE__ */ jsx("div", {
				className: "mb-6",
				children: /* @__PURE__ */ jsxs(Tabs, {
					value: activeTab,
					onValueChange: setActiveTab,
					className: "w-full",
					children: [
						/* @__PURE__ */ jsxs(TabsList, {
							className: "grid w-full grid-cols-5",
							children: [
								/* @__PURE__ */ jsx(TabsTrigger, {
									value: "pages",
									children: "Pages"
								}),
								/* @__PURE__ */ jsx(TabsTrigger, {
									value: "dropoffs",
									children: "Drop-off Points"
								}),
								/* @__PURE__ */ jsx(TabsTrigger, {
									value: "volunteer",
									children: "Volunteer Needs"
								}),
								/* @__PURE__ */ jsx(TabsTrigger, {
									value: "donations",
									children: "Donations"
								}),
								/* @__PURE__ */ jsx(TabsTrigger, {
									value: "blocks",
									children: "Content Blocks"
								})
							]
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "pages",
							children: /* @__PURE__ */ jsx(AdminPages, {
								pages,
								setPages,
								onPageChange: setPages
							})
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "dropoffs",
							children: /* @__PURE__ */ jsx(AdminDropoffs, {
								dropoffs,
								setDropoffs
							})
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "volunteer",
							children: /* @__PURE__ */ jsx(AdminVolunteers, {
								volunteers,
								setVolunteers
							})
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "donations",
							children: /* @__PURE__ */ jsx(AdminDonations, {
								donations,
								setDonations
							})
						}),
						/* @__PURE__ */ jsx(TabsContent, {
							value: "blocks",
							children: /* @__PURE__ */ jsx(AdminBlocks, {
								blocks,
								setBlocks
							})
						})
					]
				})
			})
		})]
	});
}
//#endregion
//#region src/components/ui/button.tsx
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ jsx(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
//#region src/components/ui/label.tsx
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = LabelPrimitive.Root.displayName;
//#endregion
//#region src/components/admin/AdminLayout.tsx
var AdminAuthContext = createContext(null);
function AdminAuthProvider({ children }) {
	const [isAuthed, setAuthed] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		checkAuth();
	}, []);
	const checkAuth = async () => {
		try {
			if ((await verifySession()).valid) setAuthed(true);
		} catch {} finally {
			setIsLoading(false);
		}
	};
	const login$1 = async (password) => {
		try {
			if ((await login({ password })).success) {
				document.cookie = "bol_admin_session=authenticated; Path=/; Secure; SameSite=Lax; Max-Age=86400";
				setAuthed(true);
				return true;
			}
			return false;
		} catch {
			return false;
		}
	};
	const logout$1 = async () => {
		try {
			await logout();
			document.cookie = "bol_admin_session=; Path=/; Secure; SameSite=Lax; Max-Age=0";
			setAuthed(false);
			window.location.href = "/admin";
		} catch {}
	};
	return /* @__PURE__ */ jsx(AdminAuthContext.Provider, {
		value: {
			isAuthed,
			login: login$1,
			logout: logout$1,
			isLoading
		},
		children
	});
}
function useAdminAuth() {
	const context = useContext(AdminAuthContext);
	if (!context) throw new Error("useAdminAuth must be used within AdminAuthProvider");
	return context;
}
function LoginForm() {
	const { t } = useLang();
	const { login, isLoading } = useAdminAuth();
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		if (!await login(password)) setError(t("admin.invalidPassword") || "Invalid password");
	};
	return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen flex items-center justify-center bg-background p-4",
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full max-w-md",
			children: /* @__PURE__ */ jsxs("div", {
				className: "bg-card border rounded-lg shadow-sm p-8",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "text-center mb-8",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-bold text-foreground",
						children: "Admin Access"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-muted-foreground mt-2",
						children: "Enter password to access admin panel"
					})]
				}), /* @__PURE__ */ jsxs("form", {
					onSubmit: handleSubmit,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "password",
								className: "text-sm font-medium",
								children: "Password"
							}), /* @__PURE__ */ jsxs("div", {
								className: "relative mt-1",
								children: [/* @__PURE__ */ jsx(Input, {
									id: "password",
									type: showPassword ? "text" : "password",
									value: password,
									onChange: (e) => setPassword(e.target.value),
									className: "pr-10",
									placeholder: "Enter admin password",
									disabled: isLoading,
									autoComplete: "current-password"
								}), /* @__PURE__ */ jsx("button", {
									type: "button",
									onClick: () => setShowPassword(!showPassword),
									className: "absolute right-3 top-[38px] text-muted-foreground hover:text-foreground",
									children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5" })
								})]
							})]
						}),
						error && /* @__PURE__ */ jsx("p", {
							className: "text-sm text-red-500 text-center",
							children: error
						}),
						/* @__PURE__ */ jsx(Button, {
							type: "submit",
							className: "w-full",
							disabled: isLoading,
							size: "lg",
							children: isLoading ? "Signing in..." : "Sign In"
						})
					]
				})]
			})
		})
	});
}
function AdminLayout({ children }) {
	const { t } = useLang();
	const { isAuthed, isLoading, logout } = useAdminAuth();
	const [sidebarOpen, setSidebarOpen] = useState(false);
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "min-h-screen flex items-center justify-center bg-background",
		children: /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" })
	});
	if (!isAuthed) return /* @__PURE__ */ jsx(LoginForm, {});
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ jsx("header", {
			className: "sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container mx-auto flex h-16 items-center justify-between gap-4 px-4",
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-4",
					children: /* @__PURE__ */ jsx("h1", {
						className: "text-xl font-semibold text-primary",
						children: "Admin Panel"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("a", {
						href: "/",
						className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
						children: "← View Site"
					}), /* @__PURE__ */ jsx("button", {
						onClick: logout,
						className: "rounded-full border bg-background px-4 py-2 text-sm font-medium transition hover:bg-accent",
						children: "Logout"
					})]
				})]
			})
		}), /* @__PURE__ */ jsx("main", {
			className: "container mx-auto py-6 px-4 max-w-7xl",
			children: /* @__PURE__ */ jsx(Slot, {})
		})]
	});
}
//#endregion
//#region src/routes/admin.tsx?tsr-split=component
var SplitComponent = () => /* @__PURE__ */ jsx(AdminAuthProvider, { children: /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx(AdminDashboard, {}) }) });
//#endregion
export { SplitComponent as component };
