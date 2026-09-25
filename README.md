# Servy — Marketing Website

> **Your work deserves a financial identity.**

Static marketing site for **Servy**, a household-employment records platform connecting Indian households with domestic workers. One monthly flow creates **two records**: an **invoice** for the household and a **salary slip** for the worker.

**This is NOT the Servy product.** No auth, bookings, payments, database, or backend live here — only a conversion-focused landing page that links to the real app (placeholders for now). See [`idea.md`](./idea.md) for the full product brief.

Live URL (update when deployed): **https://servy.in**

---

## 1. Quick start

**Prerequisites:** Node.js 20+ and npm.

```bash
# install dependencies
npm install

# run locally (http://localhost:3000)
npm run dev

# type-check + lint
npx tsc --noEmit
npm run lint

# production build + serve
npm run build
npm start
```

No environment variables, database, or API keys needed — the site is fully static.

---

## 2. Tech stack

| Layer | Choice | Why / where |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Static pages, file routing, built-in SEO |
| Language | **TypeScript** (strict) | Types in `data/*.ts`, props on every component |
| Styling | **Tailwind CSS v4** | Design tokens in `app/globals.css` via `@theme` |
| Animation | **Framer Motion** | `Reveal`, navbar drawer, FAQ accordion, hero entrances |
| Icons | **Lucide React** | All icons come from `lucide-react`, stored in `data/content.ts` |
| Images | `next/image` (AVIF → WebP) | Optimized assets in `public/` |
| Hosting | **Vercel** (recommended) | Zero-config Next.js deploy, see §7 |

Path alias: `@/*` maps to the repo root (see `tsconfig.json`), so `@/components/Hero` = `./components/Hero`.

---

## 3. Project structure

```
app/
  layout.tsx        # Root layout: font, global SEO, JSON-LD, skip link. Rarely touched.
  page.tsx          # Home page: section order lives here. Reorder to rearrange the site.
  globals.css       # Tailwind tokens (brand palette) + base styles + reduced-motion rules.
  robots.ts         # Generates /robots.txt from siteConfig.url
  sitemap.ts        # Generates /sitemap.xml (/, /privacy, /terms)
  privacy/page.tsx  # Privacy Policy (placeholder copy — needs legal review)
  terms/page.tsx    # Terms & Conditions (placeholder copy — needs legal review)

components/
  Navbar.tsx         # Fixed header, scroll-spy, mobile drawer
  Hero.tsx           # #home — indigo hero + photo + app screenshot
  ServyModel.tsx     # #model — Household → Servy → Worker diagram
  Households.tsx     # #for-households — employer pitch + checklist
  InvoiceSection.tsx # #invoices — sample household invoice mock
  Workers.tsx        # #for-workers — worker pitch + monthly flow
  SalarySlipSection.tsx # #salary-slips — sample salary-slip mock
  IdentitySection.tsx   # #financial-identity — indigo profile/history band
  HowItWorks.tsx     # #how-it-works — 7-step timeline
  WhoServes.tsx      # (no id) — two-card household/worker recap
  TrustSecurity.tsx  # #trust-security — 7-card trust grid
  AppShowcase.tsx    # #download — phone + feature lists + store badges
  AboutServy.tsx     # #about — Vision / Mission
  Faq.tsx            # #faq — accordion, first item open by default
  FinalCta.tsx       # #contact — closing CTA + support email
  Footer.tsx         # Link columns + giant wordmark
  LegalDoc.tsx       # Shared layout for /privacy and /terms
  ui/
    Reveal.tsx         # Scroll fade-up wrapper (respects reduced motion)
    SectionHeading.tsx # Eyebrow + H2 + description pattern
    Logo.tsx           # App mark + wordmark (dark/light tones)
    StoreButtons.tsx   # App Store / Play Store badges
    DotGrid.tsx        # Animated decorative dot texture

data/
  site.ts      # ★ EDIT FIRST: brand, URLs, nav links, footer, socials
  content.ts   # ★ EDIT SECOND: all section copy, features, steps, FAQs

public/
  brand/       # Logo + store badges (servy-logo.png, app-store.png, google-play.png)
  app-screens/ # App screenshots (servy-app-home.webp)
  images/      # Photography (hero-family-living, household-man, worker-woman, …)
```

**Every source file has a header comment** explaining what it renders, which `id` it owns, and where its copy comes from. Start there if you're lost.

---

## 4. How to edit (common tasks)

### Change any text or list
Most copy lives in **`data/content.ts`** (features, steps, FAQs) and **`data/site.ts`** (brand, nav, footer). Edit those files — components render them automatically. Only hardcoded exceptions: invoice/salary-slip mocks (demo values inside their components) and Vision/Mission in `AboutServy.tsx`.

### Reorder / add / remove a section
1. Open `app/page.tsx` — the component list *is* the page order.
2. To add a section: create `components/MySection.tsx` (copy `AboutServy.tsx` as a template: `<section id="…" aria-labelledby="…">` + `Reveal` + `SectionHeading`), export it, import in `page.tsx`.
3. If it needs a nav link: add `{ label, href: "#my-id" }` to `navLinks` in `data/site.ts`. The scroll-spy picks it up automatically.

### Change brand colors or fonts
- Colors: edit the hex values under `@theme` in `app/globals.css`. Utilities like `bg-brand`, `text-ink-soft`, `bg-mint-soft` update everywhere.
- Palette: Deep Indigo `#283593` (brand), Dark `#1D276F`, Mint `#4CAF7A`, Mint-soft `#E8F5EE`, Lavender `#E9E8FF`, Canvas `#F8F7F9`, Ink `#202124`.
- Font: Inter via `next/font` in `app/layout.tsx`. Swap the import to change typeface.

### Replace images
Drop replacements into `public/` keeping the same filenames, or update the `src` in the component. Keep WebP/AVIF, keep `alt` text descriptive, keep `width`/`height` so layout doesn't shift. Photography guidance: clean app mockups and professional Indian household/worker imagery — no blurry, low-res, or photographed-phone shots (see `idea.md` §22).

### Replace placeholder links (before launch)
Search for `#download` and `mailto:hello@servy.in`:
- `siteConfig.appStoreUrl` / `playStoreUrl` (`data/site.ts`) — real store listings.
- `siteConfig.contactEmail` — real support address.
- `socialLinks` — currently `"#"` placeholders.
- Navbar `Login` / `Get Started`, invoice `Download Invoice`, slip `Download/Share` buttons all point at `#download` today and do nothing real.

---

## 5. Conventions to keep

- **Sections:** every full-width band is `<section id="…" aria-labelledby="…-heading" class="scroll-mt-24 …">`. The `scroll-mt` offsets the fixed navbar; `aria-labelledby` points at the `SectionHeading id`.
- **Animation:** wrap blocks in `<Reveal delay={…}>`, never raw `motion.*` except Hero/Navbar/FAQ which need custom triggers. All animation must respect `useReducedMotion()` — follow the existing pattern.
- **Tone:** simple, friendly, human. No fake stats ("10,000+ users"), awards, or partnerships. No loan/credit guarantees — the approved disclaimer is *"Servy creates the record. Institutions decide."*
- **Accessibility:** semantic headings (one `h1` in Hero, `h2` per section), descriptive `alt`, visible focus rings (global), keyboard-operable menu + FAQ, `aria-hidden` on decorative layers.
- **Performance:** lazy-load below-the-fold images (`loading="lazy"`), `priority` only on hero/logo, keep animations transform/opacity-only.

---

## 6. SEO

Defaults live in `app/layout.tsx` and pull from `siteConfig` (`title`, `description`, `url`). Per-page overrides in `app/privacy/page.tsx` and `app/terms/page.tsx` via `metadata`. Open Graph image: `public/images/servy-app-on-desk.webp`. JSON-LD (Organization + WebSite + MobileApplication) is inlined in the layout. Update `siteConfig.url` to the real domain before launch so canonical URLs, sitemap, and robots are correct.

---

## 7. Deployment

Recommended: **Vercel** — import the repo, defaults work (`npm run build`, output auto-detected). No env vars required.

```bash
npm run build   # must pass with no TypeScript or ESLint errors
```

Any static host works (`next build` → `next start`), but Vercel gives image optimization and edge caching for free.

---

## 8. Handover checklist (for the new owner)

- [ ] Update `siteConfig` in `data/site.ts`: `url`, `contactEmail`, store URLs, social links.
- [ ] Replace `#download` CTAs with real signup/store destinations.
- [ ] Get `/privacy` and `/terms` reviewed — they're plain-language placeholders.
- [ ] Swap any temporary photography/screenshots in `public/` with final assets.
- [ ] Verify Lighthouse (performance, a11y, SEO) and test at 390px / 768px / 1440px.
- [ ] Confirm the compliance line stays intact: Servy documents records; it never promises loans, credit, or approvals.

---

## 9. Learn more

- Full design brief, copy deck, and product rules: [`idea.md`](./idea.md)
- Next.js docs: https://nextjs.org/docs · Tailwind v4: https://tailwindcss.com · Framer Motion: https://motion.dev · Lucide icons: https://lucide.dev
