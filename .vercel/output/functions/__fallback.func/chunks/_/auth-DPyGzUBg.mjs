import { s as supabase } from './client-CKWpw7kM.mjs';
import { I as Input } from './input-43J5deqP.mjs';
import { L as LogoMark } from './SiteLayout-BZR8PuaZ.mjs';
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { jsx, jsxs } from 'react/jsx-runtime';
import { toast } from 'sonner';
import '@supabase/supabase-js';
import './utils-D6tCW7pd.mjs';
import './router-BMqEO7F2.mjs';
import '@tanstack/react-query';
import 'clsx';
import 'tailwind-merge';
import 'lucide-react';
import '@radix-ui/react-dialog';

function AuthPage() {
  const nav = useNavigate();
  const [mode, setMode] = useState("in");
  const [busy, setBusy] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email")), password = String(fd.get("password"));
    setBusy(true);
    if (mode === "in") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      setBusy(false);
      if (error) {
        toast.error(error.message);
        return;
      }
      nav({ to: "/admin" });
    } else {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: `${window.location.origin}/admin` }
      });
      setBusy(false);
      if (error) {
        toast.error(error.message);
        return;
      }
      toast.success("Check your email to confirm your account.");
      setMode("in");
    }
  }
  return /* @__PURE__ */ jsx("div", {
    className: "flex min-h-screen items-center justify-center bg-secondary px-4",
    children: /* @__PURE__ */ jsxs("form", {
      onSubmit: submit,
      className: "w-full max-w-sm space-y-4 rounded-3xl bg-card p-8 shadow-xl",
      children: [
        /* @__PURE__ */ jsx("div", {
          className: "flex justify-center",
          children: /* @__PURE__ */ jsx(LogoMark, { className: "h-14 w-14" })
        }),
        /* @__PURE__ */ jsx("h1", {
          className: "text-center text-2xl font-semibold text-primary",
          children: mode === "in" ? "Admin sign in" : "Create account"
        }),
        /* @__PURE__ */ jsx(Input, {
          name: "email",
          type: "email",
          required: true,
          placeholder: "Email"
        }),
        /* @__PURE__ */ jsx(Input, {
          name: "password",
          type: "password",
          required: true,
          minLength: 8,
          placeholder: "Password"
        }),
        /* @__PURE__ */ jsx("button", {
          disabled: busy,
          className: "w-full rounded-full bg-primary py-3 font-semibold text-primary-foreground disabled:opacity-50",
          children: mode === "in" ? "Sign in" : "Sign up"
        }),
        /* @__PURE__ */ jsx("button", {
          type: "button",
          onClick: () => setMode(mode === "in" ? "up" : "in"),
          className: "w-full text-sm text-muted-foreground underline",
          children: mode === "in" ? "Need an account? Sign up" : "Have an account? Sign in"
        })
      ]
    })
  });
}

export { AuthPage as component };
//# sourceMappingURL=auth-DPyGzUBg.mjs.map
