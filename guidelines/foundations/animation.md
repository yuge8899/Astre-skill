# Animation & Motion

## Principles

Astra uses motion to communicate meaning, not as decoration. Every animation must have a functional purpose:

- **Show change**: indicate that something in the UI has changed
- **Show relationship**: communicate that element B came from element A
- **Show progress**: communicate that a task is underway
- **Guide attention**: direct focus to a new or changed element

Animation that serves none of these is removed.

## Duration scale

| Token | Duration | Use |
|---|---|---|
| `duration-instant` | `80ms` | State changes on interactive elements (button press, hover) |
| `duration-fast` | `150ms` | Small UI transitions (badge appear, icon swap) |
| `duration-normal` | `200ms` | Standard transitions (dropdown open, tooltip appear) |
| `duration-slow` | `300ms` | Larger layout transitions (sidebar expand, modal open) |
| `duration-xslow` | `400ms` | Page-level entry animations (skeleton → content) |

Default to `duration-normal` (200ms) for most transitions. Never use durations > 400ms for interactive transitions.

## Easing

| Curve | CSS value | Use |
|---|---|---|
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Elements that enter and exit the viewport — default |
| `ease-decelerate` | `cubic-bezier(0.0, 0, 0.2, 1)` | Elements entering the screen (slide in, fade in) |
| `ease-accelerate` | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting the screen (slide out, fade out) |
| `ease-sharp` | `cubic-bezier(0.4, 0, 0.6, 1)` | Elements that quickly change state and stay on screen |

Never use linear easing for UI transitions — it reads as mechanical.

## Micro-interaction patterns

### Hover state
```css
transition: background-color 150ms ease-standard,
            color 150ms ease-standard,
            border-color 150ms ease-standard;
```

### Focus ring
```css
transition: box-shadow 80ms ease-standard;
```

### Button press
```css
transition: transform 80ms ease-sharp,
            background-color 80ms ease-standard;
/* On press: scale(0.98) */
```

### Dropdown / menu open
```css
/* Enter */
transition: opacity 200ms ease-decelerate,
            transform 200ms ease-decelerate;
/* From: opacity:0, translateY(-4px) */
/* To: opacity:1, translateY(0) */
```

### Modal open/close
```css
/* Overlay */
transition: opacity 200ms ease-standard;

/* Panel */
transition: opacity 300ms ease-decelerate,
            transform 300ms ease-decelerate;
/* From: opacity:0, scale(0.96) */
/* To: opacity:1, scale(1) */
```

### Skeleton shimmer
```css
animation: shimmer 1.5s ease-in-out infinite;
@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### Toast entry/exit
```css
/* Entry: slide up from bottom */
transition: transform 200ms ease-decelerate,
            opacity 200ms ease-decelerate;

/* Exit: fade out */
transition: opacity 150ms ease-accelerate;
```

## Reduced motion

Always respect the user's system preference. Wrap any non-essential animation with the `prefers-reduced-motion` media query:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

This is already implemented in `astra-prototype.css`. Do not override it.

## Looping animations

Looping animations (spinners, skeleton shimmer, pulse indicators) must:
- Have a clear purpose (loading state)
- Stop automatically when the trigger condition ends
- Never loop for decoration

**Never** use CSS `animation: infinite` for decorative motion. If you need a persistent animation for a status indicator, use a slow pulse with `animation-iteration-count: infinite` only on active/loading states — not on static elements.

## Rules

- All interactive elements must have hover and focus transitions
- Default transition duration: `200ms` with `ease-standard`
- Never use linear easing
- Never exceed `400ms` for interactive element transitions
- Respect `prefers-reduced-motion` — all animations must degrade gracefully
- Looping animations must only run on active loading/processing states
- Every animation must serve one of: show change, show relationship, show progress, or guide attention

## Anti-patterns

- ❌ Animation with no functional purpose (decorative spinning icons, bouncing elements)
- ❌ Duration > 400ms on interactive transitions
- ❌ Linear easing
- ❌ Looping animation with no stop condition
- ❌ Missing `prefers-reduced-motion` support
- ❌ Simultaneous animation of more than 2 properties (too cognitively expensive)
