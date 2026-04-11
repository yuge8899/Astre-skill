# Design Tokens

## 颜色系统 (Tailwind CSS v4.1.6)

使用 Tailwind CSS v4 内置色板：
- **Slate** — 中性色（文字、背景、边框）
- **Blue** — 品牌主色
- **Blue-700 (#1d4ed8)** — 主题色

---

## Color 颜色

### 品牌色 (Blue)

| Token | 值 | Tailwind Class | 用途 |
|-------|-----|----------------|------|
| `brand-50` | `#eff6ff` | `bg-blue-50` | 最浅背景 |
| `brand-100` | `#dbeafe` | `bg-blue-100` | 浅背景 |
| `brand-200` | `#bfdbfe` | `bg-blue-200` | AI 气泡背景 |
| `brand-300` | `#93c5fd` | `bg-blue-300` | — |
| `brand-400` | `#60a5fa` | `bg-blue-400` | — |
| `brand-500` | `#3b82f6` | `bg-blue-500` | 主按钮、激活状态 |
| `brand-600` | `#2563eb` | `bg-blue-600` | 悬停状态 |
| `brand-700` | `#1d4ed8` | `bg-blue-700` | **主题色**、按下状态 |
| `brand-800` | `#1e40af` | `bg-blue-800` | — |
| `brand-900` | `#1e3a8a` | `bg-blue-900` | — |
| `brand-950` | `#172554` | `bg-blue-950` | 最深 |

**品牌色使用规则**：
- `brand-500` — 主按钮默认状态
- `brand-600` — 主按钮悬停
- `brand-700` — 主题色、主按钮按下
- `brand-100` — 激活态浅背景、图标说明卡背景
- `brand-200` — AI 气泡、微妙高亮

### 中性色 (Slate)

| Token | 值 | Tailwind Class | 用途 |
|-------|-----|----------------|------|
| `slate-50` | `#f8fafc` | `bg-slate-50` | 最浅表面 |
| `slate-100` | `#f1f5f9` | `bg-slate-100` | 二级背景、输入框背景 |
| `slate-200` | `#e2e8f0` | `bg-slate-200` | 边框、分隔线 |
| `slate-300` | `#cbd5e1` | `bg-slate-300` | — |
| `slate-400` | `#94a3b8` | `bg-slate-400` | 占位符、禁用图标 |
| `slate-500` | `#64748b` | `bg-slate-500` | 次要文字 |
| `slate-600` | `#475569` | `bg-slate-600` | — |
| `slate-700` | `#334155` | `bg-slate-700` | 主要文字 |
| `slate-800` | `#1e293b` | `bg-slate-800` | — |
| `slate-900` | `#0f172a` | `bg-slate-900` | 最深文字 |
| `slate-950` | `#020617` | `bg-slate-950` | — |

### 语义色映射

| 语义 Token | Tailwind Class | 用途 |
|------------|----------------|------|
| `surface-bg` | `bg-white` | 卡片、面板、导航背景 |
| `surface-secondary-bg` | `bg-white` | 二级导航面板 |
| `surface-canvas` | `bg-slate-50` | 页面画布背景 |
| `text-primary` | `text-slate-900` | 主要文字 |
| `text-secondary` | `text-slate-500` | 次要文字、描述 |
| `text-tertiary` | `text-slate-400` | 占位符、禁用文字 |
| `text-on-brand` | `text-white` | 品牌色背景上的文字 |
| `border-primary` | `border-slate-200` | 默认边框 |
| `border-secondary` | `border-slate-100` | 微妙边框 |
| `input-bg` | `bg-slate-100` | 输入框背景 |

### 状态色

| 状态 | Tailwind Class | 用途 |
|------|----------------|------|
| `success` | `text-green-600` `bg-green-50` | 成功状态 |
| `warning` | `text-amber-600` `bg-amber-50` | 警告状态 |
| `danger` | `text-red-600` `bg-red-50` | 错误状态 |
| `info` | `text-blue-600` `bg-blue-50` | 信息状态 |

---

## 背景色决策树

```
┌─ "What background?"
│
├─ 页面画布？→ bg-slate-50
├─ 卡片/面板？→ bg-white
├─ 一级导航？→ bg-slate-900
├─ 二级导航？→ bg-white
├─ 输入框？→ bg-slate-100
├─ 主按钮？→ bg-blue-500 + text-white
│            hover:bg-blue-600, active:bg-blue-700
├─ AI 气泡？→ bg-blue-200
└─ 悬停状态？→ bg-slate-50
```

---

## 文字色决策树

```
┌─ "What text color?"
│
├─ 主要内容？→ text-slate-900
├─ 次要文字（描述、帮助文字）？→ text-slate-500
├─ 占位符、禁用文字？→ text-slate-400
├─ 交互文字（链接、激活）？→ text-blue-700
├─ 品牌色背景上？→ text-white
└─ 状态文字？→ text-green-600 / text-amber-600 / text-red-600
```

---

## 边框色决策树

```
┌─ "What border color?"
│
├─ 默认边框？→ border-slate-200
├─ 微妙分隔？→ border-slate-100
├─ 聚焦/选中？→ border-blue-500
└─ 布局边界？→ 不用边框，用表面色对比
```

---

## 配色原则

1. **90% 中性表面** — Slate 色系为主
2. **品牌色仅用于主操作** — Blue-500/600/700
3. **页面画布用 slate-50** — `bg-slate-50`
4. **卡片用纯白** — `bg-white`
5. **无边框设计** — 用表面色对比分隔

---

## 常见错误

```tsx
// ❌ 错误：text-slate-900 在 brand-500 背景上不可见
<div className="bg-blue-500 text-slate-900">Save</div>

// ✅ 正确：使用 text-white
<div className="bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700">Save</div>

// ❌ 错误：页面背景用白色
<main className="bg-white">

// ✅ 正确：页面背景用 slate-50
<main className="bg-slate-50">

// ❌ 错误：卡片加边框
<div className="bg-white border border-slate-200">

// ✅ 正确：卡片无边框
<div className="bg-white">
```

---

## Spacing 间距

使用 Tailwind CSS v4 CSS 变量：

| Tailwind Class | CSS 变量 | 值 | 用途 |
|----------------|----------|-----|------|
| `p-1` / `gap-1` | `--spacing-1` | `0.25rem` (4px) | 最小间距 |
| `p-2` / `gap-2` | `--spacing-2` | `0.5rem` (8px) | 组件内间距 |
| `p-3` / `gap-3` | `--spacing-3` | `0.75rem` (12px) | 字段间距 |
| `p-4` / `gap-4` | `--spacing-4` | `1rem` (16px) | 卡片内边距、卡片间距 |
| `p-5` / `gap-5` | `--spacing-5` | `1.25rem` (20px) | 页面边距（Astra 默认） |
| `p-6` / `gap-6` | `--spacing-6` | `1.5rem` (24px) | 大页面边距 |
| `p-8` / `gap-8` | `--spacing-8` | `2rem` (32px) | 大区块分隔 |

**CSS 变量使用方式**：
```css
/* 在 @theme 中自定义 */
@theme {
  --spacing-5: 1.25rem;  /* 20px - Astra 页面边距 */
}
```

**决策树**：
```
┌─ "What spacing?"
│
├─ 最小间距？→ p-1 (--spacing-1: 4px)
├─ 组件内间距？→ p-2 (--spacing-2: 8px)
├─ 字段间距？→ gap-3 (--spacing-3: 12px)
├─ 卡片内边距？→ p-4 (--spacing-4: 16px)
├─ 卡片间距？→ gap-4 (--spacing-4: 16px)
├─ 页面边距？→ p-5 (--spacing-5: 20px) ← Astra 默认
└─ 大区块分隔？→ gap-8 (--spacing-8: 32px)
```

**常用场景**：
| 场景 | Tailwind Class | CSS 变量 |
|------|----------------|----------|
| 页面边距 | `p-5` | `--spacing-5` |
| 卡片内边距 | `p-4` / `p-5` | `--spacing-4` / `--spacing-5` |
| 卡片间距 | `gap-5` | `--spacing-5` |
| 字段间距 | `gap-3` | `--spacing-3` |
| 标题到描述 | `mt-1` | `--spacing-1` |

**规则**：
- 使用 Tailwind CSS v4 变量 — 禁止硬编码像素值
- 卡片内字段用 `flex flex-col gap-3`
- 区块卡片之间用 `flex flex-col gap-5`

---

## Radius 圆角

使用 Tailwind CSS v4 CSS 变量：

| Tailwind Class | CSS 变量 | 值 | 用途 |
|----------------|----------|-----|------|
| `rounded` | `--radius-default` | `0.25rem` (4px) | 小元素 |
| `rounded-sm` | `--radius-sm` | `0.125rem` (2px) | 微小圆角 |
| `rounded-md` | `--radius-md` | `0.5rem` (8px) | 输入框、Badge、Button（Astra 默认） |
| `rounded-lg` | `--radius-lg` | `0.75rem` (12px) | 交互元素 |
| `rounded-xl` | `--radius-xl` | `1rem` (16px) | 卡片、面板（Astra 默认） |
| `rounded-2xl` | `--radius-2xl` | `1.5rem` (24px) | 大卡片 |
| `rounded-full` | `--radius-full` | `9999px` | 头像、圆形元素 |

**CSS 变量使用方式**：
```css
/* 在 @theme 中自定义 */
@theme {
  --radius-md: 0.5rem;   /* 8px - Astra 按钮圆角 */
  --radius-xl: 1rem;     /* 16px - Astra 卡片圆角 */
}
```

**决策树**：
```
┌─ "What radius?"
│
├─ 小元素（badge、dot）？→ rounded (--radius-default: 4px)
├─ 交互元素（input、select、button）？→ rounded-md (--radius-md: 8px) ← Astra 默认
├─ 内容卡片？→ rounded-xl (--radius-xl: 16px) ← Astra 默认
└─ 头像？→ rounded-full (--radius-full: 9999px)
```

**组件映射**：
| 组件 | 圆角 Class | CSS 变量 |
|------|------------|----------|
| Button | `rounded-md` | `--radius-md` (8px) |
| InputField, SelectField | `rounded-md` | `--radius-md` (8px) |
| 卡片、面板 | `rounded-xl` | `--radius-xl` (16px) |
| Badge | `rounded-md` | `--radius-md` (8px) |
| Avatar (circle) | `rounded-full` | `--radius-full` (9999px) |

**规则**：
- 卡片使用 `rounded-xl` (`--radius-xl: 16px`)
- 交互元素使用 `rounded-md` (`--radius-md: 8px`)
- Astra 禁用 `rounded-full` 按钮（胶囊按钮）

---

## Typography 排版

使用 Tailwind CSS v4 CSS 变量：

### 字体大小

| Tailwind Class | CSS 变量 | 值 | 用途 |
|----------------|----------|-----|------|
| `text-xs` | `--text-xs` | `0.75rem` (12px) | 元数据、时间戳 |
| `text-sm` | `--text-sm` | `0.875rem` (14px) | 描述、帮助文字 |
| `text-base` | `--text-base` | `1rem` (16px) | 正文、按钮文字 |
| `text-lg` | `--text-lg` | `1.125rem` (18px) | 区块标题 |
| `text-xl` | `--text-xl` | `1.25rem` (20px) | 页面副标题 |
| `text-2xl` | `--text-2xl` | `1.5rem` (24px) | 页面标题 |
| `text-3xl` | `--text-3xl` | `1.875rem` (30px) | 大标题 |

### 字重

| Tailwind Class | CSS 变量 | 值 | 用途 |
|----------------|----------|-----|------|
| `font-normal` | `--font-weight-normal` | `400` | 正常字重 |
| `font-medium` | `--font-weight-medium` | `500` | 标签、区块标题 |
| `font-semibold` | `--font-weight-semibold` | `600` | 页面标题、强调 |
| `font-bold` | `--font-weight-bold` | `700` | 最强强调 |

**CSS 变量使用方式**：
```css
/* 在 @theme 中自定义 */
@theme {
  --text-2xl: 1.5rem;     /* 24px - Astra 页面标题 */
  --font-weight-semibold: 600;
}
```

**决策树**：
```
┌─ "What typography?"
│
├─ 页面标题？→ text-2xl (--text-2xl: 24px) font-semibold (--font-weight-semibold: 600)
├─ 区块标题？→ text-lg (--text-lg: 18px) font-medium (--font-weight-medium: 500)
├─ 表单标签？→ text-base (--text-base: 16px) font-medium (--font-weight-medium: 500)
├─ 描述、帮助文字？→ text-sm (--text-sm: 14px) text-slate-500
├─ 输入框值？→ text-base (--text-base: 16px)
└─ 元数据、时间戳？→ text-xs (--text-xs: 12px) text-slate-400
```

**常用模式**：
```tsx
// 页面标题
<h1 className="text-2xl font-semibold text-slate-900">Orders</h1>
<p className="text-sm text-slate-500 mt-1">Manage your orders</p>

// 卡片区块标题
<h2 className="text-base font-semibold text-slate-900 mb-3">Section</h2>
```

**规则**：
- 使用 Tailwind CSS v4 字体变量
- 颜色单独设置：`text-slate-900`、`text-slate-500`
- 通过 font-weight 控制重量：`font-medium` (`--font-weight-medium`)、`font-semibold` (`--font-weight-semibold`)

---

## Elevation 阴影

原则：~95% 元素无阴影，用表面色对比区分。

使用 Tailwind CSS v4 CSS 变量：

| Tailwind Class | CSS 变量 | 用途 |
|----------------|----------|------|
| 无阴影 | — | **~95% 元素**：卡片、面板、导航、输入框、按钮 |
| `shadow-sm` | `--shadow-sm` | 浮动工具栏 |
| `shadow-md` | `--shadow-md` | Dropdown |
| `shadow-lg` | `--shadow-lg` | Modal |
| `shadow-xl` | `--shadow-xl` | 大浮动层 |

**CSS 变量定义（Tailwind v4 默认值）**：
```css
/* Tailwind v4 内置阴影变量 */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
```

**决策树**：
```
┌─ "Should I add shadow?"
│
├─ 卡片或面板？→ No — 用 white on slate-50
├─ 导航？→ No — 无边框无阴影
├─ 按钮或输入框？→ No — 用 border 和 background
├─ 浮动工具栏？→ Yes — shadow-sm (--shadow-sm)
├─ Modal？→ Yes — 遮罩层 bg-black/75 + shadow-lg (--shadow-lg)
└─ Dropdown？→ shadow-md (--shadow-md)
```

**规则**：
- 默认无阴影 — 用表面色对比
- 仅浮动层使用阴影（toolbar、modal、dropdown）
- 卡片、面板、导航不使用阴影
- 使用 CSS 变量 `--shadow-*` 便于统一修改

---

## Surfaces 表面分层

**分层策略**：
```
bg-slate-50         → 页面画布（中性背景）
bg-white            → 卡片、面板、二级导航（浮在画布上）
bg-slate-100        → 输入框背景
bg-slate-50         → 悬停状态、微妙背景
```

**分离策略**：用表面色对比，不用边框：
```tsx
// ✅ 正确：表面色对比
<main className="bg-slate-50 p-5">
  <div className="bg-white rounded-xl p-4">
    {/* 卡片浮在画布上 */}
  </div>
</main>

// ❌ 错误：多余边框
<main className="bg-slate-50 p-5">
  <div className="bg-white border border-slate-200 rounded-xl p-4">
    {/* 边框多余 */}
  </div>
</main>
```

**规则**：
- 页面画布始终使用 `bg-slate-50`
- 卡片和面板使用 `bg-white`
- 表面色对比是主要分隔工具 — 不用边框
- 表单字段必须放在 `bg-white` 卡片内

---

## Anti-patterns

### Color
- ❌ `text-slate-900` 在 `bg-blue-500` 背景上（应使用 `text-white`）
- ❌ `bg-blue-500` 作为大面积背景
- ❌ 页面背景用纯白（应使用 `bg-slate-50`）
- ❌ 卡片加边框（应使用表面色对比）
- ❌ 卡片加阴影（阴影仅用于浮动层）

### Spacing
- ❌ 硬编码像素值（如 `gap-[12px]`、`p-[20px]`）
- ❌ 卡片或字段之间没有间距
- ❌ 使用不在 scale 中的值

### Radius
- ❌ 任意圆角值（如 `rounded-[8px]`）
- ❌ 嵌套元素的圆角比父元素大

### Typography
- ❌ 直接设置 `font-size`
- ❌ 用 opacity 降低文字重要性（应使用更小的 size 或 `text-slate-500`）

### Elevation
- ❌ 卡片或面板使用阴影
- ❌ 导航使用阴影

---

## Form Controls 表单控件颜色

Tailwind CSS v4 使用 `accent-*` 类设置 checkbox/radio 的选中颜色：

| 控件类型 | Tailwind Class | CSS 变量 |
|----------|----------------|----------|
| Checkbox | `accent-blue-700` | `--color-blue-700` (主题色) |
| Radio | `accent-blue-700` | `--color-blue-700` (主题色) |
| Range | `accent-blue-700` | `--color-blue-700` (主题色) |

**正确用法**：
```html
<!-- ✅ 正确：使用 accent-blue-700（主题色） + border-slate-200（默认边框） -->
<input type="checkbox" class="w-4 h-4 accent-blue-700 border-slate-200 rounded cursor-pointer">
<input type="radio" class="w-4 h-4 accent-blue-700 border-slate-200 cursor-pointer">

<!-- ❌ 错误：边框太深 -->
<input type="checkbox" class="w-4 h-4 border-slate-300">

<!-- ❌ 错误：使用非主题色 -->
<input type="checkbox" class="w-4 h-4 accent-blue-600">
```

**规则**：
- Checkbox/Radio 选中颜色使用 `accent-blue-700`（**主题色**）
- 边框使用 `border-slate-200`（默认边框色，更柔和）
- 添加 `cursor-pointer` 提升交互体验
- 添加 `cursor-pointer` 提升交互体验
- 边框使用 `border-slate-300`

---

### Surfaces
- ❌ 蓝色品牌大面积页面背景（应使用 `bg-slate-50`）
- ❌ 内容直接放在画布上（应包裹在 `bg-white` 卡片内）
- ❌ 在已有表面色对比的地方再加边框

### Form Controls
- ❌ Checkbox/Radio 使用 `text-*` 设置颜色（应使用 `accent-*`）
- ❌ Checkbox/Radio 使用非主题色（应使用 `accent-blue-700`）
- ❌ 边框使用 `border-slate-300`（太深，应使用 `border-slate-200`）
- ❌ 缺少 `cursor-pointer` 导致点击无视觉反馈
