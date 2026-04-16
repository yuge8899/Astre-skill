<!-- make-kit-guidelines -->
## Design System Setup — MANDATORY

This workflow pack uses a layered runtime component stack. Before writing any code:

1. Read `guidelines/setup.md` before any component decision.
2. Apply the approved dependency stack in this order:
   - Layer 1: `shadcn/ui` + `lucide-react`
   - Layer 2: `@arco-design/web-react` `Tabs`
   - Layer 3: `@figma/astraui` `CurrencyExchange`
3. Do not skip, modify, or improvise setup steps for the selected layer.
4. Read all other required `.md` files before using a component.
5. Verify that the packages and imports required by the selected layer are present before proceeding.
<!-- /make-kit-guidelines -->

**MUST READ before writing any code:**
Start with `overview.md`
