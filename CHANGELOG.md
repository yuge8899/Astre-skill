# Changelog

All notable changes to this project will be documented in this file.

## [v1.8.0] - 2026-04-10

### Added

- **shadcn/ui 集成** - 完整的组件映射和使用示例
  - 17 个常用组件的导入路径
  - Astra 变体与 shadcn variant 对应关系
  - Button、Input、Dialog、Table 等完整示例

- **page-agent 自动化测试** - 自然语言控制网页
  - 安装和配置指南
  - 导航规范验证示例
  - 按钮布局验证
  - 表格和表单验证
  - MCP Server 集成

- **示例页面**
  - order-list-page.tsx: React 订单列表组件
  - order-list-preview.html: HTML 预览页面

### Changed

- **图标规范更新**
  - 必须使用 lucide.dev 图标（硬规则）
  - strokeWidth={1.5} 用于导航图标
  - 使用前必须验证图标名称

- **颜色系统迁移**
  - Tailwind CSS v4.1.6
  - Blue 作为品牌主色
  - Slate 作为中性色
  - Blue-700 作为主题色

### Benefits

- shadcn/ui 提供可控的组件源码
- page-agent 支持自然语言自动化测试
- 图标规范更严格，避免混用

## [v1.7.1] - 2026-04-10

### Added

- **Anti-patterns 补充** - 帮助 AI 避免"什么不该做"
  - components.md: Button、Navigation、Tabs、Table、Pagination、Modal、Badge、Breadcrumb、Form Layout 等
  - tokens.md: Color、Spacing、Radius、Typography、Elevation、Surfaces
  - animation.md: 补充 Missing prefers-reduced-motion support

### Benefits

- AI 能知道常见错误并避免
- 提高生成代码质量
- 减少 review 修改次数

## [v1.7.0] - 2026-04-10

### Changed

- **重构为 Progressive Disclosure 架构** - SKILL.md 精简 + references/ 分离
  - SKILL.md: 1368 行 → 235 行（触发时只加载核心内容）
  - references/tokens.md: Spacing、Color、Radius、Typography、Elevation、Surfaces 完整定义
  - references/components.md: 所有组件 Props 定义
  - references/templates.md: 页面模板完整代码
  - references/animation.md: 动画规则
  - references/modes.md: 暗色模式
  - references/focus.md: 焦点样式
  - references/icons.md: 图标规则

### Benefits

- 触发速度更快（只加载 235 行）
- Context window 更高效
- 按需读取详细规则
- 符合 skill-creator 最佳实践

## [v1.6.0] - 2026-04-10

### Added

- **完整 Guidelines 内容嵌入** - 所有规则直接可用
  - Animation: 时长 scale、缓动曲线、微交互模式、reduced motion
  - Modes/Dark mode: 激活方式、Token 自动适配、不变的 Token
  - Focus: 焦点环模式、品牌色背景上的焦点、自定义交互元素
  - Icons: 尺寸规范、颜色继承、命名规则、Props
  - 完整决策树: Spacing、Color、Radius、Typography、Elevation、Surfaces

- **组件 Props 完整定义** - 所有核心组件的 Props 表格
  - Button, IconButton, ButtonGroup
  - InputField, TextareaField, SelectField, Checkbox, RadioGroup, SwitchField
  - SidebarNavigation, SidebarButton, SecondaryNav, SecondaryNavItem
  - Table, Pagination, Modal
  - Badge, Toast, Tooltip, EmptyState, Skeleton
  - Avatar, ItemCard, Breadcrumb, Toolbar
  - ChatBubbles, PromptInput, PromptPane

### Changed

- 技能文件重新组织为 ~800 行精简版
- 移除冗余的按需读取指引，改为直接嵌入
- 强化视觉风格示例和对比

## [v1.5.0] - 2026-04-10

### Added

- **Design Tokens 完整体系** - 内嵌核心 Token 定义
  - Spacing: 6 级间距 token + 常用场景
  - Color: 主要 token + Tailwind 映射 + 背景/文字选择规则
  - Radius: 4 级圆角 + 组件映射
  - Typography: 5 个主要 class + 常用模式
  - Elevation: 阴影使用规则
  - Surfaces: 表面分层策略

- **按需读取 Guidelines 指引** - 完整的文件映射表
  - Foundations: 9 个基础 token 文件
  - Components: 15 个组件详细文档
  - Composition: 4 个布局组合文档

### Changed

- 技能文件从 874 行扩展到 1049 行
- Token 定义从简化版升级为完整版

## [v1.4.0] - 2026-04-10

### Added

- **shadcn/ui 组件安装清单** - 完整的组件依赖安装指南
  - 一键安装全部组件命令
  - 按类别分组的安装命令（布局、按钮、输入、反馈、弹层、数据、导航、图表）
  - 图标库安装命令
  - 组件使用示例代码

## [v1.3.0] - 2026-04-10

### Changed

- 使用 shadcn/ui Chart 组件替代原生 recharts
- 更新 Analytics Dashboard 模板，使用 `ChartContainer` API
- 图表配色保持 Astra 极简风格（brand-primary + 中性灰）

### Added

- 图表组件使用说明和安装命令
- `chartConfig` 配色配置示例

## [v1.2.0] - 2026-04-10

### Added

- **Template 1.5: Analytics Dashboard** - 数据分析页面模板
  - 顶部统计卡片（4 个关键指标）
  - 折线图卡片（趋势分析）
  - 柱状图卡片（对比分析）
  - 数据表格卡片
- 图表设计规则
- 图表验证 Checklist

## [v1.1.0] - 2026-04-10

### Added

- **设计原则**部分
  - 极简配色规则
  - 卡片设计规则
  - 颜色使用规则（明确禁止事项）
- **视觉风格示例**
  - 正确 vs 错误代码对比
  - 风格对比总结表
- 验证 Checklist 新增视觉风格检查项

### Changed

- 硬规则从 10 条扩展到 12 条
- 强化颜色使用限制

## [v1.0.0] - 2026-04-10

### Added

- **技能文件** `skills/astra-ui/SKILL.md`
  - 快速入口（按任务类型）
  - 核心规则（10 条硬规则）
  - 依赖栈定义（三层）
  - 4 个页面模板 + shell 代码
  - Layout 决策树
  - Component 决策树
  - 验证 Checklist
  - 组件目录速查

- **规则文档** `guidelines/`
  - 16 个组件规则
  - 10 个基础规则
  - 6 个组合规则
  - 根级规则文件

---

## 版本规划

### v1.4.0 (计划)

- 移动端响应式规则
- 暗色模式支持

### v2.0.0 (计划)

- 完整组件库封装
- 设计 Token 导出