# Design Tokens

## Color System (Tailwind CSS v4.1.6)

Use the built-in Tailwind CSS v4 palette:
- **Slate**: neutral scale for text, backgrounds, and borders
- **Blue**: brand color scale
- **Blue-700 (`#1d4ed8`)**: theme color

---

## Color

### Brand Colors (Blue)

| Token | Value | Tailwind Class | Usage |
|-------|-------|----------------|-------|
| `brand-50` | `#eff6ff` | `bg-blue-50` | Lightest background |
| `brand-100` | `#dbeafe` | `bg-blue-100` | Soft background |
| `brand-200` | `#bfdbfe` | `bg-blue-200` | AI bubble background |
| `brand-300` | `#93c5fd` | `bg-blue-300` | — |
| `brand-400` | `#60a5fa` | `bg-blue-400` | — |
| `brand-500` | `#3b82f6` | `bg-blue-500` | Primary button, active states |
| `brand-600` | `#2563eb` | `bg-blue-600` | Hover state |
| `brand-700` | `#1d4ed8` | `bg-blue-700` | Theme color, pressed state |
| `brand-800` | `#1e40af` | `bg-blue-800` | — |
| `brand-900` | `#1e3a8a` | `bg-blue-900` | — |
| `brand-950` | `#172554` | `bg-blue-950` | Darkest |

**Brand color rules**:
- `brand-500`: default state for primary buttons
- `brand-600`: hover state for primary buttons
- `brand-700`: theme color and pressed state
- `brand-100`: light active background and icon-description card background
- `brand-200`: AI bubble and subtle highlight

### Neutral Colors (Slate)

| Token | Value | Tailwind Class | Usage |
|-------|-------|----------------|-------|
| `slate-50` | `#f8fafc` | `bg-slate-50` | Lightest surface |
| `slate-100` | `#f1f5f9` | `bg-slate-100` | Secondary background, input background |
| `slate-200` | `#e2e8f0` | `bg-slate-200` | Borders, separators |
| `slate-300` | `#cbd5e1` | `bg-slate-300` | — |
| `slate-400` | `#94a3b8` | `bg-slate-400` | Placeholder text, disabled icons |
| `slate-500` | `#64748b` | `bg-slate-500` | Secondary text |
| `slate-600` | `#475569` | `bg-slate-600` | — |
| `slate-700` | `#334155` | `bg-slate-700` | Primary text |
| `slate-800` | `#1e293b` | `bg-slate-800` | — |
| `slate-900` | `#0f172a` | `bg-slate-900` | Darkest text |
| `slate-950` | `#020617` | `bg-slate-950` | — |

### Semantic Mapping

| Semantic Token | Tailwind Class | Usage |
|----------------|----------------|-------|
| `surface-bg` | `bg-white` | Cards, panels, navigation backgrounds |
| `surface-secondary-bg` | `bg-white` | Secondary nav panel |
| `surface-canvas` | `bg-slate-50` | Page canvas background |
| `text-primary` | `text-slate-900` | Primary text |
| `text-secondary` | `text-slate-500` | Secondary text, descriptions |
| `text-tertiary` | `text-slate-400` | Placeholder text, disabled text |
| `text-on-brand` | `text-white` | Text on brand surfaces |
| `border-primary` | `border-slate-200` | Default border |
| `border-secondary` | `border-slate-100` | Subtle border |
| `input-bg` | `bg-slate-100` | Input background |

### Status Colors

| Status | Tailwind Class | Usage |
|--------|----------------|-------|
| `success` | `text-green-600` `bg-green-50` | Success state |
| `warning` | `text-amber-600` `bg-amber-50` | Warning state |
| `danger` | `text-red-600` `bg-red-50` | Error state |
| `info` | `text-blue-600` `bg-blue-50` | Informational state |

---

## Background Decision Tree

```
┌─ "What background?"
│
├─ Page canvas? → bg-slate-50
├─ Card / panel? → bg-white
├─ Primary nav? → bg-slate-900
├─ Secondary nav? → bg-white
├─ Input field? → bg-slate-100
├─ Primary button? → bg-blue-500 + text-white
│                    hover:bg-blue-600, active:bg-blue-700
├─ AI bubble? → bg-blue-200
└─ Hover state? → bg-slate-50
```

---

## Text Color Decision Tree

```
┌─ "What text color?"
│
├─ Primary content? → text-slate-900
├─ Secondary content (description, help text)? → text-slate-500
├─ Placeholder or disabled text? → text-slate-400
├─ Interactive text (links, active state)? → text-blue-700
├─ On a brand-colored background? → text-white
└─ Status text? → text-green-600 / text-amber-600 / text-red-600
```

---

## Border Color Decision Tree

```
┌─ "What border color?"
│
├─ Default border? → border-slate-200
├─ Subtle divider? → border-slate-100
├─ Focus / selected? → border-blue-500
└─ Layout boundary? → no border, use surface contrast instead
```

---

## Color Principles

1. **90% neutral surfaces**: rely primarily on the Slate scale
2. **Brand color only for primary actions**: Blue-500 / 600 / 700
3. **Use slate-50 for the page canvas**: `bg-slate-50`
4. **Use pure white for cards**: `bg-white`
5. **Borderless design**: separate areas with surface contrast, not borders

---

## Common Mistakes

```tsx
// ❌ Wrong: text-slate-900 is not visible on a brand-500 background
<div className="bg-blue-500 text-slate-900">Save</div>

// ✅ Correct: use text-white
<div className="bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700">Save</div>

// ❌ Wrong: page background is white
<main className="bg-white">

// ✅ Correct: page background uses slate-50
<main className="bg-slate-50">

// ❌ Wrong: card has a border
<div className="bg-white border border-slate-200">

// ✅ Correct: card has no border
<div className="bg-white">
```

---

## Spacing

Use Tailwind CSS v4 spacing variables:

| Tailwind Class | CSS Variable | Value | Usage |
|----------------|--------------|-------|-------|
| `p-1` / `gap-1` | `--spacing-1` | `0.25rem` (4px) | Smallest spacing |
| `p-2` / `gap-2` | `--spacing-2` | `0.5rem` (8px) | Internal component spacing |
| `p-3` / `gap-3` | `--spacing-3` | `0.75rem` (12px) | Field spacing |
| `p-4` / `gap-4` | `--spacing-4` | `1rem` (16px) | Card padding, card spacing |
| `p-5` / `gap-5` | `--spacing-5` | `1.25rem` (20px) | Page padding (Astra default) |
| `p-6` / `gap-6` | `--spacing-6` | `1.5rem` (24px) | Large page padding |
| `p-8` / `gap-8` | `--spacing-8` | `2rem` (32px) | Large section separation |

**CSS variable usage**:

```css
/* Customize inside @theme */
@theme {
  --spacing-5: 1.25rem; /* 20px - Astra page padding */
}
```

**Decision tree**:

```
┌─ "What spacing?"
│
├─ Smallest spacing? → p-1 (--spacing-1: 4px)
├─ Internal component spacing? → p-2 (--spacing-2: 8px)
├─ Field spacing? → gap-3 (--spacing-3: 12px)
├─ Card padding? → p-4 (--spacing-4: 16px)
├─ Card spacing? → gap-4 (--spacing-4: 16px)
├─ Page padding? → p-5 (--spacing-5: 20px) ← Astra default
└─ Large section separation? → gap-8 (--spacing-8: 32px)
```

**Common scenarios**:

| Scenario | Tailwind Class | CSS Variable |
|----------|----------------|--------------|
| Page padding | `p-5` | `--spacing-5` |
| Card padding | `p-4` / `p-5` | `--spacing-4` / `--spacing-5` |
| Card spacing | `gap-5` | `--spacing-5` |
| Field spacing | `gap-3` | `--spacing-3` |
| Title-to-description gap | `mt-1` | `--spacing-1` |

**Rules**:
- Use Tailwind CSS v4 variables instead of hard-coded pixel values
- Fields inside cards should use `flex flex-col gap-3`
- Section cards should use `flex flex-col gap-5`

---

## Radius

Use Tailwind CSS v4 radius variables:

| Tailwind Class | CSS Variable | Value | Usage |
|----------------|--------------|-------|-------|
| `rounded` | `--radius-default` | `0.25rem` (4px) | Small elements |
| `rounded-sm` | `--radius-sm` | `0.125rem` (2px) | Tiny radius |
| `rounded-md` | `--radius-md` | `0.5rem` (8px) | Inputs, badges, buttons (Astra default) |
| `rounded-lg` | `--radius-lg` | `0.75rem` (12px) | Interactive elements |
| `rounded-xl` | `--radius-xl` | `1rem` (16px) | Cards, panels (Astra default) |
| `rounded-2xl` | `--radius-2xl` | `1.5rem` (24px) | Large cards |
| `rounded-full` | `--radius-full` | `9999px` | Avatars, circles |

**CSS variable usage**:

```css
/* Customize inside @theme */
@theme {
  --radius-md: 0.5rem; /* 8px - Astra button radius */
  --radius-xl: 1rem;   /* 16px - Astra card radius */
}
```

**Decision tree**:

```
┌─ "What radius?"
│
├─ Small element (badge, dot)? → rounded (--radius-default: 4px)
├─ Interactive element (input, select, button)? → rounded-md (--radius-md: 8px) ← Astra default
├─ Content card? → rounded-xl (--radius-xl: 16px) ← Astra default
└─ Avatar? → rounded-full (--radius-full: 9999px)
```

**Component mapping**:

| Component | Radius Class | CSS Variable |
|-----------|--------------|--------------|
| Button | `rounded-md` | `--radius-md` (8px) |
| InputField, SelectField | `rounded-md` | `--radius-md` (8px) |
| Cards, panels | `rounded-xl` | `--radius-xl` (16px) |
| Badge | `rounded-md` | `--radius-md` (8px) |
| Avatar (circle) | `rounded-full` | `--radius-full` (9999px) |

**Rules**:
- Cards use `rounded-xl` (`--radius-xl: 16px`)
- Interactive elements use `rounded-md` (`--radius-md: 8px`)
- Astra prohibits `rounded-full` buttons

---

## Typography

Use Tailwind CSS v4 typography variables:

### Font Size

| Tailwind Class | CSS Variable | Value | Usage |
|----------------|--------------|-------|-------|
| `text-xs` | `--text-xs` | `0.75rem` (12px) | Metadata, timestamps |
| `text-sm` | `--text-sm` | `0.875rem` (14px) | Descriptions, help text |
| `text-base` | `--text-base` | `1rem` (16px) | Body copy, button text |
| `text-lg` | `--text-lg` | `1.125rem` (18px) | Section titles |
| `text-xl` | `--text-xl` | `1.25rem` (20px) | Page subtitles |
| `text-2xl` | `--text-2xl` | `1.5rem` (24px) | Page titles |
| `text-3xl` | `--text-3xl` | `1.875rem` (30px) | Large headlines |

### Font Weight

| Tailwind Class | CSS Variable | Value | Usage |
|----------------|--------------|-------|-------|
| `font-normal` | `--font-weight-normal` | `400` | Default weight |
| `font-medium` | `--font-weight-medium` | `500` | Labels, section titles |
| `font-semibold` | `--font-weight-semibold` | `600` | Page titles, emphasis |
| `font-bold` | `--font-weight-bold` | `700` | Strongest emphasis |

**CSS variable usage**:

```css
/* Customize inside @theme */
@theme {
  --text-2xl: 1.5rem; /* 24px - Astra page title */
  --font-weight-semibold: 600;
}
```

**Decision tree**:

```
┌─ "What typography?"
│
├─ Page title? → text-2xl (--text-2xl: 24px) + font-semibold (--font-weight-semibold: 600)
├─ Section title? → text-lg (--text-lg: 18px) + font-medium (--font-weight-medium: 500)
├─ Form label? → text-base (--text-base: 16px) + font-medium (--font-weight-medium: 500)
├─ Description / help text? → text-sm (--text-sm: 14px) + text-slate-500
├─ Input value? → text-base (--text-base: 16px)
└─ Metadata / timestamp? → text-xs (--text-xs: 12px) + text-slate-400
```

**Common patterns**:

```tsx
// Page title
<h1 className="text-2xl font-semibold text-slate-900">Orders</h1>
<p className="mt-1 text-sm text-slate-500">Manage your orders</p>

// Card section title
<h2 className="mb-3 text-base font-semibold text-slate-900">Section</h2>
```

**Rules**:
- Use Tailwind CSS v4 font variables
- Set color separately with `text-slate-900` and `text-slate-500`
- Control emphasis with `font-medium` and `font-semibold`

---

## Elevation

Principle: about 95% of elements should use no shadow at all. Separate layers with surface contrast instead.

Use Tailwind CSS v4 shadow variables:

| Tailwind Class | CSS Variable | Usage |
|----------------|--------------|-------|
| No shadow | — | ~95% of elements: cards, panels, nav, inputs, buttons |
| `shadow-sm` | `--shadow-sm` | Floating toolbar |
| `shadow-md` | `--shadow-md` | Dropdown |
| `shadow-lg` | `--shadow-lg` | Modal |
| `shadow-xl` | `--shadow-xl` | Large floating layer |

**CSS variable definitions (Tailwind v4 defaults)**:

```css
/* Tailwind v4 built-in shadow variables */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

**Decision tree**:

```
┌─ "Should I add shadow?"
│
├─ Card or panel? → No — use white on slate-50
├─ Navigation? → No — no border and no shadow
├─ Button or input? → No — use border and background
├─ Floating toolbar? → Yes — shadow-sm (--shadow-sm)
├─ Modal? → Yes — overlay bg-black/75 + shadow-lg (--shadow-lg)
└─ Dropdown? → Yes — shadow-md (--shadow-md)
```

**Rules**:
- No shadow by default; use surface contrast
- Only floating layers use shadows: toolbar, modal, dropdown
- Cards, panels, and navigation should not use shadows
- Keep shadow values centralized through `--shadow-*`

---

## Surfaces

**Layering strategy**:

```
bg-slate-50  → page canvas (neutral background)
bg-white     → cards, panels, secondary nav (floating over the canvas)
bg-slate-100 → input background
bg-slate-50  → hover state, subtle background
```

**Separation strategy**: use surface contrast, not borders.

```tsx
// ✅ Correct: surface contrast
<main className="bg-slate-50 p-5">
  <div className="rounded-xl bg-white p-4">
    {/* Card floats above the canvas */}
  </div>
</main>

// ❌ Wrong: unnecessary border
<main className="bg-slate-50 p-5">
  <div className="rounded-xl border border-slate-200 bg-white p-4">
    {/* Border is unnecessary */}
  </div>
</main>
```

**Rules**:
- The page canvas always uses `bg-slate-50`
- Cards and panels use `bg-white`
- Surface contrast is the primary separation tool; avoid borders
- Form fields must live inside `bg-white` cards

---

## Anti-patterns

### Color
- ❌ `text-slate-900` on `bg-blue-500` (should use `text-white`)
- ❌ `bg-blue-500` as a large-area page background
- ❌ Pure white page background (should use `bg-slate-50`)
- ❌ Card borders where surface contrast should do the job
- ❌ Card shadows where only floating layers should have them

### Spacing
- ❌ Hard-coded pixel values such as `gap-[12px]` or `p-[20px]`
- ❌ No spacing between cards or fields
- ❌ Values outside the token scale

### Radius
- ❌ Arbitrary radius values such as `rounded-[8px]`
- ❌ Nested elements with larger radius than their parent

### Typography
- ❌ Direct `font-size` declarations
- ❌ Lowering text importance with opacity instead of size or `text-slate-500`

### Elevation
- ❌ Shadows on cards or panels
- ❌ Shadows on navigation

---

## Form Control Colors

Tailwind CSS v4 uses `accent-*` classes to set the checked color for checkbox and radio controls:

| Control Type | Tailwind Class | CSS Variable |
|--------------|----------------|--------------|
| Checkbox | `accent-blue-700` | `--color-blue-700` (theme color) |
| Radio | `accent-blue-700` | `--color-blue-700` (theme color) |
| Range | `accent-blue-700` | `--color-blue-700` (theme color) |

**Correct usage**:

```html
<!-- ✅ Correct: use accent-blue-700 (theme color) + border-slate-200 (default border) -->
<input type="checkbox" class="w-4 h-4 accent-blue-700 border-slate-200 rounded cursor-pointer">
<input type="radio" class="w-4 h-4 accent-blue-700 border-slate-200 cursor-pointer">

<!-- ❌ Wrong: border too dark -->
<input type="checkbox" class="w-4 h-4 border-slate-300">

<!-- ❌ Wrong: using a non-theme accent -->
<input type="checkbox" class="w-4 h-4 accent-blue-600">
```

**Rules**:
- Checkbox and radio checked state should use `accent-blue-700` (theme color)
- Borders should use `border-slate-200` for a softer default border
- Add `cursor-pointer` to improve interaction affordance

### Surface Anti-patterns
- ❌ Large blue brand-colored page backgrounds (should use `bg-slate-50`)
- ❌ Content placed directly on the canvas instead of inside `bg-white` cards
- ❌ Extra borders added where surface contrast already exists

### Form Control Anti-patterns
- ❌ Using `text-*` classes to color checkbox/radio controls (should use `accent-*`)
- ❌ Using non-theme accent colors (should use `accent-blue-700`)
- ❌ Using `border-slate-300` which is too dark; use `border-slate-200`
- ❌ Missing `cursor-pointer`, making click affordance weaker
