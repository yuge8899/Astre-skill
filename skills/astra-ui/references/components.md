# Components Props

## 组件来源

Astra UI 默认使用 `shadcn/ui` 作为基础组件层。数据表格、Tabs 等复杂场景可按项目现状接入 Arco，但视觉结果必须回到 Astra 规则。

```tsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
```

## Icons 图标

- 必须使用 `lucide-react`
- 一级导航图标统一 `18px`，`strokeWidth={2.5}`
- 普通按钮、输入框、工具栏图标优先 `16px`
- 其他常规图标默认 `24px`

```tsx
import { Home, Plus, Search } from 'lucide-react'

<Home className="h-[18px] w-[18px]" strokeWidth={2.5} />

<Button className="rounded-md bg-blue-600 text-white hover:bg-blue-700">
  <Plus size={16} className="mr-2" />
  新建订单
</Button>

<div className="relative">
  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
  <Input placeholder="搜索订单" className="pl-9" />
</div>
```

## Button

| Astra 变体 | 建议样式 |
|------------|----------|
| `primary` | `bg-blue-600 text-white hover:bg-blue-700 rounded-md` |
| `neutral` | `border border-slate-200 text-slate-700 rounded-md` |
| `subtle` | `text-slate-600 hover:bg-slate-50 rounded-md` |

规则：
- 按钮统一 `rounded-md`
- 禁止 `rounded-full`
- 常规页面保持 1 个主 CTA，允许少量关键操作形成双主轴，但不能泛滥

```tsx
<Button className="rounded-md bg-blue-600 text-white hover:bg-blue-700">
  保存
</Button>

<Button variant="outline" className="rounded-md border-slate-200 text-slate-700">
  导出
</Button>
```

## Input / Textarea / Select

- 输入类控件使用 `bg-slate-100`
- 默认边框尽量弱化，聚焦时再给出清晰反馈
- 输入控件必须放在 `bg-white` 卡片中，不直接裸贴到画布

```tsx
<div className="flex flex-col gap-1.5">
  <Label htmlFor="email">邮箱</Label>
  <Input
    id="email"
    placeholder="请输入邮箱"
    className="bg-slate-100 border-transparent focus:border-blue-500 focus:bg-white"
  />
</div>

<Textarea
  placeholder="补充说明"
  rows={4}
  className="bg-slate-100 border-transparent focus:border-blue-500 focus:bg-white"
/>

<Select>
  <SelectTrigger className="bg-slate-100 border-transparent focus:border-blue-500 focus:bg-white">
    <SelectValue placeholder="选择状态" />
  </SelectTrigger>
</Select>
```

## Modal (Dialog)

- 用于中等复杂度确认和编辑场景
- 允许轻阴影，因为它属于浮动层
- 主操作按钮在右侧，次操作在左侧

```tsx
<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <DialogContent className="sm:max-w-[480px]">
    <DialogHeader>
      <DialogTitle>新建订单</DialogTitle>
    </DialogHeader>
    <div className="space-y-4 py-4">
      {/* Form content */}
    </div>
    <DialogFooter>
      <Button variant="outline" className="rounded-md" onClick={() => setIsOpen(false)}>
        取消
      </Button>
      <Button className="rounded-md bg-blue-600 text-white hover:bg-blue-700">
        创建
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## Drawer (Sheet)

- 仅用于简单表单，字段数通常 `<= 5`
- 宽度常用 `400px` 到 `480px`
- 底部操作栏维持主次按钮组合

```tsx
<Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetContent side="right" className="w-[440px] sm:max-w-[440px]">
    <SheetHeader>
      <SheetTitle>新建活动</SheetTitle>
    </SheetHeader>
    <div className="space-y-4 py-4">
      {/* Simple form */}
    </div>
    <SheetFooter>
      <Button variant="outline" className="rounded-md">取消</Button>
      <Button className="rounded-md bg-blue-600 text-white hover:bg-blue-700">创建</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
```

## Table

- 表格必须放在 `bg-white` 卡片内
- 卡片本身无边框、无阴影
- `Actions` 列优先固定在右侧
- 操作数 `<= 3` 时直接外露，超过后才进入“更多”
- 表格操作文字统一 `text-blue-600`

```tsx
<section className="rounded-xl bg-white p-5">
  <div className="mb-4 flex items-center justify-between gap-3">
    <div className="flex items-center gap-2">
      <Button className="rounded-md bg-blue-600 text-white hover:bg-blue-700">
        新建订单
      </Button>
      <Button variant="outline" className="rounded-md border-slate-200 text-slate-700">
        导入
      </Button>
    </div>
    <Input className="max-w-[240px] bg-slate-100 border-transparent" placeholder="搜索订单" />
  </div>

  <Table>
    <TableHeader>
      <TableRow className="border-b border-slate-100">
        <TableHead className="text-slate-500">订单号</TableHead>
        <TableHead className="text-slate-500">客户</TableHead>
        <TableHead className="text-slate-500">状态</TableHead>
        <TableHead className="text-right text-slate-500">操作</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow className="border-b border-slate-100 last:border-0">
        <TableCell className="font-medium text-slate-900">ORD-001</TableCell>
        <TableCell>Alice Chen</TableCell>
        <TableCell>
          <Badge className="bg-green-50 text-green-600">已完成</Badge>
        </TableCell>
        <TableCell className="text-right">
          <div className="flex items-center justify-end gap-3">
            <button className="text-blue-600 font-normal">查看</button>
            <button className="text-blue-600 font-normal">编辑</button>
            <button className="text-blue-600 font-normal">同步</button>
          </div>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</section>
```

## Badge

| 状态 | className |
|------|-----------|
| 成功 | `bg-green-50 text-green-600` |
| 警告 | `bg-amber-50 text-amber-600` |
| 错误 | `bg-red-50 text-red-600` |
| 信息 | `bg-blue-50 text-blue-600` |
| 默认 | `bg-slate-100 text-slate-600` |

## PrimaryNav

- 宽度固定 `110px`
- 背景固定 `bg-slate-900`
- 导航项必须横向排列，不得竖排
- 激活态使用深底上的高对比文字或浅品牌底色点缀
- 导航区之间不加 `border-r`

```tsx
<nav className="w-[110px] shrink-0 bg-slate-900 px-3 py-6">
  <a className="flex items-center gap-2 rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-800 hover:text-white">
    <Home className="h-[18px] w-[18px]" strokeWidth={2.5} />
    <span className="truncate text-xs">首页</span>
  </a>

  <a className="mt-1 flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-3 text-white">
    <Package className="h-[18px] w-[18px]" strokeWidth={2.5} />
    <span className="truncate text-xs font-medium">商品</span>
  </a>
</nav>
```

## SecondaryNav

- 宽度固定 `130px`
- 背景固定 `bg-white`
- 纯文字，不放图标
- 不加 `border-r`

```tsx
<nav className="w-[130px] shrink-0 bg-white px-3 py-6">
  <a className="block rounded-md px-3 py-2 text-sm text-slate-500 hover:bg-slate-50">
    全部商品
  </a>
  <a className="mt-1 block rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600">
    已上架
  </a>
</nav>
```

## Breadcrumb Header

- 必须固定在主内容顶部
- 背景 `bg-white`
- 它是内容区头部容器，不是额外悬浮卡片

```tsx
<header className="sticky top-0 z-10 flex h-16 shrink-0 items-center border-b border-slate-100 bg-white px-5">
  <div className="flex items-center gap-2 text-sm text-slate-500">
    <span>首页</span>
    <ChevronRight className="h-3 w-3" />
    <span>订单</span>
    <ChevronRight className="h-3 w-3" />
    <span className="font-medium text-slate-900">全部订单</span>
  </div>
</header>
```

## 页面骨架

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

- 不要在导航区使用 `bg-white` 一级导航或 `bg-slate-100` 二级导航
- 不要给按钮使用 `rounded-full`
- 不要给一级导航图标使用 `strokeWidth={1.5}`
- 不要给卡片外层加边框或重阴影
- 不要把表格操作默认隐藏到 hover 才出现
