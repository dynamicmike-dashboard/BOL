"use client";

import { useState } from "react";
import { Sun, Trash2, Edit, Copy, Plus, Save, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

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

interface VolunteersProps {
  volunteers: any[];
  setVolunteers: React.Dispatch<React.SetStateAction<any[]>>;
}

export function AdminVolunteers({ volunteers, setVolunteers }: VolunteersProps) {
  const { t } = useLang();

  const handleClone = async (volunteer: any) => {
    try {
      const res = await fetch(`/api/admin/volunteer/${volunteer.id}/clone`, {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Volunteer need cloned");
        window.location.reload();
      } else {
        toast.error("Failed to clone volunteer need");
      }
    } catch {
      toast.error("Failed to clone volunteer need");
    }
  };

  const handleNewVolunteer = () => {
    window.location.href = "/admin/volunteer/new";
  };

  const handleDelete = async (volunteer: any) => {
    if (confirm("Delete this volunteer need?")) {
      try {
        await fetch(`/api/admin/volunteer/${volunteer.id}`, {
          method: "DELETE",
          credentials: "include",
        });
        toast.success("Volunteer need deleted");
      } catch {
        toast.error("Failed to delete volunteer need");
      }
    }
  };

  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
          <Users className="h-5 w-5" />
          {t("Volunteer Needs", "Necesidades de Voluntariado")}
        </h2>
        <button
          onClick={() => window.location.href = "/admin/volunteer/new"}
          className="rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent"
        >
          <Plus className="h-4 w-4" />
          {t("Add Volunteer Need", "Agregar Necesidad de Voluntariado")}
        </button>
      </div>
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {volunteers.map((volunteer) => (
          <div
            key={volunteer.id}
            className="flex items-start justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition"
          >
            <div className="flex items-start gap-3 min-w-0">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-primary truncate">{volunteer.title_en || volunteer.title_es || "Untitled"}</h3>
                <p className="mt-1 text-muted-foreground truncate">{volunteer.desc_en || volunteer.desc_es}</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => window.location.href = `/admin/volunteer/${volunteer.id}`}
                  className="p-1.5 hover:bg-accent rounded"
                  title="Edit"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    if (confirm("Clone this volunteer need?")) {
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
                    if (confirm("Delete this volunteer need?")) {
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
        {volunteers.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No volunteer needs yet. Click "Add Volunteer Need" to create one.
          </div>
        )}
      </div>
    </div>
  );
}