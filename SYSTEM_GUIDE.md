# Astra UI System Guide (Generated)

> GENERATED FILE. DO NOT EDIT.
> Source: `skills/astra-ui/references/gate-contract.md`.

## Usage

- Regenerate: `node skills/astra-ui/scripts/generate-system-guide.js`
- Verify consistency: `node skills/astra-ui/scripts/check-gate.js`
- Audit generated pages: `node skills/astra-ui/scripts/check-astra-output.js <file ...>`

## Enforced Rules

- Primary navigation: width `110px`, background `bg-slate-900`, items `horizontal`.
- Secondary navigation: width `130px`, background `bg-white`.
- Page shell: background `bg-slate-50`, content padding `p-5`, cards `bg-white`.
- Buttons: radius `rounded-md`, forbidden `rounded-full`.
- Icons: library `lucide-react`, navigation stroke width `2.5`.
- Navigation dividers: `no-border`.

## Contract Snapshot

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
