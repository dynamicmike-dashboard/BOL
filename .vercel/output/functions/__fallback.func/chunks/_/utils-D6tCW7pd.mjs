import { u as useLang } from './router-BMqEO7F2.mjs';
import { s as supabase } from './client-CKWpw7kM.mjs';
import { useQuery } from '@tanstack/react-query';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

var SYSTEM_PATHS = {
  home: "/",
  values: "/values",
  help: "/help",
  volunteer: "/volunteer",
  "drop-off": "/drop-off",
  donate: "/donate",
  contact: "/contact"
};
var pagePath = (p) => {
  var _a;
  return p.is_system ? (_a = SYSTEM_PATHS[p.slug]) != null ? _a : "/" : `/p/${p.slug}`;
};
function useRows(table) {
  return useQuery({
    queryKey: [table],
    queryFn: async () => {
      const { data, error } = await supabase.from(table).select("*").order(table === "content_blocks" ? "key" : table === "messages" ? "created_at" : "sort_order");
      if (error) throw error;
      return data != null ? data : [];
    }
  });
}
function usePages() {
  return useRows("pages");
}
function useBlocks() {
  var _a;
  const { t } = useLang();
  const q = useRows("content_blocks");
  const map = new Map(((_a = q.data) != null ? _a : []).map((r) => [r.key, r]));
  return (key, fallback = "") => {
    const r = map.get(key);
    return r ? t(r.value_en, r.value_es) : fallback;
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export { useRows as a, usePages as b, cn as c, pagePath as p, useBlocks as u };
//# sourceMappingURL=utils-D6tCW7pd.mjs.map
