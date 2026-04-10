#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const { extractGateContract } = require('./astra-gate');
const {
  checkOutputFileContent,
  collectOutputFiles,
} = require('./astra-output-gate');

const repoRoot = path.resolve(__dirname, '../../..');
const skillPath = path.join(repoRoot, 'skills/astra-ui/SKILL.md');

function main() {
  const skillMarkdown = fs.readFileSync(skillPath, 'utf8');
  const contract = extractGateContract(skillMarkdown);
  const cliPaths = process.argv.slice(2);
  const relativeFiles =
    cliPaths.length > 0
      ? cliPaths.map((filePath) =>
          path.isAbsolute(filePath)
            ? path.relative(repoRoot, filePath)
            : normalizeRelativePath(filePath)
        )
      : collectOutputFiles(listRepositoryFiles(repoRoot), contract);

  if (relativeFiles.length === 0) {
    console.log('No Astra output files found for validation.');
    return;
  }

  const issues = [];

  for (const relativeFile of relativeFiles) {
    const absolutePath = path.join(repoRoot, relativeFile);
    if (!fs.existsSync(absolutePath)) {
      issues.push(`${relativeFile}: file does not exist.`);
      continue;
    }

    const content = fs.readFileSync(absolutePath, 'utf8');
    issues.push(...checkOutputFileContent(contract, relativeFile, content));
  }

  if (issues.length > 0) {
    console.error('Astra output gate failed.');
    for (const issue of issues) {
      console.error(`- ${issue}`);
    }
    process.exit(1);
  }

  console.log(`Astra output gate passed for ${relativeFiles.length} file(s).`);
}

function listRepositoryFiles(currentDir, parentRelative = '') {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules') {
      continue;
    }

    const absolutePath = path.join(currentDir, entry.name);
    const relativePath = normalizeRelativePath(
      path.join(parentRelative, entry.name)
    );

    if (entry.isDirectory()) {
      files.push(...listRepositoryFiles(absolutePath, relativePath));
      continue;
    }

    files.push(relativePath);
  }

  return files;
}

function normalizeRelativePath(filePath) {
  return filePath.split(path.sep).join('/');
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
