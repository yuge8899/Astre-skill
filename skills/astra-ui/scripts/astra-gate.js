const CONTRACT_START = '<!-- ASTRA_GATE_CONTRACT_START -->';
const CONTRACT_END = '<!-- ASTRA_GATE_CONTRACT_END -->';
const GATE_CONTRACT_SOURCE =
  'skills/astra-ui/references/gate-contract.md';
const GUIDE_REGENERATE_COMMAND =
  'node skills/astra-ui/scripts/generate-system-guide.js';
const GUIDE_CHECK_COMMAND = 'node skills/astra-ui/scripts/check-gate.js';
const OUTPUT_CHECK_COMMAND =
  'node skills/astra-ui/scripts/check-astra-output.js';

function extractGateContract(markdown, sourceLabel = GATE_CONTRACT_SOURCE) {
  const pattern = new RegExp(
    `${escapeForRegExp(CONTRACT_START)}\\s*\\\`\\\`\\\`json\\s*([\\s\\S]*?)\\s*\\\`\\\`\\\`\\s*${escapeForRegExp(CONTRACT_END)}`
  );
  const match = markdown.match(pattern);

  if (!match) {
    throw new Error(
      `Missing ASTRA gate contract block in ${sourceLabel}. Expected a JSON block between the gate markers.`
    );
  }

  let contract;
  try {
    contract = JSON.parse(match[1]);
  } catch (error) {
    throw new Error(`Invalid ASTRA gate contract JSON: ${error.message}`);
  }

  validateGateContract(contract);
  return contract;
}

function validateGateContract(contract) {
  if (!contract || typeof contract !== 'object' || Array.isArray(contract)) {
    throw new Error('Gate contract must be a JSON object.');
  }

  if (contract.version !== 1) {
    throw new Error('Gate contract version must be 1.');
  }

  if (
    !contract.generatedGuidePath ||
    typeof contract.generatedGuidePath !== 'string'
  ) {
    throw new Error('Gate contract must define generatedGuidePath.');
  }

  const requiredPaths = [
    ['rules', 'primaryNav', 'width'],
    ['rules', 'primaryNav', 'background'],
    ['rules', 'primaryNav', 'itemLayout'],
    ['rules', 'secondaryNav', 'width'],
    ['rules', 'secondaryNav', 'background'],
    ['rules', 'page', 'background'],
    ['rules', 'page', 'contentPadding'],
    ['rules', 'page', 'cardBackground'],
    ['rules', 'buttons', 'radius'],
    ['rules', 'buttons', 'forbidden'],
    ['rules', 'icons', 'library'],
    ['rules', 'icons', 'navStrokeWidth'],
    ['rules', 'navigation', 'dividerPolicy'],
    ['rules', 'outputGate', 'extensions'],
    ['rules', 'outputGate', 'exclude'],
    ['rules', 'outputGate', 'pageShellSignals'],
    ['rules', 'outputGate', 'requiredAny'],
    ['rules', 'outputGate', 'requiredTokens'],
    ['rules', 'outputGate', 'forbiddenTokens'],
    ['rules', 'outputGate', 'buttonForbiddenTokens'],
    ['rules', 'outputGate', 'navForbiddenTokens'],
  ];

  for (const keyPath of requiredPaths) {
    if (readPath(contract, keyPath) === undefined) {
      throw new Error(
        `Gate contract is missing required key: ${keyPath.join('.')}`
      );
    }
  }

  if (!Array.isArray(contract.rules.buttons.forbidden)) {
    throw new Error('rules.buttons.forbidden must be an array.');
  }

  const outputGateArrays = [
    'extensions',
    'exclude',
    'pageShellSignals',
    'requiredTokens',
    'forbiddenTokens',
    'buttonForbiddenTokens',
    'navForbiddenTokens',
  ];

  for (const key of outputGateArrays) {
    if (!Array.isArray(contract.rules.outputGate[key])) {
      throw new Error(`rules.outputGate.${key} must be an array.`);
    }
  }

  if (
    !contract.rules.outputGate.requiredAny ||
    typeof contract.rules.outputGate.requiredAny !== 'object' ||
    Array.isArray(contract.rules.outputGate.requiredAny)
  ) {
    throw new Error('rules.outputGate.requiredAny must be an object.');
  }
}

function renderSystemGuide(contract) {
  const jsonSnapshot = JSON.stringify(contract, null, 2);

  return [
    '# Astra UI System Guide (Generated)',
    '',
    '> GENERATED FILE. DO NOT EDIT.',
    `> Source: \`${GATE_CONTRACT_SOURCE}\`.`,
    '',
    '## Usage',
    '',
    `- Regenerate: \`${GUIDE_REGENERATE_COMMAND}\``,
    `- Verify consistency: \`${GUIDE_CHECK_COMMAND}\``,
    `- Audit generated pages: \`${OUTPUT_CHECK_COMMAND} <file ...>\``,
    '',
    '## Enforced Rules',
    '',
    `- Primary navigation: width \`${contract.rules.primaryNav.width}\`, background \`${contract.rules.primaryNav.background}\`, items \`${contract.rules.primaryNav.itemLayout}\`.`,
    `- Secondary navigation: width \`${contract.rules.secondaryNav.width}\`, background \`${contract.rules.secondaryNav.background}\`.`,
    `- Page shell: background \`${contract.rules.page.background}\`, content padding \`${contract.rules.page.contentPadding}\`, cards \`${contract.rules.page.cardBackground}\`.`,
    `- Buttons: radius \`${contract.rules.buttons.radius}\`, forbidden \`${contract.rules.buttons.forbidden.join('`, `')}\`.`,
    `- Icons: library \`${contract.rules.icons.library}\`, navigation stroke width \`${contract.rules.icons.navStrokeWidth}\`.`,
    `- Navigation dividers: \`${contract.rules.navigation.dividerPolicy}\`.`,
    '',
    '## Contract Snapshot',
    '',
    '```json',
    jsonSnapshot,
    '```',
    '',
  ].join('\n');
}

function compareGuideContent(expected, actual) {
  if (expected === actual) {
    return [];
  }

  const expectedLines = expected.split('\n');
  const actualLines = actual.split('\n');
  const maxLines = Math.max(expectedLines.length, actualLines.length);

  for (let index = 0; index < maxLines; index += 1) {
    if (expectedLines[index] !== actualLines[index]) {
      return [
        `Line ${index + 1} differs.\nExpected: ${stringifyLine(
          expectedLines[index]
        )}\nActual: ${stringifyLine(actualLines[index])}`,
      ];
    }
  }

  return ['Guide content differs, but no single-line diff could be isolated.'];
}

function escapeForRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function readPath(object, keyPath) {
  return keyPath.reduce((current, key) => {
    if (current && Object.prototype.hasOwnProperty.call(current, key)) {
      return current[key];
    }

    return undefined;
  }, object);
}

function stringifyLine(value) {
  return value === undefined ? '<missing>' : JSON.stringify(value);
}

module.exports = {
  compareGuideContent,
  CONTRACT_END,
  CONTRACT_START,
  extractGateContract,
  GATE_CONTRACT_SOURCE,
  GUIDE_CHECK_COMMAND,
  GUIDE_REGENERATE_COMMAND,
  OUTPUT_CHECK_COMMAND,
  renderSystemGuide,
  validateGateContract,
};
