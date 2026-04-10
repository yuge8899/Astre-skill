const test = require('node:test');
const assert = require('node:assert/strict');

const { getPreCommitOutputFiles } = require('../pre-commit-gate');

const contract = {
  rules: {
    outputGate: {
      extensions: ['.tsx', '.jsx', '.html'],
      exclude: ['skills/', 'guidelines/', 'workflow/ASTRA_ADMIN_DATALIST_TRACE.md'],
    },
  },
};

test('getPreCommitOutputFiles keeps only staged Astra output files', () => {
  const stagedFiles = [
    'order-list-page.tsx',
    'workflow/demos/product-tags-demo.html',
    'skills/astra-ui/SKILL.md',
    'guidelines/components/table.md',
    'workflow/ASTRA_ADMIN_DATALIST_TRACE.md',
  ];

  assert.deepEqual(getPreCommitOutputFiles(stagedFiles, contract), [
    'order-list-page.tsx',
    'workflow/demos/product-tags-demo.html',
  ]);
});

test('getPreCommitOutputFiles de-duplicates repeated staged paths', () => {
  const stagedFiles = ['order-list-page.tsx', 'order-list-page.tsx'];

  assert.deepEqual(getPreCommitOutputFiles(stagedFiles, contract), [
    'order-list-page.tsx',
  ]);
});
