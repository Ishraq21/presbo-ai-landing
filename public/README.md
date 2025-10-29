# Public Assets Directory

This directory contains all static assets served publicly by the Next.js application. Files in this folder are served at the root path (e.g., `/logo.svg` → `public/logo.svg`).

## Folder Structure

```
public/
├── logos/              # Brand logos and wordmarks
│   ├── presbo-logo.svg
│   ├── presbo-logo-dark.svg
│   ├── presbo-icon.svg
│   └── partner-logos/   # Partner/customer logos
├── assets/             # General static assets
│   ├── backgrounds/
│   ├── illustrations/
│   └── videos/
├── icons/              # Icon sets and iconography
│   ├── social/         # Social media icons
│   └── ui/             # UI-specific icons
└── images/             # Raster images and photos
    ├── screenshots/
    └── testimonials/
```

## Naming Conventions

- **Logos:** Use descriptive names (e.g., `presbo-logo`, `presbo-logo-dark`, `presbo-icon`)
- **Partner Logos:** Store in `logos/partner-logos/` with company name (e.g., `whop-logo.svg`)
- **Icons:** Prefix with category (e.g., `social-twitter.svg`, `ui-menu.svg`)
- **Images:** Use kebab-case with descriptive names (e.g., `hero-background.png`, `testimonial-avatar-john.jpg`)

## Optimization Guidelines

- **SVGs:** Keep SVG files for logos, icons, and illustrations for scalability
- **PNG/JPG:** Compress and optimize for web (use tools like TinyPNG, ImageOptim)
- **WebP:** Consider WebP format for newer image formats when applicable
- **Size:** Keep logo files under 50KB, icons under 20KB

## Usage

Import assets in components:

```tsx
// Static import for type safety
import presboLogo from '@/public/logos/presbo-logo.svg';

// Or reference directly in URLs
<img src="/logos/presbo-logo.svg" alt="Presbo Logo" />
```

## Git Management

All files in this directory should be committed to Git. Use `.gitkeep` files in empty directories to ensure folder structure is preserved.
