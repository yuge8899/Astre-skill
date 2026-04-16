# Empty State

## Purpose

Empty states communicate that a list, table, or section has no content to show. They replace raw emptiness with a clear message and — when appropriate — a recovery action.

## When to use

| Scenario | Description |
|----------|-------------|
| **Initial empty** | No records exist yet (new account, first use) |
| **No search results** | A search or filter returned zero matches |
| **Permission empty** | User has no access to any items in this section |
| **Error empty** | Data failed to load |

## Anatomy

```
          [ Icon — 48px ]

         Primary message
       Supporting message

         [ Action button ]   ← optional, only when there's a clear next step
```

- **Icon**: 48px icon from `lucide-react` that represents the content category (not a generic cloud/box)
- **Primary message**: short, specific — "No tasks yet" not "Empty"
- **Supporting message**: 1 line of context or guidance — what to do or why it's empty
- **Action**: primary action only if there's a clear recovery step ("Create task", "Clear filters")

## Copy guidelines

| Scenario | Primary message | Supporting message | Action |
|----------|----------------|-------------------|--------|
| Initial empty | "No [items] yet" | "Get started by creating your first [item]." | "New [item]" |
| No search results | "No results found" | "Try adjusting your search or filters." | "Clear filters" |
| Permission empty | "Nothing to see here" | "You don't have access to any [items] yet." | — |
| Error empty | "Couldn't load [items]" | "Check your connection and try again." | "Retry" |

## Placement

- Centered inside the content area where the list would appear
- Minimum height: same as the table/list area (use `min-h-[320px]` to prevent collapsing)
- Inside the `surface-bg` card — never on the raw `brand-tertiary` canvas

## Example

```tsx
<EmptyState
  icon={<FileText size={48} className="text-text-tertiary" />}
  title="No documents yet"
  description="Create a document to get started."
  action={
    <Button variant="primary" onClick={handleCreate}>
      New Document
    </Button>
  }
/>
```

## Props

| Prop | Type | Default |
|---|---|---|
| `icon` | `ReactNode` | — |
| `title` | `string` | required |
| `description` | `string` | — |
| `action` | `ReactNode` | — |
| `className` | `string` | — |

## Loading → Empty transition

1. **Loading**: show `Skeleton` (see `skeleton.md`) while data is fetching
2. **Loaded + empty**: replace Skeleton with Empty State
3. **Never**: show Empty State while still loading — it creates false impression

```tsx
{loading ? (
  <Skeleton rows={5} />
) : data.length === 0 ? (
  <EmptyState title="No results" description="Try adjusting your filters." />
) : (
  <DataTable data={data} />
)}
```

## Icon selection

Match icon to the content type:

| Content | Icon |
|---------|------|
| Documents / files | `FileText` |
| Tasks / todos | `CheckSquare` |
| Messages | `MessageSquare` |
| Users | `Users` |
| Data / analytics | `BarChart2` |
| Search | `Search` |
| Images / media | `Image` |

- Icon color: `text-text-tertiary` — subdued, not alarming
- Never use emoji as the icon
- Never use the generic `Inbox` or `Box` icon for all empty states — be specific

## Rules

- Always show an empty state — never show just a blank area
- Primary message must be specific to the content type (not generic "No data")
- Only include an action button if there is a clear and direct next step
- For "No search results", always include a "Clear filters" action
- Empty state must be inside the `surface-bg` card at minimum `320px` height
- Do not show Empty State while data is still loading

## Anti-patterns

- ❌ Blank white space instead of an Empty State
- ❌ Generic text like "No data" or "Empty" as the primary message
- ❌ Using emoji as the icon
- ❌ Showing Empty State during loading (use Skeleton instead)
- ❌ Action button when there is no clear recovery path
