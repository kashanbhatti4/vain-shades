# vain-shades

**Vain Shades** — Custom Shopify Theme  
Exclusive luxury eyewear brand based in Atlanta, Georgia.  
Statement sunglasses. Bold. Glamorous. Fashion-forward.

---

## 🛍️ Store Overview

- **Price Range:** $180 – $360
- **Platform:** Shopify (Dawn theme base)
- **Available:** Online + select Villain retail locations, Atlanta

---

## 🎨 Design System

| Token | Value | Use |
|-------|-------|-----|
| `--vs-bg` | `#E9EEF3` | Main background |
| `--vs-heading` | `#0C1A2B` | All headings (deep navy-black) |
| `--vs-body` | `#475465` | Body text |
| `--vs-accent` | `#BC3F19` | CTAs, borders, highlights (ONLY accent) |
| `--vs-white` | `#FFFFFF` | Pure white |
| `--vs-surface` | `#D8DFE8` | Cards, subtle section backgrounds |

### Typography
| Role | Font |
|------|------|
| Accent / Decorative | **Momo Signature** (custom TTF in `assets/`) |
| Headings & Body | **Lato** (Google Fonts — 300, 400, 700) |

---

## 🗂️ File Architecture

```
assets/
  vain-custom.css           ← ALL brand CSS (color tokens, typography, components)
  vain-custom.js            ← ALL custom JS (cart drawer, animations, scroll effects)
  MomoSignature-Regular.ttf ← Custom decorative font
  logo.png                  ← Brand logo

snippets/
  vain-product-card.liquid  ← Custom product card layout

layout/
  theme.liquid              ← Links vain-custom.css and vain-custom.js

templates/
  index.json                ← Home page — 7 sections configured

sections/                   ← Dawn sections (unmodified — styled via vain-custom.css)
config/
locales/
```

---

## 🏠 Home Page Sections (7)

1. **Hero Banner** — Full-screen image, editorial headline, Shop Now CTA
2. **Featured Products** — 3 hero products from *Feature Products* collection
3. **Brand Statement** — Bold full-width quote with accent styling
4. **Collection Showcase** — Editorial card grid (Day Dreamer, Soho, Super Cats)
5. **About Teaser** — Brand intro text + "Our Story" link
6. **The Vain Edit** — Editorial multicolumn style guide
7. **Newsletter Signup** — "Join the Inner Circle" email capture

---

## 📄 Pages

| Page | Sections |
|------|----------|
| **Home** | 7 sections (index.json) |
| **Shop** | Collection grid + filter/sort bar |
| **Product** | Gallery, variants, Add to Cart |
| **About Us** | Brand story, mission, editorial photo, testimonials, store locations |
| **Contact** | Page header, contact form, social links |
| **Cart** | Slide-out drawer (animated) |
| **404** | On-brand error page |

---

## 🚀 Deploy to Shopify

### Option 1: Shopify Admin Upload
1. Zip the entire repo folder
2. Go to **Shopify Admin → Online Store → Themes**
3. Click **Add theme → Upload zip file**
4. Publish the theme

### Option 2: Shopify CLI
```bash
npm install -g @shopify/cli @shopify/theme
shopify theme push --store=xgtv0w-tn.myshopify.com
```

---

## ⚙️ CSS Architecture

All brand styling lives in `assets/vain-custom.css`. It:
- Defines CSS custom properties (`--vs-*`) as the single source of truth
- Overrides Dawn's default variables at the root level
- Is mobile-first — small screen first, scaled up via `@media (min-width: ...)`
- Uses **zero inline styles** — all styling via classes

---

## 🏗️ Build Order Completed

| Step | Task | Status |
|------|------|--------|
| 1 | Folder cleanup | ✅ |
| 2 | Asset upload (logo, font) | ✅ |
| 3 | `vain-custom.css` — full design system | ✅ |
| 4 | `vain-custom.js` — animations & interactions | ✅ |
| 5 | `vain-product-card.liquid` snippet | ✅ |
| 6 | `theme.liquid` — link CSS & JS | ✅ |
| 7 | `templates/index.json` — 7 home sections | ✅ |
| 8 | README | ✅ |
| 9 | Git push | ✅ |

---

*Built with ❤️ for Vain Shades, Atlanta GA*
