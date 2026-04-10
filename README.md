# Astre-skill

Astra UI 设计系统技能包，用于生成符合 Astra 规范的 UI 页面。

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
/astra-ui 数据列表用什么布局
/astra-ui Button 有哪些变体
/astra-ui 验证这个页面
```

## 目录结构

```
Astre-skill/
├── README.md
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

- 10 条核心规则
- 4 个标准页面模板 + shell 代码
- Layout 决策树
- Component 决策树
- 验证 Checklist
- 组件目录速查

### 规则文档 (guidelines/)

- **16 个组件规则**：Button, Input, Navigation, Table, Modal 等
- **10 个基础规则**：Color, Spacing, Typography, Animation 等
- **6 个组合规则**：Layouts, Page Templates, Hierarchy 等

## 设计系统特点

- B2C SaaS 产品风格
- 极简、干净、透气
- 三层组件栈：shadcn/ui + Arco Tabs + UIAstra