# 🌿 Verdant — Plant Storefront

A clean, responsive storefront for selling houseplants, hosted on GitHub Pages.
Everything runs client-side — no server or build step required.

**Live site:** <https://rwajanak.github.io>

## Features

- **Product catalog** with category filtering (Easy-care, Statement, Pet-friendly)
- **Shopping cart** that persists across visits (`localStorage`)
- **Free-shipping progress** ("add $X more for free shipping")
- **Demo checkout** that builds an order email via the visitor's mail client (no payment processing)
- **Graceful image fallbacks** — broken photos become a styled emoji tile
- Fully responsive, accessible, and dependency-free (just one Google Fonts link)

## Files

| File         | Purpose                                       |
| ------------ | --------------------------------------------- |
| `index.html` | Page structure & content                      |
| `styles.css` | All styling                                   |
| `app.js`     | Product data, cart logic, filtering, checkout |

## Customizing

- **Add / edit products:** update the `PRODUCTS` array at the top of `app.js`.
  Each product needs an `id`, `name`, `price`, `category`, `img`, `emoji`, and `desc`.
- **Change categories:** edit the `CATEGORIES` array in `app.js`.
- **Shipping & contact:** tweak `FREE_SHIP_THRESHOLD`, `SHIPPING_FEE`, and `STORE_EMAIL` in `app.js`.
- **Branding & colors:** edit the `:root` CSS variables in `styles.css`.

## Going further (real payments)

This is a demo store — checkout opens a pre-filled email rather than charging a card.
To take real payments on a static site, drop in a hosted checkout such as
[Stripe Payment Links](https://stripe.com/payments/payment-links),
[Snipcart](https://snipcart.com/), or [Gumroad](https://gumroad.com/) buttons.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
