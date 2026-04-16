# Page Templates

Astra has four standard desktop page templates. All templates share the same shell: `SidebarNavigation` + main content area on `brand-tertiary` canvas.

Choose the template that matches the primary user goal of the page.

---

## Template 1: Dashboard

**Primary goal**: Overview — see current state, recent activity, pending actions.

### Layout

```
┌──────────────────────────────────────────────────┐
│ [Page Header: Title + Primary CTA]               │
├──────────┬────────────────┬───────────────────────┤
│ Summary  │ Summary Card 2 │ Summary Card 3        │
│ Card 1   │                │                       │
├──────────┴───────────┬────┴───────────────────────┤
│ Recent Activity      │ Pending Actions            │
│ (list / timeline)    │ (queue / task list)        │
└──────────────────────┴────────────────────────────┘
```

### Shell

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <main className="flex-1 bg-brand-tertiary overflow-y-auto p-2xl">
    {/* Page header */}
    <div className="flex items-center justify-between mb-xl">
      <h1 className="text-text-primary text-xl font-semibold">Dashboard</h1>
      <Button variant="primary">New Item</Button>
    </div>

    {/* Summary cards row */}
    <div className="grid grid-cols-3 gap-xl mb-xl">
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
    </div>

    {/* 2-column section row */}
    <div className="grid grid-cols-2 gap-xl">
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        {/* Recent activity */}
      </div>
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        {/* Pending actions */}
      </div>
    </div>
  </main>
</div>
```

### Rules

- Max 4 summary cards in top row (3 is standard)
- Each card: `bg-surface-bg rounded-corner-lg p-xl`
- No borders on cards — surface contrast provides separation
- 2-column section max for the main content row

---

## Template 2: Data List / Management

**Primary goal**: Browse, search, filter, and act on a dataset.

### Layout

```
┌───────────────────────────────────────────────────────┐
│ [Page Header: Title + Primary CTA]                    │
├───────────────────────────────────────────────────────┤
│ [Filter Bar — collapsed, 4 fields + Search/Reset]     │
├───────────────────────────────────────────────────────┤
│ [Table with sortable columns + row actions]           │
│                                                       │
│ [Pagination: Total · Per page · Page numbers · Jump]  │
└───────────────────────────────────────────────────────┘
```

### Shell

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <main className="flex-1 bg-brand-tertiary overflow-y-auto p-2xl">
    <div className="flex items-center justify-between mb-xl">
      <h1 className="text-text-primary text-xl font-semibold">Records</h1>
      <Button variant="primary">New Record</Button>
    </div>

    <div className="bg-surface-bg rounded-corner-lg p-xl">
      {/* Filter Bar (collapsed by default if >4 fields) */}
      <FilterBar fields={filterFields} onSearch={handleSearch} />

      <div className="border-t border-border-secondary my-md" />

      {/* Table */}
      <Table
        columns={columns}
        data={data}
        rowKey="id"
        loading={loading}
        pagination={false}
        rowSelection={rowSelection}
      />

      {/* Pagination */}
      <div className="border-t border-border-secondary pt-md mt-sm">
        <Pagination total={total} current={page} pageSize={pageSize} onChange={handlePageChange} />
      </div>
    </div>
  </main>
</div>
```

### Rules

- Filter bar, table, and pagination are in the **same card**
- Filter bar collapses to 4 fields when >4 filters exist
- Pagination is mandatory
- Row selection enables a batch action bar above the table

---

## Template 3: Detail / Editor

**Primary goal**: View or edit a single complex entity.

### Layout — 3 column

```
┌──────────────────────────────────────────────────────┐
│ [Breadcrumb]                                         │
│ [Page title + Actions]                               │
├──────────────┬──────────────────────┬────────────────┤
│ Entity list  │ Main content / Editor│ Properties     │
│ (left panel) │ (center — flex-1)    │ (right panel)  │
│ 240px fixed  │                      │ 280px fixed    │
└──────────────┴──────────────────────┴────────────────┘
```

### Shell

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <main className="flex-1 bg-brand-tertiary overflow-hidden flex flex-col">
    {/* Breadcrumb + header */}
    <div className="p-2xl pb-0">
      <Breadcrumb items={breadcrumbItems} />
      <div className="flex items-center justify-between mt-sm mb-xl">
        <h1 className="text-text-primary text-xl font-semibold">{title}</h1>
        <div className="flex gap-sm">
          <Button variant="neutral">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </div>
    </div>

    {/* 3-column content */}
    <div className="flex flex-1 overflow-hidden gap-xl px-2xl pb-2xl">
      <div className="w-[240px] flex-shrink-0 bg-surface-bg rounded-corner-lg overflow-y-auto">
        {/* Entity list / nav */}
      </div>

      <div className="flex-1 bg-surface-bg rounded-corner-lg overflow-y-auto p-xl">
        {/* Main editor / content */}
      </div>

      <div className="w-[280px] flex-shrink-0 bg-surface-bg rounded-corner-lg overflow-y-auto p-xl">
        {/* Properties / metadata panel */}
      </div>
    </div>
  </main>
</div>
```

### Rules

- Always show Breadcrumb (user is 2+ levels deep)
- Left panel: fixed 240px — entity navigation or list
- Center: `flex-1` — primary editing/viewing area
- Right panel: fixed 280px — metadata, properties, or context
- All three panels are `bg-surface-bg` cards

---

## Template 4: Form / Settings

**Primary goal**: Configure preferences, fill a structured form, manage settings.

### Layout — with SecondaryNav

```
┌──────────────────────────────────────────────────────┐
│ SidebarNavigation │ SecondaryNav │ Form content area │
│     60px          │   200px      │   flex-1          │
│                   │ [Profile]    │                   │
│                   │ [Account]    │ ┌───────────────┐ │
│                   │ [Security]   │ │ Section Card  │ │
│                   │ [Billing]    │ │               │ │
│                   │ [Team]  ←HL  │ │  [Fields...]  │ │
│                   │              │ │               │ │
│                   │              │ │ [Save] [Reset]│ │
│                   │              │ └───────────────┘ │
└──────────────────────────────────────────────────────┘
```

### Shell

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <SecondaryNav>
    <SecondaryNavItem icon={<User className="size-full" strokeWidth={1.5} />} label="Profile" />
    <SecondaryNavItem icon={<Shield className="size-full" strokeWidth={1.5} />} label="Security" active />
    <SecondaryNavItem icon={<CreditCard className="size-full" strokeWidth={1.5} />} label="Billing" />
  </SecondaryNav>

  <main className="flex-1 bg-brand-tertiary overflow-y-auto p-2xl">
    <h1 className="text-text-primary text-xl font-semibold mb-xl">Security</h1>

    {/* Stacked section cards, max-w-3xl */}
    <div className="max-w-3xl flex flex-col gap-xl">

      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="text-text-primary font-semibold mb-lg">Password</h2>
        <InputField label="Current password" type="password" />
        <InputField label="New password" type="password" />
        <div className="flex justify-end gap-sm mt-lg">
          <Button variant="neutral">Cancel</Button>
          <Button variant="primary">Update password</Button>
        </div>
      </div>

      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="text-text-primary font-semibold mb-lg">Two-factor authentication</h2>
        <SwitchField label="Enable 2FA" description="Add an extra layer of security." />
        <div className="flex justify-end mt-lg">
          <Button variant="primary">Save</Button>
        </div>
      </div>

    </div>
  </main>
</div>
```

### Rules

- Always use `SecondaryNav` for Settings — never Tabs
- Form content max width: `max-w-3xl` (768px)
- Each logical section = separate `bg-surface-bg` card with `Save` button at the bottom
- Never one giant form — split into focused cards (Password, 2FA, Notifications, etc.)
- No breadcrumb needed — SecondaryNav provides structural location

---

## Template selection guide

```
┌─ "Which template?"
│
├─ Primary goal: see current state + recent activity?
│  └─ Template 1: Dashboard
│
├─ Primary goal: browse, search, manage records?
│  └─ Template 2: Data List
│
├─ Primary goal: view or edit one specific entity?
│  └─ Template 3: Detail / Editor
│
└─ Primary goal: configure settings / fill a form?
   └─ Template 4: Form / Settings
```
