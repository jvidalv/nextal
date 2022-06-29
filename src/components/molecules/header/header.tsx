import styles from "./header.module.css";

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h3 className={styles.topTitle}>
        <span className={styles.nextal}>Nextal</span> @ NextJs Template
      </h3>
      <h1 className={styles.title}>TypeScript & Tailwind</h1>
      <p className={styles.description}>
        Get your website up and running faster than ever. Comes with:{" "}
        <code className={styles.code}>CSS-Modules</code>,{" "}
        <code className={styles.code}>Jest</code>,{" "}
        <code className={styles.code}>Dark mode</code>,{" "}
        <code className={styles.code}>Husky</code>,{" "}
        <code className={styles.code}>Commit-lint</code>,{" "}
        <code className={styles.code}>ESLint</code>,{" "}
        <code className={styles.code}>Prettier</code> and{" "}
        <code className={styles.code}>Atomic organization</code>. Configured and
        ready to go.
      </p>
    </header>
  );
};

export default Header;
