import { createClient } from '@supabase/supabase-js';

function brokeredPreviewStorage() {
  return void 0;
}
function isNewSupabaseApiKey(value) {
  return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
  return (input, init) => {
    const headers = new Headers(typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0);
    if (init == null ? void 0 : init.headers) new Headers(init.headers).forEach((value, key) => headers.set(key, value));
    if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) headers.delete("Authorization");
    headers.set("apikey", supabaseKey);
    return fetch(input, {
      ...init,
      headers
    });
  };
}
function createSupabaseClient() {
  const SUPABASE_URL = {
    "VITE_SUPABASE_URL": "https://ensgcewzmbqhtiidqnqz.supabase.co"
  }["VITE_SUPABASE_URL"];
  const SUPABASE_PUBLISHABLE_KEY = {
    "VITE_SUPABASE_PUBLISHABLE_KEY": "sb_publishable_pgLAhY1Zi5jVMBjPwZ0LPA_ZYQV_tJ7"}["VITE_SUPABASE_PUBLISHABLE_KEY"];
  return createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    global: { fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY) },
    auth: {
      storage: brokeredPreviewStorage(),
      persistSession: true,
      autoRefreshToken: true
    }
  });
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
  if (!_supabase) _supabase = createSupabaseClient();
  return Reflect.get(_supabase, prop, receiver);
} });

export { supabase as s };
//# sourceMappingURL=client-CKWpw7kM.mjs.map
