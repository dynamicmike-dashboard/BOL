"use client";

import { useState } from "react";
import { CreditCard, ExternalLink, Trash2, Edit, Copy, Plus, Save, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

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

interface DonationsProps {
  donations: any[];
  setDonations: React.Dispatch<React.SetStateAction<any[]>>;
}

export function AdminDonations({ donations, setDonations }: DonationsProps) {
  const { t } = useLang();

  const handleClone = async (donation: any) => {
    try {
      const res = await fetch(`/api/admin/donations/${donation.id}/clone`, {
        method: "POST",
        credentials: "include",
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Donation method cloned");
        window.location.reload();
      } else {
        toast.error("Failed to clone donation method");
      }
    } catch {
      toast.error("Failed to clone donation method");
    }
  };

  const handleNewDonation = () => {
    window.location.href = "/admin/donations/new";
  };

  const handleDelete = async (donation: any) => {
    if (confirm("Delete this donation method?")) {
      try {
        await fetch(`/api/admin/donations/${donation.id}`, {
          method: "DELETE",
          credentials: "include",
        });
        toast.success("Donation method deleted");
      } catch {
        toast.error("Failed to delete donation method");
      }
    }
  };

  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
          <CreditCard className="h-5 w-5" />
          {t("Donation Methods", "Métodos de Donación")}
        </h2>
        <button
          onClick={() => window.location.href = "/admin/donations/new"}
          className="rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent"
        >
          <Plus className="h-4 w-4" />
          {t("Add Donation Method", "Agregar Método de Donación")}
        </button>
      </div>
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {donations.map((donation) => (
          <div
            key={donation.id}
            className="flex items-start justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition"
          >
            <div className="flex items-start gap-3 min-w-0">
              {donation.image && (
                <img
                  src={donation.image}
                  alt=""
                  className="h-12 w-12 shrink-0 rounded-lg object-cover border"
                />
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-primary truncate">{donation.name_en || donation.name_es || "Untitled"}</h3>
                <p className="mt-1 whitespace-pre-line text-muted-foreground">{donation.details_en || donation.details_es}</p>
                {donation.link && (
                  <a
                    href={donation.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground"
                  >
                    {t("Donate Now", "Donar Ahora")} <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => window.location.href = `/admin/donations/${donation.id}`}
                  className="p-1.5 hover:bg-accent rounded"
                  title="Edit"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    if (confirm("Clone this donation method?")) {
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
                    if (confirm("Delete this donation method?")) {
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
          </div>
        ))}
        {donations.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No donation methods yet. Click "Add Donation Method" to create one.
          </div>
        )}
      </div>
    </div>
  );
}