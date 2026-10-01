"use client";

import { useState, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { LogOut, LayoutDashboard, FileText, MapPin, Users, Heart, Layers, Settings } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/admin/auth";
import { cn } from "@/lib/utils";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLang();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-primary">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-2">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← View Site</a>
            <button onClick={handleLogout} className="rounded-full border bg-background px-4 py-2 text-sm font-medium transition hover:bg-accent">Logout</button>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-6 px-4 max-w-7xl">
        <Slot />
      </main>
    </div>
  );
}