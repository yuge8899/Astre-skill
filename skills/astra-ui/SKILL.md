---
name: astra-ui
description: "Use when creating, reviewing, or validating Astra-style B2C SaaS pages and components such as dashboards, data lists, settings pages, forms, tables, navigation, and modal flows. Also use when selecting Astra layout patterns, enforcing Astra UI compliance, or applying this repository's card-based, borderless admin/product interface rules."
---

# Astra UI Design System

B2C SaaS design system with a **minimal, clean, breathable** style.

## Design Principles

| Principle | Description |
|-----------|-------------|
| **Minimal color** | 90% neutral colors, brand color used only for primary buttons and active states |
| **Card-based layout** | Content hosted in `bg-white` cards floating on a `bg-slate-50` canvas |
| **Borderless design** | Separated by surface color contrast; cards have no borders and no shadows |
| **Soft shadows** | Only for floating overlays (modal, dropdown, toolbar) |

## Repository Sync

- `SYSTEM_GUIDE.md` is a generated artifact — do not edit manually.
- The only machine-readable rule source is [references/gate-contract.md](references/gate-contract.md).
- In this repository, run once before editing:

```bash
node skills/astra-ui/scripts/generate-system-guide.js
```

- Before committing, run:

```bash
node skills/astra-ui/scripts/check-gate.js
node skills/astra-ui/scripts/check-astra-output.js <file ...>
```

## Hard Rules

### Navigation Structure
1. **Primary navigation**: left side, width `110px`, dark background such as `bg-slate-900`, light text such as `text-slate-300` / `text-white`
2. **Primary nav items stay horizontal**: icon + label in one row (`flex items-center gap-2 whitespace-nowrap overflow-hidden shrink-0`). No vertical stacking, wrapping, or deformation.
3. **Secondary navigation**: left side, width `130px`, pure white background `bg-white`
4. **Fixed breadcrumb bar**: `bg-white`, pinned to the top of the main content area, not part of the scroll region
5. **Strict navigation hierarchy**: `PrimaryNav` → `SecondaryNav`, no skipping

### Layout Structure
6. **Safe margins and alignment**: use uniform `p-5` (20px) margins and keep modules/forms strictly aligned to the same grid
7. **All content lives inside cards**: do not place business content directly on the page canvas; keep card spacing on the same grid
8. **No extra section titles**: cards should carry the section structure themselves
9. **Page background is always `bg-slate-50`**
10. **Functional header module**: above tables, lists, settings panels, and similar content, use a "left icon card + right title and description" intro block instead of plain text headings

### Button Layout
10. **Radius rule**: action buttons use `rounded-md`; `rounded-full` capsule buttons are prohibited
11. **Limited multi-pivot emphasis**: 2-3 primary-color buttons may exist in one flow when needed, but the hierarchy must stay clear; default to one main highlight
12. **Primary before secondary**: secondary actions should use outline or neutral gray-white fill

### Style Rules
14. **Cards use `bg-white`**: no border, no shadow
15. **Restrained decoration**: no gradients, colored borders, or large colored background blocks
17. **No dividers between nav zones**: distinguish with surface contrast, not borders

### Component Usage
18. **Use design-system components**: prefer `InputField`, not raw `<input>`
19. **Tabs from Arco**: `@arco-design/web-react`

### Icon Usage (Hard Rules)
20. **Must use lucide.dev icons**: no inline SVGs, no other icon libraries
21. **Strictly follow icon spec**: Size, color, and strokeWidth per icons.md
22. **Navigation icons**: `strokeWidth={2.5}` and `className="size-full"` when the container should control size
23. **Verify before use**: Search lucide.dev to confirm the icon name

### Table Rules
21. **Overflow tables**: fix the Actions column with `fixed: 'right'`; let other columns scroll horizontally
22. **Visible table actions**: do not hide action columns by default; when actions exceed 3, move extras into a "More" dropdown
23. **Consistent action styling**: use brand blue (`text-blue-600`) and normal weight (`font-normal` / 400), not mixed semantic colors
24. **Multi-type table switching**: Use Tabs component, left-aligned with the table

### New Page Display
24. **Simple page** (<=5 fields) → Right-side drawer
25. **Complex page** (>5 fields) → New full page

## Dependency Stack

- `shadcn/ui` + `lucide-react`: core primitives such as Button, Input, Dialog, and Table
- `@arco-design/web-react` `Tabs`: in-region view switching
- `page-agent`: natural-language browser validation

## Install Reference

```bash
npx shadcn@latest init
npx shadcn@latest add button card input textarea select checkbox switch radio-group label badge toast tooltip dialog sheet table pagination avatar dropdown-menu separator scroll-area skeleton tabs breadcrumb
npm install lucide-react
npm install @arco-design/web-react
npm install page-agent
```

## shadcn/ui Component Mapping

Component mapping, Astra variants, and component examples: see [components.md](references/components.md)

## Token Quick Reference

- Page canvas: `bg-slate-50`
- Card / secondary nav: `bg-white`
- Primary nav: `bg-slate-900 text-slate-300`, active `text-white`
- Page safe margin: `p-5`
- Button radius: `rounded-md`
- Card radius: `rounded-xl`
- Nav icons: `strokeWidth={2.5}`

For the full token system, semantic colors, spacing, borders, form controls, and anti-patterns, see [tokens.md](references/tokens.md)

---

## Template Selection

```
┌─ "Which template?"
│
├─ View current status + recent activity? → Dashboard
├─ Browse, search, manage records? → Data List
├─ View or edit a single entity? → Detail / Editor
└─ Configure settings / fill a form? → Form / Settings
```

See [templates.md](references/templates.md)

---

## Component Decision Tree

### Actions
```
├─ Text label action? → Button
│  ├─ Primary CTA → variant="primary"
│  ├─ Supporting action → variant="neutral"
│  └─ Low emphasis → variant="subtle"
├─ Icon-only action? → IconButton
├─ Multiple related actions? → ButtonGroup
└─ Favorite/star? → FavoriteButton
```

### Inputs
```
├─ Short text? → InputField
├─ Long text? → TextareaField
├─ Predefined options? → SelectField
├─ Mutually exclusive options? → RadioGroup
├─ Labeled boolean setting? → SwitchField
├─ Form boolean field? → Checkbox
└─ Search? → SearchComponent
```

### Navigation
```
├─ App-level page navigation? → PrimaryNav (primary nav 110px)
├─ Page sub-section? → SecondaryNav (secondary nav 130px)
└─ In-region view switching? → Tabs (Arco)
```

### Feedback
```
├─ Transient non-blocking notification? → Toast
├─ Status label? → Badge
├─ Hover tooltip? → Tooltip
└─ Blocking decision? → Modal
```

- Full component props: [components.md](references/components.md)
- Placeholder image selection: [image-placeholders.md](references/image-placeholders.md)

---

## Page Layout Structure

Standard responsive SaaS shell: primary nav (`110px`), secondary nav (`130px`), fixed breadcrumb header, and card-based main content.

See [layout.md](references/layout.md)

---

## Validation Checklist

Before submitting prototype or code, run the compliance check in [validation.md](references/validation.md).

---

## Additional References

Load these when the task needs more specific guidance beyond the core layout and component rules:

- Interaction and motion rules: [animation.md](references/animation.md)
- Focus behavior and keyboard handling: [focus.md](references/focus.md)
- Dark mode behavior: [modes.md](references/modes.md)
- Navigation-specific patterns: [navigation.md](references/navigation.md)
- Automated validation with page-agent: [page-agent.md](references/page-agent.md)

---

## Visual Style Examples

Use [examples.md](references/examples.md) for correct vs. incorrect implementations.

---

## Knowledge Base Navigation

Use [navigation.md](references/navigation.md) for the full reference index.

---
