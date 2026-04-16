# Page Templates

## Template Selection

```
┌─ "Which template?"
│
├─ Need current status + recent activity? → Dashboard
├─ Need to browse, search, and manage records? → Data List
├─ Need to inspect or edit a single entity? → Detail / Editor
└─ Need settings or a structured form? → Form / Settings
```

---

## Template 1: Dashboard

**Goal**: Overview of current status, recent activity, and pending actions.

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <main className="flex-1 overflow-y-auto bg-brand-tertiary p-2xl">
    {/* Page header */}
    <div className="mb-xl flex items-center justify-between">
      <h1 className="text-xl font-semibold text-text-primary">Dashboard</h1>
      <Button variant="primary">New Item</Button>
    </div>

    {/* Summary cards row */}
    <div className="mb-xl grid grid-cols-3 gap-xl">
      <div className="rounded-corner-lg bg-surface-bg p-xl">{/* Summary */}</div>
      <div className="rounded-corner-lg bg-surface-bg p-xl">{/* Summary */}</div>
      <div className="rounded-corner-lg bg-surface-bg p-xl">{/* Summary */}</div>
    </div>

    {/* 2-column section row */}
    <div className="grid grid-cols-2 gap-xl">
      <div className="rounded-corner-lg bg-surface-bg p-xl">{/* Recent activity */}</div>
      <div className="rounded-corner-lg bg-surface-bg p-xl">{/* Pending actions */}</div>
    </div>
  </main>
</div>
```

**Rules**: At most 4 summary cards, no borders, and no more than a 2-column section split.

---

## Template 1.5: Analytics Dashboard

**Goal**: Data overview with metrics, trend charts, and comparison analysis.

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <main className="flex-1 overflow-y-auto bg-brand-tertiary p-2xl">
    <div className="mb-xl flex items-center justify-between">
      <h1 className="text-xl font-semibold text-text-primary">Analytics</h1>
      <Button variant="neutral">Export</Button>
    </div>

    {/* Top stats - 4 cards */}
    <div className="mb-xl grid grid-cols-4 gap-xl">
      <div className="rounded-corner-lg bg-surface-bg p-xl">
        <p className="mb-xs text-sm text-text-secondary">Total Revenue</p>
        <p className="text-2xl font-semibold text-text-primary">$24,580</p>
        <p className="mt-xs text-sm text-success">+12.5%</p>
      </div>
      {/* More stat cards... */}
    </div>

    {/* Charts row */}
    <div className="mb-xl grid grid-cols-2 gap-xl">
      <div className="rounded-corner-lg bg-surface-bg p-xl">
        <h2 className="mb-lg font-semibold text-text-primary">Revenue Trend</h2>
        <ChartContainer className="h-[300px]" config={chartConfig}>
          {/* Chart */}
        </ChartContainer>
      </div>
      <div className="rounded-corner-lg bg-surface-bg p-xl">
        <h2 className="mb-lg font-semibold text-text-primary">Comparison</h2>
        <ChartContainer className="h-[300px]" config={chartConfig}>
          {/* Chart */}
        </ChartContainer>
      </div>
    </div>

    {/* Data table */}
    <div className="rounded-corner-lg bg-surface-bg p-xl">
      <h2 className="mb-lg font-semibold text-text-primary">Recent Transactions</h2>
      <Table columns={columns} data={data} />
    </div>
  </main>
</div>
```

**Rules**:
- Use 4 stat cards at the top.
- Place charts in separate cards with fixed height.
- Keep color restrained: primary data can use the brand color, secondary data should use neutral grays.

---

## Template 2: Data List / Management

**Goal**: Browse, search, filter, and operate on a dataset.

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <main className="flex-1 overflow-y-auto bg-brand-tertiary p-2xl">
    <div className="mb-xl flex items-center justify-between">
      <h1 className="text-xl font-semibold text-text-primary">Records</h1>
      <Button variant="primary">New Record</Button>
    </div>

    <div className="rounded-corner-lg bg-surface-bg p-xl">
      {/* Filter Bar */}
      <div className="mb-md flex items-center gap-lg">
        <InputField placeholder="Search..." />
        <SelectField options={filterOptions} />
        <Button variant="neutral">Reset</Button>
      </div>

      <div className="my-md border-t border-border-secondary" />

      {/* Table */}
      <Table
        columns={columns}
        data={data}
        loading={loading}
        pagination={false}
        rowKey="id"
      />

      {/* Pagination */}
      <div className="mt-sm border-t border-border-secondary pt-md">
        <Pagination
          current={page}
          onChange={(p, size) => {
            setPage(p);
            setPageSize(size);
          }}
          pageSize={pageSize}
          total={total}
        />
      </div>
    </div>
  </main>
</div>
```

**Rules**:
- Keep the filter bar, table, and pagination inside the same card.
- Pagination is mandatory.
- When row selection exists, provide a bulk-action bar.

---

## Template 3: Detail / Editor

**Goal**: Inspect or edit a single complex entity.

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <main className="flex flex-1 flex-col overflow-hidden bg-brand-tertiary">
    {/* Breadcrumb + header */}
    <div className="p-2xl pb-0">
      <Breadcrumb items={breadcrumbItems} />
      <div className="mt-sm mb-xl flex items-center justify-between">
        <h1 className="text-xl font-semibold text-text-primary">{title}</h1>
        <div className="flex gap-sm">
          <Button variant="neutral">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </div>
    </div>

    {/* 3-column content */}
    <div className="flex flex-1 gap-xl overflow-hidden px-2xl pb-2xl">
      {/* Left panel - Entity list */}
      <div className="w-[240px] flex-shrink-0 overflow-y-auto rounded-corner-lg bg-surface-bg">
        <div className="p-lg">
          {/* Entity list */}
        </div>
      </div>

      {/* Center - Main editor */}
      <div className="flex-1 overflow-y-auto rounded-corner-lg bg-surface-bg p-xl">
        {/* Main content */}
      </div>

      {/* Right panel - Properties */}
      <div className="w-[280px] flex-shrink-0 overflow-y-auto rounded-corner-lg bg-surface-bg p-xl">
        {/* Properties / metadata */}
      </div>
    </div>
  </main>
</div>
```

**Rules**:
- Always include a breadcrumb with 2 or more hierarchy levels.
- Left panel: fixed `240px`.
- Center panel: `flex-1`.
- Right panel: fixed `280px`.
- All three panels are `bg-surface-bg` cards.

---

## Template 4: Form / Settings

**Goal**: Configure preferences or complete a structured form.

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <SecondaryNav title="Settings">
    <SecondaryNavItem icon={<User />} label="Profile" />
    <SecondaryNavItem active icon={<Shield />} label="Security" />
    <SecondaryNavItem icon={<CreditCard />} label="Billing" />
  </SecondaryNav>

  <main className="flex-1 overflow-y-auto bg-brand-tertiary p-2xl">
    <h1 className="mb-xl text-xl font-semibold text-text-primary">Security</h1>

    <div className="flex max-w-3xl flex-col gap-xl">
      {/* Password section */}
      <div className="rounded-corner-lg bg-surface-bg p-xl">
        <h2 className="mb-lg font-semibold text-text-primary">Password</h2>
        <div className="flex flex-col gap-lg">
          <InputField label="Current password" type="password" />
          <InputField label="New password" type="password" />
        </div>
        <div className="mt-lg flex justify-end gap-sm">
          <Button variant="neutral">Cancel</Button>
          <Button variant="primary">Update</Button>
        </div>
      </div>

      {/* 2FA section */}
      <div className="rounded-corner-lg bg-surface-bg p-xl">
        <h2 className="mb-lg font-semibold text-text-primary">Two-factor authentication</h2>
        <SwitchField
          description="Add an extra layer of security."
          label="Enable 2FA"
        />
        <div className="mt-lg flex justify-end">
          <Button variant="primary">Save</Button>
        </div>
      </div>
    </div>
  </main>
</div>
```

**Rules**:
- Settings pages use `SecondaryNav`, not Tabs.
- Forms should stay within `max-w-3xl`.
- Each logical block should live in its own card.
- Each card should end with a Save-style action area.
