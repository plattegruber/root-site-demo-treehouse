# Treehouse Pediatric Dentistry

A demo marketing site for **root.site** — a warm, kid-friendly pediatric dental practice
built for nervous kids and the parents booking for them.

🔗 **Live:** https://treehouse.demo.root.site

Implemented from a [Claude Design](https://claude.ai/design) handoff bundle (HTML/CSS/JS
prototype) and rebuilt as a production SvelteKit application.

## Stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Framework      | [SvelteKit 2](https://svelte.dev/docs/kit) + Svelte 5 (runes) |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`, design tokens in `@theme` |
| Icons          | [`@lucide/svelte`](https://lucide.dev)              |
| Rendering      | Fully prerendered static site (`adapter-static`)    |
| Hosting        | Cloudflare (Workers static assets) via `wrangler`   |
| Fonts          | Fredoka (display) + Mulish (body), Google Fonts     |

## Architecture

Design tokens (color palette, type families, radii, shadows) live once in
`src/app.css` under Tailwind's `@theme`, so they generate utilities
(`bg-cream`, `text-ink-700`, `rounded-lg`, `shadow-md`, `font-display`, …) and
stay the single source of truth.

```
src/
├── app.css                  # Tailwind import, @theme tokens, base, type scale, reveal
├── app.html                 # Document shell + LocalBusiness JSON-LD
├── lib/
│   ├── actions/reveal.js     # Progressive-enhancement scroll-reveal (reduced-motion safe)
│   ├── data/site.js          # Practice contact details + nav (single source of truth)
│   └── components/
│       ├── ui/               # Button, Card, Section, SectionHead, IconBadge, Photo,
│       │                     #   Avatar, Tag, Stars, RatingChip, PillSoft, Eyebrow
│       ├── site/             # Nav, Footer, ChatWidget, FinalCTA, PageHero, Seo
│       ├── home/             # Hero, ComfortBand, Services, Walkthrough, Reviews, TrustStrip
│       ├── book/             # BookingWidget (validated, with confirmation)
│       └── nervous/          # FaqItem (accessible accordion)
└── routes/                   # /, /services, /nervous-kids, /meet-dr-priya,
                              #   /for-parents, /reviews, /parent-education, /book
```

### Interactivity

- **Pip chat widget** — a non-aggressive helper that routes by intent (emergency → call,
  new patient → booking, nervous kid → the nervous-kids guide).
- **Booking widget** — live slot picker + inline-validated form with a confirmation state.
- **Scroll reveals** — gentle fade-and-rise via the `reveal` action; content already in
  view loads instantly, and the whole effect is skipped under `prefers-reduced-motion`.
- **FAQ accordion**, **review filters**, **blog category filter** (with an empty state),
  and a responsive **mobile nav**.

Photo areas are intentionally rendered as labeled placeholders describing the real shot to
commission, per the design system.

## Develop

```sh
npm install
npm run dev          # local dev server
npm run check        # svelte-check (types + a11y)
npm run build        # prerender to ./build
npm run preview      # preview the production build
```

## Deploy

```sh
npm run deploy       # build + wrangler deploy
```

Routing to `treehouse.demo.root.site` is configured as a Cloudflare custom domain in
`wrangler.jsonc`.
