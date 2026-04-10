#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const {
  compareGuideContent,
  extractGateContract,
  GUIDE_REGENERATE_COMMAND,
  renderSystemGuide,
} = require('./astra-gate');
const { auditRepositoryReferences } = require('./astra-reference-audit');

const repoRoot = path.resolve(__dirname, '../../..');
const skillPath = path.join(repoRoot, 'skills/astra-ui/SKILL.md');

function main() {
  const skillMarkdown = fs.readFileSync(skillPath, 'utf8');
  const contract = extractGateContract(skillMarkdown);
  const guidePath = path.join(repoRoot, contract.generatedGuidePath);

  if (!fs.existsSync(guidePath)) {
    throw new Error(
      `${path.relative(repoRoot, guidePath)} is missing. Run \`${GUIDE_REGENERATE_COMMAND}\`.`
    );
  }

  const expectedGuide = renderSystemGuide(contract);
  const currentGuide = fs.readFileSync(guidePath, 'utf8');
  const diffs = compareGuideContent(expectedGuide, currentGuide);

  if (diffs.length > 0) {
    console.error(
      'SYSTEM_GUIDE.md is out of sync with the Gate Contract in skills/astra-ui/SKILL.md.'
    );
    for (const diff of diffs) {
      console.error(diff);
    }
    console.error(`Run \`${GUIDE_REGENERATE_COMMAND}\` to fix it.`);
    process.exit(1);
  }

  const referenceIssues = auditRepositoryReferences(repoRoot, contract);
  if (referenceIssues.length > 0) {
    console.error(
      'Astra references are out of sync with the current Gate Contract.'
    );
    for (const issue of referenceIssues) {
      console.error(issue);
    }
    process.exit(1);
  }

  console.log('Astra gate check passed.');
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
