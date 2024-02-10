import Card from "@/components/organisms/card";
import Button from "@/components/atoms/button";
import CopyButton from "@/components/molecules/copy-button";

const features = [
  {
    title: "Next.js",
    description:
      "Best developer experience with all the features you need for production.",
    link: "https://nextjs.org/",
  },
  {
    title: "React",
    description: "THE JavaScript library for building user interfaces.",
    link: "https://reactjs.org/",
  },
  {
    title: "TypeScript",
    description:
      "Strongly typed programming language that builds on JavaScript.",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: "Tailwind",
    description: "A utility-first CSS framework packed with classes.",
    link: "https://tailwindcss.com/",
  },
  {
    title: "Vitest",
    description: "Testing Framework with a focus on simplicity.",
    link: "https://vitest.dev/",
  },
  {
    title: "Dark Mode",
    description: "Dark theme support for CSS-Modules and Tailwind.",
    link: "https://tailwindcss.com/docs/dark-mode",
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

function App() {
  return (
    <>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="sm:flex sm:space-x-6 space-y-4 sm:space-y-0 items-center">
          <a href="https://github.com/jvidalv/vital">
            <Button>Visit on Github</Button>
          </a>
          <CopyButton text="npx degit jvidalv/nextal my-nextjs-app" />
        </div>
      </section>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4">
        {features.map((props, index) => (
          <div key={index} className="col-span-10 sm:col-span-5">
            <Card
              title={props.title}
              description={props.description}
              href={props.link}
            />
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
