# Portfolio 2026 — Design System

An editorial-precision design system extracted from the **Portfolio 2026** website mockups in this project (`Portfolio 2026.dc.html`). It describes a single-person portfolio site whose job is to survive a recruiter skim: an index-first layout where typography is the interface and one number per project carries the argument.

## Source

- `Portfolio 2026.dc.html` — the working mockups. Screens **5a** (home, desktop 1440), **5b** (home, mobile 390), **1f** (case study, desktop), **1g** (case study, mobile).
- Read-only Figma snapshot referenced during the build: file key `J3KHsKqvnrWKyn3iSaIlE6`, masters `25 — Home Template` (node 1071:2810) and `27 — Case Study Template`. The reader may not have access; recorded for provenance.
- Every value in `tokens/` was lifted from those mockups, not rounded or normalised. If a padding is 9px in the source, it is 9px here.

The brand name in the mockups is the wordmark `papi(r)`; personal details (name, city, phone, metrics for three of five projects) are still placeholders.

## Content fundamentals

- **Voice**: first-person-implied but never chatty. Statements, not slogans: "Strategy first. Then design that works." Full stops inside the hero are deliberate.
- **Project titles are snake_case identifiers** — `cashi_bill_payments`, `ircode_progressive_onboarding`, `fil`. They read like repo names, which is the point: the work is treated as artifacts, not campaigns.
- **Descriptions are one sentence, outcome-first**: "A full IA rebuild that cut support tickets in half." No adjectives about the process, no "I was responsible for".
- **Metadata is uppercase mono, terse, colon-free**: ROLE / BASE / SINCE / SCOPE, values like `PRODUCT DESIGN / UX`, `IDENTITY, SYSTEM, APP`.
- **Counts are spelled as code**: `PROJECTS(05)`, `FEATURED — 01`, `02 — BRAND · PRODUCT`. Middots separate category pairs; em dashes separate index from label.
- **Numbers are the argument.** Each project carries exactly one metric (`81.8% → 85.1%`, `700K+`) with a mono caption naming what it measures. Never two stats side by side.
- **Placeholders are honest**: unwritten content shows as a dashed box saying what belongs there (`ONE-LINE DESCRIPTION — TBD`, `BODY COPY PLACEHOLDER — 40 to 60 words`). Never lorem ipsum.
- **No emoji, ever.** No exclamation marks. Arrows (→, ↓) are the only decorative glyphs.
- **CTAs are uppercase mono with a trailing arrow**: `CONTACT →`, `DOWNLOAD CV ↓`, `GET IN TOUCH →`.

## Visual foundations

**Palette.** Warm greys, not neutral: paper `#EDECEA`, page `#DDDBD7`, image plate `#D8D6D2`, ink `#0E0E0C`. Two accents only — verdigris `#4A7668` for every statistic, red `#C0392B` for direction (arrows, active chapter number, the featured eyebrow, link hover). Verdigris tint `#CDE0DB` backs status chips. Nothing else is coloured; a third accent would break the system.

**Type.** Two families. **Fraunces** at weight 300 with optical sizing for everything display and body-serif; italic 400 is the only emphasis and appears at most once per headline. **Space Mono** 400/700 for all UI, labels, metadata and footers. Display tracking is negative (-0.03em at 96px, -0.025em for titles, -0.02em for stats); mono tracking is positive and grows as size shrinks (0.008em UI → 0.08em 9px eyebrows). Sizes are a fixed ladder: 96 / 72 / 56 / 44 / 40 / 38 / 32 / 28 display, 22 / 19 / 17 serif body, 13 / 12 / 11 / 10 / 9 mono.

**Layout.** 80px gutters at 1440, 24px at 390. Navbar 82px with a hairline beneath. Hero is a full-width statement, not a split. The project index is one featured plate (440px tall) followed by rows separated by 1px hairlines — text left, 360×230 image **always** right, 40px vertical padding, no rule after the last row. Case studies use an inline 120px chapter rail with a 100px gap and a 760px measure; the rail never becomes sticky. Mobile collapses everything to one column and gives every project the featured treatment (220px plate) so hierarchy comes from order, not from chrome.

**Corners, borders, shadows.** Radius is 0 everywhere — `--radius: 0px` exists so nobody is tempted. Cards do not exist as objects: there is no fill, no border, no shadow around a project. Separation comes from hairlines and whitespace alone. The only shadow in the system is the 1px `0 1px 0 rgba(14,14,12,.14)` under a mockup frame, not on content. Buttons use `box-shadow: inset 0 0 0 1px` rather than `border` so they do not shift layout on hover.

**Backgrounds and imagery.** Flat colour only — no gradients, no patterns, no textures, no blur, no transparency beyond the review-board scrims. Images sit in flat grey plates, full-bleed within their column, uncropped by radius. Placeholder plates carry a small mono label naming what goes there. Imagery is expected to be cool-toned and calm; nothing sits on top of an image except the category chip (paper-filled, top-left, 24px inset).

**States.** Links and text go red on hover (`--link-hover`). The primary button flips ink → red; the outline button fills ink and inverts its label. Whole clickable bands (next project) shade from paper to `#E4E2DF`. Listing rows drop to 90% opacity. No press states beyond that, no transforms, no scale, no lift.

**Motion.** Effectively none: 120ms linear colour transitions on interactive elements, nothing else. No entrance animation, no parallax, no scroll effects — the design reads as printed matter.

## Iconography

The source design contains **no icon set, no icon font and no SVG assets**. Its entire iconographic vocabulary is:

- Unicode arrows: `→` (forward, in red) and `↓` (download).
- `·` middots as separators inside category labels.
- A 6px verdigris CSS dot inside the status chip.

Do not introduce Lucide, Heroicons or any icon library — an icon in this design would be the loudest thing on the page. If a future surface genuinely needs one, add it as an explicit intentional addition and document it here.

**No logo was supplied.** The wordmark is the string `papi(r)` set in Space Mono 700 at 13px (12px mobile), lowercase, parentheses kept. Never draw a mark.

## Index

- `styles.css` — the entry point; imports everything below.
- `tokens/` — `fonts.css` (Google Fonts import for Fraunces + Space Mono), `colors.css`, `typography.css`, `spacing.css`, `semantic.css` (aliases: `--text-*`, `--surface-*`, `--border-*`, `--button-*`).
- `guidelines/` — 16 specimen cards: Colors (ink, paper, accents, lines), Type (display, italic, headings, serif body, mono, stats), Spacing (gutters, scale, index rhythm), Brand (wordmark, placeholders, states).
- `components/core/` — Button, Eyebrow, CategoryChip, MetricStat, PlaceholderSlot, Rule, ImagePlate.
- `components/navigation/` — Navbar, Footer.
- `components/listings/` — FeaturedProject, ProjectRow.
- `components/sections/` — HeroStatement, ChapterBlock, ResultsBand, NextProjectBand, ContactBand, MetaGrid.
- `ui_kits/portfolio/` — HomeScreen.jsx, CaseStudyScreen.jsx and a standalone `index.html` click-through (home ↔ case study, 1440 ↔ 390).
- `SKILL.md` — Agent Skills wrapper.

## Intentional additions

- **PlaceholderSlot** — the dashed TBD boxes appear throughout the mockups as ad-hoc markup; promoted to a component because every unfinished field uses them.
- **Rule** — the 1px divider, likewise inlined everywhere in the source.

Nothing else was invented: there is no Toast, Modal, Tabs, Input or Avatar in this system because the source design has no forms and no application UI.

## Caveats

- **Fonts are loaded from Google Fonts**, not from vendor binaries — none were supplied. Both families are genuinely Google-hosted, so this is not a substitution, but swap `tokens/fonts.css` for local `@font-face` rules if you need offline or self-hosted builds.
- **Component cards render static specimens** against the real tokens rather than mounting the generated bundle, so they display correctly before the bundle exists.
- **Placeholder content is preserved on purpose**: role, base, years, duration, team, three chapter headings, body copy and metrics for projects 03–05 are still unwritten in the source.
