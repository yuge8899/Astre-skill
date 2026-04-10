# Astre-skill

Astra UI 设计系统技能包，用于生成符合 Astra 规范的 UI 页面。

## 当前版本

**v1.8.0** - shadcn/ui 集成 + page-agent 自动化测试

## 版本历史

| 版本 | 日期 | 更新内容 |
|------|------|----------|
| v1.8.0 | 2026-04-10 | shadcn/ui 组件映射 + page-agent 自动化测试 + 图标硬规则 |
| v1.7.0 | 2026-04-10 | Progressive Disclosure 架构，SKILL.md 精简 + references/ 分离 |
| v1.6.0 | 2026-04-10 | 完整 Guidelines 内容嵌入 |
| v1.5.0 | 2026-04-10 | Design Tokens 完整体系 + Guidelines 按需读取指引 |
| v1.4.0 | 2026-04-10 | shadcn/ui 组件安装清单，按类别分组 |
| v1.3.0 | 2026-04-10 | 使用 shadcn/ui Chart 组件，保持 Astra 极简配色 |
| v1.2.0 | 2026-04-10 | 新增 Analytics Dashboard 模板，图表配色规则 |
| v1.1.0 | 2026-04-10 | 强化极简设计原则，新增视觉风格示例 |
| v1.0.0 | 2026-04-10 | 初始版本，完整技能包 |

## 安装

```bash
# 克隆仓库
git clone https://github.com/yuge8899/Astre-skill.git

# 创建符号链接
ln -sf /path/to/Astre-skill/skills/astra-ui ~/.agents/skills/astra-ui
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
├── CHANGELOG.md
├── skills/
│   └── astra-ui/
│       ├── SKILL.md          # 主技能文件 (421行)
│       └── references/       # 按需读取的详细规则
│           ├── tokens.md     # Design Tokens (Tailwind v4)
│           ├── components.md # shadcn/ui 组件映射
│           ├── icons.md      # lucide.dev 图标规范
│           ├── page-agent.md # 自动化测试
│           ├── templates.md  # 页面模板
│           ├── animation.md  # 动画规则
│           ├── modes.md      # 暗色模式
│           └── focus.md      # 焦点样式
└── guidelines/               # 原始规则文档
```

## 设计系统特点

- **风格**：专业 B2C SaaS，极简、干净、透气
- **配色**：Tailwind v4 Blue/Slate，90% 中性色
- **布局**：卡片式，无边框，表面色对比分隔
- **组件栈**：shadcn/ui + lucide-react + Arco Tabs
- **自动化**：page-agent 自然语言测试

## 依赖安装

```bash
# 初始化 shadcn/ui
npx shadcn@latest init

# 安装常用组件
npx shadcn@latest add button card input textarea select checkbox switch radio-group label badge toast tooltip dialog sheet table pagination avatar dropdown-menu separator scroll-area skeleton tabs breadcrumb

# 安装图标
npm install lucide-react

# 安装自动化测试（可选）
npm install page-agent
```