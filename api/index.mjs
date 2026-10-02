// api/index.mjs - Vercel serverless function entry point (ESM)
// Loads the TanStack Start server bundle directly

import * as serverModule from '../dist/server/server.js';

const serverHandler = serverModule.default || serverModule;

export default async function handler(request, context) {
  const env = {};
  const ctx = {
    waitUntil: (promise) => context.waitUntil(promise)
  };

  try {
    const response = await serverHandler.fetch(request, env, ctx);
    return response;
  } catch (error) {
    console.error('Server error:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}