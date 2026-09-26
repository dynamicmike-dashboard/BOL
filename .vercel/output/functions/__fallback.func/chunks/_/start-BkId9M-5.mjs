import { t as renderErrorPage } from '../../index.mjs';
import { c as createMiddleware, a as createCsrfMiddleware } from './server-Cg2o2Lxr.mjs';
import { s as supabase } from './client-CKWpw7kM.mjs';
import '@tanstack/react-router';
import 'react/jsx-runtime';
import '@tanstack/react-router/ssr/server';
import 'node:async_hooks';
import 'rou3';
import 'srvx';
import '@tanstack/router-core';
import '@tanstack/router-core/ssr/client';
import 'seroval';
import '@tanstack/history';
import '@tanstack/router-core/ssr/server';
import '@supabase/supabase-js';

function dedupeSerializationAdapters(deduped, serializationAdapters) {
  for (let i = 0, len = serializationAdapters.length; i < len; i++) {
    const current = serializationAdapters[i];
    if (!deduped.has(current)) {
      deduped.add(current);
      if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
    }
  }
}
var createStart = (getOptions) => {
  return {
    getOptions: async () => {
      const options = await getOptions();
      if (options.serializationAdapters) {
        const deduped = /* @__PURE__ */ new Set();
        dedupeSerializationAdapters(deduped, options.serializationAdapters);
        options.serializationAdapters = Array.from(deduped);
      }
      return options;
    },
    createMiddleware
  };
};
var attachSupabaseAuth = createMiddleware({ type: "function" }).client(async ({ next }) => {
  var _a;
  const { data } = await supabase.auth.getSession();
  const token = (_a = data.session) == null ? void 0 : _a.access_token;
  return next({ headers: token ? { Authorization: `Bearer ${token}` } : {} });
});
var errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) throw error;
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
});
var csrfMiddleware = createCsrfMiddleware({ filter: (ctx) => ctx.handlerType === "serverFn" });
var startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth],
  requestMiddleware: [errorMiddleware, csrfMiddleware]
}));

export { startInstance };
//# sourceMappingURL=start-BkId9M-5.mjs.map
