# Astra UI 知识库导航

本文件是 Astra UI 设计系统所有详细规范子文件的索引映射表。请根据具体任务需求跳转至对应文档。

## 规范索引

| 需求场景 | 查阅文件 | 主要内容 |
|---------|---------|---------|
| **基础 Token** | [tokens.md](tokens.md) | 间距、颜色、圆角、字号、海拔等核心变量定义 |
| **层级与布局** | [layout.md](layout.md) | 页面解剖图、一级/二级导航规范、卡片式布局结构 |
| **图标资产** | [icons.md](icons.md) | Lucide 图标尺寸、颜色、描边粗细及标准库 |
| **组件 Props** | [components.md](components.md) | 符合 Astra 风格的 Shadcn/ui & Arco 组件映射及参数 |
| **占位图素材** | [image-placeholders.md](image-placeholders.md) | Stock 图片优先级、URL 规则、分类示例与尺寸建议 |
| **视觉规范** | [examples.md](examples.md) | 正确与错误的代码实现范例，对比走查 |
| **暗色模式** | [modes.md](modes.md) | Dark Mode 的色彩映射与激活逻辑 |
| **自动化验证**| [page-agent.md](page-agent.md) | 自动化测试脚本、MCP 集成与规则校验 |
| **交互动画** | [animation.md](animation.md) | 动画时长、缓动曲线与微交互模式 |
| **校验清单** | [validation.md](validation.md) | 最终交付前的合规性自查表 (Checklist) |
| **页面模板** | [templates.md](templates.md) | 各种场景的完整页面代码模板 (Dashboard, List 等) |

## 如何使用
在执行具体编码或设计验证任务时，建议首先阅读 [validation.md](validation.md) 了解红线规则，再根据具体的页面类型查看 [layout.md](layout.md) 进行结构搭建。
