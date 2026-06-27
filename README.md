# 🌿 Verdant — Plant Catalog

A clean, responsive **landing page and catalog** for a plant seller, hosted on
GitHub Pages. Visitors browse the collection here; buying happens on
**Facebook Marketplace**. Everything runs client-side — no server or build step.

**Live site:** <https://rwajanak.github.io>

## How it works

This site is a shopfront *catalog*, not a checkout. There's no payment on the
page. Each plant has an **"Add to list"** button so visitors can keep track of
what they like, and every **"Buy on Facebook Marketplace"** button sends them to
your Marketplace profile to message you and arrange pickup or delivery.

## Features

- **Catalog of 24 plants** across 5 type categories: Houseplants, Succulents &
  Cacti, Outdoor & Garden, Herbs & Edibles, and Flowering
- **Category filtering** so visitors can browse by plant type
- **Saved list** (the "cart") that persists across visits (`localStorage`) — for
  tracking interest only, with no checkout
- **Facebook Marketplace links** throughout (hero, nav, about, footer, list)
- **Graceful image fallbacks** — a broken photo becomes a styled emoji tile
- Fully responsive, accessible, and dependency-free (just one Google Fonts link)

## Files

| File         | Purpose                                          |
| ------------ | ------------------------------------------------ |
| `index.html` | Page structure & content                         |
| `styles.css` | All styling                                      |
| `app.js`     | Product data, categories, filtering, saved list  |
| `verify.sh`  | Curls the live site to confirm it's serving      |

## Customizing

- **⚠️ Set your Marketplace link:** edit `MARKETPLACE_URL` near the top of
  `app.js` — it's the destination for every "Buy on Facebook Marketplace" button.
- **Add / edit plants:** update the `PRODUCTS` array in `app.js`. Each plant needs
  an `id`, `name`, `sci`, `price`, `category`, `img`, `emoji`, `light`, `care`,
  `petSafe`, and `desc`. Use a `category` id that matches `CATEGORIES`.
- **Change categories:** edit the `CATEGORIES` array in `app.js`.
- **Use your own photos:** replace each product's `img` URL. If a photo fails to
  load, the card automatically shows the plant's `emoji` on a green tile.
- **Branding & colors:** edit the `:root` CSS variables in `styles.css`.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
