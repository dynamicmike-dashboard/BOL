# Breath of Life Connect

Build a modern, animated bilingual (English & Spanish) website and admin CMS for "Breath of Life PDC", a community charity based in Playa del Carmen, Mexico, rebuilding from the attached original page source files (homepage, values, how you can help, volunteer, drop-off points, donations, and contact).

## Current Status (2026-09-28)

### ✅ Completed Features

**Pages:**
- **Home (/)** - Hero, stats, mission, programs, CTAs
- **Values (/values)** - Mission, Vision, Objective, Faith, Logo meaning
- **Help (/help)** - Contributions, Food packs, Holiday gifts, Sponsor a Family, Christmas CTA
- **Volunteer (/volunteer)** - Opportunities, signup form, **volunteers.jpg image added**
- **Drop-off (/drop-off)** - Roma Spaghetti & Pueblito Escondido with maps, hours, phones
- **Donate (/donate)** - 4 methods: Stripe, PayPal (tax-deductible), OXXO/Banco Azteca/Mercado Pago, PayPal Mexico. QR images local. BBVA placeholder removed.
- **Contact (/contact)** - Email, WhatsApp, social links, contact form
- **Team (/p/team)** - **team.jpg image added**, displays on dynamic page template
- **About (/p/about)** - image field added (needs about.jpg in /public)

**Admin Panel (/admin):**
- Login with `boladmin2024` or `VITE_ADMIN_PASSWORD` env var
- Content Blocks, Pages, Drop-off Points, Volunteer Needs, Donation Methods management
- Clone/Edit/Save/Delete/Cancel functionality with local state persistence
- Fixed crash issues with `|| {}` fallbacks in admin.tsx and `contentBlocks || {}` in cms.ts
- Clone/save now works with local state persistence

**PWA Support:**
- Web App Manifest with icons (72x72 to 512x512)
- Service Worker registration
- Apple touch icons

**SEO/Schema:**
- JSON-LD NGO schema
- Open Graph / Twitter cards
- Sitemap.xml, robots.txt

### ⚠️ Known Issues / Pending

1. **Admin page** - Fixed crash with `|| {}` fallbacks, but may still crash on Vercel if `contentBlocks` import fails. Fallback `|| {}` added.
2. **Team page (/p/team)** - `team.jpg` added, displays on dynamic page template.
3. **About page (/p/about)** - Added `image: "/about.jpg"` field but needs `about.jpg` in `/public`.
4. **Admin password** - Use `boladmin2024` or set `VITE_ADMIN_PASSWORD` in Vercel env vars.
6. **Vercel deployment** - Latest commit pushed. Need manual redeploy on Vercel Dashboard (Deployments → Redeploy) to pick up latest changes.

### Vercel Deployment Steps
1. Go to **Vercel Dashboard** → Project → **Settings** → **Environment Variables**
2. Add `VITE_ADMIN_PASSWORD` with your password
3. **Deployments** tab → click **"..."** on latest commit → **"Redeploy"**
3. Test in **fresh incognito** at `https://bol-dusky.vercel.app/`

### Development
```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

### Recent Commits
- `d32daef` - Fix: Add defensive fallbacks for all admin data imports and page image rendering
- `d249580` - Add image field to about page for dynamic page images
- `a2ac494` - Fix admin page crash: add contentBlocks || {} fallback in cms.ts
- `8f8eca3` - Fix admin page crash: add contentBlocks || {} fallback
- `dc90561` - Add team.jpg to team page, update p.$slug.tsx to display page image
- `e5d5c25` - Fix admin page crash: add fallback empty arrays for undefined imports

### Project Structure
```
src/
├── routes/
│   ├── admin.tsx          # Admin panel with clone/edit/save/delete
│   ├── donate.tsx         # Donation page with 4 methods + QR
│   ├── volunteer.tsx      # Volunteer page with image
│   ├── p.$slug.tsx        # Dynamic pages (team, about, etc.)
│   └── ...other pages
├── lib/
│   ├── cms.ts             # useRows, useBlocks, usePages hooks
│   ├── content.ts         # All static content (pages, blocks, methods)
│   └── i18n.tsx           # Language context
├── components/
│   ├── SiteLayout.tsx     # Header, footer, navigation
│   ├── Reveal.tsx         # GSAP scroll animations
│   └── ...UI components
└── components/ui/         # Radix UI components
```

### Vercel Environment Variables Needed
- `VITE_ADMIN_PASSWORD` - Admin panel password
- (Optional) Any Supabase keys if re-enabling backend

### Known Issues
1. Admin page may crash if `contentBlocks` import fails (fallback `|| {}` added)
2. Vercel may serve cached build - need manual redeploy
3. `about.jpg` needed in `/public` for about page image
4. `contentBlocks` import may be undefined in SSR - fallback `|| {}` added in admin.tsx and cms.ts