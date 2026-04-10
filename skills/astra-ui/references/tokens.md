# Design Tokens

## Spacing 间距

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

**规则**：
- Always use spacing tokens — never hardcode pixel values
- Use `flex flex-col gap-lg` between fields inside a card
- Use `flex flex-col gap-xl` between section cards
- All spacing values must come from this scale

---

## Color 颜色

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

**规则**：
- Use semantic tokens — never hardcode hex values
- `brand-primary` only for primary buttons and active states
- Never use `brand-primary` or `brand-secondary` as backgrounds for large areas
- `on-brand` is always white in both modes
- `on-reverse` is always dark in both modes

---

## Radius 圆角

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

**规则**：
- Use `rounded-corner-lg` (16px) for content cards and panels
- Use `rounded-corner-md` (8px) for interactive elements
- Use `rounded-corner-full` (999px) for buttons and avatars
- Nested elements should use equal or smaller radius than their parent

---

## Typography 排版

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

**规则**：
- Always use composite type classes — never set `font-size` directly
- Do not use Tailwind's default size classes (`text-sm`, `text-base`)
- Text color is separate — pair with `text-text-primary`, `text-text-secondary`
- Reduce importance through scale (smaller type class), not opacity

---

## Elevation 阴影

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
- Default to no shadow — use surface color contrast
- Only use shadows for floating overlays (toolbar, modal, dropdown)
- Do not add shadows to cards, panels, or navigation
- Always pair shadows with a background color

---

## Surfaces 表面分层

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

**规则**：
- The page canvas is ALWAYS `bg-brand-tertiary`
- Content cards and panels use `bg-surface-bg`
- Surface color contrast is the primary separation tool — not borders
- Never place form fields directly on the canvas — wrap in a `bg-surface-bg` card
- Each logical section gets its own `bg-surface-bg rounded-corner-lg p-xl` card

---

## Anti-patterns

### Color
- ❌ `text-text-primary` 在 `brand-primary` 背景上（应使用 `text-on-brand`）
- ❌ `brand-primary` 或 `brand-secondary` 作为大面积背景
- ❌ 页面背景用白色或灰色（应使用 `brand-tertiary`）
- ❌ 卡片加边框（应使用表面色对比）
- ❌ 卡片加阴影（阴影仅用于浮动层）

### Spacing
- ❌ 硬编码像素值（如 `gap-[12px]`、`p-[20px]`）
- ❌ 卡片或字段之间没有间距（内容不应贴在一起）
- ❌ 使用不在 scale 中的值（如 5px、10px、15px、18px）

### Radius
- ❌ 任意圆角值（如 `rounded-[8px]`）
- ❌ 嵌套元素的圆角比父元素大

### Typography
- ❌ 使用 Tailwind 默认尺寸类（如 `text-sm`、`text-base`、`text-lg`）
- ❌ 直接设置 `font-size`
- ❌ 用 opacity 降低重要性（应使用更小的 type class）

### Elevation
- ❌ 卡片或面板使用阴影
- ❌ 导航使用阴影
- ❌ 透明表面上使用阴影

### Surfaces
- ❌ 白色/灰色页面背景（应使用 `brand-tertiary`）
- ❌ 内容直接放在画布上（应包裹在 `surface-bg` 卡片内）
- ❌ 在已有表面色对比的地方再加边框
- ❌ `brand-primary` 作为大区块背景