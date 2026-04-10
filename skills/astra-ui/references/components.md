# Components Props

## 组件来源

Astra UI 基于 **shadcn/ui** 构建，所有组件从 `@/components/ui/` 导入。

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
// ...
```

---

## Icons 图标（硬规则）

**来源**：所有图标**必须**来自 `lucide-react`，禁止内联 SVG。

**尺寸规范**：

| 尺寸 | 用途 |
|------|------|
| 24px | 默认尺寸，Toolbar、segmented controls |
| 16px | 输入框前缀/后缀、Button 图标、紧凑 UI |
| 18px | 一级导航图标 |

**strokeWidth**：
- 导航图标：`strokeWidth={1.5}`
- 默认：`strokeWidth={2}`（可省略）

**使用示例**：
```tsx
import { Home, Search, Plus } from 'lucide-react'

// 导航图标 18px + strokeWidth 1.5
<Home className="w-[18px] h-[18px]" strokeWidth={1.5} />

// 按钮图标 16px
<Button className="bg-blue-500 text-white">
  <Plus size={16} className="mr-2" />
  New Order
</Button>

// 输入框前缀 16px
<div className="relative">
  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
  <Input placeholder="Search..." className="pl-9" />
</div>
```

**硬规则**：
- 使用前在 **lucide.dev** 验证图标名称
- 从 `lucide-react` 导入
- 同一上下文中图标尺寸一致
- 通过父元素 class 控制颜色（`text-slate-500`、`text-blue-700` 等）

---

## Button

**来源**：`@/components/ui/button`

```tsx
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
```

**Astra 变体映射**：

| Astra 变体 | shadcn variant | 样式 |
|------------|----------------|------|
| `primary` | `default` | `bg-blue-500 text-white hover:bg-blue-600` |
| `neutral` | `outline` | `border border-slate-200 text-slate-700` |
| `subtle` | `ghost` | `text-slate-600 hover:bg-slate-50` |

**使用示例**：
```tsx
// 主按钮
<Button className="bg-blue-500 text-white hover:bg-blue-600 rounded-full">
  <Plus size={16} className="mr-2" />
  New Order
</Button>

// 次要按钮
<Button variant="outline" className="rounded-full">
  Import
</Button>

// 低强调按钮
<Button variant="ghost" className="rounded-full">
  Cancel
</Button>
```

---

## InputField

**来源**：`@/components/ui/input` + `@/components/ui/label`

```tsx
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
```

**使用示例**：
```tsx
// 基础输入框
<div className="flex flex-col gap-1.5">
  <Label htmlFor="email">Email</Label>
  <Input id="email" placeholder="Enter your email" className="bg-slate-100 border-slate-200" />
</div>
```

**规则**：
- 图标 prefix 用 `size={16}`
- 背景：`bg-slate-100`
- 边框：`border-slate-200`

---

## TextareaField

**来源**：`@/components/ui/textarea`

```tsx
<Textarea placeholder="Your text..." rows={3} className="bg-slate-100 border-slate-200" />
```

---

## SelectField

**来源**：`@/components/ui/select`

```tsx
<Select>
  <SelectTrigger className="bg-slate-100 border-slate-200">
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

---

## Checkbox

**来源**：`@/components/ui/checkbox`

```tsx
<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms</Label>
</div>
```

---

## SwitchField

**来源**：`@/components/ui/switch`

```tsx
<div className="flex items-center justify-between">
  <div>
    <Label>Notifications</Label>
    <p className="text-sm text-slate-500">Receive email notifications</p>
  </div>
  <Switch />
</div>
```

---

## RadioGroup

**来源**：`@/components/ui/radio-group`

```tsx
<RadioGroup defaultValue="option1">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="option1" id="r1" />
    <Label htmlFor="r1">Option 1</Label>
  </div>
</RadioGroup>
```

---

## Modal (Dialog)

**来源**：`@/components/ui/dialog`

```tsx
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent className="sm:max-w-[480px]">
    <DialogHeader>
      <DialogTitle>Create New Order</DialogTitle>
    </DialogHeader>
    <div className="py-4">
      {/* Form content */}
    </div>
    <DialogFooter>
      <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button className="bg-blue-500 text-white">Create</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

**硬规则**：
- Escape 关闭，backdrop 点击关闭
- 不嵌套 modal
- 主操作按钮在右边

---

## Drawer (Sheet)

**来源**：`@/components/ui/sheet`

```tsx
<Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetContent side="right" className="w-[400px]">
    <SheetHeader>
      <SheetTitle>New Activity</SheetTitle>
    </SheetHeader>
    <div className="py-4">
      {/* Simple form ≤ 5 fields */}
    </div>
    <SheetFooter>
      <Button className="bg-blue-500 text-white">Create</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

**规则**：仅用于简单表单（≤5 字段）

---

## Table

**来源**：`@/components/ui/table`

```tsx
<div className="rounded-xl border border-slate-100">
  <Table>
    <TableHeader>
      <TableRow className="border-b border-slate-100">
        <TableHead className="text-slate-500">Order ID</TableHead>
        <TableHead className="text-slate-500">Customer</TableHead>
        <TableHead className="text-slate-500">Status</TableHead>
        <TableHead className="text-slate-500 text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow className="border-b border-slate-100">
        <TableCell className="font-medium">ORD-001</TableCell>
        <TableCell>Alice Chen</TableCell>
        <TableCell>
          <Badge className="bg-green-50 text-green-600">Completed</Badge>
        </TableCell>
        <TableCell className="text-right">
          <Button variant="ghost" size="sm">View</Button>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</div>
```

**硬规则**：
- 内容过多时：固定 Actions 列，其他内容左右滑动
- 操作项限制：每行最多 3 个可见操作，超过用「更多」下拉展开
- 必须有 Pagination

---

## Badge

**来源**：`@/components/ui/badge`

**Astra 状态色映射**：

| 状态 | className |
|------|-----------|
| 成功 | `bg-green-50 text-green-600` |
| 警告 | `bg-amber-50 text-amber-600` |
| 错误 | `bg-red-50 text-red-600` |
| 信息 | `bg-blue-50 text-blue-600` |
| 默认 | `bg-slate-100 text-slate-600` |

```tsx
<Badge className="bg-green-50 text-green-600">Completed</Badge>
```

---

## Toast

**来源**：`sonner`

```tsx
import { toast } from 'sonner'

toast.success('Order created successfully')
toast.error('Failed to create order')
```

---

## Tooltip

**来源**：`@/components/ui/tooltip`

```tsx
<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="ghost" size="icon">
        <Settings size={16} />
      </Button>
    </TooltipTrigger>
    <TooltipContent>Settings</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

## Avatar

**来源**：`@/components/ui/avatar`

```tsx
<Avatar>
  <AvatarImage src="https://github.com/user.png" />
  <AvatarFallback className="bg-blue-200 text-blue-700">AC</AvatarFallback>
</Avatar>
```

**尺寸**：sm=24px, default=32px, lg=40px

---

## Dropdown (DropdownMenu)

**来源**：`@/components/ui/dropdown-menu`

**使用示例**（表格操作「更多」）：
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="sm">
      <MoreHorizontal size={16} />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>View</DropdownMenuItem>
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Copy</DropdownMenuItem>
    <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

## Tabs

**来源**：`@/components/ui/tabs` 或 `@arco-design/web-react`

```tsx
<Tabs defaultValue="orders" className="w-full">
  <TabsList className="bg-transparent">
    <TabsTrigger value="orders">Orders</TabsTrigger>
    <TabsTrigger value="invoices">Invoices</TabsTrigger>
  </TabsList>
  <TabsContent value="orders">
    {/* Orders table */}
  </TabsContent>
</Tabs>
```

**硬规则**：
- 仅用于三级导航（区域内视图切换）
- 文字标签，无图标
- 最多 6 个 tab

---

## PrimaryNav (一级导航)

**硬规则**：
- **必须有**：每个桌面页面必须包含
- **宽度**：110px
- **背景**：`bg-white`
- **文字颜色**：`text-slate-900`（激活）/ `text-slate-500`（默认）
- **排列方式**：图标+文字**横向排列**，禁止竖向排列
- **无边框**：无 `border-r`，无分隔线

**导航项样式**：
```tsx
// 默认状态
<a className="flex items-center gap-1 px-3 py-2 text-slate-500 hover:bg-slate-50">
  <Home className="w-[18px] h-[18px]" strokeWidth={1.5} />
  <span className="text-xs">Home</span>
</a>

// 激活状态
<a className="flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-700">
  <Orders className="w-[18px] h-[18px]" strokeWidth={1.5} />
  <span className="text-xs font-medium">Orders</span>
</a>
```

---

## SecondaryNav (二级导航)

**硬规则**：
- **必须有**：每个桌面页面必须包含
- **宽度**：130px
- **背景**：`bg-slate-100`
- **无边框**：无 `border-r`，无分隔线
- **纯文字**：无图标

**导航项样式**：
```tsx
// 默认状态
<a className="block px-2 py-2 text-slate-500 hover:bg-slate-200">
  <span className="text-sm">Pending</span>
</a>

// 激活状态
<a className="block px-2 py-2 rounded-md bg-blue-100 text-blue-700">
  <span className="text-sm font-medium">All</span>
</a>
```

---

## Breadcrumb (面包屑)

**硬规则**：
- **必须有**：每个桌面页面必须包含
- **位置**：固定在内容区域顶部
- **背景**：`bg-white`
- **高度**：约 64px（含 padding）

```tsx
<div className="bg-white rounded-xl px-4 py-3 mb-4 flex items-center gap-2">
  <span className="text-slate-500 text-sm">Home</span>
  <ChevronRight className="w-3 h-3 text-slate-400" />
  <span className="text-slate-500 text-sm">Orders</span>
  <ChevronRight className="w-3 h-3 text-slate-400" />
  <span className="text-slate-900 text-sm font-medium">All</span>
</div>
```

---

## 按钮布局规则

**硬规则**：
- **重要按钮**（新增、发布等）放在**卡片最左侧**
- **筛选区 + 表格 + 按钮** 必须在**同一卡片内**
- **主要按钮后放次要按钮**

```tsx
<div className="bg-white rounded-xl p-4">
  {/* 重要按钮在左侧 */}
  <div className="flex items-center gap-2 mb-4">
    <Button className="bg-blue-500 text-white rounded-full">+ New Order</Button>
    <Button variant="outline" className="rounded-full">Import</Button>
  </div>

  {/* 筛选区 */}
  <div className="flex items-center gap-3 mb-4 border-t border-slate-100 pt-4">
    ...
  </div>

  {/* 表格 */}
  <table>...</table>
</div>
```

---

## 页面布局结构

```
┌──────────┬─────────────┬─────────────────────────────────┐
│ PrimaryNav│ SecondaryNav│ Main content (bg-blue-100)      │
│  110px   │   130px     │   flex-1                        │
│ bg-white │ bg-slate-100│   p-6 (24px)                    │
│          │             │                                 │
│ [图标+文字]│ [文字列表]   │  ┌─────────────────────────┐   │
│ 横向排列  │             │  │ Breadcrumb Card (64px)  │   │
│          │             │  └─────────────────────────┘   │
│          │             │                                 │
│          │             │  ┌─────────────────────────┐   │
│          │             │  │ Content Cards (bg-white)│   │
│          │             │  └─────────────────────────┘   │
└──────────┴─────────────┴─────────────────────────────────┘

规则：
- 一级导航、二级导航、内容区域之间无边框、无分隔线
- 用背景色对比区分区域
```

---

## 新建页面展示规则

**硬规则**：
- **简单页面**（字段 ≤ 5 个）→ **右侧抽屉**（Sheet）
- **复杂页面**（字段 > 5 个，或有分组）→ **新开完整页面**

---

## 多类型表格切换规则

**硬规则**：
- 使用 **Tabs 组件**
- Tabs **左对齐表格**

---

## Anti-patterns

### Icons
- ❌ 使用内联 SVG
- ❌ 使用其他图标库
- ❌ 不在 lucide.dev 验证就使用图标
- ❌ 导航图标不用 `strokeWidth={1.5}`

### Button
- ❌ 每区块多个 `primary` 按钮
- ❌ 重要按钮不放卡片左侧

### Navigation
- ❌ 一级导航图标竖向排列
- ❌ 导航区域有边框分隔

### Table
- ❌ 没有 Pagination
- ❌ 每行超过 3 个可见操作按钮

### 新建页面
- ❌ 简单表单使用新页面（应该用右侧抽屉）
- ❌ 复杂表单使用抽屉（应该用新页面）

### Modal
- ❌ 嵌套 modal
- ❌ 主操作按钮在左边

### Form Layout
- ❌ 表单内容直接放在画布上（应该放在卡片内）