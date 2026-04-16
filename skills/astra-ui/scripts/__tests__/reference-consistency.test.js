const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const path = require('path');

const {
  auditReferenceContent,
  auditRepositoryReferences,
} = require('../astra-reference-audit');
const { extractGateContract, GATE_CONTRACT_SOURCE } = require('../astra-gate');

const repoRoot = path.resolve(__dirname, '../../../..');
const contractMarkdown = fs.readFileSync(
  path.join(repoRoot, GATE_CONTRACT_SOURCE),
  'utf8'
);
const contract = extractGateContract(contractMarkdown, GATE_CONTRACT_SOURCE);

test('auditReferenceContent flags known legacy Astra tokens', () => {
  const tokenIssues = auditReferenceContent(
    contract,
    'skills/astra-ui/references/tokens.md',
    'surface-canvas bg-blue-100 surface-secondary-bg bg-slate-100 Page canvas? → bg-blue-100 Primary nav? → bg-white Secondary nav? → bg-slate-100 page canvas always uses `bg-blue-100` bg-blue-100 p-6'
  );
  const layoutIssues = auditReferenceContent(
    contract,
    'skills/astra-ui/references/layout.md',
    'border-r border border-slate-100 border-t border-slate-100 p-5 (20px) or p-6 (24px)'
  );
  const componentIssues = auditReferenceContent(
    contract,
    'skills/astra-ui/references/components.md',
    'Navigation icons: `strokeWidth={1.5}` <Button className="rounded-full"> Main content (bg-blue-100) p-6 (24px) border-r Background: `bg-white` Background: `bg-slate-100`'
  );
  const iconIssues = auditReferenceContent(
    contract,
    'skills/astra-ui/references/icons.md',
    '| Primary navigation icons | `1.5` | <Home strokeWidth={1.5} /> navigation icons use `strokeWidth={1.5}`'
  );
  const exampleIssues = auditReferenceContent(
    contract,
    'skills/astra-ui/references/examples.md',
    '### ✅ Correct Implementation <nav className="border-r" /> <header className="shadow-sm" />'
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
