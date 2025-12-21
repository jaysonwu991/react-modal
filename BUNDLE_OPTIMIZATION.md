# Bundle Size Optimization Guide

This library is optimized for minimal bundle size through tree-shaking and code splitting.

## 📦 Bundle Sizes (After Optimization)

- **Main JS**: 18 KB (6.5 KB gzipped) - Down from 29 KB (~38% reduction)
- **CSS**: 37 KB (15.5 KB gzipped) - Unchanged in main bundle, but now tree-shakeable
- **Icon fonts**: 18 KB (7.2 KB gzipped) - Now lazy-loadable (not included by default)

### Size Comparison

| Metric | Before | After | Savings |
|--------|---------|-------|---------|
| Main JS | 29 KB | 18 KB | **38%** |
| Icon Assets | Always loaded | Lazy-loadable | **Optional** |
| CSS | Always bundled | Tree-shakeable | **Up to 80%** |

## 🎯 Import Only What You Need

### Option 1: Full Bundle (Easy)
```typescript
// Import everything (~55 KB total)
import { Button, Modal, Input, Icon, Calendar } from '@jayson991/react-ui';
import '@jayson991/react-ui/styles';
```

### Option 2: Tree-Shaken (Recommended)
```typescript
// Import only specific components (~10-20 KB depending on components)
import { Button } from '@jayson991/react-ui';
import '@jayson991/react-ui/Button/styles';

// Or import from subpaths
import Button from '@jayson991/react-ui/Button';
import '@jayson991/react-ui/Button/styles';
```

### Option 3: Per-Component Imports (Maximum Optimization)
```typescript
// Absolute minimal bundle - only what you use
import { Button } from '@jayson991/react-ui/Button';
import { loadButtonStyles } from '@jayson991/react-ui/Button/styles';

loadButtonStyles(); // Manually load styles when needed
```

## 🎨 Icon System Optimization

Icons are **no longer bundled by default**. Load them only when needed:

### Font Icons (Recommended for simple usage)
```typescript
import { Icon, loadIconFont } from '@jayson991/react-ui';

// Load icon fonts once in your app
loadIconFont();

// Use icons anywhere
<Icon name="home" size={24} />
```

### SVG Icons (For advanced usage)
```typescript
import { Icon, loadIconSvg } from '@jayson991/react-ui';

// Load SVG symbols once
loadIconSvg();

// Use SVG mode
<Icon type="svg" name="user" size={20} />
```

### Preload All Icons
```typescript
import { loadAllIcons } from '@jayson991/react-ui';

// Load both font and SVG icons
loadAllIcons();
```

## 📊 Component Size Reference

| Component | JS Size | CSS Size | Total |
|-----------|---------|----------|-------|
| Button | ~2 KB | ~3 KB | ~5 KB |
| Input | ~3 KB | ~4 KB | ~7 KB |
| Icon | ~4 KB | ~2 KB | ~6 KB |
| Modal | ~5 KB | ~6 KB | ~11 KB |
| Calendar | ~8 KB | ~10 KB | ~18 KB |

## 🚀 Best Practices

### 1. Use Tree-Shakeable Imports
✅ **Good** - Tree-shakes unused components
```typescript
import { Button, Input } from '@jayson991/react-ui';
import '@jayson991/react-ui/Button/styles';
import '@jayson991/react-ui/Input/styles';
```

❌ **Avoid** - Bundles everything
```typescript
import * as ReactUI from '@jayson991/react-ui';
import '@jayson991/react-ui/styles';
```

### 2. Lazy-Load Heavy Components
```typescript
import { lazy, Suspense } from 'react';

// Calendar is the heaviest component - lazy load it
const Calendar = lazy(() => import('@jayson991/react-ui/Calendar'));

function MyApp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Calendar />
    </Suspense>
  );
}
```

### 3. Load Icons Once Globally
```typescript
// In your app entry point (main.tsx or App.tsx)
import { loadIconFont } from '@jayson991/react-ui';

loadIconFont(); // Load once, use everywhere

// Then in components, just import Icon
import { Icon } from '@jayson991/react-ui';
```

### 4. CSS Modules (If supported by your bundler)
```typescript
// Import styles as modules to enable CSS tree-shaking
import '@jayson991/react-ui/Button/styles';
```

## 🔍 Bundle Analysis

To analyze your bundle and verify tree-shaking:

```bash
# For Vite
npm install -D rollup-plugin-visualizer
# Add to vite.config.ts

# For Webpack
npm install -D webpack-bundle-analyzer
```

## 📝 Migration Guide

### From Previous Version
```diff
- import './components/Modal/Modal.scss';
- import './components/Button/Button.scss';
- import './assets/icons/iconfont.css';
- import './assets/icons/iconfont.js';
+ import '@jayson991/react-ui/Modal/styles';
+ import '@jayson991/react-ui/Button/styles';
+ import { loadIconFont } from '@jayson991/react-ui/icons/loader';
+ loadIconFont();
```

## ⚡ Performance Tips

1. **Code Splitting**: Use dynamic imports for routes
2. **Lazy Load Icons**: Only load icon fonts when Icon component is used
3. **CSS Purging**: Use PurgeCSS or similar to remove unused styles
4. **Component-Level Imports**: Import from subpaths for better tree-shaking
5. **Production Build**: Always minify and compress in production

## 🎁 What's Included in sideEffects

This package properly declares side effects for optimal tree-shaking:

```json
{
  "sideEffects": [
    "*.scss",
    "*.css",
    "./src/assets/icons/iconfont.js",
    "./lib/**/*.css"
  ]
}
```

This ensures bundlers like Webpack and Rollup can safely remove unused code.

## 📚 Additional Resources

- [Webpack Tree Shaking Guide](https://webpack.js.org/guides/tree-shaking/)
- [Vite Code Splitting](https://vitejs.dev/guide/features.html#code-splitting)
- [Reducing Bundle Size](https://web.dev/reduce-javascript-payloads-with-code-splitting/)
