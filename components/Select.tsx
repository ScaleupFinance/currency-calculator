import styles from "./Select.module.css";

export const Select = ({ options, value, onChange }) => (
  <div className={styles.selectWrapper}>
    <select className={styles.select} onChange={onChange} value={value}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);
