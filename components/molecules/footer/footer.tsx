import styles from "./footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <a className={styles.link} href="https://github.com/jvidalv">
        Josep Vidal @ {new Date().getFullYear()}
      </a>
    </footer>
  );
};

export default Footer;
