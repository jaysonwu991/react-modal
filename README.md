# @jayson991/react-modal

A modern, responsive, and accessible React modal component with TypeScript and Sass.

[![npm version](https://img.shields.io/npm/v/@jayson991/react-modal.svg)](https://www.npmjs.com/package/@jayson991/react-modal)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ♿️ **Accessible** - WCAG compliant with ARIA and keyboard navigation
- 🎨 **Sass Styling** - Clean, maintainable CSS architecture
- 📐 **Size Variants** - Small, medium, large, and fullscreen
- 🎯 **Portal Rendering** - Better z-index control
- 📦 **Tiny Bundle** - 8.59 kB JS (3.45 kB gzipped) + 5.23 kB CSS (1.32 kB gzipped)
- 🔧 **TypeScript** - Full type definitions included
- 🎨 **Customizable** - Custom styles, headers, footers, and callbacks

## Installation

```bash
npm install @jayson991/react-modal
# or
yarn add @jayson991/react-modal
# or
pnpm add @jayson991/react-modal
```

## Quick Start

```tsx
import React, { useState } from 'react';
import Modal from '@jayson991/react-modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      <Modal
        title="My Modal"
        showModal={showModal}
        onHideModal={() => setShowModal(false)}
      >
        <p>This is the modal content!</p>
      </Modal>
    </>
  );
}
```

> **Note**: Styles are automatically imported. No separate CSS import needed!

## Responsive Design

| Device | Screen Width | Behavior |
|--------|-------------|----------|
| Mobile | ≤ 480px | 95% width, 44px touch targets |
| Tablet | 481-768px | 85-90% width |
| Desktop | ≥ 1024px | Fixed widths (400/680/900px) |

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `showModal` | `boolean` | required | Controls modal visibility |
| `onHideModal` | `() => void` | required | Callback when modal should close |
| `title` | `string` | `undefined` | Modal header title |
| `children` | `ReactNode` | `undefined` | Modal body content |
| `size` | `'small' \| 'medium' \| 'large' \| 'fullscreen'` | `'medium'` | Modal size variant |
| `closeOnBackdropClick` | `boolean` | `true` | Close modal on backdrop click |
| `closeOnEscape` | `boolean` | `true` | Close modal on Escape key |
| `showCloseButton` | `boolean` | `true` | Show close button in header |
| `showHeader` | `boolean` | `true` | Show modal header |
| `centered` | `boolean` | `false` | Center modal vertically |
| `scrollable` | `boolean` | `false` | Allow page scrolling with modal open |
| `animated` | `boolean` | `true` | Enable fade animations |
| `animationDuration` | `number` | `300` | Animation duration in milliseconds |
| `usePortal` | `boolean` | `true` | Render using React Portal |
| `portalContainer` | `HTMLElement` | `document.body` | Portal container element |
| `zIndex` | `number` | `1000` | Modal z-index |
| `className` | `string` | `undefined` | Custom CSS class |
| `contentStyle` | `CSSProperties` | `undefined` | Custom content styles |
| `backdropStyle` | `CSSProperties` | `undefined` | Custom backdrop styles |
| `header` | `ReactNode` | `undefined` | Custom header content |
| `footer` | `ReactNode` | `undefined` | Custom footer content |
| `onOpen` | `() => void` | `undefined` | Callback when modal opens |
| `onClose` | `() => void` | `undefined` | Callback when modal closes |
| `onAnimationEnd` | `() => void` | `undefined` | Callback after animation completes |

### Types

```typescript
export type ModalSize = 'small' | 'medium' | 'large' | 'fullscreen';

export interface ModalProps {
  showModal: boolean;
  onHideModal: () => void;
  title?: string;
  children?: ReactNode;
  size?: ModalSize;
  // ... see full props above
}
```

## Examples

### Size Variants

```tsx
// Small modal (400px)
<Modal size="small" showModal={show} onHideModal={hide}>
  <p>Compact modal</p>
</Modal>

// Medium modal (680px - default)
<Modal size="medium" showModal={show} onHideModal={hide}>
  <p>Standard modal</p>
</Modal>

// Large modal (900px)
<Modal size="large" showModal={show} onHideModal={hide}>
  <p>Wide modal</p>
</Modal>

// Fullscreen modal
<Modal size="fullscreen" showModal={show} onHideModal={hide}>
  <p>Takes entire viewport</p>
</Modal>
```

### Custom Header and Footer

```tsx
<Modal
  showModal={show}
  onHideModal={hide}
  header={
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <span>🎉</span>
      <h2>Custom Header</h2>
    </div>
  }
  footer={
    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
      <button onClick={hide}>Cancel</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  }
>
  <p>Modal content here</p>
</Modal>
```

### Centered Modal

```tsx
<Modal
  title="Centered Modal"
  centered
  showModal={show}
  onHideModal={hide}
>
  <p>This modal is vertically centered</p>
</Modal>
```

### Custom Animations

```tsx
<Modal
  title="Animated Modal"
  animated
  animationDuration={500}
  showModal={show}
  onHideModal={hide}
  onOpen={() => console.log('Modal opened')}
  onClose={() => console.log('Modal closed')}
  onAnimationEnd={() => console.log('Animation complete')}
>
  <p>Smooth animations!</p>
</Modal>
```

### Custom Styling

```tsx
<Modal
  title="Custom Styled"
  showModal={show}
  onHideModal={hide}
  contentStyle={{
    backgroundColor: '#f0f9ff',
    border: '2px solid #0ea5e9',
    borderRadius: '12px',
  }}
  backdropStyle={{
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  }}
>
  <p>Custom colors and styles</p>
</Modal>
```

### Disable Backdrop Close

```tsx
<Modal
  title="No Backdrop Close"
  closeOnBackdropClick={false}
  closeOnEscape={false}
  showModal={show}
  onHideModal={hide}
>
  <p>Can only be closed with close button</p>
</Modal>
```

### Form Modal

```tsx
<Modal
  title="User Registration"
  showModal={show}
  onHideModal={hide}
  footer={
    <div>
      <button onClick={hide}>Cancel</button>
      <button onClick={handleSubmit}>Register</button>
    </div>
  }
>
  <form onSubmit={handleSubmit}>
    <div>
      <label>Name:</label>
      <input type="text" name="name" />
    </div>
    <div>
      <label>Email:</label>
      <input type="email" name="email" />
    </div>
  </form>
</Modal>
```

## Accessibility

This component follows accessibility best practices:

- **ARIA Attributes**: Proper `role="dialog"`, `aria-modal`, and `aria-labelledby`
- **Keyboard Navigation**:
  - `Escape` key to close (configurable)
  - Tab key for focus management
  - Focus trap within modal
- **Focus Management**: Auto-focuses first interactive element
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **High Contrast Mode**: Enhanced borders and visibility
- **Reduced Motion**: Respects `prefers-reduced-motion`

## Customization

### CSS Classes

The component uses BEM naming conventions. You can override these classes:

```scss
.modal-wrapper { }           // Backdrop container
.modal-wrapper--centered { } // Centered variant
.modal-dialog { }            // Dialog wrapper
.modal-content { }           // Modal box
.modal-content--small { }    // Size variants
.modal-header { }            // Header section
.modal-title { }             // Title text
.modal-close-button { }      // Close button
.modal-body { }              // Body content
.modal-footer { }            // Footer section
```

### Sass Variables

If you're using Sass, you can customize the component by overriding variables:

```scss
// Override default values before importing
$modal-size-small: 350px;
$modal-size-medium: 600px;
$modal-size-large: 1000px;
$backdrop-color: rgba(0, 0, 0, 0.8);
$modal-bg: #ffffff;

@import '@jayson991/react-modal/styles';
```

## Browser Support

Modern browsers including Chrome, Firefox, Safari, Edge, and mobile browsers.

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run tests in watch mode
pnpm test:watch

# Type checking
pnpm type-check

# Linting
pnpm lint

# Build library
pnpm build

# Run Storybook
pnpm storybook

# Build Storybook
pnpm build-storybook
```

## Bundle Size

| File | Size | Gzipped |
|------|------|---------|
| JS | 8.59 kB | 3.45 kB |
| CSS | 5.23 kB | 1.32 kB |
| **Total** | **13.82 kB** | **4.77 kB** |

## Tech Stack

React 19, TypeScript 5.9, Sass 1.96, Vite 7, Vitest 4, Storybook 10, Oxlint

## License

MIT © [jayson991](https://github.com/jaysonwu991)

## Contributing

Contributions welcome! Check the [issues page](https://github.com/jaysonwu991/react-modal/issues).
