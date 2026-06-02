# Idara Studio

The marketing site for [Idara](https://idara.studio) — a small studio crafting careful, single-purpose Gutenberg blocks for WordPress.

> *The studio that lights up your editor.*

Built with **Next.js 15** (App Router), **React 19**, **TypeScript**, **Tailwind CSS**, and **Apollo Client** (configured but currently using static data — ready to swap to a headless WordPress backend via WPGraphQL).

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, RSC by default) |
| Language | TypeScript, strict mode |
| Styling | Tailwind CSS 3 + brand tokens |
| Fonts | Fraunces (display), Inter (sans), JetBrains Mono (mono), Amiri (Arabic) — all via `next/font` |
| Data | Static (`lib/plugins.ts`) → Apollo + WPGraphQL when CMS is live |
| Deploy target | Vercel |

---

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
app/
├── layout.tsx              # Root layout, fonts, metadata, Nav + Footer
├── globals.css             # Tailwind base + component utilities
├── page.tsx                # Home (hero, featured plugin, coming soon, philosophy)
├── not-found.tsx           # Global 404
├── about/page.tsx          # About the studio + principles
├── docs/page.tsx           # Docs placeholder
└── plugins/
    ├── page.tsx            # Plugin directory (server)
    ├── plugins-client.tsx  # Filter UI (client)
    └── [slug]/
        ├── page.tsx        # Plugin detail (server, SSG via generateStaticParams)
        └── tabs.tsx        # Overview/Settings/Installation/Changelog (client)

components/
├── Logo.tsx                # Brand mark with إدارة accent
├── Nav.tsx                 # Sticky nav with active state ('use client')
├── chrome.tsx              # Footer + SectionDivider
├── plugin-card.tsx         # Listing card (default + compact variants)
└── icons/index.tsx         # All SVG icons (StarEight, Arrow, plugin icons)

lib/
├── plugins.ts              # Static plugin catalogue (swap for GraphQL later)
├── apollo.ts               # Apollo Client (ready, unused)
└── queries.ts              # WPGraphQL queries matching the static shape

types/
└── plugin.ts               # Plugin interface — matches eventual GraphQL response
```

---

## Pages

| Route | Type | Purpose |
|---|---|---|
| `/` | Server | Hero + featured plugin + coming soon + philosophy |
| `/plugins` | Server (data) + Client (filter) | All plugins with status filter |
| `/plugins/[slug]` | Server (SSG) | Plugin detail with tabbed content |
| `/about` | Server | Studio story + maker + principles |
| `/docs` | Server | Placeholder for future docs |

---

## Connecting to headless WordPress

When the WordPress backend is ready (custom post type `plugin` exposed via WPGraphQL with custom fields), swap `lib/plugins.ts` for live queries:

```ts
// lib/plugins.ts (future version)
import { apolloClient } from "@/lib/apollo";
import { ALL_PLUGINS_QUERY, PLUGIN_BY_SLUG_QUERY } from "@/lib/queries";
import type { Plugin } from "@/types/plugin";

export async function getAllPlugins(): Promise<Plugin[]> {
	const { data } = await apolloClient.query({ query: ALL_PLUGINS_QUERY });
	return data.plugins.nodes.map(mapToPlugin);
}

export async function getPlugin(slug: string): Promise<Plugin | undefined> {
	const { data } = await apolloClient.query({
		query: PLUGIN_BY_SLUG_QUERY,
		variables: { slug },
	});
	return data.plugin ? mapToPlugin(data.plugin) : undefined;
}
```

The `Plugin` type and all page components already expect this shape — no other code changes are needed.

---

## Brand tokens

Defined in `tailwind.config.ts`:

| Token | Value | Use |
|---|---|---|
| `bg-paper` | `#fafaf7` | Page background (warm cream) |
| `bg-surface` | `#ffffff` | Card surfaces |
| `text-ink` | `#0a0a0f` | Primary text |
| `text-muted` | `#4a4a55` | Body copy |
| `text-faint` | `#8a8a95` | Labels, tertiary |
| `border-line` | `#e8e3da` | Warm gray borders |
| `text-amber` | `#b45309` | Primary accent |
| `bg-amber-soft` | `#fef3c7` | Accent fills |

Per-plugin accents live in `plugin-card.tsx` and `[slug]/page.tsx` via inline `style={{ background: plugin.bg, color: plugin.color }}`.

---

## License

GPL-2.0-or-later · Built in Surat 🇮🇳
