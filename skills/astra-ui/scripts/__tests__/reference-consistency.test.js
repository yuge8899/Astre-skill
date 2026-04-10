const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const {
  auditReferenceContent,
  auditRepositoryReferences,
} = require('../astra-reference-audit');
const { extractGateContract } = require('../astra-gate');

const repoRoot = path.resolve(__dirname, '../../../..');
const skillMarkdown = fs.readFileSync(
  path.join(repoRoot, 'skills/astra-ui/SKILL.md'),
  'utf8'
);
const contract = extractGateContract(skillMarkdown);

test('auditReferenceContent flags known legacy Astra tokens', () => {
  const tokenIssues = auditReferenceContent(
    contract,
    'skills/astra-ui/references/tokens.md',
    'surface-canvas bg-blue-100 surface-secondary-bg bg-slate-100 页面画布？→ bg-blue-100 一级导航？→ bg-white 二级导航？→ bg-slate-100 页面画布始终使用 `bg-blue-100` bg-blue-100 p-6'
  );
  const layoutIssues = auditReferenceContent(
    contract,
    'skills/astra-ui/references/layout.md',
    'border-r border border-slate-100 border-t border-slate-100 p-5 (20px) 或 p-6 (24px)'
  );
  const componentIssues = auditReferenceContent(
    contract,
    'skills/astra-ui/references/components.md',
    '导航图标：`strokeWidth={1.5}` <Button className="rounded-full"> Main content (bg-blue-100) p-6 (24px) border-r 背景：`bg-white` 背景：`bg-slate-100`'
  );
  const iconIssues = auditReferenceContent(
    contract,
    'skills/astra-ui/references/icons.md',
    '| 一级导航图标 | `1.5` | <Home strokeWidth={1.5} /> 导航图标用 `strokeWidth={1.5}`'
  );
  const exampleIssues = auditReferenceContent(
    contract,
    'skills/astra-ui/references/examples.md',
    '### ✅ 正确实现 <nav className="border-r" /> <header className="shadow-sm" />'
  );

  assert.ok(
    tokenIssues.some((issue) => issue.includes('legacy token `bg-blue-100`'))
  );
  assert.ok(
    tokenIssues.some((issue) => issue.includes('legacy token `bg-slate-100`'))
  );
  assert.ok(layoutIssues.some((issue) => issue.includes('legacy token `border-r`')));
  assert.ok(layoutIssues.some((issue) => issue.includes('legacy token `p-6`')));
  assert.ok(
    componentIssues.some((issue) => issue.includes('legacy token `strokeWidth={1.5}`'))
  );
  assert.ok(
    componentIssues.some((issue) => issue.includes('legacy token `rounded-full`'))
  );
  assert.ok(iconIssues.some((issue) => issue.includes('legacy token `1.5`')));
  assert.ok(exampleIssues.some((issue) => issue.includes('legacy token `border-r`')));
  assert.ok(exampleIssues.some((issue) => issue.includes('legacy token `shadow-sm`')));
});

test('key Astra references are aligned with the current contract', () => {
  const issues = auditRepositoryReferences(repoRoot, contract);

  assert.deepEqual(issues, []);
});
