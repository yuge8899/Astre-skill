# Icons 图标

## 来源

所有图标来自 `lucide-react`。禁止内联 SVG。

```tsx
import { Home, Search, Settings } from 'lucide-react'
```

## 尺寸

| 尺寸 | 频率 | 用途 |
|------|------|------|
| 24px | ~60% | Toolbar、segmented controls、视频控制 |
| 20px | ~20% | SidebarButton、SecondaryNavItem（用 `className="size-full"`） |
| 16px | ~15% | 输入框前缀/后缀、紧凑 UI |
| 32px | ~5% | 大特性图标、空状态 |

**默认用 24px**。16px 用于输入框内或紧凑元素。

## 尺寸模式

```tsx
// 标准 24px
<Search size={24} />

// 16px — 输入框前缀
<InputField prefix={<Search size={16} />} label="Search" />

// 填充父容器 — SidebarButton
<SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} />

// 填充父容器 — SecondaryNavItem
<SecondaryNavItem icon={<Home className="size-full" strokeWidth={1.5} />} label="Home" />
```

## 命名规则

Lucide 图标用 PascalCase，从 kebab-case 文件名派生：

- 文件：`arrow-up.js` → 导入：`ArrowUp`
- 文件：`chevron-down.js` → 导入：`ChevronDown`
- 文件：`more-horizontal.js` → 导入：`MoreHorizontal`

## 颜色

图标默认继承 `currentColor`，通过父元素文字色控制：

| 上下文 | 父元素 class | 结果 |
|--------|-------------|------|
| 默认 | `text-text-primary` | 标准图标色 |
| 次要/弱化 | `text-text-secondary` | 降低强调 |
| 品牌色表面 | `text-on-brand` | 白色图标 |
| 激活/选中 | `text-brand-primary` | 品牌色图标 |
| 状态 | `text-danger`, `text-success` | 语义色 |

```tsx
// 图标继承 text-text-secondary
<span className="text-text-secondary">
  <Clock size={16} /> 2 hours ago
</span>

// 图标继承品牌色
<span className="text-brand-primary">
  <Check size={16} /> Selected
</span>
```

## Props

| Prop | 默认 | 用途 |
|------|------|------|
| `size` | `24` | 图标尺寸（像素） |
| `color` | `"currentColor"` | 颜色（推荐用父元素 class） |
| `strokeWidth` | `2` | 线条粗细 — 导航图标用 `1.5` |
| `className` | — | 额外 class（`"size-full"` 填充容器） |

## 规则

- **不猜图标名** — 使用前在 lucide.dev 验证
- 从 `lucide-react` 导入 — 不从 `@figma/astraui` 导入
- 不创建内联 SVG
- 同一上下文中图标尺寸一致
- `SidebarButton` 和 `SecondaryNavItem` 用 `strokeWidth={1.5}`
- 填充容器时用 `className="size-full"`
- 通过父元素文字 class 控制颜色，不用 `color` prop