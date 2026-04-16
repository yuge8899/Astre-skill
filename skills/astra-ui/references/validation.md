# Astra UI Validation Checklist

Before delivering any page, component, or prototype, always verify compliance against the following checklist.

## Critical — Highest Priority (Must Pass)

### Navigation & Structure
- [ ] **Primary Navigation**: width must be 110px, background must be `bg-slate-900`.
- [ ] **Horizontal layout**: Primary nav items icon + text must be **horizontally aligned**. Vertical stacking or wrapping is forbidden.
- [ ] **Secondary Navigation**: width must be 130px, background must be pure white `bg-white`.
- [ ] **Breadcrumb**: The top of the page must include a fixed white breadcrumb / header bar.

### Layout & Spacing
- [ ] **Canvas Background**: Page base color must be `bg-slate-50`.
- [ ] **Content container**: All business content must live inside `bg-white` `rounded-xl` cards. Placing content directly on the canvas is **strictly forbidden**.
- [ ] **Safe margins**: Content area margins must uniformly use `p-5` (20px).

### Color & Surfaces
- [ ] **No border rule**: Card containers **must not have a border** (`border`).
- [ ] **No shadow rule**: Card containers **must not have an outer shadow** (`shadow`). Only header or overlay layers may use minimal shadows.

## Major — High Priority (Design Compliance)

### Tables & Actions
- [ ] **Action visibility**: Table action columns **must not be hidden by default**.
- [ ] **Action display rule**: When action count is `<= 3`, all actions must be displayed inline.
- [ ] **Overflow rule**: When action count is `> 3`, extra actions must be collapsed into a "More" dropdown to avoid visual stacking.
- [ ] **Visual consistency**: Action text **must not mix multiple colors** such as red plus gray. Use brand blue (`text-blue-600`) with weight 400 (`font-normal`) consistently.

### Buttons & Interaction
- [ ] **Button priority**: Core CTA such as "Create" should appear at the top-left of the card.
- [ ] **Radius system**: Use `rounded-md`. `rounded-full` capsule buttons are **fully prohibited**.
- [ ] **Icon consistency**: Must use `lucide-react` icons. `strokeWidth` should uniformly be `2.5` for navigation.
- [ ] **Navigation dividers**: Do not use `border`, `border-r`, or similar dividers between navigation zones.

## Audit Process

1. **Developer self-check**: Use this checklist to reach 100% compliance.
2. **Page Agent validation**: Run automated scripts to verify DOM structure and class names.
3. **Visual walkthrough**: Ensure there are no extraneous decorative elements such as gradients or colored borders.
