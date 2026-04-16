# Changelog

All notable changes to this project will be documented in this file.

## [v1.9.1] - 2026-04-11

### Changed

- **Gate Contract migrated to references**
  - Machine-readable contract moved to `skills/astra-ui/references/gate-contract.md`
  - `SKILL.md` retains only the entry-point description to reduce noise in the main skill file

- **shadcn/ui component mapping migrated to references**
  - Component mapping from `SKILL.md` moved down to `skills/astra-ui/references/components.md`
  - `navigation.md` and `README.md` updated to reference the new location

- **Gate and generation scripts aligned with new source**
  - `generate-system-guide.js`
  - `check-gate.js`
  - `check-astra-output.js`
  - `run-pre-commit.js`
  - Related tests and `SYSTEM_GUIDE.md`

### Benefits

- `SKILL.md` is more focused on the entry point and core rules
- Machine contract and detailed references are all archived in `references/`
- Gate checks, pre-commit checks, and generated docs are consistent with the new structure

## [v1.9.0] - 2026-04-11

### Added

- **Dashboard HTML prototype** - `workflow/demos/dashboard-demo.html`
  - Home workspace layout
  - KPI cards, to-dos, activity feed, and calendar modules

- **README Demo preview entry**
  - Screenshot previews for all 4 HTML demos
  - Online preview links, source file links, and local preview instructions

### Changed

- **Form Controls Token rules added**
  - Checkbox/Radio explicitly use `accent-blue-700`
  - Default border standardized as `border-slate-200`

- **Existing HTML demos aligned with Astra spec**
  - `product-list-demo.html`
  - `product-tags-demo.html`
  - `scrm-dashboard-demo.html`

### Benefits

- README can directly serve as a demo navigation page
- HTML prototypes are easier to review, demo, and regression-test
- Form control color and border specs are clearer, reducing generation drift

## [v1.8.0] - 2026-04-10

### Added

- **shadcn/ui integration** - Complete component mapping and usage examples
  - Import paths for 17 commonly-used components
  - Mapping between Astra variants and shadcn variants
  - Full examples for Button, Input, Dialog, Table, etc.

- **page-agent automated testing** - Natural-language browser control
  - Installation and configuration guide
  - Navigation spec validation examples
  - Button layout validation
  - Table and form validation
  - MCP Server integration

- **Example pages**
  - order-list-page.tsx: React order list component
  - order-list-preview.html: HTML preview page

### Changed

- **Icon spec updated**
  - Must use lucide.dev icons (hard rule)
  - strokeWidth={1.5} for navigation icons
  - Icon names must be verified before use

- **Color system migration**
  - Tailwind CSS v4.1.6
  - Blue as brand primary color
  - Slate as neutral color
  - Blue-700 as theme color

### Benefits

- shadcn/ui provides controllable component source
- page-agent enables natural-language automated testing
- Icon spec is stricter, prevents mixing libraries

## [v1.7.1] - 2026-04-10

### Added

- **Anti-patterns added** - Helps AI avoid "what not to do"
  - components.md: Button, Navigation, Tabs, Table, Pagination, Modal, Badge, Breadcrumb, Form Layout, etc.
  - tokens.md: Color, Spacing, Radius, Typography, Elevation, Surfaces
  - animation.md: Added missing prefers-reduced-motion support

### Benefits

- AI can recognize common mistakes and avoid them
- Improves generated code quality
- Reduces review change rounds

## [v1.7.0] - 2026-04-10

### Changed

- **Refactored to Progressive Disclosure architecture** - SKILL.md slimmed + references/ separated
  - SKILL.md: 1368 lines → 235 lines (only core content loaded on trigger)
  - references/tokens.md: Full definitions for Spacing, Color, Radius, Typography, Elevation, Surfaces
  - references/components.md: All component Props definitions
  - references/templates.md: Full page template code
  - references/animation.md: Animation rules
  - references/modes.md: Dark mode
  - references/focus.md: Focus styles
  - references/icons.md: Icon rules

### Benefits

- Faster trigger (only 235 lines loaded)
- More efficient context window usage
- On-demand loading of detailed rules
- Aligns with skill-creator best practices

## [v1.6.0] - 2026-04-10

### Added

- **Full Guidelines content embedded** - All rules directly available
  - Animation: duration scale, easing curves, micro-interaction patterns, reduced motion
  - Modes/Dark mode: activation method, Token auto-adaptation, immutable Tokens
  - Focus: focus ring modes, focus on brand-color backgrounds, custom interactive elements
  - Icons: size spec, color inheritance, naming rules, Props
  - Full decision trees: Spacing, Color, Radius, Typography, Elevation, Surfaces

- **Complete component Props definitions** - Props tables for all core components
  - Button, IconButton, ButtonGroup
  - InputField, TextareaField, SelectField, Checkbox, RadioGroup, SwitchField
  - SidebarNavigation, SidebarButton, SecondaryNav, SecondaryNavItem
  - Table, Pagination, Modal
  - Badge, Toast, Tooltip, EmptyState, Skeleton
  - Avatar, ItemCard, Breadcrumb, Toolbar
  - ChatBubbles, PromptInput, PromptPane

### Changed

- Skill file reorganized into ~800-line slim version
- Removed redundant on-demand reading guides, replaced with direct embedding
- Strengthened visual style examples and comparisons

## [v1.5.0] - 2026-04-10

### Added

- **Complete Design Token system** - Core Token definitions embedded
  - Spacing: 6-level spacing tokens + common scenarios
  - Color: Primary tokens + Tailwind mapping + background/text selection rules
  - Radius: 4-level corner radius + component mapping
  - Typography: 5 primary classes + common patterns
  - Elevation: Shadow usage rules
  - Surfaces: Surface layering strategy

- **On-demand Guidelines reading guide** - Complete file mapping table
  - Foundations: 9 base token files
  - Components: 15 detailed component docs
  - Composition: 4 layout combination docs

### Changed

- Skill file expanded from 874 lines to 1049 lines
- Token definitions upgraded from simplified to full version

## [v1.4.0] - 2026-04-10

### Added

- **shadcn/ui component installation manifest** - Complete component dependency installation guide
  - One-command install for all components
  - Installation commands grouped by category (layout, buttons, inputs, feedback, overlays, data, navigation, charts)
  - Icon library installation command
  - Component usage example code

## [v1.3.0] - 2026-04-10

### Changed

- Replaced native recharts with shadcn/ui Chart component
- Updated Analytics Dashboard template to use `ChartContainer` API
- Chart colors maintain Astra minimal style (brand-primary + neutral gray)

### Added

- Chart component usage guide and installation commands
- `chartConfig` color configuration example

## [v1.2.0] - 2026-04-10

### Added

- **Template 1.5: Analytics Dashboard** - Data analytics page template
  - Top stat cards (4 key metrics)
  - Line chart card (trend analysis)
  - Bar chart card (comparison analysis)
  - Data table card
- Chart design rules
- Chart validation checklist

## [v1.1.0] - 2026-04-10

### Added

- **Design Principles** section
  - Minimal color rules
  - Card design rules
  - Color usage rules (explicit prohibitions)
- **Visual style examples**
  - Correct vs. incorrect code comparisons
  - Style comparison summary table
- Validation Checklist: added visual style checks

### Changed

- Hard rules expanded from 10 to 12
- Strengthened color usage restrictions

## [v1.0.0] - 2026-04-10

### Added

- **Skill file** `skills/astra-ui/SKILL.md`
  - Quick entry points (by task type)
  - Core rules (10 hard rules)
  - Dependency stack definition (three layers)
  - 4 page templates + shell code
  - Layout decision tree
  - Component decision tree
  - Validation checklist
  - Component directory quick reference

- **Rule documents** `guidelines/`
  - 16 component rule files
  - 10 foundation rule files
  - 6 composition rule files
  - Root-level rule files

---

## Roadmap

### v1.4.0 (Planned)

- Mobile responsive rules
- Dark mode support

### v2.0.0 (Planned)

- Full component library packaging
- Design Token export
