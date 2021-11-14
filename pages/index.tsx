import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "./index.module.css";
import Button from "@/components/atoms/button";
import CopyButton from "@/components/molecules/copy-button";

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
          <a href="https://github.com/jvidalv/vital">
            <Button>Visit on Github</Button>
          </a>
          <CopyButton text="npx degit jvidalv/vital my-app" />
        </div>
      </section>
      <section className={styles.features}>
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </section>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Home;
