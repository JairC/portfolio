# UI kit — portfolio site

Recreation of the two surfaces the source design defines:

- **HomeScreen.jsx** — statement hero, featured project plate, four image-right index rows, contact band, footer.
- **CaseStudyScreen.jsx** — case-study title block with meta grid, hero plate, four inline chapter blocks, single-stat results band, next-project band, contact band, footer.

Both take `density="desktop" | "mobile"` (1440 and 390 in the source design) and compose the components in `components/` — nothing is re-implemented here.

`index.html` is a standalone click-through of both screens at both densities; it inlines the same markup so it opens without the generated bundle.

Placeholder data (dashed TBD slots) is intentional: role, duration, team, chapter headings, body copy and the metrics for projects 03–05 are still unwritten in the source design.
