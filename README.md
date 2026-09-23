# Atoll Solutions hero

## Run
Open `index.html` in any modern browser. All required assets and GSAP are local, so the page works offline, with no build or installation.

Optional local server, from this folder:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Files
- `index.html`: semantic page, supplied hero copy, and Atoll menu markup.
- `styles.css`: responsive Atoll styling; mobile navigation at 991px and below.
- `navigation.css`: original supplied Osmo menu stylesheet, overridden by styles.css.
- `navigation.js`: supplied Osmo GSAP controller with small integration additions.
- `app.js`: preview dialogs for contact and menu destinations.
- `assets/`: original logo, icon, sculpture, and locally bundled GSAP 3.15.
- `reference/`: original screenshot and full supplied Osmo resource.

## Preserved navigation approach
The original data attributes, 120ms hover intent, 150ms leave delay, GSAP height morphing, staggered fades, directional desktop panel changes, animated hamburger, and mobile slide-over/back timelines are retained. Integration additions support desktop click/touch, closing on link selection, mobile aria-expanded states, and reduced-motion preferences.

## Content integration
The hero wording and top-level navigation follow the screenshot. Dropdown copy is provisional Atoll-oriented content because final menu destinations were not supplied. Menu links currently open preview dialogs; replace their hrefs and remove the data-detail interception in app.js when adding real pages. Both Contact Us controls also open a clearly labeled preview dialog. Replace their handlers with your real contact route, form, or email. No contact messages are collected or sent.

The provided image.png is the full visual reference; the hero is rebuilt as responsive HTML rather than using that screenshot as a page background. The supplied transparent sculpture, logo, and icon are used directly. The hero headline uses the supplied Racleys Regular font, bundled locally. Other sans-serif text currently uses Arial.

## Verification
JavaScript syntax checked. Desktop dropdown opening and Escape closing, mobile menu opening and slide-over rendering verified in the local browser. No browser console errors observed during these checks. Responsive CSS includes desktop, tablet, and narrow-phone layouts.

## Attribution
Navigation adapted from the user-supplied Osmo Supply “Mega Navigation (Directional Hover)” resource. Preserve applicable Osmo usage rights. GSAP's copyright/license notice is included in its bundled file. Supplied design assets remain the property of their respective owners.

## Logo stack loader
The supplied Osmo Logo Stack Loader now runs on each page load with the Atoll logo and blue background. Its five duplicate logos, 3D tilt, snap-back, progress bar and bottom-up reveal remain GSAP-driven. Reduced motion uses the supplied fade variant. The logo is decoded before starting; the overlay clears after eight seconds if initialization fails and stays hidden when JavaScript is disabled. The progress bar represents the intro animation, not network download progress. Loader styling and behavior are in loader.css and loader.js.

## Benefits section
Added the supplied five-card benefits section below the hero, using all five supplied PNG icons. The kicker uses locally bundled Azeret Mono (Google Fonts; OFL license included). Layout uses five columns on desktop, three at tablet sizes, and one on mobile. The fixed navigation gains a blue surface on scroll to remain readable.

## Updated navigation
Navigation: Home, Technology, Industries (Manufacturing; Logistics & Warehousing; GCC; Construction & Mining; Hospitals), About, Resources (Case studies; Ebook). Contact Us is retained. Only navigation was updated; page sections are unchanged. Unbuilt destinations continue to use local preview dialogs rather than sending website visitors to the source Google Doc.

## Link and button character stagger
All text links and buttons now use the supplied Osmo CSS character stagger (0.01-second character offsets, 0.6-second transform transition, text-shadow rollover). Existing layout and navigation hooks are preserved. The effect also responds to keyboard focus and respects reduced motion. Image-only logo and hamburger controls retain their existing artwork and icon animations. Implementation: button-stagger.css and button-stagger.js.

## Burger animation
Mobile navigation now uses the supplied Osmo Burger Menu Button sequence and locally bundled GSAP CustomEase. The menu controller synchronizes animation and data-menu-button state for opening, closing and desktop resize. Verified open/close in the mobile preview.

The loader uses the updated user-supplied assets/atoll-solutions-logo.webp. The navigation logo is unchanged.

## Global parallax
The supplied Osmo data-attribute-driven GSAP ScrollTrigger setup is included in parallax.js. The hero triggers a 0-to-18% vertical shift of the sculpture as the hero scrolls out, with 0.6-second scrub smoothing. Text and cards remain stationary. Parallax is disabled at tablet/mobile widths (991px and below) and for reduced-motion preferences. ScrollTrigger is bundled locally. Reuse data-parallax attributes to configure additional elements.

## Elements reveal on scroll
The supplied Osmo reveal.js controller is used unchanged with the existing local GSAP and ScrollTrigger libraries. The benefits kicker and heading reveal in sequence; each benefits card reveals its icon and copy independently when entering the viewport, including on mobile. Uses a 1.5em rise, 0.8-second power4.inOut animation, and 100–120ms stagger. Card borders stay in place. Reveals run once and respect reduced motion. Content remains visible without JavaScript.

## Footer
Responsive footer follows the supplied reference: charcoal background, angled top edge, blue contact button, three link columns, large Racleys wordmark and legal row. Navigation reflects the current site structure. Existing character-stagger enhancements cover the new controls. Social and legal links use labeled preview dialogs until actual destinations are provided. Desktop and mobile layouts inspected; no mobile horizontal overflow.

## Contact banner
Added the supplied pre-footer call-to-action with blue gradient, subtle grid, Racleys heading and image 160.png artwork. Its button uses the existing character stagger and contact preview dialog. Layout stacks on mobile; asset loading and mobile overflow checked.

## Industries section
Inserted before the final blue contact banner. Four photo cards match the reference, with all photo cards closed initially. Hover, tap or keyboard focus reveals each card’s details. Mobile uses one column and tablet two. Non-reference card descriptions are provisional; destination buttons use the existing preview dialogs. All five supplied photographs are bundled; the campus photo is retained as an unused alternate. Verified card activation and no horizontal overflow at 390px.

## Connected Intelligence
Added after Industries and before the contact banner: angled blue gradient section, Racleys heading, Azeret Mono kicker and responsive six-node technology diagram using existing logo and benefit assets. The anchors symbol reuses the paired-circle icon rotated vertically. Text uses the existing scroll-reveal controller. Mobile stacks copy above the diagram. Verified section order and mobile width.

Industry reveal backgrounds use #E9EEF9. Mouse leave closes a reveal unless keyboard focus remains inside the card.

## Case studies
Added immediately after Industries, before Connected Intelligence. Featured healthcare story plus three dated cards match the supplied reference. The healthcare photograph is framed from the supplied screenshot via CSS; replace assets/case-studies-reference.png and the framing rules with a standalone original photograph when available. Article destinations remain preview dialogs. Verified desktop appearance, section ordering, and mobile overflow.

## Partners and ebook
Inserted directly after Connected Intelligence. Uses the five supplied partner logos, globe artwork and ebook sculpture. Responsive logo grid and stacked mobile banner; existing reveal and character-stagger behaviors retained. Ebook button opens a preview dialog until a downloadable file is supplied. Verified section order, desktop visuals and mobile width.

## Faster Returns
Added after Benefits using the supplied globe and linked-ring sculpture, angled charcoal panel, Racleys heading and Azeret Mono kicker. Existing scroll reveal and button character stagger are preserved. Explore Your ROI opens a preview dialog until a destination is supplied. Verified desktop composition, mobile overflow and section placement.

The globe images above Faster Returns and below Partners have been removed as requested. Both section transitions retain their angled edges.

## Team
Added between Ebooks and the contact banner, using both supplied Seshaasai exhibition photos and reference copy. Desktop uses the asymmetric three-column composition; mobile stacks content and photos. Existing reveal and button animations retained. Know More uses an About preview dialog. Verified desktop layout, image loading, placement and mobile overflow.

## Why choose Atoll
Added after ROI and before Industries. Five native expandable rows use CSS sticky headers, with all five rows initially expanded. Each row reuses the same two existing images. Includes mobile styling, keyboard controls, and reduced-motion support.
