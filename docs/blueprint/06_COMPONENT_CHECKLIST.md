# Component and Interaction Checklist

Use these as **implementation and verification checkboxes**. `[ ]` means not yet implemented/tested; the document is a specification, not a completed QA report. Every component must demonstrate the selected aesthetic's material/geometry, correct behavior and accessible states.

## 1. Shared site infrastructure

- [ ] Responsive, keyboard-operable site header with correct active-link state.
- [ ] Mobile navigation that closes after navigation and manages focus.
- [ ] Functional search or section navigation on `/docs`.
- [ ] Footer with working GitHub, Docs, Installation and License links.
- [ ] Accurate copy-to-clipboard for install commands, success/failure feedback.
- [ ] Light/dark theme control on the main site and within all style routes.
- [ ] Router fallback and genuine not-found page.
- [ ] Skip-to-content and visible focus indicators.
- [ ] Page title and description change per route.
- [ ] Browser direct refresh on nested routes works with chosen deployment strategy.

## 2. Style overview: EVERY one of the 10 styles

- [ ] First viewport has a recognizable **style-authentic** hero; public marketing hero composes with real navbar height and can grow on mobile.
- [ ] Hero contains accurate Taste Engine overview and navigable CTAs.
- [ ] Style DNA explains type, material, composition, colors, motion and anti-slop.
- [ ] Functional named interactive specimen appears without requiring a deep scroll.
- [ ] Links to this style's Playground, Login and Dashboard demos.
- [ ] Next/previous style links and back-to-styles path.
- [ ] Light and dark versions are visually considered, not mechanically inverted.
- [ ] Readability and focus over actual backgrounds, not imagined token contrast.
- [ ] Full keyboard access and responsive test at 320–1440 px.

### Individual style fidelity gates

- [ ] Claymorphism: soft material, sculpted highlights and consistent tactile shadow direction.
- [ ] Glassmorphism: real **visible frosted pane** over differentiated gradient/ambient background, translucent tint, reflective edge, opaque fallback, readable text.
- [ ] Brutalism: raw structural composition, assertive type and purposeful edge treatment.
- [ ] Neo-brutalism: expressive hard borders and offset shadows without chaotic layout.
- [ ] Minimalism: spare surfaces with compelling typographic, spacing and information hierarchy.
- [ ] Swiss/Editorial: grid-precise, editorial typesetting and meaningful spatial rhythm.
- [ ] Bento: varied tile weights and coherent product hierarchy, not uniform generic cards.
- [ ] Skeuomorphism: physically legible controls and tactile states; no fake interface hardware behavior.
- [ ] Retro Terminal: console-inspired UI with readable type and non-fake interactive command semantics.
- [ ] Enterprise: dense but scannable data, strong state distinctions and efficient forms.

## 3. Playground component library: EVERY style

### Navigation and discovery

- [ ] Standard header / responsive mobile menu.
- [ ] Accessible navigation tab set that changes visible panels.
- [ ] Breadcrumb or other correct hierarchy navigation.
- [ ] Sidebar/drawer that opens and closes correctly.
- [ ] Category jump navigation that works via URL/hash.

### Cards and media

- [ ] Image card with actual local/authorized image or original illustration, alt text, stable aspect ratio, title and functioning action.
- [ ] Editorial/content card with meaningful summary and link/action.
- [ ] Feature card with real Taste Engine feature content.
- [ ] Profile/example card clearly identified as a demonstration, with no invented contributor identity.
- [ ] Pricing/feature comparison specimen only if identified as **illustrative layout**, not a real pricing plan.
- [ ] Selected image/content card opens real local detail or route; correct back navigation.

### Forms and controls

- [ ] Labeled text, email and password inputs.
- [ ] Accessible show/hide-password control.
- [ ] Select with real state and options.
- [ ] Checkbox / radio group with proper keyboard and labels.
- [ ] Switch with `aria-checked` or native checkbox semantics.
- [ ] Textarea with safe long-text handling.
- [ ] File picker with local filename acknowledgement and **no fake upload**.
- [ ] Inline validation, first-error focus, accurate error and helper text.
- [ ] Disabled/loading form state without interactive duplicates.

### Overlays and disclosure

- [ ] Dialog with button trigger, close control, Escape key and focus management.
- [ ] Context dropdown/menu with keyboard operability.
- [ ] Tooltip with correct role/trigger, not hover-only essential instructions.
- [ ] Drawer/sheet with appropriate focus and scroll containment.
- [ ] Toast triggered by action; live announcement and truthful language.
- [ ] FAQ accordion answers actual Taste Engine questions.

### Data, filtering and state

- [ ] Table/list with explicit sample-data label.
- [ ] Actual text search across sample rows.
- [ ] Sort with deterministic row order.
- [ ] Category/status filter with visible active state.
- [ ] Empty state when search matches zero rows.
- [ ] Loading skeleton toggle labeled as **state preview**, not a fake request.
- [ ] Error and success preview toggle with correct messages; no fake transaction.
- [ ] Charts only if derived from stated sample data.
- [ ] Settings toggles visibly update a local preference.

### Playground controls

- [ ] Style picker with all ten canonical options.
- [ ] Light/dark toggle for selected style.
- [ ] Component category selector.
- [ ] Fullscreen/detail view for specimen without breaking accessibility.
- [ ] Responsive frame preset switcher, labeled as viewport simulation.
- [ ] Reset demo state button, if necessary for repeatable testing.
- [ ] Clear focus/hover/pressed/disabled visuals where meaningful.

## 4. Login, signup and reset preview: EVERY style

- [ ] Visually complete full-page login layout.
- [ ] `Demo only — no real authentication` disclaimer visible near form.
- [ ] Email and password validation with readable errors.
- [ ] Show/hide password button works.
- [ ] Remember-me checkbox changes local state but does not store credentials.
- [ ] Submit with valid inputs shows `Demo validation passed. No account was accessed.`
- [ ] Submit with invalid inputs shows errors and focuses error.
- [ ] Sign-up subview (email/password/confirm) validates and does **not** create account.
- [ ] Reset-password subview validates email and says `Demo only. No email was sent.`
- [ ] No fake Google/GitHub login providers or non-working social buttons.
- [ ] No credentials transmitted, stored, logged or included in URL.
- [ ] Theme, keyboard and mobile are usable.

## 5. Sample dashboard preview: EVERY style

- [ ] Sample-data label consistently visible.
- [ ] Navigation, sample item list/table, summary, settings and useful action areas.
- [ ] Actual functional search, sort, filter and row selection.
- [ ] Item detail panel, modal or route with actual row data.
- [ ] Local settings change surfaces or behavior without pretending remote save.
- [ ] Search returns correct empty state.
- [ ] Chart, if included, matches local fixture values.
- [ ] Useful constrained layout on 320–390 px mobile and tablet.
- [ ] Style differentiation beyond palette: information density/geometry/material reflects current pack.

## 6. Side-by-side compare

- [ ] Style A and Style B selection with correct canonical names.
- [ ] One shared specimen/content rendered twice under different styles.
- [ ] Independent unique IDs and form labels; no duplicated HTML IDs.
- [ ] Query string restores comparison state on refresh.
- [ ] Navigation and local interaction remain usable in both panes.
- [ ] Mobile stacking or clearly usable single-pane focus mode.

## 7. Universal quality gate

- [ ] No dead buttons, broken links or false success messages.
- [ ] All 10 visual styles have identifiable material/compositional character.
- [ ] Both themes have sufficient **actual** contrast and focus visibility.
- [ ] Reduced-motion preference respected; no uninterruptible ambient loops.
- [ ] 320, 390, 768 and 1440px checked in real browser.
- [ ] Zoom/text enlargement does not clip critical controls.
- [ ] React app builds and loads direct deep links.
- [ ] Public SEO strategy verified; limitations documented honestly.
- [ ] Sample data clearly identified, no fake users/metrics/testimonials/statuses.
- [ ] Test results and incomplete areas reported truthfully.
