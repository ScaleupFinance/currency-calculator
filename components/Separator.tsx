import Image from "next/image";
import styles from "./Separator.module.css";

export const Separator = () => (
  <div className={styles.separatorWrapper}>
    <hr className={styles.separator} />
    <button className={styles.swap}>
      <Image src="/swap.svg" alt="Swap" width={16} height={20} />
    </button>
  </div>
);
