---
name: astra-ui
description: "Astra UI设计系统工作流。创建符合Astra规范的页面、选择组件、验证合规性。触发词：astra page, astra component, astra layout, astra validate, 新建页面, 组件选择, 布局选择, 设置页面, 数据列表, dashboard"
---

# Astra UI 设计系统

Astra 是一个 B2C SaaS 产品的 UI 设计系统，风格：**极简、干净、透气**。

## 快速入口

按任务类型直接进入：

| 任务 | 执行流程 |
|------|----------|
| 新建页面 | 1.读规则 → 2.选模板 → 3.选组件 → 4.验证 |
| 部分更新 | 1.读相关规则 → 2.改 → 3.验证 |
| 组件选择 | 1.读组件规则 → 2.选择 → 3.验证（可选） |
| 验证页面 | 1.读规则 → 2.检查 → 3.报告问题 |

---

## 设计原则（强制）

Astra 是专业 B2C SaaS 产品设计系统，风格：**极简、克制、专业**。

### 核心风格

| 原则 | 说明 |
|------|------|
| **极简配色** | 90% 中性色，品牌色仅用于主按钮和极少数高亮 |
| **卡片式布局** | 内容区用 `surface-bg` 卡片，浮在 `brand-tertiary` 画布上 |
| **无边框设计** | 用表面色对比分隔，不用边框线 |
| **柔和阴影** | 仅用于浮动弹层（modal、dropdown），卡片不用阴影 |
| **充足留白** | 卡片间距 `gap-xl`，内边距 `p-xl`，页面边距 `p-2xl` |
| **整洁对齐** | 网格布局，一致的间距节奏 |

### 颜色使用规则（严格遵守）

```
页面结构颜色分配：
├── SidebarNavigation（60px）→ 深色背景，白色图标
├── 主画布 → brand-tertiary（淡紫灰，提供品牌氛围）
└── 内容卡片 → surface-bg（浅灰白，干净中性）

品牌色使用（极度克制）：
├── 主按钮背景 → brand-primary（仅主要 CTA）
├── 激活状态 → brand-primary（导航选中、tab 选中）
└── 禁止使用 → 卡片背景、大区块背景、装饰元素

禁止事项：
❌ 多种颜色混用
❌ 彩色卡片背景
❌ 渐变背景
❌ 彩色边框
❌ 强调色用于装饰
```

### 卡片设计规则

```tsx
// 正确：干净的卡片
<div className="bg-surface-bg rounded-corner-lg p-xl">
  {/* 内容 */}
</div>

// 错误：不要加边框、阴影
<div className="bg-surface-bg rounded-corner-lg p-xl border border-gray-200 shadow-sm">
  {/* 禁止！卡片不需要边框和阴影 */}
</div>
```

**规则**：
- 卡片背景：`surface-bg`（中性浅色）
- 圆角：`rounded-corner-lg`（12px）
- 内边距：`p-xl`（24px）
- 无边框：不使用 `border`
- 无阴影：不使用 `shadow`（阴影仅用于 modal、dropdown）

---

## 硬规则（必须遵守）

### 布局规则

1. **每个桌面页面必须包含 `SidebarNavigation`** — 60px 深色图标栏
2. **页面背景永远是 `brand-tertiary`** — 淡紫灰，不是白色
3. **内容卡片使用 `surface-bg`** — 浮在画布上
4. **卡片无边框无阴影** — 表面色对比提供分隔
5. **间距使用 token** — `gap-xl`、`p-2xl`，禁止硬编码像素

### 颜色规则

6. **禁止大面积使用 `brand-primary` 背景** — 仅用于主按钮
7. **每页最多一个 `primary` 按钮** — 其他用 `neutral` 或 `subtle`
8. **禁止彩色装饰** — 不用渐变、彩色边框、彩色背景块
9. **图标始终中性色** — 不用品牌色图标

### 组件规则

10. **使用设计系统组件** — `InputField` 不是 `<input>`
11. **图标来源**：`lucide-react` — 禁止内联 SVG
12. **导航层级严格**：`SidebarNavigation` → `SecondaryNav` → `Tabs`，不可跳级

### 依赖栈（三层）

在任何组件选择前，预设依赖：

| 层级 | 来源 | 用途 |
|------|------|------|
| Layer 1 | `shadcn/ui` + `lucide-react` | 通用原语（按钮、输入、卡片、弹层等） |
| Layer 2 | `@arco-design/web-react` `Tabs` | 区域内视图切换 |
| Layer 3 | `@figma/astraui` `CurrencyExchange` | 外汇兑换流程 |

---

## 页面模板（4 个标准模板）

### Template 1: Dashboard

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

**规则**：
- 最多 4 个摘要卡片（标准是 3 个）
- 每个卡片：`bg-surface-bg rounded-corner-lg p-xl`
- 无边框 — 表面对比分隔

---

### Template 2: Data List / Management

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
      <FilterBar fields={filterFields} onSearch={handleSearch} />

      <div className="border-t border-border-secondary my-md" />

      {/* Table */}
      <Table columns={columns} data={data} rowKey="id" />

      {/* Pagination */}
      <div className="border-t border-border-secondary pt-md mt-sm">
        <Pagination total={total} current={page} pageSize={pageSize} />
      </div>
    </div>
  </main>
</div>
```

**规则**：
- 过滤栏、表格、分页在**同一卡片**内
- 过滤栏 >4 字段时折叠
- 分页必须存在
- 行选择启用批量操作栏

---

### Template 3: Detail / Editor

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
      <div className="w-[240px] flex-shrink-0 bg-surface-bg rounded-corner-lg overflow-y-auto">
        {/* Entity list */}
      </div>

      <div className="flex-1 bg-surface-bg rounded-corner-lg overflow-y-auto p-xl">
        {/* Main editor */}
      </div>

      <div className="w-[280px] flex-shrink-0 bg-surface-bg rounded-corner-lg overflow-y-auto p-xl">
        {/* Properties panel */}
      </div>
    </div>
  </main>
</div>
```

**规则**：
- 始终显示 Breadcrumb
- 左面板：固定 240px — 实体导航
- 中间：`flex-1` — 主编辑区
- 右面板：固定 280px — 属性/元数据
- 三个面板都是 `bg-surface-bg` 卡片

---

### Template 4: Form / Settings

**目标**：配置偏好、填写结构化表单、管理设置

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <SecondaryNav>
    <SecondaryNavItem icon={<User />} label="Profile" />
    <SecondaryNavItem icon={<Shield />} label="Security" active />
    <SecondaryNavItem icon={<CreditCard />} label="Billing" />
  </SecondaryNav>

  <main className="flex-1 bg-brand-tertiary overflow-y-auto p-2xl">
    <h1 className="text-text-primary text-xl font-semibold mb-xl">Security</h1>

    <div className="max-w-3xl flex flex-col gap-xl">
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="text-text-primary font-semibold mb-lg">Password</h2>
        <InputField label="Current password" type="password" />
        <InputField label="New password" type="password" />
        <div className="flex justify-end gap-sm mt-lg">
          <Button variant="neutral">Cancel</Button>
          <Button variant="primary">Update</Button>
        </div>
      </div>
    </div>
  </main>
</div>
```

**规则**：
- Settings 必须用 `SecondaryNav`，不用 Tabs
- 表单最大宽度：`max-w-3xl`（768px）
- 每个逻辑区块 = 独立 `bg-surface-bg` 卡片
- 每个卡片底部有 Save 按钮

---

## Layout 决策树

```
页面类型判断
│
├─ 表单/设置/账户/偏好页面？
│  └─ Form / Settings Layout
│     → 有子区块？加 SecondaryNav
│     → 无子区块？仅 SidebarNavigation
│
├─ Dashboard/库/画廊/重复内容页面？
│  └─ Content / Dashboard Layout
│     → 重复卡片？用 grid
│     → 需侧边详情面板？用 split layout
│
├─ 有稳定子区块的页面？
│  └─ Sub-section Layout
│     → 页面级持久子区块？SecondaryNav
│     → 仅区域内切换？Tabs（在内容区域内）
│
├─ 编辑器/画布/工具密集型？
│  └─ Editor Layout
│     → 浮动上下文工具？Toolbar
│     → 持久二级结构？侧面板或 SecondaryNav
│
├─ Chat/AI 交互？
│  └─ Chat / AI Layout
│     → 新建 AI 流程？AIVideoCreation 入口
│     → 持续对话？PromptPane 布局
│
└─ 空状态或低数据？
   └─ Empty State Layout
      → 整页空？居中页面级空状态
      → 区域空？区域内空状态
```

### SecondaryNav vs Tabs

```
需要二级导航？
│
├─ 页面级持久子区块？
│  └─ SecondaryNav
│
└─ 仅一个内容区域内的视图切换？
   └─ Tabs（Layer 2 Arco Tabs）
```

---

## Component 决策树

### Actions

```
触发操作
│
├─ 文字标签操作？
│  └─ Button
│     ├─ 主操作（每区块一个）→ variant="primary"
│     ├─ 辅助操作 → variant="neutral"
│     └─ 低强调操作 → variant="subtle"
│
├─ 纯图标操作？
│  └─ IconButton
│
├─ 多个相关操作分组？
│  └─ ButtonGroup
│
└─ 收藏/星标切换？
   └─ FavoriteButton
```

**Button 图标规则**：
- 使用 `iconStart` 或 `iconEnd`
- 图标尺寸：`size={16}`
- 禁止自定义 prop 如 `leftIcon`

### Inputs

```
数据输入
│
├─ 货币对/外汇报价/汇率转换？
│  └─ CurrencyExchange（需 Layer 3 预设）
│
├─ 短文本？
│  └─ InputField
│
├─ 长文本？
│  └─ TextareaField
│
├─ 从预定义选项选择？
│  └─ SelectField
│
├─ 互斥选项？
│  └─ RadioGroup
│
├─ 带标签的布尔设置？
│  └─ SwitchField
│
├─ 表单布尔字段？
│  └─ Checkbox
│
└─ 搜索行为？
   └─ SearchComponent
```

### Navigation

```
导航层级
│
├─ 应用级页面导航？
│  └─ SidebarNavigation + SidebarButton
│     图标：className="size-full", strokeWidth={1.5}
│
├─ 页面子区块？
│  └─ SecondaryNav + SecondaryNavItem
│     图标：className="size-full", strokeWidth={1.5}
│
└─ 区域内视图切换？
   └─ Tabs（Layer 2 Arco Tabs）
```

**重要**：禁止用 Tabs 替代 SecondaryNav

### Feedback

```
反馈类型
│
├─ 短暂非阻塞通知？
│  └─ Toast
│
├─ 状态标签或计数？
│  └─ Badge（使用 label prop）
│
├─ 悬停/聚焦提示？
│  └─ Tooltip
│
└─ 阻塞决策或任务？
   └─ Modal
```

### Media

```
媒体/身份
│
├─ 头像/实体图像？
│  └─ Avatar
│     有图 → type="image"
│     无图 → type="initial"
│
├─ 多人/多实体？
│  └─ AvatarGroup
│
├─ 内容卡片？
│  └─ ItemCard
│
├─ 视频时长标签？
│  └─ DurationBadge
│
└─ 视频播放控制？
   └─ VideoControl
```

### Chat / AI

```
Chat/AI 场景
│
├─ 新建 AI 创作流程？
│  └─ AIVideoCreation
│
├─ 持续对话界面？
│  └─ PromptPane
│
├─ 单条消息气泡？
│  └─ ChatBubbles
│     AI → type="ai"
│     用户 → type="user" + userAvatar
│
└─ 独立提示输入？
   └─ PromptInput
```

---

## 验证 Checklist

### Critical（必须通过）

**布局结构**
- [ ] 桌面页面包含 `SidebarNavigation`
- [ ] 主内容画布使用 `bg-brand-tertiary`
- [ ] 卡片使用 `bg-surface-bg`
- [ ] 卡片无 `border`、无 `shadow`（仅 modal/dropdown 可用阴影）

**颜色使用**
- [ ] 无彩色卡片背景
- [ ] 无渐变背景
- [ ] `brand-primary` 仅用于主按钮和激活状态
- [ ] 每页最多一个 `primary` Button

**组件合法**
- [ ] Button 变体合法：`primary` | `neutral` | `subtle`
- [ ] 导航层级正确，无跳级
- [ ] 图标来自 `lucide-react`

### Major

- [ ] 正确的导航层级选择
- [ ] 依赖已预设（Layer 1/2/3）
- [ ] 内容分组合理
- [ ] 组件 API 使用正确
- [ ] Token 使用正确（间距、颜色、圆角）
- [ ] 无多余装饰元素

### Minor

- [ ] 图标尺寸一致
- [ ] 层级和间距节奏
- [ ] Badge/Tooltip 使用合理

### 修复顺序

1. 缺少必读规则或错误假设
2. 页面结构和导航错误
3. 非法组件或变体
4. 图标使用错误
5. Token、间距、层级问题

---

## 执行流程

### 新建页面

```
1. 确定页面类型 → 选择模板
2. 选择布局 → SidebarNavigation + (SecondaryNav?)
3. 预设依赖 → Layer 1 (必须)
4. 选择组件 → 按决策树
5. 验证 → Checklist
```

### 部分更新

```
1. 识别变更范围
2. 仅读取相关规则
3. 结构变更？→ Layout 决策树
4. 组件变更？→ Component 决策树
5. 验证
```

### 组件选择

```
1. 识别 UI 需求类型
2. 预设依赖（如需 Layer 2/3）
3. 按决策树选择
4. 确认变体和图标模式
```

### 验证

```
1. 检查 Critical 项
2. 检查 Major 项
3. 检查 Minor 项
4. 输出问题列表和修复建议
```

---

## 组件目录速查

| 类别 | 组件 | 用途 |
|------|------|------|
| **按钮** | Button, IconButton, ButtonGroup, FavoriteButton | 操作触发 |
| **输入** | InputField, TextareaField, SelectField, SearchComponent, Checkbox, RadioGroup, SwitchField, CurrencyExchange | 数据输入 |
| **导航** | SidebarNavigation, SidebarButton, SecondaryNav, SecondaryNavItem, Tabs, SegmentedControl | 页面/区块切换 |
| **媒体** | Avatar, AvatarGroup, ItemCard, DurationBadge, VideoControl | 内容展示 |
| **反馈** | Toast, Badge, Tooltip, Modal, EmptyState, Skeleton | 状态/通知 |
| **Chat** | PromptPane, ChatBubbles, PromptInput, AIVideoCreation | AI 交互 |
| **数据** | Table, Pagination, Breadcrumb | 数据展示 |
| **工具** | Toolbar, ToolbarItem | 上下文工具 |

---

## 视觉风格示例

### ✅ 正确的极简风格

```tsx
// 干净的页面结构
<div className="flex h-screen">
  <SidebarNavigation>{/* ... */}</SidebarNavigation>

  <main className="flex-1 bg-brand-tertiary p-2xl">
    {/* 页面标题 */}
    <h1 className="text-xl font-semibold text-text-primary mb-xl">Settings</h1>

    {/* 卡片组 */}
    <div className="max-w-3xl flex flex-col gap-xl">
      {/* 干净的卡片：无边框、无阴影 */}
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="font-semibold text-text-primary mb-lg">Profile</h2>
        <InputField label="Name" />
        <InputField label="Email" />
        <div className="flex justify-end mt-lg">
          <Button variant="primary">Save</Button>
        </div>
      </div>

      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="font-semibold text-text-primary mb-lg">Notifications</h2>
        <SwitchField label="Email notifications" />
      </div>
    </div>
  </main>
</div>
```

### ❌ 错误的花哨风格

```tsx
// 禁止：多种颜色、边框、阴影、渐变
<div className="flex h-screen">
  <SidebarNavigation>{/* ... */}</SidebarNavigation>

  <main className="flex-1 bg-gradient-to-br from-purple-50 to-blue-50 p-6">
    {/* 禁止：彩色卡片 */}
    <div className="bg-white rounded-xl p-6 border-2 border-purple-200 shadow-lg">
      {/* 禁止：多种颜色混用 */}
      <h2 className="text-purple-600 font-bold mb-4">Profile</h2>

      {/* 禁止：彩色边框输入框 */}
      <div className="border-2 border-blue-300 rounded-lg p-2">
        <input className="text-gray-700" />
      </div>

      {/* 禁止：多个 primary 按钮 */}
      <div className="flex gap-2 mt-4">
        <Button variant="primary">Save</Button>
        <Button variant="primary">Cancel</Button> {/* 错误！ */}
      </div>
    </div>

    {/* 禁止：渐变背景卡片 */}
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-6">
      {/* 禁止：彩色装饰 */}
    </div>
  </main>
</div>
```

### 风格对比总结

| 元素 | ✅ 正确 | ❌ 错误 |
|------|--------|--------|
| 页面背景 | `bg-brand-tertiary`（淡紫灰） | 白色、渐变、彩色 |
| 卡片背景 | `bg-surface-bg`（中性灰白） | 彩色、渐变、带边框 |
| 卡片样式 | 无边框、无阴影 | `border`、`shadow` |
| 品牌色 | 仅主按钮、激活状态 | 卡片背景、装饰元素 |
| Primary 按钮 | 每页最多 1 个 | 多个 primary 按钮 |
| 装饰元素 | 无 | 彩色块、渐变、彩色边框 |

---

## 完整规则来源

本技能压缩自 Astra 设计系统完整文档：

- `guidelines/overview.md` — 系统概览
- `guidelines/components/*.md` — 组件详细规则
- `guidelines/foundations/*.md` — 基础 Token
- `guidelines/composition/*.md` — 布局和组合
- `workflow/trees/*.md` — 决策树
- `workflow/checklists/*.md` — 验证清单

如需详细规则，请查阅上述文档。