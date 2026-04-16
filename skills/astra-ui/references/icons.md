# Icons

## Hard Rules

- **Must use `lucide-react` icons**: no inline SVG and no other icon libraries
- **Verify before use**: confirm the icon name on `lucide.dev` or in `icon-discovery.md`

```tsx
import { Home, Search, Settings } from 'lucide-react'
```

## Size

| Size | Frequency | Usage |
|------|-----------|-------|
| 24px | ~60% | Toolbar, segmented controls, video controls (default) |
| 18px | — | Primary navigation icons |
| 16px | ~15% | Input prefixes/suffixes, button icons, compact UI |
| 32px | ~5% | Large feature icons, empty states |

**Default to 24px**. Use 16px for icons inside inputs or compact elements.

## strokeWidth

| Context | strokeWidth |
|---------|-------------|
| Primary navigation icons | `2.5` |
| Secondary navigation icons | `2.5` |
| All other cases | `2` (default, can be omitted) |

## Size Patterns

```tsx
// Navigation icon: 18px + strokeWidth 2.5
<Home className="h-[18px] w-[18px]" strokeWidth={2.5} />

// Button icon: 16px
<Button iconStart={<Plus size={16} />}>Add</Button>

// Input prefix: 16px
<InputField label="Search" prefix={<Search size={16} />} />

// Standard icon: 24px
<Search size={24} />
```

## Color

Icons inherit `currentColor` by default. Control icon color through the parent text color:

| Context | Parent class | Result |
|---------|--------------|--------|
| Default | `text-slate-900` | Standard icon color |
| Secondary / muted | `text-slate-500` | Lower emphasis |
| On brand-colored surface | `text-white` | White icon |
| Active / selected | `text-blue-700` | Brand-colored icon |
| Status | `text-red-600`, `text-green-600` | Semantic color |

```tsx
// Icon inherits text-slate-500
<span className="text-slate-500">
  <Clock size={16} /> 2 hours ago
</span>

// Icon inherits brand color
<span className="text-blue-700">
  <Check size={16} /> Selected
</span>
```

## Props

| Prop | Default | Purpose |
|------|---------|---------|
| `size` | `24` | Icon size in pixels |
| `color` | `"currentColor"` | Color; parent classes are preferred |
| `strokeWidth` | `2` | Line thickness. Use `2.5` for nav icons |
| `className` | — | Extra classes |

## Standard Icon Directory

### Navigation
- `Home` — home
- `Film` — video / media
- `Book` — resource library
- `Folder` — project / folder
- `Settings` — settings
- `ChevronRight` — expand / next
- `ChevronDown` — dropdown

### Actions
- `Plus` — add
- `X` — close
- `Check` — confirm
- `Pencil` — edit
- `Trash2` — delete
- `Search` — search
- `Download` / `Upload` — download / upload
- `Filter` — filter
- `MoreHorizontal` — more (horizontal)
- `MoreVertical` — more (vertical)

### Status
- `CheckCircle` — success
- `AlertTriangle` — warning
- `AlertCircle` — error
- `Info` — info
- `Loader2` — loading (use with `animate-spin`)

### User
- `User` — user
- `Users` — team
- `Bell` — notifications
- `Star` — favorite

## Rules

1. **Do not guess icon names** — verify on `lucide.dev` first
2. Import from `lucide-react`, never from another library
3. Do not create inline SVG
4. Keep icon sizes consistent within the same context
5. Use `strokeWidth={2.5}` for navigation icons
6. Control color via the parent text class, not the `color` prop
