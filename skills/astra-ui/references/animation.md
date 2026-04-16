# Animation

Principle: animations must have a functional purpose, not decorative.

**Functional purposes**:
- Show change: indicate that UI has changed
- Show relationship: element B originates from element A
- Show progress: task is in progress
- Guide attention: draw attention to a new element

## Duration

| Token | Duration | Usage |
|-------|----------|-------|
| `duration-instant` | 80ms | State change (button press, hover) |
| `duration-fast` | 150ms | Small UI transitions (badge appear, icon switch) |
| `duration-normal` | 200ms | Standard transitions (dropdown expand, tooltip appear) |
| `duration-slow` | 300ms | Larger layout transitions (sidebar expand, modal open) |
| `duration-xslow` | 400ms | Page-level entry animation |

**Rule**: default to `duration-normal` (200ms). Interactive transitions must not exceed 400ms.

## Easing Curves

| Curve | CSS Value | Usage |
|-------|-----------|-------|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default — enter and exit |
| `ease-decelerate` | `cubic-bezier(0.0, 0, 0.2, 1)` | Enter screen (slide in, fade in) |
| `ease-accelerate` | `cubic-bezier(0.4, 0, 1, 1)` | Leave screen (slide out, fade out) |
| `ease-sharp` | `cubic-bezier(0.4, 0, 0.6, 1)` | Rapid state change |

**Rule**: linear easing is forbidden.

## Micro-Interaction Patterns

### Hover State
```css
transition: background-color 150ms ease-standard, color 150ms ease-standard;
```

### Focus Ring
```css
transition: box-shadow 80ms ease-standard;
```

### Button Press
```css
transition: transform 80ms ease-sharp;
/* On press: scale(0.98) */
```

### Dropdown Expand
```css
transition: opacity 200ms ease-decelerate, transform 200ms ease-decelerate;
/* From: opacity:0, translateY(-4px) → To: opacity:1, translateY(0) */
```

### Modal Open
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

### Toast Entry/Exit
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

**Rules**:
- All interactive elements must have hover and focus transitions
- Default 200ms + ease-standard
- Linear easing is forbidden
- Interactive transitions must not exceed 400ms
- Looping animations only run during loading states
- Respect `prefers-reduced-motion`

## Anti-patterns

- ❌ Animation with no functional purpose
- ❌ Duration > 400ms on interactive transitions
- ❌ Linear easing
- ❌ Looping animation with no stop condition
- ❌ Simultaneous animation of more than 2 properties