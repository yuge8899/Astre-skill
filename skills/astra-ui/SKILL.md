---
name: astra-ui
description: "Astra UI设计系统 - 极简专业B2C SaaS风格。创建页面、选择组件、验证合规性。触发词：创建页面、新建页面、设置页面、数据列表、dashboard、表单、按钮、输入框、导航、表格、弹窗、布局选择、组件选择、验证页面、astra"
---

# Astra UI 设计系统

B2C SaaS 产品设计系统，风格：**极简、干净、透气**。

## 快速入口

| 任务 | 执行流程 |
|------|----------|
| 新建页面 | 1.选模板 → 2.选布局 → 3.选组件 → 4.验证 |
| 组件选择 | 按决策树选择 → 确认 Props |
| 验证页面 | 按 Checklist 检查 → 报告问题 |

---

## 设计原则（强制）

### 核心风格

| 原则 | 说明 |
|------|------|
| **极简配色** | 90% 中性色，品牌色仅用于主按钮和激活状态 |
| **卡片式布局** | 内容用 `surface-bg` 卡片，浮在 `brand-tertiary` 画布上 |
| **无边框设计** | 用表面色对比分隔，卡片无边框无阴影 |
| **柔和阴影** | 仅用于浮动弹层（modal、dropdown、toolbar） |
| **充足留白** | 卡片间距 `gap-xl`，内边距 `p-xl`，页面边距 `p-2xl` |

### 颜色使用规则

```
页面结构颜色：
├── SidebarNavigation（60px）→ surface-bg + border-r
├── 主画布 → brand-tertiary（淡紫灰）
└── 内容卡片 → surface-bg（浅灰白）

品牌色使用（极度克制）：
├── 主按钮背景 → brand-primary
├── 激活状态 → brand-primary
└── 禁止 → 卡片背景、大区块背景、装饰元素

禁止事项：
❌ 多种颜色混用
❌ 彩色卡片背景
❌ 渐变背景
❌ 彩色边框
❌ 强调色用于装饰
```

---

## 硬规则（必须遵守）

### 布局规则

1. **每个桌面页面必须包含 `SidebarNavigation`** — 无例外
2. **页面背景永远是 `brand-tertiary`** — 不是白色
3. **内容卡片使用 `surface-bg`** — 浮在画布上
4. **卡片无边框无阴影** — 表面色对比提供分隔
5. **间距使用 token** — 禁止硬编码像素

### 颜色规则

6. **禁止大面积使用 `brand-primary` 背景** — 仅用于主按钮
7. **每页最多一个 `primary` 按钮** — 其他用 `neutral` 或 `subtle`
8. **禁止彩色装饰** — 不用渐变、彩色边框、彩色背景块

### 组件规则

9. **使用设计系统组件** — `InputField` 不是 `<input>`
10. **图标来源**：`lucide-react` — 禁止内联 SVG
11. **导航层级严格**：`SidebarNavigation` → `SecondaryNav` → `Tabs`
12. **Tabs 来自 Arco** — `@arco-design/web-react`

---

## Design Tokens

### Spacing 间距

Base-2 系统，4px 为标准单位。

| Token | 值 | Tailwind | 频率 | 用途 |
|-------|-----|----------|------|------|
| `space-xs` | 2px | `gap-xs`, `p-xs` | 偶尔 | 最小间距、标题到副标题 |
| `space-sm` | 4px | `gap-sm`, `p-sm` | 常见 | 紧凑间距、Badge 内边距 |
| `space-md` | 8px | `gap-md`, `p-md` | **主导** | 组件内间距、导航项间距 |
| `space-lg` | 12px | `gap-lg`, `p-lg` | **主导** | 表单字段间距、相关组间距 |
| `space-xl` | 16px | `gap-xl`, `p-xl` | 常见 | 卡片内边距、卡片间距 |
| `space-2xl` | 24px | `gap-2xl`, `p-2xl` | 常见 | 页面边距、大区块分隔 |

**决策树**：
```
┌─ "What spacing?"
│
├─ 标题到副标题？→ space-xs (4px)
├─ 组件内间距？→ space-md (8px)
├─ 表单字段间距？→ space-lg (12px)
├─ 卡片内边距？→ space-xl (16px)
├─ 卡片间距？→ space-xl (16px)
└─ 页面边距？→ space-2xl (24px)
```

**常用场景速查**：
| 场景 | Token | Tailwind |
|------|-------|----------|
| 页面边距 | `space-2xl` | `p-2xl` |
| 卡片内边距 | `space-xl` | `p-xl` |
| 卡片间距 | `space-xl` | `gap-xl` |
| 字段间距 | `space-lg` | `gap-lg` |
| 标题到描述 | `space-xs` | `mt-xs` |

### Color 颜色

配色原则：~90% 中性表面，品牌色仅用于主操作。

**主要 Token**：

| Token | 值 | 用途 |
|-------|-----|------|
| `brand-primary` | `#2E62FF` | 主按钮、激活状态（可自定义主题色） |
| `brand-hover` | `#1a4fe0` | 主按钮悬停 |
| `brand-dark` | `#1B48B8` | 主按钮按下 |
| `brand-secondary` | `#D6E3FF` | AI 气泡背景 |
| `brand-tertiary` | `#EBF0FF` | 页面画布背景 |
| `brand-muted` | `#F0F5FF` | 微妙高亮背景 |
| `surface-bg` | `#ffffff` | 卡片、面板、侧边栏 |
| `surface-secondary-bg` | `#f5f5f7` | 二级导航面板 |
| `surface-dark` | `#22222c` | Tooltip 背景 |
| `text-primary` | `rgba(0,0,0,0.85)` | 主要文字 |
| `text-secondary` | `rgba(0,0,0,0.55)` | 次要文字、描述 |
| `text-tertiary` | `rgba(0,0,0,0.35)` | 占位符、禁用标签 |
| `border-primary` | `rgba(0,0,0,0.15)` | 边框 |
| `border-secondary` | `rgba(0,0,0,0.08)` | 微妙边框 |
| `input-bg` | `#f5f5f7` | 输入框背景 |
| `bg-faint` | `#fafafa` | 卡片内凹陷区域 |
| `bg-subtle` | `#f5f5f5` | 卡片内分组区域 |
| `on-brand` | `#ffffff` | 品牌色背景上的文字（始终白色） |
| `on-reverse` | `#1e1e1e` | 始终深色的文字（两种模式下都深） |
| `modal-scrim` | `rgba(0,0,0,0.75)` | Modal 遮罩 |

**Tailwind 映射**：
```css
bg-brand-primary, bg-brand-tertiary, bg-brand-secondary
bg-surface-bg, bg-surface-secondary-bg, bg-surface-dark
text-text-primary, text-text-secondary, text-text-tertiary
border-border-primary, border-border-secondary
bg-input-bg, bg-bg-faint, bg-bg-subtle
text-on-brand, text-on-reverse
bg-modal-scrim
```

**背景色决策树**：
```
┌─ "What background?"
│
├─ 页面画布？→ bg-brand-tertiary
├─ 卡片/面板？→ bg-surface-bg
├─ 侧边导航？→ bg-surface-bg + border-r border-border-primary
├─ 二级导航面板？→ bg-surface-secondary-bg
├─ 卡片内凹陷区域？→ bg-bg-faint
├─ 输入框背景？→ bg-input-bg
├─ 卡片内分组？→ bg-bg-subtle
├─ 悬停状态？→ bg-surface-hover 或 bg-bg-hover
├─ 主按钮？→ bg-brand-primary + text-on-brand
├─ AI 气泡？→ bg-brand-secondary
└─ Modal 遮罩？→ bg-modal-scrim
```

**文字色决策树**：
```
┌─ "What text color?"
│
├─ 主要内容？→ text-text-primary
├─ 支持信息（描述、帮助文字、时间戳）？→ text-text-secondary
├─ 装饰性或极低优先级（占位符、禁用标签）？→ text-text-tertiary
├─ 交互文字（激活 tab、链接）？→ text-brand-primary
├─ 在 brand-primary 背景上？→ text-on-brand（始终白色）
├─ 需要两种模式下都深色？→ text-on-reverse
└─ 状态文字？→ text-danger, text-success, text-warning
```

**边框色决策树**：
```
┌─ "What border color?"
│
├─ 默认交互元素（input、select、可点击卡片）？→ border-border-primary
├─ 微妙分隔（次级分隔、卡片边缘）？→ border-border-secondary
├─ 聚焦或选中元素？→ border-border-selected
└─ 布局区域边界？→ 不用边框 — 用表面色对比
   例外：SidebarNavigation 用 border-r border-border-primary
```

**常见错误**：
```tsx
// ❌ 错误：text-text-primary 在 brand-primary 背景上不可见
<div className="bg-brand-primary text-text-primary">Save</div>

// ✅ 正确：使用 text-on-brand
<div className="bg-brand-primary text-on-brand">Save</div>
```

### Radius 圆角

| Token | 值 | Tailwind | 频率 | 用途 |
|-------|-----|----------|------|------|
| `corner-sm` | 4px | `rounded-corner-sm` | 偶尔 | 小元素、dot 分隔符 |
| `corner-md` | 6px | `rounded-corner-md` | 常见 | 输入框、Badge、ToolbarItem |
| `corner-lg` | 12px | `rounded-corner-lg` | **主导** | 卡片、面板、Modal、浮动层 |
| `corner-full` | 999px | `rounded-corner-full` | 常见 | 按钮（胶囊）、头像 |

**决策树**：
```
┌─ "What radius?"
│
├─ 小元素（badge、dot）？→ rounded-corner-sm (4px)
├─ 交互元素（input、select、toolbar item）？→ rounded-corner-md (8px)
├─ 内容卡片或面板？→ rounded-corner-lg (16px) ⭐ 最常用
├─ 浮动层（toolbar、modal）？→ rounded-corner-lg (16px)
├─ 按钮（胶囊形）？→ rounded-corner-full (999px)
└─ 头像或圆形元素？→ rounded-corner-full (999px)
```

**组件映射**：
| 组件 | 圆角 | Token |
|------|------|-------|
| Button | 胶囊 | `rounded-corner-full` |
| InputField, SelectField | 8px | `rounded-corner-md` |
| 内容卡片 | 16px | `rounded-corner-lg` |
| ItemCard | 8px | `rounded-corner-md` |
| Modal | 16px | `rounded-corner-lg` |
| Toolbar | 16px | `rounded-corner-lg` |
| Badge | 8px | `rounded-corner-md` |
| Avatar (circle) | 胶囊 | `rounded-corner-full` |
| Tooltip | 8px | `rounded-corner-md` |

### Typography 排版

字体：Instrument Sans

| Class | 大小 | 重量 | 行高 | 用途 |
|-------|------|------|------|------|
| `text-title` | 24px | 600 | 1.4 | 页面标题 |
| `text-heading` | 20px | 500 | 1.4 | 区块标题 |
| `text-caption` | 20px | 600 | 1.4 | 大写标题 |
| `text-label` | 16px | 500 | 1.4 | 表单标签、按钮文字、卡片区块标题 |
| `text-label-sm` | 14px | 500 | 1.4 | 描述、帮助文字、次要标签 |
| `text-input` | 16px | 400 | 1.4 | 输入框内容 |
| `text-input-sm` | 14px | 500 | 1.4 | 小输入值 |
| `text-video-title` | 12px | 400 | normal | 元数据、时间戳 |

**决策树**：
```
┌─ "What typography?"
│
├─ 页面标题（每页一个）？→ text-title (24px semibold)
├─ 区块标题？→ text-heading (20px medium)
├─ 大写标签？→ text-caption (20px semibold, uppercase)
├─ 表单标签或卡片区块标题？→ text-label (16px medium)
├─ 描述、帮助文字？→ text-label-sm (14px medium)
├─ 输入框值？→ text-input (16px regular)
├─ 小输入或紧凑字段？→ text-input-sm (14px medium)
└─ 元数据、时间戳？→ text-video-title (12px regular)
```

**常用模式**：
```tsx
// 页面标题
<h1 className="text-title text-text-primary">Profile</h1>
<p className="text-label-sm text-text-secondary mt-xs">Manage settings</p>

// 卡片区块标题
<h2 className="text-label text-text-primary font-semibold mb-lg">Section</h2>
```

### Elevation 阴影

原则：~95% 元素无阴影，用表面色对比区分。

| 级别 | 用途 | 说明 |
|------|------|------|
| 无 | **~95% 元素** | 卡片、面板、导航、输入框、按钮 |
| 微阴影 | 浮动层 | Toolbar（`0px 0px 12.1px 0px rgba(0,0,0,0.1)`） |
| 遮罩 | Modal | `bg-modal-scrim`（由 Modal 组件处理） |

**决策树**：
```
┌─ "Should I add shadow?"
│
├─ 卡片或面板？→ No — 用 surface-bg on brand-tertiary
├─ 侧边导航？→ No — 用 border-r border-border-primary
├─ 按钮或输入框？→ No — 用 border 和 background
├─ 浮动工具栏？→ Yes — 微阴影（Toolbar 组件内置）
├─ Modal？→ Yes — 遮罩层（Modal 组件内置）
└─ Dropdown？→ 微阴影 + border-border-primary 可接受
```

**规则**：
- 默认无阴影 — 用表面色对比
- 仅浮动层用阴影
- 不自定义 box-shadow 值

### Surfaces 表面分层

**分层策略**：
```
brand-tertiary        → 页面画布（品牌背景）
surface-bg            → 卡片、面板、侧边栏（浮在画布上）
surface-secondary-bg  → 二级导航面板
bg-faint              → 卡片内凹陷区域
bg-subtle             → 卡片内分组
input-bg              → 输入框背景
surface-hover         → 交互区域悬停状态
```

**分离策略**：用表面色对比，不用边框：
```tsx
// ✅ 正确：表面色对比
<main className="bg-brand-tertiary p-2xl">
  <div className="bg-surface-bg rounded-corner-lg p-xl">
    {/* 卡片浮在画布上 */}
  </div>
</main>

// ❌ 错误：多余边框
<main className="bg-brand-tertiary p-2xl">
  <div className="bg-surface-bg border border-border-primary rounded-corner-lg p-xl">
    {/* 边框多余 */}
  </div>
</main>
```

**边框使用场景**：
- 交互元素（input、button、可点击卡片）
- 侧边导航（`border-r border-border-primary`）
- 浮动层（toolbar、modal）

### Animation 动画

原则：动画必须有功能目的，不是装饰。

**时长**：

| Token | 时长 | 用途 |
|-------|------|------|
| `duration-instant` | 80ms | 状态变化（按钮按下、悬停） |
| `duration-fast` | 150ms | 小 UI 过渡（badge 出现、图标切换） |
| `duration-normal` | 200ms | 标准过渡（dropdown 展开、tooltip 出现） |
| `duration-slow` | 300ms | 较大布局过渡（侧边栏展开、modal 打开） |
| `duration-xslow` | 400ms | 页面级进入动画 |

默认用 `duration-normal` (200ms)。交互过渡不超过 400ms。

**缓动曲线**：

| 曲线 | CSS 值 | 用途 |
|------|--------|------|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | 默认 — 进入和离开 |
| `ease-decelerate` | `cubic-bezier(0.0, 0, 0.2, 1)` | 进入屏幕（滑入、淡入） |
| `ease-accelerate` | `cubic-bezier(0.4, 0, 1, 1)` | 离开屏幕（滑出、淡出） |
| `ease-sharp` | `cubic-bezier(0.4, 0, 0.6, 1)` | 快速状态变化 |

禁止用 linear 缓动。

**微交互模式**：
```css
/* 悬停状态 */
transition: background-color 150ms ease-standard, color 150ms ease-standard;

/* 焦点环 */
transition: box-shadow 80ms ease-standard;

/* 按钮按下 */
transition: transform 80ms ease-sharp;
/* On press: scale(0.98) */

/* Dropdown 展开 */
transition: opacity 200ms ease-decelerate, transform 200ms ease-decelerate;
/* From: opacity:0, translateY(-4px) → To: opacity:1, translateY(0) */

/* Modal 打开 */
transition: opacity 300ms ease-decelerate, transform 300ms ease-decelerate;
/* From: opacity:0, scale(0.96) → To: opacity:1, scale(1) */
```

**Reduced Motion**：
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**规则**：
- 所有交互元素必须有悬停和焦点过渡
- 默认 200ms + ease-standard
- 禁止 linear
- 交互过渡不超过 400ms
- 循环动画只在加载状态运行

### Modes 暗色模式

**激活方式**：
- Light：默认（无 `.dark` class）
- Dark：`<html class="dark">`

**通过 ThemeProvider**：
```tsx
import { ThemeProvider, useTheme } from '@figma/astraui'

<ThemeProvider>
  <App />
</ThemeProvider>

// 切换主题
const { theme, toggleTheme, setTheme } = useTheme()
```

**Token 自动适配**：
| Token | Light | Dark |
|-------|-------|------|
| `--brand-tertiary` | `#EBF0FF` | `#1a1f2e` |
| `--surface-bg` | `#ffffff` | `#161621` |
| `--text-primary` | `rgba(0,0,0,0.85)` | `rgba(255,255,255,0.85)` |
| `--border-primary` | `rgba(0,0,0,0.15)` | `rgba(255,255,255,0.15)` |

**不变的 Token**：
| Token | 值 | 原因 |
|-------|-----|------|
| `--brand-primary` | `#2E62FF` | 品牌色在两种模式下一致 |
| `--on-brand` | `#ffffff` | 始终白色 |
| `--on-reverse` | `#1e1e1e` | 始终深色 |
| `--modal-scrim` | `rgba(0,0,0,0.75)` | 遮罩始终深色 |

**规则**：
- 使用语义 token，暗色模式自动适配
- `on-brand` 在两种模式下都是白色
- `on-reverse` 在两种模式下都是深色

### Focus 焦点样式

**焦点环模式**：
```css
.interactive:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}
```

**在 Tailwind 中**：
```tsx
<button className="focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2">
  Custom button
</button>
```

**在品牌色背景上**：
```tsx
<div className="bg-brand-primary">
  <button className="focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
    Action
  </button>
</div>
```

**规则**：
- 用 `focus-visible`，不用 `focus`（仅键盘导航显示）
- 用 `brand-primary` 颜色
- 2px 宽度 + 2px 偏移
- 不用 `box-shadow` 作为焦点指示器

**内置焦点样式的组件**：Button、InputField、Checkbox、Tabs、Modal 等。自定义交互元素必须手动添加焦点样式。

### Icons 图标

**来源**：`lucide-react`（禁止内联 SVG）

```tsx
import { Home, Search, Settings } from 'lucide-react'
```

**尺寸**：

| 尺寸 | 频率 | 用途 |
|------|------|------|
| 24px | ~60% | Toolbar、segmented controls、视频控制 |
| 20px | ~20% | SidebarButton、SecondaryNavItem（用 `className="size-full"`） |
| 16px | ~15% | 输入框前缀/后缀、紧凑 UI |
| 32px | ~5% | 大特性图标、空状态 |

**尺寸模式**：
```tsx
// 标准 24px
<Search size={24} />

// 16px — 输入框前缀
<InputField prefix={<Search size={16} />} label="Search" />

// 填充父容器 — SidebarButton
<SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} />
```

**颜色**：图标继承 `currentColor`，通过父元素文字色控制：
```tsx
<span className="text-text-secondary">
  <Clock size={16} /> 2 hours ago
</span>
```

**命名规则**：Lucide 用 PascalCase，如 `arrow-up.js` → `ArrowUp`。

**规则**：
- 从 `lucide-react` 导入
- 不猜图标名，先验证
- `SidebarButton` 和 `SecondaryNavItem` 用 `strokeWidth={1.5}` 和 `className="size-full"`

---

## 依赖栈

| 层级 | 来源 | 用途 |
|------|------|------|
| Layer 1 | `shadcn/ui` + `lucide-react` | 通用原语 |
| Layer 2 | `@arco-design/web-react` `Tabs` | 区域内视图切换 |
| Layer 3 | `@figma/astraui` `CurrencyExchange` | 外汇兑换流程 |

### shadcn/ui 安装

**一键安装**：
```bash
npx shadcn@latest init
npx shadcn@latest add button card input textarea select checkbox switch radio-group label badge toast tooltip dialog sheet table pagination avatar dropdown-menu separator scroll-area skeleton tabs breadcrumb chart
npm install lucide-react
```

**按类别**：

| 类别 | 安装命令 |
|------|----------|
| 布局 | `npx shadcn@latest add card separator scroll-area` |
| 按钮 | `npx shadcn@latest add button` |
| 输入 | `npx shadcn@latest add input textarea select checkbox switch radio-group label` |
| 反馈 | `npx shadcn@latest add badge toast tooltip skeleton` |
| 弹层 | `npx shadcn@latest add dialog sheet dropdown-menu` |
| 数据 | `npx shadcn@latest add table pagination avatar` |
| 导航 | `npx shadcn@latest add tabs breadcrumb` |
| 图表 | `npx shadcn@latest add chart` |

### 图表组件（shadcn/ui Chart）

基于 Recharts 封装，支持 Area、Bar、Line、Pie、Radar、Radial 图表。

**配色规则**：
- 主数据：`#2E62FF`（brand-primary）
- 对比数据：`#a3a3a3`（中性灰）
- 网格线：`#e5e5e5`
- 禁止彩虹色、渐变、3D 效果

**示例**：
```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"

const chartConfig = {
  value: { label: "Value", color: "#2E62FF" },
  previous: { label: "Previous", color: "#a3a3a3" },
}

<div className="bg-surface-bg rounded-corner-lg p-xl">
  <ChartContainer config={chartConfig} className="h-[300px]">
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
      <XAxis dataKey="month" stroke="#737373" fontSize={12} />
      <YAxis stroke="#737373" fontSize={12} />
      <ChartTooltip content={<ChartTooltipContent />} />
      <Bar dataKey="value" fill="#2E62FF" radius={[4, 4, 0, 0]} />
    </BarChart>
  </ChartContainer>
</div>
```

---

## 页面模板

### Template 1: Dashboard

**目标**：概览 — 查看当前状态、最近活动、待处理操作

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <main className="flex-1 bg-brand-tertiary overflow-y-auto p-2xl">
    <div className="flex items-center justify-between mb-xl">
      <h1 className="text-text-primary text-xl font-semibold">Dashboard</h1>
      <Button variant="primary">New Item</Button>
    </div>

    <div className="grid grid-cols-3 gap-xl mb-xl">
      <div className="bg-surface-bg rounded-corner-lg p-xl">{/* Summary */}</div>
      <div className="bg-surface-bg rounded-corner-lg p-xl">{/* Summary */}</div>
      <div className="bg-surface-bg rounded-corner-lg p-xl">{/* Summary */}</div>
    </div>

    <div className="grid grid-cols-2 gap-xl">
      <div className="bg-surface-bg rounded-corner-lg p-xl">{/* Recent activity */}</div>
      <div className="bg-surface-bg rounded-corner-lg p-xl">{/* Pending actions */}</div>
    </div>
  </main>
</div>
```

**规则**：最多 4 个摘要卡片，无边框，2 列区块最大。

### Template 1.5: Analytics Dashboard

**目标**：数据概览 — 统计指标、趋势图表、对比分析

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <main className="flex-1 bg-brand-tertiary overflow-y-auto p-2xl">
    <div className="flex items-center justify-between mb-xl">
      <h1 className="text-text-primary text-xl font-semibold">Analytics</h1>
      <Button variant="neutral">Export</Button>
    </div>

    {/* Top stats */}
    <div className="grid grid-cols-4 gap-xl mb-xl">
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <p className="text-text-secondary text-sm mb-xs">Total Revenue</p>
        <p className="text-text-primary text-2xl font-semibold">$24,580</p>
        <p className="text-success text-sm mt-xs">+12.5%</p>
      </div>
      {/* More stat cards... */}
    </div>

    {/* Charts */}
    <div className="grid grid-cols-2 gap-xl mb-xl">
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <ChartContainer config={chartConfig} className="h-[300px]">
          {/* Chart */}
        </ChartContainer>
      </div>
      {/* More chart cards... */}
    </div>

    {/* Data table */}
    <div className="bg-surface-bg rounded-corner-lg p-xl">
      <Table columns={columns} data={data} />
    </div>
  </main>
</div>
```

**规则**：顶部 4 个统计卡片，图表在独立卡片内，配色克制。

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
      <FilterBar />

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

**规则**：过滤栏、表格、分页在同一卡片内，分页必须存在。

### Template 3: Detail / Editor

**目标**：查看或编辑单个复杂实体

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <main className="flex-1 bg-brand-tertiary overflow-hidden flex flex-col">
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

    <div className="flex flex-1 overflow-hidden gap-xl px-2xl pb-2xl">
      <div className="w-[240px] flex-shrink-0 bg-surface-bg rounded-corner-lg overflow-y-auto">
        {/* Entity list */}
      </div>
      <div className="flex-1 bg-surface-bg rounded-corner-lg overflow-y-auto p-xl">
        {/* Main editor */}
      </div>
      <div className="w-[280px] flex-shrink-0 bg-surface-bg rounded-corner-lg overflow-y-auto p-xl">
        {/* Properties */}
      </div>
    </div>
  </main>
</div>
```

**规则**：始终有 Breadcrumb，左 240px / 中 flex-1 / 右 280px。

### Template 4: Form / Settings

**目标**：配置偏好、填写结构化表单

```tsx
<div className="flex h-screen overflow-hidden">
  <SidebarNavigation>{/* nav items */}</SidebarNavigation>

  <SecondaryNav>
    <SecondaryNavItem icon={<User />} label="Profile" />
    <SecondaryNavItem icon={<Shield />} label="Security" active />
  </SecondaryNav>

  <main className="flex-1 bg-brand-tertiary overflow-y-auto p-2xl">
    <h1 className="text-text-primary text-xl font-semibold mb-xl">Security</h1>

    <div className="max-w-3xl flex flex-col gap-xl">
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="font-semibold text-text-primary mb-lg">Password</h2>
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

**规则**：Settings 用 SecondaryNav，不用 Tabs；表单 max-w-3xl。

### 模板选择

```
┌─ "Which template?"
│
├─ 查看当前状态 + 最近活动？→ Dashboard
├─ 浏览、搜索、管理记录？→ Data List
├─ 查看或编辑单个实体？→ Detail / Editor
└─ 配置设置 / 填写表单？→ Form / Settings
```

---

## Layout 决策树

```
页面类型判断
│
├─ 表单/设置/账户页面？
│  └─ Form / Settings Layout
│     → 有子区块？加 SecondaryNav
│
├─ Dashboard/库/画廊页面？
│  └─ Content / Dashboard Layout
│     → 重复卡片？用 grid
│     → 需侧边详情面板？用 split layout
│
├─ 有稳定子区块？
│  └─ Sub-section Layout
│     → 页面级持久子区块？SecondaryNav
│     → 仅区域内切换？Tabs（在内容区域内）
│
├─ 编辑器/画布/工具密集型？
│  └─ Editor Layout
│     → 浮动上下文工具？Toolbar
│
└─ Chat/AI 交互？
   └─ Chat Layout
      → 持续对话？PromptPane
```

### SecondaryNav vs Tabs

```
需要二级导航？
│
├─ 页面级持久子区块？→ SecondaryNav
│
└─ 仅一个内容区域内的视图切换？→ Tabs（Arco）
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
├─ 纯图标操作？→ IconButton
├─ 多个相关操作分组？→ ButtonGroup
└─ 收藏/星标切换？→ FavoriteButton
```

### Inputs

```
数据输入
│
├─ 货币对/外汇？→ CurrencyExchange（Layer 3）
├─ 短文本？→ InputField
├─ 长文本？→ TextareaField
├─ 预定义选项？→ SelectField
├─ 互斥选项？→ RadioGroup
├─ 带标签的布尔设置？→ SwitchField
├─ 表单布尔字段？→ Checkbox
└─ 搜索行为？→ SearchComponent
```

### Navigation

```
导航层级
│
├─ 应用级页面导航？→ SidebarNavigation + SidebarButton
├─ 页面子区块？→ SecondaryNav + SecondaryNavItem
└─ 区域内视图切换？→ Tabs（Arco）
```

### Feedback

```
反馈类型
│
├─ 短暂非阻塞通知？→ Toast
├─ 状态标签或计数？→ Badge（用 label prop）
├─ 悬停/聚焦提示？→ Tooltip
└─ 阻塞决策或任务？→ Modal
```

### Media

```
媒体/身份
│
├─ 头像？→ Avatar（type="image" 或 "initial"）
├─ 多人头像？→ AvatarGroup
├─ 内容卡片？→ ItemCard
├─ 视频时长标签？→ DurationBadge
└─ 视频播放控制？→ VideoControl
```

### Chat / AI

```
Chat/AI 场景
│
├─ 持续对话界面？→ PromptPane
├─ 单条消息气泡？→ ChatBubbles
└─ 独立提示输入？→ PromptInput
```

---

## 组件详细规则

### Button

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `variant` | `'primary' \| 'neutral' \| 'subtle'` | `'primary'` |
| `size` | `'medium' \| 'small'` | `'medium'` |
| `iconStart` | `ReactNode` | — |
| `iconEnd` | `ReactNode` | — |
| `disabled` | `boolean` | `false` |

**变体选择**：
```
├─ 主 CTA（每区块一个）？→ variant="primary"
├─ 辅助操作？→ variant="neutral" ⭐ 默认
└─ 低强调？→ variant="subtle"
```

**规则**：
- 只有一种 `primary` 每可见区块
- 图标用 `iconStart`/`iconEnd`，size={16}
- 有效变体：`primary`、`neutral`、`subtle`（无 `secondary`、`ghost`、`destructive`）

### IconButton

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `icon` | `ReactNode` | required |
| `variant` | `'primary' \| 'neutral' \| 'subtle'` | `'primary'` |
| `size` | `'medium' \| 'small'` | `'medium'` |

**尺寸**：medium = 40×40px，small = 32×32px

**规则**：圆形（`rounded-full`），配 `Tooltip`。

### ButtonGroup

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `align` | `'justify' \| 'start' \| 'end' \| 'center' \| 'stack'` | `'justify'` |

**布局**：
- `justify`：全宽，space-between
- `start`/`end`/`center`：左/右/居中
- `stack`：垂直堆叠

### InputField

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `value` | `string` | — |
| `label` | `string` | — |
| `description` | `string` | — |
| `placeholder` | `string` | `'I am a placeholder...'` |
| `prefix` | `ReactNode` | — |
| `suffix` | `ReactNode` | — |
| `disabled` | `boolean` | `false` |
| `onChange` | `(value: string) => void` | — |

**规则**：
- `onChange` 简化签名：`(value) => void`
- 图标 prefix 用 `size={16}`

### TextareaField

**Props**：同 InputField，额外 `rows: number`（默认 3）

### SelectField

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `options` | `{ value: string, label: string }[]` | required |
| `value` | `string` | `''` |
| `onChange` | `(value: string) => void` | required |
| `placeholder` | `string` | `'Select an option'` |
| `label` | `string` | — |

### Checkbox

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | — |
| `description` | `string` | — |
| `defaultChecked` | `boolean` | `false` |
| `onChange` | `(checked: boolean) => void` | — |

### RadioGroup

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `options` | `{ value: string, label: string, description?: string }[]` | required |
| `value` | `string` | — |
| `defaultValue` | `string` | `''` |
| `onChange` | `(value: string) => void` | — |

### SwitchField

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | `'Label'` |
| `description` | `string` | `'Description'` |
| `defaultSelected` | `boolean` | `true` |
| `onChange` | `(selected: boolean) => void` | — |

### SidebarNavigation

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | — |
| `footer` | `ReactNode` | — |

**规则**：
- 60px 宽，全高
- `AstraLogo` 内置在顶部
- 标准配置：Home、Film、Book、Folder（顶部），Settings + Avatar（footer）

**示例**：
```tsx
<SidebarNavigation
  footer={
    <>
      <SidebarButton icon={<Settings className="size-full" strokeWidth={1.5} />} />
      <Avatar type="image" src="/user.jpg" size="medium" shape="circle" />
    </>
  }
>
  <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} active />
  <SidebarButton icon={<Film className="size-full" strokeWidth={1.5} />} />
</SidebarNavigation>
```

### SidebarButton

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `icon` | `ReactNode` | required |
| `active` | `boolean` | `false` |

**规则**：图标用 `className="size-full"` 和 `strokeWidth={1.5}`

### SecondaryNav

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | required |
| `children` | `ReactNode` | required |

~252px 宽，`bg-surface-secondary-bg`

### SecondaryNavItem

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `icon` | `ReactNode` | required |
| `label` | `string` | required |
| `active` | `boolean` | `false` |

### Tabs（Arco）

**规则**：
- 仅用于三级导航（区域内视图切换）
- 来自 `@arco-design/web-react`
- 三种样式：Line（默认）、Card、Text
- 文字标签，无图标
- 最多 6 个 tab

### Modal

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `isOpen` | `boolean` | required |
| `onClose` | `() => void` | required |
| `title` | `string` | — |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` |
| `footer` | `ReactNode` | — |

**尺寸**：small=360px，medium=480px，large=640px

**规则**：
- Escape 关闭，backdrop 点击关闭
- 不嵌套 modal
- 主操作按钮在右边

### Table

**Props**：

| Prop | Type | Notes |
|------|------|-------|
| `columns` | `ColumnDef[]` | 列定义 |
| `data` | `object[]` | 数据 |
| `rowKey` | `string` | **required** |
| `loading` | `boolean` | 显示骨架屏 |
| `rowSelection` | `object` | 行选择配置 |
| `pagination` | `false \| PaginationProps` | 设为 false 则需外部 Pagination |

**列定义**：

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | `string` | 列标题 |
| `dataIndex` | `string` | 数据属性 |
| `width` | `number` | 列宽 |
| `fixed` | `'left' \| 'right'` | 固定列 |
| `render` | `(value, record) => ReactNode` | 自定义渲染 |

**规则**：
- `rowKey` 必须设置
- Name 列 `fixed: 'left'`，Actions 列 `fixed: 'right'`
- 必须有 Pagination
- 启用 `scroll.x` 当 6+ 列

### Pagination

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `total` | `number` | **required** |
| `current` | `number` | `1` |
| `pageSize` | `number` | `10` |
| `pageSizeOptions` | `number[]` | `[10, 20, 50]` |
| `showTotal` | `boolean` | `true` |
| `showJumper` | `boolean` | `true` |
| `onChange` | `(page, pageSize) => void` | — |

**规则**：
- 每个表格必须要有
- 在同一卡片内，表格下方

### Badge

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | `'Label'` |
| `variant` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'brand'` | `'default'` |
| `removable` | `boolean` | `false` |

**规则**：用 `label` prop，不是 children

### Toast

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `message` | `string` | required |
| `progress` | `number` | `0` |
| `variant` | `'default' \| 'success' \| 'error'` | `'default'` |
| `showCancel` | `boolean` | `true` |

### Tooltip

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `content` | `string` | required |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` |
| `delay` | `number` | `200` |

### EmptyState

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `icon` | `ReactNode` | — |
| `title` | `string` | required |
| `description` | `string` | — |
| `action` | `ReactNode` | — |

**文案指南**：

| 场景 | 主信息 | 副信息 |
|------|--------|--------|
| 初始空 | "No [items] yet" | "Get started by creating your first [item]." |
| 无结果 | "No results found" | "Try adjusting your search or filters." |
| 错误 | "Couldn't load [items]" | "Check your connection and try again." |

### Skeleton

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `animation` | `boolean` | `false` |
| `text` | `{ rows: number, width?: string[] }` | — |
| `image` | `boolean` | `false` |

**规则**：始终启用 `animation`

### Avatar

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `type` | `'initial' \| 'image'` | `'image'` |
| `size` | `'small' \| 'medium' \| 'large'` | `'large'` |
| `shape` | `'circle' \| 'square'` | `'circle'` |
| `initials` | `string` | `'F'` |
| `src` | `string` | — |

**尺寸**：small=24px，medium=32px，large=40px

### ItemCard

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | `'Item Title'` |
| `updated` | `string` | `'Edited 2m ago'` |
| `spec` | `string` | `'4K'` |
| `duration` | `string` | `'0:01:30'` |
| `thumbnail` | `ReactNode` | — |

305px 宽，316:177 媒体区域，DurationBadge 自动定位。

### Breadcrumb

来自 Arco。

**规则**：
- 仅用于 2+ 层级深的页面
- 最后一项不是链接
- 最多 4 个可见项

### Toolbar / ToolbarItem

**Toolbar Props**：`children`

**ToolbarItem Props**：`icon`, `selected`

**规则**：
- 48px 高，16px 圆角
- 浮动层，有微阴影
- ToolbarItem 用 `size={24}` 图标

### ChatBubbles

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `type` | `'user' \| 'ai'` | `'ai'` |
| `text` | `string` | required |
| `userAvatar` | `ReactNode` | — |

AI 气泡用 `brand-secondary` 背景。

### PromptInput

**Props**：

| Prop | Type | Default |
|------|------|---------|
| `value` | `string` | `''` |
| `placeholder` | `string` | `'Describe your video'` |
| `onChange` | `(value: string) => void` | — |
| `onSend` | `() => void` | — |
| `onAttach` | `() => void` | — |

### PromptPane

**Props**：包含 PromptInput 的所有 props + `children`（ChatBubbles）

**规则**：内置 PromptInput，不再添加单独的输入框。

---

## 验证 Checklist

### Critical

**布局**：
- [ ] 桌面页面包含 `SidebarNavigation`
- [ ] 主画布 `bg-brand-tertiary`
- [ ] 卡片 `bg-surface-bg`
- [ ] 卡片无 `border`、无 `shadow`

**颜色**：
- [ ] 无彩色卡片背景
- [ ] 无渐变背景
- [ ] `brand-primary` 仅用于主按钮和激活状态
- [ ] 每页最多一个 `primary` Button

**组件**：
- [ ] Button 变体合法：`primary` | `neutral` | `subtle`
- [ ] 导航层级正确
- [ ] 图标来自 `lucide-react`

### Major

- [ ] 正确的导航层级选择
- [ ] 依赖已预设
- [ ] Token 使用正确
- [ ] 组件 API 正确
- [ ] 图表配色克制

### Minor

- [ ] 图标尺寸一致
- [ ] 层级和间距节奏

---

## 视觉风格示例

### ✅ 正确

```tsx
<div className="flex h-screen">
  <SidebarNavigation>{/* ... */}</SidebarNavigation>
  <main className="flex-1 bg-brand-tertiary p-2xl">
    <h1 className="text-xl font-semibold text-text-primary mb-xl">Settings</h1>
    <div className="max-w-3xl flex flex-col gap-xl">
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="font-semibold text-text-primary mb-lg">Profile</h2>
        <InputField label="Name" />
        <div className="flex justify-end mt-lg">
          <Button variant="primary">Save</Button>
        </div>
      </div>
    </div>
  </main>
</div>
```

### ❌ 错误

```tsx
// 禁止：彩色、边框、阴影、渐变
<main className="bg-gradient-to-br from-purple-50 to-blue-50">
  <div className="bg-white rounded-xl p-6 border-2 border-purple-200 shadow-lg">
    <h2 className="text-purple-600 font-bold">Profile</h2>
    {/* ... */}
  </div>
</main>
```