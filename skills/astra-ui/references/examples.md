# Astra UI Visual Style & Implementation Examples

This guide helps developers understand Astra UI design requirements more intuitively by comparing **correct implementations** with **incorrect examples**.

## Page Layout Examples

### ✅ Correct Implementation

Conforms to dual-navigation, borderless cards, breadcrumb header rules, and the rest of the Astra structure.

```tsx
<div className="flex h-screen bg-slate-50">
  {/* Primary nav: 110px, horizontal layout */}
  <nav className="flex w-[110px] shrink-0 flex-col bg-slate-900 pt-6">
    <div className="flex items-center gap-2 px-3 py-3 text-white">
      <Home size={16} strokeWidth={2.5} />
      <span className="text-xs">Home</span>
    </div>
  </nav>

  {/* Secondary nav: 130px, pure white, no dividers */}
  <nav className="w-[130px] bg-white py-6">
    <a className="block bg-blue-50 px-3 py-2 text-blue-600">Product List</a>
  </nav>

  <main className="flex min-w-0 flex-1 flex-col">
    {/* Breadcrumb header: fixed, bg-white */}
    <header className="sticky top-0 z-10 border-b border-slate-100 bg-white px-5 py-4">
      <nav className="text-sm text-slate-500">Home / Product Management</nav>
    </header>

    {/* Scrollable content: p-5, slate-50 background */}
    <div className="flex-1 space-y-5 overflow-y-auto p-5">
      <section className="rounded-xl bg-white p-5">
        <h1 className="text-lg font-bold">Borderless, shadowless card</h1>
      </section>
    </div>
  </main>
</div>
```

### ❌ Incorrect Implementation

Common violations include vertical nav items, bordered cards, and missing safe margins.

```tsx
// ❌ Primary nav item stacked vertically
<a className="flex flex-col items-center">
  <Home />
  <span>Home</span>
</a>

// ❌ Card with border or heavy shadow
<div className="border border-slate-200 shadow-lg">...</div>

// ❌ Breadcrumb text placed directly on the canvas with no white container
<div>Home / Product Management</div>

// ❌ Not enough safe margin
<main className="p-2">...</main>
```

## Table Action Examples

### ✅ Correct Implementation

Up to 3 action items stay visible inline, all using the same brand color and weight 400.

```tsx
<td className="px-5 py-4 text-right">
  <div className="flex items-center justify-end gap-3">
    <button className="font-normal text-blue-600">Edit</button>
    <button className="font-normal text-blue-600">Sync</button>
    <button className="font-normal text-blue-600">Delete</button>
  </div>
</td>
```

### ❌ Incorrect Implementation

Hidden actions, mixed colors, and over-styled text all violate the spec.

```tsx
// ❌ Hidden by default (shown only on hover)
<div className="opacity-0 group-hover:opacity-100">...</div>

// ❌ Mixed colors
<button className="text-red-500">Delete</button>

// ❌ Hiding actions that should remain visible
<button>More ...</button>
```

## Button Rules

### ✅ Correct Implementation

Use `rounded-md` and restrained flat coloring.

```tsx
<Button className="rounded-md bg-blue-600 hover:bg-blue-700">Submit</Button>
```

### ❌ Incorrect Implementation

Avoid capsule buttons and decorative gradients.

```tsx
<Button className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">Confirm</Button>
```
