# Animation 动画

原则：动画必须有功能目的，不是装饰。

**功能目的**：
- Show change：指示 UI 发生了变化
- Show relationship：元素 B 来自元素 A
- Show progress：任务正在进行
- Guide attention：引导关注新元素

## Duration 时长

| Token | 时长 | 用途 |
|-------|------|------|
| `duration-instant` | 80ms | 状态变化（按钮按下、悬停） |
| `duration-fast` | 150ms | 小 UI 过渡（badge 出现、图标切换） |
| `duration-normal` | 200ms | 标准过渡（dropdown 展开、tooltip 出现） |
| `duration-slow` | 300ms | 较大布局过渡（侧边栏展开、modal 打开） |
| `duration-xslow` | 400ms | 页面级进入动画 |

**规则**：默认用 `duration-normal` (200ms)。交互过渡不超过 400ms。

## Easing 缓动曲线

| 曲线 | CSS 值 | 用途 |
|------|--------|------|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | 默认 — 进入和离开 |
| `ease-decelerate` | `cubic-bezier(0.0, 0, 0.2, 1)` | 进入屏幕（滑入、淡入） |
| `ease-accelerate` | `cubic-bezier(0.4, 0, 1, 1)` | 离开屏幕（滑出、淡出） |
| `ease-sharp` | `cubic-bezier(0.4, 0, 0.6, 1)` | 快速状态变化 |

**规则**：禁止用 linear 缓动。

## 微交互模式

### Hover 状态
```css
transition: background-color 150ms ease-standard, color 150ms ease-standard;
```

### 焦点环
```css
transition: box-shadow 80ms ease-standard;
```

### 按钮按下
```css
transition: transform 80ms ease-sharp;
/* On press: scale(0.98) */
```

### Dropdown 展开
```css
transition: opacity 200ms ease-decelerate, transform 200ms ease-decelerate;
/* From: opacity:0, translateY(-4px) → To: opacity:1, translateY(0) */
```

### Modal 打开
```css
transition: opacity 300ms ease-decelerate, transform 300ms ease-decelerate;
/* From: opacity:0, scale(0.96) → To: opacity:1, scale(1) */
```

### Skeleton shimmer
```css
animation: shimmer 1.5s ease-in-out infinite;
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### Toast 进入/退出
```css
/* Entry: slide up from bottom */
transition: transform 200ms ease-decelerate, opacity 200ms ease-decelerate;

/* Exit: fade out */
transition: opacity 150ms ease-accelerate;
```

## Reduced Motion

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
- 尊重 `prefers-reduced-motion`

## Anti-patterns

- ❌ Animation with no functional purpose
- ❌ Duration > 400ms on interactive transitions
- ❌ Linear easing
- ❌ Looping animation with no stop condition
- ❌ Simultaneous animation of more than 2 properties