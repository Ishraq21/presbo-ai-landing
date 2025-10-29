# Presbo AI Landing Page

Presbo AI turns any script, lesson, or outline into a narrated and visually rich explainer videos in minutes. This repository contains the public-facing marketing site that explains the product, highlights the Whop-integrated subscription model, and funnels creators into the Presbo AI platform.

## Key Messaging

- **Community Owners:** Automate professional explainer, lessons, tutorials, and marketing videos without editing software. Unlock visual styles, voice styles, branding, analytics, and more. 
- **Members:** Enjoy free, gated access to downloadable content that keeps communities engaged.

The landing page mirrors Presbo AI’s core value proposition—AI-assisted video generation, credit-based pricing tiers, and Whop-native distribution for creators, coaches, and educators.

## Tech Stack

- [Next.js 15](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/) with custom design tokens based on the Presbo AI brand guide
- [motion](https://motion.dev/) for scroll-aware header animation and marquee motion primitives
- [lucide-react](https://lucide.dev) for iconography

## Brand Guide

### Colors

The Presbo AI brand palette is built around a bold, energetic color system designed to convey innovation and creativity.

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Orange** | `#D13E08` | Primary CTAs, highlights, and brand accent |
| **Deep Charcoal** | `#0F0F0F` | Primary background and text |
| **Light Gray** | `#F5F5F5` | Secondary backgrounds and borders |
| **White** | `#FFFFFF` | Content backgrounds, cards |
| **Text Dark** | `#1A1A1A` | Primary text content |
| **Text Muted** | `#666666` | Secondary text, descriptions |

**Brand Values:**
- The primary orange (`#D13E08`) is energetic and commands attention—perfect for call-to-action buttons and brand highlights
- Deep charcoal provides a professional, modern foundation for immersive video-focused content
- Clean whites and light grays ensure readability and support a content-first design philosophy

### Typography

Presbo AI uses **Inter** as the primary typeface—a geometric sans-serif designed for clarity across all screen sizes.

| Element | Font | Size | Weight | Line Height | Usage |
|---------|------|------|--------|-------------|-------|
| **Display / H1** | Inter | 48–56px | 700 Bold | 1.2 | Hero headline, main page title |
| **Heading 2 / H2** | Inter | 32–40px | 700 Bold | 1.3 | Section headers |
| **Heading 3 / H3** | Inter | 24–28px | 600 SemiBold | 1.4 | Subsection headers |
| **Body** | Inter | 16px | 400 Regular | 1.6 | Primary paragraph text |
| **Body Small** | Inter | 14px | 400 Regular | 1.5 | Secondary text, descriptions |
| **Label** | Inter | 12px | 600 SemiBold | 1.4 | Button labels, badges, tags |
| **Caption** | Inter | 12px | 400 Regular | 1.5 | Fine print, disclaimers |

**Typography Principles:**
- Generous line heights (1.5–1.6) ensure readability for long-form content
- Bold, confident headings (700 weight) establish visual hierarchy
- Consistent 4px baseline grid supports clean vertical rhythm
- Scale follows a 1.25× ratio for harmonic progression across sizes

### Component Styling

- **Buttons:** Primary buttons use `#D13E08` background with white text (16px, 600 weight). Secondary buttons feature outline style with `#D13E08` border.
- **Cards:** White backgrounds (`#FFFFFF`) with subtle shadows for depth; border-radius of 8px
- **Navigation:** Deep charcoal background with Inter 16px regular text; active states highlight with primary orange underline
- **Forms:** Light gray (`#F5F5F5`) input backgrounds, dark text, focus states use primary orange border (2px)
- **Spacing:** 8px baseline grid (8, 16, 24, 32, 40, 48, etc.) ensures consistent padding and margins

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Run the development server**

   ```bash
   pnpm dev
   ```

3. **Build for production**

   ```bash
   pnpm build
   pnpm start
   ```

The app is available at `http://localhost:3000`.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Global layout with theme provider
│   ├── page.tsx          # Landing page entry point
│   └── globals.css       # Tailwind layer + brand tokens
├── components/
│   ├── header.tsx        # Sticky navigation with scroll-aware styling
│   ├── hero-section.tsx  # Tailwind + motion hero content
│   ├── logo.tsx          # Presbo AI wordmark treatment
│   └── motion-primitives/
│       ├── infinite-slider.tsx
│       └── progressive-blur.tsx
└── lib/
    └── utils.ts          # Tailwind helper (cn)
```

## Styling & Customization

The styling system uses Tailwind CSS with custom design tokens defined in `src/app/globals.css` and `tailwind.config.ts`. All components are custom-built for Presbo AI with no external component dependencies.

To customize brand tokens:
- **Color tokens:** Update the CSS variables in `src/app/globals.css`
- **Typography scales:** Adjust sizing, weights, and line heights in `tailwind.config.ts`
- **Spacing & sizing:** Modify the 8px baseline grid values in the Tailwind config

## Customising Content

- Update marketing copy and CTAs in `src/components/hero-section.tsx`.
- Swap or self-host logos inside the `customerLogos` array.
- Replace the DNA loop video background with a local asset if needed.
- Extend pricing and feature narratives in the hero section or add new sections under `src/app/page.tsx`.
