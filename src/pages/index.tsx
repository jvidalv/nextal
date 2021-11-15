import type { NextPage } from "next";
import Head from "next/head";
import Button from "@/components/atoms/button";
import CopyButton from "@/components/molecules/copy-button";
import Feature, { FeatureProps } from "@/components/molecules/feature";

import styles from "./index.module.css";

const features: FeatureProps[] = [
  {
    title: "Next",
    description:
      "Best developer experience with all the features you need for production: hybrid static & server rendering",
    link: "https://nextjs.org/",
  },
  {
    title: "React",
    description: "JavaScript library for building user interfaces.",
    link: "https://reactjs.org/",
  },
  {
    title: "TypeScript",
    description:
      "Strongly typed programming language that builds on JavaScript.",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "Tailwind with JIT",
    description: "A utility-first CSS framework packed with classes.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "Jest",
    description: "Testing Framework with a focus on simplicity.",
    link: "https://jestjs.io/",
  },
  {
    title: "Dark Mode",
    description: "Dark theme support for CSS-Modules and Tailwind.",
    link: "https://tailwindcss.com/docs/dark-mode",
  },
  {
    title: "CSS Modules",
    description:
      "CSS file in which all class names and animation names are scoped locally by default.",
    link: "https://github.com/css-modules/css-modules",
  },
  {
    title: "ESLint",
    description: "Find and fix problems in your JavaScript code.",
    link: "https://eslint.org/",
  },
  {
    title: "Prettier",
    description: "An opinionated code formatter.",
    link: "https://prettier.io/",
  },
  {
    title: "Husky",
    description:
      "Lint your commit messages, run tests, lint code, etc... when you commit or push.",
    link: "https://github.com/typicode/husky",
  },
  {
    title: "Commit-lint",
    description: "Helps your team adhering to a commit convention.",
    link: "https://github.com/conventional-changelog/commitlint",
  },
  {
    title: "Atomic design",
    description:
      "We’re not designing pages, we’re designing systems of components.",
    link: "https://bradfrost.com/blog/post/atomic-web-design/",
  },
  {
    title: "Absolute imports",
    description:
      "Import resource using its full path from the project’s src folder.",
    link: "https://github.com/vitejs/vite/issues/88#issuecomment-762415200",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nextal - Next Starter Template</title>
        <meta
          name="description"
          content="NextJs starter template using TypeScript and Tailwind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.copy}>
        <div className={styles.copyInner}>
          <a href="https://github.com/jvidalv/nextal">
            <Button>Visit on Github</Button>
          </a>
          <CopyButton text="npx degit jvidalv/nextal my-nextjs-app" />
        </div>
      </section>
      <section className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feature}>
            <Feature {...f} />
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
