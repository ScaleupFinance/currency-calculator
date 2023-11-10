"use client";

import styles from "./Form.module.css";
import { Select } from "./common/Select";
import { ChangeEvent, useEffect, useState } from "react";
import { round } from "@/utils/round";
import { Separator } from "./Separator";

export const Form = ({ rates, base, target, onChangeBase, onChangeTarget }) => {
  const [amount, setAmount] = useState("100");
  const [converted, setConverted] = useState(
    round(100 * Number(rates.DKK.GBP))
  );

  useEffect(() => {
    setConverted(round(Number(amount) * Number(rates[base][target])));
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
    <div className={styles.form}>
      <div>
        <label htmlFor="amount">Amount</label>
        <div className={styles.inputRow}>
          <Select
            options={Object.keys(rates)}
            value={base}
            onChange={handleBaseChange}
          />
          <input
            id="amount"
            type="text"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
      </div>

      <Separator />

      <div>
        <label className={styles.label} htmlFor="converted">
          Converted Amount
        </label>
        <div className={styles.inputRow}>
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
    </div>
  );
};
