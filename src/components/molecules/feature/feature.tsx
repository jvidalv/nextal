import styles from "./feature.module.css";

export interface FeatureProps {
  title: string;
  description: string;
  link: string;
}

const Feature = (props: FeatureProps): JSX.Element => {
  const { title, link, description } = props;
  return (
    <a href={link} className={styles.feature}>
      <h2 className={styles.title}>{title} &rarr;</h2>
      <p className={styles.description}>{description}</p>
    </a>
  );
};

export default Feature;
