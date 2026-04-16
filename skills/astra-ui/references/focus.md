# Focus Styles

## Focus Ring Mode

All interactive elements must have a visible focus indicator.

```css
.interactive:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}
```

**In Tailwind**:
```tsx
<button className="focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2">
  Custom button
</button>
```

## On Brand-Color Backgrounds

On brand-color backgrounds, the standard focus ring may have insufficient contrast. Use white instead:

```tsx
<div className="bg-brand-primary">
  <button className="focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
    Action
  </button>
</div>
```

## Components with Built-in Focus Styles

The following components already handle focus styles — no need to add them manually:

- Button (all variants)
- InputField, TextareaField, SelectField
- Checkbox, RadioGroup, SwitchField
- SidebarButton, SecondaryNavItem
- Tabs
- ToolbarItem
- Modal (focus trap + Escape key)

## Custom Interactive Elements

When creating custom interactive elements, focus styles must be implemented manually:

```tsx
<div
  role="button"
  tabIndex={0}
  className="bg-surface-bg rounded-corner-lg p-xl cursor-pointer
             focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2"
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Custom card
</div>
```

**Custom interactive element rules**:
- Add `tabIndex={0}` to make it focusable
- Add `role="button"` (or appropriate ARIA role)
- Handle `Enter` and `Space` key events
- Apply the standard focus-visible pattern

## Rules

- Use `focus-visible`, not `focus` (shown only during keyboard navigation)
- Use `brand-primary` color
- 2px width + 2px offset
- Do not use `box-shadow` as a focus indicator
- Do not remove focus styles — if the default look is bad, replace it
- Do not set `outline: none` without a replacement