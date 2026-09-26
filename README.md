<p align='center'>
  <img src='https://i.imgur.com/Atv0MyS.png' alt='Nextal - Next Starter Template' width='600'/>
</p>

<p align='center'>
Mocking up web app with <b>Nextal</b><sup><em>(speed)</em></sup><br>
</p>

<br>

<p align='center'>
<a href="https://nextal.josepvidal.dev">Live Demo</a>
</p>

## Features

- ⚡️ [Next 16 with React 19](https://nextjs.org/docs/getting-started) - Using the /app folder.
- 🦾 TypeScript 7, of course (with strict mode enabled)
- 🫀 [Vitest](https://vitest.dev/) - unitary testing made easy
- 🎨 [Tailwind CSS 4](https://tailwindcss.com/) - next generation utility-first CSS with inline classes
- 🌚 [Dark Mode](https://tailwindcss.com/docs/dark-mode)
- 👑 [Atomic Design organization](https://bradfrost.com/blog/post/atomic-web-design/)
- 🗂 [Absolute imports](https://nextjs.org/docs/app/getting-started/installation#set-up-absolute-imports-and-module-path-aliases) - `@/*` maps to `src/*`
- 😃 [Hero icons](https://heroicons.com/)
- ☁️ Deploy on Vercel, zero-config

### Coding Style

- [Oxlint](https://oxc.rs/docs/guide/usage/linter) - the `eslint-config-next` rules, ported with `@oxlint/migrate`
- [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) - Prettier-compatible formatting

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Husky](https://typicode.github.io/husky/) + [lint-staged](https://github.com/lint-staged/lint-staged) - lint, format, type-check and test staged files before each commit
- [Commit lint](https://github.com/conventional-changelog/commitlint) - helps your team adhering to a commit convention
- [Vercel](https://www.vercel.com/) - zero-config deployment

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/jvidalv/nextal/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history (requires Node.js 22.22.2+, 24.15+ or 26+, and Yarn 1)

```bash
npx degit jvidalv/nextal my-nextjs-app
cd my-nextjs-app
yarn # If you don't have yarn installed, run: npm install -g yarn
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Rename `name` and `author` fields in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the title and description (`metadata`) in `src/app/layout.tsx`
- [ ] Change the favicon in `src/app/favicon.ico`
- [ ] Modify the manifest in `src/app/manifest.webmanifest`
- [ ] Clean up the README's

And, enjoy :)

## Usage

### Development

Type:

```bash
yarn dev
```

Then visit http://localhost:3000

### Build

To build like if it was for production run

```bash
yarn build
yarn start
```

Then you can visit http://localhost:3000 and check that everything works as expected.

### Quality checks

```bash
yarn lint          # Oxlint
yarn lint:fix      # Oxlint, applying auto-fixes
yarn format        # Oxfmt, formats the whole repo
yarn format:check  # Oxfmt, check only
yarn ts            # TypeScript type check
yarn test          # Vitest (watch mode)
yarn test:ci       # Vitest (single run)
```

## Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jvidalv/nextal)

### Manual Deployment

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Vercel](https://vercel.com/new) and import your repository
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy" and your app will be live in about a minute!

### Configuration

No configuration needed! Vercel automatically:

- Detects Next.js 16 and uses the correct build command
- Configures environment variables (if you add them)
- Sets up automatic deployments on every push
- Provides preview deployments for pull requests

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

### Environment Variables

If you need environment variables:

1. Create a `.env.local` file locally (already in `.gitignore`)
2. Add your variables to Vercel's dashboard under Settings → Environment Variables
3. Prefix client-side variables with `NEXT_PUBLIC_`

### Husky Git Hooks

If pre-commit hooks are not working, run:

```bash
yarn prepare
```

This installs Husky git hooks. The command runs automatically after `yarn install`.

What runs on each commit is defined in `lint-staged.config.js` (lint, format, type-check, tests) and `.husky/commit-msg` (commitlint).

## Why

I have created several NextJs webs recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. Feel free to tweak it or even maintains your own forks.
