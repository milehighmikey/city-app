# Brookhaven municipal foundation

A fictional Illinois municipal homepage built with Next.js App Router, TypeScript, and CSS Modules. No additional dependencies were installed.

## Run

- `npm run dev` — development server at localhost:3000
- `npm run lint` — ESLint
- `npm run build` — production build and TypeScript checks
- `npm start` — serve the production build

If the Windows npm launcher cannot access the user profile, equivalent local commands are `node node_modules/next/dist/bin/next dev`, `node node_modules/eslint/bin/eslint.js`, and `node node_modules/next/dist/bin/next build`.

## Structure

- `src/content/city.ts`: municipality identity, navigation, typed service records, news, events, and illustrative service status.
- `src/app/globals.css`: shared colors, typography, container, focus, and reduced-motion rules.
- `src/components/site-shell.*`: shared server-rendered brand, navigation, footer, and native mobile disclosure.
- `src/components/icon.tsx`: dependency-free SVG icon vocabulary and tree mark.
- `src/components/service-finder.*`: the only client component; local keyword search, empty state, reset, and expandable service guidance.
- `src/app/page.*`: server-rendered homepage and responsive section styling.
- `public/images`: original generated imagery, served through Next Image.

## Behavior and scope

Navigation leads to real homepage sections. Native details/summary elements provide keyboard-operable service guidance, stories, event details, park information, and privacy/accessibility notes without additional JavaScript. Search supports titles, descriptions, and common service synonyms. There are no placeholder destination routes.

The homepage is the complete scope of this pass. Payments, reporting, permit submissions, official records, and registrations are not connected. All municipal records, addresses, events, and service conditions are fictional; the city status panel is labeled sample data. No weather or live data is fabricated. There is no analytics, database, CMS, authentication, or external font dependency.

To reuse this foundation, update city configuration, content records, CSS tokens, metadata, imagery, and remaining editorial homepage copy. A future content adapter can replace local records without changing the service finder contract. Add real department/service routes as they are implemented and update navigation accordingly. This is a single-municipality foundation, not a multi-tenant platform.

## Accessibility and verification

Includes a skip link, semantic landmarks, labeled search, live result announcements, native disclosures, visible focus styles, image alternative text, and reduced-motion handling. CSS covers narrow phones, tablets, and desktop. Re-audit accessibility when real content and transaction flows are added.

Production build and lint were checked. Browser verification includes search match/empty/reset states, service disclosures, mobile navigation, image loading, and responsive overflow checks. This does not constitute a full WCAG certification or production service integration audit.

## Imagery

Created with the built-in image generation tool and saved locally. The supplied reference screenshots are visual inspiration only; no screenshot UI is embedded into the site. Exact generation prompts are recorded in `public/images/PROVENANCE.md`.
