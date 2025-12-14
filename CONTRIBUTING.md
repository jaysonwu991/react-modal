# Contributing to @jayson991/react-modal

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- pnpm 9+ (required)

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-modal.git
   cd react-modal
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🛠 Development Workflow

### Available Scripts

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run tests with UI
pnpm test:ui

# Type checking
pnpm type-check

# Linting
pnpm lint

# Auto-fix linting issues
pnpm format

# Build library
pnpm build

# Run Storybook
pnpm storybook

# Build Storybook
pnpm build-storybook
```

### Making Changes

1. **Write Tests First** (TDD encouraged)
   - Add tests in `src/Modal.test.tsx`
   - Ensure tests fail before implementing feature
   - Run `pnpm test:watch` during development

2. **Implement Your Changes**
   - Update `src/Modal.tsx` for component logic
   - Update `src/Modal.scss` for styling
   - Follow existing code style and patterns

3. **Update Documentation**
   - Add/update JSDoc comments for new props
   - Add examples to `README.md` if needed
   - Update `CHANGELOG.md` with your changes

4. **Add Storybook Stories** (if applicable)
   - Add new stories in `src/Modal.stories.tsx`
   - Showcase your feature/change
   - Include interaction tests if relevant

5. **Verify Everything Works**
   ```bash
   pnpm type-check    # TypeScript checks
   pnpm lint          # Linting
   pnpm test          # All tests pass
   pnpm build         # Build succeeds
   ```

## 📝 Code Style

### TypeScript

- Use TypeScript for all code
- Add proper type annotations
- No `any` types (use `unknown` if needed)
- Follow existing naming conventions

### React

- Use functional components with hooks
- Follow React best practices
- Add JSDoc comments for props
- Keep components focused and simple

### Sass/CSS

- Use BEM naming convention
- Follow mobile-first approach
- Use Sass variables and mixins
- Keep specificity low
- Add responsive breakpoints as needed

### Example:

```tsx
/**
 * Modal component description
 * @param props - Component props
 */
export const Modal: React.FC<ModalProps> = ({
  title,
  showModal,
  onHideModal,
  children,
}) => {
  // Implementation
};
```

## 🧪 Testing

### Test Requirements

- All new features must have tests
- Aim for >85% code coverage
- Test user interactions
- Test accessibility features
- Test responsive behavior when applicable

### Test Structure

```tsx
describe('Feature Name', () => {
  it('should do something specific', () => {
    // Arrange
    const { container } = render(<Modal {...props} />);

    // Act
    fireEvent.click(screen.getByText('Button'));

    // Assert
    expect(screen.getByText('Result')).toBeInTheDocument();
  });
});
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run specific test file
pnpm test Modal.test.tsx
```

## 📚 Documentation

### JSDoc Comments

Add JSDoc for all props:

```tsx
export interface ModalProps {
  /** Title displayed in the modal header */
  title?: string;

  /** Controls whether the modal is visible */
  showModal: boolean;

  /** Callback when modal should be hidden */
  onHideModal: () => void;
}
```

### README Updates

- Add examples for new features
- Update API reference table
- Include screenshots/GIFs if visual changes
- Update feature list

### Storybook

- Create stories for new features
- Use descriptive story names
- Add controls for interactive props
- Include usage examples in story descriptions

## 🐛 Bug Reports

### Before Submitting

1. Check existing issues
2. Verify bug exists in latest version
3. Test in different browsers/devices
4. Gather reproduction steps

### Bug Report Template

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce:
1. Go to '...'
2. Click on '...'
3. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g. macOS, Windows]
- Browser: [e.g. Chrome 120]
- React version: [e.g. 19.2.3]
- Package version: [e.g. 2.0.0]

**Additional context**
Any other relevant information.
```

## ✨ Feature Requests

### Before Submitting

1. Check if feature already exists
2. Search existing feature requests
3. Consider if it fits project scope
4. Think about implementation approach

### Feature Request Template

```markdown
**Is your feature request related to a problem?**
A clear description of the problem.

**Describe the solution you'd like**
What you want to happen.

**Describe alternatives you've considered**
Other solutions you thought about.

**Additional context**
Screenshots, mockups, or examples.
```

## 🔀 Pull Request Process

### Before Submitting PR

- [ ] All tests pass (`pnpm test`)
- [ ] Type checking passes (`pnpm type-check`)
- [ ] Linting passes (`pnpm lint`)
- [ ] Build succeeds (`pnpm build`)
- [ ] Documentation updated
- [ ] Storybook stories added (if applicable)
- [ ] CHANGELOG.md updated

### PR Title Format

Use conventional commits:

- `feat: add custom header support`
- `fix: resolve z-index issue`
- `docs: update README examples`
- `test: add animation tests`
- `refactor: simplify modal rendering`
- `style: update Sass variables`
- `chore: update dependencies`

### PR Description Template

```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How was this tested?

## Screenshots
If applicable.

## Checklist
- [ ] Tests pass
- [ ] Types pass
- [ ] Lint passes
- [ ] Build succeeds
- [ ] Documentation updated
- [ ] Storybook updated
```

### Review Process

1. Automated checks must pass
2. At least one maintainer approval required
3. Address review feedback
4. Squash commits before merge (if requested)

## 📋 Commit Messages

Follow conventional commits:

```bash
feat(modal): add custom footer support
fix(styles): resolve mobile spacing issue
docs(readme): add migration guide
test(modal): add lifecycle callback tests
```

## 🎯 Focus Areas

We especially welcome contributions in:

- Accessibility improvements
- Performance optimizations
- Mobile/responsive enhancements
- Documentation improvements
- Test coverage
- Bug fixes
- TypeScript improvements

## 🙏 Recognition

Contributors will be:
- Listed in release notes
- Mentioned in CHANGELOG.md
- Credited in README.md (for significant contributions)

## 📞 Questions?

- Open a discussion on GitHub
- Ask in pull request comments
- Check existing documentation

## 📜 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing! 🎉
