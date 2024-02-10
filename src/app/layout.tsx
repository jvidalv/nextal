import type { Metadata } from "next";
import { ReactNode } from "react";
import Logos from "@/components/atoms/logos";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Nextal - Next Starter Template",
  description: "NextJs starter template using TypeScript and Tailwind",
};

function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <header className="pt-16 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
            <h3 className="text-2xl sm:text-4xl leading-none font-bold tracking-tight text-gray-500">
              <span className="text-black opacity-75">Nextal</span> @ Next
              Template
            </h3>
            <h1 className="text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 text-black">
              Next.js + TypeScript + Tailwind
            </h1>
            <p className="max-w-screen-lg text-lg sm:text-xl text-gray-700 font-medium mb-10 sm:mb-11">
              Bootstrap your web projects faster than ever. Comes with:{" "}
              <code className="font-mono text-blue-500 font-bold">
                CSS-Modules
              </code>
              , <code className="font-mono text-blue-500 font-bold">Jest</code>,{" "}
              <code className="font-mono text-blue-500 font-bold">Husky</code>,{" "}
              <code className="font-mono text-blue-500 font-bold">
                Commit-lint
              </code>
              ,{" "}
              <code className="font-mono text-blue-500 font-bold">ESLint</code>,{" "}
              <code className="font-mono text-blue-500 font-bold">
                Prettier
              </code>{" "}
              and{" "}
              <code className="font-mono text-blue-500 font-bold">
                Atomic organization
              </code>
              . Configured and ready to go.
            </p>
            <div className="absolute top-12 right-12 animate-pulse bg-gray-200 h-32 rounded-full items-center flex p-4 opacity-10 lg:opacity-90">
              <Logos.Next className="w-24" />
            </div>
          </header>
          {children}
          <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
            <a href="https://github.com/jvidalv">
              Josep Vidal @ {new Date().getFullYear()}
            </a>
          </footer>
        </main>
      </body>
    </html>
  );
}

export default Layout;
