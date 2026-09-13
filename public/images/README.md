# /public/images

Drop real photos here (hero shot, amenities, 1BR/2BR, gallery, guest photos).

Anything in `public/` is served from the site root, so `public/images/hero.jpg`
is reachable at `/images/hero.jpg`.

To swap a placeholder for a real photo, open the relevant component
(e.g. `components/Hero.js`) and replace the `<PlaceholderImage ... />` call
with a `next/image`:

```jsx
import Image from "next/image";

<Image
  src="/images/hero.jpg"
  alt="Casa Vienna living room with city view"
  fill
  style={{ objectFit: "cover" }}
/>
```

See the root `README.md` for the full swap-in walkthrough.
