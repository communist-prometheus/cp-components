# @communist-prometheus/cp-components

Lit-based UI component library with reactive signals and design tokens for Communist Prometheus projects.

## Installation

```bash
npm install @communist-prometheus/cp-components
```

## Usage

### In Astro

```astro
---
import '@communist-prometheus/cp-components';
---

<cp-button variant="primary">Click me</cp-button>
<cp-card hoverable elevated>
  <h2>Card Title</h2>
  <p>Card content</p>
</cp-card>
```

### With client-side hydration

```astro
<cp-button client:load variant="secondary">Interactive Button</cp-button>
```

## Components

### Button (`<cp-button>`)

**Properties:**
- `variant`: `'primary' | 'secondary' | 'ghost'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `disabled`: `boolean` (default: `false`)
- `type`: `'button' | 'submit' | 'reset'` (default: `'button'`)

**Events:**
- `cp-click`: Fired when button is clicked (not fired when disabled)

**Example:**
```html
<cp-button variant="primary" size="lg">
  Large Primary Button
</cp-button>
```

### Card (`<cp-card>`)

**Properties:**
- `hoverable`: `boolean` (default: `false`) - Makes card interactive with hover effects
- `elevated`: `boolean` (default: `false`) - Adds shadow elevation

**Events:**
- `cp-card-click`: Fired when hoverable card is clicked

**Example:**
```html
<cp-card hoverable elevated>
  <h3>Interactive Card</h3>
  <p>This card responds to clicks and has elevation</p>
</cp-card>
```

## Design Tokens

Import design tokens separately:

```typescript
import { colors, spacing, typography } from '@communist-prometheus/cp-components/tokens';

console.log(colors.light.accent); // hsl(250, 84%, 54%)
console.log(spacing.md); // 1.5rem
```

## Theming

Components use CSS custom properties that can be overridden:

```css
:root {
  --cp-color-accent: hsl(200, 100%, 50%);
  --cp-spacing-md: 2rem;
  --cp-radius-sm: 0.25rem;
}

:root[data-theme="dark"] {
  --cp-color-background: hsl(0, 0%, 10%);
  --cp-color-text-primary: hsl(0, 0%, 95%);
}
```

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test

# Watch mode tests
npm run test:watch

# Type check
npm run lint
```

## Publishing

The package is automatically published to GitHub Packages when a version tag `v*.*.*` is pushed.

### Steps to create a release:

1. **Update version** in `package.json`:
   ```json
   {
     "version": "0.1.7"
   }
   ```

2. **Commit changes**:
   ```bash
   git add package.json
   git commit -m "chore: bump version to 0.1.7"
   ```

3. **Create and push tag**:
   ```bash
   git tag v0.1.7
   git push origin main --tags
   ```

The GitHub Action will:
- Run tests on Node.js 24.7
- Build the package
- Publish to GitHub Packages

Check publication status:
- [Actions tab](https://github.com/communist-prometheus/cp-components/actions)
- [GitHub Packages](https://github.com/communist-prometheus/cp-components/pkgs/npm/cp-components)

## License

MIT
