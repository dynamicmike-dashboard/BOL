"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { 
  Lock, LogOut, Eye, EyeOff, Pencil, Trash2, Plus, Save, X, 
  Image, Copy, ArrowUpDown, Menu, X as XIcon, ChevronDown, 
  LayoutDashboard, FileText, MapPin, Users, Heart, 
  Settings, Layers, FileText, Image as ImageIcon,
  Trash2, Edit, Copy, Save, X as XIcon2
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface AdminContextType {
  isAuthed: boolean;
  login: (password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AdminAuthContext = createContext<{ 
  isAuthed: boolean; 
  login: (password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  isLoading: boolean;
} | null>(null);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthed, setAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch("/api/admin/verify", {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data.valid) {
        setAuthed(true);
      }
    } catch {
      // Not authenticated
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (password: string): Promise<boolean> => {
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setAuthed(true);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/admin/logout", { 
        method: "POST", 
        credentials: "include" 
      });
      window.location.href = "/admin";
    } catch {
      // Ignore errors
    }
  };

  return (
    <AdminAuthContext.Provider value={{ 
      isAuthed: true, // For now, we'll handle auth client-side
      login: async (password: string) => {
        const res = await fetch("/api/admin/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ password }),
        });
        const data = await res.json();
        return data.success;
      },
      logout: async () => {
        await fetch("/api/admin/logout", { 
          method: "POST", 
          credentials: "include" 
        });
        window.location.href = "/admin";
      },
      isLoading: false,
    }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return context;
}

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { t } = useLang();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-primary">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← View Site
            </a>
            <button
              onClick={() => {
                document.cookie = "bol_admin_session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                window.location.href = "/admin";
              }}
              className="rounded-full border bg-background px-4 py-2 text-sm font-medium transition hover:bg-accent"
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-6 px-4 max-w-7xl">
        <Slot />
      </main>
    </div>
  );
}