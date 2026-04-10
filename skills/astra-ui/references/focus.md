# Focus 焦点样式

## 焦点环模式

所有交互元素必须有可见的焦点指示器。

```css
.interactive:focus-visible {
  outline: 2px solid var(--brand-primary);
  outline-offset: 2px;
}
```

**在 Tailwind 中**：
```tsx
<button className="focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2">
  Custom button
</button>
```

## 在品牌色背景上

品牌色背景上，标准焦点环可能对比度不足，使用白色：

```tsx
<div className="bg-brand-primary">
  <button className="focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2">
    Action
  </button>
</div>
```

## 内置焦点样式的组件

以下组件已处理焦点样式，不需要手动添加：

- Button（所有变体）
- InputField, TextareaField, SelectField
- Checkbox, RadioGroup, SwitchField
- SidebarButton, SecondaryNavItem
- Tabs
- ToolbarItem
- Modal（焦点陷阱 + Escape 键）

## 自定义交互元素

创建自定义交互元素时，必须手动实现焦点样式：

```tsx
<div
  role="button"
  tabIndex={0}
  className="bg-surface-bg rounded-corner-lg p-xl cursor-pointer
             focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2"
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Custom card
</div>
```

**自定义交互元素规则**：
- 添加 `tabIndex={0}` 使其可聚焦
- 添加 `role="button"`（或适当的 ARIA role）
- 处理 `Enter` 和 `Space` 键事件
- 应用标准 focus-visible 模式

## 规则

- 用 `focus-visible`，不用 `focus`（仅键盘导航显示）
- 用 `brand-primary` 颜色
- 2px 宽度 + 2px 偏移
- 不用 `box-shadow` 作为焦点指示器
- 不移除焦点样式 — 如果默认样式不好看，替换它
- 不设置 `outline: none` 而没有替换