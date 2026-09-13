# Casa Vienna — Azure Urban Resort (Next.js)

A staycation website for Casa Vienna at Azure Urban Resort, built with Next.js (App Router) so it deploys straight from GitHub to Vercel with zero config.

## Structure

```
casa-vienna-next/
├── app/
│   ├── layout.js          Root layout — fonts, <Header>/<Footer>, metadata
│   ├── page.js              Home route "/" — assembles all home sections
│   ├── globals.css          All styles (design tokens + components)
│   └── gallery/
│       └── page.js          "/gallery" route — full photo gallery
├── components/
│   ├── Header.js             Sticky nav + mobile menu (client component)
│   ├── Footer.js
│   ├── Hero.js
│   ├── Amenities.js          Amenities section + slideshow
│   ├── Carousel.js           Generic auto-advancing carousel (client component)
│   ├── ReviewsCarousel.js    Guest photo + quote carousel, synced (client component)
│   ├── Reviews.js
│   ├── RoomsTeaser.js        Clickable 1BR / 2BR cards → jump to their sections
│   ├── RoomDetail.js         Reusable room section, used for both 1BR and 2BR
│   ├── GalleryPreview.js     4-tile preview + "View more" → /gallery
│   ├── GalleryGrid.js        Filterable full gallery grid (client component)
│   ├── HowToBook.js
│   └── PlaceholderImage.js   Stand-in for real photography
├── public/
│   ├── images/                Put real photos here
│   └── videos/                 Put any video files here
├── package.json
└── next.config.mjs
```

## What's already wired up

- **Nav**: Home / 1 Bedroom / 2 Bedroom / How to Book — all scroll to sections on the home route (`/#onebedroom`, etc.), with a mobile hamburger menu (`components/Header.js`).
- **Hero**: placeholder block in `components/Hero.js` — swap for a real photo, see below.
- **Amenities slideshow**: auto-advances every 3 seconds, crossfades + slides to the next image (`components/Carousel.js`, used inside `components/Amenities.js`).
- **1 Bedroom / 2 Bedroom teaser cards**: clickable, scroll to their full sections (`components/RoomsTeaser.js` → `#onebedroom` / `#twobedroom`, rendered by `components/RoomDetail.js`).
- **Guest reviews slideshow**: same 3-second auto-slide behavior, guest photo and quote change together (`components/ReviewsCarousel.js`).
- **Gallery preview**: 4 placeholder tiles + "View more" button linking to `/gallery`, which has a full grid with filter tabs (All / Amenities / 1 Bedroom / 2 Bedroom) in `components/GalleryGrid.js`.

## Swapping in real photos

1. Drop image files into `public/images/` (e.g. `public/images/hero.jpg`). Anything in `public/` is served from the site root, so that file is reachable at `/images/hero.jpg`.
2. In the relevant component, replace the `<PlaceholderImage ... />` call with a `next/image`:

   ```jsx
   import Image from "next/image";

   <Image
     src="/images/hero.jpg"
     alt="Casa Vienna living room with city view"
     fill
     style={{ objectFit: "cover" }}
   />
   ```

   Keep it inside the same wrapping element (`.hero-figure`, `.teaser-card`, a `.slide`, etc.) so the existing layout and slideshow logic keep working. For a background/walkthrough video, drop it in `public/videos/` and use a `<video>` tag — see `public/videos/README.md`.

## Changing the slideshow timing

Both `components/Amenities.js` and `components/ReviewsCarousel.js` pass an `interval={3000}` prop (milliseconds) to `<Carousel>`. Change that number to speed up or slow down the auto-slide.

## Running locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploying: GitHub → Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial Casa Vienna site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. **Import into Vercel**
   - Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
   - Select this repository.
   - Vercel auto-detects Next.js — no config needed. Click **Deploy**.

3. Vercel gives you a live URL (e.g. `casa-vienna.vercel.app`). Every push to `main` auto-deploys.

4. **Custom domain** (optional): in the Vercel project settings, go to *Domains*, add your own domain, and follow Vercel's DNS instructions.
