# Contributing to @jayson991/react-ui

First off, thank you for considering contributing to @jayson991/react-ui! It's people like you that make this library better for everyone.

## Code of Conduct

This project and everyone participating in it is expected to uphold a high standard of professionalism and respect.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples to demonstrate the steps**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Note your environment** (OS, browser, Node version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **Include code examples if applicable**

### Pull Requests

1. **Fork the repo** and create your branch from `main`
2. **Install dependencies** with `pnpm install`
3. **Make your changes** following the coding guidelines below
4. **Add tests** for any new functionality
5. **Ensure all tests pass** with `pnpm test`
6. **Update documentation** if needed
7. **Commit your changes** with clear, descriptive messages
8. **Push to your fork** and submit a pull request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/react-ui.git
cd react-ui

# Install dependencies
pnpm install

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Type checking
pnpm type-check

# Linting
pnpm lint
pnpm lint:sass

# Build
pnpm build

# Run Storybook
pnpm storybook
```

## Coding Guidelines

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` types when possible
- Use strict mode settings

### React Components

- Use functional components with hooks
- Follow React best practices
- Keep components focused and single-purpose
- Use meaningful prop names
- Document props with JSDoc comments

### Styling

- Use Sass (.scss files) for styling
- Follow BEM naming convention
- Keep styles modular and component-specific
- Ensure responsive design for all screen sizes
- Support accessibility (WCAG 2.1 Level AA)

### Testing

- Write tests for all new features
- Maintain or improve test coverage (target: >85%)
- Use React Testing Library for component tests
- Test user interactions and accessibility
- Use descriptive test names

### Commit Messages

Follow conventional commit format:

```
type(scope): subject

body (optional)

footer (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(Button): add icon support
fix(Modal): prevent scroll when modal is open
docs(README): update installation instructions
```

## Project Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx          # Component implementation
│   │   ├── Button.scss         # Component styles
│   │   ├── Button.test.tsx     # Component tests
│   │   ├── Button.stories.tsx  # Storybook stories
│   │   └── index.ts            # Public exports
│   ├── Input/
│   ├── Modal/
│   └── index.ts                # All component exports
└── index.ts                    # Library entry point
```

## Testing Requirements

All PRs must:
- Pass all existing tests
- Include tests for new functionality
- Maintain or improve code coverage
- Pass type checking (`pnpm type-check`)
- Pass linting (`pnpm lint` and `pnpm lint:sass`)

## Documentation

- Update README.md for new features
- Add JSDoc comments to component props
- Create Storybook stories for new components
- Update CHANGELOG.md following Keep a Changelog format

## Questions?

Feel free to open an issue for:
- Questions about the codebase
- Clarification on contribution guidelines
- Discussion about potential features

Thank you for contributing! 🎉
