import styles from "./Footer.module.css";

export const Footer = ({ baseCurrency, rate, targetCurrency }) => (
  <div className={styles.footer}>
    <p className={styles.label}>Indicative Exchange Rate</p>
    <p className={styles.rate}>
      1 {baseCurrency} = {rate} {targetCurrency}
    </p>
  </div>
);
