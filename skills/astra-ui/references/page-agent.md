# Page-Agent Automated Testing

## Overview

[page-agent](https://github.com/alibaba/page-agent) is an Alibaba open-source JavaScript in-page GUI agent that enables natural-language control of web interfaces.

**Key advantages**:
- Pure JavaScript: no browser extension, Python, or headless browser required
- Text-based DOM operations: no screenshots or multimodal LLMs needed
- Supports custom LLMs such as qwen and GPT
- Provides an MCP Server for Claude Code integration

---

## Installation

### NPM Install

```bash
npm install page-agent
```

### CDN Import

```html
<script src="https://cdn.jsdelivr.net/npm/page-agent@1.7.1/dist/iife/page-agent.demo.js" crossorigin="true"></script>
```

---

## Basic Configuration

```tsx
import { PageAgent } from 'page-agent'

const agent = new PageAgent({
  model: 'qwen3.5-plus',
  baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
  apiKey: 'YOUR_API_KEY',
  language: 'en-US',
})
```

---

## Astra UI Automated Validation Examples

### 1. Navigation Spec Validation

```tsx
// Validate primary navigation
await agent.execute('Verify left primary nav width is 110px')
await agent.execute('Verify primary nav item icons and text are horizontally arranged')
await agent.execute('Verify primary nav background is dark and has no right border')

// Validate secondary navigation
await agent.execute('Verify secondary nav width is 130px')
await agent.execute('Verify secondary nav background is bg-white')
await agent.execute('Verify secondary nav has no border dividers')

// Validate breadcrumb
await agent.execute('Verify page top has a white breadcrumb/header container')
await agent.execute('Verify breadcrumb height is approximately 64px')
```

### 2. Button Layout Validation

```tsx
// Validate primary buttons
await agent.execute('Verify each visible area has only one blue primary button')
await agent.execute('Verify the primary button sits on the left side of the card')
await agent.execute('Verify the filter bar and table are inside the same card')

// Validate button interactions
await agent.execute('Click the Create button and verify the right-side drawer opens')
await agent.execute('Click the Export button and verify a file download is triggered')
```

### 3. Table Validation

```tsx
// Validate table spec
await agent.execute('Verify the table has a pagination bar')
await agent.execute('Verify each row has no more than 3 visible action buttons')
await agent.execute('Verify the actions column is fixed on the right when content overflows')

// Table interaction
await agent.execute('Click the View button in the first row')
await agent.execute('Click the More button and verify the dropdown menu expands')
await agent.execute('Click the Delete option in the dropdown menu')
```

### 4. Form Validation

```tsx
// Simple form (<=5 fields) validation
await agent.execute('Click the Create Campaign button')
await agent.execute('Verify a right-side drawer opens instead of a new page')

// Complex form validation
await agent.execute('Click the Create Order button')
await agent.execute('Verify navigation to a new page')

// Input validation
await agent.execute('Type "Order No. 001" into the search box')
await agent.execute('Click the Search button')
await agent.execute('Verify the table shows search results')
```

### 5. Full Page Flow Testing

```tsx
// Order creation flow
async function testOrderCreation() {
  await agent.execute('Click the Orders menu in the left navigation')
  await agent.execute('Verify navigation to the order list page')
  await agent.execute('Click the Create Order button')
  await agent.execute('Fill in "Test Customer" in the customer name field')
  await agent.execute('Select "Pro Plan" in the product dropdown')
  await agent.execute('Click the Create button')
  await agent.execute('Verify a success toast appears')
  await agent.execute('Verify the new order appears in the first row of the table')
}

// Filter and export flow
async function testFilterAndExport() {
  await agent.execute('Select "Completed" in the status filter')
  await agent.execute('Verify the table shows only completed orders')
  await agent.execute('Click the Export button')
  await agent.execute('Verify a file download is triggered')
}
```

---

## MCP Server Integration

page-agent provides an MCP Server (Beta) that can integrate with Claude Code:

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

Once integrated, Claude Code can directly control the browser with natural language:

```tsx
// Direct usage in Claude Code
// "Use page-agent to verify the current page navigation layout conforms to Astra spec"
// "Use page-agent to test the create-order flow"
```

---

## Typical Use Cases

| Scenario | Description |
|----------|-------------|
| **Design spec validation** | Automatically check nav width, button layout, and color spec |
| **Interaction flow testing** | Test form submission, filtering, and pagination interactions |
| **Regression testing** | Re-run spec validation automatically after each code change |
| **Accessibility testing** | Verify keyboard navigation and focus states |
| **Demo recording** | Automatically execute and record operation flows |

---

## Using with Astra UI Skill

1. **Development phase**: Use page-agent to quickly validate components against the spec
2. **Design review**: Use natural language to inspect the implementation
3. **Continuous integration**: Add automated spec validation to CI/CD
4. **Documentation demos**: Create interactive demonstrations for the design spec

---

## Notes

- page-agent requires a configured LLM API key
- Production environments should use private LLM deployments
- Sensitive operations require human confirmation
- Complex pages may require adjustments to the execution strategy
