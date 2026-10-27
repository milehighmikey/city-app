# T2 — Hub Landing / Residents

Route: `/residents`

This addition keeps the homepage, root layout, shared components, global styles,
and dependency manifests unchanged. The only existing source edit is the Residents
navigation destination in `src/content/city.ts`.

## Files and reuse

- `src/app/residents/page.tsx`: server-rendered T2 composition and page metadata.
- `src/app/residents/residents.module.css`: route-scoped layout and responsive styles.
- `src/components/hub/hub-primitives.tsx` and `.module.css`: small reusable T2 hero,
  image slot, section heading, and link primitives. No page-builder abstraction.
- `src/content/residents.ts`: typed T2 content, image slots, and references to the
  existing services, news, events, and status records.

Header and Footer continue to come from the root layout. The existing Icon,
TreeMark, ServiceFinder, CSS variables, container, focus styles, and reduced-motion
rules are reused. The finder receives five existing service records; its search
logic and files are unchanged. T2-only descendant styles give it the reference's
three-plus-two mobile arrangement. If that component's internal markup changes,
review the commented finder selectors in the Residents stylesheet.

## Intentional reference differences

- Reuses the established shared header/footer instead of recreating tablet frames,
  device status bars, or the reference's repeated header across screenshot panels.
- Uses existing Main Street and park photos, never the homepage riverfront hero.
- Preserves current news and event records/dates. A T2-only community-center story
  fills the third supporting news slot without changing homepage content.
- Labels the six Pulse categories as sample data, not a live feed. The full-status
  affordance expands a future-feature notice; it does not lead to a broken route.
- Missing photography renders deliberately labeled image slots, not unrelated
  photos or broken image requests. Popular services use existing icons.
- News and event “View All” links use the existing homepage sections. Service,
  program, park, and event details expand in place. No new destination pages,
  integrations, or submission flows are implied.
- Phones stack the ten sections in reference order. Below 550px, supporting news
  moves below the lead for readability. Tablets use two-column news/programs;
  desktops pair services with Pulse, popular services with news, and events with
  the featured event. Four park previews become two columns below 360px.

## Image replacement guide

All paths are configured in `src/content/residents.ts`. Add the missing file under
`public` at the path below, remove its `placeholder: true` flag, and update `alt`
to describe the real photograph. Restart/rebuild to publish changes. There is no
need to edit layout markup, and no automatic request is made for missing files.

Existing assets used now:

| Use | Public path |
| --- | --- |
| Residents hero and lead news | `/images/downtown.png` |
| Parks feature and Riverside preview | `/images/park.png` |

Missing image slots:

| Use | Public path |
| --- | --- |
| Featured community event | `/images/residents/movies-in-the-park.jpg` |
| Council news | `/images/residents/news/city-hall.jpg` |
| Clean-up news | `/images/residents/news/fall-clean-up.jpg` |
| Community center news | `/images/residents/news/community-center.jpg` |
| Housing | `/images/residents/programs/housing.jpg` |
| Roads | `/images/residents/programs/roads.jpg` |
| Public safety | `/images/residents/programs/public-safety.jpg` |
| Careers | `/images/residents/programs/careers.jpg` |
| Volunteers | `/images/residents/programs/volunteer.jpg` |
| Sustainability | `/images/residents/programs/sustainability.jpg` |
| Maps | `/images/residents/programs/maps.jpg` |
| More services | `/images/residents/programs/more-services.jpg` |
| Heritage Grove Park | `/images/residents/parks/heritage-grove.jpg` |
| Maplewood Trails | `/images/residents/parks/maplewood-trails.jpg` |
| Oak Creek Preserve | `/images/residents/parks/oak-creek.jpg` |

Use a wide landscape photo for the movie feature and landscape or square crops
for thumbnails. All real photographs use Next Image with responsive sizes.

## Checks

Use the existing `npm run lint` and `npm run build` scripts. The build includes
TypeScript checks. `node node_modules/typescript/bin/tsc --noEmit` also provides an
explicit type check after Next has generated its route types.

Browser review should cover both `/` and `/residents`, desktop/mobile Residents
navigation, service search (match, no match, reset), disclosures, and horizontal
overflow at phone, tablet, and desktop widths. Recheck the homepage after client
navigation from Residents to detect any CSS leakage.

Verified October 8, 2026:

- Production build: passed, including static generation of `/` and `/residents`.
- Explicit TypeScript `--noEmit` check: passed.
- ESLint: no errors; one pre-existing unused `city` import warning in the untouched
  homepage (`src/app/page.tsx:4`).
- Both desktop and mobile Residents navigation reached `/residents`.
- Resident search: matching result, no-match message, reset to five cards, and
  keyboard-operated service expansion passed.
- Pulse notice, program, park, and featured-event disclosures passed.
- No horizontal overflow at 320, 390, 768, 1024, and 1440px viewport widths.
- No broken loaded images or browser console errors/warnings observed.
- After navigating back, the homepage retained its six services, original grid
  dimensions, heading size, hero text, and working jobs search.
