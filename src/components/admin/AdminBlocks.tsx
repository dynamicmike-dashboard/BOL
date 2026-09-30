"use client";

import { useState } from "react";
import { FileText, Trash2, Edit, Copy, Plus, Save, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface ContentBlock {
  key: string;
  en: string;
  es: string;
}

interface AdminBlocksProps {
  blocks: any[];
  setBlocks: React.Dispatch<React.SetStateAction<any[]>>;
}

export function AdminBlocks({ blocks, setBlocks }: AdminBlocksProps) {
  const { t } = useLang();
  const [editingBlock, setEditingBlock] = useState<any>(null);
  const [newBlockDefaults, setNewBlockDefaults] = useState<any>(null);

  const startEdit = (block: any) => {
    setEditingBlock(block);
  };

  const handleNewBlock = () => {
    setNewBlockDefaults({ key: "", en: "", es: "" });
    setEditingBlock("new");
  };

  const handleSave = async (block: any) => {
    // TODO: Implement save to API
    toast.success("Content block saved");
    setEditingBlock(null);
  };

  const handleCancel = () => {
    setEditingBlock(null);
  };

  const handleDelete = (block: any) => {
    if (confirm("Delete this content block?")) {
      toast.success("Content block deleted");
    }
  };

  const handleClone = (block: any) => {
    // TODO: Implement clone
    toast.success("Content block cloned");
  };

  return (
    <div className="rounded-2xl border bg-card p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-primary">
          <FileText className="h-5 w-5" />
          {t("Content Blocks", "Bloques de Contenido")}
        </h2>
        <button
          onClick={handleNewBlock}
          className="rounded-full border bg-background px-3 py-1.5 text-sm hover:bg-accent"
        >
          <Plus className="h-4 w-4" />
          {t("Add Content Block", "Agregar Bloque de Contenido")}
        </button>
      </div>
      <div className="space-y-3 max-h-[500px] overflow-y-auto">
        {blocks.map((block) => (
          <div
            key={block.key}
            className="flex items-start justify-between gap-2 rounded-xl border bg-secondary p-3 hover:border-accent transition"
          >
            <div className="flex items-start gap-3 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="font-mono text-sm font-medium text-primary truncate">{block.key}</p>
                <p className="mt-1 text-xs text-muted-foreground truncate">{block.en}</p>
                <p className="mt-1 text-xs text-muted-foreground truncate">{block.es}</p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    // TODO: Implement edit
                  }}
                  className="p-1.5 hover:bg-accent rounded"
                  title="Edit"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    // TODO: Implement clone
                  }}
                  className="p-1.5 hover:bg-blue-100 rounded text-blue-600"
                  title="Clone"
                >
                  <Copy className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    if (confirm("Delete this content block?")) {
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
        {blocks.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No content blocks yet. Click "Add Content Block" to create one.
          </div>
        )}
      </div>
    </div>
  );
}