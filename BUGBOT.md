# Bug-Fixing AI Agent Instructions for Nextal

Quick reference guide for AI agents debugging and fixing issues in this Next.js template.

## Quick Diagnostics

### First Steps for Any Issue

1. **Check the build**: `yarn build`
2. **Check types**: `yarn ts`
3. **Check linting**: `yarn lint`
4. **Run tests**: `yarn test:ci`

These 4 commands will catch 95% of issues.

## Common Issues & Solutions

### TypeScript Errors

#### Issue: "Cannot find module" or "Cannot find namespace 'JSX'"

**Cause**: React 19 types changed, old JSX namespace usage

**Solution**:
```typescript
// ❌ Old way (causes error in React 19)
const Component = (): JSX.Element => { ... }

// ✅ New way (works with React 19)
const Component = () => { ... }
// TypeScript infers the return type
```

#### Issue: "Property does not exist on type"

**Cause**: Strict mode is enabled, missing type definitions

**Solution**:
```typescript
// ❌ Implicit any
function handler(event) { ... }

// ✅ Explicitly typed
function handler(event: React.MouseEvent<HTMLButtonElement>) { ... }
```

#### Issue: "Type 'string | undefined' is not assignable to type 'string'"

**Cause**: Strict null checks enabled

**Solution**:
```typescript
// ❌ Doesn't handle undefined
const value: string = process.env.API_URL;

// ✅ Handle undefined case
const value = process.env.API_URL ?? 'default-value';

// ✅ Or use type guard
if (process.env.API_URL) {
  const value: string = process.env.API_URL;
}
```

### Tailwind CSS Issues

#### Issue: "Cannot apply unknown utility class"

**Cause**: Missing PostCSS config or incorrect Tailwind setup

**Checklist**:
1. Verify `postcss.config.js` exists in root
2. Check it contains:
   ```javascript
   module.exports = {
     plugins: {
       "@tailwindcss/postcss": {},
     },
   };
   ```
3. Verify `@tailwindcss/postcss` is installed: `yarn list @tailwindcss/postcss`
4. Restart dev server after PostCSS config changes

#### Issue: "Tailwind classes not working in production"

**Cause**: Missing PostCSS configuration or incorrect globals.css

**Checklist**:
1. Check `src/styles/globals.css` starts with:
   ```css
   @import "tailwindcss";
   @plugin "@tailwindcss/forms";
   @plugin "@tailwindcss/typography";
   ```
2. Verify `postcss.config.js` exists
3. Rebuild: `yarn build`

#### Issue: All colors missing / "bg-white" not found

**Cause**: Theme configuration removed all default colors

**Solution**: Remove or fix `@theme` block in globals.css
```css
/* ❌ This removes all default colors */
@theme {
  --color-*: initial;
}

/* ✅ Either remove @theme entirely, or define specific colors */
@theme {
  --color-brand: #3b82f6;
}
```

### Testing Errors

#### Issue: "Cannot find module '@testing-library/react'"

**Cause**: Missing testing library dependencies

**Solution**:
```bash
yarn add -D @testing-library/dom @testing-library/react @testing-library/user-event
```

#### Issue: "fireEvent is not exported from '@testing-library/react'"

**Cause**: Testing Library v16+ removed fireEvent

**Solution**: Use `userEvent` instead
```typescript
// ❌ Old way (Testing Library v14)
import { fireEvent } from "@testing-library/react";
fireEvent.click(button);

// ✅ New way (Testing Library v16+)
import { userEvent } from "@testing-library/user-event";
const user = userEvent.setup();
await user.click(button);
```

#### Issue: "Test must be async" error

**Cause**: Using `userEvent` without async/await

**Solution**:
```typescript
// ❌ Missing async
test("clicks button", () => {
  const user = userEvent.setup();
  user.click(button); // Error!
});

// ✅ Properly async
test("clicks button", async () => {
  const user = userEvent.setup();
  await user.click(button);
});
```

### Build Errors

#### Issue: "Module not found" during build

**Cause**: Incorrect import path or missing dependency

**Checklist**:
1. Use absolute imports: `@/components/...` not `../../../`
2. Check path aliases in `tsconfig.json`:
   ```json
   "paths": {
     "@/components/*": ["src/components/*"],
     "@/hooks/*": ["src/hooks/*"]
   }
   ```
3. Verify the file actually exists at that path
4. Check file extensions are correct (`.tsx` for components)

#### Issue: "Cannot find module 'next'"

**Cause**: Dependencies not installed

**Solution**:
```bash
yarn install
```

#### Issue: PostCSS plugin error

**Cause**: Wrong Tailwind CSS plugin in PostCSS config

**Solution**: Ensure you're using `@tailwindcss/postcss` not `tailwindcss`:
```javascript
// ❌ Wrong (Tailwind v3 syntax)
module.exports = {
  plugins: {
    tailwindcss: {},
  },
};

// ✅ Correct (Tailwind v4 syntax)
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### ESLint Errors

#### Issue: "ESLint: Invalid option '--cache'"

**Cause**: ESLint 9 doesn't support `--cache` flag

**Solution**: Update lint-staged config
```javascript
// ❌ Old
"*.{ts,tsx}": ["eslint --cache --fix"]

// ✅ New
"*.{ts,tsx}": ["eslint --fix"]
```

#### Issue: "Cannot read config file"

**Cause**: Using old `.eslintrc.json` with ESLint 9

**Solution**: Migrate to flat config (`eslint.config.mjs`):
```javascript
import nextConfig from "eslint-config-next/core-web-vitals";

const eslintConfig = [...nextConfig];

export default eslintConfig;
```

### Git Hook Errors

#### Issue: Husky hooks not running

**Cause**: Hooks not initialized

**Solution**:
```bash
yarn prepare    # New command (Husky 9)
# or
yarn           # Runs prepare automatically
```

#### Issue: "husky - DEPRECATED" warning

**Cause**: Old Husky hook format

**Solution**: Update `.husky/pre-commit` and `.husky/commit-msg`:
```bash
# ❌ Old format
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npx lint-staged

# ✅ New format (just the command)
npx lint-staged
```

### Dependency Conflicts

#### Issue: Peer dependency warnings

**Common warnings and solutions**:

1. **@testing-library/react peer dependency**:
   ```bash
   yarn add -D @testing-library/dom@^10.4.0
   ```

2. **@vitejs/plugin-react peer dependency**:
   - Safe to ignore if not using Vite directly
   - Or add: `yarn add -D vite@^5.0.0`

3. **eslint-plugin peer dependency**:
   - Usually safe to ignore
   - Plugins are being updated for ESLint 9

## Debugging Workflow

### Step-by-Step Debug Process

1. **Identify the error type**:
   - Build error → Check `yarn build`
   - Type error → Check `yarn ts`
   - Lint error → Check `yarn lint`
   - Test error → Check `yarn test:ci`

2. **Read the error message carefully**:
   - Note the file path and line number
   - Identify the root cause from the message

3. **Check recent changes**:
   - What was the last thing changed?
   - Can you reproduce the error?
   - Does it work in a fresh clone?

4. **Verify dependencies**:
   ```bash
   rm -rf node_modules yarn.lock
   yarn install
   ```

5. **Check configuration files**:
   - tsconfig.json
   - postcss.config.js
   - eslint.config.mjs
   - vitest.config.ts

6. **Restart development server**:
   ```bash
   # Kill the process and restart
   yarn dev
   ```

## Performance Issues

### Slow Build Times

**Checklist**:
1. Clear Next.js cache: `rm -rf .next`
2. Update dependencies: `yarn upgrade-interactive --latest`
3. Check for large dependencies in `node_modules`
4. Verify using production mode: `NODE_ENV=production yarn build`

### Slow Type Checking

**Solutions**:
1. Clear TypeScript cache: `rm -rf .next/cache`
2. Reduce files being checked (update `include` in tsconfig.json)
3. Use incremental builds (already enabled in tsconfig.json)

## Recovery Commands

### Nuclear Option (when nothing works)

```bash
# Clean everything
rm -rf node_modules yarn.lock .next

# Reinstall
yarn install

# Rebuild
yarn build
```

### Reset Git Hooks

```bash
rm -rf .git/hooks
yarn prepare
```

### Clear All Caches

```bash
rm -rf node_modules .next .yarn/cache
yarn install
```

## Testing Before Commit

Always run before committing:

```bash
# Full check
yarn build && yarn ts && yarn lint && yarn test:ci
```

Or let the pre-commit hook catch issues:
```bash
git add .
git commit -m "your message"
# Hook runs automatically
```

## Common False Positives

### Warnings You Can Usually Ignore

1. **Peer dependency warnings** - Most can be safely ignored
2. **Deprecation warnings from dependencies** - Wait for dependency updates
3. **Browserslist outdated warning** - Run `npx update-browserslist-db@latest` if needed

### Errors You Cannot Ignore

1. **Type errors** - Fix before committing
2. **Build errors** - Must resolve before deployment
3. **Test failures** - Fix or update tests
4. **Lint errors** - Auto-fixable with `yarn lint --fix` or manual fix

## Getting Help

If stuck after trying these solutions:

1. Check error message carefully - it usually tells you exactly what's wrong
2. Search for the specific error in Next.js, React, or Tailwind docs
3. Check `CLAUDE.md` and `AGENTS.md` for context
4. Verify you're following the project's patterns
5. Check that you haven't accidentally modified critical config files

## Emergency Rollback

If a change breaks everything:

```bash
# See recent commits
git log --oneline -5

# Revert to last working commit
git reset --hard HEAD~1

# Or revert specific commit
git revert <commit-hash>

# Reinstall dependencies
rm -rf node_modules
yarn install
```

## Prevention Checklist

Before making changes:

- [ ] Run tests: `yarn test:ci`
- [ ] Check types: `yarn ts`
- [ ] Lint code: `yarn lint`
- [ ] Test build: `yarn build`
- [ ] Follow existing patterns
- [ ] Don't disable strict mode
- [ ] Use Tailwind, not CSS modules
- [ ] Write tests for new features

Following this checklist prevents 99% of bugs!
