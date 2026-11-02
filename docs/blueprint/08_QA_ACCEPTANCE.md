# Acceptance Tests and Release Quality Gates

**Status:** Proposed tests; **not executed**. The developer/agent must report real evidence. Passing static lint alone is insufficient evidence of functional UI or material fidelity.

## 1. Mandatory preflight evidence

- [ ] Taste Engine `SKILL.md` read from a confirmed local or repository path.
- [ ] Ten canonical `styles/*.md` read before implementing each visual language.
- [ ] Glassmorphism v0.10.3 or installed equivalent read, including gradient exception and first-viewport material fidelity gate.
- [ ] Default Neo-brutalism decision acknowledged; no redundant style question.
- [ ] Repo install instructions and project/version claims checked against actual source.
- [ ] Existing project state and user-provided assets inspected before replacing them.

## 2. Automated code/test checks (when tools available)

- [ ] `npm install` (or locked install) completes without unresolved peer dependency errors.
- [ ] `npm run build` succeeds for Vite + React JavaScript.
- [ ] Router unit tests cover fixed pages, ten style IDs, aliases and unknown style 404.
- [ ] Component tests cover FAQ, tab switch, form validation, theme toggle, dialog close and active-state feedback.
- [ ] Search/filter/sort unit tests have deterministic fixture expectations and proper no-results state.
- [ ] Test that auth demo contains no remote calls, doesn't persist password, and never claims real login.
- [ ] Keyboard focus and accessible names tested with appropriate tooling where possible.
- [ ] Deep-link refresh tests for `/<style>`, `/<style>/playground`, `/<style>/login`, `/<style>/dashboard` on the chosen hosting setup.
- [ ] Generated public-route metadata and prerender output checked; don't report SEO build success without verifying HTML content.

Recommended tools if available: Vitest + React Testing Library for components; Playwright for browser routes/keyboard/screenshot; axe-core tooling for accessibility checks. Do not fabricate tool outputs; installing tools is an engineering choice, not an automatic dependency mandate.

## 3. Route matrix

The following routes should load with correct content and no silent style fallback:

```text
/
/about
/how-it-works
/features
/styles
/showcase
/compare
/installation
/docs
/anti-slop
/seo
/motion
/engineering
/faq

/claymorphism
/glassmorphism
/brutalism
/neo-brutalism
/minimalism
/swiss-editorial
/bento
/skeuomorphism
/retro-terminal
/enterprise

For EACH style above:
/<style>/playground
/<style>/login
/<style>/dashboard

Alias redirects:
/glassmorphsm → /glassmorphism
/skeumorphism → /skeuomorphism
/skeumorphsm → /skeuomorphism
/editorial → /swiss-editorial
/swiss → /swiss-editorial
/install → /installation

/random-nonexistent → 404
/nope/login → 404
```

**Expected canonical routes:** 14 core routes + 10 style overview routes + 30 style subroutes = **54**, excluding aliases/404. Test exact count against the actual registered routes; changing core scope changes this number.

## 4. Interaction smoke tests (P0)

| Scenario | Steps | Expected result |
| --- | --- | --- |
| Theme persistence | Set Dark on Glassmorphism; refresh | Dark chosen, glass material preserved; preference survives if local storage accessible |
| Style switch | Choose Neo-brutalism from Glassmorphism | Canonical route changes; component materials and typography change beyond colors |
| FAQ | Expand then collapse one FAQ; use keyboard | Content toggles, `aria-expanded`/native semantics correct |
| Tabs | Click / keyboard navigate tabs | Visible panel matches active tab; focus and labels are clear |
| Modal | Open → Escape → reopen → Close | Dialog opens, Escape works, focus restores to trigger |
| Toast | Click a demo toast trigger | Toast appears with true wording, screen-reader announcement appropriate |
| Login invalid | Empty/invalid email and password → submit | Errors shown; first error focused; no fake login |
| Login valid | Enter syntactically valid demo details → submit | Only “Demo validation passed. No account was accessed.” |
| Reset email | Reset-password demo → submit | Explicit “No email was sent.” |
| File picker | Choose an image/text file | Actual filename displayed locally; no upload claim |
| Data filtering | Search `glass`, filter `Review`, sort | Visible rows match actual fixture; URL state consistent if implemented |
| Empty state | Enter impossible sample query | Correct no-results message; clear-filter action works |
| Install copy | Click command copy | Correct command copied or honest clipboard fallback |
| Card action | Select image/media card | Detail panel/route opens with original art attribution and readable content |
| Responsive nav | At 320 px, open menu → click Styles | Navigates, overlay closes, focus sane |
| Compare | Select A/B styles and specimen; refresh | Shared content remains consistent; URL restores chosen configuration |

Run representative smoke tests for each of ten style families, plus full suite on high-risk Glassmorphism and one data-dense style.

## 5. Visual material acceptance tests

Do **not** accept a style just because headings say its name. For each of 10 style overviews, inspect screenshot with heading hidden or ignored and identify the selected material/typographic/compositional identity. Check both themes and representative interactive states.

### Glassmorphism hard gate

- [ ] First viewport has differentiated backdrop illumination that meaningfully continues behind/around a foreground pane.
- [ ] Foreground pane is partially transparent and shows background influence; it is not an opaque gray rectangle.
- [ ] Background transitions/shapes become visibly frosted **inside** pane and sharper **outside**.
- [ ] Pane edge/highlights and depth are visible but restrained.
- [ ] Milky-light variant remains soft/readable; smoked-dark variant remains rich/readable; neither collapses into flat navy.
- [ ] Intentional radial/mesh gradients are preserved as legitimate material backdrop; no global anti-slop rule mistakenly removes them.
- [ ] Text contrast, focus and controls remain usable; reduced-transparency / `@supports not` fallback verified.

If first viewport fails, revise until the material is visible **before** adding additional decorative content.

### Other style gates

- [ ] Clay feels sculpted; tactile depth not simple rounded rectangles.
- [ ] Brutalism is structural and raw, not forced friendly SaaS.
- [ ] Neo-brutalism uses strong borders/offset shadows with disciplined spacing.
- [ ] Minimalism is typographic and clear, not an unfinished blank page.
- [ ] Swiss/Editorial has rigorous typographic grid and information hierarchy.
- [ ] Bento uses varied purposeful tile sizes, not grid-of-equal-cards.
- [ ] Skeuomorphism conveys physical interaction affordances, not ornamental photo textures.
- [ ] Retro Terminal is legible and navigable, not fake OS commands.
- [ ] Enterprise prioritizes readability and repetitive workflow efficiency.

## 6. Responsive and accessibility coverage

- [ ] Real browser widths: ~320px, ~390px, ~768px, ~1440px; include short-height landscape at least once.
- [ ] At 200% browser zoom, headings, buttons, dialogs and form actions remain accessible.
- [ ] No horizontal scroll from accidental overflow.
- [ ] All images have appropriate alt text or decorative `alt=""`, explicit sizing where possible.
- [ ] Keyboard-only: header, style selector, theme toggle, all playground categories, auth screens, FAQ, modal and dashboard.
- [ ] Focus indicators visible in all style/theme combinations.
- [ ] No icon-only action lacking accessible name.
- [ ] Dialog focus is managed; no trapped focus after closure.
- [ ] Form errors announced; controls properly labeled.
- [ ] Glass and other composite surfaces checked for actual text/non-text contrast.
- [ ] Reduced motion disables nonessential animation; reduced transparency/fallbacks for glass.
- [ ] Responsive hero uses `min-height` and allows growth; CTA not clipped by browser toolbar.

## 7. Content integrity and trust tests

- [ ] All public copy is in English.
- [ ] All ten style names match the installed registry exactly.
- [ ] A user can distinguish Taste Engine Agent Skill from the showcase website.
- [ ] The site doesn't advertise direct AI generation features that do not exist.
- [ ] Sample data labeled where displayed; no invented production telemetry or false success toasts.
- [ ] No made-up testimonial, sponsor, adoption number, logo, certification, GitHub stats or release.
- [ ] Install commands and agent names verified; links go to real URLs.
- [ ] No passwords sent, persisted or written to URL/logs; demo-only auth always disclosed.
- [ ] SEO metadata and canonical reflect real deployment URL (or leave unknown values pending; no fabricated domain).

## 8. Report format

End each implementation cycle with:

```text
Built:
- <real routes/features completed>

Validated:
- <commands run, browser viewport checks, concrete results>

Taste Engine evidence:
- Skill path: <real path>
- Style packs read: <actual list>
- Style fidelity reviewed: <actual pages/screenshots checked>

Not yet validated:
- <all unrun browser, accessibility, SEO or integration checks>

Known limitations:
- <remaining nonworking or intentionally demo-only behavior>
```

**Never say “all tests passed” merely because the site looks right in a screenshot or a prompt instructed that tests should run.**
