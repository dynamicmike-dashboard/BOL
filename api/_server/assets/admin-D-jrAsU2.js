import { n as logout } from "./auth-kmTAz2hj.js";
import { n as useLang } from "./i18n-BoG3AB_M.js";
import { t as cn } from "./utils-C_uf36nf.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { Copy, Edit, FileText, Heart, Layers, MapPin, Plus, Trash2, Users } from "lucide-react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Slot } from "@radix-ui/react-slot";
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
async function apiFetch(path, options = {}) {
	return (await fetch(`/api/admin${path}`, {
		...options,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			...options.headers
		}
	})).json();
}
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
				const data = await apiFetch("/data");
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
	return /* @__PURE__ */ jsx("div", {
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
	});
}
//#endregion
//#region src/components/admin/AdminLayout.tsx
function AdminLayout({ children }) {
	const { t } = useLang();
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const handleLogout = async () => {
		await logout();
		window.location.href = "/admin/login";
	};
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
						onClick: handleLogout,
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
var SplitComponent = () => /* @__PURE__ */ jsx(AdminLayout, { children: /* @__PURE__ */ jsx(AdminDashboard, {}) });
//#endregion
export { SplitComponent as component };
