import styles from "./Select.module.css";

export const Select = ({ value, onChange }) => (
  <div className={styles.selectWrapper}>
    <select className={styles.select} onChange={onChange} value={value}>
      <option value="DKK">DKK</option>
      <option value="GBP">GBP</option>
      <option value="EUR">EUR</option>
    </select>
  </div>
);
