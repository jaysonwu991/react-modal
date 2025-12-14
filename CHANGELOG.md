# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Icon component for rendering icon fonts from Iconfont.cn and Icomoon.io
- Support for both font-based and SVG-based icon rendering
- Comprehensive Icon component tests (35 tests, 100% coverage)
- Icon component Storybook documentation with 11 stories
- Tree-shakeable Icon export
- Responsive design for Icon component with touch optimization

#### Icon Component Features
- Two rendering modes: font (CSS class-based) and svg (SVG symbols)
- Configurable size (pixels, em, rem)
- Flexible color support (hex, rgb, named colors)
- Click handler support with accessibility
- Automatic ARIA labels
- Touch device optimization (44px minimum touch target)
- High contrast mode support
- Reduced motion support

## [1.0.0] - 2025-12-14

### Added
- Initial release of @jayson991/react-ui
- Modal component with multiple sizes (small, medium, large, fullscreen)
- Button component with 4 variants (primary, secondary, danger, ghost)
- Input component with label, error, and helper text support
- Full TypeScript support with complete type definitions
- Comprehensive test suites with 84 tests and 88.57% coverage
- Responsive design for mobile (≤480px), tablet (481-768px), and desktop (≥1024px)
- Accessibility features including ARIA attributes and keyboard navigation
- Touch device optimizations with 44px minimum touch targets
- High contrast mode support
- Reduced motion support for accessibility
- Sass-based styling with BEM naming convention
- Storybook documentation for all components
- Tree-shakeable ESM and CJS builds
- Bundle size: 19.68 kB (6.12 kB gzipped)

### Features

#### Modal Component
- Flexible sizes: small (400px), medium (680px), large (900px), fullscreen
- Centered and non-centered positioning options
- Smooth fade animations with customizable duration
- Custom header and footer support
- Backdrop click and ESC key to close
- Focus trap for accessibility
- Scroll lock when modal is open
- Responsive padding and dimensions

#### Button Component
- 4 variants: primary, secondary, danger, ghost
- 3 sizes: small, medium, large
- Loading state with spinner
- Full width option
- Disabled state handling
- All standard HTML button attributes
- Responsive sizing for different screen sizes

#### Input Component
- Label support with automatic ID generation
- Error message display
- Helper text support
- 3 sizes: small, medium, large
- Full width option
- Prefix and suffix icon support
- All standard HTML input types
- Responsive sizing and touch-optimized inputs

### Technical Details
- React 19.2.3
- TypeScript 5.9.3
- Sass 1.96.0
- Vite 7.2.7 for building
- Vitest 4.0.15 for testing
- Storybook 10.1.8 for documentation
- Oxlint 1.32.0 for linting
- Stylelint 16.26.1 for Sass linting

[1.0.0]: https://github.com/jaysonwu991/react-ui/releases/tag/v1.0.0
