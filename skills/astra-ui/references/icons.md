# Icons 图标

## 硬规则

- **必须使用 `lucide-react` 图标**：禁止内联 SVG，禁止其他图标库
- **使用前验证**：在 lucide.dev 或 icon-discovery.md 确认图标名称

```tsx
import { Home, Search, Settings } from 'lucide-react'
```

## 尺寸

| 尺寸 | 频率 | 用途 |
|------|------|------|
| 24px | ~60% | Toolbar、segmented controls、视频控制（默认） |
| 18px | — | 一级导航图标 |
| 16px | ~15% | 输入框前缀/后缀、Button 图标、紧凑 UI |
| 32px | ~5% | 大特性图标、空状态 |

**默认用 24px**。16px 用于输入框内或紧凑元素。

## strokeWidth

| 上下文 | strokeWidth |
|--------|-------------|
| 一级导航图标 | `1.5` |
| 二级导航图标 | `1.5` |
| 其他场景 | `2`（默认，可省略） |

## 尺寸模式

```tsx
// 导航图标 18px + strokeWidth 1.5
<Home className="w-[18px] h-[18px]" strokeWidth={1.5} />

// 按钮图标 16px
<Button iconStart={<Plus size={16} />}>Add</Button>

// 输入框前缀 16px
<InputField prefix={<Search size={16} />} label="Search" />

// 标准 24px
<Search size={24} />
```

## 颜色

图标默认继承 `currentColor`，通过父元素文字色控制：

| 上下文 | 父元素 class | 结果 |
|--------|-------------|------|
| 默认 | `text-slate-900` | 标准图标色 |
| 次要/弱化 | `text-slate-500` | 降低强调 |
| 品牌色表面 | `text-white` | 白色图标 |
| 激活/选中 | `text-blue-700` | 品牌色图标 |
| 状态 | `text-red-600`, `text-green-600` | 语义色 |

```tsx
// 图标继承 text-slate-500
<span className="text-slate-500">
  <Clock size={16} /> 2 hours ago
</span>

// 图标继承品牌色
<span className="text-blue-700">
  <Check size={16} /> Selected
</span>
```

## Props

| Prop | 默认 | 用途 |
|------|------|------|
| `size` | `24` | 图标尺寸（像素） |
| `color` | `"currentColor"` | 颜色（推荐用父元素 class） |
| `strokeWidth` | `2` | 线条粗细 — 导航图标用 `1.5` |
| `className` | — | 额外 class |

## 标准图标目录

### 导航
- `Home` — 首页
- `Film` — 视频/媒体
- `Book` — 资源库
- `Folder` — 项目/文件夹
- `Settings` — 设置
- `ChevronRight` — 展开/前进
- `ChevronDown` — 下拉

### 操作
- `Plus` — 新增
- `X` — 关闭
- `Check` — 确认
- `Pencil` — 编辑
- `Trash2` — 删除
- `Search` — 搜索
- `Download` / `Upload` — 下载/上传
- `Filter` — 筛选
- `MoreHorizontal` — 更多（横向）
- `MoreVertical` — 更多（纵向）

### 状态
- `CheckCircle` — 成功
- `AlertTriangle` — 警告
- `AlertCircle` — 错误
- `Info` — 信息
- `Loader2` — 加载中（配合 `animate-spin`）

### 用户
- `User` — 用户
- `Users` — 团队
- `Bell` — 通知
- `Star` — 收藏

## 规则

1. **不猜图标名** — 使用前在 lucide.dev 验证
2. 从 `lucide-react` 导入 — 不从其他库导入
3. 不创建内联 SVG
4. 同一上下文中图标尺寸一致
5. 导航图标用 `strokeWidth={1.5}`
6. 通过父元素文字 class 控制颜色，不用 `color` prop