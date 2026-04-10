---
name: astra-ui
description: "Astra UI设计系统 - 极简专业B2C SaaS风格。创建页面、选择组件、验证合规性。触发词：创建页面、新建页面、设置页面、数据列表、dashboard、表单、按钮、输入框、导航、表格、弹窗、布局选择、组件选择、验证页面、astra"
---

# Astra UI 设计系统

B2C SaaS 产品设计系统，风格：**极简、干净、透气**。

## 设计原则

| 原则 | 说明 |
|------|------|
| **极简配色** | 90% 中性色，品牌色仅用于主按钮和激活状态 |
| **卡片式布局** | 内容用 `surface-bg` 卡片，浮在 `brand-tertiary` 画布上 |
| **无边框设计** | 用表面色对比分隔，卡片无边框无阴影 |
| **柔和阴影** | 仅用于浮动弹层（modal、dropdown、toolbar） |

## 硬规则（必须遵守）

### 导航结构
1. **左侧必须有一级导航**：宽度 110px，背景 `bg-white`，文字 `text-slate-900`
2. **一级导航项必须横向排列**：图标+文字水平排列（`flex items-center gap-1`），禁止竖向排列
3. **左侧必须有二级导航**：宽度 130px，背景 `bg-slate-100`
4. **顶部必须有面包屑区域**：背景 `bg-white`，固定在内容区域顶部
5. **导航层级严格**：`PrimaryNav` → `SecondaryNav`，不可跳过

### 布局结构
6. **内容区域安全距离**：`p-6`（24px），必须遵守
7. **所有内容必须有卡片承载**：禁止内容直接放在背景上
8. **每个分类区域不需要标题**：卡片本身承载内容，无需额外区域标题
9. **页面背景永远是 `bg-blue-100`**

### 按钮布局
10. **重要按钮（新增、发布等）放在卡片最左侧**
11. **筛选区 + 表格 + 重要按钮 必须在同一卡片内**
12. **主要按钮后放次要按钮**：形成主次层次
13. **按钮过多时**：操作按钮放表格分页器左侧，保持主次按钮形式

### 样式规则
14. **卡片使用 `bg-white`**：无边框、无阴影
15. **每页最多一个 `bg-blue-500` 主按钮**
16. **禁止彩色装饰**：渐变、彩色边框、彩色背景块
17. **导航区域之间无边框、无分隔线**：用背景色对比区分

### 组件使用
18. **使用设计系统组件**：`InputField` 不是 `<input>`
19. **Tabs 来自 Arco**：`@arco-design/web-react`

### 图标使用（硬规则）
20. **必须使用 lucide.dev 图标**：禁止内联 SVG，禁止其他图标库
21. **严格遵守图标规范**：尺寸、颜色、strokeWidth 按 icons.md 执行
22. **导航图标**：`strokeWidth={1.5}`，用 `className="size-full"` 填充容器
23. **使用前验证**：在 lucide.dev 搜索确认图标名称

### 表格规则
21. **表格内容过多时**：固定 Actions 列（`fixed: 'right'`），其他内容左右滑动
22. **操作项限制**：每行最多 3 个可见操作，超过用「更多」下拉展开
23. **多类型表格切换**：使用 Tabs 组件，与表格左对齐

### 新建页面展示
24. **简单页面**（≤5 字段）→ 右侧抽屉
25. **复杂页面**（>5 字段）→ 新开完整页面

## 依赖栈

| 层级 | 来源 | 用途 |
|------|------|------|
| Layer 1 | `shadcn/ui` + `lucide-react` | 通用原语（Button、Input、Dialog、Table 等） |
| Layer 2 | `@arco-design/web-react` `Tabs` | 区域内视图切换 |
| Layer 3 | `@figma/astraui` `CurrencyExchange` | 外汇兑换流程 |
| 自动化 | `page-agent` | 自然语言控制网页、自动化验证 |

## 安装

```bash
# 初始化 shadcn/ui
npx shadcn@latest init

# 安装常用组件
npx shadcn@latest add button card input textarea select checkbox switch radio-group label badge toast tooltip dialog sheet table pagination avatar dropdown-menu separator scroll-area skeleton tabs breadcrumb

# 安装图标库
npm install lucide-react

# 安装 Arco Tabs（可选，用于三级导航）
npm install @arco-design/web-react

# 安装 page-agent（自动化测试）
npm install page-agent
```

## shadcn/ui 组件映射

| Astra 组件 | shadcn 组件 | 导入路径 |
|------------|-------------|----------|
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
| Pagination | `Pagination` | 自定义或使用 Table 内置 |
| Badge | `Badge` | `@/components/ui/badge` |
| Toast | `Toast` | `@/components/ui/toast` |
| Tooltip | `Tooltip` | `@/components/ui/tooltip` |
| Avatar | `Avatar` | `@/components/ui/avatar` |
| Dropdown | `DropdownMenu` | `@/components/ui/dropdown-menu` |
| Tabs | `Tabs` | `@/components/ui/tabs` 或 `@arco-design/web-react` |
| Breadcrumb | `Breadcrumb` | `@/components/ui/breadcrumb` |

## Token 速查 (Tailwind CSS v4.1.6)

### Color - 品牌色 (Blue)
| 用途 | Tailwind |
|------|----------|
| 主按钮 | `bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700` |
| 主题色 | `text-blue-700` |
| 页面画布 | `bg-blue-100` |
| AI 气泡 | `bg-blue-200` |
| 激活状态 | `bg-blue-100 text-blue-700` |

### Color - 中性色 (Slate)
| 用途 | Tailwind |
|------|----------|
| 卡片/面板 | `bg-white` |
| 二级导航 | `bg-slate-100` |
| 输入框 | `bg-slate-100` |
| 主要文字 | `text-slate-900` |
| 次要文字 | `text-slate-500` |
| 占位符 | `text-slate-400` |
| 边框 | `border-slate-200` |
| 悬停背景 | `bg-slate-50` |

### Spacing
| 场景 | Tailwind |
|------|----------|
| 页面边距 | `p-6` (24px) |
| 卡片内边距 | `p-4` (16px) |
| 卡片间距 | `gap-4` (16px) |
| 字段间距 | `gap-3` (12px) |

### Radius
| 组件 | Tailwind |
|------|----------|
| Button | `rounded-full` |
| Input | `rounded-md` |
| 卡片 | `rounded-xl` |

### Typography
| 用途 | Tailwind |
|------|----------|
| 页面标题 | `text-2xl font-semibold` |
| 区块标题 | `text-lg font-medium` |
| 描述文字 | `text-sm text-slate-500` |

---

## 模板选择

```
┌─ "Which template?"
│
├─ 查看当前状态 + 最近活动？→ Dashboard
├─ 浏览、搜索、管理记录？→ Data List
├─ 查看或编辑单个实体？→ Detail / Editor
└─ 配置设置 / 填写表单？→ Form / Settings
```

详见 [templates.md](references/templates.md)

---

## Component 决策树

### Actions
```
├─ 文字标签操作？→ Button
│  ├─ 主 CTA → variant="primary"
│  ├─ 辅助操作 → variant="neutral"
│  └─ 低强调 → variant="subtle"
├─ 纯图标操作？→ IconButton
├─ 多个相关操作？→ ButtonGroup
└─ 收藏/星标？→ FavoriteButton
```

### Inputs
```
├─ 短文本？→ InputField
├─ 长文本？→ TextareaField
├─ 预定义选项？→ SelectField
├─ 互斥选项？→ RadioGroup
├─ 带标签布尔设置？→ SwitchField
├─ 表单布尔字段？→ Checkbox
└─ 搜索？→ SearchComponent
```

### Navigation
```
├─ 应用级页面导航？→ PrimaryNav (一级导航 110px)
├─ 页面子区块？→ SecondaryNav (二级导航 130px)
└─ 区域内视图切换？→ Tabs (Arco)
```

### Feedback
```
├─ 短暂非阻塞通知？→ Toast
├─ 状态标签？→ Badge
├─ 悬停提示？→ Tooltip
└─ 阻塞决策？→ Modal
```

### Media
```
├─ 头像？→ Avatar
├─ 内容卡片？→ ItemCard
├─ 视频时长？→ DurationBadge
└─ 视频控制？→ VideoControl
```

**所有组件 Props**：详见 [components.md](references/components.md)

---

## Layout 决策树

```
├─ 表单/设置页面？→ Form Layout + SecondaryNav
├─ Dashboard/画廊？→ Dashboard Layout + grid
├─ 有稳定子区块？
│  ├─ 页面级持久？→ SecondaryNav (130px)
│  └─ 仅区域内切换？→ Tabs
├─ 编辑器/工具密集型？→ Editor Layout + Toolbar
└─ Chat/AI？→ PromptPane
```

**页面布局结构**：
```
┌──────────┬─────────────┬─────────────────────────────────────┐
│ PrimaryNav│ SecondaryNav│ Main content (bg-blue-100)         │
│  110px   │   130px     │   flex-1, p-6 (24px)                │
│ bg-white │ bg-slate-100│                                     │
│          │             │  ┌───────────────────────────────┐  │
│ 🏠 Home  │ Orders      │  │ Breadcrumb (bg-white, 64px)   │  │
│ 📤 Orders│ ├ All *     │  │ Home > Orders > All           │  │
│ 📚 Library│ ├ Pending  │  └───────────────────────────────┘  │
│ 📁 Project│ ├ Complete│                                     │
│          │ └ Cancelled│  ┌───────────────────────────────┐  │
│ ⚙️ Setting│             │  │ Data Card (bg-white)          │  │
│ [U]      │             │  │                               │  │
│          │             │  │ [+New] [Import] [Export]      │  │
│ 图标+文字│ 纯文字列表   │  │ ─────────────────────────────  │  │
│ 横向排列 │             │  │ [Search] [Filter]             │  │
│          │             │  │ ─────────────────────────────  │  │
│          │             │  │ Table                         │  │
│          │             │  │                               │  │
│          │             │  │ [Edit][Delete] ◀ 1 2 3 ... ▶ │  │
│          │             │  └───────────────────────────────┘  │
└──────────┴─────────────┴─────────────────────────────────────┘
```

**关键规则**：
- 一级导航：图标+文字**横向排列**，禁止竖向
- 面包屑：固定在内容区域顶部，`bg-white`
- 内容区域：`p-6`（24px 安全距离）
- 所有内容必须有卡片承载

---

## 验证 Checklist

### Critical - 导航
- [ ] 左侧有一级导航（110px，`bg-white`，`text-slate-900`）
- [ ] 一级导航项图标+文字横向排列（禁止竖向）
- [ ] 左侧有二级导航（130px，`bg-slate-100`）
- [ ] 顶部有面包屑区域（`bg-white`）

### Critical - 布局
- [ ] 内容区域安全距离 `p-6`（24px）
- [ ] 所有内容有卡片承载（无内容直接在背景上）
- [ ] 页面画布 `bg-blue-100`
- [ ] 卡片 `bg-white`，无边框无阴影

### Critical - 按钮
- [ ] 重要按钮在卡片最左侧
- [ ] 筛选区+表格+按钮在同一卡片内
- [ ] 主按钮后放次要按钮
- [ ] 每页最多一个 `bg-blue-500` 主按钮

### Major
- [ ] 导航区域之间无边框、无分隔线
- [ ] 图标来自 `lucide-react`（已在 lucide.dev 验证）
- [ ] 图标尺寸、strokeWidth 符合规范
- [ ] 无彩色装饰（渐变、彩色边框）
- [ ] 表格操作项 ≤ 3 个可见
- [ ] 新建页面按复杂度选择正确展示方式

---

## References 导航

按需读取详细规则：

| 需求 | 文件 |
|------|------|
| Spacing/Color/Radius/Typography/Elevation/Surfaces 完整定义和决策树 | [tokens.md](references/tokens.md) |
| 图标尺寸、颜色、strokeWidth、标准图标目录 | [icons.md](references/icons.md) |
| 所有组件 Props、shadcn/ui 映射、使用示例 | [components.md](references/components.md) |
| page-agent 自动化测试、MCP 集成、验证示例 | [page-agent.md](references/page-agent.md) |
| 动画时长、缓动曲线、微交互模式 | [animation.md](references/animation.md) |
| 暗色模式激活和 Token 适配 | [modes.md](references/modes.md) |
| 焦点环样式规则 | [focus.md](references/focus.md) |
| 页面模板完整代码 | [templates.md](references/templates.md) |
| 完整图标目录（lucide-react） | 项目 `guidelines/icon-discovery.md` |

---

## 视觉风格示例

### ✅ 正确
```tsx
<div className="flex h-screen">
  {/* 一级导航 110px - 图标+文字横向排列 */}
  <nav className="w-[110px] bg-white flex flex-col">
    <a className="flex items-center gap-1 px-3 py-2 text-slate-500">
      <Home className="w-[18px] h-[18px]" />
      <span className="text-xs">Home</span>
    </a>
    <a className="flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-700">
      <Orders className="w-[18px] h-[18px]" />
      <span className="text-xs font-medium">Orders</span>
    </a>
  </nav>

  {/* 二级导航 130px */}
  <nav className="w-[130px] bg-slate-100 py-6">
    <a className="block px-2 py-2 rounded-md bg-blue-100 text-blue-700">All</a>
    <a className="block px-2 py-2 rounded-md text-slate-500">Pending</a>
  </nav>

  {/* 内容区域 - p-6 (24px) */}
  <main className="flex-1 bg-blue-100 p-6 overflow-y-auto">
    {/* 面包屑 - bg-white 固定顶部 */}
    <div className="bg-white rounded-xl px-4 py-3 mb-4 flex items-center gap-2">
      <span className="text-slate-500 text-sm">Home</span>
      <ChevronRight className="w-3 h-3 text-slate-400" />
      <span className="text-slate-900 text-sm font-medium">Orders</span>
    </div>

    {/* 数据卡片 - 重要按钮在左侧 */}
    <div className="bg-white rounded-xl p-4">
      {/* 重要按钮 + 次要按钮 */}
      <div className="flex items-center gap-2 mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          + New Order
        </button>
        <button className="border border-slate-200 text-slate-700 px-4 py-2 rounded-full hover:bg-slate-50">
          Import
        </button>
      </div>

      {/* 筛选区 */}
      <div className="flex items-center gap-3 mb-4 border-t border-slate-100 pt-4">
        <input className="bg-slate-100 rounded-md px-3 py-2" placeholder="Search..." />
        <select className="bg-slate-100 rounded-md px-3 py-2">...</select>
      </div>

      {/* 表格 */}
      <table className="w-full">...</table>

      {/* 分页器 + 操作按钮 */}
      <div className="flex items-center justify-between mt-4 border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2">
          <button className="text-blue-700 hover:bg-blue-50 px-3 py-1 rounded-md">Edit</button>
          <button className="text-red-600 hover:bg-red-50 px-3 py-1 rounded-md">Delete</button>
        </div>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 border border-slate-200 rounded-md">1</button>
          <button className="w-8 h-8 border border-slate-200 rounded-md">2</button>
        </div>
      </div>
    </div>
  </main>
</div>
```

### ❌ 错误
```tsx
// ❌ 一级导航竖向排列
<nav>
  <a className="flex flex-col items-center">
    <Home />
    <span>Home</span>  {/* ❌ 应该横向排列 */}
  </a>
</nav>

// ❌ 内容直接放在背景上
<main className="bg-blue-100">
  <h1>Orders</h1>  {/* ❌ 应该放在卡片内 */}
  <table>...</table>
</main>

// ❌ 安全距离不是 24px
<main className="p-4">  {/* ❌ 应该是 p-6 */}

// ❌ 重要按钮不在卡片左侧
<div className="bg-white rounded-xl p-4">
  <div className="flex justify-end">  {/* ❌ 应该在左侧 */}
    <button>+ New</button>
  </div>
</div>

// ❌ 导航有边框分隔
<nav className="border-r border-slate-200">  {/* ❌ 无边框 */}

// ❌ 面包屑背景透明
<div className="mb-4">  {/* ❌ 应该 bg-white */}
```