# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-12-14

### Breaking Changes

- **Inline Styles Removed**: All inline styles replaced with CSS classes
- **z-index Default Changed**: Updated from 1050 to 1000
- **Removed Files**: `ModalStyle.ts` no longer exists

**Note**: Styles are now automatically imported! You no longer need to manually import the CSS file.

### Added

- 📱 **Full Responsive Design**
  - Mobile breakpoint (≤480px) with 95% width and optimized spacing
  - Tablet breakpoint (481-768px) with 85-90% width
  - Desktop breakpoint (≥1024px) with fixed widths
  - Touch-optimized buttons (44px) on mobile devices

- 🎨 **Sass Architecture**
  - Professional Sass with variables and mixins
  - BEM naming conventions
  - Customizable Sass variables
  - Responsive mixins for easy breakpoint management

- ♿️ **Enhanced Accessibility**
  - High contrast mode support
  - Reduced motion support (`prefers-reduced-motion`)
  - Print styles for better printing
  - Custom scrollbar styling
  - Focus indicators

- 🎯 **New Props**
  - `size`: Size variants (small, medium, large, fullscreen)
  - `closeOnBackdropClick`: Control backdrop click behavior
  - `closeOnEscape`: Control escape key behavior
  - `showCloseButton`: Toggle close button visibility
  - `showHeader`: Toggle header section
  - `centered`: Vertical centering
  - `scrollable`: Allow page scrolling
  - `animated`: Enable/disable animations
  - `animationDuration`: Configurable animation speed
  - `usePortal`: Portal rendering control
  - `portalContainer`: Custom portal container
  - `zIndex`: Custom z-index
  - `className`: Custom CSS class
  - `contentStyle`: Custom content styles
  - `backdropStyle`: Custom backdrop styles
  - `header`: Custom header content
  - `footer`: Custom footer content
  - `onOpen`: Open callback
  - `onClose`: Close callback
  - `onAnimationEnd`: Animation complete callback

- 📚 **Documentation**
  - Comprehensive README with examples
  - 20 Storybook stories showcasing all features
  - TypeScript definitions for all props
  - Migration guide in changelog

### Changed

- **Bundle Size**
  - JavaScript: 10.37 kB → 8.59 kB (17% reduction)
  - Added CSS: 5.23 kB (1.32 kB gzipped)
  - Total gzipped: 4.77 kB

- **Build System**
  - Migrated to Vite 7.2.7
  - Added Sass 1.96.0
  - Updated to React 19.2.3
  - Updated to TypeScript 5.9.3

- **Testing**
  - Migrated from Jest to Vitest 4.0.15
  - 19 tests with 87.09% coverage
  - Updated tests for Sass approach

- **Linting**
  - Switched to Oxlint 1.32.0 (1500x faster than ESLint)

- **Storybook**
  - Upgraded to Storybook 10.1.8
  - Added comprehensive stories for all features

### Fixed

- Improved mobile experience with larger touch targets
- Better keyboard navigation and focus management
- Fixed z-index issues with portal rendering
- Improved animation performance

### Performance

- 17% smaller JavaScript bundle
- Better CSS caching with separate stylesheet
- Optimized animations with CSS transitions
- Reduced render overhead with class-based styling

## [1.2.0] - Previous Version

- TypeScript migration
- Added comprehensive tests
- Modern toolchain (Vite, Vitest, Oxlint)
- Storybook integration

## [1.1.0] - Earlier Version

- Basic modal functionality
- CSS-in-JS styling
- Webpack build system

---

For more details, see the [README](README.md) or visit the [GitHub repository](https://github.com/jaysonwu991/react-modal).
