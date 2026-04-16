#!/usr/bin/env node

const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const { extractGateContract, GATE_CONTRACT_SOURCE } = require('./astra-gate');
const { getPreCommitOutputFiles } = require('./pre-commit-gate');

const repoRoot = path.resolve(__dirname, '../../..');
const contractPath = path.join(repoRoot, GATE_CONTRACT_SOURCE);
const docGatePath = path.join(__dirname, 'check-gate.js');
const outputGatePath = path.join(__dirname, 'check-astra-output.js');

function main() {
  runNodeScript(docGatePath, []);

  const contractMarkdown = fs.readFileSync(contractPath, 'utf8');
  const contract = extractGateContract(
    contractMarkdown,
    GATE_CONTRACT_SOURCE
  );
  const stagedFiles = getStagedFiles();
  const outputFiles = getPreCommitOutputFiles(stagedFiles, contract);

  if (outputFiles.length === 0) {
    console.log('No staged Astra output files detected. Skipping output gate.');
    return;
  }

  runNodeScript(outputGatePath, outputFiles);
}

function getStagedFiles() {
  const output = execFileSync(
    'git',
    ['diff', '--cached', '--name-only', '--diff-filter=ACMR'],
    {
      cwd: repoRoot,
      encoding: 'utf8',
    }
  );

  return output
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function runNodeScript(scriptPath, args) {
  execFileSync(process.execPath, [scriptPath, ...args], {
    cwd: repoRoot,
    stdio: 'inherit',
  });
}

try {
  main();
} catch (error) {
  process.exit(error.status || 1);
}
