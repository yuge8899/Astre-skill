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
    { pattern: /Primary Navigation[^.\n]*bg-white/, token: 'bg-white' },
    { pattern: /Secondary Navigation[^.\n]*bg-slate-100/, token: 'bg-slate-100' },
    { pattern: /Canvas Background[^.\n]*bg-blue-100/, token: 'bg-blue-100' },
    { pattern: /Safe margins[^.\n]*p-6/, token: 'p-6' },
  ],
  'skills/astra-ui/references/tokens.md': [
    { pattern: /surface-secondary-bg.*bg-slate-100/, token: 'bg-slate-100' },
    { pattern: /surface-canvas.*bg-blue-100/, token: 'bg-blue-100' },
    { pattern: /Page canvas\?\s*→ bg-blue-100/, token: 'bg-blue-100' },
    { pattern: /Primary nav\?\s*→ bg-white/, token: 'bg-white' },
    { pattern: /Secondary nav\?\s*→ bg-slate-100/, token: 'bg-slate-100' },
    { pattern: /page canvas uses brand-100/i, token: 'bg-blue-100' },
    { pattern: /<main className="bg-blue-100"/, token: 'bg-blue-100' },
    { pattern: /bg-blue-100 p-6/, token: 'p-6' },
    { pattern: /page canvas always uses `bg-blue-100`/i, token: 'bg-blue-100' },
    { pattern: /white\/gray page background \(should use `bg-blue-100`\)/i, token: 'bg-blue-100' },
  ],
  'skills/astra-ui/references/layout.md': [
    { pattern: /p-5[^.\n]*p-6/, token: 'p-6' },
    { pattern: /border-r/, token: 'border-r' },
    { pattern: /border border-slate-100/, token: 'border' },
    { pattern: /border-t border-slate-100/, token: 'border-t' },
  ],
  'skills/astra-ui/references/components.md': [
    { pattern: /Navigation icons?: `strokeWidth=\{1\.5\}`/, token: 'strokeWidth={1.5}' },
    { pattern: /<\w+[^>\n]*strokeWidth=\{1\.5\}/, token: 'strokeWidth={1.5}' },
    { pattern: /className="[^"\n]*rounded-full/, token: 'rounded-full' },
    { pattern: /## PrimaryNav[\s\S]{0,400}`bg-white`/, token: 'bg-white' },
    { pattern: /## SecondaryNav[\s\S]{0,300}`bg-slate-100`/, token: 'bg-slate-100' },
    { pattern: /Main content \(bg-blue-100\)/, token: 'bg-blue-100' },
    { pattern: /p-6 \(24px\)/, token: 'p-6' },
    { pattern: /className="[^"\n]*border-r/, token: 'border-r' },
  ],
  'skills/astra-ui/references/icons.md': [
    { pattern: /Primary navigation icons \| `1\.5`/, token: '1.5' },
    { pattern: /Secondary navigation icons \| `1\.5`/, token: '1.5' },
    { pattern: /strokeWidth=\{1\.5\}/, token: 'strokeWidth={1.5}' },
    { pattern: /navigation icons use `strokeWidth=\{1\.5\}`/i, token: 'strokeWidth={1.5}' },
  ],
  'skills/astra-ui/references/examples.md': [
    { pattern: /Correct Implementation[\s\S]*border-r/, token: 'border-r' },
    { pattern: /Correct Implementation[\s\S]*shadow-sm/, token: 'shadow-sm' },
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
