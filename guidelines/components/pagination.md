# Pagination

## Purpose

Every data list or table must include a Pagination bar. Pagination establishes the structural contract of the data list — users expect it even when the current dataset fits on one page.

## Structure

The Astra pagination bar has three regions:

```
[ Total: 128 items   Per page: 10 ▼ ]   [ ‹  1  2  3  …  13  › ]   [ Go to: ___ page  Confirm ]
         Left                                    Center                         Right
```

- **Left**: total record count + per-page size selector
- **Center**: page number buttons with smart ellipsis
- **Right**: jump-to-page input + confirm button

## When to use

- Every data table or list with more than 1 page of records
- Even when the current data fits 1 page — always show the bar (removes jarring layout shift when data grows)
- Use `simple` mode only inside compact panels or widgets with width < 400px

## Props

| Prop | Type | Default | Notes |
|---|---|---|---|
| `total` | `number` | required | Total number of records — required for page calculation |
| `current` | `number` | `1` | Controlled current page |
| `pageSize` | `number` | `10` | Records per page |
| `pageSizeOptions` | `number[]` | `[10, 20, 50]` | Options for per-page selector |
| `onChange` | `(page, pageSize) => void` | — | Called on page change or size change |
| `showTotal` | `boolean \| (total, range) => ReactNode` | `true` | Show total count on the left |
| `showJumper` | `boolean` | `true` | Show jump-to-page input on the right |
| `showPageSize` | `boolean` | `true` | Show per-page size selector |
| `simple` | `boolean` | `false` | Compact mode — replaces page buttons with single input |
| `size` | `'mini' \| 'small' \| 'default'` | `'default'` | Visual size |

## Usage

### Standard (full-page table)

```tsx
<Pagination
  total={128}
  current={currentPage}
  pageSize={pageSize}
  pageSizeOptions={[10, 20, 50]}
  showTotal
  showJumper
  showPageSize
  onChange={(page, size) => {
    setCurrentPage(page)
    setPageSize(size)
  }}
/>
```

### Compact (widget / panel)

```tsx
<Pagination
  total={48}
  current={currentPage}
  pageSize={10}
  simple
  size="small"
  onChange={(page) => setCurrentPage(page)}
/>
```

## Smart ellipsis rule

Show first page, last page, and ±1 around the current page. Collapse the rest with `…`:

```
Current page 1:   [ 1  2  3  4  5  …  13 ]
Current page 6:   [ 1  …  5  6  7  …  13 ]
Current page 13:  [ 1  …  9  10  11  12  13 ]
```

## Placement

Always place the Pagination bar:
- **Below the table**, separated by a `border-top: 1px` divider
- Aligned with the table's full width — left region flush left, right region flush right
- Inside the same `surface-bg` card as the table — never outside the card

```tsx
<div className="bg-surface-bg rounded-corner-lg p-xl">
  <DataTable columns={columns} data={data} />
  <div className="border-t border-border-secondary pt-md">
    <Pagination total={total} current={page} onChange={setPage} />
  </div>
</div>
```

## Size selection

| Page size | Use when |
|-----------|----------|
| `10` | Default — most management pages |
| `20` | When rows are compact (1–2 lines each) |
| `50` | Export-review or audit trail views |

## Rules

- **Required on every table** — never render a table without a Pagination bar
- `total` prop is mandatory — pagination cannot function without it
- Always show `showTotal`, `showJumper`, and `showPageSize` for management page tables
- Use `simple` mode only for compact panels < 400px wide
- Place inside the same card as the table, below a `border-top` divider
- When the user changes `pageSize`, reset `current` to `1`

## Anti-patterns

- ❌ Table without any pagination
- ❌ Pagination outside the table card
- ❌ Omitting `total` prop
- ❌ Using `simple` mode on a full-page data table
- ❌ Not resetting to page 1 when page size changes
