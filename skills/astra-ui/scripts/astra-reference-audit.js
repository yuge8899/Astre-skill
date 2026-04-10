const fs = require('fs');
const path = require('path');

const KEY_REFERENCE_FILES = [
  'skills/astra-ui/references/validation.md',
  'skills/astra-ui/references/tokens.md',
  'skills/astra-ui/references/layout.md',
  'skills/astra-ui/references/components.md',
  'skills/astra-ui/references/icons.md',
  'skills/astra-ui/references/examples.md',
];

const LEGACY_PATTERNS = {
  'skills/astra-ui/references/validation.md': [
    { pattern: /一级导航[^。\n]*bg-white/, token: 'bg-white' },
    { pattern: /二级导航[^。\n]*bg-slate-100/, token: 'bg-slate-100' },
    { pattern: /Canvas 背景[^。\n]*bg-blue-100/, token: 'bg-blue-100' },
    { pattern: /安全距离[^。\n]*p-6/, token: 'p-6' },
  ],
  'skills/astra-ui/references/tokens.md': [
    { pattern: /surface-secondary-bg.*bg-slate-100/, token: 'bg-slate-100' },
    { pattern: /surface-canvas.*bg-blue-100/, token: 'bg-blue-100' },
    { pattern: /页面画布？→ bg-blue-100/, token: 'bg-blue-100' },
    { pattern: /一级导航？→ bg-white/, token: 'bg-white' },
    { pattern: /二级导航？→ bg-slate-100/, token: 'bg-slate-100' },
    { pattern: /页面画布用 brand-100/, token: 'bg-blue-100' },
    { pattern: /<main className="bg-blue-100"/, token: 'bg-blue-100' },
    { pattern: /bg-blue-100 p-6/, token: 'p-6' },
    { pattern: /页面画布始终使用 `bg-blue-100`/, token: 'bg-blue-100' },
    { pattern: /白色\/灰色页面背景（应使用 `bg-blue-100`）/, token: 'bg-blue-100' },
  ],
  'skills/astra-ui/references/layout.md': [
    { pattern: /p-5[^。\n]*p-6/, token: 'p-6' },
    { pattern: /border-r/, token: 'border-r' },
    { pattern: /border border-slate-100/, token: 'border' },
    { pattern: /border-t border-slate-100/, token: 'border-t' },
  ],
  'skills/astra-ui/references/components.md': [
    { pattern: /导航图标：`strokeWidth=\{1\.5\}`/, token: 'strokeWidth={1.5}' },
    { pattern: /<\w+[^>\n]*strokeWidth=\{1\.5\}/, token: 'strokeWidth={1.5}' },
    { pattern: /className="[^"\n]*rounded-full/, token: 'rounded-full' },
    { pattern: /## PrimaryNav[\s\S]{0,400}`bg-white`/, token: 'bg-white' },
    { pattern: /## SecondaryNav[\s\S]{0,300}`bg-slate-100`/, token: 'bg-slate-100' },
    { pattern: /Main content \(bg-blue-100\)/, token: 'bg-blue-100' },
    { pattern: /p-6 \(24px\)/, token: 'p-6' },
    { pattern: /className="[^"\n]*border-r/, token: 'border-r' },
  ],
  'skills/astra-ui/references/icons.md': [
    { pattern: /一级导航图标 \| `1\.5`/, token: '1.5' },
    { pattern: /二级导航图标 \| `1\.5`/, token: '1.5' },
    { pattern: /strokeWidth=\{1\.5\}/, token: 'strokeWidth={1.5}' },
    { pattern: /导航图标用 `strokeWidth=\{1\.5\}`/, token: 'strokeWidth={1.5}' },
  ],
  'skills/astra-ui/references/examples.md': [
    { pattern: /正确实现[\s\S]*border-r/, token: 'border-r' },
    { pattern: /正确实现[\s\S]*shadow-sm/, token: 'shadow-sm' },
  ],
};

function auditRepositoryReferences(repoRoot, contract) {
  const issues = [];

  for (const relativePath of KEY_REFERENCE_FILES) {
    const absolutePath = path.join(repoRoot, relativePath);
    const content = fs.readFileSync(absolutePath, 'utf8');
    issues.push(...auditReferenceContent(contract, relativePath, content));
  }

  return issues;
}

function auditReferenceContent(_contract, relativePath, content) {
  const patterns = LEGACY_PATTERNS[relativePath] || [];
  const issues = [];

  for (const { pattern, token } of patterns) {
    if (pattern.test(content)) {
      issues.push(`${relativePath}: legacy token \`${token}\` is still present.`);
    }
  }

  return issues;
}

module.exports = {
  KEY_REFERENCE_FILES,
  auditReferenceContent,
  auditRepositoryReferences,
};
