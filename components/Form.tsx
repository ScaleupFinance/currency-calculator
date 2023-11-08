"use client";

import styles from "./Form.module.css";
import Image from "next/image";
import { Select } from "./Select";
import { useEffect, useState } from "react";
import { round } from "@/utils/round";

export const Form = ({ rates, base, target, onChangeBase, onChangeTarget }) => {
  const [amount, setAmount] = useState(100);
  const [converted, setConverted] = useState(
    round(100 * Number(rates.DKK.GBP))
  );

  useEffect(() => {
    setConverted(round(amount * Number(rates[base][target])));
  }, [amount, base, rates, target]);

  const handleBaseChange = (event) => {
    onChangeBase(event.target.value);
  };

  const handleTargetChange = (event) => {
    onChangeTarget(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className={styles.converter}>
      <div>
        <label className={styles.label} htmlFor="amount">
          Amount
        </label>
        <Select
          options={Object.keys(rates)}
          value={base}
          onChange={handleBaseChange}
        />
        <input
          className={styles.input}
          id="amount"
          type="text"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div>
        <hr className={styles.separtor} />
        <button className={styles.swap}>
          <Image src="/swap.svg" alt="Swap" width={16} height={20} />
        </button>
      </div>
      <div>
        <label className={styles.label} htmlFor="converted">
          Converted Amount
        </label>
        <Select
          options={Object.keys(rates)}
          value={target}
          onChange={handleTargetChange}
        />
        <input
          className={styles.input}
          id="amount"
          type="text"
          value={converted}
          readOnly
        />
      </div>
    </div>
  );
};
