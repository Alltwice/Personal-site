# Design QA — Showcase + Detail refactor

## Comparison target

- Source visual truth: `C:\Users\31482\Desktop\首页参考图.png`
- Desktop implementation screenshot: `C:\Users\31482\.codex\visualizations\2026\07\11\019f4fc3-b96c-71e2-893b-bd0686cb2a42\home-desktop-1918x997.png`
- Mobile implementation screenshot: `C:\Users\31482\.codex\visualizations\2026\07\11\019f4fc3-b96c-71e2-893b-bd0686cb2a42\home-mobile-top-390x844.png`
- Desktop viewport/state: 1918 × 997, `/`, top of page, current navigation selected.
- Mobile viewport/state: 390 × 844, `/`, top of page, navigation closed.

## Full-view comparison evidence

The source and desktop implementation were opened together at the same 1918 × 997 viewport. Both use a light fixed top navigation, dark full-height canvas, left profile card, central information stage, right-aligned Rei line-art image, and bottom scroll prompt. The implementation intentionally replaces the mock's oversized time-only headline with the requested hierarchy of title, introduction, live time, and two information panels while retaining the same asymmetric visual weight.

## Focused comparison evidence

- Navigation: the implementation preserves the wide light bar, four evenly distributed destinations, strong black type, rounded outer corners, and a dark active state.
- Main composition: the title and time occupy the source's central information zone without colliding with the transparent portrait; the profile panel remains anchored at lower left.
- Image: the supplied RGBA `Rei.png` is rendered through Astro's image pipeline with `object-fit: contain`; desktop placement preserves its original proportions and right-edge crop.
- Mobile: a dedicated 390 × 844 capture confirms the requested order of title → portrait → profile panel, with no horizontal overflow.

## Required fidelity surfaces

- Fonts and typography: system sans and Cascadia-compatible mono fallbacks create the source's geometric/technical hierarchy; display text, labels, time, and metadata remain readable at all tested widths.
- Spacing and layout rhythm: desktop matches the source's three-zone asymmetry; Detail sections use a consistent index/header/content rhythm. Showcase height equals or exceeds the viewport at 1918, 1440, 980, 390, and 320 widths.
- Colors and tokens: black, off-white, graphite gray, and restrained cool blue map to the requested palette with sufficient text contrast.
- Image quality and asset fidelity: the supplied transparent PNG is used directly and optimized to WebP variants by Astro. No replacement illustration, handcrafted SVG, CSS drawing, gradient, or placeholder image is used.
- Copy and content: all requested homepage Detail topics are present; post/project cards are populated from the unchanged data modules, and personal/contact values are clearly presented as examples.

## Interaction and responsive checks

- Verified `/`, `/blog`, `/projects`, `/about`, one blog slug, and one project slug in the in-app browser.
- Verified mobile menu open/close state, `aria-expanded`, Escape close behavior, active navigation, blog `?sort=views`, and per-second clock updates.
- Verified 1918 × 997, 1440 × 900, 980 × 900, 390 × 844, and 320 × 844.
- At 320px, document scroll width equals viewport width; at the other tested sizes content remains within the client width.
- Browser console: no warnings or errors.

## Comparison history

1. Initial mobile capture found the portrait outside the visible crop because the source PNG contains a large transparent left region. Classified P1 because the requested mobile visual was absent.
2. The mobile figure canvas was repositioned while retaining `object-fit: contain`; the follow-up 390 × 844 and 320 × 844 captures show the complete portrait after the title and before the profile card. The P1 is resolved.

## Findings

- No actionable P0, P1, or P2 issues remain.
- P3: the implementation profile card is more compact than the sketch. This is acceptable because it prevents the real title/time content from colliding at common laptop heights.

## Implementation checklist

- [x] Real-route TopNav and accessible mobile menu
- [x] Showcase + Detail on all four primary routes
- [x] Existing data and slug routes preserved
- [x] Responsive portrait placement and zero horizontal overflow
- [x] Browser interaction, console, build, and visual comparison checks

final result: passed
