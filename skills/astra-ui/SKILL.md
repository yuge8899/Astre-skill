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

1. **每个桌面页面必须包含 `SidebarNavigation`**
2. **页面背景永远是 `brand-tertiary`**
3. **内容卡片使用 `surface-bg`**，无边框无阴影
4. **间距使用 token**（`gap-xl`、`p-2xl`），禁止硬编码
5. **禁止大面积使用 `brand-primary` 背景**，仅用于主按钮
6. **每页最多一个 `primary` 按钮**
7. **禁止彩色装饰**（渐变、彩色边框、彩色背景块）
8. **使用设计系统组件**（`InputField` 不是 `<input>`）
9. **图标来自 `lucide-react`**，禁止内联 SVG
10. **导航层级严格**：`SidebarNavigation` → `SecondaryNav` → `Tabs`
11. **Tabs 来自 Arco**（`@arco-design/web-react`）
12. **卡片放在 `brand-tertiary` 画布上**，用表面色对比分隔

## 依赖栈

| 层级 | 来源 | 用途 |
|------|------|------|
| Layer 1 | `shadcn/ui` + `lucide-react` | 通用原语 |
| Layer 2 | `@arco-design/web-react` `Tabs` | 区域内视图切换 |
| Layer 3 | `@figma/astraui` `CurrencyExchange` | 外汇兑换流程 |

**安装**：
```bash
npx shadcn@latest init
npx shadcn@latest add button card input textarea select checkbox switch radio-group label badge toast tooltip dialog sheet table pagination avatar dropdown-menu separator scroll-area skeleton tabs breadcrumb chart
npm install lucide-react
```

## Token 速查

### Spacing
| 场景 | Token | Tailwind |
|------|-------|----------|
| 页面边距 | `space-2xl` | `p-2xl` |
| 卡片内边距 | `space-xl` | `p-xl` |
| 卡片间距 | `space-xl` | `gap-xl` |
| 字段间距 | `space-lg` | `gap-lg` |

### Color
| 用途 | Token |
|------|-------|
| 页面画布 | `bg-brand-tertiary` |
| 卡片/面板 | `bg-surface-bg` |
| 主按钮 | `bg-brand-primary` + `text-on-brand` |
| 主要文字 | `text-text-primary` |
| 次要文字 | `text-text-secondary` |

### Radius
| 组件 | Token |
|------|-------|
| Button | `rounded-corner-full` |
| Input | `rounded-corner-md` |
| 卡片 | `rounded-corner-lg` |

### Typography
| 用途 | Class |
|------|-------|
| 页面标题 | `text-title` |
| 区块标题 | `text-heading` 或 `text-label font-semibold` |
| 描述文字 | `text-label-sm` |

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
├─ 应用级页面导航？→ SidebarNavigation
├─ 页面子区块？→ SecondaryNav
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
│  ├─ 页面级持久？→ SecondaryNav
│  └─ 仅区域内切换？→ Tabs
├─ 编辑器/工具密集型？→ Editor Layout + Toolbar
└─ Chat/AI？→ PromptPane
```

**SecondaryNav vs Tabs**：
- 页面级持久子区块 → SecondaryNav
- 仅一个内容区域内的视图切换 → Tabs

---

## 验证 Checklist

### Critical
- [ ] 桌面页面包含 `SidebarNavigation`
- [ ] 主画布 `bg-brand-tertiary`
- [ ] 卡片 `bg-surface-bg`，无边框无阴影
- [ ] 无彩色卡片背景、无渐变
- [ ] `brand-primary` 仅用于主按钮
- [ ] 每页最多一个 `primary` Button
- [ ] 图标来自 `lucide-react`
- [ ] Button 变体合法（`primary`/`neutral`/`subtle`）

### Major
- [ ] 导航层级正确
- [ ] Token 使用正确
- [ ] 组件 API 正确

### Minor
- [ ] 图标尺寸一致
- [ ] 间距节奏合理

---

## References 导航

按需读取详细规则：

| 需求 | 文件 |
|------|------|
| Spacing/Color/Radius/Typography/Elevation/Surfaces 完整定义和决策树 | [tokens.md](references/tokens.md) |
| 动画时长、缓动曲线、微交互模式 | [animation.md](references/animation.md) |
| 暗色模式激活和 Token 适配 | [modes.md](references/modes.md) |
| 焦点环样式规则 | [focus.md](references/focus.md) |
| 图标尺寸、颜色、命名规则 | [icons.md](references/icons.md) |
| 所有组件 Props 定义 | [components.md](references/components.md) |
| 页面模板完整代码 | [templates.md](references/templates.md) |

---

## 视觉风格示例

### ✅ 正确
```tsx
<div className="flex h-screen">
  <SidebarNavigation>{/* ... */}</SidebarNavigation>
  <main className="flex-1 bg-brand-tertiary p-2xl">
    <h1 className="text-xl font-semibold text-text-primary mb-xl">Settings</h1>
    <div className="max-w-3xl flex flex-col gap-xl">
      <div className="bg-surface-bg rounded-corner-lg p-xl">
        <h2 className="font-semibold text-text-primary mb-lg">Profile</h2>
        <InputField label="Name" />
        <div className="flex justify-end mt-lg">
          <Button variant="primary">Save</Button>
        </div>
      </div>
    </div>
  </main>
</div>
```

### ❌ 错误
```tsx
// 禁止：彩色、边框、阴影、渐变
<main className="bg-gradient-to-br from-purple-50 to-blue-50">
  <div className="bg-white rounded-xl p-6 border-2 border-purple-200 shadow-lg">
    {/* ... */}
  </div>
</main>
```