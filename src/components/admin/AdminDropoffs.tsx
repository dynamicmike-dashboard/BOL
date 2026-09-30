"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Navigation, Trash2, Edit, Copy, Plus } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

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

interface DropoffsProps {
  dropoffs: any[];
  setDropoffs: React.Dispatch<React.SetStateAction<any[]>>;
}

export function AdminDropoffs({ dropoffs, setDropoffs }: DropoffsProps) {
  const { t } = useLang();

  const handleClone = async (dropoff: any) => {
    try {
      const res = await fetch(`/api/admin/dropoffs/${dropoff.id}/clone`, {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Drop-off point cloned");
        window.location.reload();
      } else {
        toast.error("Failed to clone drop-off point");
      }
    } catch {
      toast.error("Failed to clone drop-off point");
    }
  };

  const handleNewDropoff = () => {
    window.location.href = "/admin/dropoffs/new";
  };

  const handleDelete = async (dropoff: any) => {
    if (confirm("Delete this drop-off point?")) {
      try {
        await fetch(`/api/admin/dropoffs/${dropoff.id}`, {
          method: "DELETE",
          credentials: "include",
        });
        toast.success("Drop-off point deleted");
      } catch {
        toast.error("Failed to delete drop-off point");
      }
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
          onClick={() => window.location.href = "/admin/dropoffs/new"}
          className="rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent"
        >
          <Plus className="h-4 w-4" />
          Add Drop-off Point
        </button>
      </div>
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {dropoffs.map((dropoff) => (
          <div
            key={dropoff.id}
            className="flex items-start justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition"
          >
            <div className="flex items-start gap-3 min-w-0">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-primary truncate">{dropoff.name}</h3>
                <p className="mt-1 flex gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" /> {dropoff.address}
                </p>
                <p className="mt-1 flex gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 shrink-0" /> {dropoff.hours_en}
                </p>
                {dropoff.phone && (
                  <p className="mt-1 flex gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 shrink-0" /> {dropoff.phone}
                  </p>
                )}
                <a
                  href={dropoff.map_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent"
                >
                  <Navigation className="h-4 w-4" />
                  Directions
                </a>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => window.location.href = `/admin/dropoffs/${dropoff.id}`}
                className="p-1.5 hover:bg-accent rounded"
                title="Edit"
              >
                <Edit className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  if (confirm("Clone this drop-off point?")) {
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
                  if (confirm("Delete this drop-off point?")) {
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
        {dropoffs.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No drop-off points yet. Click "Add Drop-off Point" to create one.
          </div>
        )}
      </div>
    </div>
  );
}