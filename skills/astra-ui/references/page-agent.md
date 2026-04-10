# Page-Agent 自动化测试

## 概述

[page-agent](https://github.com/alibaba/page-agent) 是阿里巴巴开源的 JavaScript 网页内嵌 GUI 代理，可通过自然语言控制网页界面。

**核心优势**：
- 纯 JavaScript，无需浏览器扩展、Python、无头浏览器
- 基于文本 DOM 操作，不需要截图或多模态 LLM
- 支持自定义 LLM（qwen、GPT 等）
- 提供 MCP Server，可与 Claude Code 集成

---

## 安装

### NPM 安装

```bash
npm install page-agent
```

### CDN 引入

```html
<script src="https://cdn.jsdelivr.net/npm/page-agent@1.7.1/dist/iife/page-agent.demo.js" crossorigin="true"></script>
```

---

## 基础配置

```tsx
import { PageAgent } from 'page-agent'

const agent = new PageAgent({
  model: 'qwen3.5-plus',
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
  apiKey: 'YOUR_API_KEY',
  language: 'zh-CN',
})
```

---

## Astra UI 自动化验证示例

### 1. 导航规范验证

```tsx
// 验证一级导航
await agent.execute('验证左侧一级导航宽度是否为 110px')
await agent.execute('验证一级导航项的图标和文字是否横向排列')
await agent.execute('验证一级导航背景是否为白色，无右边框')

// 验证二级导航
await agent.execute('验证二级导航宽度是否为 130px')
await agent.execute('验证二级导航背景是否为 slate-100')
await agent.execute('验证二级导航没有边框分隔线')

// 验证面包屑
await agent.execute('验证页面顶部是否有白色背景的面包屑卡片')
await agent.execute('验证面包屑高度约为 64px')
```

### 2. 按钮布局验证

```tsx
// 验证主按钮
await agent.execute('验证每个可见区域是否只有一个蓝色主按钮')
await agent.execute('验证主按钮是否在卡片左侧')
await agent.execute('验证筛选区和表格是否在同一卡片内')

// 验证按钮操作
await agent.execute('点击新建按钮，验证是否打开右侧抽屉')
await agent.execute('点击导出按钮，验证是否触发下载')
```

### 3. 表格验证

```tsx
// 验证表格规范
await agent.execute('验证表格是否有分页器')
await agent.execute('验证每行操作按钮是否不超过 3 个')
await agent.execute('验证表格内容过多时操作列是否固定在右侧')

// 表格交互
await agent.execute('点击第一行的查看按钮')
await agent.execute('点击更多按钮，验证是否展开下拉菜单')
await agent.execute('在下拉菜单中点击删除选项')
```

### 4. 表单验证

```tsx
// 简单表单（≤5 字段）验证
await agent.execute('点击新建活动按钮')
await agent.execute('验证是否打开右侧抽屉而不是新页面')

// 复杂表单验证
await agent.execute('点击新建订单按钮')
await agent.execute('验证是否跳转到新页面')

// 输入验证
await agent.execute('在搜索框输入"订单号 001"')
await agent.execute('点击搜索按钮')
await agent.execute('验证表格是否显示搜索结果')
```

### 5. 完整页面流程测试

```tsx
// 订单创建流程
async function testOrderCreation() {
  await agent.execute('点击左侧导航的订单菜单')
  await agent.execute('验证是否进入订单列表页')
  await agent.execute('点击新建订单按钮')
  await agent.execute('在客户名称输入框填写"测试客户"')
  await agent.execute('在产品下拉框选择"Pro Plan"')
  await agent.execute('点击创建按钮')
  await agent.execute('验证是否显示成功提示')
  await agent.execute('验证新订单是否出现在表格第一行')
}

// 筛选和导出流程
async function testFilterAndExport() {
  await agent.execute('在状态筛选器选择"已完成"')
  await agent.execute('验证表格是否只显示已完成订单')
  await agent.execute('点击导出按钮')
  await agent.execute('验证是否触发文件下载')
}
```

---

## MCP Server 集成

page-agent 提供 MCP Server（Beta），可与 Claude Code 集成：

```json
// claude_desktop_config.json
{
  "mcpServers": {
    "page-agent": {
      "command": "npx",
      "args": ["-y", "page-agent-mcp"]
    }
  }
}
```

集成后，Claude Code 可以直接用自然语言控制浏览器：

```tsx
// 在 Claude Code 中直接使用
// "用 page-agent 验证当前页面的导航布局是否符合 Astra 规范"
// "用 page-agent 测试新建订单流程"
```

---

## 典型应用场景

| 场景 | 说明 |
|------|------|
| **设计规范验证** | 自动检查导航宽度、按钮布局、颜色规范 |
| **交互流程测试** | 测试表单提交、筛选、分页等交互 |
| **回归测试** | 每次代码变更后自动运行规范验证 |
| **可访问性测试** | 验证键盘导航、焦点状态 |
| **演示录制** | 自动执行操作流程并录制 |

---

## 与 Astra UI Skill 配合使用

1. **开发阶段**：用 page-agent 快速验证组件是否符合规范
2. **设计评审**：用自然语言检查设计实现
3. **持续集成**：在 CI/CD 中加入自动化规范验证
4. **文档演示**：创建可交互的设计规范演示

---

## 注意事项

- page-agent 需要配置 LLM API Key
- 生产环境建议使用私有 LLM 部署
- 敏感操作需要人工确认
- 复杂页面可能需要调整执行策略