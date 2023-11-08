"use client";

import styles from "./Converter.module.css";
import Image from "next/image";
import { Select } from "./Select";
import { useState } from "react";

export const Converter = () => {
  const [base, setBase] = useState("DKK");
  const [target, setTarget] = useState("GBP");

  const handleBaseChange = (event) => {
    setBase(event.target.value);
  };

  const handleTargetChange = (event) => {
    setTarget(event.target.value);
  };

  return (
    <div className={styles.converter}>
      <div>
        <label className={styles.label} htmlFor="amount">
          Amount
        </label>
        <Select value={base} onChange={handleBaseChange} />
        <input className={styles.input} id="amount" type="number" />
      </div>
      <div>
        <hr className={styles.separtor} />
        <button className={styles.swap}>
          <Image src="/swap.svg" alt="Swap" width={14.5} height={20} />
        </button>
      </div>
      <div>
        <label className={styles.label} htmlFor="converted">
          Converted Amount
        </label>
        <Select value={target} onChange={handleTargetChange} />
        <input className={styles.input} id="amount" type="number" />
      </div>
    </div>
  );
};
