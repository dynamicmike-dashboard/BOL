import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState, FormEvent } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLang } from "@/lib/i18n";
import { login } from "@/lib/admin/auth";

export const Route = createFileRoute("/admin/login")({
  component: LoginPage,
});

function LoginPage() {
  const { t } = useLang();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const result = await login({ password });
    if (result.success) {
      throw redirect({ to: "/admin" });
    } else {
      setError(t("admin.invalidPassword") || "Incorrect password");
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="bg-card border rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground">Admin Access</h1>
            <p className="text-muted-foreground mt-2">Enter password to access admin panel</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  placeholder="Enter admin password"
                  disabled={isLoading}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[38px] text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
            <Button type="submit" className="w-full" disabled={isLoading} size="lg">
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}