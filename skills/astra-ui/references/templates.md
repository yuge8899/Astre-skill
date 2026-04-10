# Page Templates

## Template 选择

```
┌─ "Which template?"
│
├─ 查看当前状态 + 最近活动？→ Dashboard
├─ 浏览、搜索、管理记录？→ Data List
├─ 查看或编辑单个实体？→ Detail / Editor
└─ 配置设置 / 填写表单？→ Form / Settings
```

---

## Template 1: Dashboard

**目标**：概览 — 查看当前状态、最近活动、待处理操作

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
      <div className="bg-surface-bg rounded-corner-lg p-xl">{/* Summary */}</div>
      <div className="bg-surface-bg rounded-corner-lg p-xl">{/* Summary */}</div>
      <div className="bg-surface-bg rounded-corner-lg p-xl">{/* Summary */}</div>
    </div>

    {/* 2-column section row */}
    <div className="grid grid-cols-2 gap-xl">
      <div className="bg-surface-bg rounded-corner-lg p-xl">{/* Recent activity */}</div>
      <div className="bg-surface-bg rounded-corner-lg p-xl">{/* Pending actions */}</div>
    </div>
  </main>
</div>
```

**规则**：最多 4 个摘要卡片，无边框，2 列区块最大。

---

## Template 1.5: Analytics Dashboard

**目标**：数据概览 — 统计指标、趋势图表、对比分析

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <main className="flex-1 bg-brand-tertiary overflow-y-auto p-2xl">
    <div className="flex items-center justify-between mb-xl">
      <h1 className="text-text-primary text-xl font-semibold">Analytics</h1>
      <Button variant="neutral">Export</Button>
    </div>

    {/* Top stats - 4 cards */}
    <div className="grid grid-cols-4 gap-xl mb-xl">
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <p className="text-text-secondary text-sm mb-xs">Total Revenue</p>
        <p className="text-text-primary text-2xl font-semibold">$24,580</p>
        <p className="text-success text-sm mt-xs">+12.5%</p>
      </div>
      {/* More stat cards... */}
    </div>

    {/* Charts row */}
    <div className="grid grid-cols-2 gap-xl mb-xl">
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="text-text-primary font-semibold mb-lg">Revenue Trend</h2>
        <ChartContainer config={chartConfig} className="h-[300px]">
          {/* Chart */}
        </ChartContainer>
      </div>
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="text-text-primary font-semibold mb-lg">Comparison</h2>
        <ChartContainer config={chartConfig} className="h-[300px]">
          {/* Chart */}
        </ChartContainer>
      </div>
    </div>

    {/* Data table */}
    <div className="bg-surface-bg rounded-corner-lg p-xl">
      <h2 className="text-text-primary font-semibold mb-lg">Recent Transactions</h2>
      <Table columns={columns} data={data} />
    </div>
  </main>
</div>
```

**规则**：
- 顶部 4 个统计卡片
- 图表在独立卡片内，高度固定
- 配色克制：主数据用 brand-primary，其他用中性灰

---

## Template 2: Data List / Management

**目标**：浏览、搜索、过滤、操作数据集

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <main className="flex-1 bg-brand-tertiary overflow-y-auto p-2xl">
    <div className="flex items-center justify-between mb-xl">
      <h1 className="text-text-primary text-xl font-semibold">Records</h1>
      <Button variant="primary">New Record</Button>
    </div>

    <div className="bg-surface-bg rounded-corner-lg p-xl">
      {/* Filter Bar */}
      <div className="flex items-center gap-lg mb-md">
        <InputField placeholder="Search..." />
        <SelectField options={filterOptions} />
        <Button variant="neutral">Reset</Button>
      </div>

      <div className="border-t border-border-secondary my-md" />

      {/* Table */}
      <Table
        columns={columns}
        data={data}
        rowKey="id"
        loading={loading}
        pagination={false}
      />

      {/* Pagination */}
      <div className="border-t border-border-secondary pt-md mt-sm">
        <Pagination
          total={total}
          current={page}
          pageSize={pageSize}
          onChange={(p, size) => {
            setPage(p)
            setPageSize(size)
          }}
        />
      </div>
    </div>
  </main>
</div>
```

**规则**：
- 过滤栏、表格、分页在同一卡片内
- 分页必须存在
- 行选择启用批量操作栏

---

## Template 3: Detail / Editor

**目标**：查看或编辑单个复杂实体

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
      {/* Left panel - Entity list */}
      <div className="w-[240px] flex-shrink-0 bg-surface-bg rounded-corner-lg overflow-y-auto">
        <div className="p-lg">
          {/* Entity list */}
        </div>
      </div>

      {/* Center - Main editor */}
      <div className="flex-1 bg-surface-bg rounded-corner-lg overflow-y-auto p-xl">
        {/* Main content */}
      </div>

      {/* Right panel - Properties */}
      <div className="w-[280px] flex-shrink-0 bg-surface-bg rounded-corner-lg overflow-y-auto p-xl">
        {/* Properties / metadata */}
      </div>
    </div>
  </main>
</div>
```

**规则**：
- 始终有 Breadcrumb（2+ 层级深）
- 左面板：固定 240px
- 中间：`flex-1`
- 右面板：固定 280px
- 三个面板都是 `bg-surface-bg` 卡片

---

## Template 4: Form / Settings

**目标**：配置偏好、填写结构化表单

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <SecondaryNav title="Settings">
    <SecondaryNavItem icon={<User />} label="Profile" />
    <SecondaryNavItem icon={<Shield />} label="Security" active />
    <SecondaryNavItem icon={<CreditCard />} label="Billing" />
  </SecondaryNav>

  <main className="flex-1 bg-brand-tertiary overflow-y-auto p-2xl">
    <h1 className="text-text-primary text-xl font-semibold mb-xl">Security</h1>

    <div className="max-w-3xl flex flex-col gap-xl">
      {/* Password section */}
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="text-text-primary font-semibold mb-lg">Password</h2>
        <div className="flex flex-col gap-lg">
          <InputField label="Current password" type="password" />
          <InputField label="New password" type="password" />
        </div>
        <div className="flex justify-end gap-sm mt-lg">
          <Button variant="neutral">Cancel</Button>
          <Button variant="primary">Update</Button>
        </div>
      </div>

      {/* 2FA section */}
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="text-text-primary font-semibold mb-lg">Two-factor authentication</h2>
        <SwitchField
          label="Enable 2FA"
          description="Add an extra layer of security."
        />
        <div className="flex justify-end mt-lg">
          <Button variant="primary">Save</Button>
        </div>
      </div>
    </div>
  </main>
</div>
```

**规则**：
- Settings 用 SecondaryNav，不用 Tabs
- 表单 max-w-3xl
- 每个逻辑区块 = 独立卡片
- 每个卡片底部有 Save 按钮