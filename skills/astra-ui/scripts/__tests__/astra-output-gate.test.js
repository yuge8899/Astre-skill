const test = require('node:test');
const assert = require('node:assert/strict');

const {
  checkOutputFileContent,
  collectOutputFiles,
  isLikelyPageShell,
} = require('../astra-output-gate');

const contract = {
  version: 1,
  generatedGuidePath: 'SYSTEM_GUIDE.md',
  rules: {
    page: {
      background: 'bg-slate-50',
      contentPadding: 'p-5',
      cardBackground: 'bg-white',
    },
    buttons: {
      radius: 'rounded-md',
      forbidden: ['rounded-full'],
    },
    icons: {
      library: 'lucide-react',
      navStrokeWidth: 2.5,
    },
    outputGate: {
      extensions: ['.tsx', '.jsx', '.html'],
      exclude: ['skills/', 'guidelines/', 'workflow/ASTRA_ADMIN_DATALIST_TRACE.md'],
      pageShellSignals: ['h-screen', '<main', 'SidebarNavigation', 'SecondaryNav'],
      requiredAny: {
        primaryNav: ['bg-slate-900', 'SidebarNavigation', 'PrimaryNav'],
        secondaryNav: ['bg-white', 'SecondaryNav'],
        iconLibrary: ['lucide-react', 'data-lucide', 'lucide.createIcons'],
      },
      requiredTokens: ['bg-slate-50', 'p-5', 'bg-white'],
      forbiddenTokens: [
        'strokeWidth={1.5}',
        'stroke-[1.5]',
        'stroke-width="1.5"',
      ],
      buttonForbiddenTokens: ['rounded-full'],
      navForbiddenTokens: ['border-r'],
    },
  },
};

const validHtml = `
<body class="flex h-screen bg-slate-50">
  <nav class="w-[110px] bg-slate-900"></nav>
  <nav class="w-[130px] bg-white"></nav>
  <main class="flex-1 bg-slate-50">
    <div class="p-5">
      <section class="bg-white rounded-xl">
        <button class="rounded-md">Create</button>
      </section>
    </div>
  </main>
  <script src="https://unpkg.com/lucide@latest"></script>
  <i data-lucide="home" stroke-width="2.5"></i>
  <script>lucide.createIcons()</script>
</body>
`;

const invalidTsx = `
import { Home } from 'lucide-react'

export function BrokenPage() {
  return (
    <div className="flex h-screen">
      <SidebarNavigation>
        <SidebarButton icon={<Home className="size-full" strokeWidth={1.5} />} />
      </SidebarNavigation>
      <SecondaryNav />
      <main className="flex-1 bg-brand-tertiary p-2xl">
        <button className="rounded-full">Bad</button>
      </main>
    </div>
  )
}
`;

test('isLikelyPageShell detects full-page outputs', () => {
  assert.equal(isLikelyPageShell(validHtml, contract), true);
  assert.equal(isLikelyPageShell('<div class="rounded-md"></div>', contract), false);
});

test('checkOutputFileContent passes compliant output files', () => {
  const issues = checkOutputFileContent(contract, 'workflow/demos/valid.html', validHtml);

  assert.deepEqual(issues, []);
});

test('checkOutputFileContent flags drift from Astra rules', () => {
  const issues = checkOutputFileContent(contract, 'order-list-page.tsx', invalidTsx);

  assert.ok(issues.some((issue) => issue.includes('missing required token `bg-slate-50`')));
  assert.ok(issues.some((issue) => issue.includes('missing required token `p-5`')));
  assert.ok(
    issues.some((issue) => issue.includes('forbidden button token `rounded-full`'))
  );
  assert.ok(issues.some((issue) => issue.includes('forbidden token `strokeWidth={1.5}`')));
});

test('checkOutputFileContent does not confuse border-red with border-r', () => {
  const issues = checkOutputFileContent(
    contract,
    'workflow/demos/product-tags-demo.html',
    '<main class="h-screen bg-slate-50 p-5"><nav class="bg-slate-900"></nav><nav class="bg-white"></nav><button class="border border-red-200 rounded-md">Delete</button><script>lucide.createIcons()</script><i data-lucide="home"></i></main>'
  );

  assert.equal(
    issues.some((issue) => issue.includes('forbidden navigation token `border-r`')),
    false
  );
});

test('collectOutputFiles filters by extension and excluded paths', () => {
  const files = [
    'skills/astra-ui/SKILL.md',
    'guidelines/components/table.md',
    'workflow/demos/product-tags-demo.html',
    'order-list-page.tsx',
    'SYSTEM_GUIDE.md',
  ];

  assert.deepEqual(collectOutputFiles(files, contract), [
    'workflow/demos/product-tags-demo.html',
    'order-list-page.tsx',
  ]);
});
