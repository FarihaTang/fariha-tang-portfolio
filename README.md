# Fariha Tang — Frontend Engineer Portfolio

Personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

🔗 **Live site:** _coming soon_

---

## Overview

A responsive, single-page portfolio designed for UK fintech job applications. Features 3D card interactions, fluid gradient animations, and a clean light aesthetic.

## Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS
- **Fonts** — Plus Jakarta Sans, JetBrains Mono
- **Deployment** — Vercel _(coming soon)_

## Features

- 3D tilt effect on project cards (mouse-tracking `rotateX/Y`)
- Fluid gradient blobs as background accents
- Marquee tech stack strip
- Scroll-triggered navbar background
- Fully responsive, mobile-friendly layout
- Gradient text and buttons via inline styles (cross-project safe)

## Sections

| Section    | Content                                                           |
| ---------- | ----------------------------------------------------------------- |
| Hero       | Introduction, availability badge, target companies, CTA           |
| Projects   | Finance Dashboard · React Component Library · Mini Full-Stack App |
| Experience | China Minsheng Bank · Airdoc Technology                           |
| Contact    | Email, GitHub, LinkedIn, quick facts panel                        |

## Getting Started

```bash
git clone https://github.com/FarihaTang/fariha-tang-portfolio.git
cd fariha-tang-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout and metadata
│   ├── page.tsx         # Page entry, assembles all sections
│   └── globals.css      # Global styles, fonts, animation utilities
├── components/
│   ├── Nav.tsx          # Scroll-aware responsive navbar
│   ├── Hero.tsx         # Hero section with marquee strip
│   ├── Projects.tsx     # 3D tilt project cards
│   ├── Experience.tsx   # Work history
│   └── Contact.tsx      # Contact section and footer
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Related Projects

These projects are featured in the portfolio and are being built in parallel:

| Project                 | Repo                                                                             | Stack                           |
| ----------------------- | -------------------------------------------------------------------------------- | ------------------------------- |
| Finance Dashboard       | _coming soon_                                                                    | Next.js · TypeScript · Recharts |
| React Component Library | [react-component-library](https://github.com/FarihaTang/react-component-library) | React · TypeScript · Storybook  |
| Mini Full-Stack App     | _coming soon_                                                                    | Next.js · Supabase · TypeScript |

## License

MIT
