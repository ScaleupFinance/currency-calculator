import styles from "./Header.module.css";

export const Header = () => (
  <div className={styles.header}>
    <h1 className={styles.title}>Currency Converter</h1>
    <p className={styles.content}>
      Check live rates, set rate alerts, receive notifications and more.
    </p>
  </div>
);
