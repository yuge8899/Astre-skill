# Astra UI 视觉风格与实现示例

本指南通过对比 “正确实现” 与 “错误范例”，帮助开发者直观理解 Astra UI 的设计系统要求。

## 页面布局范例

### ✅ 正确实现
符合双导航、无边框卡片、面包屑报头等规则。

```tsx
<div className="flex h-screen bg-slate-50">
  {/* 一级导航: 110px, 横向排列 */}
  <nav className="w-[110px] bg-slate-900 flex flex-col pt-6 shrink-0">
    <div className="flex items-center gap-2 px-3 py-3 text-white">
      <Home size={16} strokeWidth={2.5} />
      <span className="text-xs">首页</span>
    </div>
  </nav>

  {/* 二级导航: 130px, 纯白，无分隔线 */}
  <nav className="w-[130px] bg-white py-6">
    <a className="block px-3 py-2 bg-blue-50 text-blue-600">商品列表</a>
  </nav>

  <main className="flex-1 flex flex-col min-w-0">
    {/* 面包屑报头: 固定, bg-white */}
    <header className="bg-white px-5 py-4 z-10 sticky top-0 border-b border-slate-100">
      <nav className="text-sm text-slate-500">首页 / 商品管理</nav>
    </header>

    {/* 内容滚动区: p-5 背景 slate-50 */}
    <div className="flex-1 overflow-y-auto p-5 space-y-5">
      <section className="bg-white rounded-xl p-5">
        <h1 className="text-lg font-bold">无边框无阴影卡片</h1>
      </section>
    </div>
  </main>
</div>
```

### ❌ 错误实现
常见违规：竖向导航、描边卡片、无安全距离。

```tsx
// ❌ 一级导航竖向排列（导航项里图标在文字上方）
<a className="flex flex-col items-center">
  <Home />
  <span>首页</span> 
</a>

// ❌ 卡片带描边或重阴影
<div className="border border-slate-200 shadow-lg">...</div>

// ❌ 面包屑直接放在背景上，没有白色容器
<div>首页 / 商品管理</div>

// ❌ 安全边距不足
<main className="p-2">...</main>
```

## 表格操作项范例

### ✅ 正确实现
3 个以下操作项平铺外露，统一品牌色 (400)。

```tsx
<td className="text-right py-4 px-5">
  <div className="flex items-center justify-end gap-3">
    <button className="text-blue-600 font-normal">编辑</button>
    <button className="text-blue-600 font-normal">同步</button>
    <button className="text-blue-600 font-normal">删除</button>
  </div>
</td>
```

### ❌ 错误实现
隐藏操作、混色、重字重。

```tsx
// ❌ 默认隐藏（在 hover 时才显示）
<div className="opacity-0 group-hover:opacity-100">...</div>

// ❌ 混搭颜色（红色删除等）
<button className="text-red-500">删除</button>

// ❌ 为了美观隐藏了本应外露的操作
<button>更多 ...</button>
```

## 按钮规范

### ✅ 正确实现
`rounded-md`, 无彩色背景装饰。

```tsx
<Button className="rounded-md bg-blue-600 hover:bg-blue-700">提交</Button>
```

### ❌ 错误实现
`rounded-full` 胶囊按钮或渐变色。

```tsx
<Button className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">确定</Button>
```
