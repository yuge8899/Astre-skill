# Astre-skill

Astra UI 设计系统技能包，用于生成符合 Astra 规范的 UI 页面。

## 版本历史

| 版本 | 日期 | 更新内容 |
|------|------|----------|
| v1.3.0 | 2026-04-10 | 使用 shadcn/ui Chart 组件，保持 Astra 极简配色 |
| v1.2.0 | 2026-04-10 | 新增 Analytics Dashboard 模板，图表配色规则 |
| v1.1.0 | 2026-04-10 | 强化极简设计原则，新增视觉风格示例 |
| v1.0.0 | 2026-04-10 | 初始版本，完整技能包 |

## 安装

```bash
# 克隆仓库
git clone https://github.com/yuge8899/Astre-skill.git

# 创建符号链接
ln -sf /path/to/Astre-skill/skills/astra-ui ~/.claude/skills/astra-ui
```

## 使用

在 Claude Code 中调用：

```
/astra-ui 创建一个设置页面
/astra-ui 创建一个数据分析 Dashboard 页面
/astra-ui 数据列表用什么布局
/astra-ui Button 有哪些变体
/astra-ui 验证这个页面
```

## 目录结构

```
Astre-skill/
├── README.md
├── CHANGELOG.md              # 版本变更记录
├── skills/
│   └── astra-ui/
│       └── SKILL.md          # 主技能文件
└── guidelines/               # 详细规则文档
    ├── overview.md           # 系统概览
    ├── setup.md              # 依赖配置
    ├── icon-discovery.md     # 图标查找
    ├── components/           # 组件规则
    │   ├── button.md
    │   ├── input.md
    │   ├── navigation.md
    │   └── ...
    ├── foundations/          # 基础 Token
    │   ├── color.md
    │   ├── spacing.md
    │   ├── typography.md
    │   └── ...
    └── composition/          # 布局组合
        ├── layouts.md
        ├── page-templates.md
        └── ...
```

## 包含内容

### 技能 (SKILL.md)

- **设计原则**：极简配色、卡片式布局、无边框设计
- **硬规则**：12 条强制规则
- **页面模板**：5 个标准模板
  - Dashboard
  - Analytics Dashboard（含图表）
  - Data List / Management
  - Detail / Editor
  - Form / Settings
- **决策树**：Layout、Component 选择逻辑
- **验证 Checklist**：Critical / Major / Minor 分层
- **图表组件**：shadcn/ui Chart + Astra 配色

### 规则文档 (guidelines/)

- **16 个组件规则**：Button, Input, Navigation, Table, Modal 等
- **10 个基础规则**：Color, Spacing, Typography, Animation 等
- **6 个组合规则**：Layouts, Page Templates, Hierarchy 等

## 设计系统特点

- **风格**：专业 B2C SaaS，极简、干净、透气
- **配色**：90% 中性色，品牌色仅用于主按钮
- **布局**：卡片式，无边框，表面色对比分隔
- **组件栈**：shadcn/ui + Arco Tabs + UIAstra
- **图表**：shadcn/ui Chart（基于 Recharts）

## 依赖安装

```bash
# 基础组件
npx shadcn@latest add button input table card dialog

# 图表组件
npx shadcn@latest add chart

# 图标
npm install lucide-react
```