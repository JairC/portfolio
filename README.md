# Portfolio

Next.js (App Router) implementation of the "Editorial Precision" portfolio design — Fraunces + Space Mono, verdigris/red accents, sharp corners, index-first project listing. Built from the Claude Design handoff in `project/` (see `chats/` for the original design conversation).

## Stack

- Next.js 16 (App Router), React 18
- Plain CSS Modules — no CSS framework. Design tokens live in `styles/tokens/` (colors, type, spacing) and are composed in `styles/globals.css`.
- Fonts are loaded from Google Fonts (`styles/tokens/fonts.css`); swap in local `@font-face` rules if you get licensed font files.

## Structure

```
app/
  page.jsx                 Home
  work/cashi-rebrand/      Cashi case study
components/
  core/                    Button, Eyebrow, Rule, ImagePlate, MetricStat, PlaceholderSlot
  navigation/               Navbar, Footer
  sections/                 HeroStatement, ContactBand, ChapterBlock, ResultsBand, NextProjectBand, MetaGrid
  listings/                  FeaturedProject, ProjectListItem
styles/                     globals.css + design tokens
project/, chats/            original Claude Design handoff bundle (reference only)
```

Every component is CSS-responsive (mobile-first, `768px` breakpoint) rather than switching on a `density` prop like the design prototype did — this is a real site, not a click-through mockup.

## Placeholders

Per your call, dashed `TBD` boxes are left in place wherever the source design didn't have real content yet:

- Hero meta: `BASE`, `SINCE`
- Case study meta: `ROLE`, `DURATION`, `TEAM`
- Case study chapter headings and body copy (all 4 chapters)
- Case study results caption
- Projects 03–05 (`ircode_admin_panel`, `ircode_progressive_onboarding`, `fil`) — no case studies built yet, so their listing items don't link anywhere
- Footer contact info (`hi@yourname.com`, phone), copyright name, and the `papi(r)` wordmark (no real logo/name in the source)
- `DOWNLOAD CV` button has no file wired up yet

Send me the real values whenever you're ready and I'll fill them in.

## Develop

```
npm install
npm run dev
```
