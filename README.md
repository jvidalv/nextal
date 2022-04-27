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

- ⚡️ [Next 12 with React 18](https://nextjs.org/docs/getting-started)
- 🦾 TypeScript, of course
- 🫀 [Jest](https://jestjs.io/) - unitary testing made easy
- 🎨 [Tailwind with JIT](https://tailwindcss.com/) - next generation utility-first CSS
- 🌚 [Dark Mode](https://tailwindcss.com/docs/dark-mode)
- 🪢 [CSS Modules](https://github.com/css-modules/css-modules)
- 👑 [Atomic Design organization](https://bradfrost.com/blog/post/atomic-web-design/)
- 🗂 [Absolute imports](https://github.com/vitejs/vite/issues/88#issuecomment-762415200)
- 😃 [Hero icons](https://heroicons.com/)
- ☁️ Deploy on Netlify, zero-config

### Coding Style

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [Commit lint](https://github.com/conventional-changelog/commitlint) - helps your team adhering to a commit convention
- [Netlify](https://www.netlify.com/) - zero-config deployment

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/jvidalv/nextal/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
npx degit jvidalv/nextal my-nextjs-app
cd my-nextjs-app
yarn # If you don't have yarn installed, run: npm install -g yarn
```

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Rename `name` and `author` fields in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `index.html`
- [ ] Change the favicon in `public`
- [ ] Modify the manifest in `public`
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

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your repository, `OK` along the way, and your App will be live in a minute.

## Issues

#### Dark mode

With CSS-Modules the "global" css-var `.dark` is not visible inside `.module.css` files, thus the Tailwind variant `dark:x` does not work.

In order for it to work inside `module.css` files you must leverage to `:global`, example:

```css
:global(.dark) .title {
  @apply text-white;
}
```

#### Husky

If pre-commit hooks are not working be sure that you have installed husky: `husky install`.

By default this command should be triggered after yarn/npm deps are installed.

## Why

I have created several NextJs webs recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time.

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. Feel free to tweak it or even maintains your own forks.
