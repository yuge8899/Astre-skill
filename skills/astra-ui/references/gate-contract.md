# Gate Contract

This file is the sole machine-readable rule source for the Astra skill, used to generate `SYSTEM_GUIDE.md` and enforce gate checks.

After modifying, run:

```bash
node skills/astra-ui/scripts/generate-system-guide.js
node skills/astra-ui/scripts/check-gate.js
```

<!-- ASTRA_GATE_CONTRACT_START -->
```json
{
  "version": 1,
  "generatedGuidePath": "SYSTEM_GUIDE.md",
  "rules": {
    "primaryNav": {
      "width": "110px",
      "background": "bg-slate-900",
      "text": [
        "text-slate-300",
        "text-white"
      ],
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
        "stroke-width=\"1.5\""
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
```
<!-- ASTRA_GATE_CONTRACT_END -->
