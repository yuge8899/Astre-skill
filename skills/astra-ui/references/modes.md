# Modes — Dark Mode

## Activation

| Mode | Activation | Usage |
|------|------------|-------|
| Light | Default (no `.dark` class) | Default |
| Dark | `.dark` class on `<html>` | User preference |

## Via ThemeProvider

```tsx
import { ThemeProvider, useTheme } from '@figma/astraui'

<ThemeProvider>
  <App />
</ThemeProvider>

// Toggle theme
const { theme, toggleTheme, setTheme } = useTheme()
```

`ThemeProvider` reads `localStorage('astra-theme')`, falling back to `prefers-color-scheme`.

## Manual Setup

```tsx
// Correct: add class on `<html>`
document.documentElement.classList.add('dark')

// Incorrect: adding on `<body>` (tokens won't apply)
document.body.classList.add('dark')
```

## Token Auto-Adaptation

| Token | Light | Dark |
|-------|-------|------|
| `--brand-tertiary` | `#EBF0FF` | `#1a1f2e` |
| `--surface-bg` | `#ffffff` | `#161621` |
| `--text-primary` | `rgba(0,0,0,0.85)` | `rgba(255,255,255,0.85)` |
| `--border-primary` | `rgba(0,0,0,0.15)` | `rgba(255,255,255,0.15)` |

## Immutable Tokens

| Token | Value | Reason |
|-------|-------|--------|
| `--brand-primary` | `#2E62FF` | Brand color is consistent across both modes |
| `--on-brand` | `#ffffff` | Always white |
| `--on-reverse` | `#1e1e1e` | Always dark |
| `--modal-scrim` | `rgba(0,0,0,0.75)` | Scrim is always dark |

## Components Requiring Special Attention

The following components appear on surfaces that do not change with the mode and must work in both modes:

- **FavoriteButton** — overlays video thumbnails, uses `surface-bg` background
- **DurationBadge** — overlays video thumbnails, uses `input-bg` background + white text
- **Tooltip** — uses `surface-dark` background + `on-brand` text

## Rules

- Use semantic tokens for automatic dark mode adaptation
- Do not hardcode hex values
- `on-brand` is white in both modes
- `on-reverse` is dark in both modes
- `text-tertiary` has low contrast in both modes — do not use for critical content
- `ThemeProvider` must be an ancestor of any component calling `useTheme()`