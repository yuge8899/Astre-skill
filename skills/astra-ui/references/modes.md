# Modes 暗色模式

## 激活方式

| Mode | Activation | Usage |
|------|------------|-------|
| Light | Default (无 `.dark` class) | 默认 |
| Dark | `.dark` class on `<html>` | 用户偏好 |

## 通过 ThemeProvider

```tsx
import { ThemeProvider, useTheme } from '@figma/astraui'

<ThemeProvider>
  <App />
</ThemeProvider>

// 切换主题
const { theme, toggleTheme, setTheme } = useTheme()
```

`ThemeProvider` 读取 `localStorage('astra-theme')`，回退到 `prefers-color-scheme`。

## 手动设置

```tsx
// 正确：在 <html> 上添加 class
document.documentElement.classList.add('dark')

// 错误：在 <body> 上添加（token 不会生效）
document.body.classList.add('dark')
```

## Token 自动适配

| Token | Light | Dark |
|-------|-------|------|
| `--brand-tertiary` | `#EBF0FF` | `#1a1f2e` |
| `--surface-bg` | `#ffffff` | `#161621` |
| `--text-primary` | `rgba(0,0,0,0.85)` | `rgba(255,255,255,0.85)` |
| `--border-primary` | `rgba(0,0,0,0.15)` | `rgba(255,255,255,0.15)` |

## 不变的 Token

| Token | 值 | 原因 |
|-------|-----|------|
| `--brand-primary` | `#2E62FF` | 品牌色在两种模式下一致 |
| `--on-brand` | `#ffffff` | 始终白色 |
| `--on-reverse` | `#1e1e1e` | 始终深色 |
| `--modal-scrim` | `rgba(0,0,0,0.75)` | 遮罩始终深色 |

## 需要特别注意的组件

以下组件出现在不随模式变化的表面上，必须在两种模式下都可用：

- **FavoriteButton** — 覆盖视频缩略图，使用 `surface-bg` 背景
- **DurationBadge** — 覆盖视频缩略图，使用 `input-bg` 背景 + 白色文字
- **Tooltip** — 使用 `surface-dark` 背景 + `on-brand` 文字

## 规则

- 使用语义 token，暗色模式自动适配
- 不用硬编码 hex 值
- `on-brand` 在两种模式下都是白色
- `on-reverse` 在两种模式下都是深色
- `text-tertiary` 在两种模式下对比度都低 — 不用于关键内容
- `ThemeProvider` 必须是调用 `useTheme()` 的组件的祖先