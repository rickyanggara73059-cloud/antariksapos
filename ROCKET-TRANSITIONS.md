# Rocket parallax transitions

## Asset
- Public file: public/images/decorations/orbital-rocket.png
- Source: original AI-generated cinematic 3D rocket illustration created for this project with the built-in imagegen tool; not a photograph or an application screenshot.
- Original generated image: 1254 x 1254 PNG, retained at the generation source location.
- Web copy: 384 x 384 transparent PNG, 75,174 bytes. Alpha verified (corner 0, central body 253); optimized copy visually inspected.
- No brand logos or text in the rocket artwork. Existing application screenshots remain unchanged.

## Implementation
RocketTransitions is mounted once inside the existing main element. Three absolutely positioned bands are anchored to #galeri, #mulai and .closing. Bands overlap existing section padding and do not occupy document flow. Cyan/gold engine trails and two sparse particle layers use the existing cosmic palette.

A passive scroll listener requests at most one animation frame at a time. Cached boundary coordinates map viewport scroll progress directly to transform and opacity, in both scroll directions. There is no continuous animation loop, scroll interception or React state update per scroll frame. ResizeObserver and font readiness recalculate boundary positions after layout changes. All observers, event listeners and pending frames are cleaned up.

Mobile uses smaller rockets, shorter travel and fewer decorative layers. Reduced-motion changes are observed live; rockets become static, the stars stop moving and the trail is shortened. All decoration is aria-hidden and pointer-events:none. The decoration layer clips its own overflow.

## Validation
Production build and TypeScript must pass after integration. Browser inventory was empty during implementation: desktop 1440px and mobile 390px visual QA NOT TESTED.

Manual QA: run npm run dev; inspect the three boundaries while scrolling slowly and rapidly down/up at 1440px and 390px. Check that rockets and trails stay in section padding, no important copy/screenshots/CTA are covered, links remain clickable, and document width does not exceed viewport width. Enable reduced motion in browser/OS and confirm rockets/particles stop tracking scroll. Also expand FAQ and tutorial content and confirm the last transition remains aligned.
