# Project Notes

- Webinar date, time, and prices (regular strikethrough + offer price) must be defined only in `src/lib/webinar.ts` and read from there on every page (landing, reserve card, FAQ, thank-you). Why: the user changes the schedule often and expects one edit to update all pages including the thank-you page.
- Meta pixel ID 1965971204188807 and GTM container GTM-K6PC2BLC are loaded site-wide in `src/routes/__root.tsx`; do not add the snippets again per page or events double-count.
- Checkout CTA redirects to `https://learn.coachshwetagupta.com/web/checkout/69fd9742118ce03dbe0a5d48`; the external checkout must be configured to send buyers back to `/thank-you`.
- WhatsApp community link on thank-you page: `https://chat.whatsapp.com/LgykPAzICLw8BPJdu3E0Zu`. Footer support WhatsApp: `https://wa.me/917738633354?text=I%20have%20paid%20for%20Claude%20but%20not%20able%20to%20join%20the%20group`.
- The user self-hosts a copy of this codebase outside Lovable (GitHub → Kloudbean). All images (coach photo, recommendations, favicon) must be real files imported through Vite from `src/assets/` / `public/`, never Lovable CDN `.asset.json` pointers or `/__l5e/...` URLs — those only resolve on Lovable domains and show as broken images on the user's host. Why: the repo must be self-contained to build and serve correctly off Lovable.
