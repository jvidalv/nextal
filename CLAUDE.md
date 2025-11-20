# Claude Code Instructions for Nextal

This is a Next.js starter template with a modern, opinionated tech stack. Follow these guidelines when working with this codebase.

## Tech Stack Overview

- **Next.js 16.0.3** - React framework with App Router (`/app` directory)
- **React 19.2.0** - Latest React with modern features
- **TypeScript 5.9.3** - Strict mode enabled for maximum type safety
- **Tailwind CSS 4.1.17** - Utility-first CSS with inline classes ONLY
- **Vitest 3.2.4** - Fast unit testing framework
- **ESLint 9.18.0** - Flat config format (eslint.config.mjs)
- **Prettier 3.6.2** - Code formatting
- **Husky 9.1.7** - Git hooks for quality checks

## Project Structure

```
nextal/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout (Server Component)
│   │   └── page.tsx           # Home page
│   ├── components/            # Atomic Design structure
│   │   ├── atoms/            # Basic building blocks
│   │   ├── molecules/        # Simple component combinations
│   │   └── organisms/        # Complex components
│   ├── styles/
│   │   └── globals.css       # Tailwind imports and base styles
│   └── types/
│       └── react.ts          # Custom React types
├── .husky/                   # Git hooks
├── eslint.config.mjs        # ESLint flat config
├── postcss.config.js        # PostCSS for Tailwind
└── tsconfig.json            # TypeScript config (strict mode)
```

## Code Style & Patterns

### Component Structure (Atomic Design)

- **Atoms**: Basic UI elements (Button, Input, Logo)
- **Molecules**: Simple combinations (CopyButton = Button + Icon + State)
- **Organisms**: Complex components (Card, Navigation, Forms)

Each component folder should include:
- `component-name.tsx` - The component
- `component-name.test.tsx` - Unit tests (optional)
- `index.ts` - Re-exports

### TypeScript Patterns

**Strict mode is enabled** - Always properly type everything:

```typescript
// ✅ Good - explicit return type
const MyComponent = ({ text }: { text: string }) => {
  return <div>{text}</div>;
};

// ✅ Good - using type alias
type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};
```

### Styling with Tailwind CSS 4

**IMPORTANT**: This project uses **Tailwind inline utility classes ONLY**. No CSS Modules!

```tsx
// ✅ Good - Tailwind utility classes
<div className="flex items-center gap-4 px-6 py-4 bg-white dark:bg-gray-900">
  <h1 className="text-2xl font-bold">Title</h1>
</div>

// ❌ Bad - CSS Modules (NOT supported)
import styles from './component.module.css';
<div className={styles.container}>

// ❌ Bad - styled-components (NOT in this stack)
const StyledDiv = styled.div`...`;
```

### Server vs Client Components

By default, components are **Server Components**. Use `"use client"` directive only when needed:

```tsx
// Server Component (default)
export default function Page() {
  return <div>Static content</div>;
}

// Client Component (when you need interactivity)
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## Common Tasks

### Adding a New Component

1. Create folder in appropriate atomic level: `src/components/atoms/my-component/`
2. Create component file: `my-component.tsx`
3. Add test file: `my-component.test.tsx`
4. Create index: `index.ts`
5. Use absolute imports: `import MyComponent from "@/components/atoms/my-component"`

### Writing Tests

Use Vitest with Testing Library:

```typescript
import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, test, expect, vi } from "vitest";
import MyComponent from "./my-component";

describe("MyComponent", () => {
  test("renders and handles clicks", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    const { getByRole } = render(<MyComponent onClick={onClick} />);
    await user.click(getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
```

### Adding New Pages

Pages go in `src/app/`:
- `src/app/about/page.tsx` → `/about`
- `src/app/blog/[slug]/page.tsx` → `/blog/post-name`

## What NOT to Do

❌ **Never** add CSS Modules (no `.module.css` files)
❌ **Never** use inline `<style>` tags or styled-components
❌ **Never** disable TypeScript strict mode
❌ **Never** use `any` type without explicit reason
❌ **Never** skip tests for new features
❌ **Never** commit without running the pre-commit hooks
❌ **Never** use `@ts-ignore` or `@ts-nocheck` unless absolutely necessary

## Git Commit Conventions

This project uses **commitlint** with conventional commits:

```
feat: add new feature
fix: bug fix
chore: maintenance tasks
docs: documentation updates
test: add/update tests
refactor: code refactoring
style: formatting changes
perf: performance improvements
```

Examples:
```
feat: add user authentication
fix: resolve button click issue
chore: update dependencies to latest versions
docs: update README with new features
```

## Testing & Quality Checks

Before committing, these run automatically via Husky:
1. Prettier formatting
2. ESLint linting
3. TypeScript type checking (`yarn ts`)
4. Vitest tests (`yarn test:ci`)

Run manually:
```bash
yarn lint          # ESLint
yarn ts            # TypeScript check
yarn test          # Vitest (watch mode)
yarn test:ci       # Vitest (CI mode)
yarn build         # Production build
```

## Dark Mode Support

Tailwind's class-based dark mode is configured. Use the `dark:` prefix:

```tsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content adapts to dark mode
</div>
```

## Performance Tips

- Keep Server Components as the default
- Use Client Components (`"use client"`) only when needed (state, effects, browser APIs)
- Leverage Next.js automatic code splitting
- Use the `loading.tsx` convention for loading states
- Use `error.tsx` for error boundaries

## Questions?

- Check Next.js 16 docs: https://nextjs.org/docs
- Check Tailwind CSS 4 docs: https://tailwindcss.com
- Check Vitest docs: https://vitest.dev
- Check the existing code patterns in `src/components/`
