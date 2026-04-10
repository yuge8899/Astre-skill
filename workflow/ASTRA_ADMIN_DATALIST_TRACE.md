# Astra Admin Data List Trace

## Request

生成一个管理后台界面，里面有数据，表格，筛选。

## Source Of Truth Used

For this run, the effective source of truth was the latest local `astra-ui` skill package:

- `/Users/laotie/Documents/Astre-skill/skills/astra-ui/SKILL.md`
- `/Users/laotie/Documents/Astre-skill/skills/astra-ui/references/templates.md`
- `/Users/laotie/Documents/Astre-skill/skills/astra-ui/references/components.md`
- `/Users/laotie/Documents/Astre-skill/skills/astra-ui/references/icons.md`

These were prioritized because the user explicitly supplied a newer `/astra-ui` command block with stricter admin backend rules that differ from the earlier generic Astra workflow pack.

## Workflow Classification

- `in_scope`: true
- `task_type`: `new_page`
- `template`: `Data List / Management`
- `needs_layout_selection`: true
- `needs_component_selection`: true
- `needs_validation`: true

## Layout Decision

Selected template:

- `Data List / Management`

Required shell from skill rules:

- Primary nav: `110px`, `bg-white`
- Primary nav items: icon + label **horizontal**, not vertical
- Secondary nav: `130px`, `bg-slate-100`
- Content area: `bg-blue-100`, `p-6`
- Breadcrumb card at top of content region
- Main card contains action buttons + filters + table + pagination together

## Implementation Targets Found

The actual local implementation targets already existed:

- `order-list-preview.html`
- `order-list-page.tsx`

These files match the requested page type better than the older `customer-service-dashboard.html` prototype.

## Component Mapping Used

### Static preview

- `order-list-preview.html` uses HTML + Tailwind CDN for browser-previewable output

### Componentized version

- `order-list-page.tsx` uses componentized structure aligned with the skill package conventions:
  - `SidebarNavigation`
  - `SecondaryNav`
  - `Button`
  - `InputField`
  - `SelectField`
  - `Badge`
  - `Table`
  - `Pagination`
  - `Avatar`

## Validation Against Latest Rules

### Primary navigation

- passes: width is `110px`
- passes: background is `bg-white`
- passes: items are horizontal (`flex items-center gap-1`)
- passes: active state uses blue highlight

### Secondary navigation

- passes: width is `130px`
- passes: background is `bg-slate-100`

### Content layout

- passes: content uses `bg-blue-100`
- passes: content padding is `p-6`
- passes: breadcrumb exists at top of content region on white card

### Main card

- passes: important button is on the left
- passes: primary button comes before secondary buttons
- passes: filters + table + pagination live inside the same card

### Table rules

- passes: `rowKey` is set in TSX version
- passes: pagination exists
- passes: actions column is fixed right in TSX version
- passes: visible action count is within limit

### Icon rules

- passes: uses `lucide-react`
- passes: navigation icons use `strokeWidth={1.5}` in TSX version

## Current Best Output

Use these as the current authoritative admin list implementation:

- browser preview: `order-list-preview.html`
- componentized implementation reference: `order-list-page.tsx`

## Practical Conclusion

The newest admin backend request is better satisfied by the `order-list-*` files than by the older `customer-service-dashboard.html` concept page.

For this task, the workflow converged on:

- Data List template
- two-level left navigation
- white card container
- left-aligned primary CTA
- inline filters
- table + pagination in one card

That is the correct page family for the user’s latest request.
