# Table

## Purpose

Use the Table component for structured data management — displaying, sorting, filtering, and acting on collections of records. Every table must include a Pagination bar (see `pagination.md`).

## When to use

| Use Table | Use Card Grid / List |
|-----------|---------------------|
| Records have 4+ comparable attributes | Records are visual / media-first |
| Users need to scan, sort, or filter columns | Users browse rather than analyze |
| Batch operations (select multiple rows) are required | No batch operations needed |
| Data density is important | Breathing room matters more |

## Anatomy

```
┌──────────────────────────────────────────────────────────────┐
│  [Filter Bar]                                                │
├──────────────────────────────────────────────────────────────┤
│  [ ] │ Name ↑  │ Status  │ Type    │ Assignee │ Actions      │
├──────────────────────────────────────────────────────────────┤
│  [ ] │ Record 1│ Active  │ Task    │ Alice    │ [Edit][...]  │
│  [ ] │ Record 2│ Pending │ Bug     │ Bob      │ [Edit][...]  │
│  [x] │ Record 3│ Done    │ Feature │ Carol    │ [Edit][...]  │
├──────────────────────────────────────────────────────────────┤
│  Total: 128   Per page: 10 ▼  │  ‹ 1 2 3 … 13 ›  │ Go to:_ │
└──────────────────────────────────────────────────────────────┘
```

## Column definition

Each column is defined as an object:

| Field | Type | Notes |
|---|---|---|
| `title` | `string` | Column header label |
| `dataIndex` | `string` | Data property key |
| `key` | `string` | Unique column key |
| `width` | `number \| string` | Fixed or percentage width |
| `fixed` | `'left' \| 'right'` | Sticky column — use for Name and Actions |
| `sorter` | `boolean \| function` | Enable column sorting |
| `filters` | `{ text, value }[]` | Column-level filter dropdown |
| `render` | `(value, record) => ReactNode` | Custom cell renderer |
| `align` | `'left' \| 'center' \| 'right'` | Cell alignment — default left |

## Column patterns

### Name / primary identifier column
- Always fix left: `fixed: 'left'`
- Show record identifier + optional avatar or icon
- Clickable — navigates to detail page

```tsx
{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  fixed: 'left',
  width: 240,
  render: (name, record) => (
    <a href={`/records/${record.id}`} className="text-brand-primary">
      {name}
    </a>
  ),
}
```

### Status column
- Use `Badge` component for status values
- Width: 100–120px
- Not sortable (sort by created date or priority instead)

```tsx
{
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
  width: 120,
  render: (status) => <Badge variant={statusVariantMap[status]}>{status}</Badge>,
}
```

### Actions column
- Always fix right: `fixed: 'right'`
- Width: auto (leave enough space for visible actions)
- Use `ButtonGroup` or `IconButton` for row actions
- **Operation rules**:
  - Operations should not be hidden by default.
  - Display operations directly to allow users to quickly complete primary tasks.
  - If there are more than 3 operations, excess operations should be grouped into a `MoreHorizontal` menu to avoid excessive stacking.
  - Action buttons must use a uniform color (e.g., brand-primary blue) and a normal font weight (400) to avoid visual noise. Do not mix multiple colors like red for delete or gray for edit.

```tsx
{
  title: '',
  key: 'actions',
  fixed: 'right',
  width: 120,
  render: (_, record) => (
    <ButtonGroup>
      <IconButton icon={<Pencil size={16} />} onClick={() => handleEdit(record)} />
      <IconButton icon={<MoreHorizontal size={16} />} onClick={() => handleMenu(record)} />
    </ButtonGroup>
  ),
}
```

### Numeric column
- Right-align: `align: 'right'`
- Use `font-variant-numeric: tabular-nums` for alignment

## Row selection

```tsx
const rowSelection = {
  selectedRowKeys,
  onChange: (keys) => setSelectedRowKeys(keys),
  // Show batch action bar when rows are selected
}

<Table
  rowSelection={rowSelection}
  data={data}
  columns={columns}
/>
```

When rows are selected, show a **batch action bar** above the table:

```
[ 3 items selected ]  [Archive]  [Delete]  [Assign to...]  [Clear selection]
```

## Sorting

- Enable only on columns users would genuinely want to sort
- Default sort: most recent first (by `createdAt desc`)
- Show sort icon on all sortable columns — active sort highlighted in `brand-primary`
- Only one active sort at a time

```tsx
{
  title: 'Created',
  dataIndex: 'createdAt',
  sorter: true,
  defaultSortOrder: 'descend',
}
```

## Loading state

Use `loading` prop — renders a skeleton overlay while data fetches:

```tsx
<Table
  loading={isLoading}
  data={data}
  columns={columns}
/>
```

When `loading={true}`, show skeleton rows matching `pageSize`. Never show an empty table with a spinner.

## Empty state

When `data` is empty and `loading={false}`, the table renders an empty state. Always configure it:

```tsx
<Table
  data={[]}
  columns={columns}
  noDataElement={
    <EmptyState
      icon={<FileText size={48} />}
      title="No records found"
      description="Try adjusting your filters."
      action={<Button onClick={clearFilters}>Clear filters</Button>}
    />
  }
/>
```

## Scroll

For wide tables with many columns, enable horizontal scroll. Fix the name column left and actions column right:

```tsx
<Table
  scroll={{ x: 1200 }}
  columns={columns}
  data={data}
/>
```

Never let a wide table break the card layout — always use `scroll.x`.

## Props summary

| Prop | Type | Notes |
|---|---|---|
| `columns` | `ColumnDef[]` | Column definitions |
| `data` | `object[]` | Record array |
| `rowKey` | `string \| function` | Unique row identifier — required |
| `loading` | `boolean` | Show skeleton loading state |
| `rowSelection` | `object` | Row selection config |
| `pagination` | `false \| PaginationProps` | Set `false` to disable; provide props for controlled pagination |
| `scroll` | `{ x?: number, y?: number }` | Scroll constraints |
| `onChange` | `(pagination, filters, sorter) => void` | Called on sort/filter/page change |
| `noDataElement` | `ReactNode` | Custom empty state |
| `stripe` | `boolean` | Alternating row shading |

## Table + Pagination wiring

Use external controlled pagination with `onChange`:

```tsx
const [page, setPage] = useState(1)
const [pageSize, setPageSize] = useState(10)

<Table
  data={data}
  columns={columns}
  rowKey="id"
  loading={loading}
  pagination={false}    // disable built-in — use external Pagination
  onChange={(_, filters, sorter) => {
    handleSortFilter(filters, sorter)
  }}
/>

<Pagination
  total={total}
  current={page}
  pageSize={pageSize}
  onChange={(p, size) => {
    setPage(p)
    setPageSize(size)
  }}
/>
```

## Rules

- `rowKey` is required — always set a unique key
- Fix the name/primary column left and the actions column right
- Pagination is mandatory — never use `pagination={false}` without adding an external `<Pagination>`
- Use `loading` prop — never render an empty table while fetching
- Always configure `noDataElement` with a specific empty state
- Enable `scroll.x` for tables with 6+ columns
- Batch action bar must appear when rows are selected
- Operations should not be hidden by default. Show up to 3 operations directly. If more than 3, group excess operations into a "More" menu to avoid UI stacking.

## Anti-patterns

- ❌ Table without Pagination
- ❌ Missing `rowKey` prop
- ❌ Using `pagination={false}` without an external Pagination component
- ❌ Empty table without `noDataElement`
- ❌ Spinner instead of `loading={true}`
- ❌ Hiding operations by default when there are 3 or fewer operations
- ❌ No `fixed: 'right'` on the actions column for wide tables
