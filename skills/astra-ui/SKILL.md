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

## 核心规则（必读）

### 产品特征

- **密度**：透气 — 充足留白，紧凑但不拥挤
- **表面策略**：分层 — `brand-tertiary` 画布 + `surface-bg` 卡片
- **配色**：~90% 中性表面，品牌色仅用于主操作和高亮
- **圆角**：`corner-md` 8px（默认），`corner-lg` 16px（卡片/弹层）
- **阴影**：仅用于浮动弹层（toolbar、modal）

### 硬规则

1. **每个桌面页面必须包含 `SidebarNavigation`** — 60px 深色图标栏，无例外
2. **页面背景永远是 `brand-tertiary`** — 不是白色或灰色
3. **内容卡片使用 `surface-bg`** — 浮在画布上
4. **禁止大面积使用 `brand-primary` 背景** — 仅用于小强调和交互高亮
5. **使用设计系统组件** — `InputField` 不是 `<input>`
6. **间距使用 token** — `gap-xl`、`p-2xl`，禁止硬编码像素值
7. **表面色定义层级** — 不用边框分隔布局区域
8. **图标来源**：`lucide-react` — 禁止内联 SVG 或猜测图标名
9. **导航层级严格**：`SidebarNavigation` → `SecondaryNav` → `Tabs`，不可跳级
10. **卡片无可见边框** — 表面色对比提供足够分隔

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

- [ ] 桌面页面包含 `SidebarNavigation`
- [ ] 主内容画布使用 `bg-brand-tertiary`
- [ ] 卡片使用 `bg-surface-bg`
- [ ] Button 变体合法：`primary` | `neutral` | `subtle`
- [ ] 每个 visible section 最多一个 `primary` Button
- [ ] 导航层级正确，无跳级
- [ ] 图标来自 `lucide-react`

### Major

- [ ] 正确的导航层级选择
- [ ] 依赖已预设（Layer 1/2/3）
- [ ] 内容分组合理
- [ ] 组件 API 使用正确
- [ ] Token 使用正确（间距、颜色、圆角）

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

## 完整规则来源

本技能压缩自 Astra 设计系统完整文档：

- `guidelines/overview.md` — 系统概览
- `guidelines/components/*.md` — 组件详细规则
- `guidelines/foundations/*.md` — 基础 Token
- `guidelines/composition/*.md` — 布局和组合
- `workflow/trees/*.md` — 决策树
- `workflow/checklists/*.md` — 验证清单

如需详细规则，请查阅上述文档。