# KMS Home Appliances — Coimbatore

Marketing site for **KMS Home Appliances · Service & Maintenance** — doorstep AC, washing
machine and refrigerator repair across **Coimbatore city**.

Every call-to-action opens WhatsApp on **+91 95444 00301** with a message pre-filled for the
service the visitor picked.

## Stack

- Next.js 16 (App Router, Turbopack) + React 19
- TypeScript
- Tailwind CSS v4
- Deployed on Vercel

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm start       # serve the production build
```

## Editing the content

Almost everything a non-developer would want to change lives in one file:
[`src/lib/site.ts`](src/lib/site.ts) — phone number, email, hours, services, prices, coverage
areas, brands, process steps, reviews and FAQs.

Changing `site.phoneDisplay`, `site.phoneHref` and `site.whatsappNumber` updates the number
everywhere on the site, including all WhatsApp deep links and the structured data.

## Sections

Hero · brand strip · services · promise · transparent pricing · how it works · coverage areas ·
reviews · FAQ · CTA · contact form · footer, plus a floating WhatsApp button and a sticky mobile
call/WhatsApp bar.

## Notes

- The contact form stores nothing. It builds a WhatsApp message from the fields and opens
  `wa.me` — no backend, no database, no third-party form service.
- SEO: per-page metadata, Open Graph, `robots.txt`, `sitemap.xml` and
  `HomeAndConstructionBusiness` JSON-LD scoped to Coimbatore.
- Update `site.url` in `src/lib/site.ts` once the final domain is live so canonical URLs and the
  sitemap point at it.
