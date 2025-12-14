# Migration Guide: v1.x to v2.0

This guide will help you migrate from version 1.x to version 2.0 of @jayson991/react-modal.

## Overview

Version 2.0 introduces significant improvements including:
- Migration from CSS-in-JS to Sass
- Full responsive design
- Enhanced accessibility
- 20+ new configuration props
- 17% smaller JavaScript bundle

## Breaking Changes

### 1. Styles Now Auto-Imported

**Before (v1.x):**
```tsx
import Modal from '@jayson991/react-modal';
// Styles were automatically injected via CSS-in-JS
```

**After (v2.0):**
```tsx
import Modal from '@jayson991/react-modal';
// Styles are automatically imported with the component!
```

**Why**: Separating CSS from JavaScript provides better caching, smaller JS bundle, and easier customization. The styles are automatically included when you import the Modal component, so you don't need to remember a separate import.

### 2. z-index Default Changed

**Before (v1.x):**
- Default z-index: `1050`

**After (v2.0):**
- Default z-index: `1000`

**Migration**: If you relied on the default z-index of 1050, explicitly set it:
```tsx
<Modal zIndex={1050} {...otherProps} />
```

### 3. Custom Styling Approach

**Before (v1.x):**
Inline styles were applied directly to elements.

**After (v2.0):**
CSS classes with BEM naming. Inline styles via props still work for customization.

**Migration**: If you were overriding styles with CSS selectors, update them:
```css
/* Before */
.modal-backdrop { }
.modal-dialog { }

/* After */
.modal-wrapper { }
.modal-content { }
```

## Step-by-Step Migration

### Step 1: Update Package

```bash
npm install @jayson991/react-modal@latest
```

### Step 2: Update Component Usage (No Changes Needed!)

Good news! Styles are now automatically imported when you import the Modal component.

Most existing props work without changes:

```tsx
// This still works!
<Modal
  title="My Modal"
  showModal={showModal}
  onHideModal={() => setShowModal(false)}
>
  <p>Content</p>
</Modal>
```

### Step 3: Leverage New Features (Optional)

Take advantage of new props for better control:

```tsx
<Modal
  title="Enhanced Modal"
  size="large"                    // NEW: Size variants
  centered                        // NEW: Vertical centering
  animated                        // NEW: Smooth animations
  closeOnBackdropClick={true}     // NEW: Control backdrop behavior
  closeOnEscape={true}            // NEW: Control escape key
  onOpen={() => console.log('Opened')}  // NEW: Lifecycle callbacks
  showModal={showModal}
  onHideModal={() => setShowModal(false)}
>
  <p>Content with new features!</p>
</Modal>
```

## New Features to Explore

### 1. Size Variants

```tsx
<Modal size="small" {...props}>Small (400px)</Modal>
<Modal size="medium" {...props}>Medium (680px - default)</Modal>
<Modal size="large" {...props}>Large (900px)</Modal>
<Modal size="fullscreen" {...props}>Fullscreen</Modal>
```

### 2. Custom Header and Footer

```tsx
<Modal
  header={<div>Custom Header</div>}
  footer={<div>Custom Footer</div>}
  {...props}
>
  Content
</Modal>
```

### 3. Lifecycle Callbacks

```tsx
<Modal
  onOpen={() => trackEvent('modal_opened')}
  onClose={() => trackEvent('modal_closed')}
  onAnimationEnd={() => console.log('Animation done')}
  {...props}
>
  Content
</Modal>
```

### 4. Advanced Customization

```tsx
<Modal
  className="my-custom-modal"
  contentStyle={{ backgroundColor: '#f0f9ff' }}
  backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
  {...props}
>
  Content
</Modal>
```

## Styling Migration

### CSS Class Names

If you were targeting modal elements with CSS, update selectors:

```css
/* Before (v1.x) */
.modal-backdrop { }
.modal-dialog { }
.modal-content { }

/* After (v2.0) - BEM naming */
.modal-wrapper { }              /* Backdrop */
.modal-wrapper--centered { }    /* Centered variant */
.modal-dialog { }               /* Still exists */
.modal-content { }              /* Modal box */
.modal-content--small { }       /* Size variants */
.modal-content--medium { }
.modal-content--large { }
.modal-content--fullscreen { }
.modal-header { }               /* Header section */
.modal-title { }                /* Title text */
.modal-close-button { }         /* Close button */
.modal-close-icon { }           /* Close icon */
.modal-body { }                 /* Body content */
.modal-footer { }               /* Footer section */
```

### Sass Variables

If you want to customize default styles, use Sass:

```scss
// Override variables before import
$modal-size-small: 350px;
$modal-size-medium: 600px;
$modal-size-large: 1000px;
$backdrop-color: rgba(0, 0, 0, 0.8);
$modal-bg: #ffffff;
$spacing-md: 20px;

@import '@jayson991/react-modal/styles';
```

## Responsive Behavior

v2.0 automatically handles responsive design. Your modals will:

- On mobile (≤480px):
  - Use 95% width
  - Have larger touch targets (44px)
  - Show optimized padding

- On tablet (481-768px):
  - Use 85-90% width
  - Show balanced spacing

- On desktop (≥1024px):
  - Use fixed widths (400/680/900px)
  - Show full features

No code changes needed - it just works!

## Accessibility Improvements

v2.0 includes automatic accessibility enhancements:

- High contrast mode support
- Reduced motion support
- Better keyboard navigation
- Improved ARIA attributes
- Focus trap
- Auto-focus first element

These work automatically with no code changes.

## Common Issues

### Issue: Styles not appearing

**Solution**: This shouldn't happen as styles are automatically imported. If you're seeing this issue:
1. Clear your build cache and rebuild
2. Make sure you're importing from `@jayson991/react-modal` (not a relative path)
3. Check that your bundler supports CSS imports in dependencies

### Issue: Modal appears behind other elements

**Solution**: Adjust z-index:
```tsx
<Modal zIndex={2000} {...props} />
```

### Issue: Custom styles not applying

**Solution**: Use `contentStyle` or `backdropStyle` props:
```tsx
<Modal
  contentStyle={{ backgroundColor: 'white' }}
  backdropStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
  {...props}
/>
```

### Issue: TypeScript errors

**Solution**: Update your TypeScript version to 5.0+:
```bash
npm install typescript@latest
```

## Need Help?

- 📖 Check the [README](README.md) for examples
- 🐛 Report issues on [GitHub](https://github.com/jaysonwu991/react-modal/issues)
- 💬 Ask questions in discussions

## Rollback

If you need to rollback to v1.x:

```bash
npm install @jayson991/react-modal@1.2.0
```

However, we strongly recommend migrating to v2.0 for:
- Better performance
- Responsive design
- Enhanced accessibility
- Smaller bundle size
- Future-proof architecture
