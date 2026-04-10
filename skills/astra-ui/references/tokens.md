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
- `brand-100` — 页面画布背景
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
| `surface-secondary-bg` | `bg-slate-100` | 二级导航面板 |
| `surface-canvas` | `bg-blue-100` | 页面画布背景 |
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
├─ 页面画布？→ bg-blue-100
├─ 卡片/面板？→ bg-white
├─ 一级导航？→ bg-white
├─ 二级导航？→ bg-slate-100
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
3. **页面画布用 brand-100** — `bg-blue-100`
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

// ✅ 正确：页面背景用 brand-100
<main className="bg-blue-100">

// ❌ 错误：卡片加边框
<div className="bg-white border border-slate-200">

// ✅ 正确：卡片无边框
<div className="bg-white">
```

---

## Spacing 间距

使用 Tailwind 默认间距 scale：

| Tailwind | 值 | 用途 |
|----------|-----|------|
| `p-1` / `gap-1` | 4px | 最小间距 |
| `p-2` / `gap-2` | 8px | 组件内间距 |
| `p-3` / `gap-3` | 12px | 字段间距 |
| `p-4` / `gap-4` | 16px | 卡片内边距、卡片间距 |
| `p-6` / `gap-6` | 24px | 页面边距 |
| `p-8` / `gap-8` | 32px | 大区块分隔 |

**决策树**：
```
┌─ "What spacing?"
│
├─ 最小间距？→ p-1 / gap-1 (4px)
├─ 组件内间距？→ p-2 / gap-2 (8px)
├─ 字段间距？→ gap-3 (12px)
├─ 卡片内边距？→ p-4 (16px)
├─ 卡片间距？→ gap-4 (16px)
└─ 页面边距？→ p-6 (24px)
```

**常用场景**：
| 场景 | Tailwind |
|------|----------|
| 页面边距 | `p-6` |
| 卡片内边距 | `p-4` |
| 卡片间距 | `gap-4` |
| 字段间距 | `gap-3` |
| 标题到描述 | `mt-1` |

**规则**：
- 使用 Tailwind 默认间距 scale — 禁止硬编码像素值
- 卡片内字段用 `flex flex-col gap-3`
- 区块卡片之间用 `flex flex-col gap-4`

---

## Radius 圆角

使用 Tailwind 默认圆角 scale：

| Tailwind | 值 | 用途 |
|----------|-----|------|
| `rounded` | 4px | 小元素 |
| `rounded-md` | 6px | 输入框、Badge |
| `rounded-lg` | 8px | 交互元素 |
| `rounded-xl` | 12px | 卡片、面板 |
| `rounded-2xl` | 16px | 大卡片 |
| `rounded-full` | 9999px | 按钮（胶囊）、头像 |

**决策树**：
```
┌─ "What radius?"
│
├─ 小元素（badge、dot）？→ rounded (4px)
├─ 交互元素（input、select）？→ rounded-md (6px)
├─ 内容卡片？→ rounded-xl (12px)
├─ 按钮？→ rounded-full (胶囊)
└─ 头像？→ rounded-full (圆形)
```

**组件映射**：
| 组件 | 圆角 |
|------|------|
| Button | `rounded-full` |
| InputField, SelectField | `rounded-md` |
| 卡片、面板 | `rounded-xl` |
| Badge | `rounded-md` |
| Avatar (circle) | `rounded-full` |

**规则**：
- 卡片使用 `rounded-xl`
- 交互元素使用 `rounded-md`
- 按钮和头像使用 `rounded-full`

---

## Typography 排版

使用 Tailwind 默认字体 size：

| Tailwind | 大小 | 用途 |
|----------|------|------|
| `text-xs` | 12px | 元数据、时间戳 |
| `text-sm` | 14px | 描述、帮助文字 |
| `text-base` | 16px | 正文、按钮文字 |
| `text-lg` | 18px | 区块标题 |
| `text-xl` | 20px | 页面副标题 |
| `text-2xl` | 24px | 页面标题 |
| `text-3xl` | 30px | 大标题 |

**决策树**：
```
┌─ "What typography?"
│
├─ 页面标题？→ text-2xl font-semibold
├─ 区块标题？→ text-lg font-medium
├─ 表单标签？→ text-base font-medium
├─ 描述、帮助文字？→ text-sm text-slate-500
├─ 输入框值？→ text-base
└─ 元数据、时间戳？→ text-xs text-slate-400
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
- 使用 Tailwind 默认字体 size
- 颜色单独设置：`text-slate-900`、`text-slate-500`
- 通过 font-weight 控制重量：`font-medium`、`font-semibold`

---

## Elevation 阴影

原则：~95% 元素无阴影，用表面色对比区分。

| 级别 | 用途 | Tailwind |
|------|------|----------|
| 无 | **~95% 元素** | 卡片、面板、导航、输入框、按钮 |
| 微阴影 | 浮动层 | `shadow-sm` |
| 中阴影 | Dropdown | `shadow-md` |
| 遮罩 | Modal | `bg-black/75` |

**决策树**：
```
┌─ "Should I add shadow?"
│
├─ 卡片或面板？→ No — 用 white on blue-100
├─ 导航？→ No — 无边框无阴影
├─ 按钮或输入框？→ No — 用 border 和 background
├─ 浮动工具栏？→ Yes — shadow-sm
├─ Modal？→ Yes — 遮罩层 + shadow-lg
└─ Dropdown？→ shadow-md
```

**规则**：
- 默认无阴影 — 用表面色对比
- 仅浮动层使用阴影（toolbar、modal、dropdown）
- 卡片、面板、导航不使用阴影

---

## Surfaces 表面分层

**分层策略**：
```
bg-blue-100         → 页面画布（品牌背景）
bg-white            → 卡片、面板、导航（浮在画布上）
bg-slate-100        → 二级导航面板、输入框背景
bg-slate-50         → 悬停状态、微妙背景
```

**分离策略**：用表面色对比，不用边框：
```tsx
// ✅ 正确：表面色对比
<main className="bg-blue-100 p-6">
  <div className="bg-white rounded-xl p-4">
    {/* 卡片浮在画布上 */}
  </div>
</main>

// ❌ 错误：多余边框
<main className="bg-blue-100 p-6">
  <div className="bg-white border border-slate-200 rounded-xl p-4">
    {/* 边框多余 */}
  </div>
</main>
```

**规则**：
- 页面画布始终使用 `bg-blue-100`
- 卡片和面板使用 `bg-white`
- 表面色对比是主要分隔工具 — 不用边框
- 表单字段必须放在 `bg-white` 卡片内

---

## Anti-patterns

### Color
- ❌ `text-slate-900` 在 `bg-blue-500` 背景上（应使用 `text-white`）
- ❌ `bg-blue-500` 作为大面积背景
- ❌ 页面背景用白色或灰色（应使用 `bg-blue-100`）
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

### Surfaces
- ❌ 白色/灰色页面背景（应使用 `bg-blue-100`）
- ❌ 内容直接放在画布上（应包裹在 `bg-white` 卡片内）
- ❌ 在已有表面色对比的地方再加边框