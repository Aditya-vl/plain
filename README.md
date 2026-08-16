# Pithoragarh Backpackers \u2014 Clone

A from-scratch recreation of pithoragarhbackpackers.com, built with **React + Vite (JSX)** and **plain CSS**. All copy, gallery placeholders and blog posts are original content written for this clone \u2014 no text or images were copied from the source site, only its structure and functionality were reproduced.

## Tech stack

- React 18 + React Router 6 (JSX components)
- Vite (dev server & bundler)
- Hand-written CSS with a small design-token system (no framework)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## What's included

- **Home** \u2014 hero with compact trip-enquiry form, full booking-enquiry band, "Top Picks" trek cards, image gallery with lightbox, "Why Choose Us", JustDial rating callout, core values, blog preview
- **Treks & Tours** (`/treks-tours`) \u2014 full listing with working category filter tabs (All / Trekking / Pilgrimage Tours / Cultural & Scenic Tours) and a booking form
- **Trek detail pages** (`/treks-tours/:slug`) \u2014 dynamic route driven by `src/data/treks.js`; treks without full detail content fall back to an "ask for details" enquiry screen, matching the source site's behaviour
- **Services** (`/services`)
- **Our Team** (`/our-team`)
- **Contacts** (`/contact`) \u2014 contact details, map placeholder, full enquiry form
- **Blog** (`/blog`) + individual post pages (`/blog/:slug`)
- Privacy Policy / Terms pages, custom 404
- Sticky header with mobile hamburger menu, footer sitemap + newsletter form, floating WhatsApp button

## Editing content

Everything content-related lives in `src/data/`:

- `treks.js` \u2014 every trek/tour, its stats, description and highlights
- `blog.js` \u2014 blog posts
- `site.js` \u2014 services, "why choose us", core values, team bios, gallery captions

Update these files and the whole site (cards, filters, detail pages, footer links) updates automatically.

## Images

The gallery and trek cards use CSS-gradient placeholders (with tone names like `dusk`, `forest`, `meadow`, `glacier`) instead of real photography, since the original site's photos are copyrighted. Swap in real images by replacing the placeholder `<div>`/`<svg>` markup in `TrekCard.jsx` and `Gallery.jsx` with `<img>` tags pointing at your own assets in `public/`.

## Design notes

Palette and type are original to this clone, inspired by the Kumaon "cold desert" landscape: dusk-slate sky, sand-stone ground, oxide-rock red, marigold gold and juniper green, set in Big Shoulders Display (headlines), Work Sans (body) and IBM Plex Mono (stats/labels). The recurring ridge-line divider and dashed trail-route graphic are the site's signature visual motif, tying back to the trekking-map theme throughout.
