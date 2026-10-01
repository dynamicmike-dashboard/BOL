import { t as login } from "./auth-D-U1uxiD.js";
import { n as useLang } from "./i18n-BoG3AB_M.js";
import { t as cn } from "./utils-C_uf36nf.js";
import { t as Input } from "./input-B8Q2ztVi.js";
import * as React from "react";
import { useState } from "react";
import { redirect } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Eye, EyeOff } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as LabelPrimitive from "@radix-ui/react-label";
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
//#region src/routes/admin/login.tsx?tsr-split=component
function LoginPage() {
	const { t } = useLang();
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);
		if ((await login({ password })).success) throw redirect({ to: "/admin" });
		else setError(t("admin.invalidPassword") || "Incorrect password");
		setIsLoading(false);
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
//#endregion
export { LoginPage as component };
