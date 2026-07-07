# AIB — African Insurance Brokers Website

Corporate website for **AIB (African Insurance Brokers Limited)** — a specialist insurance broker providing risk advisory, market placement, and claims advocacy across energy, marine, aviation, and engineering infrastructure sectors.

**Developer:** Alfred Ayilara Pur
**Repository:** [github.com/AlfredPur01/insurance](https://github.com/AlfredPur01/insurance)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) (App Router, React 19) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Email | [Resend](https://resend.com/) + [React Email](https://react.email/) |
| Package Manager | [npm](https://npmjs.com/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Home — hero, credentials, sector expertise, market execution, CTA |
| `/services` | Services — risk advisory, market execution, claims advocacy |
| `/industries` | Industries — overview of all four sectors |
| `/industries/energy` | Energy sector detail page |
| `/industries/marine` | Marine sector detail page |
| `/industries/aviation` | Aviation sector detail page |
| `/industries/engineering-infrastructure` | Engineering & Infrastructure detail page |
| `/claims-advocacy` | Claims advocacy service page |
| `/about` | About AIB |
| `/contact` | Contact & consultation request form |

---

## Project Structure

```
insurance/
├── app/
│   ├── layout.tsx               # Root layout (Navbar + Footer + JSON-LD)
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Tailwind v4 + brand theme
│   ├── sitemap.ts               # Auto-generated sitemap.xml
│   ├── robots.ts                # robots.txt
│   ├── actions/
│   │   ├── contact.ts           # Server Action — contact form (Resend)
│   │   └── enquiry.ts           # Server Action — industry enquiry form (Resend)
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── industries/
│   │   ├── page.tsx
│   │   ├── energy/page.tsx
│   │   ├── marine/page.tsx
│   │   ├── aviation/page.tsx
│   │   └── engineering-infrastructure/page.tsx
│   ├── claims-advocacy/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx           # Sticky nav, scroll-aware, industries dropdown
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   └── SectionWrapper.tsx
│   ├── sections/
│   │   ├── PageHero.tsx         # Full-viewport hero with background image
│   │   ├── CTASection.tsx
│   │   ├── IndustryContactForm.tsx
│   │   ├── HomeHero.tsx
│   │   ├── WorldMap.tsx
│   │   ├── ContactForm.tsx
│   │   └── FaqAccordion.tsx
│   └── animations/
│       ├── FadeIn.tsx           # Scroll-triggered fade-up (Framer Motion)
│       └── CountUp.tsx          # Animated number counter
├── emails/
│   ├── notification.tsx         # Email to AIB team on new enquiry
│   └── confirmation.tsx         # Confirmation email to visitor
├── lib/
│   └── resend.ts                # Resend client singleton
├── public/
│   └── images/                  # All site images and logo
├── types/
│   └── index.ts
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 20+

### Install & run locally

```bash
git clone https://github.com/AlfredPur01/insurance.git
cd insurance

npm install

# Create a local env file
cp .env.example .env.local
# Add your RESEND_API_KEY to .env.local

npm run dev
```

The app runs at `http://localhost:3000`.

> Without a `RESEND_API_KEY`, the contact forms will return an error message prompting the user to email directly — the rest of the site works fully without it.

---

## Email (Resend)

Contact form submissions are delivered by email via [Resend](https://resend.com/).

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key |

**On form submission:**
1. A notification email is sent to `info@aibltd.insure` with all form fields.
2. A branded confirmation email is sent to the visitor.

### Setup (production)

1. Create a [Resend](https://resend.com/) account and obtain an API key.
2. Add `RESEND_API_KEY` to your Vercel environment variables (dashboard → Settings → Environment Variables).
3. Once your domain (`aibltd.insure`) is verified in Resend, update the `from` address in `app/actions/contact.ts` and `app/actions/enquiry.ts` from `onboarding@resend.dev` to `website@aibltd.insure` (or similar).

---

## Build

```bash
npm run build
```

---

## Deployment (Vercel)

Push to `main` — Vercel redeploys automatically.

Add the `RESEND_API_KEY` environment variable in the Vercel dashboard before deploying.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes (for forms) | Resend API key for email delivery |

---

## Contact

**AIB — African Insurance Brokers Limited**
- **Head Office:** No 27a Babatunde Jose, Off Adetokunbo Ademola, Victoria Island, Lagos, Nigeria
- **Branch Office:** 55/57 Apara Road, GRA Phase II, Port Harcourt, Rivers State, Nigeria
- **Phone:** +234 9131036089 / +234 8087281548
- **Email:** info@aibltd.insure
