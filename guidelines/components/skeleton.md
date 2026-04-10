# Skeleton

## Purpose

Skeleton screens replace loading spinners. Show the approximate shape of incoming content while data is fetching — users perceive skeleton loading as faster than a spinner.

## When to use

| Situation | Use Skeleton | Use Spinner |
|-----------|-------------|-------------|
| Page-level content load (table, card list) | ✅ Yes | ❌ No |
| Full page initial load | ✅ Yes | ❌ No |
| Button action with instant feedback (submit, save) | ❌ No | ✅ Yes (inside button) |
| Modal opening | ❌ No | ✅ Yes (inside modal) |
| Background sync (auto-save indicator) | ❌ No | ✅ Yes (top bar indicator) |

**Rule of thumb:** If the loading replaces a visible content area, use Skeleton. If it's triggered by a user action with no replaced content area, use a Spinner.

## Skeleton types

### Text skeleton

For text content — titles, descriptions, metadata rows.

```tsx
<Skeleton
  text={{ rows: 3, width: ['60%', '80%', '40%'] }}
/>
```

### Image skeleton

For thumbnails, avatars, or media placeholders.

```tsx
<Skeleton image />
```

### Table skeleton

For data tables — shows approximate row/column structure.

```tsx
<Skeleton
  text={{ rows: 8 }}    // matches expected row count
  animation
/>
```

### Card skeleton

For content cards (ItemCard, dashboard tiles).

```tsx
<Skeleton
  image
  text={{ rows: 2 }}
  animation
/>
```

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `animation` | `boolean` | `false` | Enable shimmer animation — **always enable** |
| `text` | `{ rows: number, width?: string[] }` | — | Text row configuration |
| `image` | `boolean` | `false` | Show image/avatar placeholder block |
| `className` | `string` | — | Additional classes |

## Always enable animation

```tsx
// ✅ Correct — shimmer animation shows progress
<Skeleton animation text={{ rows: 4 }} />

// ❌ Wrong — static skeleton looks broken
<Skeleton text={{ rows: 4 }} />
```

## Matching content shape

Match the skeleton to the approximate shape of the actual content:

```tsx
// For a user list with avatar + 2 text lines
<Skeleton image text={{ rows: 2, width: ['70%', '40%'] }} animation />

// For a data table with 10 rows
<Skeleton text={{ rows: 10, width: Array(10).fill('100%') }} animation />

// For a dashboard summary card
<Skeleton text={{ rows: 1, width: ['50%'] }} animation />
```

## Loading state pattern

Always pair Skeleton with the empty state and real content:

```tsx
{loading ? (
  <Skeleton animation text={{ rows: 6 }} />
) : data.length === 0 ? (
  <EmptyState title="No items" description="Create your first item." />
) : (
  <DataTable data={data} />
)}
```

## Placement rules

- Skeleton must occupy the **same space** as the content it replaces — use the same card and dimensions
- Never show Skeleton and real content simultaneously
- Minimum duration: if data loads in < 200ms, skip the skeleton (use `setTimeout` gate)
- For tables, use `rows` count matching the `pageSize` setting

## Rules

- Always use `animation` — static skeletons look broken
- Match skeleton rows to the expected content row count (use `pageSize` for tables)
- Never show Spinner in place of a Skeleton for content-area loading
- Transition directly from Skeleton → content or Skeleton → Empty State (no flash)
- Skeleton must be inside the same `surface-bg` card as the real content

## Anti-patterns

- ❌ Spinner used for page-level content loading
- ❌ Skeleton without shimmer animation
- ❌ Skeleton that doesn't match the approximate shape of the content
- ❌ Showing skeleton and content at the same time
- ❌ Missing empty state after skeleton (when data is empty)
