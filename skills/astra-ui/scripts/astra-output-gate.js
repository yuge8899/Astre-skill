function collectOutputFiles(allFiles, contract) {
  const { extensions, exclude } = contract.rules.outputGate;

  return allFiles.filter((filePath) => {
    const hasAllowedExtension = extensions.some((extension) =>
      filePath.endsWith(extension)
    );
    if (!hasAllowedExtension) {
      return false;
    }

    return !exclude.some(
      (excludedPath) =>
        filePath === excludedPath || filePath.startsWith(excludedPath)
    );
  });
}

function isLikelyPageShell(content, contract) {
  return contract.rules.outputGate.pageShellSignals.some((signal) =>
    content.includes(signal)
  );
}

function checkOutputFileContent(contract, relativePath, content) {
  const issues = [];
  const outputGate = contract.rules.outputGate;
  const likelyPageShell = isLikelyPageShell(content, contract);

  for (const token of outputGate.forbiddenTokens) {
    if (contentIncludesToken(content, token)) {
      issues.push(`${relativePath}: forbidden token \`${token}\` found.`);
    }
  }

  for (const token of outputGate.buttonForbiddenTokens) {
    if (hasForbiddenButtonToken(content, token)) {
      issues.push(
        `${relativePath}: forbidden button token \`${token}\` found.`
      );
    }
  }

  if (!likelyPageShell) {
    return issues;
  }

  for (const token of outputGate.requiredTokens) {
    if (!contentIncludesToken(content, token)) {
      issues.push(`${relativePath}: missing required token \`${token}\`.`);
    }
  }

  for (const [groupName, candidates] of Object.entries(outputGate.requiredAny)) {
    if (!candidates.some((candidate) => contentIncludesToken(content, candidate))) {
      issues.push(
        `${relativePath}: missing required ${groupName} indicator. Expected one of ${candidates
          .map((candidate) => `\`${candidate}\``)
          .join(', ')}.`
      );
    }
  }

  for (const token of outputGate.navForbiddenTokens) {
    if (contentIncludesToken(content, token)) {
      issues.push(
        `${relativePath}: forbidden navigation token \`${token}\` found.`
      );
    }
  }

  return issues;
}

function hasForbiddenButtonToken(content, token) {
  const buttonTagPattern = new RegExp(
    `<button[^>]*${escapeForRegExp(token)}[^>]*>`,
    'i'
  );
  const jsxButtonPattern = new RegExp(
    `<Button[^>]*${escapeForRegExp(token)}[^>]*>`,
    'i'
  );

  return buttonTagPattern.test(content) || jsxButtonPattern.test(content);
}

function contentIncludesToken(content, token) {
  if (needsClassBoundary(token)) {
    const pattern = new RegExp(`(^|[^\\w-])${escapeForRegExp(token)}($|[^\\w-])`);
    return pattern.test(content);
  }

  return content.includes(token);
}

function needsClassBoundary(token) {
  return /^[a-z0-9-]+$/i.test(token);
}

function escapeForRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = {
  checkOutputFileContent,
  collectOutputFiles,
  contentIncludesToken,
  isLikelyPageShell,
};
