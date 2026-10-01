# Breath of Life PDC - Project Memory

## Project Constraints (MANDATORY)
- **Only access files within**: `F:\Mike d drive\Mike Webs\Client Projects\Breath of Life - Michele Avila Mendoza\BOL-github\playa-impact-cms-main`
- **NO new repositories** without explicit approval
- **NO browser automation** (antigravity, playwright, etc.)
- **GitHub/Vercel**: dynamicmike@gmail.com
- **Live URLs**: https://bol-dusky.vercel.app/ | https://BreathofLifePDC.org
- **Admin password env**: VITE_ADMIN_PASSWORD=boladmin2026

## Tech Stack
- TanStack React Start (SSR) + React 19 + TypeScript
- Tailwind CSS v4 + Radix UI + Lucide React
- Server functions via `@tanstack/react-start`
- Cookie-based auth with `vinxi/http`

## Key Files Modified in Last Session
- `src/routes/help.tsx` - Fixed missing Link import
- `src/lib/admin/cookies.ts` (NEW) - Server cookie utilities
- `src/lib/admin/auth.ts` - Rewritten server auth functions
- `src/routes/admin.tsx` - SSR loader with auth check + redirect
- `src/routes/admin/login.tsx` (NEW) - Login page with form POST
- `src/components/admin/AdminLayout.tsx` - Simplified, no client auth
- `src/components/admin/AdminDashboard.tsx` - Removed duplicate header
- `src/routes/admin/api/data.ts` - Added requireAuth() to all functions
- `vite.config.ts` - Externalized vinxi/http for client build

## Auth Flow
1. `/admin` loader checks `bol_admin_session` cookie via `checkAuthServer()`
2. Invalid → redirect `/admin/login`
3. POST login → sets HttpOnly Secure SameSite=Lax cookie → redirect `/admin`
4. All admin API calls guarded by `requireAuth()`

## Build Status
✅ Build passes (client + SSR)