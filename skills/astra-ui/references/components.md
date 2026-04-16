# Component Props

## Component Sources

Astra UI uses `shadcn/ui` as the default foundation layer. For more complex cases such as data tables or Tabs, you may integrate Arco based on the project context, but the final visual result must still conform to Astra rules.

## shadcn/ui Mapping

| Astra Component | shadcn Component | Import Path |
|-----------------|------------------|-------------|
| Button | `Button` | `@/components/ui/button` |
| InputField | `Input` + `Label` | `@/components/ui/input`, `@/components/ui/label` |
| TextareaField | `Textarea` | `@/components/ui/textarea` |
| SelectField | `Select` | `@/components/ui/select` |
| Checkbox | `Checkbox` | `@/components/ui/checkbox` |
| SwitchField | `Switch` | `@/components/ui/switch` |
| RadioGroup | `RadioGroup` | `@/components/ui/radio-group` |
| Modal | `Dialog` | `@/components/ui/dialog` |
| Drawer | `Sheet` | `@/components/ui/sheet` |
| Table | `Table` | `@/components/ui/table` |
| Pagination | `Pagination` | Custom or table built-in pagination |
| Badge | `Badge` | `@/components/ui/badge` |
| Toast | `Toast` | `@/components/ui/toast` |
| Tooltip | `Tooltip` | `@/components/ui/tooltip` |
| Avatar | `Avatar` | `@/components/ui/avatar` |
| Dropdown | `DropdownMenu` | `@/components/ui/dropdown-menu` |
| Tabs | `Tabs` | `@/components/ui/tabs` or `@arco-design/web-react` |
| Breadcrumb | `Breadcrumb` | `@/components/ui/breadcrumb` |

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
```

## Icons

- Must use `lucide-react`
- Primary navigation icons must use `18px` with `strokeWidth={2.5}`
- Regular button, input, and toolbar icons should use `16px`
- Other standard icons default to `24px`

```tsx
import { Home, Plus, Search } from 'lucide-react'

<Home className="h-[18px] w-[18px]" strokeWidth={2.5} />

<Button className="rounded-md bg-blue-600 text-white hover:bg-blue-700">
  <Plus size={16} className="mr-2" />
  New Order
</Button>

<div className="relative">
  <Search
    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
    size={16}
  />
  <Input className="pl-9" placeholder="Search orders" />
</div>
```

## Button

| Astra Variant | Recommended Style |
|---------------|-------------------|
| `primary` | `bg-blue-600 text-white hover:bg-blue-700 rounded-md` |
| `neutral` | `border border-slate-200 text-slate-700 rounded-md` |
| `subtle` | `text-slate-600 hover:bg-slate-50 rounded-md` |

Rules:
- All buttons use `rounded-md`
- `rounded-full` is prohibited
- Most pages should keep a single primary CTA; a small number of key dual-primary pivots is acceptable, but do not let them proliferate

```tsx
<Button className="rounded-md bg-blue-600 text-white hover:bg-blue-700">
  Save
</Button>

<Button variant="outline" className="rounded-md border-slate-200 text-slate-700">
  Export
</Button>
```

## Input / Textarea / Select

- Input-like controls use `bg-slate-100`
- Default borders should stay visually light; stronger feedback can appear on focus
- Input controls must live inside `bg-white` cards, never directly on the canvas

```tsx
<div className="flex flex-col gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    className="border-transparent bg-slate-100 focus:border-blue-500 focus:bg-white"
    placeholder="Enter email"
  />
</div>

<Textarea
  className="border-transparent bg-slate-100 focus:border-blue-500 focus:bg-white"
  placeholder="Additional notes"
  rows={4}
/>

<Select>
  <SelectTrigger className="border-transparent bg-slate-100 focus:border-blue-500 focus:bg-white">
    <SelectValue placeholder="Select status" />
  </SelectTrigger>
</Select>
```

## Modal (Dialog)

- Use for medium-complexity confirmation and editing flows
- A light shadow is allowed because this is a floating layer
- Primary actions go on the right, secondary actions on the left

```tsx
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent className="sm:max-w-[480px]">
    <DialogHeader>
      <DialogTitle>New Order</DialogTitle>
    </DialogHeader>
    <div className="space-y-4 py-4">
      {/* Form content */}
    </div>
    <DialogFooter>
      <Button
        className="rounded-md"
        onClick={() => setIsOpen(false)}
        variant="outline"
      >
        Cancel
      </Button>
      <Button className="rounded-md bg-blue-600 text-white hover:bg-blue-700">
        Create
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Drawer (Sheet)

- Use only for simple forms, typically with `<= 5` fields
- Common width is `400px` to `480px`
- Keep a primary/secondary action pair in the footer

```tsx
<Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetContent className="w-[440px] sm:max-w-[440px]" side="right">
    <SheetHeader>
      <SheetTitle>New Campaign</SheetTitle>
    </SheetHeader>
    <div className="space-y-4 py-4">
      {/* Simple form */}
    </div>
    <SheetFooter>
      <Button className="rounded-md" variant="outline">
        Cancel
      </Button>
      <Button className="rounded-md bg-blue-600 text-white hover:bg-blue-700">
        Create
      </Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## Table

- Tables must live inside a `bg-white` card
- The card itself has no border and no shadow
- The `Actions` column should be fixed on the right when possible
- When action count is `<= 3`, keep them visible inline; move extras into "More" only when needed
- Table action text should uniformly use `text-blue-600`

```tsx
<section className="rounded-xl bg-white p-5">
  <div className="mb-4 flex items-center justify-between gap-3">
    <div className="flex items-center gap-2">
      <Button className="rounded-md bg-blue-600 text-white hover:bg-blue-700">
        New Order
      </Button>
      <Button variant="outline" className="rounded-md border-slate-200 text-slate-700">
        Import
      </Button>
    </div>
    <Input
      className="max-w-[240px] border-transparent bg-slate-100"
      placeholder="Search orders"
    />
  </div>

  <Table>
    <TableHeader>
      <TableRow className="border-b border-slate-100">
        <TableHead className="text-slate-500">Order ID</TableHead>
        <TableHead className="text-slate-500">Customer</TableHead>
        <TableHead className="text-slate-500">Status</TableHead>
        <TableHead className="text-right text-slate-500">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow className="border-b border-slate-100 last:border-0">
        <TableCell className="font-medium text-slate-900">ORD-001</TableCell>
        <TableCell>Alice Chen</TableCell>
        <TableCell>
          <Badge className="bg-green-50 text-green-600">Completed</Badge>
        </TableCell>
        <TableCell className="text-right">
          <div className="flex items-center justify-end gap-3">
            <button className="font-normal text-blue-600">View</button>
            <button className="font-normal text-blue-600">Edit</button>
            <button className="font-normal text-blue-600">Sync</button>
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</section>
```

## Badge

| Status | className |
|--------|-----------|
| Success | `bg-green-50 text-green-600` |
| Warning | `bg-amber-50 text-amber-600` |
| Error | `bg-red-50 text-red-600` |
| Info | `bg-blue-50 text-blue-600` |
| Default | `bg-slate-100 text-slate-600` |

## Media

- **Avatar**: use the standard `Avatar` primitive for user identity
- **Placeholder imagery**: use [image-placeholders.md](image-placeholders.md) for page, card, hero, and gallery image selection
- **Content cards / media cards**: keep them inside `bg-white` cards with Astra spacing and radius rules
- **Video metadata / controls**: apply the same icon, spacing, and button rules defined in this document instead of introducing a separate visual system

## PrimaryNav

- Fixed width `110px`
- Fixed background `bg-slate-900`
- Nav items must be horizontal, never stacked vertically
- Active state should use high-contrast text on the dark surface, optionally with a light brand accent
- Do not add `border-r` between navigation zones

```tsx
<nav className="w-[110px] shrink-0 bg-slate-900 px-3 py-6">
  <a className="flex items-center gap-2 rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-800 hover:text-white">
    <Home className="h-[18px] w-[18px]" strokeWidth={2.5} />
    <span className="truncate text-xs">Home</span>
  </a>

  <a className="mt-1 flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-3 text-white">
    <Package className="h-[18px] w-[18px]" strokeWidth={2.5} />
    <span className="truncate text-xs font-medium">Products</span>
  </a>
</nav>
```

## SecondaryNav

- Fixed width `130px`
- Fixed background `bg-white`
- Text only, no icons
- Do not add `border-r`

```tsx
<nav className="w-[130px] shrink-0 bg-white px-3 py-6">
  <a className="block rounded-md px-3 py-2 text-sm text-slate-500 hover:bg-slate-50">
    All Products
  </a>
  <a className="mt-1 block rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600">
    Published
  </a>
</nav>
```

## Breadcrumb Header

- Must stay fixed at the top of the main content area
- Uses background `bg-white`
- It is the content-area header container, not an extra floating card

```tsx
<header className="sticky top-0 z-10 flex h-16 shrink-0 items-center border-b border-slate-100 bg-white px-5">
  <div className="flex items-center gap-2 text-sm text-slate-500">
    <span>Home</span>
    <ChevronRight className="h-3 w-3" />
    <span>Orders</span>
    <ChevronRight className="h-3 w-3" />
    <span className="font-medium text-slate-900">All Orders</span>
  </div>
</header>
```

## Page Skeleton

```tsx
<div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900">
  <PrimaryNav />
  <SecondaryNav />
  <main className="flex min-w-0 flex-1 flex-col">
    <BreadcrumbHeader />
    <div className="flex-1 overflow-y-auto p-5">
      <section className="rounded-xl bg-white p-5">{/* page content */}</section>
    </div>
  </main>
</div>
```

## Anti-patterns

- Do not use `bg-white` for primary nav or `bg-slate-100` for secondary nav
- Do not use `rounded-full` on buttons
- Do not use `strokeWidth={1.5}` on primary nav icons
- Do not add borders or heavy shadows around cards
- Do not hide table actions until hover by default
