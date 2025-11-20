# AI Agent Instructions for Nextal

Instructions for AI coding agents working with this Next.js starter template.

## Codebase Architecture

### Atomic Design Pattern

This project follows **Atomic Design** for component organization:

```
components/
├── atoms/          # Smallest reusable units
│   ├── button/    # Single purpose components
│   └── logos/     # SVG icons and logos
├── molecules/      # Combinations of atoms
│   └── copy-button/  # Button + clipboard functionality
└── organisms/      # Complex feature components
    └── card/      # Card layout with multiple elements
```

**Rules:**
- Atoms: No dependencies on other components
- Molecules: Combine 2+ atoms, single responsibility
- Organisms: Complex components, can use atoms + molecules
- Each component must have its own folder with index.ts

### File Naming Conventions

- Components: `kebab-case.tsx` (e.g., `copy-button.tsx`)
- Tests: `kebab-case.test.tsx` (e.g., `copy-button.test.tsx`)
- Types: `PascalCase` for type names
- Files: Lowercase with hyphens

### Import Patterns

Use absolute imports with `@/` prefix:

```typescript
// ✅ Correct
import Button from "@/components/atoms/button";
import { FCC } from "@/types/react";

// ❌ Wrong
import Button from "../../../components/atoms/button";
import { FCC } from "../../types/react";
```

## Adding Features

### New Component Checklist

1. **Determine atomic level** (atom, molecule, or organism)
2. **Create folder**: `src/components/{level}/{component-name}/`
3. **Create files**:
   - `{component-name}.tsx` - Component implementation
   - `{component-name}.test.tsx` - Unit tests
   - `index.ts` - Exports
4. **Write types**: Props interface with TypeScript strict mode
5. **Add tests**: Cover main functionality
6. **Use Tailwind**: Inline utility classes only

### New Page Checklist

1. **Create in app directory**: `src/app/{route}/page.tsx`
2. **Server Component by default**: Only add `"use client"` if needed
3. **Add metadata**: Use Next.js Metadata API
4. **Add loading state**: Create `loading.tsx` if async
5. **Add error boundary**: Create `error.tsx` if needed

### New API Route Checklist

1. **Create route handler**: `src/app/api/{endpoint}/route.ts`
2. **Export HTTP methods**: GET, POST, PUT, DELETE, etc.
3. **Return NextResponse**: Use `NextResponse.json()`
4. **Add error handling**: Try/catch with proper status codes
5. **Type request/response**: Full TypeScript coverage

## Testing Strategy

### Unit Tests (Vitest)

- Test all new components
- Test user interactions with `userEvent`
- Test edge cases and error states
- Mock external dependencies

**Test Template:**
```typescript
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";

describe("ComponentName", () => {
  test("should render correctly", () => {
    const { getByText } = render(<ComponentName />);
    expect(getByText("Expected Text")).toBeDefined();
  });

  test("should handle user interaction", async () => {
    const user = userEvent.setup();
    const handler = vi.fn();
    const { getByRole } = render(<ComponentName onClick={handler} />);

    await user.click(getByRole("button"));
    expect(handler).toHaveBeenCalled();
  });
});
```

### Test Commands

```bash
yarn test          # Watch mode for development
yarn test:ci       # CI mode (runs once)
yarn ts            # TypeScript type checking
```

## Git Workflow

### Commit Message Format

Follow **Conventional Commits**:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting (not CSS)
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

**Examples:**
```
feat(auth): add user login functionality
fix(button): resolve click handler race condition
docs(readme): update installation instructions
test(card): add unit tests for card component
chore(deps): update dependencies to latest versions
```

### Pre-commit Hooks

Automatically runs on `git commit`:
1. Prettier (format code)
2. ESLint (lint code)
3. TypeScript (type check)
4. Vitest (run tests)

**If hooks fail:**
- Fix the reported issues
- Stage the fixes: `git add .`
- Try committing again

## Configuration Files

### Important Config Files

- `tsconfig.json` - TypeScript with **strict mode enabled**
- `eslint.config.mjs` - ESLint flat config (v9)
- `postcss.config.js` - PostCSS for Tailwind CSS 4
- `vitest.config.ts` - Vitest test configuration
- `next.config.js` - Next.js configuration
- `.husky/` - Git hook scripts

### Never Modify Without Review

- `strict: true` in tsconfig.json (maintain strict mode)
- ESLint flat config structure
- Husky git hooks
- Package manager (must use Yarn)

## Styling Guidelines

### Tailwind CSS 4

This project uses **Tailwind CSS 4 with the PostCSS plugin**.

**Configuration:**
- Global styles: `src/styles/globals.css`
- PostCSS setup: `postcss.config.js`
- Plugins: `@tailwindcss/forms`, `@tailwindcss/typography`

**Usage:**
```tsx
// ✅ Inline utility classes
<div className="flex flex-col gap-4 p-6 rounded-lg bg-white dark:bg-gray-900">
  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Title</h1>
  <p className="text-gray-600 dark:text-gray-300">Description</p>
</div>

// ❌ Never use CSS Modules
import styles from './component.module.css'; // NOT supported

// ❌ Never use styled-components
const Styled = styled.div``; // NOT in this stack
```

### Dark Mode

Use Tailwind's `dark:` variant:
```tsx
<button className="bg-blue-500 dark:bg-blue-700 text-white">
  Button
</button>
```

## Dependency Management

### Adding Dependencies

```bash
# Production dependency
yarn add package-name

# Development dependency
yarn add -D package-name
```

### Updating Dependencies

```bash
# Check for updates
yarn outdated

# Update specific package
yarn upgrade package-name@latest

# Update all (carefully)
yarn upgrade-interactive --latest
```

### Package Manager: Yarn Only

This project uses **Yarn 1.22.22+**. Do not use npm or pnpm.

## Build & Deployment

### Development

```bash
yarn dev          # Start dev server at localhost:3000
```

### Production Build

```bash
yarn build        # Create optimized production build
yarn start        # Start production server
```

### Deployment (Vercel)

This template is optimized for **zero-config Vercel deployment**:

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

No build configuration needed - Vercel detects Next.js automatically.

## Performance Best Practices

1. **Prefer Server Components**: Use Client Components only when needed
2. **Code splitting**: Automatic with Next.js App Router
3. **Image optimization**: Use `next/image` component
4. **Font optimization**: Use `next/font`
5. **Lazy loading**: Use `next/dynamic` for heavy components

## Common Patterns

### Shared Types

Define in `src/types/`:
```typescript
// src/types/react.ts
import { ReactNode } from "react";

export type FCC<T = Record<string, unknown>> = {
  children: ReactNode;
} & T;
```

### Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_KEY=your-secret-key
```

Access in code:
```typescript
// Client-side (prefix with NEXT_PUBLIC_)
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Server-side only
const secret = process.env.SECRET_KEY;
```

## Debugging Tips

### Common Issues

1. **Import errors**: Check absolute import paths use `@/`
2. **Type errors**: Ensure strict mode compliance
3. **Tailwind not working**: Verify `postcss.config.js` exists
4. **Tests failing**: Check `userEvent.setup()` is called
5. **Build errors**: Run `yarn ts` to check types first

### Debug Commands

```bash
yarn build         # Test production build
yarn ts            # Check TypeScript errors
yarn lint          # Check linting errors
yarn test          # Run tests in watch mode
```

## Questions or Issues?

1. Check existing components for patterns
2. Review this document and CLAUDE.md
3. Check official docs (Next.js, Tailwind, Vitest)
4. Ensure all tests pass before committing
5. Follow the established patterns in the codebase
