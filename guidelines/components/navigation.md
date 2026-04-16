# Navigation

Runtime note:
Navigation rules are semantic Astra rules.
`Tabs` are supplied by Layer 2 `Arco Tabs`; other navigation components follow the approved runtime mapping in `guidelines/setup.md`.

Astra has three levels of navigation. Use them in order — never skip a level.

| Level | Component | Width | Purpose |
|---|---|---|---|
| **Primary** | `PrimaryNav` + `PrimaryNavItem` | 110px | App-level navigation. Always present on every page. 图标+文字横向排列。 |
| **Secondary** | `SecondaryNav` + `SecondaryNavItem` | 130px | Section-level navigation (e.g. Orders sub-sections). 纯文字列表。 |
| **Tertiary** | `Tabs` | — | Content-level switching within a section. See [tabs.md](tabs.md). |

## Navigation hierarchy decision tree

```
┌─ "What navigation component should I use?"
│
├─ App-level navigation (always present)?
│  └─ PrimaryNav + PrimaryNavItem (PRIMARY) — 110px, 图标+文字横向
│
├─ Page sub-sections (orders, settings, detail views)?
│  └─ SecondaryNav + SecondaryNavItem (SECONDARY) — 130px, 纯文字
│
└─ Content switching within a section?
   └─ Tabs (TERTIARY) — see tabs.md
```

## Layout patterns

**标准布局：**
```
[ PrimaryNav 110px ] [ SecondaryNav 130px ] [ Main content (flex-1) ]
  surface-bg           surface-secondary-bg    brand-tertiary background
  图标+文字横向          纯文字列表              └── surface-bg cards float on top
  纵向排列                                     └── Breadcrumb card (64px) 在内容区域内
```

**重要规则：导航区域之间无边框、无分隔线，用背景色对比区分。**

---

## PrimaryNav

### When to use

IMPORTANT: Every desktop page MUST include PrimaryNav. No exceptions — settings pages, empty states, dashboards, editors, error pages all include the navigation.

### Props

| Prop | Type | Default |
|---|---|---|
| `children` | `ReactNode` | — |
| `footer` | `ReactNode` | — |
| `className` | `string` | — |

### Usage notes

- 110px wide, full height
- `bg-surface-bg` background
- 导航项纵向排列，每项图标+文字横向排列
- 无边框、无分隔线
- Footer items go in the **`footer`** prop

### Standard configuration

Always use this exact configuration:

- **Primary nav items:** 图标+文字横向排列，纵向堆叠
- **Footer (bottom):** Settings icon + user Avatar — always both present
- Set `active` on the item matching the current page

### Example

```tsx
import { PrimaryNav, PrimaryNavItem, Avatar } from '@figma/astraui'
import { Home, Film, Book, Folder, Settings } from 'lucide-react'

<PrimaryNav
  footer={
    <>
      <PrimaryNavItem icon={<Settings className="w-[18px] h-[18px]" strokeWidth={1.5} />} label="Settings" />
      <Avatar type="image" src="/user.jpg" size="small" shape="circle" />
    </>
  }
>
  <PrimaryNavItem icon={<Home className="w-[18px] h-[18px]" strokeWidth={1.5} />} label="Home" />
  <PrimaryNavItem icon={<Film className="w-[18px] h-[18px]" strokeWidth={1.5} />} label="Orders" active />
  <PrimaryNavItem icon={<Book className="w-[18px] h-[18px]" strokeWidth={1.5} />} label="Library" />
  <PrimaryNavItem icon={<Folder className="w-[18px] h-[18px]" strokeWidth={1.5} />} label="Projects" />
</PrimaryNav>
```

---

## PrimaryNavItem

### Props

| Prop | Type | Default |
|---|---|---|
| `icon` | `ReactNode` | required |
| `label` | `string` | required |
| `active` | `boolean` | `false` |
| `className` | `string` | — |

### Usage notes

- Default state: `text-text-secondary`, hover: `bg-bg-subtle`
- Active state: `bg-brand-tertiary` background, `text-brand-primary`
- 图标 18px，`strokeWidth={1.5}`
- 图标和文字横向排列：`flex items-center gap-xs`

---

## SecondaryNav

### When to use

Use SecondaryNav for pages with sub-sections — orders, settings, account pages, detail views. It sits between PrimaryNav and the main content area.

### Props

| Prop | Type | Default |
|---|---|---|
| `title` | `string` | required |
| `children` | `ReactNode` | required |
| `className` | `string` | — |

### Usage notes

- 130px wide, full height
- `bg-surface-secondary-bg` background
- 无边框、无分隔线
- Pass `SecondaryNavItem` components as children

### Example

```tsx
import { SecondaryNav, SecondaryNavItem } from '@figma/astraui'

<SecondaryNav title="Orders">
  <SecondaryNavItem label="All" active />
  <SecondaryNavItem label="Pending" />
  <SecondaryNavItem label="Processing" />
  <SecondaryNavItem label="Completed" />
</SecondaryNav>
```

---

## SecondaryNavItem

### Props

| Prop | Type | Default |
|---|---|---|
| `label` | `string` | required |
| `active` | `boolean` | `false` |
| `className` | `string` | — |

### Usage notes

- 纯文字，无图标
- Active state: `bg-brand-tertiary` background with `text-brand-primary`
- Inactive state: `text-text-secondary` with hover to `bg-bg-subtle`

---

## Breadcrumb

### When to use

Breadcrumb 放在内容区域的卡片内，不是固定在顶部。

### Layout

- `bg-surface-bg rounded-corner-lg px-xl py-md`
- 高度约 64px（含 padding）
- 包含面包屑导航和右侧操作按钮（搜索、通知等）

### Example

```tsx
<div className="bg-surface-bg rounded-corner-lg px-xl py-md mb-xl flex items-center justify-between">
  <div className="flex items-center gap-sm">
    <span className="text-text-secondary text-label-sm">Home</span>
    <ChevronRight className="w-3 h-3 text-text-tertiary" />
    <span className="text-text-secondary text-label-sm">Orders</span>
    <ChevronRight className="w-3 h-3 text-text-tertiary" />
    <span className="text-text-primary text-label-sm font-medium">All Orders</span>
  </div>
  <div className="flex items-center gap-lg">
    <button className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary">
      <Search className="w-[18px] h-[18px]" />
    </button>
    <button className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary">
      <Bell className="w-[18px] h-[18px]" />
    </button>
  </div>
</div>
```

---

## Full page example

```tsx
<div className="flex h-screen">
  {/* 一级导航 */}
  <PrimaryNav
    footer={
      <>
        <PrimaryNavItem icon={<Settings className="w-[18px] h-[18px]" strokeWidth={1.5} />} label="Settings" />
        <Avatar type="image" src="/user.jpg" size="small" shape="circle" />
      </>
    }
  >
    <PrimaryNavItem icon={<Home className="w-[18px] h-[18px]" strokeWidth={1.5} />} label="Home" />
    <PrimaryNavItem icon={<Film className="w-[18px] h-[18px]" strokeWidth={1.5} />} label="Orders" active />
    <PrimaryNavItem icon={<Book className="w-[18px] h-[18px]" strokeWidth={1.5} />} label="Library" />
    <PrimaryNavItem icon={<Folder className="w-[18px] h-[18px]" strokeWidth={1.5} />} label="Projects" />
  </PrimaryNav>

  {/* 二级导航 */}
  <SecondaryNav title="Orders">
    <SecondaryNavItem label="All" active />
    <SecondaryNavItem label="Pending" />
    <SecondaryNavItem label="Processing" />
    <SecondaryNavItem label="Completed" />
  </SecondaryNav>

  {/* 内容区域 */}
  <main className="flex-1 bg-brand-tertiary p-2xl overflow-y-auto">
    {/* 面包屑卡片 */}
    <div className="bg-surface-bg rounded-corner-lg px-xl py-md mb-xl flex items-center justify-between">
      <Breadcrumb items={['Home', 'Orders', 'All']} />
      <div className="flex items-center gap-lg">
        <button className="w-8 h-8 flex items-center justify-center text-text-secondary">
          <Search className="w-[18px] h-[18px]" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-text-secondary">
          <Bell className="w-[18px] h-[18px]" />
        </button>
      </div>
    </div>

    {/* 内容卡片 */}
    <h1 className="text-title text-text-primary mb-xl">Orders</h1>
    <div className="bg-surface-bg rounded-corner-lg p-xl">
      {/* Content */}
    </div>
  </main>
</div>
```

## Rules

- Every desktop page MUST include PrimaryNav — no exceptions
- PrimaryNav and SecondaryNav are separate, side-by-side panels — never combine them
- 导航区域之间无边框、无分隔线 — 用背景色对比区分
- Breadcrumb 放在内容区域卡片内，不是固定在顶部
- Never skip navigation levels — use SecondaryNav for sub-sections, not Tabs
