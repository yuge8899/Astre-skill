# Breadcrumb

## Runtime source

In workflow runtime, `Breadcrumb` is supplied by Layer 2 `@arco-design/web-react`.
The semantic rules below define where breadcrumb is required and how items should map to real routes.

## Purpose

Breadcrumb shows the user's current location in Multi-level page hierarchies. Use it in Detail, Editor, and Settings pages where the user has navigated more than one level deep.

## When to use

```
┌─ "Should I use Breadcrumb?"
│
├─ User is 2+ levels deep in the navigation hierarchy?
│  └─ YES — show Breadcrumb
│
├─ Top-level page (Dashboard, main list)?
│  └─ NO — no breadcrumb needed
│
├─ Settings page with SecondaryNav?
│  └─ NO — SecondaryNav provides the structural context
│
└─ Detail or Editor page accessed from a list?
   └─ YES — show Breadcrumb
```

## Anatomy

```
[Module]  /  [Section]  /  Current Page
```

- Preceding items: links (clickable, `text-brand-primary`)
- Separator: `/` — use the default, do not customize
- Current page: plain text (`text-text-primary`), not a link
- Maximum depth: 4 levels — if deeper, collapse middle items with `…`

## Example

```tsx
import { Breadcrumb } from '@arco-design/web-react'

<Breadcrumb>
  <Breadcrumb.Item href="/projects">Projects</Breadcrumb.Item>
  <Breadcrumb.Item href="/projects/q1-campaign">Q1 Campaign</Breadcrumb.Item>
  <Breadcrumb.Item>Edit Brief</Breadcrumb.Item>
</Breadcrumb>
```

## Props

| Prop | Type | Default |
|---|---|---|
| `items` | `{ label: string, href?: string }[]` | required |
| `separator` | `ReactNode` | `/` |
| `maxCount` | `number` | `4` |
| `className` | `string` | — |

## Placement

- **Position**: top of the main content area, above the page title — inside the `surface-bg` card header zone, or directly on the `brand-tertiary` canvas above the card
- **Spacing**: `mb-sm` between breadcrumb and page title

```tsx
<div className="bg-brand-tertiary p-2xl">
  <Breadcrumb items={[...]} />
  <h1 className="text-text-primary text-xl font-semibold mt-sm">Edit Brief</h1>

  <div className="bg-surface-bg rounded-corner-lg p-xl mt-lg">
    {/* page content */}
  </div>
</div>
```

## Navigation hierarchy alignment

Breadcrumb items must match the actual `SidebarNavigation` + `SecondaryNav` hierarchy:

```
SidebarNavigation → Projects          ← breadcrumb[0]
  SecondaryNav → Q1 Campaign          ← breadcrumb[1]
    Current page: Edit Brief          ← breadcrumb[2] (no link)
```

Never invent breadcrumb paths that do not correspond to real navigation routes.

## Rules

- Current page (last item) must not be a link — no `href`
- All preceding items must have `href` pointing to real routes
- Max 4 visible items — collapse middle items with `…` if deeper
- Only use on pages 2+ levels deep — no breadcrumb on top-level pages
- Breadcrumb items must map to actual navigation routes

## Anti-patterns

- ❌ Breadcrumb on a top-level page (Dashboard, root list)
- ❌ Last item is a link
- ❌ Inventing hierarchy paths that don't exist in actual routing
- ❌ More than 4 visible items without collapsing
- ❌ Using a custom separator instead of `/`
