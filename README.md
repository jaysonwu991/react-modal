# @jayson991/react-ui

A modern, responsive, and accessible React UI component library with TypeScript and Sass.

[![npm version](https://img.shields.io/npm/v/@jayson991/react-ui.svg)](https://www.npmjs.com/package/@jayson991/react-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎨 **Multiple Components** - Modal, Button, Input, Icon, Calendar, and more
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ♿️ **Accessible** - WCAG compliant with ARIA and keyboard navigation
- 🎨 **Sass Styling** - Clean, maintainable CSS architecture
- 📦 **Tiny Bundle** - Tree-shakeable components
- 🔧 **TypeScript** - Full type definitions included
- 🎯 **Icon Fonts** - Support for Iconfont.cn and Icomoon.io
- 🎨 **Customizable** - Custom styles and themes

## Installation

```bash
npm install @jayson991/react-ui
# or
yarn add @jayson991/react-ui
# or
pnpm add @jayson991/react-ui
```

## Quick Start

```tsx
import React, { useState } from 'react';
import { Modal, Button, Input, Icon, Calendar } from '@jayson991/react-ui';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div>
      <Input
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />

      <Calendar
        value={selectedDate}
        onChange={(date) => setSelectedDate(date as Date)}
        mode="single"
      />

      <Button onClick={() => setShowModal(true)}>
        <Icon name="user" size={16} />
        Open Modal
      </Button>

      <Modal
        title="Welcome"
        showModal={showModal}
        onHideModal={() => setShowModal(false)}
      >
        <p>Hello, {name || 'Guest'}!</p>
        {selectedDate && (
          <p>Selected date: {selectedDate.toLocaleDateString()}</p>
        )}
      </Modal>
    </div>
  );
}
```

> **Note**: Styles are automatically imported. No separate CSS import needed!

## Components

### Modal

A flexible modal dialog component.

```tsx
import { Modal } from '@jayson991/react-ui';

<Modal
  title="My Modal"
  showModal={isOpen}
  onHideModal={() => setIsOpen(false)}
  size="medium"
>
  <p>Modal content</p>
</Modal>
```

**Props:**
- `showModal` (required): Controls visibility
- `onHideModal` (required): Close callback
- `title`: Header title
- `size`: 'small' | 'medium' | 'large' | 'fullscreen'
- `centered`: Vertically center the modal
- `animated`: Enable fade animations
- And [more...](#modal-api)

### Button

A versatile button component with multiple variants.

```tsx
import { Button } from '@jayson991/react-ui';

<Button variant="primary" size="medium">
  Click Me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' | 'ghost'
- `size`: 'small' | 'medium' | 'large'
- `fullWidth`: Stretch to full width
- `loading`: Show loading spinner
- All standard button HTML attributes

### Input

A styled input component with label and error support.

```tsx
import { Input } from '@jayson991/react-ui';

<Input
  label="Email"
  type="email"
  placeholder="your@email.com"
  error="Invalid email"
/>
```

**Props:**
- `label`: Input label
- `error`: Error message
- `helperText`: Helper text below input
- `inputSize`: 'small' | 'medium' | 'large'
- `fullWidth`: Stretch to full width
- `prefix`: Icon or element before input
- `suffix`: Icon or element after input
- All standard input HTML attributes

### Icon

An icon component for rendering icon fonts from Iconfont.cn or Icomoon.io.

```tsx
import { Icon } from '@jayson991/react-ui';

// Font mode (default)
<Icon name="home" size={24} color="#3b82f6" />

// SVG mode
<Icon type="svg" name="user" size={32} color="red" />
```

**Props:**
- `name` (required): Icon name without 'icon-' prefix
- `type`: 'font' | 'svg' (default: 'font')
- `size`: Icon size in pixels
- `color`: Icon color (hex, rgb, or named color)
- `onClick`: Click handler
- `ariaLabel`: Accessibility label

**Setup:**
```tsx
// 1. Import your icon font CSS and JS files
import './iconfont.css';  // For font mode
import './iconfont.js';   // For SVG mode

// 2. Use the Icon component
<Icon name="heart" size={24} color="#ef4444" />
```

### Calendar

A fully-featured calendar component with multiple selection modes.

```tsx
import { Calendar } from '@jayson991/react-ui';

<Calendar
  value={selectedDate}
  onChange={(date) => setSelectedDate(date)}
  mode="single"
  showTodayButton
  showWeekNumbers
/>
```

**Props:**
- `value`: Selected date(s) - Date | Date[] | DateRange | null
- `onChange`: Callback when date is selected
- `mode`: 'single' | 'multiple' | 'range' (default: 'single')
- `minDate`: Minimum selectable date
- `maxDate`: Maximum selectable date
- `disabledDates`: Array of disabled dates or function
- `highlightedDates`: Array of highlighted dates or function
- `firstDayOfWeek`: 0-6 (0 = Sunday, 1 = Monday)
- `showWeekNumbers`: Display week numbers
- `showTodayButton`: Show button to jump to today
- `showClearButton`: Show button to clear selection
- `keyboardNavigation`: Enable keyboard controls
- `view`: 'month' | 'year'
- `locale`: Locale for date formatting (default: 'en-US')

**Selection Modes:**
```tsx
// Single date selection
<Calendar mode="single" value={date} onChange={setDate} />

// Multiple dates selection
<Calendar mode="multiple" value={dates} onChange={setDates} />

// Date range selection
<Calendar mode="range" value={{ start, end }} onChange={setRange} />
```

## Bundle Size

| File | Size | Gzipped |
|------|------|---------|
| JS (ESM) | 9.92 kB | 3.86 kB |
| JS (CJS) | 9.72 kB | 3.85 kB |
| CSS | 9.75 kB | 2.27 kB |
| **Total** | **19.67 kB** | **6.13 kB** |

## Responsive Design

All components are fully responsive with optimized layouts for Desktop, Tablet, and Mobile:

| Device | Screen Width | Optimizations |
|--------|-------------|---------------|
| **Mobile** | ≤ 480px | • 44px minimum touch targets<br>• Optimized spacing and padding<br>• 16px font size to prevent iOS zoom<br>• Adjusted prefix/suffix positioning |
| **Tablet** | 481-768px | • Balanced sizing for medium screens<br>• Optimized padding and spacing<br>• Adjusted component dimensions |
| **Desktop** | ≥ 1024px | • Full-featured experience<br>• Optimal spacing and typography<br>• Enhanced hover states |

### Additional Optimizations

- **Touch Devices**: Larger touch targets, removed hover effects, scale feedback on tap
- **High Contrast Mode**: Enhanced borders and contrast for accessibility
- **Reduced Motion**: Respects user preferences by disabling animations
- **iOS Optimization**: Prevents automatic zoom on input focus

## Tree-Shaking

Import only what you need:

```tsx
// Import specific components
import { Button, Calendar } from '@jayson991/react-ui';

// Or import from subpaths
import Button from '@jayson991/react-ui/Button';
import Calendar from '@jayson991/react-ui/Calendar';
```

## Customization

### CSS Classes

All components use BEM naming:

```scss
.btn { }                    // Button
.btn--primary { }           // Button variant
.input { }                  // Input
.input__label { }           // Input label
.modal-wrapper { }          // Modal backdrop
.modal-content { }          // Modal box
```

### Custom Styles

Override with your own CSS or use inline styles:

```tsx
<Button className="my-custom-button">
  Custom Button
</Button>

<Input
  style={{ borderColor: 'blue' }}
  label="Custom Input"
/>
```

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Type checking
pnpm type-check

# Linting
pnpm lint

# Build library
pnpm build

# Run Storybook
pnpm storybook
```

## Browser Support

Modern browsers including Chrome, Firefox, Safari, Edge, and mobile browsers.

## Tech Stack

React 19, TypeScript 5.9, Sass 1.96, Vite 7, Vitest 4, Storybook 10, Oxlint

## License

MIT © [jayson991](https://github.com/jaysonwu991)

## Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.
