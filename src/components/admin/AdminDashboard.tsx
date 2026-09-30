"use client";

import { useState, useEffect } from "react";
import { 
  LayoutDashboard, FileText, MapPin, Users, Heart, 
  Settings, Layers, Image as ImageIcon,
  Trash2, Edit, Copy, Save, X, ChevronDown, Plus,
  Eye, EyeOff, Lock, LogOut, 
  ArrowUpDown, Menu, X as XIcon, ChevronDown as ChevronDown2, 
  Copy as CopyIcon, Trash2 as Trash2Icon, Edit as EditIcon, Save as SaveIcon, X as XIcon2,
  ArrowUpDown as ArrowUpDown2, Menu as MenuIcon
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
import { 
  getAdminData,
  savePage, deletePage, clonePage,
  saveDropoff, deleteDropoff, cloneDropoff,
  saveVolunteerNeed, deleteVolunteerNeed, cloneVolunteerNeed,
  saveDonationMethod, deleteDonationMethod, cloneDonationMethod,
  saveContentBlock, deleteContentBlock,
} from "@/routes/admin/api/data";

interface PageData {
  id: string;
  slug: string;
  label_en: string;
  label_es: string;
  title_en: string;
  title_es: string;
  body_en: string;
  body_es: string;
  image: string;
  sort_order: number;
  visible: boolean;
  is_system: boolean;
}

interface DropoffData {
  id: string;
  name: string;
  address: string;
  hours_en: string;
  hours_es: string;
  phone: string;
  map_url: string;
  image: string;
  sort_order: number;
  visible: boolean;
}

interface VolunteerNeedData {
  id: string;
  title_en: string;
  title_es: string;
  desc_en: string;
  desc_es: string;
  image: string;
  sort_order: number;
  visible: boolean;
}

interface DonationMethodData {
  id: string;
  name_en: string;
  name_es: string;
  details_en: string;
  details_es: string;
  link: string;
  qr: string;
  image: string;
  visible: boolean;
  sort_order: number;
}

interface ContentBlockData {
  id: string;
  key: string;
  content_en: string;
  content_es: string;
}

function AdminPages({ pages, setPages, onPageChange }: { pages: PageData[]; setPages: (pages: PageData[]) => void; onPageChange: (pages: PageData[]) => void }) {
  const { t } = useLang();
  const [showForm, setShowForm] = useState(false);
  const [editingPage, setEditingPage] = useState<PageData | null>(null);

  const handleSave = async (page: PageData) => {
    try {
      const data = await apiFetch("/savePage", { method: "POST", body: JSON.stringify({ page }) });
      if (data.success) {
        toast.success("Page saved");
        setShowForm(false);
        setEditingPage(null);
        window.location.reload();
      } else {
        toast.error("Failed to save page");
      }
    } catch {
      toast.error("Failed to save page");
    }
  };

  const handleDelete = async (page: PageData) => {
    if (confirm("Delete this page?")) {
      try {
        const data = await apiFetch("/deletePage", { method: "POST", body: JSON.stringify({ id: page.id }) });
        if (data.success) {
          toast.success("Page deleted");
          window.location.reload();
        } else {
          toast.error("Failed to delete page");
        }
      } catch {
        toast.error("Failed to delete page");
      }
    }
  };

  const handleClone = async (page: PageData) => {
    try {
      const data = await apiFetch("/clonePage", { method: "POST", body: JSON.stringify({ id: page.id, slug: page.slug, title_en: page.title_en, title_es: page.title_es }) });
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

  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
          <FileText className="h-5 w-5" />
          Pages
        </h2>
        <button
          onClick={() => {
            setEditingPage(null);
            setShowForm(true);
          }}
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
                <p className="text-xs text-muted-foreground truncate">{t(page.label_en, page.label_es)}</p>
                {page.title_en && <p className="text-xs text-muted-foreground truncate">{page.title_en}</p>}
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setEditingPage(page);
                  setShowForm(true);
                }}
                className="p-1.5 hover:bg-accent rounded"
                title="Edit"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleClone(page)}
                className="p-1.5 hover:bg-blue-100 rounded text-blue-600"
                title="Clone"
              >
                <Copy className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDelete(page)}
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

function AdminDropoffs({ dropoffs, setDropoffs }: { dropoffs: DropoffData[]; setDropoffs: (dropoffs: DropoffData[]) => void }) {
  const { t } = useLang();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<DropoffData | null>(null);

  const handleSave = async (dropoff: DropoffData) => {
    try {
      const data = await apiFetch("/saveDropoff", { method: "POST", body: JSON.stringify({ dropoff }) });
      if (data.success) {
        toast.success("Drop-off saved");
        setShowForm(false);
        setEditing(null);
        window.location.reload();
      } else {
        toast.error("Failed to save");
      }
    } catch {
      toast.error("Failed to save");
    }
  };

  const handleClone = async (dropoff: DropoffData) => {
    try {
      const data = await apiFetch("/cloneDropoff", { method: "POST", body: JSON.stringify({ id: dropoff.id }) });
      if (data.success) {
        toast.success("Drop-off cloned");
        window.location.reload();
      } else {
        toast.error("Failed to clone");
      }
    } catch {
      toast.error("Failed to clone");
    }
  };

  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
          <MapPin className="h-5 w-5" />
          Drop-off Points
        </h2>
        <button
          onClick={() => { setEditing(null); setShowForm(true); }}
          className="rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent"
        >
          <Plus className="h-4 w-4" /> Add Drop-off
        </button>
      </div>
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {dropoffs.map((dropoff) => (
          <div key={dropoff.id} className="flex items-center justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-primary truncate">{dropoff.name}</p>
              <p className="text-xs text-muted-foreground truncate">{dropoff.address}</p>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => { setEditing(dropoff); setShowForm(true); }} className="p-1.5 hover:bg-accent rounded" title="Edit"><Edit className="h-4 w-4" /></button>
              <button onClick={() => handleClone(dropoff)} className="p-1.5 hover:bg-blue-100 rounded text-blue-600" title="Clone"><Copy className="h-4 w-4" /></button>
              <button onClick={async () => { if (confirm("Delete?")) { const data = await apiFetch("/deleteDropoff", { method: "POST", body: JSON.stringify({ id: dropoff.id }) }); if (data.success) window.location.reload(); } }} className="p-1.5 hover:bg-red-100 rounded text-red-600" title="Delete"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
        {dropoffs.length === 0 && <div className="text-center py-8 text-muted-foreground">No drop-off points yet.</div>}
      </div>
    </div>
  );
}

function AdminVolunteers({ volunteers, setVolunteers }: { volunteers: VolunteerNeedData[]; setVolunteers: (volunteers: VolunteerNeedData[]) => void }) {
  const { t } = useLang();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<VolunteerNeedData | null>(null);

  const handleSave = async (volunteer: VolunteerNeedData) => {
    try {
      const data = await apiFetch("/saveVolunteerNeed", { method: "POST", body: JSON.stringify({ need: volunteer }) });
      if (data.success) {
        toast.success("Volunteer need saved");
        setShowForm(false);
        setEditing(null);
        window.location.reload();
      } else {
        toast.error("Failed to save");
      }
    } catch {
      toast.error("Failed to save");
    }
  };

  const handleClone = async (volunteer: VolunteerNeedData) => {
    try {
      const data = await apiFetch("/cloneVolunteerNeed", { method: "POST", body: JSON.stringify({ id: volunteer.id }) });
      if (data.success) {
        toast.success("Volunteer need cloned");
        window.location.reload();
      } else {
        toast.error("Failed to clone");
      }
    } catch {
      toast.error("Failed to clone");
    }
  };

  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
          <Users className="h-5 w-5" />
          Volunteer Needs
        </h2>
        <button onClick={() => { setEditing(null); setShowForm(true); }} className="rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent">
          <Plus className="h-4 w-4" /> Add Volunteer Need
        </button>
      </div>
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {volunteers.map((volunteer) => (
          <div key={volunteer.id} className="flex items-center justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-primary truncate">{t(volunteer.title_en, volunteer.title_es)}</p>
              <p className="text-xs text-muted-foreground truncate">{t(volunteer.desc_en, volunteer.desc_es)}</p>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => { setEditing(volunteer); setShowForm(true); }} className="p-1.5 hover:bg-accent rounded" title="Edit"><Edit className="h-4 w-4" /></button>
              <button onClick={() => handleClone(volunteer)} className="p-1.5 hover:bg-blue-100 rounded text-blue-600" title="Clone"><Copy className="h-4 w-4" /></button>
              <button onClick={async () => { if (confirm("Delete?")) { const data = await apiFetch("/deleteVolunteerNeed", { method: "POST", body: JSON.stringify({ id: volunteer.id }) }); if (data.success) window.location.reload(); } }} className="p-1.5 hover:bg-red-100 rounded text-red-600" title="Delete"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
        {volunteers.length === 0 && <div className="text-center py-8 text-muted-foreground">No volunteer needs yet.</div>}
      </div>
    </div>
  );
}

function AdminDonations({ donations, setDonations }: { donations: DonationMethodData[]; setDonations: (donations: DonationMethodData[]) => void }) {
  const { t } = useLang();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<DonationMethodData | null>(null);

  const handleSave = async (donation: DonationMethodData) => {
    try {
      const data = await apiFetch("/saveDonationMethod", { method: "POST", body: JSON.stringify({ method: donation }) });
      if (data.success) {
        toast.success("Donation method saved");
        setShowForm(false);
        setEditing(null);
        window.location.reload();
      } else {
        toast.error("Failed to save");
      }
    } catch {
      toast.error("Failed to save");
    }
  };

  const handleClone = async (donation: DonationMethodData) => {
    try {
      const data = await apiFetch("/cloneDonationMethod", { method: "POST", body: JSON.stringify({ id: donation.id }) });
      if (data.success) {
        toast.success("Donation method cloned");
        window.location.reload();
      } else {
        toast.error("Failed to clone");
      }
    } catch {
      toast.error("Failed to clone");
    }
  };

  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
          <Heart className="h-5 w-5" />
          Donation Methods
        </h2>
        <button onClick={() => { setEditing(null); setShowForm(true); }} className="rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent">
          <Plus className="h-4 w-4" /> Add Method
        </button>
      </div>
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {donations.map((donation) => (
          <div key={donation.id} className="flex items-center justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-primary truncate">{t(donation.name_en, donation.name_es)}</p>
              <p className="text-xs text-muted-foreground truncate">{t(donation.details_en, donation.details_es)}</p>
            </div>
            <div className="flex items-center gap-1">
              <button onClick={() => { setEditing(donation); setShowForm(true); }} className="p-1.5 hover:bg-accent rounded" title="Edit"><Edit className="h-4 w-4" /></button>
              <button onClick={() => handleClone(donation)} className="p-1.5 hover:bg-blue-100 rounded text-blue-600" title="Clone"><Copy className="h-4 w-4" /></button>
              <button onClick={async () => { if (confirm("Delete?")) { const data = await apiFetch("/deleteDonationMethod", { method: "POST", body: JSON.stringify({ id: donation.id }) }); if (data.success) window.location.reload(); } }} className="p-1.5 hover:bg-red-100 rounded text-red-600" title="Delete"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
        {donations.length === 0 && <div className="text-center py-8 text-muted-foreground">No donation methods yet.</div>}
      </div>
    </div>
  );
}

function AdminBlocks({ blocks, setBlocks }: { blocks: ContentBlockData[]; setBlocks: (blocks: ContentBlockData[]) => void }) {
  const { t } = useLang();
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<ContentBlockData | null>(null);

  const handleSave = async (block: ContentBlockData) => {
    try {
      const data = await apiFetch("/saveContentBlock", { method: "POST", body: JSON.stringify({ block }) });
      if (data.success) {
        toast.success("Content block saved");
        setShowForm(false);
        setEditing(null);
        window.location.reload();
      } else {
        toast.error("Failed to save");
      }
    } catch {
      toast.error("Failed to save");
    }
  };

  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
          <Layers className="h-5 w-5" />
          Content Blocks
        </h2>
        <button onClick={() => { setEditing(null); setShowForm(true); }} className="rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent">
          <Plus className="h-4 w-4" /> Add Block
        </button>
      </div>
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {blocks.map((block) => (
          <div key={block.id} className="flex items-center justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition">
            <div className="flex-1 min-w-0">
              <p className="font-medium text-primary truncate">{block.key}</p>
              <p className="text-xs text-muted-foreground truncate">{block.content_en?.substring(0, 60)}...</p>
            </div>
            <button onClick={() => { setEditing(block); setShowForm(true); }} className="p-1.5 hover:bg-accent rounded" title="Edit"><Edit className="h-4 w-4" /></button>
          </div>
        ))}
        {blocks.length === 0 && <div className="text-center py-8 text-muted-foreground">No content blocks yet.</div>}
      </div>
    </div>
  );
}

export function AdminDashboard() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<"pages" | "dropoffs" | "volunteer" | "donations" | "blocks">("pages");
  const [pages, setPages] = useState<PageData[]>([]);
  const [dropoffs, setDropoffs] = useState<DropoffData[]>([]);
  const [volunteers, setVolunteers] = useState<VolunteerNeedData[]>([]);
  const [donations, setDonations] = useState<DonationMethodData[]>([]);
  const [blocks, setBlocks] = useState<ContentBlockData[]>([]);

  useEffect(() => {
    // Load data from API
    const loadData = async () => {
      try {
        const data = await getAdminData();
        if (data.pages) setPages(data.pages);
        if (data.dropoffs) setDropoffs(data.dropoffs);
        if (data.volunteerNeeds) setVolunteers(data.volunteerNeeds);
        if (data.donationMethods) setDonations(data.donationMethods);
        if (data.contentBlocks) {
          // Convert contentBlocks object to array
          const blocksArray = Object.entries(data.contentBlocks).map(([key, value]: [string, any]) => ({
            id: key,
            key,
            content_en: value.en || value.content_en || "",
            content_es: value.es || value.content_es || "",
          }));
          setBlocks(blocksArray);
        }
      } catch {
        // Fallback - will use empty arrays
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