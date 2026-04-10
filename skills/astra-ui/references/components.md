# Components Props

## Button

| Prop | Type | Default |
|------|------|---------|
| `variant` | `'primary' \| 'neutral' \| 'subtle'` | `'primary'` |
| `size` | `'medium' \| 'small'` | `'medium'` |
| `iconStart` | `ReactNode` | — |
| `iconEnd` | `ReactNode` | — |
| `disabled` | `boolean` | `false` |
| `className` | `string` | — |

**变体选择**：
```
├─ 主 CTA（每区块一个）→ variant="primary"
├─ 辅助操作 → variant="neutral" ⭐ 默认
└─ 低强调 → variant="subtle"
```

**规则**：
- 只有一种 `primary` 每可见区块
- 图标用 `iconStart`/`iconEnd`，size={16}
- 有效变体：`primary`、`neutral`、`subtle`（无 `secondary`、`ghost`、`destructive`）

---

## IconButton

| Prop | Type | Default |
|------|------|---------|
| `icon` | `ReactNode` | required |
| `variant` | `'primary' \| 'neutral' \| 'subtle'` | `'primary'` |
| `size` | `'medium' \| 'small'` | `'medium'` |
| `disabled` | `boolean` | `false` |

**尺寸**：medium = 40×40px，small = 32×32px

**规则**：圆形（`rounded-full`），配 `Tooltip` 使用

---

## ButtonGroup

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | required |
| `align` | `'justify' \| 'start' \| 'end' \| 'center' \| 'stack'` | `'justify'` |
| `className` | `string` | — |

**布局**：
- `justify`：全宽，space-between
- `start`/`end`/`center`：左/右/居中
- `stack`：垂直堆叠

---

## InputField

| Prop | Type | Default |
|------|------|---------|
| `value` | `string` | — |
| `label` | `string` | — |
| `description` | `string` | — |
| `placeholder` | `string` | `'I am a placeholder...'` |
| `prefix` | `ReactNode` | — |
| `suffix` | `ReactNode` | — |
| `disabled` | `boolean` | `false` |
| `className` | `string` | — |
| `onChange` | `(value: string) => void` | — |

**规则**：
- `onChange` 简化签名：`(value) => void`
- 图标 prefix 用 `size={16}`

---

## TextareaField

| Prop | Type | Default |
|------|------|---------|
| `value` | `string` | — |
| `label` | `string` | — |
| `description` | `string` | — |
| `placeholder` | `string` | `'Your text goes here...'` |
| `rows` | `number` | `3` |
| `disabled` | `boolean` | `false` |
| `onChange` | `(value: string) => void` | — |

---

## SelectField

| Prop | Type | Default |
|------|------|---------|
| `options` | `{ value: string, label: string }[]` | required |
| `value` | `string` | `''` |
| `onChange` | `(value: string) => void` | required |
| `placeholder` | `string` | `'Select an option'` |
| `label` | `string` | — |
| `description` | `string` | — |
| `disabled` | `boolean` | `false` |

**规则**：支持键盘导航

---

## Checkbox

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | — |
| `description` | `string` | — |
| `defaultChecked` | `boolean` | `false` |
| `onChange` | `(checked: boolean) => void` | — |
| `disabled` | `boolean` | `false` |

---

## RadioGroup

| Prop | Type | Default |
|------|------|---------|
| `options` | `{ value: string, label: string, description?: string }[]` | required |
| `value` | `string` | — |
| `defaultValue` | `string` | `''` |
| `onChange` | `(value: string) => void` | — |
| `name` | `string` | — |
| `disabled` | `boolean` | `false` |

**规则**：每个 option 可有 description

---

## SwitchField

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | `'Label'` |
| `description` | `string` | `'Description'` |
| `hasDescription` | `boolean` | `true` |
| `showLabel` | `boolean` | `true` |
| `defaultSelected` | `boolean` | `true` |
| `onChange` | `(selected: boolean) => void` | — |
| `disabled` | `boolean` | `false` |

---

## SearchComponent

| Prop | Type | Default |
|------|------|---------|
| `value` | `string` | `''` |
| `placeholder` | `string` | `'Search'` |
| `onChange` | `(value: string) => void` | — |
| `onSearch` | `(value: string) => void` | — |
| `disabled` | `boolean` | `false` |

**特性**：动画占位符

---

## SidebarNavigation

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | — |
| `footer` | `ReactNode` | — |
| `className` | `string` | — |

**规则**：
- 60px 宽，全高
- `AstraLogo` 内置在顶部
- 标准配置：Home、Film、Book、Folder（顶部），Settings + Avatar（footer）

```tsx
<SidebarNavigation
  footer={
    <>
      <SidebarButton icon={<Settings className="size-full" strokeWidth={1.5} />} />
      <Avatar type="image" src="/user.jpg" size="medium" shape="circle" />
    </>
  }
>
  <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} active />
</SidebarNavigation>
```

---

## SidebarButton

| Prop | Type | Default |
|------|------|---------|
| `icon` | `ReactNode` | required |
| `active` | `boolean` | `false` |
| `className` | `string` | — |

**规则**：图标用 `className="size-full"` 和 `strokeWidth={1.5}`

---

## SecondaryNav

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | required |
| `children` | `ReactNode` | required |
| `className` | `string` | — |

~252px 宽，`bg-surface-secondary-bg`

---

## SecondaryNavItem

| Prop | Type | Default |
|------|------|---------|
| `icon` | `ReactNode` | required |
| `label` | `string` | required |
| `active` | `boolean` | `false` |
| `className` | `string` | — |

---

## Tabs (Arco)

**来源**：`@arco-design/web-react`

**规则**：
- 仅用于三级导航（区域内视图切换）
- 三种样式：Line（默认）、Card、Text
- 文字标签，无图标
- 最多 6 个 tab

---

## Modal

| Prop | Type | Default |
|------|------|---------|
| `isOpen` | `boolean` | required |
| `onClose` | `() => void` | required |
| `title` | `string` | — |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` |
| `footer` | `ReactNode` | — |
| `children` | `ReactNode` | required |
| `className` | `string` | — |

**尺寸**：small=360px，medium=480px，large=640px

**规则**：
- Escape 关闭，backdrop 点击关闭
- 不嵌套 modal
- 主操作按钮在右边

---

## Table

| Prop | Type | Notes |
|------|------|-------|
| `columns` | `ColumnDef[]` | 列定义 |
| `data` | `object[]` | 数据 |
| `rowKey` | `string` | **required** |
| `loading` | `boolean` | 显示骨架屏 |
| `rowSelection` | `object` | 行选择配置 |
| `pagination` | `false \| PaginationProps` | 设为 false 则需外部 Pagination |
| `scroll` | `{ x?: number, y?: number }` | 滚动约束 |
| `noDataElement` | `ReactNode` | 自定义空状态 |

**列定义**：

| 字段 | 类型 | 说明 |
|------|------|------|
| `title` | `string` | 列标题 |
| `dataIndex` | `string` | 数据属性 |
| `key` | `string` | 唯一 key |
| `width` | `number` | 列宽 |
| `fixed` | `'left' \| 'right'` | 固定列 |
| `sorter` | `boolean \| function` | 排序 |
| `render` | `(value, record) => ReactNode` | 自定义渲染 |

**规则**：
- `rowKey` 必须设置
- Name 列 `fixed: 'left'`，Actions 列 `fixed: 'right'`
- 必须有 Pagination
- 启用 `scroll.x` 当 6+ 列

---

## Pagination

| Prop | Type | Default |
|------|------|---------|
| `total` | `number` | **required** |
| `current` | `number` | `1` |
| `pageSize` | `number` | `10` |
| `pageSizeOptions` | `number[]` | `[10, 20, 50]` |
| `showTotal` | `boolean` | `true` |
| `showJumper` | `boolean` | `true` |
| `showPageSize` | `boolean` | `true` |
| `onChange` | `(page, pageSize) => void` | — |

**规则**：
- 每个表格必须要有
- 在同一卡片内，表格下方

---

## Badge

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | `'Label'` |
| `variant` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'brand' \| 'secondary'` | `'default'` |
| `removable` | `boolean` | `false` |
| `onRemove` | `() => void` | — |

**规则**：用 `label` prop，不是 children

---

## Toast

| Prop | Type | Default |
|------|------|---------|
| `message` | `string` | required |
| `progress` | `number` | `0` |
| `variant` | `'default' \| 'success' \| 'error' \| 'warning'` | `'default'` |
| `showCancel` | `boolean` | `true` |
| `onCancel` | `() => void` | — |
| `onDismiss` | `() => void` | — |

---

## Tooltip

| Prop | Type | Default |
|------|------|---------|
| `content` | `string` | required |
| `position` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` |
| `delay` | `number` | `200` |
| `children` | `ReactNode` | required |

---

## EmptyState

| Prop | Type | Default |
|------|------|---------|
| `icon` | `ReactNode` | — |
| `title` | `string` | required |
| `description` | `string` | — |
| `action` | `ReactNode` | — |
| `className` | `string` | — |

---

## Skeleton

| Prop | Type | Default |
|------|------|---------|
| `animation` | `boolean` | `false` |
| `text` | `{ rows: number, width?: string[] }` | — |
| `image` | `boolean` | `false` |
| `className` | `string` | — |

**规则**：始终启用 `animation`

---

## Avatar

| Prop | Type | Default |
|------|------|---------|
| `type` | `'initial' \| 'image'` | `'image'` |
| `size` | `'small' \| 'medium' \| 'large'` | `'large'` |
| `shape` | `'circle' \| 'square'` | `'circle'` |
| `initials` | `string` | `'F'` |
| `src` | `string` | — |
| `alt` | `string` | `'Avatar'` |

**尺寸**：small=24px，medium=32px，large=40px

---

## AvatarGroup

| Prop | Type | Default |
|------|------|---------|
| `avatars` | `{ src: string, alt?: string }[]` | required |
| `maxVisible` | `number` | `3` |
| `spacing` | `'overlap' \| 'spaced'` | `'spaced'` |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `showOverflow` | `boolean` | `true` |

---

## ItemCard

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | `'Item Title'` |
| `updated` | `string` | `'Edited 2m ago'` |
| `spec` | `string` | `'4K'` |
| `duration` | `string` | `'0:01:30'` |
| `thumbnail` | `ReactNode` | — |
| `className` | `string` | — |

305px 宽，316:177 媒体区域

---

## DurationBadge

| Prop | Type | Default |
|------|------|---------|
| `duration` | `string` | required |
| `className` | `string` | — |

---

## VideoControl

| Prop | Type | Default |
|------|------|---------|
| `currentTime` | `number` | `0` |
| `totalTime` | `number` | `0` |
| `progress` | `number` (0-100) | `0` |
| `isPlaying` | `boolean` | `false` |
| `onPlayPause` | `() => void` | — |
| `onSeek` | `(progress: number) => void` | — |
| `onSettings` | `() => void` | — |

---

## Breadcrumb (Arco)

**规则**：
- 仅用于 2+ 层级深的页面
- 最后一项不是链接
- 最多 4 个可见项

---

## Toolbar

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | required |
| `className` | `string` | — |

48px 高，16px 圆角，浮动层有微阴影

---

## ToolbarItem

| Prop | Type | Default |
|------|------|---------|
| `icon` | `ReactNode` | required |
| `selected` | `boolean` | `false` |
| `className` | `string` | — |

32px 圆形按钮，用 `size={24}` 图标

---

## ChatBubbles

| Prop | Type | Default |
|------|------|---------|
| `type` | `'user' \| 'ai'` | `'ai'` |
| `text` | `string` | required |
| `userAvatar` | `ReactNode` | — |

AI 气泡用 `brand-secondary` 背景

---

## PromptInput

| Prop | Type | Default |
|------|------|---------|
| `value` | `string` | `''` |
| `placeholder` | `string` | `'Describe your video'` |
| `onChange` | `(value: string) => void` | — |
| `onSend` | `() => void` | — |
| `onAttach` | `() => void` | — |
| `disabled` | `boolean` | `false` |

---

## PromptPane

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | — |
| `value` | `string` | — |
| `placeholder` | `string` | — |
| `onChange` | `(value: string) => void` | — |
| `onSend` | `() => void` | — |
| `onAttach` | `() => void` | — |
| `disabled` | `boolean` | — |

**规则**：内置 PromptInput，不再添加单独的输入框。传 ChatBubbles 作为 children。

---

## Anti-patterns

### Button
- ❌ 每区块多个 `primary` 按钮
- ❌ 使用不存在的变体：`secondary`、`ghost`、`destructive`
- ❌ 用 `leftIcon`/`rightIcon`（正确：`iconStart`/`iconEnd`）

### Navigation
- ❌ 用 Tabs 替代 SidebarNavigation（主导航）
- ❌ 用 Tabs 替代 SecondaryNav（页面子区块）
- ❌ 跳过导航层级：SidebarNavigation → Tabs（缺少 SecondaryNav）
- ❌ SidebarButton 图标不用 `strokeWidth={1.5}` 和 `className="size-full"`

### Tabs
- ❌ 超过 6 个 tab（应使用 SecondaryNav）
- ❌ Tab 标签包含图标
- ❌ Line tabs 嵌套 line tabs
- ❌ Tab panels 有表格/图表但未启用 lazy rendering

### Table
- ❌ 没有 Pagination
- ❌ 缺少 `rowKey` prop
- ❌ 空表格没有 `noDataElement`
- ❌ 用 spinner 替代 `loading={true}`
- ❌ 每行超过 3 个可见操作按钮
- ❌ 宽表格 Actions 列没有 `fixed: 'right'`

### Pagination
- ❌ 放在表格卡片外面
- ❌ 缺少 `total` prop
- ❌ 全页表格用 `simple` 模式
- ❌ 改变 pageSize 后没有重置到第 1 页

### Modal
- ❌ 嵌套 modal
- ❌ 主操作按钮在左边（应该在右边）
- ❌ 手动添加遮罩层（Modal 组件内置）

### Badge
- ❌ 用 children 而不是 `label` prop

### Breadcrumb
- ❌ 顶级页面使用（Dashboard、根列表）
- ❌ 最后一项是链接
- ❌ 虚构不存在的路由层级
- ❌ 超过 4 个可见项不折叠

### Form Layout
- ❌ 每个字段单独一个卡片（相关字段应放在同一卡片）
- ❌ 不相关区块放在同一卡片
- ❌ 表单内容直接放在画布上（应该放在 `surface-bg` 卡片内）

### General
- ❌ 使用组件时不知道 Props，应该先查阅文档
- ❌ 混用不同尺寸的组件（如 Button `medium` 和 `small` 混用）