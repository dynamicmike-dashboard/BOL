import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useLang } from "./i18n";

export type PageRow = {
  id: string;
  slug: string;
  label_en: string;
  label_es: string;
  title_en: string;
  title_es: string;
  body_en: string;
  body_es: string;
  sort_order: number;
  visible: boolean;
  is_system: boolean;
};

export const SYSTEM_PATHS: Record<string, string> = {
  home: "/",
  values: "/values",
  help: "/help",
  volunteer: "/volunteer",
  "drop-off": "/drop-off",
  donate: "/donate",
  contact: "/contact",
};
export const pagePath = (p: { slug: string; is_system: boolean }) =>
  p.is_system ? (SYSTEM_PATHS[p.slug] ?? "/") : `/p/${p.slug}`;

export function useRows<T = any>(table: string) {
  return useQuery({
    queryKey: [table],
    queryFn: async () => {
      const { data, error } = await (supabase.from(table as any) as any)
        .select("*")
        .order(
          table === "content_blocks" ? "key" : table === "messages" ? "created_at" : "sort_order",
        );
      if (error) throw error;
      return (data ?? []) as T[];
    },
  });
}

export function usePages() {
  return useRows<PageRow>("pages");
}

/** Returns a getter for translated content blocks. */
export function useBlocks() {
  const { t } = useLang();
  const q = useRows<{ key: string; value_en: string; value_es: string }>("content_blocks");
  const map = new Map((q.data ?? []).map((r) => [r.key, r]));
  return (key: string, fallback = "") => {
    const r = map.get(key);
    return r ? t(r.value_en, r.value_es) : fallback;
  };
}
