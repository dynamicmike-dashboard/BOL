import { n as useLang } from "./i18n-BoG3AB_M.js";
import { createContext, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
createContext(null);
function AdminLayout({ children }) {
	const { t } = useLang();
	const [sidebarOpen, setSidebarOpen] = useState(false);
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
			children: /* @__PURE__ */ jsx(Slot, {})
		})]
	});
}
//#endregion
//#region src/routes/admin.tsx?tsr-split=component
var SplitComponent = AdminLayout;
//#endregion
export { SplitComponent as component };
