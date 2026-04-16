const test = require('node:test');
const assert = require('node:assert/strict');

const {
  compareGuideContent,
  extractGateContract,
  GATE_CONTRACT_SOURCE,
  renderSystemGuide,
} = require('../astra-gate');

const skillMarkdown = `# Astra UI

<!-- ASTRA_GATE_CONTRACT_START -->
\`\`\`json
{
  "version": 1,
  "generatedGuidePath": "SYSTEM_GUIDE.md",
  "rules": {
    "primaryNav": {
      "width": "110px",
      "background": "bg-slate-900",
      "itemLayout": "horizontal"
    },
    "secondaryNav": {
      "width": "130px",
      "background": "bg-white"
    },
    "page": {
      "background": "bg-slate-50",
      "contentPadding": "p-5",
      "cardBackground": "bg-white"
    },
    "buttons": {
      "radius": "rounded-md",
      "forbidden": [
        "rounded-full"
      ]
    },
    "icons": {
      "library": "lucide-react",
      "navStrokeWidth": 2.5
    },
    "navigation": {
      "dividerPolicy": "no-border"
    },
    "outputGate": {
      "extensions": [
        ".tsx",
        ".jsx",
        ".html"
      ],
      "exclude": [
        "skills/",
        "guidelines/",
        "workflow/ASTRA_ADMIN_DATALIST_TRACE.md"
      ],
      "pageShellSignals": [
        "h-screen",
        "<main",
        "SidebarNavigation",
        "SecondaryNav"
      ],
      "requiredAny": {
        "primaryNav": [
          "bg-slate-900",
          "SidebarNavigation",
          "PrimaryNav"
        ],
        "secondaryNav": [
          "bg-white",
          "SecondaryNav"
        ],
        "iconLibrary": [
          "lucide-react",
          "data-lucide",
          "lucide.createIcons"
        ]
      },
      "requiredTokens": [
        "bg-slate-50",
        "p-5",
        "bg-white"
      ],
      "forbiddenTokens": [
        "strokeWidth={1.5}",
        "stroke-[1.5]",
        "stroke-width=\\"1.5\\""
      ],
      "buttonForbiddenTokens": [
        "rounded-full"
      ],
      "navForbiddenTokens": [
        "border-r"
      ]
    }
  }
}
\`\`\`
<!-- ASTRA_GATE_CONTRACT_END -->
`;

test('extractGateContract parses the embedded JSON contract', () => {
  const contract = extractGateContract(skillMarkdown);

  assert.equal(contract.version, 1);
  assert.equal(contract.generatedGuidePath, 'SYSTEM_GUIDE.md');
  assert.equal(contract.rules.primaryNav.background, 'bg-slate-900');
  assert.equal(contract.rules.icons.navStrokeWidth, 2.5);
});

test('renderSystemGuide produces a deterministic generated guide', () => {
  const contract = extractGateContract(skillMarkdown);
  const guide = renderSystemGuide(contract);

  assert.match(guide, /GENERATED FILE\. DO NOT EDIT\./);
  assert.match(guide, /Primary navigation: width `110px`, background `bg-slate-900`, items `horizontal`\./);
  assert.match(guide, /Buttons: radius `rounded-md`, forbidden `rounded-full`\./);
  assert.match(guide, /Regenerate: `node skills\/astra-ui\/scripts\/generate-system-guide\.js`/);
  assert.match(
    guide,
    new RegExp(`Source: \`${GATE_CONTRACT_SOURCE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\``)
  );
});

test('compareGuideContent returns no diffs for matching guides', () => {
  const contract = extractGateContract(skillMarkdown);
  const guide = renderSystemGuide(contract);

  assert.deepEqual(compareGuideContent(guide, guide), []);
});

test('compareGuideContent reports the first mismatch line', () => {
  const contract = extractGateContract(skillMarkdown);
  const guide = renderSystemGuide(contract);
  const drifted = guide.replace('bg-white', 'bg-slate-100');

  const diffs = compareGuideContent(guide, drifted);

  assert.equal(diffs.length, 1);
  assert.match(diffs[0], /Line \d+ differs/);
  assert.match(diffs[0], /bg-white/);
  assert.match(diffs[0], /bg-slate-100/);
});
