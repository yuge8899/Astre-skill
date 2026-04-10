# Changelog

All notable changes to this project will be documented in this file.

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