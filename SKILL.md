# RMX Design System — Figma-to-Angular pipeline

Working notes for turning RMX Foundations (Figma) into Angular components via
the JSON contract. This file is the running reference for conventions and
guardrails discovered while building components.

## Guardrails

Hard rules learned from real bugs. Apply to **every** new component, not just
the one that surfaced the issue.

### Centre text explicitly — never rely on flex or the browser default

**What happened:** `Button` labels rendered visibly off-centre (~14px to one
side). Inspecting the rendered styles showed the label itself was fine —
`justify-content: center` on the `inline-flex` button and the UA
`button { text-align: center }` default were both in effect. The real cause
was a **phantom layout box**: `<app-button [trailingIcon]="true">` renders the
`.rmx-btn__icon` host `<span>` (fixed `width: 20px`, plus its flex `gap`) even
when nothing is projected into its `[slot=trailing-icon]` `<ng-content>`. The
empty 20px box sat inside the centred flex row, so the *group*
`[label + gap + empty box]` was centred and the visible label was pushed off
the button's optical centre.

**Fixes applied in `button.component.scss`:**

1. `.rmx-btn__icon:empty { display: none; }` — an icon slot that received no
   projected content collapses entirely (0 width *and* no `gap` contribution),
   so the label centres exactly. A 0-width element is not enough: a flex item
   with `width: 0` still triggers the parent `gap`.
2. `.rmx-btn { text-align: center; }` set explicitly — do not depend on the
   UA `button` default (a global reset such as `all: unset`, Normalize, or a
   Tailwind Preflight can zero it) and do not depend on `justify-content`
   alone (it centres the flex line-box as a group; a label that *wraps* only
   stays centred line-by-line if `text-align: center` is set).

**Rules going forward:**

- Any component with a centred label sets `text-align: center` in its own
  SCSS. Treat inherited/UA centring as absent.
- Never let an optional slot (icon, adornment, badge) reserve space when it is
  empty. Gate the host element on real content — `:empty { display: none }`,
  a `*ngIf` on projected content, or `@ContentChild` — not on a boolean input
  alone.
- When alignment "looks off", inspect the *rendered* box model (element rects,
  computed `gap`, `:empty` state) before touching alignment properties. The
  alignment CSS is usually correct; a stray box is the culprit.

**Deliberate exception — form controls are left-aligned.** This rule is about
buttons, links, tabs, and other action/label components. Checkboxes, radios,
text inputs, selects, and textareas align their content/text to the **inline
start** (left in LTR) by convention and platform expectation — do **not**
force `text-align: center` on them or on their labels.

## Notes

- **Split Button** is out of scope for the base `Button` entry — it is a
  two-part composite and needs its own registry entry.
- Extend `design-tokens.scss` only with token values confirmed by a component
  that actually consumes them. Never hand-guess a px value.
