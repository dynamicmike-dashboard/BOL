import { useQuery } from "@tanstack/react-query";
import { useLang } from "./i18n";
import {
  contentBlocks,
  pages,
  dropoffs,
  volunteerNeeds,
  donationMethods,
  type PageRow,
  SYSTEM_PATHS,
  pagePath,
} from "./content";

export { type PageRow, SYSTEM_PATHS, pagePath };
export { contentBlocks, pages, dropoffs, volunteerNeeds, donationMethods };

// Static query helpers - no Supabase needed
function createStaticQuery<T>(data: T[]) {
  return {
    data,
    isLoading: false,
    error: null,
    isError: false,
    isSuccess: true,
  } as const;
}

export function useRows<T = any>(table: string) {
  const dataMap: Record<string, any[]> = {
    content_blocks: Object.entries(contentBlocks).map(([key, val]) => ({ key, ...val })),
    pages,
    dropoffs,
    volunteer_needs: volunteerNeeds,
    donation_methods: donationMethods,
    messages: [],
  };

  return createStaticQuery(dataMap[table] ?? []);
}

export function usePages() {
  return useRows<PageRow>("pages");
}

export function useBlocks() {
  const { t } = useLang();
  const map = new Map(
    Object.entries(contentBlocks || {}).map(([key, val]) => [key, val])
  );
  return (key: string, fallback = "") => {
    const r = map.get(key);
    return r ? t(r.en, r.es) : fallback;
  };
}