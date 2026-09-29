"use client";

import { useState, useEffect } from "react";
import { 
  LayoutDashboard, FileText, MapPin, Users, Heart, 
  Settings, Layers, FileText, Image as ImageIcon,
  Trash2, Edit, Copy, Save, X, ChevronDown, Plus,
  Eye, EyeOff, Lock, LogOut, Copy, Save, X, 
  ArrowUpDown, Menu, X as XIcon, ChevronDown
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

interface PageData {
  id: string;
  slug: string;
  label_en: string;
  label_es: string;
  title_en: string;
  title_es: string;
  body_en: string;
  body_es: string;
  image?: string;
  sort_order: number;
  visible: boolean;
  is_system: boolean;
}

interface DropoffItem {
  id: string;
  name: string;
  address: string;
  hours_en: string;
  hours_es: string;
  phone: string;
  map_url: string;
  image?: string;
  sort_order: number;
  visible: boolean;
}

interface VolunteerNeed {
  id: string;
  title_en: string;
  title_es: string;
  desc_en: string;
  desc_es: string;
  image?: string;
  sort_order: number;
  visible: boolean;
}

interface DonationMethod {
  id: string;
  name_en: string;
  name_es: string;
  details_en: string;
  details_es: string;
  link: string;
  image?: string;
  sort_order: number;
  visible: boolean;
}

interface ContentBlock {
  key: string;
  en: string;
  es: string;
}

interface AdminPageProps {
  pages: any[];
  setPages: React.Dispatch<React.SetStateAction<any[]>>;
  onPageChange: (pages: any[]) => void;
}

export function AdminPages({ pages, setPages, onPageChange }: AdminPageProps) {
  const { t } = useLang();
  const [editingPage, setEditingPage] = useState<any>(null);
  const [newPageDefaults, setNewPageDefaults] = useState<any>(null);
  const [editingKey, setEditingKey] = useState<string | null>(null);

  const startEdit = (page: any) => {
    window.location.href = `/admin/pages/${page.id}`;
  };

  const handleDelete = async (page: any) => {
    if (confirm("Delete this page?")) {
      try {
        await fetch(`/api/admin/pages/${page.id}`, {
          method: "DELETE",
          credentials: "include",
        });
        toast.success("Page deleted");
      } catch {
        toast.error("Failed to delete page");
      }
    }
  };

  const handleClone = async (page: any) => {
    try {
      const res = await fetch(`/api/admin/pages/${page.id}/clone`, {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Page cloned");
        window.location.reload();
      } else {
        toast.error("Failed to clone page");
      }
    } catch {
      toast.error("Failed to clone page");
    }
  };

  const handleNewPage = () => {
    window.location.href = "/admin/pages/new";
  };

  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
          <Users className="h-5 w-5" />
          Pages
        </h2>
        <button
          onClick={() => window.location.href = "/admin/pages/new"}
          className="rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent"
        >
          <Plus className="h-4 w-4" />
          Add Page
        </button>
      </div>
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {pages.map((page) => (
          <div
            key={page.id}
            className="flex items-start justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition"
          >
            <div className="flex items-start gap-3 min-w-0">
              {page.image && (
                <img
                  src={page.image}
                  alt=""
                  className="h-12 w-12 shrink-0 rounded-lg object-cover border"
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-primary truncate">{page.label_en || page.title_en || page.slug || "Untitled"}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {t(page.label_en, page.label_es)}
                </p>
                {page.title_en && (
                  <p className="text-xs text-muted-foreground truncate">{page.title_en}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => window.location.href = `/admin/pages/${page.id}`}
                className="p-1.5 hover:bg-accent rounded"
                title="Edit"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  if (confirm("Clone this page?")) {
                    // TODO: Implement clone
                  }
                }
                className="p-1.5 hover:bg-blue-100 rounded text-blue-600"
                title="Clone"
              >
                <Copy className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  if (confirm("Delete this page?")) {
                    // TODO: Implement delete
                  }
                }
                className="p-1.5 hover:bg-red-100 rounded text-red-600"
                title="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
        {pages.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No pages yet. Click "Add Page" to create one.
          </div>
        )}
      </div>
    </div>
  );
}

export function AdminDashboard() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"pages" | "dropoffs" | "volunteer" | "donations" | "blocks">("pages");
  const [pages, setPages] = useState<any[]>([]);
  const [dropoffs, setDropoffs] = useState<any[]>([]);
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [donations, setDonations] = useState<any[]>([]);
  const [blocks, setBlocks] = useState<any[]>([]);

  useEffect(() => {
    // Load data from localStorage or API
    const loadData = async () => {
      try {
        const res = await fetch("/api/admin/data", { credentials: "include" });
        const data = await res.json();
        if (data.pages) setPages(data.pages);
        if (data.dropoffs) setDropoffs(data.dropoffs);
        if (data.volunteerNeeds) setVolunteers(data.volunteerNeeds);
        if (data.donationMethods) setDonations(data.donationMethods);
      } catch {
        // Fallback to localStorage
      }
    };
    loadData();
  }, []);

  const handleSave = async (type: string, data: any) => {
    // TODO: Implement save to API
    toast.success("Saved");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-primary">Admin Panel</h1>
          </div>
          <div className="flex items-center gap-2">
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
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
        <div className="mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="pages">Pages</TabsTrigger>
              <TabsTrigger value="dropoffs">Drop-off Points</TabsTrigger>
              <TabsTrigger value="volunteer">Volunteer Needs</TabsTrigger>
              <TabsTrigger value="donations">Donations</TabsTrigger>
              <TabsTrigger value="blocks">Content Blocks</TabsTrigger>
            </TabsList>
            <TabsContent value="pages">
              <AdminPages pages={pages} setPages={setPages} onPageChange={setPages} />
            </TabsContent>
            <TabsContent value="dropoffs">
              <AdminDropoffs dropoffs={dropoffs} setDropoffs={setDropoffs} />
            </TabsContent>
            <TabsContent value="volunteer">
              <AdminVolunteers volunteers={volunteers} setVolunteers={setVolunteers} />
            </TabsContent>
            <TabsContent value="donations">
              <AdminDonations donations={donations} setDonations={setDonations} />
            </TabsContent>
            <TabsContent value="blocks">
              <AdminBlocks blocks={blocks} setBlocks={setBlocks} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}