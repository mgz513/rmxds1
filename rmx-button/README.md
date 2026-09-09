# RMX Button — first test drop

## Files
- `design-tokens.scss` — CSS custom properties for tokens confirmed so far
- `button.component.ts` / `.html` / `.scss` — the Button component
- `button-demo.component.ts` — visual test harness, all variants
- `button.spec.json` — example JSON specs matching the schema

## To test in your Angular repo
1. Copy the `rmx-button/` folder into `src/app/components/` (or wherever
   your components live).
2. Import `design-tokens.scss` once, globally, in your `styles.scss`:
   ```scss
   @use './app/components/rmx-button/design-tokens';
   ```
3. Add `ButtonDemoComponent` to a route, or bootstrap it directly in
   `main.ts` for a quick standalone check:
   ```ts
   import { bootstrapApplication } from '@angular/platform-browser';
   import { ButtonDemoComponent } from './app/components/rmx-button/button-demo.component';
   bootstrapApplication(ButtonDemoComponent);
   ```
4. `ng serve` and compare against the Figma frames for Button
   (node 373:2709) side by side.

## What to check when comparing
- Colors/spacing should match exactly since they're pulled from real
  Foundations tokens — flag anything that looks off, it likely means a
  token value here is wrong or unconfirmed (see comments in
  `design-tokens.scss`).
- Hover states — mouse over each button; hover is CSS-driven here, not a
  prop, so it should just work without JS.
- Disabled states — note Marketing has no disabled state coded (Figma
  doesn't define one either).
- Compact size — only Secondary supports it; you'll see a dev console
  warning if you try other combinations (intentional guardrail).

## Known gaps (by design, not oversight)
- **Split Button** is not implemented — it's structurally a two-part
  composite, scoped out per SKILL.md notes. Separate registry entry needed.
- Some token px values (spacing scale beyond `none`/`xs`) aren't
  confirmed yet — only pulled what Button actually uses. Extend
  `design-tokens.scss` as more components surface more values.

## Report back
Once you've eyeballed it against Figma, let me know what's off (color,
spacing, missing state, whatever) and I'll fix the component directly
rather than us guessing from the Tailwind reference code a second time.
