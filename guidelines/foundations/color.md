# Color Tokens (Tailwind CSS v4.1.6)

## 颜色系统概述

Astra 使用 Tailwind CSS v4 内置色板：
- **Slate** — 中性色（文字、背景、边框）
- **Blue** — 品牌主色
- **Blue-700 (#1d4ed8)** — 主题色

配色原则：~90% 中性表面，品牌色仅用于主操作和激活状态。

---

## 品牌色 (Blue)

使用 Tailwind `blue-*` 色板：

| Token | 值 | Tailwind Class | 用途 |
|-------|-----|----------------|------|
| `blue-50` | `#eff6ff` | `bg-blue-50` | 最浅背景 |
| `blue-100` | `#dbeafe` | `bg-blue-100` | **页面画布**、激活背景 |
| `blue-200` | `#bfdbfe` | `bg-blue-200` | AI 气泡、微妙高亮 |
| `blue-300` | `#93c5fd` | `bg-blue-300` | — |
| `blue-400` | `#60a5fa` | `bg-blue-400` | — |
| `blue-500` | `#3b82f6` | `bg-blue-500` | **主按钮**、激活状态 |
| `blue-600` | `#2563eb` | `bg-blue-600` | 主按钮悬停 |
| `blue-700` | `#1d4ed8` | `bg-blue-700` | **主题色**、按下状态 |
| `blue-800` | `#1e40af` | `bg-blue-800` | — |
| `blue-900` | `#1e3a8a` | `bg-blue-900` | — |
| `blue-950` | `#172554` | `bg-blue-950` | 最深 |

**品牌色使用规则**：
- `blue-500` — 主按钮默认状态
- `blue-600` — 主按钮悬停
- `blue-700` — 主题色、按下状态
- `blue-100` — 页面画布背景
- `blue-200` — AI 气泡

---

## 中性色 (Slate)

使用 Tailwind `slate-*` 色板：

| Token | 值 | Tailwind Class | 用途 |
|-------|-----|----------------|------|
| `slate-50` | `#f8fafc` | `bg-slate-50` | 悬停背景、微妙表面 |
| `slate-100` | `#f1f5f9` | `bg-slate-100` | 二级背景、输入框 |
| `slate-200` | `#e2e8f0` | `bg-slate-200` | 边框、分隔线 |
| `slate-300` | `#cbd5e1` | `bg-slate-300` | 禁用边框 |
| `slate-400` | `#94a3b8` | `text-slate-400` | 占位符、禁用文字、图标 |
| `slate-500` | `#64748b` | `text-slate-500` | **次要文字**、描述 |
| `slate-600` | `#475569` | `text-slate-600` | — |
| `slate-700` | `#334155` | `text-slate-700` | — |
| `slate-800` | `#1e293b` | `text-slate-800` | — |
| `slate-900` | `#0f172a` | `text-slate-900` | **主要文字** |
| `slate-950` | `#020617` | `text-slate-950` | 最深文字 |

---

## 语义色映射

### 背景

| 语义用途 | Tailwind Class |
|----------|----------------|
| 页面画布 | `bg-blue-100` |
| 卡片/面板 | `bg-white` |
| 一级导航 | `bg-white` |
| 二级导航 | `bg-slate-100` |
| 输入框 | `bg-slate-100` |
| 悬停状态 | `bg-slate-50` |
| AI 气泡 | `bg-blue-200` |

### 文字

| 语义用途 | Tailwind Class |
|----------|----------------|
| 主要文字 | `text-slate-900` |
| 次要文字 | `text-slate-500` |
| 占位符/禁用 | `text-slate-400` |
| 品牌色背景上 | `text-white` |
| 激活/交互文字 | `text-blue-700` |

### 边框

| 语义用途 | Tailwind Class |
|----------|----------------|
| 默认边框 | `border-slate-200` |
| 微妙边框 | `border-slate-100` |
| 聚焦/选中 | `border-blue-500` |

---

## 状态色

| 状态 | 文字 | 背景 |
|------|------|------|
| 成功 | `text-green-600` | `bg-green-50` |
| 警告 | `text-amber-600` | `bg-amber-50` |
| 错误 | `text-red-600` | `bg-red-50` |
| 信息 | `text-blue-600` | `bg-blue-50` |

---

## 决策树

### 背景色

```
┌─ "What background color?"
│
├─ 页面画布？→ bg-blue-100
├─ 卡片/面板？→ bg-white
├─ 一级导航？→ bg-white
├─ 二级导航？→ bg-slate-100
├─ 输入框？→ bg-slate-100
├─ 悬停状态？→ bg-slate-50
├─ 主按钮？→ bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700
├─ AI 气泡？→ bg-blue-200
└─ 边框？→ border-slate-200
```

### 文字色

```
┌─ "What text color?"
│
├─ 主要内容？→ text-slate-900
├─ 次要文字（描述）？→ text-slate-500
├─ 占位符/禁用？→ text-slate-400
├─ 激活/交互？→ text-blue-700
├─ 品牌色背景上？→ text-white
└─ 状态？→ text-green-600 / text-amber-600 / text-red-600
```

---

## 常见错误

```tsx
// ❌ 错误：text-slate-900 在 blue-500 背景上不可见
<button className="bg-blue-500 text-slate-900">Save</button>

// ✅ 正确：使用 text-white
<button className="bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700">Save</button>

// ❌ 错误：页面背景用白色
<main className="bg-white">

// ✅ 正确：页面背景用 blue-100
<main className="bg-blue-100">

// ❌ 错误：硬编码颜色
<div className="bg-[#3b82f6]">

// ✅ 正确：使用 Tailwind 色板
<div className="bg-blue-500">
```

---

## 规则

1. **使用 Tailwind 内置色板** — `blue-*` 和 `slate-*`
2. **90% 中性表面** — `white` + `slate-*`
3. **品牌色仅用于主操作** — `blue-500/600/700`
4. **页面画布用 blue-100**
5. **卡片用纯白**
6. **无边框设计** — 用表面色对比分隔