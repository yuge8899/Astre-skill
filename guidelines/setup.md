# Project Setup

### Required Packages

This workflow pack does not use a single-library runtime.
Install only the layers you actually need, but always respect the fixed priority order.

Do this before anything else.

## Layered runtime stack

### Layer 1 — Generic primitives

Layer 1 is the baseline for generic actions, forms, cards, tables, pagination, sheets, badges, avatars, and utility primitives.

```json
{
  "dependencies": {
    "lucide-react": "latest"
  }
}
```

Initialize and add the required primitives:

```bash
npx shadcn@latest init
npx shadcn@latest add button input card dialog sheet badge avatar tooltip select checkbox radio-group switch textarea table pagination
npm install lucide-react
```

### Layer 2 — Tertiary Tabs

Use Layer 2 only when a page needs in-section `Tabs`.

```json
{
  "dependencies": {
    "@arco-design/web-react": "latest"
  }
}
```

### Layer 3 — Currency exchange

Use Layer 3 only when a page needs `CurrencyExchange` or shared Astra mode support.

```json
{
  "dependencies": {
    "@figma/astraui": "1.0.0"
  }
}
```

## Required CSS imports

Import styles for the selected layers at the app entry.

### Layer 2

```tsx
import '@arco-design/web-react/dist/css/arco.css'
```

### Layer 3

```tsx
import '@figma/astraui/styles.css'
```

Do NOT add `@source` rules for `@figma/astraui` in the consumer Tailwind config. The package ships pre-compiled CSS with all required utility classes.

## Theme provider

Wrap your app root with `ThemeProvider` when you use Layer 3 `CurrencyExchange` or want Astra theme state available application-wide.

```tsx
import { ThemeProvider } from '@figma/astraui'

function App() {
  return (
    <ThemeProvider>
      {/* app content */}
    </ThemeProvider>
  )
}
```

`ThemeProvider` reads `localStorage('astra-theme')` on mount and falls back to `prefers-color-scheme`. It manages the `.dark` class on `<html>` automatically.

### Theme hook

Use `useTheme` in any child component to read or toggle the theme:

```tsx
import { useTheme } from '@figma/astraui'

function ThemeToggle() {
  const { theme, toggleTheme, setTheme } = useTheme()
  return <Button onClick={toggleTheme}>{theme}</Button>
}
```

`ThemeProvider` must be an ancestor of any component calling `useTheme()`.

## Rules

- Layer 1 is mandatory for all generic components
- Layer 2 is mandatory before using `Tabs`
- Layer 3 is mandatory before using `CurrencyExchange`
- `ThemeProvider` is required before any component using `useTheme()` or `CurrencyExchange`
- All styling uses design system tokens — use semantic classes like `bg-brand-tertiary`, `bg-surface-bg`, `gap-xl`, not arbitrary values
