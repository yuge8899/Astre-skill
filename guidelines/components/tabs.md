# Tabs & SegmentedControl

## Runtime source

In workflow runtime, `Tabs` are supplied by Layer 2 `@arco-design/web-react`.
The semantic rules below still define where tabs are allowed, how much emphasis they should carry, and when to choose `SegmentedControl` instead.

## Tabs

### Navigation level

Tabs are **tertiary navigation only** — used inside the main content area to switch views within a section.

```
SidebarNavigation  (primary)
  └── SecondaryNav  (secondary)
        └── Tabs  (tertiary) ← only here
```

Never use Tabs at primary or secondary navigation level. Never skip a level.

---

### When to use

```
┌─ "Should I use Tabs here?"
│
├─ Switching content views within a single card or section?
│  └─ YES — use Tabs (tertiary)
│
├─ Toggling between 2–4 compact modes (e.g. Table / Chart, Day / Week)?
│  └─ Use SegmentedControl instead — more compact, icon-friendly
│
├─ App-level page navigation (moving between modules)?
│  └─ NO — use SidebarNavigation (primary)
│
├─ Page sub-sections (Settings categories, Detail sub-pages)?
│  └─ NO — use SecondaryNav (secondary)
│
├─ Low-priority sub-filtering ("All / Mine / Starred")?
│  └─ Use text-style Tabs (see variants below)
│
└─ More than 6 tab items?
   └─ Reconsider — use SecondaryNav (left sidebar) instead
```

---

### Variants

Three tab styles. Match style to visual weight of context.

Implementation note:
- Use raw Arco Tabs or a local adapter backed by Arco Tabs
- Preserve Astra tokens and hierarchy rules even if Arco prop names differ

#### 1. Line Tabs (default)

Standard section-level content switching inside a `surface-bg` card.

- Active state: `text-brand-primary` + underline indicator in `brand-primary`
- Inactive: `text-text-secondary`, hover → `text-text-primary`
- Placement: top of section, below card header if present

```tsx
import { Tabs } from '@arco-design/web-react'

<Tabs
>
  <Tabs.TabPane key="details" title="Details">
    <DetailsPanel />
  </Tabs.TabPane>
  <Tabs.TabPane key="activity" title="Activity">
    <ActivityPanel />
  </Tabs.TabPane>
  <Tabs.TabPane key="export" title="Export">
    <ExportPanel />
  </Tabs.TabPane>
</Tabs>
```

**When to use:** Inside content cards for switching between related panels (Detail / Activity / Log / Export).

#### 2. Card Tabs

Tab headers render as card-style buttons. Stronger visual boundary than line tabs.

**When to use:** Inside nested cards, dashboard widgets, or panels that already sit on a `surface-bg` background.

#### 3. Text Tabs (low emphasis)

Minimal filtering within a section — e.g. "All / Assigned to me / Starred".

- No underline, no background fill
- Active state: `text-brand-primary` only, no indicator bar
- Lightest visual weight

**When to use:** Sub-filter style tabs within a list section where switching is secondary to the content.

---

### Variants decision table

| Context | Tab style | Example |
|---------|-----------|---------|
| Main section content switching | Line (default) | Detail / Activity / Export |
| Sub-filter within a list | Text | All / Mine / Starred |
| Widget or nested card | Card | Dashboard tile internal tab |
| 2–4 compact mode toggle | SegmentedControl | Table ↔ Chart |

---

### Scenario catalogue

| Page type | Typical Tabs usage |
|-----------|-------------------|
| Detail / Editor page | Detail / Activity / History / Export |
| Data management page | All / Mine / Pending / Archived (text style) |
| Analytics page | Overview / Trend / Breakdown |
| Chat / Messaging page | Chat / Files / Members (inside conversation panel) |
| Settings page | Do NOT use Tabs — use SecondaryNav instead |
| Dashboard | SegmentedControl preferred for 2–4 modes |

---

### Nesting rules

Tabs can be nested, but style must change at each level:

```
Line Tabs (parent)
  └── Text Tabs or Card Tabs (child)   ✅ allowed — different style

Line Tabs (parent)
  └── Line Tabs (child)                ❌ forbidden — same style nested
```

Never place line tabs inside another line tab panel. Change to text or card style for the inner level.

---

### Extra content (action slot)

Use the header action slot provided by your Tabs adapter or page composition to place a primary action alongside the tab headers — saves vertical space and keeps actions in context.

```tsx
<Tabs>
  {/* header action slot: <Button variant="primary">New Record</Button> */}
  {/* panes */}
</Tabs>
```

Use when the active tab panel has a "Create" or "Export" action that is specific to that tab's content.

---

### Performance: lazy rendering

Enable lazy rendering when any tab panel contains tables, charts, or API-driven data:

```tsx
<Tabs>
  {/* configure your Tabs adapter for lazy rendering */}
  {/* panes */}
</Tabs>
```

Lazy rendering defers panel mount until first activation. It is **required** when any tab panel includes a data table, chart component, or makes an API call on mount.

---

### Tab count guidance

| Tab count | Guidance |
|-----------|----------|
| 2–4 | Ideal. |
| 5–6 | Acceptable if labels are short. |
| 7+ | Avoid. Use SecondaryNav (left sidebar) instead. |

---

### Props

| Prop | Type | Default |
|---|---|---|
| `TabPane` children | `ReactNode` | required |
| active/default active tab | `string` | first tab |
| `onChange` | `(tabId: string) => void` | — |
| `type` | implementation-specific | line-style by default |
| header action slot | `ReactNode` | — |
| lazy rendering flag | `boolean` | `false` |
| `className` | `string` | — |

---

### Rules

- Tabs are **tertiary navigation only** — inside main content area, never at page or section nav level
- In workflow runtime, `Tabs` come from Layer 2 `Arco Tabs`
- Text labels only — do not add icons inside Tabs
- Active tab: `text-brand-primary` + underline in `brand-primary` (line style)
- Never nest line tabs inside line tabs — change style at each nesting level
- For 7+ items, use SecondaryNav instead
- Enable lazy rendering when any tab content includes tables, charts, or async data
- Use a header action slot for tab-contextual actions (e.g., "Add", "Export")

### Anti-patterns

- ❌ Tabs used for primary navigation (use SidebarNavigation)
- ❌ Tabs used for page sub-section navigation (use SecondaryNav)
- ❌ Line tabs nested inside line tabs
- ❌ Tab labels with icons
- ❌ More than 6 tab items without reconsidering SecondaryNav
- ❌ Tab panels with tables or charts where lazy rendering is not enabled

---

## SegmentedControl

### When to use

Use SegmentedControl for compact inline switching between modes or views using icon-only segments. Typically used in toolbars or compact UI areas.

**Choose SegmentedControl over Tabs when:**
- Switching between 2–4 modes only (Table/Chart, Grid/List, Day/Week/Month)
- The switch is a view-mode toggle, not a content category switch
- Space is tight (inside toolbar, card header, or action bar)

### Props

| Prop | Type | Default |
|---|---|---|
| `segments` | `{ id: string, icon: ReactNode }[]` | required |
| `selectedSegment` | `string` | required |
| `onChange` | `(segmentId: string) => void` | required |

### Usage notes

- Icon-only segments — no text labels
- Controlled component — parent manages `selectedSegment` state
- Use `size={24}` on icons passed in the segments array

### Example

```tsx
import { LayoutList, BarChart2 } from 'lucide-react'

<SegmentedControl
  segments={[
    { id: 'table', icon: <LayoutList size={24} /> },
    { id: 'chart', icon: <BarChart2 size={24} /> },
  ]}
  selectedSegment={viewMode}
  onChange={(id) => setViewMode(id)}
/>
```

### Rules

- Use consistent icon sizes across all segments (all 24px)
- SegmentedControl is for mode switching (view layout), not content category navigation
- Maximum 4 segments — beyond that, use Tabs
- Always provide a `selectedSegment` — it is a controlled component
