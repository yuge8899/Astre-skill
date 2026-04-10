# Spacing Tokens

## Scale

Base-2 system. Astra uses a compact density — tight but breathable, with 4px as the standard unit.

| Value | Token | Tailwind | Frequency | Usage |
|---|---|---|---|---|
| 2px | `--space-xs` | `gap-xs`, `p-xs`, `m-xs` | Occasional | Hairline gaps, dot separators, smallest internal offsets |
| 4px | `--space-sm` | `gap-sm`, `p-sm`, `m-sm` | **Common** | ← 常规间距 — Tight inline gaps, badge padding, icon-to-label gap |
| 8px | `--space-md` | `gap-md`, `p-md`, `m-md` | **Dominant** | Component internal gaps, toolbar gaps, nav item spacing |
| 12px | `--space-lg` | `gap-lg`, `p-lg`, `m-lg` | **Dominant** | Fields inside cards, component internal padding, related groups |
| 16px | `--space-xl` | `gap-xl`, `p-xl`, `m-xl` | Common | Card padding, between section cards, side-by-side fields |
| 24px | `--space-2xl` | `gap-2xl`, `p-2xl`, `m-2xl` | Common | Page-level padding, major section separation |

The standard spacing unit is `space-sm` (4px). Dominant values are `space-md` (8px) and `space-lg` (12px). When in doubt, use `gap-md` within components and `gap-lg` between sections.

## Decision tree

```
┌─ "What spacing should I use?"
│
├─ TIGHT inline gap (related metadata, title → subtitle)?
│  └─ space-xs (4px) — e.g., mt-xs between page title and description
│
├─ SMALL component internal gap (badge padding, nav items)?
│  └─ space-sm (6px) or space-md (8px)
│
├─ FIELDS inside a card (between form fields)?
│  └─ space-lg (12px) ⭐ — flex flex-col gap-lg
│
├─ CARD PADDING (inside each card)?
│  └─ space-xl (16px) — p-xl
│
├─ BETWEEN SECTION CARDS (card stack)?
│  └─ space-xl (16px) — flex flex-col gap-xl
│
├─ SIDE-BY-SIDE FIELDS (first name + last name)?
│  └─ space-xl (16px) — flex gap-xl
│
├─ BELOW SECTION HEADING inside a card?
│  └─ space-lg (12px) — mb-lg
│
├─ BELOW PAGE HEADER (before card stack)?
│  └─ space-xl (16px) — mb-xl
│
├─ PAGE-LEVEL PADDING (main content area)?
│  └─ space-2xl (24px) — p-2xl
│
└─ BETWEEN MAJOR DASHBOARD SECTIONS?
   └─ space-2xl (24px) — gap-2xl
```

## Quick reference by context

| Context | Token | Value | Tailwind |
|---|---|---|---|
| Main content padding | `space-2xl` | 24px | `p-2xl` |
| Between section cards | `space-xl` | 16px | `gap-xl` |
| Between dashboard sections | `space-2xl` | 24px | `gap-2xl` |
| Inside cards (padding) | `space-xl` | 16px | `p-xl` |
| Between fields inside a card | `space-lg` | 12px | `gap-lg` |
| Between side-by-side fields | `space-xl` | 16px | `gap-xl` |
| Below section heading in card | `space-lg` | 12px | `mb-lg` |
| Below page header | `space-xl` | 16px | `mb-xl` |
| Page header title to subtitle | `space-xs` | 4px | `mt-xs` |

## Rules

IMPORTANT: Spacing is NOT optional. If cards or fields are touching with no gap, the layout is wrong. Always use flexbox with gap tokens.

- Always use spacing tokens — never hardcode pixel values
- Use `flex flex-col gap-lg` between fields inside a card
- Use `flex flex-col gap-xl` between section cards
- Use `flex gap-xl` with `flex-1` children for side-by-side fields
- All spacing values must come from this scale — do not use values like 5px, 10px, 15px, or 18px
- Always use `p-2xl` on the `<main>` content area — content must never touch edges
