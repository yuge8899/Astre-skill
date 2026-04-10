#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const { extractGateContract, renderSystemGuide } = require('./astra-gate');

const repoRoot = path.resolve(__dirname, '../../..');
const skillPath = path.join(repoRoot, 'skills/astra-ui/SKILL.md');

function main() {
  const skillMarkdown = fs.readFileSync(skillPath, 'utf8');
  const contract = extractGateContract(skillMarkdown);
  const outputPath = path.join(repoRoot, contract.generatedGuidePath);
  const guide = renderSystemGuide(contract);
  const currentGuide = fs.existsSync(outputPath)
    ? fs.readFileSync(outputPath, 'utf8')
    : null;

  if (currentGuide === guide) {
    console.log(
      `${path.relative(repoRoot, outputPath)} is already up to date.`
    );
    return;
  }

  fs.writeFileSync(outputPath, guide, 'utf8');
  console.log(
    `Generated ${path.relative(repoRoot, outputPath)} from ${path.relative(
      repoRoot,
      skillPath
    )}.`
  );
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
