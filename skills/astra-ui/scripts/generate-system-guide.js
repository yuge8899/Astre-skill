#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const {
  extractGateContract,
  GATE_CONTRACT_SOURCE,
  renderSystemGuide,
} = require('./astra-gate');

const repoRoot = path.resolve(__dirname, '../../..');
const contractPath = path.join(repoRoot, GATE_CONTRACT_SOURCE);

function main() {
  const contractMarkdown = fs.readFileSync(contractPath, 'utf8');
  const contract = extractGateContract(contractMarkdown, GATE_CONTRACT_SOURCE);
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
      contractPath
    )}.`
  );
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
