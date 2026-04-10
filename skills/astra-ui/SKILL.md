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
| **卡片式布局** | 内容用 `bg-white` 卡片承载，浮在 `bg-slate-50` 画布上 |
| **无边框设计** | 用表面色对比分隔，卡片无边框无阴影 |
| **柔和阴影** | 仅用于浮动弹层（modal、dropdown、toolbar） |

## Repository Sync

- `SYSTEM_GUIDE.md` 是生成产物，禁止手改。
- 在此仓库内使用本 skill 时，先运行：

```bash
node skills/astra-ui/scripts/generate-system-guide.js
```

- 提交前执行门禁：

```bash
node skills/astra-ui/scripts/check-gate.js
node skills/astra-ui/scripts/check-astra-output.js <file ...>
```

## Gate Contract

此区块是 Astra skill 的唯一机器可读规则源，用于生成 `SYSTEM_GUIDE.md` 并执行门禁。

<!-- ASTRA_GATE_CONTRACT_START -->
```json
{
  "version": 1,
  "generatedGuidePath": "SYSTEM_GUIDE.md",
  "rules": {
    "primaryNav": {
      "width": "110px",
      "background": "bg-slate-900",
      "text": [
        "text-slate-300",
        "text-white"
      ],
      "itemLayout": "horizontal"
    },
    "secondaryNav": {
      "width": "130px",
      "background": "bg-white"
    },
    "page": {
      "background": "bg-slate-50",
      "contentPadding": "p-5",
      "cardBackground": "bg-white"
    },
    "buttons": {
      "radius": "rounded-md",
      "forbidden": [
        "rounded-full"
      ]
    },
    "icons": {
      "library": "lucide-react",
      "navStrokeWidth": 2.5
    },
    "navigation": {
      "dividerPolicy": "no-border"
    },
    "outputGate": {
      "extensions": [
        ".tsx",
        ".jsx",
        ".html"
      ],
      "exclude": [
        "skills/",
        "guidelines/",
        "workflow/ASTRA_ADMIN_DATALIST_TRACE.md"
      ],
      "pageShellSignals": [
        "h-screen",
        "<main",
        "SidebarNavigation",
        "SecondaryNav"
      ],
      "requiredAny": {
        "primaryNav": [
          "bg-slate-900",
          "SidebarNavigation",
          "PrimaryNav"
        ],
        "secondaryNav": [
          "bg-white",
          "SecondaryNav"
        ],
        "iconLibrary": [
          "lucide-react",
          "data-lucide",
          "lucide.createIcons"
        ]
      },
      "requiredTokens": [
        "bg-slate-50",
        "p-5",
        "bg-white"
      ],
      "forbiddenTokens": [
        "strokeWidth={1.5}",
        "stroke-[1.5]",
        "stroke-width=\"1.5\""
      ],
      "buttonForbiddenTokens": [
        "rounded-full"
      ],
      "navForbiddenTokens": [
        "border-r"
      ]
    }
  }
}
```
<!-- ASTRA_GATE_CONTRACT_END -->

## 硬规则（必须遵守）

### 导航结构
1. **左侧必须有一级导航**：宽度 110px，背景为深色（如 `bg-slate-900`），文字为浅色（如 `text-slate-300`，白字 `text-white`）
2. **一级导航项必须横向排列**：图标+文字水平排列且在一行内（`flex items-center gap-2 whitespace-nowrap overflow-hidden shrink-0`），绝对禁止竖向排列、折行或适配后变形
3. **左侧必须有二级导航**：宽度 130px，背景为纯白色 `bg-white`
4. **顶部必有固定面包屑组件栏**：背景 `bg-white` 纯白色，并固定在右侧主内容区域的顶部，不随内容滚动
5. **导航层级严格**：`PrimaryNav` → `SecondaryNav`，不可跳过

### 布局结构
6. **极致的安全距离与对齐**：全站内容区域周边留白统一为 `p-5`（20px）。模块、表单务必基于坚实的网格严格左对齐。
7. **所有内容必须有卡片承载**：禁止内容直接放在背景上，卡片与卡片之间间距亦需遵循统一网格机制
8. **每个分类区域不需要标题**：卡片本身承载内容，无需额外区域标题
9. **页面背景永远是 `bg-slate-50`**
10. **功能说明头部模块**：在核心内容区域（表格、列表、配置面板等）上方，必须应用“左侧图标卡片 + 右侧标题与描述”的组合结构承载页面模块说明，不使用纯文字标题，用于增强信息层级与识别性。

### 按钮布局
10. **圆角规则**：所有操作按钮一律回归正规商务体系的 `rounded-md`，在此界面体系下全面禁用过于圆润的 `rounded-full` 胶囊按钮。
11. **多枢纽按钮策略**：页面内可允许流向中存在 2~3 个主色重点按钮（如左上的“新建”主轴 + 右上的“搜索”强触点），但必须保持主次优先级。常规维持唯一高亮点，避免泛滥。
12. **主要按钮后放次要按钮**：形成主次层次。次要按钮采用线框或者灰白填充。

### 样式规则
14. **卡片使用 `bg-white`**：无边框、无阴影
15. **保留克制**：禁止彩色装饰：渐变、彩色边框、彩色背景块
17. **导航区域之间无边框、无分隔线**：用背景色对比区分

### 组件使用
18. **使用设计系统组件**：`InputField` 不是 `<input>`
19. **Tabs 来自 Arco**：`@arco-design/web-react`

### 图标使用（硬规则）
20. **必须使用 lucide.dev 图标**：禁止内联 SVG，禁止其他图标库
21. **严格遵守图标规范**：尺寸、颜色、strokeWidth 按 icons.md 执行
22. **导航图标**：`strokeWidth={2.5}`，用 `className="size-full"` 填充容器
23. **使用前验证**：在 lucide.dev 搜索确认图标名称

### 表格规则
21. **表格内容过多时**：固定 Actions 列（`fixed: 'right'`），其他内容左右滑动
22. **操作项显示规则**：表格操作列不应默认隐藏。为保证快速完成主要任务，优先直接展示操作项；当操作数超过 3 个时，超出的项目应收纳到“更多”下拉菜单，以避免操作入口过度堆叠。
23. **操作项视觉一致性**：操作项文字不得使用多重颜色（如红色删除、灰色编辑等混合使用），必须统一使用品牌蓝色（`text-blue-600`）和正常字重（`font-normal` 或 400）。
24. **多类型表格切换**：使用 Tabs 组件，与表格左对齐

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

## Token 速查

- 页面画布：`bg-slate-50`
- 一级导航：`bg-slate-900 text-slate-300`，激活项 `text-white`
- 二级导航 / 卡片：`bg-white`
- 输入框：`bg-slate-100`
- 页面安全距离：`p-5`
- 卡片间距：`gap-5`
- 字段间距：`gap-3`
- 按钮圆角：`rounded-md`
- 卡片圆角：`rounded-xl`
- 导航图标：`strokeWidth={2.5}`

完整 token、语义色、CSS 变量、反例：详见 [tokens.md](references/tokens.md)

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

## 页面布局结构

Astra UI 使用标准的响应式 SaaS 布局。核心包括一级导航 (110px)、二级导航 (130px) 以及带固定面包屑和卡片化内容的主体区域。

详见规范: [layout.md](references/layout.md)

---

## 验证 Checklist

在提交任何原型或代码前，请务必执行合规性检查，确保符合“极简、无边框、操作可发现”等设计核心。

详细清单: [validation.md](references/validation.md)

---

## 视觉风格示例

通过对比正确与错误的实现案例，加深对设计系统视觉颗粒度的理解。

查阅示例: [examples.md](references/examples.md)

---

## 知识库导航

快速查找所有设计与技术规范。

[查看完整导航索引](references/navigation.md)

---
